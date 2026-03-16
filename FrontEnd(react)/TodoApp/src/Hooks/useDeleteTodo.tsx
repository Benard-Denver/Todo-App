import { useState } from "react";

export const useDeleteTodo = () => {
  const [url] = useState("https://localhost:44300/todos");
  const deleteTodo = async (id: number) => {
    const response = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      console.log("Failed to delete todo");
      return false;
    }
    return true;
  };
  return deleteTodo;
};

