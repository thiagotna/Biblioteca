import createBook from '@/http/controllers/book/createBook'
import getBookByName from '@/http/controllers/book/getBookByName'
import updateBook from '@/http/controllers/book/updateBook'
import deleteBook from '@/http/controllers/book/deleteBook'

const bookRoutes = {
  '/book': {
    POST: createBook,
  },
  '/book/:name': {
    GET: getBookByName,
    PUT: updateBook,
    DELETE: deleteBook,
  },
}

export default bookRoutes
