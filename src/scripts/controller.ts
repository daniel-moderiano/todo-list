import {
  createTodo,
  addToStorage,
  pushToList,
  changeList,
  addNewList,
  getSelectedList,
  checkDuplicates,
  deleteFromList,
  removeList,
  findTodoByListAndId,
  updateTodo,
  getCurrentlyEditingId,
  changeCurrentlyEditingId,
  Todo,
} from './model';
import {
  refreshTodoList,
  setSelectedClass,
  refreshListDropdown,
  refreshSidebarLists,
  setSelectedItemClass,
  renderViewModal,
} from './view';

// Extract the form data when the user clicks "add task" on the add task modal
function getFormData(): {
  title: string;
  description: string;
  dueDate: string;
  priority: string;
  list: string;
} {
  const title = document.querySelector('#todo-form__title') as HTMLInputElement | null;
  const description = document.querySelector('#todo-form__description') as HTMLInputElement | null;
  const dueDate = document.querySelector('#todo-form__date') as HTMLInputElement | null;
  const priority = document.querySelector('#todo-form__priority') as HTMLSelectElement | null;
  const list = document.querySelector('#todo-form__list') as HTMLSelectElement | null;

  return {
    title: title!.value,
    description: description!.value,
    dueDate: dueDate!.value,
    priority: priority!.value,
    list: list!.value,
  };
}

// Add a new todo to the specified list
function addNewTodo(): void {
  const todoData = getFormData();
  const newTodo = createTodo(
    todoData.title,
    todoData.description,
    todoData.dueDate,
    todoData.priority,
  );
  pushToList(newTodo, todoData.list);
}

// Send data to model to update an existing todo using form data from add modal in edit form
function editExistingTodo(): void {
  const todoEditedData = getFormData();
  const editedTodo = createTodo(
    todoEditedData.title,
    todoEditedData.description,
    todoEditedData.dueDate,
    todoEditedData.priority,
  );
  updateTodo(todoEditedData.list, getCurrentlyEditingId(), editedTodo);
}

// Display the modal
function displayModal(modal: HTMLDivElement) {
  modal.style.display = 'flex';
}

// Close the modal
function closeModal(modal: HTMLDivElement) {
  modal.style.display = 'none';
}

// Close the modal on outside click
function outsideClick(e: Event, modal: HTMLDivElement) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
}

// Make sure add/submit btn is disabled until the user enters a non-whitespace input into the title or specified input field
function btnEnable(input: HTMLInputElement, btn: HTMLButtonElement) {
  if (input.value.trim() === '') {
    btn.disabled = true;
    if (!btn.classList.contains('disabled')) {
      btn.classList.add('disabled');
    }
  } else {
    btn.disabled = false;
    if (btn.classList.contains('disabled')) {
      btn.classList.remove('disabled');
    }
  }
}

// Clear all inputs in the add-modal form, and ensure the submit btn is reset to disabled mode. This has to be set dynamically on each modal display rathern than HTML coded as the HTML will be over-written when the modal is closed. Remove the edit class tag if present.
function resetAddModal(): void {
  const todoForm = document.querySelector('.todo-form') as HTMLFormElement | null;

  if (todoForm) {
    todoForm.reset();
  }

  const todoFormBtn = document.querySelector('.todo-form__btn') as HTMLButtonElement | null;
  if (todoFormBtn) {
    todoFormBtn.disabled = true;
    todoFormBtn.classList.add('disabled');
    todoFormBtn.textContent = 'Add task';
  }

  const addModal = document.querySelector('.add-modal') as HTMLDivElement | null;
  const addTitle = document.querySelector('.add-modal__title') as HTMLHeadingElement | null;

  if (!addModal || !addTitle) {
    throw new Error('Add modal has encountered an error');
  }

  addModal.classList.remove('edit');
  addTitle.textContent = 'New task';

  const btn = document.querySelector('.todo-form__list') as HTMLButtonElement | null;

  if (btn) {
    btn.disabled = false;
  }
}

// Clear inputs on list modal form, and ensure the submit btn is reset to disabled mode
function clearListFormInput(): void {
  const input = document.querySelector('#list-form__input') as HTMLInputElement | null;
  const btn = document.querySelector('.list-modal__btn') as HTMLButtonElement | null;
  if (input) {
    input.value = '';
  }
  if (btn) {
    btn.disabled = true;
  }
}

// Add all functionality to the newTask btn
function addNewTaskControls(): void {
  const addModal = document.querySelector('.add-modal') as HTMLDivElement | null;
  const newTaskBtn = document.querySelector('.todos__new') as HTMLButtonElement | null;
  const todoTitleInput = document.querySelector('#todo-form__title') as HTMLInputElement | null;

  if (newTaskBtn) {
    newTaskBtn.addEventListener('click', () => {
      resetAddModal();
      refreshListDropdown();
      if (addModal) {
        displayModal(addModal);
      }
      if (todoTitleInput) {
        todoTitleInput.focus();
      }
    });
  }
}

// Add controls to modal buttons, namely outside click, close, and 'submit' equivalent
function addModalControls(): void {
  const addModal = document.querySelector('.add-modal') as HTMLDivElement | null;
  const todoFormBtn = document.querySelector('.todo-form__btn') as HTMLButtonElement | null;
  const closeBtn = document.querySelector('.add-modal__close') as HTMLButtonElement | null;
  const todoFormTitle = document.querySelector('#todo-form__title') as HTMLInputElement | null;

  if (!addModal || !todoFormBtn || !closeBtn || !todoFormTitle) {
    throw new Error('Add modal has encountered an error');
  }

  closeBtn.addEventListener('click', () => closeModal(addModal));

  // Listen for outside click
  window.addEventListener('click', (e) => {
    outsideClick(e, addModal);
  });

  // Listen for user typing or entering data into input (e.g. pasting)
  todoFormTitle.addEventListener('input', () => {
    btnEnable(todoFormTitle, todoFormBtn);
  });

  // Functions to run when the user "submits" the form (not a true submit to server however)
  todoFormBtn.addEventListener('click', () => {
    if (addModal.classList.contains('edit')) {
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
function addSidebarControls(): void {
  const listModal = document.querySelector('.list-modal') as HTMLDivElement | null;
  const closeBtn = document.querySelector('.list-modal__close') as HTMLButtonElement | null;
  const addBtn = document.querySelector('.add-list') as HTMLButtonElement | null;
  const listInput = document.querySelector('#list-form__input') as HTMLInputElement | null;
  const listBtn = document.querySelector('.list-modal__btn') as HTMLButtonElement | null;

  if (!listModal) {
    throw new Error('An arror occurred while opening the list controls');
  }

  // Ensure the input is focused on open, and the submit btn is in disabled state to begin
  if (addBtn && listInput && listBtn) {
    addBtn.addEventListener('click', () => {
      clearListFormInput();
      displayModal(listModal);
      listInput.focus();
      listBtn.classList.add('disabled');
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      closeModal(listModal);
    });
  }

  // Close modal on outside click
  window.addEventListener('click', (e) => {
    outsideClick(e, listModal);
  });
}

// Adds functionality to the 'submit' btn on the list modal
function listModalBtnControls(): void {
  const listModal = document.querySelector('.list-modal') as HTMLDivElement | null;
  const listBtn = document.querySelector('.list-modal__btn') as HTMLButtonElement | null;
  const listInput = document.querySelector('#list-form__input') as HTMLInputElement | null;
  const selectedList = document.querySelector(
    `[data-name='${getSelectedList()}']`,
  ) as HTMLElement | null;

  // Listen for any typing or pasting into input field, and enable the submit btn only for non-whitespace input
  if (listInput && listBtn) {
    listInput.addEventListener('input', () => {
      btnEnable(listInput, listBtn);
    });

    listBtn.addEventListener('click', () => {
      // If the user tries to submit two lists of the same name, this will alert them and prevent that action
      if (checkDuplicates(listInput.value)) {
        alert('List already exists! Please enter a unique list name.');
      } else {
        addNewList(listInput.value);
        addToStorage();
        refreshSidebarLists();
        changeList(listInput.value);
        if (selectedList) {
          setSelectedClass(selectedList);
          setSelectedItemClass(selectedList);
        }
        refreshTodoList();
        closeModal(listModal!);
      }
    });
  }
}

// Fully prepare the add modal for editing purposes (add class 'edit' to mark the modal as being in edit form)
function convertAddModalForEdit(todo: Todo): void {
  const addModal = document.querySelector('.add-modal') as HTMLDivElement | null;
  const title = document.querySelector('#todo-form__title') as HTMLInputElement | null;
  const description = document.querySelector('#todo-form__description') as HTMLInputElement | null;
  const date = document.querySelector('#todo-form__date') as HTMLInputElement | null;
  const priority = document.querySelector('#todo-form__priority') as HTMLSelectElement | null;
  const modalTitle = document.querySelector('.add-modal__title') as HTMLHeadingElement | null;
  const btn = document.querySelector('.todo-form__btn') as HTMLButtonElement | null;
  const select = document.querySelector('.todo-form__list') as HTMLSelectElement | null;

  // If add modal is present, then by definition all children components will be present
  if (addModal) {
    title!.value = todo.title;
    description!.value = todo.description;
    date!.value = todo.dueDate;
    priority!.value = todo.priority;
    addModal.classList.add('edit');
    modalTitle!.textContent = 'Edit task';
    btn!.textContent = 'Edit task';
    select!.setAttribute('disabled', 'true');
  }

  refreshListDropdown();
}

// Add event listener to parent list element (ul.todos__list) that captures event propgation from any child li elements
function todoEventListeners(): void {
  const todoList = document.querySelector('.todos__list') as HTMLUListElement | null;
  const addModal = document.querySelector('.add-modal') as HTMLDivElement | null;
  const viewModal = document.querySelector('.view-modal') as HTMLDivElement | null;

  if (todoList) {
    todoList.addEventListener('click', (e) => {
      const targetElement = e.target as HTMLElement;
      const targetClass = targetElement.classList;
      const targetId = targetElement.dataset.id as string;

      // Individualise event response based on which target is clicked
      if (targetClass.contains('todo__delete-icon') || targetClass.contains('todo__checkbox')) {
        deleteFromList(getSelectedList(), targetId);
        addToStorage();
        refreshTodoList();
        return;
      }
      if (targetElement.classList.contains('todo__edit-icon')) {
        // Use the data-id to find the todo from memory, and open add modal in edit form
        changeCurrentlyEditingId(targetId);
        const todo = findTodoByListAndId(getSelectedList(), targetId);
        if (typeof todo !== 'string') {
          convertAddModalForEdit(todo);
        }
        displayModal(addModal!);
        return;
      }
      if (
        targetClass.contains('todo__title') ||
        targetClass.contains('todo__description') ||
        targetClass.contains('todo__container') ||
        targetClass.contains('todo__date') ||
        targetClass.contains('todo')
      ) {
        renderViewModal(getSelectedList(), targetId);
        displayModal(viewModal!);
      }
    });
  }
}

// Add event listener to parent list element (ul.todos__list) that captures event propgation from any child li elements
function sidebarEventListeners() {
  const sidebar = document.querySelector('.sidebar') as HTMLElement | null;
  const inboxList = document.querySelector('#inbox') as HTMLElement;

  if (sidebar) {
    sidebar.addEventListener('click', (e: Event) => {
      const targetElement = e.target as HTMLElement;
      const targetParent = targetElement.parentNode as HTMLElement;
      const targetParentName = targetParent.dataset.name as string;
      const targetName = targetElement.dataset.name as string;
      // Individualise event response based on which target is clicked
      if (targetElement && targetElement.classList.contains('list-btn')) {
        targetParent.remove();
        removeList(targetName);
        addToStorage();
        changeList('Inbox');
        setSelectedClass(inboxList);
        setSelectedItemClass(inboxList);
        refreshTodoList();
      } else if (targetElement.classList.contains('list-item')) {
        changeList(targetName);
        setSelectedClass(targetElement);
        setSelectedItemClass(targetElement);
        refreshTodoList();
      } else if (targetParent.classList.contains('list-item')) {
        changeList(targetParentName);
        setSelectedClass(targetParent);
        setSelectedItemClass(targetParent);
        refreshTodoList();
      }
    });
  }
}

// Adds close features to the view modal, since there is no data to 'submit'
function viewModalBtnControls(): void {
  const viewModal = document.querySelector('.view-modal') as HTMLDivElement | null;
  const closeBtn = document.querySelector('.view-modal__close') as HTMLButtonElement | null;

  if (!viewModal || !closeBtn) {
    throw new Error('Elements not found');
  }

  closeBtn.addEventListener('click', () => closeModal(viewModal));

  window.addEventListener('click', (e) => {
    outsideClick(e, viewModal);
  });
}

export {
  addModalControls,
  addSidebarControls,
  listModalBtnControls,
  todoEventListeners,
  sidebarEventListeners,
  addNewTaskControls,
  displayModal,
  viewModalBtnControls,
};
