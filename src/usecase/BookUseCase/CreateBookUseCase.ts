import IBook from '@/interfaces/IBook'
import { IBookRepository } from '@/interfaces/IBookRepository'
import { IPublisherRepository } from '@/interfaces/IPublisherRepository'
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

      if (!publisherExists || publisherExists.id !== book.publisher_id) {
        console.log('Publisher does not match. Unable to create book')
        return
      }

      const newBook = await this.bookRepository.addBook(book)

      if (newBook === null) return

      publisherExists.book_ids.push(newBook.id)

      const updatePublisher = new UpdatedPublisherUseCase(
        this.publisherRepository,
      )
      await updatePublisher.execute(publisherExists.name, {
        ...publisherExists,
        book_ids: publisherExists.book_ids,
      })

      console.log('Book created successfully')
    } catch (error) {
      console.error(`Error creating book: ${error}`)
    }
  }
}
