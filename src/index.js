import { createTodoForm } from "./scripts/view";
import { todoSubmit } from "./scripts/controller";
import { todos } from "./scripts/model";

createTodoForm();
todoSubmit();
console.log(todos);