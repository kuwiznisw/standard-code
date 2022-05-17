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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _geolocation_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geolocation.page.html?ngResource */ 3534);
/* harmony import */ var _geolocation_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geolocation.page.scss?ngResource */ 8786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 287);





let GeolocationPage = class GeolocationPage {
    constructor(geolocation) {
        this.geolocation = geolocation;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.geolocation.getCurrentPosition().then((resp) => {
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
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }
};
GeolocationPage.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__.Geolocation }
];
GeolocationPage.propDecorators = {
    mapNativeElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['mapElement',] }]
};
GeolocationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW9sb2NhdGlvbi5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 3534:
/*!**************************************************************!*\
  !*** ./src/app/geolocation/geolocation.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>GeoLocation</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div #mapElement class=\"map\"></div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_geolocation_geolocation_module_ts.js.map