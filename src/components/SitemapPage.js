import React, { useEffect, useState } from 'react';
import companies from '../companies.json';
import { buildSitemapXml, getSitemapStats } from '../lib/sitemap';

const SitemapPage = () => {
  const [sitemap, setSitemap] = useState('');
  const [stats, setStats] = useState(null);

  useEffect(() => {
    try {
      setSitemap(buildSitemapXml({ companies }));
      setStats(getSitemapStats(companies));
    } catch (error) {
      console.error(`Falha ao montar o sitemap com ${companies.length} cupons: ${error.message}`);
      setSitemap('Erro ao gerar o sitemap');
    }
  }, []);

  useEffect(() => {
    if (sitemap && sitemap !== 'Erro ao gerar o sitemap') {
      document.title = 'Sitemap';
    }
  }, [sitemap]);

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
          <code>{sitemap || 'Gerando sitemap...'}</code>
        </pre>
      </div>
      <div className="mt-4 text-sm text-gray-600">
        <p>Este sitemap inclui:</p>
        <ul className="list-disc list-inside mt-2">
          <li>{stats?.staticPages ?? 0} páginas estáticas</li>
          <li>{stats?.dynamicPages ?? 0} páginas de cupom</li>
          <li>Total: {stats?.totalPages ?? 0} URLs</li>
        </ul>
        <p className="mt-2">
          <strong>Nota:</strong> em produção o arquivo estático é gerado no build em{' '}
          <code>public/sitemap.xml</code>.
        </p>
      </div>
    </div>
  );
};

export default SitemapPage;
