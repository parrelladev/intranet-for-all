# Arquitetura

## Visão

Monorepo com três aplicações:

- `apps/api`
- `apps/cms`
- `apps/intranet`

Os frontends são independentes.
Toda regra de negócio passa pela API.

## Stack congelada para o MVP

- TypeScript
- pnpm workspaces
- Turborepo
- Next.js para CMS
- Next.js para Intranet
- NestJS para API
- PostgreSQL
- Prisma
- REST
- Tailwind CSS
- Zod onde compartilhável
- React Hook Form
- TanStack Query
- TipTap
- storage S3-compatible
- Playwright para fluxos E2E críticos

## Backend

Monólito modular.

Módulos previstos:

- auth
- users
- news
- categories
- systems
- pages
- banners
- highlights
- notifications
- media

## Convenções de API

Administrativa:

`/api/admin/*`

Portal:

`/api/*`

Usuário autenticado:

`/api/me/*`

## Home

Preferir endpoint de composição:

`GET /api/home`

para evitar que a home dependa de várias chamadas independentes.

## Autenticação

Arquitetura preparada para OpenID Connect.

O código de domínio não deve depender diretamente do provedor de identidade.

## Autorização

Autorização é responsabilidade da API.

Ocultar botão no frontend não constitui controle de acesso.

## Datas

Persistir e trafegar datas de backend em UTC.
Converter para timezone de apresentação na borda da aplicação.

## IDs

Usar UUID para entidades de domínio.

## Arquivos

Frontend -> API -> storage S3-compatible.

Banco armazena metadados e referências.
