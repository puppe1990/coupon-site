const { listCoupons, getCoupon, registerClick } = require('../coupons');

module.exports = async (app, { db }) => {
  app.get('/api/coupons', (request) => listCoupons(db, { search: request.query.search || '' }));

  app.get('/api/coupons/:id', (request, reply) => {
    const coupon = getCoupon(db, request.params.id);
    if (!coupon) {
      return reply.code(404).send({ error: `cupom não encontrado: ${request.params.id}` });
    }
    return coupon;
  });

  app.post('/api/coupons/:id/click', (request, reply) => {
    if (!registerClick(db, request.params.id)) {
      return reply.code(404).send({ error: `cupom não encontrado: ${request.params.id}` });
    }
    return reply.code(204).send();
  });
};
