"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_events_event-location_event-location_module_ts"],{

/***/ 26125:
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/events/event-location/event-location.page.html ***!
  \**************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/events\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>event-location</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <!-- <ion-searchbar debounce=\"500\" (ionChange)=\"filterItems($event)\">\n  </ion-searchbar> -->\n  <!-- <ion-list>\n    <ion-item *ngFor=\"let item of filteredItems\">{{item}}</ion-item>\n  </ion-list> -->\n\n  <h4 class=\"card-title\">\n    {{ event.address }}\n  </h4>\n\n  <div id=\"mapa-mapbox\"></div>\n\n\n\n\n\n\n\n  <!-- <mgl-map [style]=\"'mapbox://styles/mapbox/streets-v11'\" [zoom]=\"[14]\" [center]=\"[13, 13]\">\n    <mgl-marker #marker [lngLat]=\"[13, 13]\"></mgl-marker>\n    <mgl-popup [marker]=\"marker\">\n      You are here\n    </mgl-popup>\n  </mgl-map> -->\n\n</ion-content>\n");

/***/ }),

/***/ 11858:
/*!************************************************************************!*\
  !*** ./src/app/events/event-location/event-location-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventLocationPageRoutingModule": () => (/* binding */ EventLocationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _event_location_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-location.page */ 89433);




const routes = [
    {
        path: '',
        component: _event_location_page__WEBPACK_IMPORTED_MODULE_0__.EventLocationPage
    }
];
let EventLocationPageRoutingModule = class EventLocationPageRoutingModule {
};
EventLocationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EventLocationPageRoutingModule);



/***/ }),

/***/ 73179:
/*!****************************************************************!*\
  !*** ./src/app/events/event-location/event-location.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventLocationPageModule": () => (/* binding */ EventLocationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 91346);
/* harmony import */ var _event_location_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-location-routing.module */ 11858);
/* harmony import */ var _event_location_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-location.page */ 89433);
/* harmony import */ var ngx_mapbox_gl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-mapbox-gl */ 16249);








let EventLocationPageModule = class EventLocationPageModule {
};
EventLocationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _event_location_routing_module__WEBPACK_IMPORTED_MODULE_0__.EventLocationPageRoutingModule,
            ngx_mapbox_gl__WEBPACK_IMPORTED_MODULE_7__.NgxMapboxGLModule,
        ],
        declarations: [_event_location_page__WEBPACK_IMPORTED_MODULE_1__.EventLocationPage],
    })
], EventLocationPageModule);



/***/ }),

/***/ 89433:
/*!**************************************************************!*\
  !*** ./src/app/events/event-location/event-location.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventLocationPage": () => (/* binding */ EventLocationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 48111);
/* harmony import */ var _Users_josemunoz_Documents_Desarrollo_web_entorno_cliente_Unit_3_Ionic_svTickets_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_event_location_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./event-location.page.html */ 26125);
/* harmony import */ var _event_location_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-location.page.scss */ 40296);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mapbox-gl */ 30290);
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 41251);
/* harmony import */ var _event_details_event_details_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../event-details/event-details.page */ 31912);







let EventLocationPage = class EventLocationPage {
    constructor(parentComponent) {
        this.parentComponent = parentComponent;
        this.mapMarker = new mapbox_gl__WEBPACK_IMPORTED_MODULE_2__.Marker();
    }
    ngOnInit() {
        this.event = {
            title: '',
            description: '',
            image: '',
            price: 0,
            lat: 0,
            lng: 0,
            address: '',
            date: '',
        };
        this.parentComponent.event$.subscribe((event) => (this.event = event));
        // this.filteredItems = this.items;
    }
    ionViewDidEnter() {
        this.buildMap();
    }
    buildMap() {
        mapbox_gl__WEBPACK_IMPORTED_MODULE_2__.accessToken = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.mapkey;
        this.mapa = new mapbox_gl__WEBPACK_IMPORTED_MODULE_2__.Map({
            container: 'mapa-mapbox',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.event.lng, this.event.lat],
            zoom: 14, // starting zoom
        });
        // this.mapa.addControl(new mapboxgl.NavigationControl());
        this.createMarker('red', new mapbox_gl__WEBPACK_IMPORTED_MODULE_2__.LngLat(this.event.lng, this.event.lat));
    }
    createMarker(color, lngLat) {
        console.log(this.mapa);
        const mp = new mapbox_gl__WEBPACK_IMPORTED_MODULE_2__.Marker({ color }).setLngLat(lngLat);
        mp.addTo(this.mapa);
        console.log(new mapbox_gl__WEBPACK_IMPORTED_MODULE_2__.Marker({ color }).setLngLat(lngLat));
    }
    createMarkerPosition(color, lngLat) {
        if (this.mapMarker != null) {
            this.mapMarker.remove();
        }
        this.mapMarker = new mapbox_gl__WEBPACK_IMPORTED_MODULE_2__.Marker({ color })
            .setLngLat(lngLat)
            .addTo(this.mapa);
        console.log(this.mapMarker.getLngLat());
        // latitude = mapMarker.getLngLat().lat;
        // longitude = mapMarker.getLngLat().lng;
    }
};
EventLocationPage.ctorParameters = () => [
    { type: _event_details_event_details_page__WEBPACK_IMPORTED_MODULE_4__.EventDetailsPage, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Inject, args: [_event_details_event_details_page__WEBPACK_IMPORTED_MODULE_4__.EventDetailsPage,] }] }
];
EventLocationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-event-location',
        template: _Users_josemunoz_Documents_Desarrollo_web_entorno_cliente_Unit_3_Ionic_svTickets_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_event_location_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_event_location_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], EventLocationPage);



/***/ }),

/***/ 40296:
/*!****************************************************************!*\
  !*** ./src/app/events/event-location/event-location.page.scss ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJldmVudC1sb2NhdGlvbi5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_events_event-location_event-location_module_ts.js.map