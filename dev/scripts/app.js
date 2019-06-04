/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controllers_position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/position */ \"./src/controllers/position.js\");\n/* harmony import */ var _controllers_position__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_controllers_position__WEBPACK_IMPORTED_MODULE_0__);\n// const posConstroller = require('./controllers/position')\n\nposConstroller.renderList();\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/controllers/position.js":
/*!*************************************!*\
  !*** ./src/controllers/position.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// const indexTpl = require('../views/index.html')\n// const BScroll = require('better-scroll').default\nexports.loadData = function () {\n  return $.ajax({\n    url: '/api/listmore.json?pageNo=1&pageSize=15',\n    type: 'get',\n    success: function success(result) {\n      return result;\n    }\n  });\n};\n\nexports.renderList = function () {} // let result = await this.loadData()\n// let data = result.content.data.page.result\n// let renderedIndexTpl = template.render(indexTpl, { data })\n// $('#app').html(renderedIndexTpl)\n// // Better scroll 实例化\n// let bScroll = new BScroll('#index-scroll', {\n//   probeType: 1\n// })\n// let head = $('.head img'),\n//   topImgHasClass = head.hasClass('up')\n// let foot = $('.foot img'),\n//   bottomImgHasClass = head.hasClass('down')\n// // 初始化位置\n// bScroll.scrollTo(0, 40)\n// // 绑定滑动事件\n// bScroll.on('scroll', function () {\n//   let y = this.y\n//   let maxY = this.maxScrollY - y\n//   // 下拉，当隐藏的loading完全显示的时候触发\n//   if (y >= 0) {\n//     !topImgHasClass && head.addClass('up')\n//     return\n//   }\n//   // 上拉，当滚动到最底部时候触发\n//   if ( maxY >=0 ) {\n//     !bottomImgHasClass && foot.addClass('down')\n//     return\n//   }\n// })\n// // 绑定手指松开触发的事件\n// bScroll.on('scrollEnd', function() {\n//   // 下拉刷新处理\n//   if (this.y >= -40 && this.y < 0) {\n//     this.scrollTo(0, -40)\n//     head.removeClass('up')\n//   } else if (this.y >= 0) {\n//     head.attr('src', '/images/ajax-loader.gif')\n//     // 异步加载数据\n//   }\n//   // 下拉加载处理\n//   let maxY = this.maxScrollY - this.y\n//   if (maxY > -40 && maxY < 0) {\n//       this.scrollTo(0, this.maxScrollY + 40);\n//       foot.removeClass('down')\n//   } else if (maxY >= 0) {\n//       foot.attr('src', '/images/ajax-loader.gif')\n//   }\n// })\n// module.exports = {\n//   renderList,\n//   loadData\n// }\n;\n\n//# sourceURL=webpack:///./src/controllers/position.js?");

/***/ }),

/***/ 0:
/*!**************************!*\
  !*** multi ./src/app.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/app.js */\"./src/app.js\");\n\n\n//# sourceURL=webpack:///multi_./src/app.js?");

/***/ })

/******/ });