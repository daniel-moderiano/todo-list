import { capitalize } from 'lodash';
import { addSingleListControl } from './controller';
import { todos, getFromStorage, deleteFromList, addToStorage, selectedList, removeList, changeList, getSelectedList } from './model';
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

  const todoDescription = document.createElement("p");
  todoDescription.classList.add("todo__description");
  todoDescription.textContent = todo.description;

  const todoDate = document.createElement("p");
  // Adjust styling to preserve symmetrical look when no date is selected
  todoDate.classList.add("todo__date");
  if (todo.dueDate === "") {
    todoDate.textContent = `Due --`;
    todoDate.style.color = "#808080";
  } else {
    todoDate.textContent = `Due ${ dateFormatter(todo.dueDate)}`;
  }

  const todoPriority = document.createElement("span");
  todoPriority.classList.add("todo__priority");
  todoPriority.textContent = todo.priority;

  const todoCheckbox = document.createElement("input");
  todoCheckbox.type = "checkbox";
  todoCheckbox.name = "task-complete";
  todoCheckbox.classList.add("todo__checkbox");
  todoCheckbox.setAttribute("aria-label", "task complete");

  // Add listener here
  todoCheckbox.addEventListener("change", () => {
    deleteFromList(getSelectedList(), todo.id);
  });
  todoCheckbox.addEventListener("change", addToStorage);
  todoCheckbox.addEventListener("change", () => {
    refreshTodoList();
  });

  const todoDeleteBtn = document.createElement("button");
  todoDeleteBtn.type = "button";
  todoDeleteBtn.classList.add("todo__delete");
  todoDeleteBtn.innerHTML = "&times;";

  // Add listenere here
  todoDeleteBtn.addEventListener("click", () => {
    deleteFromList(getSelectedList(), todo.id);
  });
  todoDeleteBtn.addEventListener("click", addToStorage);
  todoDeleteBtn.addEventListener("click", () => {
    refreshTodoList();
  });
   
  // Append todo elements to container (and li)
  todoListItem.appendChild(todoContainer);
  todoContainer.appendChild(todoCheckbox);
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

// Take output from HTML date picker, and format to a better representation for UI
function dateFormatter(dateStr) {
  let year = parseInt(dateStr.slice(0, 4));
  let month = parseInt(dateStr.slice(5, 7)) - 1;
  let day = parseInt(dateStr.slice(8, 10));
  return format(new Date(year, month, day), 'd MMM yyyy');
}


export { refreshTodoList, setSelectedClass, newListElement, removeListElement }
