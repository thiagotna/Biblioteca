import IPublisher from '@/models/Interfaces/IPublisher'

export interface IPublisherRepository {
  getPublisherByName(publisherName: string): Promise<IPublisher | null>
  addPublisher(publisher: IPublisher): Promise<void>
  updatePublisher(publisher: IPublisher): Promise<void>
  deletePublisher(id: string): Promise<void>
}
