"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_location_location_module_ts"],{

/***/ 5:
/*!*****************************************************!*\
  !*** ./src/app/location/location-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationPageRoutingModule": () => (/* binding */ LocationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _location_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location.page */ 1785);




const routes = [
    {
        path: '',
        component: _location_page__WEBPACK_IMPORTED_MODULE_0__.LocationPage
    }
];
let LocationPageRoutingModule = class LocationPageRoutingModule {
};
LocationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LocationPageRoutingModule);



/***/ }),

/***/ 7718:
/*!*********************************************!*\
  !*** ./src/app/location/location.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationPageModule": () => (/* binding */ LocationPageModule)
/* harmony export */ });
<<<<<<< HEAD
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _location_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location-routing.module */ 5);
/* harmony import */ var _location_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location.page */ 1785);
=======
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 287);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _location_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location-routing.module */ 5);
/* harmony import */ var _location_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./location.page */ 1785);
>>>>>>> 5263dac32eaf6712b4307010a3b0f876e60db6df







<<<<<<< HEAD
let LocationPageModule = class LocationPageModule {
};
LocationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _location_routing_module__WEBPACK_IMPORTED_MODULE_0__.LocationPageRoutingModule
        ],
        declarations: [_location_page__WEBPACK_IMPORTED_MODULE_1__.LocationPage]
=======


const routes = [
    {
        path: '',
        component: _location_page__WEBPACK_IMPORTED_MODULE_2__.LocationPage
    }
];
let LocationPageModule = class LocationPageModule {
};
LocationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _location_routing_module__WEBPACK_IMPORTED_MODULE_1__.LocationPageRoutingModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes)
        ],
        declarations: [_location_page__WEBPACK_IMPORTED_MODULE_2__.LocationPage],
        providers: [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_0__.Geolocation]
>>>>>>> 5263dac32eaf6712b4307010a3b0f876e60db6df
    })
], LocationPageModule);



/***/ }),

/***/ 1785:
/*!*******************************************!*\
  !*** ./src/app/location/location.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocationPage": () => (/* binding */ LocationPage)
/* harmony export */ });
<<<<<<< HEAD
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _location_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location.page.html?ngResource */ 3594);
/* harmony import */ var _location_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location.page.scss?ngResource */ 1790);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 287);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 9036);



// home.page.ts



let LocationPage = class LocationPage {
    constructor(geolocation, nativeGeocoder) {
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
    }
    ngOnInit() {
        this.loadMap();
    }
    loadMap() {
        this.geolocation.getCurrentPosition().then((resp) => {
            this.latitude = resp.coords.latitude;
            this.longitude = resp.coords.longitude;
            this.accuracy = resp.coords.accuracy;
            const latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
            const mapOptions = {
                center: latLng,
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);
            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
            this.map.addListener('dragend', () => {
                this.latitude = this.map.center.lat();
                this.longitude = this.map.center.lng();
                this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng());
            });
=======
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _location_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location.page.html?ngResource */ 3594);
/* harmony import */ var _location_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location.page.scss?ngResource */ 1790);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 287);





let LocationPage = class LocationPage {
    constructor(location) {
        this.location = location;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.location.getCurrentPosition().then((resp) => {
            this.latitude = resp.coords.latitude;
            this.longitude = resp.coords.longitude;
            const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
                center: { lat: 3.080, lng: 101.451 },
                zoom: 6
            });
            const infoWindow = new google.maps.InfoWindow();
            const pos = {
                lat: this.latitude,
                lng: this.longitude
            };
            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
>>>>>>> 5263dac32eaf6712b4307010a3b0f876e60db6df
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }
<<<<<<< HEAD
    getAddressFromCoords(lattitude, longitude) {
        console.log('getAddressFromCoords ' + lattitude + ' ' + longitude);
        const options = {
            useLocale: true,
            maxResults: 5
        };
        this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
            .then((result) => {
            this.address = '';
            const responseAddress = [];
            for (const [key, value] of Object.entries(result[0])) {
                if (value.length > 0) {
                    responseAddress.push(value);
                }
            }
            responseAddress.reverse();
            for (const value of responseAddress) {
                this.address += value + ', ';
            }
            this.address = this.address.slice(0, -2);
        })
            .catch((error) => {
            this.address = 'Address Not Available!';
        });
    }
};
LocationPage.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__.Geolocation },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__.NativeGeocoder }
];
LocationPage.propDecorators = {
    mapElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['map', { static: false },] }]
};
LocationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
=======
};
LocationPage.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__.Geolocation }
];
LocationPage.propDecorators = {
    mapNativeElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['mapElement',] }]
};
LocationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
>>>>>>> 5263dac32eaf6712b4307010a3b0f876e60db6df
        selector: 'app-location',
        template: _location_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_location_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LocationPage);



/***/ }),

/***/ 1790:
/*!********************************************************!*\
  !*** ./src/app/location/location.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

<<<<<<< HEAD
module.exports = "ion-card-subtitle {\n  padding-left: 15px;\n}\n\nion-button {\n  text-align: right;\n}\n\n#map_canvas {\n  width: 90%;\n  height: 80%;\n  border: 1px solid red;\n}\n\n#address {\n  padding: 10px;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n#map {\n  width: 100%;\n  height: 45vh;\n}\n\n.map-wrapper {\n  position: relative;\n}\n\n#map_center {\n  position: absolute;\n  z-index: 99;\n  height: 40px;\n  width: 40px;\n  top: 50%;\n  left: 50%;\n  margin-left: -21px;\n  margin-top: -41px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxpQkFBQTtBQUVGOztBQUFBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQUdGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFFRjs7QUFDQTtFQUNFLGtCQUFBO0FBRUY7O0FBQ0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUVKIiwiZmlsZSI6ImxvY2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLXN1YnRpdGxle1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG5pb24tYnV0dG9ue1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbiNtYXBfY2FudmFzIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIGhlaWdodDogODAlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufVxyXG5cclxuXHJcbiNhZGRyZXNzIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuI21hcCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0NXZoO1xyXG59XHJcblxyXG4ubWFwLXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuICAjbWFwX2NlbnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTIxcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNDFweDtcclxuICB9XHJcblxyXG4iXX0= */";
=======
module.exports = "ion-card-subtitle {\n  padding-left: 15px;\n}\n\nion-button {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvY2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxpQkFBQTtBQUVGIiwiZmlsZSI6ImxvY2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLXN1YnRpdGxle1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG5pb24tYnV0dG9ue1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbiJdfQ== */";
>>>>>>> 5263dac32eaf6712b4307010a3b0f876e60db6df

/***/ }),

/***/ 3594:
/*!********************************************************!*\
  !*** ./src/app/location/location.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

<<<<<<< HEAD
module.exports = "<ion-header>\r\n  <ion-toolbar color=\"danger\">\r\n    <ion-title>Location</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\r\n          </ion-buttons>\r\n          <ion-button color=\"light\" slot=\"end\" fill=\"clear\" id=\"alignment-button\">\r\n            <ion-icon name=\"notifications-outline\"></ion-icon>\r\n           </ion-button>\r\n           <ion-popover trigger=\"alignment-button\" side=\"bottom\">\r\n             <ng-template>\r\n               <ion-content>\r\n                <ion-list>\r\n                  <ion-item>\r\n                   <ion-label>\r\n                     Notification 1\r\n                   </ion-label>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                   <ion-label>\r\n                     Notification 2\r\n                   </ion-label>\r\n                 </ion-item>\r\n\r\n                </ion-list>\r\n               </ion-content>\r\n             </ng-template>\r\n           </ion-popover>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content color=\"flash-white\">\r\n <div class=\"map-wrapper\">\r\n\r\n    <div id=\"map_center\">\r\n      <img src=\"assets/icon/location-marker.png\" />\r\n    </div>\r\n\r\n    <div #map id=\"map\"></div>\r\n  </div>\r\n  <ion-toolbar>\r\n    <div class=\"ion-text-center\"> <ion-button color=\"danger\" (click)=\"loadMap()\" fill=\"outline\">\r\n      <ion-icon name=\"locate\"></ion-icon>\r\n     &nbsp; My location\r\n    </ion-button>\r\n\r\n  </div>\r\n  </ion-toolbar>\r\n\r\n  <ion-searchbar showCancelButton=\"focus\"></ion-searchbar>\r\n  <div class=\"ion-card\">\r\n  <ion-card>\r\n    <ion-card-header><b>Setia City Mall</b></ion-card-header>\r\n    <ion-card-subtitle>\r\n      Persiaran Setia Dagang, Setia Alam, <br> 40170 Shah Alam , Selangor.\r\n      <div class=\"ion-text-end\">\r\n        <a href=\"https://goo.gl/maps/9U9sQrm1v4axeobMA\">\r\n          <ion-button fill=\"clear\">\r\n          <ion-icon color=\"danger\" name=\"navigate-sharp\"></ion-icon>\r\n        </ion-button>\r\n        </a>\r\n      </div>\r\n    </ion-card-subtitle>\r\n  </ion-card>\r\n  <ion-card>\r\n    <ion-card-header><b>Central I-city</b></ion-card-header>\r\n    <ion-card-subtitle>\r\n      NO 1, Persiaran Multimedia Seksyen 7, <br> Jalan Plumbum 7/102, I-city, <br> 40000 Shah Alam, Selangor\r\n      <div class=\"ion-text-end\">\r\n        <a href=\"https://goo.gl/maps/N9bLEnZmdym1NaVM9\">\r\n          <ion-button fill=\"clear\">\r\n          <ion-icon color=\"danger\" name=\"navigate-sharp\"></ion-icon>\r\n        </ion-button>\r\n        </a>\r\n      </div>\r\n    </ion-card-subtitle>\r\n  </ion-card>\r\n</div>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-button fill=\"clear\">\r\n      <a href=\"./home/\"><img class=\"nav-bar-img\" src=\"../../assets/icon/home-black.png\" style=\"height: 45px; width: 50px;\" alt=\"\"></a>\r\n    </ion-button>\r\n    <ion-button fill=\"clear\">\r\n      <a href=\"./my-account/\"><img class=\"nav-bar-img\" src=\"../../assets/icon/myaccount-black.png\"  style=\"height: 45px; width: 50px;\" alt=\"\"></a>\r\n    </ion-button>\r\n    <ion-button fill=\"clear\">\r\n      <a href=\"./promotions/\"><img class=\"nav-bar-img\" src=\"../../assets/icon/promotions-black.png\"  style=\"height: 45px; width: 50px;\" alt=\"\"></a>\r\n    </ion-button>\r\n    <ion-button fill=\"clear\">\r\n      <a href=\"./location/\"><img class=\"nav-bar-img\" src=\"../../assets/icon/location-red.png\"  style=\"height: 45px; width: 50px;\" alt=\"\"></a>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n\r\n\r\n  </ion-footer>\r\n";
=======
module.exports = "<ion-header>\r\n  <ion-toolbar color=\"danger\">\r\n    <ion-title>Location</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\r\n          </ion-buttons>\r\n          <ion-button color=\"light\" slot=\"end\" fill=\"clear\" id=\"alignment-button\">\r\n            <ion-icon name=\"notifications-outline\"></ion-icon>\r\n           </ion-button>\r\n           <ion-popover trigger=\"alignment-button\" side=\"bottom\">\r\n             <ng-template>\r\n               <ion-content>\r\n                <ion-list>\r\n                  <ion-item>\r\n                   <ion-label>\r\n                     Notification 1\r\n                   </ion-label>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                   <ion-label>\r\n                     Notification 2\r\n                   </ion-label>\r\n                 </ion-item>\r\n\r\n                </ion-list>\r\n               </ion-content>\r\n             </ng-template>\r\n           </ion-popover>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content color=\"flash-white\">\r\n  <div #mapElement class=\"map\"></div>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-button fill=\"clear\">\r\n      <a href=\"./home/\"><img class=\"nav-bar-img\" src=\"../../assets/icon/home-black.png\" style=\"height: 45px; width: 50px;\" alt=\"\"></a>\r\n    </ion-button>\r\n    <ion-button fill=\"clear\">\r\n      <a href=\"./my-account/\"><img class=\"nav-bar-img\" src=\"../../assets/icon/myaccount-black.png\"  style=\"height: 45px; width: 50px;\" alt=\"\"></a>\r\n    </ion-button>\r\n    <ion-button fill=\"clear\">\r\n      <a href=\"./promotions/\"><img class=\"nav-bar-img\" src=\"../../assets/icon/promotions-black.png\"  style=\"height: 45px; width: 50px;\" alt=\"\"></a>\r\n    </ion-button>\r\n    <ion-button fill=\"clear\">\r\n      <a href=\"./location/\"><img class=\"nav-bar-img\" src=\"../../assets/icon/location-red.png\"  style=\"height: 45px; width: 50px;\" alt=\"\"></a>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n\r\n\r\n  </ion-footer>\r\n";
>>>>>>> 5263dac32eaf6712b4307010a3b0f876e60db6df

/***/ })

}]);
//# sourceMappingURL=src_app_location_location_module_ts.js.map