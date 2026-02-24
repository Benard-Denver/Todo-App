import { todos } from "../App.js";
import { ShowDialog } from "./CreateDialog.js";
import { todoService } from "../App.js";

export function TodoSiderbar(): HTMLElement {
  const sidebar = document.createElement("div");
  const addBtn = document.createElement("button");
  const homeBtn = document.createElement("button");
  const progressBtn = document.createElement("button");
  const doneBtn = document.createElement("button");

  //sidebar
  sidebar.className = "sidebar";

  // add button
  addBtn.textContent = "";
  addBtn.className = "add-btn";
  const addImage = document.createElement("img");
  addImage.className = "add-img";
  addImage.src = "./assets/plus.png";
  addBtn.appendChild(addImage);
  addBtn.addEventListener("click", () => {
    
  });

  // home button
  homeBtn.textContent = "";
  const homeImage = document.createElement("img");
  homeImage.className = "home-img";
  homeImage.src = "./assets/home.png";
  homeBtn.appendChild(homeImage);

  // in progress button
  progressBtn.textContent = "";
  const progressImage = document.createElement("img");
  progressImage.className = "loading-img";
  progressImage.src = "./assets/loading.png";
  progressBtn.appendChild(progressImage);

  doneBtn.textContent = "";
  const doneImage = document.createElement("img");
  doneImage.className = "loading-img";
  doneImage.src = "./assets/checklist.png";
  doneBtn.appendChild(doneImage);

  sidebar.appendChild(addBtn);
  sidebar.appendChild(homeBtn);
  sidebar.appendChild(progressBtn);
  sidebar.appendChild(doneBtn);

  document.body.appendChild(sidebar);
  sidebar.appendChild(ShowDialog());
  return sidebar;
}
