import PublisherRepository from '@/repository/PublisherRepository'
import UpdatedPublisherUseCase from '@/usecase/PublisherUseCase/UpdatePublisherUseCase'

export default function makeUpdatePublisher() {
  const publisherRepository = new PublisherRepository()
  const updatePublisherUseCase = new UpdatedPublisherUseCase(
    publisherRepository,
  )

  return updatePublisherUseCase
}
