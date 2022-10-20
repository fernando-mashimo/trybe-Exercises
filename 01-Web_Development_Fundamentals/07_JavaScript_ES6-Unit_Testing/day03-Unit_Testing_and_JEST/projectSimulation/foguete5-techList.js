const techList = (array, name) => {
    array = array.sort();

    if (array.length === 0) return 'Vazio!';
    
    let finalList = [];
    for (let index = 0; index < array.length; index += 1) {
      const newEntry = {
        tech: array[index],
        name: name
      };
      finalList.push(newEntry);
    }
    return finalList;
};
console.log(techList(['HTML', 'CSS'], 'Fernando'));
console.log(techList([], 'Fernando'));

module.exports = techList;