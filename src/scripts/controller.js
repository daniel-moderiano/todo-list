import { todos, createTodo } from "./model";
import { createTodoForm } from "./view";


// Dispose of the todoForm once info has been gathered
function closeTodoForm() {
  document.querySelector("form").remove();
}

 // Take DOM element (form) inputs and extract data
function getFormData() {
  let newTodo = createTodo(
    document.querySelector("#title").value,
    document.querySelector("#description").value,
    document.querySelector("#date").value,
    document.querySelector("#priority").value
  );
  todos.push(newTodo);
  console.log(newTodo);
}

function addModalControls() {
  // Get modal
  const modal = document.querySelector(".add-modal");

  // Get close btn
  const closeBtn = document.querySelector(".add-modal__close");
  closeBtn.addEventListener("click", closeModal);

  // Get "New Todo" btn
  const newTodo = document.querySelector(".header__btn");
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

  // Close the modal on outside click
  function outsideClick(e) {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  }
}




export { addModalControls, getFormData }