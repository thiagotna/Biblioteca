import StockRepository from '@/repository/StockRepository'
import DeleteBookFromStockUseCase from '@/usecase/StockUseCase/DeleteBookFromStockUseCase'

export default function makeDeleteBookFromStock() {
  const stockRepository = new StockRepository()
  const deleteBookFromStockUseCase = new DeleteBookFromStockUseCase(
    stockRepository,
  )

  return deleteBookFromStockUseCase
}
