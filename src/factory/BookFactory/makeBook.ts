import BookRepository from '@/repository/BookRepository'
import PublisherRepository from '@/repository/PublisherRepository'
import CreateBookUseCase from '@/usecase/BookUseCase/CreateBookUseCase'

export default function makeBook() {
  const bookRepository = new BookRepository()
  const publisherRepository = new PublisherRepository()
  const createBookUse = new CreateBookUseCase(
    bookRepository,
    publisherRepository,
  )

  return createBookUse
}
