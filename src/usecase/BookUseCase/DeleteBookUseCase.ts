import { IBookRepository } from '@/interfaces/IBookRepository'
import { IPublisherRepository } from '@/interfaces/IPublisherRepository'
import GetBookByNameUseCase from '@/usecase/BookUseCase/GetBookByNameUseCase'
import RemoveBookFromPublisherUseCase from '@/usecase/PublisherUseCase/RemoveBookFromPublisherUseCase'

export default class DeleteBookUseCase {
  constructor(
    private bookRepository: IBookRepository,
    private publisherRepository: IPublisherRepository,
  ) {}

  async execute(bookName: string): Promise<void> {
    console.log('Deleting book:', bookName)

    try {
      const getBookByNameUseCase = new GetBookByNameUseCase(this.bookRepository)
      const removeBookFromPublisherUseCase = new RemoveBookFromPublisherUseCase(
        this.publisherRepository,
      )
      const bookExists = await getBookByNameUseCase.execute(bookName)

      if (!bookExists) return

      await removeBookFromPublisherUseCase.execute(bookExists.id)
      await this.bookRepository.deleteBook(bookName)
      console.log('Book deleted successfully')
    } catch (error) {
      throw new Error(`Error deleting book: ${error}`)
    }
  }
}
