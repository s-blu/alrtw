webpackJsonp([1],{

/***/ "../../../../../package.json":
/***/ (function(module, exports) {

module.exports = {"name":"anilist-ready-to-watch","version":"1.3.2","license":"MIT","scripts":{"ng":"ng","start":"ng serve","build":"ng build","test":"ng test","lint":"ng lint","e2e":"ng e2e"},"private":true,"dependencies":{"@angular/animations":"^4.4.6","@angular/cdk":"^2.0.0-beta.12","@angular/common":"^4.0.0","@angular/compiler":"^4.0.0","@angular/core":"^4.4.6","@angular/forms":"^4.0.0","@angular/http":"^4.4.6","@angular/material":"^2.0.0-beta.12","@angular/platform-browser":"^4.4.6","@angular/platform-browser-dynamic":"^4.0.0","@angular/router":"^4.0.0","core-js":"^2.4.1","rxjs":"^5.1.0","zone.js":"^0.8.4"},"devDependencies":{"@angular/cli":"1.1.1","@angular/compiler-cli":"^4.0.0","@angular/language-service":"^4.0.0","@types/jasmine":"2.5.45","@types/node":"~6.0.60","codelyzer":"~3.0.1","jasmine-core":"~2.6.2","jasmine-spec-reporter":"~4.1.0","karma":"~1.7.0","karma-chrome-launcher":"~2.1.1","karma-cli":"~1.0.1","karma-jasmine":"~1.1.0","karma-jasmine-html-reporter":"^0.2.2","karma-coverage-istanbul-reporter":"^1.2.1","protractor":"~5.1.2","ts-node":"~3.0.4","tslint":"~5.3.2","typescript":"~2.3.3"}}

/***/ }),

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/alrtw-material/alrtw-material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_tooltip__ = __webpack_require__("../../../material/esm5/tooltip.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlrtwMaterialModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var materialModules = [__WEBPACK_IMPORTED_MODULE_1__angular_common__["k" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatInputModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material_tooltip__["a" /* MatTooltipModule */]];
var AlrtwMaterialModule = (function () {
    function AlrtwMaterialModule() {
    }
    return AlrtwMaterialModule;
}());
AlrtwMaterialModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: materialModules,
        exports: materialModules,
        declarations: []
    })
], AlrtwMaterialModule);

//# sourceMappingURL=alrtw-material.module.js.map

/***/ }),

/***/ "../../../../../src/app/ani-list-query.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AniListQueryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AniListQueryService = (function () {
    function AniListQueryService(http) {
        this.http = http;
        this.aniListUrl = 'https://graphql.anilist.co';
    }
    AniListQueryService.prototype.queryCurrentAnimeByUser = function (username) {
        var getCurrentAnimeByUser = {
            query: "query  {\n      Page {\n        mediaList(userName: \"" + username + "\", status:CURRENT) {\n          mediaId\n          progress\n          media {\n            title {\n              userPreferred\n              romaji\n            }\n            status\n            episodes\n            nextAiringEpisode {\n              mediaId\n              episode\n              airingAt\n              timeUntilAiring\n            }\n          }\n        }\n      }\n    }"
        };
        return this.http.post(this.aniListUrl, getCurrentAnimeByUser);
    };
    AniListQueryService.prototype.getErrorText = function (error) {
        var text = 'Server says no!';
        if (error.errors && error.errors[0].status) {
            text = this._getErrorMsgForStatus(error.errors[0].status);
        }
        return text;
    };
    AniListQueryService.prototype._getErrorMsgForStatus = function (status) {
        var errorMsg = {
            500: 'Cannot get list of user. Username wrong?'
        };
        if (errorMsg[status]) {
            return errorMsg[status];
        }
        else {
            return "Unknown error: " + status;
        }
    };
    return AniListQueryService;
}());
AniListQueryService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], AniListQueryService);

var _a;
//# sourceMappingURL=ani-list-query.service.js.map

/***/ }),

/***/ "../../../../../src/app/anime-entry/anime-entry.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ready-to-watch-entry\">\r\n  <div class=\"title\">{{anime.title}}</div>\r\n\r\n  <div class=\"waiting-episodes\" *ngIf=\"anime.episodesReady > 0\" >\r\n    <span matTooltip=\"{{forecastString}}\" matTooltipPosition=\"right\">{{episodesReadyString}}</span>\r\n  </div>\r\n\r\n  <div class=\"next-airing\" *ngIf=\"anime.nextAiring\">\r\n    <span *ngIf=\"anime.episodesReady <= 0 && timeUntilNextEpisode\">\r\n      Next available in {{timeUntilNextEpisode}}!\r\n    </span>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/anime-entry/anime-entry.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ready-to-watch-entry {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 2fr 1fr;\n      grid-template-columns: 2fr 1fr;\n  -ms-grid-rows: 1fr;\n      grid-template-rows: 1fr;\n  padding: 5px; }\n  .ready-to-watch-entry .title {\n    -ms-grid-column: 1;\n        grid-column: 1; }\n  .ready-to-watch-entry .waiting-episodes {\n    -ms-grid-column: 2;\n        grid-column: 2; }\n  .ready-to-watch-entry .next-airing {\n    -ms-grid-column: 2;\n        grid-column: 2;\n    color: #bcbcbc; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/anime-entry/anime-entry.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ready_to_watch_info__ = __webpack_require__("../../../../../src/app/ready-to-watch-info.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimeEntryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnimeEntryComponent = (function () {
    function AnimeEntryComponent() {
    }
    AnimeEntryComponent.prototype.getTimeUntilString = function (secs) {
        if (secs === -1) {
            return null;
        }
        var days = Math.floor(secs / (3600 * 24));
        secs -= days * 3600 * 24;
        var hrs = Math.floor(secs / 3600);
        secs -= hrs * 3600;
        var mnts = Math.floor(secs / 60);
        return days + "d " + hrs + "h " + mnts + "min";
    };
    AnimeEntryComponent.prototype.getEpisodesReadyString = function () {
        var epsReadyString = '';
        if (this.anime.episodesReady === 1) {
            epsReadyString = "Episode " + this.anime.latestEpisode + " is";
        }
        else if (this.anime.episodesReady === 2) {
            epsReadyString = "Episodes " + (this.anime.latestEpisode - 1) + " and " + this.anime.latestEpisode + " are";
        }
        else {
            epsReadyString = "Episodes " + (this.anime.latestEpisode - this.anime.episodesReady + 1) + " to " + this.anime.latestEpisode + " are";
        }
        epsReadyString += ' ready to watch!';
        return epsReadyString;
    };
    AnimeEntryComponent.prototype.getForecastString = function () {
        var forecast = "";
        if (this.anime.airingStatus === __WEBPACK_IMPORTED_MODULE_1__ready_to_watch_info__["a" /* AnimeStatus */].RELEASING || this.anime.airingStatus === __WEBPACK_IMPORTED_MODULE_1__ready_to_watch_info__["a" /* AnimeStatus */].NOT_YET_RELEASING) {
            forecast = "Episode " + (this.anime.latestEpisode + 1) + " is available in " + this.timeUntilNextEpisode + "!";
        }
        else {
            forecast = "This anime is " + this.anime.airingStatus + ". No more episodes incoming!";
        }
        return forecast;
    };
    AnimeEntryComponent.prototype.ngOnInit = function () {
        this.timeUntilNextEpisode = this.getTimeUntilString(this.anime.nextAiring);
        this.episodesReadyString = this.getEpisodesReadyString();
        this.forecastString = this.getForecastString();
    };
    return AnimeEntryComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ready_to_watch_info__["b" /* ReadyToWatchInfo */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ready_to_watch_info__["b" /* ReadyToWatchInfo */]) === "function" && _a || Object)
], AnimeEntryComponent.prototype, "anime", void 0);
AnimeEntryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'alrtw-anime-entry',
        template: __webpack_require__("../../../../../src/app/anime-entry/anime-entry.component.html"),
        styles: [__webpack_require__("../../../../../src/app/anime-entry/anime-entry.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AnimeEntryComponent);

var _a;
//# sourceMappingURL=anime-entry.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <div class=\"content\">\r\n    <div>\r\n      <h1>\r\n        Welcome to {{title}}!\r\n      </h1>\r\n      <h3><span>Ready to Watch</span> is an unofficial Service for AniList Users.</h3>\r\n    </div>\r\n    <div>\r\n      <p></p>\r\n      <p>This service shows you how many episodes are waiting for you or how long you need to wait for the next one,\r\n        if you are up to date. Just enter your AniList username to start.</p>\r\n\r\n      <alrtw-ready-to-watch-list></alrtw-ready-to-watch-list>\r\n    </div>\r\n  </div>\r\n  <div class=\"footer\">\r\n    <alrtw-footer></alrtw-footer>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr 70% 1fr;\n      grid-template-columns: 1fr 70% 1fr;\n  -ms-grid-rows: 95% 5%;\n      grid-template-rows: 95% 5%;\n  padding: 1.5em;\n  min-height: 90%; }\n  @media (max-width: 700px) {\n    .wrapper {\n      -ms-grid-columns: 1fr 100% 1fr;\n          grid-template-columns: 1fr 100% 1fr;\n      padding: 0.5em; } }\n  .wrapper .content {\n    -ms-grid-column: 2;\n        grid-column: 2;\n    background-color: white;\n    padding: 1.5em;\n    border-radius: 10px; }\n    @media (max-width: 700px) {\n      .wrapper .content {\n        padding: 1em; } }\n  .wrapper .footer {\n    -ms-grid-column: 2;\n        grid-column: 2;\n    -ms-grid-row: 2;\n        grid-row: 2; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = '[alrtw] Ready to Watch';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'alrtw-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ready_to_watch_list_ready_to_watch_list_component__ = __webpack_require__("../../../../../src/app/ready-to-watch-list/ready-to-watch-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__anime_entry_anime_entry_component__ = __webpack_require__("../../../../../src/app/anime-entry/anime-entry.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__alrtw_material_alrtw_material_module__ = __webpack_require__("../../../../../src/app/alrtw-material/alrtw-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ready_to_watch_header_ready_to_watch_header_component__ = __webpack_require__("../../../../../src/app/ready-to-watch-header/ready-to-watch-header.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var appRoutes = [];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__ready_to_watch_list_ready_to_watch_list_component__["a" /* ReadyToWatchListComponent */],
            __WEBPACK_IMPORTED_MODULE_7__anime_entry_anime_entry_component__["a" /* AnimeEntryComponent */],
            __WEBPACK_IMPORTED_MODULE_9__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_10__ready_to_watch_header_ready_to_watch_header_component__["a" /* ReadyToWatchHeaderComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__alrtw_material_alrtw_material_module__["a" /* AlrtwMaterialModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    }),
    __metadata("design:paramtypes", [])
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div  class=\"footer\">\r\n  <a target=\"_blank\" *ngFor=\"let link of footerlinks\" href=\"{{link.url}}\">{{link.text}}</a>\r\n  <span class=\"version\">{{version}}</span>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../material/prebuilt-themes/indigo-pink.css"), "");

// module
exports.push([module.i, ".footer {\n  padding: 5px; }\n  .footer a {\n    padding-right: 2em;\n    text-decoration: none;\n    color: black; }\n  .footer .version {\n    float: right; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var appVersion = __webpack_require__("../../../../../package.json").version;
var FooterComponent = (function () {
    function FooterComponent() {
        this.aniList = { url: 'https://anilist.co/', text: 'AniList' };
        this.github = { url: 'https://github.com/s-blu/alrtw', text: 'GitHub' };
        this.impressum = { url: 'http://readytowatch.s-blu.de/impressum.html', text: 'Impressum & Datenschutz' };
        this.version = appVersion;
        this.footerlinks = [
            this.aniList,
            this.github,
            this.impressum
        ];
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'alrtw-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/ready-to-watch-header/ready-to-watch-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ready-to-watch-header\">\r\n  <div class=\"header title\" (click)=\"sortByName()\">Title</div>\r\n  <div class=\"header ready-to-watch-info\" (click)=\"sortByRtwInfo()\">Ready to Watch</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/ready-to-watch-header/ready-to-watch-header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ready-to-watch-header {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 2fr 1fr;\n      grid-template-columns: 2fr 1fr;\n  -ms-grid-rows: 1fr;\n      grid-template-rows: 1fr;\n  padding: 5px;\n  font-weight: bold; }\n  .ready-to-watch-header .header:hover {\n    cursor: pointer; }\n  .ready-to-watch-header .title {\n    -ms-grid-column: 1;\n        grid-column: 1; }\n  .ready-to-watch-header .ready-to-watch-info {\n    -ms-grid-column: 2;\n        grid-column: 2; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ready-to-watch-header/ready-to-watch-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadyToWatchHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReadyToWatchHeaderComponent = (function () {
    function ReadyToWatchHeaderComponent() {
        this.order = {
            name: 1,
            rtw: 1
        };
    }
    ReadyToWatchHeaderComponent.prototype.ngOnInit = function () {
    };
    ReadyToWatchHeaderComponent.prototype.sortByRtwInfo = function () {
        var _this = this;
        this.animes.sort(function (animeA, animeB) {
            var compare = (animeA.episodesReady - animeB.episodesReady) * _this.order.rtw;
            if (compare === 0) {
                compare = (animeB.nextAiring - animeA.nextAiring) * _this.order.rtw;
            }
            return compare;
        });
        this.order.rtw = -this.order.rtw;
    };
    ReadyToWatchHeaderComponent.prototype.sortByName = function () {
        var _this = this;
        this.animes.sort(function (animeA, animeB) { return (animeA.title).localeCompare(animeB.title) * _this.order.name; });
        this.order.name = -this.order.name;
    };
    return ReadyToWatchHeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", Object)
], ReadyToWatchHeaderComponent.prototype, "animes", void 0);
ReadyToWatchHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'alrtw-ready-to-watch-header',
        template: __webpack_require__("../../../../../src/app/ready-to-watch-header/ready-to-watch-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ready-to-watch-header/ready-to-watch-header.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ReadyToWatchHeaderComponent);

//# sourceMappingURL=ready-to-watch-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/ready-to-watch-info.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ReadyToWatchInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimeStatus; });

var ReadyToWatchInfo = (function () {
    function ReadyToWatchInfo(mediaId, title, episodesReadyToWatch, nextAiring, latestEpisode, status) {
        this.mediaId = mediaId;
        this.title = title;
        this.episodesReady = episodesReadyToWatch;
        this.nextAiring = nextAiring;
        this.latestEpisode = latestEpisode;
        this.airingStatus = status;
    }
    return ReadyToWatchInfo;
}());
var AnimeStatus = {
    FINISHED: "FINISHED",
    CANCELLED: "CANCELLED",
    NOT_YET_RELEASING: "NOT_YET_RELEASING",
    RELEASING: "RELEASING"
};
//# sourceMappingURL=ready-to-watch-info.js.map

/***/ }),

/***/ "../../../../../src/app/ready-to-watch-list/ready-to-watch-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"username_form\">\r\n  <form name=\"username_form\">\r\n    <mat-form-field>\r\n      <input matInput name=\"username\" placeholder=\"AniList username\" [(ngModel)]=\"username\">\r\n    </mat-form-field>\r\n    <button type=\"submit\" class=\"mat-primary\" mat-raised-button (click)=\"uiGetList()\">Get List</button>\r\n  </form>\r\n\r\n  <span *ngIf=\"listUpdated\" class=\"listUpdated\">\r\n  List retrieved at {{listUpdated.toLocaleString()}}\r\n</span>\r\n</div>\r\n<div class=\"error\">{{errorText}}</div>\r\n\r\n<div *ngIf=\"animes\" class=\"animelist\">\r\n  <h3>Hello, {{aniListUserName || \"anime friend\"}}!</h3>\r\n  <p>{{greetingString}}</p>\r\n\r\n  <alrtw-ready-to-watch-header [animes]=\"animes\"></alrtw-ready-to-watch-header>\r\n  <div *ngFor=\"let currAnime of animes\" class=\"ready-to-watch-list\">\r\n    <alrtw-anime-entry [anime]=\"currAnime\"></alrtw-anime-entry>\r\n  </div>\r\n\r\n  <div class=\"bookmark-url\">Bookmark http://readytowatch.s-blu.de/?username={{aniListUserName}} </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/ready-to-watch-list/ready-to-watch-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ready-to-watch-list:nth-child(even) {\n  background: #f2f2f2; }\n\n.listUpdated {\n  color: #bcbcbc;\n  font-size: 10pt; }\n\n.bookmark-url {\n  padding-top: 1em;\n  color: #bcbcbc; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ready-to-watch-list/ready-to-watch-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ready_to_watch_info__ = __webpack_require__("../../../../../src/app/ready-to-watch-info.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ani_list_query_service__ = __webpack_require__("../../../../../src/app/ani-list-query.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alrtw_material_alrtw_material_module__ = __webpack_require__("../../../../../src/app/alrtw-material/alrtw-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadyToWatchListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReadyToWatchListComponent = (function () {
    function ReadyToWatchListComponent(aniListQueryService, activatedRoute) {
        var _this = this;
        this.aniListQueryService = aniListQueryService;
        this.activatedRoute = activatedRoute;
        this.errorText = "";
        this.activatedRoute.queryParams.subscribe(function (params) {
            if (params['username']) {
                _this.username = params['username'];
                _this.uiGetList();
            }
        });
    }
    ReadyToWatchListComponent.prototype.uiGetList = function () {
        if (!this.username || this.username === "") {
            this.setError('Please input a username first');
            return;
        }
        this.getReadyToWatchInfoByUser(this.username);
    };
    ReadyToWatchListComponent.prototype.getReadyToWatchInfoByUser = function (username) {
        var _this = this;
        var currentWatchedAnimes;
        this.aniListQueryService.queryCurrentAnimeByUser(username).subscribe(function (currAnimeRes) {
            console.log(currAnimeRes);
            currentWatchedAnimes = currAnimeRes['data'].Page.mediaList;
            _this.aniListUserName = username;
            _this.animes = _this.transformToReadyToWatchInfo(currentWatchedAnimes);
            _this.greetingString = _this.getGreetingString(_this.animes);
            _this.saveUpdatedTime();
            _this.resetError();
        }, function (err) { return _this.processFailure(_this.aniListQueryService.getErrorText(err.error)); });
    };
    ReadyToWatchListComponent.prototype.transformToReadyToWatchInfo = function (currentAnimes) {
        var readyToWatchInfos = [];
        currentAnimes.forEach(function (currentAnimeEntry) {
            var airingInfo = currentAnimeEntry.media.nextAiringEpisode;
            var episodesReadyToWatch = 0, timeUntilAiring = -1, mostRecentEpisode = currentAnimeEntry.media.episodes;
            // if the anime is not longer airing, there is no airing schedule. Calculate from total.
            if (currentAnimeEntry.media.status === __WEBPACK_IMPORTED_MODULE_1__ready_to_watch_info__["a" /* AnimeStatus */].FINISHED || currentAnimeEntry.media.status === __WEBPACK_IMPORTED_MODULE_1__ready_to_watch_info__["a" /* AnimeStatus */].CANCELLED) {
                episodesReadyToWatch = currentAnimeEntry.media.episodes - currentAnimeEntry.progress;
            }
            else if (airingInfo) {
                // calculate - 1 since we got the info for the next episode to air, not the last released.
                episodesReadyToWatch = airingInfo.episode - currentAnimeEntry.progress - 1;
                timeUntilAiring = airingInfo.timeUntilAiring;
                mostRecentEpisode = airingInfo.episode - 1;
            }
            readyToWatchInfos.push(new __WEBPACK_IMPORTED_MODULE_1__ready_to_watch_info__["b" /* ReadyToWatchInfo */](currentAnimeEntry.mediaId, currentAnimeEntry.media.title.userPreferred || currentAnimeEntry.media.title.romaji, episodesReadyToWatch, timeUntilAiring, mostRecentEpisode, currentAnimeEntry.media.status));
        });
        return readyToWatchInfos;
    };
    ReadyToWatchListComponent.prototype.getGreetingString = function (readyToWatchInfos) {
        var totalReadyEpisodes = readyToWatchInfos.reduce(function (acc, info) { return acc + info.episodesReady; }, 0);
        return "Currently " + (totalReadyEpisodes || 'the following') + " " +
            ((totalReadyEpisodes === 1 ? 'episode is' : 'episodes are') + " waiting for you: ");
    };
    ReadyToWatchListComponent.prototype.setError = function (text) {
        this.errorText = "Something went wrong! " + text;
    };
    ReadyToWatchListComponent.prototype.processFailure = function (error) {
        this.setError(error);
        this.animes = null;
        this.aniListUserName = "";
        this.listUpdated = null;
    };
    ReadyToWatchListComponent.prototype.resetError = function () {
        this.errorText = "";
    };
    ReadyToWatchListComponent.prototype.saveUpdatedTime = function () {
        this.listUpdated = new Date();
    };
    ReadyToWatchListComponent.prototype.ngOnInit = function () { };
    return ReadyToWatchListComponent;
}());
ReadyToWatchListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'alrtw-ready-to-watch-list',
        template: __webpack_require__("../../../../../src/app/ready-to-watch-list/ready-to-watch-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ready-to-watch-list/ready-to-watch-list.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__ani_list_query_service__["a" /* AniListQueryService */], __WEBPACK_IMPORTED_MODULE_3__alrtw_material_alrtw_material_module__["a" /* AlrtwMaterialModule */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ani_list_query_service__["a" /* AniListQueryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ani_list_query_service__["a" /* AniListQueryService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], ReadyToWatchListComponent);

var _a, _b;
//# sourceMappingURL=ready-to-watch-list.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map