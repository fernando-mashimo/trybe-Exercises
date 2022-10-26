const authorBornIn1947 = require('./exercicioFoguete');

describe('Verificar funcionamento das funções', () => {
  it('Verifica se authorBornIn1947 retorna um', () => {
    expect(typeof authorBornIn1947).toBe('function');
  });

  // it('Verifica se a função retorna um objeto', () => {
  //   expect(born1947)
  // });
});