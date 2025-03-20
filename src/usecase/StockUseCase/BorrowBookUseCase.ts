import IStock from '@/interfaces/IStock'
import IStockRepository from '@/interfaces/IStockRepository'
import GetBookByFromStockUseCase from './GetBookFromStockUseCase'

export default class BorrowBookUseCase {
  constructor(private stockRepository: IStockRepository) {}

  async execute(bookId: string): Promise<IStock | null> {
    console.log(`Checking out availablility for book id: ${bookId}`)
    try {
      const getBookFromStockUseCase = new GetBookByFromStockUseCase(
        this.stockRepository,
      )
      const book = await getBookFromStockUseCase.execute(bookId)

      if (book.available < 1) {
        console.log('Book not available')
        return null
      }

      const borrowBook = await this.stockRepository.borrowBook(bookId)

      console.log('Book checked out:', book)
      return borrowBook
    } catch (error) {
      console.error('Error checking out book:', error)
    }
  }
}
