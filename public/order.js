(()=>{"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(t){var n=function(t,n){if("object"!=e(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==e(n)?n:n+""}function r(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,n(o.key),o)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function i(t){return i=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},i(t)}function u(t,e){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},u(t,e)}var c=function(){return o((function e(){t(this,e)}),[{key:"onReady",value:function(){}},{key:"registerEvents",value:function(){}},{key:"initiate",value:function(t){if(t&&!t.includes(salla.config.get("page.slug")))return app.log("The Class For (".concat(t.join(","),") Skipped."));this.onReady(),this.registerEvents(),app.log("The Class For (".concat((null==t?void 0:t.join(","))||"*",") Loaded🎉"))}}])}();function a(t,n,r){return n=i(n),function(t,n){if(n&&("object"===e(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,l()?Reflect.construct(n,r||[],i(t).constructor):n.apply(t,r))}function l(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(l=function(){return!!t})()}c.initiateWhenReady=function(){var t,e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;"ready"===(null===(t=window.app)||void 0===t?void 0:t.status)?(new this).initiate(n):document.addEventListener("theme::ready",(function(){return(new e).initiate(n)}))},function(e){function n(){return t(this,n),a(this,n,arguments)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&u(t,e)}(n,e),o(n,[{key:"onReady",value:function(){app.onClick("salla-button#btn-reorder",(function(t){var e=t.currentTarget;return e.load().then((function(){return salla.order.createCartFromOrder()})).then((function(){return e.stop()})).then((function(){return app.element("#reorder-modal").hide()}))})),app.onClick("salla-button#confirm-cancel",(function(t){var e=t.currentTarget;return e.load().then((function(){return salla.order.cancel()})).then((function(){return e.stop()&&app.element("#modal-order-cancel").hide()})).then((function(){return window.location.reload()})).catch((function(){return e.stop()&&app.element("#modal-order-cancel").hide()}))}))}}])}(c).initiateWhenReady(["customer.orders.single"])})();