import { todos } from "../App.js";
import type { Todo } from "../Views/TodoCard.js";

export class TodoService {
  localHost = "https://localhost:44300";
  async get(): Promise<Todo[]> {
    const getTodos = await fetch(this.localHost + "/todos").then((response) => {
      return response.json();
    });
    return getTodos;
  }

  async create(todo: Todo): Promise<Todo> {
    const response = await fetch(this.localHost + "/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });

    return response.json();
  }
}
