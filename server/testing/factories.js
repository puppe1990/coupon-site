const { faker } = require('@faker-js/faker');
const { openDatabase } = require('../db');
const { buildApp } = require('../app');

faker.seed(2026);

const makeCoupon = (overrides = {}) => ({
  id: `cupom-${faker.string.alphanumeric(6).toLowerCase()}`,
  name: `Cupom ${faker.commerce.productName()}`,
  logo: `${faker.string.alphanumeric(8).toLowerCase()}.png`,
  discount: `${faker.number.int({ min: 5, max: 40 })}% de desconto`,
  couponCode: faker.string.alphanumeric(8).toUpperCase(),
  link: faker.internet.url(),
  description: faker.lorem.sentence(),
  category: faker.helpers.arrayElement(['E-commerce', 'Delivery', 'Fintech']),
  validUntil: '31/12/2026',
  terms: faker.lorem.sentence(),
  companyInfo: { website: faker.internet.url(), description: faker.lorem.sentence() },
  ...overrides
});

const buildTestApp = async ({ adminToken = '', buildDir = null } = {}) => {
  const db = openDatabase(':memory:');
  const app = await buildApp({
    config: { buildDir, siteUrl: 'https://cupom.test', adminToken },
    db
  });

  return { app, db };
};

module.exports = { makeCoupon, buildTestApp };
