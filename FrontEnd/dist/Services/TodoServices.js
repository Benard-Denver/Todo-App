import { todos } from "../App.js";
export class TodoService {
    localHost = "https://localhost:44300";
    async get() {
        const getTodos = await fetch(this.localHost + "/todos").then((response) => {
            return response.json();
        });
        return getTodos;
    }
}
//# sourceMappingURL=TodoServices.js.map