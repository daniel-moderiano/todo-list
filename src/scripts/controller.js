// Use e.preventDefault when user 'submits' form

// Add listener to the todo form button
function btnTest() {
  const submitBtn = document.querySelector("button[type='submit']");
  submitBtn.addEventListener("click", function(e) {
    e.preventDefault();
    // Function to extract form data
    console.log(formData());
  });
}

function formData() {
  // Take DOM element input (form) and extract data
  let title = document.querySelector("#title").value;
  let description = document.querySelector("#description").value;
  let priority = document.querySelector("#priority").value;
  let dueDate = document.querySelector("#date").value;
  return [title, description, priority, dueDate];
}

export { btnTest }