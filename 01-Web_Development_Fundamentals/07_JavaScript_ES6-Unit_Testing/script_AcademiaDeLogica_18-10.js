// Exercício 1: Escreva uma função que dado um valor numérico retorne se o valor é par.
const retornaPar = number => (number % 2 === 0) ? 'Par' : 'Ímpar';
console.log(retornaPar(5));

// Exercício 2: Escreva uma função que recebe por parâmetro um array de números e retorna a soma dos números pares.
const somaPares = array => {
    let sum = 0;
    for (let element of array) {
      if (element % 2 === 0) {
        sum += element;
    }
  }
  return sum;
}
console.log(somaPares([1, 2, 3, 4, 5, 6])); // 12

// Exercício 3: Escreva uma função que dado um parâmetro retorna se o tipo de dado é Number.
const verifyNumber = number => (typeof number === 'number') ? true : false;
console.log(verifyNumber('a'));

// Exercício 4: Escreva uma função que receba um nome de usuário e retorne a seguinte mensagem: "Boas vindas, USERNAME!". Valide que o tipo de dado seja string e o texto tenha pelo menos 1 caracter, e caso o parâmetro não atenda alguma das condições o retorno deve ser a string "Parâmetro inválido.".
const verifyUser = username => (typeof username === 'string' && username.length >= 1) ? `Boas vindas, ${username}!` : `Parâmetro inválido.`;
console.log(verifyUser('Usuário'));

// Exercício 5: Escreva uma função que calcule a velocidade final de um objeto em queda livre dado o tempo que levou para atingir o solo. A fórmula para o cálculo é velocidade = tempo * gravidade. Considere a gravidade constante de 9.8.
const g = 9.8;
const velocity = time => time * g;
console.log(velocity(10));

// Exercício 6: Utilizando operadores ternários e arrow functions reescreva a seguinte função:
const isZero = number => (number === 0) ? 'Zero' : 'Not zero';
console.log(isZero(10));

// Exercício 7: Escreva uma função que, dado um array, verifique se todos os valores são iguais. Valide que o tipo de entrada seja array e que o tamanho seja maior que 1, e caso a entrada não atenda alguma das condições o retorno deve ser a string "Parâmetro inválido.".
const verifyArray = array => {
  if (typeof array === 'object' && array.length > 1) {
    let element = array[0];
    for (let index = 0; index < array.length; index += 1) {
      if (array[index] !== element) return 'Parâmetro inválido.';
    }
  } else return 'Parâmetro inválido.';
  return 'Valores iguais.';
}
console.log(verifyArray([1,1,1,1,1]));
