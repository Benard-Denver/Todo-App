import { EmptySidebar } from "./SideBar";
import { useState } from "react";
import create from "../assets/images/plus.png";
import home from "../assets/images/home.png";
import loading from "../assets/images/loading.png";
import done from "../assets/images/checklist.png";
import logout from "../assets/images/logout.png";
import Dialog from "./Dialog";
import type { Todo } from "../Models/Todo";
import TodoCard from "./TodoCard";
import { useEffect } from "react";
import { useGetTodos } from "../Hooks/useGetTodos";
import { usePostTodo } from "../Hooks/usePostTodos";
import { useDeleteTodo } from "../Hooks/useDeleteTodo";
import { usePutTodo } from "../Hooks/usePutTodo";
import { toast } from "sonner";
//import { useSnackbar } from "notistack";
import { getNotifications } from "../Hooks/getNotifications";

const getNotification = async () => {
  await getNotifications();
};

export const logoff = () => {
  localStorage.removeItem("token");

  window.location.replace("/");
};

function Home() {
  const username = localStorage.getItem("todo_user") ?? "";
  const [showDialog, setDialog] = useState(false);
  const { todos, refresh } = useGetTodos();
  const [search, setSearch] = useState("");
  const [user, setUser] = useState("Guest");

  //const { enqueueSnackbar } = useSnackbar();
  getNotification();

  useEffect(() => {
    const savedName = username;
    if (savedName) {
      setUser(savedName);
    }
  }, [username]);

  const deleteTodo = useDeleteTodo();
  const handleDelete = async (id: number) => {
    const success = await deleteTodo(id);
    if (success) {
      // enqueueSnackbar("Todo Deleted!", {
      //   variant: "error",
      //   autoHideDuration: 3000,
      // });
      toast.error("Todo Deleted");
      console.log("Todo Deleted");
      await refresh();

      return refresh;
    }
  };

  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);

  const editTodo = usePutTodo();
  const updateTodo = async (todo: Todo) => {
    const success = await editTodo(todo);
    if (success) {
      await refresh();
    }
  };

  const newTodo = usePostTodo();
  const createTodo = async (todo: Todo) => {
    const success = await newTodo(todo);
    if (success) {
      await refresh();
    }
  };

  const handleEdit = (todo: Todo) => {
    setEditingTodo(todo);
    setDialog(true);
  };

  const [filter, setFilter] = useState<"All" | "pending" | "complete">("All");
  const filteredTodos = todos
    .filter((todo) => {
      if (filter === "All") return true;
      if (filter === "complete") return todo.status === "Complete";
      if (filter === "pending") return todo.status === "In Progress";
    })
    .filter((todo) => todo.title.toLowerCase().includes(search.toLowerCase()));

  const updateStatus = async (
    id: number,
    newStatus: "Not Started" | "In Progress" | "Complete",
  ) => {
    const todo = todos.find((t) => t.id === id);
    if (!todo) return;
    await updateTodo({
      ...todo,
      status: newStatus,
    });
  };

  return (
    <>
      <div className="home">
        <div className="sidebar">
          <button className="add-btn">
            <img
              src={create}
              alt="create icon"
              onClick={() => setDialog(true)}
            />
          </button>
          <button className="home-btn" onClick={() => setFilter("All")}>
            <img src={home} alt="home icon" />
          </button>
          <button className="loading-btn" onClick={() => setFilter("pending")}>
            <img src={loading} alt="in progress icon" />
          </button>
          <button className="done-btn" onClick={() => setFilter("complete")}>
            <img src={done} alt="done icon" />
          </button>
        </div>

        <div className="user-icon">
          <span>{user}</span>
          <h3>{user.charAt(0).toUpperCase()}</h3>
          <button onClick={logoff}>
            <img className="logout-icon" src={logout} alt="logout icon" />
          </button>
        </div>

        <div className="home-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="cards-wrapper">
            {filteredTodos.map((todo) => (
              <TodoCard
                onEdit={handleEdit}
                onDelete={handleDelete}
                onChangeStatus={updateStatus}
                key={todo.id}
                todo={todo}
              />
            ))}
          </div>
        </div>
        <EmptySidebar />
      </div>
      {showDialog && (
        <Dialog
          onClose={() => {
            setDialog(false);
            setEditingTodo(null);
          }}
          addTodo={createTodo}
          updateTodo={updateTodo}
          existingTodo={editingTodo}
        />
      )}
    </>
  );
}

export default Home;
