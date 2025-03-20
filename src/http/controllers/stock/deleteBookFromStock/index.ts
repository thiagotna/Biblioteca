import { IncomingMessage, ServerResponse } from 'http'
import { parse } from 'url'
import makeDeleteBookFromStock from '@/factory/StockFatory/makeDeleteBookFromStock'

export default async function deleteBookFromStock(
  request: IncomingMessage,
  response: ServerResponse,
) {
  try {
    const makeDeleteBookFromStockFactory = makeDeleteBookFromStock()
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

    const deletedBook = await makeDeleteBookFromStockFactory.execute(bookId)

    response.statusCode = 204
    response.setHeader('Content-Type', 'application/json')
    response.end(JSON.stringify(deletedBook))
  } catch (error) {
    response.statusCode = 500
    response.setHeader('Content-Type', 'application/json')
    response.end(JSON.stringify({ message: 'Error deleting book from stock' }))
  }
}
