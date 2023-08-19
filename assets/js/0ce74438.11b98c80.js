"use strict";
(self["webpackChunkdocubase"] = self["webpackChunkdocubase"] || []).push([[342],{

/***/ 9020:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ playground)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 66 modules
var Layout = __webpack_require__(4295);
;// CONCATENATED MODULE: ./node_modules/@monaco-editor/loader/lib/es/_virtual/_rollupPluginBabelHelpers.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}



;// CONCATENATED MODULE: ./node_modules/state-local/lib/es/state-local.js
function state_local_defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function state_local_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function state_local_objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      state_local_ownKeys(Object(source), true).forEach(function (key) {
        state_local_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      state_local_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function compose() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (x) {
    return fns.reduceRight(function (y, f) {
      return f(y);
    }, x);
  };
}

function curry(fn) {
  return function curried() {
    var _this = this;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return args.length >= fn.length ? fn.apply(this, args) : function () {
      for (var _len3 = arguments.length, nextArgs = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        nextArgs[_key3] = arguments[_key3];
      }

      return curried.apply(_this, [].concat(args, nextArgs));
    };
  };
}

function isObject(value) {
  return {}.toString.call(value).includes('Object');
}

function isEmpty(obj) {
  return !Object.keys(obj).length;
}

function isFunction(value) {
  return typeof value === 'function';
}

function state_local_hasOwnProperty(object, property) {
  return Object.prototype.hasOwnProperty.call(object, property);
}

function validateChanges(initial, changes) {
  if (!isObject(changes)) errorHandler('changeType');
  if (Object.keys(changes).some(function (field) {
    return !state_local_hasOwnProperty(initial, field);
  })) errorHandler('changeField');
  return changes;
}

function validateSelector(selector) {
  if (!isFunction(selector)) errorHandler('selectorType');
}

function validateHandler(handler) {
  if (!(isFunction(handler) || isObject(handler))) errorHandler('handlerType');
  if (isObject(handler) && Object.values(handler).some(function (_handler) {
    return !isFunction(_handler);
  })) errorHandler('handlersType');
}

function validateInitial(initial) {
  if (!initial) errorHandler('initialIsRequired');
  if (!isObject(initial)) errorHandler('initialType');
  if (isEmpty(initial)) errorHandler('initialContent');
}

function throwError(errorMessages, type) {
  throw new Error(errorMessages[type] || errorMessages["default"]);
}

var errorMessages = {
  initialIsRequired: 'initial state is required',
  initialType: 'initial state should be an object',
  initialContent: 'initial state shouldn\'t be an empty object',
  handlerType: 'handler should be an object or a function',
  handlersType: 'all handlers should be a functions',
  selectorType: 'selector should be a function',
  changeType: 'provided value of changes should be an object',
  changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state',
  "default": 'an unknown error accured in `state-local` package'
};
var errorHandler = curry(throwError)(errorMessages);
var validators = {
  changes: validateChanges,
  selector: validateSelector,
  handler: validateHandler,
  initial: validateInitial
};

function create(initial) {
  var handler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  validators.initial(initial);
  validators.handler(handler);
  var state = {
    current: initial
  };
  var didUpdate = curry(didStateUpdate)(state, handler);
  var update = curry(updateState)(state);
  var validate = curry(validators.changes)(initial);
  var getChanges = curry(extractChanges)(state);

  function getState() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (state) {
      return state;
    };
    validators.selector(selector);
    return selector(state.current);
  }

  function setState(causedChanges) {
    compose(didUpdate, update, validate, getChanges)(causedChanges);
  }

  return [getState, setState];
}

function extractChanges(state, causedChanges) {
  return isFunction(causedChanges) ? causedChanges(state.current) : causedChanges;
}

function updateState(state, changes) {
  state.current = state_local_objectSpread2(state_local_objectSpread2({}, state.current), changes);
  return changes;
}

function didStateUpdate(state, handler, changes) {
  isFunction(handler) ? handler(state.current) : Object.keys(changes).forEach(function (field) {
    var _handler$field;

    return (_handler$field = handler[field]) === null || _handler$field === void 0 ? void 0 : _handler$field.call(handler, state.current[field]);
  });
  return changes;
}

var index = {
  create: create
};

/* harmony default export */ const state_local = (index);

;// CONCATENATED MODULE: ./node_modules/@monaco-editor/loader/lib/es/config/index.js
var config = {
  paths: {
    vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.36.1/min/vs'
  }
};

/* harmony default export */ const es_config = (config);

;// CONCATENATED MODULE: ./node_modules/@monaco-editor/loader/lib/es/utils/curry.js
function curry_curry(fn) {
  return function curried() {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return args.length >= fn.length ? fn.apply(this, args) : function () {
      for (var _len2 = arguments.length, nextArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        nextArgs[_key2] = arguments[_key2];
      }

      return curried.apply(_this, [].concat(args, nextArgs));
    };
  };
}

/* harmony default export */ const utils_curry = (curry_curry);

;// CONCATENATED MODULE: ./node_modules/@monaco-editor/loader/lib/es/utils/isObject.js
function isObject_isObject(value) {
  return {}.toString.call(value).includes('Object');
}

/* harmony default export */ const utils_isObject = (isObject_isObject);

;// CONCATENATED MODULE: ./node_modules/@monaco-editor/loader/lib/es/validators/index.js



/**
 * validates the configuration object and informs about deprecation
 * @param {Object} config - the configuration object 
 * @return {Object} config - the validated configuration object
 */

function validateConfig(config) {
  if (!config) validators_errorHandler('configIsRequired');
  if (!utils_isObject(config)) validators_errorHandler('configType');

  if (config.urls) {
    informAboutDeprecation();
    return {
      paths: {
        vs: config.urls.monacoBase
      }
    };
  }

  return config;
}
/**
 * logs deprecation message
 */


function informAboutDeprecation() {
  console.warn(validators_errorMessages.deprecation);
}

function validators_throwError(errorMessages, type) {
  throw new Error(errorMessages[type] || errorMessages["default"]);
}

var validators_errorMessages = {
  configIsRequired: 'the configuration object is required',
  configType: 'the configuration object should be an object',
  "default": 'an unknown error accured in `@monaco-editor/loader` package',
  deprecation: "Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "
};
var validators_errorHandler = utils_curry(validators_throwError)(validators_errorMessages);
var validators_validators = {
  config: validateConfig
};

/* harmony default export */ const es_validators = (validators_validators);


;// CONCATENATED MODULE: ./node_modules/@monaco-editor/loader/lib/es/utils/compose.js
var compose_compose = function compose() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (x) {
    return fns.reduceRight(function (y, f) {
      return f(y);
    }, x);
  };
};

/* harmony default export */ const utils_compose = (compose_compose);

;// CONCATENATED MODULE: ./node_modules/@monaco-editor/loader/lib/es/utils/deepMerge.js


function merge(target, source) {
  Object.keys(source).forEach(function (key) {
    if (source[key] instanceof Object) {
      if (target[key]) {
        Object.assign(source[key], merge(target[key], source[key]));
      }
    }
  });
  return _objectSpread2(_objectSpread2({}, target), source);
}

/* harmony default export */ const deepMerge = (merge);

;// CONCATENATED MODULE: ./node_modules/@monaco-editor/loader/lib/es/utils/makeCancelable.js
// The source (has been changed) is https://github.com/facebook/react/issues/5465#issuecomment-157888325
var CANCELATION_MESSAGE = {
  type: 'cancelation',
  msg: 'operation is manually canceled'
};

function makeCancelable(promise) {
  var hasCanceled_ = false;
  var wrappedPromise = new Promise(function (resolve, reject) {
    promise.then(function (val) {
      return hasCanceled_ ? reject(CANCELATION_MESSAGE) : resolve(val);
    });
    promise["catch"](reject);
  });
  return wrappedPromise.cancel = function () {
    return hasCanceled_ = true;
  }, wrappedPromise;
}

/* harmony default export */ const utils_makeCancelable = (makeCancelable);


;// CONCATENATED MODULE: ./node_modules/@monaco-editor/loader/lib/es/loader/index.js








/** the local state of the module */

var _state$create = state_local.create({
  config: es_config,
  isInitialized: false,
  resolve: null,
  reject: null,
  monaco: null
}),
    _state$create2 = _slicedToArray(_state$create, 2),
    getState = _state$create2[0],
    setState = _state$create2[1];
/**
 * set the loader configuration
 * @param {Object} config - the configuration object
 */


function loader_config(globalConfig) {
  var _validators$config = es_validators.config(globalConfig),
      monaco = _validators$config.monaco,
      config = _objectWithoutProperties(_validators$config, ["monaco"]);

  setState(function (state) {
    return {
      config: deepMerge(state.config, config),
      monaco: monaco
    };
  });
}
/**
 * handles the initialization of the monaco-editor
 * @return {Promise} - returns an instance of monaco (with a cancelable promise)
 */


function init() {
  var state = getState(function (_ref) {
    var monaco = _ref.monaco,
        isInitialized = _ref.isInitialized,
        resolve = _ref.resolve;
    return {
      monaco: monaco,
      isInitialized: isInitialized,
      resolve: resolve
    };
  });

  if (!state.isInitialized) {
    setState({
      isInitialized: true
    });

    if (state.monaco) {
      state.resolve(state.monaco);
      return utils_makeCancelable(wrapperPromise);
    }

    if (window.monaco && window.monaco.editor) {
      storeMonacoInstance(window.monaco);
      state.resolve(window.monaco);
      return utils_makeCancelable(wrapperPromise);
    }

    utils_compose(injectScripts, getMonacoLoaderScript)(configureLoader);
  }

  return utils_makeCancelable(wrapperPromise);
}
/**
 * injects provided scripts into the document.body
 * @param {Object} script - an HTML script element
 * @return {Object} - the injected HTML script element
 */


function injectScripts(script) {
  return document.body.appendChild(script);
}
/**
 * creates an HTML script element with/without provided src
 * @param {string} [src] - the source path of the script
 * @return {Object} - the created HTML script element
 */


function createScript(src) {
  var script = document.createElement('script');
  return src && (script.src = src), script;
}
/**
 * creates an HTML script element with the monaco loader src
 * @return {Object} - the created HTML script element
 */


function getMonacoLoaderScript(configureLoader) {
  var state = getState(function (_ref2) {
    var config = _ref2.config,
        reject = _ref2.reject;
    return {
      config: config,
      reject: reject
    };
  });
  var loaderScript = createScript("".concat(state.config.paths.vs, "/loader.js"));

  loaderScript.onload = function () {
    return configureLoader();
  };

  loaderScript.onerror = state.reject;
  return loaderScript;
}
/**
 * configures the monaco loader
 */


function configureLoader() {
  var state = getState(function (_ref3) {
    var config = _ref3.config,
        resolve = _ref3.resolve,
        reject = _ref3.reject;
    return {
      config: config,
      resolve: resolve,
      reject: reject
    };
  });
  var require = window.require;

  require.config(state.config);

  require(['vs/editor/editor.main'], function (monaco) {
    storeMonacoInstance(monaco);
    state.resolve(monaco);
  }, function (error) {
    state.reject(error);
  });
}
/**
 * store monaco instance in local state
 */


function storeMonacoInstance(monaco) {
  if (!getState().monaco) {
    setState({
      monaco: monaco
    });
  }
}
/**
 * internal helper function
 * extracts stored monaco instance
 * @return {Object|null} - the monaco instance
 */


function __getMonacoInstance() {
  return getState(function (_ref4) {
    var monaco = _ref4.monaco;
    return monaco;
  });
}

var wrapperPromise = new Promise(function (resolve, reject) {
  return setState({
    resolve: resolve,
    reject: reject
  });
});
var loader = {
  config: loader_config,
  init: init,
  __getMonacoInstance: __getMonacoInstance
};

/* harmony default export */ const es_loader = (loader);

;// CONCATENATED MODULE: ./node_modules/@monaco-editor/loader/lib/es/index.js



;// CONCATENATED MODULE: ./node_modules/@monaco-editor/react/dist/index.mjs
var lt={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},v=lt;var at={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},Y=at;function Mt({children:t}){return react.createElement("div",{style:Y.container},t)}var Z=Mt;var $=Z;function Et({width:t,height:r,isEditorReady:n,loading:e,_ref:a,className:m,wrapperProps:E}){return react.createElement("section",{style:{...v.wrapper,width:t,height:r},...E},!n&&react.createElement($,null,e),react.createElement("div",{ref:a,style:{...v.fullWidth,...!n&&v.hide},className:m}))}var tt=Et;var H=(0,react.memo)(tt);function Ct(t){(0,react.useEffect)(t,[])}var b=Ct;function ht(t,r,n=!0){let e=(0,react.useRef)(!0);(0,react.useEffect)(e.current||!n?()=>{e.current=!1}:t,r)}var l=ht;function h(){}function R(t,r,n,e){return Dt(t,e)||bt(t,r,n,e)}function Dt(t,r){return t.editor.getModel(et(t,r))}function bt(t,r,n,e){return t.editor.createModel(r,n,e?et(t,e):void 0)}function et(t,r){return t.Uri.parse(r)}function Ot({original:t,modified:r,language:n,originalLanguage:e,modifiedLanguage:a,originalModelPath:m,modifiedModelPath:E,keepCurrentOriginalModel:S=!1,keepCurrentModifiedModel:N=!1,theme:x="light",loading:P="Loading...",options:y={},height:V="100%",width:z="100%",className:F,wrapperProps:j={},beforeMount:A=h,onMount:q=h}){let[M,O]=(0,react.useState)(!1),[T,s]=(0,react.useState)(!0),u=(0,react.useRef)(null),c=(0,react.useRef)(null),w=(0,react.useRef)(null),d=(0,react.useRef)(q),o=(0,react.useRef)(A),D=(0,react.useRef)(!1);b(()=>{let i=es_loader.init();return i.then(f=>(c.current=f)&&s(!1)).catch(f=>f?.type!=="cancelation"&&console.error("Monaco initialization: error:",f)),()=>u.current?I():i.cancel()}),l(()=>{let i=u.current.getModifiedEditor();i.getOption(c.current.editor.EditorOption.readOnly)?i.setValue(r||""):r!==i.getValue()&&(i.executeEdits("",[{range:i.getModel().getFullModelRange(),text:r||"",forceMoveMarkers:!0}]),i.pushUndoStop())},[r],M),l(()=>{u.current?.getModel()?.original.setValue(t||"")},[t],M),l(()=>{let{original:i,modified:f}=u.current.getModel();c.current.editor.setModelLanguage(i,e||n||"text"),c.current.editor.setModelLanguage(f,a||n||"text")},[n,e,a],M),l(()=>{c.current?.editor.setTheme(x)},[x],M),l(()=>{u.current?.updateOptions(y)},[y],M);let U=(0,react.useCallback)(()=>{if(!c.current)return;o.current(c.current);let i=R(c.current,t||"",e||n||"text",m||""),f=R(c.current,r||"",a||n||"text",E||"");u.current?.setModel({original:i,modified:f})},[n,r,a,t,e,m,E]),L=(0,react.useCallback)(()=>{!D.current&&w.current&&(u.current=c.current.editor.createDiffEditor(w.current,{automaticLayout:!0,...y}),U(),c.current?.editor.setTheme(x),O(!0),D.current=!0)},[y,x,U]);(0,react.useEffect)(()=>{M&&d.current(u.current,c.current)},[M]),(0,react.useEffect)(()=>{!T&&!M&&L()},[T,M,L]),l(()=>{if(u.current&&c.current){let i=u.current.getOriginalEditor(),f=R(c.current,t||"",e||n||"text",m||"");f!==i.getModel()&&i.setModel(f)}},[m],M),l(()=>{if(u.current&&c.current){let i=u.current.getModifiedEditor(),f=R(c.current,r||"",a||n||"text",E||"");f!==i.getModel()&&i.setModel(f)}},[E],M);function I(){let i=u.current?.getModel();S||i?.original?.dispose(),N||i?.modified?.dispose(),u.current?.dispose()}return react.createElement(H,{width:z,height:V,isEditorReady:M,loading:P,_ref:w,className:F,wrapperProps:j})}var it=Ot;var wt=(0,react.memo)(it);function Pt(){let[t,r]=It(ct.__getMonacoInstance());return b(()=>{let n;return t||(n=ct.init(),n.then(e=>{r(e)})),()=>n?.cancel()}),t}var Ut=(/* unused pure expression or super */ null && (Pt));function Ht(t){let r=(0,react.useRef)();return (0,react.useEffect)(()=>{r.current=t},[t]),r.current}var st=Ht;var _=new Map;function Vt({defaultValue:t,defaultLanguage:r,defaultPath:n,value:e,language:a,path:m,theme:E="light",line:S,loading:N="Loading...",options:x={},overrideServices:P={},saveViewState:y=!0,keepCurrentModel:V=!1,width:z="100%",height:F="100%",className:j,wrapperProps:A={},beforeMount:q=h,onMount:M=h,onChange:O,onValidate:T=h}){let[s,u]=(0,react.useState)(!1),[c,w]=(0,react.useState)(!0),d=(0,react.useRef)(null),o=(0,react.useRef)(null),D=(0,react.useRef)(null),U=(0,react.useRef)(M),L=(0,react.useRef)(q),I=(0,react.useRef)(),i=(0,react.useRef)(e),f=st(m),Q=(0,react.useRef)(!1),B=(0,react.useRef)(!1);b(()=>{let p=es_loader.init();return p.then(g=>(d.current=g)&&w(!1)).catch(g=>g?.type!=="cancelation"&&console.error("Monaco initialization: error:",g)),()=>o.current?pt():p.cancel()}),l(()=>{let p=R(d.current,t||e||"",r||a||"",m||n||"");p!==o.current?.getModel()&&(y&&_.set(f,o.current?.saveViewState()),o.current?.setModel(p),y&&o.current?.restoreViewState(_.get(m)))},[m],s),l(()=>{o.current?.updateOptions(x)},[x],s),l(()=>{!o.current||e===void 0||(o.current.getOption(d.current.editor.EditorOption.readOnly)?o.current.setValue(e):e!==o.current.getValue()&&(B.current=!0,o.current.executeEdits("",[{range:o.current.getModel().getFullModelRange(),text:e,forceMoveMarkers:!0}]),o.current.pushUndoStop(),B.current=!1))},[e],s),l(()=>{let p=o.current?.getModel();p&&a&&d.current?.editor.setModelLanguage(p,a)},[a],s),l(()=>{S!==void 0&&o.current?.revealLine(S)},[S],s),l(()=>{d.current?.editor.setTheme(E)},[E],s);let X=(0,react.useCallback)(()=>{if(!(!D.current||!d.current)&&!Q.current){L.current(d.current);let p=m||n,g=R(d.current,e||t||"",r||a||"",p||"");o.current=d.current?.editor.create(D.current,{model:g,automaticLayout:!0,...x},P),y&&o.current.restoreViewState(_.get(p)),d.current.editor.setTheme(E),u(!0),Q.current=!0}},[t,r,n,e,a,m,x,P,y,E]);(0,react.useEffect)(()=>{s&&U.current(o.current,d.current)},[s]),(0,react.useEffect)(()=>{!c&&!s&&X()},[c,s,X]),i.current=e,(0,react.useEffect)(()=>{s&&O&&(I.current?.dispose(),I.current=o.current?.onDidChangeModelContent(p=>{B.current||O(o.current.getValue(),p)}))},[s,O]),(0,react.useEffect)(()=>{if(s){let p=d.current.editor.onDidChangeMarkers(g=>{let G=o.current.getModel()?.uri;if(G&&g.find(J=>J.path===G.path)){let J=d.current.editor.getModelMarkers({resource:G});T?.(J)}});return()=>{p?.dispose()}}return()=>{}},[s,T]);function pt(){I.current?.dispose(),V?y&&_.set(m,o.current.saveViewState()):o.current.getModel()?.dispose(),o.current.dispose()}return react.createElement(H,{width:z,height:F,isEditorReady:s,loading:N,_ref:D,className:j,wrapperProps:A})}var ft=Vt;var dt=(0,react.memo)(ft);var Fe=dt;
//# sourceMappingURL=index.mjs.map
;// CONCATENATED MODULE: ./src/components/CodeEditor/index.tsx
const CodeEditor=_ref=>{let{defaultValue,editorHeight="40vh",outputHeight="30vh"}=_ref;const[value,setValue]=react.useState(defaultValue);const outputRef=react.useRef(null);react.useEffect(()=>{if(outputRef!=null){outputRef.current.src="data:text/html;charset=utf-8,"+encodeURIComponent(value);}},[value]);return/*#__PURE__*/react.createElement("div",{style:{marginBottom:"1rem"}},/*#__PURE__*/react.createElement("div",{style:{borderRadius:"0.5rem",overflow:"hidden"}},/*#__PURE__*/react.createElement(Fe,{height:editorHeight,defaultLanguage:"html",defaultValue:defaultValue,theme:"vs-dark",onChange:value=>setValue(value),loading:"Loading Code Editor...",options:{minimap:{enabled:false}}})),/*#__PURE__*/react.createElement("h4",{style:{marginTop:"1rem"}},"Output:"),/*#__PURE__*/react.createElement("iframe",{style:{width:"100%",minHeight:outputHeight,backgroundColor:"white",borderRadius:"0.5rem"},ref:outputRef}));};/* harmony default export */ const components_CodeEditor = (CodeEditor);
;// CONCATENATED MODULE: ./src/data/examples.ts
const baseExample=`<!-- Anda bisa menggunakan ini sebagai dasar untuk bereksperimen/tugas -->
<!DOCTYPE html>
<html>
    <head>
        <title>Document</title>
    </head>
    <body>
        <p>Hello, World!</p>
    </body>
</html>`;const paragraphExample=(/* unused pure expression or super */ null && (`<!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT -->
<html>
    <body>
        <h2>Berikut ini adalah contoh paragraf</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra finibus porta. Fusce imperdiet
            turpis felis, ut elementum felis lobortis auctor. Curabitur finibus, nunc sed sagittis placerat, lacus
            massa venenatis lorem, malesuada rutrum ligula justo id lacus.
        </p>
        <p>
            Donec posuere ipsum faucibus lectus lacinia, vitae efficitur dolor vestibulum. Nulla fringilla gravida mollis.
            Aenean vel libero eleifend, luctus lacus ut, cursus mauris.
        </p>
    </body>
</html>
`));const headingExample=(/* unused pure expression or super */ null && (`<!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT -->
<html>
    <body>
        <h1>Saya adalah h1</h1>
        <h2>Saya adalah h2</h2>
        <h3>Saya adalah h3</h3>
        <h4>Saya adalah h4</h4>
        <h5>Saya adalah h5</h5>
        <h6>Saya adalah h6</h6>
    </body>
</html>
`));const anchorExample1=(/* unused pure expression or super */ null && (`<!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT -->
<html>
    <body>
        <p>
            <a href="#">Halo, saya adalah link</a>
        </p>
        <p>
            <!-- Target _parent digunakan karena kode output di render dalam sebuah iframe -->
            <a href="https://google.com/" target="_parent">Link ini akan membuka Google di page yang sama</a>
        </p>
        <p>
            <!-- Target _blank akan membuka link pada page baru -->
            <a href="https://scele.cs.ui.ac.id/" target="_blank">Link ini akan membuka SCELE di tab baru</a>
        </p>
        <p>
            Link dapat juga diselipkan diantara teks <a href="#">seperti ini</a>
        </p>
    </body>
</html>
`));const anchorExample2=(/* unused pure expression or super */ null && (`<!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT -->
<html>
    <body>
        <p>Clickable Button</p>
        <a href="https://google.com" target="_blank">
            <button>Button juga dapat diubah menjadi link</button>
        </a>
        <p>Clickable Image</p>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
            <img src="https://cs.ui.ac.id/wp-content/uploads/2021/06/logo-fasilkom-white-2.png" />
        </a>
    </body>
</html>
`));const imgExample=(/* unused pure expression or super */ null && (`<!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT -->
<html>
    <body>
        <h4>Ini adalah gambar</h4>
        <img src="https://via.placeholder.com/300x150" />

        <h4>Gambar ini tidak bisa di load</h4>
        <img src="lasflkasjf" alt="Unloadable Image" />

        <h4>Gambar ini memiliki custom width 250px (Original Size: 300x150)</h4>
        <img src="https://via.placeholder.com/300x150" width="250px" />
    </body>
</html>
`));const buttonExample=(/* unused pure expression or super */ null && (`<!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT -->
<html>
    <body>
        <h4>Button dengan sendirinya tidak melakukan apapun</h4>
        <button>Does Nothing</button>

        <h4>Button ini adalah link</h4>
        <a href="https://google.com/" target="_blank">
            <button>Open Google</button>
        </a>

        <h4>Button ini akan menampilkan sebuah popup menggunakan JavaScript</h4>
        <button id="click-me">Click Me</button>
        <script>
            // Line ini akan assign sebuah arrow function ke event onclick pada button.
            // () => alert("Clicked!") memiliki arti "buatlah fungsi
            // tak bernama yang membuat popup dengan tulisan 'Clicked!'
            document.getElementById("click-me").onclick = () => alert("Clicked!")
        </script>
    </body>
</html>
`));const containerExample1=(/* unused pure expression or super */ null && (`<!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUPUT -->
<html>
    <body>
        <!-- Dengan div kita dapat mengaplikasikan sebuah CSS style ke sekelompok elemen -->
        <div style="background-color: lightgrey;">
            <h3>Artikel 1</h3>
            <p>Lorem ipsum yadda yadda this is the first article</p>
        </div>
        <!-- Kita juga dapat mengaplikasikan style positioning ke kelompok elemen ini untuk memisahkannya dari container sebelumnya -->
        <div style="background-color: grey; margin-top: 2rem">
            <h3>Artikel 2</h3>
            <p>Lorem ipsum yadda yadda this is the second article</p>
        </div>
    </body>
</html>
`));const containerExample2=(/* unused pure expression or super */ null && (`<!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUPUT -->
<html>
    <body>
        <h4>Kelompok ini akan tersusun secara vertikal</h4>
        <div>
            <div style="background-color: lightgrey;">
                <h3>Artikel 1</h3>
                <p>Lorem ipsum yadda yadda this is the first article</p>
            </div>
            <div style="background-color: grey; margin-top: 2rem">
                <h3>Artikel 2</h3>
                <p>Lorem ipsum yadda yadda this is the second article</p>
            </div>
        </div>

        <!-- Berbagai macam recipe untuk layouting page akan dibahas di bagian Common Recipes -->
        <h4>Kelompok ini akan tersusun secara horizontal</h4>
        <div style="display: flex; align-items: center;">
            <div style="background-color: lightgrey;">
                <h3>Artikel 1</h3>
                <p>Lorem ipsum yadda yadda this is the first article</p>
            </div>
            <div style="background-color: grey; margin-left: 1rem;">
                <h3>Artikel 2</h3>
                <p>Lorem ipsum yadda yadda this is the second article</p>
            </div>
        </div>
    </body>
</html>
`));const ajaxJQueryExample=(/* unused pure expression or super */ null && (`<!-- UBAH KODE INI UNTUK MELIHAT PERUBAHANNYA DI OUTPUT -->
<!DOCTYPE html>
<html>
  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script>
    $(document).ready(function(){
      $("button").click(function(){
        $.get("https://api.thecatapi.com/v1/images/search", function(data) {
            $(".cat-photo").attr("src", data[0].url)
        });
      });
    });
    </script>
  </head>
    <body>
      <div>
      <img
          alt="cat"
          src="https://cdn2.thecatapi.com/images/0Vz3XgaPM.jpg"
          width="400"
          height="400"
          objectFit="cover"
          class="cat-photo"
      />
      </div>

      <button>Get a new cat!</button>

    </body>
</html>
`));
;// CONCATENATED MODULE: ./src/pages/playground.tsx
const Playground=()=>{return/*#__PURE__*/react.createElement(Layout/* default */.Z,null,/*#__PURE__*/react.createElement("div",{style:{padding:"3rem"}},/*#__PURE__*/react.createElement("h1",{style:{fontSize:"2.5rem"}},"HTML Playground"),/*#__PURE__*/react.createElement("p",null,"Feel free to experiment using this code editor."),/*#__PURE__*/react.createElement(components_CodeEditor,{editorHeight:"40vh",outputHeight:"100vh",defaultValue:baseExample})));};/* harmony default export */ const playground = (Playground);

/***/ })

}]);