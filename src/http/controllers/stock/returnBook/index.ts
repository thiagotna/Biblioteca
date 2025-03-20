import { IncomingMessage, ServerResponse } from 'http'
import { parse } from 'url'
import makeReturnBook from '@/factory/StockFatory/makeReturnBook'

export default async function returnBook(
  request: IncomingMessage,
  response: ServerResponse,
) {
  try {
    const returnBookFactory = makeReturnBook()
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

    const returnedBook = await returnBookFactory.execute(bookId)

    response.statusCode = 200
    response.setHeader('Content-Type', 'application/json')
    response.end(JSON.stringify(returnedBook))
  } catch (error) {
    response.statusCode = 500
    response.setHeader('Content-Type', 'application/json')
    response.end(JSON.stringify({ message: 'Error returning book' }))
  }
}
