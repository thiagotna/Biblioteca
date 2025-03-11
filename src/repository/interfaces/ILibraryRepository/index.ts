import IBook from '@/models/Interfaces/IBook'

export default interface ILibraryRepository {
  getBook(bookName: string): Promise<IBook>
  getBooks(): Promise<IBook[]>
  rentBook(bookName: string): Promise<IBook>
  returnBook(bookName: string): Promise<IBook>
}
