import IPublisher from '@/models/Interfaces/IPublisher'

export default interface IBook {
  id?: string
  name: string
  genre: string
  author: string
  publisher_id: string
}
