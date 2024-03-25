/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/icons8-meteor.png */ "./src/assets/icons/icons8-meteor.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/icons/icons8-search.png */ "./src/assets/icons/icons8-search.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

    --main-app-color: #00B2A0;
}

#content {
    margin: auto;
}

header {
    box-shadow: 0ch 5px 20px 0px gray;
}

#header-content {
    display: grid;
    gap: 2rem;
    padding: 1rem;
    grid-template-columns: 2fr 3fr 2fr;
}

#title-container {
    display: flex;
    align-items: center;
    font-size: 0.75rem;
    width: auto;
}

#app-logo {
    width: 40px;
    height: 40px;
    background-color: var(--main-app-color);
    margin-right: 0.5rem;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: cover;
    border-radius: 25%;
}

#search-section {
    display: flex;
    gap: 0.5rem;
    align-items: center;
}

#location-input {
    flex: 1;
    padding: 0.5rem;
    font-size: 1.1rem;
    flex: 1;
    outline: 1px solid var(--main-app-color);
    border: none;
}

#search-button {
    height: 40px;
    aspect-ratio: 1 / 1;
    background-color: var(--main-app-color);;
    border: 1px solid var(--main-app-color);
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    border-radius: 3px;
}

#search-button:active {
    background-color: black;
}

#measurement-system-section {
    display: flex;
    justify-content: flex-end;
}

#metric-system-button {
    padding: 0.5rem;
    background-color: black;
    border: none;
    color: white;
    border-radius: 3px;
}

#imperial-system-button {
    margin-left: 0.5rem;
    padding: 0.5rem;
    background-color: var(--main-app-color);
    border: none;
    color: white;
    border-radius: 3px;
}

main {
    width: max(50%, 500px);
    padding: 2rem 0rem;
    margin: auto;
}

#current {
    margin-bottom: 4rem;
}

#current-location-data-container {
    margin-bottom: 2rem;
}

#current-location-data-container > div {
    display: flex;
    justify-content: center;
}

#current-location {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    color: var(--main-app-color);
}

#right-now {
    font-size: 1.5rem;    
    margin-bottom: 0.5rem;
}

#current-weather-icon-container {
    display: flex;
    justify-content: center;
}

#current-weather-icon {
    height: 80px;
    aspect-ratio: 1 / 1;
    object-fit: cover;
}

#current-condition-container {
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
    margin-bottom: 3rem;
}

#current-temperature-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3rem;
}

#current-temperature-container > img {
    width: 80px;
    height: 80px;
    margin-top: 0.5rem;
}

#current-temperature-value-container { 
    font-size: 3rem;
}

#current-feels-like-container {
    font-size: 1.25rem;
}

#current-temperature-unit {
    margin-left: 0.33rem;
    letter-spacing: -8px;
}

#current-feels-like-unit {
    margin-left: 0.33rem;
    letter-spacing: -3px;
}

#current-additional {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

#current-additional > div{
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

#current-wind-unit {
    margin-left: 0.33rem;
}

#current-humidity-unit {
    margin-left: 0.33rem;
}

#current-pressure-unit {
    margin-left: 0.33rem;
}

#current-uv-unit {
    margin-left: 0.33rem;
}

.additional-label {
    font-size: 1.2rem;
}

.additional-value {
    font-size: 1.5rem;
}

#current-additional img {
    margin-right: 1rem;
}

#three-day-forecast {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.daily-forecast-header {
    margin-bottom: 1.75rem;
    font-size: 1.5rem;
    text-align: center;
}

.daily-forecast {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 1.5rem;
}

.daily-day {
    font-size: 1.2rem;
}

.daily-weather-icon {
    width: 64px;
    aspect-ratio: 1 / 1;
}

.daily-condition {
    font-size: 1.2rem;
    margin-bottom: 1rem;
}

.daily-average-temperature {
    font-size: 2rem;
}

.daily-average-temperature-unit {
    margin-left: 0.33rem;
    letter-spacing: -5px;
    font-size: 2rem;
}



`, "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;;IAEV,qGAAqG;;IAErG,yBAAyB;AAC7B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,SAAS;IACT,aAAa;IACb,kCAAkC;AACtC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,uCAAuC;IACvC,oBAAoB;IACpB,yDAA0D;IAC1D,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,OAAO;IACP,eAAe;IACf,iBAAiB;IACjB,OAAO;IACP,wCAAwC;IACxC,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,uCAAuC;IACvC,uCAAuC;IACvC,yDAA0D;IAC1D,kBAAkB;AACtB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,yBAAyB;AAC7B;;AAEA;IACI,eAAe;IACf,uBAAuB;IACvB,YAAY;IACZ,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;IACnB,eAAe;IACf,uCAAuC;IACvC,YAAY;IACZ,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;IACjB,qBAAqB;IACrB,4BAA4B;AAChC;;AAEA;IACI,iBAAiB;IACjB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,oBAAoB;IACpB,oBAAoB;AACxB;;AAEA;IACI,oBAAoB;IACpB,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,2DAA2D;AAC/D;;AAEA;IACI,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,2DAA2D;AAC/D;;AAEA;IACI,sBAAsB;IACtB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;IAClB,qBAAqB;AACzB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,oBAAoB;IACpB,oBAAoB;IACpB,eAAe;AACnB","sourcesContent":["* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n\r\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n\r\n    --main-app-color: #00B2A0;\r\n}\r\n\r\n#content {\r\n    margin: auto;\r\n}\r\n\r\nheader {\r\n    box-shadow: 0ch 5px 20px 0px gray;\r\n}\r\n\r\n#header-content {\r\n    display: grid;\r\n    gap: 2rem;\r\n    padding: 1rem;\r\n    grid-template-columns: 2fr 3fr 2fr;\r\n}\r\n\r\n#title-container {\r\n    display: flex;\r\n    align-items: center;\r\n    font-size: 0.75rem;\r\n    width: auto;\r\n}\r\n\r\n#app-logo {\r\n    width: 40px;\r\n    height: 40px;\r\n    background-color: var(--main-app-color);\r\n    margin-right: 0.5rem;\r\n    background-image: url('../assets/icons/icons8-meteor.png');\r\n    background-size: cover;\r\n    border-radius: 25%;\r\n}\r\n\r\n#search-section {\r\n    display: flex;\r\n    gap: 0.5rem;\r\n    align-items: center;\r\n}\r\n\r\n#location-input {\r\n    flex: 1;\r\n    padding: 0.5rem;\r\n    font-size: 1.1rem;\r\n    flex: 1;\r\n    outline: 1px solid var(--main-app-color);\r\n    border: none;\r\n}\r\n\r\n#search-button {\r\n    height: 40px;\r\n    aspect-ratio: 1 / 1;\r\n    background-color: var(--main-app-color);;\r\n    border: 1px solid var(--main-app-color);\r\n    background-image: url('../assets/icons/icons8-search.png');\r\n    border-radius: 3px;\r\n}\r\n\r\n#search-button:active {\r\n    background-color: black;\r\n}\r\n\r\n#measurement-system-section {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n}\r\n\r\n#metric-system-button {\r\n    padding: 0.5rem;\r\n    background-color: black;\r\n    border: none;\r\n    color: white;\r\n    border-radius: 3px;\r\n}\r\n\r\n#imperial-system-button {\r\n    margin-left: 0.5rem;\r\n    padding: 0.5rem;\r\n    background-color: var(--main-app-color);\r\n    border: none;\r\n    color: white;\r\n    border-radius: 3px;\r\n}\r\n\r\nmain {\r\n    width: max(50%, 500px);\r\n    padding: 2rem 0rem;\r\n    margin: auto;\r\n}\r\n\r\n#current {\r\n    margin-bottom: 4rem;\r\n}\r\n\r\n#current-location-data-container {\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n#current-location-data-container > div {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n#current-location {\r\n    font-size: 2.5rem;\r\n    margin-bottom: 0.5rem;\r\n    color: var(--main-app-color);\r\n}\r\n\r\n#right-now {\r\n    font-size: 1.5rem;    \r\n    margin-bottom: 0.5rem;\r\n}\r\n\r\n#current-weather-icon-container {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n#current-weather-icon {\r\n    height: 80px;\r\n    aspect-ratio: 1 / 1;\r\n    object-fit: cover;\r\n}\r\n\r\n#current-condition-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    font-size: 1.5rem;\r\n    margin-bottom: 3rem;\r\n}\r\n\r\n#current-temperature-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-bottom: 3rem;\r\n}\r\n\r\n#current-temperature-container > img {\r\n    width: 80px;\r\n    height: 80px;\r\n    margin-top: 0.5rem;\r\n}\r\n\r\n#current-temperature-value-container { \r\n    font-size: 3rem;\r\n}\r\n\r\n#current-feels-like-container {\r\n    font-size: 1.25rem;\r\n}\r\n\r\n#current-temperature-unit {\r\n    margin-left: 0.33rem;\r\n    letter-spacing: -8px;\r\n}\r\n\r\n#current-feels-like-unit {\r\n    margin-left: 0.33rem;\r\n    letter-spacing: -3px;\r\n}\r\n\r\n#current-additional {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\r\n}\r\n\r\n#current-additional > div{\r\n    padding: 1rem;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n#current-wind-unit {\r\n    margin-left: 0.33rem;\r\n}\r\n\r\n#current-humidity-unit {\r\n    margin-left: 0.33rem;\r\n}\r\n\r\n#current-pressure-unit {\r\n    margin-left: 0.33rem;\r\n}\r\n\r\n#current-uv-unit {\r\n    margin-left: 0.33rem;\r\n}\r\n\r\n.additional-label {\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.additional-value {\r\n    font-size: 1.5rem;\r\n}\r\n\r\n#current-additional img {\r\n    margin-right: 1rem;\r\n}\r\n\r\n#three-day-forecast {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\r\n}\r\n\r\n.daily-forecast-header {\r\n    margin-bottom: 1.75rem;\r\n    font-size: 1.5rem;\r\n    text-align: center;\r\n}\r\n\r\n.daily-forecast {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    text-align: center;\r\n    margin-bottom: 1.5rem;\r\n}\r\n\r\n.daily-day {\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.daily-weather-icon {\r\n    width: 64px;\r\n    aspect-ratio: 1 / 1;\r\n}\r\n\r\n.daily-condition {\r\n    font-size: 1.2rem;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.daily-average-temperature {\r\n    font-size: 2rem;\r\n}\r\n\r\n.daily-average-temperature-unit {\r\n    margin-left: 0.33rem;\r\n    letter-spacing: -5px;\r\n    font-size: 2rem;\r\n}\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/api/data-api.js":
/*!*****************************!*\
  !*** ./src/api/data-api.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   API_KEY: () => (/* binding */ API_KEY),
/* harmony export */   BASE_URL: () => (/* binding */ BASE_URL),
/* harmony export */   THREE_DAY_FORECAST_METHOD: () => (/* binding */ THREE_DAY_FORECAST_METHOD)
/* harmony export */ });
const API_KEY = `53517ee71dc74692aae124933241403`;
const BASE_URL = `http://api.weatherapi.com/v1`;
const THREE_DAY_FORECAST_METHOD = 'forecast';

/***/ }),

/***/ "./src/api/weather-api.js":
/*!********************************!*\
  !*** ./src/api/weather-api.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCurentWeatherIcon: () => (/* binding */ getCurentWeatherIcon),
/* harmony export */   getCurrentFeelsLikeTemperature: () => (/* binding */ getCurrentFeelsLikeTemperature),
/* harmony export */   getCurrentHumidity: () => (/* binding */ getCurrentHumidity),
/* harmony export */   getCurrentPressure: () => (/* binding */ getCurrentPressure),
/* harmony export */   getCurrentTemperature: () => (/* binding */ getCurrentTemperature),
/* harmony export */   getCurrentUvIndex: () => (/* binding */ getCurrentUvIndex),
/* harmony export */   getCurrentWeatherCondition: () => (/* binding */ getCurrentWeatherCondition),
/* harmony export */   getCurrentWind: () => (/* binding */ getCurrentWind),
/* harmony export */   getFirstDayData: () => (/* binding */ getFirstDayData),
/* harmony export */   getForecastLocation: () => (/* binding */ getForecastLocation),
/* harmony export */   getSecondDayData: () => (/* binding */ getSecondDayData),
/* harmony export */   getThirdDayData: () => (/* binding */ getThirdDayData),
/* harmony export */   getWeatherForecastData: () => (/* binding */ getWeatherForecastData)
/* harmony export */ });
/* harmony import */ var _data_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-api */ "./src/api/data-api.js");


//Retrieves the weather forecast for 3 days, starting from the current day
//Retrieves the current weather data
//Retrieves data about the location
async function getWeatherForecastData(location) {
    const response = await fetch(`${_data_api__WEBPACK_IMPORTED_MODULE_0__.BASE_URL}/${_data_api__WEBPACK_IMPORTED_MODULE_0__.THREE_DAY_FORECAST_METHOD}.json?key=${_data_api__WEBPACK_IMPORTED_MODULE_0__.API_KEY}&q=${location}&days=3`, { mode: 'cors' });
    const weatherForecastData = await response.json();

    return weatherForecastData;
}

//Derivative functions for current weather conditions =>
function getForecastLocation(data) {
    return {
        city: data.location.name,
        country: data.location.country
    };
}

function getCurentWeatherIcon(data) {
    return `https:${data.current.condition.icon}`;
}

function getCurrentWeatherCondition(data) {
    return data.current.condition.text;
}

function getCurrentTemperature(data) {
    return {
        temperatureCelsius: data.current.temp_c,
        temperatureFahrenheit: data.current.temp_f
    }
}

function getCurrentFeelsLikeTemperature(data) {
    return {
        feelsLikeCelsius: data.current.feelslike_c,
        feelsLikeFahrenheit: data.current.feelslike_f
    }
}

function getCurrentWind(data) {
    return {
        windKph: data.current.wind_kph,
        windMph: data.current.wind_mph
    }
}

function getCurrentHumidity(data) {
    return data.current.humidity;
}

function getCurrentPressure(data) {
    return {
        pressureMbar: data.current.pressure_mb,
        pressureIn: data.current.pressure_in
    }
}

function getCurrentUvIndex(data) {
    return data.current.uv;
}

//Derivative functions for the three day forcast =>
function getFirstDayData(data) {
    const firstDayData = data.forecast.forecastday[0];

    return {
        date: firstDayData.date,
        weatherIconURL: `https:${firstDayData.day.condition.icon}`,
        condition: firstDayData.day.condition.text,
        averageTemperatureCelsius: firstDayData.day.avgtemp_c,
        averageTemperatureFahrenheit: firstDayData.day.avgtemp_f,
    }
}

function getSecondDayData(data) {
    const secondDayData = data.forecast.forecastday[1];

    return {
        date: secondDayData.date,
        weatherIconURL: `https:${secondDayData.day.condition.icon}`,
        condition: secondDayData.day.condition.text,
        averageTemperatureCelsius: secondDayData.day.avgtemp_c,
        averageTemperatureFahrenheit: secondDayData.day.avgtemp_f,
    }
}

function getThirdDayData(data) {
    const thirdDayData = data.forecast.forecastday[2];

    return {
        date: thirdDayData.date,
        weatherIconURL: `https:${thirdDayData.day.condition.icon}`,
        condition: thirdDayData.day.condition.text,
        averageTemperatureCelsius: thirdDayData.day.avgtemp_c,
        averageTemperatureFahrenheit: thirdDayData.day.avgtemp_f,
    }
}

/***/ }),

/***/ "./src/components/content/content.js":
/*!*******************************************!*\
  !*** ./src/components/content/content.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContentContainer: () => (/* binding */ createContentContainer),
/* harmony export */   getContentContainer: () => (/* binding */ getContentContainer)
/* harmony export */ });
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header */ "./src/components/header/header.js");
/* harmony import */ var _main_content_main_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main-content/main-content */ "./src/components/main-content/main-content.js");




function createContentContainer() {
    const contentContainer = document.createElement('div');
    contentContainer.id = 'content';

    contentContainer.appendChild((0,_header_header__WEBPACK_IMPORTED_MODULE_1__.createHeader)());
    contentContainer.appendChild((0,_main_content_main_content__WEBPACK_IMPORTED_MODULE_2__.createMainContent)());

    return contentContainer;
}

function getContentContainer() {
    return document.querySelector('#content');
}

/***/ }),

/***/ "./src/components/current-weather/current-weather-section.js":
/*!*******************************************************************!*\
  !*** ./src/components/current-weather/current-weather-section.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCurrentWeatherSection: () => (/* binding */ createCurrentWeatherSection),
/* harmony export */   getCurrentConditionElement: () => (/* binding */ getCurrentConditionElement),
/* harmony export */   getCurrentFeelsLikeElement: () => (/* binding */ getCurrentFeelsLikeElement),
/* harmony export */   getCurrentFeelsLikeUnitElement: () => (/* binding */ getCurrentFeelsLikeUnitElement),
/* harmony export */   getCurrentHumidityElement: () => (/* binding */ getCurrentHumidityElement),
/* harmony export */   getCurrentHumidityUnitElement: () => (/* binding */ getCurrentHumidityUnitElement),
/* harmony export */   getCurrentLocationElement: () => (/* binding */ getCurrentLocationElement),
/* harmony export */   getCurrentPressureElement: () => (/* binding */ getCurrentPressureElement),
/* harmony export */   getCurrentPressureUnitElement: () => (/* binding */ getCurrentPressureUnitElement),
/* harmony export */   getCurrentTemperatureElement: () => (/* binding */ getCurrentTemperatureElement),
/* harmony export */   getCurrentTemperatureUnitElement: () => (/* binding */ getCurrentTemperatureUnitElement),
/* harmony export */   getCurrentUvIndexElement: () => (/* binding */ getCurrentUvIndexElement),
/* harmony export */   getCurrentWeatherIconElement: () => (/* binding */ getCurrentWeatherIconElement),
/* harmony export */   getCurrentWindElement: () => (/* binding */ getCurrentWindElement),
/* harmony export */   getCurrentWindUnitElement: () => (/* binding */ getCurrentWindUnitElement)
/* harmony export */ });
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _assets_icons_icons8_temperature_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/icons/icons8-temperature.png */ "./src/assets/icons/icons8-temperature.png");
/* harmony import */ var _assets_icons_icons8_wind_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/icons/icons8-wind.png */ "./src/assets/icons/icons8-wind.png");
/* harmony import */ var _assets_icons_icons8_humidity_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/icons/icons8-humidity.png */ "./src/assets/icons/icons8-humidity.png");
/* harmony import */ var _assets_icons_icons8_pressure_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/icons/icons8-pressure.png */ "./src/assets/icons/icons8-pressure.png");
/* harmony import */ var _assets_icons_icons8_uv_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/icons/icons8-uv.png */ "./src/assets/icons/icons8-uv.png");







function createCurrentWeatherSection() {
    const currentWeatherDataContainer = document.createElement('div');

    const currentLocationDataContainer = document.createElement('div');
    const currentLocationContainer = document.createElement('div');
    const currentLocation = document.createElement('h2');
    const rightNowContainer = document.createElement('div');
    const rightNowParagraph = document.createElement('p');

    const currentWeatherIconContainer = document.createElement('div');
    const currentWeatherIcon = new Image();

    const currentConditionContainer = document.createElement('div');
    const currentConditionParagraph = document.createElement('p');

    const currentTemperatureContainer = document.createElement('div');
    const currentTemperatureIcon = new Image();
    const currentTemperatureValuesContainer = document.createElement('div');
    const currentTemperatureValueContainer = document.createElement('div');
    const currentTemperatureValueSpan = document.createElement('span');
    const currentTemperatureUnitSpan = document.createElement('span');
    const currentFeelsLikeContainer = document.createElement('div');
    const currentFeelsLikeValueSpan = document.createElement('span');
    const currentFeelsLikeUnitSpan = document.createElement('span');

    const currentAdditionalContainer = document.createElement('div');

    const currentWindContainer = document.createElement('div');
    const windIcon = document.createElement('img');
    const windDataContainer = document.createElement('div');
    const windParagraph = document.createElement('p');
    const windValueSpan = document.createElement('span');
    const windValueUnitSpan = document.createElement('span');

    const currentHumidityContainer = document.createElement('div');
    const humidityIcon = document.createElement('img');
    const humidityDataContainer = document.createElement('div');
    const humidityParagraph = document.createElement('p');
    const humidityValueSpan = document.createElement('span');
    const humidityValueUnitSpan = document.createElement('span');

    const currentPressureContainer = document.createElement('div');
    const pressureIcon = document.createElement('img');
    const pressureDataContainer = document.createElement('div');
    const pressureParagraph = document.createElement('p');
    const pressureValueSpan = document.createElement('span');
    const pressureValueUnitSpan = document.createElement('span');

    const currentUvIndexContainer = document.createElement('div');
    const uvIndexIcon = document.createElement('img');
    const uvIndexDataContainer = document.createElement('div');
    const uvIndexParagraph = document.createElement('p');
    const uvIndexValueSpan = document.createElement('span');

    //Assigning id selectors to current weather section elements
    currentWeatherDataContainer.id = 'current';
    currentLocationDataContainer.id = 'current-location-data-container';

    currentLocation.id = 'current-location';
    rightNowParagraph.id = 'right-now';

    currentWeatherIconContainer.id = 'current-weather-icon-container';
    currentWeatherIcon.id = 'current-weather-icon';

    currentConditionContainer.id = 'current-condition-container';
    currentConditionParagraph.id = 'current-condition';

    currentTemperatureContainer.id = 'current-temperature-container';
    currentTemperatureValuesContainer.id = 'current-temperature-values-container';
    currentTemperatureValueContainer.id = 'current-temperature-value-container';
    currentTemperatureValueSpan.id = 'current-temperature';
    currentTemperatureUnitSpan.id = 'current-temperature-unit';

    currentFeelsLikeContainer.id = 'current-feels-like-container';
    currentFeelsLikeValueSpan.id = 'current-feels-like';
    currentFeelsLikeUnitSpan.id = 'current-feels-like-unit';

    currentAdditionalContainer.id = 'current-additional';

    currentWindContainer.id = 'current-wind-container';
    windValueSpan.id = 'current-wind';
    windValueUnitSpan.id = 'current-wind-unit';

    currentHumidityContainer.id = 'current-humidity-container';
    humidityValueSpan.id = 'current-humidity';
    humidityValueUnitSpan.id = 'current-humidity-unit';

    currentPressureContainer.id = 'current-pressure-container';
    pressureValueSpan.id = 'current-pressure';
    pressureValueUnitSpan.id = 'current-pressure-unit';

    currentUvIndexContainer.id = 'current-uv-container';
    uvIndexValueSpan.id = 'current-uv';

    //Assigning class selectors to current weather section elements
    windParagraph.classList.add('additional-label');
    windValueSpan.classList.add('additional-value');
    windValueUnitSpan.classList.add('additional-value');

    humidityParagraph.classList.add('additional-label');
    humidityValueSpan.classList.add('additional-value');
    humidityValueUnitSpan.classList.add('additional-value');

    pressureParagraph.classList.add('additional-label');
    pressureValueSpan.classList.add('additional-value');
    pressureValueUnitSpan.classList.add('additional-value');

    uvIndexParagraph.classList.add('additional-label');
    uvIndexValueSpan.classList.add('additional-value');

    //Assigning property values to current weater section elements
    rightNowParagraph.textContent = 'Right Now';
    windParagraph.textContent = 'Wind';
    humidityParagraph.textContent = 'Humidity';
    pressureParagraph.textContent = 'Pressure';
    uvIndexParagraph.textContent = 'UV Index';
   
    currentTemperatureIcon.src = `${_assets_icons_icons8_temperature_png__WEBPACK_IMPORTED_MODULE_1__}`;
    windIcon.src = `${_assets_icons_icons8_wind_png__WEBPACK_IMPORTED_MODULE_2__}`;
    humidityIcon.src = `${_assets_icons_icons8_humidity_png__WEBPACK_IMPORTED_MODULE_3__}`;
    pressureIcon.src = `${_assets_icons_icons8_pressure_png__WEBPACK_IMPORTED_MODULE_4__}`;
    uvIndexIcon.src = `${_assets_icons_icons8_uv_png__WEBPACK_IMPORTED_MODULE_5__}`;

    //Creating the structure of the current weather section
    currentWeatherDataContainer.appendChild(currentLocationDataContainer);
    currentWeatherDataContainer.appendChild(currentWeatherIconContainer);
    currentWeatherDataContainer.appendChild(currentConditionContainer);
    currentWeatherDataContainer.appendChild(currentTemperatureContainer);
    currentWeatherDataContainer.appendChild(currentAdditionalContainer);

    currentLocationDataContainer.appendChild(currentLocationContainer);
    currentLocationDataContainer.appendChild(rightNowContainer);

    currentLocationContainer.appendChild(currentLocation);
    rightNowContainer.appendChild(rightNowParagraph);

    currentWeatherIconContainer.appendChild(currentWeatherIcon);
    currentConditionContainer.appendChild(currentConditionParagraph);

    currentTemperatureContainer.appendChild(currentTemperatureIcon);
    currentTemperatureContainer.appendChild(currentTemperatureValuesContainer);
    currentTemperatureValuesContainer.appendChild(currentTemperatureValueContainer);
    currentTemperatureValueContainer.appendChild(currentTemperatureValueSpan);
    currentTemperatureValueContainer.appendChild(currentTemperatureUnitSpan);
    currentTemperatureValuesContainer.appendChild(currentFeelsLikeContainer);
    currentFeelsLikeContainer.appendChild(currentFeelsLikeValueSpan);
    currentFeelsLikeContainer.appendChild(currentFeelsLikeUnitSpan);

    currentAdditionalContainer.appendChild(currentWindContainer);
    currentAdditionalContainer.appendChild(currentHumidityContainer);
    currentAdditionalContainer.appendChild(currentPressureContainer);
    currentAdditionalContainer.appendChild(currentUvIndexContainer);

    currentWindContainer.appendChild(windIcon);
    currentWindContainer.appendChild(windDataContainer);
    windDataContainer.appendChild(windParagraph);
    windDataContainer.appendChild(windValueSpan);
    windDataContainer.appendChild(windValueUnitSpan);

    currentHumidityContainer.appendChild(humidityIcon);
    currentHumidityContainer.appendChild(humidityDataContainer);
    humidityDataContainer.appendChild(humidityParagraph);
    humidityDataContainer.appendChild(humidityValueSpan);
    humidityDataContainer.appendChild(humidityValueUnitSpan);

    currentPressureContainer.appendChild(pressureIcon);
    currentPressureContainer.appendChild(pressureDataContainer);
    pressureDataContainer.appendChild(pressureParagraph);
    pressureDataContainer.appendChild(pressureValueSpan);
    pressureDataContainer.appendChild(pressureValueUnitSpan);

    currentUvIndexContainer.appendChild(uvIndexIcon);
    currentUvIndexContainer.appendChild(uvIndexDataContainer);
    uvIndexDataContainer.appendChild(uvIndexParagraph);
    uvIndexDataContainer.appendChild(uvIndexValueSpan);

    return currentWeatherDataContainer;
}

//Current Weather UI Element Getters
//Getters for elements that display data values
function getCurrentLocationElement() {
    return document.querySelector('#current-location');
}

function getCurrentWeatherIconElement() {
    return document.querySelector('#current-weather-icon');
}

function getCurrentConditionElement() {
    return document.querySelector('#current-condition');
}

function getCurrentTemperatureElement() {
    return document.querySelector('#current-temperature');
}

function getCurrentFeelsLikeElement() {
    return document.querySelector('#current-feels-like');
}

function getCurrentWindElement() {
    return document.querySelector('#current-wind');
}

function getCurrentHumidityElement() {
    return document.querySelector('#current-humidity');
}

function getCurrentPressureElement() {
    return document.querySelector('#current-pressure');
}

function getCurrentUvIndexElement() {
    return document.querySelector('#current-uv');
}

//Getters for elements that display data units
function getCurrentTemperatureUnitElement() {
    return document.querySelector('#current-temperature-unit');
}

function getCurrentFeelsLikeUnitElement() {
    return document.querySelector('#current-feels-like-unit');
}

function getCurrentWindUnitElement() {
    return document.querySelector('#current-wind-unit');
}

function getCurrentHumidityUnitElement() {
    return document.querySelector('#current-humidity-unit');
}

function getCurrentPressureUnitElement() {
    return document.querySelector('#current-pressure-unit');
}

/***/ }),

/***/ "./src/components/forecast/forecast-section.js":
/*!*****************************************************!*\
  !*** ./src/components/forecast/forecast-section.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createForecastSection: () => (/* binding */ createForecastSection),
/* harmony export */   getFirstDayForecastElement: () => (/* binding */ getFirstDayForecastElement),
/* harmony export */   getSecondDayForecastElement: () => (/* binding */ getSecondDayForecastElement),
/* harmony export */   getThirdDayForecastElement: () => (/* binding */ getThirdDayForecastElement)
/* harmony export */ });
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/styles.css */ "./src/styles/styles.css");


function createForecastSection() {
    const forecastContainer = document.createElement('div');

    const firstDayContainer = document.createElement('div');
    const firstDayParagraph = document.createElement('p');
    const firstDayWeatherIcon = new Image();
    const firstDayCondition = document.createElement('p');
    const firstDayAverageTemperatureContainer = document.createElement('div');
    const firstDayAverageTemperature = document.createElement('span');
    const firstDayAverageTemperatureUnit = document.createElement('span');

    const secondDayContainer = document.createElement('div');
    const secondDayParagraph = document.createElement('p');
    const secondDayWeatherIcon = new Image();
    const secondDayCondition = document.createElement('p');
    const secondDayAverageTemperatureContainer = document.createElement('div');
    const secondDayAverageTemperature = document.createElement('span');
    const secondDayAverageTemperatureUnit = document.createElement('span');

    const thirdDayContainer = document.createElement('div');
    const thirdDayParagraph = document.createElement('p');
    const thirdDayWeatherIcon = new Image();
    const thirdDayCondition = document.createElement('p');
    const thirdDayAverageTemperatureContainer = document.createElement('div');
    const thirdDayAverageTemperature = document.createElement('span');
    const thirdDayAverageTemperatureUnit = document.createElement('span');

    //Assigning id selectors to forecast section elements
    forecastContainer.id = 'three-day-forecast';
    firstDayContainer.id = 'first-day';
    firstDayAverageTemperatureContainer.id = 'first-day-temperature-container';
    secondDayContainer.id= 'second-day';
    secondDayAverageTemperatureContainer.id = 'second-day-temperature-container';
    thirdDayContainer.id = 'third-day';
    thirdDayAverageTemperatureContainer.id = 'third-day-temperature-container';

    //Assigning class selectors to forecast section elements
    firstDayContainer.classList.add('daily-forecast');
    firstDayParagraph.classList.add('daily-day');
    firstDayWeatherIcon.classList.add('daily-weather-icon');
    firstDayCondition.classList.add('daily-condition');
    firstDayAverageTemperature.classList.add('daily-average-temperature');
    firstDayAverageTemperatureUnit.classList.add('daily-average-temperature-unit');

    secondDayContainer.classList.add('daily-forecast');
    secondDayParagraph.classList.add('daily-day');
    secondDayWeatherIcon.classList.add('daily-weather-icon');
    secondDayCondition.classList.add('daily-condition');
    secondDayAverageTemperature.classList.add('daily-average-temperature');
    secondDayAverageTemperatureUnit.classList.add('daily-average-temperature-unit');
    
    thirdDayContainer.classList.add('daily-forecast');
    thirdDayParagraph.classList.add('daily-day');
    thirdDayWeatherIcon.classList.add('daily-weather-icon');
    thirdDayCondition.classList.add('daily-condition');
    thirdDayAverageTemperature.classList.add('daily-average-temperature');
    thirdDayAverageTemperatureUnit.classList.add('daily-average-temperature-unit');

    forecastContainer.appendChild(firstDayContainer);
    forecastContainer.appendChild(secondDayContainer);
    forecastContainer.appendChild(thirdDayContainer);

    firstDayContainer.appendChild(firstDayParagraph);
    firstDayContainer.appendChild(firstDayWeatherIcon);
    firstDayContainer.appendChild(firstDayCondition);
    firstDayContainer.appendChild(firstDayAverageTemperatureContainer);
    firstDayAverageTemperatureContainer.appendChild(firstDayAverageTemperature);
    firstDayAverageTemperatureContainer.appendChild(firstDayAverageTemperatureUnit);

    secondDayContainer.appendChild(secondDayParagraph);
    secondDayContainer.appendChild(secondDayWeatherIcon);
    secondDayContainer.appendChild(secondDayCondition);
    secondDayContainer.appendChild(secondDayAverageTemperatureContainer);
    secondDayAverageTemperatureContainer.appendChild(secondDayAverageTemperature);
    secondDayAverageTemperatureContainer.appendChild(secondDayAverageTemperatureUnit);

    thirdDayContainer.appendChild(thirdDayParagraph);
    thirdDayContainer.appendChild(thirdDayWeatherIcon);
    thirdDayContainer.appendChild(thirdDayCondition);
    thirdDayContainer.appendChild(thirdDayAverageTemperatureContainer);
    thirdDayAverageTemperatureContainer.appendChild(thirdDayAverageTemperature);
    thirdDayAverageTemperatureContainer.appendChild(thirdDayAverageTemperatureUnit);
    
    return forecastContainer;
}

function getFirstDayForecastElement() {
    return document.querySelector('#first-day');
}

function getSecondDayForecastElement() {
    return document.querySelector('#second-day');
}

function getThirdDayForecastElement() {
    return document.querySelector('#third-day');
}

/***/ }),

/***/ "./src/components/header/header.js":
/*!*****************************************!*\
  !*** ./src/components/header/header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createHeader: () => (/* binding */ createHeader),
/* harmony export */   getImperialSystemButton: () => (/* binding */ getImperialSystemButton),
/* harmony export */   getLocationSearchField: () => (/* binding */ getLocationSearchField),
/* harmony export */   getMetricSystemButton: () => (/* binding */ getMetricSystemButton),
/* harmony export */   getSearchButton: () => (/* binding */ getSearchButton)
/* harmony export */ });
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _units_measurement_sistem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../units/measurement-sistem */ "./src/units/measurement-sistem.js");



function createHeader() {
    const header = document.createElement('header');
    const headerContent = document.createElement('div');

    const titleContainer = document.createElement('div');
    const appLogo = document.createElement('div');
    const title = document.createElement('h1');

    const searchSection = document.createElement('div');
    const locationInput = document.createElement('input');
    const searchButton = document.createElement('button');

    const measurementSystemSection = document.createElement('div');
    const metricSystemButton = document.createElement('button');
    const imperialSystemButton = document.createElement('button');

    //Assigning id's to header elements
    headerContent.id = 'header-content';
    titleContainer.id = 'title-container';
    appLogo.id = 'app-logo';

    searchSection.id = 'search-section';
    locationInput.id = 'location-input';
    searchButton.id = 'search-button';

    measurementSystemSection.id = 'measurement-system-section';
    metricSystemButton.id = 'metric-system-button';
    imperialSystemButton.id = 'imperial-system-button';

    //Assigning property values to header elemennts
    title.textContent = "WeatherApp";
    metricSystemButton.textContent = 'Metric';
    imperialSystemButton.textContent = 'Imperial';

    //Creating the structure of the header
    header.appendChild(headerContent);
    headerContent.appendChild(titleContainer);
    headerContent.appendChild(searchSection);
    headerContent.appendChild(measurementSystemSection);

    titleContainer.appendChild(appLogo);
    titleContainer.appendChild(title);

    searchSection.appendChild(locationInput);
    searchSection.appendChild(searchButton);

    measurementSystemSection.appendChild(metricSystemButton);
    measurementSystemSection.appendChild(imperialSystemButton);

    return header;
}

function getLocationSearchField() {
    return document.querySelector('#location-input');
}

function getSearchButton() {
    return document.querySelector('#search-button');
}

function getMetricSystemButton() {
    return document.querySelector('#metric-system-button');
}

function getImperialSystemButton() {
    return document.querySelector('#imperial-system-button');
}

/***/ }),

/***/ "./src/components/main-content/main-content.js":
/*!*****************************************************!*\
  !*** ./src/components/main-content/main-content.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMainContent: () => (/* binding */ createMainContent),
/* harmony export */   getMainContent: () => (/* binding */ getMainContent)
/* harmony export */ });
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _current_weather_current_weather_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../current-weather/current-weather-section */ "./src/components/current-weather/current-weather-section.js");
/* harmony import */ var _forecast_forecast_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../forecast/forecast-section */ "./src/components/forecast/forecast-section.js");




function createMainContent() {
    const main = document.createElement('main');
    main.id = 'main';

    const header = document.createElement('h3');
    header.classList.add('daily-forecast-header');
    header.textContent = 'THREE DAY FORECAST';

    main.appendChild((0,_current_weather_current_weather_section__WEBPACK_IMPORTED_MODULE_1__.createCurrentWeatherSection)());
    main.appendChild(header);
    main.appendChild((0,_forecast_forecast_section__WEBPACK_IMPORTED_MODULE_2__.createForecastSection)());

    return main;
}

function getMainContent() {
    return document.querySelector('#main');
}

/***/ }),

/***/ "./src/functions/main.js":
/*!*******************************!*\
  !*** ./src/functions/main.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateWeatherForecast: () => (/* binding */ updateWeatherForecast)
/* harmony export */ });
/* harmony import */ var _api_weather_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/weather-api */ "./src/api/weather-api.js");
/* harmony import */ var _components_current_weather_current_weather_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/current-weather/current-weather-section */ "./src/components/current-weather/current-weather-section.js");
/* harmony import */ var _components_forecast_forecast_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/forecast/forecast-section */ "./src/components/forecast/forecast-section.js");
/* harmony import */ var _helper_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper/date */ "./src/helper/date.js");
/* harmony import */ var _units_units__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../units/units */ "./src/units/units.js");






function updateWeatherForecast(location, measurementSystem) {
    (0,_api_weather_api__WEBPACK_IMPORTED_MODULE_0__.getWeatherForecastData)(location)
        .then((data) => {
            //Current weather data
            const currentLocationData = (0,_api_weather_api__WEBPACK_IMPORTED_MODULE_0__.getForecastLocation)(data);
            const currentWeatherIconData = (0,_api_weather_api__WEBPACK_IMPORTED_MODULE_0__.getCurentWeatherIcon)(data);
            const currentConditionData = (0,_api_weather_api__WEBPACK_IMPORTED_MODULE_0__.getCurrentWeatherCondition)(data);
            const currentTemperatureData = (0,_api_weather_api__WEBPACK_IMPORTED_MODULE_0__.getCurrentTemperature)(data);
            const currentWindData = (0,_api_weather_api__WEBPACK_IMPORTED_MODULE_0__.getCurrentWind)(data);
            const currentHumidityData = (0,_api_weather_api__WEBPACK_IMPORTED_MODULE_0__.getCurrentHumidity)(data);
            const currentPressureData = (0,_api_weather_api__WEBPACK_IMPORTED_MODULE_0__.getCurrentPressure)(data);
            const currentUvIndexData = (0,_api_weather_api__WEBPACK_IMPORTED_MODULE_0__.getCurrentUvIndex)(data);
            const currentFeelsLikeTemperatureData = (0,_api_weather_api__WEBPACK_IMPORTED_MODULE_0__.getCurrentFeelsLikeTemperature)(data);

            //Current weather data values display
            (0,_components_current_weather_current_weather_section__WEBPACK_IMPORTED_MODULE_1__.getCurrentLocationElement)().textContent = `${currentLocationData.city}, ${currentLocationData.country}`;
            (0,_components_current_weather_current_weather_section__WEBPACK_IMPORTED_MODULE_1__.getCurrentWeatherIconElement)().src = `${currentWeatherIconData}`;
            (0,_components_current_weather_current_weather_section__WEBPACK_IMPORTED_MODULE_1__.getCurrentConditionElement)().textContent = `${currentConditionData}`;

            (0,_components_current_weather_current_weather_section__WEBPACK_IMPORTED_MODULE_1__.getCurrentHumidityElement)().textContent = `${currentHumidityData}`;
            (0,_components_current_weather_current_weather_section__WEBPACK_IMPORTED_MODULE_1__.getCurrentUvIndexElement)().textContent = `${currentUvIndexData}`;

            //Forecast data display
            const firstDayData = (0,_api_weather_api__WEBPACK_IMPORTED_MODULE_0__.getFirstDayData)(data);
            const secondDayData = (0,_api_weather_api__WEBPACK_IMPORTED_MODULE_0__.getSecondDayData)(data);
            const thirdDayData = (0,_api_weather_api__WEBPACK_IMPORTED_MODULE_0__.getThirdDayData)(data);

            const firstDayContainer = (0,_components_forecast_forecast_section__WEBPACK_IMPORTED_MODULE_2__.getFirstDayForecastElement)();
            const secondDayContainer = (0,_components_forecast_forecast_section__WEBPACK_IMPORTED_MODULE_2__.getSecondDayForecastElement)();
            const thirdDayContainer = (0,_components_forecast_forecast_section__WEBPACK_IMPORTED_MODULE_2__.getThirdDayForecastElement)();

            const firstDay = (0,_helper_date__WEBPACK_IMPORTED_MODULE_3__.getDayName)(firstDayData.date);
            const secondDay = (0,_helper_date__WEBPACK_IMPORTED_MODULE_3__.getDayName)(secondDayData.date);
            const thirdDay = (0,_helper_date__WEBPACK_IMPORTED_MODULE_3__.getDayName)(thirdDayData.date);

            firstDayContainer.children[0].textContent = firstDay;
            firstDayContainer.children[1].src = firstDayData.weatherIconURL;
            firstDayContainer.children[2].textContent = firstDayData.condition;

            secondDayContainer.children[0].textContent = secondDay;
            secondDayContainer.children[1].src = secondDayData.weatherIconURL;
            secondDayContainer.children[2].textContent = secondDayData.condition;

            thirdDayContainer.children[0].textContent = thirdDay;
            thirdDayContainer.children[1].src = thirdDayData.weatherIconURL;
            thirdDayContainer.children[2].textContent = thirdDayData.condition;


            if (measurementSystem === 'Metric') {
                (0,_components_current_weather_current_weather_section__WEBPACK_IMPORTED_MODULE_1__.getCurrentTemperatureElement)().textContent = `${currentTemperatureData.temperatureCelsius}`;
                (0,_components_current_weather_current_weather_section__WEBPACK_IMPORTED_MODULE_1__.getCurrentFeelsLikeElement)().textContent = `Feels like: ${currentFeelsLikeTemperatureData.feelsLikeCelsius}`;

                (0,_components_current_weather_current_weather_section__WEBPACK_IMPORTED_MODULE_1__.getCurrentWindElement)().textContent = `${currentWindData.windKph}`;
                (0,_components_current_weather_current_weather_section__WEBPACK_IMPORTED_MODULE_1__.getCurrentPressureElement)().textContent = `${currentPressureData.pressureMbar}`;

                firstDayContainer.children[3].children[0].textContent = firstDayData.averageTemperatureCelsius;
                firstDayContainer.children[3].children[1].textContent = _units_units__WEBPACK_IMPORTED_MODULE_4__.temperatureUnits.celsius;

                secondDayContainer.children[3].children[0].textContent = secondDayData.averageTemperatureCelsius;
                secondDayContainer.children[3].children[1].textContent = _units_units__WEBPACK_IMPORTED_MODULE_4__.temperatureUnits.celsius;

                thirdDayContainer.children[3].children[0].textContent = thirdDayData.averageTemperatureCelsius;
                thirdDayContainer.children[3].children[1].textContent = _units_units__WEBPACK_IMPORTED_MODULE_4__.temperatureUnits.celsius;

                displayMetricSystemUnits();
            } else if (measurementSystem === 'Imperial') {
                (0,_components_current_weather_current_weather_section__WEBPACK_IMPORTED_MODULE_1__.getCurrentTemperatureElement)().textContent = `${currentTemperatureData.temperatureFahrenheit}`;
                (0,_components_current_weather_current_weather_section__WEBPACK_IMPORTED_MODULE_1__.getCurrentFeelsLikeElement)().textContent = `Feels like: ${currentFeelsLikeTemperatureData.feelsLikeFahrenheit}`;

                (0,_components_current_weather_current_weather_section__WEBPACK_IMPORTED_MODULE_1__.getCurrentWindElement)().textContent = `${currentWindData.windMph}`;
                (0,_components_current_weather_current_weather_section__WEBPACK_IMPORTED_MODULE_1__.getCurrentPressureElement)().textContent = `${currentPressureData.pressureIn}`;

                firstDayContainer.children[3].children[0].textContent = firstDayData.averageTemperatureFahrenheit;
                firstDayContainer.children[3].children[1].textContent = _units_units__WEBPACK_IMPORTED_MODULE_4__.temperatureUnits.fahrenheit;

                secondDayContainer.children[3].children[0].textContent = secondDayData.averageTemperatureFahrenheit;
                secondDayContainer.children[3].children[1].textContent = _units_units__WEBPACK_IMPORTED_MODULE_4__.temperatureUnits.fahrenheit;

                thirdDayContainer.children[3].children[0].textContent = thirdDayData.averageTemperatureFahrenheit;
                thirdDayContainer.children[3].children[1].textContent = _units_units__WEBPACK_IMPORTED_MODULE_4__.temperatureUnits.fahrenheit;

                displayImperialSystemUnits();
            }
        }).catch((error) => {
            console.log(error);
        });
}

function displayMetricSystemUnits() {
    (0,_components_current_weather_current_weather_section__WEBPACK_IMPORTED_MODULE_1__.getCurrentTemperatureUnitElement)().textContent = `${_units_units__WEBPACK_IMPORTED_MODULE_4__.temperatureUnits.celsius}`;
    (0,_components_current_weather_current_weather_section__WEBPACK_IMPORTED_MODULE_1__.getCurrentFeelsLikeUnitElement)().textContent = `${_units_units__WEBPACK_IMPORTED_MODULE_4__.temperatureUnits.celsius}`;
    (0,_components_current_weather_current_weather_section__WEBPACK_IMPORTED_MODULE_1__.getCurrentWindUnitElement)().textContent = _units_units__WEBPACK_IMPORTED_MODULE_4__.windSpeedUnits.kph;
    (0,_components_current_weather_current_weather_section__WEBPACK_IMPORTED_MODULE_1__.getCurrentHumidityUnitElement)().textContent = _units_units__WEBPACK_IMPORTED_MODULE_4__.humidityUnit;
    (0,_components_current_weather_current_weather_section__WEBPACK_IMPORTED_MODULE_1__.getCurrentPressureUnitElement)().textContent = _units_units__WEBPACK_IMPORTED_MODULE_4__.pressureUnits.mbar;
}

function displayImperialSystemUnits() {
    (0,_components_current_weather_current_weather_section__WEBPACK_IMPORTED_MODULE_1__.getCurrentTemperatureUnitElement)().textContent = `${_units_units__WEBPACK_IMPORTED_MODULE_4__.temperatureUnits.fahrenheit}`;
    (0,_components_current_weather_current_weather_section__WEBPACK_IMPORTED_MODULE_1__.getCurrentFeelsLikeUnitElement)().textContent = `${_units_units__WEBPACK_IMPORTED_MODULE_4__.temperatureUnits.fahrenheit}`;
    (0,_components_current_weather_current_weather_section__WEBPACK_IMPORTED_MODULE_1__.getCurrentWindUnitElement)().textContent = _units_units__WEBPACK_IMPORTED_MODULE_4__.windSpeedUnits.mph;
    (0,_components_current_weather_current_weather_section__WEBPACK_IMPORTED_MODULE_1__.getCurrentHumidityUnitElement)().textContent = _units_units__WEBPACK_IMPORTED_MODULE_4__.humidityUnit;
    (0,_components_current_weather_current_weather_section__WEBPACK_IMPORTED_MODULE_1__.getCurrentPressureUnitElement)().textContent = _units_units__WEBPACK_IMPORTED_MODULE_4__.pressureUnits.inches;
}


/***/ }),

/***/ "./src/helper/date.js":
/*!****************************!*\
  !*** ./src/helper/date.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDayName: () => (/* binding */ getDayName)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/getDay.mjs");


function getDayName(date) {
    const dayNumber = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.getDay)(date);

    switch(dayNumber) {
        case 1: return 'Monday';
        case 2: return 'Tuesday';
        case 3: return 'Wednesday';
        case 4: return 'Thursday';
        case 5: return 'Friday';
        case 6: return 'Saturday';
        case 7: return 'Sunday';
    }
}

/***/ }),

/***/ "./src/helper/init.js":
/*!****************************!*\
  !*** ./src/helper/init.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initializeWebsite: () => (/* binding */ initializeWebsite)
/* harmony export */ });
/* harmony import */ var _components_content_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/content/content */ "./src/components/content/content.js");
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header/header */ "./src/components/header/header.js");
/* harmony import */ var _functions_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions/main */ "./src/functions/main.js");
/* harmony import */ var _units_measurement_sistem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../units/measurement-sistem */ "./src/units/measurement-sistem.js");





function initializeWebsite() {
    document.body.appendChild((0,_components_content_content__WEBPACK_IMPORTED_MODULE_0__.createContentContainer)());
    let initialLocation = 'Belgrade';

    //First oad (Default)
    (0,_functions_main__WEBPACK_IMPORTED_MODULE_2__.updateWeatherForecast)(initialLocation, _units_measurement_sistem__WEBPACK_IMPORTED_MODULE_3__.measurementSystem);
    
    (0,_components_header_header__WEBPACK_IMPORTED_MODULE_1__.getSearchButton)().addEventListener('click', () => { 
        const location = (0,_components_header_header__WEBPACK_IMPORTED_MODULE_1__.getLocationSearchField)().value;
        initialLocation = location;

        (0,_functions_main__WEBPACK_IMPORTED_MODULE_2__.updateWeatherForecast)(location, _units_measurement_sistem__WEBPACK_IMPORTED_MODULE_3__.measurementSystem);
    });

    const metricSystemButton = (0,_components_header_header__WEBPACK_IMPORTED_MODULE_1__.getMetricSystemButton)();
    const imperialSystemButton = (0,_components_header_header__WEBPACK_IMPORTED_MODULE_1__.getImperialSystemButton)();

    metricSystemButton.addEventListener('click', () => {
        if (_units_measurement_sistem__WEBPACK_IMPORTED_MODULE_3__.measurementSystem === 'Metric') {
            return;
        } else if (_units_measurement_sistem__WEBPACK_IMPORTED_MODULE_3__.measurementSystem === 'Imperial') {
            (0,_units_measurement_sistem__WEBPACK_IMPORTED_MODULE_3__.changeToMetricMeasurementSystem)();
            (0,_functions_main__WEBPACK_IMPORTED_MODULE_2__.updateWeatherForecast)(initialLocation, _units_measurement_sistem__WEBPACK_IMPORTED_MODULE_3__.measurementSystem);
        }
    });

    imperialSystemButton.addEventListener('click', () => {
        if (_units_measurement_sistem__WEBPACK_IMPORTED_MODULE_3__.measurementSystem === 'Imperial') {
            return;
        } else if (_units_measurement_sistem__WEBPACK_IMPORTED_MODULE_3__.measurementSystem === 'Metric') {
            (0,_units_measurement_sistem__WEBPACK_IMPORTED_MODULE_3__.changeToImperialMeasurementSystem)();
            (0,_functions_main__WEBPACK_IMPORTED_MODULE_2__.updateWeatherForecast)(initialLocation, _units_measurement_sistem__WEBPACK_IMPORTED_MODULE_3__.measurementSystem);
        }
    });
}


/***/ }),

/***/ "./src/units/measurement-sistem.js":
/*!*****************************************!*\
  !*** ./src/units/measurement-sistem.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeToImperialMeasurementSystem: () => (/* binding */ changeToImperialMeasurementSystem),
/* harmony export */   changeToMetricMeasurementSystem: () => (/* binding */ changeToMetricMeasurementSystem),
/* harmony export */   measurementSystem: () => (/* binding */ measurementSystem)
/* harmony export */ });
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/header/header */ "./src/components/header/header.js");
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/styles.css */ "./src/styles/styles.css");



let measurementSystem = 'Metric';

function setMeasurementSystem(value) {
    measurementSystem = value;
}

function changeToMetricMeasurementSystem() {
    (0,_components_header_header__WEBPACK_IMPORTED_MODULE_0__.getMetricSystemButton)().style.backgroundColor = 'black';
    (0,_components_header_header__WEBPACK_IMPORTED_MODULE_0__.getImperialSystemButton)().style.backgroundColor = 'var(--main-app-color)';
    setMeasurementSystem('Metric');
}

function changeToImperialMeasurementSystem() {
    (0,_components_header_header__WEBPACK_IMPORTED_MODULE_0__.getImperialSystemButton)().style.backgroundColor = 'black';
    (0,_components_header_header__WEBPACK_IMPORTED_MODULE_0__.getMetricSystemButton)().style.backgroundColor = 'var(--main-app-color)';
    setMeasurementSystem('Imperial');
}


/***/ }),

/***/ "./src/units/units.js":
/*!****************************!*\
  !*** ./src/units/units.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   humidityUnit: () => (/* binding */ humidityUnit),
/* harmony export */   pressureUnits: () => (/* binding */ pressureUnits),
/* harmony export */   temperatureUnits: () => (/* binding */ temperatureUnits),
/* harmony export */   windSpeedUnits: () => (/* binding */ windSpeedUnits)
/* harmony export */ });
const temperatureUnits = {
    celsius: '°C',
    fahrenheit: '°F',
};

const windSpeedUnits = {
    kph: 'km/h',
    mph: 'm/h'
};

const humidityUnit = '%';

const pressureUnits = {
    mbar: 'mbar',
    inches: 'in'
};



/***/ }),

/***/ "./src/assets/icons/icons8-humidity.png":
/*!**********************************************!*\
  !*** ./src/assets/icons/icons8-humidity.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/1897b35fcf07a56f7484.png";

/***/ }),

/***/ "./src/assets/icons/icons8-meteor.png":
/*!********************************************!*\
  !*** ./src/assets/icons/icons8-meteor.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/7ca49a587810bbcd59e6.png";

/***/ }),

/***/ "./src/assets/icons/icons8-pressure.png":
/*!**********************************************!*\
  !*** ./src/assets/icons/icons8-pressure.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/00032606b2e13944b61e.png";

/***/ }),

/***/ "./src/assets/icons/icons8-search.png":
/*!********************************************!*\
  !*** ./src/assets/icons/icons8-search.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/c050c2b96688132fac25.png";

/***/ }),

/***/ "./src/assets/icons/icons8-temperature.png":
/*!*************************************************!*\
  !*** ./src/assets/icons/icons8-temperature.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/483270f4aa934f24fe64.png";

/***/ }),

/***/ "./src/assets/icons/icons8-uv.png":
/*!****************************************!*\
  !*** ./src/assets/icons/icons8-uv.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/af5ba5de12b0b480b96c.png";

/***/ }),

/***/ "./src/assets/icons/icons8-wind.png":
/*!******************************************!*\
  !*** ./src/assets/icons/icons8-wind.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/b10b7f9fea056d012d93.png";

/***/ }),

/***/ "./node_modules/date-fns/getDay.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/getDay.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getDay: () => (/* binding */ getDay)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name getDay
 * @category Weekday Helpers
 * @summary Get the day of the week of the given date.
 *
 * @description
 * Get the day of the week of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The day of week, 0 represents Sunday
 *
 * @example
 * // Which day of the week is 29 February 2012?
 * const result = getDay(new Date(2012, 1, 29))
 * //=> 3
 */
function getDay(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const day = _date.getDay();
  return day;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDay);


/***/ }),

/***/ "./node_modules/date-fns/toDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/toDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   toDate: () => (/* binding */ toDate)
/* harmony export */ });
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  const argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (
    argument instanceof Date ||
    (typeof argument === "object" && argStr === "[object Date]")
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new argument.constructor(+argument);
  } else if (
    typeof argument === "number" ||
    argStr === "[object Number]" ||
    typeof argument === "string" ||
    argStr === "[object String]"
  ) {
    // TODO: Can we get rid of as?
    return new Date(argument);
  } else {
    // TODO: Can we get rid of as?
    return new Date(NaN);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helper_init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helper/init.js */ "./src/helper/init.js");
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/styles.css */ "./src/styles/styles.css");



(0,_helper_init_js__WEBPACK_IMPORTED_MODULE_0__.initializeWebsite)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDTztBQUNuRyw0Q0FBNEMsOElBQW9EO0FBQ2hHLDRDQUE0Qyw4SUFBb0Q7QUFDaEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sd0ZBQXdGLFlBQVksV0FBVyxXQUFXLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFP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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDblBpQztBQUNqQztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7OztVQ3pEdEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FzRDtBQUN4QjtBQUM5QjtBQUNBLGtFQUFpQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzP2U0NWIiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hcGkvZGF0YS1hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXBpL3dlYXRoZXItYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvY29udGVudC9jb250ZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvY3VycmVudC13ZWF0aGVyL2N1cnJlbnQtd2VhdGhlci1zZWN0aW9uLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvZm9yZWNhc3QvZm9yZWNhc3Qtc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9tYWluLWNvbnRlbnQvbWFpbi1jb250ZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2Z1bmN0aW9ucy9tYWluLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2hlbHBlci9kYXRlLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2hlbHBlci9pbml0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3VuaXRzL21lYXN1cmVtZW50LXNpc3RlbS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy91bml0cy91bml0cy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXREYXkubWpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3RvRGF0ZS5tanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ljb25zL2ljb25zOC1tZXRlb3IucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ljb25zL2ljb25zOC1zZWFyY2gucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuXHJcbiAgICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuXHJcbiAgICAtLW1haW4tYXBwLWNvbG9yOiAjMDBCMkEwO1xyXG59XHJcblxyXG4jY29udGVudCB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgICBib3gtc2hhZG93OiAwY2ggNXB4IDIwcHggMHB4IGdyYXk7XHJcbn1cclxuXHJcbiNoZWFkZXItY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ2FwOiAycmVtO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDNmciAyZnI7XHJcbn1cclxuXHJcbiN0aXRsZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuI2FwcC1sb2dvIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjUlO1xyXG59XHJcblxyXG4jc2VhcmNoLXNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMC41cmVtO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI2xvY2F0aW9uLWlucHV0IHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4jc2VhcmNoLWJ1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpOztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4tYXBwLWNvbG9yKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuI3NlYXJjaC1idXR0b246YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4jbWVhc3VyZW1lbnQtc3lzdGVtLXNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbiNtZXRyaWMtc3lzdGVtLWJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuI2ltcGVyaWFsLXN5c3RlbS1idXR0b24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxubWFpbiB7XHJcbiAgICB3aWR0aDogbWF4KDUwJSwgNTAwcHgpO1xyXG4gICAgcGFkZGluZzogMnJlbSAwcmVtO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4jY3VycmVudCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xyXG59XHJcblxyXG4jY3VycmVudC1sb2NhdGlvbi1kYXRhLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcblxyXG4jY3VycmVudC1sb2NhdGlvbi1kYXRhLWNvbnRhaW5lciA+IGRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbiNjdXJyZW50LWxvY2F0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcclxufVxyXG5cclxuI3JpZ2h0LW5vdyB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTsgICAgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbiNjdXJyZW50LXdlYXRoZXItaWNvbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4jY3VycmVudC13ZWF0aGVyLWljb24ge1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4jY3VycmVudC1jb25kaXRpb24tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxufVxyXG5cclxuI2N1cnJlbnQtdGVtcGVyYXR1cmUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG59XHJcblxyXG4jY3VycmVudC10ZW1wZXJhdHVyZS1jb250YWluZXIgPiBpbWcge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbn1cclxuXHJcbiNjdXJyZW50LXRlbXBlcmF0dXJlLXZhbHVlLWNvbnRhaW5lciB7IFxyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG59XHJcblxyXG4jY3VycmVudC1mZWVscy1saWtlLWNvbnRhaW5lciB7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbn1cclxuXHJcbiNjdXJyZW50LXRlbXBlcmF0dXJlLXVuaXQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuMzNyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLThweDtcclxufVxyXG5cclxuI2N1cnJlbnQtZmVlbHMtbGlrZS11bml0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjMzcmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0zcHg7XHJcbn1cclxuXHJcbiNjdXJyZW50LWFkZGl0aW9uYWwge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xyXG59XHJcblxyXG4jY3VycmVudC1hZGRpdGlvbmFsID4gZGl2e1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNjdXJyZW50LXdpbmQtdW5pdCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMC4zM3JlbTtcclxufVxyXG5cclxuI2N1cnJlbnQtaHVtaWRpdHktdW5pdCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMC4zM3JlbTtcclxufVxyXG5cclxuI2N1cnJlbnQtcHJlc3N1cmUtdW5pdCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMC4zM3JlbTtcclxufVxyXG5cclxuI2N1cnJlbnQtdXYtdW5pdCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMC4zM3JlbTtcclxufVxyXG5cclxuLmFkZGl0aW9uYWwtbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuXHJcbi5hZGRpdGlvbmFsLXZhbHVlIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG4jY3VycmVudC1hZGRpdGlvbmFsIGltZyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbiN0aHJlZS1kYXktZm9yZWNhc3Qge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xyXG59XHJcblxyXG4uZGFpbHktZm9yZWNhc3QtaGVhZGVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNzVyZW07XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmRhaWx5LWZvcmVjYXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxufVxyXG5cclxuLmRhaWx5LWRheSB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuLmRhaWx5LXdlYXRoZXItaWNvbiB7XHJcbiAgICB3aWR0aDogNjRweDtcclxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XHJcbn1cclxuXHJcbi5kYWlseS1jb25kaXRpb24ge1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uZGFpbHktYXZlcmFnZS10ZW1wZXJhdHVyZSB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuXHJcbi5kYWlseS1hdmVyYWdlLXRlbXBlcmF0dXJlLXVuaXQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuMzNyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTVweDtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5cclxuXHJcblxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTs7SUFFVixxR0FBcUc7O0lBRXJHLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7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dFwiOltcIioge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuXFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcblxcclxcbiAgICAtLW1haW4tYXBwLWNvbG9yOiAjMDBCMkEwO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgYm94LXNoYWRvdzogMGNoIDVweCAyMHB4IDBweCBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVyLWNvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDNmciAyZnI7XFxyXFxufVxcclxcblxcclxcbiN0aXRsZS1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDAuNzVyZW07XFxyXFxuICAgIHdpZHRoOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4jYXBwLWxvZ28ge1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2Fzc2V0cy9pY29ucy9pY29uczgtbWV0ZW9yLnBuZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyNSU7XFxyXFxufVxcclxcblxcclxcbiNzZWFyY2gtc2VjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMC41cmVtO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jbG9jYXRpb24taW5wdXQge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNzZWFyY2gtYnV0dG9uIHtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tYWluLWFwcC1jb2xvcik7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL2ljb25zL2ljb25zOC1zZWFyY2gucG5nJyk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuI3NlYXJjaC1idXR0b246YWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbiNtZWFzdXJlbWVudC1zeXN0ZW0tc2VjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxufVxcclxcblxcclxcbiNtZXRyaWMtc3lzdGVtLWJ1dHRvbiB7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxufVxcclxcblxcclxcbiNpbXBlcmlhbC1zeXN0ZW0tYnV0dG9uIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgICB3aWR0aDogbWF4KDUwJSwgNTAwcHgpO1xcclxcbiAgICBwYWRkaW5nOiAycmVtIDByZW07XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuI2N1cnJlbnQge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY3VycmVudC1sb2NhdGlvbi1kYXRhLWNvbnRhaW5lciB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxufVxcclxcblxcclxcbiNjdXJyZW50LWxvY2F0aW9uLWRhdGEtY29udGFpbmVyID4gZGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNjdXJyZW50LWxvY2F0aW9uIHtcXHJcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXHJcXG4gICAgY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuI3JpZ2h0LW5vdyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtOyAgICBcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY3VycmVudC13ZWF0aGVyLWljb24tY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNjdXJyZW50LXdlYXRoZXItaWNvbiB7XFxyXFxuICAgIGhlaWdodDogODBweDtcXHJcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXHJcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxufVxcclxcblxcclxcbiNjdXJyZW50LWNvbmRpdGlvbi1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XFxyXFxufVxcclxcblxcclxcbiNjdXJyZW50LXRlbXBlcmF0dXJlLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY3VycmVudC10ZW1wZXJhdHVyZS1jb250YWluZXIgPiBpbWcge1xcclxcbiAgICB3aWR0aDogODBweDtcXHJcXG4gICAgaGVpZ2h0OiA4MHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNjdXJyZW50LXRlbXBlcmF0dXJlLXZhbHVlLWNvbnRhaW5lciB7IFxcclxcbiAgICBmb250LXNpemU6IDNyZW07XFxyXFxufVxcclxcblxcclxcbiNjdXJyZW50LWZlZWxzLWxpa2UtY29udGFpbmVyIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY3VycmVudC10ZW1wZXJhdHVyZS11bml0IHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDAuMzNyZW07XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAtOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY3VycmVudC1mZWVscy1saWtlLXVuaXQge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMC4zM3JlbTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0zcHg7XFxyXFxufVxcclxcblxcclxcbiNjdXJyZW50LWFkZGl0aW9uYWwge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcXHJcXG59XFxyXFxuXFxyXFxuI2N1cnJlbnQtYWRkaXRpb25hbCA+IGRpdntcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNjdXJyZW50LXdpbmQtdW5pdCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwLjMzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY3VycmVudC1odW1pZGl0eS11bml0IHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDAuMzNyZW07XFxyXFxufVxcclxcblxcclxcbiNjdXJyZW50LXByZXNzdXJlLXVuaXQge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMC4zM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2N1cnJlbnQtdXYtdW5pdCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwLjMzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkaXRpb25hbC1sYWJlbCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkaXRpb25hbC12YWx1ZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY3VycmVudC1hZGRpdGlvbmFsIGltZyB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3RocmVlLWRheS1mb3JlY2FzdCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktZm9yZWNhc3QtaGVhZGVyIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMS43NXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LWZvcmVjYXN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5kYWlseS1kYXkge1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LXdlYXRoZXItaWNvbiB7XFxyXFxuICAgIHdpZHRoOiA2NHB4O1xcclxcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktY29uZGl0aW9uIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5kYWlseS1hdmVyYWdlLXRlbXBlcmF0dXJlIHtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktYXZlcmFnZS10ZW1wZXJhdHVyZS11bml0IHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDAuMzNyZW07XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAtNXB4O1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY29uc3QgQVBJX0tFWSA9IGA1MzUxN2VlNzFkYzc0NjkyYWFlMTI0OTMzMjQxNDAzYDtcclxuZXhwb3J0IGNvbnN0IEJBU0VfVVJMID0gYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjFgO1xyXG5leHBvcnQgY29uc3QgVEhSRUVfREFZX0ZPUkVDQVNUX01FVEhPRCA9ICdmb3JlY2FzdCc7IiwiaW1wb3J0IHsgQVBJX0tFWSwgQkFTRV9VUkwsIFRIUkVFX0RBWV9GT1JFQ0FTVF9NRVRIT0QgfSBmcm9tIFwiLi9kYXRhLWFwaVwiO1xyXG5cclxuLy9SZXRyaWV2ZXMgdGhlIHdlYXRoZXIgZm9yZWNhc3QgZm9yIDMgZGF5cywgc3RhcnRpbmcgZnJvbSB0aGUgY3VycmVudCBkYXlcclxuLy9SZXRyaWV2ZXMgdGhlIGN1cnJlbnQgd2VhdGhlciBkYXRhXHJcbi8vUmV0cmlldmVzIGRhdGEgYWJvdXQgdGhlIGxvY2F0aW9uXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRm9yZWNhc3REYXRhKGxvY2F0aW9uKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0JBU0VfVVJMfS8ke1RIUkVFX0RBWV9GT1JFQ0FTVF9NRVRIT0R9Lmpzb24/a2V5PSR7QVBJX0tFWX0mcT0ke2xvY2F0aW9ufSZkYXlzPTNgLCB7IG1vZGU6ICdjb3JzJyB9KTtcclxuICAgIGNvbnN0IHdlYXRoZXJGb3JlY2FzdERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgcmV0dXJuIHdlYXRoZXJGb3JlY2FzdERhdGE7XHJcbn1cclxuXHJcbi8vRGVyaXZhdGl2ZSBmdW5jdGlvbnMgZm9yIGN1cnJlbnQgd2VhdGhlciBjb25kaXRpb25zID0+XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRGb3JlY2FzdExvY2F0aW9uKGRhdGEpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY2l0eTogZGF0YS5sb2NhdGlvbi5uYW1lLFxyXG4gICAgICAgIGNvdW50cnk6IGRhdGEubG9jYXRpb24uY291bnRyeVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cmVudFdlYXRoZXJJY29uKGRhdGEpIHtcclxuICAgIHJldHVybiBgaHR0cHM6JHtkYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb259YDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRXZWF0aGVyQ29uZGl0aW9uKGRhdGEpIHtcclxuICAgIHJldHVybiBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50VGVtcGVyYXR1cmUoZGF0YSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0ZW1wZXJhdHVyZUNlbHNpdXM6IGRhdGEuY3VycmVudC50ZW1wX2MsXHJcbiAgICAgICAgdGVtcGVyYXR1cmVGYWhyZW5oZWl0OiBkYXRhLmN1cnJlbnQudGVtcF9mXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50RmVlbHNMaWtlVGVtcGVyYXR1cmUoZGF0YSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBmZWVsc0xpa2VDZWxzaXVzOiBkYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2MsXHJcbiAgICAgICAgZmVlbHNMaWtlRmFocmVuaGVpdDogZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9mXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50V2luZChkYXRhKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHdpbmRLcGg6IGRhdGEuY3VycmVudC53aW5kX2twaCxcclxuICAgICAgICB3aW5kTXBoOiBkYXRhLmN1cnJlbnQud2luZF9tcGhcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRIdW1pZGl0eShkYXRhKSB7XHJcbiAgICByZXR1cm4gZGF0YS5jdXJyZW50Lmh1bWlkaXR5O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFByZXNzdXJlKGRhdGEpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJlc3N1cmVNYmFyOiBkYXRhLmN1cnJlbnQucHJlc3N1cmVfbWIsXHJcbiAgICAgICAgcHJlc3N1cmVJbjogZGF0YS5jdXJyZW50LnByZXNzdXJlX2luXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50VXZJbmRleChkYXRhKSB7XHJcbiAgICByZXR1cm4gZGF0YS5jdXJyZW50LnV2O1xyXG59XHJcblxyXG4vL0Rlcml2YXRpdmUgZnVuY3Rpb25zIGZvciB0aGUgdGhyZWUgZGF5IGZvcmNhc3QgPT5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEZpcnN0RGF5RGF0YShkYXRhKSB7XHJcbiAgICBjb25zdCBmaXJzdERheURhdGEgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZGF0ZTogZmlyc3REYXlEYXRhLmRhdGUsXHJcbiAgICAgICAgd2VhdGhlckljb25VUkw6IGBodHRwczoke2ZpcnN0RGF5RGF0YS5kYXkuY29uZGl0aW9uLmljb259YCxcclxuICAgICAgICBjb25kaXRpb246IGZpcnN0RGF5RGF0YS5kYXkuY29uZGl0aW9uLnRleHQsXHJcbiAgICAgICAgYXZlcmFnZVRlbXBlcmF0dXJlQ2Vsc2l1czogZmlyc3REYXlEYXRhLmRheS5hdmd0ZW1wX2MsXHJcbiAgICAgICAgYXZlcmFnZVRlbXBlcmF0dXJlRmFocmVuaGVpdDogZmlyc3REYXlEYXRhLmRheS5hdmd0ZW1wX2YsXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTZWNvbmREYXlEYXRhKGRhdGEpIHtcclxuICAgIGNvbnN0IHNlY29uZERheURhdGEgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZGF0ZTogc2Vjb25kRGF5RGF0YS5kYXRlLFxyXG4gICAgICAgIHdlYXRoZXJJY29uVVJMOiBgaHR0cHM6JHtzZWNvbmREYXlEYXRhLmRheS5jb25kaXRpb24uaWNvbn1gLFxyXG4gICAgICAgIGNvbmRpdGlvbjogc2Vjb25kRGF5RGF0YS5kYXkuY29uZGl0aW9uLnRleHQsXHJcbiAgICAgICAgYXZlcmFnZVRlbXBlcmF0dXJlQ2Vsc2l1czogc2Vjb25kRGF5RGF0YS5kYXkuYXZndGVtcF9jLFxyXG4gICAgICAgIGF2ZXJhZ2VUZW1wZXJhdHVyZUZhaHJlbmhlaXQ6IHNlY29uZERheURhdGEuZGF5LmF2Z3RlbXBfZixcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRoaXJkRGF5RGF0YShkYXRhKSB7XHJcbiAgICBjb25zdCB0aGlyZERheURhdGEgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZGF0ZTogdGhpcmREYXlEYXRhLmRhdGUsXHJcbiAgICAgICAgd2VhdGhlckljb25VUkw6IGBodHRwczoke3RoaXJkRGF5RGF0YS5kYXkuY29uZGl0aW9uLmljb259YCxcclxuICAgICAgICBjb25kaXRpb246IHRoaXJkRGF5RGF0YS5kYXkuY29uZGl0aW9uLnRleHQsXHJcbiAgICAgICAgYXZlcmFnZVRlbXBlcmF0dXJlQ2Vsc2l1czogdGhpcmREYXlEYXRhLmRheS5hdmd0ZW1wX2MsXHJcbiAgICAgICAgYXZlcmFnZVRlbXBlcmF0dXJlRmFocmVuaGVpdDogdGhpcmREYXlEYXRhLmRheS5hdmd0ZW1wX2YsXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgJy4uLy4uL3N0eWxlcy9zdHlsZXMuY3NzJztcclxuaW1wb3J0IHsgY3JlYXRlSGVhZGVyIH0gZnJvbSAnLi4vaGVhZGVyL2hlYWRlcic7XHJcbmltcG9ydCB7IGNyZWF0ZU1haW5Db250ZW50fSBmcm9tICcuLi9tYWluLWNvbnRlbnQvbWFpbi1jb250ZW50JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb250ZW50Q29udGFpbmVyKCkge1xyXG4gICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGVudENvbnRhaW5lci5pZCA9ICdjb250ZW50JztcclxuXHJcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcclxuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbkNvbnRlbnQoKSk7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRlbnRDb250YWluZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb250ZW50Q29udGFpbmVyKCkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XHJcbn0iLCJpbXBvcnQgJy4uLy4uL3N0eWxlcy9zdHlsZXMuY3NzJztcclxuaW1wb3J0IHRlbXBlcmF0dXJlSWNvblBhdGggZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljb25zOC10ZW1wZXJhdHVyZS5wbmcnO1xyXG5pbXBvcnQgd2luZEljb25QYXRoIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9pY29uczgtd2luZC5wbmcnO1xyXG5pbXBvcnQgaHVtaWRpdHlJY29uUGF0aCBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWNvbnM4LWh1bWlkaXR5LnBuZyc7XHJcbmltcG9ydCBwcmVzc3VyZUljb25QYXRoIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9pY29uczgtcHJlc3N1cmUucG5nJztcclxuaW1wb3J0IHV2SW5kZXhJY29uUGF0aCBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWNvbnM4LXV2LnBuZyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ3VycmVudFdlYXRoZXJTZWN0aW9uKCkge1xyXG4gICAgY29uc3QgY3VycmVudFdlYXRoZXJEYXRhQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgY29uc3QgY3VycmVudExvY2F0aW9uRGF0YUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgY3VycmVudExvY2F0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBjdXJyZW50TG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgY29uc3QgcmlnaHROb3dDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHJpZ2h0Tm93UGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRXZWF0aGVySWNvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgY3VycmVudFdlYXRoZXJJY29uID0gbmV3IEltYWdlKCk7XHJcblxyXG4gICAgY29uc3QgY3VycmVudENvbmRpdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgY3VycmVudENvbmRpdGlvblBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50VGVtcGVyYXR1cmVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGN1cnJlbnRUZW1wZXJhdHVyZUljb24gPSBuZXcgSW1hZ2UoKTtcclxuICAgIGNvbnN0IGN1cnJlbnRUZW1wZXJhdHVyZVZhbHVlc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgY3VycmVudFRlbXBlcmF0dXJlVmFsdWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGN1cnJlbnRUZW1wZXJhdHVyZVZhbHVlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGNvbnN0IGN1cnJlbnRUZW1wZXJhdHVyZVVuaXRTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgY29uc3QgY3VycmVudEZlZWxzTGlrZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgY3VycmVudEZlZWxzTGlrZVZhbHVlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGNvbnN0IGN1cnJlbnRGZWVsc0xpa2VVbml0U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50QWRkaXRpb25hbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRXaW5kQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCB3aW5kSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgY29uc3Qgd2luZERhdGFDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHdpbmRQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb25zdCB3aW5kVmFsdWVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgY29uc3Qgd2luZFZhbHVlVW5pdFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcblxyXG4gICAgY29uc3QgY3VycmVudEh1bWlkaXR5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBodW1pZGl0eUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGNvbnN0IGh1bWlkaXR5RGF0YUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgaHVtaWRpdHlQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb25zdCBodW1pZGl0eVZhbHVlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGNvbnN0IGh1bWlkaXR5VmFsdWVVbml0U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50UHJlc3N1cmVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHByZXNzdXJlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgY29uc3QgcHJlc3N1cmVEYXRhQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBwcmVzc3VyZVBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnN0IHByZXNzdXJlVmFsdWVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgY29uc3QgcHJlc3N1cmVWYWx1ZVVuaXRTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRVdkluZGV4Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCB1dkluZGV4SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgY29uc3QgdXZJbmRleERhdGFDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHV2SW5kZXhQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb25zdCB1dkluZGV4VmFsdWVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cclxuICAgIC8vQXNzaWduaW5nIGlkIHNlbGVjdG9ycyB0byBjdXJyZW50IHdlYXRoZXIgc2VjdGlvbiBlbGVtZW50c1xyXG4gICAgY3VycmVudFdlYXRoZXJEYXRhQ29udGFpbmVyLmlkID0gJ2N1cnJlbnQnO1xyXG4gICAgY3VycmVudExvY2F0aW9uRGF0YUNvbnRhaW5lci5pZCA9ICdjdXJyZW50LWxvY2F0aW9uLWRhdGEtY29udGFpbmVyJztcclxuXHJcbiAgICBjdXJyZW50TG9jYXRpb24uaWQgPSAnY3VycmVudC1sb2NhdGlvbic7XHJcbiAgICByaWdodE5vd1BhcmFncmFwaC5pZCA9ICdyaWdodC1ub3cnO1xyXG5cclxuICAgIGN1cnJlbnRXZWF0aGVySWNvbkNvbnRhaW5lci5pZCA9ICdjdXJyZW50LXdlYXRoZXItaWNvbi1jb250YWluZXInO1xyXG4gICAgY3VycmVudFdlYXRoZXJJY29uLmlkID0gJ2N1cnJlbnQtd2VhdGhlci1pY29uJztcclxuXHJcbiAgICBjdXJyZW50Q29uZGl0aW9uQ29udGFpbmVyLmlkID0gJ2N1cnJlbnQtY29uZGl0aW9uLWNvbnRhaW5lcic7XHJcbiAgICBjdXJyZW50Q29uZGl0aW9uUGFyYWdyYXBoLmlkID0gJ2N1cnJlbnQtY29uZGl0aW9uJztcclxuXHJcbiAgICBjdXJyZW50VGVtcGVyYXR1cmVDb250YWluZXIuaWQgPSAnY3VycmVudC10ZW1wZXJhdHVyZS1jb250YWluZXInO1xyXG4gICAgY3VycmVudFRlbXBlcmF0dXJlVmFsdWVzQ29udGFpbmVyLmlkID0gJ2N1cnJlbnQtdGVtcGVyYXR1cmUtdmFsdWVzLWNvbnRhaW5lcic7XHJcbiAgICBjdXJyZW50VGVtcGVyYXR1cmVWYWx1ZUNvbnRhaW5lci5pZCA9ICdjdXJyZW50LXRlbXBlcmF0dXJlLXZhbHVlLWNvbnRhaW5lcic7XHJcbiAgICBjdXJyZW50VGVtcGVyYXR1cmVWYWx1ZVNwYW4uaWQgPSAnY3VycmVudC10ZW1wZXJhdHVyZSc7XHJcbiAgICBjdXJyZW50VGVtcGVyYXR1cmVVbml0U3Bhbi5pZCA9ICdjdXJyZW50LXRlbXBlcmF0dXJlLXVuaXQnO1xyXG5cclxuICAgIGN1cnJlbnRGZWVsc0xpa2VDb250YWluZXIuaWQgPSAnY3VycmVudC1mZWVscy1saWtlLWNvbnRhaW5lcic7XHJcbiAgICBjdXJyZW50RmVlbHNMaWtlVmFsdWVTcGFuLmlkID0gJ2N1cnJlbnQtZmVlbHMtbGlrZSc7XHJcbiAgICBjdXJyZW50RmVlbHNMaWtlVW5pdFNwYW4uaWQgPSAnY3VycmVudC1mZWVscy1saWtlLXVuaXQnO1xyXG5cclxuICAgIGN1cnJlbnRBZGRpdGlvbmFsQ29udGFpbmVyLmlkID0gJ2N1cnJlbnQtYWRkaXRpb25hbCc7XHJcblxyXG4gICAgY3VycmVudFdpbmRDb250YWluZXIuaWQgPSAnY3VycmVudC13aW5kLWNvbnRhaW5lcic7XHJcbiAgICB3aW5kVmFsdWVTcGFuLmlkID0gJ2N1cnJlbnQtd2luZCc7XHJcbiAgICB3aW5kVmFsdWVVbml0U3Bhbi5pZCA9ICdjdXJyZW50LXdpbmQtdW5pdCc7XHJcblxyXG4gICAgY3VycmVudEh1bWlkaXR5Q29udGFpbmVyLmlkID0gJ2N1cnJlbnQtaHVtaWRpdHktY29udGFpbmVyJztcclxuICAgIGh1bWlkaXR5VmFsdWVTcGFuLmlkID0gJ2N1cnJlbnQtaHVtaWRpdHknO1xyXG4gICAgaHVtaWRpdHlWYWx1ZVVuaXRTcGFuLmlkID0gJ2N1cnJlbnQtaHVtaWRpdHktdW5pdCc7XHJcblxyXG4gICAgY3VycmVudFByZXNzdXJlQ29udGFpbmVyLmlkID0gJ2N1cnJlbnQtcHJlc3N1cmUtY29udGFpbmVyJztcclxuICAgIHByZXNzdXJlVmFsdWVTcGFuLmlkID0gJ2N1cnJlbnQtcHJlc3N1cmUnO1xyXG4gICAgcHJlc3N1cmVWYWx1ZVVuaXRTcGFuLmlkID0gJ2N1cnJlbnQtcHJlc3N1cmUtdW5pdCc7XHJcblxyXG4gICAgY3VycmVudFV2SW5kZXhDb250YWluZXIuaWQgPSAnY3VycmVudC11di1jb250YWluZXInO1xyXG4gICAgdXZJbmRleFZhbHVlU3Bhbi5pZCA9ICdjdXJyZW50LXV2JztcclxuXHJcbiAgICAvL0Fzc2lnbmluZyBjbGFzcyBzZWxlY3RvcnMgdG8gY3VycmVudCB3ZWF0aGVyIHNlY3Rpb24gZWxlbWVudHNcclxuICAgIHdpbmRQYXJhZ3JhcGguY2xhc3NMaXN0LmFkZCgnYWRkaXRpb25hbC1sYWJlbCcpO1xyXG4gICAgd2luZFZhbHVlU3Bhbi5jbGFzc0xpc3QuYWRkKCdhZGRpdGlvbmFsLXZhbHVlJyk7XHJcbiAgICB3aW5kVmFsdWVVbml0U3Bhbi5jbGFzc0xpc3QuYWRkKCdhZGRpdGlvbmFsLXZhbHVlJyk7XHJcblxyXG4gICAgaHVtaWRpdHlQYXJhZ3JhcGguY2xhc3NMaXN0LmFkZCgnYWRkaXRpb25hbC1sYWJlbCcpO1xyXG4gICAgaHVtaWRpdHlWYWx1ZVNwYW4uY2xhc3NMaXN0LmFkZCgnYWRkaXRpb25hbC12YWx1ZScpO1xyXG4gICAgaHVtaWRpdHlWYWx1ZVVuaXRTcGFuLmNsYXNzTGlzdC5hZGQoJ2FkZGl0aW9uYWwtdmFsdWUnKTtcclxuXHJcbiAgICBwcmVzc3VyZVBhcmFncmFwaC5jbGFzc0xpc3QuYWRkKCdhZGRpdGlvbmFsLWxhYmVsJyk7XHJcbiAgICBwcmVzc3VyZVZhbHVlU3Bhbi5jbGFzc0xpc3QuYWRkKCdhZGRpdGlvbmFsLXZhbHVlJyk7XHJcbiAgICBwcmVzc3VyZVZhbHVlVW5pdFNwYW4uY2xhc3NMaXN0LmFkZCgnYWRkaXRpb25hbC12YWx1ZScpO1xyXG5cclxuICAgIHV2SW5kZXhQYXJhZ3JhcGguY2xhc3NMaXN0LmFkZCgnYWRkaXRpb25hbC1sYWJlbCcpO1xyXG4gICAgdXZJbmRleFZhbHVlU3Bhbi5jbGFzc0xpc3QuYWRkKCdhZGRpdGlvbmFsLXZhbHVlJyk7XHJcblxyXG4gICAgLy9Bc3NpZ25pbmcgcHJvcGVydHkgdmFsdWVzIHRvIGN1cnJlbnQgd2VhdGVyIHNlY3Rpb24gZWxlbWVudHNcclxuICAgIHJpZ2h0Tm93UGFyYWdyYXBoLnRleHRDb250ZW50ID0gJ1JpZ2h0IE5vdyc7XHJcbiAgICB3aW5kUGFyYWdyYXBoLnRleHRDb250ZW50ID0gJ1dpbmQnO1xyXG4gICAgaHVtaWRpdHlQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSAnSHVtaWRpdHknO1xyXG4gICAgcHJlc3N1cmVQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSAnUHJlc3N1cmUnO1xyXG4gICAgdXZJbmRleFBhcmFncmFwaC50ZXh0Q29udGVudCA9ICdVViBJbmRleCc7XHJcbiAgIFxyXG4gICAgY3VycmVudFRlbXBlcmF0dXJlSWNvbi5zcmMgPSBgJHt0ZW1wZXJhdHVyZUljb25QYXRofWA7XHJcbiAgICB3aW5kSWNvbi5zcmMgPSBgJHt3aW5kSWNvblBhdGh9YDtcclxuICAgIGh1bWlkaXR5SWNvbi5zcmMgPSBgJHtodW1pZGl0eUljb25QYXRofWA7XHJcbiAgICBwcmVzc3VyZUljb24uc3JjID0gYCR7cHJlc3N1cmVJY29uUGF0aH1gO1xyXG4gICAgdXZJbmRleEljb24uc3JjID0gYCR7dXZJbmRleEljb25QYXRofWA7XHJcblxyXG4gICAgLy9DcmVhdGluZyB0aGUgc3RydWN0dXJlIG9mIHRoZSBjdXJyZW50IHdlYXRoZXIgc2VjdGlvblxyXG4gICAgY3VycmVudFdlYXRoZXJEYXRhQ29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRMb2NhdGlvbkRhdGFDb250YWluZXIpO1xyXG4gICAgY3VycmVudFdlYXRoZXJEYXRhQ29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRXZWF0aGVySWNvbkNvbnRhaW5lcik7XHJcbiAgICBjdXJyZW50V2VhdGhlckRhdGFDb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudENvbmRpdGlvbkNvbnRhaW5lcik7XHJcbiAgICBjdXJyZW50V2VhdGhlckRhdGFDb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudFRlbXBlcmF0dXJlQ29udGFpbmVyKTtcclxuICAgIGN1cnJlbnRXZWF0aGVyRGF0YUNvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50QWRkaXRpb25hbENvbnRhaW5lcik7XHJcblxyXG4gICAgY3VycmVudExvY2F0aW9uRGF0YUNvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50TG9jYXRpb25Db250YWluZXIpO1xyXG4gICAgY3VycmVudExvY2F0aW9uRGF0YUNvbnRhaW5lci5hcHBlbmRDaGlsZChyaWdodE5vd0NvbnRhaW5lcik7XHJcblxyXG4gICAgY3VycmVudExvY2F0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRMb2NhdGlvbik7XHJcbiAgICByaWdodE5vd0NvbnRhaW5lci5hcHBlbmRDaGlsZChyaWdodE5vd1BhcmFncmFwaCk7XHJcblxyXG4gICAgY3VycmVudFdlYXRoZXJJY29uQ29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRXZWF0aGVySWNvbik7XHJcbiAgICBjdXJyZW50Q29uZGl0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRDb25kaXRpb25QYXJhZ3JhcGgpO1xyXG5cclxuICAgIGN1cnJlbnRUZW1wZXJhdHVyZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50VGVtcGVyYXR1cmVJY29uKTtcclxuICAgIGN1cnJlbnRUZW1wZXJhdHVyZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50VGVtcGVyYXR1cmVWYWx1ZXNDb250YWluZXIpO1xyXG4gICAgY3VycmVudFRlbXBlcmF0dXJlVmFsdWVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRUZW1wZXJhdHVyZVZhbHVlQ29udGFpbmVyKTtcclxuICAgIGN1cnJlbnRUZW1wZXJhdHVyZVZhbHVlQ29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRUZW1wZXJhdHVyZVZhbHVlU3Bhbik7XHJcbiAgICBjdXJyZW50VGVtcGVyYXR1cmVWYWx1ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50VGVtcGVyYXR1cmVVbml0U3Bhbik7XHJcbiAgICBjdXJyZW50VGVtcGVyYXR1cmVWYWx1ZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudEZlZWxzTGlrZUNvbnRhaW5lcik7XHJcbiAgICBjdXJyZW50RmVlbHNMaWtlQ29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRGZWVsc0xpa2VWYWx1ZVNwYW4pO1xyXG4gICAgY3VycmVudEZlZWxzTGlrZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50RmVlbHNMaWtlVW5pdFNwYW4pO1xyXG5cclxuICAgIGN1cnJlbnRBZGRpdGlvbmFsQ29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRXaW5kQ29udGFpbmVyKTtcclxuICAgIGN1cnJlbnRBZGRpdGlvbmFsQ29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRIdW1pZGl0eUNvbnRhaW5lcik7XHJcbiAgICBjdXJyZW50QWRkaXRpb25hbENvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50UHJlc3N1cmVDb250YWluZXIpO1xyXG4gICAgY3VycmVudEFkZGl0aW9uYWxDb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudFV2SW5kZXhDb250YWluZXIpO1xyXG5cclxuICAgIGN1cnJlbnRXaW5kQ29udGFpbmVyLmFwcGVuZENoaWxkKHdpbmRJY29uKTtcclxuICAgIGN1cnJlbnRXaW5kQ29udGFpbmVyLmFwcGVuZENoaWxkKHdpbmREYXRhQ29udGFpbmVyKTtcclxuICAgIHdpbmREYXRhQ29udGFpbmVyLmFwcGVuZENoaWxkKHdpbmRQYXJhZ3JhcGgpO1xyXG4gICAgd2luZERhdGFDb250YWluZXIuYXBwZW5kQ2hpbGQod2luZFZhbHVlU3Bhbik7XHJcbiAgICB3aW5kRGF0YUNvbnRhaW5lci5hcHBlbmRDaGlsZCh3aW5kVmFsdWVVbml0U3Bhbik7XHJcblxyXG4gICAgY3VycmVudEh1bWlkaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKGh1bWlkaXR5SWNvbik7XHJcbiAgICBjdXJyZW50SHVtaWRpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQoaHVtaWRpdHlEYXRhQ29udGFpbmVyKTtcclxuICAgIGh1bWlkaXR5RGF0YUNvbnRhaW5lci5hcHBlbmRDaGlsZChodW1pZGl0eVBhcmFncmFwaCk7XHJcbiAgICBodW1pZGl0eURhdGFDb250YWluZXIuYXBwZW5kQ2hpbGQoaHVtaWRpdHlWYWx1ZVNwYW4pO1xyXG4gICAgaHVtaWRpdHlEYXRhQ29udGFpbmVyLmFwcGVuZENoaWxkKGh1bWlkaXR5VmFsdWVVbml0U3Bhbik7XHJcblxyXG4gICAgY3VycmVudFByZXNzdXJlQ29udGFpbmVyLmFwcGVuZENoaWxkKHByZXNzdXJlSWNvbik7XHJcbiAgICBjdXJyZW50UHJlc3N1cmVDb250YWluZXIuYXBwZW5kQ2hpbGQocHJlc3N1cmVEYXRhQ29udGFpbmVyKTtcclxuICAgIHByZXNzdXJlRGF0YUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmVzc3VyZVBhcmFncmFwaCk7XHJcbiAgICBwcmVzc3VyZURhdGFDb250YWluZXIuYXBwZW5kQ2hpbGQocHJlc3N1cmVWYWx1ZVNwYW4pO1xyXG4gICAgcHJlc3N1cmVEYXRhQ29udGFpbmVyLmFwcGVuZENoaWxkKHByZXNzdXJlVmFsdWVVbml0U3Bhbik7XHJcblxyXG4gICAgY3VycmVudFV2SW5kZXhDb250YWluZXIuYXBwZW5kQ2hpbGQodXZJbmRleEljb24pO1xyXG4gICAgY3VycmVudFV2SW5kZXhDb250YWluZXIuYXBwZW5kQ2hpbGQodXZJbmRleERhdGFDb250YWluZXIpO1xyXG4gICAgdXZJbmRleERhdGFDb250YWluZXIuYXBwZW5kQ2hpbGQodXZJbmRleFBhcmFncmFwaCk7XHJcbiAgICB1dkluZGV4RGF0YUNvbnRhaW5lci5hcHBlbmRDaGlsZCh1dkluZGV4VmFsdWVTcGFuKTtcclxuXHJcbiAgICByZXR1cm4gY3VycmVudFdlYXRoZXJEYXRhQ29udGFpbmVyO1xyXG59XHJcblxyXG4vL0N1cnJlbnQgV2VhdGhlciBVSSBFbGVtZW50IEdldHRlcnNcclxuLy9HZXR0ZXJzIGZvciBlbGVtZW50cyB0aGF0IGRpc3BsYXkgZGF0YSB2YWx1ZXNcclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRMb2NhdGlvbkVsZW1lbnQoKSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQtbG9jYXRpb24nKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRXZWF0aGVySWNvbkVsZW1lbnQoKSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQtd2VhdGhlci1pY29uJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50Q29uZGl0aW9uRWxlbWVudCgpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudC1jb25kaXRpb24nKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRUZW1wZXJhdHVyZUVsZW1lbnQoKSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQtdGVtcGVyYXR1cmUnKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRGZWVsc0xpa2VFbGVtZW50KCkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50LWZlZWxzLWxpa2UnKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRXaW5kRWxlbWVudCgpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudC13aW5kJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50SHVtaWRpdHlFbGVtZW50KCkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50LWh1bWlkaXR5Jyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50UHJlc3N1cmVFbGVtZW50KCkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50LXByZXNzdXJlJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50VXZJbmRleEVsZW1lbnQoKSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQtdXYnKTtcclxufVxyXG5cclxuLy9HZXR0ZXJzIGZvciBlbGVtZW50cyB0aGF0IGRpc3BsYXkgZGF0YSB1bml0c1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFRlbXBlcmF0dXJlVW5pdEVsZW1lbnQoKSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQtdGVtcGVyYXR1cmUtdW5pdCcpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudEZlZWxzTGlrZVVuaXRFbGVtZW50KCkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50LWZlZWxzLWxpa2UtdW5pdCcpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFdpbmRVbml0RWxlbWVudCgpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudC13aW5kLXVuaXQnKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRIdW1pZGl0eVVuaXRFbGVtZW50KCkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50LWh1bWlkaXR5LXVuaXQnKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRQcmVzc3VyZVVuaXRFbGVtZW50KCkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50LXByZXNzdXJlLXVuaXQnKTtcclxufSIsImltcG9ydCAnLi4vLi4vc3R5bGVzL3N0eWxlcy5jc3MnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZvcmVjYXN0U2VjdGlvbigpIHtcclxuICAgIGNvbnN0IGZvcmVjYXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgY29uc3QgZmlyc3REYXlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGZpcnN0RGF5UGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY29uc3QgZmlyc3REYXlXZWF0aGVySWNvbiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgY29uc3QgZmlyc3REYXlDb25kaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb25zdCBmaXJzdERheUF2ZXJhZ2VUZW1wZXJhdHVyZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgZmlyc3REYXlBdmVyYWdlVGVtcGVyYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBjb25zdCBmaXJzdERheUF2ZXJhZ2VUZW1wZXJhdHVyZVVuaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcblxyXG4gICAgY29uc3Qgc2Vjb25kRGF5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBzZWNvbmREYXlQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb25zdCBzZWNvbmREYXlXZWF0aGVySWNvbiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgY29uc3Qgc2Vjb25kRGF5Q29uZGl0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY29uc3Qgc2Vjb25kRGF5QXZlcmFnZVRlbXBlcmF0dXJlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBzZWNvbmREYXlBdmVyYWdlVGVtcGVyYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBjb25zdCBzZWNvbmREYXlBdmVyYWdlVGVtcGVyYXR1cmVVbml0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cclxuICAgIGNvbnN0IHRoaXJkRGF5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCB0aGlyZERheVBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnN0IHRoaXJkRGF5V2VhdGhlckljb24gPSBuZXcgSW1hZ2UoKTtcclxuICAgIGNvbnN0IHRoaXJkRGF5Q29uZGl0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY29uc3QgdGhpcmREYXlBdmVyYWdlVGVtcGVyYXR1cmVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHRoaXJkRGF5QXZlcmFnZVRlbXBlcmF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgY29uc3QgdGhpcmREYXlBdmVyYWdlVGVtcGVyYXR1cmVVbml0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cclxuICAgIC8vQXNzaWduaW5nIGlkIHNlbGVjdG9ycyB0byBmb3JlY2FzdCBzZWN0aW9uIGVsZW1lbnRzXHJcbiAgICBmb3JlY2FzdENvbnRhaW5lci5pZCA9ICd0aHJlZS1kYXktZm9yZWNhc3QnO1xyXG4gICAgZmlyc3REYXlDb250YWluZXIuaWQgPSAnZmlyc3QtZGF5JztcclxuICAgIGZpcnN0RGF5QXZlcmFnZVRlbXBlcmF0dXJlQ29udGFpbmVyLmlkID0gJ2ZpcnN0LWRheS10ZW1wZXJhdHVyZS1jb250YWluZXInO1xyXG4gICAgc2Vjb25kRGF5Q29udGFpbmVyLmlkPSAnc2Vjb25kLWRheSc7XHJcbiAgICBzZWNvbmREYXlBdmVyYWdlVGVtcGVyYXR1cmVDb250YWluZXIuaWQgPSAnc2Vjb25kLWRheS10ZW1wZXJhdHVyZS1jb250YWluZXInO1xyXG4gICAgdGhpcmREYXlDb250YWluZXIuaWQgPSAndGhpcmQtZGF5JztcclxuICAgIHRoaXJkRGF5QXZlcmFnZVRlbXBlcmF0dXJlQ29udGFpbmVyLmlkID0gJ3RoaXJkLWRheS10ZW1wZXJhdHVyZS1jb250YWluZXInO1xyXG5cclxuICAgIC8vQXNzaWduaW5nIGNsYXNzIHNlbGVjdG9ycyB0byBmb3JlY2FzdCBzZWN0aW9uIGVsZW1lbnRzXHJcbiAgICBmaXJzdERheUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkYWlseS1mb3JlY2FzdCcpO1xyXG4gICAgZmlyc3REYXlQYXJhZ3JhcGguY2xhc3NMaXN0LmFkZCgnZGFpbHktZGF5Jyk7XHJcbiAgICBmaXJzdERheVdlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoJ2RhaWx5LXdlYXRoZXItaWNvbicpO1xyXG4gICAgZmlyc3REYXlDb25kaXRpb24uY2xhc3NMaXN0LmFkZCgnZGFpbHktY29uZGl0aW9uJyk7XHJcbiAgICBmaXJzdERheUF2ZXJhZ2VUZW1wZXJhdHVyZS5jbGFzc0xpc3QuYWRkKCdkYWlseS1hdmVyYWdlLXRlbXBlcmF0dXJlJyk7XHJcbiAgICBmaXJzdERheUF2ZXJhZ2VUZW1wZXJhdHVyZVVuaXQuY2xhc3NMaXN0LmFkZCgnZGFpbHktYXZlcmFnZS10ZW1wZXJhdHVyZS11bml0Jyk7XHJcblxyXG4gICAgc2Vjb25kRGF5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2RhaWx5LWZvcmVjYXN0Jyk7XHJcbiAgICBzZWNvbmREYXlQYXJhZ3JhcGguY2xhc3NMaXN0LmFkZCgnZGFpbHktZGF5Jyk7XHJcbiAgICBzZWNvbmREYXlXZWF0aGVySWNvbi5jbGFzc0xpc3QuYWRkKCdkYWlseS13ZWF0aGVyLWljb24nKTtcclxuICAgIHNlY29uZERheUNvbmRpdGlvbi5jbGFzc0xpc3QuYWRkKCdkYWlseS1jb25kaXRpb24nKTtcclxuICAgIHNlY29uZERheUF2ZXJhZ2VUZW1wZXJhdHVyZS5jbGFzc0xpc3QuYWRkKCdkYWlseS1hdmVyYWdlLXRlbXBlcmF0dXJlJyk7XHJcbiAgICBzZWNvbmREYXlBdmVyYWdlVGVtcGVyYXR1cmVVbml0LmNsYXNzTGlzdC5hZGQoJ2RhaWx5LWF2ZXJhZ2UtdGVtcGVyYXR1cmUtdW5pdCcpO1xyXG4gICAgXHJcbiAgICB0aGlyZERheUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkYWlseS1mb3JlY2FzdCcpO1xyXG4gICAgdGhpcmREYXlQYXJhZ3JhcGguY2xhc3NMaXN0LmFkZCgnZGFpbHktZGF5Jyk7XHJcbiAgICB0aGlyZERheVdlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoJ2RhaWx5LXdlYXRoZXItaWNvbicpO1xyXG4gICAgdGhpcmREYXlDb25kaXRpb24uY2xhc3NMaXN0LmFkZCgnZGFpbHktY29uZGl0aW9uJyk7XHJcbiAgICB0aGlyZERheUF2ZXJhZ2VUZW1wZXJhdHVyZS5jbGFzc0xpc3QuYWRkKCdkYWlseS1hdmVyYWdlLXRlbXBlcmF0dXJlJyk7XHJcbiAgICB0aGlyZERheUF2ZXJhZ2VUZW1wZXJhdHVyZVVuaXQuY2xhc3NMaXN0LmFkZCgnZGFpbHktYXZlcmFnZS10ZW1wZXJhdHVyZS11bml0Jyk7XHJcblxyXG4gICAgZm9yZWNhc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZmlyc3REYXlDb250YWluZXIpO1xyXG4gICAgZm9yZWNhc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoc2Vjb25kRGF5Q29udGFpbmVyKTtcclxuICAgIGZvcmVjYXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXJkRGF5Q29udGFpbmVyKTtcclxuXHJcbiAgICBmaXJzdERheUNvbnRhaW5lci5hcHBlbmRDaGlsZChmaXJzdERheVBhcmFncmFwaCk7XHJcbiAgICBmaXJzdERheUNvbnRhaW5lci5hcHBlbmRDaGlsZChmaXJzdERheVdlYXRoZXJJY29uKTtcclxuICAgIGZpcnN0RGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKGZpcnN0RGF5Q29uZGl0aW9uKTtcclxuICAgIGZpcnN0RGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKGZpcnN0RGF5QXZlcmFnZVRlbXBlcmF0dXJlQ29udGFpbmVyKTtcclxuICAgIGZpcnN0RGF5QXZlcmFnZVRlbXBlcmF0dXJlQ29udGFpbmVyLmFwcGVuZENoaWxkKGZpcnN0RGF5QXZlcmFnZVRlbXBlcmF0dXJlKTtcclxuICAgIGZpcnN0RGF5QXZlcmFnZVRlbXBlcmF0dXJlQ29udGFpbmVyLmFwcGVuZENoaWxkKGZpcnN0RGF5QXZlcmFnZVRlbXBlcmF0dXJlVW5pdCk7XHJcblxyXG4gICAgc2Vjb25kRGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKHNlY29uZERheVBhcmFncmFwaCk7XHJcbiAgICBzZWNvbmREYXlDb250YWluZXIuYXBwZW5kQ2hpbGQoc2Vjb25kRGF5V2VhdGhlckljb24pO1xyXG4gICAgc2Vjb25kRGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKHNlY29uZERheUNvbmRpdGlvbik7XHJcbiAgICBzZWNvbmREYXlDb250YWluZXIuYXBwZW5kQ2hpbGQoc2Vjb25kRGF5QXZlcmFnZVRlbXBlcmF0dXJlQ29udGFpbmVyKTtcclxuICAgIHNlY29uZERheUF2ZXJhZ2VUZW1wZXJhdHVyZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWNvbmREYXlBdmVyYWdlVGVtcGVyYXR1cmUpO1xyXG4gICAgc2Vjb25kRGF5QXZlcmFnZVRlbXBlcmF0dXJlQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlY29uZERheUF2ZXJhZ2VUZW1wZXJhdHVyZVVuaXQpO1xyXG5cclxuICAgIHRoaXJkRGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXJkRGF5UGFyYWdyYXBoKTtcclxuICAgIHRoaXJkRGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXJkRGF5V2VhdGhlckljb24pO1xyXG4gICAgdGhpcmREYXlDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcmREYXlDb25kaXRpb24pO1xyXG4gICAgdGhpcmREYXlDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcmREYXlBdmVyYWdlVGVtcGVyYXR1cmVDb250YWluZXIpO1xyXG4gICAgdGhpcmREYXlBdmVyYWdlVGVtcGVyYXR1cmVDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcmREYXlBdmVyYWdlVGVtcGVyYXR1cmUpO1xyXG4gICAgdGhpcmREYXlBdmVyYWdlVGVtcGVyYXR1cmVDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcmREYXlBdmVyYWdlVGVtcGVyYXR1cmVVbml0KTtcclxuICAgIFxyXG4gICAgcmV0dXJuIGZvcmVjYXN0Q29udGFpbmVyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rmlyc3REYXlGb3JlY2FzdEVsZW1lbnQoKSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpcnN0LWRheScpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2Vjb25kRGF5Rm9yZWNhc3RFbGVtZW50KCkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWNvbmQtZGF5Jyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUaGlyZERheUZvcmVjYXN0RWxlbWVudCgpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGhpcmQtZGF5Jyk7XHJcbn0iLCJpbXBvcnQgJy4uLy4uL3N0eWxlcy9zdHlsZXMuY3NzJztcclxuaW1wb3J0IHsgbWVhc3VyZW1lbnRTeXN0ZW0sIHNldE1lYXN1cmVtZW50U3lzdGVtIH0gZnJvbSAnLi4vLi4vdW5pdHMvbWVhc3VyZW1lbnQtc2lzdGVtJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICAgIGNvbnN0IGhlYWRlckNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgYXBwTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG5cclxuICAgIGNvbnN0IHNlYXJjaFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGxvY2F0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblxyXG4gICAgY29uc3QgbWVhc3VyZW1lbnRTeXN0ZW1TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBtZXRyaWNTeXN0ZW1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNvbnN0IGltcGVyaWFsU3lzdGVtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblxyXG4gICAgLy9Bc3NpZ25pbmcgaWQncyB0byBoZWFkZXIgZWxlbWVudHNcclxuICAgIGhlYWRlckNvbnRlbnQuaWQgPSAnaGVhZGVyLWNvbnRlbnQnO1xyXG4gICAgdGl0bGVDb250YWluZXIuaWQgPSAndGl0bGUtY29udGFpbmVyJztcclxuICAgIGFwcExvZ28uaWQgPSAnYXBwLWxvZ28nO1xyXG5cclxuICAgIHNlYXJjaFNlY3Rpb24uaWQgPSAnc2VhcmNoLXNlY3Rpb24nO1xyXG4gICAgbG9jYXRpb25JbnB1dC5pZCA9ICdsb2NhdGlvbi1pbnB1dCc7XHJcbiAgICBzZWFyY2hCdXR0b24uaWQgPSAnc2VhcmNoLWJ1dHRvbic7XHJcblxyXG4gICAgbWVhc3VyZW1lbnRTeXN0ZW1TZWN0aW9uLmlkID0gJ21lYXN1cmVtZW50LXN5c3RlbS1zZWN0aW9uJztcclxuICAgIG1ldHJpY1N5c3RlbUJ1dHRvbi5pZCA9ICdtZXRyaWMtc3lzdGVtLWJ1dHRvbic7XHJcbiAgICBpbXBlcmlhbFN5c3RlbUJ1dHRvbi5pZCA9ICdpbXBlcmlhbC1zeXN0ZW0tYnV0dG9uJztcclxuXHJcbiAgICAvL0Fzc2lnbmluZyBwcm9wZXJ0eSB2YWx1ZXMgdG8gaGVhZGVyIGVsZW1lbm50c1xyXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIldlYXRoZXJBcHBcIjtcclxuICAgIG1ldHJpY1N5c3RlbUJ1dHRvbi50ZXh0Q29udGVudCA9ICdNZXRyaWMnO1xyXG4gICAgaW1wZXJpYWxTeXN0ZW1CdXR0b24udGV4dENvbnRlbnQgPSAnSW1wZXJpYWwnO1xyXG5cclxuICAgIC8vQ3JlYXRpbmcgdGhlIHN0cnVjdHVyZSBvZiB0aGUgaGVhZGVyXHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyQ29udGVudCk7XHJcbiAgICBoZWFkZXJDb250ZW50LmFwcGVuZENoaWxkKHRpdGxlQ29udGFpbmVyKTtcclxuICAgIGhlYWRlckNvbnRlbnQuYXBwZW5kQ2hpbGQoc2VhcmNoU2VjdGlvbik7XHJcbiAgICBoZWFkZXJDb250ZW50LmFwcGVuZENoaWxkKG1lYXN1cmVtZW50U3lzdGVtU2VjdGlvbik7XHJcblxyXG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQoYXBwTG9nbyk7XHJcbiAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcblxyXG4gICAgc2VhcmNoU2VjdGlvbi5hcHBlbmRDaGlsZChsb2NhdGlvbklucHV0KTtcclxuICAgIHNlYXJjaFNlY3Rpb24uYXBwZW5kQ2hpbGQoc2VhcmNoQnV0dG9uKTtcclxuXHJcbiAgICBtZWFzdXJlbWVudFN5c3RlbVNlY3Rpb24uYXBwZW5kQ2hpbGQobWV0cmljU3lzdGVtQnV0dG9uKTtcclxuICAgIG1lYXN1cmVtZW50U3lzdGVtU2VjdGlvbi5hcHBlbmRDaGlsZChpbXBlcmlhbFN5c3RlbUJ1dHRvbik7XHJcblxyXG4gICAgcmV0dXJuIGhlYWRlcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uU2VhcmNoRmllbGQoKSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvY2F0aW9uLWlucHV0Jyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTZWFyY2hCdXR0b24oKSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC1idXR0b24nKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE1ldHJpY1N5c3RlbUJ1dHRvbigpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWV0cmljLXN5c3RlbS1idXR0b24nKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEltcGVyaWFsU3lzdGVtQnV0dG9uKCkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbXBlcmlhbC1zeXN0ZW0tYnV0dG9uJyk7XHJcbn0iLCJpbXBvcnQgJy4uLy4uL3N0eWxlcy9zdHlsZXMuY3NzJztcclxuaW1wb3J0IHsgY3JlYXRlQ3VycmVudFdlYXRoZXJTZWN0aW9uIH0gZnJvbSAnLi4vY3VycmVudC13ZWF0aGVyL2N1cnJlbnQtd2VhdGhlci1zZWN0aW9uJztcclxuaW1wb3J0IHsgY3JlYXRlRm9yZWNhc3RTZWN0aW9uIH0gZnJvbSAnLi4vZm9yZWNhc3QvZm9yZWNhc3Qtc2VjdGlvbic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWFpbkNvbnRlbnQoKSB7XHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gICAgbWFpbi5pZCA9ICdtYWluJztcclxuXHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2RhaWx5LWZvcmVjYXN0LWhlYWRlcicpO1xyXG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ1RIUkVFIERBWSBGT1JFQ0FTVCc7XHJcblxyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVDdXJyZW50V2VhdGhlclNlY3Rpb24oKSk7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUZvcmVjYXN0U2VjdGlvbigpKTtcclxuXHJcbiAgICByZXR1cm4gbWFpbjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE1haW5Db250ZW50KCkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluJyk7XHJcbn0iLCJpbXBvcnQgeyBnZXRGb3JlY2FzdExvY2F0aW9uLCBnZXRXZWF0aGVyRm9yZWNhc3REYXRhLCBnZXRDdXJlbnRXZWF0aGVySWNvbiwgZ2V0Q3VycmVudFdlYXRoZXJDb25kaXRpb24sIGdldEN1cnJlbnRUZW1wZXJhdHVyZSwgZ2V0Q3VycmVudFdpbmQsIGdldEN1cnJlbnRIdW1pZGl0eSwgZ2V0Q3VycmVudFByZXNzdXJlLCBnZXRDdXJyZW50VXZJbmRleCwgZ2V0Q3VycmVudEZlZWxzTGlrZVRlbXBlcmF0dXJlLCBnZXRGaXJzdERheURhdGEsIGdldFNlY29uZERheURhdGEsIGdldFRoaXJkRGF5RGF0YSB9IGZyb20gXCIuLi9hcGkvd2VhdGhlci1hcGlcIjtcclxuaW1wb3J0IHsgZ2V0Q3VycmVudENvbmRpdGlvbkVsZW1lbnQsIGdldEN1cnJlbnRGZWVsc0xpa2VFbGVtZW50LCBnZXRDdXJyZW50RmVlbHNMaWtlVW5pdEVsZW1lbnQsIGdldEN1cnJlbnRIdW1pZGl0eUVsZW1lbnQsIGdldEN1cnJlbnRIdW1pZGl0eVVuaXRFbGVtZW50LCBnZXRDdXJyZW50TG9jYXRpb25FbGVtZW50LCBnZXRDdXJyZW50UHJlc3N1cmVFbGVtZW50LCBnZXRDdXJyZW50UHJlc3N1cmVVbml0RWxlbWVudCwgZ2V0Q3VycmVudFRlbXBlcmF0dXJlRWxlbWVudCwgZ2V0Q3VycmVudFRlbXBlcmF0dXJlVW5pdEVsZW1lbnQsIGdldEN1cnJlbnRVdkluZGV4RWxlbWVudCwgZ2V0Q3VycmVudFdlYXRoZXJJY29uRWxlbWVudCwgZ2V0Q3VycmVudFdpbmRFbGVtZW50LCBnZXRDdXJyZW50V2luZFVuaXRFbGVtZW50IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvY3VycmVudC13ZWF0aGVyL2N1cnJlbnQtd2VhdGhlci1zZWN0aW9uXCI7XHJcbmltcG9ydCB7IGdldEZpcnN0RGF5Rm9yZWNhc3RFbGVtZW50LCBnZXRTZWNvbmREYXlGb3JlY2FzdEVsZW1lbnQsIGdldFRoaXJkRGF5Rm9yZWNhc3RFbGVtZW50IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9yZWNhc3QvZm9yZWNhc3Qtc2VjdGlvblwiO1xyXG5pbXBvcnQgeyBnZXREYXlOYW1lIH0gZnJvbSBcIi4uL2hlbHBlci9kYXRlXCI7XHJcbmltcG9ydCB7IGh1bWlkaXR5VW5pdCwgcHJlc3N1cmVVbml0cywgdGVtcGVyYXR1cmVVbml0cywgd2luZFNwZWVkVW5pdHMgfSBmcm9tIFwiLi4vdW5pdHMvdW5pdHNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVXZWF0aGVyRm9yZWNhc3QobG9jYXRpb24sIG1lYXN1cmVtZW50U3lzdGVtKSB7XHJcbiAgICBnZXRXZWF0aGVyRm9yZWNhc3REYXRhKGxvY2F0aW9uKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIC8vQ3VycmVudCB3ZWF0aGVyIGRhdGFcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudExvY2F0aW9uRGF0YSA9IGdldEZvcmVjYXN0TG9jYXRpb24oZGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRXZWF0aGVySWNvbkRhdGEgPSBnZXRDdXJlbnRXZWF0aGVySWNvbihkYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudENvbmRpdGlvbkRhdGEgPSBnZXRDdXJyZW50V2VhdGhlckNvbmRpdGlvbihkYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFRlbXBlcmF0dXJlRGF0YSA9IGdldEN1cnJlbnRUZW1wZXJhdHVyZShkYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFdpbmREYXRhID0gZ2V0Q3VycmVudFdpbmQoZGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRIdW1pZGl0eURhdGEgPSBnZXRDdXJyZW50SHVtaWRpdHkoZGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQcmVzc3VyZURhdGEgPSBnZXRDdXJyZW50UHJlc3N1cmUoZGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRVdkluZGV4RGF0YSA9IGdldEN1cnJlbnRVdkluZGV4KGRhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50RmVlbHNMaWtlVGVtcGVyYXR1cmVEYXRhID0gZ2V0Q3VycmVudEZlZWxzTGlrZVRlbXBlcmF0dXJlKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgLy9DdXJyZW50IHdlYXRoZXIgZGF0YSB2YWx1ZXMgZGlzcGxheVxyXG4gICAgICAgICAgICBnZXRDdXJyZW50TG9jYXRpb25FbGVtZW50KCkudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50TG9jYXRpb25EYXRhLmNpdHl9LCAke2N1cnJlbnRMb2NhdGlvbkRhdGEuY291bnRyeX1gO1xyXG4gICAgICAgICAgICBnZXRDdXJyZW50V2VhdGhlckljb25FbGVtZW50KCkuc3JjID0gYCR7Y3VycmVudFdlYXRoZXJJY29uRGF0YX1gO1xyXG4gICAgICAgICAgICBnZXRDdXJyZW50Q29uZGl0aW9uRWxlbWVudCgpLnRleHRDb250ZW50ID0gYCR7Y3VycmVudENvbmRpdGlvbkRhdGF9YDtcclxuXHJcbiAgICAgICAgICAgIGdldEN1cnJlbnRIdW1pZGl0eUVsZW1lbnQoKS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRIdW1pZGl0eURhdGF9YDtcclxuICAgICAgICAgICAgZ2V0Q3VycmVudFV2SW5kZXhFbGVtZW50KCkudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50VXZJbmRleERhdGF9YDtcclxuXHJcbiAgICAgICAgICAgIC8vRm9yZWNhc3QgZGF0YSBkaXNwbGF5XHJcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0RGF5RGF0YSA9IGdldEZpcnN0RGF5RGF0YShkYXRhKTtcclxuICAgICAgICAgICAgY29uc3Qgc2Vjb25kRGF5RGF0YSA9IGdldFNlY29uZERheURhdGEoZGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRoaXJkRGF5RGF0YSA9IGdldFRoaXJkRGF5RGF0YShkYXRhKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0RGF5Q29udGFpbmVyID0gZ2V0Rmlyc3REYXlGb3JlY2FzdEVsZW1lbnQoKTtcclxuICAgICAgICAgICAgY29uc3Qgc2Vjb25kRGF5Q29udGFpbmVyID0gZ2V0U2Vjb25kRGF5Rm9yZWNhc3RFbGVtZW50KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRoaXJkRGF5Q29udGFpbmVyID0gZ2V0VGhpcmREYXlGb3JlY2FzdEVsZW1lbnQoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0RGF5ID0gZ2V0RGF5TmFtZShmaXJzdERheURhdGEuZGF0ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZERheSA9IGdldERheU5hbWUoc2Vjb25kRGF5RGF0YS5kYXRlKTtcclxuICAgICAgICAgICAgY29uc3QgdGhpcmREYXkgPSBnZXREYXlOYW1lKHRoaXJkRGF5RGF0YS5kYXRlKTtcclxuXHJcbiAgICAgICAgICAgIGZpcnN0RGF5Q29udGFpbmVyLmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gZmlyc3REYXk7XHJcbiAgICAgICAgICAgIGZpcnN0RGF5Q29udGFpbmVyLmNoaWxkcmVuWzFdLnNyYyA9IGZpcnN0RGF5RGF0YS53ZWF0aGVySWNvblVSTDtcclxuICAgICAgICAgICAgZmlyc3REYXlDb250YWluZXIuY2hpbGRyZW5bMl0udGV4dENvbnRlbnQgPSBmaXJzdERheURhdGEuY29uZGl0aW9uO1xyXG5cclxuICAgICAgICAgICAgc2Vjb25kRGF5Q29udGFpbmVyLmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gc2Vjb25kRGF5O1xyXG4gICAgICAgICAgICBzZWNvbmREYXlDb250YWluZXIuY2hpbGRyZW5bMV0uc3JjID0gc2Vjb25kRGF5RGF0YS53ZWF0aGVySWNvblVSTDtcclxuICAgICAgICAgICAgc2Vjb25kRGF5Q29udGFpbmVyLmNoaWxkcmVuWzJdLnRleHRDb250ZW50ID0gc2Vjb25kRGF5RGF0YS5jb25kaXRpb247XHJcblxyXG4gICAgICAgICAgICB0aGlyZERheUNvbnRhaW5lci5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9IHRoaXJkRGF5O1xyXG4gICAgICAgICAgICB0aGlyZERheUNvbnRhaW5lci5jaGlsZHJlblsxXS5zcmMgPSB0aGlyZERheURhdGEud2VhdGhlckljb25VUkw7XHJcbiAgICAgICAgICAgIHRoaXJkRGF5Q29udGFpbmVyLmNoaWxkcmVuWzJdLnRleHRDb250ZW50ID0gdGhpcmREYXlEYXRhLmNvbmRpdGlvbjtcclxuXHJcblxyXG4gICAgICAgICAgICBpZiAobWVhc3VyZW1lbnRTeXN0ZW0gPT09ICdNZXRyaWMnKSB7XHJcbiAgICAgICAgICAgICAgICBnZXRDdXJyZW50VGVtcGVyYXR1cmVFbGVtZW50KCkudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50VGVtcGVyYXR1cmVEYXRhLnRlbXBlcmF0dXJlQ2Vsc2l1c31gO1xyXG4gICAgICAgICAgICAgICAgZ2V0Q3VycmVudEZlZWxzTGlrZUVsZW1lbnQoKS50ZXh0Q29udGVudCA9IGBGZWVscyBsaWtlOiAke2N1cnJlbnRGZWVsc0xpa2VUZW1wZXJhdHVyZURhdGEuZmVlbHNMaWtlQ2Vsc2l1c31gO1xyXG5cclxuICAgICAgICAgICAgICAgIGdldEN1cnJlbnRXaW5kRWxlbWVudCgpLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdpbmREYXRhLndpbmRLcGh9YDtcclxuICAgICAgICAgICAgICAgIGdldEN1cnJlbnRQcmVzc3VyZUVsZW1lbnQoKS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRQcmVzc3VyZURhdGEucHJlc3N1cmVNYmFyfWA7XHJcblxyXG4gICAgICAgICAgICAgICAgZmlyc3REYXlDb250YWluZXIuY2hpbGRyZW5bM10uY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSBmaXJzdERheURhdGEuYXZlcmFnZVRlbXBlcmF0dXJlQ2Vsc2l1cztcclxuICAgICAgICAgICAgICAgIGZpcnN0RGF5Q29udGFpbmVyLmNoaWxkcmVuWzNdLmNoaWxkcmVuWzFdLnRleHRDb250ZW50ID0gdGVtcGVyYXR1cmVVbml0cy5jZWxzaXVzO1xyXG5cclxuICAgICAgICAgICAgICAgIHNlY29uZERheUNvbnRhaW5lci5jaGlsZHJlblszXS5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9IHNlY29uZERheURhdGEuYXZlcmFnZVRlbXBlcmF0dXJlQ2Vsc2l1cztcclxuICAgICAgICAgICAgICAgIHNlY29uZERheUNvbnRhaW5lci5jaGlsZHJlblszXS5jaGlsZHJlblsxXS50ZXh0Q29udGVudCA9IHRlbXBlcmF0dXJlVW5pdHMuY2Vsc2l1cztcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlyZERheUNvbnRhaW5lci5jaGlsZHJlblszXS5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9IHRoaXJkRGF5RGF0YS5hdmVyYWdlVGVtcGVyYXR1cmVDZWxzaXVzO1xyXG4gICAgICAgICAgICAgICAgdGhpcmREYXlDb250YWluZXIuY2hpbGRyZW5bM10uY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgPSB0ZW1wZXJhdHVyZVVuaXRzLmNlbHNpdXM7XHJcblxyXG4gICAgICAgICAgICAgICAgZGlzcGxheU1ldHJpY1N5c3RlbVVuaXRzKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWVhc3VyZW1lbnRTeXN0ZW0gPT09ICdJbXBlcmlhbCcpIHtcclxuICAgICAgICAgICAgICAgIGdldEN1cnJlbnRUZW1wZXJhdHVyZUVsZW1lbnQoKS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRUZW1wZXJhdHVyZURhdGEudGVtcGVyYXR1cmVGYWhyZW5oZWl0fWA7XHJcbiAgICAgICAgICAgICAgICBnZXRDdXJyZW50RmVlbHNMaWtlRWxlbWVudCgpLnRleHRDb250ZW50ID0gYEZlZWxzIGxpa2U6ICR7Y3VycmVudEZlZWxzTGlrZVRlbXBlcmF0dXJlRGF0YS5mZWVsc0xpa2VGYWhyZW5oZWl0fWA7XHJcblxyXG4gICAgICAgICAgICAgICAgZ2V0Q3VycmVudFdpbmRFbGVtZW50KCkudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50V2luZERhdGEud2luZE1waH1gO1xyXG4gICAgICAgICAgICAgICAgZ2V0Q3VycmVudFByZXNzdXJlRWxlbWVudCgpLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFByZXNzdXJlRGF0YS5wcmVzc3VyZUlufWA7XHJcblxyXG4gICAgICAgICAgICAgICAgZmlyc3REYXlDb250YWluZXIuY2hpbGRyZW5bM10uY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSBmaXJzdERheURhdGEuYXZlcmFnZVRlbXBlcmF0dXJlRmFocmVuaGVpdDtcclxuICAgICAgICAgICAgICAgIGZpcnN0RGF5Q29udGFpbmVyLmNoaWxkcmVuWzNdLmNoaWxkcmVuWzFdLnRleHRDb250ZW50ID0gdGVtcGVyYXR1cmVVbml0cy5mYWhyZW5oZWl0O1xyXG5cclxuICAgICAgICAgICAgICAgIHNlY29uZERheUNvbnRhaW5lci5jaGlsZHJlblszXS5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9IHNlY29uZERheURhdGEuYXZlcmFnZVRlbXBlcmF0dXJlRmFocmVuaGVpdDtcclxuICAgICAgICAgICAgICAgIHNlY29uZERheUNvbnRhaW5lci5jaGlsZHJlblszXS5jaGlsZHJlblsxXS50ZXh0Q29udGVudCA9IHRlbXBlcmF0dXJlVW5pdHMuZmFocmVuaGVpdDtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlyZERheUNvbnRhaW5lci5jaGlsZHJlblszXS5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9IHRoaXJkRGF5RGF0YS5hdmVyYWdlVGVtcGVyYXR1cmVGYWhyZW5oZWl0O1xyXG4gICAgICAgICAgICAgICAgdGhpcmREYXlDb250YWluZXIuY2hpbGRyZW5bM10uY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgPSB0ZW1wZXJhdHVyZVVuaXRzLmZhaHJlbmhlaXQ7XHJcblxyXG4gICAgICAgICAgICAgICAgZGlzcGxheUltcGVyaWFsU3lzdGVtVW5pdHMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlNZXRyaWNTeXN0ZW1Vbml0cygpIHtcclxuICAgIGdldEN1cnJlbnRUZW1wZXJhdHVyZVVuaXRFbGVtZW50KCkudGV4dENvbnRlbnQgPSBgJHt0ZW1wZXJhdHVyZVVuaXRzLmNlbHNpdXN9YDtcclxuICAgIGdldEN1cnJlbnRGZWVsc0xpa2VVbml0RWxlbWVudCgpLnRleHRDb250ZW50ID0gYCR7dGVtcGVyYXR1cmVVbml0cy5jZWxzaXVzfWA7XHJcbiAgICBnZXRDdXJyZW50V2luZFVuaXRFbGVtZW50KCkudGV4dENvbnRlbnQgPSB3aW5kU3BlZWRVbml0cy5rcGg7XHJcbiAgICBnZXRDdXJyZW50SHVtaWRpdHlVbml0RWxlbWVudCgpLnRleHRDb250ZW50ID0gaHVtaWRpdHlVbml0O1xyXG4gICAgZ2V0Q3VycmVudFByZXNzdXJlVW5pdEVsZW1lbnQoKS50ZXh0Q29udGVudCA9IHByZXNzdXJlVW5pdHMubWJhcjtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUltcGVyaWFsU3lzdGVtVW5pdHMoKSB7XHJcbiAgICBnZXRDdXJyZW50VGVtcGVyYXR1cmVVbml0RWxlbWVudCgpLnRleHRDb250ZW50ID0gYCR7dGVtcGVyYXR1cmVVbml0cy5mYWhyZW5oZWl0fWA7XHJcbiAgICBnZXRDdXJyZW50RmVlbHNMaWtlVW5pdEVsZW1lbnQoKS50ZXh0Q29udGVudCA9IGAke3RlbXBlcmF0dXJlVW5pdHMuZmFocmVuaGVpdH1gO1xyXG4gICAgZ2V0Q3VycmVudFdpbmRVbml0RWxlbWVudCgpLnRleHRDb250ZW50ID0gd2luZFNwZWVkVW5pdHMubXBoO1xyXG4gICAgZ2V0Q3VycmVudEh1bWlkaXR5VW5pdEVsZW1lbnQoKS50ZXh0Q29udGVudCA9IGh1bWlkaXR5VW5pdDtcclxuICAgIGdldEN1cnJlbnRQcmVzc3VyZVVuaXRFbGVtZW50KCkudGV4dENvbnRlbnQgPSBwcmVzc3VyZVVuaXRzLmluY2hlcztcclxufVxyXG4iLCJpbXBvcnQgeyBnZXREYXkgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREYXlOYW1lKGRhdGUpIHtcclxuICAgIGNvbnN0IGRheU51bWJlciA9IGdldERheShkYXRlKTtcclxuXHJcbiAgICBzd2l0Y2goZGF5TnVtYmVyKSB7XHJcbiAgICAgICAgY2FzZSAxOiByZXR1cm4gJ01vbmRheSc7XHJcbiAgICAgICAgY2FzZSAyOiByZXR1cm4gJ1R1ZXNkYXknO1xyXG4gICAgICAgIGNhc2UgMzogcmV0dXJuICdXZWRuZXNkYXknO1xyXG4gICAgICAgIGNhc2UgNDogcmV0dXJuICdUaHVyc2RheSc7XHJcbiAgICAgICAgY2FzZSA1OiByZXR1cm4gJ0ZyaWRheSc7XHJcbiAgICAgICAgY2FzZSA2OiByZXR1cm4gJ1NhdHVyZGF5JztcclxuICAgICAgICBjYXNlIDc6IHJldHVybiAnU3VuZGF5JztcclxuICAgIH1cclxufSIsImltcG9ydCB7IGNyZWF0ZUNvbnRlbnRDb250YWluZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9jb250ZW50L2NvbnRlbnRcIjtcclxuaW1wb3J0IHsgZ2V0SW1wZXJpYWxTeXN0ZW1CdXR0b24sIGdldExvY2F0aW9uU2VhcmNoRmllbGQsIGdldE1ldHJpY1N5c3RlbUJ1dHRvbiwgZ2V0U2VhcmNoQnV0dG9uIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlclwiO1xyXG5pbXBvcnQgeyB1cGRhdGVXZWF0aGVyRm9yZWNhc3QgfSBmcm9tIFwiLi4vZnVuY3Rpb25zL21haW5cIjtcclxuaW1wb3J0IHsgY2hhbmdlVG9JbXBlcmlhbE1lYXN1cmVtZW50U3lzdGVtLCBjaGFuZ2VUb01ldHJpY01lYXN1cmVtZW50U3lzdGVtLCBtZWFzdXJlbWVudFN5c3RlbSwgc2V0TWVhc3VyZW1lbnRTeXN0ZW0gfSBmcm9tIFwiLi4vdW5pdHMvbWVhc3VyZW1lbnQtc2lzdGVtXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZVdlYnNpdGUoKSB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRlbnRDb250YWluZXIoKSk7XHJcbiAgICBsZXQgaW5pdGlhbExvY2F0aW9uID0gJ0JlbGdyYWRlJztcclxuXHJcbiAgICAvL0ZpcnN0IG9hZCAoRGVmYXVsdClcclxuICAgIHVwZGF0ZVdlYXRoZXJGb3JlY2FzdChpbml0aWFsTG9jYXRpb24sIG1lYXN1cmVtZW50U3lzdGVtKTtcclxuICAgIFxyXG4gICAgZ2V0U2VhcmNoQnV0dG9uKCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IFxyXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0gZ2V0TG9jYXRpb25TZWFyY2hGaWVsZCgpLnZhbHVlO1xyXG4gICAgICAgIGluaXRpYWxMb2NhdGlvbiA9IGxvY2F0aW9uO1xyXG5cclxuICAgICAgICB1cGRhdGVXZWF0aGVyRm9yZWNhc3QobG9jYXRpb24sIG1lYXN1cmVtZW50U3lzdGVtKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IG1ldHJpY1N5c3RlbUJ1dHRvbiA9IGdldE1ldHJpY1N5c3RlbUJ1dHRvbigpO1xyXG4gICAgY29uc3QgaW1wZXJpYWxTeXN0ZW1CdXR0b24gPSBnZXRJbXBlcmlhbFN5c3RlbUJ1dHRvbigpO1xyXG5cclxuICAgIG1ldHJpY1N5c3RlbUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBpZiAobWVhc3VyZW1lbnRTeXN0ZW0gPT09ICdNZXRyaWMnKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2UgaWYgKG1lYXN1cmVtZW50U3lzdGVtID09PSAnSW1wZXJpYWwnKSB7XHJcbiAgICAgICAgICAgIGNoYW5nZVRvTWV0cmljTWVhc3VyZW1lbnRTeXN0ZW0oKTtcclxuICAgICAgICAgICAgdXBkYXRlV2VhdGhlckZvcmVjYXN0KGluaXRpYWxMb2NhdGlvbiwgbWVhc3VyZW1lbnRTeXN0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGltcGVyaWFsU3lzdGVtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGlmIChtZWFzdXJlbWVudFN5c3RlbSA9PT0gJ0ltcGVyaWFsJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIGlmIChtZWFzdXJlbWVudFN5c3RlbSA9PT0gJ01ldHJpYycpIHtcclxuICAgICAgICAgICAgY2hhbmdlVG9JbXBlcmlhbE1lYXN1cmVtZW50U3lzdGVtKCk7XHJcbiAgICAgICAgICAgIHVwZGF0ZVdlYXRoZXJGb3JlY2FzdChpbml0aWFsTG9jYXRpb24sIG1lYXN1cmVtZW50U3lzdGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG4iLCJpbXBvcnQgeyBnZXRJbXBlcmlhbFN5c3RlbUJ1dHRvbiwgZ2V0TWV0cmljU3lzdGVtQnV0dG9uIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlclwiO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9zdHlsZXMuY3NzJztcclxuXHJcbmV4cG9ydCBsZXQgbWVhc3VyZW1lbnRTeXN0ZW0gPSAnTWV0cmljJztcclxuXHJcbmZ1bmN0aW9uIHNldE1lYXN1cmVtZW50U3lzdGVtKHZhbHVlKSB7XHJcbiAgICBtZWFzdXJlbWVudFN5c3RlbSA9IHZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVG9NZXRyaWNNZWFzdXJlbWVudFN5c3RlbSgpIHtcclxuICAgIGdldE1ldHJpY1N5c3RlbUJ1dHRvbigpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdibGFjayc7XHJcbiAgICBnZXRJbXBlcmlhbFN5c3RlbUJ1dHRvbigpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd2YXIoLS1tYWluLWFwcC1jb2xvciknO1xyXG4gICAgc2V0TWVhc3VyZW1lbnRTeXN0ZW0oJ01ldHJpYycpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVG9JbXBlcmlhbE1lYXN1cmVtZW50U3lzdGVtKCkge1xyXG4gICAgZ2V0SW1wZXJpYWxTeXN0ZW1CdXR0b24oKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYmxhY2snO1xyXG4gICAgZ2V0TWV0cmljU3lzdGVtQnV0dG9uKCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3ZhcigtLW1haW4tYXBwLWNvbG9yKSc7XHJcbiAgICBzZXRNZWFzdXJlbWVudFN5c3RlbSgnSW1wZXJpYWwnKTtcclxufVxyXG4iLCJleHBvcnQgY29uc3QgdGVtcGVyYXR1cmVVbml0cyA9IHtcclxuICAgIGNlbHNpdXM6ICfCsEMnLFxyXG4gICAgZmFocmVuaGVpdDogJ8KwRicsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgd2luZFNwZWVkVW5pdHMgPSB7XHJcbiAgICBrcGg6ICdrbS9oJyxcclxuICAgIG1waDogJ20vaCdcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBodW1pZGl0eVVuaXQgPSAnJSc7XHJcblxyXG5leHBvcnQgY29uc3QgcHJlc3N1cmVVbml0cyA9IHtcclxuICAgIG1iYXI6ICdtYmFyJyxcclxuICAgIGluY2hlczogJ2luJ1xyXG59O1xyXG5cclxuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGdldERheVxuICogQGNhdGVnb3J5IFdlZWtkYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBkYXkgb2YgdGhlIHdlZWsgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIGRheSBvZiB0aGUgd2VlayBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIGRheSBvZiB3ZWVrLCAwIHJlcHJlc2VudHMgU3VuZGF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIGRheSBvZiB0aGUgd2VlayBpcyAyOSBGZWJydWFyeSAyMDEyP1xuICogY29uc3QgcmVzdWx0ID0gZ2V0RGF5KG5ldyBEYXRlKDIwMTIsIDEsIDI5KSlcbiAqIC8vPT4gM1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5KGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IGRheSA9IF9kYXRlLmdldERheSgpO1xuICByZXR1cm4gZGF5O1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGdldERheTtcbiIsIi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBhcmd1bWVudCAtIFRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKlxuICogQHJldHVybnMgVGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgY29uc3QgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoXG4gICAgYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8XG4gICAgKHR5cGVvZiBhcmd1bWVudCA9PT0gXCJvYmplY3RcIiAmJiBhcmdTdHIgPT09IFwiW29iamVjdCBEYXRlXVwiKVxuICApIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IGFyZ3VtZW50LmNvbnN0cnVjdG9yKCthcmd1bWVudCk7XG4gIH0gZWxzZSBpZiAoXG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcIm51bWJlclwiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgTnVtYmVyXVwiIHx8XG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcInN0cmluZ1wiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgU3RyaW5nXVwiXG4gICkge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gVE9ETzogQ2FuIHdlIGdldCByaWQgb2YgYXM/XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCB0b0RhdGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgaW5pdGlhbGl6ZVdlYnNpdGUgfSBmcm9tIFwiLi4vaGVscGVyL2luaXQuanNcIjtcclxuaW1wb3J0ICcuLi9zdHlsZXMvc3R5bGVzLmNzcyc7XHJcblxyXG5pbml0aWFsaXplV2Vic2l0ZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==