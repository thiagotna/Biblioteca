import { LibraryService } from '../services/LirabryService.js';
var Library = (function () {
    function Library() {
        var _this = this;
        this.libraryService = new LibraryService();
        this._bookList = [];
        if (this._bookList.length < 1) {
            this.libraryService.fetchLibrary()
                .then(function (books) { return books.forEach(function (book) {
                _this._bookList.push(book);
            }); });
            this.bookList();
        }
        else {
            console.log('A blioteca esta vazia!');
        }
    }
    Library.prototype.addBook = function (book) {
        this._bookList.push(book);
        console.log("".concat(book.name, " foi adicionado \u00E0 biblioteca"));
    };
    Library.prototype.bookList = function () {
        return this._bookList;
    };
    Library.prototype.updateBook = function (id) {
        var foundBook = this._bookList.find(function (book) { return book.id === id; });
    };
    Library.prototype.deleteBook = function (id) {
    };
    return Library;
}());
export { Library };
