import StockRepository from '@/repository/StockRepository'
import CancelReservationUseCase from '@/usecase/StockUseCase/CancelReservationUseCase'

export default function makeCancelReservation() {
  const stockRepository = new StockRepository()
  const cancelReservationUseCase = new CancelReservationUseCase(stockRepository)

  return cancelReservationUseCase
}
