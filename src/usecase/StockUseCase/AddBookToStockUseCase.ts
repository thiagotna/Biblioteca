import IBook from '@/interfaces/IBook'
import IStock from '@/interfaces/IStock'
import IStockRepository from '@/interfaces/IStockRepository'
import CreateBookUseCase from '@/usecase/BookUseCase/CreateBookUseCase'
import GetBookByNameUseCase from '../BookUseCase/GetBookByNameUseCase'
import { IBookRepository } from '@/interfaces/IBookRepository'
import { IPublisherRepository } from '@/interfaces/IPublisherRepository'

export default class AddBookToStockUseCase {
  constructor(
    private bookRepository: IBookRepository,
    private publisherRepository: IPublisherRepository,
    private stockRepository: IStockRepository,
  ) {}

  async execute(book: IBook, quantity: number): Promise<IStock | null> {
    console.log('Adding book to stock:', book.name)

    try {
      const createBookUseCase = new CreateBookUseCase(
        this.bookRepository,
        this.publisherRepository,
      )
      // Search and check if book already exists
      const getBookByNameUseCase = new GetBookByNameUseCase(this.bookRepository)
      const bookExists = await getBookByNameUseCase.execute(book.name)

      if (bookExists) {
        console.log(
          'Book already exists in Book Repository. Adding to stock...',
        )

        const bookStock: IStock = {
          book_id: bookExists.id,
          total: quantity,
          available: quantity,
          borrowed: 0,
          reserved: 0,
        }

        return await this.stockRepository.addBookToStock(bookStock)
      } else {
        console.log(
          'Book does not exist. Creating book in Book Repository and adding to it stock...',
        )
        await createBookUseCase.execute(book)

        const newBook = await getBookByNameUseCase.execute(book.name)

        if (!newBook) return

        const bookStock: IStock = {
          book_id: newBook.id,
          total: quantity,
          available: quantity,
          borrowed: 0,
          reserved: 0,
        }

        return await this.stockRepository.addBookToStock(bookStock)
      }
    } catch (error) {
      console.error(`Error adding book to stock: ${error}`)
    }
  }
}
