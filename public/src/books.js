const findAccountById = require("./accounts.js").findAccountById;

function findById(array, id) {   //helper function
  return array.find((element) => element.id === id);  
}
<<<<<<< HEAD

function findAuthorById(authors, id) {
  return findById(authors, id);
=======
function findAuthorById(authors, id) {               
  return findById(authors, id);       //used helper function
>>>>>>> 332fe4b77e45e382dceb9e1bf7eb5138b48e1022
}

function findBookById(books, id) {                    
  return findById(books, id);        //used helper function
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
