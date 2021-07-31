import { refreshTodoList, addSidebarCollapseControls, renderSidebarLists } from "./scripts/view";
import { addModalControls, addSidebarControls, listModalBtnControls, addNewTaskControls, todoEventListeners, sidebarEventListeners } from "./scripts/controller";
import { addToStorage, checkStorage, getLists, getSelectedList } from "./scripts/model";

// "main" style funciton to run appropriate functions on initial page load
function main() {
  checkStorage();
  addToStorage();
  renderSidebarLists();
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


document.querySelector("#refresh").addEventListener("click", () => {
  console.log(getLists(), getSelectedList());
  renderSidebarLists();
});
