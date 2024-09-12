// Utilize if/else para fazer um programa que defina três números em constantes e retorne true se pelo menos uma DUAS das três for par. Caso contrário, ele deve retornar false.
// Bonus: use somente um if.

const x = 22;
const y = 32;
const z = 41;

if (x % 2 === 0 && y % 2 === 0 || x % 2 === 0 && z % 2 === 0 || y % 2 === 0 && z % 2 === 0) {
    console.log("true");
} else console.log("false");

//ou apenas:
console.log(x % 2 === 0 && y % 2 === 0 || x % 2 === 0 && z % 2 === 0 || y % 2 === 0 && z % 2 === 0);