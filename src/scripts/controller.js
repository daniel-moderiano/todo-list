import { createTodo, addToStorage, pushToList, changeList, addNewList, getSelectedList, getLists, checkDuplicates, deleteFromList, removeList, findTodoByListAndId, updateTodo, getCurrentlyEditingId, changeCurrentlyEditingId } from "./model";
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

// Send data to model to update an existing todo using form data from add modal in edit form
function editExistingTodo() {
  let todoEditedData = getFormData();
  let editedTodo = createTodo(todoEditedData.title, todoEditedData.description, todoEditedData.dueDate, todoEditedData.priority);
  updateTodo(todoEditedData.list, getCurrentlyEditingId(), editedTodo);
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

// Clear all inputs in the add-modal form, and ensure the submit btn is reset to disabled mode. This has to be set dynamically on each modal display rathern than HTML coded as the HTML will be over-written when the modal is closed. Remove the edit class tag if present.
function resetAddModal() {
  const todoFormBtn = document.querySelector(".todo-form__btn");
  document.querySelector("#todo-form__title").value = "";
  document.querySelector("#todo-form__description").value = "";
  document.querySelector("#todo-form__date").value = "";
  document.querySelector("#todo-form__priority").value = "";
  todoFormBtn.disabled = true;
  todoFormBtn.classList.add("disabled");
  document.querySelector(".add-modal").classList.remove("edit");
}

// Clear inputs on list modal form, and ensure the submit btn is reset to disabled mode
function clearListFormInput() {
  document.querySelector("#list-form__input").value = "";
  document.querySelector(".list-modal__btn").disabled = true;
}

// Add all functionality to the newTask btn
function addNewTaskControls() {
  const addModal = document.querySelector(".add-modal");
  const newTaskBtn = document.querySelector(".todos__new");

  newTaskBtn.addEventListener("click", () => {
    resetAddModal();
    refreshListDropdown();
    displayModal(addModal);
    document.querySelector("#todo-form__title").focus();
  });
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
    if (addModal.classList.contains("edit")) {
      // edit current todo
      editExistingTodo();
      addToStorage();
      closeModal(addModal);
      refreshTodoList();
    } else {
      // Add as new todo
      addNewTodo();
      addToStorage();
      closeModal(addModal);
      refreshTodoList();
    }
  });
}

// Add event listener to sidebar add list btn
function addSidebarControls() {
  let listModal = document.querySelector(".list-modal");
  
  // Ensure the input is focused on open, and the submit btn is in disabled state to begin
  document.querySelector(".add-list").addEventListener("click", () => {
    clearListFormInput();
    displayModal(listModal);
    document.querySelector("#list-form__input").focus();
    document.querySelector(".list-modal__btn").classList.add("disabled");
  });

  document.querySelector(".list-modal__close").addEventListener("click", () => {
    closeModal(listModal);
  });

  // Close modal on outside click
  window.addEventListener("click", (e) => {
    outsideClick(e, listModal);
  });
}

// Adds functionality to the 'submit' btn on the list modal
function listModalBtnControls() {
  const listModal = document.querySelector(".list-modal");
  const listBtn = document.querySelector(".list-modal__btn");
  const listInput = document.querySelector("#list-form__input");

  // Listen for any typing or pasting into input field, and enable the submit btn only for non-whitespace input
  listInput.addEventListener("input", () => {
    btnEnable(listInput, listBtn);
  })

  listBtn.addEventListener("click", () => {
    // If the user tries to submit two lists of the same name, this will alert them and prevent that action
    if (checkDuplicates(listInput.value)) {
      alert("List already exists! Please enter a unique list name.");
    } else {
      console.log(getLists());
      addNewList(listInput.value);
      console.log(getLists());
      addToStorage();
      newListElement(listInput.value);
      changeList(listInput.value);
      setSelectedClass(document.querySelector(`[data-name='${getSelectedList()}']`))
      console.log(getLists());
      refreshTodoList();
      console.log(getLists());
      closeModal(listModal);
    }
  });
}

// Fully prepare the add modal for editing purposes (add class 'edit' to mark the modal as being in edit form)
function convertAddModalForEdit(todo) {
  document.querySelector("#todo-form__title").value = todo.title;
  document.querySelector("#todo-form__description").value = todo.description;
  document.querySelector("#todo-form__date").value = todo.dueDate;
  document.querySelector("#todo-form__priority").value = todo.priority;
  document.querySelector(".add-modal").classList.add("edit");
  document.querySelector(".todo-form__btn").textContent = "Edit task";
  refreshListDropdown();
}

// Add event listener to parent list element (ul.todos__list) that captures event propgation from any child li elements
function todoEventListeners() {
  document.querySelector(".todos__list").addEventListener("click", (e) => {
    // Individualise event response based on which target is clicked
    if (e.target.className === "todo__delete" || e.target.classList.contains("todo__checkbox")) {
      deleteFromList(getSelectedList(), e.target.dataset.id);
      addToStorage();
      refreshTodoList();
    } else if (e.target.className === "todo__edit-icon") {
      // Use the data-id to find the todo from memory, and open add modal in edit form
      changeCurrentlyEditingId(e.target.dataset.id);
      convertAddModalForEdit(findTodoByListAndId(getSelectedList(), e.target.dataset.id));
      displayModal(document.querySelector(".add-modal"));     
    }
  });
}

// Add event listener to parent list element (ul.todos__list) that captures event propgation from any child li elements
function sidebarEventListeners() {
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
  todoEventListeners,
  sidebarEventListeners,
  addNewTaskControls 
}