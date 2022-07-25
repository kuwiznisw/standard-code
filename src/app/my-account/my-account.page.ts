import { Component, OnInit } from '@angular/core';
import { FooterPage } from '../footer/footer.page';
@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.page.html',
  styleUrls: ['./my-account.page.scss'],
})
export class MyAccountPage implements OnInit {
  router: any;
  account = 'MEMBER E-CARD';
  footer: FooterPage;
  constructor() {
  }

  ngOnInit() {
  }

  editProfile() {
    this.router.navigate(['./edit-profile']);
  }

  ionViewWillEnter(){
    this.footer.tabSelected(2);
  }

}
