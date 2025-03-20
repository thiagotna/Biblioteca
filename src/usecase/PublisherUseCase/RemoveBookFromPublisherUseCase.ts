import { IPublisherRepository } from '@/interfaces/IPublisherRepository'

export default class RemoveBookFromPublisherUseCase {
  constructor(private publisherRepository: IPublisherRepository) {}

  async execute(bookId: string) {
    console.log('Removing book from publisher...')

    try {
      const bookFoundInPublsher =
        await this.publisherRepository.removeBookFromPublisher(bookId)

      if (!bookFoundInPublsher) {
        console.log('Book not found in publisher!')
        return
      }
      console.log('Book removed from publisher successfully')
    } catch (error) {
      console.error(`Error removing book from publisher: ${error}`)
    }
  }
}
