const butterfly = document.getElementById('butterfly_2');
const button = document.getElementById('toggleFill');

button.addEventListener('click', () => {
  butterfly.classList.toggle('no-fill');
});
