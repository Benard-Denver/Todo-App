import { TodoService } from "../Services/TodoService";

export interface Todo {
  id?: number;
  title: string;
  description: string;
  dueDate: Date;
  status: "Not Started" | "In Progress" | "Complete";
}

export interface User {
  id?: number;
  username: string;
  password: string;
}

export const todoService: TodoService = new TodoService();
export const todos = await todoService.get();

// export const todos1: Todo[] = [
//   {
//     id: 1,
//     title: "Go home",
//     description:
//       "Go home and get enough rest. Come back tomorrow with fresh energy and get the job done. You really work worjed hard today",
//     dueDate: new Date(),
//     status: "Complete",
//   },
//   {
//     id: 2,
//     title: "Listen to music",
//     description: "Take a break and listen to some good music.",
//     dueDate: new Date(),
//     status: "Not Started",
//   },
//   {
//     id: 3,
//     title: "Read a book",
//     description: "React basics",
//     dueDate: new Date(),
//     status: "In Progress",
//   },
//   {
//     id: 4,
//     title: "Go home",
//     description:
//       "Go home and get enough rest. Come back tomorrow with fresh energy and get the job done. You really work worjed hard today",
//     dueDate: new Date(),
//     status: "Complete",
//   },
//   {
//     id: 5,
//     title: "Listen to music",
//     description: "Take a break and listen to some good music.",
//     dueDate: new Date(),
//     status: "Not Started",
//   },
//   {
//     id: 6,
//     title: "Read a book",
//     description: "React basics",
//     dueDate: new Date(),
//     status: "In Progress",
//   },
//   {
//     id: 7,
//     title: "Go home",
//     description:
//       "Go home and get enough rest. Come back tomorrow with fresh energy and get the job done. You really work worjed hard today",
//     dueDate: new Date(),
//     status: "Complete",
//   },
//   {
//     id: 8,
//     title: "Listen to music",
//     description: "Take a break and listen to some good music.",
//     dueDate: new Date(),
//     status: "Not Started",
//   },
//   {
//     id: 9,
//     title: "Read a book",
//     description: "React basics",
//     dueDate: new Date(),
//     status: "In Progress",
//   },
// ];

// useEffect(() => {
//   const loadTodos = async () => {
//     const getTodos = await todoService.get();
//     setTodos(getTodos);
//   };
//   loadTodos();
// }, []);
