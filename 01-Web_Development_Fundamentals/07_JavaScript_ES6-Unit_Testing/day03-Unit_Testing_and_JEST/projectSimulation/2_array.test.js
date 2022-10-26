const myRemove = require('./2_array');

describe('A Função deve remover um certo item de um array se o mesmo estiver nela presente', () => {
  // Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
  it('Deve retornar [1, 2, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  
  // Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
  it('Não deve retornar [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  
  // Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
  it('Deve retornar [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });

});