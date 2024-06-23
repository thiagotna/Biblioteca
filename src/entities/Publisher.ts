import { IEntity } from "../interfaces/IEntity.js";
import { Book } from "./Book.js";

export class Publisher implements IEntity<string, Book>{
    name: string;
    collection: Book[];
}