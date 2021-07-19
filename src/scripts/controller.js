import { todos, createTodo } from "./model";
import { createTodoForm } from "./view";

// Take DOM element (form) inputs and extract data into new todo
function getFormData() {
  let newTodo = createTodo(
    document.querySelector("#todo-form__title").value,
    document.querySelector("#todo-form__description").value,
    document.querySelector("#todo-form__date").value,
    document.querySelector("#todo-form__priority").value
  );
  return newTodo;
}

// Add new todo to master array
function addNewTodo() {
  let todoToAdd = getFormData();
  todos.push(todoToAdd);
  console.log(todoToAdd);
}

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
  }

  // Close the modal on outside click
  function outsideClick(e) {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  }

  // Get "add task" btn
  const todoFormBtn = document.querySelector(".todo-form__btn");

  // Listen for form submit/"add todo" btn click
  todoFormBtn.addEventListener("click", addNewTodo);
  todoFormBtn.addEventListener("click", closeModal);
}

// Enable add btn only if user enters a title for the todo
function btnEnable() {
  const todoFormBtn = document.querySelector(".todo-form__btn");
  if (document.querySelector("#todo-form__title").value != "") {
    todoFormBtn.disabled = false;
  } else {
    todoFormBtn.disabled = true;
  }
}


export { addModalControls, btnEnable }