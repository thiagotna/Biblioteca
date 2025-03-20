import BookRepository from '@/repository/BookRepository'
import PublisherRepository from '@/repository/PublisherRepository'
import DeleteBookUseCase from '@/usecase/BookUseCase/DeleteBookUseCase'

export function makeDeleteBook() {
  const bookRepository = new BookRepository()
  const publisherRepository = new PublisherRepository()
  const deleteBookUseCase = new DeleteBookUseCase(
    bookRepository,
    publisherRepository,
  )
  return deleteBookUseCase
}
