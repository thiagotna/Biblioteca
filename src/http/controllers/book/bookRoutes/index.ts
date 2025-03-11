import createBook from '@/http/controllers/book/createBook'

const bookRoutes = {
  '/book': {
    POST: createBook,
  },
}

export default bookRoutes
