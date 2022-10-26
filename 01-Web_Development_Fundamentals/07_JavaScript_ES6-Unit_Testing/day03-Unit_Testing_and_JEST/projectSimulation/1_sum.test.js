const sum = require('./1_sum');

describe('Testes da Função sum()', () => {
  
  test('Soma dos números deve estar correta', () => {
    expect(sum(4, 5)).toEqual(9);
    expect(sum(0, 0)).toEqual(0);
  });

  test('Soma de 4 e uma "string" retorna um erro', () => {
    expect(() => sum(4, '5')).toThrowError();
  });

  test('Soma de 4 e uma "string" retorna msg de erro', () => {
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  });

});
