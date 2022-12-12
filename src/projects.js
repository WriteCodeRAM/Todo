const titleInput = document.getElementById('titleInput');
const descriptionInput = document.getElementById('descriptionInput');
const dueInput = document.getElementById('dateInput');
const priorityInput = document.getElementById('priorityInput');
const form = document.querySelector('form');
const projectList = document.querySelector('.projectList');
let projects = [];

class Project {
  constructor(title) {
    this.title = title;
  }
}

const addProject = () => {
  console.log(titleInput);
  if (titleInput.value) {
    const newProject = new Project(titleInput.value);
    projects.push(newProject);
    console.log(projects);
  }
  form.classList.add('hide');

  displayProject();
};

let i = 0;
const displayProject = () => {
  for (i; i < projects.length; i++) {
    // projectList.innerText = projects[i].title;
    const createP = document.createElement('p');
    createP.innerText = projects[i].title;
    projectList.appendChild(createP);
  }
};

export default addProject;
