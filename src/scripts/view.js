import { todos, getFromStorage } from './model';


// Take todo object from master array and render to the DOM as todo list item
function renderTodo(todo) {
  // Get todosList element
  const todosList = document.querySelector(".todos__list");

  // Create list element and container for new todo
  const todoListItem = document.createElement("li");
  todoListItem.classList.add("todo");

  const todoContainer = document.createElement("div");
  todoContainer.classList.add("todo__container");
  
  // Create elements to render all properties of the todo object
  const todoTitle = document.createElement("h5");
  todoTitle.classList.add("todo__title");
  todoTitle.textContent = todo.title;

  const todoDescription = document.createElement("p");
  todoDescription.classList.add("todo__descirption");
  todoDescription.textContent = todo.description;

  const todoDate = document.createElement("p");
  todoDate.classList.add("todo__date");
  todoDate.textContent = todo.date;

  const todoPriority = document.createElement("span");
  todoPriority.classList.add("todo__priority");
  todoPriority.textContent = todo.priority;

  const todoCheckbox = document.createElement("input");
  todoCheckbox.type = "checkbox";
  todoCheckbox.name = "task-complete";
  todoCheckbox.setAttribute("aria-label", "task complete");
   
  // Append todo elements to container (and li)
  todoListItem.appendChild(todoContainer);
  todoContainer.appendChild(todoCheckbox);
  todoContainer.appendChild(todoTitle);
  todoContainer.appendChild(todoDescription);
  todoContainer.appendChild(todoDate);
  todoContainer.appendChild(todoPriority);

  // Insert newly rendered todo into the main todo list
  todosList.appendChild(todoListItem);
}

// Render all todos function to be called on page load, on todo add, and on todo delete (or swithcing of list view)
function renderAllTodos() {
  getFromStorage().forEach(function(todo) {
    renderTodo(todo);
  });
}

// Visibly remove all current todos li items from the DOM
function clearAllTodos() {
  const todosList = document.querySelector(".todos__list");
  while (todosList.lastElementChild) {
    todosList.removeChild(todosList.lastElementChild);
  }
}

// Update the visible todo list by sequentially clearing and re-rendering all todos
// Note: a more effective method would be to only modify individual todos being affected, however this adds complexity and should have little impact on a small-scale application
function refreshTodoList() {
  clearAllTodos();
  renderAllTodos();
}

export { renderTodo, renderAllTodos, clearAllTodos, refreshTodoList };