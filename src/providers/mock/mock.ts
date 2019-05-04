import { Injectable } from '@angular/core';
import { Task } from '../../app/models/task';

/*
  Generated class for the MockProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MockProvider {
  constructor() {}

  getTasks(): Task[] {
    return [
      {
        key: 'test_key',
        title: 'Dentist',
        description: 'Dentist third floor, avenue Liberty'
      },
      {
        key: 'test_key2',
        title: 'Publish article',
        description: 'publish development blog article'
      },
    ]
  }

  getObjectives() {
    return [
      {
        name: 'Play guitar like a pro',
        details: 'Learn new song'
      },
      {
        name: 'Publish npm module',
        details: 'Publish open source module on npm'
      },
    ]
  }
}
