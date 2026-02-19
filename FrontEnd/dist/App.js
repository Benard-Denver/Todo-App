import { Home } from "./Views/Home.js";
console.log("Hello World");
export const todos = [
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
// function DrawTodos() {
//   const todoSection = document.getElementById("todos");
//   let todoList = "";
//   if (todoSection === null) {
//     return;
//   }
//   todos.forEach((todo) => {
//     todoList += `<p>${todo.title}</p>`;
//   });
//   todoSection.innerHTML = todoList;
// }
// DrawTodos();
const app = document.getElementById("app-todo");
app.appendChild(Home());
//# sourceMappingURL=App.js.map