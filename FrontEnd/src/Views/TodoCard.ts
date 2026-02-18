export interface Todo {
  title: string;
  description: string;
  dueDate: Date;
  status: "Complete" | "In Progress" | "Not Started";
}

export function TodoCard(todo: Todo): HTMLElement {
  const card = document.createElement("div");
  card.className = "todo-card";

  const title = document.createElement("h3");
  title.textContent = todo.title;

  const details = document.createElement("p");
  details.textContent = todo.description;

  const status = document.createElement("span");
  status.className = `status ${todo.status.toLowerCase()}`;
  status.textContent = todo.status;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "x";
  deleteBtn.className = "delete-btn";

  deleteBtn.addEventListener("click", () => {
    card.remove();
  });

  card.append(title, details, status, deleteBtn);

  return card;
}
