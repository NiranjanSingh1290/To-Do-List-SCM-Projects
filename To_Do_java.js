// add basic code of java script.
function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value;

    if (task.trim() === "") return;

    var li = document.createElement("li");
    li.textContent = task;

    // Add delete button
    var btn = document.createElement("button");
    btn.textContent = "Delete";
    btn.onclick = function() {
      li.remove();
    };

    li.appendChild(btn);
    document.getElementById("taskList").appendChild(li);

    input.value = "";
  }