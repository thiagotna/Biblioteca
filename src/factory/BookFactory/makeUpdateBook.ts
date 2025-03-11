import BookRepository from '@/repository/BookRepository'
import UpdateBookUseCase from '@/usecase/BookUseCase/UpdateBookUseCase'

export default function makeUpdateBook() {
  const bookRepository = new BookRepository()
  const updateBookUseCase = new UpdateBookUseCase(bookRepository)
  return updateBookUseCase
}
