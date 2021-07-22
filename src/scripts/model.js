// Nanoid used to generate unique IDs for todos to enable different functions to recognise and modify them
import { todoSubmit } from "./controller";
import { nanoid } from 'nanoid';

// Store all lists in a modifiable object for reference
let lists = {
  "inbox": [],
  "projects": []
}

let selectedList = "inbox";

// Function to change selected list
function changeList(list) {
  selectedList = list; 
}

// Add a new list to the lists object
function addNewList(list) {
  lists[list] = [];
}

// Permanently remove a list from the lists object
function removeList(list) {
  delete lists[list];
}

// Factory function to create todo items
function createTodo(title, description, dueDate, priority, list, id=nanoid()) {
  return { title, description, dueDate, priority, list, id }
};

// Create some dummy todos to help with rendering code
let todo1 = createTodo("Laundry", "White clothes only", "12-12-2021", "low", "inbox");
let todo2 = createTodo("Shopping", "Need eggs and olive oil", "12-06-2021", "high", "inbox");
let todo3 = createTodo("Call John", "Need to organise a catch up", "18-07-2021", "medium", "inbox");


pushToList(todo1, "inbox");

// Function to push todo into a specified list
function pushToList(todo, list) {
  lists[list].push(todo);
}

function pushTodo(todoToPush) {
  todos.push(todoToPush);
}

// Function to remove todo object from array, searhcing via unique todo id
function deleteFromList(list, id) {
  let index = lists[list].findIndex(todo => todo.id === id);
  lists[list].splice(index, 1);
}

// Adds or updates list of todos to local storage
function addToStorage() {
  localStorage.setItem("lists", JSON.stringify(lists));
}

// Retrieves list of todos from local storage
function getFromStorage() {
  return JSON.parse(localStorage.getItem("lists"));
}


export { createTodo, addToStorage, getFromStorage, pushTodo, deleteFromList, lists, pushToList, selectedList, changeList, addNewList, removeList }