import IStock from '@/interfaces/IStock'
import IStockRepository from '@/interfaces/IStockRepository'

export default class GetBookByFromStockUseCase {
  constructor(private stockRepository: IStockRepository) {}

  async execute(bookId: string): Promise<IStock | null> {
    console.log('Searching for book in stock:', bookId)
    try {
      const book = await this.stockRepository.getBookFromStock(bookId)
      if (!book) {
        console.log('Book not found!')
        return null
      }
      console.log('Book found:', book)
      return book
    } catch (error) {
      console.error(`Error getting book: ${error}`)
    }
  }
}
