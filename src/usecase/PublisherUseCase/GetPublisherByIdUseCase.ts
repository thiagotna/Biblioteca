import { IPublisherRepository } from '@/interfaces/IPublisherRepository'
import IPublisher from '@/interfaces/IPublisher'

export default class GetPublisherByIdUseCase {
  constructor(private publisherRepository: IPublisherRepository) {}

  async execute(publisherId: string): Promise<IPublisher | null> {
    console.log(`Searching for publisher ID: ${publisherId}`)

    try {
      const publisher = await this.publisherRepository.getPublisherById(
        publisherId,
      )

      if (!publisher) {
        console.log('Publisher not found!')
        return null
      }
      console.log('Publisher ID found:', publisher.id)
      return publisher
    } catch (error) {
      console.error('Error getting publisher ID:', error)
    }
  }
}
