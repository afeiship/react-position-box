!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("prop-types"),require("react")):"function"==typeof define&&define.amd?define(["classnames","prop-types","react"],t):"object"==typeof exports?exports.ReactPositionBox=t(require("classnames"),require("prop-types"),require("react")):e.ReactPositionBox=t(e.classnames,e["prop-types"],e.react)}(this,function(e,t,o){return function(e){function t(r){if(o[r])return o[r].exports;var n=o[r]={exports:{},id:r,loaded:!1};return e[r].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var o={};return t.m=e,t.c=o,t.p="/",t(0)}([function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.ReactPositionChild=t.ReactPositionBox=void 0;var n=o(4),i=r(n),a=o(5),u=r(a);t.ReactPositionBox=i.default,t.ReactPositionChild=u.default},function(t,o){t.exports=e},function(e,o){e.exports=t},function(e,t){e.exports=o},function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){var o={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(o[r]=e[r]);return o}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,c,f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},p=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),l=o(3),d=r(l),y=o(2),b=r(y),v=o(1),h=r(v),O=["relative","absolute","fixed"],m=(c=s=function(e){function t(){return i(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),p(t,[{key:"render",value:function(){var e=this.props,t=e.className,o=e.position,r=n(e,["className","position"]);return d.default.createElement("div",f({"data-position":o},r,{className:(0,h.default)("webkit-sassui-position-box react-position-box",t)}))}}]),t}(l.Component),s.propTypes={className:b.default.string,position:b.default.oneOf(O)},s.defaultProps={position:"relative"},c);t.default=m},function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function n(e,t){var o={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(o[r]=e[r]);return o}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,c,f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},p=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),l=o(3),d=r(l),y=o(2),b=r(y),v=o(1),h=r(v),O=["top","right","bottom","left","center","tl","tr","bl","br"],m=(c=s=function(e){function t(){return i(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),p(t,[{key:"render",value:function(){var e=this.props,t=e.className,o=e.direction,r=n(e,["className","direction"]);return d.default.createElement("span",f({"data-direction":o,className:(0,h.default)("react-position-child",t)},r))}}]),t}(l.Component),s.propTypes={className:b.default.string,direction:b.default.oneOf(O)},s.defaultProps={},c);t.default=m}])});
//# sourceMappingURL=react-position-box.js.map