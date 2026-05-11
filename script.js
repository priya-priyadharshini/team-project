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