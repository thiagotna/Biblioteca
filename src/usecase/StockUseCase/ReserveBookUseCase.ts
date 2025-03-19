import IStock from '@/interfaces/IStock'
import IStockRepository from '@/interfaces/IStockRepository'
import GetBookByFromStockUseCase from '@/usecase/StockUseCase/GetBookFromStockUseCase'

export default class ReverveBookUseCase {
  constructor(private stockRepository: IStockRepository) {}

  async execute(bookId: string): Promise<IStock | null> {
    console.log('Reserving book:', bookId)

    try {
      const getBookFromStockUseCase = new GetBookByFromStockUseCase(
        this.stockRepository,
      )
      const book = await getBookFromStockUseCase.execute(bookId)

      if (book.available < 1) {
        console.log('Book not available for reservation!')
        return null
      }

      const reservedBook = await this.stockRepository.reserveBook(bookId)

      return reservedBook
    } catch (error) {
      console.error(`Error reserving book: ${error}`)
    }
  }
}
