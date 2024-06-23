import { IBook } from "./IBook.js";

export interface ILibrary {
    bookList: IBook[],
    addBook(book: IBook): void,
    getBook(id: number): IBook,
    updateBook(id: number): IBook,
    deleteBook(id: number): void
}