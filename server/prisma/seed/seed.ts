import { prisma } from '@/lib/prisma'

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

Main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
