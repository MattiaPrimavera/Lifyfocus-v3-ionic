import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';

interface IState {
  isAuth: boolean;
}

/*
  Generated class for the StoreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class Store {
  private store = new ReplaySubject<IState>(1);
  private state: IState;

  dispatch(partialState: Partial<IState>) {
    /*
      Deep copy of the object, in case it contains other nested object
    */
    const flatPartialState = JSON.parse(JSON.stringify(partialState));

    /*
      We can't just override the state, because the new state would delete all values
    */
    this.state = {...this.state, ...flatPartialState};
    this.store.next(this.state);
  }

  select<T extends keyof IState>(key: T): Observable<IState[T]> {
    return this.store.pluck(key);
  }

  // selectOnce<T extends keyof IState>(key: T): Observable<IState[T]> {
  //   return this.store.pluck(key)
  //     .take(1);
  // }

  selectSnapshot<T extends keyof IState>(key: T): IState[T] {
    return this.state[key];
  }

  constructor() {}
}
