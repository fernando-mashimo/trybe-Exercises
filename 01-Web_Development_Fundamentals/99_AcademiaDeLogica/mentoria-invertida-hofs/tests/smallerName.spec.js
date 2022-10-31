const books = require('../src/books.js');
const { smallerName } = require('../src/index.js');

describe('Retorne o nome do livro de menor nome', () => {
  it('Resultado esperado Duna', () => {
    expect(smallerName(books)).toBe('Duna');
  });
});
