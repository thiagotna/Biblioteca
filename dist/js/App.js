import { Library } from "./src/entities/Library";
var App = (function () {
    function App() {
    }
    App.prototype.init = function () {
        var library = new Library();
        library.getBookByName('Test');
    };
    return App;
}());
export { App };
