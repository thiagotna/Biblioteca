import IBook from '@/models/Interfaces/IBook'

export default interface ILibraryRepository {
  getBooks(): Promise<IBook[]>
  getBookById(id: string): Promise<IBook>
  createBook(data: any): Promise<void>
  updateBook(id: string, data: any): Promise<void>
  deleteBook(id: string): Promise<void>
}
