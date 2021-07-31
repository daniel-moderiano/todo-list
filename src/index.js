import { refreshTodoList, addSidebarCollapseControls, renderSidebarLists, refreshSidebarLists, svgClose } from "./scripts/view";
import { addModalControls, addSidebarControls, listModalBtnControls, addNewTaskControls, todoEventListeners, sidebarEventListeners, displayModal, viewModalBtnControls } from "./scripts/controller";
import { addToStorage, checkStorage, getLists, getSelectedList } from "./scripts/model";

// "main" style funciton to run appropriate functions on initial page load
function main() {
  checkStorage();
  addToStorage();
  refreshSidebarLists();
  refreshTodoList();
  addModalControls();
  addSidebarControls();
  addNewTaskControls();
  listModalBtnControls();
  viewModalBtnControls();
  todoEventListeners();
  sidebarEventListeners();
  addSidebarCollapseControls();
}

main();
