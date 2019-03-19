(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_patient_patient_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/patient/patient.component */ "./src/app/components/patient/patient.component.ts");




var routes = [
    {
        path: 'patient/:id',
        component: _components_patient_patient_component__WEBPACK_IMPORTED_MODULE_3__["PatientComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"mat-elevation-z2\">\r\n  <span>ISE</span>\r\n</mat-toolbar>\r\n<div fxLayout=\"row\">\r\n  <div class=\"patient-list\" fxLayout=\"column\" fxFlex=\"20\">\r\n    <mat-list>\r\n      <mat-list-item [routerLink]=\"['patient', pt.id]\" routerLinkActive=\"mat-elevation-z2\"\r\n        *ngFor=\"let pt of (patients | async)\">\r\n        {{pt.name[0].family}}\r\n      </mat-list-item>\r\n    </mat-list>\r\n  </div>\r\n  <div class=\"patient-card\" fxLayout=\"column\" fxFlex>\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".patient-card {\n  padding: 8px; }\n\n.patient-list {\n  min-width: 150px; }\n\n.mat-card-header-text {\n  margin: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxMTVBILUNhbVxcZGV2XFxpc2VcXGZyb250ZW5kL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxhQUFZLEVBQ2I7O0FBRUQ7RUFDRSxpQkFBZ0IsRUFDakI7O0FBRUQ7RUFDRSxVQUFTLEVBQ1YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aXZlIHtcclxufVxyXG5cclxuLnBhdGllbnQtY2FyZCB7XHJcbiAgcGFkZGluZzogOHB4O1xyXG59XHJcblxyXG4ucGF0aWVudC1saXN0IHtcclxuICBtaW4td2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG4ubWF0LWNhcmQtaGVhZGVyLXRleHQge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_fhir_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/fhir.service */ "./src/app/services/fhir.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(fhirService) {
        this.title = 'frontend';
        this.patients = fhirService.patient.resources();
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_fhir_service__WEBPACK_IMPORTED_MODULE_2__["FhirService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_code_code_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/code/code.component */ "./src/app/components/code/code.component.ts");
/* harmony import */ var _components_patient_patient_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/patient/patient.component */ "./src/app/components/patient/patient.component.ts");
/* harmony import */ var _pipes_name_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pipes/name.pipe */ "./src/app/pipes/name.pipe.ts");
/* harmony import */ var _services_error_handler__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/error.handler */ "./src/app/services/error.handler.ts");
/* harmony import */ var _services_fhir_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/fhir.service */ "./src/app/services/fhir.service.ts");
/* harmony import */ var _components_observation_observation_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/observation/observation.component */ "./src/app/components/observation/observation.component.ts");
/* harmony import */ var _components_reference_range_reference_range_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/reference-range/reference-range.component */ "./src/app/components/reference-range/reference-range.component.ts");






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
                _components_patient_patient_component__WEBPACK_IMPORTED_MODULE_16__["PatientComponent"],
                _pipes_name_pipe__WEBPACK_IMPORTED_MODULE_17__["NamePipe"],
                _components_code_code_component__WEBPACK_IMPORTED_MODULE_15__["CodeComponent"],
                _components_observation_observation_component__WEBPACK_IMPORTED_MODULE_20__["ObservationComponent"],
                _components_reference_range_reference_range_component__WEBPACK_IMPORTED_MODULE_21__["ReferenceRangeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"]
            ],
            providers: [
                _services_fhir_service__WEBPACK_IMPORTED_MODULE_19__["FhirService"],
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"],
                    useClass: _services_error_handler__WEBPACK_IMPORTED_MODULE_18__["GlobalErrorHandler"]
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/code/code.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/code/code.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span *ngFor=\"let coding of code?.coding\">{{coding.display}}</span>"

/***/ }),

/***/ "./src/app/components/code/code.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/code/code.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29kZS9jb2RlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/code/code.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/code/code.component.ts ***!
  \***************************************************/
/*! exports provided: CodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeComponent", function() { return CodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CodeComponent = /** @class */ (function () {
    function CodeComponent() {
    }
    CodeComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CodeComponent.prototype, "code", void 0);
    CodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-code',
            template: __webpack_require__(/*! ./code.component.html */ "./src/app/components/code/code.component.html"),
            styles: [__webpack_require__(/*! ./code.component.scss */ "./src/app/components/code/code.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CodeComponent);
    return CodeComponent;
}());



/***/ }),

/***/ "./src/app/components/observation/observation.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/observation/observation.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-content>\r\n    <app-code [code]=\"observation?.code\"></app-code>\r\n    <table mat-table [dataSource]=\"component\">\r\n      <ng-container matColumnDef=\"result\">\r\n        <th mat-header-cell *matHeaderCellDef> Value</th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          {{element.valueQuantity.value}}\r\n          <span class=\"unit\">{{element.valueQuantity.unit}}</span></td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"interpretation\">\r\n        <th mat-header-cell *matHeaderCellDef>\r\n          <span class=\"header\">Interpretation</span>\r\n        </th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          <app-code *ngFor=\"let inter of element.interpretation\" [code]=\"inter\"></app-code>\r\n        </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"reference\">\r\n        <th mat-header-cell *matHeaderCellDef> Reference </th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          <app-reference-range *ngFor=\"let range of element.referenceRange\" [range]=\"range\"></app-reference-range>\r\n        </td>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"['result','interpretation', 'reference']\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: ['result','interpretation', 'reference'];\"></tr>\r\n    </table>\r\n  </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/components/observation/observation.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/observation/observation.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".unit {\n  font-style: italic;\n  font-size: 80%; }\n\n.mat-table {\n  width: 100%; }\n\napp-code {\n  margin: 0 8px; }\n\n.header {\n  margin: 0 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vYnNlcnZhdGlvbi9DOlxcVXNlcnNcXExNUEgtQ2FtXFxkZXZcXGlzZVxcZnJvbnRlbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG9ic2VydmF0aW9uXFxvYnNlcnZhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFrQjtFQUNsQixlQUFjLEVBQ2Y7O0FBRUQ7RUFDRSxZQUFXLEVBQ1o7O0FBRUQ7RUFDRSxjQUFhLEVBQ2Q7O0FBRUQ7RUFDRSxjQUFhLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL29ic2VydmF0aW9uL29ic2VydmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVuaXQge1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LXNpemU6IDgwJTtcclxufVxyXG5cclxuLm1hdC10YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmFwcC1jb2RlIHtcclxuICBtYXJnaW46IDAgOHB4O1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICBtYXJnaW46IDAgOHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/observation/observation.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/observation/observation.component.ts ***!
  \*****************************************************************/
/*! exports provided: ObservationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservationComponent", function() { return ObservationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ObservationComponent = /** @class */ (function () {
    function ObservationComponent() {
    }
    Object.defineProperty(ObservationComponent.prototype, "observation", {
        get: function () {
            return this._observation;
        },
        set: function (value) {
            this._observation = value;
            this.component = value.component ? value.component : [value];
        },
        enumerable: true,
        configurable: true
    });
    ObservationComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], ObservationComponent.prototype, "observation", null);
    ObservationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-observation',
            template: __webpack_require__(/*! ./observation.component.html */ "./src/app/components/observation/observation.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./observation.component.scss */ "./src/app/components/observation/observation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ObservationComponent);
    return ObservationComponent;
}());



/***/ }),

/***/ "./src/app/components/patient/patient.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/patient/patient.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card *ngIf=\"patient$ | async as patient\">\r\n  <mat-card-header>\r\n    <mat-card-title>{{patient | name}}</mat-card-title>\r\n    <mat-card-subtitle>{{patient.birthDate | date}} {{patient.gender | uppercase}}</mat-card-subtitle>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <app-observation class=\"observation\" [observation]=\"obs\" *ngFor=\"let obs of (observations$ | async)\">\r\n    </app-observation>\r\n  </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/components/patient/patient.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/patient/patient.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".observation {\n  margin: 8px;\n  min-height: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYXRpZW50L0M6XFxVc2Vyc1xcTE1QSC1DYW1cXGRldlxcaXNlXFxmcm9udGVuZC9zcmNcXGFwcFxcY29tcG9uZW50c1xccGF0aWVudFxccGF0aWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVc7RUFDWCxpQkFBZ0IsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhdGllbnQvcGF0aWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vYnNlcnZhdGlvbiB7XHJcbiAgbWFyZ2luOiA4cHg7XHJcbiAgbWluLWhlaWdodDogNTBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/patient/patient.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/patient/patient.component.ts ***!
  \*********************************************************/
/*! exports provided: PatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientComponent", function() { return PatientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_fhir_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/fhir.service */ "./src/app/services/fhir.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_webSocket__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/webSocket */ "./node_modules/rxjs/_esm5/webSocket/index.js");








var PatientComponent = /** @class */ (function () {
    function PatientComponent(route, fhirService) {
        this.route = route;
        this.fhirService = fhirService;
        this.patient$ = route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (params) { return fhirService.patient.read(params.id); }));
        // triggered when patient id changes
        var patientIdChanged$ = route.params;
        // triggered when websocket ping is received from a subscription
        // https://www.hl7.org/fhir/subscription.html#2.46.7.2
        var webSocketPing$ = route.params.pipe(
        // find subscription for the patient
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (params) {
            return fhirService.subscription
                .search({
                criteria: 'Observation?subject=Patient/' + params.id
            }, { 'Cache-Control': 'no-cache' })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (bundle) { return [
                params.id,
                bundle.total === 0 ? null : bundle.entry[0].resource
            ]; }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (result) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["iif"])(function () { return result[1] === null; }, 
            // if none, then create one
            fhirService.subscription.create({
                criteria: 'Observation?subject=Patient/' + result[0],
                status: 'active',
                reason: 'test',
                channel: {
                    type: 'websocket',
                    payload: 'application/json'
                }
            }), Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result[1]));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (sub) {
            var websocket$ = Object(rxjs_webSocket__WEBPACK_IMPORTED_MODULE_7__["webSocket"])({
                url: src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].fhir_ws_url,
                serializer: function (value) { return value; },
                deserializer: function (e) { return e.data; }
            });
            websocket$.next('bind ' + sub.id);
            return websocket$;
        }));
        this.observations$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(patientIdChanged$, webSocketPing$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(console.log), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_) {
            return fhirService.observation.resources({
                subject: 'Patient/' + route.snapshot.params.id
            });
        }));
    }
    PatientComponent.prototype.ngOnInit = function () { };
    PatientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-patient',
            template: __webpack_require__(/*! ./patient.component.html */ "./src/app/components/patient/patient.component.html"),
            styles: [__webpack_require__(/*! ./patient.component.scss */ "./src/app/components/patient/patient.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_services_fhir_service__WEBPACK_IMPORTED_MODULE_5__["FhirService"]])
    ], PatientComponent);
    return PatientComponent;
}());



/***/ }),

/***/ "./src/app/components/reference-range/reference-range.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/reference-range/reference-range.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span>{{rangeText}}</span>\r\n<span *ngIf=\"ageText\"> / age: {{ageText}}</span>\r\n<span>{{text}}</span>"

/***/ }),

/***/ "./src/app/components/reference-range/reference-range.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/reference-range/reference-range.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span {\n  font-size: 80%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWZlcmVuY2UtcmFuZ2UvQzpcXFVzZXJzXFxMTVBILUNhbVxcZGV2XFxpc2VcXGZyb250ZW5kL3NyY1xcYXBwXFxjb21wb25lbnRzXFxyZWZlcmVuY2UtcmFuZ2VcXHJlZmVyZW5jZS1yYW5nZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWMsRUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVmZXJlbmNlLXJhbmdlL3JlZmVyZW5jZS1yYW5nZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogODAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/reference-range/reference-range.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/reference-range/reference-range.component.ts ***!
  \*************************************************************************/
/*! exports provided: ReferenceRangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferenceRangeComponent", function() { return ReferenceRangeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReferenceRangeComponent = /** @class */ (function () {
    function ReferenceRangeComponent() {
    }
    Object.defineProperty(ReferenceRangeComponent.prototype, "range", {
        get: function () {
            return this._range;
        },
        set: function (range) {
            this._range = range;
            this.text = range.text;
            this.rangeText = this.constructRangeText(range);
            if (range.age) {
                this.ageText = this.constructRangeText(range.age);
            }
        },
        enumerable: true,
        configurable: true
    });
    ReferenceRangeComponent.prototype.constructRangeText = function (range) {
        return [
            range.low ? range.low.value : null,
            range.high ? range.high.value : null
        ]
            .filter(function (val) { return val !== null; })
            .join(' - ');
    };
    ReferenceRangeComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], ReferenceRangeComponent.prototype, "range", null);
    ReferenceRangeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reference-range',
            template: __webpack_require__(/*! ./reference-range.component.html */ "./src/app/components/reference-range/reference-range.component.html"),
            styles: [__webpack_require__(/*! ./reference-range.component.scss */ "./src/app/components/reference-range/reference-range.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReferenceRangeComponent);
    return ReferenceRangeComponent;
}());



/***/ }),

/***/ "./src/app/pipes/name.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipes/name.pipe.ts ***!
  \************************************/
/*! exports provided: NamePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamePipe", function() { return NamePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NamePipe = /** @class */ (function () {
    function NamePipe() {
    }
    NamePipe.prototype.transform = function (patient, args) {
        var name = patient.name[0];
        return name.family + ', ' + name.given.join(' ');
    };
    NamePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'name'
        })
    ], NamePipe);
    return NamePipe;
}());



/***/ }),

/***/ "./src/app/services/error.handler.ts":
/*!*******************************************!*\
  !*** ./src/app/services/error.handler.ts ***!
  \*******************************************/
/*! exports provided: GlobalErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalErrorHandler", function() { return GlobalErrorHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");



var GlobalErrorHandler = /** @class */ (function () {
    function GlobalErrorHandler(snackBar) {
        this.snackBar = snackBar;
    }
    GlobalErrorHandler.prototype.handleError = function (error) {
        this.snackBar.open(error.message, 'OK', {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'top'
        });
        throw error;
    };
    GlobalErrorHandler = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], GlobalErrorHandler);
    return GlobalErrorHandler;
}());



/***/ }),

/***/ "./src/app/services/fhir.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/fhir.service.ts ***!
  \******************************************/
/*! exports provided: FhirService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FhirService", function() { return FhirService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var Resource = /** @class */ (function () {
    function Resource(type, http) {
        this.type = type;
        this.http = http;
    }
    Resource.prototype.search = function (query, headers) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].fhir_url + "/" + this.type, {
            params: query,
            headers: headers
        });
    };
    // return resources as list, without all the metadata
    Resource.prototype.resources = function (query, headers) {
        return this.http
            .get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].fhir_url + "/" + this.type, {
            params: query,
            headers: headers
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (bundle) { return bundle.total > 0; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (bundle) { return bundle.entry.map(function (entry) { return entry.resource; }); }));
    };
    Resource.prototype.read = function (id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].fhir_url + "/" + this.type + "/" + id);
    };
    Resource.prototype.create = function (resource) {
        if (!resource.resourceType) {
            resource.resourceType = this.type;
        }
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].fhir_url + "/" + this.type, resource);
    };
    return Resource;
}());
var FhirService = /** @class */ (function () {
    function FhirService(http) {
        this.http = http;
        this.patient = new Resource('Patient', this.http);
        this.subscription = new Resource('Subscription', this.http);
        this.observation = new Resource('Observation', this.http);
    }
    FhirService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], FhirService);
    return FhirService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    fhir_url: 'http://localhost:8888/fhir',
    fhir_ws_url: 'ws://localhost:8888/websocket'
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\LMPH-Cam\dev\ise\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map