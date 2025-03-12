import { IPublisherRepository } from '@/repository/interfaces/IPublisherRepository'

export default class DeletePublisherUseCase {
  constructor(private publisherRepository: IPublisherRepository) {}

  async execute(publisherName: string): Promise<void> {
    try {
      await this.publisherRepository.deletePublisher(publisherName)
    } catch (error) {
      console.error('Error deleting publisher:', error)
    }
  }
}
