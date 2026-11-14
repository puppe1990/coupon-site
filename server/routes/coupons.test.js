const { test } = require('node:test');
const assert = require('node:assert/strict');
const { createCoupon, countClicks } = require('../coupons');
const { makeCoupon, buildTestApp } = require('../testing/factories');

test('GET /api/coupons lista os cupons cadastrados', async () => {
  const { app, db } = await buildTestApp();
  const coupon = makeCoupon();
  createCoupon(db, coupon);

  const response = await app.inject({ method: 'GET', url: '/api/coupons' });

  assert.equal(response.statusCode, 200);
  assert.deepEqual(
    response.json().map((item) => item.id),
    [coupon.id]
  );
  await app.close();
  db.close();
});

test('GET /api/coupons/:id responde 200 e 404', async () => {
  const { app, db } = await buildTestApp();
  const coupon = makeCoupon();
  createCoupon(db, coupon);

  const found = await app.inject({ method: 'GET', url: `/api/coupons/${coupon.id}` });
  const missing = await app.inject({ method: 'GET', url: '/api/coupons/nao-existe' });

  assert.equal(found.statusCode, 200);
  assert.equal(found.json().id, coupon.id);
  assert.equal(missing.statusCode, 404);
  assert.match(missing.json().error, /nao-existe/);
  await app.close();
  db.close();
});

test('POST /api/coupons/:id/click grava o clique', async () => {
  const { app, db } = await buildTestApp();
  const coupon = makeCoupon();
  createCoupon(db, coupon);

  const response = await app.inject({ method: 'POST', url: `/api/coupons/${coupon.id}/click` });
  const missing = await app.inject({ method: 'POST', url: '/api/coupons/nao-existe/click' });

  assert.equal(response.statusCode, 204);
  assert.equal(countClicks(db, coupon.id), 1);
  assert.equal(missing.statusCode, 404);
  await app.close();
  db.close();
});

test('GET /sitemap.xml monta o XML a partir do banco', async () => {
  const { app, db } = await buildTestApp();
  const coupon = makeCoupon();
  createCoupon(db, coupon);

  const response = await app.inject({ method: 'GET', url: '/sitemap.xml' });

  assert.equal(response.statusCode, 200);
  assert.match(response.headers['content-type'], /application\/xml/);
  assert.match(response.body, new RegExp(`/coupon/${coupon.id}`));
  await app.close();
  db.close();
});

test('GET /api/health responde ok', async () => {
  const { app, db } = await buildTestApp();

  const response = await app.inject({ method: 'GET', url: '/api/health' });

  assert.deepEqual(response.json(), { status: 'ok' });
  await app.close();
  db.close();
});
