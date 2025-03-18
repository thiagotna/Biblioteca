import addBookToStock from '@/http/controllers/stock/addBookToStock'
import getBookFromStock from '@/http/controllers/stock/getBookFromStock'

const stockRoutes = {
  '/stock': {
    POST: addBookToStock,
  },
  '/stock/:bookId': {
    GET: getBookFromStock,
  },
}

export default stockRoutes
