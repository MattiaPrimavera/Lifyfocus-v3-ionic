import { Observable } from "rxjs";

export interface IBaseService<T> {
  get(id: string): Observable<T>;
  list(): Observable<T[]>;
  add(item: T);
  update(item: T): Promise<void>;
  delete(id: string): Promise<void>;
}
