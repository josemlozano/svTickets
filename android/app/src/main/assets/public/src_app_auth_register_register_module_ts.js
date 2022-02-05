"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_auth_register_register_module_ts"],{

/***/ 28662:
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/auth/register/register.page.html ***!
  \************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- Back button with a default href -->\n<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Create an account</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Create an account</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <form #registerForm=\"ngForm\" (ngSubmit)=\"createUser()\">\n    <ion-list>\n\n      <ion-item>\n        <ion-label position=\"floating\">Name</ion-label>\n        <ion-input type=\"text\" name=\"name\" [(ngModel)]=\"user.name\" pattern=\"[A-Za-z ]+\" #nameModel=\"ngModel\"\n          [ngClass]=\"validateClasses(nameModel, 'is-valid', 'is-invalid')\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Email</ion-label>\n        <ion-input type=\"email\" name=\"email\" inputmode=\"email\" [(ngModel)]=\"email1Form\" required\n          pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Repeat Email</ion-label>\n        <ion-input type=\"email\" name=\"email2\" inputmode=\"email\" [(ngModel)]=\"email2Form\" required\n          pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Password</ion-label>\n        <ion-input type=\"password\" name=\"password\" [(ngModel)]=\"user.password\" required>\n        </ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Latitude</ion-label>\n        <ion-input value=\"{{lat}}\" readonly></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Longitude</ion-label>\n        <ion-input value=\"{{lng}}\" readonly></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"fixed\">Avatar image</ion-label>\n        <ion-button (click)=\"imagePicker()\" name=\"selectImage\" required [(ngModel)]=\"avatarName\" #imageModel=\"ngModel\"\n          [ngClass]=\"validateClasses(imageModel, 'is-valid', 'is-invalid')\" ngDefaultControl>Select Image</ion-button>\n      </ion-item>\n\n      <div class=\"pick-single-image\">\n        <ion-img [src]=\"avatarName\" class=\"is-invalid\" required></ion-img>\n      </div>\n\n    </ion-list>\n    <p>\n      <!-- <ion-button ion-button color=\"light\">Light</ion-button> -->\n      <ion-button type=\"submit\" color=\"primary\" expand=\"block\" [disabled]=\"registerForm.invalid\">Create\n        account\n      </ion-button>\n    </p>\n  </form>\n\n\n</ion-content>\n");

/***/ }),

/***/ 166:
/*!**********************************************************!*\
  !*** ./src/app/auth/register/register-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 97394);




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 93648:
/*!**************************************************!*\
  !*** ./src/app/auth/register/register.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 166);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 97394);







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage],
    })
], RegisterPageModule);



/***/ }),

/***/ 97394:
/*!************************************************!*\
  !*** ./src/app/auth/register/register.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _Users_josemunoz_Documents_Desarrollo_web_entorno_cliente_Unit_3_Ionic_svTickets_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_register_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./register.page.html */ 28662);
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss */ 10054);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/camera */ 28156);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var src_app_mygeolocation_my_geolocation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/mygeolocation/my-geolocation.service */ 8820);
/* harmony import */ var _services_auth_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth-services.service */ 76723);









let RegisterPage = class RegisterPage {
    constructor(authService, router, alertController) {
        this.authService = authService;
        this.router = router;
        this.alertController = alertController;
        this.lat = 0;
        this.lng = 0;
        this.validEmail = true;
        this.email1Form = '';
        this.email2Form = '';
    }
    ngOnInit() {
        this.showImage = false;
        this.user = {
            name: '',
            email: '',
            password: '',
            avatar: '',
            lat: this.lat,
            lng: this.lng,
        };
        this.locateUser();
    }
    createUser() {
        if (this.validateEmail()) {
            this.user.avatar = this.avatarName;
            this.authService.postRegister(this.user).subscribe({
                next: (us) => {
                    this.router.navigate(['/login']);
                },
                error: (error) => {
                    const text = error.error.message;
                    this.presentAlert(text);
                    console.log(error);
                },
            });
        }
        else {
            this.presentAlert('The emails are not equal');
        }
    }
    validateClasses(ngModel, validClass, errorClass) {
        return {
            [validClass]: ngModel.touched && ngModel.valid,
            [errorClass]: ngModel.touched && ngModel.invalid,
        };
    }
    validateEmail() {
        this.user.email = '';
        if (this.email1Form === this.email2Form) {
            this.validEmail = true;
            this.user.email = this.email1Form;
            return true;
        }
        this.validEmail = false;
        return false;
    }
    presentAlert(text) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Error',
                message: text,
                buttons: ['OK'],
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    imagePicker() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const takePicture = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto({
                saveToGallery: true,
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraResultType.DataUrl,
                // resultType: CameraResultType.Base64,
            });
            console.log(takePicture);
            console.log(takePicture.webPath);
            console.log(takePicture.dataUrl);
            this.avatarName = takePicture.dataUrl;
            this.showImage = true;
            const imgRes = [];
        });
    }
    locateUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const pos = yield src_app_mygeolocation_my_geolocation_service__WEBPACK_IMPORTED_MODULE_3__.MyGeolocation.getLocation();
            this.lng = pos.longitude;
            this.lat = pos.latitude;
            this.user.lat = this.lat;
            this.user.lng = this.lng;
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _services_auth_services_service__WEBPACK_IMPORTED_MODULE_4__.AuthServicesService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController }
];
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-register',
        template: _Users_josemunoz_Documents_Desarrollo_web_entorno_cliente_Unit_3_Ionic_svTickets_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_register_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterPage);



/***/ }),

/***/ 10054:
/*!**************************************************!*\
  !*** ./src/app/auth/register/register.page.scss ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_auth_register_register_module_ts.js.map