# 🏃 Getting Started

Inicie adicionando todas as dependencias e startando a ORM Prisma juntamente com Docker.

> dependencias:

```bash
  npm install
   # or
  yarn i
   # or
  pnpm i
```

<br/>

> .env, Docker and prisma:

substua `docker` pelos parametros do arquivo `./docker-compose.yml`

```.env
  DATABASE_URL="postgresql://docker:docker@localhost:5432/postgresql?docker"
```

<br/>

> run *db* docker
```bash
    docker compose up -d
```
crie `./server/docker-compose.yml` com o seguinte script.
```yml
# versao de escolha do dev.
version: '3.7'

services:
  postgres:
    image: bitnami/postgresql:latest
    ports:
      - '5432:5432'
    environment:
      - POSTGRES_USER=docker
      - POSTGRES_PASSWORD=docker
      - POSTGRES_DB=docker
    volumes:
      - server_pg_data:/bitnami/postgresql

volumes:
  server_pg_data:
```

<br/>


> run *tabelas* criado pelo *`ORM` prisma*
```bash
    npx prisma migrate dev 
     # or
    yarn dlx prisma migrate dev
     # or
    pnpx prisma migrate dev
```
Se altomaticamente o *`db`* não for populado pelo arquivo `seed.ts` use: 

```bash
# Para polular o seu banco. 
    npx prisma db seed 
```

<br/>


### 💡 Extensoes

> A seguir uma lista de extensoes para melhor 'UX from developer'
> | **Extensoes from VScode**.

> `👉` *(uso quase obrigatorio)*,
> `👌` *(Bom)*

- prisma 👉 [`🔗..`](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma)

- Docker 👌 [`🔗..`](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)