import { IncomingMessage, ServerResponse } from 'http'
import { parse } from 'url'

type RouteHandler = (req: IncomingMessage, res: ServerResponse) => void

interface Routes {
  [key: string]: {
    [method: string]: RouteHandler
  }
}

const matchRoute = (url: string, routes: Routes) => {
  const routeKeys = Object.keys(routes)
  for (const route of routeKeys) {
    const regex = new RegExp(`^${route.replace(/:\w+/g, '[^/]+')}$`)
    if (regex.test(url)) {
      return route
    }
  }
  return null
}

const router = (req: IncomingMessage, res: ServerResponse, routes: Routes) => {
  const { method, url } = req
  const parsedUrl = parse(decodeURIComponent(url as string), true)
  const matchedRoute = matchRoute(parsedUrl.pathname as string, routes)

  if (matchedRoute && routes[matchedRoute][method as string]) {
    req.url = parsedUrl.pathname // Updates the request URL to remove query params
    routes[matchedRoute][method as string](req, res)
  } else {
    res.statusCode = 404
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ message: 'Route not found' }))
  }
}

export default router
