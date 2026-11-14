const fs = require('fs');
const Fastify = require('fastify');
const fastifyStatic = require('@fastify/static');
const couponRoutes = require('./routes/coupons');
const adminRoutes = require('./routes/admin');
const { listCoupons } = require('./coupons');
const { buildSitemapXml } = require('./sitemap');

const buildApp = async ({ config, db }) => {
  const app = Fastify({ logger: false });
  const hasBuild = Boolean(config.buildDir) && fs.existsSync(`${config.buildDir}/index.html`);

  if (hasBuild) {
    await app.register(fastifyStatic, { root: config.buildDir });
  }

  app.get('/api/health', () => ({ status: 'ok' }));

  app.get('/sitemap.xml', (request, reply) =>
    reply
      .type('application/xml')
      .send(buildSitemapXml({ siteUrl: config.siteUrl, coupons: listCoupons(db) }))
  );

  await app.register(couponRoutes, { db });
  await app.register(adminRoutes, { db, adminToken: config.adminToken });

  app.setNotFoundHandler((request, reply) => {
    if (!hasBuild || request.raw.url.startsWith('/api')) {
      return reply
        .code(404)
        .send({ error: `rota não encontrada: ${request.method} ${request.raw.url}` });
    }
    return reply.sendFile('index.html');
  });

  return app;
};

module.exports = { buildApp };
