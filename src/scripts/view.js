import {
	getFromStorage,
	getSelectedList,
	getLists,
	findTodoByListAndId,
} from './model';
import { format } from 'date-fns';

// Take todo object from master array and render to the DOM as todo list item
function renderTodo(todo) {
	const todosList = document.querySelector('.todos__list');
	const todoListItem = document.createElement('li');
	const todoContainer = document.createElement('div');
	const todoTitle = document.createElement('h5');
	const todoDeleteBtn = document.createElement('button');
	const deleteIcon = document.createElement('img');
	const todoDescription = document.createElement('p');
	const todoDate = document.createElement('p');
	const todoPriority = document.createElement('span');
	const checkboxContainer = document.createElement('div');
	const todoCheckboxLabel = document.createElement('label');
	const todoCheckbox = document.createElement('input');
	const todoCheckboxTick = svgTick();
	const todoEditBtn = document.createElement('button');
	const todoEditIcon = document.createElement('img');

	todoListItem.classList.add('todo');
	todoListItem.dataset.id = todo.id;

	todoContainer.classList.add('todo__container');
	todoContainer.dataset.id = todo.id;

	todoTitle.classList.add('todo__title');
	todoTitle.textContent = todo.title;
	todoTitle.dataset.id = todo.id;

	todoDeleteBtn.type = 'button';
	todoDeleteBtn.classList.add('todo__delete');
	todoDeleteBtn.dataset.id = todo.id;
	todoDeleteBtn.setAttribute('aria-label', 'Delete task');

	deleteIcon.classList.add('todo__delete-icon');
	deleteIcon.dataset.id = todo.id;
	deleteIcon.src = 'icons/close.svg';

	todoDescription.classList.add('todo__description');
	todoDescription.id = 'todo__description';
	todoDescription.dataset.id = todo.id;

	todoDate.classList.add('todo__date');
	todoDate.dataset.id = todo.id;

	todoPriority.classList.add('todo__priority');
	todoPriority.textContent = todo.priority;

	checkboxContainer.className = 'checkbox-container';

	todoCheckboxLabel.setAttribute('for', 'todo__checkbox');
	todoCheckboxLabel.classList.add('todo__label');

	todoCheckbox.id = 'todo__checkbox';
	todoCheckbox.type = 'checkbox';
	todoCheckbox.classList.add('todo__checkbox');
	todoCheckbox.setAttribute('aria-label', 'Mark task as completed');
	todoCheckbox.dataset.id = todo.id;

	// Change the appearance of the checkbox to represent priority
	switch (todo.priority) {
		case 'low':
			todoCheckbox.classList.add('todo__checkbox--low');
			break;

		case 'medium':
			todoCheckbox.classList.add('todo__checkbox--medium');
			break;

		case 'high':
			todoCheckbox.classList.add('todo__checkbox--high');
			break;

		default:
			break;
	}

	todoCheckboxTick.classList.add('tick');

	todoEditBtn.className = 'todo__edit';
	todoEditBtn.type = 'button';
	todoEditBtn.setAttribute('aria-label', 'Edit task');

	todoEditIcon.classList.add('todo__edit-icon');
	todoEditIcon.src = 'icons/edit.svg';
	todoEditIcon.dataset.id = todo.id;

	// Adjust overall todo styling to preserve symmetrical look when no description is provided
	if (todo.description === '') {
		todoDescription.style.display = 'none';
	} else {
		todoDescription.textContent = todo.description;
	}

	// Adjust overall todo styling to preserve symmetrical look when no date is provided
	if (todo.dueDate === '') {
		todoDescription.style.paddingBottom = '0';
	} else {
		todoDate.textContent = `Due ${dateFormatter(todo.dueDate)}`;
	}

	// Adjust overall todo styling to preserve symmetrical look when no date or description are provided
	if (todo.dueDate === '' && todo.description === '') {
		todoTitle.style.paddingBottom = '0';
	}

	// Append todo elements to container (and li)
	todoListItem.appendChild(todoContainer);
	checkboxContainer.appendChild(todoCheckboxLabel);
	checkboxContainer.appendChild(todoCheckboxTick);
	checkboxContainer.appendChild(todoCheckbox);
	todoEditBtn.appendChild(todoEditIcon);
	todoDeleteBtn.appendChild(deleteIcon);
	todoContainer.appendChild(checkboxContainer);
	todoContainer.appendChild(todoTitle);
	todoContainer.appendChild(todoDescription);
	todoContainer.appendChild(todoDate);
	todoContainer.appendChild(todoPriority);
	todoContainer.appendChild(todoDeleteBtn);
	todoContainer.appendChild(todoEditBtn);

	// Insert newly rendered todo into the main todo list
	todosList.appendChild(todoListItem);
}

// Renders only a single list from storage (the currently selected) in the form of a list of todo items
function renderList() {
	let lists = getFromStorage();
	lists[getSelectedList()].forEach(function (todo) {
		renderTodo(todo);
	});
}

// Visibly remove all current todos li items from the DOM
function clearAllTodos() {
	const todosList = document.querySelector('.todos__list');
	while (todosList.lastElementChild) {
		todosList.removeChild(todosList.lastElementChild);
	}
}

// Update the currently viewed list title in main section
function changeCurrentListTitle() {
	document.querySelector('.todos__current-list').textContent =
		getSelectedList();
}

// Update the visible todo list by sequentially clearing and re-rendering all todos
function refreshTodoList() {
	clearAllTodos();
	changeCurrentListTitle();
	renderList();
}

// Set the --selected modifier class exclusively on the currently selected list element (name)
function setSelectedClass(listItem) {
	let listNames = document.querySelectorAll('.list-name');
	listNames.forEach(function (list) {
		if (list.dataset.name === listItem.dataset.name) {
			list.classList.add('list-name--selected');
		} else {
			list.classList.remove('list-name--selected');
		}
	});
}

// Set the --selected modifier class exclusively on the currently selected list element (background)
function setSelectedItemClass(listItem) {
	let listItems = document.querySelectorAll('.list-item');
	listItems.forEach(function (list) {
		if (list.dataset.name === listItem.dataset.name) {
			list.classList.add('list-item--selected');
		} else {
			list.classList.remove('list-item--selected');
		}
	});
}

// Add a new list element in the sidebar
function newListElement(list) {
	const li = document.createElement('li');
	const name = document.createElement('h4');
	const btn = document.createElement('button');
	const icon = document.createElement('img');

	icon.src = 'icons/list.svg';
	icon.classList.add('list-icon');

	li.classList.add('list-item');
	li.dataset.name = list;

	name.textContent = list;
	name.classList.add('list-name');
	name.dataset.name = list;

	// btn.innerHTML = "&times;"
	btn.classList.add('list-btn');
	btn.dataset.name = list;
	btn.appendChild(svgClose());
	btn.setAttribute('aria-label', 'Delete this list');

	li.appendChild(icon);
	li.appendChild(name);
	li.appendChild(btn);
	document.querySelector('.added-lists__list').appendChild(li);
}

// Take output from HTML date picker and format the following: 12/12/2000 => 12 Dec 2000
function dateFormatter(dateStr) {
	let year = parseInt(dateStr.slice(0, 4));
	let month = parseInt(dateStr.slice(5, 7)) - 1;
	let day = parseInt(dateStr.slice(8, 10));
	return format(new Date(year, month, day), 'd MMM yyyy');
}

// Create a tick-shaped SVG element (note, must use createElementNS as path and SVG are XML, not HTML formats)
function svgTick() {
	let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	let path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

	svg.setAttribute('width', '24');
	svg.setAttribute('height', '24');

	path.setAttribute('fill', 'currentColor');
	path.setAttribute(
		'd',
		'M11.23 13.7l-2.15-2a.55.55 0 0 0-.74-.01l.03-.03a.46.46 0 0 0 0 .68L11.24 15l5.4-5.01a.45.45 0 0 0 0-.68l.02.03a.55.55 0 0 0-.73 0l-4.7 4.35z'
	);

	svg.appendChild(path);
	return svg;
}

// Create a close icon SVG
function svgClose() {
	let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	let pathOne = document.createElementNS('http://www.w3.org/2000/svg', 'path');
	let pathTwo = document.createElementNS('http://www.w3.org/2000/svg', 'path');

	svg.setAttribute('width', '24px');
	svg.setAttribute('height', '24px');
	svg.setAttribute('viewBox', '0 0 24 24');

	pathOne.setAttribute('d', 'M0 0h24v24H0z');
	pathOne.setAttribute('fill', 'none');

	pathTwo.setAttribute(
		'd',
		'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'
	);

	svg.appendChild(pathOne);
	svg.appendChild(pathTwo);
	return svg;
}

// Dynamically fill the add modal select element with options matching the currently available lists
function addListsToDropdown() {
	const dropdown = document.querySelector('#todo-form__list');
	for (const list in getLists()) {
		const option = document.createElement('option');
		option.value = list;
		option.textContent = list;
		option.className = 'list-option';
		dropdown.appendChild(option);
	}
}

// Dynamically remove all lists from the add modal select element
function deleteListsFromDropdown() {
	const dropdown = document.querySelector('#todo-form__list');
	while (dropdown.lastElementChild) {
		dropdown.removeChild(dropdown.lastElementChild);
	}
}

// When the user is on a particular list view, it is easy to overlook the list dropdown menu and assume it is set to their current list. This function ensures that is the case.
function changeSelectedOption() {
	const options = document.querySelectorAll('.list-option');
	options.forEach(function (option) {
		if (option.value === getSelectedList()) {
			option.setAttribute('selected', '');
		}
	});
}

function refreshListDropdown() {
	deleteListsFromDropdown();
	addListsToDropdown();
	changeSelectedOption();
}

// Control the sidebar collapsing when the user clicks the collapse btn (function varies depending on starting state - mobile vs desktop)
function addSidebarCollapseControls() {
	document
		.querySelector('.sidebar__collapse')
		.addEventListener('click', function () {
			const sidebar = document.querySelector('.sidebar');
			const sidebarCollapse = document.querySelector('.sidebar__collapse');

			// Float will only be set to none if the mobile media query is active
			if (window.getComputedStyle(sidebar).float === 'none') {
				// Controls the sidebar size
				document.querySelector('.sidebar').classList.toggle('sidebar--mobile');
				document.querySelector('.sidebar').classList.remove('sidebar--small');

				// Controls the sidebar button orientation
				sidebarCollapse.classList.toggle('sidebar__collapse--left');
				sidebarCollapse.classList.remove('sidebar__collapse--right');
			} else {
				sidebarCollapse.classList.toggle('sidebar__collapse--right');
				sidebarCollapse.classList.remove('sidebar__collapse--left');
				document.querySelector('.sidebar').classList.toggle('sidebar--small');
			}
		});
}

// Delete sidebar list elements, and avoid removing inbox by targetting just the added lists
function deleteSidebarLists() {
	let addedLists = document.querySelectorAll('.added-lists__list li');
	addedLists.forEach(function (addedList) {
		addedList.remove();
	});
}

// Render the stored lists in the sidebar, avoiding the inbox which remains a 'set' element
function renderSidebarLists() {
	let currentLists = getLists();
	for (const list in currentLists) {
		if (list != 'Inbox') {
			newListElement(list);
		}
	}
}

// This function is used to ensure the sidebar is always dispalying the currently stored lists. Can be used with various buttons and actions
function refreshSidebarLists() {
	deleteSidebarLists();
	renderSidebarLists();
}

// Fill the view modal with the selected todo data, representing priority using exclamation points of different colour
function renderViewModal(list, todo) {
	let todoToView = findTodoByListAndId(list, todo);
	let viewPriority = document.querySelector('.view-todo__priority');
	let viewDate = document.querySelector('.view-todo__date');

	document.querySelector('.view-modal__title').textContent = list;
	document.querySelector('.view-todo__title').textContent = todoToView.title;
	document.querySelector('.view-todo__description').textContent =
		todoToView.description;

	if (todoToView.dueDate === '') {
		viewDate.textContent = '';
	} else {
		viewDate.textContent = `Due ${todoToView.dueDate}`;
	}

	viewPriority.className = 'view-todo__priority';

	switch (todoToView.priority) {
		case 'low':
			viewPriority.textContent = '!';
			viewPriority.classList.add('view-todo__priority--low');
			break;

		case 'medium':
			viewPriority.textContent = '!!';
			viewPriority.classList.add('view-todo__priority--med');
			break;

		case 'high':
			viewPriority.textContent = '!!!';
			viewPriority.classList.add('view-todo__priority--high');
			break;

		default:
			viewPriority.textContent = '';
			break;
	}
}

export {
	refreshTodoList,
	setSelectedClass,
	newListElement,
	svgTick,
	refreshListDropdown,
	addSidebarCollapseControls,
	refreshSidebarLists,
	svgClose,
	setSelectedItemClass,
	renderViewModal,
};
