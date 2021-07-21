import { refreshTodoList, renderAllTodos, renderList } from "./scripts/view";
import { addModalControls, todoFormBtnContol } from "./scripts/controller";
import { todos, getFromStorage, addToStorage, lists } from "./scripts/model";

// "main" style funciton to run appropriate functions on initial page load
function main() {
  addToStorage();
  refreshTodoList();
  addModalControls();
  todoFormBtnContol();
}

main();