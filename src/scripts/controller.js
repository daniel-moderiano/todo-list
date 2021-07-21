import { todos, createTodo, addToStorage, getFromStorage, pushTodo, pushToList, lists, changeList, selectedList } from "./model";
import { renderTodo, refreshTodoList, setSelectedClass, createInputElement, appendInput } from "./view";

// Take DOM element (form) inputs and extract data into new todo
function getFormData() {
  let newTodo = createTodo(
    document.querySelector("#todo-form__title").value,
    document.querySelector("#todo-form__description").value,
    document.querySelector("#todo-form__date").value,
    document.querySelector("#todo-form__priority").value,
    document.querySelector("#todo-form__list").value
  );
  return newTodo;
}

// Add new todo to specified list
function addNewTodo() {
  let todoToAdd = getFormData();
  pushToList(todoToAdd, todoToAdd.list);
}

// Add controls to modal buttons (open/close, outside click, etc)
function addModalControls() {
  // Get modal
  const modal = document.querySelector(".add-modal");

  // Get close btn
  const closeBtn = document.querySelector(".add-modal__close");
  closeBtn.addEventListener("click", closeModal);

  // Get "New Todo" btn
  const newTodo = document.querySelector(".header__btn");
  newTodo.addEventListener("click", clearInputs);
  newTodo.addEventListener("click", displayModal);

  // Get "add task" btn
  const todoFormBtn = document.querySelector(".todo-form__btn");

  // Listen for outside click
  window.addEventListener("click", outsideClick);
  
  // Display the add-modal when user clicks "New Todo"
  function displayModal() {
    modal.style.display = "block";
  }

  // Close the modal
  function closeModal() {
    modal.style.display = "none";
  }

  // Clear all inputs in the modal form
  function clearInputs() {
    document.querySelector("#todo-form__title").value = "";
    document.querySelector("#todo-form__description").value = "";
    document.querySelector("#todo-form__date").value = "";
    document.querySelector("#todo-form__priority").value = "";
    todoFormBtn.disabled = true;
  }

  // Close the modal on outside click
  function outsideClick(e) {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  }

  // Get current list to be refreshed on submit
  const currentList = document.querySelector("#todo-form__list").value

  // Listen for form submit/"add todo" btn click
  todoFormBtn.addEventListener("click", addNewTodo);
  todoFormBtn.addEventListener("click", closeModal);
  todoFormBtn.addEventListener("click", addToStorage);
  todoFormBtn.addEventListener("click", () => {
    refreshTodoList(currentList);
  });
}

// Add submission controls and input verification to the todoForm submit form
function todoFormBtnContol(params) {
  // Get form input
  const todoFormTitle = document.querySelector("#todo-form__title");

  // Get form add task btn
  const todoFormBtn = document.querySelector(".todo-form__btn");

  // Det default btn state to disabled
  todoFormBtn.disabled = true;

  // Listen for user typing or entering data into input
  todoFormTitle.addEventListener("input", btnEnable);

  btnEnable();
}

// Enable add btn only if user enters a title for the todo
function btnEnable() {
  const todoFormBtn = document.querySelector(".todo-form__btn");
  if (document.querySelector("#todo-form__title").value.trim() === "") {
    todoFormBtn.disabled = true;
  } else {
    todoFormBtn.disabled = false;
  }
}

// Add event listeners for list names in sidebar
function addListControls() {
  let listNames = document.querySelectorAll(".list-name");
  listNames.forEach(function(list) {
    list.addEventListener("click", () => {
      changeList(list.dataset.name);
      setSelectedClass(list);
      refreshTodoList(selectedList);
    });
  });
}

// Add event listeners to sidebar add list btn
function addSidebarControls() {
  document.querySelector(".add-list__btn").addEventListener("click", () => {
    appendInput(createInputElement());
  });
}

// TODO: some kind of checkbox animation before deleting todo

export { addModalControls, todoFormBtnContol, addListControls, addSidebarControls }