"use strict";
(self["webpackChunkdocubase"] = self["webpackChunkdocubase"] || []).push([[4415],{

/***/ 366:
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
/* harmony import */ var _raw_loader_scripts_021_sources_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7923);
/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */const frontMatter={sidebar_position:5};const contentTitle='Sources list';const metadata={"unversionedId":"debian-guest/sources-list","id":"debian-guest/sources-list","title":"Sources list","description":"sources.list","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/debian-guest/sources-list.mdx","sourceDirName":"debian-guest","slug":"/debian-guest/sources-list","permalink":"/ganjil-2024/en/docs/debian-guest/sources-list","draft":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"Root (SuperUser)","permalink":"/ganjil-2024/en/docs/debian-guest/root"},"next":{"title":"Installing Debian Packages","permalink":"/ganjil-2024/en/docs/debian-guest/debian-packages-1"}};const assets={};const toc=[{value:'sources.list',id:'sourceslist',level:2}];const layoutProps={toc};const MDXLayout="wrapper";function MDXContent(_ref){let{components,...props}=_ref;return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_ganjil_2024_ganjil_2024_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"sources-list"},`Sources list`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"sourceslist"},`sources.list`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_CodeBlock__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{mdxType:"CodeBlock"},_raw_loader_scripts_021_sources_list__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"dospA-24",src:(__webpack_require__(2727)/* ["default"] */ .Z),width:"1080",height:"901"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},`Path: docs/debian-guest/sources-list
`)));};MDXContent.isMDXComponent=true;

/***/ }),

/***/ 7923:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("# ROOT\n[ -f /etc/apt/sources.list ] && cp /etc/apt/sources.list /etc/apt/zOLDsources.list\ncat > /etc/apt/sources.list <<< \"\n# Fri 16 Jun 2023 09:00\ndeb https://deb.debian.org/debian/ bookworm                  main contrib non-free non-free-firmware\ndeb https://deb.debian.org/debian/ bookworm-updates          main contrib non-free non-free-firmware\ndeb https://deb.debian.org/debian/ bookworm-proposed-updates main contrib non-free non-free-firmware\ndeb https://deb.debian.org/debian/ bookworm-backports        main contrib non-free non-free-firmware\ndeb https://security.debian.org/   bookworm-security         main contrib non-free non-free-firmware\n\"\n# UPDATE - UPGRADE - AUTOREMOVE\napt update && apt upgrade -y && apt full-upgrade -y && apt --purge autoremove -y\n\n");

/***/ }),

/***/ 2727:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/dospA-24-1d106062e8b95f3a515b7baeda61e845.jpg");

/***/ })

}]);