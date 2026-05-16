# 🔗 Encurtador de URLs - API

Uma API REST minimalista para encurtar links. Ideal para transformar URLs longas em links fáceis de compartilhar.

## 🚀 Funcionalidades
* **Criar Link Curto:** Gera um código aleatório de 5 caracteres associado à URL longa.
* **Redirecionamento:** Ao acessar o link curto, o usuário é redirecionado automaticamente para o site original.
* Salvamento temporário de dados em memória.

## 🛠️ Tecnologias Utilizadas
* Node.js
* Express (Framework web)

## 🔧 Como Executar
1. Clone o repositório e acesse a pasta.
2. Instale as dependências: `npm install express`
3. Inicie o servidor: `node server.js`
4. A API rodará em `http://localhost:3000`.

## 📌 Rotas da API
* `POST /encurtar` - Envia `{ "urlOriginal": "https://site.com" }` e recebe o código.
* `GET /:codigo` - Redireciona para a URL original.
