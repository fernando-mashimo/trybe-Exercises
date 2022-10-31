const books = require('../src/books.js');
const { someBookWasReleaseOnThe80s } = require('../src/index.js');

describe('Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário', () => {
  it('Retorno esperado: true', () => {
    expect(someBookWasReleaseOnThe80s(books)).toBeTruthy();
  });
});
