import IStock from '@/interfaces/IStock'
import StockRepository from '@/repository/StockRepository'
import GetBookByFromStockUseCase from '@/usecase/StockUseCase/GetBookFromStockUseCase'
import { get } from 'jquery'

export default function makeGetBookFromStock() {
  const stockRepository = new StockRepository()
  const getBookFromStockUseCase = new GetBookByFromStockUseCase(stockRepository)

  return getBookFromStockUseCase
}
