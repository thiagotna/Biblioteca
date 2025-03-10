import ILibraryRepository from '../interfaces/ILibraryRepository'

export default class LibraryRepository implements ILibraryRepository {
  createBook(data: any): Promise<void> {
    throw new Error('Method not implemented.')
  }
  updateBook(id: string, data: any): Promise<void> {
    throw new Error('Method not implemented.')
  }
  deleteBook(id: string): Promise<void> {
    throw new Error('Method not implemented.')
  }
  async getBooks() {
    return []
  }

  async getBookById(id: string) {
    return null
  }
}
