const books = require('../src/books.js');
const { authorUnique } = require('../src/index.js');

describe('Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.', () => {
  it('Resultado esperado: False', () => {
    expect(authorUnique(books)).toBeFalsy();
  });
});
