import createBook from '@/http/controllers/book/createBook'
import getBookByName from '../getBookByName'

const bookRoutes = {
  '/book': {
    POST: createBook,
  },
  '/book/:name': {
    GET: getBookByName,
  },
}

export default bookRoutes
