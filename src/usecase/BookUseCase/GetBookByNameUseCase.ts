import IBook from '@/models/Interfaces/IBook'
import { IBookRepository } from '@/repository/interfaces/IBookRepository'

export default class GetBookByNameUseCase {
  constructor(private BookRepositor: IBookRepository) {}

  async execute(bookName: string): Promise<IBook | null> {
    console.log('Searching for book:', bookName)

    try {
      const book = await this.BookRepositor.getBook(bookName)
      if (!book) {
        console.log('Book not found!')
        return null
      }

      console.log('Book found:', book)
      return book
    } catch (error) {
      console.error(`Error getting book: ${error}`)
    }
  }
}
