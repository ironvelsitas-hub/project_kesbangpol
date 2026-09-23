import json
import hashlib
import re
from pathlib import Path

try:
    import pandas as pd
except ModuleNotFoundError as error:
    raise SystemExit(
        "Dependensi belum terpasang. Jalankan: python -m pip install -r requirements.txt"
    ) from error

base_dir = Path(__file__).resolve().parent
excel_path = base_dir.parent / "Data Lokasi Tawuran 2026 JAKARTA BARAT.xlsx"
out_path = base_dir / "kriminal_konflik_data.js"

centers = {
    "Cengkareng": [-6.1171, 106.7221],
    "Grogol Petamburan": [-6.1714, 106.7903],
    "Kebon Jeruk": [-6.1906, 106.7677],
    "Kalideres": [-6.1181, 106.7073],
    "Kembangan": [-6.1814, 106.7420],
    "Palmerah": [-6.2012, 106.8002],
    "Tambora": [-6.1546, 106.8024],
    "Taman Sari": [-6.1475, 106.8105],
    "Jakarta Barat": [-6.1683, 106.7583],
}


def clean(value):
    if value is None or pd.isna(value):
        return ""
    value = str(value).replace("\n", " ").replace("\r", " ")
    value = re.sub(r"\s+", " ", value).strip()
    return value


def normalize_kecamatan(raw):
    text = clean(raw).lower().replace("kecamatan", "").strip()
    text = re.sub(r"\s+", " ", text)
    return " ".join(part.capitalize() for part in text.split(" ") if part)


def normalize_kelurahan(raw):
    text = clean(raw)
    text = text.replace("Kel.", "Kel.")
    return re.sub(r"\s+", " ", text).strip()


def jitter_coord(kecamatan, raw_location):
    base = centers.get(kecamatan, centers["Jakarta Barat"])
    digest = int(hashlib.md5((kecamatan + "|" + raw_location).encode("utf-8")).hexdigest()[:8], 16)
    dx = ((digest % 1000) - 500) / 50000.0
    dy = (((digest // 1000) % 1000) - 500) / 50000.0
    return [round(base[0] + dy, 6), round(base[1] + dx, 6)]


def parse_sheet(sheet_name, kind):
    df = pd.read_excel(excel_path, sheet_name=sheet_name, header=None)
    rows = []
    current_kecamatan = "Jakarta Barat"
    current_kelurahan = ""

    for _, row in df.iterrows():
        cells = [clean(v) for v in row[:9].tolist()]
        cells.extend([""] * (9 - len(cells)))
        district = cells[1]

        if district and "kecamatan" in district.lower():
            current_kecamatan = normalize_kecamatan(district)
            continue

        if district and (district.lower().startswith("kel.") or "kelurahan" in district.lower()):
            current_kelurahan = normalize_kelurahan(district)
            continue

        loc_candidates = [c for c in cells[2:9] if c and re.search(r"(jl\.|jalan|rt\.|rw\.|komplek|raya|perbatasan|depan|jln|ruko)", c.lower())]
        loc = loc_candidates[0] if loc_candidates else ""
        if not loc or len(loc) < 20:
            continue

        # Extract key metadata
        tanggal = cells[2] if cells[2] else ""
        actor_candidates = [c for c in cells[3:9] if c and len(c) > 3 and c.lower() not in (loc.lower(), tanggal.lower())]
        pelaku = next((c for c in actor_candidates if re.search(r"(siswa|warga|mahasiswa|pelajar|pokmas|masyarakat|aliansi)", c.lower())), "")
        if not pelaku:
            pelaku = cells[6] if cells[6] else cells[5] if cells[5] else ""

        note = cells[8] if cells[8] else cells[7] if cells[7] else ""
        if not note and cells[5] and cells[5].lower() not in (loc.lower(), pelaku.lower()):
            note = cells[5]

        item = {
            "type": kind,
            "kecamatan": current_kecamatan,
            "kelurahan": current_kelurahan,
            "tanggal": tanggal,
            "lokasi": loc,
            "pelaku": pelaku,
            "keterangan": note,
        }
        item["lat"], item["lng"] = jitter_coord(current_kecamatan, loc)
        rows.append(item)

    # Deduplicate by unique location + district + date
    seen = set()
    unique = []
    for item in rows:
        key = (item["kecamatan"], item["lokasi"], item["tanggal"])
        if key in seen:
            continue
        seen.add(key)
        unique.append(item)

    return unique

items = parse_sheet("Data Lokasi Tawuran 2026 ", "Tawuran") + parse_sheet("Data lokasi Konflik Sosial 2026", "Konflik")

out_text = "const kriminalKonflikData = " + json.dumps(items, ensure_ascii=False, indent=2) + ";\n"
out_path.write_text(out_text, encoding="utf-8")

print(f"Generated {len(items)} items to {out_path}")
print(items[:2])
