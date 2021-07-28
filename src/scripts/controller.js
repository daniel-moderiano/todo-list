import { createTodo, addToStorage, pushToList, changeList, addNewList, getSelectedList, getLists, checkDuplicates, deleteFromList } from "./model";
import { refreshTodoList, setSelectedClass, newListElement } from "./view";

// Take DOM element (form) inputs and extract data into new todo
function getFormData() {
  let newTodo = createTodo(
    document.querySelector("#todo-form__title").value,
    document.querySelector("#todo-form__description").value,
    document.querySelector("#todo-form__date").value,
    document.querySelector("#todo-form__priority").value,
    document.querySelector("#todo-form__list").value
  );
  return newTodo;
}

// Add new todo to specified list
function addNewTodo() {
  let todoToAdd = getFormData();
  pushToList(todoToAdd, todoToAdd.list);
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

// Add controls to modal buttons (open/close, outside click, etc)
function addModalControls() {
  // Get modal
  const addModal = document.querySelector(".add-modal");

  // Get close btn
  const closeBtn = document.querySelector(".add-modal__close");
  closeBtn.addEventListener("click", () => {
    closeModal(addModal);
  });

  // Get "New Todo" btn
  const newTodo = document.querySelector(".todos__new");
  newTodo.addEventListener("click", clearFormInputs);
  newTodo.addEventListener("click", () => {
    deleteListsFromDropdown();
    addListsToDropdown();
  })
  newTodo.addEventListener("click", () => {
    displayModal(addModal);
  });
  newTodo.addEventListener("click", () => {
    document.querySelector("#todo-form__title").focus();
  });

  // Get "add task" btn
  const todoFormBtn = document.querySelector(".todo-form__btn");

  // Listen for outside click
  window.addEventListener("click", (e) => {
    outsideClick(e, addModal);
  });
  
  // Clear all inputs in the modal form
  function clearFormInputs() {
    document.querySelector("#todo-form__title").value = "";
    document.querySelector("#todo-form__description").value = "";
    document.querySelector("#todo-form__date").value = "";
    document.querySelector("#todo-form__priority").value = "";
    todoFormBtn.disabled = true;
    todoFormBtn.classList.add("disabled");
  }

  // Get current list to be refreshed on submit
  const currentList = document.querySelector("#todo-form__list").value

  // Listen for form submit/"add todo" btn click
  todoFormBtn.addEventListener("click", addNewTodo);
  todoFormBtn.addEventListener("click", () => {
    closeModal(addModal);
  });
  todoFormBtn.addEventListener("click", addToStorage);
  todoFormBtn.addEventListener("click", refreshTodoList);
}

// Add submission controls and input verification to the todoForm submit form
function todoFormBtnContol(params) {
  const todoFormTitle = document.querySelector("#todo-form__title");
  const todoFormBtn = document.querySelector(".todo-form__btn");

  // Set default btn state to disabled
  todoFormBtn.disabled = true;

  // Listen for user typing or entering data into input
  todoFormTitle.addEventListener("input", () => {
    btnEnable(todoFormTitle, todoFormBtn);
  });
}

// Enable add btn only if user enters a valid title for the todo
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

function addSingleListControl(list) {
  list.addEventListener("click", (e) => {
    if (e.target.nodeName != "BUTTON") {
      changeList(list.dataset.name);
      setSelectedClass(list);
      refreshTodoList(getSelectedList());
    }
  });
}

// Add event listeners for list names in sidebar
function addAllListControls() {
  let listNames = document.querySelectorAll(".list-name");
  listNames.forEach(function(list) {
    addSingleListControl(list);
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

function addListsToDropdown() {
  const dropdown = document.querySelector("#todo-form__list");
  for (const list in getLists()) {
    const option = document.createElement("option");
    option.value = list;
    option.textContent = list;
    dropdown.appendChild(option);
  }
}

function deleteListsFromDropdown() {
  const dropdown = document.querySelector("#todo-form__list");
  while (dropdown.lastElementChild) {
    dropdown.removeChild(dropdown.lastElementChild);
  }
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

export { 
  addModalControls, 
  todoFormBtnContol, 
  addAllListControls, 
  addSidebarControls, 
  listModalBtnControls, 
  addSingleListControl,
  todoControls 
}