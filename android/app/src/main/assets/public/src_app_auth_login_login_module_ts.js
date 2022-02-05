"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_auth_login_login_module_ts"],{

/***/ 6357:
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/auth/login/login.page.html ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button [disabled]=\"!logged\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Login</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Login</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <form #loginForm=\"ngForm\" (ngSubmit)=\"loginUser()\">\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"floating\">Email</ion-label>\n        <ion-input type=\"email\" name=\"email\" inputmode=\"email\" autocomplete=\"on\" [(ngModel)]=\"user.email\" required>\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Password</ion-label>\n        <ion-input type=\"password\" name=\"password\" autocomplete=\"on\" [(ngModel)]=\"user.password\" required>\n        </ion-input>\n      </ion-item>\n    </ion-list>\n    <p>\n      <!-- <ion-button ion-button color=\"light\">Light</ion-button> -->\n      <ion-button type=\"submit\" color=\"primary\" expand=\"block\" [disabled]=\"loginForm.invalid\">Login</ion-button>\n    </p>\n  </form>\n\n  <ion-button expand=\"block\" fill=\"outline\" routerLink=\"/register\">Create account</ion-button>\n\n  <!-- <mgl-map [style]=\"'mapbox://styles/mapbox/streets-v11'\" [zoom]=\"[14]\" [center]=\"[lng, lat]\">\n    <mgl-marker #marker [lngLat]=\"[lng, lat]\"></mgl-marker>\n    <mgl-popup [marker]=\"marker\">\n      You are here\n    </mgl-popup>\n  </mgl-map> -->\n</ion-content>\n");

/***/ }),

/***/ 8460:
/*!****************************************************!*\
  !*** ./src/app/auth/login/login-routing.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 5362);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 41111:
/*!********************************************!*\
  !*** ./src/app/auth/login/login.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 8460);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 5362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 83981);








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage],
    })
], LoginPageModule);



/***/ }),

/***/ 5362:
/*!******************************************!*\
  !*** ./src/app/auth/login/login.page.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _Users_josemunoz_Documents_Desarrollo_web_entorno_cliente_Unit_3_Ionic_svTickets_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./login.page.html */ 6357);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 98030);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_mygeolocation_my_geolocation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/mygeolocation/my-geolocation.service */ 8820);
/* harmony import */ var _services_auth_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth-services.service */ 76723);







let LoginPage = class LoginPage {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.lat = 0;
        this.lng = 0;
        this.logged = false;
    }
    ngOnInit() {
        this.user = {
            email: '',
            password: '',
        };
        this.logoutUser();
        this.locateUser();
        // this.load();
    }
    // load() {
    //   this.mapComp.load.subscribe(() => {
    //     this.mapComp.mapInstance.resize(); // Necessary for full height
    //   });
    // }
    // isLogged() {
    //   this.authService.isLogged().subscribe({
    //     next: (log) => {
    //       console.log(log.valueOf());
    //       this.logged = !log.valueOf();
    //     },
    //   });
    // }
    locateUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const pos = yield src_app_mygeolocation_my_geolocation_service__WEBPACK_IMPORTED_MODULE_2__.MyGeolocation.getLocation();
            this.lng = pos.longitude;
            this.lat = pos.latitude;
        });
    }
    logoutUser() {
        this.authService.logout();
    }
    loginUser() {
        this.user.lat = this.lat;
        this.user.lng = this.lng;
        this.authService.login(this.user).subscribe({
            next: (us) => {
                let isLoged = false;
                this.authService.loginChange$.forEach((e) => {
                    isLoged = e;
                });
                if (isLoged) {
                    this.router.navigate(['/events']);
                }
            },
            error: (error) => console.log('error: ' + error),
        });
    }
    validateClasses(ngModel, validClass, errorClass) {
        return {
            [validClass]: ngModel.touched && ngModel.valid,
            [errorClass]: ngModel.touched && ngModel.invalid,
        };
    }
};
LoginPage.ctorParameters = () => [
    { type: _services_auth_services_service__WEBPACK_IMPORTED_MODULE_3__.AuthServicesService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-login',
        template: _Users_josemunoz_Documents_Desarrollo_web_entorno_cliente_Unit_3_Ionic_svTickets_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 8820:
/*!*********************************************************!*\
  !*** ./src/app/mygeolocation/my-geolocation.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyGeolocation": () => (/* binding */ MyGeolocation)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);


let MyGeolocation = class MyGeolocation {
    static getLocation() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition((pos) => {
                resolve(pos.coords);
            }, (error) => {
                switch (error.code) {
                    case error.PERMISSION_DENIED: // User didn't allow the web page to retrieve location
                        reject('User denied the request for Geolocation.');
                        break;
                    case error.POSITION_UNAVAILABLE: // Couldn't get the location
                        reject('Location information is unavailable.');
                        break;
                    case error.TIMEOUT: // The maximum amount of time to get location information has passed
                        reject('The request to get user location timed out.');
                        break;
                    default:
                        reject('An unknown error occurred.');
                        break;
                }
            });
        });
    }
};
MyGeolocation = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root',
    })
], MyGeolocation);



/***/ }),

/***/ 98030:
/*!********************************************!*\
  !*** ./src/app/auth/login/login.page.scss ***!
  \********************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_auth_login_login_module_ts.js.map