import fastify from 'fastify' 
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories.routes'
import { usersRoutes } from './routes/users.routes'

const app = fastify()
const PORT = { port: 5000 }

app.register(cors, {
  origin: true
})
app.register(memoriesRoutes)
app.register(usersRoutes)

app.listen(PORT).then(() => {
  console.log('Server listening on port ' + PORT.port)
})
