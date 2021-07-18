import { todos, createTodo } from "./model";
import { createTodoForm } from "./view";

// Create/display the todoForm visible when user clicks "New Todo"
function openTodoForm() {
  const newTodo = document.querySelector(".header__btn");
  newTodo.addEventListener("click", createTodoForm);
}

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


export { openTodoForm, getFormData, closeTodoForm }