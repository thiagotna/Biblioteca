import { IncomingMessage, ServerResponse } from 'http'
import { parse } from 'url'
import IPublisher from '@/interfaces/IPublisher'
import makeUpdatePublisher from '@/factory/PublisherFactory/makeUpdateBook'

export default function updatePublisher(
  request: IncomingMessage,
  response: ServerResponse,
) {
  try {
    const updatedPublisherFactory = makeUpdatePublisher()
    const parsedUrl = parse(decodeURIComponent(request.url as string), true)
    const name = decodeURIComponent(parsedUrl.pathname?.split('/').pop() || '')

    if (!name) {
      response.statusCode = 400
      response.setHeader('Content-Type', 'application/json')
      response.end(JSON.stringify({ message: 'Name parameter is required' }))
      return
    }

    let body = ''

    request.on('data', (chunk: IPublisher) => {
      body += chunk.toString()
    })

    request.on('end', async () => {
      const publisherData = JSON.parse(body)
      const updatedPublisher = await updatedPublisherFactory.execute(
        name,
        publisherData,
      )

      response.statusCode = 200
      response.setHeader('Content-Type', 'application/json')
      response.end(JSON.stringify(updatedPublisher))
    })
  } catch (error) {
    response.statusCode = 500
    response.setHeader('Content-Type', 'application/json')
    response.end(JSON.stringify({ message: 'Error updating publisher' }))
  }
}
