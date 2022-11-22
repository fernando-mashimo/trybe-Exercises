window.onload = () => {
  const bgBlackBtn = document.querySelector('.bg-color-black');
  const bgWhiteBtn = document.querySelector('.bg-color-white');
  const bgGreenBtn = document.querySelector('.bg-color-green');
  const bgBlueBtn = document.querySelector('.bg-color-blue');
  const bgYellowBtn = document.querySelector('.bg-color-yellow');
  const clearBtn = document.querySelector('#clear');
  const page = document.querySelector('body');

  const setBGcolor = (color) => {
    page.style.backgroundColor = color;
    localStorage.setItem('backgroundColor', JSON.stringify(color));
  };

  bgWhiteBtn.addEventListener('click', (event) => setBGcolor(event.target.innerHTML));
  bgBlackBtn.addEventListener('click', (event) => setBGcolor(event.target.innerHTML));
  bgGreenBtn.addEventListener('click', (event) => setBGcolor(event.target.innerHTML));
  bgBlueBtn.addEventListener('click', (event) => setBGcolor(event.target.innerHTML));
  bgYellowBtn.addEventListener('click', (event) => setBGcolor(event.target.innerHTML));
  clearBtn.addEventListener('click', () => {
    localStorage.clear();
    setBGcolor('white');
  });

  const recoverBgColor = () => {
    const bgColor = JSON.parse(localStorage.getItem('backgroundColor'));
    if(localStorage.backgroundColor) {
      setBGcolor(bgColor);
    }
  };

  recoverBgColor();
};
