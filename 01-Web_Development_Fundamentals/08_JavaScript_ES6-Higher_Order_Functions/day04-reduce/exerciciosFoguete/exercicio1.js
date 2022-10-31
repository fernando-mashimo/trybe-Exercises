const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

// Utilize o reduce para transformar uma matriz em um array.
const flatten = arrays.reduce((acc, currValue) => acc.concat(currValue));
console.log(flatten);