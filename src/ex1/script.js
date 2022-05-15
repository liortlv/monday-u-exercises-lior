const addTaskButton = document.querySelector(".add-task");
const taskInput = document.querySelector("#task-text");
const allTasksContainer = document.querySelector(".all-tasks-container");

addTaskButton.addEventListener("click", () => {
   addTask();
});

// Adds the user task input to the tasks list
function addTask() {
   const taskContainer = createTaskContainer();
   const newTask = createNewTask(taskContainer);
   const deleteTask = createDeleteTaskButton(taskContainer);
   addHoverReveal(taskContainer, deleteTask, newTask);
   taskInput.value = "";
}

// Creates container which holds task box and delete button
function createTaskContainer() {
   const taskContainer = document.createElement("div");
   taskContainer.classList.add("task-container");
   allTasksContainer.append(taskContainer);

   return taskContainer;
}

// Creates task box and click alert event to it
function createNewTask(taskContainer) {
   const newTask = document.createElement("div");
   newTask.textContent = taskInput.value;
   newTask.classList.add("task");
   taskContainer.append(newTask);

   newTask.addEventListener("click", () => {
      alert(newTask.textContent);
   });

   return newTask;
}

// Creates the delete button next to each task
function createDeleteTaskButton(taskContainer) {
   const deleteTask = document.createElement("div");
   deleteTask.textContent = "D";
   deleteTask.classList.add("delete");
   taskContainer.append(deleteTask);

   deleteTask.addEventListener("click", () => {
      taskContainer.remove();
   });

   return deleteTask;
}

// Adds mouseover events to reveal the delete button only when user hovers
function addHoverReveal(taskContainer, deleteTask, newTask) {
   taskContainer.addEventListener("mouseover", () => {
      deleteTask.style.display = "flex";
      newTask.style.width = "26rem";
   });

   taskContainer.addEventListener("mouseout", () => {
      deleteTask.style.display = "none";
      newTask.style.width = "29.5rem";
   });
}
