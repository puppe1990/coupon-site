#!/usr/bin/env bash
# Rasteriza public/favicon.svg nos PNGs da PWA e no favicon.ico.
# Uso: bash scripts/render-icons.sh
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SVG="$ROOT/public/favicon.svg"
PUBLIC="$ROOT/public"

raster() {
  local size="$1"
  local out="$2"
  rsvg-convert -w "$size" -h "$size" "$SVG" -o "$out"
}

raster 16 "$PUBLIC/favicon-16.png"
raster 32 "$PUBLIC/favicon-32.png"
raster 48 "$PUBLIC/favicon-48.png"
raster 180 "$PUBLIC/apple-touch-icon.png"
raster 192 "$PUBLIC/logo192.png"
raster 512 "$PUBLIC/logo512.png"

magick "$PUBLIC/favicon-16.png" "$PUBLIC/favicon-32.png" "$PUBLIC/favicon-48.png" "$PUBLIC/favicon.ico"

python3 - <<PY
from pathlib import Path

root = Path("$PUBLIC")
want = {
    "favicon-16.png": 16,
    "favicon-32.png": 32,
    "favicon-48.png": 48,
    "apple-touch-icon.png": 180,
    "logo192.png": 192,
    "logo512.png": 512,
}
for name, size in want.items():
    p = root / name
    d = p.read_bytes()
    w = int.from_bytes(d[16:20], "big")
    h = int.from_bytes(d[20:24], "big")
    if w != size or h != size:
        raise SystemExit(f"{name} {w}x{h}, esperado {size}x{size}")
    print(f"{name} {w}x{h} {p.stat().st_size} bytes")
ico = root / "favicon.ico"
if ico.stat().st_size < 100:
    raise SystemExit("favicon.ico vazio")
print(f"favicon.ico {ico.stat().st_size} bytes")
PY
