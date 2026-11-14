const STATIC_PAGES = [
  { url: '/', changefreq: 'daily', priority: 1 },
  { url: '/como-usar-cupons', changefreq: 'monthly', priority: 0.8 },
  { url: '/termos-de-uso', changefreq: 'monthly', priority: 0.5 },
  { url: '/politica-de-privacidade', changefreq: 'monthly', priority: 0.5 },
  { url: '/contato', changefreq: 'monthly', priority: 0.7 },
  { url: '/sobre-nos', changefreq: 'monthly', priority: 0.6 }
];

const buildUrlEntry = ({ loc, lastmod, changefreq, priority }) =>
  [
    '  <url>',
    `    <loc>${loc}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    '  </url>'
  ].join('\n');

const buildSitemapXml = ({ siteUrl, coupons = [], lastmod = new Date().toISOString() } = {}) => {
  if (!siteUrl) {
    throw new Error(`siteUrl é obrigatório para montar o sitemap (recebido: ${siteUrl})`);
  }

  const staticEntries = STATIC_PAGES.map((page) =>
    buildUrlEntry({
      loc: `${siteUrl}${page.url}`,
      lastmod,
      changefreq: page.changefreq,
      priority: page.priority
    })
  );

  const couponEntries = coupons.map((coupon) =>
    buildUrlEntry({
      loc: `${siteUrl}/coupon/${coupon.id}`,
      lastmod,
      changefreq: 'weekly',
      priority: 0.9
    })
  );

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...staticEntries,
    ...couponEntries,
    '</urlset>'
  ].join('\n');
};

module.exports = { STATIC_PAGES, buildSitemapXml };
