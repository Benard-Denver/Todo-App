export function TodoCard(todo) {
    //todo card
    const card = document.createElement("div");
    card.className = "todo-card";
    //todo title
    const title = document.createElement("h3");
    title.textContent = todo.title;
    //todo description
    const details = document.createElement("p");
    details.textContent = todo.description;
    // todo status
    const todoFooter = document.createElement("span");
    todoFooter.className = "todo-footer";
    const dueDate = document.createElement("p");
    const status = document.createElement("p");
    status.className = "todo-status";
    status.textContent = todo.status;
    //todo due date
    dueDate.className = "due-date";
    dueDate.textContent = todo.dueDate.toLocaleDateString();
    if (status.textContent === "Complete") {
        status.style.backgroundColor = "#09eb24";
        dueDate.style.backgroundColor = "#09eb24";
    }
    if (status.textContent.includes("Started")) {
        status.style.outline = "#2f05d7";
        dueDate.style.backgroundColor = "#2f05d7";
    }
    if (status.textContent === "In Progress") {
        status.style.backgroundColor = "#eba009";
        dueDate.style.backgroundColor = "#eba009";
    }
    todoFooter.appendChild(status);
    todoFooter.appendChild(dueDate);
    // delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", () => {
        card.remove();
    });
    card.append(title, details, todoFooter, deleteBtn);
    return card;
}
//# sourceMappingURL=TodoCard.js.map