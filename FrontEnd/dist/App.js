console.log("Hello World");
const todos = [
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
function DrawTodos() {
    const todoSection = document.getElementById("todos");
    if (todoSection === null) {
        return;
    }
    todos.forEach((todo) => {
        todoSection.innerHTML += `<p>${todo.title}</p>`;
    });
}
DrawTodos();
export {};
//# sourceMappingURL=App.js.map