import { todoList, projectHeader } from './projects';

//shows form for new task when user clicks btn
const createTaskForm = (() => {
  const taskForm = document.createElement('form');

  const addTaskBtn = document.createElement('button');
  addTaskBtn.classList.add('submitButton');
  taskForm.classList.add('modal');
  addTaskBtn.innerText = 'Add Task';

  //new task form
  addTaskBtn.addEventListener('click', () => {
    todoList.appendChild(createTaskForm.taskForm);
  });

  //   addTaskBtn.addEventListener('click', () => {
  //     todoList.appendChild(createTaskForm.taskForm);
  //   });

  taskForm.innerHTML = `<h2>New Task</h2>
          
          
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
      
      
       <button class='submit' type="button" id="submit">Create task!</button>`;

  return { taskForm, addTaskBtn };
})();

//display task for specific project runs when user clicks on the project name in sidebar
const displayTasks = (project) => {
  const keys = Object.values(project);

  //logic to display each task
  for (let i = 0; i < keys.length; i++) {
    if (i == 0) {
      todoList.innerText = '';
      projectHeader.innerText = project.title;
      todoList.appendChild(projectHeader);
    } else {
      const createP = document.createElement('p');
      createP.innerText = keys[i];
      createP.classList.add('task');
      todoList.appendChild(createP);
    }
  }
  todoList.appendChild(createTaskForm.addTaskBtn);
};

const addTask = (project) => {};

export { createTaskForm, displayTasks };
