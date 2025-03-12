import BookRepository from '@/repository/BookRepository'
import DeleteBookUseCase from '@/usecase/BookUseCase/DeleteBookUseCase'

export function makeDeleteBook() {
  const bookRepository = new BookRepository()
  const deleteBookUseCase = new DeleteBookUseCase(bookRepository)
  return deleteBookUseCase
}
