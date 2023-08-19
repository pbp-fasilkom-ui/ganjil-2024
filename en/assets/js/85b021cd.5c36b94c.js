"use strict";
(self["webpackChunkdocubase"] = self["webpackChunkdocubase"] || []).push([[5417],{

/***/ 2231:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assets": () => (/* binding */ assets),
/* harmony export */   "contentTitle": () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   "frontMatter": () => (/* binding */ frontMatter),
/* harmony export */   "metadata": () => (/* binding */ metadata),
/* harmony export */   "toc": () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _home_runner_work_ganjil_2024_ganjil_2024_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7462);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3905);
/* harmony import */ var _theme_CodeBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9916);
/* harmony import */ var _raw_loader_scripts_027_doBASH__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(949);
/* harmony import */ var _raw_loader_scripts_027_doDNS__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2873);
/* harmony import */ var _raw_loader_scripts_027_doZero__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1377);
/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */const frontMatter={sidebar_position:11};const contentTitle='ETC Linux';const metadata={"unversionedId":"debian-guest/etc-linux","id":"debian-guest/etc-linux","title":"ETC Linux","description":"Linux, Et Cetera","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/debian-guest/etc-linux.mdx","sourceDirName":"debian-guest","slug":"/debian-guest/etc-linux","permalink":"/ganjil-2024/en/docs/debian-guest/etc-linux","draft":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"sidebar_position":11},"sidebar":"tutorialSidebar","previous":{"title":"Root .vimrc and .profile","permalink":"/ganjil-2024/en/docs/debian-guest/vimrc-and-bashalias-root"},"next":{"title":"Misc","permalink":"/ganjil-2024/en/docs/category/misc"}};const assets={};const toc=[{value:'Linux, Et Cetera',id:'linux-et-cetera',level:2}];const layoutProps={toc};const MDXLayout="wrapper";function MDXContent(_ref){let{components,...props}=_ref;return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_ganjil_2024_ganjil_2024_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"etc-linux"},`ETC Linux`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"linux-et-cetera"},`Linux, Et Cetera`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_CodeBlock__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{mdxType:"CodeBlock"},_raw_loader_scripts_027_doBASH__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_CodeBlock__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{mdxType:"CodeBlock"},_raw_loader_scripts_027_doDNS__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_CodeBlock__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{mdxType:"CodeBlock"},_raw_loader_scripts_027_doZero__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},`Path: docs/debian-guest/etc-linux
`)));};MDXContent.isMDXComponent=true;

/***/ }),

/***/ 949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("cat > $HOME/.doBASH.sh << EOF\n#!/bin/bash\n# REV02: Tue 27 Jun 2023 15:00\n# START: Fri 16 Jun 2023 16:00\n# .doBASH.sh\n\nreadlink -- /bin/sh\n[[ \"$(readlink -- /bin/sh)\" == \"/bin/bash\" ]] || { /bin/rm -f /bin/sh; ln -s /bin/bash /bin/sh; }\nreadlink -- /bin/sh\nexit\nEOF\n### #####\n");

/***/ }),

/***/ 2873:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("cat > $HOME/.doDNS.sh << EOF\n#!/bin/bash\n# REV02: Tue 27 Jun 2023 16:00\n# START: Fri 16 Jun 2023 16:00\n# .doDNS.sh\n\ncat > /etc/resolv.conf <<< \"nameserver 8.8.8.8\"\nexit\nEOF\n");

/***/ }),

/***/ 1377:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("cat > $HOME/.doZERO.sh << EOF\n#!/bin/bash\n# REV02: Tue 27 Jun 2023 16:00\n# START: Fri 16 Jun 2023 16:00\n# .doZERO.sh\n\ndf -h /\ndd if=/dev/zero of=/tmp/tmptmp bs=1M\ndf -h /\necho \"===\"\nrm -f /tmp/tmptmp\ndf -h\nsync\nexit\nEOF\n### #####\n");

/***/ })

}]);