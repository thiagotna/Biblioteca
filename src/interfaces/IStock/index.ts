export default interface IStock {
  id?: string
  book_id: string
  total: number
  available: number
  borrowed: number
  reserved: number
}
