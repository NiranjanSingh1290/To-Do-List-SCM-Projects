// updated code 
const taskInput = document.getElementById("task");
const addBtn = document.getElementById("add");
const taskList = document.getElementById("taskList");

// Add task
addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    createTask(taskText);
    taskInput.value = "";
  }
});

// Allow pressing Enter to add task
taskInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    addBtn.click();
  }
});

// Create a new task
function createTask(text) {
  const taskItem = document.createElement("li");
  taskItem.innerHTML = `
    <span>${text}</span>
    <button class="delete">Delete</button>
  `;
  taskList.appendChild(taskItem);

  // Delete task
  const deleteBtn = taskItem.querySelector(".delete");
  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    taskItem.remove();
  });

  // Mark as completed
  taskItem.addEventListener("click", (e) => {
    if (e.target.tagName !== "BUTTON") {
      taskItem.classList.toggle("completed");
    }
  });
}
