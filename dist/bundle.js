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



`, "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;;IAEV,qGAAqG;;IAErG,yBAAyB;AAC7B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,SAAS;IACT,aAAa;IACb,kCAAkC;AACtC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,uCAAuC;IACvC,oBAAoB;IACpB,yDAA0D;IAC1D,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,OAAO;IACP,eAAe;IACf,iBAAiB;IACjB,OAAO;IACP,wCAAwC;IACxC,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,uCAAuC;IACvC,uCAAuC;IACvC,yDAA0D;IAC1D,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;IACjB,qBAAqB;IACrB,4BAA4B;AAChC;;AAEA;IACI,iBAAiB;IACjB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,oBAAoB;IACpB,oBAAoB;AACxB;;AAEA;IACI,oBAAoB;IACpB,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,2DAA2D;AAC/D;;AAEA;IACI,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,2DAA2D;AAC/D;;AAEA;IACI,sBAAsB;IACtB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;IAClB,qBAAqB;AACzB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,oBAAoB;IACpB,oBAAoB;IACpB,eAAe;AACnB","sourcesContent":["* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n\r\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n\r\n    --main-app-color: #00B2A0;\r\n}\r\n\r\n#content {\r\n    margin: auto;\r\n}\r\n\r\nheader {\r\n    box-shadow: 0ch 5px 20px 0px gray;\r\n}\r\n\r\n#header-content {\r\n    display: grid;\r\n    gap: 2rem;\r\n    padding: 1rem;\r\n    grid-template-columns: 2fr 3fr 2fr;\r\n}\r\n\r\n#title-container {\r\n    display: flex;\r\n    align-items: center;\r\n    font-size: 0.75rem;\r\n    width: auto;\r\n}\r\n\r\n#app-logo {\r\n    width: 40px;\r\n    height: 40px;\r\n    background-color: var(--main-app-color);\r\n    margin-right: 0.5rem;\r\n    background-image: url('../assets/icons/icons8-meteor.png');\r\n    background-size: cover;\r\n    border-radius: 25%;\r\n}\r\n\r\n#search-section {\r\n    display: flex;\r\n    gap: 0.5rem;\r\n    align-items: center;\r\n}\r\n\r\n#location-input {\r\n    flex: 1;\r\n    padding: 0.5rem;\r\n    font-size: 1.1rem;\r\n    flex: 1;\r\n    outline: 1px solid var(--main-app-color);\r\n    border: none;\r\n}\r\n\r\n#search-button {\r\n    height: 40px;\r\n    aspect-ratio: 1 / 1;\r\n    background-color: var(--main-app-color);;\r\n    border: 1px solid var(--main-app-color);\r\n    background-image: url('../assets/icons/icons8-search.png');\r\n    border-radius: 3px;\r\n}\r\n\r\nmain {\r\n    width: max(50%, 500px);\r\n    padding: 2rem 0rem;\r\n    margin: auto;\r\n}\r\n\r\n#current {\r\n    margin-bottom: 4rem;\r\n}\r\n\r\n#current-location-data-container {\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n#current-location-data-container > div {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n#current-location {\r\n    font-size: 2.5rem;\r\n    margin-bottom: 0.5rem;\r\n    color: var(--main-app-color);\r\n}\r\n\r\n#right-now {\r\n    font-size: 1.5rem;    \r\n    margin-bottom: 0.5rem;\r\n}\r\n\r\n#current-weather-icon-container {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n#current-weather-icon {\r\n    height: 80px;\r\n    aspect-ratio: 1 / 1;\r\n    object-fit: cover;\r\n}\r\n\r\n#current-condition-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    font-size: 1.5rem;\r\n    margin-bottom: 3rem;\r\n}\r\n\r\n#current-temperature-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-bottom: 3rem;\r\n}\r\n\r\n#current-temperature-container > img {\r\n    width: 80px;\r\n    height: 80px;\r\n    margin-top: 0.5rem;\r\n}\r\n\r\n#current-temperature-value-container { \r\n    font-size: 3rem;\r\n}\r\n\r\n#current-feels-like-container {\r\n    font-size: 1.25rem;\r\n}\r\n\r\n#current-temperature-unit {\r\n    margin-left: 0.33rem;\r\n    letter-spacing: -8px;\r\n}\r\n\r\n#current-feels-like-unit {\r\n    margin-left: 0.33rem;\r\n    letter-spacing: -3px;\r\n}\r\n\r\n#current-additional {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\r\n}\r\n\r\n#current-additional > div{\r\n    padding: 1rem;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n#current-wind-unit {\r\n    margin-left: 0.33rem;\r\n}\r\n\r\n#current-humidity-unit {\r\n    margin-left: 0.33rem;\r\n}\r\n\r\n#current-pressure-unit {\r\n    margin-left: 0.33rem;\r\n}\r\n\r\n#current-uv-unit {\r\n    margin-left: 0.33rem;\r\n}\r\n\r\n.additional-label {\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.additional-value {\r\n    font-size: 1.5rem;\r\n}\r\n\r\n#current-additional img {\r\n    margin-right: 1rem;\r\n}\r\n\r\n#three-day-forecast {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\r\n}\r\n\r\n.daily-forecast-header {\r\n    margin-bottom: 1.75rem;\r\n    font-size: 1.5rem;\r\n    text-align: center;\r\n}\r\n\r\n.daily-forecast {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    text-align: center;\r\n    margin-bottom: 1.5rem;\r\n}\r\n\r\n.daily-day {\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.daily-weather-icon {\r\n    width: 64px;\r\n    aspect-ratio: 1 / 1;\r\n}\r\n\r\n.daily-condition {\r\n    font-size: 1.2rem;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.daily-average-temperature {\r\n    font-size: 2rem;\r\n}\r\n\r\n.daily-average-temperature-unit {\r\n    margin-left: 0.33rem;\r\n    letter-spacing: -5px;\r\n    font-size: 2rem;\r\n}\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
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
        date: 'Today',
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
/* harmony export */   getLocationSearchField: () => (/* binding */ getLocationSearchField),
/* harmony export */   getSearchButton: () => (/* binding */ getSearchButton)
/* harmony export */ });
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/styles.css */ "./src/styles/styles.css");


function createHeader() {
    const header = document.createElement('header');
    const headerContent = document.createElement('div');

    const titleContainer = document.createElement('div');
    const appLogo = document.createElement('div');
    const title = document.createElement('h1');

    const searchSection = document.createElement('div');
    const locationInput = document.createElement('input');
    const searchButton = document.createElement('button');

    //Assigning id's to header elements
    headerContent.id = 'header-content';
    titleContainer.id = 'title-container';
    appLogo.id = 'app-logo';
    searchSection.id = 'search-section';
    locationInput.id = 'location-input';
    searchButton.id = 'search-button';

    title.textContent = "WeatherApp";

    //Creating the structure of the header
    header.appendChild(headerContent);
    headerContent.appendChild(titleContainer);
    headerContent.appendChild(searchSection);

    titleContainer.appendChild(appLogo);
    titleContainer.appendChild(title);

    searchSection.appendChild(locationInput);
    searchSection.appendChild(searchButton);

    return header;
}

function getLocationSearchField() {
    return document.querySelector('#location-input');
}

function getSearchButton() {
    return document.querySelector('#search-button');
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






function updateWeatherForecast(location) {
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

            console.log(data);
            //Current weather data values display
            (0,_components_current_weather_current_weather_section__WEBPACK_IMPORTED_MODULE_1__.getCurrentLocationElement)().textContent = `${currentLocationData.city}, ${currentLocationData.country}`;
            (0,_components_current_weather_current_weather_section__WEBPACK_IMPORTED_MODULE_1__.getCurrentWeatherIconElement)().src = `${currentWeatherIconData}`;
            (0,_components_current_weather_current_weather_section__WEBPACK_IMPORTED_MODULE_1__.getCurrentConditionElement)().textContent = `${currentConditionData}`;

            (0,_components_current_weather_current_weather_section__WEBPACK_IMPORTED_MODULE_1__.getCurrentTemperatureElement)().textContent = `${currentTemperatureData.temperatureCelsius}`;
            (0,_components_current_weather_current_weather_section__WEBPACK_IMPORTED_MODULE_1__.getCurrentFeelsLikeElement)().textContent = `Feels like: ${currentFeelsLikeTemperatureData.feelsLikeCelsius}`;

            (0,_components_current_weather_current_weather_section__WEBPACK_IMPORTED_MODULE_1__.getCurrentWindElement)().textContent = `${currentWindData.windKph}`;
            (0,_components_current_weather_current_weather_section__WEBPACK_IMPORTED_MODULE_1__.getCurrentHumidityElement)().textContent = `${currentHumidityData}`;
            (0,_components_current_weather_current_weather_section__WEBPACK_IMPORTED_MODULE_1__.getCurrentPressureElement)().textContent = `${currentPressureData.pressureMbar}`;
            (0,_components_current_weather_current_weather_section__WEBPACK_IMPORTED_MODULE_1__.getCurrentUvIndexElement)().textContent = `${currentUvIndexData}`;

            //Forecast data display
            const firstDayData = (0,_api_weather_api__WEBPACK_IMPORTED_MODULE_0__.getFirstDayData)(data);
            const secondDayData = (0,_api_weather_api__WEBPACK_IMPORTED_MODULE_0__.getSecondDayData)(data);
            const thirdDayData = (0,_api_weather_api__WEBPACK_IMPORTED_MODULE_0__.getThirdDayData)(data);

            const firstDayContainer = (0,_components_forecast_forecast_section__WEBPACK_IMPORTED_MODULE_2__.getFirstDayForecastElement)();
            const secondDayContainer = (0,_components_forecast_forecast_section__WEBPACK_IMPORTED_MODULE_2__.getSecondDayForecastElement)();
            const thirdDayContainer = (0,_components_forecast_forecast_section__WEBPACK_IMPORTED_MODULE_2__.getThirdDayForecastElement)();

            const secondDay = (0,_helper_date__WEBPACK_IMPORTED_MODULE_3__.getDayName)(secondDayData.date);
            const thirdDay = (0,_helper_date__WEBPACK_IMPORTED_MODULE_3__.getDayName)(thirdDayData.date);

            firstDayContainer.children[0].textContent = firstDayData.date;
            firstDayContainer.children[1].src = firstDayData.weatherIconURL;
            firstDayContainer.children[2].textContent = firstDayData.condition;
            firstDayContainer.children[3].children[0].textContent = firstDayData.averageTemperatureCelsius;
            firstDayContainer.children[3].children[1].textContent = _units_units__WEBPACK_IMPORTED_MODULE_4__.temperatureUnits.celsius;

            secondDayContainer.children[0].textContent = secondDay;
            secondDayContainer.children[1].src = secondDayData.weatherIconURL;
            secondDayContainer.children[2].textContent = secondDayData.condition;
            secondDayContainer.children[3].children[0].textContent = secondDayData.averageTemperatureCelsius;
            secondDayContainer.children[3].children[1].textContent = _units_units__WEBPACK_IMPORTED_MODULE_4__.temperatureUnits.celsius;

            thirdDayContainer.children[0].textContent = thirdDay;
            thirdDayContainer.children[1].src = thirdDayData.weatherIconURL;
            thirdDayContainer.children[2].textContent = thirdDayData.condition;
            thirdDayContainer.children[3].children[0].textContent = thirdDayData.averageTemperatureCelsius;
            thirdDayContainer.children[3].children[1].textContent = _units_units__WEBPACK_IMPORTED_MODULE_4__.temperatureUnits.celsius;

            setMetricSystemUnits();

        }).catch((error) => {
            console.log(error);
        });
}

function setMetricSystemUnits() {
    (0,_components_current_weather_current_weather_section__WEBPACK_IMPORTED_MODULE_1__.getCurrentTemperatureUnitElement)().textContent = `${_units_units__WEBPACK_IMPORTED_MODULE_4__.temperatureUnits.celsius}`;
    (0,_components_current_weather_current_weather_section__WEBPACK_IMPORTED_MODULE_1__.getCurrentFeelsLikeUnitElement)().textContent = `${_units_units__WEBPACK_IMPORTED_MODULE_4__.temperatureUnits.celsius}`;
    (0,_components_current_weather_current_weather_section__WEBPACK_IMPORTED_MODULE_1__.getCurrentWindUnitElement)().textContent = _units_units__WEBPACK_IMPORTED_MODULE_4__.windSpeedUnits.kph;
    (0,_components_current_weather_current_weather_section__WEBPACK_IMPORTED_MODULE_1__.getCurrentHumidityUnitElement)().textContent = _units_units__WEBPACK_IMPORTED_MODULE_4__.humidityUnit;
    (0,_components_current_weather_current_weather_section__WEBPACK_IMPORTED_MODULE_1__.getCurrentPressureUnitElement)().textContent = _units_units__WEBPACK_IMPORTED_MODULE_4__.pressureUnits.mbar;
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





function initializeWebsite() {
    document.body.appendChild((0,_components_content_content__WEBPACK_IMPORTED_MODULE_0__.createContentContainer)());
    //Default data loading
    (0,_functions_main__WEBPACK_IMPORTED_MODULE_2__.updateWeatherForecast)('Belgrade');
    
    (0,_components_header_header__WEBPACK_IMPORTED_MODULE_1__.getSearchButton)().addEventListener('click', () => { 
        const location = (0,_components_header_header__WEBPACK_IMPORTED_MODULE_1__.getLocationSearchField)().value;
        (0,_functions_main__WEBPACK_IMPORTED_MODULE_2__.updateWeatherForecast)(location);
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDTztBQUNuRyw0Q0FBNEMsOElBQW9EO0FBQ2hHLDRDQUE0Qyw4SUFBb0Q7QUFDaEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1DQUFtQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx3RkFBd0YsWUFBWSxXQUFXLFdBQVcsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFV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QUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25QaUM7QUFDakM7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsR2lDO0FBQ2pDO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDaUM7QUFDd0Q7QUFDcEI7QUFDckU7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFHQUEyQjtBQUNoRDtBQUNBLHFCQUFx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V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBc0Q7QUFDeEI7QUFDOUI7QUFDQSxrRUFBaUIsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcz9lNDViIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXBpL2RhdGEtYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2FwaS93ZWF0aGVyLWFwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbnRlbnQvY29udGVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL2N1cnJlbnQtd2VhdGhlci9jdXJyZW50LXdlYXRoZXItc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL2ZvcmVjYXN0L2ZvcmVjYXN0LXNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvbWFpbi1jb250ZW50L21haW4tY29udGVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9mdW5jdGlvbnMvbWFpbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9oZWxwZXIvZGF0ZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9oZWxwZXIvaW5pdC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy91bml0cy91bml0cy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXREYXkubWpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3RvRGF0ZS5tanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ljb25zL2ljb25zOC1tZXRlb3IucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2ljb25zL2ljb25zOC1zZWFyY2gucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuXHJcbiAgICBmb250LWZhbWlseTogJ1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuXHJcbiAgICAtLW1haW4tYXBwLWNvbG9yOiAjMDBCMkEwO1xyXG59XHJcblxyXG4jY29udGVudCB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgICBib3gtc2hhZG93OiAwY2ggNXB4IDIwcHggMHB4IGdyYXk7XHJcbn1cclxuXHJcbiNoZWFkZXItY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ2FwOiAycmVtO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDNmciAyZnI7XHJcbn1cclxuXHJcbiN0aXRsZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuI2FwcC1sb2dvIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjUlO1xyXG59XHJcblxyXG4jc2VhcmNoLXNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMC41cmVtO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuI2xvY2F0aW9uLWlucHV0IHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4jc2VhcmNoLWJ1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpOztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4tYXBwLWNvbG9yKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxubWFpbiB7XHJcbiAgICB3aWR0aDogbWF4KDUwJSwgNTAwcHgpO1xyXG4gICAgcGFkZGluZzogMnJlbSAwcmVtO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4jY3VycmVudCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xyXG59XHJcblxyXG4jY3VycmVudC1sb2NhdGlvbi1kYXRhLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcblxyXG4jY3VycmVudC1sb2NhdGlvbi1kYXRhLWNvbnRhaW5lciA+IGRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbiNjdXJyZW50LWxvY2F0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcclxufVxyXG5cclxuI3JpZ2h0LW5vdyB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTsgICAgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbiNjdXJyZW50LXdlYXRoZXItaWNvbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4jY3VycmVudC13ZWF0aGVyLWljb24ge1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4jY3VycmVudC1jb25kaXRpb24tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxufVxyXG5cclxuI2N1cnJlbnQtdGVtcGVyYXR1cmUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG59XHJcblxyXG4jY3VycmVudC10ZW1wZXJhdHVyZS1jb250YWluZXIgPiBpbWcge1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbn1cclxuXHJcbiNjdXJyZW50LXRlbXBlcmF0dXJlLXZhbHVlLWNvbnRhaW5lciB7IFxyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG59XHJcblxyXG4jY3VycmVudC1mZWVscy1saWtlLWNvbnRhaW5lciB7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbn1cclxuXHJcbiNjdXJyZW50LXRlbXBlcmF0dXJlLXVuaXQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuMzNyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLThweDtcclxufVxyXG5cclxuI2N1cnJlbnQtZmVlbHMtbGlrZS11bml0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjMzcmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0zcHg7XHJcbn1cclxuXHJcbiNjdXJyZW50LWFkZGl0aW9uYWwge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xyXG59XHJcblxyXG4jY3VycmVudC1hZGRpdGlvbmFsID4gZGl2e1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNjdXJyZW50LXdpbmQtdW5pdCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMC4zM3JlbTtcclxufVxyXG5cclxuI2N1cnJlbnQtaHVtaWRpdHktdW5pdCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMC4zM3JlbTtcclxufVxyXG5cclxuI2N1cnJlbnQtcHJlc3N1cmUtdW5pdCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMC4zM3JlbTtcclxufVxyXG5cclxuI2N1cnJlbnQtdXYtdW5pdCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMC4zM3JlbTtcclxufVxyXG5cclxuLmFkZGl0aW9uYWwtbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuXHJcbi5hZGRpdGlvbmFsLXZhbHVlIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG4jY3VycmVudC1hZGRpdGlvbmFsIGltZyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbiN0aHJlZS1kYXktZm9yZWNhc3Qge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xyXG59XHJcblxyXG4uZGFpbHktZm9yZWNhc3QtaGVhZGVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNzVyZW07XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmRhaWx5LWZvcmVjYXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxufVxyXG5cclxuLmRhaWx5LWRheSB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuLmRhaWx5LXdlYXRoZXItaWNvbiB7XHJcbiAgICB3aWR0aDogNjRweDtcclxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XHJcbn1cclxuXHJcbi5kYWlseS1jb25kaXRpb24ge1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uZGFpbHktYXZlcmFnZS10ZW1wZXJhdHVyZSB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuXHJcbi5kYWlseS1hdmVyYWdlLXRlbXBlcmF0dXJlLXVuaXQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuMzNyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTVweDtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5cclxuXHJcblxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTs7SUFFVixxR0FBcUc7O0lBRXJHLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULGFBQWE7SUFDYixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVDQUF1QztJQUN2QyxvQkFBb0I7SUFDcEIseURBQTBEO0lBQzFELHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLE9BQU87SUFDUCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLE9BQU87SUFDUCx3Q0FBd0M7SUFDeEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsdUNBQXVDO0lBQ3ZDLHVDQUF1QztJQUN2Qyx5REFBMEQ7SUFDMUQsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDJEQUEyRDtBQUMvRDs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyREFBMkQ7QUFDL0Q7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG5cXHJcXG4gICAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuXFxyXFxuICAgIC0tbWFpbi1hcHAtY29sb3I6ICMwMEIyQTA7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgICBib3gtc2hhZG93OiAwY2ggNXB4IDIwcHggMHB4IGdyYXk7XFxyXFxufVxcclxcblxcclxcbiNoZWFkZXItY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyIDJmcjtcXHJcXG59XFxyXFxuXFxyXFxuI3RpdGxlLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxufVxcclxcblxcclxcbiNhcHAtbG9nbyB7XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL2ljb25zL2ljb25zOC1tZXRlb3IucG5nJyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDI1JTtcXHJcXG59XFxyXFxuXFxyXFxuI3NlYXJjaC1zZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAwLjVyZW07XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNsb2NhdGlvbi1pbnB1dCB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS1tYWluLWFwcC1jb2xvcik7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3NlYXJjaC1idXR0b24ge1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTs7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4tYXBwLWNvbG9yKTtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9hc3NldHMvaWNvbnMvaWNvbnM4LXNlYXJjaC5wbmcnKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gICAgd2lkdGg6IG1heCg1MCUsIDUwMHB4KTtcXHJcXG4gICAgcGFkZGluZzogMnJlbSAwcmVtO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbiNjdXJyZW50IHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2N1cnJlbnQtbG9jYXRpb24tZGF0YS1jb250YWluZXIge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY3VycmVudC1sb2NhdGlvbi1kYXRhLWNvbnRhaW5lciA+IGRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jY3VycmVudC1sb2NhdGlvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbiNyaWdodC1ub3cge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTsgICAgXFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2N1cnJlbnQtd2VhdGhlci1pY29uLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jY3VycmVudC13ZWF0aGVyLWljb24ge1xcclxcbiAgICBoZWlnaHQ6IDgwcHg7XFxyXFxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxyXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4jY3VycmVudC1jb25kaXRpb24tY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY3VycmVudC10ZW1wZXJhdHVyZS1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2N1cnJlbnQtdGVtcGVyYXR1cmUtY29udGFpbmVyID4gaW1nIHtcXHJcXG4gICAgd2lkdGg6IDgwcHg7XFxyXFxuICAgIGhlaWdodDogODBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY3VycmVudC10ZW1wZXJhdHVyZS12YWx1ZS1jb250YWluZXIgeyBcXHJcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY3VycmVudC1mZWVscy1saWtlLWNvbnRhaW5lciB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2N1cnJlbnQtdGVtcGVyYXR1cmUtdW5pdCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwLjMzcmVtO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogLThweDtcXHJcXG59XFxyXFxuXFxyXFxuI2N1cnJlbnQtZmVlbHMtbGlrZS11bml0IHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDAuMzNyZW07XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAtM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4jY3VycmVudC1hZGRpdGlvbmFsIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XFxyXFxufVxcclxcblxcclxcbiNjdXJyZW50LWFkZGl0aW9uYWwgPiBkaXZ7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jY3VycmVudC13aW5kLXVuaXQge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMC4zM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2N1cnJlbnQtaHVtaWRpdHktdW5pdCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwLjMzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY3VycmVudC1wcmVzc3VyZS11bml0IHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDAuMzNyZW07XFxyXFxufVxcclxcblxcclxcbiNjdXJyZW50LXV2LXVuaXQge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMC4zM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZGl0aW9uYWwtbGFiZWwge1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZGl0aW9uYWwtdmFsdWUge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2N1cnJlbnQtYWRkaXRpb25hbCBpbWcge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiN0aHJlZS1kYXktZm9yZWNhc3Qge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LWZvcmVjYXN0LWhlYWRlciB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEuNzVyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kYWlseS1mb3JlY2FzdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktZGF5IHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5kYWlseS13ZWF0aGVyLWljb24ge1xcclxcbiAgICB3aWR0aDogNjRweDtcXHJcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LWNvbmRpdGlvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGFpbHktYXZlcmFnZS10ZW1wZXJhdHVyZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRhaWx5LWF2ZXJhZ2UtdGVtcGVyYXR1cmUtdW5pdCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwLjMzcmVtO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogLTVweDtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNvbnN0IEFQSV9LRVkgPSBgNTM1MTdlZTcxZGM3NDY5MmFhZTEyNDkzMzI0MTQwM2A7XHJcbmV4cG9ydCBjb25zdCBCQVNFX1VSTCA9IGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxYDtcclxuZXhwb3J0IGNvbnN0IFRIUkVFX0RBWV9GT1JFQ0FTVF9NRVRIT0QgPSAnZm9yZWNhc3QnOyIsImltcG9ydCB7IEFQSV9LRVksIEJBU0VfVVJMLCBUSFJFRV9EQVlfRk9SRUNBU1RfTUVUSE9EIH0gZnJvbSBcIi4vZGF0YS1hcGlcIjtcclxuXHJcbi8vUmV0cmlldmVzIHRoZSB3ZWF0aGVyIGZvcmVjYXN0IGZvciAzIGRheXMsIHN0YXJ0aW5nIGZyb20gdGhlIGN1cnJlbnQgZGF5XHJcbi8vUmV0cmlldmVzIHRoZSBjdXJyZW50IHdlYXRoZXIgZGF0YVxyXG4vL1JldHJpZXZlcyBkYXRhIGFib3V0IHRoZSBsb2NhdGlvblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckZvcmVjYXN0RGF0YShsb2NhdGlvbikge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtCQVNFX1VSTH0vJHtUSFJFRV9EQVlfRk9SRUNBU1RfTUVUSE9EfS5qc29uP2tleT0ke0FQSV9LRVl9JnE9JHtsb2NhdGlvbn0mZGF5cz0zYCwgeyBtb2RlOiAnY29ycycgfSk7XHJcbiAgICBjb25zdCB3ZWF0aGVyRm9yZWNhc3REYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIHJldHVybiB3ZWF0aGVyRm9yZWNhc3REYXRhO1xyXG59XHJcblxyXG4vL0Rlcml2YXRpdmUgZnVuY3Rpb25zIGZvciBjdXJyZW50IHdlYXRoZXIgY29uZGl0aW9ucyA9PlxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rm9yZWNhc3RMb2NhdGlvbihkYXRhKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNpdHk6IGRhdGEubG9jYXRpb24ubmFtZSxcclxuICAgICAgICBjb3VudHJ5OiBkYXRhLmxvY2F0aW9uLmNvdW50cnlcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJlbnRXZWF0aGVySWNvbihkYXRhKSB7XHJcbiAgICByZXR1cm4gYGh0dHBzOiR7ZGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29ufWA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50V2VhdGhlckNvbmRpdGlvbihkYXRhKSB7XHJcbiAgICByZXR1cm4gZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFRlbXBlcmF0dXJlKGRhdGEpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGVtcGVyYXR1cmVDZWxzaXVzOiBkYXRhLmN1cnJlbnQudGVtcF9jLFxyXG4gICAgICAgIHRlbXBlcmF0dXJlRmFocmVuaGVpdDogZGF0YS5jdXJyZW50LnRlbXBfZlxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudEZlZWxzTGlrZVRlbXBlcmF0dXJlKGRhdGEpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZmVlbHNMaWtlQ2Vsc2l1czogZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9jLFxyXG4gICAgICAgIGZlZWxzTGlrZUZhaHJlbmhlaXQ6IGRhdGEuY3VycmVudC5mZWVsc2xpa2VfZlxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFdpbmQoZGF0YSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB3aW5kS3BoOiBkYXRhLmN1cnJlbnQud2luZF9rcGgsXHJcbiAgICAgICAgd2luZE1waDogZGF0YS5jdXJyZW50LndpbmRfbXBoXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50SHVtaWRpdHkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGRhdGEuY3VycmVudC5odW1pZGl0eTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRQcmVzc3VyZShkYXRhKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByZXNzdXJlTWJhcjogZGF0YS5jdXJyZW50LnByZXNzdXJlX21iLFxyXG4gICAgICAgIHByZXNzdXJlSW46IGRhdGEuY3VycmVudC5wcmVzc3VyZV9pblxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFV2SW5kZXgoZGF0YSkge1xyXG4gICAgcmV0dXJuIGRhdGEuY3VycmVudC51djtcclxufVxyXG5cclxuLy9EZXJpdmF0aXZlIGZ1bmN0aW9ucyBmb3IgdGhlIHRocmVlIGRheSBmb3JjYXN0ID0+XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRGaXJzdERheURhdGEoZGF0YSkge1xyXG4gICAgY29uc3QgZmlyc3REYXlEYXRhID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRhdGU6ICdUb2RheScsXHJcbiAgICAgICAgd2VhdGhlckljb25VUkw6IGBodHRwczoke2ZpcnN0RGF5RGF0YS5kYXkuY29uZGl0aW9uLmljb259YCxcclxuICAgICAgICBjb25kaXRpb246IGZpcnN0RGF5RGF0YS5kYXkuY29uZGl0aW9uLnRleHQsXHJcbiAgICAgICAgYXZlcmFnZVRlbXBlcmF0dXJlQ2Vsc2l1czogZmlyc3REYXlEYXRhLmRheS5hdmd0ZW1wX2MsXHJcbiAgICAgICAgYXZlcmFnZVRlbXBlcmF0dXJlRmFocmVuaGVpdDogZmlyc3REYXlEYXRhLmRheS5hdmd0ZW1wX2YsXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTZWNvbmREYXlEYXRhKGRhdGEpIHtcclxuICAgIGNvbnN0IHNlY29uZERheURhdGEgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZGF0ZTogc2Vjb25kRGF5RGF0YS5kYXRlLFxyXG4gICAgICAgIHdlYXRoZXJJY29uVVJMOiBgaHR0cHM6JHtzZWNvbmREYXlEYXRhLmRheS5jb25kaXRpb24uaWNvbn1gLFxyXG4gICAgICAgIGNvbmRpdGlvbjogc2Vjb25kRGF5RGF0YS5kYXkuY29uZGl0aW9uLnRleHQsXHJcbiAgICAgICAgYXZlcmFnZVRlbXBlcmF0dXJlQ2Vsc2l1czogc2Vjb25kRGF5RGF0YS5kYXkuYXZndGVtcF9jLFxyXG4gICAgICAgIGF2ZXJhZ2VUZW1wZXJhdHVyZUZhaHJlbmhlaXQ6IHNlY29uZERheURhdGEuZGF5LmF2Z3RlbXBfZixcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRoaXJkRGF5RGF0YShkYXRhKSB7XHJcbiAgICBjb25zdCB0aGlyZERheURhdGEgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZGF0ZTogdGhpcmREYXlEYXRhLmRhdGUsXHJcbiAgICAgICAgd2VhdGhlckljb25VUkw6IGBodHRwczoke3RoaXJkRGF5RGF0YS5kYXkuY29uZGl0aW9uLmljb259YCxcclxuICAgICAgICBjb25kaXRpb246IHRoaXJkRGF5RGF0YS5kYXkuY29uZGl0aW9uLnRleHQsXHJcbiAgICAgICAgYXZlcmFnZVRlbXBlcmF0dXJlQ2Vsc2l1czogdGhpcmREYXlEYXRhLmRheS5hdmd0ZW1wX2MsXHJcbiAgICAgICAgYXZlcmFnZVRlbXBlcmF0dXJlRmFocmVuaGVpdDogdGhpcmREYXlEYXRhLmRheS5hdmd0ZW1wX2YsXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgJy4uLy4uL3N0eWxlcy9zdHlsZXMuY3NzJztcclxuaW1wb3J0IHsgY3JlYXRlSGVhZGVyIH0gZnJvbSAnLi4vaGVhZGVyL2hlYWRlcic7XHJcbmltcG9ydCB7IGNyZWF0ZU1haW5Db250ZW50fSBmcm9tICcuLi9tYWluLWNvbnRlbnQvbWFpbi1jb250ZW50JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb250ZW50Q29udGFpbmVyKCkge1xyXG4gICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGVudENvbnRhaW5lci5pZCA9ICdjb250ZW50JztcclxuXHJcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcclxuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbkNvbnRlbnQoKSk7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRlbnRDb250YWluZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb250ZW50Q29udGFpbmVyKCkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XHJcbn0iLCJpbXBvcnQgJy4uLy4uL3N0eWxlcy9zdHlsZXMuY3NzJztcclxuaW1wb3J0IHRlbXBlcmF0dXJlSWNvblBhdGggZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljb25zOC10ZW1wZXJhdHVyZS5wbmcnO1xyXG5pbXBvcnQgd2luZEljb25QYXRoIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9pY29uczgtd2luZC5wbmcnO1xyXG5pbXBvcnQgaHVtaWRpdHlJY29uUGF0aCBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWNvbnM4LWh1bWlkaXR5LnBuZyc7XHJcbmltcG9ydCBwcmVzc3VyZUljb25QYXRoIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9pY29uczgtcHJlc3N1cmUucG5nJztcclxuaW1wb3J0IHV2SW5kZXhJY29uUGF0aCBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWNvbnM4LXV2LnBuZyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ3VycmVudFdlYXRoZXJTZWN0aW9uKCkge1xyXG4gICAgY29uc3QgY3VycmVudFdlYXRoZXJEYXRhQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgY29uc3QgY3VycmVudExvY2F0aW9uRGF0YUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgY3VycmVudExvY2F0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBjdXJyZW50TG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgY29uc3QgcmlnaHROb3dDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHJpZ2h0Tm93UGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRXZWF0aGVySWNvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgY3VycmVudFdlYXRoZXJJY29uID0gbmV3IEltYWdlKCk7XHJcblxyXG4gICAgY29uc3QgY3VycmVudENvbmRpdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgY3VycmVudENvbmRpdGlvblBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50VGVtcGVyYXR1cmVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGN1cnJlbnRUZW1wZXJhdHVyZUljb24gPSBuZXcgSW1hZ2UoKTtcclxuICAgIGNvbnN0IGN1cnJlbnRUZW1wZXJhdHVyZVZhbHVlc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgY3VycmVudFRlbXBlcmF0dXJlVmFsdWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGN1cnJlbnRUZW1wZXJhdHVyZVZhbHVlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGNvbnN0IGN1cnJlbnRUZW1wZXJhdHVyZVVuaXRTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgY29uc3QgY3VycmVudEZlZWxzTGlrZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgY3VycmVudEZlZWxzTGlrZVZhbHVlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGNvbnN0IGN1cnJlbnRGZWVsc0xpa2VVbml0U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50QWRkaXRpb25hbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRXaW5kQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCB3aW5kSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgY29uc3Qgd2luZERhdGFDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHdpbmRQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb25zdCB3aW5kVmFsdWVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgY29uc3Qgd2luZFZhbHVlVW5pdFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcblxyXG4gICAgY29uc3QgY3VycmVudEh1bWlkaXR5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBodW1pZGl0eUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGNvbnN0IGh1bWlkaXR5RGF0YUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgaHVtaWRpdHlQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb25zdCBodW1pZGl0eVZhbHVlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGNvbnN0IGh1bWlkaXR5VmFsdWVVbml0U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50UHJlc3N1cmVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHByZXNzdXJlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgY29uc3QgcHJlc3N1cmVEYXRhQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBwcmVzc3VyZVBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnN0IHByZXNzdXJlVmFsdWVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgY29uc3QgcHJlc3N1cmVWYWx1ZVVuaXRTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRVdkluZGV4Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCB1dkluZGV4SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgY29uc3QgdXZJbmRleERhdGFDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHV2SW5kZXhQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb25zdCB1dkluZGV4VmFsdWVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cclxuICAgIC8vQXNzaWduaW5nIGlkIHNlbGVjdG9ycyB0byBjdXJyZW50IHdlYXRoZXIgc2VjdGlvbiBlbGVtZW50c1xyXG4gICAgY3VycmVudFdlYXRoZXJEYXRhQ29udGFpbmVyLmlkID0gJ2N1cnJlbnQnO1xyXG4gICAgY3VycmVudExvY2F0aW9uRGF0YUNvbnRhaW5lci5pZCA9ICdjdXJyZW50LWxvY2F0aW9uLWRhdGEtY29udGFpbmVyJztcclxuXHJcbiAgICBjdXJyZW50TG9jYXRpb24uaWQgPSAnY3VycmVudC1sb2NhdGlvbic7XHJcbiAgICByaWdodE5vd1BhcmFncmFwaC5pZCA9ICdyaWdodC1ub3cnO1xyXG5cclxuICAgIGN1cnJlbnRXZWF0aGVySWNvbkNvbnRhaW5lci5pZCA9ICdjdXJyZW50LXdlYXRoZXItaWNvbi1jb250YWluZXInO1xyXG4gICAgY3VycmVudFdlYXRoZXJJY29uLmlkID0gJ2N1cnJlbnQtd2VhdGhlci1pY29uJztcclxuXHJcbiAgICBjdXJyZW50Q29uZGl0aW9uQ29udGFpbmVyLmlkID0gJ2N1cnJlbnQtY29uZGl0aW9uLWNvbnRhaW5lcic7XHJcbiAgICBjdXJyZW50Q29uZGl0aW9uUGFyYWdyYXBoLmlkID0gJ2N1cnJlbnQtY29uZGl0aW9uJztcclxuXHJcbiAgICBjdXJyZW50VGVtcGVyYXR1cmVDb250YWluZXIuaWQgPSAnY3VycmVudC10ZW1wZXJhdHVyZS1jb250YWluZXInO1xyXG4gICAgY3VycmVudFRlbXBlcmF0dXJlVmFsdWVzQ29udGFpbmVyLmlkID0gJ2N1cnJlbnQtdGVtcGVyYXR1cmUtdmFsdWVzLWNvbnRhaW5lcic7XHJcbiAgICBjdXJyZW50VGVtcGVyYXR1cmVWYWx1ZUNvbnRhaW5lci5pZCA9ICdjdXJyZW50LXRlbXBlcmF0dXJlLXZhbHVlLWNvbnRhaW5lcic7XHJcbiAgICBjdXJyZW50VGVtcGVyYXR1cmVWYWx1ZVNwYW4uaWQgPSAnY3VycmVudC10ZW1wZXJhdHVyZSc7XHJcbiAgICBjdXJyZW50VGVtcGVyYXR1cmVVbml0U3Bhbi5pZCA9ICdjdXJyZW50LXRlbXBlcmF0dXJlLXVuaXQnO1xyXG5cclxuICAgIGN1cnJlbnRGZWVsc0xpa2VDb250YWluZXIuaWQgPSAnY3VycmVudC1mZWVscy1saWtlLWNvbnRhaW5lcic7XHJcbiAgICBjdXJyZW50RmVlbHNMaWtlVmFsdWVTcGFuLmlkID0gJ2N1cnJlbnQtZmVlbHMtbGlrZSc7XHJcbiAgICBjdXJyZW50RmVlbHNMaWtlVW5pdFNwYW4uaWQgPSAnY3VycmVudC1mZWVscy1saWtlLXVuaXQnO1xyXG5cclxuICAgIGN1cnJlbnRBZGRpdGlvbmFsQ29udGFpbmVyLmlkID0gJ2N1cnJlbnQtYWRkaXRpb25hbCc7XHJcblxyXG4gICAgY3VycmVudFdpbmRDb250YWluZXIuaWQgPSAnY3VycmVudC13aW5kLWNvbnRhaW5lcic7XHJcbiAgICB3aW5kVmFsdWVTcGFuLmlkID0gJ2N1cnJlbnQtd2luZCc7XHJcbiAgICB3aW5kVmFsdWVVbml0U3Bhbi5pZCA9ICdjdXJyZW50LXdpbmQtdW5pdCc7XHJcblxyXG4gICAgY3VycmVudEh1bWlkaXR5Q29udGFpbmVyLmlkID0gJ2N1cnJlbnQtaHVtaWRpdHktY29udGFpbmVyJztcclxuICAgIGh1bWlkaXR5VmFsdWVTcGFuLmlkID0gJ2N1cnJlbnQtaHVtaWRpdHknO1xyXG4gICAgaHVtaWRpdHlWYWx1ZVVuaXRTcGFuLmlkID0gJ2N1cnJlbnQtaHVtaWRpdHktdW5pdCc7XHJcblxyXG4gICAgY3VycmVudFByZXNzdXJlQ29udGFpbmVyLmlkID0gJ2N1cnJlbnQtcHJlc3N1cmUtY29udGFpbmVyJztcclxuICAgIHByZXNzdXJlVmFsdWVTcGFuLmlkID0gJ2N1cnJlbnQtcHJlc3N1cmUnO1xyXG4gICAgcHJlc3N1cmVWYWx1ZVVuaXRTcGFuLmlkID0gJ2N1cnJlbnQtcHJlc3N1cmUtdW5pdCc7XHJcblxyXG4gICAgY3VycmVudFV2SW5kZXhDb250YWluZXIuaWQgPSAnY3VycmVudC11di1jb250YWluZXInO1xyXG4gICAgdXZJbmRleFZhbHVlU3Bhbi5pZCA9ICdjdXJyZW50LXV2JztcclxuXHJcbiAgICAvL0Fzc2lnbmluZyBjbGFzcyBzZWxlY3RvcnMgdG8gY3VycmVudCB3ZWF0aGVyIHNlY3Rpb24gZWxlbWVudHNcclxuICAgIHdpbmRQYXJhZ3JhcGguY2xhc3NMaXN0LmFkZCgnYWRkaXRpb25hbC1sYWJlbCcpO1xyXG4gICAgd2luZFZhbHVlU3Bhbi5jbGFzc0xpc3QuYWRkKCdhZGRpdGlvbmFsLXZhbHVlJyk7XHJcbiAgICB3aW5kVmFsdWVVbml0U3Bhbi5jbGFzc0xpc3QuYWRkKCdhZGRpdGlvbmFsLXZhbHVlJyk7XHJcblxyXG4gICAgaHVtaWRpdHlQYXJhZ3JhcGguY2xhc3NMaXN0LmFkZCgnYWRkaXRpb25hbC1sYWJlbCcpO1xyXG4gICAgaHVtaWRpdHlWYWx1ZVNwYW4uY2xhc3NMaXN0LmFkZCgnYWRkaXRpb25hbC12YWx1ZScpO1xyXG4gICAgaHVtaWRpdHlWYWx1ZVVuaXRTcGFuLmNsYXNzTGlzdC5hZGQoJ2FkZGl0aW9uYWwtdmFsdWUnKTtcclxuXHJcbiAgICBwcmVzc3VyZVBhcmFncmFwaC5jbGFzc0xpc3QuYWRkKCdhZGRpdGlvbmFsLWxhYmVsJyk7XHJcbiAgICBwcmVzc3VyZVZhbHVlU3Bhbi5jbGFzc0xpc3QuYWRkKCdhZGRpdGlvbmFsLXZhbHVlJyk7XHJcbiAgICBwcmVzc3VyZVZhbHVlVW5pdFNwYW4uY2xhc3NMaXN0LmFkZCgnYWRkaXRpb25hbC12YWx1ZScpO1xyXG5cclxuICAgIHV2SW5kZXhQYXJhZ3JhcGguY2xhc3NMaXN0LmFkZCgnYWRkaXRpb25hbC1sYWJlbCcpO1xyXG4gICAgdXZJbmRleFZhbHVlU3Bhbi5jbGFzc0xpc3QuYWRkKCdhZGRpdGlvbmFsLXZhbHVlJyk7XHJcblxyXG4gICAgLy9Bc3NpZ25pbmcgcHJvcGVydHkgdmFsdWVzIHRvIGN1cnJlbnQgd2VhdGVyIHNlY3Rpb24gZWxlbWVudHNcclxuICAgIHJpZ2h0Tm93UGFyYWdyYXBoLnRleHRDb250ZW50ID0gJ1JpZ2h0IE5vdyc7XHJcbiAgICB3aW5kUGFyYWdyYXBoLnRleHRDb250ZW50ID0gJ1dpbmQnO1xyXG4gICAgaHVtaWRpdHlQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSAnSHVtaWRpdHknO1xyXG4gICAgcHJlc3N1cmVQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSAnUHJlc3N1cmUnO1xyXG4gICAgdXZJbmRleFBhcmFncmFwaC50ZXh0Q29udGVudCA9ICdVViBJbmRleCc7XHJcbiAgIFxyXG4gICAgY3VycmVudFRlbXBlcmF0dXJlSWNvbi5zcmMgPSBgJHt0ZW1wZXJhdHVyZUljb25QYXRofWA7XHJcbiAgICB3aW5kSWNvbi5zcmMgPSBgJHt3aW5kSWNvblBhdGh9YDtcclxuICAgIGh1bWlkaXR5SWNvbi5zcmMgPSBgJHtodW1pZGl0eUljb25QYXRofWA7XHJcbiAgICBwcmVzc3VyZUljb24uc3JjID0gYCR7cHJlc3N1cmVJY29uUGF0aH1gO1xyXG4gICAgdXZJbmRleEljb24uc3JjID0gYCR7dXZJbmRleEljb25QYXRofWA7XHJcblxyXG4gICAgLy9DcmVhdGluZyB0aGUgc3RydWN0dXJlIG9mIHRoZSBjdXJyZW50IHdlYXRoZXIgc2VjdGlvblxyXG4gICAgY3VycmVudFdlYXRoZXJEYXRhQ29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRMb2NhdGlvbkRhdGFDb250YWluZXIpO1xyXG4gICAgY3VycmVudFdlYXRoZXJEYXRhQ29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRXZWF0aGVySWNvbkNvbnRhaW5lcik7XHJcbiAgICBjdXJyZW50V2VhdGhlckRhdGFDb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudENvbmRpdGlvbkNvbnRhaW5lcik7XHJcbiAgICBjdXJyZW50V2VhdGhlckRhdGFDb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudFRlbXBlcmF0dXJlQ29udGFpbmVyKTtcclxuICAgIGN1cnJlbnRXZWF0aGVyRGF0YUNvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50QWRkaXRpb25hbENvbnRhaW5lcik7XHJcblxyXG4gICAgY3VycmVudExvY2F0aW9uRGF0YUNvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50TG9jYXRpb25Db250YWluZXIpO1xyXG4gICAgY3VycmVudExvY2F0aW9uRGF0YUNvbnRhaW5lci5hcHBlbmRDaGlsZChyaWdodE5vd0NvbnRhaW5lcik7XHJcblxyXG4gICAgY3VycmVudExvY2F0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRMb2NhdGlvbik7XHJcbiAgICByaWdodE5vd0NvbnRhaW5lci5hcHBlbmRDaGlsZChyaWdodE5vd1BhcmFncmFwaCk7XHJcblxyXG4gICAgY3VycmVudFdlYXRoZXJJY29uQ29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRXZWF0aGVySWNvbik7XHJcbiAgICBjdXJyZW50Q29uZGl0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRDb25kaXRpb25QYXJhZ3JhcGgpO1xyXG5cclxuICAgIGN1cnJlbnRUZW1wZXJhdHVyZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50VGVtcGVyYXR1cmVJY29uKTtcclxuICAgIGN1cnJlbnRUZW1wZXJhdHVyZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50VGVtcGVyYXR1cmVWYWx1ZXNDb250YWluZXIpO1xyXG4gICAgY3VycmVudFRlbXBlcmF0dXJlVmFsdWVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRUZW1wZXJhdHVyZVZhbHVlQ29udGFpbmVyKTtcclxuICAgIGN1cnJlbnRUZW1wZXJhdHVyZVZhbHVlQ29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRUZW1wZXJhdHVyZVZhbHVlU3Bhbik7XHJcbiAgICBjdXJyZW50VGVtcGVyYXR1cmVWYWx1ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50VGVtcGVyYXR1cmVVbml0U3Bhbik7XHJcbiAgICBjdXJyZW50VGVtcGVyYXR1cmVWYWx1ZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudEZlZWxzTGlrZUNvbnRhaW5lcik7XHJcbiAgICBjdXJyZW50RmVlbHNMaWtlQ29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRGZWVsc0xpa2VWYWx1ZVNwYW4pO1xyXG4gICAgY3VycmVudEZlZWxzTGlrZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50RmVlbHNMaWtlVW5pdFNwYW4pO1xyXG5cclxuICAgIGN1cnJlbnRBZGRpdGlvbmFsQ29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRXaW5kQ29udGFpbmVyKTtcclxuICAgIGN1cnJlbnRBZGRpdGlvbmFsQ29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRIdW1pZGl0eUNvbnRhaW5lcik7XHJcbiAgICBjdXJyZW50QWRkaXRpb25hbENvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50UHJlc3N1cmVDb250YWluZXIpO1xyXG4gICAgY3VycmVudEFkZGl0aW9uYWxDb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudFV2SW5kZXhDb250YWluZXIpO1xyXG5cclxuICAgIGN1cnJlbnRXaW5kQ29udGFpbmVyLmFwcGVuZENoaWxkKHdpbmRJY29uKTtcclxuICAgIGN1cnJlbnRXaW5kQ29udGFpbmVyLmFwcGVuZENoaWxkKHdpbmREYXRhQ29udGFpbmVyKTtcclxuICAgIHdpbmREYXRhQ29udGFpbmVyLmFwcGVuZENoaWxkKHdpbmRQYXJhZ3JhcGgpO1xyXG4gICAgd2luZERhdGFDb250YWluZXIuYXBwZW5kQ2hpbGQod2luZFZhbHVlU3Bhbik7XHJcbiAgICB3aW5kRGF0YUNvbnRhaW5lci5hcHBlbmRDaGlsZCh3aW5kVmFsdWVVbml0U3Bhbik7XHJcblxyXG4gICAgY3VycmVudEh1bWlkaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKGh1bWlkaXR5SWNvbik7XHJcbiAgICBjdXJyZW50SHVtaWRpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQoaHVtaWRpdHlEYXRhQ29udGFpbmVyKTtcclxuICAgIGh1bWlkaXR5RGF0YUNvbnRhaW5lci5hcHBlbmRDaGlsZChodW1pZGl0eVBhcmFncmFwaCk7XHJcbiAgICBodW1pZGl0eURhdGFDb250YWluZXIuYXBwZW5kQ2hpbGQoaHVtaWRpdHlWYWx1ZVNwYW4pO1xyXG4gICAgaHVtaWRpdHlEYXRhQ29udGFpbmVyLmFwcGVuZENoaWxkKGh1bWlkaXR5VmFsdWVVbml0U3Bhbik7XHJcblxyXG4gICAgY3VycmVudFByZXNzdXJlQ29udGFpbmVyLmFwcGVuZENoaWxkKHByZXNzdXJlSWNvbik7XHJcbiAgICBjdXJyZW50UHJlc3N1cmVDb250YWluZXIuYXBwZW5kQ2hpbGQocHJlc3N1cmVEYXRhQ29udGFpbmVyKTtcclxuICAgIHByZXNzdXJlRGF0YUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmVzc3VyZVBhcmFncmFwaCk7XHJcbiAgICBwcmVzc3VyZURhdGFDb250YWluZXIuYXBwZW5kQ2hpbGQocHJlc3N1cmVWYWx1ZVNwYW4pO1xyXG4gICAgcHJlc3N1cmVEYXRhQ29udGFpbmVyLmFwcGVuZENoaWxkKHByZXNzdXJlVmFsdWVVbml0U3Bhbik7XHJcblxyXG4gICAgY3VycmVudFV2SW5kZXhDb250YWluZXIuYXBwZW5kQ2hpbGQodXZJbmRleEljb24pO1xyXG4gICAgY3VycmVudFV2SW5kZXhDb250YWluZXIuYXBwZW5kQ2hpbGQodXZJbmRleERhdGFDb250YWluZXIpO1xyXG4gICAgdXZJbmRleERhdGFDb250YWluZXIuYXBwZW5kQ2hpbGQodXZJbmRleFBhcmFncmFwaCk7XHJcbiAgICB1dkluZGV4RGF0YUNvbnRhaW5lci5hcHBlbmRDaGlsZCh1dkluZGV4VmFsdWVTcGFuKTtcclxuXHJcbiAgICByZXR1cm4gY3VycmVudFdlYXRoZXJEYXRhQ29udGFpbmVyO1xyXG59XHJcblxyXG4vL0N1cnJlbnQgV2VhdGhlciBVSSBFbGVtZW50IEdldHRlcnNcclxuLy9HZXR0ZXJzIGZvciBlbGVtZW50cyB0aGF0IGRpc3BsYXkgZGF0YSB2YWx1ZXNcclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRMb2NhdGlvbkVsZW1lbnQoKSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQtbG9jYXRpb24nKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRXZWF0aGVySWNvbkVsZW1lbnQoKSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQtd2VhdGhlci1pY29uJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50Q29uZGl0aW9uRWxlbWVudCgpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudC1jb25kaXRpb24nKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRUZW1wZXJhdHVyZUVsZW1lbnQoKSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQtdGVtcGVyYXR1cmUnKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRGZWVsc0xpa2VFbGVtZW50KCkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50LWZlZWxzLWxpa2UnKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRXaW5kRWxlbWVudCgpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudC13aW5kJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50SHVtaWRpdHlFbGVtZW50KCkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50LWh1bWlkaXR5Jyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50UHJlc3N1cmVFbGVtZW50KCkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50LXByZXNzdXJlJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50VXZJbmRleEVsZW1lbnQoKSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQtdXYnKTtcclxufVxyXG5cclxuLy9HZXR0ZXJzIGZvciBlbGVtZW50cyB0aGF0IGRpc3BsYXkgZGF0YSB1bml0c1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFRlbXBlcmF0dXJlVW5pdEVsZW1lbnQoKSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQtdGVtcGVyYXR1cmUtdW5pdCcpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudEZlZWxzTGlrZVVuaXRFbGVtZW50KCkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50LWZlZWxzLWxpa2UtdW5pdCcpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFdpbmRVbml0RWxlbWVudCgpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudC13aW5kLXVuaXQnKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRIdW1pZGl0eVVuaXRFbGVtZW50KCkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50LWh1bWlkaXR5LXVuaXQnKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRQcmVzc3VyZVVuaXRFbGVtZW50KCkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50LXByZXNzdXJlLXVuaXQnKTtcclxufSIsImltcG9ydCAnLi4vLi4vc3R5bGVzL3N0eWxlcy5jc3MnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZvcmVjYXN0U2VjdGlvbigpIHtcclxuICAgIGNvbnN0IGZvcmVjYXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgY29uc3QgZmlyc3REYXlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGZpcnN0RGF5UGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY29uc3QgZmlyc3REYXlXZWF0aGVySWNvbiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgY29uc3QgZmlyc3REYXlDb25kaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb25zdCBmaXJzdERheUF2ZXJhZ2VUZW1wZXJhdHVyZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgZmlyc3REYXlBdmVyYWdlVGVtcGVyYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBjb25zdCBmaXJzdERheUF2ZXJhZ2VUZW1wZXJhdHVyZVVuaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcblxyXG4gICAgY29uc3Qgc2Vjb25kRGF5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBzZWNvbmREYXlQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb25zdCBzZWNvbmREYXlXZWF0aGVySWNvbiA9IG5ldyBJbWFnZSgpO1xyXG4gICAgY29uc3Qgc2Vjb25kRGF5Q29uZGl0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY29uc3Qgc2Vjb25kRGF5QXZlcmFnZVRlbXBlcmF0dXJlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBzZWNvbmREYXlBdmVyYWdlVGVtcGVyYXR1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBjb25zdCBzZWNvbmREYXlBdmVyYWdlVGVtcGVyYXR1cmVVbml0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cclxuICAgIGNvbnN0IHRoaXJkRGF5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCB0aGlyZERheVBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnN0IHRoaXJkRGF5V2VhdGhlckljb24gPSBuZXcgSW1hZ2UoKTtcclxuICAgIGNvbnN0IHRoaXJkRGF5Q29uZGl0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY29uc3QgdGhpcmREYXlBdmVyYWdlVGVtcGVyYXR1cmVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHRoaXJkRGF5QXZlcmFnZVRlbXBlcmF0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgY29uc3QgdGhpcmREYXlBdmVyYWdlVGVtcGVyYXR1cmVVbml0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG5cclxuICAgIC8vQXNzaWduaW5nIGlkIHNlbGVjdG9ycyB0byBmb3JlY2FzdCBzZWN0aW9uIGVsZW1lbnRzXHJcbiAgICBmb3JlY2FzdENvbnRhaW5lci5pZCA9ICd0aHJlZS1kYXktZm9yZWNhc3QnO1xyXG4gICAgZmlyc3REYXlDb250YWluZXIuaWQgPSAnZmlyc3QtZGF5JztcclxuICAgIGZpcnN0RGF5QXZlcmFnZVRlbXBlcmF0dXJlQ29udGFpbmVyLmlkID0gJ2ZpcnN0LWRheS10ZW1wZXJhdHVyZS1jb250YWluZXInO1xyXG4gICAgc2Vjb25kRGF5Q29udGFpbmVyLmlkPSAnc2Vjb25kLWRheSc7XHJcbiAgICBzZWNvbmREYXlBdmVyYWdlVGVtcGVyYXR1cmVDb250YWluZXIuaWQgPSAnc2Vjb25kLWRheS10ZW1wZXJhdHVyZS1jb250YWluZXInO1xyXG4gICAgdGhpcmREYXlDb250YWluZXIuaWQgPSAndGhpcmQtZGF5JztcclxuICAgIHRoaXJkRGF5QXZlcmFnZVRlbXBlcmF0dXJlQ29udGFpbmVyLmlkID0gJ3RoaXJkLWRheS10ZW1wZXJhdHVyZS1jb250YWluZXInO1xyXG5cclxuICAgIC8vQXNzaWduaW5nIGNsYXNzIHNlbGVjdG9ycyB0byBmb3JlY2FzdCBzZWN0aW9uIGVsZW1lbnRzXHJcbiAgICBmaXJzdERheUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkYWlseS1mb3JlY2FzdCcpO1xyXG4gICAgZmlyc3REYXlQYXJhZ3JhcGguY2xhc3NMaXN0LmFkZCgnZGFpbHktZGF5Jyk7XHJcbiAgICBmaXJzdERheVdlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoJ2RhaWx5LXdlYXRoZXItaWNvbicpO1xyXG4gICAgZmlyc3REYXlDb25kaXRpb24uY2xhc3NMaXN0LmFkZCgnZGFpbHktY29uZGl0aW9uJyk7XHJcbiAgICBmaXJzdERheUF2ZXJhZ2VUZW1wZXJhdHVyZS5jbGFzc0xpc3QuYWRkKCdkYWlseS1hdmVyYWdlLXRlbXBlcmF0dXJlJyk7XHJcbiAgICBmaXJzdERheUF2ZXJhZ2VUZW1wZXJhdHVyZVVuaXQuY2xhc3NMaXN0LmFkZCgnZGFpbHktYXZlcmFnZS10ZW1wZXJhdHVyZS11bml0Jyk7XHJcblxyXG4gICAgc2Vjb25kRGF5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2RhaWx5LWZvcmVjYXN0Jyk7XHJcbiAgICBzZWNvbmREYXlQYXJhZ3JhcGguY2xhc3NMaXN0LmFkZCgnZGFpbHktZGF5Jyk7XHJcbiAgICBzZWNvbmREYXlXZWF0aGVySWNvbi5jbGFzc0xpc3QuYWRkKCdkYWlseS13ZWF0aGVyLWljb24nKTtcclxuICAgIHNlY29uZERheUNvbmRpdGlvbi5jbGFzc0xpc3QuYWRkKCdkYWlseS1jb25kaXRpb24nKTtcclxuICAgIHNlY29uZERheUF2ZXJhZ2VUZW1wZXJhdHVyZS5jbGFzc0xpc3QuYWRkKCdkYWlseS1hdmVyYWdlLXRlbXBlcmF0dXJlJyk7XHJcbiAgICBzZWNvbmREYXlBdmVyYWdlVGVtcGVyYXR1cmVVbml0LmNsYXNzTGlzdC5hZGQoJ2RhaWx5LWF2ZXJhZ2UtdGVtcGVyYXR1cmUtdW5pdCcpO1xyXG4gICAgXHJcbiAgICB0aGlyZERheUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkYWlseS1mb3JlY2FzdCcpO1xyXG4gICAgdGhpcmREYXlQYXJhZ3JhcGguY2xhc3NMaXN0LmFkZCgnZGFpbHktZGF5Jyk7XHJcbiAgICB0aGlyZERheVdlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoJ2RhaWx5LXdlYXRoZXItaWNvbicpO1xyXG4gICAgdGhpcmREYXlDb25kaXRpb24uY2xhc3NMaXN0LmFkZCgnZGFpbHktY29uZGl0aW9uJyk7XHJcbiAgICB0aGlyZERheUF2ZXJhZ2VUZW1wZXJhdHVyZS5jbGFzc0xpc3QuYWRkKCdkYWlseS1hdmVyYWdlLXRlbXBlcmF0dXJlJyk7XHJcbiAgICB0aGlyZERheUF2ZXJhZ2VUZW1wZXJhdHVyZVVuaXQuY2xhc3NMaXN0LmFkZCgnZGFpbHktYXZlcmFnZS10ZW1wZXJhdHVyZS11bml0Jyk7XHJcblxyXG4gICAgZm9yZWNhc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZmlyc3REYXlDb250YWluZXIpO1xyXG4gICAgZm9yZWNhc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoc2Vjb25kRGF5Q29udGFpbmVyKTtcclxuICAgIGZvcmVjYXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXJkRGF5Q29udGFpbmVyKTtcclxuXHJcbiAgICBmaXJzdERheUNvbnRhaW5lci5hcHBlbmRDaGlsZChmaXJzdERheVBhcmFncmFwaCk7XHJcbiAgICBmaXJzdERheUNvbnRhaW5lci5hcHBlbmRDaGlsZChmaXJzdERheVdlYXRoZXJJY29uKTtcclxuICAgIGZpcnN0RGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKGZpcnN0RGF5Q29uZGl0aW9uKTtcclxuICAgIGZpcnN0RGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKGZpcnN0RGF5QXZlcmFnZVRlbXBlcmF0dXJlQ29udGFpbmVyKTtcclxuICAgIGZpcnN0RGF5QXZlcmFnZVRlbXBlcmF0dXJlQ29udGFpbmVyLmFwcGVuZENoaWxkKGZpcnN0RGF5QXZlcmFnZVRlbXBlcmF0dXJlKTtcclxuICAgIGZpcnN0RGF5QXZlcmFnZVRlbXBlcmF0dXJlQ29udGFpbmVyLmFwcGVuZENoaWxkKGZpcnN0RGF5QXZlcmFnZVRlbXBlcmF0dXJlVW5pdCk7XHJcblxyXG4gICAgc2Vjb25kRGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKHNlY29uZERheVBhcmFncmFwaCk7XHJcbiAgICBzZWNvbmREYXlDb250YWluZXIuYXBwZW5kQ2hpbGQoc2Vjb25kRGF5V2VhdGhlckljb24pO1xyXG4gICAgc2Vjb25kRGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKHNlY29uZERheUNvbmRpdGlvbik7XHJcbiAgICBzZWNvbmREYXlDb250YWluZXIuYXBwZW5kQ2hpbGQoc2Vjb25kRGF5QXZlcmFnZVRlbXBlcmF0dXJlQ29udGFpbmVyKTtcclxuICAgIHNlY29uZERheUF2ZXJhZ2VUZW1wZXJhdHVyZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWNvbmREYXlBdmVyYWdlVGVtcGVyYXR1cmUpO1xyXG4gICAgc2Vjb25kRGF5QXZlcmFnZVRlbXBlcmF0dXJlQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlY29uZERheUF2ZXJhZ2VUZW1wZXJhdHVyZVVuaXQpO1xyXG5cclxuICAgIHRoaXJkRGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXJkRGF5UGFyYWdyYXBoKTtcclxuICAgIHRoaXJkRGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXJkRGF5V2VhdGhlckljb24pO1xyXG4gICAgdGhpcmREYXlDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcmREYXlDb25kaXRpb24pO1xyXG4gICAgdGhpcmREYXlDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcmREYXlBdmVyYWdlVGVtcGVyYXR1cmVDb250YWluZXIpO1xyXG4gICAgdGhpcmREYXlBdmVyYWdlVGVtcGVyYXR1cmVDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcmREYXlBdmVyYWdlVGVtcGVyYXR1cmUpO1xyXG4gICAgdGhpcmREYXlBdmVyYWdlVGVtcGVyYXR1cmVDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcmREYXlBdmVyYWdlVGVtcGVyYXR1cmVVbml0KTtcclxuICAgIFxyXG4gICAgcmV0dXJuIGZvcmVjYXN0Q29udGFpbmVyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rmlyc3REYXlGb3JlY2FzdEVsZW1lbnQoKSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpcnN0LWRheScpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2Vjb25kRGF5Rm9yZWNhc3RFbGVtZW50KCkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWNvbmQtZGF5Jyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUaGlyZERheUZvcmVjYXN0RWxlbWVudCgpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGhpcmQtZGF5Jyk7XHJcbn0iLCJpbXBvcnQgJy4uLy4uL3N0eWxlcy9zdHlsZXMuY3NzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICAgIGNvbnN0IGhlYWRlckNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgYXBwTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG5cclxuICAgIGNvbnN0IHNlYXJjaFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGxvY2F0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblxyXG4gICAgLy9Bc3NpZ25pbmcgaWQncyB0byBoZWFkZXIgZWxlbWVudHNcclxuICAgIGhlYWRlckNvbnRlbnQuaWQgPSAnaGVhZGVyLWNvbnRlbnQnO1xyXG4gICAgdGl0bGVDb250YWluZXIuaWQgPSAndGl0bGUtY29udGFpbmVyJztcclxuICAgIGFwcExvZ28uaWQgPSAnYXBwLWxvZ28nO1xyXG4gICAgc2VhcmNoU2VjdGlvbi5pZCA9ICdzZWFyY2gtc2VjdGlvbic7XHJcbiAgICBsb2NhdGlvbklucHV0LmlkID0gJ2xvY2F0aW9uLWlucHV0JztcclxuICAgIHNlYXJjaEJ1dHRvbi5pZCA9ICdzZWFyY2gtYnV0dG9uJztcclxuXHJcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiV2VhdGhlckFwcFwiO1xyXG5cclxuICAgIC8vQ3JlYXRpbmcgdGhlIHN0cnVjdHVyZSBvZiB0aGUgaGVhZGVyXHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyQ29udGVudCk7XHJcbiAgICBoZWFkZXJDb250ZW50LmFwcGVuZENoaWxkKHRpdGxlQ29udGFpbmVyKTtcclxuICAgIGhlYWRlckNvbnRlbnQuYXBwZW5kQ2hpbGQoc2VhcmNoU2VjdGlvbik7XHJcblxyXG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQoYXBwTG9nbyk7XHJcbiAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcblxyXG4gICAgc2VhcmNoU2VjdGlvbi5hcHBlbmRDaGlsZChsb2NhdGlvbklucHV0KTtcclxuICAgIHNlYXJjaFNlY3Rpb24uYXBwZW5kQ2hpbGQoc2VhcmNoQnV0dG9uKTtcclxuXHJcbiAgICByZXR1cm4gaGVhZGVyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25TZWFyY2hGaWVsZCgpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9jYXRpb24taW5wdXQnKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlYXJjaEJ1dHRvbigpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLWJ1dHRvbicpO1xyXG59IiwiaW1wb3J0ICcuLi8uLi9zdHlsZXMvc3R5bGVzLmNzcyc7XHJcbmltcG9ydCB7IGNyZWF0ZUN1cnJlbnRXZWF0aGVyU2VjdGlvbiB9IGZyb20gJy4uL2N1cnJlbnQtd2VhdGhlci9jdXJyZW50LXdlYXRoZXItc2VjdGlvbic7XHJcbmltcG9ydCB7IGNyZWF0ZUZvcmVjYXN0U2VjdGlvbiB9IGZyb20gJy4uL2ZvcmVjYXN0L2ZvcmVjYXN0LXNlY3Rpb24nO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1haW5Db250ZW50KCkge1xyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICAgIG1haW4uaWQgPSAnbWFpbic7XHJcblxyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdkYWlseS1mb3JlY2FzdC1oZWFkZXInKTtcclxuICAgIGhlYWRlci50ZXh0Q29udGVudCA9ICdUSFJFRSBEQVkgRk9SRUNBU1QnO1xyXG5cclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlQ3VycmVudFdlYXRoZXJTZWN0aW9uKCkpO1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVGb3JlY2FzdFNlY3Rpb24oKSk7XHJcblxyXG4gICAgcmV0dXJuIG1haW47XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRNYWluQ29udGVudCgpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpO1xyXG59IiwiaW1wb3J0IHsgZ2V0Rm9yZWNhc3RMb2NhdGlvbiwgZ2V0V2VhdGhlckZvcmVjYXN0RGF0YSwgZ2V0Q3VyZW50V2VhdGhlckljb24sIGdldEN1cnJlbnRXZWF0aGVyQ29uZGl0aW9uLCBnZXRDdXJyZW50VGVtcGVyYXR1cmUsIGdldEN1cnJlbnRXaW5kLCBnZXRDdXJyZW50SHVtaWRpdHksIGdldEN1cnJlbnRQcmVzc3VyZSwgZ2V0Q3VycmVudFV2SW5kZXgsIGdldEN1cnJlbnRGZWVsc0xpa2VUZW1wZXJhdHVyZSwgZ2V0Rmlyc3REYXlEYXRhLCBnZXRTZWNvbmREYXlEYXRhLCBnZXRUaGlyZERheURhdGEgfSBmcm9tIFwiLi4vYXBpL3dlYXRoZXItYXBpXCI7XHJcbmltcG9ydCB7IGdldEN1cnJlbnRDb25kaXRpb25FbGVtZW50LCBnZXRDdXJyZW50RmVlbHNMaWtlRWxlbWVudCwgZ2V0Q3VycmVudEZlZWxzTGlrZVVuaXRFbGVtZW50LCBnZXRDdXJyZW50SHVtaWRpdHlFbGVtZW50LCBnZXRDdXJyZW50SHVtaWRpdHlVbml0RWxlbWVudCwgZ2V0Q3VycmVudExvY2F0aW9uRWxlbWVudCwgZ2V0Q3VycmVudFByZXNzdXJlRWxlbWVudCwgZ2V0Q3VycmVudFByZXNzdXJlVW5pdEVsZW1lbnQsIGdldEN1cnJlbnRUZW1wZXJhdHVyZUVsZW1lbnQsIGdldEN1cnJlbnRUZW1wZXJhdHVyZVVuaXRFbGVtZW50LCBnZXRDdXJyZW50VXZJbmRleEVsZW1lbnQsIGdldEN1cnJlbnRXZWF0aGVySWNvbkVsZW1lbnQsIGdldEN1cnJlbnRXaW5kRWxlbWVudCwgZ2V0Q3VycmVudFdpbmRVbml0RWxlbWVudCB9IGZyb20gXCIuLi9jb21wb25lbnRzL2N1cnJlbnQtd2VhdGhlci9jdXJyZW50LXdlYXRoZXItc2VjdGlvblwiO1xyXG5pbXBvcnQgeyBnZXRGaXJzdERheUZvcmVjYXN0RWxlbWVudCwgZ2V0U2Vjb25kRGF5Rm9yZWNhc3RFbGVtZW50LCBnZXRUaGlyZERheUZvcmVjYXN0RWxlbWVudCB9IGZyb20gXCIuLi9jb21wb25lbnRzL2ZvcmVjYXN0L2ZvcmVjYXN0LXNlY3Rpb25cIjtcclxuaW1wb3J0IHsgZ2V0RGF5TmFtZSB9IGZyb20gXCIuLi9oZWxwZXIvZGF0ZVwiO1xyXG5pbXBvcnQgeyBodW1pZGl0eVVuaXQsIHByZXNzdXJlVW5pdHMsIHRlbXBlcmF0dXJlVW5pdHMsIHdpbmRTcGVlZFVuaXRzIH0gZnJvbSBcIi4uL3VuaXRzL3VuaXRzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlV2VhdGhlckZvcmVjYXN0KGxvY2F0aW9uKSB7XHJcbiAgICBnZXRXZWF0aGVyRm9yZWNhc3REYXRhKGxvY2F0aW9uKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIC8vQ3VycmVudCB3ZWF0aGVyIGRhdGFcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudExvY2F0aW9uRGF0YSA9IGdldEZvcmVjYXN0TG9jYXRpb24oZGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRXZWF0aGVySWNvbkRhdGEgPSBnZXRDdXJlbnRXZWF0aGVySWNvbihkYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudENvbmRpdGlvbkRhdGEgPSBnZXRDdXJyZW50V2VhdGhlckNvbmRpdGlvbihkYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFRlbXBlcmF0dXJlRGF0YSA9IGdldEN1cnJlbnRUZW1wZXJhdHVyZShkYXRhKTtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFdpbmREYXRhID0gZ2V0Q3VycmVudFdpbmQoZGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRIdW1pZGl0eURhdGEgPSBnZXRDdXJyZW50SHVtaWRpdHkoZGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQcmVzc3VyZURhdGEgPSBnZXRDdXJyZW50UHJlc3N1cmUoZGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRVdkluZGV4RGF0YSA9IGdldEN1cnJlbnRVdkluZGV4KGRhdGEpO1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50RmVlbHNMaWtlVGVtcGVyYXR1cmVEYXRhID0gZ2V0Q3VycmVudEZlZWxzTGlrZVRlbXBlcmF0dXJlKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIC8vQ3VycmVudCB3ZWF0aGVyIGRhdGEgdmFsdWVzIGRpc3BsYXlcclxuICAgICAgICAgICAgZ2V0Q3VycmVudExvY2F0aW9uRWxlbWVudCgpLnRleHRDb250ZW50ID0gYCR7Y3VycmVudExvY2F0aW9uRGF0YS5jaXR5fSwgJHtjdXJyZW50TG9jYXRpb25EYXRhLmNvdW50cnl9YDtcclxuICAgICAgICAgICAgZ2V0Q3VycmVudFdlYXRoZXJJY29uRWxlbWVudCgpLnNyYyA9IGAke2N1cnJlbnRXZWF0aGVySWNvbkRhdGF9YDtcclxuICAgICAgICAgICAgZ2V0Q3VycmVudENvbmRpdGlvbkVsZW1lbnQoKS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRDb25kaXRpb25EYXRhfWA7XHJcblxyXG4gICAgICAgICAgICBnZXRDdXJyZW50VGVtcGVyYXR1cmVFbGVtZW50KCkudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50VGVtcGVyYXR1cmVEYXRhLnRlbXBlcmF0dXJlQ2Vsc2l1c31gO1xyXG4gICAgICAgICAgICBnZXRDdXJyZW50RmVlbHNMaWtlRWxlbWVudCgpLnRleHRDb250ZW50ID0gYEZlZWxzIGxpa2U6ICR7Y3VycmVudEZlZWxzTGlrZVRlbXBlcmF0dXJlRGF0YS5mZWVsc0xpa2VDZWxzaXVzfWA7XHJcblxyXG4gICAgICAgICAgICBnZXRDdXJyZW50V2luZEVsZW1lbnQoKS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRXaW5kRGF0YS53aW5kS3BofWA7XHJcbiAgICAgICAgICAgIGdldEN1cnJlbnRIdW1pZGl0eUVsZW1lbnQoKS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRIdW1pZGl0eURhdGF9YDtcclxuICAgICAgICAgICAgZ2V0Q3VycmVudFByZXNzdXJlRWxlbWVudCgpLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFByZXNzdXJlRGF0YS5wcmVzc3VyZU1iYXJ9YDtcclxuICAgICAgICAgICAgZ2V0Q3VycmVudFV2SW5kZXhFbGVtZW50KCkudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50VXZJbmRleERhdGF9YDtcclxuXHJcbiAgICAgICAgICAgIC8vRm9yZWNhc3QgZGF0YSBkaXNwbGF5XHJcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0RGF5RGF0YSA9IGdldEZpcnN0RGF5RGF0YShkYXRhKTtcclxuICAgICAgICAgICAgY29uc3Qgc2Vjb25kRGF5RGF0YSA9IGdldFNlY29uZERheURhdGEoZGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRoaXJkRGF5RGF0YSA9IGdldFRoaXJkRGF5RGF0YShkYXRhKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0RGF5Q29udGFpbmVyID0gZ2V0Rmlyc3REYXlGb3JlY2FzdEVsZW1lbnQoKTtcclxuICAgICAgICAgICAgY29uc3Qgc2Vjb25kRGF5Q29udGFpbmVyID0gZ2V0U2Vjb25kRGF5Rm9yZWNhc3RFbGVtZW50KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRoaXJkRGF5Q29udGFpbmVyID0gZ2V0VGhpcmREYXlGb3JlY2FzdEVsZW1lbnQoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZERheSA9IGdldERheU5hbWUoc2Vjb25kRGF5RGF0YS5kYXRlKTtcclxuICAgICAgICAgICAgY29uc3QgdGhpcmREYXkgPSBnZXREYXlOYW1lKHRoaXJkRGF5RGF0YS5kYXRlKTtcclxuXHJcbiAgICAgICAgICAgIGZpcnN0RGF5Q29udGFpbmVyLmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gZmlyc3REYXlEYXRhLmRhdGU7XHJcbiAgICAgICAgICAgIGZpcnN0RGF5Q29udGFpbmVyLmNoaWxkcmVuWzFdLnNyYyA9IGZpcnN0RGF5RGF0YS53ZWF0aGVySWNvblVSTDtcclxuICAgICAgICAgICAgZmlyc3REYXlDb250YWluZXIuY2hpbGRyZW5bMl0udGV4dENvbnRlbnQgPSBmaXJzdERheURhdGEuY29uZGl0aW9uO1xyXG4gICAgICAgICAgICBmaXJzdERheUNvbnRhaW5lci5jaGlsZHJlblszXS5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9IGZpcnN0RGF5RGF0YS5hdmVyYWdlVGVtcGVyYXR1cmVDZWxzaXVzO1xyXG4gICAgICAgICAgICBmaXJzdERheUNvbnRhaW5lci5jaGlsZHJlblszXS5jaGlsZHJlblsxXS50ZXh0Q29udGVudCA9IHRlbXBlcmF0dXJlVW5pdHMuY2Vsc2l1cztcclxuXHJcbiAgICAgICAgICAgIHNlY29uZERheUNvbnRhaW5lci5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9IHNlY29uZERheTtcclxuICAgICAgICAgICAgc2Vjb25kRGF5Q29udGFpbmVyLmNoaWxkcmVuWzFdLnNyYyA9IHNlY29uZERheURhdGEud2VhdGhlckljb25VUkw7XHJcbiAgICAgICAgICAgIHNlY29uZERheUNvbnRhaW5lci5jaGlsZHJlblsyXS50ZXh0Q29udGVudCA9IHNlY29uZERheURhdGEuY29uZGl0aW9uO1xyXG4gICAgICAgICAgICBzZWNvbmREYXlDb250YWluZXIuY2hpbGRyZW5bM10uY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSBzZWNvbmREYXlEYXRhLmF2ZXJhZ2VUZW1wZXJhdHVyZUNlbHNpdXM7XHJcbiAgICAgICAgICAgIHNlY29uZERheUNvbnRhaW5lci5jaGlsZHJlblszXS5jaGlsZHJlblsxXS50ZXh0Q29udGVudCA9IHRlbXBlcmF0dXJlVW5pdHMuY2Vsc2l1cztcclxuXHJcbiAgICAgICAgICAgIHRoaXJkRGF5Q29udGFpbmVyLmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gdGhpcmREYXk7XHJcbiAgICAgICAgICAgIHRoaXJkRGF5Q29udGFpbmVyLmNoaWxkcmVuWzFdLnNyYyA9IHRoaXJkRGF5RGF0YS53ZWF0aGVySWNvblVSTDtcclxuICAgICAgICAgICAgdGhpcmREYXlDb250YWluZXIuY2hpbGRyZW5bMl0udGV4dENvbnRlbnQgPSB0aGlyZERheURhdGEuY29uZGl0aW9uO1xyXG4gICAgICAgICAgICB0aGlyZERheUNvbnRhaW5lci5jaGlsZHJlblszXS5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9IHRoaXJkRGF5RGF0YS5hdmVyYWdlVGVtcGVyYXR1cmVDZWxzaXVzO1xyXG4gICAgICAgICAgICB0aGlyZERheUNvbnRhaW5lci5jaGlsZHJlblszXS5jaGlsZHJlblsxXS50ZXh0Q29udGVudCA9IHRlbXBlcmF0dXJlVW5pdHMuY2Vsc2l1cztcclxuXHJcbiAgICAgICAgICAgIHNldE1ldHJpY1N5c3RlbVVuaXRzKCk7XHJcblxyXG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldE1ldHJpY1N5c3RlbVVuaXRzKCkge1xyXG4gICAgZ2V0Q3VycmVudFRlbXBlcmF0dXJlVW5pdEVsZW1lbnQoKS50ZXh0Q29udGVudCA9IGAke3RlbXBlcmF0dXJlVW5pdHMuY2Vsc2l1c31gO1xyXG4gICAgZ2V0Q3VycmVudEZlZWxzTGlrZVVuaXRFbGVtZW50KCkudGV4dENvbnRlbnQgPSBgJHt0ZW1wZXJhdHVyZVVuaXRzLmNlbHNpdXN9YDtcclxuICAgIGdldEN1cnJlbnRXaW5kVW5pdEVsZW1lbnQoKS50ZXh0Q29udGVudCA9IHdpbmRTcGVlZFVuaXRzLmtwaDtcclxuICAgIGdldEN1cnJlbnRIdW1pZGl0eVVuaXRFbGVtZW50KCkudGV4dENvbnRlbnQgPSBodW1pZGl0eVVuaXQ7XHJcbiAgICBnZXRDdXJyZW50UHJlc3N1cmVVbml0RWxlbWVudCgpLnRleHRDb250ZW50ID0gcHJlc3N1cmVVbml0cy5tYmFyO1xyXG59IiwiaW1wb3J0IHsgZ2V0RGF5IH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5TmFtZShkYXRlKSB7XHJcbiAgICBjb25zdCBkYXlOdW1iZXIgPSBnZXREYXkoZGF0ZSk7XHJcblxyXG4gICAgc3dpdGNoKGRheU51bWJlcikge1xyXG4gICAgICAgIGNhc2UgMTogcmV0dXJuICdNb25kYXknO1xyXG4gICAgICAgIGNhc2UgMjogcmV0dXJuICdUdWVzZGF5JztcclxuICAgICAgICBjYXNlIDM6IHJldHVybiAnV2VkbmVzZGF5JztcclxuICAgICAgICBjYXNlIDQ6IHJldHVybiAnVGh1cnNkYXknO1xyXG4gICAgICAgIGNhc2UgNTogcmV0dXJuICdGcmlkYXknO1xyXG4gICAgICAgIGNhc2UgNjogcmV0dXJuICdTYXR1cmRheSc7XHJcbiAgICAgICAgY2FzZSA3OiByZXR1cm4gJ1N1bmRheSc7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBjcmVhdGVDb250ZW50Q29udGFpbmVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvY29udGVudC9jb250ZW50XCI7XHJcbmltcG9ydCB7IGdldExvY2F0aW9uU2VhcmNoRmllbGQsIGdldFNlYXJjaEJ1dHRvbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXJcIjtcclxuaW1wb3J0IHsgdXBkYXRlV2VhdGhlckZvcmVjYXN0IH0gZnJvbSBcIi4uL2Z1bmN0aW9ucy9tYWluXCI7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVXZWJzaXRlKCkge1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVDb250ZW50Q29udGFpbmVyKCkpO1xyXG4gICAgLy9EZWZhdWx0IGRhdGEgbG9hZGluZ1xyXG4gICAgdXBkYXRlV2VhdGhlckZvcmVjYXN0KCdCZWxncmFkZScpO1xyXG4gICAgXHJcbiAgICBnZXRTZWFyY2hCdXR0b24oKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgXHJcbiAgICAgICAgY29uc3QgbG9jYXRpb24gPSBnZXRMb2NhdGlvblNlYXJjaEZpZWxkKCkudmFsdWU7XHJcbiAgICAgICAgdXBkYXRlV2VhdGhlckZvcmVjYXN0KGxvY2F0aW9uKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImV4cG9ydCBjb25zdCB0ZW1wZXJhdHVyZVVuaXRzID0ge1xyXG4gICAgY2Vsc2l1czogJ8KwQycsXHJcbiAgICBmYWhyZW5oZWl0OiAnwrBGJyxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB3aW5kU3BlZWRVbml0cyA9IHtcclxuICAgIGtwaDogJ2ttL2gnLFxyXG4gICAgbXBoOiAnbS9oJ1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGh1bWlkaXR5VW5pdCA9ICclJztcclxuXHJcbmV4cG9ydCBjb25zdCBwcmVzc3VyZVVuaXRzID0ge1xyXG4gICAgbWJhcjogJ21iYXInLFxyXG4gICAgaW5jaGVzOiAnaW4nXHJcbn07XHJcblxyXG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgZ2V0RGF5XG4gKiBAY2F0ZWdvcnkgV2Vla2RheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIGRheSBvZiB0aGUgd2VlayBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgZGF5IG9mIHRoZSB3ZWVrIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGdpdmVuIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF5IG9mIHdlZWssIDAgcmVwcmVzZW50cyBTdW5kYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggZGF5IG9mIHRoZSB3ZWVrIGlzIDI5IEZlYnJ1YXJ5IDIwMTI/XG4gKiBjb25zdCByZXN1bHQgPSBnZXREYXkobmV3IERhdGUoMjAxMiwgMSwgMjkpKVxuICogLy89PiAzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXkoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgZGF5ID0gX2RhdGUuZ2V0RGF5KCk7XG4gIHJldHVybiBkYXk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZ2V0RGF5O1xuIiwiLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGFyZ3VtZW50IC0gVGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqXG4gKiBAcmV0dXJucyBUaGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICBjb25zdCBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpO1xuXG4gIC8vIENsb25lIHRoZSBkYXRlXG4gIGlmIChcbiAgICBhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHxcbiAgICAodHlwZW9mIGFyZ3VtZW50ID09PSBcIm9iamVjdFwiICYmIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IERhdGVdXCIpXG4gICkge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgYXJndW1lbnQuY29uc3RydWN0b3IoK2FyZ3VtZW50KTtcbiAgfSBlbHNlIGlmIChcbiAgICB0eXBlb2YgYXJndW1lbnQgPT09IFwibnVtYmVyXCIgfHxcbiAgICBhcmdTdHIgPT09IFwiW29iamVjdCBOdW1iZXJdXCIgfHxcbiAgICB0eXBlb2YgYXJndW1lbnQgPT09IFwic3RyaW5nXCIgfHxcbiAgICBhcmdTdHIgPT09IFwiW29iamVjdCBTdHJpbmddXCJcbiAgKSB7XG4gICAgLy8gVE9ETzogQ2FuIHdlIGdldCByaWQgb2YgYXM/XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBUT0RPOiBDYW4gd2UgZ2V0IHJpZCBvZiBhcz9cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHRvRGF0ZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBpbml0aWFsaXplV2Vic2l0ZSB9IGZyb20gXCIuLi9oZWxwZXIvaW5pdC5qc1wiO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9zdHlsZXMuY3NzJztcclxuXHJcbmluaXRpYWxpemVXZWJzaXRlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9