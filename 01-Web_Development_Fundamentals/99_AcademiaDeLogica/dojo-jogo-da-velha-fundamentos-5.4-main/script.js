const combinacoes =[
  [0,1,2], // linha 1
  [3,4,5], // linha 2
  [6,7,8], // linha 3
  [0,3,6], // coluna 1
  [1,4,7], // coluna 2
  [2,5,8], // coluna 3
  [0,4,8], // diagonal esqueda direita
  [2,4,6] // diagonal direita esquerda
]

//  1. Crie uma função para gerar de maneira dinâmica `9 divs`
// 	- Deve conter a `classe celula`
// 	- Deve conter o `id` numerados de 0 a 8
// 	- Deve ser filho da `div grid`
// 	- Cada div deve possuir um evento de click chamando uma função com o nome Jogar(Faremos no requisito)

function jogar(event) {
  console.log(event.target);
}

function criaDiv() {
  let grid = document.querySelector('.grid');
  // console.log(grid);

  for (counter = 0; counter < 9; counter += 1) {
    let novaDiv = document.createElement('div');
    novaDiv.classList.add("celula"); //poderia usar className, mas este sobrescreve qq valor de class que já exista
    novaDiv.id = counter; //exxiste idList?
    novaDiv.addEventListener('click', jogar);
    grid.appendChild(novaDiv);
  }
}

// 2. Crie a função Jogar que deve receber o evento do click
// 	- Deve guardar o alvo clicado
// 	- Checar de qual jogador é o turno 
// 	- Alterar o texto com o `id player` para o texto do jogador da vez ( X ou O )
// 	- Alterar o texto do alvo clicado para o texto do jogador da vez ( X ou O )
// 	- Alterar o turno dos jogadores

criaDiv();