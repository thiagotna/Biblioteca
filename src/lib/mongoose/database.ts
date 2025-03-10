import mongoose from 'mongoose'
import { DATABASE_HOST, DATABASE_NAME } from '@/env'

export class DataBase {
  constructor() {
    console.log('Attempting to connect to the database...')
    this.connect()
  }

  private async connect() {
    try {
      await mongoose.connect(`${DATABASE_HOST}${DATABASE_NAME}`)
      console.log('Connected to database')
    } catch (error) {
      console.error(`Error connecting to database: ${error}`)
      throw new Error(`Error connecting to database: ${error}`)
    }
  }
}

const database = new DataBase()
export default database
