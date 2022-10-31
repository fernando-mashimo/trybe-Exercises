// EXEMPLO 1
// const spring = ['OUT', 'NOV', 'DEZ'];
// const summer = ['JAN', 'FEV', 'MAR'];
// const fall = ['ABR', 'MAI', 'JUN'];
// const winter = ['JUL', 'AGO', 'SET'];

// const months = [...summer, ...fall, ...winter, ...spring];

// forEach
// const months = [];

// const pushMonths = (array) => array.forEach((month) => months.push(month));

// pushMonths(summer);
// pushMonths(fall);
// pushMonths(winter);
// pushMonths(spring);


// console.log(months);

// // spread operator para distribuir itens de um array como parâmetros de função
// const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
// const patientInfo = [60, 1.7];

// console.log(imc(...patientInfo)); // 20.76

// // spread operator para distribuir itens de um array como parâmetros de um método do JS
// const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

// console.log(Math.max(...randomNumbers)); // 800
// console.log(Math.min(...randomNumbers)); // 5

// para fixar: Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens; faça a função retornar uma lista única, contendo todos os itens da nossa salada de frutas, usando o spread.
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['manga', 'morango', 'lichia'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['sorvete', 'chocolate', 'm&m'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));