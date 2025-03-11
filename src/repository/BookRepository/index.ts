import IBook from '@/models/Interfaces/IBook'
import { IBookRepository } from '../interfaces/IBookRepository'
import Book from '@/models/entities/Book'

export default class BookRepository implements IBookRepository {
  async getBook(bookName: string): Promise<IBook | null> {
    try {
      console.log(`Searching for book: ${bookName}`)
      const book = await Book.findOne({ name: bookName })

      if (!book) {
        console.log('Book not found in database')
        return null
      }

      console.log('Book found:', book)
      return book
    } catch (error) {
      console.error('Error searching for book:', error)
      throw new Error(`Database query error: ${error}`)
    }
  }

  async addBook(book: IBook): Promise<void> {
    try {
      const newBook = new Book(book)
      await newBook.save()
      console.log('Book created successfully')
    } catch (error) {
      throw new Error(`Error creating book: ${error}`)
    }
  }

  async updateBook(bookName: string, newBookData: IBook): Promise<IBook> {
    try {
      const existingBook = await Book.findOne({ name: bookName })
      const updateBook = await Book.findOneAndUpdate(
        { name: bookName },
        { $set: newBookData },
        { new: true },
      )

      console.log(`✅ Book found: ${existingBook}`)

      if (!updateBook) {
        throw new Error('Book not found')
      }
      console.log(`${updateBook.name} updated successfully`)
      return updateBook
    } catch (error) {}
  }

  async deleteBook(bookName: string): Promise<void> {
    try {
      const deleteBook = Book.findOneAndDelete({ name: bookName })
      console.log(`${Book.name} deleted successfully`)
    } catch (error) {
      throw new Error('Book not found')
    }
  }
}
