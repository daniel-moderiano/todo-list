import { createTodo, addToStorage, pushToList, changeList, addNewList, getSelectedList, getLists, checkDuplicates, deleteFromList, removeList } from "./model";
import { refreshTodoList, setSelectedClass, newListElement, refreshListDropdown } from "./view";

// Extract the form data when the user clicks "add task" on the add task modal
function getFormData() {
  return {
    "title": document.querySelector("#todo-form__title").value,
    "description": document.querySelector("#todo-form__description").value,
    "dueDate": document.querySelector("#todo-form__date").value,
    "priority": document.querySelector("#todo-form__priority").value,
    "list": document.querySelector("#todo-form__list").value
  };
}

// Add a new todo to the specified list
function addNewTodo() {
  let todoData = getFormData();
  let newTodo = createTodo(todoData.title, todoData.description, todoData.dueDate, todoData.priority);
  pushToList(newTodo, todoData.list);
}

// Display the modal 
function displayModal(modal) {
  modal.style.display = "flex";
}

// Close the modal
function closeModal(modal) {
  modal.style.display = "none";
}

// Close the modal on outside click
function outsideClick(e, modal) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
}

// Make sure add/submit btn is disabled until the user enters a non-whitespace input into the title or specified input field
function btnEnable(input, btn) {
  if (input.value.trim() === "") {
    btn.disabled = true;
    if (!btn.classList.contains("disabled")) {
      btn.classList.add("disabled");
    }
  } else {
    btn.disabled = false;
    if (btn.classList.contains("disabled")) {
      btn.classList.remove("disabled");
    }
  }
}

// Clear all inputs in the add-modal form, and ensure the submit btn is reset to disabled mode
function clearFormInputs() {
  const todoFormBtn = document.querySelector(".todo-form__btn");
  document.querySelector("#todo-form__title").value = "";
  document.querySelector("#todo-form__description").value = "";
  document.querySelector("#todo-form__date").value = "";
  document.querySelector("#todo-form__priority").value = "";
  todoFormBtn.disabled = true;
  todoFormBtn.classList.add("disabled");
}

function addNewTaskControls() {
  const addModal = document.querySelector(".add-modal");
  const newTaskBtn = document.querySelector(".todos__new");

  newTaskBtn.addEventListener("click", () => {
    clearFormInputs();
    refreshListDropdown();
    displayModal(addModal);
    document.querySelector("#todo-form__title").focus();
  });

  // TODO: when new task is clicked, make the default list select option the current list
  // Get current list to be refreshed on submit
  const currentList = document.querySelector(".todos__current-list").textContent;
}

// Add controls to modal buttons, namely outside click, close, and 'submit' equivalent
function addModalControls() {
  const addModal = document.querySelector(".add-modal");
  const todoFormBtn = document.querySelector(".todo-form__btn");
  const closeBtn = document.querySelector(".add-modal__close");
  const todoFormTitle = document.querySelector("#todo-form__title");

  closeBtn.addEventListener("click", () => closeModal(addModal));

  // Listen for outside click
  window.addEventListener("click", (e) => {
    outsideClick(e, addModal);
  });

  // Listen for user typing or entering data into input (e.g. pasting)
  todoFormTitle.addEventListener("input", () => {
    btnEnable(todoFormTitle, todoFormBtn);
  });
  
  // Functions to run when the user "submits" the form (not a true submit to server however)
  todoFormBtn.addEventListener("click", () => {
    addNewTodo();
    addToStorage();
    closeModal(addModal);
    refreshTodoList();
  });
}


// Add event listener to sidebar add list btn
function addSidebarControls() {
  let listModal = document.querySelector(".list-modal");
  
  document.querySelector(".add-list").addEventListener("click", () => {
    clearListFormInput();
    displayModal(listModal);
    document.querySelector("#list-form__input").focus();
    document.querySelector(".list-modal__btn").classList.add("disabled");
  });

  document.querySelector(".list-modal__close").addEventListener("click", () => {
    closeModal(listModal);
  });

  window.addEventListener("click", (e) => {
    outsideClick(e, listModal);
  });
}

function listModalBtnControls() {
  const listBtn = document.querySelector(".list-modal__btn");
  const listInput = document.querySelector("#list-form__input");
  listBtn.disabled = true;
  listInput.addEventListener("input", () => {
    btnEnable(listInput, listBtn);
  })
  listBtn.addEventListener("click", () => {
    if (checkDuplicates(getListInput())) {
      alert("List already exists! Please enter a unique list name.");
    } else {
      addNewList(getListInput());
      addToStorage();
      newListElement(getListInput());
      changeList(getListInput());
      setSelectedClass(document.querySelector(`[data-name='${getSelectedList()}']`))
      refreshTodoList();
      closeModal(document.querySelector(".list-modal"));
    }
  });
}

// Get the user input from the list form 
function getListInput() {
  return document.querySelector("#list-form__input").value;
}

// Clears input on list modal form
function clearListFormInput() {
  document.querySelector("#list-form__input").value = "";
  document.querySelector(".list-modal__btn").disabled = true;
}



// Add event listener to parent list element (ul.todos__list) that captures event propgation from any child li elements
function todoControls() {
  document.querySelector(".todos__list").addEventListener("click", (e) => {
    // Individualise event response based on which target is clicked
    if (e.target.className === "todo__delete" || e.target.className === "todo__checkbox") {
      deleteFromList(getSelectedList(), e.target.dataset.id);
      addToStorage();
      refreshTodoList();
    }
  });
}

// Add event listener to parent list element (ul.todos__list) that captures event propgation from any child li elements
function sidebarControls() {
  document.querySelector(".sidebar").addEventListener("click", (e) => {
    // Individualise event response based on which target is clicked
    if (e.target.classList.contains("list-btn")) {
      e.target.parentNode.remove();
      removeList(e.target.dataset.name);
      addToStorage();
      changeList("Inbox");
      setSelectedClass(document.querySelector("#inbox"));
      refreshTodoList();
    } else if (e.target.classList.contains("list-item")) {
      changeList(e.target.dataset.name);
      setSelectedClass(e.target);
      refreshTodoList();
    } else if (e.target.parentNode.classList.contains("list-item")) {
      changeList(e.target.parentNode.dataset.name);
      setSelectedClass(e.target.parentNode);
      refreshTodoList();
    }
  });
}


export { 
  addModalControls,
  addSidebarControls, 
  listModalBtnControls, 
  todoControls,
  sidebarControls,
  addNewTaskControls 
}