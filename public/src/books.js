const findAccountById = require("./accounts.js").findAccountById;

function findById(array, id) {
  return array.find((element) => element.id === id);
}

function findAuthorById(authors, id) {
  return findById(authors, id);
}

function findBookById(books, id) {
  return findById(books, id);
}

function partitionBooksByBorrowedStatus(books) {
  return [
    books.filter((book) => !book.borrows[0].returned),
    books.filter((book) => book.borrows[0].returned),
  ];
}

function getBorrowersForBook(book, accounts) {
  const objBorrows = book.borrows.slice(0, 10); //capped borrows key to 10 with slice
  const combineBorrows = objBorrows.map((borrow) => {
    //replace a for in loop with map
    const account = findAccountById(accounts, borrow.id);
    const combined = {
      //every element of borrow will be printed with every matching account
      ...borrow,
      ...account,
    };
    return combined;
  });
  return combineBorrows;
}

module.exports = {
  findById,
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
