"use strict";
(self["webpackChunkdocubase"] = self["webpackChunkdocubase"] || []).push([[2550],{

/***/ 557:
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
/* harmony import */ var _raw_loader_scripts_025_root_profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8425);
/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */const frontMatter={sidebar_position:10};const contentTitle='Root .vimrc and .profile';const metadata={"unversionedId":"debian-guest/vimrc-and-bashalias-root","id":"debian-guest/vimrc-and-bashalias-root","title":"Root .vimrc and .profile","description":"Setting the .vimrc and .profile","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/debian-guest/vimrc-and-bashalias-root.mdx","sourceDirName":"debian-guest","slug":"/debian-guest/vimrc-and-bashalias-root","permalink":"/ganjil-2024/en/docs/debian-guest/vimrc-and-bashalias-root","draft":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"sidebar_position":10},"sidebar":"tutorialSidebar","previous":{"title":"User .vimrc and .bash_aliases","permalink":"/ganjil-2024/en/docs/debian-guest/vimrc-and-bashalias-user"},"next":{"title":"ETC Linux","permalink":"/ganjil-2024/en/docs/debian-guest/etc-linux"}};const assets={};const toc=[{value:'Setting the .vimrc and .profile',id:'setting-the-vimrc-and-profile',level:2},{value:'<code>ROOT</code> <code>.vimrc</code> and <code>.profile</code>',id:'root-vimrc-and-profile-1',level:2}];const layoutProps={toc};const MDXLayout="wrapper";function MDXContent(_ref){let{components,...props}=_ref;return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_ganjil_2024_ganjil_2024_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"root-vimrc-and-profile"},`Root `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"h1"},`.vimrc`),` and `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"h1"},`.profile`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"setting-the-vimrc-and-profile"},`Setting the .vimrc and .profile`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"root-vimrc-and-profile-1"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"h2"},`ROOT`),` `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"h2"},`.vimrc`),` and `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"h2"},`.profile`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_CodeBlock__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{mdxType:"CodeBlock"},_raw_loader_scripts_025_root_profile__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"dospA-31",src:(__webpack_require__(6439)/* ["default"] */ .Z),width:"1080",height:"900"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},`Path: docs/debian-guest/vimrc-and-bashalias-root
`)));};MDXContent.isMDXComponent=true;

/***/ }),

/***/ 8425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("# ROOT\nZCZCMODIFIED=\"# ZCZCMODIFIED OS232\"\n\ncat > $HOME/.vimrc << EOF\n\" START: Thu 22 Jun 2023 11:00\nsyntax off\nset belloff=all\nEOF\n\ngrep -Eq \"$ZCZCMODIFIED\" $HOME/.profile || cat >> $HOME/.profile << EOF\n\n# START: Thu 22 Jun 2023 11:00\n# What is your EDITOR?\nexport EDITOR=/usr/bin/vi\nexport LFS=/mnt/lfs\nalias cl='clear;echo \"\"'\nalias h='history'\nalias mv='mv -i'\nalias rm='rm -i'\nalias sss='. ~/.profile'\n\n$ZCZCMODIFIED\n\nEOF\n###\nsource $HOME/.profile\n");

/***/ }),

/***/ 6439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/dospA-31-5f7fef0d81ab66e6ea6cb41d0177c694.jpg");

/***/ })

}]);