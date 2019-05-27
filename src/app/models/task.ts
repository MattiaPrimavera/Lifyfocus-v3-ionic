export interface Task {
  key?: string,
  title: string,
  description: string,
  created: Date,
  done?: boolean;
}
