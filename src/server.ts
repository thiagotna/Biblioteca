import database from './lib/mongoose/database'
import { createServer, IncomingMessage, ServerResponse } from 'http'
import { HOSTNAME, PORT } from '@/env'
import router from '@/http/router'
import bookRoutes from './http/controllers/book/bookRoutes'
import publisherRoutes from './http/controllers/publisher/publisherRoutes'

console.log(database)

/**
 * Combine all routes
 */
const routes = {
  ...bookRoutes,
  ...publisherRoutes,
}

/**
 * Routes Registering
 * */
const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  router(req, res, routes)
})

server.listen(PORT, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`)
})
