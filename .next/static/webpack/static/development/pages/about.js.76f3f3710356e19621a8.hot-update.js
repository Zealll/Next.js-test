webpackHotUpdate("static\\development\\pages\\about.js",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);





var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;



var About =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(About, _React$Component);

  function About() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, About);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(About).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(About, [{
    key: "componentDidMount",
    //brforePopState only activates when you go back to the specific component
    value: function componentDidMount() {
      // Router.beforePopState(params => {
      //     console.log('beforePopState',params)
      //     //params.url
      //     //params.as
      //     //params.options
      //     if(params.as === '/contact') {
      //         window.location.href = '/whatever'
      //         We could also use Router.replace('/whatever)
      //         return false
      //     }
      //     return true
      // })
      // ====Router Events====
      // console.log(Router.events)
      handleRouteStart = function handleRouteStart(url) {
        console.log('Start', url);
      };

      handleRouteComeplete = function handleRouteComeplete(url) {
        console.log('Complete', url);
      };

      next_router__WEBPACK_IMPORTED_MODULE_6___default.a.events.on('routeChangeStart', this.handleRouteStart);
      next_router__WEBPACK_IMPORTED_MODULE_6___default.a.events.on('routeChangeComeplete', this.handleRouteComeplete);
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", null, __jsx("div", null, "Welcome to About Page"), __jsx("button", {
        onClick: function onClick() {
          return next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/contact');
        }
      }, "Click me"));
    }
  }]);

  return About;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ })

})
//# sourceMappingURL=about.js.76f3f3710356e19621a8.hot-update.js.map