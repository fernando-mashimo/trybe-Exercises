// .map()
// Gerar array cujos elementos tenham o formato 'nome sobrenome' usando for
// const persons = [
//   { firstName: 'Maria', lastName: 'Ferreira' },
//   { firstName: 'João', lastName: 'Silva' },
//   { firstName: 'Antonio', lastName: 'Cabral' },
// ];

// const fullNames = [];

// for (let index = 0; index < persons.length; index += 1) {
//   fullNames.push(`${persons[index].firstName} ${persons[index].lastName}`);
// }

// console.log(fullNames);
// console.log('-----------------------------------------------------------------------');

// Gerar o mesmo array do exercício anterior, usando .map()

// const persons = [
//   { firstName: 'Maria', lastName: 'Ferreira' },
//   { firstName: 'João', lastName: 'Silva' },
//   { firstName: 'Antonio', lastName: 'Cabral' },
// ];
  
// const fullNames = persons.map((person) => `${person.firstName} ${person.lastName}`);
// console.log(fullNames); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]
// console.log('-----------------------------------------------------------------------');

// A partir de uma array dada, gere uma nova array em que os números são todos negativos
// const numbers = [1, 2, 3, 4, -5];

// const negativeNumbers = numbers.map((number) => ((number > 0) ? number * (-1) : number));

// console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
// console.log(numbers); // [ 1, 2, 3, 4, -5 ]
// console.log('-----------------------------------------------------------------------');

// PROBLEMA: Juntar dois arrays
const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const completeList = (listProducts, listPrices) => listProducts.map((product, index) => ({ [product]: listPrices[index] }));
console.log(completeList(products, prices));
// console.log('-----------------------------------------------------------------------');

// .map() vs .forEach()
const numeros = [1, 2, 3, 4, 5, 6];
console.log(numeros.map((numero) => numero * 2)); // Retorno: [2, 4, 6, 8, 10, 12]

const paresMenoresQueCinco = [];
numeros.forEach((numero) => {
  if (numero < 5 && numero % 2 === 0) {
    paresMenoresQueCinco.push(numero);
  }
});
console.log(paresMenoresQueCinco); // Retorno: [2, 4]
// console.log('-----------------------------------------------------------------------');

