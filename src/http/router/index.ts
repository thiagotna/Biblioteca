import { IncomingMessage, ServerResponse } from 'http'

type RouteHandler = (req: IncomingMessage, res: ServerResponse) => void

interface Routes {
  [key: string]: {
    [method: string]: RouteHandler
  }
}

const router = (req: IncomingMessage, res: ServerResponse, routes: Routes) => {
  const { method, url } = req

  if (routes[url] && routes[url][method]) {
    routes[url][method](req, res)
  } else {
    res.statusCode = 404
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ message: 'Route not found' }))
  }
}

export default router
