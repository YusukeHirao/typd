!function(n){function r(e){if(t[e])return t[e].exports;var u=t[e]={exports:{},id:e,loaded:!1};return n[e].call(u.exports,u,u.exports,r),u.loaded=!0,u.exports}var t={};return r.m=n,r.c=t,r.p="",r(0)}({0:function(n,r,t){"use strict";function e(n){return n&&n.__esModule?n:{"default":n}}function u(n){n?(chrome.browserAction.setIcon({path:"off.png"}),chrome.browserAction.setBadgeText({text:""})):(chrome.browserAction.setIcon({path:"on.png"}),chrome.browserAction.setBadgeText({text:"-"}),chrome.browserAction.setBadgeBackgroundColor({color:[0,127,177,255]}))}var o=t(10),i=e(o),a=t(9),c=e(a);chrome.runtime.onMessage.addListener(function(n,r,t){var e=n.length.toString();"0"==e&&(e="-"),chrome.browserAction.setBadgeText({text:e,tabId:r.tab.id}),t({})}),c["default"].get(["disabled"]).then(function(n){u(i["default"].has(n,"disabled")?n.disabled:!1)})["catch"](function(n){console.warn(n)}),chrome.browserAction.onClicked.addListener(function(n){c["default"].get(["disabled"]).then(function(n){var r=!1;i["default"].has(n,"disabled")&&(r=n.disabled),r=!r;var t={};return t.disabled=r,Promise.all([new Promise(function(n,t){n(r)}),c["default"].set(t)])}).then(function(n){var r=n[0];u(r)})["catch"](function(n){console.warn(n)})})},9:function(n,r){"use strict";var t={get:function(n){return new Promise(function(r,t){chrome.storage.local.get(n,function(n){void 0!==chrome.extension.lastError&&t(chrome.extension.lastError),r(n)})})},set:function(n){return new Promise(function(r,t){chrome.storage.local.set(n,function(){void 0!==chrome.extension.lastError&&t(chrome.extension.lastError),r(!0)})})},remove:function(n){return new Promise(function(r,t){chrome.storage.local.remove(n,function(){void 0!==chrome.extension.lastError&&t(chrome.extension.lastError),r(!0)})})},clear:function(){return new Promise(function(n,r){chrome.storage.local.clear(function(){void 0!==chrome.extension.lastError&&r(chrome.extension.lastError),n(!0)})})}};n.exports=t},10:function(n,r,t){var e,u;(function(){function t(n){function r(r,t,e,u,o,i){for(;o>=0&&o<i;o+=n){var a=u?u[o]:o;e=t(e,r[a],a,r)}return e}return function(t,e,u,o){e=j(e,o,4);var i=!I(t)&&_.keys(t),a=(i||t).length,c=n>0?0:a-1;return arguments.length<3&&(u=t[i?i[c]:c],c+=n),r(t,e,u,i,c,a)}}function o(n){return function(r,t,e){t=A(t,e);for(var u=F(r),o=n>0?0:u-1;o>=0&&o<u;o+=n)if(t(r[o],o,r))return o;return-1}}function i(n,r,t){return function(e,u,o){var i=0,a=F(e);if("number"==typeof o)n>0?i=o>=0?o:Math.max(o+a,i):a=o>=0?Math.min(o+1,a):o+a+1;else if(t&&o&&a)return o=t(e,u),e[o]===u?o:-1;if(u!==u)return o=r(v.call(e,i,a),_.isNaN),o>=0?o+i:-1;for(o=n>0?i:a-1;o>=0&&o<a;o+=n)if(e[o]===u)return o;return-1}}function a(n,r){var t=P.length,e=n.constructor,u=_.isFunction(e)&&e.prototype||s,o="constructor";for(_.has(n,o)&&!_.contains(r,o)&&r.push(o);t--;)o=P[t],o in n&&n[o]!==u[o]&&!_.contains(r,o)&&r.push(o)}var c=this,f=c._,l=Array.prototype,s=Object.prototype,p=Function.prototype,h=l.push,v=l.slice,d=s.toString,y=s.hasOwnProperty,g=Array.isArray,m=Object.keys,b=p.bind,x=Object.create,w=function(){},_=function(n){return n instanceof _?n:this instanceof _?void(this._wrapped=n):new _(n)};"undefined"!=typeof n&&n.exports&&(r=n.exports=_),r._=_,_.VERSION="1.8.3";var j=function(n,r,t){if(void 0===r)return n;switch(null==t?3:t){case 1:return function(t){return n.call(r,t)};case 2:return function(t,e){return n.call(r,t,e)};case 3:return function(t,e,u){return n.call(r,t,e,u)};case 4:return function(t,e,u,o){return n.call(r,t,e,u,o)}}return function(){return n.apply(r,arguments)}},A=function(n,r,t){return null==n?_.identity:_.isFunction(n)?j(n,r,t):_.isObject(n)?_.matcher(n):_.property(n)};_.iteratee=function(n,r){return A(n,r,1/0)};var k=function(n,r){return function(t){var e=arguments.length;if(e<2||null==t)return t;for(var u=1;u<e;u++)for(var o=arguments[u],i=n(o),a=i.length,c=0;c<a;c++){var f=i[c];r&&void 0!==t[f]||(t[f]=o[f])}return t}},O=function(n){if(!_.isObject(n))return{};if(x)return x(n);w.prototype=n;var r=new w;return w.prototype=null,r},E=function(n){return function(r){return null==r?void 0:r[n]}},S=Math.pow(2,53)-1,F=E("length"),I=function(n){var r=F(n);return"number"==typeof r&&r>=0&&r<=S};_.each=_.forEach=function(n,r,t){r=j(r,t);var e,u;if(I(n))for(e=0,u=n.length;e<u;e++)r(n[e],e,n);else{var o=_.keys(n);for(e=0,u=o.length;e<u;e++)r(n[o[e]],o[e],n)}return n},_.map=_.collect=function(n,r,t){r=A(r,t);for(var e=!I(n)&&_.keys(n),u=(e||n).length,o=Array(u),i=0;i<u;i++){var a=e?e[i]:i;o[i]=r(n[a],a,n)}return o},_.reduce=_.foldl=_.inject=t(1),_.reduceRight=_.foldr=t(-1),_.find=_.detect=function(n,r,t){var e;if(e=I(n)?_.findIndex(n,r,t):_.findKey(n,r,t),void 0!==e&&e!==-1)return n[e]},_.filter=_.select=function(n,r,t){var e=[];return r=A(r,t),_.each(n,function(n,t,u){r(n,t,u)&&e.push(n)}),e},_.reject=function(n,r,t){return _.filter(n,_.negate(A(r)),t)},_.every=_.all=function(n,r,t){r=A(r,t);for(var e=!I(n)&&_.keys(n),u=(e||n).length,o=0;o<u;o++){var i=e?e[o]:o;if(!r(n[i],i,n))return!1}return!0},_.some=_.any=function(n,r,t){r=A(r,t);for(var e=!I(n)&&_.keys(n),u=(e||n).length,o=0;o<u;o++){var i=e?e[o]:o;if(r(n[i],i,n))return!0}return!1},_.contains=_.includes=_.include=function(n,r,t,e){return I(n)||(n=_.values(n)),("number"!=typeof t||e)&&(t=0),_.indexOf(n,r,t)>=0},_.invoke=function(n,r){var t=v.call(arguments,2),e=_.isFunction(r);return _.map(n,function(n){var u=e?r:n[r];return null==u?u:u.apply(n,t)})},_.pluck=function(n,r){return _.map(n,_.property(r))},_.where=function(n,r){return _.filter(n,_.matcher(r))},_.findWhere=function(n,r){return _.find(n,_.matcher(r))},_.max=function(n,r,t){var e,u,o=-(1/0),i=-(1/0);if(null==r&&null!=n){n=I(n)?n:_.values(n);for(var a=0,c=n.length;a<c;a++)e=n[a],e>o&&(o=e)}else r=A(r,t),_.each(n,function(n,t,e){u=r(n,t,e),(u>i||u===-(1/0)&&o===-(1/0))&&(o=n,i=u)});return o},_.min=function(n,r,t){var e,u,o=1/0,i=1/0;if(null==r&&null!=n){n=I(n)?n:_.values(n);for(var a=0,c=n.length;a<c;a++)e=n[a],e<o&&(o=e)}else r=A(r,t),_.each(n,function(n,t,e){u=r(n,t,e),(u<i||u===1/0&&o===1/0)&&(o=n,i=u)});return o},_.shuffle=function(n){for(var r,t=I(n)?n:_.values(n),e=t.length,u=Array(e),o=0;o<e;o++)r=_.random(0,o),r!==o&&(u[o]=u[r]),u[r]=t[o];return u},_.sample=function(n,r,t){return null==r||t?(I(n)||(n=_.values(n)),n[_.random(n.length-1)]):_.shuffle(n).slice(0,Math.max(0,r))},_.sortBy=function(n,r,t){return r=A(r,t),_.pluck(_.map(n,function(n,t,e){return{value:n,index:t,criteria:r(n,t,e)}}).sort(function(n,r){var t=n.criteria,e=r.criteria;if(t!==e){if(t>e||void 0===t)return 1;if(t<e||void 0===e)return-1}return n.index-r.index}),"value")};var M=function(n){return function(r,t,e){var u={};return t=A(t,e),_.each(r,function(e,o){var i=t(e,o,r);n(u,e,i)}),u}};_.groupBy=M(function(n,r,t){_.has(n,t)?n[t].push(r):n[t]=[r]}),_.indexBy=M(function(n,r,t){n[t]=r}),_.countBy=M(function(n,r,t){_.has(n,t)?n[t]++:n[t]=1}),_.toArray=function(n){return n?_.isArray(n)?v.call(n):I(n)?_.map(n,_.identity):_.values(n):[]},_.size=function(n){return null==n?0:I(n)?n.length:_.keys(n).length},_.partition=function(n,r,t){r=A(r,t);var e=[],u=[];return _.each(n,function(n,t,o){(r(n,t,o)?e:u).push(n)}),[e,u]},_.first=_.head=_.take=function(n,r,t){if(null!=n)return null==r||t?n[0]:_.initial(n,n.length-r)},_.initial=function(n,r,t){return v.call(n,0,Math.max(0,n.length-(null==r||t?1:r)))},_.last=function(n,r,t){if(null!=n)return null==r||t?n[n.length-1]:_.rest(n,Math.max(0,n.length-r))},_.rest=_.tail=_.drop=function(n,r,t){return v.call(n,null==r||t?1:r)},_.compact=function(n){return _.filter(n,_.identity)};var B=function(n,r,t,e){for(var u=[],o=0,i=e||0,a=F(n);i<a;i++){var c=n[i];if(I(c)&&(_.isArray(c)||_.isArguments(c))){r||(c=B(c,r,t));var f=0,l=c.length;for(u.length+=l;f<l;)u[o++]=c[f++]}else t||(u[o++]=c)}return u};_.flatten=function(n,r){return B(n,r,!1)},_.without=function(n){return _.difference(n,v.call(arguments,1))},_.uniq=_.unique=function(n,r,t,e){_.isBoolean(r)||(e=t,t=r,r=!1),null!=t&&(t=A(t,e));for(var u=[],o=[],i=0,a=F(n);i<a;i++){var c=n[i],f=t?t(c,i,n):c;r?(i&&o===f||u.push(c),o=f):t?_.contains(o,f)||(o.push(f),u.push(c)):_.contains(u,c)||u.push(c)}return u},_.union=function(){return _.uniq(B(arguments,!0,!0))},_.intersection=function(n){for(var r=[],t=arguments.length,e=0,u=F(n);e<u;e++){var o=n[e];if(!_.contains(r,o)){for(var i=1;i<t&&_.contains(arguments[i],o);i++);i===t&&r.push(o)}}return r},_.difference=function(n){var r=B(arguments,!0,!0,1);return _.filter(n,function(n){return!_.contains(r,n)})},_.zip=function(){return _.unzip(arguments)},_.unzip=function(n){for(var r=n&&_.max(n,F).length||0,t=Array(r),e=0;e<r;e++)t[e]=_.pluck(n,e);return t},_.object=function(n,r){for(var t={},e=0,u=F(n);e<u;e++)r?t[n[e]]=r[e]:t[n[e][0]]=n[e][1];return t},_.findIndex=o(1),_.findLastIndex=o(-1),_.sortedIndex=function(n,r,t,e){t=A(t,e,1);for(var u=t(r),o=0,i=F(n);o<i;){var a=Math.floor((o+i)/2);t(n[a])<u?o=a+1:i=a}return o},_.indexOf=i(1,_.findIndex,_.sortedIndex),_.lastIndexOf=i(-1,_.findLastIndex),_.range=function(n,r,t){null==r&&(r=n||0,n=0),t=t||1;for(var e=Math.max(Math.ceil((r-n)/t),0),u=Array(e),o=0;o<e;o++,n+=t)u[o]=n;return u};var N=function(n,r,t,e,u){if(!(e instanceof r))return n.apply(t,u);var o=O(n.prototype),i=n.apply(o,u);return _.isObject(i)?i:o};_.bind=function(n,r){if(b&&n.bind===b)return b.apply(n,v.call(arguments,1));if(!_.isFunction(n))throw new TypeError("Bind must be called on a function");var t=v.call(arguments,2),e=function(){return N(n,e,r,this,t.concat(v.call(arguments)))};return e},_.partial=function(n){var r=v.call(arguments,1),t=function(){for(var e=0,u=r.length,o=Array(u),i=0;i<u;i++)o[i]=r[i]===_?arguments[e++]:r[i];for(;e<arguments.length;)o.push(arguments[e++]);return N(n,t,this,this,o)};return t},_.bindAll=function(n){var r,t,e=arguments.length;if(e<=1)throw new Error("bindAll must be passed function names");for(r=1;r<e;r++)t=arguments[r],n[t]=_.bind(n[t],n);return n},_.memoize=function(n,r){var t=function(e){var u=t.cache,o=""+(r?r.apply(this,arguments):e);return _.has(u,o)||(u[o]=n.apply(this,arguments)),u[o]};return t.cache={},t},_.delay=function(n,r){var t=v.call(arguments,2);return setTimeout(function(){return n.apply(null,t)},r)},_.defer=_.partial(_.delay,_,1),_.throttle=function(n,r,t){var e,u,o,i=null,a=0;t||(t={});var c=function(){a=t.leading===!1?0:_.now(),i=null,o=n.apply(e,u),i||(e=u=null)};return function(){var f=_.now();a||t.leading!==!1||(a=f);var l=r-(f-a);return e=this,u=arguments,l<=0||l>r?(i&&(clearTimeout(i),i=null),a=f,o=n.apply(e,u),i||(e=u=null)):i||t.trailing===!1||(i=setTimeout(c,l)),o}},_.debounce=function(n,r,t){var e,u,o,i,a,c=function(){var f=_.now()-i;f<r&&f>=0?e=setTimeout(c,r-f):(e=null,t||(a=n.apply(o,u),e||(o=u=null)))};return function(){o=this,u=arguments,i=_.now();var f=t&&!e;return e||(e=setTimeout(c,r)),f&&(a=n.apply(o,u),o=u=null),a}},_.wrap=function(n,r){return _.partial(r,n)},_.negate=function(n){return function(){return!n.apply(this,arguments)}},_.compose=function(){var n=arguments,r=n.length-1;return function(){for(var t=r,e=n[r].apply(this,arguments);t--;)e=n[t].call(this,e);return e}},_.after=function(n,r){return function(){if(--n<1)return r.apply(this,arguments)}},_.before=function(n,r){var t;return function(){return--n>0&&(t=r.apply(this,arguments)),n<=1&&(r=null),t}},_.once=_.partial(_.before,2);var T=!{toString:null}.propertyIsEnumerable("toString"),P=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];_.keys=function(n){if(!_.isObject(n))return[];if(m)return m(n);var r=[];for(var t in n)_.has(n,t)&&r.push(t);return T&&a(n,r),r},_.allKeys=function(n){if(!_.isObject(n))return[];var r=[];for(var t in n)r.push(t);return T&&a(n,r),r},_.values=function(n){for(var r=_.keys(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=n[r[u]];return e},_.mapObject=function(n,r,t){r=A(r,t);for(var e,u=_.keys(n),o=u.length,i={},a=0;a<o;a++)e=u[a],i[e]=r(n[e],e,n);return i},_.pairs=function(n){for(var r=_.keys(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=[r[u],n[r[u]]];return e},_.invert=function(n){for(var r={},t=_.keys(n),e=0,u=t.length;e<u;e++)r[n[t[e]]]=t[e];return r},_.functions=_.methods=function(n){var r=[];for(var t in n)_.isFunction(n[t])&&r.push(t);return r.sort()},_.extend=k(_.allKeys),_.extendOwn=_.assign=k(_.keys),_.findKey=function(n,r,t){r=A(r,t);for(var e,u=_.keys(n),o=0,i=u.length;o<i;o++)if(e=u[o],r(n[e],e,n))return e},_.pick=function(n,r,t){var e,u,o={},i=n;if(null==i)return o;_.isFunction(r)?(u=_.allKeys(i),e=j(r,t)):(u=B(arguments,!1,!1,1),e=function(n,r,t){return r in t},i=Object(i));for(var a=0,c=u.length;a<c;a++){var f=u[a],l=i[f];e(l,f,i)&&(o[f]=l)}return o},_.omit=function(n,r,t){if(_.isFunction(r))r=_.negate(r);else{var e=_.map(B(arguments,!1,!1,1),String);r=function(n,r){return!_.contains(e,r)}}return _.pick(n,r,t)},_.defaults=k(_.allKeys,!0),_.create=function(n,r){var t=O(n);return r&&_.extendOwn(t,r),t},_.clone=function(n){return _.isObject(n)?_.isArray(n)?n.slice():_.extend({},n):n},_.tap=function(n,r){return r(n),n},_.isMatch=function(n,r){var t=_.keys(r),e=t.length;if(null==n)return!e;for(var u=Object(n),o=0;o<e;o++){var i=t[o];if(r[i]!==u[i]||!(i in u))return!1}return!0};var R=function(n,r,t,e){if(n===r)return 0!==n||1/n===1/r;if(null==n||null==r)return n===r;n instanceof _&&(n=n._wrapped),r instanceof _&&(r=r._wrapped);var u=d.call(n);if(u!==d.call(r))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+r;case"[object Number]":return+n!==+n?+r!==+r:0===+n?1/+n===1/r:+n===+r;case"[object Date]":case"[object Boolean]":return+n===+r}var o="[object Array]"===u;if(!o){if("object"!=typeof n||"object"!=typeof r)return!1;var i=n.constructor,a=r.constructor;if(i!==a&&!(_.isFunction(i)&&i instanceof i&&_.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in r)return!1}t=t||[],e=e||[];for(var c=t.length;c--;)if(t[c]===n)return e[c]===r;if(t.push(n),e.push(r),o){if(c=n.length,c!==r.length)return!1;for(;c--;)if(!R(n[c],r[c],t,e))return!1}else{var f,l=_.keys(n);if(c=l.length,_.keys(r).length!==c)return!1;for(;c--;)if(f=l[c],!_.has(r,f)||!R(n[f],r[f],t,e))return!1}return t.pop(),e.pop(),!0};_.isEqual=function(n,r){return R(n,r)},_.isEmpty=function(n){return null==n||(I(n)&&(_.isArray(n)||_.isString(n)||_.isArguments(n))?0===n.length:0===_.keys(n).length)},_.isElement=function(n){return!(!n||1!==n.nodeType)},_.isArray=g||function(n){return"[object Array]"===d.call(n)},_.isObject=function(n){var r=typeof n;return"function"===r||"object"===r&&!!n},_.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){_["is"+n]=function(r){return d.call(r)==="[object "+n+"]"}}),_.isArguments(arguments)||(_.isArguments=function(n){return _.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(_.isFunction=function(n){return"function"==typeof n||!1}),_.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},_.isNaN=function(n){return _.isNumber(n)&&n!==+n},_.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===d.call(n)},_.isNull=function(n){return null===n},_.isUndefined=function(n){return void 0===n},_.has=function(n,r){return null!=n&&y.call(n,r)},_.noConflict=function(){return c._=f,this},_.identity=function(n){return n},_.constant=function(n){return function(){return n}},_.noop=function(){},_.property=E,_.propertyOf=function(n){return null==n?function(){}:function(r){return n[r]}},_.matcher=_.matches=function(n){return n=_.extendOwn({},n),function(r){return _.isMatch(r,n)}},_.times=function(n,r,t){var e=Array(Math.max(0,n));r=j(r,t,1);for(var u=0;u<n;u++)e[u]=r(u);return e},_.random=function(n,r){return null==r&&(r=n,n=0),n+Math.floor(Math.random()*(r-n+1))},_.now=Date.now||function(){return(new Date).getTime()};var q={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},K=_.invert(q),z=function(n){var r=function(r){return n[r]},t="(?:"+_.keys(n).join("|")+")",e=RegExp(t),u=RegExp(t,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,r):n}};_.escape=z(q),_.unescape=z(K),_.result=function(n,r,t){var e=null==n?void 0:n[r];return void 0===e&&(e=t),_.isFunction(e)?e.call(n):e};var L=0;_.uniqueId=function(n){var r=++L+"";return n?n+r:r},_.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var D=/(.)^/,C={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},J=/\\|'|\r|\n|\u2028|\u2029/g,U=function(n){return"\\"+C[n]};_.template=function(n,r,t){!r&&t&&(r=t),r=_.defaults({},r,_.templateSettings);var e=RegExp([(r.escape||D).source,(r.interpolate||D).source,(r.evaluate||D).source].join("|")+"|$","g"),u=0,o="__p+='";n.replace(e,function(r,t,e,i,a){return o+=n.slice(u,a).replace(J,U),u=a+r.length,t?o+="'+\n((__t=("+t+"))==null?'':_.escape(__t))+\n'":e?o+="'+\n((__t=("+e+"))==null?'':__t)+\n'":i&&(o+="';\n"+i+"\n__p+='"),r}),o+="';\n",r.variable||(o="with(obj||{}){\n"+o+"}\n"),o="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+o+"return __p;\n";try{var i=new Function(r.variable||"obj","_",o)}catch(a){throw a.source=o,a}var c=function(n){return i.call(this,n,_)},f=r.variable||"obj";return c.source="function("+f+"){\n"+o+"}",c},_.chain=function(n){var r=_(n);return r._chain=!0,r};var V=function(n,r){return n._chain?_(r).chain():r};_.mixin=function(n){_.each(_.functions(n),function(r){var t=_[r]=n[r];_.prototype[r]=function(){var n=[this._wrapped];return h.apply(n,arguments),V(this,t.apply(_,n))}})},_.mixin(_),_.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var r=l[n];_.prototype[n]=function(){var t=this._wrapped;return r.apply(t,arguments),"shift"!==n&&"splice"!==n||0!==t.length||delete t[0],V(this,t)}}),_.each(["concat","join","slice"],function(n){var r=l[n];_.prototype[n]=function(){return V(this,r.apply(this._wrapped,arguments))}}),_.prototype.value=function(){return this._wrapped},_.prototype.valueOf=_.prototype.toJSON=_.prototype.value,_.prototype.toString=function(){return""+this._wrapped},e=[],u=function(){return _}.apply(r,e),!(void 0!==u&&(n.exports=u))}).call(this)}});