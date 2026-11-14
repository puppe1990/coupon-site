const fs = require('fs');
const os = require('os');
const path = require('path');
const { test } = require('node:test');
const assert = require('node:assert/strict');
const { faker } = require('@faker-js/faker');
const { buildTestApp } = require('./testing/factories');

faker.seed(99);

const makeBuildDir = () => {
  const buildDir = fs.mkdtempSync(path.join(os.tmpdir(), 'cupom-build-'));
  fs.writeFileSync(path.join(buildDir, 'index.html'), `<h1>${faker.lorem.words(3)}</h1>`);
  return buildDir;
};

test('sem build, rotas desconhecidas respondem 404 com método e url', async () => {
  const { app, db } = await buildTestApp({ buildDir: null });

  const response = await app.inject({ method: 'GET', url: '/qualquer-coisa' });

  assert.equal(response.statusCode, 404);
  assert.match(response.json().error, /GET \/qualquer-coisa/);
  await app.close();
  db.close();
});

test('com build, o SPA cai no index.html e /api continua 404', async () => {
  const buildDir = makeBuildDir();
  const { app, db } = await buildTestApp({ buildDir });

  try {
    const page = await app.inject({ method: 'GET', url: '/coupon/qualquer' });
    const api = await app.inject({ method: 'GET', url: '/api/nao-existe' });

    assert.equal(page.statusCode, 200);
    assert.match(page.headers['content-type'], /text\/html/);
    assert.equal(api.statusCode, 404);
    assert.match(api.json().error, /\/api\/nao-existe/);
  } finally {
    await app.close();
    db.close();
    fs.rmSync(buildDir, { recursive: true, force: true });
  }
});
