import cancel from "../assets/images/multiply.png";
import type { Todo } from "../Models/Todo";
import { useState } from "react";
import { todos } from "../Models/Todo";
import { useEffect } from "react";

interface DialogProps {
  onClose: () => void;
  addTodo: (todo: Todo) => void;
  updateTodo: (todo: Todo) => void;
  existingTodo?: Todo;
}



function Dialog({ onClose, addTodo, existingTodo, updateTodo }: DialogProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDueDate] = useState<Date>(new Date());
  const [status, setStatus] = useState<
    "Not Started" | "In Progress" | "Complete"
  >("Not Started");

  useEffect(() => {
    if (existingTodo) {
      setTitle(existingTodo.title);
      setDescription(existingTodo.description);
      setDueDate(new Date(existingTodo.dueDate));
    }
  }, [existingTodo]);

  const newTodo: Omit<Todo, "id"> = {
    title,
    description,
    dueDate: date,
    status: status,
  };
  const handleSubmit = async () => {
    if (!title.trim()) return;

    if (existingTodo) {
      await updateTodo({
        ...existingTodo,
        title,
        description,
        dueDate: date,
        status: existingTodo.status,
      });
    } else {
      addTodo(newTodo);
    }

    onClose();
  };
  return (
    <div className="overlay">
      <div className="dialog">
        <input
          type="text"
          placeholder="Todo Title"
          className="dialog-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="cancel-btn" onClick={onClose}>
          <img src={cancel} alt="cancel-icon" />
        </button>
        <hr className="top-divider" />
        <textarea
          placeholder="Description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <hr className="bottom-divider" />
        <div className="dialog-footer">
          <button className="btn-create" onClick={handleSubmit}>
            {existingTodo ? "UPDATE" : "CREATE"}
          </button>
          <input
            type="date"
            className="dialog-date"
            value={date ? date.toISOString().split("T")[0] : ""}
            onChange={(e) => setDueDate(new Date(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
}

export default Dialog;
