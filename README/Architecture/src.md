# 📁 src

### `http/`

Principal app `src/http`, onde se encontra as Rotas e o Servidor, a onde ira ficar armazenado o centro da API, os controles, funcoes logicos e rotas

Rotas `/routs`, contendo `CRUD` e a rota `calcule.ts` responsavel pelo resultado final.

`calcule.ts`
```Ts

// novo Array para listar as opcoes que estao disponiveis e seus respectiveis valores
let options: Array<object> = []

// trans = Array de opcoes de frete (transportadoras)
trans.map(e => {

    if (e.heigh_min < dimensao.altura && e.heigh_max > dimensao.altura) {

        if (e.width_min < dimensao.largura && e.width_max > dimensao.largura) {
            
            options.push({
            nome: e.name_transport,
            valor_frete: calc.formatNotR(peso, e.constant),
            prazo_dias: e.delivery_time
            })

        }

    }

})
```
O retorno e realizado junto com o status code de Sucesso, `200`.
```ts
return reply.status(200).send(options)
```


`creat-frete.ts` e `ger-frete.ts`, caso queira add novo frete e ter retorno deles.

, caso queira add novo frete.

Servido ou controlador `/server.ts`.

<br/>

### `lib/`:

`prisma.ts`, liberando a funcionalidade de conectar ao *`db`* | `@prisma/client`.

<br/>

### `utils/`:

`formuleCalcFrete.ts`, responsavel pela funcao de calcular e formatar o valor do frete,

dentro da rota `calcule.ts`, ela acaba puxando a funcao calc existente no app, escrita para calcular com base na formula entregue no desafio, a funcao da a opcao de requisitar o retorno ja formatado

formula:
```Ts
const formula = (peso: number, constant: number) => {
  return (peso * constant) / 10
}
```

uso: 
```Ts
import calc from '@/utils/formuleCalcFrete'
    // (NumberOne * NumberTwo) / 10
    calc.formula(NumberOne, NumberTwo) // return Number 
```

```Ts
const calc = {
    formula, // retorna o valor final em Number pelo calculo.
    formatNotR, // Formata o valor da 'formula' em string assemelhando valor monetario sem o "R$" na frente.
    formatAndR // o resultado semelhante ao 'formatNotR' porem adicionando o "R$" na frente do valor.
}

export default calc
```

exeplo: 
```Ts
    calc.formula(850, 0.3)      //   25.5
    calc.formatNotR(400, 0.3)   //  "12.00"
    calc.formatAndR(400, 0.2)   //  "R$8.00"
```