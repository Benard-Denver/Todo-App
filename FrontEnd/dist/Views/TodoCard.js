export function TodoCard(todo) {
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
    // delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", () => {
        card.remove();
    });
    deleteBtn.addEventListener("mouseover", () => {
        deleteBtn.style.backgroundColor = "red";
        deleteBtn.style.color = "white";
    });
    deleteBtn.addEventListener("mouseout", () => {
        deleteBtn.style.backgroundColor = "#fa7070";
        deleteBtn.style.color = "black";
    });
    card.append(title, topDivider, details, bottomDivider, todoFooter, deleteBtn);
    return card;
}
//# sourceMappingURL=TodoCard.js.map