import { createTodoForm } from "./scripts/view";
import { addModalControls, btnEnable } from "./scripts/controller";
import { todos } from "./scripts/model";

// "main" style funciton to run appropriate functions from the page load
function main() {
  addModalControls();
}

while (document.querySelector(".add-modal").style.display == "block") {
  const todoFormBtn = document.querySelector(".todo-form__btn");
  if (document.querySelector("#todo-form__title").value != "") {
    todoFormBtn.disabled = false;
  } else {
    todoFormBtn.disabled = true;
  }
}

main();