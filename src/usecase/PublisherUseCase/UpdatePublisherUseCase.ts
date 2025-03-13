import IPublisher from '@/models/Interfaces/IPublisher'
import { IPublisherRepository } from '@/repository/interfaces/IPublisherRepository'
import GetPublisherUseCase from './GetPublisherUseCase'

export default class UpdatedPublisherUseCase {
  constructor(private publisherRepository: IPublisherRepository) {}

  async execute(publisherName: string, publisher: IPublisher) {
    console.log(`Updating publisher ${publisherName}...`)

    try {
      const getPublisherUseCase = new GetPublisherUseCase(
        this.publisherRepository,
      )
      const existingPublisher = await getPublisherUseCase.execute(publisherName)

      if (!existingPublisher) {
        return
      }

      const updatedPublisher = await this.publisherRepository.updatePublisher(
        publisherName,
        publisher,
      )

      console.log(`${updatedPublisher.name} updated successfully`)
    } catch (error) {
      console.error(`Error updating publisher: ${error}`)
    }
  }
}
