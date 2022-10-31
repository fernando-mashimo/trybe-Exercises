// Crie uma função sum que dado um número ilimitado de parâmetros retorna a soma desses parâmetros. Ao chamar a função dessa forma : sum(4,5,6) o número 15 deve ser retornado.
// De olho na dica 👀: use o parâmetro rest.

// Com .reduce
const sum = (...numbers) => numbers.reduce((acc, current) => acc + current);

// Com .forEach
const sum2 = (...numbers) => {
  let sumNumbers = 0;
  numbers.forEach((number) => sumNumbers += number);
  return sumNumbers;
};

console.log(sum(4, 5, 6, 15));
console.log(sum2(4, 5, 6, 15));

// Remember: .rest é utilizado no parâmetro da declaração da função e transforma em um array os dados que forem passados na chamada da função.