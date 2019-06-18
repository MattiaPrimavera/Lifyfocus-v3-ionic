export interface Task {
  key?: string,
  title: string,
  description: string,
  priority: number,
  isDone?: boolean,
  createdAt: Date,
  closedAt: Date,
  startAt?: Date,
  endAt?: Date,
}
