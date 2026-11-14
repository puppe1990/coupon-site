import React, { useCallback, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Check, Copy } from 'lucide-react';
import { Button } from './ui/button';
import SiteFooter from './SiteFooter';
import TicketPerforation from './TicketPerforation';
import { useCopyToClipboard } from '../hooks/useCopyToClipboard';
import { categoryColor, displayName } from '../lib/couponPresentation';
import { fetchCoupon, registerCouponClick } from '../lib/api';

const PageFrame = ({ children }) => (
  <div className="flex min-h-screen flex-col bg-paper">
    <header className="border-b border-hairline">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        <a href="/" className="text-[17px] font-semibold tracking-[-0.01em]">
          Cupom Vantagens
        </a>
      </div>
    </header>
    <main className="flex flex-1 items-center justify-center px-6">{children}</main>
  </div>
);

const CouponPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { copiedCode, copyCode } = useCopyToClipboard();
  const [company, setCompany] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState('');

  const loadCoupon = useCallback(async () => {
    setIsLoading(true);
    setLoadError('');
    try {
      setCompany(await fetchCoupon(id));
    } catch (error) {
      setLoadError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    loadCoupon();
  }, [loadCoupon]);

  if (isLoading) {
    return (
      <PageFrame>
        <p className="text-sm text-ink-secondary">Carregando cupom...</p>
      </PageFrame>
    );
  }

  if (loadError) {
    return (
      <PageFrame>
        <div className="text-center">
          <p className="text-sm font-medium">Não foi possível carregar o cupom</p>
          <p className="mt-1 text-sm text-ink-secondary">{loadError}</p>
          <Button onClick={loadCoupon} className="mt-6">
            Tentar de novo
          </Button>
        </div>
      </PageFrame>
    );
  }

  if (!company) {
    return (
      <PageFrame>
        <div className="text-center">
          <h1 className="text-[24px] font-medium">Cupom não encontrado</h1>
          <Button onClick={() => navigate('/')} className="mt-6">
            Todos os cupons
          </Button>
        </div>
      </PageFrame>
    );
  }

  const copied = copiedCode === company.couponCode;

  const rows = [
    { label: 'Válido até', value: company.validUntil },
    { label: 'Termos', value: company.terms },
    {
      label: 'Site',
      value: company.companyInfo?.website,
      href: company.companyInfo?.website
    }
  ].filter((row) => row.value);

  return (
    <div className="min-h-screen bg-paper">
      <header className="border-b border-hairline">
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
          <button
            onClick={() => navigate('/')}
            className="text-[17px] font-semibold tracking-[-0.01em]"
          >
            Cupom Vantagens
          </button>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-sm text-ink-secondary transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
            Todos os cupons
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-[1200px] px-6 py-12 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div>
            <p className="flex items-center gap-2 text-xs text-ink-muted">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: categoryColor(company.category) }}
              />
              {company.category}
            </p>
            <h1 className="mt-2 text-[28px] font-medium leading-[1.15] tracking-[-0.01em] sm:text-[34px]">
              {displayName(company.name)}
            </h1>

            <div className="ticket mt-8">
              <div className="p-6 sm:p-8">
                <p className="text-[20px] font-medium leading-7 sm:text-[24px] sm:leading-8">
                  {company.discount}
                </p>
              </div>

              <TicketPerforation>
                <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-end sm:justify-between sm:p-8">
                  <div>
                    <p className="text-xs text-white/70">
                      {company.couponCode ? 'Código do cupom' : 'Oferta'}
                    </p>
                    {company.couponCode ? (
                      <p className="code mt-1 text-lg font-medium tracking-[0.08em] text-white">
                        {company.couponCode}
                      </p>
                    ) : (
                      <p className="mt-1 text-sm text-white/80">O desconto é aplicado pelo link</p>
                    )}
                  </div>

                  <div className="flex flex-col gap-2 sm:flex-row">
                    {company.couponCode && (
                      <Button
                        size="lg"
                        variant="inverse"
                        onClick={() => copyCode(company.couponCode)}
                      >
                        {copied ? (
                          <>
                            <Check className="h-4 w-4" strokeWidth={1.5} />
                            Copiado
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4" strokeWidth={1.5} />
                            Copiar código
                          </>
                        )}
                      </Button>
                    )}
                    {company.link && (
                      <Button
                        asChild
                        size="lg"
                        variant={company.couponCode ? 'onBrand' : 'inverse'}
                      >
                        <a
                          href={company.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => registerCouponClick(company.id)}
                        >
                          Abrir site
                          <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </TicketPerforation>
            </div>

            {company.description && (
              <p className="mt-8 max-w-[46rem] text-[15px] leading-7 text-ink-secondary">
                {company.description}
              </p>
            )}

            <dl className="mt-10 border-t border-hairline">
              {rows.map((row) => (
                <div
                  key={row.label}
                  className="grid gap-1 border-b border-hairline py-4 sm:grid-cols-[140px_1fr] sm:gap-6"
                >
                  <dt className="text-xs text-ink-muted">{row.label}</dt>
                  <dd className="text-sm leading-6 text-ink-secondary">
                    {row.href ? (
                      <a
                        href={row.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-ink transition-colors hover:text-brand"
                      >
                        {row.value.replace(/^https?:\/\//, '')}
                        <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                      </a>
                    ) : (
                      row.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <aside className="flex flex-col gap-8">
            <figure>
              <div className="aspect-[16/10] overflow-hidden rounded-md border border-hairline bg-raised">
                <img
                  src={company.logo}
                  alt={`Prévia do site ${displayName(company.name)}`}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <figcaption className="mt-2 text-xs text-ink-muted">Prévia do site</figcaption>
            </figure>

            {company.companyInfo?.description && (
              <div>
                <h2 className="text-sm font-medium">Sobre a empresa</h2>
                <p className="mt-2 text-sm leading-6 text-ink-secondary">
                  {company.companyInfo.description}
                </p>
              </div>
            )}
          </aside>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
};

export default CouponPage;
