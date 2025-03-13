import IPublisher from '@/interfaces/IPublisher'
import PublisherRepository from '@/repository/PublisherRepository'

export default class AddPublisherUseCase {
  constructor(private publisherRepository: PublisherRepository) {}

  async execute(publisher: IPublisher): Promise<void> {
    console.log('Creating new publisher:', publisher)

    try {
      const publisherExists = await this.publisherRepository.getPublisherByName(
        publisher.name,
      )

      if (publisherExists) {
        return console.log('Publisher already exists')
      }
      await this.publisherRepository.addPublisher(publisher)
      console.log('Publisher created successfully')
    } catch (error) {
      console.error('Error creating publisher:', error)
    }
  }
}
