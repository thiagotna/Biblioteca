import IBook from '@/models/Interfaces/IBook'
import { IBookRepository } from '@/repository/interfaces/IBookRepository'
import { IPublisherRepository } from '@/repository/interfaces/IPublisherRepository'
import GetPublisherByIdUseCase from '@/usecase/PublisherUseCase/GetPublisherByIdUseCase'

export default class CreateBookUseCase {
  constructor(
    private bookRepository: IBookRepository,
    private publisherRepository: IPublisherRepository,
  ) {}

  async execute(book: IBook): Promise<void> {
    try {
      const bookExists = await this.bookRepository.getBook(book.name)
      if (bookExists) {
        console.log('Book already exists')
        return
      }

      const getPublisherByIdUseCase = new GetPublisherByIdUseCase(
        this.publisherRepository,
      )

      const publisherExists = await getPublisherByIdUseCase.execute(
        book.publisher_id,
      )

      console.log('Searching for publisher:', book.publisher_id)

      if (!publisherExists) {
        console.log('Publisher does not exist. Unable to create book')
        return
      }

      console.log('publisherExists', publisherExists.name)

      if (publisherExists.id !== book.publisher_id) {
        console.log('Publisher does not match. Unable to create book')
        return
      }

      // Inicializa book_ids se estiver indefinido
      if (!publisherExists.book_ids) {
        publisherExists.book_ids = []
      }

      publisherExists.book_ids.push(book.id)

      const updatedPublisher = await this.publisherRepository.updatePublisher(
        publisherExists.name,
        publisherExists,
      )

      if (!updatedPublisher) {
        console.log('Error updating publisher: Publisher not found')
        return
      }

      await this.bookRepository.addBook(book)
    } catch (error) {
      throw new Error(`Error creating book: ${error}`)
    }
  }
}
