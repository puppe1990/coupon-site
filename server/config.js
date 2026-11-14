const path = require('path');

const rootDir = path.join(__dirname, '..');

module.exports = {
  port: Number(process.env.PORT) || 3001,
  databasePath: process.env.DATABASE_PATH || path.join(rootDir, 'data', 'app.db'),
  buildDir: process.env.BUILD_DIR || path.join(rootDir, 'build'),
  seedPath: path.join(__dirname, 'seed', 'coupons.json'),
  siteUrl: process.env.SITE_URL || 'http://localhost:3000',
  adminToken: process.env.ADMIN_TOKEN || ''
};
