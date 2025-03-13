import IBook from '@/models/Interfaces/IBook'
import { IBookRepository } from '@/repository/interfaces/IBookRepository'
import { IPublisherRepository } from '@/repository/interfaces/IPublisherRepository'
import GetBookByNameUseCase from './GetBookByNameUseCase'
import GetPublisherByIdUseCase from '@/usecase/PublisherUseCase/GetPublisherByIdUseCase'
import UpdatedPublisherUseCase from '../PublisherUseCase/UpdatePublisherUseCase'

export default class CreateBookUseCase {
  constructor(
    private bookRepository: IBookRepository,
    private publisherRepository: IPublisherRepository,
  ) {}

  async execute(book: IBook): Promise<void> {
    try {
      const getBookByNameUseCase = new GetBookByNameUseCase(this.bookRepository)
      const getPublisherByIdUseCase = new GetPublisherByIdUseCase(
        this.publisherRepository,
      )
      const bookExists = await getBookByNameUseCase.execute(book.name)
      const publisherExists = await getPublisherByIdUseCase.execute(
        book.publisher_id,
      )

      if (bookExists) {
        console.log('Book already exists. Unable to create book')
        return
      }

      if (publisherExists.id !== book.publisher_id) {
        console.log('Publisher does not match. Unable to create book')
        return
      }

      book.publisher_id = publisherExists.id
      publisherExists.book_ids.push(book.id)

      const updatePublisher = new UpdatedPublisherUseCase(
        this.publisherRepository,
      )

      await updatePublisher.execute(publisherExists.name, {
        ...publisherExists,
        book_ids: publisherExists.book_ids,
      })

      await this.bookRepository.addBook(book)
    } catch (error) {
      console.error(`Error creating book: ${error}`)
    }
  }
}
