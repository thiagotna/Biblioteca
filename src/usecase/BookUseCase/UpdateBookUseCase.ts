import IBook from '@/models/Interfaces/IBook'
import { IBookRepository } from '@/repository/interfaces/IBookRepository'

export default class UpdateBookUseCase {
  constructor(private bookRepository: IBookRepository) {}

  async execute(bookName: string, newBookData: IBook): Promise<void> {
    try {
      await this.bookRepository.updateBook(bookName, newBookData)
    } catch (error) {
      throw new Error(`Error updating book: ${error}`)
    }
  }
}
