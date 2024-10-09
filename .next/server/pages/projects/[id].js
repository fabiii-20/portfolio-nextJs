"use strict";
(() => {
var exports = {};
exports.id = 92;
exports.ids = [92];
exports.modules = {

/***/ 6032:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_PagesMetaHead__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7860);
/* harmony import */ var _data_projectsData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8281);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data_projectsData__WEBPACK_IMPORTED_MODULE_4__]);
_data_projectsData__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function ProjectSingle(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "container mx-auto",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PagesMetaHead__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                title: props.project.title
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7",
                        children: props.project.ProjectHeader.title
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center mr-10",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiClock, {
                                        className: "text-xl text-ternary-dark dark:text-ternary-light"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light",
                                        children: props.project.ProjectHeader.publishDate
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiTag, {
                                        className: "w-4 h-4 text-ternary-dark dark:text-ternary-light"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light",
                                        children: props.project.ProjectHeader.tags
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12",
                children: props.project.ProjectImages.map((project)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mb-10 sm:mb-0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            src: project.img,
                            className: "rounded-xl cursor-pointer shadow-lg sm:shadow-none",
                            alt: project.title,
                            layout: "responsive",
                            width: 100,
                            height: 90
                        }, project.id)
                    }, project.id);
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "block sm:flex gap-0 sm:gap-10 mt-14",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full sm:w-1/3 text-left",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mb-7",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2",
                                        children: props.project.ProjectInfo.ClientHeading
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                        className: "leading-loose",
                                        children: props.project.ProjectInfo.CompanyInfo.map((info)=>{
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: "font-general-regular text-ternary-dark dark:text-ternary-light",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    children: [
                                                        info.title,
                                                        " "
                                                    ]
                                                })
                                            }, info.id);
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mb-7",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2",
                                        children: props.project.ProjectInfo.ObjectivesHeading
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "font-general-regular text-primary-dark dark:text-ternary-light",
                                        children: props.project.ProjectInfo.ObjectivesDetails
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mb-7",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2",
                                        children: props.project.ProjectInfo.Technologies[0].title
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "font-general-regular text-primary-dark dark:text-ternary-light",
                                        children: props.project.ProjectInfo.Technologies[0].techs.join(", ")
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mb-7",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2",
                                        children: props.project.ProjectInfo.DeployedUrlHeading
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: props.project.ProjectInfo.DeployedUrlInfo[0].url,
                                        className: "font-general-regular text-primary-dark dark:text-ternary-light hover:text-sky-700",
                                        children: "Click here to see the deployed site of this project."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mb-7",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2",
                                        children: props.project.ProjectInfo.FigmaUrlHeading
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: props.project.ProjectInfo.FigmaUrlInfo[0].url,
                                        className: "font-general-regular text-primary-dark dark:text-ternary-light hover:text-sky-700",
                                        children: "Click here to see the UI design of this project."
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "w-full sm:w-2/3 text-left mt-10 sm:mt-0",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-primary-dark dark:text-primary-light text-2xl font-bold mb-7",
                                children: props.project.ProjectInfo.ProjectDetailsHeading
                            }),
                            props.project.ProjectInfo.ProjectDetails.map((details)=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light",
                                    children: details.details
                                }, details.id);
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
async function getServerSideProps({ query  }) {
    const { id  } = query;
    return {
        props: {
            project: _data_projectsData__WEBPACK_IMPORTED_MODULE_4__/* .projectsData.filter */ .n.filter((project)=>project.id === parseInt(id))[0]
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectSingle);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2750:
/***/ ((module) => {

module.exports = require("react-icons/fi");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,860,281], () => (__webpack_exec__(6032)));
module.exports = __webpack_exports__;

})();