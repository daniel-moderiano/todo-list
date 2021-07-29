import { refreshTodoList } from "./scripts/view";
import { addModalControls, addSidebarControls, listModalBtnControls, addNewTaskControls, todoEventListeners, sidebarEventListeners } from "./scripts/controller";
import { addToStorage } from "./scripts/model";

// "main" style funciton to run appropriate functions on initial page load
function main() {
  addToStorage();
  refreshTodoList();
  addModalControls();
  addSidebarControls();
  addNewTaskControls();
  listModalBtnControls();
  todoEventListeners();
  sidebarEventListeners();
}

main();

document.querySelector(".sidebar__collapse").addEventListener("click", function() {
  // document.querySelector(".main").classList.toggle("main--large");
  // document.querySelector(".main").classList.toggle("main--small");
  document.querySelector(".sidebar").classList.toggle("sidebar--large");
  document.querySelector(".sidebar").classList.toggle("sidebar--small");
});
