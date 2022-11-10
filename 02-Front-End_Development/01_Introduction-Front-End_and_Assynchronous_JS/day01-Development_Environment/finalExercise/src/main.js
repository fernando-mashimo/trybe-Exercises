import validator from 'validator';
// validações:
// 1. Nome é string
// 2. Nome é completo, ou seja, contém um espaço entre duas palavras
// 3. E-mail é válido
// 4. Data está no formato correto
// 5. Data está no passado (pois é data de nascimento)

const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const dateInput = document.querySelector('#date');
const validateBtn = document.querySelector('#validate');
const validationOption = document.querySelector('#validationType');
const resultMessage = document.querySelector('#validationResult');

const validateName = (input) => {
//   validator.contains(input, ' ') ? resultMessage.innerHTML = 'Nome válido' : resultMessage.innerHTML = 'Informe seu nome completo!';
  (validator.isLength(input, { max: 25 }) && validator.contains(input, ' ')) ? resultMessage.innerHTML = 'Nome válido' : resultMessage.innerHTML = 'Digite seu nome com no máximo 25 caracteres';
};

const validateEmail = (input) => {
  validator.isEmail(input) ? resultMessage.innerHTML = 'Email válido' : resultMessage.innerHTML = 'Digite um endereço de email válido!';
};

const validateDate = (input) => {
  validator.isDate(input) && validator.isBefore(input, new Date()) ? resultMessage.innerHTML = 'Data válida' : resultMessage.innerHTML = 'Informe uma data válida!';
};

validateBtn.addEventListener('click', (event) => {
  if (validationOption.value === 'name') validateName(nameInput.value);
  if (validationOption.value === 'email') validateEmail(emailInput.value);
  if (validationOption.value === 'date') validateDate(dateInput.value);
  event.preventDefault();
});