"use strict";
exports.id = 493;
exports.ids = [493];
exports.modules = {

/***/ 225:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const imageStyle = {
    maxWidth: "100%",
    height: "auto"
};
const ProjectSingle = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
            delay: 1
        },
        transition: {
            ease: "easeInOut",
            duration: 0.7,
            delay: 0.15
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
            href: props.url !== "" ? props.url : "/projects/" + props.id,
            // as={'/projects/' + props.id}
            "aria-label": "Single Project",
            passHref: true,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "h-48 overflow-hidden",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.img, {
                            src: props.img,
                            className: "rounded-t-xl border-none w-full",
                            alt: "Single Project",
                            layout: "responsive",
                            width: 100,
                            whileHover: {
                                scale: 1.05
                            },
                            transition: {
                                duration: 0.5
                            }
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "px-4 py-2 h-36 flex flex-col justify-between items-start",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "font-general-medium uppercase text-xl md:text-2xl text-ternary-dark dark:text-ternary-light mb-2",
                                        children: props.title
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-left",
                                        children: props.subtitle
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-lg text-ternary-dark dark:text-ternary-light w-fit bg-blue-200 dark:bg-slate-800 rounded-md px-2 py-1 text-sm",
                                children: props.category
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectSingle);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9183:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const selectOptions = [
    "Web Application",
    "Branding"
];
function ProjectsFilter({ setSelectProject  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
        onChange: (e)=>{
            setSelectProject(e.target.value);
        },
        className: " px-4 sm:px-6 py-2 border dark:border-secondary-dark rounded-lg text-sm sm:text-md dark:font-medium bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light ",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                value: setSelectProject,
                className: "text-sm sm:text-md",
                children: "All Projects"
            }),
            selectOptions.map((option)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                    className: "text-normal sm:text-md",
                    children: option
                }, option))
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectsFilter);


/***/ }),

/***/ 1493:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProjectSingle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(225);
/* harmony import */ var _data_projectsData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8281);
/* harmony import */ var _ProjectsFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9183);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ProjectSingle__WEBPACK_IMPORTED_MODULE_2__, _data_projectsData__WEBPACK_IMPORTED_MODULE_3__]);
([_ProjectSingle__WEBPACK_IMPORTED_MODULE_2__, _data_projectsData__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





// import PersonalProjects from './PersonalProject';
function ProjectsGrid() {
    const [selectProject, setSelectProject] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    // @todo - To be fixed
    // const searchProjectsByTitle = projectsData.filter((item) => {
    // 	const result = item.title
    // 		.toLowerCase()
    // 		.includes(searchProject.toLowerCase())
    // 		? item
    // 		: searchProject == ''
    // 		? item
    // 		: '';
    // 	return result;
    // });
    const selectProjectsByCategory = _data_projectsData__WEBPACK_IMPORTED_MODULE_3__/* .projectsData.filter */ .n.filter((item)=>{
        let category = item.category.charAt(0).toUpperCase() + item.category.slice(1);
        return category.includes(selectProject);
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "py-5 sm:py-10 mt-5 sm:mt-10",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light",
                    children: "Projects portfolio"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-10 sm:mt-16",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: " flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-3 ",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProjectsFilter__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        setSelectProject: setSelectProject
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-5",
                children: selectProject ? selectProjectsByCategory.map((project, index)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProjectSingle__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        ...project
                    }, index);
                }) : _data_projectsData__WEBPACK_IMPORTED_MODULE_3__/* .projectsData.map */ .n.map((project, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ProjectSingle__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        ...project
                    }, index))
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectsGrid);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;