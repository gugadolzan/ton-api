# Projeto API da Ton

## Contexto

Este projeto trata-se de uma API das maquininhas da Ton e todos seus endpoints seguem os princípios REST.

Nela, é possível fazer uma requisição que retorna todos os dados, assim como uma requisição por ID que retorna somente o produto especificado.

> :warning: Todos os dados da API são de propriedade da empresa [Stone Co.](https://www.stone.co/) e foram usados apenas para fins de aprendizado.

## Tecnologias usadas

[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://expressjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

## Instalando dependências

```bash
npm install
```

## Executando aplicação

1. Execute o comando:

```bash
npm start
```

## Endpoints

### GET `/`

Retorna a lista de todos os produtos:

```json
[
  {
    "id": "t1",
    "title": "Maquininha T1",
    "price": 94.8,
    "thumbnail": "t1.png",
    "details": [
      {
        "icon": "calendar.svg",
        "text": "Receba suas vendas em 1 dia útil"
      }, ...
    ]
  }, ...
]
```

### GET `/:id`

Retorna os detalhes do produto baseado no `id` da rota. Exemplo quando o `id` é igual a `t2`:

```json
{
  "id": "t2",
  "title": "Maquininha T2+",
  "price": 166.8,
  "thumbnail": "t2.png",
  "details": [
    {
      "icon": "calendar.svg",
      "text": "Receba suas vendas em 1 dia útil"
    }, ...
  ]
},
```

#### Lista de `id`s disponíveis:

 1. `t1`
 2. `t1-chip`
 3. `t2`
 4. `t3`
