import IPublisher from '@/interfaces/IPublisher'

export interface IPublisherRepository {
  getPublisherById(publisherId: string): Promise<IPublisher | null>
  getPublisherByName(publisherName: string): Promise<IPublisher | null>
  addPublisher(publisher: IPublisher): Promise<void>
  updatePublisher(
    publisherName: string,
    publisher: IPublisher,
  ): Promise<IPublisher>
  deletePublisher(bookName: string): Promise<IPublisher>
  removeBookFromPublisher(bookId: string): Promise<IPublisher>
}
