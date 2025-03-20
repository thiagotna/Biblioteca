import { IncomingMessage, ServerResponse } from 'http'
import { parse } from 'url'
import { makeDeleteBook } from '@/factory/BookFactory/makeDeleteBook'
import IBook from '@/interfaces/IBook'

export default async function deleteBook(
  request: IncomingMessage,
  response: ServerResponse,
) {
  try {
    const deleteBookFactory = makeDeleteBook()
    const parsedUrl = parse(decodeURIComponent(request.url as string), true)
    const name = decodeURIComponent(parsedUrl.pathname?.split('/').pop() || '')

    if (!name) {
      response.statusCode = 400
      response.setHeader('Content-Type', 'application/json')
      response.end(JSON.stringify({ message: 'Book name is required' }))
      return
    }

    let body = ''

    request.on('data', (chunk: IBook) => {
      body += chunk.toString()
    })

    request.on('end', async () => {
      const deletedBook = await deleteBookFactory.execute(name)

      response.statusCode = 204
      response.setHeader('Content-Type', 'application/json')
      response.end(JSON.stringify(deletedBook))
    })
  } catch (error) {
    response.statusCode = 500
    response.setHeader('Content-Type', 'application/json')
    response.end(JSON.stringify({ message: 'Error deleting book' }))
  }
}
