"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Quiz__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Quiz */ \"(app-pages-browser)/./src/components/Quiz/index.tsx\");\n/* harmony import */ var _components_FormContact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/FormContact */ \"(app-pages-browser)/./src/components/FormContact/index.tsx\");\n/* harmony import */ var _config_quiz__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/config/quiz */ \"(app-pages-browser)/./src/config/quiz.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"flex flex-col items-center justify-center gap-4 py-8 md:py-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-4\",\n                children: _config_quiz__WEBPACK_IMPORTED_MODULE_3__.question.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Quiz__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        handleAnswer: ()=>console.log(\"res\"),\n                        question: item.question,\n                        options: item.options\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\CG_LAB118\\\\Desktop\\\\git\\\\astro\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 6\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\CG_LAB118\\\\Desktop\\\\git\\\\astro\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 12,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormContact__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\CG_LAB118\\\\Desktop\\\\git\\\\astro\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 16,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\CG_LAB118\\\\Desktop\\\\git\\\\astro\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 9,\n        columnNumber: 3\n    }, this);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ3lDO0FBQ1U7QUFDVjtBQUcxQixTQUFTRztJQUN2QixxQkFDQyw4REFBQ0M7UUFBUUMsV0FBVTs7MEJBR2xCLDhEQUFDQztnQkFBSUQsV0FBVTswQkFDYkgsa0RBQVFBLENBQUNLLEdBQUcsQ0FBQ0MsQ0FBQUEscUJBQ2IsOERBQUNSLHdEQUFRQTt3QkFBQ1MsY0FBYyxJQUFLQyxRQUFRQyxHQUFHLENBQUM7d0JBQVFULFVBQVVNLEtBQUtOLFFBQVE7d0JBQUVVLFNBQVNKLEtBQUtJLE9BQU87Ozs7Ozs7Ozs7OzBCQUVoRyw4REFBQ1gsK0RBQVdBOzs7Ozs7Ozs7OztBQUdoQjtLQVp3QkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLnRzeD9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgUXVlc3Rpb24gZnJvbSBcIkAvY29tcG9uZW50cy9RdWl6XCI7XHJcbmltcG9ydCBDb250YWN0Rm9ybSBmcm9tIFwiQC9jb21wb25lbnRzL0Zvcm1Db250YWN0XCI7XHJcbmltcG9ydCB7IHF1ZXN0aW9uIH0gZnJvbSBcIkAvY29uZmlnL3F1aXpcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtNCBweS04IG1kOnB5LTEwXCI+XHJcblx0XHRcdFxyXG5cdFx0XHRcdFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTRcIj5cclxuXHRcdFx0XHR7cXVlc3Rpb24ubWFwKGl0ZW09PiBcclxuXHRcdFx0XHRcdDxRdWVzdGlvbiBoYW5kbGVBbnN3ZXI9eygpPT4gY29uc29sZS5sb2coJ3JlcycpfSBxdWVzdGlvbj17aXRlbS5xdWVzdGlvbn0gb3B0aW9ucz17aXRlbS5vcHRpb25zfSAvPlxyXG5cdFx0XHRcdCl9PC9kaXY+XHJcblx0XHRcdFx0PENvbnRhY3RGb3JtIC8+XHJcblx0XHQ8L3NlY3Rpb24+XHJcblx0KTtcclxufVxyXG4iXSwibmFtZXMiOlsiUXVlc3Rpb24iLCJDb250YWN0Rm9ybSIsInF1ZXN0aW9uIiwiSG9tZSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJtYXAiLCJpdGVtIiwiaGFuZGxlQW5zd2VyIiwiY29uc29sZSIsImxvZyIsIm9wdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});