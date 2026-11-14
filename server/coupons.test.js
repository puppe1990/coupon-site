const { test } = require('node:test');
const assert = require('node:assert/strict');
const { openDatabase } = require('./db');
const { makeCoupon } = require('./testing/factories');
const {
  validateCoupon,
  listCoupons,
  getCoupon,
  createCoupon,
  updateCoupon,
  deleteCoupon,
  registerClick,
  countClicks,
  seedCoupons,
  seedIfEmpty
} = require('./coupons');

const setup = () => openDatabase(':memory:');

test('cria cupom e devolve o contrato da API com logo normalizada', () => {
  const db = setup();
  const coupon = makeCoupon();

  const created = createCoupon(db, coupon);

  assert.equal(created.id, coupon.id);
  assert.equal(created.logo, `/images/${coupon.logo}`);
  assert.equal(created.couponCode, coupon.couponCode);
  assert.deepEqual(created.companyInfo, coupon.companyInfo);
  db.close();
});

test('lista por posição e filtra por nome ou categoria', () => {
  const db = setup();
  const first = makeCoupon({ category: 'Delivery' });
  const second = makeCoupon({ category: 'Fintech' });
  createCoupon(db, first);
  createCoupon(db, second);

  assert.deepEqual(
    listCoupons(db).map((coupon) => coupon.id),
    [first.id, second.id]
  );
  assert.deepEqual(
    listCoupons(db, { search: 'fintech' }).map((coupon) => coupon.id),
    [second.id]
  );
  db.close();
});

test('atualiza campos parciais preservando o restante', () => {
  const db = setup();
  const coupon = makeCoupon();
  createCoupon(db, coupon);

  const updated = updateCoupon(db, coupon.id, {
    discount: '20% OFF',
    companyInfo: { website: 'https://exemplo.test' }
  });

  assert.equal(updated.discount, '20% OFF');
  assert.equal(updated.name, coupon.name);
  assert.equal(updated.companyInfo.website, 'https://exemplo.test');
  assert.equal(updated.companyInfo.description, coupon.companyInfo.description);
  db.close();
});

test('remove o cupom e os cliques ligados a ele', () => {
  const db = setup();
  const coupon = makeCoupon();
  createCoupon(db, coupon);
  registerClick(db, coupon.id);

  assert.equal(deleteCoupon(db, coupon.id), true);
  assert.equal(getCoupon(db, coupon.id), null);
  assert.equal(countClicks(db, coupon.id), 0);
  assert.equal(deleteCoupon(db, coupon.id), false);
  db.close();
});

test('registra clique apenas em cupom existente', () => {
  const db = setup();
  const coupon = makeCoupon();
  createCoupon(db, coupon);

  assert.equal(registerClick(db, coupon.id), true);
  assert.equal(registerClick(db, coupon.id), true);
  assert.equal(countClicks(db, coupon.id), 2);
  assert.equal(registerClick(db, 'nao-existe'), false);
  db.close();
});

test('valida campos obrigatórios e formato do id com contexto', () => {
  const errors = validateCoupon({ id: 'Cupom Inválido', name: '' });

  assert.ok(errors.some((error) => error.includes('name')));
  assert.ok(errors.some((error) => error.includes('logo')));
  assert.ok(errors.some((error) => error.includes('"Cupom Inválido"')));
  assert.deepEqual(validateCoupon(makeCoupon()), []);
});

test('seed preenche banco vazio e não sobrescreve edições', () => {
  const db = setup();
  const coupons = [makeCoupon(), makeCoupon()];

  assert.equal(seedIfEmpty(db, coupons), 2);
  assert.equal(seedIfEmpty(db, coupons), 0);

  const edited = updateCoupon(db, coupons[0].id, { discount: 'editado' });
  assert.equal(seedIfEmpty(db, coupons), 0);
  assert.equal(getCoupon(db, edited.id).discount, 'editado');
  db.close();
});

test('seed forçado faz upsert sem duplicar', () => {
  const db = setup();
  const coupons = [makeCoupon(), makeCoupon()];

  seedCoupons(db, coupons);
  seedCoupons(
    db,
    coupons.map((coupon) => ({ ...coupon, discount: 'atualizado' }))
  );

  const all = listCoupons(db);
  assert.equal(all.length, 2);
  assert.ok(all.every((coupon) => coupon.discount === 'atualizado'));
  db.close();
});
