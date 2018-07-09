import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DisplayPhotosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-display-photos',
  templateUrl: 'display-photos.html',
})
export class DisplayPhotosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if(navParams.get('country')){

    }else{
      //display all pictures
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DisplayPhotosPage');
  }

}
