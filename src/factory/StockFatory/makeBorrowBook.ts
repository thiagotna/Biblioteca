import IStock from '@/interfaces/IStock'
import StockRepository from '@/repository/StockRepository'
import BorrowBookUseCase from '@/usecase/StockUseCase/BorrowBookUseCase'

export default function makeBorrowBook() {
  const stockRepository = new StockRepository()
  const borrowBookUseCase = new BorrowBookUseCase(stockRepository)

  return borrowBookUseCase
}
