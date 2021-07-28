import { refreshTodoList, svgTick } from "./scripts/view";
import { addModalControls, addSidebarControls, todoFormBtnContol, listModalBtnControls, todoControls, sidebarControls } from "./scripts/controller";
import { addToStorage, deleteFromList } from "./scripts/model";

// "main" style funciton to run appropriate functions on initial page load
function main() {
  addToStorage();
  refreshTodoList();
  addModalControls();
  addSidebarControls();
  sidebarControls();
  todoFormBtnContol();
  listModalBtnControls();
  todoControls();
}

main();
