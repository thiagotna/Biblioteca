import IBook from '@/interfaces/IBook'
import IPublisher from '@/interfaces/IPublisher'
import { IPublisherRepository } from '@/interfaces/IPublisherRepository'
import UpdatedPublisherUseCase from './UpdatePublisherUseCase'

export default class AddBookToPublisherUseCase {
  constructor(private publisherRepository: IPublisherRepository) {}

  async execute(book: IBook, publisher: IPublisher): Promise<void> {
    try {
      const addedBook = publisher.book_ids.push(book.id)
      const updatePublisherUseCase = new UpdatedPublisherUseCase(
        this.publisherRepository,
      )
      await updatePublisherUseCase.execute(publisher.name, {
        ...publisher,
        book_ids: publisher.book_ids,
      })
    } catch (error) {
      console.error(`\nError adding book to publisher: ${error}\n`)
    }
  }
}
