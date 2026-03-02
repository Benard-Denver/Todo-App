import type { Todo } from "../Views/TodoCard.js";
export declare class TodoService {
    localHost: string;
    get(): Promise<Todo[]>;
    create(todo: Todo): Promise<Todo>;
    delete(id: number): Promise<void>;
    update(id: number, todo: Todo): Promise<Number>;
}
//# sourceMappingURL=TodoServices.d.ts.map