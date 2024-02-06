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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst imageStyle = {\n    maxWidth: \"100%\",\n    height: \"auto\"\n};\nconst ProjectSingle = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        initial: {\n            opacity: 0\n        },\n        animate: {\n            opacity: 1,\n            delay: 1\n        },\n        transition: {\n            ease: \"easeInOut\",\n            duration: 0.7,\n            delay: 0.15\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: \"/projects/[id]\",\n            as: \"/projects/\" + props.id,\n            \"aria-label\": \"Single Project\",\n            passHref: true,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-48 overflow-hidden\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.img, {\n                            src: props.img,\n                            className: \"rounded-t-xl border-none\",\n                            alt: \"Single Project\",\n                            layout: \"responsive\",\n                            whileHover: {\n                                scale: 1.05\n                            },\n                            transition: {\n                                duration: 0.5\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\fasna\\\\work\\\\others\\\\portfolio-nextJs\\\\components\\\\projects\\\\ProjectSingle.jsx\",\n                            lineNumber: 26,\n                            columnNumber: 7\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\fasna\\\\work\\\\others\\\\portfolio-nextJs\\\\components\\\\projects\\\\ProjectSingle.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 6\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" px-4 py-6 h-36\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"font-general-medium uppercase text-xl md:text-2xl text-ternary-dark dark:text-ternary-light mb-2\",\n                                children: props.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\fasna\\\\work\\\\others\\\\portfolio-nextJs\\\\components\\\\projects\\\\ProjectSingle.jsx\",\n                                lineNumber: 37,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-left\",\n                                children: props.subtitle\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\fasna\\\\work\\\\others\\\\portfolio-nextJs\\\\components\\\\projects\\\\ProjectSingle.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-lg text-ternary-dark dark:text-ternary-light w-fit bg-green-300 rounded-md px-2 py-1 text-sm\",\n                                children: props.category\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\fasna\\\\work\\\\others\\\\portfolio-nextJs\\\\components\\\\projects\\\\ProjectSingle.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 7\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\fasna\\\\work\\\\others\\\\portfolio-nextJs\\\\components\\\\projects\\\\ProjectSingle.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 6\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\fasna\\\\work\\\\others\\\\portfolio-nextJs\\\\components\\\\projects\\\\ProjectSingle.jsx\",\n                lineNumber: 24,\n                columnNumber: 5\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\fasna\\\\work\\\\others\\\\portfolio-nextJs\\\\components\\\\projects\\\\ProjectSingle.jsx\",\n            lineNumber: 18,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\fasna\\\\work\\\\others\\\\portfolio-nextJs\\\\components\\\\projects\\\\ProjectSingle.jsx\",\n        lineNumber: 9,\n        columnNumber: 3\n    }, undefined);\n};\n_c = ProjectSingle;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectSingle);\nvar _c;\n$RefreshReg$(_c, \"ProjectSingle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2plY3RzL1Byb2plY3RTaW5nbGUuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBdUM7QUFDUjtBQUNGO0FBRTdCLE1BQU1HLGFBQWE7SUFBRUMsVUFBVTtJQUFRQyxRQUFRO0FBQU87QUFFdEQsTUFBTUMsZ0JBQWdCLENBQUNDLFFBQVU7SUFDaEMscUJBQ0MsOERBQUNQLHFEQUFVO1FBQ1ZTLFNBQVM7WUFBRUMsU0FBUztRQUFFO1FBQ3RCQyxTQUFTO1lBQUVELFNBQVM7WUFBR0UsT0FBTztRQUFFO1FBQ2hDQyxZQUFZO1lBQ1hDLE1BQU07WUFDTkMsVUFBVTtZQUNWSCxPQUFPO1FBQ1I7a0JBRUEsNEVBQUNWLGtEQUFJQTtZQUNKYyxNQUFLO1lBQ0xDLElBQUksZUFBZVYsTUFBTVcsRUFBRTtZQUMzQkMsY0FBVztZQUNYQyxRQUFRO3NCQUVSLDRFQUFDWjtnQkFBSWEsV0FBVTs7a0NBQ2QsOERBQUNiO3dCQUFJYSxXQUFVO2tDQUNkLDRFQUFDckIscURBQVU7NEJBQ1Z1QixLQUFLaEIsTUFBTWUsR0FBRzs0QkFDZEQsV0FBVTs0QkFDVkcsS0FBSTs0QkFDSkMsUUFBTzs0QkFDUEMsWUFBWTtnQ0FBRUMsT0FBTzs0QkFBSzs0QkFDMUJkLFlBQVk7Z0NBQUVFLFVBQVU7NEJBQUk7Ozs7Ozs7Ozs7O2tDQUk5Qiw4REFBQ1A7d0JBQUlhLFdBQVU7OzBDQUNkLDhEQUFDTztnQ0FBRVAsV0FBVTswQ0FDWGQsTUFBTXNCLEtBQUs7Ozs7OzswQ0FFYiw4REFBQ0Q7Z0NBQUVQLFdBQVU7MENBQWFkLE1BQU11QixRQUFROzs7Ozs7MENBQ3hDLDhEQUFDQztnQ0FBS1YsV0FBVTswQ0FDZGQsTUFBTXlCLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPdEI7S0ExQ00xQjtBQTRDTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Byb2plY3RzL1Byb2plY3RTaW5nbGUuanN4PzJjZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IGltYWdlU3R5bGUgPSB7IG1heFdpZHRoOiAnMTAwJScsIGhlaWdodDogJ2F1dG8nIH07XHJcblxyXG5jb25zdCBQcm9qZWN0U2luZ2xlID0gKHByb3BzKSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxtb3Rpb24uZGl2XHJcblx0XHRcdGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxyXG5cdFx0XHRhbmltYXRlPXt7IG9wYWNpdHk6IDEsIGRlbGF5OiAxIH19XHJcblx0XHRcdHRyYW5zaXRpb249e3tcclxuXHRcdFx0XHRlYXNlOiAnZWFzZUluT3V0JyxcclxuXHRcdFx0XHRkdXJhdGlvbjogMC43LFxyXG5cdFx0XHRcdGRlbGF5OiAwLjE1LFxyXG5cdFx0XHR9fVxyXG5cdFx0PlxyXG5cdFx0XHQ8TGlua1xyXG5cdFx0XHRcdGhyZWY9XCIvcHJvamVjdHMvW2lkXVwiXHJcblx0XHRcdFx0YXM9eycvcHJvamVjdHMvJyArIHByb3BzLmlkfVxyXG5cdFx0XHRcdGFyaWEtbGFiZWw9XCJTaW5nbGUgUHJvamVjdFwiXHJcblx0XHRcdFx0cGFzc0hyZWZcclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC14bCBzaGFkb3ctbGcgaG92ZXI6c2hhZG93LXhsIGN1cnNvci1wb2ludGVyIG1iLTEwIHNtOm1iLTAgYmctc2Vjb25kYXJ5LWxpZ2h0IGRhcms6YmctdGVybmFyeS1kYXJrXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0naC00OCBvdmVyZmxvdy1oaWRkZW4nPlxyXG5cdFx0XHRcdFx0XHQ8bW90aW9uLmltZ1xyXG5cdFx0XHRcdFx0XHRcdHNyYz17cHJvcHMuaW1nfVxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInJvdW5kZWQtdC14bCBib3JkZXItbm9uZVwiXHJcblx0XHRcdFx0XHRcdFx0YWx0PVwiU2luZ2xlIFByb2plY3RcIlxyXG5cdFx0XHRcdFx0XHRcdGxheW91dD1cInJlc3BvbnNpdmVcIlxyXG5cdFx0XHRcdFx0XHRcdHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMDUgfX1cclxuXHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUgfX1cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCIgcHgtNCBweS02IGgtMzZcIj5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiZm9udC1nZW5lcmFsLW1lZGl1bSB1cHBlcmNhc2UgdGV4dC14bCBtZDp0ZXh0LTJ4bCB0ZXh0LXRlcm5hcnktZGFyayBkYXJrOnRleHQtdGVybmFyeS1saWdodCBtYi0yXCI+XHJcblx0XHRcdFx0XHRcdFx0e3Byb3BzLnRpdGxlfVxyXG5cdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ndGV4dC1sZWZ0Jz57cHJvcHMuc3VidGl0bGV9PC9wPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtdGVybmFyeS1kYXJrIGRhcms6dGV4dC10ZXJuYXJ5LWxpZ2h0IHctZml0IGJnLWdyZWVuLTMwMCByb3VuZGVkLW1kIHB4LTIgcHktMSB0ZXh0LXNtXCI+XHJcblx0XHRcdFx0XHRcdFx0e3Byb3BzLmNhdGVnb3J5fVxyXG5cdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9MaW5rPlxyXG5cdFx0PC9tb3Rpb24uZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0U2luZ2xlO1xyXG4iXSwibmFtZXMiOlsibW90aW9uIiwiSW1hZ2UiLCJMaW5rIiwiaW1hZ2VTdHlsZSIsIm1heFdpZHRoIiwiaGVpZ2h0IiwiUHJvamVjdFNpbmdsZSIsInByb3BzIiwiZGl2IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwiZGVsYXkiLCJ0cmFuc2l0aW9uIiwiZWFzZSIsImR1cmF0aW9uIiwiaHJlZiIsImFzIiwiaWQiLCJhcmlhLWxhYmVsIiwicGFzc0hyZWYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhbHQiLCJsYXlvdXQiLCJ3aGlsZUhvdmVyIiwic2NhbGUiLCJwIiwidGl0bGUiLCJzdWJ0aXRsZSIsInNwYW4iLCJjYXRlZ29yeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/projects/ProjectSingle.jsx\n"));

/***/ })

});