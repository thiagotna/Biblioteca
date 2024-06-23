import { Library } from "./src/entities/Library";

export class App {
    public init(): void {
        const library = new Library()

        library.getBookByName('Test')
    }
}