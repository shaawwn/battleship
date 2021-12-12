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
___CSS_LOADER_EXPORT___.push([module.id, "/* General */\nhtml, body {\n    background-color: rgb(84, 130, 165);\n    color: rgb(24, 38, 58);\n    margin: 0px;\n    height: 100%;\n    width: 100%;\n}\n.banner {\n    font-size: 84px;\n    text-align: center;\n}\n\n.btn {\n    border-radius: 5px;\n    background-color: rgb(84, 130, 165);\n    color: white;\n    width: 130px;\n    height: 40px;\n    margin-top: 20px;\n    font-size: 24px;\n}\n\n.input {\n    height: 30px;\n    width: 80%;\n    font-size: 24px;\n}\n\n.header-sm {\n    font-size: 36px;\n    color: white;\n}\n\n/* Modal, gamestartup */\n\n.modal {\n    position: fixed;\n    top: 0px;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0,0,0,0.7);\n    display: none;\n    overflow: auto;\n}\n\n.modal-box {\n    display: flex;\n    flex-direction: column;\n    width: 400px;\n    height: auto;\n    background-color: grey;\n    padding: 10px;\n    margin: auto;\n    margin-top: 200px;\n    align-items: center;\n}\n\n\n.ship-grid {\n    display:flex;\n    flex-direction: column;\n    justify-content:center;\n    background-color: grey;\n    padding: 10px;\n    width: 600px;\n    margin:auto;\n}\n\n.ship-grid > .header-sm {\n    margin: auto;\n}\n\n.rotate-btn {\n    margin: auto;\n    width: auto;\n}\n\n\n/* Game board */\n.game-space {\n    display: flex;\n    width: 100%;\n    justify-content: center;\n}\n\n.player-header {\n    font-size: 48px;\n    text-align:center;\n    margin-bottom: 10px;\n}\n.game-board {\n    /* 10x10 grid */\n    display: flex;\n    flex-direction: column;\n    margin: 20px;\n}\n\n.game-board-row {\n    display: flex;\n    width: 100%;\n}\n\n.game-board-tile {\n    width: 50px;\n    height: 50px;\n    background-color: rgb(169, 245, 255);\n    border: 2px solid black;\n}\n\n.highlighted {\n    background-color: blue;\n}\n\n.invalid {\n    background-color: red;\n}\n\n.occupied {\n    background-color: greenyellow;\n}\n\n.hit-ship {\n    background-color: red;\n    animation-name: hit;\n    animation-duration: 1.5s;\n}\n\n@keyframes hit {\n    from {background-color: yellow}\n    to {background-color: red;}\n}\n.miss {\n    background-color: blue;\n    animation-name: miss;\n    animation-duration: 1s;\n}\n\n@keyframes miss {\n    from{ background-color: white;}\n    to {background-color: blue;}\n}\n.game-board-tile:hover{\n    background-color:rgb(124, 180, 187)\n}\n\n/* Game pieces */\n\n.ship {\n    display: flex;\n}\n\n/* Mobile view */\n@media (max-width:800px) {\n    .game-space {\n        flex-direction: column;\n    }\n\n    .game-board {\n        margin: auto;\n    }\n\n    .modal {\n        position: fixed;\n        width: 100%;\n        height: auto;\n        bottom: 0px;\n        background-color: rgba(0,0,0,0.7);\n        display: none;\n        overflow:auto;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,YAAY;AACZ;IACI,mCAAmC;IACnC,sBAAsB;IACtB,WAAW;IACX,YAAY;IACZ,WAAW;AACf;AACA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,mCAAmC;IACnC,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,UAAU;IACV,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,YAAY;AAChB;;AAEA,uBAAuB;;AAEvB;IACI,eAAe;IACf,QAAQ;IACR,WAAW;IACX,YAAY;IACZ,iCAAiC;IACjC,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,YAAY;IACZ,sBAAsB;IACtB,aAAa;IACb,YAAY;IACZ,iBAAiB;IACjB,mBAAmB;AACvB;;;AAGA;IACI,YAAY;IACZ,sBAAsB;IACtB,sBAAsB;IACtB,sBAAsB;IACtB,aAAa;IACb,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;;AAGA,eAAe;AACf;IACI,aAAa;IACb,WAAW;IACX,uBAAuB;AAC3B;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,mBAAmB;AACvB;AACA;IACI,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,WAAW;AACf;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,qBAAqB;IACrB,mBAAmB;IACnB,wBAAwB;AAC5B;;AAEA;IACI,MAAM,wBAAwB;IAC9B,IAAI,qBAAqB,CAAC;AAC9B;AACA;IACI,sBAAsB;IACtB,oBAAoB;IACpB,sBAAsB;AAC1B;;AAEA;IACI,MAAM,uBAAuB,CAAC;IAC9B,IAAI,sBAAsB,CAAC;AAC/B;AACA;IACI;AACJ;;AAEA,gBAAgB;;AAEhB;IACI,aAAa;AACjB;;AAEA,gBAAgB;AAChB;IACI;QACI,sBAAsB;IAC1B;;IAEA;QACI,YAAY;IAChB;;IAEA;QACI,eAAe;QACf,WAAW;QACX,YAAY;QACZ,WAAW;QACX,iCAAiC;QACjC,aAAa;QACb,aAAa;IACjB;AACJ","sourcesContent":["/* General */\nhtml, body {\n    background-color: rgb(84, 130, 165);\n    color: rgb(24, 38, 58);\n    margin: 0px;\n    height: 100%;\n    width: 100%;\n}\n.banner {\n    font-size: 84px;\n    text-align: center;\n}\n\n.btn {\n    border-radius: 5px;\n    background-color: rgb(84, 130, 165);\n    color: white;\n    width: 130px;\n    height: 40px;\n    margin-top: 20px;\n    font-size: 24px;\n}\n\n.input {\n    height: 30px;\n    width: 80%;\n    font-size: 24px;\n}\n\n.header-sm {\n    font-size: 36px;\n    color: white;\n}\n\n/* Modal, gamestartup */\n\n.modal {\n    position: fixed;\n    top: 0px;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0,0,0,0.7);\n    display: none;\n    overflow: auto;\n}\n\n.modal-box {\n    display: flex;\n    flex-direction: column;\n    width: 400px;\n    height: auto;\n    background-color: grey;\n    padding: 10px;\n    margin: auto;\n    margin-top: 200px;\n    align-items: center;\n}\n\n\n.ship-grid {\n    display:flex;\n    flex-direction: column;\n    justify-content:center;\n    background-color: grey;\n    padding: 10px;\n    width: 600px;\n    margin:auto;\n}\n\n.ship-grid > .header-sm {\n    margin: auto;\n}\n\n.rotate-btn {\n    margin: auto;\n    width: auto;\n}\n\n\n/* Game board */\n.game-space {\n    display: flex;\n    width: 100%;\n    justify-content: center;\n}\n\n.player-header {\n    font-size: 48px;\n    text-align:center;\n    margin-bottom: 10px;\n}\n.game-board {\n    /* 10x10 grid */\n    display: flex;\n    flex-direction: column;\n    margin: 20px;\n}\n\n.game-board-row {\n    display: flex;\n    width: 100%;\n}\n\n.game-board-tile {\n    width: 50px;\n    height: 50px;\n    background-color: rgb(169, 245, 255);\n    border: 2px solid black;\n}\n\n.highlighted {\n    background-color: blue;\n}\n\n.invalid {\n    background-color: red;\n}\n\n.occupied {\n    background-color: greenyellow;\n}\n\n.hit-ship {\n    background-color: red;\n    animation-name: hit;\n    animation-duration: 1.5s;\n}\n\n@keyframes hit {\n    from {background-color: yellow}\n    to {background-color: red;}\n}\n.miss {\n    background-color: blue;\n    animation-name: miss;\n    animation-duration: 1s;\n}\n\n@keyframes miss {\n    from{ background-color: white;}\n    to {background-color: blue;}\n}\n.game-board-tile:hover{\n    background-color:rgb(124, 180, 187)\n}\n\n/* Game pieces */\n\n.ship {\n    display: flex;\n}\n\n/* Mobile view */\n@media (max-width:800px) {\n    .game-space {\n        flex-direction: column;\n    }\n\n    .game-board {\n        margin: auto;\n    }\n\n    .modal {\n        position: fixed;\n        width: 100%;\n        height: auto;\n        bottom: 0px;\n        background-color: rgba(0,0,0,0.7);\n        display: none;\n        overflow:auto;\n    }\n}"],"sourceRoot":""}]);
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
/* harmony export */   "placeShip": () => (/* binding */ placeShip)
/* harmony export */ });
/* harmony import */ var _game_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_functions */ "./src/game_functions.js");
/* harmony import */ var _game_functions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_game_functions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");




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

// function placeComputerShips(computerPlayer) {
//   // Create Carrier(5), BS(4), submarine(3)x2, destroyer(2)
//   const ships = [5, 4, 3, 3, 2];
//   const rotations = [true, false];
//   const { playerBoard } = computerPlayer.gameObject; // same as pb = CO.gameObject.playetrBoard
//   ships.forEach((ship) => {
//     const newShip = createShip(ship);
//     const rotation = rotations[Math.round(Math.random() * 1)]; // randomly gen. rotation
//     let randCoordinates = getRandomCoordinates();
//     let counter = 0;
//     while (true) {
//       counter += 1;
//       try {
//         if (playerBoard.checkTiles(randCoordinates[0], randCoordinates[1], ship, rotation)) {
//           playerBoard.placeShip(newShip, ship, randCoordinates, rotation);
//           break;
//         }
//       } catch {
//         randCoordinates = getRandomCoordinates();
//       }
//       if (counter > 100) {
//         break;
//       }
//     }
//   });
// }

function getRandomCoordinates() {
  // Generate random coordinates
  // gameBord.checkTile should rturn if coordinates are valid
  const x = Math.floor(Math.random() * (10));
  const y = Math.floor(Math.random() * (10));
  return [x, y];
}

function computerAttack(player) {
  // Computer attacks player
  const playerTiles = document.querySelectorAll('[data-tile-player]');
  const randomCoordinates = getRandomCoordinates();
  const playerTile = document.querySelector(`[data-tile-player="${randomCoordinates}"]`);
  // if (player.gameObject.playerBoard.recieveAttack(randomCoordinates)) {
  //   // Mark player gameboard with hits/misses at randomCoordinates
  //   playerTile.classList.add('hit-ship');
  // }
  // playerTile.classList.add('miss');

  // while (true) {
  //   try {
  //     if (player.gameObject.playerBoard.recieveAttack(randomCoordinates)) {
  //     // Mark player gameboard with hits/misses at randomCoordinates
  //       playerTile.classList.add('hit-ship');
  //     } else {
  //       playerTile.classList.add('miss');
  //     }
  //     break;
  //   } catch {
  //     randomCoordinates = getRandomCoordinates(); // needs to loop back up and cont. attack
  //   }
  // }
  try {
    if (player.gameObject.playerBoard.recieveAttack(randomCoordinates)) {
      playerTile.classList.add('hit-ship');
    } else {
      playerTile.classList.add('miss');
    }
    return true;
  } catch {
    return false;
  }
}

function gameLoop(player, computerPlayer) {
  // When the user enters their name and hits submit, the game starts.
  console.log('Game starting, place your ships!', player, computerPlayer);
  // starting with player 1, go back and forth firing shots
  // when a player clicks, it should mark the attack, and computer should
  // immediately make their move, only click on comptuer board
  const computerTiles = document.querySelectorAll('[data-tile-computer]');
  const playerTiles = document.querySelectorAll('[data-tile-player]');
  computerTiles.forEach((tile) => {
    const coordinates = (0,_game_functions__WEBPACK_IMPORTED_MODULE_0__.parseStringArray)(tile.dataset.tileComputer);
    tile.addEventListener('click', () => {
      if (computerPlayer.gameObject.playerBoard.recieveAttack(coordinates)) {
        tile.classList.add('hit-ship');
      } else {
        tile.classList.add('miss');
      }
      if (computerPlayer.gameObject.checkVictory()) {
        alert('You won!');
      }
      // Computer attacks player
      while (computerAttack(player) === false) {
        if (computerAttack(player)) {
          if (player.gameObject.checkVictory()) {
            alert('You lost! Oh no!');
          }
          break;
        }
      }
    });
  });
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

  const checkTile = (x, y) => {
    // checks tile(x, y) as a valid space, returns boolean
    // console.log('CHECKTILE', x, y);
    if (tiles[x][y] === true) {
      throw new Error('coordinates already occupied');
    }
    if ((x < 0 || x > size) || (y < 0 || y >= size)) {
      throw new Error('Invalid coordinates');
    }
    return true;
  };

  const checkTiles = (x, y, shipLength, rotation) => {
    // x, y as starting points, check all tiles ship
    // would take up
    if (rotation === 'true') {
      for (let i = 0; i < shipLength; i++) {
        if (tiles[x + i][y] === true) {
          throw new Error('coordinates already occupied');
        }
        if ((x + i < 0 || x + i >= size) || (y < 0 || y >= size)) {
          throw new Error('Invalid coordinates');
        }
      }
    } else {
      for (let i = 0; i < shipLength; i++) {
        if (tiles[x][y + i] === true) {
          throw new Error('coordinates already occupied');
        }
        if ((y + i < 0 || y + i >= size) || (x < 0 || x >= size)) {
          throw new Error('Invalid coordinates');
        }
      }
    }
    return true;
  };

  const placeShip = (ship, shipLength, coordinates, rotated) => {
    // Update state of gamebaord with new ship using only one coordinate
    if (rotated === 'true') {
      const y = coordinates[0];
      const x = coordinates[1];
      if (checkTiles(y, x, shipLength, rotated)) {
        for (let i = 0; i < shipLength; i++) {
          ship.sections[i].push(y + i, x);
          // console.log('XY', x, y);
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
        const sectionKeys = Object.keys(ship.sections); // the index of ship sections
        for (let i = 0; i < sectionKeys.length; i++) { // loops through length of ship
          const stringKey = [ship.sections[sectionKeys[i]][1],
            ship.sections[sectionKeys[i]][2]]; // ship section coords
          // console.log('String key', JSON.stringify(stringKey), JSON.stringify([x, y]));
          if (JSON.stringify(stringKey) === JSON.stringify([x, y])) {
            // console.log('Hitting ship');
            ship.hit(sectionKeys[i]);
          }
        }
      }
      return true; // added this recently
    }
    tiles[x][y] = 'miss';
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
    tiles, gamePieces, placeShip, recieveAttack, gameOver, displayShips, checkTiles,
  };
};
// Player

const Player = (boardSize, computer = false) => {
  const ships = [5, 4, 3, 3, 2];
  const currentShip = 0;
  const playerShips = [];
  ships.forEach((ship) => {
    const newShip = createShip(ship);
    playerShips.push(newShip);
  });
  const checkShipPlacement = (currentShip) => {
    currentShip++;
    // check for the final ship placement, return true, which will start the game
    if (currentShip === 5) {
      return true;
    }
    return false;
  };
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

  function placeComputerShips() {
    // Create Carrier(5), BS(4), submarine(3)x2, destroyer(2)
    const ships = [5, 4, 3, 3, 2];
    const rotations = ['true', 'false'];
    // const { playerBoard } = computerPlayer.gameObject; // same as pb = CO.gameObject.playetrBoard
    ships.forEach((ship) => {
      const newShip = createShip(ship);
      const rotation = rotations[Math.round(Math.random() * 1)]; // randomly gen. rotation
      let randCoordinates = getRandomCoordinates();
      let counter = 0;
      while (true) {
        counter += 1;
        try {
          if (playerBoard.checkTiles(randCoordinates[0], randCoordinates[1], ship, rotation)) {
            playerBoard.placeShip(newShip, ship, randCoordinates, rotation);
            break;
          }
        } catch {
          randCoordinates = getRandomCoordinates();
        }
        if (counter > 100) {
          break;
        }
      }
    });
  }
  return {
    playerBoard, playerShips, currentShip, checkShipPlacement, makeAttack, computerAttack, isComputer, checkVictory, placeComputerShips,
  };
};

function getRandomCoordinates() {
  // Generate random coordinates
  // gameBord.checkTile should rturn if coordinates are valid
  const x = Math.floor(Math.random() * (10));
  const y = Math.floor(Math.random() * (10));
  return [x, y];
}

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


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBoard": () => (/* binding */ createBoard)
/* harmony export */ });
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
  document.body.appendChild(createOutline());

//   document.addEventListener('DOMContentLoaded', () => {
//     const banner = document.querySelector('.banner');
//     banner.innerText = 'Battleship';
//   });
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

  bannerDiv.innerText = 'Battleship!';
  container.appendChild(bannerDiv);
  container.appendChild(gameSpace);
  container.appendChild(playerDetails);
  const modal = addModal();
  modal.style.display = 'block';
  container.appendChild(modal);
  // document.body.appendChild(container); // appended to body in loadpage()
  return container;
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
  gameBoard.setAttribute('name', playerName(player));
  playerBoardHeader.classList.add('player-header');
  playerBoardHeader.innerText = playerName(player);
  gameBoard.appendChild(playerBoardHeader);

  let boardRow = 0;
  player.gameObject.playerBoard.tiles.forEach((row) => { // vertical row 0-9
    const gameBoardRow = document.createElement('div');
    let boardColumn = 0;
    gameBoardRow.classList.add('game-board-row');
    row.forEach(() => { // horizontal column 0-9
      const boardTile = document.createElement('div');
      boardTile.classList.add('game-board-tile');
      if (player.gameObject.isComputer() === true) {
        // data-tile values are coordinates on the play grid
        // data-tile-value indicates tile status -- true = occupied, hit/miss indicate attacks
        boardTile.setAttribute('data-tile-computer', [boardRow, boardColumn]); // change to data-tile-computer
        boardTile.setAttribute('data-tile-value', player.gameObject.playerBoard.tiles[boardRow][boardColumn]);
      } else {
        // boardTile.setAttribute(`data-tile${player.name}`, [boardRow, boardColumn]); // change to data-tile-player
        // boardTile.setAttribute('data-tile-value', player.gameObject.playerBoard.tiles[boardRow][boardColumn]);
        boardTile.setAttribute('data-tile-player', [boardRow, boardColumn]); // change to data-tile-player
        boardTile.setAttribute('data-tile-value', player.gameObject.playerBoard.tiles[boardRow][boardColumn]);
        if (player.gameObject.playerBoard.tiles[boardRow][boardColumn] === true) {
          // Moved inside conditional in order to hide computer ship locatations
          // move outside to view computer placements
          boardTile.classList.add('occupied'); // indicates a tile is occupied by a ship
        }
      }
      // comment out to hide computer ship positions (testing)
      // if (player.gameObject.playerBoard.tiles[boardRow][boardColumn] === true) {
      //   boardTile.classList.add('occupied'); // indicates a tile is occupied by a ship
      // }
      gameBoardRow.appendChild(boardTile);
      boardColumn++;
    });
    gameBoard.appendChild(gameBoardRow);
    boardRow++;
  });
  return gameBoard;
}

function addBoardTileListeners(player, computerPlayer) {
  // Add highlight ship, place ship listeners to board tiles.
  const boardTiles = document.querySelectorAll('.game-board-tile');
  boardTiles.forEach((tile) => {
    tile.addEventListener('mouseover', (event) => {
      placeShipHighlight(event, player);
    });
    tile.addEventListener('click', (event) => {
      const shipGrid = document.querySelector('.ship-grid');
      const tile = `tile${player.name.toLowerCase()}`;
      const coordinates = parseStringArray(event.path[0].dataset.tilePlayer);
      const rotated = document.getElementsByName('rotateBtn')[0].value;
      const { currentShip } = player.gameObject;
      const ship = player.gameObject.playerShips[currentShip];
      player.gameObject.playerBoard.placeShip(ship, ship.length, coordinates, rotated);

      // player.gameObject.currentShip++;
      if (player.gameObject.checkShipPlacement(currentShip) === true) {
        // Close modal, load gameboards and start game!
        const modal = document.querySelector('.modal');
        const gameSpace = document.querySelector('.game-space');
        modal.style.display = 'none';
        populateGameSpace(gameSpace, [player, computerPlayer]);
        (0,_game_js__WEBPACK_IMPORTED_MODULE_1__.gameLoop)(player, computerPlayer);
        // should close the placeship grid and start the game at this point
      }
      // Change color of tiles
      addShipTiles(coordinates, ship.length, player, computerPlayer, rotated);
    });
  });
}

function changeTileValues() {
  // Change the tile values when a ship is placed
  // tile should have attrbutes changed to reflect ship occupyng space(change class)
}

function placeShipHighlight(event, player, ship) {
  const elementID = parseStringArray(
    // event.target.dataset[`tile${player.name.charAt(0).toLowerCase() + player.name.slice(1)}`],
    event.target.dataset.tilePlayer,
  );
  const rotation = document.getElementsByName('rotateBtn')[0].value;
  highlightShip(elementID, player.gameObject.playerShips[player.gameObject.currentShip]
    .length, player, rotation);
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
    computerPlayer.gameObject.placeComputerShips();
    const gameSpace = document.querySelector('.game-space');
    // modal.style.display = 'none';
    namePrompt.style.display = 'none';
    modal.appendChild(placeShipMenu(player));
    addBoardTileListeners(player, computerPlayer);
  });
  namePrompt.appendChild(header);
  namePrompt.appendChild(nameInput);
  namePrompt.appendChild(submitBtn);
  return namePrompt;
}

function placeShipMenu(player) {
  // Modal menu for placing ships on the palyers grid at the start of the game.
  const currentShip = player.gameObject.playerShips[player.gameObject.currentShip].shipType.charAt(0).toUpperCase()
    + player.gameObject.playerShips[player.gameObject.currentShip].shipType.slice(1);
  const shipGrid = document.createElement('div');
  const chooseShipDisplay = document.createElement('p');
  // const shipIndex = 0;
  shipGrid.classList.add('ship-grid');
  chooseShipDisplay.classList.add('header-sm');
  shipGrid.innerHTML = '';
  chooseShipDisplay.innerText = `Deploy your ${currentShip}`;
  shipGrid.appendChild(chooseShipDisplay);
  shipGrid.appendChild(rotateButton());
  shipGrid.appendChild(createBoard(player));

  const board = createBoard(player);
  console.log(board);

  return shipGrid;
}

function placeShipListeners() {
  // When a player clicks on VALID space, place a ship, then increment to the next ship, when the
  // final ship is placed, close ship placement grid and load game boards.
  const boardTiles = document.querySelectorAll('game-board-tile');
  boardTiles.forEach((tile) => {
    tile.addEventListener('click', () => {
      (0,_game_js__WEBPACK_IMPORTED_MODULE_1__.placeShip)(ship, shipLength, player, rotation);
      // increment to the next ship
      playerShips += 1;
    });
  });
}

function addShipTiles(coordinates, shipLength, player, computerPlayer, rotated) {
  // When ships are placed, their shapes should persist on the gameboard
  const modal = document.querySelector('.modal');
  if (rotated === 'true') {
    permIncrementY(coordinates, shipLength, player); // add ship to grid
    modal.innerHTML = ''; // reset modal
    player.gameObject.currentShip++;
    modal.appendChild(placeShipMenu(player)); // update changes to grid
    addBoardTileListeners(player, computerPlayer);
  } else {
    permIncrementX(coordinates, shipLength, player);
    modal.innerHTML = '';
    player.gameObject.currentShip++;
    modal.appendChild(placeShipMenu(player));
    addBoardTileListeners(player, computerPlayer);
  }
}

function permIncrementY(elementID, shipLength, player) {
  // Helper for highlighShip()
  for (let i = 0; i < shipLength; i++) {
    try {
      const square = document.querySelector(`[data-tile-player='${[elementID[0] + i, elementID[1]]}']`);
      square.classList.add('highlighted');
    } catch {
      for (let i = 0; i < shipLength; i++) {
        const square = document.querySelector(`[data-tile-player='${[elementID[0] + i, elementID[1]]}']`); // adjust on vertical axis
        square.classList.add('invalid');
      }
      console.log('There is no square');
    }
  }
}

function permIncrementX(elementID, shipLength, player) {
  // Helper for highlighShip()
  for (let i = 0; i < shipLength; i++) {
    try {
      const square = document.querySelector(`[data-tile-player='${[elementID[0], elementID[1] + i]}']`);
      square.classList.add('highlighted');
    } catch {
      for (let i = 0; i < shipLength; i++) {
        const square = document.querySelector(`[data-tile-player='${[elementID[0], elementID[1] + i]}']`); // adjust on vertical axis
        square.classList.add('invalid');
      }
      console.log('There is no square');
    }
  }
}
function playerName(player) {
  if (player.gameObject.isComputer() === false) {
    return player.name;
  }
  return 'Computer';
}

function highlightShip(elementID, shipLength, player, rotated, placed) {
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
      const square = document.querySelector(`[data-tile-player='${[elementID[0] + i, elementID[1]]}']`);
      square.classList.add('highlighted');
      square.addEventListener('mouseout', () => {
        for (let i = 0; i < shipLength; i++) {
          const removeSquare = document.querySelector(`[data-tile-player='${[elementID[0] + i, elementID[1]]}']`);
          removeSquare.classList.remove('highlighted');
          removeSquare.classList.remove('invalid');
        }
      });
    } catch {
      for (let i = 0; i < shipLength; i++) {
        const square = document.querySelector(`[data-tile-player='${[elementID[0] + i, elementID[1]]}']`); // adjust on vertical axis
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
      const square = document.querySelector(`[data-tile-player='${[elementID[0], elementID[1] + i]}']`);
      square.classList.add('highlighted');
      square.addEventListener('mouseout', () => {
        for (let i = 0; i < shipLength; i++) {
          const removeSquare = document.querySelector(`[data-tile-player='${[elementID[0], elementID[1] + i]}']`);
          removeSquare.classList.remove('highlighted');
          removeSquare.classList.remove('invalid');
        }
      });
    } catch {
      for (let i = 0; i < shipLength; i++) {
        const square = document.querySelector(`[data-tile-player='${[elementID[0], elementID[1] + i]}']`); // adjust on vertical axis
        square.classList.add('invalid');
      }
      console.log('There is no square');
    }
  }
}
loadPage();




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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVfZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogR2VuZXJhbCAqL1xcbmh0bWwsIGJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODQsIDEzMCwgMTY1KTtcXG4gICAgY29sb3I6IHJnYigyNCwgMzgsIDU4KTtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi5iYW5uZXIge1xcbiAgICBmb250LXNpemU6IDg0cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmJ0biB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg0LCAxMzAsIDE2NSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDEzMHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuLmlucHV0IHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbi5oZWFkZXItc20ge1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLyogTW9kYWwsIGdhbWVzdGFydHVwICovXFxuXFxuLm1vZGFsIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjcpO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLm1vZGFsLWJveCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDIwMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG4uc2hpcC1ncmlkIHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB3aWR0aDogNjAwcHg7XFxuICAgIG1hcmdpbjphdXRvO1xcbn1cXG5cXG4uc2hpcC1ncmlkID4gLmhlYWRlci1zbSB7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLnJvdGF0ZS1idG4ge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHdpZHRoOiBhdXRvO1xcbn1cXG5cXG5cXG4vKiBHYW1lIGJvYXJkICovXFxuLmdhbWUtc3BhY2Uge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5wbGF5ZXItaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLmdhbWUtYm9hcmQge1xcbiAgICAvKiAxMHgxMCBncmlkICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbjogMjBweDtcXG59XFxuXFxuLmdhbWUtYm9hcmQtcm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5nYW1lLWJvYXJkLXRpbGUge1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY5LCAyNDUsIDI1NSk7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uaGlnaGxpZ2h0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4uaW52YWxpZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLm9jY3VwaWVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XFxufVxcblxcbi5oaXQtc2hpcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGhpdDtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjVzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGhpdCB7XFxuICAgIGZyb20ge2JhY2tncm91bmQtY29sb3I6IHllbGxvd31cXG4gICAgdG8ge2JhY2tncm91bmQtY29sb3I6IHJlZDt9XFxufVxcbi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IG1pc3M7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XFxufVxcblxcbkBrZXlmcmFtZXMgbWlzcyB7XFxuICAgIGZyb217IGJhY2tncm91bmQtY29sb3I6IHdoaXRlO31cXG4gICAgdG8ge2JhY2tncm91bmQtY29sb3I6IGJsdWU7fVxcbn1cXG4uZ2FtZS1ib2FyZC10aWxlOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxMjQsIDE4MCwgMTg3KVxcbn1cXG5cXG4vKiBHYW1lIHBpZWNlcyAqL1xcblxcbi5zaGlwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLyogTW9iaWxlIHZpZXcgKi9cXG5AbWVkaWEgKG1heC13aWR0aDo4MDBweCkge1xcbiAgICAuZ2FtZS1zcGFjZSB7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC5nYW1lLWJvYXJkIHtcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgfVxcblxcbiAgICAubW9kYWwge1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICBib3R0b206IDBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC43KTtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICBvdmVyZmxvdzphdXRvO1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsWUFBWTtBQUNaO0lBQ0ksbUNBQW1DO0lBQ25DLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQ0FBbUM7SUFDbkMsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQSx1QkFBdUI7O0FBRXZCO0lBQ0ksZUFBZTtJQUNmLFFBQVE7SUFDUixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOzs7QUFHQSxlQUFlO0FBQ2Y7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksTUFBTSx3QkFBd0I7SUFDOUIsSUFBSSxxQkFBcUIsQ0FBQztBQUM5QjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxNQUFNLHVCQUF1QixDQUFDO0lBQzlCLElBQUksc0JBQXNCLENBQUM7QUFDL0I7QUFDQTtJQUNJO0FBQ0o7O0FBRUEsZ0JBQWdCOztBQUVoQjtJQUNJLGFBQWE7QUFDakI7O0FBRUEsZ0JBQWdCO0FBQ2hCO0lBQ0k7UUFDSSxzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLFdBQVc7UUFDWCxZQUFZO1FBQ1osV0FBVztRQUNYLGlDQUFpQztRQUNqQyxhQUFhO1FBQ2IsYUFBYTtJQUNqQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEdlbmVyYWwgKi9cXG5odG1sLCBib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg0LCAxMzAsIDE2NSk7XFxuICAgIGNvbG9yOiByZ2IoMjQsIDM4LCA1OCk7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4uYmFubmVyIHtcXG4gICAgZm9udC1zaXplOiA4NHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5idG4ge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4NCwgMTMwLCAxNjUpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiAxMzBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbi5pbnB1dCB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4uaGVhZGVyLXNtIHtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi8qIE1vZGFsLCBnYW1lc3RhcnR1cCAqL1xcblxcbi5tb2RhbCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC43KTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5tb2RhbC1ib3gge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAyMDBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuXFxuLnNoaXAtZ3JpZCB7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBtYXJnaW46YXV0bztcXG59XFxuXFxuLnNoaXAtZ3JpZCA+IC5oZWFkZXItc20ge1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5yb3RhdGUtYnRuIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB3aWR0aDogYXV0bztcXG59XFxuXFxuXFxuLyogR2FtZSBib2FyZCAqL1xcbi5nYW1lLXNwYWNlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucGxheWVyLWhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5nYW1lLWJvYXJkIHtcXG4gICAgLyogMTB4MTAgZ3JpZCAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW46IDIwcHg7XFxufVxcblxcbi5nYW1lLWJvYXJkLXJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZ2FtZS1ib2FyZC10aWxlIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2OSwgMjQ1LCAyNTUpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmhpZ2hsaWdodGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuLmludmFsaWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5vY2N1cGllZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xcbn1cXG5cXG4uaGl0LXNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBoaXQ7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMS41cztcXG59XFxuXFxuQGtleWZyYW1lcyBoaXQge1xcbiAgICBmcm9tIHtiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3d9XFxuICAgIHRvIHtiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7fVxcbn1cXG4ubWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBtaXNzO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIG1pc3Mge1xcbiAgICBmcm9teyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTt9XFxuICAgIHRvIHtiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO31cXG59XFxuLmdhbWUtYm9hcmQtdGlsZTpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTI0LCAxODAsIDE4NylcXG59XFxuXFxuLyogR2FtZSBwaWVjZXMgKi9cXG5cXG4uc2hpcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi8qIE1vYmlsZSB2aWV3ICovXFxuQG1lZGlhIChtYXgtd2lkdGg6ODAwcHgpIHtcXG4gICAgLmdhbWUtc3BhY2Uge1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAuZ2FtZS1ib2FyZCB7XFxuICAgICAgICBtYXJnaW46IGF1dG87XFxuICAgIH1cXG5cXG4gICAgLm1vZGFsIHtcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgYm90dG9tOiAwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNyk7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgb3ZlcmZsb3c6YXV0bztcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7XG4gIGNyZWF0ZVNoaXAsIGNyZWF0ZUdhbWVCb2FyZCwgUGxheWVyLCBwYXJzZVN0cmluZ0FycmF5LFxufSBmcm9tICcuL2dhbWVfZnVuY3Rpb25zJztcblxuaW1wb3J0IHsgY3JlYXRlQm9hcmQgfSBmcm9tICcuL2luZGV4LmpzJztcblxuY29uc29sZS5sb2coJ0xvYWRpbmcgZ2FtZSBzY3JpcHRzLi4uLicpO1xuXG5mdW5jdGlvbiBjcmVhdGVQbGF5ZXIocGxheWVyTmFtZSwgY29tcHV0ZXIpIHtcbiAgLy8gQ3JlYXRlIGEgcGx5ZXIgcHJvZmlsZSBhZnRlciB1c2VyIGhhcyBlbnRlcmVkIHRoZWlyIG5hbWVcbiAgLy8gQ3JlYXRlcyBhIGxvY2FsIHN0b3JhZ2UgcHJvZmlsZSB0byBrZWVwIHRyYWNrIG9mIGN1cnJlbnQgZ2FtZSwgYW5kIHBhc3QgZ2FtZSBoaXN0b3J5XG4gIGNvbnN0IHBsYXllclByb2ZpbGUgPSB7XG4gICAgbmFtZTogcGxheWVyTmFtZSxcbiAgICBnYW1lT2JqZWN0OiBQbGF5ZXIoMTAsIGNvbXB1dGVyKSxcbiAgICBnYW1lUmVjb3JkczogW10sXG4gIH07XG4gIGNvbnNvbGUubG9nKHBsYXllclByb2ZpbGUpO1xuICByZXR1cm4gcGxheWVyUHJvZmlsZTtcbn1cblxuZnVuY3Rpb24gZ2V0UGxheWVyTmFtZSgpIHtcbiAgLy8gV2hlbiBwbGF5ZXIgZW50ZXJzIHRoZWlyIG5hbWUsIGdldCB0aGUgbmFtZSBmcm9tIHRoZSBpbnB1dFxuICAvLyB0aGVuIGNyZWF0ZSBhIG5ldyBwbGF5ZXIgb2JqZWN0IGFuZCBjcmVhdGUgdGhlaXIgZ2FtZSBib2FyZFxufVxuZnVuY3Rpb24gcGxhY2VTaGlwKHBsYXllciwgc2hpcCwgc2hpcExlbmd0aCwgY29vcmRpbmF0ZXMsIHJvdGF0ZWQpIHtcbiAgLy8gUGxhY2UgYSBzaW5nbGUgc2hpcCBvbiB0aGUgZ2FtZWJvYXJkXG4gIHBsYXllci5wbGF5ZXJCb2FyZC5wbGFjZVNoaXAoc2hpcCwgc2hpcExlbmd0aCwgY29vcmRpbmF0ZXMsIHJvdGF0ZWQpO1xufVxuXG4vLyBmdW5jdGlvbiBwbGFjZUNvbXB1dGVyU2hpcHMoY29tcHV0ZXJQbGF5ZXIpIHtcbi8vICAgLy8gQ3JlYXRlIENhcnJpZXIoNSksIEJTKDQpLCBzdWJtYXJpbmUoMyl4MiwgZGVzdHJveWVyKDIpXG4vLyAgIGNvbnN0IHNoaXBzID0gWzUsIDQsIDMsIDMsIDJdO1xuLy8gICBjb25zdCByb3RhdGlvbnMgPSBbdHJ1ZSwgZmFsc2VdO1xuLy8gICBjb25zdCB7IHBsYXllckJvYXJkIH0gPSBjb21wdXRlclBsYXllci5nYW1lT2JqZWN0OyAvLyBzYW1lIGFzIHBiID0gQ08uZ2FtZU9iamVjdC5wbGF5ZXRyQm9hcmRcbi8vICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuLy8gICAgIGNvbnN0IG5ld1NoaXAgPSBjcmVhdGVTaGlwKHNoaXApO1xuLy8gICAgIGNvbnN0IHJvdGF0aW9uID0gcm90YXRpb25zW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEpXTsgLy8gcmFuZG9tbHkgZ2VuLiByb3RhdGlvblxuLy8gICAgIGxldCByYW5kQ29vcmRpbmF0ZXMgPSBnZXRSYW5kb21Db29yZGluYXRlcygpO1xuLy8gICAgIGxldCBjb3VudGVyID0gMDtcbi8vICAgICB3aGlsZSAodHJ1ZSkge1xuLy8gICAgICAgY291bnRlciArPSAxO1xuLy8gICAgICAgdHJ5IHtcbi8vICAgICAgICAgaWYgKHBsYXllckJvYXJkLmNoZWNrVGlsZXMocmFuZENvb3JkaW5hdGVzWzBdLCByYW5kQ29vcmRpbmF0ZXNbMV0sIHNoaXAsIHJvdGF0aW9uKSkge1xuLy8gICAgICAgICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcChuZXdTaGlwLCBzaGlwLCByYW5kQ29vcmRpbmF0ZXMsIHJvdGF0aW9uKTtcbi8vICAgICAgICAgICBicmVhaztcbi8vICAgICAgICAgfVxuLy8gICAgICAgfSBjYXRjaCB7XG4vLyAgICAgICAgIHJhbmRDb29yZGluYXRlcyA9IGdldFJhbmRvbUNvb3JkaW5hdGVzKCk7XG4vLyAgICAgICB9XG4vLyAgICAgICBpZiAoY291bnRlciA+IDEwMCkge1xuLy8gICAgICAgICBicmVhaztcbi8vICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH0pO1xuLy8gfVxuXG5mdW5jdGlvbiBnZXRSYW5kb21Db29yZGluYXRlcygpIHtcbiAgLy8gR2VuZXJhdGUgcmFuZG9tIGNvb3JkaW5hdGVzXG4gIC8vIGdhbWVCb3JkLmNoZWNrVGlsZSBzaG91bGQgcnR1cm4gaWYgY29vcmRpbmF0ZXMgYXJlIHZhbGlkXG4gIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTApKTtcbiAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMCkpO1xuICByZXR1cm4gW3gsIHldO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlckF0dGFjayhwbGF5ZXIpIHtcbiAgLy8gQ29tcHV0ZXIgYXR0YWNrcyBwbGF5ZXJcbiAgY29uc3QgcGxheWVyVGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10aWxlLXBsYXllcl0nKTtcbiAgY29uc3QgcmFuZG9tQ29vcmRpbmF0ZXMgPSBnZXRSYW5kb21Db29yZGluYXRlcygpO1xuICBjb25zdCBwbGF5ZXJUaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGlsZS1wbGF5ZXI9XCIke3JhbmRvbUNvb3JkaW5hdGVzfVwiXWApO1xuICAvLyBpZiAocGxheWVyLmdhbWVPYmplY3QucGxheWVyQm9hcmQucmVjaWV2ZUF0dGFjayhyYW5kb21Db29yZGluYXRlcykpIHtcbiAgLy8gICAvLyBNYXJrIHBsYXllciBnYW1lYm9hcmQgd2l0aCBoaXRzL21pc3NlcyBhdCByYW5kb21Db29yZGluYXRlc1xuICAvLyAgIHBsYXllclRpbGUuY2xhc3NMaXN0LmFkZCgnaGl0LXNoaXAnKTtcbiAgLy8gfVxuICAvLyBwbGF5ZXJUaWxlLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcblxuICAvLyB3aGlsZSAodHJ1ZSkge1xuICAvLyAgIHRyeSB7XG4gIC8vICAgICBpZiAocGxheWVyLmdhbWVPYmplY3QucGxheWVyQm9hcmQucmVjaWV2ZUF0dGFjayhyYW5kb21Db29yZGluYXRlcykpIHtcbiAgLy8gICAgIC8vIE1hcmsgcGxheWVyIGdhbWVib2FyZCB3aXRoIGhpdHMvbWlzc2VzIGF0IHJhbmRvbUNvb3JkaW5hdGVzXG4gIC8vICAgICAgIHBsYXllclRpbGUuY2xhc3NMaXN0LmFkZCgnaGl0LXNoaXAnKTtcbiAgLy8gICAgIH0gZWxzZSB7XG4gIC8vICAgICAgIHBsYXllclRpbGUuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAvLyAgICAgfVxuICAvLyAgICAgYnJlYWs7XG4gIC8vICAgfSBjYXRjaCB7XG4gIC8vICAgICByYW5kb21Db29yZGluYXRlcyA9IGdldFJhbmRvbUNvb3JkaW5hdGVzKCk7IC8vIG5lZWRzIHRvIGxvb3AgYmFjayB1cCBhbmQgY29udC4gYXR0YWNrXG4gIC8vICAgfVxuICAvLyB9XG4gIHRyeSB7XG4gICAgaWYgKHBsYXllci5nYW1lT2JqZWN0LnBsYXllckJvYXJkLnJlY2lldmVBdHRhY2socmFuZG9tQ29vcmRpbmF0ZXMpKSB7XG4gICAgICBwbGF5ZXJUaWxlLmNsYXNzTGlzdC5hZGQoJ2hpdC1zaGlwJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBsYXllclRpbGUuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdhbWVMb29wKHBsYXllciwgY29tcHV0ZXJQbGF5ZXIpIHtcbiAgLy8gV2hlbiB0aGUgdXNlciBlbnRlcnMgdGhlaXIgbmFtZSBhbmQgaGl0cyBzdWJtaXQsIHRoZSBnYW1lIHN0YXJ0cy5cbiAgY29uc29sZS5sb2coJ0dhbWUgc3RhcnRpbmcsIHBsYWNlIHlvdXIgc2hpcHMhJywgcGxheWVyLCBjb21wdXRlclBsYXllcik7XG4gIC8vIHN0YXJ0aW5nIHdpdGggcGxheWVyIDEsIGdvIGJhY2sgYW5kIGZvcnRoIGZpcmluZyBzaG90c1xuICAvLyB3aGVuIGEgcGxheWVyIGNsaWNrcywgaXQgc2hvdWxkIG1hcmsgdGhlIGF0dGFjaywgYW5kIGNvbXB1dGVyIHNob3VsZFxuICAvLyBpbW1lZGlhdGVseSBtYWtlIHRoZWlyIG1vdmUsIG9ubHkgY2xpY2sgb24gY29tcHR1ZXIgYm9hcmRcbiAgY29uc3QgY29tcHV0ZXJUaWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRpbGUtY29tcHV0ZXJdJyk7XG4gIGNvbnN0IHBsYXllclRpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdGlsZS1wbGF5ZXJdJyk7XG4gIGNvbXB1dGVyVGlsZXMuZm9yRWFjaCgodGlsZSkgPT4ge1xuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gcGFyc2VTdHJpbmdBcnJheSh0aWxlLmRhdGFzZXQudGlsZUNvbXB1dGVyKTtcbiAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKGNvbXB1dGVyUGxheWVyLmdhbWVPYmplY3QucGxheWVyQm9hcmQucmVjaWV2ZUF0dGFjayhjb29yZGluYXRlcykpIHtcbiAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdoaXQtc2hpcCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGlsZS5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICB9XG4gICAgICBpZiAoY29tcHV0ZXJQbGF5ZXIuZ2FtZU9iamVjdC5jaGVja1ZpY3RvcnkoKSkge1xuICAgICAgICBhbGVydCgnWW91IHdvbiEnKTtcbiAgICAgIH1cbiAgICAgIC8vIENvbXB1dGVyIGF0dGFja3MgcGxheWVyXG4gICAgICB3aGlsZSAoY29tcHV0ZXJBdHRhY2socGxheWVyKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgaWYgKGNvbXB1dGVyQXR0YWNrKHBsYXllcikpIHtcbiAgICAgICAgICBpZiAocGxheWVyLmdhbWVPYmplY3QuY2hlY2tWaWN0b3J5KCkpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdZb3UgbG9zdCEgT2ggbm8hJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5leHBvcnQge1xuICBjcmVhdGVQbGF5ZXIsIGdldFBsYXllck5hbWUsIGdhbWVMb29wLCBwbGFjZVNoaXAsXG59O1xuIiwiLy8gRnVuY3Rpb25zIGZvciBCYXR0bGVzaGlwIGdhbWVcblxuLy8gU2hpcHNcbmNvbnN0IGNyZWF0ZVNoaXAgPSAobGVuZ3RoKSA9PiB7XG4gIC8vIENyZWF0ZSBhbiBhcnJheSByZXByZXNlbnRpbmcgdGhlIHNoaXAgd2l0aCBsZW5ndGggcHJvdmlkZWRcbiAgY29uc3Qgc2hpcHNEaWN0ID0ge1xuICAgIDU6ICdjYXJyaWVyJyxcbiAgICA0OiAnYmF0dGxlc2hpcCcsXG4gICAgMzogJ3N1Ym1hcmluZScsXG4gICAgMjogJ2Rlc3Ryb3llcicsXG4gIH07XG5cbiAgY29uc3Qgc2hpcFR5cGUgPSBzaGlwc0RpY3RbbGVuZ3RoXTtcbiAgY29uc3Qgc2hpcFNlY3Rpb25zID0gKCkgPT4ge1xuICAgIGNvbnN0IHNlY3Rpb25zID0ge307XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgc2VjdGlvbnNbaV0gPSBbZmFsc2VdO1xuICAgIH1cbiAgICByZXR1cm4gc2VjdGlvbnM7XG4gIH07XG5cbiAgY29uc3Qgc2VjdGlvbnMgPSBzaGlwU2VjdGlvbnMoKTtcblxuICBjb25zdCBoaXQgPSAocG9zaXRpb24pID0+IHtcbiAgICAvLyBNYXJrIHRoZSBnaXZlbiBwb3NpdGlvbiBhcyAnaGl0JyAodHJ1ZSkgb24gdGhlIHNoaXBcbiAgICBzZWN0aW9uc1twb3NpdGlvbl1bMF0gPSB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICBjb25zdCBzZWN0aW9uS2V5cyA9IE9iamVjdC5rZXlzKHNlY3Rpb25zKTtcbiAgICBpZiAoc2VjdGlvbktleXMuZXZlcnkoKGVsZW1lbnQpID0+IHNlY3Rpb25zW2VsZW1lbnRdWzBdID09PSB0cnVlKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGxlbmd0aCwgc2VjdGlvbnMsIGhpdCwgaXNTdW5rLCBzaGlwVHlwZSxcbiAgfTtcbn07XG5cbi8vIEdhbWUgQm9hcmRcbmNvbnN0IGNyZWF0ZUdhbWVCb2FyZCA9IChzaXplKSA9PiB7XG4gIC8vIENyZWF0ZSBhIGdhbWVib2FyZCBvZiBzaXplIHggc2l6ZSAoMmQgYXJyYXkpXG4gIGNvbnN0IGFkZEJvYXJkVGlsZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgbmV3Qm9hcmQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgY29uc3Qgcm93ID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICByb3cucHVzaChmYWxzZSk7XG4gICAgICB9XG4gICAgICBuZXdCb2FyZC5wdXNoKHJvdyk7XG4gICAgfVxuICAgIHJldHVybiBuZXdCb2FyZDtcbiAgfTtcblxuICBjb25zdCB0aWxlcyA9IGFkZEJvYXJkVGlsZXMoKTtcbiAgY29uc3QgZ2FtZVBpZWNlcyA9IFtdO1xuXG4gIGNvbnN0IGNoZWNrVGlsZSA9ICh4LCB5KSA9PiB7XG4gICAgLy8gY2hlY2tzIHRpbGUoeCwgeSkgYXMgYSB2YWxpZCBzcGFjZSwgcmV0dXJucyBib29sZWFuXG4gICAgLy8gY29uc29sZS5sb2coJ0NIRUNLVElMRScsIHgsIHkpO1xuICAgIGlmICh0aWxlc1t4XVt5XSA9PT0gdHJ1ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb29yZGluYXRlcyBhbHJlYWR5IG9jY3VwaWVkJyk7XG4gICAgfVxuICAgIGlmICgoeCA8IDAgfHwgeCA+IHNpemUpIHx8ICh5IDwgMCB8fCB5ID49IHNpemUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY29vcmRpbmF0ZXMnKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgY2hlY2tUaWxlcyA9ICh4LCB5LCBzaGlwTGVuZ3RoLCByb3RhdGlvbikgPT4ge1xuICAgIC8vIHgsIHkgYXMgc3RhcnRpbmcgcG9pbnRzLCBjaGVjayBhbGwgdGlsZXMgc2hpcFxuICAgIC8vIHdvdWxkIHRha2UgdXBcbiAgICBpZiAocm90YXRpb24gPT09ICd0cnVlJykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRpbGVzW3ggKyBpXVt5XSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY29vcmRpbmF0ZXMgYWxyZWFkeSBvY2N1cGllZCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoeCArIGkgPCAwIHx8IHggKyBpID49IHNpemUpIHx8ICh5IDwgMCB8fCB5ID49IHNpemUpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNvb3JkaW5hdGVzJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRpbGVzW3hdW3kgKyBpXSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY29vcmRpbmF0ZXMgYWxyZWFkeSBvY2N1cGllZCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoeSArIGkgPCAwIHx8IHkgKyBpID49IHNpemUpIHx8ICh4IDwgMCB8fCB4ID49IHNpemUpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNvb3JkaW5hdGVzJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIHNoaXBMZW5ndGgsIGNvb3JkaW5hdGVzLCByb3RhdGVkKSA9PiB7XG4gICAgLy8gVXBkYXRlIHN0YXRlIG9mIGdhbWViYW9yZCB3aXRoIG5ldyBzaGlwIHVzaW5nIG9ubHkgb25lIGNvb3JkaW5hdGVcbiAgICBpZiAocm90YXRlZCA9PT0gJ3RydWUnKSB7XG4gICAgICBjb25zdCB5ID0gY29vcmRpbmF0ZXNbMF07XG4gICAgICBjb25zdCB4ID0gY29vcmRpbmF0ZXNbMV07XG4gICAgICBpZiAoY2hlY2tUaWxlcyh5LCB4LCBzaGlwTGVuZ3RoLCByb3RhdGVkKSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgIHNoaXAuc2VjdGlvbnNbaV0ucHVzaCh5ICsgaSwgeCk7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ1hZJywgeCwgeSk7XG4gICAgICAgICAgdGlsZXNbeSArIGldW3hdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB4ID0gY29vcmRpbmF0ZXNbMV07XG4gICAgICBjb25zdCB5ID0gY29vcmRpbmF0ZXNbMF07XG4gICAgICBpZiAoY2hlY2tUaWxlcyh5LCB4LCBzaGlwTGVuZ3RoLCByb3RhdGVkKSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgIHNoaXAuc2VjdGlvbnNbaV0ucHVzaCh5LCB4ICsgaSk7XG4gICAgICAgICAgdGlsZXNbeV1beCArIGldID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBnYW1lUGllY2VzLnB1c2goc2hpcCk7XG4gIH07XG5cbiAgY29uc3QgcmVjaWV2ZUF0dGFjayA9IChjb29yZGluYXRlcykgPT4ge1xuICAgIC8vIENoZWNrIGNvb3JkaW5hdGVzIGZvciBzaGlwLCBpZiBhIGhpdCwgbWFyayBwb3NpaXRpb24gb24gc2hpcCBhcyBoaXRcbiAgICAvLyBlbHNlIG1hcmsgdGlsZSBhcyBhIG1pc3MsIHRpbGUgc2hvdWxkIGdvIGZyb20gZmFsc2UgPT4gJ21pc3MnXG4gICAgY29uc3QgeCA9IGNvb3JkaW5hdGVzWzBdO1xuICAgIGNvbnN0IHkgPSBjb29yZGluYXRlc1sxXTtcbiAgICBpZiAoKHggPCAwIHx8IHggPiBzaXplKSB8fCAoeSA8IDAgfHwgeSA+IHNpemUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0F0dGFjayBtdXN0IHRhcmdldCB3aXRoaW4gYm9hcmQnKTtcbiAgICB9XG4gICAgaWYgKHRpbGVzW3hdW3ldID09PSAnaGl0JyB8fCB0aWxlc1t4XVt5XSA9PT0gJ21pc3MnKSB7IC8vIE9jY3VwaWVkIHNwYWNlIGlzIG1hcmtlZCB0cnVlIG9uIGJvYXJkXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RpbGUgaGFzIGFscmVhZHkgYmVlbiBhdHRhY2tlZCcpO1xuICAgIH1cblxuICAgIGlmICh0aWxlc1t4XVt5XSA9PT0gdHJ1ZSkge1xuICAgICAgdGlsZXNbeF1beV0gPSAnaGl0JztcbiAgICAgIC8vIEhhdmUgY29vcmRpbmF0ZXMsIG5lZWQgdG8gbWF0Y2ggY29vcmRpbmF0ZXMgdG8gc2hpcCBwb3NpdGlvblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lUGllY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHNoaXAgPSBnYW1lUGllY2VzW2ldO1xuICAgICAgICBjb25zdCBzZWN0aW9uS2V5cyA9IE9iamVjdC5rZXlzKHNoaXAuc2VjdGlvbnMpOyAvLyB0aGUgaW5kZXggb2Ygc2hpcCBzZWN0aW9uc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlY3Rpb25LZXlzLmxlbmd0aDsgaSsrKSB7IC8vIGxvb3BzIHRocm91Z2ggbGVuZ3RoIG9mIHNoaXBcbiAgICAgICAgICBjb25zdCBzdHJpbmdLZXkgPSBbc2hpcC5zZWN0aW9uc1tzZWN0aW9uS2V5c1tpXV1bMV0sXG4gICAgICAgICAgICBzaGlwLnNlY3Rpb25zW3NlY3Rpb25LZXlzW2ldXVsyXV07IC8vIHNoaXAgc2VjdGlvbiBjb29yZHNcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnU3RyaW5nIGtleScsIEpTT04uc3RyaW5naWZ5KHN0cmluZ0tleSksIEpTT04uc3RyaW5naWZ5KFt4LCB5XSkpO1xuICAgICAgICAgIGlmIChKU09OLnN0cmluZ2lmeShzdHJpbmdLZXkpID09PSBKU09OLnN0cmluZ2lmeShbeCwgeV0pKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnSGl0dGluZyBzaGlwJyk7XG4gICAgICAgICAgICBzaGlwLmhpdChzZWN0aW9uS2V5c1tpXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTsgLy8gYWRkZWQgdGhpcyByZWNlbnRseVxuICAgIH1cbiAgICB0aWxlc1t4XVt5XSA9ICdtaXNzJztcbiAgfTtcblxuICBjb25zdCBkaXNwbGF5U2hpcHMgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2hpcHNTdGF0dXMgPSB7fTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVQaWVjZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHNoaXBzU3RhdHVzW2dhbWVQaWVjZXNbaV0uc2hpcFR5cGVdID0gZ2FtZVBpZWNlc1tpXS5pc1N1bmsoKTtcbiAgICB9XG4gICAgcmV0dXJuIHNoaXBzU3RhdHVzO1xuICB9O1xuXG4gIGNvbnN0IGdhbWVPdmVyID0gKCkgPT4ge1xuICAgIC8vIENoZWNrIHRoYXQgYWxsIHNoaXBzIGhhdmUgYmVlbiBzdW5rLCBlbmQgZ2FtZSBpZiB0cnVlXG4gICAgaWYgKGdhbWVQaWVjZXMuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkgPT09IHRydWUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgdGlsZXMsIGdhbWVQaWVjZXMsIHBsYWNlU2hpcCwgcmVjaWV2ZUF0dGFjaywgZ2FtZU92ZXIsIGRpc3BsYXlTaGlwcywgY2hlY2tUaWxlcyxcbiAgfTtcbn07XG4vLyBQbGF5ZXJcblxuY29uc3QgUGxheWVyID0gKGJvYXJkU2l6ZSwgY29tcHV0ZXIgPSBmYWxzZSkgPT4ge1xuICBjb25zdCBzaGlwcyA9IFs1LCA0LCAzLCAzLCAyXTtcbiAgY29uc3QgY3VycmVudFNoaXAgPSAwO1xuICBjb25zdCBwbGF5ZXJTaGlwcyA9IFtdO1xuICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgY29uc3QgbmV3U2hpcCA9IGNyZWF0ZVNoaXAoc2hpcCk7XG4gICAgcGxheWVyU2hpcHMucHVzaChuZXdTaGlwKTtcbiAgfSk7XG4gIGNvbnN0IGNoZWNrU2hpcFBsYWNlbWVudCA9IChjdXJyZW50U2hpcCkgPT4ge1xuICAgIGN1cnJlbnRTaGlwKys7XG4gICAgLy8gY2hlY2sgZm9yIHRoZSBmaW5hbCBzaGlwIHBsYWNlbWVudCwgcmV0dXJuIHRydWUsIHdoaWNoIHdpbGwgc3RhcnQgdGhlIGdhbWVcbiAgICBpZiAoY3VycmVudFNoaXAgPT09IDUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG4gIGNvbnN0IGNyZWF0ZUJvYXJkID0gKCkgPT4ge1xuICAgIC8vIHNldCB0cnVlIGZvciBodW1hbiBwbGF5ZXJcbiAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IGNyZWF0ZUdhbWVCb2FyZChib2FyZFNpemUpO1xuICAgIHJldHVybiBwbGF5ZXJCb2FyZDtcbiAgfTtcblxuICBjb25zdCBtYWtlQXR0YWNrID0gKG9wcG9uZW50LCBjb29yZGluYXRlcykgPT4ge1xuICAgIG9wcG9uZW50LnBsYXllckJvYXJkLnJlY2lldmVBdHRhY2soY29vcmRpbmF0ZXMpO1xuICB9O1xuXG4gIGNvbnN0IGNvbXB1dGVyQXR0YWNrID0gKG9wcG9uZW50KSA9PiB7XG4gICAgLy8gQ29tcHV0ZXIgc2hvdWxkIHNob3VsZCBtYWtlIGEgcmFuZG9tLCB2YWxpZCBhdHRhY2tcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChib2FyZFNpemUpKTtcbiAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoYm9hcmRTaXplKSk7XG4gICAgICB0cnkge1xuICAgICAgICBtYWtlQXR0YWNrKG9wcG9uZW50LCBbeCwgeV0pO1xuICAgICAgICBicmVhaztcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaXNDb21wdXRlciA9ICgpID0+IGNvbXB1dGVyO1xuXG4gIGNvbnN0IHBsYXllckJvYXJkID0gY3JlYXRlQm9hcmQoYm9hcmRTaXplKTtcblxuICBjb25zdCBjaGVja1ZpY3RvcnkgPSAoKSA9PiBwbGF5ZXJCb2FyZC5nYW1lT3ZlcigpO1xuXG4gIGZ1bmN0aW9uIHBsYWNlQ29tcHV0ZXJTaGlwcygpIHtcbiAgICAvLyBDcmVhdGUgQ2Fycmllcig1KSwgQlMoNCksIHN1Ym1hcmluZSgzKXgyLCBkZXN0cm95ZXIoMilcbiAgICBjb25zdCBzaGlwcyA9IFs1LCA0LCAzLCAzLCAyXTtcbiAgICBjb25zdCByb3RhdGlvbnMgPSBbJ3RydWUnLCAnZmFsc2UnXTtcbiAgICAvLyBjb25zdCB7IHBsYXllckJvYXJkIH0gPSBjb21wdXRlclBsYXllci5nYW1lT2JqZWN0OyAvLyBzYW1lIGFzIHBiID0gQ08uZ2FtZU9iamVjdC5wbGF5ZXRyQm9hcmRcbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBjb25zdCBuZXdTaGlwID0gY3JlYXRlU2hpcChzaGlwKTtcbiAgICAgIGNvbnN0IHJvdGF0aW9uID0gcm90YXRpb25zW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEpXTsgLy8gcmFuZG9tbHkgZ2VuLiByb3RhdGlvblxuICAgICAgbGV0IHJhbmRDb29yZGluYXRlcyA9IGdldFJhbmRvbUNvb3JkaW5hdGVzKCk7XG4gICAgICBsZXQgY291bnRlciA9IDA7XG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICBjb3VudGVyICs9IDE7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKHBsYXllckJvYXJkLmNoZWNrVGlsZXMocmFuZENvb3JkaW5hdGVzWzBdLCByYW5kQ29vcmRpbmF0ZXNbMV0sIHNoaXAsIHJvdGF0aW9uKSkge1xuICAgICAgICAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKG5ld1NoaXAsIHNoaXAsIHJhbmRDb29yZGluYXRlcywgcm90YXRpb24pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICByYW5kQ29vcmRpbmF0ZXMgPSBnZXRSYW5kb21Db29yZGluYXRlcygpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb3VudGVyID4gMTAwKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHBsYXllckJvYXJkLCBwbGF5ZXJTaGlwcywgY3VycmVudFNoaXAsIGNoZWNrU2hpcFBsYWNlbWVudCwgbWFrZUF0dGFjaywgY29tcHV0ZXJBdHRhY2ssIGlzQ29tcHV0ZXIsIGNoZWNrVmljdG9yeSwgcGxhY2VDb21wdXRlclNoaXBzLFxuICB9O1xufTtcblxuZnVuY3Rpb24gZ2V0UmFuZG9tQ29vcmRpbmF0ZXMoKSB7XG4gIC8vIEdlbmVyYXRlIHJhbmRvbSBjb29yZGluYXRlc1xuICAvLyBnYW1lQm9yZC5jaGVja1RpbGUgc2hvdWxkIHJ0dXJuIGlmIGNvb3JkaW5hdGVzIGFyZSB2YWxpZFxuICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwKSk7XG4gIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTApKTtcbiAgcmV0dXJuIFt4LCB5XTtcbn1cblxuY29uc3QgcGFyc2VTdHJpbmdBcnJheSA9IChzdHJpbmdBcnJheSkgPT4ge1xuICBjb25zdCByYXdBcnJheSA9IHN0cmluZ0FycmF5LnNwbGl0KCcsJyk7XG4gIGNvbnN0IHJlYWwgPSBbXTtcbiAgcmF3QXJyYXkuZm9yRWFjaCgobnVtYmVyKSA9PiB7XG4gICAgcmVhbC5wdXNoKHBhcnNlSW50KG51bWJlcikpO1xuICB9KTtcbiAgcmV0dXJuIHJlYWw7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlU2hpcCwgY3JlYXRlR2FtZUJvYXJkLCBQbGF5ZXIsIHBhcnNlU3RyaW5nQXJyYXksXG59O1xuIiwiaW1wb3J0IHsgY3JlYXRlU2hpcCwgY3JlYXRlR2FtZUJvYXJkLCBQbGF5ZXIgfSBmcm9tICcuL2dhbWVfZnVuY3Rpb25zJztcbmltcG9ydCB7XG4gIGNyZWF0ZVBsYXllciwgZ2V0UGxheWVyTmFtZSwgZ2FtZUxvb3AsIHBsYWNlU2hpcCxcbn0gZnJvbSAnLi9nYW1lLmpzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5jb25zb2xlLmxvZygnTG9hZGluZyBzY3JpcHRzLi4uLicpO1xuLy8gY29uc3Qgc3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG5cbmZ1bmN0aW9uIGxvYWRTdG9yYWdlKCkge1xuICBjb25zdCBzdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZTtcbiAgcmV0dXJuIHN0b3JhZ2U7XG59XG5cbmZ1bmN0aW9uIGxvYWRQYWdlKCkge1xuICAvLyBwYXNzXG4gIGNvbnN0IHN0b3JhZ2UgPSBsb2FkU3RvcmFnZSgpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZU91dGxpbmUoKSk7XG5cbi8vICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbi8vICAgICBjb25zdCBiYW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFubmVyJyk7XG4vLyAgICAgYmFubmVyLmlubmVyVGV4dCA9ICdCYXR0bGVzaGlwJztcbi8vICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU91dGxpbmUoKSB7XG4gIC8vIHNrZWxldG9uIG91dGxpbmUgYW5kIGNvbnRhaW5lcnMgZm9yIHRoZSBwYWdlXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBiYW5uZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgZ2FtZVNwYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHBsYXllckRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250YWluZXInKTtcbiAgYmFubmVyRGl2LmNsYXNzTGlzdC5hZGQoJ2Jhbm5lcicpO1xuICBnYW1lU3BhY2UuY2xhc3NMaXN0LmFkZCgnZ2FtZS1zcGFjZScpO1xuICBwbGF5ZXJEZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1kZXRhaWxzJyk7XG5cbiAgYmFubmVyRGl2LmlubmVyVGV4dCA9ICdCYXR0bGVzaGlwISc7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChiYW5uZXJEaXYpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ2FtZVNwYWNlKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXllckRldGFpbHMpO1xuICBjb25zdCBtb2RhbCA9IGFkZE1vZGFsKCk7XG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWwpO1xuICAvLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7IC8vIGFwcGVuZGVkIHRvIGJvZHkgaW4gbG9hZHBhZ2UoKVxuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZUdhbWVTcGFjZShnYW1lU3BhY2UsIHBsYXllcnMpIHtcbiAgcGxheWVycy5mb3JFYWNoKChwbGF5ZXIpID0+IHtcbiAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IGNyZWF0ZUJvYXJkKHBsYXllcik7XG4gICAgZ2FtZVNwYWNlLmFwcGVuZENoaWxkKHBsYXllckJvYXJkKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJvYXJkKHBsYXllcikge1xuICBjb25zdCBnYW1lQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgcGxheWVyQm9hcmRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIC8vIGNvbnN0IHJvdGF0ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdyb3RhdGVCdG4nKVswXTtcbiAgZ2FtZUJvYXJkLmNsYXNzTGlzdC5hZGQoJ2dhbWUtYm9hcmQnKTtcbiAgZ2FtZUJvYXJkLnNldEF0dHJpYnV0ZSgnbmFtZScsIHBsYXllck5hbWUocGxheWVyKSk7XG4gIHBsYXllckJvYXJkSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1oZWFkZXInKTtcbiAgcGxheWVyQm9hcmRIZWFkZXIuaW5uZXJUZXh0ID0gcGxheWVyTmFtZShwbGF5ZXIpO1xuICBnYW1lQm9hcmQuYXBwZW5kQ2hpbGQocGxheWVyQm9hcmRIZWFkZXIpO1xuXG4gIGxldCBib2FyZFJvdyA9IDA7XG4gIHBsYXllci5nYW1lT2JqZWN0LnBsYXllckJvYXJkLnRpbGVzLmZvckVhY2goKHJvdykgPT4geyAvLyB2ZXJ0aWNhbCByb3cgMC05XG4gICAgY29uc3QgZ2FtZUJvYXJkUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IGJvYXJkQ29sdW1uID0gMDtcbiAgICBnYW1lQm9hcmRSb3cuY2xhc3NMaXN0LmFkZCgnZ2FtZS1ib2FyZC1yb3cnKTtcbiAgICByb3cuZm9yRWFjaCgoKSA9PiB7IC8vIGhvcml6b250YWwgY29sdW1uIDAtOVxuICAgICAgY29uc3QgYm9hcmRUaWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBib2FyZFRpbGUuY2xhc3NMaXN0LmFkZCgnZ2FtZS1ib2FyZC10aWxlJyk7XG4gICAgICBpZiAocGxheWVyLmdhbWVPYmplY3QuaXNDb21wdXRlcigpID09PSB0cnVlKSB7XG4gICAgICAgIC8vIGRhdGEtdGlsZSB2YWx1ZXMgYXJlIGNvb3JkaW5hdGVzIG9uIHRoZSBwbGF5IGdyaWRcbiAgICAgICAgLy8gZGF0YS10aWxlLXZhbHVlIGluZGljYXRlcyB0aWxlIHN0YXR1cyAtLSB0cnVlID0gb2NjdXBpZWQsIGhpdC9taXNzIGluZGljYXRlIGF0dGFja3NcbiAgICAgICAgYm9hcmRUaWxlLnNldEF0dHJpYnV0ZSgnZGF0YS10aWxlLWNvbXB1dGVyJywgW2JvYXJkUm93LCBib2FyZENvbHVtbl0pOyAvLyBjaGFuZ2UgdG8gZGF0YS10aWxlLWNvbXB1dGVyXG4gICAgICAgIGJvYXJkVGlsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGlsZS12YWx1ZScsIHBsYXllci5nYW1lT2JqZWN0LnBsYXllckJvYXJkLnRpbGVzW2JvYXJkUm93XVtib2FyZENvbHVtbl0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gYm9hcmRUaWxlLnNldEF0dHJpYnV0ZShgZGF0YS10aWxlJHtwbGF5ZXIubmFtZX1gLCBbYm9hcmRSb3csIGJvYXJkQ29sdW1uXSk7IC8vIGNoYW5nZSB0byBkYXRhLXRpbGUtcGxheWVyXG4gICAgICAgIC8vIGJvYXJkVGlsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGlsZS12YWx1ZScsIHBsYXllci5nYW1lT2JqZWN0LnBsYXllckJvYXJkLnRpbGVzW2JvYXJkUm93XVtib2FyZENvbHVtbl0pO1xuICAgICAgICBib2FyZFRpbGUuc2V0QXR0cmlidXRlKCdkYXRhLXRpbGUtcGxheWVyJywgW2JvYXJkUm93LCBib2FyZENvbHVtbl0pOyAvLyBjaGFuZ2UgdG8gZGF0YS10aWxlLXBsYXllclxuICAgICAgICBib2FyZFRpbGUuc2V0QXR0cmlidXRlKCdkYXRhLXRpbGUtdmFsdWUnLCBwbGF5ZXIuZ2FtZU9iamVjdC5wbGF5ZXJCb2FyZC50aWxlc1tib2FyZFJvd11bYm9hcmRDb2x1bW5dKTtcbiAgICAgICAgaWYgKHBsYXllci5nYW1lT2JqZWN0LnBsYXllckJvYXJkLnRpbGVzW2JvYXJkUm93XVtib2FyZENvbHVtbl0gPT09IHRydWUpIHtcbiAgICAgICAgICAvLyBNb3ZlZCBpbnNpZGUgY29uZGl0aW9uYWwgaW4gb3JkZXIgdG8gaGlkZSBjb21wdXRlciBzaGlwIGxvY2F0YXRpb25zXG4gICAgICAgICAgLy8gbW92ZSBvdXRzaWRlIHRvIHZpZXcgY29tcHV0ZXIgcGxhY2VtZW50c1xuICAgICAgICAgIGJvYXJkVGlsZS5jbGFzc0xpc3QuYWRkKCdvY2N1cGllZCcpOyAvLyBpbmRpY2F0ZXMgYSB0aWxlIGlzIG9jY3VwaWVkIGJ5IGEgc2hpcFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBjb21tZW50IG91dCB0byBoaWRlIGNvbXB1dGVyIHNoaXAgcG9zaXRpb25zICh0ZXN0aW5nKVxuICAgICAgLy8gaWYgKHBsYXllci5nYW1lT2JqZWN0LnBsYXllckJvYXJkLnRpbGVzW2JvYXJkUm93XVtib2FyZENvbHVtbl0gPT09IHRydWUpIHtcbiAgICAgIC8vICAgYm9hcmRUaWxlLmNsYXNzTGlzdC5hZGQoJ29jY3VwaWVkJyk7IC8vIGluZGljYXRlcyBhIHRpbGUgaXMgb2NjdXBpZWQgYnkgYSBzaGlwXG4gICAgICAvLyB9XG4gICAgICBnYW1lQm9hcmRSb3cuYXBwZW5kQ2hpbGQoYm9hcmRUaWxlKTtcbiAgICAgIGJvYXJkQ29sdW1uKys7XG4gICAgfSk7XG4gICAgZ2FtZUJvYXJkLmFwcGVuZENoaWxkKGdhbWVCb2FyZFJvdyk7XG4gICAgYm9hcmRSb3crKztcbiAgfSk7XG4gIHJldHVybiBnYW1lQm9hcmQ7XG59XG5cbmZ1bmN0aW9uIGFkZEJvYXJkVGlsZUxpc3RlbmVycyhwbGF5ZXIsIGNvbXB1dGVyUGxheWVyKSB7XG4gIC8vIEFkZCBoaWdobGlnaHQgc2hpcCwgcGxhY2Ugc2hpcCBsaXN0ZW5lcnMgdG8gYm9hcmQgdGlsZXMuXG4gIGNvbnN0IGJvYXJkVGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FtZS1ib2FyZC10aWxlJyk7XG4gIGJvYXJkVGlsZXMuZm9yRWFjaCgodGlsZSkgPT4ge1xuICAgIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGV2ZW50KSA9PiB7XG4gICAgICBwbGFjZVNoaXBIaWdobGlnaHQoZXZlbnQsIHBsYXllcik7XG4gICAgfSk7XG4gICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgY29uc3Qgc2hpcEdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1ncmlkJyk7XG4gICAgICBjb25zdCB0aWxlID0gYHRpbGUke3BsYXllci5uYW1lLnRvTG93ZXJDYXNlKCl9YDtcbiAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gcGFyc2VTdHJpbmdBcnJheShldmVudC5wYXRoWzBdLmRhdGFzZXQudGlsZVBsYXllcik7XG4gICAgICBjb25zdCByb3RhdGVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ3JvdGF0ZUJ0bicpWzBdLnZhbHVlO1xuICAgICAgY29uc3QgeyBjdXJyZW50U2hpcCB9ID0gcGxheWVyLmdhbWVPYmplY3Q7XG4gICAgICBjb25zdCBzaGlwID0gcGxheWVyLmdhbWVPYmplY3QucGxheWVyU2hpcHNbY3VycmVudFNoaXBdO1xuICAgICAgcGxheWVyLmdhbWVPYmplY3QucGxheWVyQm9hcmQucGxhY2VTaGlwKHNoaXAsIHNoaXAubGVuZ3RoLCBjb29yZGluYXRlcywgcm90YXRlZCk7XG5cbiAgICAgIC8vIHBsYXllci5nYW1lT2JqZWN0LmN1cnJlbnRTaGlwKys7XG4gICAgICBpZiAocGxheWVyLmdhbWVPYmplY3QuY2hlY2tTaGlwUGxhY2VtZW50KGN1cnJlbnRTaGlwKSA9PT0gdHJ1ZSkge1xuICAgICAgICAvLyBDbG9zZSBtb2RhbCwgbG9hZCBnYW1lYm9hcmRzIGFuZCBzdGFydCBnYW1lIVxuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuICAgICAgICBjb25zdCBnYW1lU3BhY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1zcGFjZScpO1xuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBwb3B1bGF0ZUdhbWVTcGFjZShnYW1lU3BhY2UsIFtwbGF5ZXIsIGNvbXB1dGVyUGxheWVyXSk7XG4gICAgICAgIGdhbWVMb29wKHBsYXllciwgY29tcHV0ZXJQbGF5ZXIpO1xuICAgICAgICAvLyBzaG91bGQgY2xvc2UgdGhlIHBsYWNlc2hpcCBncmlkIGFuZCBzdGFydCB0aGUgZ2FtZSBhdCB0aGlzIHBvaW50XG4gICAgICB9XG4gICAgICAvLyBDaGFuZ2UgY29sb3Igb2YgdGlsZXNcbiAgICAgIGFkZFNoaXBUaWxlcyhjb29yZGluYXRlcywgc2hpcC5sZW5ndGgsIHBsYXllciwgY29tcHV0ZXJQbGF5ZXIsIHJvdGF0ZWQpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlVGlsZVZhbHVlcygpIHtcbiAgLy8gQ2hhbmdlIHRoZSB0aWxlIHZhbHVlcyB3aGVuIGEgc2hpcCBpcyBwbGFjZWRcbiAgLy8gdGlsZSBzaG91bGQgaGF2ZSBhdHRyYnV0ZXMgY2hhbmdlZCB0byByZWZsZWN0IHNoaXAgb2NjdXB5bmcgc3BhY2UoY2hhbmdlIGNsYXNzKVxufVxuXG5mdW5jdGlvbiBwbGFjZVNoaXBIaWdobGlnaHQoZXZlbnQsIHBsYXllciwgc2hpcCkge1xuICBjb25zdCBlbGVtZW50SUQgPSBwYXJzZVN0cmluZ0FycmF5KFxuICAgIC8vIGV2ZW50LnRhcmdldC5kYXRhc2V0W2B0aWxlJHtwbGF5ZXIubmFtZS5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIHBsYXllci5uYW1lLnNsaWNlKDEpfWBdLFxuICAgIGV2ZW50LnRhcmdldC5kYXRhc2V0LnRpbGVQbGF5ZXIsXG4gICk7XG4gIGNvbnN0IHJvdGF0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ3JvdGF0ZUJ0bicpWzBdLnZhbHVlO1xuICBoaWdobGlnaHRTaGlwKGVsZW1lbnRJRCwgcGxheWVyLmdhbWVPYmplY3QucGxheWVyU2hpcHNbcGxheWVyLmdhbWVPYmplY3QuY3VycmVudFNoaXBdXG4gICAgLmxlbmd0aCwgcGxheWVyLCByb3RhdGlvbik7XG59XG5cbmZ1bmN0aW9uIHJvdGF0ZUJ1dHRvbigpIHtcbiAgY29uc3Qgcm90YXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHJvdGF0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcbiAgcm90YXRlQnRuLmNsYXNzTGlzdC5hZGQoJ3JvdGF0ZS1idG4nKTtcbiAgcm90YXRlQnRuLm5hbWUgPSAncm90YXRlQnRuJztcbiAgcm90YXRlQnRuLmlubmVyVGV4dCA9ICdSb3RhdGUgc2hpcCc7XG4gIHJvdGF0ZUJ0bi52YWx1ZSA9IHRydWU7XG4gIHJvdGF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAocm90YXRlQnRuLnZhbHVlID09PSAndHJ1ZScpIHtcbiAgICAgIHJvdGF0ZUJ0bi52YWx1ZSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICByb3RhdGVCdG4udmFsdWUgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByb3RhdGVCdG47XG59XG5jb25zdCBwYXJzZVN0cmluZ0FycmF5ID0gKHN0cmluZ0FycmF5KSA9PiB7XG4gIGNvbnN0IHJhd0FycmF5ID0gc3RyaW5nQXJyYXkuc3BsaXQoJywnKTtcbiAgY29uc3QgcmVhbCA9IFtdO1xuICByYXdBcnJheS5mb3JFYWNoKChudW1iZXIpID0+IHtcbiAgICByZWFsLnB1c2gocGFyc2VJbnQobnVtYmVyKSk7XG4gIH0pO1xuICByZXR1cm4gcmVhbDtcbn07XG5cbmZ1bmN0aW9uIGFkZFBsYXllckRldGFpbHMoKSB7XG4gIC8vIFBsYXllciBkZXRhaWxzIC0+IExlZ2VuZCBvZiBwbGF5ZXIgc2hpcCBhbmQgY29tcHV0ZXIgc2hpcCBzdGF0dXNcbn1cblxuZnVuY3Rpb24gYWRkTW9kYWwoKSB7XG4gIC8vIE1vZGFsIGZvciBnYW1lIHNldHVwLCBhc2sgcGxheWVyIG5hbWUsIGFuZCBwbGFjZSBzaGlwcyAocGxhY2Ugc2hpcHMgb24gbWFpbiBnYW1lIGJvYXJkKVxuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpO1xuICBtb2RhbC5hcHBlbmRDaGlsZChhZGROYW1lUHJvbXB0KG1vZGFsKSk7XG4gIHJldHVybiBtb2RhbDtcbn1cblxuZnVuY3Rpb24gYWRkTmFtZVByb21wdChtb2RhbCkge1xuICAvLyBQcm9tcHQgdGhlIHBsYXllciBmb3IgdGhlaXIgbmFtZVxuICBjb25zdCBuYW1lUHJvbXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgaGVhZGVyLmlubmVyVGV4dCA9ICdCYXR0bGVzdGF0aW9ucyEhJztcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1zbScpO1xuICBuYW1lSW5wdXQucGxhY2Vob2xkZXIgPSAnUGxlYXNlIGVudGVyIHlvdXIgbmFtZS4nO1xuICBzdWJtaXRCdG4uaW5uZXJUZXh0ID0gJ1N1Ym1pdCc7XG5cbiAgbmFtZVByb21wdC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1ib3gnKTtcbiAgbmFtZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2lucHV0Jyk7XG4gIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKCdidG4nKTtcblxuICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgcGxheWVyID0gY3JlYXRlUGxheWVyKG5hbWVJbnB1dC52YWx1ZSwgZmFsc2UpO1xuICAgIGNvbnN0IGNvbXB1dGVyUGxheWVyID0gY3JlYXRlUGxheWVyKCdDb21wdXRlcicsIHRydWUpO1xuICAgIGNvbXB1dGVyUGxheWVyLmdhbWVPYmplY3QucGxhY2VDb21wdXRlclNoaXBzKCk7XG4gICAgY29uc3QgZ2FtZVNwYWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtc3BhY2UnKTtcbiAgICAvLyBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIG5hbWVQcm9tcHQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChwbGFjZVNoaXBNZW51KHBsYXllcikpO1xuICAgIGFkZEJvYXJkVGlsZUxpc3RlbmVycyhwbGF5ZXIsIGNvbXB1dGVyUGxheWVyKTtcbiAgfSk7XG4gIG5hbWVQcm9tcHQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgbmFtZVByb21wdC5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xuICBuYW1lUHJvbXB0LmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG4gIHJldHVybiBuYW1lUHJvbXB0O1xufVxuXG5mdW5jdGlvbiBwbGFjZVNoaXBNZW51KHBsYXllcikge1xuICAvLyBNb2RhbCBtZW51IGZvciBwbGFjaW5nIHNoaXBzIG9uIHRoZSBwYWx5ZXJzIGdyaWQgYXQgdGhlIHN0YXJ0IG9mIHRoZSBnYW1lLlxuICBjb25zdCBjdXJyZW50U2hpcCA9IHBsYXllci5nYW1lT2JqZWN0LnBsYXllclNoaXBzW3BsYXllci5nYW1lT2JqZWN0LmN1cnJlbnRTaGlwXS5zaGlwVHlwZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKVxuICAgICsgcGxheWVyLmdhbWVPYmplY3QucGxheWVyU2hpcHNbcGxheWVyLmdhbWVPYmplY3QuY3VycmVudFNoaXBdLnNoaXBUeXBlLnNsaWNlKDEpO1xuICBjb25zdCBzaGlwR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBjaG9vc2VTaGlwRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgLy8gY29uc3Qgc2hpcEluZGV4ID0gMDtcbiAgc2hpcEdyaWQuY2xhc3NMaXN0LmFkZCgnc2hpcC1ncmlkJyk7XG4gIGNob29zZVNoaXBEaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1zbScpO1xuICBzaGlwR3JpZC5pbm5lckhUTUwgPSAnJztcbiAgY2hvb3NlU2hpcERpc3BsYXkuaW5uZXJUZXh0ID0gYERlcGxveSB5b3VyICR7Y3VycmVudFNoaXB9YDtcbiAgc2hpcEdyaWQuYXBwZW5kQ2hpbGQoY2hvb3NlU2hpcERpc3BsYXkpO1xuICBzaGlwR3JpZC5hcHBlbmRDaGlsZChyb3RhdGVCdXR0b24oKSk7XG4gIHNoaXBHcmlkLmFwcGVuZENoaWxkKGNyZWF0ZUJvYXJkKHBsYXllcikpO1xuXG4gIGNvbnN0IGJvYXJkID0gY3JlYXRlQm9hcmQocGxheWVyKTtcbiAgY29uc29sZS5sb2coYm9hcmQpO1xuXG4gIHJldHVybiBzaGlwR3JpZDtcbn1cblxuZnVuY3Rpb24gcGxhY2VTaGlwTGlzdGVuZXJzKCkge1xuICAvLyBXaGVuIGEgcGxheWVyIGNsaWNrcyBvbiBWQUxJRCBzcGFjZSwgcGxhY2UgYSBzaGlwLCB0aGVuIGluY3JlbWVudCB0byB0aGUgbmV4dCBzaGlwLCB3aGVuIHRoZVxuICAvLyBmaW5hbCBzaGlwIGlzIHBsYWNlZCwgY2xvc2Ugc2hpcCBwbGFjZW1lbnQgZ3JpZCBhbmQgbG9hZCBnYW1lIGJvYXJkcy5cbiAgY29uc3QgYm9hcmRUaWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2dhbWUtYm9hcmQtdGlsZScpO1xuICBib2FyZFRpbGVzLmZvckVhY2goKHRpbGUpID0+IHtcbiAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcGxhY2VTaGlwKHNoaXAsIHNoaXBMZW5ndGgsIHBsYXllciwgcm90YXRpb24pO1xuICAgICAgLy8gaW5jcmVtZW50IHRvIHRoZSBuZXh0IHNoaXBcbiAgICAgIHBsYXllclNoaXBzICs9IDE7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTaGlwVGlsZXMoY29vcmRpbmF0ZXMsIHNoaXBMZW5ndGgsIHBsYXllciwgY29tcHV0ZXJQbGF5ZXIsIHJvdGF0ZWQpIHtcbiAgLy8gV2hlbiBzaGlwcyBhcmUgcGxhY2VkLCB0aGVpciBzaGFwZXMgc2hvdWxkIHBlcnNpc3Qgb24gdGhlIGdhbWVib2FyZFxuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuICBpZiAocm90YXRlZCA9PT0gJ3RydWUnKSB7XG4gICAgcGVybUluY3JlbWVudFkoY29vcmRpbmF0ZXMsIHNoaXBMZW5ndGgsIHBsYXllcik7IC8vIGFkZCBzaGlwIHRvIGdyaWRcbiAgICBtb2RhbC5pbm5lckhUTUwgPSAnJzsgLy8gcmVzZXQgbW9kYWxcbiAgICBwbGF5ZXIuZ2FtZU9iamVjdC5jdXJyZW50U2hpcCsrO1xuICAgIG1vZGFsLmFwcGVuZENoaWxkKHBsYWNlU2hpcE1lbnUocGxheWVyKSk7IC8vIHVwZGF0ZSBjaGFuZ2VzIHRvIGdyaWRcbiAgICBhZGRCb2FyZFRpbGVMaXN0ZW5lcnMocGxheWVyLCBjb21wdXRlclBsYXllcik7XG4gIH0gZWxzZSB7XG4gICAgcGVybUluY3JlbWVudFgoY29vcmRpbmF0ZXMsIHNoaXBMZW5ndGgsIHBsYXllcik7XG4gICAgbW9kYWwuaW5uZXJIVE1MID0gJyc7XG4gICAgcGxheWVyLmdhbWVPYmplY3QuY3VycmVudFNoaXArKztcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChwbGFjZVNoaXBNZW51KHBsYXllcikpO1xuICAgIGFkZEJvYXJkVGlsZUxpc3RlbmVycyhwbGF5ZXIsIGNvbXB1dGVyUGxheWVyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwZXJtSW5jcmVtZW50WShlbGVtZW50SUQsIHNoaXBMZW5ndGgsIHBsYXllcikge1xuICAvLyBIZWxwZXIgZm9yIGhpZ2hsaWdoU2hpcCgpXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRpbGUtcGxheWVyPScke1tlbGVtZW50SURbMF0gKyBpLCBlbGVtZW50SURbMV1dfSddYCk7XG4gICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0ZWQnKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRpbGUtcGxheWVyPScke1tlbGVtZW50SURbMF0gKyBpLCBlbGVtZW50SURbMV1dfSddYCk7IC8vIGFkanVzdCBvbiB2ZXJ0aWNhbCBheGlzXG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkJyk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZygnVGhlcmUgaXMgbm8gc3F1YXJlJyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHBlcm1JbmNyZW1lbnRYKGVsZW1lbnRJRCwgc2hpcExlbmd0aCwgcGxheWVyKSB7XG4gIC8vIEhlbHBlciBmb3IgaGlnaGxpZ2hTaGlwKClcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGlsZS1wbGF5ZXI9JyR7W2VsZW1lbnRJRFswXSwgZWxlbWVudElEWzFdICsgaV19J11gKTtcbiAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHRlZCcpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGlsZS1wbGF5ZXI9JyR7W2VsZW1lbnRJRFswXSwgZWxlbWVudElEWzFdICsgaV19J11gKTsgLy8gYWRqdXN0IG9uIHZlcnRpY2FsIGF4aXNcbiAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQnKTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKCdUaGVyZSBpcyBubyBzcXVhcmUnKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIHBsYXllck5hbWUocGxheWVyKSB7XG4gIGlmIChwbGF5ZXIuZ2FtZU9iamVjdC5pc0NvbXB1dGVyKCkgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIHBsYXllci5uYW1lO1xuICB9XG4gIHJldHVybiAnQ29tcHV0ZXInO1xufVxuXG5mdW5jdGlvbiBoaWdobGlnaHRTaGlwKGVsZW1lbnRJRCwgc2hpcExlbmd0aCwgcGxheWVyLCByb3RhdGVkLCBwbGFjZWQpIHtcbiAgLy8gSGlnaGxpZ2h0cyBhICdzaGlwJyBwbGFjZW1lbnQgd2hlbiBtb3ZpbmcgdGhlIGN1cnNvciBvdmVyIHRoZSBnYW1lYm9hcmRcbiAgaWYgKHJvdGF0ZWQgPT09ICd0cnVlJykge1xuICAgIGluY3JlbWVudFkoZWxlbWVudElELCBzaGlwTGVuZ3RoLCBwbGF5ZXIpO1xuICB9IGVsc2Uge1xuICAgIGluY3JlbWVudFgoZWxlbWVudElELCBzaGlwTGVuZ3RoLCBwbGF5ZXIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluY3JlbWVudFkoZWxlbWVudElELCBzaGlwTGVuZ3RoLCBwbGF5ZXIpIHtcbiAgLy8gSGVscGVyIGZvciBoaWdobGlnaFNoaXAoKVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10aWxlLXBsYXllcj0nJHtbZWxlbWVudElEWzBdICsgaSwgZWxlbWVudElEWzFdXX0nXWApO1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodGVkJyk7XG4gICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgcmVtb3ZlU3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGlsZS1wbGF5ZXI9JyR7W2VsZW1lbnRJRFswXSArIGksIGVsZW1lbnRJRFsxXV19J11gKTtcbiAgICAgICAgICByZW1vdmVTcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0ZWQnKTtcbiAgICAgICAgICByZW1vdmVTcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRpbGUtcGxheWVyPScke1tlbGVtZW50SURbMF0gKyBpLCBlbGVtZW50SURbMV1dfSddYCk7IC8vIGFkanVzdCBvbiB2ZXJ0aWNhbCBheGlzXG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkJyk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZygnVGhlcmUgaXMgbm8gc3F1YXJlJyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGluY3JlbWVudFgoZWxlbWVudElELCBzaGlwTGVuZ3RoLCBwbGF5ZXIpIHtcbiAgLy8gSGVscGVyIGZvciBoaWdobGlnaFNoaXAoKVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10aWxlLXBsYXllcj0nJHtbZWxlbWVudElEWzBdLCBlbGVtZW50SURbMV0gKyBpXX0nXWApO1xuICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodGVkJyk7XG4gICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgcmVtb3ZlU3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGlsZS1wbGF5ZXI9JyR7W2VsZW1lbnRJRFswXSwgZWxlbWVudElEWzFdICsgaV19J11gKTtcbiAgICAgICAgICByZW1vdmVTcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0ZWQnKTtcbiAgICAgICAgICByZW1vdmVTcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRpbGUtcGxheWVyPScke1tlbGVtZW50SURbMF0sIGVsZW1lbnRJRFsxXSArIGldfSddYCk7IC8vIGFkanVzdCBvbiB2ZXJ0aWNhbCBheGlzXG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkJyk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZygnVGhlcmUgaXMgbm8gc3F1YXJlJyk7XG4gICAgfVxuICB9XG59XG5sb2FkUGFnZSgpO1xuXG5leHBvcnQge1xuICBjcmVhdGVCb2FyZCxcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=