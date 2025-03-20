import { IncomingMessage, ServerResponse } from 'http'
import { parse } from 'url'
import makeGetPublisher from '@/factory/PublisherFactory/makeGetPublisherByName'

export default async function getPublisher(
  req: IncomingMessage,
  res: ServerResponse,
) {
  try {
    const makeGetPublisherFactory = makeGetPublisher()
    const parsedUrl = parse(decodeURIComponent(req.url as string), true)
    const name = decodeURIComponent(parsedUrl.pathname?.split('/').pop() || '')

    if (!name) {
      res.statusCode = 400
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ message: 'Name parameter is required' }))
      return
    }

    const publisher = await makeGetPublisherFactory.execute(name)

    if (publisher) {
      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(publisher))
    } else {
      res.statusCode = 404
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ message: 'Publisher could not be created.' }))
    }
  } catch (error) {
    res.statusCode = 500
    res.setHeader('Content-Type', 'application/json')
    res.end(
      JSON.stringify({
        message: 'Internal Server Error',
        error: error,
      }),
    )
  }
}
