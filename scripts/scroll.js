const arrowBtn = document.querySelector('#arrow');
const projectsBtn = document.querySelector('.projects-button');
const projects = document.querySelector('#project-flex-container');
const offset = 125;

function scrollToProjects() {
  const rect = projects.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const targetTop = rect.top + scrollTop - offset;
  window.scrollTo({ top: targetTop, behavior: 'smooth' });
}

arrowBtn.addEventListener('click', () => {
  scrollToProjects();
});

projectsBtn.addEventListener('click', () => {
  scrollToProjects();
});


