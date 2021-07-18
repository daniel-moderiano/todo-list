import { todos, createTodo } from "./model"

// Listen for todo form submit
function todoSubmit() {
  const submitBtn = document.querySelector("button[type='submit']");
  submitBtn.addEventListener("click", function(e) {
    e.preventDefault();
    getFormData();
    console.log(todos);
  });
}

 // Take DOM element input (form) and extract data
function getFormData() {
  // let title = document.querySelector("#title").value;
  // let description = document.querySelector("#description").value;
  // let priority = document.querySelector("#priority").value;
  // let dueDate = document.querySelector("#date").value;
  // return [title, description, priority, dueDate];
  let newTodo = createTodo(
    document.querySelector("#title").value,
    document.querySelector("#description").value,
    document.querySelector("#date").value,
    document.querySelector("#priority").value
  );
  todos.push(newTodo);
}


export { todoSubmit }