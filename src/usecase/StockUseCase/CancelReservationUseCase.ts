import IStock from '@/interfaces/IStock'
import IStockRepository from '@/interfaces/IStockRepository'
import GetBookByFromStockUseCase from '@/usecase/StockUseCase/GetBookFromStockUseCase'

export default class CancelReservationUseCase {
  constructor(private stockRepository: IStockRepository) {}

  async execute(bookId: string): Promise<IStock> {
    const getBookFromStockUseCase = new GetBookByFromStockUseCase(
      this.stockRepository,
    )
    const bookInStock = await getBookFromStockUseCase.execute(bookId)

    if (bookInStock.reserved === 0) {
      throw new Error('This book has no copies reserved.')
    }

    const returnedBook = await this.stockRepository.cancelReservation(bookId)
    return returnedBook
  }
}
