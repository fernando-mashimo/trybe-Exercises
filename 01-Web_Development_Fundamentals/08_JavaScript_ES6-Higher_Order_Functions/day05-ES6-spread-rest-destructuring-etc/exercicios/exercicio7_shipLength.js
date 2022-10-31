// Escreva uma função shipLength que, dado um objeto representando um navio, retorna o comprimento dele, mostrando também a devida unidade de medida:

const ships = [
    {
      name: 'Titanic',
      length: 269.1,
      measurementUnit: 'meters',
    },
    {
      name: 'Queen Mary 2',
      length: 1132,
      measurementUnit: 'feet',
    },
    {
      name: 'Yamato',
      length: 256,
      measurementUnit: 'meters',
    },
       // measurementUnit: unidade de medida
  ];
  
  const shipLength = ({ name, length, measurementUnit }) => `${name} is ${length} ${measurementUnit} long`;
  
  // retorno esperado
  console.log(shipLength(ships[0])); // 'Titanic is 269.1 meters long'
  console.log(shipLength(ships[1])); // 'Queen Mary 2 is 1132 feet long'
  console.log(shipLength(ships[2])); // 'Yamato is 256 meters long'

  // Resolução:
  // Primeiro: verifiquei que ships é uma array de objetos, ou seja, ships[index] são objetos que tem a estrutura { name: nomeNavio, length: comprimentoNavio, measurementUnit: unidadeDeMedida }
  // Segundo: Escrevi a função passando como parâmetro o objeto desestruturado, ou seja, os nomes das chaves do objeto entre {} ---- { chave1, chave2, chave3 }
  // Terceiro: Escrevi o retorno da função como uma string (com template literals) onde o nome, comprimento e unidade de medida são representados pelos parâmetros passados para a função.