(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/panchoruy/panchoruy.github.io/panchoruy-website/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "84zG":
    /*!******************************************!*\
      !*** ./src/app/about/about.component.ts ***!
      \******************************************/

    /*! exports provided: AboutComponent */

    /***/
    function zG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
        return AboutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var AboutComponent = /*#__PURE__*/function () {
        function AboutComponent() {
          _classCallCheck(this, AboutComponent);
        }

        _createClass(AboutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AboutComponent;
      }();

      AboutComponent.ɵfac = function AboutComponent_Factory(t) {
        return new (t || AboutComponent)();
      };

      AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AboutComponent,
        selectors: [["app-about"]],
        decls: 28,
        vars: 0,
        consts: [[1, "center-self"], ["fxLayout", "row wrap"], ["fxFlex.lt-md", "25%", "fxFlex.gt-sm", "12.5%"], ["mat-icon-button", "", "alt", "Email", "href", "mailto:me@panchoruy.com", "target", "_blank", 1, "social-icon", "socicon"], ["mat-icon-button", "", "alt", "Facebook", "href", "https://facebook.com/panchoruy", "target", "_blank", 1, "social-icon", "socicon"], ["mat-icon-button", "", "alt", "Twitter", "href", "https://twitter.com/panchoruy", "target", "_blank", 1, "social-icon", "socicon"], ["mat-icon-button", "", "alt", "Instagram", "href", "https://instagram.com/panchoruy", "target", "_blank", 1, "social-icon", "socicon"], ["mat-icon-button", "", "alt", "YouTube", "href", "https://youtube.com/panchoruy", "target", "_blank", 1, "social-icon", "socicon"], ["mat-icon-button", "", "alt", "Github", "href", "https://github.com/panchoruy", "target", "_blank", 1, "social-icon", "socicon"], ["mat-icon-button", "", "alt", "LinkedIn", "href", "https://www.linkedin.com/in/panchoruy", "target", "_blank", 1, "social-icon", "socicon"], ["mat-icon-button", "", "alt", "Flickr", "href", "https://www.flickr.com/photos/panchoruy", "target", "_blank", 1, "social-icon", "socicon"]],
        template: function AboutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Social Links");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \uE050 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \uE028 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \uE08D ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \uE044 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \uE0A5 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \uE032 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " \uE04C ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " \uE02D ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatAnchor"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-about',
            templateUrl: './about.component.html',
            styleUrls: ['./about.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "9jgp":
    /*!**************************************************!*\
      !*** ./src/app/main-menu/main-menu.component.ts ***!
      \**************************************************/

    /*! exports provided: MainMenuComponent */

    /***/
    function jgp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainMenuComponent", function () {
        return MainMenuComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function MainMenuComponent_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "lowercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, item_r1), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1, " ");
        }
      }

      var MainMenuComponent = /*#__PURE__*/function () {
        function MainMenuComponent() {
          _classCallCheck(this, MainMenuComponent);

          this.mainMenuItems = ["Photography", "Projects", "About"];
        }

        _createClass(MainMenuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MainMenuComponent;
      }();

      MainMenuComponent.ɵfac = function MainMenuComponent_Factory(t) {
        return new (t || MainMenuComponent)();
      };

      MainMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MainMenuComponent,
        selectors: [["app-main-menu"]],
        decls: 2,
        vars: 1,
        consts: [[1, "main-menu"], [4, "ngFor", "ngForOf"], [3, "routerLink"]],
        template: function MainMenuComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainMenuComponent_li_1_Template, 4, 4, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mainMenuItems);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["LowerCasePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLW1lbnUuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainMenuComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-main-menu',
            templateUrl: './main-menu.component.html',
            styleUrls: ['./main-menu.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "9vUh":
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /*! exports provided: HomeComponent */

    /***/
    function vUh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../main-menu/main-menu.component */
      "9jgp");

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent() {
          _classCallCheck(this, HomeComponent);
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // Enable logo animation.
            lottie.loadAnimation({
              container: document.getElementById("logo"),
              renderer: 'svg',
              loop: true,
              autoplay: true,
              path: 'assets/animated_logo.json' // the path to the animation json

            });
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)();
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 3,
        vars: 0,
        consts: [[1, "center-self", "center-text"], ["id", "logo"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-main-menu");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_1__["MainMenuComponent"]],
        styles: ["#logo[_ngcontent-%COMP%] {\n  height: 25vh;\n  padding-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0Esb0JBQUE7QUFDSiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xvZ28ge1xuICAgIGhlaWdodDogMjV2aDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgfSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
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

      /***/
    },

    /***/
    "I57z":
    /*!**********************************!*\
      !*** ./src/app/photo.service.ts ***!
      \**********************************/

    /*! exports provided: PhotoService */

    /***/
    function I57z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PhotoService", function () {
        return PhotoService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var API_KEY = "35aaa78f22e30b2123c479fccac9a369";
      var JSON_ARGS = "format=json&nojsoncallback=1";

      var PhotoService = /*#__PURE__*/function () {
        function PhotoService(http) {
          _classCallCheck(this, PhotoService);

          this.http = http;
        } // Returns a photo list with sizes


        _createClass(PhotoService, [{
          key: "getPhotoMetadataByTagsObservable",
          value: function getPhotoMetadataByTagsObservable() {
            var _this = this;

            var tags = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "website";
            var user_id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "panchoruy";
            var api_key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : API_KEY;
            var base_url = "https://www.flickr.com/services/rest/?method=flickr.photos.search";
            var request_url = "".concat(base_url, "&api_key=").concat(api_key, "&user_id=").concat(user_id, "&tags=").concat(tags, "&").concat(JSON_ARGS, "&extras=tags");
            var requestObservable = this.http.get(request_url);

            var photosMetadataSubscriber = function photosMetadataSubscriber(observer) {
              return requestObservable.subscribe(function (data) {
                var photosArray = data.photos.photo;
                var photoSizesObservables = photosArray.map(function (photoMetadata) {
                  return _this.getPhotoSizesObservable(photoMetadata.id);
                }); // forkJoin allows to wait for all requests to be completed.

                Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(photoSizesObservables).subscribe(function (data) {
                  var photoSizes = data.map(function (element) {
                    return element.sizes.size;
                  }); // forkJoin should return the results in order.

                  for (var index = 0; index < photoSizes.length; index++) {
                    photosArray[index].sizes = photoSizes[index];
                  }

                  observer.next(photosArray);
                  observer.complete();
                });
              });
            };

            return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](photosMetadataSubscriber);
          }
        }, {
          key: "getPhotoSizesObservable",
          value: function getPhotoSizesObservable(photo_id) {
            var api_key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : API_KEY;
            var request_url = "https://www.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=".concat(api_key, "&photo_id=").concat(photo_id, "&").concat(JSON_ARGS);
            return this.http.get(request_url);
          }
        }]);

        return PhotoService;
      }();

      PhotoService.ɵfac = function PhotoService_Factory(t) {
        return new (t || PhotoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      PhotoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: PhotoService,
        factory: PhotoService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhotoService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "J06Z":
    /*!********************************************************!*\
      !*** ./src/app/menu-toolbar/menu-toolbar.component.ts ***!
      \********************************************************/

    /*! exports provided: MenuToolbarComponent */

    /***/
    function J06Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuToolbarComponent", function () {
        return MenuToolbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var MenuToolbarComponent = /*#__PURE__*/function () {
        function MenuToolbarComponent() {
          _classCallCheck(this, MenuToolbarComponent);
        }

        _createClass(MenuToolbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MenuToolbarComponent;
      }();

      MenuToolbarComponent.ɵfac = function MenuToolbarComponent_Factory(t) {
        return new (t || MenuToolbarComponent)();
      };

      MenuToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MenuToolbarComponent,
        selectors: [["app-menu-toolbar"]],
        decls: 4,
        vars: 0,
        consts: [["color", "primary"], ["mat-stroked-button", "", "routerLink", "/"]],
        template: function MenuToolbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Back Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LXRvb2xiYXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuToolbarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-menu-toolbar',
            templateUrl: './menu-toolbar.component.html',
            styleUrls: ['./menu-toolbar.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "Qy5g":
    /*!******************************************************!*\
      !*** ./src/app/photography/photography.component.ts ***!
      \******************************************************/

    /*! exports provided: PhotographyComponent */

    /***/
    function Qy5g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PhotographyComponent", function () {
        return PhotographyComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _photo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../photo.service */
      "I57z");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _photo_photo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../photo/photo.component */
      "Rcx8");

      var _c0 = ["photographyContainer"];

      function PhotographyComponent_app_photo_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-photo", 3);
        }

        if (rf & 2) {
          var photoElement_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sizes", photoElement_r2.sizes)("height", photoElement_r2.height)("width", photoElement_r2.width)("top", photoElement_r2.top)("left", photoElement_r2.left);
        }
      }

      var _BASE_ROW_HEIGHT = 400;
      var _PHOTO_SPACING = 5;

      var PhotographyComponent = /*#__PURE__*/function () {
        function PhotographyComponent(photoService) {
          _classCallCheck(this, PhotographyComponent);

          this.photoService = photoService;
        } // Dictionary of photo metadata indexed by id


        _createClass(PhotographyComponent, [{
          key: "onResize",
          value: function onResize(event) {
            var containerWidth = this.photographyContainer.nativeElement.clientWidth;
            var rows = this.calculateRowDimensions(containerWidth);
            this.resizeAndPositionElements(rows);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.photoService.getPhotoMetadataByTagsObservable().subscribe(function (photosArray) {
              // Store metadata indexed by id in memory, so that we can find sources faster
              _this2.photosOrder = shuffleInPlace(photosArray.map(function (element) {
                return element.id;
              }));
              _this2.photosMetadata = indexedById(photosArray); // Calculate the client width to display the appropriate row size

              var containerWidth = _this2.photographyContainer.nativeElement.clientWidth;

              var rows = _this2.calculateRowDimensions(containerWidth);

              _this2.createSkeletonElements();

              _this2.resizeAndPositionElements(rows);
            });
            this.photoElements = [];
          } // Returns an array of rows, where each row has height width and 

        }, {
          key: "calculateRowDimensions",
          value: function calculateRowDimensions(containerWidth) {
            var rows = [];
            var rowBuffer = {
              photosInfo: [],
              width: 0,
              height: 0
            };

            var _iterator = _createForOfIteratorHelper(this.photosOrder),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var photoId = _step.value;
                var originalSize = this.photosMetadata[photoId].sizes.find(function (size) {
                  return size.label == "Original";
                });
                var ratio = originalSize.width / originalSize.height;
                var scaledBaseWidth = ratio * _BASE_ROW_HEIGHT;
                rowBuffer.width += scaledBaseWidth;
                rowBuffer.photosInfo.push({
                  "id": this.photosMetadata[photoId].id,
                  "width": scaledBaseWidth
                }); // Row is ready, rescale and ship

                if (rowBuffer.width >= containerWidth) {
                  var spacesWidth = (rowBuffer.photosInfo.length - 1) * _PHOTO_SPACING;
                  var scaleRatio = rowBuffer.width / (containerWidth - spacesWidth);
                  rowBuffer.width = containerWidth;
                  rowBuffer.height = _BASE_ROW_HEIGHT / scaleRatio;

                  var _iterator2 = _createForOfIteratorHelper(rowBuffer.photosInfo),
                      _step2;

                  try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                      var photoInfo = _step2.value;
                      photoInfo.width /= scaleRatio;
                    }
                  } catch (err) {
                    _iterator2.e(err);
                  } finally {
                    _iterator2.f();
                  }

                  rows.push(rowBuffer);
                  rowBuffer = {
                    photosInfo: [],
                    width: 0,
                    height: 0
                  };
                }
              } // Last row not complete

            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            if (rowBuffer.width > 0) {
              rowBuffer.height = _BASE_ROW_HEIGHT;
              rows.push(rowBuffer);
            }

            return rows;
          }
        }, {
          key: "createSkeletonElements",
          value: function createSkeletonElements() {
            var _iterator3 = _createForOfIteratorHelper(this.photosOrder),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var photoId = _step3.value;
                var photoElement = {
                  sizes: this.photosMetadata[photoId].sizes
                };
                this.photoElements.push(photoElement);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
        }, {
          key: "resizeAndPositionElements",
          value: function resizeAndPositionElements(rows) {
            var currentTop = 0;
            var index = 0;

            var _iterator4 = _createForOfIteratorHelper(rows),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var row = _step4.value;
                var currentLeft = 0;

                var _iterator5 = _createForOfIteratorHelper(row.photosInfo),
                    _step5;

                try {
                  for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                    var photoInfo = _step5.value;
                    this.photoElements[index].height = "".concat(row.height, "px");
                    this.photoElements[index].width = "".concat(photoInfo.width, "px");
                    this.photoElements[index].top = "".concat(currentTop, "px");
                    this.photoElements[index].left = "".concat(currentLeft, "px");
                    index++;
                    currentLeft += photoInfo.width;
                    currentLeft += _PHOTO_SPACING;
                  }
                } catch (err) {
                  _iterator5.e(err);
                } finally {
                  _iterator5.f();
                }

                currentTop += row.height;
                currentTop += _PHOTO_SPACING;
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }
        }]);

        return PhotographyComponent;
      }();

      PhotographyComponent.ɵfac = function PhotographyComponent_Factory(t) {
        return new (t || PhotographyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_photo_service__WEBPACK_IMPORTED_MODULE_1__["PhotoService"]));
      };

      PhotographyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PhotographyComponent,
        selectors: [["app-photography"]],
        viewQuery: function PhotographyComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.photographyContainer = _t.first);
          }
        },
        hostBindings: function PhotographyComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function PhotographyComponent_resize_HostBindingHandler($event) {
              return ctx.onResize($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
          }
        },
        decls: 3,
        vars: 1,
        consts: [["id", "photography-container"], ["photographyContainer", ""], ["class", "photo", 3, "sizes", "height", "width", "top", "left", 4, "ngFor", "ngForOf"], [1, "photo", 3, "sizes", "height", "width", "top", "left"]],
        template: function PhotographyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PhotographyComponent_app_photo_2_Template, 1, 5, "app-photo", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.photoElements);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _photo_photo_component__WEBPACK_IMPORTED_MODULE_3__["PhotoComponent"]],
        styles: ["#photography-container[_ngcontent-%COMP%] {\n  min-height: 101%;\n  position: relative;\n}\n\n.photo[_ngcontent-%COMP%] {\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Bob3RvZ3JhcGh5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRiIsImZpbGUiOiJwaG90b2dyYXBoeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwaG90b2dyYXBoeS1jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiAxMDElO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5waG90byB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhotographyComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-photography',
            templateUrl: './photography.component.html',
            styleUrls: ['./photography.component.scss']
          }]
        }], function () {
          return [{
            type: _photo_service__WEBPACK_IMPORTED_MODULE_1__["PhotoService"]
          }];
        }, {
          photographyContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['photographyContainer']
          }],
          onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
          }]
        });
      })();

      function shuffleInPlace(array) {
        if (array.length <= 1) return array;

        for (var i = 0; i < array.length; i++) {
          var randomChoiceIndex = Math.floor(Math.random() * array.length);
          var _ref = [array[randomChoiceIndex], array[i]];
          array[i] = _ref[0];
          array[randomChoiceIndex] = _ref[1];
        }

        return array;
      }

      function indexedById(photosArray) {
        function f(object, element) {
          object[element.id] = element;
          return object;
        }

        return photosArray.reduce(f, {});
      }
      /***/

    },

    /***/
    "Rcx8":
    /*!******************************************!*\
      !*** ./src/app/photo/photo.component.ts ***!
      \******************************************/

    /*! exports provided: PhotoComponent */

    /***/
    function Rcx8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PhotoComponent", function () {
        return PhotoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function PhotoComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.currentSource, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      var PhotoComponent = /*#__PURE__*/function () {
        function PhotoComponent() {
          _classCallCheck(this, PhotoComponent);
        }

        _createClass(PhotoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.isFullscreen = false; // Source thats always bigger than the row size.

            this.currentSource = this.sizes.find(function (size) {
              return size.label == "Medium 640";
            }).source;
          }
        }, {
          key: "onClick",
          value: function onClick(button) {
            this.isFullscreen = !this.isFullscreen;

            if (this.isFullscreen) {
              var _iterator6 = _createForOfIteratorHelper(this.sizes),
                  _step6;

              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                  var size = _step6.value;

                  if (size.width >= window.innerWidth || size.height >= window.innerHeight) {
                    this.currentSource = size.source;
                    break;
                  }
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }
            }
          }
        }]);

        return PhotoComponent;
      }();

      PhotoComponent.ɵfac = function PhotoComponent_Factory(t) {
        return new (t || PhotoComponent)();
      };

      PhotoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PhotoComponent,
        selectors: [["app-photo"]],
        hostVars: 8,
        hostBindings: function PhotoComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PhotoComponent_click_HostBindingHandler($event) {
              return ctx.onClick($event.target);
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.height)("width", ctx.width)("top", ctx.top)("left", ctx.left);
          }
        },
        inputs: {
          sizes: "sizes",
          height: "height",
          width: "width",
          top: "top",
          left: "left"
        },
        decls: 2,
        vars: 2,
        consts: [[1, "photo-image", 3, "src"], ["class", "fullscreen-theater", 4, "ngIf"], [1, "fullscreen-theater"], [1, "photo-image", "center-self", 3, "src"]],
        template: function PhotoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PhotoComponent_div_1_Template, 2, 1, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.currentSource, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isFullscreen);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: [".photo-image[_ngcontent-%COMP%] {\n  max-height: 100%;\n  max-width: 100%;\n}\n\n.fullscreen-theater[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.9);\n  z-index: 5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Bob3RvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQ0EsVUFBQTtBQUNGIiwiZmlsZSI6InBob3RvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBob3RvLWltYWdlIHtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uZnVsbHNjcmVlbi10aGVhdGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC45KTtcbiAgei1pbmRleDogNTtcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhotoComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-photo',
            templateUrl: './photo.component.html',
            styleUrls: ['./photo.component.scss']
          }]
        }], function () {
          return [];
        }, {
          sizes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.height']
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.width']
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          top: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.top']
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          left: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.left']
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event.target']]
          }]
        });
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'Pancho Ruy';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./main-menu/main-menu.component */
      "9jgp");
      /* harmony import */


      var _photography_photography_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./photography/photography.component */
      "Qy5g");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _menu_toolbar_menu_toolbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./menu-toolbar/menu-toolbar.component */
      "J06Z");
      /* harmony import */


      var _projects_projects_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./projects/projects.component */
      "zUkc");
      /* harmony import */


      var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./page-not-found/page-not-found.component */
      "rQPh");
      /* harmony import */


      var _about_about_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./about/about.component */
      "84zG");
      /* harmony import */


      var _photo_photo_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./photo/photo.component */
      "Rcx8");
      /* harmony import */


      var _photo_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./photo.service */
      "I57z"); // Imports
      // Angular Material Components
      // Declarations
      // Providers


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_photo_service__WEBPACK_IMPORTED_MODULE_17__["PhotoService"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_9__["MainMenuComponent"], _photography_photography_component__WEBPACK_IMPORTED_MODULE_10__["PhotographyComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"], _menu_toolbar_menu_toolbar_component__WEBPACK_IMPORTED_MODULE_12__["MenuToolbarComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_13__["ProjectsComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__["PageNotFoundComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_15__["AboutComponent"], _photo_photo_component__WEBPACK_IMPORTED_MODULE_16__["PhotoComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_9__["MainMenuComponent"], _photography_photography_component__WEBPACK_IMPORTED_MODULE_10__["PhotographyComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"], _menu_toolbar_menu_toolbar_component__WEBPACK_IMPORTED_MODULE_12__["MenuToolbarComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_13__["ProjectsComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__["PageNotFoundComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_15__["AboutComponent"], _photo_photo_component__WEBPACK_IMPORTED_MODULE_16__["PhotoComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"]],
            providers: [_photo_service__WEBPACK_IMPORTED_MODULE_17__["PhotoService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "rQPh":
    /*!************************************************************!*\
      !*** ./src/app/page-not-found/page-not-found.component.ts ***!
      \************************************************************/

    /*! exports provided: PageNotFoundComponent */

    /***/
    function rQPh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
        return PageNotFoundComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _menu_toolbar_menu_toolbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../menu-toolbar/menu-toolbar.component */
      "J06Z");

      var PageNotFoundComponent = /*#__PURE__*/function () {
        function PageNotFoundComponent() {
          _classCallCheck(this, PageNotFoundComponent);
        }

        _createClass(PageNotFoundComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PageNotFoundComponent;
      }();

      PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) {
        return new (t || PageNotFoundComponent)();
      };

      PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PageNotFoundComponent,
        selectors: [["app-page-not-found"]],
        decls: 5,
        vars: 0,
        consts: [[1, "center-self"]],
        template: function PageNotFoundComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Oops!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " That URL does not exist. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-menu-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_menu_toolbar_menu_toolbar_component__WEBPACK_IMPORTED_MODULE_1__["MenuToolbarComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-page-not-found',
            templateUrl: './page-not-found.component.html',
            styleUrls: ['./page-not-found.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./about/about.component */
      "84zG");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./page-not-found/page-not-found.component */
      "rQPh");
      /* harmony import */


      var _photography_photography_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./photography/photography.component */
      "Qy5g");
      /* harmony import */


      var _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./projects/projects.component */
      "zUkc");

      var routes = [{
        path: "",
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
      }, {
        path: "photography",
        component: _photography_photography_component__WEBPACK_IMPORTED_MODULE_5__["PhotographyComponent"]
      }, {
        path: "projects",
        component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"]
      }, {
        path: "about",
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]
      }, {
        path: "**",
        component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
              relativeLinkResolution: 'legacy'
            })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "zUkc":
    /*!************************************************!*\
      !*** ./src/app/projects/projects.component.ts ***!
      \************************************************/

    /*! exports provided: ProjectsComponent */

    /***/
    function zUkc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
        return ProjectsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var _c0 = ["svgCanvas"];

      var ProjectsComponent = /*#__PURE__*/function () {
        function ProjectsComponent() {
          _classCallCheck(this, ProjectsComponent);
        }

        _createClass(ProjectsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.worldObjects = new Set();
          }
        }, {
          key: "handleMouseDown",
          value: function handleMouseDown(event) {
            console.log(event);

            if (event.target.classList.contains('svg-canvas')) {
              this.createCircle(event.clientX, event.clientY);
            }
          }
        }, {
          key: "createCircle",
          value: function createCircle(posX, posY) {
            var newCircle = new CircleObject(posX, posY);
            this.worldObjects.add(newCircle.svgElement);
            this.svgCanvas.nativeElement.appendChild(newCircle.svgElement);
          }
        }, {
          key: "removeElement",
          value: function removeElement(target) {
            target.parentElement.removeChild(target);
          }
        }]);

        return ProjectsComponent;
      }();

      ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) {
        return new (t || ProjectsComponent)();
      };

      ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProjectsComponent,
        selectors: [["app-projects"]],
        viewQuery: function ProjectsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.svgCanvas = _t.first);
          }
        },
        decls: 2,
        vars: 0,
        consts: [["xmlns", "http://www.w3.org/2000/svg", 1, "svg-canvas", 3, "mousedown"], ["svgCanvas", ""]],
        template: function ProjectsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ProjectsComponent_Template__svg_svg_mousedown_0_listener($event) {
              return ctx.handleMouseDown($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".svg-canvas[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJwcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdmctY2FudmFzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-projects',
            templateUrl: './projects.component.html',
            styleUrls: ['./projects.component.scss']
          }]
        }], function () {
          return [];
        }, {
          svgCanvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['svgCanvas']
          }]
        });
      })();

      var InputState = function InputState() {
        _classCallCheck(this, InputState);
      };

      var CircleObject = /*#__PURE__*/function () {
        function CircleObject(posX, posY) {
          var radius = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 50;
          var stroke = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '#FFF';
          var strokeFocus = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '#55F';
          var strokeWidth = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '2px';
          var fill = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : '#000';

          _classCallCheck(this, CircleObject);

          this.clicked = false;
          this.hovered = false;
          this.svgElement = document.createElementNS("http://www.w3.org/2000/svg", "circle");
          this.svgElement.classList.add('circle');
          this.svgElement.setAttribute("cx", String(posX));
          this.svgElement.setAttribute("cy", String(posY));
          this.svgElement.setAttribute("r", String(radius));
          this.svgElement.setAttribute("stroke", stroke);
          this.svgElement.setAttribute("stroke-width", String(strokeWidth));
          this.svgElement.setAttribute("fill", fill);
          this.svgElement.addEventListener('mouseenter', this.handleMouseEnter(this));
          this.svgElement.addEventListener('mouseleave', this.handleMouseLeave(this));
          this.svgElement.addEventListener('mousedown', this.handleMouseDown(this));
          this.svgElement.addEventListener('mouseup', this.handleMouseUp(this));
        }

        _createClass(CircleObject, [{
          key: "handleMouseEnter",
          value: function handleMouseEnter(ref) {
            return function (event) {
              ref.hovered = true;
              ref.updateColor();
            };
          }
        }, {
          key: "handleMouseLeave",
          value: function handleMouseLeave(ref) {
            return function (event) {
              ref.hovered = false;
              ref.updateColor();
            };
          }
        }, {
          key: "handleMouseDown",
          value: function handleMouseDown(ref) {
            return function (event) {
              ref.clicked = true;
              ref.offsetX = ref.svgElement.getAttribute("cx") - event.clientX;
              ref.offsetY = ref.svgElement.getAttribute("cy") - event.clientY;
              var parent = ref.svgElement.parentElement;
              parent.addEventListener('mousemove', ref.handleMouseMove(ref));
              ref.updateColor();
            };
          }
        }, {
          key: "handleMouseUp",
          value: function handleMouseUp(ref) {
            return function (event) {
              ref.clicked = false;
              var parent = ref.svgElement.parentElement;
              parent.removeEventListener('mousemove', ref.handleMouseMove(ref));
              ref.updateColor();
            };
          }
        }, {
          key: "handleMouseMove",
          value: function handleMouseMove(ref) {
            return function (event) {
              if (ref.clicked) {
                ref.svgElement.setAttribute("cx", event.clientX + ref.offsetX);
                ref.svgElement.setAttribute("cy", event.clientY + ref.offsetY);
              }
            };
          }
        }, {
          key: "updateColor",
          value: function updateColor() {
            if (this.clicked) {
              this.svgElement.setAttribute("stroke", '#FF5');
            } else if (this.hovered) {
              this.svgElement.setAttribute("stroke", '#55F');
            } else {
              this.svgElement.setAttribute("stroke", '#FFF');
            }
          }
        }]);

        return CircleObject;
      }();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map