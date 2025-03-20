import { IncomingMessage, ServerResponse } from 'http'
import { parse } from 'url'
import makeGetBookFromStock from '@/factory/StockFatory/makeGetBookFromStock'

export default async function getBookFromStock(
  request: IncomingMessage,
  response: ServerResponse,
) {
  try {
    const getBookFromStockFactory = makeGetBookFromStock()
    const parsedUrl = parse(decodeURIComponent(request.url as string), true)
    const bookId = decodeURIComponent(
      parsedUrl.pathname?.split('/').pop() || '',
    )

    if (!bookId) {
      response.statusCode = 400
      response.setHeader('Content-Type', 'application/json')
      response.end(JSON.stringify({ message: 'Book ID is required' }))
      return
    }

    const book = await getBookFromStockFactory.execute(bookId)

    response.statusCode = 200
    response.setHeader('Content-Type', 'application/json')
    response.end(JSON.stringify(book))

    return
  } catch (error) {}
}
