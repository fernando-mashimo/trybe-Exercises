const { oldBooks } = require('../src/8.4');

describe('Crie um array com o nome de todos os livros com mais de 60 anos de publicação.', () => {
  test('Retorne o array esperado', () => {
    const expectedResult = [
      'O Senhor dos Anéis',
      'Fundação',
      'O Chamado de Cthulhu',
    ];
    expect(oldBooks()).toEqual(expectedResult);
  });
});
