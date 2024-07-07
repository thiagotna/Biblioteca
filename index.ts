import LibraryServices from "./src/services/LIbraryServices.js";

let libraryUrl = 'http://localhost:3000/Library/books'
const library = new LibraryServices();

const allBooks = library.fetchData(libraryUrl)
//Loading Library
console.log(allBooks)

//Add/Create book
// library.createBook(
    // libraryUrl, 
    // { 
        // name: 'Desolaçãp de Smaug', 
        // genre: 'Fantasia',  
        // author:'J.R.R. Tolkien', 
        // publisher: 'HarperCollins' 
    // }
// )

//library.getBook(libraryUrl, '668b1c6ad7f5ec2999037f5f')

// library.updateBook(libraryUrl, '668b1c6ad7f5ec2999037f5f', {
//     name:'Desolação de Smaug',
//     genre:'Fantasia',
//     author:'J.R.R. Tolkien', 
//     publisher: 'HarperCollins'
// })

//library.deleteBook(libraryUrl, '668b1c6ad7f5ec2999037f5f')