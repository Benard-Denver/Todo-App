import cancel from "../assets/images/multiply.png";
import type { Todo } from "../Models/Todo";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect } from "react";
import Bell from "../assets/images/notification-bell.png";
import BlackBell from "../assets/images/black-notification.png";

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
  const [status] = useState<"Not Started" | "In Progress" | "Complete">(
    "Not Started",
  );
  const [notification, setNotification] = useState<Date | null>(null);
  const [notify, setNotify] = useState(false);

  useEffect(() => {
    if (existingTodo) {
      setTitle(existingTodo.title);
      setDescription(existingTodo.description);
      setDueDate(new Date(existingTodo.dueDate));
      setNotification(existingTodo.notificationTime!);
      setNotify(existingTodo.notify);
    }
  }, [existingTodo]);
  const newTodo: Omit<Todo, "id"> = {
    title,
    description,
    dueDate: date,
    status: status,
    notificationTime: notify ? notification : null,
    notify: notify,
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
        notificationTime: notify? notification : null,
        notify: notify
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
        <button
          className="notify"
          style={{
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
          }}
          onClick={() => {
            setNotify(!notify);
          }}
        >
          {<img src={notify ? Bell : BlackBell} />}
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
          {notify && <span className="notify-label">Notification:</span>}
          {notify && (
            <DatePicker
              selected={notification}
              className="dialog-date"
              onChange={(date: Date | null) => setNotification(date)}
              showTimeSelect
              dateFormat="Pp"
            />
          )}
          <span className="date-label">Due Date:</span>
          <input
            placeholder="Due-Date"
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
