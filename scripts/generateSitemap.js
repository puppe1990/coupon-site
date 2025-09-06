const fs = require('fs');
const path = require('path');

// Read companies data
const companies = JSON.parse(fs.readFileSync(path.join(__dirname, '../src/companies.json'), 'utf8'));

const generateSitemap = () => {
  try {
    const hostname = 'https://cupomvantagens.com.br'; // Production domain
    const staticPages = [
      {
        url: '/',
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      },
      {
        url: '/como-usar-cupons',
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      },
      {
        url: '/termos-de-uso',
        changefreq: 'monthly',
        priority: 0.5,
        lastmod: new Date().toISOString(),
      },
      {
        url: '/politica-de-privacidade',
        changefreq: 'monthly',
        priority: 0.5,
        lastmod: new Date().toISOString(),
      },
      {
        url: '/contato',
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      },
      {
        url: '/sobre-nos',
        changefreq: 'monthly',
        priority: 0.6,
        lastmod: new Date().toISOString(),
      },
    ];

    // Generate XML sitemap
    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    // Add static pages
    staticPages.forEach(page => {
      sitemap += '  <url>\n';
      sitemap += `    <loc>${hostname}${page.url}</loc>\n`;
      sitemap += `    <lastmod>${page.lastmod}</lastmod>\n`;
      sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
      sitemap += `    <priority>${page.priority}</priority>\n`;
      sitemap += '  </url>\n';
    });

    // Add dynamic coupon pages
    companies.forEach(company => {
      sitemap += '  <url>\n';
      sitemap += `    <loc>${hostname}/coupon/${company.id}</loc>\n`;
      sitemap += `    <lastmod>${new Date().toISOString()}</lastmod>\n`;
      sitemap += '    <changefreq>weekly</changefreq>\n';
      sitemap += '    <priority>0.9</priority>\n';
      sitemap += '  </url>\n';
    });

    sitemap += '</urlset>';
    
    // Write sitemap to public directory
    const publicDir = path.join(__dirname, '../public');
    const sitemapPath = path.join(publicDir, 'sitemap.xml');
    
    fs.writeFileSync(sitemapPath, sitemap);
    console.log('Sitemap generated successfully at:', sitemapPath);
    console.log(`Generated sitemap with ${staticPages.length + companies.length} URLs`);
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
};

generateSitemap();
