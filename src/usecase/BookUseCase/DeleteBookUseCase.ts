import { IBookRepository } from '@/repository/interfaces/IBookRepository'

export default class DeleteBookUseCase {
  constructor(private bookRepository: IBookRepository) {}

  async execute(bookName: string): Promise<void> {
    try {
      await this.bookRepository.deleteBook(bookName)
    } catch (error) {
      throw new Error(`Error deleting book: ${error}`)
    }
  }
}
