console.log("Hello World");

interface Todo {
  title: string;
  description: string;
  dueDate: Date;
  status: "Complete" | "In Progress" | "Not Started";
}

let todos: Todo[] = [
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

//create todo
function addTodo(todo: Todo) {
  todos.push(todo);
}

//delete todo
function deleteTodo(index: number) {
  todos.splice(index, 1);
}

//update todo
function updateTodo(index: number, updatedTodo: Todo) {
  todos[index] = updatedTodo;
}

function DrawTodos() {
  const todoSection = document.getElementById("todos");
  let todoList = "";
  if (todoSection === null) {
    return;
  }
  todos.forEach((todo) => {
    todoList += `<p>${todo.title}</p>`;
  });
  todoSection.innerHTML = todoList;
}
DrawTodos();
