const todo = {
  title: "Do laundry",
  description: "Black clothes only",
  // May need function to calculate date format
  dueDate: "01-02-2021",
  priority: "medium",
}

function createTodo(title, description, dueDate, priority) {
  return { title, description, dueDate, priority }
};

let first = createTodo("Laundry", "black clothes only", "01-02-2021", "medium");

console.log(first);