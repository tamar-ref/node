const books = require('./books')
const users = require('./users')

function main() {
    //books.initBooks();
    //users.initUsers();
    const bookId = parseInt(process.argv[2]);
    const userId = parseInt(process.argv[3]);
    let book = books.borrow(bookId)
    let user = users.borrow(userId)
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
}

main()

