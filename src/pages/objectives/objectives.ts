import { MockProvider } from './../../providers/mock/mock';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ObjectivesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'objectives',
  segment: 'objectives'
})
@Component({
  selector: 'page-objectives',
  templateUrl: 'objectives.html',
})
export class ObjectivesPage {
  context = this.mock.getTasks();
  constructor(public navCtrl: NavController, public navParams: NavParams, private mock: MockProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ObjectivesPage');
  }
}
