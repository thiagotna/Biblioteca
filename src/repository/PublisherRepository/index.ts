import IPublisher from '@/models/Interfaces/IPublisher'
import Publisher from '@/models/entities/Publisher'
import { IPublisherRepository } from '../interfaces/IPublisherRepository'

export default class PublisherRepository implements IPublisherRepository {
  async getPublisherById(publisherId: string): Promise<IPublisher | null> {
    try {
      console.log(`Searching for publisher ID: ${publisherId}`)
      const publisher = await Publisher.findById(publisherId)

      if (!publisher) {
        console.log('Publisher not found!')
        return null
      }

      console.log('Publisher ID found:', publisher.id)
      return publisher
    } catch (error) {
      console.error('Error searching for publisher:', error)
      throw new Error(`Database query error: ${error}`)
    }
  }

  async getPublisherByName(publisherName: string): Promise<IPublisher | null> {
    try {
      console.log(`Searching for publisher: ${publisherName}`)
      const publisher = await Publisher.findOne({ name: publisherName })

      if (!publisher) {
        console.log('Publisher not found!')
        return null
      }

      console.log('Publisher found:', publisher.name)
      return publisher
    } catch (error) {
      console.error('Error searching for publisher:', error)
      throw new Error(`Database query error: ${error}`)
    }
  }

  async addPublisher(publisher: IPublisher): Promise<void> {
    try {
      console.log('Creating new publisher:', publisher)
      const newPublisher = new Publisher(publisher)
      await newPublisher.save()
      console.log('Publisher created successfully')
    } catch (error) {
      console.error('Error creating publisher:', error)
      throw new Error(`Database query error: ${error}`)
    }
  }

  async updatePublisher(
    publisherName: string,
    publisher: IPublisher,
  ): Promise<IPublisher> {
    try {
      const existingPublisher = await this.getPublisherByName(publisherName)

      const updatedPublisher = await Publisher.findOneAndUpdate(
        { name: publisherName },
        {
          $set: { name: publisher.name }, // Updates only the name
          $addToSet: { book_ids: { $each: publisher.book_ids } }, // Ensures book_ids are added to the array
        },
        { new: true },
      )

      if (!existingPublisher) {
        return
      }

      console.log(`${updatedPublisher.name} updated successfully`)

      return updatedPublisher
    } catch (error) {
      console.error('Error updating publisher:', error)
      throw new Error(`Database query error: ${error}`)
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
