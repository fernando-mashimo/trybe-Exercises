const { fantasyOrScienceFictionAuthors } = require('../src/8.4');

describe('Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.', () => {
  test('Retorne o array esperado', () => {
    const expectedResult = [
      'Frank Herbert',
      'George R. R. Martin',
      'Isaac Asimov',
      'J. R. R. Tolkien',
    ];
    expect(fantasyOrScienceFictionAuthors()).toEqual(expectedResult);
  });
});
