import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Check, Copy, Search, X } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import SiteFooter from './SiteFooter';
import { companies, categoryColor, displayName } from '../lib/companies';

const HomePage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [copiedCode, setCopiedCode] = useState('');

  const term = searchTerm.trim().toLowerCase();
  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(term)
  );
  const featured = companies.find((company) => company.couponCode) || companies[0];

  const countLabel = filteredCompanies.length === companies.length
    ? `${companies.length} cupons`
    : `${filteredCompanies.length} de ${companies.length} cupons`;

  const handleCopy = async (code) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(''), 2000);
    } catch (err) {
      console.error('Falha ao copiar o código: ', err);
    }
  };

  return (
    <div className="min-h-screen bg-paper">
      <header className="border-b border-hairline">
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
          <button
            onClick={() => navigate('/')}
            className="whitespace-nowrap text-[17px] font-semibold tracking-[-0.01em]"
          >
            Cupom Vantagens
          </button>
          <nav className="hidden items-center gap-6 text-sm text-ink-secondary sm:flex">
            <button
              onClick={() => navigate('/como-usar-cupons')}
              className="transition-colors hover:text-ink"
            >
              Como usar cupons
            </button>
            <button
              onClick={() => navigate('/contato')}
              className="transition-colors hover:text-ink"
            >
              Contato
            </button>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-[1200px] px-6 pb-16 pt-20 lg:pt-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_360px]">
            <div>
              <h1 className="max-w-[42rem] text-[34px] font-medium leading-[1.08] tracking-[-0.02em] sm:text-[44px] lg:text-[52px]">
                Códigos de indicação para a primeira compra
              </h1>
              <p className="mt-5 max-w-[34rem] text-base leading-7 text-ink-secondary sm:text-lg sm:leading-8">
                Descontos de apps e lojas brasileiras. Copie o código e use no site da marca.
              </p>

              <div className="relative mt-8 w-full max-w-[380px]">
                <Search
                  className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted"
                  strokeWidth={1.5}
                />
                <input
                  type="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Buscar empresa"
                  aria-label="Buscar empresa"
                  className="h-11 w-full rounded-md border border-hairline bg-surface pl-9 pr-9 text-[15px] text-ink transition-colors placeholder:text-ink-muted focus:border-brand"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    aria-label="Limpar busca"
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-sm p-1 text-ink-muted transition-colors hover:text-ink"
                  >
                    <X className="h-4 w-4" strokeWidth={1.5} />
                  </button>
                )}
              </div>
            </div>

            {featured && (
              <div className="ticket w-full max-w-[360px] lg:justify-self-end">
                <div className="p-6">
                  <p className="text-xs text-ink-muted">Código de indicação</p>
                  <p className="mt-3 text-[24px] font-medium leading-[1.25] tracking-[-0.01em]">
                    {featured.discount}
                  </p>
                  <p className="mt-2 text-sm text-ink-secondary">{displayName(featured.name)}</p>
                </div>
                {featured.couponCode && (
                  <div className="ticket-perforation ticket-stub">
                    <span className="ticket-notch ticket-notch-left" />
                    <span className="ticket-notch ticket-notch-right" />
                    <div className="flex items-center justify-between gap-4 p-4 pl-5">
                      <span className="code text-sm font-medium tracking-[0.08em] text-white">
                        {featured.couponCode}
                      </span>
                      <Button
                        size="sm"
                        variant="inverse"
                        onClick={() => handleCopy(featured.couponCode)}
                      >
                        {copiedCode === featured.couponCode ? (
                          <>
                            <Check className="h-4 w-4" strokeWidth={1.5} />
                            Copiado
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4" strokeWidth={1.5} />
                            Copiar
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-6 pb-24">
          <div className="border-t border-hairline pt-6">
            <p className="code figure text-xs text-ink-muted">{countLabel}</p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCompanies.map((company) => (
              <article
                key={company.id}
                className="group flex flex-col overflow-hidden rounded-xl border border-hairline bg-surface transition-colors duration-150 hover:border-brand/30"
              >
                <div className="aspect-[16/10] overflow-hidden border-b border-hairline bg-raised">
                  <img
                    src={company.logo}
                    alt={`Prévia do site ${displayName(company.name)}`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <p className="flex items-center gap-2 text-xs text-ink-muted">
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: categoryColor(company.category) }}
                    />
                    {company.category}
                  </p>
                  <h2 className="mt-1 text-[15px] font-medium leading-6">
                    <button
                      onClick={() => navigate(`/coupon/${company.id}`)}
                      className="text-left underline-offset-4 decoration-hairline hover:underline"
                    >
                      {displayName(company.name)}
                    </button>
                  </h2>
                  <p className="mt-1 line-clamp-2 text-sm leading-5 text-ink-secondary">
                    {company.discount}
                  </p>

                  <div className="mt-auto flex items-center justify-between gap-3 border-t border-hairline pt-4">
                    {company.couponCode ? (
                      <button
                        onClick={() => handleCopy(company.couponCode)}
                        aria-label={`Copiar código ${company.couponCode}`}
                        className="code flex items-center gap-2 rounded-sm bg-raised px-2 py-1.5 text-xs text-ink transition-colors hover:bg-raised-hover"
                      >
                        {company.couponCode}
                        {copiedCode === company.couponCode ? (
                          <Check className="h-4 w-4 text-brand" strokeWidth={1.5} />
                        ) : (
                          <Copy className="h-4 w-4 text-ink-muted" strokeWidth={1.5} />
                        )}
                      </button>
                    ) : (
                      <span className="text-xs text-ink-muted">Aplicado pelo link</span>
                    )}
                    <button
                      onClick={() => setSelectedCompany(company)}
                      className="inline-flex items-center gap-1 text-sm font-medium text-brand transition-colors hover:text-brand-hover"
                    >
                      Ver cupom
                      <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredCompanies.length === 0 && (
            <div className="mt-8 rounded-xl border border-dashed border-hairline bg-surface px-6 py-16 text-center">
              <Search className="mx-auto h-4 w-4 text-ink-muted" strokeWidth={1.5} />
              <p className="mt-4 text-sm font-medium">Nenhum cupom para “{searchTerm.trim()}”</p>
              <p className="mt-1 text-sm text-ink-secondary">Tente outra empresa ou limpe a busca.</p>
              <Button variant="secondary" className="mt-6" onClick={() => setSearchTerm('')}>
                Limpar busca
              </Button>
            </div>
          )}
        </section>
      </main>

      <SiteFooter />

      <Dialog open={selectedCompany !== null} onOpenChange={(open) => !open && setSelectedCompany(null)}>
        <DialogContent className="max-w-[440px]">
          {selectedCompany && (
            <>
              <DialogHeader>
                <DialogTitle>{displayName(selectedCompany.name)}</DialogTitle>
                <DialogDescription>{selectedCompany.discount}</DialogDescription>
              </DialogHeader>

              {selectedCompany.couponCode && (
                <div className="mt-6">
                  <p className="text-xs text-ink-muted">Código do cupom</p>
                  <div className="mt-2 flex items-center justify-between gap-3 rounded-md bg-brand px-4 py-3">
                    <span className="code text-base font-medium tracking-[0.08em] text-white">
                      {selectedCompany.couponCode}
                    </span>
                    <Button
                      size="sm"
                      variant="inverse"
                      onClick={() => handleCopy(selectedCompany.couponCode)}
                    >
                      {copiedCode === selectedCompany.couponCode ? (
                        <>
                          <Check className="h-4 w-4" strokeWidth={1.5} />
                          Copiado
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" strokeWidth={1.5} />
                          Copiar
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              )}

              {selectedCompany.link && (
                <Button
                  asChild
                  size="lg"
                  variant={selectedCompany.couponCode ? 'secondary' : 'primary'}
                  className="mt-6 w-full"
                >
                  <a href={selectedCompany.link} target="_blank" rel="noopener noreferrer">
                    Abrir site
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                  </a>
                </Button>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HomePage;
