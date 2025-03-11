import IBook from '@/models/Interfaces/IBook'

export interface IBookRepository {
  getBook(bookName: string): Promise<IBook | null>
  addBook(book: IBook): Promise<void>
  updateBook(bookName: string, book: IBook): Promise<IBook>
  deleteBook(bookName: string): Promise<void>
}
