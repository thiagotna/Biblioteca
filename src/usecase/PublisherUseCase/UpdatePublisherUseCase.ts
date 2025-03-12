import IPublisher from '@/models/Interfaces/IPublisher'
import { IPublisherRepository } from '@/repository/interfaces/IPublisherRepository'

export default class UpdatedPublisherUseCase {
  constructor(private publisherRepository: IPublisherRepository) {}

  async execute(publisherName: string, publisher: IPublisher) {
    const updatedPublisher = await this.publisherRepository.updatePublisher(
      publisherName,
      publisher,
    )
  }
}
