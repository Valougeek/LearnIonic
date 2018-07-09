import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { PhotoLibrary } from '@ionic-native/photo-library';


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

  albumsBase: string[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private photoLibrary: PhotoLibrary, private toastCtrl: ToastController) {

    this.photoLibrary.requestAuthorization({ read: true, write: true }).then(() => {
      this.photoLibrary.getLibrary().subscribe({
        next: library => {
          library.forEach(function (libraryItem) {
            this.ShowToast(libraryItem.thumbnailURL);
            this.albumsBase.add(libraryItem.thumbnailURL);
          });
        },
        //error: error => { this.ShowToast('error') },
        error: err => { console.log('getLibrary error: ' + err) },
        //complete: () => { this.ShowToast('done getting photos'); }
        complete: () => { console.log(`completed`)}
      });
    })
    .catch(err => console.log('permissions weren\'t granted'));
  }

  ShowToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }



}
