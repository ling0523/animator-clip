!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.AnimatorClip=e():t.AnimatorClip=e()}(self,(function(){return(()=>{"use strict";var t={42:(t,e,i)=>{var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=i(360),s=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.$el=e,this.$options=i,this.clips=[],this._init()}return r(t,[{key:"_init",value:function(){if("string"==typeof this.$el&&this.$el&&(this.$el=document.body.querySelector(this.$el)),!this.$el)throw new ReferenceError("The first construction argument of an animator should be an element or selector");if(!(this.$el instanceof Node)||1!==this.$el.nodeType)throw new TypeError("The first construction argument of an animator should be an element or selector");"object"==n(this.$options)&&this.$options||(this.$options={}),"function"!=typeof this.$options.start&&(this.$options.start=function(){}),"function"!=typeof this.$options.complete&&(this.$options.complete=function(){}),"function"!=typeof this.$options.beforeUpdate&&(this.$options.beforeUpdate=function(){}),"function"!=typeof this.$options.update&&(this.$options.update=function(){}),"function"!=typeof this.$options.stop&&(this.$options.stop=function(){}),"function"!=typeof this.$options.reset&&(this.$options.reset=function(){})}},{key:"hasClip",value:function(t){return!(!t.$parent||"number"!=typeof t.id||isNaN(t.id))&&this.clips.some((function(e){return e.id===t.id}))}},{key:"addClip",value:function(t){if(!t)throw new TypeError("Parameter does not exist");if(!(t instanceof o))throw new TypeError("The parameter is not a Clip instance");if(!this.hasClip(t)&&t.$parent)throw new Error("The clip has been added to other animator");if(this.hasClip(t))throw new Error("The clip has been added to the animator");if(0==this.clips.length)t.id=0;else{var e=this.clips[0].id;t.id=e+1}return t.$parent=this,t.free||(t.$unit?t.$initValue=t._getUnitCssValue()+t.$unit:t.$initValue=t._getUnitCssValue()),this.clips.unshift(t),this}},{key:"removeClip",value:function(t){if(!t)throw new TypeError("Parameter does not exist");if(!(t instanceof o))throw new TypeError("The parameter is not a Clip instance");if(!t.$parent||"number"!=typeof t.id||isNaN(t.id))throw new Error("The clip has not been added to the animator");if(!this.hasClip(t))throw new Error("The clip does not belong to the animator");return this.clips=this.clips.filter((function(e){return e.id!=t.id})),t.state=0,t.$timeStamp=0,t.interval=0,t.free||(t.$parent.$el.style.setProperty(t.style,t.$initValue,"important"),t.$initValue=void 0),t.$parent=void 0,t.id=void 0,this}},{key:"removeAllClips",value:function(){var t=this;return[].concat(function(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}(this.clips)).forEach((function(e){t.removeClip(e)})),this}},{key:"getClips",value:function(){return this.clips.filter((function(t){return 1==t.state}))}},{key:"getStopClips",value:function(){return this.clips.filter((function(t){return 2==t.state}))}},{key:"getCompleteClips",value:function(){return this.clips.filter((function(t){return 3==t.state}))}},{key:"start",value:function(){return this.clips.forEach((function(t){t.start()})),this}},{key:"stop",value:function(){return this.clips.forEach((function(t){t.stop()})),this}},{key:"reset",value:function(){return this.clips.forEach((function(t){t.reset()})),this}}]),t}();t.exports=s},360:t=>{var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),n=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.id=void 0,this.style=void 0,this.value=void 0,this.speed=void 0,this.free=!1,this.interval=0,this.$options=e,this.$unit=void 0,this.$requestAnimationFrame=void 0,this.state=0,this.$events=[],this.$chainClip=void 0,this.$type=0,this.$initValue=void 0,this.$parent=void 0,this.$timeStamp=0,this._init()}return i(t,[{key:"_init",value:function(){if(this.$options){if("object"!=e(this.$options)||!this.$options)throw new Error("The construction parameter of the clip must be a non-null object");if("boolean"==typeof this.$options.free?this.free=this.$options.free:this.free=!1,!this.free){if("string"!=typeof this.$options.style||!this.$options.style)throw new TypeError("The style argument should be a string");if(this.style=this.$options.style,"number"==typeof this.$options.value)this.value=this.$options.value,this.$unit=null;else{if("string"!=typeof this.$options.value||!this.$options.value)throw new TypeError("The value argument should be a number or string");if(this.value=parseFloat(this.$options.value),this.$options.value.endsWith("px"))this.$unit="px";else if(this.$options.value.endsWith("rem"))this.$unit="rem";else{if(!this.$options.value.endsWith("em"))throw new Error("Currently, only attribute values of px, rem, and em units are supported");this.$unit="em"}}if("number"!=typeof this.$options.speed)throw new TypeError("The speed argument should be a number");this.speed=this.$options.speed}}else this.free=!0,this.$options=void 0;this.$requestAnimationFrame=this._getRequestAnimationFrame(),this.$events=[{name:"start",handler:function(){}},{name:"complete",handler:function(){}},{name:"beforeUpdate",handler:function(){}},{name:"update",handler:function(){}},{name:"stop",handler:function(){}},{name:"reset",handler:function(){}}]}},{key:"start",value:function(){var t=this;if(!this.$parent||!this.$parent.$el)throw new ReferenceError("The clip has not been added to the animator");if(!this.free){var e=this._getUnitCssValue();if(this.speed>0&&e>=this.value)return this;if(this.speed<0&&e<=this.value)return this}return 1==this.state||3==this.state||(this.$timeStamp=Date.now(),this.interval=0,this.state=1,this.$parent.$options.start.call(this.$parent,this,this.$parent.$el),this._emit("start"),this.$requestAnimationFrame.call(window,(function e(){if(1==t.state){var i=Date.now();if(t.interval=i-t.$timeStamp,t.$timeStamp=i,t.free)t.$parent.$options.beforeUpdate.call(t.$parent,t,t.$parent.$el),t._emit("beforeUpdate"),t.$parent.$options.update.call(t.$parent,t,t.$parent.$el),t._emit("update"),t.$requestAnimationFrame.call(window,e);else{var n=t._getUnitCssValue();t.$parent.$options.beforeUpdate.call(t.$parent,t,t.$parent.$el,t.style,n),t._emit("beforeUpdate",[t.style,n]);var r=Number((n+t.speed).toFixed(2));t.$unit?t.$parent.$el.style.setProperty(t.style,r+t.$unit,"important"):t.$parent.$el.style.setProperty(t.style,r,"important"),t.$parent.$options.update.call(t.$parent,t,t.$parent.$el,t.style,r),t._emit("update",[t.style,r]),t.speed>0&&r>=t.value||t.speed<0&&r<=t.value?(t.$unit?t.$parent.$el.style.setProperty(t.style,t.value+t.$unit,"important"):t.$parent.$el.style.setProperty(t.style,t.value,"important"),t.$timeStamp=0,t.interval=0,t.state=3,t.$parent.$options.complete.call(t.$parent,t,t.$parent.$el),t._emit("complete"),t.$chainClip&&(t.$parent.hasClip(t.$chainClip)?t.$parent.removeClip(t.$chainClip).addClip(t.$chainClip):t.$parent.addClip(t.$chainClip),t.$chainClip.start())):t.$requestAnimationFrame.call(window,e)}}}))),this}},{key:"stop",value:function(){if(!this.$parent||!this.$parent.$el)throw new ReferenceError("The clip has not been added to the animator");return 1!=this.state||(this.$timeStamp=0,this.interval=0,this.state=2,this.$parent.$options.stop.call(this.$parent,this,this.$parent.$el),this._emit("stop")),this}},{key:"reset",value:function(){if(!this.$parent||!this.$parent.$el)throw new ReferenceError("The clip has not been added to the animator");return 0==this.state||(this.$timeStamp=0,this.interval=0,this.state=0,this.free||this.$parent.$el.style.setProperty(this.style,this.$initValue,"important"),this.$parent.$options.reset.call(this.$parent,this,this.$parent.$el),this._emit("reset"),1==this.$type&&this.$parent.removeClip(this)),this}},{key:"chain",value:function(e){if(!e)throw new TypeError("The parameter is not defined");if(!(e instanceof t))throw new TypeError("The parameter is not a Clip instance");if(e.$parent)throw new ReferenceError("The clip has been added to an animator instance and cannot be passed as a chain argument");return e.$type=1,this.$chainClip=e,e}},{key:"emitComplete",value:function(){this.free&&0!=this.state&&3!=this.state&&(this.state=3,this.$parent.$options.complete.call(this.$parent,this,this.$parent.$el),this._emit("complete"),this.$chainClip&&(this.$parent.hasClip(this.$chainClip)?this.$parent.removeClip(this.$chainClip).addClip(this.$chainClip):this.$parent.addClip(this.$chainClip),this.$chainClip.start()))}},{key:"on",value:function(t,e){var i=this._getEvent(t);if(!i)throw new Error(t+" is an illegal event");return i.handler=e,this}},{key:"_getRequestAnimationFrame",value:function(){var t=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame;if(!t){var e=0;t=function(t){var i=Date.now(),n=Math.max(0,1e3/60-(i-e));window.setTimeout(t,n),e=i+n}}return t}},{key:"_emit",value:function(t,e){var i,n=this._getEvent(t);n&&(e?(i=n.handler).call.apply(i,[this,this.$parent.$el].concat(function(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}(e))):n.handler.call(this,this.$parent.$el))}},{key:"_getEvent",value:function(t){return this.$events.filter((function(e){return e.name==t}))[0]}},{key:"_getUnitCssValue",value:function(){var t=parseFloat(this._getCssStyle(this.$parent.$el,this.style));return"rem"==this.$unit?this._px2rem(t):"em"==this.$unit?this._px2em(this.$parent.$el,t):t}},{key:"_getCssStyle",value:function(t,e){return"string"==typeof e?document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(t)[e]:t.currentStyle[e]:null}},{key:"_rem2px",value:function(t){var e=this._getCssStyle(document.documentElement,"font-size");return Number((t*parseFloat(e)).toFixed(2))}},{key:"_px2rem",value:function(t){var e=this._getCssStyle(document.documentElement,"font-size");return Number((t/parseFloat(e)).toFixed(2))}},{key:"_px2em",value:function(t,e){var i=t.parentNode||t.parentElement,n=this._getCssStyle(i,"font-size");return Number((e/parseFloat(n)).toFixed(2))}},{key:"_em2px",value:function(t,e){var i=t.parentNode||t.parentElement,n=this._getCssStyle(i,"font-size");return Number((e*parseFloat(n)).toFixed(2))}}]),t}();t.exports=n},579:(t,e,i)=>{var n=i(42),r=i(360),o=i(306);console.log("%c感谢使用"+o.name+"，当前版本：%c v"+o.version+"\n%c如果你觉得"+o.name+"还不错，不妨去github点个star\ngithub地址：%c"+o.repository.url,"color:#808080;","color:#008a00","color:#808080;","color:#008a00"),t.exports={Animator:n,Clip:r}},306:t=>{t.exports=JSON.parse('{"name":"animator-clip","version":"1.2.14","description":"一个基于requestAnimationFrame封装的轻量级JS动画插件","main":"dist/animator-clip.js","scripts":{"serve":"cross-env NODE_ENV=development webpack","build":"cross-env NODE_ENV=production webpack"},"keywords":[],"author":"lingkai","license":"MIT","devDependencies":{"babel-core":"^6.26.3","babel-loader":"^7.1.5","babel-preset-env":"^1.7.0","cross-env":"^7.0.3"},"babel":{"presets":["env"],"plugins":[]},"repository":{"type":"git","url":"https://github.com/lovelin0523/animator-clip"}}')}},e={};return function i(n){var r=e[n];if(void 0!==r)return r.exports;var o=e[n]={exports:{}};return t[n](o,o.exports,i),o.exports}(579)})()}));