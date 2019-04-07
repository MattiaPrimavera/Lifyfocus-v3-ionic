import { MockProvider } from './../../providers/mock/mock';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  context = this.mock.getTasks();
  constructor(public navCtrl: NavController, private mock: MockProvider) {
  }
}
