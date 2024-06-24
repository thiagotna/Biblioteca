import { IBook } from "../interfaces/IBook"

export class LibraryService {

    public async fetchLibrary(): Promise<IBook[]>{
        return await fetch('http://localhost:3000/Library/books',{
            method: "GET", 
            mode: "cors",             
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json"            
            }
        })
        .then( response => response.json())
        .then((data: IBook[]) => {
            return data
        })
    }
}