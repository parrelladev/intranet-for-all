# Como operar a orquestração manualmente

## 1. Escolha a próxima task

No começo, use:

`FOUND-001`

Ela é a única task marcada como `ready`.

## 2. Abra uma sessão do Codex como Planner

Peça:

> Leia AGENTS.md, o prompt .agents/prompts/planner.md e EPIC-00.
> Verifique se FOUND-001 está realmente pronta.
> Não implemente código.

O Planner serve para validar o contrato, não para programar.

## 3. Abra uma nova sessão como Executor

Peça:

> Leia AGENTS.md, .agents/prompts/executor.md e
> .agents/backlog/tasks/FOUND-001.json.
> Execute somente FOUND-001.
> Ao terminar, produza evidência compatível com execution.schema.json.

Idealmente faça isso em uma conversa/sessão separada para evitar mistura de papéis.

## 4. Salve a evidência

Crie uma run, por exemplo:

`.agents/runs/RUN-0001/`

e salve:

`evidence/FOUND-001.json`

## 5. Documente a implementação

Depois que a implementação for concluída, faça uma etapa própria para atualizar
a documentação afetada pela task. Consulte as referências da task e mantenha
README, instruções de setup, decisões e documentação técnica alinhados ao
comportamento entregue. Altere somente arquivos permitidos pelo escopo da task;
se a documentação necessária estiver fora dele, registre um `follow_up` para o
Planner em vez de ampliar o escopo.

Registre os arquivos e a razão das mudanças na evidência. Se não houver
documentação afetada, registre essa avaliação e a justificativa na evidência.
Apresente as mudanças documentais para aprovação antes de prosseguir.

## 6. Abra uma nova sessão como Reviewer

Peça:

> Leia AGENTS.md, .agents/prompts/reviewer.md,
> a task FOUND-001, a evidência e o git diff.
> Não altere código.
> Retorne review compatível com review.schema.json.

## 7. Se aprovado

- salve o review;
- marque FOUND-001 como `done`;
- escolha tasks cujas dependências agora estejam atendidas;
- o Planner pode marcar a próxima como `ready`.

## 8. Se reprovado

- marque a task como `rework`;
- aumente `attempt`;
- execute novamente com o feedback do Reviewer;
- limite recomendado inicial: 3 tentativas.

## Regra prática

Não automatize este fluxo ainda.
Execute algumas tasks manualmente para descobrir onde os contratos precisam melhorar.
