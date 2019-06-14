export interface Task {
  key?: string,
  title: string,
  description: string,
  created: Date,
  closed?: Date,
  priority: number,
  done?: boolean;
}
