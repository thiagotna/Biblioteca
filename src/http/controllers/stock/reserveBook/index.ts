import { IncomingMessage, ServerResponse } from 'http'
import { parse } from 'url'
import makeReserveBook from '@/factory/StockFatory/makeReserveBook'

export default async function reserveBook(
  request: IncomingMessage,
  response: ServerResponse,
) {
  try {
    const makeReserveBookFactory = makeReserveBook()
    const parsedUrl = parse(decodeURIComponent(request.url as string), true)
    const bookId = decodeURIComponent(
      parsedUrl.pathname?.split('/').pop() || '',
    )

    if (!bookId) {
      response.statusCode = 400
      response.setHeader('Content-Type', 'application/json')
      response.end(JSON.stringify({ message: 'Book id is required' }))
      return
    }

    const reservedBook = await makeReserveBookFactory.execute(bookId)

    response.statusCode = 200
    response.setHeader('Content-Type', 'application/json')
    response.end(JSON.stringify(reservedBook))
  } catch (error) {
    response.statusCode = 500
    response.setHeader('Content-Type', 'application/json')
    response.end(JSON.stringify({ message: 'Error reserving book' }))
  }
}
