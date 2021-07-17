// Create form for adding todos dynamically in JS
function createTodoForm() {
  const form = document.createElement("form");
  form.classList.add("todoForm");

  // Create title and description inputs/labels
  const inputTitle = document.createElement("input");
  inputTitle.id = "title";
  inputTitle.type = "text";
  inputTitle.classList.add("todoForm__title", "todoForm__input");
  
  const inputDescription = document.createElement("input");
  inputDescription.id = "description";
  inputDescription.type = "text";
  inputDescription.classList.add("todoForm__description", "todoForm__input");

  const labelTitle = document.createElement("label");
  labelTitle.setAttribute("for", "title");
  labelTitle.textContent = "Title";
  
  const labelDescription = document.createElement("label");
  labelDescription.setAttribute("for", "description");
  labelDescription.textContent = "Description";
  
  // Append to form
  form.appendChild(labelTitle);
  form.appendChild(inputTitle);
  form.appendChild(labelDescription);
  form.appendChild(inputDescription);
  
  // Create and append full dropdown list
  const labelDropdown = document.createElement("label");
  labelDropdown.setAttribute("for", "priority");
  labelDropdown.textContent = "Priority";
  
  const dropdown = document.createElement("select");
  dropdown.id = "priority"
  dropdown.name = "priority"
  
  form.appendChild(labelDropdown);
  form.appendChild(dropdown);
  
  const options = ["high", "medium", "low"];
  
  // Set values for each option as it is added to the DOM
  for (let i = 0; i < options.length; i++) {
    const option = document.createElement("option");
    option.value = `${options[i]}`;
    option.textContent = options[i][0].toUpperCase() + options[i].substring(1);
    dropdown.appendChild(option);
  }
  
  // Create and append submit button
  const btn = document.createElement("button");
  btn.type = "submit";
  btn.textContent = "Add";
  btn.classList.add("todoForm__btn");
  
  form.appendChild(btn);
  
  // Append to DOM
  document.body.appendChild(form);

}

export { createTodoForm };