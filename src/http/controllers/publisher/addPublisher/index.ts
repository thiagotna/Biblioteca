import { IncomingMessage, ServerResponse } from 'http'
import IPublisher from '@/models/Interfaces/IPublisher'
import makeAddPublisher from '@/factory/PublisherFactory/makeAddPublisher'

export default async function addPublisher(
  request: IncomingMessage,
  response: ServerResponse,
) {
  try {
    const addPublisherFactory = makeAddPublisher()
    let body = ''

    request.on('data', (chunk: IPublisher) => {
      body += chunk.toString()
    })

    request.on('end', async () => {
      const publisherData = JSON.parse(body)
      const newPublisher = await addPublisherFactory.execute(publisherData)

      response.statusCode = 201
      response.setHeader('Content-Type', 'application/json')
      response.end(JSON.stringify(newPublisher))
    })
  } catch (error) {
    response.statusCode = 500
    response.setHeader('Content-Type', 'application/json')
    response.end(JSON.stringify({ message: 'Error creating publisher' }))
  }
}
