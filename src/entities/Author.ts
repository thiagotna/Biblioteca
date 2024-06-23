import { IEntity } from "../interfaces/IEntity.js";
import { Book } from "./Book.js";

export class Author implements IEntity<string, Book> {
    private _collection: Partial<Book>[];

    constructor(private _name: string) {
        this._collection = [];
    }

    public get name() : string {
        return this._name
    }
    
    public get collection() :Partial<Book>[] {
        return this._collection
    }
    
    public addToAuthorCollection(
        bookName: Book['_name'], 
        bookGenre: Book['_genre'], 
        bookPublisher: Book['_publisher']
    ) : void{
        const authorBookInfo: Partial<Book> = {
            name: bookName,
            genre: bookGenre,
            publisher: bookPublisher
        }

        !this._collection.filter( book => book.name === bookName) && this._collection.push(authorBookInfo)

    }
}