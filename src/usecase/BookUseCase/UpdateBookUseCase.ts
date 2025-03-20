import IBook from '@/interfaces/IBook'
import { IBookRepository } from '@/interfaces/IBookRepository'
import GetBookByNameUseCase from './GetBookByNameUseCase'

export default class UpdateBookUseCase {
  constructor(private bookRepository: IBookRepository) {}

  async execute(bookName: string, newBookData: IBook): Promise<void> {
    console.log('Updating book:', bookName)
    try {
      const getBookByNameUseCase = new GetBookByNameUseCase(this.bookRepository)
      const bookExists = await getBookByNameUseCase.execute(bookName)

      if (!bookExists) {
        return
      }
      await this.bookRepository.updateBook(bookName, newBookData)
      console.log('Book updated successfully')
    } catch (error) {
      console.log(`Error updating book: ${error}`)
    }
  }
}
