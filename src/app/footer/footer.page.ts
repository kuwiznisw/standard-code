import { Component} from '@angular/core';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.page.html',
  styleUrls: ['./footer.page.scss'],
})
@Injectable({
  providedIn: 'root' // just before your class
})
export class FooterPage {
  public tabValue: any = 0;
  constructor(){}

  tabSelected(value){
    this.tabValue = value;
  }

}
