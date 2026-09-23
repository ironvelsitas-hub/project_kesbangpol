import pandas as pd
from pathlib import Path
import json, re

x = Path(r'C:\Users\LENOVO\Downloads\Projek web kesbangpol\Data Lokasi Tawuran 2026 JAKARTA BARAT.xlsx')
for s in ['Data Lokasi Tawuran 2026 ', 'Data lokasi Konflik Sosial 2026']:
    df = pd.read_excel(x, sheet_name=s, header=None)
    print('SHEET', s, 'shape', df.shape)
    for i in range(0, min(12, len(df))):
        row = [str(v).strip() if pd.notna(v) else '' for v in df.iloc[i, :9].tolist()]
        print(i, row)
    print('----')
