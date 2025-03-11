import BookRepository from '@/repository/BookRepository'
import CreateBookUseCase from '@/usecase/BookUseCase/CreateBookUseCase'

export default function makeBook() {
  const bookRepository = new BookRepository()
  const createBookUse = new CreateBookUseCase(bookRepository)

  return createBookUse
}
