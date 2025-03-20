import StockRepository from '@/repository/StockRepository'
import ReturnBookUseCase from '@/usecase/StockUseCase/ReturnBookUseCase'

export default function makeReturnBook() {
  const stockRepository = new StockRepository()
  const returnBookUseCase = new ReturnBookUseCase(stockRepository)
  return returnBookUseCase
}
