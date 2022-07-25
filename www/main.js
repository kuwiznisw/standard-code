(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



const routes = [
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'promotions',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_promotions_promotions_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./promotions/promotions.module */ 225)).then(m => m.PromotionsPageModule)
    },
    {
        path: 'promotion1',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_promotion1_promotion1_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./promotion1/promotion1.module */ 8450)).then(m => m.Promotion1PageModule)
    },
    {
        path: 'promotion2',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_promotion2_promotion2_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./promotion2/promotion2.module */ 9146)).then(m => m.Promotion2PageModule)
    },
    {
        path: 'footer',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_footer_footer_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./footer/footer.module */ 6444)).then(m => m.FooterPageModule)
    },
    {
        path: 'my-account',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_my-account_my-account_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./my-account/my-account.module */ 7796)).then(m => m.MyAccountPageModule)
    },
    {
        path: 'location',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_location_location_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./location/location.module */ 7718)).then(m => m.LocationPageModule)
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(m => m.HomePageModule)
    },
    {
        path: 'about-us',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_about-us_about-us_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./about-us/about-us.module */ 8310)).then(m => m.AboutUsPageModule)
    },
    {
        path: 'tnc',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tnc_tnc_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tnc/tnc.module */ 6913)).then(m => m.TncPageModule)
    },
    {
        path: 'pnv',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pnv_pnv_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pnv/pnv.module */ 4468)).then(m => m.PnvPageModule)
    },
    {
        path: 'voucher-list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_voucher-list_voucher-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./voucher-list/voucher-list.module */ 2037)).then(m => m.VoucherListPageModule)
    },
    {
        path: 'reward-details',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_reward-details_reward-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./reward-details/reward-details.module */ 3106)).then(m => m.RewardDetailsPageModule)
    },
    {
        path: 'voucher-details',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_voucher-details_voucher-details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./voucher-details/voucher-details.module */ 1131)).then(m => m.VoucherDetailsPageModule)
    },
    {
        path: 'point-lists',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_point-lists_point-lists_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./point-lists/point-lists.module */ 5364)).then(m => m.PointListsPageModule)
    },
    {
        path: 'geolocation',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_geolocation_geolocation_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./geolocation/geolocation.module */ 8463)).then(m => m.GeolocationPageModule)
    },
    {
        path: 'edit-profile',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_edit-profile_edit-profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./edit-profile/edit-profile.module */ 1241)).then(m => m.EditProfilePageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 287);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 9036);










let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule],
        providers: [
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient,
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicRouteStrategy },
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__.Geolocation,
            _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__.NativeGeocoder
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 8150);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "* {\n  font-family: lato;\n}\n\n.menu-header-bg {\n  height: 180px;\n  width: 350px;\n  background: #e38692;\n  background: linear-gradient(90deg, #dc8490 0%, #e66274 100%);\n  box-shadow: 0px 1px 10px rgba(98, 140, 255, 0.5);\n  transform: rotate(-15deg);\n  border-radius: 10px 10px 10px 50px;\n  margin-left: -18px;\n  margin-top: -50px;\n  margin-bottom: 60px;\n}\n\n.header-content {\n  position: absolute;\n  top: 30px;\n  left: 15px;\n  display: flex;\n  align-items: center;\n}\n\n.header-content img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  border: 7px solid #e38692;\n  margin-right: 14px;\n}\n\n.header-content h2 {\n  font-weight: 300;\n  color: #fff;\n}\n\n.header-content p {\n  font-size: 12px;\n  color: #e4e4e4;\n  font-weight: 100;\n  letter-spacing: 0.4px;\n}\n\n.menu-items {\n  margin: 0px;\n}\n\n.menu-items ion-icon {\n  margin-right: 20px;\n}\n\n.menu-items ion-item {\n  padding-left: 20px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsNERBQUE7RUFDQSxnREFBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFDSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBQ1I7O0FBRUk7RUFDSSxnQkFBQTtFQUNBLFdBQUE7QUFBUjs7QUFHSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQURSOztBQUtBO0VBQ0ksV0FBQTtBQUZKOztBQUlJO0VBQ0ksa0JBQUE7QUFGUjs7QUFLSTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUFIUiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gICAgZm9udC1mYW1pbHk6bGF0bztcclxufVxyXG5cclxuLm1lbnUtaGVhZGVyLWJne1xyXG4gICAgaGVpZ2h0OiAxODBweDtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNlMzg2OTI7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsI2RjODQ5MCAwJSwgI2U2NjI3NCAxMDAlKTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMTBweCByZ2JhKDk4LCAxNDAsIDI1NSwgMC41KTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xNWRlZyk7XHJcbiAgICBib3JkZXItcmFkaXVzOjEwcHggMTBweCAxMHB4IDUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE4cHg7XHJcbiAgICBtYXJnaW4tdG9wOi01MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTo2MHB4O1xyXG59XHJcblxyXG4uaGVhZGVyLWNvbnRlbnR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6MzBweDtcclxuICAgIGxlZnQ6MTVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGJvcmRlcjogN3B4IHNvbGlkICNlMzg2OTI7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGgye1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjZTRlNGU0O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubWVudS1pdGVtc3tcclxuICAgIG1hcmdpbjowcHg7XHJcblxyXG4gICAgaW9uLWljb257XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pdGVte1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG59Il19 */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\r\n  <ion-menu menuId=\"main-menu\" content-id=\"main\">\r\n    <!--<ion-header>\r\n      <ion-toolbar color=\"flash-white\">\r\n        <ion-title>\r\n          Menu\r\n        </ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>-->\r\n    <ion-content>\r\n      <div class=\"menu-header-bg\"></div>\r\n      <div class=\"header-content\">\r\n        <img src=\"../assets/images/profile-picture.png\" alt=\"\">\r\n        <ion-label>\r\n          <h2>Ali Baba</h2>\r\n          <p>Free Member</p>\r\n        </ion-label>\r\n      </div>\r\n      <ion-list class=\"menu-items\" lines=\"none\">\r\n        <ion-item href=\"./home/\">\r\n          <img src=\"../assets/icon/home.png\" style=\"width: 20px; height: 20px;\" alt=\"\" slot=\"start\">\r\n          <ion-label>\r\n              Home\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item href=\"./my-account/\">\r\n          <img src=\"../assets/icon/myaccount.png\" style=\"width: 20px; height: 20px;\" alt=\"\" slot=\"start\">\r\n          <ion-label>\r\n            My Account\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item href=\"./promotions/\">\r\n          <img src=\"../assets/icon/promotions.png\" style=\"width: 20px; height: 20px;\" alt=\"\" slot=\"start\">\r\n          <ion-label>\r\n            Promotion\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item href=\"./pnv/\">\r\n          <img src=\"../assets/icon/pnv.png\" style=\"width: 20px; height: 20px;\" alt=\"\" slot=\"start\">\r\n          <ion-label>\r\n            Point and Voucher\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item href=\"./location/\">\r\n          <img src=\"../assets/icon/location.png\" style=\"width: 20px; height: 20px;\" alt=\"\" slot=\"start\">\r\n          <ion-label>\r\n            Location\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item href=\"./about-us/\">\r\n          <img src=\"../assets/icon/about-us.png\" style=\"width: 20px; height: 20px;\" alt=\"\" slot=\"start\">\r\n          <ion-label>\r\n           About Us\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item href=\"./tnc/\">\r\n          <img src=\"../assets/icon/tnc.png\" style=\"width: 20px; height: 20px;\" alt=\"\" slot=\"start\">\r\n          <ion-label>\r\n            Terms and Conditions\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n      <!--\r\n      <ion-list>\r\n        <ion-item href=\"./home/\">\r\n          <img src=\"../assets/icon/home.png\" style=\"width: 20px; height: 20px;\" alt=\"\" slot=\"start\">\r\n          <ion-label>\r\n              Home\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n      <ion-list>\r\n        <ion-item href=\"./my-account/\">\r\n          <img src=\"../assets/icon/myaccount.png\" style=\"width: 20px; height: 20px;\" alt=\"\" slot=\"start\">\r\n          <ion-label>\r\n            My Account\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n      <ion-list>\r\n        <ion-item href=\"./promotions/\">\r\n          <img src=\"../assets/icon/promotions.png\" style=\"width: 20px; height: 20px;\" alt=\"\" slot=\"start\">\r\n          <ion-label>\r\n            Promotion\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n      <ion-list>\r\n        <ion-item href=\"./pnv/\">\r\n          <img src=\"../assets/icon/pnv.png\" style=\"width: 20px; height: 20px;\" alt=\"\" slot=\"start\">\r\n          <ion-label>\r\n            Point and Vouchers\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n      <ion-list>\r\n        <ion-item href=\"./location/\">\r\n          <img src=\"../assets/icon/location.png\" style=\"width: 20px; height: 20px;\" alt=\"\" slot=\"start\">\r\n          <ion-label>\r\n            Location\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n      <ion-list>\r\n        <ion-item href=\"./about-us/\">\r\n          <img src=\"../assets/icon/about-us.png\" style=\"width: 20px; height: 20px;\" alt=\"\" slot=\"start\">\r\n          <ion-label>\r\n           About Us\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n      <ion-list>\r\n        <ion-item href=\"./tnc/\">\r\n          <img src=\"../assets/icon/tnc.png\" style=\"width: 20px; height: 20px;\" alt=\"\" slot=\"start\">\r\n          <ion-label>\r\n            Terms and Conditions\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    -->\r\n    </ion-content>\r\n  </ion-menu>\r\n\r\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\r\n</ion-app>\r\n\r\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map