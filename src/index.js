import { addProject } from './projects';

const newProjectBtn = document.querySelector('.newProject');
const submitBtn = document.querySelector('.submitButton');

submitBtn.addEventListener('click', addProject);

function showForm() {
  // const form = document.querySelector('form');
  const newProjectForm = document.querySelector('.newProjectForm');

  newProjectForm.classList.remove('hide');
  newProjectForm.classList.add('show');
}

newProjectBtn.addEventListener('click', showForm);
