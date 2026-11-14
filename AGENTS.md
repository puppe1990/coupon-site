# AGENTS.md — coupon-site

## Comandos

- Instalar: `npm install`
- API + sitemap: `npm run dev:api` (porta 3001, cria e semeia `data/app.db`)
- Front: `npm start` (porta 3000, proxy para 3001)
- Validar tudo: `npm run check` (lint + format + Jest + `node --test`)
- Só servidor: `npm run test:server`
- Produção: `npm run build && npm run serve`
- Semear forçado: `npm run seed` (upsert, sobrescreve edições)

## Mapa

- `server/seed/coupons.json` — carga inicial; o banco é a fonte em produção.
- `server/coupons.js` — validação, CRUD, cliques, seed e mapeamento linha↔API.
- `server/routes/coupons.js` — público. `server/routes/admin.js` — token `x-admin-token`.
- `server/app.js` — Fastify, estáticos, `/sitemap.xml`, fallback do SPA.
- `server/config.js` — env; nada de host/porta hardcoded fora daqui.
- `server/testing/factories.js` — `makeCoupon` e `buildTestApp` com faker (seed fixo).
- `src/lib/api.js` — cliente HTTP. `src/lib/couponPresentation.js` — nome e cor da categoria.
- `public/images/` — prévias servidas em `/images` (o banco guarda só o caminho).

## Regras

- Cupom novo: `INSERT` via admin ou `server/seed/coupons.json` + `npm run seed`. Nunca reintroduza JSON no front.
- Contrato da API é camelCase e `companyInfo` aninhado; converta só em `server/coupons.js`.
- Não duplique sitemap; use `server/sitemap.js` com `siteUrl` da config.
- SQL sempre com parâmetros nomeados; erro precisa citar o valor recebido.
- Visual: papel `#F5F0E6`, superfície `#FFFDF8`, acento `#146C43`. Sem gradiente, glow, blur ou blob.
- Rode `npm run check` antes de commitar (o husky também roda).

## Armadilhas

- `@fastify/static` com `wildcard: false` registra rota por arquivo; um `sitemap.xml` em `build/` colide com a rota dinâmica. Deixe o wildcard padrão.
- O proxy do CRA vem do `package.json`; reinicie `npm start` depois de alterá-lo.
- `node --test server` no Node 22 tenta executar `server/index.js`; use os globs do script `test:server`.
- Jest do CRA 5 não carrega `react-router` 7; teste só `src/lib`.
- `npm ci` com `NODE_ENV=production` omite devDependencies (prettier, husky, faker). Use `--include=dev`.
