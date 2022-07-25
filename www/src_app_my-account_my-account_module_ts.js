"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_my-account_my-account_module_ts"],{

/***/ 6541:
/*!*********************************************************!*\
  !*** ./src/app/my-account/my-account-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyAccountPageRoutingModule": () => (/* binding */ MyAccountPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _my_account_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-account.page */ 6197);




const routes = [
    {
        path: '',
        component: _my_account_page__WEBPACK_IMPORTED_MODULE_0__.MyAccountPage
    }
];
let MyAccountPageRoutingModule = class MyAccountPageRoutingModule {
};
MyAccountPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MyAccountPageRoutingModule);



/***/ }),

/***/ 7796:
/*!*************************************************!*\
  !*** ./src/app/my-account/my-account.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyAccountPageModule": () => (/* binding */ MyAccountPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _my_account_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-account-routing.module */ 6541);
/* harmony import */ var _my_account_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-account.page */ 6197);







let MyAccountPageModule = class MyAccountPageModule {
};
MyAccountPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _my_account_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyAccountPageRoutingModule
        ],
        declarations: [_my_account_page__WEBPACK_IMPORTED_MODULE_1__.MyAccountPage]
    })
], MyAccountPageModule);



/***/ }),

/***/ 6197:
/*!***********************************************!*\
  !*** ./src/app/my-account/my-account.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyAccountPage": () => (/* binding */ MyAccountPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _my_account_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-account.page.html?ngResource */ 9420);
/* harmony import */ var _my_account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-account.page.scss?ngResource */ 6337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let MyAccountPage = class MyAccountPage {
<<<<<<< HEAD
    constructor() {
        this.account = 'MEMBER E-CARD';
    }
    ngOnInit() {
    }
    editProfile() {
        this.router.navigate(['./edit-profile']);
    }
    ionViewWillEnter() {
        this.footer.tabSelected(2);
    }
=======
    constructor() { }
    ngOnInit() {
    }
>>>>>>> 5263dac32eaf6712b4307010a3b0f876e60db6df
};
MyAccountPage.ctorParameters = () => [];
MyAccountPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-my-account',
        template: _my_account_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_my_account_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MyAccountPage);



/***/ }),

/***/ 6337:
/*!************************************************************!*\
  !*** ./src/app/my-account/my-account.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

<<<<<<< HEAD
module.exports = "h1, h2, h3, h4, h5, h6 {\n  margin-top: 0px;\n  margin-bottom: 0px;\n  font-weight: 500;\n  line-height: 1.2;\n}\n\n.member-card {\n  border-radius: 25px;\n  background: #73AD21;\n  padding: 20px;\n  width: 200px;\n  height: 150px;\n}\n\nion-grid {\n  border-radius: 25px;\n  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.16), 0 4px 6px rgba(0, 0, 0, 0.45);\n  border-radius: 10px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-origin: content-box;\n  padding-top: 2px;\n  padding-bottom: 8%;\n  margin-bottom: 10%;\n}\n\n.card-detail {\n  border-radius: 5px;\n  background-color: #ee7a7a;\n}\n\nion-segment-button {\n  --indicator-box-shadow:transparent !important;\n  border-radius: 2rem !important;\n  padding: 0 0.2em;\n  margin: 0.5em;\n  --background: white;\n  --color: #ea5568;\n  --background-checked: linear-gradient(to right, #eb445a, #e38692) !important;\n  --color-checked:white;\n  --indicator-color: transparent !important;\n}\n\n.detail p {\n  margin: 0;\n  font-size: 16px;\n}\n\n.detail ion-row {\n  margin-bottom: 4px;\n}\n\n.label {\n  color: red;\n}\n\n.info {\n  color: black;\n}\n\n.detail ion-button {\n  height: 50px;\n  width: 90%;\n  background-color: #e38692;\n}\n\n.detail ion-button a {\n  font-size: 20px;\n  color: white;\n}\n\n.e-card {\n  background-image: url('card-background.jpg');\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWFjY291bnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUdBO0VBQ0ksbUJBQUE7RUFDSSw4RUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQVI7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0FBQUo7O0FBR0E7RUFFSSw2Q0FBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDRFQUFBO0VBQ0EscUJBQUE7RUFDQSx5Q0FBQTtBQURKOztBQU1BO0VBQ0ksU0FBQTtFQUNBLGVBQUE7QUFISjs7QUFRQTtFQUNJLGtCQUFBO0FBTEo7O0FBUUE7RUFDSSxVQUFBO0FBTEo7O0FBUUE7RUFDSSxZQUFBO0FBTEo7O0FBUUE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FBTEo7O0FBUUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQUxKOztBQVFBO0VBQ0ksNENBQUE7RUFDQSxtQkFBQTtBQUxKIiwiZmlsZSI6Im15LWFjY291bnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxufVxyXG5cclxuLm1lbWJlci1jYXJke1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGJhY2tncm91bmQ6ICM3M0FEMjE7XHJcbiAgICBwYWRkaW5nOiAyMHB4OyBcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMTUwcHg7ICBcclxuXHJcbn1cclxuXHJcbmlvbi1ncmlke1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDsgIFxyXG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMTYpLCAwIDRweCA2cHggcmdiYSgwLDAsMCwwLjQ1KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLW9yaWdpbjogY29udGVudC1ib3g7XHJcbiAgICAgICAgcGFkZGluZy10b3A6MnB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA4JTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbn1cclxuXHJcbi5jYXJkLWRldGFpbHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZTdhN2E7XHJcbn1cclxuXHJcbmlvbi1zZWdtZW50LWJ1dHRvbntcclxuXHJcbiAgICAtLWluZGljYXRvci1ib3gtc2hhZG93OnRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycmVtICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwIDAuMmVtO1xyXG4gICAgbWFyZ2luOiAwLjVlbTtcclxuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAtLWNvbG9yOiAjZWE1NTY4O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ViNDQ1YSwgI2UzODY5MikgIWltcG9ydGFudDtcclxuICAgIC0tY29sb3ItY2hlY2tlZDp3aGl0ZTtcclxuICAgIC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuXHJcbi5kZXRhaWwgcHtcclxuICAgIG1hcmdpbjowO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG5cclxuXHJcbi5kZXRhaWwgaW9uLXJvd3tcclxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxufVxyXG5cclxuLmxhYmVse1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmluZm97XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5kZXRhaWwgaW9uLWJ1dHRvbntcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTM4NjkyO1xyXG59XHJcblxyXG4uZGV0YWlsIGlvbi1idXR0b24gYXtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmUtY2FyZHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvY2FyZC1iYWNrZ3JvdW5kLmpwZ1wiKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn0iXX0= */";
=======
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteS1hY2NvdW50LnBhZ2Uuc2NzcyJ9 */";
>>>>>>> 5263dac32eaf6712b4307010a3b0f876e60db6df

/***/ }),

/***/ 9420:
/*!************************************************************!*\
  !*** ./src/app/my-account/my-account.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

<<<<<<< HEAD
module.exports = "<ion-header>\r\n  <ion-toolbar color=\"danger\">\r\n    <ion-title>My Account</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\r\n          </ion-buttons>\r\n          <ion-button color=\"light\" slot=\"end\" fill=\"clear\" id=\"alignment-button\">\r\n            <ion-icon name=\"notifications-outline\"></ion-icon>\r\n           </ion-button>\r\n           <ion-popover trigger=\"alignment-button\" side=\"bottom\">\r\n             <ng-template>\r\n               <ion-content>\r\n                <ion-list>\r\n                  <ion-item>\r\n                   <ion-label>\r\n                     Notification 1\r\n                   </ion-label>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                   <ion-label>\r\n                     Notification 2\r\n                   </ion-label>\r\n                 </ion-item>\r\n\r\n                </ion-list>\r\n               </ion-content>\r\n             </ng-template>\r\n           </ion-popover>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content color=\"flash-white\" [fullscreen]=\"true\">\r\n  <ion-segment style=\"background-color: #edecec;\"scrollable [(ngModel)]=\"account\" mode=\"md\">\r\n    <ion-segment-button value=\"MEMBER E-CARD\">\r\n      <ion-label>MEMBER E-CARD</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"DETAIL\">\r\n      <ion-label>DETAIL</ion-label>\r\n    </ion-segment-button>\r\n\r\n  </ion-segment>\r\n\r\n  <div [ngSwitch]=\"account\">\r\n    <div *ngSwitchCase=\"'MEMBER E-CARD'\">\r\n      <div style=\"margin-bottom:20px\">\r\n\r\n      </div>\r\n      <div class=\"e-card\" style=\"margin-left: 10%; margin-right: 10%;\">\r\n      <ion-grid class=\"ion-padding\">\r\n        <ion-row>\r\n          <ion-col class=\"ion-text-center\">\r\n            <img src=\"../../assets/images/sample-logo.png\" alt=\"\" style=\"height: 60px;width:60px;\"><br>\r\n            <span style=\"font-family: Bahnschrift SemiBold;\">Company Name</span>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row style=\"margin-top: 5%;\">\r\n          <ion-col class=\"ion-text-center\">\r\n            <img style=\"border-radius: 45px; width: 30vw;height: 30vw;\" src=\"../../assets/images/profile-picture.png\" alt=\"\">\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n        <ion-row style=\"margin-top: 2%;\">\r\n          <ion-col class=\"ion-text-center\">\r\n            <h5>\r\n              <span style=\"text-transform: uppercase; font-family: Nirmala UI;\">ALI BABA</span>\r\n            </h5>\r\n\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row style=\"margin-top: 5%;\">\r\n          <ion-col class=\"ion-text-center\">\r\n          <span style=\"font-family: MV Boli\">Member Card</span>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n\r\n        <div class=\"card-detail\">\r\n        <!--<ion-row style=\"background-color: #F7B5CD;\">-->\r\n          <ion-row style=\"color:black!important;\">\r\n            <ion-col size=\"5\">\r\n              <span style=\"font-size: 3.5vw;font-weight: bold;\">Phone Number</span>\r\n            </ion-col>\r\n            <ion-col>\r\n              <span style=\"font-size: 3.5vw;\">: 0123456789</span>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row style=\"color:black!important;\">\r\n            <ion-col size=\"5\">\r\n              <span style=\"font-size: 3.5vw;font-weight: bold;\">Email</span>\r\n            </ion-col>\r\n            <ion-col>\r\n              <span style=\"font-size: 3.5vw; word-wrap: break-word;\">: alibaba@gmail.com</span>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n          <!--</ion-row>-->\r\n          <ion-row style=\"margin-top: 10%;\">\r\n          <ion-col class=\"ion-text-center\">\r\n            <img src =\"../../assets/images/barcode.png\" alt=\"\" style=\"height:50px\">\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n      </ion-grid>\r\n      </div>\r\n    </div>\r\n    <div *ngSwitchCase=\"'DETAIL'\">\r\n      <div class=\"detail\">\r\n        <ion-card>\r\n      <ion-row>\r\n        <ion-col>\r\n          <p class=\"label\">Name</p>\r\n          <p class=\"info\">Ali Baba</p>\r\n        </ion-col>\r\n        <ion-col>\r\n          <p class=\"label\">Phone Number</p>\r\n          <p class=\"info\">0123456789</p>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <p class=\"label\">Status</p>\r\n          <p class=\"info\">Active</p>\r\n        </ion-col>\r\n        <ion-col>\r\n          <p class=\"label\">Member Type</p>\r\n          <p class=\"info\">Free Member</p>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <p class=\"label\">Email</p>\r\n          <p class=\"info\">alibaba@gmail.com</p>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <p class=\"label\">Address</p>\r\n          <p class=\"info\">No. 11, Jalan Astana 5/KU2, Bandar Bukit Raja</p>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <p class=\"label\">Zip Code</p>\r\n          <p class=\"info\">41050</p>\r\n        </ion-col>\r\n        <ion-col>\r\n          <p class=\"label\">City</p>\r\n          <p class=\"info\">Klang</p>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <p class=\"label\">State</p>\r\n          <p class=\"info\">Selangor</p>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <p class=\"label\">IC Number</p>\r\n          <p class=\"info\">950112108142</p>\r\n        </ion-col>\r\n        <ion-col>\r\n          <p class=\"label\">Date of Birth</p>\r\n          <p class=\"info\">12-01-1995</p>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>\r\n          <p class=\"label\">Gender</p>\r\n          <p class=\"info\">Male</p>\r\n        </ion-col>\r\n        <ion-col>\r\n          <p class=\"label\">ID</p>\r\n          <p class=\"info\">42983</p>\r\n        </ion-col>\r\n      </ion-row>\r\n      </ion-card>\r\n      <div class=\"ion-text-center\">\r\n      <!--<ion-button color=\"danger\" href=\"./edit-profile/\">-->\r\n        <ion-button color=\"danger\" [routerLink]=\"['/edit-profile']\">\r\n        Edit Profile\r\n      </ion-button>\r\n      </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar class=\"ion-text-center\">\r\n    <!--<ion-button fill=\"clear\">\r\n      <a href=\"./home/\"><img class=\"nav-bar-img\" src=\"../../assets/icon/home-black.png\" style=\"height: 45px; width: 50px;\" alt=\"\"></a>\r\n    </ion-button>\r\n    <ion-button fill=\"clear\">\r\n      <a href=\"./my-account/\"><img class=\"nav-bar-img\" src=\"../../assets/icon/myaccount-red.png\"  style=\"height: 45px; width: 50px;\" alt=\"\"></a>\r\n    </ion-button>\r\n    <ion-button fill=\"clear\">\r\n      <a href=\"./promotions/\"><img class=\"nav-bar-img\" src=\"../../assets/icon/promotions-black.png\"  style=\"height: 45px; width: 50px;\" alt=\"\"></a>\r\n    </ion-button>\r\n    <ion-button fill=\"clear\">\r\n      <a href=\"./location/\"><img class=\"nav-bar-img\" src=\"../../assets/icon/location-black.png\"  style=\"height: 45px; width: 50px;\" alt=\"\"></a>\r\n    </ion-button>-->\r\n    <ion-button fill=\"clear\" [routerLink]=\"['/home']\">\r\n      <img class=\"nav-bar-img\" src=\"../../assets/icon/home-black.png\" style=\"height: 45px; width: 50px;\" alt=\"\">\r\n    </ion-button>\r\n    <ion-button fill=\"clear\" [routerLink]=\"['/my-account']\">\r\n      <img class=\"nav-bar-img\" src=\"../../assets/icon/myaccount-red.png\"  style=\"height: 45px; width: 50px;\" alt=\"\">\r\n    </ion-button>\r\n    <ion-button fill=\"clear\" [routerLink]=\"['/promotions']\">\r\n      <img class=\"nav-bar-img\" src=\"../../assets/icon/promotions-black.png\"  style=\"height: 45px; width: 50px;\" alt=\"\">\r\n    </ion-button>\r\n    <ion-button fill=\"clear\" [routerLink]=\"['/location']\">\r\n      <img class=\"nav-bar-img\" src=\"../../assets/icon/location-black.png\"  style=\"height: 45px; width: 50px;\" alt=\"\">\r\n    </ion-button>\r\n  </ion-toolbar>\r\n\r\n\r\n  </ion-footer>\r\n";
=======
module.exports = "<ion-header>\r\n  <ion-toolbar color=\"danger\">\r\n    <ion-title>My Account</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\r\n          </ion-buttons>\r\n          <ion-button color=\"light\" slot=\"end\" fill=\"clear\" id=\"alignment-button\">\r\n            <ion-icon name=\"notifications-outline\"></ion-icon>\r\n           </ion-button>\r\n           <ion-popover trigger=\"alignment-button\" side=\"bottom\">\r\n             <ng-template>\r\n               <ion-content>\r\n                <ion-list>\r\n                  <ion-item>\r\n                   <ion-label>\r\n                     Notification 1\r\n                   </ion-label>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                   <ion-label>\r\n                     Notification 2\r\n                   </ion-label>\r\n                 </ion-item>\r\n\r\n                </ion-list>\r\n               </ion-content>\r\n             </ng-template>\r\n           </ion-popover>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content color=\"flash-white\">\r\n  \r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-button fill=\"clear\">\r\n      <a href=\"./home/\"><img class=\"nav-bar-img\" src=\"../../assets/icon/home-black.png\" style=\"height: 45px; width: 50px;\" alt=\"\"></a>\r\n    </ion-button>\r\n    <ion-button fill=\"clear\">\r\n      <a href=\"./my-account/\"><img class=\"nav-bar-img\" src=\"../../assets/icon/myaccount-red.png\"  style=\"height: 45px; width: 50px;\" alt=\"\"></a>\r\n    </ion-button>\r\n    <ion-button fill=\"clear\">\r\n      <a href=\"./promotions/\"><img class=\"nav-bar-img\" src=\"../../assets/icon/promotions-black.png\"  style=\"height: 45px; width: 50px;\" alt=\"\"></a>\r\n    </ion-button>\r\n    <ion-button fill=\"clear\">\r\n      <a href=\"./location/\"><img class=\"nav-bar-img\" src=\"../../assets/icon/location-black.png\"  style=\"height: 45px; width: 50px;\" alt=\"\"></a>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n\r\n\r\n  </ion-footer>\r\n";
>>>>>>> 5263dac32eaf6712b4307010a3b0f876e60db6df

/***/ })

}]);
//# sourceMappingURL=src_app_my-account_my-account_module_ts.js.map