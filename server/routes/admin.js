const { validateCoupon, createCoupon, updateCoupon, deleteCoupon } = require('../coupons');

module.exports = async (app, { db, adminToken }) => {
  const requireAdmin = async (request, reply) => {
    if (!adminToken) {
      return reply.code(503).send({ error: 'ADMIN_TOKEN não configurado' });
    }
    if (request.headers['x-admin-token'] !== adminToken) {
      return reply.code(401).send({ error: 'token de admin inválido' });
    }
  };

  app.post('/api/admin/coupons', { preHandler: requireAdmin }, (request, reply) => {
    const errors = validateCoupon(request.body);
    if (errors.length > 0) {
      return reply.code(400).send({ errors });
    }

    try {
      return reply.code(201).send(createCoupon(db, request.body));
    } catch (error) {
      if (error.code === 'SQLITE_CONSTRAINT_PRIMARYKEY') {
        return reply.code(409).send({ error: `cupom já existe: ${request.body.id}` });
      }
      throw error;
    }
  });

  app.put('/api/admin/coupons/:id', { preHandler: requireAdmin }, (request, reply) => {
    const errors = validateCoupon({ ...request.body, id: request.params.id });
    if (errors.length > 0) {
      return reply.code(400).send({ errors });
    }

    const updated = updateCoupon(db, request.params.id, request.body);
    if (!updated) {
      return reply.code(404).send({ error: `cupom não encontrado: ${request.params.id}` });
    }
    return updated;
  });

  app.delete('/api/admin/coupons/:id', { preHandler: requireAdmin }, (request, reply) => {
    if (!deleteCoupon(db, request.params.id)) {
      return reply.code(404).send({ error: `cupom não encontrado: ${request.params.id}` });
    }
    return reply.code(204).send();
  });
};
