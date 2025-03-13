import { IBookRepository } from '@/interfaces/IBookRepository'
import GetBookByNameUseCase from './GetBookByNameUseCase'

export default class DeleteBookUseCase {
  constructor(private bookRepository: IBookRepository) {}

  async execute(bookName: string): Promise<void> {
    console.log('Deleting book:', bookName)

    try {
      const getBookByNameUseCase = new GetBookByNameUseCase(this.bookRepository)
      const bookExists = await getBookByNameUseCase.execute(bookName)

      if (!bookExists) {
        return
      }
      await this.bookRepository.deleteBook(bookName)
      console.log('Book deleted successfully')
    } catch (error) {
      throw new Error(`Error deleting book: ${error}`)
    }
  }
}
