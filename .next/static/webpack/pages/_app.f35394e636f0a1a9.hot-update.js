"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/layouts/dashboard/side-nav.js":
/*!*******************************************!*\
  !*** ./src/layouts/dashboard/side-nav.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SideNav: function() { return /* binding */ SideNav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Box_Divider_Drawer_Stack_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Divider,Drawer,Stack,useMediaQuery!=!@mui/material */ \"__barrel_optimize__?names=Box,Divider,Drawer,Stack,useMediaQuery!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ \"./src/layouts/dashboard/config.js\");\n/* harmony import */ var _side_nav_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./side-nav-item */ \"./src/layouts/dashboard/side-nav-item.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst SideNav = (props)=>{\n    _s();\n    const { open, onClose } = props;\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname)();\n    const lgUp = (0,_barrel_optimize_names_Box_Divider_Drawer_Stack_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery)((theme)=>theme.breakpoints.up(\"lg\"));\n    const content = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Divider_Drawer_Stack_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n        sx: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            height: \"100%\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Divider_Drawer_Stack_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                sx: {\n                    p: 4,\n                    display: \"flex\",\n                    justifyContent: \"center\"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Thakur\\\\Desktop\\\\uttam\\\\src\\\\layouts\\\\dashboard\\\\side-nav.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Divider_Drawer_Stack_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_4__.Divider, {\n                sx: {\n                    borderColor: \"neutral.700\"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Thakur\\\\Desktop\\\\uttam\\\\src\\\\layouts\\\\dashboard\\\\side-nav.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Divider_Drawer_Stack_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                component: \"nav\",\n                sx: {\n                    flexGrow: 1,\n                    px: 2,\n                    py: 3\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Divider_Drawer_Stack_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_4__.Stack, {\n                    component: \"ul\",\n                    spacing: 0.5,\n                    sx: {\n                        listStyle: \"none\",\n                        p: 0,\n                        m: 0\n                    },\n                    children: _config__WEBPACK_IMPORTED_MODULE_2__.items.map((item)=>{\n                        const active = item.path ? pathname === item.path : false;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_side_nav_item__WEBPACK_IMPORTED_MODULE_3__.SideNavItem, {\n                            active: active,\n                            disabled: item.disabled,\n                            external: item.external,\n                            icon: item.icon,\n                            path: item.path,\n                            title: item.title\n                        }, item.title, false, {\n                            fileName: \"C:\\\\Users\\\\Thakur\\\\Desktop\\\\uttam\\\\src\\\\layouts\\\\dashboard\\\\side-nav.js\",\n                            lineNumber: 56,\n                            columnNumber: 15\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Thakur\\\\Desktop\\\\uttam\\\\src\\\\layouts\\\\dashboard\\\\side-nav.js\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Thakur\\\\Desktop\\\\uttam\\\\src\\\\layouts\\\\dashboard\\\\side-nav.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Divider_Drawer_Stack_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_4__.Divider, {\n                sx: {\n                    borderColor: \"neutral.700\"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Thakur\\\\Desktop\\\\uttam\\\\src\\\\layouts\\\\dashboard\\\\side-nav.js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Thakur\\\\Desktop\\\\uttam\\\\src\\\\layouts\\\\dashboard\\\\side-nav.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n    if (lgUp) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Divider_Drawer_Stack_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_4__.Drawer, {\n            anchor: \"left\",\n            open: true,\n            PaperProps: {\n                sx: {\n                    backgroundColor: \"#113835\",\n                    color: \"common.white\",\n                    width: 100\n                }\n            },\n            variant: \"permanent\",\n            children: content\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Thakur\\\\Desktop\\\\uttam\\\\src\\\\layouts\\\\dashboard\\\\side-nav.js\",\n            lineNumber: 77,\n            columnNumber: 7\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Divider_Drawer_Stack_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_4__.Drawer, {\n        anchor: \"left\",\n        onClose: onClose,\n        open: open,\n        PaperProps: {\n            sx: {\n                backgroundColor: \"#113835\",\n                color: \"common.white\",\n                width: 100\n            }\n        },\n        sx: {\n            zIndex: (theme)=>theme.zIndex.appBar + 100\n        },\n        variant: \"temporary\",\n        children: [\n            content,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \" hello there\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Thakur\\\\Desktop\\\\uttam\\\\src\\\\layouts\\\\dashboard\\\\side-nav.js\",\n                lineNumber: 110,\n                columnNumber: 15\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Thakur\\\\Desktop\\\\uttam\\\\src\\\\layouts\\\\dashboard\\\\side-nav.js\",\n        lineNumber: 95,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SideNav, \"N9FId39NynnLX7180OX3tYi27/0=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname,\n        _barrel_optimize_names_Box_Divider_Drawer_Stack_useMediaQuery_mui_material__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery\n    ];\n});\n_c = SideNav;\nvar _c;\n$RefreshReg$(_c, \"SideNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGF5b3V0cy9kYXNoYm9hcmQvc2lkZS1uYXYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUM4QztBQVV2QjtBQUNVO0FBQ2E7QUFFdkMsTUFBTVEsVUFBVSxDQUFDQzs7SUFDdEIsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRSxHQUFHRjtJQUMxQixNQUFNRyxXQUFXWiw0REFBV0E7SUFDNUIsTUFBTWEsT0FBT1IseUhBQWFBLENBQUMsQ0FBQ1MsUUFBVUEsTUFBTUMsV0FBVyxDQUFDQyxFQUFFLENBQUM7SUFFM0QsTUFBTUMsd0JBRUosOERBQUNoQiwyR0FBR0E7UUFDRmlCLElBQUk7WUFDRkMsU0FBUztZQUNUQyxlQUFlO1lBQ2ZDLFFBQVE7UUFDVjs7MEJBRUEsOERBQUNwQiwyR0FBR0E7Z0JBQUNpQixJQUFJO29CQUFFSSxHQUFHO29CQUFHSCxTQUFTO29CQUFRSSxnQkFBZ0I7Z0JBQVM7Ozs7OzswQkFHM0QsOERBQUNyQiwrR0FBT0E7Z0JBQUNnQixJQUFJO29CQUFFTSxhQUFhO2dCQUFjOzs7Ozs7MEJBQzFDLDhEQUFDdkIsMkdBQUdBO2dCQUNGd0IsV0FBVTtnQkFDVlAsSUFBSTtvQkFDRlEsVUFBVTtvQkFDVkMsSUFBSTtvQkFDSkMsSUFBSTtnQkFDTjswQkFFQSw0RUFBQ3hCLDZHQUFLQTtvQkFDSnFCLFdBQVU7b0JBQ1ZJLFNBQVM7b0JBQ1RYLElBQUk7d0JBQ0ZZLFdBQVc7d0JBQ1hSLEdBQUc7d0JBQ0hTLEdBQUc7b0JBQ0w7OEJBRUN6QiwwQ0FBS0EsQ0FBQzBCLEdBQUcsQ0FBQyxDQUFDQzt3QkFFVixNQUFNQyxTQUFTRCxLQUFLRSxJQUFJLEdBQUl2QixhQUFhcUIsS0FBS0UsSUFBSSxHQUFJO3dCQUV0RCxxQkFDRSw4REFBQzVCLHVEQUFXQTs0QkFDVjJCLFFBQVFBOzRCQUNSRSxVQUFVSCxLQUFLRyxRQUFROzRCQUN2QkMsVUFBVUosS0FBS0ksUUFBUTs0QkFDdkJDLE1BQU1MLEtBQUtLLElBQUk7NEJBRWZILE1BQU1GLEtBQUtFLElBQUk7NEJBQ2ZJLE9BQU9OLEtBQUtNLEtBQUs7MkJBRlpOLEtBQUtNLEtBQUs7Ozs7O29CQUtyQjs7Ozs7Ozs7Ozs7MEJBR0osOERBQUNyQywrR0FBT0E7Z0JBQUNnQixJQUFJO29CQUFFTSxhQUFhO2dCQUFjOzs7Ozs7Ozs7Ozs7SUFNOUMsSUFBSVgsTUFBTTtRQUNSLHFCQUNFLDhEQUFDViw4R0FBTUE7WUFDTHFDLFFBQU87WUFDUDlCLElBQUk7WUFDSitCLFlBQVk7Z0JBQ1Z2QixJQUFJO29CQUNGd0IsaUJBQWlCO29CQUNqQkMsT0FBTztvQkFDUEMsT0FBTztnQkFDVDtZQUNGO1lBQ0FDLFNBQVE7c0JBRVA1Qjs7Ozs7O0lBR1A7SUFFQSxxQkFDRSw4REFBQ2QsOEdBQU1BO1FBQ0xxQyxRQUFPO1FBQ1A3QixTQUFTQTtRQUNURCxNQUFNQTtRQUNOK0IsWUFBWTtZQUNWdkIsSUFBSTtnQkFDRndCLGlCQUFpQjtnQkFDakJDLE9BQU87Z0JBQ1BDLE9BQU87WUFDVDtRQUNGO1FBQ0ExQixJQUFJO1lBQUU0QixRQUFRLENBQUNoQyxRQUFVQSxNQUFNZ0MsTUFBTSxDQUFDQyxNQUFNLEdBQUc7UUFBSTtRQUNuREYsU0FBUTs7WUFFUDVCOzBCQUNPLDhEQUFDK0I7MEJBQUc7Ozs7Ozs7Ozs7OztBQUlsQixFQUFFO0dBbEdXeEM7O1FBRU1SLHdEQUFXQTtRQUNmSyxxSEFBYUE7OztLQUhmRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbGF5b3V0cy9kYXNoYm9hcmQvc2lkZS1uYXYuanM/MTkyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgdXNlUGF0aG5hbWUgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xyXG5cclxuaW1wb3J0IHtcclxuICBCb3gsXHJcblxyXG4gIERpdmlkZXIsXHJcbiAgRHJhd2VyLFxyXG4gIFN0YWNrLFxyXG5cclxuICB1c2VNZWRpYVF1ZXJ5XHJcbn0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IGl0ZW1zIH0gZnJvbSAnLi9jb25maWcnO1xyXG5pbXBvcnQgeyBTaWRlTmF2SXRlbSB9IGZyb20gJy4vc2lkZS1uYXYtaXRlbSc7XHJcblxyXG5leHBvcnQgY29uc3QgU2lkZU5hdiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgb3Blbiwgb25DbG9zZSB9ID0gcHJvcHM7XHJcbiAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpO1xyXG4gIGNvbnN0IGxnVXAgPSB1c2VNZWRpYVF1ZXJ5KCh0aGVtZSkgPT4gdGhlbWUuYnJlYWtwb2ludHMudXAoJ2xnJykpO1xyXG5cclxuICBjb25zdCBjb250ZW50ID0gKFxyXG5cclxuICAgIDxCb3hcclxuICAgICAgc3g9e3tcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwJSdcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPEJveCBzeD17eyBwOiA0LCBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cclxuXHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8RGl2aWRlciBzeD17eyBib3JkZXJDb2xvcjogJ25ldXRyYWwuNzAwJyB9fSAvPlxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgY29tcG9uZW50PVwibmF2XCJcclxuICAgICAgICBzeD17e1xyXG4gICAgICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgICAgICBweDogMixcclxuICAgICAgICAgIHB5OiAzXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxTdGFja1xyXG4gICAgICAgICAgY29tcG9uZW50PVwidWxcIlxyXG4gICAgICAgICAgc3BhY2luZz17MC41fVxyXG4gICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgbGlzdFN0eWxlOiAnbm9uZScsXHJcbiAgICAgICAgICAgIHA6IDAsXHJcbiAgICAgICAgICAgIG06IDBcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYWN0aXZlID0gaXRlbS5wYXRoID8gKHBhdGhuYW1lID09PSBpdGVtLnBhdGgpIDogZmFsc2U7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxTaWRlTmF2SXRlbVxyXG4gICAgICAgICAgICAgICAgYWN0aXZlPXthY3RpdmV9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXRlbS5kaXNhYmxlZH1cclxuICAgICAgICAgICAgICAgIGV4dGVybmFsPXtpdGVtLmV4dGVybmFsfVxyXG4gICAgICAgICAgICAgICAgaWNvbj17aXRlbS5pY29ufVxyXG4gICAgICAgICAgICAgICAga2V5PXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgcGF0aD17aXRlbS5wYXRofVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvU3RhY2s+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8RGl2aWRlciBzeD17eyBib3JkZXJDb2xvcjogJ25ldXRyYWwuNzAwJyB9fSAvPlxyXG5cclxuICAgIDwvQm94PlxyXG5cclxuICApO1xyXG5cclxuICBpZiAobGdVcCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPERyYXdlclxyXG4gICAgICAgIGFuY2hvcj1cImxlZnRcIlxyXG4gICAgICAgIG9wZW5cclxuICAgICAgICBQYXBlclByb3BzPXt7XHJcbiAgICAgICAgICBzeDoge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMTEzODM1JyxcclxuICAgICAgICAgICAgY29sb3I6ICdjb21tb24ud2hpdGUnLFxyXG4gICAgICAgICAgICB3aWR0aDogMTAwXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfX1cclxuICAgICAgICB2YXJpYW50PVwicGVybWFuZW50XCJcclxuICAgICAgPlxyXG4gICAgICAgIHtjb250ZW50fVxyXG4gICAgICA8L0RyYXdlcj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPERyYXdlclxyXG4gICAgICBhbmNob3I9XCJsZWZ0XCJcclxuICAgICAgb25DbG9zZT17b25DbG9zZX1cclxuICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgUGFwZXJQcm9wcz17e1xyXG4gICAgICAgIHN4OiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMTEzODM1JyxcclxuICAgICAgICAgIGNvbG9yOiAnY29tbW9uLndoaXRlJyxcclxuICAgICAgICAgIHdpZHRoOiAxMDBcclxuICAgICAgICB9XHJcbiAgICAgIH19XHJcbiAgICAgIHN4PXt7IHpJbmRleDogKHRoZW1lKSA9PiB0aGVtZS56SW5kZXguYXBwQmFyICsgMTAwIH19XHJcbiAgICAgIHZhcmlhbnQ9XCJ0ZW1wb3JhcnlcIlxyXG4gICAgPlxyXG4gICAgICB7Y29udGVudH1cclxuICAgICAgICAgICAgICA8aDE+IGhlbGxvIHRoZXJlPC9oMT5cclxuXHJcbiAgICA8L0RyYXdlcj5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsidXNlUGF0aG5hbWUiLCJCb3giLCJEaXZpZGVyIiwiRHJhd2VyIiwiU3RhY2siLCJ1c2VNZWRpYVF1ZXJ5IiwiaXRlbXMiLCJTaWRlTmF2SXRlbSIsIlNpZGVOYXYiLCJwcm9wcyIsIm9wZW4iLCJvbkNsb3NlIiwicGF0aG5hbWUiLCJsZ1VwIiwidGhlbWUiLCJicmVha3BvaW50cyIsInVwIiwiY29udGVudCIsInN4IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJoZWlnaHQiLCJwIiwianVzdGlmeUNvbnRlbnQiLCJib3JkZXJDb2xvciIsImNvbXBvbmVudCIsImZsZXhHcm93IiwicHgiLCJweSIsInNwYWNpbmciLCJsaXN0U3R5bGUiLCJtIiwibWFwIiwiaXRlbSIsImFjdGl2ZSIsInBhdGgiLCJkaXNhYmxlZCIsImV4dGVybmFsIiwiaWNvbiIsInRpdGxlIiwiYW5jaG9yIiwiUGFwZXJQcm9wcyIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwid2lkdGgiLCJ2YXJpYW50IiwiekluZGV4IiwiYXBwQmFyIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/layouts/dashboard/side-nav.js\n"));

/***/ })

});