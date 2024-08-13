export interface Todo {
    id: number,
    task: string,
    completed: boolean,
}

export type TodoListType = Todo[]
export type Filter = "all" | "active" | "completed";