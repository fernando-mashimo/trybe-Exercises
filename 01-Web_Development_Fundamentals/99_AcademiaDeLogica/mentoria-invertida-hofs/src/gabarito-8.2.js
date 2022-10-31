const authorBornIn1947 = () => {
  return books.find((item) => item.author.birthYear === 1947).author.name;
};

const smallerName = () => {
  let nameBook = books[0].name;
  books.forEach((el) => {
    if (el.name.length < nameBook.length) {
      nameBook = el.name;
    }
  });
  return nameBook;
};

const getNamedBook = () => {
  return books.find((book) => book.name.length === 26);
};

const booksOrderedByReleaseYearDesc = () => {
  return data.books.sort((a, b) => a.releaseYear - b.releaseYear);
};

const everyoneWasBornOnSecXX = () => {
  return books.every(
    (el) => el.author.birthYear > 1990 && el.author.birthYear <= 2000,
  );
};

const someBookWasReleaseOnThe80s = () =>
  books.some(
    (element) => element.releaseYear >= 1980 && element.releaseYear <= 1989,
  );

const authorUnique = () => {
  const arrBoolean = books.map((itemMap) => {
    return books.some((itemSome) => {
      return (
        itemMap.author.birthYear === itemSome.author.birthYear &&
        itemMap.author.name !== itemSome.author.name
      );
    });
  });
  return !arrBoolean.some((item) => item === true);
};
