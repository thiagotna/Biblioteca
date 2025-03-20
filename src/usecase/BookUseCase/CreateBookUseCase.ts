import IBook from '@/interfaces/IBook'
import { IBookRepository } from '@/interfaces/IBookRepository'
import { IPublisherRepository } from '@/interfaces/IPublisherRepository'
import GetBookByNameUseCase from './GetBookByNameUseCase'
import GetPublisherByIdUseCase from '@/usecase/PublisherUseCase/GetPublisherByIdUseCase'
import AddBookToPublisherUseCase from '../PublisherUseCase/AddBookToPublisherUseCase'

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
      const addBookToPublisherUseCase = new AddBookToPublisherUseCase(
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

      if (!publisherExists) {
        console.log('Publisher does not exist. Unable to create book')
        return
      }

      const newBook = await this.bookRepository.addBook(book)
      await addBookToPublisherUseCase.execute(newBook, publisherExists)
      console.log('Book created successfully')
    } catch (error) {
      console.error(`Error creating book: ${error}`)
    }
  }
}
