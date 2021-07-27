import { refreshTodoList } from "./scripts/view";
import { addAllListControls, addModalControls, addSidebarControls, todoFormBtnContol, listModalBtnControls, todoControls } from "./scripts/controller";
import { addToStorage } from "./scripts/model";

// "main" style funciton to run appropriate functions on initial page load
function main() {
  addToStorage();
  refreshTodoList();
  addModalControls();
  addAllListControls();
  addSidebarControls();
  todoFormBtnContol();
  listModalBtnControls();
  todoControls();
}

main();


