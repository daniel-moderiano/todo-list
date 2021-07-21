import { refreshTodoList, renderAllTodos } from "./scripts/view";
import { addModalControls, todoFormBtnContol } from "./scripts/controller";
import { todos, getFromStorage, addToStorage, lists } from "./scripts/model";

// "main" style funciton to run appropriate functions from the page load
function main() {
  addToStorage(todos);
  refreshTodoList();
  addModalControls();
  todoFormBtnContol();
}

main();