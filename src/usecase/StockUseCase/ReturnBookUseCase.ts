import IStockRepository from '@/interfaces/IStockRepository'

export default class ReturnBookUseCase {
  constructor(private stockRepository: IStockRepository) {}

  async execute(bookId: string): Promise<void> {
    console.log('Returning book:', bookId)

    try {
      await this.stockRepository.returnBook(bookId)
      console.log('Book returned successfully')
    } catch (error) {
      console.error(`Error returning book: ${error}`)
    }
  }
}
