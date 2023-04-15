const arrowBtn = document.querySelector('#arrow');
const projectsBtn = document.querySelector('.projects-button');
const projects = document.querySelector('#project-section');

function scrollToProjects() {
  projects.scrollIntoView({ behavior: "smooth" });
}

arrowBtn.addEventListener('click', () => {
  scrollToProjects();
});

projectsBtn.addEventListener('click', () => {
  scrollToProjects();
});

