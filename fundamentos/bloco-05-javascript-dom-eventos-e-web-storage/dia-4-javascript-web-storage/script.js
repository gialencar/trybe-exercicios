document.querySelector('.texto').style.color =
  localStorage.getItem('text-color');

document.querySelector('.branco').addEventListener('click', () => {
  document.querySelector('.texto').style.color = 'white';
  localStorage.setItem('text-color', 'white');
});

document.querySelector('.preto').addEventListener('click', () => {
  document.querySelector('.texto').style.color = 'black';
  localStorage.setItem('text-color', 'black');
});
