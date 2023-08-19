"use strict";
(self["webpackChunkdocubase"] = self["webpackChunkdocubase"] || []).push([[8933],{

/***/ 4615:
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
/* harmony import */ var _raw_loader_scripts_024_user_bash_aliases__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3730);
/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */const frontMatter={sidebar_position:9};const contentTitle='User .vimrc and .bash_aliases';const metadata={"unversionedId":"debian-guest/vimrc-and-bashalias-user","id":"debian-guest/vimrc-and-bashalias-user","title":"User .vimrc and .bash_aliases","description":"Setting .vimrc and .bash_aliases","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/debian-guest/vimrc-and-bashalias-user.mdx","sourceDirName":"debian-guest","slug":"/debian-guest/vimrc-and-bashalias-user","permalink":"/ganjil-2024/en/docs/debian-guest/vimrc-and-bashalias-user","draft":false,"tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"sidebar_position":9},"sidebar":"tutorialSidebar","previous":{"title":"Hostname","permalink":"/ganjil-2024/en/docs/debian-guest/hostname"},"next":{"title":"Root .vimrc and .profile","permalink":"/ganjil-2024/en/docs/debian-guest/vimrc-and-bashalias-root"}};const assets={};const toc=[{value:'Setting <code>.vimrc</code> and <code>.bash_aliases</code>',id:'setting-vimrc-and-bash_aliases',level:2},{value:'USER <code>.vimrc</code> and <code>.bash_alises</code>',id:'user-vimrc-and-bash_alises',level:2}];const layoutProps={toc};const MDXLayout="wrapper";function MDXContent(_ref){let{components,...props}=_ref;return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_home_runner_work_ganjil_2024_ganjil_2024_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h1",{"id":"user-vimrc-and-bash_aliases"},`User `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"h1"},`.vimrc`),` and `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"h1"},`.bash_aliases`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"setting-vimrc-and-bash_aliases"},`Setting `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"h2"},`.vimrc`),` and `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"h2"},`.bash_aliases`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"user-vimrc-and-bash_alises"},`USER `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"h2"},`.vimrc`),` and `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"h2"},`.bash_alises`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_theme_CodeBlock__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{mdxType:"CodeBlock"},_raw_loader_scripts_024_user_bash_aliases__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("img",{alt:"dospA-30",src:(__webpack_require__(9505)/* ["default"] */ .Z),width:"1080",height:"913"})),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre"},`Path: docs/debian-guest/vimrc-and-bashalias-user
`)));};MDXContent.isMDXComponent=true;

/***/ }),

/***/ 3730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("# USER\ncat > $HOME/.vimrc << EOF\n\" START: Thu 22 Jun 2023 11:00\nsyntax off\nset belloff=all\nEOF\n\ncat > $HOME/.bash_aliases << EOF\n# REV03: Sat 24 Jun 2023 13:00\n# START: Sun 09 Jan 2022 15:00\n# What is your EDITOR?\nexport EDITOR=/usr/bin/vi\n# COMMIT MESSAGE\nexport CMESSAGE=\"OSP $(whoami)\"\n# How many cores?\nexport MAKEFLAGS=-j$(nproc)\nexport LFS=/mnt/lfs\nalias cl='clear;echo \"\"'\nalias h='history'\nalias gac='git add -A && git commit'\nalias ggg='git pull; git add -A; git commit -m \"$CMESSAGE\"; git push;'\nalias mv='mv -i'\nalias rm='rm -i'\nalias sss='. ~/.profile'\nEOF\n###\nsource $HOME/.profile\n\n");

/***/ }),

/***/ 9505:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/dospA-30-315affdfcf9f7b6d3acd39f77996fb4c.jpg");

/***/ })

}]);