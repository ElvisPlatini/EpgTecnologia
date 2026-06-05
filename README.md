# EpgTecnologia

Estrutura minima para publicar um site no Cloudflare Pages e um Worker no Cloudflare Workers.

## Estrutura

- `site/public`: arquivos estaticos do site.
- `site/functions`: Pages Functions opcionais para rotas dinamicas do site.
- `worker/src`: codigo do Worker independente.
- `worker/wrangler.jsonc`: configuracao do Worker.

## Comandos

```bash
npm install
npm run site:dev
npm run worker:dev
```

## Deploy

```bash
npm run site:deploy
npm run worker:deploy
```

Antes do deploy, ajuste os nomes dos projetos em `package.json` e `worker/wrangler.jsonc` conforme a conta Cloudflare.

