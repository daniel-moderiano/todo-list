// Use e.preventDefault when user 'submits' form

// Add listener to the todo form button
function btnTest() {
  const submitBtn = document.querySelector("button[type='submit']");
  submitBtn.addEventListener("click", function(e) {
    e.preventDefault();
    // Function to extract form data
    formData();
  })
}

function formData() {
  // Take DOM element input (form) and extract data
  const dropdown = document.querySelector("#priority");
  console.log(dropdown.value);
}

export { btnTest }