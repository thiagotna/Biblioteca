import addBookToStock from '@/http/controllers/stock/addBookToStock'
import getBookFromStock from '@/http/controllers/stock/getBookFromStock'
import borrowBook from '../borrowBook/indext'

const stockRoutes = {
  '/stock': {
    POST: addBookToStock,
  },
  '/stock/:bookId': {
    GET: getBookFromStock,
    PUT: borrowBook,
  },
}

export default stockRoutes
