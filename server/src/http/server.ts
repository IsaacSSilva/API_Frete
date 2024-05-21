import fastify from 'fastify'
import { creatFrete } from './routs/creat-frete'
import { getFrete } from './routs/get-frete'
import { PORT } from '@/utils/PORT'
import { calcFrete } from './routs/calcule'

const app = fastify()

app.register(creatFrete)
app.register(getFrete)
app.register(calcFrete)

app
  .listen({
    port: PORT,
    host: '0.0.0.0'
  })
  .then(async () => {
    console.log(`runner server HTTP in localhost:${PORT} 🍃`)
  })
