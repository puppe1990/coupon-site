# AGENTS.md — coupon-site

## Comandos

- Instalar: `npm install`
- Dev: `npm start` (porta 3000)
- Validar tudo: `npm run check` (lint + format:check + test:ci)
- Só testes: `npm run test:ci`
- Build: `npm run build` (o `prebuild` regenera `public/sitemap.xml`)

## Mapa

- `src/companies.json` — fonte dos cupons (nome, desconto, código, link, categoria, validade, termos).
- `src/lib/companies.js` — logo resolvida, `displayName` e `categoryColor`.
- `src/lib/sitemap.js` — única implementação do sitemap; usada pelo script de build e por `/sitemap.xml`.
- `src/components/HomePage.js` e `CouponPage.js` — telas principais.
- `src/components/TicketPerforation.js` — canhoto verde com picote.
- `src/hooks/useCopyToClipboard.js` — cópia com feedback de 2s.
- `src/index.css` — tokens de papel e classes `.ticket`, `.ticket-stub`, `.ticket-notch`.

## Regras

- Novo cupom: só `src/companies.json` + imagem em `src/images`. Não invente campos.
- Não duplique geração de sitemap; importe de `src/lib/sitemap.js`.
- Nome exibido vem de `displayName()`; não renomeie os dados.
- Visual: papel `#F5F0E6`, superfície `#FFFDF8`, acento único `#146C43`. Sem gradiente, glow, blur ou blob.
- Ícones: lucide, 16px, stroke 1.5.
- Rode `npm run check` antes de commitar (o husky também roda).
- Código em português para copy, inglês para identificadores.

## Armadilhas

- Jest do CRA 5 não carrega `react-router` 7. Teste módulos puros em `src/lib`; não importe páginas em teste.
- `public/sitemap.xml` é gerado no build; não edite à mão.
- O ambiente pode estar com `NODE_ENV=production`; nesse caso `npm ci` omite devDependencies (prettier/husky). Use `--include=dev`.
