!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=1)}({"/Tr7":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("jIYg");function o(t){Object(r.a)(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}},"/h9T":function(t,e,n){"use strict";function r(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}n.d(e,"a",(function(){return r}))},1:function(t,e,n){t.exports=n("mldH")},"2SVd":function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},"4+6U":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("/h9T"),o=n("jIYg"),i={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},a=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,s=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,u=/^([+-])(\d{2})(?::?(\d{2}))?$/;function c(t,e){Object(o.a)(1,arguments);var n=e||{},i=null==n.additionalDigits?2:Object(r.a)(n.additionalDigits);if(2!==i&&1!==i&&0!==i)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof t&&"[object String]"!==Object.prototype.toString.call(t))return new Date(NaN);var a,s=l(t);if(s.date){var u=f(s.date,i);a=d(u.restDateString,u.year)}if(isNaN(a)||!a)return new Date(NaN);var c,p=a.getTime(),m=0;if(s.time&&(m=h(s.time),isNaN(m)||null===m))return new Date(NaN);if(!s.timezone){var g=new Date(p+m),w=new Date(g.getUTCFullYear(),g.getUTCMonth(),g.getUTCDate(),g.getUTCHours(),g.getUTCMinutes(),g.getUTCSeconds(),g.getUTCMilliseconds());return w.setFullYear(g.getUTCFullYear()),w}return c=v(s.timezone),isNaN(c)?new Date(NaN):new Date(p+m+c)}function l(t){var e,n={},r=t.split(i.dateTimeDelimiter);if(r.length>2)return n;if(/:/.test(r[0])?(n.date=null,e=r[0]):(n.date=r[0],e=r[1],i.timeZoneDelimiter.test(n.date)&&(n.date=t.split(i.timeZoneDelimiter)[0],e=t.substr(n.date.length,t.length))),e){var o=i.timezone.exec(e);o?(n.time=e.replace(o[1],""),n.timezone=o[1]):n.time=e}return n}function f(t,e){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),r=t.match(n);if(!r)return{year:null};var o=r[1]&&parseInt(r[1]),i=r[2]&&parseInt(r[2]);return{year:null==i?o:100*i,restDateString:t.slice((r[1]||r[2]).length)}}function d(t,e){if(null===e)return null;var n=t.match(a);if(!n)return null;var r=!!n[4],o=p(n[1]),i=p(n[2])-1,s=p(n[3]),u=p(n[4]),c=p(n[5])-1;if(r)return function(t,e,n){return e>=1&&e<=53&&n>=0&&n<=6}(0,u,c)?function(t,e,n){var r=new Date(0);r.setUTCFullYear(t,0,4);var o=r.getUTCDay()||7,i=7*(e-1)+n+1-o;return r.setUTCDate(r.getUTCDate()+i),r}(e,u,c):new Date(NaN);var l=new Date(0);return function(t,e,n){return e>=0&&e<=11&&n>=1&&n<=(g[e]||(w(t)?29:28))}(e,i,s)&&function(t,e){return e>=1&&e<=(w(t)?366:365)}(e,o)?(l.setUTCFullYear(e,i,Math.max(o,s)),l):new Date(NaN)}function p(t){return t?parseInt(t):1}function h(t){var e=t.match(s);if(!e)return null;var n=m(e[1]),r=m(e[2]),o=m(e[3]);return function(t,e,n){if(24===t)return 0===e&&0===n;return n>=0&&n<60&&e>=0&&e<60&&t>=0&&t<25}(n,r,o)?36e5*n+6e4*r+1e3*o:NaN}function m(t){return t&&parseFloat(t.replace(",","."))||0}function v(t){if("Z"===t)return 0;var e=t.match(u);if(!e)return 0;var n="+"===e[1]?-1:1,r=parseInt(e[2]),o=e[3]&&parseInt(e[3])||0;return function(t,e){return e>=0&&e<=59}(0,o)?n*(36e5*r+6e4*o):NaN}var g=[31,null,31,30,31,30,31,31,30,31,30,31];function w(t){return t%400==0||t%4==0&&t%100}},"5oMp":function(t,e,n){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},"8oxB":function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(t){r=a}}();var u,c=[],l=!1,f=-1;function d(){l&&u&&(l=!1,u.length?c=u.concat(c):f=-1,c.length&&p())}function p(){if(!l){var t=s(d);l=!0;for(var e=c.length;e;){for(u=c,c=[];++f<e;)u&&u[f].run();f=-1,e=c.length}u=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function h(t,e){this.fun=t,this.array=e}function m(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new h(t,e)),1!==c.length||l||s(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"8yrV":function(t,e,n){"use strict";n.r(e);var r=n("o0o1"),o=n.n(r),i=n("PSD3"),a=n.n(i),s=n("L+tW"),u=n("blUz"),c=n("U7bs"),l=n("a1gY"),f=n.n(l),d=n("PbPh");function p(t,e,n,r,o,i,a){try{var s=t[i](a),u=s.value}catch(t){return void n(t)}s.done?e(u):Promise.resolve(u).then(r,o)}function h(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){p(i,r,o,a,s,"next",t)}function s(t){p(i,r,o,a,s,"throw",t)}a(void 0)}))}}function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){g(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n("9Wh1"),document.addEventListener("DOMContentLoaded",(function(){var t=Object(c.a)(".language-switcher .current");t&&t.addEventListener("click",(function(){t.classList.toggle("on")}));var e=Object(c.a)(".nav-icon");e&&e.addEventListener("click",(function(t){t.preventDefault(),e.classList.toggle("on"),Object(c.a)("header nav").classList.toggle("on")}));var n=Object(c.b)(".has_sub");n&&n.forEach((function(t){t.addEventListener("click",(function(e){e.preventDefault();var n=t.closest("li");n.classList.toggle("on"),n.querySelector(".sub").classList.toggle("on")}))}));var r=Object(c.b)("h3.no-package");r&&r.forEach((function(t){t.addEventListener("click",(function(e){e.preventDefault(),t.classList.toggle("on"),Object(c.a)('div.no-package[data-index="'.concat(t.getAttribute("data-index"),'"]')).classList.toggle("on")}))}));var i=Object(c.a)("#btn-search");i&&i.addEventListener("click",(function(t){t.preventDefault(),Object(c.a)("#frn_search").classList.toggle("on")}));var l=Object(c.a)(".sticky-menu"),p=l.querySelector(".close"),m=l.querySelector(".open");p&&p.addEventListener("click",(function(t){t.preventDefault(),l.classList.remove("on")})),m&&m.addEventListener("click",(function(t){t.preventDefault(),l.classList.add("on")}));var g=Object(c.b)("footer nav h6");g&&g.forEach((function(t){t.addEventListener("click",(function(e){e.preventDefault(),t.classList.toggle("collapse"),t.closest("section").querySelectorAll("ul:not(.social)").forEach((function(t){t.classList.toggle("collapse")}))}))})),Object(c.a)(".slider")&&Object(s.a)({container:".slider",items:1,controls:!1,slideBy:"page",autoplay:!0,autoplayButton:!1,autoplayButtonOutput:!1,autoplayHoverPause:!0,navPosition:"bottom"}),window.addEventListener("scroll",(function(){var t=window.pageYOffset|document.body.scrollTop,e=Object(c.a)("header");0===t?e.classList.remove("fixed"):e.classList.add("fixed")})),Object(c.a)("#timeline")&&Object(s.a)({container:"#timeline",speed:800,items:1,loop:!1,controls:!0,slideBy:1,nav:!1,autoplay:!1,controlsText:['<i class="icofont-rounded-left"></i>','<i class="icofont-rounded-right"></i>'],responsive:{640:{items:2},768:{items:3},900:{items:4}}}),Object(c.a)("#review_slider")&&Object(s.a)({container:"#review_slider",speed:800,loop:!0,controls:!1,slideBy:1,fixedWidth:200,gutter:100,nav:!1,center:!0,autoplay:!0,autoplayButton:!1,autoplayButtonOutput:!1,autoplayHoverPause:!1}),Object(c.a)(".item-wrapper")&&Object(s.a)({container:".item-wrapper",controls:!1,loop:!1,items:1,slideBy:1,fixedWidth:300,navPosition:"bottom",responsive:{640:{items:2},900:{items:3}}}),Object(u.a)().reveal(".reveal",{delay:500,duration:700,distance:"100px",origin:"bottom",afterReveal:function(t){t.querySelectorAll(".no-rotate").forEach((function(t){t.classList.remove("no-rotate")}))}});var w=Object(c.a)(".faq_section .wrapper .wrapper-inner");if(w){var y=w.querySelector(".inner");w.querySelector(".title").classList.toggle("on"),y.classList.toggle("on"),y.querySelectorAll("li").forEach((function(t,e){0===e&&t.classList.toggle("on")}))}var b=Object(c.b)(".faq_section .title");b&&b.forEach((function(t){t.addEventListener("click",(function(e){e.preventDefault(),t.classList.toggle("on");var n=t.closest(".wrapper-inner");n.querySelector(".inner").classList.toggle("on");var r=n.querySelector(".inner ul");r&&r.querySelectorAll("li").forEach((function(t,e){t.classList.remove("on")}))}))}));var x=Object(c.b)(".faq_section li h3");x&&x.forEach((function(t){var e=t.closest("li");t.addEventListener("click",(function(t){t.preventDefault(),e.classList.toggle("on")}))})),Object(c.b)(".financeCollapse")&&Object(c.b)(".financeCollapse").forEach((function(t){t.addEventListener("click",(function(e){e.preventDefault(),Object(c.b)(".financeCollapsePanel").forEach((function(e){t.getAttribute("data-year")===e.getAttribute("data-year")&&e.classList.toggle("on")}))}))}));var _=Object(c.a)("#frm_contact");if(_){var k={name:{presence:{allowEmpty:!1,message:"^"+Object(c.a)("#ctrl_name").getAttribute("data-error-required")}},email:{presence:{allowEmpty:!1,message:"^"+Object(c.a)("#ctrl_email").getAttribute("data-error-required")},email:{message:"^"+Object(c.a)("#ctrl_email").getAttribute("data-error-email")}},tel:{presence:{allowEmpty:!1,message:"^"+Object(c.a)("#ctrl_tel").getAttribute("data-error-required")}}};"leadform"===_.getAttribute("data-form-type")&&(k=v(v({},k),{},{available_time:{presence:{allowEmpty:!1,message:"^"+Object(c.a)("#ctrl_available_time").getAttribute("data-error-required")}},consent:{presence:{allowEmpty:!1,message:"^"+Object(c.a)("#ctrl_consent").getAttribute("data-error-required")}}}));var O=function(){var t=h(o.a.mark((function t(e){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return _.classList.add("ajax_loader"),t.prev=1,t.next=4,fetch(_.getAttribute("action"),{method:"post",headers:{Accept:"application/json","Content-Type":"application/json","X-CSRF-TOKEN":Object(c.a)('meta[name="csrf-token"]').getAttribute("content")},body:JSON.stringify(e)});case 4:return n=t.sent,t.next=7,n.json();case 7:"success"==t.sent.status?"leadform"===_.getAttribute("data-form-type")?a.a.fire({icon:"success",title:"".concat(_.getAttribute("data-success")),html:"".concat(_.getAttribute("data-success-description"),'<br>\n<a href="/product/').concat(_.getAttribute("data-friendly_url"),'#two-tone-icon" style="display: inline-block;color: #FFFFFF" class="swal2-confirm swal2-styled">').concat(_.getAttribute("data-success-button"),"</a>"),showConfirmButton:!1}):a.a.fire(_.getAttribute("data-success"),_.getAttribute("data-success-description"),"success"):"leadform"===_.getAttribute("data-form-type")?a.a.fire({title:'<i class="icofont-alarm" style="color:red"></i>',html:"<strong>".concat(_.getAttribute("data-error"),"</strong><br>").concat(_.getAttribute("data-error-description")),confirmButtonText:_.getAttribute("data-error-button")}):a.a.fire(_.getAttribute("data-error"),_.getAttribute("data-errors-description"),"error"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),"leadform"===_.getAttribute("data-form-type")?a.a.fire({title:'<i class="icofont-alarm" style="color:red"></i>',html:"<strong>".concat(_.getAttribute("data-error"),"</strong><br>").concat(_.getAttribute("data-error-description")),confirmButtonText:_.getAttribute("data-error-button")}):a.a.fire({title:_.getAttribute("data-error"),text:_.getAttribute("data-error-description"),icon:"error"});case 14:_.classList.remove("ajax_loader");case 15:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}();_.addEventListener("submit",function(){var t=h(o.a.mark((function t(e){var n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),Object(c.b)("cite",_).forEach((function(t){return t.remove()})),Object(c.b)(".controls-wrapper",_).forEach((function(t){return t.classList.remove("error")})),Object(c.b)("input,select,textarea",_).forEach((function(t){return t.classList.remove("error")})),n={name:Object(c.a)("#ctrl_name").value,email:Object(c.a)("#ctrl_email").value,tel:Object(c.a)("#ctrl_tel").value,message:Object(c.a)("#ctrl_message").value},"leadform"===_.getAttribute("data-form-type")&&(n=v(v({},n),{},{available_time:Object(c.a)("#ctrl_available_time").value,consent:Object(c.a)("#ctrl_consent").checked?1:"",product_id:Object(c.a)("#ctrl_product_id").value})),!(r=f()(n,k))){t.next=10;break}return Object.keys(r).map((function(t){return Object(d.f)(Object(c.a)("#ctrl_".concat(t)),r[t])})),t.abrupt("return",!1);case 10:return t.next=12,O(n);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),["change"].forEach((function(t){Object(c.b)("input,select,textarea",_).forEach((function(e){return e.addEventListener(t,(function(t){t.preventDefault(),Object(d.g)(e,k)}))}))}))}}))},"9Wh1":function(t,e,n){window._=n("LvDl"),window.axios=n("vDqi"),window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest"},"9rSQ":function(t,e,n){"use strict";var r=n("xTJ+");function o(){this.handlers=[]}o.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},o.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},o.prototype.forEach=function(t){r.forEach(this.handlers,(function(e){null!==e&&t(e)}))},t.exports=o},B9Yq:function(t,e){t.exports=function(){throw new Error("define cannot be used indirect")}},CgaS:function(t,e,n){"use strict";var r=n("xTJ+"),o=n("MLWZ"),i=n("9rSQ"),a=n("UnBK"),s=n("SntB");function u(t){this.defaults=t,this.interceptors={request:new i,response:new i}}u.prototype.request=function(t){"string"==typeof t?(t=arguments[1]||{}).url=arguments[0]:t=t||{},(t=s(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var e=[a,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach((function(t){e.unshift(t.fulfilled,t.rejected)})),this.interceptors.response.forEach((function(t){e.push(t.fulfilled,t.rejected)}));e.length;)n=n.then(e.shift(),e.shift());return n},u.prototype.getUri=function(t){return t=s(this.defaults,t),o(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(t){u.prototype[t]=function(e,n){return this.request(s(n||{},{method:t,url:e,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(t){u.prototype[t]=function(e,n,r){return this.request(s(r||{},{method:t,url:e,data:n}))}})),t.exports=u},DfZB:function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},HSsa:function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},JCDJ:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));function r(t){return t.getTime()%6e4}function o(t){var e=new Date(t.getTime()),n=Math.ceil(e.getTimezoneOffset());return e.setSeconds(0,0),6e4*n+(n>0?(6e4+r(e))%6e4:r(e))}},JEQr:function(t,e,n){"use strict";(function(e){var r=n("xTJ+"),o=n("yK9s"),i={"Content-Type":"application/x-www-form-urlencoded"};function a(t,e){!r.isUndefined(t)&&r.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var s,u={adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==e&&"[object process]"===Object.prototype.toString.call(e))&&(s=n("tQ2B")),s),transformRequest:[function(t,e){return o(e,"Accept"),o(e,"Content-Type"),r.isFormData(t)||r.isArrayBuffer(t)||r.isBuffer(t)||r.isStream(t)||r.isFile(t)||r.isBlob(t)?t:r.isArrayBufferView(t)?t.buffer:r.isURLSearchParams(t)?(a(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):r.isObject(t)?(a(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(t){return t>=200&&t<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],(function(t){u.headers[t]={}})),r.forEach(["post","put","patch"],(function(t){u.headers[t]=r.merge(i)})),t.exports=u}).call(this,n("8oxB"))},JhOC:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("/Tr7"),o=n("jIYg");function i(t,e){Object(o.a)(2,arguments);var n=Object(r.a)(t),i=Object(r.a)(e),a=n.getTime()-i.getTime();return a<0?-1:a>0?1:a}},"L+tW":function(t,e,n){"use strict";n.d(e,"a",(function(){return I}));var r=window,o=r.requestAnimationFrame||r.webkitRequestAnimationFrame||r.mozRequestAnimationFrame||r.msRequestAnimationFrame||function(t){return setTimeout(t,16)},i=window,a=i.cancelAnimationFrame||i.mozCancelAnimationFrame||function(t){clearTimeout(t)};function s(){for(var t,e,n,r=arguments[0]||{},o=1,i=arguments.length;o<i;o++)if(null!==(t=arguments[o]))for(e in t)r!==(n=t[e])&&void 0!==n&&(r[e]=n);return r}function u(t){return["true","false"].indexOf(t)>=0?JSON.parse(t):t}function c(t,e,n,r){if(r)try{t.setItem(e,n)}catch(t){}return n}function l(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var f=document.documentElement;function d(t){var e="";return t.fake&&(e=f.style.overflow,t.style.background="",t.style.overflow=f.style.overflow="hidden",f.appendChild(t)),e}function p(t,e){t.fake&&(t.remove(),f.style.overflow=e,f.offsetHeight)}function h(t,e,n,r){"insertRule"in t?t.insertRule(e+"{"+n+"}",r):t.addRule(e,n,r)}function m(t){return("insertRule"in t?t.cssRules:t.rules).length}function v(t,e,n){for(var r=0,o=t.length;r<o;r++)e.call(n,t[r],r)}var g="classList"in document.createElement("_"),w=g?function(t,e){return t.classList.contains(e)}:function(t,e){return t.className.indexOf(e)>=0},y=g?function(t,e){w(t,e)||t.classList.add(e)}:function(t,e){w(t,e)||(t.className+=" "+e)},b=g?function(t,e){w(t,e)&&t.classList.remove(e)}:function(t,e){w(t,e)&&(t.className=t.className.replace(e,""))};function x(t,e){return t.hasAttribute(e)}function _(t,e){return t.getAttribute(e)}function k(t){return void 0!==t.item}function O(t,e){if(t=k(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var r in e)t[n].setAttribute(r,e[r])}function j(t,e){t=k(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,r=t.length;r--;)for(var o=n;o--;)t[r].removeAttribute(e[o])}function E(t){for(var e=[],n=0,r=t.length;n<r;n++)e.push(t[n]);return e}function C(t,e){"none"!==t.style.display&&(t.style.display="none")}function A(t,e){"none"===t.style.display&&(t.style.display="")}function T(t){return"none"!==window.getComputedStyle(t).display}function S(t){if("string"==typeof t){var e=[t],n=t.charAt(0).toUpperCase()+t.substr(1);["Webkit","Moz","ms","O"].forEach((function(r){"ms"===r&&"transform"!==t||e.push(r+n)})),t=e}for(var r=document.createElement("fakeelement"),o=(t.length,0);o<t.length;o++){var i=t[o];if(void 0!==r.style[i])return i}return!1}function L(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var P=!1;try{var B=Object.defineProperty({},"passive",{get:function(){P=!0}});window.addEventListener("test",null,B)}catch(t){}var D=!!P&&{passive:!0};function M(t,e,n){for(var r in e){var o=["touchstart","touchmove"].indexOf(r)>=0&&!n&&D;t.addEventListener(r,e[r],o)}}function N(t,e){for(var n in e){var r=["touchstart","touchmove"].indexOf(n)>=0&&D;t.removeEventListener(n,e[n],r)}}function R(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){e.type=t,this.topics[t]&&this.topics[t].forEach((function(n){n(e,t)}))}}}Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var I=function(t){t=s({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,center:!1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,preventScrollOnTouch:!1,freezable:!0,onInit:!1,useLocalStorage:!0,nonce:!1},t||{});var e=document,n=window,r={ENTER:13,SPACE:32,LEFT:37,RIGHT:39},i={},f=t.useLocalStorage;if(f){var g=navigator.userAgent,k=new Date;try{(i=n.localStorage)?(i.setItem(k,k),f=i.getItem(k)==k,i.removeItem(k)):f=!1,f||(i={})}catch(t){f=!1}f&&(i.tnsApp&&i.tnsApp!==g&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach((function(t){i.removeItem(t)})),localStorage.tnsApp=g)}var P=i.tC?u(i.tC):c(i,"tC",function(){var t=document,e=l(),n=d(e),r=t.createElement("div"),o=!1;e.appendChild(r);try{for(var i,a="(10px * 10)",s=["calc"+a,"-moz-calc"+a,"-webkit-calc"+a],u=0;u<3;u++)if(i=s[u],r.style.width=i,100===r.offsetWidth){o=i.replace(a,"");break}}catch(t){}return e.fake?p(e,n):r.remove(),o}(),f),B=i.tPL?u(i.tPL):c(i,"tPL",function(){var t,e=document,n=l(),r=d(n),o=e.createElement("div"),i=e.createElement("div"),a="";o.className="tns-t-subp2",i.className="tns-t-ct";for(var s=0;s<70;s++)a+="<div></div>";return i.innerHTML=a,o.appendChild(i),n.appendChild(o),t=Math.abs(o.getBoundingClientRect().left-i.children[67].getBoundingClientRect().left)<2,n.fake?p(n,r):o.remove(),t}(),f),D=i.tMQ?u(i.tMQ):c(i,"tMQ",function(){if(window.matchMedia||window.msMatchMedia)return!0;var t,e=document,n=l(),r=d(n),o=e.createElement("div"),i=e.createElement("style"),a="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return i.type="text/css",o.className="tns-mq-test",n.appendChild(i),n.appendChild(o),i.styleSheet?i.styleSheet.cssText=a:i.appendChild(e.createTextNode(a)),t=window.getComputedStyle?window.getComputedStyle(o).position:o.currentStyle.position,n.fake?p(n,r):o.remove(),"absolute"===t}(),f),z=i.tTf?u(i.tTf):c(i,"tTf",S("transform"),f),q=i.t3D?u(i.t3D):c(i,"t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,r=l(),o=d(r),i=n.createElement("p"),a=t.length>9?"-"+t.slice(0,-9).toLowerCase()+"-":"";return a+="transform",r.insertBefore(i,null),i.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(i).getPropertyValue(a),r.fake?p(r,o):i.remove(),void 0!==e&&e.length>0&&"none"!==e}(z),f),F=i.tTDu?u(i.tTDu):c(i,"tTDu",S("transitionDuration"),f),U=i.tTDe?u(i.tTDe):c(i,"tTDe",S("transitionDelay"),f),H=i.tADu?u(i.tADu):c(i,"tADu",S("animationDuration"),f),W=i.tADe?u(i.tADe):c(i,"tADe",S("animationDelay"),f),V=i.tTE?u(i.tTE):c(i,"tTE",L(F,"Transition"),f),Y=i.tAE?u(i.tAE):c(i,"tAE",L(H,"Animation"),f),$=n.console&&"function"==typeof n.console.warn,J=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],Z={};if(J.forEach((function(n){if("string"==typeof t[n]){var r=t[n],o=e.querySelector(r);if(Z[n]=r,!o||!o.nodeName)return void($&&console.warn("Can't find",t[n]));t[n]=o}})),!(t.container.children.length<1)){var K=t.responsive,X=t.nested,G="carousel"===t.mode;if(K){0 in K&&(t=s(t,K[0]),delete K[0]);var Q={};for(var tt in K){var et=K[tt];et="number"==typeof et?{items:et}:et,Q[tt]=et}K=Q,Q=null}if(G||function t(e){for(var n in e)G||("slideBy"===n&&(e[n]="page"),"edgePadding"===n&&(e[n]=!1),"autoHeight"===n&&(e[n]=!1)),"responsive"===n&&t(e[n])}(t),!G){t.axis="horizontal",t.slideBy="page",t.edgePadding=!1;var nt=t.animateIn,rt=t.animateOut,ot=t.animateDelay,it=t.animateNormal}var at,st,ut="horizontal"===t.axis,ct=e.createElement("div"),lt=e.createElement("div"),ft=t.container,dt=ft.parentNode,pt=ft.outerHTML,ht=ft.children,mt=ht.length,vt=Pn(),gt=!1;K&&Gn(),G&&(ft.className+=" tns-vpfix");var wt,yt,bt,xt,_t,kt,Ot,jt,Et,Ct=t.autoWidth,At=Nn("fixedWidth"),Tt=Nn("edgePadding"),St=Nn("gutter"),Lt=Dn(),Pt=Nn("center"),Bt=Ct?1:Math.floor(Nn("items")),Dt=Nn("slideBy"),Mt=t.viewportMax||t.fixedWidthViewportWidth,Nt=Nn("arrowKeys"),Rt=Nn("speed"),It=t.rewind,zt=!It&&t.loop,qt=Nn("autoHeight"),Ft=Nn("controls"),Ut=Nn("controlsText"),Ht=Nn("nav"),Wt=Nn("touch"),Vt=Nn("mouseDrag"),Yt=Nn("autoplay"),$t=Nn("autoplayTimeout"),Jt=Nn("autoplayText"),Zt=Nn("autoplayHoverPause"),Kt=Nn("autoplayResetOnVisibility"),Xt=(Ot=null,jt=Nn("nonce"),Et=document.createElement("style"),Ot&&Et.setAttribute("media",Ot),jt&&Et.setAttribute("nonce",jt),document.querySelector("head").appendChild(Et),Et.sheet?Et.sheet:Et.styleSheet),Gt=t.lazyload,Qt=t.lazyloadSelector,te=[],ee=zt?(_t=function(){if(Ct||At&&!Mt)return mt-1;var e=At?"fixedWidth":"items",n=[];if((At||t[e]<mt)&&n.push(t[e]),K)for(var r in K){var o=K[r][e];o&&(At||o<mt)&&n.push(o)}return n.length||n.push(0),Math.ceil(At?Mt/Math.min.apply(null,n):Math.max.apply(null,n))}(),kt=G?Math.ceil((5*_t-mt)/2):4*_t-mt,kt=Math.max(_t,kt),Mn("edgePadding")?kt+1:kt):0,ne=G?mt+2*ee:mt+ee,re=!(!At&&!Ct||zt),oe=At?Or():null,ie=!G||!zt,ae=ut?"left":"top",se="",ue="",ce=At?function(){return Pt&&!zt?mt-1:Math.ceil(-oe/(At+St))}:Ct?function(){for(var t=0;t<ne;t++)if(wt[t]>=-oe)return t}:function(){return Pt&&G&&!zt?mt-1:zt||G?Math.max(0,ne-Math.ceil(Bt)):ne-1},le=Tn(Nn("startIndex")),fe=le,de=(An(),0),pe=Ct?null:ce(),he=t.preventActionWhenRunning,me=t.swipeAngle,ve=!me||"?",ge=!1,we=t.onInit,ye=new R,be=" tns-slider tns-"+t.mode,xe=ft.id||(xt=window.tnsId,window.tnsId=xt?xt+1:1,"tns"+window.tnsId),_e=Nn("disable"),ke=!1,Oe=t.freezable,je=!(!Oe||Ct)&&Xn(),Ee=!1,Ce={click:Br,keydown:function(t){t=Fr(t);var e=[r.LEFT,r.RIGHT].indexOf(t.keyCode);e>=0&&(0===e?Je.disabled||Br(t,-1):Ze.disabled||Br(t,1))}},Ae={click:function(t){if(ge){if(he)return;Lr()}var e=Ur(t=Fr(t));for(;e!==Qe&&!x(e,"data-nav");)e=e.parentNode;if(x(e,"data-nav")){var n=rn=Number(_(e,"data-nav")),r=At||Ct?n*mt/en:n*Bt;Pr(Ne?n:Math.min(Math.ceil(r),mt-1),t),on===n&&(fn&&Ir(),rn=-1)}},keydown:function(t){t=Fr(t);var n=e.activeElement;if(!x(n,"data-nav"))return;var o=[r.LEFT,r.RIGHT,r.ENTER,r.SPACE].indexOf(t.keyCode),i=Number(_(n,"data-nav"));o>=0&&(0===o?i>0&&qr(Ge[i-1]):1===o?i<en-1&&qr(Ge[i+1]):(rn=i,Pr(i,t)))}},Te={mouseover:function(){fn&&(Mr(),dn=!0)},mouseout:function(){dn&&(Dr(),dn=!1)}},Se={visibilitychange:function(){e.hidden?fn&&(Mr(),hn=!0):hn&&(Dr(),hn=!1)}},Le={keydown:function(t){t=Fr(t);var e=[r.LEFT,r.RIGHT].indexOf(t.keyCode);e>=0&&Br(t,0===e?-1:1)}},Pe={touchstart:Yr,touchmove:$r,touchend:Jr,touchcancel:Jr},Be={mousedown:Yr,mousemove:$r,mouseup:Jr,mouseleave:Jr},De=Mn("controls"),Me=Mn("nav"),Ne=!!Ct||t.navAsThumbnails,Re=Mn("autoplay"),Ie=Mn("touch"),ze=Mn("mouseDrag"),qe="tns-slide-active",Fe="tns-complete",Ue={load:function(t){sr(Ur(t))},error:function(t){e=Ur(t),y(e,"failed"),ur(e);var e}},He="force"===t.preventScrollOnTouch;if(De)var We,Ve,Ye=t.controlsContainer,$e=t.controlsContainer?t.controlsContainer.outerHTML:"",Je=t.prevButton,Ze=t.nextButton,Ke=t.prevButton?t.prevButton.outerHTML:"",Xe=t.nextButton?t.nextButton.outerHTML:"";if(Me)var Ge,Qe=t.navContainer,tn=t.navContainer?t.navContainer.outerHTML:"",en=Ct?mt:Kr(),nn=0,rn=-1,on=Ln(),an=on,sn="tns-nav-active",un="Carousel Page ",cn=" (Current Slide)";if(Re)var ln,fn,dn,pn,hn,mn="forward"===t.autoplayDirection?1:-1,vn=t.autoplayButton,gn=t.autoplayButton?t.autoplayButton.outerHTML:"",wn=["<span class='tns-visually-hidden'>"," animation</span>"];if(Ie||ze)var yn,bn,xn={},_n={},kn=!1,On=ut?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};Ct||Cn(_e||je),z&&(ae=z,se="translate",q?(se+=ut?"3d(":"3d(0px, ",ue=ut?", 0px, 0px)":", 0px)"):(se+=ut?"X(":"Y(",ue=")")),G&&(ft.className=ft.className.replace("tns-vpfix","")),function(){Mn("gutter");ct.className="tns-outer",lt.className="tns-inner",ct.id=xe+"-ow",lt.id=xe+"-iw",""===ft.id&&(ft.id=xe);be+=B||Ct?" tns-subpixel":" tns-no-subpixel",be+=P?" tns-calc":" tns-no-calc",Ct&&(be+=" tns-autowidth");be+=" tns-"+t.axis,ft.className+=be,G?((at=e.createElement("div")).id=xe+"-mw",at.className="tns-ovh",ct.appendChild(at),at.appendChild(lt)):ct.appendChild(lt);if(qt){(at||lt).className+=" tns-ah"}if(dt.insertBefore(ct,ft),lt.appendChild(ft),v(ht,(function(t,e){y(t,"tns-item"),t.id||(t.id=xe+"-item"+e),!G&&it&&y(t,it),O(t,{"aria-hidden":"true",tabindex:"-1"})})),ee){for(var n=e.createDocumentFragment(),r=e.createDocumentFragment(),o=ee;o--;){var i=o%mt,a=ht[i].cloneNode(!0);if(y(a,"tns-slide-cloned"),j(a,"id"),r.insertBefore(a,r.firstChild),G){var s=ht[mt-1-i].cloneNode(!0);y(s,"tns-slide-cloned"),j(s,"id"),n.appendChild(s)}}ft.insertBefore(n,ft.firstChild),ft.appendChild(r),ht=ft.children}}(),function(){if(!G)for(var e=le,r=le+Math.min(mt,Bt);e<r;e++){var o=ht[e];o.style.left=100*(e-le)/Bt+"%",y(o,nt),b(o,it)}ut&&(B||Ct?(h(Xt,"#"+xe+" > .tns-item","font-size:"+n.getComputedStyle(ht[0]).fontSize+";",m(Xt)),h(Xt,"#"+xe,"font-size:0;",m(Xt))):G&&v(ht,(function(t,e){t.style.marginLeft=function(t){return P?P+"("+100*t+"% / "+ne+")":100*t/ne+"%"}(e)})));if(D){if(F){var i=at&&t.autoHeight?Un(t.speed):"";h(Xt,"#"+xe+"-mw",i,m(Xt))}i=Rn(t.edgePadding,t.gutter,t.fixedWidth,t.speed,t.autoHeight),h(Xt,"#"+xe+"-iw",i,m(Xt)),G&&(i=ut&&!Ct?"width:"+In(t.fixedWidth,t.gutter,t.items)+";":"",F&&(i+=Un(Rt)),h(Xt,"#"+xe,i,m(Xt))),i=ut&&!Ct?zn(t.fixedWidth,t.gutter,t.items):"",t.gutter&&(i+=qn(t.gutter)),G||(F&&(i+=Un(Rt)),H&&(i+=Hn(Rt))),i&&h(Xt,"#"+xe+" > .tns-item",i,m(Xt))}else{G&&qt&&(at.style[F]=Rt/1e3+"s"),lt.style.cssText=Rn(Tt,St,At,qt),G&&ut&&!Ct&&(ft.style.width=In(At,St,Bt));i=ut&&!Ct?zn(At,St,Bt):"";St&&(i+=qn(St)),i&&h(Xt,"#"+xe+" > .tns-item",i,m(Xt))}if(K&&D)for(var a in K){a=parseInt(a);var s=K[a],u=(i="",""),c="",l="",f="",d=Ct?null:Nn("items",a),p=Nn("fixedWidth",a),g=Nn("speed",a),w=Nn("edgePadding",a),x=Nn("autoHeight",a),_=Nn("gutter",a);F&&at&&Nn("autoHeight",a)&&"speed"in s&&(u="#"+xe+"-mw{"+Un(g)+"}"),("edgePadding"in s||"gutter"in s)&&(c="#"+xe+"-iw{"+Rn(w,_,p,g,x)+"}"),G&&ut&&!Ct&&("fixedWidth"in s||"items"in s||At&&"gutter"in s)&&(l="width:"+In(p,_,d)+";"),F&&"speed"in s&&(l+=Un(g)),l&&(l="#"+xe+"{"+l+"}"),("fixedWidth"in s||At&&"gutter"in s||!G&&"items"in s)&&(f+=zn(p,_,d)),"gutter"in s&&(f+=qn(_)),!G&&"speed"in s&&(F&&(f+=Un(g)),H&&(f+=Hn(g))),f&&(f="#"+xe+" > .tns-item{"+f+"}"),(i=u+c+l+f)&&Xt.insertRule("@media (min-width: "+a/16+"em) {"+i+"}",Xt.cssRules.length)}}(),Wn();var jn=zt?G?function(){var t=de,e=pe;t+=Dt,e-=Dt,Tt?(t+=1,e-=1):At&&(Lt+St)%(At+St)&&(e-=1),ee&&(le>e?le-=mt:le<t&&(le+=mt))}:function(){if(le>pe)for(;le>=de+mt;)le-=mt;else if(le<de)for(;le<=pe-mt;)le+=mt}:function(){le=Math.max(de,Math.min(pe,le))},En=G?function(){var t,e,n,r,o,i,a,s,u,c,l;_r(ft,""),F||!Rt?(Cr(),Rt&&T(ft)||Lr()):(t=ft,e=ae,n=se,r=ue,o=jr(),i=Rt,a=Lr,s=Math.min(i,10),u=o.indexOf("%")>=0?"%":"px",o=o.replace(u,""),c=Number(t.style[e].replace(n,"").replace(r,"").replace(u,"")),l=(o-c)/i*s,setTimeout((function o(){i-=s,c+=l,t.style[e]=n+c+u+r,i>0?setTimeout(o,s):a()}),s)),ut||Zr()}:function(){te=[];var t={};t[V]=t[Y]=Lr,N(ht[fe],t),M(ht[le],t),Ar(fe,nt,rt,!0),Ar(le,it,nt),V&&Y&&Rt&&T(ft)||Lr()};return{version:"2.9.3",getInfo:Gr,events:ye,goTo:Pr,play:function(){Yt&&!fn&&(Rr(),pn=!1)},pause:function(){fn&&(Ir(),pn=!0)},isOn:gt,updateSliderHeight:hr,refresh:Wn,destroy:function(){if(Xt.disabled=!0,Xt.ownerNode&&Xt.ownerNode.remove(),N(n,{resize:Zn}),Nt&&N(e,Le),Ye&&N(Ye,Ce),Qe&&N(Qe,Ae),N(ft,Te),N(ft,Se),vn&&N(vn,{click:zr}),Yt&&clearInterval(ln),G&&V){var r={};r[V]=Lr,N(ft,r)}Wt&&N(ft,Pe),Vt&&N(ft,Be);var o=[pt,$e,Ke,Xe,tn,gn];for(var i in J.forEach((function(e,n){var r="container"===e?ct:t[e];if("object"==typeof r&&r){var i=!!r.previousElementSibling&&r.previousElementSibling,a=r.parentNode;r.outerHTML=o[n],t[e]=i?i.nextElementSibling:a.firstElementChild}})),J=nt=rt=ot=it=ut=ct=lt=ft=dt=pt=ht=mt=st=vt=Ct=At=Tt=St=Lt=Bt=Dt=Mt=Nt=Rt=It=zt=qt=Xt=Gt=wt=te=ee=ne=re=oe=ie=ae=se=ue=ce=le=fe=de=pe=me=ve=ge=we=ye=be=xe=_e=ke=Oe=je=Ee=Ce=Ae=Te=Se=Le=Pe=Be=De=Me=Ne=Re=Ie=ze=qe=Fe=Ue=yt=Ft=Ut=Ye=$e=Je=Ze=We=Ve=Ht=Qe=tn=Ge=en=nn=rn=on=an=sn=un=cn=Yt=$t=mn=Jt=Zt=vn=gn=Kt=wn=ln=fn=dn=pn=hn=xn=_n=yn=kn=bn=On=Wt=Vt=null,this)"rebuild"!==i&&(this[i]=null);gt=!1},rebuild:function(){return I(s(t,Z))}}}function Cn(t){t&&(Ft=Ht=Wt=Vt=Nt=Yt=Zt=Kt=!1)}function An(){for(var t=G?le-ee:le;t<0;)t+=mt;return t%mt+1}function Tn(t){return t=t?Math.max(0,Math.min(zt?mt-1:mt-Bt,t)):0,G?t+ee:t}function Sn(t){for(null==t&&(t=le),G&&(t-=ee);t<0;)t+=mt;return Math.floor(t%mt)}function Ln(){var t,e=Sn();return t=Ne?e:At||Ct?Math.ceil((e+1)*en/mt-1):Math.floor(e/Bt),!zt&&G&&le===pe&&(t=en-1),t}function Pn(){return n.innerWidth||e.documentElement.clientWidth||e.body.clientWidth}function Bn(t){return"top"===t?"afterbegin":"beforeend"}function Dn(){var t=Tt?2*Tt-St:0;return function t(n){if(null!=n){var r,o,i=e.createElement("div");return n.appendChild(i),o=(r=i.getBoundingClientRect()).right-r.left,i.remove(),o||t(n.parentNode)}}(dt)-t}function Mn(e){if(t[e])return!0;if(K)for(var n in K)if(K[n][e])return!0;return!1}function Nn(e,n){if(null==n&&(n=vt),"items"===e&&At)return Math.floor((Lt+St)/(At+St))||1;var r=t[e];if(K)for(var o in K)n>=parseInt(o)&&e in K[o]&&(r=K[o][e]);return"slideBy"===e&&"page"===r&&(r=Nn("items")),G||"slideBy"!==e&&"items"!==e||(r=Math.floor(r)),r}function Rn(t,e,n,r,o){var i="";if(void 0!==t){var a=t;e&&(a-=e),i=ut?"margin: 0 "+a+"px 0 "+t+"px;":"margin: "+t+"px 0 "+a+"px 0;"}else if(e&&!n){var s="-"+e+"px";i="margin: 0 "+(ut?s+" 0 0":"0 "+s+" 0")+";"}return!G&&o&&F&&r&&(i+=Un(r)),i}function In(t,e,n){return t?(t+e)*ne+"px":P?P+"("+100*ne+"% / "+n+")":100*ne/n+"%"}function zn(t,e,n){var r;if(t)r=t+e+"px";else{G||(n=Math.floor(n));var o=G?ne:n;r=P?P+"(100% / "+o+")":100/o+"%"}return r="width:"+r,"inner"!==X?r+";":r+" !important;"}function qn(t){var e="";!1!==t&&(e=(ut?"padding-":"margin-")+(ut?"right":"bottom")+": "+t+"px;");return e}function Fn(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function Un(t){return Fn(F,18)+"transition-duration:"+t/1e3+"s;"}function Hn(t){return Fn(H,17)+"animation-duration:"+t/1e3+"s;"}function Wn(){if(Mn("autoHeight")||Ct||!ut){var t=ft.querySelectorAll("img");v(t,(function(t){var e=t.src;Gt||(e&&e.indexOf("data:image")<0?(t.src="",M(t,Ue),y(t,"loading"),t.src=e):sr(t))})),o((function(){fr(E(t),(function(){yt=!0}))})),Mn("autoHeight")&&(t=cr(le,Math.min(le+Bt-1,ne-1))),Gt?Vn():o((function(){fr(E(t),Vn)}))}else G&&Er(),$n(),Jn()}function Vn(){if(Ct&&mt>1){var t=zt?le:mt-1;!function e(){var n=ht[t].getBoundingClientRect().left,r=ht[t-1].getBoundingClientRect().right;Math.abs(n-r)<=1?Yn():setTimeout((function(){e()}),16)}()}else Yn()}function Yn(){ut&&!Ct||(mr(),Ct?(oe=Or(),Oe&&(je=Xn()),pe=ce(),Cn(_e||je)):Zr()),G&&Er(),$n(),Jn()}function $n(){if(vr(),ct.insertAdjacentHTML("afterbegin",'<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">'+or()+"</span>  of "+mt+"</div>"),bt=ct.querySelector(".tns-liveregion .current"),Re){var e=Yt?"stop":"start";vn?O(vn,{"data-action":e}):t.autoplayButtonOutput&&(ct.insertAdjacentHTML(Bn(t.autoplayPosition),'<button type="button" data-action="'+e+'">'+wn[0]+e+wn[1]+Jt[0]+"</button>"),vn=ct.querySelector("[data-action]")),vn&&M(vn,{click:zr}),Yt&&(Rr(),Zt&&M(ft,Te),Kt&&M(ft,Se))}if(Me){if(Qe)O(Qe,{"aria-label":"Carousel Pagination"}),v(Ge=Qe.children,(function(t,e){O(t,{"data-nav":e,tabindex:"-1","aria-label":un+(e+1),"aria-controls":xe})}));else{for(var n="",r=Ne?"":'style="display:none"',o=0;o<mt;o++)n+='<button type="button" data-nav="'+o+'" tabindex="-1" aria-controls="'+xe+'" '+r+' aria-label="'+un+(o+1)+'"></button>';n='<div class="tns-nav" aria-label="Carousel Pagination">'+n+"</div>",ct.insertAdjacentHTML(Bn(t.navPosition),n),Qe=ct.querySelector(".tns-nav"),Ge=Qe.children}if(Xr(),F){var i=F.substring(0,F.length-18).toLowerCase(),a="transition: all "+Rt/1e3+"s";i&&(a="-"+i+"-"+a),h(Xt,"[aria-controls^="+xe+"-item]",a,m(Xt))}O(Ge[on],{"aria-label":un+(on+1)+cn}),j(Ge[on],"tabindex"),y(Ge[on],sn),M(Qe,Ae)}De&&(Ye||Je&&Ze||(ct.insertAdjacentHTML(Bn(t.controlsPosition),'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="'+xe+'">'+Ut[0]+'</button><button type="button" data-controls="next" tabindex="-1" aria-controls="'+xe+'">'+Ut[1]+"</button></div>"),Ye=ct.querySelector(".tns-controls")),Je&&Ze||(Je=Ye.children[0],Ze=Ye.children[1]),t.controlsContainer&&O(Ye,{"aria-label":"Carousel Navigation",tabindex:"0"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&O([Je,Ze],{"aria-controls":xe,tabindex:"-1"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&(O(Je,{"data-controls":"prev"}),O(Ze,{"data-controls":"next"})),We=wr(Je),Ve=wr(Ze),xr(),Ye?M(Ye,Ce):(M(Je,Ce),M(Ze,Ce))),Qn()}function Jn(){if(G&&V){var r={};r[V]=Lr,M(ft,r)}Wt&&M(ft,Pe,t.preventScrollOnTouch),Vt&&M(ft,Be),Nt&&M(e,Le),"inner"===X?ye.on("outerResized",(function(){Kn(),ye.emit("innerLoaded",Gr())})):(K||At||Ct||qt||!ut)&&M(n,{resize:Zn}),qt&&("outer"===X?ye.on("innerLoaded",lr):_e||lr()),ar(),_e?nr():je&&er(),ye.on("indexChanged",dr),"inner"===X&&ye.emit("innerLoaded",Gr()),"function"==typeof we&&we(Gr()),gt=!0}function Zn(t){o((function(){Kn(Fr(t))}))}function Kn(n){if(gt){"outer"===X&&ye.emit("outerResized",Gr(n)),vt=Pn();var r,o=st,i=!1;K&&(Gn(),(r=o!==st)&&ye.emit("newBreakpointStart",Gr(n)));var a,s,u=Bt,c=_e,l=je,f=Nt,d=Ft,p=Ht,g=Wt,w=Vt,x=Yt,_=Zt,k=Kt,O=le;if(r){var j=At,E=qt,T=Ut,S=Pt,L=Jt;if(!D)var P=St,B=Tt}if(Nt=Nn("arrowKeys"),Ft=Nn("controls"),Ht=Nn("nav"),Wt=Nn("touch"),Pt=Nn("center"),Vt=Nn("mouseDrag"),Yt=Nn("autoplay"),Zt=Nn("autoplayHoverPause"),Kt=Nn("autoplayResetOnVisibility"),r&&(_e=Nn("disable"),At=Nn("fixedWidth"),Rt=Nn("speed"),qt=Nn("autoHeight"),Ut=Nn("controlsText"),Jt=Nn("autoplayText"),$t=Nn("autoplayTimeout"),D||(Tt=Nn("edgePadding"),St=Nn("gutter"))),Cn(_e),Lt=Dn(),ut&&!Ct||_e||(mr(),ut||(Zr(),i=!0)),(At||Ct)&&(oe=Or(),pe=ce()),(r||At)&&(Bt=Nn("items"),Dt=Nn("slideBy"),(s=Bt!==u)&&(At||Ct||(pe=ce()),jn())),r&&_e!==c&&(_e?nr():function(){if(!ke)return;if(Xt.disabled=!1,ft.className+=be,Er(),zt)for(var t=ee;t--;)G&&A(ht[t]),A(ht[ne-t-1]);if(!G)for(var e=le,n=le+mt;e<n;e++){var r=ht[e],o=e<le+Bt?nt:it;r.style.left=100*(e-le)/Bt+"%",y(r,o)}tr(),ke=!1}()),Oe&&(r||At||Ct)&&(je=Xn())!==l&&(je?(Cr(jr(Tn(0))),er()):(!function(){if(!Ee)return;Tt&&D&&(lt.style.margin="");if(ee)for(var t="tns-transparent",e=ee;e--;)G&&b(ht[e],t),b(ht[ne-e-1],t);tr(),Ee=!1}(),i=!0)),Cn(_e||je),Yt||(Zt=Kt=!1),Nt!==f&&(Nt?M(e,Le):N(e,Le)),Ft!==d&&(Ft?Ye?A(Ye):(Je&&A(Je),Ze&&A(Ze)):Ye?C(Ye):(Je&&C(Je),Ze&&C(Ze))),Ht!==p&&(Ht?(A(Qe),Xr()):C(Qe)),Wt!==g&&(Wt?M(ft,Pe,t.preventScrollOnTouch):N(ft,Pe)),Vt!==w&&(Vt?M(ft,Be):N(ft,Be)),Yt!==x&&(Yt?(vn&&A(vn),fn||pn||Rr()):(vn&&C(vn),fn&&Ir())),Zt!==_&&(Zt?M(ft,Te):N(ft,Te)),Kt!==k&&(Kt?M(e,Se):N(e,Se)),r){if(At===j&&Pt===S||(i=!0),qt!==E&&(qt||(lt.style.height="")),Ft&&Ut!==T&&(Je.innerHTML=Ut[0],Ze.innerHTML=Ut[1]),vn&&Jt!==L){var R=Yt?1:0,I=vn.innerHTML,z=I.length-L[R].length;I.substring(z)===L[R]&&(vn.innerHTML=I.substring(0,z)+Jt[R])}}else Pt&&(At||Ct)&&(i=!0);if((s||At&&!Ct)&&(en=Kr(),Xr()),(a=le!==O)?(ye.emit("indexChanged",Gr()),i=!0):s?a||dr():(At||Ct)&&(ar(),vr(),rr()),s&&!G&&function(){for(var t=le+Math.min(mt,Bt),e=ne;e--;){var n=ht[e];e>=le&&e<t?(y(n,"tns-moving"),n.style.left=100*(e-le)/Bt+"%",y(n,nt),b(n,it)):n.style.left&&(n.style.left="",y(n,it),b(n,nt)),b(n,rt)}setTimeout((function(){v(ht,(function(t){b(t,"tns-moving")}))}),300)}(),!_e&&!je){if(r&&!D&&(Tt===B&&St===P||(lt.style.cssText=Rn(Tt,St,At,Rt,qt)),ut)){G&&(ft.style.width=In(At,St,Bt));var q=zn(At,St,Bt)+qn(St);!function(t,e){"deleteRule"in t?t.deleteRule(e):t.removeRule(e)}(Xt,m(Xt)-1),h(Xt,"#"+xe+" > .tns-item",q,m(Xt))}qt&&lr(),i&&(Er(),fe=le)}r&&ye.emit("newBreakpointEnd",Gr(n))}}function Xn(){if(!At&&!Ct)return mt<=(Pt?Bt-(Bt-1)/2:Bt);var t=At?(At+St)*mt:wt[mt],e=Tt?Lt+2*Tt:Lt+St;return Pt&&(e-=At?(Lt-At)/2:(Lt-(wt[le+1]-wt[le]-St))/2),t<=e}function Gn(){for(var t in st=0,K)t=parseInt(t),vt>=t&&(st=t)}function Qn(){!Yt&&vn&&C(vn),!Ht&&Qe&&C(Qe),Ft||(Ye?C(Ye):(Je&&C(Je),Ze&&C(Ze)))}function tr(){Yt&&vn&&A(vn),Ht&&Qe&&A(Qe),Ft&&(Ye?A(Ye):(Je&&A(Je),Ze&&A(Ze)))}function er(){if(!Ee){if(Tt&&(lt.style.margin="0px"),ee)for(var t="tns-transparent",e=ee;e--;)G&&y(ht[e],t),y(ht[ne-e-1],t);Qn(),Ee=!0}}function nr(){if(!ke){if(Xt.disabled=!0,ft.className=ft.className.replace(be.substring(1),""),j(ft,["style"]),zt)for(var t=ee;t--;)G&&C(ht[t]),C(ht[ne-t-1]);if(ut&&G||j(lt,["style"]),!G)for(var e=le,n=le+mt;e<n;e++){var r=ht[e];j(r,["style"]),b(r,nt),b(r,it)}Qn(),ke=!0}}function rr(){var t=or();bt.innerHTML!==t&&(bt.innerHTML=t)}function or(){var t=ir(),e=t[0]+1,n=t[1]+1;return e===n?e+"":e+" to "+n}function ir(t){null==t&&(t=jr());var e,n,r,o=le;if(Pt||Tt?(Ct||At)&&(n=-(parseFloat(t)+Tt),r=n+Lt+2*Tt):Ct&&(n=wt[le],r=n+Lt),Ct)wt.forEach((function(t,i){i<ne&&((Pt||Tt)&&t<=n+.5&&(o=i),r-t>=.5&&(e=i))}));else{if(At){var i=At+St;Pt||Tt?(o=Math.floor(n/i),e=Math.ceil(r/i-1)):e=o+Math.ceil(Lt/i)-1}else if(Pt||Tt){var a=Bt-1;if(Pt?(o-=a/2,e=le+a/2):e=le+a,Tt){var s=Tt*Bt/Lt;o-=s,e+=s}o=Math.floor(o),e=Math.ceil(e)}else e=o+Bt-1;o=Math.max(o,0),e=Math.min(e,ne-1)}return[o,e]}function ar(){if(Gt&&!_e){var t=ir();t.push(Qt),cr.apply(null,t).forEach((function(t){if(!w(t,Fe)){var e={};e[V]=function(t){t.stopPropagation()},M(t,e),M(t,Ue),t.src=_(t,"data-src");var n=_(t,"data-srcset");n&&(t.srcset=n),y(t,"loading")}}))}}function sr(t){y(t,"loaded"),ur(t)}function ur(t){y(t,Fe),b(t,"loading"),N(t,Ue)}function cr(t,e,n){var r=[];for(n||(n="img");t<=e;)v(ht[t].querySelectorAll(n),(function(t){r.push(t)})),t++;return r}function lr(){var t=cr.apply(null,ir());o((function(){fr(t,hr)}))}function fr(t,e){return yt?e():(t.forEach((function(e,n){!Gt&&e.complete&&ur(e),w(e,Fe)&&t.splice(n,1)})),t.length?void o((function(){fr(t,e)})):e())}function dr(){ar(),vr(),rr(),xr(),function(){if(Ht&&(on=rn>=0?rn:Ln(),rn=-1,on!==an)){var t=Ge[an],e=Ge[on];O(t,{tabindex:"-1","aria-label":un+(an+1)}),b(t,sn),O(e,{"aria-label":un+(on+1)+cn}),j(e,"tabindex"),y(e,sn),an=on}}()}function pr(t,e){for(var n=[],r=t,o=Math.min(t+e,ne);r<o;r++)n.push(ht[r].offsetHeight);return Math.max.apply(null,n)}function hr(){var t=qt?pr(le,Bt):pr(ee,mt),e=at||lt;e.style.height!==t&&(e.style.height=t+"px")}function mr(){wt=[0];var t=ut?"left":"top",e=ut?"right":"bottom",n=ht[0].getBoundingClientRect()[t];v(ht,(function(r,o){o&&wt.push(r.getBoundingClientRect()[t]-n),o===ne-1&&wt.push(r.getBoundingClientRect()[e]-n)}))}function vr(){var t=ir(),e=t[0],n=t[1];v(ht,(function(t,r){r>=e&&r<=n?x(t,"aria-hidden")&&(j(t,["aria-hidden","tabindex"]),y(t,qe)):x(t,"aria-hidden")||(O(t,{"aria-hidden":"true",tabindex:"-1"}),b(t,qe))}))}function gr(t){return t.nodeName.toLowerCase()}function wr(t){return"button"===gr(t)}function yr(t){return"true"===t.getAttribute("aria-disabled")}function br(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function xr(){if(Ft&&!It&&!zt){var t=We?Je.disabled:yr(Je),e=Ve?Ze.disabled:yr(Ze),n=le<=de,r=!It&&le>=pe;n&&!t&&br(We,Je,!0),!n&&t&&br(We,Je,!1),r&&!e&&br(Ve,Ze,!0),!r&&e&&br(Ve,Ze,!1)}}function _r(t,e){F&&(t.style[F]=e)}function kr(t){return null==t&&(t=le),Ct?(Lt-(Tt?St:0)-(wt[t+1]-wt[t]-St))/2:At?(Lt-At)/2:(Bt-1)/2}function Or(){var t=Lt+(Tt?St:0)-(At?(At+St)*ne:wt[ne]);return Pt&&!zt&&(t=At?-(At+St)*(ne-1)-kr():kr(ne-1)-wt[ne-1]),t>0&&(t=0),t}function jr(t){var e;if(null==t&&(t=le),ut&&!Ct)if(At)e=-(At+St)*t,Pt&&(e+=kr());else{var n=z?ne:Bt;Pt&&(t-=kr()),e=100*-t/n}else e=-wt[t],Pt&&Ct&&(e+=kr());return re&&(e=Math.max(e,oe)),e+=!ut||Ct||At?"px":"%"}function Er(t){_r(ft,"0s"),Cr(t)}function Cr(t){null==t&&(t=jr()),ft.style[ae]=se+t+ue}function Ar(t,e,n,r){var o=t+Bt;zt||(o=Math.min(o,ne));for(var i=t;i<o;i++){var a=ht[i];r||(a.style.left=100*(i-le)/Bt+"%"),ot&&U&&(a.style[U]=a.style[W]=ot*(i-t)/1e3+"s"),b(a,e),y(a,n),r&&te.push(a)}}function Tr(t,e){ie&&jn(),(le!==fe||e)&&(ye.emit("indexChanged",Gr()),ye.emit("transitionStart",Gr()),qt&&lr(),fn&&t&&["click","keydown"].indexOf(t.type)>=0&&Ir(),ge=!0,En())}function Sr(t){return t.toLowerCase().replace(/-/g,"")}function Lr(t){if(G||ge){if(ye.emit("transitionEnd",Gr(t)),!G&&te.length>0)for(var e=0;e<te.length;e++){var n=te[e];n.style.left="",W&&U&&(n.style[W]="",n.style[U]=""),b(n,rt),y(n,it)}if(!t||!G&&t.target.parentNode===ft||t.target===ft&&Sr(t.propertyName)===Sr(ae)){if(!ie){var r=le;jn(),le!==r&&(ye.emit("indexChanged",Gr()),Er())}"inner"===X&&ye.emit("innerLoaded",Gr()),ge=!1,fe=le}}}function Pr(t,e){if(!je)if("prev"===t)Br(e,-1);else if("next"===t)Br(e,1);else{if(ge){if(he)return;Lr()}var n=Sn(),r=0;if("first"===t?r=-n:"last"===t?r=G?mt-Bt-n:mt-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(mt-1,t))),r=t-n)),!G&&r&&Math.abs(r)<Bt){var o=r>0?1:-1;r+=le+r-mt>=de?mt*o:2*mt*o*-1}le+=r,G&&zt&&(le<de&&(le+=mt),le>pe&&(le-=mt)),Sn(le)!==Sn(fe)&&Tr(e)}}function Br(t,e){if(ge){if(he)return;Lr()}var n;if(!e){for(var r=Ur(t=Fr(t));r!==Ye&&[Je,Ze].indexOf(r)<0;)r=r.parentNode;var o=[Je,Ze].indexOf(r);o>=0&&(n=!0,e=0===o?-1:1)}if(It){if(le===de&&-1===e)return void Pr("last",t);if(le===pe&&1===e)return void Pr("first",t)}e&&(le+=Dt*e,Ct&&(le=Math.floor(le)),Tr(n||t&&"keydown"===t.type?t:null))}function Dr(){ln=setInterval((function(){Br(null,mn)}),$t),fn=!0}function Mr(){clearInterval(ln),fn=!1}function Nr(t,e){O(vn,{"data-action":t}),vn.innerHTML=wn[0]+t+wn[1]+e}function Rr(){Dr(),vn&&Nr("stop",Jt[1])}function Ir(){Mr(),vn&&Nr("start",Jt[0])}function zr(){fn?(Ir(),pn=!0):(Rr(),pn=!1)}function qr(t){t.focus()}function Fr(t){return Hr(t=t||n.event)?t.changedTouches[0]:t}function Ur(t){return t.target||n.event.srcElement}function Hr(t){return t.type.indexOf("touch")>=0}function Wr(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function Vr(){return i=_n.y-xn.y,a=_n.x-xn.x,e=Math.atan2(i,a)*(180/Math.PI),n=me,r=!1,(o=Math.abs(90-Math.abs(e)))>=90-n?r="horizontal":o<=n&&(r="vertical"),r===t.axis;var e,n,r,o,i,a}function Yr(t){if(ge){if(he)return;Lr()}Yt&&fn&&Mr(),kn=!0,bn&&(a(bn),bn=null);var e=Fr(t);ye.emit(Hr(t)?"touchStart":"dragStart",Gr(t)),!Hr(t)&&["img","a"].indexOf(gr(Ur(t)))>=0&&Wr(t),_n.x=xn.x=e.clientX,_n.y=xn.y=e.clientY,G&&(yn=parseFloat(ft.style[ae].replace(se,"")),_r(ft,"0s"))}function $r(t){if(kn){var e=Fr(t);_n.x=e.clientX,_n.y=e.clientY,G?bn||(bn=o((function(){!function t(e){if(!ve)return void(kn=!1);a(bn),kn&&(bn=o((function(){t(e)})));"?"===ve&&(ve=Vr());if(ve){!He&&Hr(e)&&(He=!0);try{e.type&&ye.emit(Hr(e)?"touchMove":"dragMove",Gr(e))}catch(t){}var n=yn,r=On(_n,xn);if(!ut||At||Ct)n+=r,n+="px";else n+=z?r*Bt*100/((Lt+St)*ne):100*r/(Lt+St),n+="%";ft.style[ae]=se+n+ue}}(t)}))):("?"===ve&&(ve=Vr()),ve&&(He=!0)),("boolean"!=typeof t.cancelable||t.cancelable)&&He&&t.preventDefault()}}function Jr(e){if(kn){bn&&(a(bn),bn=null),G&&_r(ft,""),kn=!1;var n=Fr(e);_n.x=n.clientX,_n.y=n.clientY;var r=On(_n,xn);if(Math.abs(r)){if(!Hr(e)){var i=Ur(e);M(i,{click:function t(e){Wr(e),N(i,{click:t})}})}G?bn=o((function(){if(ut&&!Ct){var t=-r*Bt/(Lt+St);t=r>0?Math.floor(t):Math.ceil(t),le+=t}else{var n=-(yn+r);if(n<=0)le=de;else if(n>=wt[ne-1])le=pe;else for(var o=0;o<ne&&n>=wt[o];)le=o,n>wt[o]&&r<0&&(le+=1),o++}Tr(e,r),ye.emit(Hr(e)?"touchEnd":"dragEnd",Gr(e))})):ve&&Br(e,r>0?-1:1)}}"auto"===t.preventScrollOnTouch&&(He=!1),me&&(ve="?"),Yt&&!fn&&Dr()}function Zr(){(at||lt).style.height=wt[le+Bt]-wt[le]+"px"}function Kr(){var t=At?(At+St)*mt/Lt:mt/Bt;return Math.min(Math.ceil(t),mt)}function Xr(){if(Ht&&!Ne&&en!==nn){var t=nn,e=en,n=A;for(nn>en&&(t=en,e=nn,n=C);t<e;)n(Ge[t]),t++;nn=en}}function Gr(t){return{container:ft,slideItems:ht,navContainer:Qe,navItems:Ge,controlsContainer:Ye,hasControls:De,prevButton:Je,nextButton:Ze,items:Bt,slideBy:Dt,cloneCount:ee,slideCount:mt,slideCountNew:ne,index:le,indexCached:fe,displayIndex:An(),navCurrentIndex:on,navCurrentIndexCached:an,pages:en,pagesCached:nn,sheet:Xt,isOn:gt,event:t||{}}}$&&console.warn("No slides found in",t.container)}},LYNF:function(t,e,n){"use strict";var r=n("OH9c");t.exports=function(t,e,n,o,i){var a=new Error(t);return r(a,e,n,o,i)}},Lmem:function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},LvDl:function(t,e,n){(function(t,r){var o;
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */(function(){var i="Expected a function",a="__lodash_placeholder__",s=[["ary",128],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",32],["partialRight",64],["rearg",256]],u="[object Arguments]",c="[object Array]",l="[object Boolean]",f="[object Date]",d="[object Error]",p="[object Function]",h="[object GeneratorFunction]",m="[object Map]",v="[object Number]",g="[object Object]",w="[object RegExp]",y="[object Set]",b="[object String]",x="[object Symbol]",_="[object WeakMap]",k="[object ArrayBuffer]",O="[object DataView]",j="[object Float32Array]",E="[object Float64Array]",C="[object Int8Array]",A="[object Int16Array]",T="[object Int32Array]",S="[object Uint8Array]",L="[object Uint16Array]",P="[object Uint32Array]",B=/\b__p \+= '';/g,D=/\b(__p \+=) '' \+/g,M=/(__e\(.*?\)|\b__t\)) \+\n'';/g,N=/&(?:amp|lt|gt|quot|#39);/g,R=/[&<>"']/g,I=RegExp(N.source),z=RegExp(R.source),q=/<%-([\s\S]+?)%>/g,F=/<%([\s\S]+?)%>/g,U=/<%=([\s\S]+?)%>/g,H=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,W=/^\w*$/,V=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Y=/[\\^$.*+?()[\]{}|]/g,$=RegExp(Y.source),J=/^\s+|\s+$/g,Z=/^\s+/,K=/\s+$/,X=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,G=/\{\n\/\* \[wrapped with (.+)\] \*/,Q=/,? & /,tt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,et=/\\(\\)?/g,nt=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,rt=/\w*$/,ot=/^[-+]0x[0-9a-f]+$/i,it=/^0b[01]+$/i,at=/^\[object .+?Constructor\]$/,st=/^0o[0-7]+$/i,ut=/^(?:0|[1-9]\d*)$/,ct=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,lt=/($^)/,ft=/['\n\r\u2028\u2029\\]/g,dt="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",pt="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ht="[\\ud800-\\udfff]",mt="["+pt+"]",vt="["+dt+"]",gt="\\d+",wt="[\\u2700-\\u27bf]",yt="[a-z\\xdf-\\xf6\\xf8-\\xff]",bt="[^\\ud800-\\udfff"+pt+gt+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",xt="\\ud83c[\\udffb-\\udfff]",_t="[^\\ud800-\\udfff]",kt="(?:\\ud83c[\\udde6-\\uddff]){2}",Ot="[\\ud800-\\udbff][\\udc00-\\udfff]",jt="[A-Z\\xc0-\\xd6\\xd8-\\xde]",Et="(?:"+yt+"|"+bt+")",Ct="(?:"+jt+"|"+bt+")",At="(?:"+vt+"|"+xt+")"+"?",Tt="[\\ufe0e\\ufe0f]?"+At+("(?:\\u200d(?:"+[_t,kt,Ot].join("|")+")[\\ufe0e\\ufe0f]?"+At+")*"),St="(?:"+[wt,kt,Ot].join("|")+")"+Tt,Lt="(?:"+[_t+vt+"?",vt,kt,Ot,ht].join("|")+")",Pt=RegExp("['’]","g"),Bt=RegExp(vt,"g"),Dt=RegExp(xt+"(?="+xt+")|"+Lt+Tt,"g"),Mt=RegExp([jt+"?"+yt+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[mt,jt,"$"].join("|")+")",Ct+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[mt,jt+Et,"$"].join("|")+")",jt+"?"+Et+"+(?:['’](?:d|ll|m|re|s|t|ve))?",jt+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",gt,St].join("|"),"g"),Nt=RegExp("[\\u200d\\ud800-\\udfff"+dt+"\\ufe0e\\ufe0f]"),Rt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,It=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],zt=-1,qt={};qt[j]=qt[E]=qt[C]=qt[A]=qt[T]=qt[S]=qt["[object Uint8ClampedArray]"]=qt[L]=qt[P]=!0,qt[u]=qt[c]=qt[k]=qt[l]=qt[O]=qt[f]=qt[d]=qt[p]=qt[m]=qt[v]=qt[g]=qt[w]=qt[y]=qt[b]=qt[_]=!1;var Ft={};Ft[u]=Ft[c]=Ft[k]=Ft[O]=Ft[l]=Ft[f]=Ft[j]=Ft[E]=Ft[C]=Ft[A]=Ft[T]=Ft[m]=Ft[v]=Ft[g]=Ft[w]=Ft[y]=Ft[b]=Ft[x]=Ft[S]=Ft["[object Uint8ClampedArray]"]=Ft[L]=Ft[P]=!0,Ft[d]=Ft[p]=Ft[_]=!1;var Ut={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Ht=parseFloat,Wt=parseInt,Vt="object"==typeof t&&t&&t.Object===Object&&t,Yt="object"==typeof self&&self&&self.Object===Object&&self,$t=Vt||Yt||Function("return this")(),Jt=e&&!e.nodeType&&e,Zt=Jt&&"object"==typeof r&&r&&!r.nodeType&&r,Kt=Zt&&Zt.exports===Jt,Xt=Kt&&Vt.process,Gt=function(){try{var t=Zt&&Zt.require&&Zt.require("util").types;return t||Xt&&Xt.binding&&Xt.binding("util")}catch(t){}}(),Qt=Gt&&Gt.isArrayBuffer,te=Gt&&Gt.isDate,ee=Gt&&Gt.isMap,ne=Gt&&Gt.isRegExp,re=Gt&&Gt.isSet,oe=Gt&&Gt.isTypedArray;function ie(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function ae(t,e,n,r){for(var o=-1,i=null==t?0:t.length;++o<i;){var a=t[o];e(r,a,n(a),t)}return r}function se(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&!1!==e(t[n],n,t););return t}function ue(t,e){for(var n=null==t?0:t.length;n--&&!1!==e(t[n],n,t););return t}function ce(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(!e(t[n],n,t))return!1;return!0}function le(t,e){for(var n=-1,r=null==t?0:t.length,o=0,i=[];++n<r;){var a=t[n];e(a,n,t)&&(i[o++]=a)}return i}function fe(t,e){return!!(null==t?0:t.length)&&xe(t,e,0)>-1}function de(t,e,n){for(var r=-1,o=null==t?0:t.length;++r<o;)if(n(e,t[r]))return!0;return!1}function pe(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}function he(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}function me(t,e,n,r){var o=-1,i=null==t?0:t.length;for(r&&i&&(n=t[++o]);++o<i;)n=e(n,t[o],o,t);return n}function ve(t,e,n,r){var o=null==t?0:t.length;for(r&&o&&(n=t[--o]);o--;)n=e(n,t[o],o,t);return n}function ge(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}var we=je("length");function ye(t,e,n){var r;return n(t,(function(t,n,o){if(e(t,n,o))return r=n,!1})),r}function be(t,e,n,r){for(var o=t.length,i=n+(r?1:-1);r?i--:++i<o;)if(e(t[i],i,t))return i;return-1}function xe(t,e,n){return e==e?function(t,e,n){var r=n-1,o=t.length;for(;++r<o;)if(t[r]===e)return r;return-1}(t,e,n):be(t,ke,n)}function _e(t,e,n,r){for(var o=n-1,i=t.length;++o<i;)if(r(t[o],e))return o;return-1}function ke(t){return t!=t}function Oe(t,e){var n=null==t?0:t.length;return n?Ae(t,e)/n:NaN}function je(t){return function(e){return null==e?void 0:e[t]}}function Ee(t){return function(e){return null==t?void 0:t[e]}}function Ce(t,e,n,r,o){return o(t,(function(t,o,i){n=r?(r=!1,t):e(n,t,o,i)})),n}function Ae(t,e){for(var n,r=-1,o=t.length;++r<o;){var i=e(t[r]);void 0!==i&&(n=void 0===n?i:n+i)}return n}function Te(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}function Se(t){return function(e){return t(e)}}function Le(t,e){return pe(e,(function(e){return t[e]}))}function Pe(t,e){return t.has(e)}function Be(t,e){for(var n=-1,r=t.length;++n<r&&xe(e,t[n],0)>-1;);return n}function De(t,e){for(var n=t.length;n--&&xe(e,t[n],0)>-1;);return n}function Me(t,e){for(var n=t.length,r=0;n--;)t[n]===e&&++r;return r}var Ne=Ee({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),Re=Ee({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function Ie(t){return"\\"+Ut[t]}function ze(t){return Nt.test(t)}function qe(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}function Fe(t,e){return function(n){return t(e(n))}}function Ue(t,e){for(var n=-1,r=t.length,o=0,i=[];++n<r;){var s=t[n];s!==e&&s!==a||(t[n]=a,i[o++]=n)}return i}function He(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}function We(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=[t,t]})),n}function Ve(t){return ze(t)?function(t){var e=Dt.lastIndex=0;for(;Dt.test(t);)++e;return e}(t):we(t)}function Ye(t){return ze(t)?function(t){return t.match(Dt)||[]}(t):function(t){return t.split("")}(t)}var $e=Ee({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"});var Je=function t(e){var n,r=(e=null==e?$t:Je.defaults($t.Object(),e,Je.pick($t,It))).Array,o=e.Date,dt=e.Error,pt=e.Function,ht=e.Math,mt=e.Object,vt=e.RegExp,gt=e.String,wt=e.TypeError,yt=r.prototype,bt=pt.prototype,xt=mt.prototype,_t=e["__core-js_shared__"],kt=bt.toString,Ot=xt.hasOwnProperty,jt=0,Et=(n=/[^.]+$/.exec(_t&&_t.keys&&_t.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"",Ct=xt.toString,At=kt.call(mt),Tt=$t._,St=vt("^"+kt.call(Ot).replace(Y,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Lt=Kt?e.Buffer:void 0,Dt=e.Symbol,Nt=e.Uint8Array,Ut=Lt?Lt.allocUnsafe:void 0,Vt=Fe(mt.getPrototypeOf,mt),Yt=mt.create,Jt=xt.propertyIsEnumerable,Zt=yt.splice,Xt=Dt?Dt.isConcatSpreadable:void 0,Gt=Dt?Dt.iterator:void 0,we=Dt?Dt.toStringTag:void 0,Ee=function(){try{var t=ti(mt,"defineProperty");return t({},"",{}),t}catch(t){}}(),Ze=e.clearTimeout!==$t.clearTimeout&&e.clearTimeout,Ke=o&&o.now!==$t.Date.now&&o.now,Xe=e.setTimeout!==$t.setTimeout&&e.setTimeout,Ge=ht.ceil,Qe=ht.floor,tn=mt.getOwnPropertySymbols,en=Lt?Lt.isBuffer:void 0,nn=e.isFinite,rn=yt.join,on=Fe(mt.keys,mt),an=ht.max,sn=ht.min,un=o.now,cn=e.parseInt,ln=ht.random,fn=yt.reverse,dn=ti(e,"DataView"),pn=ti(e,"Map"),hn=ti(e,"Promise"),mn=ti(e,"Set"),vn=ti(e,"WeakMap"),gn=ti(mt,"create"),wn=vn&&new vn,yn={},bn=Ci(dn),xn=Ci(pn),_n=Ci(hn),kn=Ci(mn),On=Ci(vn),jn=Dt?Dt.prototype:void 0,En=jn?jn.valueOf:void 0,Cn=jn?jn.toString:void 0;function An(t){if(Wa(t)&&!Ba(t)&&!(t instanceof Pn)){if(t instanceof Ln)return t;if(Ot.call(t,"__wrapped__"))return Ai(t)}return new Ln(t)}var Tn=function(){function t(){}return function(e){if(!Ha(e))return{};if(Yt)return Yt(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();function Sn(){}function Ln(t,e){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!e,this.__index__=0,this.__values__=void 0}function Pn(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=4294967295,this.__views__=[]}function Bn(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Dn(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Mn(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Nn(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new Mn;++e<n;)this.add(t[e])}function Rn(t){var e=this.__data__=new Dn(t);this.size=e.size}function In(t,e){var n=Ba(t),r=!n&&Pa(t),o=!n&&!r&&Ra(t),i=!n&&!r&&!o&&Ga(t),a=n||r||o||i,s=a?Te(t.length,gt):[],u=s.length;for(var c in t)!e&&!Ot.call(t,c)||a&&("length"==c||o&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||si(c,u))||s.push(c);return s}function zn(t){var e=t.length;return e?t[Nr(0,e-1)]:void 0}function qn(t,e){return Oi(wo(t),Zn(e,0,t.length))}function Fn(t){return Oi(wo(t))}function Un(t,e,n){(void 0!==n&&!Ta(t[e],n)||void 0===n&&!(e in t))&&$n(t,e,n)}function Hn(t,e,n){var r=t[e];Ot.call(t,e)&&Ta(r,n)&&(void 0!==n||e in t)||$n(t,e,n)}function Wn(t,e){for(var n=t.length;n--;)if(Ta(t[n][0],e))return n;return-1}function Vn(t,e,n,r){return tr(t,(function(t,o,i){e(r,t,n(t),i)})),r}function Yn(t,e){return t&&yo(e,bs(e),t)}function $n(t,e,n){"__proto__"==e&&Ee?Ee(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}function Jn(t,e){for(var n=-1,o=e.length,i=r(o),a=null==t;++n<o;)i[n]=a?void 0:ms(t,e[n]);return i}function Zn(t,e,n){return t==t&&(void 0!==n&&(t=t<=n?t:n),void 0!==e&&(t=t>=e?t:e)),t}function Kn(t,e,n,r,o,i){var a,s=1&e,c=2&e,d=4&e;if(n&&(a=o?n(t,r,o,i):n(t)),void 0!==a)return a;if(!Ha(t))return t;var _=Ba(t);if(_){if(a=function(t){var e=t.length,n=new t.constructor(e);e&&"string"==typeof t[0]&&Ot.call(t,"index")&&(n.index=t.index,n.input=t.input);return n}(t),!s)return wo(t,a)}else{var B=ri(t),D=B==p||B==h;if(Ra(t))return fo(t,s);if(B==g||B==u||D&&!o){if(a=c||D?{}:ii(t),!s)return c?function(t,e){return yo(t,ni(t),e)}(t,function(t,e){return t&&yo(e,xs(e),t)}(a,t)):function(t,e){return yo(t,ei(t),e)}(t,Yn(a,t))}else{if(!Ft[B])return o?t:{};a=function(t,e,n){var r=t.constructor;switch(e){case k:return po(t);case l:case f:return new r(+t);case O:return function(t,e){var n=e?po(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}(t,n);case j:case E:case C:case A:case T:case S:case"[object Uint8ClampedArray]":case L:case P:return ho(t,n);case m:return new r;case v:case b:return new r(t);case w:return function(t){var e=new t.constructor(t.source,rt.exec(t));return e.lastIndex=t.lastIndex,e}(t);case y:return new r;case x:return o=t,En?mt(En.call(o)):{}}var o}(t,B,s)}}i||(i=new Rn);var M=i.get(t);if(M)return M;i.set(t,a),Za(t)?t.forEach((function(r){a.add(Kn(r,e,n,r,t,i))})):Va(t)&&t.forEach((function(r,o){a.set(o,Kn(r,e,n,o,t,i))}));var N=_?void 0:(d?c?$o:Yo:c?xs:bs)(t);return se(N||t,(function(r,o){N&&(r=t[o=r]),Hn(a,o,Kn(r,e,n,o,t,i))})),a}function Xn(t,e,n){var r=n.length;if(null==t)return!r;for(t=mt(t);r--;){var o=n[r],i=e[o],a=t[o];if(void 0===a&&!(o in t)||!i(a))return!1}return!0}function Gn(t,e,n){if("function"!=typeof t)throw new wt(i);return bi((function(){t.apply(void 0,n)}),e)}function Qn(t,e,n,r){var o=-1,i=fe,a=!0,s=t.length,u=[],c=e.length;if(!s)return u;n&&(e=pe(e,Se(n))),r?(i=de,a=!1):e.length>=200&&(i=Pe,a=!1,e=new Nn(e));t:for(;++o<s;){var l=t[o],f=null==n?l:n(l);if(l=r||0!==l?l:0,a&&f==f){for(var d=c;d--;)if(e[d]===f)continue t;u.push(l)}else i(e,f,r)||u.push(l)}return u}An.templateSettings={escape:q,evaluate:F,interpolate:U,variable:"",imports:{_:An}},An.prototype=Sn.prototype,An.prototype.constructor=An,Ln.prototype=Tn(Sn.prototype),Ln.prototype.constructor=Ln,Pn.prototype=Tn(Sn.prototype),Pn.prototype.constructor=Pn,Bn.prototype.clear=function(){this.__data__=gn?gn(null):{},this.size=0},Bn.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},Bn.prototype.get=function(t){var e=this.__data__;if(gn){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return Ot.call(e,t)?e[t]:void 0},Bn.prototype.has=function(t){var e=this.__data__;return gn?void 0!==e[t]:Ot.call(e,t)},Bn.prototype.set=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=gn&&void 0===e?"__lodash_hash_undefined__":e,this},Dn.prototype.clear=function(){this.__data__=[],this.size=0},Dn.prototype.delete=function(t){var e=this.__data__,n=Wn(e,t);return!(n<0)&&(n==e.length-1?e.pop():Zt.call(e,n,1),--this.size,!0)},Dn.prototype.get=function(t){var e=this.__data__,n=Wn(e,t);return n<0?void 0:e[n][1]},Dn.prototype.has=function(t){return Wn(this.__data__,t)>-1},Dn.prototype.set=function(t,e){var n=this.__data__,r=Wn(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this},Mn.prototype.clear=function(){this.size=0,this.__data__={hash:new Bn,map:new(pn||Dn),string:new Bn}},Mn.prototype.delete=function(t){var e=Go(this,t).delete(t);return this.size-=e?1:0,e},Mn.prototype.get=function(t){return Go(this,t).get(t)},Mn.prototype.has=function(t){return Go(this,t).has(t)},Mn.prototype.set=function(t,e){var n=Go(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this},Nn.prototype.add=Nn.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},Nn.prototype.has=function(t){return this.__data__.has(t)},Rn.prototype.clear=function(){this.__data__=new Dn,this.size=0},Rn.prototype.delete=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n},Rn.prototype.get=function(t){return this.__data__.get(t)},Rn.prototype.has=function(t){return this.__data__.has(t)},Rn.prototype.set=function(t,e){var n=this.__data__;if(n instanceof Dn){var r=n.__data__;if(!pn||r.length<199)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new Mn(r)}return n.set(t,e),this.size=n.size,this};var tr=_o(ur),er=_o(cr,!0);function nr(t,e){var n=!0;return tr(t,(function(t,r,o){return n=!!e(t,r,o)})),n}function rr(t,e,n){for(var r=-1,o=t.length;++r<o;){var i=t[r],a=e(i);if(null!=a&&(void 0===s?a==a&&!Xa(a):n(a,s)))var s=a,u=i}return u}function or(t,e){var n=[];return tr(t,(function(t,r,o){e(t,r,o)&&n.push(t)})),n}function ir(t,e,n,r,o){var i=-1,a=t.length;for(n||(n=ai),o||(o=[]);++i<a;){var s=t[i];e>0&&n(s)?e>1?ir(s,e-1,n,r,o):he(o,s):r||(o[o.length]=s)}return o}var ar=ko(),sr=ko(!0);function ur(t,e){return t&&ar(t,e,bs)}function cr(t,e){return t&&sr(t,e,bs)}function lr(t,e){return le(e,(function(e){return qa(t[e])}))}function fr(t,e){for(var n=0,r=(e=so(e,t)).length;null!=t&&n<r;)t=t[Ei(e[n++])];return n&&n==r?t:void 0}function dr(t,e,n){var r=e(t);return Ba(t)?r:he(r,n(t))}function pr(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":we&&we in mt(t)?function(t){var e=Ot.call(t,we),n=t[we];try{t[we]=void 0;var r=!0}catch(t){}var o=Ct.call(t);r&&(e?t[we]=n:delete t[we]);return o}(t):function(t){return Ct.call(t)}(t)}function hr(t,e){return t>e}function mr(t,e){return null!=t&&Ot.call(t,e)}function vr(t,e){return null!=t&&e in mt(t)}function gr(t,e,n){for(var o=n?de:fe,i=t[0].length,a=t.length,s=a,u=r(a),c=1/0,l=[];s--;){var f=t[s];s&&e&&(f=pe(f,Se(e))),c=sn(f.length,c),u[s]=!n&&(e||i>=120&&f.length>=120)?new Nn(s&&f):void 0}f=t[0];var d=-1,p=u[0];t:for(;++d<i&&l.length<c;){var h=f[d],m=e?e(h):h;if(h=n||0!==h?h:0,!(p?Pe(p,m):o(l,m,n))){for(s=a;--s;){var v=u[s];if(!(v?Pe(v,m):o(t[s],m,n)))continue t}p&&p.push(m),l.push(h)}}return l}function wr(t,e,n){var r=null==(t=vi(t,e=so(e,t)))?t:t[Ei(zi(e))];return null==r?void 0:ie(r,t,n)}function yr(t){return Wa(t)&&pr(t)==u}function br(t,e,n,r,o){return t===e||(null==t||null==e||!Wa(t)&&!Wa(e)?t!=t&&e!=e:function(t,e,n,r,o,i){var a=Ba(t),s=Ba(e),p=a?c:ri(t),h=s?c:ri(e),_=(p=p==u?g:p)==g,j=(h=h==u?g:h)==g,E=p==h;if(E&&Ra(t)){if(!Ra(e))return!1;a=!0,_=!1}if(E&&!_)return i||(i=new Rn),a||Ga(t)?Wo(t,e,n,r,o,i):function(t,e,n,r,o,i,a){switch(n){case O:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case k:return!(t.byteLength!=e.byteLength||!i(new Nt(t),new Nt(e)));case l:case f:case v:return Ta(+t,+e);case d:return t.name==e.name&&t.message==e.message;case w:case b:return t==e+"";case m:var s=qe;case y:var u=1&r;if(s||(s=He),t.size!=e.size&&!u)return!1;var c=a.get(t);if(c)return c==e;r|=2,a.set(t,e);var p=Wo(s(t),s(e),r,o,i,a);return a.delete(t),p;case x:if(En)return En.call(t)==En.call(e)}return!1}(t,e,p,n,r,o,i);if(!(1&n)){var C=_&&Ot.call(t,"__wrapped__"),A=j&&Ot.call(e,"__wrapped__");if(C||A){var T=C?t.value():t,S=A?e.value():e;return i||(i=new Rn),o(T,S,n,r,i)}}if(!E)return!1;return i||(i=new Rn),function(t,e,n,r,o,i){var a=1&n,s=Yo(t),u=s.length,c=Yo(e).length;if(u!=c&&!a)return!1;var l=u;for(;l--;){var f=s[l];if(!(a?f in e:Ot.call(e,f)))return!1}var d=i.get(t),p=i.get(e);if(d&&p)return d==e&&p==t;var h=!0;i.set(t,e),i.set(e,t);var m=a;for(;++l<u;){f=s[l];var v=t[f],g=e[f];if(r)var w=a?r(g,v,f,e,t,i):r(v,g,f,t,e,i);if(!(void 0===w?v===g||o(v,g,n,r,i):w)){h=!1;break}m||(m="constructor"==f)}if(h&&!m){var y=t.constructor,b=e.constructor;y==b||!("constructor"in t)||!("constructor"in e)||"function"==typeof y&&y instanceof y&&"function"==typeof b&&b instanceof b||(h=!1)}return i.delete(t),i.delete(e),h}(t,e,n,r,o,i)}(t,e,n,r,br,o))}function xr(t,e,n,r){var o=n.length,i=o,a=!r;if(null==t)return!i;for(t=mt(t);o--;){var s=n[o];if(a&&s[2]?s[1]!==t[s[0]]:!(s[0]in t))return!1}for(;++o<i;){var u=(s=n[o])[0],c=t[u],l=s[1];if(a&&s[2]){if(void 0===c&&!(u in t))return!1}else{var f=new Rn;if(r)var d=r(c,l,u,t,e,f);if(!(void 0===d?br(l,c,3,r,f):d))return!1}}return!0}function _r(t){return!(!Ha(t)||(e=t,Et&&Et in e))&&(qa(t)?St:at).test(Ci(t));var e}function kr(t){return"function"==typeof t?t:null==t?Ys:"object"==typeof t?Ba(t)?Tr(t[0],t[1]):Ar(t):eu(t)}function Or(t){if(!di(t))return on(t);var e=[];for(var n in mt(t))Ot.call(t,n)&&"constructor"!=n&&e.push(n);return e}function jr(t){if(!Ha(t))return function(t){var e=[];if(null!=t)for(var n in mt(t))e.push(n);return e}(t);var e=di(t),n=[];for(var r in t)("constructor"!=r||!e&&Ot.call(t,r))&&n.push(r);return n}function Er(t,e){return t<e}function Cr(t,e){var n=-1,o=Ma(t)?r(t.length):[];return tr(t,(function(t,r,i){o[++n]=e(t,r,i)})),o}function Ar(t){var e=Qo(t);return 1==e.length&&e[0][2]?hi(e[0][0],e[0][1]):function(n){return n===t||xr(n,t,e)}}function Tr(t,e){return ci(t)&&pi(e)?hi(Ei(t),e):function(n){var r=ms(n,t);return void 0===r&&r===e?vs(n,t):br(e,r,3)}}function Sr(t,e,n,r,o){t!==e&&ar(e,(function(i,a){if(o||(o=new Rn),Ha(i))!function(t,e,n,r,o,i,a){var s=wi(t,n),u=wi(e,n),c=a.get(u);if(c)return void Un(t,n,c);var l=i?i(s,u,n+"",t,e,a):void 0,f=void 0===l;if(f){var d=Ba(u),p=!d&&Ra(u),h=!d&&!p&&Ga(u);l=u,d||p||h?Ba(s)?l=s:Na(s)?l=wo(s):p?(f=!1,l=fo(u,!0)):h?(f=!1,l=ho(u,!0)):l=[]:$a(u)||Pa(u)?(l=s,Pa(s)?l=as(s):Ha(s)&&!qa(s)||(l=ii(u))):f=!1}f&&(a.set(u,l),o(l,u,r,i,a),a.delete(u));Un(t,n,l)}(t,e,a,n,Sr,r,o);else{var s=r?r(wi(t,a),i,a+"",t,e,o):void 0;void 0===s&&(s=i),Un(t,a,s)}}),xs)}function Lr(t,e){var n=t.length;if(n)return si(e+=e<0?n:0,n)?t[e]:void 0}function Pr(t,e,n){e=e.length?pe(e,(function(t){return Ba(t)?function(e){return fr(e,1===t.length?t[0]:t)}:t})):[Ys];var r=-1;return e=pe(e,Se(Xo())),function(t,e){var n=t.length;for(t.sort(e);n--;)t[n]=t[n].value;return t}(Cr(t,(function(t,n,o){return{criteria:pe(e,(function(e){return e(t)})),index:++r,value:t}})),(function(t,e){return function(t,e,n){var r=-1,o=t.criteria,i=e.criteria,a=o.length,s=n.length;for(;++r<a;){var u=mo(o[r],i[r]);if(u){if(r>=s)return u;var c=n[r];return u*("desc"==c?-1:1)}}return t.index-e.index}(t,e,n)}))}function Br(t,e,n){for(var r=-1,o=e.length,i={};++r<o;){var a=e[r],s=fr(t,a);n(s,a)&&Fr(i,so(a,t),s)}return i}function Dr(t,e,n,r){var o=r?_e:xe,i=-1,a=e.length,s=t;for(t===e&&(e=wo(e)),n&&(s=pe(t,Se(n)));++i<a;)for(var u=0,c=e[i],l=n?n(c):c;(u=o(s,l,u,r))>-1;)s!==t&&Zt.call(s,u,1),Zt.call(t,u,1);return t}function Mr(t,e){for(var n=t?e.length:0,r=n-1;n--;){var o=e[n];if(n==r||o!==i){var i=o;si(o)?Zt.call(t,o,1):Qr(t,o)}}return t}function Nr(t,e){return t+Qe(ln()*(e-t+1))}function Rr(t,e){var n="";if(!t||e<1||e>9007199254740991)return n;do{e%2&&(n+=t),(e=Qe(e/2))&&(t+=t)}while(e);return n}function Ir(t,e){return xi(mi(t,e,Ys),t+"")}function zr(t){return zn(Ts(t))}function qr(t,e){var n=Ts(t);return Oi(n,Zn(e,0,n.length))}function Fr(t,e,n,r){if(!Ha(t))return t;for(var o=-1,i=(e=so(e,t)).length,a=i-1,s=t;null!=s&&++o<i;){var u=Ei(e[o]),c=n;if("__proto__"===u||"constructor"===u||"prototype"===u)return t;if(o!=a){var l=s[u];void 0===(c=r?r(l,u,s):void 0)&&(c=Ha(l)?l:si(e[o+1])?[]:{})}Hn(s,u,c),s=s[u]}return t}var Ur=wn?function(t,e){return wn.set(t,e),t}:Ys,Hr=Ee?function(t,e){return Ee(t,"toString",{configurable:!0,enumerable:!1,value:Hs(e),writable:!0})}:Ys;function Wr(t){return Oi(Ts(t))}function Vr(t,e,n){var o=-1,i=t.length;e<0&&(e=-e>i?0:i+e),(n=n>i?i:n)<0&&(n+=i),i=e>n?0:n-e>>>0,e>>>=0;for(var a=r(i);++o<i;)a[o]=t[o+e];return a}function Yr(t,e){var n;return tr(t,(function(t,r,o){return!(n=e(t,r,o))})),!!n}function $r(t,e,n){var r=0,o=null==t?r:t.length;if("number"==typeof e&&e==e&&o<=2147483647){for(;r<o;){var i=r+o>>>1,a=t[i];null!==a&&!Xa(a)&&(n?a<=e:a<e)?r=i+1:o=i}return o}return Jr(t,e,Ys,n)}function Jr(t,e,n,r){var o=0,i=null==t?0:t.length;if(0===i)return 0;for(var a=(e=n(e))!=e,s=null===e,u=Xa(e),c=void 0===e;o<i;){var l=Qe((o+i)/2),f=n(t[l]),d=void 0!==f,p=null===f,h=f==f,m=Xa(f);if(a)var v=r||h;else v=c?h&&(r||d):s?h&&d&&(r||!p):u?h&&d&&!p&&(r||!m):!p&&!m&&(r?f<=e:f<e);v?o=l+1:i=l}return sn(i,4294967294)}function Zr(t,e){for(var n=-1,r=t.length,o=0,i=[];++n<r;){var a=t[n],s=e?e(a):a;if(!n||!Ta(s,u)){var u=s;i[o++]=0===a?0:a}}return i}function Kr(t){return"number"==typeof t?t:Xa(t)?NaN:+t}function Xr(t){if("string"==typeof t)return t;if(Ba(t))return pe(t,Xr)+"";if(Xa(t))return Cn?Cn.call(t):"";var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}function Gr(t,e,n){var r=-1,o=fe,i=t.length,a=!0,s=[],u=s;if(n)a=!1,o=de;else if(i>=200){var c=e?null:Io(t);if(c)return He(c);a=!1,o=Pe,u=new Nn}else u=e?[]:s;t:for(;++r<i;){var l=t[r],f=e?e(l):l;if(l=n||0!==l?l:0,a&&f==f){for(var d=u.length;d--;)if(u[d]===f)continue t;e&&u.push(f),s.push(l)}else o(u,f,n)||(u!==s&&u.push(f),s.push(l))}return s}function Qr(t,e){return null==(t=vi(t,e=so(e,t)))||delete t[Ei(zi(e))]}function to(t,e,n,r){return Fr(t,e,n(fr(t,e)),r)}function eo(t,e,n,r){for(var o=t.length,i=r?o:-1;(r?i--:++i<o)&&e(t[i],i,t););return n?Vr(t,r?0:i,r?i+1:o):Vr(t,r?i+1:0,r?o:i)}function no(t,e){var n=t;return n instanceof Pn&&(n=n.value()),me(e,(function(t,e){return e.func.apply(e.thisArg,he([t],e.args))}),n)}function ro(t,e,n){var o=t.length;if(o<2)return o?Gr(t[0]):[];for(var i=-1,a=r(o);++i<o;)for(var s=t[i],u=-1;++u<o;)u!=i&&(a[i]=Qn(a[i]||s,t[u],e,n));return Gr(ir(a,1),e,n)}function oo(t,e,n){for(var r=-1,o=t.length,i=e.length,a={};++r<o;){var s=r<i?e[r]:void 0;n(a,t[r],s)}return a}function io(t){return Na(t)?t:[]}function ao(t){return"function"==typeof t?t:Ys}function so(t,e){return Ba(t)?t:ci(t,e)?[t]:ji(ss(t))}var uo=Ir;function co(t,e,n){var r=t.length;return n=void 0===n?r:n,!e&&n>=r?t:Vr(t,e,n)}var lo=Ze||function(t){return $t.clearTimeout(t)};function fo(t,e){if(e)return t.slice();var n=t.length,r=Ut?Ut(n):new t.constructor(n);return t.copy(r),r}function po(t){var e=new t.constructor(t.byteLength);return new Nt(e).set(new Nt(t)),e}function ho(t,e){var n=e?po(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}function mo(t,e){if(t!==e){var n=void 0!==t,r=null===t,o=t==t,i=Xa(t),a=void 0!==e,s=null===e,u=e==e,c=Xa(e);if(!s&&!c&&!i&&t>e||i&&a&&u&&!s&&!c||r&&a&&u||!n&&u||!o)return 1;if(!r&&!i&&!c&&t<e||c&&n&&o&&!r&&!i||s&&n&&o||!a&&o||!u)return-1}return 0}function vo(t,e,n,o){for(var i=-1,a=t.length,s=n.length,u=-1,c=e.length,l=an(a-s,0),f=r(c+l),d=!o;++u<c;)f[u]=e[u];for(;++i<s;)(d||i<a)&&(f[n[i]]=t[i]);for(;l--;)f[u++]=t[i++];return f}function go(t,e,n,o){for(var i=-1,a=t.length,s=-1,u=n.length,c=-1,l=e.length,f=an(a-u,0),d=r(f+l),p=!o;++i<f;)d[i]=t[i];for(var h=i;++c<l;)d[h+c]=e[c];for(;++s<u;)(p||i<a)&&(d[h+n[s]]=t[i++]);return d}function wo(t,e){var n=-1,o=t.length;for(e||(e=r(o));++n<o;)e[n]=t[n];return e}function yo(t,e,n,r){var o=!n;n||(n={});for(var i=-1,a=e.length;++i<a;){var s=e[i],u=r?r(n[s],t[s],s,n,t):void 0;void 0===u&&(u=t[s]),o?$n(n,s,u):Hn(n,s,u)}return n}function bo(t,e){return function(n,r){var o=Ba(n)?ae:Vn,i=e?e():{};return o(n,t,Xo(r,2),i)}}function xo(t){return Ir((function(e,n){var r=-1,o=n.length,i=o>1?n[o-1]:void 0,a=o>2?n[2]:void 0;for(i=t.length>3&&"function"==typeof i?(o--,i):void 0,a&&ui(n[0],n[1],a)&&(i=o<3?void 0:i,o=1),e=mt(e);++r<o;){var s=n[r];s&&t(e,s,r,i)}return e}))}function _o(t,e){return function(n,r){if(null==n)return n;if(!Ma(n))return t(n,r);for(var o=n.length,i=e?o:-1,a=mt(n);(e?i--:++i<o)&&!1!==r(a[i],i,a););return n}}function ko(t){return function(e,n,r){for(var o=-1,i=mt(e),a=r(e),s=a.length;s--;){var u=a[t?s:++o];if(!1===n(i[u],u,i))break}return e}}function Oo(t){return function(e){var n=ze(e=ss(e))?Ye(e):void 0,r=n?n[0]:e.charAt(0),o=n?co(n,1).join(""):e.slice(1);return r[t]()+o}}function jo(t){return function(e){return me(qs(Ps(e).replace(Pt,"")),t,"")}}function Eo(t){return function(){var e=arguments;switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3]);case 5:return new t(e[0],e[1],e[2],e[3],e[4]);case 6:return new t(e[0],e[1],e[2],e[3],e[4],e[5]);case 7:return new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6])}var n=Tn(t.prototype),r=t.apply(n,e);return Ha(r)?r:n}}function Co(t){return function(e,n,r){var o=mt(e);if(!Ma(e)){var i=Xo(n,3);e=bs(e),n=function(t){return i(o[t],t,o)}}var a=t(e,n,r);return a>-1?o[i?e[a]:a]:void 0}}function Ao(t){return Vo((function(e){var n=e.length,r=n,o=Ln.prototype.thru;for(t&&e.reverse();r--;){var a=e[r];if("function"!=typeof a)throw new wt(i);if(o&&!s&&"wrapper"==Zo(a))var s=new Ln([],!0)}for(r=s?r:n;++r<n;){var u=Zo(a=e[r]),c="wrapper"==u?Jo(a):void 0;s=c&&li(c[0])&&424==c[1]&&!c[4].length&&1==c[9]?s[Zo(c[0])].apply(s,c[3]):1==a.length&&li(a)?s[u]():s.thru(a)}return function(){var t=arguments,r=t[0];if(s&&1==t.length&&Ba(r))return s.plant(r).value();for(var o=0,i=n?e[o].apply(this,t):r;++o<n;)i=e[o].call(this,i);return i}}))}function To(t,e,n,o,i,a,s,u,c,l){var f=128&e,d=1&e,p=2&e,h=24&e,m=512&e,v=p?void 0:Eo(t);return function g(){for(var w=arguments.length,y=r(w),b=w;b--;)y[b]=arguments[b];if(h)var x=Ko(g),_=Me(y,x);if(o&&(y=vo(y,o,i,h)),a&&(y=go(y,a,s,h)),w-=_,h&&w<l){var k=Ue(y,x);return No(t,e,To,g.placeholder,n,y,k,u,c,l-w)}var O=d?n:this,j=p?O[t]:t;return w=y.length,u?y=gi(y,u):m&&w>1&&y.reverse(),f&&c<w&&(y.length=c),this&&this!==$t&&this instanceof g&&(j=v||Eo(j)),j.apply(O,y)}}function So(t,e){return function(n,r){return function(t,e,n,r){return ur(t,(function(t,o,i){e(r,n(t),o,i)})),r}(n,t,e(r),{})}}function Lo(t,e){return function(n,r){var o;if(void 0===n&&void 0===r)return e;if(void 0!==n&&(o=n),void 0!==r){if(void 0===o)return r;"string"==typeof n||"string"==typeof r?(n=Xr(n),r=Xr(r)):(n=Kr(n),r=Kr(r)),o=t(n,r)}return o}}function Po(t){return Vo((function(e){return e=pe(e,Se(Xo())),Ir((function(n){var r=this;return t(e,(function(t){return ie(t,r,n)}))}))}))}function Bo(t,e){var n=(e=void 0===e?" ":Xr(e)).length;if(n<2)return n?Rr(e,t):e;var r=Rr(e,Ge(t/Ve(e)));return ze(e)?co(Ye(r),0,t).join(""):r.slice(0,t)}function Do(t){return function(e,n,o){return o&&"number"!=typeof o&&ui(e,n,o)&&(n=o=void 0),e=ns(e),void 0===n?(n=e,e=0):n=ns(n),function(t,e,n,o){for(var i=-1,a=an(Ge((e-t)/(n||1)),0),s=r(a);a--;)s[o?a:++i]=t,t+=n;return s}(e,n,o=void 0===o?e<n?1:-1:ns(o),t)}}function Mo(t){return function(e,n){return"string"==typeof e&&"string"==typeof n||(e=is(e),n=is(n)),t(e,n)}}function No(t,e,n,r,o,i,a,s,u,c){var l=8&e;e|=l?32:64,4&(e&=~(l?64:32))||(e&=-4);var f=[t,e,o,l?i:void 0,l?a:void 0,l?void 0:i,l?void 0:a,s,u,c],d=n.apply(void 0,f);return li(t)&&yi(d,f),d.placeholder=r,_i(d,t,e)}function Ro(t){var e=ht[t];return function(t,n){if(t=is(t),(n=null==n?0:sn(rs(n),292))&&nn(t)){var r=(ss(t)+"e").split("e");return+((r=(ss(e(r[0]+"e"+(+r[1]+n)))+"e").split("e"))[0]+"e"+(+r[1]-n))}return e(t)}}var Io=mn&&1/He(new mn([,-0]))[1]==1/0?function(t){return new mn(t)}:Xs;function zo(t){return function(e){var n=ri(e);return n==m?qe(e):n==y?We(e):function(t,e){return pe(e,(function(e){return[e,t[e]]}))}(e,t(e))}}function qo(t,e,n,o,s,u,c,l){var f=2&e;if(!f&&"function"!=typeof t)throw new wt(i);var d=o?o.length:0;if(d||(e&=-97,o=s=void 0),c=void 0===c?c:an(rs(c),0),l=void 0===l?l:rs(l),d-=s?s.length:0,64&e){var p=o,h=s;o=s=void 0}var m=f?void 0:Jo(t),v=[t,e,n,o,s,p,h,u,c,l];if(m&&function(t,e){var n=t[1],r=e[1],o=n|r,i=o<131,s=128==r&&8==n||128==r&&256==n&&t[7].length<=e[8]||384==r&&e[7].length<=e[8]&&8==n;if(!i&&!s)return t;1&r&&(t[2]=e[2],o|=1&n?0:4);var u=e[3];if(u){var c=t[3];t[3]=c?vo(c,u,e[4]):u,t[4]=c?Ue(t[3],a):e[4]}(u=e[5])&&(c=t[5],t[5]=c?go(c,u,e[6]):u,t[6]=c?Ue(t[5],a):e[6]);(u=e[7])&&(t[7]=u);128&r&&(t[8]=null==t[8]?e[8]:sn(t[8],e[8]));null==t[9]&&(t[9]=e[9]);t[0]=e[0],t[1]=o}(v,m),t=v[0],e=v[1],n=v[2],o=v[3],s=v[4],!(l=v[9]=void 0===v[9]?f?0:t.length:an(v[9]-d,0))&&24&e&&(e&=-25),e&&1!=e)g=8==e||16==e?function(t,e,n){var o=Eo(t);return function i(){for(var a=arguments.length,s=r(a),u=a,c=Ko(i);u--;)s[u]=arguments[u];var l=a<3&&s[0]!==c&&s[a-1]!==c?[]:Ue(s,c);if((a-=l.length)<n)return No(t,e,To,i.placeholder,void 0,s,l,void 0,void 0,n-a);var f=this&&this!==$t&&this instanceof i?o:t;return ie(f,this,s)}}(t,e,l):32!=e&&33!=e||s.length?To.apply(void 0,v):function(t,e,n,o){var i=1&e,a=Eo(t);return function e(){for(var s=-1,u=arguments.length,c=-1,l=o.length,f=r(l+u),d=this&&this!==$t&&this instanceof e?a:t;++c<l;)f[c]=o[c];for(;u--;)f[c++]=arguments[++s];return ie(d,i?n:this,f)}}(t,e,n,o);else var g=function(t,e,n){var r=1&e,o=Eo(t);return function e(){var i=this&&this!==$t&&this instanceof e?o:t;return i.apply(r?n:this,arguments)}}(t,e,n);return _i((m?Ur:yi)(g,v),t,e)}function Fo(t,e,n,r){return void 0===t||Ta(t,xt[n])&&!Ot.call(r,n)?e:t}function Uo(t,e,n,r,o,i){return Ha(t)&&Ha(e)&&(i.set(e,t),Sr(t,e,void 0,Uo,i),i.delete(e)),t}function Ho(t){return $a(t)?void 0:t}function Wo(t,e,n,r,o,i){var a=1&n,s=t.length,u=e.length;if(s!=u&&!(a&&u>s))return!1;var c=i.get(t),l=i.get(e);if(c&&l)return c==e&&l==t;var f=-1,d=!0,p=2&n?new Nn:void 0;for(i.set(t,e),i.set(e,t);++f<s;){var h=t[f],m=e[f];if(r)var v=a?r(m,h,f,e,t,i):r(h,m,f,t,e,i);if(void 0!==v){if(v)continue;d=!1;break}if(p){if(!ge(e,(function(t,e){if(!Pe(p,e)&&(h===t||o(h,t,n,r,i)))return p.push(e)}))){d=!1;break}}else if(h!==m&&!o(h,m,n,r,i)){d=!1;break}}return i.delete(t),i.delete(e),d}function Vo(t){return xi(mi(t,void 0,Di),t+"")}function Yo(t){return dr(t,bs,ei)}function $o(t){return dr(t,xs,ni)}var Jo=wn?function(t){return wn.get(t)}:Xs;function Zo(t){for(var e=t.name+"",n=yn[e],r=Ot.call(yn,e)?n.length:0;r--;){var o=n[r],i=o.func;if(null==i||i==t)return o.name}return e}function Ko(t){return(Ot.call(An,"placeholder")?An:t).placeholder}function Xo(){var t=An.iteratee||$s;return t=t===$s?kr:t,arguments.length?t(arguments[0],arguments[1]):t}function Go(t,e){var n,r,o=t.__data__;return("string"==(r=typeof(n=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof e?"string":"hash"]:o.map}function Qo(t){for(var e=bs(t),n=e.length;n--;){var r=e[n],o=t[r];e[n]=[r,o,pi(o)]}return e}function ti(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return _r(n)?n:void 0}var ei=tn?function(t){return null==t?[]:(t=mt(t),le(tn(t),(function(e){return Jt.call(t,e)})))}:ou,ni=tn?function(t){for(var e=[];t;)he(e,ei(t)),t=Vt(t);return e}:ou,ri=pr;function oi(t,e,n){for(var r=-1,o=(e=so(e,t)).length,i=!1;++r<o;){var a=Ei(e[r]);if(!(i=null!=t&&n(t,a)))break;t=t[a]}return i||++r!=o?i:!!(o=null==t?0:t.length)&&Ua(o)&&si(a,o)&&(Ba(t)||Pa(t))}function ii(t){return"function"!=typeof t.constructor||di(t)?{}:Tn(Vt(t))}function ai(t){return Ba(t)||Pa(t)||!!(Xt&&t&&t[Xt])}function si(t,e){var n=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&ut.test(t))&&t>-1&&t%1==0&&t<e}function ui(t,e,n){if(!Ha(n))return!1;var r=typeof e;return!!("number"==r?Ma(n)&&si(e,n.length):"string"==r&&e in n)&&Ta(n[e],t)}function ci(t,e){if(Ba(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!Xa(t))||(W.test(t)||!H.test(t)||null!=e&&t in mt(e))}function li(t){var e=Zo(t),n=An[e];if("function"!=typeof n||!(e in Pn.prototype))return!1;if(t===n)return!0;var r=Jo(n);return!!r&&t===r[0]}(dn&&ri(new dn(new ArrayBuffer(1)))!=O||pn&&ri(new pn)!=m||hn&&"[object Promise]"!=ri(hn.resolve())||mn&&ri(new mn)!=y||vn&&ri(new vn)!=_)&&(ri=function(t){var e=pr(t),n=e==g?t.constructor:void 0,r=n?Ci(n):"";if(r)switch(r){case bn:return O;case xn:return m;case _n:return"[object Promise]";case kn:return y;case On:return _}return e});var fi=_t?qa:iu;function di(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||xt)}function pi(t){return t==t&&!Ha(t)}function hi(t,e){return function(n){return null!=n&&(n[t]===e&&(void 0!==e||t in mt(n)))}}function mi(t,e,n){return e=an(void 0===e?t.length-1:e,0),function(){for(var o=arguments,i=-1,a=an(o.length-e,0),s=r(a);++i<a;)s[i]=o[e+i];i=-1;for(var u=r(e+1);++i<e;)u[i]=o[i];return u[e]=n(s),ie(t,this,u)}}function vi(t,e){return e.length<2?t:fr(t,Vr(e,0,-1))}function gi(t,e){for(var n=t.length,r=sn(e.length,n),o=wo(t);r--;){var i=e[r];t[r]=si(i,n)?o[i]:void 0}return t}function wi(t,e){if(("constructor"!==e||"function"!=typeof t[e])&&"__proto__"!=e)return t[e]}var yi=ki(Ur),bi=Xe||function(t,e){return $t.setTimeout(t,e)},xi=ki(Hr);function _i(t,e,n){var r=e+"";return xi(t,function(t,e){var n=e.length;if(!n)return t;var r=n-1;return e[r]=(n>1?"& ":"")+e[r],e=e.join(n>2?", ":" "),t.replace(X,"{\n/* [wrapped with "+e+"] */\n")}(r,function(t,e){return se(s,(function(n){var r="_."+n[0];e&n[1]&&!fe(t,r)&&t.push(r)})),t.sort()}(function(t){var e=t.match(G);return e?e[1].split(Q):[]}(r),n)))}function ki(t){var e=0,n=0;return function(){var r=un(),o=16-(r-n);if(n=r,o>0){if(++e>=800)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}function Oi(t,e){var n=-1,r=t.length,o=r-1;for(e=void 0===e?r:e;++n<e;){var i=Nr(n,o),a=t[i];t[i]=t[n],t[n]=a}return t.length=e,t}var ji=function(t){var e=ka(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(V,(function(t,n,r,o){e.push(r?o.replace(et,"$1"):n||t)})),e}));function Ei(t){if("string"==typeof t||Xa(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}function Ci(t){if(null!=t){try{return kt.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Ai(t){if(t instanceof Pn)return t.clone();var e=new Ln(t.__wrapped__,t.__chain__);return e.__actions__=wo(t.__actions__),e.__index__=t.__index__,e.__values__=t.__values__,e}var Ti=Ir((function(t,e){return Na(t)?Qn(t,ir(e,1,Na,!0)):[]})),Si=Ir((function(t,e){var n=zi(e);return Na(n)&&(n=void 0),Na(t)?Qn(t,ir(e,1,Na,!0),Xo(n,2)):[]})),Li=Ir((function(t,e){var n=zi(e);return Na(n)&&(n=void 0),Na(t)?Qn(t,ir(e,1,Na,!0),void 0,n):[]}));function Pi(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var o=null==n?0:rs(n);return o<0&&(o=an(r+o,0)),be(t,Xo(e,3),o)}function Bi(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var o=r-1;return void 0!==n&&(o=rs(n),o=n<0?an(r+o,0):sn(o,r-1)),be(t,Xo(e,3),o,!0)}function Di(t){return(null==t?0:t.length)?ir(t,1):[]}function Mi(t){return t&&t.length?t[0]:void 0}var Ni=Ir((function(t){var e=pe(t,io);return e.length&&e[0]===t[0]?gr(e):[]})),Ri=Ir((function(t){var e=zi(t),n=pe(t,io);return e===zi(n)?e=void 0:n.pop(),n.length&&n[0]===t[0]?gr(n,Xo(e,2)):[]})),Ii=Ir((function(t){var e=zi(t),n=pe(t,io);return(e="function"==typeof e?e:void 0)&&n.pop(),n.length&&n[0]===t[0]?gr(n,void 0,e):[]}));function zi(t){var e=null==t?0:t.length;return e?t[e-1]:void 0}var qi=Ir(Fi);function Fi(t,e){return t&&t.length&&e&&e.length?Dr(t,e):t}var Ui=Vo((function(t,e){var n=null==t?0:t.length,r=Jn(t,e);return Mr(t,pe(e,(function(t){return si(t,n)?+t:t})).sort(mo)),r}));function Hi(t){return null==t?t:fn.call(t)}var Wi=Ir((function(t){return Gr(ir(t,1,Na,!0))})),Vi=Ir((function(t){var e=zi(t);return Na(e)&&(e=void 0),Gr(ir(t,1,Na,!0),Xo(e,2))})),Yi=Ir((function(t){var e=zi(t);return e="function"==typeof e?e:void 0,Gr(ir(t,1,Na,!0),void 0,e)}));function $i(t){if(!t||!t.length)return[];var e=0;return t=le(t,(function(t){if(Na(t))return e=an(t.length,e),!0})),Te(e,(function(e){return pe(t,je(e))}))}function Ji(t,e){if(!t||!t.length)return[];var n=$i(t);return null==e?n:pe(n,(function(t){return ie(e,void 0,t)}))}var Zi=Ir((function(t,e){return Na(t)?Qn(t,e):[]})),Ki=Ir((function(t){return ro(le(t,Na))})),Xi=Ir((function(t){var e=zi(t);return Na(e)&&(e=void 0),ro(le(t,Na),Xo(e,2))})),Gi=Ir((function(t){var e=zi(t);return e="function"==typeof e?e:void 0,ro(le(t,Na),void 0,e)})),Qi=Ir($i);var ta=Ir((function(t){var e=t.length,n=e>1?t[e-1]:void 0;return n="function"==typeof n?(t.pop(),n):void 0,Ji(t,n)}));function ea(t){var e=An(t);return e.__chain__=!0,e}function na(t,e){return e(t)}var ra=Vo((function(t){var e=t.length,n=e?t[0]:0,r=this.__wrapped__,o=function(e){return Jn(e,t)};return!(e>1||this.__actions__.length)&&r instanceof Pn&&si(n)?((r=r.slice(n,+n+(e?1:0))).__actions__.push({func:na,args:[o],thisArg:void 0}),new Ln(r,this.__chain__).thru((function(t){return e&&!t.length&&t.push(void 0),t}))):this.thru(o)}));var oa=bo((function(t,e,n){Ot.call(t,n)?++t[n]:$n(t,n,1)}));var ia=Co(Pi),aa=Co(Bi);function sa(t,e){return(Ba(t)?se:tr)(t,Xo(e,3))}function ua(t,e){return(Ba(t)?ue:er)(t,Xo(e,3))}var ca=bo((function(t,e,n){Ot.call(t,n)?t[n].push(e):$n(t,n,[e])}));var la=Ir((function(t,e,n){var o=-1,i="function"==typeof e,a=Ma(t)?r(t.length):[];return tr(t,(function(t){a[++o]=i?ie(e,t,n):wr(t,e,n)})),a})),fa=bo((function(t,e,n){$n(t,n,e)}));function da(t,e){return(Ba(t)?pe:Cr)(t,Xo(e,3))}var pa=bo((function(t,e,n){t[n?0:1].push(e)}),(function(){return[[],[]]}));var ha=Ir((function(t,e){if(null==t)return[];var n=e.length;return n>1&&ui(t,e[0],e[1])?e=[]:n>2&&ui(e[0],e[1],e[2])&&(e=[e[0]]),Pr(t,ir(e,1),[])})),ma=Ke||function(){return $t.Date.now()};function va(t,e,n){return e=n?void 0:e,qo(t,128,void 0,void 0,void 0,void 0,e=t&&null==e?t.length:e)}function ga(t,e){var n;if("function"!=typeof e)throw new wt(i);return t=rs(t),function(){return--t>0&&(n=e.apply(this,arguments)),t<=1&&(e=void 0),n}}var wa=Ir((function(t,e,n){var r=1;if(n.length){var o=Ue(n,Ko(wa));r|=32}return qo(t,r,e,n,o)})),ya=Ir((function(t,e,n){var r=3;if(n.length){var o=Ue(n,Ko(ya));r|=32}return qo(e,r,t,n,o)}));function ba(t,e,n){var r,o,a,s,u,c,l=0,f=!1,d=!1,p=!0;if("function"!=typeof t)throw new wt(i);function h(e){var n=r,i=o;return r=o=void 0,l=e,s=t.apply(i,n)}function m(t){return l=t,u=bi(g,e),f?h(t):s}function v(t){var n=t-c;return void 0===c||n>=e||n<0||d&&t-l>=a}function g(){var t=ma();if(v(t))return w(t);u=bi(g,function(t){var n=e-(t-c);return d?sn(n,a-(t-l)):n}(t))}function w(t){return u=void 0,p&&r?h(t):(r=o=void 0,s)}function y(){var t=ma(),n=v(t);if(r=arguments,o=this,c=t,n){if(void 0===u)return m(c);if(d)return lo(u),u=bi(g,e),h(c)}return void 0===u&&(u=bi(g,e)),s}return e=is(e)||0,Ha(n)&&(f=!!n.leading,a=(d="maxWait"in n)?an(is(n.maxWait)||0,e):a,p="trailing"in n?!!n.trailing:p),y.cancel=function(){void 0!==u&&lo(u),l=0,r=c=o=u=void 0},y.flush=function(){return void 0===u?s:w(ma())},y}var xa=Ir((function(t,e){return Gn(t,1,e)})),_a=Ir((function(t,e,n){return Gn(t,is(e)||0,n)}));function ka(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new wt(i);var n=function(){var r=arguments,o=e?e.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=t.apply(this,r);return n.cache=i.set(o,a)||i,a};return n.cache=new(ka.Cache||Mn),n}function Oa(t){if("function"!=typeof t)throw new wt(i);return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}ka.Cache=Mn;var ja=uo((function(t,e){var n=(e=1==e.length&&Ba(e[0])?pe(e[0],Se(Xo())):pe(ir(e,1),Se(Xo()))).length;return Ir((function(r){for(var o=-1,i=sn(r.length,n);++o<i;)r[o]=e[o].call(this,r[o]);return ie(t,this,r)}))})),Ea=Ir((function(t,e){return qo(t,32,void 0,e,Ue(e,Ko(Ea)))})),Ca=Ir((function(t,e){return qo(t,64,void 0,e,Ue(e,Ko(Ca)))})),Aa=Vo((function(t,e){return qo(t,256,void 0,void 0,void 0,e)}));function Ta(t,e){return t===e||t!=t&&e!=e}var Sa=Mo(hr),La=Mo((function(t,e){return t>=e})),Pa=yr(function(){return arguments}())?yr:function(t){return Wa(t)&&Ot.call(t,"callee")&&!Jt.call(t,"callee")},Ba=r.isArray,Da=Qt?Se(Qt):function(t){return Wa(t)&&pr(t)==k};function Ma(t){return null!=t&&Ua(t.length)&&!qa(t)}function Na(t){return Wa(t)&&Ma(t)}var Ra=en||iu,Ia=te?Se(te):function(t){return Wa(t)&&pr(t)==f};function za(t){if(!Wa(t))return!1;var e=pr(t);return e==d||"[object DOMException]"==e||"string"==typeof t.message&&"string"==typeof t.name&&!$a(t)}function qa(t){if(!Ha(t))return!1;var e=pr(t);return e==p||e==h||"[object AsyncFunction]"==e||"[object Proxy]"==e}function Fa(t){return"number"==typeof t&&t==rs(t)}function Ua(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}function Ha(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function Wa(t){return null!=t&&"object"==typeof t}var Va=ee?Se(ee):function(t){return Wa(t)&&ri(t)==m};function Ya(t){return"number"==typeof t||Wa(t)&&pr(t)==v}function $a(t){if(!Wa(t)||pr(t)!=g)return!1;var e=Vt(t);if(null===e)return!0;var n=Ot.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&kt.call(n)==At}var Ja=ne?Se(ne):function(t){return Wa(t)&&pr(t)==w};var Za=re?Se(re):function(t){return Wa(t)&&ri(t)==y};function Ka(t){return"string"==typeof t||!Ba(t)&&Wa(t)&&pr(t)==b}function Xa(t){return"symbol"==typeof t||Wa(t)&&pr(t)==x}var Ga=oe?Se(oe):function(t){return Wa(t)&&Ua(t.length)&&!!qt[pr(t)]};var Qa=Mo(Er),ts=Mo((function(t,e){return t<=e}));function es(t){if(!t)return[];if(Ma(t))return Ka(t)?Ye(t):wo(t);if(Gt&&t[Gt])return function(t){for(var e,n=[];!(e=t.next()).done;)n.push(e.value);return n}(t[Gt]());var e=ri(t);return(e==m?qe:e==y?He:Ts)(t)}function ns(t){return t?(t=is(t))===1/0||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0}function rs(t){var e=ns(t),n=e%1;return e==e?n?e-n:e:0}function os(t){return t?Zn(rs(t),0,4294967295):0}function is(t){if("number"==typeof t)return t;if(Xa(t))return NaN;if(Ha(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=Ha(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(J,"");var n=it.test(t);return n||st.test(t)?Wt(t.slice(2),n?2:8):ot.test(t)?NaN:+t}function as(t){return yo(t,xs(t))}function ss(t){return null==t?"":Xr(t)}var us=xo((function(t,e){if(di(e)||Ma(e))yo(e,bs(e),t);else for(var n in e)Ot.call(e,n)&&Hn(t,n,e[n])})),cs=xo((function(t,e){yo(e,xs(e),t)})),ls=xo((function(t,e,n,r){yo(e,xs(e),t,r)})),fs=xo((function(t,e,n,r){yo(e,bs(e),t,r)})),ds=Vo(Jn);var ps=Ir((function(t,e){t=mt(t);var n=-1,r=e.length,o=r>2?e[2]:void 0;for(o&&ui(e[0],e[1],o)&&(r=1);++n<r;)for(var i=e[n],a=xs(i),s=-1,u=a.length;++s<u;){var c=a[s],l=t[c];(void 0===l||Ta(l,xt[c])&&!Ot.call(t,c))&&(t[c]=i[c])}return t})),hs=Ir((function(t){return t.push(void 0,Uo),ie(ks,void 0,t)}));function ms(t,e,n){var r=null==t?void 0:fr(t,e);return void 0===r?n:r}function vs(t,e){return null!=t&&oi(t,e,vr)}var gs=So((function(t,e,n){null!=e&&"function"!=typeof e.toString&&(e=Ct.call(e)),t[e]=n}),Hs(Ys)),ws=So((function(t,e,n){null!=e&&"function"!=typeof e.toString&&(e=Ct.call(e)),Ot.call(t,e)?t[e].push(n):t[e]=[n]}),Xo),ys=Ir(wr);function bs(t){return Ma(t)?In(t):Or(t)}function xs(t){return Ma(t)?In(t,!0):jr(t)}var _s=xo((function(t,e,n){Sr(t,e,n)})),ks=xo((function(t,e,n,r){Sr(t,e,n,r)})),Os=Vo((function(t,e){var n={};if(null==t)return n;var r=!1;e=pe(e,(function(e){return e=so(e,t),r||(r=e.length>1),e})),yo(t,$o(t),n),r&&(n=Kn(n,7,Ho));for(var o=e.length;o--;)Qr(n,e[o]);return n}));var js=Vo((function(t,e){return null==t?{}:function(t,e){return Br(t,e,(function(e,n){return vs(t,n)}))}(t,e)}));function Es(t,e){if(null==t)return{};var n=pe($o(t),(function(t){return[t]}));return e=Xo(e),Br(t,n,(function(t,n){return e(t,n[0])}))}var Cs=zo(bs),As=zo(xs);function Ts(t){return null==t?[]:Le(t,bs(t))}var Ss=jo((function(t,e,n){return e=e.toLowerCase(),t+(n?Ls(e):e)}));function Ls(t){return zs(ss(t).toLowerCase())}function Ps(t){return(t=ss(t))&&t.replace(ct,Ne).replace(Bt,"")}var Bs=jo((function(t,e,n){return t+(n?"-":"")+e.toLowerCase()})),Ds=jo((function(t,e,n){return t+(n?" ":"")+e.toLowerCase()})),Ms=Oo("toLowerCase");var Ns=jo((function(t,e,n){return t+(n?"_":"")+e.toLowerCase()}));var Rs=jo((function(t,e,n){return t+(n?" ":"")+zs(e)}));var Is=jo((function(t,e,n){return t+(n?" ":"")+e.toUpperCase()})),zs=Oo("toUpperCase");function qs(t,e,n){return t=ss(t),void 0===(e=n?void 0:e)?function(t){return Rt.test(t)}(t)?function(t){return t.match(Mt)||[]}(t):function(t){return t.match(tt)||[]}(t):t.match(e)||[]}var Fs=Ir((function(t,e){try{return ie(t,void 0,e)}catch(t){return za(t)?t:new dt(t)}})),Us=Vo((function(t,e){return se(e,(function(e){e=Ei(e),$n(t,e,wa(t[e],t))})),t}));function Hs(t){return function(){return t}}var Ws=Ao(),Vs=Ao(!0);function Ys(t){return t}function $s(t){return kr("function"==typeof t?t:Kn(t,1))}var Js=Ir((function(t,e){return function(n){return wr(n,t,e)}})),Zs=Ir((function(t,e){return function(n){return wr(t,n,e)}}));function Ks(t,e,n){var r=bs(e),o=lr(e,r);null!=n||Ha(e)&&(o.length||!r.length)||(n=e,e=t,t=this,o=lr(e,bs(e)));var i=!(Ha(n)&&"chain"in n&&!n.chain),a=qa(t);return se(o,(function(n){var r=e[n];t[n]=r,a&&(t.prototype[n]=function(){var e=this.__chain__;if(i||e){var n=t(this.__wrapped__),o=n.__actions__=wo(this.__actions__);return o.push({func:r,args:arguments,thisArg:t}),n.__chain__=e,n}return r.apply(t,he([this.value()],arguments))})})),t}function Xs(){}var Gs=Po(pe),Qs=Po(ce),tu=Po(ge);function eu(t){return ci(t)?je(Ei(t)):function(t){return function(e){return fr(e,t)}}(t)}var nu=Do(),ru=Do(!0);function ou(){return[]}function iu(){return!1}var au=Lo((function(t,e){return t+e}),0),su=Ro("ceil"),uu=Lo((function(t,e){return t/e}),1),cu=Ro("floor");var lu,fu=Lo((function(t,e){return t*e}),1),du=Ro("round"),pu=Lo((function(t,e){return t-e}),0);return An.after=function(t,e){if("function"!=typeof e)throw new wt(i);return t=rs(t),function(){if(--t<1)return e.apply(this,arguments)}},An.ary=va,An.assign=us,An.assignIn=cs,An.assignInWith=ls,An.assignWith=fs,An.at=ds,An.before=ga,An.bind=wa,An.bindAll=Us,An.bindKey=ya,An.castArray=function(){if(!arguments.length)return[];var t=arguments[0];return Ba(t)?t:[t]},An.chain=ea,An.chunk=function(t,e,n){e=(n?ui(t,e,n):void 0===e)?1:an(rs(e),0);var o=null==t?0:t.length;if(!o||e<1)return[];for(var i=0,a=0,s=r(Ge(o/e));i<o;)s[a++]=Vr(t,i,i+=e);return s},An.compact=function(t){for(var e=-1,n=null==t?0:t.length,r=0,o=[];++e<n;){var i=t[e];i&&(o[r++]=i)}return o},An.concat=function(){var t=arguments.length;if(!t)return[];for(var e=r(t-1),n=arguments[0],o=t;o--;)e[o-1]=arguments[o];return he(Ba(n)?wo(n):[n],ir(e,1))},An.cond=function(t){var e=null==t?0:t.length,n=Xo();return t=e?pe(t,(function(t){if("function"!=typeof t[1])throw new wt(i);return[n(t[0]),t[1]]})):[],Ir((function(n){for(var r=-1;++r<e;){var o=t[r];if(ie(o[0],this,n))return ie(o[1],this,n)}}))},An.conforms=function(t){return function(t){var e=bs(t);return function(n){return Xn(n,t,e)}}(Kn(t,1))},An.constant=Hs,An.countBy=oa,An.create=function(t,e){var n=Tn(t);return null==e?n:Yn(n,e)},An.curry=function t(e,n,r){var o=qo(e,8,void 0,void 0,void 0,void 0,void 0,n=r?void 0:n);return o.placeholder=t.placeholder,o},An.curryRight=function t(e,n,r){var o=qo(e,16,void 0,void 0,void 0,void 0,void 0,n=r?void 0:n);return o.placeholder=t.placeholder,o},An.debounce=ba,An.defaults=ps,An.defaultsDeep=hs,An.defer=xa,An.delay=_a,An.difference=Ti,An.differenceBy=Si,An.differenceWith=Li,An.drop=function(t,e,n){var r=null==t?0:t.length;return r?Vr(t,(e=n||void 0===e?1:rs(e))<0?0:e,r):[]},An.dropRight=function(t,e,n){var r=null==t?0:t.length;return r?Vr(t,0,(e=r-(e=n||void 0===e?1:rs(e)))<0?0:e):[]},An.dropRightWhile=function(t,e){return t&&t.length?eo(t,Xo(e,3),!0,!0):[]},An.dropWhile=function(t,e){return t&&t.length?eo(t,Xo(e,3),!0):[]},An.fill=function(t,e,n,r){var o=null==t?0:t.length;return o?(n&&"number"!=typeof n&&ui(t,e,n)&&(n=0,r=o),function(t,e,n,r){var o=t.length;for((n=rs(n))<0&&(n=-n>o?0:o+n),(r=void 0===r||r>o?o:rs(r))<0&&(r+=o),r=n>r?0:os(r);n<r;)t[n++]=e;return t}(t,e,n,r)):[]},An.filter=function(t,e){return(Ba(t)?le:or)(t,Xo(e,3))},An.flatMap=function(t,e){return ir(da(t,e),1)},An.flatMapDeep=function(t,e){return ir(da(t,e),1/0)},An.flatMapDepth=function(t,e,n){return n=void 0===n?1:rs(n),ir(da(t,e),n)},An.flatten=Di,An.flattenDeep=function(t){return(null==t?0:t.length)?ir(t,1/0):[]},An.flattenDepth=function(t,e){return(null==t?0:t.length)?ir(t,e=void 0===e?1:rs(e)):[]},An.flip=function(t){return qo(t,512)},An.flow=Ws,An.flowRight=Vs,An.fromPairs=function(t){for(var e=-1,n=null==t?0:t.length,r={};++e<n;){var o=t[e];r[o[0]]=o[1]}return r},An.functions=function(t){return null==t?[]:lr(t,bs(t))},An.functionsIn=function(t){return null==t?[]:lr(t,xs(t))},An.groupBy=ca,An.initial=function(t){return(null==t?0:t.length)?Vr(t,0,-1):[]},An.intersection=Ni,An.intersectionBy=Ri,An.intersectionWith=Ii,An.invert=gs,An.invertBy=ws,An.invokeMap=la,An.iteratee=$s,An.keyBy=fa,An.keys=bs,An.keysIn=xs,An.map=da,An.mapKeys=function(t,e){var n={};return e=Xo(e,3),ur(t,(function(t,r,o){$n(n,e(t,r,o),t)})),n},An.mapValues=function(t,e){var n={};return e=Xo(e,3),ur(t,(function(t,r,o){$n(n,r,e(t,r,o))})),n},An.matches=function(t){return Ar(Kn(t,1))},An.matchesProperty=function(t,e){return Tr(t,Kn(e,1))},An.memoize=ka,An.merge=_s,An.mergeWith=ks,An.method=Js,An.methodOf=Zs,An.mixin=Ks,An.negate=Oa,An.nthArg=function(t){return t=rs(t),Ir((function(e){return Lr(e,t)}))},An.omit=Os,An.omitBy=function(t,e){return Es(t,Oa(Xo(e)))},An.once=function(t){return ga(2,t)},An.orderBy=function(t,e,n,r){return null==t?[]:(Ba(e)||(e=null==e?[]:[e]),Ba(n=r?void 0:n)||(n=null==n?[]:[n]),Pr(t,e,n))},An.over=Gs,An.overArgs=ja,An.overEvery=Qs,An.overSome=tu,An.partial=Ea,An.partialRight=Ca,An.partition=pa,An.pick=js,An.pickBy=Es,An.property=eu,An.propertyOf=function(t){return function(e){return null==t?void 0:fr(t,e)}},An.pull=qi,An.pullAll=Fi,An.pullAllBy=function(t,e,n){return t&&t.length&&e&&e.length?Dr(t,e,Xo(n,2)):t},An.pullAllWith=function(t,e,n){return t&&t.length&&e&&e.length?Dr(t,e,void 0,n):t},An.pullAt=Ui,An.range=nu,An.rangeRight=ru,An.rearg=Aa,An.reject=function(t,e){return(Ba(t)?le:or)(t,Oa(Xo(e,3)))},An.remove=function(t,e){var n=[];if(!t||!t.length)return n;var r=-1,o=[],i=t.length;for(e=Xo(e,3);++r<i;){var a=t[r];e(a,r,t)&&(n.push(a),o.push(r))}return Mr(t,o),n},An.rest=function(t,e){if("function"!=typeof t)throw new wt(i);return Ir(t,e=void 0===e?e:rs(e))},An.reverse=Hi,An.sampleSize=function(t,e,n){return e=(n?ui(t,e,n):void 0===e)?1:rs(e),(Ba(t)?qn:qr)(t,e)},An.set=function(t,e,n){return null==t?t:Fr(t,e,n)},An.setWith=function(t,e,n,r){return r="function"==typeof r?r:void 0,null==t?t:Fr(t,e,n,r)},An.shuffle=function(t){return(Ba(t)?Fn:Wr)(t)},An.slice=function(t,e,n){var r=null==t?0:t.length;return r?(n&&"number"!=typeof n&&ui(t,e,n)?(e=0,n=r):(e=null==e?0:rs(e),n=void 0===n?r:rs(n)),Vr(t,e,n)):[]},An.sortBy=ha,An.sortedUniq=function(t){return t&&t.length?Zr(t):[]},An.sortedUniqBy=function(t,e){return t&&t.length?Zr(t,Xo(e,2)):[]},An.split=function(t,e,n){return n&&"number"!=typeof n&&ui(t,e,n)&&(e=n=void 0),(n=void 0===n?4294967295:n>>>0)?(t=ss(t))&&("string"==typeof e||null!=e&&!Ja(e))&&!(e=Xr(e))&&ze(t)?co(Ye(t),0,n):t.split(e,n):[]},An.spread=function(t,e){if("function"!=typeof t)throw new wt(i);return e=null==e?0:an(rs(e),0),Ir((function(n){var r=n[e],o=co(n,0,e);return r&&he(o,r),ie(t,this,o)}))},An.tail=function(t){var e=null==t?0:t.length;return e?Vr(t,1,e):[]},An.take=function(t,e,n){return t&&t.length?Vr(t,0,(e=n||void 0===e?1:rs(e))<0?0:e):[]},An.takeRight=function(t,e,n){var r=null==t?0:t.length;return r?Vr(t,(e=r-(e=n||void 0===e?1:rs(e)))<0?0:e,r):[]},An.takeRightWhile=function(t,e){return t&&t.length?eo(t,Xo(e,3),!1,!0):[]},An.takeWhile=function(t,e){return t&&t.length?eo(t,Xo(e,3)):[]},An.tap=function(t,e){return e(t),t},An.throttle=function(t,e,n){var r=!0,o=!0;if("function"!=typeof t)throw new wt(i);return Ha(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),ba(t,e,{leading:r,maxWait:e,trailing:o})},An.thru=na,An.toArray=es,An.toPairs=Cs,An.toPairsIn=As,An.toPath=function(t){return Ba(t)?pe(t,Ei):Xa(t)?[t]:wo(ji(ss(t)))},An.toPlainObject=as,An.transform=function(t,e,n){var r=Ba(t),o=r||Ra(t)||Ga(t);if(e=Xo(e,4),null==n){var i=t&&t.constructor;n=o?r?new i:[]:Ha(t)&&qa(i)?Tn(Vt(t)):{}}return(o?se:ur)(t,(function(t,r,o){return e(n,t,r,o)})),n},An.unary=function(t){return va(t,1)},An.union=Wi,An.unionBy=Vi,An.unionWith=Yi,An.uniq=function(t){return t&&t.length?Gr(t):[]},An.uniqBy=function(t,e){return t&&t.length?Gr(t,Xo(e,2)):[]},An.uniqWith=function(t,e){return e="function"==typeof e?e:void 0,t&&t.length?Gr(t,void 0,e):[]},An.unset=function(t,e){return null==t||Qr(t,e)},An.unzip=$i,An.unzipWith=Ji,An.update=function(t,e,n){return null==t?t:to(t,e,ao(n))},An.updateWith=function(t,e,n,r){return r="function"==typeof r?r:void 0,null==t?t:to(t,e,ao(n),r)},An.values=Ts,An.valuesIn=function(t){return null==t?[]:Le(t,xs(t))},An.without=Zi,An.words=qs,An.wrap=function(t,e){return Ea(ao(e),t)},An.xor=Ki,An.xorBy=Xi,An.xorWith=Gi,An.zip=Qi,An.zipObject=function(t,e){return oo(t||[],e||[],Hn)},An.zipObjectDeep=function(t,e){return oo(t||[],e||[],Fr)},An.zipWith=ta,An.entries=Cs,An.entriesIn=As,An.extend=cs,An.extendWith=ls,Ks(An,An),An.add=au,An.attempt=Fs,An.camelCase=Ss,An.capitalize=Ls,An.ceil=su,An.clamp=function(t,e,n){return void 0===n&&(n=e,e=void 0),void 0!==n&&(n=(n=is(n))==n?n:0),void 0!==e&&(e=(e=is(e))==e?e:0),Zn(is(t),e,n)},An.clone=function(t){return Kn(t,4)},An.cloneDeep=function(t){return Kn(t,5)},An.cloneDeepWith=function(t,e){return Kn(t,5,e="function"==typeof e?e:void 0)},An.cloneWith=function(t,e){return Kn(t,4,e="function"==typeof e?e:void 0)},An.conformsTo=function(t,e){return null==e||Xn(t,e,bs(e))},An.deburr=Ps,An.defaultTo=function(t,e){return null==t||t!=t?e:t},An.divide=uu,An.endsWith=function(t,e,n){t=ss(t),e=Xr(e);var r=t.length,o=n=void 0===n?r:Zn(rs(n),0,r);return(n-=e.length)>=0&&t.slice(n,o)==e},An.eq=Ta,An.escape=function(t){return(t=ss(t))&&z.test(t)?t.replace(R,Re):t},An.escapeRegExp=function(t){return(t=ss(t))&&$.test(t)?t.replace(Y,"\\$&"):t},An.every=function(t,e,n){var r=Ba(t)?ce:nr;return n&&ui(t,e,n)&&(e=void 0),r(t,Xo(e,3))},An.find=ia,An.findIndex=Pi,An.findKey=function(t,e){return ye(t,Xo(e,3),ur)},An.findLast=aa,An.findLastIndex=Bi,An.findLastKey=function(t,e){return ye(t,Xo(e,3),cr)},An.floor=cu,An.forEach=sa,An.forEachRight=ua,An.forIn=function(t,e){return null==t?t:ar(t,Xo(e,3),xs)},An.forInRight=function(t,e){return null==t?t:sr(t,Xo(e,3),xs)},An.forOwn=function(t,e){return t&&ur(t,Xo(e,3))},An.forOwnRight=function(t,e){return t&&cr(t,Xo(e,3))},An.get=ms,An.gt=Sa,An.gte=La,An.has=function(t,e){return null!=t&&oi(t,e,mr)},An.hasIn=vs,An.head=Mi,An.identity=Ys,An.includes=function(t,e,n,r){t=Ma(t)?t:Ts(t),n=n&&!r?rs(n):0;var o=t.length;return n<0&&(n=an(o+n,0)),Ka(t)?n<=o&&t.indexOf(e,n)>-1:!!o&&xe(t,e,n)>-1},An.indexOf=function(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var o=null==n?0:rs(n);return o<0&&(o=an(r+o,0)),xe(t,e,o)},An.inRange=function(t,e,n){return e=ns(e),void 0===n?(n=e,e=0):n=ns(n),function(t,e,n){return t>=sn(e,n)&&t<an(e,n)}(t=is(t),e,n)},An.invoke=ys,An.isArguments=Pa,An.isArray=Ba,An.isArrayBuffer=Da,An.isArrayLike=Ma,An.isArrayLikeObject=Na,An.isBoolean=function(t){return!0===t||!1===t||Wa(t)&&pr(t)==l},An.isBuffer=Ra,An.isDate=Ia,An.isElement=function(t){return Wa(t)&&1===t.nodeType&&!$a(t)},An.isEmpty=function(t){if(null==t)return!0;if(Ma(t)&&(Ba(t)||"string"==typeof t||"function"==typeof t.splice||Ra(t)||Ga(t)||Pa(t)))return!t.length;var e=ri(t);if(e==m||e==y)return!t.size;if(di(t))return!Or(t).length;for(var n in t)if(Ot.call(t,n))return!1;return!0},An.isEqual=function(t,e){return br(t,e)},An.isEqualWith=function(t,e,n){var r=(n="function"==typeof n?n:void 0)?n(t,e):void 0;return void 0===r?br(t,e,void 0,n):!!r},An.isError=za,An.isFinite=function(t){return"number"==typeof t&&nn(t)},An.isFunction=qa,An.isInteger=Fa,An.isLength=Ua,An.isMap=Va,An.isMatch=function(t,e){return t===e||xr(t,e,Qo(e))},An.isMatchWith=function(t,e,n){return n="function"==typeof n?n:void 0,xr(t,e,Qo(e),n)},An.isNaN=function(t){return Ya(t)&&t!=+t},An.isNative=function(t){if(fi(t))throw new dt("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return _r(t)},An.isNil=function(t){return null==t},An.isNull=function(t){return null===t},An.isNumber=Ya,An.isObject=Ha,An.isObjectLike=Wa,An.isPlainObject=$a,An.isRegExp=Ja,An.isSafeInteger=function(t){return Fa(t)&&t>=-9007199254740991&&t<=9007199254740991},An.isSet=Za,An.isString=Ka,An.isSymbol=Xa,An.isTypedArray=Ga,An.isUndefined=function(t){return void 0===t},An.isWeakMap=function(t){return Wa(t)&&ri(t)==_},An.isWeakSet=function(t){return Wa(t)&&"[object WeakSet]"==pr(t)},An.join=function(t,e){return null==t?"":rn.call(t,e)},An.kebabCase=Bs,An.last=zi,An.lastIndexOf=function(t,e,n){var r=null==t?0:t.length;if(!r)return-1;var o=r;return void 0!==n&&(o=(o=rs(n))<0?an(r+o,0):sn(o,r-1)),e==e?function(t,e,n){for(var r=n+1;r--;)if(t[r]===e)return r;return r}(t,e,o):be(t,ke,o,!0)},An.lowerCase=Ds,An.lowerFirst=Ms,An.lt=Qa,An.lte=ts,An.max=function(t){return t&&t.length?rr(t,Ys,hr):void 0},An.maxBy=function(t,e){return t&&t.length?rr(t,Xo(e,2),hr):void 0},An.mean=function(t){return Oe(t,Ys)},An.meanBy=function(t,e){return Oe(t,Xo(e,2))},An.min=function(t){return t&&t.length?rr(t,Ys,Er):void 0},An.minBy=function(t,e){return t&&t.length?rr(t,Xo(e,2),Er):void 0},An.stubArray=ou,An.stubFalse=iu,An.stubObject=function(){return{}},An.stubString=function(){return""},An.stubTrue=function(){return!0},An.multiply=fu,An.nth=function(t,e){return t&&t.length?Lr(t,rs(e)):void 0},An.noConflict=function(){return $t._===this&&($t._=Tt),this},An.noop=Xs,An.now=ma,An.pad=function(t,e,n){t=ss(t);var r=(e=rs(e))?Ve(t):0;if(!e||r>=e)return t;var o=(e-r)/2;return Bo(Qe(o),n)+t+Bo(Ge(o),n)},An.padEnd=function(t,e,n){t=ss(t);var r=(e=rs(e))?Ve(t):0;return e&&r<e?t+Bo(e-r,n):t},An.padStart=function(t,e,n){t=ss(t);var r=(e=rs(e))?Ve(t):0;return e&&r<e?Bo(e-r,n)+t:t},An.parseInt=function(t,e,n){return n||null==e?e=0:e&&(e=+e),cn(ss(t).replace(Z,""),e||0)},An.random=function(t,e,n){if(n&&"boolean"!=typeof n&&ui(t,e,n)&&(e=n=void 0),void 0===n&&("boolean"==typeof e?(n=e,e=void 0):"boolean"==typeof t&&(n=t,t=void 0)),void 0===t&&void 0===e?(t=0,e=1):(t=ns(t),void 0===e?(e=t,t=0):e=ns(e)),t>e){var r=t;t=e,e=r}if(n||t%1||e%1){var o=ln();return sn(t+o*(e-t+Ht("1e-"+((o+"").length-1))),e)}return Nr(t,e)},An.reduce=function(t,e,n){var r=Ba(t)?me:Ce,o=arguments.length<3;return r(t,Xo(e,4),n,o,tr)},An.reduceRight=function(t,e,n){var r=Ba(t)?ve:Ce,o=arguments.length<3;return r(t,Xo(e,4),n,o,er)},An.repeat=function(t,e,n){return e=(n?ui(t,e,n):void 0===e)?1:rs(e),Rr(ss(t),e)},An.replace=function(){var t=arguments,e=ss(t[0]);return t.length<3?e:e.replace(t[1],t[2])},An.result=function(t,e,n){var r=-1,o=(e=so(e,t)).length;for(o||(o=1,t=void 0);++r<o;){var i=null==t?void 0:t[Ei(e[r])];void 0===i&&(r=o,i=n),t=qa(i)?i.call(t):i}return t},An.round=du,An.runInContext=t,An.sample=function(t){return(Ba(t)?zn:zr)(t)},An.size=function(t){if(null==t)return 0;if(Ma(t))return Ka(t)?Ve(t):t.length;var e=ri(t);return e==m||e==y?t.size:Or(t).length},An.snakeCase=Ns,An.some=function(t,e,n){var r=Ba(t)?ge:Yr;return n&&ui(t,e,n)&&(e=void 0),r(t,Xo(e,3))},An.sortedIndex=function(t,e){return $r(t,e)},An.sortedIndexBy=function(t,e,n){return Jr(t,e,Xo(n,2))},An.sortedIndexOf=function(t,e){var n=null==t?0:t.length;if(n){var r=$r(t,e);if(r<n&&Ta(t[r],e))return r}return-1},An.sortedLastIndex=function(t,e){return $r(t,e,!0)},An.sortedLastIndexBy=function(t,e,n){return Jr(t,e,Xo(n,2),!0)},An.sortedLastIndexOf=function(t,e){if(null==t?0:t.length){var n=$r(t,e,!0)-1;if(Ta(t[n],e))return n}return-1},An.startCase=Rs,An.startsWith=function(t,e,n){return t=ss(t),n=null==n?0:Zn(rs(n),0,t.length),e=Xr(e),t.slice(n,n+e.length)==e},An.subtract=pu,An.sum=function(t){return t&&t.length?Ae(t,Ys):0},An.sumBy=function(t,e){return t&&t.length?Ae(t,Xo(e,2)):0},An.template=function(t,e,n){var r=An.templateSettings;n&&ui(t,e,n)&&(e=void 0),t=ss(t),e=ls({},e,r,Fo);var o,i,a=ls({},e.imports,r.imports,Fo),s=bs(a),u=Le(a,s),c=0,l=e.interpolate||lt,f="__p += '",d=vt((e.escape||lt).source+"|"+l.source+"|"+(l===U?nt:lt).source+"|"+(e.evaluate||lt).source+"|$","g"),p="//# sourceURL="+(Ot.call(e,"sourceURL")?(e.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++zt+"]")+"\n";t.replace(d,(function(e,n,r,a,s,u){return r||(r=a),f+=t.slice(c,u).replace(ft,Ie),n&&(o=!0,f+="' +\n__e("+n+") +\n'"),s&&(i=!0,f+="';\n"+s+";\n__p += '"),r&&(f+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),c=u+e.length,e})),f+="';\n";var h=Ot.call(e,"variable")&&e.variable;h||(f="with (obj) {\n"+f+"\n}\n"),f=(i?f.replace(B,""):f).replace(D,"$1").replace(M,"$1;"),f="function("+(h||"obj")+") {\n"+(h?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(o?", __e = _.escape":"")+(i?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+f+"return __p\n}";var m=Fs((function(){return pt(s,p+"return "+f).apply(void 0,u)}));if(m.source=f,za(m))throw m;return m},An.times=function(t,e){if((t=rs(t))<1||t>9007199254740991)return[];var n=4294967295,r=sn(t,4294967295);t-=4294967295;for(var o=Te(r,e=Xo(e));++n<t;)e(n);return o},An.toFinite=ns,An.toInteger=rs,An.toLength=os,An.toLower=function(t){return ss(t).toLowerCase()},An.toNumber=is,An.toSafeInteger=function(t){return t?Zn(rs(t),-9007199254740991,9007199254740991):0===t?t:0},An.toString=ss,An.toUpper=function(t){return ss(t).toUpperCase()},An.trim=function(t,e,n){if((t=ss(t))&&(n||void 0===e))return t.replace(J,"");if(!t||!(e=Xr(e)))return t;var r=Ye(t),o=Ye(e);return co(r,Be(r,o),De(r,o)+1).join("")},An.trimEnd=function(t,e,n){if((t=ss(t))&&(n||void 0===e))return t.replace(K,"");if(!t||!(e=Xr(e)))return t;var r=Ye(t);return co(r,0,De(r,Ye(e))+1).join("")},An.trimStart=function(t,e,n){if((t=ss(t))&&(n||void 0===e))return t.replace(Z,"");if(!t||!(e=Xr(e)))return t;var r=Ye(t);return co(r,Be(r,Ye(e))).join("")},An.truncate=function(t,e){var n=30,r="...";if(Ha(e)){var o="separator"in e?e.separator:o;n="length"in e?rs(e.length):n,r="omission"in e?Xr(e.omission):r}var i=(t=ss(t)).length;if(ze(t)){var a=Ye(t);i=a.length}if(n>=i)return t;var s=n-Ve(r);if(s<1)return r;var u=a?co(a,0,s).join(""):t.slice(0,s);if(void 0===o)return u+r;if(a&&(s+=u.length-s),Ja(o)){if(t.slice(s).search(o)){var c,l=u;for(o.global||(o=vt(o.source,ss(rt.exec(o))+"g")),o.lastIndex=0;c=o.exec(l);)var f=c.index;u=u.slice(0,void 0===f?s:f)}}else if(t.indexOf(Xr(o),s)!=s){var d=u.lastIndexOf(o);d>-1&&(u=u.slice(0,d))}return u+r},An.unescape=function(t){return(t=ss(t))&&I.test(t)?t.replace(N,$e):t},An.uniqueId=function(t){var e=++jt;return ss(t)+e},An.upperCase=Is,An.upperFirst=zs,An.each=sa,An.eachRight=ua,An.first=Mi,Ks(An,(lu={},ur(An,(function(t,e){Ot.call(An.prototype,e)||(lu[e]=t)})),lu),{chain:!1}),An.VERSION="4.17.20",se(["bind","bindKey","curry","curryRight","partial","partialRight"],(function(t){An[t].placeholder=An})),se(["drop","take"],(function(t,e){Pn.prototype[t]=function(n){n=void 0===n?1:an(rs(n),0);var r=this.__filtered__&&!e?new Pn(this):this.clone();return r.__filtered__?r.__takeCount__=sn(n,r.__takeCount__):r.__views__.push({size:sn(n,4294967295),type:t+(r.__dir__<0?"Right":"")}),r},Pn.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()}})),se(["filter","map","takeWhile"],(function(t,e){var n=e+1,r=1==n||3==n;Pn.prototype[t]=function(t){var e=this.clone();return e.__iteratees__.push({iteratee:Xo(t,3),type:n}),e.__filtered__=e.__filtered__||r,e}})),se(["head","last"],(function(t,e){var n="take"+(e?"Right":"");Pn.prototype[t]=function(){return this[n](1).value()[0]}})),se(["initial","tail"],(function(t,e){var n="drop"+(e?"":"Right");Pn.prototype[t]=function(){return this.__filtered__?new Pn(this):this[n](1)}})),Pn.prototype.compact=function(){return this.filter(Ys)},Pn.prototype.find=function(t){return this.filter(t).head()},Pn.prototype.findLast=function(t){return this.reverse().find(t)},Pn.prototype.invokeMap=Ir((function(t,e){return"function"==typeof t?new Pn(this):this.map((function(n){return wr(n,t,e)}))})),Pn.prototype.reject=function(t){return this.filter(Oa(Xo(t)))},Pn.prototype.slice=function(t,e){t=rs(t);var n=this;return n.__filtered__&&(t>0||e<0)?new Pn(n):(t<0?n=n.takeRight(-t):t&&(n=n.drop(t)),void 0!==e&&(n=(e=rs(e))<0?n.dropRight(-e):n.take(e-t)),n)},Pn.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse()},Pn.prototype.toArray=function(){return this.take(4294967295)},ur(Pn.prototype,(function(t,e){var n=/^(?:filter|find|map|reject)|While$/.test(e),r=/^(?:head|last)$/.test(e),o=An[r?"take"+("last"==e?"Right":""):e],i=r||/^find/.test(e);o&&(An.prototype[e]=function(){var e=this.__wrapped__,a=r?[1]:arguments,s=e instanceof Pn,u=a[0],c=s||Ba(e),l=function(t){var e=o.apply(An,he([t],a));return r&&f?e[0]:e};c&&n&&"function"==typeof u&&1!=u.length&&(s=c=!1);var f=this.__chain__,d=!!this.__actions__.length,p=i&&!f,h=s&&!d;if(!i&&c){e=h?e:new Pn(this);var m=t.apply(e,a);return m.__actions__.push({func:na,args:[l],thisArg:void 0}),new Ln(m,f)}return p&&h?t.apply(this,a):(m=this.thru(l),p?r?m.value()[0]:m.value():m)})})),se(["pop","push","shift","sort","splice","unshift"],(function(t){var e=yt[t],n=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",r=/^(?:pop|shift)$/.test(t);An.prototype[t]=function(){var t=arguments;if(r&&!this.__chain__){var o=this.value();return e.apply(Ba(o)?o:[],t)}return this[n]((function(n){return e.apply(Ba(n)?n:[],t)}))}})),ur(Pn.prototype,(function(t,e){var n=An[e];if(n){var r=n.name+"";Ot.call(yn,r)||(yn[r]=[]),yn[r].push({name:e,func:n})}})),yn[To(void 0,2).name]=[{name:"wrapper",func:void 0}],Pn.prototype.clone=function(){var t=new Pn(this.__wrapped__);return t.__actions__=wo(this.__actions__),t.__dir__=this.__dir__,t.__filtered__=this.__filtered__,t.__iteratees__=wo(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=wo(this.__views__),t},Pn.prototype.reverse=function(){if(this.__filtered__){var t=new Pn(this);t.__dir__=-1,t.__filtered__=!0}else(t=this.clone()).__dir__*=-1;return t},Pn.prototype.value=function(){var t=this.__wrapped__.value(),e=this.__dir__,n=Ba(t),r=e<0,o=n?t.length:0,i=function(t,e,n){var r=-1,o=n.length;for(;++r<o;){var i=n[r],a=i.size;switch(i.type){case"drop":t+=a;break;case"dropRight":e-=a;break;case"take":e=sn(e,t+a);break;case"takeRight":t=an(t,e-a)}}return{start:t,end:e}}(0,o,this.__views__),a=i.start,s=i.end,u=s-a,c=r?s:a-1,l=this.__iteratees__,f=l.length,d=0,p=sn(u,this.__takeCount__);if(!n||!r&&o==u&&p==u)return no(t,this.__actions__);var h=[];t:for(;u--&&d<p;){for(var m=-1,v=t[c+=e];++m<f;){var g=l[m],w=g.iteratee,y=g.type,b=w(v);if(2==y)v=b;else if(!b){if(1==y)continue t;break t}}h[d++]=v}return h},An.prototype.at=ra,An.prototype.chain=function(){return ea(this)},An.prototype.commit=function(){return new Ln(this.value(),this.__chain__)},An.prototype.next=function(){void 0===this.__values__&&(this.__values__=es(this.value()));var t=this.__index__>=this.__values__.length;return{done:t,value:t?void 0:this.__values__[this.__index__++]}},An.prototype.plant=function(t){for(var e,n=this;n instanceof Sn;){var r=Ai(n);r.__index__=0,r.__values__=void 0,e?o.__wrapped__=r:e=r;var o=r;n=n.__wrapped__}return o.__wrapped__=t,e},An.prototype.reverse=function(){var t=this.__wrapped__;if(t instanceof Pn){var e=t;return this.__actions__.length&&(e=new Pn(this)),(e=e.reverse()).__actions__.push({func:na,args:[Hi],thisArg:void 0}),new Ln(e,this.__chain__)}return this.thru(Hi)},An.prototype.toJSON=An.prototype.valueOf=An.prototype.value=function(){return no(this.__wrapped__,this.__actions__)},An.prototype.first=An.prototype.head,Gt&&(An.prototype[Gt]=function(){return this}),An}();$t._=Je,void 0===(o=function(){return Je}.call(e,n,e,r))||(r.exports=o)}).call(this)}).call(this,n("yLpj"),n("YuTi")(t))},M34a:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("/Tr7"),o=n("jIYg");function i(t){Object(o.a)(1,arguments);var e=Object(r.a)(t);return e.setHours(0,0,0,0),e}},MLWZ:function(t,e,n){"use strict";var r=n("xTJ+");function o(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,n){if(!e)return t;var i;if(n)i=n(e);else if(r.isURLSearchParams(e))i=e.toString();else{var a=[];r.forEach(e,(function(t,e){null!=t&&(r.isArray(t)?e+="[]":t=[t],r.forEach(t,(function(t){r.isDate(t)?t=t.toISOString():r.isObject(t)&&(t=JSON.stringify(t)),a.push(o(e)+"="+o(t))})))})),i=a.join("&")}if(i){var s=t.indexOf("#");-1!==s&&(t=t.slice(0,s)),t+=(-1===t.indexOf("?")?"?":"&")+i}return t}},NoME:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("/Tr7"),o=n("JCDJ"),i=n("M34a"),a=n("jIYg");function s(t,e){Object(a.a)(2,arguments);var n=Object(i.a)(t),r=Object(i.a)(e),s=n.getTime()-Object(o.a)(n),u=r.getTime()-Object(o.a)(r);return Math.round((s-u)/864e5)}function u(t,e){var n=t.getFullYear()-e.getFullYear()||t.getMonth()-e.getMonth()||t.getDate()-e.getDate()||t.getHours()-e.getHours()||t.getMinutes()-e.getMinutes()||t.getSeconds()-e.getSeconds()||t.getMilliseconds()-e.getMilliseconds();return n<0?-1:n>0?1:n}function c(t,e){Object(a.a)(2,arguments);var n=Object(r.a)(t),o=Object(r.a)(e),i=u(n,o),c=Math.abs(s(n,o));n.setDate(n.getDate()-i*c);var l=u(n,o)===-i,f=i*(c-l);return 0===f?0:f}},OH9c:function(t,e,n){"use strict";t.exports=function(t,e,n,r,o){return t.config=e,n&&(t.code=n),t.request=r,t.response=o,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},t}},OTTw:function(t,e,n){"use strict";var r=n("xTJ+");t.exports=r.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(t){var r=t;return e&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=o(window.location.href),function(e){var n=r.isString(e)?o(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return!0}},PSD3:function(t,e,n){t.exports=function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function u(t,e,n){return(u=s()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&a(o,n.prototype),o}).apply(null,arguments)}function c(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(t,e,n){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=i(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}var f=function(t){return t.charAt(0).toUpperCase()+t.slice(1)},d=function(t){return Object.keys(t).map((function(e){return t[e]}))},p=function(t){return Array.prototype.slice.call(t)},h=function(e){console.warn("".concat("SweetAlert2:"," ").concat("object"===t(e)?e.join(" "):e))},m=function(t){console.error("".concat("SweetAlert2:"," ").concat(t))},v=[],g=function(t,e){var n;n='"'.concat(t,'" is deprecated and will be removed in the next major release. Please use "').concat(e,'" instead.'),-1===v.indexOf(n)&&(v.push(n),h(n))},w=function(t){return"function"==typeof t?t():t},y=function(t){return t&&"function"==typeof t.toPromise},b=function(t){return y(t)?t.toPromise():Promise.resolve(t)},x=function(t){return t&&Promise.resolve(t)===t},_=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),k=function(e){return e instanceof Element||function(e){return"object"===t(e)&&e.jquery}(e)},O=function(t){var e={};for(var n in t)e[t[n]]="swal2-"+t[n];return e},j=O(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","toast-column","show","hide","close","title","header","content","html-container","actions","confirm","deny","cancel","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),E=O(["success","warning","info","question","error"]),C=function(){return document.body.querySelector(".".concat(j.container))},A=function(t){var e=C();return e?e.querySelector(t):null},T=function(t){return A(".".concat(t))},S=function(){return T(j.popup)},L=function(){var t=S();return p(t.querySelectorAll(".".concat(j.icon)))},P=function(){var t=L().filter((function(t){return dt(t)}));return t.length?t[0]:null},B=function(){return T(j.title)},D=function(){return T(j.content)},M=function(){return T(j.image)},N=function(){return T(j["progress-steps"])},R=function(){return T(j["validation-message"])},I=function(){return A(".".concat(j.actions," .").concat(j.confirm))},z=function(){return A(".".concat(j.actions," .").concat(j.deny))},q=function(){return A(".".concat(j.loader))},F=function(){return A(".".concat(j.actions," .").concat(j.cancel))},U=function(){return T(j.actions)},H=function(){return T(j.header)},W=function(){return T(j.footer)},V=function(){return T(j["timer-progress-bar"])},Y=function(){return T(j.close)},$=function(){var t=p(S().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((function(t,e){return(t=parseInt(t.getAttribute("tabindex")))>(e=parseInt(e.getAttribute("tabindex")))?1:t<e?-1:0})),e=p(S().querySelectorAll('\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n')).filter((function(t){return"-1"!==t.getAttribute("tabindex")}));return function(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}(t.concat(e)).filter((function(t){return dt(t)}))},J=function(){return!Z()&&!document.body.classList.contains(j["no-backdrop"])},Z=function(){return document.body.classList.contains(j["toast-shown"])},K={previousBodyPadding:null},X=function(t,e){if(t.textContent="",e){var n=(new DOMParser).parseFromString(e,"text/html");p(n.querySelector("head").childNodes).forEach((function(e){t.appendChild(e)})),p(n.querySelector("body").childNodes).forEach((function(e){t.appendChild(e)}))}},G=function(t,e){if(!e)return!1;for(var n=e.split(/\s+/),r=0;r<n.length;r++)if(!t.classList.contains(n[r]))return!1;return!0},Q=function(e,n,r){if(function(t,e){p(t.classList).forEach((function(n){-1===d(j).indexOf(n)&&-1===d(E).indexOf(n)&&-1===d(e.showClass).indexOf(n)&&t.classList.remove(n)}))}(e,n),n.customClass&&n.customClass[r]){if("string"!=typeof n.customClass[r]&&!n.customClass[r].forEach)return h("Invalid type of customClass.".concat(r,'! Expected string or iterable object, got "').concat(t(n.customClass[r]),'"'));ot(e,n.customClass[r])}};function tt(t,e){if(!e)return null;switch(e){case"select":case"textarea":case"file":return at(t,j[e]);case"checkbox":return t.querySelector(".".concat(j.checkbox," input"));case"radio":return t.querySelector(".".concat(j.radio," input:checked"))||t.querySelector(".".concat(j.radio," input:first-child"));case"range":return t.querySelector(".".concat(j.range," input"));default:return at(t,j.input)}}var et,nt=function(t){if(t.focus(),"file"!==t.type){var e=t.value;t.value="",t.value=e}},rt=function(t,e,n){t&&e&&("string"==typeof e&&(e=e.split(/\s+/).filter(Boolean)),e.forEach((function(e){t.forEach?t.forEach((function(t){n?t.classList.add(e):t.classList.remove(e)})):n?t.classList.add(e):t.classList.remove(e)})))},ot=function(t,e){rt(t,e,!0)},it=function(t,e){rt(t,e,!1)},at=function(t,e){for(var n=0;n<t.childNodes.length;n++)if(G(t.childNodes[n],e))return t.childNodes[n]},st=function(t,e,n){n==="".concat(parseInt(n))&&(n=parseInt(n)),n||0===parseInt(n)?t.style[e]="number"==typeof n?"".concat(n,"px"):n:t.style.removeProperty(e)},ut=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"flex";t.style.display=e},ct=function(t){t.style.display="none"},lt=function(t,e,n,r){var o=t.querySelector(e);o&&(o.style[n]=r)},ft=function(t,e,n){e?ut(t,n):ct(t)},dt=function(t){return!(!t||!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))},pt=function(t){return!!(t.scrollHeight>t.clientHeight)},ht=function(t){var e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),r=parseFloat(e.getPropertyValue("transition-duration")||"0");return n>0||r>0},mt=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=V();dt(n)&&(e&&(n.style.transition="none",n.style.width="100%"),setTimeout((function(){n.style.transition="width ".concat(t/1e3,"s linear"),n.style.width="0%"}),10))},vt=function(){return"undefined"==typeof window||"undefined"==typeof document},gt='\n <div aria-labelledby="'.concat(j.title,'" aria-describedby="').concat(j.content,'" class="').concat(j.popup,'" tabindex="-1">\n   <div class="').concat(j.header,'">\n     <ul class="').concat(j["progress-steps"],'"></ul>\n     <div class="').concat(j.icon," ").concat(E.error,'"></div>\n     <div class="').concat(j.icon," ").concat(E.question,'"></div>\n     <div class="').concat(j.icon," ").concat(E.warning,'"></div>\n     <div class="').concat(j.icon," ").concat(E.info,'"></div>\n     <div class="').concat(j.icon," ").concat(E.success,'"></div>\n     <img class="').concat(j.image,'" />\n     <h2 class="').concat(j.title,'" id="').concat(j.title,'"></h2>\n     <button type="button" class="').concat(j.close,'"></button>\n   </div>\n   <div class="').concat(j.content,'">\n     <div id="').concat(j.content,'" class="').concat(j["html-container"],'"></div>\n     <input class="').concat(j.input,'" />\n     <input type="file" class="').concat(j.file,'" />\n     <div class="').concat(j.range,'">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="').concat(j.select,'"></select>\n     <div class="').concat(j.radio,'"></div>\n     <label for="').concat(j.checkbox,'" class="').concat(j.checkbox,'">\n       <input type="checkbox" />\n       <span class="').concat(j.label,'"></span>\n     </label>\n     <textarea class="').concat(j.textarea,'"></textarea>\n     <div class="').concat(j["validation-message"],'" id="').concat(j["validation-message"],'"></div>\n   </div>\n   <div class="').concat(j.actions,'">\n     <div class="').concat(j.loader,'"></div>\n     <button type="button" class="').concat(j.confirm,'"></button>\n     <button type="button" class="').concat(j.deny,'"></button>\n     <button type="button" class="').concat(j.cancel,'"></button>\n   </div>\n   <div class="').concat(j.footer,'"></div>\n   <div class="').concat(j["timer-progress-bar-container"],'">\n     <div class="').concat(j["timer-progress-bar"],'"></div>\n   </div>\n </div>\n').replace(/(^|\n)\s*/g,""),wt=function(t){zn.isVisible()&&et!==t.target.value&&zn.resetValidationMessage(),et=t.target.value},yt=function(t){var e,n=!!(e=C())&&(e.parentNode.removeChild(e),it([document.documentElement,document.body],[j["no-backdrop"],j["toast-shown"],j["has-column"]]),!0);if(vt())m("SweetAlert2 requires document to initialize");else{var r=document.createElement("div");r.className=j.container,n&&ot(r,j["no-transition"]),X(r,gt);var o,i,a,s,u,c,l,f,d,p="string"==typeof(o=t.target)?document.querySelector(o):o;p.appendChild(r),function(t){var e=S();e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true")}(t),function(t){"rtl"===window.getComputedStyle(t).direction&&ot(C(),j.rtl)}(p),i=D(),a=at(i,j.input),s=at(i,j.file),u=i.querySelector(".".concat(j.range," input")),c=i.querySelector(".".concat(j.range," output")),l=at(i,j.select),f=i.querySelector(".".concat(j.checkbox," input")),d=at(i,j.textarea),a.oninput=wt,s.onchange=wt,l.onchange=wt,f.onchange=wt,d.oninput=wt,u.oninput=function(t){wt(t),c.value=u.value},u.onchange=function(t){wt(t),u.nextSibling.value=u.value}}},bt=function(e,n){e instanceof HTMLElement?n.appendChild(e):"object"===t(e)?xt(e,n):e&&X(n,e)},xt=function(t,e){t.jquery?_t(e,t):X(e,t.toString())},_t=function(t,e){if(t.textContent="",0 in e)for(var n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},kt=function(){if(vt())return!1;var t=document.createElement("div"),e={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&void 0!==t.style[n])return e[n];return!1}(),Ot=function(t,e){var n=U(),r=q(),o=I(),i=z(),a=F();e.showConfirmButton||e.showDenyButton||e.showCancelButton||ct(n),Q(n,e,"actions"),jt(o,"confirm",e),jt(i,"deny",e),jt(a,"cancel",e),function(t,e,n,r){if(!r.buttonsStyling)return it([t,e,n],j.styled);ot([t,e,n],j.styled),r.confirmButtonColor&&(t.style.backgroundColor=r.confirmButtonColor),r.denyButtonColor&&(e.style.backgroundColor=r.denyButtonColor),r.cancelButtonColor&&(n.style.backgroundColor=r.cancelButtonColor)}(o,i,a,e),e.reverseButtons&&(n.insertBefore(a,r),n.insertBefore(i,r),n.insertBefore(o,r)),X(r,e.loaderHtml),Q(r,e,"loader")};function jt(t,e,n){ft(t,n["show".concat(f(e),"Button")],"inline-block"),X(t,n["".concat(e,"ButtonText")]),t.setAttribute("aria-label",n["".concat(e,"ButtonAriaLabel")]),t.className=j[e],Q(t,n,"".concat(e,"Button")),ot(t,n["".concat(e,"ButtonClass")])}var Et=function(t,e){var n=C();if(n){!function(t,e){"string"==typeof e?t.style.background=e:e||ot([document.documentElement,document.body],j["no-backdrop"])}(n,e.backdrop),!e.backdrop&&e.allowOutsideClick&&h('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),function(t,e){e in j?ot(t,j[e]):(h('The "position" parameter is not valid, defaulting to "center"'),ot(t,j.center))}(n,e.position),function(t,e){if(e&&"string"==typeof e){var n="grow-".concat(e);n in j&&ot(t,j[n])}}(n,e.grow),Q(n,e,"container");var r=document.body.getAttribute("data-swal2-queue-step");r&&(n.setAttribute("data-queue-step",r),document.body.removeAttribute("data-swal2-queue-step"))}},Ct={promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap},At=["input","file","range","select","radio","checkbox","textarea"],Tt=function(t){if(!Mt[t.input])return m('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(t.input,'"'));var e=Dt(t.input),n=Mt[t.input](e,t);ut(n),setTimeout((function(){nt(n)}))},St=function(t,e){var n=tt(D(),t);if(n)for(var r in function(t){for(var e=0;e<t.attributes.length;e++){var n=t.attributes[e].name;-1===["type","value","style"].indexOf(n)&&t.removeAttribute(n)}}(n),e)"range"===t&&"placeholder"===r||n.setAttribute(r,e[r])},Lt=function(t){var e=Dt(t.input);t.customClass&&ot(e,t.customClass.input)},Pt=function(t,e){t.placeholder&&!e.inputPlaceholder||(t.placeholder=e.inputPlaceholder)},Bt=function(t,e,n){if(n.inputLabel){t.id=j.input;var r=document.createElement("label"),o=j["input-label"];r.setAttribute("for",t.id),r.className=o,r.innerText=n.inputLabel,e.insertAdjacentElement("beforebegin",r)}},Dt=function(t){var e=j[t]?j[t]:j.input;return at(D(),e)},Mt={};Mt.text=Mt.email=Mt.password=Mt.number=Mt.tel=Mt.url=function(e,n){return"string"==typeof n.inputValue||"number"==typeof n.inputValue?e.value=n.inputValue:x(n.inputValue)||h('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(t(n.inputValue),'"')),Bt(e,e,n),Pt(e,n),e.type=n.input,e},Mt.file=function(t,e){return Bt(t,t,e),Pt(t,e),t},Mt.range=function(t,e){var n=t.querySelector("input"),r=t.querySelector("output");return n.value=e.inputValue,n.type=e.input,r.value=e.inputValue,Bt(n,t,e),t},Mt.select=function(t,e){if(t.textContent="",e.inputPlaceholder){var n=document.createElement("option");X(n,e.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,t.appendChild(n)}return Bt(t,t,e),t},Mt.radio=function(t){return t.textContent="",t},Mt.checkbox=function(t,e){var n=tt(D(),"checkbox");n.value=1,n.id=j.checkbox,n.checked=Boolean(e.inputValue);var r=t.querySelector("span");return X(r,e.inputPlaceholder),t},Mt.textarea=function(t,e){t.value=e.inputValue,Pt(t,e),Bt(t,t,e);var n=function(t){return parseInt(window.getComputedStyle(t).paddingLeft)+parseInt(window.getComputedStyle(t).paddingRight)};if("MutationObserver"in window){var r=parseInt(window.getComputedStyle(S()).width);new MutationObserver((function(){var e=t.offsetWidth+n(S())+n(D());S().style.width=e>r?"".concat(e,"px"):null})).observe(t,{attributes:!0,attributeFilter:["style"]})}return t};var Nt=function(t,e){var n=D().querySelector("#".concat(j.content));e.html?(bt(e.html,n),ut(n,"block")):e.text?(n.textContent=e.text,ut(n,"block")):ct(n),function(t,e){var n=D(),r=Ct.innerParams.get(t),o=!r||e.input!==r.input;At.forEach((function(t){var r=j[t],i=at(n,r);St(t,e.inputAttributes),i.className=r,o&&ct(i)})),e.input&&(o&&Tt(e),Lt(e))}(t,e),Q(D(),e,"content")},Rt=function(){for(var t=L(),e=0;e<t.length;e++)ct(t[e])},It=function(t,e){Ft(t,e),zt(),Q(t,e,"icon")},zt=function(){for(var t=S(),e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),r=0;r<n.length;r++)n[r].style.backgroundColor=e},qt=function(t,e){t.textContent="",e.iconHtml?X(t,Ut(e.iconHtml)):"success"===e.icon?X(t,'\n      <div class="swal2-success-circular-line-left"></div>\n      <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n      <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n      <div class="swal2-success-circular-line-right"></div>\n    '):"error"===e.icon?X(t,'\n      <span class="swal2-x-mark">\n        <span class="swal2-x-mark-line-left"></span>\n        <span class="swal2-x-mark-line-right"></span>\n      </span>\n    '):X(t,Ut({question:"?",warning:"!",info:"i"}[e.icon]))},Ft=function(t,e){if(e.iconColor){t.style.color=e.iconColor,t.style.borderColor=e.iconColor;for(var n=0,r=[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"];n<r.length;n++)lt(t,r[n],"backgroundColor",e.iconColor);lt(t,".swal2-success-ring","borderColor",e.iconColor)}},Ut=function(t){return'<div class="'.concat(j["icon-content"],'">').concat(t,"</div>")},Ht=[],Wt=function(){return C()&&C().getAttribute("data-queue-step")},Vt=function(t,e){var n=N();if(!e.progressSteps||0===e.progressSteps.length)return ct(n);ut(n),n.textContent="";var r=parseInt(void 0===e.currentProgressStep?Wt():e.currentProgressStep);r>=e.progressSteps.length&&h("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),e.progressSteps.forEach((function(t,o){var i=function(t){var e=document.createElement("li");return ot(e,j["progress-step"]),X(e,t),e}(t);if(n.appendChild(i),o===r&&ot(i,j["active-progress-step"]),o!==e.progressSteps.length-1){var a=function(t){var e=document.createElement("li");return ot(e,j["progress-step-line"]),t.progressStepsDistance&&(e.style.width=t.progressStepsDistance),e}(e);n.appendChild(a)}}))},Yt=function(t,e){var n=H();Q(n,e,"header"),Vt(0,e),function(t,e){var n=Ct.innerParams.get(t);if(n&&e.icon===n.icon&&P())It(P(),e);else if(Rt(),e.icon)if(-1!==Object.keys(E).indexOf(e.icon)){var r=A(".".concat(j.icon,".").concat(E[e.icon]));ut(r),qt(r,e),It(r,e),ot(r,e.showClass.icon)}else m('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(e.icon,'"'))}(t,e),function(t,e){var n=M();if(!e.imageUrl)return ct(n);ut(n,""),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt),st(n,"width",e.imageWidth),st(n,"height",e.imageHeight),n.className=j.image,Q(n,e,"image")}(0,e),function(t,e){var n=B();ft(n,e.title||e.titleText),e.title&&bt(e.title,n),e.titleText&&(n.innerText=e.titleText),Q(n,e,"title")}(0,e),function(t,e){var n=Y();X(n,e.closeButtonHtml),Q(n,e,"closeButton"),ft(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel)}(0,e)},$t=function(t,e){t.className="".concat(j.popup," ").concat(dt(t)?e.showClass.popup:""),e.toast?(ot([document.documentElement,document.body],j["toast-shown"]),ot(t,j.toast)):ot(t,j.modal),Q(t,e,"popup"),"string"==typeof e.customClass&&ot(t,e.customClass),e.icon&&ot(t,j["icon-".concat(e.icon)])},Jt=function(t,e){!function(t,e){var n=S();st(n,"width",e.width),st(n,"padding",e.padding),e.background&&(n.style.background=e.background),$t(n,e)}(0,e),Et(0,e),Yt(t,e),Nt(t,e),Ot(0,e),function(t,e){var n=W();ft(n,e.footer),e.footer&&bt(e.footer,n),Q(n,e,"footer")}(0,e),"function"==typeof e.didRender?e.didRender(S()):"function"==typeof e.onRender&&e.onRender(S())},Zt=function(){return I()&&I().click()},Kt=function(t){var e=S();e||zn.fire(),e=S();var n=U(),r=q();!t&&dt(I())&&(t=I()),ut(n),t&&(ct(t),r.setAttribute("data-button-to-replace",t.className)),r.parentNode.insertBefore(r,t),ot([e,n],j.loading),ut(r),e.setAttribute("data-loading",!0),e.setAttribute("aria-busy",!0),e.focus()},Xt={},Gt=function(){return new Promise((function(t){var e=window.scrollX,n=window.scrollY;Xt.restoreFocusTimeout=setTimeout((function(){Xt.previousActiveElement&&Xt.previousActiveElement.focus?(Xt.previousActiveElement.focus(),Xt.previousActiveElement=null):document.body&&document.body.focus(),t()}),100),void 0!==e&&void 0!==n&&window.scrollTo(e,n)}))},Qt=function(){if(Xt.timeout)return function(){var t=V(),e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";var n=parseInt(window.getComputedStyle(t).width),r=parseInt(e/n*100);t.style.removeProperty("transition"),t.style.width="".concat(r,"%")}(),Xt.timeout.stop()},te=function(){if(Xt.timeout){var t=Xt.timeout.start();return mt(t),t}},ee=!1,ne={},re=function(t){for(var e=t.target;e&&e!==document;e=e.parentNode)for(var n in ne){var r=e.getAttribute(n);if(r)return void ne[n].fire({template:r})}},oe={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,animation:!0,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,onBeforeOpen:void 0,onOpen:void 0,willOpen:void 0,didOpen:void 0,onRender:void 0,didRender:void 0,onClose:void 0,onAfterClose:void 0,willClose:void 0,didClose:void 0,onDestroy:void 0,didDestroy:void 0,scrollbarPadding:!0},ie=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","imageAlt","imageHeight","imageUrl","imageWidth","onAfterClose","onClose","onDestroy","progressSteps","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],ae={animation:'showClass" and "hideClass',onBeforeOpen:"willOpen",onOpen:"didOpen",onRender:"didRender",onClose:"willClose",onAfterClose:"didClose",onDestroy:"didDestroy"},se=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","heightAuto","keydownListenerCapture"],ue=function(t){return Object.prototype.hasOwnProperty.call(oe,t)},ce=function(t){return ae[t]},le=function(t){ue(t)||h('Unknown parameter "'.concat(t,'"'))},fe=function(t){-1!==se.indexOf(t)&&h('The parameter "'.concat(t,'" is incompatible with toasts'))},de=function(t){ce(t)&&g(t,ce(t))},pe=function(t){for(var e in t)le(e),t.toast&&fe(e),de(e)},he=Object.freeze({isValidParameter:ue,isUpdatableParameter:function(t){return-1!==ie.indexOf(t)},isDeprecatedParameter:ce,argsToParams:function(e){var n={};return"object"!==t(e[0])||k(e[0])?["title","html","icon"].forEach((function(r,o){var i=e[o];"string"==typeof i||k(i)?n[r]=i:void 0!==i&&m("Unexpected type of ".concat(r,'! Expected "string" or "Element", got ').concat(t(i)))})):o(n,e[0]),n},isVisible:function(){return dt(S())},clickConfirm:Zt,clickDeny:function(){return z()&&z().click()},clickCancel:function(){return F()&&F().click()},getContainer:C,getPopup:S,getTitle:B,getContent:D,getHtmlContainer:function(){return T(j["html-container"])},getImage:M,getIcon:P,getIcons:L,getInputLabel:function(){return T(j["input-label"])},getCloseButton:Y,getActions:U,getConfirmButton:I,getDenyButton:z,getCancelButton:F,getLoader:q,getHeader:H,getFooter:W,getTimerProgressBar:V,getFocusableElements:$,getValidationMessage:R,isLoading:function(){return S().hasAttribute("data-loading")},fire:function(){for(var t=this,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return u(t,n)},mixin:function(t){return function(n){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(p,n);var u,f,d=(u=p,f=s(),function(){var t,e=i(u);if(f){var n=i(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return c(this,t)});function p(){return e(this,p),d.apply(this,arguments)}return r(p,[{key:"_main",value:function(e,n){return l(i(p.prototype),"_main",this).call(this,e,o({},n,t))}}]),p}(this)},queue:function(t){var e=this;Ht=t;var n=function(t,e){Ht=[],t(e)},r=[];return new Promise((function(t){!function o(i,a){i<Ht.length?(document.body.setAttribute("data-swal2-queue-step",i),e.fire(Ht[i]).then((function(e){void 0!==e.value?(r.push(e.value),o(i+1,a)):n(t,{dismiss:e.dismiss})}))):n(t,{value:r})}(0)}))},getQueueStep:Wt,insertQueueStep:function(t,e){return e&&e<Ht.length?Ht.splice(e,0,t):Ht.push(t)},deleteQueueStep:function(t){void 0!==Ht[t]&&Ht.splice(t,1)},showLoading:Kt,enableLoading:Kt,getTimerLeft:function(){return Xt.timeout&&Xt.timeout.getTimerLeft()},stopTimer:Qt,resumeTimer:te,toggleTimer:function(){var t=Xt.timeout;return t&&(t.running?Qt():te())},increaseTimer:function(t){if(Xt.timeout){var e=Xt.timeout.increase(t);return mt(e,!0),e}},isTimerRunning:function(){return Xt.timeout&&Xt.timeout.isRunning()},bindClickHandler:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"data-swal-template";ne[t]=this,ee||(document.body.addEventListener("click",re),ee=!0)}});function me(){if(Ct.innerParams.get(this)){var t=Ct.domCache.get(this);ct(t.loader);var e=t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"));e.length?ut(e[0],"inline-block"):dt(I())||dt(z())||dt(F())||ct(t.actions),it([t.popup,t.actions],j.loading),t.popup.removeAttribute("aria-busy"),t.popup.removeAttribute("data-loading"),t.confirmButton.disabled=!1,t.denyButton.disabled=!1,t.cancelButton.disabled=!1}}var ve=function(){null===K.previousBodyPadding&&document.body.scrollHeight>window.innerHeight&&(K.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(K.previousBodyPadding+function(){var t=document.createElement("div");t.className=j["scrollbar-measure"],document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e}(),"px"))},ge=function(){navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i)||S().scrollHeight>window.innerHeight-44&&(C().style.paddingBottom="".concat(44,"px"))},we=function(){var t,e=C();e.ontouchstart=function(e){t=ye(e)},e.ontouchmove=function(e){t&&(e.preventDefault(),e.stopPropagation())}},ye=function(t){var e=t.target,n=C();return!(be(t)||xe(t)||e!==n&&(pt(n)||"INPUT"===e.tagName||pt(D())&&D().contains(e)))},be=function(t){return t.touches&&t.touches.length&&"stylus"===t.touches[0].touchType},xe=function(t){return t.touches&&t.touches.length>1},_e=function(){return!!window.MSInputMethodContext&&!!document.documentMode},ke=function(){var t=C(),e=S();t.style.removeProperty("align-items"),e.offsetTop<0&&(t.style.alignItems="flex-start")},Oe={swalPromiseResolve:new WeakMap};function je(t,e,n,r){n?Le(t,r):(Gt().then((function(){return Le(t,r)})),Xt.keydownTarget.removeEventListener("keydown",Xt.keydownHandler,{capture:Xt.keydownListenerCapture}),Xt.keydownHandlerAdded=!1),e.parentNode&&!document.body.getAttribute("data-swal2-queue-step")&&e.parentNode.removeChild(e),J()&&(null!==K.previousBodyPadding&&(document.body.style.paddingRight="".concat(K.previousBodyPadding,"px"),K.previousBodyPadding=null),function(){if(G(document.body,j.iosfix)){var t=parseInt(document.body.style.top,10);it(document.body,j.iosfix),document.body.style.top="",document.body.scrollTop=-1*t}}(),"undefined"!=typeof window&&_e()&&window.removeEventListener("resize",ke),p(document.body.children).forEach((function(t){t.hasAttribute("data-previous-aria-hidden")?(t.setAttribute("aria-hidden",t.getAttribute("data-previous-aria-hidden")),t.removeAttribute("data-previous-aria-hidden")):t.removeAttribute("aria-hidden")}))),it([document.documentElement,document.body],[j.shown,j["height-auto"],j["no-backdrop"],j["toast-shown"],j["toast-column"]])}function Ee(t){var e=S();if(e){t=Ce(t);var n=Ct.innerParams.get(this);if(n&&!G(e,n.hideClass.popup)){var r=Oe.swalPromiseResolve.get(this);it(e,n.showClass.popup),ot(e,n.hideClass.popup);var o=C();it(o,n.showClass.backdrop),ot(o,n.hideClass.backdrop),Ae(this,e,n),r(t)}}}var Ce=function(t){return void 0===t?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:o({isConfirmed:!1,isDenied:!1,isDismissed:!1},t)},Ae=function(t,e,n){var r=C(),o=kt&&ht(e),i=n.onClose,a=n.onAfterClose,s=n.willClose,u=n.didClose;Te(e,s,i),o?Se(t,e,r,u||a):je(t,r,Z(),u||a)},Te=function(t,e,n){null!==e&&"function"==typeof e?e(t):null!==n&&"function"==typeof n&&n(t)},Se=function(t,e,n,r){Xt.swalCloseEventFinishedCallback=je.bind(null,t,n,Z(),r),e.addEventListener(kt,(function(t){t.target===e&&(Xt.swalCloseEventFinishedCallback(),delete Xt.swalCloseEventFinishedCallback)}))},Le=function(t,e){setTimeout((function(){"function"==typeof e&&e(),t._destroy()}))};function Pe(t,e,n){var r=Ct.domCache.get(t);e.forEach((function(t){r[t].disabled=n}))}function Be(t,e){if(!t)return!1;if("radio"===t.type)for(var n=t.parentNode.parentNode.querySelectorAll("input"),r=0;r<n.length;r++)n[r].disabled=e;else t.disabled=e}var De=function(){function t(n,r){e(this,t),this.callback=n,this.remaining=r,this.running=!1,this.start()}return r(t,[{key:"start",value:function(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}},{key:"stop",value:function(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date-this.started),this.remaining}},{key:"increase",value:function(t){var e=this.running;return e&&this.stop(),this.remaining+=t,e&&this.start(),this.remaining}},{key:"getTimerLeft",value:function(){return this.running&&(this.stop(),this.start()),this.remaining}},{key:"isRunning",value:function(){return this.running}}]),t}(),Me={email:function(t,e){return/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address")},url:function(t,e){return/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")}};function Ne(t){!function(t){t.inputValidator||Object.keys(Me).forEach((function(e){t.input===e&&(t.inputValidator=Me[e])}))}(t),t.showLoaderOnConfirm&&!t.preConfirm&&h("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"),t.animation=w(t.animation),function(t){(!t.target||"string"==typeof t.target&&!document.querySelector(t.target)||"string"!=typeof t.target&&!t.target.appendChild)&&(h('Target parameter is not valid, defaulting to "body"'),t.target="body")}(t),"string"==typeof t.title&&(t.title=t.title.split("\n").join("<br />")),yt(t)}var Re,Ie=["swal-title","swal-html","swal-footer"],ze=function(e){var n={};return p(e.querySelectorAll("swal-param")).forEach((function(e){Ye(e,["name","value"]);var r=e.getAttribute("name"),o=e.getAttribute("value");"boolean"==typeof oe[r]&&"false"===o&&(o=!1),"object"===t(oe[r])&&(o=JSON.parse(o)),n[r]=o})),n},qe=function(t){var e={};return p(t.querySelectorAll("swal-button")).forEach((function(t){Ye(t,["type","color","aria-label"]);var n=t.getAttribute("type");e["".concat(n,"ButtonText")]=t.innerHTML,e["show".concat(f(n),"Button")]=!0,t.hasAttribute("color")&&(e["".concat(n,"ButtonColor")]=t.getAttribute("color")),t.hasAttribute("aria-label")&&(e["".concat(n,"ButtonAriaLabel")]=t.getAttribute("aria-label"))})),e},Fe=function(t){var e={},n=t.querySelector("swal-image");return n&&(Ye(n,["src","width","height","alt"]),n.hasAttribute("src")&&(e.imageUrl=n.getAttribute("src")),n.hasAttribute("width")&&(e.imageWidth=n.getAttribute("width")),n.hasAttribute("height")&&(e.imageHeight=n.getAttribute("height")),n.hasAttribute("alt")&&(e.imageAlt=n.getAttribute("alt"))),e},Ue=function(t){var e={},n=t.querySelector("swal-icon");return n&&(Ye(n,["type","color"]),n.hasAttribute("type")&&(e.icon=n.getAttribute("type")),n.hasAttribute("color")&&(e.iconColor=n.getAttribute("color")),e.iconHtml=n.innerHTML),e},He=function(t){var e={},n=t.querySelector("swal-input");n&&(Ye(n,["type","label","placeholder","value"]),e.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(e.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(e.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(e.inputValue=n.getAttribute("value")));var r=t.querySelectorAll("swal-input-option");return r.length&&(e.inputOptions={},p(r).forEach((function(t){Ye(t,["value"]);var n=t.getAttribute("value"),r=t.innerHTML;e.inputOptions[n]=r}))),e},We=function(t,e){var n={};for(var r in e){var o=e[r],i=t.querySelector(o);i&&(Ye(i,[]),n[o.replace(/^swal-/,"")]=i.innerHTML)}return n},Ve=function(t){var e=Ie.concat(["swal-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);p(t.querySelectorAll("*")).forEach((function(t){var n=t.tagName.toLowerCase();-1===e.indexOf(n)&&h("Unrecognized element <".concat(n,">"))}))},Ye=function(t,e){p(t.attributes).forEach((function(n){-1===e.indexOf(n.name)&&h(['Unrecognized attribute "'.concat(n.name,'" on <').concat(t.tagName.toLowerCase(),">."),"".concat(e.length?"Allowed attributes are: ".concat(e.join(", ")):"To set the value, use HTML within the element.")])}))},$e=function(t){var e=C(),n=S();"function"==typeof t.willOpen?t.willOpen(n):"function"==typeof t.onBeforeOpen&&t.onBeforeOpen(n);var r=window.getComputedStyle(document.body).overflowY;Ge(e,n,t),setTimeout((function(){Ke(e,n)}),10),J()&&(Xe(e,t.scrollbarPadding,r),p(document.body.children).forEach((function(t){t===C()||function(t,e){if("function"==typeof t.contains)return t.contains(e)}(t,C())||(t.hasAttribute("aria-hidden")&&t.setAttribute("data-previous-aria-hidden",t.getAttribute("aria-hidden")),t.setAttribute("aria-hidden","true"))}))),Z()||Xt.previousActiveElement||(Xt.previousActiveElement=document.activeElement),Je(n,t),it(e,j["no-transition"])},Je=function(t,e){"function"==typeof e.didOpen?setTimeout((function(){return e.didOpen(t)})):"function"==typeof e.onOpen&&setTimeout((function(){return e.onOpen(t)}))},Ze=function t(e){var n=S();if(e.target===n){var r=C();n.removeEventListener(kt,t),r.style.overflowY="auto"}},Ke=function(t,e){kt&&ht(e)?(t.style.overflowY="hidden",e.addEventListener(kt,Ze)):t.style.overflowY="auto"},Xe=function(t,e,n){!function(){if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1)&&!G(document.body,j.iosfix)){var t=document.body.scrollTop;document.body.style.top="".concat(-1*t,"px"),ot(document.body,j.iosfix),we(),ge()}}(),"undefined"!=typeof window&&_e()&&(ke(),window.addEventListener("resize",ke)),e&&"hidden"!==n&&ve(),setTimeout((function(){t.scrollTop=0}))},Ge=function(t,e,n){ot(t,n.showClass.backdrop),e.style.setProperty("opacity","0","important"),ut(e),setTimeout((function(){ot(e,n.showClass.popup),e.style.removeProperty("opacity")}),10),ot([document.documentElement,document.body],j.shown),n.heightAuto&&n.backdrop&&!n.toast&&ot([document.documentElement,document.body],j["height-auto"])},Qe=function(t){return t.checked?1:0},tn=function(t){return t.checked?t.value:null},en=function(t){return t.files.length?null!==t.getAttribute("multiple")?t.files:t.files[0]:null},nn=function(e,n){var r=D(),o=function(t){return on[n.input](r,an(t),n)};y(n.inputOptions)||x(n.inputOptions)?(Kt(),b(n.inputOptions).then((function(t){e.hideLoading(),o(t)}))):"object"===t(n.inputOptions)?o(n.inputOptions):m("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(t(n.inputOptions)))},rn=function(t,e){var n=t.getInput();ct(n),b(e.inputValue).then((function(r){n.value="number"===e.input?parseFloat(r)||0:"".concat(r),ut(n),n.focus(),t.hideLoading()})).catch((function(e){m("Error in inputValue promise: ".concat(e)),n.value="",ut(n),n.focus(),t.hideLoading()}))},on={select:function(t,e,n){var r=at(t,j.select),o=function(t,e,r){var o=document.createElement("option");o.value=r,X(o,e),o.selected=sn(r,n.inputValue),t.appendChild(o)};e.forEach((function(t){var e=t[0],n=t[1];if(Array.isArray(n)){var i=document.createElement("optgroup");i.label=e,i.disabled=!1,r.appendChild(i),n.forEach((function(t){return o(i,t[1],t[0])}))}else o(r,n,e)})),r.focus()},radio:function(t,e,n){var r=at(t,j.radio);e.forEach((function(t){var e=t[0],o=t[1],i=document.createElement("input"),a=document.createElement("label");i.type="radio",i.name=j.radio,i.value=e,sn(e,n.inputValue)&&(i.checked=!0);var s=document.createElement("span");X(s,o),s.className=j.label,a.appendChild(i),a.appendChild(s),r.appendChild(a)}));var o=r.querySelectorAll("input");o.length&&o[0].focus()}},an=function e(n){var r=[];return"undefined"!=typeof Map&&n instanceof Map?n.forEach((function(n,o){var i=n;"object"===t(i)&&(i=e(i)),r.push([o,i])})):Object.keys(n).forEach((function(o){var i=n[o];"object"===t(i)&&(i=e(i)),r.push([o,i])})),r},sn=function(t,e){return e&&e.toString()===t.toString()},un=function(t,e,n){var r=function(t,e){var n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return Qe(n);case"radio":return tn(n);case"file":return en(n);default:return e.inputAutoTrim?n.value.trim():n.value}}(t,e);e.inputValidator?cn(t,e,r):t.getInput().checkValidity()?"deny"===n?ln(t,e,r):dn(t,e,r):(t.enableButtons(),t.showValidationMessage(e.validationMessage))},cn=function(t,e,n){t.disableInput(),Promise.resolve().then((function(){return b(e.inputValidator(n,e.validationMessage))})).then((function(r){t.enableButtons(),t.enableInput(),r?t.showValidationMessage(r):dn(t,e,n)}))},ln=function(t,e,n){e.preDeny?Promise.resolve().then((function(){return b(e.preDeny(n,e.validationMessage))})).then((function(e){!1===e?t.hideLoading():t.closePopup({isDenied:!0,value:void 0===e?n:e})})):t.closePopup({isDenied:!0,value:n})},fn=function(t,e){t.closePopup({isConfirmed:!0,value:e})},dn=function(t,e,n){e.showLoaderOnConfirm&&Kt(),e.preConfirm?(t.resetValidationMessage(),Promise.resolve().then((function(){return b(e.preConfirm(n,e.validationMessage))})).then((function(e){dt(R())||!1===e?t.hideLoading():fn(t,void 0===e?n:e)}))):fn(t,n)},pn=function(t,e,n){var r=$();if(r.length)return(e+=n)===r.length?e=0:-1===e&&(e=r.length-1),r[e].focus();S().focus()},hn=["ArrowRight","ArrowDown","Right","Down"],mn=["ArrowLeft","ArrowUp","Left","Up"],vn=["Escape","Esc"],gn=function(t,e,n){var r=Ct.innerParams.get(t);r.stopKeydownPropagation&&e.stopPropagation(),"Enter"===e.key?wn(t,e,r):"Tab"===e.key?yn(e,r):-1!==[].concat(hn,mn).indexOf(e.key)?bn(e.key):-1!==vn.indexOf(e.key)&&xn(e,r,n)},wn=function(t,e,n){if(!e.isComposing&&e.target&&t.getInput()&&e.target.outerHTML===t.getInput().outerHTML){if(-1!==["textarea","file"].indexOf(n.input))return;Zt(),e.preventDefault()}},yn=function(t,e){for(var n=t.target,r=$(),o=-1,i=0;i<r.length;i++)if(n===r[i]){o=i;break}t.shiftKey?pn(0,o,-1):pn(0,o,1),t.stopPropagation(),t.preventDefault()},bn=function(t){if(-1!==[I(),z(),F()].indexOf(document.activeElement)){var e=-1!==hn.indexOf(t)?"nextElementSibling":"previousElementSibling",n=document.activeElement[e];n&&n.focus()}},xn=function(t,e,n){w(e.allowEscapeKey)&&(t.preventDefault(),n(_.esc))},_n=function(t,e,n){e.popup.onclick=function(){var e=Ct.innerParams.get(t);e.showConfirmButton||e.showDenyButton||e.showCancelButton||e.showCloseButton||e.timer||e.input||n(_.close)}},kn=!1,On=function(t){t.popup.onmousedown=function(){t.container.onmouseup=function(e){t.container.onmouseup=void 0,e.target===t.container&&(kn=!0)}}},jn=function(t){t.container.onmousedown=function(){t.popup.onmouseup=function(e){t.popup.onmouseup=void 0,(e.target===t.popup||t.popup.contains(e.target))&&(kn=!0)}}},En=function(t,e,n){e.container.onclick=function(r){var o=Ct.innerParams.get(t);kn?kn=!1:r.target===e.container&&w(o.allowOutsideClick)&&n(_.backdrop)}},Cn=function(t,e){var n=function(t){var e="string"==typeof t.template?document.querySelector(t.template):t.template;if(!e)return{};var n=e.content||e;return Ve(n),o(ze(n),qe(n),Fe(n),Ue(n),He(n),We(n,Ie))}(t),r=o({},oe.showClass,e.showClass,n.showClass,t.showClass),i=o({},oe.hideClass,e.hideClass,n.hideClass,t.hideClass),a=o({},oe,e,n,t);return a.showClass=r,a.hideClass=i,!1===t.animation&&(a.showClass={popup:"swal2-noanimation",backdrop:"swal2-noanimation"},a.hideClass={}),a},An=function(t,e,n){return new Promise((function(r){var o=function(e){t.closePopup({isDismissed:!0,dismiss:e})};Oe.swalPromiseResolve.set(t,r),e.confirmButton.onclick=function(){return function(t,e){t.disableButtons(),e.input?un(t,e,"confirm"):dn(t,e,!0)}(t,n)},e.denyButton.onclick=function(){return function(t,e){t.disableButtons(),e.returnInputValueOnDeny?un(t,e,"deny"):ln(t,e,!1)}(t,n)},e.cancelButton.onclick=function(){return function(t,e){t.disableButtons(),e(_.cancel)}(t,o)},e.closeButton.onclick=function(){return o(_.close)},function(t,e,n){Ct.innerParams.get(t).toast?_n(t,e,n):(On(e),jn(e),En(t,e,n))}(t,e,o),function(t,e,n,r){e.keydownTarget&&e.keydownHandlerAdded&&(e.keydownTarget.removeEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!1),n.toast||(e.keydownHandler=function(e){return gn(t,e,r)},e.keydownTarget=n.keydownListenerCapture?window:S(),e.keydownListenerCapture=n.keydownListenerCapture,e.keydownTarget.addEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!0)}(t,Xt,n,o),n.toast&&(n.input||n.footer||n.showCloseButton)?ot(document.body,j["toast-column"]):it(document.body,j["toast-column"]),function(t,e){"select"===e.input||"radio"===e.input?nn(t,e):-1!==["text","email","number","tel","textarea"].indexOf(e.input)&&(y(e.inputValue)||x(e.inputValue))&&rn(t,e)}(t,n),$e(n),Sn(Xt,n,o),Ln(e,n),setTimeout((function(){e.container.scrollTop=0}))}))},Tn=function(t){var e={popup:S(),container:C(),content:D(),actions:U(),confirmButton:I(),denyButton:z(),cancelButton:F(),loader:q(),closeButton:Y(),validationMessage:R(),progressSteps:N()};return Ct.domCache.set(t,e),e},Sn=function(t,e,n){var r=V();ct(r),e.timer&&(t.timeout=new De((function(){n("timer"),delete t.timeout}),e.timer),e.timerProgressBar&&(ut(r),setTimeout((function(){t.timeout.running&&mt(e.timer)}))))},Ln=function(t,e){if(!e.toast)return w(e.allowEnterKey)?void(Pn(t,e)||pn(0,-1,1)):Bn()},Pn=function(t,e){return e.focusDeny&&dt(t.denyButton)?(t.denyButton.focus(),!0):e.focusCancel&&dt(t.cancelButton)?(t.cancelButton.focus(),!0):!(!e.focusConfirm||!dt(t.confirmButton)||(t.confirmButton.focus(),0))},Bn=function(){document.activeElement&&"function"==typeof document.activeElement.blur&&document.activeElement.blur()},Dn=function(t){"function"==typeof t.didDestroy?t.didDestroy():"function"==typeof t.onDestroy&&t.onDestroy()},Mn=function(t){delete t.params,delete Xt.keydownHandler,delete Xt.keydownTarget,Nn(Ct),Nn(Oe)},Nn=function(t){for(var e in t)t[e]=new WeakMap},Rn=Object.freeze({hideLoading:me,disableLoading:me,getInput:function(t){var e=Ct.innerParams.get(t||this),n=Ct.domCache.get(t||this);return n?tt(n.content,e.input):null},close:Ee,closePopup:Ee,closeModal:Ee,closeToast:Ee,enableButtons:function(){Pe(this,["confirmButton","denyButton","cancelButton"],!1)},disableButtons:function(){Pe(this,["confirmButton","denyButton","cancelButton"],!0)},enableInput:function(){return Be(this.getInput(),!1)},disableInput:function(){return Be(this.getInput(),!0)},showValidationMessage:function(t){var e=Ct.domCache.get(this),n=Ct.innerParams.get(this);X(e.validationMessage,t),e.validationMessage.className=j["validation-message"],n.customClass&&n.customClass.validationMessage&&ot(e.validationMessage,n.customClass.validationMessage),ut(e.validationMessage);var r=this.getInput();r&&(r.setAttribute("aria-invalid",!0),r.setAttribute("aria-describedBy",j["validation-message"]),nt(r),ot(r,j.inputerror))},resetValidationMessage:function(){var t=Ct.domCache.get(this);t.validationMessage&&ct(t.validationMessage);var e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedBy"),it(e,j.inputerror))},getProgressSteps:function(){return Ct.domCache.get(this).progressSteps},_main:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};pe(o({},e,t)),Xt.currentInstance&&Xt.currentInstance._destroy(),Xt.currentInstance=this;var n=Cn(t,e);Ne(n),Object.freeze(n),Xt.timeout&&(Xt.timeout.stop(),delete Xt.timeout),clearTimeout(Xt.restoreFocusTimeout);var r=Tn(this);return Jt(this,n),Ct.innerParams.set(this,n),An(this,r,n)},update:function(t){var e=S(),n=Ct.innerParams.get(this);if(!e||G(e,n.hideClass.popup))return h("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");var r={};Object.keys(t).forEach((function(e){zn.isUpdatableParameter(e)?r[e]=t[e]:h('Invalid parameter to update: "'.concat(e,'". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md'))}));var i=o({},n,r);Jt(this,i),Ct.innerParams.set(this,i),Object.defineProperties(this,{params:{value:o({},this.params,t),writable:!1,enumerable:!0}})},_destroy:function(){var t=Ct.domCache.get(this),e=Ct.innerParams.get(this);e&&(t.popup&&Xt.swalCloseEventFinishedCallback&&(Xt.swalCloseEventFinishedCallback(),delete Xt.swalCloseEventFinishedCallback),Xt.deferDisposalTimer&&(clearTimeout(Xt.deferDisposalTimer),delete Xt.deferDisposalTimer),Dn(e),Mn(this))}}),In=function(){function t(){if(e(this,t),"undefined"!=typeof window){"undefined"==typeof Promise&&m("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)"),Re=this;for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];var i=Object.freeze(this.constructor.argsToParams(r));Object.defineProperties(this,{params:{value:i,writable:!1,enumerable:!0,configurable:!0}});var a=this._main(this.params);Ct.promise.set(this,a)}}return r(t,[{key:"then",value:function(t){return Ct.promise.get(this).then(t)}},{key:"finally",value:function(t){return Ct.promise.get(this).finally(t)}}]),t}();o(In.prototype,Rn),o(In,he),Object.keys(Rn).forEach((function(t){In[t]=function(){var e;if(Re)return(e=Re)[t].apply(e,arguments)}})),In.DismissReason=_,In.version="10.12.6";var zn=In;return zn.default=zn,zn}(),void 0!==this&&this.Sweetalert2&&(this.swal=this.sweetAlert=this.Swal=this.SweetAlert=this.Sweetalert2),"undefined"!=typeof document&&function(t,e){var n=t.createElement("style");if(t.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=e);else try{n.innerHTML=e}catch(t){n.innerText=e}}(document,'.swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;overflow-y:hidden;background:#fff;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{flex-direction:row;padding:0}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:static;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;padding:0;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{flex-basis:auto!important;width:auto;height:auto;margin:0 .3125em;padding:0}.swal2-popup.swal2-toast .swal2-styled{margin:.125em .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(100,150,200,.5)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-no-transition{transition:none!important}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-popup{display:none;position:relative;box-sizing:border-box;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border:none;border-radius:5px;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:flex;flex-direction:column;align-items:center;padding:0 1.8em}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;margin:1.25em auto 0;padding:0 1.6em}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#2778c4;color:#fff;font-size:1.0625em}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#d14529;color:#fff;font-size:1.0625em}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#757575;color:#fff;font-size:1.0625em}.swal2-styled:focus{outline:0;box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;height:.25em;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;z-index:2;top:0;right:0;align-items:center;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;transition:color .1s ease-out;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-content{z-index:1;justify-content:center;margin:0;padding:0 1.6em;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em auto}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em auto;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto}.swal2-validation-message{display:none;align-items:center;justify-content:center;margin:0 -2.7em;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent!important}body.swal2-no-backdrop .swal2-container>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-container.swal2-top{top:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-top-left,body.swal2-no-backdrop .swal2-container.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-top-end,body.swal2-no-backdrop .swal2-container.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-container.swal2-center{top:50%;left:50%;transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-left,body.swal2-no-backdrop .swal2-container.swal2-center-start{top:50%;left:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-end,body.swal2-no-backdrop .swal2-container.swal2-center-right{top:50%;right:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom{bottom:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom-left,body.swal2-no-backdrop .swal2-container.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-bottom-end,body.swal2-no-backdrop .swal2-container.swal2-bottom-right{right:0;bottom:0}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}')},PbPh:function(t,e,n){"use strict";n.d(e,"f",(function(){return a})),n.d(e,"g",(function(){return s})),n.d(e,"a",(function(){return u})),n.d(e,"e",(function(){return c})),n.d(e,"d",(function(){return l})),n.d(e,"b",(function(){return f})),n.d(e,"c",(function(){return d}));var r=n("a1gY"),o=n.n(r),i=n("U7bs");var a=function(t,e){var n=t.closest(".controls-wrapper");e.map((function(t,e){if(0===e){n.classList.add("error"),n.querySelector("cite")&&n.querySelector("cite").remove();var r=document.createElement("cite");r.innerHTML=t,n.appendChild(r)}}))},s=function(t,e){var n,r,s,u=t.getAttribute("name");if(u){if(u.startsWith("data_")){var c=u.split("_")[1];u=u.replace("data_".concat(c,"_"),"")}var l=t.value,f=t.closest(".controls-wrapper");f.classList.remove("error"),Object(i.b)("cite",f).forEach((function(t){return t.remove()}));var d=o()((s=l,(r=u)in(n={})?Object.defineProperty(n,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[r]=s,n),e);d&&d[u]&&a(t,d[u])}},u=function(t){for(var e=t.getElementsByTagName("cite"),n=0,r=e.length;n!==r;++n)e[0].parentNode.removeChild(e[0]);t.querySelectorAll(".controls-wrapper").forEach((function(t){t.classList.remove("error")}))},c=function(t,e){Object.keys(e).map((function(n){var r=t.querySelector("[name=".concat(n,"]"));a(r,e[n])})),Object(i.k)(Object(i.a)(".controls-wrapper.error"))},l=function(t){Object(i.a)(".date-input cite").innerHTML=t,Object(i.b)(".date-input .controls-wrapper").forEach((function(t){t.classList.add("error")}))},f=function(t){Object(i.a)(".bmi-input cite.bmi_error").innerHTML=t,Object(i.b)(".bmi-input .controls-wrapper").forEach((function(t){t.classList.add("error")})),Object(i.k)(Object(i.a)(".controls-wrapper.error"))},d=function(t,e){Object(i.a)(".bmi-input cite."+e).innerHTML=t,Object(i.b)(".bmi-input .controls-wrapper").forEach((function(t){t.classList.add("error")})),Object(i.k)(Object(i.a)(".controls-wrapper.error"))}},"Rn+g":function(t,e,n){"use strict";var r=n("LYNF");t.exports=function(t,e,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?e(r("Request failed with status code "+n.status,n.config,null,n.request,n)):t(n)}},SntB:function(t,e,n){"use strict";var r=n("xTJ+");t.exports=function(t,e){e=e||{};var n={},o=["url","method","data"],i=["headers","auth","proxy","params"],a=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],s=["validateStatus"];function u(t,e){return r.isPlainObject(t)&&r.isPlainObject(e)?r.merge(t,e):r.isPlainObject(e)?r.merge({},e):r.isArray(e)?e.slice():e}function c(o){r.isUndefined(e[o])?r.isUndefined(t[o])||(n[o]=u(void 0,t[o])):n[o]=u(t[o],e[o])}r.forEach(o,(function(t){r.isUndefined(e[t])||(n[t]=u(void 0,e[t]))})),r.forEach(i,c),r.forEach(a,(function(o){r.isUndefined(e[o])?r.isUndefined(t[o])||(n[o]=u(void 0,t[o])):n[o]=u(void 0,e[o])})),r.forEach(s,(function(r){r in e?n[r]=u(t[r],e[r]):r in t&&(n[r]=u(void 0,t[r]))}));var l=o.concat(i).concat(a).concat(s),f=Object.keys(t).concat(Object.keys(e)).filter((function(t){return-1===l.indexOf(t)}));return r.forEach(f,c),n}},U7bs:function(t,e,n){"use strict";n.d(e,"a",(function(){return w})),n.d(e,"b",(function(){return y})),n.d(e,"d",(function(){return b})),n.d(e,"j",(function(){return x})),n.d(e,"c",(function(){return _})),n.d(e,"e",(function(){return k})),n.d(e,"f",(function(){return O})),n.d(e,"i",(function(){return j})),n.d(e,"h",(function(){return E})),n.d(e,"g",(function(){return C})),n.d(e,"k",(function(){return A}));var r=n("o0o1"),o=n.n(r),i=n("4+6U"),a=n("/Tr7"),s=n("jIYg");function u(t,e){Object(s.a)(2,arguments);var n=Object(a.a)(t),r=Object(a.a)(e);return n.getFullYear()-r.getFullYear()}var c=n("JhOC");var l=n("zbbA");function f(t,e){Object(s.a)(2,arguments);var n=Object(a.a)(t),r=Object(a.a)(e),o=n.getFullYear()-r.getFullYear(),i=n.getMonth()-r.getMonth();return 12*o+i}var d=n("dLU1"),p=n("NoME");function h(t,e,n,r,o,i,a){try{var s=t[i](a),u=s.value}catch(t){return void n(t)}s.done?e(u):Promise.resolve(u).then(r,o)}function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){g(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var w=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(e||document).querySelector(t)},y=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(e||document).querySelectorAll(t)},b=w("main").getAttribute("data-package"),x=w("html").getAttribute("lang"),_=function(t){var e=new Date,n={year:0,month:0,day:0},r=Object(i.a)(t),o=function(t,e){Object(s.a)(2,arguments);var n=Object(a.a)(t),r=Object(a.a)(e),o=Object(c.a)(n,r),i=Math.abs(u(n,r));n.setFullYear("1584"),r.setFullYear("1584");var l=Object(c.a)(n,r)===-o,f=o*(i-l);return 0===f?0:f}(e,r);o>0&&(n=v(v({},n),{},{year:o}),r=Object(l.a)(r,o));var h=function(t,e){Object(s.a)(2,arguments);var n=Object(a.a)(t),r=Object(a.a)(e),o=Object(c.a)(n,r),i=Math.abs(f(n,r));n.setMonth(n.getMonth()-o*i);var u=Object(c.a)(n,r)===-o,l=o*(i-u);return 0===l?0:l}(e,r);h>0&&(n=v(v({},n),{},{month:h}),r=Object(d.a)(r,h));var m=Object(p.a)(e,r);return m>0&&(n=v(v({},n),{},{day:m})),n},k=function(t,e){if(t)if(t.style.opacity=0,t.style.filter="alpha(opacity=0)",t.style.display="block",t.style.visibility="visible",e)var n=0,r=setInterval((function(){(n+=50/e)>=1&&(clearInterval(r),n=1),t.style.opacity=n,t.style.filter="alpha(opacity="+100*n+")"}),50);else t.style.opacity=1,t.style.filter="alpha(opacity=1)"},O=function(t,e){if(t)if(e)var n=1,r=setInterval((function(){(n-=50/e)<=0&&(clearInterval(r),n=0,t.style.display="none",t.style.visibility="hidden"),t.style.opacity=n,t.style.filter="alpha(opacity="+100*n+")"}),50);else t.style.opacity=0,t.style.filter="alpha(opacity=0)",t.style.display="none",t.style.visibility="hidden"},j=function(){var t,e=(t=o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/storage/json/zipcode.json");case 2:return e=t.sent,t.next=5,e.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){h(i,r,o,a,s,"next",t)}function s(t){h(i,r,o,a,s,"throw",t)}a(void 0)}))});return function(){return e.apply(this,arguments)}}(),E=function(t){for(var e=document.getElementsByName(t),n=0,r=e.length;n<r;n++)if(e[n].checked)return e[n].value},C=function(t){var e=y('input[name="'+t+'"]:checked'),n=[];return e.forEach((function(t){n.push(t.value)})),n},A=function(t){if(t){var e=document.body.getBoundingClientRect().top,n=t.getBoundingClientRect().top-e-80;window.scrollTo({top:n,behavior:"smooth"})}}},UnBK:function(t,e,n){"use strict";var r=n("xTJ+"),o=n("xAGQ"),i=n("Lmem"),a=n("JEQr");function s(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){return s(t),t.headers=t.headers||{},t.data=o(t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]})),(t.adapter||a.adapter)(t).then((function(e){return s(t),e.data=o(e.data,e.headers,t.transformResponse),e}),(function(e){return i(e)||(s(t),e&&e.response&&(e.response.data=o(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)}))}},XwJu:function(t,e,n){"use strict";t.exports=function(t){return"object"==typeof t&&!0===t.isAxiosError}},YuTi:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},a1gY:function(t,e,n){(function(t){
/*!
 * validate.js 0.13.1
 *
 * (c) 2013-2019 Nicklas Ansman, 2013 Wrapp
 * Validate.js may be freely distributed under the MIT license.
 * For all details and documentation:
 * http://validatejs.org/
 */
(function(t,e,r){"use strict";var o=function(t,e,n){n=i.extend({},i.options,n);var r=i.runValidations(t,e,n);if(r.some((function(t){return i.isPromise(t.error)})))throw new Error("Use validate.async if you want support for promises");return o.processValidationResults(r,n)},i=o;i.extend=function(t){return[].slice.call(arguments,1).forEach((function(e){for(var n in e)t[n]=e[n]})),t},i.extend(o,{version:{major:0,minor:13,patch:1,metadata:null,toString:function(){var t=i.format("%{major}.%{minor}.%{patch}",i.version);return i.isEmpty(i.version.metadata)||(t+="+"+i.version.metadata),t}},Promise:"undefined"!=typeof Promise?Promise:null,EMPTY_STRING_REGEXP:/^\s*$/,runValidations:function(t,e,n){var r,o,a,s,u,c,l,f=[];for(r in(i.isDomElement(t)||i.isJqueryElement(t))&&(t=i.collectFormValues(t)),e)for(o in a=i.getDeepObjectValue(t,r),s=i.result(e[r],a,t,r,n,e)){if(!(u=i.validators[o]))throw l=i.format("Unknown validator %{name}",{name:o}),new Error(l);c=s[o],(c=i.result(c,a,t,r,n,e))&&f.push({attribute:r,value:a,validator:o,globalOptions:n,attributes:t,options:c,error:u.call(u,a,c,r,t,n)})}return f},processValidationResults:function(t,e){t=i.pruneEmptyErrors(t,e),t=i.expandMultipleErrors(t,e),t=i.convertErrorMessages(t,e);var n=e.format||"grouped";if("function"!=typeof i.formatters[n])throw new Error(i.format("Unknown format %{format}",e));return t=i.formatters[n](t),i.isEmpty(t)?void 0:t},async:function(t,e,n){var r=(n=i.extend({},i.async.options,n)).wrapErrors||function(t){return t};!1!==n.cleanAttributes&&(t=i.cleanAttributes(t,e));var o=i.runValidations(t,e,n);return new i.Promise((function(a,s){i.waitForResults(o).then((function(){var u=i.processValidationResults(o,n);u?s(new r(u,n,t,e)):a(t)}),(function(t){s(t)}))}))},single:function(t,e,n){return n=i.extend({},i.single.options,n,{format:"flat",fullMessages:!1}),i({single:t},{single:e},n)},waitForResults:function(t){return t.reduce((function(t,e){return i.isPromise(e.error)?t.then((function(){return e.error.then((function(t){e.error=t||null}))})):t}),new i.Promise((function(t){t()})))},result:function(t){var e=[].slice.call(arguments,1);return"function"==typeof t&&(t=t.apply(null,e)),t},isNumber:function(t){return"number"==typeof t&&!isNaN(t)},isFunction:function(t){return"function"==typeof t},isInteger:function(t){return i.isNumber(t)&&t%1==0},isBoolean:function(t){return"boolean"==typeof t},isObject:function(t){return t===Object(t)},isDate:function(t){return t instanceof Date},isDefined:function(t){return null!=t},isPromise:function(t){return!!t&&i.isFunction(t.then)},isJqueryElement:function(t){return t&&i.isString(t.jquery)},isDomElement:function(t){return!!t&&(!(!t.querySelectorAll||!t.querySelector)&&(!(!i.isObject(document)||t!==document)||("object"==typeof HTMLElement?t instanceof HTMLElement:t&&"object"==typeof t&&null!==t&&1===t.nodeType&&"string"==typeof t.nodeName)))},isEmpty:function(t){var e;if(!i.isDefined(t))return!0;if(i.isFunction(t))return!1;if(i.isString(t))return i.EMPTY_STRING_REGEXP.test(t);if(i.isArray(t))return 0===t.length;if(i.isDate(t))return!1;if(i.isObject(t)){for(e in t)return!1;return!0}return!1},format:i.extend((function(t,e){return i.isString(t)?t.replace(i.format.FORMAT_REGEXP,(function(t,n,r){return"%"===n?"%{"+r+"}":String(e[r])})):t}),{FORMAT_REGEXP:/(%?)%\{([^\}]+)\}/g}),prettify:function(t){return i.isNumber(t)?100*t%1==0?""+t:parseFloat(Math.round(100*t)/100).toFixed(2):i.isArray(t)?t.map((function(t){return i.prettify(t)})).join(", "):i.isObject(t)?i.isDefined(t.toString)?t.toString():JSON.stringify(t):(t=""+t).replace(/([^\s])\.([^\s])/g,"$1 $2").replace(/\\+/g,"").replace(/[_-]/g," ").replace(/([a-z])([A-Z])/g,(function(t,e,n){return e+" "+n.toLowerCase()})).toLowerCase()},stringifyValue:function(t,e){return(e&&e.prettify||i.prettify)(t)},isString:function(t){return"string"==typeof t},isArray:function(t){return"[object Array]"==={}.toString.call(t)},isHash:function(t){return i.isObject(t)&&!i.isArray(t)&&!i.isFunction(t)},contains:function(t,e){return!!i.isDefined(t)&&(i.isArray(t)?-1!==t.indexOf(e):e in t)},unique:function(t){return i.isArray(t)?t.filter((function(t,e,n){return n.indexOf(t)==e})):t},forEachKeyInKeypath:function(t,e,n){if(i.isString(e)){var r,o="",a=!1;for(r=0;r<e.length;++r)switch(e[r]){case".":a?(a=!1,o+="."):(t=n(t,o,!1),o="");break;case"\\":a?(a=!1,o+="\\"):a=!0;break;default:a=!1,o+=e[r]}return n(t,o,!0)}},getDeepObjectValue:function(t,e){if(i.isObject(t))return i.forEachKeyInKeypath(t,e,(function(t,e){if(i.isObject(t))return t[e]}))},collectFormValues:function(t,e){var n,r,o,a,s,u,c={};if(i.isJqueryElement(t)&&(t=t[0]),!t)return c;for(e=e||{},a=t.querySelectorAll("input[name], textarea[name]"),n=0;n<a.length;++n)if(o=a.item(n),!i.isDefined(o.getAttribute("data-ignored"))){var l=o.name.replace(/\./g,"\\\\.");u=i.sanitizeFormValue(o.value,e),"number"===o.type?u=u?+u:null:"checkbox"===o.type?o.attributes.value?o.checked||(u=c[l]||null):u=o.checked:"radio"===o.type&&(o.checked||(u=c[l]||null)),c[l]=u}for(a=t.querySelectorAll("select[name]"),n=0;n<a.length;++n)if(o=a.item(n),!i.isDefined(o.getAttribute("data-ignored"))){if(o.multiple)for(r in u=[],o.options)(s=o.options[r])&&s.selected&&u.push(i.sanitizeFormValue(s.value,e));else{var f=void 0!==o.options[o.selectedIndex]?o.options[o.selectedIndex].value:"";u=i.sanitizeFormValue(f,e)}c[o.name]=u}return c},sanitizeFormValue:function(t,e){return e.trim&&i.isString(t)&&(t=t.trim()),!1!==e.nullify&&""===t?null:t},capitalize:function(t){return i.isString(t)?t[0].toUpperCase()+t.slice(1):t},pruneEmptyErrors:function(t){return t.filter((function(t){return!i.isEmpty(t.error)}))},expandMultipleErrors:function(t){var e=[];return t.forEach((function(t){i.isArray(t.error)?t.error.forEach((function(n){e.push(i.extend({},t,{error:n}))})):e.push(t)})),e},convertErrorMessages:function(t,e){var n=[],r=(e=e||{}).prettify||i.prettify;return t.forEach((function(t){var o=i.result(t.error,t.value,t.attribute,t.options,t.attributes,t.globalOptions);i.isString(o)?("^"===o[0]?o=o.slice(1):!1!==e.fullMessages&&(o=i.capitalize(r(t.attribute))+" "+o),o=o.replace(/\\\^/g,"^"),o=i.format(o,{value:i.stringifyValue(t.value,e)}),n.push(i.extend({},t,{error:o}))):n.push(t)})),n},groupErrorsByAttribute:function(t){var e={};return t.forEach((function(t){var n=e[t.attribute];n?n.push(t):e[t.attribute]=[t]})),e},flattenErrorsToArray:function(t){return t.map((function(t){return t.error})).filter((function(t,e,n){return n.indexOf(t)===e}))},cleanAttributes:function(t,e){function n(t,e,n){return i.isObject(t[e])?t[e]:t[e]=!!n||{}}return i.isObject(e)&&i.isObject(t)?function t(e,n){if(!i.isObject(e))return e;var r,o,a=i.extend({},e);for(o in e)r=n[o],i.isObject(r)?a[o]=t(a[o],r):r||delete a[o];return a}(t,e=function(t){var e,r={};for(e in t)t[e]&&i.forEachKeyInKeypath(r,e,n);return r}(e)):{}},exposeModule:function(t,e,n,r,o){n?(r&&r.exports&&(n=r.exports=t),n.validate=t):(e.validate=t,t.isFunction(o)&&o.amd&&o([],(function(){return t})))},warn:function(t){"undefined"!=typeof console&&console.warn&&console.warn("[validate.js] "+t)},error:function(t){"undefined"!=typeof console&&console.error&&console.error("[validate.js] "+t)}}),o.validators={presence:function(t,e){if(!1!==(e=i.extend({},this.options,e)).allowEmpty?!i.isDefined(t):i.isEmpty(t))return e.message||this.message||"can't be blank"},length:function(t,e,n){if(i.isDefined(t)){var r,o=(e=i.extend({},this.options,e)).is,a=e.maximum,s=e.minimum,u=[],c=(t=(e.tokenizer||function(t){return t})(t)).length;return i.isNumber(c)?(i.isNumber(o)&&c!==o&&(r=e.wrongLength||this.wrongLength||"is the wrong length (should be %{count} characters)",u.push(i.format(r,{count:o}))),i.isNumber(s)&&c<s&&(r=e.tooShort||this.tooShort||"is too short (minimum is %{count} characters)",u.push(i.format(r,{count:s}))),i.isNumber(a)&&c>a&&(r=e.tooLong||this.tooLong||"is too long (maximum is %{count} characters)",u.push(i.format(r,{count:a}))),u.length>0?e.message||u:void 0):e.message||this.notValid||"has an incorrect length"}},numericality:function(t,e,n,r,o){if(i.isDefined(t)){var a,s,u=[],c={greaterThan:function(t,e){return t>e},greaterThanOrEqualTo:function(t,e){return t>=e},equalTo:function(t,e){return t===e},lessThan:function(t,e){return t<e},lessThanOrEqualTo:function(t,e){return t<=e},divisibleBy:function(t,e){return t%e==0}},l=(e=i.extend({},this.options,e)).prettify||o&&o.prettify||i.prettify;if(i.isString(t)&&e.strict){var f="^-?(0|[1-9]\\d*)";if(e.onlyInteger||(f+="(\\.\\d+)?"),f+="$",!new RegExp(f).test(t))return e.message||e.notValid||this.notValid||this.message||"must be a valid number"}if(!0!==e.noStrings&&i.isString(t)&&!i.isEmpty(t)&&(t=+t),!i.isNumber(t))return e.message||e.notValid||this.notValid||this.message||"is not a number";if(e.onlyInteger&&!i.isInteger(t))return e.message||e.notInteger||this.notInteger||this.message||"must be an integer";for(a in c)if(s=e[a],i.isNumber(s)&&!c[a](t,s)){var d="not"+i.capitalize(a),p=e[d]||this[d]||this.message||"must be %{type} %{count}";u.push(i.format(p,{count:s,type:l(a)}))}return e.odd&&t%2!=1&&u.push(e.notOdd||this.notOdd||this.message||"must be odd"),e.even&&t%2!=0&&u.push(e.notEven||this.notEven||this.message||"must be even"),u.length?e.message||u:void 0}},datetime:i.extend((function(t,e){if(!i.isFunction(this.parse)||!i.isFunction(this.format))throw new Error("Both the parse and format functions needs to be set to use the datetime/date validator");if(i.isDefined(t)){var n,r=[],o=(e=i.extend({},this.options,e)).earliest?this.parse(e.earliest,e):NaN,a=e.latest?this.parse(e.latest,e):NaN;return t=this.parse(t,e),isNaN(t)||e.dateOnly&&t%864e5!=0?(n=e.notValid||e.message||this.notValid||"must be a valid date",i.format(n,{value:arguments[0]})):(!isNaN(o)&&t<o&&(n=e.tooEarly||e.message||this.tooEarly||"must be no earlier than %{date}",n=i.format(n,{value:this.format(t,e),date:this.format(o,e)}),r.push(n)),!isNaN(a)&&t>a&&(n=e.tooLate||e.message||this.tooLate||"must be no later than %{date}",n=i.format(n,{date:this.format(a,e),value:this.format(t,e)}),r.push(n)),r.length?i.unique(r):void 0)}}),{parse:null,format:null}),date:function(t,e){return e=i.extend({},e,{dateOnly:!0}),i.validators.datetime.call(i.validators.datetime,t,e)},format:function(t,e){(i.isString(e)||e instanceof RegExp)&&(e={pattern:e});var n,r=(e=i.extend({},this.options,e)).message||this.message||"is invalid",o=e.pattern;if(i.isDefined(t))return i.isString(t)?(i.isString(o)&&(o=new RegExp(e.pattern,e.flags)),(n=o.exec(t))&&n[0].length==t.length?void 0:r):r},inclusion:function(t,e){if(i.isDefined(t)&&(i.isArray(e)&&(e={within:e}),e=i.extend({},this.options,e),!i.contains(e.within,t))){var n=e.message||this.message||"^%{value} is not included in the list";return i.format(n,{value:t})}},exclusion:function(t,e){if(i.isDefined(t)&&(i.isArray(e)&&(e={within:e}),e=i.extend({},this.options,e),i.contains(e.within,t))){var n=e.message||this.message||"^%{value} is restricted";return i.isString(e.within[t])&&(t=e.within[t]),i.format(n,{value:t})}},email:i.extend((function(t,e){var n=(e=i.extend({},this.options,e)).message||this.message||"is not a valid email";if(i.isDefined(t))return i.isString(t)&&this.PATTERN.exec(t)?void 0:n}),{PATTERN:/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i}),equality:function(t,e,n,r,o){if(i.isDefined(t)){i.isString(e)&&(e={attribute:e});var a=(e=i.extend({},this.options,e)).message||this.message||"is not equal to %{attribute}";if(i.isEmpty(e.attribute)||!i.isString(e.attribute))throw new Error("The attribute must be a non empty string");var s=i.getDeepObjectValue(r,e.attribute),u=e.comparator||function(t,e){return t===e},c=e.prettify||o&&o.prettify||i.prettify;return u(t,s,e,n,r)?void 0:i.format(a,{attribute:c(e.attribute)})}},url:function(t,e){if(i.isDefined(t)){var n=(e=i.extend({},this.options,e)).message||this.message||"is not a valid url",r=e.schemes||this.schemes||["http","https"],o=e.allowLocal||this.allowLocal||!1,a=e.allowDataUrl||this.allowDataUrl||!1;if(!i.isString(t))return n;var s="^(?:(?:"+r.join("|")+")://)(?:\\S+(?::\\S*)?@)?(?:",u="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))";if(o?u+="?":s+="(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})",s+="(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*"+u+")(?::\\d{2,5})?(?:[/?#]\\S*)?$",a){s="(?:"+s+")|(?:^data:(?:\\w+\\/[-+.\\w]+(?:;[\\w=]+)*)?(?:;base64)?,[A-Za-z0-9-_.!~\\*'();\\/?:@&=+$,%]*$)"}return new RegExp(s,"i").exec(t)?void 0:n}},type:i.extend((function(t,e,n,r,o){if(i.isString(e)&&(e={type:e}),i.isDefined(t)){var a,s=i.extend({},this.options,e),u=s.type;if(!i.isDefined(u))throw new Error("No type was specified");if(a=i.isFunction(u)?u:this.types[u],!i.isFunction(a))throw new Error("validate.validators.type.types."+u+" must be a function.");if(!a(t,s,n,r,o)){var c=e.message||this.messages[u]||this.message||s.message||(i.isFunction(u)?"must be of the correct type":"must be of type %{type}");return i.isFunction(c)&&(c=c(t,e,n,r,o)),i.format(c,{attribute:i.prettify(n),type:u})}}}),{types:{object:function(t){return i.isObject(t)&&!i.isArray(t)},array:i.isArray,integer:i.isInteger,number:i.isNumber,string:i.isString,date:i.isDate,boolean:i.isBoolean},messages:{}})},o.formatters={detailed:function(t){return t},flat:i.flattenErrorsToArray,grouped:function(t){var e;for(e in t=i.groupErrorsByAttribute(t))t[e]=i.flattenErrorsToArray(t[e]);return t},constraint:function(t){var e;for(e in t=i.groupErrorsByAttribute(t))t[e]=t[e].map((function(t){return t.validator})).sort();return t}},o.exposeModule(o,this,t,e,n("B9Yq"))}).call(this,e,t,n("B9Yq"))}).call(this,n("YuTi")(t))},blUz:function(t,e,n){"use strict";
/*! @license is-dom-node v1.0.4

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/var r=function(t){return"object"==typeof window.Node?t instanceof window.Node:null!==t&&"object"==typeof t&&"number"==typeof t.nodeType&&"string"==typeof t.nodeName};
/*! @license is-dom-node-list v1.2.1

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/var o=function(t){var e=Object.prototype.toString.call(t);return"object"==typeof window.NodeList?t instanceof window.NodeList:null!==t&&"object"==typeof t&&"number"==typeof t.length&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(e)&&(0===t.length||r(t[0]))};
/*! @license Tealight v0.3.6

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/var i=function(t,e){if(void 0===e&&(e=document),t instanceof Array)return t.filter(r);if(r(t))return[t];if(o(t))return Array.prototype.slice.call(t);if("string"==typeof t)try{var n=e.querySelectorAll(t);return Array.prototype.slice.call(n)}catch(t){return[]}return[]};
/*! @license Rematrix v0.3.0

	Copyright 2018 Julian Lloyd.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/function a(t){if(t.constructor!==Array)throw new TypeError("Expected array.");if(16===t.length)return t;if(6===t.length){var e=s();return e[0]=t[0],e[1]=t[1],e[4]=t[2],e[5]=t[3],e[12]=t[4],e[13]=t[5],e}throw new RangeError("Expected array with either 6 or 16 values.")}function s(){for(var t=[],e=0;e<16;e++)e%5==0?t.push(1):t.push(0);return t}function u(t,e){for(var n=a(t),r=a(e),o=[],i=0;i<4;i++)for(var s=[n[i],n[i+4],n[i+8],n[i+12]],u=0;u<4;u++){var c=4*u,l=[r[c],r[c+1],r[c+2],r[c+3]],f=s[0]*l[0]+s[1]*l[1]+s[2]*l[2]+s[3]*l[3];o[i+c]=f}return o}function c(t){if("string"==typeof t){var e=t.match(/matrix(3d)?\(([^)]+)\)/);if(e)return a(e[2].split(", ").map(parseFloat))}return s()}function l(t){var e=Math.PI/180*t,n=s();return n[0]=n[5]=Math.cos(e),n[1]=n[4]=Math.sin(e),n[4]*=-1,n}function f(t,e){var n=s();return n[0]=t,n[5]="number"==typeof e?e:t,n}
/*! @license miniraf v1.0.0

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/
var polyfill = (function () {
	var clock = Date.now();

	return function (callback) {
		var currentTime = Date.now();
		if (currentTime - clock > 16) {
			clock = currentTime;
			callback(currentTime);
		} else {
			setTimeout(function () { return polyfill(callback); }, 0);
		}
	}
})();

var index = window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	polyfill;

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/rematrix/dist/rematrix.es.js":
/*!***************************************************!*\
  !*** ./node_modules/rematrix/dist/rematrix.es.js ***!
  \***************************************************/
/*! exports provided: format, identity, inverse, multiply, parse, rotate, rotateX, rotateY, rotateZ, scale, scaleX, scaleY, scaleZ, skew, skewX, skewY, toString, translate, translateX, translateY, translateZ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotate", function() { return rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateX", function() { return rotateX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateY", function() { return rotateY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateZ", function() { return rotateZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return scale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleX", function() { return scaleX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleY", function() { return scaleY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleZ", function() { return scaleZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skew", function() { return skew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skewX", function() { return skewX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skewY", function() { return skewY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return toString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translate", function() { return translate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateX", function() { return translateX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateY", function() { return translateY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateZ", function() { return translateZ; });
/*! @license Rematrix v0.3.0

	Copyright 2018 Julian Lloyd.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/
/**
 * @module Rematrix
 */

/**
 * Transformation matrices in the browser come in two flavors:
 *
 *  - `matrix` using 6 values (short)
 *  - `matrix3d` using 16 values (long)
 *
 * This utility follows this [conversion guide](https://goo.gl/EJlUQ1)
 * to expand short form matrices to their equivalent long form.
 *
 * @param  {array} source - Accepts both short and long form matrices.
 * @return {array}
 */
function format(source) {
	if (source.constructor !== Array) {
		throw new TypeError('Expected array.')
	}
	if (source.length === 16) {
		return source
	}
	if (source.length === 6) {
		var matrix = identity();
		matrix[0] = source[0];
		matrix[1] = source[1];
		matrix[4] = source[2];
		matrix[5] = source[3];
		matrix[12] = source[4];
		matrix[13] = source[5];
		return matrix
	}
	throw new RangeError('Expected array with either 6 or 16 values.')
}

/**
 * Returns a matrix representing no transformation. The product of any matrix
 * multiplied by the identity matrix will be the original matrix.
 *
 * > **Tip:** Similar to how `5 * 1 === 5`, where `1` is the identity.
 *
 * @return {array}
 */
function identity() {
	var matrix = [];
	for (var i = 0; i < 16; i++) {
		i % 5 == 0 ? matrix.push(1) : matrix.push(0);
	}
	return matrix
}

/**
 * Returns a matrix describing the inverse transformation of the source
 * matrix. The product of any matrix multiplied by its inverse will be the
 * identity matrix.
 *
 * > **Tip:** Similar to how `5 * (1/5) === 1`, where `1/5` is the inverse.
 *
 * @param  {array} source - Accepts both short and long form matrices.
 * @return {array}
 */
function inverse(source) {
	var m = format(source);

	var s0 = m[0] * m[5] - m[4] * m[1];
	var s1 = m[0] * m[6] - m[4] * m[2];
	var s2 = m[0] * m[7] - m[4] * m[3];
	var s3 = m[1] * m[6] - m[5] * m[2];
	var s4 = m[1] * m[7] - m[5] * m[3];
	var s5 = m[2] * m[7] - m[6] * m[3];

	var c5 = m[10] * m[15] - m[14] * m[11];
	var c4 = m[9] * m[15] - m[13] * m[11];
	var c3 = m[9] * m[14] - m[13] * m[10];
	var c2 = m[8] * m[15] - m[12] * m[11];
	var c1 = m[8] * m[14] - m[12] * m[10];
	var c0 = m[8] * m[13] - m[12] * m[9];

	var determinant = 1 / (s0 * c5 - s1 * c4 + s2 * c3 + s3 * c2 - s4 * c1 + s5 * c0);

	if (isNaN(determinant) || determinant === Infinity) {
		throw new Error('Inverse determinant attempted to divide by zero.')
	}

	return [
		(m[5] * c5 - m[6] * c4 + m[7] * c3) * determinant,
		(-m[1] * c5 + m[2] * c4 - m[3] * c3) * determinant,
		(m[13] * s5 - m[14] * s4 + m[15] * s3) * determinant,
		(-m[9] * s5 + m[10] * s4 - m[11] * s3) * determinant,

		(-m[4] * c5 + m[6] * c2 - m[7] * c1) * determinant,
		(m[0] * c5 - m[2] * c2 + m[3] * c1) * determinant,
		(-m[12] * s5 + m[14] * s2 - m[15] * s1) * determinant,
		(m[8] * s5 - m[10] * s2 + m[11] * s1) * determinant,

		(m[4] * c4 - m[5] * c2 + m[7] * c0) * determinant,
		(-m[0] * c4 + m[1] * c2 - m[3] * c0) * determinant,
		(m[12] * s4 - m[13] * s2 + m[15] * s0) * determinant,
		(-m[8] * s4 + m[9] * s2 - m[11] * s0) * determinant,

		(-m[4] * c3 + m[5] * c1 - m[6] * c0) * determinant,
		(m[0] * c3 - m[1] * c1 + m[2] * c0) * determinant,
		(-m[12] * s3 + m[13] * s1 - m[14] * s0) * determinant,
		(m[8] * s3 - m[9] * s1 + m[10] * s0) * determinant
	]
}

/**
 * Returns a 4x4 matrix describing the combined transformations
 * of both arguments.
 *
 * > **Note:** Order is very important. For example, rotating 45°
 * along the Z-axis, followed by translating 500 pixels along the
 * Y-axis... is not the same as translating 500 pixels along the
 * Y-axis, followed by rotating 45° along on the Z-axis.
 *
 * @param  {array} m - Accepts both short and long form matrices.
 * @param  {array} x - Accepts both short and long form matrices.
 * @return {array}
 */
function multiply(m, x) {
	var fm = format(m);
	var fx = format(x);
	var product = [];

	for (var i = 0; i < 4; i++) {
		var row = [fm[i], fm[i + 4], fm[i + 8], fm[i + 12]];
		for (var j = 0; j < 4; j++) {
			var k = j * 4;
			var col = [fx[k], fx[k + 1], fx[k + 2], fx[k + 3]];
			var result =
				row[0] * col[0] + row[1] * col[1] + row[2] * col[2] + row[3] * col[3];

			product[i + k] = result;
		}
	}

	return product
}

/**
 * Attempts to return a 4x4 matrix describing the CSS transform
 * matrix passed in, but will return the identity matrix as a
 * fallback.
 *
 * > **Tip:** This method is used to convert a CSS matrix (retrieved as a
 * `string` from computed styles) to its equivalent array format.
 *
 * @param  {string} source - `matrix` or `matrix3d` CSS Transform value.
 * @return {array}
 */
function parse(source) {
	if (typeof source === 'string') {
		var match = source.match(/matrix(3d)?\(([^)]+)\)/);
		if (match) {
			var raw = match[2].split(', ').map(parseFloat);
			return format(raw)
		}
	}
	return identity()
}

/**
 * Returns a 4x4 matrix describing Z-axis rotation.
 *
 * > **Tip:** This is just an alias for `Rematrix.rotateZ` for parity with CSS
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */
function rotate(angle) {
	return rotateZ(angle)
}

/**
 * Returns a 4x4 matrix describing X-axis rotation.
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */
function rotateX(angle) {
	var theta = Math.PI / 180 * angle;
	var matrix = identity();

	matrix[5] = matrix[10] = Math.cos(theta);
	matrix[6] = matrix[9] = Math.sin(theta);
	matrix[9] *= -1;

	return matrix
}

/**
 * Returns a 4x4 matrix describing Y-axis rotation.
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */
function rotateY(angle) {
	var theta = Math.PI / 180 * angle;
	var matrix = identity();

	matrix[0] = matrix[10] = Math.cos(theta);
	matrix[2] = matrix[8] = Math.sin(theta);
	matrix[2] *= -1;

	return matrix
}

/**
 * Returns a 4x4 matrix describing Z-axis rotation.
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */
function rotateZ(angle) {
	var theta = Math.PI / 180 * angle;
	var matrix = identity();

	matrix[0] = matrix[5] = Math.cos(theta);
	matrix[1] = matrix[4] = Math.sin(theta);
	matrix[4] *= -1;

	return matrix
}

/**
 * Returns a 4x4 matrix describing 2D scaling. The first argument
 * is used for both X and Y-axis scaling, unless an optional
 * second argument is provided to explicitly define Y-axis scaling.
 *
 * @param  {number} scalar    - Decimal multiplier.
 * @param  {number} [scalarY] - Decimal multiplier.
 * @return {array}
 */
function scale(scalar, scalarY) {
	var matrix = identity();

	matrix[0] = scalar;
	matrix[5] = typeof scalarY === 'number' ? scalarY : scalar;

	return matrix
}

/**
 * Returns a 4x4 matrix describing X-axis scaling.
 *
 * @param  {number} scalar - Decimal multiplier.
 * @return {array}
 */
function scaleX(scalar) {
	var matrix = identity();
	matrix[0] = scalar;
	return matrix
}

/**
 * Returns a 4x4 matrix describing Y-axis scaling.
 *
 * @param  {number} scalar - Decimal multiplier.
 * @return {array}
 */
function scaleY(scalar) {
	var matrix = identity();
	matrix[5] = scalar;
	return matrix
}

/**
 * Returns a 4x4 matrix describing Z-axis scaling.
 *
 * @param  {number} scalar - Decimal multiplier.
 * @return {array}
 */
function scaleZ(scalar) {
	var matrix = identity();
	matrix[10] = scalar;
	return matrix
}

/**
 * Returns a 4x4 matrix describing shear. The first argument
 * defines X-axis shearing, and an optional second argument
 * defines Y-axis shearing.
 *
 * @param  {number} angleX   - Measured in degrees.
 * @param  {number} [angleY] - Measured in degrees.
 * @return {array}
 */
function skew(angleX, angleY) {
	var thetaX = Math.PI / 180 * angleX;
	var matrix = identity();

	matrix[4] = Math.tan(thetaX);

	if (angleY) {
		var thetaY = Math.PI / 180 * angleY;
		matrix[1] = Math.tan(thetaY);
	}

	return matrix
}

/**
 * Returns a 4x4 matrix describing X-axis shear.
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */
function skewX(angle) {
	var theta = Math.PI / 180 * angle;
	var matrix = identity();

	matrix[4] = Math.tan(theta);

	return matrix
}

/**
 * Returns a 4x4 matrix describing Y-axis shear.
 *
 * @param  {number} angle - Measured in degrees
 * @return {array}
 */
function skewY(angle) {
	var theta = Math.PI / 180 * angle;
	var matrix = identity();

	matrix[1] = Math.tan(theta);

	return matrix
}

/**
 * Returns a CSS Transform property value equivalent to the source matrix.
 *
 * @param  {array} source - Accepts both short and long form matrices.
 * @return {string}
 */
function toString(source) {
	return ("matrix3d(" + (format(source).join(', ')) + ")")
}

/**
 * Returns a 4x4 matrix describing 2D translation. The first
 * argument defines X-axis translation, and an optional second
 * argument defines Y-axis translation.
 *
 * @param  {number} distanceX   - Measured in pixels.
 * @param  {number} [distanceY] - Measured in pixels.
 * @return {array}
 */
function translate(distanceX, distanceY) {
	var matrix = identity();
	matrix[12] = distanceX;

	if (distanceY) {
		matrix[13] = distanceY;
	}

	return matrix
}

/**
 * Returns a 4x4 matrix describing X-axis translation.
 *
 * @param  {number} distance - Measured in pixels.
 * @return {array}
 */
function translateX(distance) {
	var matrix = identity();
	matrix[12] = distance;
	return matrix
}

/**
 * Returns a 4x4 matrix describing Y-axis translation.
 *
 * @param  {number} distance - Measured in pixels.
 * @return {array}
 */
function translateY(distance) {
	var matrix = identity();
	matrix[13] = distance;
	return matrix
}

/**
 * Returns a 4x4 matrix describing Z-axis translation.
 *
 * @param  {number} distance - Measured in pixels.
 * @return {array}
 */
function translateZ(distance) {
	var matrix = identity();
	matrix[14] = distance;
	return matrix
}




/***/ }),

/***/ "./node_modules/scrollreveal/dist/scrollreveal.es.js":
/*!***********************************************************!*\
  !*** ./node_modules/scrollreveal/dist/scrollreveal.es.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tealight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tealight */ "./node_modules/tealight/dist/tealight.es.js");
/* harmony import */ var rematrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rematrix */ "./node_modules/rematrix/dist/rematrix.es.js");
/* harmony import */ var miniraf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! miniraf */ "./node_modules/miniraf/dist/miniraf.es.js");
/*! @license ScrollReveal v4.0.7

	Copyright 2020 Fisssion LLC.

	Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://scrollrevealjs.org/
*/




var defaults = {
	delay: 0,
	distance: '0',
	duration: 600,
	easing: 'cubic-bezier(0.5, 0, 0, 1)',
	interval: 0,
	opacity: 0,
	origin: 'bottom',
	rotate: {
		x: 0,
		y: 0,
		z: 0
	},
	scale: 1,
	cleanup: false,
	container: document.documentElement,
	desktop: true,
	mobile: true,
	reset: false,
	useDelay: 'always',
	viewFactor: 0.0,
	viewOffset: {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
	},
	afterReset: function afterReset() {},
	afterReveal: function afterReveal() {},
	beforeReset: function beforeReset() {},
	beforeReveal: function beforeReveal() {}
};

function failure() {
	document.documentElement.classList.remove('sr');

	return {
		clean: function clean() {},
		destroy: function destroy() {},
		reveal: function reveal() {},
		sync: function sync() {},
		get noop() {
			return true
		}
	}
}

function success() {
	document.documentElement.classList.add('sr');

	if (document.body) {
		document.body.style.height = '100%';
	} else {
		document.addEventListener('DOMContentLoaded', function () {
			document.body.style.height = '100%';
		});
	}
}

var mount = { success: success, failure: failure };

function isObject(x) {
	return (
		x !== null &&
		x instanceof Object &&
		(x.constructor === Object ||
			Object.prototype.toString.call(x) === '[object Object]')
	)
}

function each(collection, callback) {
	if (isObject(collection)) {
		var keys = Object.keys(collection);
		return keys.forEach(function (key) { return callback(collection[key], key, collection); })
	}
	if (collection instanceof Array) {
		return collection.forEach(function (item, i) { return callback(item, i, collection); })
	}
	throw new TypeError('Expected either an array or object literal.')
}

function logger(message) {
	var details = [], len = arguments.length - 1;
	while ( len-- > 0 ) details[ len ] = arguments[ len + 1 ];

	if (this.constructor.debug && console) {
		var report = "%cScrollReveal: " + message;
		details.forEach(function (detail) { return (report += "\n — " + detail); });
		console.log(report, 'color: #ea654b;'); // eslint-disable-line no-console
	}
}

function rinse() {
	var this$1 = this;

	var struct = function () { return ({
		active: [],
		stale: []
	}); };

	var elementIds = struct();
	var sequenceIds = struct();
	var containerIds = struct();

	/**
	 * Take stock of active element IDs.
	 */
	try {
		each(Object(tealight__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-sr-id]'), function (node) {
			var id = parseInt(node.getAttribute('data-sr-id'));
			elementIds.active.push(id);
		});
	} catch (e) {
		throw e
	}
	/**
	 * Destroy stale elements.
	 */
	each(this.store.elements, function (element) {
		if (elementIds.active.indexOf(element.id) === -1) {
			elementIds.stale.push(element.id);
		}
	});

	each(elementIds.stale, function (staleId) { return delete this$1.store.elements[staleId]; });

	/**
	 * Take stock of active container and sequence IDs.
	 */
	each(this.store.elements, function (element) {
		if (containerIds.active.indexOf(element.containerId) === -1) {
			containerIds.active.push(element.containerId);
		}
		if (element.hasOwnProperty('sequence')) {
			if (sequenceIds.active.indexOf(element.sequence.id) === -1) {
				sequenceIds.active.push(element.sequence.id);
			}
		}
	});

	/**
	 * Destroy stale containers.
	 */
	each(this.store.containers, function (container) {
		if (containerIds.active.indexOf(container.id) === -1) {
			containerIds.stale.push(container.id);
		}
	});

	each(containerIds.stale, function (staleId) {
		var stale = this$1.store.containers[staleId].node;
		stale.removeEventListener('scroll', this$1.delegate);
		stale.removeEventListener('resize', this$1.delegate);
		delete this$1.store.containers[staleId];
	});

	/**
	 * Destroy stale sequences.
	 */
	each(this.store.sequences, function (sequence) {
		if (sequenceIds.active.indexOf(sequence.id) === -1) {
			sequenceIds.stale.push(sequence.id);
		}
	});

	each(sequenceIds.stale, function (staleId) { return delete this$1.store.sequences[staleId]; });
}

function clean(target) {
	var this$1 = this;

	var dirty;
	try {
		each(Object(tealight__WEBPACK_IMPORTED_MODULE_0__["default"])(target), function (node) {
			var id = node.getAttribute('data-sr-id');
			if (id !== null) {
				dirty = true;
				var element = this$1.store.elements[id];
				if (element.callbackTimer) {
					window.clearTimeout(element.callbackTimer.clock);
				}
				node.setAttribute('style', element.styles.inline.generated);
				node.removeAttribute('data-sr-id');
				delete this$1.store.elements[id];
			}
		});
	} catch (e) {
		return logger.call(this, 'Clean failed.', e.message)
	}

	if (dirty) {
		try {
			rinse.call(this);
		} catch (e) {
			return logger.call(this, 'Clean failed.', e.message)
		}
	}
}

function destroy() {
	var this$1 = this;

	/**
	 * Remove all generated styles and element ids
	 */
	each(this.store.elements, function (element) {
		element.node.setAttribute('style', element.styles.inline.generated);
		element.node.removeAttribute('data-sr-id');
	});

	/**
	 * Remove all event listeners.
	 */
	each(this.store.containers, function (container) {
		var target =
			container.node === document.documentElement ? window : container.node;
		target.removeEventListener('scroll', this$1.delegate);
		target.removeEventListener('resize', this$1.delegate);
	});

	/**
	 * Clear all data from the store
	 */
	this.store = {
		containers: {},
		elements: {},
		history: [],
		sequences: {}
	};
}

var getPrefixedCssProp = (function () {
	var properties = {};
	var style = document.documentElement.style;

	function getPrefixedCssProperty(name, source) {
		if ( source === void 0 ) source = style;

		if (name && typeof name === 'string') {
			if (properties[name]) {
				return properties[name]
			}
			if (typeof source[name] === 'string') {
				return (properties[name] = name)
			}
			if (typeof source[("-webkit-" + name)] === 'string') {
				return (properties[name] = "-webkit-" + name)
			}
			throw new RangeError(("Unable to find \"" + name + "\" style property."))
		}
		throw new TypeError('Expected a string.')
	}

	getPrefixedCssProperty.clearCache = function () { return (properties = {}); };

	return getPrefixedCssProperty
})();

function style(element) {
	var computed = window.getComputedStyle(element.node);
	var position = computed.position;
	var config = element.config;

	/**
	 * Generate inline styles
	 */
	var inline = {};
	var inlineStyle = element.node.getAttribute('style') || '';
	var inlineMatch = inlineStyle.match(/[\w-]+\s*:\s*[^;]+\s*/gi) || [];

	inline.computed = inlineMatch ? inlineMatch.map(function (m) { return m.trim(); }).join('; ') + ';' : '';

	inline.generated = inlineMatch.some(function (m) { return m.match(/visibility\s?:\s?visible/i); })
		? inline.computed
		: inlineMatch.concat( ['visibility: visible']).map(function (m) { return m.trim(); }).join('; ') + ';';

	/**
	 * Generate opacity styles
	 */
	var computedOpacity = parseFloat(computed.opacity);
	var configOpacity = !isNaN(parseFloat(config.opacity))
		? parseFloat(config.opacity)
		: parseFloat(computed.opacity);

	var opacity = {
		computed: computedOpacity !== configOpacity ? ("opacity: " + computedOpacity + ";") : '',
		generated: computedOpacity !== configOpacity ? ("opacity: " + configOpacity + ";") : ''
	};

	/**
	 * Generate transformation styles
	 */
	var transformations = [];

	if (parseFloat(config.distance)) {
		var axis = config.origin === 'top' || config.origin === 'bottom' ? 'Y' : 'X';

		/**
		 * Let’s make sure our our pixel distances are negative for top and left.
		 * e.g. { origin: 'top', distance: '25px' } starts at `top: -25px` in CSS.
		 */
		var distance = config.distance;
		if (config.origin === 'top' || config.origin === 'left') {
			distance = /^-/.test(distance) ? distance.substr(1) : ("-" + distance);
		}

		var ref = distance.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g);
		var value = ref[0];
		var unit = ref[1];

		switch (unit) {
			case 'em':
				distance = parseInt(computed.fontSize) * value;
				break
			case 'px':
				distance = value;
				break
			case '%':
				/**
				 * Here we use `getBoundingClientRect` instead of
				 * the existing data attached to `element.geometry`
				 * because only the former includes any transformations
				 * current applied to the element.
				 *
				 * If that behavior ends up being unintuitive, this
				 * logic could instead utilize `element.geometry.height`
				 * and `element.geoemetry.width` for the distance calculation
				 */
				distance =
					axis === 'Y'
						? (element.node.getBoundingClientRect().height * value) / 100
						: (element.node.getBoundingClientRect().width * value) / 100;
				break
			default:
				throw new RangeError('Unrecognized or missing distance unit.')
		}

		if (axis === 'Y') {
			transformations.push(Object(rematrix__WEBPACK_IMPORTED_MODULE_1__["translateY"])(distance));
		} else {
			transformations.push(Object(rematrix__WEBPACK_IMPORTED_MODULE_1__["translateX"])(distance));
		}
	}

	if (config.rotate.x) { transformations.push(Object(rematrix__WEBPACK_IMPORTED_MODULE_1__["rotateX"])(config.rotate.x)); }
	if (config.rotate.y) { transformations.push(Object(rematrix__WEBPACK_IMPORTED_MODULE_1__["rotateY"])(config.rotate.y)); }
	if (config.rotate.z) { transformations.push(Object(rematrix__WEBPACK_IMPORTED_MODULE_1__["rotateZ"])(config.rotate.z)); }
	if (config.scale !== 1) {
		if (config.scale === 0) {
			/**
			 * The CSS Transforms matrix interpolation specification
			 * basically disallows transitions of non-invertible
			 * matrixes, which means browsers won't transition
			 * elements with zero scale.
			 *
			 * That’s inconvenient for the API and developer
			 * experience, so we simply nudge their value
			 * slightly above zero; this allows browsers
			 * to transition our element as expected.
			 *
			 * `0.0002` was the smallest number
			 * that performed across browsers.
			 */
			transformations.push(Object(rematrix__WEBPACK_IMPORTED_MODULE_1__["scale"])(0.0002));
		} else {
			transformations.push(Object(rematrix__WEBPACK_IMPORTED_MODULE_1__["scale"])(config.scale));
		}
	}

	var transform = {};
	if (transformations.length) {
		transform.property = getPrefixedCssProp('transform');
		/**
		 * The default computed transform value should be one of:
		 * undefined || 'none' || 'matrix()' || 'matrix3d()'
		 */
		transform.computed = {
			raw: computed[transform.property],
			matrix: Object(rematrix__WEBPACK_IMPORTED_MODULE_1__["parse"])(computed[transform.property])
		};

		transformations.unshift(transform.computed.matrix);
		var product = transformations.reduce(rematrix__WEBPACK_IMPORTED_MODULE_1__["multiply"]);

		transform.generated = {
			initial: ((transform.property) + ": matrix3d(" + (product.join(', ')) + ");"),
			final: ((transform.property) + ": matrix3d(" + (transform.computed.matrix.join(', ')) + ");")
		};
	} else {
		transform.generated = {
			initial: '',
			final: ''
		};
	}

	/**
	 * Generate transition styles
	 */
	var transition = {};
	if (opacity.generated || transform.generated.initial) {
		transition.property = getPrefixedCssProp('transition');
		transition.computed = computed[transition.property];
		transition.fragments = [];

		var delay = config.delay;
		var duration = config.duration;
		var easing = config.easing;

		if (opacity.generated) {
			transition.fragments.push({
				delayed: ("opacity " + (duration / 1000) + "s " + easing + " " + (delay / 1000) + "s"),
				instant: ("opacity " + (duration / 1000) + "s " + easing + " 0s")
			});
		}

		if (transform.generated.initial) {
			transition.fragments.push({
				delayed: ((transform.property) + " " + (duration / 1000) + "s " + easing + " " + (delay / 1000) + "s"),
				instant: ((transform.property) + " " + (duration / 1000) + "s " + easing + " 0s")
			});
		}

		/**
		 * The default computed transition property should be undefined, or one of:
		 * '' || 'none 0s ease 0s' || 'all 0s ease 0s' || 'all 0s 0s cubic-bezier()'
		 */
		var hasCustomTransition =
			transition.computed && !transition.computed.match(/all 0s|none 0s/);

		if (hasCustomTransition) {
			transition.fragments.unshift({
				delayed: transition.computed,
				instant: transition.computed
			});
		}

		var composed = transition.fragments.reduce(
			function (composition, fragment, i) {
				composition.delayed += i === 0 ? fragment.delayed : (", " + (fragment.delayed));
				composition.instant += i === 0 ? fragment.instant : (", " + (fragment.instant));
				return composition
			},
			{
				delayed: '',
				instant: ''
			}
		);

		transition.generated = {
			delayed: ((transition.property) + ": " + (composed.delayed) + ";"),
			instant: ((transition.property) + ": " + (composed.instant) + ";")
		};
	} else {
		transition.generated = {
			delayed: '',
			instant: ''
		};
	}

	return {
		inline: inline,
		opacity: opacity,
		position: position,
		transform: transform,
		transition: transition
	}
}

function animate(element, force) {
	if ( force === void 0 ) force = {};

	var pristine = force.pristine || this.pristine;
	var delayed =
		element.config.useDelay === 'always' ||
		(element.config.useDelay === 'onload' && pristine) ||
		(element.config.useDelay === 'once' && !element.seen);

	var shouldReveal = element.visible && !element.revealed;
	var shouldReset = !element.visible && element.revealed && element.config.reset;

	if (force.reveal || shouldReveal) {
		return triggerReveal.call(this, element, delayed)
	}

	if (force.reset || shouldReset) {
		return triggerReset.call(this, element)
	}
}

function triggerReveal(element, delayed) {
	var styles = [
		element.styles.inline.generated,
		element.styles.opacity.computed,
		element.styles.transform.generated.final
	];
	if (delayed) {
		styles.push(element.styles.transition.generated.delayed);
	} else {
		styles.push(element.styles.transition.generated.instant);
	}
	element.revealed = element.seen = true;
	element.node.setAttribute('style', styles.filter(function (s) { return s !== ''; }).join(' '));
	registerCallbacks.call(this, element, delayed);
}

function triggerReset(element) {
	var styles = [
		element.styles.inline.generated,
		element.styles.opacity.generated,
		element.styles.transform.generated.initial,
		element.styles.transition.generated.instant
	];
	element.revealed = false;
	element.node.setAttribute('style', styles.filter(function (s) { return s !== ''; }).join(' '));
	registerCallbacks.call(this, element);
}

function registerCallbacks(element, isDelayed) {
	var this$1 = this;

	var duration = isDelayed
		? element.config.duration + element.config.delay
		: element.config.duration;

	var beforeCallback = element.revealed
		? element.config.beforeReveal
		: element.config.beforeReset;

	var afterCallback = element.revealed
		? element.config.afterReveal
		: element.config.afterReset;

	var elapsed = 0;
	if (element.callbackTimer) {
		elapsed = Date.now() - element.callbackTimer.start;
		window.clearTimeout(element.callbackTimer.clock);
	}

	beforeCallback(element.node);

	element.callbackTimer = {
		start: Date.now(),
		clock: window.setTimeout(function () {
			afterCallback(element.node);
			element.callbackTimer = null;
			if (element.revealed && !element.config.reset && element.config.cleanup) {
				clean.call(this$1, element.node);
			}
		}, duration - elapsed)
	};
}

var nextUniqueId = (function () {
	var uid = 0;
	return function () { return uid++; }
})();

function sequence(element, pristine) {
	if ( pristine === void 0 ) pristine = this.pristine;

	/**
	 * We first check if the element should reset.
	 */
	if (!element.visible && element.revealed && element.config.reset) {
		return animate.call(this, element, { reset: true })
	}

	var seq = this.store.sequences[element.sequence.id];
	var i = element.sequence.index;

	if (seq) {
		var visible = new SequenceModel(seq, 'visible', this.store);
		var revealed = new SequenceModel(seq, 'revealed', this.store);

		seq.models = { visible: visible, revealed: revealed };

		/**
		 * If the sequence has no revealed members,
		 * then we reveal the first visible element
		 * within that sequence.
		 *
		 * The sequence then cues a recursive call
		 * in both directions.
		 */
		if (!revealed.body.length) {
			var nextId = seq.members[visible.body[0]];
			var nextElement = this.store.elements[nextId];

			if (nextElement) {
				cue.call(this, seq, visible.body[0], -1, pristine);
				cue.call(this, seq, visible.body[0], +1, pristine);
				return animate.call(this, nextElement, { reveal: true, pristine: pristine })
			}
		}

		/**
		 * If our element isn’t resetting, we check the
		 * element sequence index against the head, and
		 * then the foot of the sequence.
		 */
		if (
			!seq.blocked.head &&
			i === [].concat( revealed.head ).pop() &&
			i >= [].concat( visible.body ).shift()
		) {
			cue.call(this, seq, i, -1, pristine);
			return animate.call(this, element, { reveal: true, pristine: pristine })
		}

		if (
			!seq.blocked.foot &&
			i === [].concat( revealed.foot ).shift() &&
			i <= [].concat( visible.body ).pop()
		) {
			cue.call(this, seq, i, +1, pristine);
			return animate.call(this, element, { reveal: true, pristine: pristine })
		}
	}
}

function Sequence(interval) {
	var i = Math.abs(interval);
	if (!isNaN(i)) {
		this.id = nextUniqueId();
		this.interval = Math.max(i, 16);
		this.members = [];
		this.models = {};
		this.blocked = {
			head: false,
			foot: false
		};
	} else {
		throw new RangeError('Invalid sequence interval.')
	}
}

function SequenceModel(seq, prop, store) {
	var this$1 = this;

	this.head = [];
	this.body = [];
	this.foot = [];

	each(seq.members, function (id, index) {
		var element = store.elements[id];
		if (element && element[prop]) {
			this$1.body.push(index);
		}
	});

	if (this.body.length) {
		each(seq.members, function (id, index) {
			var element = store.elements[id];
			if (element && !element[prop]) {
				if (index < this$1.body[0]) {
					this$1.head.push(index);
				} else {
					this$1.foot.push(index);
				}
			}
		});
	}
}

function cue(seq, i, direction, pristine) {
	var this$1 = this;

	var blocked = ['head', null, 'foot'][1 + direction];
	var nextId = seq.members[i + direction];
	var nextElement = this.store.elements[nextId];

	seq.blocked[blocked] = true;

	setTimeout(function () {
		seq.blocked[blocked] = false;
		if (nextElement) {
			sequence.call(this$1, nextElement, pristine);
		}
	}, seq.interval);
}

function initialize() {
	var this$1 = this;

	rinse.call(this);

	each(this.store.elements, function (element) {
		var styles = [element.styles.inline.generated];

		if (element.visible) {
			styles.push(element.styles.opacity.computed);
			styles.push(element.styles.transform.generated.final);
			element.revealed = true;
		} else {
			styles.push(element.styles.opacity.generated);
			styles.push(element.styles.transform.generated.initial);
			element.revealed = false;
		}

		element.node.setAttribute('style', styles.filter(function (s) { return s !== ''; }).join(' '));
	});

	each(this.store.containers, function (container) {
		var target =
			container.node === document.documentElement ? window : container.node;
		target.addEventListener('scroll', this$1.delegate);
		target.addEventListener('resize', this$1.delegate);
	});

	/**
	 * Manually invoke delegate once to capture
	 * element and container dimensions, container
	 * scroll position, and trigger any valid reveals
	 */
	this.delegate();

	/**
	 * Wipe any existing `setTimeout` now
	 * that initialization has completed.
	 */
	this.initTimeout = null;
}

function isMobile(agent) {
	if ( agent === void 0 ) agent = navigator.userAgent;

	return /Android|iPhone|iPad|iPod/i.test(agent)
}

function deepAssign(target) {
	var sources = [], len = arguments.length - 1;
	while ( len-- > 0 ) sources[ len ] = arguments[ len + 1 ];

	if (isObject(target)) {
		each(sources, function (source) {
			each(source, function (data, key) {
				if (isObject(data)) {
					if (!target[key] || !isObject(target[key])) {
						target[key] = {};
					}
					deepAssign(target[key], data);
				} else {
					target[key] = data;
				}
			});
		});
		return target
	} else {
		throw new TypeError('Target must be an object literal.')
	}
}

function reveal(target, options, syncing) {
	var this$1 = this;
	if ( options === void 0 ) options = {};
	if ( syncing === void 0 ) syncing = false;

	var containerBuffer = [];
	var sequence$$1;
	var interval = options.interval || defaults.interval;

	try {
		if (interval) {
			sequence$$1 = new Sequence(interval);
		}

		var nodes = Object(tealight__WEBPACK_IMPORTED_MODULE_0__["default"])(target);
		if (!nodes.length) {
			throw new Error('Invalid reveal target.')
		}

		var elements = nodes.reduce(function (elementBuffer, elementNode) {
			var element = {};
			var existingId = elementNode.getAttribute('data-sr-id');

			if (existingId) {
				deepAssign(element, this$1.store.elements[existingId]);

				/**
				 * In order to prevent previously generated styles
				 * from throwing off the new styles, the style tag
				 * has to be reverted to its pre-reveal state.
				 */
				element.node.setAttribute('style', element.styles.inline.computed);
			} else {
				element.id = nextUniqueId();
				element.node = elementNode;
				element.seen = false;
				element.revealed = false;
				element.visible = false;
			}

			var config = deepAssign({}, element.config || this$1.defaults, options);

			if ((!config.mobile && isMobile()) || (!config.desktop && !isMobile())) {
				if (existingId) {
					clean.call(this$1, element);
				}
				return elementBuffer // skip elements that are disabled
			}

			var containerNode = Object(tealight__WEBPACK_IMPORTED_MODULE_0__["default"])(config.container)[0];
			if (!containerNode) {
				throw new Error('Invalid container.')
			}
			if (!containerNode.contains(elementNode)) {
				return elementBuffer // skip elements found outside the container
			}

			var containerId;
			{
				containerId = getContainerId(
					containerNode,
					containerBuffer,
					this$1.store.containers
				);
				if (containerId === null) {
					containerId = nextUniqueId();
					containerBuffer.push({ id: containerId, node: containerNode });
				}
			}

			element.config = config;
			element.containerId = containerId;
			element.styles = style(element);

			if (sequence$$1) {
				element.sequence = {
					id: sequence$$1.id,
					index: sequence$$1.members.length
				};
				sequence$$1.members.push(element.id);
			}

			elementBuffer.push(element);
			return elementBuffer
		}, []);

		/**
		 * Modifying the DOM via setAttribute needs to be handled
		 * separately from reading computed styles in the map above
		 * for the browser to batch DOM changes (limiting reflows)
		 */
		each(elements, function (element) {
			this$1.store.elements[element.id] = element;
			element.node.setAttribute('data-sr-id', element.id);
		});
	} catch (e) {
		return logger.call(this, 'Reveal failed.', e.message)
	}

	/**
	 * Now that element set-up is complete...
	 * Let’s commit any container and sequence data we have to the store.
	 */
	each(containerBuffer, function (container) {
		this$1.store.containers[container.id] = {
			id: container.id,
			node: container.node
		};
	});
	if (sequence$$1) {
		this.store.sequences[sequence$$1.id] = sequence$$1;
	}

	/**
	 * If reveal wasn't invoked by sync, we want to
	 * make sure to add this call to the history.
	 */
	if (syncing !== true) {
		this.store.history.push({ target: target, options: options });

		/**
		 * Push initialization to the event queue, giving
		 * multiple reveal calls time to be interpreted.
		 */
		if (this.initTimeout) {
			window.clearTimeout(this.initTimeout);
		}
		this.initTimeout = window.setTimeout(initialize.bind(this), 0);
	}
}

function getContainerId(node) {
	var collections = [], len = arguments.length - 1;
	while ( len-- > 0 ) collections[ len ] = arguments[ len + 1 ];

	var id = null;
	each(collections, function (collection) {
		each(collection, function (container) {
			if (id === null && container.node === node) {
				id = container.id;
			}
		});
	});
	return id
}

/**
 * Re-runs the reveal method for each record stored in history,
 * for capturing new content asynchronously loaded into the DOM.
 */
function sync() {
	var this$1 = this;

	each(this.store.history, function (record) {
		reveal.call(this$1, record.target, record.options, true);
	});

	initialize.call(this);
}

var polyfill = function (x) { return (x > 0) - (x < 0) || +x; };
var mathSign = Math.sign || polyfill;

function getGeometry(target, isContainer) {
	/**
	 * We want to ignore padding and scrollbars for container elements.
	 * More information here: https://goo.gl/vOZpbz
	 */
	var height = isContainer ? target.node.clientHeight : target.node.offsetHeight;
	var width = isContainer ? target.node.clientWidth : target.node.offsetWidth;

	var offsetTop = 0;
	var offsetLeft = 0;
	var node = target.node;

	do {
		if (!isNaN(node.offsetTop)) {
			offsetTop += node.offsetTop;
		}
		if (!isNaN(node.offsetLeft)) {
			offsetLeft += node.offsetLeft;
		}
		node = node.offsetParent;
	} while (node)

	return {
		bounds: {
			top: offsetTop,
			right: offsetLeft + width,
			bottom: offsetTop + height,
			left: offsetLeft
		},
		height: height,
		width: width
	}
}

function getScrolled(container) {
	var top, left;
	if (container.node === document.documentElement) {
		top = window.pageYOffset;
		left = window.pageXOffset;
	} else {
		top = container.node.scrollTop;
		left = container.node.scrollLeft;
	}
	return { top: top, left: left }
}

function isElementVisible(element) {
	if ( element === void 0 ) element = {};

	var container = this.store.containers[element.containerId];
	if (!container) { return }

	var viewFactor = Math.max(0, Math.min(1, element.config.viewFactor));
	var viewOffset = element.config.viewOffset;

	var elementBounds = {
		top: element.geometry.bounds.top + element.geometry.height * viewFactor,
		right: element.geometry.bounds.right - element.geometry.width * viewFactor,
		bottom: element.geometry.bounds.bottom - element.geometry.height * viewFactor,
		left: element.geometry.bounds.left + element.geometry.width * viewFactor
	};

	var containerBounds = {
		top: container.geometry.bounds.top + container.scroll.top + viewOffset.top,
		right: container.geometry.bounds.right + container.scroll.left - viewOffset.right,
		bottom:
			container.geometry.bounds.bottom + container.scroll.top - viewOffset.bottom,
		left: container.geometry.bounds.left + container.scroll.left + viewOffset.left
	};

	return (
		(elementBounds.top < containerBounds.bottom &&
			elementBounds.right > containerBounds.left &&
			elementBounds.bottom > containerBounds.top &&
			elementBounds.left < containerBounds.right) ||
		element.styles.position === 'fixed'
	)
}

function delegate(
	event,
	elements
) {
	var this$1 = this;
	if ( event === void 0 ) event = { type: 'init' };
	if ( elements === void 0 ) elements = this.store.elements;

	Object(miniraf__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
		var stale = event.type === 'init' || event.type === 'resize';

		each(this$1.store.containers, function (container) {
			if (stale) {
				container.geometry = getGeometry.call(this$1, container, true);
			}
			var scroll = getScrolled.call(this$1, container);
			if (container.scroll) {
				container.direction = {
					x: mathSign(scroll.left - container.scroll.left),
					y: mathSign(scroll.top - container.scroll.top)
				};
			}
			container.scroll = scroll;
		});

		/**
		 * Due to how the sequencer is implemented, it’s
		 * important that we update the state of all
		 * elements, before any animation logic is
		 * evaluated (in the second loop below).
		 */
		each(elements, function (element) {
			if (stale || element.geometry === undefined) {
				element.geometry = getGeometry.call(this$1, element);
			}
			element.visible = isElementVisible.call(this$1, element);
		});

		each(elements, function (element) {
			if (element.sequence) {
				sequence.call(this$1, element);
			} else {
				animate.call(this$1, element);
			}
		});

		this$1.pristine = false;
	});
}

function isTransformSupported() {
	var style = document.documentElement.style;
	return 'transform' in style || 'WebkitTransform' in style
}

function isTransitionSupported() {
	var style = document.documentElement.style;
	return 'transition' in style || 'WebkitTransition' in style
}

var version = "4.0.7";

var boundDelegate;
var boundDestroy;
var boundReveal;
var boundClean;
var boundSync;
var config;
var debug;
var instance;

function ScrollReveal(options) {
	if ( options === void 0 ) options = {};

	var invokedWithoutNew =
		typeof this === 'undefined' ||
		Object.getPrototypeOf(this) !== ScrollReveal.prototype;

	if (invokedWithoutNew) {
		return new ScrollReveal(options)
	}

	if (!ScrollReveal.isSupported()) {
		logger.call(this, 'Instantiation failed.', 'This browser is not supported.');
		return mount.failure()
	}

	var buffer;
	try {
		buffer = config
			? deepAssign({}, config, options)
			: deepAssign({}, defaults, options);
	} catch (e) {
		logger.call(this, 'Invalid configuration.', e.message);
		return mount.failure()
	}

	try {
		var container = Object(tealight__WEBPACK_IMPORTED_MODULE_0__["default"])(buffer.container)[0];
		if (!container) {
			throw new Error('Invalid container.')
		}
	} catch (e) {
		logger.call(this, e.message);
		return mount.failure()
	}

	config = buffer;

	if ((!config.mobile && isMobile()) || (!config.desktop && !isMobile())) {
		logger.call(
			this,
			'This device is disabled.',
			("desktop: " + (config.desktop)),
			("mobile: " + (config.mobile))
		);
		return mount.failure()
	}

	mount.success();

	this.store = {
		containers: {},
		elements: {},
		history: [],
		sequences: {}
	};

	this.pristine = true;

	boundDelegate = boundDelegate || delegate.bind(this);
	boundDestroy = boundDestroy || destroy.bind(this);
	boundReveal = boundReveal || reveal.bind(this);
	boundClean = boundClean || clean.bind(this);
	boundSync = boundSync || sync.bind(this);

	Object.defineProperty(this, 'delegate', { get: function () { return boundDelegate; } });
	Object.defineProperty(this, 'destroy', { get: function () { return boundDestroy; } });
	Object.defineProperty(this, 'reveal', { get: function () { return boundReveal; } });
	Object.defineProperty(this, 'clean', { get: function () { return boundClean; } });
	Object.defineProperty(this, 'sync', { get: function () { return boundSync; } });

	Object.defineProperty(this, 'defaults', { get: function () { return config; } });
	Object.defineProperty(this, 'version', { get: function () { return version; } });
	Object.defineProperty(this, 'noop', { get: function () { return false; } });

	return instance ? instance : (instance = this)
}

ScrollReveal.isSupported = function () { return isTransformSupported() && isTransitionSupported(); };

Object.defineProperty(ScrollReveal, 'debug', {
	get: function () { return debug || false; },
	set: function (value) { return (debug = typeof value === 'boolean' ? value : debug); }
});

ScrollReveal();

/* harmony default export */ __webpack_exports__["default"] = (ScrollReveal);


/***/ }),

/***/ "./node_modules/sweetalert2/dist/sweetalert2.all.js":
/*!**********************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.all.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
* sweetalert2 v10.12.6
* Released under the MIT License.
*/
(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  var consolePrefix = 'SweetAlert2:';
  /**
   * Filter the unique values into a new array
   * @param arr
   */

  var uniqueArray = function uniqueArray(arr) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
      if (result.indexOf(arr[i]) === -1) {
        result.push(arr[i]);
      }
    }

    return result;
  };
  /**
   * Capitalize the first letter of a string
   * @param str
   */

  var capitalizeFirstLetter = function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  /**
   * Returns the array of object values (Object.values isn't supported in IE11)
   * @param obj
   */

  var objectValues = function objectValues(obj) {
    return Object.keys(obj).map(function (key) {
      return obj[key];
    });
  };
  /**
   * Convert NodeList to Array
   * @param nodeList
   */

  var toArray = function toArray(nodeList) {
    return Array.prototype.slice.call(nodeList);
  };
  /**
   * Standardise console warnings
   * @param message
   */

  var warn = function warn(message) {
    console.warn("".concat(consolePrefix, " ").concat(_typeof(message) === 'object' ? message.join(' ') : message));
  };
  /**
   * Standardise console errors
   * @param message
   */

  var error = function error(message) {
    console.error("".concat(consolePrefix, " ").concat(message));
  };
  /**
   * Private global state for `warnOnce`
   * @type {Array}
   * @private
   */

  var previousWarnOnceMessages = [];
  /**
   * Show a console warning, but only if it hasn't already been shown
   * @param message
   */

  var warnOnce = function warnOnce(message) {
    if (!(previousWarnOnceMessages.indexOf(message) !== -1)) {
      previousWarnOnceMessages.push(message);
      warn(message);
    }
  };
  /**
   * Show a one-time console warning about deprecated params/methods
   */

  var warnAboutDeprecation = function warnAboutDeprecation(deprecatedParam, useInstead) {
    warnOnce("\"".concat(deprecatedParam, "\" is deprecated and will be removed in the next major release. Please use \"").concat(useInstead, "\" instead."));
  };
  /**
   * If `arg` is a function, call it (with no arguments or context) and return the result.
   * Otherwise, just pass the value through
   * @param arg
   */

  var callIfFunction = function callIfFunction(arg) {
    return typeof arg === 'function' ? arg() : arg;
  };
  var hasToPromiseFn = function hasToPromiseFn(arg) {
    return arg && typeof arg.toPromise === 'function';
  };
  var asPromise = function asPromise(arg) {
    return hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
  };
  var isPromise = function isPromise(arg) {
    return arg && Promise.resolve(arg) === arg;
  };

  var DismissReason = Object.freeze({
    cancel: 'cancel',
    backdrop: 'backdrop',
    close: 'close',
    esc: 'esc',
    timer: 'timer'
  });

  var isJqueryElement = function isJqueryElement(elem) {
    return _typeof(elem) === 'object' && elem.jquery;
  };

  var isElement = function isElement(elem) {
    return elem instanceof Element || isJqueryElement(elem);
  };

  var argsToParams = function argsToParams(args) {
    var params = {};

    if (_typeof(args[0]) === 'object' && !isElement(args[0])) {
      _extends(params, args[0]);
    } else {
      ['title', 'html', 'icon'].forEach(function (name, index) {
        var arg = args[index];

        if (typeof arg === 'string' || isElement(arg)) {
          params[name] = arg;
        } else if (arg !== undefined) {
          error("Unexpected type of ".concat(name, "! Expected \"string\" or \"Element\", got ").concat(_typeof(arg)));
        }
      });
    }

    return params;
  };

  var swalPrefix = 'swal2-';
  var prefix = function prefix(items) {
    var result = {};

    for (var i in items) {
      result[items[i]] = swalPrefix + items[i];
    }

    return result;
  };
  var swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'toast-column', 'show', 'hide', 'close', 'title', 'header', 'content', 'html-container', 'actions', 'confirm', 'deny', 'cancel', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'input-label', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loader', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error']);
  var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

  var getContainer = function getContainer() {
    return document.body.querySelector(".".concat(swalClasses.container));
  };
  var elementBySelector = function elementBySelector(selectorString) {
    var container = getContainer();
    return container ? container.querySelector(selectorString) : null;
  };

  var elementByClass = function elementByClass(className) {
    return elementBySelector(".".concat(className));
  };

  var getPopup = function getPopup() {
    return elementByClass(swalClasses.popup);
  };
  var getIcons = function getIcons() {
    var popup = getPopup();
    return toArray(popup.querySelectorAll(".".concat(swalClasses.icon)));
  };
  var getIcon = function getIcon() {
    var visibleIcon = getIcons().filter(function (icon) {
      return isVisible(icon);
    });
    return visibleIcon.length ? visibleIcon[0] : null;
  };
  var getTitle = function getTitle() {
    return elementByClass(swalClasses.title);
  };
  var getContent = function getContent() {
    return elementByClass(swalClasses.content);
  };
  var getHtmlContainer = function getHtmlContainer() {
    return elementByClass(swalClasses['html-container']);
  };
  var getImage = function getImage() {
    return elementByClass(swalClasses.image);
  };
  var getProgressSteps = function getProgressSteps() {
    return elementByClass(swalClasses['progress-steps']);
  };
  var getValidationMessage = function getValidationMessage() {
    return elementByClass(swalClasses['validation-message']);
  };
  var getConfirmButton = function getConfirmButton() {
    return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.confirm));
  };
  var getDenyButton = function getDenyButton() {
    return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.deny));
  };
  var getInputLabel = function getInputLabel() {
    return elementByClass(swalClasses['input-label']);
  };
  var getLoader = function getLoader() {
    return elementBySelector(".".concat(swalClasses.loader));
  };
  var getCancelButton = function getCancelButton() {
    return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.cancel));
  };
  var getActions = function getActions() {
    return elementByClass(swalClasses.actions);
  };
  var getHeader = function getHeader() {
    return elementByClass(swalClasses.header);
  };
  var getFooter = function getFooter() {
    return elementByClass(swalClasses.footer);
  };
  var getTimerProgressBar = function getTimerProgressBar() {
    return elementByClass(swalClasses['timer-progress-bar']);
  };
  var getCloseButton = function getCloseButton() {
    return elementByClass(swalClasses.close);
  }; // https://github.com/jkup/focusable/blob/master/index.js

  var focusable = "\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex=\"0\"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n";
  var getFocusableElements = function getFocusableElements() {
    var focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
    .sort(function (a, b) {
      a = parseInt(a.getAttribute('tabindex'));
      b = parseInt(b.getAttribute('tabindex'));

      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      }

      return 0;
    });
    var otherFocusableElements = toArray(getPopup().querySelectorAll(focusable)).filter(function (el) {
      return el.getAttribute('tabindex') !== '-1';
    });
    return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(function (el) {
      return isVisible(el);
    });
  };
  var isModal = function isModal() {
    return !isToast() && !document.body.classList.contains(swalClasses['no-backdrop']);
  };
  var isToast = function isToast() {
    return document.body.classList.contains(swalClasses['toast-shown']);
  };
  var isLoading = function isLoading() {
    return getPopup().hasAttribute('data-loading');
  };

  var states = {
    previousBodyPadding: null
  };
  var setInnerHtml = function setInnerHtml(elem, html) {
    // #1926
    elem.textContent = '';

    if (html) {
      var parser = new DOMParser();
      var parsed = parser.parseFromString(html, "text/html");
      toArray(parsed.querySelector('head').childNodes).forEach(function (child) {
        elem.appendChild(child);
      });
      toArray(parsed.querySelector('body').childNodes).forEach(function (child) {
        elem.appendChild(child);
      });
    }
  };
  var hasClass = function hasClass(elem, className) {
    if (!className) {
      return false;
    }

    var classList = className.split(/\s+/);

    for (var i = 0; i < classList.length; i++) {
      if (!elem.classList.contains(classList[i])) {
        return false;
      }
    }

    return true;
  };

  var removeCustomClasses = function removeCustomClasses(elem, params) {
    toArray(elem.classList).forEach(function (className) {
      if (!(objectValues(swalClasses).indexOf(className) !== -1) && !(objectValues(iconTypes).indexOf(className) !== -1) && !(objectValues(params.showClass).indexOf(className) !== -1)) {
        elem.classList.remove(className);
      }
    });
  };

  var applyCustomClass = function applyCustomClass(elem, params, className) {
    removeCustomClasses(elem, params);

    if (params.customClass && params.customClass[className]) {
      if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {
        return warn("Invalid type of customClass.".concat(className, "! Expected string or iterable object, got \"").concat(_typeof(params.customClass[className]), "\""));
      }

      addClass(elem, params.customClass[className]);
    }
  };
  function getInput(content, inputType) {
    if (!inputType) {
      return null;
    }

    switch (inputType) {
      case 'select':
      case 'textarea':
      case 'file':
        return getChildByClass(content, swalClasses[inputType]);

      case 'checkbox':
        return content.querySelector(".".concat(swalClasses.checkbox, " input"));

      case 'radio':
        return content.querySelector(".".concat(swalClasses.radio, " input:checked")) || content.querySelector(".".concat(swalClasses.radio, " input:first-child"));

      case 'range':
        return content.querySelector(".".concat(swalClasses.range, " input"));

      default:
        return getChildByClass(content, swalClasses.input);
    }
  }
  var focusInput = function focusInput(input) {
    input.focus(); // place cursor at end of text in text input

    if (input.type !== 'file') {
      // http://stackoverflow.com/a/2345915
      var val = input.value;
      input.value = '';
      input.value = val;
    }
  };
  var toggleClass = function toggleClass(target, classList, condition) {
    if (!target || !classList) {
      return;
    }

    if (typeof classList === 'string') {
      classList = classList.split(/\s+/).filter(Boolean);
    }

    classList.forEach(function (className) {
      if (target.forEach) {
        target.forEach(function (elem) {
          condition ? elem.classList.add(className) : elem.classList.remove(className);
        });
      } else {
        condition ? target.classList.add(className) : target.classList.remove(className);
      }
    });
  };
  var addClass = function addClass(target, classList) {
    toggleClass(target, classList, true);
  };
  var removeClass = function removeClass(target, classList) {
    toggleClass(target, classList, false);
  };
  var getChildByClass = function getChildByClass(elem, className) {
    for (var i = 0; i < elem.childNodes.length; i++) {
      if (hasClass(elem.childNodes[i], className)) {
        return elem.childNodes[i];
      }
    }
  };
  var applyNumericalStyle = function applyNumericalStyle(elem, property, value) {
    if (value === "".concat(parseInt(value))) {
      value = parseInt(value);
    }

    if (value || parseInt(value) === 0) {
      elem.style[property] = typeof value === 'number' ? "".concat(value, "px") : value;
    } else {
      elem.style.removeProperty(property);
    }
  };
  var show = function show(elem) {
    var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
    elem.style.display = display;
  };
  var hide = function hide(elem) {
    elem.style.display = 'none';
  };
  var setStyle = function setStyle(parent, selector, property, value) {
    var el = parent.querySelector(selector);

    if (el) {
      el.style[property] = value;
    }
  };
  var toggle = function toggle(elem, condition, display) {
    condition ? show(elem, display) : hide(elem);
  }; // borrowed from jquery $(elem).is(':visible') implementation

  var isVisible = function isVisible(elem) {
    return !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
  };
  var allButtonsAreHidden = function allButtonsAreHidden() {
    return !isVisible(getConfirmButton()) && !isVisible(getDenyButton()) && !isVisible(getCancelButton());
  };
  var isScrollable = function isScrollable(elem) {
    return !!(elem.scrollHeight > elem.clientHeight);
  }; // borrowed from https://stackoverflow.com/a/46352119

  var hasCssAnimation = function hasCssAnimation(elem) {
    var style = window.getComputedStyle(elem);
    var animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
    var transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
    return animDuration > 0 || transDuration > 0;
  };
  var contains = function contains(haystack, needle) {
    if (typeof haystack.contains === 'function') {
      return haystack.contains(needle);
    }
  };
  var animateTimerProgressBar = function animateTimerProgressBar(timer) {
    var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var timerProgressBar = getTimerProgressBar();

    if (isVisible(timerProgressBar)) {
      if (reset) {
        timerProgressBar.style.transition = 'none';
        timerProgressBar.style.width = '100%';
      }

      setTimeout(function () {
        timerProgressBar.style.transition = "width ".concat(timer / 1000, "s linear");
        timerProgressBar.style.width = '0%';
      }, 10);
    }
  };
  var stopTimerProgressBar = function stopTimerProgressBar() {
    var timerProgressBar = getTimerProgressBar();
    var timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = '100%';
    var timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    var timerProgressBarPercent = parseInt(timerProgressBarWidth / timerProgressBarFullWidth * 100);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = "".concat(timerProgressBarPercent, "%");
  };

  // Detect Node env
  var isNodeEnv = function isNodeEnv() {
    return typeof window === 'undefined' || typeof document === 'undefined';
  };

  var sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <div class=\"").concat(swalClasses.header, "\">\n     <ul class=\"").concat(swalClasses['progress-steps'], "\"></ul>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.error, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.question, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.warning, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.info, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.success, "\"></div>\n     <img class=\"").concat(swalClasses.image, "\" />\n     <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n     <button type=\"button\" class=\"").concat(swalClasses.close, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.content, "\">\n     <div id=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses['html-container'], "\"></div>\n     <input class=\"").concat(swalClasses.input, "\" />\n     <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n     <div class=\"").concat(swalClasses.range, "\">\n       <input type=\"range\" />\n       <output></output>\n     </div>\n     <select class=\"").concat(swalClasses.select, "\"></select>\n     <div class=\"").concat(swalClasses.radio, "\"></div>\n     <label for=\"").concat(swalClasses.checkbox, "\" class=\"").concat(swalClasses.checkbox, "\">\n       <input type=\"checkbox\" />\n       <span class=\"").concat(swalClasses.label, "\"></span>\n     </label>\n     <textarea class=\"").concat(swalClasses.textarea, "\"></textarea>\n     <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   </div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <div class=\"").concat(swalClasses.loader, "\"></div>\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.deny, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\"></div>\n   <div class=\"").concat(swalClasses['timer-progress-bar-container'], "\">\n     <div class=\"").concat(swalClasses['timer-progress-bar'], "\"></div>\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');

  var resetOldContainer = function resetOldContainer() {
    var oldContainer = getContainer();

    if (!oldContainer) {
      return false;
    }

    oldContainer.parentNode.removeChild(oldContainer);
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
    return true;
  };

  var oldInputVal; // IE11 workaround, see #1109 for details

  var resetValidationMessage = function resetValidationMessage(e) {
    if (Swal.isVisible() && oldInputVal !== e.target.value) {
      Swal.resetValidationMessage();
    }

    oldInputVal = e.target.value;
  };

  var addInputChangeListeners = function addInputChangeListeners() {
    var content = getContent();
    var input = getChildByClass(content, swalClasses.input);
    var file = getChildByClass(content, swalClasses.file);
    var range = content.querySelector(".".concat(swalClasses.range, " input"));
    var rangeOutput = content.querySelector(".".concat(swalClasses.range, " output"));
    var select = getChildByClass(content, swalClasses.select);
    var checkbox = content.querySelector(".".concat(swalClasses.checkbox, " input"));
    var textarea = getChildByClass(content, swalClasses.textarea);
    input.oninput = resetValidationMessage;
    file.onchange = resetValidationMessage;
    select.onchange = resetValidationMessage;
    checkbox.onchange = resetValidationMessage;
    textarea.oninput = resetValidationMessage;

    range.oninput = function (e) {
      resetValidationMessage(e);
      rangeOutput.value = range.value;
    };

    range.onchange = function (e) {
      resetValidationMessage(e);
      range.nextSibling.value = range.value;
    };
  };

  var getTarget = function getTarget(target) {
    return typeof target === 'string' ? document.querySelector(target) : target;
  };

  var setupAccessibility = function setupAccessibility(params) {
    var popup = getPopup();
    popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
    popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

    if (!params.toast) {
      popup.setAttribute('aria-modal', 'true');
    }
  };

  var setupRTL = function setupRTL(targetElement) {
    if (window.getComputedStyle(targetElement).direction === 'rtl') {
      addClass(getContainer(), swalClasses.rtl);
    }
  };
  /*
   * Add modal + backdrop to DOM
   */


  var init = function init(params) {
    // Clean up the old popup container if it exists
    var oldContainerExisted = resetOldContainer();
    /* istanbul ignore if */

    if (isNodeEnv()) {
      error('SweetAlert2 requires document to initialize');
      return;
    }

    var container = document.createElement('div');
    container.className = swalClasses.container;

    if (oldContainerExisted) {
      addClass(container, swalClasses['no-transition']);
    }

    setInnerHtml(container, sweetHTML);
    var targetElement = getTarget(params.target);
    targetElement.appendChild(container);
    setupAccessibility(params);
    setupRTL(targetElement);
    addInputChangeListeners();
  };

  var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
    // DOM element
    if (param instanceof HTMLElement) {
      target.appendChild(param); // Object
    } else if (_typeof(param) === 'object') {
      handleObject(param, target); // Plain string
    } else if (param) {
      setInnerHtml(target, param);
    }
  };

  var handleObject = function handleObject(param, target) {
    // JQuery element(s)
    if (param.jquery) {
      handleJqueryElem(target, param); // For other objects use their string representation
    } else {
      setInnerHtml(target, param.toString());
    }
  };

  var handleJqueryElem = function handleJqueryElem(target, elem) {
    target.textContent = '';

    if (0 in elem) {
      for (var i = 0; (i in elem); i++) {
        target.appendChild(elem[i].cloneNode(true));
      }
    } else {
      target.appendChild(elem.cloneNode(true));
    }
  };

  var animationEndEvent = function () {
    // Prevent run in Node env

    /* istanbul ignore if */
    if (isNodeEnv()) {
      return false;
    }

    var testEl = document.createElement('div');
    var transEndEventNames = {
      WebkitAnimation: 'webkitAnimationEnd',
      OAnimation: 'oAnimationEnd oanimationend',
      animation: 'animationend'
    };

    for (var i in transEndEventNames) {
      if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') {
        return transEndEventNames[i];
      }
    }

    return false;
  }();

  // https://github.com/twbs/bootstrap/blob/master/js/src/modal.js

  var measureScrollbar = function measureScrollbar() {
    var scrollDiv = document.createElement('div');
    scrollDiv.className = swalClasses['scrollbar-measure'];
    document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  };

  var renderActions = function renderActions(instance, params) {
    var actions = getActions();
    var loader = getLoader();
    var confirmButton = getConfirmButton();
    var denyButton = getDenyButton();
    var cancelButton = getCancelButton(); // Actions (buttons) wrapper

    if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
      hide(actions);
    } // Custom class


    applyCustomClass(actions, params, 'actions'); // Render buttons

    renderButton(confirmButton, 'confirm', params);
    renderButton(denyButton, 'deny', params);
    renderButton(cancelButton, 'cancel', params);
    handleButtonsStyling(confirmButton, denyButton, cancelButton, params);

    if (params.reverseButtons) {
      actions.insertBefore(cancelButton, loader);
      actions.insertBefore(denyButton, loader);
      actions.insertBefore(confirmButton, loader);
    } // Loader


    setInnerHtml(loader, params.loaderHtml);
    applyCustomClass(loader, params, 'loader');
  };

  function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
    if (!params.buttonsStyling) {
      return removeClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
    }

    addClass([confirmButton, denyButton, cancelButton], swalClasses.styled); // Buttons background colors

    if (params.confirmButtonColor) {
      confirmButton.style.backgroundColor = params.confirmButtonColor;
    }

    if (params.denyButtonColor) {
      denyButton.style.backgroundColor = params.denyButtonColor;
    }

    if (params.cancelButtonColor) {
      cancelButton.style.backgroundColor = params.cancelButtonColor;
    }
  }

  function renderButton(button, buttonType, params) {
    toggle(button, params["show".concat(capitalizeFirstLetter(buttonType), "Button")], 'inline-block');
    setInnerHtml(button, params["".concat(buttonType, "ButtonText")]); // Set caption text

    button.setAttribute('aria-label', params["".concat(buttonType, "ButtonAriaLabel")]); // ARIA label
    // Add buttons custom classes

    button.className = swalClasses[buttonType];
    applyCustomClass(button, params, "".concat(buttonType, "Button"));
    addClass(button, params["".concat(buttonType, "ButtonClass")]);
  }

  function handleBackdropParam(container, backdrop) {
    if (typeof backdrop === 'string') {
      container.style.background = backdrop;
    } else if (!backdrop) {
      addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
    }
  }

  function handlePositionParam(container, position) {
    if (position in swalClasses) {
      addClass(container, swalClasses[position]);
    } else {
      warn('The "position" parameter is not valid, defaulting to "center"');
      addClass(container, swalClasses.center);
    }
  }

  function handleGrowParam(container, grow) {
    if (grow && typeof grow === 'string') {
      var growClass = "grow-".concat(grow);

      if (growClass in swalClasses) {
        addClass(container, swalClasses[growClass]);
      }
    }
  }

  var renderContainer = function renderContainer(instance, params) {
    var container = getContainer();

    if (!container) {
      return;
    }

    handleBackdropParam(container, params.backdrop);

    if (!params.backdrop && params.allowOutsideClick) {
      warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
    }

    handlePositionParam(container, params.position);
    handleGrowParam(container, params.grow); // Custom class

    applyCustomClass(container, params, 'container'); // Set queue step attribute for getQueueStep() method

    var queueStep = document.body.getAttribute('data-swal2-queue-step');

    if (queueStep) {
      container.setAttribute('data-queue-step', queueStep);
      document.body.removeAttribute('data-swal2-queue-step');
    }
  };

  /**
   * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateProps = {
    promise: new WeakMap(),
    innerParams: new WeakMap(),
    domCache: new WeakMap()
  };

  var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
  var renderInput = function renderInput(instance, params) {
    var content = getContent();
    var innerParams = privateProps.innerParams.get(instance);
    var rerender = !innerParams || params.input !== innerParams.input;
    inputTypes.forEach(function (inputType) {
      var inputClass = swalClasses[inputType];
      var inputContainer = getChildByClass(content, inputClass); // set attributes

      setAttributes(inputType, params.inputAttributes); // set class

      inputContainer.className = inputClass;

      if (rerender) {
        hide(inputContainer);
      }
    });

    if (params.input) {
      if (rerender) {
        showInput(params);
      } // set custom class


      setCustomClass(params);
    }
  };

  var showInput = function showInput(params) {
    if (!renderInputType[params.input]) {
      return error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(params.input, "\""));
    }

    var inputContainer = getInputContainer(params.input);
    var input = renderInputType[params.input](inputContainer, params);
    show(input); // input autofocus

    setTimeout(function () {
      focusInput(input);
    });
  };

  var removeAttributes = function removeAttributes(input) {
    for (var i = 0; i < input.attributes.length; i++) {
      var attrName = input.attributes[i].name;

      if (!(['type', 'value', 'style'].indexOf(attrName) !== -1)) {
        input.removeAttribute(attrName);
      }
    }
  };

  var setAttributes = function setAttributes(inputType, inputAttributes) {
    var input = getInput(getContent(), inputType);

    if (!input) {
      return;
    }

    removeAttributes(input);

    for (var attr in inputAttributes) {
      // Do not set a placeholder for <input type="range">
      // it'll crash Edge, #1298
      if (inputType === 'range' && attr === 'placeholder') {
        continue;
      }

      input.setAttribute(attr, inputAttributes[attr]);
    }
  };

  var setCustomClass = function setCustomClass(params) {
    var inputContainer = getInputContainer(params.input);

    if (params.customClass) {
      addClass(inputContainer, params.customClass.input);
    }
  };

  var setInputPlaceholder = function setInputPlaceholder(input, params) {
    if (!input.placeholder || params.inputPlaceholder) {
      input.placeholder = params.inputPlaceholder;
    }
  };

  var setInputLabel = function setInputLabel(input, prependTo, params) {
    if (params.inputLabel) {
      input.id = swalClasses.input;
      var label = document.createElement('label');
      var labelClass = swalClasses['input-label'];
      label.setAttribute('for', input.id);
      label.className = labelClass;
      label.innerText = params.inputLabel;
      prependTo.insertAdjacentElement('beforebegin', label);
    }
  };

  var getInputContainer = function getInputContainer(inputType) {
    var inputClass = swalClasses[inputType] ? swalClasses[inputType] : swalClasses.input;
    return getChildByClass(getContent(), inputClass);
  };

  var renderInputType = {};

  renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = function (input, params) {
    if (typeof params.inputValue === 'string' || typeof params.inputValue === 'number') {
      input.value = params.inputValue;
    } else if (!isPromise(params.inputValue)) {
      warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(_typeof(params.inputValue), "\""));
    }

    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    input.type = params.input;
    return input;
  };

  renderInputType.file = function (input, params) {
    setInputLabel(input, input, params);
    setInputPlaceholder(input, params);
    return input;
  };

  renderInputType.range = function (range, params) {
    var rangeInput = range.querySelector('input');
    var rangeOutput = range.querySelector('output');
    rangeInput.value = params.inputValue;
    rangeInput.type = params.input;
    rangeOutput.value = params.inputValue;
    setInputLabel(rangeInput, range, params);
    return range;
  };

  renderInputType.select = function (select, params) {
    select.textContent = '';

    if (params.inputPlaceholder) {
      var placeholder = document.createElement('option');
      setInnerHtml(placeholder, params.inputPlaceholder);
      placeholder.value = '';
      placeholder.disabled = true;
      placeholder.selected = true;
      select.appendChild(placeholder);
    }

    setInputLabel(select, select, params);
    return select;
  };

  renderInputType.radio = function (radio) {
    radio.textContent = '';
    return radio;
  };

  renderInputType.checkbox = function (checkboxContainer, params) {
    var checkbox = getInput(getContent(), 'checkbox');
    checkbox.value = 1;
    checkbox.id = swalClasses.checkbox;
    checkbox.checked = Boolean(params.inputValue);
    var label = checkboxContainer.querySelector('span');
    setInnerHtml(label, params.inputPlaceholder);
    return checkboxContainer;
  };

  renderInputType.textarea = function (textarea, params) {
    textarea.value = params.inputValue;
    setInputPlaceholder(textarea, params);
    setInputLabel(textarea, textarea, params);

    var getPadding = function getPadding(el) {
      return parseInt(window.getComputedStyle(el).paddingLeft) + parseInt(window.getComputedStyle(el).paddingRight);
    };

    if ('MutationObserver' in window) {
      // #1699
      var initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);

      var outputsize = function outputsize() {
        var contentWidth = textarea.offsetWidth + getPadding(getPopup()) + getPadding(getContent());

        if (contentWidth > initialPopupWidth) {
          getPopup().style.width = "".concat(contentWidth, "px");
        } else {
          getPopup().style.width = null;
        }
      };

      new MutationObserver(outputsize).observe(textarea, {
        attributes: true,
        attributeFilter: ['style']
      });
    }

    return textarea;
  };

  var renderContent = function renderContent(instance, params) {
    var content = getContent().querySelector("#".concat(swalClasses.content)); // Content as HTML

    if (params.html) {
      parseHtmlToContainer(params.html, content);
      show(content, 'block'); // Content as plain text
    } else if (params.text) {
      content.textContent = params.text;
      show(content, 'block'); // No content
    } else {
      hide(content);
    }

    renderInput(instance, params); // Custom class

    applyCustomClass(getContent(), params, 'content');
  };

  var renderFooter = function renderFooter(instance, params) {
    var footer = getFooter();
    toggle(footer, params.footer);

    if (params.footer) {
      parseHtmlToContainer(params.footer, footer);
    } // Custom class


    applyCustomClass(footer, params, 'footer');
  };

  var renderCloseButton = function renderCloseButton(instance, params) {
    var closeButton = getCloseButton();
    setInnerHtml(closeButton, params.closeButtonHtml); // Custom class

    applyCustomClass(closeButton, params, 'closeButton');
    toggle(closeButton, params.showCloseButton);
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
  };

  var renderIcon = function renderIcon(instance, params) {
    var innerParams = privateProps.innerParams.get(instance); // if the given icon already rendered, apply the styling without re-rendering the icon

    if (innerParams && params.icon === innerParams.icon && getIcon()) {
      applyStyles(getIcon(), params);
      return;
    }

    hideAllIcons();

    if (!params.icon) {
      return;
    }

    if (Object.keys(iconTypes).indexOf(params.icon) !== -1) {
      var icon = elementBySelector(".".concat(swalClasses.icon, ".").concat(iconTypes[params.icon]));
      show(icon); // Custom or default content

      setContent(icon, params);
      applyStyles(icon, params); // Animate icon

      addClass(icon, params.showClass.icon);
    } else {
      error("Unknown icon! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.icon, "\""));
    }
  };

  var hideAllIcons = function hideAllIcons() {
    var icons = getIcons();

    for (var i = 0; i < icons.length; i++) {
      hide(icons[i]);
    }
  };

  var applyStyles = function applyStyles(icon, params) {
    // Icon color
    setColor(icon, params); // Success icon background color

    adjustSuccessIconBackgoundColor(); // Custom class

    applyCustomClass(icon, params, 'icon');
  }; // Adjust success icon background color to match the popup background color


  var adjustSuccessIconBackgoundColor = function adjustSuccessIconBackgoundColor() {
    var popup = getPopup();
    var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
    var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');

    for (var i = 0; i < successIconParts.length; i++) {
      successIconParts[i].style.backgroundColor = popupBackgroundColor;
    }
  };

  var setContent = function setContent(icon, params) {
    icon.textContent = '';

    if (params.iconHtml) {
      setInnerHtml(icon, iconContent(params.iconHtml));
    } else if (params.icon === 'success') {
      setInnerHtml(icon, "\n      <div class=\"swal2-success-circular-line-left\"></div>\n      <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n      <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n      <div class=\"swal2-success-circular-line-right\"></div>\n    ");
    } else if (params.icon === 'error') {
      setInnerHtml(icon, "\n      <span class=\"swal2-x-mark\">\n        <span class=\"swal2-x-mark-line-left\"></span>\n        <span class=\"swal2-x-mark-line-right\"></span>\n      </span>\n    ");
    } else {
      var defaultIconHtml = {
        question: '?',
        warning: '!',
        info: 'i'
      };
      setInnerHtml(icon, iconContent(defaultIconHtml[params.icon]));
    }
  };

  var setColor = function setColor(icon, params) {
    if (!params.iconColor) {
      return;
    }

    icon.style.color = params.iconColor;
    icon.style.borderColor = params.iconColor;

    for (var _i = 0, _arr = ['.swal2-success-line-tip', '.swal2-success-line-long', '.swal2-x-mark-line-left', '.swal2-x-mark-line-right']; _i < _arr.length; _i++) {
      var sel = _arr[_i];
      setStyle(icon, sel, 'backgroundColor', params.iconColor);
    }

    setStyle(icon, '.swal2-success-ring', 'borderColor', params.iconColor);
  };

  var iconContent = function iconContent(content) {
    return "<div class=\"".concat(swalClasses['icon-content'], "\">").concat(content, "</div>");
  };

  var renderImage = function renderImage(instance, params) {
    var image = getImage();

    if (!params.imageUrl) {
      return hide(image);
    }

    show(image, ''); // Src, alt

    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt); // Width, height

    applyNumericalStyle(image, 'width', params.imageWidth);
    applyNumericalStyle(image, 'height', params.imageHeight); // Class

    image.className = swalClasses.image;
    applyCustomClass(image, params, 'image');
  };

  var currentSteps = [];
  /*
   * Global function for chaining sweetAlert popups
   */

  var queue = function queue(steps) {
    var Swal = this;
    currentSteps = steps;

    var resetAndResolve = function resetAndResolve(resolve, value) {
      currentSteps = [];
      resolve(value);
    };

    var queueResult = [];
    return new Promise(function (resolve) {
      (function step(i, callback) {
        if (i < currentSteps.length) {
          document.body.setAttribute('data-swal2-queue-step', i);
          Swal.fire(currentSteps[i]).then(function (result) {
            if (typeof result.value !== 'undefined') {
              queueResult.push(result.value);
              step(i + 1, callback);
            } else {
              resetAndResolve(resolve, {
                dismiss: result.dismiss
              });
            }
          });
        } else {
          resetAndResolve(resolve, {
            value: queueResult
          });
        }
      })(0);
    });
  };
  /*
   * Global function for getting the index of current popup in queue
   */

  var getQueueStep = function getQueueStep() {
    return getContainer() && getContainer().getAttribute('data-queue-step');
  };
  /*
   * Global function for inserting a popup to the queue
   */

  var insertQueueStep = function insertQueueStep(step, index) {
    if (index && index < currentSteps.length) {
      return currentSteps.splice(index, 0, step);
    }

    return currentSteps.push(step);
  };
  /*
   * Global function for deleting a popup from the queue
   */

  var deleteQueueStep = function deleteQueueStep(index) {
    if (typeof currentSteps[index] !== 'undefined') {
      currentSteps.splice(index, 1);
    }
  };

  var createStepElement = function createStepElement(step) {
    var stepEl = document.createElement('li');
    addClass(stepEl, swalClasses['progress-step']);
    setInnerHtml(stepEl, step);
    return stepEl;
  };

  var createLineElement = function createLineElement(params) {
    var lineEl = document.createElement('li');
    addClass(lineEl, swalClasses['progress-step-line']);

    if (params.progressStepsDistance) {
      lineEl.style.width = params.progressStepsDistance;
    }

    return lineEl;
  };

  var renderProgressSteps = function renderProgressSteps(instance, params) {
    var progressStepsContainer = getProgressSteps();

    if (!params.progressSteps || params.progressSteps.length === 0) {
      return hide(progressStepsContainer);
    }

    show(progressStepsContainer);
    progressStepsContainer.textContent = '';
    var currentProgressStep = parseInt(params.currentProgressStep === undefined ? getQueueStep() : params.currentProgressStep);

    if (currentProgressStep >= params.progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }

    params.progressSteps.forEach(function (step, index) {
      var stepEl = createStepElement(step);
      progressStepsContainer.appendChild(stepEl);

      if (index === currentProgressStep) {
        addClass(stepEl, swalClasses['active-progress-step']);
      }

      if (index !== params.progressSteps.length - 1) {
        var lineEl = createLineElement(params);
        progressStepsContainer.appendChild(lineEl);
      }
    });
  };

  var renderTitle = function renderTitle(instance, params) {
    var title = getTitle();
    toggle(title, params.title || params.titleText);

    if (params.title) {
      parseHtmlToContainer(params.title, title);
    }

    if (params.titleText) {
      title.innerText = params.titleText;
    } // Custom class


    applyCustomClass(title, params, 'title');
  };

  var renderHeader = function renderHeader(instance, params) {
    var header = getHeader(); // Custom class

    applyCustomClass(header, params, 'header'); // Progress steps

    renderProgressSteps(instance, params); // Icon

    renderIcon(instance, params); // Image

    renderImage(instance, params); // Title

    renderTitle(instance, params); // Close button

    renderCloseButton(instance, params);
  };

  var renderPopup = function renderPopup(instance, params) {
    var popup = getPopup(); // Width

    applyNumericalStyle(popup, 'width', params.width); // Padding

    applyNumericalStyle(popup, 'padding', params.padding); // Background

    if (params.background) {
      popup.style.background = params.background;
    } // Classes


    addClasses(popup, params);
  };

  var addClasses = function addClasses(popup, params) {
    // Default Class + showClass when updating Swal.update({})
    popup.className = "".concat(swalClasses.popup, " ").concat(isVisible(popup) ? params.showClass.popup : '');

    if (params.toast) {
      addClass([document.documentElement, document.body], swalClasses['toast-shown']);
      addClass(popup, swalClasses.toast);
    } else {
      addClass(popup, swalClasses.modal);
    } // Custom class


    applyCustomClass(popup, params, 'popup');

    if (typeof params.customClass === 'string') {
      addClass(popup, params.customClass);
    } // Icon class (#1842)


    if (params.icon) {
      addClass(popup, swalClasses["icon-".concat(params.icon)]);
    }
  };

  var render = function render(instance, params) {
    renderPopup(instance, params);
    renderContainer(instance, params);
    renderHeader(instance, params);
    renderContent(instance, params);
    renderActions(instance, params);
    renderFooter(instance, params);

    if (typeof params.didRender === 'function') {
      params.didRender(getPopup());
    } else if (typeof params.onRender === 'function') {
      params.onRender(getPopup()); // @deprecated
    }
  };

  /*
   * Global function to determine if SweetAlert2 popup is shown
   */

  var isVisible$1 = function isVisible$$1() {
    return isVisible(getPopup());
  };
  /*
   * Global function to click 'Confirm' button
   */

  var clickConfirm = function clickConfirm() {
    return getConfirmButton() && getConfirmButton().click();
  };
  /*
   * Global function to click 'Deny' button
   */

  var clickDeny = function clickDeny() {
    return getDenyButton() && getDenyButton().click();
  };
  /*
   * Global function to click 'Cancel' button
   */

  var clickCancel = function clickCancel() {
    return getCancelButton() && getCancelButton().click();
  };

  function fire() {
    var Swal = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _construct(Swal, args);
  }

  /**
   * Returns an extended version of `Swal` containing `params` as defaults.
   * Useful for reusing Swal configuration.
   *
   * For example:
   *
   * Before:
   * const textPromptOptions = { input: 'text', showCancelButton: true }
   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
   *
   * After:
   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
   * const {value: firstName} = await TextPrompt('What is your first name?')
   * const {value: lastName} = await TextPrompt('What is your last name?')
   *
   * @param mixinParams
   */
  function mixin(mixinParams) {
    var MixinSwal = /*#__PURE__*/function (_this) {
      _inherits(MixinSwal, _this);

      var _super = _createSuper(MixinSwal);

      function MixinSwal() {
        _classCallCheck(this, MixinSwal);

        return _super.apply(this, arguments);
      }

      _createClass(MixinSwal, [{
        key: "_main",
        value: function _main(params, prevMixinParams) {
          return _get(_getPrototypeOf(MixinSwal.prototype), "_main", this).call(this, params, _extends({}, prevMixinParams, mixinParams));
        }
      }]);

      return MixinSwal;
    }(this);

    return MixinSwal;
  }

  /**
   * Shows loader (spinner), this is useful with AJAX requests.
   * By default the loader be shown instead of the "Confirm" button.
   */

  var showLoading = function showLoading(buttonToReplace) {
    var popup = getPopup();

    if (!popup) {
      Swal.fire();
    }

    popup = getPopup();
    var actions = getActions();
    var loader = getLoader();

    if (!buttonToReplace && isVisible(getConfirmButton())) {
      buttonToReplace = getConfirmButton();
    }

    show(actions);

    if (buttonToReplace) {
      hide(buttonToReplace);
      loader.setAttribute('data-button-to-replace', buttonToReplace.className);
    }

    loader.parentNode.insertBefore(loader, buttonToReplace);
    addClass([popup, actions], swalClasses.loading);
    show(loader);
    popup.setAttribute('data-loading', true);
    popup.setAttribute('aria-busy', true);
    popup.focus();
  };

  var RESTORE_FOCUS_TIMEOUT = 100;

  var globalState = {};

  var focusPreviousActiveElement = function focusPreviousActiveElement() {
    if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
      globalState.previousActiveElement.focus();
      globalState.previousActiveElement = null;
    } else if (document.body) {
      document.body.focus();
    }
  }; // Restore previous active (focused) element


  var restoreActiveElement = function restoreActiveElement() {
    return new Promise(function (resolve) {
      var x = window.scrollX;
      var y = window.scrollY;
      globalState.restoreFocusTimeout = setTimeout(function () {
        focusPreviousActiveElement();
        resolve();
      }, RESTORE_FOCUS_TIMEOUT); // issues/900

      /* istanbul ignore if */

      if (typeof x !== 'undefined' && typeof y !== 'undefined') {
        // IE doesn't have scrollX/scrollY support
        window.scrollTo(x, y);
      }
    });
  };

  /**
   * If `timer` parameter is set, returns number of milliseconds of timer remained.
   * Otherwise, returns undefined.
   */

  var getTimerLeft = function getTimerLeft() {
    return globalState.timeout && globalState.timeout.getTimerLeft();
  };
  /**
   * Stop timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var stopTimer = function stopTimer() {
    if (globalState.timeout) {
      stopTimerProgressBar();
      return globalState.timeout.stop();
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var resumeTimer = function resumeTimer() {
    if (globalState.timeout) {
      var remaining = globalState.timeout.start();
      animateTimerProgressBar(remaining);
      return remaining;
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var toggleTimer = function toggleTimer() {
    var timer = globalState.timeout;
    return timer && (timer.running ? stopTimer() : resumeTimer());
  };
  /**
   * Increase timer. Returns number of milliseconds of an updated timer.
   * If `timer` parameter isn't set, returns undefined.
   */

  var increaseTimer = function increaseTimer(n) {
    if (globalState.timeout) {
      var remaining = globalState.timeout.increase(n);
      animateTimerProgressBar(remaining, true);
      return remaining;
    }
  };
  /**
   * Check if timer is running. Returns true if timer is running
   * or false if timer is paused or stopped.
   * If `timer` parameter isn't set, returns undefined
   */

  var isTimerRunning = function isTimerRunning() {
    return globalState.timeout && globalState.timeout.isRunning();
  };

  var bodyClickListenerAdded = false;
  var clickHandlers = {};
  function bindClickHandler() {
    var attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'data-swal-template';
    clickHandlers[attr] = this;

    if (!bodyClickListenerAdded) {
      document.body.addEventListener('click', bodyClickListener);
      bodyClickListenerAdded = true;
    }
  }

  var bodyClickListener = function bodyClickListener(event) {
    // 1. using .parentNode instead of event.path because of better support by old browsers https://stackoverflow.com/a/39245638
    // 2. using .parentNode instead of .parentElement because of IE11 + SVG https://stackoverflow.com/a/36270354
    for (var el = event.target; el && el !== document; el = el.parentNode) {
      for (var attr in clickHandlers) {
        var template = el.getAttribute(attr);

        if (template) {
          clickHandlers[attr].fire({
            template: template
          });
          return;
        }
      }
    }
  };

  var defaultParams = {
    title: '',
    titleText: '',
    text: '',
    html: '',
    footer: '',
    icon: undefined,
    iconColor: undefined,
    iconHtml: undefined,
    template: undefined,
    toast: false,
    animation: true,
    showClass: {
      popup: 'swal2-show',
      backdrop: 'swal2-backdrop-show',
      icon: 'swal2-icon-show'
    },
    hideClass: {
      popup: 'swal2-hide',
      backdrop: 'swal2-backdrop-hide',
      icon: 'swal2-icon-hide'
    },
    customClass: {},
    target: 'body',
    backdrop: true,
    heightAuto: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    stopKeydownPropagation: true,
    keydownListenerCapture: false,
    showConfirmButton: true,
    showDenyButton: false,
    showCancelButton: false,
    preConfirm: undefined,
    preDeny: undefined,
    confirmButtonText: 'OK',
    confirmButtonAriaLabel: '',
    confirmButtonColor: undefined,
    denyButtonText: 'No',
    denyButtonAriaLabel: '',
    denyButtonColor: undefined,
    cancelButtonText: 'Cancel',
    cancelButtonAriaLabel: '',
    cancelButtonColor: undefined,
    buttonsStyling: true,
    reverseButtons: false,
    focusConfirm: true,
    focusDeny: false,
    focusCancel: false,
    showCloseButton: false,
    closeButtonHtml: '&times;',
    closeButtonAriaLabel: 'Close this dialog',
    loaderHtml: '',
    showLoaderOnConfirm: false,
    imageUrl: undefined,
    imageWidth: undefined,
    imageHeight: undefined,
    imageAlt: '',
    timer: undefined,
    timerProgressBar: false,
    width: undefined,
    padding: undefined,
    background: undefined,
    input: undefined,
    inputPlaceholder: '',
    inputLabel: '',
    inputValue: '',
    inputOptions: {},
    inputAutoTrim: true,
    inputAttributes: {},
    inputValidator: undefined,
    returnInputValueOnDeny: false,
    validationMessage: undefined,
    grow: false,
    position: 'center',
    progressSteps: [],
    currentProgressStep: undefined,
    progressStepsDistance: undefined,
    onBeforeOpen: undefined,
    onOpen: undefined,
    willOpen: undefined,
    didOpen: undefined,
    onRender: undefined,
    didRender: undefined,
    onClose: undefined,
    onAfterClose: undefined,
    willClose: undefined,
    didClose: undefined,
    onDestroy: undefined,
    didDestroy: undefined,
    scrollbarPadding: true
  };
  var updatableParams = ['allowEscapeKey', 'allowOutsideClick', 'background', 'buttonsStyling', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonText', 'closeButtonAriaLabel', 'closeButtonHtml', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonText', 'currentProgressStep', 'customClass', 'denyButtonAriaLabel', 'denyButtonColor', 'denyButtonText', 'didClose', 'didDestroy', 'footer', 'hideClass', 'html', 'icon', 'iconColor', 'imageAlt', 'imageHeight', 'imageUrl', 'imageWidth', 'onAfterClose', 'onClose', 'onDestroy', 'progressSteps', 'reverseButtons', 'showCancelButton', 'showCloseButton', 'showConfirmButton', 'showDenyButton', 'text', 'title', 'titleText', 'willClose'];
  var deprecatedParams = {
    animation: 'showClass" and "hideClass',
    onBeforeOpen: 'willOpen',
    onOpen: 'didOpen',
    onRender: 'didRender',
    onClose: 'willClose',
    onAfterClose: 'didClose',
    onDestroy: 'didDestroy'
  };
  var toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusDeny', 'focusCancel', 'heightAuto', 'keydownListenerCapture'];
  /**
   * Is valid parameter
   * @param {String} paramName
   */

  var isValidParameter = function isValidParameter(paramName) {
    return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
  };
  /**
   * Is valid parameter for Swal.update() method
   * @param {String} paramName
   */

  var isUpdatableParameter = function isUpdatableParameter(paramName) {
    return updatableParams.indexOf(paramName) !== -1;
  };
  /**
   * Is deprecated parameter
   * @param {String} paramName
   */

  var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
    return deprecatedParams[paramName];
  };

  var checkIfParamIsValid = function checkIfParamIsValid(param) {
    if (!isValidParameter(param)) {
      warn("Unknown parameter \"".concat(param, "\""));
    }
  };

  var checkIfToastParamIsValid = function checkIfToastParamIsValid(param) {
    if (toastIncompatibleParams.indexOf(param) !== -1) {
      warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
    }
  };

  var checkIfParamIsDeprecated = function checkIfParamIsDeprecated(param) {
    if (isDeprecatedParameter(param)) {
      warnAboutDeprecation(param, isDeprecatedParameter(param));
    }
  };
  /**
   * Show relevant warnings for given params
   *
   * @param params
   */


  var showWarningsForParams = function showWarningsForParams(params) {
    for (var param in params) {
      checkIfParamIsValid(param);

      if (params.toast) {
        checkIfToastParamIsValid(param);
      }

      checkIfParamIsDeprecated(param);
    }
  };



  var staticMethods = /*#__PURE__*/Object.freeze({
    isValidParameter: isValidParameter,
    isUpdatableParameter: isUpdatableParameter,
    isDeprecatedParameter: isDeprecatedParameter,
    argsToParams: argsToParams,
    isVisible: isVisible$1,
    clickConfirm: clickConfirm,
    clickDeny: clickDeny,
    clickCancel: clickCancel,
    getContainer: getContainer,
    getPopup: getPopup,
    getTitle: getTitle,
    getContent: getContent,
    getHtmlContainer: getHtmlContainer,
    getImage: getImage,
    getIcon: getIcon,
    getIcons: getIcons,
    getInputLabel: getInputLabel,
    getCloseButton: getCloseButton,
    getActions: getActions,
    getConfirmButton: getConfirmButton,
    getDenyButton: getDenyButton,
    getCancelButton: getCancelButton,
    getLoader: getLoader,
    getHeader: getHeader,
    getFooter: getFooter,
    getTimerProgressBar: getTimerProgressBar,
    getFocusableElements: getFocusableElements,
    getValidationMessage: getValidationMessage,
    isLoading: isLoading,
    fire: fire,
    mixin: mixin,
    queue: queue,
    getQueueStep: getQueueStep,
    insertQueueStep: insertQueueStep,
    deleteQueueStep: deleteQueueStep,
    showLoading: showLoading,
    enableLoading: showLoading,
    getTimerLeft: getTimerLeft,
    stopTimer: stopTimer,
    resumeTimer: resumeTimer,
    toggleTimer: toggleTimer,
    increaseTimer: increaseTimer,
    isTimerRunning: isTimerRunning,
    bindClickHandler: bindClickHandler
  });

  /**
   * Hides loader and shows back the button which was hidden by .showLoading()
   */

  function hideLoading() {
    // do nothing if popup is closed
    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      return;
    }

    var domCache = privateProps.domCache.get(this);
    hide(domCache.loader);
    var buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute('data-button-to-replace'));

    if (buttonToReplace.length) {
      show(buttonToReplace[0], 'inline-block');
    } else if (allButtonsAreHidden()) {
      hide(domCache.actions);
    }

    removeClass([domCache.popup, domCache.actions], swalClasses.loading);
    domCache.popup.removeAttribute('aria-busy');
    domCache.popup.removeAttribute('data-loading');
    domCache.confirmButton.disabled = false;
    domCache.denyButton.disabled = false;
    domCache.cancelButton.disabled = false;
  }

  function getInput$1(instance) {
    var innerParams = privateProps.innerParams.get(instance || this);
    var domCache = privateProps.domCache.get(instance || this);

    if (!domCache) {
      return null;
    }

    return getInput(domCache.content, innerParams.input);
  }

  var fixScrollbar = function fixScrollbar() {
    // for queues, do not do this more than once
    if (states.previousBodyPadding !== null) {
      return;
    } // if the body has overflow


    if (document.body.scrollHeight > window.innerHeight) {
      // add padding so the content doesn't shift after removal of scrollbar
      states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
      document.body.style.paddingRight = "".concat(states.previousBodyPadding + measureScrollbar(), "px");
    }
  };
  var undoScrollbar = function undoScrollbar() {
    if (states.previousBodyPadding !== null) {
      document.body.style.paddingRight = "".concat(states.previousBodyPadding, "px");
      states.previousBodyPadding = null;
    }
  };

  /* istanbul ignore file */

  var iOSfix = function iOSfix() {
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;

    if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
      var offset = document.body.scrollTop;
      document.body.style.top = "".concat(offset * -1, "px");
      addClass(document.body, swalClasses.iosfix);
      lockBodyScroll();
      addBottomPaddingForTallPopups(); // #1948
    }
  };

  var addBottomPaddingForTallPopups = function addBottomPaddingForTallPopups() {
    var safari = !navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i);

    if (safari) {
      var bottomPanelHeight = 44;

      if (getPopup().scrollHeight > window.innerHeight - bottomPanelHeight) {
        getContainer().style.paddingBottom = "".concat(bottomPanelHeight, "px");
      }
    }
  };

  var lockBodyScroll = function lockBodyScroll() {
    // #1246
    var container = getContainer();
    var preventTouchMove;

    container.ontouchstart = function (e) {
      preventTouchMove = shouldPreventTouchMove(e);
    };

    container.ontouchmove = function (e) {
      if (preventTouchMove) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
  };

  var shouldPreventTouchMove = function shouldPreventTouchMove(event) {
    var target = event.target;
    var container = getContainer();

    if (isStylys(event) || isZoom(event)) {
      return false;
    }

    if (target === container) {
      return true;
    }

    if (!isScrollable(container) && target.tagName !== 'INPUT' && // #1603
    !(isScrollable(getContent()) && // #1944
    getContent().contains(target))) {
      return true;
    }

    return false;
  };

  var isStylys = function isStylys(event) {
    // #1786
    return event.touches && event.touches.length && event.touches[0].touchType === 'stylus';
  };

  var isZoom = function isZoom(event) {
    // #1891
    return event.touches && event.touches.length > 1;
  };

  var undoIOSfix = function undoIOSfix() {
    if (hasClass(document.body, swalClasses.iosfix)) {
      var offset = parseInt(document.body.style.top, 10);
      removeClass(document.body, swalClasses.iosfix);
      document.body.style.top = '';
      document.body.scrollTop = offset * -1;
    }
  };

  /* istanbul ignore file */

  var isIE11 = function isIE11() {
    return !!window.MSInputMethodContext && !!document.documentMode;
  }; // Fix IE11 centering sweetalert2/issues/933


  var fixVerticalPositionIE = function fixVerticalPositionIE() {
    var container = getContainer();
    var popup = getPopup();
    container.style.removeProperty('align-items');

    if (popup.offsetTop < 0) {
      container.style.alignItems = 'flex-start';
    }
  };

  var IEfix = function IEfix() {
    if (typeof window !== 'undefined' && isIE11()) {
      fixVerticalPositionIE();
      window.addEventListener('resize', fixVerticalPositionIE);
    }
  };
  var undoIEfix = function undoIEfix() {
    if (typeof window !== 'undefined' && isIE11()) {
      window.removeEventListener('resize', fixVerticalPositionIE);
    }
  };

  // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
  // elements not within the active modal dialog will not be surfaced if a user opens a screen
  // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

  var setAriaHidden = function setAriaHidden() {
    var bodyChildren = toArray(document.body.children);
    bodyChildren.forEach(function (el) {
      if (el === getContainer() || contains(el, getContainer())) {
        return;
      }

      if (el.hasAttribute('aria-hidden')) {
        el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
      }

      el.setAttribute('aria-hidden', 'true');
    });
  };
  var unsetAriaHidden = function unsetAriaHidden() {
    var bodyChildren = toArray(document.body.children);
    bodyChildren.forEach(function (el) {
      if (el.hasAttribute('data-previous-aria-hidden')) {
        el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
        el.removeAttribute('data-previous-aria-hidden');
      } else {
        el.removeAttribute('aria-hidden');
      }
    });
  };

  /**
   * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateMethods = {
    swalPromiseResolve: new WeakMap()
  };

  /*
   * Instance method to close sweetAlert
   */

  function removePopupAndResetState(instance, container, isToast$$1, didClose) {
    if (isToast$$1) {
      triggerDidCloseAndDispose(instance, didClose);
    } else {
      restoreActiveElement().then(function () {
        return triggerDidCloseAndDispose(instance, didClose);
      });
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    if (container.parentNode && !document.body.getAttribute('data-swal2-queue-step')) {
      container.parentNode.removeChild(container);
    }

    if (isModal()) {
      undoScrollbar();
      undoIOSfix();
      undoIEfix();
      unsetAriaHidden();
    }

    removeBodyClasses();
  }

  function removeBodyClasses() {
    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['toast-column']]);
  }

  function close(resolveValue) {
    var popup = getPopup();

    if (!popup) {
      return;
    }

    resolveValue = prepareResolveValue(resolveValue);
    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
      return;
    }

    var swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
    removeClass(popup, innerParams.showClass.popup);
    addClass(popup, innerParams.hideClass.popup);
    var backdrop = getContainer();
    removeClass(backdrop, innerParams.showClass.backdrop);
    addClass(backdrop, innerParams.hideClass.backdrop);
    handlePopupAnimation(this, popup, innerParams); // Resolve Swal promise

    swalPromiseResolve(resolveValue);
  }

  var prepareResolveValue = function prepareResolveValue(resolveValue) {
    // When user calls Swal.close()
    if (typeof resolveValue === 'undefined') {
      return {
        isConfirmed: false,
        isDenied: false,
        isDismissed: true
      };
    }

    return _extends({
      isConfirmed: false,
      isDenied: false,
      isDismissed: false
    }, resolveValue);
  };

  var handlePopupAnimation = function handlePopupAnimation(instance, popup, innerParams) {
    var container = getContainer(); // If animation is supported, animate

    var animationIsSupported = animationEndEvent && hasCssAnimation(popup);
    var onClose = innerParams.onClose,
        onAfterClose = innerParams.onAfterClose,
        willClose = innerParams.willClose,
        didClose = innerParams.didClose;
    runDidClose(popup, willClose, onClose);

    if (animationIsSupported) {
      animatePopup(instance, popup, container, didClose || onAfterClose);
    } else {
      // Otherwise, remove immediately
      removePopupAndResetState(instance, container, isToast(), didClose || onAfterClose);
    }
  };

  var runDidClose = function runDidClose(popup, willClose, onClose) {
    if (willClose !== null && typeof willClose === 'function') {
      willClose(popup);
    } else if (onClose !== null && typeof onClose === 'function') {
      onClose(popup); // @deprecated
    }
  };

  var animatePopup = function animatePopup(instance, popup, container, didClose) {
    globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, isToast(), didClose);
    popup.addEventListener(animationEndEvent, function (e) {
      if (e.target === popup) {
        globalState.swalCloseEventFinishedCallback();
        delete globalState.swalCloseEventFinishedCallback;
      }
    });
  };

  var triggerDidCloseAndDispose = function triggerDidCloseAndDispose(instance, didClose) {
    setTimeout(function () {
      if (typeof didClose === 'function') {
        didClose();
      }

      instance._destroy();
    });
  };

  function setButtonsDisabled(instance, buttons, disabled) {
    var domCache = privateProps.domCache.get(instance);
    buttons.forEach(function (button) {
      domCache[button].disabled = disabled;
    });
  }

  function setInputDisabled(input, disabled) {
    if (!input) {
      return false;
    }

    if (input.type === 'radio') {
      var radiosContainer = input.parentNode.parentNode;
      var radios = radiosContainer.querySelectorAll('input');

      for (var i = 0; i < radios.length; i++) {
        radios[i].disabled = disabled;
      }
    } else {
      input.disabled = disabled;
    }
  }

  function enableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], false);
  }
  function disableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], true);
  }
  function enableInput() {
    return setInputDisabled(this.getInput(), false);
  }
  function disableInput() {
    return setInputDisabled(this.getInput(), true);
  }

  function showValidationMessage(error) {
    var domCache = privateProps.domCache.get(this);
    var params = privateProps.innerParams.get(this);
    setInnerHtml(domCache.validationMessage, error);
    domCache.validationMessage.className = swalClasses['validation-message'];

    if (params.customClass && params.customClass.validationMessage) {
      addClass(domCache.validationMessage, params.customClass.validationMessage);
    }

    show(domCache.validationMessage);
    var input = this.getInput();

    if (input) {
      input.setAttribute('aria-invalid', true);
      input.setAttribute('aria-describedBy', swalClasses['validation-message']);
      focusInput(input);
      addClass(input, swalClasses.inputerror);
    }
  } // Hide block with validation message

  function resetValidationMessage$1() {
    var domCache = privateProps.domCache.get(this);

    if (domCache.validationMessage) {
      hide(domCache.validationMessage);
    }

    var input = this.getInput();

    if (input) {
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedBy');
      removeClass(input, swalClasses.inputerror);
    }
  }

  function getProgressSteps$1() {
    var domCache = privateProps.domCache.get(this);
    return domCache.progressSteps;
  }

  var Timer = /*#__PURE__*/function () {
    function Timer(callback, delay) {
      _classCallCheck(this, Timer);

      this.callback = callback;
      this.remaining = delay;
      this.running = false;
      this.start();
    }

    _createClass(Timer, [{
      key: "start",
      value: function start() {
        if (!this.running) {
          this.running = true;
          this.started = new Date();
          this.id = setTimeout(this.callback, this.remaining);
        }

        return this.remaining;
      }
    }, {
      key: "stop",
      value: function stop() {
        if (this.running) {
          this.running = false;
          clearTimeout(this.id);
          this.remaining -= new Date() - this.started;
        }

        return this.remaining;
      }
    }, {
      key: "increase",
      value: function increase(n) {
        var running = this.running;

        if (running) {
          this.stop();
        }

        this.remaining += n;

        if (running) {
          this.start();
        }

        return this.remaining;
      }
    }, {
      key: "getTimerLeft",
      value: function getTimerLeft() {
        if (this.running) {
          this.stop();
          this.start();
        }

        return this.remaining;
      }
    }, {
      key: "isRunning",
      value: function isRunning() {
        return this.running;
      }
    }]);

    return Timer;
  }();

  var defaultInputValidators = {
    email: function email(string, validationMessage) {
      return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
    },
    url: function url(string, validationMessage) {
      // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
      return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
    }
  };

  function setDefaultInputValidators(params) {
    // Use default `inputValidator` for supported input types if not provided
    if (!params.inputValidator) {
      Object.keys(defaultInputValidators).forEach(function (key) {
        if (params.input === key) {
          params.inputValidator = defaultInputValidators[key];
        }
      });
    }
  }

  function validateCustomTargetElement(params) {
    // Determine if the custom target element is valid
    if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
      warn('Target parameter is not valid, defaulting to "body"');
      params.target = 'body';
    }
  }
  /**
   * Set type, text and actions on popup
   *
   * @param params
   * @returns {boolean}
   */


  function setParameters(params) {
    setDefaultInputValidators(params); // showLoaderOnConfirm && preConfirm

    if (params.showLoaderOnConfirm && !params.preConfirm) {
      warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
    } // params.animation will be actually used in renderPopup.js
    // but in case when params.animation is a function, we need to call that function
    // before popup (re)initialization, so it'll be possible to check Swal.isVisible()
    // inside the params.animation function


    params.animation = callIfFunction(params.animation);
    validateCustomTargetElement(params); // Replace newlines with <br> in title

    if (typeof params.title === 'string') {
      params.title = params.title.split('\n').join('<br />');
    }

    init(params);
  }

  var swalStringParams = ['swal-title', 'swal-html', 'swal-footer'];
  var getTemplateParams = function getTemplateParams(params) {
    var template = typeof params.template === 'string' ? document.querySelector(params.template) : params.template;

    if (!template) {
      return {};
    }

    var templateContent = template.content || template; // IE11

    showWarningsForElements(templateContent);

    var result = _extends(getSwalParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));

    return result;
  };

  var getSwalParams = function getSwalParams(templateContent) {
    var result = {};
    toArray(templateContent.querySelectorAll('swal-param')).forEach(function (param) {
      showWarningsForAttributes(param, ['name', 'value']);
      var paramName = param.getAttribute('name');
      var value = param.getAttribute('value');

      if (typeof defaultParams[paramName] === 'boolean' && value === 'false') {
        value = false;
      }

      if (_typeof(defaultParams[paramName]) === 'object') {
        value = JSON.parse(value);
      }

      result[paramName] = value;
    });
    return result;
  };

  var getSwalButtons = function getSwalButtons(templateContent) {
    var result = {};
    toArray(templateContent.querySelectorAll('swal-button')).forEach(function (button) {
      showWarningsForAttributes(button, ['type', 'color', 'aria-label']);
      var type = button.getAttribute('type');
      result["".concat(type, "ButtonText")] = button.innerHTML;
      result["show".concat(capitalizeFirstLetter(type), "Button")] = true;

      if (button.hasAttribute('color')) {
        result["".concat(type, "ButtonColor")] = button.getAttribute('color');
      }

      if (button.hasAttribute('aria-label')) {
        result["".concat(type, "ButtonAriaLabel")] = button.getAttribute('aria-label');
      }
    });
    return result;
  };

  var getSwalImage = function getSwalImage(templateContent) {
    var result = {};
    var image = templateContent.querySelector('swal-image');

    if (image) {
      showWarningsForAttributes(image, ['src', 'width', 'height', 'alt']);

      if (image.hasAttribute('src')) {
        result.imageUrl = image.getAttribute('src');
      }

      if (image.hasAttribute('width')) {
        result.imageWidth = image.getAttribute('width');
      }

      if (image.hasAttribute('height')) {
        result.imageHeight = image.getAttribute('height');
      }

      if (image.hasAttribute('alt')) {
        result.imageAlt = image.getAttribute('alt');
      }
    }

    return result;
  };

  var getSwalIcon = function getSwalIcon(templateContent) {
    var result = {};
    var icon = templateContent.querySelector('swal-icon');

    if (icon) {
      showWarningsForAttributes(icon, ['type', 'color']);

      if (icon.hasAttribute('type')) {
        result.icon = icon.getAttribute('type');
      }

      if (icon.hasAttribute('color')) {
        result.iconColor = icon.getAttribute('color');
      }

      result.iconHtml = icon.innerHTML;
    }

    return result;
  };

  var getSwalInput = function getSwalInput(templateContent) {
    var result = {};
    var input = templateContent.querySelector('swal-input');

    if (input) {
      showWarningsForAttributes(input, ['type', 'label', 'placeholder', 'value']);
      result.input = input.getAttribute('type') || 'text';

      if (input.hasAttribute('label')) {
        result.inputLabel = input.getAttribute('label');
      }

      if (input.hasAttribute('placeholder')) {
        result.inputPlaceholder = input.getAttribute('placeholder');
      }

      if (input.hasAttribute('value')) {
        result.inputValue = input.getAttribute('value');
      }
    }

    var inputOptions = templateContent.querySelectorAll('swal-input-option');

    if (inputOptions.length) {
      result.inputOptions = {};
      toArray(inputOptions).forEach(function (option) {
        showWarningsForAttributes(option, ['value']);
        var optionValue = option.getAttribute('value');
        var optionName = option.innerHTML;
        result.inputOptions[optionValue] = optionName;
      });
    }

    return result;
  };

  var getSwalStringParams = function getSwalStringParams(templateContent, paramNames) {
    var result = {};

    for (var i in paramNames) {
      var paramName = paramNames[i];
      var tag = templateContent.querySelector(paramName);

      if (tag) {
        showWarningsForAttributes(tag, []);
        result[paramName.replace(/^swal-/, '')] = tag.innerHTML;
      }
    }

    return result;
  };

  var showWarningsForElements = function showWarningsForElements(template) {
    var allowedElements = swalStringParams.concat(['swal-param', 'swal-button', 'swal-image', 'swal-icon', 'swal-input', 'swal-input-option']);
    toArray(template.querySelectorAll('*')).forEach(function (el) {
      var tagName = el.tagName.toLowerCase();

      if (allowedElements.indexOf(tagName) === -1) {
        warn("Unrecognized element <".concat(tagName, ">"));
      }
    });
  };

  var showWarningsForAttributes = function showWarningsForAttributes(el, allowedAttributes) {
    toArray(el.attributes).forEach(function (attribute) {
      if (allowedAttributes.indexOf(attribute.name) === -1) {
        warn(["Unrecognized attribute \"".concat(attribute.name, "\" on <").concat(el.tagName.toLowerCase(), ">."), "".concat(allowedAttributes.length ? "Allowed attributes are: ".concat(allowedAttributes.join(', ')) : 'To set the value, use HTML within the element.')]);
      }
    });
  };

  var SHOW_CLASS_TIMEOUT = 10;
  /**
   * Open popup, add necessary classes and styles, fix scrollbar
   *
   * @param params
   */

  var openPopup = function openPopup(params) {
    var container = getContainer();
    var popup = getPopup();

    if (typeof params.willOpen === 'function') {
      params.willOpen(popup);
    } else if (typeof params.onBeforeOpen === 'function') {
      params.onBeforeOpen(popup); // @deprecated
    }

    var bodyStyles = window.getComputedStyle(document.body);
    var initialBodyOverflow = bodyStyles.overflowY;
    addClasses$1(container, popup, params); // scrolling is 'hidden' until animation is done, after that 'auto'

    setTimeout(function () {
      setScrollingVisibility(container, popup);
    }, SHOW_CLASS_TIMEOUT);

    if (isModal()) {
      fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
      setAriaHidden();
    }

    if (!isToast() && !globalState.previousActiveElement) {
      globalState.previousActiveElement = document.activeElement;
    }

    runDidOpen(popup, params);
    removeClass(container, swalClasses['no-transition']);
  };

  var runDidOpen = function runDidOpen(popup, params) {
    if (typeof params.didOpen === 'function') {
      setTimeout(function () {
        return params.didOpen(popup);
      });
    } else if (typeof params.onOpen === 'function') {
      setTimeout(function () {
        return params.onOpen(popup);
      }); // @deprecated
    }
  };

  var swalOpenAnimationFinished = function swalOpenAnimationFinished(event) {
    var popup = getPopup();

    if (event.target !== popup) {
      return;
    }

    var container = getContainer();
    popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
    container.style.overflowY = 'auto';
  };

  var setScrollingVisibility = function setScrollingVisibility(container, popup) {
    if (animationEndEvent && hasCssAnimation(popup)) {
      container.style.overflowY = 'hidden';
      popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
    } else {
      container.style.overflowY = 'auto';
    }
  };

  var fixScrollContainer = function fixScrollContainer(container, scrollbarPadding, initialBodyOverflow) {
    iOSfix();
    IEfix();

    if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
      fixScrollbar();
    } // sweetalert2/issues/1247


    setTimeout(function () {
      container.scrollTop = 0;
    });
  };

  var addClasses$1 = function addClasses(container, popup, params) {
    addClass(container, params.showClass.backdrop); // the workaround with setting/unsetting opacity is needed for #2019 and 2059

    popup.style.setProperty('opacity', '0', 'important');
    show(popup);
    setTimeout(function () {
      // Animate popup right after showing it
      addClass(popup, params.showClass.popup); // and remove the opacity workaround

      popup.style.removeProperty('opacity');
    }, SHOW_CLASS_TIMEOUT); // 10ms in order to fix #2062

    addClass([document.documentElement, document.body], swalClasses.shown);

    if (params.heightAuto && params.backdrop && !params.toast) {
      addClass([document.documentElement, document.body], swalClasses['height-auto']);
    }
  };

  var handleInputOptionsAndValue = function handleInputOptionsAndValue(instance, params) {
    if (params.input === 'select' || params.input === 'radio') {
      handleInputOptions(instance, params);
    } else if (['text', 'email', 'number', 'tel', 'textarea'].indexOf(params.input) !== -1 && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
      handleInputValue(instance, params);
    }
  };
  var getInputValue = function getInputValue(instance, innerParams) {
    var input = instance.getInput();

    if (!input) {
      return null;
    }

    switch (innerParams.input) {
      case 'checkbox':
        return getCheckboxValue(input);

      case 'radio':
        return getRadioValue(input);

      case 'file':
        return getFileValue(input);

      default:
        return innerParams.inputAutoTrim ? input.value.trim() : input.value;
    }
  };

  var getCheckboxValue = function getCheckboxValue(input) {
    return input.checked ? 1 : 0;
  };

  var getRadioValue = function getRadioValue(input) {
    return input.checked ? input.value : null;
  };

  var getFileValue = function getFileValue(input) {
    return input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;
  };

  var handleInputOptions = function handleInputOptions(instance, params) {
    var content = getContent();

    var processInputOptions = function processInputOptions(inputOptions) {
      return populateInputOptions[params.input](content, formatInputOptions(inputOptions), params);
    };

    if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
      showLoading();
      asPromise(params.inputOptions).then(function (inputOptions) {
        instance.hideLoading();
        processInputOptions(inputOptions);
      });
    } else if (_typeof(params.inputOptions) === 'object') {
      processInputOptions(params.inputOptions);
    } else {
      error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(params.inputOptions)));
    }
  };

  var handleInputValue = function handleInputValue(instance, params) {
    var input = instance.getInput();
    hide(input);
    asPromise(params.inputValue).then(function (inputValue) {
      input.value = params.input === 'number' ? parseFloat(inputValue) || 0 : "".concat(inputValue);
      show(input);
      input.focus();
      instance.hideLoading();
    })["catch"](function (err) {
      error("Error in inputValue promise: ".concat(err));
      input.value = '';
      show(input);
      input.focus();
      instance.hideLoading();
    });
  };

  var populateInputOptions = {
    select: function select(content, inputOptions, params) {
      var select = getChildByClass(content, swalClasses.select);

      var renderOption = function renderOption(parent, optionLabel, optionValue) {
        var option = document.createElement('option');
        option.value = optionValue;
        setInnerHtml(option, optionLabel);
        option.selected = isSelected(optionValue, params.inputValue);
        parent.appendChild(option);
      };

      inputOptions.forEach(function (inputOption) {
        var optionValue = inputOption[0];
        var optionLabel = inputOption[1]; // <optgroup> spec:
        // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
        // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
        // check whether this is a <optgroup>

        if (Array.isArray(optionLabel)) {
          // if it is an array, then it is an <optgroup>
          var optgroup = document.createElement('optgroup');
          optgroup.label = optionValue;
          optgroup.disabled = false; // not configurable for now

          select.appendChild(optgroup);
          optionLabel.forEach(function (o) {
            return renderOption(optgroup, o[1], o[0]);
          });
        } else {
          // case of <option>
          renderOption(select, optionLabel, optionValue);
        }
      });
      select.focus();
    },
    radio: function radio(content, inputOptions, params) {
      var radio = getChildByClass(content, swalClasses.radio);
      inputOptions.forEach(function (inputOption) {
        var radioValue = inputOption[0];
        var radioLabel = inputOption[1];
        var radioInput = document.createElement('input');
        var radioLabelElement = document.createElement('label');
        radioInput.type = 'radio';
        radioInput.name = swalClasses.radio;
        radioInput.value = radioValue;

        if (isSelected(radioValue, params.inputValue)) {
          radioInput.checked = true;
        }

        var label = document.createElement('span');
        setInnerHtml(label, radioLabel);
        label.className = swalClasses.label;
        radioLabelElement.appendChild(radioInput);
        radioLabelElement.appendChild(label);
        radio.appendChild(radioLabelElement);
      });
      var radios = radio.querySelectorAll('input');

      if (radios.length) {
        radios[0].focus();
      }
    }
  };
  /**
   * Converts `inputOptions` into an array of `[value, label]`s
   * @param inputOptions
   */

  var formatInputOptions = function formatInputOptions(inputOptions) {
    var result = [];

    if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
      inputOptions.forEach(function (value, key) {
        var valueFormatted = value;

        if (_typeof(valueFormatted) === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    } else {
      Object.keys(inputOptions).forEach(function (key) {
        var valueFormatted = inputOptions[key];

        if (_typeof(valueFormatted) === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    }

    return result;
  };

  var isSelected = function isSelected(optionValue, inputValue) {
    return inputValue && inputValue.toString() === optionValue.toString();
  };

  var handleConfirmButtonClick = function handleConfirmButtonClick(instance, innerParams) {
    instance.disableButtons();

    if (innerParams.input) {
      handleConfirmOrDenyWithInput(instance, innerParams, 'confirm');
    } else {
      confirm(instance, innerParams, true);
    }
  };
  var handleDenyButtonClick = function handleDenyButtonClick(instance, innerParams) {
    instance.disableButtons();

    if (innerParams.returnInputValueOnDeny) {
      handleConfirmOrDenyWithInput(instance, innerParams, 'deny');
    } else {
      deny(instance, innerParams, false);
    }
  };
  var handleCancelButtonClick = function handleCancelButtonClick(instance, dismissWith) {
    instance.disableButtons();
    dismissWith(DismissReason.cancel);
  };

  var handleConfirmOrDenyWithInput = function handleConfirmOrDenyWithInput(instance, innerParams, type
  /* type is either 'confirm' or 'deny' */
  ) {
    var inputValue = getInputValue(instance, innerParams);

    if (innerParams.inputValidator) {
      handleInputValidator(instance, innerParams, inputValue);
    } else if (!instance.getInput().checkValidity()) {
      instance.enableButtons();
      instance.showValidationMessage(innerParams.validationMessage);
    } else if (type === 'deny') {
      deny(instance, innerParams, inputValue);
    } else {
      confirm(instance, innerParams, inputValue);
    }
  };

  var handleInputValidator = function handleInputValidator(instance, innerParams, inputValue) {
    instance.disableInput();
    var validationPromise = Promise.resolve().then(function () {
      return asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage));
    });
    validationPromise.then(function (validationMessage) {
      instance.enableButtons();
      instance.enableInput();

      if (validationMessage) {
        instance.showValidationMessage(validationMessage);
      } else {
        confirm(instance, innerParams, inputValue);
      }
    });
  };

  var deny = function deny(instance, innerParams, value) {
    if (innerParams.preDeny) {
      var preDenyPromise = Promise.resolve().then(function () {
        return asPromise(innerParams.preDeny(value, innerParams.validationMessage));
      });
      preDenyPromise.then(function (preDenyValue) {
        if (preDenyValue === false) {
          instance.hideLoading();
        } else {
          instance.closePopup({
            isDenied: true,
            value: typeof preDenyValue === 'undefined' ? value : preDenyValue
          });
        }
      });
    } else {
      instance.closePopup({
        isDenied: true,
        value: value
      });
    }
  };

  var succeedWith = function succeedWith(instance, value) {
    instance.closePopup({
      isConfirmed: true,
      value: value
    });
  };

  var confirm = function confirm(instance, innerParams, value) {
    if (innerParams.showLoaderOnConfirm) {
      showLoading(); // TODO: make showLoading an *instance* method
    }

    if (innerParams.preConfirm) {
      instance.resetValidationMessage();
      var preConfirmPromise = Promise.resolve().then(function () {
        return asPromise(innerParams.preConfirm(value, innerParams.validationMessage));
      });
      preConfirmPromise.then(function (preConfirmValue) {
        if (isVisible(getValidationMessage()) || preConfirmValue === false) {
          instance.hideLoading();
        } else {
          succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
        }
      });
    } else {
      succeedWith(instance, value);
    }
  };

  var addKeydownHandler = function addKeydownHandler(instance, globalState, innerParams, dismissWith) {
    if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    if (!innerParams.toast) {
      globalState.keydownHandler = function (e) {
        return keydownHandler(instance, e, dismissWith);
      };

      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = true;
    }
  }; // Focus handling

  var setFocus = function setFocus(innerParams, index, increment) {
    var focusableElements = getFocusableElements(); // search for visible elements and select the next possible match

    if (focusableElements.length) {
      index = index + increment; // rollover to first item

      if (index === focusableElements.length) {
        index = 0; // go to last item
      } else if (index === -1) {
        index = focusableElements.length - 1;
      }

      return focusableElements[index].focus();
    } // no visible focusable elements, focus the popup


    getPopup().focus();
  };
  var arrowKeysNextButton = ['ArrowRight', 'ArrowDown', 'Right', 'Down' // IE11
  ];
  var arrowKeysPreviousButton = ['ArrowLeft', 'ArrowUp', 'Left', 'Up' // IE11
  ];
  var escKeys = ['Escape', 'Esc' // IE11
  ];

  var keydownHandler = function keydownHandler(instance, e, dismissWith) {
    var innerParams = privateProps.innerParams.get(instance);

    if (innerParams.stopKeydownPropagation) {
      e.stopPropagation();
    } // ENTER


    if (e.key === 'Enter') {
      handleEnter(instance, e, innerParams); // TAB
    } else if (e.key === 'Tab') {
      handleTab(e, innerParams); // ARROWS - switch focus between buttons
    } else if ([].concat(arrowKeysNextButton, arrowKeysPreviousButton).indexOf(e.key) !== -1) {
      handleArrows(e.key); // ESC
    } else if (escKeys.indexOf(e.key) !== -1) {
      handleEsc(e, innerParams, dismissWith);
    }
  };

  var handleEnter = function handleEnter(instance, e, innerParams) {
    // #720 #721
    if (e.isComposing) {
      return;
    }

    if (e.target && instance.getInput() && e.target.outerHTML === instance.getInput().outerHTML) {
      if (['textarea', 'file'].indexOf(innerParams.input) !== -1) {
        return; // do not submit
      }

      clickConfirm();
      e.preventDefault();
    }
  };

  var handleTab = function handleTab(e, innerParams) {
    var targetElement = e.target;
    var focusableElements = getFocusableElements();
    var btnIndex = -1;

    for (var i = 0; i < focusableElements.length; i++) {
      if (targetElement === focusableElements[i]) {
        btnIndex = i;
        break;
      }
    }

    if (!e.shiftKey) {
      // Cycle to the next button
      setFocus(innerParams, btnIndex, 1);
    } else {
      // Cycle to the prev button
      setFocus(innerParams, btnIndex, -1);
    }

    e.stopPropagation();
    e.preventDefault();
  };

  var handleArrows = function handleArrows(key) {
    var confirmButton = getConfirmButton();
    var denyButton = getDenyButton();
    var cancelButton = getCancelButton();

    if (!([confirmButton, denyButton, cancelButton].indexOf(document.activeElement) !== -1)) {
      return;
    }

    var sibling = arrowKeysNextButton.indexOf(key) !== -1 ? 'nextElementSibling' : 'previousElementSibling';
    var buttonToFocus = document.activeElement[sibling];

    if (buttonToFocus) {
      buttonToFocus.focus();
    }
  };

  var handleEsc = function handleEsc(e, innerParams, dismissWith) {
    if (callIfFunction(innerParams.allowEscapeKey)) {
      e.preventDefault();
      dismissWith(DismissReason.esc);
    }
  };

  var handlePopupClick = function handlePopupClick(instance, domCache, dismissWith) {
    var innerParams = privateProps.innerParams.get(instance);

    if (innerParams.toast) {
      handleToastClick(instance, domCache, dismissWith);
    } else {
      // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider
      handleModalMousedown(domCache); // Ignore click events that had mousedown on the container but mouseup on the popup

      handleContainerMousedown(domCache);
      handleModalClick(instance, domCache, dismissWith);
    }
  };

  var handleToastClick = function handleToastClick(instance, domCache, dismissWith) {
    // Closing toast by internal click
    domCache.popup.onclick = function () {
      var innerParams = privateProps.innerParams.get(instance);

      if (innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton || innerParams.timer || innerParams.input) {
        return;
      }

      dismissWith(DismissReason.close);
    };
  };

  var ignoreOutsideClick = false;

  var handleModalMousedown = function handleModalMousedown(domCache) {
    domCache.popup.onmousedown = function () {
      domCache.container.onmouseup = function (e) {
        domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
        // have any other direct children aside of the popup

        if (e.target === domCache.container) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  var handleContainerMousedown = function handleContainerMousedown(domCache) {
    domCache.container.onmousedown = function () {
      domCache.popup.onmouseup = function (e) {
        domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

        if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  var handleModalClick = function handleModalClick(instance, domCache, dismissWith) {
    domCache.container.onclick = function (e) {
      var innerParams = privateProps.innerParams.get(instance);

      if (ignoreOutsideClick) {
        ignoreOutsideClick = false;
        return;
      }

      if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
        dismissWith(DismissReason.backdrop);
      }
    };
  };

  function _main(userParams) {
    var mixinParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    showWarningsForParams(_extends({}, mixinParams, userParams));

    if (globalState.currentInstance) {
      globalState.currentInstance._destroy();
    }

    globalState.currentInstance = this;
    var innerParams = prepareParams(userParams, mixinParams);
    setParameters(innerParams);
    Object.freeze(innerParams); // clear the previous timer

    if (globalState.timeout) {
      globalState.timeout.stop();
      delete globalState.timeout;
    } // clear the restore focus timeout


    clearTimeout(globalState.restoreFocusTimeout);
    var domCache = populateDomCache(this);
    render(this, innerParams);
    privateProps.innerParams.set(this, innerParams);
    return swalPromise(this, domCache, innerParams);
  }

  var prepareParams = function prepareParams(userParams, mixinParams) {
    var templateParams = getTemplateParams(userParams);

    var showClass = _extends({}, defaultParams.showClass, mixinParams.showClass, templateParams.showClass, userParams.showClass);

    var hideClass = _extends({}, defaultParams.hideClass, mixinParams.hideClass, templateParams.hideClass, userParams.hideClass);

    var params = _extends({}, defaultParams, mixinParams, templateParams, userParams); // precedence is described in #2131


    params.showClass = showClass;
    params.hideClass = hideClass; // @deprecated

    if (userParams.animation === false) {
      params.showClass = {
        popup: 'swal2-noanimation',
        backdrop: 'swal2-noanimation'
      };
      params.hideClass = {};
    }

    return params;
  };

  var swalPromise = function swalPromise(instance, domCache, innerParams) {
    return new Promise(function (resolve) {
      // functions to handle all closings/dismissals
      var dismissWith = function dismissWith(dismiss) {
        instance.closePopup({
          isDismissed: true,
          dismiss: dismiss
        });
      };

      privateMethods.swalPromiseResolve.set(instance, resolve);

      domCache.confirmButton.onclick = function () {
        return handleConfirmButtonClick(instance, innerParams);
      };

      domCache.denyButton.onclick = function () {
        return handleDenyButtonClick(instance, innerParams);
      };

      domCache.cancelButton.onclick = function () {
        return handleCancelButtonClick(instance, dismissWith);
      };

      domCache.closeButton.onclick = function () {
        return dismissWith(DismissReason.close);
      };

      handlePopupClick(instance, domCache, dismissWith);
      addKeydownHandler(instance, globalState, innerParams, dismissWith);

      if (innerParams.toast && (innerParams.input || innerParams.footer || innerParams.showCloseButton)) {
        addClass(document.body, swalClasses['toast-column']);
      } else {
        removeClass(document.body, swalClasses['toast-column']);
      }

      handleInputOptionsAndValue(instance, innerParams);
      openPopup(innerParams);
      setupTimer(globalState, innerParams, dismissWith);
      initFocus(domCache, innerParams); // Scroll container to top on open (#1247, #1946)

      setTimeout(function () {
        domCache.container.scrollTop = 0;
      });
    });
  };

  var populateDomCache = function populateDomCache(instance) {
    var domCache = {
      popup: getPopup(),
      container: getContainer(),
      content: getContent(),
      actions: getActions(),
      confirmButton: getConfirmButton(),
      denyButton: getDenyButton(),
      cancelButton: getCancelButton(),
      loader: getLoader(),
      closeButton: getCloseButton(),
      validationMessage: getValidationMessage(),
      progressSteps: getProgressSteps()
    };
    privateProps.domCache.set(instance, domCache);
    return domCache;
  };

  var setupTimer = function setupTimer(globalState$$1, innerParams, dismissWith) {
    var timerProgressBar = getTimerProgressBar();
    hide(timerProgressBar);

    if (innerParams.timer) {
      globalState$$1.timeout = new Timer(function () {
        dismissWith('timer');
        delete globalState$$1.timeout;
      }, innerParams.timer);

      if (innerParams.timerProgressBar) {
        show(timerProgressBar);
        setTimeout(function () {
          if (globalState$$1.timeout.running) {
            // timer can be already stopped at this point
            animateTimerProgressBar(innerParams.timer);
          }
        });
      }
    }
  };

  var initFocus = function initFocus(domCache, innerParams) {
    if (innerParams.toast) {
      return;
    }

    if (!callIfFunction(innerParams.allowEnterKey)) {
      return blurActiveElement();
    }

    if (!focusButton(domCache, innerParams)) {
      setFocus(innerParams, -1, 1);
    }
  };

  var focusButton = function focusButton(domCache, innerParams) {
    if (innerParams.focusDeny && isVisible(domCache.denyButton)) {
      domCache.denyButton.focus();
      return true;
    }

    if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
      domCache.cancelButton.focus();
      return true;
    }

    if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
      domCache.confirmButton.focus();
      return true;
    }

    return false;
  };

  var blurActiveElement = function blurActiveElement() {
    if (document.activeElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }
  };

  /**
   * Updates popup parameters.
   */

  function update(params) {
    var popup = getPopup();
    var innerParams = privateProps.innerParams.get(this);

    if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
      return warn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
    }

    var validUpdatableParams = {}; // assign valid params from `params` to `defaults`

    Object.keys(params).forEach(function (param) {
      if (Swal.isUpdatableParameter(param)) {
        validUpdatableParams[param] = params[param];
      } else {
        warn("Invalid parameter to update: \"".concat(param, "\". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md"));
      }
    });

    var updatedParams = _extends({}, innerParams, validUpdatableParams);

    render(this, updatedParams);
    privateProps.innerParams.set(this, updatedParams);
    Object.defineProperties(this, {
      params: {
        value: _extends({}, this.params, params),
        writable: false,
        enumerable: true
      }
    });
  }

  function _destroy() {
    var domCache = privateProps.domCache.get(this);
    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      return; // This instance has already been destroyed
    } // Check if there is another Swal closing


    if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
      globalState.swalCloseEventFinishedCallback();
      delete globalState.swalCloseEventFinishedCallback;
    } // Check if there is a swal disposal defer timer


    if (globalState.deferDisposalTimer) {
      clearTimeout(globalState.deferDisposalTimer);
      delete globalState.deferDisposalTimer;
    }

    runDidDestroy(innerParams);
    disposeSwal(this);
  }

  var runDidDestroy = function runDidDestroy(innerParams) {
    if (typeof innerParams.didDestroy === 'function') {
      innerParams.didDestroy();
    } else if (typeof innerParams.onDestroy === 'function') {
      innerParams.onDestroy(); // @deprecated
    }
  };

  var disposeSwal = function disposeSwal(instance) {
    // Unset this.params so GC will dispose it (#1569)
    delete instance.params; // Unset globalState props so GC will dispose globalState (#1569)

    delete globalState.keydownHandler;
    delete globalState.keydownTarget; // Unset WeakMaps so GC will be able to dispose them (#1569)

    unsetWeakMaps(privateProps);
    unsetWeakMaps(privateMethods);
  };

  var unsetWeakMaps = function unsetWeakMaps(obj) {
    for (var i in obj) {
      obj[i] = new WeakMap();
    }
  };



  var instanceMethods = /*#__PURE__*/Object.freeze({
    hideLoading: hideLoading,
    disableLoading: hideLoading,
    getInput: getInput$1,
    close: close,
    closePopup: close,
    closeModal: close,
    closeToast: close,
    enableButtons: enableButtons,
    disableButtons: disableButtons,
    enableInput: enableInput,
    disableInput: disableInput,
    showValidationMessage: showValidationMessage,
    resetValidationMessage: resetValidationMessage$1,
    getProgressSteps: getProgressSteps$1,
    _main: _main,
    update: update,
    _destroy: _destroy
  });

  var currentInstance;

  var SweetAlert = /*#__PURE__*/function () {
    function SweetAlert() {
      _classCallCheck(this, SweetAlert);

      // Prevent run in Node env
      if (typeof window === 'undefined') {
        return;
      } // Check for the existence of Promise


      if (typeof Promise === 'undefined') {
        error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
      }

      currentInstance = this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var outerParams = Object.freeze(this.constructor.argsToParams(args));
      Object.defineProperties(this, {
        params: {
          value: outerParams,
          writable: false,
          enumerable: true,
          configurable: true
        }
      });

      var promise = this._main(this.params);

      privateProps.promise.set(this, promise);
    } // `catch` cannot be the name of a module export, so we define our thenable methods here instead


    _createClass(SweetAlert, [{
      key: "then",
      value: function then(onFulfilled) {
        var promise = privateProps.promise.get(this);
        return promise.then(onFulfilled);
      }
    }, {
      key: "finally",
      value: function _finally(onFinally) {
        var promise = privateProps.promise.get(this);
        return promise["finally"](onFinally);
      }
    }]);

    return SweetAlert;
  }(); // Assign instance methods from src/instanceMethods/*.js to prototype


  _extends(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor


  _extends(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility


  Object.keys(instanceMethods).forEach(function (key) {
    SweetAlert[key] = function () {
      if (currentInstance) {
        var _currentInstance;

        return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
      }
    };
  });
  SweetAlert.DismissReason = DismissReason;
  SweetAlert.version = '10.12.6';

  var Swal = SweetAlert;
  Swal["default"] = Swal;

  return Swal;

}));
if (typeof this !== 'undefined' && this.Sweetalert2){  this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2}

"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,".swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;overflow-y:hidden;background:#fff;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{flex-direction:row;padding:0}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:static;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;padding:0;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{flex-basis:auto!important;width:auto;height:auto;margin:0 .3125em;padding:0}.swal2-popup.swal2-toast .swal2-styled{margin:.125em .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(100,150,200,.5)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-no-transition{transition:none!important}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-popup{display:none;position:relative;box-sizing:border-box;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border:none;border-radius:5px;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:flex;flex-direction:column;align-items:center;padding:0 1.8em}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;margin:1.25em auto 0;padding:0 1.6em}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#2778c4;color:#fff;font-size:1.0625em}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#d14529;color:#fff;font-size:1.0625em}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#757575;color:#fff;font-size:1.0625em}.swal2-styled:focus{outline:0;box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;height:.25em;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;z-index:2;top:0;right:0;align-items:center;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;transition:color .1s ease-out;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-content{z-index:1;justify-content:center;margin:0;padding:0 1.6em;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em auto}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em auto;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto}.swal2-validation-message{display:none;align-items:center;justify-content:center;margin:0 -2.7em;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent!important}body.swal2-no-backdrop .swal2-container>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-container.swal2-top{top:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-top-left,body.swal2-no-backdrop .swal2-container.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-top-end,body.swal2-no-backdrop .swal2-container.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-container.swal2-center{top:50%;left:50%;transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-left,body.swal2-no-backdrop .swal2-container.swal2-center-start{top:50%;left:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-end,body.swal2-no-backdrop .swal2-container.swal2-center-right{top:50%;right:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom{bottom:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom-left,body.swal2-no-backdrop .swal2-container.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-bottom-end,body.swal2-no-backdrop .swal2-container.swal2-bottom-right{right:0;bottom:0}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}");

/***/ }),

/***/ "./node_modules/tealight/dist/tealight.es.js":
/*!***************************************************!*\
  !*** ./node_modules/tealight/dist/tealight.es.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var is_dom_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-dom-node */ "./node_modules/is-dom-node/dist/is-dom-node.es.js");
/* harmony import */ var is_dom_node_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! is-dom-node-list */ "./node_modules/is-dom-node-list/dist/is-dom-node-list.es.js");
/*! @license Tealight v0.3.6

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/



function tealight(target, context) {
  if ( context === void 0 ) context = document;

  if (target instanceof Array) { return target.filter(is_dom_node__WEBPACK_IMPORTED_MODULE_0__["default"]); }
  if (Object(is_dom_node__WEBPACK_IMPORTED_MODULE_0__["default"])(target)) { return [target]; }
  if (Object(is_dom_node_list__WEBPACK_IMPORTED_MODULE_1__["default"])(target)) { return Array.prototype.slice.call(target); }
  if (typeof target === "string") {
    try {
      var query = context.querySelectorAll(target);
      return Array.prototype.slice.call(query);
    } catch (err) {
      return [];
    }
  }
  return [];
}

/* harmony default export */ __webpack_exports__["default"] = (tealight);


/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/addCSSRule.js":
/*!************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/addCSSRule.js ***!
  \************************************************************/
/*! exports provided: addCSSRule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCSSRule", function() { return addCSSRule; });
/* harmony import */ var _raf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./raf.js */ "./node_modules/tiny-slider/src/helpers/raf.js");
// cross browsers addRule method

function addCSSRule(sheet, selector, rules, index) {
  // return raf(function() {
    'insertRule' in sheet ?
      sheet.insertRule(selector + '{' + rules + '}', index) :
      sheet.addRule(selector, rules, index);
  // });
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/addClass.js":
/*!**********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/addClass.js ***!
  \**********************************************************/
/*! exports provided: addClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony import */ var _hasClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasClass.js */ "./node_modules/tiny-slider/src/helpers/hasClass.js");

var addClass = _hasClass_js__WEBPACK_IMPORTED_MODULE_0__["classListSupport"] ?
    function (el, str) {
      if (!Object(_hasClass_js__WEBPACK_IMPORTED_MODULE_0__["hasClass"])(el,  str)) { el.classList.add(str); }
    } :
    function (el, str) {
      if (!Object(_hasClass_js__WEBPACK_IMPORTED_MODULE_0__["hasClass"])(el,  str)) { el.className += ' ' + str; }
    };



/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/addEvents.js":
/*!***********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/addEvents.js ***!
  \***********************************************************/
/*! exports provided: addEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEvents", function() { return addEvents; });
/* harmony import */ var _passiveOption_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./passiveOption.js */ "./node_modules/tiny-slider/src/helpers/passiveOption.js");


function addEvents(el, obj, preventScrolling) {
  for (var prop in obj) {
    var option = ['touchstart', 'touchmove'].indexOf(prop) >= 0 && !preventScrolling ? _passiveOption_js__WEBPACK_IMPORTED_MODULE_0__["passiveOption"] : false;
    el.addEventListener(prop, obj[prop], option);
  }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/arrayFromNodeList.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/arrayFromNodeList.js ***!
  \*******************************************************************/
/*! exports provided: arrayFromNodeList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayFromNodeList", function() { return arrayFromNodeList; });
function arrayFromNodeList (nl) {
  var arr = [];
  for (var i = 0, l = nl.length; i < l; i++) {
    arr.push(nl[i]);
  }
  return arr;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/caf.js":
/*!*****************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/caf.js ***!
  \*****************************************************/
/*! exports provided: caf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caf", function() { return caf; });
var win = window;

var caf = win.cancelAnimationFrame
  || win.mozCancelAnimationFrame
  || function(id){ clearTimeout(id); };


/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/calc.js":
/*!******************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/calc.js ***!
  \******************************************************/
/*! exports provided: calc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calc", function() { return calc; });
/* harmony import */ var _getBody_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBody.js */ "./node_modules/tiny-slider/src/helpers/getBody.js");
/* harmony import */ var _setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setFakeBody.js */ "./node_modules/tiny-slider/src/helpers/setFakeBody.js");
/* harmony import */ var _resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resetFakeBody.js */ "./node_modules/tiny-slider/src/helpers/resetFakeBody.js");
// get css-calc 
// @return - false | calc | -webkit-calc | -moz-calc
// @usage - var calc = getCalc(); 




function calc() {
  var doc = document, 
      body = Object(_getBody_js__WEBPACK_IMPORTED_MODULE_0__["getBody"])(),
      docOverflow = Object(_setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__["setFakeBody"])(body),
      div = doc.createElement('div'), 
      result = false;

  body.appendChild(div);
  try {
    var str = '(10px * 10)',
        vals = ['calc' + str, '-moz-calc' + str, '-webkit-calc' + str],
        val;
    for (var i = 0; i < 3; i++) {
      val = vals[i];
      div.style.width = val;
      if (div.offsetWidth === 100) { 
        result = val.replace(str, ''); 
        break;
      }
    }
  } catch (e) {}
  
  body.fake ? Object(_resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__["resetFakeBody"])(body, docOverflow) : div.remove();

  return result;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/checkStorageValue.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/checkStorageValue.js ***!
  \*******************************************************************/
/*! exports provided: checkStorageValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkStorageValue", function() { return checkStorageValue; });
function checkStorageValue (value) {
  return ['true', 'false'].indexOf(value) >= 0 ? JSON.parse(value) : value;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/classListSupport.js":
/*!******************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/classListSupport.js ***!
  \******************************************************************/
/*! exports provided: classListSupport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classListSupport", function() { return classListSupport; });
var classListSupport = 'classList' in document.createElement('_');

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/createStyleSheet.js":
/*!******************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/createStyleSheet.js ***!
  \******************************************************************/
/*! exports provided: createStyleSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStyleSheet", function() { return createStyleSheet; });
// create and append style sheet
function createStyleSheet (media, nonce) {
  // Create the <style> tag
  var style = document.createElement("style");
  // style.setAttribute("type", "text/css");

  // Add a media (and/or media query) here if you'd like!
  // style.setAttribute("media", "screen")
  // style.setAttribute("media", "only screen and (max-width : 1024px)")
  if (media) { style.setAttribute("media", media); }

  // Add nonce attribute for Content Security Policy
  if (nonce) { style.setAttribute("nonce", nonce); }

  // WebKit hack :(
  // style.appendChild(document.createTextNode(""));

  // Add the <style> element to the page
  document.querySelector('head').appendChild(style);

  return style.sheet ? style.sheet : style.styleSheet;
};

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/docElement.js":
/*!************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/docElement.js ***!
  \************************************************************/
/*! exports provided: docElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "docElement", function() { return docElement; });
var docElement = document.documentElement;

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/events.js":
/*!********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/events.js ***!
  \********************************************************/
/*! exports provided: Events */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Events", function() { return Events; });
function Events() {
  return {
    topics: {},
    on: function (eventName, fn) {
      this.topics[eventName] = this.topics[eventName] || [];
      this.topics[eventName].push(fn);
    },
    off: function(eventName, fn) {
      if (this.topics[eventName]) {
        for (var i = 0; i < this.topics[eventName].length; i++) {
          if (this.topics[eventName][i] === fn) {
            this.topics[eventName].splice(i, 1);
            break;
          }
        }
      }
    },
    emit: function (eventName, data) {
      data.type = eventName;
      if (this.topics[eventName]) {
        this.topics[eventName].forEach(function(fn) {
          fn(data, eventName);
        });
      }
    }
  };
};

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/extend.js":
/*!********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/extend.js ***!
  \********************************************************/
/*! exports provided: extend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
function extend() {
  var obj, name, copy,
      target = arguments[0] || {},
      i = 1,
      length = arguments.length;

  for (; i < length; i++) {
    if ((obj = arguments[i]) !== null) {
      for (name in obj) {
        copy = obj[name];

        if (target === copy) {
          continue;
        } else if (copy !== undefined) {
          target[name] = copy;
        }
      }
    }
  }
  return target;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/forEach.js":
/*!*********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/forEach.js ***!
  \*********************************************************/
/*! exports provided: forEach */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
// https://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/
function forEach (arr, callback, scope) {
  for (var i = 0, l = arr.length; i < l; i++) {
    callback.call(scope, arr[i], i);
  }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/getAttr.js":
/*!*********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/getAttr.js ***!
  \*********************************************************/
/*! exports provided: getAttr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAttr", function() { return getAttr; });
function getAttr(el, attr) {
  return el.getAttribute(attr);
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/getBody.js":
/*!*********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/getBody.js ***!
  \*********************************************************/
/*! exports provided: getBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBody", function() { return getBody; });
function getBody () {
  var doc = document,
      body = doc.body;

  if (!body) {
    body = doc.createElement('body');
    body.fake = true;
  }

  return body;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/getCssRulesLength.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/getCssRulesLength.js ***!
  \*******************************************************************/
/*! exports provided: getCssRulesLength */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCssRulesLength", function() { return getCssRulesLength; });
function getCssRulesLength(sheet) {
  var rule = ('insertRule' in sheet) ? sheet.cssRules : sheet.rules;
  return rule.length;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/getEndProperty.js":
/*!****************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/getEndProperty.js ***!
  \****************************************************************/
/*! exports provided: getEndProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEndProperty", function() { return getEndProperty; });
// get transitionend, animationend based on transitionDuration
// @propin: string
// @propOut: string, first-letter uppercase
// Usage: getEndProperty('WebkitTransitionDuration', 'Transition') => webkitTransitionEnd
function getEndProperty(propIn, propOut) {
  var endProp = false;
  if (/^Webkit/.test(propIn)) {
    endProp = 'webkit' + propOut + 'End';
  } else if (/^O/.test(propIn)) {
    endProp = 'o' + propOut + 'End';
  } else if (propIn) {
    endProp = propOut.toLowerCase() + 'end';
  }
  return endProp;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/getSlideId.js":
/*!************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/getSlideId.js ***!
  \************************************************************/
/*! exports provided: getSlideId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSlideId", function() { return getSlideId; });
function getSlideId() {
  var id = window.tnsId;
  window.tnsId = !id ? 1 : id + 1;
  
  return 'tns' + window.tnsId;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/getTouchDirection.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/getTouchDirection.js ***!
  \*******************************************************************/
/*! exports provided: getTouchDirection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTouchDirection", function() { return getTouchDirection; });
function getTouchDirection(angle, range) {
  var direction = false,
      gap = Math.abs(90 - Math.abs(angle));
      
  if (gap >= 90 - range) {
    direction = 'horizontal';
  } else if (gap <= range) {
    direction = 'vertical';
  }

  return direction;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/has3DTransforms.js":
/*!*****************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/has3DTransforms.js ***!
  \*****************************************************************/
/*! exports provided: has3DTransforms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "has3DTransforms", function() { return has3DTransforms; });
/* harmony import */ var _getBody_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBody.js */ "./node_modules/tiny-slider/src/helpers/getBody.js");
/* harmony import */ var _setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setFakeBody.js */ "./node_modules/tiny-slider/src/helpers/setFakeBody.js");
/* harmony import */ var _resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resetFakeBody.js */ "./node_modules/tiny-slider/src/helpers/resetFakeBody.js");




function has3DTransforms(tf){
  if (!tf) { return false; }
  if (!window.getComputedStyle) { return false; }
  
  var doc = document,
      body = Object(_getBody_js__WEBPACK_IMPORTED_MODULE_0__["getBody"])(),
      docOverflow = Object(_setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__["setFakeBody"])(body),
      el = doc.createElement('p'),
      has3d,
      cssTF = tf.length > 9 ? '-' + tf.slice(0, -9).toLowerCase() + '-' : '';

  cssTF += 'transform';

  // Add it to the body to get the computed style
  body.insertBefore(el, null);

  el.style[tf] = 'translate3d(1px,1px,1px)';
  has3d = window.getComputedStyle(el).getPropertyValue(cssTF);

  body.fake ? Object(_resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__["resetFakeBody"])(body, docOverflow) : el.remove();

  return (has3d !== undefined && has3d.length > 0 && has3d !== "none");
}


/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/hasAttr.js":
/*!*********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/hasAttr.js ***!
  \*********************************************************/
/*! exports provided: hasAttr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasAttr", function() { return hasAttr; });
function hasAttr(el, attr) {
  return el.hasAttribute(attr);
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/hasClass.js":
/*!**********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/hasClass.js ***!
  \**********************************************************/
/*! exports provided: classListSupport, hasClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasClass", function() { return hasClass; });
/* harmony import */ var _classListSupport_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classListSupport.js */ "./node_modules/tiny-slider/src/helpers/classListSupport.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "classListSupport", function() { return _classListSupport_js__WEBPACK_IMPORTED_MODULE_0__["classListSupport"]; });



var hasClass = _classListSupport_js__WEBPACK_IMPORTED_MODULE_0__["classListSupport"] ?
    function (el, str) { return el.classList.contains(str); } :
    function (el, str) { return el.className.indexOf(str) >= 0; };



/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/hideElement.js":
/*!*************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/hideElement.js ***!
  \*************************************************************/
/*! exports provided: hideElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideElement", function() { return hideElement; });
function hideElement(el, forceHide) {
  if (el.style.display !== 'none') { el.style.display = 'none'; }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/isNodeList.js":
/*!************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/isNodeList.js ***!
  \************************************************************/
/*! exports provided: isNodeList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNodeList", function() { return isNodeList; });
function isNodeList(el) {
  // Only NodeList has the "item()" function
  return typeof el.item !== "undefined"; 
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/isVisible.js":
/*!***********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/isVisible.js ***!
  \***********************************************************/
/*! exports provided: isVisible */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVisible", function() { return isVisible; });
function isVisible(el) {
  return window.getComputedStyle(el).display !== 'none';
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/jsTransform.js":
/*!*************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/jsTransform.js ***!
  \*************************************************************/
/*! exports provided: jsTransform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsTransform", function() { return jsTransform; });
function jsTransform(element, attr, prefix, postfix, to, duration, callback) {
  var tick = Math.min(duration, 10),
      unit = (to.indexOf('%') >= 0) ? '%' : 'px',
      to = to.replace(unit, ''),
      from = Number(element.style[attr].replace(prefix, '').replace(postfix, '').replace(unit, '')),
      positionTick = (to - from) / duration * tick,
      running;

  setTimeout(moveElement, tick);
  function moveElement() {
    duration -= tick;
    from += positionTick;
    element.style[attr] = prefix + from + unit + postfix;
    if (duration > 0) { 
      setTimeout(moveElement, tick); 
    } else {
      callback();
    }
  }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/mediaquerySupport.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/mediaquerySupport.js ***!
  \*******************************************************************/
/*! exports provided: mediaquerySupport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediaquerySupport", function() { return mediaquerySupport; });
/* harmony import */ var _getBody_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBody.js */ "./node_modules/tiny-slider/src/helpers/getBody.js");
/* harmony import */ var _setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setFakeBody.js */ "./node_modules/tiny-slider/src/helpers/setFakeBody.js");
/* harmony import */ var _resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resetFakeBody.js */ "./node_modules/tiny-slider/src/helpers/resetFakeBody.js");




function mediaquerySupport () {
  if (window.matchMedia || window.msMatchMedia) {
    return true;
  }
  
  var doc = document,
      body = Object(_getBody_js__WEBPACK_IMPORTED_MODULE_0__["getBody"])(),
      docOverflow = Object(_setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__["setFakeBody"])(body),
      div = doc.createElement('div'),
      style = doc.createElement('style'),
      rule = '@media all and (min-width:1px){.tns-mq-test{position:absolute}}',
      position;

  style.type = 'text/css';
  div.className = 'tns-mq-test';

  body.appendChild(style);
  body.appendChild(div);

  if (style.styleSheet) {
    style.styleSheet.cssText = rule;
  } else {
    style.appendChild(doc.createTextNode(rule));
  }

  position = window.getComputedStyle ? window.getComputedStyle(div).position : div.currentStyle['position'];

  body.fake ? Object(_resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__["resetFakeBody"])(body, docOverflow) : div.remove();

  return position === "absolute";
}


/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/passiveOption.js":
/*!***************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/passiveOption.js ***!
  \***************************************************************/
/*! exports provided: passiveOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passiveOption", function() { return passiveOption; });
// Test via a getter in the options object to see if the passive property is accessed
var supportsPassive = false;
try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function() {
      supportsPassive = true;
    }
  });
  window.addEventListener("test", null, opts);
} catch (e) {}
var passiveOption = supportsPassive ? { passive: true } : false;

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/percentageLayout.js":
/*!******************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/percentageLayout.js ***!
  \******************************************************************/
/*! exports provided: percentageLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "percentageLayout", function() { return percentageLayout; });
/* harmony import */ var _getBody_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBody.js */ "./node_modules/tiny-slider/src/helpers/getBody.js");
/* harmony import */ var _setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setFakeBody.js */ "./node_modules/tiny-slider/src/helpers/setFakeBody.js");
/* harmony import */ var _resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resetFakeBody.js */ "./node_modules/tiny-slider/src/helpers/resetFakeBody.js");
// get subpixel support value
// @return - boolean




function percentageLayout() {
  // check subpixel layout supporting
  var doc = document,
      body = Object(_getBody_js__WEBPACK_IMPORTED_MODULE_0__["getBody"])(),
      docOverflow = Object(_setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__["setFakeBody"])(body),
      wrapper = doc.createElement('div'),
      outer = doc.createElement('div'),
      str = '',
      count = 70,
      perPage = 3,
      supported = false;

  wrapper.className = "tns-t-subp2";
  outer.className = "tns-t-ct";

  for (var i = 0; i < count; i++) {
    str += '<div></div>';
  }

  outer.innerHTML = str;
  wrapper.appendChild(outer);
  body.appendChild(wrapper);

  supported = Math.abs(wrapper.getBoundingClientRect().left - outer.children[count - perPage].getBoundingClientRect().left) < 2;

  body.fake ? Object(_resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__["resetFakeBody"])(body, docOverflow) : wrapper.remove();

  return supported;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/raf.js":
/*!*****************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/raf.js ***!
  \*****************************************************/
/*! exports provided: raf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raf", function() { return raf; });
var win = window;

var raf = win.requestAnimationFrame
  || win.webkitRequestAnimationFrame
  || win.mozRequestAnimationFrame
  || win.msRequestAnimationFrame
  || function(cb) { return setTimeout(cb, 16); };


/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/removeAttrs.js":
/*!*************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/removeAttrs.js ***!
  \*************************************************************/
/*! exports provided: removeAttrs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAttrs", function() { return removeAttrs; });
/* harmony import */ var _isNodeList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isNodeList.js */ "./node_modules/tiny-slider/src/helpers/isNodeList.js");


function removeAttrs(els, attrs) {
  els = (Object(_isNodeList_js__WEBPACK_IMPORTED_MODULE_0__["isNodeList"])(els) || els instanceof Array) ? els : [els];
  attrs = (attrs instanceof Array) ? attrs : [attrs];

  var attrLength = attrs.length;
  for (var i = els.length; i--;) {
    for (var j = attrLength; j--;) {
      els[i].removeAttribute(attrs[j]);
    }
  }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/removeCSSRule.js":
/*!***************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/removeCSSRule.js ***!
  \***************************************************************/
/*! exports provided: removeCSSRule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCSSRule", function() { return removeCSSRule; });
/* harmony import */ var _raf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./raf.js */ "./node_modules/tiny-slider/src/helpers/raf.js");
// cross browsers addRule method

function removeCSSRule(sheet, index) {
  // return raf(function() {
    'deleteRule' in sheet ?
      sheet.deleteRule(index) :
      sheet.removeRule(index);
  // });
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/removeClass.js":
/*!*************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/removeClass.js ***!
  \*************************************************************/
/*! exports provided: removeClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return removeClass; });
/* harmony import */ var _hasClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasClass.js */ "./node_modules/tiny-slider/src/helpers/hasClass.js");

var removeClass = _hasClass_js__WEBPACK_IMPORTED_MODULE_0__["classListSupport"] ?
    function (el, str) {
      if (Object(_hasClass_js__WEBPACK_IMPORTED_MODULE_0__["hasClass"])(el,  str)) { el.classList.remove(str); }
    } :
    function (el, str) {
      if (Object(_hasClass_js__WEBPACK_IMPORTED_MODULE_0__["hasClass"])(el, str)) { el.className = el.className.replace(str, ''); }
    };



/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/removeEvents.js":
/*!**************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/removeEvents.js ***!
  \**************************************************************/
/*! exports provided: removeEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEvents", function() { return removeEvents; });
/* harmony import */ var _passiveOption_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./passiveOption.js */ "./node_modules/tiny-slider/src/helpers/passiveOption.js");


function removeEvents(el, obj) {
  for (var prop in obj) {
    var option = ['touchstart', 'touchmove'].indexOf(prop) >= 0 ? _passiveOption_js__WEBPACK_IMPORTED_MODULE_0__["passiveOption"] : false;
    el.removeEventListener(prop, obj[prop], option);
  }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/resetFakeBody.js":
/*!***************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/resetFakeBody.js ***!
  \***************************************************************/
/*! exports provided: resetFakeBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetFakeBody", function() { return resetFakeBody; });
/* harmony import */ var _docElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docElement.js */ "./node_modules/tiny-slider/src/helpers/docElement.js");


function resetFakeBody (body, docOverflow) {
  if (body.fake) {
    body.remove();
    _docElement_js__WEBPACK_IMPORTED_MODULE_0__["docElement"].style.overflow = docOverflow;
    // Trigger layout so kinetic scrolling isn't disabled in iOS6+
    // eslint-disable-next-line
    _docElement_js__WEBPACK_IMPORTED_MODULE_0__["docElement"].offsetHeight;
  }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/setAttrs.js":
/*!**********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/setAttrs.js ***!
  \**********************************************************/
/*! exports provided: setAttrs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAttrs", function() { return setAttrs; });
/* harmony import */ var _isNodeList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isNodeList.js */ "./node_modules/tiny-slider/src/helpers/isNodeList.js");


function setAttrs(els, attrs) {
  els = (Object(_isNodeList_js__WEBPACK_IMPORTED_MODULE_0__["isNodeList"])(els) || els instanceof Array) ? els : [els];
  if (Object.prototype.toString.call(attrs) !== '[object Object]') { return; }

  for (var i = els.length; i--;) {
    for(var key in attrs) {
      els[i].setAttribute(key, attrs[key]);
    }
  }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/setFakeBody.js":
/*!*************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/setFakeBody.js ***!
  \*************************************************************/
/*! exports provided: setFakeBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFakeBody", function() { return setFakeBody; });
/* harmony import */ var _docElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docElement.js */ "./node_modules/tiny-slider/src/helpers/docElement.js");


function setFakeBody (body) {
  var docOverflow = '';
  if (body.fake) {
    docOverflow = _docElement_js__WEBPACK_IMPORTED_MODULE_0__["docElement"].style.overflow;
    //avoid crashing IE8, if background image is used
    body.style.background = '';
    //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
    body.style.overflow = _docElement_js__WEBPACK_IMPORTED_MODULE_0__["docElement"].style.overflow = 'hidden';
    _docElement_js__WEBPACK_IMPORTED_MODULE_0__["docElement"].appendChild(body);
  }

  return docOverflow;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/setLocalStorage.js":
/*!*****************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/setLocalStorage.js ***!
  \*****************************************************************/
/*! exports provided: setLocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLocalStorage", function() { return setLocalStorage; });
function setLocalStorage(storage, key, value, access) {
  if (access) {
    try { storage.setItem(key, value); } catch (e) {}
  }
  return value;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/showElement.js":
/*!*************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/showElement.js ***!
  \*************************************************************/
/*! exports provided: showElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showElement", function() { return showElement; });
function showElement(el, forceHide) {
  if (el.style.display === 'none') { el.style.display = ''; }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/toDegree.js":
/*!**********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/toDegree.js ***!
  \**********************************************************/
/*! exports provided: toDegree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDegree", function() { return toDegree; });
function toDegree (y, x) {
  return Math.atan2(y, x) * (180 / Math.PI);
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/whichProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/whichProperty.js ***!
  \***************************************************************/
/*! exports provided: whichProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whichProperty", function() { return whichProperty; });
function whichProperty(props){
  if (typeof props === 'string') {
    var arr = [props],
        Props = props.charAt(0).toUpperCase() + props.substr(1),
        prefixes = ['Webkit', 'Moz', 'ms', 'O'];
        
    prefixes.forEach(function(prefix) {
      if (prefix !== 'ms' || props === 'transform') {
        arr.push(prefix + Props);
      }
    });

    props = arr;
  }

  var el = document.createElement('fakeelement'),
      len = props.length;
  for(var i = 0; i < props.length; i++){
    var prop = props[i];
    if( el.style[prop] !== undefined ){ return prop; }
  }

  return false; // explicit for ie9-
}


/***/ }),

/***/ "./node_modules/tiny-slider/src/tiny-slider.js":
/*!*****************************************************!*\
  !*** ./node_modules/tiny-slider/src/tiny-slider.js ***!
  \*****************************************************/
/*! exports provided: tns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tns", function() { return tns; });
/* harmony import */ var _helpers_raf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/raf.js */ "./node_modules/tiny-slider/src/helpers/raf.js");
/* harmony import */ var _helpers_caf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/caf.js */ "./node_modules/tiny-slider/src/helpers/caf.js");
/* harmony import */ var _helpers_extend_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/extend.js */ "./node_modules/tiny-slider/src/helpers/extend.js");
/* harmony import */ var _helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/checkStorageValue.js */ "./node_modules/tiny-slider/src/helpers/checkStorageValue.js");
/* harmony import */ var _helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/setLocalStorage.js */ "./node_modules/tiny-slider/src/helpers/setLocalStorage.js");
/* harmony import */ var _helpers_getSlideId_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/getSlideId.js */ "./node_modules/tiny-slider/src/helpers/getSlideId.js");
/* harmony import */ var _helpers_calc_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/calc.js */ "./node_modules/tiny-slider/src/helpers/calc.js");
/* harmony import */ var _helpers_percentageLayout_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers/percentageLayout.js */ "./node_modules/tiny-slider/src/helpers/percentageLayout.js");
/* harmony import */ var _helpers_mediaquerySupport_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpers/mediaquerySupport.js */ "./node_modules/tiny-slider/src/helpers/mediaquerySupport.js");
/* harmony import */ var _helpers_createStyleSheet_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers/createStyleSheet.js */ "./node_modules/tiny-slider/src/helpers/createStyleSheet.js");
/* harmony import */ var _helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./helpers/addCSSRule.js */ "./node_modules/tiny-slider/src/helpers/addCSSRule.js");
/* harmony import */ var _helpers_removeCSSRule_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helpers/removeCSSRule.js */ "./node_modules/tiny-slider/src/helpers/removeCSSRule.js");
/* harmony import */ var _helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./helpers/getCssRulesLength.js */ "./node_modules/tiny-slider/src/helpers/getCssRulesLength.js");
/* harmony import */ var _helpers_toDegree_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./helpers/toDegree.js */ "./node_modules/tiny-slider/src/helpers/toDegree.js");
/* harmony import */ var _helpers_getTouchDirection_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./helpers/getTouchDirection.js */ "./node_modules/tiny-slider/src/helpers/getTouchDirection.js");
/* harmony import */ var _helpers_forEach_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./helpers/forEach.js */ "./node_modules/tiny-slider/src/helpers/forEach.js");
/* harmony import */ var _helpers_hasClass_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./helpers/hasClass.js */ "./node_modules/tiny-slider/src/helpers/hasClass.js");
/* harmony import */ var _helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./helpers/addClass.js */ "./node_modules/tiny-slider/src/helpers/addClass.js");
/* harmony import */ var _helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./helpers/removeClass.js */ "./node_modules/tiny-slider/src/helpers/removeClass.js");
/* harmony import */ var _helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./helpers/hasAttr.js */ "./node_modules/tiny-slider/src/helpers/hasAttr.js");
/* harmony import */ var _helpers_getAttr_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./helpers/getAttr.js */ "./node_modules/tiny-slider/src/helpers/getAttr.js");
/* harmony import */ var _helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./helpers/setAttrs.js */ "./node_modules/tiny-slider/src/helpers/setAttrs.js");
/* harmony import */ var _helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./helpers/removeAttrs.js */ "./node_modules/tiny-slider/src/helpers/removeAttrs.js");
/* harmony import */ var _helpers_arrayFromNodeList_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./helpers/arrayFromNodeList.js */ "./node_modules/tiny-slider/src/helpers/arrayFromNodeList.js");
/* harmony import */ var _helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./helpers/hideElement.js */ "./node_modules/tiny-slider/src/helpers/hideElement.js");
/* harmony import */ var _helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./helpers/showElement.js */ "./node_modules/tiny-slider/src/helpers/showElement.js");
/* harmony import */ var _helpers_isVisible_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./helpers/isVisible.js */ "./node_modules/tiny-slider/src/helpers/isVisible.js");
/* harmony import */ var _helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./helpers/whichProperty.js */ "./node_modules/tiny-slider/src/helpers/whichProperty.js");
/* harmony import */ var _helpers_has3DTransforms_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./helpers/has3DTransforms.js */ "./node_modules/tiny-slider/src/helpers/has3DTransforms.js");
/* harmony import */ var _helpers_getEndProperty_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./helpers/getEndProperty.js */ "./node_modules/tiny-slider/src/helpers/getEndProperty.js");
/* harmony import */ var _helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./helpers/addEvents.js */ "./node_modules/tiny-slider/src/helpers/addEvents.js");
/* harmony import */ var _helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./helpers/removeEvents.js */ "./node_modules/tiny-slider/src/helpers/removeEvents.js");
/* harmony import */ var _helpers_events_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./helpers/events.js */ "./node_modules/tiny-slider/src/helpers/events.js");
/* harmony import */ var _helpers_jsTransform_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./helpers/jsTransform.js */ "./node_modules/tiny-slider/src/helpers/jsTransform.js");
// Object.keys
if (!Object.keys) {
  Object.keys = function(object) {
    var keys = [];
    for (var name in object) {
      if (Object.prototype.hasOwnProperty.call(object, name)) {
        keys.push(name);
      }
    }
    return keys;
  };
}

// ChildNode.remove
if(!("remove" in Element.prototype)){
  Element.prototype.remove = function(){
    if(this.parentNode) {
      this.parentNode.removeChild(this);
    }
  };
}




































var tns = function(options) {
  options = Object(_helpers_extend_js__WEBPACK_IMPORTED_MODULE_2__["extend"])({
    container: '.slider',
    mode: 'carousel',
    axis: 'horizontal',
    items: 1,
    gutter: 0,
    edgePadding: 0,
    fixedWidth: false,
    autoWidth: false,
    viewportMax: false,
    slideBy: 1,
    center: false,
    controls: true,
    controlsPosition: 'top',
    controlsText: ['prev', 'next'],
    controlsContainer: false,
    prevButton: false,
    nextButton: false,
    nav: true,
    navPosition: 'top',
    navContainer: false,
    navAsThumbnails: false,
    arrowKeys: false,
    speed: 300,
    autoplay: false,
    autoplayPosition: 'top',
    autoplayTimeout: 5000,
    autoplayDirection: 'forward',
    autoplayText: ['start', 'stop'],
    autoplayHoverPause: false,
    autoplayButton: false,
    autoplayButtonOutput: true,
    autoplayResetOnVisibility: true,
    animateIn: 'tns-fadeIn',
    animateOut: 'tns-fadeOut',
    animateNormal: 'tns-normal',
    animateDelay: false,
    loop: true,
    rewind: false,
    autoHeight: false,
    responsive: false,
    lazyload: false,
    lazyloadSelector: '.tns-lazy-img',
    touch: true,
    mouseDrag: false,
    swipeAngle: 15,
    nested: false,
    preventActionWhenRunning: false,
    preventScrollOnTouch: false,
    freezable: true,
    onInit: false,
    useLocalStorage: true,
    nonce: false
  }, options || {});

  var doc = document,
      win = window,
      KEYS = {
        ENTER: 13,
        SPACE: 32,
        LEFT: 37,
        RIGHT: 39
      },
      tnsStorage = {},
      localStorageAccess = options.useLocalStorage;

  if (localStorageAccess) {
    // check browser version and local storage access
    var browserInfo = navigator.userAgent;
    var uid = new Date;

    try {
      tnsStorage = win.localStorage;
      if (tnsStorage) {
        tnsStorage.setItem(uid, uid);
        localStorageAccess = tnsStorage.getItem(uid) == uid;
        tnsStorage.removeItem(uid);
      } else {
        localStorageAccess = false;
      }
      if (!localStorageAccess) { tnsStorage = {}; }
    } catch(e) {
      localStorageAccess = false;
    }

    if (localStorageAccess) {
      // remove storage when browser version changes
      if (tnsStorage['tnsApp'] && tnsStorage['tnsApp'] !== browserInfo) {
        ['tC', 'tPL', 'tMQ', 'tTf', 't3D', 'tTDu', 'tTDe', 'tADu', 'tADe', 'tTE', 'tAE'].forEach(function(item) { tnsStorage.removeItem(item); });
      }
      // update browserInfo
      localStorage['tnsApp'] = browserInfo;
    }
  }

  var CALC = tnsStorage['tC'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__["checkStorageValue"])(tnsStorage['tC']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__["setLocalStorage"])(tnsStorage, 'tC', Object(_helpers_calc_js__WEBPACK_IMPORTED_MODULE_6__["calc"])(), localStorageAccess),
      PERCENTAGELAYOUT = tnsStorage['tPL'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__["checkStorageValue"])(tnsStorage['tPL']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__["setLocalStorage"])(tnsStorage, 'tPL', Object(_helpers_percentageLayout_js__WEBPACK_IMPORTED_MODULE_7__["percentageLayout"])(), localStorageAccess),
      CSSMQ = tnsStorage['tMQ'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__["checkStorageValue"])(tnsStorage['tMQ']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__["setLocalStorage"])(tnsStorage, 'tMQ', Object(_helpers_mediaquerySupport_js__WEBPACK_IMPORTED_MODULE_8__["mediaquerySupport"])(), localStorageAccess),
      TRANSFORM = tnsStorage['tTf'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__["checkStorageValue"])(tnsStorage['tTf']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__["setLocalStorage"])(tnsStorage, 'tTf', Object(_helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_27__["whichProperty"])('transform'), localStorageAccess),
      HAS3DTRANSFORMS = tnsStorage['t3D'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__["checkStorageValue"])(tnsStorage['t3D']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__["setLocalStorage"])(tnsStorage, 't3D', Object(_helpers_has3DTransforms_js__WEBPACK_IMPORTED_MODULE_28__["has3DTransforms"])(TRANSFORM), localStorageAccess),
      TRANSITIONDURATION = tnsStorage['tTDu'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__["checkStorageValue"])(tnsStorage['tTDu']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__["setLocalStorage"])(tnsStorage, 'tTDu', Object(_helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_27__["whichProperty"])('transitionDuration'), localStorageAccess),
      TRANSITIONDELAY = tnsStorage['tTDe'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__["checkStorageValue"])(tnsStorage['tTDe']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__["setLocalStorage"])(tnsStorage, 'tTDe', Object(_helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_27__["whichProperty"])('transitionDelay'), localStorageAccess),
      ANIMATIONDURATION = tnsStorage['tADu'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__["checkStorageValue"])(tnsStorage['tADu']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__["setLocalStorage"])(tnsStorage, 'tADu', Object(_helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_27__["whichProperty"])('animationDuration'), localStorageAccess),
      ANIMATIONDELAY = tnsStorage['tADe'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__["checkStorageValue"])(tnsStorage['tADe']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__["setLocalStorage"])(tnsStorage, 'tADe', Object(_helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_27__["whichProperty"])('animationDelay'), localStorageAccess),
      TRANSITIONEND = tnsStorage['tTE'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__["checkStorageValue"])(tnsStorage['tTE']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__["setLocalStorage"])(tnsStorage, 'tTE', Object(_helpers_getEndProperty_js__WEBPACK_IMPORTED_MODULE_29__["getEndProperty"])(TRANSITIONDURATION, 'Transition'), localStorageAccess),
      ANIMATIONEND = tnsStorage['tAE'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_3__["checkStorageValue"])(tnsStorage['tAE']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_4__["setLocalStorage"])(tnsStorage, 'tAE', Object(_helpers_getEndProperty_js__WEBPACK_IMPORTED_MODULE_29__["getEndProperty"])(ANIMATIONDURATION, 'Animation'), localStorageAccess);

  // get element nodes from selectors
  var supportConsoleWarn = win.console && typeof win.console.warn === "function",
      tnsList = ['container', 'controlsContainer', 'prevButton', 'nextButton', 'navContainer', 'autoplayButton'],
      optionsElements = {};

  tnsList.forEach(function(item) {
    if (typeof options[item] === 'string') {
      var str = options[item],
          el = doc.querySelector(str);
      optionsElements[item] = str;

      if (el && el.nodeName) {
        options[item] = el;
      } else {
        if (supportConsoleWarn) { console.warn('Can\'t find', options[item]); }
        return;
      }
    }
  });

  // make sure at least 1 slide
  if (options.container.children.length < 1) {
    if (supportConsoleWarn) { console.warn('No slides found in', options.container); }
    return;
   }

  // update options
  var responsive = options.responsive,
      nested = options.nested,
      carousel = options.mode === 'carousel' ? true : false;

  if (responsive) {
    // apply responsive[0] to options and remove it
    if (0 in responsive) {
      options = Object(_helpers_extend_js__WEBPACK_IMPORTED_MODULE_2__["extend"])(options, responsive[0]);
      delete responsive[0];
    }

    var responsiveTem = {};
    for (var key in responsive) {
      var val = responsive[key];
      // update responsive
      // from: 300: 2
      // to:
      //   300: {
      //     items: 2
      //   }
      val = typeof val === 'number' ? {items: val} : val;
      responsiveTem[key] = val;
    }
    responsive = responsiveTem;
    responsiveTem = null;
  }

  // update options
  function updateOptions (obj) {
    for (var key in obj) {
      if (!carousel) {
        if (key === 'slideBy') { obj[key] = 'page'; }
        if (key === 'edgePadding') { obj[key] = false; }
        if (key === 'autoHeight') { obj[key] = false; }
      }

      // update responsive options
      if (key === 'responsive') { updateOptions(obj[key]); }
    }
  }
  if (!carousel) { updateOptions(options); }


  // === define and set variables ===
  if (!carousel) {
    options.axis = 'horizontal';
    options.slideBy = 'page';
    options.edgePadding = false;

    var animateIn = options.animateIn,
        animateOut = options.animateOut,
        animateDelay = options.animateDelay,
        animateNormal = options.animateNormal;
  }

  var horizontal = options.axis === 'horizontal' ? true : false,
      outerWrapper = doc.createElement('div'),
      innerWrapper = doc.createElement('div'),
      middleWrapper,
      container = options.container,
      containerParent = container.parentNode,
      containerHTML = container.outerHTML,
      slideItems = container.children,
      slideCount = slideItems.length,
      breakpointZone,
      windowWidth = getWindowWidth(),
      isOn = false;
  if (responsive) { setBreakpointZone(); }
  if (carousel) { container.className += ' tns-vpfix'; }

  // fixedWidth: viewport > rightBoundary > indexMax
  var autoWidth = options.autoWidth,
      fixedWidth = getOption('fixedWidth'),
      edgePadding = getOption('edgePadding'),
      gutter = getOption('gutter'),
      viewport = getViewportWidth(),
      center = getOption('center'),
      items = !autoWidth ? Math.floor(getOption('items')) : 1,
      slideBy = getOption('slideBy'),
      viewportMax = options.viewportMax || options.fixedWidthViewportWidth,
      arrowKeys = getOption('arrowKeys'),
      speed = getOption('speed'),
      rewind = options.rewind,
      loop = rewind ? false : options.loop,
      autoHeight = getOption('autoHeight'),
      controls = getOption('controls'),
      controlsText = getOption('controlsText'),
      nav = getOption('nav'),
      touch = getOption('touch'),
      mouseDrag = getOption('mouseDrag'),
      autoplay = getOption('autoplay'),
      autoplayTimeout = getOption('autoplayTimeout'),
      autoplayText = getOption('autoplayText'),
      autoplayHoverPause = getOption('autoplayHoverPause'),
      autoplayResetOnVisibility = getOption('autoplayResetOnVisibility'),
      sheet = Object(_helpers_createStyleSheet_js__WEBPACK_IMPORTED_MODULE_9__["createStyleSheet"])(null, getOption('nonce')),
      lazyload = options.lazyload,
      lazyloadSelector = options.lazyloadSelector,
      slidePositions, // collection of slide positions
      slideItemsOut = [],
      cloneCount = loop ? getCloneCountForLoop() : 0,
      slideCountNew = !carousel ? slideCount + cloneCount : slideCount + cloneCount * 2,
      hasRightDeadZone = (fixedWidth || autoWidth) && !loop ? true : false,
      rightBoundary = fixedWidth ? getRightBoundary() : null,
      updateIndexBeforeTransform = (!carousel || !loop) ? true : false,
      // transform
      transformAttr = horizontal ? 'left' : 'top',
      transformPrefix = '',
      transformPostfix = '',
      // index
      getIndexMax = (function () {
        if (fixedWidth) {
          return function() { return center && !loop ? slideCount - 1 : Math.ceil(- rightBoundary / (fixedWidth + gutter)); };
        } else if (autoWidth) {
          return function() {
            for (var i = 0; i < slideCountNew; i++) {
              if (slidePositions[i] >= - rightBoundary) { return i; }
            }
          };
        } else {
          return function() {
            if (center && carousel && !loop) {
              return slideCount - 1;
            } else {
              return loop || carousel ? Math.max(0, slideCountNew - Math.ceil(items)) : slideCountNew - 1;
            }
          };
        }
      })(),
      index = getStartIndex(getOption('startIndex')),
      indexCached = index,
      displayIndex = getCurrentSlide(),
      indexMin = 0,
      indexMax = !autoWidth ? getIndexMax() : null,
      // resize
      resizeTimer,
      preventActionWhenRunning = options.preventActionWhenRunning,
      swipeAngle = options.swipeAngle,
      moveDirectionExpected = swipeAngle ? '?' : true,
      running = false,
      onInit = options.onInit,
      events = new _helpers_events_js__WEBPACK_IMPORTED_MODULE_32__["Events"](),
      // id, class
      newContainerClasses = ' tns-slider tns-' + options.mode,
      slideId = container.id || Object(_helpers_getSlideId_js__WEBPACK_IMPORTED_MODULE_5__["getSlideId"])(),
      disable = getOption('disable'),
      disabled = false,
      freezable = options.freezable,
      freeze = freezable && !autoWidth ? getFreeze() : false,
      frozen = false,
      controlsEvents = {
        'click': onControlsClick,
        'keydown': onControlsKeydown
      },
      navEvents = {
        'click': onNavClick,
        'keydown': onNavKeydown
      },
      hoverEvents = {
        'mouseover': mouseoverPause,
        'mouseout': mouseoutRestart
      },
      visibilityEvent = {'visibilitychange': onVisibilityChange},
      docmentKeydownEvent = {'keydown': onDocumentKeydown},
      touchEvents = {
        'touchstart': onPanStart,
        'touchmove': onPanMove,
        'touchend': onPanEnd,
        'touchcancel': onPanEnd
      }, dragEvents = {
        'mousedown': onPanStart,
        'mousemove': onPanMove,
        'mouseup': onPanEnd,
        'mouseleave': onPanEnd
      },
      hasControls = hasOption('controls'),
      hasNav = hasOption('nav'),
      navAsThumbnails = autoWidth ? true : options.navAsThumbnails,
      hasAutoplay = hasOption('autoplay'),
      hasTouch = hasOption('touch'),
      hasMouseDrag = hasOption('mouseDrag'),
      slideActiveClass = 'tns-slide-active',
      slideClonedClass = 'tns-slide-cloned',
      imgCompleteClass = 'tns-complete',
      imgEvents = {
        'load': onImgLoaded,
        'error': onImgFailed
      },
      imgsComplete,
      liveregionCurrent,
      preventScroll = options.preventScrollOnTouch === 'force' ? true : false;

  // controls
  if (hasControls) {
    var controlsContainer = options.controlsContainer,
        controlsContainerHTML = options.controlsContainer ? options.controlsContainer.outerHTML : '',
        prevButton = options.prevButton,
        nextButton = options.nextButton,
        prevButtonHTML = options.prevButton ? options.prevButton.outerHTML : '',
        nextButtonHTML = options.nextButton ? options.nextButton.outerHTML : '',
        prevIsButton,
        nextIsButton;
  }

  // nav
  if (hasNav) {
    var navContainer = options.navContainer,
        navContainerHTML = options.navContainer ? options.navContainer.outerHTML : '',
        navItems,
        pages = autoWidth ? slideCount : getPages(),
        pagesCached = 0,
        navClicked = -1,
        navCurrentIndex = getCurrentNavIndex(),
        navCurrentIndexCached = navCurrentIndex,
        navActiveClass = 'tns-nav-active',
        navStr = 'Carousel Page ',
        navStrCurrent = ' (Current Slide)';
  }

  // autoplay
  if (hasAutoplay) {
    var autoplayDirection = options.autoplayDirection === 'forward' ? 1 : -1,
        autoplayButton = options.autoplayButton,
        autoplayButtonHTML = options.autoplayButton ? options.autoplayButton.outerHTML : '',
        autoplayHtmlStrings = ['<span class=\'tns-visually-hidden\'>', ' animation</span>'],
        autoplayTimer,
        animating,
        autoplayHoverPaused,
        autoplayUserPaused,
        autoplayVisibilityPaused;
  }

  if (hasTouch || hasMouseDrag) {
    var initPosition = {},
        lastPosition = {},
        translateInit,
        disX,
        disY,
        panStart = false,
        rafIndex,
        getDist = horizontal ?
          function(a, b) { return a.x - b.x; } :
          function(a, b) { return a.y - b.y; };
  }

  // disable slider when slidecount <= items
  if (!autoWidth) { resetVariblesWhenDisable(disable || freeze); }

  if (TRANSFORM) {
    transformAttr = TRANSFORM;
    transformPrefix = 'translate';

    if (HAS3DTRANSFORMS) {
      transformPrefix += horizontal ? '3d(' : '3d(0px, ';
      transformPostfix = horizontal ? ', 0px, 0px)' : ', 0px)';
    } else {
      transformPrefix += horizontal ? 'X(' : 'Y(';
      transformPostfix = ')';
    }

  }

  if (carousel) { container.className = container.className.replace('tns-vpfix', ''); }
  initStructure();
  initSheet();
  initSliderTransform();

  // === COMMON FUNCTIONS === //
  function resetVariblesWhenDisable (condition) {
    if (condition) {
      controls = nav = touch = mouseDrag = arrowKeys = autoplay = autoplayHoverPause = autoplayResetOnVisibility = false;
    }
  }

  function getCurrentSlide () {
    var tem = carousel ? index - cloneCount : index;
    while (tem < 0) { tem += slideCount; }
    return tem%slideCount + 1;
  }

  function getStartIndex (ind) {
    ind = ind ? Math.max(0, Math.min(loop ? slideCount - 1 : slideCount - items, ind)) : 0;
    return carousel ? ind + cloneCount : ind;
  }

  function getAbsIndex (i) {
    if (i == null) { i = index; }

    if (carousel) { i -= cloneCount; }
    while (i < 0) { i += slideCount; }

    return Math.floor(i%slideCount);
  }

  function getCurrentNavIndex () {
    var absIndex = getAbsIndex(),
        result;

    result = navAsThumbnails ? absIndex :
      fixedWidth || autoWidth ? Math.ceil((absIndex + 1) * pages / slideCount - 1) :
          Math.floor(absIndex / items);

    // set active nav to the last one when reaches the right edge
    if (!loop && carousel && index === indexMax) { result = pages - 1; }

    return result;
  }

  function getItemsMax () {
    // fixedWidth or autoWidth while viewportMax is not available
    if (autoWidth || (fixedWidth && !viewportMax)) {
      return slideCount - 1;
    // most cases
    } else {
      var str = fixedWidth ? 'fixedWidth' : 'items',
          arr = [];

      if (fixedWidth || options[str] < slideCount) { arr.push(options[str]); }

      if (responsive) {
        for (var bp in responsive) {
          var tem = responsive[bp][str];
          if (tem && (fixedWidth || tem < slideCount)) { arr.push(tem); }
        }
      }

      if (!arr.length) { arr.push(0); }

      return Math.ceil(fixedWidth ? viewportMax / Math.min.apply(null, arr) : Math.max.apply(null, arr));
    }
  }

  function getCloneCountForLoop () {
    var itemsMax = getItemsMax(),
        result = carousel ? Math.ceil((itemsMax * 5 - slideCount)/2) : (itemsMax * 4 - slideCount);
    result = Math.max(itemsMax, result);

    return hasOption('edgePadding') ? result + 1 : result;
  }

  function getWindowWidth () {
    return win.innerWidth || doc.documentElement.clientWidth || doc.body.clientWidth;
  }

  function getInsertPosition (pos) {
    return pos === 'top' ? 'afterbegin' : 'beforeend';
  }

  function getClientWidth (el) {
    if (el == null) { return; }
    var div = doc.createElement('div'), rect, width;
    el.appendChild(div);
    rect = div.getBoundingClientRect();
    width = rect.right - rect.left;
    div.remove();
    return width || getClientWidth(el.parentNode);
  }

  function getViewportWidth () {
    var gap = edgePadding ? edgePadding * 2 - gutter : 0;
    return getClientWidth(containerParent) - gap;
  }

  function hasOption (item) {
    if (options[item]) {
      return true;
    } else {
      if (responsive) {
        for (var bp in responsive) {
          if (responsive[bp][item]) { return true; }
        }
      }
      return false;
    }
  }

  // get option:
  // fixed width: viewport, fixedWidth, gutter => items
  // others: window width => all variables
  // all: items => slideBy
  function getOption (item, ww) {
    if (ww == null) { ww = windowWidth; }

    if (item === 'items' && fixedWidth) {
      return Math.floor((viewport + gutter) / (fixedWidth + gutter)) || 1;

    } else {
      var result = options[item];

      if (responsive) {
        for (var bp in responsive) {
          // bp: convert string to number
          if (ww >= parseInt(bp)) {
            if (item in responsive[bp]) { result = responsive[bp][item]; }
          }
        }
      }

      if (item === 'slideBy' && result === 'page') { result = getOption('items'); }
      if (!carousel && (item === 'slideBy' || item === 'items')) { result = Math.floor(result); }

      return result;
    }
  }

  function getSlideMarginLeft (i) {
    return CALC ?
      CALC + '(' + i * 100 + '% / ' + slideCountNew + ')' :
      i * 100 / slideCountNew + '%';
  }

  function getInnerWrapperStyles (edgePaddingTem, gutterTem, fixedWidthTem, speedTem, autoHeightBP) {
    var str = '';

    if (edgePaddingTem !== undefined) {
      var gap = edgePaddingTem;
      if (gutterTem) { gap -= gutterTem; }
      str = horizontal ?
        'margin: 0 ' + gap + 'px 0 ' + edgePaddingTem + 'px;' :
        'margin: ' + edgePaddingTem + 'px 0 ' + gap + 'px 0;';
    } else if (gutterTem && !fixedWidthTem) {
      var gutterTemUnit = '-' + gutterTem + 'px',
          dir = horizontal ? gutterTemUnit + ' 0 0' : '0 ' + gutterTemUnit + ' 0';
      str = 'margin: 0 ' + dir + ';'
    }

    if (!carousel && autoHeightBP && TRANSITIONDURATION && speedTem) { str += getTransitionDurationStyle(speedTem); }
    return str;
  }

  function getContainerWidth (fixedWidthTem, gutterTem, itemsTem) {
    if (fixedWidthTem) {
      return (fixedWidthTem + gutterTem) * slideCountNew + 'px';
    } else {
      return CALC ?
        CALC + '(' + slideCountNew * 100 + '% / ' + itemsTem + ')' :
        slideCountNew * 100 / itemsTem + '%';
    }
  }

  function getSlideWidthStyle (fixedWidthTem, gutterTem, itemsTem) {
    var width;

    if (fixedWidthTem) {
      width = (fixedWidthTem + gutterTem) + 'px';
    } else {
      if (!carousel) { itemsTem = Math.floor(itemsTem); }
      var dividend = carousel ? slideCountNew : itemsTem;
      width = CALC ?
        CALC + '(100% / ' + dividend + ')' :
        100 / dividend + '%';
    }

    width = 'width:' + width;

    // inner slider: overwrite outer slider styles
    return nested !== 'inner' ? width + ';' : width + ' !important;';
  }

  function getSlideGutterStyle (gutterTem) {
    var str = '';

    // gutter maybe interger || 0
    // so can't use 'if (gutter)'
    if (gutterTem !== false) {
      var prop = horizontal ? 'padding-' : 'margin-',
          dir = horizontal ? 'right' : 'bottom';
      str = prop +  dir + ': ' + gutterTem + 'px;';
    }

    return str;
  }

  function getCSSPrefix (name, num) {
    var prefix = name.substring(0, name.length - num).toLowerCase();
    if (prefix) { prefix = '-' + prefix + '-'; }

    return prefix;
  }

  function getTransitionDurationStyle (speed) {
    return getCSSPrefix(TRANSITIONDURATION, 18) + 'transition-duration:' + speed / 1000 + 's;';
  }

  function getAnimationDurationStyle (speed) {
    return getCSSPrefix(ANIMATIONDURATION, 17) + 'animation-duration:' + speed / 1000 + 's;';
  }

  function initStructure () {
    var classOuter = 'tns-outer',
        classInner = 'tns-inner',
        hasGutter = hasOption('gutter');

    outerWrapper.className = classOuter;
    innerWrapper.className = classInner;
    outerWrapper.id = slideId + '-ow';
    innerWrapper.id = slideId + '-iw';

    // set container properties
    if (container.id === '') { container.id = slideId; }
    newContainerClasses += PERCENTAGELAYOUT || autoWidth ? ' tns-subpixel' : ' tns-no-subpixel';
    newContainerClasses += CALC ? ' tns-calc' : ' tns-no-calc';
    if (autoWidth) { newContainerClasses += ' tns-autowidth'; }
    newContainerClasses += ' tns-' + options.axis;
    container.className += newContainerClasses;

    // add constrain layer for carousel
    if (carousel) {
      middleWrapper = doc.createElement('div');
      middleWrapper.id = slideId + '-mw';
      middleWrapper.className = 'tns-ovh';

      outerWrapper.appendChild(middleWrapper);
      middleWrapper.appendChild(innerWrapper);
    } else {
      outerWrapper.appendChild(innerWrapper);
    }

    if (autoHeight) {
      var wp = middleWrapper ? middleWrapper : innerWrapper;
      wp.className += ' tns-ah';
    }

    containerParent.insertBefore(outerWrapper, container);
    innerWrapper.appendChild(container);

    // add id, class, aria attributes
    // before clone slides
    Object(_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_15__["forEach"])(slideItems, function(item, i) {
      Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__["addClass"])(item, 'tns-item');
      if (!item.id) { item.id = slideId + '-item' + i; }
      if (!carousel && animateNormal) { Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__["addClass"])(item, animateNormal); }
      Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__["setAttrs"])(item, {
        'aria-hidden': 'true',
        'tabindex': '-1'
      });
    });

    // ## clone slides
    // carousel: n + slides + n
    // gallery:      slides + n
    if (cloneCount) {
      var fragmentBefore = doc.createDocumentFragment(),
          fragmentAfter = doc.createDocumentFragment();

      for (var j = cloneCount; j--;) {
        var num = j%slideCount,
            cloneFirst = slideItems[num].cloneNode(true);
        Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__["addClass"])(cloneFirst, slideClonedClass);
        Object(_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_22__["removeAttrs"])(cloneFirst, 'id');
        fragmentAfter.insertBefore(cloneFirst, fragmentAfter.firstChild);

        if (carousel) {
          var cloneLast = slideItems[slideCount - 1 - num].cloneNode(true);
          Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__["addClass"])(cloneLast, slideClonedClass);
          Object(_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_22__["removeAttrs"])(cloneLast, 'id');
          fragmentBefore.appendChild(cloneLast);
        }
      }

      container.insertBefore(fragmentBefore, container.firstChild);
      container.appendChild(fragmentAfter);
      slideItems = container.children;
    }

  }

  function initSliderTransform () {
    // ## images loaded/failed
    if (hasOption('autoHeight') || autoWidth || !horizontal) {
      var imgs = container.querySelectorAll('img');

      // add img load event listener
      Object(_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_15__["forEach"])(imgs, function(img) {
        var src = img.src;

        if (!lazyload) {
          // not data img
          if (src && src.indexOf('data:image') < 0) {
            img.src = '';
            Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__["addEvents"])(img, imgEvents);
            Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__["addClass"])(img, 'loading');

            img.src = src;
          // data img
          } else {
            imgLoaded(img);
          }
        }
      });

      // set imgsComplete
      Object(_helpers_raf_js__WEBPACK_IMPORTED_MODULE_0__["raf"])(function(){ imgsLoadedCheck(Object(_helpers_arrayFromNodeList_js__WEBPACK_IMPORTED_MODULE_23__["arrayFromNodeList"])(imgs), function() { imgsComplete = true; }); });

      // reset imgs for auto height: check visible imgs only
      if (hasOption('autoHeight')) { imgs = getImageArray(index, Math.min(index + items - 1, slideCountNew - 1)); }

      lazyload ? initSliderTransformStyleCheck() : Object(_helpers_raf_js__WEBPACK_IMPORTED_MODULE_0__["raf"])(function(){ imgsLoadedCheck(Object(_helpers_arrayFromNodeList_js__WEBPACK_IMPORTED_MODULE_23__["arrayFromNodeList"])(imgs), initSliderTransformStyleCheck); });

    } else {
      // set container transform property
      if (carousel) { doContainerTransformSilent(); }

      // update slider tools and events
      initTools();
      initEvents();
    }
  }

  function initSliderTransformStyleCheck () {
    if (autoWidth && slideCount > 1) {
      // check styles application
      var num = loop ? index : slideCount - 1;

      (function stylesApplicationCheck() {
        var left = slideItems[num].getBoundingClientRect().left;
        var right = slideItems[num - 1].getBoundingClientRect().right;

        (Math.abs(left - right) <= 1) ?
          initSliderTransformCore() :
          setTimeout(function(){ stylesApplicationCheck() }, 16);
      })();

    } else {
      initSliderTransformCore();
    }
  }


  function initSliderTransformCore () {
    // run Fn()s which are rely on image loading
    if (!horizontal || autoWidth) {
      setSlidePositions();

      if (autoWidth) {
        rightBoundary = getRightBoundary();
        if (freezable) { freeze = getFreeze(); }
        indexMax = getIndexMax(); // <= slidePositions, rightBoundary <=
        resetVariblesWhenDisable(disable || freeze);
      } else {
        updateContentWrapperHeight();
      }
    }

    // set container transform property
    if (carousel) { doContainerTransformSilent(); }

    // update slider tools and events
    initTools();
    initEvents();
  }

  function initSheet () {
    // gallery:
    // set animation classes and left value for gallery slider
    if (!carousel) {
      for (var i = index, l = index + Math.min(slideCount, items); i < l; i++) {
        var item = slideItems[i];
        item.style.left = (i - index) * 100 / items + '%';
        Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__["addClass"])(item, animateIn);
        Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__["removeClass"])(item, animateNormal);
      }
    }

    // #### LAYOUT

    // ## INLINE-BLOCK VS FLOAT

    // ## PercentageLayout:
    // slides: inline-block
    // remove blank space between slides by set font-size: 0

    // ## Non PercentageLayout:
    // slides: float
    //         margin-right: -100%
    //         margin-left: ~

    // Resource: https://docs.google.com/spreadsheets/d/147up245wwTXeQYve3BRSAD4oVcvQmuGsFteJOeA5xNQ/edit?usp=sharing
    if (horizontal) {
      if (PERCENTAGELAYOUT || autoWidth) {
        Object(_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__["addCSSRule"])(sheet, '#' + slideId + ' > .tns-item', 'font-size:' + win.getComputedStyle(slideItems[0]).fontSize + ';', Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__["getCssRulesLength"])(sheet));
        Object(_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__["addCSSRule"])(sheet, '#' + slideId, 'font-size:0;', Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__["getCssRulesLength"])(sheet));
      } else if (carousel) {
        Object(_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_15__["forEach"])(slideItems, function (slide, i) {
          slide.style.marginLeft = getSlideMarginLeft(i);
        });
      }
    }


    // ## BASIC STYLES
    if (CSSMQ) {
      // middle wrapper style
      if (TRANSITIONDURATION) {
        var str = middleWrapper && options.autoHeight ? getTransitionDurationStyle(options.speed) : '';
        Object(_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__["addCSSRule"])(sheet, '#' + slideId + '-mw', str, Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__["getCssRulesLength"])(sheet));
      }

      // inner wrapper styles
      str = getInnerWrapperStyles(options.edgePadding, options.gutter, options.fixedWidth, options.speed, options.autoHeight);
      Object(_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__["addCSSRule"])(sheet, '#' + slideId + '-iw', str, Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__["getCssRulesLength"])(sheet));

      // container styles
      if (carousel) {
        str = horizontal && !autoWidth ? 'width:' + getContainerWidth(options.fixedWidth, options.gutter, options.items) + ';' : '';
        if (TRANSITIONDURATION) { str += getTransitionDurationStyle(speed); }
        Object(_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__["addCSSRule"])(sheet, '#' + slideId, str, Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__["getCssRulesLength"])(sheet));
      }

      // slide styles
      str = horizontal && !autoWidth ? getSlideWidthStyle(options.fixedWidth, options.gutter, options.items) : '';
      if (options.gutter) { str += getSlideGutterStyle(options.gutter); }
      // set gallery items transition-duration
      if (!carousel) {
        if (TRANSITIONDURATION) { str += getTransitionDurationStyle(speed); }
        if (ANIMATIONDURATION) { str += getAnimationDurationStyle(speed); }
      }
      if (str) { Object(_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__["addCSSRule"])(sheet, '#' + slideId + ' > .tns-item', str, Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__["getCssRulesLength"])(sheet)); }

    // non CSS mediaqueries: IE8
    // ## update inner wrapper, container, slides if needed
    // set inline styles for inner wrapper & container
    // insert stylesheet (one line) for slides only (since slides are many)
    } else {
      // middle wrapper styles
      update_carousel_transition_duration();

      // inner wrapper styles
      innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth, autoHeight);

      // container styles
      if (carousel && horizontal && !autoWidth) {
        container.style.width = getContainerWidth(fixedWidth, gutter, items);
      }

      // slide styles
      var str = horizontal && !autoWidth ? getSlideWidthStyle(fixedWidth, gutter, items) : '';
      if (gutter) { str += getSlideGutterStyle(gutter); }

      // append to the last line
      if (str) { Object(_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__["addCSSRule"])(sheet, '#' + slideId + ' > .tns-item', str, Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__["getCssRulesLength"])(sheet)); }
    }

    // ## MEDIAQUERIES
    if (responsive && CSSMQ) {
      for (var bp in responsive) {
        // bp: convert string to number
        bp = parseInt(bp);

        var opts = responsive[bp],
            str = '',
            middleWrapperStr = '',
            innerWrapperStr = '',
            containerStr = '',
            slideStr = '',
            itemsBP = !autoWidth ? getOption('items', bp) : null,
            fixedWidthBP = getOption('fixedWidth', bp),
            speedBP = getOption('speed', bp),
            edgePaddingBP = getOption('edgePadding', bp),
            autoHeightBP = getOption('autoHeight', bp),
            gutterBP = getOption('gutter', bp);

        // middle wrapper string
        if (TRANSITIONDURATION && middleWrapper && getOption('autoHeight', bp) && 'speed' in opts) {
          middleWrapperStr = '#' + slideId + '-mw{' + getTransitionDurationStyle(speedBP) + '}';
        }

        // inner wrapper string
        if ('edgePadding' in opts || 'gutter' in opts) {
          innerWrapperStr = '#' + slideId + '-iw{' + getInnerWrapperStyles(edgePaddingBP, gutterBP, fixedWidthBP, speedBP, autoHeightBP) + '}';
        }

        // container string
        if (carousel && horizontal && !autoWidth && ('fixedWidth' in opts || 'items' in opts || (fixedWidth && 'gutter' in opts))) {
          containerStr = 'width:' + getContainerWidth(fixedWidthBP, gutterBP, itemsBP) + ';';
        }
        if (TRANSITIONDURATION && 'speed' in opts) {
          containerStr += getTransitionDurationStyle(speedBP);
        }
        if (containerStr) {
          containerStr = '#' + slideId + '{' + containerStr + '}';
        }

        // slide string
        if ('fixedWidth' in opts || (fixedWidth && 'gutter' in opts) || !carousel && 'items' in opts) {
          slideStr += getSlideWidthStyle(fixedWidthBP, gutterBP, itemsBP);
        }
        if ('gutter' in opts) {
          slideStr += getSlideGutterStyle(gutterBP);
        }
        // set gallery items transition-duration
        if (!carousel && 'speed' in opts) {
          if (TRANSITIONDURATION) { slideStr += getTransitionDurationStyle(speedBP); }
          if (ANIMATIONDURATION) { slideStr += getAnimationDurationStyle(speedBP); }
        }
        if (slideStr) { slideStr = '#' + slideId + ' > .tns-item{' + slideStr + '}'; }

        // add up
        str = middleWrapperStr + innerWrapperStr + containerStr + slideStr;

        if (str) {
          sheet.insertRule('@media (min-width: ' + bp / 16 + 'em) {' + str + '}', sheet.cssRules.length);
        }
      }
    }
  }

  function initTools () {
    // == slides ==
    updateSlideStatus();

    // == live region ==
    outerWrapper.insertAdjacentHTML('afterbegin', '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + getLiveRegionStr() + '</span>  of ' + slideCount + '</div>');
    liveregionCurrent = outerWrapper.querySelector('.tns-liveregion .current');

    // == autoplayInit ==
    if (hasAutoplay) {
      var txt = autoplay ? 'stop' : 'start';
      if (autoplayButton) {
        Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__["setAttrs"])(autoplayButton, {'data-action': txt});
      } else if (options.autoplayButtonOutput) {
        outerWrapper.insertAdjacentHTML(getInsertPosition(options.autoplayPosition), '<button type="button" data-action="' + txt + '">' + autoplayHtmlStrings[0] + txt + autoplayHtmlStrings[1] + autoplayText[0] + '</button>');
        autoplayButton = outerWrapper.querySelector('[data-action]');
      }

      // add event
      if (autoplayButton) {
        Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__["addEvents"])(autoplayButton, {'click': toggleAutoplay});
      }

      if (autoplay) {
        startAutoplay();
        if (autoplayHoverPause) { Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__["addEvents"])(container, hoverEvents); }
        if (autoplayResetOnVisibility) { Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__["addEvents"])(container, visibilityEvent); }
      }
    }

    // == navInit ==
    if (hasNav) {
      var initIndex = !carousel ? 0 : cloneCount;
      // customized nav
      // will not hide the navs in case they're thumbnails
      if (navContainer) {
        Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__["setAttrs"])(navContainer, {'aria-label': 'Carousel Pagination'});
        navItems = navContainer.children;
        Object(_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_15__["forEach"])(navItems, function(item, i) {
          Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__["setAttrs"])(item, {
            'data-nav': i,
            'tabindex': '-1',
            'aria-label': navStr + (i + 1),
            'aria-controls': slideId,
          });
        });

      // generated nav
      } else {
        var navHtml = '',
            hiddenStr = navAsThumbnails ? '' : 'style="display:none"';
        for (var i = 0; i < slideCount; i++) {
          // hide nav items by default
          navHtml += '<button type="button" data-nav="' + i +'" tabindex="-1" aria-controls="' + slideId + '" ' + hiddenStr + ' aria-label="' + navStr + (i + 1) +'"></button>';
        }
        navHtml = '<div class="tns-nav" aria-label="Carousel Pagination">' + navHtml + '</div>';
        outerWrapper.insertAdjacentHTML(getInsertPosition(options.navPosition), navHtml);

        navContainer = outerWrapper.querySelector('.tns-nav');
        navItems = navContainer.children;
      }

      updateNavVisibility();

      // add transition
      if (TRANSITIONDURATION) {
        var prefix = TRANSITIONDURATION.substring(0, TRANSITIONDURATION.length - 18).toLowerCase(),
            str = 'transition: all ' + speed / 1000 + 's';

        if (prefix) {
          str = '-' + prefix + '-' + str;
        }

        Object(_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__["addCSSRule"])(sheet, '[aria-controls^=' + slideId + '-item]', str, Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__["getCssRulesLength"])(sheet));
      }

      Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__["setAttrs"])(navItems[navCurrentIndex], {'aria-label': navStr + (navCurrentIndex + 1) + navStrCurrent});
      Object(_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_22__["removeAttrs"])(navItems[navCurrentIndex], 'tabindex');
      Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__["addClass"])(navItems[navCurrentIndex], navActiveClass);

      // add events
      Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__["addEvents"])(navContainer, navEvents);
    }



    // == controlsInit ==
    if (hasControls) {
      if (!controlsContainer && (!prevButton || !nextButton)) {
        outerWrapper.insertAdjacentHTML(getInsertPosition(options.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' + slideId +'">' + controlsText[0] + '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' + slideId +'">' + controlsText[1] + '</button></div>');

        controlsContainer = outerWrapper.querySelector('.tns-controls');
      }

      if (!prevButton || !nextButton) {
        prevButton = controlsContainer.children[0];
        nextButton = controlsContainer.children[1];
      }

      if (options.controlsContainer) {
        Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__["setAttrs"])(controlsContainer, {
          'aria-label': 'Carousel Navigation',
          'tabindex': '0'
        });
      }

      if (options.controlsContainer || (options.prevButton && options.nextButton)) {
        Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__["setAttrs"])([prevButton, nextButton], {
          'aria-controls': slideId,
          'tabindex': '-1',
        });
      }

      if (options.controlsContainer || (options.prevButton && options.nextButton)) {
        Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__["setAttrs"])(prevButton, {'data-controls' : 'prev'});
        Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__["setAttrs"])(nextButton, {'data-controls' : 'next'});
      }

      prevIsButton = isButton(prevButton);
      nextIsButton = isButton(nextButton);

      updateControlsStatus();

      // add events
      if (controlsContainer) {
        Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__["addEvents"])(controlsContainer, controlsEvents);
      } else {
        Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__["addEvents"])(prevButton, controlsEvents);
        Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__["addEvents"])(nextButton, controlsEvents);
      }
    }

    // hide tools if needed
    disableUI();
  }

  function initEvents () {
    // add events
    if (carousel && TRANSITIONEND) {
      var eve = {};
      eve[TRANSITIONEND] = onTransitionEnd;
      Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__["addEvents"])(container, eve);
    }

    if (touch) { Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__["addEvents"])(container, touchEvents, options.preventScrollOnTouch); }
    if (mouseDrag) { Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__["addEvents"])(container, dragEvents); }
    if (arrowKeys) { Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__["addEvents"])(doc, docmentKeydownEvent); }

    if (nested === 'inner') {
      events.on('outerResized', function () {
        resizeTasks();
        events.emit('innerLoaded', info());
      });
    } else if (responsive || fixedWidth || autoWidth || autoHeight || !horizontal) {
      Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__["addEvents"])(win, {'resize': onResize});
    }

    if (autoHeight) {
      if (nested === 'outer') {
        events.on('innerLoaded', doAutoHeight);
      } else if (!disable) { doAutoHeight(); }
    }

    doLazyLoad();
    if (disable) { disableSlider(); } else if (freeze) { freezeSlider(); }

    events.on('indexChanged', additionalUpdates);
    if (nested === 'inner') { events.emit('innerLoaded', info()); }
    if (typeof onInit === 'function') { onInit(info()); }
    isOn = true;
  }

  function destroy () {
    // sheet
    sheet.disabled = true;
    if (sheet.ownerNode) { sheet.ownerNode.remove(); }

    // remove win event listeners
    Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__["removeEvents"])(win, {'resize': onResize});

    // arrowKeys, controls, nav
    if (arrowKeys) { Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__["removeEvents"])(doc, docmentKeydownEvent); }
    if (controlsContainer) { Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__["removeEvents"])(controlsContainer, controlsEvents); }
    if (navContainer) { Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__["removeEvents"])(navContainer, navEvents); }

    // autoplay
    Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__["removeEvents"])(container, hoverEvents);
    Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__["removeEvents"])(container, visibilityEvent);
    if (autoplayButton) { Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__["removeEvents"])(autoplayButton, {'click': toggleAutoplay}); }
    if (autoplay) { clearInterval(autoplayTimer); }

    // container
    if (carousel && TRANSITIONEND) {
      var eve = {};
      eve[TRANSITIONEND] = onTransitionEnd;
      Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__["removeEvents"])(container, eve);
    }
    if (touch) { Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__["removeEvents"])(container, touchEvents); }
    if (mouseDrag) { Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__["removeEvents"])(container, dragEvents); }

    // cache Object values in options && reset HTML
    var htmlList = [containerHTML, controlsContainerHTML, prevButtonHTML, nextButtonHTML, navContainerHTML, autoplayButtonHTML];

    tnsList.forEach(function(item, i) {
      var el = item === 'container' ? outerWrapper : options[item];

      if (typeof el === 'object' && el) {
        var prevEl = el.previousElementSibling ? el.previousElementSibling : false,
            parentEl = el.parentNode;
        el.outerHTML = htmlList[i];
        options[item] = prevEl ? prevEl.nextElementSibling : parentEl.firstElementChild;
      }
    });


    // reset variables
    tnsList = animateIn = animateOut = animateDelay = animateNormal = horizontal = outerWrapper = innerWrapper = container = containerParent = containerHTML = slideItems = slideCount = breakpointZone = windowWidth = autoWidth = fixedWidth = edgePadding = gutter = viewport = items = slideBy = viewportMax = arrowKeys = speed = rewind = loop = autoHeight = sheet = lazyload = slidePositions = slideItemsOut = cloneCount = slideCountNew = hasRightDeadZone = rightBoundary = updateIndexBeforeTransform = transformAttr = transformPrefix = transformPostfix = getIndexMax = index = indexCached = indexMin = indexMax = resizeTimer = swipeAngle = moveDirectionExpected = running = onInit = events = newContainerClasses = slideId = disable = disabled = freezable = freeze = frozen = controlsEvents = navEvents = hoverEvents = visibilityEvent = docmentKeydownEvent = touchEvents = dragEvents = hasControls = hasNav = navAsThumbnails = hasAutoplay = hasTouch = hasMouseDrag = slideActiveClass = imgCompleteClass = imgEvents = imgsComplete = controls = controlsText = controlsContainer = controlsContainerHTML = prevButton = nextButton = prevIsButton = nextIsButton = nav = navContainer = navContainerHTML = navItems = pages = pagesCached = navClicked = navCurrentIndex = navCurrentIndexCached = navActiveClass = navStr = navStrCurrent = autoplay = autoplayTimeout = autoplayDirection = autoplayText = autoplayHoverPause = autoplayButton = autoplayButtonHTML = autoplayResetOnVisibility = autoplayHtmlStrings = autoplayTimer = animating = autoplayHoverPaused = autoplayUserPaused = autoplayVisibilityPaused = initPosition = lastPosition = translateInit = disX = disY = panStart = rafIndex = getDist = touch = mouseDrag = null;
    // check variables
    // [animateIn, animateOut, animateDelay, animateNormal, horizontal, outerWrapper, innerWrapper, container, containerParent, containerHTML, slideItems, slideCount, breakpointZone, windowWidth, autoWidth, fixedWidth, edgePadding, gutter, viewport, items, slideBy, viewportMax, arrowKeys, speed, rewind, loop, autoHeight, sheet, lazyload, slidePositions, slideItemsOut, cloneCount, slideCountNew, hasRightDeadZone, rightBoundary, updateIndexBeforeTransform, transformAttr, transformPrefix, transformPostfix, getIndexMax, index, indexCached, indexMin, indexMax, resizeTimer, swipeAngle, moveDirectionExpected, running, onInit, events, newContainerClasses, slideId, disable, disabled, freezable, freeze, frozen, controlsEvents, navEvents, hoverEvents, visibilityEvent, docmentKeydownEvent, touchEvents, dragEvents, hasControls, hasNav, navAsThumbnails, hasAutoplay, hasTouch, hasMouseDrag, slideActiveClass, imgCompleteClass, imgEvents, imgsComplete, controls, controlsText, controlsContainer, controlsContainerHTML, prevButton, nextButton, prevIsButton, nextIsButton, nav, navContainer, navContainerHTML, navItems, pages, pagesCached, navClicked, navCurrentIndex, navCurrentIndexCached, navActiveClass, navStr, navStrCurrent, autoplay, autoplayTimeout, autoplayDirection, autoplayText, autoplayHoverPause, autoplayButton, autoplayButtonHTML, autoplayResetOnVisibility, autoplayHtmlStrings, autoplayTimer, animating, autoplayHoverPaused, autoplayUserPaused, autoplayVisibilityPaused, initPosition, lastPosition, translateInit, disX, disY, panStart, rafIndex, getDist, touch, mouseDrag ].forEach(function(item) { if (item !== null) { console.log(item); } });

    for (var a in this) {
      if (a !== 'rebuild') { this[a] = null; }
    }
    isOn = false;
  }

// === ON RESIZE ===
  // responsive || fixedWidth || autoWidth || !horizontal
  function onResize (e) {
    Object(_helpers_raf_js__WEBPACK_IMPORTED_MODULE_0__["raf"])(function(){ resizeTasks(getEvent(e)); });
  }

  function resizeTasks (e) {
    if (!isOn) { return; }
    if (nested === 'outer') { events.emit('outerResized', info(e)); }
    windowWidth = getWindowWidth();
    var bpChanged,
        breakpointZoneTem = breakpointZone,
        needContainerTransform = false;

    if (responsive) {
      setBreakpointZone();
      bpChanged = breakpointZoneTem !== breakpointZone;
      // if (hasRightDeadZone) { needContainerTransform = true; } // *?
      if (bpChanged) { events.emit('newBreakpointStart', info(e)); }
    }

    var indChanged,
        itemsChanged,
        itemsTem = items,
        disableTem = disable,
        freezeTem = freeze,
        arrowKeysTem = arrowKeys,
        controlsTem = controls,
        navTem = nav,
        touchTem = touch,
        mouseDragTem = mouseDrag,
        autoplayTem = autoplay,
        autoplayHoverPauseTem = autoplayHoverPause,
        autoplayResetOnVisibilityTem = autoplayResetOnVisibility,
        indexTem = index;

    if (bpChanged) {
      var fixedWidthTem = fixedWidth,
          autoHeightTem = autoHeight,
          controlsTextTem = controlsText,
          centerTem = center,
          autoplayTextTem = autoplayText;

      if (!CSSMQ) {
        var gutterTem = gutter,
            edgePaddingTem = edgePadding;
      }
    }

    // get option:
    // fixed width: viewport, fixedWidth, gutter => items
    // others: window width => all variables
    // all: items => slideBy
    arrowKeys = getOption('arrowKeys');
    controls = getOption('controls');
    nav = getOption('nav');
    touch = getOption('touch');
    center = getOption('center');
    mouseDrag = getOption('mouseDrag');
    autoplay = getOption('autoplay');
    autoplayHoverPause = getOption('autoplayHoverPause');
    autoplayResetOnVisibility = getOption('autoplayResetOnVisibility');

    if (bpChanged) {
      disable = getOption('disable');
      fixedWidth = getOption('fixedWidth');
      speed = getOption('speed');
      autoHeight = getOption('autoHeight');
      controlsText = getOption('controlsText');
      autoplayText = getOption('autoplayText');
      autoplayTimeout = getOption('autoplayTimeout');

      if (!CSSMQ) {
        edgePadding = getOption('edgePadding');
        gutter = getOption('gutter');
      }
    }
    // update options
    resetVariblesWhenDisable(disable);

    viewport = getViewportWidth(); // <= edgePadding, gutter
    if ((!horizontal || autoWidth) && !disable) {
      setSlidePositions();
      if (!horizontal) {
        updateContentWrapperHeight(); // <= setSlidePositions
        needContainerTransform = true;
      }
    }
    if (fixedWidth || autoWidth) {
      rightBoundary = getRightBoundary(); // autoWidth: <= viewport, slidePositions, gutter
                                          // fixedWidth: <= viewport, fixedWidth, gutter
      indexMax = getIndexMax(); // autoWidth: <= rightBoundary, slidePositions
                                // fixedWidth: <= rightBoundary, fixedWidth, gutter
    }

    if (bpChanged || fixedWidth) {
      items = getOption('items');
      slideBy = getOption('slideBy');
      itemsChanged = items !== itemsTem;

      if (itemsChanged) {
        if (!fixedWidth && !autoWidth) { indexMax = getIndexMax(); } // <= items
        // check index before transform in case
        // slider reach the right edge then items become bigger
        updateIndex();
      }
    }

    if (bpChanged) {
      if (disable !== disableTem) {
        if (disable) {
          disableSlider();
        } else {
          enableSlider(); // <= slidePositions, rightBoundary, indexMax
        }
      }
    }

    if (freezable && (bpChanged || fixedWidth || autoWidth)) {
      freeze = getFreeze(); // <= autoWidth: slidePositions, gutter, viewport, rightBoundary
                            // <= fixedWidth: fixedWidth, gutter, rightBoundary
                            // <= others: items

      if (freeze !== freezeTem) {
        if (freeze) {
          doContainerTransform(getContainerTransformValue(getStartIndex(0)));
          freezeSlider();
        } else {
          unfreezeSlider();
          needContainerTransform = true;
        }
      }
    }

    resetVariblesWhenDisable(disable || freeze); // controls, nav, touch, mouseDrag, arrowKeys, autoplay, autoplayHoverPause, autoplayResetOnVisibility
    if (!autoplay) { autoplayHoverPause = autoplayResetOnVisibility = false; }

    if (arrowKeys !== arrowKeysTem) {
      arrowKeys ?
        Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__["addEvents"])(doc, docmentKeydownEvent) :
        Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__["removeEvents"])(doc, docmentKeydownEvent);
    }
    if (controls !== controlsTem) {
      if (controls) {
        if (controlsContainer) {
          Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__["showElement"])(controlsContainer);
        } else {
          if (prevButton) { Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__["showElement"])(prevButton); }
          if (nextButton) { Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__["showElement"])(nextButton); }
        }
      } else {
        if (controlsContainer) {
          Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__["hideElement"])(controlsContainer);
        } else {
          if (prevButton) { Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__["hideElement"])(prevButton); }
          if (nextButton) { Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__["hideElement"])(nextButton); }
        }
      }
    }
    if (nav !== navTem) {
      if (nav) {
        Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__["showElement"])(navContainer);
        updateNavVisibility();
      } else {
        Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__["hideElement"])(navContainer)
      }
    }
    if (touch !== touchTem) {
      touch ?
        Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__["addEvents"])(container, touchEvents, options.preventScrollOnTouch) :
        Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__["removeEvents"])(container, touchEvents);
    }
    if (mouseDrag !== mouseDragTem) {
      mouseDrag ?
        Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__["addEvents"])(container, dragEvents) :
        Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__["removeEvents"])(container, dragEvents);
    }
    if (autoplay !== autoplayTem) {
      if (autoplay) {
        if (autoplayButton) { Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__["showElement"])(autoplayButton); }
        if (!animating && !autoplayUserPaused) { startAutoplay(); }
      } else {
        if (autoplayButton) { Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__["hideElement"])(autoplayButton); }
        if (animating) { stopAutoplay(); }
      }
    }
    if (autoplayHoverPause !== autoplayHoverPauseTem) {
      autoplayHoverPause ?
        Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__["addEvents"])(container, hoverEvents) :
        Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__["removeEvents"])(container, hoverEvents);
    }
    if (autoplayResetOnVisibility !== autoplayResetOnVisibilityTem) {
      autoplayResetOnVisibility ?
        Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__["addEvents"])(doc, visibilityEvent) :
        Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__["removeEvents"])(doc, visibilityEvent);
    }

    if (bpChanged) {
      if (fixedWidth !== fixedWidthTem || center !== centerTem) { needContainerTransform = true; }

      if (autoHeight !== autoHeightTem) {
        if (!autoHeight) { innerWrapper.style.height = ''; }
      }

      if (controls && controlsText !== controlsTextTem) {
        prevButton.innerHTML = controlsText[0];
        nextButton.innerHTML = controlsText[1];
      }

      if (autoplayButton && autoplayText !== autoplayTextTem) {
        var i = autoplay ? 1 : 0,
            html = autoplayButton.innerHTML,
            len = html.length - autoplayTextTem[i].length;
        if (html.substring(len) === autoplayTextTem[i]) {
          autoplayButton.innerHTML = html.substring(0, len) + autoplayText[i];
        }
      }
    } else {
      if (center && (fixedWidth || autoWidth)) { needContainerTransform = true; }
    }

    if (itemsChanged || fixedWidth && !autoWidth) {
      pages = getPages();
      updateNavVisibility();
    }

    indChanged = index !== indexTem;
    if (indChanged) {
      events.emit('indexChanged', info());
      needContainerTransform = true;
    } else if (itemsChanged) {
      if (!indChanged) { additionalUpdates(); }
    } else if (fixedWidth || autoWidth) {
      doLazyLoad();
      updateSlideStatus();
      updateLiveRegion();
    }

    if (itemsChanged && !carousel) { updateGallerySlidePositions(); }

    if (!disable && !freeze) {
      // non-mediaqueries: IE8
      if (bpChanged && !CSSMQ) {
        // middle wrapper styles

        // inner wrapper styles
        if (edgePadding !== edgePaddingTem || gutter !== gutterTem) {
          innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth, speed, autoHeight);
        }

        if (horizontal) {
          // container styles
          if (carousel) {
            container.style.width = getContainerWidth(fixedWidth, gutter, items);
          }

          // slide styles
          var str = getSlideWidthStyle(fixedWidth, gutter, items) +
                    getSlideGutterStyle(gutter);

          // remove the last line and
          // add new styles
          Object(_helpers_removeCSSRule_js__WEBPACK_IMPORTED_MODULE_11__["removeCSSRule"])(sheet, Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__["getCssRulesLength"])(sheet) - 1);
          Object(_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_10__["addCSSRule"])(sheet, '#' + slideId + ' > .tns-item', str, Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_12__["getCssRulesLength"])(sheet));
        }
      }

      // auto height
      if (autoHeight) { doAutoHeight(); }

      if (needContainerTransform) {
        doContainerTransformSilent();
        indexCached = index;
      }
    }

    if (bpChanged) { events.emit('newBreakpointEnd', info(e)); }
  }





  // === INITIALIZATION FUNCTIONS === //
  function getFreeze () {
    if (!fixedWidth && !autoWidth) {
      var a = center ? items - (items - 1) / 2 : items;
      return  slideCount <= a;
    }

    var width = fixedWidth ? (fixedWidth + gutter) * slideCount : slidePositions[slideCount],
        vp = edgePadding ? viewport + edgePadding * 2 : viewport + gutter;

    if (center) {
      vp -= fixedWidth ? (viewport - fixedWidth) / 2 : (viewport - (slidePositions[index + 1] - slidePositions[index] - gutter)) / 2;
    }

    return width <= vp;
  }

  function setBreakpointZone () {
    breakpointZone = 0;
    for (var bp in responsive) {
      bp = parseInt(bp); // convert string to number
      if (windowWidth >= bp) { breakpointZone = bp; }
    }
  }

  // (slideBy, indexMin, indexMax) => index
  var updateIndex = (function () {
    return loop ?
      carousel ?
        // loop + carousel
        function () {
          var leftEdge = indexMin,
              rightEdge = indexMax;

          leftEdge += slideBy;
          rightEdge -= slideBy;

          // adjust edges when has edge paddings
          // or fixed-width slider with extra space on the right side
          if (edgePadding) {
            leftEdge += 1;
            rightEdge -= 1;
          } else if (fixedWidth) {
            if ((viewport + gutter)%(fixedWidth + gutter)) { rightEdge -= 1; }
          }

          if (cloneCount) {
            if (index > rightEdge) {
              index -= slideCount;
            } else if (index < leftEdge) {
              index += slideCount;
            }
          }
        } :
        // loop + gallery
        function() {
          if (index > indexMax) {
            while (index >= indexMin + slideCount) { index -= slideCount; }
          } else if (index < indexMin) {
            while (index <= indexMax - slideCount) { index += slideCount; }
          }
        } :
      // non-loop
      function() {
        index = Math.max(indexMin, Math.min(indexMax, index));
      };
  })();

  function disableUI () {
    if (!autoplay && autoplayButton) { Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__["hideElement"])(autoplayButton); }
    if (!nav && navContainer) { Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__["hideElement"])(navContainer); }
    if (!controls) {
      if (controlsContainer) {
        Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__["hideElement"])(controlsContainer);
      } else {
        if (prevButton) { Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__["hideElement"])(prevButton); }
        if (nextButton) { Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__["hideElement"])(nextButton); }
      }
    }
  }

  function enableUI () {
    if (autoplay && autoplayButton) { Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__["showElement"])(autoplayButton); }
    if (nav && navContainer) { Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__["showElement"])(navContainer); }
    if (controls) {
      if (controlsContainer) {
        Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__["showElement"])(controlsContainer);
      } else {
        if (prevButton) { Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__["showElement"])(prevButton); }
        if (nextButton) { Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__["showElement"])(nextButton); }
      }
    }
  }

  function freezeSlider () {
    if (frozen) { return; }

    // remove edge padding from inner wrapper
    if (edgePadding) { innerWrapper.style.margin = '0px'; }

    // add class tns-transparent to cloned slides
    if (cloneCount) {
      var str = 'tns-transparent';
      for (var i = cloneCount; i--;) {
        if (carousel) { Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__["addClass"])(slideItems[i], str); }
        Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__["addClass"])(slideItems[slideCountNew - i - 1], str);
      }
    }

    // update tools
    disableUI();

    frozen = true;
  }

  function unfreezeSlider () {
    if (!frozen) { return; }

    // restore edge padding for inner wrapper
    // for mordern browsers
    if (edgePadding && CSSMQ) { innerWrapper.style.margin = ''; }

    // remove class tns-transparent to cloned slides
    if (cloneCount) {
      var str = 'tns-transparent';
      for (var i = cloneCount; i--;) {
        if (carousel) { Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__["removeClass"])(slideItems[i], str); }
        Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__["removeClass"])(slideItems[slideCountNew - i - 1], str);
      }
    }

    // update tools
    enableUI();

    frozen = false;
  }

  function disableSlider () {
    if (disabled) { return; }

    sheet.disabled = true;
    container.className = container.className.replace(newContainerClasses.substring(1), '');
    Object(_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_22__["removeAttrs"])(container, ['style']);
    if (loop) {
      for (var j = cloneCount; j--;) {
        if (carousel) { Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__["hideElement"])(slideItems[j]); }
        Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__["hideElement"])(slideItems[slideCountNew - j - 1]);
      }
    }

    // vertical slider
    if (!horizontal || !carousel) { Object(_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_22__["removeAttrs"])(innerWrapper, ['style']); }

    // gallery
    if (!carousel) {
      for (var i = index, l = index + slideCount; i < l; i++) {
        var item = slideItems[i];
        Object(_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_22__["removeAttrs"])(item, ['style']);
        Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__["removeClass"])(item, animateIn);
        Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__["removeClass"])(item, animateNormal);
      }
    }

    // update tools
    disableUI();

    disabled = true;
  }

  function enableSlider () {
    if (!disabled) { return; }

    sheet.disabled = false;
    container.className += newContainerClasses;
    doContainerTransformSilent();

    if (loop) {
      for (var j = cloneCount; j--;) {
        if (carousel) { Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__["showElement"])(slideItems[j]); }
        Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__["showElement"])(slideItems[slideCountNew - j - 1]);
      }
    }

    // gallery
    if (!carousel) {
      for (var i = index, l = index + slideCount; i < l; i++) {
        var item = slideItems[i],
            classN = i < index + items ? animateIn : animateNormal;
        item.style.left = (i - index) * 100 / items + '%';
        Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__["addClass"])(item, classN);
      }
    }

    // update tools
    enableUI();

    disabled = false;
  }

  function updateLiveRegion () {
    var str = getLiveRegionStr();
    if (liveregionCurrent.innerHTML !== str) { liveregionCurrent.innerHTML = str; }
  }

  function getLiveRegionStr () {
    var arr = getVisibleSlideRange(),
        start = arr[0] + 1,
        end = arr[1] + 1;
    return start === end ? start + '' : start + ' to ' + end;
  }

  function getVisibleSlideRange (val) {
    if (val == null) { val = getContainerTransformValue(); }
    var start = index, end, rangestart, rangeend;

    // get range start, range end for autoWidth and fixedWidth
    if (center || edgePadding) {
      if (autoWidth || fixedWidth) {
        rangestart = - (parseFloat(val) + edgePadding);
        rangeend = rangestart + viewport + edgePadding * 2;
      }
    } else {
      if (autoWidth) {
        rangestart = slidePositions[index];
        rangeend = rangestart + viewport;
      }
    }

    // get start, end
    // - check auto width
    if (autoWidth) {
      slidePositions.forEach(function(point, i) {
        if (i < slideCountNew) {
          if ((center || edgePadding) && point <= rangestart + 0.5) { start = i; }
          if (rangeend - point >= 0.5) { end = i; }
        }
      });

    // - check percentage width, fixed width
    } else {

      if (fixedWidth) {
        var cell = fixedWidth + gutter;
        if (center || edgePadding) {
          start = Math.floor(rangestart/cell);
          end = Math.ceil(rangeend/cell - 1);
        } else {
          end = start + Math.ceil(viewport/cell) - 1;
        }

      } else {
        if (center || edgePadding) {
          var a = items - 1;
          if (center) {
            start -= a / 2;
            end = index + a / 2;
          } else {
            end = index + a;
          }

          if (edgePadding) {
            var b = edgePadding * items / viewport;
            start -= b;
            end += b;
          }

          start = Math.floor(start);
          end = Math.ceil(end);
        } else {
          end = start + items - 1;
        }
      }

      start = Math.max(start, 0);
      end = Math.min(end, slideCountNew - 1);
    }

    return [start, end];
  }

  function doLazyLoad () {
    if (lazyload && !disable) {
      var arg = getVisibleSlideRange();
      arg.push(lazyloadSelector);

      getImageArray.apply(null, arg).forEach(function (img) {
        if (!Object(_helpers_hasClass_js__WEBPACK_IMPORTED_MODULE_16__["hasClass"])(img, imgCompleteClass)) {
          // stop propagation transitionend event to container
          var eve = {};
          eve[TRANSITIONEND] = function (e) { e.stopPropagation(); };
          Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__["addEvents"])(img, eve);

          Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__["addEvents"])(img, imgEvents);

          // update src
          img.src = Object(_helpers_getAttr_js__WEBPACK_IMPORTED_MODULE_20__["getAttr"])(img, 'data-src');

          // update srcset
          var srcset = Object(_helpers_getAttr_js__WEBPACK_IMPORTED_MODULE_20__["getAttr"])(img, 'data-srcset');
          if (srcset) { img.srcset = srcset; }

          Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__["addClass"])(img, 'loading');
        }
      });
    }
  }

  function onImgLoaded (e) {
    imgLoaded(getTarget(e));
  }

  function onImgFailed (e) {
    imgFailed(getTarget(e));
  }

  function imgLoaded (img) {
    Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__["addClass"])(img, 'loaded');
    imgCompleted(img);
  }

  function imgFailed (img) {
    Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__["addClass"])(img, 'failed');
    imgCompleted(img);
  }

  function imgCompleted (img) {
    Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__["addClass"])(img, imgCompleteClass);
    Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__["removeClass"])(img, 'loading');
    Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__["removeEvents"])(img, imgEvents);
  }

  function getImageArray (start, end, imgSelector) {
    var imgs = [];
    if (!imgSelector) { imgSelector = 'img'; }

    while (start <= end) {
      Object(_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_15__["forEach"])(slideItems[start].querySelectorAll(imgSelector), function (img) { imgs.push(img); });
      start++;
    }

    return imgs;
  }

  // check if all visible images are loaded
  // and update container height if it's done
  function doAutoHeight () {
    var imgs = getImageArray.apply(null, getVisibleSlideRange());
    Object(_helpers_raf_js__WEBPACK_IMPORTED_MODULE_0__["raf"])(function(){ imgsLoadedCheck(imgs, updateInnerWrapperHeight); });
  }

  function imgsLoadedCheck (imgs, cb) {
    // execute callback function if all images are complete
    if (imgsComplete) { return cb(); }

    // check image classes
    imgs.forEach(function (img, index) {
      if (!lazyload && img.complete) { imgCompleted(img); } // Check image.complete
      if (Object(_helpers_hasClass_js__WEBPACK_IMPORTED_MODULE_16__["hasClass"])(img, imgCompleteClass)) { imgs.splice(index, 1); }
    });

    // execute callback function if selected images are all complete
    if (!imgs.length) { return cb(); }

    // otherwise execute this functiona again
    Object(_helpers_raf_js__WEBPACK_IMPORTED_MODULE_0__["raf"])(function(){ imgsLoadedCheck(imgs, cb); });
  }

  function additionalUpdates () {
    doLazyLoad();
    updateSlideStatus();
    updateLiveRegion();
    updateControlsStatus();
    updateNavStatus();
  }


  function update_carousel_transition_duration () {
    if (carousel && autoHeight) {
      middleWrapper.style[TRANSITIONDURATION] = speed / 1000 + 's';
    }
  }

  function getMaxSlideHeight (slideStart, slideRange) {
    var heights = [];
    for (var i = slideStart, l = Math.min(slideStart + slideRange, slideCountNew); i < l; i++) {
      heights.push(slideItems[i].offsetHeight);
    }

    return Math.max.apply(null, heights);
  }

  // update inner wrapper height
  // 1. get the max-height of the visible slides
  // 2. set transitionDuration to speed
  // 3. update inner wrapper height to max-height
  // 4. set transitionDuration to 0s after transition done
  function updateInnerWrapperHeight () {
    var maxHeight = autoHeight ? getMaxSlideHeight(index, items) : getMaxSlideHeight(cloneCount, slideCount),
        wp = middleWrapper ? middleWrapper : innerWrapper;

    if (wp.style.height !== maxHeight) { wp.style.height = maxHeight + 'px'; }
  }

  // get the distance from the top edge of the first slide to each slide
  // (init) => slidePositions
  function setSlidePositions () {
    slidePositions = [0];
    var attr = horizontal ? 'left' : 'top',
        attr2 = horizontal ? 'right' : 'bottom',
        base = slideItems[0].getBoundingClientRect()[attr];

    Object(_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_15__["forEach"])(slideItems, function(item, i) {
      // skip the first slide
      if (i) { slidePositions.push(item.getBoundingClientRect()[attr] - base); }
      // add the end edge
      if (i === slideCountNew - 1) { slidePositions.push(item.getBoundingClientRect()[attr2] - base); }
    });
  }

  // update slide
  function updateSlideStatus () {
    var range = getVisibleSlideRange(),
        start = range[0],
        end = range[1];

    Object(_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_15__["forEach"])(slideItems, function(item, i) {
      // show slides
      if (i >= start && i <= end) {
        if (Object(_helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_19__["hasAttr"])(item, 'aria-hidden')) {
          Object(_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_22__["removeAttrs"])(item, ['aria-hidden', 'tabindex']);
          Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__["addClass"])(item, slideActiveClass);
        }
      // hide slides
      } else {
        if (!Object(_helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_19__["hasAttr"])(item, 'aria-hidden')) {
          Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__["setAttrs"])(item, {
            'aria-hidden': 'true',
            'tabindex': '-1'
          });
          Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__["removeClass"])(item, slideActiveClass);
        }
      }
    });
  }

  // gallery: update slide position
  function updateGallerySlidePositions () {
    var l = index + Math.min(slideCount, items);
    for (var i = slideCountNew; i--;) {
      var item = slideItems[i];

      if (i >= index && i < l) {
        // add transitions to visible slides when adjusting their positions
        Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__["addClass"])(item, 'tns-moving');

        item.style.left = (i - index) * 100 / items + '%';
        Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__["addClass"])(item, animateIn);
        Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__["removeClass"])(item, animateNormal);
      } else if (item.style.left) {
        item.style.left = '';
        Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__["addClass"])(item, animateNormal);
        Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__["removeClass"])(item, animateIn);
      }

      // remove outlet animation
      Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__["removeClass"])(item, animateOut);
    }

    // removing '.tns-moving'
    setTimeout(function() {
      Object(_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_15__["forEach"])(slideItems, function(el) {
        Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__["removeClass"])(el, 'tns-moving');
      });
    }, 300);
  }

  // set tabindex on Nav
  function updateNavStatus () {
    // get current nav
    if (nav) {
      navCurrentIndex = navClicked >= 0 ? navClicked : getCurrentNavIndex();
      navClicked = -1;

      if (navCurrentIndex !== navCurrentIndexCached) {
        var navPrev = navItems[navCurrentIndexCached],
            navCurrent = navItems[navCurrentIndex];

        Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__["setAttrs"])(navPrev, {
          'tabindex': '-1',
          'aria-label': navStr + (navCurrentIndexCached + 1)
        });
        Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__["removeClass"])(navPrev, navActiveClass);

        Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__["setAttrs"])(navCurrent, {'aria-label': navStr + (navCurrentIndex + 1) + navStrCurrent});
        Object(_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_22__["removeAttrs"])(navCurrent, 'tabindex');
        Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__["addClass"])(navCurrent, navActiveClass);

        navCurrentIndexCached = navCurrentIndex;
      }
    }
  }

  function getLowerCaseNodeName (el) {
    return el.nodeName.toLowerCase();
  }

  function isButton (el) {
    return getLowerCaseNodeName(el) === 'button';
  }

  function isAriaDisabled (el) {
    return el.getAttribute('aria-disabled') === 'true';
  }

  function disEnableElement (isButton, el, val) {
    if (isButton) {
      el.disabled = val;
    } else {
      el.setAttribute('aria-disabled', val.toString());
    }
  }

  // set 'disabled' to true on controls when reach the edges
  function updateControlsStatus () {
    if (!controls || rewind || loop) { return; }

    var prevDisabled = (prevIsButton) ? prevButton.disabled : isAriaDisabled(prevButton),
        nextDisabled = (nextIsButton) ? nextButton.disabled : isAriaDisabled(nextButton),
        disablePrev = (index <= indexMin) ? true : false,
        disableNext = (!rewind && index >= indexMax) ? true : false;

    if (disablePrev && !prevDisabled) {
      disEnableElement(prevIsButton, prevButton, true);
    }
    if (!disablePrev && prevDisabled) {
      disEnableElement(prevIsButton, prevButton, false);
    }
    if (disableNext && !nextDisabled) {
      disEnableElement(nextIsButton, nextButton, true);
    }
    if (!disableNext && nextDisabled) {
      disEnableElement(nextIsButton, nextButton, false);
    }
  }

  // set duration
  function resetDuration (el, str) {
    if (TRANSITIONDURATION) { el.style[TRANSITIONDURATION] = str; }
  }

  function getSliderWidth () {
    return fixedWidth ? (fixedWidth + gutter) * slideCountNew : slidePositions[slideCountNew];
  }

  function getCenterGap (num) {
    if (num == null) { num = index; }

    var gap = edgePadding ? gutter : 0;
    return autoWidth ? ((viewport - gap) - (slidePositions[num + 1] - slidePositions[num] - gutter))/2 :
      fixedWidth ? (viewport - fixedWidth) / 2 :
        (items - 1) / 2;
  }

  function getRightBoundary () {
    var gap = edgePadding ? gutter : 0,
        result = (viewport + gap) - getSliderWidth();

    if (center && !loop) {
      result = fixedWidth ? - (fixedWidth + gutter) * (slideCountNew - 1) - getCenterGap() :
        getCenterGap(slideCountNew - 1) - slidePositions[slideCountNew - 1];
    }
    if (result > 0) { result = 0; }

    return result;
  }

  function getContainerTransformValue (num) {
    if (num == null) { num = index; }

    var val;
    if (horizontal && !autoWidth) {
      if (fixedWidth) {
        val = - (fixedWidth + gutter) * num;
        if (center) { val += getCenterGap(); }
      } else {
        var denominator = TRANSFORM ? slideCountNew : items;
        if (center) { num -= getCenterGap(); }
        val = - num * 100 / denominator;
      }
    } else {
      val = - slidePositions[num];
      if (center && autoWidth) {
        val += getCenterGap();
      }
    }

    if (hasRightDeadZone) { val = Math.max(val, rightBoundary); }

    val += (horizontal && !autoWidth && !fixedWidth) ? '%' : 'px';

    return val;
  }

  function doContainerTransformSilent (val) {
    resetDuration(container, '0s');
    doContainerTransform(val);
  }

  function doContainerTransform (val) {
    if (val == null) { val = getContainerTransformValue(); }
    container.style[transformAttr] = transformPrefix + val + transformPostfix;
  }

  function animateSlide (number, classOut, classIn, isOut) {
    var l = number + items;
    if (!loop) { l = Math.min(l, slideCountNew); }

    for (var i = number; i < l; i++) {
        var item = slideItems[i];

      // set item positions
      if (!isOut) { item.style.left = (i - index) * 100 / items + '%'; }

      if (animateDelay && TRANSITIONDELAY) {
        item.style[TRANSITIONDELAY] = item.style[ANIMATIONDELAY] = animateDelay * (i - number) / 1000 + 's';
      }
      Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__["removeClass"])(item, classOut);
      Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__["addClass"])(item, classIn);

      if (isOut) { slideItemsOut.push(item); }
    }
  }

  // make transfer after click/drag:
  // 1. change 'transform' property for mordern browsers
  // 2. change 'left' property for legacy browsers
  var transformCore = (function () {
    return carousel ?
      function () {
        resetDuration(container, '');
        if (TRANSITIONDURATION || !speed) {
          // for morden browsers with non-zero duration or
          // zero duration for all browsers
          doContainerTransform();
          // run fallback function manually
          // when duration is 0 / container is hidden
          if (!speed || !Object(_helpers_isVisible_js__WEBPACK_IMPORTED_MODULE_26__["isVisible"])(container)) { onTransitionEnd(); }

        } else {
          // for old browser with non-zero duration
          Object(_helpers_jsTransform_js__WEBPACK_IMPORTED_MODULE_33__["jsTransform"])(container, transformAttr, transformPrefix, transformPostfix, getContainerTransformValue(), speed, onTransitionEnd);
        }

        if (!horizontal) { updateContentWrapperHeight(); }
      } :
      function () {
        slideItemsOut = [];

        var eve = {};
        eve[TRANSITIONEND] = eve[ANIMATIONEND] = onTransitionEnd;
        Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__["removeEvents"])(slideItems[indexCached], eve);
        Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__["addEvents"])(slideItems[index], eve);

        animateSlide(indexCached, animateIn, animateOut, true);
        animateSlide(index, animateNormal, animateIn);

        // run fallback function manually
        // when transition or animation not supported / duration is 0
        if (!TRANSITIONEND || !ANIMATIONEND || !speed || !Object(_helpers_isVisible_js__WEBPACK_IMPORTED_MODULE_26__["isVisible"])(container)) { onTransitionEnd(); }
      };
  })();

  function render (e, sliderMoved) {
    if (updateIndexBeforeTransform) { updateIndex(); }

    // render when slider was moved (touch or drag) even though index may not change
    if (index !== indexCached || sliderMoved) {
      // events
      events.emit('indexChanged', info());
      events.emit('transitionStart', info());
      if (autoHeight) { doAutoHeight(); }

      // pause autoplay when click or keydown from user
      if (animating && e && ['click', 'keydown'].indexOf(e.type) >= 0) { stopAutoplay(); }

      running = true;
      transformCore();
    }
  }

  /*
   * Transfer prefixed properties to the same format
   * CSS: -Webkit-Transform => webkittransform
   * JS: WebkitTransform => webkittransform
   * @param {string} str - property
   *
   */
  function strTrans (str) {
    return str.toLowerCase().replace(/-/g, '');
  }

  // AFTER TRANSFORM
  // Things need to be done after a transfer:
  // 1. check index
  // 2. add classes to visible slide
  // 3. disable controls buttons when reach the first/last slide in non-loop slider
  // 4. update nav status
  // 5. lazyload images
  // 6. update container height
  function onTransitionEnd (event) {
    // check running on gallery mode
    // make sure trantionend/animationend events run only once
    if (carousel || running) {
      events.emit('transitionEnd', info(event));

      if (!carousel && slideItemsOut.length > 0) {
        for (var i = 0; i < slideItemsOut.length; i++) {
          var item = slideItemsOut[i];
          // set item positions
          item.style.left = '';

          if (ANIMATIONDELAY && TRANSITIONDELAY) {
            item.style[ANIMATIONDELAY] = '';
            item.style[TRANSITIONDELAY] = '';
          }
          Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_18__["removeClass"])(item, animateOut);
          Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_17__["addClass"])(item, animateNormal);
        }
      }

      /* update slides, nav, controls after checking ...
       * => legacy browsers who don't support 'event'
       *    have to check event first, otherwise event.target will cause an error
       * => or 'gallery' mode:
       *   + event target is slide item
       * => or 'carousel' mode:
       *   + event target is container,
       *   + event.property is the same with transform attribute
       */
      if (!event ||
          !carousel && event.target.parentNode === container ||
          event.target === container && strTrans(event.propertyName) === strTrans(transformAttr)) {

        if (!updateIndexBeforeTransform) {
          var indexTem = index;
          updateIndex();
          if (index !== indexTem) {
            events.emit('indexChanged', info());

            doContainerTransformSilent();
          }
        }

        if (nested === 'inner') { events.emit('innerLoaded', info()); }
        running = false;
        indexCached = index;
      }
    }

  }

  // # ACTIONS
  function goTo (targetIndex, e) {
    if (freeze) { return; }

    // prev slideBy
    if (targetIndex === 'prev') {
      onControlsClick(e, -1);

    // next slideBy
    } else if (targetIndex === 'next') {
      onControlsClick(e, 1);

    // go to exact slide
    } else {
      if (running) {
        if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }
      }

      var absIndex = getAbsIndex(),
          indexGap = 0;

      if (targetIndex === 'first') {
        indexGap = - absIndex;
      } else if (targetIndex === 'last') {
        indexGap = carousel ? slideCount - items - absIndex : slideCount - 1 - absIndex;
      } else {
        if (typeof targetIndex !== 'number') { targetIndex = parseInt(targetIndex); }

        if (!isNaN(targetIndex)) {
          // from directly called goTo function
          if (!e) { targetIndex = Math.max(0, Math.min(slideCount - 1, targetIndex)); }

          indexGap = targetIndex - absIndex;
        }
      }

      // gallery: make sure new page won't overlap with current page
      if (!carousel && indexGap && Math.abs(indexGap) < items) {
        var factor = indexGap > 0 ? 1 : -1;
        indexGap += (index + indexGap - slideCount) >= indexMin ? slideCount * factor : slideCount * 2 * factor * -1;
      }

      index += indexGap;

      // make sure index is in range
      if (carousel && loop) {
        if (index < indexMin) { index += slideCount; }
        if (index > indexMax) { index -= slideCount; }
      }

      // if index is changed, start rendering
      if (getAbsIndex(index) !== getAbsIndex(indexCached)) {
        render(e);
      }

    }
  }

  // on controls click
  function onControlsClick (e, dir) {
    if (running) {
      if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }
    }
    var passEventObject;

    if (!dir) {
      e = getEvent(e);
      var target = getTarget(e);

      while (target !== controlsContainer && [prevButton, nextButton].indexOf(target) < 0) { target = target.parentNode; }

      var targetIn = [prevButton, nextButton].indexOf(target);
      if (targetIn >= 0) {
        passEventObject = true;
        dir = targetIn === 0 ? -1 : 1;
      }
    }

    if (rewind) {
      if (index === indexMin && dir === -1) {
        goTo('last', e);
        return;
      } else if (index === indexMax && dir === 1) {
        goTo('first', e);
        return;
      }
    }

    if (dir) {
      index += slideBy * dir;
      if (autoWidth) { index = Math.floor(index); }
      // pass e when click control buttons or keydown
      render((passEventObject || (e && e.type === 'keydown')) ? e : null);
    }
  }

  // on nav click
  function onNavClick (e) {
    if (running) {
      if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }
    }

    e = getEvent(e);
    var target = getTarget(e), navIndex;

    // find the clicked nav item
    while (target !== navContainer && !Object(_helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_19__["hasAttr"])(target, 'data-nav')) { target = target.parentNode; }
    if (Object(_helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_19__["hasAttr"])(target, 'data-nav')) {
      var navIndex = navClicked = Number(Object(_helpers_getAttr_js__WEBPACK_IMPORTED_MODULE_20__["getAttr"])(target, 'data-nav')),
          targetIndexBase = fixedWidth || autoWidth ? navIndex * slideCount / pages : navIndex * items,
          targetIndex = navAsThumbnails ? navIndex : Math.min(Math.ceil(targetIndexBase), slideCount - 1);
      goTo(targetIndex, e);

      if (navCurrentIndex === navIndex) {
        if (animating) { stopAutoplay(); }
        navClicked = -1; // reset navClicked
      }
    }
  }

  // autoplay functions
  function setAutoplayTimer () {
    autoplayTimer = setInterval(function () {
      onControlsClick(null, autoplayDirection);
    }, autoplayTimeout);

    animating = true;
  }

  function stopAutoplayTimer () {
    clearInterval(autoplayTimer);
    animating = false;
  }

  function updateAutoplayButton (action, txt) {
    Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_21__["setAttrs"])(autoplayButton, {'data-action': action});
    autoplayButton.innerHTML = autoplayHtmlStrings[0] + action + autoplayHtmlStrings[1] + txt;
  }

  function startAutoplay () {
    setAutoplayTimer();
    if (autoplayButton) { updateAutoplayButton('stop', autoplayText[1]); }
  }

  function stopAutoplay () {
    stopAutoplayTimer();
    if (autoplayButton) { updateAutoplayButton('start', autoplayText[0]); }
  }

  // programaitcally play/pause the slider
  function play () {
    if (autoplay && !animating) {
      startAutoplay();
      autoplayUserPaused = false;
    }
  }
  function pause () {
    if (animating) {
      stopAutoplay();
      autoplayUserPaused = true;
    }
  }

  function toggleAutoplay () {
    if (animating) {
      stopAutoplay();
      autoplayUserPaused = true;
    } else {
      startAutoplay();
      autoplayUserPaused = false;
    }
  }

  function onVisibilityChange () {
    if (doc.hidden) {
      if (animating) {
        stopAutoplayTimer();
        autoplayVisibilityPaused = true;
      }
    } else if (autoplayVisibilityPaused) {
      setAutoplayTimer();
      autoplayVisibilityPaused = false;
    }
  }

  function mouseoverPause () {
    if (animating) {
      stopAutoplayTimer();
      autoplayHoverPaused = true;
    }
  }

  function mouseoutRestart () {
    if (autoplayHoverPaused) {
      setAutoplayTimer();
      autoplayHoverPaused = false;
    }
  }

  // keydown events on document
  function onDocumentKeydown (e) {
    e = getEvent(e);
    var keyIndex = [KEYS.LEFT, KEYS.RIGHT].indexOf(e.keyCode);

    if (keyIndex >= 0) {
      onControlsClick(e, keyIndex === 0 ? -1 : 1);
    }
  }

  // on key control
  function onControlsKeydown (e) {
    e = getEvent(e);
    var keyIndex = [KEYS.LEFT, KEYS.RIGHT].indexOf(e.keyCode);

    if (keyIndex >= 0) {
      if (keyIndex === 0) {
        if (!prevButton.disabled) { onControlsClick(e, -1); }
      } else if (!nextButton.disabled) {
        onControlsClick(e, 1);
      }
    }
  }

  // set focus
  function setFocus (el) {
    el.focus();
  }

  // on key nav
  function onNavKeydown (e) {
    e = getEvent(e);
    var curElement = doc.activeElement;
    if (!Object(_helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_19__["hasAttr"])(curElement, 'data-nav')) { return; }

    // var code = e.keyCode,
    var keyIndex = [KEYS.LEFT, KEYS.RIGHT, KEYS.ENTER, KEYS.SPACE].indexOf(e.keyCode),
        navIndex = Number(Object(_helpers_getAttr_js__WEBPACK_IMPORTED_MODULE_20__["getAttr"])(curElement, 'data-nav'));

    if (keyIndex >= 0) {
      if (keyIndex === 0) {
        if (navIndex > 0) { setFocus(navItems[navIndex - 1]); }
      } else if (keyIndex === 1) {
        if (navIndex < pages - 1) { setFocus(navItems[navIndex + 1]); }
      } else {
        navClicked = navIndex;
        goTo(navIndex, e);
      }
    }
  }

  function getEvent (e) {
    e = e || win.event;
    return isTouchEvent(e) ? e.changedTouches[0] : e;
  }
  function getTarget (e) {
    return e.target || win.event.srcElement;
  }

  function isTouchEvent (e) {
    return e.type.indexOf('touch') >= 0;
  }

  function preventDefaultBehavior (e) {
    e.preventDefault ? e.preventDefault() : e.returnValue = false;
  }

  function getMoveDirectionExpected () {
    return Object(_helpers_getTouchDirection_js__WEBPACK_IMPORTED_MODULE_14__["getTouchDirection"])(Object(_helpers_toDegree_js__WEBPACK_IMPORTED_MODULE_13__["toDegree"])(lastPosition.y - initPosition.y, lastPosition.x - initPosition.x), swipeAngle) === options.axis;
  }

  function onPanStart (e) {
    if (running) {
      if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }
    }

    if (autoplay && animating) { stopAutoplayTimer(); }

    panStart = true;
    if (rafIndex) {
      Object(_helpers_caf_js__WEBPACK_IMPORTED_MODULE_1__["caf"])(rafIndex);
      rafIndex = null;
    }

    var $ = getEvent(e);
    events.emit(isTouchEvent(e) ? 'touchStart' : 'dragStart', info(e));

    if (!isTouchEvent(e) && ['img', 'a'].indexOf(getLowerCaseNodeName(getTarget(e))) >= 0) {
      preventDefaultBehavior(e);
    }

    lastPosition.x = initPosition.x = $.clientX;
    lastPosition.y = initPosition.y = $.clientY;
    if (carousel) {
      translateInit = parseFloat(container.style[transformAttr].replace(transformPrefix, ''));
      resetDuration(container, '0s');
    }
  }

  function onPanMove (e) {
    if (panStart) {
      var $ = getEvent(e);
      lastPosition.x = $.clientX;
      lastPosition.y = $.clientY;

      if (carousel) {
        if (!rafIndex) { rafIndex = Object(_helpers_raf_js__WEBPACK_IMPORTED_MODULE_0__["raf"])(function(){ panUpdate(e); }); }
      } else {
        if (moveDirectionExpected === '?') { moveDirectionExpected = getMoveDirectionExpected(); }
        if (moveDirectionExpected) { preventScroll = true; }
      }

      if ((typeof e.cancelable !== 'boolean' || e.cancelable) && preventScroll) {
        e.preventDefault();
      }
    }
  }

  function panUpdate (e) {
    if (!moveDirectionExpected) {
      panStart = false;
      return;
    }
    Object(_helpers_caf_js__WEBPACK_IMPORTED_MODULE_1__["caf"])(rafIndex);
    if (panStart) { rafIndex = Object(_helpers_raf_js__WEBPACK_IMPORTED_MODULE_0__["raf"])(function(){ panUpdate(e); }); }

    if (moveDirectionExpected === '?') { moveDirectionExpected = getMoveDirectionExpected(); }
    if (moveDirectionExpected) {
      if (!preventScroll && isTouchEvent(e)) { preventScroll = true; }

      try {
        if (e.type) { events.emit(isTouchEvent(e) ? 'touchMove' : 'dragMove', info(e)); }
      } catch(err) {}

      var x = translateInit,
          dist = getDist(lastPosition, initPosition);
      if (!horizontal || fixedWidth || autoWidth) {
        x += dist;
        x += 'px';
      } else {
        var percentageX = TRANSFORM ? dist * items * 100 / ((viewport + gutter) * slideCountNew): dist * 100 / (viewport + gutter);
        x += percentageX;
        x += '%';
      }

      container.style[transformAttr] = transformPrefix + x + transformPostfix;
    }
  }

  function onPanEnd (e) {
    if (panStart) {
      if (rafIndex) {
        Object(_helpers_caf_js__WEBPACK_IMPORTED_MODULE_1__["caf"])(rafIndex);
        rafIndex = null;
      }
      if (carousel) { resetDuration(container, ''); }
      panStart = false;

      var $ = getEvent(e);
      lastPosition.x = $.clientX;
      lastPosition.y = $.clientY;
      var dist = getDist(lastPosition, initPosition);

      if (Math.abs(dist)) {
        // drag vs click
        if (!isTouchEvent(e)) {
          // prevent "click"
          var target = getTarget(e);
          Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_30__["addEvents"])(target, {'click': function preventClick (e) {
            preventDefaultBehavior(e);
            Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_31__["removeEvents"])(target, {'click': preventClick});
          }});
        }

        if (carousel) {
          rafIndex = Object(_helpers_raf_js__WEBPACK_IMPORTED_MODULE_0__["raf"])(function() {
            if (horizontal && !autoWidth) {
              var indexMoved = - dist * items / (viewport + gutter);
              indexMoved = dist > 0 ? Math.floor(indexMoved) : Math.ceil(indexMoved);
              index += indexMoved;
            } else {
              var moved = - (translateInit + dist);
              if (moved <= 0) {
                index = indexMin;
              } else if (moved >= slidePositions[slideCountNew - 1]) {
                index = indexMax;
              } else {
                var i = 0;
                while (i < slideCountNew && moved >= slidePositions[i]) {
                  index = i;
                  if (moved > slidePositions[i] && dist < 0) { index += 1; }
                  i++;
                }
              }
            }

            render(e, dist);
            events.emit(isTouchEvent(e) ? 'touchEnd' : 'dragEnd', info(e));
          });
        } else {
          if (moveDirectionExpected) {
            onControlsClick(e, dist > 0 ? -1 : 1);
          }
        }
      }
    }

    // reset
    if (options.preventScrollOnTouch === 'auto') { preventScroll = false; }
    if (swipeAngle) { moveDirectionExpected = '?'; }
    if (autoplay && !animating) { setAutoplayTimer(); }
  }

  // === RESIZE FUNCTIONS === //
  // (slidePositions, index, items) => vertical_conentWrapper.height
  function updateContentWrapperHeight () {
    var wp = middleWrapper ? middleWrapper : innerWrapper;
    wp.style.height = slidePositions[index + items] - slidePositions[index] + 'px';
  }

  function getPages () {
    var rough = fixedWidth ? (fixedWidth + gutter) * slideCount / viewport : slideCount / items;
    return Math.min(Math.ceil(rough), slideCount);
  }

  /*
   * 1. update visible nav items list
   * 2. add "hidden" attributes to previous visible nav items
   * 3. remove "hidden" attrubutes to new visible nav items
   */
  function updateNavVisibility () {
    if (!nav || navAsThumbnails) { return; }

    if (pages !== pagesCached) {
      var min = pagesCached,
          max = pages,
          fn = _helpers_showElement_js__WEBPACK_IMPORTED_MODULE_25__["showElement"];

      if (pagesCached > pages) {
        min = pages;
        max = pagesCached;
        fn = _helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_24__["hideElement"];
      }

      while (min < max) {
        fn(navItems[min]);
        min++;
      }

      // cache pages
      pagesCached = pages;
    }
  }

  function info (e) {
    return {
      container: container,
      slideItems: slideItems,
      navContainer: navContainer,
      navItems: navItems,
      controlsContainer: controlsContainer,
      hasControls: hasControls,
      prevButton: prevButton,
      nextButton: nextButton,
      items: items,
      slideBy: slideBy,
      cloneCount: cloneCount,
      slideCount: slideCount,
      slideCountNew: slideCountNew,
      index: index,
      indexCached: indexCached,
      displayIndex: getCurrentSlide(),
      navCurrentIndex: navCurrentIndex,
      navCurrentIndexCached: navCurrentIndexCached,
      pages: pages,
      pagesCached: pagesCached,
      sheet: sheet,
      isOn: isOn,
      event: e || {},
    };
  }

  return {
    version: '2.9.3',
    getInfo: info,
    events: events,
    goTo: goTo,
    play: play,
    pause: pause,
    isOn: isOn,
    updateSliderHeight: updateInnerWrapperHeight,
    refresh: initSliderTransform,
    destroy: destroy,
    rebuild: function() {
      return tns(Object(_helpers_extend_js__WEBPACK_IMPORTED_MODULE_2__["extend"])(options, optionsElements));
    }
  };
};


/***/ }),

/***/ "./node_modules/validate.js/validate.js":
/*!**********************************************!*\
  !*** ./node_modules/validate.js/validate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/*!
 * validate.js 0.13.1
 *
 * (c) 2013-2019 Nicklas Ansman, 2013 Wrapp
 * Validate.js may be freely distributed under the MIT license.
 * For all details and documentation:
 * http://validatejs.org/
 */

(function(exports, module, define) {
  "use strict";

  // The main function that calls the validators specified by the constraints.
  // The options are the following:
  //   - format (string) - An option that controls how the returned value is formatted
  //     * flat - Returns a flat array of just the error messages
  //     * grouped - Returns the messages grouped by attribute (default)
  //     * detailed - Returns an array of the raw validation data
  //   - fullMessages (boolean) - If `true` (default) the attribute name is prepended to the error.
  //
  // Please note that the options are also passed to each validator.
  var validate = function(attributes, constraints, options) {
    options = v.extend({}, v.options, options);

    var results = v.runValidations(attributes, constraints, options)
      , attr
      , validator;

    if (results.some(function(r) { return v.isPromise(r.error); })) {
      throw new Error("Use validate.async if you want support for promises");
    }
    return validate.processValidationResults(results, options);
  };

  var v = validate;

  // Copies over attributes from one or more sources to a single destination.
  // Very much similar to underscore's extend.
  // The first argument is the target object and the remaining arguments will be
  // used as sources.
  v.extend = function(obj) {
    [].slice.call(arguments, 1).forEach(function(source) {
      for (var attr in source) {
        obj[attr] = source[attr];
      }
    });
    return obj;
  };

  v.extend(validate, {
    // This is the version of the library as a semver.
    // The toString function will allow it to be coerced into a string
    version: {
      major: 0,
      minor: 13,
      patch: 1,
      metadata: null,
      toString: function() {
        var version = v.format("%{major}.%{minor}.%{patch}", v.version);
        if (!v.isEmpty(v.version.metadata)) {
          version += "+" + v.version.metadata;
        }
        return version;
      }
    },

    // Below is the dependencies that are used in validate.js

    // The constructor of the Promise implementation.
    // If you are using Q.js, RSVP or any other A+ compatible implementation
    // override this attribute to be the constructor of that promise.
    // Since jQuery promises aren't A+ compatible they won't work.
    Promise: typeof Promise !== "undefined" ? Promise : /* istanbul ignore next */ null,

    EMPTY_STRING_REGEXP: /^\s*$/,

    // Runs the validators specified by the constraints object.
    // Will return an array of the format:
    //     [{attribute: "<attribute name>", error: "<validation result>"}, ...]
    runValidations: function(attributes, constraints, options) {
      var results = []
        , attr
        , validatorName
        , value
        , validators
        , validator
        , validatorOptions
        , error;

      if (v.isDomElement(attributes) || v.isJqueryElement(attributes)) {
        attributes = v.collectFormValues(attributes);
      }

      // Loops through each constraints, finds the correct validator and run it.
      for (attr in constraints) {
        value = v.getDeepObjectValue(attributes, attr);
        // This allows the constraints for an attribute to be a function.
        // The function will be called with the value, attribute name, the complete dict of
        // attributes as well as the options and constraints passed in.
        // This is useful when you want to have different
        // validations depending on the attribute value.
        validators = v.result(constraints[attr], value, attributes, attr, options, constraints);

        for (validatorName in validators) {
          validator = v.validators[validatorName];

          if (!validator) {
            error = v.format("Unknown validator %{name}", {name: validatorName});
            throw new Error(error);
          }

          validatorOptions = validators[validatorName];
          // This allows the options to be a function. The function will be
          // called with the value, attribute name, the complete dict of
          // attributes as well as the options and constraints passed in.
          // This is useful when you want to have different
          // validations depending on the attribute value.
          validatorOptions = v.result(validatorOptions, value, attributes, attr, options, constraints);
          if (!validatorOptions) {
            continue;
          }
          results.push({
            attribute: attr,
            value: value,
            validator: validatorName,
            globalOptions: options,
            attributes: attributes,
            options: validatorOptions,
            error: validator.call(validator,
                value,
                validatorOptions,
                attr,
                attributes,
                options)
          });
        }
      }

      return results;
    },

    // Takes the output from runValidations and converts it to the correct
    // output format.
    processValidationResults: function(errors, options) {
      errors = v.pruneEmptyErrors(errors, options);
      errors = v.expandMultipleErrors(errors, options);
      errors = v.convertErrorMessages(errors, options);

      var format = options.format || "grouped";

      if (typeof v.formatters[format] === 'function') {
        errors = v.formatters[format](errors);
      } else {
        throw new Error(v.format("Unknown format %{format}", options));
      }

      return v.isEmpty(errors) ? undefined : errors;
    },

    // Runs the validations with support for promises.
    // This function will return a promise that is settled when all the
    // validation promises have been completed.
    // It can be called even if no validations returned a promise.
    async: function(attributes, constraints, options) {
      options = v.extend({}, v.async.options, options);

      var WrapErrors = options.wrapErrors || function(errors) {
        return errors;
      };

      // Removes unknown attributes
      if (options.cleanAttributes !== false) {
        attributes = v.cleanAttributes(attributes, constraints);
      }

      var results = v.runValidations(attributes, constraints, options);

      return new v.Promise(function(resolve, reject) {
        v.waitForResults(results).then(function() {
          var errors = v.processValidationResults(results, options);
          if (errors) {
            reject(new WrapErrors(errors, options, attributes, constraints));
          } else {
            resolve(attributes);
          }
        }, function(err) {
          reject(err);
        });
      });
    },

    single: function(value, constraints, options) {
      options = v.extend({}, v.single.options, options, {
        format: "flat",
        fullMessages: false
      });
      return v({single: value}, {single: constraints}, options);
    },

    // Returns a promise that is resolved when all promises in the results array
    // are settled. The promise returned from this function is always resolved,
    // never rejected.
    // This function modifies the input argument, it replaces the promises
    // with the value returned from the promise.
    waitForResults: function(results) {
      // Create a sequence of all the results starting with a resolved promise.
      return results.reduce(function(memo, result) {
        // If this result isn't a promise skip it in the sequence.
        if (!v.isPromise(result.error)) {
          return memo;
        }

        return memo.then(function() {
          return result.error.then(function(error) {
            result.error = error || null;
          });
        });
      }, new v.Promise(function(r) { r(); })); // A resolved promise
    },

    // If the given argument is a call: function the and: function return the value
    // otherwise just return the value. Additional arguments will be passed as
    // arguments to the function.
    // Example:
    // ```
    // result('foo') // 'foo'
    // result(Math.max, 1, 2) // 2
    // ```
    result: function(value) {
      var args = [].slice.call(arguments, 1);
      if (typeof value === 'function') {
        value = value.apply(null, args);
      }
      return value;
    },

    // Checks if the value is a number. This function does not consider NaN a
    // number like many other `isNumber` functions do.
    isNumber: function(value) {
      return typeof value === 'number' && !isNaN(value);
    },

    // Returns false if the object is not a function
    isFunction: function(value) {
      return typeof value === 'function';
    },

    // A simple check to verify that the value is an integer. Uses `isNumber`
    // and a simple modulo check.
    isInteger: function(value) {
      return v.isNumber(value) && value % 1 === 0;
    },

    // Checks if the value is a boolean
    isBoolean: function(value) {
      return typeof value === 'boolean';
    },

    // Uses the `Object` function to check if the given argument is an object.
    isObject: function(obj) {
      return obj === Object(obj);
    },

    // Simply checks if the object is an instance of a date
    isDate: function(obj) {
      return obj instanceof Date;
    },

    // Returns false if the object is `null` of `undefined`
    isDefined: function(obj) {
      return obj !== null && obj !== undefined;
    },

    // Checks if the given argument is a promise. Anything with a `then`
    // function is considered a promise.
    isPromise: function(p) {
      return !!p && v.isFunction(p.then);
    },

    isJqueryElement: function(o) {
      return o && v.isString(o.jquery);
    },

    isDomElement: function(o) {
      if (!o) {
        return false;
      }

      if (!o.querySelectorAll || !o.querySelector) {
        return false;
      }

      if (v.isObject(document) && o === document) {
        return true;
      }

      // http://stackoverflow.com/a/384380/699304
      /* istanbul ignore else */
      if (typeof HTMLElement === "object") {
        return o instanceof HTMLElement;
      } else {
        return o &&
          typeof o === "object" &&
          o !== null &&
          o.nodeType === 1 &&
          typeof o.nodeName === "string";
      }
    },

    isEmpty: function(value) {
      var attr;

      // Null and undefined are empty
      if (!v.isDefined(value)) {
        return true;
      }

      // functions are non empty
      if (v.isFunction(value)) {
        return false;
      }

      // Whitespace only strings are empty
      if (v.isString(value)) {
        return v.EMPTY_STRING_REGEXP.test(value);
      }

      // For arrays we use the length property
      if (v.isArray(value)) {
        return value.length === 0;
      }

      // Dates have no attributes but aren't empty
      if (v.isDate(value)) {
        return false;
      }

      // If we find at least one property we consider it non empty
      if (v.isObject(value)) {
        for (attr in value) {
          return false;
        }
        return true;
      }

      return false;
    },

    // Formats the specified strings with the given values like so:
    // ```
    // format("Foo: %{foo}", {foo: "bar"}) // "Foo bar"
    // ```
    // If you want to write %{...} without having it replaced simply
    // prefix it with % like this `Foo: %%{foo}` and it will be returned
    // as `"Foo: %{foo}"`
    format: v.extend(function(str, vals) {
      if (!v.isString(str)) {
        return str;
      }
      return str.replace(v.format.FORMAT_REGEXP, function(m0, m1, m2) {
        if (m1 === '%') {
          return "%{" + m2 + "}";
        } else {
          return String(vals[m2]);
        }
      });
    }, {
      // Finds %{key} style patterns in the given string
      FORMAT_REGEXP: /(%?)%\{([^\}]+)\}/g
    }),

    // "Prettifies" the given string.
    // Prettifying means replacing [.\_-] with spaces as well as splitting
    // camel case words.
    prettify: function(str) {
      if (v.isNumber(str)) {
        // If there are more than 2 decimals round it to two
        if ((str * 100) % 1 === 0) {
          return "" + str;
        } else {
          return parseFloat(Math.round(str * 100) / 100).toFixed(2);
        }
      }

      if (v.isArray(str)) {
        return str.map(function(s) { return v.prettify(s); }).join(", ");
      }

      if (v.isObject(str)) {
        if (!v.isDefined(str.toString)) {
          return JSON.stringify(str);
        }

        return str.toString();
      }

      // Ensure the string is actually a string
      str = "" + str;

      return str
        // Splits keys separated by periods
        .replace(/([^\s])\.([^\s])/g, '$1 $2')
        // Removes backslashes
        .replace(/\\+/g, '')
        // Replaces - and - with space
        .replace(/[_-]/g, ' ')
        // Splits camel cased words
        .replace(/([a-z])([A-Z])/g, function(m0, m1, m2) {
          return "" + m1 + " " + m2.toLowerCase();
        })
        .toLowerCase();
    },

    stringifyValue: function(value, options) {
      var prettify = options && options.prettify || v.prettify;
      return prettify(value);
    },

    isString: function(value) {
      return typeof value === 'string';
    },

    isArray: function(value) {
      return {}.toString.call(value) === '[object Array]';
    },

    // Checks if the object is a hash, which is equivalent to an object that
    // is neither an array nor a function.
    isHash: function(value) {
      return v.isObject(value) && !v.isArray(value) && !v.isFunction(value);
    },

    contains: function(obj, value) {
      if (!v.isDefined(obj)) {
        return false;
      }
      if (v.isArray(obj)) {
        return obj.indexOf(value) !== -1;
      }
      return value in obj;
    },

    unique: function(array) {
      if (!v.isArray(array)) {
        return array;
      }
      return array.filter(function(el, index, array) {
        return array.indexOf(el) == index;
      });
    },

    forEachKeyInKeypath: function(object, keypath, callback) {
      if (!v.isString(keypath)) {
        return undefined;
      }

      var key = ""
        , i
        , escape = false;

      for (i = 0; i < keypath.length; ++i) {
        switch (keypath[i]) {
          case '.':
            if (escape) {
              escape = false;
              key += '.';
            } else {
              object = callback(object, key, false);
              key = "";
            }
            break;

          case '\\':
            if (escape) {
              escape = false;
              key += '\\';
            } else {
              escape = true;
            }
            break;

          default:
            escape = false;
            key += keypath[i];
            break;
        }
      }

      return callback(object, key, true);
    },

    getDeepObjectValue: function(obj, keypath) {
      if (!v.isObject(obj)) {
        return undefined;
      }

      return v.forEachKeyInKeypath(obj, keypath, function(obj, key) {
        if (v.isObject(obj)) {
          return obj[key];
        }
      });
    },

    // This returns an object with all the values of the form.
    // It uses the input name as key and the value as value
    // So for example this:
    // <input type="text" name="email" value="foo@bar.com" />
    // would return:
    // {email: "foo@bar.com"}
    collectFormValues: function(form, options) {
      var values = {}
        , i
        , j
        , input
        , inputs
        , option
        , value;

      if (v.isJqueryElement(form)) {
        form = form[0];
      }

      if (!form) {
        return values;
      }

      options = options || {};

      inputs = form.querySelectorAll("input[name], textarea[name]");
      for (i = 0; i < inputs.length; ++i) {
        input = inputs.item(i);

        if (v.isDefined(input.getAttribute("data-ignored"))) {
          continue;
        }

        var name = input.name.replace(/\./g, "\\\\.");
        value = v.sanitizeFormValue(input.value, options);
        if (input.type === "number") {
          value = value ? +value : null;
        } else if (input.type === "checkbox") {
          if (input.attributes.value) {
            if (!input.checked) {
              value = values[name] || null;
            }
          } else {
            value = input.checked;
          }
        } else if (input.type === "radio") {
          if (!input.checked) {
            value = values[name] || null;
          }
        }
        values[name] = value;
      }

      inputs = form.querySelectorAll("select[name]");
      for (i = 0; i < inputs.length; ++i) {
        input = inputs.item(i);
        if (v.isDefined(input.getAttribute("data-ignored"))) {
          continue;
        }

        if (input.multiple) {
          value = [];
          for (j in input.options) {
            option = input.options[j];
             if (option && option.selected) {
              value.push(v.sanitizeFormValue(option.value, options));
            }
          }
        } else {
          var _val = typeof input.options[input.selectedIndex] !== 'undefined' ? input.options[input.selectedIndex].value : /* istanbul ignore next */ '';
          value = v.sanitizeFormValue(_val, options);
        }
        values[input.name] = value;
      }

      return values;
    },

    sanitizeFormValue: function(value, options) {
      if (options.trim && v.isString(value)) {
        value = value.trim();
      }

      if (options.nullify !== false && value === "") {
        return null;
      }
      return value;
    },

    capitalize: function(str) {
      if (!v.isString(str)) {
        return str;
      }
      return str[0].toUpperCase() + str.slice(1);
    },

    // Remove all errors who's error attribute is empty (null or undefined)
    pruneEmptyErrors: function(errors) {
      return errors.filter(function(error) {
        return !v.isEmpty(error.error);
      });
    },

    // In
    // [{error: ["err1", "err2"], ...}]
    // Out
    // [{error: "err1", ...}, {error: "err2", ...}]
    //
    // All attributes in an error with multiple messages are duplicated
    // when expanding the errors.
    expandMultipleErrors: function(errors) {
      var ret = [];
      errors.forEach(function(error) {
        // Removes errors without a message
        if (v.isArray(error.error)) {
          error.error.forEach(function(msg) {
            ret.push(v.extend({}, error, {error: msg}));
          });
        } else {
          ret.push(error);
        }
      });
      return ret;
    },

    // Converts the error mesages by prepending the attribute name unless the
    // message is prefixed by ^
    convertErrorMessages: function(errors, options) {
      options = options || {};

      var ret = []
        , prettify = options.prettify || v.prettify;
      errors.forEach(function(errorInfo) {
        var error = v.result(errorInfo.error,
            errorInfo.value,
            errorInfo.attribute,
            errorInfo.options,
            errorInfo.attributes,
            errorInfo.globalOptions);

        if (!v.isString(error)) {
          ret.push(errorInfo);
          return;
        }

        if (error[0] === '^') {
          error = error.slice(1);
        } else if (options.fullMessages !== false) {
          error = v.capitalize(prettify(errorInfo.attribute)) + " " + error;
        }
        error = error.replace(/\\\^/g, "^");
        error = v.format(error, {
          value: v.stringifyValue(errorInfo.value, options)
        });
        ret.push(v.extend({}, errorInfo, {error: error}));
      });
      return ret;
    },

    // In:
    // [{attribute: "<attributeName>", ...}]
    // Out:
    // {"<attributeName>": [{attribute: "<attributeName>", ...}]}
    groupErrorsByAttribute: function(errors) {
      var ret = {};
      errors.forEach(function(error) {
        var list = ret[error.attribute];
        if (list) {
          list.push(error);
        } else {
          ret[error.attribute] = [error];
        }
      });
      return ret;
    },

    // In:
    // [{error: "<message 1>", ...}, {error: "<message 2>", ...}]
    // Out:
    // ["<message 1>", "<message 2>"]
    flattenErrorsToArray: function(errors) {
      return errors
        .map(function(error) { return error.error; })
        .filter(function(value, index, self) {
          return self.indexOf(value) === index;
        });
    },

    cleanAttributes: function(attributes, whitelist) {
      function whitelistCreator(obj, key, last) {
        if (v.isObject(obj[key])) {
          return obj[key];
        }
        return (obj[key] = last ? true : {});
      }

      function buildObjectWhitelist(whitelist) {
        var ow = {}
          , lastObject
          , attr;
        for (attr in whitelist) {
          if (!whitelist[attr]) {
            continue;
          }
          v.forEachKeyInKeypath(ow, attr, whitelistCreator);
        }
        return ow;
      }

      function cleanRecursive(attributes, whitelist) {
        if (!v.isObject(attributes)) {
          return attributes;
        }

        var ret = v.extend({}, attributes)
          , w
          , attribute;

        for (attribute in attributes) {
          w = whitelist[attribute];

          if (v.isObject(w)) {
            ret[attribute] = cleanRecursive(ret[attribute], w);
          } else if (!w) {
            delete ret[attribute];
          }
        }
        return ret;
      }

      if (!v.isObject(whitelist) || !v.isObject(attributes)) {
        return {};
      }

      whitelist = buildObjectWhitelist(whitelist);
      return cleanRecursive(attributes, whitelist);
    },

    exposeModule: function(validate, root, exports, module, define) {
      if (exports) {
        if (module && module.exports) {
          exports = module.exports = validate;
        }
        exports.validate = validate;
      } else {
        root.validate = validate;
        if (validate.isFunction(define) && define.amd) {
          define([], function () { return validate; });
        }
      }
    },

    warn: function(msg) {
      if (typeof console !== "undefined" && console.warn) {
        console.warn("[validate.js] " + msg);
      }
    },

    error: function(msg) {
      if (typeof console !== "undefined" && console.error) {
        console.error("[validate.js] " + msg);
      }
    }
  });

  validate.validators = {
    // Presence validates that the value isn't empty
    presence: function(value, options) {
      options = v.extend({}, this.options, options);
      if (options.allowEmpty !== false ? !v.isDefined(value) : v.isEmpty(value)) {
        return options.message || this.message || "can't be blank";
      }
    },
    length: function(value, options, attribute) {
      // Empty values are allowed
      if (!v.isDefined(value)) {
        return;
      }

      options = v.extend({}, this.options, options);

      var is = options.is
        , maximum = options.maximum
        , minimum = options.minimum
        , tokenizer = options.tokenizer || function(val) { return val; }
        , err
        , errors = [];

      value = tokenizer(value);
      var length = value.length;
      if(!v.isNumber(length)) {
        return options.message || this.notValid || "has an incorrect length";
      }

      // Is checks
      if (v.isNumber(is) && length !== is) {
        err = options.wrongLength ||
          this.wrongLength ||
          "is the wrong length (should be %{count} characters)";
        errors.push(v.format(err, {count: is}));
      }

      if (v.isNumber(minimum) && length < minimum) {
        err = options.tooShort ||
          this.tooShort ||
          "is too short (minimum is %{count} characters)";
        errors.push(v.format(err, {count: minimum}));
      }

      if (v.isNumber(maximum) && length > maximum) {
        err = options.tooLong ||
          this.tooLong ||
          "is too long (maximum is %{count} characters)";
        errors.push(v.format(err, {count: maximum}));
      }

      if (errors.length > 0) {
        return options.message || errors;
      }
    },
    numericality: function(value, options, attribute, attributes, globalOptions) {
      // Empty values are fine
      if (!v.isDefined(value)) {
        return;
      }

      options = v.extend({}, this.options, options);

      var errors = []
        , name
        , count
        , checks = {
            greaterThan:          function(v, c) { return v > c; },
            greaterThanOrEqualTo: function(v, c) { return v >= c; },
            equalTo:              function(v, c) { return v === c; },
            lessThan:             function(v, c) { return v < c; },
            lessThanOrEqualTo:    function(v, c) { return v <= c; },
            divisibleBy:          function(v, c) { return v % c === 0; }
          }
        , prettify = options.prettify ||
          (globalOptions && globalOptions.prettify) ||
          v.prettify;

      // Strict will check that it is a valid looking number
      if (v.isString(value) && options.strict) {
        var pattern = "^-?(0|[1-9]\\d*)";
        if (!options.onlyInteger) {
          pattern += "(\\.\\d+)?";
        }
        pattern += "$";

        if (!(new RegExp(pattern).test(value))) {
          return options.message ||
            options.notValid ||
            this.notValid ||
            this.message ||
            "must be a valid number";
        }
      }

      // Coerce the value to a number unless we're being strict.
      if (options.noStrings !== true && v.isString(value) && !v.isEmpty(value)) {
        value = +value;
      }

      // If it's not a number we shouldn't continue since it will compare it.
      if (!v.isNumber(value)) {
        return options.message ||
          options.notValid ||
          this.notValid ||
          this.message ||
          "is not a number";
      }

      // Same logic as above, sort of. Don't bother with comparisons if this
      // doesn't pass.
      if (options.onlyInteger && !v.isInteger(value)) {
        return options.message ||
          options.notInteger ||
          this.notInteger ||
          this.message ||
          "must be an integer";
      }

      for (name in checks) {
        count = options[name];
        if (v.isNumber(count) && !checks[name](value, count)) {
          // This picks the default message if specified
          // For example the greaterThan check uses the message from
          // this.notGreaterThan so we capitalize the name and prepend "not"
          var key = "not" + v.capitalize(name);
          var msg = options[key] ||
            this[key] ||
            this.message ||
            "must be %{type} %{count}";

          errors.push(v.format(msg, {
            count: count,
            type: prettify(name)
          }));
        }
      }

      if (options.odd && value % 2 !== 1) {
        errors.push(options.notOdd ||
            this.notOdd ||
            this.message ||
            "must be odd");
      }
      if (options.even && value % 2 !== 0) {
        errors.push(options.notEven ||
            this.notEven ||
            this.message ||
            "must be even");
      }

      if (errors.length) {
        return options.message || errors;
      }
    },
    datetime: v.extend(function(value, options) {
      if (!v.isFunction(this.parse) || !v.isFunction(this.format)) {
        throw new Error("Both the parse and format functions needs to be set to use the datetime/date validator");
      }

      // Empty values are fine
      if (!v.isDefined(value)) {
        return;
      }

      options = v.extend({}, this.options, options);

      var err
        , errors = []
        , earliest = options.earliest ? this.parse(options.earliest, options) : NaN
        , latest = options.latest ? this.parse(options.latest, options) : NaN;

      value = this.parse(value, options);

      // 86400000 is the number of milliseconds in a day, this is used to remove
      // the time from the date
      if (isNaN(value) || options.dateOnly && value % 86400000 !== 0) {
        err = options.notValid ||
          options.message ||
          this.notValid ||
          "must be a valid date";
        return v.format(err, {value: arguments[0]});
      }

      if (!isNaN(earliest) && value < earliest) {
        err = options.tooEarly ||
          options.message ||
          this.tooEarly ||
          "must be no earlier than %{date}";
        err = v.format(err, {
          value: this.format(value, options),
          date: this.format(earliest, options)
        });
        errors.push(err);
      }

      if (!isNaN(latest) && value > latest) {
        err = options.tooLate ||
          options.message ||
          this.tooLate ||
          "must be no later than %{date}";
        err = v.format(err, {
          date: this.format(latest, options),
          value: this.format(value, options)
        });
        errors.push(err);
      }

      if (errors.length) {
        return v.unique(errors);
      }
    }, {
      parse: null,
      format: null
    }),
    date: function(value, options) {
      options = v.extend({}, options, {dateOnly: true});
      return v.validators.datetime.call(v.validators.datetime, value, options);
    },
    format: function(value, options) {
      if (v.isString(options) || (options instanceof RegExp)) {
        options = {pattern: options};
      }

      options = v.extend({}, this.options, options);

      var message = options.message || this.message || "is invalid"
        , pattern = options.pattern
        , match;

      // Empty values are allowed
      if (!v.isDefined(value)) {
        return;
      }
      if (!v.isString(value)) {
        return message;
      }

      if (v.isString(pattern)) {
        pattern = new RegExp(options.pattern, options.flags);
      }
      match = pattern.exec(value);
      if (!match || match[0].length != value.length) {
        return message;
      }
    },
    inclusion: function(value, options) {
      // Empty values are fine
      if (!v.isDefined(value)) {
        return;
      }
      if (v.isArray(options)) {
        options = {within: options};
      }
      options = v.extend({}, this.options, options);
      if (v.contains(options.within, value)) {
        return;
      }
      var message = options.message ||
        this.message ||
        "^%{value} is not included in the list";
      return v.format(message, {value: value});
    },
    exclusion: function(value, options) {
      // Empty values are fine
      if (!v.isDefined(value)) {
        return;
      }
      if (v.isArray(options)) {
        options = {within: options};
      }
      options = v.extend({}, this.options, options);
      if (!v.contains(options.within, value)) {
        return;
      }
      var message = options.message || this.message || "^%{value} is restricted";
      if (v.isString(options.within[value])) {
        value = options.within[value];
      }
      return v.format(message, {value: value});
    },
    email: v.extend(function(value, options) {
      options = v.extend({}, this.options, options);
      var message = options.message || this.message || "is not a valid email";
      // Empty values are fine
      if (!v.isDefined(value)) {
        return;
      }
      if (!v.isString(value)) {
        return message;
      }
      if (!this.PATTERN.exec(value)) {
        return message;
      }
    }, {
      PATTERN: /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i
    }),
    equality: function(value, options, attribute, attributes, globalOptions) {
      if (!v.isDefined(value)) {
        return;
      }

      if (v.isString(options)) {
        options = {attribute: options};
      }
      options = v.extend({}, this.options, options);
      var message = options.message ||
        this.message ||
        "is not equal to %{attribute}";

      if (v.isEmpty(options.attribute) || !v.isString(options.attribute)) {
        throw new Error("The attribute must be a non empty string");
      }

      var otherValue = v.getDeepObjectValue(attributes, options.attribute)
        , comparator = options.comparator || function(v1, v2) {
          return v1 === v2;
        }
        , prettify = options.prettify ||
          (globalOptions && globalOptions.prettify) ||
          v.prettify;

      if (!comparator(value, otherValue, options, attribute, attributes)) {
        return v.format(message, {attribute: prettify(options.attribute)});
      }
    },
    // A URL validator that is used to validate URLs with the ability to
    // restrict schemes and some domains.
    url: function(value, options) {
      if (!v.isDefined(value)) {
        return;
      }

      options = v.extend({}, this.options, options);

      var message = options.message || this.message || "is not a valid url"
        , schemes = options.schemes || this.schemes || ['http', 'https']
        , allowLocal = options.allowLocal || this.allowLocal || false
        , allowDataUrl = options.allowDataUrl || this.allowDataUrl || false;
      if (!v.isString(value)) {
        return message;
      }

      // https://gist.github.com/dperini/729294
      var regex =
        "^" +
        // protocol identifier
        "(?:(?:" + schemes.join("|") + ")://)" +
        // user:pass authentication
        "(?:\\S+(?::\\S*)?@)?" +
        "(?:";

      var tld = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))";

      if (allowLocal) {
        tld += "?";
      } else {
        regex +=
          // IP address exclusion
          // private & local networks
          "(?!(?:10|127)(?:\\.\\d{1,3}){3})" +
          "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" +
          "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})";
      }

      regex +=
          // IP address dotted notation octets
          // excludes loopback network 0.0.0.0
          // excludes reserved space >= 224.0.0.0
          // excludes network & broacast addresses
          // (first & last IP address of each class)
          "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" +
          "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" +
          "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" +
        "|" +
          // host name
          "(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)" +
          // domain name
          "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*" +
          tld +
        ")" +
        // port number
        "(?::\\d{2,5})?" +
        // resource path
        "(?:[/?#]\\S*)?" +
      "$";

      if (allowDataUrl) {
        // RFC 2397
        var mediaType = "\\w+\\/[-+.\\w]+(?:;[\\w=]+)*";
        var urlchar = "[A-Za-z0-9-_.!~\\*'();\\/?:@&=+$,%]*";
        var dataurl = "data:(?:"+mediaType+")?(?:;base64)?,"+urlchar;
        regex = "(?:"+regex+")|(?:^"+dataurl+"$)";
      }

      var PATTERN = new RegExp(regex, 'i');
      if (!PATTERN.exec(value)) {
        return message;
      }
    },
    type: v.extend(function(value, originalOptions, attribute, attributes, globalOptions) {
      if (v.isString(originalOptions)) {
        originalOptions = {type: originalOptions};
      }

      if (!v.isDefined(value)) {
        return;
      }

      var options = v.extend({}, this.options, originalOptions);

      var type = options.type;
      if (!v.isDefined(type)) {
        throw new Error("No type was specified");
      }

      var check;
      if (v.isFunction(type)) {
        check = type;
      } else {
        check = this.types[type];
      }

      if (!v.isFunction(check)) {
        throw new Error("validate.validators.type.types." + type + " must be a function.");
      }

      if (!check(value, options, attribute, attributes, globalOptions)) {
        var message = originalOptions.message ||
          this.messages[type] ||
          this.message ||
          options.message ||
          (v.isFunction(type) ? "must be of the correct type" : "must be of type %{type}");

        if (v.isFunction(message)) {
          message = message(value, originalOptions, attribute, attributes, globalOptions);
        }

        return v.format(message, {attribute: v.prettify(attribute), type: type});
      }
    }, {
      types: {
        object: function(value) {
          return v.isObject(value) && !v.isArray(value);
        },
        array: v.isArray,
        integer: v.isInteger,
        number: v.isNumber,
        string: v.isString,
        date: v.isDate,
        boolean: v.isBoolean
      },
      messages: {}
    })
  };

  validate.formatters = {
    detailed: function(errors) {return errors;},
    flat: v.flattenErrorsToArray,
    grouped: function(errors) {
      var attr;

      errors = v.groupErrorsByAttribute(errors);
      for (attr in errors) {
        errors[attr] = v.flattenErrorsToArray(errors[attr]);
      }
      return errors;
    },
    constraint: function(errors) {
      var attr;
      errors = v.groupErrorsByAttribute(errors);
      for (attr in errors) {
        errors[attr] = errors[attr].map(function(result) {
          return result.validator;
        }).sort();
      }
      return errors;
    }
  };

  validate.exposeModule(validate, this, exports, module, __webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js"));
}).call(this,
         true ? /* istanbul ignore next */ exports : undefined,
         true ? /* istanbul ignore next */ module : undefined,
        __webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js"));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/buildin/amd-define.js":
/*!***************************************!*\
  !*** (webpack)/buildin/amd-define.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo';
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });

/***/ }),

/***/ "./resources/js/helper.js":
/*!********************************!*\
  !*** ./resources/js/helper.js ***!
  \********************************/
/*! exports provided: $, $$, current_package, locale, calculateAge, fadeIn, fadeOut, getZipcodeData, getRadioSelectedValue, getCheckedCheckboxesFor, scrollToTargetAdjusted */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$", function() { return $; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$", function() { return $$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "current_package", function() { return current_package; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locale", function() { return locale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateAge", function() { return calculateAge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeIn", function() { return fadeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeOut", function() { return fadeOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getZipcodeData", function() { return getZipcodeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRadioSelectedValue", function() { return getRadioSelectedValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCheckedCheckboxesFor", function() { return getCheckedCheckboxesFor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollToTargetAdjusted", function() { return scrollToTargetAdjusted; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
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

function _objectSpread(target) {
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


var $ = function $(selector) {
  var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return (base || document).querySelector(selector);
};
var $$ = function $$(selector) {
  var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return (base || document).querySelectorAll(selector);
};
var current_package = $('main').getAttribute('data-package');
var locale = $('html').getAttribute('lang');
var calculateAge = function calculateAge(date) {
  var now = new Date();
  var result = {
    year: 0,
    month: 0,
    day: 0
  };
  var age = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["parseISO"])(date);
  var year = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["differenceInYears"])(now, age);

  if (year > 0) {
    result = _objectSpread(_objectSpread({}, result), {}, {
      year: year
    });
    age = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["addYears"])(age, year);
  }

  var month = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["differenceInMonths"])(now, age); // console.log('month :' + month);

  if (month > 0) {
    result = _objectSpread(_objectSpread({}, result), {}, {
      month: month
    });
    age = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["addMonths"])(age, month);
  }

  var day = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["differenceInDays"])(now, age); // console.log('day :' + day);

  if (day > 0) {
    result = _objectSpread(_objectSpread({}, result), {}, {
      day: day
    });
  } // console.log(result);


  return result;
};
var fadeIn = function fadeIn(elem, ms) {
  if (!elem) return;
  elem.style.opacity = 0;
  elem.style.filter = "alpha(opacity=0)";
  elem.style.display = "block";
  elem.style.visibility = "visible";

  if (ms) {
    var opacity = 0;
    var timer = setInterval(function () {
      opacity += 50 / ms;

      if (opacity >= 1) {
        clearInterval(timer);
        opacity = 1;
      }

      elem.style.opacity = opacity;
      elem.style.filter = "alpha(opacity=" + opacity * 100 + ")";
    }, 50);
  } else {
    elem.style.opacity = 1;
    elem.style.filter = "alpha(opacity=1)";
  }
};
var fadeOut = function fadeOut(elem, ms) {
  if (!elem) return;

  if (ms) {
    var opacity = 1;
    var timer = setInterval(function () {
      opacity -= 50 / ms;

      if (opacity <= 0) {
        clearInterval(timer);
        opacity = 0;
        elem.style.display = "none";
        elem.style.visibility = "hidden";
      }

      elem.style.opacity = opacity;
      elem.style.filter = "alpha(opacity=" + opacity * 100 + ")";
    }, 50);
  } else {
    elem.style.opacity = 0;
    elem.style.filter = "alpha(opacity=0)";
    elem.style.display = "none";
    elem.style.visibility = "hidden";
  }
};
var getZipcodeData = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var res;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('/storage/json/zipcode.json');

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            return _context.abrupt("return", _context.sent);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getZipcodeData() {
    return _ref.apply(this, arguments);
  };
}();
var getRadioSelectedValue = function getRadioSelectedValue(name) {
  var radios = document.getElementsByName(name);

  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      return radios[i].value;
    }
  }
};
var getCheckedCheckboxesFor = function getCheckedCheckboxesFor(name) {
  var checkeds = $$('input[name="' + name + '"]:checked'),
      values = [];
  checkeds.forEach(function (chkd) {
    values.push(chkd.value);
  });
  return values;
};
var scrollToTargetAdjusted = function scrollToTargetAdjusted($elm) {
  if ($elm) {
    var offset = 80;
    var bodyRect = document.body.getBoundingClientRect().top;
    var elementRect = $elm.getBoundingClientRect().top;
    var elementPosition = elementRect - bodyRect;
    var offsetPosition = elementPosition - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};

/***/ }),

/***/ "./resources/js/index.js":
/*!*******************************!*\
  !*** ./resources/js/index.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiny-slider/src/tiny-slider */ "./node_modules/tiny-slider/src/tiny-slider.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ "./resources/js/helper.js");
__webpack_require__(/*! ./main */ "./resources/js/main.js");



document.addEventListener("DOMContentLoaded", function () {
  /* Product Slider */
  var productSlider = Object(_helper__WEBPACK_IMPORTED_MODULE_1__["$$"])('.product_slider');
  productSlider.forEach(function (el) {
    Object(tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
      container: el,
      mode: "gallery",
      speed: 1600,
      items: 1,
      slideBy: 'page',
      autoplay: true,
      autoplayButton: false,
      autoplayButtonOutput: false,
      autoplayHoverPause: true,
      navPosition: 'bottom',
      controlsText: ['<i class="icofont-rounded-left"></i>', '<i class="icofont-rounded-right"></i>']
    });
  }); // <<<<<<<<<<<<<< TO DO Start Popup >>>>>>>>>>>>>>>>>>>>>>>>
  // //One page
  // ************************* TO DO Open dialog *************************
  // const $formOverlay = $('#frm_overlay');
  // if ($formOverlay) {
  //     $(".page-overlay .close").addEventListener('click', (e) => {
  //         e.preventDefault();
  //         $('.page-overlay').style.display = 'none';
  //     }, true);
  // }
  //Two page
  // const $formOverlay = $('#frm_overlay');
  // if ($formOverlay) {
  //     $('.page-overlay').style.display = 'none';
  //     $(".page-overlay .close").addEventListener('click', (e) => {
  //         e.preventDefault();
  //         $('.page-overlay').style.display = 'none';
  //     }, true);
  // }
  //
  // ************************* TO DO Close dialog *************************
  // const $frm_overlayClose = $('#frm_overlayClose'); 
  // if ($frm_overlayClose) {
  //     $(".page-overlay-close .close").addEventListener('click', (e) => {
  //         e.preventDefault();
  //         $('.page-overlay-close').style.display = 'none';
  //         $('.page-overlay').style.display = 'flex';
  //     }, true);
  // }
  // <<<<<<<<<<<<<< End Popup >>>>>>>>>>>>>>>>>>>>>>>>
});

/***/ }),

/***/ "./resources/js/main.js":
/*!******************************!*\
  !*** ./resources/js/main.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tiny-slider/src/tiny-slider */ "./node_modules/tiny-slider/src/tiny-slider.js");
/* harmony import */ var scrollreveal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! scrollreveal */ "./node_modules/scrollreveal/dist/scrollreveal.es.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helper */ "./resources/js/helper.js");
/* harmony import */ var validate_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! validate.js */ "./node_modules/validate.js/validate.js");
/* harmony import */ var validate_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(validate_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _validate_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validate_form */ "./resources/js/validate_form.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
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

function _objectSpread(target) {
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



__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");






document.addEventListener("DOMContentLoaded", function () {
  /* change language */
  var $ddlLanguage = Object(_helper__WEBPACK_IMPORTED_MODULE_4__["$"])('.language-switcher .current');

  if ($ddlLanguage) {
    $ddlLanguage.addEventListener('click', function () {
      $ddlLanguage.classList.toggle('on');
    });
  }
  /* mobile menu */


  var $navIcon = Object(_helper__WEBPACK_IMPORTED_MODULE_4__["$"])('.nav-icon');

  if ($navIcon) {
    $navIcon.addEventListener("click", function (e) {
      e.preventDefault();
      $navIcon.classList.toggle('on');
      Object(_helper__WEBPACK_IMPORTED_MODULE_4__["$"])('header nav').classList.toggle('on');
    });
  }

  var $hasSub = Object(_helper__WEBPACK_IMPORTED_MODULE_4__["$$"])('.has_sub');

  if ($hasSub) {
    $hasSub.forEach(function ($a) {
      $a.addEventListener("click", function (e) {
        e.preventDefault();
        var $parent = $a.closest('li');
        $parent.classList.toggle('on');
        $parent.querySelector('.sub').classList.toggle('on');
      });
    });
  }

  var $h3NoPackage = Object(_helper__WEBPACK_IMPORTED_MODULE_4__["$$"])('h3.no-package');

  if ($h3NoPackage) {
    $h3NoPackage.forEach(function ($h3) {
      $h3.addEventListener("click", function (e) {
        e.preventDefault();
        $h3.classList.toggle('on');
        Object(_helper__WEBPACK_IMPORTED_MODULE_4__["$"])("div.no-package[data-index=\"".concat($h3.getAttribute('data-index'), "\"]")).classList.toggle('on'); // const $parent = $a.closest('li');
        //
        // $parent.classList.toggle('on');
        // $parent.querySelector('.sub').classList.toggle('on');
      });
    });
  }
  /* search */


  var $btnSearch = Object(_helper__WEBPACK_IMPORTED_MODULE_4__["$"])('#btn-search');

  if ($btnSearch) {
    $btnSearch.addEventListener("click", function (e) {
      e.preventDefault();
      Object(_helper__WEBPACK_IMPORTED_MODULE_4__["$"])('#frn_search').classList.toggle('on');
    });
  }
  /* sticky menu */


  var $stickyMenu = Object(_helper__WEBPACK_IMPORTED_MODULE_4__["$"])('.sticky-menu');
  var $stickyMenuClose = $stickyMenu.querySelector('.close');
  var $stickyMenuOpen = $stickyMenu.querySelector('.open');

  if ($stickyMenuClose) {
    $stickyMenuClose.addEventListener("click", function (e) {
      e.preventDefault();
      $stickyMenu.classList.remove('on');
    });
  }

  if ($stickyMenuOpen) {
    $stickyMenuOpen.addEventListener("click", function (e) {
      e.preventDefault();
      $stickyMenu.classList.add('on');
    });
  }
  /* footer collapse */


  var sitemapHeader = Object(_helper__WEBPACK_IMPORTED_MODULE_4__["$$"])('footer nav h6');

  if (sitemapHeader) {
    sitemapHeader.forEach(function (header) {
      header.addEventListener("click", function (e) {
        e.preventDefault();
        header.classList.toggle('collapse');
        header.closest('section').querySelectorAll('ul:not(.social)').forEach(function (ul) {
          ul.classList.toggle('collapse');
        });
      });
    });
  }
  /* slideshow */


  if (Object(_helper__WEBPACK_IMPORTED_MODULE_4__["$"])('.slider')) {
    Object(tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_2__["tns"])({
      container: '.slider',
      items: 1,
      controls: false,
      slideBy: 'page',
      autoplay: true,
      autoplayButton: false,
      autoplayButtonOutput: false,
      autoplayHoverPause: true,
      navPosition: 'bottom'
    });
  }

  window.addEventListener('scroll', function () {
    var scrollBarPosition = window.pageYOffset | document.body.scrollTop;
    var $header = Object(_helper__WEBPACK_IMPORTED_MODULE_4__["$"])('header');

    if (scrollBarPosition === 0) {
      $header.classList.remove('fixed');
    } else {
      $header.classList.add('fixed');
    }
  });
  /* timeline */

  if (Object(_helper__WEBPACK_IMPORTED_MODULE_4__["$"])('#timeline')) {
    Object(tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_2__["tns"])({
      container: '#timeline',
      speed: 800,
      items: 1,
      loop: false,
      controls: true,
      slideBy: 1,
      nav: false,
      autoplay: false,
      controlsText: ['<i class="icofont-rounded-left"></i>', '<i class="icofont-rounded-right"></i>'],
      responsive: {
        640: {
          items: 2
        },
        768: {
          items: 3
        },
        900: {
          items: 4
        }
      }
    });
  }
  /* review */


  if (Object(_helper__WEBPACK_IMPORTED_MODULE_4__["$"])('#review_slider')) {
    Object(tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_2__["tns"])({
      container: '#review_slider',
      speed: 800,
      loop: true,
      controls: false,
      slideBy: 1,
      fixedWidth: 200,
      gutter: 100,
      nav: false,
      center: true,
      autoplay: true,
      autoplayButton: false,
      autoplayButtonOutput: false,
      autoplayHoverPause: false
    });
  }
  /* product list */


  if (Object(_helper__WEBPACK_IMPORTED_MODULE_4__["$"])('.item-wrapper')) {
    Object(tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_2__["tns"])({
      container: '.item-wrapper',
      // speed : 800,
      controls: false,
      loop: false,
      items: 1,
      slideBy: 1,
      fixedWidth: 300,
      // mouseDrag:true,
      // autoplayButton: false,
      // autoplayButtonOutput: false,
      // autoplayHoverPause: false,
      navPosition: 'bottom',
      responsive: {
        640: {
          items: 2
        },
        900: {
          items: 3
        }
      }
    });
  }
  /* reveal */


  Object(scrollreveal__WEBPACK_IMPORTED_MODULE_3__["default"])().reveal('.reveal', {
    delay: 500,
    duration: 700,
    distance: '100px',
    // easing : 'ease-in',
    origin: 'bottom',
    afterReveal: function afterReveal(el) {
      el.querySelectorAll('.no-rotate').forEach(function (img) {
        img.classList.remove('no-rotate');
      });
    }
  });
  /* faq */

  var $faq = Object(_helper__WEBPACK_IMPORTED_MODULE_4__["$"])('.faq_section .wrapper .wrapper-inner');

  if ($faq) {
    var $inner = $faq.querySelector('.inner');
    $faq.querySelector('.title').classList.toggle('on');
    $inner.classList.toggle('on');
    $inner.querySelectorAll('li').forEach(function (el, index) {
      if (index === 0) {
        el.classList.toggle('on');
      }
    });
  }

  var faq_category = Object(_helper__WEBPACK_IMPORTED_MODULE_4__["$$"])('.faq_section .title');

  if (faq_category) {
    faq_category.forEach(function (el) {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        el.classList.toggle('on');
        var $parent = el.closest('.wrapper-inner');
        $parent.querySelector('.inner').classList.toggle('on');
        var $ul = $parent.querySelector('.inner ul');

        if ($ul) {
          $ul.querySelectorAll('li').forEach(function (el, index) {
            el.classList.remove('on');
          });
        }
      });
    });
  }

  var faq = Object(_helper__WEBPACK_IMPORTED_MODULE_4__["$$"])('.faq_section li h3');

  if (faq) {
    faq.forEach(function (el) {
      var $parent = el.closest('li');
      el.addEventListener("click", function (e) {
        e.preventDefault();
        $parent.classList.toggle('on');
      });
    });
  }

  if (Object(_helper__WEBPACK_IMPORTED_MODULE_4__["$$"])('.financeCollapse')) {
    Object(_helper__WEBPACK_IMPORTED_MODULE_4__["$$"])('.financeCollapse').forEach(function ($el) {
      $el.addEventListener('click', function (e) {
        e.preventDefault();
        Object(_helper__WEBPACK_IMPORTED_MODULE_4__["$$"])(".financeCollapsePanel").forEach(function ($section) {
          if ($el.getAttribute('data-year') === $section.getAttribute('data-year')) {
            $section.classList.toggle('on');
          }
        });
      });
    });
  }
  /* conatact form */


  var $form = Object(_helper__WEBPACK_IMPORTED_MODULE_4__["$"])('#frm_contact');

  if ($form) {
    var contactConstraints = {
      name: {
        presence: {
          allowEmpty: false,
          message: '^' + Object(_helper__WEBPACK_IMPORTED_MODULE_4__["$"])('#ctrl_name').getAttribute('data-error-required')
        }
      },
      email: {
        presence: {
          allowEmpty: false,
          message: '^' + Object(_helper__WEBPACK_IMPORTED_MODULE_4__["$"])('#ctrl_email').getAttribute('data-error-required')
        },
        email: {
          message: '^' + Object(_helper__WEBPACK_IMPORTED_MODULE_4__["$"])('#ctrl_email').getAttribute('data-error-email')
        }
      },
      tel: {
        presence: {
          allowEmpty: false,
          message: '^' + Object(_helper__WEBPACK_IMPORTED_MODULE_4__["$"])('#ctrl_tel').getAttribute('data-error-required')
        }
      } // message: {
      //     presence: {allowEmpty: false, message: '^' + $('#ctrl_message').getAttribute('data-error-required')},
      // },

    };

    if ($form.getAttribute('data-form-type') === 'leadform') {
      contactConstraints = _objectSpread(_objectSpread({}, contactConstraints), {}, {
        available_time: {
          presence: {
            allowEmpty: false,
            message: '^' + Object(_helper__WEBPACK_IMPORTED_MODULE_4__["$"])('#ctrl_available_time').getAttribute('data-error-required')
          }
        },
        consent: {
          presence: {
            allowEmpty: false,
            message: '^' + Object(_helper__WEBPACK_IMPORTED_MODULE_4__["$"])('#ctrl_consent').getAttribute('data-error-required')
          }
        }
      });
    }

    var saveContact = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
        var res, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                $form.classList.add('ajax_loader');
                _context.prev = 1;
                _context.next = 4;
                return fetch($form.getAttribute('action'), {
                  method: 'post',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': Object(_helper__WEBPACK_IMPORTED_MODULE_4__["$"])('meta[name="csrf-token"]').getAttribute('content')
                  },
                  body: JSON.stringify(data)
                });

              case 4:
                res = _context.sent;
                _context.next = 7;
                return res.json();

              case 7:
                response = _context.sent;

                if (response.status == 'success') {
                  if ($form.getAttribute('data-form-type') === 'leadform') {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                      icon: 'success',
                      title: "".concat($form.getAttribute('data-success')),
                      html: "".concat($form.getAttribute('data-success-description'), "<br>\n<a href=\"/product/").concat($form.getAttribute('data-friendly_url'), "#two-tone-icon\" style=\"display: inline-block;color: #FFFFFF\" class=\"swal2-confirm swal2-styled\">").concat($form.getAttribute('data-success-button'), "</a>"),
                      showConfirmButton: false // confirmButtonText: `<a href="/product/${$form.getAttribute('data-friendly_url')}#two-tone-icon" style="color: #FFFFFF">${$form.getAttribute('data-success-button')}</a>`,

                    });
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire($form.getAttribute('data-success'), $form.getAttribute('data-success-description'), 'success');
                  }
                } else {
                  if ($form.getAttribute('data-form-type') === 'leadform') {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                      title: "<i class=\"icofont-alarm\" style=\"color:red\"></i>",
                      html: "<strong>".concat($form.getAttribute('data-error'), "</strong><br>").concat($form.getAttribute('data-error-description')),
                      confirmButtonText: $form.getAttribute('data-error-button')
                    });
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire($form.getAttribute('data-error'), $form.getAttribute('data-errors-description'), 'error');
                  }
                } // $$('input,select,textarea',$form).forEach($el => {
                //    $el.value = '';
                // });


                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](1);

                if ($form.getAttribute('data-form-type') === 'leadform') {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    title: "<i class=\"icofont-alarm\" style=\"color:red\"></i>",
                    html: "<strong>".concat($form.getAttribute('data-error'), "</strong><br>").concat($form.getAttribute('data-error-description')),
                    confirmButtonText: $form.getAttribute('data-error-button')
                  });
                } else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
                    title: $form.getAttribute('data-error'),
                    text: $form.getAttribute('data-error-description'),
                    icon: 'error'
                  });
                }

              case 14:
                $form.classList.remove('ajax_loader');

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 11]]);
      }));

      return function saveContact(_x) {
        return _ref.apply(this, arguments);
      };
    }();

    $form.addEventListener('submit', /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {
        var data, result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                e.preventDefault();
                Object(_helper__WEBPACK_IMPORTED_MODULE_4__["$$"])('cite', $form).forEach(function ($el) {
                  return $el.remove();
                });
                Object(_helper__WEBPACK_IMPORTED_MODULE_4__["$$"])('.controls-wrapper', $form).forEach(function ($el) {
                  return $el.classList.remove('error');
                });
                Object(_helper__WEBPACK_IMPORTED_MODULE_4__["$$"])('input,select,textarea', $form).forEach(function ($el) {
                  return $el.classList.remove('error');
                });
                data = {
                  name: Object(_helper__WEBPACK_IMPORTED_MODULE_4__["$"])('#ctrl_name').value,
                  email: Object(_helper__WEBPACK_IMPORTED_MODULE_4__["$"])('#ctrl_email').value,
                  tel: Object(_helper__WEBPACK_IMPORTED_MODULE_4__["$"])('#ctrl_tel').value,
                  message: Object(_helper__WEBPACK_IMPORTED_MODULE_4__["$"])('#ctrl_message').value
                };

                if ($form.getAttribute('data-form-type') === 'leadform') {
                  data = _objectSpread(_objectSpread({}, data), {}, {
                    available_time: Object(_helper__WEBPACK_IMPORTED_MODULE_4__["$"])('#ctrl_available_time').value,
                    consent: Object(_helper__WEBPACK_IMPORTED_MODULE_4__["$"])('#ctrl_consent').checked ? 1 : '',
                    product_id: Object(_helper__WEBPACK_IMPORTED_MODULE_4__["$"])('#ctrl_product_id').value
                  });
                }

                result = validate_js__WEBPACK_IMPORTED_MODULE_5___default()(data, contactConstraints);

                if (!result) {
                  _context2.next = 10;
                  break;
                }

                Object.keys(result).map(function (k) {
                  return Object(_validate_form__WEBPACK_IMPORTED_MODULE_6__["showFieldError"])(Object(_helper__WEBPACK_IMPORTED_MODULE_4__["$"])("#ctrl_".concat(k)), result[k]);
                });
                return _context2.abrupt("return", false);

              case 10:
                _context2.next = 12;
                return saveContact(data);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
    ['change'].forEach(function (evt) {
      Object(_helper__WEBPACK_IMPORTED_MODULE_4__["$$"])('input,select,textarea', $form).forEach(function ($el) {
        return $el.addEventListener(evt, function (e) {
          e.preventDefault();
          Object(_validate_form__WEBPACK_IMPORTED_MODULE_6__["validateField"])($el, contactConstraints);
        });
      });
    });
  }
});

/***/ }),

/***/ "./resources/js/validate_form.js":
/*!***************************************!*\
  !*** ./resources/js/validate_form.js ***!
  \***************************************/
/*! exports provided: showFieldError, validateField, removeErrorMessage, removeError, showError, showDateError, showBMIError, showBMIValidateError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showFieldError", function() { return showFieldError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateField", function() { return validateField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeErrorMessage", function() { return removeErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeError", function() { return removeError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showError", function() { return showError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showDateError", function() { return showDateError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showBMIError", function() { return showBMIError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showBMIValidateError", function() { return showBMIValidateError; });
/* harmony import */ var validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! validate.js */ "./node_modules/validate.js/validate.js");
/* harmony import */ var validate_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(validate_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ "./resources/js/helper.js");
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



var showFieldError = function showFieldError($this, errors) {
  var $parent = $this.closest('.controls-wrapper');
  errors.map(function (v, i) {
    if (i === 0) {
      $parent.classList.add('error');

      if (!!$parent.querySelector('cite')) {
        $parent.querySelector('cite').remove();
      }

      var $cite = document.createElement('cite');
      $cite.innerHTML = v;
      $parent.appendChild($cite);
    }
  });
};
var validateField = function validateField($this, constraints) {
  var field = $this.getAttribute('name');

  if (field) {
    if (field.startsWith('data_')) {
      var index = field.split("_")[1];
      field = field.replace("data_".concat(index, "_"), '');
    }

    var fieldValue = $this.value;
    var $parent = $this.closest('.controls-wrapper');
    $parent.classList.remove('error');
    Object(_helper__WEBPACK_IMPORTED_MODULE_1__["$$"])('cite', $parent).forEach(function ($el) {
      return $el.remove();
    });
    var result = validate_js__WEBPACK_IMPORTED_MODULE_0___default()(_defineProperty({}, field, fieldValue), constraints);

    if (result && result[field]) {
      showFieldError($this, result[field]);
    }
  }
};
var removeErrorMessage = function removeErrorMessage($this) {
  var $cite = $this.getElementsByTagName('cite');

  for (var i = 0, len = $cite.length; i !== len; ++i) {
    $cite[0].parentNode.removeChild($cite[0]);
  }
};
var removeError = function removeError($form) {
  var $cite = $form.getElementsByTagName('cite');

  for (var i = 0, len = $cite.length; i !== len; ++i) {
    $cite[0].parentNode.removeChild($cite[0]);
  }

  $form.querySelectorAll('.controls-wrapper').forEach(function ($el) {
    $el.classList.remove('error');
  });
};
var showError = function showError($form, result) {
  Object.keys(result).map(function (k) {
    var $elm = $form.querySelector("[name=".concat(k, "]"));
    showFieldError($elm, result[k]);
  });
  Object(_helper__WEBPACK_IMPORTED_MODULE_1__["scrollToTargetAdjusted"])(Object(_helper__WEBPACK_IMPORTED_MODULE_1__["$"])('.controls-wrapper.error'));
};
var showDateError = function showDateError(message) {
  Object(_helper__WEBPACK_IMPORTED_MODULE_1__["$"])('.date-input cite').innerHTML = message;
  Object(_helper__WEBPACK_IMPORTED_MODULE_1__["$$"])('.date-input .controls-wrapper').forEach(function (el) {
    el.classList.add('error');
  });
};
var showBMIError = function showBMIError(message) {
  Object(_helper__WEBPACK_IMPORTED_MODULE_1__["$"])('.bmi-input cite.bmi_error').innerHTML = message;
  Object(_helper__WEBPACK_IMPORTED_MODULE_1__["$$"])('.bmi-input .controls-wrapper').forEach(function (el) {
    el.classList.add('error');
  });
  Object(_helper__WEBPACK_IMPORTED_MODULE_1__["scrollToTargetAdjusted"])(Object(_helper__WEBPACK_IMPORTED_MODULE_1__["$"])('.controls-wrapper.error'));
};
var showBMIValidateError = function showBMIValidateError(message, selector) {
  Object(_helper__WEBPACK_IMPORTED_MODULE_1__["$"])('.bmi-input cite.' + selector).innerHTML = message;
  Object(_helper__WEBPACK_IMPORTED_MODULE_1__["$$"])('.bmi-input .controls-wrapper').forEach(function (el) {
    el.classList.add('error');
  });
  Object(_helper__WEBPACK_IMPORTED_MODULE_1__["scrollToTargetAdjusted"])(Object(_helper__WEBPACK_IMPORTED_MODULE_1__["$"])('.controls-wrapper.error'));
};

/***/ }),

/***/ 1:
/*!*************************************!*\
  !*** multi ./resources/js/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\github\tuneprotect.co.th\resources\js\index.js */"./resources/js/index.js");


/***/ })

/******/ });
