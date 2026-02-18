console.log("Hello World");

interface Todo {
  title: string;
  description: string;
  dueDate: Date;
  status: "Complete" | "In Progress" | "Not Started";
}

const todos: Todo[] = [
  {
    title: "go home",
    description: "go home",
    dueDate: new Date(),
    status: "Complete",
  },
  {
    title: "Read a book",
    description: "React basics",
    dueDate: new Date(),
    status: "In Progress",
  },
];

function DrawTodos() {
  const todoSection = document.getElementById("todos");
  if (todoSection === null) {
    return;
  }
  todos.forEach((todo) => {
    todoSection.innerHTML += `<p>${todo.title}</p>`;
  });
}
DrawTodos();
