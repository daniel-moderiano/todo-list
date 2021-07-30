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
  // Use inner width to determine if class should be toggled
  const sidebar = document.querySelector(".sidebar");
  const sidebarCollapse = document.querySelector(".sidebar__collapse");
  // Float will only be none if the mobile media query is active
  if (window.getComputedStyle(sidebar).float === "none") {
    document.querySelector(".sidebar").classList.toggle("sidebar--mobile");
    document.querySelector(".sidebar").classList.remove("sidebar--small");
    sidebarCollapse.classList.toggle("sidebar__collapse--left");
    sidebarCollapse.classList.remove("sidebar__collapse--right");
  } else {
    sidebarCollapse.classList.toggle("sidebar__collapse--right");
    sidebarCollapse.classList.remove("sidebar__collapse--left");
    document.querySelector(".sidebar").classList.toggle("sidebar--small");
  }
  
});
