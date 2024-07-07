var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export default class LibraryServices {
    constructor() { }
    fetchData(url, method = 'GET', body) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(url, {
                method: method,
                headers: {
                    "Content-type": "application/json"
                },
                body: body ? JSON.stringify(body) : undefined
            });
            if (!response.ok) {
                throw new Error('Unable to retrieve data');
            }
            const data = yield response.json();
            return data;
        });
    }
    getBook(url, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const book = yield this.fetchData(`${url}/${id}`);
            console.log(`${book.name} foi encontrado!`);
            return book;
        });
    }
    createBook(url, book) {
        return __awaiter(this, void 0, void 0, function* () {
            const newBook = yield this.fetchData(`${url}`, 'POST', book);
            console.log(`${newBook.name} foi adicionado à Biblioteca!`);
            console.log(newBook);
            return newBook;
        });
    }
    updateBook(url, id, updatedBookData) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedBook = yield this.fetchData(`${url}/${id}`, 'PUT', updatedBookData);
            console.log(`${updatedBook.name} foi atualizado!`);
            return updatedBook;
        });
    }
    deleteBook(url, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedBook = yield this.fetchData(`${url}/${id}`, 'DELETE');
            console.log(`${deletedBook.name} foi removido da biblioteca!`);
            return deletedBook;
        });
    }
}
