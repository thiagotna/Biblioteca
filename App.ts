import { Library } from "./src/entities/Library.js";

export class App {
    public init(): void {
        const library = new Library()

        //Getting all books
        console.log(library.bookList())

    }
}