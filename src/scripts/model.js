import { todoSubmit } from "./controller";

// Store all newly created todos in todos master array (can be added and deleted)
let todos = [];

// Factory function to create todo items
function createTodo(title, description, dueDate, priority, completed=false) {
  return { title, description, dueDate, priority, completed }
};

// Create some dummy todos to help with rendering code
let todo1 = createTodo("Laundry", "White clothes only", "12-12-2021", "low");
let todo2 = createTodo("Shopping", "Need eggs and olive oil", "12-06-2021", "high");
let todo3 = createTodo("Call John", "Need to organise a catch up", "18-07-2021", "medium");

todos.push(todo1, todo2, todo3);

function pushTodo(todoToPush) {
  todos.push(todoToPush);
}

// Adds or updates list of todos to local storage
function addToStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Retrieves list of todos from local storage
function getFromStorage() {
  return JSON.parse(localStorage.getItem("todos"));
}


export { todos, createTodo, addToStorage, getFromStorage, pushTodo }