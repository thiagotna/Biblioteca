import IBook from "../interfaces/IBoook.js"

export default class LibraryServices {

    constructor(){}

    public async fetchData(url: string, method: string = 'GET', body?: IBook): Promise<any> {
        const response = await fetch(url, {
            method: method,
            headers: {
                "Content-type": "application/json"
            },
            body: body ? JSON.stringify(body) : undefined
        });

        if (!response.ok) {
            throw new Error('Unable to retrieve data');
        }
        
        const data = await response.json();
        return data;
    }

    public async getBook(url: string, id: string): Promise<IBook>{       
        const book = await this.fetchData(`${url}/${id}`)
        
        console.log(`${book.name} foi encontrado!`)

        return book       
    }

    public async createBook(url: string, book: IBook): Promise<IBook>{
        const newBook = await this.fetchData(`${url}`, 'POST', book);            
        
        console.log(`${newBook.name} foi adicionado à Biblioteca!`)    
        console.log(newBook)    
        return newBook
    }

    public async updateBook(url: string, id: string, updatedBookData: IBook): Promise<IBook>{
        const updatedBook = await this.fetchData(`${url}/${id}`, 'PUT', updatedBookData)
        
        console.log(`${updatedBook.name} foi atualizado!`)     
        return updatedBook        
    }

    public async deleteBook(url: string, id: string): Promise<IBook>{        
        const deletedBook = await this.fetchData(`${url}/${id}`, 'DELETE')
        
        console.log(`${deletedBook.name} foi removido da biblioteca!`)
        return deletedBook
    }
}