const { test } = require('node:test');
const assert = require('node:assert/strict');
const { faker } = require('@faker-js/faker');
const { buildSitemapXml } = require('./sitemap');

faker.seed(7);

const couponIds = [faker.string.alphanumeric(6), faker.string.alphanumeric(6)];
const coupons = couponIds.map((id) => ({ id }));

test('inclui as páginas estáticas e uma entrada por cupom', () => {
  const xml = buildSitemapXml({ siteUrl: 'https://cupom.test', coupons });

  assert.match(xml, /<loc>https:\/\/cupom\.test\/<\/loc>/);
  assert.match(xml, new RegExp(`<loc>https://cupom\\.test/coupon/${couponIds[0]}</loc>`));
  assert.equal(xml.match(/<url>/g).length, 6 + coupons.length);
});

test('exige siteUrl com mensagem que mostra o valor recebido', () => {
  assert.throws(() => buildSitemapXml({ coupons }), /siteUrl é obrigatório.*recebido: undefined/);
  assert.throws(() => buildSitemapXml(), /siteUrl é obrigatório/);
});
