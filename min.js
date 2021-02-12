self.uhtml=function(t){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function o(t,n){return(o=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function u(t,n,e){return(u=c()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var c=new(Function.bind.apply(t,r));return e&&o(c,e.prototype),c}).apply(null,arguments)}function i(t){var n="function"==typeof Map?new Map:void 0;return(i=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,c)}function c(){return u(t,arguments,r(this).constructor)}return c.prototype=Object.create(t.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),o(c,t)})(t)}function a(t,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}var f="".replace,s=/[&<>'"]/g,l={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},p=function(t){return l[t]},y=function(t){return f.call(t,s,p)},h=/([^\s\\>"'=]+)\s*=\s*(['"]?)$/,b=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,v=/<[a-z][^>]+$/i,g=/>[^<>]*$/,w=/<([a-z]+[a-z0-9:._-]*)([^>]*?)(\/>)/gi,m=/\s+$/,d=function t(n,e){return 0<e--&&(v.test(n[e])||!g.test(n[e])&&t(n,e))},S=function(t,n,e){return b.test(n)?t:"<".concat(n).concat(e.replace(m,""),"></").concat(n,">")},j=function(t,n,e){for(var r=[],o=t.length,c=function(e){var o=t[e-1];r.push(h.test(o)&&d(t,e)?o.replace(h,(function(t,r,o){return"".concat(n).concat(e-1,"=").concat(o||'"').concat(r).concat(o?"":'"')})):"".concat(o,"\x3c!--").concat(n).concat(e-1,"--\x3e"))},u=1;u<o;u++)c(u);r.push(t[o-1]);var i=r.join("").trim();return e?i:i.replace(w,S)},k=Array.isArray,x=Function.toString,O=Object.keys,$=function(t){return function(n){"function"==typeof n?n(t):n.current=t}}(null),_="isµ"+Date.now(),R=new RegExp("(\x3c!--".concat(_,"(\\d+)--\x3e|\\s*").concat(_,"(\\d+)=('|\")([^\\4]+?)\\4)"),"g"),A=function(t,n,e){return" ".concat(t,"=").concat(n).concat(y(e)).concat(n)},E=function t(e){switch(n(e)){case"string":return y(e);case"boolean":case"number":return String(e);case"object":switch(!0){case k(e):return e.map(t).join("");case e instanceof z:return e.toString()}}return null==e?"":y(String(e))},z=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&o(t,n)}(f,t);var n,u,i=(n=f,u=c(),function(){var t,e=r(n);if(u){var o=r(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return a(this,t)});function f(){return e(this,f),i.apply(this,arguments)}return f}(i(String)),C=function(t,e,r){for(var o=j(t,_,r),c=[],u=0,i=null,a=function(){var t=o.slice(u,i.index);if(u=i.index+i[0].length,i[2])c.push((function(n){return t+E(n)}));else{var e=i[5],r=i[4];switch(!0){case"aria"===e:c.push((function(n){return t+O(n).map(P,n).join("")}));break;case"ref"===e:c.push((function(n){return $(n),t}));break;case"?"===e[0]:var a=e.slice(1).toLowerCase();c.push((function(n){var e=t;return n&&(e+=" ".concat(a)),e}));break;case"."===e[0]:var f=e.slice(1).toLowerCase();c.push("dataset"===f?function(n){return t+O(n).map(L,n).join("")}:function(n){var e=t;return null!=n&&!1!==n&&(e+=!0===n?" ".concat(f):A(f,r,n)),e});break;case"on"===e.slice(0,2):c.push((function(o){var c=t;switch(n(o)){case"object":if(!(e in o))break;if("function"!=typeof(o=o[e]))break;case"function":if(o.toString===x)break;case"string":c+=A(e,r,o)}return c}));break;default:c.push((function(n){var o=t;return null!=n&&(o+=A(e,r,n)),o}))}}};i=R.exec(o);)a();var f=c.length;if(f!==e)throw new Error("invalid template ".concat(t));if(f){var s=c[f-1],l=o.slice(u);c[f-1]=function(t){return s(t)+l}}else c.push((function(){return o}));return c};function P(t){var n=y(this[t]);return"role"===t?' role="'.concat(n,'"'):" aria-".concat(t.toLowerCase(),'="').concat(n,'"')}function L(t){return" data-".concat((n=t,n.replace(/(([A-Z0-9])([A-Z0-9][a-z]))|(([a-z])([A-Z]))/g,"$2$5-$3$6").toLowerCase()),'="').concat(y(this[t]),'"');var n}var D,F=(D=new WeakMap,{get:function(t){return D.get(t)},set:function(t,n){return D.set(t,n),n}}),M=function(t){var n=function(n){for(var e=arguments.length,r=new Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];var c=r.length,u=F.get(n)||F.set(n,C(n,c,t));return new z(c?r.map(q,u).join(""):u[0]())};return n.node=n,n.for=function(){return n},n},T=M(!1),Z=M(!0);function q(t,n){return this[n](t)}return t.Hole=z,t.html=T,t.render=function(t,n){var e=("function"==typeof n?n():n).toString();return"function"==typeof t?t(e):(t.write(e),t)},t.svg=Z,t}({});