function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value.trim();
  
    if (task === "") return;
  
    var li = document.createElement("li");
    li.textContent = task;
  
    var delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = function () {
      li.remove();
    };
  
    li.appendChild(delBtn);
    document.getElementById("taskList").appendChild(li);
  
    input.value = "";
  }
  
