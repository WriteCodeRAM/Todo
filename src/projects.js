const titleInput = document.getElementById('titleInput');
const descriptionInput = document.getElementById('descriptionInput');
const dueInput = document.getElementById('dateInput');
const priorityInput = document.getElementById('priorityInput');
const form = document.querySelector('form');
const projectList = document.querySelector('.projectList');
const todoSection = document.querySelector('.todo-section');
const todoList = document.querySelector('.todo-list');
const projectHeader = document.querySelector('.projectHeader');
let projects = [];

class Project {
  constructor(title, task) {
    this.title = title;
    this.task = 'click to add tasks';
  }
}

const addProject = () => {
  if (titleInput.value) {
    const newProject = new Project(titleInput.value);
    // newProject.toDo = 'test';
    projects.push(newProject);
    console.log(projects);
  }
  form.classList.add('hide');
  todoSection.innerText = '';

  displayProject();
};

let i = 0;
const displayProject = () => {
  for (i; i < projects.length; i++) {
    // projectList.innerText = projects[i].title;
    const createP = document.createElement('p');
    createP.innerText = projects[i].title;
    createP.classList.add(i);
    projectList.appendChild(createP);

    //not working how id like because I owuld like to add EventL like displayTodo(projects[i]) but this makes it run immediately not on click
    createP.addEventListener('click', displayTasks(projects[i]));
    createP.addEventListener('click', (e) => {
      console.log(e);
      //   console.log(projects.find(isTitle(e.target.innerText)));
      let title = e.target.innerText;
      for (let i = 0; i < projects.length; i++) {
        if (projects[i].title === title) {
          displayTasks(projects[i]);
        }
      }
    });

    // displayTodo();
  }
};

const addTodo = (project) => {};

const displayTasks = (project) => {
  const keys = Object.values(project);
  todoSection.innerText = '';

  for (let i = 0; i < keys.length; i++) {
    if (i == 0) {
      projectHeader.innerText = project.title;
      todoSection.appendChild(projectHeader);
    } else {
      const createP = document.createElement('p');
      createP.innerText = keys[i];
      createP.classList.add('task');
      todoSection.appendChild(createP);
    }
  }

  //   const createP = document.createElement('p');
  //   createP.innerText = project.task;
  //   createP.classList.add('task');

  //   projectHeader.innerHTML = project.title;
  //   todoList.appendChild(createP);
};

// function clearTodo() {
//   return (todoList.innerHTML = '');
// }
export default addProject;

// TODO MAKE IT SO THAT WHEN A PROJECT IS CREATED, USERS HAVE THE ABILITY TO ADD TASKS WITH THE CLICK OF A BUTTON
// MAKE BUTTON SHOW MODAL FORM
