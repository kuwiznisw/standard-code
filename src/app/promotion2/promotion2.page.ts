import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-promotion2',
  templateUrl: './promotion2.page.html',
  styleUrls: ['./promotion2.page.scss'],
})
export class Promotion2Page implements OnInit {

  constructor() { }

  slidesDidLoad(slides: IonSlides){
    slides.startAutoplay();
  }

  ngOnInit() {
  }

}
