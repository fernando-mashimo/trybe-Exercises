// Exemplo 1: verificar se o estudante está aprovado em todas as matérias
// const grades = {
//     portugues: 'Aprovado',
//     matematica: 'Reprovado',
//     ingles: 'Aprovado',
//   };
  
//   const verifyGrades = (studentGrades) => (
//     Object.values(studentGrades).every((grade) => grade === 'Aprovado')
//   );
  
//   console.log(verifyGrades(grades));
// --------------------------------------------------------

// Exemplo 2: Escreva uma função, que dado um array de pessoas e uma idade mínima, retorne true se todas tiverem a idade maior ou igual à mínima e, caso contrário, false. Use every.

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  const verifyAges = (arr, minimumAge) => arr.every((element) => element.age >= minimumAge);
  
  console.log(verifyAges(people, 18));