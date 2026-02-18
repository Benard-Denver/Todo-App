export interface Todo {
    title: string;
    description: string;
    dueDate: Date;
    status: "Complete" | "In Progress" | "Not Started";
}
export declare function TodoCard(todo: Todo): HTMLElement;
//# sourceMappingURL=TodoCard.d.ts.map