const myFizzBuzz = require('./3_myFizzBuzz');

// Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
// Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

describe('A Função verifica se um número é divisível por 3 e/ou 5', () => {
  
  it('Verifica se o número é divisível por 3 E 5', () => {
    expect(myFizzBuzz(15)).toStrictEqual('fizzbuzz');
  });

  it('Verifica se o número é divisível por 3 OU 5', () => {
    expect(myFizzBuzz(6)).toStrictEqual('fizz');
    expect(myFizzBuzz(10)).toStrictEqual('buzz');
  });

  it('Verifica que um número NÃO é divisível por 3 ou 5', () => {
    expect(myFizzBuzz(7)).toStrictEqual(7);
  });

  it('Verifica que o input não é um número e retorna false', () => {
    expect(myFizzBuzz('xablau')).toStrictEqual(false);
  });

});