/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var raf_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var raf_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(raf_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var server_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var server_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* harmony import */ var server_lib_create_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44);
(function () {
  var enterModule = __webpack_require__(2).enterModule;

  enterModule && enterModule(module);
})();







const server = Object(server_lib_create_server__WEBPACK_IMPORTED_MODULE_5__["default"])(server_app__WEBPACK_IMPORTED_MODULE_4__["default"]);
server.start(server_settings__WEBPACK_IMPORTED_MODULE_3__["PORT"]);

if (false) {}

;

(function () {
  var reactHotLoader = __webpack_require__(2).default;

  var leaveModule = __webpack_require__(2).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(server, "server", "/home/anders/code/react_redux_immutable/src/server/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)(module)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("raf/polyfill");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PORT", function() { return PORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_FORMAT", function() { return LOG_FORMAT; });
/* harmony import */ var settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NODE_ENV", function() { return settings__WEBPACK_IMPORTED_MODULE_0__["NODE_ENV"]; });

(function () {
  var enterModule = __webpack_require__(2).enterModule;

  enterModule && enterModule(module);
})();



const PORT = process.env.PORT || 3000;
const LOG_FORMAT = settings__WEBPACK_IMPORTED_MODULE_0__["NODE_ENV"] == 'production' ? 'combined' : 'dev';
;

(function () {
  var reactHotLoader = __webpack_require__(2).default;

  var leaveModule = __webpack_require__(2).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PORT, "PORT", "/home/anders/code/react_redux_immutable/src/server/settings.js");
  reactHotLoader.register(LOG_FORMAT, "LOG_FORMAT", "/home/anders/code/react_redux_immutable/src/server/settings.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)(module)))

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NODE_ENV", function() { return NODE_ENV; });
(function () {
  var enterModule = __webpack_require__(2).enterModule;

  enterModule && enterModule(module);
})();

const NODE_ENV = "development" || 'development';
;

(function () {
  var reactHotLoader = __webpack_require__(2).default;

  var leaveModule = __webpack_require__(2).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(NODE_ENV, "NODE_ENV", "/home/anders/code/react_redux_immutable/src/settings.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)(module)))

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var serve_favicon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var serve_favicon__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(serve_favicon__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var express_static_gzip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);
/* harmony import */ var express_static_gzip__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(express_static_gzip__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var common_tags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);
/* harmony import */ var common_tags__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(common_tags__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(14);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var server_settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6);
/* harmony import */ var components_root__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(17);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(36);
/* harmony import */ var _store_initialStoreState__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(41);
/* harmony import */ var react_redux_dist_react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(43);
/* harmony import */ var react_redux_dist_react_redux__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_redux_dist_react_redux__WEBPACK_IMPORTED_MODULE_14__);
var _jsxFileName = "/home/anders/code/react_redux_immutable/src/server/app.js";

(function () {
  var enterModule = __webpack_require__(2).enterModule;

  enterModule && enterModule(module);
})();
















const assetsManifest = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_0___default.a.readFileSync(path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(__dirname, '../client/assets-manifest.json'), 'utf8'));
const app = express__WEBPACK_IMPORTED_MODULE_2___default()();
app.use(morgan__WEBPACK_IMPORTED_MODULE_3___default()(server_settings__WEBPACK_IMPORTED_MODULE_10__["LOG_FORMAT"]));
app.use(serve_favicon__WEBPACK_IMPORTED_MODULE_4___default()('public/favicon.ico'));
app.use(express_static_gzip__WEBPACK_IMPORTED_MODULE_5___default()('public', {
  indexFromEmptyFile: false
}));
app.use('/assets', express_static_gzip__WEBPACK_IMPORTED_MODULE_5___default()('build/client', {
  indexFromEmptyFile: false
}));
app.get('*', (req, res) => {
  const cookies = {
    "token": "just showing how it would work with thunk helpers"
  };
  const store = Object(_store_configureStore__WEBPACK_IMPORTED_MODULE_12__["configureStore"])(_store_initialStoreState__WEBPACK_IMPORTED_MODULE_13__["default"], {
    cookies
  });
  const routerContext = {
    store
  };
  const markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_8__["renderToString"])(react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_9__["StaticRouter"], {
    context: routerContext,
    location: req.url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_redux_dist_react_redux__WEBPACK_IMPORTED_MODULE_14__["Provider"], {
    store: store,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(components_root__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }))));
  const {
    status,
    url: redirectUrl
  } = routerContext;

  if (redirectUrl) {
    res.redirect(status || 302, redirectUrl);
    return;
  }

  res.status(status || 200).send(common_tags__WEBPACK_IMPORTED_MODULE_6__["html"]`
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta http-equiv="x-ua-compatible" content="ie=edge">
          <title>React SSR Boilerplate</title>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          ${assetsManifest.index.css ? `<link rel="stylesheet" href="${assetsManifest.index.css}" />` : ''}
        </head>
        <body>
          <div id="root">${markup}</div>
          <script src="${assetsManifest.index.js}" defer>
                // http://redux.js.org/recipes/ServerRendering.html#security-considerations
                window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState()).replace(/</g, '\\\u003c')}
        </script>
        </body>
      </html>
    `);
});
const _default = app;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(2).default;

  var leaveModule = __webpack_require__(2).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(assetsManifest, "assetsManifest", "/home/anders/code/react_redux_immutable/src/server/app.js");
  reactHotLoader.register(app, "app", "/home/anders/code/react_redux_immutable/src/server/app.js");
  reactHotLoader.register(_default, "default", "/home/anders/code/react_redux_immutable/src/server/app.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)(module)))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("serve-favicon");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("express-static-gzip");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("common-tags");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_render_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);
(function () {
  var enterModule = __webpack_require__(2).enterModule;

  enterModule && enterModule(module);
})();






const Root = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, Object(lib_render_routes__WEBPACK_IMPORTED_MODULE_2__["default"])(routes__WEBPACK_IMPORTED_MODULE_3__["default"]));

const _default = Object(react_hot_loader__WEBPACK_IMPORTED_MODULE_1__["hot"])(module)(Root);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(2).default;

  var leaveModule = __webpack_require__(2).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Root, "Root", "/home/anders/code/react_redux_immutable/src/components/root.js");
  reactHotLoader.register(_default, "default", "/home/anders/code/react_redux_immutable/src/components/root.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)(module)))

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_builtin_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _babel_runtime_helpers_builtin_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_builtin_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_router_redirect_with_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
/* harmony import */ var components_router_route_with_status__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23);

var _jsxFileName = "/home/anders/code/react_redux_immutable/src/lib/render-routes.js";

(function () {
  var enterModule = __webpack_require__(2).enterModule;

  enterModule && enterModule(module);
})();






const renderRoutes = routes => routes ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, routes.map((route, i) => {
  const {
    key = i,
    redirect = false,
    component: RouteComponent,
    status,
    ...routeProps
  } = route;

  if (redirect) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_router_redirect_with_status__WEBPACK_IMPORTED_MODULE_3__["default"], _babel_runtime_helpers_builtin_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, routeProps, {
      key: key,
      status: status,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: undefined
    }));
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_router_route_with_status__WEBPACK_IMPORTED_MODULE_4__["default"], _babel_runtime_helpers_builtin_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, routeProps, {
    key: key,
    status: status,
    render: props => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RouteComponent, _babel_runtime_helpers_builtin_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
      match: route.match,
      routes: route.routes,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: undefined
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }));
})) : null;

const _default = renderRoutes;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(2).default;

  var leaveModule = __webpack_require__(2).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(renderRoutes, "renderRoutes", "/home/anders/code/react_redux_immutable/src/lib/render-routes.js");
  reactHotLoader.register(_default, "default", "/home/anders/code/react_redux_immutable/src/lib/render-routes.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)(module)))

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/builtin/extends");

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_builtin_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _babel_runtime_helpers_builtin_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_builtin_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_router_status__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22);

var _jsxFileName = "/home/anders/code/react_redux_immutable/src/components/router/redirect-with-status.js";

(function () {
  var enterModule = __webpack_require__(2).enterModule;

  enterModule && enterModule(module);
})();






const RedirectWithStatus = ({
  status,
  ...redirectProps
}) => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_router_status__WEBPACK_IMPORTED_MODULE_4__["default"], {
  code: status,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__["Redirect"], _babel_runtime_helpers_builtin_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, redirectProps, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
})));

RedirectWithStatus.propTypes = {
  status: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
const _default = RedirectWithStatus;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(2).default;

  var leaveModule = __webpack_require__(2).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(RedirectWithStatus, "RedirectWithStatus", "/home/anders/code/react_redux_immutable/src/components/router/redirect-with-status.js");
  reactHotLoader.register(_default, "default", "/home/anders/code/react_redux_immutable/src/components/router/redirect-with-status.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)(module)))

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/anders/code/react_redux_immutable/src/components/router/status.js";

(function () {
  var enterModule = __webpack_require__(2).enterModule;

  enterModule && enterModule(module);
})();





const Status = ({
  code,
  children
}) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__["Route"], {
  render: ({
    staticContext
  }) => {
    if (staticContext) {
      staticContext.status = code;
    }

    return children;
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
});

Status.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.node,
  code: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
};
const _default = Status;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(2).default;

  var leaveModule = __webpack_require__(2).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Status, "Status", "/home/anders/code/react_redux_immutable/src/components/router/status.js");
  reactHotLoader.register(_default, "default", "/home/anders/code/react_redux_immutable/src/components/router/status.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)(module)))

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_builtin_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _babel_runtime_helpers_builtin_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_builtin_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_router_status__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22);

var _jsxFileName = "/home/anders/code/react_redux_immutable/src/components/router/route-with-status.js";

(function () {
  var enterModule = __webpack_require__(2).enterModule;

  enterModule && enterModule(module);
})();






const RouteWithStatus = ({
  status,
  ...routeProps
}) => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_router_status__WEBPACK_IMPORTED_MODULE_4__["default"], {
  code: status,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__["Route"], _babel_runtime_helpers_builtin_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, routeProps, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
})));

RouteWithStatus.propTypes = {
  status: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
const _default = RouteWithStatus;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(2).default;

  var leaveModule = __webpack_require__(2).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(RouteWithStatus, "RouteWithStatus", "/home/anders/code/react_redux_immutable/src/components/router/route-with-status.js");
  reactHotLoader.register(_default, "default", "/home/anders/code/react_redux_immutable/src/components/router/route-with-status.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)(module)))

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var components_layouts_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var components_views_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var components_views_about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var components_views_not_found__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);
(function () {
  var enterModule = __webpack_require__(2).enterModule;

  enterModule && enterModule(module);
})();





const _default = [{
  component: components_layouts_app__WEBPACK_IMPORTED_MODULE_0__["default"],
  routes: [{
    component: components_views_home__WEBPACK_IMPORTED_MODULE_1__["default"],
    path: '/',
    exact: true
  }, {
    component: components_views_about__WEBPACK_IMPORTED_MODULE_2__["default"],
    path: '/about',
    exact: true
  }, {
    redirect: true,
    from: '/redirect-to-about',
    to: '/about'
  }, {
    component: components_views_not_found__WEBPACK_IMPORTED_MODULE_3__["default"],
    status: 404
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(2).default;

  var leaveModule = __webpack_require__(2).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/home/anders/code/react_redux_immutable/src/routes.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)(module)))

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lib_render_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
var _jsxFileName = "/home/anders/code/react_redux_immutable/src/components/layouts/app.js";

(function () {
  var enterModule = __webpack_require__(2).enterModule;

  enterModule && enterModule(module);
})();






const AppLayout = ({
  routes
}) => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "React SSR Boilerplate"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
  to: "/",
  title: "Home",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, "Home")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
  to: "/about",
  title: "About",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, "About")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
  to: "/non-existing-page",
  title: "Non-existing page",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, "Non-existing page"))))), Object(lib_render_routes__WEBPACK_IMPORTED_MODULE_3__["default"])(routes));

AppLayout.propTypes = {
  routes: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array
};
const _default = AppLayout;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(2).default;

  var leaveModule = __webpack_require__(2).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AppLayout, "AppLayout", "/home/anders/code/react_redux_immutable/src/components/layouts/app.js");
  reactHotLoader.register(_default, "default", "/home/anders/code/react_redux_immutable/src/components/layouts/app.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)(module)))

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_PersonActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _decorators_toJS__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32);
var _jsxFileName = "/home/anders/code/react_redux_immutable/src/components/views/home.js";

(function () {
  var enterModule = __webpack_require__(2).enterModule;

  enterModule && enterModule(module);
})();







class HomeView extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.addPerson = this.addPerson.bind(this);
    this.removePerson = this.removePerson.bind(this);
  }

  addPerson() {
    const person = {
      "name": "person" + this.props.count
    };
    this.props.PersonActions.addPerson(person);
  }

  removePerson() {
    this.props.PersonActions.removePerson();
  }

  render() {
    const peopleElements = this.props.people.map(person => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, person.name));
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, "hi"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: this.addPerson,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "Add"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: this.removePerson,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, "Remove")), peopleElements);
  }

  __reactstandin__regenerateByEval(key, code) {
    this[key] = eval(code);
  }

}

const mapStateToProps = state => ({
  people: state.getIn(['person', 'people']),
  count: state.getIn(['person', 'count'])
});

const mapDispatchToProps = dispatch => ({
  PersonActions: Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])({
    addPerson: _actions_PersonActions__WEBPACK_IMPORTED_MODULE_2__["addPerson"],
    removePerson: _actions_PersonActions__WEBPACK_IMPORTED_MODULE_2__["removePerson"]
  }, dispatch)
});

const _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Object(_decorators_toJS__WEBPACK_IMPORTED_MODULE_4__["toJS"])(HomeView));

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(2).default;

  var leaveModule = __webpack_require__(2).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(HomeView, "HomeView", "/home/anders/code/react_redux_immutable/src/components/views/home.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/home/anders/code/react_redux_immutable/src/components/views/home.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/home/anders/code/react_redux_immutable/src/components/views/home.js");
  reactHotLoader.register(_default, "default", "/home/anders/code/react_redux_immutable/src/components/views/home.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)(module)))

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPerson", function() { return addPerson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removePerson", function() { return removePerson; });
/* harmony import */ var _constants_PersonConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
(function () {
  var enterModule = __webpack_require__(2).enterModule;

  enterModule && enterModule(module);
})();


function addPerson(person) {
  return async (dispatch, getState, {
    cookies
  }) => {
    dispatch({
      type: _constants_PersonConstants__WEBPACK_IMPORTED_MODULE_0__["ADD_PERSON"],
      person: person
    });
  };
}
function removePerson() {
  return async (dispatch, getState, {
    cookies
  }) => {
    dispatch({
      type: _constants_PersonConstants__WEBPACK_IMPORTED_MODULE_0__["REMOVE_PERSON"]
    });
  };
}
;

(function () {
  var reactHotLoader = __webpack_require__(2).default;

  var leaveModule = __webpack_require__(2).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(addPerson, "addPerson", "/home/anders/code/react_redux_immutable/src/actions/PersonActions.js");
  reactHotLoader.register(removePerson, "removePerson", "/home/anders/code/react_redux_immutable/src/actions/PersonActions.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)(module)))

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_PERSON", function() { return ADD_PERSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_PERSON", function() { return REMOVE_PERSON; });
(function () {
  var enterModule = __webpack_require__(2).enterModule;

  enterModule && enterModule(module);
})();

const ADD_PERSON = 'ADD_PERSON';
const REMOVE_PERSON = 'REMOVE_PERSON';
;

(function () {
  var reactHotLoader = __webpack_require__(2).default;

  var leaveModule = __webpack_require__(2).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ADD_PERSON, "ADD_PERSON", "/home/anders/code/react_redux_immutable/src/constants/PersonConstants.js");
  reactHotLoader.register(REMOVE_PERSON, "REMOVE_PERSON", "/home/anders/code/react_redux_immutable/src/constants/PersonConstants.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)(module)))

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toJS", function() { return toJS; });
/* harmony import */ var _babel_runtime_helpers_builtin_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _babel_runtime_helpers_builtin_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_builtin_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/home/anders/code/react_redux_immutable/src/components/decorators/toJS.js";

(function () {
  var enterModule = __webpack_require__(2).enterModule;

  enterModule && enterModule(module);
})();



const toJS = WrappedComponent => wrappedComponentProps => {
  const KEY = 0;
  const VALUE = 1;
  const propsJS = Object.entries(wrappedComponentProps).reduce((newProps, wrappedComponentProp) => {
    newProps[wrappedComponentProp[KEY]] = immutable__WEBPACK_IMPORTED_MODULE_2__["Iterable"].isIterable(wrappedComponentProp[VALUE]) ? wrappedComponentProp[VALUE].toJS() : wrappedComponentProp[VALUE];
    return newProps;
  }, {});
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(WrappedComponent, _babel_runtime_helpers_builtin_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, propsJS, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }));
};
;

(function () {
  var reactHotLoader = __webpack_require__(2).default;

  var leaveModule = __webpack_require__(2).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(toJS, "toJS", "/home/anders/code/react_redux_immutable/src/components/decorators/toJS.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)(module)))

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/anders/code/react_redux_immutable/src/components/views/about.js";

(function () {
  var enterModule = __webpack_require__(2).enterModule;

  enterModule && enterModule(module);
})();



const AboutView = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, "About");

const _default = AboutView;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(2).default;

  var leaveModule = __webpack_require__(2).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AboutView, "AboutView", "/home/anders/code/react_redux_immutable/src/components/views/about.js");
  reactHotLoader.register(_default, "default", "/home/anders/code/react_redux_immutable/src/components/views/about.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)(module)))

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/anders/code/react_redux_immutable/src/components/views/not-found.js";

(function () {
  var enterModule = __webpack_require__(2).enterModule;

  enterModule && enterModule(module);
})();



const NotFoundView = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, "Not Found");

const _default = NotFoundView;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(2).default;

  var leaveModule = __webpack_require__(2).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(NotFoundView, "NotFoundView", "/home/anders/code/react_redux_immutable/src/components/views/not-found.js");
  reactHotLoader.register(_default, "default", "/home/anders/code/react_redux_immutable/src/components/views/not-found.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)(module)))

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configureStore", function() { return configureStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_rootReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
(function () {
  var enterModule = __webpack_require__(2).enterModule;

  enterModule && enterModule(module);
})();





function configureStore(initialState, helpers) {
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_2__["default"], initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a.withExtraArgument(helpers))));
  return store;
}
;

(function () {
  var reactHotLoader = __webpack_require__(2).default;

  var leaveModule = __webpack_require__(2).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(configureStore, "configureStore", "/home/anders/code/react_redux_immutable/src/store/configureStore.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)(module)))

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _personReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40);
(function () {
  var enterModule = __webpack_require__(2).enterModule;

  enterModule && enterModule(module);
})();



const rootReducer = Object(redux_immutable__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  person: _personReducer__WEBPACK_IMPORTED_MODULE_1__["default"]
});
const _default = rootReducer;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(2).default;

  var leaveModule = __webpack_require__(2).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(rootReducer, "rootReducer", "/home/anders/code/react_redux_immutable/src/reducers/rootReducer.js");
  reactHotLoader.register(_default, "default", "/home/anders/code/react_redux_immutable/src/reducers/rootReducer.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)(module)))

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("redux-immutable");

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userReducer; });
/* harmony import */ var _constants_PersonConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _store_initialStoreState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41);
(function () {
  var enterModule = __webpack_require__(2).enterModule;

  enterModule && enterModule(module);
})();



function userReducer(state = _store_initialStoreState_js__WEBPACK_IMPORTED_MODULE_1__["default"].get('person'), action) {
  switch (action.type) {
    case _constants_PersonConstants__WEBPACK_IMPORTED_MODULE_0__["ADD_PERSON"]:
      {
        let people = state.get('people').toJS();
        people.push(action.person);
        let count = state.get('count');
        return state.merge({
          people,
          count: ++count
        });
      }

    case _constants_PersonConstants__WEBPACK_IMPORTED_MODULE_0__["REMOVE_PERSON"]:
      {
        let people = state.get('people').toJS();
        let count = state.get('count');
        people.pop();
        return state.merge({
          people,
          count: --count
        });
      }

    default:
      return state;
  }
}
;

(function () {
  var reactHotLoader = __webpack_require__(2).default;

  var leaveModule = __webpack_require__(2).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(userReducer, "userReducer", "/home/anders/code/react_redux_immutable/src/reducers/personReducer.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)(module)))

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = __webpack_require__(2).enterModule;

  enterModule && enterModule(module);
})();


const initialStoreState = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["fromJS"])({
  person: {
    people: [],
    count: 0
  }
});
const _default = initialStoreState;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(2).default;

  var leaveModule = __webpack_require__(2).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(initialStoreState, "initialStoreState", "/home/anders/code/react_redux_immutable/src/store/initialStoreState.js");
  reactHotLoader.register(_default, "default", "/home/anders/code/react_redux_immutable/src/store/initialStoreState.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)(module)))

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("react-redux/dist/react-redux");

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_0__);
(function () {
  var enterModule = __webpack_require__(2).enterModule;

  enterModule && enterModule(module);
})();



const createServer = handler => {
  const server = http__WEBPACK_IMPORTED_MODULE_0___default.a.createServer(handler);

  server.replaceHandler = (() => {
    let currentHandler = handler;
    return handler => {
      if (currentHandler) {
        server.removeListener('request', currentHandler);
      }

      server.addListener('request', handler);
      currentHandler = handler;
    };
  })();

  server.start = port => {
    server.listen(port, () => {
      const {
        address,
        port
      } = server.address();
      console.log(`Server listening at ${address}:${port}`);
    });
  };

  server.restart = port => {
    server.close(() => {
      server.start(port);
    });
  };

  return server;
};

const _default = createServer;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__(2).default;

  var leaveModule = __webpack_require__(2).leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(createServer, "createServer", "/home/anders/code/react_redux_immutable/src/server/lib/create-server.js");
  reactHotLoader.register(_default, "default", "/home/anders/code/react_redux_immutable/src/server/lib/create-server.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)(module)))

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map