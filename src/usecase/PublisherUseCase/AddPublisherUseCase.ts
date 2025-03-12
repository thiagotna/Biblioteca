import IPublisher from '@/models/Interfaces/IPublisher'
import PublisherRepository from '@/repository/PublisherRepository'

export default class AddPublisherUseCase {
  constructor(private publisherRepository: PublisherRepository) {}

  async execute(publisher: IPublisher): Promise<void> {
    const publisherExists = await this.publisherRepository.getPublisherByName(
      publisher.name,
    )

    if (publisherExists) {
      throw new Error('Publisher already exists')
    }

    await this.publisherRepository.addPublisher(publisher)
  }
}
