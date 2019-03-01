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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.container-custom {\r\n    width: 100vw;\r\n}\r\n\r\n.toolbar-item {\r\n    padding-left: 30px;\r\n    padding-right: 30px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"container\" style=\"height: 10vh;\">\n<div class=\"custom-fonts\">\n    <nav class=\"navbar navbar-inverse navbar-nav-custom\">\n        <div >\n            <div class=\"collapse navbar-collapse\" >\n                <ul class=\"nav navbar-nav navbar-nav-custom\" style=\" color: black;\">\n                    <li><a [routerLink]=\"['/mainpage']\" routerLinkActive=\"router-link-active\" >Strona główna</a></li>\n                    <li><a>O nas</a></li>\n                    <li><a [routerLink]=\"['/search']\">Kopaj dane</a></li>\n                    <li><a [routerLink]=\"['/login']\">Logowanie do serwisu</a></li>\n                    <li *ngIf=\"showLogoutBlock()\"><a (click)=\"doLogOutProcedure()\">Wyloguj</a></li>\n                </ul>\n            </div>\n        </div>\n    </nav>\n</div>\n</div>-->\n<mat-toolbar color=\"primary\"\n    style=\"height: 10vh;\">\n    <div class=\"toolbar-item\">\n        <a style=\"color: #fafafa\"\n            [routerLink]=\"['/mainpage']\" \n            routerLinkActive=\"router-link-active\" >\n            Strona główna\n        </a>\n    </div>\n    <div class=\"toolbar-item\">\n        <a style=\"color: #fafafa\"\n            [routerLink]=\"['/search']\">\n            Kopaj dane\n        </a>\n    </div>\n    <div class=\"toolbar-item\">\n        <a style=\"color: #fafafa\"\n            [routerLink]=\"['/login']\">\n            Logowanie do serwisu\n        </a>\n    </div>\n</mat-toolbar>\n\n<router-outlet></router-outlet>\n\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mainpage_logout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainpage/logout.service */ "./src/app/mainpage/logout.service.ts");
/* harmony import */ var _session_sessionholder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./session/sessionholder */ "./src/app/session/sessionholder.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(logoutService, router) {
        this.logoutService = logoutService;
        this.router = router;
        this.title = 'datawhale';
    }
    AppComponent.prototype.doLogOutProcedure = function () {
        var _this = this;
        var sessionHolder = _session_sessionholder__WEBPACK_IMPORTED_MODULE_3__["SessionHolder"].getInstance();
        var activeLogin = sessionHolder.getActiveLogin();
        this.logoutService.sendLogoutRequest(activeLogin)
            .subscribe(function (response) {
            if (response.success === 'true') {
                _session_sessionholder__WEBPACK_IMPORTED_MODULE_3__["SessionHolder"].getInstance().removeSession(activeLogin);
                _this.router.navigate(['/login']);
            }
        });
    };
    AppComponent.prototype.showLogoutBlock = function () {
        var sessionHolder = _session_sessionholder__WEBPACK_IMPORTED_MODULE_3__["SessionHolder"].getInstance();
        return sessionHolder.checkIsAnySessionExits();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_mainpage_logout_service__WEBPACK_IMPORTED_MODULE_2__["LogoutService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _searchingpage_searchingpage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./searchingpage/searchingpage.component */ "./src/app/searchingpage/searchingpage.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mainpage/mainpage.component */ "./src/app/mainpage/mainpage.component.ts");
/* harmony import */ var _loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loginpage/loginpage.component */ "./src/app/loginpage/loginpage.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _regisration_page_regisration_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./regisration-page/regisration-page.component */ "./src/app/regisration-page/regisration-page.component.ts");
/* harmony import */ var _searchingpage_regex_pick_dialog_regex_pick_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./searchingpage/regex-pick-dialog/regex-pick-dialog.component */ "./src/app/searchingpage/regex-pick-dialog/regex-pick-dialog.component.ts");
/* harmony import */ var _searchingpage_regex_unit_regex_unit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./searchingpage/regex-unit/regex-unit.component */ "./src/app/searchingpage/regex-unit/regex-unit.component.ts");
/* harmony import */ var _searchingpage_regex_click_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./searchingpage/regex-click.directive */ "./src/app/searchingpage/regex-click.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var appRoutes = [
    { path: 'search', component: _searchingpage_searchingpage_component__WEBPACK_IMPORTED_MODULE_4__["SearchingpageComponent"] },
    { path: 'mainpage', component: _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_7__["MainpageComponent"] },
    { path: 'login', component: _loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_8__["LoginpageComponent"] },
    { path: 'register', component: _regisration_page_regisration_page_component__WEBPACK_IMPORTED_MODULE_11__["RegisrationPageComponent"] },
    { path: '', redirectTo: 'mainpage', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _searchingpage_searchingpage_component__WEBPACK_IMPORTED_MODULE_4__["SearchingpageComponent"],
                _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_7__["MainpageComponent"],
                _loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_8__["LoginpageComponent"],
                _regisration_page_regisration_page_component__WEBPACK_IMPORTED_MODULE_11__["RegisrationPageComponent"],
                _searchingpage_regex_pick_dialog_regex_pick_dialog_component__WEBPACK_IMPORTED_MODULE_12__["RegexPickDialogComponent"],
                _searchingpage_regex_unit_regex_unit_component__WEBPACK_IMPORTED_MODULE_13__["RegexUnitComponent"],
                _searchingpage_regex_click_directive__WEBPACK_IMPORTED_MODULE_14__["RegexClickDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(appRoutes)
            ],
            entryComponents: [
                _searchingpage_regex_pick_dialog_regex_pick_dialog_component__WEBPACK_IMPORTED_MODULE_12__["RegexPickDialogComponent"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dialog-helper.service.ts":
/*!******************************************!*\
  !*** ./src/app/dialog-helper.service.ts ***!
  \******************************************/
/*! exports provided: DialogHelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogHelperService", function() { return DialogHelperService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _searchingpage_regex_pick_dialog_regex_pick_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./searchingpage/regex-pick-dialog/regex-pick-dialog.component */ "./src/app/searchingpage/regex-pick-dialog/regex-pick-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DialogHelperService = /** @class */ (function () {
    function DialogHelperService(dialog) {
        this.dialog = dialog;
    }
    DialogHelperService.prototype.openRegexPickDialog = function (data, callback) {
        var dialogRef = this.getDialogRef(data);
        dialogRef.afterClosed().subscribe(function (result) {
            callback(result);
        });
    };
    DialogHelperService.prototype.getDialogRef = function (data) {
        return this.dialog.open(_searchingpage_regex_pick_dialog_regex_pick_dialog_component__WEBPACK_IMPORTED_MODULE_2__["RegexPickDialogComponent"], {
            width: '300px',
            data: data
        });
    };
    DialogHelperService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], DialogHelperService);
    return DialogHelperService;
}());



/***/ }),

/***/ "./src/app/loginpage/login-action.service.ts":
/*!***************************************************!*\
  !*** ./src/app/loginpage/login-action.service.ts ***!
  \***************************************************/
/*! exports provided: LoginActionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginActionService", function() { return LoginActionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _session_sessionholder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../session/sessionholder */ "./src/app/session/sessionholder.ts");
/* harmony import */ var _variablesholder_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variablesholder/variables */ "./src/app/variablesholder/variables.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginActionService = /** @class */ (function () {
    function LoginActionService(http) {
        this.http = http;
    }
    LoginActionService.prototype.authenticateUser = function (login, password) {
        var hostPath = _variablesholder_variables__WEBPACK_IMPORTED_MODULE_3__["EnviromentVariables"].getLocation();
        var httpParams = this.getHttpParams(login, password);
        return this.http.post(hostPath + "/singin", {}, {
            params: httpParams
        });
    };
    LoginActionService.prototype.getHttpParams = function (login, password) {
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        httpParams = httpParams.set('login', login);
        httpParams = httpParams.set('password', password);
        return httpParams;
    };
    LoginActionService.prototype.createLocalSession = function (login) {
        var sessionHolder = _session_sessionholder__WEBPACK_IMPORTED_MODULE_2__["SessionHolder"].getInstance();
        sessionHolder.addSession(login);
    };
    LoginActionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LoginActionService);
    return LoginActionService;
}());



/***/ }),

/***/ "./src/app/loginpage/loginpage.component.css":
/*!***************************************************!*\
  !*** ./src/app/loginpage/loginpage.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-container {\r\n    top: 45%;\r\n}\r\n\r\n.login-page-container {\r\n    width: 100vw; \r\n    height: 90vh; \r\n    display: flex; \r\n    align-items: center; \r\n    justify-content: center;\r\n}\r\n\r\n.form-container {\r\n    padding-left: 50px; \r\n    padding-right: 50px; \r\n    padding-top: 50px; \r\n    padding-bottom: 50px; \r\n    border: 1px groove #3f51b5 ; \r\n    border-radius: 1%;\r\n}\r\n\r\n.form-title {\r\n    width: 100%; \r\n    display: flex; \r\n    align-items: center; \r\n    justify-content: center; \r\n    padding-bottom: 10%; \r\n    font-size: 130%; \r\n    color: #3f51b5;\r\n}"

/***/ }),

/***/ "./src/app/loginpage/loginpage.component.html":
/*!****************************************************!*\
  !*** ./src/app/loginpage/loginpage.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page-container\">\n  <div class=\"form-container\">\n    <div class=\"form-title\">\n      <label>Logowanie do serwisu</label>\n    </div>\n    <div class=\"row\">\n      <mat-form-field style=\"width: 100%;\" appearance=\"outline\">\n        <mat-label>Login</mat-label>\n        <input\n          [(ngModel)]=\"login\" \n          matInput placeholder=\"Login\">\n        <mat-icon matSuffix></mat-icon>\n      </mat-form-field>\n    </div>\n    <div class=\"row\">\n      <mat-form-field style=\"width: 100%;\" appearance=\"outline\">\n        <mat-label>Hasło</mat-label>\n        <input\n          [(ngModel)]=\"password\" \n          type=\"password\"\n          matInput placeholder=\"Hasło\">\n        <mat-icon matSuffix></mat-icon>\n      </mat-form-field>\n    </div>\n    <button style=\"width: 100%;\"\n      (click)=\"onLoginButtonClick(login, password)\" \n      mat-button \n      color=\"primary\">\n        Zaloguj do serwisu\n    </button>\n    <button mat-button\n      color=\"primary\"\n      style=\"width: 100%;\"\n      (click)=\"onRegisterButtonClick()\">\n      Zarejestruj się\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/loginpage/loginpage.component.ts":
/*!**************************************************!*\
  !*** ./src/app/loginpage/loginpage.component.ts ***!
  \**************************************************/
/*! exports provided: LoginpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginpageComponent", function() { return LoginpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_action_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-action.service */ "./src/app/loginpage/login-action.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginpageComponent = /** @class */ (function () {
    function LoginpageComponent(loginService, router, sanckBar) {
        this.loginService = loginService;
        this.router = router;
        this.sanckBar = sanckBar;
        this.login = '';
        this.password = '';
    }
    LoginpageComponent.prototype.ngOnInit = function () {
    };
    LoginpageComponent.prototype.onLoginButtonClick = function (login, password) {
        var _this = this;
        return this.loginService.authenticateUser(login, password)
            .subscribe(function (response) {
            if (response.success === 'true') {
                _this.loginService.createLocalSession(login);
                _this.router.navigate(['/search']);
            }
            else if (response.success === 'false') {
                _this.openLoginFailureSnackBar();
            }
        }, function (error) {
            _this.openFailureSnackBar();
        });
    };
    LoginpageComponent.prototype.openLoginFailureSnackBar = function () {
        this.openSnackBar('Nieprawidłowy login lub hasło', 'Spróbuj ponownie');
    };
    LoginpageComponent.prototype.openFailureSnackBar = function () {
        this.openSnackBar('Błąd komunikacji z serwerem', 'Spróbuj ponownie');
    };
    LoginpageComponent.prototype.openSnackBar = function (message, action) {
        this.sanckBar.open(message, action, {
            duration: 2000
        });
    };
    LoginpageComponent.prototype.onRegisterButtonClick = function () {
        this.router.navigate(['/register']);
    };
    LoginpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loginpage',
            template: __webpack_require__(/*! ./loginpage.component.html */ "./src/app/loginpage/loginpage.component.html"),
            styles: [__webpack_require__(/*! ./loginpage.component.css */ "./src/app/loginpage/loginpage.component.css")],
            providers: [_login_action_service__WEBPACK_IMPORTED_MODULE_1__["LoginActionService"]]
        }),
        __metadata("design:paramtypes", [_login_action_service__WEBPACK_IMPORTED_MODULE_1__["LoginActionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], LoginpageComponent);
    return LoginpageComponent;
}());



/***/ }),

/***/ "./src/app/mainpage/logout.service.ts":
/*!********************************************!*\
  !*** ./src/app/mainpage/logout.service.ts ***!
  \********************************************/
/*! exports provided: LogoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutService", function() { return LogoutService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogoutService = /** @class */ (function () {
    function LogoutService(http) {
        this.http = http;
    }
    LogoutService.prototype.sendLogoutRequest = function (login) {
        var params = {
            params: {
                login: login
            }
        };
        return this.http.post('http://localhost:8080/logout', params);
    };
    LogoutService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LogoutService);
    return LogoutService;
}());



/***/ }),

/***/ "./src/app/mainpage/mainpage.component.css":
/*!*************************************************!*\
  !*** ./src/app/mainpage/mainpage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scroll-container {\r\n    /*scroll-snap-type: y mandatory;*/\r\n    scroll-behavior: smooth;\r\n}\r\n\r\n.scroll-item {\r\n    /*scroll-snap-align: start;*/\r\n}\r\n\r\n.navigation-container {\r\n    position: fixed;\r\n    left: 0%;\r\n    bottom: 0%;\r\n    width: 100vw;\r\n    display: flex;\r\n    align-content: center;\r\n    justify-content: center;\r\n}\r\n\r\n.navigation {\r\n    display: flex;\r\n    align-content: center;\r\n    justify-content: center;\r\n    width: 20vw;\r\n}\r\n\r\n.navigation-item {\r\n    height: 30px;\r\n    width: 30px;\r\n    margin: 30px;\r\n    border-radius: 50%;\r\n    background-color: #3f51b5;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/mainpage/mainpage.component.html":
/*!**************************************************!*\
  !*** ./src/app/mainpage/mainpage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 90vh; width: 100vw; overflow-y: scroll; overflow-x: hidden;\"\n  class=\"scroll-container\">\n    <div style=\"height: 90vh; width: 100vw;\"\n    class=\"scroll-item\">\n    \n    </div>\n    <div style=\"height: 90vh; width: 100vw;\"\n      class=\"scroll-item\">\n\n    </div>\n    <div style=\"height: 90vh; width: 100vw;\"\n      class=\"scroll-item\">\n  \n    </div>\n</div>\n\n<!--<div class=\"navigation-container\">\n  <div class=\"navigation\">\n    <div class=\"navigation-item\">\n      <a href=\"#s1\"></a>\n    </div>\n    <div class=\"navigation-item\">\n      <a href=\"#s2\"></a>\n    </div>\n    <div class=\"navigation-item\">\n      <a href=\"#s3\"></a>\n    </div>\n  </div>\n</div>-->\n\n\n"

/***/ }),

/***/ "./src/app/mainpage/mainpage.component.ts":
/*!************************************************!*\
  !*** ./src/app/mainpage/mainpage.component.ts ***!
  \************************************************/
/*! exports provided: MainpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainpageComponent", function() { return MainpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _logout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logout.service */ "./src/app/mainpage/logout.service.ts");
/* harmony import */ var _session_sessionholder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../session/sessionholder */ "./src/app/session/sessionholder.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainpageComponent = /** @class */ (function () {
    function MainpageComponent(logoutService) {
        this.logoutService = logoutService;
    }
    MainpageComponent.prototype.ngOnInit = function () {
    };
    MainpageComponent.prototype.doLogOutProcedure = function () {
        var activeLogin = _session_sessionholder__WEBPACK_IMPORTED_MODULE_2__["SessionHolder"].getInstance().getActiveLogin();
        this.logoutService.sendLogoutRequest(activeLogin)
            .subscribe(function (response) {
            if (response.success === 'true') {
                _session_sessionholder__WEBPACK_IMPORTED_MODULE_2__["SessionHolder"].getInstance().removeSession(activeLogin);
            }
        });
    };
    MainpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mainpage',
            template: __webpack_require__(/*! ./mainpage.component.html */ "./src/app/mainpage/mainpage.component.html"),
            styles: [__webpack_require__(/*! ./mainpage.component.css */ "./src/app/mainpage/mainpage.component.css")]
        }),
        __metadata("design:paramtypes", [_logout_service__WEBPACK_IMPORTED_MODULE_1__["LogoutService"]])
    ], MainpageComponent);
    return MainpageComponent;
}());



/***/ }),

/***/ "./src/app/regisration-page/regisration-page.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/regisration-page/regisration-page.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container {\r\n    width: 100vw;\r\n    height: 90vh;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.form-field {\r\n    width: 100%;\r\n}\r\n\r\n.flex-row {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-content: flex-end;\r\n}"

/***/ }),

/***/ "./src/app/regisration-page/regisration-page.component.html":
/*!******************************************************************!*\
  !*** ./src/app/regisration-page/regisration-page.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"registration\">\n<div class=\"main-container\">\n  <div style=\"height: 40vh; width: 35vw;\">\n    <div class=\"row\">\n      <mat-form-field class=\"form-field\" appearance=\"outline\">\n        <mat-label>Imię</mat-label>\n        <input formControlName=\"name\" \n          matInput\n          [(ngModel)]=\"data.name\" \n          placeholder=\"Imię\">\n      </mat-form-field>\n    </div>\n\n    <div class=\"row\">\n      <mat-form-field class=\"form-field\" appearance=\"outline\">\n        <mat-label>Nazwisko</mat-label>\n        <input formControlName=\"lastName\" \n          matInput\n          [(ngModel)]=\"data.lastName\" \n          placeholder=\"Nazwisko\">\n      </mat-form-field>\n    </div>\n\n    <div class=\"row\">\n      <mat-form-field class=\"form-field\" appearance=\"outline\">\n        <mat-label>NIP</mat-label>\n        <input formControlName=\"nip\" \n          matInput\n          [(ngModel)]=\"data.nip\" \n          placeholder=\"NIP\">\n        <mat-error>Pole NIP jest wymagane!</mat-error>\n      </mat-form-field>\n    </div>\n\n    <div class=\"row\">\n      <mat-form-field class=\"form-field\" appearance=\"outline\">\n        <mat-label>Login</mat-label>\n        <input formControlName=\"login\" \n          matInput\n          [(ngModel)]=\"data.login\" \n          placeholder=\"Login\">\n        <mat-error>Pole Login jest wymagane!</mat-error>\n      </mat-form-field>\n    </div>\n\n    <div class=\"row\">\n      <mat-form-field class=\"form-field\" appearance=\"outline\">\n        <mat-label>Hasło</mat-label>\n        <input formControlName=\"password\" \n          matInput \n          type=\"password\"\n          [(ngModel)]=\"data.password\" \n          placeholder=\"Hasło\">\n        <mat-error>Pole hasło jest wymagane!</mat-error>\n      </mat-form-field>\n    </div>\n\n    <div class=\"row\">\n      <mat-form-field class=\"form-field\" appearance=\"outline\">\n        <mat-label>Powtórz hasło</mat-label>\n        <input formControlName=\"passworddup\" \n          matInput \n          type=\"password\"\n          [(ngModel)]=\"passwordDup\" \n          placeholder=\"Powtórz hasło\">\n        <mat-error *ngIf=\"!checkPasswordIdentity()\">Wprowadzone hasła nie są identyczne!</mat-error>\n      </mat-form-field>\n    </div>\n\n    <div class=\"row flex-row\">\n      <button mat-raised-button \n          color=\"primary\"\n          type=\"submit\"\n          [disabled]=\"!checkIsSubmitAvalable()\"\n          (click)=\"onSubmit()\">\n          Dalej\n    </button>\n    </div>\n  </div>\n</div>\n</form>"

/***/ }),

/***/ "./src/app/regisration-page/regisration-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/regisration-page/regisration-page.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisrationPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisrationPageComponent", function() { return RegisrationPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _registration_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registration-data */ "./src/app/regisration-page/registration-data.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _registration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registration.service */ "./src/app/regisration-page/registration.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisrationPageComponent = /** @class */ (function () {
    function RegisrationPageComponent(service) {
        this.service = service;
        this.data = new _registration_data__WEBPACK_IMPORTED_MODULE_1__["RegistrationData"]();
        this.registration = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            nip: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            login: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            passworddup: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    RegisrationPageComponent.prototype.ngOnInit = function () {
    };
    RegisrationPageComponent.prototype.checkPasswordIdentity = function () {
        return (this.data.password === this.passwordDup) && this.data.password !== undefined && this.passwordDup !== undefined;
    };
    RegisrationPageComponent.prototype.checkIsSubmitAvalable = function () {
        return this.registration.valid && this.checkPasswordIdentity();
    };
    RegisrationPageComponent.prototype.onSubmit = function () {
        this.service.sendRegistrationRequest(this.data).subscribe(function (response) {
            if (response.success) {
            }
        });
    };
    RegisrationPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-regisration-page',
            template: __webpack_require__(/*! ./regisration-page.component.html */ "./src/app/regisration-page/regisration-page.component.html"),
            styles: [__webpack_require__(/*! ./regisration-page.component.css */ "./src/app/regisration-page/regisration-page.component.css")]
        }),
        __metadata("design:paramtypes", [_registration_service__WEBPACK_IMPORTED_MODULE_3__["RegistrationService"]])
    ], RegisrationPageComponent);
    return RegisrationPageComponent;
}());



/***/ }),

/***/ "./src/app/regisration-page/registration-data.ts":
/*!*******************************************************!*\
  !*** ./src/app/regisration-page/registration-data.ts ***!
  \*******************************************************/
/*! exports provided: RegistrationData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationData", function() { return RegistrationData; });
var RegistrationData = /** @class */ (function () {
    function RegistrationData() {
    }
    return RegistrationData;
}());



/***/ }),

/***/ "./src/app/regisration-page/registration.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/regisration-page/registration.service.ts ***!
  \**********************************************************/
/*! exports provided: RegistrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationService", function() { return RegistrationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _variablesholder_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../variablesholder/variables */ "./src/app/variablesholder/variables.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegistrationService = /** @class */ (function () {
    function RegistrationService(http) {
        this.http = http;
    }
    RegistrationService.prototype.sendRegistrationRequest = function (data) {
        var httpParams = this.prepareHttpParams(data);
        return this.http.post(_variablesholder_variables__WEBPACK_IMPORTED_MODULE_2__["EnviromentVariables"].getLocation() + "/singup", {}, {
            params: httpParams
        });
    };
    RegistrationService.prototype.prepareHttpParams = function (data) {
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        httpParams = httpParams.set('login', data.login);
        httpParams = httpParams.set('password', data.password);
        httpParams = httpParams.set('nip', data.nip);
        return httpParams;
    };
    RegistrationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RegistrationService);
    return RegistrationService;
}());



/***/ }),

/***/ "./src/app/searchingpage/regex-click.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/searchingpage/regex-click.directive.ts ***!
  \********************************************************/
/*! exports provided: RegexClickDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegexClickDirective", function() { return RegexClickDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dialog_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../dialog-helper.service */ "./src/app/dialog-helper.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegexClickDirective = /** @class */ (function () {
    function RegexClickDirective(dialogHelper) {
        this.dialogHelper = dialogHelper;
    }
    RegexClickDirective.prototype.onRegexItemClick = function () {
        this.dialogHelper.openRegexPickDialog(this.data, this.getDialogFunction());
    };
    RegexClickDirective.prototype.getDialogFunction = function () {
        return function (result) { };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('appRegexClick'),
        __metadata("design:type", Object)
    ], RegexClickDirective.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], RegexClickDirective.prototype, "onRegexItemClick", null);
    RegexClickDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appRegexClick]'
        }),
        __metadata("design:paramtypes", [_dialog_helper_service__WEBPACK_IMPORTED_MODULE_1__["DialogHelperService"]])
    ], RegexClickDirective);
    return RegexClickDirective;
}());



/***/ }),

/***/ "./src/app/searchingpage/regex-pick-dialog/regex-pick-dialog.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/searchingpage/regex-pick-dialog/regex-pick-dialog.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-form-field {\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/searchingpage/regex-pick-dialog/regex-pick-dialog.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/searchingpage/regex-pick-dialog/regex-pick-dialog.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Dodaj wyrażenie REGEX</h1>\n<form [formGroup]=\"regexForm\">\n  <div mat-dialog-content>\n\n    <mat-form-field class=\"custom-form-field\">\n      <input matInput \n            placeholder=\"Nazwa\" \n            required\n            formControlName=\"name\"\n            [(ngModel)]=\"data.name\">\n      <mat-error>Pole nazwa jest wymagane!</mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"custom-form-field\">\n      <input matInput \n            placeholder=\"Wyrażenie\"\n            required\n            formControlName=\"query\" \n            [(ngModel)]=\"data.query\">\n            <mat-error>Pole wyrażenie jest wymagane!</mat-error>\n    </mat-form-field>\n\n  </div>\n\n  <div mat-dialog-actions>\n    <button mat-button\n          (click)=\"cancelClick()\">\n          Anuluj\n    </button>\n\n    <button *ngIf=\"acceptMode\"\n          mat-button \n          cdkFocusInitial\n          type=\"submit\"\n          [disabled]=\"checkIsFormValid()\"\n          [mat-dialog-close]=\"data\">\n          Dodaj\n    </button>\n\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/searchingpage/regex-pick-dialog/regex-pick-dialog.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/searchingpage/regex-pick-dialog/regex-pick-dialog.component.ts ***!
  \********************************************************************************/
/*! exports provided: RegexPickDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegexPickDialogComponent", function() { return RegexPickDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var RegexPickDialogComponent = /** @class */ (function () {
    function RegexPickDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.regexForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            query: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    }
    RegexPickDialogComponent.prototype.ngOnInit = function () {
        this.checkIsAcceptMode();
    };
    RegexPickDialogComponent.prototype.checkIsAcceptMode = function () {
        this.acceptMode = this.data.name === '';
    };
    RegexPickDialogComponent.prototype.cancelClick = function () {
        this.dialogRef.close();
    };
    RegexPickDialogComponent.prototype.checkIsFormValid = function () {
        return !this.regexForm.valid;
    };
    RegexPickDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-regex-pick-dialog',
            template: __webpack_require__(/*! ./regex-pick-dialog.component.html */ "./src/app/searchingpage/regex-pick-dialog/regex-pick-dialog.component.html"),
            styles: [__webpack_require__(/*! ./regex-pick-dialog.component.css */ "./src/app/searchingpage/regex-pick-dialog/regex-pick-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], RegexPickDialogComponent);
    return RegexPickDialogComponent;
}());



/***/ }),

/***/ "./src/app/searchingpage/regex-unit/regex-unit.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/searchingpage/regex-unit/regex-unit.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.ico:hover {\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/searchingpage/regex-unit/regex-unit.component.html":
/*!********************************************************************!*\
  !*** ./src/app/searchingpage/regex-unit/regex-unit.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\n  <mat-icon class=\"ico\"\n    (click)=\"delete()\">\n    close\n  </mat-icon>\n\n  <div [appRegexClick]=\"data\">\n    {{data.name}}\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/searchingpage/regex-unit/regex-unit.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/searchingpage/regex-unit/regex-unit.component.ts ***!
  \******************************************************************/
/*! exports provided: RegexUnitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegexUnitComponent", function() { return RegexUnitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _searchingpage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../searchingpage.service */ "./src/app/searchingpage/searchingpage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegexUnitComponent = /** @class */ (function () {
    function RegexUnitComponent(searchingPageService) {
        this.searchingPageService = searchingPageService;
    }
    RegexUnitComponent.prototype.ngOnInit = function () {
    };
    RegexUnitComponent.prototype.delete = function () {
        this.searchingPageService.removeFromRegexList(this.data);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('data'),
        __metadata("design:type", Object)
    ], RegexUnitComponent.prototype, "data", void 0);
    RegexUnitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-regex-unit',
            template: __webpack_require__(/*! ./regex-unit.component.html */ "./src/app/searchingpage/regex-unit/regex-unit.component.html"),
            styles: [__webpack_require__(/*! ./regex-unit.component.css */ "./src/app/searchingpage/regex-unit/regex-unit.component.css")]
        }),
        __metadata("design:paramtypes", [_searchingpage_service__WEBPACK_IMPORTED_MODULE_1__["SearchingpageService"]])
    ], RegexUnitComponent);
    return RegexUnitComponent;
}());



/***/ }),

/***/ "./src/app/searchingpage/searchingpage.component.css":
/*!***********************************************************!*\
  !*** ./src/app/searchingpage/searchingpage.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-panel {\r\n    height: 90vh; \r\n    width: 100vw; \r\n    overflow-x: hidden; \r\n    display: flex; \r\n    align-items: center; \r\n    justify-content: center;\r\n}\r\n\r\n.sub-container {\r\n    width: 50vw; \r\n    height: 90vh;\r\n}\r\n\r\n.controls-container {\r\n    width: 100%; \r\n    height: 50%;\r\n}\r\n\r\n.main-input-container {\r\n    width: 100%; \r\n    height: 20%; \r\n    padding-top: 10%;\r\n    padding-bottom: 10%;\r\n    display: flex; \r\n    align-items: center; \r\n    justify-content: center;\r\n}\r\n\r\n.custom-form-field {\r\n    width: 100%;\r\n}\r\n\r\n.buttons-contaner {\r\n    width: 100%; \r\n    height: 10%; \r\n    display: flex; \r\n    align-items: flex-end; \r\n    justify-content: flex-end;\r\n}\r\n\r\n.regex-container {\r\n    width: 100%;\r\n    height: 10%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n}\r\n\r\n.tools-panel {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    margin-top: 5%;\r\n    padding: 1.5%;\r\n    justify-content: flex-start;\r\n    border: 1px solid #D3D3D3;\r\n    border-radius: 4px;\r\n}"

/***/ }),

/***/ "./src/app/searchingpage/searchingpage.component.html":
/*!************************************************************!*\
  !*** ./src/app/searchingpage/searchingpage.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-panel\">\n  <div class=\"sub-container\">\n    <div class=\"controls-container\">\n\n      <div class=\"tools-panel\">\n          <button (click)=\"openRegexPickDialog()\"\n            mat-button>\n            Dodaj własny REGEX\n          </button>\n      </div>\n\n      <div class=\"main-input-container\">\n        <mat-form-field class=\"custom-form-field\"\n          appearance=\"outline\">\n          <input [(ngModel)]=\"query\" matInput placeholder=\"Wprowadź zapytanie...\">\n        </mat-form-field>\n      </div>\n\n      <div class=\"regex-container\"\n        [ngStyle]=\"{ 'height' : service.getRegexList().length > 0 ? '10%' : '0' }\">\n        <div *ngFor=\"let regex of service.getRegexList()\">\n          <app-regex-unit\n            [data]=\"regex\">\n          </app-regex-unit>\n        </div>\n      </div>\n\n      <div class=\"buttons-contaner\">\n\n        <button (click)=\"onSearchButtonClick(query)\"\n          color=\"primary\"\n          mat-raised-button>Wyszukaj</button>\n\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/searchingpage/searchingpage.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/searchingpage/searchingpage.component.ts ***!
  \**********************************************************/
/*! exports provided: SearchingpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchingpageComponent", function() { return SearchingpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _searchingpage_searchingpage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../searchingpage/searchingpage.service */ "./src/app/searchingpage/searchingpage.service.ts");
/* harmony import */ var _session_sessionholder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../session/sessionholder */ "./src/app/session/sessionholder.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialog_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../dialog-helper.service */ "./src/app/dialog-helper.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchingpageComponent = /** @class */ (function () {
    function SearchingpageComponent(service, router, dialog, dialogHelper) {
        this.service = service;
        this.router = router;
        this.dialog = dialog;
        this.dialogHelper = dialogHelper;
        this.query = '';
    }
    SearchingpageComponent.prototype.ngOnInit = function () {
        // this.beforeInit();
    };
    SearchingpageComponent.prototype.beforeInit = function () {
        if (!this.checkIsSessionExist()) {
            this.router.navigate(['/login']);
        }
    };
    SearchingpageComponent.prototype.checkIsSessionExist = function () {
        var sessionHolder = _session_sessionholder__WEBPACK_IMPORTED_MODULE_2__["SessionHolder"].getInstance();
        return sessionHolder.checkIsAnySessionExits();
    };
    SearchingpageComponent.prototype.onSearchButtonClick = function (query) {
        this.service.loadData(query).subscribe(function (response) {
            if (response) {
                alert(response.success);
            }
        }, function (error) {
            alert('Some error was handled');
        });
    };
    SearchingpageComponent.prototype.openRegexPickDialog = function () {
        var _this = this;
        this.dialogHelper.openRegexPickDialog(this.initNewRegexUnit(), function (result) {
            _this.service.addToRegexList(result);
        });
    };
    SearchingpageComponent.prototype.initNewRegexUnit = function () {
        var regexUnit = {
            name: '',
            query: ''
        };
        return regexUnit;
    };
    SearchingpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-searchingpage',
            template: __webpack_require__(/*! ./searchingpage.component.html */ "./src/app/searchingpage/searchingpage.component.html"),
            styles: [__webpack_require__(/*! ./searchingpage.component.css */ "./src/app/searchingpage/searchingpage.component.css")],
            providers: [_searchingpage_searchingpage_service__WEBPACK_IMPORTED_MODULE_1__["SearchingpageService"]]
        }),
        __metadata("design:paramtypes", [_searchingpage_searchingpage_service__WEBPACK_IMPORTED_MODULE_1__["SearchingpageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _dialog_helper_service__WEBPACK_IMPORTED_MODULE_5__["DialogHelperService"]])
    ], SearchingpageComponent);
    return SearchingpageComponent;
}());



/***/ }),

/***/ "./src/app/searchingpage/searchingpage.service.ts":
/*!********************************************************!*\
  !*** ./src/app/searchingpage/searchingpage.service.ts ***!
  \********************************************************/
/*! exports provided: SearchingpageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchingpageService", function() { return SearchingpageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchingpageService = /** @class */ (function () {
    function SearchingpageService(http) {
        this.http = http;
        this.regexList = new Array();
    }
    SearchingpageService.prototype.loadData = function (query) {
        query = this.prepareQuery(query);
        var params_config = {
            params: {
                command: 'prepareSearch',
                query: query
            }
        };
        return this.http.post('http://localhost:8080/redist', params_config);
    };
    SearchingpageService.prototype.prepareQuery = function (query) {
        return query.replace(' ', '+');
    };
    SearchingpageService.prototype.getRegexList = function () {
        return this.regexList;
    };
    SearchingpageService.prototype.addToRegexList = function (item) {
        this.regexList.push(item);
    };
    SearchingpageService.prototype.removeFromRegexList = function (item) {
        if (this.regexList.length === 1) {
            this.regexList = new Array();
            return;
        }
        var index = this.regexList.indexOf(item);
        this.regexList = this.regexList.splice(index, 1);
    };
    SearchingpageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SearchingpageService);
    return SearchingpageService;
}());



/***/ }),

/***/ "./src/app/session/session.ts":
/*!************************************!*\
  !*** ./src/app/session/session.ts ***!
  \************************************/
/*! exports provided: Session */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Session", function() { return Session; });
var Session = /** @class */ (function () {
    function Session(login) {
        this.login = login;
    }
    return Session;
}());



/***/ }),

/***/ "./src/app/session/sessionholder.ts":
/*!******************************************!*\
  !*** ./src/app/session/sessionholder.ts ***!
  \******************************************/
/*! exports provided: SessionHolder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionHolder", function() { return SessionHolder; });
/* harmony import */ var _session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./session */ "./src/app/session/session.ts");

var SessionHolder = /** @class */ (function () {
    function SessionHolder() {
        this.sessionMap = new Map();
    }
    SessionHolder.getInstance = function () {
        return this.sessionHolder;
    };
    SessionHolder.prototype.addSession = function (login) {
        if (this.sessionMap.size === 0) {
            this.sessionMap.set(login, new _session__WEBPACK_IMPORTED_MODULE_0__["Session"](login));
        }
    };
    SessionHolder.prototype.checkIsAnySessionExits = function () {
        return this.sessionMap.size > 0;
    };
    SessionHolder.prototype.removeSession = function (login) {
        return this.sessionMap.delete(login);
    };
    SessionHolder.prototype.getActiveLogin = function () {
        var activeLogin = '';
        this.sessionMap.forEach(function (value, key, map) {
            activeLogin = key;
            return;
        });
        return activeLogin;
    };
    SessionHolder.prototype.checkIsExistSession = function () {
        return this.sessionMap.size === 1;
    };
    SessionHolder.sessionHolder = new SessionHolder();
    return SessionHolder;
}());



/***/ }),

/***/ "./src/app/variablesholder/variables.ts":
/*!**********************************************!*\
  !*** ./src/app/variablesholder/variables.ts ***!
  \**********************************************/
/*! exports provided: EnviromentVariables */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnviromentVariables", function() { return EnviromentVariables; });
var EnviromentVariables = /** @class */ (function () {
    function EnviromentVariables() {
    }
    EnviromentVariables.getLocation = function () {
        return this.getCurrentUrl();
    };
    EnviromentVariables.getDefaultUrl = function () {
        return 'http://localhost:8080';
    };
    EnviromentVariables.getCurrentUrl = function () {
        return window.location.protocol + '//' + window.location.host;
    };
    return EnviromentVariables;
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Lenovo\Documents\angular\datawhale\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map