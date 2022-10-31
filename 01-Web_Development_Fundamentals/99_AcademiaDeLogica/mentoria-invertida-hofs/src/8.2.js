const books = require('./books.js');

/* 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
Dica: use a função find. */

const authorBornIn1947 = (data) => {
  // escreva aqui o seu código
};

/* 2 - Retorne o nome do livro de menor nome.
Dica: use a função forEach. */

const smallerName = (data) => {
  let nameBook;
  // escreva aqui o seu código
  return nameBook;
};

/* 3 - Encontre o primeiro livro cujo nome possui 26 caracteres. */

/* Objeto esperado:
{
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
}; */

const getNamedBook = (data) => {
  // escreva aqui o seu código
};

/* 4 - Ordene os livros por data de lançamento em ordem decrescente. */

const expectedResult4 = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: { name: 'Stephen King', birthYear: 1947 },
    releaseYear: 1986,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
];

const booksOrderedByReleaseYearDesc = (data) => {
  // escreva aqui o seu código
};

/* 🚀 5 - Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX (1901 - 2000), ou false, caso contrário.
 */

// const expectedResult5 = false;

const everyoneWasBornOnSecXX = (data) => {
  // escreva aqui o seu código
};

/* 🚀 6 - Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário. */

// const expectedResult6 = true;

const someBookWasReleaseOnThe80s = (data) => {
  // escreva aqui o seu código
};

/* 7 - Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.
 */

// const expectedResult7 = false;

const authorUnique = (data) => {
  // escreva aqui o seu código
};

module.exports = {
  authorBornIn1947,
  smallerName,
  getNamedBook,
  booksOrderedByReleaseYearDesc,
  everyoneWasBornOnSecXX,
  someBookWasReleaseOnThe80s,
  authorUnique,
};
