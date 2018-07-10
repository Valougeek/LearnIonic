import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ServiceProvider } from '../providers/service/service';
import { ListUtils } from '../Utils/list';
import { DisplayPhotosPage } from '../pages/display-photos/display-photos';
import { AlbumsPage } from '../pages/albums/albums';
import { PhotosPage } from '../pages/photos/photos';
import { SettingsPage } from '../pages/settings/settings';
import { PhotoLibrary } from '@ionic-native/photo-library';
import { ToastController } from 'ionic-angular';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DisplayPhotosPage,
    TabsPage,
    AlbumsPage,
    PhotosPage,
    SettingsPage,
    
  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DisplayPhotosPage,
    TabsPage,
    AlbumsPage,
    PhotosPage,
    SettingsPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceProvider, 
    ListUtils,
    PhotoLibrary,
    ToastController,
    MediaCapture,

  ]
})
export class AppModule {}
