import IStock from '@/interfaces/IStock'
import IStockRepository from '@/interfaces/IStockRepository'

export default class BorrowBookUseCase {
  constructor(private stockRepository: IStockRepository) {}

  async execute(bookId: string): Promise<IStock | null> {
    console.log(`Checking out availablility for book id: ${bookId}`)
    try {
      const book = await this.stockRepository.borrowBook(bookId)
      console.log('Book:', book)

      if (book.available < 1) {
        console.log('Book not available')
        return null
      }
      console.log('Book checked out:', book)
      return book
    } catch (error) {
      console.error('Error checking out book:', error)
    }
  }
}
