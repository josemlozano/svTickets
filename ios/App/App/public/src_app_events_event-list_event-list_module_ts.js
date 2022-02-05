"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_events_event-list_event-list_module_ts"],{

/***/ 74406:
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/events/event-list/event-list.page.html ***!
  \******************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Event List</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Event List</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button [translucent]=\"true\" href=\"/events/add\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-list>\n    <ion-card *ngFor=\"let event of events\">\n      <a [routerLink]=\"['/events', event.id]\">\n        <ion-img [src]=\"event.image\"></ion-img>\n      </a>\n      <ion-card-header>\n        <!-- <ion-card-subtitle>{{event.description}}</ion-card-subtitle> -->\n        <a [routerLink]=\"['/events', event.id]\">\n          <ion-card-title>{{event.title}}</ion-card-title>\n        </a>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-row>{{event.description}}</ion-row>\n        <ion-row>\n          <ion-button color=\"danger\" (click)=\"presentAlert(event)\" *ngIf=\"event.mine\">Delete</ion-button>\n          <ion-col>\n            <ion-row>\n              <ion-col>\n                <div class=\"ion-text-end\">\n                  <ion-icon name=\"people\"></ion-icon>{{event.numAttend}}\n                </div>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <div *ngIf=\"event.attend\" class=\"ion-text-end\" (click)=\"deleteAttend(event)\">\n                  <ion-icon name=\"thumbs-up\" color=\"success\"></ion-icon>\n                  <ion-label color=\"success\">I'm going</ion-label>\n                </div>\n                <div *ngIf=\"!event.attend\" class=\"ion-text-end\" (click)=\"updateAttend(event)\">\n                  <ion-icon name=\"thumbs-down\" color=\"danger\"></ion-icon>\n                  <ion-label color=\"danger\">Not going</ion-label>\n                </div>\n              </ion-col>\n            </ion-row>\n\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"ion-align-items-center card-footer\">\n          <!-- <ion-item>\n            <ion-avatar slot=\"start\">\n              <img [src]=\"event.creator.avatar\" />\n              <ion-label>Lorem ipsummmmmmm</ion-label>\n            </ion-avatar>\n            <ion-label>Lorem ipsum</ion-label>\n          </ion-item> -->\n          <ion-col size=\"auto\">\n            <ion-avatar>\n              <img [src]=\"event.creator.avatar\" />\n            </ion-avatar>\n          </ion-col>\n          <ion-col class=\"name\">\n\n            <a [routerLink]=\"['/profile', event.creator.id]\">\n              {{event.creator.name}}\n            </a>\n            <p>{{event.date | date: 'dd/MM/y'}}</p>\n          </ion-col>\n          <ion-col>\n            <div class=\"ion-text-end\">\n              <p>{{event.price | currency: 'EUR':'symbol'}}</p>\n              <p>{{event.distance | number}} km</p>\n            </div>\n          </ion-col>\n        </ion-row>\n\n      </ion-card-content>\n\n\n      <!-- <ion-img [src]=\"event.image\"></ion-img> -->\n    </ion-card>\n  </ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ 29030:
/*!****************************************************************!*\
  !*** ./src/app/events/event-list/event-list-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventListPageRoutingModule": () => (/* binding */ EventListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _event_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-list.page */ 87564);




const routes = [
    {
        path: '',
        component: _event_list_page__WEBPACK_IMPORTED_MODULE_0__.EventListPage
    }
];
let EventListPageRoutingModule = class EventListPageRoutingModule {
};
EventListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EventListPageRoutingModule);



/***/ }),

/***/ 68283:
/*!********************************************************!*\
  !*** ./src/app/events/event-list/event-list.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventListPageModule": () => (/* binding */ EventListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _event_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-list-routing.module */ 29030);
/* harmony import */ var _event_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-list.page */ 87564);







let EventListPageModule = class EventListPageModule {
};
EventListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _event_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.EventListPageRoutingModule],
        declarations: [_event_list_page__WEBPACK_IMPORTED_MODULE_1__.EventListPage],
    })
], EventListPageModule);



/***/ }),

/***/ 87564:
/*!******************************************************!*\
  !*** ./src/app/events/event-list/event-list.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventListPage": () => (/* binding */ EventListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _Users_josemunoz_Documents_Desarrollo_web_entorno_cliente_Unit_3_Ionic_svTickets_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_event_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./event-list.page.html */ 74406);
/* harmony import */ var _event_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-list.page.scss */ 34703);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _services_events_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/events-services.service */ 63954);







let EventListPage = class EventListPage {
    constructor(eventsService, router, alertController) {
        this.eventsService = eventsService;
        this.router = router;
        this.alertController = alertController;
        this.events = [];
        this.search = '';
        this.showImage = false;
    }
    ngOnInit() {
        console.log(localStorage.getItem('token'));
        if (localStorage.getItem('token') == null) {
            this.router.navigate(['/']);
        }
        this.getEvents();
    }
    doRefresh(event) {
        console.log('Begin async operation');
        setTimeout(() => {
            this.getEvents();
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    }
    getEvents() {
        this.eventsService.getEvents().subscribe({
            next: (eventsServ) => (this.events = eventsServ),
            error: (error) => console.log(error),
            complete: () => console.log('Events loaded'),
        });
    }
    delete(event) {
        this.eventsService.deleteEvent(event.id).subscribe({
            next: () => (this.events = this.events.filter((e) => e !== event)),
            error: (error) => console.error(error),
        });
    }
    orderByDate() {
        this.search = '';
        this.events.sort((e1, e2) => e1.date.localeCompare(e2.date));
    }
    orderByPrice() {
        this.search = '';
        this.events.sort((e1, e2) => e1.price - e2.price);
    }
    updateAttend(event) {
        this.eventsService.updateAttend(event.id).subscribe({
            next: (response) => {
                this.ngOnInit();
            },
        });
    }
    deleteAttend(event) {
        this.eventsService.deleteAttend(event.id).subscribe({
            next: (response) => {
                this.ngOnInit();
            },
        });
    }
    presentAlert(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
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
                        handler: (blah) => {
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
EventListPage.ctorParameters = () => [
    { type: _services_events_services_service__WEBPACK_IMPORTED_MODULE_2__.EventsServicesService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
EventListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-event-list',
        template: _Users_josemunoz_Documents_Desarrollo_web_entorno_cliente_Unit_3_Ionic_svTickets_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_event_list_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_event_list_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EventListPage);



/***/ }),

/***/ 34703:
/*!********************************************************!*\
  !*** ./src/app/events/event-list/event-list.page.scss ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJldmVudC1saXN0LnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_events_event-list_event-list_module_ts.js.map