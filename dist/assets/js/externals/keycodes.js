this.wp=this.wp||{},this.wp.keycodes=function(t){var n={};function r(e){if(n[e])return n[e].exports;var u=n[e]={i:e,l:!1,exports:{}};return t[e].call(u.exports,u,u.exports,r),u.l=!0,u.exports}return r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var u in t)r.d(e,u,function(n){return t[n]}.bind(null,u));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=228)}({1:function(t,n){!function(){t.exports=this.lodash}()},2:function(t,n){!function(){t.exports=this.wp.i18n}()},228:function(t,n,r){"use strict";function e(t,n,r){return n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function u(t){return function(t){if(Array.isArray(t)){for(var n=0,r=new Array(t.length);n<t.length;n++)r[n]=t[n];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}r.r(n);var o=r(1),i=r(2);function c(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:window).navigator.platform;return-1!==t.indexOf("Mac")||Object(o.includes)(["iPad","iPhone"],t)}r.d(n,"BACKSPACE",function(){return f}),r.d(n,"TAB",function(){return a}),r.d(n,"ENTER",function(){return l}),r.d(n,"ESCAPE",function(){return d}),r.d(n,"SPACE",function(){return s}),r.d(n,"LEFT",function(){return p}),r.d(n,"UP",function(){return b}),r.d(n,"RIGHT",function(){return y}),r.d(n,"DOWN",function(){return v}),r.d(n,"DELETE",function(){return h}),r.d(n,"F10",function(){return j}),r.d(n,"ALT",function(){return O}),r.d(n,"CTRL",function(){return m}),r.d(n,"COMMAND",function(){return g}),r.d(n,"SHIFT",function(){return S}),r.d(n,"modifiers",function(){return A}),r.d(n,"rawShortcut",function(){return w}),r.d(n,"displayShortcutList",function(){return C}),r.d(n,"displayShortcut",function(){return P}),r.d(n,"shortcutAriaLabel",function(){return E}),r.d(n,"isKeyboardEvent",function(){return _});var f=8,a=9,l=13,d=27,s=32,p=37,b=38,y=39,v=40,h=46,j=121,O="alt",m="ctrl",g="meta",S="shift",A={primary:function(t){return t()?[g]:[m]},primaryShift:function(t){return t()?[S,g]:[m,S]},primaryAlt:function(t){return t()?[O,g]:[m,O]},secondary:function(t){return t()?[S,O,g]:[m,S,O]},access:function(t){return t()?[m,O]:[S,O]},ctrl:function(){return[m]},alt:function(){return[O]},ctrlShift:function(){return[m,S]},shift:function(){return[S]},shiftAlt:function(){return[S,O]}},w=Object(o.mapValues)(A,function(t){return function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c;return[].concat(u(t(r)),[n.toLowerCase()]).join("+")}}),C=Object(o.mapValues)(A,function(t){return function(n){var r,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c,f=i(),a=(e(r={},O,f?"⌥":"Alt"),e(r,m,f?"^":"Ctrl"),e(r,g,"⌘"),e(r,S,f?"⇧":"Shift"),r),l=t(i).reduce(function(t,n){var r=Object(o.get)(a,n,n);return[].concat(u(t),f?[r]:[r,"+"])},[]),d=Object(o.capitalize)(n);return[].concat(u(l),[d])}}),P=Object(o.mapValues)(C,function(t){return function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c;return t(n,r).join("")}}),E=Object(o.mapValues)(A,function(t){return function(n){var r,f=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c,a=f(),l=(e(r={},S,"Shift"),e(r,g,a?"Command":"Control"),e(r,m,"Control"),e(r,O,a?"Option":"Alt"),e(r,",",Object(i.__)("Comma")),e(r,".",Object(i.__)("Period")),e(r,"`",Object(i.__)("Backtick")),r);return[].concat(u(t(f)),[n]).map(function(t){return Object(o.capitalize)(Object(o.get)(l,t,t))}).join(a?" ":" + ")}}),_=Object(o.mapValues)(A,function(t){return function(n,r){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c,u=t(e);return!!u.every(function(t){return n["".concat(t,"Key")]})&&(r?n.key===r:Object(o.includes)(u,n.key.toLowerCase()))}})}});