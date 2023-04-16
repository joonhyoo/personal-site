// Get the header element
const header = document.querySelector('.header');

// Listen for the scroll event on the window object
window.addEventListener('scroll', () => {
  // Check if the user has scrolled past the header
  if (window.scrollY > header.offsetHeight) {
    // If so, add the 'header-hidden' class to the header element
    header.classList.add('header-hidden');
  } else {
    // Otherwise, remove the 'header-hidden' class from the header element
    header.classList.remove('header-hidden');
  }
});