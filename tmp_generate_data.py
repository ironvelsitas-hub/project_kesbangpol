import pandas as pd
import re
import hashlib
from pathlib import Path

excel = Path(r'C:\Users\LENOVO\Downloads\Projek web kesbangpol\Data Lokasi Tawuran 2026 JAKARTA BARAT.xlsx')
centers = {
    'Cengkareng': [-6.1171, 106.7221],
    'Grogol Petamburan': [-6.1714, 106.7903],
    'Kebon Jeruk': [-6.1906, 106.7677],
    'Kalideres': [-6.1181, 106.7073],
    'Kembangan': [-6.1814, 106.7420],
    'Palmerah': [-6.2012, 106.8002],
    'Tambora': [-6.1546, 106.8024],
    'Taman Sari': [-6.1475, 106.8105],
    'Kramat Jati': [-6.2931,106.8527],
    'Jakarta Barat': [-6.1683,106.7583],
}

def clean(value):
    if value is None or pd.isna(value):
        return ''
    value = str(value).replace('\n', ' ').replace('\r', ' ')
    value = re.sub(r'\s+', ' ', value).strip()
    return value


def normalize_kecamatan(raw):
    s = clean(raw).lower().replace('kecamatan', '').strip()
    s = re.sub(r'\s+', ' ', s)
    parts = [p.capitalize() for p in s.split(' ')]
    return ' '.join(parts)


def make_coord(kecamatan, raw_location):
    base = centers.get(kecamatan, centers['Jakarta Barat'])
    digest = int(hashlib.md5((kecamatan + '|' + raw_location).encode('utf-8')).hexdigest()[:8], 16)
    dx = ((digest % 1000) - 500) / 50000.0
    dy = (((digest // 1000) % 1000) - 500) / 50000.0
    return [round(base[0] + dy, 6), round(base[1] + dx, 6)]


def parse_sheet(sheet_name, kind):
    df = pd.read_excel(excel, sheet_name=sheet_name, header=None)
    rows = []
    current_kecamatan = 'Jakarta Barat'
    current_kelurahan = ''
    for _, row in df.iterrows():
        cells = [clean(v) for v in row[:9].tolist()]
        if len(cells) < 9:
            continue
        district = cells[1]
        if district and re.search(r'^kecamatan\b', district.lower()):
            current_kecamatan = normalize_kecamatan(district)
            continue
        if district and re.search(r'^(kel\.|kelurahan)', district.lower()):
            current_kelurahan = district.replace('Kel.', 'Kel. ').strip()
            current_kelurahan = re.sub(r'\s+', ' ', current_kelurahan)
            continue
        # Look for likely location text
        loc = cells[4] or cells[5]
        if loc and len(loc) > 15 and re.search(r'(jl\.|jalan|rt\.|rw\.|komplek|raya|perbatasan|depan|jl\s)', loc.lower()):
            item = {
                'type': kind,
                'kecamatan': current_kecamatan,
                'kelurahan': current_kelurahan,
                'tanggal': cells[2] or '',
                'lokasi': loc,
                'pelaku': cells[6] or '',
                'keterangan': cells[8] or cells[7] or '',
            }
            if not item['pelaku']:
                item['pelaku'] = cells[5] if cells[5] and len(cells[5]) < 80 else ''
            item['lat'], item['lng'] = make_coord(item['kecamatan'], item['lokasi'])
            rows.append(item)
    # Deduplicate by lokasi + kecamatan + tanggal
    seen = set(); unique=[]
    for item in rows:
        key = (item['kecamatan'], item['lokasi'], item['tanggal'])
        if key in seen:
            continue
        seen.add(key)
        unique.append(item)
    return unique

all_items = parse_sheet('Data Lokasi Tawuran 2026 ', 'Tawuran') + parse_sheet('Data lokasi Konflik Sosial 2026', 'Konflik')
print('total items:', len(all_items))
for x in all_items[:5]:
    print(x)

js = 'const kriminalKonflikData = ' + str(all_items).replace('None', 'null') + ';\n'
Path(r'C:\Users\LENOVO\Downloads\Projek web kesbangpol\Belajar-Html\kriminal_konflik_data.js').write_text(js, encoding='utf-8')
print('written to Belajar-Html/kriminal_konflik_data.js')
