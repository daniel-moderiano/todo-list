
// Store all newly created todos in todos master array (can be added and deleted)
let todos = [];

// Factory function to create todo items
function createTodo(title, description, dueDate, priority) {
  return { title, description, dueDate, priority }
};



let first = createTodo("Laundry", "black clothes only", "01-02-2021", "medium");

console.log(first);