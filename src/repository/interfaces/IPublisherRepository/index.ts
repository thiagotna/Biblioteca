import IPublisher from '@/models/Interfaces/IPublisher'

export interface IPublisherRepository {
  addPublisher(publisher: IPublisher): Promise<void>
  getPublisher(): Promise<IPublisher[]>
  updatePublisher(publisher: IPublisher): Promise<void>
  deletePublisher(id: string): Promise<void>
}
