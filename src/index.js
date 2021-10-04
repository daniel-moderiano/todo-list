import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { refreshTodoList, addSidebarCollapseControls, refreshSidebarLists } from './scripts/view';
import { addModalControls, addSidebarControls, listModalBtnControls, addNewTaskControls, todoEventListeners, sidebarEventListeners, viewModalBtnControls } from './scripts/controller';
import { addToStorage, checkStorage } from './scripts/model';
import database from './scripts/firebase';

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

// Grab data once from firestore db and log to console
(async () => {
  const testCollection = collection(database, 'test');
  const q = query(testCollection, where('name', '==', 'sam'));

  const querySnapshot = await getDocs(q);
  console.log(querySnapshot);

  querySnapshot.forEach((doc) => {
    console.log(doc.id, '=>', doc.date());
  });
})().catch(e => {
  // Error handling
});

main();
