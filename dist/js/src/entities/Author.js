var Author = (function () {
    function Author(_name) {
        this._name = _name;
        this._collection = [];
    }
    Object.defineProperty(Author.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Author.prototype, "collection", {
        get: function () {
            return this._collection;
        },
        enumerable: false,
        configurable: true
    });
    Author.prototype.addToAuthorCollection = function (bookName, bookGenre, bookPublisher) {
        var authorBookInfo = {
            name: bookName,
            genre: bookGenre,
            publisher: bookPublisher
        };
        !this._collection.filter(function (book) { return book.name === bookName; }) && this._collection.push(authorBookInfo);
    };
    return Author;
}());
export { Author };
