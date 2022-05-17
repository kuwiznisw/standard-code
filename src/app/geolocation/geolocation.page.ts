// home.page.ts
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';

declare let google;

@Component({
  selector: 'app-geolocation',
  templateUrl: 'geolocation.page.html',
  styleUrls: ['geolocation.page.scss'],
})
export class GeolocationPage {

  @ViewChild('map', { static: false }) mapElement: ElementRef;
  map: any;
  address: string;
  latitude: number;
  longitude: number;

  constructor(
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder) {
  }


  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    this.geolocation.getCurrentPosition().then((resp) => {

      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;

      const latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
      const mapOptions = {
        center: latLng,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

     // this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      this.map.addListener('dragend', () => {

        this.latitude = this.map.center.lat();
        this.longitude = this.map.center.lng();

    //    this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng());
      });

    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

<<<<<<< HEAD
}
=======
  }
>>>>>>> 8f932fdb651b33bcaf77c7d4a7861218c85c5d40
