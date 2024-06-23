import { IBook } from "../interfaces/IBook.js";
import { Author } from "./Author.js";
import { Publisher } from "./Publisher.js";


export class Book implements IBook {
    
    constructor(
        private _name: string,
        private _genre: string,
        private _author: Author["name"],
        private _publisher: Publisher['name'])
    {}
    
   get name() : string {
        return this._name
    }
    
   get genre() : string {
        return this._genre
    }
    
   get author() : string {
        return this._author
    }
    
   get publisher() : string {
        return this._publisher
    }    

    public static createBook(
        name: string,
        genre: string,
        authorName: string,
        publisherName: string
    ): Book {
        return new Book(name, genre, authorName, publisherName)
    }
}