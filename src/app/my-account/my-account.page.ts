import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.page.html',
  styleUrls: ['./my-account.page.scss'],
})
export class MyAccountPage implements OnInit {
<<<<<<< HEAD
  account: String = 'MEMBER E-CARD';
  constructor() { }
=======
  router: any;
  account: string = "MEMBER E-CARD";
  constructor() { 
  }
>>>>>>> fa9982429835c9be28b1c0e2ad7a454d487e2d36

  ngOnInit() {
  }

  editProfile() {
    this.router.navigate(["./edit-profile"])
  }

}
