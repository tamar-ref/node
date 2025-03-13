class Book {
    id
    name
    type
    isBorrowed
    constructor(id, name, type, isBorrowed) {
        this.id = id
        this.name = name
        this.type = type
        this.isBorrowed = isBorrowed
    }
    toString() {
        return `id: ${this.id}, name: ${this.name}, type: ${this.type}, is borrowed: ${this.isBorrowed}.`
    }
}
let books = [
    new Book(1, "book1", "action", false),
    new Book(2, "book2", "drama", true),
    new Book(3, "book3", "action", false)
]
const print = () => {
    for (let i = 0; i < books.length; i++) {
        console.log(books[i].toString());
    }
}
const borrow = (id) => {
    for (let i = 0; i < books.length; i++) {
        if (books[i].id === id) {
            return books[i]
        }
    }
    throw new Error("book not found")
}
module.exports = { print, borrow }