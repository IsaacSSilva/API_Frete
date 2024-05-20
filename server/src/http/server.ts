import fastify from 'fastify'
import { creatFrete } from './routs/creat-frete'
import { getFrete } from './routs/get-frete'
import { PORT } from '@/utils/PORT'

const app = fastify()

app.register(creatFrete)
app.register(getFrete)

app
  .listen({
    port: PORT,
    host: '0.0.0.0'
  })
  .then(async () => {
    console.log(`runner server HTTP in localhost:${PORT} 🍃`)
  })
