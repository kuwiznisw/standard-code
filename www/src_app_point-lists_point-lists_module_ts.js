"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_point-lists_point-lists_module_ts"],{

/***/ 2865:
/*!***********************************************************!*\
  !*** ./src/app/point-lists/point-lists-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PointListsPageRoutingModule": () => (/* binding */ PointListsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _point_lists_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point-lists.page */ 9982);




const routes = [
    {
        path: '',
        component: _point_lists_page__WEBPACK_IMPORTED_MODULE_0__.PointListsPage
    }
];
let PointListsPageRoutingModule = class PointListsPageRoutingModule {
};
PointListsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PointListsPageRoutingModule);



/***/ }),

/***/ 5364:
/*!***************************************************!*\
  !*** ./src/app/point-lists/point-lists.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PointListsPageModule": () => (/* binding */ PointListsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _point_lists_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point-lists-routing.module */ 2865);
/* harmony import */ var _point_lists_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point-lists.page */ 9982);







let PointListsPageModule = class PointListsPageModule {
};
PointListsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _point_lists_routing_module__WEBPACK_IMPORTED_MODULE_0__.PointListsPageRoutingModule
        ],
        declarations: [_point_lists_page__WEBPACK_IMPORTED_MODULE_1__.PointListsPage]
    })
], PointListsPageModule);



/***/ }),

/***/ 9982:
/*!*************************************************!*\
  !*** ./src/app/point-lists/point-lists.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PointListsPage": () => (/* binding */ PointListsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _point_lists_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point-lists.page.html?ngResource */ 1760);
/* harmony import */ var _point_lists_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point-lists.page.scss?ngResource */ 1287);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let PointListsPage = class PointListsPage {
    constructor() { }
    ngOnInit() {
    }
};
PointListsPage.ctorParameters = () => [];
PointListsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-point-lists',
        template: _point_lists_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_point_lists_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PointListsPage);



/***/ }),

/***/ 1287:
/*!**************************************************************!*\
  !*** ./src/app/point-lists/point-lists.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "ion-grid {\n  text-align: center;\n}\n\nion-card {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvaW50LWxpc3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtBQUVGIiwiZmlsZSI6InBvaW50LWxpc3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1ncmlke1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5pb24tY2FyZHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 1760:
/*!**************************************************************!*\
  !*** ./src/app/point-lists/point-lists.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"danger\">\r\n    <ion-title>Point History</ion-title>\r\n    <ion-button color=\"light\" fill=\"clear\" [routerLink]=\"['/pnv']\"  slot=\"start\">\r\n      <ion-icon name=\"chevron-back-outline\"></ion-icon>\r\n        Back\r\n    </ion-button>\r\n          <ion-button color=\"light\" slot=\"end\" fill=\"clear\" id=\"alignment-button\">\r\n            <ion-icon name=\"notifications-outline\"></ion-icon>\r\n           </ion-button>\r\n           <ion-popover trigger=\"alignment-button\" side=\"bottom\">\r\n             <ng-template>\r\n               <ion-content>\r\n                <ion-list>\r\n                  <ion-item>\r\n                   <ion-label>\r\n                     Notification 1\r\n                   </ion-label>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                   <ion-label>\r\n                     Notification 2\r\n                   </ion-label>\r\n                 </ion-item>\r\n\r\n                </ion-list>\r\n               </ion-content>\r\n             </ng-template>\r\n           </ion-popover>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content color=\"flash-white\">\r\n  <ion-card>\r\n    <ion-card-header>\r\n      Total Point\r\n    </ion-card-header>\r\n    <ion-card-subtitle>\r\n      200\r\n    </ion-card-subtitle>\r\n  </ion-card>\r\n  <br>\r\n  <ion-grid size=\"100%\">\r\n    <ion-row>\r\n      <ion-col>\r\n       <b>Date</b>\r\n      </ion-col>\r\n      <ion-col>\r\n        <b>Details</b>\r\n      </ion-col>\r\n      <ion-col>\r\n        <b>Points</b>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n       02 Aug 2021\r\n      </ion-col>\r\n      <ion-col>\r\n        Puchasing something\r\n      </ion-col>\r\n      <ion-col>\r\n        30\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-button fill=\"clear\">\r\n      <a href=\"./home/\"><img class=\"nav-bar-img\" src=\"../../assets/icon/home-black.png\" style=\"height: 45px; width: 50px;\" alt=\"\"></a>\r\n    </ion-button>\r\n    <ion-button fill=\"clear\">\r\n      <a href=\"./my-account/\"><img class=\"nav-bar-img\" src=\"../../assets/icon/myaccount-black.png\"  style=\"height: 45px; width: 50px;\" alt=\"\"></a>\r\n    </ion-button>\r\n    <ion-button fill=\"clear\">\r\n      <a href=\"./promotions/\"><img class=\"nav-bar-img\" src=\"../../assets/icon/promotions-black.png\"  style=\"height: 45px; width: 50px;\" alt=\"\"></a>\r\n    </ion-button>\r\n    <ion-button fill=\"clear\">\r\n      <a href=\"./location/\"><img class=\"nav-bar-img\" src=\"../../assets/icon/location-black.png\"  style=\"height: 45px; width: 50px;\" alt=\"\"></a>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n\r\n\r\n  </ion-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_point-lists_point-lists_module_ts.js.map