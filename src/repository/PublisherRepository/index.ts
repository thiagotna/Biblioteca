import IPublisher from '@/models/Interfaces/IPublisher'
import Publisher from '@/models/entities/Publisher'
import { IPublisherRepository } from '../interfaces/IPublisherRepository'

export default class PublisherRepository implements IPublisherRepository {
  async getPublisherByName(publisherName: string): Promise<IPublisher | null> {
    try {
      console.log(`Searching for publisher: ${publisherName}`)
      const publisher = await Publisher.findOne({ name: publisherName })

      if (!publisher) {
        console.log('Publisher not found in database')
        return null
      }

      console.log('Publisher found:', publisher)
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

  async updatePublisher(publisher: IPublisher): Promise<void> {}

  async deletePublisher(id: string): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
