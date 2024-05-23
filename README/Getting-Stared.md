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