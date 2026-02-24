let dialog = null;
export function ShowDialog(onCreate) {
    if (!dialog) {
        dialog = constructDialog(onCreate);
        document.body.appendChild(dialog);
    }
    else {
        dialog.querySelector("form")?.reset(); // clear previous input
    }
    dialog.showModal();
}
function constructDialog(onCreate) {
    //dialog to create
    const createDialog = document.createElement("dialog");
    createDialog.className = "create-dialog";
    //todo form
    const createForm = document.createElement("form");
    createForm.className = "create-form";
    // todo title
    const todoTitle = document.createElement("input");
    todoTitle.placeholder = "Todo title";
    todoTitle.type = "text";
    todoTitle.className = "todo-title";
    const divider = document.createElement("hr");
    //cancel button
    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "x";
    cancelBtn.className = "cancel-btn";
    cancelBtn.type = "button";
    cancelBtn.addEventListener("click", (e) => {
        createDialog.close();
    });
    //todo description
    const todoDescription = document.createElement("textarea");
    todoDescription.placeholder = "Description";
    todoDescription.className = "todo-description";
    //div for create button and date
    const dialogFooter = document.createElement("div");
    dialogFooter.className = "dialog-footer";
    //create button
    const createBtn = document.createElement("button");
    createBtn.textContent = "Create";
    createBtn.type = "button";
    createBtn.className = "dialog-create-btn";
    createBtn.addEventListener("click", () => {
        const todo = {
            title: todoTitle.value,
            description: todoDescription.value,
            dueDate: new Date(todoDueDate.value),
            status: "Not Started",
        };
        onCreate(todo);
        createDialog.close();
    });
    // date option
    const todoDueDate = document.createElement("input");
    todoDueDate.type = "date";
    todoDueDate.className = "due-date";
    todoDueDate.name = "dateField";
    dialogFooter.appendChild(createBtn);
    dialogFooter.appendChild(todoDueDate);
    createForm.appendChild(todoTitle);
    createForm.appendChild(cancelBtn);
    createForm.appendChild(todoDescription);
    createForm.appendChild(dialogFooter);
    createDialog.appendChild(createForm);
    document.body.appendChild(createDialog);
    createDialog.showModal();
    return createDialog;
}
//# sourceMappingURL=CreateDialog.js.map