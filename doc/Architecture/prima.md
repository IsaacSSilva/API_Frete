# prisma

`schema.prisma`, responsavel para criar o `schema`, criando as tabelas ou seus `model` para seu *`db`*

#### `seed/`:

O Script `seed.ts` popula  o *`db`*

Foi criado o script seed para que seja mais rapido o teste o app, baseado nas informacoes dadas pelo [`desafio`](../README-KABUM.md#opções-de-frete)

```Ts
async function Main() {
  await prisma.frete.deleteMany()

  await prisma.frete.create({
    data: {
      name_transport: 'ninja',
      constant: 0.3,
      heigh_max: 200,
      heigh_min: 10,
      width_max: 140,
      width_min: 6,
      delivery_time: 6
    }
  })

  await prisma.frete.create({
    data: {
      name_transport: 'kabum',
      constant: 0.2,
      heigh_max: 140,
      heigh_min: 5,
      width_max: 125,
      width_min: 13,
      delivery_time: 4
    }
  })
}

```