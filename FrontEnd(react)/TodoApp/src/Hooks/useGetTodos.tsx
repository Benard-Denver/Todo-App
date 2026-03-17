import { useEffect, useState } from "react";
import type { Todo } from "../Models/Todo";
import { getToken } from "./useLoginUser";

export const useGetTodos = () => {
  const [url] = useState(`https://localhost:44300/todos`);
  const [todos, setTodos] = useState<Todo[]>([]);

  const getTodos = async () => {
    const token = getToken();
    if (!token) {
      console.log("No token found");
      return;
    }

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      console.log("failed to fetch todos", response.status);
    }

    const data = await response.json();
    setTodos(data);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return { todos, refresh: getTodos };
};
