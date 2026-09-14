# Modelo de Domínio

## User

- id
- name
- email
- avatar
- department
- role
- active
- createdAt
- updatedAt

## Role

Perfis iniciais:

- ADMIN
- EDITOR
- COMMUNICATION
- USER

Autorização deve ser aplicada no backend.

## News

- id
- title
- slug
- summary
- content
- coverImage
- category
- status
- publishedAt
- createdBy
- updatedBy
- createdAt
- updatedAt

Status:

- DRAFT
- SCHEDULED
- PUBLISHED
- ARCHIVED

## Category

- id
- name
- slug
- description
- type
- order
- active

Tipos iniciais:

- NEWS
- SYSTEM

## System

- id
- name
- description
- url
- icon
- category
- active
- isNew
- order
- createdAt
- updatedAt

## Page

- id
- title
- slug
- content
- status
- publishedAt
- createdBy
- updatedBy
- createdAt
- updatedAt

Status:

- DRAFT
- PUBLISHED

## Banner

- id
- title
- image
- link
- position
- startsAt
- endsAt
- enabled
- createdAt
- updatedAt

Estados derivados:

- INACTIVE
- SCHEDULED
- ACTIVE
- EXPIRED

## HomeHighlight

- id
- news
- type
- position
- startsAt
- endsAt

Tipos:

- PRIMARY
- SECONDARY

Regras:

- no máximo 1 PRIMARY ativo;
- no máximo 3 SECONDARY ativos.

## Notification

Não é conteúdo editorial; é mecanismo de entrega.

- id
- title
- message
- type
- link
- audience
- status
- scheduledAt
- sentAt
- createdBy
- createdAt

## UserNotification

- id
- notification
- user
- readAt
- createdAt

## Media

- id
- filename
- originalFilename
- mimeType
- size
- storageKey
- url
- createdBy
- createdAt

Os bytes do arquivo não devem ser armazenados no PostgreSQL.
