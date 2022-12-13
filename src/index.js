import createUI from './UI';
import addProject from './projects';

createUI();

const newProjectBtn = document.querySelector('.newProject');
const submitBtn = document.querySelector('.submitButton');

submitBtn.addEventListener('click', addProject);

function showForm() {
  const form = document.querySelector('form');
  form.classList.remove('hide');
  form.classList.add('show');
}

newProjectBtn.addEventListener('click', showForm);

// const createTask = () => {
//   const main = document.querySelector('.main');
//   const heading = document.createElement('h1');
//   const list = document.createElement('li');

//   heading.innerText = 'What would you like to accomplish today?';
//   main.appendChild(heading);
// };

// addProject();
