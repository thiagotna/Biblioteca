import IPublisher from '@/models/Interfaces/IPublisher'
import Publisher from '@/models/entities/Publisher'
import { IPublisherRepository } from '../interfaces/IPublisherRepository'

export default class PublisherRepository implements IPublisherRepository {
  async getPublisherById(publisherId: string): Promise<IPublisher | null> {
    try {
      const publisher = await Publisher.findById(publisherId)
      return publisher
    } catch (error) {
      throw new Error(`Error searching for publisher: ${error}`)
    }
  }

  async getPublisherByName(publisherName: string): Promise<IPublisher | null> {
    try {
      const publisher = await Publisher.findOne({ name: publisherName })
      return publisher
    } catch (error) {
      throw new Error(`Error searching for publisher: ${error}`)
    }
  }

  async addPublisher(publisher: IPublisher): Promise<void> {
    try {
      const newPublisher = new Publisher(publisher)
      await newPublisher.save()
    } catch (error) {
      throw new Error(`Error creating publisher: ${error}`)
    }
  }

  async updatePublisher(
    publisherName: string,
    publisher: IPublisher,
  ): Promise<IPublisher> {
    try {
      const updatedPublisher = await Publisher.findOneAndUpdate(
        { name: publisherName },
        {
          $set: { name: publisher.name }, // Updates only the name
          $addToSet: { book_ids: { $each: publisher.book_ids } }, // Ensures book_ids are added to the array
        },
        { new: true },
      )
      return updatedPublisher
    } catch (error) {
      throw new Error(`Error updating publisher: ${error}`)
    }
  }

  async deletePublisher(publisherName: string): Promise<IPublisher> {
    try {
      const publisherExists = await this.getPublisherByName(publisherName)
      if (!publisherExists) return
      const deletedPublisher = await Publisher.findOneAndDelete({
        name: publisherName,
      })
      console.log(`${deletedPublisher.name} deleted successfully`)
      return deletedPublisher
    } catch (error) {
      console.error('Error deleting publisher:', error)
    }
  }
}
