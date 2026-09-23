
    // Master Init display on DOM Ready
    document.addEventListener("DOMContentLoaded", function () {
      if (typeof fpkMembers !== 'undefined') renderFpkCards(fpkMembers);
      if (typeof fkubMembers !== 'undefined') renderFkubCards(fkubMembers);
      if (typeof fkdmMembers !== 'undefined') renderFkdmCards(fkdmMembers);
      if (typeof dppiMembers !== 'undefined') renderDppiCards(dppiMembers);
      if (typeof timOrmasMembers !== 'undefined') renderTimOrmasCards(timOrmasMembers);
      if (typeof initPaskibraFilters === 'function') initPaskibraFilters();
      if (typeof paskibraMembers !== 'undefined') renderPaskibraCards(paskibraMembers);
      if (typeof initTimOrmasFilters === 'function') initTimOrmasFilters();
      if (typeof initDprdFilters === 'function') initDprdFilters();
      if (typeof dprdMembers !== 'undefined') renderDprdCards(dprdMembers);
    });









    function getRoleBadgeColor(role) {
      const value = String(role || '').trim();
      const map = {
        Ketua: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
        'Wakil Ketua': 'bg-sky-500/10 text-sky-400 border-sky-500/30',
        Sekertaris: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
        Sekretaris: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
        Bendahara: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
        Anggota: 'bg-slate-500/10 text-slate-300 border-slate-500/30',
      };
      return map[value] || 'bg-slate-500/10 text-slate-300 border-slate-500/30';
    }

    function getReligionBadgeColor(religion) {
      const value = String(religion || '').trim().toUpperCase();
      const map = {
        ISLAM: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
        KRISTEN: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
        KATOLIK: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
        PROTESTAN: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
        BUDDHA: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
        HINDU: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
        KHONGHUCU: 'bg-red-500/10 text-red-400 border-red-500/30',
      };
      return map[value] || 'bg-slate-500/10 text-slate-300 border-slate-500/30';
    }

    const ekonomiData = [
      { no: 1, nama: 'Beras IR. I (IR 64)', kategori: 'Pokok & Sembako', minimal: 14000, rata: 14894, maksimal: 15133 },
      { no: 2, nama: 'Beras IR. II (IR 64) Ramos', kategori: 'Pokok & Sembako', minimal: 13000, rata: 14277, maksimal: 14500 },
      { no: 3, nama: 'Beras IR. III (IR 64)', kategori: 'Pokok & Sembako', minimal: 12000, rata: 13233, maksimal: 13667 },
      { no: 4, nama: 'Beras Muncul .I', kategori: 'Pokok & Sembako', minimal: 0, rata: 0, maksimal: 0 },
      { no: 5, nama: 'Beras IR 42/Pera', kategori: 'Pokok & Sembako', minimal: 14333, rata: 16105, maksimal: 43800 },
      { no: 6, nama: 'Beras Setra I/Premium', kategori: 'Pokok & Sembako', minimal: 15000, rata: 16667, maksimal: 18500 },
      { no: 7, nama: 'Minyak Goreng (Kuning/Curah)', kategori: 'Pokok & Sembako', minimal: 19600, rata: 20083, maksimal: 20400 },
      { no: 8, nama: 'Cabe Merah Keriting', kategori: 'Rempah & Bumbu', minimal: 38833, rata: 45475, maksimal: 58333 },
      { no: 9, nama: 'Cabe Merah Besar (TW)', kategori: 'Rempah & Bumbu', minimal: 40400, rata: 48396, maksimal: 58333 },
      { no: 10, nama: 'Cabe Rawit Merah', kategori: 'Rempah & Bumbu', minimal: 69667, rata: 94231, maksimal: 124167 },
      { no: 11, nama: 'Cabe Rawit Hijau', kategori: 'Rempah & Bumbu', minimal: 51667, rata: 59103, maksimal: 64000 },
      { no: 12, nama: 'Bawang Merah', kategori: 'Rempah & Bumbu', minimal: 43333, rata: 48370, maksimal: 52857 },
      { no: 13, nama: 'Bawang Putih', kategori: 'Rempah & Bumbu', minimal: 36000, rata: 37543, maksimal: 38500 },
      { no: 14, nama: 'Daging Sapi Has (Paha Belakang)', kategori: 'Protein & Hewani', minimal: 141667, rata: 145713, maksimal: 150000 },
      { no: 15, nama: 'Daging Sapi Murni (Semur)', kategori: 'Protein & Hewani', minimal: 138000, rata: 141414, maksimal: 145000 },
      { no: 16, nama: 'Ayam Broiler/Ras', kategori: 'Protein & Hewani', minimal: 34400, rata: 41099, maksimal: 45000 },
      { no: 17, nama: 'Telur Ayam Ras', kategori: 'Protein & Hewani', minimal: 29286, rata: 31100, maksimal: 32333 },
      { no: 18, nama: 'Gula Pasir', kategori: 'Pokok & Sembako', minimal: 18000, rata: 18366, maksimal: 18500 },
      { no: 19, nama: 'Tepung Terigu', kategori: 'Pokok & Sembako', minimal: 10667, rata: 11614, maksimal: 12500 },
      { no: 20, nama: 'Garam Dapur', kategori: 'Pokok & Sembako', minimal: 4167, rata: 4821, maksimal: 12083 },
      { no: 21, nama: 'Kentang (sedang)', kategori: 'Buah & Sayur', minimal: 15000, rata: 17248, maksimal: 39571 },
      { no: 22, nama: 'Tomat Buah', kategori: 'Buah & Sayur', minimal: 15000, rata: 16527, maksimal: 17833 },
      { no: 23, nama: 'Kelapa Kupas', kategori: 'Buah & Sayur', minimal: 14333, rata: 15067, maksimal: 15200 },
      { no: 24, nama: 'Semangka', kategori: 'Buah & Sayur', minimal: 7667, rata: 12882, maksimal: 15000 },
      { no: 25, nama: 'Jeruk Medan', kategori: 'Buah & Sayur', minimal: 29000, rata: 29479, maksimal: 30000 },
      { no: 26, nama: 'Daging Kambing', kategori: 'Protein & Hewani', minimal: 150000, rata: 150000, maksimal: 150000 },
      { no: 27, nama: 'Daging Babi Berlemak', kategori: 'Protein & Hewani', minimal: 86625, rata: 115788, maksimal: 128333 },
      { no: 28, nama: 'Ikan Bandeng (sedang)', kategori: 'Protein & Hewani', minimal: 41667, rata: 46778, maksimal: 51000 },
      { no: 29, nama: 'Ikan Mas', kategori: 'Protein & Hewani', minimal: 40667, rata: 41427, maksimal: 43500 },
      { no: 30, nama: 'Ikan Lele', kategori: 'Protein & Hewani', minimal: 29833, rata: 30436, maksimal: 31667 },
      { no: 31, nama: 'Gas Elpiji 3kg', kategori: 'Pokok & Sembako', minimal: 22000, rata: 22000, maksimal: 22000 },
      { no: 32, nama: 'Susu Bubuk Bendera 400gr', kategori: 'Susu & Olahan', minimal: 45000, rata: 45682, maksimal: 50000 },
      { no: 33, nama: 'Susu Bubuk Dancow 400gr', kategori: 'Susu & Olahan', minimal: 45000, rata: 49545, maksimal: 50000 },
      { no: 34, nama: 'Susu Kental Bendera 200gr', kategori: 'Susu & Olahan', minimal: 13000, rata: 13276, maksimal: 13667 },
      { no: 35, nama: 'Susu Kental Enak 200gr', kategori: 'Susu & Olahan', minimal: 12000, rata: 12353, maksimal: 12667 },
      { no: 36, nama: 'Margarin Blueband Cup', kategori: 'Pokok & Sembako', minimal: 18500, rata: 19346, maksimal: 21000 },
      { no: 37, nama: 'Margarin Blueband Sachet', kategori: 'Pokok & Sembako', minimal: 9000, rata: 9737, maksimal: 10400 },
      { no: 38, nama: 'Beras Medium', kategori: 'Pokok & Sembako', minimal: 14000, rata: 14000, maksimal: 14000 },
      { no: 39, nama: 'Gula Pasir Kemasan Premium', kategori: 'Pokok & Sembako', minimal: 18667, rata: 18990, maksimal: 20000 },
      { no: 40, nama: 'Minyak Goreng Kemasan Premium', kategori: 'Pokok & Sembako', minimal: 20000, rata: 21020, maksimal: 21750 },
      { no: 41, nama: 'Minyak Goreng MINYAKITA', kategori: 'Pokok & Sembako', minimal: 15700, rata: 17464, maksimal: 18233 },
      { no: 42, nama: 'Daging Sapi', kategori: 'Protein & Hewani', minimal: 140000, rata: 140000, maksimal: 140000 },
      { no: 43, nama: 'Cabe Rawit Ijo Besar', kategori: 'Rempah & Bumbu', minimal: 27500, rata: 33033, maksimal: 43333 },
      { no: 44, nama: 'Kacang Kedelai', kategori: 'Pokok & Sembako', minimal: 12000, rata: 14240, maksimal: 16000 },
      { no: 45, nama: 'Ikan Kembung', kategori: 'Protein & Hewani', minimal: 45000, rata: 47233, maksimal: 50000 }
    ];

    function formatRupiah(value) {
      if (value === null || value === undefined || Number.isNaN(Number(value))) return 'Rp 0';
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0,
      }).format(Number(value));
    }

    function getEkonomiStatus(value) {
      if (value >= 100000) return { label: 'Tinggi', type: 'bg-rose-100 text-rose-700 border border-rose-200' };
      if (value >= 30000) return { label: 'Normal', type: 'bg-amber-100 text-amber-700 border border-amber-200' };
      return { label: 'Rendah', type: 'bg-emerald-100 text-emerald-700 border border-emerald-200' };
    }

    function renderEkonomiSummary(list) {
      const total = list.length;
      const avg = total ? list.reduce((sum, item) => sum + Number(item.rata || 0), 0) / total : 0;
      const highest = list.reduce((best, item) => (Number(item.rata || 0) > Number(best.rata || 0) ? item : best), list[0] || null);
      const lowest = list.reduce((best, item) => (Number(item.rata || 0) < Number(best.rata || 0) ? item : best), list[0] || null);

      document.getElementById('ekonomi-total').textContent = total;
      document.getElementById('ekonomi-ratarata').textContent = formatRupiah(avg);
      document.getElementById('ekonomi-tertinggi').textContent = highest ? highest.nama : '-';
      document.getElementById('ekonomi-tertinggi-harga').textContent = highest ? formatRupiah(highest.rata) : 'Rp 0';
      document.getElementById('ekonomi-terendah').textContent = lowest ? lowest.nama : '-';
      document.getElementById('ekonomi-terendah-harga').textContent = lowest ? formatRupiah(lowest.rata) : 'Rp 0';
    }

    function renderEkonomiTable() {
      const search = (document.getElementById('ekonomi-search')?.value || '').toLowerCase();
      const category = document.getElementById('ekonomi-kategori')?.value || 'semua';
      const sortMode = document.getElementById('ekonomi-sort')?.value || 'rata-tinggi';

      let filtered = ekonomiData.filter((item) => {
        const categoryMatch = category === 'semua' || item.kategori === category;
        const searchMatch = !search || item.nama.toLowerCase().includes(search) || item.kategori.toLowerCase().includes(search);
        return categoryMatch && searchMatch;
      });

      if (sortMode === 'rata-rendah') filtered = [...filtered].sort((a, b) => Number(a.rata) - Number(b.rata));
      else if (sortMode === 'nama') filtered = [...filtered].sort((a, b) => a.nama.localeCompare(b.nama));
      else filtered = [...filtered].sort((a, b) => Number(b.rata) - Number(a.rata));

      renderEkonomiSummary(filtered);

      const tbody = document.getElementById('ekonomi-table-body');
      if (!tbody) return;

      if (!filtered.length) {
        tbody.innerHTML = `
          <tr>
            <td colspan="7" class="px-4 py-10 text-center text-sm text-slate-500">
              <div class="flex flex-col items-center gap-2">
                <i class="fa-solid fa-magnifying-glass text-lg text-slate-400"></i>
                <span>Data komoditas tidak ditemukan untuk filter saat ini.</span>
              </div>
            </td>
          </tr>
        `;
        return;
      }

      tbody.innerHTML = filtered.map((item, index) => {
        const status = getEkonomiStatus(Number(item.rata || 0));
        return `
          <tr class="hover:bg-slate-50">
            <td class="px-4 py-3 text-sm text-slate-600">${index + 1}</td>
            <td class="px-4 py-3">
              <div class="font-semibold text-slate-900">${item.nama}</div>
            </td>
            <td class="px-4 py-3">
              <span class="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">${item.kategori}</span>
            </td>
            <td class="px-4 py-3 text-right text-sm text-slate-700">${formatRupiah(item.minimal)}</td>
            <td class="px-4 py-3 text-right text-sm font-bold text-slate-900">${formatRupiah(item.rata)}</td>
            <td class="px-4 py-3 text-right text-sm text-slate-700">${formatRupiah(item.maksimal)}</td>
            <td class="px-4 py-3"><span class="inline-flex rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] ${status.type}">${status.label}</span></td>
          </tr>
        `;
      }).join('');
    }

    document.getElementById('ekonomi-search')?.addEventListener('input', renderEkonomiTable);
    document.getElementById('ekonomi-kategori')?.addEventListener('change', renderEkonomiTable);
    document.getElementById('ekonomi-sort')?.addEventListener('change', renderEkonomiTable);
    renderEkonomiTable();

    function switchTab(tab) {
      const tabs = ['fpk', 'fkub', 'fkdm', 'paskibraka', 'dppi', 'tim-ormas', 'ormas-terlapor', 'dprd'];
      tabs.forEach((key) => {
        const panel = document.getElementById(`tab-content-${key}`);
        const button = document.getElementById(`tab-${key}`);

        if (panel) {
          panel.classList.toggle('hidden', key !== tab);
        }

        if (button) {
          if (key === tab) {
            button.className = 'tab-btn flex-1 min-w-[80px] px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.4)] font-mono tracking-wider';
          } else {
            button.className = 'tab-btn flex-1 min-w-[80px] px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 text-slate-400 hover:text-white hover:bg-slate-800 font-mono tracking-wider';
          }
        }
      });
    }

    document.addEventListener("DOMContentLoaded", function () {
      if (typeof initTimOrmasFilters === 'function') initTimOrmasFilters();
      if (typeof timOrmasMembers !== 'undefined') renderTimOrmasCards(timOrmasMembers);
      if (typeof initOrmasTerlaporFilters === 'function') initOrmasTerlaporFilters();
      if (typeof ormasTerlaporData !== 'undefined') renderOrmasTerlaporCards(ormasTerlaporData);

      const mapCenter = [-6.1683, 106.7583];
      const kecamatanCenters = {
        'Cengkareng': [-6.1171, 106.7221],
        'Grogol Petamburan': [-6.1714, 106.7903],
        'Kebon Jeruk': [-6.1906, 106.7677],
        'Kalideres': [-6.1181, 106.7073],
        'Kembangan': [-6.1814, 106.7420],
        'Palmerah': [-6.2012, 106.8002],
        'Tambora': [-6.1546, 106.8024],
        'Taman Sari': [-6.1475, 106.8105]
      };

      const jenisColors = {
        'Masjid / Mushola': '#2563eb',
        'Gereja': '#16a34a',
        'Vihara': '#f59e0b',
        'Pura': '#e11d48',
        'Klenteng': '#7c3aed',
        'Tempat Ibadah': '#475569'
      };

      const map = L.map("map").setView(mapCenter, 12);

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: "abcd",
          maxZoom: 20,
        }
      ).addTo(map);

      const rumahIbadahLayer = L.layerGroup().addTo(map);

      function getMarkerIcon(color) {
        return L.divIcon({
          className: 'custom-div-icon',
          html: `
            <div class="relative flex items-center justify-center w-8 h-8">
              <div class="absolute w-7 h-7 rounded-full opacity-30" style="background:${color}; animation: pulse 1.8s infinite ease-in-out;"></div>
              <div class="relative w-4 h-4 rounded-full border-2 border-white shadow-lg" style="background:${color};"></div>
            </div>
          `,
          iconSize: [28, 28],
          iconAnchor: [14, 14],
        });
      }

      function normalizeText(value) {
        return String(value ?? '').toLowerCase().trim();
      }

      function getFilteredRumahIbadah() {
        const kecamatan = document.getElementById('rumah-ibadah-kecamatan-filter')?.value || 'semua';
        const jenis = document.getElementById('rumah-ibadah-jenis-filter')?.value || 'semua';
        const search = normalizeText(document.getElementById('rumah-ibadah-search')?.value || '');

        return rumahIbadahData.filter((item) => {
          const matchKecamatan = kecamatan === 'semua' || item.kecamatan === kecamatan;
          const matchJenis = jenis === 'semua' || item.jenis === jenis;
          const searchText = `${item.nama} ${item.alamat} ${item.kecamatan} ${item.kelurahan}`.toLowerCase();
          const matchSearch = !search || searchText.includes(search);
          return matchKecamatan && matchJenis && matchSearch;
        });
      }

      function renderRumahIbadahStats(list) {
        const total = list.length;
        const kecamatanSet = new Set(list.map((item) => item.kecamatan));
        const jenisSet = new Set(list.map((item) => item.jenis));
        const kapasitas = list
          .map((item) => Number(item.kapasitas) || 0)
          .filter((value) => value > 0);
        const avgKapasitas = kapasitas.length ? Math.round(kapasitas.reduce((sum, value) => sum + value, 0) / kapasitas.length) : 0;

        document.getElementById('rumah-ibadah-total').textContent = total;
        document.getElementById('rumah-ibadah-kecamatan').textContent = kecamatanSet.size;
        document.getElementById('rumah-ibadah-jenis').textContent = jenisSet.size;
        document.getElementById('rumah-ibadah-kapasitas').textContent = avgKapasitas.toLocaleString('id-ID');
      }

      function renderRumahIbadahTable(list) {
        const tbody = document.getElementById('rumah-ibadah-table-body');
        if (!tbody) return;

        if (!list.length) {
          tbody.innerHTML = `
            <tr>
              <td colspan="3" class="px-4 py-10 text-center text-sm text-slate-500">
                <div class="flex flex-col items-center gap-2">
                  <i class="fa-solid fa-magnifying-glass text-lg text-slate-400"></i>
                  <span>Data rumah ibadah tidak ditemukan.</span>
                </div>
              </td>
            </tr>
          `;
          return;
        }

        tbody.innerHTML = list.slice(0, 80).map((item) => `
          <tr class="hover:bg-slate-50 cursor-pointer" data-name="${item.nama}">
            <td class="px-4 py-3">
              <div class="font-semibold text-slate-900">${item.nama}</div>
              <div class="text-[11px] text-slate-500">${item.alamat}</div>
            </td>
            <td class="px-4 py-3 text-slate-700">${item.kecamatan}</td>
            <td class="px-4 py-3">
              <span class="inline-flex rounded-full px-2 py-1 text-[10px] font-semibold text-white" style="background:${jenisColors[item.jenis] || '#475569'};">${item.jenis}</span>
            </td>
          </tr>
        `).join('');

        tbody.querySelectorAll('tr[data-name]').forEach((row) => {
          row.addEventListener('click', () => {
            const name = row.dataset.name;
            const target = list.find((item) => item.nama === name);
            if (!target) return;
            const center = getRumahIbadahPoint(target, list.filter((item) => item.kecamatan === target.kecamatan).indexOf(target));
            map.flyTo(center, 15, { animate: true, duration: 1.2 });
          });
        });
      }

      function getRumahIbadahPoint(item, indexInKecamatan = 0) {
        const base = kecamatanCenters[item.kecamatan] || mapCenter;
        const ring = indexInKecamatan % 8;
        const angle = (Math.PI * 2 * ring) / 8;
        const radius = 0.0038 + (indexInKecamatan % 3) * 0.0008;
        return [base[0] + Math.cos(angle) * radius, base[1] + Math.sin(angle) * radius];
      }

      function renderRumahIbadahMap() {
        const filtered = getFilteredRumahIbadah();
        renderRumahIbadahStats(filtered);
        renderRumahIbadahTable(filtered);
        rumahIbadahLayer.clearLayers();

        if (!filtered.length) {
          map.setView(mapCenter, 12);
          return;
        }

        const groupedByKecamatan = filtered.reduce((acc, item) => {
          acc[item.kecamatan] = acc[item.kecamatan] || [];
          acc[item.kecamatan].push(item);
          return acc;
        }, {});

        Object.entries(groupedByKecamatan).forEach(([kecamatan, items]) => {
          items.forEach((item, index) => {
            const coords = getRumahIbadahPoint(item, index);
            const marker = L.marker(coords, {
              icon: getMarkerIcon(jenisColors[item.jenis] || '#475569'),
              riseOnHover: true,
            }).bindPopup(`
              <div class="p-2 min-w-[180px]">
                <div class="mb-2 flex items-center gap-2">
                  <span class="inline-flex h-2.5 w-2.5 rounded-full" style="background:${jenisColors[item.jenis] || '#475569'}"></span>
                  <strong class="text-sm text-slate-800">${item.nama}</strong>
                </div>
                <p class="mb-1 text-[11px] text-slate-600"><strong>Kecamatan:</strong> ${item.kecamatan}</p>
                <p class="mb-1 text-[11px] text-slate-600"><strong>Kelurahan:</strong> ${item.kelurahan}</p>
                <p class="mb-1 text-[11px] text-slate-600"><strong>Jenis:</strong> ${item.jenis}</p>
                <p class="text-[11px] text-slate-600"><strong>Alamat:</strong> ${item.alamat}</p>
              </div>
            `);
            marker.addTo(rumahIbadahLayer);
          });
        });

        const bounds = rumahIbadahLayer.getBounds();
        if (bounds && bounds.isValid()) {
          map.fitBounds(bounds.pad(0.25));
        } else {
          map.setView(mapCenter, 12);
        }
      }

      const kecamatanSelect = document.getElementById('rumah-ibadah-kecamatan-filter');
      const jenisSelect = document.getElementById('rumah-ibadah-jenis-filter');
      const searchInput = document.getElementById('rumah-ibadah-search');

      const kecamatanList = [...new Set(rumahIbadahData.map((item) => item.kecamatan))].sort();
      kecamatanList.forEach((kecamatan) => {
        const option = document.createElement('option');
        option.value = kecamatan;
        option.textContent = kecamatan;
        kecamatanSelect?.appendChild(option);
      });

      const jenisList = [...new Set(rumahIbadahData.map((item) => item.jenis))].sort();
      jenisList.forEach((jenis) => {
        const option = document.createElement('option');
        option.value = jenis;
        option.textContent = jenis;
        jenisSelect?.appendChild(option);
      });

      [kecamatanSelect, jenisSelect].forEach((select) => {
        select?.addEventListener('change', renderRumahIbadahMap);
      });
      searchInput?.addEventListener('input', renderRumahIbadahMap);

      renderRumahIbadahMap();
    });

    // FKUB Members Database
    const fkubMembers = [
      {
            "no": 1,
            "name": "H. Saumun, S.Sos",
            "jabatan": "Ketua",
            "agama": "Islam",
            "address": "Jl. Arteri Kebon Jeruk No.8A RT.004 RW.001 Kel. Kebon Jeruk, Kec. Kebon Jeruk",
            "phone": "08128619565"
      },
      {
            "no": 2,
            "name": "H. M. Dahlan, S.Ag",
            "jabatan": "Wakil Ketua 1",
            "agama": "Islam",
            "address": "Jl. Adam RT.006 RW.011 Kel. Sukabumi Utara, Kec. Kebon Jeruk",
            "phone": "081514283338"
      },
      {
            "no": 3,
            "name": "Eddy Soesanto Herman",
            "jabatan": "Wakil Ketua 2",
            "agama": "Katholik",
            "address": "Jl. Cahaya Blok D 7/6 RT.001 RW.004 Kel. Kembangan Selatan, Kec. Kembangan",
            "phone": "08129221375"
      },
      {
            "no": 4,
            "name": "Pdt. Dr. Altin Sihombing, SH. MH",
            "jabatan": "Wakil Ketua 2",
            "agama": "Protestan",
            "address": "Kp. Perjuangan RT.015 RW.010 Kel. Kebon Jeruk, Kec. Kebon Jeruk",
            "phone": "082111447464"
      },
      {
            "no": 5,
            "name": "H. Rasyid Ridho",
            "jabatan": "Sekretaris",
            "agama": "Islam",
            "address": "Jl. Dahlan III No.39 RT.004 RW.009 Kel. Kapuk, Kec. Cengkareng",
            "phone": "081385113333"
      },
      {
            "no": 6,
            "name": "Munawaroh, S.Ag",
            "jabatan": "Wakil Sekretaris",
            "agama": "Islam",
            "address": "Kp. Basmol No.12 RT.011 RW.006 Kel. Kembangan Utara, Kec. Kembangan",
            "phone": "085770123417"
      },
      {
            "no": 7,
            "name": "H. Ahmad Suhaeri Gaos",
            "jabatan": "Bendahara",
            "agama": "Islam",
            "address": "Jl. Seari RT.007 RW.003 Kel. Kelapa Dua, Kec. Kebon Jeruk",
            "phone": "081684685"
      },
      {
            "no": 8,
            "name": "Pdt. Mulia Waruwu",
            "jabatan": "Anggota",
            "agama": "Protestan",
            "address": "Jl. Musa Ujung No.6 RT.007 RW.005, Kel. Sukabumi Utara, Kec. Kebon Jeruk",
            "phone": "081280135009"
      },
      {
            "no": 9,
            "name": "Yacobus Pamudji Raharja",
            "jabatan": "Anggota",
            "agama": "Katholik",
            "address": "Kp. Bugis No.1 RT.001 RW.003 Kel. Kembangan Selatan, Kec. Kembangan",
            "phone": "081316164566"
      },
      {
            "no": 10,
            "name": "Rochman",
            "jabatan": "Anggota",
            "agama": "Islam",
            "address": "Asrama Polri Palmerah RT.005 RW.014, Kel. Palmerah, Kec. Palmerah",
            "phone": "08128654151"
      },
      {
            "no": 11,
            "name": "H. M. Anas Effendi",
            "jabatan": "Anggota",
            "agama": "Islam",
            "address": "Jl. Taman Apel V/185 RT.009 RW.003 Kel. Tanjung Duren Utara, Kec. Grogol Petamburan",
            "phone": "-"
      },
      {
            "no": 12,
            "name": "H. Lukman Hakim, S.Ag",
            "jabatan": "Anggota",
            "agama": "Islam",
            "address": "Kedoya Selatan RT.008 RW.002 Kel. Kedoya Selatan, Kec. Kebon Jeruk",
            "phone": "081808385249"
      },
      {
            "no": 13,
            "name": "H. Sa'adi Hamid",
            "jabatan": "Anggota",
            "agama": "Islam",
            "address": "Jl. Pulau Putri II No.8 RT.002 RW.009 Kel. Kembangan Utara, Kec. Kembangan",
            "phone": "087883805976"
      },
      {
            "no": 14,
            "name": "H. Mardjuan Bakri",
            "jabatan": "Anggota",
            "agama": "Islam",
            "address": "Jl. Mawar No.44 RT.003 RW.008 Kel. Srengseng, Kec. Kembangan",
            "phone": "08129092552"
      },
      {
            "no": 15,
            "name": "Gouw Tjeng Sun",
            "jabatan": "Anggota",
            "agama": "Budha",
            "address": "Kp. Sukamulya RT.007 RW.010 Kel. Grogol, Kec. Grogol Petamburan",
            "phone": "081219114284"
      },
      {
            "no": 16,
            "name": "Js. Nurjadi",
            "jabatan": "Anggota",
            "agama": "Khonghucu",
            "address": "Jl. Pademangan IV GG.31 RT.010 RW.001 Kel. Pademangan Timur, Kec. Pademangan",
            "phone": "081808385249"
      },
      {
            "no": 17,
            "name": "Drs. I Ketut Sukadana, M.Sos",
            "jabatan": "Anggota",
            "agama": "Hindu",
            "address": "Jl. Kamal Raya, RT.014 RW.009 Kel. Tegal Alur, Kec. Kalideres",
            "phone": "087883805976"
      }
];

    function renderFkubCards(members) {
      const grid = document.getElementById('fkub-grid');
      const countEl = document.getElementById('fkub-count');
      if (!grid) return;
      if (countEl) countEl.innerText = members.length + ' Anggota';
      grid.innerHTML = '';

      if (members.length === 0) {
        grid.innerHTML = `<div class="col-span-full p-12 rounded-3xl text-center bg-slate-900/60 border border-slate-700/60"><i class="fa-solid fa-user-slash text-3xl text-slate-500 mb-3"></i><h4 class="font-bold text-slate-300">Tidak ada anggota ditemukan</h4></div>`;
        return;
      }

      const agamaColors = {
        'Islam':     'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
        'Protestan': 'bg-blue-500/10 text-blue-400 border-blue-500/30',
        'Katholik':  'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
        'Hindu':     'bg-orange-500/10 text-orange-400 border-orange-500/30',
        'Budha':     'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
        'Khonghucu': 'bg-red-500/10 text-red-400 border-red-500/30',
      };
      const jabatanColors = {
        'Ketua': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
        'Wakil Ketua 1': 'bg-teal-500/10 text-teal-400 border-teal-500/30',
        'Wakil Ketua 2': 'bg-teal-500/10 text-teal-400 border-teal-500/30',
        'Sekretaris': 'bg-sky-500/10 text-sky-400 border-sky-500/30',
        'Wakil Sekretaris': 'bg-sky-500/10 text-sky-400 border-sky-500/30',
        'Bendahara': 'bg-amber-500/10 text-amber-400 border-amber-500/30',
        'Anggota': 'bg-slate-500/10 text-slate-300 border-slate-500/30'
      };

      members.forEach(m => {
        const parts = m.name.replace(/(H\.|Hj\.|Pdt\.|Drs\.|Dr\.|S\.Ag|S\.Sos|SH\.|MH|M\.Sos|Js\.)/g, '').trim().split(' ');
        const initials = (parts[0]?.charAt(0) + (parts[1]?.charAt(0) || '')).toUpperCase();
        const agamaClass = agamaColors[m.agama] || agamaColors['Islam'];
        const jabClass = jabatanColors[m.jabatan] || jabatanColors['Anggota'];
        const hasPhone = m.phone && m.phone !== '-';
        const rawPhone = hasPhone ? m.phone.replace(/[^0-9]/g, '') : '';
        const waPhone = rawPhone.startsWith('0') ? '62' + rawPhone.slice(1) : rawPhone;

        grid.innerHTML += `
          <div class="bg-slate-900/90 border border-slate-700/60 hover:border-emerald-500/50 p-5 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col group backdrop-blur-sm">
            <div class="flex items-start justify-between mb-3">
              <div class="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold font-mono text-sm">${initials}</div>
              <div class="flex flex-col items-end gap-1">
                <span class="px-2.5 py-0.5 border ${jabClass} rounded-full text-[10px] font-mono font-semibold">${m.jabatan}</span>
                <span class="px-2.5 py-0.5 border ${agamaClass} rounded-full text-[9px] font-mono font-semibold">${m.agama}</span>
              </div>
            </div>
            <h4 class="font-bold text-white text-sm mb-1 group-hover:text-emerald-400 transition-colors">${m.name}</h4>
            <div class="flex items-start gap-1.5 text-[11px] text-slate-400 mb-4">
              <i class="fa-solid fa-location-dot mt-0.5 text-slate-500 shrink-0"></i>
              <span class="leading-relaxed">${m.address}</span>
            </div>
            <div class="mt-auto pt-2 border-t border-slate-800">
              ${hasPhone
                ? `<a href="https://wa.me/${waPhone}" target="_blank" class="flex items-center justify-center gap-2 w-full px-4 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 rounded-xl text-xs font-semibold transition">
                    <i class="fa-brands fa-whatsapp"></i><span>Hubungi via WA</span>
                  </a>`
                : `<div class="flex items-center justify-center gap-2 w-full px-4 py-2 bg-slate-800 text-slate-500 border border-slate-700 rounded-xl text-xs">
                    <i class="fa-solid fa-phone-slash"></i><span>Tidak Ada Kontak</span>
                  </div>`
              }
            </div>
          </div>
        `;
      });
    }

    function filterFkub() {
      const q = (document.getElementById('fkub-search')?.value || '').toLowerCase();
      const agama = document.getElementById('fkub-agama-filter')?.value || 'semua';
      renderFkubCards(fkubMembers.filter(m =>
        (agama === 'semua' || m.agama === agama) &&
        (m.name.toLowerCase().includes(q) || m.jabatan.toLowerCase().includes(q) ||
         m.agama.toLowerCase().includes(q) || m.address.toLowerCase().includes(q))
      ));
    }


    // FKDM Members Database
    const fkdmMembers = [
      {
        "no": 1,
        "kecamatan": "KOTA JAKARTA BARAT",
        "kelurahan": "TINGKAT KOTA",
        "name": "Boby Hendrawan",
        "role": "Ketua",
        "gender": "L",
        "dob": "Jakarta, 14 April 1993",
        "address": "Jl. Kapuk No. 100 A, RT/RW. 010/011, Kel. Kapuk, Kec. Cengkareng",
        "phone": "08998135920",
        "email": "bobyhend.411@gmail.com",
        "religion": "Islam",
        "occupation": "Advokat",
        "blood_type": "-"
      },
      {
        "no": 2,
        "kecamatan": "KOTA JAKARTA BARAT",
        "kelurahan": "TINGKAT KOTA",
        "name": "Theodore Bononi Ariel Dima",
        "role": "Sekertaris",
        "gender": "L",
        "dob": "Jakarta, 30 April 1995",
        "address": "Jl. Bahagia No.19, RT/RW. 011/009, Kel. Palmerah, Kec.Palmerah",
        "phone": "085810028850",
        "email": "arieltheo2@gmail.com",
        "religion": "Kristen",
        "occupation": "Karyawan",
        "blood_type": "AB"
      },
      {
        "no": 3,
        "kecamatan": "KOTA JAKARTA BARAT",
        "kelurahan": "TINGKAT KOTA",
        "name": "Abdulloh",
        "role": "Anggota",
        "gender": "L",
        "dob": "Jakarta, 12 November 1971",
        "address": "Jl. H. Rausin N0.79, RT/RW. 002/008, Kel. Kelapa Dua, Kec. Kebon Jeruk",
        "phone": "085777224839",
        "email": "abdulloh77ok@gmail.com",
        "religion": "Islam",
        "occupation": "Wiraswasta",
        "blood_type": "O"
      },
      {
        "no": 4,
        "kecamatan": "KOTA JAKARTA BARAT",
        "kelurahan": "TINGKAT KOTA",
        "name": "Abdy Sugiarto",
        "role": "Anggota",
        "gender": "L",
        "dob": "Jakarta, 02 Februari 1982",
        "address": "Jl. Lontar Raya No.320, RT/RW. 017/006, Kel. Tanjung Duren Utara, Kec.Grogol Petamburan",
        "phone": "0817827182",
        "email": "abdysugiarto@gmail.com",
        "religion": "Islam",
        "occupation": "Wiraswasta",
        "blood_type": "B"
      },
      {
        "no": 5,
        "kecamatan": "KOTA JAKARTA BARAT",
        "kelurahan": "TINGKAT KOTA",
        "name": "Agus Jaenudin",
        "role": "Anggota",
        "gender": "L",
        "dob": "Jakarta, 17 Agustus 1984",
        "address": "Jl. Kalianyar 2, RT/RW. 013/001, Kel. Kali Anyar, Kec. Cengkareng",
        "phone": "081297376381",
        "email": "agusjae1717@gmail.com",
        "religion": "Islam",
        "occupation": "Karyawan Swasta",
        "blood_type": "-"
      },
      {
        "no": 6,
        "kecamatan": "KOTA JAKARTA BARAT",
        "kelurahan": "TINGKAT KOTA",
        "name": "Agus Susanto",
        "role": "Anggota",
        "gender": "L",
        "dob": "Medan, 21 Juli 1979",
        "address": "Jl. Citra 2 Blok B-1/10, Kel. Pegadungan, Kec.Kalideres",
        "phone": "08111466899",
        "email": "devon.curtis.as@gmail.com",
        "religion": "Budha",
        "occupation": "Pengacara",
        "blood_type": "O"
      },
      {
        "no": 7,
        "kecamatan": "KOTA JAKARTA BARAT",
        "kelurahan": "TINGKAT KOTA",
        "name": "Chrisdianto",
        "role": "Anggota",
        "gender": "L",
        "dob": "Jakarta, 25 Desember 1976",
        "address": "Jl. KBS VI No.6, RT/RW. 008/005, Kel. Kota Bambu Selatan, Kec.Palmerah",
        "phone": "081298122223",
        "email": "cdianto6@gmail.com",
        "religion": "Islam",
        "occupation": "Karyawan Swasta",
        "blood_type": "-"
      },
      {
        "no": 8,
        "kecamatan": "KOTA JAKARTA BARAT",
        "kelurahan": "TINGKAT KOTA",
        "name": "Faiz Muhamad Ridho",
        "role": "Anggota",
        "gender": "L",
        "dob": "Jakarta, 23 Januari 1993",
        "address": "Jl. Meruya Utara No.20, RT/RW. 002/001, Kel. Meruya Utara, Kec.Kembangan",
        "phone": "085718713674",
        "email": "faismridho0@gmail.com",
        "religion": "Islam",
        "occupation": "Karyawan Swasta",
        "blood_type": "-"
      },
      {
        "no": 9,
        "kecamatan": "KOTA JAKARTA BARAT",
        "kelurahan": "TINGKAT KOTA",
        "name": "Fajar Pratama Yudha",
        "role": "Anggota",
        "gender": "L",
        "dob": "Jakarta, 27 Oktober 1986",
        "address": "Jl. Karya Bakti, RT/RW. 012/003, Kel. Srengseng, Kec.Kembangan",
        "phone": "082113301391",
        "email": "pratamayudha1086@gmail.com",
        "religion": "Islam",
        "occupation": "Karyawan Swasta",
        "blood_type": "A"
      },
      {
        "no": 10,
        "kecamatan": "KOTA JAKARTA BARAT",
        "kelurahan": "TINGKAT KOTA",
        "name": "M Abu Bakar Maulana",
        "role": "Anggota",
        "gender": "L",
        "dob": "Jakarta, 29 Juli 1995",
        "address": "Jl. Bangun Nusa Raya, RT/RW. 001/015, Kel. Kapuk, Kec. Cengkareng",
        "phone": "081280989868",
        "email": "jawarabangor@gmail.com",
        "religion": "Islam",
        "occupation": "Karyawan Swasta",
        "blood_type": "-"
      },
      {
        "no": 11,
        "kecamatan": "KOTA JAKARTA BARAT",
        "kelurahan": "TINGKAT KOTA",
        "name": "Oding Junaidi",
        "role": "Anggota",
        "gender": "L",
        "dob": "Jakarta, 29 Juni 1969",
        "address": "Jl. Jelambar Ilir No.45, RT/RW. 012/011, Kel. Jelambar Baru, Kec. Grogol Petamburan",
        "phone": "082138745575",
        "email": "odingjuniadi.oj@gmail.com",
        "religion": "Islam",
        "occupation": "Karyawan Swasta",
        "blood_type": "A"
      },
      {
        "no": 1,
        "kecamatan": "TAMBORA",
        "kelurahan": "-",
        "name": "GIYANTO",
        "role": "1.0",
        "gender": "L",
        "dob": "SERAGEN, 15 APRIL 1979",
        "address": "RUSUNAWA II, TOWER C, NO 2, RT/RW. 015/011, : ANGKE, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "081386050007",
        "email": "giyantorambo@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "O"
      },
      {
        "no": 2,
        "kecamatan": "TAMBORA",
        "kelurahan": "-",
        "name": "JOKOSUBAGIO",
        "role": "2.0",
        "gender": "L",
        "dob": "SEMARANG, 25 JANUARI 1978",
        "address": "GG.SONGSI I DALAM NO 2, RT/RW. 002/006, KEL : TAMAN SEREAL, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "0817737028",
        "email": "jokosubagio06@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 3,
        "kecamatan": "TAMBORA",
        "kelurahan": "-",
        "name": "DWI JULIANTO",
        "role": "3.0",
        "gender": "L",
        "dob": "JAKARTA, 5 JULI 1981",
        "address": "JL. KALIANYAR III/22, RT/RW. 009/001, KEL : KALIANYAR, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "-",
        "email": "",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "B"
      },
      {
        "no": 4,
        "kecamatan": "TAMBORA",
        "kelurahan": "-",
        "name": "FIKRI BADRUS ZAMAN",
        "role": "4.0",
        "gender": "L",
        "dob": "JAKARTA, 2 APRIL 1993",
        "address": "GG.SONGSI I DALAM NO 7, RT/RW. 002/006, KEL : TAMAN SEREAL, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "08989854772",
        "email": "fikribadrus.9393@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 5,
        "kecamatan": "TAMBORA",
        "kelurahan": "-",
        "name": "DANIEL",
        "role": "5.0",
        "gender": "L",
        "dob": "JAKARTA, 5 DESEMBER 1985",
        "address": "JL. KALIANYAR 3/07, RT/RW. 007/001, KEL : KALIANYAR, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "085877777512",
        "email": "dkijakartadaniel@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "A"
      },
      {
        "no": 6,
        "kecamatan": "TAMBORA",
        "kelurahan": "-",
        "name": "GATOT YULIANTO",
        "role": "6.0",
        "gender": "L",
        "dob": "WONOSOBO, 28 JULI 1975",
        "address": "RUSUN TAMBORA IV, LT.04 NO 17, RT/RW. 014/011, KEL : ANGKE, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "087810068688",
        "email": "gatotyuliantosgc0101@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "B"
      },
      {
        "no": 7,
        "kecamatan": "TAMBORA",
        "kelurahan": "-",
        "name": "IMAM RIFAI",
        "role": "7.0",
        "gender": "L",
        "dob": "JAKARTA, 4 SEPTEMBER 1995",
        "address": "JL. PEKAPURAN III NO 48C, RT/RW. 004/005, KEL : TANAH SEREAL, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "085840011688",
        "email": "rheefaii495@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "O"
      },
      {
        "no": 8,
        "kecamatan": "TAMBORA",
        "kelurahan": "-",
        "name": "BAHRUL ULUM",
        "role": "8.0",
        "gender": "L",
        "dob": "JAKARTA, 8 APRIL 1998",
        "address": "JL. KALIANYAR X/11, RT/RW. 002/006, KEL : KALIANYAR, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "081211928728",
        "email": "",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 9,
        "kecamatan": "TAMBORA",
        "kelurahan": "-",
        "name": "WAHYU HIDAYAT",
        "role": "9.0",
        "gender": "L",
        "dob": "JAKARTA, 3 MARET 1979",
        "address": "JL.JEMBATAN KEDUNG, RT/RW. 008/005, KEL : TAMBORA, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "081181124000",
        "email": "wadahnusantara92@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 1,
        "kecamatan": "TAMBORA",
        "kelurahan": "KALIANYER",
        "name": "MUHAMMAD ANGGA",
        "role": "1.0",
        "gender": "L",
        "dob": "JAKARTA, 28 SEPTEMBER 1992",
        "address": "JL. KALIANYAR V, RT/RW. 009/003, KEL : KALIANYAR, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "08970020015",
        "email": "muhammadangga@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 2,
        "kecamatan": "TAMBORA",
        "kelurahan": "KALIANYER",
        "name": "JUMAIDI",
        "role": "2.0",
        "gender": "L",
        "dob": "JEPARA, 27 MEI 1977",
        "address": "JL. KALIANYAR II, RT/RW. 013/001, KEL : KALIANYAR, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "081297376657",
        "email": "na2ng.17@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 3,
        "kecamatan": "TAMBORA",
        "kelurahan": "KALIANYER",
        "name": "FAUZIAH MEGA AULIA",
        "role": "3.0",
        "gender": "P",
        "dob": "JAKARTA, 22 OKTOBER 1999",
        "address": "JL. KALIANYAR X/11, RT/RW. 002/006, KEL : KALIANYAR, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "0895364369877",
        "email": "fauzianmegaulia@gmail.com",
        "religion": "ISLAM",
        "occupation": "IBU RUMAH TANGGA",
        "blood_type": "-"
      },
      {
        "no": 4,
        "kecamatan": "TAMBORA",
        "kelurahan": "KALIANYER",
        "name": "MUS ARYANTO",
        "role": "4.0",
        "gender": "L",
        "dob": "JAKARTA, 12 APRIL 1977",
        "address": "JL. KALIANYAR X, RT/RW. 008/007, KEL : KALIANYAR, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "081297545483",
        "email": "mus.aryanto@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 5,
        "kecamatan": "TAMBORA",
        "kelurahan": "KALIANYER",
        "name": "FASKALIS MT SIMBOLON",
        "role": "5.0",
        "gender": "L",
        "dob": "JAKARTA, 2 APRIL 1973",
        "address": "JL. KALIANYAR, RT/RW. 005/003, KEL : KALIANYAR, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "081291687111",
        "email": "monafaskalis73@gmail.com",
        "religion": "KRISTEN",
        "occupation": "WIRASWASTA",
        "blood_type": "-"
      },
      {
        "no": 6,
        "kecamatan": "TAMBORA",
        "kelurahan": "KALIANYER",
        "name": "CECEP ADI",
        "role": "6.0",
        "gender": "L",
        "dob": "JAKARTA, 1 JANUARI 1971",
        "address": "JL. KALIANYAR X, RT/RW. 008/009, KEL : KALIANYAR, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "085695672769",
        "email": "cecepadi857@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 7,
        "kecamatan": "TAMBORA",
        "kelurahan": "KALIANYER",
        "name": "ARIF PRASETYO",
        "role": "7.0",
        "gender": "L",
        "dob": "NGAWI, 19 JANUARI 1981",
        "address": "JL. KALIANYAR X, RT/RW. 003/007, KEL : KALIANYAR, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "081310163433",
        "email": "",
        "religion": "ISLAM",
        "occupation": "PENGACARA",
        "blood_type": "-"
      },
      {
        "no": 1,
        "kecamatan": "TAMBORA",
        "kelurahan": "JEMBATAN BESI",
        "name": "MAD SATTAR",
        "role": "1.0",
        "gender": "L",
        "dob": "JAKARTA, 18 AGUSTSU 1968",
        "address": "JL. JEMBATAN BESI, RT/RW. 003/004, KEL : JEMBATAN BESI, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "087711100955",
        "email": "zetsattar68@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 2,
        "kecamatan": "TAMBORA",
        "kelurahan": "JEMBATAN BESI",
        "name": "AMIN MA'RUF",
        "role": "2.0",
        "gender": "L",
        "dob": "JAKARTA, 14 SEPTEMBER 1971",
        "address": "JL. DURI BARU. RT/RW. 008/005, KEL : JEMBATAN BESI, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "081546076171",
        "email": "amangmaruf92@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 3,
        "kecamatan": "TAMBORA",
        "kelurahan": "JEMBATAN BESI",
        "name": "NUR AJANAH",
        "role": "3.0",
        "gender": "P",
        "dob": "JAKARTA, 3 NOVEMBER 1994",
        "address": "JL. JEMBATAN BESI, RT/RW. 014/003, KEL : JEMBATAN BESI, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "081288290761",
        "email": "nurie.ronie0310@gmail.com",
        "religion": "ISLAM",
        "occupation": "IBU RUMAH TANGGA",
        "blood_type": "A"
      },
      {
        "no": 4,
        "kecamatan": "TAMBORA",
        "kelurahan": "JEMBATAN BESI",
        "name": "ULAN SUKMALANA",
        "role": "4.0",
        "gender": "L",
        "dob": "JAKARTA, 15 AGUSTUS 1976",
        "address": "JL. DURI BARU. RT/RW. 002/007, KEL : JEMBATAN BESI, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "-",
        "email": "",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "A"
      },
      {
        "no": 5,
        "kecamatan": "TAMBORA",
        "kelurahan": "JEMBATAN BESI",
        "name": "SUNARDI",
        "role": "5.0",
        "gender": "L",
        "dob": "JAKARTA, 5 JULI 1975",
        "address": "JL. JEMBATAN BESI II NO 18, RT/RW. 008/003, KEL : JEMBATAN BESI, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "081806383603",
        "email": "xiaomigunardi@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 6,
        "kecamatan": "TAMBORA",
        "kelurahan": "JEMBATAN BESI",
        "name": "JAJA",
        "role": "6.0",
        "gender": "L",
        "dob": "JAKARTA, 15 JANUARI 1973",
        "address": "JL. DURI BARU. RT/RW. 005/006, KEL : JEMBATAN BESI, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "081214896236",
        "email": "jajajakarta@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "B"
      },
      {
        "no": 7,
        "kecamatan": "TAMBORA",
        "kelurahan": "JEMBATAN BESI",
        "name": "GITO",
        "role": "7.0",
        "gender": "L",
        "dob": "JAKARTA, 5 NOVEMBER 1985",
        "address": "JL. JEMBATAN BESI, RT/RW. 004/004, KEL : JEMBATAN BESI, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "081211019954",
        "email": "aagito.rbm@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 1,
        "kecamatan": "TAMBORA",
        "kelurahan": "ANGKE",
        "name": "ERWIN EFENDI",
        "role": "1.0",
        "gender": "L",
        "dob": "JAKARTA, 7 MARET 1982",
        "address": "JL.ANGKE BARAT, RT/RW. 008/001, KEL : ANGKE, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "081389907234",
        "email": "",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 2,
        "kecamatan": "TAMBORA",
        "kelurahan": "ANGKE",
        "name": "TEGAR ASJRULLAH",
        "role": "2.0",
        "gender": "L",
        "dob": "JAKARTA, 16 NOVEMBER 1998",
        "address": "JL.PADAMULYA NO 30, RT/RW. 009/009, KEL : ANGKE, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "087776123309",
        "email": "tegartogar162gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 3,
        "kecamatan": "TAMBORA",
        "kelurahan": "ANGKE",
        "name": "AFFANDI SOFYAN",
        "role": "3.0",
        "gender": "L",
        "dob": "JAKARTA, 15 AGUSTUS 2000",
        "address": "JL. ANGKE JAYA, RT/RW. 002/006, KEL : ANGKE, KEC ; TAMBORA, JAKARTA BARAT",
        "phone": "082112289485",
        "email": "affandisofyan287@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 4,
        "kecamatan": "TAMBORA",
        "kelurahan": "ANGKE",
        "name": "YUDHI WAHYUDI",
        "role": "4.0",
        "gender": "L",
        "dob": "JAKARTA, 26 JUNI 1979",
        "address": "JL.GG SIAGA II, RT/RW. 012/004, KEL : ANGKE, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "-",
        "email": "",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 5,
        "kecamatan": "TAMBORA",
        "kelurahan": "ANGKE",
        "name": "DEDI JAYADI",
        "role": "5.0",
        "gender": "L",
        "dob": "JAKARTA, 3 DESEMBER 1975",
        "address": "JL. ANGKE JAYA NO 25, RT/RW. 002/006, KEL : ANGKE, KEC ; TAMBORA, JAKARTA BARAT",
        "phone": "081281090607",
        "email": "dedijayadi75@gmail.com",
        "religion": "ISLAM",
        "occupation": "BURUH HARIAN LEPAS",
        "blood_type": "AB"
      },
      {
        "no": 6,
        "kecamatan": "TAMBORA",
        "kelurahan": "ANGKE",
        "name": "SAMSUDIN",
        "role": "6.0",
        "gender": "L",
        "dob": "JAKARTA, 15 MARET 1966",
        "address": "RUSUN TAMBORA BLOK B, RT/RW. 008/011, KEL : ANGKE, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "-",
        "email": "",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "-"
      },
      {
        "no": 7,
        "kecamatan": "TAMBORA",
        "kelurahan": "ANGKE",
        "name": "DJOKO WAHYUDIONO",
        "role": "7.",
        "gender": "L",
        "dob": "JAKARTA, 22 AGUSTUS 1977",
        "address": "JL.PADAMULYA RAYA, RT/RW. 006/009, KEL : ANGKE, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "-",
        "email": "",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "AB"
      },
      {
        "no": 1,
        "kecamatan": "TAMBORA",
        "kelurahan": "KRENDANG",
        "name": "RIZALDY ISKANDAR",
        "role": "1.0",
        "gender": "L",
        "dob": "JAKARTA, 3 FEBRUARI 1983",
        "address": "JL. KRENDANG SELATAN NO 13, RT/RW. 013/006, KEL : KRENDANG, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "082213159986",
        "email": "maladewarizal8383@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 2,
        "kecamatan": "TAMBORA",
        "kelurahan": "KRENDANG",
        "name": "RIFKI HIDAYAT",
        "role": "2.0",
        "gender": "L",
        "dob": "JAKARTA, 26 JUNI 1987",
        "address": "JL. KRENDANG TENGAH, RT/RW. 015/003, KEL : KRENDANG, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "087884369089",
        "email": "rifihidayathuda@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "-"
      },
      {
        "no": 3,
        "kecamatan": "TAMBORA",
        "kelurahan": "KRENDANG",
        "name": "MUHAMMAD RIZKI FAZRI",
        "role": "3.0",
        "gender": "L",
        "dob": "JAKARTA, 6 DESEMBER 1997",
        "address": "JL. KRENDANG UTARA, RT/RW. 005/004, KEL : KRENDANG, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "082137500083",
        "email": "fajriacuy13@gmail.com",
        "religion": "ISLAM",
        "occupation": "PELAJAR / MAHASISWA",
        "blood_type": "-"
      },
      {
        "no": 4,
        "kecamatan": "TAMBORA",
        "kelurahan": "KRENDANG",
        "name": "MOH. FAJAR REZHA",
        "role": "4.0",
        "gender": "L",
        "dob": "JAKARTA, 13 MEI 1993",
        "address": "JL. KRENDANG BARAT, RT/RW. 009/005, KEL : KRENDANG, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "081289913000",
        "email": "mohamad.jajarrezha@gmail.com",
        "religion": "ISLAM",
        "occupation": "PELAJAR / MAHASISWA",
        "blood_type": "-"
      },
      {
        "no": 5,
        "kecamatan": "TAMBORA",
        "kelurahan": "KRENDANG",
        "name": "SAYUTI",
        "role": "5.0",
        "gender": "L",
        "dob": "JAKARTA, 11 AGUSTUS 1971",
        "address": "JL. KRENDANG BARAT, RT/RW. 001/004, KEL : KRENDANG, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "08128028302",
        "email": "hajiyouti@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "A"
      },
      {
        "no": 6,
        "kecamatan": "TAMBORA",
        "kelurahan": "KRENDANG",
        "name": "DIAN ARIESTIANTO",
        "role": "6.0",
        "gender": "L",
        "dob": "JAKARTA, 2 APRIL 1981",
        "address": "JL. KRENDANG SELATAN, RT/RW. 015/006, KEL : KRENDANG, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "081323844880",
        "email": "dianputra0481@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 7,
        "kecamatan": "TAMBORA",
        "kelurahan": "KRENDANG",
        "name": "NUNUNG NURUL AFIAH",
        "role": "7.0",
        "gender": "P",
        "dob": "JAKARTA, 25 OKTOBER 1974",
        "address": "JL. KRENDANG TIMUR GG 4 NO 18, RT/RW. 011/001, KEL : KRENDANG, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "081213545863",
        "email": "nungcenurul27@gmail.com",
        "religion": "ISLAM",
        "occupation": "IBU RUMAH TANGGA",
        "blood_type": "AB"
      },
      {
        "no": 1,
        "kecamatan": "TAMBORA",
        "kelurahan": "DURI UTARA",
        "name": "M.ENDAY",
        "role": "1.0",
        "gender": "L",
        "dob": "JAKARTA, 4 JULI 1978",
        "address": "JL. PANCA KRIDA II NO 7, RT/RW. 004/004, KEL : DURI UTARA, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "081314015079",
        "email": "",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 2,
        "kecamatan": "TAMBORA",
        "kelurahan": "DURI UTARA",
        "name": "MOH FAHRUL AMIN",
        "role": "2.0",
        "gender": "L",
        "dob": "JAKARTA, 31 MEI 1980",
        "address": "JL. DURI UTARA GG LONTAR V DALAM NO 17, RT/RW. 011/05, KEL : DURI UTARA, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "081398856063",
        "email": "",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "A"
      },
      {
        "no": 3,
        "kecamatan": "TAMBORA",
        "kelurahan": "DURI UTARA",
        "name": "ABDUL AZIS",
        "role": "3.0",
        "gender": "L",
        "dob": "JAKARTA, 4 OKTOBER 1995",
        "address": "JL. TRIKORA II NO 18, RT/RW. 007/005, KEL : DUTI UTARA, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "081383203789",
        "email": "rajakebonkosong@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "O"
      },
      {
        "no": 4,
        "kecamatan": "TAMBORA",
        "kelurahan": "DURI UTARA",
        "name": "LINDAWATI",
        "role": "4.0",
        "gender": "P",
        "dob": "PENITI, 6 SEPTEMBER 1979",
        "address": "JL. KRENDANG BARU NO 17, RT/RW. 008/002, KEL : DURI UTARA, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "081385466321",
        "email": "",
        "religion": "KRISTEN",
        "occupation": "IBU RUMAH TANGGA",
        "blood_type": "O"
      },
      {
        "no": 5,
        "kecamatan": "TAMBORA",
        "kelurahan": "DURI UTARA",
        "name": "AGUS SUSANTO",
        "role": "5.0",
        "gender": "L",
        "dob": "JAKARTA, 17 AGUSTUS 1973",
        "address": "JL. KRENDANG PULO NO 6, RT/RW. 005/001, KEL : DURI UTARA, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "-",
        "email": "",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 6,
        "kecamatan": "TAMBORA",
        "kelurahan": "DURI UTARA",
        "name": "HERIYANTO",
        "role": "6.0",
        "gender": "L",
        "dob": "JAKARTA, 2 APRIL 1970",
        "address": "KP KARENDANG, RT/RW. 009/008, KEL : DURI UTARA, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "081318505699",
        "email": "",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "AB"
      },
      {
        "no": 7,
        "kecamatan": "TAMBORA",
        "kelurahan": "DURI UTARA",
        "name": "RIHANTI",
        "role": "7.0",
        "gender": "P",
        "dob": "JAKARTA, 1 AGUSTUS 1968",
        "address": "JL. BLOK POS DURI GG III NO 14, RT/RW. 004/006, KEL : DURI UTARA, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "-",
        "email": "",
        "religion": "ISLAM",
        "occupation": "IBU RUMAH TANGGA",
        "blood_type": "-"
      },
      {
        "no": 1,
        "kecamatan": "TAMBORA",
        "kelurahan": "ROA MALAKA",
        "name": "HADI PRASETYO",
        "role": "1.0",
        "gender": "L",
        "dob": "KEBUMEN, 11 FEBRUARI 1995",
        "address": "JL. NELAYAN BARAT, RT/RW. 001/003, KEL : ROA MALAKA, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "081290846261",
        "email": "17hadiprasetyo@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 2,
        "kecamatan": "TAMBORA",
        "kelurahan": "ROA MALAKA",
        "name": "TEDDY WINATA HERMAN",
        "role": "2.0",
        "gender": "L",
        "dob": "JAKARTA, 1 NOVEMBER 1978",
        "address": "JL. GG BURUNG NO 21, RT/RW. 002/002, KEL : ROA MALAKA, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "087781228887",
        "email": "teddywinataherman.1978@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 3,
        "kecamatan": "TAMBORA",
        "kelurahan": "ROA MALAKA",
        "name": "AWALUDIN SYAH",
        "role": "3.0",
        "gender": "L",
        "dob": "JAKARTA, 8 MEI 1991",
        "address": "JL. TIANG BENDERA II/120, RT/RW.005/003, KEL : ROA MALAKA, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "087777699655",
        "email": "awallecy46@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRAUSAHA",
        "blood_type": "AB"
      },
      {
        "no": 4,
        "kecamatan": "TAMBORA",
        "kelurahan": "ROA MALAKA",
        "name": "DENNY ADRIANA",
        "role": "4.0",
        "gender": "L",
        "dob": "JAKARTA, 6 JANUARI 1989",
        "address": "JL. NELAYAN BARAT, RT/RW. 001/003, KEL : ROA MALAKA, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "081197611716",
        "email": "dennybacrit.@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 5,
        "kecamatan": "TAMBORA",
        "kelurahan": "ROA MALAKA",
        "name": "SUBCHAN",
        "role": "5.0",
        "gender": "L",
        "dob": "JAKARTA, 16 MEI 1980",
        "address": "JL. TIANG BENDERA RAYA, RT/RW.002/003, KEL : ROA MALAKA, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "081287676627",
        "email": "",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 6,
        "kecamatan": "TAMBORA",
        "kelurahan": "ROA MALAKA",
        "name": "ROSAD",
        "role": "6.0",
        "gender": "L",
        "dob": "JAKARTA, 23 JUNI 1967",
        "address": "JL. TIANG BENDERA NO.120, RT/RW.005/003, KEL : ROA MALAKA, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "-",
        "email": "",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 7,
        "kecamatan": "TAMBORA",
        "kelurahan": "ROA MALAKA",
        "name": "SUGIYONO",
        "role": "7.0",
        "gender": "L",
        "dob": "JAKARTA, 27 JUNI 1980",
        "address": "JL. NELAYAN BARAT, RT/RW. 002/003, KEL : ROA MALAKA, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "081617370699",
        "email": "sugiyonoyono860@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 1,
        "kecamatan": "TAMBORA",
        "kelurahan": "DURI SELATAN",
        "name": "FAZAR RIZKY KUSTIADI",
        "role": "1.0",
        "gender": "L",
        "dob": "JAKARTA, 17 SEPTEMBER 1998",
        "address": "GG JAMBLANG I, RT/RW. 014/002, KEL : DURI SELATAN, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "087721584061",
        "email": "fazarrizky367@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 2,
        "kecamatan": "TAMBORA",
        "kelurahan": "DURI SELATAN",
        "name": "JUMANTRI",
        "role": "2.0",
        "gender": "L",
        "dob": "JAKARTA, 25 SEPTEMBER 1992",
        "address": "KP. DURI DALAM, RT/RW 006/005, KEL : DURI SELATAN, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "085711470325",
        "email": "adenaja.25@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 3,
        "kecamatan": "TAMBORA",
        "kelurahan": "DURI SELATAN",
        "name": "MUCHAMAD CHAIDIR",
        "role": "3.0",
        "gender": "L",
        "dob": "JAKARTA, 30 JUNI 1987",
        "address": "KP. DURI GERINDO IV, RT/RW 005,004, KEL : DURI SELATAN, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "081293871445",
        "email": "khaidirkhalid47@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "B"
      },
      {
        "no": 4,
        "kecamatan": "TAMBORA",
        "kelurahan": "DURI SELATAN",
        "name": "BAKZA PRATAMA",
        "role": "4.0",
        "gender": "L",
        "dob": "JAKARTA, 10 FEBRUARI 1990",
        "address": "KP. DURI DALAM, RT/RW 011/005, KEL : DURI SELATAN, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "085899991891",
        "email": "",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "B"
      },
      {
        "no": 5,
        "kecamatan": "TAMBORA",
        "kelurahan": "DURI SELATAN",
        "name": "EDI SUNARDI",
        "role": "5.0",
        "gender": "L",
        "dob": "JAKARTA, 1 SEPTEMBER 1973",
        "address": "KP. DURI DALAM, RT/RW 006/005, KEL : DURI SELATAN, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "083898601787",
        "email": "esunardi55@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 6,
        "kecamatan": "TAMBORA",
        "kelurahan": "DURI SELATAN",
        "name": "TOTO WAHONO",
        "role": "6.0",
        "gender": "L",
        "dob": "JAKARTA, 30 JUNI 1981",
        "address": "KP. DURI DALAM NO 110, RT/RW 010/005, KEL : DURI SELATAN, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "085215470922",
        "email": "toing3081@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "A"
      },
      {
        "no": 7,
        "kecamatan": "TAMBORA",
        "kelurahan": "DURI SELATAN",
        "name": "FERYANSYAH",
        "role": "7.0",
        "gender": "L",
        "dob": "JAKARTA, 20 MARET 1982",
        "address": "JL. DURI SELATAN 5, GG HAJI AMRIN NO 12, RT/RW, 012/003, KEL : DURI SELATAN, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "0895332463626",
        "email": "",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 1,
        "kecamatan": "TAMBORA",
        "kelurahan": "TANAH SEREAL",
        "name": "ACHMAD SUDARJAT",
        "role": "1.0",
        "gender": "L",
        "dob": "JAKARTA, 18 FEBRUARI 1985",
        "address": "GG SONGSI DALAM NO 12, RT/RW, 005/006, KEL : TANAH SEREAL, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "082213133808",
        "email": "azat.sativa@gmail.com",
        "religion": "ISLAM",
        "occupation": "BURUH HARIAN LEPAS",
        "blood_type": "-"
      },
      {
        "no": 2,
        "kecamatan": "TAMBORA",
        "kelurahan": "TANAH SEREAL",
        "name": "EDY SETIANA",
        "role": "2.0",
        "gender": "L",
        "dob": "JAKARTA, 6 NOVEMBER 1970",
        "address": "JL. TANAH SEREAL NO 39, RT/RW, 004/013, KEL : TANAH SEREAL, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "085195117077",
        "email": "",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "AB"
      },
      {
        "no": 3,
        "kecamatan": "TAMBORA",
        "kelurahan": "TANAH SEREAL",
        "name": "DAFFA NAUFALTA",
        "role": "3.0",
        "gender": "L",
        "dob": "JAKARTA, 31 DESEMBER 2000",
        "address": "JL. TANAH SEREAL XIII, GG AL QODAR NO 6, RT/RW, 011/010, KEL : TANAH SEREAL, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "082124833733",
        "email": "",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "AB"
      },
      {
        "no": 4,
        "kecamatan": "TAMBORA",
        "kelurahan": "TANAH SEREAL",
        "name": "MUKRONI RINAYAH",
        "role": "4.0",
        "gender": "P",
        "dob": "JAKARTA, 30 SEPTEMBER 1972",
        "address": "JL. TANAH SEREAL II/31, RT/RW, 006/014, KEL : TANAH SEREAL, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "-",
        "email": "",
        "religion": "ISLAM",
        "occupation": "IBU RUMAH TANGGA",
        "blood_type": "AB"
      },
      {
        "no": 5,
        "kecamatan": "TAMBORA",
        "kelurahan": "TANAH SEREAL",
        "name": "AGUS MAULANA",
        "role": "5.0",
        "gender": "L",
        "dob": "JAKARTA, 1 AGUSTUS 1995",
        "address": "KRAMAT JALAN I, NO 20, RT/RW, 005/007, KEL : TANAH SEREAL, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "085820232025",
        "email": "maulanaa415@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "A"
      },
      {
        "no": 6,
        "kecamatan": "TAMBORA",
        "kelurahan": "TANAH SEREAL",
        "name": "SAPUTRA",
        "role": "6.0",
        "gender": "L",
        "dob": "JAKARTA, 20 MARET 1994",
        "address": "JL. TANAH SEREAL XIII/20, RT/RW, 012/009, KEL : TANAH SEREAL, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "083871812338",
        "email": "saputra.15101034@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 7,
        "kecamatan": "TAMBORA",
        "kelurahan": "TANAH SEREAL",
        "name": "FAHRI MAULANA",
        "role": "7.0",
        "gender": "L",
        "dob": "JAKARTA, 6 DESEMBER 1997",
        "address": "JL. PEKAPURAN III NO 46C, RT/RW, 004/005, KEL : TANAH SEREAL, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "085881657933",
        "email": "fahrimaulana444@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 1,
        "kecamatan": "TAMBORA",
        "kelurahan": "PEKOJAN",
        "name": "KOKOM SISWATI",
        "role": "1.0",
        "gender": "P",
        "dob": "JAKARTA, 9 SEPTEMBER 1976",
        "address": "KP BARU NO 25, RT/RW, 002/012, KEL : PEKOJAN, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "08561895014",
        "email": "",
        "religion": "ISLAM",
        "occupation": "MENGURUS RUMAH TANGGA",
        "blood_type": "B"
      },
      {
        "no": 2,
        "kecamatan": "TAMBORA",
        "kelurahan": "PEKOJAN",
        "name": "FACHRUL RIZAL",
        "role": "2.0",
        "gender": "L",
        "dob": "JAKARTA, 3 DESEMBER 1979",
        "address": "JL.PEJAGGALAN IV, NO 28N, RT/RW, 006/005, KEL : PEKOJAN, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "085775428700",
        "email": "arganta751@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 3,
        "kecamatan": "TAMBORA",
        "kelurahan": "PEKOJAN",
        "name": "BUDI OTOMO",
        "role": "3.0",
        "gender": "L",
        "dob": "BLORA, 31 DESEMBER 1977",
        "address": "JL. BANDENGAN UTARA III, NO 15, RT/RW, 004/012, KEL : PEKOJAN, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "0812289833114",
        "email": "budiu4764@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 4,
        "kecamatan": "TAMBORA",
        "kelurahan": "PEKOJAN",
        "name": "ALIEF RIZKY FADILAH",
        "role": "4.0",
        "gender": "L",
        "dob": "JAKARTA, 2 AGUSTUS 1999",
        "address": "JL. PEKOJAN III, KP JANIS, RT/RW, 007/008, KEL : PEKOJAN, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "085156392515",
        "email": "aliefrizkyfadilah@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 5,
        "kecamatan": "TAMBORA",
        "kelurahan": "PEKOJAN",
        "name": "RAMDANI ANSHORI MUSLIM",
        "role": "5.0",
        "gender": "L",
        "dob": "JAKARTA, 3 AGUSTUS 1979",
        "address": "JL.PENGUKIRAN V, NO 69, RT.RW, 008/002, KEL : PEKOJAN, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "089681688887",
        "email": "badarrajawal19@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "A"
      },
      {
        "no": 6,
        "kecamatan": "TAMBORA",
        "kelurahan": "PEKOJAN",
        "name": "HAIKAL ALI",
        "role": "6.0",
        "gender": "L",
        "dob": "JAKARTA, 3 FEBRUARI 2000",
        "address": "JL.MESJID PEKOJAN, NO 31, RT/RW, 008/001, KEL : PEKOJAN, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "085695416141",
        "email": "haikalalilaw@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRAUSAHA",
        "blood_type": "A"
      },
      {
        "no": 7,
        "kecamatan": "TAMBORA",
        "kelurahan": "PEKOJAN",
        "name": "UJANG SUJAY",
        "role": "7.0",
        "gender": "L",
        "dob": "BOGOR, 21 JANUARI 1970",
        "address": "RUSUN TAMBORA III, BLOK C, LANTAI 1, NO 21, RT/RW, 009/011, KEL : PEKOJAN, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "082123070009",
        "email": "sujayujang6@gmail.com",
        "religion": "ISLAM",
        "occupation": "BURUH HARIAN LEPAS",
        "blood_type": "AB"
      },
      {
        "no": 1,
        "kecamatan": "TAMBORA",
        "kelurahan": "TAMBORA",
        "name": "ALI",
        "role": "1.0",
        "gender": "L",
        "dob": "JAKARTA, 12 APRIL 1980",
        "address": "JL.JEMBATAN KEDUNG, RT/RW, 006/005, KEL : TAMBORA, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "087872870384",
        "email": "saputraali712@gmail.com",
        "religion": "ISLAM",
        "occupation": "BURUH HARIAN LEPAS",
        "blood_type": "-"
      },
      {
        "no": 2,
        "kecamatan": "TAMBORA",
        "kelurahan": "TAMBORA",
        "name": "SUSANTY",
        "role": "2.0",
        "gender": "P",
        "dob": "JAKARTA, 18 OKTOBER 1970",
        "address": "JL. TAMBORA III PULO NYAMUK, NO 29, RT/RW, 008/004, KEL : TAMBORA, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "0812855553018",
        "email": "susantyyz10@gmail.com",
        "religion": "ISLAM",
        "occupation": "MENGURUS RUMAH TANGGA",
        "blood_type": "-"
      },
      {
        "no": 3,
        "kecamatan": "TAMBORA",
        "kelurahan": "TAMBORA",
        "name": "KOMARUDIN",
        "role": "3.0",
        "gender": "L",
        "dob": "JAKARTA, 25 JULI 1970",
        "address": "JL. TAMBORA III, GG 7, NO 5, RT/RW, 009/005, KEL : TAMBORA, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "0816949026",
        "email": "komarudinwong941@gmail.com",
        "religion": "ISLAM",
        "occupation": "BURUH HARIAN LEPAS",
        "blood_type": "O"
      },
      {
        "no": 4,
        "kecamatan": "TAMBORA",
        "kelurahan": "TAMBORA",
        "name": "NUR CAHAYA",
        "role": "4.0",
        "gender": "L",
        "dob": "JAKARTA, 1 AGUSTUS 1976",
        "address": "JL. TAMBORA I/V, RT/RW, 004/003, KEL : TAMBORA, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "085773614361",
        "email": "mhenixdjenggot76@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "-"
      },
      {
        "no": 5,
        "kecamatan": "TAMBORA",
        "kelurahan": "TAMBORA",
        "name": "SYAHRUDIN",
        "role": "5.0",
        "gender": "L",
        "dob": "JAKARTA, 5 DESEMBER 1972",
        "address": "JL. TAMBORA I, NO 64, RT/RW, 003/002, KEL : TAMBORA, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "089673372042",
        "email": "sahrudinbonces950@gmail.com",
        "religion": "ISLAM",
        "occupation": "BURUH HARIAN LEPAS",
        "blood_type": "A"
      },
      {
        "no": 6,
        "kecamatan": "TAMBORA",
        "kelurahan": "TAMBORA",
        "name": "ANDI HARYADI",
        "role": "6.0",
        "gender": "L",
        "dob": "JAKARTA, 25 SEPTEMBER 1976",
        "address": "JL. TAMBORA DALAM, NO 17 A, RT/RW, 004/004, KEL : TAMBORA, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "081318432285",
        "email": "andi123aryadi@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 7,
        "kecamatan": "TAMBORA",
        "kelurahan": "TAMBORA",
        "name": "INDRA SETIA",
        "role": "7.0",
        "gender": "L",
        "dob": "BOGOR, 31 JANUARI 1985",
        "address": "JL. TAMBORA III, GG 7, RT/RW, 009/005, KEL : TAMBORA, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "085135345653",
        "email": "indrasetia3101@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "O"
      },
      {
        "no": 1,
        "kecamatan": "TAMBORA",
        "kelurahan": "JEMBATAN LIMA",
        "name": "HASAN BASRI",
        "role": "1.0",
        "gender": "L",
        "dob": "JAKARTA, 11 JUNI 1992",
        "address": "JL. SAWAH LIO X, NO 46, RT/RW 010/005, KEL : JEMBATAN LIMA, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "081288141776",
        "email": "hasan.basri02345@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 2,
        "kecamatan": "TAMBORA",
        "kelurahan": "JEMBATAN LIMA",
        "name": "SOLAHUDDIN",
        "role": "2.0",
        "gender": "L",
        "dob": "JAKARTA, 15 MARET 1974",
        "address": "JL. SAWAH LIO GG 24, NO 29, RT/RW 004/007, KEL : JEMBATAN LIMA, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "082118884141",
        "email": "",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "A"
      },
      {
        "no": 3,
        "kecamatan": "TAMBORA",
        "kelurahan": "JEMBATAN LIMA",
        "name": "HASIM HARYADI",
        "role": "3.0",
        "gender": "L",
        "dob": "JAKARTA, 19 MARET 1991",
        "address": "JL. TERATE , RT/RW 004/003, KEL : JEMBATAN LIMA, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "085881010035",
        "email": "axsim38@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "B"
      },
      {
        "no": 4,
        "kecamatan": "TAMBORA",
        "kelurahan": "JEMBATAN LIMA",
        "name": "DENI ALFIANI JUHRIZAL",
        "role": "4.0",
        "gender": "L",
        "dob": "JAKARTA, 27 MEI 1983",
        "address": "JL. SAWAH LIO RAYA, NO 70, RT/RW 001/006, KEL : JEMBATAN LIMA, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "082213093421",
        "email": "dhenizalfira27@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 5,
        "kecamatan": "TAMBORA",
        "kelurahan": "JEMBATAN LIMA",
        "name": "PUSPA NUR WULAN",
        "role": "5.0",
        "gender": "P",
        "dob": "JAKARTA, 7 MEI 1987",
        "address": "JL. SAWAH LIO V, NO 49, RT/RW 012/005, KEL : JEMBATAN LIMA, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "087725177776",
        "email": "",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 6,
        "kecamatan": "TAMBORA",
        "kelurahan": "JEMBATAN LIMA",
        "name": "M RIZAL ALI ALIDRUS",
        "role": "6.0",
        "gender": "L",
        "dob": "JAKARTA, 19 JULI 1989",
        "address": "JL. SAWAH LIO IV, NO14, RT/RW 008/007, KEL : JEMBATAN LIMA, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "081284013225",
        "email": "mr.rizal8888@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "AB"
      },
      {
        "no": 7,
        "kecamatan": "TAMBORA",
        "kelurahan": "JEMBATAN LIMA",
        "name": "DJAMAL HARTADI",
        "role": "7.0",
        "gender": "L",
        "dob": "JAKARTA, 29 JULI 1986",
        "address": "JL. TERATE DALAM , RT/RW 004/004, KEL : JEMBATAN LIMA, KEC : TAMBORA, JAKARTA BARAT",
        "phone": "085719513195",
        "email": "",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 1,
        "kecamatan": "PALMERAH",
        "kelurahan": "",
        "name": "JUNAEDI",
        "role": "1.0",
        "gender": "L",
        "dob": "JAKARTA, 09 JULI 1967",
        "address": "JL. KEMANGGISAN ILIR RT. 015/008, KEL. KEMANGGISAN, KEC. PALMERAH (11480)",
        "phone": "085288356292",
        "email": "junaedialbatawi@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 2,
        "kecamatan": "PALMERAH",
        "kelurahan": "",
        "name": "NURLAELA",
        "role": "2.0",
        "gender": "P",
        "dob": "JAKARTA, 12 AGUATUS 1970",
        "address": "JL. KEMANGGISAN PULO NO.93 RT.006/017, KEL.PALMERAH, KEC.PALMERAH (11480)",
        "phone": "081381095754",
        "email": "-",
        "religion": "ISLAM",
        "occupation": "MENGURUS RUMAH TANGGA",
        "blood_type": "A"
      },
      {
        "no": 3,
        "kecamatan": "PALMERAH",
        "kelurahan": "",
        "name": "MUHAMAD AFDITYA IMAM F",
        "role": "3.0",
        "gender": "L",
        "dob": "BOGOR, 01 JANUARI 1991",
        "address": "JL. JATI PULO NO.4 RT.003/009, KEL. JATIPULO, KEC. PALMERAH (11410)",
        "phone": "081285945624",
        "email": "adit.aktual@gmail.com",
        "religion": "ISLAM",
        "occupation": "WARTAWAN",
        "blood_type": "-"
      },
      {
        "no": 4,
        "kecamatan": "PALMERAH",
        "kelurahan": "",
        "name": "DEWI SULASMI",
        "role": "4.0",
        "gender": "P",
        "dob": "JAKARTA, 03 DESEMBER 1970",
        "address": "JL. KEMANGGISAN ILIR VI NO.62 RT.002/013, KEL. PALMERAH, KEC. PALMERAH (11480)",
        "phone": "081806717589",
        "email": "dewisiska0312@gmail.com",
        "religion": "ISLAM",
        "occupation": "IBU RUMAH TANGGA",
        "blood_type": "-"
      },
      {
        "no": 5,
        "kecamatan": "PALMERAH",
        "kelurahan": "",
        "name": "ABDUL KADIR",
        "role": "5.0",
        "gender": "L",
        "dob": "JAKARTA, 08 JANUARI 1975",
        "address": "JL. KEMANGGISAN RT.009/011, KEL. PALMERAH, KEC. PALMERAH (11480)",
        "phone": "081316797219",
        "email": "kodir.stnk@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 6,
        "kecamatan": "PALMERAH",
        "kelurahan": "",
        "name": "MASYKUR",
        "role": "6.0",
        "gender": "L",
        "dob": "JAKARTA, 29 MARET 1977",
        "address": "JL. PAKEMBANGAN BARAT NO.53 RT.007/004, KEL. PALMERAH, KEC. PALMERAH (11480)",
        "phone": "085717298789",
        "email": "masykurlawyer@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "B"
      },
      {
        "no": 7,
        "kecamatan": "PALMERAH",
        "kelurahan": "",
        "name": "ITTA MERDEKA WATI",
        "role": "7.0",
        "gender": "P",
        "dob": "JAKARTA, 17 AGUSTUS 1983",
        "address": "RUSUNAWA KS TUBUN TOWER ALT 9 NO.13, JL. TAMAN BUNGA 1 RT.002/001, KEL. KBS, KEC. PALMERAH (11420)",
        "phone": "-",
        "email": "",
        "religion": "ISLAM",
        "occupation": "IBU RUMAH TANGGA",
        "blood_type": "-"
      },
      {
        "no": 8,
        "kecamatan": "PALMERAH",
        "kelurahan": "",
        "name": "HENDRYA NOOR",
        "role": "8.0",
        "gender": "L",
        "dob": "JAKARTA, 21 JULI 1983",
        "address": "JL. H.MUALA KEMANGGISAN, RT/RW 001/012, KEL : PALMERAH, KEC : PALMERAH",
        "phone": "085691908501",
        "email": "bilqis02abc@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 9,
        "kecamatan": "PALMERAH",
        "kelurahan": "",
        "name": "GUSTIKA AVIYANDI",
        "role": "9.0",
        "gender": "L",
        "dob": "JAKARTA, 25 AGUSTUS 1980",
        "address": "JL. GG. RS.PELNI, NO 8, RT/RW 009/001, KEL :SLIPI, KEC : PALMERAH",
        "phone": "081284902539",
        "email": "hutanrimba359@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 1,
        "kecamatan": "PALMERAH",
        "kelurahan": "PALMERAH",
        "name": "MAHMUDIN",
        "role": "1.0",
        "gender": "L",
        "dob": "JAKARTA, 13 APRIL 1970",
        "address": "JL. H MUALA KEMANGGISAN NO.42, RT.001/012, KEL.PALMERAH, KEC.PALMERAH (11480)",
        "phone": "08981642970",
        "email": "muhmudinmujeni150@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 2,
        "kecamatan": "PALMERAH",
        "kelurahan": "PALMERAH",
        "name": "IRMA YANTI",
        "role": "2.0",
        "gender": "P",
        "dob": "JAKARTA, 06 JANUARI 1986",
        "address": "JL. H MUALA KEMANGGISAN NO.35, RT.001/012, KEL.PALMERAH, KEC.PALMERAH (11480)",
        "phone": "08158717929",
        "email": "tehimamaniezz@gmail.com",
        "religion": "ISLAM",
        "occupation": "IBU RUMAH TANGGA",
        "blood_type": "O"
      },
      {
        "no": 3,
        "kecamatan": "PALMERAH",
        "kelurahan": "PALMERAH",
        "name": "NURYASIN",
        "role": "3.0",
        "gender": "L",
        "dob": "JAKARTA, 18 SEPTEMBER 1973",
        "address": "JL. PALMERAH UTARA 1 / 16, RT.003/016, KEL. PALMERAH, KEC. PALMERAH (11480)",
        "phone": "082249076868",
        "email": "nur911304@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 4,
        "kecamatan": "PALMERAH",
        "kelurahan": "PALMERAH",
        "name": "KHAIR MEDI",
        "role": "4.0",
        "gender": "L",
        "dob": "JAKARTA, 05 MEI 1972",
        "address": "JL. KEMANGGISAN PULO RT.013/002, KEL. PALMERAH, KEL. PALMERAH (11480)",
        "phone": "085782571173",
        "email": "khairmedi89@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "B"
      },
      {
        "no": 5,
        "kecamatan": "PALMERAH",
        "kelurahan": "PALMERAH",
        "name": "AMRI SUHADA",
        "role": "5.0",
        "gender": "L",
        "dob": "JAKARTA, 09 SEPTEMBER 1980",
        "address": "JL. KEMANGGISAN GG H. HARUN 1, RT.003/011, KEL. PALMERAH, KEC PALMERAH (11480)",
        "phone": "082298110808",
        "email": "asuhada683@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "O+"
      },
      {
        "no": 6,
        "kecamatan": "PALMERAH",
        "kelurahan": "PALMERAH",
        "name": "M. SYAIFULLAH",
        "role": "6.0",
        "gender": "L",
        "dob": "JOMBANG, 10 JANUARI 1967",
        "address": "PAKEMBANGAN BARAT, RT.005/005, KEL.PALMERAH, KEC.PALMERAH (11480)",
        "phone": "087773361392",
        "email": "syaifulbadri418@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "B+"
      },
      {
        "no": 7,
        "kecamatan": "PALMERAH",
        "kelurahan": "PALMERAH",
        "name": "MUNADI",
        "role": "7.0",
        "gender": "L",
        "dob": "JAKARTA, 16 AGUSTUS 1980",
        "address": "GG. H SUIT, NO 61, RT/RW 006/011, KEL : PALMERAH, KEC : PALMERAH, JAKARTA BARAT",
        "phone": "089636171175",
        "email": "munadynady10@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "AB"
      },
      {
        "no": 1,
        "kecamatan": "PALMERAH",
        "kelurahan": "JATI PULO",
        "name": "SOHIBUNNAHI",
        "role": "1.0",
        "gender": "L",
        "dob": "JAKARTA, 18 AGUSTUS 1990",
        "address": "JL. MASJID NURUL HUDA NO.37, RT.004/009, KEL.JATI PULO, KEC. PALMERAH (11430)",
        "phone": "08571147868",
        "email": "sohibunnahi@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 2,
        "kecamatan": "PALMERAH",
        "kelurahan": "JATI PULO",
        "name": "MUHAMMAD SYAIFUL",
        "role": "2.0",
        "gender": "L",
        "dob": "JAKARTA, 13 APRIL 1993",
        "address": "JL. B 1 NO.24, RT.009/008, KEL.JATI PULO, KEC. PALMERAH (11430)",
        "phone": "087876827478",
        "email": "gzxlidgs@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "B"
      },
      {
        "no": 3,
        "kecamatan": "PALMERAH",
        "kelurahan": "JATI PULO",
        "name": "AGUS GUNAWAN",
        "role": "3.0",
        "gender": "L",
        "dob": "JAKARTA, 11 SEPTEMBER 1970",
        "address": "JL. JATI PULO NO.1 , RT.016/007, KEL. JATI PULO, KEC.PALMERAH (11430)",
        "phone": "085880437316",
        "email": "agusgunawan03175@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "AB+"
      },
      {
        "no": 4,
        "kecamatan": "PALMERAH",
        "kelurahan": "JATI PULO",
        "name": "SUPARMIN",
        "role": "4.0",
        "gender": "L",
        "dob": "SRAGEN, 07 APRIL 1966",
        "address": "JL. SERUNI NO.26, RT.006/001, KEL.JATI PULO, KEC. PALMERAH (11430)",
        "phone": "081283997667",
        "email": "parminpak125@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "-"
      },
      {
        "no": 5,
        "kecamatan": "PALMERAH",
        "kelurahan": "JATI PULO",
        "name": "NOVIAN JOENOES",
        "role": "5.0",
        "gender": "L",
        "dob": "JAKARTA, 28 NOVEMBER 1971",
        "address": "JL. TURI NO.26, RT.014/003, KEL.JATI PULO, KEC.PALMERAH (11430)",
        "phone": "088801141417",
        "email": "novian.tvri.joenoes@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "-"
      },
      {
        "no": 6,
        "kecamatan": "PALMERAH",
        "kelurahan": "JATI PULO",
        "name": "RAHMADANI",
        "role": "6.0",
        "gender": "P",
        "dob": "PADANG, 10 JUNI 1985",
        "address": "JL. Z JATI PULO NO.28, RT.007/008, KEL.JATI PULO, KEC.PALMERAH (11430)",
        "phone": "085217927606",
        "email": "rrahmadani090@gmail.com",
        "religion": "ISLAM",
        "occupation": "IBU RUMAH TANGGA",
        "blood_type": "-"
      },
      {
        "no": 7,
        "kecamatan": "PALMERAH",
        "kelurahan": "JATI PULO",
        "name": "MOCH INDAR ANZAMAR",
        "role": "7.0",
        "gender": "L",
        "dob": "JAKARTA, 22 OKTOBER 1997",
        "address": "JL. TOMANG PULO 4 NO.9, RT.015/006, KEL.JATI PULO, KEC.PALMERAH (11430)",
        "phone": "085890375193",
        "email": "indarmoch95@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 1,
        "kecamatan": "PALMERAH",
        "kelurahan": "SLIPI",
        "name": "MUHAMAD HIKMATYAR",
        "role": "1.0",
        "gender": "L",
        "dob": "JAKARTA, 28 SEPTEMBER 1994",
        "address": "JL. G1 NO.3, RT.001/002, KEL.SLIPI, KEC.PALMERAH (11410)",
        "phone": "089677702113",
        "email": "tyarschatzi@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "O"
      },
      {
        "no": 2,
        "kecamatan": "PALMERAH",
        "kelurahan": "SLIPI",
        "name": "AHMAD RUSDI",
        "role": "2.0",
        "gender": "L",
        "dob": "JAKARTA, 07 MARET 1977",
        "address": "JL. H NO.44, RT.002/002, KEL.SLIPI, KEC.PALMERAH (11410)",
        "phone": "08811855332",
        "email": "adiwijayarusdi99@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "-"
      },
      {
        "no": 3,
        "kecamatan": "PALMERAH",
        "kelurahan": "SLIPI",
        "name": "NOER SOFYA",
        "role": "3.0",
        "gender": "P",
        "dob": "JAKARTA, 18 JANUARI 1977",
        "address": "JL. GG RS PELNI D III NO.14, RT.012/001, KEL.SLIPI, KEC.PALMERAH (11410)",
        "phone": "",
        "email": "",
        "religion": "ISLAM",
        "occupation": "IBU RUMAH TANGGA",
        "blood_type": "O"
      },
      {
        "no": 4,
        "kecamatan": "PALMERAH",
        "kelurahan": "SLIPI",
        "name": "PANJI EKA FRIYANTO",
        "role": "4.0",
        "gender": "L",
        "dob": "PONTIANAK, 12 DESEMBER 1989",
        "address": "JL. GG RS PELNI NO.25, RT.009/001, KEL.SLIPI, KEC.PALMERAH (11410)",
        "phone": "081212244698",
        "email": "panjieka61@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "B+"
      },
      {
        "no": 5,
        "kecamatan": "PALMERAH",
        "kelurahan": "SLIPI",
        "name": "ASEP JUNAEDI",
        "role": "5.0",
        "gender": "L",
        "dob": "JAKARTA, 07 MEI 1976",
        "address": "JL. U SLIPI NO.28, RT008/005, KEL.SLIPI, KEC.PALMERAH (11410)",
        "phone": "",
        "email": "",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 6,
        "kecamatan": "PALMERAH",
        "kelurahan": "SLIPI",
        "name": "SEFRIADI",
        "role": "6.0",
        "gender": "L",
        "dob": "JAKARTA, 06 SEPTEMBER 1972",
        "address": "JL. DII RT.012/001 NO.12 , KEL.SLIPI, KEC.PALMERAH (11410)",
        "phone": "",
        "email": "",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "A"
      },
      {
        "no": 7,
        "kecamatan": "PALMERAH",
        "kelurahan": "SLIPI",
        "name": "NURHASAN",
        "role": "7.0",
        "gender": "L",
        "dob": "JAKARTA, 28 FEBRUARI 1970",
        "address": "JL. SLIPI NO.1 RT.001/004, KEL.SLIPI, KEC.PALMERAH (11410)",
        "phone": "081314259608",
        "email": "",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 1,
        "kecamatan": "PALMERAH",
        "kelurahan": "KOTA BAMBU SELATAN",
        "name": "ICHWAN",
        "role": "1.0",
        "gender": "L",
        "dob": "JAKARTA, 15 JULI 1973",
        "address": "JL. ORI NO.27, RT.001/003, KEL.KBS, KEC.PALMERAH",
        "phone": "085773799866",
        "email": "",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "A"
      },
      {
        "no": 2,
        "kecamatan": "PALMERAH",
        "kelurahan": "KOTA BAMBU SELATAN",
        "name": "ANDI JAYA",
        "role": "2.0",
        "gender": "L",
        "dob": "JAKARTA, 16 NOVEMBER 1976",
        "address": "JL. APUS NO.22 RT.004/006, KEL.KBS, KEC.PALMERAH",
        "phone": "081316729927",
        "email": "",
        "religion": "ISLAM",
        "occupation": "BURUH LEPAS",
        "blood_type": "O"
      },
      {
        "no": 3,
        "kecamatan": "PALMERAH",
        "kelurahan": "KOTA BAMBU SELATAN",
        "name": "IRFAN PRANATA",
        "role": "3.0",
        "gender": "L",
        "dob": "JAKARTA, 09 DESEMBER 1980",
        "address": "JL. APUS NO.33 RT.004/006, KEL.KBS, KEC.PALMERAH",
        "phone": "081212132030",
        "email": "irfanpranata25@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 4,
        "kecamatan": "PALMERAH",
        "kelurahan": "KOTA BAMBU SELATAN",
        "name": "ADHI KURNIAWAN",
        "role": "4.0",
        "gender": "L",
        "dob": "JAKARTA, 16 AGUSTUS 1987",
        "address": "JL. ANDONG RAYA NO.34, RT.009/008, KEL.KBS, KEC.PALMERAH",
        "phone": "085877944440",
        "email": "adhikurniawanfh@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 5,
        "kecamatan": "PALMERAH",
        "kelurahan": "KOTA BAMBU SELATAN",
        "name": "EUWIS HARIYANTI",
        "role": "5.0",
        "gender": "P",
        "dob": "JAKARTA, 24 APRIL 1991",
        "address": "JL. KBS NO.22, RT.007/004, KEL.KBS, KEC.PALMERAH",
        "phone": "085891502668",
        "email": "azzam261118@gmail.com",
        "religion": "ISLAM",
        "occupation": "IBU RUMAH TANGGA",
        "blood_type": "O"
      },
      {
        "no": 6,
        "kecamatan": "PALMERAH",
        "kelurahan": "KOTA BAMBU SELATAN",
        "name": "DODI REGEAN",
        "role": "6.0",
        "gender": "L",
        "dob": "JAKARTA, 24 MARET 1983",
        "address": "JL. APUS NO.55A, RT.004/006, KEL.KBS, KEC.PALMERAH",
        "phone": "087876986378",
        "email": "regeandodi@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "AB"
      },
      {
        "no": 7,
        "kecamatan": "PALMERAH",
        "kelurahan": "KOTA BAMBU SELATAN",
        "name": "ADI SUHERMAN",
        "role": "7.0",
        "gender": "L",
        "dob": "JAKARTA, 15 DESEMBER 1966",
        "address": "JL. ANDONG RAYA NO.13B, RT.003/008, KEL.KBS, KEC.PALMERAH",
        "phone": "089601324266",
        "email": "suhermanadi1965@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "AB"
      },
      {
        "no": 1,
        "kecamatan": "PALMERAH",
        "kelurahan": "KOTA BAMBU UTARA",
        "name": "ACHMAD ALI AKBAR",
        "role": "1.0",
        "gender": "L",
        "dob": "JAKARTA 15 NOVEMBER 1978",
        "address": "JL. KOTA BAMBU UTARA, RT010/RW05, NO 13, KEL KOTA BAMBU UTARA, KEC PALMERAH, JAKARTA BARAT",
        "phone": "085719665863",
        "email": "achmadaliakbar15@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": ""
      },
      {
        "no": 2,
        "kecamatan": "PALMERAH",
        "kelurahan": "KOTA BAMBU UTARA",
        "name": "ARIADI",
        "role": "2.0",
        "gender": "L",
        "dob": "JAKARTA, 08 AGUSTUS 1990",
        "address": "JL.KBU 1/9 RT.002/001, KEL.KBU, KEC.PALMERAH",
        "phone": "085921162836",
        "email": "",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O+"
      },
      {
        "no": 3,
        "kecamatan": "PALMERAH",
        "kelurahan": "KOTA BAMBU UTARA",
        "name": "HARAPSUL LISAN RIZKI",
        "role": "3.0",
        "gender": "L",
        "dob": "JAKARTA, 22 JULI 1990",
        "address": "JL. KBU NO.27, RT.011/005, KEL.KBU, KEC.PALMERAH",
        "phone": "082299994790",
        "email": "harapsul@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "B"
      },
      {
        "no": 4,
        "kecamatan": "PALMERAH",
        "kelurahan": "KOTA BAMBU UTARA",
        "name": "NOPIANI",
        "role": "4.0",
        "gender": "P",
        "dob": "JAKARTA, 15 NOVEMBER 1978",
        "address": "JL. KBU II, RT.006/009, KEL.KBU, KEC.PALMERAH",
        "phone": "",
        "email": "",
        "religion": "ISLAM",
        "occupation": "IBU RUMAH TANGGA",
        "blood_type": "AB+"
      },
      {
        "no": 5,
        "kecamatan": "PALMERAH",
        "kelurahan": "KOTA BAMBU UTARA",
        "name": "KHAERANI",
        "role": "5.0",
        "gender": "P",
        "dob": "JAKARTA, 18 OKTOBER 1981",
        "address": "JL. KBU RT.010/004, KEL.KBU, KEC.PALMERAH",
        "phone": "081510009142",
        "email": "",
        "religion": "ISLAM",
        "occupation": "IBU RUMAH TANGGA",
        "blood_type": "O"
      },
      {
        "no": 6,
        "kecamatan": "PALMERAH",
        "kelurahan": "KOTA BAMBU UTARA",
        "name": "M. FIKRAN ADZKARI",
        "role": "6.0",
        "gender": "L",
        "dob": "JAKARTA, 14 FEBRUARI 1998",
        "address": "JL. KBU V GG.E, RT.004/005, KEL.KBU, KEC.PALMERAH",
        "phone": "08811748541",
        "email": "",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 7,
        "kecamatan": "PALMERAH",
        "kelurahan": "KOTA BAMBU UTARA",
        "name": "MUAMAR SYAFARDY",
        "role": "7.0",
        "gender": "L",
        "dob": "JAKARTA, 24 AGUSTUS 1992",
        "address": "JL. KBU RT.007/004, KEL.KBU, KEC.PALMERAH",
        "phone": "08511744495",
        "email": "syafardy.muamar08@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 1,
        "kecamatan": "PALMERAH",
        "kelurahan": "KEMANGGISAN",
        "name": "MUHAMAD IQBAL",
        "role": "1.0",
        "gender": "L",
        "dob": "JAKARTA, 13 DESEMBER 1983",
        "address": "JL. H. SAILI NO.88, RT.002/006, KEL.KEMANGGISAN, KEC.PALMERAH",
        "phone": "08567585956",
        "email": "iqbalsaili13@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "-"
      },
      {
        "no": 2,
        "kecamatan": "PALMERAH",
        "kelurahan": "KEMANGGISAN",
        "name": "ALDY RUY ADILLAH",
        "role": "2.0",
        "gender": "L",
        "dob": "JAKARTA, 31 OKTOBER 1997",
        "address": "JL. KEMANGGISAN ILIR XI NO.55, RT.015/008, KEL.KEMANGGISAN, KEC.PALMERAH",
        "phone": "085714200919",
        "email": "aldyruy31@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "O"
      },
      {
        "no": 3,
        "kecamatan": "PALMERAH",
        "kelurahan": "KEMANGGISAN",
        "name": "MUHAMAD SYUKUR",
        "role": "3.0",
        "gender": "L",
        "dob": "JAKARTA, 23 DESEMBER 1975",
        "address": "JL. KEMANGGISAN ILIR XI NO.1, RT.014/008 , KEL.KEMANGGISAN, KEC.PALMERAH",
        "phone": "syukurmuhamad137@gmail.com",
        "email": "",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "AB+"
      },
      {
        "no": 4,
        "kecamatan": "PALMERAH",
        "kelurahan": "KEMANGGISAN",
        "name": "RICKO WINDI ANGGARA",
        "role": "4.0",
        "gender": "L",
        "dob": "JEMBER, 20 OKTOBER 1991",
        "address": "JL. PLN II NO.10C, RT.002/009, KEL.KEMANGGISAN, KEC.PALMERAH",
        "phone": "081285381991",
        "email": "",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "O"
      },
      {
        "no": 5,
        "kecamatan": "PALMERAH",
        "kelurahan": "KEMANGGISAN",
        "name": "MAULANA",
        "role": "5.0",
        "gender": "L",
        "dob": "JAKARTA, 06 MEI 1988",
        "address": "JL. KEMANGGISAN ILIR X NO.26A , RT.006/008, KEL.KEMANGGISAN, KEC.PALMERAH",
        "phone": "089672659535",
        "email": "maulana.bht@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 6,
        "kecamatan": "PALMERAH",
        "kelurahan": "KEMANGGISAN",
        "name": "YETY SUSANTI",
        "role": "6.0",
        "gender": "P",
        "dob": "MOJOKERTO, 10 MEI 1979",
        "address": "JL. SLIPI KEBON SAYUR, RT.011/003, KEL.KEMANGGISAN, KEC.PALMERAH",
        "phone": "081318915629",
        "email": "yetysusanti.10@gmail.com",
        "religion": "ISLAM",
        "occupation": "IBU RUMAH TANGGA",
        "blood_type": "B"
      },
      {
        "no": 7,
        "kecamatan": "PALMERAH",
        "kelurahan": "KEMANGGISAN",
        "name": "AHMAD ASEP SUGANDA",
        "role": "7.0",
        "gender": "L",
        "dob": "JAKARTA, 17 JUNI 1974",
        "address": "JL. SLIPI KEBON SAYUR, RT.016/003, KEL.KEMANGGISAN, KEC.PALMERAH",
        "phone": "085846385089",
        "email": "ahmadasepsuganda@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 1,
        "kecamatan": "CENGKARENG",
        "kelurahan": "",
        "name": "TUAN NAIK STEPHEN LUKAS SARAGIH",
        "role": "1.0",
        "gender": "L",
        "dob": "TANGERANG, 26 SEPTEMBER 1992",
        "address": "JL. RAYA KAPUK, GG SUBUR, RT.014/005, KEL.KAPUK, KEC.CENGKARENG",
        "phone": "081292564757",
        "email": "stephenlsaragih@gmail.com",
        "religion": "KRISTEN",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 2,
        "kecamatan": "CENGKARENG",
        "kelurahan": "",
        "name": "ADI PUTRA",
        "role": "2.0",
        "gender": "L",
        "dob": "JAKARTA, 12 JULI 1967",
        "address": "JL. DARMA BAKTI, RT.006/010, KEL. CENGKARENG BARAT, KEC. CENGKARENG",
        "phone": "-",
        "email": "",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "O"
      },
      {
        "no": 3,
        "kecamatan": "CENGKARENG",
        "kelurahan": "",
        "name": "DWI RAHMAT",
        "role": "3.0",
        "gender": "L",
        "dob": "JAKARTA, 12 JULI 1991",
        "address": "JL. KAPUK, RT.002/010, KEL.KAPUK, KEC.CENGKARENG",
        "phone": "085779600932",
        "email": "dwirahmat65b@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 4,
        "kecamatan": "CENGKARENG",
        "kelurahan": "",
        "name": "MUKHLISIN",
        "role": "4.0",
        "gender": "L",
        "dob": "JAKARTA, 04 JULI 1984",
        "address": "JL. BOJONG RAYA NO.36, RT.011/004, KEL.RAWABUAYA, KEC.CENGKARENG",
        "phone": "085772418681",
        "email": "mukhlisin0407@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 5,
        "kecamatan": "CENGKARENG",
        "kelurahan": "",
        "name": "AFNAN ZIKRILHAFIZ",
        "role": "5.0",
        "gender": "L",
        "dob": "JAKARTA, 23 MEI 1993",
        "address": "JL. KP. PONDOK RANDU, RT.002/002, KEL.DURI KOSAMBI, KEC.CENGKARENG",
        "phone": "085693402931",
        "email": "afnanhafiz23@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "B"
      },
      {
        "no": 6,
        "kecamatan": "CENGKARENG",
        "kelurahan": "",
        "name": "LUKMAN HAKIM",
        "role": "6.0",
        "gender": "L",
        "dob": "BREBES, 31 OKTOBER 1975",
        "address": "RUSUNAWA DAAN MOGOT TOWER 1 LT.11 NO.5, RT.018/014, KEL.DURI KOSAMBI, KEC.CENGKARENG",
        "phone": "082112224431",
        "email": "elhakim311075@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "AB"
      },
      {
        "no": 7,
        "kecamatan": "CENGKARENG",
        "kelurahan": "",
        "name": "EUIS MULDIYATI",
        "role": "7.0",
        "gender": "P",
        "dob": "JAKARTA, 28 OKTOBER 1971",
        "address": "KOMPLEK POLRI KEDAUNG KALI ANGKE NO.C42, RT.008/002, KEL.KEDAUNG KALIANGKE, KEC.CENGKARENG",
        "phone": "-",
        "email": "",
        "religion": "ISLAM",
        "occupation": "MENGURUS RUMAH TANGGA",
        "blood_type": "-"
      },
      {
        "no": 8,
        "kecamatan": "CENGKARENG",
        "kelurahan": "",
        "name": "DEDI LANTINA WIBOWO",
        "role": "8.0",
        "gender": "L",
        "dob": "BOYOLALI, 29 AGUSTUS 1991",
        "address": "JL. KAPUK RAYA RT.002/011, KEL.KAPUK, KEC.CENGKARENG",
        "phone": "089602564175",
        "email": "dedilantina@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "-"
      },
      {
        "no": 9,
        "kecamatan": "CENGKARENG",
        "kelurahan": "",
        "name": "DIAN KARTIKAWATI",
        "role": "9.0",
        "gender": "P",
        "dob": "JAKARTA, 05 APRIL 1978",
        "address": "JL. MELATI IV NO.32A RT.011/009, KEL.KAPUK, KEC. CENGKARENG",
        "phone": "089678228408",
        "email": "watuneso@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "-"
      },
      {
        "no": 1,
        "kecamatan": "CENGKARENG",
        "kelurahan": "CENGKARENG BARAT",
        "name": "NURAINI",
        "role": "1.0",
        "gender": "P",
        "dob": "JAKARTA, 2 DESEMBER 1987",
        "address": "JL. JAYA IV, RT/RW 004/014, KEL : CENGKARENG BARAT, KEC. CENGKARENG, JAKARTA BARAT",
        "phone": "081998309442",
        "email": "ainiwidodo28@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 2,
        "kecamatan": "CENGKARENG",
        "kelurahan": "CENGKARENG BARAT",
        "name": "RASUDIN",
        "role": "2.0",
        "gender": "L",
        "dob": "JAKARTA, 15 OKTOBER 1969",
        "address": "JL. PULO HARAPAN INDAH, RT./RW 009/010, KEL : CENGKARENG BARAT, KEC. CENGKARENG, JAKARTA BARAT",
        "phone": "-",
        "email": "",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 3,
        "kecamatan": "CENGKARENG",
        "kelurahan": "CENGKARENG BARAT",
        "name": "MAIMUNAH",
        "role": "3.0",
        "gender": "P",
        "dob": "JAKARTA, 17 MARET 1980",
        "address": "JL. JAYA VII, RT/RW 004/009, KEL : CENGKARENG BARAT, KEC. CENGKARENG, JAKARTA BARAT",
        "phone": "082297460946",
        "email": "",
        "religion": "ISLAM",
        "occupation": "MENGURUS RUMAH TANGGA",
        "blood_type": "-"
      },
      {
        "no": 4,
        "kecamatan": "CENGKARENG",
        "kelurahan": "CENGKARENG BARAT",
        "name": "FAJAR PRASETYO",
        "role": "4.0",
        "gender": "L",
        "dob": "KLATEN, 13 APRIL 1999",
        "address": "RUSUN FLAMBOYAN BLOK D, LT 3/418, KEL : CENGKARENG BARAT, KEC. CENGKARENG, JAKARTA BARAT",
        "phone": "081383013280",
        "email": "fajarprasetyo470@gmail.com",
        "religion": "ISLAM",
        "occupation": "MAHASISWA",
        "blood_type": "-"
      },
      {
        "no": 5,
        "kecamatan": "CENGKARENG",
        "kelurahan": "CENGKARENG BARAT",
        "name": "JUHENAH",
        "role": "5.0",
        "gender": "P",
        "dob": "LEBAK, 12 JULI 1986",
        "address": "JL. KAMAL RAYA, NO 22, RT/RW 006/014, KEL : CENGKARENG BARAT, KEC. CENGKARENG, JAKARTA BARAT",
        "phone": "085772850895",
        "email": "anahjuhenah01@gmail.com",
        "religion": "ISLAM",
        "occupation": "MENGURUS RUMAH TANGGA",
        "blood_type": "O"
      },
      {
        "no": 6,
        "kecamatan": "CENGKARENG",
        "kelurahan": "CENGKARENG BARAT",
        "name": "NASRUDIN",
        "role": "6.0",
        "gender": "L",
        "dob": "JAKARTA, 8 JULI 1976",
        "address": "JL. BAMBU LARANGAN, RT/RW 003/005, KEL : CENGKARENG BARAT, KEC. CENGKARENG, JAKARTA BARAT",
        "phone": "081218538635",
        "email": "",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 7,
        "kecamatan": "CENGKARENG",
        "kelurahan": "CENGKARENG BARAT",
        "name": "MUHAMMAD MUSLIM",
        "role": "7.0",
        "gender": "L",
        "dob": "JAKARTA, 16 SEPTEMBER 1990",
        "address": "JL. BAMBU LARANGAN, RT/RW 002/005, KEL : CENGKARENG BARAT, KEC. CENGKARENG, JAKARTA BARAT",
        "phone": "082125757866",
        "email": "muslimbatax@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 1,
        "kecamatan": "CENGKARENG",
        "kelurahan": "RAWA BUAYA",
        "name": "MAHABUDIN WALI",
        "role": "1.0",
        "gender": "L",
        "dob": "JAKARTA, 24 JULI 1991",
        "address": "JL. BOJONG RAYA RT.005/004, KEL.RAWA BUAYA, KEC.CENGKARENG, JAKARTA BARAT",
        "phone": "082137772246",
        "email": "awiiellprice@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "-"
      },
      {
        "no": 2,
        "kecamatan": "CENGKARENG",
        "kelurahan": "RAWA BUAYA",
        "name": "MASWAD",
        "role": "2.0",
        "gender": "L",
        "dob": "JAKARTA, 31 DESEMBER 1973",
        "address": "JL. RAWA BUAYA RT.006/002, KEL.RAWABUAYA, KEC. CENGKARENG, JAKARTA BARAT",
        "phone": "081574636517",
        "email": "alfianindomaswad@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "-"
      },
      {
        "no": 3,
        "kecamatan": "CENGKARENG",
        "kelurahan": "RAWA BUAYA",
        "name": "ABU HARIS",
        "role": "3.0",
        "gender": "L",
        "dob": "JAKARTA, 23 MEI 1988",
        "address": "RUSUN LOKBIN RAWA BUAYA TOWER A LT.04 NO.02, RT.001/013, KEL.RAWA BUAYA, KEC.CENGKARENG, JAKARTA BARAT",
        "phone": "085934382225",
        "email": "risviharis3@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 4,
        "kecamatan": "CENGKARENG",
        "kelurahan": "RAWA BUAYA",
        "name": "AGUS HERLYANI",
        "role": "4.0",
        "gender": "P",
        "dob": "BANJARMASIN, 01 AGUSTUS 1974",
        "address": "RUSUNAWA RAWA BUAYA TW.C, LT.14/7, RT.003/0134, KEL.RAWA BUAYA, KEC.CENGKARENG, JAKARTA BARAT",
        "phone": "082289984172",
        "email": "zenykaselaputri@gmail.com",
        "religion": "ISLAM",
        "occupation": "MENGURUS RUMAH TANGGA",
        "blood_type": "A"
      },
      {
        "no": 5,
        "kecamatan": "CENGKARENG",
        "kelurahan": "RAWA BUAYA",
        "name": "EGI HARLIANDI",
        "role": "5.0",
        "gender": "L",
        "dob": "JAKARTA, 15 OKTOBER 1996",
        "address": "JL. H.DJAIRI RT.004/002, KEL.RAWABUAYA, KEC.CENGKARENG, JAKARTA BARAT",
        "phone": "08988153287",
        "email": "egiharliandi15@gmail.com",
        "religion": "ISLAM",
        "occupation": "ENTERPRENEUR",
        "blood_type": "-"
      },
      {
        "no": 6,
        "kecamatan": "CENGKARENG",
        "kelurahan": "RAWA BUAYA",
        "name": "ANTONIUS HAREFA",
        "role": "6.0",
        "gender": "L",
        "dob": "LOMBUZAUA, 06 JANUARI 1991",
        "address": "JL. MADRASAH II, NO.22C, RT.006/004, KEL.RAWABUAYA, KEC.CENGKARENG, JAKARTA BARAT",
        "phone": "082213813592",
        "email": "antoniushrf@gmail.com",
        "religion": "KATHOLIK",
        "occupation": "WIRASWASTA",
        "blood_type": "O"
      },
      {
        "no": 7,
        "kecamatan": "CENGKARENG",
        "kelurahan": "RAWA BUAYA",
        "name": "ADI SETIYAWAN",
        "role": "7.0",
        "gender": "L",
        "dob": "JAKARTA, 29 MEI 1994",
        "address": "JL. H.DJAIRI, RT.013/002, KEL.RAWABUAYA, KEC.CENGKARENG, JAKARTA BARAT",
        "phone": "081410091033",
        "email": "adi.setiya2905@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 1,
        "kecamatan": "CENGKARENG",
        "kelurahan": "CENGKARENG TIMUR",
        "name": "MARCEL GOJALI",
        "role": "1.0",
        "gender": "L",
        "dob": "JAKARTA, 11 MEI 1992",
        "address": "JL. BANGUN NUSA RAYA, RT/RW 012/003, KEL : CENGKARENG TIMUR, KEC : CENGKARENG, JAKARTA BARAT",
        "phone": "087875227527",
        "email": "marcelgojali92@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 2,
        "kecamatan": "CENGKARENG",
        "kelurahan": "CENGKARENG TIMUR",
        "name": "ACHMAD HAERUDIN",
        "role": "2.0",
        "gender": "L",
        "dob": "JAKARTA, 22 NOVEMBER 1976",
        "address": "RUSUN CINTA KASIH, RT/RW 005/017, BLOK A 13/1C, KEL : CENGKARENG TIMUR, KEC : CENGKARENG, JAKARTA BARAT",
        "phone": "081314627467",
        "email": "achmadlokania78@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 3,
        "kecamatan": "CENGKARENG",
        "kelurahan": "CENGKARENG TIMUR",
        "name": "VERONICA ELIZABETH HILMIA L",
        "role": "3.0",
        "gender": "P",
        "dob": "JAKARTA, 07 FEBRUARI 1976",
        "address": "RUSUN BCI MELATI 1/1/9, KEL : CENGKARENG TIMUR, KEC : CENGKARENG, JAKARTA BARAT",
        "phone": "088296888313",
        "email": "lolowijaya261@gmail.com",
        "religion": "KRISTEN",
        "occupation": "MENGURUS RUMAH TANGGA",
        "blood_type": "O"
      },
      {
        "no": 4,
        "kecamatan": "CENGKARENG",
        "kelurahan": "CENGKARENG TIMUR",
        "name": "LUQMAN HAKIM",
        "role": "4.0",
        "gender": "L",
        "dob": "JAKARTA, 10 MEI 1989",
        "address": "JL. NURUL AMAL XXI, NO 14, RT/RW 009/005,KEL : CENGKARENG TIMUR, KEC : CENGKARENG, JAKARTA BARAT",
        "phone": "089621318147",
        "email": "luqman89hakim@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 5,
        "kecamatan": "CENGKARENG",
        "kelurahan": "CENGKARENG TIMUR",
        "name": "HERI SETIAWAN",
        "role": "5.0",
        "gender": "L",
        "dob": "JAKARTA, 22 MEI 1979",
        "address": "JL. KINCIR RAYA, RT/RW 008/006, KEL : CENGKARENG TIMUR, KEC : CENGKARENG, JAKARTA BARAT",
        "phone": "087778317577",
        "email": "beiratapara@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 6,
        "kecamatan": "CENGKARENG",
        "kelurahan": "CENGKARENG TIMUR",
        "name": "PRINI PUSPITA",
        "role": "6.0",
        "gender": "P",
        "dob": "JAKARTA, 6 MARET 1995",
        "address": "JL. FAJAR BARU UTARA, RT/RW 006/008, KEL : CENGKARENG TIMUR, KEC : CENGKARENG, JAKARTA BARAT",
        "phone": "089603063674",
        "email": "rinipuspita467@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 7,
        "kecamatan": "CENGKARENG",
        "kelurahan": "CENGKARENG TIMUR",
        "name": "NASRUDI",
        "role": "7.0",
        "gender": "L",
        "dob": "JAKARTA, 2 SEPTEMBER 1975",
        "address": "JL. UKIR 1 A, PEDONGKELAN DEPAN, RT/RW 006/013, KEL : CENGKARENG TIMUR, KEC : CENGKARENG, JAKARTA BARAT",
        "phone": "08979571420",
        "email": "nasrudirudi330@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 1,
        "kecamatan": "CENGKARENG",
        "kelurahan": "KAPUK",
        "name": "SAFITRI LAKORO",
        "role": "1.0",
        "gender": "P",
        "dob": "MANADO, 28 DESEMBER 1981",
        "address": "PEDONGKELAN, RT/RW 024/016, KEL: KAPUK, KEC : CENGKARENG, JAKARTA BARAT",
        "phone": "082113867737",
        "email": "safitrilakoro0@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 2,
        "kecamatan": "CENGKARENG",
        "kelurahan": "KAPUK",
        "name": "INTAN KUSUMA WARDANI",
        "role": "2.0",
        "gender": "P",
        "dob": "JAKARTA, 16 JUNI 1989",
        "address": "KAPUK GG G, NO33 , RT/RW 010/001, KEL: KAPUK, KEC : CENGKARENG, JAKARTA BARAT",
        "phone": "083877998949",
        "email": "intanaie15@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 3,
        "kecamatan": "CENGKARENG",
        "kelurahan": "KAPUK",
        "name": "ROKUF",
        "role": "3.0",
        "gender": "L",
        "dob": "BANYUMAS, 6 DESEMBER 1975",
        "address": "KEBON JAHE, RT/RW 012/003, KEL: KAPUK, KEC : CENGKARENG, JAKARTA BARAT",
        "phone": "083877866649",
        "email": "arokuf@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 4,
        "kecamatan": "CENGKARENG",
        "kelurahan": "KAPUK",
        "name": "M. YUDI SUPRIADI",
        "role": "4.0",
        "gender": "L",
        "dob": "JAKARTA, 1 JUNI 1984",
        "address": "JL. PEDONGKELAN BELAKANG, RT/RW 021/016, KEL: KAPUK, KEC : CENGKARENG, JAKARTA BARAT",
        "phone": "081219861995",
        "email": "myudhis82@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 5,
        "kecamatan": "CENGKARENG",
        "kelurahan": "KAPUK",
        "name": "LENARDO GIDION",
        "role": "5.0",
        "gender": "L",
        "dob": "JAKARTA, 27 APRIL 2000",
        "address": "JL. PEDONGKELAN, RT/RW 002/015, KEL: KAPUK, KEC : CENGKARENG, JAKARTA BARAT",
        "phone": "081210201280",
        "email": "lenardogidion270400@gmail.com",
        "religion": "KRISTEN",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 6,
        "kecamatan": "CENGKARENG",
        "kelurahan": "KAPUK",
        "name": "MUHAMMAD HATTA",
        "role": "6.0",
        "gender": "L",
        "dob": "JAKARTA, 8 NOVEMBER 1981",
        "address": "CENGKARENG INDAH, BLOK AX, NO 1, RT/RW007/014, KEL: KAPUK, KEC : CENGKARENG, JAKARTA BARAT",
        "phone": "-",
        "email": "",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "O"
      },
      {
        "no": 7,
        "kecamatan": "CENGKARENG",
        "kelurahan": "KAPUK",
        "name": "ABDUL ROJAK",
        "role": "7.0",
        "gender": "L",
        "dob": "JAKARTA, 12 FEBRUARI 1976",
        "address": "JL. PEDONGKELAN, RT/RW 002/006, KEL: KAPUK, KEC : CENGKARENG, JAKARTA BARAT",
        "phone": "081289608003",
        "email": "abd.rojak33@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 1,
        "kecamatan": "CENGKARENG",
        "kelurahan": "DURI KOSAMBI",
        "name": "HENDRA HIDAYAT",
        "role": "1.0",
        "gender": "L",
        "dob": "JAKARTA, 25 DESEMBER 1981",
        "address": "JL. MASJID NURUL IMAN, NO 99, RT/RE 008/002, KEL : DURI KOSAMBI, KEL : CENGKARENG, JAKARTA BARAT",
        "phone": "089666327597",
        "email": "hendra.durkos@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "B"
      },
      {
        "no": 2,
        "kecamatan": "CENGKARENG",
        "kelurahan": "DURI KOSAMBI",
        "name": "IMELRIS FERDINSISKA L",
        "role": "2.0",
        "gender": "P",
        "dob": "HELIMONOREGERAYA, 12 DESEMBER 1991",
        "address": "JL. RAYA KRESEK, NO 11, RT/W 001/003, KEL : DURI KOSAMBI, KEL : CENGKARENG, JAKARTA BARAT",
        "phone": "081218280725",
        "email": "iferdinsiska@gmail.com",
        "religion": "KRISTEN",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 3,
        "kecamatan": "CENGKARENG",
        "kelurahan": "DURI KOSAMBI",
        "name": "MAHYUDIN",
        "role": "3.0",
        "gender": "L",
        "dob": "JAKARTA, 5 SEPTEMBER 1975",
        "address": "KP. PULO, NO 37, RT/RW 006/008, KEL : DURI KOSAMBI, KEL : CENGKARENG, JAKARTA BARAT",
        "phone": "083891922635",
        "email": "mahyudinfilah@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 4,
        "kecamatan": "CENGKARENG",
        "kelurahan": "DURI KOSAMBI",
        "name": "SYAMSUL BAIDOIH",
        "role": "4.0",
        "gender": "L",
        "dob": "JAKARTA, 25 APRIL 1981",
        "address": "JL. H. SANUSI, RT/RW 006/013,KEL : DURI KOSAMBI, KEL : CENGKARENG, JAKARTA BARAT",
        "phone": "087887348379",
        "email": "syamsulbaidoih13@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 5,
        "kecamatan": "CENGKARENG",
        "kelurahan": "DURI KOSAMBI",
        "name": "ULANDARI",
        "role": "5.0",
        "gender": "P",
        "dob": "JAKARTA, 1 FEBRUARI 1989",
        "address": "KP. PULO, RT/RW 007/008, KEL : DURI KOSAMBI, KEL : CENGKARENG, JAKARTA BARAT",
        "phone": "-",
        "email": "",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 6,
        "kecamatan": "CENGKARENG",
        "kelurahan": "DURI KOSAMBI",
        "name": "FAIZ ZUHAD",
        "role": "6.0",
        "gender": "L",
        "dob": "JAKARTA, 20 FEBRUARI 1991",
        "address": "JL. KH. ABDUL HAMID I/45, RT/RW 002/003, KEL : DURI KOSAMBI, KEL : CENGKARENG, JAKARTA BARAT",
        "phone": "081212235243",
        "email": "faizzuuhad512@gmail.com",
        "religion": "ISLAM",
        "occupation": "GURU SWASTA",
        "blood_type": "-"
      },
      {
        "no": 7,
        "kecamatan": "CENGKARENG",
        "kelurahan": "DURI KOSAMBI",
        "name": "MUHAMAD ANIS FUAD",
        "role": "7.0",
        "gender": "L",
        "dob": "JAKARTA, 14 APRIL 1983",
        "address": "KP. TANAH KOJA, RT/RW 003/003, KEL : DURI KOSAMBI, KEL : CENGKARENG, JAKARTA BARAT",
        "phone": "08159999688",
        "email": "sholatzohor@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "B"
      },
      {
        "no": 1,
        "kecamatan": "CENGKARENG",
        "kelurahan": "KEDAUNG KALIANGKE",
        "name": "GUMANTI",
        "role": "1.0",
        "gender": "L",
        "dob": "JAKARTA, 30 JANUARI 1976",
        "address": "JL. PESING POLGAR, RT.002/005, KEL.KEDAUNG KALIANGKE, KEC.CENGKARENG, JAKARTA BARAT",
        "phone": "081389621121",
        "email": "gumantiagung94@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "-"
      },
      {
        "no": 2,
        "kecamatan": "CENGKARENG",
        "kelurahan": "KEDAUNG KALIANGKE",
        "name": "DANU GUSTRIA FERNANDA",
        "role": "2.0",
        "gender": "L",
        "dob": "JAKARTA, 24 JUNI 1999",
        "address": "JL. PESING POLGAR, RT.002/002, KEL.KEDAUNG KALIANGKE, KEC.CENGKARENG, JAKARTA BARAT",
        "phone": "087887907422",
        "email": "danugf@gmail.com",
        "religion": "ISLAM",
        "occupation": "FREELANCER",
        "blood_type": "-"
      },
      {
        "no": 3,
        "kecamatan": "CENGKARENG",
        "kelurahan": "KEDAUNG KALIANGKE",
        "name": "ANGGER SULISTIONO",
        "role": "3.0",
        "gender": "L",
        "dob": "JAKARTA, 03 JUNI 1998",
        "address": "KP. KALIMATI, RT.012/003, KEL.KEDAUNG KALIANGKE, KEC.CENGKARENG, JAKARTA BARAT",
        "phone": "081585350179",
        "email": "boy070318@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "-"
      },
      {
        "no": 4,
        "kecamatan": "CENGKARENG",
        "kelurahan": "KEDAUNG KALIANGKE",
        "name": "MAYA MASYKURIN",
        "role": "4.0",
        "gender": "P",
        "dob": "NGANJUK, 17 MARET 1984",
        "address": "RUSUNAWA POLRI BLOK C, NO.53, SATPAS SIM PMJ, RT.007/006, KEL.KEDAUNG KALIANGKE, KEC.CENGKARENG, JAKARTA BARAT",
        "phone": "081555713038",
        "email": "17890mayya@gmail.com",
        "religion": "ISLAM",
        "occupation": "IBU RUMAH TANGGA",
        "blood_type": "-"
      },
      {
        "no": 5,
        "kecamatan": "CENGKARENG",
        "kelurahan": "KEDAUNG KALIANGKE",
        "name": "NINING MODIYANTI",
        "role": "5.0",
        "gender": "P",
        "dob": "JAKARTA, 12 DESEMBER 1981",
        "address": "JL. JEMBATAN GANTUNG, RT.006/008, KEL.KEDAUNG KALIANGKE, KEC.CENGKARENG, JAKARTA BARAT",
        "phone": "08973931434",
        "email": "",
        "religion": "ISLAM",
        "occupation": "IBU RUMAH TANGGA",
        "blood_type": "-"
      },
      {
        "no": 6,
        "kecamatan": "CENGKARENG",
        "kelurahan": "KEDAUNG KALIANGKE",
        "name": "MOHAMAD ARIEF AFIFI",
        "role": "6.0",
        "gender": "L",
        "dob": "JAKARTA, 14 SEPTEMBER 1970",
        "address": "JL. BIDURI BULAN NO.39, RT.011/007, KEL.KEDAUNG KALIANGKE, KEC.CENGKARENG, JAKARTA BARAT",
        "phone": "082297021849",
        "email": "ariefmohamad970@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 7,
        "kecamatan": "CENGKARENG",
        "kelurahan": "KEDAUNG KALIANGKE",
        "name": "NIA KURNIAWATI",
        "role": "7.0",
        "gender": "P",
        "dob": "JAKARTA, 17 APRIL 1975",
        "address": "JL. KP KALIMATI, RT.013/003, KEL.KEDAUNG KALIANGKE, KEC.CENGKARENG, JAKARTA BARAT",
        "phone": "085920712435",
        "email": "kurniawatin339@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 1,
        "kecamatan": "TAMANSARI",
        "kelurahan": "",
        "name": "AGUS PUURWANTO",
        "role": "1.0",
        "gender": "L",
        "dob": "JAKARTA, 07 JULI 1970",
        "address": "JL. MANGGA DUA III NO.96A, RT.005/003, KEL.PINANGSIA, KEC.TAMANSARI",
        "phone": "081387467494",
        "email": "purwantoagus700@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 2,
        "kecamatan": "TAMANSARI",
        "kelurahan": "",
        "name": "SUHENDI",
        "role": "2.0",
        "gender": "L",
        "dob": "JAKARTA, 13 FEBRUARI 1971",
        "address": "JL. KEBON JERUK XVI, RT.007/008, KEL.MAPHAR, KEC.TAMANSARI",
        "phone": "082112436657",
        "email": "suhendi1371@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 3,
        "kecamatan": "TAMANSARI",
        "kelurahan": "",
        "name": "FIRMAN HARDIANSYAH",
        "role": "3.0",
        "gender": "L",
        "dob": "JAKARTA, 27 AGUSTUS 1984",
        "address": "JL. MANGGA DUA I, RT.007/004, KEL.PINANGSIA, KEC.TAMANSARI",
        "phone": "ahguntur07@gmail.com",
        "email": "",
        "religion": "ISLAM",
        "occupation": "PEKERJA LEPAS",
        "blood_type": "-"
      },
      {
        "no": 4,
        "kecamatan": "TAMANSARI",
        "kelurahan": "",
        "name": "SAKRAD",
        "role": "4.0",
        "gender": "L",
        "dob": "TEGAL, 08 SEPTEMBER 1970",
        "address": "JL. KEAMANAN DALAM II, RT.011/006, KEL.KEAGUNGAN, KEC.TAMANSARI",
        "phone": "08888995502",
        "email": "sakrad06@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "A"
      },
      {
        "no": 5,
        "kecamatan": "TAMANSARI",
        "kelurahan": "",
        "name": "HARIS ISKANDAR",
        "role": "5.0",
        "gender": "L",
        "dob": "JAKARTA , 14 AGUSTUS 1968",
        "address": "JL. KEMENANGAN NO.116A RT.005/001, KEL.GLODOK, KEC.TAMANSARI",
        "phone": "083806431415",
        "email": "harisiskandar446@gmail.com",
        "religion": "ISLAM",
        "occupation": "BURUH HARIAN LEPAS",
        "blood_type": "AB+"
      },
      {
        "no": 6,
        "kecamatan": "TAMANSARI",
        "kelurahan": "",
        "name": "ADE SUHANDA",
        "role": "6.0",
        "gender": "L",
        "dob": "JAKARTA, 03 JUNI 1968",
        "address": "JL. KEADILAN DALAM II, RT.004/001, KEL.KEAGUNGAN, KEC.TAMANSARI",
        "phone": "081284292029",
        "email": "adesuhanda3668@gmail.com",
        "religion": "ISLAM",
        "occupation": "PEDAGANG",
        "blood_type": "AB"
      },
      {
        "no": 7,
        "kecamatan": "TAMANSARI",
        "kelurahan": "",
        "name": "BUDI IRIAWAN WIDJAJA",
        "role": "7.0",
        "gender": "L",
        "dob": "JAKARTA, 07 APRIL 1965",
        "address": "JL. KEADILAN II NO.18, RT.009/004, KEL.GLODOK, KEC.TAMANSARI",
        "phone": "085880707733",
        "email": "budiok1818@gmail.com",
        "religion": "BUDHA",
        "occupation": "WIRASWASTA",
        "blood_type": "O"
      },
      {
        "no": 8,
        "kecamatan": "TAMANSARI",
        "kelurahan": "",
        "name": "LIE, JEKKY GUNAWAN",
        "role": "8.0",
        "gender": "L",
        "dob": "JAKARTA, 20 FEBRUARI 1981",
        "address": "JL. KEMURNIAN IV NO.69A, RT.004/005, KEL.GLODOK, KEC.TAMANSARI",
        "phone": "089517694677",
        "email": "",
        "religion": "KRISTEN",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "A"
      },
      {
        "no": 9,
        "kecamatan": "TAMANSARI",
        "kelurahan": "",
        "name": "MAULANA MAKHDUM",
        "role": "9.0",
        "gender": "L",
        "dob": "JAKARTA 14 JANUARI 1977",
        "address": "JL. KERAJINAN II NO.90A, RT.005/009, KEL.KEAGUNGAN, KEC.TAMANSARI",
        "phone": "0895323633692",
        "email": "mshofwah@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "AB"
      },
      {
        "no": 1,
        "kecamatan": "TAMANSARI",
        "kelurahan": "TAMAN SARI",
        "name": "RIANTI",
        "role": "1.0",
        "gender": "P",
        "dob": "JAKARTA, 11 MARET 1976",
        "address": "JL. MANGGA BESAR IV K, RT/RW 009/002, KEL : TAMAN SARI, KEC.TAMANSARI, JAKARTA BARAT",
        "phone": "088210135716",
        "email": "riyanti061998@gmail.com",
        "religion": "ISLAM",
        "occupation": "MENGURUS RUMAH TANGGA",
        "blood_type": "B"
      },
      {
        "no": 2,
        "kecamatan": "TAMANSARI",
        "kelurahan": "TAMAN SARI",
        "name": "RAFID ARAHMAN",
        "role": "2.0",
        "gender": "P",
        "dob": "JAKARTA, 20 SEPTEMBER 1995",
        "address": "JL. TAMAN SARI X, RT/RW 007/003, KEL : TAMAN SARI, KEC.TAMANSARI, JAKARTA BARAT",
        "phone": "087886437330",
        "email": "arahmanrafid@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "B"
      },
      {
        "no": 3,
        "kecamatan": "TAMANSARI",
        "kelurahan": "TAMAN SARI",
        "name": "JIMMY ANG",
        "role": "3.0",
        "gender": "L",
        "dob": "JAKARTA, 11 JULI 1992",
        "address": "JL. MANGGA BESAR IV P/IID, RT/RW 009/005, KEL : TAMAN SARI, KEC.TAMANSARI, JAKARTA BARAT",
        "phone": "081291415542",
        "email": "jimmy.org0792@gmail.com",
        "religion": "KRISTEN",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 4,
        "kecamatan": "TAMANSARI",
        "kelurahan": "TAMAN SARI",
        "name": "WINDI PRATIWI",
        "role": "4.0",
        "gender": "P",
        "dob": "JAKARTA, 4 NOVEMBER 1994",
        "address": "JL. MANGGA BESAR IV R/35G, RT/RW 006/005, KEL : TAMAN SARI, KEC.TAMANSARI, JAKARTA BARAT",
        "phone": "085779154048",
        "email": "windypratiwi844@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 5,
        "kecamatan": "TAMANSARI",
        "kelurahan": "TAMAN SARI",
        "name": "ROHIM MUCHAER",
        "role": "5.0",
        "gender": "L",
        "dob": "JAKARTA, 5 JUNI 1990",
        "address": "JL. MANGGA BESAR IV BLK, RT/RW 012/008, KEL : TAMAN SARI, KEC.TAMANSARI, JAKARTA BARAT",
        "phone": "083893133528",
        "email": "rohimmuchaer8@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "AB"
      },
      {
        "no": 6,
        "kecamatan": "TAMANSARI",
        "kelurahan": "TAMAN SARI",
        "name": "EDY SURYADI",
        "role": "6.0",
        "gender": "L",
        "dob": "JAKARTA, 8 JANUARI 1976",
        "address": "JL. MANGGA BESAR IV U/1A, RT/RW 007/008, KEL : TAMAN SARI, KEC.TAMANSARI, JAKARTA BARAT",
        "phone": "083809121446",
        "email": "yuliansyah1050@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 1,
        "kecamatan": "TAMANSARI",
        "kelurahan": "MAPHAR",
        "name": "AHMAD MARIE",
        "role": "1.0",
        "gender": "L",
        "dob": "JAKARTA, 23 NOVEMBER 1969",
        "address": "JL. KEBON JERUK XIX, RT/RW 013/009, KEL : MAPHAR, KEC : TAMANSARI, JAKARTA BARAT",
        "phone": "081586046761",
        "email": "ahmadmarie1969@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "O"
      },
      {
        "no": 2,
        "kecamatan": "TAMANSARI",
        "kelurahan": "MAPHAR",
        "name": "AANG IRBADI",
        "role": "2.0",
        "gender": "L",
        "dob": "JAKARTA, 30 JULI 1987",
        "address": "JL. TAMAN SARI 1B, NO 36, RT/RW 007/001, KEL : MAPHAR, KEC : TAMANSARI, JAKARTA BARAT",
        "phone": "081298488499",
        "email": "aangirbadi87@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "B"
      },
      {
        "no": 3,
        "kecamatan": "TAMANSARI",
        "kelurahan": "MAPHAR",
        "name": "SRI TRI WARDANI",
        "role": "3.0",
        "gender": "P",
        "dob": "JAKARTA, 23 FEBRUARI 1975",
        "address": "JL. KEBON JERUK XVI, NO 45, RT/RW 003/008, KEL : MAPHAR, KEC : TAMANSARI, JAKARTA BARAT",
        "phone": "081262357610",
        "email": "suherman210823@gmail.com",
        "religion": "ISLAM",
        "occupation": "MENGURUS RUMAH TANGGA",
        "blood_type": "-"
      },
      {
        "no": 4,
        "kecamatan": "TAMANSARI",
        "kelurahan": "MAPHAR",
        "name": "MUHAMMAD FIRDIAN JUN",
        "role": "4.0",
        "gender": "L",
        "dob": "JAKARTA, 21 JULI 1995",
        "address": "JL. KEBON JERUK XVI, NO 3, RT/RW 007/008, KEL : MAPHAR, KEC : TAMANSARI, JAKARTA BARAT",
        "phone": "0895410018426",
        "email": "mfirdianjun@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 5,
        "kecamatan": "TAMANSARI",
        "kelurahan": "MAPHAR",
        "name": "MARYANTO",
        "role": "5.0",
        "gender": "L",
        "dob": "JAKARTA, 22 JUNI 1974",
        "address": "JL. KEBON JERUK XIV, NO 33, RT/RW 014/005, KEL : MAPHAR, KEC : TAMANSARI, JAKARTA BARAT",
        "phone": "085810028447",
        "email": "maryantoikhsan@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "A"
      },
      {
        "no": 6,
        "kecamatan": "TAMANSARI",
        "kelurahan": "MAPHAR",
        "name": "ASEP ISKANDAR",
        "role": "6.0",
        "gender": "L",
        "dob": "JAKARTA, 8 SEPTEMBER 1993",
        "address": "JL. KEBON JERUK XIX, NO 29, RT/RW 008/009, KEL : MAPHAR, KEC : TAMANSARI, JAKARTA BARAT",
        "phone": "081370734165",
        "email": "bhoroy080993@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "AB"
      },
      {
        "no": 7,
        "kecamatan": "TAMANSARI",
        "kelurahan": "MAPHAR",
        "name": "EKO WAHYUDIONO",
        "role": "7.0",
        "gender": "L",
        "dob": "BANYUMAS, 26 JUNI 1979",
        "address": "JL. KEBON JERUK VII, NO 27, RT/RW 001/005, KEL : MAPHAR, KEC : TAMANSARI, JAKARTA BARAT",
        "phone": "081222299639",
        "email": "wahyudhie88@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 1,
        "kecamatan": "TAMANSARI",
        "kelurahan": "KRUKUT",
        "name": "ALI LUTHFI MACHFOED",
        "role": "1.0",
        "gender": "L",
        "dob": "JAKARTA, 4 MEI 1979",
        "address": "JL. KERAJINAN DALAM, NO 55, RT/RW 009/002, KEL : KRUKUT, KEC : TAMANSARI, JAKARTA BARAT",
        "phone": "082226286074",
        "email": "almachfoed@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 2,
        "kecamatan": "TAMANSARI",
        "kelurahan": "KRUKUT",
        "name": "FADELI",
        "role": "2.0",
        "gender": "L",
        "dob": "JAKARTA, 26 SEPTEMBER 1979",
        "address": "JL. KETAPANG UTARA I, NO 17,RT/RW 011/007, KEL : KRUKUT, KEC : TAMANSARI, JAKARTA BARAT",
        "phone": "081932128259",
        "email": "fadrel6362@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 3,
        "kecamatan": "TAMANSARI",
        "kelurahan": "KRUKUT",
        "name": "RIZAL YANUARSYAH",
        "role": "3.0",
        "gender": "L",
        "dob": "JAKARTA, 19 JANUARI 1991",
        "address": "JL. THALIB III, NO 12, RT/RW 011/005, KEL : KRUKUT, KEC : TAMANSARI, JAKARTA BARAT",
        "phone": "081929338323",
        "email": "yanuarrizal093@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 4,
        "kecamatan": "TAMANSARI",
        "kelurahan": "KRUKUT",
        "name": "AKBAR FADILLAH",
        "role": "4.0",
        "gender": "L",
        "dob": "JAKARTA, 13 AGUSTUS 1998",
        "address": "JL. THALIB III DALAM, NO 25, RT/RW 005/005, KEL : KRUKUT, KEC : TAMANSARI, JAKARTA BARAT",
        "phone": "081381302124",
        "email": "akbarfadillah.fa@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 5,
        "kecamatan": "TAMANSARI",
        "kelurahan": "KRUKUT",
        "name": "IWAN",
        "role": "5.0",
        "gender": "L",
        "dob": "JAKARTA, 23 AGUSTUS 1977",
        "address": "JL. KRUKUT LIO, NO 9, RT/RW 013/003, KEL : KRUKUT, KEC : TAMANSARI, JAKARTA BARAT",
        "phone": "0895320680600",
        "email": "suhermanyuan808@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "A"
      },
      {
        "no": 6,
        "kecamatan": "TAMANSARI",
        "kelurahan": "KRUKUT",
        "name": "RIDWAN",
        "role": "6.0",
        "gender": "L",
        "dob": "JAKARTA, 8 MEI 1971",
        "address": "JL. KETAPANG UTARA I, NO 5,RT/RW 0007/007, KEL : KRUKUT, KEC : TAMANSARI, JAKARTA BARAT",
        "phone": "0895383214500",
        "email": "rridone5@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 7,
        "kecamatan": "TAMANSARI",
        "kelurahan": "KRUKUT",
        "name": "RULIANDI ARFANSAH",
        "role": "7.0",
        "gender": "L",
        "dob": "JAKARTA, 24 JUNI 1991",
        "address": "JL. KETAPANG UTARA I, NO 20,RT/RW 0007/007, KEL : KRUKUT, KEC : TAMANSARI, JAKARTA BARAT",
        "phone": "087724026558",
        "email": "rulibita24@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 1,
        "kecamatan": "TAMANSARI",
        "kelurahan": "GLODOK",
        "name": "HIENDRIANTO FIRDAUS",
        "role": "1.0",
        "gender": "L",
        "dob": "SERANG, 19 JUNI 1971",
        "address": "JL. KEMURNIAN IV, NO 38, RT/RW 015/001, KEL : GLODOK, KEC : TAMANSARI, JAKARTA BARAT",
        "phone": "0858555559255",
        "email": "fkdm.glodoktamansari@gmail.com",
        "religion": "KRISTEN",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "B"
      },
      {
        "no": 2,
        "kecamatan": "TAMANSARI",
        "kelurahan": "GLODOK",
        "name": "HIE SUN HALIM",
        "role": "2.0",
        "gender": "L",
        "dob": "JAKARTA, 13 FEBRUARI 1968",
        "address": "JL. KEMURNIAN IV, NO 8, RT/RW 015/001, KEL : GLODOK, KEC : TAMANSARI, JAKARTA BARAT",
        "phone": "08118989197",
        "email": "hiesunh@gmail.com",
        "religion": "BUDDHA",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "A"
      },
      {
        "no": 3,
        "kecamatan": "TAMANSARI",
        "kelurahan": "GLODOK",
        "name": "MARGARET REMADJA",
        "role": "3.0",
        "gender": "P",
        "dob": "JAKARTA, 29 NOVEMBER 1974",
        "address": "JL. KEMENANGAN I, NO 105, RT/RW 004/001, KEL : GLODOK, KEC : TAMANSARI, JAKARTA BARAT",
        "phone": "081323842468",
        "email": "margaremadja7408@gmail.com",
        "religion": "KRISTEN",
        "occupation": "MENGURUS RUMAH TANGGA",
        "blood_type": "O"
      },
      {
        "no": 4,
        "kecamatan": "TAMANSARI",
        "kelurahan": "GLODOK",
        "name": "KARTINI",
        "role": "4.0",
        "gender": "P",
        "dob": "SEMARANG, 31 DESEMBER 1979",
        "address": "JL. KEMENANGAN V, NO 9, RT/RW 003/003, KEL : GLODOK, KEC : TAMANSARI, JAKARTA BARAT",
        "phone": "082226678829",
        "email": "hart43211@gmail.com",
        "religion": "ISLAM",
        "occupation": "MENGURUS RUMAH TANGGA",
        "blood_type": "O"
      },
      {
        "no": 5,
        "kecamatan": "TAMANSARI",
        "kelurahan": "GLODOK",
        "name": "DESTA DENIKA",
        "role": "5.0",
        "gender": "L",
        "dob": "BREBES, 7 JUNI 1989",
        "address": "JL. KEADILAN IIA, RT/RW 014/005, KEL : GLODOK, KEC : TAMANSARI, JAKARTA BARAT",
        "phone": "087819814363",
        "email": "destagrab74@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 6,
        "kecamatan": "TAMANSARI",
        "kelurahan": "GLODOK",
        "name": "MICHAEL MURRI",
        "role": "6.0",
        "gender": "L",
        "dob": "JAKARTA, 9 AGUSTUS 1981",
        "address": "JL. KEMENANGAN III, NO 58, RT/RW 010/003, KEL : GLODOK, KEC : TAMANSARI, JAKARTA BARAT",
        "phone": "087788640215",
        "email": "michaeliswowo@gmail.com",
        "religion": "BUDDHA",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "AB"
      },
      {
        "no": 7,
        "kecamatan": "TAMANSARI",
        "kelurahan": "GLODOK",
        "name": "M. ABDILLAH RIYAN",
        "role": "7.0",
        "gender": "L",
        "dob": "JAKARTA, 1 DESEMBER 1980",
        "address": "JL. KP. JAWA KEBON SAYUR IV, RT/RW 009/010, KEL : KEAGUNGAN, KEC : TAMANSARI, JAKARTA BARAT",
        "phone": "081959438646",
        "email": "rokipsreckopic@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 1,
        "kecamatan": "TAMANSARI",
        "kelurahan": "MANGGA BESAR",
        "name": "ISKANDAR",
        "role": "1.0",
        "gender": "L",
        "dob": "JAKARTA, 13 MEI 1979",
        "address": "JL. TIMBUL, NO 9, RT/RW 009/002, KEL : MANGGA BESAR, KEC : TAMANSARI, JAKARTA BARAT",
        "phone": "085810057217",
        "email": "iskandarmahessa1130579@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 2,
        "kecamatan": "TAMANSARI",
        "kelurahan": "MANGGA BESAR",
        "name": "LINA HARJATI SALIM",
        "role": "2.0",
        "gender": "P",
        "dob": "JAKARTA, 17 DESEMBER 1966",
        "address": "JL. GANDARIA, NO 16, RT/RW 003/003, KEL : MANGGA BESAR, KEC : TAMANSARI, JAKARTA BARAT",
        "phone": "0818487706",
        "email": "linaharjati885@gmail.com",
        "religion": "BUDDHA",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 3,
        "kecamatan": "TAMANSARI",
        "kelurahan": "MANGGA BESAR",
        "name": "PARLAUNGAN DOLY",
        "role": "3.0",
        "gender": "L",
        "dob": "JAKARTA, 3 MEI 1973",
        "address": "JL. BLIMBING II, NO 6A, RT/RW 001/005, KEL : MANGGA BESAR, KEC : TAMANSARI, JAKARTA BARAT",
        "phone": "082122201516",
        "email": "",
        "religion": "KRISTEN",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 4,
        "kecamatan": "TAMANSARI",
        "kelurahan": "MANGGA BESAR",
        "name": "HASAN",
        "role": "4.0",
        "gender": "L",
        "dob": "PAMANUKAN, 10 AGUSTUS 1967",
        "address": "JL. DURIAN DALAM, NO 4, RT/RW 004/003, KEL : MANGGA BESAR, KEC : TAMANSARI, JAKARTA BARAT",
        "phone": "087711063224",
        "email": "hasanbeckffx@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 5,
        "kecamatan": "TAMANSARI",
        "kelurahan": "MANGGA BESAR",
        "name": "KUSNAEDY PURWANTO",
        "role": "5.0",
        "gender": "L",
        "dob": "JAKARTA, 30 OKTOBER 1982",
        "address": "JL. DUKU, NO 10, RT/RW 003/003, KEL : MANGGA BESAR, KEC : TAMANSARI, JAKARTA BARAT",
        "phone": "085282664429",
        "email": "edi.slowaja@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 6,
        "kecamatan": "TAMANSARI",
        "kelurahan": "MANGGA BESAR",
        "name": "RUSDY SYAFRUDIN",
        "role": "6.0",
        "gender": "L",
        "dob": "JAKARTA, 12 MARET 1986",
        "address": "JL. BLIMBING II, RT/RW 005/004, KEL : MANGGA BESAR, KEC : TAMANSARI, JAKARTA BARAT",
        "phone": "087886743223",
        "email": "kimahesa.jagakarsa@gamil.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "A"
      },
      {
        "no": 1,
        "kecamatan": "TAMANSARI",
        "kelurahan": "TANGKI",
        "name": "IRWAN HADIANTO",
        "role": "1.0",
        "gender": "L",
        "dob": "JAKARTA, 31 MARET 1967",
        "address": "JL. BADILA I, NO 8, RT/RW 010/004, KEL : TANGKI, KEC : TAMANSARI, JAKARTA BARAT",
        "phone": "-",
        "email": "",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "B"
      },
      {
        "no": 2,
        "kecamatan": "TAMANSARI",
        "kelurahan": "TANGKI",
        "name": "MUHAMAD IQBAL",
        "role": "2.0",
        "gender": "L",
        "dob": "JAKARTA, 19 FEBRUARI 1987",
        "address": "JL. BADILA I, NO 9A, RT/RW 006/004, KEL : TANGKI, KEC : TAMANSARI, JAKARTA BARAT",
        "phone": "081280687004",
        "email": "iqbalmancung@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "B"
      },
      {
        "no": 3,
        "kecamatan": "TAMANSARI",
        "kelurahan": "TANGKI",
        "name": "HENDRA WIJARDI",
        "role": "3.0",
        "gender": "L",
        "dob": "JAKARTA, 8 JUNI 1969",
        "address": "GG. SANAD DALAM, RT/RW 003/003, KEL : TANGKI, KEC : TAMANSARI, JAKARTA BARAT",
        "phone": "-",
        "email": "",
        "religion": "KRISTEN",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "B"
      },
      {
        "no": 4,
        "kecamatan": "TAMANSARI",
        "kelurahan": "TANGKI",
        "name": "SOPYAN",
        "role": "4.0",
        "gender": "L",
        "dob": "JAKARTA, 26 SEPTEMBER 1975",
        "address": "JL. TANGKI, GG LANGGAR, NO 5F, RT/RW 006/007, KEL : TANGKI, KEC : TAMANSARI, JAKARTA BARAT",
        "phone": "-",
        "email": "",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 5,
        "kecamatan": "TAMANSARI",
        "kelurahan": "TANGKI",
        "name": "RAHMAT HIDAYAT",
        "role": "5.0",
        "gender": "L",
        "dob": "JAKARTA, 4 JANUARO 1982",
        "address": "JL. MANGGA BESAR IX/I/123A, RT/RW 007/001, KEL : TANGKI, KEC : TAMANSARI, JAKARTA BARAT",
        "phone": "089605141025",
        "email": "",
        "religion": "ISLAM",
        "occupation": "DRIVER",
        "blood_type": "-"
      },
      {
        "no": 6,
        "kecamatan": "TAMANSARI",
        "kelurahan": "TANGKI",
        "name": "RANTA WIJAYA",
        "role": "6.0",
        "gender": "L",
        "dob": "JAKARTA, 5 DESEMBER 1977",
        "address": "JL. MANGGA BESAR XI, NO 5 B, RT/RW 014/001, KEL : TANGKI, KEC : TAMANSARI, JAKARTA BARAT",
        "phone": "-",
        "email": "",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 7,
        "kecamatan": "TAMANSARI",
        "kelurahan": "TANGKI",
        "name": "IBRAHIM SAMMANTHA",
        "role": "7.0",
        "gender": "L",
        "dob": "JAKARTA, 12 SEPTEMBER 1978",
        "address": "JL. TANGKI, GG LANGGAR, RT/RW 010/007, KEL : TANGKI, KEC : TAMANSARI, JAKARTA BARAT",
        "phone": "085691410675",
        "email": "",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 1,
        "kecamatan": "TAMANSARI",
        "kelurahan": "PINANGSIA",
        "name": "KARNO",
        "role": "1.0",
        "gender": "L",
        "dob": "KARAWANG, 11 DESEMBER 2001",
        "address": "JL. GG BURUNG, RT/RW 008/002, KEL : PINANGSIA, KEC : TAMANSARI, JAKARTA BARAT",
        "phone": "08561301539",
        "email": "karnoarwadinata@gmail.com",
        "religion": "ISLAM",
        "occupation": "MAHASISWA",
        "blood_type": "-"
      },
      {
        "no": 2,
        "kecamatan": "TAMANSARI",
        "kelurahan": "PINANGSIA",
        "name": "KAMAWATI",
        "role": "2.0",
        "gender": "P",
        "dob": "JAKARTA, 14 MARET 1982",
        "address": "JL. KUNIR II DALAM, RT/RW 003/007, KEL : PINANGSIA, KEC : TAMANSARI, JAKARTA BARAT",
        "phone": "081398467946",
        "email": "kasmawati8422@gmail.com",
        "religion": "ISLAM",
        "occupation": "MENGURUS RUMAH TANGGA",
        "blood_type": "B"
      },
      {
        "no": 3,
        "kecamatan": "TAMANSARI",
        "kelurahan": "PINANGSIA",
        "name": "EDI SUSILO",
        "role": "3.0",
        "gender": "L",
        "dob": "PEMALANG, 22 SEPTEMBER 1979",
        "address": "JL. LADA DALAM, RT/RW 005/006, KEL : PINANGSIA, KEC : TAMANSARI, JAKARTA BARAT",
        "phone": "081311425075",
        "email": "",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 4,
        "kecamatan": "TAMANSARI",
        "kelurahan": "PINANGSIA",
        "name": "LANANG",
        "role": "4.0",
        "gender": "L",
        "dob": "JAKARTA, 12 JUNI 1978",
        "address": "JL. JEMBATAN SENTI, RT/RW 002/002, KEL : PINANGSIA, KEC : TAMANSARI, JAKARTA BARAT",
        "phone": "081317624286",
        "email": "",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "AB"
      },
      {
        "no": 5,
        "kecamatan": "TAMANSARI",
        "kelurahan": "PINANGSIA",
        "name": "BONY DASA MEIDYA",
        "role": "5.0",
        "gender": "L",
        "dob": "JAKARTA, 10 MEI 1972",
        "address": "JL. MANGGA DUA I, RT/RW 007/004, KEL : PINANGSIA, KEC : TAMANSARI, JAKARTA BARAT",
        "phone": "081293934953",
        "email": "",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "AB"
      },
      {
        "no": 6,
        "kecamatan": "TAMANSARI",
        "kelurahan": "PINANGSIA",
        "name": "NELVIN LAM",
        "role": "6.0",
        "gender": "L",
        "dob": "JAKARTA, 28 NOVEMBER 1969",
        "address": "JL. MANGGA DUA I, NO 83, RT/RW 008/004, KEL : PINANGSIA, KEC : TAMANSARI, JAKARTA BARAT",
        "phone": "08161497866",
        "email": "",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 7,
        "kecamatan": "TAMANSARI",
        "kelurahan": "PINANGSIA",
        "name": "EVA HEPPY DEVILIANI P",
        "role": "7.0",
        "gender": "P",
        "dob": "PEMATANG SIANTAR, 14 AGUSTUS 1975",
        "address": "JL. PECAH KULIT, NO 19, RT/RW 005/001, KEL : PINANGSIA, KEC : TAMANSARI, JAKARTA BARAT",
        "phone": "083876961134",
        "email": "",
        "religion": "KATOHLIK",
        "occupation": "MENGURUS RUMAH TANGGA",
        "blood_type": "B"
      },
      {
        "no": 1,
        "kecamatan": "TAMANSARI",
        "kelurahan": "KEAGUNGAN",
        "name": "FALAH ARRAHMAN",
        "role": "1.0",
        "gender": "L",
        "dob": "JAKARTA, 30 NOVEMBER 1993",
        "address": "JL. KEADILAN DALAM, RT/RW 004/001, KEL : KEAGUNGAN, KEC : TAMAN SARI, JAKARTA BARAT",
        "phone": "082123670283",
        "email": "falaharrahman044@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "A"
      },
      {
        "no": 2,
        "kecamatan": "TAMANSARI",
        "kelurahan": "KEAGUNGAN",
        "name": "EDWIN RAMADHAN",
        "role": "2.0",
        "gender": "L",
        "dob": "JAKARTA, 2 MEI 1989",
        "address": "JL. KP. JAWA KEBON SAYUR, RT/RW 011/010, KEL : KEAGUNGAN, KEC : TAMAN SARI, JAKARTA BARAT",
        "phone": "082298083570",
        "email": "edwinramdhan22@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 3,
        "kecamatan": "TAMANSARI",
        "kelurahan": "KEAGUNGAN",
        "name": "DEDE YUSTIAN",
        "role": "3.0",
        "gender": "L",
        "dob": "JAKARTA, 8 MEI 19973",
        "address": "JL. KESEDERHANAN, NO 22, RT/RW 004/003, KEL : KEAGUNGAN, KEC : TAMAN SARI, JAKARTA BARAT",
        "phone": "081310326856",
        "email": "dedeyustian112@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 4,
        "kecamatan": "TAMANSARI",
        "kelurahan": "KEAGUNGAN",
        "name": "ADE MARDIANA",
        "role": "4.0",
        "gender": "P",
        "dob": "JAKARTA, 11 MARET 1980",
        "address": "JL. KESEJAHTERAAN, RT/RW 014/008, KEL : KEAGUNGAN, KEC : TAMAN SARI, JAKARTA BARAT",
        "phone": "087832990624",
        "email": "",
        "religion": "ISLAM",
        "occupation": "MENGURUS RUMAH TANGGA",
        "blood_type": "-"
      },
      {
        "no": 5,
        "kecamatan": "TAMANSARI",
        "kelurahan": "KEAGUNGAN",
        "name": "SOFYAN",
        "role": "5.0",
        "gender": "L",
        "dob": "JAKARTA, 4 APRIL 1978",
        "address": "JL. KEAMANAN DALAM, NO 85, RT/RW 009/006, KEL : KEAGUNGAN, KEC : TAMAN SARI, JAKARTA BARAT",
        "phone": "081385851363",
        "email": "sofyanwhaam6@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 6,
        "kecamatan": "TAMANSARI",
        "kelurahan": "KEAGUNGAN",
        "name": "DENDI",
        "role": "6.0",
        "gender": "L",
        "dob": "JAKARTA, 17 NOVEMBER 1990",
        "address": "JL. KESEDERHANAN, NO 24, RT/RW 005/004, KEL : KEAGUNGAN, KEC : TAMAN SARI, JAKARTA BARAT",
        "phone": "0895397319110",
        "email": "heydend9@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 7,
        "kecamatan": "TAMANSARI",
        "kelurahan": "KEAGUNGAN",
        "name": "SULAEMAN",
        "role": "7.0",
        "gender": "L",
        "dob": "JAKARTA, 23 APRIL 1976",
        "address": "JL. KP. JAWA KEBON SAYUR III, RT/RW 006/010, KEL : KEAGUNGAN, KEC : TAMAN SARI, JAKARTA BARAT",
        "phone": "081315499313",
        "email": "indah15182@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 1,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "",
        "name": "RAHMADI",
        "role": "1.0",
        "gender": "L",
        "dob": "JAKARTA, 4 JANUARI 1977",
        "address": "JL. MANGGIS II/B5/25, RT/RW, 006/006, KEL : TANJUNG DUREN UTARA, KEC GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "087888059090",
        "email": "",
        "religion": "ISLAM",
        "occupation": "GURU SWASTA",
        "blood_type": "O"
      },
      {
        "no": 2,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "",
        "name": "SURIAMAN PANJAITAN",
        "role": "2.0",
        "gender": "L",
        "dob": "SEIRAMPAN, 25 JANUARI 1988",
        "address": "JL.TANJUNG DUREN TIMUR DALAM VI, NO 11, RT/RW, 011/001, KEL : TANJUNG DUREN SELATAN, KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "08111196575",
        "email": "rakyatakarrumput@gmail.com",
        "religion": "KRISTEN",
        "occupation": "WARTAWAN",
        "blood_type": "-"
      },
      {
        "no": 3,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "",
        "name": "MOHAMMAD ALIM",
        "role": "3.0",
        "gender": "L",
        "dob": "JAKARTA, 7 JUNI 1984",
        "address": "JL. ALPUKAT III/16A, RT/RW 003/002, KEL : TANJUNG DUREN UTARA, KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "081213151086",
        "email": "alimraiders84@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "A"
      },
      {
        "no": 4,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "",
        "name": "NUR MASITA ADISTIANI. P",
        "role": "4.0",
        "gender": "P",
        "dob": "JAKARTA, 28 DESEMBER 1987",
        "address": "JL. MANDALA UTARA III/27, RT/RW 013/007, KEL : TOMANG, KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "089693637698",
        "email": "",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 5,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "",
        "name": "SUHERNI",
        "role": "5.0",
        "gender": "P",
        "dob": "SUBANG, 9 JANUARI 2003",
        "address": "JL.PERDANA RAYA I, RT/RW 001/001, KEL : WIJAYA KUSUMA, KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "087880413506",
        "email": "",
        "religion": "ISLAM",
        "occupation": "MAHASISWI",
        "blood_type": "-"
      },
      {
        "no": 6,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "",
        "name": "CECEP MA'MUN",
        "role": "6.0",
        "gender": "L",
        "dob": "BOGOR, 25 MEI 1970",
        "address": "JL. SENI BUDAYA VI/41, RT/RW 010/05, KEL : JELAMBAR BARU, KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "08993699739",
        "email": "",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "O"
      },
      {
        "no": 7,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "",
        "name": "SAIDI",
        "role": "7.0",
        "gender": "L",
        "dob": "JAKARTA, 6 JULI 1970",
        "address": "JL. TANJUNG DUREN SELATAN, RT/RW 011/005, KEL : TANJUNG DUREN SELATAN, KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "085772515230",
        "email": "",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 8,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "",
        "name": "ONIS ATJEP",
        "role": "8.0",
        "gender": "L",
        "dob": "JAKARTA, 2 MARET 1977",
        "address": "JL. JELAMBAR TIMUR, RT/RW 010/008, KEL : JELAMBAR BARU, KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "087845626797",
        "email": "onis.atjep@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 9,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "",
        "name": "ASMARIAH",
        "role": "9.0",
        "gender": "P",
        "dob": "JAKARTA, 5 JUNI 1976",
        "address": "JL. JELAMBAR ILIR, RT/RW 013/010, KEL : JELAMBAR BARU, KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "088294418244",
        "email": "asmariah987@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "A"
      },
      {
        "no": 1,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "TANJUNG DUREN SELATAN",
        "name": "HADI ARDIANSYAH",
        "role": "1.0",
        "gender": "L",
        "dob": "JAKARTA, 18 AGUSTUS 1982",
        "address": "JL. DELIMA V, NO 5, RT/RW 012/005, KEL : TANJUNG DUREN SELATAN, KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "081299343113",
        "email": "hadipikar.8888@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "-"
      },
      {
        "no": 2,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "TANJUNG DUREN SELATAN",
        "name": "SABAR PAIMA HAMONANGAN",
        "role": "2.0",
        "gender": "L",
        "dob": "JAKARTA, 19 JULI 1975",
        "address": "JL. TANJUNG DUREN TIMUR, RT/RW 005/006, KEL : TANJUNG DUREN SELATAN, KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "082112903818",
        "email": "sabarpaima@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "-"
      },
      {
        "no": 3,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "TANJUNG DUREN SELATAN",
        "name": "CHOLIL",
        "role": "3.0",
        "gender": "L",
        "dob": "JAKARTA, 28 AGUSTUS 1978",
        "address": "JL. TANJUNG DUREN TIMUR III, RT/RW 014/005, KEL : TANJUNG DUREN SELATAN, KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "081212048189",
        "email": "tusteam70@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "AB"
      },
      {
        "no": 4,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "TANJUNG DUREN SELATAN",
        "name": "AHMAD FAUZI",
        "role": "4.0",
        "gender": "L",
        "dob": "JAKARTA, 12 SEPTEMBER 1978",
        "address": "JL. MESJID AL-MUNAWAROH, NO 19, RT/RW 015/001, KEL : TANJUNG DUREN SELATAN, KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "081384348139",
        "email": "ahmadfauzisaja01@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 5,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "TANJUNG DUREN SELATAN",
        "name": "NAWAWI",
        "role": "5.0",
        "gender": "L",
        "dob": "BEKASI, 10 OKTOBER 1983",
        "address": "JL. DELIMA IV, NO 20, RT/RW 008/005 KEL : TANJUNG DUREN SELATAN, KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "08119770102",
        "email": "nawawiproperty01@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 6,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "TANJUNG DUREN SELATAN",
        "name": "M IQBAL",
        "role": "6.0",
        "gender": "L",
        "dob": "JAKARTA, 1 AGUSTUS 1970",
        "address": "JL. TANJUNG DUREN TIMUR RAYA, NO 3, RT/RW 004/006 KEL : TANJUNG DUREN SELATAN, KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "082111262545",
        "email": "iqbaltds37@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "O"
      },
      {
        "no": 7,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "TANJUNG DUREN SELATAN",
        "name": "AHMAD TAUFIK",
        "role": "7.0",
        "gender": "L",
        "dob": "PANDEGLAN, 9 OKTOBER 1986",
        "address": "GG MANDALIKA I, NO 55, RT/RW 005/006, KEL : TANJUNG DUREN SELATAN, KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "083811165434",
        "email": "ahmadtaufik0286@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "O"
      },
      {
        "no": 1,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "WIJAYA KUSUMA",
        "name": "ILHAMDI",
        "role": "1.0",
        "gender": "L",
        "dob": "JAKARTA, 24 JUNI 1998",
        "address": "JL. ANYAR II, NO 65, RT/RW, 002/010, KEL : WIJAYA KUSUMA, KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "089666405624",
        "email": "ilhamdi57@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "-"
      },
      {
        "no": 2,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "WIJAYA KUSUMA",
        "name": "MUTIARA WINARSI",
        "role": "2.0",
        "gender": "L",
        "dob": "AMBON, 6 JULI 1995",
        "address": "KP. BALI PESING, NO 35, RT/RW 001/003, KEL : WIJAYA KUSUMA, KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "082312638449",
        "email": "mutiarawinarsi@gmail.com",
        "religion": "KRISTEN",
        "occupation": "MENGURUS RUMAH TANGGA",
        "blood_type": "O"
      },
      {
        "no": 3,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "WIJAYA KUSUMA",
        "name": "ACHMAD RUSLI",
        "role": "3.0",
        "gender": "L",
        "dob": "JAKARTA, 20 JUNI 1988",
        "address": "JL. UTAMA SAKTI I, NO 11, RT/RW 01/007, KEL : WIJAYA KUSUMA, KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "087889282121",
        "email": "",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 4,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "WIJAYA KUSUMA",
        "name": "AGUS SULAIMAN",
        "role": "4.0",
        "gender": "L",
        "dob": "JAKARTA, 9 AGUSTUS 1983",
        "address": "JL. KP GUSTI, RT/RW 001/005, KEL : WIJAYA KUSUMA, KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "081288769314",
        "email": "",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 5,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "WIJAYA KUSUMA",
        "name": "ABDUL SYUKUR",
        "role": "5.0",
        "gender": "L",
        "dob": "JAKARTA, 22 NOVEMBER 1970",
        "address": "JL. SOSIAL, NO 5, RT/RW 006/002, KEL : WIJAYA KUSUMA, KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "081398453160",
        "email": "",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 6,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "WIJAYA KUSUMA",
        "name": "AGUS SUNARDI",
        "role": "6.0",
        "gender": "L",
        "dob": "JAKARTA, 2 JULI 1978",
        "address": "JL. DAAN MOGOT, GG MESJID I, NO 30, RT/RW 001/002, KEL : WIJAYA KUSUMA, KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "087884447314",
        "email": "",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 7,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "WIJAYA KUSUMA",
        "name": "MUHAMMAD ALI DJAKWAN",
        "role": "7.0",
        "gender": "L",
        "dob": "JAKARTA, 7 JUNI 1999",
        "address": "JL. KARYA III, NO 9A, RT/RW 010/002, KEL : WIJAYA KUSUMA, KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "082112333102",
        "email": "ali.djakwan15@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 1,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "JELAMBAR BARU",
        "name": "SUHENDIN",
        "role": "1.0",
        "gender": "L",
        "dob": "JAKARTA, 7 MARET 1974",
        "address": "JL. JELAMBAR JAYA III, NO 14, RT/RW 007/002, KEL : JELAMBAR BARU , KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "081284889784",
        "email": "suhendinhendin1974@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "-"
      },
      {
        "no": 2,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "JELAMBAR BARU",
        "name": "JAJANG SUTISNA",
        "role": "2.0",
        "gender": "L",
        "dob": "JAKARTA, 7 AGUSTUS 1967",
        "address": "JL. SUKAJAYA III, NO 12, RT/RW 003/001, KEL : JELAMBAR BARU , KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "081293928033",
        "email": "jajangsijampang@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "-"
      },
      {
        "no": 3,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "JELAMBAR BARU",
        "name": "HENDRA",
        "role": "3.0",
        "gender": "L",
        "dob": "JAKARTA, 18 OKTOBER 1968",
        "address": "JL. JELAMBAR JAYA IV, RT/RW 002/003, KEL : JELAMBAR BARU , KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "081318236682",
        "email": "",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "AB"
      },
      {
        "no": 4,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "JELAMBAR BARU",
        "name": "URIP SUGIHARTO",
        "role": "4.0",
        "gender": "L",
        "dob": "JAKARTA, 31 JANUARI 1981",
        "address": "JL. JELAMBAR ILIR, RT/RW 013/010, KEL : JELAMBAR BARU , KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "081806027667",
        "email": "ucokaja986@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 5,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "JELAMBAR BARU",
        "name": "MUHTIAR",
        "role": "5.0",
        "gender": "L",
        "dob": "JAKARTA, 9 JUNI 1972",
        "address": "JL. JELAMBAR UTARA, NO 1, RT/RW 005/006, KEL : JELAMBAR BARU , KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "085772869092",
        "email": "iyehar123@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "-"
      },
      {
        "no": 6,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "JELAMBAR BARU",
        "name": "AHMAD SAIFULLAH",
        "role": "6.0",
        "gender": "L",
        "dob": "JAKARTA, 2 NOVEMBER 1981",
        "address": "JL. SETIA JAYA X, NO 14B, RT/RW 004/008, KEL : JELAMBAR BARU , KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "089636057840",
        "email": "inzaifullah@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 7,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "JELAMBAR BARU",
        "name": "JAENI",
        "role": "7.0",
        "gender": "L",
        "dob": "JAKARTA, 19 APRIL 1974",
        "address": "JL. JELAMBAR TIMUR, NO 7, RT/RW 010/008, KEL : JELAMBAR BARU , KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "085878867264",
        "email": "je-jaeni19@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 1,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "TANJUNG DUREN UTARA",
        "name": "ROSMAYANTI",
        "role": "1.0",
        "gender": "P",
        "dob": "JAKARTA, 25 APRIL 1977",
        "address": "JL. TANJUNG DUREN UTARA VII, NO 364, RT/RW 004/003, KEL : TANJUNG DUREN UTARA , KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "081287229291",
        "email": "yosicantik1976@gmail.com",
        "religion": "ISLAM",
        "occupation": "MENGURUS RUMAH TANGGA",
        "blood_type": "O"
      },
      {
        "no": 2,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "TANJUNG DUREN UTARA",
        "name": "LASMANA",
        "role": "2.0",
        "gender": "L",
        "dob": "JAKARTA, 22 APRIL 1980",
        "address": "JL. MANGGIS I DALAM, NO 24C, RT/RW 007/006, KEL : TANJUNG DUREN UTARA , KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "081388953388",
        "email": "lalanlesmana9@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "A"
      },
      {
        "no": 3,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "TANJUNG DUREN UTARA",
        "name": "SJARIPUDIN",
        "role": "3.0",
        "gender": "L",
        "dob": "JAKARTA, 13 APRIL 1974",
        "address": "JL. MANGGIS II/B-6, NO 1, RT/RW 007/006, KEL : TANJUNG DUREN UTARA , KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "083870017684",
        "email": "",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 4,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "TANJUNG DUREN UTARA",
        "name": "TEUKU ANWAR SADAT",
        "role": "4.0",
        "gender": "L",
        "dob": "BANDA ACEH, 12 AGUSTUS 1977",
        "address": "JL.RAMBUTAN BARAT IV, NO 18, RT/RW 010/004, KEL : TANJUNG DUREN UTARA , KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "081387669696",
        "email": "teukuanwar01@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 5,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "TANJUNG DUREN UTARA",
        "name": "MUHAMMAD ARSYAD",
        "role": "5.0",
        "gender": "L",
        "dob": "JAKARTA, 23 APRIL 1994",
        "address": "JL. SALAK TIMUR V, NO 16, RT/RW 004/005, KEL : TANJUNG DUREN UTARA , KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "085967987172",
        "email": "chacha14.ma@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 6,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "TANJUNG DUREN UTARA",
        "name": "DEDI KUSNADI",
        "role": "6.0",
        "gender": "L",
        "dob": "JAKARTA, 28 OKTOBER 1968",
        "address": "JL. DUKUH BARAT IV/4, RT/RW 010/007, KEL : TANJUNG DUREN UTARA , KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "081514304544",
        "email": "",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 7,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "TANJUNG DUREN UTARA",
        "name": "APRIRIYANTO",
        "role": "7.0",
        "gender": "L",
        "dob": "JAKARTA, 19 APRIL 1996",
        "address": "GG ALPUKAT V/52, RT/RW 004/002, KEL : TANJUNG DUREN UTARA , KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "081905169574",
        "email": "apririyanto00@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 1,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "TOMANG",
        "name": "AGUS SUSANTO",
        "role": "1.0",
        "gender": "L",
        "dob": "JAKARTA, 29 AGUSTUS 1979",
        "address": "TOMANG BANJIR KANAL, RT/RW 004/011, KEL : TOMANG, KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "085810171279",
        "email": "yayahmaisaroh172@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 2,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "TOMANG",
        "name": "KURNAEDI",
        "role": "2.0",
        "gender": "L",
        "dob": "JAKARTA, 12 MARET 1971",
        "address": "JL. RAWA KEPA, RT/RW 001/012, KEL : TOMANG, KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "087782949182",
        "email": "joy.kurnaedi@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 3,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "TOMANG",
        "name": "HARIYANI",
        "role": "3.0",
        "gender": "P",
        "dob": "JAKARTA, 17 MEI 1976",
        "address": "JL. TANJUNG GEDONG, NO 3, RT/RW 005/016, KEL : TOMANG, KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "085934501055",
        "email": "arryyani62@gmail.com",
        "religion": "ISLAM",
        "occupation": "MENGURUS RUMAH TANGGA",
        "blood_type": "A"
      },
      {
        "no": 4,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "TOMANG",
        "name": "BUDI CAHYONO",
        "role": "4.0",
        "gender": "L",
        "dob": "JAKARTA, 21 OKTOBER 1970",
        "address": "JL. MANDALA SELATAN III, NO 6, RT/RW 009/004, KEL : TOMANG, KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "085776888766",
        "email": "budicahyono318@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 5,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "TOMANG",
        "name": "MUHAMAD BAGUS AJI S",
        "role": "5.0",
        "gender": "L",
        "dob": "JAKARTA, 14 MEI 1995",
        "address": "JL. TANJUNG GEDONG, NO 10, RT/RW 001/009, KEL : TOMANG, KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "082211666542",
        "email": "mbagusajis@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "B"
      },
      {
        "no": 6,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "TOMANG",
        "name": "YULI PANCAWATI",
        "role": "6.0",
        "gender": "P",
        "dob": "JAKARTA, 29 JULI 1982",
        "address": "JL. RAWA KEPA XIII/138, RT/RW 003/013, KEL : TOMANG, KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "081282552724",
        "email": "yulipancawati782@gmail.com",
        "religion": "ISLAM",
        "occupation": "MENGURUS RUMAH TANGGA",
        "blood_type": "B"
      },
      {
        "no": 7,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "TOMANG",
        "name": "NURAINI",
        "role": "7.0",
        "gender": "P",
        "dob": "JAKARTA, 20 FEBRUARI 1979",
        "address": "JL. GELONG BARU UTARA II, NO 11, RT/RW 001/008, KEL : TOMANG, KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "081317242911",
        "email": "nurkaylatahzani@gmail.com",
        "religion": "ISLAM",
        "occupation": "MENGURUS RUMAH TANGGA",
        "blood_type": "B"
      },
      {
        "no": 1,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "JELAMBAR",
        "name": "YULIS TIANTI",
        "role": "1.0",
        "gender": "P",
        "dob": "JAKARTA, 27 MARET 1976",
        "address": "JL. JELAMBAR KEBON PISANG, NO 62, RT/RW 010/002, KEL : JELAMBAR, KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "081280234177",
        "email": "tiantyyouliez@gmail.com",
        "religion": "ISLAM",
        "occupation": "MENGURUS RUMAH TANGGA",
        "blood_type": "B"
      },
      {
        "no": 2,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "JELAMBAR",
        "name": "RIZKILLAH",
        "role": "2.0",
        "gender": "L",
        "dob": "JAKARTA, 12 JANUARI 1972",
        "address": "KAV. POLRI, BLOK A/XVI/370, RT/RW 011/009, KEL : JELAMBAR, KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "087858665293",
        "email": "rizkillah27@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "B"
      },
      {
        "no": 3,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "JELAMBAR",
        "name": "MAULANA SUDIRJA",
        "role": "3.0",
        "gender": "L",
        "dob": "JAKARTA, 25 SEPTEMBER 1991",
        "address": "JL. LATUMETEN IV, GG III, NO 4, RT/RW 014/005, KEL : JELAMBAR, KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "083896837038",
        "email": "",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 4,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "JELAMBAR",
        "name": "RUSDI",
        "role": "4.0",
        "gender": "L",
        "dob": "JAKARTA, 1 JULI 1972",
        "address": "JL. SATRIA IV/28, RT/RW 010, 004, KEL : JELAMBAR, KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "081319502562",
        "email": "",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 5,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "JELAMBAR",
        "name": "SAUT MANGARANAP A",
        "role": "5.0",
        "gender": "L",
        "dob": "JAKARTA, 10 JUNI 1968",
        "address": "JL. JELAMBAR UTAMA III/16, RT/RW 004/008, KEL : JELAMBAR, KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "081282820744",
        "email": "",
        "religion": "KRISTEN",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 6,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "JELAMBAR",
        "name": "SUYADI",
        "role": "6.0",
        "gender": "L",
        "dob": "JAKARTA, 10 JANUARI 1971",
        "address": "JL. LATUMETEN II, GG B-i/9, RT/RW 008/011, KEL : JELAMBAR, KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "0895615802968",
        "email": "suryadikarlan71@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 7,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "JELAMBAR",
        "name": "WIBOWO HARYONO",
        "role": "7.0",
        "gender": "L",
        "dob": "JAKARTA, 1 SEPTEMBER 1977",
        "address": "KAV. POLRI, BLOK B-III/529, RT/RW 002/010, KEL : JELAMBAR, KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "082113970256",
        "email": "wibowo010977@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "AB"
      },
      {
        "no": 1,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "GROGOL",
        "name": "AKHMAD NUR IKHSAN",
        "role": "1.0",
        "gender": "L",
        "dob": "PEKANBARU, 10 JULI 1990",
        "address": "JL. DR.MUARDI I/14, RT/RW 015/003, KEL : GROGOL, KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "081329605043",
        "email": "akhmadnur_ikhsan@yahoo.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "A"
      },
      {
        "no": 2,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "GROGOL",
        "name": "YULIYATI",
        "role": "2.0",
        "gender": "P",
        "dob": "JAKARTA, 6 OKTOBER 1984",
        "address": "KP. BANJIR KANAL, RT/RW 001/001, KEL : GROGOL, KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "0895394505550",
        "email": "adfjulie84@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "-"
      },
      {
        "no": 3,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "GROGOL",
        "name": "MUHAMMAD SUWARDI",
        "role": "3.0",
        "gender": "L",
        "dob": "JAKARTA, 2 MEI 1974",
        "address": "JL. DR.SEMERU RAYA, NO 15, RT/RW 009/010, KEL : GROGOL, KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "08815691242",
        "email": "muhammadsuwardi62@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 4,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "GROGOL",
        "name": "RAHMAH",
        "role": "4.0",
        "gender": "P",
        "dob": "MEDAN, 9 JULI 1994",
        "address": "JL. DR.MAKALIWE, GG V/14, RT/RW 005/006, KEL : GROGOL, KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "082366706490",
        "email": "ryranmahyackub462@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 5,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "GROGOL",
        "name": "NURUS SA'ADAH",
        "role": "5.0",
        "gender": "P",
        "dob": "JAKARTA, 30 NOVEMBER 1995",
        "address": "JL. DR.SEMERU RAYA, RT/RW 004/010, KEL : GROGOL, KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "083122191716",
        "email": "nurussadah56@gmail.com",
        "religion": "ISLAM",
        "occupation": "MENGURUS RUMAH TANGGA",
        "blood_type": "-"
      },
      {
        "no": 6,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "GROGOL",
        "name": "NURUL HAQ AL ISLAMI",
        "role": "6.0",
        "gender": "L",
        "dob": "PEKALONGAN, 7 JULI 1997",
        "address": "KP. KRAMAT, RT/RW 007/009, KEL : GROGOL, KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "085228505679",
        "email": "nhhaq77@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "-"
      },
      {
        "no": 7,
        "kecamatan": "GROGOL PETAMBURAN",
        "kelurahan": "GROGOL",
        "name": "ARI ISMAYA",
        "role": "7.0",
        "gender": "L",
        "dob": "TANGERANG, 23 JANUARI 1981",
        "address": "KP. KRAMAT BAHAGIA, RT/RW 008/009, KEL : GROGOL, KEC : GROGOL PETAMBURAN, JAKARTA BARAT",
        "phone": "085718197600",
        "email": "",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 1,
        "kecamatan": "KEMBANGAN",
        "kelurahan": "",
        "name": "RADEN ARYO DAMAR",
        "role": "1.0",
        "gender": "L",
        "dob": "JAKARTA, 7 DESEMBER 1977",
        "address": "KOMP. DKI BLOK N, NO 4, RT/RW 003/004, KEL : JOGLO, KEC : KEMBANGAN, JAKARTA BARAT",
        "phone": "087825302870",
        "email": "negoroarjo2@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 2,
        "kecamatan": "KEMBANGAN",
        "kelurahan": "",
        "name": "KURNIALLAH",
        "role": "2.0",
        "gender": "L",
        "dob": "JAKARTA, 15 JUNI 1971",
        "address": "KP. PENGUMBEN, RT/RW 007/003, KEL : SRENGSENG, KEC : KEMBANGAN, JAKARTA BARAT",
        "phone": "081294328934",
        "email": "rtbodong5@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "B"
      },
      {
        "no": 3,
        "kecamatan": "KEMBANGAN",
        "kelurahan": "",
        "name": "AHMAD FIRDAUS",
        "role": "3.0",
        "gender": "L",
        "dob": "JAKARTA, 28 JANUARI 1982",
        "address": "PASAR MINGGU, NO 70, RT/RW 004/001, KEL : KEMBANGAN SELATAN, KEC : KEMBANGAN, JAKARTA BARAT",
        "phone": "087883488424",
        "email": "jb.firdaus.inzaghi@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 4,
        "kecamatan": "KEMBANGAN",
        "kelurahan": "",
        "name": "NURHADI",
        "role": "4.0",
        "gender": "L",
        "dob": "JAKARTA, 3 JUNI 1980",
        "address": "JL. RAYA JOGLO, RT/RW 009/003, KEL : JOGLO, KEC : KEMBANGAN, JAKARTA BARAT",
        "phone": "087883721252",
        "email": "hadibotak212@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "-"
      },
      {
        "no": 5,
        "kecamatan": "KEMBANGAN",
        "kelurahan": "",
        "name": "CHOLID SOHEH",
        "role": "5.0",
        "gender": "L",
        "dob": "JAKARTA, 3 APRIL 1978",
        "address": "MERUYA UTARA, RT/RW 007/011, KEL : MERUYA UTARA, KEC : KEMBANGAN, JAKARTA BARAT",
        "phone": "-",
        "email": "",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 6,
        "kecamatan": "KEMBANGAN",
        "kelurahan": "",
        "name": "RAIJAK",
        "role": "6.0",
        "gender": "L",
        "dob": "JAKARTA, 10 NOVEMBER 1987",
        "address": "MERUYA SELATAN, RT/RW 006/007, KEL : MERUYA SELATAN, KEC : KEMBANGAN, JAKARTA BARAT",
        "phone": "081522800006",
        "email": "raijak.jack@gamil.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 7,
        "kecamatan": "KEMBANGAN",
        "kelurahan": "",
        "name": "ANDRI",
        "role": "7.0",
        "gender": "L",
        "dob": "JAKARTA, 10 FEBRUARI 1984",
        "address": "KP.SANGGRAHAN, RT/RW 011, 006, KEL : MERUYA UTARA, KEC : KEMBANGAN, JAKARTA BARAT",
        "phone": "081287386468",
        "email": "",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 8,
        "kecamatan": "KEMBANGAN",
        "kelurahan": "",
        "name": "SUKRON MAKMUN",
        "role": "8.0",
        "gender": "L",
        "dob": "JAKARTA, 5 JUNI 1977",
        "address": "JL. JOMAS, NO 10, RT/RW 008/005, KEL : MERUYA UTARA, KEC : KEMBANGAN, JAKARTA BARAT",
        "phone": "-",
        "email": "",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "-"
      },
      {
        "no": 9,
        "kecamatan": "KEMBANGAN",
        "kelurahan": "",
        "name": "MATROPIH",
        "role": "9.0",
        "gender": "L",
        "dob": "JAKARTA, 30 AGUSTUS 1982",
        "address": "KP. SANGGRAHAN, RT /RW 003/003, KEL : MERUYA UTARA, KEC : KEMBANGAN, JAKARTA BARAT",
        "phone": "082210456765",
        "email": "pitoy.1407@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 1,
        "kecamatan": "KEMBANGAN",
        "kelurahan": "JOGLO",
        "name": "TEGUH WIDI HANDOKO",
        "role": "1.0",
        "gender": "L",
        "dob": "JAKARTA, 25 AGUSTUS 1984",
        "address": "JL. SAYUR ASEM, NO 29, RT/RW 002/006, KEL : JOGLO, KEC : KEMBANGAN, JAKARTA BARAT",
        "phone": "089603678901",
        "email": "teguhwh@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 2,
        "kecamatan": "KEMBANGAN",
        "kelurahan": "JOGLO",
        "name": "MUHAMMAD ROHMAN NAWAWI",
        "role": "2.0",
        "gender": "L",
        "dob": "JAKARTA, 8 SEPTEMBER 1995",
        "address": "JL. MUSYAWARAH, RT/RW 015/002, KEL : JOGLO, KEC : KEMBANGAN, JAKARTA BARAT",
        "phone": "089695778995",
        "email": "omenawawi09@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "A"
      },
      {
        "no": 3,
        "kecamatan": "KEMBANGAN",
        "kelurahan": "JOGLO",
        "name": "TRISNO BUDIMAN",
        "role": "3.0",
        "gender": "L",
        "dob": "JAKARTA, 1 FEBRUARI 1966",
        "address": "JL. KP.JOGLO, RT/RW 004/008, KEL : JOGLO, KEC : KEMBANGAN, JAKARTA BARAT",
        "phone": "089617212433",
        "email": "trisnobudiman66@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "-"
      },
      {
        "no": 4,
        "kecamatan": "KEMBANGAN",
        "kelurahan": "JOGLO",
        "name": "ELSI ARYA KRISTINA",
        "role": "4.0",
        "gender": "P",
        "dob": "JAKARTA, 9 JANUARI 1968",
        "address": "JL. SEGITIGA, NO 5, RT/RW 012/004, KEL : JOGLO, KEC : KEMBANGAN, JAKARTA BARAT",
        "phone": "081808520901",
        "email": "ek1968@gmail.com",
        "religion": "ISLAM",
        "occupation": "MENGURUS RUMAH TANGGA",
        "blood_type": "B"
      },
      {
        "no": 5,
        "kecamatan": "KEMBANGAN",
        "kelurahan": "JOGLO",
        "name": "MOCHAMAD MUCHDY",
        "role": "5.0",
        "gender": "L",
        "dob": "JAKARTA, 5 SEPTEMBER 1990",
        "address": "KP. JOGLO, RT/RW 004/001, KEL : JOGLO, KEC : KEMBANGAN, JAKARTA BARAT",
        "phone": "081218182564",
        "email": "mochamadmuchdy@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "-"
      },
      {
        "no": 6,
        "kecamatan": "KEMBANGAN",
        "kelurahan": "JOGLO",
        "name": "YUDI MARANTIKA",
        "role": "6.0",
        "gender": "L",
        "dob": "JAKARTA, 17 APRIL 1979",
        "address": "JL. RAYA JOGLO, NO 181, RT/RW 001/002, KEL : JOGLO, KEC : KEMBANGAN, JAKARTA BARAT",
        "phone": "08986900447",
        "email": "yudimarantika17@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 7,
        "kecamatan": "KEMBANGAN",
        "kelurahan": "JOGLO",
        "name": "NASRUL",
        "role": "7.0",
        "gender": "L",
        "dob": "JAKARTA, 9 AGUSTUS 1981",
        "address": "JL. RAYA JOGLO, RT/RW 002/001, KEL : JOGLO, KEC : KEMBANGAN, JAKARTA BARAT",
        "phone": "085692004937",
        "email": "nasrulaji09@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 1,
        "kecamatan": "KEMBANGAN",
        "kelurahan": "MERUYA SELATAN",
        "name": "HERI SUNARDI",
        "role": "1.0",
        "gender": "L",
        "dob": "JAKARTA, 3 FEBRUARI 1987",
        "address": "MERUYA SELATAN, RT/RW 013/002, KEL : MERUYA SELATAN, KEC : KEMBANGAN, JAKARTA BARAT",
        "phone": "083878617700",
        "email": "herisunardi899@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "O"
      },
      {
        "no": 2,
        "kecamatan": "KEMBANGAN",
        "kelurahan": "MERUYA SELATAN",
        "name": "SOFYAN",
        "role": "2.0",
        "gender": "L",
        "dob": "JAKARTA, 1 FEBRUARI 1977",
        "address": "JL. HAJI KASAM NO 26, RT/RW 007/004, KEL : MERUYA SELATAN, KEC : KEMBANGAN, JAKARTA BARAT",
        "phone": "087874750542",
        "email": "fians77@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 3,
        "kecamatan": "KEMBANGAN",
        "kelurahan": "MERUYA SELATAN",
        "name": "DANI DARMAWANSYAH",
        "role": "3.0",
        "gender": "L",
        "dob": "JAKARTA, 11 MARET 1967",
        "address": "MERUYA SELATAN, RT/RW 001/006, KEL : MERUYA SELATAN, KEC : KEMBANGAN, JAKARTA BARAT",
        "phone": "081212986606",
        "email": "danidarmawansyah11@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "-"
      },
      {
        "no": 4,
        "kecamatan": "KEMBANGAN",
        "kelurahan": "MERUYA SELATAN",
        "name": "ANTON SUPRIYADI",
        "role": "4.0",
        "gender": "L",
        "dob": "JAKARTA, 29 MEI 1985",
        "address": "JL. HAJI KASAM II, RT/RW 003/008, KEL : MERUYA SELATAN, KEC : KEMBANGAN, JAKARTA BARAT",
        "phone": "081344198794",
        "email": "ok.antons.oi@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 5,
        "kecamatan": "KEMBANGAN",
        "kelurahan": "MERUYA SELATAN",
        "name": "UDIN MUHAYAR",
        "role": "5.0",
        "gender": "L",
        "dob": "JAKARTA, 8 FEBRUARI 1969",
        "address": "MERUYA SELATAN, RT/RW 001/005, KEL : MERUYA SELATAN, KEC : KEMBANGAN, JAKARTA BARAT",
        "phone": "081808835098",
        "email": "udinremon081@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 6,
        "kecamatan": "KEMBANGAN",
        "kelurahan": "MERUYA SELATAN",
        "name": "MUHAMMAD KUSPEBI",
        "role": "6.0",
        "gender": "L",
        "dob": "JAKARTA, 24 FEBRUARI 2000",
        "address": "MERUYA SELATAN, RT/RW 005/001, KEL : MERUYA SELATAN, KEC : KEMBANGAN, JAKARTA BARAT",
        "phone": "085179722215",
        "email": "pebsmuhammad9@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 7,
        "kecamatan": "KEMBANGAN",
        "kelurahan": "MERUYA SELATAN",
        "name": "JAMALLUDIN",
        "role": "7.0",
        "gender": "L",
        "dob": "JAKARTA, 15 JANUARI 1976",
        "address": "MERUYA SELATAN, RT/RW 005/008, KEL : MERUYA SELATAN, KEC : KEMBANGAN, JAKARTA BARAT",
        "phone": "081314805266",
        "email": "jl1320525@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "A"
      },
      {
        "no": 1,
        "kecamatan": "KEMBANGAN",
        "kelurahan": "KEMBANGAN SELATAN",
        "name": "LINAH",
        "role": "1.0",
        "gender": "P",
        "dob": "JAKARTA, 3 SEPTEMBER 1979",
        "address": "PS. MINGGU KEMBANGAN SELATAN, RT/RW 006/001, KEL : KEMBANGAN SELATAN, KEC : KEMBANGAN, JAKARTA BARAT",
        "phone": "08561318131",
        "email": "lina79gomes@gmail.com",
        "religion": "ISLAM",
        "occupation": "MENGURUS RUMAH TANGGA",
        "blood_type": "-"
      },
      {
        "no": 2,
        "kecamatan": "KEMBANGAN",
        "kelurahan": "KEMBANGAN SELATAN",
        "name": "ASIR ASHARI",
        "role": "2.0",
        "gender": "L",
        "dob": "JAKARTA, 28 MARET 1983",
        "address": "PS. MINGGU, NO 23, RT/RW 005/001, KEL : KEMBANGAN SELATAN, KEC : KEMBANGAN, JAKARTA BARAT",
        "phone": "081380202833",
        "email": "asirasharii@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "B"
      },
      {
        "no": 3,
        "kecamatan": "KEMBANGAN",
        "kelurahan": "KEMBANGAN SELATAN",
        "name": "SANDY FIRMANSYAH",
        "role": "3.0",
        "gender": "L",
        "dob": "JAKARTA, 3 MEI 1989",
        "address": "PS. MINGGU, RT/RW 003/001, KEL : KEMBANGAN SELATAN, KEC : KEMBANGAN, JAKARTA BARAT",
        "phone": "081314832500",
        "email": "sandy.firmansyah035@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 4,
        "kecamatan": "KEMBANGAN",
        "kelurahan": "KEMBANGAN SELATAN",
        "name": "TAUFIK SANUSI",
        "role": "4.0",
        "gender": "L",
        "dob": "JAKARTA, 2 FEBRUARI 1985",
        "address": "KP. SANGGRAHAN, RT/RW 001/006, KEL : KEMBANGAN SELATAN, KEC : KEMBANGAN, JAKARTA BARAT",
        "phone": "081219751461",
        "email": "taufiksanusi1@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "A"
      },
      {
        "no": 5,
        "kecamatan": "KEMBANGAN",
        "kelurahan": "KEMBANGAN SELATAN",
        "name": "MUNADI",
        "role": "5.0",
        "gender": "L",
        "dob": "JAKARTA, 13 APRIL 1977",
        "address": "KEMBANGAN SELATAN, NO165, RT/RW 004/001, KEL : KEMBANGAN SELATAN, KEC : KEMBANGAN, JAKARTA BARAT",
        "phone": "081298338305",
        "email": "okemunadi@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "B"
      },
      {
        "no": 6,
        "kecamatan": "KEMBANGAN",
        "kelurahan": "KEMBANGAN SELATAN",
        "name": "ANGGA SOPANAH ULFAH M",
        "role": "6.0",
        "gender": "L",
        "dob": "JAKARTA, 3 FEBRUARI 1979",
        "address": "PURI INDAH, BLOK A13, NO 8, RT/RW 005/008, KEL : KEMBANGAN SELATAN, KEC : KEMBANGAN, JAKARTA BARAT",
        "phone": "08161673206",
        "email": "a.sopanah@yahoo.co.id",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 7,
        "kecamatan": "KEMBANGAN",
        "kelurahan": "KEMBANGAN SELATAN",
        "name": "GUPRON HALIM",
        "role": "7.0",
        "gender": "L",
        "dob": "TANGERANG, 21 JANUARI 1994",
        "address": "PS. MINGGU GG H JAPAR, RT/RW 005/001, KEL : KEMBANGAN SELATAN, KEC : KEMBANGAN, JAKARTA BARAT",
        "phone": "081295715561",
        "email": "ghalim31@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 1,
        "kecamatan": "KEMBANGAN",
        "kelurahan": "KEMBANGAN UTARA",
        "name": "FADILAH NURICHSAN",
        "role": "1.0",
        "gender": "L",
        "dob": "JAKARTA, 20 JANUARI 2000",
        "address": "KEMBANGAN UTARA, NO 102A, RT/RW 003/002, KEL : KEMBANGAN SELATAN, KEC : KEMBANGAN, JAKARTA BARAT",
        "phone": "085817550012",
        "email": "fadillahhichsan@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 2,
        "kecamatan": "KEMBANGAN",
        "kelurahan": "KEMBANGAN UTARA",
        "name": "MASDEDI KURNIAWAN",
        "role": "2.0",
        "gender": "L",
        "dob": "JAKARTA, 7 FEBRUARI 1987",
        "address": "KP. BARU, NO 7, RT/RW 004/010, KEL : KEMBANGAN SELATAN, KEC : KEMBANGAN, JAKARTA BARAT",
        "phone": "081324343490",
        "email": "novita.hefianti26@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "B"
      },
      {
        "no": 3,
        "kecamatan": "KEMBANGAN",
        "kelurahan": "KEMBANGAN UTARA",
        "name": "AAM AMINAH",
        "role": "3.0",
        "gender": "P",
        "dob": "JAKARTA, 21 JULI 1969",
        "address": "JL. H. MADING, NO 33, RT/RW 010/002, KEL : KEMBANGAN SELATAN, KEC : KEMBANGAN, JAKARTA BARAT",
        "phone": "-",
        "email": "",
        "religion": "ISLAM",
        "occupation": "MENGURUS RUMAH TANGGA",
        "blood_type": "B"
      },
      {
        "no": 4,
        "kecamatan": "KEMBANGAN",
        "kelurahan": "KEMBANGAN UTARA",
        "name": "ADE NILIWATI",
        "role": "4.0",
        "gender": "L",
        "dob": "JAKARTA, 16 DESEMBER 1978",
        "address": "KP. SALO, NO 37, RT/RW 008/007, KEL : KEMBANGAN SELATAN, KEC : KEMBANGAN, JAKARTA BARAT",
        "phone": "",
        "email": "",
        "religion": "ISLAM",
        "occupation": "MENGURUS RUMAH TANGGA",
        "blood_type": "O"
      },
      {
        "no": 5,
        "kecamatan": "KEMBANGAN",
        "kelurahan": "KEMBANGAN UTARA",
        "name": "AHMAD MARTANI",
        "role": "5.0",
        "gender": "L",
        "dob": "JAKARTA, 11 MARET 1985",
        "address": "KP. BASMOL, NO 165, RT/RW 008/006, KEL : KEMBANGAN SELATAN, KEC : KEMBANGAN, JAKARTA BARAT",
        "phone": "085817868118",
        "email": "",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 6,
        "kecamatan": "KEMBANGAN",
        "kelurahan": "KEMBANGAN UTARA",
        "name": "NURUL HIDAYATULLAH",
        "role": "6.0",
        "gender": "L",
        "dob": "JAKARTA, 11 JANUARI 1973",
        "address": "KOMP. BTN, JL DELIMA V, NO 15, RT/RW 007/003, KEL : KEMBANGAN SELATAN, KEC : KEMBANGAN, JAKARTA BARAT",
        "phone": "081315502068",
        "email": "kamplengdayat925@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "-"
      },
      {
        "no": 7,
        "kecamatan": "KEMBANGAN",
        "kelurahan": "KEMBANGAN UTARA",
        "name": "AHMAD FAUZI",
        "role": "7.0",
        "gender": "L",
        "dob": "JAKARTA ,31 DESEMBER 1986",
        "address": "JL. MASJID AT-TAQWA, NO 58, RT/RW 003/002, KEL : KEMBANGAN SELATAN, KEC : KEMBANGAN, JAKARTA BARAT",
        "phone": "081513268854",
        "email": "zafranabbasy@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 1,
        "kecamatan": "KEMBANGAN",
        "kelurahan": "MERUYA UTARA",
        "name": "NADA KAMILIA",
        "role": "1.0",
        "gender": "P",
        "dob": "JAKARTA, 6 APRIL 1998",
        "address": "TM. MERUYA ILIR H/5/23, RT/RW 004/007, KEL : MERUYA UTARA, KEC : KEMBANGAN, JAKARTA BARAT",
        "phone": "089694969962",
        "email": "085866146237",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 2,
        "kecamatan": "KEMBANGAN",
        "kelurahan": "MERUYA UTARA",
        "name": "PRAYUDI",
        "role": "2.0",
        "gender": "L",
        "dob": "JAKARTA, 27 JANUARI 1980",
        "address": "JL. RAYA MERUYA ILIR GG H. TABAR, NO 21, RT/RW 003/011, KEL : MERUYA UTARA, KEC : KEMBANGAN, JAKARTA BARAT",
        "phone": "081296336186",
        "email": "prayudidriver.jkt0715@gmail.com",
        "religion": "ISLAM",
        "occupation": "OJOL",
        "blood_type": "-"
      },
      {
        "no": 3,
        "kecamatan": "KEMBANGAN",
        "kelurahan": "MERUYA UTARA",
        "name": "NAMIN",
        "role": "3.0",
        "gender": "L",
        "dob": "JAKARTA, 2 MARET 1971",
        "address": "MERUYA UTARA, NO 63, RT/RW 003/002, KEL : MERUYA UTARA, KEC : KEMBANGAN, JAKARTA BARAT",
        "phone": "085776089124",
        "email": "naminmahendra915@gmail.com",
        "religion": "ISLAM",
        "occupation": "PURNAWIRAWAN TNI",
        "blood_type": "-"
      },
      {
        "no": 4,
        "kecamatan": "KEMBANGAN",
        "kelurahan": "MERUYA UTARA",
        "name": "BILHAM HERIYANA",
        "role": "4.0",
        "gender": "L",
        "dob": "JAKARTA, 5 FEBRUARI 1980",
        "address": "JL. KARTIKA, NO 34, RT/RW 003/004, KEL : MERUYA UTARA, KEC : KEMBANGAN, JAKARTA BARAT",
        "phone": "083807845399",
        "email": "bilhamheriyana@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 5,
        "kecamatan": "KEMBANGAN",
        "kelurahan": "MERUYA UTARA",
        "name": "ROYADI",
        "role": "5.0",
        "gender": "L",
        "dob": "JAKARTA, 2 SEPTEMBER 1980",
        "address": "KP. SANGGRAHAN, NO 22, RT/RW 003/003, KEL : MERUYA UTARA, KEC : KEMBANGAN, JAKARTA BARAT",
        "phone": "085161515149",
        "email": "royadiariess@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 6,
        "kecamatan": "KEMBANGAN",
        "kelurahan": "MERUYA UTARA",
        "name": "SARONI",
        "role": "6.0",
        "gender": "L",
        "dob": "JAKARTA, 2 MEI 1970",
        "address": "KP. SANGGRAHAN, NO 3F, RT/RW 002/003, KEL : MERUYA UTARA, KEC : KEMBANGAN, JAKARTA BARAT",
        "phone": "087785344446",
        "email": "intanbotto@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 7,
        "kecamatan": "KEMBANGAN",
        "kelurahan": "MERUYA UTARA",
        "name": "AFUD MAHFUDIN",
        "role": "7.0",
        "gender": "L",
        "dob": "JAKARTA, 14 OKTOBER 1980",
        "address": "KP. DKI BLOM 35, NO 23, RT/RW 006/001, KEL : MERUYA UTARA, KEC : KEMBANGAN, JAKARTA BARAT",
        "phone": "081316788664",
        "email": "mahfudin150002@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 1,
        "kecamatan": "KEMBANGAN",
        "kelurahan": "SRENGSENG",
        "name": "FAHMI",
        "role": "1.0",
        "gender": "L",
        "dob": "JAKARTA, 28 APRIL 1982",
        "address": "GG MASJID, RT/RW 011/005, KEL : SRENGSENG, KEC : KEMBANGAN, JAKARTA BARAT",
        "phone": "089632357215",
        "email": "",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "B"
      },
      {
        "no": 2,
        "kecamatan": "KEMBANGAN",
        "kelurahan": "SRENGSENG",
        "name": "MOHAMMAD KHOLIL",
        "role": "2.0",
        "gender": "L",
        "dob": "MALANG, 4 DESEMBER 1968",
        "address": "TAMAN KEBON JERUK, BLOK II, NO 15-16, RT/RW 003/009, KEL : SRENGSENG, KEC : KEMBANGAN, JAKARTA BARAT",
        "phone": "08161961892",
        "email": "mohkholil04@gmail.com",
        "religion": "ISLAM",
        "occupation": "PURNAWIRAWAN TNI",
        "blood_type": "B"
      },
      {
        "no": 3,
        "kecamatan": "KEMBANGAN",
        "kelurahan": "SRENGSENG",
        "name": "MUHAMAD YASIN",
        "role": "3.0",
        "gender": "L",
        "dob": "JAKARTA, 17 OKTOBER 1981",
        "address": "JL. MERUYA ILIR RAYA, NO 50, RT/RW 005/008, KEL : SRENGSENG, KEC : KEMBANGAN, JAKARTA BARAT",
        "phone": "083872370589",
        "email": "yasinasli70@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 4,
        "kecamatan": "KEMBANGAN",
        "kelurahan": "SRENGSENG",
        "name": "NURDIN",
        "role": "4.0",
        "gender": "L",
        "dob": "JAKARTA, 22 MEI 1979",
        "address": "SRENGSENG, RT/RW 001/004, KEL : SRENGSENG, KEC : KEMBANGAN, JAKARTA BARAT",
        "phone": "081908083922",
        "email": "nurdingaler6@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 5,
        "kecamatan": "KEMBANGAN",
        "kelurahan": "SRENGSENG",
        "name": "NUNUNG SAIFULLOH",
        "role": "5.0",
        "gender": "L",
        "dob": "JAKARTA, 3 SEPTEMBER 1971",
        "address": "SRENGSENG, RT/RW 004/002, KEL : SRENGSENG, KEC : KEMBANGAN, JAKARTA BARAT",
        "phone": "087775126638",
        "email": "nsaifulloh@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 6,
        "kecamatan": "KEMBANGAN",
        "kelurahan": "SRENGSENG",
        "name": "ISMAIL",
        "role": "6.0",
        "gender": "L",
        "dob": "JAKARTA, 8 JANUARI 1982",
        "address": "JL. KH NASIR, NO 29 A, RT/RW 002/002, KEL : SRENGSENG, KEC : KEMBANGAN, JAKARTA BARAT",
        "phone": "085780867346",
        "email": "ismailzuki564@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 7,
        "kecamatan": "KEMBANGAN",
        "kelurahan": "SRENGSENG",
        "name": "MARIE MUHAMMAD",
        "role": "7.0",
        "gender": "L",
        "dob": "JAKARTA, 6 APRIL 1999",
        "address": "JL. SAWAH BALONG I, N0 85, RT/RW 004/006, KEL : SRENGSENG, KEC : KEMBANGAN, JAKARTA BARAT",
        "phone": "088212774854",
        "email": "muhammadmariie26@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 1,
        "kecamatan": "KALIDERES",
        "kelurahan": "",
        "name": "NUR FADHILAH",
        "role": "1.0",
        "gender": "L",
        "dob": "JAKARTA, 13 AGUSTUS 1995",
        "address": "JL. KAYU BESAR, RT/RW 005/012, KEL : TEGAL ALUR, KEC : KALIDERES, JAKARTA BARAT",
        "phone": "0895619502172",
        "email": "",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 2,
        "kecamatan": "KALIDERES",
        "kelurahan": "",
        "name": "YONATHAN HARYADI",
        "role": "2.0",
        "gender": "L",
        "dob": "JAKARTA, 20 JULI 1975",
        "address": "JL. LINGKUNGAN III, RT/RW 006/009, KEL : TEGAL ALUR, KEC : KALIDERES, JAKARTA BARAT",
        "phone": "-",
        "email": "",
        "religion": "BUDDHA",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 3,
        "kecamatan": "KALIDERES",
        "kelurahan": "",
        "name": "RUDY SUPRIYADI",
        "role": "3.0",
        "gender": "L",
        "dob": "JAKARTA, 9 NOVEMBER 1974",
        "address": "RAWA BEBEK, RT/RW 003/001, KEL : KAMAL, KEC : KALIDERES, JAKARTA BARAT",
        "phone": "082297016889",
        "email": "rudysuriyadi74@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 4,
        "kecamatan": "KALIDERES",
        "kelurahan": "",
        "name": "H. ZAINI, SE",
        "role": "4.0",
        "gender": "L",
        "dob": "JAKARTA, 7 MEI 1969",
        "address": "KP. RAWA LELE, NO 8, RT/RW 006/010, KEL : KALIDERES, KEC : KALIDERES, JAKARTA BARAT",
        "phone": "085888164501",
        "email": "rehaffabesudare3@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "A"
      },
      {
        "no": 5,
        "kecamatan": "KALIDERES",
        "kelurahan": "",
        "name": "MUHAMMAD FIKRI M",
        "role": "5.0",
        "gender": "L",
        "dob": "JAKARTA, 12 FEBRUARI 2000",
        "address": "KP. RAWA LELE, RT/RW 005/007, KEL : PEGADUNGAN, KEC : KALIDERES, JAKARTA BARAT",
        "phone": "0895321002278",
        "email": "",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 6,
        "kecamatan": "KALIDERES",
        "kelurahan": "",
        "name": "MULYADI",
        "role": "6.0",
        "gender": "L",
        "dob": "JAKARTA, 7 MARET 1982",
        "address": "KEBUN DUA RATUS, RT/RW 008/002, KEL : KAMAL, KEC : KELIDERES, JAKARTA BARAT",
        "phone": "081281566439",
        "email": "yandimulyandi123@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 7,
        "kecamatan": "KALIDERES",
        "kelurahan": "",
        "name": "REKSOKO KURNIAWAN",
        "role": "7.0",
        "gender": "L",
        "dob": "JAKARTA, 22 APRIL 1977",
        "address": "JL. PETA SELATAN, RT/RW 008/001, KEL : KALIDERES, KEC : KALIDERES, JAKARTA BARAT",
        "phone": "089684379028",
        "email": "kurniawan.driver77@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "O"
      },
      {
        "no": 8,
        "kecamatan": "KALIDERES",
        "kelurahan": "",
        "name": "IMAM SYAIFULLOH",
        "role": "8.0",
        "gender": "L",
        "dob": "TANGERANG, 7 JULI 1990",
        "address": "KEBUN DUA RATUS, RT/RW 006/002, KEL : KAMAL, KEC : KELIDERES, JAKARTA BARAT",
        "phone": "089631927137",
        "email": "imamsyaifulloh90@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 9,
        "kecamatan": "KALIDERES",
        "kelurahan": "",
        "name": "ABDUL ROSID RIDHO",
        "role": "9.0",
        "gender": "L",
        "dob": "JAKARTA, 11 AGUSTUS 1976",
        "address": "BAMBU LARANGAN, NO 13, RT/RW 002/009, KEL : PEGADUNGAN, KEC : KALIDERES, JAKARTA BARAT",
        "phone": "081808222337",
        "email": "ridho.manajement@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "B"
      },
      {
        "no": 1,
        "kecamatan": "KALIDERES",
        "kelurahan": "KALIDERES",
        "name": "AZWAR ANAS MALIK",
        "role": "1.0",
        "gender": "L",
        "dob": "JAKARTA, 4 SEPTEMBER 1979",
        "address": "JL. PETA SELATAN, RT/RW 008/001, KEL : KALIDERES, KEC : KALIDERES, JAKARTA BARAT",
        "phone": "-",
        "email": "",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "AB"
      },
      {
        "no": 2,
        "kecamatan": "KALIDERES",
        "kelurahan": "KALIDERES",
        "name": "VIDI SJAHRUL BAHRI",
        "role": "2.0",
        "gender": "L",
        "dob": "JAKARTA, 12 NOVEMBER 1994",
        "address": "JL. PETA SELATAN, RT/RW 011/001, KEL : KALIDERES, KEC : KALIDERES, JAKARTA BARAT",
        "phone": "088212178510",
        "email": "vidisjahrul@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 3,
        "kecamatan": "KALIDERES",
        "kelurahan": "KALIDERES",
        "name": "SODIKUN",
        "role": "3.0",
        "gender": "L",
        "dob": "CILACAP, 2 APRIL 1969",
        "address": "KP. RAWA LELE, RT/RW 001/010, KEL : KALIDERES, KEC : KALIDERES, JAKARTA BARAT",
        "phone": "081325023325",
        "email": "",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "B"
      },
      {
        "no": 4,
        "kecamatan": "KALIDERES",
        "kelurahan": "KALIDERES",
        "name": "SUHADAH",
        "role": "4.0",
        "gender": "P",
        "dob": "JAKARTA, 2 MARET 1973",
        "address": "JL. PETA SELATAN, RT/RW 010/001, KEL : KALIDERES, KEC : KALIDERES, JAKARTA BARAT",
        "phone": "083807261764",
        "email": "",
        "religion": "ISLAM",
        "occupation": "MENGURUS RUMAH TANGGA",
        "blood_type": "O"
      },
      {
        "no": 5,
        "kecamatan": "KALIDERES",
        "kelurahan": "KALIDERES",
        "name": "STEFANUS PRATAMA M",
        "role": "5.0",
        "gender": "L",
        "dob": "JAKARTA, 16 NOVEMBER 1987",
        "address": "JL. PETA SELATAN, NO 67A, RT/RW 004/003, KEL : KALIDERES, KEC : KALIDERES, JAKARTA BARAT",
        "phone": "081288219775",
        "email": "stevymulyawan@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "A"
      },
      {
        "no": 6,
        "kecamatan": "KALIDERES",
        "kelurahan": "KALIDERES",
        "name": "FRETTY",
        "role": "6.0",
        "gender": "",
        "dob": "",
        "address": "KEL : KALIDERES, KEC : KALIDERES, JAKARTA BARAT",
        "phone": "",
        "email": "",
        "religion": "Islam",
        "occupation": "",
        "blood_type": ""
      },
      {
        "no": 7,
        "kecamatan": "KALIDERES",
        "kelurahan": "KALIDERES",
        "name": "HAMJAH",
        "role": "7.0",
        "gender": "",
        "dob": "",
        "address": "KEL : KALIDERES, KEC : KALIDERES, JAKARTA BARAT",
        "phone": "",
        "email": "",
        "religion": "Islam",
        "occupation": "",
        "blood_type": ""
      },
      {
        "no": 1,
        "kecamatan": "KALIDERES",
        "kelurahan": "PEGADUNGAN",
        "name": "NIPTAHUL ANWAR",
        "role": "1.0",
        "gender": "L",
        "dob": "JAKARTA, 16 AGUSTUS 1978",
        "address": "JL. UTAN JATI, RT/RW 008/011, KEL : PEGADUNGAN, KEC : KALIDERES, JAKARTA BARAT",
        "phone": "081385100912",
        "email": "baronfanhaoten95@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "O"
      },
      {
        "no": 2,
        "kecamatan": "KALIDERES",
        "kelurahan": "PEGADUNGAN",
        "name": "ARDIANSYAH",
        "role": "2.0",
        "gender": "L",
        "dob": "JAKARTA, 17 APRIL 1986",
        "address": "JL. UTAN JATI, RT/RW 011/011, KEL : PEGADUNGAN, KEC : KALIDERES, JAKARTA BARAT",
        "phone": "083805875390",
        "email": "nur243245@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 3,
        "kecamatan": "KALIDERES",
        "kelurahan": "PEGADUNGAN",
        "name": "MUHAMMAD MAULUDIN A",
        "role": "3.0",
        "gender": "L",
        "dob": "JAKARTA, 8 OKTOBER 1990",
        "address": "JL. SATU MARET, NO 80, RT/RW 001/004 KEL : PEGADUNGAN, KEC : KALIDERES, JAKARTA BARAT",
        "phone": "085718841458",
        "email": "akbardi2n@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 4,
        "kecamatan": "KALIDERES",
        "kelurahan": "PEGADUNGAN",
        "name": "SITI JUBAEDAH",
        "role": "4.0",
        "gender": "P",
        "dob": "JAKARTA, 8 AGUSTUS 1983",
        "address": "BAMBU LARANGAN, RT/RW 007/009, KEL : PEGADUNGAN, KEC : KALIDERES, JAKARTA BARAT",
        "phone": "085782490210",
        "email": "bedahbeken@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "A"
      },
      {
        "no": 5,
        "kecamatan": "KALIDERES",
        "kelurahan": "PEGADUNGAN",
        "name": "NORMAN SENJAYA",
        "role": "5.0",
        "gender": "L",
        "dob": "JAKARTA, 26 NOVEMBER 1984",
        "address": "JL. SATU MARET, NO 64, RT/RW 002/004, KEL : PEGADUNGAN, KEC : KALIDERES, JAKARTA BARAT",
        "phone": "0895329552443",
        "email": "normanfoto99@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "B"
      },
      {
        "no": 6,
        "kecamatan": "KALIDERES",
        "kelurahan": "PEGADUNGAN",
        "name": "MUHAMAD JAMALUDIN",
        "role": "6.0",
        "gender": "L",
        "dob": "JAKARTA, 22 JUNI 1973",
        "address": "KP. PREPET, RT/RW 011/004, KEL : PEGADUNGAN, KEC : KALIDERES, JAKARTA BARAT",
        "phone": "081211478319",
        "email": "",
        "religion": "ISLAM",
        "occupation": "BURUH HARIAN LEPAS",
        "blood_type": "-"
      },
      {
        "no": 7,
        "kecamatan": "KALIDERES",
        "kelurahan": "PEGADUNGAN",
        "name": "BELA CLAUDIA",
        "role": "7.0",
        "gender": "P",
        "dob": "JAKARTA, 10 OKTOBER 1996",
        "address": "KP. MAJA, RT/RW 006/005, KEL : PEGADUNGAN, KEC : KALIDERES, JAKARTA BARAT",
        "phone": "085697331316",
        "email": "belaclaudia255@gmail.com",
        "religion": "ISLAM",
        "occupation": "MENGURUS RUMAH TANGGA",
        "blood_type": "-"
      },
      {
        "no": 1,
        "kecamatan": "KALIDERES",
        "kelurahan": "SEMANAN",
        "name": "SUGIARTO",
        "role": "1.0",
        "gender": "L",
        "dob": "JAKARTA, 9 MARET 1981",
        "address": "KP. PANGKALAN, RT/RW 006/007, KEL : SEMANAN, KEC : KALIDERES, JAKARTA BARAT",
        "phone": "085778302277",
        "email": "sugiartoanto615@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 2,
        "kecamatan": "KALIDERES",
        "kelurahan": "SEMANAN",
        "name": "ISHAK",
        "role": "2.0",
        "gender": "L",
        "dob": "JAKARTA, 10 JANUARI 1967",
        "address": "KP. DURI, RT/RW 002/001, KEL : SEMANAN, KEC : KALIDERES, JAKARTA BARAT",
        "phone": "081381449808",
        "email": "",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 3,
        "kecamatan": "KALIDERES",
        "kelurahan": "SEMANAN",
        "name": "SUHENDI",
        "role": "3.0",
        "gender": "L",
        "dob": "JAKARTA, 11 JANUARI 1982",
        "address": "KP. ALAS TUA, RT/RW 002/004, KEL : SEMANAN, KEC : KALIDERES, JAKARTA BARAT",
        "phone": "087735644977",
        "email": "hendisuhendi@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "-"
      },
      {
        "no": 4,
        "kecamatan": "KALIDERES",
        "kelurahan": "SEMANAN",
        "name": "TITIN AGUSTIANI",
        "role": "4.0",
        "gender": "P",
        "dob": "JAKARTA, 31 AGUSTUS 1980",
        "address": "KP. PANGKALAN, BLOK A RT/RW 001/006, KEL : SEMANAN, KEC : KALIDERES, JAKARTA BARAT",
        "phone": "081298535323",
        "email": "tien.agustiani318@gmail.com",
        "religion": "ISLAM",
        "occupation": "MENGURUS RUMAH TANGGA",
        "blood_type": "A"
      },
      {
        "no": 5,
        "kecamatan": "KALIDERES",
        "kelurahan": "SEMANAN",
        "name": "PERMATA ESTI ISHAMIAH",
        "role": "5.0",
        "gender": "P",
        "dob": "JAKARTA, 6 SEPTEMBER 1980",
        "address": "KP. DURI SEMANAN, NO 114, RT/RW 006/001 KEL : SEMANAN, KEC : KALIDERES, JAKARTA BARAT",
        "phone": "085282675442",
        "email": "jonayshop@gmail.com",
        "religion": "ISLAM",
        "occupation": "MENGURUS RUMAH TANGGA",
        "blood_type": "-"
      },
      {
        "no": 6,
        "kecamatan": "KALIDERES",
        "kelurahan": "SEMANAN",
        "name": "TRI TIMBUL PRASUBAKTI",
        "role": "6.0",
        "gender": "L",
        "dob": "JAKARTA, 2 OKTOBER 1973",
        "address": "KP. CIPONDOH, RT/RW 010/008, KEL : SEMANAN, KEC : KALIDERES, JAKARTA BARAT",
        "phone": "08577025810010",
        "email": "timbul.prasubakti@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 7,
        "kecamatan": "KALIDERES",
        "kelurahan": "SEMANAN",
        "name": "MAHFUZ EFFENDI",
        "role": "7.0",
        "gender": "L",
        "dob": "JAKARTA, 15 MEI 1989",
        "address": "KP. DURI, NO 61, RT/RW 003/001, KEL : SEMANAN, KEC : KALIDERES, JAKARTA BARAT",
        "phone": "087835400757",
        "email": "aputansor89@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 1,
        "kecamatan": "KALIDERES",
        "kelurahan": "KAMAL",
        "name": "AHMAD JAUHARUDIN",
        "role": "1.0",
        "gender": "L",
        "dob": "JAKARTA, 3 JULI 1990",
        "address": "JL. PREPEDAN, RT/RW 004/009, KEL : KAMAL, KEC : KALIDERES, JAKARTA BARAT",
        "phone": "081296875208",
        "email": "ahmadjauharudin7@gmail.com",
        "religion": "ISLAM",
        "occupation": "GURU",
        "blood_type": "-"
      },
      {
        "no": 2,
        "kecamatan": "KALIDERES",
        "kelurahan": "KAMAL",
        "name": "GALUH CANDRA SETIYADI",
        "role": "2.0",
        "gender": "L",
        "dob": "PURWOKERTO, 14 SEPTEMBER 1981",
        "address": "JL. MASJID JAMI AL-FALAH RAWA BEBEK, RT/RW 006/001, KEL : KAMAL, KEC : KALIDERES, JAKARTA BARAT",
        "phone": "08983994257",
        "email": "galuhcandra217@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 3,
        "kecamatan": "KALIDERES",
        "kelurahan": "KAMAL",
        "name": "HAMDANI",
        "role": "3.0",
        "gender": "L",
        "dob": "JAKARTA, 28 NOVEMBER 1973",
        "address": "JL. KH MOH. RAIS, RT/RW 005/008, KEL : KAMAL, KEC : KALIDERES, JAKARTA BARAT",
        "phone": "085945783918",
        "email": "ashamdani525@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 4,
        "kecamatan": "KALIDERES",
        "kelurahan": "KAMAL",
        "name": "CAHYA BERY PAMUNGKAS",
        "role": "4.0",
        "gender": "L",
        "dob": "JAKARTA, 2 MEI 1992",
        "address": "JL. PREPEDAN, RT/RW 005/007, KEL : KAMAL, KEC : KALIDERES, JAKARTA BARAT",
        "phone": "081292266435",
        "email": "indri.surya26@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 5,
        "kecamatan": "KALIDERES",
        "kelurahan": "KAMAL",
        "name": "MUHAMAD AMBARI",
        "role": "5.0",
        "gender": "L",
        "dob": "JAKARTA, 24 MEI 1995",
        "address": "JL. PREPEDAN, NO 10, RT/RW 004/009, KEL : KAMAL, KEC : KALIDERES, JAKARTA BARAT",
        "phone": "085777230071",
        "email": "muhambari24@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 6,
        "kecamatan": "KALIDERES",
        "kelurahan": "KAMAL",
        "name": "EHA CHOSYIAH",
        "role": "6.0",
        "gender": "P",
        "dob": "JAKARTA, 14 AGUSTUS 1989",
        "address": "JL. PREPEDAN, RT/RW 007/009, KEL : KAMAL, KEC : KALIDERES, JAKARTA BARAT",
        "phone": "089695853716",
        "email": "chaosyiahzha@gmail.com",
        "religion": "ISLAM",
        "occupation": "MENGURUS RUMAH TANGGA",
        "blood_type": "-"
      },
      {
        "no": 7,
        "kecamatan": "KALIDERES",
        "kelurahan": "KAMAL",
        "name": "HJ. YUSTINI",
        "role": "7.0",
        "gender": "P",
        "dob": "JAKARTA, 18 AGUSTUS 1976",
        "address": "JL. PREPEDAN DALAM, RT/RW 017/009, KEL : KAMAL, KEC : KALIDERES, JAKARTA BARAT",
        "phone": "081224405626",
        "email": "yustiniyus333@gmail.com",
        "religion": "ISLAM",
        "occupation": "MENGURUS RUMAH TANGGA",
        "blood_type": "AB"
      },
      {
        "no": 1,
        "kecamatan": "KALIDERES",
        "kelurahan": "TEGAL ALUR",
        "name": "M LUTHFI NUR ADLI",
        "role": "1.0",
        "gender": "L",
        "dob": "JAKARTA, 6 JULI 1998",
        "address": "KAYU BESAR, RT/RW 013/012, KEL : TEGAL ALUR, KEC KALIDERES, JAKARTA BARAT",
        "phone": "08131227374",
        "email": "luthfinoer060905@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 2,
        "kecamatan": "KALIDERES",
        "kelurahan": "TEGAL ALUR",
        "name": "SUSI YANTO",
        "role": "2.0",
        "gender": "L",
        "dob": "JAKARTA, 25 MARET 1971",
        "address": "JL. SEKOLAH, RT/RW 011/011, KEL : TEGAL ALUR, KEC KALIDERES, JAKARTA BARAT",
        "phone": "0895334876954",
        "email": "susiyantoo197@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 3,
        "kecamatan": "KALIDERES",
        "kelurahan": "TEGAL ALUR",
        "name": "DIDIN CAHYADI",
        "role": "3.0",
        "gender": "L",
        "dob": "JAKARTA, 4 JANUARI 1989",
        "address": "JL. KAYU BESAR, NO 121, RT/RW 004/012, KEL : TEGAL ALUR, KEC KALIDERES, JAKARTA BARAT",
        "phone": "088298007657",
        "email": "didincahyadi170@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 4,
        "kecamatan": "KALIDERES",
        "kelurahan": "TEGAL ALUR",
        "name": "AHMAD SANI",
        "role": "4.0",
        "gender": "L",
        "dob": "JAKARTA, 22 FEBRUARI 1991",
        "address": "JL. MANYAR DALAM, RT/RW 002/015, KEL : TEGAL ALUR, KEC KALIDERES, JAKARTA BARAT",
        "phone": "085892717223",
        "email": "ahmadsani2473@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 5,
        "kecamatan": "KALIDERES",
        "kelurahan": "TEGAL ALUR",
        "name": "AMITA SARI UTAMI",
        "role": "5.0",
        "gender": "P",
        "dob": "JAKARTA, 15 AGUSTUS 1986",
        "address": "JL. SEKOLAH, RT/RW 011/011, KEL : TEGAL ALUR, KEC KALIDERES, JAKARTA BARAT",
        "phone": "085962704242",
        "email": "amitasariu@gmail.com",
        "religion": "ISLAM",
        "occupation": "MENGURUS RUMAH TANGGA",
        "blood_type": "O"
      },
      {
        "no": 6,
        "kecamatan": "KALIDERES",
        "kelurahan": "TEGAL ALUR",
        "name": "WILDAN AMAR HUSEINI",
        "role": "6.0",
        "gender": "L",
        "dob": "SEMARANG, 29 SEPTEMBER 1995",
        "address": "JL. LINGKUNGAN III, RT/RW 001/009, KEL : TEGAL ALUR, KEC KALIDERES, JAKARTA BARAT",
        "phone": "081315773200",
        "email": "wildanhuseini@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 7,
        "kecamatan": "KALIDERES",
        "kelurahan": "TEGAL ALUR",
        "name": "ABDUL AZIZ",
        "role": "7.0",
        "gender": "L",
        "dob": "JAKARTA, 10 JUNI 1976",
        "address": "JL. LINGKUNGAN III, RT/RW 014/003, KEL : TEGAL ALUR, KEC KALIDERES, JAKARTA BARAT",
        "phone": "085218606121",
        "email": "azizjusin@gmail.com",
        "religion": "ISLAM",
        "occupation": "GURU",
        "blood_type": "-"
      },
      {
        "no": 1,
        "kecamatan": "KEBON JERUK",
        "kelurahan": "",
        "name": "SYARIF HIDAYATULLAH",
        "role": "1.0",
        "gender": "L",
        "dob": "JAKARTA, 14 JULI 1973",
        "address": "KP. BARU, RT/RW 007/003, KEL : SUKABUMI SELATAN, KEC : KEBON JERUK, JAKARTA BARAT",
        "phone": "081776451919",
        "email": "cangajisyarif72@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 2,
        "kecamatan": "KEBON JERUK",
        "kelurahan": "",
        "name": "FERRY",
        "role": "2.0",
        "gender": "L",
        "dob": "JAKARTA, 10 NOVEMBER 1979",
        "address": "JL. PERTAMBANGAN I, NO 43, RT/RW 001/005, KEL : KELAPA DUA, KEC : KEBON JERUK, JAKARTA BARAT",
        "phone": "087883291642",
        "email": "fery52638@gmail.com",
        "religion": "ISLAM",
        "occupation": "GURU SWASTA",
        "blood_type": "-"
      },
      {
        "no": 3,
        "kecamatan": "KEBON JERUK",
        "kelurahan": "",
        "name": "ANI NURAENI",
        "role": "3.0",
        "gender": "P",
        "dob": "PANDEGLANG, 2 FEBRUARI 1994",
        "address": "JL. ANGSANA, RT/RW 006/005, KEL : KEBON JERUK, KEC : KEBON JERUK, JAKARTA BARAT",
        "phone": "081219186658",
        "email": "nuraenianii@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 4,
        "kecamatan": "KEBON JERUK",
        "kelurahan": "",
        "name": "LILIS SURYANA",
        "role": "4.0",
        "gender": "P",
        "dob": "JAKARTA, 8 DESEMBER 1969",
        "address": "JL. H. OPENG, NO 44, RT/RW 004/002, KEL : KEBON JERUK, KEC : KEBON JERUK, JAKARTA BARAT",
        "phone": "085817904670",
        "email": "lilissuryana69@gmail.com",
        "religion": "ISLAM",
        "occupation": "MENGURUS RUMAH TANGGA",
        "blood_type": "O"
      },
      {
        "no": 5,
        "kecamatan": "KEBON JERUK",
        "kelurahan": "",
        "name": "AGUS GUNAWAN",
        "role": "5.0",
        "gender": "L",
        "dob": "JAKARTA, 28 AGUSTUS 1969",
        "address": "KP. GUJI BARU, RT/RW 005/002, KEL : DURI KEPA, KEC : KEBON JERUK, JAKARTA BARAT",
        "phone": "081295752781",
        "email": "agusg6908@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "O"
      },
      {
        "no": 6,
        "kecamatan": "KEBON JERUK",
        "kelurahan": "",
        "name": "NURJANAH",
        "role": "6.0",
        "gender": "P",
        "dob": "JAKARTA, 6 MEI 1978",
        "address": "JL. MADRASAH II, NO 28, RT/RW 005/002, KEL : SEUKABUMI UTARA, KEC : KEBON JERUK, JAKARTA BARAT",
        "phone": "0895332032669",
        "email": "inungnurjanah4@gmail.com",
        "religion": "ISLAM",
        "occupation": "MENGURUS RUMAH TANGGA",
        "blood_type": "-"
      },
      {
        "no": 7,
        "kecamatan": "KEBON JERUK",
        "kelurahan": "",
        "name": "SIROJUL MUNIR",
        "role": "7.0",
        "gender": "L",
        "dob": "JAKARTA, 16 JANUARI 1978",
        "address": "KEBON JERUK, RT/RW 001/004, KEL : KEBON JERUK, KEC : KEBON JERUK, JAKARTA BARAT",
        "phone": "081290760836",
        "email": "sirojulmunirsabeni@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "-"
      },
      {
        "no": 8,
        "kecamatan": "KEBON JERUK",
        "kelurahan": "",
        "name": "MUHAMAD AFANDI",
        "role": "8.0",
        "gender": "L",
        "dob": "CILACAP, 6 MEI 1987",
        "address": "JL. KEDOYA DURI, NO 24, RT/RW 013/001, KEL : KEDOYA SELATAN, KEC : KEBON JERUK, JAKARTA BARAT",
        "phone": "08881322647",
        "email": "kangfandi06@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "AB"
      },
      {
        "no": 9,
        "kecamatan": "KEBON JERUK",
        "kelurahan": "",
        "name": "MUHAMMAD AGIL",
        "role": "9.0",
        "gender": "L",
        "dob": "JAKARTA, 4 ARIL 1998",
        "address": "JL. NUH, RT/RW 009/005, KEL : SUKABUMI UTARA, KEC : KEBON JERUK, JAKARTA BARAT",
        "phone": "0895402883402",
        "email": "muhammada4498@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "B"
      },
      {
        "no": 1,
        "kecamatan": "KEBON JERUK",
        "kelurahan": "KEBON JERUK",
        "name": "NONIE NUR AINI",
        "role": "1.0",
        "gender": "P",
        "dob": "JAKARTA, 19 SEPTEMBER 1983",
        "address": "JL. RAYA, KEBON JERUK, RT/RW 007/001, KEL : KEBON JERUK, KEC : KEBON JERUK, JAKARTA BARAT",
        "phone": "085770312923",
        "email": "nonienuraini19@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "O"
      },
      {
        "no": 2,
        "kecamatan": "KEBON JERUK",
        "kelurahan": "KEBON JERUK",
        "name": "ROBBI RIYANTO",
        "role": "2.0",
        "gender": "L",
        "dob": "JAKARTA, 10 MEI 1980",
        "address": "JL. B, NO 27, RT/RW 011/001, KEL : KEBON JERUK, KEC : KEBON JERUK, JAKARTA BARAT",
        "phone": "085212360718",
        "email": "robbyciput2023@!gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 3,
        "kecamatan": "KEBON JERUK",
        "kelurahan": "KEBON JERUK",
        "name": "ANWAR",
        "role": "3.0",
        "gender": "L",
        "dob": "JAKARTA, 28 JUNI 1994",
        "address": "JL. PANJANG KB JERUK, NO 47, RT/RW 007/010, KEL : KEBON JERUK, KEC : KEBON JERUK, JAKARTA BARAT",
        "phone": "082127079277",
        "email": "anwarkhonde@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "B"
      },
      {
        "no": 4,
        "kecamatan": "KEBON JERUK",
        "kelurahan": "KEBON JERUK",
        "name": "EKA PRASETYA",
        "role": "4.0",
        "gender": "L",
        "dob": "JAKARTA, 14 MEI 1980",
        "address": "KEBON JERUK, RT/RW 006/010, KEL : KEBON JERUK, KEC : KEBON JERUK, JAKARTA BARAT",
        "phone": "085326185185",
        "email": "eka14prasetya05@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 5,
        "kecamatan": "KEBON JERUK",
        "kelurahan": "KEBON JERUK",
        "name": "MUHAMMAD RIZQI FAHMI",
        "role": "5.0",
        "gender": "L",
        "dob": "JAKARTA, 3 MEI 2002",
        "address": "KEBON JERUK, NO 5, RT/RW 008/005, KEL : KEBON JERUK, KEC : KEBON JERUK, JAKARTA BARAT",
        "phone": "082240273440",
        "email": "muhammadrizqifahmi112@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 6,
        "kecamatan": "KEBON JERUK",
        "kelurahan": "KEBON JERUK",
        "name": "AHMAD GHIFARI",
        "role": "6.0",
        "gender": "L",
        "dob": "JAKARTA, 10 AGUSTUS 1997",
        "address": "JL. ANGSANA DALAM, NO 43, RT/RW 003/003, KEL : KEBON JERUK, KEC : KEBON JERUK, JAKARTA BARAT",
        "phone": "08993497924",
        "email": "ahmadghifari2015@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "A"
      },
      {
        "no": 7,
        "kecamatan": "KEBON JERUK",
        "kelurahan": "KEBON JERUK",
        "name": "CHIKO ARYAN",
        "role": "7.0",
        "gender": "L",
        "dob": "JAKARTA, 6 OKTOBER 2000",
        "address": "KOMP. DPR II/78, RT/RW 010/002, KEL : KEBON JERUK, KEC : KEBON JERUK, JAKARTA BARAT",
        "phone": "089677302960",
        "email": "aryanchiko@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "A"
      },
      {
        "no": 1,
        "kecamatan": "KEBON JERUK",
        "kelurahan": "DURI KEPA",
        "name": "KOMARUDDIN",
        "role": "1.0",
        "gender": "L",
        "dob": "JAKARTA, 23 SEPTEMBER 1978",
        "address": "KP. GUJI, JL. PATRA RAYA, RT/RW 002/002, KEL : DURI KEPA, KEC : KEBON JERUK, JAKARTA BARAT",
        "phone": "085257721644",
        "email": "komaruddin2022@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 2,
        "kecamatan": "KEBON JERUK",
        "kelurahan": "DURI KEPA",
        "name": "MUHAMMAD IRWAN",
        "role": "2.0",
        "gender": "L",
        "dob": "JAKARTA, 26 SEPTEMBER 1984",
        "address": "KP. GUJI, JL. PATRA RAYA, RT/RW 003/002, KEL : DURI KEPA, KEC : KEBON JERUK, JAKARTA BARAT",
        "phone": "01286518004",
        "email": "irwangboy82@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "B"
      },
      {
        "no": 3,
        "kecamatan": "KEBON JERUK",
        "kelurahan": "DURI KEPA",
        "name": "RIZKY ZAILANI",
        "role": "3.0",
        "gender": "L",
        "dob": "JAKARTA, 18 JUNI 1999",
        "address": "JL. DURI PERMAI, GG H. MASHUD, RT/RW 0013/007, KEL : DURI KEPA, KEC : KEBON JERUK, JAKARTA BARAT",
        "phone": "-",
        "email": "",
        "religion": "ISLAM",
        "occupation": "GURU",
        "blood_type": "-"
      },
      {
        "no": 4,
        "kecamatan": "KEBON JERUK",
        "kelurahan": "DURI KEPA",
        "name": "HOTIM",
        "role": "4.0",
        "gender": "L",
        "dob": "JAKARTA, 6 SEPTEMBER 1973",
        "address": "JL. SAHABAT BARU, NO 37, RT/RW 008/001, KEL : DURI KEPA, KEC : KEBON JERUK, JAKARTA BARAT",
        "phone": "081513765393",
        "email": "hotimtop@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "O"
      },
      {
        "no": 5,
        "kecamatan": "KEBON JERUK",
        "kelurahan": "DURI KEPA",
        "name": "AHMAD ROJALI",
        "role": "5.0",
        "gender": "L",
        "dob": "JAKARTA, 4 JUNI 1978",
        "address": "JL. JERUK NIPIS I, NO 44, RT/RW 007/007, KEL : DURI KEPA, KEC : KEBON JERUK, JAKARTA BARAT",
        "phone": "-",
        "email": "",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "O"
      },
      {
        "no": 6,
        "kecamatan": "KEBON JERUK",
        "kelurahan": "DURI KEPA",
        "name": "NAROWI",
        "role": "6.0",
        "gender": "L",
        "dob": "JAKARTA, 27 JUNI 1976",
        "address": "KP. BALI, GG MACAN, RT/RW 002/005, KEL : DURI KEPA, KEC : KEBON JERUK, JAKARTA BARAT",
        "phone": "081380360156",
        "email": "evinahrowi@gamil.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 7,
        "kecamatan": "KEBON JERUK",
        "kelurahan": "DURI KEPA",
        "name": "MUHBUHRO",
        "role": "7.0",
        "gender": "L",
        "dob": "LAMONGAN, 17 JUNI 1970",
        "address": "KP. BALI, NO 30G, RT/RW 007/005, KEL : DURI KEPA, KEC : KEBON JERUK, JAKARTA BARAT",
        "phone": "081213430634",
        "email": "muhbuhro123@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "B"
      },
      {
        "no": 1,
        "kecamatan": "KEBON JERUK",
        "kelurahan": "SUKABUMI SELATAN",
        "name": "SURYANTI",
        "role": "1.0",
        "gender": "P",
        "dob": "JAKARTA, 18 FEBRUARI 1979",
        "address": "KP. BARU, JL. PAHLAWAN, NO 30, RT/RW 004/004, KEL : SUKABUMI SELATAN, KEC : KEBON JERUK, JAKARTA BARAT",
        "phone": "081513330422",
        "email": "adealphard18@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 2,
        "kecamatan": "KEBON JERUK",
        "kelurahan": "SUKABUMI SELATAN",
        "name": "FAIRUZ ZABADI",
        "role": "2.0",
        "gender": "L",
        "dob": "JAKARTA, 24 MEI 1998",
        "address": "KP. BARU, RT/RW 011/004, KEL : SUKABUMI SELATAN, KEC : KEBON JERUK, JAKARTA BARAT",
        "phone": "083807198529",
        "email": "fairuzzabadi24@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 3,
        "kecamatan": "KEBON JERUK",
        "kelurahan": "SUKABUMI SELATAN",
        "name": "MUHAMAD IRGI FAHREGI",
        "role": "3.0",
        "gender": "L",
        "dob": "JAKARTA, 6 OKTOBER 2000",
        "address": "KP. BARU, RT/RW 007/004, KEL : SUKABUMI SELATAN, KEC : KEBON JERUK, JAKARTA BARAT",
        "phone": "087770565647",
        "email": "irgfhrzi@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 4,
        "kecamatan": "KEBON JERUK",
        "kelurahan": "SUKABUMI SELATAN",
        "name": "MUHAMMAD FAHRI",
        "role": "4.0",
        "gender": "L",
        "dob": "JAKARTA, 1 JANUARI 1994",
        "address": "KP. BARU, JL FF, NO 30, RT/RW 009/005, KEL : SUKABUMI SELATAN, KEC : KEBON JERUK, JAKARTA BARAT",
        "phone": "088801269193",
        "email": "muhammadvary1@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 5,
        "kecamatan": "KEBON JERUK",
        "kelurahan": "SUKABUMI SELATAN",
        "name": "EKO SETIYADI",
        "role": "5.0",
        "gender": "L",
        "dob": "JAKARTA, 21 DESEMBER 1979",
        "address": "KP. BARU, NO 31, RT/RW 006/007, KEL : SUKABUMI SELATAN, KEC : KEBON JERUK, JAKARTA BARAT",
        "phone": "089684270419",
        "email": "setiyadie3@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 6,
        "kecamatan": "KEBON JERUK",
        "kelurahan": "SUKABUMI SELATAN",
        "name": "TEDDY ARIYANTO",
        "role": "6.0",
        "gender": "L",
        "dob": "JAKARTA, 9 APRIL 1977",
        "address": "JL. PAHLAWAN, GG CC II, RT/RW 004/007, KEL : SUKABUMI SELATAN, KEC : KEBON JERUK, JAKARTA BARAT",
        "phone": "083870895891",
        "email": "teddyinyu@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "O"
      },
      {
        "no": 7,
        "kecamatan": "KEBON JERUK",
        "kelurahan": "SUKABUMI SELATAN",
        "name": "SUBHAN",
        "role": "7.0",
        "gender": "L",
        "dob": "JAKARTA, 8 FEBRUARI 1975",
        "address": "KP. BARU, RT/RW 005/003, KEL : SUKABUMI SELATAN, KEC : KEBON JERUK, JAKARTA BARAT",
        "phone": "089644774298",
        "email": "aansuphan483@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "AB"
      },
      {
        "no": 1,
        "kecamatan": "KEBON JERUK",
        "kelurahan": "SUKABUMI UTARA",
        "name": "NURMAYANTI",
        "role": "1.0",
        "gender": "P",
        "dob": "JAKARTA, 30 JANUARI 1970",
        "address": "JL. YAKUB, NO 36A, RT/RW 005/008, KEL : SUKABUMI UTARA, KEC : KEBON JERUK, JAKARTA BARAT",
        "phone": "081818753217",
        "email": "yanti25111969@gmail.com",
        "religion": "ISLAM",
        "occupation": "MENGURUS RUMAH TANGGA",
        "blood_type": "B"
      },
      {
        "no": 2,
        "kecamatan": "KEBON JERUK",
        "kelurahan": "SUKABUMI UTARA",
        "name": "ANDAYANIH",
        "role": "2.0",
        "gender": "P",
        "dob": "JAKARTA, 10 MEI 1976",
        "address": "JL. HUD II, NO 23, RT/RW 003/005, KEL : SUKABUMI UTARA, KEC : KEBON JERUK, JAKARTA BARAT",
        "phone": "085802759818",
        "email": "andayanih42@gnmail.com",
        "religion": "ISLAM",
        "occupation": "MENGURUS RUMAH TANGGA",
        "blood_type": "B"
      },
      {
        "no": 3,
        "kecamatan": "KEBON JERUK",
        "kelurahan": "SUKABUMI UTARA",
        "name": "ABDUL KARIM",
        "role": "3.0",
        "gender": "L",
        "dob": "JAKARTA, 12 MEI 1988",
        "address": "JL. AYUB, NO 39B, RT/RW 001/008, KEL : SUKABUMI UTARA, KEC : KEBON JERUK, JAKARTA BARAT",
        "phone": "081380006749",
        "email": "abdulkarim12655@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 4,
        "kecamatan": "KEBON JERUK",
        "kelurahan": "SUKABUMI UTARA",
        "name": "GELENT FATARAJAYA",
        "role": "4.0",
        "gender": "L",
        "dob": "JAKARTA, 22 JUNI 1983",
        "address": "JL. MADRASAH I, NO 5, RT/RW 009/009, KEL : SUKABUMI UTARA, KEC : KEBON JERUK, JAKARTA BARAT",
        "phone": "081297906868",
        "email": "gelent83@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "AB"
      },
      {
        "no": 5,
        "kecamatan": "KEBON JERUK",
        "kelurahan": "SUKABUMI UTARA",
        "name": "AHMAD JAUZI",
        "role": "5.0",
        "gender": "L",
        "dob": "JAKARTA, 19 JULI 2000",
        "address": "JL. SULAIMAN, NO 2A, RT/RW 002/003, KEL : SUKABUMI UTARA, KEC : KEBON JERUK, JAKARTA BARAT",
        "phone": "089643427496",
        "email": "jauzi662@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "A"
      },
      {
        "no": 6,
        "kecamatan": "KEBON JERUK",
        "kelurahan": "SUKABUMI UTARA",
        "name": "ARIEF BUDIMAN",
        "role": "6.0",
        "gender": "L",
        "dob": "JAKARTA, 3 OKTOBER 1992",
        "address": "GG, RAYONG, NO 41, RT/RW 014,009, KEL : SUKABUMI UTARA, KEC : KEBON JERUK, JAKARTA BARAT",
        "phone": "0818929456111",
        "email": "budimanarief31@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "AB"
      },
      {
        "no": 7,
        "kecamatan": "KEBON JERUK",
        "kelurahan": "SUKABUMI UTARA",
        "name": "ACHMAD RIDWAN",
        "role": "7.0",
        "gender": "L",
        "dob": "JAKARTA, 9 SEPTEMBER 1986",
        "address": "JL. QRISDOREN II, RT/RW 006/010, KEL : SUKABUMI UTARA, KEC : KEBON JERUK, JAKARTA BARAT",
        "phone": "081567987796",
        "email": "achmadridwan87@gmail.com",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "-"
      },
      {
        "no": 1,
        "kecamatan": "KEBON JERUK",
        "kelurahan": "KELAPA DUA",
        "name": "AHMAD FADILA",
        "role": "1.0",
        "gender": "L",
        "dob": "JAKARTA, 6 MARET 1988",
        "address": "JL. SASAK II, NO 23, RT/RW 004/002, KEL : KELAPA DUA, KEC : KEBON JERUK, JAKARTA BARAT",
        "phone": "083839933386",
        "email": "fadhilah.aifa@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "B"
      },
      {
        "no": 2,
        "kecamatan": "KEBON JERUK",
        "kelurahan": "KELAPA DUA",
        "name": "JEFFRY RUDOLF H",
        "role": "2.0",
        "gender": "L",
        "dob": "JAKARTA, 11 SEPTEMBER 1983",
        "address": "JL. POS PENGUMBEN, NO 50, RT/RW 001/006, KEL : KELAPA DUA, KEC : KEBON JERUK, JAKARTA BARAT",
        "phone": "081210128280",
        "email": "",
        "religion": "KRISTEN",
        "occupation": "WIRASWASTA",
        "blood_type": "A"
      },
      {
        "no": 3,
        "kecamatan": "KEBON JERUK",
        "kelurahan": "KELAPA DUA",
        "name": "KURNIA HASAN",
        "role": "3.0",
        "gender": "L",
        "dob": "JAKARTA, 21 APRIL 1980",
        "address": "JL. H. DAUD, RT/RW 002/006, KEL : KELAPA DUA, KEC : KEBON JERUK, JAKARTA BARAT",
        "phone": "085775458189",
        "email": "kurodugari21@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "AB"
      },
      {
        "no": 4,
        "kecamatan": "KEBON JERUK",
        "kelurahan": "KELAPA DUA",
        "name": "RUDY ZANUAR",
        "role": "4.0",
        "gender": "L",
        "dob": "JAKARTA, 1 MARET 1975",
        "address": "JL. H. RAISAN, NO 10, RT/RW 002,008, KEL : KELAPA DUA, KEC : KEBON JERUK, JAKARTA BARAT",
        "phone": "085797028939",
        "email": "bonebone9727@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 5,
        "kecamatan": "KEBON JERUK",
        "kelurahan": "KELAPA DUA",
        "name": "AHMAD HARIYANSYAH",
        "role": "5.0",
        "gender": "L",
        "dob": "JAKARTA, 25 APRIL 1968",
        "address": "JL. SASAK III, RT/RW 001/002, KEL : KELAPA DUA, KEC : KEBON JERUK, JAKARTA BARAT",
        "phone": "08128262647",
        "email": "yanzens1234@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 1,
        "kecamatan": "KEBON JERUK",
        "kelurahan": "KEDOYA UTARA",
        "name": "ABU BAKAR",
        "role": "1.0",
        "gender": "L",
        "dob": "JAKARTA, 6 OKTOBER 1977",
        "address": "PESING GARDEN, RT/RW 004/008, KEL :KEDOYA UTARA, KEC : KEBON JERUK, JAKARTA BARAT",
        "phone": "081270252183",
        "email": "abubakar03150k6@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 2,
        "kecamatan": "KEBON JERUK",
        "kelurahan": "KEDOYA UTARA",
        "name": "NOVIADI",
        "role": "2.0",
        "gender": "L",
        "dob": "JAKARTA, 29 NOVEMBER 1980",
        "address": "PESING GARDEN, RT/RW 003/008, KEL :KEDOYA UTARA, KEC : KEBON JERUK, JAKARTA BARAT",
        "phone": "087876823358",
        "email": "opibetawi1980@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 3,
        "kecamatan": "KEBON JERUK",
        "kelurahan": "KEDOYA UTARA",
        "name": "MATSANI",
        "role": "3.0",
        "gender": "L",
        "dob": "JAKARTA, 23 JUNI 1966",
        "address": "PESING KONENG, RT/RW 013/002, KEL :KEDOYA UTARA, KEC : KEBON JERUK, JAKARTA BARAT",
        "phone": "081585766310",
        "email": "matsanibonang13@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 4,
        "kecamatan": "KEBON JERUK",
        "kelurahan": "KEDOYA UTARA",
        "name": "EMMANUEL REZA P L",
        "role": "4.0",
        "gender": "L",
        "dob": "JAKARTA, 1 MARET 2000",
        "address": "JL. SMU 52, NO 24, RT/RW 003/006, KEL :KEDOYA UTARA, KEC : KEBON JERUK, JAKARTA BARAT",
        "phone": "081297412715",
        "email": "avelreza@gmail.com",
        "religion": "KATHOLIK",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 5,
        "kecamatan": "KEBON JERUK",
        "kelurahan": "KEDOYA UTARA",
        "name": "KHODIJAH",
        "role": "5.0",
        "gender": "P",
        "dob": "JAKARTA, 10 DESEMBER 1972",
        "address": "PESING GADOG, RT/RW 010/007, KEL :KEDOYA UTARA, KEC : KEBON JERUK, JAKARTA BARAT",
        "phone": "081290667889",
        "email": "kadeijah1012@gmail.com",
        "religion": "ISLAM",
        "occupation": "MENGURUS RUMAH TANGGA",
        "blood_type": "O"
      },
      {
        "no": 6,
        "kecamatan": "KEBON JERUK",
        "kelurahan": "KEDOYA UTARA",
        "name": "RACHMAD ARDIANSYAH B",
        "role": "6.0",
        "gender": "L",
        "dob": "JAKARTA, 30 APRIL 1997",
        "address": "GG. ASEM, RT/RW 002/006, KEL :KEDOYA UTARA, KEC : KEBON JERUK, JAKARTA BARAT",
        "phone": "085212252166",
        "email": "simamat03@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 7,
        "kecamatan": "KEBON JERUK",
        "kelurahan": "KEDOYA UTARA",
        "name": "HANDYKA FAJAR KUNCORO",
        "role": "7.0",
        "gender": "L",
        "dob": "JAKARTA, 12 JUNI 1999",
        "address": "JL. BHINEKA II, NO 16, RT/RW 008/004, KEL :KEDOYA UTARA, KEC : KEBON JERUK, JAKARTA BARAT",
        "phone": "085852418440",
        "email": "handykafajar99@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 1,
        "kecamatan": "KEBON JERUK",
        "kelurahan": "KEDOYA SELATAN",
        "name": "FAISAL",
        "role": "1.0",
        "gender": "L",
        "dob": "JAKARTA, 15 JULI 1977",
        "address": "JL. PALAPA III UJUNG, NO 48A, RT/RW 006/001, KEL : KEDOYA SELATAN, KEC : KEBON JERUK, JAKARTA BARAT",
        "phone": "081317516374",
        "email": "faisal4035a@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "-"
      },
      {
        "no": 2,
        "kecamatan": "KEBON JERUK",
        "kelurahan": "KEDOYA SELATAN",
        "name": "DUDUNG",
        "role": "2.0",
        "gender": "L",
        "dob": "JAKARTA, 12 MEI 1968",
        "address": "JL. KEDOYA PILAR II, NO 16, RT/RW 003/003, KEL : KEDOYA SELATAN, KEC : KEBON JERUK, JAKARTA BARAT",
        "phone": "085840059522",
        "email": "dudungfernandos68@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "O"
      },
      {
        "no": 3,
        "kecamatan": "KEBON JERUK",
        "kelurahan": "KEDOYA SELATAN",
        "name": "HERMAWATI",
        "role": "3.0",
        "gender": "P",
        "dob": "JAKARTA, 16 FEBRUARI 1982",
        "address": "JL. KEDOYA SELATAN, NO 42A, RT/RW 003/003, KEL : KEDOYA SELATAN, KEC : KEBON JERUK, JAKARTA BARAT",
        "phone": "085776057200",
        "email": "fkdmhermawati@gmail.com",
        "religion": "ISLAM",
        "occupation": "MENGURUS RUMAH TANGGA",
        "blood_type": "B"
      },
      {
        "no": 4,
        "kecamatan": "KEBON JERUK",
        "kelurahan": "KEDOYA SELATAN",
        "name": "M. SURURUDIN AFIF",
        "role": "4.0",
        "gender": "L",
        "dob": "JAKARTA, 20 FEBRUARI 1995",
        "address": "JL. ADHIKARYA, RT/RW 015/005, KEL : KEDOYA SELATAN, KEC : KEBON JERUK, JAKARTA BARAT",
        "phone": "081296248810",
        "email": "bangsoeroer@gmail.com",
        "religion": "ISLAM",
        "occupation": "KARYAWAN SWASTA",
        "blood_type": "AB"
      },
      {
        "no": 5,
        "kecamatan": "KEBON JERUK",
        "kelurahan": "KEDOYA SELATAN",
        "name": "LIA KUSUMAWATI",
        "role": "5.0",
        "gender": "P",
        "dob": "JAKARTA, 2 FEBRUARI 1984",
        "address": "JL. RAYA KEDOYA, RT/RW 003/003, KEL : KEDOYA SELATAN, KEC : KEBON JERUK, JAKARTA BARAT",
        "phone": "085777282178",
        "email": "liakusumawati2284@gmail.com",
        "religion": "ISLAM",
        "occupation": "MENGURUS RUMAH TANGGA",
        "blood_type": "O"
      },
      {
        "no": 6,
        "kecamatan": "KEBON JERUK",
        "kelurahan": "KEDOYA SELATAN",
        "name": "DARMINTO",
        "role": "6.0",
        "gender": "L",
        "dob": "KEBUMEN, 15 NOVEMBER 1979",
        "address": "JL. MANUNGGAL V, RT/RW 002/003, KEL : KEDOYA SELATAN, KEC : KEBON JERUK, JAKARTA BARAT",
        "phone": "-",
        "email": "",
        "religion": "ISLAM",
        "occupation": "WIRASWASTA",
        "blood_type": "-"
      }
    ];

    // Render FKDM Member Cards
    function renderFkdmCards(members) {
      const grid = document.getElementById('fkdm-grid');
      const countEl = document.getElementById('fkdm-count');
      if (!grid) return;

      grid.innerHTML = '';
      countEl.innerText = `${members.length} Anggota`;

      if (members.length === 0) {
        grid.innerHTML = `
          <div class="col-span-full bg-white border border-slate-200/80 p-12 rounded-3xl text-center shadow-sm">
            <i class="fa-solid fa-user-slash text-3xl text-slate-300 mb-3"></i>
            <h4 class="font-bold text-slate-700">Tidak ada hasil ditemukan</h4>
            <p class="text-xs text-slate-400 mt-1">Coba masukkan kata kunci pencarian yang lain.</p>
          </div>
        `;
        return;
      }

      const maxDisplay = window.fkdmDisplayLimit || 48;
      const displayMembers = members.slice(0, maxDisplay);

      displayMembers.forEach(m => {
        const nameParts = m.name.replace(/(H\.|Pdt\.|Dr\.|Drs\.|S\.Sos|S\.Ag|SH\.|MH|M\.Sos|Js\.)/g, '').trim().split(' ');
        const initials = nameParts.length > 1
          ? (nameParts[0].charAt(0) + nameParts[1].charAt(0)).toUpperCase()
          : nameParts[0].charAt(0).toUpperCase();

        const roleColor = getRoleBadgeColor(m.role);
        const relColor = getReligionBadgeColor(m.religion);

        const hasPhone = m.phone && m.phone !== '-';
        const rawPhone = hasPhone ? m.phone.replace(/[^0-9]/g, '') : '';
        const waPhone = rawPhone.startsWith('0') ? '62' + rawPhone.slice(1) : rawPhone;
        const contactBtn = hasPhone
          ? `<a href="https://wa.me/${waPhone}" target="_blank" class="flex items-center justify-center space-x-1 px-4 py-2 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-700 rounded-xl text-xs font-semibold transition duration-150">
              <i class="fa-brands fa-whatsapp text-sm"></i>
              <span>Hubungi</span>
             </a>`
          : `<span class="flex items-center justify-center space-x-1 px-4 py-2 bg-slate-100 text-slate-400 border border-slate-200 rounded-xl text-xs font-semibold select-none cursor-not-allowed">
              <i class="fa-solid fa-phone-slash"></i>
              <span>Tidak Ada Kontak</span>
             </span>`;

        const locationText = m.kelurahan !== 'TINGKAT KOTA'
          ? `${m.kelurahan} (${m.kecamatan})`
          : `TINGKAT KOTA`;

        const cardHtml = `
          <div class="bg-white border border-slate-200/80 p-5 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-300 transition duration-200 flex flex-col justify-between group">
            <div>
              <div class="flex justify-between items-start mb-4">
                <div class="w-10 h-10 rounded-xl bg-blue-50 text-blue-800 border border-blue-100 flex items-center justify-center font-bold text-sm tracking-wide shadow-inner">
                  ${initials}
                </div>
                <div class="flex flex-col items-end space-y-1.5">
                  <span class="px-2.5 py-0.5 border rounded-full text-[10px] uppercase font-semibold ${roleColor}">${m.role}</span>
                  <span class="px-2 py-0.5 border rounded-full text-[9px] uppercase font-medium ${relColor}">${m.religion}</span>
                </div>
              </div>

              <h4 class="font-bold text-slate-800 text-sm mb-1 group-hover:text-blue-900 transition-colors">${m.name}</h4>
              <span class="text-[10px] font-semibold text-slate-400 font-mono tracking-wider block mb-3 uppercase">
                <i class="fa-solid fa-location-crosshairs mr-1"></i>${locationText}
              </span>
              
              <div class="space-y-2 mt-4 pt-4 border-t border-slate-100">
                <div class="flex items-start text-slate-500 text-[11px] leading-relaxed">
                  <i class="fa-solid fa-location-dot mt-0.5 mr-2 text-slate-400"></i>
                  <span>${m.address}</span>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-between mt-5 pt-3 border-t border-slate-100">
              <div class="flex flex-col">
                <span class="text-[9px] text-slate-400 font-mono">KONTAK</span>
                <span class="text-xs font-semibold text-slate-700 font-mono">${hasPhone ? m.phone : '-'}</span>
              </div>
              ${contactBtn}
            </div>
          </div>
        `;
        grid.innerHTML += cardHtml;
      });

      if (members.length > maxDisplay) {
        const loadMoreDiv = document.createElement('div');
        loadMoreDiv.className = 'col-span-full flex justify-center mt-6';
        loadMoreDiv.innerHTML = `
          <button onclick="loadMoreFkdm()" class="px-8 py-3 bg-blue-900 text-white rounded-xl text-sm font-semibold hover:bg-blue-800 shadow-md transition duration-150">
            Tampilkan Lebih Banyak (${members.length - maxDisplay} Anggota Tersisa)
          </button>
        `;
        grid.appendChild(loadMoreDiv);
      }
    }

    // Load More items
    function loadMoreFkdm() {
      window.fkdmDisplayLimit = (window.fkdmDisplayLimit || 48) + 48;
      filterFkdm(false);
    }

    // Filter FKDM Members based on inputs
    function filterFkdm(resetPagination = true) {
      if (resetPagination) {
        window.fkdmDisplayLimit = 48;
      }

      const searchVal = document.getElementById('fkdm-search').value.toLowerCase().trim();
      const kecamatanVal = document.getElementById('fkdm-kecamatan-select').value;

      let filtered = fkdmMembers;

      if (kecamatanVal !== 'ALL') {
        filtered = filtered.filter(m => m.kecamatan === kecamatanVal);
      }

      if (searchVal) {
        filtered = filtered.filter(m =>
          m.name.toLowerCase().includes(searchVal) ||
          m.role.toLowerCase().includes(searchVal) ||
          m.religion.toLowerCase().includes(searchVal) ||
          m.address.toLowerCase().includes(searchVal) ||
          m.kelurahan.toLowerCase().includes(searchVal) ||
          m.phone.includes(searchVal)
        );
      }

      renderFkdmCards(filtered);
    }
    
    // Paskibraka 2025 Database
    const paskibraMembers = [
      {
            "no": 1,
            "nama": "NOEL GIOVANY ADVENTUS SIRINGORINGO",
            "sekolah": "UNSUR",
            "kategori": "Putra"
      },
      {
            "no": 2,
            "nama": "FARID JATNIKO",
            "sekolah": "SMAN 101 JAKARTA",
            "kategori": "Putra"
      },
      {
            "no": 3,
            "nama": "VHATARSYAH AL-AZIS",
            "sekolah": "MAN 1 JAKARTA",
            "kategori": "Putra"
      },
      {
            "no": 4,
            "nama": "MUHAMMAD AFDAN ALDRIKO",
            "sekolah": "SMKN 13 JAKARTA",
            "kategori": "Putra"
      },
      {
            "no": 5,
            "nama": "AKMAL FAIRUZ",
            "sekolah": "SMKS ERA PEMBANGUNAN JAKARTA",
            "kategori": "Putra"
      },
      {
            "no": 6,
            "nama": "TRISTAN RUNAKO DIMITRI",
            "sekolah": "SMKN 45 JAKARTA",
            "kategori": "Putra"
      },
      {
            "no": 7,
            "nama": "I KETUT FEBRI DWI ARYA WIGUNA",
            "sekolah": "SMAS YADIKA 1 JAKARTA",
            "kategori": "Putra"
      },
      {
            "no": 8,
            "nama": "MARCEL SYAHPUTRA",
            "sekolah": "SMAN 23 JAKARTA",
            "kategori": "Putra"
      },
      {
            "no": 9,
            "nama": "RICHO PANJI DWI PUTRA",
            "sekolah": "SMAS YADIKA 2 JAKARTA",
            "kategori": "Putra"
      },
      {
            "no": 10,
            "nama": "DWINOYA ILHAM PANDUTA",
            "sekolah": "MA MANBA'UL ULUM JAKARTA",
            "kategori": "Putra"
      },
      {
            "no": 11,
            "nama": "ALFLINO TONDI MANULLANG",
            "sekolah": "SMAN 95 JAKARTA",
            "kategori": "Putra"
      },
      {
            "no": 12,
            "nama": "AKSA VRIZY MAULI SAFIQ",
            "sekolah": "SMAN 96 JAKARTA",
            "kategori": "Putra"
      },
      {
            "no": 13,
            "nama": "FABIAN AL FAYYADH BANU FATRIA",
            "sekolah": "SMAN 17 JAKARTA",
            "kategori": "Putra"
      },
      {
            "no": 14,
            "nama": "VIRGA DAMA WICAKSANA",
            "sekolah": "SMAS YADIKA 2 JAKARTA",
            "kategori": "Putra"
      },
      {
            "no": 15,
            "nama": "FABIAN PUTRA AGUSTAF",
            "sekolah": "SMK MUHAMMADIYAH 4 JAKARTA",
            "kategori": "Putra"
      },
      {
            "no": 16,
            "nama": "MUHAMMAD FAIZ ABADAN",
            "sekolah": "SMAN 112 JAKARTA",
            "kategori": "Putra"
      },
      {
            "no": 17,
            "nama": "FITRAMA BIAN PURTORO",
            "sekolah": "SMKS ISLAM ASSADATUL ABADIYAH JAKARTA",
            "kategori": "Putra"
      },
      {
            "no": 18,
            "nama": "GABRIEL CHRISTOFEL PURBA",
            "sekolah": "SMAN 33 JAKARTA",
            "kategori": "Putra"
      },
      {
            "no": 19,
            "nama": "RINDANG NATANAEL",
            "sekolah": "SMA KRISTOFORUS 2 JAKARTA",
            "kategori": "Putra"
      },
      {
            "no": 20,
            "nama": "AIRLANGGA PARAMADIWA PURNOMO",
            "sekolah": "SMA 101 JAKARTA",
            "kategori": "Putra"
      },
      {
            "no": 21,
            "nama": "LUCAS KEVIN TIBUDO PANJAITAN",
            "sekolah": "SMAN 78 JAKARTA",
            "kategori": "Putra"
      },
      {
            "no": 22,
            "nama": "HANDI NUGRAHA ALHAFIDZ",
            "sekolah": "SMAN 19 JAKARTA",
            "kategori": "Putra"
      },
      {
            "no": 23,
            "nama": "DZAKI LUTHFI JULIANTO",
            "sekolah": "SMAN 95 JAKARTA",
            "kategori": "Putra"
      },
      {
            "no": 24,
            "nama": "TALITA NAZWA ANNURUSSAMAH",
            "sekolah": "SMKN 45 JAKARTA",
            "kategori": "Putri"
      },
      {
            "no": 25,
            "nama": "CHELSY JULIA SAFITRI",
            "sekolah": "SMKN 45 JAKARTA",
            "kategori": "Putri"
      },
      {
            "no": 26,
            "nama": "JIHAN NUTRININGSEH",
            "sekolah": "SMAN 2 JAKARTA",
            "kategori": "Putri"
      },
      {
            "no": 27,
            "nama": "ANINDYA GISSELA SITORUS",
            "sekolah": "SMAS YADIKA 2 JAKARTA",
            "kategori": "Putri"
      },
      {
            "no": 28,
            "nama": "RIVANA PERMATA ZUNIANTY",
            "sekolah": "SMKN 45 JAKARTA",
            "kategori": "Putri"
      },
      {
            "no": 29,
            "nama": "CHARISSA AURELIA PUTRI TAMBUNAN",
            "sekolah": "SMA KATOLIK SANG TIMUR JAKARTA",
            "kategori": "Putri"
      },
      {
            "no": 30,
            "nama": "PRISKA ANGELINA",
            "sekolah": "SMAN 78 JAKARTA",
            "kategori": "Putri"
      },
      {
            "no": 31,
            "nama": "ADELLA JULYADINATA",
            "sekolah": "SMAN 112 JAKARTA",
            "kategori": "Putri"
      },
      {
            "no": 32,
            "nama": "CALLISTA KEIZA DIVI SUTANTO",
            "sekolah": "SMAN 16 JAKARTA",
            "kategori": "Putri"
      },
      {
            "no": 33,
            "nama": "KEITA ALMAIDAH KOLOAY",
            "sekolah": "SMAN 17 JAKARTA",
            "kategori": "Putri"
      },
      {
            "no": 34,
            "nama": "LARASATI KAMALIYAH",
            "sekolah": "SMAN 95 JAKARTA",
            "kategori": "Putri"
      },
      {
            "no": 35,
            "nama": "BILQIS SYA'BANI NADZILA",
            "sekolah": "MAN 10 JAKARTA",
            "kategori": "Putri"
      },
      {
            "no": 36,
            "nama": "SALSABILA AZHARA PUTRI RIFA",
            "sekolah": "MAN 10 JAKARTA",
            "kategori": "Putri"
      },
      {
            "no": 37,
            "nama": "KHAYLA OCTAVIA PUTRI",
            "sekolah": "MAN 10 JAKARTA",
            "kategori": "Putri"
      },
      {
            "no": 38,
            "nama": "SANY ARTIKA PUTRI",
            "sekolah": "SMKN 13 JAKARTA",
            "kategori": "Putri"
      },
      {
            "no": 39,
            "nama": "RAISYA NOERKAMILA",
            "sekolah": "SMKN 73 JAKARTA",
            "kategori": "Putri"
      },
      {
            "no": 40,
            "nama": "SYIFA CARISSA",
            "sekolah": "SMAN 23 JAKARTA",
            "kategori": "Putri"
      },
      {
            "no": 41,
            "nama": "ENDANG PRATIWI RAKHMAWATI",
            "sekolah": "SMAN 95 JAKARTA",
            "kategori": "Putri"
      },
      {
            "no": 42,
            "nama": "SHOFI CAHAYANI SUKANDI",
            "sekolah": "SMAN 2 JAKARTA",
            "kategori": "Putri"
      }
];

    let currentPaskibraCategory = 'semua';
    let currentPaskibraView = 'grid';

    function initPaskibraFilters() {
      const select = document.getElementById('paskibra-school-filter');
      if (!select) return;
      const schools = [...new Set(paskibraMembers.map(m => m.sekolah.trim()))].sort();
      select.innerHTML = '<option value="semua">Semua Sekolah / Unsur</option>';
      schools.forEach(sch => {
        select.innerHTML += `<option value="${sch}">${sch}</option>`;
      });

      // Update stat counters
      const totalEl = document.getElementById('paskibra-stat-total');
      const putraEl = document.getElementById('paskibra-stat-putra');
      const putriEl = document.getElementById('paskibra-stat-putri');
      const sekolahEl = document.getElementById('paskibra-stat-sekolah');
      
      if (totalEl) totalEl.innerText = paskibraMembers.length;
      if (putraEl) putraEl.innerText = paskibraMembers.filter(m => m.kategori === 'Putra').length;
      if (putriEl) putriEl.innerText = paskibraMembers.filter(m => m.kategori === 'Putri').length;
      if (sekolahEl) sekolahEl.innerText = schools.length;
    }

    function setPaskibraCategory(cat) {
      currentPaskibraCategory = cat;
      document.querySelectorAll('.paskib-cat-btn').forEach(btn => {
        btn.className = "paskib-cat-btn px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-400 hover:text-white transition-all";
      });
      const activeBtn = document.getElementById('paskib-cat-' + cat);
      if (activeBtn) {
        activeBtn.className = "paskib-cat-btn px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all bg-gradient-to-r from-red-600 to-red-500 text-white shadow-sm";
      }
      filterPaskibra();
    }

    function setPaskibraView(viewMode) {
      currentPaskibraView = viewMode;
      const gridEl = document.getElementById('paskibra-grid');
      const tableEl = document.getElementById('paskibra-table-container');
      const btnGrid = document.getElementById('paskib-view-grid');
      const btnTable = document.getElementById('paskib-view-table');

      if (viewMode === 'grid') {
        gridEl.classList.remove('hidden');
        tableEl.classList.add('hidden');
        btnGrid.className = "p-2 rounded-lg text-white bg-slate-700 transition";
        btnTable.className = "p-2 rounded-lg text-slate-400 hover:text-white transition";
      } else {
        gridEl.classList.add('hidden');
        tableEl.classList.remove('hidden');
        btnGrid.className = "p-2 rounded-lg text-slate-400 hover:text-white transition";
        btnTable.className = "p-2 rounded-lg text-white bg-slate-700 transition";
      }
    }

    function renderPaskibraCards(members) {
      const grid = document.getElementById('paskibra-grid');
      const tbody = document.getElementById('paskibra-table-body');
      const countEl = document.getElementById('paskibra-count');
      if (!grid) return;

      if (countEl) countEl.innerText = `${members.length} Anggota`;

      if (members.length === 0) {
        const emptyHtml = `
          <div class="col-span-full bg-slate-900/80 border border-slate-700/60 p-12 rounded-3xl text-center shadow-sm">
            <i class="fa-solid fa-user-slash text-3xl text-slate-500 mb-3"></i>
            <h4 class="font-bold text-slate-300 text-sm">Tidak ada anggota Paskibraka ditemukan</h4>
            <p class="text-xs text-slate-500 mt-1">Coba sesuaikan kata kunci pencarian atau filter sekolah/kategori.</p>
          </div>
        `;
        grid.innerHTML = emptyHtml;
        if (tbody) tbody.innerHTML = `<tr><td colspan="6" class="py-8 text-center text-slate-400">${emptyHtml}</td></tr>`;
        return;
      }

      // Render Grid Cards
      let gridHtml = '';
      members.forEach(m => {
        const nameParts = m.nama.trim().split(' ');
        const initials = nameParts.length > 1
          ? (nameParts[0].charAt(0) + nameParts[1].charAt(0)).toUpperCase()
          : nameParts[0].charAt(0).toUpperCase();

        const isPutra = m.kategori === 'Putra';
        const avatarBg = isPutra
          ? 'bg-blue-500/10 text-blue-400 border-blue-500/30'
          : 'bg-pink-500/10 text-pink-400 border-pink-500/30';
        const tagBg = isPutra
          ? 'bg-blue-500/10 text-blue-400 border-blue-500/30'
          : 'bg-pink-500/10 text-pink-400 border-pink-500/30';
        const icon = isPutra ? 'fa-mars' : 'fa-venus';

        gridHtml += `
          <div class="bg-slate-900/90 border border-slate-700/60 hover:border-red-500/50 p-4 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between group backdrop-blur-sm">
            <div>
              <div class="flex items-start justify-between gap-2 mb-3">
                <div class="w-10 h-10 rounded-xl ${avatarBg} border flex items-center justify-center font-bold font-mono text-sm tracking-wide shadow-inner">
                  ${initials}
                </div>
                <div class="flex flex-col items-end gap-1">
                  <span class="px-2 py-0.5 border ${tagBg} rounded-full text-[10px] uppercase font-mono font-semibold flex items-center gap-1">
                    <i class="fa-solid ${icon}"></i> ${m.kategori}
                  </span>
                  <span class="text-[10px] font-mono text-slate-500">No. ${m.no}</span>
                </div>
              </div>
              
              <h4 class="font-bold text-white text-sm mb-1.5 group-hover:text-red-400 transition-colors leading-snug">
                ${m.nama}
              </h4>
              
              <div class="flex items-center text-xs text-slate-400 space-x-1.5 mb-3">
                <i class="fa-solid fa-school text-slate-500 text-[11px] shrink-0"></i>
                <span class="line-clamp-2 leading-relaxed text-[11px]">${m.sekolah}</span>
              </div>
            </div>

            <div class="pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span class="flex items-center space-x-1">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Capaska 2025</span>
              </span>
              <span class="text-amber-400 font-semibold">Jakbar</span>
            </div>
          </div>
        `;
      });
      grid.innerHTML = gridHtml;

      // Render Table Body
      if (tbody) {
        let tableHtml = '';
        members.forEach(m => {
          const isPutra = m.kategori === 'Putra';
          const badgeColor = isPutra
            ? 'bg-blue-500/10 text-blue-400 border-blue-500/30'
            : 'bg-pink-500/10 text-pink-400 border-pink-500/30';
          
          tableHtml += `
            <tr class="hover:bg-slate-800/50 transition duration-150">
              <td class="py-3 px-4 text-center font-mono font-bold text-slate-400">${m.no}</td>
              <td class="py-3 px-4 font-semibold text-white">${m.nama}</td>
              <td class="py-3 px-4 text-slate-300">${m.sekolah}</td>
              <td class="py-3 px-4 text-center">
                <span class="inline-flex items-center gap-1 px-2.5 py-0.5 border ${badgeColor} rounded-full text-[10px] font-mono font-semibold">
                  <i class="fa-solid ${isPutra ? 'fa-mars' : 'fa-venus'}"></i> ${m.kategori}
                </span>
              </td>
              <td class="py-3 px-4 text-center font-mono text-amber-400">2025</td>
              <td class="py-3 px-4 text-center">
                <span class="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-md text-[10px] font-mono">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Aktif
                </span>
              </td>
            </tr>
          `;
        });
        tbody.innerHTML = tableHtml;
      }
    }

    function filterPaskibra() {
      const searchVal = document.getElementById('paskibra-search')?.value.toLowerCase() || '';
      const schoolVal = document.getElementById('paskibra-school-filter')?.value || 'semua';

      const filtered = paskibraMembers.filter(m => {
        const matchSearch = m.nama.toLowerCase().includes(searchVal) || m.sekolah.toLowerCase().includes(searchVal);
        const matchCategory = currentPaskibraCategory === 'semua' || m.kategori === currentPaskibraCategory;
        const matchSchool = schoolVal === 'semua' || m.sekolah.trim() === schoolVal;
        return matchSearch && matchCategory && matchSchool;
      });

      renderPaskibraCards(filtered);
    }


    
    // DPRD Members Database 2024
    const dprdMembers = [
      {
            "no": 1,
            "nama": "Hj. Solikhah, S.Sos.I.",
            "partai": "Partai Keadilan Sejahtera",
            "singkatan": "PKS",
            "dapil": "Dapil 9",
            "wilayah": "Kec. Cengkareng, Kalideres, Tambora"
      },
      {
            "no": 2,
            "nama": "Lauw Siegvrieda",
            "partai": "Partai Demokrasi Indonesia Perjuangan",
            "singkatan": "PDI Perjuangan",
            "dapil": "Dapil 9",
            "wilayah": "Kec. Cengkareng, Kalideres, Tambora"
      },
      {
            "no": 3,
            "nama": "Hilda Kusuma Dewi",
            "partai": "Partai Demokrasi Indonesia Perjuangan",
            "singkatan": "PDI Perjuangan",
            "dapil": "Dapil 9",
            "wilayah": "Kec. Cengkareng, Kalideres, Tambora"
      },
      {
            "no": 4,
            "nama": "Inggard Joshua, S.E.",
            "partai": "Partai Gerindra",
            "singkatan": "Gerindra",
            "dapil": "Dapil 9",
            "wilayah": "Kec. Cengkareng, Kalideres, Tambora"
      },
      {
            "no": 5,
            "nama": "Hj. Rany Mauliani",
            "partai": "Partai Gerindra",
            "singkatan": "Gerindra",
            "dapil": "Dapil 9",
            "wilayah": "Kec. Cengkareng, Kalideres, Tambora"
      },
      {
            "no": 6,
            "nama": "Gias Kumari Putra, S.H.",
            "partai": "Partai NasDem",
            "singkatan": "NasDem",
            "dapil": "Dapil 9",
            "wilayah": "Kec. Cengkareng, Kalideres, Tambora"
      },
      {
            "no": 7,
            "nama": "Andri Santosa",
            "partai": "Partai Golkar",
            "singkatan": "Golkar",
            "dapil": "Dapil 9",
            "wilayah": "Kec. Cengkareng, Kalideres, Tambora"
      },
      {
            "no": 8,
            "nama": "H. Ahmad Ruslan, S.H.",
            "partai": "Partai Kebangkitan Bangsa",
            "singkatan": "PKB",
            "dapil": "Dapil 9",
            "wilayah": "Kec. Cengkareng, Kalideres, Tambora"
      },
      {
            "no": 9,
            "nama": "Lukmanul Hakim, S.E.",
            "partai": "Partai Amanat Nasional",
            "singkatan": "PAN",
            "dapil": "Dapil 9",
            "wilayah": "Kec. Cengkareng, Kalideres, Tambora"
      },
      {
            "no": 10,
            "nama": "Nur Afni Sajim, S.E.",
            "partai": "Partai Demokrat",
            "singkatan": "Demokrat",
            "dapil": "Dapil 9",
            "wilayah": "Kec. Cengkareng, Kalideres, Tambora"
      },
      {
            "no": 11,
            "nama": "William Aditya Sarana",
            "partai": "Partai Solidaritas Indonesia",
            "singkatan": "PSI",
            "dapil": "Dapil 9",
            "wilayah": "Kec. Cengkareng, Kalideres, Tambora"
      },
      {
            "no": 12,
            "nama": "H. Dina Masyusin, S.H.",
            "partai": "Partai Perindo",
            "singkatan": "Perindo",
            "dapil": "Dapil 9",
            "wilayah": "Kec. Cengkareng, Kalideres, Tambora"
      },
      {
            "no": 13,
            "nama": "H. Abdul Aziz, S.Kom., S.Si.",
            "partai": "Partai Keadilan Sejahtera",
            "singkatan": "PKS",
            "dapil": "Dapil 10",
            "wilayah": "Kec. Grogol Petamburan, Taman Sari, Kebon Jeruk, Palmerah, Kembangan"
      },
      {
            "no": 14,
            "nama": "Hj. Inad Luciawaty, S.E.",
            "partai": "Partai Keadilan Sejahtera",
            "singkatan": "PKS",
            "dapil": "Dapil 10",
            "wilayah": "Kec. Grogol Petamburan, Taman Sari, Kebon Jeruk, Palmerah, Kembangan"
      },
      {
            "no": 15,
            "nama": "Ima Mahdiah",
            "partai": "Partai Demokrasi Indonesia Perjuangan",
            "singkatan": "PDI Perjuangan",
            "dapil": "Dapil 10",
            "wilayah": "Kec. Grogol Petamburan, Taman Sari, Kebon Jeruk, Palmerah, Kembangan"
      },
      {
            "no": 16,
            "nama": "Hardiyanto Kenneth, S.H., M.H., M.Si.",
            "partai": "Partai Demokrasi Indonesia Perjuangan",
            "singkatan": "PDI Perjuangan",
            "dapil": "Dapil 10",
            "wilayah": "Kec. Grogol Petamburan, Taman Sari, Kebon Jeruk, Palmerah, Kembangan"
      },
      {
            "no": 17,
            "nama": "Yudha Permana",
            "partai": "Partai Gerindra",
            "singkatan": "Gerindra",
            "dapil": "Dapil 10",
            "wilayah": "Kec. Grogol Petamburan, Taman Sari, Kebon Jeruk, Palmerah, Kembangan"
      },
      {
            "no": 18,
            "nama": "Hj. Jamilah Abdul Gani, S.H., M.Kn.",
            "partai": "Partai Gerindra",
            "singkatan": "Gerindra",
            "dapil": "Dapil 10",
            "wilayah": "Kec. Grogol Petamburan, Taman Sari, Kebon Jeruk, Palmerah, Kembangan"
      },
      {
            "no": 19,
            "nama": "Jupiter, S.E., M.M.",
            "partai": "Partai NasDem",
            "singkatan": "NasDem",
            "dapil": "Dapil 10",
            "wilayah": "Kec. Grogol Petamburan, Taman Sari, Kebon Jeruk, Palmerah, Kembangan"
      },
      {
            "no": 20,
            "nama": "Syafi Fabio Djohan, S.E., M.M",
            "partai": "Partai Golkar",
            "singkatan": "Golkar",
            "dapil": "Dapil 10",
            "wilayah": "Kec. Grogol Petamburan, Taman Sari, Kebon Jeruk, Palmerah, Kembangan"
      },
      {
            "no": 21,
            "nama": "Uwais El Qoroni",
            "partai": "Partai Kebangkitan Bangsa",
            "singkatan": "PKB",
            "dapil": "Dapil 10",
            "wilayah": "Kec. Grogol Petamburan, Taman Sari, Kebon Jeruk, Palmerah, Kembangan"
      },
      {
            "no": 22,
            "nama": "Husen, S.H.",
            "partai": "Partai Amanat Nasional",
            "singkatan": "PAN",
            "dapil": "Dapil 10",
            "wilayah": "Kec. Grogol Petamburan, Taman Sari, Kebon Jeruk, Palmerah, Kembangan"
      },
      {
            "no": 23,
            "nama": "Wita Susilowaty, S.I.Kom., M.Kom",
            "partai": "Partai Demokrat",
            "singkatan": "Demokrat",
            "dapil": "Dapil 10",
            "wilayah": "Kec. Grogol Petamburan, Taman Sari, Kebon Jeruk, Palmerah, Kembangan"
      },
      {
            "no": 24,
            "nama": "Kevin Wu",
            "partai": "Partai Solidaritas Indonesia",
            "singkatan": "PSI",
            "dapil": "Dapil 10",
            "wilayah": "Kec. Grogol Petamburan, Taman Sari, Kebon Jeruk, Palmerah, Kembangan"
      }
];

    let currentDprdDapil = 'semua';
    let currentDprdView = 'grid';

    function getPartyStyle(singkatan) {
      switch (singkatan) {
        case 'PKS':
          return { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/30', badge: 'bg-amber-500/20 text-amber-300 border-amber-500/40' };
        case 'PDI Perjuangan':
          return { bg: 'bg-red-500/10', text: 'text-red-400', border: 'border-red-500/30', badge: 'bg-red-500/20 text-red-300 border-red-500/40' };
        case 'Gerindra':
          return { bg: 'bg-yellow-600/10', text: 'text-yellow-400', border: 'border-yellow-600/30', badge: 'bg-yellow-600/20 text-yellow-300 border-yellow-600/40' };
        case 'NasDem':
          return { bg: 'bg-blue-600/10', text: 'text-blue-300', border: 'border-blue-600/30', badge: 'bg-blue-600/20 text-blue-200 border-blue-600/40' };
        case 'Golkar':
          return { bg: 'bg-yellow-400/10', text: 'text-yellow-300', border: 'border-yellow-400/30', badge: 'bg-yellow-400/20 text-yellow-200 border-yellow-400/40' };
        case 'PKB':
          return { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/30', badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' };
        case 'PAN':
          return { bg: 'bg-sky-500/10', text: 'text-sky-400', border: 'border-sky-500/30', badge: 'bg-sky-500/20 text-sky-300 border-sky-500/40' };
        case 'Demokrat':
          return { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/30', badge: 'bg-blue-500/20 text-blue-300 border-blue-500/40' };
        case 'PSI':
          return { bg: 'bg-rose-500/10', text: 'text-rose-400', border: 'border-rose-500/30', badge: 'bg-rose-500/20 text-rose-300 border-rose-500/40' };
        case 'Perindo':
          return { bg: 'bg-cyan-500/10', text: 'text-cyan-400', border: 'border-cyan-500/30', badge: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40' };
        default:
          return { bg: 'bg-slate-500/10', text: 'text-slate-300', border: 'border-slate-500/30', badge: 'bg-slate-500/20 text-slate-300 border-slate-500/40' };
      }
    }

    function initDprdFilters() {
      const select = document.getElementById('dprd-party-filter');
      if (!select) return;
      const parties = [...new Set(dprdMembers.map(m => m.singkatan))].sort();
      select.innerHTML = '<option value="semua">Semua Partai Politik</option>';
      parties.forEach(p => {
        select.innerHTML += `<option value="${p}">${p}</option>`;
      });

      // Update stat counters
      const totalEl = document.getElementById('dprd-stat-total');
      const d9El = document.getElementById('dprd-stat-dapil9');
      const d10El = document.getElementById('dprd-stat-dapil10');
      const partaiEl = document.getElementById('dprd-stat-partai');
      
      if (totalEl) totalEl.innerText = dprdMembers.length;
      if (d9El) d9El.innerText = dprdMembers.filter(m => m.dapil === 'Dapil 9').length;
      if (d10El) d10El.innerText = dprdMembers.filter(m => m.dapil === 'Dapil 10').length;
      if (partaiEl) partaiEl.innerText = parties.length;
    }

    function setDprdDapil(dapilVal) {
      currentDprdDapil = dapilVal;
      document.querySelectorAll('.dprd-dapil-btn').forEach(btn => {
        btn.className = "dprd-dapil-btn px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-400 hover:text-white transition-all";
      });
      const activeBtn = document.getElementById('dprd-dapil-' + dapilVal);
      if (activeBtn) {
        activeBtn.className = "dprd-dapil-btn px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-sm";
      }
      filterDprd();
    }

    function setDprdView(viewMode) {
      currentDprdView = viewMode;
      const gridEl = document.getElementById('dprd-grid');
      const tableEl = document.getElementById('dprd-table-container');
      const btnGrid = document.getElementById('dprd-view-grid');
      const btnTable = document.getElementById('dprd-view-table');

      if (viewMode === 'grid') {
        gridEl.classList.remove('hidden');
        tableEl.classList.add('hidden');
        btnGrid.className = "p-2 rounded-lg text-white bg-slate-700 transition";
        btnTable.className = "p-2 rounded-lg text-slate-400 hover:text-white transition";
      } else {
        gridEl.classList.add('hidden');
        tableEl.classList.remove('hidden');
        btnGrid.className = "p-2 rounded-lg text-slate-400 hover:text-white transition";
        btnTable.className = "p-2 rounded-lg text-white bg-slate-700 transition";
      }
    }

    function renderDprdCards(members) {
      const grid = document.getElementById('dprd-grid');
      const tbody = document.getElementById('dprd-table-body');
      const countEl = document.getElementById('dprd-count');
      if (!grid) return;

      if (countEl) countEl.innerText = `${members.length} Anggota`;

      if (members.length === 0) {
        const emptyHtml = `
          <div class="col-span-full bg-slate-900/80 border border-slate-700/60 p-12 rounded-3xl text-center shadow-sm">
            <i class="fa-solid fa-user-slash text-3xl text-slate-500 mb-3"></i>
            <h4 class="font-bold text-slate-300 text-sm">Tidak ada Anggota DPRD ditemukan</h4>
            <p class="text-xs text-slate-500 mt-1">Coba sesuaikan kata kunci pencarian atau filter Dapil/Partai.</p>
          </div>
        `;
        grid.innerHTML = emptyHtml;
        if (tbody) tbody.innerHTML = `<tr><td colspan="6" class="py-8 text-center text-slate-400">${emptyHtml}</td></tr>`;
        return;
      }

      // Render Grid Cards
      let gridHtml = '';
      members.forEach(m => {
        const nameParts = m.nama.trim().split(' ');
        const initials = nameParts.length > 1
          ? (nameParts[0].replace(/(Hj\.|H\.|S\.Sos\.I\.|S\.E\.|S\.H\.|S\.Kom\.|S\.Si\.|M\.H\.|M\.Si\.|M\.Kn\.|M\.M|S\.I\.Kom\.)/g, '').trim().charAt(0) + 
             (nameParts[1] ? nameParts[1].charAt(0) : ''))
          : m.nama.charAt(0);

        const style = getPartyStyle(m.singkatan);
        const dapilBadge = m.dapil === 'Dapil 9'
          ? 'bg-blue-500/10 text-blue-400 border-blue-500/30'
          : 'bg-amber-500/10 text-amber-400 border-amber-500/30';

        gridHtml += `
          <div class="bg-slate-900/90 border border-slate-700/60 hover:border-blue-500/50 p-4 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between group backdrop-blur-sm">
            <div>
              <div class="flex items-start justify-between gap-2 mb-3">
                <div class="w-10 h-10 rounded-xl ${style.bg} ${style.text} border ${style.border} flex items-center justify-center font-bold font-mono text-sm tracking-wide shadow-inner">
                  ${initials.toUpperCase() || 'D'}
                </div>
                <div class="flex flex-col items-end gap-1">
                  <span class="px-2.5 py-0.5 border ${style.badge} rounded-full text-[10px] uppercase font-mono font-semibold">
                    ${m.singkatan}
                  </span>
                  <span class="px-2 py-0.5 border ${dapilBadge} rounded-full text-[9px] font-mono font-bold">
                    ${m.dapil}
                  </span>
                </div>
              </div>
              
              <h4 class="font-bold text-white text-sm mb-1.5 group-hover:text-blue-400 transition-colors leading-snug">
                ${m.nama}
              </h4>
              
              <p class="text-[11px] text-slate-400 mb-2 leading-tight">
                ${m.partai}
              </p>

              <div class="flex items-start text-xs text-slate-400 space-x-1.5 mb-3">
                <i class="fa-solid fa-map-location-dot text-slate-500 text-[11px] mt-0.5 shrink-0"></i>
                <span class="line-clamp-2 leading-relaxed text-[10px] text-slate-400">${m.wilayah}</span>
              </div>
            </div>

            <div class="pt-2.5 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span class="flex items-center space-x-1">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Terpilih 2024</span>
              </span>
              <span class="text-amber-400 font-semibold">2024–2029</span>
            </div>
          </div>
        `;
      });
      grid.innerHTML = gridHtml;

      // Render Table Body
      if (tbody) {
        let tableHtml = '';
        members.forEach(m => {
          const style = getPartyStyle(m.singkatan);
          const dapilBadge = m.dapil === 'Dapil 9'
            ? 'bg-blue-500/10 text-blue-400 border-blue-500/30'
            : 'bg-amber-500/10 text-amber-400 border-amber-500/30';
          
          tableHtml += `
            <tr class="hover:bg-slate-800/50 transition duration-150">
              <td class="py-3 px-4 text-center font-mono font-bold text-slate-400">${m.no}</td>
              <td class="py-3 px-4 font-semibold text-white">${m.nama}</td>
              <td class="py-3 px-4">
                <span class="inline-flex items-center px-2.5 py-0.5 border ${style.badge} rounded-full text-[10px] font-mono font-semibold">
                  ${m.partai} (${m.singkatan})
                </span>
              </td>
              <td class="py-3 px-4 text-center">
                <span class="inline-flex items-center px-2.5 py-0.5 border ${dapilBadge} rounded-full text-[10px] font-mono font-bold">
                  ${m.dapil}
                </span>
              </td>
              <td class="py-3 px-4 text-slate-400 text-[11px]">${m.wilayah}</td>
              <td class="py-3 px-4 text-center">
                <span class="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-md text-[10px] font-mono">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Terpilih 2024
                </span>
              </td>
            </tr>
          `;
        });
        tbody.innerHTML = tableHtml;
      }
    }

    function filterDprd() {
      const searchVal = document.getElementById('dprd-search')?.value.toLowerCase() || '';
      const partyVal = document.getElementById('dprd-party-filter')?.value || 'semua';

      const filtered = dprdMembers.filter(m => {
        const matchSearch = m.nama.toLowerCase().includes(searchVal) || m.partai.toLowerCase().includes(searchVal) || m.singkatan.toLowerCase().includes(searchVal);
        const matchDapil = currentDprdDapil === 'semua' || m.dapil === currentDprdDapil;
        const matchParty = partyVal === 'semua' || m.singkatan === partyVal;
        return matchSearch && matchDapil && matchParty;
      });

      renderDprdCards(filtered);
    }


    // DPPI Members Database
    const dppiMembers = [
      {
        "no": 1,
        "name": "Aditya Ramadan",
        "address": "Jl.Prima Gg.3 No.15 RT.10/11, Tegal alur, Kalideres, Jakarta Barat, DKI Jakarta, Indonesia , 11820",
        "phone": "089637529516"
      },
      {
        "no": 2,
        "name": "Satrio Ajie Prayogo",
        "address": "Jl. Menceng RT. 008/010, Jakarta Barat",
        "phone": "089653125530"
      },
      {
        "no": 3,
        "name": "Dwi Khrisna Arif Cahyanto, A.Md.",
        "address": "Kp. Gaga, Komp. Guru Rt 05/09 No. 21 Semanan, Kalideres, Jakarta Barat",
        "phone": "-"
      },
      {
        "no": 4,
        "name": "Annisa Yuliasti",
        "address": "Jl. Lapangan Bola II/3 Rt 004/007, Jakarta Barat",
        "phone": "081212231566"
      },
      {
        "no": 5,
        "name": "Cliff Immanuel Tetelepta",
        "address": "Jl. Menceng RT. 008/010, Jakarta Barat",
        "phone": "081311758225"
      },
      {
        "no": 6,
        "name": "Shamaila Noreen",
        "address": "Jl. Kemanggisan Ilir RT.002/013",
        "phone": "087773373831"
      },
      {
        "no": 7,
        "name": "Okka Irvan Reynaldo",
        "address": "Jl. adhikarya No.55, Jakarta,Indonesia.",
        "phone": "081586687449"
      }
    ];

    // Render DPPI Member Cards
    function renderDppiCards(members) {
      const grid = document.getElementById('dppi-grid');
      const countEl = document.getElementById('dppi-count');
      if (!grid) return;

      grid.innerHTML = '';
      countEl.innerText = `${members.length} Anggota`;

      if (members.length === 0) {
        grid.innerHTML = `
          <div class="col-span-full bg-white border border-slate-200/80 p-12 rounded-3xl text-center shadow-sm">
            <i class="fa-solid fa-user-slash text-3xl text-slate-300 mb-3"></i>
            <h4 class="font-bold text-slate-700">Tidak ada hasil ditemukan</h4>
            <p class="text-xs text-slate-400 mt-1">Coba masukkan kata kunci pencarian yang lain.</p>
          </div>
        `;
        return;
      }

      members.forEach(m => {
        const nameParts = m.name.replace(/(H\.|Pdt\.|Dr\.|Drs\.|S\.Sos|S\.Ag|SH\.|MH|M\.Sos|Js\.)/g, '').trim().split(' ');
        const initials = nameParts.length > 1
          ? (nameParts[0].charAt(0) + nameParts[1].charAt(0)).toUpperCase()
          : nameParts[0].charAt(0).toUpperCase();

        const hasPhone = m.phone && m.phone !== '-';
        const rawPhone = hasPhone ? m.phone.replace(/[^0-9]/g, '') : '';
        const waPhone = rawPhone.startsWith('0') ? '62' + rawPhone.slice(1) : rawPhone;
        const contactBtn = hasPhone
          ? `<a href="https://wa.me/${waPhone}" target="_blank" class="flex items-center justify-center space-x-1 px-4 py-2 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-700 rounded-xl text-xs font-semibold transition duration-150">
              <i class="fa-brands fa-whatsapp text-sm"></i>
              <span>Hubungi</span>
             </a>`
          : `<span class="flex items-center justify-center space-x-1 px-4 py-2 bg-slate-100 text-slate-400 border border-slate-200 rounded-xl text-xs font-semibold select-none cursor-not-allowed">
              <i class="fa-solid fa-phone-slash"></i>
              <span>Tidak Ada Kontak</span>
             </span>`;

        const cardHtml = `
          <div class="bg-white border border-slate-200/80 p-5 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-300 transition duration-200 flex flex-col justify-between group">
            <div>
              <div class="flex justify-between items-start mb-4">
                <div class="w-10 h-10 rounded-xl bg-blue-50 text-blue-800 border border-blue-100 flex items-center justify-center font-bold text-sm tracking-wide shadow-inner">
                  ${initials}
                </div>
                <span class="px-2.5 py-0.5 border border-purple-200 rounded-full text-[10px] uppercase font-semibold bg-purple-100 text-purple-800">DPPI</span>
              </div>

              <h4 class="font-bold text-slate-800 text-sm mb-2 group-hover:text-blue-900 transition-colors">${m.name}</h4>
              
              <div class="space-y-2 mt-4 pt-4 border-t border-slate-100">
                <div class="flex items-start text-slate-500 text-[11px] leading-relaxed">
                  <i class="fa-solid fa-location-dot mt-0.5 mr-2 text-slate-400"></i>
                  <span>${m.address}</span>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-between mt-5 pt-3 border-t border-slate-100">
              <div class="flex flex-col">
                <span class="text-[9px] text-slate-400 font-mono">KONTAK</span>
                <span class="text-xs font-semibold text-slate-700 font-mono">${hasPhone ? m.phone : '-'}</span>
              </div>
              ${contactBtn}
            </div>
          </div>
        `;
        grid.innerHTML += cardHtml;
      });
    }

    // Filter DPPI members
    function filterDppi() {
      const q = (document.getElementById('dppi-search')?.value || '').toLowerCase();
      renderDppiCards(dppiMembers.filter(m =>
        m.name.toLowerCase().includes(q) || m.address.toLowerCase().includes(q)
      ));
    }

    const timOrmasMembers = [
      { no: 1, unsur: 'Polres', nama: 'IPDA Budi Cahyono', phone: '085892126303' },
      { no: 1, unsur: 'Polres', nama: 'Brigadir M. Dedy Porwanto', phone: '082292712961' },
      { no: 2, unsur: 'Kodim 0503/JB', nama: 'Tarmidi', phone: '081310569919' },
      { no: 2, unsur: 'Kodim 0503/JB', nama: 'Agus Wiyono', phone: '081382313806' },
      { no: 3, unsur: 'Kejaksaan', nama: 'Egy Almajid, A.Md.Kom', phone: '089603753949' },
      { no: 3, unsur: 'Kejaksaan', nama: 'Dewi Aprilda Sari Sibagariang', phone: '082168205845' },
      { no: 4, unsur: 'BIN', nama: 'Farhan Humam Putra Sandy', phone: '081219359974' },
      { no: 4, unsur: 'BIN', nama: 'Muhammad Nurhidayat, S.Pd', phone: null },
      { no: 5, unsur: 'Kemenag', nama: 'Alfin Fanani, S.H.I', phone: '082311032045' },
      { no: 5, unsur: 'Kemenag', nama: 'Devi Sulatul Aslamiyah, S.Pdi', phone: '081213750694' }
    ];

    const timOrmasUnsurOrder = ['Polres', 'Kodim 0503/JB', 'Kejaksaan', 'BIN', 'Kemenag'];

    function initTimOrmasFilters() {
      const select = document.getElementById('tim-ormas-unsur-filter');
      if (!select) return;

      const currentValue = select.value || 'semua';
      select.innerHTML = '<option value="semua">Semua Unsur</option>';

      const unsurList = [...new Set(timOrmasMembers.map(m => m.unsur))];
      const orderedList = timOrmasUnsurOrder.filter(u => unsurList.includes(u));
      const remaining = unsurList.filter(u => !timOrmasUnsurOrder.includes(u));
      const finalList = [...orderedList, ...remaining];

      finalList.forEach((unsur) => {
        const option = document.createElement('option');
        option.value = unsur;
        option.textContent = unsur;
        select.appendChild(option);
      });

      select.value = finalList.includes(currentValue) ? currentValue : 'semua';
    }

    function renderTimOrmasCards(members) {
      const grid = document.getElementById('tim-ormas-grid');
      const countEl = document.getElementById('tim-ormas-count');
      const statTotal = document.getElementById('tim-ormas-stat-total');
      const statUnsur = document.getElementById('tim-ormas-stat-unsur');
      if (!grid) return;

      grid.innerHTML = '';
      if (countEl) countEl.textContent = `${members.length} Anggota`;
      if (statTotal) statTotal.textContent = members.length;
      if (statUnsur) statUnsur.textContent = new Set(members.map(m => m.unsur)).size;

      if (members.length === 0) {
        grid.innerHTML = `
          <div class="col-span-full bg-slate-900/80 border border-slate-700/60 p-12 rounded-3xl text-center shadow-sm">
            <i class="fa-solid fa-user-slash text-3xl text-slate-500 mb-3"></i>
            <h4 class="font-bold text-slate-300">Tidak ada hasil ditemukan</h4>
            <p class="text-xs text-slate-400 mt-1">Coba ubah kata kunci atau filter unsur.</p>
          </div>
        `;
        return;
      }

      const badgeMap = {
        Polres: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
        'Kodim 0503/JB': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
        Kejaksaan: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
        BIN: 'bg-violet-500/10 text-violet-400 border-violet-500/30',
        Kemenag: 'bg-amber-500/10 text-amber-400 border-amber-500/30'
      };

      members.forEach((m) => {
        const nameParts = (m.nama || '').replace(/(A\.Md\.|S\.Pd|S\.H\.I|S\.Pdi|A\.Md\.Kom)/g, '').trim().split(/\s+/);
        const initials = nameParts.length >= 2
          ? (nameParts[0].charAt(0) + nameParts[1].charAt(0)).toUpperCase()
          : (nameParts[0]?.charAt(0) || 'T').toUpperCase();

        const hasPhone = Boolean(m.phone && m.phone.trim() !== '');
        const rawPhone = hasPhone ? m.phone.replace(/[^0-9]/g, '') : '';
        const waPhone = rawPhone.startsWith('0') ? '62' + rawPhone.slice(1) : rawPhone;
        const contactBtn = hasPhone
          ? `<a href="https://wa.me/${waPhone}" target="_blank" class="flex items-center justify-center space-x-1 px-4 py-2 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-700 rounded-xl text-xs font-semibold transition duration-150">
              <i class="fa-brands fa-whatsapp text-sm"></i>
              <span>Hubungi</span>
            </a>`
          : `<span class="flex items-center justify-center space-x-1 px-4 py-2 bg-slate-100 text-slate-400 border border-slate-200 rounded-xl text-xs font-semibold select-none cursor-not-allowed">
              <i class="fa-solid fa-phone-slash"></i>
              <span>Tanpa Kontak</span>
            </span>`;

        const cardHtml = `
          <div class="bg-slate-900/90 border border-slate-700/60 p-5 rounded-2xl shadow-sm hover:shadow-lg hover:border-cyan-500/40 transition-all duration-200 flex flex-col justify-between group backdrop-blur-sm">
            <div>
              <div class="flex justify-between items-start mb-4">
                <div class="w-11 h-11 rounded-xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 flex items-center justify-center font-bold text-sm tracking-wide shadow-inner">
                  ${initials}
                </div>
                <span class="px-2.5 py-0.5 border ${badgeMap[m.unsur] || 'bg-slate-500/10 text-slate-300 border-slate-500/30'} rounded-full text-[10px] uppercase font-semibold">${m.unsur}</span>
              </div>

              <h4 class="font-bold text-white text-sm mb-2 group-hover:text-cyan-300 transition-colors">${m.nama}</h4>

              <div class="space-y-2 mt-4 pt-4 border-t border-slate-800">
                <div class="flex items-center text-slate-400 text-[11px]">
                  <i class="fa-solid fa-id-card mr-2 text-cyan-400"></i>
                  <span>Perwakilan ${m.unsur}</span>
                </div>
              </div>
            </div>

            <div class="flex items-center justify-between mt-5 pt-3 border-t border-slate-800">
              <div class="flex flex-col">
                <span class="text-[9px] text-slate-400 font-mono">KONTAK</span>
                <span class="text-xs font-semibold text-slate-200 font-mono">${hasPhone ? m.phone : '-'}</span>
              </div>
              ${contactBtn}
            </div>
          </div>
        `;
        grid.innerHTML += cardHtml;
      });
    }

    function filterTimOrmas() {
      const q = (document.getElementById('tim-ormas-search')?.value || '').toLowerCase();
      const unsur = document.getElementById('tim-ormas-unsur-filter')?.value || 'semua';

      const filtered = timOrmasMembers.filter((m) => {
        const matchSearch = (m.nama || '').toLowerCase().includes(q) || (m.unsur || '').toLowerCase().includes(q) || (m.phone || '').toLowerCase().includes(q);
        const matchUnsur = unsur === 'semua' || m.unsur === unsur;
        return matchSearch && matchUnsur;
      });

      renderTimOrmasCards(filtered);
    }

    initTimOrmasFilters();
    renderTimOrmasCards(timOrmasMembers);

    function initOrmasTerlaporFilters() {
      const kecamatanSelect = document.getElementById('ormas-terlapor-kecamatan-filter');
      const statusSelect = document.getElementById('ormas-terlapor-status-filter');
      if (!kecamatanSelect || !statusSelect || typeof ormasTerlaporData === 'undefined') return;

      const kecamatanList = [...new Set(ormasTerlaporData.map(item => item.kecamatan))].sort((a, b) => a.localeCompare(b, 'id'));
      const statusList = [...new Set(ormasTerlaporData.map(item => item.status))].filter(Boolean).sort((a, b) => a.localeCompare(b, 'id'));

      const currentKecamatan = kecamatanSelect.value || 'semua';
      const currentStatus = statusSelect.value || 'semua';

      kecamatanSelect.innerHTML = '<option value="semua">Semua Kecamatan</option>';
      statusSelect.innerHTML = '<option value="semua">Semua Status</option>';

      kecamatanList.forEach((kecamatan) => {
        const option = document.createElement('option');
        option.value = kecamatan;
        option.textContent = kecamatan;
        kecamatanSelect.appendChild(option);
      });

      statusList.forEach((status) => {
        const option = document.createElement('option');
        option.value = status;
        option.textContent = status;
        statusSelect.appendChild(option);
      });

      kecamatanSelect.value = kecamatanList.includes(currentKecamatan) ? currentKecamatan : 'semua';
      statusSelect.value = statusList.includes(currentStatus) ? currentStatus : 'semua';
    }

    function renderOrmasTerlaporCards(items) {
      const grid = document.getElementById('ormas-terlapor-grid');
      const countEl = document.getElementById('ormas-terlapor-count');
      const statTotal = document.getElementById('ormas-terlapor-stat-total');
      const statBelum = document.getElementById('ormas-terlapor-stat-belum');
      const statTerdata = document.getElementById('ormas-terlapor-stat-terdata');
      if (!grid) return;

      grid.innerHTML = '';
      const total = items.length;
      if (countEl) countEl.textContent = `${total} Organisasi`;
      if (statTotal) statTotal.textContent = total;
      if (statBelum) statBelum.textContent = items.filter((item) => item.status && item.status.toLowerCase().includes('belum')).length;
      if (statTerdata) statTerdata.textContent = items.filter((item) => item.status && item.status.toLowerCase().includes('terdata')).length;

      if (!items.length) {
        grid.innerHTML = `
          <div class="col-span-full bg-slate-900/80 border border-slate-700/60 p-12 rounded-3xl text-center shadow-sm">
            <i class="fa-solid fa-building-circle-exclamation text-3xl text-slate-500 mb-3"></i>
            <h4 class="font-bold text-slate-300">Tidak ada ORMAS yang sesuai</h4>
            <p class="text-xs text-slate-400 mt-1">Coba ubah kata kunci atau filter yang aktif.</p>
          </div>
        `;
        return;
      }

      const statusColors = {
        'Belum': 'bg-amber-500/10 text-amber-300 border-amber-500/30',
        'Terdata': 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
        'Perpanjang': 'bg-blue-500/10 text-blue-300 border-blue-500/30',
        'Baru': 'bg-violet-500/10 text-violet-300 border-violet-500/30'
      };

      items.forEach((item) => {
        const namaParts = (item.nama || '').split(/\s+/).filter(Boolean);
        const initials = namaParts.length >= 2
          ? (namaParts[0][0] + namaParts[1][0]).toUpperCase()
          : (namaParts[0]?.[0] || 'O').toUpperCase();

        const cleanPhone = (item.phone || '-').replace(/\s+/g, ' ').trim();
        const statusClass = statusColors[item.status] || 'bg-slate-500/10 text-slate-300 border-slate-500/30';

        grid.innerHTML += `
          <div class="bg-slate-900/90 border border-slate-700/60 p-5 rounded-2xl shadow-sm hover:shadow-lg hover:border-amber-500/40 transition-all duration-200 flex flex-col group backdrop-blur-sm">
            <div class="flex justify-between items-start mb-4 gap-3">
              <div class="w-11 h-11 rounded-xl bg-amber-500/10 text-amber-300 border border-amber-500/30 flex items-center justify-center font-bold text-sm tracking-wide shadow-inner">
                ${initials}
              </div>
              <span class="px-2.5 py-0.5 border ${statusClass} rounded-full text-[10px] uppercase font-semibold">${item.status || 'Terdata'}</span>
            </div>

            <h4 class="font-bold text-white text-sm mb-2 group-hover:text-amber-300 transition-colors leading-snug">${item.nama}</h4>
            <div class="space-y-2 text-[11px] text-slate-300 mb-4">
              <div class="flex items-start gap-2">
                <i class="fa-solid fa-location-dot mt-0.5 text-amber-400 shrink-0"></i>
                <span class="leading-relaxed">${item.kecamatan}</span>
              </div>
              <div class="flex items-start gap-2">
                <i class="fa-solid fa-map-pin mt-0.5 text-slate-400 shrink-0"></i>
                <span class="leading-relaxed">${item.alamat}</span>
              </div>
              <div class="flex items-start gap-2">
                <i class="fa-solid fa-user-tie mt-0.5 text-slate-400 shrink-0"></i>
                <span class="leading-relaxed">${item.pengurus}</span>
              </div>
            </div>

            <div class="mt-auto pt-3 border-t border-slate-800 space-y-2">
              <div class="flex items-center justify-between text-[10px] text-slate-400">
                <span>Periode</span>
                <span class="font-semibold text-slate-200">${item.periode || '-'}</span>
              </div>
              <div class="flex items-center justify-between gap-2 text-[10px] text-slate-400">
                <span>Kontak</span>
                <span class="font-semibold text-slate-200 truncate max-w-[150px] text-right">${cleanPhone}</span>
              </div>
            </div>
          </div>
        `;
      });
    }

    function filterOrmasTerlapor() {
      const q = (document.getElementById('ormas-terlapor-search')?.value || '').toLowerCase();
      const kecamatan = document.getElementById('ormas-terlapor-kecamatan-filter')?.value || 'semua';
      const status = document.getElementById('ormas-terlapor-status-filter')?.value || 'semua';

      const filtered = ormasTerlaporData.filter((item) => {
        const matchKecamatan = kecamatan === 'semua' || item.kecamatan === kecamatan;
        const matchStatus = status === 'semua' || item.status === status;
        const haystack = `${item.nama} ${item.kecamatan} ${item.alamat} ${item.pengurus} ${item.phone}`.toLowerCase();
        const matchSearch = haystack.includes(q);
        return matchKecamatan && matchStatus && matchSearch;
      });

      renderOrmasTerlaporCards(filtered);
    }

    initOrmasTerlaporFilters();
    renderOrmasTerlaporCards(ormasTerlaporData);

    // FPK Members Database
    const fpkMembers = [
      {"no":1,"name":"M. Ihsan, SH, MH","jabatan":"Ketua","organisasi":"DKI Jakarta","asal":"DKI Jakarta"},
      {"no":2,"name":"Jamaluddin","jabatan":"Wakil Ketua","organisasi":"Perkumpulan Persaudaraan Suku Mandar - Makassar","asal":"Prov. Sulawesi Selatan"},
      {"no":3,"name":"H. Ismail Ahmad, S.E.","jabatan":"Wakil Ketua","organisasi":"Rukun Keluarga Mpuri Bima (RKMB) Jabodetabek","asal":"Prov. Nusa Tenggara Barat"},
      {"no":4,"name":"Sabrina Goisani","jabatan":"Sekertaris","organisasi":"Badan Musyawarah Keluarga Jambi (BMKJ) Jakarta","asal":"Prov. Jambi"},
      {"no":5,"name":"Ramilan, S.E.","jabatan":"Bendahara","organisasi":"Taman Iskandar Muda","asal":"Prov. Nanggro Aceh Darussalam"},
      {"no":6,"name":"Drs. Posma Sihite","jabatan":"Anggota","organisasi":"Kerukunan Keluarga Sumatera Utara (KKSU)","asal":"Prov. Sumatera Utara"},
      {"no":7,"name":"Afrizon Aroes, S.H.","jabatan":"Anggota","organisasi":"Ikatan Masyarakat Praktisi Hukum dan Budaya Sriwijaya Nusantara","asal":"Prov. Sumatera Selatan"},
      {"no":8,"name":"Derisman","jabatan":"Anggota","organisasi":"Ikatan Keluarga Minangkabau (IKM)","asal":"Prov. Sumatera Barat"},
      {"no":9,"name":"Hj. Yusiani","jabatan":"Anggota","organisasi":"Persatuan Masyarakat Riau Jakarta (PMRJ)","asal":"Prov. Riau"},
      {"no":10,"name":"Sutjiati","jabatan":"Anggota","organisasi":"Persatuan Ibu-ibu Bangka Belitung (PIBB)","asal":"Prov. Bangka Belitung"},
      {"no":11,"name":"Josep Thomas","jabatan":"Anggota","organisasi":"Ikatan Keluarga Kalimantan Barat (IKKB)","asal":"Prov. Kalimantan Barat"},
      {"no":12,"name":"Haeril Anwar","jabatan":"Anggota","organisasi":"Badan Pembinaan Potensi Keluarga Besar Banten (BPPKB)","asal":"Prov. Banten"},
      {"no":13,"name":"H. Muhammad Rozi","jabatan":"Anggota","organisasi":"Forum Komunikasi Anak Betawi (FORKABI)","asal":"DKI Jakarta"},
      {"no":14,"name":"Ahmad Mudjamil H.","jabatan":"Anggota","organisasi":"Forum Betawi Rempug (FBR)","asal":"DKI Jakarta"},
      {"no":15,"name":"Islahul Ihsan","jabatan":"Anggota","organisasi":"Forum Betawi Rempug (FBR)","asal":"DKI Jakarta"},
      {"no":16,"name":"Cholid Soheh","jabatan":"Anggota","organisasi":"Forum Betawi Rempug (FBR)","asal":"DKI Jakarta"},
      {"no":17,"name":"Zuhariyah Febriyanti","jabatan":"Anggota","organisasi":"Forum Betawi Rempug (FBR)","asal":"DKI Jakarta"},
      {"no":18,"name":"Ismail Zamzami Irhas, S.H.","jabatan":"Anggota","organisasi":"Badan Musyawarah Masyarakat Betawi","asal":"DKI Jakarta"},
      {"no":19,"name":"Tahyudin","jabatan":"Anggota","organisasi":"Badan Musyawarah Masyarakat Betawi","asal":"DKI Jakarta"},
      {"no":20,"name":"R. Rachmayanti","jabatan":"Anggota","organisasi":"Forum Silaturahmi Masyarakat Sunda - Jakarta","asal":"Prov. Jawa Barat"},
      {"no":21,"name":"Furqonuddin","jabatan":"Anggota","organisasi":"Paguyuban Warga Cirebon - Laskar Bagus Rangin","asal":"Prov. Jawa Barat"},
      {"no":22,"name":"Dede Padly, S.Kom.","jabatan":"Anggota","organisasi":"Forum Masyarakat Etnis Sunda Se-Jakarta (FORMANISJA)","asal":"Prov. Jawa Barat"},
      {"no":23,"name":"Agus Sugiarto Jaelani","jabatan":"Anggota","organisasi":"Koperasi Warung Tegal (KOWARTEG)","asal":"Prov. Jawa Tengah"},
      {"no":24,"name":"Lutfi Bin Ramli","jabatan":"Anggota","organisasi":"Koperasi Warung Tegal (KOWARTEG)","asal":"Prov. Jawa Tengah"},
      {"no":25,"name":"Saturi","jabatan":"Anggota","organisasi":"Paguyuban Warga Jakarta Asal Jawa Timur (PAWARTA JATIM)","asal":"Prov. Jawa Timur"},
      {"no":26,"name":"H. Syafiudin","jabatan":"Anggota","organisasi":"Ikatan Keluarga Madura (IKAMA)","asal":"Prov. Jawa Timur"},
      {"no":27,"name":"I.B. Djayapti","jabatan":"Anggota","organisasi":"Suka Duka Hindu Dharma Banjar Jakarta Barat","asal":"Prov. Bali"},
      {"no":28,"name":"Deky Matheos Mau","jabatan":"Anggota","organisasi":"Ikatan Keluarga Besar Flobamora - Amarasi","asal":"Prov. Nusa Tenggara Timur"},
      {"no":29,"name":"Erlina Natalia CH. Galamba","jabatan":"Anggota","organisasi":"Ikatan Keluarga Sulawesi Tengah (IKST)","asal":"Prov. Sulawesi Tengah"},
      {"no":30,"name":"Purnama","jabatan":"Anggota","organisasi":"Laskar Bogani Indonesia","asal":"Prov. Sulawesi Utara"},
      {"no":31,"name":"Arsyad Sainuddin","jabatan":"Anggota","organisasi":"Keluarga Kerukunan Sulawesi Selatan (KKSS)","asal":"Prov. Sulawesi Selatan"},
      {"no":32,"name":"Badri Tubaka","jabatan":"Anggota","organisasi":"Front Pemuda Muslim Maluku (FPMM)","asal":"Prov. Maluku"},
      {"no":33,"name":"Wellem J. Rumpaisum","jabatan":"Anggota","organisasi":"Front Pemuda Muslim Maluku (FPMM)","asal":"Prov. Maluku"},
      {"no":34,"name":"Ahmad Miqdad","jabatan":"Anggota","organisasi":"Yayasan Wakaf Alaydrus Indonesia","asal":"Etnis Arab"},
      {"no":35,"name":"Tjong Kong Djan","jabatan":"Anggota","organisasi":"Perkumpulan Masyarakat Singkawang dan Sekitarnya (PERMASIS)","asal":"Etnis Tionghoa"},
      {"no":36,"name":"Jafar Nasir","jabatan":"Anggota","organisasi":"Ikatan Keluarga Besar Papua (IKBP)","asal":"Prov. Papua"}
    ];

    function renderFpkCards(members) {
      const grid = document.getElementById('fpk-grid');
      const countEl = document.getElementById('fpk-count');
      if (!grid) return;
      if (countEl) countEl.innerText = members.length + ' Anggota';
      grid.innerHTML = '';

      if (members.length === 0) {
        grid.innerHTML = `<div class="col-span-full p-12 rounded-3xl text-center bg-slate-900/60 border border-slate-700/60"><i class="fa-solid fa-user-slash text-3xl text-slate-500 mb-3"></i><h4 class="font-bold text-slate-300">Tidak ada anggota ditemukan</h4></div>`;
        return;
      }

      const jabatanColors = {
        'Ketua': 'bg-blue-500/10 text-blue-400 border-blue-500/30',
        'Wakil Ketua': 'bg-sky-500/10 text-sky-400 border-sky-500/30',
        'Sekertaris': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
        'Bendahara': 'bg-amber-500/10 text-amber-400 border-amber-500/30',
        'Anggota': 'bg-slate-500/10 text-slate-300 border-slate-500/30'
      };

      members.forEach(m => {
        const parts = m.name.replace(/(H\.|Hj\.|Drs\.|Dr\.|S\.H\.|S\.E\.|S\.Kom\.|SH|MH)/g, '').trim().split(' ');
        const initials = (parts[0]?.charAt(0) + (parts[1]?.charAt(0) || '')).toUpperCase();
        const badgeClass = jabatanColors[m.jabatan] || jabatanColors['Anggota'];

        grid.innerHTML += `
          <div class="bg-slate-900/90 border border-slate-700/60 hover:border-blue-500/50 p-5 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col group backdrop-blur-sm">
            <div class="flex items-start justify-between mb-3">
              <div class="w-11 h-11 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/30 flex items-center justify-center font-bold font-mono text-sm">${initials}</div>
              <span class="px-2.5 py-0.5 border ${badgeClass} rounded-full text-[10px] font-mono font-semibold">${m.jabatan}</span>
            </div>
            <h4 class="font-bold text-white text-sm mb-1 group-hover:text-blue-400 transition-colors">${m.name}</h4>
            <p class="text-[11px] text-blue-300/80 font-medium mb-1">${m.organisasi}</p>
            <div class="flex items-center gap-1.5 text-[11px] text-slate-400">
              <i class="fa-solid fa-location-dot text-slate-500 shrink-0"></i>
              <span>${m.asal}</span>
            </div>
            <div class="mt-auto pt-2.5 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-500">
              <span>FPK Jakarta Barat</span>
              <span class="text-blue-400">2021-2026</span>
            </div>
          </div>
        `;
      });
    }

    function filterFpk() {
      const q = (document.getElementById('fpk-search')?.value || '').toLowerCase();
      const jab = document.getElementById('fpk-jabatan-filter')?.value || 'semua';
      renderFpkCards(fpkMembers.filter(m =>
        (jab === 'semua' || m.jabatan === jab) &&
        (m.name.toLowerCase().includes(q) || m.jabatan.toLowerCase().includes(q) ||
         m.organisasi.toLowerCase().includes(q) || m.asal.toLowerCase().includes(q))
      ));
    }
  