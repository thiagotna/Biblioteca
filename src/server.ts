import database from './lib/mongoose/database'
import { createServer, IncomingMessage, ServerResponse } from 'http'
import { HOSTNAME, PORT } from '@/env'
import router from '@/http/router'
import bookRoutes from './http/controllers/book/bookRoutes'

console.log(database)

/**
 * Routes Registering
 * */
const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  router(req, res, bookRoutes)
})

server.listen(PORT, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`)
})
