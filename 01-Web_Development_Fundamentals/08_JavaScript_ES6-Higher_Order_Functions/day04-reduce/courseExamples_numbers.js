// // Exemplo ilustrativo do Course
// const numbers = [1, 32, 44, 2, 3];
// const totalSum = numbers.reduce((acc, curr) => {
//   console.log(`valor do acc é ${acc} e o de curr é ${curr}`);
//    // Iteração 1: valor do acc é 30 e o de curr é 1
//    // Iteração 2:valor do acc é 31 e o de curr é 32
//    // Iteração 3: valor do acc é 63 e o de curr é 44
//    // Iteração 4: valor do acc é 107 e o de curr é 2
//    // Iteração 5: valor do acc é 107 e o de curr é 3
//    // Valor final de `acc`é 112 e `curr` para no 3
//   return acc + curr;
// }, 30); // O `valorInicial` é 30, ou seja, `acc` antes de executar a primeira iteração já está armazenando esse valor.

// console.log(`valor final do acc é ${totalSum}`);
  // por fim, esse `console.log` imprime o retorno da nossa função, que é o valor final de `acc` após cada uma das 5 iterações, tendo iniciado com valor 30.


// const result = array.reduce((acc,curr) => {

// },initialValue);
// ----------------------------------------------------------------------
// const callback = (xablau) => { ...xablau...return... };
// const result = array.reduce(callback, initialValue);
// ----------------------------------------------------------------------

// Exemplo 1: Buscar o maior valor em um array. Tente criar essa função apenas com for e depois tente com reduce.

// const numbers = [50, 85, -30, 3, 15];

// // let biggest = numbers[0];
// // for (let index = 1; index < numbers.length; index += 1) {
// //   if (numbers[index] > biggest) biggest = numbers[index];
// // }
// // console.log(biggest);

// // solução:
// // const biggest = numbers.reduce((biggestNumber, current) => {
// //   return (current > biggestNumber) ? biggestNumber = current : biggestNumber = biggestNumber;
// // }, numbers[0]);

// // solução refatorada:
// // const biggest = numbers.reduce((biggestNumber, current) =>
// //     (current > biggestNumber) ? biggestNumber = current : biggestNumber = biggestNumber
// //     , numbers[0]);

// // solução refatorada 2:
// const checkBiggest = (biggestNumber, current) => (current > biggestNumber) ? biggestNumber = current : biggestNumber = biggestNumber;
// const biggest = numbers.reduce(checkBiggest, 100);

// console.log(biggest);
// ----------------------------------------------------------------------

// Exemplo 2: Faça uma função que some todos os números pares do array
const numbers = [1, 18, 19, 23, 53, 4, 5, 76, 23, 54];

// Tente criar uma solução usando reduce e filter, e outra apenas usando reduce.
// const filteredNumbers = numbers.filter((number) => number % 2 ===0);
// const sumEven = filteredNumbers.reduce((number, current) => number + current, 0);

// Use apenas reduce.
// const sumOnlyEven = (sum, current) => (current % 2 === 0) ? sum += current : sum = sum;
// const sumEven = numbers.reduce(sumOnlyEven, 0);

// Apenas reduce refatorado para 1 linha
const sumEven = numbers.reduce((sum, current) => (current % 2 === 0) ? sum += current : sum = sum, 0);

console.log(sumEven); // 18 + 4 + 76 + 54 = 152