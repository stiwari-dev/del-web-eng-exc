parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QVnC":[function(require,module,exports) {
var define;
var t,r=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(P){u=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,i=Object.create(o.prototype),a=new G(n||[]);return i._invoke=function(t,r,e){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return F()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=j(a,e);if(c){if(c===v)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===l)throw n=y,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var u=f(t,r,e);if("normal"===u.type){if(n=e.done?y:s,u.arg===v)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=y,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(P){return{type:"throw",arg:P}}}t.wrap=h;var l="suspendedStart",s="suspendedYield",p="executing",y="completed",v={};function d(){}function g(){}function m(){}var w={};w[i]=function(){return this};var L=Object.getPrototypeOf,x=L&&L(L(N([])));x&&x!==e&&n.call(x,i)&&(w=x);var b=m.prototype=d.prototype=Object.create(w);function E(t){["next","throw","return"].forEach(function(r){u(t,r,function(t){return this._invoke(r,t)})})}function _(t,r){var e;this._invoke=function(o,i){function a(){return new r(function(e,a){!function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var h=u.arg,l=h.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then(function(t){e("next",t,a,c)},function(t){e("throw",t,a,c)}):r.resolve(l).then(function(t){h.value=t,a(h)},function(t){return e("throw",t,a,c)})}c(u.arg)}(o,i,e,a)})}return e=e?e.then(a,a):a()}}function j(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function k(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:F}}function F(){return{value:r,done:!0}}return g.prototype=b.constructor=m,m.constructor=g,g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},E(_.prototype),_.prototype[a]=function(){return this},t.AsyncIterator=_,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new _(h(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},E(b),u(b,c,"Generator"),b[i]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=N,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}},t}("object"==typeof module?module.exports:{});try{regeneratorRuntime=r}catch(e){Function("r","regeneratorRuntime = r")(r)}
},{}],"PMvg":[function(require,module,exports) {
module.exports=require("regenerator-runtime");
},{"regenerator-runtime":"QVnC"}],"agGE":[function(require,module,exports) {
function n(n,t,o,r,e,i,u){try{var c=n[i](u),v=c.value}catch(a){return void o(a)}c.done?t(v):Promise.resolve(v).then(r,e)}function t(t){return function(){var o=this,r=arguments;return new Promise(function(e,i){var u=t.apply(o,r);function c(t){n(u,e,i,c,v,"next",t)}function v(t){n(u,e,i,c,v,"throw",t)}c(void 0)})}}module.exports=t;
},{}],"fcMS":[function(require,module,exports) {
function n(n,o){if(!(n instanceof o))throw new TypeError("Cannot call a class as a function")}module.exports=n;
},{}],"P8NW":[function(require,module,exports) {
function e(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function r(r,n,t){return n&&e(r.prototype,n),t&&e(r,t),r}module.exports=r;
},{}],"X7CY":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=n(require("@babel/runtime/regenerator")),t=n(require("@babel/runtime/helpers/asyncToGenerator")),r=n(require("@babel/runtime/helpers/classCallCheck")),s=n(require("@babel/runtime/helpers/createClass"));function n(e){return e&&e.__esModule?e:{default:e}}var u=function(){function n(){(0,r.default)(this,n),this.items=[],this.searchString="",this.searchResults=[]}return(0,s.default)(n,[{key:"getFurnituresData",value:function(){var r=(0,t.default)(e.default.mark(function t(){var r,s;return e.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://del-web-eng-exc.herokuapp.com/furnitures");case 2:return r=e.sent,e.next=5,r.json();case 5:s=e.sent,this.items=s.furnituresList;case 7:case"end":return e.stop()}},t,this)}));return function(){return r.apply(this,arguments)}}()},{key:"filterFurnitures",value:function(e){var t=this;this.searchString=e.toLowerCase(),this.searchResults=this.items.filter(function(e){return e.name.includes(t.searchString)||e.type.includes(t.searchString)})}}]),n}();exports.default=u;
},{"@babel/runtime/regenerator":"PMvg","@babel/runtime/helpers/asyncToGenerator":"agGE","@babel/runtime/helpers/classCallCheck":"fcMS","@babel/runtime/helpers/createClass":"P8NW"}],"NVR6":[function(require,module,exports) {
function n(n,r){(null==r||r>n.length)&&(r=n.length);for(var e=0,l=new Array(r);e<r;e++)l[e]=n[e];return l}module.exports=n;
},{}],"XfJI":[function(require,module,exports) {
var r=require("./arrayLikeToArray");function a(a){if(Array.isArray(a))return r(a)}module.exports=a;
},{"./arrayLikeToArray":"NVR6"}],"OMTj":[function(require,module,exports) {
function e(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}module.exports=e;
},{}],"UyFj":[function(require,module,exports) {
var r=require("./arrayLikeToArray");function t(t,e){if(t){if("string"==typeof t)return r(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?r(t,e):void 0}}module.exports=t;
},{"./arrayLikeToArray":"NVR6"}],"wFNi":[function(require,module,exports) {
function e(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}module.exports=e;
},{}],"Fhqp":[function(require,module,exports) {
var r=require("./arrayWithoutHoles"),e=require("./iterableToArray"),u=require("./unsupportedIterableToArray"),a=require("./nonIterableSpread");function o(o){return r(o)||e(o)||u(o)||a()}module.exports=o;
},{"./arrayWithoutHoles":"XfJI","./iterableToArray":"OMTj","./unsupportedIterableToArray":"UyFj","./nonIterableSpread":"wFNi"}],"FYfT":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=a(require("@babel/runtime/helpers/toConsumableArray"));function a(n){return n&&n.__esModule?n:{default:n}}var e=function(a,e,i){var s,t=document.querySelector(".furnitures-grid");s=a.length?a.slice((e-1)*i,e*i).map(function(a){return'\n        <a class="furniture-tile" href="#'.concat(a.id,'">\n            <div class="image-container">\n                <img src="/assets/images/').concat(a.image,'" alt="image">\n                <div class="stripe"></div>\n            </div>\n            <div class="name"><strong>').concat(a.name,'</strong></div>\n            <div class="type-price">\n                <span class="type"><strong>').concat(a.type,'</strong></span>\n                <span class="price">$').concat(a.price,'</span>\n            </div>\n            <div class="ratings-cart">\n                <div class="ratings">').concat((0,n.default)(Array(5).keys()).map(function(n){return n+1<=a.rating?'<i class="fas fa-star"></i>':'<i class="far fa-star"></i>'}).join(" "),'\n                </div>\n                <span class="cart"><i class="fa fa-cart-plus" aria-hidden="true"></i></span>\n            </div>\n        </a>')}).join(""):'<h2 class="text-center">No furnitures found!</h2>',t.innerHTML=s},i=function(a,e){var i=document.querySelector(".pagination");if(a){var s=(0,n.default)(Array(a).keys()).map(function(n){return'\n            <span class="page-number" data-goto="'.concat(n+1,'">\n                <input type="radio" id="').concat(n+1,'" name="page" value="').concat(n+1,'" class="page-radio-button" ').concat(n+1===e?"checked":"",'>\n                <label for="').concat(n+1,'" class="page-label"><strong>').concat(n+1,"</strong></label>\n            </span>\n        ")}).join("");s+='\n            <span class="next-button">&gt;</span> \n        ',i.innerHTML=s}else i.innerHTML=""},s=function(){document.querySelector("main .container").innerHTML='\n        <div class="layout">\n            \x3c!-- FILTERS SECTION --\x3e\n            <div class="filters">\n                <h4 class="title">FILTER BY</h4>\n                <div class="filter-options">\n                    <div class="filter-option">\n                        <span>Collection</span>\n                        <i class="fa fa-angle-down" aria-hidden="true"></i>\n                    </div>\n                    <div class="filter-option">\n                        <span>Color</span>\n                        <i class="fa fa-angle-down" aria-hidden="true"></i>\n                    </div>\n                    <div class="filter-option">\n                        <span>Category</span>\n                        <i class="fa fa-angle-down" aria-hidden="true"></i>\n                    </div>\n                    <div class="filter-option-price">\n                        <span class="label">Price Range</span>\n                        <input type="range" class="slider" id="price-slider" name="price-slider">\n                        <div class="range-value">\n                            <span>$1300</span>\n                            <span>$10,000+</span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            \x3c!-- FURNITURES GRID SECTION --\x3e\n            <div class="furnitures-grid"></div>\n        </div>\n        \x3c!-- PAGINATION --\x3e\n        <div class="pagination"></div>\n    '},t=function(n){document.querySelector("main .container").innerHTML='\n        <div class="furniture-page">\n            <div class="furniture-image">\n                <img src="/assets/images/'.concat(n.image,'" alt="image">\n            </div>\n            <div class="arrow">\n                <i class="fas fa-arrow-right"></i>\n            </div>\n            <div class="furniture-details">\n                <h4 class="type">').concat(n.type,'</h4>\n                <h2 class="name">').concat(n.name,'</h2>\n                <p class="description">').concat(n.description,'</p>\n                <h4 class="ppu-text">Price per unit</h4>\n                <div class="options">\n                    <h1 class="price">$').concat(n.price,'</h1>\n                    <span class="buy-now">Buy Now</span>\n                    <span class="cart grey-text"><i class="fa fa-cart-plus" aria-hidden="true"></i></span>\n                </div>\n            </div>\n        </div>\n    ')},r=function(){document.querySelector("main .container").innerHTML='<h2 class="text-center">Oops! Something went wrong.</h2>'},c=function(){document.querySelector(".loader-container").style.visibility="visible"},o=function(){document.querySelector(".loader-container").style.visibility="hidden"},l=function(){document.querySelector(".search-input").style.visibility="visible"},d=function(){document.querySelector(".search-input").style.visibility="hidden"},u={renderFurnitures:e,renderPagination:i,renderFurnituresListPage:s,renderFurniturePage:t,showError:r,showLoader:c,hideLoader:o,showSearch:l,hideSearch:d};exports.default=u;
},{"@babel/runtime/helpers/toConsumableArray":"Fhqp"}],"FOZT":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e={mainContainer:document.querySelector("main .container"),layout:document.querySelector(".layout"),filters:document.querySelector(".filters"),searchInput:document.querySelector(".search-part input"),furnituresGrid:document.querySelector(".furnitures-grid"),paginationContainer:document.querySelector(".pagination")},t=function(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;return function(){for(var n=arguments.length,o=new Array(n),u=0;u<n;u++)o[u]=arguments[u];t&&clearTimeout(t),t=setTimeout(function(){e.apply(void 0,o)},r)}},r={elements:e,debounce:t};exports.default=r;
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=n(require("@babel/runtime/regenerator")),r=n(require("@babel/runtime/helpers/asyncToGenerator")),t=n(require("./models/Furnitures")),a=n(require("./views/furniture")),u=n(require("./utils"));function n(e){return e&&e.__esModule?e:{default:e}}var s={furnitures:null,itemsPerPage:9,totalPages:1,currentPage:1},i=function(){var a=(0,r.default)(e.default.mark(function r(){return e.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s.furnitures=new t.default,e.next=3,s.furnitures.getFurnituresData();case 3:s.totalPages=Math.ceil(s.furnitures.items.length/s.itemsPerPage);case 4:case"end":return e.stop()}},r)}));return function(){return a.apply(this,arguments)}}(),c=function(){var t=(0,r.default)(e.default.mark(function r(){var t,u;return e.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=window.location.hash.replace("#",""),e.prev=1,!t){e.next=12;break}return a.default.showLoader(),e.next=6,i();case 6:a.default.hideLoader(),u=s.furnitures.items.find(function(e){return e.id===t}),a.default.renderFurniturePage(u),a.default.hideSearch(),e.next=20;break;case 12:return a.default.renderFurnituresListPage(),a.default.showLoader(),e.next=16,i();case 16:a.default.hideLoader(),a.default.renderFurnitures(s.furnitures.items,s.currentPage,s.itemsPerPage),a.default.renderPagination(s.totalPages,s.currentPage),a.default.showSearch();case 20:e.next=26;break;case 22:e.prev=22,e.t0=e.catch(1),a.default.showError(),a.default.hideLoader();case 26:case"end":return e.stop()}},r,null,[[1,22]])}));return function(){return t.apply(this,arguments)}}();["hashchange","load"].forEach(function(e){return window.addEventListener(e,c)});var d=function(e){var r=e.target.value;s.furnitures.filterFurnitures(r),s.totalPages=Math.ceil(s.furnitures.searchResults.length/s.itemsPerPage),s.currentPage=1,a.default.renderFurnitures(s.furnitures.searchResults,s.currentPage,s.itemsPerPage),a.default.renderPagination(s.totalPages,s.currentPage)};document.querySelector(".search-part input").addEventListener("input",u.default.debounce(d,500));var l=function(e){if(e.target.closest(".next-button")&&s.totalPages>s.currentPage&&(s.currentPage+=1,a.default.renderFurnitures(s.furnitures.items,s.currentPage,s.itemsPerPage),a.default.renderPagination(s.totalPages,s.currentPage)),e.target.closest(".page-number")){var r=e.target.closest(".page-number").dataset.goto;s.currentPage=Number(r),s.furnitures.searchString?a.default.renderFurnitures(s.furnitures.searchResults,s.currentPage,s.itemsPerPage):a.default.renderFurnitures(s.furnitures.items,s.currentPage,s.itemsPerPage),a.default.renderPagination(s.totalPages,s.currentPage)}};document.addEventListener("click",l);
},{"@babel/runtime/regenerator":"PMvg","@babel/runtime/helpers/asyncToGenerator":"agGE","./models/Furnitures":"X7CY","./views/furniture":"FYfT","./utils":"FOZT"}]},{},["Focm"], null)
//# sourceMappingURL=/src.b44428eb.js.map