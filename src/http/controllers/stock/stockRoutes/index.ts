import addBookToStock from '@/http/controllers/stock/addBookToStock'
import getBookFromStock from '@/http/controllers/stock/getBookFromStock'
import borrowBook from '@/http/controllers/stock/borrowBook'
import returnBook from '@/http/controllers/stock/returnBook'
import reserveBook from '@/http/controllers/stock/reserveBook'

const stockRoutes = {
  '/stock': {
    POST: addBookToStock,
  },
  '/stock/:bookId': {
    GET: getBookFromStock,
  },
  '/stock/borrow/:bookId': {
    PUT: borrowBook,
  },
  '/stock/return/:bookId': {
    PUT: returnBook,
  },
  '/stock/reserve/:bookId': {
    PUT: reserveBook,
  },
}

export default stockRoutes
