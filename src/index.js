import { refreshTodoList, removeListElement, renderAllTodos, renderList, setSelectedClass } from "./scripts/view";
import { addAllListControls, addModalControls, addSidebarControls, todoFormBtnContol, listModalBtnControls } from "./scripts/controller";
import { todos, getFromStorage, addToStorage, lists, selectedList, removeList, changeList } from "./scripts/model";

// "main" style funciton to run appropriate functions on initial page load
function main() {
  addToStorage();
  refreshTodoList();
  addModalControls();
  addAllListControls();
  addSidebarControls();
  todoFormBtnContol();
  listModalBtnControls();
}

main();



