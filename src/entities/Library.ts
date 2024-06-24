import { IBook } from '../interfaces/IBook.js';
import { LibraryService } from '../services/LirabryService.js';

export class Library {

    private libraryService = new LibraryService()
    private _bookList : IBook[] = []
    
    constructor(){
        if (this._bookList.length < 1) {
            this.libraryService.fetchLibrary()
            .then( books  => books.forEach( book => {
                this._bookList.push(book)
            }))   
            this.bookList()
        } else {
            console.log('A blioteca esta vazia!')
        }
    }
    
    public addBook(book: IBook): void{
        this._bookList.push(book)
        console.log(`${book.name} foi adicionado à biblioteca`)
    }

    public bookList(): IBook[]{
        return this._bookList
    }

    public updateBook(id: number): void{
        const foundBook = this._bookList.find( book => book.id === id)

        
    }
    
    public deleteBook(id: number):void{

    }
}