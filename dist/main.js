!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("axios"),require("store")):"function"==typeof define&&define.amd?define(["axios","store"],e):"object"==typeof exports?exports.PayseraHttpClientCommon=e(require("axios"),require("store")):t.PayseraHttpClientCommon=e(t.axios,t.store)}("undefined"!=typeof self?self:this,(function(t,e){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=8)}([function(t,e,n){t.exports=n(4)},function(e,n){e.exports=t},function(t,n){t.exports=e},function(t,e,n){var r=n(6).Global;function o(){return r.sessionStorage}function i(t){return o().getItem(t)}t.exports={name:"sessionStorage",read:i,write:function(t,e){return o().setItem(t,e)},each:function(t){for(var e=o().length-1;e>=0;e--){var n=o().key(e);t(i(n),n)}},remove:function(t){return o().removeItem(t)},clearAll:function(){return o().clear()}}},function(t,e,n){var r=function(){return this}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n(5),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}},function(t,e){!function(e){"use strict";var n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag",c="object"==typeof t,s=e.regeneratorRuntime;if(s)c&&(t.exports=s);else{(s=e.regeneratorRuntime=c?t.exports:{}).wrap=v;var f={},l={};l[i]=function(){return this};var p=Object.getPrototypeOf,h=p&&p(p(P([])));h&&h!==n&&r.call(h,i)&&(l=h);var y=m.prototype=b.prototype=Object.create(l);g.prototype=y.constructor=m,m.constructor=g,m[u]=g.displayName="GeneratorFunction",s.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},s.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(y),t},s.awrap=function(t){return{__await:t}},w(O.prototype),O.prototype[a]=function(){return this},s.AsyncIterator=O,s.async=function(t,e,n,r){var o=new O(v(t,e,n,r));return s.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},w(y),y[u]="Generator",y[i]=function(){return this},y.toString=function(){return"[object Generator]"},s.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},s.values=P,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),_(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;_(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}}}function v(t,e,n,r){var o=e&&e.prototype instanceof b?e:b,i=Object.create(o.prototype),a=new x(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return E()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var u=k(a,n);if(u){if(u===f)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=d(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(t,n,a),i}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function b(){}function g(){}function m(){}function w(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function O(t){var e;this._invoke=function(n,o){function i(){return new Promise((function(e,i){!function e(n,o,i,a){var u=d(t[n],t,o);if("throw"!==u.type){var c=u.arg,s=c.value;return s&&"object"==typeof s&&r.call(s,"__await")?Promise.resolve(s.__await).then((function(t){e("next",t,i,a)}),(function(t){e("throw",t,i,a)})):Promise.resolve(s).then((function(t){c.value=t,i(c)}),a)}a(u.arg)}(n,o,e,i)}))}return e=e?e.then(i,i):i()}}function k(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var r=d(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,f;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function P(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:E}}function E(){return{value:void 0,done:!0}}}(function(){return this}()||Function("return this")())},function(t,e,n){(function(e){var n=Object.assign?Object.assign:function(t,e,n,r){for(var o=1;o<arguments.length;o++)u(Object(arguments[o]),(function(e,n){t[n]=e}));return t},r=function(){if(Object.create)return function(t,e,r,o){var i=a(arguments,1);return n.apply(this,[Object.create(t)].concat(i))};{function t(){}return function(e,r,o,i){var u=a(arguments,1);return t.prototype=e,n.apply(this,[new t].concat(u))}}}(),o=String.prototype.trim?function(t){return String.prototype.trim.call(t)}:function(t){return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},i="undefined"!=typeof window?window:e;function a(t,e){return Array.prototype.slice.call(t,e||0)}function u(t,e){c(t,(function(t,n){return e(t,n),!1}))}function c(t,e){if(s(t)){for(var n=0;n<t.length;n++)if(e(t[n],n))return t[n]}else for(var r in t)if(t.hasOwnProperty(r)&&e(t[r],r))return t[r]}function s(t){return null!=t&&"function"!=typeof t&&"number"==typeof t.length}t.exports={assign:n,create:r,trim:o,bind:function(t,e){return function(){return e.apply(t,Array.prototype.slice.call(arguments,0))}},slice:a,each:u,map:function(t,e){var n=s(t)?[]:{};return c(t,(function(t,r){return n[r]=e(t,r),!1})),n},pluck:c,isList:s,isFunction:function(t){return t&&"[object Function]"==={}.toString.call(t)},isObject:function(t){return t&&"[object Object]"==={}.toString.call(t)},Global:i}}).call(this,n(7))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";n.r(e),n.d(e,"Entity",(function(){return i})),n.d(e,"Filter",(function(){return s})),n.d(e,"File",(function(){return h})),n.d(e,"Request",(function(){return y})),n.d(e,"Result",(function(){return w})),n.d(e,"Scope",(function(){return k})),n.d(e,"Token",(function(){return _})),n.d(e,"AuthenticationError",(function(){return T})),n.d(e,"TokenError",(function(){return q})),n.d(e,"SessionStorageTokenProvider",(function(){return H})),n.d(e,"JWTAuthenticationMiddleware",(function(){return $})),n.d(e,"SessionStorage",(function(){return B})),n.d(e,"createClient",(function(){return ut})),n.d(e,"ClientWrapper",(function(){return nt})),n.d(e,"createRequest",(function(){return ct}));var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o(this,t),this.data=e}return r(t,[{key:"set",value:function(t,e){this.data[t]=e}},{key:"get",value:function(t){return void 0!==this.data[t]?this.data[t]:null}},{key:"getData",value:function(){return this.data}}]),t}(),a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var s=function(t){function e(){return u(this,e),c(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),a(e,[{key:"setLimit",value:function(t){this.set("limit",t)}},{key:"getLimit",value:function(){return this.get("limit")}},{key:"setOffset",value:function(t){this.set("offset",t)}},{key:"getOffset",value:function(){return this.get("offset")}},{key:"setOrderBy",value:function(t){this.set("order_by",t)}},{key:"getOrderBy",value:function(){return this.get("order_by")}},{key:"setOrderDirection",value:function(t){this.set("order_direction",t)}},{key:"getOrderDirection",value:function(){return this.get("order_direction")}}]),e}(i),f=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var h=function(t){function e(){return l(this,e),p(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),f(e,[{key:"setName",value:function(t){this.set("name",t)}},{key:"getName",value:function(){return this.get("name")}},{key:"setContent",value:function(t){this.set("content",t)}},{key:"getContent",value:function(){return this.get("content")}},{key:"setMimeType",value:function(t){this.set("mime_type",t)}},{key:"getMimeType",value:function(){return this.get("mime_type")}},{key:"setSize",value:function(t){this.set("size",t)}},{key:"getSize",value:function(){return this.get("size")}}]),e}(i);var y=function t(e,n,r,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.method=e,this.path=n,this.parameters=r,this.body=o},v=n(0),d=n.n(v),b=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();function g(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function m(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var w=function(t){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"items";g(this,e);var r=m(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.dataKey=n,r.metadataKey="_metadata",r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),b(e,[{key:Symbol.iterator,value:d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.delegateYield(this.getItems(),"t0",1);case 1:return t.abrupt("return",t.t0);case 2:case"end":return t.stop()}}),t,this)}))},{key:"getItems",value:function(){var t=this;return void 0!==this.data[this.dataKey]?this.data[this.dataKey].map((function(e){return t.createItem(e)})):[]}},{key:"getMetadata",value:function(){return void 0!==this.data[this.metadataKey]?this.data[this.metadataKey]:null}},{key:"getTotal",value:function(){return null!==this.getMetadata()&&void 0!==this.getMetadata().total?this.getMetadata().total:null}},{key:"getOffset",value:function(){return null!==this.getMetadata()&&void 0!==this.getMetadata().offset?this.getMetadata().offset:null}},{key:"getLimit",value:function(){return null!==this.getMetadata()&&void 0!==this.getMetadata().limit?this.getMetadata().limit:null}},{key:"createItem",value:function(t){return new i(t)}}]),e}(i),O=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();var k=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.value=e}return O(t,[{key:"getValue",value:function(){return this.value}}]),t}(),j=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();var _=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.scope=e,this.token=n}return j(t,[{key:"getScope",value:function(){return this.scope}},{key:"getTokenValue",value:function(){return this.token}}]),t}(),x=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();function P(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function E(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var T=function(t){function e(t){var n;P(this,e);for(var r=arguments.length,o=Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];var a=E(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(o)));return a.response=t,Error.captureStackTrace&&Error.captureStackTrace(a,e),a}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),x(e,[{key:"getResponse",value:function(){return this.response}}]),e}(function(t){function e(){var e=Reflect.construct(t,Array.from(arguments));return Object.setPrototypeOf(e,Object.getPrototypeOf(this)),e}return e.prototype=Object.create(t.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t,e}(Error));function S(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function R(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var L=function(t){function e(){return S(this,e),R(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e}(function(t){function e(){var e=Reflect.construct(t,Array.from(arguments));return Object.setPrototypeOf(e,Object.getPrototypeOf(this)),e}return e.prototype=Object.create(t.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t,e}(Error));function C(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function A(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var q=function(t){function e(){var t;C(this,e);for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];var i=A(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(r)));return Error.captureStackTrace&&Error.captureStackTrace(i,e),i}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e}(function(t){function e(){var e=Reflect.construct(t,Array.from(arguments));return Object.setPrototypeOf(e,Object.getPrototypeOf(this)),e}return e.prototype=Object.create(t.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t,e}(Error)),F=n(2),M=n.n(F),I=n(3),N=n.n(I),G=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();function K(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var B=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;K(this,t),this.store=M.a.createStore(N.a,[],e)}return G(t,[{key:"get",value:function(t){return this.store.get(t)}},{key:"set",value:function(t,e){return this.store.set(t,e)}}]),t}(),U=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();function z(t){return function(){var e=t.apply(this,arguments);return new Promise((function(t,n){return function r(o,i){try{var a=e[o](i),u=a.value}catch(t){return void n(t)}if(!a.done)return Promise.resolve(u).then((function(t){r("next",t)}),(function(t){r("throw",t)}));t(u)}("next")}))}}function D(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var H=function(){function t(e,n,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;D(this,t),this.createTokenAction=e,this.refreshTokenAction=n,this.identifier=r,this.storage=new B(o)}var e,n;return U(t,[{key:"createToken",value:(n=z(d.a.mark((function t(e){var n,r,o,i,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null===(n=this.getScopeToken())){t.next=3;break}return t.abrupt("return",n);case 3:return t.prev=3,t.next=6,this.createTokenAction(e);case 6:return r=t.sent,o=r.scope,i=r.accessToken,a=new _(o,i),this.saveToken(a),t.abrupt("return",a);case 14:throw t.prev=14,t.t0=t.catch(3),new q("Unable to create token");case 17:case"end":return t.stop()}}),t,this,[[3,14]])}))),function(t){return n.apply(this,arguments)})},{key:"refreshToken",value:(e=z(d.a.mark((function t(e){var n,r,o,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.refreshTokenAction(e);case 3:return n=t.sent,r=n.scope,o=n.accessToken,i=new _(r,o),this.saveToken(i),t.abrupt("return",i);case 11:throw t.prev=11,t.t0=t.catch(0),new q("Unable to refresh token");case 14:case"end":return t.stop()}}),t,this,[[0,11]])}))),function(t){return e.apply(this,arguments)})},{key:"getScopeToken",value:function(){var t=this.storage.get(this.getTokenStorageKey());return void 0===t?null:new _(new k(t.scope.value),t.token)}},{key:"saveToken",value:function(t){return this.storage.set(this.getTokenStorageKey(),t),this}},{key:"getTokenStorageKey",value:function(){return"token_"+this.identifier}}]),t}(),V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},W=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Y=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();function X(t){return function(){var e=t.apply(this,arguments);return new Promise((function(t,n){return function r(o,i){try{var a=e[o](i),u=a.value}catch(t){return void n(t)}if(!a.done)return Promise.resolve(u).then((function(t){r("next",t)}),(function(t){r("throw",t)}));t(u)}("next")}))}}var J=[401,403],$=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.scope=e,this.tokenProvider=n}var e,n;return Y(t,[{key:"onRequest",value:(n=X(d.a.mark((function t(e){var n,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.tokenProvider.createToken(this.scope);case 2:return n=t.sent,r=void 0===e.jwtAuthenticationConfig?{retryCount:0}:W({},e.jwtAuthenticationConfig),t.abrupt("return",W({},e,{headers:W({},e.headers||{},{Authorization:"Bearer "+n.getTokenValue()}),jwtAuthenticationConfig:r}));case 5:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)})},{key:"onResponseError",value:(e=X(d.a.mark((function t(e){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("object"!==(void 0===e?"undefined":V(e))||"object"!==V(e.response)||-1===J.indexOf(e.response.status)){t.next=6;break}if(!(void 0!==(n=e.config.jwtAuthenticationConfig)&&n.retryCount<1)){t.next=6;break}return t.next=5,this.tokenProvider.refreshToken(this.scope);case 5:return t.abrupt("return",e.config.resendRequest({jwtAuthenticationConfig:W({},n,{retryCount:n.retryCount+1})}));case 6:throw e;case 7:case"end":return t.stop()}}),t,this)}))),function(t){return e.apply(this,arguments)})}]),t}(),Q=n(1),Z=n.n(Q),tt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},et=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();var nt=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.client=e}return et(t,[{key:"performRequest",value:function(t){var e=this.performBaseRequest(t),n=e.then((function(t){return t.data}));return n.cancellationTokenSource=e.cancellationTokenSource,n}},{key:"performBaseRequest",value:function(t){return this.sendRequest({method:t.method,url:t.path,data:t.body,params:t.parameters})}},{key:"sendRequest",value:function(t){var e=this,n=Q.CancelToken.source(),r=this.client(tt({},t,{cancelToken:n.token,resendRequest:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.sendRequest(tt({},t,n))}}));return r.cancellationTokenSource=n,r}}]),t}();function rt(t,e){var n=t,r=new RegExp("{([\\w|-|_]+)}","g");if(!r.test(t))return n;if(!Object.prototype.hasOwnProperty.call(e,"urlParameters"))throw new L("Found parameters in BaseUrl, but no urlParameters");var o=e.urlParameters;r.lastIndex=0;for(var i=void 0;null!==(i=r.exec(t));){if(!Object.prototype.hasOwnProperty.call(o,i[1]))throw new L("Found placeholder "+i[0]+" in BaseUrl, but no value provided in urlParameters option");n=n.replace(i[0],o[i[1]])}return n}function ot(t){return function(){var e=t.apply(this,arguments);return new Promise((function(t,n){return function r(o,i){try{var a=e[o](i),u=a.value}catch(t){return void n(t)}if(!a.done)return Promise.resolve(u).then((function(t){r("next",t)}),(function(t){r("throw",t)}));t(u)}("next")}))}}var it=function(t,e){var n;"function"==typeof e.onRequest&&t.interceptors.request.use((n=ot(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,n;case 3:return t.t1=t.sent,t.abrupt("return",t.t0.onRequest.call(t.t0,t.t1));case 5:case"end":return t.stop()}}),t,void 0)}))),function(t){return n.apply(this,arguments)}))},at=function(t,e){var n,r,o="function"==typeof e.onResponse,i="function"==typeof e.onResponseError;(o||i)&&t.interceptors.response.use(o?(r=ot(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,n;case 3:return t.t1=t.sent,t.abrupt("return",t.t0.onResponse.call(t.t0,t.t1));case 5:case"end":return t.stop()}}),t,void 0)}))),function(t){return r.apply(this,arguments)}):void 0,i?(n=ot(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,n;case 3:return t.t1=t.sent,t.abrupt("return",t.t0.onResponseError.call(t.t0,t.t1));case 5:case"end":return t.stop()}}),t,void 0)}))),function(t){return n.apply(this,arguments)}):void 0)},ut=function(t){var e=t.baseURL,n=void 0===e?null:e,r=t.middleware,o=void 0===r?null:r,i=t.options,a=void 0===i?{}:i,u=Z.a.create({baseURL:rt(n,a)});return u.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",u.defaults.maxRedirects=0,null!==o&&function(t,e){e.forEach((function(e){return at(t,e)})),e.reverse().forEach((function(e){return it(t,e)}))}(u,o),new nt(u)},ct=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=t.toLowerCase(),o=null,i=null;return null!==n&&(i="function"==typeof n.getData?n.getData():n),"get"===r&&(o=i,i=null),new y(r,e,o,i)}}])}));
//# sourceMappingURL=main.js.map
