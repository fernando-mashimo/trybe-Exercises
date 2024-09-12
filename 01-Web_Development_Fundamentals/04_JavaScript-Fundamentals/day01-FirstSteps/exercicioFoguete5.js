// Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.
// Bonus: use somente um if.

const x = 21;
const y = 33;
const z = 41;

isEven = false;

if (x % 2 === 0 || y % 2 === 0 || z % 2 === 0) {
    isEven = true;
}

console.log(isEven);

//ou apenas:
console.log(x % 2 === 0 || y % 2 === 0 || z % 2 === 0);