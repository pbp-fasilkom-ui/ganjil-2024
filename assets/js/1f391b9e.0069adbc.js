"use strict";
(self["webpackChunkdocubase"] = self["webpackChunkdocubase"] || []).push([[85],{

/***/ 3502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MDXPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js + 2 modules
var metadataUtils = __webpack_require__(1944);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(5281);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 66 modules
var Layout = __webpack_require__(4295);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXContent/index.js + 39 modules
var MDXContent = __webpack_require__(7126);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TOC/index.js + 1 modules
var TOC = __webpack_require__(4151);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXPage/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"mdxPageWrapper":"mdxPageWrapper_j9I6"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/MDXPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function MDXPage(props){const{content:MDXPageContent}=props;const{metadata:{title,description,frontMatter}}=MDXPageContent;const{wrapperClassName,hide_table_of_contents:hideTableOfContents}=frontMatter;return/*#__PURE__*/react.createElement(metadataUtils/* HtmlClassNameProvider */.FG,{className:(0,clsx_m/* default */.Z)(wrapperClassName??ThemeClassNames/* ThemeClassNames.wrapper.mdxPages */.k.wrapper.mdxPages,ThemeClassNames/* ThemeClassNames.page.mdxPage */.k.page.mdxPage)},/*#__PURE__*/react.createElement(metadataUtils/* PageMetadata */.d,{title:title,description:description}),/*#__PURE__*/react.createElement(Layout/* default */.Z,null,/*#__PURE__*/react.createElement("main",{className:"container container--fluid margin-vert--lg"},/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)('row',styles_module.mdxPageWrapper)},/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)('col',!hideTableOfContents&&'col--8')},/*#__PURE__*/react.createElement("article",null,/*#__PURE__*/react.createElement(MDXContent/* default */.Z,null,/*#__PURE__*/react.createElement(MDXPageContent,null)))),!hideTableOfContents&&MDXPageContent.toc.length>0&&/*#__PURE__*/react.createElement("div",{className:"col col--2"},/*#__PURE__*/react.createElement(TOC/* default */.Z,{toc:MDXPageContent.toc,minHeadingLevel:frontMatter.toc_min_heading_level,maxHeadingLevel:frontMatter.toc_max_heading_level}))))));}

/***/ })

}]);