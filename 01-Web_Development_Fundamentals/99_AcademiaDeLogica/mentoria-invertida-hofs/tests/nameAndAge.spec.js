const { nameAndAge } = require('../src/8.4');

describe('Crie um array de objetos contendo a idade e o nome do autor', () => {
  test('Retorne o array esperado', () => {
    const expectedResult = [
      {
        age: 31,
        author: 'Isaac Asimov',
      },
      {
        age: 38,
        author: 'H. P. Lovecraft',
      },
      {
        age: 39,
        author: 'Stephen King',
      },
      {
        age: 43,
        author: 'George R. R. Martin',
      },
      {
        age: 45,
        author: 'Frank Herbert',
      },
      {
        age: 62,
        author: 'J. R. R. Tolkien',
      },
    ];
    expect(nameAndAge()).toEqual(expectedResult);
  });
});
