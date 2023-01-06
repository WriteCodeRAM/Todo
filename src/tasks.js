import { add } from 'lodash';
import { todoList, projectHeader, projects } from './projects';

class Task {
  constructor(title, dueDate, description, priority, completed) {
    this.title = title;
    this.dueDate = dueDate;
    this.description = description;
    this.priority = priority;
    this.completed;
  }
}

//get the task form and its inputs to work properly
function showForm(project, index) {
  const form = document.createElement('form');
  form.innerHTML = `<h2>New Task</h2>
          
          
    <label for="Task Name">*Task Name</label>
    
       <input type="text" name="task" id="task" required minlength="2" maxlength="28" value="clean dishes">
    
    <label for="dueDate">*Due date</label>
    
       <input type="date" name="date" id="date" required>
       
    
       <label for="Description">*Description</label>
       <input type="text" name="description" id="description" required minlength="1" maxlength="35" value="use extra soap">
    
        <label for="priority">*Priority</label>
        <select name="priority" id="priority"> 
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
    </select>
    
    
     <button class='submit' type="button" id="taskSubmit">Create task!</button>`;

  form.classList.add('modal');
  form.classList.remove('hide');
  todoList.appendChild(form);
  const taskTitle = document.querySelector('#task');
  const dateInput = document.querySelector('#date');
  const priorityInput = document.querySelector('#priority');
  const descriptionInput = document.querySelector('#description');
  const taskSubmitBtn = document.querySelector('#taskSubmit');

  taskSubmitBtn.addEventListener('click', () => {
    addTask(
      index,
      taskTitle.value,
      dateInput.value,
      priorityInput.value,
      descriptionInput.value
    );
    form.classList.add('hide');
  });

  //need to find a way for the index to get called with disp[layTask]
  taskSubmitBtn.addEventListener('click', () => displayTasks(project, index));

  return { taskTitle, taskSubmitBtn };
}

//shot in the dark, give each project index its own addTaskBTtn ?
// const createAddTaskBtn = () => {
//   //create addTaskBtn
//   let buttons = [];
//   for (let i = 0; i < projects.length; i++) {
//     const button = document.createElement('button');
//     button.innerText = 'Add Task';
//     button.classList.add('newTaskBtn');

//     button.setAttribute('id', i);
//     buttons.push(button);
//   }
//   return buttons;
// };

//display task for specific project runs when user clicks on the project name in sidebar
//could use index parameter when it comes to editing the task maybe
const displayTasks = (project, index) => {
  let buttons = [];

  //testing
  for (let i = 0; i < projects.length; i++) {
    const button = document.createElement('button');
    button.innerText = 'Add Task';
    button.classList.add('newTaskBtn');

    button.setAttribute('id', i);
    button.addEventListener('click', () => {
      showForm(project, i);
    });

    buttons.push(button);
  }

  //clear todolist
  todoList.innerText = ``;
  //set project header
  projectHeader.innerText = project.title;
  todoList.appendChild(projectHeader);

  //displays task for project
  project.tasks.forEach((task) => {
    //creates p for details of task
    const createP = document.createElement('p');

    createP.innerText = `${task.title}, ${task.dueDate}, ${task.priority}`;
    createP.classList.add('task');

    //compelete task components
    const checkDiv = document.createElement('div');
    const checkbox = document.createElement('input');
    const checkSpan = document.createElement('span');

    if (task.priority === 'high' || task.description === 'High') {
      checkSpan.classList.add('high');
    } else if (task.description === 'Medium') {
      checkSpan.classList.add('medium');
    } else {
      checkSpan.classList.add('low');
    }

    checkbox.type = 'checkbox';
    checkbox.name = 'name';
    checkbox.value = 'value';
    checkbox.id = 'round';

    // completed task logic
    if (task.completed == 'complete') {
      createP.classList.add('complete');
      task.completed = 'complete';
      checkbox.classList.add('comp');
    }
    checkbox.addEventListener('click', () => {
      if (checkbox.checked) {
        createP.classList.add('complete');
        task.completed = 'complete';
        checkbox.classList.add('comp');
      } else {
        createP.classList.remove('complete');
        checkbox.classList.remove('comp');
        task.completed = 'incomplete';
      }
    });
    checkSpan.appendChild(checkbox);

    checkDiv.appendChild(checkSpan);
    // const descriptionP = document.createElement('p');
    // descriptionP.innerText = task.priority;

    // createP.appendChild(descriptionP);
    createP.appendChild(checkDiv);
    todoList.appendChild(createP);
  });

  //how can I get this to work multiple times with index
  //works when I use buttons[0] for the first project...
  //I want each project to have its own button
  todoList.appendChild(buttons[index]);
};

//ADD TASK LOGIC
const addTask = (index, taskName, dueDate, description, priority) => {
  if (taskName !== '' && dueDate && description && priority) {
    const newTask = new Task(taskName, dueDate, description, priority);

    //works the first time, but when trying to add a new task it doesnt bc it cant reference the index anymore
    projects[index].tasks.push(newTask);
    displayTasks(projects[index]);
    // } else {
    //give an error about an empty field or sum shit can probably used 'required' to avoid this
  }
};
// };

export { displayTasks };
