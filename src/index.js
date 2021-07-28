import { refreshTodoList } from "./scripts/view";
import { addModalControls, addSidebarControls, todoFormBtnContol, listModalBtnControls, todoControls, sidebarControls, addNewTaskControls } from "./scripts/controller";
import { addToStorage } from "./scripts/model";

// "main" style funciton to run appropriate functions on initial page load
function main() {
  addToStorage();
  refreshTodoList();
  addModalControls();
  addSidebarControls();
  addNewTaskControls();
  sidebarControls();
  todoFormBtnContol();
  listModalBtnControls();
  todoControls();
}

main();
