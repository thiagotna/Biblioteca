import IBook from '@/models/Interfaces/IBook'
import Book from '@/models/entities/Book'
import { IBookRepository } from '../interfaces/IBookRepository'

export default class BookRepository implements IBookRepository {
  async getBook(bookName: string): Promise<IBook | null> {
    try {
      const book = await Book.findOne({ name: bookName })

      return book
    } catch (error) {
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
      const updateBook = await Book.findOneAndUpdate(
        { name: bookName },
        { $set: newBookData },
        { new: true },
      )
      console.log(`${updateBook.name} updated successfully`)

      return updateBook
    } catch (error) {
      throw new Error('Book could not be updated'!)
    }
  }

  async deleteBook(bookName: string): Promise<IBook> {
    try {
      const deleteBook = await Book.findOneAndDelete({ name: bookName })
      console.log(`${deleteBook.name} deleted successfully`)
      return deleteBook
    } catch (error) {
      throw new Error('Book could not be deleted!')
    }
  }
}
