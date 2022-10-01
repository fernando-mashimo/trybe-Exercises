const a = 0;
const b = 15;
const c = 30;

// Exercício: funções para operações matemáticas
function addition (a, b) {
  return a + b;
}

function subtraction (a, b) {
  return a - b;
}

function multiplication (a, b) {
  return a * b;
}

function division (a, b) {
  return a / b;
}

function remainder (a, b) {
  return a % b;
}

console.log(addition(a, b));
console.log(subtraction(a, b));
console.log(multiplication(a, b));
console.log(division(a, b));
console.log(remainder(a, b));
console.log("");

// Retornar o número maior
function highest2 (a, b) {
  if (a > b) {
    return a;
  } else return b;
}

console.log(highest2(a, b));
console.log("");

// Retornar o maior de três números
function highest3 (a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else if (c > a && c > b) {
    return c;
  } else if (a === b && a > c) {
    return ("a = b = " + a);
  } else if (a === c && a > b) {
    return ("a = c = " + a);
  } else return ("b = c = " + b);
}

console.log("Highest = " + highest3(a, b, c));
console.log("");

// Retonar sinal do número ou zero
function signal (a) {
  if (a > 0) { return "positive"; }
  else if (a < 0) { return "negative"; }
  else return "zero";
}

console.log(signal(a));
console.log("");

// ângulos de um triângulo
let d = 30;
let e = 45;
let f = 105;

function triAngles (alpha, beta, gamma) {
  if (alpha <= 0 || beta <= 0 || gamma <= 0) {
    return "Error: invalid angle";
  } else {
    return (alpha + beta + gamma === 180);
  }
}

console.log(triAngles(d, e, f));
console.log("");

// fixando o aprendizado
// testando código de um dos exercícios
const trybeStudent = { 
  name: "Luiza",
  class: 15,
  favoriteSubject: "javascript",
  };

console.log(trybeStudent.name + ' ' + 'ama' + ' ' + trybeStudent.favoriteSubject + '.');