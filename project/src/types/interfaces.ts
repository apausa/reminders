export interface Task {
  description: string,
  state: boolean,
}

export interface Action {
  type: string,
  task: Task,
  list: Task[],
}
