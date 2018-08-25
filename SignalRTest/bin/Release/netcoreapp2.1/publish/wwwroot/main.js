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

module.exports = ":host {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\ncanvas {\r\n  display: block;\r\n}\r\n.controls {\r\n  height: 25px;\r\n  background: #aaaaaa;\r\n}\r\n.controls > * {\r\n  height: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"controls\">\n  <button (click)=\"clearHistory()\">Clear</button>\n  <button (click)=\"rollback()\">Rollback</button>\n  <button (click)=\"setColor()\">Color</button>\n</div>\n<canvas class=\"board\" #board></canvas>\n<ngx-loading [show]=\"!isConnect\"></ngx-loading>\n"

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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aspnet/signalr */ "./node_modules/@aspnet/signalr/dist/esm/index.js");
/* harmony import */ var _models_PathData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/PathData */ "./src/models/PathData.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
const { remote } = window['require']('electron');
const { Menu, MenuItem } = remote;
*/
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.historyPaths = [];
        this.selfCurrentPath = new _models_PathData__WEBPACK_IMPORTED_MODULE_4__["PathData"]();
        this.currentPaths = {};
        this.isConnect = false;
    }
    AppComponent.prototype.onFocus = function () {
        /*
        console.log('focus');
        const menu = Menu.buildFromTemplate([
          {
            label: '編輯',
            submenu: [
              {
                id: 'undo',
                label: '復原',
                click: () => {
                  if (
                    this.selfCurrentPath &&
                    this.selfCurrentPath.path.length === 0
                  ) {
                    this.historyPaths.pop();
                  } else {
                    this.selfCurrentPath = new PathData();
                  }
                  this.draw();
                }
              }
            ]
          }
        ]);
    
        Menu.setApplicationMenu(menu);*/
    };
    AppComponent.prototype.setColor = function () {
        this.selfColor = prompt('請輸入色碼', '#ff0000');
        this.selfCurrentPath.color = this.selfColor;
    };
    AppComponent.prototype.rollback = function () {
        if (this.selfCurrentPath && this.selfCurrentPath.path.length) {
            this.selfCurrentPath = new _models_PathData__WEBPACK_IMPORTED_MODULE_4__["PathData"]();
            this.connection.invoke('updateCurrent', this.selfCurrentPath);
        }
        else {
            this.connection.invoke('rollback');
        }
    };
    AppComponent.prototype.clearHistory = function () {
        this.connection.invoke('clearHistory');
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mainBoardElement.nativeElement.width =
            window.document.body.offsetWidth;
        this.mainBoardElement.nativeElement.height =
            window.document.body.offsetHeight - 25;
        this.canvasContext = this.mainBoardElement.nativeElement.getContext('2d');
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.mainBoardElement.nativeElement, 'mousemove').subscribe(function (x) {
            switch (x.buttons) {
                case 0:// 提起
                    if (_this.selfCurrentPath.path.length) {
                        _this.selfCurrentPath = new _models_PathData__WEBPACK_IMPORTED_MODULE_4__["PathData"]();
                        _this.selfCurrentPath.color = _this.selfColor;
                        _this.connection.invoke('pushCurrent');
                        _this.connection.invoke('updateCurrent', _this.selfCurrentPath);
                    }
                    break;
                case 1:// 左鍵
                    _this.selfCurrentPath.path.push({
                        x: x.offsetX,
                        y: x.offsetY
                    });
                    _this.selfCurrentPath.timing.push(x.timeStamp);
                    _this.connection.invoke('updateCurrent', _this.selfCurrentPath);
                    break;
                case 2:// 右鍵
                    break;
            }
            _this.draw();
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.mainBoardElement.nativeElement, 'mousedown')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (x) { return x.buttons === 1; }))
            .subscribe(function (x) {
            if (_this.selfCurrentPath.path.length === 0) {
                _this.selfCurrentPath.path.push({ x: x.offsetX, y: x.offsetY });
                _this.selfCurrentPath.path.push({ x: x.offsetX, y: x.offsetY });
                _this.selfCurrentPath.timing.push(x.timeStamp, x.timeStamp);
                _this.draw();
                _this.connection.invoke('updateCurrent', _this.selfCurrentPath);
            }
        });
        this.connection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_3__["HubConnectionBuilder"]()
            .withUrl('sync' /*, HttpTransportType.LongPolling*/)
            .build();
        this.connection.on('allHistory', function (data) {
            _this.historyPaths = data;
            _this.draw();
        });
        this.connection.on('updateCurrent', function (id, data) {
            _this.currentPaths[id] = data;
            _this.draw();
        });
        this.connection.on('addHistory', function (data) {
            _this.historyPaths.push(data);
            console.log(_this.historyPaths);
            _this.draw(); // 重繪
        });
        this.connection.on('removeLastHistory', function (data) {
            _this.historyPaths.pop();
            _this.draw(); // 重繪
        });
        this.connection.on('clearHistory', function (data) {
            _this.historyPaths = [];
            _this.draw(); // 重繪
        });
        this.connection.start().then(function () {
            console.log('連線成功');
            _this.isConnect = true;
        });
    };
    AppComponent.prototype.draw = function () {
        this.canvasContext.clearRect(0, 0, this.mainBoardElement.nativeElement.width, this.mainBoardElement.nativeElement.height);
        for (var _i = 0, _a = this.historyPaths; _i < _a.length; _i++) {
            var path = _a[_i];
            this.canvasContext.beginPath();
            this.canvasContext.lineWidth = 3;
            this.canvasContext.lineCap = 'square';
            this.canvasContext.strokeStyle = path.color || '#ff0000';
            for (var i = 0; i < path.path.length - 1; i++) {
                this.canvasContext.moveTo(path.path[i].x, path.path[i].y);
                this.canvasContext.lineTo(path.path[i + 1].x, path.path[i + 1].y);
            }
            this.canvasContext.stroke();
        }
        // tslint:disable-next-line:forin
        for (var pathKey in this.currentPaths) {
            this.canvasContext.beginPath();
            this.canvasContext.lineWidth = 3;
            this.canvasContext.lineCap = 'square';
            this.canvasContext.strokeStyle =
                this.currentPaths[pathKey].color || '#ff0000';
            for (var i = 0; i < this.currentPaths[pathKey].path.length - 1; i++) {
                this.canvasContext.moveTo(this.currentPaths[pathKey].path[i].x, this.currentPaths[pathKey].path[i].y);
                this.canvasContext.lineTo(this.currentPaths[pathKey].path[i + 1].x, this.currentPaths[pathKey].path[i + 1].y);
            }
            this.canvasContext.stroke();
        }
        this.canvasContext.beginPath();
        this.canvasContext.lineWidth = 3;
        this.canvasContext.lineCap = 'square';
        this.canvasContext.strokeStyle = this.selfCurrentPath.color || '#ff0000';
        for (var i = 0; i < this.selfCurrentPath.path.length - 1; i++) {
            this.canvasContext.moveTo(this.selfCurrentPath.path[i].x, this.selfCurrentPath.path[i].y);
            this.canvasContext.lineTo(this.selfCurrentPath.path[i + 1].x, this.selfCurrentPath.path[i + 1].y);
        }
        this.canvasContext.stroke();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('board'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AppComponent.prototype, "mainBoardElement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:focus'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "onFocus", null);
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/ngx-loading/ngx-loading.es5.js");
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
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ngx_loading__WEBPACK_IMPORTED_MODULE_3__["LoadingModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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

/***/ "./src/models/PathData.ts":
/*!********************************!*\
  !*** ./src/models/PathData.ts ***!
  \********************************/
/*! exports provided: PathData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathData", function() { return PathData; });
var PathData = /** @class */ (function () {
    function PathData() {
        this.path = [];
        this.timing = [];
        this.color = '#ff0000';
    }
    return PathData;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\CanvasSync\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map