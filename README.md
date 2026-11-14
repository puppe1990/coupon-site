# Cupom Vantagens

Diretório de 15 códigos de indicação para a primeira compra em apps e lojas brasileiras. React (CRA) + Tailwind no front, Fastify + SQLite no back.

## Rodar

```bash
npm install
npm run dev:api   # API + sitemap em :3001 (cria e semeia data/app.db no primeiro boot)
npm start         # front em :3000, com proxy para :3001
```

Abre em http://localhost:3000.

## Validar

```bash
npm run check
```

Roda lint, formatação, testes do front (Jest) e testes do servidor (`node --test`). É o mesmo comando do pre-commit e do CI.

## Produção

```bash
npm run build
npm run serve
```

`npm run serve` sobe o Fastify em `PORT`, serve `build/` e responde `/api/*` e `/sitemap.xml` na mesma origem. O banco é semeado na primeira subida se estiver vazio.

## API

- `GET /api/coupons?search=` — lista por posição, filtrando por nome ou categoria
- `GET /api/coupons/:id` — detalhe ou 404
- `POST /api/coupons/:id/click` — registra clique de saída (204)
- `GET /sitemap.xml` — gerado do banco
- `GET /api/health` — `{ "status": "ok" }`
- `POST/PUT/DELETE /api/admin/coupons[/:id]` — protegidas por `x-admin-token` (sem `ADMIN_TOKEN`, respondem 503)

## Variáveis

| Variável            | Padrão                  | Uso                                        |
| ------------------- | ----------------------- | ------------------------------------------ |
| `PORT`              | `3001`                  | porta do Fastify                           |
| `DATABASE_PATH`     | `./data/app.db`         | arquivo SQLite                             |
| `BUILD_DIR`         | `./build`               | estáticos do CRA                           |
| `SITE_URL`          | `http://localhost:3000` | host usado no sitemap                      |
| `ADMIN_TOKEN`       | vazio                   | token das rotas de admin                   |
| `REACT_APP_API_URL` | vazio                   | API em outra origem (vazio = mesma origem) |

Veja `.env.example`.

## Estrutura

- `server/config.js` — leitura das variáveis de ambiente.
- `server/db.js` — abre o SQLite (WAL) e aplica o schema.
- `server/coupons.js` — repositório: validação, CRUD, cliques e seed.
- `server/routes/` — rotas públicas e de admin.
- `server/sitemap.js` — única implementação do sitemap.
- `server/seed/coupons.json` — carga inicial do banco.
- `public/images/` — prévias dos sites, servidas em `/images`.
- `public/favicon.svg` — marca da aba (canhoto). `npm run icons` gera `favicon.ico`, `logo192.png`, `logo512.png` e `apple-touch-icon.png`.
- `public/og.html` — card Open Graph 1200×630. `npm run og` gera `public/og.png`.
- `src/lib/api.js` — cliente da API.
- `src/lib/couponPresentation.js` — nome exibido e cor por categoria.
- `src/components/TicketPerforation.js` — canhoto verde com picote.
- `src/hooks/useCopyToClipboard.js` — cópia com feedback de 2s.
- `AGENTS.md` — regras e armadilhas para agentes.

## Notas

- O Jest do CRA 5 não resolve o `react-router` 7 (usa `exports` ESM). Teste módulos puros em `src/lib`.
- `npm start` lê o `proxy` do `package.json`; reinicie o dev server depois de mexer nele.
