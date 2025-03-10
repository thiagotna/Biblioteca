import IBook from '@/models/Interfaces/IBook'

export default interface ILibraryRepository {
  //addBook(book: IBook): Promise<void>
  getBooks(): Promise<IBook[]>
  rentBook(id: string): Promise<IBook>
  returnBook(id: string): Promise<IBook>
}
