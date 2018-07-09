import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DisplayPhotosPage } from '../display-photos/display-photos';
import { Country } from '../../models/country';
import { ListUtils } from '../../Utils/list';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public listCountries: Array<Country> = new Array<Country>();

  constructor(public navCtrl: NavController, public list:ListUtils ) {
    this.listCountries = list.listCountries;
    console.log(this.listCountries);
  }

  goToCountry(event, item) {
    this.navCtrl.push(DisplayPhotosPage,{
      country:item
    });
  }

}
