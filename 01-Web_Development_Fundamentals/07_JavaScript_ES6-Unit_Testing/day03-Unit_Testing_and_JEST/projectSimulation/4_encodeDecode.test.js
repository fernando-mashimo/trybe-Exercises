const { encode, decode } = require('./4_encodeDecode');

// Teste se encode e decode são funções;
// Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
// Para a função decode, teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente;
// Teste se as demais letras/números não são convertidos para cada caso;
// Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.

describe('Função encode()', () => {
  
  it('Verificando se encode é uma função', () => {
    expect(typeof encode).toBe('function');
  });

  it('Verificando se vogais são substituídas', () => {
    expect(encode('Fernando')).toStrictEqual('F2rn1nd4');
  });

  it('Verificando que demais letras não são substituídas', () => {
    expect(encode('bcdfghjklmnpqrstvwxyz')).toStrictEqual('bcdfghjklmnpqrstvwxyz');
  });

  it('Verificando se o tamanho das strings de entrada e saída são iguais', () => {
    expect(encode('aeiouaeiou').length).toBe(10);
  });
});

describe('Função decode()', () => {

  it('Verificando se decode é uma função', () => {
    expect(typeof decode).toBe('function');
  });

  it('Verificando se números são substituídos', () => {
    expect(decode('54321')).toStrictEqual('uoiea');
  });

  it('Verificando que demais números não são substituídos', () => {
    expect(decode('67890')).toStrictEqual('67890');
  });

  it('Verificando se o tamanho das strings de entrada e saída são iguais', () => {
    expect(decode('1234567890').length).toBe(10);
  });

});
