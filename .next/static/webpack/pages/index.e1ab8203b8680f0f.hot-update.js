"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/projects/ProjectSingle.jsx":
/*!***********************************************!*\
  !*** ./components/projects/ProjectSingle.jsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst imageStyle = {\n    maxWidth: \"100%\",\n    height: \"auto\"\n};\nconst ProjectSingle = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        initial: {\n            opacity: 0\n        },\n        animate: {\n            opacity: 1,\n            delay: 1\n        },\n        transition: {\n            ease: \"easeInOut\",\n            duration: 0.7,\n            delay: 0.15\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: props.url !== \"\" ? props.url : \"/projects/\" + props.id,\n            // as={'/projects/' + props.id}\n            \"aria-label\": \"Single Project\",\n            passHref: true,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-48 overflow-hidden\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.img, {\n                            src: props.img,\n                            className: \"rounded-t-xl border-none w-full\",\n                            alt: \"Single Project\",\n                            layout: \"responsive\",\n                            width: 100,\n                            whileHover: {\n                                scale: 1.05\n                            },\n                            transition: {\n                                duration: 0.5\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\fasna\\\\work\\\\others\\\\portfolio-nextJs\\\\components\\\\projects\\\\ProjectSingle.jsx\",\n                            lineNumber: 26,\n                            columnNumber: 7\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\fasna\\\\work\\\\others\\\\portfolio-nextJs\\\\components\\\\projects\\\\ProjectSingle.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 6\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"px-4 py-2 h-36 flex flex-col justify-between items-start\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"font-general-medium uppercase text-xl md:text-2xl text-ternary-dark dark:text-ternary-light mb-2\",\n                                        children: props.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\fasna\\\\work\\\\others\\\\portfolio-nextJs\\\\components\\\\projects\\\\ProjectSingle.jsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 8\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-left\",\n                                        children: props.subtitle\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\fasna\\\\work\\\\others\\\\portfolio-nextJs\\\\components\\\\projects\\\\ProjectSingle.jsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 8\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\fasna\\\\work\\\\others\\\\portfolio-nextJs\\\\components\\\\projects\\\\ProjectSingle.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-lg text-ternary-dark dark:text-ternary-light w-fit bg-blue-200 dark:bg-blue-700 rounded-md px-2 py-1 text-sm\",\n                                children: props.category\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\fasna\\\\work\\\\others\\\\portfolio-nextJs\\\\components\\\\projects\\\\ProjectSingle.jsx\",\n                                lineNumber: 44,\n                                columnNumber: 7\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\fasna\\\\work\\\\others\\\\portfolio-nextJs\\\\components\\\\projects\\\\ProjectSingle.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 6\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\fasna\\\\work\\\\others\\\\portfolio-nextJs\\\\components\\\\projects\\\\ProjectSingle.jsx\",\n                lineNumber: 24,\n                columnNumber: 5\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\fasna\\\\work\\\\others\\\\portfolio-nextJs\\\\components\\\\projects\\\\ProjectSingle.jsx\",\n            lineNumber: 18,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\fasna\\\\work\\\\others\\\\portfolio-nextJs\\\\components\\\\projects\\\\ProjectSingle.jsx\",\n        lineNumber: 9,\n        columnNumber: 3\n    }, undefined);\n};\n_c = ProjectSingle;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectSingle);\nvar _c;\n$RefreshReg$(_c, \"ProjectSingle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2plY3RzL1Byb2plY3RTaW5nbGUuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBdUM7QUFDUjtBQUNGO0FBRTdCLE1BQU1HLGFBQWE7SUFBRUMsVUFBVTtJQUFRQyxRQUFRO0FBQU87QUFFdEQsTUFBTUMsZ0JBQWdCLENBQUNDLFFBQVU7SUFDaEMscUJBQ0MsOERBQUNQLHFEQUFVO1FBQ1ZTLFNBQVM7WUFBRUMsU0FBUztRQUFFO1FBQ3RCQyxTQUFTO1lBQUVELFNBQVM7WUFBR0UsT0FBTztRQUFFO1FBQ2hDQyxZQUFZO1lBQ1hDLE1BQU07WUFDTkMsVUFBVTtZQUNWSCxPQUFPO1FBQ1I7a0JBRUEsNEVBQUNWLGtEQUFJQTtZQUNKYyxNQUFNVCxNQUFNVSxHQUFHLEtBQUcsS0FBS1YsTUFBTVUsR0FBRyxHQUFFLGVBQWVWLE1BQU1XLEVBQUU7WUFDekQsK0JBQStCO1lBQy9CQyxjQUFXO1lBQ1hDLFFBQVE7c0JBRVIsNEVBQUNaO2dCQUFJYSxXQUFVOztrQ0FDZCw4REFBQ2I7d0JBQUlhLFdBQVU7a0NBQ2QsNEVBQUNyQixxREFBVTs0QkFDVnVCLEtBQUtoQixNQUFNZSxHQUFHOzRCQUNkRCxXQUFVOzRCQUNWRyxLQUFJOzRCQUNKQyxRQUFPOzRCQUNQQyxPQUFPOzRCQUNQQyxZQUFZO2dDQUFFQyxPQUFPOzRCQUFLOzRCQUMxQmYsWUFBWTtnQ0FBRUUsVUFBVTs0QkFBSTs7Ozs7Ozs7Ozs7a0NBSTlCLDhEQUFDUDt3QkFBSWEsV0FBVTs7MENBQ2QsOERBQUNiO2dDQUFJYSxXQUFVOztrREFDZCw4REFBQ1E7d0NBQUVSLFdBQVU7a0RBQ1hkLE1BQU11QixLQUFLOzs7Ozs7a0RBRWIsOERBQUNEO3dDQUFFUixXQUFVO2tEQUFhZCxNQUFNd0IsUUFBUTs7Ozs7Ozs7Ozs7OzBDQUV6Qyw4REFBQ0M7Z0NBQUtYLFdBQVU7MENBQ2RkLE1BQU0wQixRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3RCO0tBN0NNM0I7QUErQ04sK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9qZWN0cy9Qcm9qZWN0U2luZ2xlLmpzeD8yY2RhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jb25zdCBpbWFnZVN0eWxlID0geyBtYXhXaWR0aDogJzEwMCUnLCBoZWlnaHQ6ICdhdXRvJyB9O1xyXG5cclxuY29uc3QgUHJvamVjdFNpbmdsZSA9IChwcm9wcykgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8bW90aW9uLmRpdlxyXG5cdFx0XHRpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cclxuXHRcdFx0YW5pbWF0ZT17eyBvcGFjaXR5OiAxLCBkZWxheTogMSB9fVxyXG5cdFx0XHR0cmFuc2l0aW9uPXt7XHJcblx0XHRcdFx0ZWFzZTogJ2Vhc2VJbk91dCcsXHJcblx0XHRcdFx0ZHVyYXRpb246IDAuNyxcclxuXHRcdFx0XHRkZWxheTogMC4xNSxcclxuXHRcdFx0fX1cclxuXHRcdD5cclxuXHRcdFx0PExpbmtcclxuXHRcdFx0XHRocmVmPXtwcm9wcy51cmwhPT1cIlwiID8gcHJvcHMudXJsIDpcIi9wcm9qZWN0cy9cIiArIHByb3BzLmlkfVxyXG5cdFx0XHRcdC8vIGFzPXsnL3Byb2plY3RzLycgKyBwcm9wcy5pZH1cclxuXHRcdFx0XHRhcmlhLWxhYmVsPVwiU2luZ2xlIFByb2plY3RcIlxyXG5cdFx0XHRcdHBhc3NIcmVmXHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQteGwgc2hhZG93LWxnIGhvdmVyOnNoYWRvdy14bCBjdXJzb3ItcG9pbnRlciBtYi0xMCBzbTptYi0wIGJnLXNlY29uZGFyeS1saWdodCBkYXJrOmJnLXRlcm5hcnktZGFya1wiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2gtNDggb3ZlcmZsb3ctaGlkZGVuJz5cclxuXHRcdFx0XHRcdFx0PG1vdGlvbi5pbWdcclxuXHRcdFx0XHRcdFx0XHRzcmM9e3Byb3BzLmltZ31cclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJyb3VuZGVkLXQteGwgYm9yZGVyLW5vbmUgdy1mdWxsXCJcclxuXHRcdFx0XHRcdFx0XHRhbHQ9XCJTaW5nbGUgUHJvamVjdFwiXHJcblx0XHRcdFx0XHRcdFx0bGF5b3V0PVwicmVzcG9uc2l2ZVwiXHJcblx0XHRcdFx0XHRcdFx0d2lkdGg9ezEwMH1cclxuXHRcdFx0XHRcdFx0XHR3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjA1IH19XHJcblx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC41IH19XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHgtNCBweS0yIGgtMzYgZmxleCBmbGV4LWNvbCAganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLXN0YXJ0XCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPScnPlxyXG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImZvbnQtZ2VuZXJhbC1tZWRpdW0gdXBwZXJjYXNlIHRleHQteGwgbWQ6dGV4dC0yeGwgdGV4dC10ZXJuYXJ5LWRhcmsgZGFyazp0ZXh0LXRlcm5hcnktbGlnaHQgbWItMlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0e3Byb3BzLnRpdGxlfVxyXG5cdFx0XHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3RleHQtbGVmdCc+e3Byb3BzLnN1YnRpdGxlfTwvcD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGcgdGV4dC10ZXJuYXJ5LWRhcmsgZGFyazp0ZXh0LXRlcm5hcnktbGlnaHQgdy1maXQgYmctYmx1ZS0yMDAgZGFyazpiZy1ibHVlLTcwMCByb3VuZGVkLW1kIHB4LTIgcHktMSB0ZXh0LXNtXCI+XHJcblx0XHRcdFx0XHRcdFx0e3Byb3BzLmNhdGVnb3J5fVxyXG5cdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9MaW5rPlxyXG5cdFx0PC9tb3Rpb24uZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0U2luZ2xlO1xyXG4iXSwibmFtZXMiOlsibW90aW9uIiwiSW1hZ2UiLCJMaW5rIiwiaW1hZ2VTdHlsZSIsIm1heFdpZHRoIiwiaGVpZ2h0IiwiUHJvamVjdFNpbmdsZSIsInByb3BzIiwiZGl2IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwiZGVsYXkiLCJ0cmFuc2l0aW9uIiwiZWFzZSIsImR1cmF0aW9uIiwiaHJlZiIsInVybCIsImlkIiwiYXJpYS1sYWJlbCIsInBhc3NIcmVmIiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWx0IiwibGF5b3V0Iiwid2lkdGgiLCJ3aGlsZUhvdmVyIiwic2NhbGUiLCJwIiwidGl0bGUiLCJzdWJ0aXRsZSIsInNwYW4iLCJjYXRlZ29yeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/projects/ProjectSingle.jsx\n"));

/***/ })

});