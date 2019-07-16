import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

interface State {
  showCompleted: boolean;
  searchBarInput: string;
}

@Injectable()
export class StoreProvider {
  private readonly _state = new BehaviorSubject<State>({
    showCompleted: false,
    searchBarInput: ''
  });

  readonly state$ = this._state.asObservable();

  get state(): State {
    return this._state.getValue();
  }

  setSearchBarInput(searchInput) {
    this.dispatch('searchBarInput', searchInput);
  }

  showCompleted() {
    this.dispatch('showCompleted', true);
  }

  showToDo() {
    this.dispatch('showCompleted', false);
  }

  dispatch(property, value) {
    const state = this._state.getValue();
    state[property] = value;
    this._state.next(state);
  }
}
