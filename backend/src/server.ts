import fastify from 'fastify' 
import { PrismaClient } from '@prisma/client'

const app = fastify()
const PORT = { port: 5000 }
const prisma = new PrismaClient()

const get_all_users = async () => {
  const users = await prisma.user.findMany()
  return users
}

app.get('/users', get_all_users)


app.listen(PORT).then(() => {
  console.log('Server listening on port ' + PORT.port)
})