import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DisplayPhotosPage } from './display-photos';

@NgModule({
  declarations: [
    DisplayPhotosPage,
  ],
  imports: [
    IonicPageModule.forChild(DisplayPhotosPage),
  ],
})
export class DisplayPhotosPageModule {}
