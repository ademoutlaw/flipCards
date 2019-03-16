import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CardsPage } from '../cards/cards';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	images: any = [];

	constructor(public navCtrl: NavController) {

		this.images = [
			{imagePath: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d', toBeDeleted: false},
			{imagePath: 'https://images.unsplash.com/photo-1498454056553-879ad1baf5dc', toBeDeleted: false}
		];

	}

	toggleImageDelete(image){
		image.toBeDeleted = !image.toBeDeleted;
	}
	cards(){
		this.navCtrl.push(CardsPage);
	}
}
