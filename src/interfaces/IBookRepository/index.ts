import IBook from '@/interfaces/IBook'

export interface IBookRepository {
  getBook(bookName: string): Promise<IBook | null>
  addBook(book: IBook): Promise<IBook>
  updateBook(bookName: string, book: IBook): Promise<IBook>
  deleteBook(bookName: string): Promise<IBook>
}
