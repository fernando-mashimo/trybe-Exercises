const hydrate = string => {
  let numbersInArray = string.match(/\d/g);
  let sumNumbers = 0;
  for (let index = 0; index < numbersInArray.length; index += 1) {
    sumNumbers += parseInt(numbersInArray[index]);
  }

  if (sumNumbers === 1) return `${sumNumbers} copo de água`;
  else return `${sumNumbers} copos de água`;
};

console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = hydrate;