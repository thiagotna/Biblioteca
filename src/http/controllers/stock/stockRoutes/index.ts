import addBookToStock from '@/http/controllers/stock/addBookToStock'

const stockRoutes = {
  '/stock': {
    POST: addBookToStock,
  },
}

export default stockRoutes
