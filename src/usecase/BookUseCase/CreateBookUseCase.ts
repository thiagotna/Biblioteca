import IBook from '@/models/Interfaces/IBook'
import IPublisher from '@/models/Interfaces/IPublisher'
import { IBookRepository } from '@/repository/interfaces/IBookRepository'
import { IPublisherRepository } from '@/repository/interfaces/IPublisherRepository'

export default class CreateBookUseCase {
  constructor(
    private bookRepository: IBookRepository,
    private publisherRepositoy: IPublisherRepository,
  ) {}

  async execute(book: IBook): Promise<void> {
    try {
      const bookExists = await this.bookRepository.getBook(book.name)
      if (bookExists) {
        console.log('Book already exists')
        return
      }

      const publisherExists = await this.publisherRepositoy.getPublisherById(
        book.publisher_id,
      )

      if (!publisherExists) {
        throw new Error('Publisher not found. Unable to create book')
      }

      await this.bookRepository.addBook(book)
    } catch (error) {
      throw new Error(`Error creating book: ${error}`)
    }
  }
}
