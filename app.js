// Get references to the elements
const addButton = document.getElementById('add-task-btn');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Function to add a new task
function addTask() {
  const taskText = todoInput.value.trim();
  
  if (taskText !== '') {
    const li = document.createElement('li');
    
    // Create a text node with the task text
    const taskContent = document.createTextNode(taskText);
    
    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    
    // Append the task content and delete button to the list item
    li.appendChild(taskContent);
    li.appendChild(deleteButton);
    
    // Add event listener for the delete button
    deleteButton.addEventListener('click', () => {
      li.remove();
    });

    // Toggle task completion when clicked
    li.addEventListener('click', () => {
      li.classList.toggle('completed');
    });

    // Append the list item to the todo list
    todoList.appendChild(li);
    
    // Clear the input field
    todoInput.value = '';
  }
}

// Add task on button click
addButton.addEventListener('click', addTask);

// Optionally, add task on pressing the Enter key
todoInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});
