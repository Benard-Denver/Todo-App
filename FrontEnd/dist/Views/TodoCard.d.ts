export interface Todo {
    id?: number;
    title: string;
    description: string;
    dueDate: Date;
    status: "Complete" | "In Progress" | "Not Started";
}
export declare function TodoCard(todo: Todo, onDelete: (id: number) => void, onEdit: (todo: Todo) => void): HTMLElement;
//# sourceMappingURL=TodoCard.d.ts.map