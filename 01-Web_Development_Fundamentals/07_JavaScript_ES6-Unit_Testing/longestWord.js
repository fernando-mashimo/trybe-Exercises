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