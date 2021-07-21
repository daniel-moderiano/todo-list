import { refreshTodoList, renderAllTodos, renderList } from "./scripts/view";
import { addListControls, addModalControls, todoFormBtnContol } from "./scripts/controller";
import { todos, getFromStorage, addToStorage, lists, selectedList } from "./scripts/model";

// "main" style funciton to run appropriate functions on initial page load
function main() {
  addToStorage();
  refreshTodoList(selectedList);
  addModalControls();
  addListControls();
  todoFormBtnContol();
}

main();