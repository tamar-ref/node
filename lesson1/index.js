const books = require('./books')
const users = require('./users')
let book = books.borrow(3)
let user = users.borrow(2)
console.log(book.toString());
console.log(user.toString());
if (book.type != user.bookType)
    console.log('book type does not matched');
if (book.isBorrowed != false)
    console.log('the book is borrowed');
if (user.isBorrow != false)
    console.log('the user already has a borrowed book');
if (book.type == user.bookType && book.isBorrowed == false && user.isBorrow == false) {
    book.isBorrowed = true
    user.isBorrow = true
    console.log('borrowing done');
}