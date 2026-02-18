console.log("Hello World");
let todos = [
    {
        title: "go home",
        description: "go home",
        dueDate: new Date(),
        status: "Complete",
    },
    {
        title: "Read a book",
        description: "React basics",
        dueDate: new Date(),
        status: "In Progress",
    },
];
//create todo
function addTodo(todo) {
    todos.push(todo);
}
//delete todo
function deleteTodo(index) {
    todos.splice(index, 1);
}
//update todo
function updateTodo(index, updatedTodo) {
    todos[index] = updatedTodo;
}
function DrawTodos() {
    const todoSection = document.getElementById("todos");
    let todoList = "";
    if (todoSection === null) {
        return;
    }
    todos.forEach((todo) => {
        todoList += `<p>${todo.title}</p>`;
    });
    todoSection.innerHTML = todoList;
}
DrawTodos();
export {};
//# sourceMappingURL=App.js.map