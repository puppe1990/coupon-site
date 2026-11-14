const fs = require('fs');
const path = require('path');
const { buildSitemapXml } = require('../src/lib/sitemap');

const companiesPath = path.join(__dirname, '..', 'src', 'companies.json');
const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');

const generateSitemap = () => {
  const companies = JSON.parse(fs.readFileSync(companiesPath, 'utf8'));
  const sitemap = buildSitemapXml({ companies });

  fs.writeFileSync(sitemapPath, sitemap);
  console.log(`Sitemap com ${companies.length} cupons gravado em ${sitemapPath}`);
};

try {
  generateSitemap();
} catch (error) {
  console.error(`Falha ao gerar o sitemap em ${sitemapPath}: ${error.message}`);
  process.exitCode = 1;
}
