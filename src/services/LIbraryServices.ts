export class LibraryServices {

    constructor(url: string){}

    public async fetchData(url: string, method?: string) :  Promise<any>{
        try {        
            const response = await fetch(url , {
                method: !method ? 'GET' : method,
                mode: "cors",
                headers:{
                    "Content-type": "application/json"
                }
            })
            if (!response.ok) {
                throw new Error('Unable to retrieve data')
            }
            const data : any = await response.json()          
            return data
        } catch (error) {
            console.error(error)
        }
    }

    public async getBook(url: string, id: string): Promise<any>{
        try {
            const book = this.fetchData(`${url}/${id}`)
            
            return book
        } catch (error) {
            console.error(error)
        }
    }

    public async createBook(url: string): Promise<any>{
        try {
            const newBook = this.fetchData(`${url}`, 'POST')
            
            console.log(`${newBook} foi adicionado à Biblioteca`)
        } catch (error) {
            console.error(error)
        }
    }

    public async updateBook(url: string, id: string): Promise<any>{
        try {
            const updatedBook = await this.fetchData(`${url}/${id}`, 'PUT')
        } catch (error) {
            console.log(error)
        }
    }

    public async deleteBook(url: string, id: string): Promise<any>{
        try {
            const deletedBook = await this.fetchData(`${url}/id`)
        } catch (error) {
            
        }
    }
}