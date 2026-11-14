const DEFAULT_HOSTNAME = 'https://cupomvantagens.com.br';

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

const buildSitemapXml = ({
  hostname = DEFAULT_HOSTNAME,
  companies = [],
  lastmod = new Date().toISOString()
} = {}) => {
  const staticEntries = STATIC_PAGES.map((page) =>
    buildUrlEntry({
      loc: `${hostname}${page.url}`,
      lastmod,
      changefreq: page.changefreq,
      priority: page.priority
    })
  );

  const couponEntries = companies.map((company) =>
    buildUrlEntry({
      loc: `${hostname}/coupon/${company.id}`,
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

const getSitemapStats = (companies = []) => ({
  staticPages: STATIC_PAGES.length,
  dynamicPages: companies.length,
  totalPages: STATIC_PAGES.length + companies.length
});

module.exports = { DEFAULT_HOSTNAME, STATIC_PAGES, buildSitemapXml, getSitemapStats };
