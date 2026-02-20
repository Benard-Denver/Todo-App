import { TodoCard } from "./TodoCard.js";
import { todos } from "../App.js";

export function Home(): HTMLElement {
  const mainDiv = document.createElement("div");
  mainDiv.className = "main-container";
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
    cardsWrapper.appendChild(TodoCard(todo));
  });
  container.appendChild(cardsWrapper);
  mainDiv.appendChild(container);
  return mainDiv;
}
