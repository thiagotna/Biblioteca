import PublisherRepository from '@/repository/PublisherRepository'
import GetPublisherUseCase from '@/usecase/PublisherUseCase/GetPublisherUseCase'

export default function makeGetPublisherByName() {
  const publisherRepository = new PublisherRepository()
  const getPublisherUseCase = new GetPublisherUseCase(publisherRepository)
  return getPublisherUseCase
}
