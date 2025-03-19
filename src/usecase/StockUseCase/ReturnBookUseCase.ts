import IStock from '@/interfaces/IStock'
import IStockRepository from '@/interfaces/IStockRepository'
import GetBookByFromStockUseCase from './GetBookFromStockUseCase'

export default class ReturnBookUseCase {
  constructor(private stockRepository: IStockRepository) {}

  async execute(bookId: string): Promise<void> {
    console.log('Returning book:', bookId)

    try {
      const getBookFromStockUseCase = new GetBookByFromStockUseCase(
        this.stockRepository,
      )
      const book = await getBookFromStockUseCase.execute(bookId)

      if (book.borrowed < 1) {
        console.log('No borrowed copies to return')
        return
      }

      await this.stockRepository.returnBook(bookId)
      console.log('Book returned successfully')
    } catch (error) {
      console.error(`Error returning book: ${error}`)
    }
  }
}
