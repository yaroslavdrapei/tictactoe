!function i(u,c,a){function l(t,e){if(!c[t]){if(!u[t]){var r="function"==typeof require&&require;if(!e&&r)return r(t,!0);if(d)return d(t,!0);var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}var o=c[t]={exports:{}};u[t][0].call(o.exports,function(e){return l(u[t][1][e]||e)},o,o.exports,i,u,c,a)}return c[t].exports}for(var d="function"==typeof require&&require,e=0;e<a.length;e++)l(a[e]);return l}({1:[function(e,t,r){"use strict";var u=n(e("./modules/gameover")),c=n(e("./modules/modals"));function n(e){return e&&e.__esModule?e:{default:e}}function a(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}window.addEventListener("DOMContentLoaded",function(){(0,c.default)(".modal","[data-close]",function(){r.forEach(function(e){return e.innerHTML=""}),i=0});var r=document.querySelectorAll(".block"),n=document.querySelector(".modal"),o=function(){return n.classList.remove("hide")},i=0;r.forEach(function(e,t){e.addEventListener("click",function(){e.innerHTML||(i%2==0?e.insertAdjacentHTML("beforeend",'<div class="cross">&times;</div>'):e.insertAdjacentHTML("beforeend",'<div class="circle">&bigcirc;</div>'),i++),4<i&&((0,u.default)(a(r),"cross")&&(o(),n.firstElementChild.textContent="Red wins!"),(0,u.default)(a(r),"circle")&&(o(),n.firstElementChild.textContent="Blue wins!")),9===i&&(o(),n.firstElementChild.textContent="Draw!")})})})},{"./modules/gameover":2,"./modules/modals":3}],2:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=function(e,r){var t,n=e.map(function(e){var t=e.firstElementChild;return t&&t.classList.contains(r)?1:0});if(["012","345","678","036","147","258","048","246"].forEach(function(e){n[e[0]]&&n[e[1]]&&n[e[2]]&&(t=!0)}),t)return!0};r.default=n},{}],3:[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],r=2<arguments.length?arguments[2]:void 0,n=document.querySelector(e),o=document.querySelectorAll(t);n.addEventListener("click",function(e){e.target===n&&(n.classList.add("hide"),r())}),o.forEach(function(e){e.addEventListener("click",function(){n.classList.add("hide"),r()})})};r.default=n},{}]},{},[1]);