import IBook from '@/models/Interfaces/IBook'
import ILibraryRepository from '../interfaces/ILibraryRepository'
import Book from '@/models/entities/Book'
import Publisher from '@/models/entities/Publisher'

export default class LibraryRepository implements ILibraryRepository {
  getBook(bookName: string): Promise<IBook> {
    throw new Error('Method not implemented.')
  }
  getBooks(): Promise<IBook[]> {
    throw new Error('Method not implemented.')
  }
  rentBook(bookName: string): Promise<IBook> {
    throw new Error('Method not implemented.')
  }
  returnBook(bookName: string): Promise<IBook> {
    throw new Error('Method not implemented.')
  }
}
