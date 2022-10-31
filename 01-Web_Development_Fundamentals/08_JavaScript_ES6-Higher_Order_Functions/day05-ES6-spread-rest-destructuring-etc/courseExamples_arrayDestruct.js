// // Exemplo 1
// const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// saudacoes[1](saudacoes[0]); // Olá

// // Produza o mesmo resultado acima, porém utilizando array destructuring
// const [item1, item2] = saudacoes;
// console.log(item2(item1));
// ------------------------------------------------------------------------------

// Exemplo 2 - A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis.
// let comida = 'gato';
// let animal = 'água';
// let bebida = 'arroz';
// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

// const array = ['arroz', 'gato', 'água'];
// const [comida, animal, bebida] = array;

// console.log(comida, animal, bebida); // arroz gato água
// ------------------------------------------------------------------------------

// Exemplo 3 - O array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de array destructuring, faça com que existam apenas números pares na variável numerosPares.
// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

let numerosPares = [1, 3, 5, 6, 8, 10, 12];
// const apenasPares = numerosPares.filter((numero) => numero % 2 === 0); 
[,,, ...numerosPares] = numerosPares;

console.log(numerosPares); // [6, 8, 10, 12];
