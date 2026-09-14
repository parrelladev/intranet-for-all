# Design System

## Princípios

- minimalista;
- corporativo;
- claro;
- consistente;
- acessível.

## Componentes base

- Button
- IconButton
- Input
- Textarea
- Select
- Checkbox
- Radio
- Switch
- Badge
- Avatar
- Breadcrumb
- Card
- Table
- Pagination
- DropdownMenu
- Modal
- ConfirmDialog
- FileUpload
- RichTextEditor
- SearchInput
- EmptyState
- LoadingState
- ErrorState
- PageHeader
- Sidebar
- Toast

## CMS

Estrutura padrão:

- sidebar;
- header;
- conteúdo principal;
- PageHeader;
- toolbar/filtros;
- conteúdo/tabela/formulário;
- paginação quando aplicável.

## Intranet

Estrutura padrão:

- header;
- navegação;
- conteúdo;
- footer.

## Tokens

Não usar valores arbitrários quando existir token equivalente.

Tokens mínimos:

- `--color-primary`
- `--color-primary-hover`
- `--color-background`
- `--color-surface`
- `--color-text-primary`
- `--color-text-secondary`
- `--color-border`
- `--color-success`
- `--color-warning`
- `--color-danger`
- `--color-info`

## Formulários

Todo campo deve ter:

- label;
- estado normal;
- estado de foco;
- estado inválido;
- estado disabled;
- mensagem de erro quando necessário.

## Estados obrigatórios em telas remotas

- loading;
- error;
- empty;
- success.

## Acessibilidade

- navegação por teclado;
- labels adequadas;
- nome acessível em ações somente com ícone;
- contraste apropriado.
