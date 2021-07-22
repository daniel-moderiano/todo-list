import { refreshTodoList, removeListElement, renderAllTodos, renderList } from "./scripts/view";
import { addListControls, addModalControls, addSidebarControls, todoFormBtnContol, listModalBtnControls } from "./scripts/controller";
import { todos, getFromStorage, addToStorage, lists, selectedList } from "./scripts/model";

// "main" style funciton to run appropriate functions on initial page load
function main() {
  addToStorage();
  refreshTodoList(selectedList);
  addModalControls();
  addListControls();
  // Dummy code to be removed later
  document.querySelector("#pro-btn").addEventListener("click", (e) => {
    removeListElement(e.target);
  });

  addSidebarControls();
  todoFormBtnContol();
  listModalBtnControls();
}

main();