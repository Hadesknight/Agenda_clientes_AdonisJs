# Adonis API application


## Setup

Clone esse repositorio e execute o npm install

```js 
npm install
```


### Migrations

Execute o comando para rodar as migrations.

```js
adonis migration:run
```

### Create .env
Crie um arquivo .env, e copie as informações igual no arquivo ".env.exemplo" preenchendo com os dados do seu Bando de Dados.

Obs: Foi utilizado para desenvolver um bando relacional Postgres

ex:
```js
HOST=127.0.0.1
PORT=3333
NODE_ENV=development

APP_NAME=AdonisJs
APP_URL=http://${HOST}:${PORT}

CACHE_VIEWS=false

APP_KEY=wa21wO0WN7oVkyWx3cKYyevMFyB9w1R

DB_CONNECTION=pg
DB_HOST=127.0.0.1
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=docker
DB_DATABASE=apiAdonis

HASH_DRIVER=bcrypt

```


developed by Fernando Santos
<a href="https://www.linkedin.com/in/fernando-santos-686632122/">Linkedin</a>
