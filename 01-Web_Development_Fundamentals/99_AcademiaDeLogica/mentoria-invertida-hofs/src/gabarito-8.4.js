const formatedBookNames = () => {
  return books.map(
    (book) => `${book.name} - ${book.genre} - ${book.author.name}`,
  );
};

const nameAndAge = () => {
  const authorArr = books.map((book) => ({
    age: book.releaseYear - book.author.birthYear,
    author: book.author.name,
  }));
  return authorArr.sort((a, b) => a.age - b.age);
};

const fantasyOrScienceFiction = () => {
  return books.filter(
    (book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica',
  );
};

const oldBooksOrdered = () => {
  const currentYear = new Date().getFullYear();
  const filterBooks = books.filter(
    (book) => currentYear - book.releaseYear >= 60,
  );
  return filterBooks.sort((a, b) => a.releaseYear - b.releaseYear);
};

const fantasyOrScienceFictionAuthors = () => {
  const authors = books.filter(
    (book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica',
  );
  const authorsName = authors.map((author) => author.author.name);
  return authorsName.sort();
};

const oldBooks = () => {
  const currentYear = new Date().getFullYear();
  return books
    .filter((book) => currentYear - book.releaseYear > 60)
    .map((book) => book.name);
};
