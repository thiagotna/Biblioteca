import IBook from '@/models/Interfaces/IBook'

export interface IBookRepository {
  addBook(book: IBook): Promise<void>
  getBook(bookName: string): Promise<IBook>
  updateBook(bookName: string): Promise<void>
  deleteBook(id: string): Promise<void>
}
