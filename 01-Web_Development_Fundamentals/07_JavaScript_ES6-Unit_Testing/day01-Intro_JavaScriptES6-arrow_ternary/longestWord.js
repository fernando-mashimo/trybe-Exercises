const longestWord = (string) => {
  const string2Array = string.split(' ');
  let longestWord = string2Array[0];
  for (let index = 1; index < string2Array.length; index += 1) {
    if (string2Array[index].length > longestWord.length) {
      longestWord = string2Array[index];
    }
  }
  return longestWord;
}

console.log(longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu'));

// Pseudo-código usando o método de ordenação
/* função maiorPalavra (frase) {
    const arrayDeStrings = frase.split(' ');
    arrayDeStrings.sort('ver como usar este método para ordenar a array da palavra mais longa para a menos longa'); //o método .sort() atualiza a própria array, desta forma não é necessário criar uma nova variável
    return arrayDeStrings[0]; //retora a primeira palavra da array
  }
  console.log(maiorPalavra('Qual a maior palavra nesta fraaaaaaaaaaaaase ?'));
*/