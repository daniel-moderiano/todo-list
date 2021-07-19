import { createTodoForm } from "./scripts/view";
import { addModalControls } from "./scripts/controller";
import { todos } from "./scripts/model";

// "main" style funciton to run appropriate functions from the page load
function main() {
  addModalControls();
}

main();