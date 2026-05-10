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