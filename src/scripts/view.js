import { getFormData, addNewTodo, closeTodoForm, todoFormBtnContol } from "./controller";

// Take todo object from master array and render to the DOM as todo list item
function renderTodo() {
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

  const todoDescription = document.createElement("p");
  todoDescription.classList.add("todo__descirption");

  const todoDate = document.createElement("p");
  todoDate.classList.add("todo__date");

  const todoPriority = document.createElement("span");
  todoPriority.classList.add("todo__priority");

  const todoCheckbox = document.createElement("input");
  todoCheckbox.type = "checkbox";
  todoCheckbox.name = "task-complete";
   
  // Append todo elements to container (and li)
  todoListItem.appendChild(todoContainer);
  todoContainer.appendChild(todoCheckbox);
  todoContainer.appendChild(todoTitle);
  todoContainer.appendChild(todoDescription);
  todoContainer.appendChild(todoDate);
  todoContainer.appendChild(todoPriority);

  // Insert newly rendered todo into the main todo list
  todosList.appendChild(todoListItem);
  console.log("Render todo run");
}

export { renderTodo };