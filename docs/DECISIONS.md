# Decisões Arquiteturais

## ADR-001 — Monorepo
Status: Aceito

CMS, Intranet e API ficam inicialmente no mesmo repositório.

## ADR-002 — Frontends separados
Status: Aceito

CMS e Intranet são aplicações distintas.

## ADR-003 — API compartilhada
Status: Aceito

CMS e Intranet consomem a mesma API.

## ADR-004 — Monólito modular
Status: Aceito

Microserviços não fazem parte da arquitetura inicial.

## ADR-005 — REST
Status: Aceito

GraphQL não faz parte do MVP.

## ADR-006 — PostgreSQL
Status: Aceito

Persistência relacional principal usa PostgreSQL.

## ADR-007 — Prisma
Status: Aceito

Prisma é o ORM inicial.

## ADR-008 — Storage externo
Status: Aceito

Arquivos não são armazenados como blobs no PostgreSQL.

## ADR-009 — Notificação é mecanismo de entrega
Status: Aceito

Notícia, comunicado e sistema podem gerar notificações.

## ADR-010 — Destaques são separados de notícias
Status: Aceito

Seleção editorial da home é modelada separadamente.

## ADR-011 — Marca configurável
Status: Aceito

Nome e logo presentes nos mockups são placeholders de branding.

## ADR-012 — Publicação direta no MVP
Status: Aceito

Usuário com permissão pode publicar diretamente.
Workflow de aprovação não faz parte do MVP.

## ADR-013 — Primeiro vertical slice funcional
Status: Aceito

Depois de Foundation e Design System, o primeiro vertical slice será
Categorias + Sistemas.
