import mongoose, { Schema, Document } from 'mongoose'
import IStock from '@/interfaces/IStock'

const StockSchema = new Schema({
  book_id: {
    type: Schema.Types.ObjectId,
    ref: 'Book',
    required: true,
  },
  total: { type: Number, required: true },
  available: { type: Number, required: true },
  borrowed: { type: Number, required: true },
  reserved: { type: Number, required: true },
})

const Stock = mongoose.model<IStock & Document>('Stock', StockSchema, 'stocks')
export default Stock
