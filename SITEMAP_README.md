# Dynamic Sitemap Implementation

This project includes a dynamic sitemap generator that automatically creates a sitemap.xml file with all your static pages and dynamic coupon pages.

## Features

- **Static Pages**: Automatically includes all main pages (home, about, contact, etc.)
- **Dynamic Coupon Pages**: Generates entries for each coupon in your `companies.json` file
- **SEO Optimized**: Includes proper priority, changefreq, and lastmod attributes
- **Auto-generation**: Sitemap is automatically generated before each build

## Files Created/Modified

1. **`scripts/generateSitemap.js`** - Node.js script that generates the sitemap
2. **`src/components/SitemapPage.js`** - React component for viewing sitemap in browser
3. **`src/utils/browserSitemapGenerator.js`** - Browser-compatible sitemap generator
4. **`package.json`** - Added sitemap generation scripts
5. **`public/sitemap.xml`** - Generated sitemap file (auto-created)

## Usage

### Generate Sitemap Manually
```bash
npm run generate-sitemap
```

### Build with Sitemap
```bash
npm run build
```
The sitemap will be automatically generated before the build process.

### View Sitemap in Browser
Visit `/sitemap.xml` in your application to view the generated sitemap.

## Configuration

### Update Domain
Before deploying, update the domain in these files:
- `scripts/generateSitemap.js` (line 9)
- `src/components/SitemapPage.js` (line 10)
- `src/utils/browserSitemapGenerator.js` (line 3)

Replace `https://your-domain.com` with your actual domain.

### Customize Pages
To add or modify static pages, edit the `staticPages` array in:
- `scripts/generateSitemap.js`
- `src/components/SitemapPage.js`
- `src/utils/browserSitemapGenerator.js`

### Customize Coupon Pages
The sitemap automatically includes all coupons from `src/companies.json`. Each coupon gets:
- URL: `/coupon/{company.id}`
- Priority: 0.9
- Change frequency: weekly
- Last modified: current timestamp

## Sitemap Structure

The generated sitemap includes:

1. **Static Pages** (6 pages):
   - `/` (priority: 1.0, daily)
   - `/como-usar-cupons` (priority: 0.8, monthly)
   - `/termos-de-uso` (priority: 0.5, monthly)
   - `/politica-de-privacidade` (priority: 0.5, monthly)
   - `/contato` (priority: 0.7, monthly)
   - `/sobre-nos` (priority: 0.6, monthly)

2. **Dynamic Coupon Pages** (16 pages):
   - `/coupon/yuool`
   - `/coupon/mercado-diferente`
   - `/coupon/facio`
   - ... and all other coupons from companies.json

## Production Deployment

For production, the sitemap will be available at:
- `https://www.cupomvantagens.com.br/sitemap.xml`

Make sure to:
1. Update the domain in all configuration files
2. Submit your sitemap to Google Search Console
3. Add sitemap reference to your `robots.txt` file

## Dependencies

- `fs` - Node.js file system module (build script only)
- `path` - Node.js path module (build script only)
- No external sitemap libraries required - uses custom XML generation

## Notes

- The sitemap is automatically regenerated on each build
- All timestamps are set to the current time when generated
- The sitemap follows the sitemap.org protocol
- Search engines can efficiently crawl your site using this sitemap
