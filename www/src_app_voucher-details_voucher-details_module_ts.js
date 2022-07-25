"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_voucher-details_voucher-details_module_ts"],{

/***/ 9937:
/*!*******************************************************************!*\
  !*** ./src/app/voucher-details/voucher-details-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoucherDetailsPageRoutingModule": () => (/* binding */ VoucherDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _voucher_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./voucher-details.page */ 9773);




const routes = [
    {
        path: '',
        component: _voucher_details_page__WEBPACK_IMPORTED_MODULE_0__.VoucherDetailsPage
    }
];
let VoucherDetailsPageRoutingModule = class VoucherDetailsPageRoutingModule {
};
VoucherDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VoucherDetailsPageRoutingModule);



/***/ }),

/***/ 1131:
/*!***********************************************************!*\
  !*** ./src/app/voucher-details/voucher-details.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoucherDetailsPageModule": () => (/* binding */ VoucherDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _voucher_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./voucher-details-routing.module */ 9937);
/* harmony import */ var _voucher_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./voucher-details.page */ 9773);







let VoucherDetailsPageModule = class VoucherDetailsPageModule {
};
VoucherDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _voucher_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.VoucherDetailsPageRoutingModule
        ],
        declarations: [_voucher_details_page__WEBPACK_IMPORTED_MODULE_1__.VoucherDetailsPage]
    })
], VoucherDetailsPageModule);



/***/ }),

/***/ 9773:
/*!*********************************************************!*\
  !*** ./src/app/voucher-details/voucher-details.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoucherDetailsPage": () => (/* binding */ VoucherDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _voucher_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./voucher-details.page.html?ngResource */ 4093);
/* harmony import */ var _voucher_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./voucher-details.page.scss?ngResource */ 8901);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let VoucherDetailsPage = class VoucherDetailsPage {
    constructor() { }
    ngOnInit() {
    }
};
VoucherDetailsPage.ctorParameters = () => [];
VoucherDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-voucher-details',
        template: _voucher_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_voucher_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], VoucherDetailsPage);



/***/ }),

/***/ 8901:
/*!**********************************************************************!*\
  !*** ./src/app/voucher-details/voucher-details.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ".title {\n  text-align: center;\n}\n\np {\n  padding-right: 15px;\n  padding-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZvdWNoZXItZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUNBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQUVGIiwiZmlsZSI6InZvdWNoZXItZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGV7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbnB7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 4093:
/*!**********************************************************************!*\
  !*** ./src/app/voucher-details/voucher-details.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"danger\">\r\n    <ion-title>Voucher Details</ion-title>\r\n    <ion-button color=\"light\" fill=\"clear\" [routerLink]=\"['/pnv']\"  slot=\"start\">\r\n      <ion-icon name=\"chevron-back-outline\"></ion-icon>\r\n        Back\r\n    </ion-button>\r\n          <ion-button color=\"light\" slot=\"end\" fill=\"clear\" id=\"alignment-button\">\r\n            <ion-icon name=\"notifications-outline\"></ion-icon>\r\n           </ion-button>\r\n           <ion-popover trigger=\"alignment-button\" side=\"bottom\">\r\n             <ng-template>\r\n               <ion-content>\r\n                <ion-list>\r\n                  <ion-item>\r\n                   <ion-label>\r\n                     Notification 1\r\n                   </ion-label>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                   <ion-label>\r\n                     Notification 2\r\n                   </ion-label>\r\n                 </ion-item>\r\n\r\n                </ion-list>\r\n               </ion-content>\r\n             </ng-template>\r\n           </ion-popover>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content color=\"flash-white\">\r\n  <br>\r\n  <div class=\"ion-text-start\">\r\n    <img src=\"../../assets/images/vd2.png\" alt=\"\" >\r\n  </div>\r\n  <div class=\"title\">\r\n    <h6> <b>50% OFF</b> </h6>\r\n    <p>Valid until 30 August 2023</p>\r\n  </div>\r\n\r\n  <h5>_____________________________________</h5>\r\n  <p><b> Description :</b></p>\r\n  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa explicabo excepturi consequuntur.\r\n    Similique vitae harum modi eos sit nulla facere repellat delectus temporibus hic doloremque velit quidem, reiciendis eius veritatis.</p>\r\n\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-button fill=\"clear\">\r\n      <a href=\"./home/\"><img class=\"nav-bar-img\" src=\"../../assets/icon/home-black.png\" style=\"height: 45px; width: 50px;\" alt=\"\"></a>\r\n    </ion-button>\r\n    <ion-button fill=\"clear\">\r\n      <a href=\"./my-account/\"><img class=\"nav-bar-img\" src=\"../../assets/icon/myaccount-black.png\"  style=\"height: 45px; width: 50px;\" alt=\"\"></a>\r\n    </ion-button>\r\n    <ion-button fill=\"clear\">\r\n      <a href=\"./promotions/\"><img class=\"nav-bar-img\" src=\"../../assets/icon/promotions-black.png\"  style=\"height: 45px; width: 50px;\" alt=\"\"></a>\r\n    </ion-button>\r\n    <ion-button fill=\"clear\">\r\n      <a href=\"./location/\"><img class=\"nav-bar-img\" src=\"../../assets/icon/location-black.png\"  style=\"height: 45px; width: 50px;\" alt=\"\"></a>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n\r\n\r\n  </ion-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_voucher-details_voucher-details_module_ts.js.map