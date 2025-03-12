import PublisherRepository from '@/repository/PublisherRepository'
import DeletePublisherUseCase from '@/usecase/PublisherUseCase/DeletePublisherUseCase'

export default function makeDeletePublisher() {
  const publisherRepository = new PublisherRepository()
  const deletePublisherUseCase = new DeletePublisherUseCase(publisherRepository)
  return deletePublisherUseCase
}
