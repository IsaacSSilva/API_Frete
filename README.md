<div align="center">
  
![KaBum!](https://static.kabum.com.br/conteudo/temas/001/imagens/topo/logo_kabum_.png)

# API-REST-Frete | Desafio BackEnd

> *' tenho como Objetivo me desafiar e expor minhas habilidades e evolução.'*

___

</div>
  
> Readme do Desafio original
>
> [README - KaBuM!](README/README-KABUM.md)

<br/>

## Getting Started

Inicie adicionando todas as dependencias e startando a ORM Prisma juntamente com Docker.

```bash
# dependencias
  npm install

# Iniciar prisma
  npx prisma migrate dev
```

[*`🔗 Para Mais detalhes aqui 👈`*](README/Getting-Stared.md)

<br/>


### ℹ️ Arquitura

`./src`:.

> [`🔗.`](README/Architecture/src.md#http) `http/`:

Principal app `src/http`, onde se encontra as Rotas e o Servidor.

Rotas `/routs`, contendo `CRUD` e a rota `calcule.ts` responsavel pelo resultado final.

`creat-frete.ts` e `ger-frete.ts`, caso queira add novo frete e ter retorno deles.

, caso queira add novo frete.

Servido ou controlador `/server.ts`.


> [`🔗.`](README/Architecture/src.md#lib) `lib/`:

`prisma.ts`, liberando a funcionalidade de conectar ao *`db`* | `@prisma/client`.


> [`🔗.`](README/Architecture/src.md#utils) `utils/`:

`formuleCalcFrete.ts`, responsavel pela funcao de calcular e formatar o valor do frete,

<br/>

`./prisma`:.

`schema.prisma`, responsavel para criar o `schema`, criando as tabelas ou seus `model` para seu *`db`*

> [`🔗.`](README/Architecture/prima.md#seed) `seed/`:

O Script `seed.ts` popula  o *`db`*

___

## [`🎯`](README/README-KABUM.md#o-desafio) Objetivo

### Fluxo 
- [x] Criar uma *`API REST`*
  - [x] Validar as Dimencoes com as *`opcoes de frete`*
    - [x] Retornar uma ou mais transportadoras, se nao retornar vasio `[]` caso nem uma seja valida
  - [x] calcular o frete cruzando a `Info.` do *`produto`* e as opcoes de frete
    > ```ts 
    > (Peso x constante_frete) / 10 
    > ```

### Requisito

- [x] App ser *`API REST`*
- [x] Validação de `altura` *máxima* e *mínima* para cada opção de frete
- [x] Validação de `largura` *máxima* e *mínima* para cada opção de frete
  ```json
  // caso a validacao nao aprove todos.
    []
  ```
- [x] Validação se o `peso` do *`produto`* é maior que `0` (zero).
- [x] Rota `POST`
- [x] Receber parametros em Formato `JSON` com as `Info.`: `dimensao`:`altura` e `largura`, `peso`
  ```json
  {
    "dimensao": {
      "altura":152,
      "largura":50
    },
    "peso":850
  }
  ```
- [x] Formatar e retornar com as `Info.`: `nome`, `valor` e `prazo`
  ```json
  [
    {
      "nome":"Entrega Ninja",
      "valor_frete": 12.00,
      "prazo_dias": 6
    },
  ]
  ```
