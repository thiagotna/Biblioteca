import IStock from '@/interfaces/IStock'

export default interface IStockRepository {
  getBookFromStock(bookId: string): Promise<IStock | null>
  addBookToStock(book: IStock): Promise<IStock>
  borrowBook(bookId: string): Promise<IStock>
  returnBook(bookId: string): Promise<IStock>
  reserveBook(bookId: string): Promise<IStock>
  cancelReservation(bookId: string): Promise<IStock>
  deleteBookFromStock(bookId: string): Promise<IStock>
}
