import { IncomingMessage, ServerResponse } from 'http'
import { parse } from 'url'
import makeDeletePublisher from '@/factory/PublisherFactory/makeDeletePublisher'
import IPublisher from '@/models/Interfaces/IPublisher'

export default async function deletePublisherController(
  request: IncomingMessage,
  response: ServerResponse,
) {
  try {
    const deletePublisherFactory = makeDeletePublisher()
    const parsedUrl = parse(decodeURIComponent(request.url as string), true)
    const name = decodeURIComponent(parsedUrl.pathname?.split('/').pop() || '')

    if (!name) {
      response.statusCode = 400
      response.setHeader('Content-Type', 'application/json')
      response.end(
        JSON.stringify({ message: 'Publisher name parameter is required' }),
      )
      return
    }

    let body = ''

    request.on('data', (chunk: IPublisher) => {
      body += chunk.toString()
    })

    request.on('end', async () => {
      const deletedPublisher = await deletePublisherFactory.execute(name)

      response.statusCode = 204
      response.setHeader('Content-Type', 'application/json')
      response.end(JSON.stringify(deletedPublisher))
    })
  } catch (error) {
    response.statusCode = 500
    response.setHeader('Content-Type', 'application/json')
    response.end(JSON.stringify({ message: 'Error deleting publisher' }))
  }
}
