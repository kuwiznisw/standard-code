import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tnc',
  templateUrl: './tnc.page.html',
  styleUrls: ['./tnc.page.scss'],
})
export class TncPage implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.runHttp();
  }

  friends : any = [];

  runHttp(){
    this.http.get('http://192.168.0.141:8080/blog/1')
    .subscribe(data => {
      console.log(data); 
      this.friends = data;
    })
  }

}
