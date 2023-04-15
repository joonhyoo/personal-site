const arrowBtn = document.querySelector('#arrow');
const projectsBtn = document.querySelector('.projects-button');
const projects = document.querySelector('#project-flex-container');

arrowBtn.addEventListener('click', () => {
  projects.scrollIntoView({ behavior: 'smooth' });
});

projectsBtn.addEventListener('click', () => {
  projects.scrollIntoView({ behavior: 'smooth' });
});
