# Intranet Corporativa

Este repositório é a base de uma intranet corporativa com três aplicações:

- `apps/api`: API e regras de negócio
- `apps/cms`: CMS administrativo
- `apps/intranet`: portal do colaborador

O projeto também contém uma camada de orquestração de agentes em `.agents/`.

## Desenvolvimento local

Requisitos: Node.js e Corepack habilitado. O campo `packageManager` na raiz
fixa o pnpm em `10.15.1`; use Corepack para selecionar essa versão.

Instale as dependências na raiz do repositório:

```sh
corepack pnpm install
```

Cada aplicação pode ser iniciada sozinha:

| Aplicação | Comando | Endereço local |
| --- | --- | --- |
| CMS | `pnpm --filter cms dev` | <http://localhost:3000> |
| API | `pnpm --filter api dev` | <http://localhost:3001> |
| Intranet | `pnpm --filter intranet dev` | <http://localhost:3002> |

Para iniciar todas em paralelo pelo Turborepo, execute `pnpm dev`.

Os comandos de validação disponíveis na raiz são `pnpm lint`,
`pnpm typecheck`, `pnpm test` e `pnpm build`. Os scripts `test` estão
preparados, mas ainda não há testes automatizados nos aplicativos.

## Como trabalhar neste repositório

1. Leia `AGENTS.md` e a task atual em `.agents/backlog/tasks/`.
2. Confira os documentos referenciados pela task em `docs/`.
3. Execute somente tasks com status `ready`, respeitando escopo e dependências.
4. Registre a execução em `.agents/runs/`, documente a mudança e submeta-a ao
   Reviewer. Só marque a task como `done` após aprovação da revisão.

O backlog versionado em `.agents/backlog/tasks/` é a fonte de estado das
tasks. Consulte `AGENTS.md` antes de iniciar o trabalho e respeite as
referências, o escopo e as validações declarados na task.

## Regra central

Documentação e backlog definem o que deve acontecer.
Runs e evidências registram o que de fato aconteceu.
Memória de agentes, quando adicionada, será apenas contexto auxiliar.
