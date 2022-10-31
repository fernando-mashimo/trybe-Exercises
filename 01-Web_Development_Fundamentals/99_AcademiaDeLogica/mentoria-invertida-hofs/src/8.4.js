const books = require('./books.js');

// Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA

const formatedBookNames = () => {
  // escreva seu código aqui
};

// Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age, com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha, considerando suas idades quando o livro foi lançado.

const nameAndAge = () => {
  // escreva seu código aqui
};

// Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.

const fantasyOrScienceFiction = books.filter((book) => (book.genre === 'Ficção Científica' || book.genre === 'Fantasia'));
// console.log(fantasyOrScienceFiction);

// Crie um array formado pelos livros com mais de 60 anos desde sua publicação. Esse array deve ser ordenado do livro mais velho ao mais novo.

const oldBooksOrdered = books.filter((book) => ((new Date().getFullYear()) - book.releaseYear > 60))
  .sort((bookA, bookB) => bookB.releaseYear - bookA.releaseYear);
// console.log(oldBooksOrdered);

// Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.
const fantasyOrScienceFictionAuthors = () => {
  const booksFiltered = books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia');
  const authorsName = booksFiltered.map((book) => book.author.name);
  const namesOrdered = authorsName.sort((nameA, nameB) => nameA - nameB);
  
  return namesOrdered;
}
console.log(fantasyOrScienceFictionAuthors());

// Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

const oldBooks = () => {
  // escreva seu código aqui
};

// Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.

const authorWith3DotsOnName = () => {
  // escreva seu código aqui
};

module.exports = {
  formatedBookNames,
  nameAndAge,
  fantasyOrScienceFiction,
  oldBooksOrdered,
  fantasyOrScienceFictionAuthors,
  oldBooks,
  authorWith3DotsOnName,
};
