const fs = require('fs');
const config = require('../server/config');
const { openDatabase } = require('../server/db');
const { seedCoupons } = require('../server/coupons');

const db = openDatabase(config.databasePath);

try {
  const coupons = JSON.parse(fs.readFileSync(config.seedPath, 'utf8'));
  const total = seedCoupons(db, coupons);
  console.log(`${total} cupons semeados em ${config.databasePath}`);
} catch (error) {
  console.error(`Falha ao semear ${config.databasePath}: ${error.message}`);
  process.exitCode = 1;
} finally {
  db.close();
}
