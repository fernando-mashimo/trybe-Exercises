const books = require('../src/books.js');
const { getNamedBook } = require('../src/index.js');

const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

describe('Encontre o primeiro livro cujo nome possui 26 caracteres.', () => {
  it('Resultado esperado: As Crônicas de Gelo e Fogo', () => {
    expect(getNamedBook(books)).toMatchObject(expectedResult);
  });
});
