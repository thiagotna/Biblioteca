import { Author } from './Author.js';
import { Book } from './Book.js';
var Library = (function () {
    function Library() {
    }
    Library.prototype.addBook = function (book) {
        var newBook = Book.createBook(book.name, book.genre, book.author, book.publisher);
        var newBookAuthor = new Author(newBook.author);
        newBookAuthor.addToAuthorCollection(newBook.name, newBook.genre, newBook.publisher);
        Library.bookList.push();
        console.log("".concat(newBook.name, " foi adicionado a biblioteca!"));
    };
    Library.prototype.getBookByName = function (bookName) {
        var foundBook = Library.bookList.filter(function (book) { return book.name === bookName; });
        console.log(foundBook);
    };
    Library.prototype.updateBook = function (id) {
        throw new Error('Method not implemented.');
    };
    Library.prototype.deleteBook = function (id) {
        throw new Error('Method not implemented.');
    };
    return Library;
}());
export { Library };
