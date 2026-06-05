# EpgTecnologia

Estrutura minima para publicar um site no Cloudflare Pages e um Worker no Cloudflare Workers.

## Estrutura

- `site/public`: arquivos estaticos do site.
- `site/functions`: Pages Functions opcionais para rotas dinamicas do site.
- `worker/src`: codigo do Worker independente.
- `wrangler.jsonc`: configuracao principal para deploy via `npx wrangler deploy`.
- `worker/wrangler.jsonc`: configuracao alternativa para deploy isolado do Worker.

## Comandos

```bash
npm install
npm run dev
```

## Deploy

```bash
npm run deploy
```

No Cloudflare Workers Builds, use o comando de deploy:

```bash
npx wrangler deploy
```

Antes do deploy, ajuste os nomes dos projetos em `wrangler.jsonc`, `package.json` e `worker/wrangler.jsonc` conforme a conta Cloudflare.
