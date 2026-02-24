import type { Todo } from "./Views/TodoCard.js";
import { Home } from "./Views/Home.js";
import { TodoService } from "./Services/TodoServices.js";

console.log("Hello World");

export let todoService: TodoService = new TodoService();
export let todos = await todoService.get();

const app = document.getElementById("app-todo")!;
app.appendChild(Home());

export const todos1: Todo[] = [
  {
    title: "Go home",
    description:
      "Go home and get enough rest. Come back tomorrow with fresh energy and get the job done. You really work worjed hard today",
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
    description:
      "Go home and get enough rest. Come back tomorrow with fresh energy and get the job done. You really work worjed hard today",
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
    description:
      "Go home and get enough rest. Come back tomorrow with fresh energy and get the job done. You really work worjed hard today",
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
