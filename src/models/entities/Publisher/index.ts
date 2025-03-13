import mongoose, { Schema, Document } from 'mongoose'
import IPublisher from '@/models/Interfaces/IPublisher'

const PublisherSchema = new Schema({
  name: { type: String, required: true },
  book_ids: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Book',
    },
  ],
})

const Publisher = mongoose.model<IPublisher & Document>(
  'publishers',
  PublisherSchema,
)
export default Publisher
