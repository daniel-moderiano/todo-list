import { addSingleListControl, todoControls } from './controller';
import { getFromStorage, deleteFromList, addToStorage, removeList, changeList, getSelectedList } from './model';
import { format } from 'date-fns';

// Take todo object from master array and render to the DOM as todo list item
function renderTodo(todo) {
  // Get todosList element
  const todosList = document.querySelector(".todos__list");

  // Create list element and container for new todo
  const todoListItem = document.createElement("li");
  todoListItem.classList.add("todo");
  todoListItem.dataset.id = todo.id;

  const todoContainer = document.createElement("div");
  todoContainer.classList.add("todo__container");
  
  // Create elements to render all properties of the todo object
  const todoTitle = document.createElement("h5");
  todoTitle.classList.add("todo__title");
  todoTitle.textContent = todo.title;

  const todoDeleteBtn = document.createElement("button");
  todoDeleteBtn.type = "button";
  todoDeleteBtn.classList.add("todo__delete");
  todoDeleteBtn.innerHTML = "&times;";

  const todoDescription = document.createElement("p");
  todoDescription.classList.add("todo__description");
  todoDescription.classList.add("truncate");
  todoDescription.id = "todo__description";
  // Adjust styling to preserve symmetrical look when no description is selected
  if (todo.description === "") {
    todoDescription.style.display = "none";
  } else {
    todoDescription.textContent = todo.description;
  }
  todoDescription.addEventListener("click", () => {
    todoDescription.classList.toggle("truncate");
  });

  const todoDate = document.createElement("p");
  // Adjust styling to preserve symmetrical look when no date is selected
  todoDate.classList.add("todo__date");
  if (todo.dueDate === "") {
    todoDescription.style.paddingBottom = "0";
  } else {
    todoDate.textContent = `Due ${ dateFormatter(todo.dueDate)}`;
  }

  if (todo.dueDate === "" && todo.description === "") {
    todoTitle.style.paddingBottom = "0";
  }

  const todoPriority = document.createElement("span");
  todoPriority.classList.add("todo__priority");
  todoPriority.textContent = todo.priority;

  const todoCheckboxLabel = document.createElement("label");
  todoCheckboxLabel.setAttribute("for", "todo__checkbox");
  todoCheckboxLabel.classList.add("todo__label");

  const todoCheckbox = document.createElement("input");
  todoCheckbox.id = "todo__checkbox";
  todoCheckbox.type = "checkbox";
  todoCheckbox.name = "task-complete";
  todoCheckbox.classList.add("todo__checkbox");
  todoCheckbox.setAttribute("aria-label", "task complete");

  // Add listener here
  // todoCheckbox.addEventListener("change", () => {
  //   deleteFromList(getSelectedList(), todo.id);
  // });
  // todoCheckbox.addEventListener("change", addToStorage);
  // todoCheckbox.addEventListener("change", () => {
  //   refreshTodoList();
  // });
  
  // Append todo elements to container (and li)
  todoListItem.appendChild(todoContainer);

  todoContainer.appendChild(todoCheckbox);
  todoContainer.appendChild(todoCheckboxLabel);
  todoContainer.appendChild(todoTitle);
  todoContainer.appendChild(todoDescription);
  todoContainer.appendChild(todoDate);
  todoContainer.appendChild(todoPriority);
  todoContainer.appendChild(todoDeleteBtn);

  // Insert newly rendered todo into the main todo list
  todosList.appendChild(todoListItem);
}

function renderList() {
  let lists = getFromStorage();
  lists[getSelectedList()].forEach(function(todo) {
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
  changeCurrentListTitle();
  renderList();
}

// Set the --selected modifier class exclusively on the currently selected list element
function setSelectedClass(listItem) {
  let listNames = document.querySelectorAll(".list-name");
  listNames.forEach(function(list) {
    if (list.dataset.name === listItem.dataset.name) {
      if (!list.classList.contains("list-name--selected")) {
        list.classList.toggle("list-name--selected");
      }
    } else {
      list.classList.remove("list-name--selected");
    }
  });
}

// Add a new list element in the sidebar
function newListElement(list) {
  const li = document.createElement("li");
  const name = document.createElement("h4");
  const btn = document.createElement("button");
  const icon = document.createElement("img");

  icon.src = "../src/icons/list.svg";
  icon.classList.add("icon");
  li.classList.add("list-item")

  name.textContent = list;
  name.classList.add("list-name");
  btn.innerHTML = "&times;"
  btn.classList.add("list-btn")
  btn.dataset.name = list;
  li.dataset.name = list;
  name.dataset.name = list;
  btn.addEventListener("click", (e) => {
    removeListElement(e.target);
    removeList(e.target.dataset.name);
    addToStorage();
    changeList("Inbox");
    setSelectedClass(document.querySelector("#inbox"));
    refreshTodoList();
  });

  addSingleListControl(li);
  li.appendChild(icon);
  li.appendChild(name);
  li.appendChild(btn);
  document.querySelector(".added-lists__list").appendChild(li);
}

// Remove a list element from the sidebar
function removeListElement(btn) {
  btn.parentNode.remove();
}

// Update the currently viewed list title in main section
function changeCurrentListTitle() {
  document.querySelector(".todos__current-list").textContent = getSelectedList();
}

// Take output from HTML date picker and format the following: 12/12/2000 => 12 Dec 2000
function dateFormatter(dateStr) {
  let year = parseInt(dateStr.slice(0, 4));
  let month = parseInt(dateStr.slice(5, 7)) - 1;
  let day = parseInt(dateStr.slice(8, 10));
  return format(new Date(year, month, day), 'd MMM yyyy');
}

export { 
  refreshTodoList, 
  setSelectedClass, 
  newListElement, 
  removeListElement,
  deleteFromList
}
