import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PhotoLibrary } from '@ionic-native/photo-library';
import { Toast } from '@ionic-native/toast';

/**
 * Generated class for the PhotosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-photos',
  templateUrl: 'photos.html',
})
export class PhotosPage {

  albumsBase: string[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private photoLibrary: PhotoLibrary, private toast: Toast) {

    this.photoLibrary.requestAuthorization().then(() => {
      this.photoLibrary.getLibrary().subscribe({
        next: library => {
          library.forEach(function (libraryItem) {
            this.ShowToast(libraryItem.thumbnailURL);
            this.albumsBase.add(libraryItem.thumbnailURL);
          });
        },
        error: err => { this.ShowToast('could not get photos'); },
        complete: () => { this.ShowToast('done getting photos'); }
      });
    })
      .catch(err => this.ShowToast('permissions weren\'t granted'));

    
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhotosPage');
  }

  ShowToast(message:string){
    this.toast.show(`I'm a toast`, '5000', 'center').subscribe(
      toast => {
        console.log(toast);
      })
  }



}
