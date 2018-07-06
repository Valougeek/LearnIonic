import { Injectable } from '@angular/core';

@Injectable()
export class Country{

    constructor(public title:string = "", public urlPicture:string = "", public numberPictures:number = null ){

    }
}