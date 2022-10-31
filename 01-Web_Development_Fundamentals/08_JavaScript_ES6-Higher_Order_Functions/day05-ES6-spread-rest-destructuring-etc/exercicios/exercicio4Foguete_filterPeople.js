const people = [
    {
      name: 'Nicole',
      bornIn: 1992,
      nationality: 'Australian',
    },
    {
      name: 'Harry',
      bornIn: 2008,
      nationality: 'Australian',
    },
    {
      name: 'Toby',
      bornIn: 1901,
      nationality: 'Australian',
    },
    {
      name: 'Frida',
      bornIn: 1960,
      nationality: 'Dannish',
    },
    {
      name: 'Fernando',
      bornIn: 2001,
      nationality: 'Brazilian',
    },
      // bornIn: nascido em
  ];

// Escreva uma função filterPeople que, dada uma lista de pessoas, retorne todas as pessoas australianas que nasceram no século 20:

const filterPeople = people.filter(( { name, bornIn, nationality } ) => nationality === 'Australian' && (bornIn > 1900 && bornIn < 2001));
console.log(filterPeople);

// Resolução:
// Primeiro: identifiquei que seria necessário usar a HOF filter.
// Segundo: resolvi o problema chamando o parâmetro (objeto) normalmente (sem usar obj destructuring). Deu certo.
// Terceiro: 'refatorei' a função filter, aplicando obj destructuring.