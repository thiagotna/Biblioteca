import IBook from '@/models/Interfaces/IBook'

export interface IBookRepository {
  getBook(bookName: string): Promise<IBook>
  addBook(book: IBook): Promise<void>
  updateBook(bookName: string): Promise<void>
  deleteBook(id: string): Promise<void>
}
