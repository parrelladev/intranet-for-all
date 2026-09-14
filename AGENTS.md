# AGENTS.md

## Objetivo

Este repositório usa execução orientada por tarefas estruturadas.

Os agentes não devem tratar mensagens de chat como fonte permanente de verdade.
A fonte de verdade está versionada no repositório.

---

## Hierarquia de autoridade

Em caso de conflito, siga esta ordem:

1. Task atual e seus critérios de aceite
2. `docs/DECISIONS.md`
3. `docs/ARCHITECTURE.md`
4. `docs/DOMAIN.md`
5. `docs/PRODUCT.md`
6. `docs/DESIGN_SYSTEM.md`
7. `docs/SCREENS.md`
8. Código existente
9. Memória recuperada de sessões anteriores

Memória de agente nunca substitui decisão formal versionada.

---

## Contexto obrigatório

Antes de alterar o projeto, leia os documentos relevantes à task.

Não carregue todos os documentos indiscriminadamente.
Use as referências declaradas no campo `context` ou `references` da task.

Leitura mínima:

- este `AGENTS.md`;
- a task atual;
- os documentos explicitamente referenciados pela task;
- os arquivos de código necessários para executar a mudança.

---

## Aplicações

O projeto possui três aplicações independentes:

- `apps/api`
- `apps/cms`
- `apps/intranet`

Regras:

- frontend não acessa o banco diretamente;
- regra de negócio pertence à API;
- CMS e Intranet não devem ser fundidos em uma única aplicação;
- pacotes compartilhados devem conter apenas responsabilidades realmente comuns.

---

## Restrições arquiteturais

Não:

- introduzir microserviços;
- trocar stack central;
- introduzir GraphQL;
- alterar ORM;
- alterar estratégia de autenticação;
- criar uma nova biblioteca central;
- modificar contratos públicos da API;

sem task ou decisão arquitetural explícita.

---

## Design

Os mockups representam intenção visual.

O Design System representa a regra estrutural.

Ao encontrar pequenas inconsistências entre mockups:

1. preserve a intenção;
2. prefira o componente compartilhado;
3. mantenha consistência entre telas;
4. registre conflito se a decisão puder afetar o produto.

Não duplique componente existente.

Não introduza cores hardcoded quando existir token semântico equivalente.

---

## Escopo

Implemente somente a task atual.

Não aproveite uma alteração para:

- refatorar módulos não relacionados;
- implementar tasks futuras;
- adicionar funcionalidades "úteis";
- alterar arquitetura por preferência.

Se encontrar trabalho necessário fora da task, registre como `follow_up`.

---

## Definition of Ready

O Executor só pode iniciar uma task com `status: "ready"`.

Uma task ready deve possuir:

- objetivo;
- dependências;
- escopo;
- referências;
- critérios de aceite;
- validações;
- non-goals.

---

## Definition of Done

Uma task só pode chegar a `done` quando:

1. implementação foi concluída;
2. validações mecânicas passaram;
3. evidência foi produzida;
4. Reviewer aprovou todos os critérios bloqueantes.

O Executor nunca marca a própria task como `done`.

---

## Validação

Antes de finalizar implementação, execute os comandos previstos na task.

Quando existirem no projeto, o baseline será:

- lint;
- typecheck;
- testes relevantes;
- build quando aplicável.

Compilar não significa estar correto.

---

## Mudanças arquiteturais

Mudanças permanentes em:

- banco;
- arquitetura;
- autenticação;
- autorização;
- bibliotecas centrais;
- contratos de API;
- Design System;

devem ser justificadas e, quando aprovadas, registradas em `docs/DECISIONS.md`.

---

## Papéis dos agentes

### Planner

Pode:

- decompor features em tasks;
- definir dependências;
- definir critérios de aceite;
- definir referências e validação;
- detectar bloqueios.

Não pode:

- inventar feature de produto;
- alterar arquitetura;
- alterar ADR;
- executar código.

### Executor

Pode:

- implementar a task atual;
- executar testes;
- produzir evidências;
- registrar follow-ups.

Não pode:

- mudar o backlog por conta própria;
- executar task futura;
- aprovar a própria implementação.

### Reviewer

Pode:

- ler task, diff, testes e evidências;
- reprovar critérios;
- registrar issues;
- aprovar task.

Não pode:

- implementar correções;
- alterar escopo;
- aprovar critério sem evidência suficiente.
