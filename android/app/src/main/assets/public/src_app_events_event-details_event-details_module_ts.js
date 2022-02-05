"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_events_event-details_event-details_module_ts"],{

/***/ 11524:
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/events/event-details/event-details.page.html ***!
  \************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"info\">\n      <ion-icon name=\"information\"></ion-icon>\n      <ion-label>eventInfo</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"location\">\n      <ion-icon name=\"navigate\"></ion-icon>\n      <ion-label>eventLocation</ion-label>\n    </ion-tab-button>\n\n  </ion-tab-bar>\n\n</ion-tabs>\n");

/***/ }),

/***/ 84602:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/shareReplay.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shareReplay": () => (/* binding */ shareReplay)
/* harmony export */ });
/* harmony import */ var _ReplaySubject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ReplaySubject */ 77314);

function shareReplay(configOrBufferSize, windowTime, scheduler) {
    let config;
    if (configOrBufferSize && typeof configOrBufferSize === 'object') {
        config = configOrBufferSize;
    }
    else {
        config = {
            bufferSize: configOrBufferSize,
            windowTime,
            refCount: false,
            scheduler,
        };
    }
    return (source) => source.lift(shareReplayOperator(config));
}
function shareReplayOperator({ bufferSize = Number.POSITIVE_INFINITY, windowTime = Number.POSITIVE_INFINITY, refCount: useRefCount, scheduler, }) {
    let subject;
    let refCount = 0;
    let subscription;
    let hasError = false;
    let isComplete = false;
    return function shareReplayOperation(source) {
        refCount++;
        let innerSub;
        if (!subject || hasError) {
            hasError = false;
            subject = new _ReplaySubject__WEBPACK_IMPORTED_MODULE_0__.ReplaySubject(bufferSize, windowTime, scheduler);
            innerSub = subject.subscribe(this);
            subscription = source.subscribe({
                next(value) {
                    subject.next(value);
                },
                error(err) {
                    hasError = true;
                    subject.error(err);
                },
                complete() {
                    isComplete = true;
                    subscription = undefined;
                    subject.complete();
                },
            });
            if (isComplete) {
                subscription = undefined;
            }
        }
        else {
            innerSub = subject.subscribe(this);
        }
        this.add(() => {
            refCount--;
            innerSub.unsubscribe();
            innerSub = undefined;
            if (subscription && !isComplete && useRefCount && refCount === 0) {
                subscription.unsubscribe();
                subscription = undefined;
                subject = undefined;
            }
        });
    };
}


/***/ }),

/***/ 84915:
/*!**********************************************************************!*\
  !*** ./src/app/events/event-details/event-details-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventDetailsPageRoutingModule": () => (/* binding */ EventDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _event_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-details.page */ 31912);




const routes = [
    {
        path: '',
        component: _event_details_page__WEBPACK_IMPORTED_MODULE_0__.EventDetailsPage,
        children: [
            {
                path: 'info',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_events_event-info_event-info_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../event-info/event-info.module */ 10166)).then((m) => m.EventInfoPageModule),
            },
            {
                path: 'location',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_mapbox-gl_dist_mapbox-gl_js"), __webpack_require__.e("src_app_events_event-location_event-location_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../event-location/event-location.module */ 73179)).then((m) => m.EventLocationPageModule),
            },
            {
                path: '',
                redirectTo: 'info',
                pathMatch: 'full',
            },
        ],
    },
];
let EventDetailsPageRoutingModule = class EventDetailsPageRoutingModule {
};
EventDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EventDetailsPageRoutingModule);



/***/ }),

/***/ 65169:
/*!**************************************************************!*\
  !*** ./src/app/events/event-details/event-details.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventDetailsPageModule": () => (/* binding */ EventDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _event_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-details-routing.module */ 84915);
/* harmony import */ var _event_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-details.page */ 31912);







let EventDetailsPageModule = class EventDetailsPageModule {
};
EventDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _event_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.EventDetailsPageRoutingModule
        ],
        declarations: [_event_details_page__WEBPACK_IMPORTED_MODULE_1__.EventDetailsPage]
    })
], EventDetailsPageModule);



/***/ }),

/***/ 31912:
/*!************************************************************!*\
  !*** ./src/app/events/event-details/event-details.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventDetailsPage": () => (/* binding */ EventDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _Users_josemunoz_Documents_Desarrollo_web_entorno_cliente_Unit_3_Ionic_svTickets_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_event_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./event-details.page.html */ 11524);
/* harmony import */ var _event_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-details.page.scss */ 15241);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 38365);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 84602);
/* harmony import */ var _services_events_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/events-services.service */ 63954);








let EventDetailsPage = class EventDetailsPage {
    constructor(route, eventsService) {
        this.route = route;
        this.eventsService = eventsService;
        this.event$ = this.eventsService
            .getEvent(this.route.snapshot.params.id)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.shareReplay)(1));
    }
    ngOnInit() {
        this.event$.subscribe((event) => (this.event = event));
    }
    getEvent() {
        return this.event ? (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(this.event) : this.event$;
    }
};
EventDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _services_events_services_service__WEBPACK_IMPORTED_MODULE_2__.EventsServicesService }
];
EventDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-event-details',
        template: _Users_josemunoz_Documents_Desarrollo_web_entorno_cliente_Unit_3_Ionic_svTickets_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_event_details_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_event_details_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EventDetailsPage);



/***/ }),

/***/ 15241:
/*!**************************************************************!*\
  !*** ./src/app/events/event-details/event-details.page.scss ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJldmVudC1kZXRhaWxzLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_events_event-details_event-details_module_ts.js.map