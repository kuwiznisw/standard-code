"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_reward-details_reward-details_module_ts"],{

/***/ 193:
/*!*****************************************************************!*\
  !*** ./src/app/reward-details/reward-details-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RewardDetailsPageRoutingModule": () => (/* binding */ RewardDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _reward_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reward-details.page */ 6179);




const routes = [
    {
        path: '',
        component: _reward_details_page__WEBPACK_IMPORTED_MODULE_0__.RewardDetailsPage
    }
];
let RewardDetailsPageRoutingModule = class RewardDetailsPageRoutingModule {
};
RewardDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RewardDetailsPageRoutingModule);



/***/ }),

/***/ 3106:
/*!*********************************************************!*\
  !*** ./src/app/reward-details/reward-details.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RewardDetailsPageModule": () => (/* binding */ RewardDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _reward_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reward-details-routing.module */ 193);
/* harmony import */ var _reward_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reward-details.page */ 6179);







let RewardDetailsPageModule = class RewardDetailsPageModule {
};
RewardDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _reward_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.RewardDetailsPageRoutingModule
        ],
        declarations: [_reward_details_page__WEBPACK_IMPORTED_MODULE_1__.RewardDetailsPage]
    })
], RewardDetailsPageModule);



/***/ }),

/***/ 6179:
/*!*******************************************************!*\
  !*** ./src/app/reward-details/reward-details.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RewardDetailsPage": () => (/* binding */ RewardDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _reward_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reward-details.page.html?ngResource */ 8425);
/* harmony import */ var _reward_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reward-details.page.scss?ngResource */ 85);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let RewardDetailsPage = class RewardDetailsPage {
    constructor() { }
    ngOnInit() {
    }
};
RewardDetailsPage.ctorParameters = () => [];
RewardDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-reward-details',
        template: _reward_details_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_reward_details_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RewardDetailsPage);



/***/ }),

/***/ 85:
/*!********************************************************************!*\
  !*** ./src/app/reward-details/reward-details.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXdhcmQtZGV0YWlscy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 8425:
/*!********************************************************************!*\
  !*** ./src/app/reward-details/reward-details.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"danger\">\r\n    <ion-title>Reward Details</ion-title>\r\n    <ion-button color=\"light\" fill=\"clear\" [routerLink]=\"['/pnv']\"  slot=\"start\">\r\n      <ion-icon name=\"chevron-back-outline\"></ion-icon>\r\n        Back\r\n    </ion-button>\r\n          <ion-button color=\"light\" slot=\"end\" fill=\"clear\" id=\"alignment-button\">\r\n            <ion-icon name=\"notifications-outline\"></ion-icon>\r\n           </ion-button>\r\n           <ion-popover trigger=\"alignment-button\" side=\"bottom\">\r\n             <ng-template>\r\n               <ion-content>\r\n                <ion-list>\r\n                  <ion-item>\r\n                   <ion-label>\r\n                     Notification 1\r\n                   </ion-label>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                   <ion-label>\r\n                     Notification 2\r\n                   </ion-label>\r\n                 </ion-item>\r\n\r\n                </ion-list>\r\n               </ion-content>\r\n             </ng-template>\r\n           </ion-popover>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content color=\"flash-white\">\r\n<img src=\"../../assets/images/rd1.png\" alt=\"\">\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-button fill=\"clear\">\r\n      <a href=\"./home/\"><img class=\"nav-bar-img\" src=\"../../assets/icon/home-black.png\" style=\"height: 45px; width: 50px;\" alt=\"\"></a>\r\n    </ion-button>\r\n    <ion-button fill=\"clear\">\r\n      <a href=\"./my-account/\"><img class=\"nav-bar-img\" src=\"../../assets/icon/myaccount-black.png\"  style=\"height: 45px; width: 50px;\" alt=\"\"></a>\r\n    </ion-button>\r\n    <ion-button fill=\"clear\">\r\n      <a href=\"./promotions/\"><img class=\"nav-bar-img\" src=\"../../assets/icon/promotions-black.png\"  style=\"height: 45px; width: 50px;\" alt=\"\"></a>\r\n    </ion-button>\r\n    <ion-button fill=\"clear\">\r\n      <a href=\"./location/\"><img class=\"nav-bar-img\" src=\"../../assets/icon/location-black.png\"  style=\"height: 45px; width: 50px;\" alt=\"\"></a>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n\r\n\r\n  </ion-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_reward-details_reward-details_module_ts.js.map