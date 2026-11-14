const fs = require('fs');
const path = require('path');
const { test } = require('node:test');
const assert = require('node:assert/strict');

test('o seed não inclui Mercado Diferente nem Trela', () => {
  const coupons = JSON.parse(fs.readFileSync(path.join(__dirname, 'seed', 'coupons.json'), 'utf8'));
  const ids = coupons.map((coupon) => coupon.id);

  assert.equal(ids.includes('mercado-diferente'), false);
  assert.equal(ids.includes('trela'), false);
});
