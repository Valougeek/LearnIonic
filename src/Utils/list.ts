import { Injectable } from '@angular/core';
import { Country } from '../models/country';

@Injectable()
export class ListUtils {

    listCountries:Country[] = [
        new Country("France", "https://www.sandaya.fr/var/sandaya/storage/images/_aliases/gallery_full/site-commercial/regions/provence-cote-d-azur/pl0-diaporama-paca/location-camping-provence/21892-1-fre-FR/location-camping-provence.jpg", 41),
        new Country("Mexique", "https://cache-graphicslib.viator.com/graphicslib/page-images/742x525/162127_Viator_Shutterstock_122179.jpg", 100),
        new Country("Espagne", "https://www.tarragonaturisme.cat/sites/default/files/styles/full_image_with_copyright/public/leisure-space/gallery/2.jpg?itok=uYjLdfOw", 56),
    ];
}