"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_events_event-info_event-info_module_ts"],{

/***/ 31843:
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/events/event-info/event-info.page.html ***!
  \******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/events\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>event-info</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <!-- <a [routerLink]=\"['/events', event.id]\"> -->\n    <img [src]=\"event.image\" />\n    <!-- <ion-img [src]=\"event.image\"></ion-img> -->\n    <!-- </a> -->\n    <ion-card-header>\n      <!-- <ion-card-subtitle>{{event.description}}</ion-card-subtitle> -->\n      <!-- <a [routerLink]=\"['/events', event.id]\"> -->\n      <ion-card-title>{{event.title}}</ion-card-title>\n      <!-- </a> -->\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-row>{{event.description}}</ion-row>\n      <ion-row>\n        <ion-button color=\"danger\" (click)=\"presentAlert(event)\" *ngIf=\"event.mine\">Delete</ion-button>\n        <ion-col>\n          <ion-row>\n            <ion-col>\n              <div class=\"ion-text-end\">\n                <ion-icon name=\"people\"></ion-icon>{{event.numAttend}}\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <div *ngIf=\"event.attend\" class=\"ion-text-end\" (click)=\"deleteAttend(event)\">\n                <ion-icon name=\"thumbs-up\" color=\"success\"></ion-icon>\n                <ion-label color=\"success\">I'm going</ion-label>\n              </div>\n              <div *ngIf=\"!event.attend\" class=\"ion-text-end\" (click)=\"updateAttend(event)\">\n                <ion-icon name=\"thumbs-down\" color=\"danger\"></ion-icon>\n                <ion-label color=\"danger\">Not going</ion-label>\n              </div>\n            </ion-col>\n          </ion-row>\n\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-align-items-center card-footer\">\n        <!-- <ion-item>\n          <ion-avatar slot=\"start\">\n            <img [src]=\"event.creator.avatar\" />\n            <ion-label>Lorem ipsummmmmmm</ion-label>\n          </ion-avatar>\n          <ion-label>Lorem ipsum</ion-label>\n        </ion-item> -->\n        <ion-col size=\"auto\">\n          <ion-avatar>\n            <img [src]=\"event.creator.avatar\" />\n          </ion-avatar>\n        </ion-col>\n        <ion-col class=\"name\">\n\n          <a [routerLink]=\"['/profile', event.creator.id]\">\n            {{event.creator.name}}\n          </a>\n          <p>{{event.date | date: 'dd/MM/y'}}</p>\n        </ion-col>\n        <ion-col>\n          <div class=\"ion-text-end\">\n            <p>{{event.price | currency: 'EUR':'symbol'}}</p>\n            <p>{{event.distance | number}} km</p>\n          </div>\n        </ion-col>\n      </ion-row>\n\n    </ion-card-content>\n\n\n    <!-- <ion-img [src]=\"event.image\"></ion-img> -->\n  </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ 66955:
/*!****************************************************************!*\
  !*** ./src/app/events/event-info/event-info-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventInfoPageRoutingModule": () => (/* binding */ EventInfoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _event_info_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-info.page */ 110);




const routes = [
    {
        path: '',
        component: _event_info_page__WEBPACK_IMPORTED_MODULE_0__.EventInfoPage
    }
];
let EventInfoPageRoutingModule = class EventInfoPageRoutingModule {
};
EventInfoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EventInfoPageRoutingModule);



/***/ }),

/***/ 10166:
/*!********************************************************!*\
  !*** ./src/app/events/event-info/event-info.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventInfoPageModule": () => (/* binding */ EventInfoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _event_info_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-info-routing.module */ 66955);
/* harmony import */ var _event_info_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-info.page */ 110);







let EventInfoPageModule = class EventInfoPageModule {
};
EventInfoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _event_info_routing_module__WEBPACK_IMPORTED_MODULE_0__.EventInfoPageRoutingModule
        ],
        declarations: [_event_info_page__WEBPACK_IMPORTED_MODULE_1__.EventInfoPage]
    })
], EventInfoPageModule);



/***/ }),

/***/ 110:
/*!******************************************************!*\
  !*** ./src/app/events/event-info/event-info.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventInfoPage": () => (/* binding */ EventInfoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _Users_josemunoz_Documents_Desarrollo_web_entorno_cliente_Unit_3_Ionic_svTickets_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_event_info_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./event-info.page.html */ 31843);
/* harmony import */ var _event_info_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-info.page.scss */ 78737);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _event_details_event_details_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../event-details/event-details.page */ 31912);
/* harmony import */ var _services_events_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/events-services.service */ 63954);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);








let EventInfoPage = class EventInfoPage {
    constructor(parentComponent, eventsService, alertController, router) {
        this.parentComponent = parentComponent;
        this.eventsService = eventsService;
        this.alertController = alertController;
        this.router = router;
    }
    ngOnInit() {
        this.user = {
            avatar: '',
            name: '',
            email: '',
            lat: 0,
            lng: 0,
        };
        this.event = {
            title: '',
            description: '',
            image: '',
            price: 0,
            lat: 0,
            lng: 0,
            address: '',
            date: '',
            creator: this.user,
        };
        this.parentComponent.event$.subscribe((event) => (this.event = event));
    }
    delete(event) {
        this.eventsService.deleteEvent(event.id).subscribe({
            next: () => this.router.navigate(['/events']),
            error: (error) => console.error(error),
        });
    }
    updateAttend(event) {
        this.eventsService.updateAttend(event.id).subscribe({
            next: () => {
                this.ngOnInit();
            },
        });
    }
    deleteAttend(event) {
        this.eventsService.deleteAttend(event.id).subscribe({
            next: () => {
                this.ngOnInit();
            },
        });
    }
    presentAlert(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Error',
                message: 'Do you want to delete the event?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        id: 'cancel-button',
                        handler: () => {
                            console.log('');
                        },
                    },
                    {
                        text: 'Okay',
                        id: 'confirm-button',
                        handler: () => {
                            this.delete(event);
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
};
EventInfoPage.ctorParameters = () => [
    { type: _event_details_event_details_page__WEBPACK_IMPORTED_MODULE_2__.EventDetailsPage, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Inject, args: [_event_details_event_details_page__WEBPACK_IMPORTED_MODULE_2__.EventDetailsPage,] }] },
    { type: _services_events_services_service__WEBPACK_IMPORTED_MODULE_3__.EventsServicesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
EventInfoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-event-info',
        template: _Users_josemunoz_Documents_Desarrollo_web_entorno_cliente_Unit_3_Ionic_svTickets_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_event_info_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_event_info_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EventInfoPage);



/***/ }),

/***/ 78737:
/*!********************************************************!*\
  !*** ./src/app/events/event-info/event-info.page.scss ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJldmVudC1pbmZvLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_events_event-info_event-info_module_ts.js.map