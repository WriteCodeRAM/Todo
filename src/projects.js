import { createTaskForm, displayTasks } from './tasks';

const titleInput = document.getElementById('titleInput');
const newProjectForm = document.querySelector('.newProjectForm');
const projectList = document.querySelector('.projectList');
const todoList = document.querySelector('.todo-list');
const projectHeader = document.querySelector('.projectHeader');

//stores projects
let projects = [];

//creates project
class Project {
  constructor(title, task) {
    this.title = title;
    this.task = 'click to add tasks';
  }
}

//add project to array if valid title
const addProject = () => {
  console.log(createTaskForm);
  if (titleInput.value) {
    const newProject = new Project(titleInput.value);
    projects.push(newProject);
    console.log(projects);
  }
  newProjectForm.classList.add('hide');

  displayProject();
};

//displays name of projects in sidebar
let i = 0;
const displayProject = () => {
  for (i; i < projects.length; i++) {
    const createP = document.createElement('p');
    createP.innerText = projects[i].title;
    projectList.appendChild(createP);

    createP.addEventListener('click', displayTasks(projects[i]));
    //way to allow user to swap between projects displaying appropriate tasks for each ?

    createP.addEventListener('click', (e) => {
      //this works but feels sketch
      let title = e.target.innerText;
      for (let i = 0; i < projects.length; i++) {
        if (projects[i].title === title) {
          displayTasks(projects[i]);
        }
      }
    });
  }
};

export { addProject, todoList, projectHeader };
