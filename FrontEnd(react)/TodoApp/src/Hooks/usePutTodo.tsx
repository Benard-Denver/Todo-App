import type { Todo } from "../Models/Todo";
import { getToken } from "./useLoginUser";

export const usePutTodo = () => {
  const url = `https://localhost:44300/todos`;
  const updateTodo = async (todo: Todo) => {
    const token = getToken();
    if (!token) {
      console.log("No token found");
      return;
    }

    const response = await fetch(`${url}/${todo.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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
