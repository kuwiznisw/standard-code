import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.page.html',
  styleUrls: ['./my-account.page.scss'],
})
export class MyAccountPage implements OnInit {
  router: any;
  account: string = "MEMBER E-CARD";
  constructor() { 
  }

  ngOnInit() {
  }

  editProfile() {
    this.router.navigate(["./edit-profile"])
  }

}
