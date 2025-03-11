import createBook from '@/http/controllers/book/createBook'
import getBookByName from '@/http/controllers/book/getBookByName'
import updateBook from '@/http/controllers/book/updateBook'

const bookRoutes = {
  '/book': {
    POST: createBook,
  },
  '/book/:name': {
    GET: getBookByName,
    PUT: updateBook,
  },
}

export default bookRoutes
