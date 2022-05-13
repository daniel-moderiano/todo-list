// Nanoid used to generate unique IDs for todos to enable different functions to recognise and modify them
import { nanoid } from 'nanoid';

// Define Todo interface here (a common param for several functions)
interface Todo {
  title: string;
  description: string;
  dueDate: string;
  priority: string;
  id: string;
}

interface Lists {
  [key: string]: Todo[];
}

// Store all lists in a modifiable object that can be referenced to create UI
let lists: Lists = {
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
function changeList(list: string) {
  selectedList = list;
}

function getCurrentlyEditingId() {
  return currentlyEditingId;
}

function changeCurrentlyEditingId(id: string) {
  currentlyEditingId = id;
}

// Add a new list to the lists object
function addNewList(list: string): void {
  lists[list] = [];
}

// Permanently remove a list from the lists object
function removeList(list: string): void {
  delete lists[list];
}

// Checks for duplicate list names
function checkDuplicates(newList: string): boolean {
  const currentLists = Object.keys(lists);
  return currentLists.some((list) => list === newList);
}

// Factory function to create todo items
function createTodo(
  title: string,
  description: string,
  dueDate: string,
  priority: string,
  id: string = nanoid(),
): Todo {
  return {
    title,
    description,
    dueDate,
    priority,
    id,
  };
}

// Function to push todo into a specified list
function pushToList(todo: Todo, list: string): void {
  lists[list].push(todo);
}

// Function to remove todo object from array, searching via unique todo id
function deleteFromList(list: string, id: string): void {
  const index = lists[list].findIndex((todo: Todo) => todo.id === id);
  lists[list].splice(index, 1);
}

// Replace todo with updated version without deleting original entry (i.e. same ID is maintained)
function updateTodo(list: string, id: string, todoUpdate: Todo): void {
  const index = lists[list].findIndex((todo: Todo) => todo.id === id);
  lists[list][index] = todoUpdate;
}

// Adds or updates list of todos to local storage
function addToStorage(): void {
  localStorage.setItem('lists', JSON.stringify(lists));
}

// Retrieves list of todos from local storage
function getFromStorage() {
  const storage = localStorage.getItem('lists');

  // Can't feed null to JSON.parse, hence this check here
  if (storage) {
    return JSON.parse(storage);
  } else {
    return null;
  }
}

// Used to grab specific todo data from memory for editing purposes
function findTodoByListAndId(list: string, id: string) {
  const index = lists[list].findIndex((todo: Todo) => todo.id === id);
  if (index !== -1) {
    return lists[list][index];
  }
  return 'ID not found';
}

// Check for existing lists object in local storage, and retrieve it for use if present.
// Otherwise the lists variable will default to Inbox with no todos
function checkStorage(): void {
  if (getFromStorage()) {
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
  checkStorage,
};
