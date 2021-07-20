import { createTodoForm } from "./scripts/view";
import { addModalControls, todoFormBtnContol, renderAllTodos } from "./scripts/controller";
import { todos, getFromStorage, addToStorage } from "./scripts/model";

// "main" style funciton to run appropriate functions from the page load
function main() {
  addToStorage(todos);
  renderAllTodos(getFromStorage());
  addModalControls();
  todoFormBtnContol();
}

main();