
let todoInput = document.getElementById("todoInput");
let todoList = document.getElementById("todoList");

// Add Todo
function addTodo(){

    let inputValue = todoInput.value.trim();

    if(inputValue === ""){
        alert("Please enter a todo");
        return;
    }

    // Create list item
    let li = document.createElement("li");

    // Todo text
    let todoText = document.createElement("span");
    todoText.innerText = inputValue;

    // Button container
    let buttonDiv = document.createElement("div");
    buttonDiv.className = "todo-buttons";

    // Edit button
    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.className = "edit-btn";

    editBtn.onclick = function(){

        let updatedValue = prompt("Edit Todo", todoText.innerText);

        if(updatedValue !== null && updatedValue.trim() !== ""){
            todoText.innerText = updatedValue;
        }
    };

    // Delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete-btn";

    deleteBtn.onclick = function(){
        li.remove();
    };

    // Append buttons
    buttonDiv.appendChild(editBtn);
    buttonDiv.appendChild(deleteBtn);

    // Append text and buttons
    li.appendChild(todoText);
    li.appendChild(buttonDiv);

    // Append li to ul
    todoList.appendChild(li);

    // Clear input
    todoInput.value = "";
}

// Delete All
function deleteAll(){
    todoList.innerHTML = "";
}