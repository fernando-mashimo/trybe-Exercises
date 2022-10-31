// Suponha que você esteja lidando com carros e, da forma como o problema lhe foi entregue, cada carro é representado dentro de um array. Então seu chefe pede que seja mudado o formato de array para objeto. Crie uma função toObject que, dada uma lista, retorna um objeto representando o carro:
const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// const toObject = (array) => {
//   return {
//     modelo: array[0],
//     fabricante: array[1],
//     ano: array[2]
//   };
// };

const toObject = ([modelo, fabricante, ano]) => {
    return {
      modelo,
      fabricante,
      ano
    };
};

console.log(toObject(palio));
console.log(toObject(shelbyCobra));
console.log(toObject(chiron));