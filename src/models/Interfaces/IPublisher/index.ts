import IBook from '@/models/Interfaces/IBook'

export default interface IPublisher {
  id?: string
  name: string
  books_id: Pick<IBook, 'id'>[]
}
