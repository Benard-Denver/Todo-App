
import type { Todo } from "../Models/Todo";

export const usePutTodo = (username: string) => {
  const url = `https://localhost:44300/todos`;
  const updateTodo = async (todo: Todo) => {
    const response = await fetch(`${url}/${todo.id}?username=${username}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    if (!response.ok) {
      console.log("Failed to edit todo");
      const error = await response.json();
      console.log(error);
      return false;
    }
    return true;
  };
  return updateTodo;
};
