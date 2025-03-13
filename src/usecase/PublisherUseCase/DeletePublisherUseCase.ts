import IPublisher from '@/interfaces/IPublisher'
import { IPublisherRepository } from '@/interfaces/IPublisherRepository'
import GetPublisherUseCase from './GetPublisherUseCase'

export default class DeletePublisherUseCase {
  constructor(private publisherRepository: IPublisherRepository) {}

  async execute(publisherName: string): Promise<void> {
    console.log('Deleting publisher:', publisherName)

    try {
      const getPublisherUseCase = new GetPublisherUseCase(
        this.publisherRepository,
      )
      const publisherExists = await getPublisherUseCase.execute(publisherName)

      if (!publisherExists) {
        return
      }
      await this.publisherRepository.deletePublisher(publisherName)
      console.log('Publisher deleted:', publisherName)
    } catch (error) {
      console.error('Error deleting publisher:', error)
    }
  }
}
