import { Injectable } from '@angular/core';

/*
  Generated class for the MockProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MockProvider {

  constructor() {
    console.log('Hello MockProvider Provider');
  }

  getTasks() {
    return [
      {
        name: 'Dentist',
        details: 'Dentist floo3, avenue Liberty'
      },
      {
        name: 'Publish article',
        details: 'publish development blog article'
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
