let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Percorra o array imprimindo todos os valores nele contidos com a função console.log();
for (let number of numbers) {
    console.log(number);
}

// Some todos os valores contidos no array e imprima o resultado;
let sum = 0;

for (let number of numbers) {
    sum += number;
}

console.log("A soma dos números é: " + sum);

// Calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
let average = 0;

for (let number of numbers) {
    sum += number;
}

average = sum / numbers.length;
console.log("A média aritmética dos números é: " + average);

// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

if (average > 20) {
    console.log("valor maior que 20");
} else console.log("valor menor ou igual a 20");

// Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let highestValue = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > highestValue) {
        highestValue = numbers[index];
    }
}

console.log("O maior valor contido na array é: " + highestValue);

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;
let amountOdds = 0;

for (number of numbers) {
    if (number % 2 !== 0) {
        amountOdds += 1;
    }
}
if (amountOdds ===0) {
    console.log("nenhum valor ímpar encontrado");
} else console.log("A quantidade de números ímpares encotrados é de " + amountOdds + " números.");

// Utilizando for, descubra qual o menor valor contido no array e imprima-o;
let lowestValue = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] < lowestValue) {
        lowestValue = numbers[index];
    }
}

console.log("O menor valor contido na array é: " + lowestValue);

// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
let novaArray = [1];

for (index = 1; index < 25; index += 1) {
    novaArray.push(novaArray[index - 1] + 1);
}
console.log(novaArray);

// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.
for (let number of novaArray) {
    console.log(number + " dividido por 2 é igual a: " + number / 2);
}