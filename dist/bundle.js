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
    margin: 0.5rem;
}

#current-weather-icon-container {
    display: flex;
    justify-content: center;
}

#current-weather-icon {
    height: 100px;
    aspect-ratio: 1 / 1;
    object-fit: cover;
}

#current-condition-container {
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
    margin-bottom: 4rem;
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
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}

#current-additional > div{
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
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




`, "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;;IAEV,qGAAqG;;IAErG,yBAAyB;AAC7B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,SAAS;IACT,aAAa;IACb,kCAAkC;AACtC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,uCAAuC;IACvC,oBAAoB;IACpB,yDAA0D;IAC1D,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,OAAO;IACP,eAAe;IACf,iBAAiB;IACjB,OAAO;IACP,wCAAwC;IACxC,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,uCAAuC;IACvC,uCAAuC;IACvC,yDAA0D;IAC1D,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;IACjB,qBAAqB;IACrB,4BAA4B;AAChC;;AAEA;IACI,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,oBAAoB;IACpB,oBAAoB;AACxB;;AAEA;IACI,oBAAoB;IACpB,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,4DAA4D;AAChE;;AAEA;IACI,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB","sourcesContent":["* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n\r\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n\r\n    --main-app-color: #00B2A0;\r\n}\r\n\r\n#content {\r\n    margin: auto;\r\n}\r\n\r\nheader {\r\n    box-shadow: 0ch 5px 20px 0px gray;\r\n}\r\n\r\n#header-content {\r\n    display: grid;\r\n    gap: 2rem;\r\n    padding: 1rem;\r\n    grid-template-columns: 2fr 3fr 2fr;\r\n}\r\n\r\n#title-container {\r\n    display: flex;\r\n    align-items: center;\r\n    font-size: 0.75rem;\r\n    width: auto;\r\n}\r\n\r\n#app-logo {\r\n    width: 40px;\r\n    height: 40px;\r\n    background-color: var(--main-app-color);\r\n    margin-right: 0.5rem;\r\n    background-image: url('../assets/icons/icons8-meteor.png');\r\n    background-size: cover;\r\n    border-radius: 25%;\r\n}\r\n\r\n#search-section {\r\n    display: flex;\r\n    gap: 0.5rem;\r\n    align-items: center;\r\n}\r\n\r\n#location-input {\r\n    flex: 1;\r\n    padding: 0.5rem;\r\n    font-size: 1.1rem;\r\n    flex: 1;\r\n    outline: 1px solid var(--main-app-color);\r\n    border: none;\r\n}\r\n\r\n#search-button {\r\n    height: 40px;\r\n    aspect-ratio: 1 / 1;\r\n    background-color: var(--main-app-color);;\r\n    border: 1px solid var(--main-app-color);\r\n    background-image: url('../assets/icons/icons8-search.png');\r\n    border-radius: 3px;\r\n}\r\n\r\nmain {\r\n    width: max(50%, 500px);\r\n    padding: 2rem 0rem;\r\n    margin: auto;\r\n}\r\n\r\n#current-location-data-container {\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n#current-location-data-container > div {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n#current-location {\r\n    font-size: 2.5rem;\r\n    margin-bottom: 0.5rem;\r\n    color: var(--main-app-color);\r\n}\r\n\r\n#right-now {\r\n    font-size: 1.5rem;    \r\n    margin: 0.5rem;\r\n}\r\n\r\n#current-weather-icon-container {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n#current-weather-icon {\r\n    height: 100px;\r\n    aspect-ratio: 1 / 1;\r\n    object-fit: cover;\r\n}\r\n\r\n#current-condition-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    font-size: 1.5rem;\r\n    margin-bottom: 4rem;\r\n}\r\n\r\n#current-temperature-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-bottom: 3rem;\r\n}\r\n\r\n#current-temperature-container > img {\r\n    width: 80px;\r\n    height: 80px;\r\n    margin-top: 0.5rem;\r\n}\r\n\r\n#current-temperature-value-container { \r\n    font-size: 3rem;\r\n}\r\n\r\n#current-feels-like-container {\r\n    font-size: 1.25rem;\r\n}\r\n\r\n#current-temperature-unit {\r\n    margin-left: 0.33rem;\r\n    letter-spacing: -8px;\r\n}\r\n\r\n#current-feels-like-unit {\r\n    margin-left: 0.33rem;\r\n    letter-spacing: -3px;\r\n}\r\n\r\n#current-additional {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\r\n}\r\n\r\n#current-additional > div{\r\n    padding: 1rem;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.additional-label {\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.additional-value {\r\n    font-size: 1.5rem;\r\n}\r\n\r\n#current-additional img {\r\n    margin-right: 1rem;\r\n}\r\n\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
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
/* harmony export */   THREE_DAY_FORECAST_ENDPOINT: () => (/* binding */ THREE_DAY_FORECAST_ENDPOINT)
/* harmony export */ });
const API_KEY = `53517ee71dc74692aae124933241403`;
const BASE_URL = `http://api.weatherapi.com/v1`;
const THREE_DAY_FORECAST_ENDPOINT = 'forecast';

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
/* harmony export */   getForecastLocation: () => (/* binding */ getForecastLocation),
/* harmony export */   getWeatherForecastData: () => (/* binding */ getWeatherForecastData)
/* harmony export */ });
/* harmony import */ var _data_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-api */ "./src/api/data-api.js");


//Retrieves the weather forecast for 3 days, starting from the current day
//Retrieves the current weather data
//Retrieves data about the location
async function getWeatherForecastData(location) {
    const response = await fetch(`${_data_api__WEBPACK_IMPORTED_MODULE_0__.BASE_URL}/${_data_api__WEBPACK_IMPORTED_MODULE_0__.THREE_DAY_FORECAST_ENDPOINT}.json?key=${_data_api__WEBPACK_IMPORTED_MODULE_0__.API_KEY}&q=${location}&days=3`, { mode: 'cors' });
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
    return `https://${data.current.condition.icon}`;
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
/* harmony export */   getCurrentLocationElement: () => (/* binding */ getCurrentLocationElement),
/* harmony export */   getCurrentPressureElement: () => (/* binding */ getCurrentPressureElement),
/* harmony export */   getCurrentTemperatureElement: () => (/* binding */ getCurrentTemperatureElement),
/* harmony export */   getCurrentTemperatureUnitElement: () => (/* binding */ getCurrentTemperatureUnitElement),
/* harmony export */   getCurrentUvIndexElement: () => (/* binding */ getCurrentUvIndexElement),
/* harmony export */   getCurrentWeatherIconElement: () => (/* binding */ getCurrentWeatherIconElement),
/* harmony export */   getCurrentWindElement: () => (/* binding */ getCurrentWindElement)
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
    const WindValueParagraph = document.createElement('p');

    const currentHumidityContainer = document.createElement('div');
    const humidityIcon = document.createElement('img');
    const humidityDataContainer = document.createElement('div');
    const humidityParagraph = document.createElement('p');
    const humidityValueParagraph = document.createElement('p');

    const currentPressureContainer = document.createElement('div');
    const pressureIcon = document.createElement('img');
    const pressureDataContainer = document.createElement('div');
    const pressureParagraph = document.createElement('p');
    const pressureValueParagraph = document.createElement('p');

    const currentUvIndexContainer = document.createElement('div');
    const uvIndexIcon = document.createElement('img');
    const uvIndexDataContainer = document.createElement('div');
    const uvIndexParagraph = document.createElement('p');
    const uvIndexValueParagraph = document.createElement('p');

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
    WindValueParagraph.id = 'current-wind';
    currentHumidityContainer.id = 'current-humidity-container';
    humidityValueParagraph.id = 'current-humidity';
    currentPressureContainer.id = 'current-pressure-container';
    pressureValueParagraph.id = 'current-pressure';
    currentUvIndexContainer.id = 'current-uv-container';
    uvIndexValueParagraph.id = 'current-uv';

    //Assigning class selectors to current weather section elements
    windParagraph.classList.add('additional-label');
    WindValueParagraph.classList.add('additional-value');
    humidityParagraph.classList.add('additional-label');
    humidityValueParagraph.classList.add('additional-value');
    pressureParagraph.classList.add('additional-label');
    pressureValueParagraph.classList.add('additional-value');
    uvIndexParagraph.classList.add('additional-label');
    uvIndexValueParagraph.classList.add('additional-value');

    //Assigning property values to current weater section elements
    rightNowParagraph.textContent = 'Currently';
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
    windDataContainer.appendChild(WindValueParagraph);

    currentHumidityContainer.appendChild(humidityIcon);
    currentHumidityContainer.appendChild(humidityDataContainer);
    humidityDataContainer.appendChild(humidityParagraph);
    humidityDataContainer.appendChild(humidityValueParagraph);

    currentPressureContainer.appendChild(pressureIcon);
    currentPressureContainer.appendChild(pressureDataContainer);
    pressureDataContainer.appendChild(pressureParagraph);
    pressureDataContainer.appendChild(pressureValueParagraph);

    currentUvIndexContainer.appendChild(uvIndexIcon);
    currentUvIndexContainer.appendChild(uvIndexDataContainer);
    uvIndexDataContainer.appendChild(uvIndexParagraph);
    uvIndexDataContainer.appendChild(uvIndexValueParagraph);

    return currentWeatherDataContainer;
}

//Current Weather UI Element Getters
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

function getCurrentTemperatureUnitElement() {
    return document.querySelector('#current-temperature-unit');
}

function getCurrentFeelsLikeElement() {
    return document.querySelector('#current-feels-like');
}

function getCurrentFeelsLikeUnitElement() {
    return document.querySelector('#current-feels-like-unit');
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



function createMainContent() {
    const main = document.createElement('main');
    main.id = 'main';

    main.appendChild((0,_current_weather_current_weather_section__WEBPACK_IMPORTED_MODULE_1__.createCurrentWeatherSection)());

    return main;
}

function getMainContent() {
    return document.querySelector('#main');
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
/* harmony import */ var _main_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main/main */ "./src/main/main.js");



function initializeWebsite() {
    document.body.appendChild((0,_components_content_content__WEBPACK_IMPORTED_MODULE_0__.createContentContainer)());
    
    (0,_main_main__WEBPACK_IMPORTED_MODULE_1__.updateWeatherForecast)();
}





/***/ }),

/***/ "./src/main/main.js":
/*!**************************!*\
  !*** ./src/main/main.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateWeatherForecast: () => (/* binding */ updateWeatherForecast)
/* harmony export */ });
/* harmony import */ var _api_weather_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/weather-api */ "./src/api/weather-api.js");
/* harmony import */ var _components_current_weather_current_weather_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/current-weather/current-weather-section */ "./src/components/current-weather/current-weather-section.js");
/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header/header */ "./src/components/header/header.js");
/* harmony import */ var _units_units__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../units/units */ "./src/units/units.js");





function updateWeatherForecast() {
    (0,_components_header_header__WEBPACK_IMPORTED_MODULE_2__.getSearchButton)().addEventListener('click', () => {
        const location = (0,_components_header_header__WEBPACK_IMPORTED_MODULE_2__.getLocationSearchField)().value;

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
                    
                //Data display
                (0,_components_current_weather_current_weather_section__WEBPACK_IMPORTED_MODULE_1__.getCurrentLocationElement)().textContent = `${currentLocationData.city}, ${currentLocationData.country}`;
                (0,_components_current_weather_current_weather_section__WEBPACK_IMPORTED_MODULE_1__.getCurrentWeatherIconElement)().src = `${currentWeatherIconData}`;
                (0,_components_current_weather_current_weather_section__WEBPACK_IMPORTED_MODULE_1__.getCurrentConditionElement)().textContent = `${currentConditionData}`;

                (0,_components_current_weather_current_weather_section__WEBPACK_IMPORTED_MODULE_1__.getCurrentTemperatureElement)().textContent = `${currentTemperatureData.temperatureCelsius}`;
                (0,_components_current_weather_current_weather_section__WEBPACK_IMPORTED_MODULE_1__.getCurrentFeelsLikeElement)().textContent = `Feels like: ${currentFeelsLikeTemperatureData.feelsLikeCelsius}`;
                (0,_components_current_weather_current_weather_section__WEBPACK_IMPORTED_MODULE_1__.getCurrentTemperatureUnitElement)().textContent = `${_units_units__WEBPACK_IMPORTED_MODULE_3__.temperatureUnits.celsius}`;
                (0,_components_current_weather_current_weather_section__WEBPACK_IMPORTED_MODULE_1__.getCurrentFeelsLikeUnitElement)().textContent = `${_units_units__WEBPACK_IMPORTED_MODULE_3__.temperatureUnits.celsius}`;

                (0,_components_current_weather_current_weather_section__WEBPACK_IMPORTED_MODULE_1__.getCurrentWindElement)().textContent = `${currentWindData.windKph} ${_units_units__WEBPACK_IMPORTED_MODULE_3__.windSpeedUnits.kph}`;
                (0,_components_current_weather_current_weather_section__WEBPACK_IMPORTED_MODULE_1__.getCurrentHumidityElement)().textContent = `${currentHumidityData} ${_units_units__WEBPACK_IMPORTED_MODULE_3__.humidityUnit}`;
                (0,_components_current_weather_current_weather_section__WEBPACK_IMPORTED_MODULE_1__.getCurrentPressureElement)().textContent = `${currentPressureData.pressureMbar} ${_units_units__WEBPACK_IMPORTED_MODULE_3__.pressureUnits.mbar}`;
                (0,_components_current_weather_current_weather_section__WEBPACK_IMPORTED_MODULE_1__.getCurrentUvIndexElement)().textContent = `${currentUvIndexData}`;
            }).catch((error) => {
                console.log(error);
            });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7O0FDeENPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBc0Q7QUFDeEI7QUFDOUI7QUFDQSxrRUFBaUIsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcz9lNDViIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXBpL2RhdGEtYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2FwaS93ZWF0aGVyLWFwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL2NvbnRlbnQvY29udGVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL2N1cnJlbnQtd2VhdGhlci9jdXJyZW50LXdlYXRoZXItc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9tYWluLWNvbnRlbnQvbWFpbi1jb250ZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2hlbHBlci9pbml0LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21haW4vbWFpbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy91bml0cy91bml0cy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaWNvbnMvaWNvbnM4LW1ldGVvci5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaWNvbnMvaWNvbnM4LXNlYXJjaC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgIGZvbnQtZmFtaWx5OiAnVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG5cclxuICAgIC0tbWFpbi1hcHAtY29sb3I6ICMwMEIyQTA7XHJcbn1cclxuXHJcbiNjb250ZW50IHtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICAgIGJveC1zaGFkb3c6IDBjaCA1cHggMjBweCAwcHggZ3JheTtcclxufVxyXG5cclxuI2hlYWRlci1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBnYXA6IDJyZW07XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyIDJmcjtcclxufVxyXG5cclxuI3RpdGxlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4jYXBwLWxvZ28ge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNSU7XHJcbn1cclxuXHJcbiNzZWFyY2gtc2VjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4jbG9jYXRpb24taW5wdXQge1xyXG4gICAgZmxleDogMTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgZmxleDogMTtcclxuICAgIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS1tYWluLWFwcC1jb2xvcik7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbiNzZWFyY2gtYnV0dG9uIHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWFwcC1jb2xvcik7O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG5tYWluIHtcclxuICAgIHdpZHRoOiBtYXgoNTAlLCA1MDBweCk7XHJcbiAgICBwYWRkaW5nOiAycmVtIDByZW07XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbiNjdXJyZW50LWxvY2F0aW9uLWRhdGEtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbiNjdXJyZW50LWxvY2F0aW9uLWRhdGEtY29udGFpbmVyID4gZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuI2N1cnJlbnQtbG9jYXRpb24ge1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xyXG59XHJcblxyXG4jcmlnaHQtbm93IHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtOyAgICBcclxuICAgIG1hcmdpbjogMC41cmVtO1xyXG59XHJcblxyXG4jY3VycmVudC13ZWF0aGVyLWljb24tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuI2N1cnJlbnQtd2VhdGhlci1pY29uIHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbiNjdXJyZW50LWNvbmRpdGlvbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xyXG59XHJcblxyXG4jY3VycmVudC10ZW1wZXJhdHVyZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbn1cclxuXHJcbiNjdXJyZW50LXRlbXBlcmF0dXJlLWNvbnRhaW5lciA+IGltZyB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxufVxyXG5cclxuI2N1cnJlbnQtdGVtcGVyYXR1cmUtdmFsdWUtY29udGFpbmVyIHsgXHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbn1cclxuXHJcbiNjdXJyZW50LWZlZWxzLWxpa2UtY29udGFpbmVyIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxufVxyXG5cclxuI2N1cnJlbnQtdGVtcGVyYXR1cmUtdW5pdCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMC4zM3JlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtOHB4O1xyXG59XHJcblxyXG4jY3VycmVudC1mZWVscy1saWtlLXVuaXQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuMzNyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTNweDtcclxufVxyXG5cclxuI2N1cnJlbnQtYWRkaXRpb25hbCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjAwcHgsIDFmcikpO1xyXG59XHJcblxyXG4jY3VycmVudC1hZGRpdGlvbmFsID4gZGl2e1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hZGRpdGlvbmFsLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG4uYWRkaXRpb25hbC12YWx1ZSB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuI2N1cnJlbnQtYWRkaXRpb25hbCBpbWcge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTs7SUFFVixxR0FBcUc7O0lBRXJHLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULGFBQWE7SUFDYixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVDQUF1QztJQUN2QyxvQkFBb0I7SUFDcEIseURBQTBEO0lBQzFELHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLE9BQU87SUFDUCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLE9BQU87SUFDUCx3Q0FBd0M7SUFDeEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsdUNBQXVDO0lBQ3ZDLHVDQUF1QztJQUN2Qyx5REFBMEQ7SUFDMUQsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw0REFBNEQ7QUFDaEU7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG5cXHJcXG4gICAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuXFxyXFxuICAgIC0tbWFpbi1hcHAtY29sb3I6ICMwMEIyQTA7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgICBib3gtc2hhZG93OiAwY2ggNXB4IDIwcHggMHB4IGdyYXk7XFxyXFxufVxcclxcblxcclxcbiNoZWFkZXItY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgM2ZyIDJmcjtcXHJcXG59XFxyXFxuXFxyXFxuI3RpdGxlLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXHJcXG4gICAgd2lkdGg6IGF1dG87XFxyXFxufVxcclxcblxcclxcbiNhcHAtbG9nbyB7XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL2ljb25zL2ljb25zOC1tZXRlb3IucG5nJyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDI1JTtcXHJcXG59XFxyXFxuXFxyXFxuI3NlYXJjaC1zZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAwLjVyZW07XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNsb2NhdGlvbi1pbnB1dCB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS1tYWluLWFwcC1jb2xvcik7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3NlYXJjaC1idXR0b24ge1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYXBwLWNvbG9yKTs7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4tYXBwLWNvbG9yKTtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9hc3NldHMvaWNvbnMvaWNvbnM4LXNlYXJjaC5wbmcnKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gICAgd2lkdGg6IG1heCg1MCUsIDUwMHB4KTtcXHJcXG4gICAgcGFkZGluZzogMnJlbSAwcmVtO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbiNjdXJyZW50LWxvY2F0aW9uLWRhdGEtY29udGFpbmVyIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2N1cnJlbnQtbG9jYXRpb24tZGF0YS1jb250YWluZXIgPiBkaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2N1cnJlbnQtbG9jYXRpb24ge1xcclxcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1hcHAtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4jcmlnaHQtbm93IHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07ICAgIFxcclxcbiAgICBtYXJnaW46IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2N1cnJlbnQtd2VhdGhlci1pY29uLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jY3VycmVudC13ZWF0aGVyLWljb24ge1xcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcclxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2N1cnJlbnQtY29uZGl0aW9uLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2N1cnJlbnQtdGVtcGVyYXR1cmUtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XFxyXFxufVxcclxcblxcclxcbiNjdXJyZW50LXRlbXBlcmF0dXJlLWNvbnRhaW5lciA+IGltZyB7XFxyXFxuICAgIHdpZHRoOiA4MHB4O1xcclxcbiAgICBoZWlnaHQ6IDgwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2N1cnJlbnQtdGVtcGVyYXR1cmUtdmFsdWUtY29udGFpbmVyIHsgXFxyXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2N1cnJlbnQtZmVlbHMtbGlrZS1jb250YWluZXIge1xcclxcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxufVxcclxcblxcclxcbiNjdXJyZW50LXRlbXBlcmF0dXJlLXVuaXQge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMC4zM3JlbTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC04cHg7XFxyXFxufVxcclxcblxcclxcbiNjdXJyZW50LWZlZWxzLWxpa2UtdW5pdCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwLjMzcmVtO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogLTNweDtcXHJcXG59XFxyXFxuXFxyXFxuI2N1cnJlbnQtYWRkaXRpb25hbCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcXHJcXG59XFxyXFxuXFxyXFxuI2N1cnJlbnQtYWRkaXRpb25hbCA+IGRpdntcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hZGRpdGlvbmFsLWxhYmVsIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5hZGRpdGlvbmFsLXZhbHVlIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNjdXJyZW50LWFkZGl0aW9uYWwgaW1nIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNvbnN0IEFQSV9LRVkgPSBgNTM1MTdlZTcxZGM3NDY5MmFhZTEyNDkzMzI0MTQwM2A7XHJcbmV4cG9ydCBjb25zdCBCQVNFX1VSTCA9IGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxYDtcclxuZXhwb3J0IGNvbnN0IFRIUkVFX0RBWV9GT1JFQ0FTVF9FTkRQT0lOVCA9ICdmb3JlY2FzdCc7IiwiaW1wb3J0IHsgQVBJX0tFWSwgQkFTRV9VUkwsIFRIUkVFX0RBWV9GT1JFQ0FTVF9FTkRQT0lOVCB9IGZyb20gXCIuL2RhdGEtYXBpXCI7XHJcblxyXG4vL1JldHJpZXZlcyB0aGUgd2VhdGhlciBmb3JlY2FzdCBmb3IgMyBkYXlzLCBzdGFydGluZyBmcm9tIHRoZSBjdXJyZW50IGRheVxyXG4vL1JldHJpZXZlcyB0aGUgY3VycmVudCB3ZWF0aGVyIGRhdGFcclxuLy9SZXRyaWV2ZXMgZGF0YSBhYm91dCB0aGUgbG9jYXRpb25cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJGb3JlY2FzdERhdGEobG9jYXRpb24pIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QkFTRV9VUkx9LyR7VEhSRUVfREFZX0ZPUkVDQVNUX0VORFBPSU5UfS5qc29uP2tleT0ke0FQSV9LRVl9JnE9JHtsb2NhdGlvbn0mZGF5cz0zYCwgeyBtb2RlOiAnY29ycycgfSk7XHJcbiAgICBjb25zdCB3ZWF0aGVyRm9yZWNhc3REYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgIHJldHVybiB3ZWF0aGVyRm9yZWNhc3REYXRhO1xyXG59XHJcblxyXG4vL0Rlcml2YXRpdmUgZnVuY3Rpb25zIGZvciBjdXJyZW50IHdlYXRoZXIgY29uZGl0aW9ucyA9PlxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rm9yZWNhc3RMb2NhdGlvbihkYXRhKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNpdHk6IGRhdGEubG9jYXRpb24ubmFtZSxcclxuICAgICAgICBjb3VudHJ5OiBkYXRhLmxvY2F0aW9uLmNvdW50cnlcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJlbnRXZWF0aGVySWNvbihkYXRhKSB7XHJcbiAgICByZXR1cm4gYGh0dHBzOi8vJHtkYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb259YDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRXZWF0aGVyQ29uZGl0aW9uKGRhdGEpIHtcclxuICAgIHJldHVybiBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50VGVtcGVyYXR1cmUoZGF0YSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0ZW1wZXJhdHVyZUNlbHNpdXM6IGRhdGEuY3VycmVudC50ZW1wX2MsXHJcbiAgICAgICAgdGVtcGVyYXR1cmVGYWhyZW5oZWl0OiBkYXRhLmN1cnJlbnQudGVtcF9mXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50RmVlbHNMaWtlVGVtcGVyYXR1cmUoZGF0YSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBmZWVsc0xpa2VDZWxzaXVzOiBkYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2MsXHJcbiAgICAgICAgZmVlbHNMaWtlRmFocmVuaGVpdDogZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9mXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50V2luZChkYXRhKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHdpbmRLcGg6IGRhdGEuY3VycmVudC53aW5kX2twaCxcclxuICAgICAgICB3aW5kTXBoOiBkYXRhLmN1cnJlbnQud2luZF9tcGhcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRIdW1pZGl0eShkYXRhKSB7XHJcbiAgICByZXR1cm4gZGF0YS5jdXJyZW50Lmh1bWlkaXR5O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFByZXNzdXJlKGRhdGEpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJlc3N1cmVNYmFyOiBkYXRhLmN1cnJlbnQucHJlc3N1cmVfbWIsXHJcbiAgICAgICAgcHJlc3N1cmVJbjogZGF0YS5jdXJyZW50LnByZXNzdXJlX2luXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50VXZJbmRleChkYXRhKSB7XHJcbiAgICByZXR1cm4gZGF0YS5jdXJyZW50LnV2O1xyXG59XHJcblxyXG5cclxuIiwiaW1wb3J0ICcuLi8uLi9zdHlsZXMvc3R5bGVzLmNzcyc7XHJcbmltcG9ydCB7IGNyZWF0ZUhlYWRlciB9IGZyb20gJy4uL2hlYWRlci9oZWFkZXInO1xyXG5pbXBvcnQgeyBjcmVhdGVNYWluQ29udGVudH0gZnJvbSAnLi4vbWFpbi1jb250ZW50L21haW4tY29udGVudCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29udGVudENvbnRhaW5lcigpIHtcclxuICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRlbnRDb250YWluZXIuaWQgPSAnY29udGVudCc7XHJcblxyXG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XHJcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU1haW5Db250ZW50KCkpO1xyXG5cclxuICAgIHJldHVybiBjb250ZW50Q29udGFpbmVyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29udGVudENvbnRhaW5lcigpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG59IiwiaW1wb3J0ICcuLi8uLi9zdHlsZXMvc3R5bGVzLmNzcyc7XHJcbmltcG9ydCB0ZW1wZXJhdHVyZUljb25QYXRoIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9pY29uczgtdGVtcGVyYXR1cmUucG5nJztcclxuaW1wb3J0IHdpbmRJY29uUGF0aCBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWNvbnM4LXdpbmQucG5nJztcclxuaW1wb3J0IGh1bWlkaXR5SWNvblBhdGggZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljb25zOC1odW1pZGl0eS5wbmcnO1xyXG5pbXBvcnQgcHJlc3N1cmVJY29uUGF0aCBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWNvbnM4LXByZXNzdXJlLnBuZyc7XHJcbmltcG9ydCB1dkluZGV4SWNvblBhdGggZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljb25zOC11di5wbmcnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUN1cnJlbnRXZWF0aGVyU2VjdGlvbigpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRXZWF0aGVyRGF0YUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRMb2NhdGlvbkRhdGFDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGN1cnJlbnRMb2NhdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgY3VycmVudExvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGNvbnN0IHJpZ2h0Tm93Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCByaWdodE5vd1BhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50V2VhdGhlckljb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGN1cnJlbnRXZWF0aGVySWNvbiA9IG5ldyBJbWFnZSgpO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRDb25kaXRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGN1cnJlbnRDb25kaXRpb25QYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblxyXG4gICAgY29uc3QgY3VycmVudFRlbXBlcmF0dXJlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBjdXJyZW50VGVtcGVyYXR1cmVJY29uID0gbmV3IEltYWdlKCk7XHJcbiAgICBjb25zdCBjdXJyZW50VGVtcGVyYXR1cmVWYWx1ZXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGN1cnJlbnRUZW1wZXJhdHVyZVZhbHVlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBjdXJyZW50VGVtcGVyYXR1cmVWYWx1ZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBjb25zdCBjdXJyZW50VGVtcGVyYXR1cmVVbml0U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGNvbnN0IGN1cnJlbnRGZWVsc0xpa2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGN1cnJlbnRGZWVsc0xpa2VWYWx1ZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBjb25zdCBjdXJyZW50RmVlbHNMaWtlVW5pdFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcblxyXG4gICAgY29uc3QgY3VycmVudEFkZGl0aW9uYWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50V2luZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3Qgd2luZEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGNvbnN0IHdpbmREYXRhQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCB3aW5kUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY29uc3QgV2luZFZhbHVlUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRIdW1pZGl0eUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgaHVtaWRpdHlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBjb25zdCBodW1pZGl0eURhdGFDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGh1bWlkaXR5UGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY29uc3QgaHVtaWRpdHlWYWx1ZVBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50UHJlc3N1cmVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHByZXNzdXJlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgY29uc3QgcHJlc3N1cmVEYXRhQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBwcmVzc3VyZVBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnN0IHByZXNzdXJlVmFsdWVQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblxyXG4gICAgY29uc3QgY3VycmVudFV2SW5kZXhDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IHV2SW5kZXhJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBjb25zdCB1dkluZGV4RGF0YUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgdXZJbmRleFBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnN0IHV2SW5kZXhWYWx1ZVBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHJcbiAgICAvL0Fzc2lnbmluZyBpZCBzZWxlY3RvcnMgdG8gY3VycmVudCB3ZWF0aGVyIHNlY3Rpb24gZWxlbWVudHNcclxuICAgIGN1cnJlbnRXZWF0aGVyRGF0YUNvbnRhaW5lci5pZCA9ICdjdXJyZW50JztcclxuICAgIGN1cnJlbnRMb2NhdGlvbkRhdGFDb250YWluZXIuaWQgPSAnY3VycmVudC1sb2NhdGlvbi1kYXRhLWNvbnRhaW5lcic7XHJcbiAgICBjdXJyZW50TG9jYXRpb24uaWQgPSAnY3VycmVudC1sb2NhdGlvbic7XHJcbiAgICByaWdodE5vd1BhcmFncmFwaC5pZCA9ICdyaWdodC1ub3cnO1xyXG4gICAgY3VycmVudFdlYXRoZXJJY29uQ29udGFpbmVyLmlkID0gJ2N1cnJlbnQtd2VhdGhlci1pY29uLWNvbnRhaW5lcic7XHJcbiAgICBjdXJyZW50V2VhdGhlckljb24uaWQgPSAnY3VycmVudC13ZWF0aGVyLWljb24nO1xyXG4gICAgY3VycmVudENvbmRpdGlvbkNvbnRhaW5lci5pZCA9ICdjdXJyZW50LWNvbmRpdGlvbi1jb250YWluZXInO1xyXG4gICAgY3VycmVudENvbmRpdGlvblBhcmFncmFwaC5pZCA9ICdjdXJyZW50LWNvbmRpdGlvbic7XHJcbiAgICBjdXJyZW50VGVtcGVyYXR1cmVDb250YWluZXIuaWQgPSAnY3VycmVudC10ZW1wZXJhdHVyZS1jb250YWluZXInO1xyXG4gICAgY3VycmVudFRlbXBlcmF0dXJlVmFsdWVzQ29udGFpbmVyLmlkID0gJ2N1cnJlbnQtdGVtcGVyYXR1cmUtdmFsdWVzLWNvbnRhaW5lcic7XHJcbiAgICBjdXJyZW50VGVtcGVyYXR1cmVWYWx1ZUNvbnRhaW5lci5pZCA9ICdjdXJyZW50LXRlbXBlcmF0dXJlLXZhbHVlLWNvbnRhaW5lcic7XHJcbiAgICBjdXJyZW50VGVtcGVyYXR1cmVWYWx1ZVNwYW4uaWQgPSAnY3VycmVudC10ZW1wZXJhdHVyZSc7XHJcbiAgICBjdXJyZW50VGVtcGVyYXR1cmVVbml0U3Bhbi5pZCA9ICdjdXJyZW50LXRlbXBlcmF0dXJlLXVuaXQnO1xyXG4gICAgY3VycmVudEZlZWxzTGlrZUNvbnRhaW5lci5pZCA9ICdjdXJyZW50LWZlZWxzLWxpa2UtY29udGFpbmVyJztcclxuICAgIGN1cnJlbnRGZWVsc0xpa2VWYWx1ZVNwYW4uaWQgPSAnY3VycmVudC1mZWVscy1saWtlJztcclxuICAgIGN1cnJlbnRGZWVsc0xpa2VVbml0U3Bhbi5pZCA9ICdjdXJyZW50LWZlZWxzLWxpa2UtdW5pdCc7XHJcbiAgICBjdXJyZW50QWRkaXRpb25hbENvbnRhaW5lci5pZCA9ICdjdXJyZW50LWFkZGl0aW9uYWwnO1xyXG4gICAgY3VycmVudFdpbmRDb250YWluZXIuaWQgPSAnY3VycmVudC13aW5kLWNvbnRhaW5lcic7XHJcbiAgICBXaW5kVmFsdWVQYXJhZ3JhcGguaWQgPSAnY3VycmVudC13aW5kJztcclxuICAgIGN1cnJlbnRIdW1pZGl0eUNvbnRhaW5lci5pZCA9ICdjdXJyZW50LWh1bWlkaXR5LWNvbnRhaW5lcic7XHJcbiAgICBodW1pZGl0eVZhbHVlUGFyYWdyYXBoLmlkID0gJ2N1cnJlbnQtaHVtaWRpdHknO1xyXG4gICAgY3VycmVudFByZXNzdXJlQ29udGFpbmVyLmlkID0gJ2N1cnJlbnQtcHJlc3N1cmUtY29udGFpbmVyJztcclxuICAgIHByZXNzdXJlVmFsdWVQYXJhZ3JhcGguaWQgPSAnY3VycmVudC1wcmVzc3VyZSc7XHJcbiAgICBjdXJyZW50VXZJbmRleENvbnRhaW5lci5pZCA9ICdjdXJyZW50LXV2LWNvbnRhaW5lcic7XHJcbiAgICB1dkluZGV4VmFsdWVQYXJhZ3JhcGguaWQgPSAnY3VycmVudC11dic7XHJcblxyXG4gICAgLy9Bc3NpZ25pbmcgY2xhc3Mgc2VsZWN0b3JzIHRvIGN1cnJlbnQgd2VhdGhlciBzZWN0aW9uIGVsZW1lbnRzXHJcbiAgICB3aW5kUGFyYWdyYXBoLmNsYXNzTGlzdC5hZGQoJ2FkZGl0aW9uYWwtbGFiZWwnKTtcclxuICAgIFdpbmRWYWx1ZVBhcmFncmFwaC5jbGFzc0xpc3QuYWRkKCdhZGRpdGlvbmFsLXZhbHVlJyk7XHJcbiAgICBodW1pZGl0eVBhcmFncmFwaC5jbGFzc0xpc3QuYWRkKCdhZGRpdGlvbmFsLWxhYmVsJyk7XHJcbiAgICBodW1pZGl0eVZhbHVlUGFyYWdyYXBoLmNsYXNzTGlzdC5hZGQoJ2FkZGl0aW9uYWwtdmFsdWUnKTtcclxuICAgIHByZXNzdXJlUGFyYWdyYXBoLmNsYXNzTGlzdC5hZGQoJ2FkZGl0aW9uYWwtbGFiZWwnKTtcclxuICAgIHByZXNzdXJlVmFsdWVQYXJhZ3JhcGguY2xhc3NMaXN0LmFkZCgnYWRkaXRpb25hbC12YWx1ZScpO1xyXG4gICAgdXZJbmRleFBhcmFncmFwaC5jbGFzc0xpc3QuYWRkKCdhZGRpdGlvbmFsLWxhYmVsJyk7XHJcbiAgICB1dkluZGV4VmFsdWVQYXJhZ3JhcGguY2xhc3NMaXN0LmFkZCgnYWRkaXRpb25hbC12YWx1ZScpO1xyXG5cclxuICAgIC8vQXNzaWduaW5nIHByb3BlcnR5IHZhbHVlcyB0byBjdXJyZW50IHdlYXRlciBzZWN0aW9uIGVsZW1lbnRzXHJcbiAgICByaWdodE5vd1BhcmFncmFwaC50ZXh0Q29udGVudCA9ICdDdXJyZW50bHknO1xyXG4gICAgd2luZFBhcmFncmFwaC50ZXh0Q29udGVudCA9ICdXaW5kJztcclxuICAgIGh1bWlkaXR5UGFyYWdyYXBoLnRleHRDb250ZW50ID0gJ0h1bWlkaXR5JztcclxuICAgIHByZXNzdXJlUGFyYWdyYXBoLnRleHRDb250ZW50ID0gJ1ByZXNzdXJlJztcclxuICAgIHV2SW5kZXhQYXJhZ3JhcGgudGV4dENvbnRlbnQgPSAnVVYgSW5kZXgnO1xyXG4gICBcclxuICAgIGN1cnJlbnRUZW1wZXJhdHVyZUljb24uc3JjID0gYCR7dGVtcGVyYXR1cmVJY29uUGF0aH1gO1xyXG4gICAgd2luZEljb24uc3JjID0gYCR7d2luZEljb25QYXRofWA7XHJcbiAgICBodW1pZGl0eUljb24uc3JjID0gYCR7aHVtaWRpdHlJY29uUGF0aH1gO1xyXG4gICAgcHJlc3N1cmVJY29uLnNyYyA9IGAke3ByZXNzdXJlSWNvblBhdGh9YDtcclxuICAgIHV2SW5kZXhJY29uLnNyYyA9IGAke3V2SW5kZXhJY29uUGF0aH1gO1xyXG5cclxuICAgIC8vQ3JlYXRpbmcgdGhlIHN0cnVjdHVyZSBvZiB0aGUgY3VycmVudCB3ZWF0aGVyIHNlY3Rpb25cclxuICAgIGN1cnJlbnRXZWF0aGVyRGF0YUNvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50TG9jYXRpb25EYXRhQ29udGFpbmVyKTtcclxuICAgIGN1cnJlbnRXZWF0aGVyRGF0YUNvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50V2VhdGhlckljb25Db250YWluZXIpO1xyXG4gICAgY3VycmVudFdlYXRoZXJEYXRhQ29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRDb25kaXRpb25Db250YWluZXIpO1xyXG4gICAgY3VycmVudFdlYXRoZXJEYXRhQ29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRUZW1wZXJhdHVyZUNvbnRhaW5lcik7XHJcbiAgICBjdXJyZW50V2VhdGhlckRhdGFDb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudEFkZGl0aW9uYWxDb250YWluZXIpO1xyXG5cclxuICAgIGN1cnJlbnRMb2NhdGlvbkRhdGFDb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudExvY2F0aW9uQ29udGFpbmVyKTtcclxuICAgIGN1cnJlbnRMb2NhdGlvbkRhdGFDb250YWluZXIuYXBwZW5kQ2hpbGQocmlnaHROb3dDb250YWluZXIpO1xyXG5cclxuICAgIGN1cnJlbnRMb2NhdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50TG9jYXRpb24pO1xyXG4gICAgcmlnaHROb3dDb250YWluZXIuYXBwZW5kQ2hpbGQocmlnaHROb3dQYXJhZ3JhcGgpO1xyXG5cclxuICAgIGN1cnJlbnRXZWF0aGVySWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50V2VhdGhlckljb24pO1xyXG4gICAgY3VycmVudENvbmRpdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50Q29uZGl0aW9uUGFyYWdyYXBoKTtcclxuXHJcbiAgICBjdXJyZW50VGVtcGVyYXR1cmVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudFRlbXBlcmF0dXJlSWNvbik7XHJcbiAgICBjdXJyZW50VGVtcGVyYXR1cmVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudFRlbXBlcmF0dXJlVmFsdWVzQ29udGFpbmVyKTtcclxuICAgIGN1cnJlbnRUZW1wZXJhdHVyZVZhbHVlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50VGVtcGVyYXR1cmVWYWx1ZUNvbnRhaW5lcik7XHJcbiAgICBjdXJyZW50VGVtcGVyYXR1cmVWYWx1ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50VGVtcGVyYXR1cmVWYWx1ZVNwYW4pO1xyXG4gICAgY3VycmVudFRlbXBlcmF0dXJlVmFsdWVDb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudFRlbXBlcmF0dXJlVW5pdFNwYW4pO1xyXG4gICAgY3VycmVudFRlbXBlcmF0dXJlVmFsdWVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRGZWVsc0xpa2VDb250YWluZXIpO1xyXG4gICAgY3VycmVudEZlZWxzTGlrZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50RmVlbHNMaWtlVmFsdWVTcGFuKTtcclxuICAgIGN1cnJlbnRGZWVsc0xpa2VDb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudEZlZWxzTGlrZVVuaXRTcGFuKTtcclxuXHJcbiAgICBjdXJyZW50QWRkaXRpb25hbENvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50V2luZENvbnRhaW5lcik7XHJcbiAgICBjdXJyZW50QWRkaXRpb25hbENvbnRhaW5lci5hcHBlbmRDaGlsZChjdXJyZW50SHVtaWRpdHlDb250YWluZXIpO1xyXG4gICAgY3VycmVudEFkZGl0aW9uYWxDb250YWluZXIuYXBwZW5kQ2hpbGQoY3VycmVudFByZXNzdXJlQ29udGFpbmVyKTtcclxuICAgIGN1cnJlbnRBZGRpdGlvbmFsQ29udGFpbmVyLmFwcGVuZENoaWxkKGN1cnJlbnRVdkluZGV4Q29udGFpbmVyKTtcclxuXHJcbiAgICBjdXJyZW50V2luZENvbnRhaW5lci5hcHBlbmRDaGlsZCh3aW5kSWNvbik7XHJcbiAgICBjdXJyZW50V2luZENvbnRhaW5lci5hcHBlbmRDaGlsZCh3aW5kRGF0YUNvbnRhaW5lcik7XHJcbiAgICB3aW5kRGF0YUNvbnRhaW5lci5hcHBlbmRDaGlsZCh3aW5kUGFyYWdyYXBoKTtcclxuICAgIHdpbmREYXRhQ29udGFpbmVyLmFwcGVuZENoaWxkKFdpbmRWYWx1ZVBhcmFncmFwaCk7XHJcblxyXG4gICAgY3VycmVudEh1bWlkaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKGh1bWlkaXR5SWNvbik7XHJcbiAgICBjdXJyZW50SHVtaWRpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQoaHVtaWRpdHlEYXRhQ29udGFpbmVyKTtcclxuICAgIGh1bWlkaXR5RGF0YUNvbnRhaW5lci5hcHBlbmRDaGlsZChodW1pZGl0eVBhcmFncmFwaCk7XHJcbiAgICBodW1pZGl0eURhdGFDb250YWluZXIuYXBwZW5kQ2hpbGQoaHVtaWRpdHlWYWx1ZVBhcmFncmFwaCk7XHJcblxyXG4gICAgY3VycmVudFByZXNzdXJlQ29udGFpbmVyLmFwcGVuZENoaWxkKHByZXNzdXJlSWNvbik7XHJcbiAgICBjdXJyZW50UHJlc3N1cmVDb250YWluZXIuYXBwZW5kQ2hpbGQocHJlc3N1cmVEYXRhQ29udGFpbmVyKTtcclxuICAgIHByZXNzdXJlRGF0YUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmVzc3VyZVBhcmFncmFwaCk7XHJcbiAgICBwcmVzc3VyZURhdGFDb250YWluZXIuYXBwZW5kQ2hpbGQocHJlc3N1cmVWYWx1ZVBhcmFncmFwaCk7XHJcblxyXG4gICAgY3VycmVudFV2SW5kZXhDb250YWluZXIuYXBwZW5kQ2hpbGQodXZJbmRleEljb24pO1xyXG4gICAgY3VycmVudFV2SW5kZXhDb250YWluZXIuYXBwZW5kQ2hpbGQodXZJbmRleERhdGFDb250YWluZXIpO1xyXG4gICAgdXZJbmRleERhdGFDb250YWluZXIuYXBwZW5kQ2hpbGQodXZJbmRleFBhcmFncmFwaCk7XHJcbiAgICB1dkluZGV4RGF0YUNvbnRhaW5lci5hcHBlbmRDaGlsZCh1dkluZGV4VmFsdWVQYXJhZ3JhcGgpO1xyXG5cclxuICAgIHJldHVybiBjdXJyZW50V2VhdGhlckRhdGFDb250YWluZXI7XHJcbn1cclxuXHJcbi8vQ3VycmVudCBXZWF0aGVyIFVJIEVsZW1lbnQgR2V0dGVyc1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudExvY2F0aW9uRWxlbWVudCgpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudC1sb2NhdGlvbicpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFdlYXRoZXJJY29uRWxlbWVudCgpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudC13ZWF0aGVyLWljb24nKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRDb25kaXRpb25FbGVtZW50KCkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50LWNvbmRpdGlvbicpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFRlbXBlcmF0dXJlRWxlbWVudCgpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudC10ZW1wZXJhdHVyZScpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFRlbXBlcmF0dXJlVW5pdEVsZW1lbnQoKSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQtdGVtcGVyYXR1cmUtdW5pdCcpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudEZlZWxzTGlrZUVsZW1lbnQoKSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQtZmVlbHMtbGlrZScpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudEZlZWxzTGlrZVVuaXRFbGVtZW50KCkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50LWZlZWxzLWxpa2UtdW5pdCcpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFdpbmRFbGVtZW50KCkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50LXdpbmQnKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRIdW1pZGl0eUVsZW1lbnQoKSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQtaHVtaWRpdHknKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRQcmVzc3VyZUVsZW1lbnQoKSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQtcHJlc3N1cmUnKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRVdkluZGV4RWxlbWVudCgpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VycmVudC11dicpO1xyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCAnLi4vLi4vc3R5bGVzL3N0eWxlcy5jc3MnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gICAgY29uc3QgaGVhZGVyQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBhcHBMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcblxyXG4gICAgY29uc3Qgc2VhcmNoU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgbG9jYXRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBjb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHJcbiAgICAvL0Fzc2lnbmluZyBpZCdzIHRvIGhlYWRlciBlbGVtZW50c1xyXG4gICAgaGVhZGVyQ29udGVudC5pZCA9ICdoZWFkZXItY29udGVudCc7XHJcbiAgICB0aXRsZUNvbnRhaW5lci5pZCA9ICd0aXRsZS1jb250YWluZXInO1xyXG4gICAgYXBwTG9nby5pZCA9ICdhcHAtbG9nbyc7XHJcbiAgICBzZWFyY2hTZWN0aW9uLmlkID0gJ3NlYXJjaC1zZWN0aW9uJztcclxuICAgIGxvY2F0aW9uSW5wdXQuaWQgPSAnbG9jYXRpb24taW5wdXQnO1xyXG4gICAgc2VhcmNoQnV0dG9uLmlkID0gJ3NlYXJjaC1idXR0b24nO1xyXG5cclxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJXZWF0aGVyQXBwXCI7XHJcblxyXG4gICAgLy9DcmVhdGluZyB0aGUgc3RydWN0dXJlIG9mIHRoZSBoZWFkZXJcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJDb250ZW50KTtcclxuICAgIGhlYWRlckNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGVDb250YWluZXIpO1xyXG4gICAgaGVhZGVyQ29udGVudC5hcHBlbmRDaGlsZChzZWFyY2hTZWN0aW9uKTtcclxuXHJcbiAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChhcHBMb2dvKTtcclxuICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuXHJcbiAgICBzZWFyY2hTZWN0aW9uLmFwcGVuZENoaWxkKGxvY2F0aW9uSW5wdXQpO1xyXG4gICAgc2VhcmNoU2VjdGlvbi5hcHBlbmRDaGlsZChzZWFyY2hCdXR0b24pO1xyXG5cclxuICAgIHJldHVybiBoZWFkZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvblNlYXJjaEZpZWxkKCkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2NhdGlvbi1pbnB1dCcpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VhcmNoQnV0dG9uKCkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtYnV0dG9uJyk7XHJcbn0iLCJpbXBvcnQgJy4uLy4uL3N0eWxlcy9zdHlsZXMuY3NzJztcclxuaW1wb3J0IHsgY3JlYXRlQ3VycmVudFdlYXRoZXJTZWN0aW9uIH0gZnJvbSAnLi4vY3VycmVudC13ZWF0aGVyL2N1cnJlbnQtd2VhdGhlci1zZWN0aW9uJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNYWluQ29udGVudCgpIHtcclxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICBtYWluLmlkID0gJ21haW4nO1xyXG5cclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlQ3VycmVudFdlYXRoZXJTZWN0aW9uKCkpO1xyXG5cclxuICAgIHJldHVybiBtYWluO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWFpbkNvbnRlbnQoKSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4nKTtcclxufSIsImltcG9ydCB7IGNyZWF0ZUNvbnRlbnRDb250YWluZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9jb250ZW50L2NvbnRlbnRcIjtcclxuaW1wb3J0IHsgdXBkYXRlV2VhdGhlckZvcmVjYXN0IH0gZnJvbSBcIi4uL21haW4vbWFpblwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVXZWJzaXRlKCkge1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVDb250ZW50Q29udGFpbmVyKCkpO1xyXG4gICAgXHJcbiAgICB1cGRhdGVXZWF0aGVyRm9yZWNhc3QoKTtcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgeyBnZXRGb3JlY2FzdExvY2F0aW9uLCBnZXRXZWF0aGVyRm9yZWNhc3REYXRhLCBnZXRDdXJlbnRXZWF0aGVySWNvbiwgZ2V0Q3VycmVudFdlYXRoZXJDb25kaXRpb24sIGdldEN1cnJlbnRUZW1wZXJhdHVyZSwgZ2V0Q3VycmVudFdpbmQsIGdldEN1cnJlbnRIdW1pZGl0eSwgZ2V0Q3VycmVudFByZXNzdXJlLCBnZXRDdXJyZW50VXZJbmRleCwgZ2V0Q3VycmVudEZlZWxzTGlrZVRlbXBlcmF0dXJlIH0gZnJvbSBcIi4uL2FwaS93ZWF0aGVyLWFwaVwiO1xyXG5pbXBvcnQgeyBnZXRDdXJyZW50Q29uZGl0aW9uRWxlbWVudCwgZ2V0Q3VycmVudEZlZWxzTGlrZUVsZW1lbnQsIGdldEN1cnJlbnRGZWVsc0xpa2VVbml0RWxlbWVudCwgZ2V0Q3VycmVudEh1bWlkaXR5RWxlbWVudCwgZ2V0Q3VycmVudExvY2F0aW9uRWxlbWVudCwgZ2V0Q3VycmVudFByZXNzdXJlRWxlbWVudCwgZ2V0Q3VycmVudFRlbXBlcmF0dXJlRWxlbWVudCwgZ2V0Q3VycmVudFRlbXBlcmF0dXJlVW5pdEVsZW1lbnQsIGdldEN1cnJlbnRVdkluZGV4RWxlbWVudCwgZ2V0Q3VycmVudFdlYXRoZXJJY29uRWxlbWVudCwgZ2V0Q3VycmVudFdpbmRFbGVtZW50IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvY3VycmVudC13ZWF0aGVyL2N1cnJlbnQtd2VhdGhlci1zZWN0aW9uXCI7XHJcbmltcG9ydCB7IGdldExvY2F0aW9uU2VhcmNoRmllbGQsIGdldFNlYXJjaEJ1dHRvbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXJcIjtcclxuaW1wb3J0IHsgaHVtaWRpdHlVbml0LCBwcmVzc3VyZVVuaXRzLCB0ZW1wZXJhdHVyZVVuaXRzLCB3aW5kU3BlZWRVbml0cyB9IGZyb20gXCIuLi91bml0cy91bml0c1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVdlYXRoZXJGb3JlY2FzdCgpIHtcclxuICAgIGdldFNlYXJjaEJ1dHRvbigpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0gZ2V0TG9jYXRpb25TZWFyY2hGaWVsZCgpLnZhbHVlO1xyXG5cclxuICAgICAgICBnZXRXZWF0aGVyRm9yZWNhc3REYXRhKGxvY2F0aW9uKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9DdXJyZW50IHdlYXRoZXIgZGF0YVxyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudExvY2F0aW9uRGF0YSA9IGdldEZvcmVjYXN0TG9jYXRpb24oZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50V2VhdGhlckljb25EYXRhID0gZ2V0Q3VyZW50V2VhdGhlckljb24oZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50Q29uZGl0aW9uRGF0YSA9IGdldEN1cnJlbnRXZWF0aGVyQ29uZGl0aW9uKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFRlbXBlcmF0dXJlRGF0YSA9IGdldEN1cnJlbnRUZW1wZXJhdHVyZShkYXRhKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRXaW5kRGF0YSA9IGdldEN1cnJlbnRXaW5kKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEh1bWlkaXR5RGF0YSA9IGdldEN1cnJlbnRIdW1pZGl0eShkYXRhKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQcmVzc3VyZURhdGEgPSBnZXRDdXJyZW50UHJlc3N1cmUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50VXZJbmRleERhdGEgPSBnZXRDdXJyZW50VXZJbmRleChkYXRhKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRGZWVsc0xpa2VUZW1wZXJhdHVyZURhdGEgPSBnZXRDdXJyZW50RmVlbHNMaWtlVGVtcGVyYXR1cmUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvL0RhdGEgZGlzcGxheVxyXG4gICAgICAgICAgICAgICAgZ2V0Q3VycmVudExvY2F0aW9uRWxlbWVudCgpLnRleHRDb250ZW50ID0gYCR7Y3VycmVudExvY2F0aW9uRGF0YS5jaXR5fSwgJHtjdXJyZW50TG9jYXRpb25EYXRhLmNvdW50cnl9YDtcclxuICAgICAgICAgICAgICAgIGdldEN1cnJlbnRXZWF0aGVySWNvbkVsZW1lbnQoKS5zcmMgPSBgJHtjdXJyZW50V2VhdGhlckljb25EYXRhfWA7XHJcbiAgICAgICAgICAgICAgICBnZXRDdXJyZW50Q29uZGl0aW9uRWxlbWVudCgpLnRleHRDb250ZW50ID0gYCR7Y3VycmVudENvbmRpdGlvbkRhdGF9YDtcclxuXHJcbiAgICAgICAgICAgICAgICBnZXRDdXJyZW50VGVtcGVyYXR1cmVFbGVtZW50KCkudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50VGVtcGVyYXR1cmVEYXRhLnRlbXBlcmF0dXJlQ2Vsc2l1c31gO1xyXG4gICAgICAgICAgICAgICAgZ2V0Q3VycmVudEZlZWxzTGlrZUVsZW1lbnQoKS50ZXh0Q29udGVudCA9IGBGZWVscyBsaWtlOiAke2N1cnJlbnRGZWVsc0xpa2VUZW1wZXJhdHVyZURhdGEuZmVlbHNMaWtlQ2Vsc2l1c31gO1xyXG4gICAgICAgICAgICAgICAgZ2V0Q3VycmVudFRlbXBlcmF0dXJlVW5pdEVsZW1lbnQoKS50ZXh0Q29udGVudCA9IGAke3RlbXBlcmF0dXJlVW5pdHMuY2Vsc2l1c31gO1xyXG4gICAgICAgICAgICAgICAgZ2V0Q3VycmVudEZlZWxzTGlrZVVuaXRFbGVtZW50KCkudGV4dENvbnRlbnQgPSBgJHt0ZW1wZXJhdHVyZVVuaXRzLmNlbHNpdXN9YDtcclxuXHJcbiAgICAgICAgICAgICAgICBnZXRDdXJyZW50V2luZEVsZW1lbnQoKS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRXaW5kRGF0YS53aW5kS3BofSAke3dpbmRTcGVlZFVuaXRzLmtwaH1gO1xyXG4gICAgICAgICAgICAgICAgZ2V0Q3VycmVudEh1bWlkaXR5RWxlbWVudCgpLnRleHRDb250ZW50ID0gYCR7Y3VycmVudEh1bWlkaXR5RGF0YX0gJHtodW1pZGl0eVVuaXR9YDtcclxuICAgICAgICAgICAgICAgIGdldEN1cnJlbnRQcmVzc3VyZUVsZW1lbnQoKS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRQcmVzc3VyZURhdGEucHJlc3N1cmVNYmFyfSAke3ByZXNzdXJlVW5pdHMubWJhcn1gO1xyXG4gICAgICAgICAgICAgICAgZ2V0Q3VycmVudFV2SW5kZXhFbGVtZW50KCkudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50VXZJbmRleERhdGF9YDtcclxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0iLCJleHBvcnQgY29uc3QgdGVtcGVyYXR1cmVVbml0cyA9IHtcclxuICAgIGNlbHNpdXM6ICfCsEMnLFxyXG4gICAgZmFocmVuaGVpdDogJ8KwRicsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgd2luZFNwZWVkVW5pdHMgPSB7XHJcbiAgICBrcGg6ICdrbS9oJyxcclxuICAgIG1waDogJ20vaCdcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBodW1pZGl0eVVuaXQgPSAnJSc7XHJcblxyXG5leHBvcnQgY29uc3QgcHJlc3N1cmVVbml0cyA9IHtcclxuICAgIG1iYXI6ICdtYmFyJyxcclxuICAgIGluY2hlczogJ2luJ1xyXG59O1xyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGluaXRpYWxpemVXZWJzaXRlIH0gZnJvbSBcIi4uL2hlbHBlci9pbml0LmpzXCI7XHJcbmltcG9ydCAnLi4vc3R5bGVzL3N0eWxlcy5jc3MnO1xyXG5cclxuaW5pdGlhbGl6ZVdlYnNpdGUoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=