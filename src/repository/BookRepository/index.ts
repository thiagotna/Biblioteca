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
