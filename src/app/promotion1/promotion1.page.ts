import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-promotion1',
  templateUrl: './promotion1.page.html',
  styleUrls: ['./promotion1.page.scss'],
})
export class Promotion1Page implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }
  slidesDidLoad(slides: IonSlides){
    slides.startAutoplay();
  }

  ngOnInit() {
  }

}
