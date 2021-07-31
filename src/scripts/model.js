// Nanoid used to generate unique IDs for todos to enable different functions to recognise and modify them
import { nanoid } from 'nanoid';

// Store all lists in a modifiable object that can be referenced to create UI
let lists = {
  "Inbox": [],
}

// Used for UI elements and directing todos to the appropriate lists (or any list manipulation in general)
let selectedList = "Inbox";

// Used for editing todos from the UI to avoid awkward tracking and passing of IDs through several functions
let currentlyEditingId = "";

// Return a deep copy of the current lists object to avoid direct manipulation outside of the provided functions below
function getLists() {
  return JSON.parse(JSON.stringify(lists));
}

function getSelectedList() {
  return selectedList;
}

// Function to change selected list
function changeList(list) {
  selectedList = list; 
}

function getCurrentlyEditingId() {
  return currentlyEditingId;
}

function changeCurrentlyEditingId(id) {
  currentlyEditingId = id;
}

// Add a new list to the lists object
function addNewList(list) {
  lists[list] = [];
}

// Permanently remove a list from the lists object
function removeList(list) {
  delete lists[list];
}

// Checks for duplicate list names 
function checkDuplicates(newList) {
  for (const list in lists) {
    if (newList === list) {
      return true;
    }
  }
  return false;
}

// Factory function to create todo items
function createTodo(title, description, dueDate, priority, id=nanoid()) {
  return { title, description, dueDate, priority, id }
};

// Function to push todo into a specified list
function pushToList(todo, list) {
  lists[list].push(todo);
}

// Function to remove todo object from array, searching via unique todo id
function deleteFromList(list, id) {
  let index = lists[list].findIndex(todo => todo.id === id);
  if (index === -1) {
    console.log("ID not found");
    return;
  } else {
    lists[list].splice(index, 1);
  }
}

// Replace todo with updated version without deleting original entry (i.e. same ID is maintained)
function updateTodo(list, id, todoUpdate) {
  let index = lists[list].findIndex(todo => todo.id === id);
  if (index === -1) {
    console.log("ID not found");
    return;
  } else {
    lists[list][index] = todoUpdate;
  }
}

// Adds or updates list of todos to local storage
function addToStorage() {
  localStorage.setItem("lists", JSON.stringify(lists));
}

// Retrieves list of todos from local storage
function getFromStorage() {
  return JSON.parse(localStorage.getItem("lists"));
}

// Used to grab specific todo data from memory for editing purposes
function findTodoByListAndId(list, id) {
  let index = lists[list].findIndex(todo => todo.id === id);
  if (index === -1) {
    console.log("ID not found");
    return;
  } else {
    return lists[list][index];
  }
}

// Check for existing lists object in local storage, and retrieve it for use if present. Otherwise the lists variable will default to Inbox with no todos
function checkStorage() {
  if (!localStorage.getItem("lists")) {
    // pass
  } else {
    lists = getFromStorage();
  }
}


export { 
  createTodo, 
  addToStorage, 
  getFromStorage, 
  deleteFromList, 
  pushToList,
  changeList, 
  addNewList, 
  removeList, 
  getSelectedList, 
  getLists, 
  checkDuplicates,
  findTodoByListAndId,
  updateTodo,
  getCurrentlyEditingId,
  changeCurrentlyEditingId,
  checkStorage
}