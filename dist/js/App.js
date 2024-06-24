import { Library } from "./src/entities/Library.js";
var App = (function () {
    function App() {
    }
    App.prototype.init = function () {
        var library = new Library();
        console.log(library.bookList());
    };
    return App;
}());
export { App };
