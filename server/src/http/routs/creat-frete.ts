import { FastifyInstance } from 'fastify'
import { prisma } from '../../lib/prisma'
import z from 'zod'

export async function creatFrete(app: FastifyInstance) {
  app.post('/frete', async (request, reply) => {
    const dataFrete = z.object({
      name_transport: z.string().min(3).toLowerCase(),
      constant: z.number(),
      heigh_max: z.number(),
      heigh_min: z.number(),
      width_max: z.number(),
      width_min: z.number(),
      delivery_time: z.number()
    })

    const {
      name_transport,
      constant,
      heigh_max,
      heigh_min,
      width_max,
      width_min,
      delivery_time
    } = dataFrete.parse(request.body)

    if (heigh_min >= heigh_max && width_min >= width_max) {
      return reply.status(400).send('value min and max not compativ')
    }

    const newFrete = await prisma.frete.create({
      data: {
        name_transport,
        constant,
        heigh_max,
        heigh_min,
        width_max,
        width_min,
        delivery_time
      }
    })

    return reply.status(201).send(newFrete)
  })
}
