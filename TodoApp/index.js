function addTodo() {
  let task = document.getElementById("task").value;
  let li = document.createElement("li");
  li.textContent = task;
  document.getElementById("list").appendChild(li);
  document.getElementById("task").value = "";
  updateTaskCount(); // Update task count after adding a task
}

function clearAll() {
  document.getElementById("list").innerHTML = "";
  updateTaskCount(); // Update task count after clearing all tasks
}

function updateTaskCount() {
  let count = document.querySelectorAll("li").length - 1;
  document.getElementById("total").textContent = count;
}
