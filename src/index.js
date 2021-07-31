import { refreshTodoList, addSidebarCollapseControls } from "./scripts/view";
import { addModalControls, addSidebarControls, listModalBtnControls, addNewTaskControls, todoEventListeners, sidebarEventListeners } from "./scripts/controller";
import { addToStorage, checkStorage } from "./scripts/model";

// "main" style funciton to run appropriate functions on initial page load
function main() {
  checkStorage();
  // addToStorage();
  refreshTodoList();
  addModalControls();
  addSidebarControls();
  addNewTaskControls();
  listModalBtnControls();
  todoEventListeners();
  sidebarEventListeners();
  addSidebarCollapseControls();
}

main();



