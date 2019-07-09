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
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/faq/faq.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");







var routes = [
    { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'faq', component: _faq_faq_component__WEBPACK_IMPORTED_MODULE_4__["FaqComponent"] },
    { path: 'edit', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_5__["EditComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule(route) {
        this.route = route;
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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

module.exports = "<app-navigation></app-navigation>\n\n<section>\n    <router-outlet\n    (activate)='onActivate($event)'\n    (deactivate)='onDeactivate($event)'></router-outlet>\n</section>\n"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */"

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
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/navigation.service */ "./src/app/services/navigation.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(navigator) {
        this.navigator = navigator;
        this.title = 'greenApp';
    }
    AppComponent.prototype.onActivate = function () {
        console.log('onActivate()()onActivate');
        this.navigator.closeNavigator();
    };
    AppComponent.prototype.onDeactivate = function () {
        console.log('onDeactivate()()onDeactivate');
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/faq/faq.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["NavigationComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
                _faq_faq_component__WEBPACK_IMPORTED_MODULE_8__["FaqComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__["EditComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  contact works!\n</p>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.less":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.less */ "./src/app/contact/contact.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard-top\">\n  <div class=\"dashboard-input-container\">\n    <p style=\"color:white;\">Welcome to the Awesome!</p>\n    <input class=\"form-control form-control-lg input-keywords\" type=\"text\" placeholder=\"Enter Keyword\" style=\"width: 70%;\"><br />\n    <button type=\"button\" class=\"btn btn-primary btn-lg\" style=\"background-color: #01897C;\n    border-color: #31EDBE;color: #31EDBE;\">SEND</button>&nbsp;\n    <button type=\"button\" class=\"btn btn-secondary btn-lg\" style=\"background-color: #01897C;\n    border-color: #31EDBE;color: #31EDBE;\">RECEIVE</button>\n  </div>\n\n    <br />\n    <!-- <div *ngFor=\"let item of getsAllKeywords()\">\n      {{item.name}}\n    </div> -->\n    <br />\n    <div style=\"margin-top:32px;text-align: -webkit-center;width: 104%;margin-left: -3px;\">\n        <div class=\"card\" style=\"width: 100%;\">\n            <div class=\"card-header\">\n              Your Keywords\n            </div>\n            <ul class=\"list-group list-group-flush\">\n              <li *ngFor=\"let item of keywords; let i = index\" style=\"text-align: -webkit-left;font-size: x-large;font-weight: 700;\" [ngClass]=\"keywordsOption[i] ? 'success' : 'danger'\" class=\"list-group-item\"><span style=\"color:#01897C;\" [hidden]=\"keywordsOption[i]\">{{item.name}}</span><span style=\"font-size: 20px;color: white;font-weight: 500;\" [hidden]=\"!keywordsOption[i]\">EDIT | SEND | RECEIVE | DELETE</span><span (click)=\"showOptions(i)\" class=\"item-options\">&#9737;&#9737;&#9737;</span></li>\n              <!-- <li style=\"text-align: -webkit-left;font-size: x-large;font-weight: 700;\" class=\"list-group-item\"><span style=\"color:forestgreen\">{{'+ Create New Keyword'}}</span></li> -->\n            </ul>\n          </div>\n          <div style=\"padding-top: 16px;\">\n            <button type=\"button\" class=\"btn btn-primary btn-md\" style=\"background-color: white;\n    border-color: #4CAF50;color: #4CAF50;\">Create New Keyword</button>\n          </div>\n    </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.less":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.less ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashboard-top {\n  background-color: #01897C;\n  margin-top: -18px;\n  margin-right: -10px;\n  margin-left: -10px;\n  height: 272px;\n  padding-left: 13px;\n  padding-top: 14px;\n  padding-right: 10px;\n  border-bottom-right-radius: 50%;\n  border-bottom-left-radius: 50%;\n  box-shadow: 1px 16px 17px 0px #ccc;\n}\n.dashboard-input-container {\n  text-align: -webkit-center;\n  padding-top: 50px;\n}\n.input-keywords {\n  text-align: center;\n  color: #01897C;\n  font-size: 21px;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.input-keywords[placeholder] {\n  text-align: center;\n  font-size: 21px;\n  font-weight: 700;\n}\n.item-options {\n  float: right;\n  padding-right: 5px;\n  font-size: 9px;\n  padding-top: 14px;\n}\n.success {\n  background: -webkit-gradient(linear, right top, left top, from(#00BAA4), color-stop(50%), color-stop(50%, white));\n  background: linear-gradient(to left, #00BAA4, 50%, white 50%);\n  background-size: 200% 100%;\n  background-position: right bottom;\n  -webkit-transition: all 300ms ease-out;\n  transition: all 300ms ease-out;\n}\n.danger {\n  background-color: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0Q6L3AvZ2FhcC9ncmVlbkFwcC9zcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBR0Esa0NBQUE7QUNDRjtBREVBO0VBQ0UsMEJBQUE7RUFDQSxpQkFBQTtBQ0FGO0FER0E7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQ0RGO0FESUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0ZGO0FES0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNIRjtBRE1BO0VBRUUsaUhBQUE7RUFBQSw2REFBQTtFQUNBLDBCQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQ0FBQTtFQUFBLDhCQUFBO0FDTEY7QURjQTtFQUNFLHNCQUFBO0FDWkYiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhc2hib2FyZC10b3B7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTg5N0M7XG4gIG1hcmdpbi10b3A6IC0xOHB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIGhlaWdodDogMjcycHg7XG4gIHBhZGRpbmctbGVmdDogMTNweDtcbiAgcGFkZGluZy10b3A6IDE0cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1MCU7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwJTtcbiAgLW1vei1ib3gtc2hhZG93OiAzcHggM3B4IDVweCA2cHggI2NjYztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAzcHggM3B4IDVweCA2cHggI2NjYztcbiAgYm94LXNoYWRvdzogMXB4IDE2cHggMTdweCAwcHggI2NjYztcbn1cblxuLmRhc2hib2FyZC1pbnB1dC1jb250YWluZXJ7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNTBweDtcbn1cblxuLmlucHV0LWtleXdvcmRze1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMDE4OTdDO1xuICBmb250LXNpemU6IDIxcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5pbnB1dC1rZXl3b3Jkc1twbGFjZWhvbGRlcl17XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uaXRlbS1vcHRpb25ze1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgZm9udC1zaXplOiA5cHg7XG4gIHBhZGRpbmctdG9wOiAxNHB4O1xufVxuXG4uc3VjY2Vzc3tcbiAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDBBQjRFLCAjMDA5Njk3KSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzAwQkFBNDsgNTAlLCB3aGl0ZSA1MCUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgYm90dG9tO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1vdXQ7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAvLyB0cmFuc2l0aW9uLXByb3BlcnR5OiBsZWZ0LCBsZWZ0O1xuICAvLyAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTAwMG1zIGVhc2Utb3V0IDBtcztcbiAgLy8gICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTAwMG1zIGVhc2Utb3V0IDBtcztcbiAgLy8gICAtby10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDEwMDBtcyBlYXNlLW91dCAwbXM7XG4gIC8vICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxMDAwbXMgZWFzZS1vdXQgMG1zO1xufVxuXG4uZGFuZ2Vye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xufVxuIiwiLmRhc2hib2FyZC10b3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE4OTdDO1xuICBtYXJnaW4tdG9wOiAtMThweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICBoZWlnaHQ6IDI3MnB4O1xuICBwYWRkaW5nLWxlZnQ6IDEzcHg7XG4gIHBhZGRpbmctdG9wOiAxNHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTAlO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MCU7XG4gIC1tb3otYm94LXNoYWRvdzogM3B4IDNweCA1cHggNnB4ICNjY2M7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogM3B4IDNweCA1cHggNnB4ICNjY2M7XG4gIGJveC1zaGFkb3c6IDFweCAxNnB4IDE3cHggMHB4ICNjY2M7XG59XG4uZGFzaGJvYXJkLWlucHV0LWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNTBweDtcbn1cbi5pbnB1dC1rZXl3b3JkcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMwMTg5N0M7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5pbnB1dC1rZXl3b3Jkc1twbGFjZWhvbGRlcl0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5pdGVtLW9wdGlvbnMge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgZm9udC1zaXplOiA5cHg7XG4gIHBhZGRpbmctdG9wOiAxNHB4O1xufVxuLnN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzAwQkFBNCwgNTAlLCB3aGl0ZSA1MCUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgYm90dG9tO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1vdXQ7XG59XG4uZGFuZ2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_keywords_keywords_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/keywords/keywords.service */ "./src/app/services/keywords/keywords.service.ts");



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(data) {
        this.data = data;
        this.keywords = [];
        this.keywordsOption = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var data = this.data.getAllKeywords();
        this.keywords = data;
        for (var _i = 0, _a = this.keywords; _i < _a.length; _i++) {
            var item = _a[_i];
            this.keywordsOption.push(false);
        }
        window.document.addEventListener('deviceready', function () {
            // alert(device.platform);
            console.log('[CORDOVA] Init*', cordova);
            cordova.getAppVersion.getVersionNumber().then(function (version) {
                console.log('[CORDOVA] App version is ', version);
            });
        }, false);
    };
    DashboardComponent.prototype.getsAllKeywords = function () {
        var data = this.data.getAllKeywords();
        this.keywords = data;
        for (var _i = 0, _a = this.keywords; _i < _a.length; _i++) {
            var item = _a[_i];
            this.keywordsOption.push(false);
        }
        return data;
    };
    DashboardComponent.prototype.showOptions = function (index) {
        for (var i = 0; i < this.keywordsOption.length; i++) {
            if (i !== index) {
                this.keywordsOption[i] = false;
            }
        }
        this.keywordsOption[index] = !this.keywordsOption[index];
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.less */ "./src/app/dashboard/dashboard.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_keywords_keywords_service__WEBPACK_IMPORTED_MODULE_2__["KeywordsService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/edit/edit.component.html":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  edit works!\n</p>\n"

/***/ }),

/***/ "./src/app/edit/edit.component.less":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvZWRpdC5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EditComponent = /** @class */ (function () {
    function EditComponent() {
    }
    EditComponent.prototype.ngOnInit = function () {
    };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.less */ "./src/app/edit/edit.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/faq/faq.component.html":
/*!****************************************!*\
  !*** ./src/app/faq/faq.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  faq works!\n</p>\n"

/***/ }),

/***/ "./src/app/faq/faq.component.less":
/*!****************************************!*\
  !*** ./src/app/faq/faq.component.less ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZhcS9mYXEuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/faq/faq.component.ts":
/*!**************************************!*\
  !*** ./src/app/faq/faq.component.ts ***!
  \**************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FaqComponent = /** @class */ (function () {
    function FaqComponent() {
    }
    FaqComponent.prototype.ngOnInit = function () {
    };
    FaqComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__(/*! ./faq.component.html */ "./src/app/faq/faq.component.html"),
            styles: [__webpack_require__(/*! ./faq.component.less */ "./src/app/faq/faq.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-bar\">\n    <table style=\"width:100%\">\n        <tr>\n          <td width=\"10%\" style=\"padding-left: 16px;padding-top: 16px;\">\n              <div (click)=\"this.navigator.toggleNavigator()\">&#9776;</div>\n          </td>\n          <td width=\"80%\" style=\"text-align: center;padding-top: 16px;\">\n            GREENPAP\n          </td>\n          <td width=\"10%\" style=\"float: right;padding-right: 36px;;padding-top: 16px;\">\n            &#x2609;\n          </td>\n        </tr>\n      </table>\n</div>\n\n<div [hidden]=\"!this.navigator.status()\">\n  <span class=\"navigator-container\">\n      <ul>\n          <li><a routerLink=\"/\">HOME</a></li>\n          <li><a routerLink=\"/faq\">FAQ</a></li>\n          <li><a routerLink=\"/edit\">EDIT</a></li>\n          <li><a routerLink=\"/contact\">Contact us</a></li>\n        </ul>\n  </span>\n  <span (click)=\"this.navigator.closeNavigator()\" class=\"navigator-empty-space\"></span>\n</div>\n<!-- <div [hidden]=\"!this.navigator.status()\" class=\"navigator-container\">\n  <ul>\n    <li><a routerLink=\"/\">HOME</a></li>\n    <li><a routerLink=\"/faq\">FAQ</a></li>\n    <li><a routerLink=\"/edit\">EDIT</a></li>\n    <li><a routerLink=\"/contact\">Contact us</a></li>\n  </ul>\n</div> -->\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.less":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.less ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navigator-container {\n  display: inline-block;\n  position: absolute;\n  height: 100%;\n  width: 70%;\n  background-color: #222222;\n  left: 0px;\n  top: 0px;\n  -webkit-animation-duration: 0.5s;\n  animation-duration: 0.5s;\n  -webkit-animation-name: slidein;\n  animation-name: slidein;\n  z-index: 9999;\n}\n.navigator-empty-space {\n  display: inline-block;\n  position: absolute;\n  height: 100%;\n  width: 30%;\n  background-color: none;\n  right: 0px;\n  top: 0px;\n}\n[hidden] {\n  display: none !important;\n}\n.header-bar {\n  margin-top: -10px;\n  margin-right: -10px;\n  margin-left: -10px;\n  padding-bottom: 10px;\n  color: white;\n  background-color: #01897C;\n}\n@-webkit-keyframes slidein {\n  from {\n    width: 0%;\n  }\n  to {\n    width: 70%;\n  }\n}\n@keyframes slidein {\n  from {\n    width: 0%;\n  }\n  to {\n    width: 70%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9EOi9wL2dhYXAvZ3JlZW5BcHAvc3JjL2FwcC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsK0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUNDSjtBREVBO0VBQ0UscUJBQUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQ0FKO0FER0E7RUFDRSx3QkFBQTtBQ0RGO0FESUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ0ZGO0FES0E7RUFDRTtJQUVFLFNBQUE7RUNKRjtFRE9BO0lBRUUsVUFBQTtFQ05GO0FBQ0Y7QURIQTtFQUNFO0lBRUUsU0FBQTtFQ0pGO0VET0E7SUFFRSxVQUFBO0VDTkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZpZ2F0b3ItY29udGFpbmVye1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogNzAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XG4gICAgbGVmdDogMHB4O1xuICAgIHRvcDogMHB4O1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBzbGlkZWluO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZWluO1xuICAgIHotaW5kZXg6IDk5OTk7XG59XG5cbi5uYXZpZ2F0b3ItZW1wdHktc3BhY2V7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAzMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcbiAgICByaWdodDogMHB4O1xuICAgIHRvcDogMHB4O1xufVxuXG5baGlkZGVuXSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmhlYWRlci1iYXJ7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIHBhZGRpbmctYm90dG9tOjEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxODk3Qztcbn1cblxuQGtleWZyYW1lcyBzbGlkZWluIHtcbiAgZnJvbSB7XG4gICAgLy8gbWFyZ2luLWxlZnQ6IDEwMCU7XG4gICAgd2lkdGg6IDAlO1xuICB9XG5cbiAgdG8ge1xuICAgIC8vIG1hcmdpbi1sZWZ0OiAwJTtcbiAgICB3aWR0aDogNzAlO1xuICB9XG59XG4iLCIubmF2aWdhdG9yLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA3MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IHNsaWRlaW47XG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZWluO1xuICB6LWluZGV4OiA5OTk5O1xufVxuLm5hdmlnYXRvci1lbXB0eS1zcGFjZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAzMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XG4gIHJpZ2h0OiAwcHg7XG4gIHRvcDogMHB4O1xufVxuW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG4uaGVhZGVyLWJhciB7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTg5N0M7XG59XG5Aa2V5ZnJhbWVzIHNsaWRlaW4ge1xuICBmcm9tIHtcbiAgICB3aWR0aDogMCU7XG4gIH1cbiAgdG8ge1xuICAgIHdpZHRoOiA3MCU7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_navigation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/navigation.service */ "./src/app/services/navigation.service.ts");



var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(navigator) {
        this.navigator = navigator;
        this.navigatorOpen = this.navigator.status();
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.togleNavigator = function () {
        this.navigator.toggleNavigator();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavigationComponent.prototype, "dataStatus", void 0);
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.less */ "./src/app/navigation/navigation.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_navigation_service__WEBPACK_IMPORTED_MODULE_2__["NavigationService"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/services/keywords/keywords.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/keywords/keywords.service.ts ***!
  \*******************************************************/
/*! exports provided: KeywordsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeywordsService", function() { return KeywordsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var KeywordsService = /** @class */ (function () {
    function KeywordsService() {
    }
    KeywordsService.prototype.getAllKeywords = function () {
        return [{
                id: '1',
                name: 'TEST1',
                privacy: 'private',
                status: 'active'
            },
            {
                id: '2',
                name: 'TEST2',
                privacy: 'private',
                status: 'active'
            },
            {
                id: '3',
                name: 'TEST3',
                privacy: 'private',
                status: 'inactive'
            },
            {
                id: '4',
                name: 'TEST4',
                privacy: 'public',
                status: 'active'
            }];
    };
    KeywordsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], KeywordsService);
    return KeywordsService;
}());



/***/ }),

/***/ "./src/app/services/navigation.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/navigation.service.ts ***!
  \************************************************/
/*! exports provided: NavigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationService", function() { return NavigationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavigationService = /** @class */ (function () {
    function NavigationService() {
        this.navigatorOpen = false;
    }
    NavigationService.prototype.closeNavigator = function () {
        this.navigatorOpen = false;
    };
    NavigationService.prototype.openNavigator = function () {
        this.navigatorOpen = true;
    };
    NavigationService.prototype.toggleNavigator = function () {
        this.navigatorOpen = !this.navigatorOpen;
    };
    NavigationService.prototype.status = function () {
        return this.navigatorOpen;
    };
    NavigationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavigationService);
    return NavigationService;
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\p\gaap\greenApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map