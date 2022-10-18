// Global Variables
const form = document.getElementById('form');
const fieldSet = document.getElementById('fieldset');
const btnSubmit = document.getElementById('submit');
const btnReset = document.getElementById('reset');
const sendFilesSection = document.querySelector('#sendFiles');
const checkboxPics = document.querySelector('#picsCheckbox');

// Functions
function sendFiles() {
  const btnSendFiles = document.createElement('input');
  btnSendFiles.type = 'file';
  btnSendFiles.id = 'btnSendFiles';
  
  if (checkboxPics.checked === true) {
    sendFilesSection.appendChild(btnSendFiles);
  } else {
    const btn2Remove = document.querySelector('#btnSendFiles');
    btn2Remove.remove();
  }
}

function submit(event) {
  event.preventDefault();
}

function clearForm() {
  const inputElements = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea');
  for (index = 0; index < inputElements.length; index += 1) {
    const inputElements2Clear = inputElements[index];
    inputElements2Clear.value = '';
    inputElements2Clear.checked = false;
  }
  textArea.value = '';
  btnSubmit.value = 'Enviar';
  btnReset.value = 'Apagar';
  const btn2Remove = document.querySelector('#btnSendFiles');
  btn2Remove.remove();
}

const date = document.getElementById('date').DatePickerX.init();
date.format = 'dd/mm/yyyy';


// Interactive Elements
btnSubmit.addEventListener('click', submit);
btnReset.addEventListener('click', clearForm);
checkboxPics.addEventListener('click', sendFiles);