"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tnc_tnc_module_ts"],{

/***/ 8318:
/*!*******************************************!*\
  !*** ./src/app/tnc/tnc-routing.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TncPageRoutingModule": () => (/* binding */ TncPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _tnc_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tnc.page */ 2370);




const routes = [
    {
        path: '',
        component: _tnc_page__WEBPACK_IMPORTED_MODULE_0__.TncPage
    }
];
let TncPageRoutingModule = class TncPageRoutingModule {
};
TncPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TncPageRoutingModule);



/***/ }),

/***/ 6913:
/*!***********************************!*\
  !*** ./src/app/tnc/tnc.module.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TncPageModule": () => (/* binding */ TncPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _tnc_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tnc-routing.module */ 8318);
/* harmony import */ var _tnc_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tnc.page */ 2370);







let TncPageModule = class TncPageModule {
};
TncPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tnc_routing_module__WEBPACK_IMPORTED_MODULE_0__.TncPageRoutingModule
        ],
        declarations: [_tnc_page__WEBPACK_IMPORTED_MODULE_1__.TncPage]
    })
], TncPageModule);



/***/ }),

/***/ 2370:
/*!*********************************!*\
  !*** ./src/app/tnc/tnc.page.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TncPage": () => (/* binding */ TncPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tnc_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tnc.page.html?ngResource */ 7135);
/* harmony import */ var _tnc_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tnc.page.scss?ngResource */ 7645);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);





let TncPage = class TncPage {
    constructor(http) {
        this.http = http;
        this.friends = [];
    }
    ngOnInit() {
        this.runHttp();
    }
    runHttp() {
        this.http.get('http://192.168.0.168:8080/blog/1')
            .subscribe(data => {
            console.log(data);
            this.friends = data;
        });
    }
};
TncPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
TncPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tnc',
        template: _tnc_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tnc_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TncPage);



/***/ }),

/***/ 7645:
/*!**********************************************!*\
  !*** ./src/app/tnc/tnc.page.scss?ngResource ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0bmMucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 7135:
/*!**********************************************!*\
  !*** ./src/app/tnc/tnc.page.html?ngResource ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "<ion-header translucent=\"true\">\r\n  <ion-toolbar color=\"danger\" mode=\"ios\">\r\n    <ion-title>Terms and Conditions</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\r\n          </ion-buttons>\r\n          <ion-button color=\"light\" slot=\"end\" fill=\"clear\" id=\"alignment-button\">\r\n            <ion-icon name=\"notifications-outline\"></ion-icon>\r\n           </ion-button>\r\n           <ion-popover trigger=\"alignment-button\" side=\"bottom\">\r\n             <ng-template>\r\n               <ion-content>\r\n                 <ion-list>\r\n                   <ion-item>\r\n                    <ion-label>\r\n                      Notification 1\r\n                    </ion-label>\r\n                   </ion-item>\r\n                   <ion-item>\r\n                    <ion-label>\r\n                      Notification 2\r\n                    </ion-label>\r\n                  </ion-item>\r\n\r\n                 </ion-list>\r\n               </ion-content>\r\n             </ng-template>\r\n           </ion-popover>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content color=\"flash-white\">\r\n  <div>\r\n    <ion-card>\r\n      <ion-card-subtitle>\r\n        <ion-list *ngFor =\"let friend of friends\">\r\n          <br>\r\n          <ion-item>\r\n            <h5>{{friend.description}}</h5>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-card-subtitle>\r\n    </ion-card>\r\n\r\n  </div>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar color=\"light\">\r\n    <ion-button fill=\"clear\">\r\n      <a href=\"./home/\"><img class=\"nav-bar-img\" src=\"../../assets/icon/home-black.png\" style=\"height: 45px; width: 50px;\" alt=\"\"></a>\r\n    </ion-button>\r\n    <ion-button fill=\"clear\">\r\n      <a href=\"./my-account/\"><img class=\"nav-bar-img\" src=\"../../assets/icon/myaccount-black.png\"  style=\"height: 45px; width: 50px;\" alt=\"\"></a>\r\n    </ion-button>\r\n    <ion-button fill=\"clear\">\r\n      <a href=\"./promotions/\"><img class=\"nav-bar-img\" src=\"../../assets/icon/promotions-black.png\"  style=\"height: 45px; width: 50px;\" alt=\"\"></a>\r\n    </ion-button>\r\n    <ion-button fill=\"clear\">\r\n      <a href=\"./location/\"><img class=\"nav-bar-img\" src=\"../../assets/icon/location-black.png\"  style=\"height: 45px; width: 50px;\" alt=\"\"></a>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n\r\n\r\n  </ion-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tnc_tnc_module_ts.js.map