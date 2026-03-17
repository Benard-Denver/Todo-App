import { useState } from "react";
import { getToken } from "./useLoginUser";

export const useDeleteTodo = () => {
  const [url] = useState("https://localhost:44300/todos");
  const deleteTodo = async (id: number) => {
    const token = getToken();
    if (!token) {
      console.log("No token found");
      return;
    }

    const response = await fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      console.log("Failed to delete todo");
      return false;
    }
    return true;
  };
  return deleteTodo;
};
