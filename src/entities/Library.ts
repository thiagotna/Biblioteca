import { IBook } from '../interfaces/IBook.js';
import { LibraryService } from '../services/LirabryService.js';

export class Library {

    private libraryService = new LibraryService()
    private _bookList : IBook[] = []
    
    constructor(){
        if (this._bookList.length < 1) {
            this.libraryService.fetchLibrary()
            .then( async books  => books.forEach( book => {
                this._bookList.push(book)
            }))   
            this.bookList()
        } else {
            console.log('A blioteca esta vazia!')
        }
    }

    public bookList(): IBook[]{
        return this._bookList
    }
    
    public addBook(book: IBook): void{
        this._bookList.push(book)
        console.log(`${book.name} foi adicionado à biblioteca`)
    }

    public getBook(id: number){
        console.log(id)
    }
    
    public updateBook(id: number): void {
        
    }
    
    public deleteBook(id: number):void{

    }
}