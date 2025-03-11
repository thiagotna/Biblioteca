import IBook from '@/models/Interfaces/IBook'
import { IBookRepository } from '@/repository/interfaces/IBookRepository'

export default class CreateBookUseCase {
  constructor(private bookRepository: IBookRepository) {}

  async execute(book: IBook): Promise<void> {
    try {
      const bookExists = await this.bookRepository.getBook(book.name)
      if (bookExists) {
        console.log('Book already exists')
        return
      }
      await this.bookRepository.addBook(book)
    } catch (error) {
      throw new Error(`Error creating book: ${error}`)
    }
  }
}
