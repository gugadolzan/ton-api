<a href="https://www.ton.com.br/" target="_blank">
  <img src="./ton.svg" alt="Ton logo" align="right">
</a>

# Projeto API da Ton

As requisições podem ser feitas a partir de https://ton-api-1211.herokuapp.com/

## Contexto

Este projeto trata-se de uma API das maquininhas da Ton e todos seus endpoints seguem os princípios REST.

Nela, é possível fazer uma requisição que retorna todos os dados, assim como uma requisição por ID que retorna somente o produto especificado.

> :warning: Todos os dados da API são de propriedade da empresa [Stone Co.](https://www.stone.co/) e foram usados apenas para fins de aprendizado.

## Tecnologias usadas

[![Node.js](https://img.shields.io/badge/Node.js-00C619?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-00C619?style=for-the-badge)](https://expressjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-00C619?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

## Instalando dependências

```bash
npm install
```

## Executando aplicação

1. Execute o comando:

> A porta 3000 é utilizada para acessar a aplicação por padrão.

```bash
npm start
```

## Endpoints

### GET `/`

Retorna a lista de todos os produtos:

https://ton-api-1211.herokuapp.com/

```json
[
  {
    "id": "t1",
    "title": "Maquininha T1",
    "price": 94.8,
    "thumbnail": "https://raw.githubusercontent.com/gugadolzan/ton-api/main/assets/frontview/t1.png",
    "thumbnailAlt": "https://raw.githubusercontent.com/gugadolzan/ton-api/main/assets/sideview/t1.png",
        "details": [
      {
        "icon": "https://raw.githubusercontent.com/gugadolzan/ton-api/main/assets/icons/calendar.png",
        "text": "Receba suas vendas em 1 dia útil"
      },
      ...
    ]
  },
  ...
]
```

### GET `/:id`

Retorna os detalhes do produto baseado no `id` da rota. Exemplo quando o `id` é igual a `t2`:

https://ton-api-1211.herokuapp.com/t2

```json
{
  "id": "t2",
  "title": "Maquininha T2+",
  "price": 166.8,
  "thumbnail": "https://raw.githubusercontent.com/gugadolzan/ton-api/main/assets/frontview/t2.png",
  "thumbnailAlt": "https://raw.githubusercontent.com/gugadolzan/ton-api/main/assets/sideview/t2.png",
  "details": [
    {
      "icon": "https://raw.githubusercontent.com/gugadolzan/ton-api/main/assets/icons/calendar.png",
      "text": "Receba suas vendas em 1 dia útil"
    },
    ...
  ]
},
```

#### Lista de `id`s disponíveis:

1.  `t1`
2.  `t1-chip`
3.  `t2`
4.  `t3`

## Contato

[![GitHub](https://img.shields.io/badge/GitHub-00C619?style=for-the-badge&logo=github&logoColor=white)](https://github.com/gugadolzan)
[![Gmail](https://img.shields.io/badge/Gmail-00C619?style=for-the-badge&logo=gmail&logoColor=white)](mailto:gudolzan@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-00C619?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/gustavo-dolzan/)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-00C619?style=for-the-badge&logo=whatsapp&logoColor=white)](https://api.whatsapp.com/send?phone=5547989167878)

## Referências

- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [Deploying Typescript Node.js applications to Heroku (with static files)](https://medium.com/developer-rants/deploying-typescript-node-js-applications-to-heroku-81dd75424ce0)
- [Maquininha de Cartão de Crédito - Peça sua Maquineta | Ton](https://www.ton.com.br/)
