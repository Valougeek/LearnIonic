import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlbumsPage } from '../albums/albums';
import { PhotosPage } from '../photos/photos';
import { SettingsPage } from '../settings/settings';
import { HomePage } from '../home/home';


/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  rootPage1: any;
  rootPage2: any;
  rootPage3: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.rootPage1 = HomePage;
    this.rootPage2 = PhotosPage;
    this.rootPage3 = SettingsPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
