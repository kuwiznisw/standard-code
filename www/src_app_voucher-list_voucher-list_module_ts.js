"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_voucher-list_voucher-list_module_ts"],{

/***/ 4118:
/*!*************************************************************!*\
  !*** ./src/app/voucher-list/voucher-list-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoucherListPageRoutingModule": () => (/* binding */ VoucherListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _voucher_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./voucher-list.page */ 894);




const routes = [
    {
        path: '',
        component: _voucher_list_page__WEBPACK_IMPORTED_MODULE_0__.VoucherListPage
    }
];
let VoucherListPageRoutingModule = class VoucherListPageRoutingModule {
};
VoucherListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VoucherListPageRoutingModule);



/***/ }),

/***/ 2037:
/*!*****************************************************!*\
  !*** ./src/app/voucher-list/voucher-list.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoucherListPageModule": () => (/* binding */ VoucherListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _voucher_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./voucher-list-routing.module */ 4118);
/* harmony import */ var _voucher_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./voucher-list.page */ 894);







let VoucherListPageModule = class VoucherListPageModule {
};
VoucherListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _voucher_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.VoucherListPageRoutingModule
        ],
        declarations: [_voucher_list_page__WEBPACK_IMPORTED_MODULE_1__.VoucherListPage]
    })
], VoucherListPageModule);



/***/ }),

/***/ 894:
/*!***************************************************!*\
  !*** ./src/app/voucher-list/voucher-list.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoucherListPage": () => (/* binding */ VoucherListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _voucher_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./voucher-list.page.html?ngResource */ 3175);
/* harmony import */ var _voucher_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./voucher-list.page.scss?ngResource */ 9435);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let VoucherListPage = class VoucherListPage {
    constructor() { }
    ngOnInit() {
    }
};
VoucherListPage.ctorParameters = () => [];
VoucherListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-voucher-list',
        template: _voucher_list_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_voucher_list_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], VoucherListPage);



/***/ }),

/***/ 9435:
/*!****************************************************************!*\
  !*** ./src/app/voucher-list/voucher-list.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

<<<<<<< HEAD
module.exports = ".title {\n  text-align: center;\n}\n\np {\n  padding-right: 15px;\n  padding-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZvdWNoZXItbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUNBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQUVGIiwiZmlsZSI6InZvdWNoZXItbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGV7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbnB7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn1cclxuIl19 */";
=======
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2b3VjaGVyLWxpc3QucGFnZS5zY3NzIn0= */";
>>>>>>> 5263dac32eaf6712b4307010a3b0f876e60db6df

/***/ }),

/***/ 3175:
/*!****************************************************************!*\
  !*** ./src/app/voucher-list/voucher-list.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

<<<<<<< HEAD
module.exports = "<ion-header>\r\n  <ion-toolbar color=\"danger\">\r\n    <ion-title>Voucher Details</ion-title>\r\n    <ion-button color=\"light\" fill=\"clear\" [routerLink]=\"['/pnv']\"  slot=\"start\">\r\n      <ion-icon name=\"chevron-back-outline\"></ion-icon>\r\n        Back\r\n    </ion-button>\r\n          <ion-button color=\"light\" slot=\"end\" fill=\"clear\" id=\"alignment-button\">\r\n            <ion-icon name=\"notifications-outline\"></ion-icon>\r\n           </ion-button>\r\n           <ion-popover trigger=\"alignment-button\" side=\"bottom\">\r\n             <ng-template>\r\n               <ion-content>\r\n                <ion-list>\r\n                  <ion-item>\r\n                   <ion-label>\r\n                     Notification 1\r\n                   </ion-label>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                   <ion-label>\r\n                     Notification 2\r\n                   </ion-label>\r\n                 </ion-item>\r\n\r\n                </ion-list>\r\n               </ion-content>\r\n             </ng-template>\r\n           </ion-popover>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content color=\"flash-white\">\r\n  <br>\r\n  <div class=\"ion-text-start\">\r\n    <img src=\"../../assets/images/vd1.png\" alt=\"\" >\r\n  </div>\r\n  <div class=\"title\">\r\n    <h6> <b>30% OFF</b> </h6>\r\n    <p>Valid until 30 August 2023</p>\r\n  </div>\r\n  <h5>_____________________________________</h5>\r\n  <p><b> Description :</b></p>\r\n  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa explicabo excepturi consequuntur.\r\n    Similique vitae harum modi eos sit nulla facere repellat delectus temporibus hic doloremque velit quidem, reiciendis eius veritatis.</p>\r\n\r\n\r\n\r\n\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-button fill=\"clear\">\r\n      <a href=\"./home/\"><img class=\"nav-bar-img\" src=\"../../assets/icon/home-black.png\" style=\"height: 45px; width: 50px;\" alt=\"\"></a>\r\n    </ion-button>\r\n    <ion-button fill=\"clear\">\r\n      <a href=\"./my-account/\"><img class=\"nav-bar-img\" src=\"../../assets/icon/myaccount-black.png\"  style=\"height: 45px; width: 50px;\" alt=\"\"></a>\r\n    </ion-button>\r\n    <ion-button fill=\"clear\">\r\n      <a href=\"./promotions/\"><img class=\"nav-bar-img\" src=\"../../assets/icon/promotions-black.png\"  style=\"height: 45px; width: 50px;\" alt=\"\"></a>\r\n    </ion-button>\r\n    <ion-button fill=\"clear\">\r\n      <a href=\"./location/\"><img class=\"nav-bar-img\" src=\"../../assets/icon/location-black.png\"  style=\"height: 45px; width: 50px;\" alt=\"\"></a>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n\r\n\r\n  </ion-footer>\r\n";
=======
module.exports = "<ion-header>\r\n  <ion-toolbar color=\"danger\">\r\n    <ion-title>Voucher List</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\r\n          </ion-buttons>\r\n          <ion-button color=\"light\" slot=\"end\" fill=\"clear\" id=\"alignment-button\">\r\n            <ion-icon name=\"notifications-outline\"></ion-icon>\r\n           </ion-button>\r\n           <ion-popover trigger=\"alignment-button\" side=\"bottom\">\r\n             <ng-template>\r\n               <ion-content>\r\n                <ion-list>\r\n                  <ion-item>\r\n                   <ion-label>\r\n                     Notification 1\r\n                   </ion-label>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                   <ion-label>\r\n                     Notification 2\r\n                   </ion-label>\r\n                 </ion-item>\r\n\r\n                </ion-list>\r\n               </ion-content>\r\n             </ng-template>\r\n           </ion-popover>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content color=\"flash-white\">\r\n\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-button fill=\"clear\">\r\n      <a href=\"./home/\"><img class=\"nav-bar-img\" src=\"../../assets/icon/home-black.png\" style=\"height: 45px; width: 50px;\" alt=\"\"></a>\r\n    </ion-button>\r\n    <ion-button fill=\"clear\">\r\n      <a href=\"./my-account/\"><img class=\"nav-bar-img\" src=\"../../assets/icon/myaccount-black.png\"  style=\"height: 45px; width: 50px;\" alt=\"\"></a>\r\n    </ion-button>\r\n    <ion-button fill=\"clear\">\r\n      <a href=\"./promotions/\"><img class=\"nav-bar-img\" src=\"../../assets/icon/promotions-black.png\"  style=\"height: 45px; width: 50px;\" alt=\"\"></a>\r\n    </ion-button>\r\n    <ion-button fill=\"clear\">\r\n      <a href=\"./location/\"><img class=\"nav-bar-img\" src=\"../../assets/icon/location-black.png\"  style=\"height: 45px; width: 50px;\" alt=\"\"></a>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n\r\n\r\n  </ion-footer>\r\n";
>>>>>>> 5263dac32eaf6712b4307010a3b0f876e60db6df

/***/ })

}]);
//# sourceMappingURL=src_app_voucher-list_voucher-list_module_ts.js.map