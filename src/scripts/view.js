import { getFromStorage, getSelectedList, getLists } from './model';
import { format } from 'date-fns';

// Take todo object from master array and render to the DOM as todo list item
function renderTodo(todo) {
  const todosList = document.querySelector(".todos__list");
  const todoListItem = document.createElement("li");
  const todoContainer = document.createElement("div");
  const todoTitle = document.createElement("h5");
  const todoDeleteBtn = document.createElement("button");
  const todoDescription = document.createElement("p");
  const todoDate = document.createElement("p");
  const todoPriority = document.createElement("span");
  const checkboxContainer = document.createElement("div");
  const todoCheckboxLabel = document.createElement("label");
  const todoCheckbox = document.createElement("input");
  const todoCheckboxTick = svgTick();

  todoListItem.classList.add("todo");
  todoListItem.dataset.id = todo.id;
  
  todoContainer.classList.add("todo__container");
   
  todoTitle.classList.add("todo__title");
  todoTitle.textContent = todo.title;
  
  todoDeleteBtn.type = "button";
  todoDeleteBtn.classList.add("todo__delete");
  todoDeleteBtn.innerHTML = "&times;";
  todoDeleteBtn.dataset.id = todo.id;

  todoDescription.classList.add("todo__description");
  todoDescription.classList.add("truncate");
  todoDescription.id = "todo__description";

  todoDate.classList.add("todo__date");

  todoPriority.classList.add("todo__priority");
  todoPriority.textContent = todo.priority;

  checkboxContainer.className = "checkbox-container";
  
  todoCheckboxLabel.setAttribute("for", "todo__checkbox");
  todoCheckboxLabel.classList.add("todo__label");
  
  todoCheckbox.id = "todo__checkbox";
  todoCheckbox.type = "checkbox";
  todoCheckbox.classList.add("todo__checkbox");
  todoCheckbox.setAttribute("aria-label", "Mark task as completed");
  todoCheckbox.dataset.id = todo.id;
   
  todoCheckboxTick.classList.add("tick");

  // Adjust overall todo styling to preserve symmetrical look when no description is provided
  if (todo.description === "") {
    todoDescription.style.display = "none";
  } else {
    todoDescription.textContent = todo.description;
  }
  todoDescription.addEventListener("click", () => {
    todoDescription.classList.toggle("truncate");
  });

  // Adjust overall todo styling to preserve symmetrical look when no date is provided
  if (todo.dueDate === "") {
    todoDescription.style.paddingBottom = "0";
  } else {
    todoDate.textContent = `Due ${ dateFormatter(todo.dueDate)}`;
  }

  // Adjust overall todo styling to preserve symmetrical look when no date or description are provided
  if (todo.dueDate === "" && todo.description === "") {
    todoTitle.style.paddingBottom = "0";
  }

  // Append todo elements to container (and li)
  todoListItem.appendChild(todoContainer);
  checkboxContainer.appendChild(todoCheckboxLabel);
  checkboxContainer.appendChild(todoCheckboxTick);
  checkboxContainer.appendChild(todoCheckbox);
  todoContainer.appendChild(checkboxContainer);
  todoContainer.appendChild(todoTitle);
  todoContainer.appendChild(todoDescription);
  todoContainer.appendChild(todoDate);
  todoContainer.appendChild(todoPriority);
  todoContainer.appendChild(todoDeleteBtn);

  // Insert newly rendered todo into the main todo list
  todosList.appendChild(todoListItem);
}

// Renders only a single list from storage (the currently selected) in the form of a list of todo items
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

// Update the currently viewed list title in main section
function changeCurrentListTitle() {
  document.querySelector(".todos__current-list").textContent = getSelectedList();
}

// Update the visible todo list by sequentially clearing and re-rendering all todos
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

  li.classList.add("list-item");
  li.dataset.name = list;

  name.textContent = list;
  name.classList.add("list-name");
  name.dataset.name = list;

  btn.innerHTML = "&times;"
  btn.classList.add("list-btn")
  btn.dataset.name = list;
  
  li.appendChild(icon);
  li.appendChild(name);
  li.appendChild(btn);
  document.querySelector(".added-lists__list").appendChild(li);
}

// Take output from HTML date picker and format the following: 12/12/2000 => 12 Dec 2000
function dateFormatter(dateStr) {
  let year = parseInt(dateStr.slice(0, 4));
  let month = parseInt(dateStr.slice(5, 7)) - 1;
  let day = parseInt(dateStr.slice(8, 10));
  return format(new Date(year, month, day), 'd MMM yyyy');
}

// Create a tick-shaped SVG element (note, must use createElementNS as path and SVG are XML, not HTML formats)
function svgTick() {
  let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  let path = document.createElementNS('http://www.w3.org/2000/svg', "path");

  svg.setAttribute("width", "24");
  svg.setAttribute("height", "24");

  path.setAttribute("fill", "currentColor");
  path.setAttribute("d", "M11.23 13.7l-2.15-2a.55.55 0 0 0-.74-.01l.03-.03a.46.46 0 0 0 0 .68L11.24 15l5.4-5.01a.45.45 0 0 0 0-.68l.02.03a.55.55 0 0 0-.73 0l-4.7 4.35z");

  svg.appendChild(path);
  return svg;
}

// Dynamically fill the add modal select element with options matching the currently available lists
function addListsToDropdown() {
  const dropdown = document.querySelector("#todo-form__list");
  for (const list in getLists()) {
    const option = document.createElement("option");
    option.value = list;
    option.textContent = list;
    option.className = "list-option";
    dropdown.appendChild(option);
  }
}

// Dynamically remove all lists from the add modal select element
function deleteListsFromDropdown() {
  const dropdown = document.querySelector("#todo-form__list");
  while (dropdown.lastElementChild) {
    dropdown.removeChild(dropdown.lastElementChild);
  }
}

// When the user is on a particular list view, it is easy to overlook the list dropdown menu and assume it is set to their current list. This function ensures that is the case. 
function changeSelectedOption() {
  const options = document.querySelectorAll(".list-option");
  options.forEach(function(option) {
    if (option.value === getSelectedList()) {
      option.setAttribute("selected", "");
    }
  });
}

function refreshListDropdown() {
  deleteListsFromDropdown();
  addListsToDropdown();
  changeSelectedOption();
}


export { 
  refreshTodoList, 
  setSelectedClass, 
  newListElement, 
  svgTick,
  refreshListDropdown
}
