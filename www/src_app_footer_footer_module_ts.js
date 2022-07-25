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
        path: 'footer',
        component: _footer_page__WEBPACK_IMPORTED_MODULE_0__.FooterPage,
        children: [
            {
                path: 'home',
                loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ../home/home.module */ 3467)).then(m => m.HomePageModule)
            },
            {
                path: 'my-account',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_my-account_my-account_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../my-account/my-account.module */ 7796)).then(m => m.MyAccountPageModule)
            },
            {
                path: 'promotions',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_promotions_promotions_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../promotions/promotions.module */ 225)).then(m => m.PromotionsPageModule)
            },
            {
                path: 'location',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_location_location_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../location/location.module */ 7718)).then(m => m.LocationPageModule)
            },
            {
                path: '',
                redirectTo: '/footer/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/footer/home',
        pathMatch: 'full'
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



/***/ })

}]);
//# sourceMappingURL=src_app_footer_footer_module_ts.js.map