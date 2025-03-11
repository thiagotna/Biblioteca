import { IncomingMessage, ServerResponse } from 'http'
import { makeGetBookByName } from '@/factory/BookFactory/makeGetBookByName'
import { parse } from 'url'

async function getBookByName(
  request: IncomingMessage,
  response: ServerResponse,
) {
  try {
    const getBookByNameFactory = makeGetBookByName()
    const parsedUrl = parse(decodeURIComponent(request.url as string), true)
    const name = decodeURIComponent(parsedUrl.pathname?.split('/').pop() || '')

    if (!name) {
      response.statusCode = 400
      response.setHeader('Content-Type', 'application/json')
      response.end(JSON.stringify({ message: 'Name parameter is required' }))
      return
    }

    const book = await getBookByNameFactory.execute(name)

    if (book) {
      response.statusCode = 200
      response.setHeader('Content-Type', 'application/json')
      response.end(JSON.stringify(book))
    } else {
      response.statusCode = 404
      response.setHeader('Content-Type', 'application/json')
      response.end(JSON.stringify({ message: 'Book not found' }))
    }
  } catch (error) {
    response.statusCode = 500
    response.setHeader('Content-Type', 'application/json')
    response.end(
      JSON.stringify({
        message: 'Internal Server Error',
        error: error,
      }),
    )
  }
}

export default getBookByName
