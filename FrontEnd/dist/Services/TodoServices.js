import { todos } from "../App.js";
export class TodoService {
    localHost = "https://localhost:44300";
    async get() {
        const getTodos = await fetch(this.localHost + "/todos").then((response) => {
            return response.json();
        });
        return getTodos;
    }
    async create(todo) {
        const response = await fetch(this.localHost + "/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(todo),
        });
        return response.json();
    }
}
//# sourceMappingURL=TodoServices.js.map