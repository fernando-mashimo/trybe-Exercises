const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];
  
const expectedResult = 20;

// Dado o array de nomes, utilize o reduce para retornar a quantidade de vezes em que aparece a letra a, maiúscula ou minúscula.

const containsA = names.reduce((acc, currValue) => acc + currValue.toLowerCase().split('').filter((letter) => letter === 'a').length, 0);
console.log(containsA);