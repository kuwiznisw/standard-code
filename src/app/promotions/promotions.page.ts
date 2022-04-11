import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { FooterPage } from '../footer/footer.page';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.page.html',
  styleUrls: ['./promotions.page.scss'],
})
export class PromotionsPage implements OnInit {
  footer: any;
  promotions: string;

  constructor() {}



slidesDidLoad(slides: IonSlides){
  slides.startAutoplay();
}

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.footer.tabSelected(4);
    this.promotions = '0';
    this.doRefresh('');
  }
  doRefresh(arg0: string) {
    throw new Error('Method not implemented.');
  }
}
