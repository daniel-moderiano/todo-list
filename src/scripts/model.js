// Nanoid used to generate unique IDs for todos to enable different functions to recognise and modify them
import { nanoid } from 'nanoid';

// Store all lists in a modifiable object that can be referenced to create UI
let lists = {
  "Inbox": [],
}

let selectedList = "Inbox";

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

// Adds or updates list of todos to local storage
function addToStorage() {
  localStorage.setItem("lists", JSON.stringify(lists));
}

// Retrieves list of todos from local storage
function getFromStorage() {
  return JSON.parse(localStorage.getItem("lists"));
}

// Create some dummy todos to help with rendering code
let todo1 = createTodo("Laundry", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea sint officiis quo incidunt repudiandae sed, accusamus veniam voluptatem consequuntur! Labore pariatur eaque voluptate deserunt ipsum corporis nemo distinctio numquam perspiciatis!", "2021-07-28", "low");

pushToList(todo1, "Inbox");


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
}