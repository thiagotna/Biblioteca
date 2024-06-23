var Book = (function () {
    function Book(_name, _genre, _author, _publisher) {
        this._name = _name;
        this._genre = _genre;
        this._author = _author;
        this._publisher = _publisher;
    }
    Object.defineProperty(Book.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "genre", {
        get: function () {
            return this._genre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "author", {
        get: function () {
            return this._author;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "publisher", {
        get: function () {
            return this._publisher;
        },
        enumerable: false,
        configurable: true
    });
    Book.createBook = function (name, genre, authorName, publisherName) {
        return new Book(name, genre, authorName, publisherName);
    };
    return Book;
}());
export { Book };
