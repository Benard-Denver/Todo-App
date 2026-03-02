export function TodoCard(todo, onDelete, onEdit) {
    //todo card
    const card = document.createElement("div");
    card.className = "todo-card";
    //todo title
    const title = document.createElement("h3");
    title.textContent = todo.title;
    const topDivider = document.createElement("hr");
    topDivider.className = "top-line";
    //todo description
    const details = document.createElement("p");
    details.className = "todo-card-description";
    details.textContent = todo.description;
    // todo status
    const todoFooter = document.createElement("span");
    todoFooter.className = "todo-footer";
    const bottomDivider = document.createElement("hr");
    bottomDivider.className = "bottom-line";
    const dueDate = document.createElement("p");
    const status = document.createElement("p");
    status.className = "todo-status";
    status.textContent = todo.status;
    //todo due date
    dueDate.className = "due-date";
    dueDate.textContent = new Date(todo.dueDate).toLocaleDateString();
    if (status.textContent === "Complete") {
        status.style.outline = "3px solid #09eb24";
        dueDate.style.backgroundColor = "#09eb24";
    }
    if (status.textContent.includes("Started")) {
        status.style.outline = "3px solid #159ae7";
        dueDate.style.backgroundColor = "#159ae7";
    }
    if (status.textContent === "In Progress") {
        status.style.outline = "3px solid #eba009";
        dueDate.style.backgroundColor = "#eba009";
    }
    todoFooter.appendChild(status);
    todoFooter.appendChild(dueDate);
    //edit button
    const editBtn = document.createElement("button");
    editBtn.className = "edit-button";
    const editImage = document.createElement("img");
    editImage.className = "edit-button-img";
    editImage.src = "./assets/edit.png";
    editBtn.appendChild(editImage);
    editBtn.addEventListener("click", () => {
        onEdit(todo);
    });
    editBtn.addEventListener("mouseover", () => {
        editBtn.style.backgroundColor = "#656ff6";
    });
    editBtn.addEventListener("mouseout", () => {
        editBtn.style.backgroundColor = "yellow";
    });
    // delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "todo-delete-btn";
    const deleteImg = document.createElement("img");
    deleteImg.src = "./assets/delete.png";
    deleteImg.className = "del-img";
    deleteBtn.appendChild(deleteImg);
    deleteBtn.addEventListener("click", () => {
        if (todo.id !== undefined) {
            onDelete(todo.id);
        }
    });
    deleteBtn.addEventListener("mouseover", () => {
        deleteBtn.style.backgroundColor = "#f6fbc4";
    });
    deleteBtn.addEventListener("mouseout", () => {
        deleteBtn.style.backgroundColor = "#ffffff";
    });
    card.append(title, topDivider, details, bottomDivider, todoFooter, editBtn, deleteBtn);
    return card;
}
//# sourceMappingURL=TodoCard.js.map