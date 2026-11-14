const { test } = require('node:test');
const assert = require('node:assert/strict');
const { createCoupon, getCoupon } = require('../coupons');
const { makeCoupon, buildTestApp } = require('../testing/factories');

const TOKEN = 'token-de-teste';

const send = (app, options, token = TOKEN) =>
  app.inject({
    ...options,
    headers: { 'x-admin-token': token, ...options.headers }
  });

test('sem ADMIN_TOKEN configurado as rotas de admin respondem 503', async () => {
  const { app, db } = await buildTestApp({ adminToken: '' });

  const response = await send(app, {
    method: 'POST',
    url: '/api/admin/coupons',
    payload: makeCoupon()
  });

  assert.equal(response.statusCode, 503);
  assert.match(response.json().error, /ADMIN_TOKEN/);
  await app.close();
  db.close();
});

test('token inválido responde 401', async () => {
  const { app, db } = await buildTestApp({ adminToken: TOKEN });

  const response = await send(
    app,
    { method: 'POST', url: '/api/admin/coupons', payload: makeCoupon() },
    'errado'
  );

  assert.equal(response.statusCode, 401);
  await app.close();
  db.close();
});

test('cria cupom com 201 e recusa duplicado com 409', async () => {
  const { app, db } = await buildTestApp({ adminToken: TOKEN });
  const coupon = makeCoupon();

  const created = await send(app, { method: 'POST', url: '/api/admin/coupons', payload: coupon });
  const duplicated = await send(app, {
    method: 'POST',
    url: '/api/admin/coupons',
    payload: coupon
  });

  assert.equal(created.statusCode, 201);
  assert.equal(created.json().id, coupon.id);
  assert.equal(duplicated.statusCode, 409);
  assert.match(duplicated.json().error, new RegExp(coupon.id));
  await app.close();
  db.close();
});

test('payload inválido responde 400 com a lista de campos', async () => {
  const { app, db } = await buildTestApp({ adminToken: TOKEN });

  const response = await send(app, {
    method: 'POST',
    url: '/api/admin/coupons',
    payload: { id: 'Cupom Inválido' }
  });

  assert.equal(response.statusCode, 400);
  assert.ok(response.json().errors.some((error) => error.includes('name')));
  assert.ok(response.json().errors.some((error) => error.includes('"Cupom Inválido"')));
  await app.close();
  db.close();
});

test('atualiza com 200 e remove com 204', async () => {
  const { app, db } = await buildTestApp({ adminToken: TOKEN });
  const coupon = makeCoupon();
  createCoupon(db, coupon);

  const updated = await send(app, {
    method: 'PUT',
    url: `/api/admin/coupons/${coupon.id}`,
    payload: { ...coupon, discount: '30% OFF' }
  });
  const removed = await send(app, {
    method: 'DELETE',
    url: `/api/admin/coupons/${coupon.id}`
  });
  const removedAgain = await send(app, {
    method: 'DELETE',
    url: `/api/admin/coupons/${coupon.id}`
  });

  assert.equal(updated.statusCode, 200);
  assert.equal(updated.json().discount, '30% OFF');
  assert.equal(getCoupon(db, coupon.id), null);
  assert.equal(removed.statusCode, 204);
  assert.equal(removedAgain.statusCode, 404);
  await app.close();
  db.close();
});
