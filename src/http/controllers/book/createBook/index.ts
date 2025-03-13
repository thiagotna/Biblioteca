import { IncomingMessage, ServerResponse } from 'http'
import makeBook from '@/factory/BookFactory/makeBook'
import IBook from '@/interfaces/IBook'

async function createBook(request: IncomingMessage, response: ServerResponse) {
  try {
    const createBookFactory = makeBook()
    let body = ''

    request.on('data', (chunk: IBook) => {
      body += chunk.toString()
    })

    request.on('end', async () => {
      const bookData = JSON.parse(body)
      const newBook = await createBookFactory.execute(bookData)

      response.statusCode = 201
      response.setHeader('Content-Type', 'application/json')
      response.end(JSON.stringify(newBook))
    })
  } catch (error) {
    response.statusCode = 500
    response.setHeader('Content-Type', 'application/json')
    response.end(JSON.stringify({ message: 'Error creating book' }))
  }
}

export default createBook
