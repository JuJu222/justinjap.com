#!/usr/bin/env bash
# Renders banner.html to LinkedIn-sized PNGs (1584x396) in ./out, one per theme.
set -euo pipefail

cd "$(dirname "$0")"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
mkdir -p out

for theme in dark light; do
  "$CHROME" --headless=new --disable-gpu --hide-scrollbars --allow-file-access-from-files \
    --force-device-scale-factor=1 --window-size=1584,396 --virtual-time-budget=4000 \
    --screenshot="out/linkedin-banner-$theme.png" "file://$PWD/banner.html#$theme" 2>/dev/null
  echo "out/linkedin-banner-$theme.png"
done
