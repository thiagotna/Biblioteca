import { IPublisherRepository } from '@/repository/interfaces/IPublisherRepository'
import IPublisher from '@/models/Interfaces/IPublisher'

export default class GetPublisherUseCase {
  constructor(private publisherRepository: IPublisherRepository) {}

  async execute(publisherName: string): Promise<IPublisher | null> {
    const publisher = await this.publisherRepository.getPublisherByName(
      publisherName,
    )
    return publisher
  }
}
