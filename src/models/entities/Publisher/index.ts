import IBook from '../Book'

export default interface IPublisher {
  id?: string
  name: string
  books_id: Pick<IBook, 'id'>[]
}
