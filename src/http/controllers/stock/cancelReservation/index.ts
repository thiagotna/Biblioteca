import { IncomingMessage, ServerResponse } from 'http'
import { parse } from 'url'
import makeCancelReservation from '@/factory/StockFatory/makeCancelReservation'

export default async function cancelReservation(
  request: IncomingMessage,
  response: ServerResponse,
) {
  try {
    const makeCancelReservationFactory = makeCancelReservation()
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

    const returnedBook = await makeCancelReservationFactory.execute(bookId)

    response.statusCode = 200
    response.setHeader('Content-Type', 'application/json')
    response.end(JSON.stringify(returnedBook))
  } catch (error) {
    response.statusCode = 500
    response.setHeader('Content-Type', 'application/json')
    response.end(JSON.stringify({ message: 'Error canceling reservation' }))
  }
}
