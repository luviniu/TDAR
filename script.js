const checkbox = document.getElementById('cee');
const header = document.querySelector('header');
const body = document.body;
const lampadaImg = document.querySelector('.lampada-img');

const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (prefersDarkMode) {
  header.classList.add('dark-theme');
  body.classList.add('dark-theme');
  checkbox.checked = true;
  lampadaImg.src = 'lua.png';
}

checkbox.addEventListener('change', function () {
  if (this.checked) {
    header.classList.add('dark-theme');
    body.classList.add('dark-theme');
    lampadaImg.src = 'lua.png';
  } else {
    header.classList.remove('dark-theme');
    body.classList.remove('dark-theme');
    lampadaImg.src = 'sol.png';
  }
});
