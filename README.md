<div align="center">
  
![KaBum!](https://static.kabum.com.br/conteudo/temas/001/imagens/topo/logo_kabum_.png)

# API-REST-Frete-KaBuM

</div>
  
> Readme do Desafio original
>
> [README - KaBuM!](README/README-KABUM.md)

## Getting Started

Inicie adicionando todas as dependencias e startando a ORM Prisma juntamente com Docker.

> dependencias:

```bash
  npm install
   # or
  yarn i
   # or
  pnpm i
```

> .env, Docker and prisma:

```.env
  DATABASE_URL="postgresql://docker:docker@localhost:5432/postgresql?docker"
```

```bash
    docker compose up -d
```

```bash
    npx prisma migrate dev 
     # or
    yarn dlx prisma migrate dev
     # or
    pnpx prisma migrate dev
```
Se altomaticamente o `db` não for populado pelo arquivo `seed.ts` use: 

```bash
    npx prisma db seed 
```

