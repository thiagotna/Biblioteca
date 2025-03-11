import BookRepository from '@/repository/BookRepository'
import GetBookByNameUseCase from '@/usecase/BookUseCase/GetBookByNameUseCase'

export function makeGetBookByName() {
  const bookRepository = new BookRepository()
  const getBookByNameUseCase = new GetBookByNameUseCase(bookRepository)

  return getBookByNameUseCase
}
