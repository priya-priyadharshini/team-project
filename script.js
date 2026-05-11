<<<<<<< HEAD
document.getElementById("taskForm").addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let description = document.getElementById("description").value.trim();
    let assignedTo = document.getElementById("assignedTo").value.trim();
    let dueDate = document.getElementById("dueDate").value;
    let status = document.getElementById("status").value;
    let priority = document.getElementById("priority").value;

    let isValid = true;

    // Clear Errors
    document.getElementById("nameError").innerText = "";
    document.getElementById("descriptionError").innerText = "";
    document.getElementById("assignedError").innerText = "";
    document.getElementById("dateError").innerText = "";
    document.getElementById("statusError").innerText = "";
    document.getElementById("priorityError").innerText = "";

    // Validation
    if(name === ""){
        document.getElementById("nameError").innerText = "Task name is required";
        isValid = false;
    }

    if(description === ""){
        document.getElementById("descriptionError").innerText = "Description is required";
        isValid = false;
    }

    if(assignedTo === ""){
        document.getElementById("assignedError").innerText = "Assigned person is required";
        isValid = false;
    }

    if(dueDate === ""){
        document.getElementById("dateError").innerText = "Due date is required";
        isValid = false;
    }

    if(status === ""){
        document.getElementById("statusError").innerText = "Select a status";
        isValid = false;
    }

    if(priority === ""){
        document.getElementById("priorityError").innerText = "Select priority";
        isValid = false;
    }

    // Add Task Card
    if(isValid){

        let cardColor = "";

        if(priority === "URGENT"){
            cardColor = "urgent-card";
        }

        let taskCard = `
        <div class="col-md-4 mb-3">
            <div class="card shadow ${cardColor}">
                <div class="card-body">
                    <h5>${name}</h5>
                    <p>${description}</p>
                    <p><strong>Assigned To:</strong> ${assignedTo}</p>
                    <p><strong>Due Date:</strong> ${dueDate}</p>
                    <p><strong>Status:</strong> ${status}</p>
                    <p><strong>Priority:</strong> ${priority}</p>
                </div>
            </div>
        </div>
        `;

        document.getElementById("taskList").innerHTML += taskCard;

        alert("Task Added Successfully!");

        document.getElementById("taskForm").reset();
    }

});
=======
// script.js

let columns = [
  { title: "Column 1", color: "#3498db" },
  { title: "Column 2", color: "#2ecc71" },
  { title: "Column 3", color: "#e74c3c" }
];

function renderColumns() {
  const container = document.getElementById("gridContainer");

  container.style.gridTemplateColumns =
    `repeat(${columns.length}, 1fr)`;

  container.innerHTML = "";

  columns.forEach((col, index) => {

    const div = document.createElement("div");
    div.className = "column";
    div.style.backgroundColor = col.color;

    div.innerHTML = `
      <button class="edit-btn" onclick="editColumn(${index})">
        Edit
      </button>

      <h2>${col.title}</h2>

      <div class="order-box">
        Order:
        <input type="number"
               min="1"
               max="${columns.length}"
               value="${index + 1}"
               onchange="changeOrder(${index}, this.value)">
      </div>
    `;

    container.appendChild(div);
  });

  document.getElementById("columnCount").value = columns.length;
}

function addColumn() {
  const num = columns.length + 1;

  columns.push({
    title: `Column ${num}`,
    color: "#9b59b6"
  });

  renderColumns();
}

function removeColumn() {
  if (columns.length > 1) {
    columns.pop();
    renderColumns();
  }
}

function updateColumns() {
  let count = parseInt(
    document.getElementById("columnCount").value
  );

  if (count > columns.length) {

    while (columns.length < count) {
      columns.push({
        title: `Column ${columns.length + 1}`,
        color: "#34495e"
      });
    }

  } else {

    columns = columns.slice(0, count);
  }

  renderColumns();
}

function editColumn(index) {

  let newTitle = prompt(
    "Enter column title:",
    columns[index].title
  );

  let newColor = prompt(
    "Enter background color:",
    columns[index].color
  );

  if (newTitle) {
    columns[index].title = newTitle;
  }

  if (newColor) {
    columns[index].color = newColor;
  }

  renderColumns();
}

function changeOrder(oldIndex, newPosition) {

  newPosition = parseInt(newPosition) - 1;

  if (
    newPosition >= 0 &&
    newPosition < columns.length
  ) {

    const movedColumn = columns.splice(oldIndex, 1)[0];

    columns.splice(newPosition, 0, movedColumn);

    renderColumns();
  }
}

renderColumns();
>>>>>>> 2e0c3362c1bbd985520561296d1a2115e208923d
