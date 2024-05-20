import { FastifyInstance } from 'fastify'
import { prisma } from '../../lib/prisma'

export async function getFrete(app: FastifyInstance) {
  app.get('/frete/all', async (request, reply) => {
    const frete = await prisma.frete.findMany()

    return reply.status(200).send(frete)
  })
}
