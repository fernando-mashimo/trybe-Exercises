// API access token: 10159156492931009
import './style.css';
import Swal from 'sweetalert2';

const heroImage = document.querySelector('#heroImg');
const heroName = document.querySelector('#heroName');
const button = document.querySelector('#pickHeroBtn');

button.addEventListener('click', () => {
  heroImage.innerHTML = '';
  heroName.innerHTML = '';
  const generateRandomNumber = () => Math.floor(Math.random() * 1000);

  const defaultURL = `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${generateRandomNumber()}.json`;

  fetch(defaultURL)
    .then((response) => response.json())
    .then((data) => {
      const { name, images } = data;
      const img = document.createElement('img');

      img.src = images.md;
      heroImage.appendChild(img);
      heroName.innerHTML = name;
    })
    .catch(() =>
      Swal.fire({
        title: 'Oops',
        text: 'Hero Not Found',
        icon: 'error',
        confirmButtonText: 'Try Again',
      })
    );
});
