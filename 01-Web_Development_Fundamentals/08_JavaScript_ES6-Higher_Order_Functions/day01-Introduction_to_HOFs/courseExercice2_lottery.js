// Sorteador de loteria
// Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns você ganhou”).
const checkNumber = (numberDraw, numberPlayed) => numberDraw === numberPlayed;

const lotteryResult = (numberPlayed, callback) => {
  const numberDraw = Math.ceil(Math.random()*5);
//   console.log(numberDraw);
   return callback(numberDraw, numberPlayed) ? 'Parabéns você ganhou' : 'Tente novamente';
};

console.log(lotteryResult(3, checkNumber));