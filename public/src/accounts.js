function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id) 
}

function sortAccountsByLastName(accounts) {     
return accounts.sort((nameOne,nameTwo) => nameOne.name.last.toLowerCase() > nameTwo.name.last.toLowerCase() ? 1: -1);
}

function getTotalNumberOfBorrows(account, books) {
if (!account || !books || books.length === 0) return 0;
let totalBooksBorrowed = 0;
books.map((book) =>                                                           
  book.borrows.forEach((borrow) => {
    if(borrow.id === account.id) {
      totalBooksBorrowed += 1
    }})); 
return totalBooksBorrowed ;
}


function findById(array, id) {     //helper function
  return array.find((element) => element.id === id);
 }

function getBooksPossessedByAccount(account, books, authors) {
const checkedOut = [];
books.forEach((book) => 
  book.borrows.forEach((borrowedBook) => {
    if (borrowedBook.id === account.id && borrowedBook.returned === false) {
      checkedOut.push(book);
    }
  }));
  checkedOut.forEach((book) => book.author = findById(authors, book.authorId));   //used helper function
  return checkedOut;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
