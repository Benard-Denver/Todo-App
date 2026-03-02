import { TodoCard, type Todo } from "./TodoCard.js";
import { todos } from "../App.js";
import { TodoSiderbar } from "./Sidebar.js";
import { ShowDialog } from "./CreateDialog.js";

export function Home(
  onCreate: (todo: Todo) => void,
  onDelete: (id: number) => void,
): HTMLElement {
  const mainDiv = document.createElement("div");
  mainDiv.className = "main-container";

  //div that contains sidebar and the container
  const pageContainer = document.createElement("div");
  pageContainer.className = "page-container";
  // div container
  const container = document.createElement("div");
  container.className = "home-container";
  //Title
  const title = document.createElement("h1");
  title.textContent = "TODO APP";
  mainDiv.appendChild(title);
  //searchbar
  const searchBar = document.createElement("input");
  searchBar.placeholder = "Search";
  searchBar.className = "search-input";
  container.appendChild(searchBar);
  // Cards wrapper
  const cardsWrapper = document.createElement("div");
  cardsWrapper.className = "cards-wrapper";
  todos.forEach((todo) => {
    cardsWrapper.appendChild(
      TodoCard(todo, onDelete, (existingTodo) => {
        ShowDialog(onCreate, existingTodo);
      }),
    );
  });
  container.appendChild(cardsWrapper);
  pageContainer.appendChild(TodoSiderbar(() => ShowDialog(onCreate)));
  pageContainer.appendChild(container);
  mainDiv.appendChild(pageContainer);
  return mainDiv;
}
