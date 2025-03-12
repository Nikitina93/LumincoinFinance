/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst config ={\n    api: 'http://localhost:3000/api'\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);\n\n\n//# sourceURL=webpack://frontend/./config/config.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/common.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/common.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../static/images/next.png */ \"./src/static/images/next.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../static/images/prev.png */ \"./src/static/images/prev.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../static/fonts/Roboto-Regular.ttf */ \"./src/static/fonts/Roboto-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../static/fonts/Roboto-Medium.ttf */ \"./src/static/fonts/Roboto-Medium.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../static/fonts/Roboto-Bold.ttf */ \"./src/static/fonts/Roboto-Bold.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../static/fonts/Inter-Bold.otf */ \"./src/static/fonts/Inter-Bold.otf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n  height: 100vh;\n}\n\n.sidebar {\n  bottom: 0;\n  float: right;\n  left: 0;\n  position: fixed;\n  top: 0;\n  z-index: 2;\n}\n\n.sidebar-background {\n  background-color: #ffffff;\n}\n\n.sidebar-logo {\n  padding: 40px 70px 20px 50px;\n}\n\n.sidebar-menu {\n  padding: 60px 20px 0 20px;\n}\n\n.btn-toggle:not(.collapsed) svg {\n  transform: rotate(90deg);\n}\n\n.btn-toggle.collapsed svg {\n  transform: rotate(0deg);\n}\n\n.path-svg {\n  margin-left: 72px;\n}\n\n.active svg path {\n  fill: #FFFFFF;\n}\n\n.sidebar-balance {\n  padding: 10px 10px 20px 20px;\n}\n\n.user-panel {\n  padding: 20px 10px 40px 20px;\n  position: relative;\n}\n\n.dropdown-menu {\n  position: absolute;\n  margin: 0;\n  transform: translate3d(0px, -36px, 0px);\n}\n\n.dropdown-item {\n  font-size: 14px;\n}\n\n.bg-border-light {\n  border-color: #d9d9d9;\n}\n\n.nav-item {\n  border: none;\n  border-radius: 5px;\n}\n\n.link-custom {\n  color: #052c65;\n}\n\n.nav-item:hover {\n  background: #0D6EFD;\n}\n\n.nav-item:hover a {\n  color: #FFFFFF;\n}\n\n.nav-item:hover button {\n  color: #FFFFFF;\n}\n\n.nav-item:hover svg path {\n  fill: #FFFFFF;\n}\n\n.collapse {\n  border-top: none;\n  border-right: 1px solid #0D6EFD;\n  border-left: 1px solid #0D6EFD;\n  border-bottom: 1px solid #0D6EFD;\n  border-radius: 0 0 5px 5px;\n  font-family: Roboto, sans-serif;\n  font-size: 14px;\n  line-height: 16px;\n  color: #0D6EFD !important;\n}\n\n.collapse-item:hover a {\n  background: #0D6EFD;\n  color: #FFFFFF;\n}\n\n.btn.disabled, .btn:disabled, fieldset:disabled .btn {\n  background-color: #72a5f1;\n  border: #72a5f1;\n}\n\n.dropdown-toggle::after {\n  content: none;\n}\n\n.collapse:not(.show) {\n  display: none;\n}\n\n.dropdown-menu:not(.show) {\n  display: none;\n}\n\n.user-info-item {\n  margin-left: 16px;\n}\n\n.dropdown-item {\n  display: flex;\n}\n\n.dropdown-item-text {\n  font-family: Roboto, sans-serif;\n  font-size: 14px;\n  line-height: 24px;\n  color: #052C65;\n}\n\n.dropdown-item-svg {\n  width: 15px;\n}\n\n.dropdown-item:hover {\n  background-color: #0D6EFD;\n}\n\n.dropdown-item:hover span {\n  color: #FFFFFF;\n}\n\n.dropdown-item:hover svg path {\n  fill: #FFFFFF;\n}\n\n.main-title {\n  margin-bottom: 20px;\n}\n\n.main-filter {\n  margin-bottom: 140px;\n  margin-left: 48px;\n}\n\n.main-filter-block {\n  margin-right: 20px;\n}\n\n.filter-button {\n  border: 1px solid #6C757D;\n  font-family: Roboto-Medium, sans-serif;\n  font-size: 16px;\n  line-height: 19px;\n  color: #6C757D;\n  width: 100px !important;\n}\n\n.main-filter-block span {\n  margin-right: 5px;\n}\n\n.input-filter-block {\n  width: 90px;\n  border: none;\n  font-family: Roboto-Medium, sans-serif;\n  font-size: 16px;\n  line-height: 19px;\n  text-align: center;\n  text-decoration-line: underline;\n  color: #6C757D;\n  outline: none;\n  cursor: pointer;\n  margin-left: 5px;\n  margin-right: 15px;\n}\n\n.input-filter-block:hover {\n  color: #565e64;\n}\n\n.input-filter-block:hover::placeholder {\n  color: #565e64;\n}\n\n.ui-datepicker .ui-datepicker-prev {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  background-size: cover;\n}\n\n.ui-datepicker .ui-datepicker-next {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n  background-size: cover;\n}\n\n.btn.active {\n  color: #FFFFFF;\n  background-color: #6C757D;\n}\n\n.categories {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(121px, 352px));\n  gap: 20px;\n  margin-left: 48px;\n}\n\n.box {\n  padding: 20px;\n  border-radius: 12px;\n  border: 1px solid #CED4DA;\n}\n\n.action {\n  display: flex;\n  margin-top: 10px;\n}\n\n.action-box-btn {\n  display: flex;\n  padding: 11px 16px;\n  font-size: 14px;\n  border: none;\n  text-align: center;\n  color: #FFFFFF;\n}\n\n.edit {\n  width: 134px;\n  height: 38px;\n  background: #0D6EFD;\n  border-radius: 5px;\n  margin-right: 10px;\n}\n\n.delete {\n  width: 88px;\n  height: 38px;\n  background: #DC3545;\n  border-radius: 5px;\n}\n\n.empty-box {\n  display: flex;\n  justify-content: center;\n}\n\n.plus {\n  background-color: transparent;\n  border: none;\n  font-size: 28px;\n  color: #CED4DA;\n  margin: auto;\n}\n\n.pop-up {\n  display: none;\n}\n\n.pop-up.open {\n  display: block;\n}\n\n.pop-up.close {\n  display: none;\n}\n\n.pop-up__container {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  left: 0;\n  top: 0;\n  background-color: rgba(0, 0, 0, 0.4509803922);\n  z-index: 2;\n  justify-content: center;\n  align-items: center;\n}\n\n.pop-up__body {\n  background-color: #FFFFFF;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n  padding: 40px;\n  margin: 0 auto;\n  width: 530px;\n  border-radius: 10px;\n  position: relative;\n}\n\n.pop-up-action {\n  display: flex;\n}\n\n.pop-up__text {\n  text-align: center;\n  display: flex;\n  font-size: 20px;\n  line-height: 23px;\n  color: #290661;\n  margin-bottom: 20px;\n}\n\n.pop-up__button {\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  list-style: none;\n  border: none;\n  border-radius: 40px;\n  background-color: rgb(221, 49, 66);\n  font-size: 20px;\n  padding: 11px 0 11px 0;\n  width: 100px;\n  color: #FFFFFF;\n  cursor: pointer;\n}\n\n.btn-action {\n  padding: 11px 16px;\n  border: none;\n  border-radius: 5px;\n  font-size: 14px;\n  line-height: 16px;\n  text-align: center;\n  color: #FFFFFF;\n}\n\n.green-btn {\n  background-color: #198754;\n  margin-right: 12px;\n}\n\n.red-btn {\n  background-color: #DC3545;\n  margin-right: 12px;\n}\n\n.options-block {\n  margin-left: 48px;\n}\n\n.option-input {\n  width: 397px;\n  margin-bottom: 20px;\n  font-family: Roboto, sans-serif;\n  font-size: 15px;\n  line-height: 24px;\n  color: #000000;\n}\n\n.option-input::placeholder {\n  font-family: Roboto, sans-serif;\n  font-size: 15px;\n  line-height: 24px;\n  color: #6C757D;\n}\n\n.operations-active {\n  margin-bottom: 40px;\n  margin-left: 48px;\n}\n\n.options-filter {\n  margin-bottom: 40px !important;\n}\n\n.options-table {\n  padding: 15px;\n  place-items: center;\n  margin-top: 40px;\n  margin-left: 48px;\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  border-top: 1px solid #DEE2E6;\n  border-bottom: 1px solid #DEE2E6;\n}\n\n.table-option {\n  font-family: Roboto-Bold, sans-serif;\n  font-size: 16px;\n  line-height: 19px;\n  color: #052C65;\n  justify-content: center;\n}\n\n@font-face {\n  font-family: \"Roboto\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\n}\n@font-face {\n  font-family: \"Roboto-Medium\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_3___});\n  font-weight: 500;\n}\n@font-face {\n  font-family: \"Roboto-Bold\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_4___});\n  font-weight: 700;\n}\n@font-face {\n  font-family: \"Inder-Bold\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_5___});\n  font-weight: 700;\n}\nbody {\n  font-family: \"Roboto\", sans-serif;\n  overflow: auto;\n}\n\ncanvas {\n  margin: 0 auto;\n  width: 444px !important;\n  height: 444px !important;\n}\n\n.form-container {\n  height: 100%;\n}\n\n.form-logo {\n  margin-bottom: 60px;\n}\n\n.form-control {\n  border-top-right-radius: 0.375rem !important;\n  border-bottom-right-radius: 0.375rem !important;\n}\n\n.input-group:not(.has-validation) > .dropdown-toggle:nth-last-child(n+3), .input-group:not(.has-validation) > .form-floating:not(:last-child) > .form-control, .input-group:not(.has-validation) > .form-floating:not(:last-child) > .form-select, .input-group:not(.has-validation) > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.input-group {\n  margin-bottom: 10px;\n  font-size: 15px;\n  line-height: 24px;\n}\n\n.input-group input::placeholder {\n  color: #6C757D;\n}\n\n.form-check {\n  margin-bottom: 20px;\n}\n\n.form-text {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 12px;\n  line-height: 14px;\n}\n\n.form-button {\n  font-family: Roboto-Medium, sans-serif;\n  background: #0D6EFD;\n  margin-bottom: 10px;\n}\n\n.form-link {\n  font-family: Roboto, sans-serif;\n  text-decoration-line: underline;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\n.section {\n  margin-left: 219px;\n}\n\n.fs-12 {\n  font-size: 12px;\n}\n\n.fs-14 {\n  font-size: 14px;\n}\n\n.fs-15 {\n  font-size: 15px;\n}\n\n.form-container {\n  height: 100%;\n}\n\nform {\n  width: 397px;\n  margin: 0 auto;\n}\n\n.title {\n  font-family: \"Roboto-Medium\", sans-serif;\n  font-size: 40px;\n  line-height: 47px;\n  color: #052c65;\n}\n\n.title-block {\n  padding: 100px 0 40px 0;\n  margin-left: 48px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://frontend/./src/styles/common.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://frontend/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://frontend/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://frontend/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/common.scss":
/*!********************************!*\
  !*** ./src/styles/common.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_common_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./common.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/common.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_common_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_common_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_common_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_common_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://frontend/./src/styles/common.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://frontend/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://frontend/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://frontend/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://frontend/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://frontend/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://frontend/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_common_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/common.scss */ \"./src/styles/common.scss\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router */ \"./src/router.js\");\n\n\n\nclass App{\n    constructor() {\n        new _router__WEBPACK_IMPORTED_MODULE_1__.Router();\n    }\n}\n\n(new App());\n\n//# sourceURL=webpack://frontend/./src/app.js?");

/***/ }),

/***/ "./src/components/pages/auth/login.js":
/*!********************************************!*\
  !*** ./src/components/pages/auth/login.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Login: () => (/* binding */ Login)\n/* harmony export */ });\n/* harmony import */ var _utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/auth-utils */ \"./src/utils/auth-utils.js\");\n/* harmony import */ var _utils_http_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/http-utils */ \"./src/utils/http-utils.js\");\n\n\n\nclass Login {\n    constructor(openNewRoute) {\n        this.openNewRoute = openNewRoute;\n\n\n        if (_utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__.AuthUtils.getAuthInfo(_utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__.AuthUtils.userKey)) {\n            return this.openNewRoute('/');\n        }\n\n        this.emailElement = document.getElementById('email');\n        this.passwordElement = document.getElementById('password');\n        this.svgEmailElement = document.getElementById('svg');\n        this.svgPasswordElement = document.getElementById('svg-second');\n        this.rememberMeElement = document.getElementById('rememberMe');\n        this.commonErrorElement = document.getElementById('common-error');\n\n        document.getElementById('process-button').addEventListener('click', this.login.bind(this));\n    }\n\n    validateForm() {\n        let isValid = true;\n        if (this.emailElement.value && this.emailElement.value.match(/^\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$/)) {\n            this.emailElement.classList.remove('is-invalid');\n        } else {\n            this.emailElement.classList.add('is-invalid');\n            this.svgEmailElement.style.borderColor = 'red';\n            isValid = false;\n        }\n        if (this.passwordElement.value) {\n            this.passwordElement.classList.remove('is-invalid');\n        } else {\n            this.passwordElement.classList.add('is-invalid');\n            this.svgPasswordElement.style.borderColor = 'red';\n            isValid = false;\n        }\n        return isValid\n    }\n\n    async login() {\n        this.commonErrorElement.style.display = 'none';\n        if (this.validateForm()) {\n\n            const result = await _utils_http_utils__WEBPACK_IMPORTED_MODULE_1__.HttpUtils.request('/login', 'POST',{\n                email: this.emailElement.value,\n                password: this.passwordElement.value,\n                rememberMe: this.rememberMeElement.checked\n            });\n\n            if (result.error || !result.response || (result.response && (!result.response.tokens\n                || !result.response.user.name || !result.response.user.lastName || !result.response.user.id))) {\n                this.commonErrorElement.style.display = 'block';\n                return;\n            }\n\n            _utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__.AuthUtils.setTokens(\n                {\n                    accessToken: result.response.tokens.accessToken\n                },\n                {\n                    refreshToken: result.response.tokens.refreshToken\n                }\n            );\n            _utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__.AuthUtils.setUser(\n                {\n                    name: result.response.user.name,\n                    lastname: result.response.user.lastName,\n                    id: result.response.user.id\n                }\n            )\n\n            this.openNewRoute('/');\n        }\n\n    }\n}\n\n//# sourceURL=webpack://frontend/./src/components/pages/auth/login.js?");

/***/ }),

/***/ "./src/components/pages/auth/logout.js":
/*!*********************************************!*\
  !*** ./src/components/pages/auth/logout.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Logout: () => (/* binding */ Logout)\n/* harmony export */ });\n/* harmony import */ var _utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/auth-utils */ \"./src/utils/auth-utils.js\");\n/* harmony import */ var _utils_http_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/http-utils */ \"./src/utils/http-utils.js\");\n\n\n\nclass Logout {\n    constructor(openNewRoute) {\n\n        this.openNewRoute = openNewRoute;\n\n\n        if (!_utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__.AuthUtils.getAuthInfo(_utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__.AuthUtils.tokensKey)) {\n            return this.openNewRoute('/login');\n        }\n\n        this.logout().then();\n    }\n\n    async logout() {\n        await _utils_http_utils__WEBPACK_IMPORTED_MODULE_1__.HttpUtils.request('/logout', 'POST',{\n            tokens: _utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__.AuthUtils.getAuthInfo(_utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__.AuthUtils.tokensKey),\n        });\n\n\n        _utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__.AuthUtils.removeAuthInfo();\n\n        this.openNewRoute('/login');\n    }\n\n\n}\n\n//# sourceURL=webpack://frontend/./src/components/pages/auth/logout.js?");

/***/ }),

/***/ "./src/components/pages/auth/sign-up.js":
/*!**********************************************!*\
  !*** ./src/components/pages/auth/sign-up.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SignUp: () => (/* binding */ SignUp)\n/* harmony export */ });\n/* harmony import */ var _utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/auth-utils */ \"./src/utils/auth-utils.js\");\n/* harmony import */ var _utils_http_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/http-utils */ \"./src/utils/http-utils.js\");\n\n\n\nclass SignUp {\n    constructor(openNewRoute) {\n        this.openNewRoute = openNewRoute;\n\n        if (_utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__.AuthUtils.getAuthInfo(_utils_auth_utils__WEBPACK_IMPORTED_MODULE_0__.AuthUtils.userKey)) {\n            return this.openNewRoute('/');\n        }\n\n        this.nameElement = document.getElementById('name');\n        this.lastNameElement = document.getElementById('lastName');\n        this.emailElement = document.getElementById('email');\n        this.passwordElement = document.getElementById('password');\n        this.passwordRepeatElement = document.getElementById('passwordRepeat');\n        this.svgNameElement = document.getElementById('svg');\n        this.svgLastNameElement = document.getElementById('svg-first');\n        this.svgEmailElement = document.getElementById('svg-second');\n        this.svgPasswordElement = document.getElementById('svg-third');\n        this.svgPasswordRepeatElement = document.getElementById('svg-four');\n        this.commonErrorElement = document.getElementById('common-error');\n\n        document.getElementById('process-button').addEventListener('click', this.signUp.bind(this));\n    }\n\n    validateForm() {\n        let isValid = true;\n\n        if (this.nameElement.value) {\n            this.passwordElement.classList.remove('is-invalid');\n        } else {\n            this.nameElement.classList.add('is-invalid');\n            this.svgNameElement.style.borderColor = 'red';\n            isValid = false;\n        }\n\n        if (this.lastNameElement.value) {\n            this.lastNameElement.classList.remove('is-invalid');\n        } else {\n            this.lastNameElement.classList.add('is-invalid');\n            this.svgLastNameElement.style.borderColor = 'red';\n            isValid = false;\n        }\n\n        if (this.emailElement.value && this.emailElement.value.match(/^\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$/)) {\n            this.emailElement.classList.remove('is-invalid');\n        } else {\n            this.emailElement.classList.add('is-invalid');\n            this.svgEmailElement.style.borderColor = 'red';\n            isValid = false;\n        }\n\n        if (this.passwordElement.value && this.passwordElement.value.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\\W)(?!.* ).{8,}$/)) {\n            this.passwordElement.classList.remove('is-invalid');\n        } else {\n            this.passwordElement.classList.add('is-invalid');\n            this.svgPasswordElement.style.borderColor = 'red';\n            isValid = false;\n        }\n\n        if (this.passwordRepeatElement.value && this.passwordRepeatElement.value === this.passwordElement.value) {\n            this.passwordRepeatElement.classList.remove('is-invalid');\n        } else {\n            this.passwordRepeatElement.classList.add('is-invalid');\n            this.svgPasswordRepeatElement.style.borderColor = 'red';\n            isValid = false;\n        }\n        return isValid\n    }\n\n    async signUp() {\n        this.commonErrorElement.style.display = 'none';\n        if (this.validateForm()) {\n\n\n            const result = await _utils_http_utils__WEBPACK_IMPORTED_MODULE_1__.HttpUtils.request('/signup', 'POST',{\n                name: this.nameElement.value,\n                lastName: this.lastNameElement.value,\n                email: this.emailElement.value,\n                password: this.passwordElement.value,\n                passwordRepeat: this.passwordRepeatElement.value\n            });\n\n\n            if (result.error || !result.response || (result.response && ( !result.response.user.name\n                || !result.response.user.lastName || !result.response.user.id || !result.response.user.email))){\n                this.commonErrorElement.style.display = 'block';\n                return;\n            }\n\n\n\n            this.openNewRoute('/login');\n        }\n\n\n    }\n}\n\n//# sourceURL=webpack://frontend/./src/components/pages/auth/sign-up.js?");

/***/ }),

/***/ "./src/components/pages/expenses/creat-expenses.js":
/*!*********************************************************!*\
  !*** ./src/components/pages/expenses/creat-expenses.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CreatExpenses: () => (/* binding */ CreatExpenses)\n/* harmony export */ });\nclass CreatExpenses{\n    constructor() {\n    }\n}\n\n//# sourceURL=webpack://frontend/./src/components/pages/expenses/creat-expenses.js?");

/***/ }),

/***/ "./src/components/pages/expenses/edit-expenses.js":
/*!********************************************************!*\
  !*** ./src/components/pages/expenses/edit-expenses.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EditExpenses: () => (/* binding */ EditExpenses)\n/* harmony export */ });\nclass EditExpenses{\n    constructor() {\n    }\n}\n\n//# sourceURL=webpack://frontend/./src/components/pages/expenses/edit-expenses.js?");

/***/ }),

/***/ "./src/components/pages/expenses/expenses.js":
/*!***************************************************!*\
  !*** ./src/components/pages/expenses/expenses.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Expenses: () => (/* binding */ Expenses)\n/* harmony export */ });\nclass Expenses{\n    constructor() {\n        this.init();\n        this.createElement();\n        this.editIncome();\n        this.activateBlock();\n    }\n\n    init () {\n        this.deleteButton = document.getElementById('delete');\n        this.notAgreeButton = document.getElementById('not-agree-button');\n        this.creationElement = document.getElementById('creation');\n        this.editElement = document.getElementById('edit');\n\n\n        this.deleteButton.addEventListener('click', this.openPopUp);\n        this.notAgreeButton.addEventListener('click', this.closePopUp);\n    }\n\n    openPopUp() {\n        let popUp = document.getElementById('pop-up');\n        popUp.classList.add('open');\n\n    }\n\n    closePopUp() {\n        let popUp = document.getElementById('pop-up');\n        popUp.classList.remove('open');\n    }\n\n    createElement() {\n        this.creationElement.addEventListener('click', function () {\n            location.href = '/creat-expenses';\n        })\n    }\n\n    editIncome() {\n        this.editElement.addEventListener('click', function () {\n            location.href = '/edit-expenses';\n        })\n    }\n\n    activateBlock(){\n        const categoryButton = document.getElementById('toggle');\n        const collapse = document.getElementById('dashboard-collapse');\n        const expensesCollapse = document.getElementById('expenses-collapse');\n        const svgCollapse = document.getElementById('collapsed-svg');\n        categoryButton.onclick\n        categoryButton.setAttribute(\"aria-expanded\", \"true\");\n        categoryButton.classList.remove('collapsed');\n        categoryButton.style.borderRadius = '5px 5px 0px 0px';\n        categoryButton.classList.add('active');\n        svgCollapse.classList.add('active');\n        expensesCollapse.classList.add('active');\n        collapse.classList.add('show');\n    }\n\n\n}\n\n//# sourceURL=webpack://frontend/./src/components/pages/expenses/expenses.js?");

/***/ }),

/***/ "./src/components/pages/incomes/creat-income.js":
/*!******************************************************!*\
  !*** ./src/components/pages/incomes/creat-income.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CreatIncome: () => (/* binding */ CreatIncome)\n/* harmony export */ });\nclass CreatIncome{\n    constructor() {\n    }\n}\n\n//# sourceURL=webpack://frontend/./src/components/pages/incomes/creat-income.js?");

/***/ }),

/***/ "./src/components/pages/incomes/edit-income.js":
/*!*****************************************************!*\
  !*** ./src/components/pages/incomes/edit-income.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EditIncome: () => (/* binding */ EditIncome)\n/* harmony export */ });\nclass EditIncome{\n    constructor() {\n    }\n}\n\n//# sourceURL=webpack://frontend/./src/components/pages/incomes/edit-income.js?");

/***/ }),

/***/ "./src/components/pages/incomes/incomes.js":
/*!*************************************************!*\
  !*** ./src/components/pages/incomes/incomes.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Incomes: () => (/* binding */ Incomes)\n/* harmony export */ });\n/* harmony import */ var _utils_http_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/http-utils */ \"./src/utils/http-utils.js\");\n\n\nclass Incomes {\n    constructor() {\n\n\n        this.init();\n        this.createElement();\n        this.editIncome();\n        this.activateBlock();\n    }\n\n    init() {\n        this.deleteButton = document.getElementById('delete');\n        this.notAgreeButton = document.getElementById('not-agree-button');\n        this.creationElement = document.getElementById('creation');\n        this.editElement = document.getElementById('edit');\n\n\n        this.deleteButton.addEventListener('click', this.openPopUp);\n        this.notAgreeButton.addEventListener('click', this.closePopUp);\n    }\n\n    openPopUp() {\n        let popUp = document.getElementById('pop-up');\n        popUp.classList.add('open');\n\n    }\n\n    closePopUp() {\n        let popUp = document.getElementById('pop-up');\n        popUp.classList.remove('open');\n    }\n\n    createElement() {\n        this.creationElement.addEventListener('click', function () {\n            location.href = '/creat-income';\n        })\n    }\n\n    editIncome() {\n        this.editElement.addEventListener('click', function () {\n            location.href = '/edit-income';\n        })\n    }\n\n    activateBlock() {\n        const categoryButton = document.getElementById('toggle');\n        const collapse = document.getElementById('dashboard-collapse');\n        const incomesCollapse = document.getElementById('incomes-collapse');\n        const svgCollapse = document.getElementById('collapsed-svg');\n        categoryButton.onclick;\n        categoryButton.setAttribute(\"aria-expanded\", \"true\");\n        categoryButton.classList.remove('collapsed');\n        categoryButton.style.borderRadius = '5px 5px 0px 0px';\n        categoryButton.classList.add('active');\n        svgCollapse.classList.add('active');\n        incomesCollapse.classList.add('active');\n        collapse.classList.add('show');\n\n    }\n\n\n}\n\n//# sourceURL=webpack://frontend/./src/components/pages/incomes/incomes.js?");

/***/ }),

/***/ "./src/components/pages/main.js":
/*!**************************************!*\
  !*** ./src/components/pages/main.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Main: () => (/* binding */ Main)\n/* harmony export */ });\nclass Main {\n    constructor() {\n        this.pieChart();\n        this.dateSelection();\n        this.activateBlock();\n        this.activateButton();\n    }\n\n    pieChart() {\n        const myChart = document.getElementById('myChart');\n        let legend = {\n            labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],\n            datasets: [{\n                data: [12, 19, 3, 5, 2],\n                backgroundColor: ['#DC3545', '#FD7E14', '#FFC107', '#20C997', '#0D6EFD'],\n            }]\n        }\n        let newChart = new Chart(myChart, {\n            type: 'pie',\n            data: legend\n        })\n\n\n        const myChartSecond = document.getElementById('myPieChart');\n        let legendSecond = {\n            labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],\n            datasets: [{\n                data: [12, 19, 3, 5, 2],\n                backgroundColor: ['#DC3545', '#FD7E14', '#FFC107', '#20C997', '#0D6EFD'],\n            }]\n        }\n        let ChartSecond = new Chart(myChartSecond, {\n            type: 'pie',\n            data: legendSecond\n        })\n    }\n\n    dateSelection() {\n        $(function () {\n            $(\"#datepicker-first\").datepicker({\n                dateFormat: 'dd-mm-yy',\n                language: 'russian'\n            });\n            $(\"#datepicker-second\").datepicker({\n                dateFormat: 'dd-mm-yy',\n            });\n        });\n        $.datepicker.regional['ru'] = {\n            closeText: 'Закрыть',\n            prevText: 'Пред',\n            nextText: 'След',\n            currentText: 'Сегодня',\n            monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',\n                'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],\n            monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',\n                'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],\n            dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],\n            dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],\n            dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],\n            weekHeader: 'Нед',\n            dateFormat: 'dd.mm.yy',\n            firstDay: 1,\n            isRTL: false,\n            showMonthAfterYear: false,\n            yearSuffix: ''\n        };\n        $.datepicker.setDefaults($.datepicker.regional['ru']);\n    }\n\n    activateBlock() {\n        const mainButton = document.getElementById('main');\n        const svgMain = document.getElementById('svg-main');\n        const categoryButton = document.getElementById('toggle');\n        const svgCollapse = document.getElementById('collapsed-svg');\n        mainButton.onclick\n        mainButton.classList.add('active');\n        svgMain.classList.add('active');\n\n        categoryButton.addEventListener('click', function () {\n            mainButton.classList.remove('active');\n            svgMain.classList.remove('active');\n            categoryButton.classList.add('active');\n            categoryButton.style.borderRadius = '5px 5px 0px 0px';\n            svgCollapse.classList.add('active');\n        })\n    }\n\n    activateButton() {\n        const todayButton = document.getElementById('main-button-today');\n        const weekButton = document.getElementById('main-button-week');\n        const monthButton = document.getElementById('main-button-month');\n        const yearButton = document.getElementById('main-button-year');\n        const allButton = document.getElementById('main-button-all');\n        const intervalButton = document.getElementById('main-button-interval');\n        const inputDate = document.getElementById('datepicker-first');\n        const inputDateFirst = document.getElementById('datepicker-second');\n\n        todayButton.addEventListener('click', function () {\n            todayButton.classList.add('active');\n            weekButton.classList.remove('active');\n            monthButton.classList.remove('active');\n            yearButton.classList.remove('active');\n            allButton.classList.remove('active');\n            intervalButton.classList.remove('active');\n            inputDate.disabled = true;\n            inputDate.value = '';\n            inputDateFirst.disabled =true;\n            inputDateFirst.value = '';\n        });\n\n        weekButton.addEventListener('click', function () {\n            weekButton.classList.add('active');\n            todayButton.classList.remove('active');\n            monthButton.classList.remove('active');\n            yearButton.classList.remove('active');\n            allButton.classList.remove('active');\n            intervalButton.classList.remove('active');\n            inputDate.disabled = true;\n            inputDate.value = '';\n            inputDateFirst.disabled =true;\n            inputDateFirst.value = '';\n        });\n\n        monthButton.addEventListener('click', function () {\n            monthButton.classList.add('active');\n            todayButton.classList.remove('active');\n            weekButton.classList.remove('active');\n            yearButton.classList.remove('active');\n            allButton.classList.remove('active');\n            intervalButton.classList.remove('active');\n            inputDate.disabled = true;\n            inputDate.value = '';\n            inputDateFirst.disabled =true;\n            inputDateFirst.value = '';\n        });\n\n        yearButton.addEventListener('click', function () {\n            yearButton.classList.add('active');\n            todayButton.classList.remove('active');\n            weekButton.classList.remove('active');\n            monthButton.classList.remove('active');\n            allButton.classList.remove('active');\n            intervalButton.classList.remove('active');\n            inputDate.disabled = true;\n            inputDate.value = '';\n            inputDateFirst.disabled =true;\n            inputDateFirst.value = '';\n        });\n\n        allButton.addEventListener('click', function () {\n            allButton.classList.add('active');\n            todayButton.classList.remove('active');\n            weekButton.classList.remove('active');\n            monthButton.classList.remove('active');\n            yearButton.classList.remove('active');\n            intervalButton.classList.remove('active');\n            inputDate.disabled = true;\n            inputDate.value = '';\n            inputDateFirst.disabled =true;\n            inputDateFirst.value = '';\n        });\n\n        intervalButton.addEventListener('click', function () {\n            intervalButton.classList.add('active');\n            todayButton.classList.remove('active');\n            weekButton.classList.remove('active');\n            monthButton.classList.remove('active');\n            yearButton.classList.remove('active');\n            allButton.classList.remove('active');\n            inputDate.removeAttribute('disabled');\n            inputDateFirst.removeAttribute('disabled');\n        });\n    }\n}\n\n//# sourceURL=webpack://frontend/./src/components/pages/main.js?");

/***/ }),

/***/ "./src/components/pages/options/creat-operation.js":
/*!*********************************************************!*\
  !*** ./src/components/pages/options/creat-operation.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CreatOperation: () => (/* binding */ CreatOperation)\n/* harmony export */ });\nclass CreatOperation {\n    constructor() {\n    }\n}\n\n//# sourceURL=webpack://frontend/./src/components/pages/options/creat-operation.js?");

/***/ }),

/***/ "./src/components/pages/options/edit-operation.js":
/*!********************************************************!*\
  !*** ./src/components/pages/options/edit-operation.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EditOperation: () => (/* binding */ EditOperation)\n/* harmony export */ });\nclass EditOperation {\n    constructor() {\n    }\n\n}\n\n//# sourceURL=webpack://frontend/./src/components/pages/options/edit-operation.js?");

/***/ }),

/***/ "./src/components/pages/options/operations.js":
/*!****************************************************!*\
  !*** ./src/components/pages/options/operations.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Operations: () => (/* binding */ Operations)\n/* harmony export */ });\n/* harmony import */ var _utils_http_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/http-utils */ \"./src/utils/http-utils.js\");\n\n\nclass Operations {\n    constructor() {\n        this.creatingIncome = document.getElementById('creating-income');\n        this.creatingExpense = document.getElementById('creating-expense');\n\n\n        this.createIncome();\n        this.editIncomeExpenses();\n        this.dateSelection();\n        this.activateBlock();\n        this.activateButton();\n    }\n\n    createIncome() {\n        this.creatingIncome.addEventListener('click', function () {\n            location.href = '/creat-operation';\n        })\n    }\n\n    editIncomeExpenses() {\n        this.creatingExpense.addEventListener('click', function () {\n            location.href = '/creat-operation';\n        })\n    }\n\n    dateSelection() {\n        $(function () {\n            $(\"#datepicker\").datepicker({\n                dateFormat: 'dd-mm-yy',\n                language: 'russian'\n            });\n            $(\"#datepicker-one\").datepicker({\n                dateFormat: 'dd-mm-yy',\n            });\n        });\n        $.datepicker.regional['ru'] = {\n            closeText: 'Закрыть',\n            prevText: 'Пред',\n            nextText: 'След',\n            currentText: 'Сегодня',\n            monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',\n                'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],\n            monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',\n                'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],\n            dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],\n            dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],\n            dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],\n            weekHeader: 'Нед',\n            dateFormat: 'dd.mm.yy',\n            firstDay: 1,\n            isRTL: false,\n            showMonthAfterYear: false,\n            yearSuffix: ''\n        };\n        $.datepicker.setDefaults($.datepicker.regional['ru']);\n    }\n\n    activateBlock() {\n\n        const categoryButton = document.getElementById('toggle');\n        const optionsButton = document.getElementById('options');\n        const svgOptions = document.getElementById('svg-options');\n        const svgCollapse = document.getElementById('collapsed-svg');\n        optionsButton.onclick\n        optionsButton.classList.add('active');\n        svgOptions.classList.add('active')\n\n        categoryButton.addEventListener('click', function () {\n            optionsButton.classList.remove('active');\n            svgOptions.classList.remove('active');\n            categoryButton.classList.add('active');\n            categoryButton.style.borderRadius = '5px 5px 0px 0px';\n            svgCollapse.classList.add('active');\n        })\n    }\n\n    activateButton() {\n        const todayButton = document.getElementById('main-button-today');\n        const weekButton = document.getElementById('main-button-week');\n        const monthButton = document.getElementById('main-button-month');\n        const yearButton = document.getElementById('main-button-year');\n        const allButton = document.getElementById('main-button-all');\n        const intervalButton = document.getElementById('main-button-interval');\n        const inputDate = document.getElementById('datepicker');\n        const inputDateFirst = document.getElementById('datepicker-one');\n\n        todayButton.addEventListener('click', function () {\n            todayButton.classList.add('active');\n            weekButton.classList.remove('active');\n            monthButton.classList.remove('active');\n            yearButton.classList.remove('active');\n            allButton.classList.remove('active');\n            intervalButton.classList.remove('active');\n            inputDate.disabled = true;\n            inputDate.value = '';\n            inputDateFirst.disabled =true;\n            inputDateFirst.value = '';\n        });\n\n        weekButton.addEventListener('click', function () {\n            weekButton.classList.add('active');\n            todayButton.classList.remove('active');\n            monthButton.classList.remove('active');\n            yearButton.classList.remove('active');\n            allButton.classList.remove('active');\n            intervalButton.classList.remove('active');\n            inputDate.disabled = true;\n            inputDate.value = '';\n            inputDateFirst.disabled =true;\n            inputDateFirst.value = '';\n        });\n\n        monthButton.addEventListener('click', function () {\n            monthButton.classList.add('active');\n            todayButton.classList.remove('active');\n            weekButton.classList.remove('active');\n            yearButton.classList.remove('active');\n            allButton.classList.remove('active');\n            intervalButton.classList.remove('active');\n            inputDate.disabled = true;\n            inputDate.value = '';\n            inputDateFirst.disabled =true;\n            inputDateFirst.value = '';\n        });\n\n        yearButton.addEventListener('click', function () {\n            yearButton.classList.add('active');\n            todayButton.classList.remove('active');\n            weekButton.classList.remove('active');\n            monthButton.classList.remove('active');\n            allButton.classList.remove('active');\n            intervalButton.classList.remove('active');\n            inputDate.disabled = true;\n            inputDate.value = '';\n            inputDateFirst.disabled =true;\n            inputDateFirst.value = '';\n        });\n\n        allButton.addEventListener('click', function () {\n            allButton.classList.add('active');\n            todayButton.classList.remove('active');\n            weekButton.classList.remove('active');\n            monthButton.classList.remove('active');\n            yearButton.classList.remove('active');\n            intervalButton.classList.remove('active');\n            inputDate.disabled = true;\n            inputDate.value = '';\n            inputDateFirst.disabled =true;\n            inputDateFirst.value = '';\n        });\n\n        intervalButton.addEventListener('click', function () {\n            intervalButton.classList.add('active');\n            todayButton.classList.remove('active');\n            weekButton.classList.remove('active');\n            monthButton.classList.remove('active');\n            yearButton.classList.remove('active');\n            allButton.classList.remove('active');\n            inputDate.removeAttribute('disabled');\n            inputDateFirst.removeAttribute('disabled');\n        });\n    }\n\n    async getOptions(){\n        const result = await _utils_http_utils__WEBPACK_IMPORTED_MODULE_0__.HttpUtils.request('/operations');\n\n        if (result.error || !result.response || (result.response &&\n            (result.response.error || !result.response.operations))) {\n            return alert('Возникла ошибка при запросе доходов и расходов. Обратитесь в поддержку');\n        }\n        this.showRecords(result.response.operations);\n\n\n    }\n\n    showRecords(operations){\n        console.log(operations);\n    }\n}\n\n//# sourceURL=webpack://frontend/./src/components/pages/options/operations.js?");

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Router: () => (/* binding */ Router)\n/* harmony export */ });\n/* harmony import */ var _components_pages_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/pages/main */ \"./src/components/pages/main.js\");\n/* harmony import */ var _components_pages_incomes_incomes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/pages/incomes/incomes */ \"./src/components/pages/incomes/incomes.js\");\n/* harmony import */ var _components_pages_incomes_creat_income__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pages/incomes/creat-income */ \"./src/components/pages/incomes/creat-income.js\");\n/* harmony import */ var _components_pages_incomes_edit_income__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pages/incomes/edit-income */ \"./src/components/pages/incomes/edit-income.js\");\n/* harmony import */ var _components_pages_expenses_expenses__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pages/expenses/expenses */ \"./src/components/pages/expenses/expenses.js\");\n/* harmony import */ var _components_pages_expenses_creat_expenses__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pages/expenses/creat-expenses */ \"./src/components/pages/expenses/creat-expenses.js\");\n/* harmony import */ var _components_pages_expenses_edit_expenses__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pages/expenses/edit-expenses */ \"./src/components/pages/expenses/edit-expenses.js\");\n/* harmony import */ var _components_pages_options_operations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pages/options/operations */ \"./src/components/pages/options/operations.js\");\n/* harmony import */ var _components_pages_options_creat_operation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pages/options/creat-operation */ \"./src/components/pages/options/creat-operation.js\");\n/* harmony import */ var _components_pages_options_edit_operation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/pages/options/edit-operation */ \"./src/components/pages/options/edit-operation.js\");\n/* harmony import */ var _components_pages_auth_login__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/pages/auth/login */ \"./src/components/pages/auth/login.js\");\n/* harmony import */ var _components_pages_auth_sign_up__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pages/auth/sign-up */ \"./src/components/pages/auth/sign-up.js\");\n/* harmony import */ var _components_pages_auth_logout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/pages/auth/logout */ \"./src/components/pages/auth/logout.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nclass Router {\n    constructor() {\n        this.titlePageElement = document.getElementById('title');\n        this.contentPageElement = document.getElementById('content');\n\n\n        this.initEvents();\n\n        this.routes = [\n            {\n                route: '/',\n                title: 'Главная',\n                filePathTemplate: '/templates/pages/main.html',\n                useLayout: '/templates/layout.html',\n                load: () => {\n                    new _components_pages_main__WEBPACK_IMPORTED_MODULE_0__.Main();\n                }\n            },\n            {\n                route: '/login',\n                title: 'Авторизация',\n                filePathTemplate: '/templates/pages/auth/login.html',\n                useLayout: false,\n                load: () => {\n                    new _components_pages_auth_login__WEBPACK_IMPORTED_MODULE_10__.Login(this.openNewRoute.bind(this));\n                }\n            },\n            {\n                route: '/sign-up',\n                title: 'Регистрация',\n                filePathTemplate: '/templates/pages/auth/sign-up.html',\n                useLayout: false,\n                load: () => {\n                    new _components_pages_auth_sign_up__WEBPACK_IMPORTED_MODULE_11__.SignUp(this.openNewRoute.bind(this));\n                }\n            },\n            {\n                route: '/logout',\n                load: () => {\n                    new _components_pages_auth_logout__WEBPACK_IMPORTED_MODULE_12__.Logout(this.openNewRoute.bind(this))\n                }\n            },\n            {\n                route: '/incomes',\n                title: 'Доходы',\n                filePathTemplate: '/templates/pages/incomes/incomes.html',\n                useLayout: '/templates/layout.html',\n                load: () => {\n                    new _components_pages_incomes_incomes__WEBPACK_IMPORTED_MODULE_1__.Incomes();\n                }\n            },\n            {\n                route: '/creat-income',\n                title: 'Создание дохода',\n                filePathTemplate: '/templates/pages/incomes/creat-income.html',\n                useLayout: '/templates/layout.html',\n                load: () => {\n                    new _components_pages_incomes_creat_income__WEBPACK_IMPORTED_MODULE_2__.CreatIncome();\n                }\n            },\n            {\n                route: '/edit-income',\n                title: 'Редактирвание дохода',\n                filePathTemplate: '/templates/pages/incomes/edit-income.html',\n                useLayout: '/templates/layout.html',\n                load: () => {\n                    new _components_pages_incomes_edit_income__WEBPACK_IMPORTED_MODULE_3__.EditIncome();\n                }\n            },\n            {\n                route: '/expenses',\n                title: 'Расходы',\n                filePathTemplate: '/templates/pages/expenses/expenses.html',\n                useLayout: '/templates/layout.html',\n                load: () => {\n                    new _components_pages_expenses_expenses__WEBPACK_IMPORTED_MODULE_4__.Expenses();\n                }\n            },\n            {\n                route: '/creat-expenses',\n                title: 'Создание расхода',\n                filePathTemplate: '/templates/pages/expenses/creat-expenses.html',\n                useLayout: '/templates/layout.html',\n                load: () => {\n                    new _components_pages_expenses_creat_expenses__WEBPACK_IMPORTED_MODULE_5__.CreatExpenses();\n                }\n            },\n            {\n                route: '/edit-expenses',\n                title: 'Редактирование расхода',\n                filePathTemplate: '/templates/pages/expenses/edit-expenses.html',\n                useLayout: '/templates/layout.html',\n                load: () => {\n                    new _components_pages_expenses_edit_expenses__WEBPACK_IMPORTED_MODULE_6__.EditExpenses();\n                }\n            },\n            {\n                route: '/operations',\n                title: 'Доходы & Расходы',\n                filePathTemplate: '/templates/pages/operations/operations.html',\n                useLayout: '/templates/layout.html',\n                load: () => {\n                    new _components_pages_options_operations__WEBPACK_IMPORTED_MODULE_7__.Operations();\n                }\n            },\n            {\n                route: '/creat-operation',\n                title: 'Создание дохода/расхода',\n                filePathTemplate: '/templates/pages/operations/creat-operation.html',\n                useLayout: '/templates/layout.html',\n                load: () => {\n                    new _components_pages_options_creat_operation__WEBPACK_IMPORTED_MODULE_8__.CreatOperation();\n                }\n            },\n            {\n                route: '/edit-operation',\n                title: 'Редактирование дохода/расхода',\n                filePathTemplate: '/templates/pages/operations/edit-operation.html',\n                useLayout: '/templates/layout.html',\n                load: () => {\n                    new _components_pages_options_edit_operation__WEBPACK_IMPORTED_MODULE_9__.EditOperation();\n                }\n            },\n        ];\n    }\n\n    initEvents() {\n        window.addEventListener('DOMContentLoaded', this.activateRoute.bind(this));\n        window.addEventListener('popstate', this.activateRoute.bind(this));\n        document.addEventListener('click', this.clickHandler.bind(this));\n    }\n\n    async openNewRoute(url) {\n        const currentRoute = window.location.pathname;\n        history.pushState({}, '', url);  // чтобы в историю браузера добавить url-адреса)\n        await this.activateRoute(null, currentRoute);\n    }\n\n    async clickHandler(e) {\n        let element = null;\n        if (e.target.nodeName === 'A') {\n            element = e.target;\n        } else if (e.target.parentNode.nodeName === 'A') {\n            element = e.target.parentNode;\n        }\n\n        if (element) {\n            e.preventDefault();\n\n            const url = element.href.replace(window.location.origin, '');\n            if (!url || url === '/#' || url.startsWith('javascript:void(0)')) {\n                return\n            }\n\n            await this.openNewRoute(url);\n        }\n    }\n\n    async activateRoute() {\n        const urlRoute = window.location.pathname;\n        const newRoute = this.routes.find(item => item.route === urlRoute);\n\n\n        if (newRoute) {\n            if (newRoute.title) {\n                this.titlePageElement.innerText = newRoute.title + ' | Lumincoin Finance';\n            }\n            if (newRoute.filePathTemplate) {\n                let contentBlock = this.contentPageElement;\n\n                if (newRoute.useLayout) {\n                    this.contentPageElement.innerHTML = await fetch(newRoute.useLayout).then(response => response.text());\n                    contentBlock = document.getElementById('content-layout');\n                } else {\n                    this.contentPageElement = document.getElementById('content');\n                }\n                contentBlock.innerHTML = await fetch(newRoute.filePathTemplate).then(response => response.text());\n            }\n            if (newRoute.load && typeof newRoute.load === 'function') {\n                newRoute.load();\n            }\n        } else {\n            console.log('No route found');\n            history.pushState({}, '', '/');  // чтобы в историю браузера добавить url-адреса)\n            await this.activateRoute();\n        }\n    }\n\n}\n\n//# sourceURL=webpack://frontend/./src/router.js?");

/***/ }),

/***/ "./src/utils/auth-utils.js":
/*!*********************************!*\
  !*** ./src/utils/auth-utils.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthUtils: () => (/* binding */ AuthUtils)\n/* harmony export */ });\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/config */ \"./config/config.js\");\n\r\n\r\nclass AuthUtils {\r\n    static accessTokenKey = 'accessToken';\r\n    static refreshTokenKey = 'refreshToken';\r\n    static userKey = 'user';\r\n\r\n\r\n    static setTokens(accessToken, refreshToken) {\r\n        localStorage.setItem(this.accessTokenKey, JSON.stringify((accessToken)));\r\n        localStorage.setItem(this.refreshTokenKey, JSON.stringify((refreshToken)));\r\n    }\r\n\r\n    static setUser(user){\r\n        localStorage.setItem(this.userKey, JSON.stringify((user)));\r\n    }\r\n\r\n    static removeAuthInfo() {\r\n        localStorage.removeItem(this.refreshTokenKey);\r\n        localStorage.removeItem(this.userKey);\r\n    }\r\n\r\n    static getAuthInfo(key = null) {\r\n        if(key && [this.userKey, this.accessTokenKey, this.refreshTokenKey].includes(key)){\r\n            return localStorage.getItem(key);\r\n        }else{\r\n            return{\r\n                [this.accessTokenKey]: localStorage.getItem((this.accessTokenKey)),\r\n                [this.refreshTokenKey]: localStorage.getItem((this.refreshTokenKey)),\r\n                [this.userKey]: localStorage.getItem((this.userKey)),\r\n            }\r\n        }\r\n    }\r\n\r\n\r\n}\n\n//# sourceURL=webpack://frontend/./src/utils/auth-utils.js?");

/***/ }),

/***/ "./src/utils/http-utils.js":
/*!*********************************!*\
  !*** ./src/utils/http-utils.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HttpUtils: () => (/* binding */ HttpUtils)\n/* harmony export */ });\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/config */ \"./config/config.js\");\n/* harmony import */ var _auth_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-utils */ \"./src/utils/auth-utils.js\");\n\r\n\r\n\r\n\r\nclass HttpUtils {\r\n    static async request(url, method = \"GET\", body = null) {\r\n        const result = {\r\n            error: false,\r\n            response: null\r\n        }\r\n        const params = {\r\n            method: method,\r\n            headers: {\r\n                'Content-type': 'application/json',\r\n                'Accept': 'application/json',\r\n            },\r\n        };\r\n        let token = localStorage.getItem(_auth_utils__WEBPACK_IMPORTED_MODULE_1__.AuthUtils.accessTokenKey);\r\n        if(token){\r\n            params.headers['x-access-token'] = token;\r\n        }\r\n\r\n        if (body) {\r\n            params.body = JSON.stringify(body)\r\n        }\r\n        let response = null;\r\n        try {\r\n            response = await fetch(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].api + url, params);\r\n            result.response = await response.json();\r\n        } catch (e) {\r\n            result.error = true;\r\n            return result;\r\n        }\r\n\r\n        if (response.status < 200 || response.status >= 300) {\r\n            result.error = true;\r\n        }\r\n        return result;\r\n    }\r\n}\n\n//# sourceURL=webpack://frontend/./src/utils/http-utils.js?");

/***/ }),

/***/ "./src/static/fonts/Inter-Bold.otf":
/*!*****************************************!*\
  !*** ./src/static/fonts/Inter-Bold.otf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5e4c6b10da30695d3497.otf\";\n\n//# sourceURL=webpack://frontend/./src/static/fonts/Inter-Bold.otf?");

/***/ }),

/***/ "./src/static/fonts/Roboto-Bold.ttf":
/*!******************************************!*\
  !*** ./src/static/fonts/Roboto-Bold.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c13d0c4f45623629e371.ttf\";\n\n//# sourceURL=webpack://frontend/./src/static/fonts/Roboto-Bold.ttf?");

/***/ }),

/***/ "./src/static/fonts/Roboto-Medium.ttf":
/*!********************************************!*\
  !*** ./src/static/fonts/Roboto-Medium.ttf ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"58a88fefc100ccf3cf59.ttf\";\n\n//# sourceURL=webpack://frontend/./src/static/fonts/Roboto-Medium.ttf?");

/***/ }),

/***/ "./src/static/fonts/Roboto-Regular.ttf":
/*!*********************************************!*\
  !*** ./src/static/fonts/Roboto-Regular.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d08b3cc873089fdba7fb.ttf\";\n\n//# sourceURL=webpack://frontend/./src/static/fonts/Roboto-Regular.ttf?");

/***/ }),

/***/ "./src/static/images/next.png":
/*!************************************!*\
  !*** ./src/static/images/next.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4c031df5279b8d23c72f.png\";\n\n//# sourceURL=webpack://frontend/./src/static/images/next.png?");

/***/ }),

/***/ "./src/static/images/prev.png":
/*!************************************!*\
  !*** ./src/static/images/prev.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3ea9777a3740b61d0a54.png\";\n\n//# sourceURL=webpack://frontend/./src/static/images/prev.png?");

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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;