const form = document.getElementById('form');
const fieldSet = document.getElementById('fieldset');

const btnSubmit = document.getElementById('submit');
btnSubmit.addEventListener('click', function(event) {
  event.preventDefault();
})

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

const btnReset = document.getElementById('reset');
btnReset.addEventListener('click', clearForm);

function sendFiles() {
  const btnSendFiles = document.createElement('input');
  btnSendFiles.type = 'file';
  btnSendFiles.id = 'btnSendFiles';
  
  const sendFilesSection = document.querySelector('#sendFiles');

  if (checkboxPics.checked === true) {
    sendFilesSection.appendChild(btnSendFiles);
  } else {
    const btn2Remove = document.querySelector('#btnSendFiles');
    btn2Remove.remove();
  }
}

const checkboxPics = document.querySelector('#picsCheckbox');
checkboxPics.addEventListener('click', sendFiles);
