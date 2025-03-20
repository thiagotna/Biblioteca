import IStock from '@/interfaces/IStock'
import IStockRepository from '@/interfaces/IStockRepository'
import GetBookByFromStockUseCase from '@/usecase/StockUseCase/GetBookFromStockUseCase'

export default class DeleteBookFromStockUseCase {
  constructor(private readonly stockRepository: IStockRepository) {}

  async execute(bookId: string): Promise<void> {
    console.log(`Deleting book ${bookId} from stock`)
    try {
      const getBookFromStockUseCase = new GetBookByFromStockUseCase(
        this.stockRepository,
      )
      const bookInStock = await getBookFromStockUseCase.execute(bookId)

      if (!bookInStock) {
        throw new Error('Book not found in stock. Cannot delete.')
      }

      const deletedBook = await this.stockRepository.deleteBookFromStock(
        bookInStock.book_id,
      )

      console.log(`${deletedBook} deleted from stock`)
    } catch (error) {
      throw new Error(`Error deleting book: ${error}`)
    }
  }
}
