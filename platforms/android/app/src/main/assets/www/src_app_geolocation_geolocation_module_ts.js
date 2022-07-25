"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_geolocation_geolocation_module_ts"],{

/***/ 8463:
/*!***************************************************!*\
  !*** ./src/app/geolocation/geolocation.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeolocationPageModule": () => (/* binding */ GeolocationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 287);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _geolocation_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geolocation.page */ 6414);








const routes = [
    {
        path: '',
        component: _geolocation_page__WEBPACK_IMPORTED_MODULE_1__.GeolocationPage
    }
];
let GeolocationPageModule = class GeolocationPageModule {
};
GeolocationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)
        ],
        declarations: [_geolocation_page__WEBPACK_IMPORTED_MODULE_1__.GeolocationPage],
        providers: [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_0__.Geolocation]
    })
], GeolocationPageModule);



/***/ }),

/***/ 6414:
/*!*************************************************!*\
  !*** ./src/app/geolocation/geolocation.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeolocationPage": () => (/* binding */ GeolocationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _geolocation_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geolocation.page.html?ngResource */ 3534);
/* harmony import */ var _geolocation_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geolocation.page.scss?ngResource */ 8786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 287);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 9036);



// home.page.ts



let GeolocationPage = class GeolocationPage {
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
};
GeolocationPage.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__.Geolocation },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__.NativeGeocoder }
];
GeolocationPage.propDecorators = {
    mapElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['map', { static: false },] }]
};
GeolocationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-geolocation',
        template: _geolocation_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_geolocation_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], GeolocationPage);



/***/ }),

/***/ 8786:
/*!**************************************************************!*\
  !*** ./src/app/geolocation/geolocation.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "#map_canvas {\n  width: 90%;\n  height: 80%;\n  border: 1px solid red;\n}\n\n#address {\n  padding: 10px;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n#map {\n  width: 100%;\n  height: 70vh;\n}\n\n.map-wrapper {\n  position: relative;\n}\n\n#map_center {\n  position: absolute;\n  z-index: 99;\n  height: 40px;\n  width: 40px;\n  top: 50%;\n  left: 50%;\n  margin-left: -21px;\n  margin-top: -41px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlb2xvY2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtBQUFGOztBQUdFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFBSiIsImZpbGUiOiJnZW9sb2NhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwX2NhbnZhcyB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBoZWlnaHQ6IDgwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbn1cclxuXHJcblxyXG4jYWRkcmVzcyB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbiNtYXAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNzB2aDtcclxufVxyXG5cclxuLm1hcC13cmFwcGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiAgI21hcF9jZW50ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yMXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTQxcHg7XHJcbiAgfVxyXG4iXX0= */";

/***/ }),

/***/ 3534:
/*!**************************************************************!*\
  !*** ./src/app/geolocation/geolocation.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\r\n\r\n  <ion-toolbar color=\"warning\">\r\n    <ion-button (click)=\"loadMap()\" shape=\"round\" color=\"dark\">\r\n      <ion-icon slot=\"start\" name=\"locate\"></ion-icon>\r\n      Where I Am\r\n    </ion-button>\r\n    <ion-title slot=\"end\">Google Map</ion-title>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n\r\n  <div class=\"map-wrapper\">\r\n    <div id=\"map_center\">\r\n      <img src=\"assets/icon/location-marker.png\" />\r\n    </div>\r\n    <div #map id=\"map\"></div>\r\n  </div>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"3\">\r\n        <b>Lattitude</b>\r\n      </ion-col>\r\n      <ion-col>\r\n        {{latitude}}\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"3\">\r\n        <b>Longitude</b>\r\n      </ion-col>\r\n      <ion-col>\r\n        {{longitude}}\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_geolocation_geolocation_module_ts.js.map