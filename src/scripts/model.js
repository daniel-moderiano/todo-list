// Nanoid used to generate unique IDs for todos to enable different functions to recognise and modify them
import { todoSubmit } from "./controller";
import { nanoid } from 'nanoid';

// Store all newly created todos in todos master array (can be added and deleted)
let todos = [];

// Store all lists in a modifiable object for reference
let lists = {
  "inbox": [],
  "projects": []
}

// Factory function to create todo items
function createTodo(title, description, dueDate, priority, list, id=nanoid()) {
  return { title, description, dueDate, priority, list, id }
};

// Create some dummy todos to help with rendering code
let todo1 = createTodo("Laundry", "White clothes only", "12-12-2021", "low", "inbox");
let todo2 = createTodo("Shopping", "Need eggs and olive oil", "12-06-2021", "high", "inbox");
let todo3 = createTodo("Call John", "Need to organise a catch up", "18-07-2021", "medium", "inbox");

todos.push(todo1);
todos.push(todo3);
todos.push(todo2);
pushToList(todo1, "inbox");

// Function to push todo into a specified list
function pushToList(todo, list) {
  lists[list].push(todo);
}

function pushTodo(todoToPush) {
  todos.push(todoToPush);
}

// Function to remove todo object from array, searhcing via unique todo id
function deleteFromTodoArr(id) {
  let index = todos.findIndex(todo => todo.id === id);
  todos.splice(index, 1);
}

// Adds or updates list of todos to local storage
function addToStorage() {
  localStorage.setItem("lists", JSON.stringify(lists));
}

// Retrieves list of todos from local storage
function getFromStorage() {
  return JSON.parse(localStorage.getItem("lists"));
}


export { todos, createTodo, addToStorage, getFromStorage, pushTodo, deleteFromTodoArr, lists, pushToList }