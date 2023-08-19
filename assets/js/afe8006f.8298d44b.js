"use strict";
(self["webpackChunkdocubase"] = self["webpackChunkdocubase"] || []).push([[5357],{

/***/ 3985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "assets": () => (/* binding */ assets),
  "contentTitle": () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  "frontMatter": () => (/* binding */ frontMatter),
  "metadata": () => (/* binding */ metadata),
  "toc": () => (/* binding */ toc)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__(3905);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/CodeBlock/index.js + 21 modules
var CodeBlock = __webpack_require__(9916);
;// CONCATENATED MODULE: ./node_modules/raw-loader/dist/cjs.js!./static/scripts/027-doBASH
/* harmony default export */ const _027_doBASH = ("cat > $HOME/.doBASH.sh << EOF\n#!/bin/bash\n# REV02: Tue 27 Jun 2023 15:00\n# START: Fri 16 Jun 2023 16:00\n# .doBASH.sh\n\nreadlink -- /bin/sh\n[[ \"$(readlink -- /bin/sh)\" == \"/bin/bash\" ]] || { /bin/rm -f /bin/sh; ln -s /bin/bash /bin/sh; }\nreadlink -- /bin/sh\nexit\nEOF\n### #####\n");
;// CONCATENATED MODULE: ./node_modules/raw-loader/dist/cjs.js!./static/scripts/027-doDNS
/* harmony default export */ const _027_doDNS = ("cat > $HOME/.doDNS.sh << EOF\n#!/bin/bash\n# REV02: Tue 27 Jun 2023 16:00\n# START: Fri 16 Jun 2023 16:00\n# .doDNS.sh\n\ncat > /etc/resolv.conf <<< \"nameserver 8.8.8.8\"\nexit\nEOF\n");
;// CONCATENATED MODULE: ./node_modules/raw-loader/dist/cjs.js!./static/scripts/027-doZero
/* harmony default export */ const _027_doZero = ("cat > $HOME/.doZERO.sh << EOF\n#!/bin/bash\n# REV02: Tue 27 Jun 2023 16:00\n# START: Fri 16 Jun 2023 16:00\n# .doZERO.sh\n\ndf -h /\ndd if=/dev/zero of=/tmp/tmptmp bs=1M\ndf -h /\necho \"===\"\nrm -f /tmp/tmptmp\ndf -h\nsync\nexit\nEOF\n### #####\n");
;// CONCATENATED MODULE: ./docs/debian-guest/etc-linux.mdx
/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */const frontMatter={sidebar_position:11};const contentTitle='ETC Linux';const metadata={"unversionedId":"debian-guest/etc-linux","id":"debian-guest/etc-linux","title":"ETC Linux","description":"Linux, Et Cetera","source":"@site/docs/debian-guest/etc-linux.mdx","sourceDirName":"debian-guest","slug":"/debian-guest/etc-linux","permalink":"/ganjil-2024/docs/debian-guest/etc-linux","draft":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"sidebar_position":11},"sidebar":"tutorialSidebar","previous":{"title":"Root .vimrc and .profile","permalink":"/ganjil-2024/docs/debian-guest/vimrc-and-bashalias-root"},"next":{"title":"Misc","permalink":"/ganjil-2024/docs/category/misc"}};const assets={};const toc=[{value:'Linux, Et Cetera',id:'linux-et-cetera',level:2}];const layoutProps={toc};const MDXLayout="wrapper";function MDXContent(_ref){let{components,...props}=_ref;return (0,esm/* mdx */.kt)(MDXLayout,(0,esm_extends/* default */.Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,esm/* mdx */.kt)("h1",{"id":"etc-linux"},`ETC Linux`),(0,esm/* mdx */.kt)("h2",{"id":"linux-et-cetera"},`Linux, Et Cetera`),(0,esm/* mdx */.kt)(CodeBlock/* default */.Z,{mdxType:"CodeBlock"},_027_doBASH),(0,esm/* mdx */.kt)(CodeBlock/* default */.Z,{mdxType:"CodeBlock"},_027_doDNS),(0,esm/* mdx */.kt)(CodeBlock/* default */.Z,{mdxType:"CodeBlock"},_027_doZero),(0,esm/* mdx */.kt)("pre",null,(0,esm/* mdx */.kt)("code",{parentName:"pre"},`Path: docs/debian-guest/etc-linux
`)));};MDXContent.isMDXComponent=true;

/***/ })

}]);