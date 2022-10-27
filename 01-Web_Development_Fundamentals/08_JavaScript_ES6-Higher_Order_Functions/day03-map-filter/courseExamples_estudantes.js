const estudantes = [
    {
      nome: 'Jorge',
      sobrenome: 'Silva',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 67 },
        { name: 'Português', nota: 79 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 65 },
      ],
    },
    {
      nome: 'Mario',
      sobrenome: 'Ferreira',
      idade: 15,
      turno: 'Tarde',
      materias: [
        { name: 'Matemática', nota: '59' },
        { name: 'Português', nota: '80' },
        { name: 'Química', nota: '78' },
        { name: 'Biologia', nota: '92' },
      ],
    },
    {
      nome: 'Jorge',
      sobrenome: 'Santos',
      idade: 15,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '76' },
        { name: 'Português', nota: '90' },
        { name: 'Química', nota: '70' },
        { name: 'Biologia', nota: '80' },
      ],
    },
    {
      nome: 'Maria',
      sobrenome: 'Silveira',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '91' },
        { name: 'Português', nota: '85' },
        { name: 'Química', nota: '92' },
        { name: 'Biologia', nota: '90' },
      ],
    },
    {
      nome: 'Natalia',
      sobrenome: 'Castro',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '70' },
        { name: 'Português', nota: '70' },
        { name: 'Química', nota: '60' },
        { name: 'Biologia', nota: '50' },
      ],
    },
    {
      nome: 'Wilson',
      sobrenome: 'Martins',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '80' },
        { name: 'Português', nota: '82' },
        { name: 'Química', nota: '79' },
        { name: 'Biologia', nota: '75' },
      ],
    },
  ];

// Função para buscar e imprimir o nome completo de todos os estudantes que estudam no turno da manhã.
// com for
// const estudantesManha = () => {
//   let names = [];
//   for (let index = 0; index < estudantes.length; index += 1) {
//     if (estudantes[index].turno === 'Manhã') {
//       names.push(estudantes[index].nome)
//     }
//   }
//   return names;
// };
// console.log(estudantesManha());

// com HOF
// const estudantesManha = estudantes.filter((estudante) => estudante.turno === 'Manhã')
//   .map((estudante) => `${estudante.nome} ${estudante.sobrenome}`);
// console.log(estudantesManha);

// Buscar um estudante pelo nome e retornar a situação dele em cada matéria
// com FOR:
// const findStudent = (name, students) => {
//     for (let index = 0; index < students.length; index += 1) {
//       if (students[index].nome === name) {
//         return students[index];
//       }
//     }
//   };
  
//   const reportStatus = (name, students) => {
//     const getStudent = findStudent(name, students);
//     const report = [];
//     for (let index = 0; index < getStudent.materias.length; index += 1) {
//       if (getStudent.materias[index].nota >= 60) {
//         report.push(`${getStudent.materias[index].name} Aprovado`);
//       } else {
//         report.push(`${getStudent.materias[index].name} Reprovado`);
//       }
//     }
//     return report;
//   };
  
//   console.log(reportStatus('Natalia', estudantes));
  
// Com HOF:
const finalStatus = (name, students) => {
  let approvalStatus = [];
  const subjectGrades = students.find((student) => student.nome === name).materias;
  subjectGrades.forEach((element) => {
    if (element.nota >= 60) approvalStatus.push(`${element.name} Aprovado`);
    else approvalStatus.push(`${element.name} Reprovado`);
  });
  return approvalStatus;
};

console.log(finalStatus('Natalia', estudantes));