import React, { useEffect, useState } from 'react';
import { generateBrowserSitemap, getSitemapStats } from '../utils/browserSitemapGenerator';

const SitemapPage = () => {
  const [sitemap, setSitemap] = useState('');
  const [stats, setStats] = useState(null);

  useEffect(() => {
    try {
      const sitemapXml = generateBrowserSitemap('https://your-domain.com'); // Replace with your actual domain
      setSitemap(sitemapXml);
      setStats(getSitemapStats());
    } catch (error) {
      console.error('Error generating sitemap:', error);
      setSitemap('Error generating sitemap');
    }
  }, []);

  // For XML content, we need to handle this differently
  // In a real production app, this would be handled by the server
  useEffect(() => {
    if (sitemap && sitemap !== 'Error generating sitemap') {
      // Set the document title and meta for XML
      document.title = 'Sitemap';
      // In production, you'd want to set proper headers here
    }
  }, [sitemap]);

  // If this is accessed as /sitemap.xml, we want to return XML
  if (window.location.pathname === '/sitemap.xml') {
    return (
      <div style={{ display: 'none' }}>
        <pre>{sitemap}</pre>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Sitemap</h1>
      <div className="bg-gray-100 p-4 rounded-lg">
        <pre className="text-sm overflow-x-auto">
          <code>{sitemap || 'Generating sitemap...'}</code>
        </pre>
      </div>
      <div className="mt-4 text-sm text-gray-600">
        <p>This sitemap includes:</p>
        <ul className="list-disc list-inside mt-2">
          <li>{stats?.staticPages || 6} static pages (home, about, contact, etc.)</li>
          <li>{stats?.dynamicPages || 0} dynamic coupon pages</li>
          <li>Total: {stats?.totalPages || 0} URLs</li>
        </ul>
        <p className="mt-2">
          <strong>Note:</strong> In production, this should be served as a static XML file at /sitemap.xml
        </p>
      </div>
    </div>
  );
};

export default SitemapPage;
