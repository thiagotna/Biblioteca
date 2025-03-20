import { IPublisherRepository } from '@/interfaces/IPublisherRepository'
import IPublisher from '@/interfaces/IPublisher'

export default class GetPublisherUseCase {
  constructor(private publisherRepository: IPublisherRepository) {}

  async execute(publisherName: string): Promise<IPublisher | null> {
    console.log(`Searching for publisher: ${publisherName}`)

    try {
      const publisher = await this.publisherRepository.getPublisherByName(
        publisherName,
      )

      if (!publisher) {
        console.log('Publisher not found!')
        return null
      }
      console.log('Publisher found:', publisher.name)
      return publisher
    } catch (error) {
      console.error('Error getting publisher:', error)
    }
  }
}
