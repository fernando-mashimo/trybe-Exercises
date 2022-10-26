// const students = [ // Declaração de uma array: queremos preencher a última chave de cada entrada ('approved')
//     { name: 'Maria', grade: 70, approved: '' },
//     { name: 'José', grade: 56, approved: '' },
//     { name: 'Roberto', grade: 90, approved: '' },
//     { name: 'Ana', grade: 81, approved: '' },
//   ];
  
//   function verifyGrades() {
//     students.forEach((student, index) => { // Sintaxe: chama-se a array que queremos atualizar seguida de .forEach, que chama uma arrow function
//       if (student.grade >= 60) {
//         students[index].approved = 'Aprovado';
//       } else {
//         students[index].approved = 'Recuperação';
//       }
//     });
//   }
  
//   verifyGrades();
  
//   console.log(students);
  // [
  //   { name: 'Maria', grade: 70, approved: 'Aprovado' },
  //   { name: 'José', grade: 56, approved: 'Recuperação' },
  //   { name: 'Roberto', grade: 90, approved: 'Aprovado' },
  //   { name: 'Ana', grade: 81, approved: 'Aprovado' }
  // ]
  // -------------------------------------------------
//   // Exemplo 2: tabuada
//   const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//   const multipliesFor2 = (element) => {
//     console.log(`${element} * 2: ${element * 2}`);
//   };
  
//   numbers.forEach(multipliesFor2);
//   console.log(numbers);
  // --------------------------------------------------
  // Exemplo 3: Converter nomes para Uppercase
const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index) => names[index] = name.toUpperCase();

names.forEach(convertToUpperCase);
console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]
// -----------------------------------------------------

// Exemplo Para Fixar do Course
// Use o método forEach chamando a callback showEmailList para apresentar os emails

// const emailListInData = [
//     'roberta@email.com',
//     'paulo@email.com',
//     'anaroberta@email.com',
//     'fabiano@email.com',
//   ];
  
//   const showEmailList = (email, index, wholeList) => {
//     console.log(
//         `O email ${email} esta cadastrado em nosso banco de dados!
// Este email é o de número ${index + 1} de uma lista com ${wholeList.length} emails`);
//   };

//   // Adicione seu código aqui
//   emailListInData.forEach(showEmailList);
  // ---------------------------------------------------