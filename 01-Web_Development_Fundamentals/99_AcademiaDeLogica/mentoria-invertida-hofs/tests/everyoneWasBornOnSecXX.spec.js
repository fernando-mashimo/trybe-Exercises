const books = require('../src/books.js');
const { everyoneWasBornOnSecXX } = require('../src/index.js');

describe(' Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário', () => {
  it('Esperado: false', () => {
    expect(everyoneWasBornOnSecXX(books)).toBeFalsy();
  });
});
