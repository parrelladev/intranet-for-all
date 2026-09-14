# Intranet Corporativa

Este repositório é a base de uma intranet corporativa com três aplicações:

- `apps/api`: API e regras de negócio
- `apps/cms`: CMS administrativo
- `apps/intranet`: portal do colaborador

O projeto também contém uma camada de orquestração de agentes em `.agents/`.

## Como usar este pacote agora

1. Abra a pasta no VS Code.
2. Leia `AGENTS.md`.
3. Confira `docs/`.
4. No Codex, peça para atuar primeiro como **Planner** sobre `EPIC-00 Foundation`.
5. Só permita execução da task `FOUND-001` inicialmente.
6. Após a implementação, execute o **Reviewer** antes de marcar a task como concluída.

## Regra central

Documentação e backlog definem o que deve acontecer.
Runs e evidências registram o que de fato aconteceu.
Memória de agentes, quando adicionada, será apenas contexto auxiliar.
