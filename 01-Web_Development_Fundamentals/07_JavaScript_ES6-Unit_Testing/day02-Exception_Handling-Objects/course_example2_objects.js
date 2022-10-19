const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };

  const studentSkills = (student) => {
    const keysArray = Object.keys(student);
    for (const index in keysArray) {
      console.log(`${keysArray[index]}, Nível: ${student[keysArray[index]]}`);
    }
  }

  console.log('Student 1');
  studentSkills(student1);

  console.log('Student 2');
  studentSkills(student2);