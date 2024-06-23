export interface IEntity<Type1, Type2> {
    name: Type1,
    collection: Partial<Type2>[]
}