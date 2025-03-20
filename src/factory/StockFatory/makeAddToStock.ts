import BookRepository from '@/repository/BookRepository'
import PublisherRepository from '@/repository/PublisherRepository'
import StockRepository from '@/repository/StockRepository'
import AddBookToStockUseCase from '@/usecase/StockUseCase/AddBookToStockUseCase'

export default function makeAddToStock() {
  const bookRepository = new BookRepository()
  const publisherRepository = new PublisherRepository()
  const stockRepository = new StockRepository()
  const addBookToStockUseCase = new AddBookToStockUseCase(
    bookRepository,
    stockRepository,
  )

  return addBookToStockUseCase
}
