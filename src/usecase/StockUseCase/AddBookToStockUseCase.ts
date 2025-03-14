import IBook from '@/interfaces/IBook'
import IStock from '@/interfaces/IStock'
import IStockRepository from '@/interfaces/IStockRepository'
import GetBookByNameUseCase from '../BookUseCase/GetBookByNameUseCase'
import { IBookRepository } from '@/interfaces/IBookRepository'

export default class AddBookToStockUseCase {
  constructor(
    private bookRepository: IBookRepository,
    private stockRepository: IStockRepository,
  ) {}

  async execute(book: IBook, quantity: number): Promise<IStock | null> {
    console.log('Adding book to stock:', book.name)

    try {
      const getBookByNameUseCase = new GetBookByNameUseCase(this.bookRepository)
      const bookExists = await getBookByNameUseCase.execute(book.name)

      if (!bookExists) {
        console.log(`Book does not exist. Please create ${book.name} first...`)
        return null
      }

      console.log('Book found:', bookExists.name)
      console.log('Adding book to stock...')

      const bookStock: IStock = {
        book_id: bookExists.id,
        total: quantity,
        available: quantity,
        borrowed: 0,
        reserved: 0,
      }

      return await this.stockRepository.addBookToStock(bookStock)
    } catch (error) {
      console.error(`Error adding book to stock: ${error}`)
    }
  }
}
