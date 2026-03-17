import type { Todo } from "../Models/Todo";
import { getToken } from "./useLoginUser";

export const usePostTodo = () => {
  const url = `https://localhost:44300/todos`;

  const createTodo = async (todo: Omit<Todo, "id" | "username">) => {
    const token = getToken();
    if (!token) {
      console.log("No token found");
      return;
    }

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        ...todo,
      }),
    });
    if (!response.ok) {
      console.log("Failed to create todo");
      return false;
    }
    return true;
  };
  return createTodo;
};
