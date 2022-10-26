// array.find() - INTRODUÇÃO
//
// const numbers = [11, 24, 40, 47, 50, 62, 75, 81, 96, 100];
// const firstMultipleOf5 = numbers.find((number) => number % 5 === 0);

// console.log(firstMultipleOf5);
// -------------------------------------------------------

// Exemplo 1 do Course:
// const numbers = [19, 21, 3, 45, 22, 30, 15];

// const verifyEven = (number) => number % 2 === 0;

// const isEven = numbers.find(verifyEven);

// console.log(isEven); // 22
//
// console.log(verifyEven(9)); // False
// console.log(verifyEven(14)); // True
//
// Outra forma de ser realizada sem a necessidade de criar uma nova função.
// const isEven2 = numbers.find((number) => number % 2 === 0);

// console.log(isEven2); // 22
// -------------------------------------------------------

// Exemplo 2 do Course: Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:
// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const firstDivisibleBy3And5 = numbers.find((number) => (number % 3 === 0 && number % 5 === 0));

// console.log(firstDivisibleBy3And5);
// -------------------------------------------------------

// Exemplo 3: Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:
// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// const findNameWithFiveLetters = (element) => element.length === 5;

// console.log(names.find(findNameWithFiveLetters));
// -------------------------------------------------------

// Exemplo 4: Utilize o find para encontrar a música com id igual a 31031685, caso ela exista:
const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];
  
const findMusic = (element) => element.id === '31031685';

console.log(musicas.find(findMusic));
console.log(typeof findMusic);