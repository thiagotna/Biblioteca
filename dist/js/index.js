import LibraryServices from "./src/services/LIbraryServices.js";
let libraryUrl = 'http://localhost:3000/Library/books';
const library = new LibraryServices();
const allBooks = library.fetchData(libraryUrl);
console.log(allBooks);
