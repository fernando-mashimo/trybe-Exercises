// Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
function checkPalindrome(word) {
    return word.split("").reverse().join("").toLowerCase === word.toLowerCase;
}

let inputWord = "Arara";
console.log(inputWord + " is a palindrome: " + checkPalindrome(inputWord));
console.log('_________End: Palindrome_________');

// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1];.
// Valor esperado no retorno da função: 4.
function indexOfHighestValue(array) {

    let highestValueIndex = 0;

    for (let index = 0; index < array.length; index += 1){
        if (array[index] >= array[highestValueIndex]) {
            highestValueIndex = index;
        }
    }
    return highestValueIndex;
}

let numbers1 = [2, 3, 6, 7, 10, 1];

console.log(indexOfHighestValue(numbers1));
console.log("_________End: Highest Value_________");

// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3];.
// Valor esperado no retorno da função: 6.
function indexOfLowestValue(array) {

    let lowestValueIndex = 0;

    for (let index = 0; index < array.length; index += 1){
        if (array[index] <= array[lowestValueIndex]) {
            lowestValueIndex = index;
        }
    }
    return lowestValueIndex;
}

let numbers2 = [2, 3, 6, 7, 10, 0, -3];

console.log(indexOfLowestValue(numbers2));
console.log('_________End: Lowest Value_________');

// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
// Valor esperado no retorno da função: Fernanda.

