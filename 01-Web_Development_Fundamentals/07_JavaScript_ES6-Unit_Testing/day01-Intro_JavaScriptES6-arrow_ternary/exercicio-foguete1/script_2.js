// Crie uma função que faça com que o array oddsAndEvens fique em ordem crescente;
// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne a frase “Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!”.
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort(). Spoiler: É possível realizar uma função que ordene qualquer array de números.


const oddsAndEvens = [3, 13, 4, 10, 1, 7, 5, 2];

// Usando um algoritmo verboso (que eu desenvolvi)
function findMinimum(array) {
  let minimum = array[0];
  let indexOfMinimum = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < minimum) {
      minimum = array[index];
      indexOfMinimum = index;
    }
  }
  return indexOfMinimum;
}

const sortOddsAndEvens = (array) => {
  let sortedArray = [];
  while (array.length > 0) {
    sortedArray.push(array[findMinimum(array)]);
    array.splice(findMinimum(array), 1);
  }
  return sortedArray;
}

console.log(`Os números ${sortOddsAndEvens(oddsAndEvens).join(', ')} se encontram ordenados de forma crescente!`);

// Usando o método sort()
let oddsAndEvens2 = [3, 13, 4, 10, 1, 7, 5, 2];
const sortedByMethod = (array) => array.sort((a, b) => a - b);
console.log(sortedByMethod(oddsAndEvens2));