import { Library } from "./src/entities/Library.js";
var App = (function () {
    function App() {
    }
    App.prototype.init = function () {
        var library = new Library();
        library.updateBook(1);
    };
    return App;
}());
export { App };
