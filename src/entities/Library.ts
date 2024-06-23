import { Author } from './Author.js';
import { Book } from './Book.js';

export class Library {
    static bookList: Book[];

    private addBook(book: Book): void {
        const newBook = Book.createBook(
            book.name, 
            book.genre, 
            book.author, 
            book.publisher
        )
        const newBookAuthor = new Author(newBook.author)
        newBookAuthor.addToAuthorCollection(newBook.name, newBook.genre, newBook.publisher)

        Library.bookList.push()
        console.log(`${newBook.name} foi adicionado a biblioteca!`)
    }
    public getBookByName(bookName: string){
        const foundBook = Library.bookList.filter( book => book.name === bookName )

        console.log(foundBook)
    }
    private updateBook(id: number): Book {
        throw new Error('Method not implemented.');
    }
    private deleteBook(id: number): void {
        throw new Error('Method not implemented.');
    }
}