let tasks = [];
let listEl = document.getElementById("list");
let titleEl = document.getElementById("title");
let createdEl = document.getElementById("created-date");
let dateEl = document.getElementById("due-date");
let addBtn = document.getElementById("add-btn");
let lastTab = "today";

window.onload = function () {
  let todayStr = new Date().toISOString().slice(0, 10);
  createdEl.value = todayStr;
  dateEl.min = todayStr;
  markActiveTab(lastTab);
  renderTasks(lastTab);
};

addBtn.addEventListener("click", () => {
  let title = titleEl.value.trim();
  let createdDate = createdEl.value;
  let dueDate = dateEl.value;

  if (!title || !createdDate || !dueDate) {
    alert("Please enter all fields and select both dates!");
    return;
  }

  let task = {
    id: Date.now(),
    title: title,
    createdDate: createdDate,
    dueDate: dueDate,
    status: getStatus(dueDate),
    completed: false,
  };

  tasks.push(task);
  lastTab = task.status;
  markActiveTab(lastTab);
  renderTasks(lastTab);

  titleEl.value = "";
  dateEl.value = "";
});

function getStatus(dueDate) {
  let today = new Date();
  today.setHours(0, 0, 0, 0);

  let [year, month, day] = dueDate.split("-").map(Number);
  let due = new Date(year, month - 1, day);
  due.setHours(0, 0, 0, 0);

  if (due.getTime() === today.getTime()) return "today";
  if (due > today) return "pending";
  return "overdue";
}

function renderTasks(filter) {
  listEl.innerHTML = "";
  lastTab = filter;
  markActiveTab(filter);

  let filtered;
  if (filter === "completed") filtered = tasks.filter(t => t.completed);
  else if (filter === "all") filtered = tasks;
  else filtered = tasks.filter(t => t.status === filter && !t.completed);

  if (filtered.length === 0) {
    listEl.innerHTML = "<li>No tasks found</li>";
    return;
  }

  filtered.forEach(task => {
    let statusDot = `<span class="status-dot ${task.status}${task.completed ? " completed" : ""}"></span>`;
    let dateStr = task.dueDate ? `<span class="task-date">${formatDate(task.dueDate)}</span>` : "";

    let li = document.createElement("li");
    li.className = "task-card";
    li.dataset.id = task.id;

    li.innerHTML = `
      <div class="task-main">
        <input type="checkbox" ${task.completed ? "checked" : ""} onclick="completeTask(${task.id})" />
        ${statusDot}
        <span class="task-title">${escapeHtml(task.title)}</span>
        ${dateStr}
      </div>
      <div class="task-actions">
        <button class="edit-btn">&#9998;</button>
        <button class="delete-btn">&#128465;</button>
      </div>
    `;

    li.querySelector(".edit-btn").addEventListener("click", () => editTask(task.id, li));
    li.querySelector(".delete-btn").addEventListener("click", () => deleteTask(task.id));

    listEl.appendChild(li);
  });
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.innerText = text;
  return div.innerHTML;
}

function formatDate(dateStr) {
  let date = new Date(dateStr);
  return date.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "2-digit", year: "numeric" });
}

function completeTask(id) {
  let task = tasks.find(t => t.id === id);
  if (task) {
    task.completed = !task.completed;
    renderTasks(lastTab);
  }
}

function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  renderTasks(lastTab);
}

// ===== Fixed Edit Function =====
function editTask(id, li) {
  let task = tasks.find(t => t.id === id);
  if (!task) return;

  const titleSpan = li.querySelector(".task-title");
  const dateSpan = li.querySelector(".task-date");

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.value = task.title;
  titleInput.className = "edit-input";

  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.value = task.dueDate;
  dateInput.min = new Date().toISOString().slice(0, 10);
  dateInput.className = "edit-date-input";

  titleSpan.replaceWith(titleInput);
  if (dateSpan) dateSpan.replaceWith(dateInput);
  else li.querySelector(".task-main").appendChild(dateInput);

  titleInput.focus();

  function saveEdit() {
    const newTitle = titleInput.value.trim();
    const newDate = dateInput.value;

    if (!newTitle) { alert("Task title cannot be empty."); return; }
    if (!newDate) { alert("Please select a due date."); return; }

    task.title = newTitle;
    task.dueDate = newDate;
    task.status = getStatus(newDate);

    renderTasks(lastTab);
  }

  // Keyboard handling
  titleInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") dateInput.focus();
    if (e.key === "Escape") renderTasks(lastTab);
  });
  dateInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") saveEdit();
    if (e.key === "Escape") renderTasks(lastTab);
  });

  // Only keep blur on date input
  dateInput.addEventListener("blur", saveEdit);
}

function showTasks(tab) { renderTasks(tab); }
function markActiveTab(tab) {
  ["today","pending","overdue","completed","all"].forEach(t => {
    let btn = document.getElementById("tab-"+t);
    if(btn) btn.classList.remove("active");
  });
  let btn = document.getElementById("tab-"+tab);
  if(btn) btn.classList.add("active");
}

window.completeTask = completeTask;
window.deleteTask = deleteTask;
window.showTasks = showTasks;

