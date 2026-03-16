import { useEffect, useState } from "react";
import type { Todo } from "../Models/Todo";

export const useGetTodos = (username: string) => {
  const [url] = useState(`https://localhost:44300/todos?username=${username}`);
  const [todos, setTodos] = useState<Todo[]>([]);

  const getTodos = async () => {
    fetch(url).then(async (response) => {
      const res: Todo[] = await response.json();
      setTodos(res);
    });
  };

  useEffect(() => {
    if (username) {
      getTodos();
    }
  }, [username]);

  return { todos, refresh: getTodos };
};
