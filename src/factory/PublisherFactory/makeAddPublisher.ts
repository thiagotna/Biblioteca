import PublisherRepository from '@/repository/PublisherRepository'
import AddPublisherUseCase from '@/usecase/PublisherUseCase/AddPublisherUseCase'

export default function makeAddPublisher() {
  const publisherRepository = new PublisherRepository()
  const addPublisherUseCase = new AddPublisherUseCase(publisherRepository)
  return addPublisherUseCase
}
