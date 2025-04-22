
function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (task) {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    input.value = "";
    renderTasks();
  }
}

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;
    li.onclick = () => {
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      renderTasks();
    };
    list.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", renderTasks);
