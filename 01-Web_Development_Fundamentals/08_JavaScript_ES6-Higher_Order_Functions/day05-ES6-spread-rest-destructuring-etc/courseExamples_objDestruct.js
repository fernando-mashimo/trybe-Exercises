// No exemplo abaixo, como você faria para imprimir o valor de cada propriedade do objeto product?
// Sem DESTRUCTURING
// const product = {
//     name: 'Smart TV Crystal UHD',
//     price: '1899.05',
//     seller: 'Casas de Minas',
// };

// const productValues = `${product.name}, ${product.price}, ${product.seller}`;
// console.log(1, productValues);

// // Com DESTRUCTURING
// const { name, price, seller } = product;
// console.log(2, `${name}, ${price}, ${seller}`);

// EXEMPLO Star Wars
// // definindo o objeto
// const character = {
//     name: 'Luke SkyWalker',
//     age: '53',
//     description: {
//       specieName: 'Human',
//       jedi: true,
//     },
//     homeWorld: {
//       name: 'Tatooine',
//       population: '200000',
//     },
//   };
  
//   // desestruturando o objeto:
//   const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;
  
//   // imprimindo os valores:
//   console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);

// // Exemplo de OBJ DESTRUCT + SPREAD OPERATOR

// const daysOfWeek = {
//     workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
//     weekend: ['Saturday', 'Sunday'],
//   };
  
//   const { workDays, weekend } = daysOfWeek; // desestruturando o objeto de acordo com as chaves que ele contem
//   console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
//   console.log(weekend); // ['Saturday', 'Sunday']
  
//   const weekdays = [...workDays, ...weekend]; // concatenando os valores das chaves em um único array, utilizando SPREAD
//   console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

// // OBJ DESTRUCT tb pode ser usado para reatribuir nomes para as chaves
// const student = {
//   a: 'Maria',
//   b: 'Turma B',
//   c: 'Matematica',
// };
  
// const { a: name, b: classAssigned, c: subject } = student;
  
// console.log(name); // Maria
// console.log(classAssigned); // Turma B
// console.log(subject); // Matemática

// // Por fim, uma outra situação em que podemos usar a desestruturação de objetos é quando queremos passar os valores de um objeto como parâmetros para uma função, como no exemplo abaixo:
// const product = {
//     name: 'Smart TV Crystal UHD',
//     price: '1899.05',
//     seller: 'Casas de Minas',
//   };
  
//   const printProductDetails = ({ name, price, seller }) => {
//     console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
//   };
  
//   printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas
  
// PARA FIXAR:
const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };

// Crie um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos.
const personInfo = {...user, ...jobInfos};
console.log(personInfo);

// Imprima no console uma frase utilizando os dados do objeto criado anteriormente. Para isso, utilize a desestruturação de objetos em conjunto com template literals.
// Exemplo "Hi, my name is Maria, I'm 21 years old and I'm Brazilian. I work as a Software engineer and my squad is RLL-Rocket Landing Logic"
const { name, age, nationality, profession, squad, squadInitials } = personInfo;
console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}.`);

