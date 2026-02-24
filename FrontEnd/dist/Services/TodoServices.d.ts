import type { Todo } from "../Views/TodoCard.js";
export declare class TodoService {
    localHost: string;
    get(): Promise<Todo[]>;
    create(todo: Todo): Promise<Todo>;
}
//# sourceMappingURL=TodoServices.d.ts.map