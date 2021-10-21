export interface Task {
  description: string,
  state: boolean,
  date: number
}

export interface Action {
  type: string,
  task: Task,
  list: Task[],
}
