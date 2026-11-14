# Cupom Vantagens

Diretório de 17 códigos de indicação para a primeira compra em apps e lojas brasileiras. React (CRA) + Tailwind, sem backend.

## Rodar

```bash
npm install
npm start
```

Abre em http://localhost:3000.

## Validar

Um comando roda lint, formatação e testes:

```bash
npm run check
```

O mesmo comando roda no pre-commit (husky) e no CI.

## Build

```bash
npm run build
```

O `prebuild` regenera `public/sitemap.xml` a partir de `src/companies.json`.

## Estrutura

- `src/companies.json` — fonte dos cupons: nome, desconto, código, link, categoria, validade e termos.
- `src/lib/companies.js` — normaliza logo, nome exibido (`displayName`) e cor por categoria.
- `src/lib/sitemap.js` — única implementação do sitemap; usada pelo script de build e por `/sitemap.xml`.
- `src/components/HomePage.js` — busca, ticket em destaque e grade de cupons.
- `src/components/CouponPage.js` — detalhe do cupom com código, termos e prévia do site.
- `src/components/TicketPerforation.js` — canhoto verde com picote.
- `src/hooks/useCopyToClipboard.js` — cópia do código com feedback de 2s.
- `src/index.css` — tokens de papel e as classes `.ticket`, `.ticket-stub` e `.ticket-notch`.
- `AGENTS.md` — regras e armadilhas para agentes.

## Notas

- O Jest do CRA 5 não resolve o `react-router` 7 (usa `exports` ESM). Teste módulos puros em `src/lib`, não páginas.
- `public/sitemap.xml` é gerado no build; não edite à mão.
