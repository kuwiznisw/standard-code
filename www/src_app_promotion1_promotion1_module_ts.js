"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_promotion1_promotion1_module_ts"],{

/***/ 945:
/*!*********************************************************!*\
  !*** ./src/app/promotion1/promotion1-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Promotion1PageRoutingModule": () => (/* binding */ Promotion1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _promotions_promotions_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../promotions/promotions.page */ 2621);
/* harmony import */ var _promotion1_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./promotion1.page */ 2501);





const routes = [
    {
        path: '',
        component: _promotion1_page__WEBPACK_IMPORTED_MODULE_1__.Promotion1Page,
    },
    {
        path: 'promotions',
        component: _promotions_promotions_page__WEBPACK_IMPORTED_MODULE_0__.PromotionsPage,
    }
];
let Promotion1PageRoutingModule = class Promotion1PageRoutingModule {
};
Promotion1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], Promotion1PageRoutingModule);



/***/ }),

/***/ 8450:
/*!*************************************************!*\
  !*** ./src/app/promotion1/promotion1.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Promotion1PageModule": () => (/* binding */ Promotion1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _promotion1_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promotion1-routing.module */ 945);
/* harmony import */ var _promotion1_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./promotion1.page */ 2501);







let Promotion1PageModule = class Promotion1PageModule {
};
Promotion1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _promotion1_routing_module__WEBPACK_IMPORTED_MODULE_0__.Promotion1PageRoutingModule
        ],
        declarations: [_promotion1_page__WEBPACK_IMPORTED_MODULE_1__.Promotion1Page]
    })
], Promotion1PageModule);



/***/ }),

/***/ 2501:
/*!***********************************************!*\
  !*** ./src/app/promotion1/promotion1.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Promotion1Page": () => (/* binding */ Promotion1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _promotion1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./promotion1.page.html?ngResource */ 3670);
/* harmony import */ var _promotion1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./promotion1.page.scss?ngResource */ 9797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);





let Promotion1Page = class Promotion1Page {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    slidesDidLoad(slides) {
        slides.startAutoplay();
    }
    ngOnInit() {
    }
};
Promotion1Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
Promotion1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-promotion1',
        template: _promotion1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_promotion1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Promotion1Page);



/***/ }),

/***/ 9797:
/*!************************************************************!*\
  !*** ./src/app/promotion1/promotion1.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\nion-icon {\n  padding-right: 10px;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  padding-left: 10%;\n  padding-right: 10%;\n  text-align: left;\n  font-family: Cambria, Cochin, Georgia, Times, \"Times New Roman\", serif;\n}\n\n.div-icon, h5 {\n  text-align: center;\n}\n\n.nav-bar-img {\n  width: 0;\n  max-width: 150% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb21vdGlvbjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0RBQUE7QUFDRjs7QUFDQTtFQUNFLG1CQUFBO0FBRUY7O0FBR0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzRUFBQTtBQUFGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFDQTtFQUNFLFFBQUE7RUFBUywwQkFBQTtBQUdYIiwiZmlsZSI6InByb21vdGlvbjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcclxuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XHJcbn1cclxuaW9uLWljb257XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXHJcblxyXG5oMSxoMixoMyxoNCxoNSxoNntcclxuICBwYWRkaW5nLWxlZnQ6IDEwJTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMCU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xyXG59XHJcbi5kaXYtaWNvbixoNXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm5hdi1iYXItaW1ne1xyXG4gIHdpZHRoOiAwO21heC13aWR0aDogMTUwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuIl19 */";

/***/ }),

/***/ 3670:
/*!************************************************************!*\
  !*** ./src/app/promotion1/promotion1.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"danger\">\r\n    <ion-title>Promotion 1</ion-title>\r\n    <ion-button color=\"light\" fill=\"clear\" [routerLink]=\"['/promotions']\"  slot=\"start\">\r\n      <ion-icon name=\"chevron-back-outline\"></ion-icon>\r\n        Back\r\n    </ion-button>\r\n    <ion-button color=\"light\" slot=\"end\" fill=\"clear\" id=\"alignment-button\">\r\n      <ion-icon name=\"notifications-outline\"></ion-icon>\r\n     </ion-button>\r\n     <ion-popover trigger=\"alignment-button\" side=\"bottom\">\r\n       <ng-template>\r\n         <ion-content color=\"flash-white\">\r\n          <ion-list>\r\n            <ion-item>\r\n             <ion-label>\r\n               Notification 1\r\n             </ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n             <ion-label>\r\n               Notification 2\r\n             </ion-label>\r\n           </ion-item>\r\n\r\n          </ion-list>\r\n         </ion-content>\r\n       </ng-template>\r\n     </ion-popover>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content color=\"flash-white\" class=\"body\">\r\n  <br>\r\n  <ion-slides style=\" height: auto; width: 80%;\" #sliders (ionSlidesDidLoad)='slidesDidLoad(sliders)' pager='true'>\r\n    <ion-slide >\r\n      <img src=\"../../assets/images/01.jpg\"   alt=\"\">\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <img src=\"../../assets/images/05.jpg\" alt=\"\">\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <img src=\"../../assets/images/05.jpg\" alt=\"\">\r\n    </ion-slide>\r\n  </ion-slides>\r\n\r\n  <h1><b>30% OFF</b></h1>\r\n  <h2><u>Super Sale</u></h2>\r\n  <br>\r\n  <h3>Get your item in <b>30% OFF</b> in super sale deals</h3>\r\n  <h4>Requirements</h4>\r\n  <h5>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <div class=\"div-icon\"><h5><ion-icon color=\"danger\" name=\"calendar-outline\"></ion-icon></h5></div>\r\n          Weekdays\r\n        </ion-col>\r\n        <ion-col>\r\n          <div>\r\n            <h5>\r\n              <ion-icon color=\"danger\" name=\"timer-outline\"></ion-icon>\r\n            </h5>\r\n          </div>\r\n          10:00a.m-10:00p.m\r\n        </ion-col>\r\n      </ion-row>\r\n     </ion-grid>\r\n  </h5>\r\n\r\n\r\n\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-button fill=\"clear\">\r\n      <a href=\"./home/\"><img class=\"nav-bar-img\" src=\"../../assets/icon/home-black.png\" style=\"height: 45px; width: 50px;\" alt=\"\"></a>\r\n    </ion-button>\r\n    <ion-button fill=\"clear\">\r\n      <a href=\"./my-account/\"><img class=\"nav-bar-img\" src=\"../../assets/icon/myaccount-black.png\"  style=\"height: 45px; width: 50px;\" alt=\"\"></a>\r\n    </ion-button>\r\n    <ion-button fill=\"clear\">\r\n      <a href=\"./promotions/\"><img class=\"nav-bar-img\" src=\"../../assets/icon/promotions-red.png\"  style=\"height: 45px; width: 50px;\" alt=\"\"></a>\r\n    </ion-button>\r\n    <ion-button fill=\"clear\">\r\n      <a href=\"./location/\"><img class=\"nav-bar-img\" src=\"../../assets/icon/location-black.png\"  style=\"height: 45px; width: 50px;\" alt=\"\"></a>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n\r\n\r\n  </ion-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_promotion1_promotion1_module_ts.js.map