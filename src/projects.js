import { displayTasks } from './tasks';

const titleInput = document.getElementById('titleInput');
const newProjectForm = document.querySelector('.newProjectForm');
const projectList = document.querySelector('.projectList');
const todoList = document.querySelector('.todo-list');
const projectHeader = document.querySelector('.projectHeader');

//stores projects
let projects = [];

//creates project
class Project {
  constructor(title, tasks) {
    this.title = title;
    //thinking of having each project contain an array of objects each representing a single task
    //clean dishes (default task)
    this.tasks = [
      {
        title: 'clean dishes',
        dueDate: '12/29/22',
        priority: 'high',
        description: 'use extra soap',
      },
    ];
  }
}

//add project to array if valid title
const addProject = () => {
  if (titleInput.value) {
    const newProject = new Project(titleInput.value);
    projects.push(newProject);
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

    //this should display tasks once new project is created,
    //problem may be here too

    createP.addEventListener('click', displayTasks(projects[i], i));
    //way to allow user to swap between projects displaying appropriate tasks for each ?

    // this should display tasks for specific project when said project title is clicked
    createP.addEventListener('click', (e) => {
      //this works but feels sketch
      let title = e.target.innerText;
      for (let i = 0; i < projects.length; i++) {
        if (projects[i].title === title) {
          displayTasks(projects[i], i);
        }
      }
    });
  }
};

export { addProject, todoList, projectHeader, projects };
