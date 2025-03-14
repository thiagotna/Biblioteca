import { IncomingMessage, ServerResponse } from 'http'
import makeAddToStock from '@/factory/StockFatory/makeAddToStock'
import IBook from '@/interfaces/IBook'

export default async function addBookToStock(
  request: IncomingMessage,
  response: ServerResponse,
) {
  try {
    const addBookToStockFactory = makeAddToStock()
    let body = ''

    request.on('data', (chunk: IBook) => {
      body += chunk.toString()
    })

    request.on('end', async () => {
      const { id, name, genre, author, publisher_id, quantity } =
        JSON.parse(body)
      const newBook = await addBookToStockFactory.execute(
        {
          id,
          name,
          genre,
          author,
          publisher_id,
        },
        quantity,
      )

      response.statusCode = 201
      response.setHeader('Content-Type', 'application/json')
      response.end(JSON.stringify(newBook))
    })
  } catch (error) {
    response.statusCode = 500
    response.setHeader('Content-Type', 'application/json')
    response.end(JSON.stringify({ message: 'Error adding book to stock' }))
  }
}
