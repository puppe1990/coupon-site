const { buildSitemapXml, getSitemapStats } = require('./sitemap');

const companies = [{ id: 'yuool' }, { id: 'daki' }];

test('inclui as páginas estáticas e uma entrada por cupom', () => {
  const xml = buildSitemapXml({ companies, lastmod: '2026-01-01T00:00:00.000Z' });

  expect(xml).toContain('<loc>https://cupomvantagens.com.br/</loc>');
  expect(xml).toContain('<loc>https://cupomvantagens.com.br/coupon/yuool</loc>');
  expect(xml).toContain('<loc>https://cupomvantagens.com.br/coupon/daki</loc>');
  expect(xml.match(/<url>/g)).toHaveLength(8);
});

test('respeita o hostname informado', () => {
  const xml = buildSitemapXml({ hostname: 'https://staging.example.com', companies: [] });

  expect(xml).toContain('<loc>https://staging.example.com/</loc>');
  expect(xml).not.toContain('cupomvantagens.com.br');
});

test('conta páginas estáticas e dinâmicas sem número mágico', () => {
  expect(getSitemapStats(companies)).toEqual({
    staticPages: 6,
    dynamicPages: 2,
    totalPages: 8
  });
});
