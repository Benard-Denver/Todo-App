import type { Todo } from "./Views/TodoCard";
import { Home } from "./Views/Home";

console.log("Hello World");

export const todos: Todo[] = [
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

const app = document.getElementById("app-todo")!;
app.appendChild(Home());
