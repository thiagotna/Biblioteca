import IPublisher from '@/models/Interfaces/IPublisher'

export interface IPublisherRepository {
  getPublisherByName(publisherName: string): Promise<IPublisher | null>
  addPublisher(publisher: IPublisher): Promise<void>
  updatePublisher(
    publisherName: string,
    publisher: IPublisher,
  ): Promise<IPublisher>
  deletePublisher(id: string): Promise<IPublisher>
}
