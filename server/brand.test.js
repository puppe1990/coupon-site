const fs = require('fs');
const path = require('path');
const { test } = require('node:test');
const assert = require('node:assert/strict');

const publicDir = path.join(__dirname, '..', 'public');

const pngSize = (file) => {
  const buf = fs.readFileSync(file);
  assert.equal(buf[0], 0x89, `${file} não é PNG`);
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
};

test('index.html liga o canhoto na aba, no PWA e no Open Graph', () => {
  const html = fs.readFileSync(path.join(publicDir, 'index.html'), 'utf8');

  assert.match(html, /rel="icon" href="%PUBLIC_URL%\/favicon\.svg"/);
  assert.match(html, /rel="apple-touch-icon" href="%PUBLIC_URL%\/apple-touch-icon\.png"/);
  assert.match(
    html,
    /property="og:image" content="https:\/\/cupom-vantagens\.apps\.gestaobem\.com\/og\.png"/
  );
  assert.match(html, /property="og:image:width" content="1200"/);
  assert.match(html, /property="og:image:height" content="630"/);
  assert.match(html, /property="og:image:type" content="image\/png"/);
  assert.match(html, /name="twitter:card" content="summary_large_image"/);
});

test('favicon.svg é o canhoto verde no papel', () => {
  const svg = fs.readFileSync(path.join(publicDir, 'favicon.svg'), 'utf8');

  assert.match(svg, /viewBox="0 0 32 32"/);
  assert.match(svg, /#146C43/);
  assert.match(svg, /#FFFDF8/);
  assert.match(svg, /#0F5836/);
});

test('PNGs da PWA e o card OG têm o tamanho certo', () => {
  const squares = {
    'favicon-16.png': 16,
    'favicon-32.png': 32,
    'favicon-48.png': 48,
    'apple-touch-icon.png': 180,
    'logo192.png': 192,
    'logo512.png': 512
  };

  for (const [name, size] of Object.entries(squares)) {
    const file = path.join(publicDir, name);
    assert.equal(fs.existsSync(file), true, `${name} ausente — rode bash scripts/render-icons.sh`);
    assert.deepEqual(pngSize(file), { width: size, height: size }, name);
  }

  const ico = path.join(publicDir, 'favicon.ico');
  assert.equal(fs.existsSync(ico), true, 'favicon.ico ausente');
  assert.equal(fs.statSync(ico).size > 100, true, 'favicon.ico vazio');

  const og = path.join(publicDir, 'og.png');
  assert.equal(fs.existsSync(og), true, 'og.png ausente — rode bash scripts/render-og.sh');
  assert.deepEqual(pngSize(og), { width: 1200, height: 630 });
});

test('manifest usa o canhoto e a paleta de papel', () => {
  const manifest = JSON.parse(fs.readFileSync(path.join(publicDir, 'manifest.json'), 'utf8'));
  const srcs = manifest.icons.map((icon) => icon.src);

  assert.equal(manifest.name, 'Cupom Vantagens');
  assert.equal(manifest.theme_color, '#146C43');
  assert.equal(manifest.background_color, '#F5F0E6');
  assert.equal(srcs.includes('logo192.png'), true);
  assert.equal(srcs.includes('logo512.png'), true);
});
