import 'regenerator-runtime/runtime';
import { checkFirestore } from './scripts/model';
import { refreshTodoList, addSidebarCollapseControls, refreshSidebarLists } from './scripts/view';
import {
  addModalControls,
  addSidebarControls,
  listModalBtnControls,
  addNewTaskControls,
  todoEventListeners,
  sidebarEventListeners,
  viewModalBtnControls,
} from './scripts/controller';

// "main" style funciton to run appropriate functions on initial page load
async function main() {
  // Ensure the lists variable withing model is up-to-date with firestore backend before proceeding
  await checkFirestore();
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
