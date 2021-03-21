// const toggleMenu = () => {
//   const toggleMenu = document.querySelector('.toggle');
//   toggleMenu.classList.toggle('active');
// };

const burger = document.querySelector('.toggle');
const sidebar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  sidebar.classList.toggle('active');
});

sidebar.addEventListener('click', (e) => {
  if (e.target.value !== '.menu' && e.target.value !== '.sidebar') {
    burger.classList.remove('active');
    sidebar.classList.remove('active');
  }
});
