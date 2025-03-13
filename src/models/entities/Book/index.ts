import mongoose, { Schema, Document } from 'mongoose'
import IBook from '@/models/Interfaces/IBook'

const BookSchema = new Schema({
  name: { type: String, required: true },
  genre: { type: String, required: true },
  author: { type: String, required: true },
  publisher_id: {
    type: Schema.Types.ObjectId,
    ref: 'Publisher',
    required: true,
  },
})

const Book = mongoose.model<IBook & Document>('Book', BookSchema, 'books')
export default Book
