// new functionality add 
function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, i) => {
      const div = document.createElement('div');
      div.innerHTML = `
        <span class="task" contenteditable="false">${task.text}</span>
        <button class='edit'>Edit</button>
        <span class="delete">Delete</span>
      `;
      // Edit button logic
      div.querySelector('.edit').addEventListener('click', function() {
        const span = div.querySelector('.task');
        if (this.textContent === 'Edit') {
          span.contentEditable = "true";
          span.focus();
          this.textContent = 'Save';
        } else {
          span.contentEditable = "false";
          tasks[i].text = span.textContent;
          localStorage.setItem("tasks", JSON.stringify(tasks));
          this.textContent = 'Edit';
        }
      });
      // Delete button logic...
      taskList.appendChild(div);
    });
  }
  