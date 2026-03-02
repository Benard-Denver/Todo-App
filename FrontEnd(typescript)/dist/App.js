import { Home } from "./Views/Home.js";
import { TodoService } from "./Services/TodoServices.js";
import { ShowDialog } from "./Views/CreateDialog.js";
console.log("Hello World");
export let todoService = new TodoService();
export let todos = await todoService.get();
async function handleSaveClick(todo) {
    if (todo.id && todo.id !== 0) {
        await todoService.update(todo.id, todo);
    }
    else {
        await todoService.create(todo);
    }
    todos = await todoService.get();
    app.innerHTML = "";
    app.appendChild(Home(handleSaveClick, handleDelete));
}
async function handleDelete(id) {
    await todoService.delete(id);
    todos = await todoService.get();
    app.innerHTML = "";
    app.appendChild(Home(handleSaveClick, handleDelete));
}
const app = document.getElementById("app-todo");
app.appendChild(Home(handleSaveClick, handleDelete));
export const todos1 = [
    {
        title: "Go home",
        description: "Go home and get enough rest. Come back tomorrow with fresh energy and get the job done. You really work worjed hard today",
        dueDate: new Date(),
        status: "Complete",
    },
    {
        title: "Listen to music",
        description: "Take a break and listen to some good music.",
        dueDate: new Date(),
        status: "Not Started",
    },
    {
        title: "Read a book",
        description: "React basics",
        dueDate: new Date(),
        status: "In Progress",
    },
    {
        title: "Go home",
        description: "Go home and get enough rest. Come back tomorrow with fresh energy and get the job done. You really work worjed hard today",
        dueDate: new Date(),
        status: "Complete",
    },
    {
        title: "Listen to music",
        description: "Take a break and listen to some good music.",
        dueDate: new Date(),
        status: "Not Started",
    },
    {
        title: "Read a book",
        description: "React basics",
        dueDate: new Date(),
        status: "In Progress",
    },
    {
        title: "Go home",
        description: "Go home and get enough rest. Come back tomorrow with fresh energy and get the job done. You really work worjed hard today",
        dueDate: new Date(),
        status: "Complete",
    },
    {
        title: "Listen to music",
        description: "Take a break and listen to some good music.",
        dueDate: new Date(),
        status: "Not Started",
    },
    {
        title: "Read a book",
        description: "React basics",
        dueDate: new Date(),
        status: "In Progress",
    },
];
//# sourceMappingURL=App.js.map