import { IPublisherRepository } from '@/repository/interfaces/IPublisherRepository'
import IPublisher from '@/models/Interfaces/IPublisher'

export default class GetPublisherByIdUseCase {
  constructor(private publisherRepository: IPublisherRepository) {}

  async execute(publisherId: string): Promise<IPublisher | null> {
    const publisher = await this.publisherRepository.getPublisherById(
      publisherId,
    )
    return publisher
  }
}
