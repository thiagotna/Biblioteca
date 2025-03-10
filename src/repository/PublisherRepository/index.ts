import IPublisher from '@/models/Interfaces/IPublisher'
import { IPublisherRepository } from '../interfaces/IPublisherRepository'

export default class PublisherRepository implements IPublisherRepository {
  addPublisher(publisher: IPublisher): Promise<void> {
    throw new Error('Method not implemented.')
  }
  getPublisher(): Promise<IPublisher[]> {
    throw new Error('Method not implemented.')
  }
  updatePublisher(publisher: IPublisher): Promise<void> {
    throw new Error('Method not implemented.')
  }
  deletePublisher(id: string): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
