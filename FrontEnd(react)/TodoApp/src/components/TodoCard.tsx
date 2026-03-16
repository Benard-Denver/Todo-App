import deleteIcon from "../assets/images/delete.png";
import editIcon from "../assets/images/edit.png";
import clock from "../assets/images/wall-clock.png";
import type { Todo } from "../Models/Todo";
import { useSnackbar } from "notistack";

interface TodoCardProps {
  todo: Todo;
  onDelete: (id: number) => void;
  onEdit: (todo: Todo) => void;
  onChangeStatus: (id: number, status: Todo["status"]) => void;
}

function TodoCard({ todo, onDelete, onEdit, onChangeStatus }: TodoCardProps) {
  const { enqueueSnackbar } = useSnackbar();
  return (
    <div className="todo-card">
      <h3>{todo.title}</h3>
      <hr className="top-divider" />
      <p className="todocard-description">{todo.description}</p>
      <hr className="bottom-divider" />
      <div className="todo-footer">
        <select
          className="todo-status"
          value={todo.status}
          onChange={(e) => {
            onChangeStatus(todo.id!, e.target.value as Todo["status"]);
            console.log(`Todo Status: ${todo.status}`);
            enqueueSnackbar("Todo status changed!", {
              variant: "info",
              autoHideDuration: 3000,
            });
          }}
          style={{
            backgroundColor:
              todo.status === "Complete"
                ? "#0DF224"
                : todo.status === "In Progress"
                  ? "#FAC514"
                  : "#F10410",
          }}
        >
          <option value={"Not Started"}>Not Started</option>
          <option value={"In Progress"}>In Progress</option>
          <option value={"Complete"}>Complete</option>
        </select>
        <div className="date-time">
          <img src={clock} alt="clock icon" className="clock" />
          <p className="todocard-dueDate">
            {new Date(todo.dueDate).toLocaleDateString()}
          </p>
        </div>
      </div>
      <button className="delete-btn">
        <img
          src={deleteIcon}
          alt="delete-icon"
          id="delete-icon"
          onClick={() => {
            if (todo.id !== undefined) {
              onDelete(todo.id);
            }
          }}
        />
      </button>
      <button className="edit-btn" onClick={() => onEdit(todo)}>
        <img src={editIcon} alt="edit-icon" id="edit-icon" />
      </button>
    </div>
  );
}
export default TodoCard;
