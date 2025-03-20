import { IncomingMessage, ServerResponse } from 'http'
import makeUpdateBook from '@/factory/BookFactory/makeUpdateBook'
import { parse } from 'url'
import IBook from '@/interfaces/IBook'

async function updateBook(request: IncomingMessage, response: ServerResponse) {
  try {
    const updateBookFactory = makeUpdateBook()
    const parsedUrl = parse(decodeURIComponent(request.url as string), true)
    const name = decodeURIComponent(parsedUrl.pathname?.split('/').pop() || '')

    if (!name) {
      response.statusCode = 400
      response.setHeader('Content-Type', 'application/json')
      response.end(JSON.stringify({ message: 'Name parameter is required' }))
      return
    }

    let body = ''

    request.on('data', (chunk: IBook) => {
      body += chunk.toString()
    })

    request.on('end', async () => {
      const bookData = JSON.parse(body)
      const updatedBook = await updateBookFactory.execute(name, bookData)

      response.statusCode = 200
      response.setHeader('Content-Type', 'application/json')
      response.end(JSON.stringify(updatedBook))
    })
  } catch (error) {
    response.statusCode = 500
    response.setHeader('Content-Type', 'application/json')
    response.end(JSON.stringify({ message: 'Error updating book' }))
  }
}

export default updateBook
