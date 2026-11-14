const fs = require('fs');
const config = require('./config');
const { openDatabase } = require('./db');
const { seedIfEmpty } = require('./coupons');
const { buildApp } = require('./app');

const start = async () => {
  const db = openDatabase(config.databasePath);
  const seeded = seedIfEmpty(db, JSON.parse(fs.readFileSync(config.seedPath, 'utf8')));
  const app = await buildApp({ config, db });

  await app.listen({ port: config.port, host: '0.0.0.0' });

  const seedNote = seeded ? `, ${seeded} cupons semeados` : '';
  console.log(`Cupom Vantagens ouvindo na porta ${config.port}${seedNote}`);

  if (!config.adminToken) {
    console.warn('ADMIN_TOKEN ausente: rotas de admin respondem 503');
  }
};

start().catch((error) => {
  console.error(`Falha ao subir o servidor na porta ${config.port}: ${error.message}`);
  process.exit(1);
});
