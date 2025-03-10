import IPublisher from '@/models/Interfaces/IPublisher'

export default interface IBook {
  id?: string
  name: string
  genre: string
  author: string
  stock: number
  publisher_ids?: Pick<IPublisher, 'id'>
}
