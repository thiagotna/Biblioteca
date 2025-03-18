import IStock from '@/interfaces/IStock'
import Stock from '@/models/entities/Stock'
import IStockRepository from '@/interfaces/IStockRepository'

export default class StockRepository implements IStockRepository {
  async getBookFromStock(bookId: string): Promise<IStock | null> {
    try {
      const bookInStock = await Stock.findOne({ book_id: bookId })
      return bookInStock
    } catch (error) {
      throw new Error(`Database query error: ${error}`)
    }
  }

  async addBookToStock(book: IStock): Promise<IStock> {
    try {
      const addBookToStock = await Stock.create(book)
      return addBookToStock
    } catch (error) {
      throw new Error(`Error adding book: ${error}`)
    }
  }

  async borrowBook(bookId: string): Promise<IStock> {
    try {
      const borrowedBook = await Stock.findOneAndUpdate(
        { book_id: bookId },
        { $inc: { available: -1, borrowed: +1 } },
        { new: true },
      )
      return borrowedBook
    } catch (error) {
      throw new Error(`Error borrowing book: ${error}`)
    }
  }

  async returnBook(bookId: string): Promise<IStock> {
    try {
      const returnedBook = await Stock.findOneAndUpdate(
        { book_id: bookId },
        { $inc: { available: +1, borrowed: -1 } },
        { new: true },
      )
      return returnedBook
    } catch (error) {
      throw new Error(`Error returning book: ${error}`)
    }
  }

  async reserveBook(bookId: string): Promise<IStock> {
    try {
      const reservedBook = await Stock.findOneAndUpdate(
        { book_id: bookId },
        { $inc: { available: -1, reserved: +1 } },
        { new: true },
      )
      return reservedBook
    } catch (error) {
      throw new Error(`Error reserving book: ${error}`)
    }
  }

  async cancelReservation(bookId: string): Promise<IStock> {
    try {
      const cancelledReservation = await Stock.findOneAndUpdate(
        { book_id: bookId },
        { $inc: { available: +1, reserved: -1 } },
        { new: true },
      )
      return cancelledReservation
    } catch (error) {
      throw new Error(`Error cancelling reservation: ${error}`)
    }
  }

  async deleteBookFromStock(bookId: string): Promise<IStock> {
    try {
      const deletedBook = await Stock.findOneAndDelete({ bookId })
      return deletedBook
    } catch (error) {
      throw new Error(`Error deleting book: ${error}`)
    }
  }
}
