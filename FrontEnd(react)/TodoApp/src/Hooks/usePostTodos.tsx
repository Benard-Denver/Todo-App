import type { Todo } from "../Models/Todo";

export const usePostTodo = (username: string) => {
  const url = `https://localhost:44300/todos`;

  const createTodo = async (todo: Omit<Todo, "id" | "username">) => {
    const response = await fetch(`${url}?username=${username}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
