import 'regenerator-runtime/runtime';
import { addToFirestore, addToStorage, checkStorage, getFromFirestore } from './scripts/model';
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
  checkStorage();
  addToStorage();
  addToFirestore();
  const data = await getFromFirestore();
  console.log(data);
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
