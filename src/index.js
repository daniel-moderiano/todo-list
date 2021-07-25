import { refreshTodoList, removeListElement, renderAllTodos, renderList, setSelectedClass } from "./scripts/view";
import { addAllListControls, addModalControls, addSidebarControls, todoFormBtnContol, listModalBtnControls } from "./scripts/controller";
import { todos, getFromStorage, addToStorage, lists, selectedList, removeList, changeList } from "./scripts/model";
import { format } from 'date-fns';

// "main" style funciton to run appropriate functions on initial page load
function main() {
  addToStorage();
  refreshTodoList();
  addModalControls();
  addAllListControls();
  addSidebarControls();
  todoFormBtnContol();
  listModalBtnControls();
  
  let date = '2021-07-27';
  console.log(dateFormatter(date));

}

main();

// Take output from HTML date picker, and format to a better representation for UI
function dateFormatter(dateStr) {
  let year = parseInt(dateStr.slice(0, 4));
  let month = parseInt(dateStr.slice(5, 7)) - 1;
  let day = parseInt(dateStr.slice(8, 10));
  return format(new Date(year, month, day), 'd MMM yyyy');
}

