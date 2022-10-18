const factorial = (integer) => {
  let result = 1;
  for (let i = 0; i < integer; i += 1) {
    result *= integer - i;
  }
  return result;
}
console.log(`Esse é o fatorial resultado da função: ${factorial(0)}`);
