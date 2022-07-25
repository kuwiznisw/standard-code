"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_edit-profile_edit-profile_module_ts"],{

/***/ 1871:
/*!*************************************************************!*\
  !*** ./src/app/edit-profile/edit-profile-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfilePageRoutingModule": () => (/* binding */ EditProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-profile.page */ 2613);




const routes = [
    {
        path: '',
        component: _edit_profile_page__WEBPACK_IMPORTED_MODULE_0__.EditProfilePage
    }
];
let EditProfilePageRoutingModule = class EditProfilePageRoutingModule {
};
EditProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditProfilePageRoutingModule);



/***/ }),

/***/ 1241:
/*!*****************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfilePageModule": () => (/* binding */ EditProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-profile-routing.module */ 1871);
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-profile.page */ 2613);







let EditProfilePageModule = class EditProfilePageModule {
};
EditProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditProfilePageRoutingModule
        ],
        declarations: [_edit_profile_page__WEBPACK_IMPORTED_MODULE_1__.EditProfilePage]
    })
], EditProfilePageModule);



/***/ }),

/***/ 2613:
/*!***************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfilePage": () => (/* binding */ EditProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _edit_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-profile.page.html?ngResource */ 1481);
/* harmony import */ var _edit_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-profile.page.scss?ngResource */ 8481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let EditProfilePage = class EditProfilePage {
    constructor() { }
    ngOnInit() {
    }
};
EditProfilePage.ctorParameters = () => [];
EditProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-edit-profile',
        template: _edit_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_edit_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EditProfilePage);



/***/ }),

/***/ 8481:
/*!****************************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".img {\n  text-align: center;\n  margin-top: 15px;\n}\n\n.button ion-button {\n  height: 50px;\n  width: 90%;\n  background-color: #e38692;\n}\n\nion-input {\n  background-color: #f4f3f3;\n  border-radius: 10px;\n}\n\nion-textarea {\n  background-color: #f4f3f3;\n  border-radius: 10px;\n}\n\nion-select {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0FBQ0oiLCJmaWxlIjoiZWRpdC1wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWd7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4uYnV0dG9uIGlvbi1idXR0b257XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzODY5MjtcclxufVxyXG5cclxuaW9uLWlucHV0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NCwgMjQzLCAyNDMpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuaW9uLXRleHRhcmVhe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NCwgMjQzLCAyNDMpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuaW9uLXNlbGVjdHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn0iXX0= */";

/***/ }),

/***/ 1481:
/*!****************************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"danger\">\r\n    <ion-title>Edit Profile</ion-title>\r\n    <ion-button color=\"light\" fill=\"clear\" [routerLink]=\"['/my-account']\"  slot=\"start\">\r\n      <ion-icon name=\"chevron-back-outline\"></ion-icon>\r\n        Back\r\n    </ion-button>\r\n    <ion-button color=\"light\" slot=\"end\" fill=\"clear\" id=\"alignment-button\">\r\n      <ion-icon name=\"notifications-outline\"></ion-icon>\r\n     </ion-button>\r\n     <ion-popover trigger=\"alignment-button\" side=\"bottom\">\r\n       <ng-template>\r\n         <ion-content color=\"flash-white\">\r\n          <ion-list>\r\n            <ion-item>\r\n             <ion-label>\r\n               Notification 1\r\n             </ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n             <ion-label>\r\n               Notification 2\r\n             </ion-label>\r\n           </ion-item>\r\n\r\n          </ion-list>\r\n         </ion-content>\r\n       </ng-template>\r\n     </ion-popover>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div class=\"img\">\r\n  \r\n  <img style=\"border-radius: 45px; width: 30vw;height: 30vw;\" src=\"../../assets/images/profile-picture.png\" alt=\"\">\r\n \r\n  </div>\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Name:</ion-label>\r\n    <ion-input value=\"Ali Baba\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Email:</ion-label>\r\n    <ion-input value=\"alibaba@gmail.com\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Phone Number:</ion-label>\r\n    <ion-input value=\"0123456789\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Address:</ion-label>\r\n    <ion-textarea  value=\"No. 11, Jalan Astana 5/KU2, Bandar Bukit Raja\"></ion-textarea>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"floating\">Zip Code:</ion-label>\r\n    <ion-input value=\"41050\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label position=\"floating\">City:</ion-label>\r\n    <ion-input value=\"Klang\"></ion-input>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>State</ion-label>\r\n    <ion-select [interfaceOptions]=\"customAlertOptions\" interface=\"alert\" placeholder=\"Selangor\" value=\"Selangor\">\r\n      <ion-select-option value=\"Perlis\">Perlis</ion-select-option>\r\n      <ion-select-option value=\"Kedah\">Kedah</ion-select-option>\r\n      <ion-select-option value=\"Pulau Pinang\">Pulau Pinang</ion-select-option>\r\n      <ion-select-option value=\"Perak\">Perak</ion-select-option>\r\n      <ion-select-option value=\"Kelantan\">Kelantan</ion-select-option>\r\n      <ion-select-option value=\"Terengganu\">Terengganu</ion-select-option>\r\n      <ion-select-option value=\"Pahang\">Pahang</ion-select-option>\r\n      <ion-select-option value=\"Selangor\">Selangor</ion-select-option>\r\n      <ion-select-option value=\"Kuala Lumpur\">Kuala Lumpur</ion-select-option>\r\n      <ion-select-option value=\"Putrajaya\">Putrajaya</ion-select-option>\r\n      <ion-select-option value=\"Negeri Sembilan\">Negeri Sembilan</ion-select-option>\r\n      <ion-select-option value=\"Melaka\">Melaka</ion-select-option>\r\n      <ion-select-option value=\"Johor\">Johor</ion-select-option>\r\n      <ion-select-option value=\"Sarawak\">Sarawak</ion-select-option>\r\n      <ion-select-option value=\"Sabah\">Sabah</ion-select-option>\r\n      <ion-select-option value=\"Labuan\">Labuan</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n  <div class=\"ion-text-center button\">\r\n    <ion-button color=\"danger\" href=\"./my-account/\">\r\n      Edit Profile\r\n    </ion-button>\r\n    </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_edit-profile_edit-profile_module_ts.js.map