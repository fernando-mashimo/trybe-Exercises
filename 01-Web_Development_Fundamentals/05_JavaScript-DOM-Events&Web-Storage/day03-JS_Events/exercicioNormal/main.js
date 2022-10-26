const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


//  - Copie esse arquivo e edite apenas ele;
//  - Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
//  Fernando: o elemento <li> mais à esquerda tem a classe ".tech", que possui um atributo-valor "transform: translateY(-20px);" - ela faz com que o elemento se desloque 20px para cima.

// - Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
//  - Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

function addClassToList(elemento) {
  let classTechElements = document.querySelector(".tech");
  // console.log(classTechElements);
  classTechElements.classList.remove("tech");
  elemento.target.classList.add("tech");
}
firstLi.addEventListener("click", addClassToList);
secondLi.addEventListener("click", addClassToList);
thirdLi.addEventListener("click", addClassToList);

// - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

function changeTechContent() {
  let currentBox = document.querySelector(".tech");
  console.log(currentBox);
  console.log(currentBox.innerText);
  currentBox.innerText = input.value;
}

input.addEventListener("change", changeTechContent);

// - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
//  - Que tal redirecionar para seu portfólio?
function redirectToPage() {
  window.location.replace("https://www.linkedin.com/in/mashimo"); //GABARITO
}

myWebpage.addEventListener("dblclick", redirectToPage);

// - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

myWebpage.addEventListener("mouseover", function() {
  myWebpage.style.color = "magenta";
})
myWebpage.addEventListener("mouseleave", function() {
  myWebpage.style.color = "white";
})
// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  console.log(event.target);
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.