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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add/add.component.css":
/*!***************************************!*\
  !*** ./src/app/add/add.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add/add.component.html":
/*!****************************************!*\
  !*** ./src/app/add/add.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <a [routerLink]=\"['/']\">Home</a>  \n    <h1>Pet Shelter</h1>\n    <h4>Know of a pet needing a home?</h4>\n    <form class=\"form-horizontal\" (submit)=\"onSubmit()\" >\n      <div class=\"form-group\">\n        <label class=\"control-label col-sm-3\" for=\"email\">Pet name:</label>\n        <div class=\"col-sm-9\">\n  \n          <!-- <span [hidden]=\"name.valid\" class=\"text-danger\">*Name must be at least 3 characters in length.</span> -->\n  \n          <span [hidden]=\"!errors.name\"  class=\"text-danger\">*{{errors.name.message}}</span>\n          <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Enter name\"\n            required\n            minlength=\"3\"\n            name=\"name\"\n            [(ngModel)]=\"pet.name\"\n            #name=\"ngModel\"\n          />\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label col-sm-3\">Pet Type:</label>\n        <div class=\"col-sm-9\"> \n            <span [hidden]=\"!errors.pettype || pettype.valid\"  class=\"text-danger\">*{{errors.pettype.message}}</span>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Enter pet type\"\n            required\n            minlength=\"3\"\n            name=\"pettype\"\n            [(ngModel)]=\"pet.pettype\"\n            #pettype=\"ngModel\"\n          >\n        </div>\n      </div>\n      <div class=\"form-group\">\n          <label class=\"control-label col-sm-3\">Description:</label>\n          <div class=\"col-sm-9\"> \n            <span [hidden]=\"!errors.description || description.valid\"  class=\"text-danger\">*{{errors.description.message}}</span>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter description\"\n              required\n              minlength=\"3\"\n              name=\"description\"\n              [(ngModel)]=\"pet.description\"\n              #description=\"ngModel\"\n            >\n          </div>\n      </div>\n      <div class=\"skills\">\n          <h2>Skills: (Optional):</h2>\n            <div class=\"form-group\">\n              <label class=\"control-label col-sm-3\">Skill 1</label>\n              <div class=\"col-sm-9\"> \n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter a skill\"\n                  name=\"skill1\"\n                  [(ngModel)]=\"pet.skill1\"\n\n                >\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"control-label col-sm-3\">Skill 2</label>\n              <div class=\"col-sm-9\"> \n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter a skill\"\n                  name=\"skill2\"\n                  [(ngModel)]=\"pet.skill2\"\n\n                >\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"control-label col-sm-3\">Skill 3</label>\n              <div class=\"col-sm-9\"> \n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter a skill\"\n                  name=\"skill3\"\n                  [(ngModel)]=\"pet.skill3\"\n\n                >\n              </div>\n            </div>\n      </div>\n      \n      <div class=\"form-group\"> \n        <div class=\"col-sm-offset-2 col-sm-10\">\n          <button type=\"submit\" class=\"btn btn-primary\" \n          > Add pet </button>\n          <button [routerLink]=\"['/']\" class=\"btn btn-primary\"> Cancel </button>\n        </div>\n      </div>\n    </form>\n  </div>"

/***/ }),

/***/ "./src/app/add/add.component.ts":
/*!**************************************!*\
  !*** ./src/app/add/add.component.ts ***!
  \**************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _belt_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../belt.service */ "./src/app/belt.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddComponent = /** @class */ (function () {
    function AddComponent(_beltService, _router) {
        this._beltService = _beltService;
        this._router = _router;
        this.message = '';
        this.errors = {
            name: '',
            pettype: '',
            description: ''
        };
        this.clear();
    }
    AddComponent.prototype.ngOnInit = function () {
    };
    AddComponent.prototype.clear = function () {
        this.pet = { name: '',
            pettype: '',
            description: '',
            skill1: '',
            skill2: '',
            skill3: ''
        };
    };
    AddComponent.prototype.onSubmit = function () {
        var _this = this;
        var obsItem = this._beltService.addNew(this.pet);
        obsItem.subscribe(function (data) {
            // console.log(data);
            _this.message = data['message'];
            if (data['message'] === 'Success') {
                _this.message = ': ' + _this.pet.name + ' was added!';
                _this.clear();
                // this.errors.name = '';
                _this.goHome();
            }
            else {
                console.log(data['error'].errors);
                _this.errors = { name: '',
                    pettype: '',
                    description: '' };
                if (data['error'].errors['name']) {
                    _this.errors.name = data['error'].errors['name'];
                }
                if (data['error'].errors['pettype']) {
                    _this.errors.pettype = data['error'].errors['pettype'];
                }
                if (data['error'].errors['description']) {
                    _this.errors.description = data['error'].errors['description'];
                }
                // this.errors = data['error'].errors;
                // for (const err in data['error'].errors) {
                //   // console.log(err);
                //   if (err) {
                //     this.errors.name = data['error'].errors[err].message;
                //   }
                //   // console.log(err);
                // }
            }
        });
    };
    AddComponent.prototype.goHome = function () {
        this._router.navigate(['/']);
    };
    AddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! ./add.component.html */ "./src/app/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.css */ "./src/app/add/add.component.css")]
        }),
        __metadata("design:paramtypes", [_belt_service__WEBPACK_IMPORTED_MODULE_1__["BeltService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddComponent);
    return AddComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _listing_listing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listing/listing.component */ "./src/app/listing/listing.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add/add.component */ "./src/app/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/detail/detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'new', component: _add_add_component__WEBPACK_IMPORTED_MODULE_3__["AddComponent"] },
    { path: 'edit/:id', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__["EditComponent"] },
    { path: 'detail/:id', component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_5__["DetailComponent"] },
    { path: '', pathMatch: 'full', redirectTo: '/list' },
    { path: '**', component: _listing_listing_component__WEBPACK_IMPORTED_MODULE_2__["ListingComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h1>MEAN Belt Exam</h1> -->\n\n<router-outlet></router-outlet>\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _belt_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./belt.service */ "./src/app/belt.service.ts");
/* harmony import */ var _listing_listing_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./listing/listing.component */ "./src/app/listing/listing.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add/add.component */ "./src/app/add/add.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/detail/detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _listing_listing_component__WEBPACK_IMPORTED_MODULE_10__["ListingComponent"],
                _add_add_component__WEBPACK_IMPORTED_MODULE_11__["AddComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_12__["EditComponent"],
                _detail_detail_component__WEBPACK_IMPORTED_MODULE_13__["DetailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"]
            ],
            providers: [_belt_service__WEBPACK_IMPORTED_MODULE_9__["BeltService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/belt.service.ts":
/*!*********************************!*\
  !*** ./src/app/belt.service.ts ***!
  \*********************************/
/*! exports provided: BeltService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeltService", function() { return BeltService; });
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


var BeltService = /** @class */ (function () {
    function BeltService(_http) {
        this._http = _http;
        this.baseUrl = '/api/';
    }
    BeltService.prototype.getAll = function () {
        return this._http.get(this.baseUrl);
    };
    BeltService.prototype.getOne = function (id) {
        return this._http.get(this.baseUrl + id);
    };
    BeltService.prototype.addNew = function (newItem) {
        return this._http.post(this.baseUrl, newItem);
    };
    BeltService.prototype.update = function (id, item) {
        return this._http.put(this.baseUrl + id, item, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    };
    BeltService.prototype.delete = function (id) {
        return this._http.delete(this.baseUrl + id);
    };
    BeltService.prototype.vote = function (id) {
        console.log(id);
        return this._http.post(this.baseUrl + 'likes/' + id, {});
    };
    BeltService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BeltService);
    return BeltService;
}());



/***/ }),

/***/ "./src/app/detail/detail.component.css":
/*!*********************************************!*\
  !*** ./src/app/detail/detail.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/detail/detail.component.html":
/*!**********************************************!*\
  !*** ./src/app/detail/detail.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container\" *ngIf=\"pet\">\n  <a [routerLink]=\"['/']\">Home</a>  \n  <h1>Pet Shelter</h1>\n  <h3>Detail About {{pet.name}}</h3>\n  <h5>Pet type: {{pet.pettype}}</h5>\n  <h5>Description: {{pet.description}}</h5>\n  <h5>Skills: {{pet.skill1}} {{pet.skill2}} {{pet.skill3}} </h5>\n  <h5>Likes: {{pet.likes}}</h5>\n\n  <button (click)=\"onLikes()\" [disabled]=\"isLike\" class=\"btn btn-primary\"> Like this pet </button>\n  <span>&nbsp;</span>\n  <button (click)=\"onAdopt()\" class=\"btn btn-primary\"> Adopt this pet </button>\n\n</div>"

/***/ }),

/***/ "./src/app/detail/detail.component.ts":
/*!********************************************!*\
  !*** ./src/app/detail/detail.component.ts ***!
  \********************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _belt_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../belt.service */ "./src/app/belt.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailComponent = /** @class */ (function () {
    function DetailComponent(_beltService, _route, _router) {
        this._beltService = _beltService;
        this._route = _route;
        this._router = _router;
        this.isLike = false;
        this.clear();
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.getPet(params['id']);
        });
    };
    DetailComponent.prototype.getPet = function (id) {
        var _this = this;
        var obsItem = this._beltService.getOne(id);
        obsItem.subscribe(function (data) {
            if (data['message'] === 'Success') {
                _this.pet = data['data'][0];
            }
            else {
                console.log(data);
            }
        });
    };
    DetailComponent.prototype.onLikes = function () {
        var _this = this;
        // this.isLike = true;
        console.log('clicked');
        var obsItem = this._beltService.vote(this.pet._id);
        obsItem.subscribe(function (data) {
            if (data['message'] === 'Success') {
                _this.pet = data['data'];
                _this.isLike = true;
                console.log('reloaded');
            }
            else {
                console.log(data);
            }
        });
    };
    DetailComponent.prototype.onAdopt = function () {
        var _this = this;
        var obsItem = this._beltService.delete(this.pet._id);
        obsItem.subscribe(function (data) {
            console.log(data);
            _this.goHome();
        });
    };
    DetailComponent.prototype.clear = function () {
        this.pet = { name: '',
            pettype: '',
            description: '',
            skill1: '',
            skill2: '',
            skill3: ''
        };
    };
    DetailComponent.prototype.goHome = function () {
        this._router.navigate(['/']);
    };
    DetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! ./detail.component.html */ "./src/app/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.css */ "./src/app/detail/detail.component.css")]
        }),
        __metadata("design:paramtypes", [_belt_service__WEBPACK_IMPORTED_MODULE_1__["BeltService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <a [routerLink]=\"['/']\">Home</a>  \n    <h1>Pet Shelter</h1>\n    <h4>Editing this pet</h4>\n    <form class=\"form-horizontal\" (submit)=\"onSubmit()\" >\n      <div class=\"form-group\">\n        <label class=\"control-label col-sm-3\" for=\"email\">Pet name:</label>\n        <div class=\"col-sm-9\">\n  \n          <!-- <span [hidden]=\"name.valid\" class=\"text-danger\">*Name must be at least 3 characters in length.</span> -->\n  \n          <span [hidden]=\"!errors.name\"  class=\"text-danger\">*{{errors.name.message}}</span>\n          <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Enter name\"\n            required\n            minlength=\"3\"\n            name=\"name\"\n            [(ngModel)]=\"pet.name\"\n            #name=\"ngModel\"\n          />\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label col-sm-3\">Pet Type:</label>\n        <div class=\"col-sm-9\"> \n            <span [hidden]=\"!errors.pettype || pettype.valid\"  class=\"text-danger\">*{{errors.pettype.message}}</span>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Enter pet type\"\n            required\n            minlength=\"3\"\n            name=\"pettype\"\n            [(ngModel)]=\"pet.pettype\"\n            #pettype=\"ngModel\"\n          >\n        </div>\n      </div>\n      <div class=\"form-group\">\n          <label class=\"control-label col-sm-3\">Description:</label>\n          <div class=\"col-sm-9\"> \n            <span [hidden]=\"!errors.description || description.valid\"  class=\"text-danger\">*{{errors.description.message}}</span>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter description\"\n              required\n              minlength=\"3\"\n              name=\"description\"\n              [(ngModel)]=\"pet.description\"\n              #description=\"ngModel\"\n            >\n          </div>\n      </div>\n      <div class=\"skills\">\n          <h2>Skills (Optional):</h2>\n            <div class=\"form-group\">\n              <label class=\"control-label col-sm-3\">Skill 1</label>\n              <div class=\"col-sm-9\"> \n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter a skill\"\n                  name=\"skill1\"\n                  [(ngModel)]=\"pet.skill1\"\n\n                >\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"control-label col-sm-3\">Skill 2</label>\n              <div class=\"col-sm-9\"> \n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter a skill\"\n                  name=\"skill2\"\n                  [(ngModel)]=\"pet.skill2\"\n\n                >\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"control-label col-sm-3\">Skill 3</label>\n              <div class=\"col-sm-9\"> \n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter a skill\"\n                  name=\"skill3\"\n                  [(ngModel)]=\"pet.skill3\"\n\n                >\n              </div>\n            </div>\n      </div>\n      \n      <div class=\"form-group\"> \n        <div class=\"col-sm-offset-2 col-sm-10\">\n          <button type=\"submit\" class=\"btn btn-primary\" \n          > Update </button>\n          <button [routerLink]=\"['/detail/', pet._id]\" class=\"btn btn-primary\"> Cancel </button>\n        </div>\n      </div>\n    </form>\n  </div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _belt_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../belt.service */ "./src/app/belt.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditComponent = /** @class */ (function () {
    function EditComponent(_beltService, _route, _router) {
        this._beltService = _beltService;
        this._route = _route;
        this._router = _router;
        this.message = '';
        this.errors = {
            name: '',
            pettype: '',
            description: ''
        };
        this.clear();
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.getPet(params['id']);
        });
    };
    EditComponent.prototype.clear = function () {
        this.pet = { name: '',
            pettype: '',
            description: '',
            skill1: '',
            skill2: '',
            skill3: ''
        };
    };
    EditComponent.prototype.onSubmit = function () {
        var _this = this;
        var obsItem = this._beltService.update(this.pet._id, this.pet);
        obsItem.subscribe(function (data) {
            // console.log(data);
            _this.message = data['message'];
            if (data['message'] === 'Success') {
                _this.message = ': ' + _this.pet.name + ' was added!';
                // this.clear();
                // this.errors.name = '';
                _this.goHome();
            }
            else {
                console.log(data['error'].errors);
                _this.errors = { name: '',
                    pettype: '',
                    description: '' };
                if (data['error'].errors['name']) {
                    _this.errors.name = data['error'].errors['name'];
                }
                if (data['error'].errors['pettype']) {
                    _this.errors.pettype = data['error'].errors['pettype'];
                }
                if (data['error'].errors['description']) {
                    _this.errors.description = data['error'].errors['description'];
                }
                // this.errors = data['error'].errors;
                // for (const err in data['error'].errors) {
                //   // console.log(err);
                //   if (err) {
                //     this.errors.name = data['error'].errors[err].message;
                //   }
                //   // console.log(err);
                // }
            }
        });
    };
    EditComponent.prototype.goHome = function () {
        // this._router.navigate(['/']);
        this._router.navigate(['/detail/' + this.pet._id]);
    };
    EditComponent.prototype.getPet = function (id) {
        var _this = this;
        var obsItem = this._beltService.getOne(id);
        obsItem.subscribe(function (data) {
            if (data['message'] === 'Success') {
                _this.pet = data['data'][0];
            }
            else {
                console.log(data);
            }
        });
    };
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [_belt_service__WEBPACK_IMPORTED_MODULE_1__["BeltService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/listing/listing.component.css":
/*!***********************************************!*\
  !*** ./src/app/listing/listing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/listing/listing.component.html":
/*!************************************************!*\
  !*** ./src/app/listing/listing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <h1>Pet Shelter</h1>\n      <h4>These pets are looking for a home</h4>\n      <button [routerLink]=\"['/new']\" class=\"btn btn-link\">Add a pet to the shelter</button> \n    </div>\n  </div>\n  <table class=\"table table-hover border\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Type</th>\n        <th colspan=\"2\">Actions</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let t of pets\">\n        <ng-template #tipContent> \n          <p class=\"text-left\">\n            Skills: {{t.skill1}} {{t.skill2}} {{t.skill3}} </p>\n        </ng-template>\n        <td><span\n          placement=\"right\" [ngbTooltip]=\"tipContent\">{{t.name}}</span></td>\n          <!-- <td>{{t.name}}</td> -->\n        <td>{{t.pettype}}</td>\n        <td>\n            <button class=\"btn btn-secondary\"\n            routerLink = \"/detail/{{t._id}}\"\n            >Details</button> \n        </td>\n        <td>\n            <button class=\"btn btn-primary\"\n            routerLink = \"/edit/{{t._id}}\"\n              >Edit</button>\n        </td>\n      </tr>\n\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/listing/listing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/listing/listing.component.ts ***!
  \**********************************************/
/*! exports provided: ListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingComponent", function() { return ListingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _belt_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../belt.service */ "./src/app/belt.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListingComponent = /** @class */ (function () {
    function ListingComponent(_beltService) {
        this._beltService = _beltService;
    }
    ListingComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    ListingComponent.prototype.getAll = function () {
        var _this = this;
        var obsItem = this._beltService.getAll();
        obsItem.subscribe(function (data) {
            _this.pets = data['data'];
        });
    };
    ListingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listing',
            template: __webpack_require__(/*! ./listing.component.html */ "./src/app/listing/listing.component.html"),
            styles: [__webpack_require__(/*! ./listing.component.css */ "./src/app/listing/listing.component.css")]
        }),
        __metadata("design:paramtypes", [_belt_service__WEBPACK_IMPORTED_MODULE_1__["BeltService"]])
    ], ListingComponent);
    return ListingComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/chanthy/Desktop/dj/mean/belt/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map