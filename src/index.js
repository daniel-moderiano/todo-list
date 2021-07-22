import { refreshTodoList, removeListElement, renderAllTodos, renderList, setSelectedClass } from "./scripts/view";
import { addListControls, addModalControls, addSidebarControls, todoFormBtnContol, listModalBtnControls } from "./scripts/controller";
import { todos, getFromStorage, addToStorage, lists, selectedList, removeList, changeList } from "./scripts/model";

// "main" style funciton to run appropriate functions on initial page load
function main() {
  addToStorage();
  refreshTodoList(selectedList);
  addModalControls();
  addListControls();
  // Dummy code to be removed later
  document.querySelector("#pro-btn").addEventListener("click", (e) => {
    removeListElement(e.target);
    removeList("projects");
    addToStorage();
    changeList("inbox");
    setSelectedClass(document.querySelector(".default-lists__inbox"));
    refreshTodoList();
  });

  addSidebarControls();
  todoFormBtnContol();
  listModalBtnControls();
}

main();