import { refreshTodoList, addSidebarCollapseControls, refreshSidebarLists } from './scripts/view';
import { addModalControls, addSidebarControls, listModalBtnControls, addNewTaskControls, todoEventListeners, sidebarEventListeners, viewModalBtnControls } from './scripts/controller';
import { addToStorage, checkStorage } from './scripts/model';

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
