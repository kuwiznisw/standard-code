import { Component, OnInit } from '@angular/core';
import { FooterPage } from '../footer/footer.page';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  constructor(public footer : FooterPage) {

  }

  ngOnInit(){
    
  }

  ionViewWillEnter(){
    this.footer.tabSelected(1);
    console.log(this.footer);
    console.log('ionViewWillEnter');
  }
}
