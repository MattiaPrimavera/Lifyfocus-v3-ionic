import { Task } from "../../app/models/task";
import { Observable } from "rxjs";

export interface IDatabase {
  getTasks(): Observable<Task[]>;
  addTask(task: Task): PromiseLike<any>;
  setDone(task: Task): Promise<void>;
  editTask(task: Task): Promise<void>;
  removeTask(task: Task): Promise<void>;
}
