"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_footer_footer_module_ts"],{

/***/ 9782:
/*!*************************************************!*\
  !*** ./src/app/footer/footer-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterPageRoutingModule": () => (/* binding */ FooterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _footer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.page */ 67);




const routes = [
    {
        path: '',
        component: _footer_page__WEBPACK_IMPORTED_MODULE_0__.FooterPage
    }
];
let FooterPageRoutingModule = class FooterPageRoutingModule {
};
FooterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FooterPageRoutingModule);



/***/ }),

/***/ 6444:
/*!*****************************************!*\
  !*** ./src/app/footer/footer.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterPageModule": () => (/* binding */ FooterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _footer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer-routing.module */ 9782);
/* harmony import */ var _footer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.page */ 67);







let FooterPageModule = class FooterPageModule {
};
FooterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _footer_routing_module__WEBPACK_IMPORTED_MODULE_0__.FooterPageRoutingModule
        ],
        declarations: [_footer_page__WEBPACK_IMPORTED_MODULE_1__.FooterPage]
    })
], FooterPageModule);



/***/ }),

/***/ 67:
/*!***************************************!*\
  !*** ./src/app/footer/footer.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterPage": () => (/* binding */ FooterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _footer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.page.html?ngResource */ 5298);
/* harmony import */ var _footer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.page.scss?ngResource */ 9939);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let FooterPage = class FooterPage {
    constructor() { }
    ngOnInit() {
    }
};
FooterPage.ctorParameters = () => [];
FooterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-footer',
        template: _footer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_footer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FooterPage);



/***/ }),

/***/ 9939:
/*!****************************************************!*\
  !*** ./src/app/footer/footer.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 5298:
/*!****************************************************!*\
  !*** ./src/app/footer/footer.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-button fill=\"clear\">\r\n      <img src=\"../../assets/icon/house.png\" style=\"height: 30px; width: 30px;\" alt=\"\">\r\n    </ion-button>\r\n  </ion-toolbar>\r\n\r\n\r\n  </ion-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_footer_footer_module_ts.js.map