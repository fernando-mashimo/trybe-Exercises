import Swal from 'sweetalert2';

const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const preEl = document.querySelector('pre');

async function handleClick() {
  const cep = inputEl.value;

  try {
    const result = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await result.json();

    preEl.innerHTML = JSON.stringify(data);
    return data;
  } catch (error) {
    // return error.message;
    Swal.fire({
      icon: 'error',
      title: 'Ops!',
      text: 'Digite um CEP válido',
      confirmButtonText: 'OK',
    });
  }
}

buttonEl.addEventListener('click', handleClick);