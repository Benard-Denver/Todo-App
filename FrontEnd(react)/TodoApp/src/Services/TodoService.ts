//import type { Todo } from "../Models/Todo.js";

// export class TodoService {
//   localHost = "https://localhost:44300/todos";
//   async get(): Promise<Todo[]> {
//     const getTodos = await fetch(this.localHost).then((response) => {
//       return response.json();
//     });
//     return getTodos;
//   }

//   async create(todo: Todo): Promise<Todo> {
//     const response = await fetch(this.localHost + "/todos", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(todo),
//     });

//     return response.json();
//   }

//   async delete(id: number) {
//     const response = await fetch(`${this.localHost}/todos/${id}`, {
//       method: "DELETE",
//     });
//     return response.status;
//   }

//   async update(id: number, todo: Todo): Promise<number> {
//     const response = await fetch(`${this.localHost}/todos/${id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(todo),
//     });
//     return response.status;
//   }
// }

