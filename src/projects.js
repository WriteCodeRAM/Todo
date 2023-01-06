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
      //   {
      //     title: 'clean dishes',
      //     dueDate: '12/29/22',
      //     priority: 'high',
      //     description: 'use extra soap',
      //   },
    ];
  }
}

//add project to array if valid title
const addProject = () => {
  if (titleInput.value) {
    const newProject = new Project(titleInput.value);
    projects.push(newProject);
    console.log(titleInput);
  }
  newProjectForm.classList.add('hide');
  titleInput.value = '';

  displayProject();
};

//displays name of projects in sidebar
let i = 0;
const displayProject = () => {
  for (i; i < projects.length; i++) {
    //sidebar elements

    const createDiv = document.createElement('div');
    const createP = document.createElement('p');
    const createDelP = document.createElement('p');
    createP.innerText = projects[i].title;

    createP.setAttribute('id', i);

    const deleteProjectBtn = document.createElement('button');
    deleteProjectBtn.innerText = 'X';
    deleteProjectBtn.setAttribute('id', i);
    deleteProjectBtn.classList.add('trash');

    createDelP.appendChild(deleteProjectBtn);
    createDiv.appendChild(createP);
    // createDiv.appendChild(createDelP);
    createDiv.classList.add('sidebarDiv');
    projectList.appendChild(createDiv);

    //HOW TO CORRELATE i with projectTabs[i] I only want the current projectTabs[i] to get the class
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

    //delete button listener
    function removeProject() {
      const id = deleteProjectBtn.getAttribute('id');
      projects.pop(id);

      const selectedProject = document.querySelector(`[id="${id}"]`);
      selectedProject.remove();
      console.log(projects);
      displayProject();
    }

    deleteProjectBtn.addEventListener('click', removeProject);
    //highlight selected project maybe?
  }
};

export { addProject, todoList, projectHeader, projects };
