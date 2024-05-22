import { FastifyInstance } from 'fastify'
import { prisma } from '../../lib/prisma'
import z from 'zod'
import calc from '@/utils/formuleCalcFrete'

export async function calcFrete(app: FastifyInstance) {
  app.post('/calc/Frete', async (request, reply) => {
    const trans = await prisma.frete.findMany()

    const dataProdutc = z.object({
      dimensao: z.object({
        altura: z.number().min(1),
        largura: z.number().min(1)
      }),
      peso: z.number().min(1)
    })

    const { dimensao, peso } = dataProdutc.parse(request.body)

    let options: Array<object> = []

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

    return reply.status(200).send(options)
  })
}
