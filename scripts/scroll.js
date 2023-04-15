const scrollBtn = document.querySelector('#arrow');
const scrollTarget = document.querySelector('#project-flex-container');

scrollBtn.addEventListener('click', () => {
  scrollTarget.scrollIntoView({ behavior: 'smooth' });
});
