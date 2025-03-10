import IBook from '@/models/Interfaces/IBook'
import { IBookRepository } from '../interfaces/IBookRepository'
import Book from '@/models/entities/Book'

export default class BookRepository implements IBookRepository {
  async addBook(book: IBook): Promise<void> {
    try {
      await Book.create(book)
      console.log('Book created successfully')
    } catch (error) {
      throw new Error(`Error creating book: ${error}`)
    }
  }
  async getBook(bookName: string): Promise<IBook> {
    try {
      const book = await Book.findOne({ name })
      if (!book) {
        throw new Error('Book not found')
      }
      console.log(`${Book} found successfully`)
      return book
    } catch (error) {
      throw new Error('Book not found')
    }
  }
  async updateBook(bookName: string): Promise<void> {
    try {
      const updateBook = Book.findOneAndUpdate({
        name: bookName,
      })
      if (!updateBook) {
        throw new Error('Book not found')
      }
      console.log(`${Book.name} updated successfully`)
    } catch (error) {}
  }
  async deleteBook(id: string): Promise<void> {
    try {
      const deleteBook = Book.findOneAndDelete({ _id: id })
      console.log(`${Book.name} deleted successfully`)
    } catch (error) {
      throw new Error('Book not found')
    }
  }
}
