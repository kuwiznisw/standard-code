"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_promotion2_promotion2_module_ts"],{

/***/ 5707:
/*!*********************************************************!*\
  !*** ./src/app/promotion2/promotion2-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Promotion2PageRoutingModule": () => (/* binding */ Promotion2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _promotion2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promotion2.page */ 9268);




const routes = [
    {
        path: '',
        component: _promotion2_page__WEBPACK_IMPORTED_MODULE_0__.Promotion2Page
    }
];
let Promotion2PageRoutingModule = class Promotion2PageRoutingModule {
};
Promotion2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Promotion2PageRoutingModule);



/***/ }),

/***/ 9146:
/*!*************************************************!*\
  !*** ./src/app/promotion2/promotion2.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Promotion2PageModule": () => (/* binding */ Promotion2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _promotion2_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promotion2-routing.module */ 5707);
/* harmony import */ var _promotion2_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./promotion2.page */ 9268);







let Promotion2PageModule = class Promotion2PageModule {
};
Promotion2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _promotion2_routing_module__WEBPACK_IMPORTED_MODULE_0__.Promotion2PageRoutingModule
        ],
        declarations: [_promotion2_page__WEBPACK_IMPORTED_MODULE_1__.Promotion2Page]
    })
], Promotion2PageModule);



/***/ }),

/***/ 9268:
/*!***********************************************!*\
  !*** ./src/app/promotion2/promotion2.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Promotion2Page": () => (/* binding */ Promotion2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _promotion2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promotion2.page.html?ngResource */ 9732);
/* harmony import */ var _promotion2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./promotion2.page.scss?ngResource */ 493);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let Promotion2Page = class Promotion2Page {
    constructor() { }
    slidesDidLoad(slides) {
        slides.startAutoplay();
    }
    ngOnInit() {
    }
};
Promotion2Page.ctorParameters = () => [];
Promotion2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-promotion2',
        template: _promotion2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_promotion2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Promotion2Page);



/***/ }),

/***/ 493:
/*!************************************************************!*\
  !*** ./src/app/promotion2/promotion2.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "h1, h2, h3, h4, h5, h6 {\n  padding-left: 10%;\n  padding-right: 10%;\n  text-align: left;\n}\n\nion-icon {\n  padding-right: 10px;\n}\n\n.div-icon, h5 {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb21vdGlvbjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxtQkFBQTtBQUVGOztBQUNBO0VBQ0Usa0JBQUE7QUFFRiIsImZpbGUiOiJwcm9tb3Rpb24yLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxLGgyLGgzLGg0LGg1LGg2e1xyXG4gIHBhZGRpbmctbGVmdDogMTAlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwJTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbmlvbi1pY29ue1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5kaXYtaWNvbixoNXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 9732:
/*!************************************************************!*\
  !*** ./src/app/promotion2/promotion2.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"danger\">\r\n    <ion-title>Promotion 2</ion-title>\r\n    <ion-button fill=\"clear\" [routerLink]=\"['/promotions']\"  slot=\"start\">\r\n      <ion-icon name=\"chevron-back-outline\"></ion-icon>\r\n        Back\r\n    </ion-button>\r\n    <ion-button slot=\"end\" fill=\"clear\" id=\"alignment-button\">\r\n      <ion-icon name=\"notifications-outline\"></ion-icon>\r\n     </ion-button>\r\n     <ion-popover trigger=\"alignment-button\" side=\"bottom\">\r\n       <ng-template>\r\n         <ion-content>\r\n          <ion-list>\r\n            <ion-item>\r\n             <ion-label>\r\n               Notification 1\r\n             </ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n             <ion-label>\r\n               Notification 2\r\n             </ion-label>\r\n           </ion-item>\r\n\r\n          </ion-list>\r\n         </ion-content>\r\n       </ng-template>\r\n     </ion-popover>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"body\">\r\n  <br>\r\n  <ion-slides style=\" height: auto; width: 80%;\" #sliders (ionSlidesDidLoad)='slidesDidLoad(sliders)' pager='true'>\r\n    <ion-slide >\r\n      <img src=\"../../assets/images/01.jpg\"   alt=\"\">\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <img src=\"../../assets/images/05.jpg\" alt=\"\">\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <img src=\"../../assets/images/05.jpg\" alt=\"\">\r\n    </ion-slide>\r\n  </ion-slides>\r\n\r\n  <h1><b>30% OFF</b></h1>\r\n  <h2><u>Super Sale</u></h2>\r\n  <br>\r\n  <h3>Get your item in 30% off in super sale deals</h3>\r\n  <h4>Requirements</h4>\r\n  <h5>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <div class=\"div-icon\"><h5><ion-icon name=\"calendar-outline\"></ion-icon></h5></div>\r\n          Weekdays\r\n        </ion-col>\r\n        <ion-col>\r\n          <div>\r\n            <h5>\r\n              <ion-icon name=\"timer-outline\"></ion-icon>\r\n            </h5>\r\n          </div>\r\n          10:00a.m-10:00p.m\r\n        </ion-col>\r\n      </ion-row>\r\n     </ion-grid>\r\n  </h5>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-button fill=\"clear\">\r\n      <a href=\"./home/\"><img class=\"nav-bar-img\" src=\"../../assets/icon/home-black.png\" style=\"height: 45px; width: 50px;\" alt=\"\"></a>\r\n    </ion-button>\r\n    <ion-button fill=\"clear\">\r\n      <a href=\"./my-account/\"><img class=\"nav-bar-img\" src=\"../../assets/icon/myaccount-black.png\"  style=\"height: 45px; width: 50px;\" alt=\"\"></a>\r\n    </ion-button>\r\n    <ion-button fill=\"clear\">\r\n      <a href=\"./promotions/\"><img class=\"nav-bar-img\" src=\"../../assets/icon/promotions-red.png\"  style=\"height: 45px; width: 50px;\" alt=\"\"></a>\r\n    </ion-button>\r\n    <ion-button fill=\"clear\">\r\n      <a href=\"./location/\"><img class=\"nav-bar-img\" src=\"../../assets/icon/location-black.png\"  style=\"height: 45px; width: 50px;\" alt=\"\"></a>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n\r\n\r\n  </ion-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_promotion2_promotion2_module_ts.js.map