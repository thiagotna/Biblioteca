import StockRepository from '@/repository/StockRepository'
import ReverveBookUseCase from '@/usecase/StockUseCase/ReserveBookUseCase'

export default function makeReserveBook() {
  const stockRepository = new StockRepository()
  const reserveBookUseCase = new ReverveBookUseCase(stockRepository)
  return reserveBookUseCase
}
