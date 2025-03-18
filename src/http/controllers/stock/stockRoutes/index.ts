import addBookToStock from '@/http/controllers/stock/addBookToStock'
import getBookFromStock from '@/http/controllers/stock/getBookFromStock'
import borrowBook from '@/http/controllers/stock/borrowBook'
import returnBook from '@/http/controllers/stock/returnBook'

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
}

export default stockRoutes
