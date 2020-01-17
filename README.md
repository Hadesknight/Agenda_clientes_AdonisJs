# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

### Create .env
Create a .env file and reply all variables of .env.example
and complete with your DataBase info

ex:
```js
HOST=127.0.0.1
PORT=3333
NODE_ENV=development

APP_NAME=AdonisJs
APP_URL=http://${HOST}:${PORT}

CACHE_VIEWS=false

APP_KEY=

DB_CONNECTION=pg
DB_HOST=127.0.0.1
DB_PORT=5432
DB_USER=root
DB_PASSWORD=
DB_DATABASE=adonis

HASH_DRIVER=bcrypt

```


developed by Fernando Santos
<a href="https://www.linkedin.com/in/fernando-santos-686632122/">Linkedin</a>
