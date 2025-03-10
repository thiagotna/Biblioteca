import { createServer } from 'http'
import { HOSTNAME, PORT, DATABASE_NAME } from '@/env'
import database from '@/lib/mongoose/database'

console.log('Library Database instance created:', database)

const server = createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Server is running\n')
})

server.listen(PORT, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`)
})
