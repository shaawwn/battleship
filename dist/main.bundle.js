/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* General */\nhtml, body {\n    background-color: rgb(84, 130, 165);\n    color: rgb(24, 38, 58);\n    margin: 0px;\n    height: 100%;\n    width: 100%;\n}\n.banner {\n    font-size: 84px;\n    text-align: center;\n}\n\n.btn {\n    border-radius: 5px;\n    background-color: rgb(84, 130, 165);\n    color: white;\n    width: 130px;\n    height: 40px;\n    margin-top: 20px;\n    font-size: 24px;\n}\n\n.input {\n    height: 30px;\n    width: 80%;\n    font-size: 24px;\n}\n\n.header-sm {\n    font-size: 36px;\n    color: white;\n}\n\n/* Modal, gamestartup */\n\n.modal {\n    position: fixed;\n    top: 0px;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0,0,0,0.7);\n    display: none;\n    overflow: auto;\n}\n\n.modal-box {\n    display: flex;\n    flex-direction: column;\n    width: 400px;\n    height: auto;\n    background-color: grey;\n    padding: 10px;\n    margin: auto;\n    margin-top: 200px;\n    align-items: center;\n}\n\n\n.ship-grid {\n    display:flex;\n    flex-direction: column;\n    justify-content:center;\n    background-color: grey;\n    padding: 10px;\n    width: 600px;\n    margin:auto;\n}\n\n.rotate-btn {\n    margin: auto;\n    width: auto;\n}\n\n\n/* Game board */\n.game-space {\n    display: flex;\n    width: 100%;\n    justify-content: center;\n}\n\n.player-header {\n    font-size: 48px;\n    text-align:center;\n    margin-bottom: 10px;\n}\n.game-board {\n    /* 10x10 grid */\n    display: flex;\n    flex-direction: column;\n    margin: 20px;\n}\n\n.game-board-row {\n    display: flex;\n    width: 100%;\n}\n\n.game-board-tile {\n    width: 50px;\n    height: 50px;\n    background-color: rgb(169, 245, 255);\n    border: 2px solid black;\n}\n\n.highlighted {\n    background-color: blue;\n}\n\n.invalid {\n    background-color: red;\n}\n\n.occupied {\n    background-color: red;\n}\n.game-board-tile:hover{\n    background-color:rgb(124, 180, 187)\n}\n\n/* Game pieces */\n\n.ship {\n    display: flex;\n}\n\n/* Mobile view */\n@media (max-width:800px) {\n    .game-space {\n        flex-direction: column;\n    }\n\n    .game-board {\n        margin: auto;\n    }\n\n    .modal {\n        position: fixed;\n        width: 100%;\n        height: auto;\n        bottom: 0px;\n        background-color: rgba(0,0,0,0.7);\n        display: none;\n        overflow:auto;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,YAAY;AACZ;IACI,mCAAmC;IACnC,sBAAsB;IACtB,WAAW;IACX,YAAY;IACZ,WAAW;AACf;AACA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,mCAAmC;IACnC,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,UAAU;IACV,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,YAAY;AAChB;;AAEA,uBAAuB;;AAEvB;IACI,eAAe;IACf,QAAQ;IACR,WAAW;IACX,YAAY;IACZ,iCAAiC;IACjC,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,YAAY;IACZ,sBAAsB;IACtB,aAAa;IACb,YAAY;IACZ,iBAAiB;IACjB,mBAAmB;AACvB;;;AAGA;IACI,YAAY;IACZ,sBAAsB;IACtB,sBAAsB;IACtB,sBAAsB;IACtB,aAAa;IACb,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;;AAGA,eAAe;AACf;IACI,aAAa;IACb,WAAW;IACX,uBAAuB;AAC3B;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,mBAAmB;AACvB;AACA;IACI,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,WAAW;AACf;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;AACzB;AACA;IACI;AACJ;;AAEA,gBAAgB;;AAEhB;IACI,aAAa;AACjB;;AAEA,gBAAgB;AAChB;IACI;QACI,sBAAsB;IAC1B;;IAEA;QACI,YAAY;IAChB;;IAEA;QACI,eAAe;QACf,WAAW;QACX,YAAY;QACZ,WAAW;QACX,iCAAiC;QACjC,aAAa;QACb,aAAa;IACjB;AACJ","sourcesContent":["/* General */\nhtml, body {\n    background-color: rgb(84, 130, 165);\n    color: rgb(24, 38, 58);\n    margin: 0px;\n    height: 100%;\n    width: 100%;\n}\n.banner {\n    font-size: 84px;\n    text-align: center;\n}\n\n.btn {\n    border-radius: 5px;\n    background-color: rgb(84, 130, 165);\n    color: white;\n    width: 130px;\n    height: 40px;\n    margin-top: 20px;\n    font-size: 24px;\n}\n\n.input {\n    height: 30px;\n    width: 80%;\n    font-size: 24px;\n}\n\n.header-sm {\n    font-size: 36px;\n    color: white;\n}\n\n/* Modal, gamestartup */\n\n.modal {\n    position: fixed;\n    top: 0px;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0,0,0,0.7);\n    display: none;\n    overflow: auto;\n}\n\n.modal-box {\n    display: flex;\n    flex-direction: column;\n    width: 400px;\n    height: auto;\n    background-color: grey;\n    padding: 10px;\n    margin: auto;\n    margin-top: 200px;\n    align-items: center;\n}\n\n\n.ship-grid {\n    display:flex;\n    flex-direction: column;\n    justify-content:center;\n    background-color: grey;\n    padding: 10px;\n    width: 600px;\n    margin:auto;\n}\n\n.rotate-btn {\n    margin: auto;\n    width: auto;\n}\n\n\n/* Game board */\n.game-space {\n    display: flex;\n    width: 100%;\n    justify-content: center;\n}\n\n.player-header {\n    font-size: 48px;\n    text-align:center;\n    margin-bottom: 10px;\n}\n.game-board {\n    /* 10x10 grid */\n    display: flex;\n    flex-direction: column;\n    margin: 20px;\n}\n\n.game-board-row {\n    display: flex;\n    width: 100%;\n}\n\n.game-board-tile {\n    width: 50px;\n    height: 50px;\n    background-color: rgb(169, 245, 255);\n    border: 2px solid black;\n}\n\n.highlighted {\n    background-color: blue;\n}\n\n.invalid {\n    background-color: red;\n}\n\n.occupied {\n    background-color: red;\n}\n.game-board-tile:hover{\n    background-color:rgb(124, 180, 187)\n}\n\n/* Game pieces */\n\n.ship {\n    display: flex;\n}\n\n/* Mobile view */\n@media (max-width:800px) {\n    .game-space {\n        flex-direction: column;\n    }\n\n    .game-board {\n        margin: auto;\n    }\n\n    .modal {\n        position: fixed;\n        width: 100%;\n        height: auto;\n        bottom: 0px;\n        background-color: rgba(0,0,0,0.7);\n        display: none;\n        overflow:auto;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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

"use strict";


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

"use strict";


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

"use strict";


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
  } // For old IE

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

"use strict";


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

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPlayer": () => (/* binding */ createPlayer),
/* harmony export */   "getPlayerName": () => (/* binding */ getPlayerName),
/* harmony export */   "gameLoop": () => (/* binding */ gameLoop),
/* harmony export */   "placeShip": () => (/* binding */ placeShip),
/* harmony export */   "placeComputerShips": () => (/* binding */ placeComputerShips)
/* harmony export */ });
/* harmony import */ var _game_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_functions */ "./src/game_functions.js");
/* harmony import */ var _game_functions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_game_functions__WEBPACK_IMPORTED_MODULE_0__);


console.log('Loading game scripts....');

function createPlayer(playerName, computer) {
  // Create a plyer profile after user has entered their name
  // Creates a local storage profile to keep track of current game, and past game history
  const playerProfile = {
    name: playerName,
    gameObject: (0,_game_functions__WEBPACK_IMPORTED_MODULE_0__.Player)(10, computer),
    gameRecords: [],
  };
  console.log(playerProfile);
  return playerProfile;
}

function getPlayerName() {
  // When player enters their name, get the name from the input
  // then create a new player object and create their game board
}
function placeShip(player, ship, shipLength, coordinates, rotated) {
  // Place a single ship on the gameboard
  player.playerBoard.placeShip(ship, shipLength, coordinates, rotated);
}

function placeComputerShips(computerPlayer) {
  // Create Carrier(5), BS(4), submarine(3)x2, destroyer(2)
  const ships = [5, 4, 3, 3, 2];
  const rotations = [true, false];
  const { playerBoard } = computerPlayer.gameObject; // same as pb = CO.gameObject.playetrBoard
  ships.forEach((ship) => {
    const newShip = (0,_game_functions__WEBPACK_IMPORTED_MODULE_0__.createShip)(ship);
    const rotation = rotations[Math.round(Math.random() * 1)]; // randomly gen. rotation
    let randCoordinates = getRandomCoordinates();
    let counter = 0;
    while (true) {
      counter += 1;
      console.log(randCoordinates, ship, rotation, computerPlayer.gameObject);
      try {
        // console.log('START OF WHILE', randCoordinates, rotation);
        if (playerBoard.checkTiles(randCoordinates[0], randCoordinates[1], ship, rotation)) {
          // console.log('Placing ship', ship);
          console.log('RETURNING TRUE?');
          playerBoard.placeShip(newShip, ship, randCoordinates, rotation);
          // console.log('Ship placed', ship);
          // break;
        }
      } catch {
        console.log('ERROR');
        randCoordinates = getRandomCoordinates();
      }
      if (counter > 1) {
        console.log('condition not met');
        break;
      }
    }
  });
}

function getRandomCoordinates() {
  // Generate random coordinates
  // gameBord.checkTile should rturn if coordinates are valid
  const x = Math.floor(Math.random() * (10));
  const y = Math.floor(Math.random() * (10));
  return [x, y];
}

function gameLoop(player1, player2) {
  // When the user enters their name and hits submit, the game starts.
  console.log('Game starting, place your ships!');
}




/***/ }),

/***/ "./src/game_functions.js":
/*!*******************************!*\
  !*** ./src/game_functions.js ***!
  \*******************************/
/***/ ((module) => {

// Functions for Battleship game

// Ships
const createShip = (length) => {
  // Create an array representing the ship with length provided
  const shipsDict = {
    5: 'carrier',
    4: 'battleship',
    3: 'submarine',
    2: 'destroyer',
  };

  const shipType = shipsDict[length];
  const shipSections = () => {
    const sections = {};
    for (let i = 0; i < length; i++) {
      sections[i] = [false];
    }
    return sections;
  };

  const sections = shipSections();

  const hit = (position) => {
    // Mark the given position as 'hit' (true) on the ship
    sections[position][0] = true;
  };

  const isSunk = () => {
    const sectionKeys = Object.keys(sections);
    if (sectionKeys.every((element) => sections[element][0] === true)) {
      return true;
    }
    return false;
  };

  return {
    length, sections, hit, isSunk, shipType,
  };
};

// Game Board
const createGameBoard = (size) => {
  // Create a gameboard of size x size (2d array)
  const addBoardTiles = () => {
    const newBoard = [];
    for (let i = 0; i < size; i++) {
      const row = [];
      for (let i = 0; i < size; i++) {
        row.push(false);
      }
      newBoard.push(row);
    }
    return newBoard;
  };

  const tiles = addBoardTiles();
  const gamePieces = [];

  // const placeShip = (ship, shipLength, coordinates) => {
  //   // Updates state of gameboard with new ship
  //   for (let i = 0; i < coordinates.length; i++) {
  //     const x = coordinates[i][0];
  //     const y = coordinates[i][1];

  //     if (tiles[x][y] === true) { // Cannot place ship on tile already occupied
  //       throw new Error('Coordinates already occupied');
  //     }
  //     if ((x < 0 || x > size) || (y < 0 || y > size)) { // Coords cannot exceed board size
  //       throw new Error('Invalid coordinates');
  //     }
  //     ship.sections[i].push([x, y]);
  //     tiles[x][y] = true;
  //   }
  //   gamePieces.push(ship);
  // };
  const checkTile = (x, y) => {
    // checks tile(x, y) as a valid space, returns boolean
    // console.log('CHECKTILE', x, y);
    if (tiles[x][y] === true) {
      throw new Error('coordinates already occupied');
    }
    if ((x < 0 || x > size) || (y < 0 || y > size)) {
      throw new Error('Invalid coordinates');
    }
    return true;
  };

  const checkTiles = (x, y, shipLength, rotation) => {
    // x, y as starting points, check all tiles ship
    // would take up
    console.log('Checking tiles...');
    if (rotation === true) {
      for (let i = x; i < shipLength; i++) {
        if (tiles[i][y] === true) {
          throw new Error('coordinates already occupied');
        }
        if ((i < 0 || i > size) || (y < 0 || y > size)) {
          throw new Error('Invalid coordinates');
        }
      }
    } else {
      for (let i = y; i < shipLength; i++) {
        if (tiles[x][i] === true) {
          throw new Error('coordinates already occupied');
        }
        if ((i < 0 || i > size) || (x < 0 || x > sizee)) {
          throw new Error('Invalid coordinates');
        }
      }
    }
    return true;
  };

  // const placeShip = (ship, shipLength, coordinates, rotated = false) => {
  //   // Update state of gamebaord with new ship using only one coordinate
  //   if (rotated) {
  //     // Along y axis
  //     const y = coordinates[0];
  //     const x = coordinates[1];
  //     for (let i = 0; i < shipLength; i++) {
  //       if (checkTile(y + i, x)) {
  //         // Tiles will be placed as long as THAT tile is valid,
  //         // can result in partial ship placements
  //         ship.sections[i].push([y + i, x]);
  //         tiles[y + i][x] = true;
  //       }
  //     }
  //   } else {
  //     // Along x axis
  //     const x = coordinates[1];
  //     const y = coordinates[0];
  //     for (let i = 0; i < shipLength; i++) {
  //       if (checkTile(y, x + i)) {
  //         ship.sections[i].push([y, x + i]);
  //         tiles[y][x + i] = true;
  //       }
  //     }
  //   }
  //   gamePieces.push(ship);
  // };

  const placeShip = (ship, shipLength, coordinates, rotated = false) => {
    // Update state of gamebaord with new ship using only one coordinate
    if (rotated) {
      const y = coordinates[0];
      const x = coordinates[1];
      if (checkTiles(y, x, shipLength, rotated)) {
        for (let i = 0; i < shipLength; i++) {
          ship.sections[i].push(y + i, x);
          tiles[y + i][x] = true;
        }
      }
    } else {
      const x = coordinates[1];
      const y = coordinates[0];
      if (checkTiles(y, x, shipLength, rotated)) {
        for (let i = 0; i < shipLength; i++) {
          ship.sections[i].push(y, x + i);
          tiles[y][x + i] = true;
        }
      }
    }
    gamePieces.push(ship);
  };

  const recieveAttack = (coordinates) => {
    // Check coordinates for ship, if a hit, mark posiition on ship as hit
    // else mark tile as a miss, tile should go from false => 'miss'
    const x = coordinates[0];
    const y = coordinates[1];
    if ((x < 0 || x > size) || (y < 0 || y > size)) {
      throw new Error('Attack must target within board');
    }
    if (tiles[x][y] === 'hit' || tiles[x][y] === 'miss') { // Occupied space is marked true on board
      throw new Error('Tile has already been attacked');
    }

    if (tiles[x][y] === true) {
      tiles[x][y] = 'hit';
      // Have coordinates, need to match coordinates to ship position
      for (let i = 0; i < gamePieces.length; i++) {
        const ship = gamePieces[i];
        const sectionKeys = Object.keys(ship.sections);
        for (let i = 0; i < sectionKeys.length; i++) {
          const stringKey = JSON.stringify(ship.sections[sectionKeys[i]][1]);
          if (stringKey === JSON.stringify([x, y])) {
            ship.hit(sectionKeys[i]);
          }
        }
      }
    } else {
      tiles[x][y] = 'miss';
    }
  };

  const displayShips = () => {
    const shipsStatus = {};
    for (let i = 0; i < gamePieces.length; i++) {
      shipsStatus[gamePieces[i].shipType] = gamePieces[i].isSunk();
    }
    return shipsStatus;
  };

  const gameOver = () => {
    // Check that all ships have been sunk, end game if true
    if (gamePieces.every((ship) => ship.isSunk() === true)) {
      return true;
    }
    return false;
  };

  return {
    tiles, gamePieces, placeShip, recieveAttack, gameOver, displayShips, checkTile,
  };
};
// Player

const Player = (boardSize, computer = false) => {
  const createBoard = () => {
    // set true for human player
    const playerBoard = createGameBoard(boardSize);
    return playerBoard;
  };

  const makeAttack = (opponent, coordinates) => {
    opponent.playerBoard.recieveAttack(coordinates);
  };

  const computerAttack = (opponent) => {
    // Computer should should make a random, valid attack
    while (true) {
      const x = Math.floor(Math.random() * (boardSize));
      const y = Math.floor(Math.random() * (boardSize));
      try {
        makeAttack(opponent, [x, y]);
        break;
      } catch {
        continue;
      }
    }
  };

  const isComputer = () => computer;

  const playerBoard = createBoard(boardSize);

  const checkVictory = () => playerBoard.gameOver();
  return {
    playerBoard, makeAttack, computerAttack, isComputer, checkVictory,
  };
};

const parseStringArray = (stringArray) => {
  const rawArray = stringArray.split(',');
  const real = [];
  rawArray.forEach((number) => {
    real.push(parseInt(number));
  });
  return real;
};

module.exports = {
  createShip, createGameBoard, Player, parseStringArray,
};


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_functions */ "./src/game_functions.js");
/* harmony import */ var _game_functions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_game_functions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.js */ "./src/game.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




console.log('Loading scripts....');
// const storage = window.localStorage;

function loadStorage() {
  const storage = window.localStorage;
  return storage;
}

function loadPage() {
  // pass
  const storage = loadStorage();
  createOutline();
  const player1 = (0,_game_functions__WEBPACK_IMPORTED_MODULE_0__.Player)(10); // Don't create user player here
  const computerPlayer = (0,_game_functions__WEBPACK_IMPORTED_MODULE_0__.Player)(10, true); // Probably ok to create computer, for now
  // console.log('PLAYER DEETS', player1);

  document.addEventListener('DOMContentLoaded', () => {
    const banner = document.querySelector('.banner');
    banner.innerText = 'Battleship';
    // const gameSpace = document.querySelector('.game-space');
    // populateGameSpace(gameSpace, [player1, computerPlayer]);
    // mouseHover();
  });
}

function createOutline() {
  // skeleton outline and containers for the page
  const container = document.createElement('div');
  const bannerDiv = document.createElement('div');
  const gameSpace = document.createElement('div');
  const playerDetails = document.createElement('div');

  container.classList.add('main-container');
  bannerDiv.classList.add('banner');
  gameSpace.classList.add('game-space');
  playerDetails.classList.add('player-details');

  container.appendChild(bannerDiv);
  // container.appendChild(rotateBtn);
  container.appendChild(gameSpace);
  container.appendChild(playerDetails);
  const modal = addModal();
  modal.style.display = 'block';
  container.appendChild(modal);
  document.body.appendChild(container);
}

function populateGameSpace(gameSpace, players) {
  players.forEach((player) => {
    const playerBoard = createBoard(player);
    gameSpace.appendChild(playerBoard);
  });
}

function createBoard(player) {
  const gameBoard = document.createElement('div');
  const playerBoardHeader = document.createElement('p');
  // const rotateBtn = document.getElementsByName('rotateBtn')[0];
  gameBoard.classList.add('game-board');
  playerBoardHeader.classList.add('player-header');
  playerBoardHeader.innerText = playerName(player);
  gameBoard.appendChild(playerBoardHeader);

  let boardRow = 0;
  player.gameObject.playerBoard.tiles.forEach((row) => { // horizontal row 0-9
    const gameBoardRow = document.createElement('div');
    let boardColumn = 0;
    gameBoardRow.classList.add('game-board-row');
    row.forEach(() => { // horizontal column 0-9
      const boardTile = document.createElement('div');
      boardTile.classList.add('game-board-tile');
      if (player.gameObject.isComptuer === true) {
        boardTile.setAttribute('data-tile', [boardRow, boardColumn]);
        boardTile.value = player.gameObject.playerBoard.tiles[(boardRow, boardColumn)];
        boardTile.setAttribute('data-tile-value', player.gameObject.playerBoard.tiles[boardRow][boardColumn]);
      } else {
        boardTile.setAttribute(`data-tile${player.name}`, [boardRow, boardColumn]);
        boardTile.setAttribute('data-tile-value', player.gameObject.playerBoard.tiles[boardRow][boardColumn]);
      }
      boardTile.addEventListener('mouseover', (event) => {
        const elementID = parseStringArray(event.target.dataset[`tile${player.name}`]);
        // const rotation = rotateShip(rotateBtn);
        const rotateBtn = document.getElementsByName('rotateBtn')[0];
        highlightShip(elementID, 4, player, rotateBtn.value); // Should now be coordinates [0,0] format
      });
      if (player.gameObject.playerBoard.tiles[boardRow][boardColumn] === true) {
        boardTile.classList.add('occupied');
      }
      gameBoardRow.appendChild(boardTile);
      boardColumn++;
    });
    gameBoard.appendChild(gameBoardRow);
    boardRow++;
  });
  return gameBoard;
}

function rotateButton() {
  const rotateBtn = document.createElement('button');
  rotateBtn.classList.add('btn');
  rotateBtn.classList.add('rotate-btn');
  rotateBtn.name = 'rotateBtn';
  rotateBtn.innerText = 'Rotate ship';
  rotateBtn.value = true;
  rotateBtn.addEventListener('click', () => {
    if (rotateBtn.value === 'true') {
      rotateBtn.value = false;
    } else {
      rotateBtn.value = true;
    }
  });
  return rotateBtn;
}
const parseStringArray = (stringArray) => {
  const rawArray = stringArray.split(',');
  const real = [];
  rawArray.forEach((number) => {
    real.push(parseInt(number));
  });
  return real;
};

function addPlayerDetails() {
  // Player details -> Legend of player ship and computer ship status
}

function addModal() {
  // Modal for game setup, ask player name, and place ships (place ships on main game board)
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.appendChild(addNamePrompt(modal));
  return modal;
}

function placeShipsOnBoard(gameBoard) {
  // Player places ships on their game board
}

function addNamePrompt(modal) {
  // Prompt the player for their name
  const namePrompt = document.createElement('div');
  const header = document.createElement('p');
  const nameInput = document.createElement('input');
  const submitBtn = document.createElement('button');

  header.innerText = 'Battlestations!!';
  header.classList.add('header-sm');
  nameInput.placeholder = 'Please enter your name.';
  submitBtn.innerText = 'Submit';

  namePrompt.classList.add('modal-box');
  nameInput.classList.add('input');
  submitBtn.classList.add('btn');

  submitBtn.addEventListener('click', () => {
    const player = (0,_game_js__WEBPACK_IMPORTED_MODULE_1__.createPlayer)(nameInput.value, false);
    const computerPlayer = (0,_game_js__WEBPACK_IMPORTED_MODULE_1__.createPlayer)('Computer', true);
    (0,_game_js__WEBPACK_IMPORTED_MODULE_1__.placeComputerShips)(computerPlayer);
    const gameSpace = document.querySelector('.game-space');
    modal.style.display = 'none';
    // namePrompt.style.display = 'none';
    // modal.appendChild(placeShipMenu(player));
    // gameLoop(player, computerPlayer);
    populateGameSpace(gameSpace, [player, computerPlayer]);
  });
  namePrompt.appendChild(header);
  namePrompt.appendChild(nameInput);
  namePrompt.appendChild(submitBtn);
  return namePrompt;
}

function placeShipMenu(player) {
  // Modal menu for placing ships on the palyers grid at the start of the game.
  // Attach prompts for adding ships
  const shipGrid = document.createElement('div');
  shipGrid.classList.add('ship-grid');
  shipGrid.appendChild(rotateButton());
  shipGrid.appendChild(createBoard(player));

  return shipGrid;
}

function displayShips() {
  // When ships are placed, their shapes should persist on the gameboard

}
function playerName(player) {
  if (player.gameObject.isComputer() === false) {
    return player.name;
  }
  return 'Computer';
}

function highlightShip(elementID, shipLength, player, rotated) {
  // Highlights a 'ship' placement when moving the cursor over the gameboard
  if (rotated === 'true') {
    incrementY(elementID, shipLength, player);
  } else {
    incrementX(elementID, shipLength, player);
  }
}

function incrementY(elementID, shipLength, player) {
  // Helper for highlighShip()
  for (let i = 0; i < shipLength; i++) {
    try {
      const square = document.querySelector(`[data-tile${player.name}='${[elementID[0] + i, elementID[1]]}']`);
      square.classList.add('highlighted');
      square.addEventListener('mouseout', () => {
        for (let i = 0; i < shipLength; i++) {
          const removeSquare = document.querySelector(`[data-tile${player.name}='${[elementID[0] + i, elementID[1]]}']`);
          removeSquare.classList.remove('highlighted');
          removeSquare.classList.remove('invalid');
        }
      });
    } catch {
      for (let i = 0; i < shipLength; i++) {
        const square = document.querySelector(`[data-tile${player.name}='${[elementID[0] + i, elementID[1]]}']`); // adjust on vertical axis
        square.classList.add('invalid');
      }
      console.log('There is no square');
    }
  }
}

function incrementX(elementID, shipLength, player) {
  // Helper for highlighShip()
  for (let i = 0; i < shipLength; i++) {
    try {
      const square = document.querySelector(`[data-tile${player.name}='${[elementID[0], elementID[1] + i]}']`);
      square.classList.add('highlighted');
      square.addEventListener('mouseout', () => {
        for (let i = 0; i < shipLength; i++) {
          const removeSquare = document.querySelector(`[data-tile${player.name}='${[elementID[0], elementID[1] + i]}']`);
          removeSquare.classList.remove('highlighted');
          removeSquare.classList.remove('invalid');
        }
      });
    } catch {
      for (let i = 0; i < shipLength; i++) {
        const square = document.querySelector(`[data-tile${player.name}='${[elementID[0], elementID[1] + i]}']`); // adjust on vertical axis
        square.classList.add('invalid');
      }
      console.log('There is no square');
    }
  }
}
loadPage();

function testElements() {
  const player1 = (0,_game_functions__WEBPACK_IMPORTED_MODULE_0__.Player)(10);
  const player2 = (0,_game_functions__WEBPACK_IMPORTED_MODULE_0__.Player)(10, true);
  // Banner

  // Display both player boards
  // document.body.appendChild(createGameSpace([player1, player2]));

  // PlayerBoard
  // document.body.appendChild(createBoard(player));
}

testElements();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWlDO0FBQ3BIO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ04sc0JBQXNCLGdCQUFnQjtBQUN0QywyREFBMkQsWUFBWSxJQUFJLGlDQUFpQyxNQUFNO0FBQ2xIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLGdCQUFnQjtBQUNsQztBQUNBLHlEQUF5RCxZQUFZLElBQUksaUNBQWlDO0FBQzFHO0FBQ0E7QUFDQSx3QkFBd0IsZ0JBQWdCO0FBQ3hDLG1FQUFtRSxZQUFZLElBQUksaUNBQWlDO0FBQ3BIO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ04sc0JBQXNCLGdCQUFnQjtBQUN0QywyREFBMkQsWUFBWSxJQUFJLGlDQUFpQyxNQUFNO0FBQ2xIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLHVEQUFNO0FBQ3hCLGtCQUFrQix1REFBTTtBQUN4Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZV9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEdlbmVyYWwgKi9cXG5odG1sLCBib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg0LCAxMzAsIDE2NSk7XFxuICAgIGNvbG9yOiByZ2IoMjQsIDM4LCA1OCk7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4uYmFubmVyIHtcXG4gICAgZm9udC1zaXplOiA4NHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5idG4ge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4NCwgMTMwLCAxNjUpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiAxMzBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbi5pbnB1dCB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4uaGVhZGVyLXNtIHtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi8qIE1vZGFsLCBnYW1lc3RhcnR1cCAqL1xcblxcbi5tb2RhbCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC43KTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5tb2RhbC1ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAyMDBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuXFxuLnNoaXAtZ3JpZCB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBtYXJnaW46YXV0bztcXG59XFxuXFxuLnJvdGF0ZS1idG4ge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG5cXG4vKiBHYW1lIGJvYXJkICovXFxuLmdhbWUtc3BhY2Uge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5wbGF5ZXItaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLmdhbWUtYm9hcmQge1xcbiAgICAvKiAxMHgxMCBncmlkICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbjogMjBweDtcXG59XFxuXFxuLmdhbWUtYm9hcmQtcm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5nYW1lLWJvYXJkLXRpbGUge1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY5LCAyNDUsIDI1NSk7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uaGlnaGxpZ2h0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4uaW52YWxpZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLm9jY3VwaWVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG4uZ2FtZS1ib2FyZC10aWxlOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxMjQsIDE4MCwgMTg3KVxcbn1cXG5cXG4vKiBHYW1lIHBpZWNlcyAqL1xcblxcbi5zaGlwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLyogTW9iaWxlIHZpZXcgKi9cXG5AbWVkaWEgKG1heC13aWR0aDo4MDBweCkge1xcbiAgICAuZ2FtZS1zcGFjZSB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC5nYW1lLWJvYXJkIHtcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgfVxcblxcbiAgICAubW9kYWwge1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICBib3R0b206IDBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC43KTtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICBvdmVyZmxvdzphdXRvO1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsWUFBWTtBQUNaO0lBQ0ksbUNBQW1DO0lBQ25DLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQ0FBbUM7SUFDbkMsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQSx1QkFBdUI7O0FBRXZCO0lBQ0ksZUFBZTtJQUNmLFFBQVE7SUFDUixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7OztBQUdBLGVBQWU7QUFDZjtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSTtBQUNKOztBQUVBLGdCQUFnQjs7QUFFaEI7SUFDSSxhQUFhO0FBQ2pCOztBQUVBLGdCQUFnQjtBQUNoQjtJQUNJO1FBQ0ksc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixXQUFXO1FBQ1gsWUFBWTtRQUNaLFdBQVc7UUFDWCxpQ0FBaUM7UUFDakMsYUFBYTtRQUNiLGFBQWE7SUFDakI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBHZW5lcmFsICovXFxuaHRtbCwgYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4NCwgMTMwLCAxNjUpO1xcbiAgICBjb2xvcjogcmdiKDI0LCAzOCwgNTgpO1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuLmJhbm5lciB7XFxuICAgIGZvbnQtc2l6ZTogODRweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYnRuIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODQsIDEzMCwgMTY1KTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogMTMwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4uaW5wdXQge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuLmhlYWRlci1zbSB7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBNb2RhbCwgZ2FtZXN0YXJ0dXAgKi9cXG5cXG4ubW9kYWwge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNyk7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4ubW9kYWwtYm94IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogMjAwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcbi5zaGlwLWdyaWQge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgbWFyZ2luOmF1dG87XFxufVxcblxcbi5yb3RhdGUtYnRuIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB3aWR0aDogYXV0bztcXG59XFxuXFxuXFxuLyogR2FtZSBib2FyZCAqL1xcbi5nYW1lLXNwYWNlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucGxheWVyLWhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5nYW1lLWJvYXJkIHtcXG4gICAgLyogMTB4MTAgZ3JpZCAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi5nYW1lLWJvYXJkLXJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZ2FtZS1ib2FyZC10aWxlIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2OSwgMjQ1LCAyNTUpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmhpZ2hsaWdodGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuLmludmFsaWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5vY2N1cGllZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuLmdhbWUtYm9hcmQtdGlsZTpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTI0LCAxODAsIDE4NylcXG59XFxuXFxuLyogR2FtZSBwaWVjZXMgKi9cXG5cXG4uc2hpcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi8qIE1vYmlsZSB2aWV3ICovXFxuQG1lZGlhIChtYXgtd2lkdGg6ODAwcHgpIHtcXG4gICAgLmdhbWUtc3BhY2Uge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAuZ2FtZS1ib2FyZCB7XFxuICAgICAgICBtYXJnaW46IGF1dG87XFxuICAgIH1cXG5cXG4gICAgLm1vZGFsIHtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgYm90dG9tOiAwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNyk7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgb3ZlcmZsb3c6YXV0bztcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNyZWF0ZVNoaXAsIGNyZWF0ZUdhbWVCb2FyZCwgUGxheWVyIH0gZnJvbSAnLi9nYW1lX2Z1bmN0aW9ucyc7XG5cbmNvbnNvbGUubG9nKCdMb2FkaW5nIGdhbWUgc2NyaXB0cy4uLi4nKTtcblxuZnVuY3Rpb24gY3JlYXRlUGxheWVyKHBsYXllck5hbWUsIGNvbXB1dGVyKSB7XG4gIC8vIENyZWF0ZSBhIHBseWVyIHByb2ZpbGUgYWZ0ZXIgdXNlciBoYXMgZW50ZXJlZCB0aGVpciBuYW1lXG4gIC8vIENyZWF0ZXMgYSBsb2NhbCBzdG9yYWdlIHByb2ZpbGUgdG8ga2VlcCB0cmFjayBvZiBjdXJyZW50IGdhbWUsIGFuZCBwYXN0IGdhbWUgaGlzdG9yeVxuICBjb25zdCBwbGF5ZXJQcm9maWxlID0ge1xuICAgIG5hbWU6IHBsYXllck5hbWUsXG4gICAgZ2FtZU9iamVjdDogUGxheWVyKDEwLCBjb21wdXRlciksXG4gICAgZ2FtZVJlY29yZHM6IFtdLFxuICB9O1xuICBjb25zb2xlLmxvZyhwbGF5ZXJQcm9maWxlKTtcbiAgcmV0dXJuIHBsYXllclByb2ZpbGU7XG59XG5cbmZ1bmN0aW9uIGdldFBsYXllck5hbWUoKSB7XG4gIC8vIFdoZW4gcGxheWVyIGVudGVycyB0aGVpciBuYW1lLCBnZXQgdGhlIG5hbWUgZnJvbSB0aGUgaW5wdXRcbiAgLy8gdGhlbiBjcmVhdGUgYSBuZXcgcGxheWVyIG9iamVjdCBhbmQgY3JlYXRlIHRoZWlyIGdhbWUgYm9hcmRcbn1cbmZ1bmN0aW9uIHBsYWNlU2hpcChwbGF5ZXIsIHNoaXAsIHNoaXBMZW5ndGgsIGNvb3JkaW5hdGVzLCByb3RhdGVkKSB7XG4gIC8vIFBsYWNlIGEgc2luZ2xlIHNoaXAgb24gdGhlIGdhbWVib2FyZFxuICBwbGF5ZXIucGxheWVyQm9hcmQucGxhY2VTaGlwKHNoaXAsIHNoaXBMZW5ndGgsIGNvb3JkaW5hdGVzLCByb3RhdGVkKTtcbn1cblxuZnVuY3Rpb24gcGxhY2VDb21wdXRlclNoaXBzKGNvbXB1dGVyUGxheWVyKSB7XG4gIC8vIENyZWF0ZSBDYXJyaWVyKDUpLCBCUyg0KSwgc3VibWFyaW5lKDMpeDIsIGRlc3Ryb3llcigyKVxuICBjb25zdCBzaGlwcyA9IFs1LCA0LCAzLCAzLCAyXTtcbiAgY29uc3Qgcm90YXRpb25zID0gW3RydWUsIGZhbHNlXTtcbiAgY29uc3QgeyBwbGF5ZXJCb2FyZCB9ID0gY29tcHV0ZXJQbGF5ZXIuZ2FtZU9iamVjdDsgLy8gc2FtZSBhcyBwYiA9IENPLmdhbWVPYmplY3QucGxheWV0ckJvYXJkXG4gIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICBjb25zdCBuZXdTaGlwID0gY3JlYXRlU2hpcChzaGlwKTtcbiAgICBjb25zdCByb3RhdGlvbiA9IHJvdGF0aW9uc1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxKV07IC8vIHJhbmRvbWx5IGdlbi4gcm90YXRpb25cbiAgICBsZXQgcmFuZENvb3JkaW5hdGVzID0gZ2V0UmFuZG9tQ29vcmRpbmF0ZXMoKTtcbiAgICBsZXQgY291bnRlciA9IDA7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGNvdW50ZXIgKz0gMTtcbiAgICAgIGNvbnNvbGUubG9nKHJhbmRDb29yZGluYXRlcywgc2hpcCwgcm90YXRpb24sIGNvbXB1dGVyUGxheWVyLmdhbWVPYmplY3QpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1NUQVJUIE9GIFdISUxFJywgcmFuZENvb3JkaW5hdGVzLCByb3RhdGlvbik7XG4gICAgICAgIGlmIChwbGF5ZXJCb2FyZC5jaGVja1RpbGVzKHJhbmRDb29yZGluYXRlc1swXSwgcmFuZENvb3JkaW5hdGVzWzFdLCBzaGlwLCByb3RhdGlvbikpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnUGxhY2luZyBzaGlwJywgc2hpcCk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1JFVFVSTklORyBUUlVFPycpO1xuICAgICAgICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcChuZXdTaGlwLCBzaGlwLCByYW5kQ29vcmRpbmF0ZXMsIHJvdGF0aW9uKTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnU2hpcCBwbGFjZWQnLCBzaGlwKTtcbiAgICAgICAgICAvLyBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUicpO1xuICAgICAgICByYW5kQ29vcmRpbmF0ZXMgPSBnZXRSYW5kb21Db29yZGluYXRlcygpO1xuICAgICAgfVxuICAgICAgaWYgKGNvdW50ZXIgPiAxKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjb25kaXRpb24gbm90IG1ldCcpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRSYW5kb21Db29yZGluYXRlcygpIHtcbiAgLy8gR2VuZXJhdGUgcmFuZG9tIGNvb3JkaW5hdGVzXG4gIC8vIGdhbWVCb3JkLmNoZWNrVGlsZSBzaG91bGQgcnR1cm4gaWYgY29vcmRpbmF0ZXMgYXJlIHZhbGlkXG4gIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTApKTtcbiAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMCkpO1xuICByZXR1cm4gW3gsIHldO1xufVxuXG5mdW5jdGlvbiBnYW1lTG9vcChwbGF5ZXIxLCBwbGF5ZXIyKSB7XG4gIC8vIFdoZW4gdGhlIHVzZXIgZW50ZXJzIHRoZWlyIG5hbWUgYW5kIGhpdHMgc3VibWl0LCB0aGUgZ2FtZSBzdGFydHMuXG4gIGNvbnNvbGUubG9nKCdHYW1lIHN0YXJ0aW5nLCBwbGFjZSB5b3VyIHNoaXBzIScpO1xufVxuXG5leHBvcnQge1xuICBjcmVhdGVQbGF5ZXIsIGdldFBsYXllck5hbWUsIGdhbWVMb29wLCBwbGFjZVNoaXAsIHBsYWNlQ29tcHV0ZXJTaGlwcyxcbn07XG4iLCIvLyBGdW5jdGlvbnMgZm9yIEJhdHRsZXNoaXAgZ2FtZVxuXG4vLyBTaGlwc1xuY29uc3QgY3JlYXRlU2hpcCA9IChsZW5ndGgpID0+IHtcbiAgLy8gQ3JlYXRlIGFuIGFycmF5IHJlcHJlc2VudGluZyB0aGUgc2hpcCB3aXRoIGxlbmd0aCBwcm92aWRlZFxuICBjb25zdCBzaGlwc0RpY3QgPSB7XG4gICAgNTogJ2NhcnJpZXInLFxuICAgIDQ6ICdiYXR0bGVzaGlwJyxcbiAgICAzOiAnc3VibWFyaW5lJyxcbiAgICAyOiAnZGVzdHJveWVyJyxcbiAgfTtcblxuICBjb25zdCBzaGlwVHlwZSA9IHNoaXBzRGljdFtsZW5ndGhdO1xuICBjb25zdCBzaGlwU2VjdGlvbnMgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2VjdGlvbnMgPSB7fTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBzZWN0aW9uc1tpXSA9IFtmYWxzZV07XG4gICAgfVxuICAgIHJldHVybiBzZWN0aW9ucztcbiAgfTtcblxuICBjb25zdCBzZWN0aW9ucyA9IHNoaXBTZWN0aW9ucygpO1xuXG4gIGNvbnN0IGhpdCA9IChwb3NpdGlvbikgPT4ge1xuICAgIC8vIE1hcmsgdGhlIGdpdmVuIHBvc2l0aW9uIGFzICdoaXQnICh0cnVlKSBvbiB0aGUgc2hpcFxuICAgIHNlY3Rpb25zW3Bvc2l0aW9uXVswXSA9IHRydWU7XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgIGNvbnN0IHNlY3Rpb25LZXlzID0gT2JqZWN0LmtleXMoc2VjdGlvbnMpO1xuICAgIGlmIChzZWN0aW9uS2V5cy5ldmVyeSgoZWxlbWVudCkgPT4gc2VjdGlvbnNbZWxlbWVudF1bMF0gPT09IHRydWUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbGVuZ3RoLCBzZWN0aW9ucywgaGl0LCBpc1N1bmssIHNoaXBUeXBlLFxuICB9O1xufTtcblxuLy8gR2FtZSBCb2FyZFxuY29uc3QgY3JlYXRlR2FtZUJvYXJkID0gKHNpemUpID0+IHtcbiAgLy8gQ3JlYXRlIGEgZ2FtZWJvYXJkIG9mIHNpemUgeCBzaXplICgyZCBhcnJheSlcbiAgY29uc3QgYWRkQm9hcmRUaWxlcyA9ICgpID0+IHtcbiAgICBjb25zdCBuZXdCb2FyZCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICBjb25zdCByb3cgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgIHJvdy5wdXNoKGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIG5ld0JvYXJkLnB1c2gocm93KTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0JvYXJkO1xuICB9O1xuXG4gIGNvbnN0IHRpbGVzID0gYWRkQm9hcmRUaWxlcygpO1xuICBjb25zdCBnYW1lUGllY2VzID0gW107XG5cbiAgLy8gY29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIHNoaXBMZW5ndGgsIGNvb3JkaW5hdGVzKSA9PiB7XG4gIC8vICAgLy8gVXBkYXRlcyBzdGF0ZSBvZiBnYW1lYm9hcmQgd2l0aCBuZXcgc2hpcFxuICAvLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29vcmRpbmF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgLy8gICAgIGNvbnN0IHggPSBjb29yZGluYXRlc1tpXVswXTtcbiAgLy8gICAgIGNvbnN0IHkgPSBjb29yZGluYXRlc1tpXVsxXTtcblxuICAvLyAgICAgaWYgKHRpbGVzW3hdW3ldID09PSB0cnVlKSB7IC8vIENhbm5vdCBwbGFjZSBzaGlwIG9uIHRpbGUgYWxyZWFkeSBvY2N1cGllZFxuICAvLyAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nvb3JkaW5hdGVzIGFscmVhZHkgb2NjdXBpZWQnKTtcbiAgLy8gICAgIH1cbiAgLy8gICAgIGlmICgoeCA8IDAgfHwgeCA+IHNpemUpIHx8ICh5IDwgMCB8fCB5ID4gc2l6ZSkpIHsgLy8gQ29vcmRzIGNhbm5vdCBleGNlZWQgYm9hcmQgc2l6ZVxuICAvLyAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY29vcmRpbmF0ZXMnKTtcbiAgLy8gICAgIH1cbiAgLy8gICAgIHNoaXAuc2VjdGlvbnNbaV0ucHVzaChbeCwgeV0pO1xuICAvLyAgICAgdGlsZXNbeF1beV0gPSB0cnVlO1xuICAvLyAgIH1cbiAgLy8gICBnYW1lUGllY2VzLnB1c2goc2hpcCk7XG4gIC8vIH07XG4gIGNvbnN0IGNoZWNrVGlsZSA9ICh4LCB5KSA9PiB7XG4gICAgLy8gY2hlY2tzIHRpbGUoeCwgeSkgYXMgYSB2YWxpZCBzcGFjZSwgcmV0dXJucyBib29sZWFuXG4gICAgLy8gY29uc29sZS5sb2coJ0NIRUNLVElMRScsIHgsIHkpO1xuICAgIGlmICh0aWxlc1t4XVt5XSA9PT0gdHJ1ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb29yZGluYXRlcyBhbHJlYWR5IG9jY3VwaWVkJyk7XG4gICAgfVxuICAgIGlmICgoeCA8IDAgfHwgeCA+IHNpemUpIHx8ICh5IDwgMCB8fCB5ID4gc2l6ZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjb29yZGluYXRlcycpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBjaGVja1RpbGVzID0gKHgsIHksIHNoaXBMZW5ndGgsIHJvdGF0aW9uKSA9PiB7XG4gICAgLy8geCwgeSBhcyBzdGFydGluZyBwb2ludHMsIGNoZWNrIGFsbCB0aWxlcyBzaGlwXG4gICAgLy8gd291bGQgdGFrZSB1cFxuICAgIGNvbnNvbGUubG9nKCdDaGVja2luZyB0aWxlcy4uLicpO1xuICAgIGlmIChyb3RhdGlvbiA9PT0gdHJ1ZSkge1xuICAgICAgZm9yIChsZXQgaSA9IHg7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRpbGVzW2ldW3ldID09PSB0cnVlKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb29yZGluYXRlcyBhbHJlYWR5IG9jY3VwaWVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChpIDwgMCB8fCBpID4gc2l6ZSkgfHwgKHkgPCAwIHx8IHkgPiBzaXplKSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjb29yZGluYXRlcycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSB5OyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0aWxlc1t4XVtpXSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY29vcmRpbmF0ZXMgYWxyZWFkeSBvY2N1cGllZCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoaSA8IDAgfHwgaSA+IHNpemUpIHx8ICh4IDwgMCB8fCB4ID4gc2l6ZWUpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNvb3JkaW5hdGVzJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgLy8gY29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIHNoaXBMZW5ndGgsIGNvb3JkaW5hdGVzLCByb3RhdGVkID0gZmFsc2UpID0+IHtcbiAgLy8gICAvLyBVcGRhdGUgc3RhdGUgb2YgZ2FtZWJhb3JkIHdpdGggbmV3IHNoaXAgdXNpbmcgb25seSBvbmUgY29vcmRpbmF0ZVxuICAvLyAgIGlmIChyb3RhdGVkKSB7XG4gIC8vICAgICAvLyBBbG9uZyB5IGF4aXNcbiAgLy8gICAgIGNvbnN0IHkgPSBjb29yZGluYXRlc1swXTtcbiAgLy8gICAgIGNvbnN0IHggPSBjb29yZGluYXRlc1sxXTtcbiAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gIC8vICAgICAgIGlmIChjaGVja1RpbGUoeSArIGksIHgpKSB7XG4gIC8vICAgICAgICAgLy8gVGlsZXMgd2lsbCBiZSBwbGFjZWQgYXMgbG9uZyBhcyBUSEFUIHRpbGUgaXMgdmFsaWQsXG4gIC8vICAgICAgICAgLy8gY2FuIHJlc3VsdCBpbiBwYXJ0aWFsIHNoaXAgcGxhY2VtZW50c1xuICAvLyAgICAgICAgIHNoaXAuc2VjdGlvbnNbaV0ucHVzaChbeSArIGksIHhdKTtcbiAgLy8gICAgICAgICB0aWxlc1t5ICsgaV1beF0gPSB0cnVlO1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9XG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgIC8vIEFsb25nIHggYXhpc1xuICAvLyAgICAgY29uc3QgeCA9IGNvb3JkaW5hdGVzWzFdO1xuICAvLyAgICAgY29uc3QgeSA9IGNvb3JkaW5hdGVzWzBdO1xuICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgLy8gICAgICAgaWYgKGNoZWNrVGlsZSh5LCB4ICsgaSkpIHtcbiAgLy8gICAgICAgICBzaGlwLnNlY3Rpb25zW2ldLnB1c2goW3ksIHggKyBpXSk7XG4gIC8vICAgICAgICAgdGlsZXNbeV1beCArIGldID0gdHJ1ZTtcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gICBnYW1lUGllY2VzLnB1c2goc2hpcCk7XG4gIC8vIH07XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIHNoaXBMZW5ndGgsIGNvb3JkaW5hdGVzLCByb3RhdGVkID0gZmFsc2UpID0+IHtcbiAgICAvLyBVcGRhdGUgc3RhdGUgb2YgZ2FtZWJhb3JkIHdpdGggbmV3IHNoaXAgdXNpbmcgb25seSBvbmUgY29vcmRpbmF0ZVxuICAgIGlmIChyb3RhdGVkKSB7XG4gICAgICBjb25zdCB5ID0gY29vcmRpbmF0ZXNbMF07XG4gICAgICBjb25zdCB4ID0gY29vcmRpbmF0ZXNbMV07XG4gICAgICBpZiAoY2hlY2tUaWxlcyh5LCB4LCBzaGlwTGVuZ3RoLCByb3RhdGVkKSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgIHNoaXAuc2VjdGlvbnNbaV0ucHVzaCh5ICsgaSwgeCk7XG4gICAgICAgICAgdGlsZXNbeSArIGldW3hdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB4ID0gY29vcmRpbmF0ZXNbMV07XG4gICAgICBjb25zdCB5ID0gY29vcmRpbmF0ZXNbMF07XG4gICAgICBpZiAoY2hlY2tUaWxlcyh5LCB4LCBzaGlwTGVuZ3RoLCByb3RhdGVkKSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgIHNoaXAuc2VjdGlvbnNbaV0ucHVzaCh5LCB4ICsgaSk7XG4gICAgICAgICAgdGlsZXNbeV1beCArIGldID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBnYW1lUGllY2VzLnB1c2goc2hpcCk7XG4gIH07XG5cbiAgY29uc3QgcmVjaWV2ZUF0dGFjayA9IChjb29yZGluYXRlcykgPT4ge1xuICAgIC8vIENoZWNrIGNvb3JkaW5hdGVzIGZvciBzaGlwLCBpZiBhIGhpdCwgbWFyayBwb3NpaXRpb24gb24gc2hpcCBhcyBoaXRcbiAgICAvLyBlbHNlIG1hcmsgdGlsZSBhcyBhIG1pc3MsIHRpbGUgc2hvdWxkIGdvIGZyb20gZmFsc2UgPT4gJ21pc3MnXG4gICAgY29uc3QgeCA9IGNvb3JkaW5hdGVzWzBdO1xuICAgIGNvbnN0IHkgPSBjb29yZGluYXRlc1sxXTtcbiAgICBpZiAoKHggPCAwIHx8IHggPiBzaXplKSB8fCAoeSA8IDAgfHwgeSA+IHNpemUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0F0dGFjayBtdXN0IHRhcmdldCB3aXRoaW4gYm9hcmQnKTtcbiAgICB9XG4gICAgaWYgKHRpbGVzW3hdW3ldID09PSAnaGl0JyB8fCB0aWxlc1t4XVt5XSA9PT0gJ21pc3MnKSB7IC8vIE9jY3VwaWVkIHNwYWNlIGlzIG1hcmtlZCB0cnVlIG9uIGJvYXJkXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RpbGUgaGFzIGFscmVhZHkgYmVlbiBhdHRhY2tlZCcpO1xuICAgIH1cblxuICAgIGlmICh0aWxlc1t4XVt5XSA9PT0gdHJ1ZSkge1xuICAgICAgdGlsZXNbeF1beV0gPSAnaGl0JztcbiAgICAgIC8vIEhhdmUgY29vcmRpbmF0ZXMsIG5lZWQgdG8gbWF0Y2ggY29vcmRpbmF0ZXMgdG8gc2hpcCBwb3NpdGlvblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lUGllY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHNoaXAgPSBnYW1lUGllY2VzW2ldO1xuICAgICAgICBjb25zdCBzZWN0aW9uS2V5cyA9IE9iamVjdC5rZXlzKHNoaXAuc2VjdGlvbnMpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlY3Rpb25LZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3Qgc3RyaW5nS2V5ID0gSlNPTi5zdHJpbmdpZnkoc2hpcC5zZWN0aW9uc1tzZWN0aW9uS2V5c1tpXV1bMV0pO1xuICAgICAgICAgIGlmIChzdHJpbmdLZXkgPT09IEpTT04uc3RyaW5naWZ5KFt4LCB5XSkpIHtcbiAgICAgICAgICAgIHNoaXAuaGl0KHNlY3Rpb25LZXlzW2ldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGlsZXNbeF1beV0gPSAnbWlzcyc7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlTaGlwcyA9ICgpID0+IHtcbiAgICBjb25zdCBzaGlwc1N0YXR1cyA9IHt9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZVBpZWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgc2hpcHNTdGF0dXNbZ2FtZVBpZWNlc1tpXS5zaGlwVHlwZV0gPSBnYW1lUGllY2VzW2ldLmlzU3VuaygpO1xuICAgIH1cbiAgICByZXR1cm4gc2hpcHNTdGF0dXM7XG4gIH07XG5cbiAgY29uc3QgZ2FtZU92ZXIgPSAoKSA9PiB7XG4gICAgLy8gQ2hlY2sgdGhhdCBhbGwgc2hpcHMgaGF2ZSBiZWVuIHN1bmssIGVuZCBnYW1lIGlmIHRydWVcbiAgICBpZiAoZ2FtZVBpZWNlcy5ldmVyeSgoc2hpcCkgPT4gc2hpcC5pc1N1bmsoKSA9PT0gdHJ1ZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICB0aWxlcywgZ2FtZVBpZWNlcywgcGxhY2VTaGlwLCByZWNpZXZlQXR0YWNrLCBnYW1lT3ZlciwgZGlzcGxheVNoaXBzLCBjaGVja1RpbGUsXG4gIH07XG59O1xuLy8gUGxheWVyXG5cbmNvbnN0IFBsYXllciA9IChib2FyZFNpemUsIGNvbXB1dGVyID0gZmFsc2UpID0+IHtcbiAgY29uc3QgY3JlYXRlQm9hcmQgPSAoKSA9PiB7XG4gICAgLy8gc2V0IHRydWUgZm9yIGh1bWFuIHBsYXllclxuICAgIGNvbnN0IHBsYXllckJvYXJkID0gY3JlYXRlR2FtZUJvYXJkKGJvYXJkU2l6ZSk7XG4gICAgcmV0dXJuIHBsYXllckJvYXJkO1xuICB9O1xuXG4gIGNvbnN0IG1ha2VBdHRhY2sgPSAob3Bwb25lbnQsIGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgb3Bwb25lbnQucGxheWVyQm9hcmQucmVjaWV2ZUF0dGFjayhjb29yZGluYXRlcyk7XG4gIH07XG5cbiAgY29uc3QgY29tcHV0ZXJBdHRhY2sgPSAob3Bwb25lbnQpID0+IHtcbiAgICAvLyBDb21wdXRlciBzaG91bGQgc2hvdWxkIG1ha2UgYSByYW5kb20sIHZhbGlkIGF0dGFja1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGJvYXJkU2l6ZSkpO1xuICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChib2FyZFNpemUpKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIG1ha2VBdHRhY2sob3Bwb25lbnQsIFt4LCB5XSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBpc0NvbXB1dGVyID0gKCkgPT4gY29tcHV0ZXI7XG5cbiAgY29uc3QgcGxheWVyQm9hcmQgPSBjcmVhdGVCb2FyZChib2FyZFNpemUpO1xuXG4gIGNvbnN0IGNoZWNrVmljdG9yeSA9ICgpID0+IHBsYXllckJvYXJkLmdhbWVPdmVyKCk7XG4gIHJldHVybiB7XG4gICAgcGxheWVyQm9hcmQsIG1ha2VBdHRhY2ssIGNvbXB1dGVyQXR0YWNrLCBpc0NvbXB1dGVyLCBjaGVja1ZpY3RvcnksXG4gIH07XG59O1xuXG5jb25zdCBwYXJzZVN0cmluZ0FycmF5ID0gKHN0cmluZ0FycmF5KSA9PiB7XG4gIGNvbnN0IHJhd0FycmF5ID0gc3RyaW5nQXJyYXkuc3BsaXQoJywnKTtcbiAgY29uc3QgcmVhbCA9IFtdO1xuICByYXdBcnJheS5mb3JFYWNoKChudW1iZXIpID0+IHtcbiAgICByZWFsLnB1c2gocGFyc2VJbnQobnVtYmVyKSk7XG4gIH0pO1xuICByZXR1cm4gcmVhbDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGVTaGlwLCBjcmVhdGVHYW1lQm9hcmQsIFBsYXllciwgcGFyc2VTdHJpbmdBcnJheSxcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlU2hpcCwgY3JlYXRlR2FtZUJvYXJkLCBQbGF5ZXIgfSBmcm9tICcuL2dhbWVfZnVuY3Rpb25zJztcbmltcG9ydCB7XG4gIGNyZWF0ZVBsYXllciwgZ2V0UGxheWVyTmFtZSwgZ2FtZUxvb3AsIHBsYWNlU2hpcCwgcGxhY2VDb21wdXRlclNoaXBzLFxufSBmcm9tICcuL2dhbWUuanMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmNvbnNvbGUubG9nKCdMb2FkaW5nIHNjcmlwdHMuLi4uJyk7XG4vLyBjb25zdCBzdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZTtcblxuZnVuY3Rpb24gbG9hZFN0b3JhZ2UoKSB7XG4gIGNvbnN0IHN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xuICByZXR1cm4gc3RvcmFnZTtcbn1cblxuZnVuY3Rpb24gbG9hZFBhZ2UoKSB7XG4gIC8vIHBhc3NcbiAgY29uc3Qgc3RvcmFnZSA9IGxvYWRTdG9yYWdlKCk7XG4gIGNyZWF0ZU91dGxpbmUoKTtcbiAgY29uc3QgcGxheWVyMSA9IFBsYXllcigxMCk7IC8vIERvbid0IGNyZWF0ZSB1c2VyIHBsYXllciBoZXJlXG4gIGNvbnN0IGNvbXB1dGVyUGxheWVyID0gUGxheWVyKDEwLCB0cnVlKTsgLy8gUHJvYmFibHkgb2sgdG8gY3JlYXRlIGNvbXB1dGVyLCBmb3Igbm93XG4gIC8vIGNvbnNvbGUubG9nKCdQTEFZRVIgREVFVFMnLCBwbGF5ZXIxKTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IGJhbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYW5uZXInKTtcbiAgICBiYW5uZXIuaW5uZXJUZXh0ID0gJ0JhdHRsZXNoaXAnO1xuICAgIC8vIGNvbnN0IGdhbWVTcGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLXNwYWNlJyk7XG4gICAgLy8gcG9wdWxhdGVHYW1lU3BhY2UoZ2FtZVNwYWNlLCBbcGxheWVyMSwgY29tcHV0ZXJQbGF5ZXJdKTtcbiAgICAvLyBtb3VzZUhvdmVyKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVPdXRsaW5lKCkge1xuICAvLyBza2VsZXRvbiBvdXRsaW5lIGFuZCBjb250YWluZXJzIGZvciB0aGUgcGFnZVxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgYmFubmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGdhbWVTcGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBwbGF5ZXJEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGFpbmVyJyk7XG4gIGJhbm5lckRpdi5jbGFzc0xpc3QuYWRkKCdiYW5uZXInKTtcbiAgZ2FtZVNwYWNlLmNsYXNzTGlzdC5hZGQoJ2dhbWUtc3BhY2UnKTtcbiAgcGxheWVyRGV0YWlscy5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItZGV0YWlscycpO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChiYW5uZXJEaXYpO1xuICAvLyBjb250YWluZXIuYXBwZW5kQ2hpbGQocm90YXRlQnRuKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdhbWVTcGFjZSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJEZXRhaWxzKTtcbiAgY29uc3QgbW9kYWwgPSBhZGRNb2RhbCgpO1xuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZUdhbWVTcGFjZShnYW1lU3BhY2UsIHBsYXllcnMpIHtcbiAgcGxheWVycy5mb3JFYWNoKChwbGF5ZXIpID0+IHtcbiAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IGNyZWF0ZUJvYXJkKHBsYXllcik7XG4gICAgZ2FtZVNwYWNlLmFwcGVuZENoaWxkKHBsYXllckJvYXJkKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJvYXJkKHBsYXllcikge1xuICBjb25zdCBnYW1lQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgcGxheWVyQm9hcmRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIC8vIGNvbnN0IHJvdGF0ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdyb3RhdGVCdG4nKVswXTtcbiAgZ2FtZUJvYXJkLmNsYXNzTGlzdC5hZGQoJ2dhbWUtYm9hcmQnKTtcbiAgcGxheWVyQm9hcmRIZWFkZXIuY2xhc3NMaXN0LmFkZCgncGxheWVyLWhlYWRlcicpO1xuICBwbGF5ZXJCb2FyZEhlYWRlci5pbm5lclRleHQgPSBwbGF5ZXJOYW1lKHBsYXllcik7XG4gIGdhbWVCb2FyZC5hcHBlbmRDaGlsZChwbGF5ZXJCb2FyZEhlYWRlcik7XG5cbiAgbGV0IGJvYXJkUm93ID0gMDtcbiAgcGxheWVyLmdhbWVPYmplY3QucGxheWVyQm9hcmQudGlsZXMuZm9yRWFjaCgocm93KSA9PiB7IC8vIGhvcml6b250YWwgcm93IDAtOVxuICAgIGNvbnN0IGdhbWVCb2FyZFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBib2FyZENvbHVtbiA9IDA7XG4gICAgZ2FtZUJvYXJkUm93LmNsYXNzTGlzdC5hZGQoJ2dhbWUtYm9hcmQtcm93Jyk7XG4gICAgcm93LmZvckVhY2goKCkgPT4geyAvLyBob3Jpem9udGFsIGNvbHVtbiAwLTlcbiAgICAgIGNvbnN0IGJvYXJkVGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgYm9hcmRUaWxlLmNsYXNzTGlzdC5hZGQoJ2dhbWUtYm9hcmQtdGlsZScpO1xuICAgICAgaWYgKHBsYXllci5nYW1lT2JqZWN0LmlzQ29tcHR1ZXIgPT09IHRydWUpIHtcbiAgICAgICAgYm9hcmRUaWxlLnNldEF0dHJpYnV0ZSgnZGF0YS10aWxlJywgW2JvYXJkUm93LCBib2FyZENvbHVtbl0pO1xuICAgICAgICBib2FyZFRpbGUudmFsdWUgPSBwbGF5ZXIuZ2FtZU9iamVjdC5wbGF5ZXJCb2FyZC50aWxlc1soYm9hcmRSb3csIGJvYXJkQ29sdW1uKV07XG4gICAgICAgIGJvYXJkVGlsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGlsZS12YWx1ZScsIHBsYXllci5nYW1lT2JqZWN0LnBsYXllckJvYXJkLnRpbGVzW2JvYXJkUm93XVtib2FyZENvbHVtbl0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYm9hcmRUaWxlLnNldEF0dHJpYnV0ZShgZGF0YS10aWxlJHtwbGF5ZXIubmFtZX1gLCBbYm9hcmRSb3csIGJvYXJkQ29sdW1uXSk7XG4gICAgICAgIGJvYXJkVGlsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGlsZS12YWx1ZScsIHBsYXllci5nYW1lT2JqZWN0LnBsYXllckJvYXJkLnRpbGVzW2JvYXJkUm93XVtib2FyZENvbHVtbl0pO1xuICAgICAgfVxuICAgICAgYm9hcmRUaWxlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50SUQgPSBwYXJzZVN0cmluZ0FycmF5KGV2ZW50LnRhcmdldC5kYXRhc2V0W2B0aWxlJHtwbGF5ZXIubmFtZX1gXSk7XG4gICAgICAgIC8vIGNvbnN0IHJvdGF0aW9uID0gcm90YXRlU2hpcChyb3RhdGVCdG4pO1xuICAgICAgICBjb25zdCByb3RhdGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgncm90YXRlQnRuJylbMF07XG4gICAgICAgIGhpZ2hsaWdodFNoaXAoZWxlbWVudElELCA0LCBwbGF5ZXIsIHJvdGF0ZUJ0bi52YWx1ZSk7IC8vIFNob3VsZCBub3cgYmUgY29vcmRpbmF0ZXMgWzAsMF0gZm9ybWF0XG4gICAgICB9KTtcbiAgICAgIGlmIChwbGF5ZXIuZ2FtZU9iamVjdC5wbGF5ZXJCb2FyZC50aWxlc1tib2FyZFJvd11bYm9hcmRDb2x1bW5dID09PSB0cnVlKSB7XG4gICAgICAgIGJvYXJkVGlsZS5jbGFzc0xpc3QuYWRkKCdvY2N1cGllZCcpO1xuICAgICAgfVxuICAgICAgZ2FtZUJvYXJkUm93LmFwcGVuZENoaWxkKGJvYXJkVGlsZSk7XG4gICAgICBib2FyZENvbHVtbisrO1xuICAgIH0pO1xuICAgIGdhbWVCb2FyZC5hcHBlbmRDaGlsZChnYW1lQm9hcmRSb3cpO1xuICAgIGJvYXJkUm93Kys7XG4gIH0pO1xuICByZXR1cm4gZ2FtZUJvYXJkO1xufVxuXG5mdW5jdGlvbiByb3RhdGVCdXR0b24oKSB7XG4gIGNvbnN0IHJvdGF0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICByb3RhdGVCdG4uY2xhc3NMaXN0LmFkZCgnYnRuJyk7XG4gIHJvdGF0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdyb3RhdGUtYnRuJyk7XG4gIHJvdGF0ZUJ0bi5uYW1lID0gJ3JvdGF0ZUJ0bic7XG4gIHJvdGF0ZUJ0bi5pbm5lclRleHQgPSAnUm90YXRlIHNoaXAnO1xuICByb3RhdGVCdG4udmFsdWUgPSB0cnVlO1xuICByb3RhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKHJvdGF0ZUJ0bi52YWx1ZSA9PT0gJ3RydWUnKSB7XG4gICAgICByb3RhdGVCdG4udmFsdWUgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcm90YXRlQnRuLnZhbHVlID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcm90YXRlQnRuO1xufVxuY29uc3QgcGFyc2VTdHJpbmdBcnJheSA9IChzdHJpbmdBcnJheSkgPT4ge1xuICBjb25zdCByYXdBcnJheSA9IHN0cmluZ0FycmF5LnNwbGl0KCcsJyk7XG4gIGNvbnN0IHJlYWwgPSBbXTtcbiAgcmF3QXJyYXkuZm9yRWFjaCgobnVtYmVyKSA9PiB7XG4gICAgcmVhbC5wdXNoKHBhcnNlSW50KG51bWJlcikpO1xuICB9KTtcbiAgcmV0dXJuIHJlYWw7XG59O1xuXG5mdW5jdGlvbiBhZGRQbGF5ZXJEZXRhaWxzKCkge1xuICAvLyBQbGF5ZXIgZGV0YWlscyAtPiBMZWdlbmQgb2YgcGxheWVyIHNoaXAgYW5kIGNvbXB1dGVyIHNoaXAgc3RhdHVzXG59XG5cbmZ1bmN0aW9uIGFkZE1vZGFsKCkge1xuICAvLyBNb2RhbCBmb3IgZ2FtZSBzZXR1cCwgYXNrIHBsYXllciBuYW1lLCBhbmQgcGxhY2Ugc2hpcHMgKHBsYWNlIHNoaXBzIG9uIG1haW4gZ2FtZSBib2FyZClcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnKTtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQoYWRkTmFtZVByb21wdChtb2RhbCkpO1xuICByZXR1cm4gbW9kYWw7XG59XG5cbmZ1bmN0aW9uIHBsYWNlU2hpcHNPbkJvYXJkKGdhbWVCb2FyZCkge1xuICAvLyBQbGF5ZXIgcGxhY2VzIHNoaXBzIG9uIHRoZWlyIGdhbWUgYm9hcmRcbn1cblxuZnVuY3Rpb24gYWRkTmFtZVByb21wdChtb2RhbCkge1xuICAvLyBQcm9tcHQgdGhlIHBsYXllciBmb3IgdGhlaXIgbmFtZVxuICBjb25zdCBuYW1lUHJvbXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgaGVhZGVyLmlubmVyVGV4dCA9ICdCYXR0bGVzdGF0aW9ucyEhJztcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1zbScpO1xuICBuYW1lSW5wdXQucGxhY2Vob2xkZXIgPSAnUGxlYXNlIGVudGVyIHlvdXIgbmFtZS4nO1xuICBzdWJtaXRCdG4uaW5uZXJUZXh0ID0gJ1N1Ym1pdCc7XG5cbiAgbmFtZVByb21wdC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1ib3gnKTtcbiAgbmFtZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2lucHV0Jyk7XG4gIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcblxuICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgcGxheWVyID0gY3JlYXRlUGxheWVyKG5hbWVJbnB1dC52YWx1ZSwgZmFsc2UpO1xuICAgIGNvbnN0IGNvbXB1dGVyUGxheWVyID0gY3JlYXRlUGxheWVyKCdDb21wdXRlcicsIHRydWUpO1xuICAgIHBsYWNlQ29tcHV0ZXJTaGlwcyhjb21wdXRlclBsYXllcik7XG4gICAgY29uc3QgZ2FtZVNwYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtc3BhY2UnKTtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIC8vIG5hbWVQcm9tcHQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAvLyBtb2RhbC5hcHBlbmRDaGlsZChwbGFjZVNoaXBNZW51KHBsYXllcikpO1xuICAgIC8vIGdhbWVMb29wKHBsYXllciwgY29tcHV0ZXJQbGF5ZXIpO1xuICAgIHBvcHVsYXRlR2FtZVNwYWNlKGdhbWVTcGFjZSwgW3BsYXllciwgY29tcHV0ZXJQbGF5ZXJdKTtcbiAgfSk7XG4gIG5hbWVQcm9tcHQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgbmFtZVByb21wdC5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xuICBuYW1lUHJvbXB0LmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG4gIHJldHVybiBuYW1lUHJvbXB0O1xufVxuXG5mdW5jdGlvbiBwbGFjZVNoaXBNZW51KHBsYXllcikge1xuICAvLyBNb2RhbCBtZW51IGZvciBwbGFjaW5nIHNoaXBzIG9uIHRoZSBwYWx5ZXJzIGdyaWQgYXQgdGhlIHN0YXJ0IG9mIHRoZSBnYW1lLlxuICAvLyBBdHRhY2ggcHJvbXB0cyBmb3IgYWRkaW5nIHNoaXBzXG4gIGNvbnN0IHNoaXBHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNoaXBHcmlkLmNsYXNzTGlzdC5hZGQoJ3NoaXAtZ3JpZCcpO1xuICBzaGlwR3JpZC5hcHBlbmRDaGlsZChyb3RhdGVCdXR0b24oKSk7XG4gIHNoaXBHcmlkLmFwcGVuZENoaWxkKGNyZWF0ZUJvYXJkKHBsYXllcikpO1xuXG4gIHJldHVybiBzaGlwR3JpZDtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVNoaXBzKCkge1xuICAvLyBXaGVuIHNoaXBzIGFyZSBwbGFjZWQsIHRoZWlyIHNoYXBlcyBzaG91bGQgcGVyc2lzdCBvbiB0aGUgZ2FtZWJvYXJkXG5cbn1cbmZ1bmN0aW9uIHBsYXllck5hbWUocGxheWVyKSB7XG4gIGlmIChwbGF5ZXIuZ2FtZU9iamVjdC5pc0NvbXB1dGVyKCkgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIHBsYXllci5uYW1lO1xuICB9XG4gIHJldHVybiAnQ29tcHV0ZXInO1xufVxuXG5mdW5jdGlvbiBoaWdobGlnaHRTaGlwKGVsZW1lbnRJRCwgc2hpcExlbmd0aCwgcGxheWVyLCByb3RhdGVkKSB7XG4gIC8vIEhpZ2hsaWdodHMgYSAnc2hpcCcgcGxhY2VtZW50IHdoZW4gbW92aW5nIHRoZSBjdXJzb3Igb3ZlciB0aGUgZ2FtZWJvYXJkXG4gIGlmIChyb3RhdGVkID09PSAndHJ1ZScpIHtcbiAgICBpbmNyZW1lbnRZKGVsZW1lbnRJRCwgc2hpcExlbmd0aCwgcGxheWVyKTtcbiAgfSBlbHNlIHtcbiAgICBpbmNyZW1lbnRYKGVsZW1lbnRJRCwgc2hpcExlbmd0aCwgcGxheWVyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbmNyZW1lbnRZKGVsZW1lbnRJRCwgc2hpcExlbmd0aCwgcGxheWVyKSB7XG4gIC8vIEhlbHBlciBmb3IgaGlnaGxpZ2hTaGlwKClcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGlsZSR7cGxheWVyLm5hbWV9PScke1tlbGVtZW50SURbMF0gKyBpLCBlbGVtZW50SURbMV1dfSddYCk7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0ZWQnKTtcbiAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCByZW1vdmVTcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10aWxlJHtwbGF5ZXIubmFtZX09JyR7W2VsZW1lbnRJRFswXSArIGksIGVsZW1lbnRJRFsxXV19J11gKTtcbiAgICAgICAgICByZW1vdmVTcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0ZWQnKTtcbiAgICAgICAgICByZW1vdmVTcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRpbGUke3BsYXllci5uYW1lfT0nJHtbZWxlbWVudElEWzBdICsgaSwgZWxlbWVudElEWzFdXX0nXWApOyAvLyBhZGp1c3Qgb24gdmVydGljYWwgYXhpc1xuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnaW52YWxpZCcpO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coJ1RoZXJlIGlzIG5vIHNxdWFyZScpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbmNyZW1lbnRYKGVsZW1lbnRJRCwgc2hpcExlbmd0aCwgcGxheWVyKSB7XG4gIC8vIEhlbHBlciBmb3IgaGlnaGxpZ2hTaGlwKClcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGlsZSR7cGxheWVyLm5hbWV9PScke1tlbGVtZW50SURbMF0sIGVsZW1lbnRJRFsxXSArIGldfSddYCk7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0ZWQnKTtcbiAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCByZW1vdmVTcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10aWxlJHtwbGF5ZXIubmFtZX09JyR7W2VsZW1lbnRJRFswXSwgZWxlbWVudElEWzFdICsgaV19J11gKTtcbiAgICAgICAgICByZW1vdmVTcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0ZWQnKTtcbiAgICAgICAgICByZW1vdmVTcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRpbGUke3BsYXllci5uYW1lfT0nJHtbZWxlbWVudElEWzBdLCBlbGVtZW50SURbMV0gKyBpXX0nXWApOyAvLyBhZGp1c3Qgb24gdmVydGljYWwgYXhpc1xuICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnaW52YWxpZCcpO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coJ1RoZXJlIGlzIG5vIHNxdWFyZScpO1xuICAgIH1cbiAgfVxufVxubG9hZFBhZ2UoKTtcblxuZnVuY3Rpb24gdGVzdEVsZW1lbnRzKCkge1xuICBjb25zdCBwbGF5ZXIxID0gUGxheWVyKDEwKTtcbiAgY29uc3QgcGxheWVyMiA9IFBsYXllcigxMCwgdHJ1ZSk7XG4gIC8vIEJhbm5lclxuXG4gIC8vIERpc3BsYXkgYm90aCBwbGF5ZXIgYm9hcmRzXG4gIC8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlR2FtZVNwYWNlKFtwbGF5ZXIxLCBwbGF5ZXIyXSkpO1xuXG4gIC8vIFBsYXllckJvYXJkXG4gIC8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlQm9hcmQocGxheWVyKSk7XG59XG5cbnRlc3RFbGVtZW50cygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9