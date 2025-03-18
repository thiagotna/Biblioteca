import { IncomingMessage, ServerResponse } from 'http'
import { parse } from 'url'
import makeBorrowBook from '@/factory/StockFatory/makeBorrowBook'

export default async function borrowBook(
  request: IncomingMessage,
  response: ServerResponse,
) {
  try {
    const borrowBookFactory = makeBorrowBook()
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

    const book = await borrowBookFactory.execute(bookId)

    response.statusCode = 200
    response.setHeader('Content-Type', 'application/json')
    response.end(JSON.stringify(book))
  } catch (error) {
    response.statusCode = 500
    response.setHeader('Content-Type', 'application/json')
    response.end(JSON.stringify({ message: 'Error borrowing book' }))
  }
}
