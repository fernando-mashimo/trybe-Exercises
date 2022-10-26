const { MODULEDECLARATION_TYPES } = require("@babel/types");

const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
// Adicione o código do exercício aqui:
// Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
const authorBornIn1947 = (book) => book.author.birthYear === 1947;
console.log((books.find(authorBornIn1947)).author.name);
console.log('--------------------------------------------------');

// Retorne o nome do livro de menor nome.
const smallerName = (array) => {
  let nameBook = array[0].name;

  array.forEach((book) => {
    if (book.name.length < nameBook.length) {
      nameBook = book.name;
    }
  });

  return nameBook;
}
console.log(smallerName(books));
console.log('--------------------------------------------------');

// Encontre o primeiro livro cujo nome possui 26 caracteres.
const getNamedBook = (book) => book.name.length === 26;
console.log(books.find(getNamedBook));
console.log('--------------------------------------------------');

// Ordene os livros por data de lançamento em ordem decrescente.
const orderedByReleaseDate = books.sort((book1, book2) => book2.releaseYear - book1.releaseYear);
console.log(orderedByReleaseDate);
console.log('--------------------------------------------------');

// Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.
const everyoneWasBornOnSecXX = (book) => (book.author.birthYear > 1900 && book.author.birthYear < 2001);
console.log(books.every(everyoneWasBornOnSecXX));
console.log('--------------------------------------------------');

// Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.
const someBookWasReleaseOnThe80s = (book) => (book.releaseYear > 1980 && book.releaseYear < 1991);
console.log(books.some(someBookWasReleaseOnThe80s));
console.log('--------------------------------------------------');

// Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.
const authorUnique = () => {
  const birthYears = [];
  books.forEach((book) => birthYears.push(book.author.birthYear));
  birthYears.sort((a, b) => a-b);
  let uniqueBirthYear = true;
  for (let index = 0; index < birthYears.length; index += 1) {
    if (birthYears[index + 1] === birthYears[index]) uniqueBirthYear = false;
  }
  return uniqueBirthYear;
};
console.log(authorUnique());

module.exports = {
  authorBornIn1947,
  smallerName,
  getNamedBook,
};