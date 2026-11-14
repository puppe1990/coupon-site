import React from 'react';
import { useNavigate } from 'react-router-dom';

const cupomLinks = [
  { label: 'Todos os cupons', path: '/' },
  { label: 'Como usar cupons', path: '/como-usar-cupons' }
];

const siteLinks = [
  { label: 'Sobre nós', path: '/sobre-nos' },
  { label: 'Termos de uso', path: '/termos-de-uso' },
  { label: 'Política de privacidade', path: '/politica-de-privacidade' },
  { label: 'Contato', path: '/contato' }
];

const SiteFooter = () => {
  const navigate = useNavigate();

  return (
    <footer className="border-t border-hairline bg-brand-soft">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="text-[17px] font-semibold tracking-[-0.01em]">Cupom Vantagens</p>
          <p className="mt-3 max-w-[26rem] text-sm leading-6 text-ink-secondary">
            Códigos de indicação de apps e lojas brasileiras, com validade e termos em cada oferta.
          </p>
        </div>
        <div>
          <p className="text-xs text-ink-muted">Cupons</p>
          <ul className="mt-2 space-y-2">
            {cupomLinks.map((link) => (
              <li key={link.path}>
                <button
                  onClick={() => navigate(link.path)}
                  className="text-sm text-ink-secondary transition-colors hover:text-ink"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs text-ink-muted">Site</p>
          <ul className="mt-2 space-y-2">
            {siteLinks.map((link) => (
              <li key={link.path}>
                <button
                  onClick={() => navigate(link.path)}
                  className="text-sm text-ink-secondary transition-colors hover:text-ink"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-[1200px] border-t border-hairline px-6 py-6">
        <p className="text-xs text-ink-muted">© {new Date().getFullYear()} Cupom Vantagens</p>
      </div>
    </footer>
  );
};

export default SiteFooter;
