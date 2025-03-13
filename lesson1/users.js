class User {
    id
    name
    bookType
    isBorrow
    constructor(id, name, bookType, isBorrow) {
        this.id = id
        this.name = name
        this.bookType = bookType
        this.isBorrow = isBorrow
    }
    toString() {
        return `id: ${this.id}, name: ${this.name}, book type: ${this.bookType}, borrow: ${this.isBorrow}`
    }
}
let users = [
    new User(1, "user1", "action", true),
    new User(2, "user2", "drama", false),
    new User(3, "user3", "drama", false)
]
const print = () => {
    for (let i = 0; i < users.length; i++) {
        console.log(users[i].toString());
    }
}
const borrow = (id) => {
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            return users[i]
        }
    }
    throw new Error("user not found")
}
module.exports = { print, borrow }