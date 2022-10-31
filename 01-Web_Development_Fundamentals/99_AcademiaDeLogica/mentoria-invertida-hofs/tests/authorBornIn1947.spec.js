const books = require('../src/books.js');
const { authorBornIn1947 } = require('../src/index.js');

describe('Qual autor nasceu em 1947?', () => {
  it('Resultado esperado Stephen King', () => {
    expect(authorBornIn1947(books)).toBe('Stephen King');
  });
});
