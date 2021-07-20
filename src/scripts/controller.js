import { todos, createTodo } from "./model";

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

  // Listen for form submit/"add todo" btn click
  todoFormBtn.addEventListener("click", addNewTodo);
  todoFormBtn.addEventListener("click", closeModal);
}

function todoFormBtnContol(params) {
  // Get form input
  const todoFormTitle = document.querySelector("#todo-form__title");

  // Get form add task btn
  const todoFormBtn = document.querySelector(".todo-form__btn");

  // Det default btn state to disabled
  todoFormBtn.disabled = true;

  // Listen for user typing or entering data into input
  todoFormTitle.addEventListener("input", btnEnable);
  // todoFormTitle.addEventListener("paste", () => {
  //   console.log("pasted");
  //   console.log(document.querySelector("#todo-form__title").value);
  // });

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


export { addModalControls, todoFormBtnContol }