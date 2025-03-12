import mongoose, { Schema, Document } from 'mongoose'
import IPublisher from '@/models/Interfaces/IPublisher'

const PublisherSchema = new Schema({
  name: { type: String, required: true },
  books_id: {
    type: Schema.Types.ObjectId,
    ref: 'Publisher',
    required: false,
  },
})

const Publisher = mongoose.model<IPublisher & Document>(
  'publishers',
  PublisherSchema,
)
export default Publisher
