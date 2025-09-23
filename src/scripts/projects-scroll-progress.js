const projectsContainer = document.getElementById('projects-container');
const progressBar = document.getElementById('project-scroll-progress');
const yearIndicator = document.getElementById('year-indicator');

const progressOffset = window.innerHeight * 0.029;
const scrollAreaHeight = projectsContainer.scrollHeight;

const clamp = (num, min, max) => {
  return Math.max(min, Math.min(num, max));
};

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY - projectsContainer.offsetTop;
  const scrollPercentage = (scrollPosition / scrollAreaHeight) * 100 + progressOffset;

  progressBar.style.height = `${clamp(scrollPercentage, 0, 100)}%`;
  console.log(scrollPercentage)

  if (scrollPercentage >= 90) {
    yearIndicator.textContent = '2023';
  } else if (scrollPercentage >= 60) {
    yearIndicator.textContent = '2024';
  } else {
    yearIndicator.textContent = '2025';
  }
});
