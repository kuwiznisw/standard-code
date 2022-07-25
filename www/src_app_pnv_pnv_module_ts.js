"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pnv_pnv_module_ts"],{

/***/ 5794:
/*!*******************************************!*\
  !*** ./src/app/pnv/pnv-routing.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PnvPageRoutingModule": () => (/* binding */ PnvPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _pnv_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pnv.page */ 8981);




const routes = [
    {
        path: '',
        component: _pnv_page__WEBPACK_IMPORTED_MODULE_0__.PnvPage
    }
];
let PnvPageRoutingModule = class PnvPageRoutingModule {
};
PnvPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PnvPageRoutingModule);



/***/ }),

/***/ 4468:
/*!***********************************!*\
  !*** ./src/app/pnv/pnv.module.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PnvPageModule": () => (/* binding */ PnvPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _pnv_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pnv-routing.module */ 5794);
/* harmony import */ var _pnv_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pnv.page */ 8981);







let PnvPageModule = class PnvPageModule {
};
PnvPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _pnv_routing_module__WEBPACK_IMPORTED_MODULE_0__.PnvPageRoutingModule
        ],
        declarations: [_pnv_page__WEBPACK_IMPORTED_MODULE_1__.PnvPage]
    })
], PnvPageModule);



/***/ }),

/***/ 8981:
/*!*********************************!*\
  !*** ./src/app/pnv/pnv.page.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PnvPage": () => (/* binding */ PnvPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _pnv_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pnv.page.html?ngResource */ 5647);
/* harmony import */ var _pnv_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pnv.page.scss?ngResource */ 714);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let PnvPage = class PnvPage {
<<<<<<< HEAD
    constructor() {
        this.point = 'VOUCHER-REWARD';
    }
=======
    constructor() { }
>>>>>>> 5263dac32eaf6712b4307010a3b0f876e60db6df
    ngOnInit() {
    }
};
PnvPage.ctorParameters = () => [];
PnvPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-pnv',
        template: _pnv_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_pnv_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PnvPage);



/***/ }),

/***/ 714:
/*!**********************************************!*\
  !*** ./src/app/pnv/pnv.page.scss?ngResource ***!
  \**********************************************/
/***/ ((module) => {

<<<<<<< HEAD
module.exports = "ion-card {\n  text-align: center;\n}\n\nion-segment-button {\n  --indicator-box-shadow:transparent !important;\n  border-radius: 2rem !important;\n  padding: 0 0.2em;\n  margin: 0.5em;\n  --background: white;\n  --color: #ea5568;\n  --background-checked: linear-gradient(to right, #eb445a, #e38692) !important;\n  --color-checked:white;\n  --indicator-color: transparent !important;\n}\n\nion-grid {\n  text-align: center;\n  padding-top: 5px;\n}\n\nion-card {\n  margin-top: 0px;\n}\n\n.btn {\n  font-size: 15px;\n}\n\nh5 {\n  text-align: center;\n}\n\n.seg-btn {\n  border-radius: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBudi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUNBO0VBRU0sNkNBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0RUFBQTtFQUNBLHFCQUFBO0VBQ0EseUNBQUE7QUFDTjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7QUFFRjs7QUFBQTtFQUNFLGtCQUFBO0FBR0Y7O0FBREE7RUFDRSxtQkFBQTtBQUlGIiwiZmlsZSI6InBudi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaW9uLXNlZ21lbnQtYnV0dG9ue1xyXG5cclxuICAgICAgLS1pbmRpY2F0b3ItYm94LXNoYWRvdzp0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAycmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmc6IDAgMC4yZW07XHJcbiAgICAgIG1hcmdpbjogMC41ZW07XHJcbiAgICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgIC0tY29sb3I6ICNlYTU1Njg7XHJcbiAgICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNlYjQ0NWEsICNlMzg2OTIpICFpbXBvcnRhbnQ7XHJcbiAgICAgIC0tY29sb3ItY2hlY2tlZDp3aGl0ZTtcclxuICAgICAgLS1pbmRpY2F0b3ItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcblxyXG4gIH1cclxuXHJcbmlvbi1ncmlke1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG59XHJcbmlvbi1jYXJke1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG4uYnRue1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5oNXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnNlZy1idG57XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxufVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vQGF0LXJvb3RcclxuXHJcbiJdfQ== */";
=======
module.exports = "ion-card {\n  text-align: center;\n}\n\nion-segment-button {\n  --color: var(--ion-color-dark);\n  --color-checked:var(--ion-color-danger);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBudi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUNBO0VBQ0UsOEJBQUE7RUFDQSx1Q0FBQTtBQUVGIiwiZmlsZSI6InBudi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaW9uLXNlZ21lbnQtYnV0dG9ue1xyXG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAtLWNvbG9yLWNoZWNrZWQ6dmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbn1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL0BhdC1yb290XHJcblxyXG4iXX0= */";
>>>>>>> 5263dac32eaf6712b4307010a3b0f876e60db6df

/***/ }),

/***/ 5647:
/*!**********************************************!*\
  !*** ./src/app/pnv/pnv.page.html?ngResource ***!
  \**********************************************/
/***/ ((module) => {

<<<<<<< HEAD
module.exports = "<ion-header>\r\n  <ion-toolbar color=\"danger\">\r\n    <ion-title>Point and Voucher</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\r\n          </ion-buttons>\r\n          <ion-button color=\"light\" slot=\"end\" fill=\"clear\" id=\"alignment-button\">\r\n            <ion-icon name=\"notifications-outline\"></ion-icon>\r\n           </ion-button>\r\n           <ion-popover trigger=\"alignment-button\" side=\"bottom\">\r\n             <ng-template>\r\n               <ion-content>\r\n                <ion-list>\r\n                  <ion-item>\r\n                   <ion-label>\r\n                     Notification 1\r\n                   </ion-label>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                   <ion-label>\r\n                     Notification 2\r\n                   </ion-label>\r\n                 </ion-item>\r\n                 <ion-item>\r\n                  <ion-label>\r\n                    Notification 3\r\n                  </ion-label>\r\n                 </ion-item>\r\n                </ion-list>\r\n               </ion-content>\r\n             </ng-template>\r\n           </ion-popover>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content color=\"flash-white\">\r\n  <ion-segment scrollable [(ngModel)]=\"point\">\r\n    <ion-segment-button value=\"VOUCHER-REWARD\">\r\n      <ion-label>VOUCHER REWARDS</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"POINT-HISTORY\">\r\n      <ion-label>POINT HISTORY</ion-label>\r\n    </ion-segment-button>\r\n\r\n  </ion-segment>\r\n\r\n\r\n<div [ngSwitch]=\"point\">\r\n  <div *ngSwitchDefault=\"'VOUCHER-REWARD'\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-card>\r\n            <ion-card-header>\r\n              Total Voucher\r\n            </ion-card-header>\r\n            <ion-card-subtitle>\r\n              2\r\n            </ion-card-subtitle>\r\n          </ion-card>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-card>\r\n            <ion-card-header>\r\n              Total Rewards\r\n            </ion-card-header>\r\n            <ion-card-subtitle>\r\n              2\r\n            </ion-card-subtitle>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <ion-toolbar>\r\n      <h5>Voucher List</h5>\r\n    </ion-toolbar>\r\n    <br>\r\n    <ion-card>\r\n      <ion-card-header>\r\n        <ion-row>\r\n          <ion-col size=\"8\">\r\n            <img src=\"../../assets/images/v2.jpg\" alt=\"\">\r\n          </ion-col>\r\n          <ion-col>\r\n            <br>\r\n            <a href=\"./voucher-details/\"> <ion-button color=\"danger\" class=\"btn\">\r\n              Redeem <br> here\r\n            </ion-button>\r\n            </a>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card-header>\r\n    </ion-card>\r\n    <ion-card>\r\n      <ion-card-header>\r\n        <ion-row>\r\n          <ion-col size=\"8\">\r\n            <img src=\"../../assets/images/v1.jpg\" alt=\"\">\r\n          </ion-col>\r\n          <ion-col>\r\n            <br>\r\n            <a href=\"./voucher-list/\"> <ion-button color=\"danger\" class=\"btn\">\r\n              Redeem <br> here\r\n            </ion-button>\r\n            </a>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card-header>\r\n    </ion-card>\r\n    <ion-toolbar>\r\n      <h5>Rewards List</h5>\r\n    </ion-toolbar>\r\n    <br>\r\n    <ion-card>\r\n      <ion-card-header>\r\n        <ion-row>\r\n          <ion-col size=\"8\">\r\n            <img src=\"../../assets/images/r2.jpg\" alt=\"\">\r\n          </ion-col>\r\n          <ion-col>\r\n            <br>\r\n            <a href=\"./reward-details/\"> <ion-button color=\"danger\" class=\"btn\">\r\n              Claim <br> here\r\n            </ion-button>\r\n            </a>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card-header>\r\n    </ion-card>\r\n    <ion-card>\r\n      <ion-card-header>\r\n        <ion-row>\r\n          <ion-col size=\"8\">\r\n            <img src=\"../../assets/images/r1.jpg\" alt=\"\">\r\n          </ion-col>\r\n          <ion-col>\r\n            <br>\r\n            <a href=\"./reward-details/\"> <ion-button color=\"danger\" class=\"btn\">\r\n              Claim <br> here\r\n            </ion-button>\r\n            </a>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card-header>\r\n    </ion-card>\r\n  </div>\r\n\r\n\r\n  <div *ngSwitchCase=\"'POINT-HISTORY'\">\r\n    <p style=\"color: black;\"></p>\r\n    <ion-card>\r\n      <ion-card-header>\r\n        Total Point\r\n      </ion-card-header>\r\n      <ion-card-subtitle>\r\n        200\r\n      </ion-card-subtitle>\r\n    </ion-card>\r\n    <ion-toolbar>\r\n      <h5>Point History</h5>\r\n    </ion-toolbar>\r\n    <div class=\"ion-text-end\">\r\n      <ion-button slot=\"end\" fill=\"clear\">\r\n        <a href=\"./point-lists/\">View all >></a>\r\n      </ion-button>\r\n    </div>\r\n    <ion-grid size=\"100%\">\r\n      <ion-row>\r\n        <ion-col>\r\n         <b>Date</b>\r\n        </ion-col>\r\n        <ion-col>\r\n          <b>Details</b>\r\n        </ion-col>\r\n        <ion-col>\r\n          <b>Points</b>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n         02 Aug 2021\r\n        </ion-col>\r\n        <ion-col>\r\n          Puchasing something\r\n        </ion-col>\r\n        <ion-col>\r\n          30\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</div>\r\n\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-button fill=\"clear\">\r\n      <a href=\"./home/\"><img class=\"nav-bar-img\" src=\"../../assets/icon/home-black.png\" style=\"height: 45px; width: 50px;\" alt=\"\"></a>\r\n    </ion-button>\r\n    <ion-button fill=\"clear\">\r\n      <a href=\"./my-account/\"><img class=\"nav-bar-img\" src=\"../../assets/icon/myaccount-black.png\"  style=\"height: 45px; width: 50px;\" alt=\"\"></a>\r\n    </ion-button>\r\n    <ion-button fill=\"clear\">\r\n      <a href=\"./promotions/\"><img class=\"nav-bar-img\" src=\"../../assets/icon/promotions-black.png\"  style=\"height: 45px; width: 50px;\" alt=\"\"></a>\r\n    </ion-button>\r\n    <ion-button fill=\"clear\">\r\n      <a href=\"./location/\"><img class=\"nav-bar-img\" src=\"../../assets/icon/location-black.png\"  style=\"height: 45px; width: 50px;\" alt=\"\"></a>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n\r\n\r\n  </ion-footer>\r\n";
=======
module.exports = "<ion-header>\r\n  <ion-toolbar color=\"danger\">\r\n    <ion-title>Point and Voucher</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\r\n          </ion-buttons>\r\n          <ion-button color=\"light\" slot=\"end\" fill=\"clear\" id=\"alignment-button\">\r\n            <ion-icon name=\"notifications-outline\"></ion-icon>\r\n           </ion-button>\r\n           <ion-popover trigger=\"alignment-button\" side=\"bottom\">\r\n             <ng-template>\r\n               <ion-content>\r\n                <ion-list>\r\n                  <ion-item>\r\n                   <ion-label>\r\n                     Notification 1\r\n                   </ion-label>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                   <ion-label>\r\n                     Notification 2\r\n                   </ion-label>\r\n                 </ion-item>\r\n\r\n                </ion-list>\r\n               </ion-content>\r\n             </ng-template>\r\n           </ion-popover>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content color=\"flash-white\">\r\n<ion-grid>\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-card>\r\n        <ion-card-header>\r\n          Total Point\r\n        </ion-card-header>\r\n        <ion-card-subtitle>\r\n          12\r\n        </ion-card-subtitle>\r\n      </ion-card>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-card href=\"../voucher-list/\">\r\n        <ion-card-header>\r\n          Total Voucher\r\n        </ion-card-header>\r\n        <ion-card-subtitle>\r\n          10\r\n        </ion-card-subtitle>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n<ion-segment scrollable value=\"point\" mode=\"md\">\r\n  <ion-segment-button value=\"VOUCHER-REWARD\">\r\n    <ion-label>VOUCHER REWARDS</ion-label>\r\n  </ion-segment-button>\r\n  <ion-segment-button value=\"POINT-HISTORY\">\r\n    <ion-label>POINT HISTORY</ion-label>\r\n  </ion-segment-button>\r\n\r\n</ion-segment>\r\n\r\n\r\n<div [ngSwitch]=\"point\">\r\n  <div *ngSwitchCase=\"'VOUCHER-REWARD'\">\r\n    <p style=\"color: black;\">TEST VOUCHER REWARD 12w212</p>\r\n  </div>\r\n  <div *ngSwitchCase=\"'POINT-HISTORY'\">\r\n    <p style=\"color: black;\">TEST POINT qwsa HISTORY</p>\r\n  </div>\r\n</div>\r\n\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-button fill=\"clear\">\r\n      <a href=\"./home/\"><img class=\"nav-bar-img\" src=\"../../assets/icon/home-black.png\" style=\"height: 45px; width: 50px;\" alt=\"\"></a>\r\n    </ion-button>\r\n    <ion-button fill=\"clear\">\r\n      <a href=\"./my-account/\"><img class=\"nav-bar-img\" src=\"../../assets/icon/myaccount-black.png\"  style=\"height: 45px; width: 50px;\" alt=\"\"></a>\r\n    </ion-button>\r\n    <ion-button fill=\"clear\">\r\n      <a href=\"./promotions/\"><img class=\"nav-bar-img\" src=\"../../assets/icon/promotions-black.png\"  style=\"height: 45px; width: 50px;\" alt=\"\"></a>\r\n    </ion-button>\r\n    <ion-button fill=\"clear\">\r\n      <a href=\"./location/\"><img class=\"nav-bar-img\" src=\"../../assets/icon/location-black.png\"  style=\"height: 45px; width: 50px;\" alt=\"\"></a>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n\r\n\r\n  </ion-footer>\r\n";
>>>>>>> 5263dac32eaf6712b4307010a3b0f876e60db6df

/***/ })

}]);
//# sourceMappingURL=src_app_pnv_pnv_module_ts.js.map