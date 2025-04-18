let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let filter = 'all';

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
  const list = document.getElementById('task-list');
  list.innerHTML = '';
  let filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });
  filteredTasks.forEach((task, idx) => {
    const li = document.createElement('li');
    li.className = task.completed ? 'completed' : '';
    li.innerHTML = `
      <input type="checkbox" ${task.completed ? 'checked' : ''} data-idx="${idx}">
      <span class="task-text">${task.text}</span>
      <input class="edit-input" type="text" value="${task.text}" style="display:none;">
      <div class="actions">
        <button class="edit-btn" data-idx="${idx}">Edit</button>
        <button class="delete-btn" data-idx="${idx}">Delete</button>
      </div>
    `;
    list.appendChild(li);
  });
}

document.getElementById('add-btn').onclick = () => {
  const input = document.getElementById('new-task');
  const text = input.value.trim();
  if (text) {
    tasks.push({ text, completed: false });
    input.value = '';
    saveTasks();
    renderTasks();
  }
};

document.getElementById('task-list').onclick = function(e) {
  const idx = e.target.dataset.idx;
  if (e.target.classList.contains('delete-btn')) {
    tasks.splice(idx, 1);
    saveTasks();
    renderTasks();
  } else if (e.target.classList.contains('edit-btn')) {
    const li = e.target.closest('li');
    const span = li.querySelector('.task-text');
    const input = li.querySelector('.edit-input');
    if (e.target.textContent === 'Edit') {
      span.style.display = 'none';
      input.style.display = '';
      input.focus();
      e.target.textContent = 'Save';
    } else {
      const newText = input.value.trim();
      if (newText) {
        tasks[idx].text = newText;
        saveTasks();
        renderTasks();
      }
    }
  } else if (e.target.type === 'checkbox') {
    tasks[idx].completed = e.target.checked;
    saveTasks();
    renderTasks();
  }
};
