// Nanoid used to generate unique IDs for todos to enable different functions to recognise and modify them
import { nanoid } from 'nanoid';
import { setDoc, doc, getDoc } from '@firebase/firestore';
import database from './firebase';

// Store all lists in a modifiable object that can be referenced to create UI
let lists = {
  Inbox: [],
};

// Used for UI elements and directing todos to the appropriate lists (or any list manipulation in general)
let selectedList = 'Inbox';

// Used for editing todos from the UI to avoid awkward tracking and passing of IDs through several functions
let currentlyEditingId = '';

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
  const currentLists = Object.keys(lists);
  return currentLists.some((list) => list === newList);
}

// Factory function to create todo items
function createTodo(title, description, dueDate, priority, id = nanoid()) {
  return {
    title,
    description,
    dueDate,
    priority,
    id,
  };
}

// Function to push todo into a specified list
function pushToList(todo, list) {
  lists[list].push(todo);
}

// Function to remove todo object from array, searching via unique todo id
function deleteFromList(list, id) {
  const index = lists[list].findIndex((todo) => todo.id === id);
  lists[list].splice(index, 1);
}

// Replace todo with updated version without deleting original entry (i.e. same ID is maintained)
function updateTodo(list, id, todoUpdate) {
  const index = lists[list].findIndex((todo) => todo.id === id);
  lists[list][index] = todoUpdate;
}

// Adds or updates list of todos to local storage
function addToStorage() {
  localStorage.setItem('lists', JSON.stringify(lists));
}

// Adds and/or updates the backend storage of lists and todos
async function addToFirestore() {
  const stringifiedTodos = JSON.stringify(lists);
  const docRef = doc(database, 'storage', 'data');

  await setDoc(docRef, {
    lists: stringifiedTodos,
  });
}

// Retrieves list of todos from local storage
function getFromStorage() {
  return JSON.parse(localStorage.getItem('lists'));
}

// Retrieves list of todos from firestore
async function getFromFirestore() {
  const docRef = doc(database, 'storage', 'data');
  const docSnapshot = await getDoc(docRef);
  // Returns a promise that resolves to the lists object. NOTE: any function requiring the data returned here must be asyncronous! Or using promises/.then()
  return JSON.parse(docSnapshot.data().lists);
}

// Used to grab specific todo data from memory for editing purposes
function findTodoByListAndId(list, id) {
  const index = lists[list].findIndex((todo) => todo.id === id);
  if (index !== -1) {
    return lists[list][index];
  }
  return 'ID not found';
}

// Check for existing lists object in local storage, and retrieve it for use if present.
// Otherwise the lists variable will default to Inbox with no todos
function checkStorage() {
  if (!localStorage.getItem('lists')) {
    // pass
  } else {
    lists = getFromStorage();
  }
}

// Check if the specificed document exists at docRef, and if so, set the lists variable to the data. If no data exists, e.g. for a new user, then there is no need to update variables as we are working from a blank state
async function checkFirestore() {
  const docRef = doc(database, 'storage', 'data');
  const docSnapshot = await getDoc(docRef);

  // Calling .exists() on the document snapshot will return false if there is no document at the specified docRef
  if (docSnapshot.exists()) {
    lists = JSON.parse(docSnapshot.data().lists);
  }
}

export {
  createTodo,
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
  addToFirestore,
  getFromFirestore,
  checkFirestore,
};
