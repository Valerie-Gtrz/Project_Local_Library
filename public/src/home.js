function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let checkedOut = 0;
  books.forEach((book) => {
    if (book.borrows[0].returned === false) {
      checkedOut++;
    }
  });
  return checkedOut;
}

function getMostCommonGenres(books) {
  let genreCount = books.reduce((genres, book) => {
    if (book.genre in genres) {
      genres[book.genre]++;
    } else {
      genres[book.genre] = 1;
    }
    return genres;
  }, {});
  const popularGenres = Object.keys(genreCount).map((key) => ({
    name: key,
    count: genreCount[key],
  }));
  popularGenres.sort((genreA, genreB) =>
    genreA.count > genreB.count ? -1 : 1
  );
  return popularGenres.slice(0, 5);
}

function getMostPopularBooks(books) {
  const mapBooksToName = books.map((book) => ({
    name: book.title,
    count: book.borrows.length,
  }));
  const sortedBooks = mapBooksToName.sort((bookOne, bookTwo) =>
    bookOne.count > bookTwo.count ? -1 : 1
  );
  return sortedBooks.slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  let popularAuthors = [];
  authors.forEach((author) => {
    let number = 0;
    books.forEach((book) => {
      if (book.authorId === author.id) {
        number += book.borrows.length;
      }
    });
    popularAuthors.push({
      name: `${author.name.first} ${author.name.last}`,
      count: number,
    });
  });
  popularAuthors.sort((authorA, authorB) => authorB.count - authorA.count);
  return popularAuthors.slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
