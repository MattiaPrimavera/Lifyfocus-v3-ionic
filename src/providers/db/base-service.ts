import { IBaseService } from "./ibase-service";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { IBaseEntity } from "./ibase-entity";
import { Observable } from "rxjs";
import * as Environment from '../../app/environment';

export abstract class BaseService<T extends IBaseEntity> implements IBaseService<T> {
  private ref: AngularFireList<T>;

  constructor(
    path: string,
    private db: AngularFireDatabase,
  ) {
    this.ref = Environment.NODE_ENV === 'test' ? null : this.db.list<T>(`${path}`);
  }

  // @TODO implement getter
  get(id: string): Observable<T> {
    return null;
  }

  list(): Observable<T[]> {
    return this.ref
      .snapshotChanges() // Key and value
      .map(changes => {
        return changes.map(c => ({
          key: c.payload.key,
          ...c.payload.val(),
        }))
      });
  }

  add(item: T) {
    this.ref.push(item);
  }

  update(item: T): Promise<void> {
    return this.ref.update(item.key, item);
  }

  delete(key: string): Promise<void> {
    return this.ref.remove(key);
  }
}
