import { Library } from "./src/entities/Library.js";

export class App {
    public init(): void {
        const library = new Library()

        library.updateBook(1)
    }
}