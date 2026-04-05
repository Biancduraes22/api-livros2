# API de Livros

## Sobre o projeto
API desenvolvida com Node.js e Express para cadastro e consulta de livros.

---

## Endpoints

### GET /api/livros
Lista todos os livros.

### GET /api/livros/:id
Busca um livro pelo ID.

### POST /api/livros
Cadastra um novo livro.

---

## Testes realizados

### GET - listar livros
![GET listar](Prints/get-listar.png)

![GET listar 2](Prints/get-listar-2.png)

### GET - livro por id
![GET ID](Prints/get-por-id.png)

### POST - cadastro
![POST 1](Prints/post-cadastrar-1.png)

![POST 2](Prints/post-cadastrar-2.png)

### Erro de validação
![Erro](Prints/erro-validacao-1.png)

---

## Validações implementadas

Na rota de cadastro de livros (POST /api/livros), foi implementada uma validação para garantir que os dados obrigatórios sejam enviados corretamente.

A API verifica se os campos **titulo**, **autor** e **genero** foram informados na requisição.

Caso algum desses campos não seja enviado, a API retorna:

- Status HTTP: **400 (Bad Request)**
- Mensagem de erro informando que os campos são obrigatórios

Exemplo de resposta de erro:

```json
{
  "erro": "Todos os campos são obrigatórios: titulo, autor e genero"
}