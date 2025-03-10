import IBook from '@/models/Interfaces/IBook'
import ILibraryRepository from '../interfaces/ILibraryRepository'
import Book from '@/models/entities/Book'
import Publisher from '@/models/entities/Publisher'

export default class LibraryRepository implements ILibraryRepository {
  //addBook(book: IBook): Promise<void> {}
  getBooks(): Promise<IBook[]> {
    throw new Error('Method not implemented.')
  }
  rentBook(id: string): Promise<IBook> {
    throw new Error('Method not implemented.')
  }
  returnBook(id: string): Promise<IBook> {
    throw new Error('Method not implemented.')
  }
}
