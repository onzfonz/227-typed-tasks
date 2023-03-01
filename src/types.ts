export interface Task {
    id: number,
    content: string
}

export type NewTask = Omit<Task, 'id'>