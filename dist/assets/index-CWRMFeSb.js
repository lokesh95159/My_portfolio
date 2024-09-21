const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Animatedbutton1-BK9pqj1H.js","assets/Animatedbutton1-5yyMqX2l.css"])))=>i.map(i=>d[i]);
function Wv(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const o=Object.getOwnPropertyDescriptor(i,r);o&&Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function Rh(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var jv={exports:{}},ru={},Xv={exports:{}},it={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $a=Symbol.for("react.element"),Lx=Symbol.for("react.portal"),Dx=Symbol.for("react.fragment"),Ix=Symbol.for("react.strict_mode"),Nx=Symbol.for("react.profiler"),Ux=Symbol.for("react.provider"),Fx=Symbol.for("react.context"),Ox=Symbol.for("react.forward_ref"),kx=Symbol.for("react.suspense"),zx=Symbol.for("react.memo"),Bx=Symbol.for("react.lazy"),Zp=Symbol.iterator;function Hx(t){return t===null||typeof t!="object"?null:(t=Zp&&t[Zp]||t["@@iterator"],typeof t=="function"?t:null)}var $v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yv=Object.assign,qv={};function Ns(t,e,n){this.props=t,this.context=e,this.refs=qv,this.updater=n||$v}Ns.prototype.isReactComponent={};Ns.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ns.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Kv(){}Kv.prototype=Ns.prototype;function Ch(t,e,n){this.props=t,this.context=e,this.refs=qv,this.updater=n||$v}var Ph=Ch.prototype=new Kv;Ph.constructor=Ch;Yv(Ph,Ns.prototype);Ph.isPureReactComponent=!0;var Qp=Array.isArray,Zv=Object.prototype.hasOwnProperty,bh={current:null},Qv={key:!0,ref:!0,__self:!0,__source:!0};function Jv(t,e,n){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)Zv.call(e,i)&&!Qv.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:$a,type:t,key:o,ref:s,props:r,_owner:bh.current}}function Vx(t,e){return{$$typeof:$a,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Lh(t){return typeof t=="object"&&t!==null&&t.$$typeof===$a}function Gx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Jp=/\/+/g;function Fu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Gx(""+t.key):e.toString(36)}function Zl(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case $a:case Lx:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+Fu(s,0):i,Qp(r)?(n="",t!=null&&(n=t.replace(Jp,"$&/")+"/"),Zl(r,e,n,"",function(c){return c})):r!=null&&(Lh(r)&&(r=Vx(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(Jp,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",Qp(t))for(var a=0;a<t.length;a++){o=t[a];var l=i+Fu(o,a);s+=Zl(o,e,n,l,r)}else if(l=Hx(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=i+Fu(o,a++),s+=Zl(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function ol(t,e,n){if(t==null)return t;var i=[],r=0;return Zl(t,i,"","",function(o){return e.call(n,o,r++)}),i}function Wx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var _n={current:null},Ql={transition:null},jx={ReactCurrentDispatcher:_n,ReactCurrentBatchConfig:Ql,ReactCurrentOwner:bh};function e_(){throw Error("act(...) is not supported in production builds of React.")}it.Children={map:ol,forEach:function(t,e,n){ol(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ol(t,function(){e++}),e},toArray:function(t){return ol(t,function(e){return e})||[]},only:function(t){if(!Lh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};it.Component=Ns;it.Fragment=Dx;it.Profiler=Nx;it.PureComponent=Ch;it.StrictMode=Ix;it.Suspense=kx;it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jx;it.act=e_;it.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Yv({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=bh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Zv.call(e,l)&&!Qv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:$a,type:t.type,key:r,ref:o,props:i,_owner:s}};it.createContext=function(t){return t={$$typeof:Fx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Ux,_context:t},t.Consumer=t};it.createElement=Jv;it.createFactory=function(t){var e=Jv.bind(null,t);return e.type=t,e};it.createRef=function(){return{current:null}};it.forwardRef=function(t){return{$$typeof:Ox,render:t}};it.isValidElement=Lh;it.lazy=function(t){return{$$typeof:Bx,_payload:{_status:-1,_result:t},_init:Wx}};it.memo=function(t,e){return{$$typeof:zx,type:t,compare:e===void 0?null:e}};it.startTransition=function(t){var e=Ql.transition;Ql.transition={};try{t()}finally{Ql.transition=e}};it.unstable_act=e_;it.useCallback=function(t,e){return _n.current.useCallback(t,e)};it.useContext=function(t){return _n.current.useContext(t)};it.useDebugValue=function(){};it.useDeferredValue=function(t){return _n.current.useDeferredValue(t)};it.useEffect=function(t,e){return _n.current.useEffect(t,e)};it.useId=function(){return _n.current.useId()};it.useImperativeHandle=function(t,e,n){return _n.current.useImperativeHandle(t,e,n)};it.useInsertionEffect=function(t,e){return _n.current.useInsertionEffect(t,e)};it.useLayoutEffect=function(t,e){return _n.current.useLayoutEffect(t,e)};it.useMemo=function(t,e){return _n.current.useMemo(t,e)};it.useReducer=function(t,e,n){return _n.current.useReducer(t,e,n)};it.useRef=function(t){return _n.current.useRef(t)};it.useState=function(t){return _n.current.useState(t)};it.useSyncExternalStore=function(t,e,n){return _n.current.useSyncExternalStore(t,e,n)};it.useTransition=function(){return _n.current.useTransition()};it.version="18.3.1";Xv.exports=it;var Z=Xv.exports;const Wi=Rh(Z),Xx=Wv({__proto__:null,default:Wi},[Z]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $x=Z,Yx=Symbol.for("react.element"),qx=Symbol.for("react.fragment"),Kx=Object.prototype.hasOwnProperty,Zx=$x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Qx={key:!0,ref:!0,__self:!0,__source:!0};function t_(t,e,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)Kx.call(e,i)&&!Qx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Yx,type:t,key:o,ref:s,props:r,_owner:Zx.current}}ru.Fragment=qx;ru.jsx=t_;ru.jsxs=t_;jv.exports=ru;var j=jv.exports,n_={exports:{}},Vn={},i_={exports:{}},r_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,X){var Q=F.length;F.push(X);e:for(;0<Q;){var de=Q-1>>>1,Ee=F[de];if(0<r(Ee,X))F[de]=X,F[Q]=Ee,Q=de;else break e}}function n(F){return F.length===0?null:F[0]}function i(F){if(F.length===0)return null;var X=F[0],Q=F.pop();if(Q!==X){F[0]=Q;e:for(var de=0,Ee=F.length,We=Ee>>>1;de<We;){var q=2*(de+1)-1,ae=F[q],he=q+1,pe=F[he];if(0>r(ae,Q))he<Ee&&0>r(pe,ae)?(F[de]=pe,F[he]=Q,de=he):(F[de]=ae,F[q]=Q,de=q);else if(he<Ee&&0>r(pe,Q))F[de]=pe,F[he]=Q,de=he;else break e}}return X}function r(F,X){var Q=F.sortIndex-X.sortIndex;return Q!==0?Q:F.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],c=[],u=1,f=null,d=3,p=!1,g=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(F){for(var X=n(c);X!==null;){if(X.callback===null)i(c);else if(X.startTime<=F)i(c),X.sortIndex=X.expirationTime,e(l,X);else break;X=n(c)}}function S(F){if(y=!1,_(F),!g)if(n(l)!==null)g=!0,$(C);else{var X=n(c);X!==null&&oe(S,X.startTime-F)}}function C(F,X){g=!1,y&&(y=!1,h(E),E=-1),p=!0;var Q=d;try{for(_(X),f=n(l);f!==null&&(!(f.expirationTime>X)||F&&!b());){var de=f.callback;if(typeof de=="function"){f.callback=null,d=f.priorityLevel;var Ee=de(f.expirationTime<=X);X=t.unstable_now(),typeof Ee=="function"?f.callback=Ee:f===n(l)&&i(l),_(X)}else i(l);f=n(l)}if(f!==null)var We=!0;else{var q=n(c);q!==null&&oe(S,q.startTime-X),We=!1}return We}finally{f=null,d=Q,p=!1}}var A=!1,R=null,E=-1,T=5,x=-1;function b(){return!(t.unstable_now()-x<T)}function H(){if(R!==null){var F=t.unstable_now();x=F;var X=!0;try{X=R(!0,F)}finally{X?B():(A=!1,R=null)}}else A=!1}var B;if(typeof v=="function")B=function(){v(H)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,K=V.port2;V.port1.onmessage=H,B=function(){K.postMessage(null)}}else B=function(){m(H,0)};function $(F){R=F,A||(A=!0,B())}function oe(F,X){E=m(function(){F(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,$(C))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(F){switch(d){case 1:case 2:case 3:var X=3;break;default:X=d}var Q=d;d=X;try{return F()}finally{d=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,X){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var Q=d;d=F;try{return X()}finally{d=Q}},t.unstable_scheduleCallback=function(F,X,Q){var de=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?de+Q:de):Q=de,F){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=Q+Ee,F={id:u++,callback:X,priorityLevel:F,startTime:Q,expirationTime:Ee,sortIndex:-1},Q>de?(F.sortIndex=Q,e(c,F),n(l)===null&&F===n(c)&&(y?(h(E),E=-1):y=!0,oe(S,Q-de))):(F.sortIndex=Ee,e(l,F),g||p||(g=!0,$(C))),F},t.unstable_shouldYield=b,t.unstable_wrapCallback=function(F){var X=d;return function(){var Q=d;d=X;try{return F.apply(this,arguments)}finally{d=Q}}}})(r_);i_.exports=r_;var Jx=i_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eS=Z,Hn=Jx;function ue(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o_=new Set,wa={};function go(t,e){gs(t,e),gs(t+"Capture",e)}function gs(t,e){for(wa[t]=e,t=0;t<e.length;t++)o_.add(e[t])}var ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wd=Object.prototype.hasOwnProperty,tS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,em={},tm={};function nS(t){return Wd.call(tm,t)?!0:Wd.call(em,t)?!1:tS.test(t)?tm[t]=!0:(em[t]=!0,!1)}function iS(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function rS(t,e,n,i){if(e===null||typeof e>"u"||iS(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function yn(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var rn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){rn[t]=new yn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];rn[e]=new yn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){rn[t]=new yn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){rn[t]=new yn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){rn[t]=new yn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){rn[t]=new yn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){rn[t]=new yn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){rn[t]=new yn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){rn[t]=new yn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Dh=/[\-:]([a-z])/g;function Ih(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Dh,Ih);rn[e]=new yn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Dh,Ih);rn[e]=new yn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Dh,Ih);rn[e]=new yn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){rn[t]=new yn(t,1,!1,t.toLowerCase(),null,!1,!1)});rn.xlinkHref=new yn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){rn[t]=new yn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Nh(t,e,n,i){var r=rn.hasOwnProperty(e)?rn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(rS(e,n,r,i)&&(n=null),i||r===null?nS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Zi=eS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sl=Symbol.for("react.element"),Wo=Symbol.for("react.portal"),jo=Symbol.for("react.fragment"),Uh=Symbol.for("react.strict_mode"),jd=Symbol.for("react.profiler"),s_=Symbol.for("react.provider"),a_=Symbol.for("react.context"),Fh=Symbol.for("react.forward_ref"),Xd=Symbol.for("react.suspense"),$d=Symbol.for("react.suspense_list"),Oh=Symbol.for("react.memo"),lr=Symbol.for("react.lazy"),l_=Symbol.for("react.offscreen"),nm=Symbol.iterator;function Vs(t){return t===null||typeof t!="object"?null:(t=nm&&t[nm]||t["@@iterator"],typeof t=="function"?t:null)}var Lt=Object.assign,Ou;function ra(t){if(Ou===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ou=e&&e[1]||""}return`
`+Ou+t}var ku=!1;function zu(t,e){if(!t||ku)return"";ku=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{ku=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ra(t):""}function oS(t){switch(t.tag){case 5:return ra(t.type);case 16:return ra("Lazy");case 13:return ra("Suspense");case 19:return ra("SuspenseList");case 0:case 2:case 15:return t=zu(t.type,!1),t;case 11:return t=zu(t.type.render,!1),t;case 1:return t=zu(t.type,!0),t;default:return""}}function Yd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case jo:return"Fragment";case Wo:return"Portal";case jd:return"Profiler";case Uh:return"StrictMode";case Xd:return"Suspense";case $d:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case a_:return(t.displayName||"Context")+".Consumer";case s_:return(t._context.displayName||"Context")+".Provider";case Fh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Oh:return e=t.displayName||null,e!==null?e:Yd(t.type)||"Memo";case lr:e=t._payload,t=t._init;try{return Yd(t(e))}catch{}}return null}function sS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Yd(e);case 8:return e===Uh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Pr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function c_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function aS(t){var e=c_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function al(t){t._valueTracker||(t._valueTracker=aS(t))}function u_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=c_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Sc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function qd(t,e){var n=e.checked;return Lt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function im(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Pr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function d_(t,e){e=e.checked,e!=null&&Nh(t,"checked",e,!1)}function Kd(t,e){d_(t,e);var n=Pr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Zd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Zd(t,e.type,Pr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function rm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Zd(t,e,n){(e!=="number"||Sc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var oa=Array.isArray;function ss(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Pr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Qd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ue(91));return Lt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function om(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ue(92));if(oa(n)){if(1<n.length)throw Error(ue(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Pr(n)}}function f_(t,e){var n=Pr(e.value),i=Pr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function sm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function h_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Jd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?h_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ll,p_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ll=ll||document.createElement("div"),ll.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ll.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ta(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var da={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lS=["Webkit","ms","Moz","O"];Object.keys(da).forEach(function(t){lS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),da[e]=da[t]})});function m_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||da.hasOwnProperty(t)&&da[t]?(""+e).trim():e+"px"}function g_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=m_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var cS=Lt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ef(t,e){if(e){if(cS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ue(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ue(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ue(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ue(62))}}function tf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nf=null;function kh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var rf=null,as=null,ls=null;function am(t){if(t=Ka(t)){if(typeof rf!="function")throw Error(ue(280));var e=t.stateNode;e&&(e=cu(e),rf(t.stateNode,t.type,e))}}function v_(t){as?ls?ls.push(t):ls=[t]:as=t}function __(){if(as){var t=as,e=ls;if(ls=as=null,am(t),e)for(t=0;t<e.length;t++)am(e[t])}}function y_(t,e){return t(e)}function x_(){}var Bu=!1;function S_(t,e,n){if(Bu)return t(e,n);Bu=!0;try{return y_(t,e,n)}finally{Bu=!1,(as!==null||ls!==null)&&(x_(),__())}}function Aa(t,e){var n=t.stateNode;if(n===null)return null;var i=cu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ue(231,e,typeof n));return n}var of=!1;if(ji)try{var Gs={};Object.defineProperty(Gs,"passive",{get:function(){of=!0}}),window.addEventListener("test",Gs,Gs),window.removeEventListener("test",Gs,Gs)}catch{of=!1}function uS(t,e,n,i,r,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var fa=!1,Mc=null,Ec=!1,sf=null,dS={onError:function(t){fa=!0,Mc=t}};function fS(t,e,n,i,r,o,s,a,l){fa=!1,Mc=null,uS.apply(dS,arguments)}function hS(t,e,n,i,r,o,s,a,l){if(fS.apply(this,arguments),fa){if(fa){var c=Mc;fa=!1,Mc=null}else throw Error(ue(198));Ec||(Ec=!0,sf=c)}}function vo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function M_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function lm(t){if(vo(t)!==t)throw Error(ue(188))}function pS(t){var e=t.alternate;if(!e){if(e=vo(t),e===null)throw Error(ue(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return lm(r),t;if(o===i)return lm(r),e;o=o.sibling}throw Error(ue(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(ue(189))}}if(n.alternate!==i)throw Error(ue(190))}if(n.tag!==3)throw Error(ue(188));return n.stateNode.current===n?t:e}function E_(t){return t=pS(t),t!==null?w_(t):null}function w_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=w_(t);if(e!==null)return e;t=t.sibling}return null}var T_=Hn.unstable_scheduleCallback,cm=Hn.unstable_cancelCallback,mS=Hn.unstable_shouldYield,gS=Hn.unstable_requestPaint,Ft=Hn.unstable_now,vS=Hn.unstable_getCurrentPriorityLevel,zh=Hn.unstable_ImmediatePriority,A_=Hn.unstable_UserBlockingPriority,wc=Hn.unstable_NormalPriority,_S=Hn.unstable_LowPriority,R_=Hn.unstable_IdlePriority,ou=null,Ei=null;function yS(t){if(Ei&&typeof Ei.onCommitFiberRoot=="function")try{Ei.onCommitFiberRoot(ou,t,void 0,(t.current.flags&128)===128)}catch{}}var di=Math.clz32?Math.clz32:MS,xS=Math.log,SS=Math.LN2;function MS(t){return t>>>=0,t===0?32:31-(xS(t)/SS|0)|0}var cl=64,ul=4194304;function sa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Tc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=sa(a):(o&=s,o!==0&&(i=sa(o)))}else s=n&~r,s!==0?i=sa(s):o!==0&&(i=sa(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-di(e),r=1<<n,i|=t[n],e&=~r;return i}function ES(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wS(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-di(o),a=1<<s,l=r[s];l===-1?(!(a&n)||a&i)&&(r[s]=ES(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function af(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function C_(){var t=cl;return cl<<=1,!(cl&4194240)&&(cl=64),t}function Hu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ya(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-di(e),t[e]=n}function TS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-di(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function Bh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-di(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var pt=0;function P_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var b_,Hh,L_,D_,I_,lf=!1,dl=[],_r=null,yr=null,xr=null,Ra=new Map,Ca=new Map,dr=[],AS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function um(t,e){switch(t){case"focusin":case"focusout":_r=null;break;case"dragenter":case"dragleave":yr=null;break;case"mouseover":case"mouseout":xr=null;break;case"pointerover":case"pointerout":Ra.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ca.delete(e.pointerId)}}function Ws(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=Ka(e),e!==null&&Hh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function RS(t,e,n,i,r){switch(e){case"focusin":return _r=Ws(_r,t,e,n,i,r),!0;case"dragenter":return yr=Ws(yr,t,e,n,i,r),!0;case"mouseover":return xr=Ws(xr,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return Ra.set(o,Ws(Ra.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,Ca.set(o,Ws(Ca.get(o)||null,t,e,n,i,r)),!0}return!1}function N_(t){var e=Zr(t.target);if(e!==null){var n=vo(e);if(n!==null){if(e=n.tag,e===13){if(e=M_(n),e!==null){t.blockedOn=e,I_(t.priority,function(){L_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Jl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=cf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);nf=i,n.target.dispatchEvent(i),nf=null}else return e=Ka(n),e!==null&&Hh(e),t.blockedOn=n,!1;e.shift()}return!0}function dm(t,e,n){Jl(t)&&n.delete(e)}function CS(){lf=!1,_r!==null&&Jl(_r)&&(_r=null),yr!==null&&Jl(yr)&&(yr=null),xr!==null&&Jl(xr)&&(xr=null),Ra.forEach(dm),Ca.forEach(dm)}function js(t,e){t.blockedOn===e&&(t.blockedOn=null,lf||(lf=!0,Hn.unstable_scheduleCallback(Hn.unstable_NormalPriority,CS)))}function Pa(t){function e(r){return js(r,t)}if(0<dl.length){js(dl[0],t);for(var n=1;n<dl.length;n++){var i=dl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(_r!==null&&js(_r,t),yr!==null&&js(yr,t),xr!==null&&js(xr,t),Ra.forEach(e),Ca.forEach(e),n=0;n<dr.length;n++)i=dr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<dr.length&&(n=dr[0],n.blockedOn===null);)N_(n),n.blockedOn===null&&dr.shift()}var cs=Zi.ReactCurrentBatchConfig,Ac=!0;function PS(t,e,n,i){var r=pt,o=cs.transition;cs.transition=null;try{pt=1,Vh(t,e,n,i)}finally{pt=r,cs.transition=o}}function bS(t,e,n,i){var r=pt,o=cs.transition;cs.transition=null;try{pt=4,Vh(t,e,n,i)}finally{pt=r,cs.transition=o}}function Vh(t,e,n,i){if(Ac){var r=cf(t,e,n,i);if(r===null)Zu(t,e,i,Rc,n),um(t,i);else if(RS(r,t,e,n,i))i.stopPropagation();else if(um(t,i),e&4&&-1<AS.indexOf(t)){for(;r!==null;){var o=Ka(r);if(o!==null&&b_(o),o=cf(t,e,n,i),o===null&&Zu(t,e,i,Rc,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else Zu(t,e,i,null,n)}}var Rc=null;function cf(t,e,n,i){if(Rc=null,t=kh(i),t=Zr(t),t!==null)if(e=vo(t),e===null)t=null;else if(n=e.tag,n===13){if(t=M_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Rc=t,null}function U_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vS()){case zh:return 1;case A_:return 4;case wc:case _S:return 16;case R_:return 536870912;default:return 16}default:return 16}}var mr=null,Gh=null,ec=null;function F_(){if(ec)return ec;var t,e=Gh,n=e.length,i,r="value"in mr?mr.value:mr.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[o-i];i++);return ec=r.slice(t,1<i?1-i:void 0)}function tc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function fl(){return!0}function fm(){return!1}function Gn(t){function e(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?fl:fm,this.isPropagationStopped=fm,this}return Lt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fl)},persist:function(){},isPersistent:fl}),e}var Us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wh=Gn(Us),qa=Lt({},Us,{view:0,detail:0}),LS=Gn(qa),Vu,Gu,Xs,su=Lt({},qa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xs&&(Xs&&t.type==="mousemove"?(Vu=t.screenX-Xs.screenX,Gu=t.screenY-Xs.screenY):Gu=Vu=0,Xs=t),Vu)},movementY:function(t){return"movementY"in t?t.movementY:Gu}}),hm=Gn(su),DS=Lt({},su,{dataTransfer:0}),IS=Gn(DS),NS=Lt({},qa,{relatedTarget:0}),Wu=Gn(NS),US=Lt({},Us,{animationName:0,elapsedTime:0,pseudoElement:0}),FS=Gn(US),OS=Lt({},Us,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),kS=Gn(OS),zS=Lt({},Us,{data:0}),pm=Gn(zS),BS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},HS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},VS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function GS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=VS[t])?!!e[t]:!1}function jh(){return GS}var WS=Lt({},qa,{key:function(t){if(t.key){var e=BS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=tc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?HS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jh,charCode:function(t){return t.type==="keypress"?tc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?tc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),jS=Gn(WS),XS=Lt({},su,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mm=Gn(XS),$S=Lt({},qa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jh}),YS=Gn($S),qS=Lt({},Us,{propertyName:0,elapsedTime:0,pseudoElement:0}),KS=Gn(qS),ZS=Lt({},su,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),QS=Gn(ZS),JS=[9,13,27,32],Xh=ji&&"CompositionEvent"in window,ha=null;ji&&"documentMode"in document&&(ha=document.documentMode);var eM=ji&&"TextEvent"in window&&!ha,O_=ji&&(!Xh||ha&&8<ha&&11>=ha),gm=" ",vm=!1;function k_(t,e){switch(t){case"keyup":return JS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function z_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xo=!1;function tM(t,e){switch(t){case"compositionend":return z_(e);case"keypress":return e.which!==32?null:(vm=!0,gm);case"textInput":return t=e.data,t===gm&&vm?null:t;default:return null}}function nM(t,e){if(Xo)return t==="compositionend"||!Xh&&k_(t,e)?(t=F_(),ec=Gh=mr=null,Xo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return O_&&e.locale!=="ko"?null:e.data;default:return null}}var iM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _m(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!iM[t.type]:e==="textarea"}function B_(t,e,n,i){v_(i),e=Cc(e,"onChange"),0<e.length&&(n=new Wh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var pa=null,ba=null;function rM(t){Z_(t,0)}function au(t){var e=qo(t);if(u_(e))return t}function oM(t,e){if(t==="change")return e}var H_=!1;if(ji){var ju;if(ji){var Xu="oninput"in document;if(!Xu){var ym=document.createElement("div");ym.setAttribute("oninput","return;"),Xu=typeof ym.oninput=="function"}ju=Xu}else ju=!1;H_=ju&&(!document.documentMode||9<document.documentMode)}function xm(){pa&&(pa.detachEvent("onpropertychange",V_),ba=pa=null)}function V_(t){if(t.propertyName==="value"&&au(ba)){var e=[];B_(e,ba,t,kh(t)),S_(rM,e)}}function sM(t,e,n){t==="focusin"?(xm(),pa=e,ba=n,pa.attachEvent("onpropertychange",V_)):t==="focusout"&&xm()}function aM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return au(ba)}function lM(t,e){if(t==="click")return au(e)}function cM(t,e){if(t==="input"||t==="change")return au(e)}function uM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var pi=typeof Object.is=="function"?Object.is:uM;function La(t,e){if(pi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Wd.call(e,r)||!pi(t[r],e[r]))return!1}return!0}function Sm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Mm(t,e){var n=Sm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sm(n)}}function G_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?G_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function W_(){for(var t=window,e=Sc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Sc(t.document)}return e}function $h(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function dM(t){var e=W_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&G_(n.ownerDocument.documentElement,n)){if(i!==null&&$h(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=Mm(n,o);var s=Mm(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var fM=ji&&"documentMode"in document&&11>=document.documentMode,$o=null,uf=null,ma=null,df=!1;function Em(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;df||$o==null||$o!==Sc(i)||(i=$o,"selectionStart"in i&&$h(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ma&&La(ma,i)||(ma=i,i=Cc(uf,"onSelect"),0<i.length&&(e=new Wh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=$o)))}function hl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Yo={animationend:hl("Animation","AnimationEnd"),animationiteration:hl("Animation","AnimationIteration"),animationstart:hl("Animation","AnimationStart"),transitionend:hl("Transition","TransitionEnd")},$u={},j_={};ji&&(j_=document.createElement("div").style,"AnimationEvent"in window||(delete Yo.animationend.animation,delete Yo.animationiteration.animation,delete Yo.animationstart.animation),"TransitionEvent"in window||delete Yo.transitionend.transition);function lu(t){if($u[t])return $u[t];if(!Yo[t])return t;var e=Yo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in j_)return $u[t]=e[n];return t}var X_=lu("animationend"),$_=lu("animationiteration"),Y_=lu("animationstart"),q_=lu("transitionend"),K_=new Map,wm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ir(t,e){K_.set(t,e),go(e,[t])}for(var Yu=0;Yu<wm.length;Yu++){var qu=wm[Yu],hM=qu.toLowerCase(),pM=qu[0].toUpperCase()+qu.slice(1);Ir(hM,"on"+pM)}Ir(X_,"onAnimationEnd");Ir($_,"onAnimationIteration");Ir(Y_,"onAnimationStart");Ir("dblclick","onDoubleClick");Ir("focusin","onFocus");Ir("focusout","onBlur");Ir(q_,"onTransitionEnd");gs("onMouseEnter",["mouseout","mouseover"]);gs("onMouseLeave",["mouseout","mouseover"]);gs("onPointerEnter",["pointerout","pointerover"]);gs("onPointerLeave",["pointerout","pointerover"]);go("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));go("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));go("onBeforeInput",["compositionend","keypress","textInput","paste"]);go("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));go("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));go("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mM=new Set("cancel close invalid load scroll toggle".split(" ").concat(aa));function Tm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,hS(i,e,void 0,t),t.currentTarget=null}function Z_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;Tm(r,a,c),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;Tm(r,a,c),o=l}}}if(Ec)throw t=sf,Ec=!1,sf=null,t}function St(t,e){var n=e[gf];n===void 0&&(n=e[gf]=new Set);var i=t+"__bubble";n.has(i)||(Q_(e,t,2,!1),n.add(i))}function Ku(t,e,n){var i=0;e&&(i|=4),Q_(n,t,i,e)}var pl="_reactListening"+Math.random().toString(36).slice(2);function Da(t){if(!t[pl]){t[pl]=!0,o_.forEach(function(n){n!=="selectionchange"&&(mM.has(n)||Ku(n,!1,t),Ku(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[pl]||(e[pl]=!0,Ku("selectionchange",!1,e))}}function Q_(t,e,n,i){switch(U_(e)){case 1:var r=PS;break;case 4:r=bS;break;default:r=Vh}n=r.bind(null,e,n,t),r=void 0,!of||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Zu(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=Zr(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}S_(function(){var c=o,u=kh(n),f=[];e:{var d=K_.get(t);if(d!==void 0){var p=Wh,g=t;switch(t){case"keypress":if(tc(n)===0)break e;case"keydown":case"keyup":p=jS;break;case"focusin":g="focus",p=Wu;break;case"focusout":g="blur",p=Wu;break;case"beforeblur":case"afterblur":p=Wu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=hm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=IS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=YS;break;case X_:case $_:case Y_:p=FS;break;case q_:p=KS;break;case"scroll":p=LS;break;case"wheel":p=QS;break;case"copy":case"cut":case"paste":p=kS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=mm}var y=(e&4)!==0,m=!y&&t==="scroll",h=y?d!==null?d+"Capture":null:d;y=[];for(var v=c,_;v!==null;){_=v;var S=_.stateNode;if(_.tag===5&&S!==null&&(_=S,h!==null&&(S=Aa(v,h),S!=null&&y.push(Ia(v,S,_)))),m)break;v=v.return}0<y.length&&(d=new p(d,g,null,n,u),f.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==nf&&(g=n.relatedTarget||n.fromElement)&&(Zr(g)||g[Xi]))break e;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?Zr(g):null,g!==null&&(m=vo(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(y=hm,S="onMouseLeave",h="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(y=mm,S="onPointerLeave",h="onPointerEnter",v="pointer"),m=p==null?d:qo(p),_=g==null?d:qo(g),d=new y(S,v+"leave",p,n,u),d.target=m,d.relatedTarget=_,S=null,Zr(u)===c&&(y=new y(h,v+"enter",g,n,u),y.target=_,y.relatedTarget=m,S=y),m=S,p&&g)t:{for(y=p,h=g,v=0,_=y;_;_=Eo(_))v++;for(_=0,S=h;S;S=Eo(S))_++;for(;0<v-_;)y=Eo(y),v--;for(;0<_-v;)h=Eo(h),_--;for(;v--;){if(y===h||h!==null&&y===h.alternate)break t;y=Eo(y),h=Eo(h)}y=null}else y=null;p!==null&&Am(f,d,p,y,!1),g!==null&&m!==null&&Am(f,m,g,y,!0)}}e:{if(d=c?qo(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var C=oM;else if(_m(d))if(H_)C=cM;else{C=aM;var A=sM}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=lM);if(C&&(C=C(t,c))){B_(f,C,n,u);break e}A&&A(t,d,c),t==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&Zd(d,"number",d.value)}switch(A=c?qo(c):window,t){case"focusin":(_m(A)||A.contentEditable==="true")&&($o=A,uf=c,ma=null);break;case"focusout":ma=uf=$o=null;break;case"mousedown":df=!0;break;case"contextmenu":case"mouseup":case"dragend":df=!1,Em(f,n,u);break;case"selectionchange":if(fM)break;case"keydown":case"keyup":Em(f,n,u)}var R;if(Xh)e:{switch(t){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Xo?k_(t,n)&&(E="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(O_&&n.locale!=="ko"&&(Xo||E!=="onCompositionStart"?E==="onCompositionEnd"&&Xo&&(R=F_()):(mr=u,Gh="value"in mr?mr.value:mr.textContent,Xo=!0)),A=Cc(c,E),0<A.length&&(E=new pm(E,t,null,n,u),f.push({event:E,listeners:A}),R?E.data=R:(R=z_(n),R!==null&&(E.data=R)))),(R=eM?tM(t,n):nM(t,n))&&(c=Cc(c,"onBeforeInput"),0<c.length&&(u=new pm("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=R))}Z_(f,e)})}function Ia(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Cc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=Aa(t,n),o!=null&&i.unshift(Ia(t,o,r)),o=Aa(t,e),o!=null&&i.push(Ia(t,o,r))),t=t.return}return i}function Eo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Am(t,e,n,i,r){for(var o=e._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Aa(n,o),l!=null&&s.unshift(Ia(n,l,a))):r||(l=Aa(n,o),l!=null&&s.push(Ia(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var gM=/\r\n?/g,vM=/\u0000|\uFFFD/g;function Rm(t){return(typeof t=="string"?t:""+t).replace(gM,`
`).replace(vM,"")}function ml(t,e,n){if(e=Rm(e),Rm(t)!==e&&n)throw Error(ue(425))}function Pc(){}var ff=null,hf=null;function pf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var mf=typeof setTimeout=="function"?setTimeout:void 0,_M=typeof clearTimeout=="function"?clearTimeout:void 0,Cm=typeof Promise=="function"?Promise:void 0,yM=typeof queueMicrotask=="function"?queueMicrotask:typeof Cm<"u"?function(t){return Cm.resolve(null).then(t).catch(xM)}:mf;function xM(t){setTimeout(function(){throw t})}function Qu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Pa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Pa(e)}function Sr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Pm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Fs=Math.random().toString(36).slice(2),xi="__reactFiber$"+Fs,Na="__reactProps$"+Fs,Xi="__reactContainer$"+Fs,gf="__reactEvents$"+Fs,SM="__reactListeners$"+Fs,MM="__reactHandles$"+Fs;function Zr(t){var e=t[xi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Xi]||n[xi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Pm(t);t!==null;){if(n=t[xi])return n;t=Pm(t)}return e}t=n,n=t.parentNode}return null}function Ka(t){return t=t[xi]||t[Xi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function qo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ue(33))}function cu(t){return t[Na]||null}var vf=[],Ko=-1;function Nr(t){return{current:t}}function wt(t){0>Ko||(t.current=vf[Ko],vf[Ko]=null,Ko--)}function yt(t,e){Ko++,vf[Ko]=t.current,t.current=e}var br={},dn=Nr(br),Tn=Nr(!1),ao=br;function vs(t,e){var n=t.type.contextTypes;if(!n)return br;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function An(t){return t=t.childContextTypes,t!=null}function bc(){wt(Tn),wt(dn)}function bm(t,e,n){if(dn.current!==br)throw Error(ue(168));yt(dn,e),yt(Tn,n)}function J_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ue(108,sS(t)||"Unknown",r));return Lt({},n,i)}function Lc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||br,ao=dn.current,yt(dn,t),yt(Tn,Tn.current),!0}function Lm(t,e,n){var i=t.stateNode;if(!i)throw Error(ue(169));n?(t=J_(t,e,ao),i.__reactInternalMemoizedMergedChildContext=t,wt(Tn),wt(dn),yt(dn,t)):wt(Tn),yt(Tn,n)}var Ui=null,uu=!1,Ju=!1;function e0(t){Ui===null?Ui=[t]:Ui.push(t)}function EM(t){uu=!0,e0(t)}function Ur(){if(!Ju&&Ui!==null){Ju=!0;var t=0,e=pt;try{var n=Ui;for(pt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ui=null,uu=!1}catch(r){throw Ui!==null&&(Ui=Ui.slice(t+1)),T_(zh,Ur),r}finally{pt=e,Ju=!1}}return null}var Zo=[],Qo=0,Dc=null,Ic=0,$n=[],Yn=0,lo=null,Oi=1,ki="";function jr(t,e){Zo[Qo++]=Ic,Zo[Qo++]=Dc,Dc=t,Ic=e}function t0(t,e,n){$n[Yn++]=Oi,$n[Yn++]=ki,$n[Yn++]=lo,lo=t;var i=Oi;t=ki;var r=32-di(i)-1;i&=~(1<<r),n+=1;var o=32-di(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,Oi=1<<32-di(e)+r|n<<r|i,ki=o+t}else Oi=1<<o|n<<r|i,ki=t}function Yh(t){t.return!==null&&(jr(t,1),t0(t,1,0))}function qh(t){for(;t===Dc;)Dc=Zo[--Qo],Zo[Qo]=null,Ic=Zo[--Qo],Zo[Qo]=null;for(;t===lo;)lo=$n[--Yn],$n[Yn]=null,ki=$n[--Yn],$n[Yn]=null,Oi=$n[--Yn],$n[Yn]=null}var zn=null,On=null,At=!1,li=null;function n0(t,e){var n=qn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Dm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,zn=t,On=Sr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,zn=t,On=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=lo!==null?{id:Oi,overflow:ki}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=qn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,zn=t,On=null,!0):!1;default:return!1}}function _f(t){return(t.mode&1)!==0&&(t.flags&128)===0}function yf(t){if(At){var e=On;if(e){var n=e;if(!Dm(t,e)){if(_f(t))throw Error(ue(418));e=Sr(n.nextSibling);var i=zn;e&&Dm(t,e)?n0(i,n):(t.flags=t.flags&-4097|2,At=!1,zn=t)}}else{if(_f(t))throw Error(ue(418));t.flags=t.flags&-4097|2,At=!1,zn=t}}}function Im(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;zn=t}function gl(t){if(t!==zn)return!1;if(!At)return Im(t),At=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!pf(t.type,t.memoizedProps)),e&&(e=On)){if(_f(t))throw i0(),Error(ue(418));for(;e;)n0(t,e),e=Sr(e.nextSibling)}if(Im(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ue(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){On=Sr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}On=null}}else On=zn?Sr(t.stateNode.nextSibling):null;return!0}function i0(){for(var t=On;t;)t=Sr(t.nextSibling)}function _s(){On=zn=null,At=!1}function Kh(t){li===null?li=[t]:li.push(t)}var wM=Zi.ReactCurrentBatchConfig;function $s(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ue(309));var i=n.stateNode}if(!i)throw Error(ue(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(ue(284));if(!n._owner)throw Error(ue(290,t))}return t}function vl(t,e){throw t=Object.prototype.toString.call(e),Error(ue(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Nm(t){var e=t._init;return e(t._payload)}function r0(t){function e(h,v){if(t){var _=h.deletions;_===null?(h.deletions=[v],h.flags|=16):_.push(v)}}function n(h,v){if(!t)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=Tr(h,v),h.index=0,h.sibling=null,h}function o(h,v,_){return h.index=_,t?(_=h.alternate,_!==null?(_=_.index,_<v?(h.flags|=2,v):_):(h.flags|=2,v)):(h.flags|=1048576,v)}function s(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,v,_,S){return v===null||v.tag!==6?(v=sd(_,h.mode,S),v.return=h,v):(v=r(v,_),v.return=h,v)}function l(h,v,_,S){var C=_.type;return C===jo?u(h,v,_.props.children,S,_.key):v!==null&&(v.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===lr&&Nm(C)===v.type)?(S=r(v,_.props),S.ref=$s(h,v,_),S.return=h,S):(S=lc(_.type,_.key,_.props,null,h.mode,S),S.ref=$s(h,v,_),S.return=h,S)}function c(h,v,_,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=ad(_,h.mode,S),v.return=h,v):(v=r(v,_.children||[]),v.return=h,v)}function u(h,v,_,S,C){return v===null||v.tag!==7?(v=ro(_,h.mode,S,C),v.return=h,v):(v=r(v,_),v.return=h,v)}function f(h,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=sd(""+v,h.mode,_),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case sl:return _=lc(v.type,v.key,v.props,null,h.mode,_),_.ref=$s(h,null,v),_.return=h,_;case Wo:return v=ad(v,h.mode,_),v.return=h,v;case lr:var S=v._init;return f(h,S(v._payload),_)}if(oa(v)||Vs(v))return v=ro(v,h.mode,_,null),v.return=h,v;vl(h,v)}return null}function d(h,v,_,S){var C=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return C!==null?null:a(h,v,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case sl:return _.key===C?l(h,v,_,S):null;case Wo:return _.key===C?c(h,v,_,S):null;case lr:return C=_._init,d(h,v,C(_._payload),S)}if(oa(_)||Vs(_))return C!==null?null:u(h,v,_,S,null);vl(h,_)}return null}function p(h,v,_,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(_)||null,a(v,h,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case sl:return h=h.get(S.key===null?_:S.key)||null,l(v,h,S,C);case Wo:return h=h.get(S.key===null?_:S.key)||null,c(v,h,S,C);case lr:var A=S._init;return p(h,v,_,A(S._payload),C)}if(oa(S)||Vs(S))return h=h.get(_)||null,u(v,h,S,C,null);vl(v,S)}return null}function g(h,v,_,S){for(var C=null,A=null,R=v,E=v=0,T=null;R!==null&&E<_.length;E++){R.index>E?(T=R,R=null):T=R.sibling;var x=d(h,R,_[E],S);if(x===null){R===null&&(R=T);break}t&&R&&x.alternate===null&&e(h,R),v=o(x,v,E),A===null?C=x:A.sibling=x,A=x,R=T}if(E===_.length)return n(h,R),At&&jr(h,E),C;if(R===null){for(;E<_.length;E++)R=f(h,_[E],S),R!==null&&(v=o(R,v,E),A===null?C=R:A.sibling=R,A=R);return At&&jr(h,E),C}for(R=i(h,R);E<_.length;E++)T=p(R,h,E,_[E],S),T!==null&&(t&&T.alternate!==null&&R.delete(T.key===null?E:T.key),v=o(T,v,E),A===null?C=T:A.sibling=T,A=T);return t&&R.forEach(function(b){return e(h,b)}),At&&jr(h,E),C}function y(h,v,_,S){var C=Vs(_);if(typeof C!="function")throw Error(ue(150));if(_=C.call(_),_==null)throw Error(ue(151));for(var A=C=null,R=v,E=v=0,T=null,x=_.next();R!==null&&!x.done;E++,x=_.next()){R.index>E?(T=R,R=null):T=R.sibling;var b=d(h,R,x.value,S);if(b===null){R===null&&(R=T);break}t&&R&&b.alternate===null&&e(h,R),v=o(b,v,E),A===null?C=b:A.sibling=b,A=b,R=T}if(x.done)return n(h,R),At&&jr(h,E),C;if(R===null){for(;!x.done;E++,x=_.next())x=f(h,x.value,S),x!==null&&(v=o(x,v,E),A===null?C=x:A.sibling=x,A=x);return At&&jr(h,E),C}for(R=i(h,R);!x.done;E++,x=_.next())x=p(R,h,E,x.value,S),x!==null&&(t&&x.alternate!==null&&R.delete(x.key===null?E:x.key),v=o(x,v,E),A===null?C=x:A.sibling=x,A=x);return t&&R.forEach(function(H){return e(h,H)}),At&&jr(h,E),C}function m(h,v,_,S){if(typeof _=="object"&&_!==null&&_.type===jo&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case sl:e:{for(var C=_.key,A=v;A!==null;){if(A.key===C){if(C=_.type,C===jo){if(A.tag===7){n(h,A.sibling),v=r(A,_.props.children),v.return=h,h=v;break e}}else if(A.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===lr&&Nm(C)===A.type){n(h,A.sibling),v=r(A,_.props),v.ref=$s(h,A,_),v.return=h,h=v;break e}n(h,A);break}else e(h,A);A=A.sibling}_.type===jo?(v=ro(_.props.children,h.mode,S,_.key),v.return=h,h=v):(S=lc(_.type,_.key,_.props,null,h.mode,S),S.ref=$s(h,v,_),S.return=h,h=S)}return s(h);case Wo:e:{for(A=_.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(h,v.sibling),v=r(v,_.children||[]),v.return=h,h=v;break e}else{n(h,v);break}else e(h,v);v=v.sibling}v=ad(_,h.mode,S),v.return=h,h=v}return s(h);case lr:return A=_._init,m(h,v,A(_._payload),S)}if(oa(_))return g(h,v,_,S);if(Vs(_))return y(h,v,_,S);vl(h,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(n(h,v.sibling),v=r(v,_),v.return=h,h=v):(n(h,v),v=sd(_,h.mode,S),v.return=h,h=v),s(h)):n(h,v)}return m}var ys=r0(!0),o0=r0(!1),Nc=Nr(null),Uc=null,Jo=null,Zh=null;function Qh(){Zh=Jo=Uc=null}function Jh(t){var e=Nc.current;wt(Nc),t._currentValue=e}function xf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function us(t,e){Uc=t,Zh=Jo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(En=!0),t.firstContext=null)}function Zn(t){var e=t._currentValue;if(Zh!==t)if(t={context:t,memoizedValue:e,next:null},Jo===null){if(Uc===null)throw Error(ue(308));Jo=t,Uc.dependencies={lanes:0,firstContext:t}}else Jo=Jo.next=t;return e}var Qr=null;function ep(t){Qr===null?Qr=[t]:Qr.push(t)}function s0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,ep(e)):(n.next=r.next,r.next=n),e.interleaved=n,$i(t,i)}function $i(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var cr=!1;function tp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function a0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Hi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Mr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,at&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,$i(t,n)}return r=i.interleaved,r===null?(e.next=e,ep(i)):(e.next=r.next,r.next=e),i.interleaved=e,$i(t,n)}function nc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Bh(t,n)}}function Um(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Fc(t,e,n,i){var r=t.updateQueue;cr=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==s&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(o!==null){var f=r.baseState;s=0,u=c=l=null,a=o;do{var d=a.lane,p=a.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,y=a;switch(d=e,p=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){f=g.call(p,f,d);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,d=typeof g=="function"?g.call(p,f,d):g,d==null)break e;f=Lt({},f,d);break e;case 2:cr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,s|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);uo|=s,t.lanes=s,t.memoizedState=f}}function Fm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ue(191,r));r.call(i)}}}var Za={},wi=Nr(Za),Ua=Nr(Za),Fa=Nr(Za);function Jr(t){if(t===Za)throw Error(ue(174));return t}function np(t,e){switch(yt(Fa,e),yt(Ua,t),yt(wi,Za),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Jd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Jd(e,t)}wt(wi),yt(wi,e)}function xs(){wt(wi),wt(Ua),wt(Fa)}function l0(t){Jr(Fa.current);var e=Jr(wi.current),n=Jd(e,t.type);e!==n&&(yt(Ua,t),yt(wi,n))}function ip(t){Ua.current===t&&(wt(wi),wt(Ua))}var Pt=Nr(0);function Oc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ed=[];function rp(){for(var t=0;t<ed.length;t++)ed[t]._workInProgressVersionPrimary=null;ed.length=0}var ic=Zi.ReactCurrentDispatcher,td=Zi.ReactCurrentBatchConfig,co=0,bt=null,Wt=null,Kt=null,kc=!1,ga=!1,Oa=0,TM=0;function on(){throw Error(ue(321))}function op(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!pi(t[n],e[n]))return!1;return!0}function sp(t,e,n,i,r,o){if(co=o,bt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ic.current=t===null||t.memoizedState===null?PM:bM,t=n(i,r),ga){o=0;do{if(ga=!1,Oa=0,25<=o)throw Error(ue(301));o+=1,Kt=Wt=null,e.updateQueue=null,ic.current=LM,t=n(i,r)}while(ga)}if(ic.current=zc,e=Wt!==null&&Wt.next!==null,co=0,Kt=Wt=bt=null,kc=!1,e)throw Error(ue(300));return t}function ap(){var t=Oa!==0;return Oa=0,t}function gi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Kt===null?bt.memoizedState=Kt=t:Kt=Kt.next=t,Kt}function Qn(){if(Wt===null){var t=bt.alternate;t=t!==null?t.memoizedState:null}else t=Wt.next;var e=Kt===null?bt.memoizedState:Kt.next;if(e!==null)Kt=e,Wt=t;else{if(t===null)throw Error(ue(310));Wt=t,t={memoizedState:Wt.memoizedState,baseState:Wt.baseState,baseQueue:Wt.baseQueue,queue:Wt.queue,next:null},Kt===null?bt.memoizedState=Kt=t:Kt=Kt.next=t}return Kt}function ka(t,e){return typeof e=="function"?e(t):e}function nd(t){var e=Qn(),n=e.queue;if(n===null)throw Error(ue(311));n.lastRenderedReducer=t;var i=Wt,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,c=o;do{var u=c.lane;if((co&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,s=i):l=l.next=f,bt.lanes|=u,uo|=u}c=c.next}while(c!==null&&c!==o);l===null?s=i:l.next=a,pi(i,e.memoizedState)||(En=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,bt.lanes|=o,uo|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function id(t){var e=Qn(),n=e.queue;if(n===null)throw Error(ue(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);pi(o,e.memoizedState)||(En=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function c0(){}function u0(t,e){var n=bt,i=Qn(),r=e(),o=!pi(i.memoizedState,r);if(o&&(i.memoizedState=r,En=!0),i=i.queue,lp(h0.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||Kt!==null&&Kt.memoizedState.tag&1){if(n.flags|=2048,za(9,f0.bind(null,n,i,r,e),void 0,null),en===null)throw Error(ue(349));co&30||d0(n,e,r)}return r}function d0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=bt.updateQueue,e===null?(e={lastEffect:null,stores:null},bt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function f0(t,e,n,i){e.value=n,e.getSnapshot=i,p0(e)&&m0(t)}function h0(t,e,n){return n(function(){p0(e)&&m0(t)})}function p0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!pi(t,n)}catch{return!0}}function m0(t){var e=$i(t,1);e!==null&&fi(e,t,1,-1)}function Om(t){var e=gi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ka,lastRenderedState:t},e.queue=t,t=t.dispatch=CM.bind(null,bt,t),[e.memoizedState,t]}function za(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=bt.updateQueue,e===null?(e={lastEffect:null,stores:null},bt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function g0(){return Qn().memoizedState}function rc(t,e,n,i){var r=gi();bt.flags|=t,r.memoizedState=za(1|e,n,void 0,i===void 0?null:i)}function du(t,e,n,i){var r=Qn();i=i===void 0?null:i;var o=void 0;if(Wt!==null){var s=Wt.memoizedState;if(o=s.destroy,i!==null&&op(i,s.deps)){r.memoizedState=za(e,n,o,i);return}}bt.flags|=t,r.memoizedState=za(1|e,n,o,i)}function km(t,e){return rc(8390656,8,t,e)}function lp(t,e){return du(2048,8,t,e)}function v0(t,e){return du(4,2,t,e)}function _0(t,e){return du(4,4,t,e)}function y0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function x0(t,e,n){return n=n!=null?n.concat([t]):null,du(4,4,y0.bind(null,e,t),n)}function cp(){}function S0(t,e){var n=Qn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&op(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function M0(t,e){var n=Qn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&op(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function E0(t,e,n){return co&21?(pi(n,e)||(n=C_(),bt.lanes|=n,uo|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,En=!0),t.memoizedState=n)}function AM(t,e){var n=pt;pt=n!==0&&4>n?n:4,t(!0);var i=td.transition;td.transition={};try{t(!1),e()}finally{pt=n,td.transition=i}}function w0(){return Qn().memoizedState}function RM(t,e,n){var i=wr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},T0(t))A0(e,n);else if(n=s0(t,e,n,i),n!==null){var r=gn();fi(n,t,i,r),R0(n,e,i)}}function CM(t,e,n){var i=wr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(T0(t))A0(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,pi(a,s)){var l=e.interleaved;l===null?(r.next=r,ep(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=s0(t,e,r,i),n!==null&&(r=gn(),fi(n,t,i,r),R0(n,e,i))}}function T0(t){var e=t.alternate;return t===bt||e!==null&&e===bt}function A0(t,e){ga=kc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function R0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Bh(t,n)}}var zc={readContext:Zn,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useInsertionEffect:on,useLayoutEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useMutableSource:on,useSyncExternalStore:on,useId:on,unstable_isNewReconciler:!1},PM={readContext:Zn,useCallback:function(t,e){return gi().memoizedState=[t,e===void 0?null:e],t},useContext:Zn,useEffect:km,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,rc(4194308,4,y0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return rc(4194308,4,t,e)},useInsertionEffect:function(t,e){return rc(4,2,t,e)},useMemo:function(t,e){var n=gi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=gi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=RM.bind(null,bt,t),[i.memoizedState,t]},useRef:function(t){var e=gi();return t={current:t},e.memoizedState=t},useState:Om,useDebugValue:cp,useDeferredValue:function(t){return gi().memoizedState=t},useTransition:function(){var t=Om(!1),e=t[0];return t=AM.bind(null,t[1]),gi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=bt,r=gi();if(At){if(n===void 0)throw Error(ue(407));n=n()}else{if(n=e(),en===null)throw Error(ue(349));co&30||d0(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,km(h0.bind(null,i,o,t),[t]),i.flags|=2048,za(9,f0.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=gi(),e=en.identifierPrefix;if(At){var n=ki,i=Oi;n=(i&~(1<<32-di(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Oa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=TM++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},bM={readContext:Zn,useCallback:S0,useContext:Zn,useEffect:lp,useImperativeHandle:x0,useInsertionEffect:v0,useLayoutEffect:_0,useMemo:M0,useReducer:nd,useRef:g0,useState:function(){return nd(ka)},useDebugValue:cp,useDeferredValue:function(t){var e=Qn();return E0(e,Wt.memoizedState,t)},useTransition:function(){var t=nd(ka)[0],e=Qn().memoizedState;return[t,e]},useMutableSource:c0,useSyncExternalStore:u0,useId:w0,unstable_isNewReconciler:!1},LM={readContext:Zn,useCallback:S0,useContext:Zn,useEffect:lp,useImperativeHandle:x0,useInsertionEffect:v0,useLayoutEffect:_0,useMemo:M0,useReducer:id,useRef:g0,useState:function(){return id(ka)},useDebugValue:cp,useDeferredValue:function(t){var e=Qn();return Wt===null?e.memoizedState=t:E0(e,Wt.memoizedState,t)},useTransition:function(){var t=id(ka)[0],e=Qn().memoizedState;return[t,e]},useMutableSource:c0,useSyncExternalStore:u0,useId:w0,unstable_isNewReconciler:!1};function oi(t,e){if(t&&t.defaultProps){e=Lt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Sf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Lt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var fu={isMounted:function(t){return(t=t._reactInternals)?vo(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=gn(),r=wr(t),o=Hi(i,r);o.payload=e,n!=null&&(o.callback=n),e=Mr(t,o,r),e!==null&&(fi(e,t,r,i),nc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=gn(),r=wr(t),o=Hi(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Mr(t,o,r),e!==null&&(fi(e,t,r,i),nc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=gn(),i=wr(t),r=Hi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Mr(t,r,i),e!==null&&(fi(e,t,i,n),nc(e,t,i))}};function zm(t,e,n,i,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!La(n,i)||!La(r,o):!0}function C0(t,e,n){var i=!1,r=br,o=e.contextType;return typeof o=="object"&&o!==null?o=Zn(o):(r=An(e)?ao:dn.current,i=e.contextTypes,o=(i=i!=null)?vs(t,r):br),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=fu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function Bm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&fu.enqueueReplaceState(e,e.state,null)}function Mf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},tp(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=Zn(o):(o=An(e)?ao:dn.current,r.context=vs(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Sf(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&fu.enqueueReplaceState(r,r.state,null),Fc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ss(t,e){try{var n="",i=e;do n+=oS(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function rd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ef(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var DM=typeof WeakMap=="function"?WeakMap:Map;function P0(t,e,n){n=Hi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Hc||(Hc=!0,If=i),Ef(t,e)},n}function b0(t,e,n){n=Hi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Ef(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Ef(t,e),typeof i!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Hm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new DM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=XM.bind(null,t,e,n),e.then(t,t))}function Vm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Gm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Hi(-1,1),e.tag=2,Mr(n,e,1))),n.lanes|=1),t)}var IM=Zi.ReactCurrentOwner,En=!1;function mn(t,e,n,i){e.child=t===null?o0(e,null,n,i):ys(e,t.child,n,i)}function Wm(t,e,n,i,r){n=n.render;var o=e.ref;return us(e,r),i=sp(t,e,n,i,o,r),n=ap(),t!==null&&!En?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Yi(t,e,r)):(At&&n&&Yh(e),e.flags|=1,mn(t,e,i,r),e.child)}function jm(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!vp(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,L0(t,e,o,i,r)):(t=lc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:La,n(s,i)&&t.ref===e.ref)return Yi(t,e,r)}return e.flags|=1,t=Tr(o,i),t.ref=e.ref,t.return=e,e.child=t}function L0(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(La(o,i)&&t.ref===e.ref)if(En=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(En=!0);else return e.lanes=t.lanes,Yi(t,e,r)}return wf(t,e,n,i,r)}function D0(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},yt(ts,Nn),Nn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,yt(ts,Nn),Nn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,yt(ts,Nn),Nn|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,yt(ts,Nn),Nn|=i;return mn(t,e,r,n),e.child}function I0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function wf(t,e,n,i,r){var o=An(n)?ao:dn.current;return o=vs(e,o),us(e,r),n=sp(t,e,n,i,o,r),i=ap(),t!==null&&!En?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Yi(t,e,r)):(At&&i&&Yh(e),e.flags|=1,mn(t,e,n,r),e.child)}function Xm(t,e,n,i,r){if(An(n)){var o=!0;Lc(e)}else o=!1;if(us(e,r),e.stateNode===null)oc(t,e),C0(e,n,i),Mf(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Zn(c):(c=An(n)?ao:dn.current,c=vs(e,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Bm(e,s,i,c),cr=!1;var d=e.memoizedState;s.state=d,Fc(e,i,s,r),l=e.memoizedState,a!==i||d!==l||Tn.current||cr?(typeof u=="function"&&(Sf(e,n,u,i),l=e.memoizedState),(a=cr||zm(e,n,a,i,d,l,c))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=c,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,a0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:oi(e.type,a),s.props=c,f=e.pendingProps,d=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Zn(l):(l=An(n)?ao:dn.current,l=vs(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||d!==l)&&Bm(e,s,i,l),cr=!1,d=e.memoizedState,s.state=d,Fc(e,i,s,r);var g=e.memoizedState;a!==f||d!==g||Tn.current||cr?(typeof p=="function"&&(Sf(e,n,p,i),g=e.memoizedState),(c=cr||zm(e,n,c,i,d,g,l)||!1)?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,g,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,g,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),s.props=i,s.state=g,s.context=l,i=c):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Tf(t,e,n,i,o,r)}function Tf(t,e,n,i,r,o){I0(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&Lm(e,n,!1),Yi(t,e,o);i=e.stateNode,IM.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=ys(e,t.child,null,o),e.child=ys(e,null,a,o)):mn(t,e,a,o),e.memoizedState=i.state,r&&Lm(e,n,!0),e.child}function N0(t){var e=t.stateNode;e.pendingContext?bm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&bm(t,e.context,!1),np(t,e.containerInfo)}function $m(t,e,n,i,r){return _s(),Kh(r),e.flags|=256,mn(t,e,n,i),e.child}var Af={dehydrated:null,treeContext:null,retryLane:0};function Rf(t){return{baseLanes:t,cachePool:null,transitions:null}}function U0(t,e,n){var i=e.pendingProps,r=Pt.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),yt(Pt,r&1),t===null)return yf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=mu(s,i,0,null),t=ro(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Rf(n),e.memoizedState=Af,t):up(e,s));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return NM(t,e,s,i,a,r,n);if(o){o=i.fallback,s=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Tr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=Tr(a,o):(o=ro(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=t.child.memoizedState,s=s===null?Rf(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Af,i}return o=t.child,t=o.sibling,i=Tr(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function up(t,e){return e=mu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function _l(t,e,n,i){return i!==null&&Kh(i),ys(e,t.child,null,n),t=up(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function NM(t,e,n,i,r,o,s){if(n)return e.flags&256?(e.flags&=-257,i=rd(Error(ue(422))),_l(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=mu({mode:"visible",children:i.children},r,0,null),o=ro(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&ys(e,t.child,null,s),e.child.memoizedState=Rf(s),e.memoizedState=Af,o);if(!(e.mode&1))return _l(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(ue(419)),i=rd(o,i,void 0),_l(t,e,s,i)}if(a=(s&t.childLanes)!==0,En||a){if(i=en,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,$i(t,r),fi(i,t,r,-1))}return gp(),i=rd(Error(ue(421))),_l(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=$M.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,On=Sr(r.nextSibling),zn=e,At=!0,li=null,t!==null&&($n[Yn++]=Oi,$n[Yn++]=ki,$n[Yn++]=lo,Oi=t.id,ki=t.overflow,lo=e),e=up(e,i.children),e.flags|=4096,e)}function Ym(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),xf(t.return,e,n)}function od(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function F0(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(mn(t,e,i.children,n),i=Pt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ym(t,n,e);else if(t.tag===19)Ym(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(yt(Pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Oc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),od(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Oc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}od(e,!0,n,null,o);break;case"together":od(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function oc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Yi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),uo|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ue(153));if(e.child!==null){for(t=e.child,n=Tr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Tr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function UM(t,e,n){switch(e.tag){case 3:N0(e),_s();break;case 5:l0(e);break;case 1:An(e.type)&&Lc(e);break;case 4:np(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;yt(Nc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(yt(Pt,Pt.current&1),e.flags|=128,null):n&e.child.childLanes?U0(t,e,n):(yt(Pt,Pt.current&1),t=Yi(t,e,n),t!==null?t.sibling:null);yt(Pt,Pt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return F0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),yt(Pt,Pt.current),i)break;return null;case 22:case 23:return e.lanes=0,D0(t,e,n)}return Yi(t,e,n)}var O0,Cf,k0,z0;O0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Cf=function(){};k0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Jr(wi.current);var o=null;switch(n){case"input":r=qd(t,r),i=qd(t,i),o=[];break;case"select":r=Lt({},r,{value:void 0}),i=Lt({},i,{value:void 0}),o=[];break;case"textarea":r=Qd(t,r),i=Qd(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Pc)}ef(n,i);var s;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(wa.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(wa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&St("scroll",t),o||a===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(e.updateQueue=c)&&(e.flags|=4)}};z0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ys(t,e){if(!At)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function sn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function FM(t,e,n){var i=e.pendingProps;switch(qh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return sn(e),null;case 1:return An(e.type)&&bc(),sn(e),null;case 3:return i=e.stateNode,xs(),wt(Tn),wt(dn),rp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(gl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,li!==null&&(Ff(li),li=null))),Cf(t,e),sn(e),null;case 5:ip(e);var r=Jr(Fa.current);if(n=e.type,t!==null&&e.stateNode!=null)k0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ue(166));return sn(e),null}if(t=Jr(wi.current),gl(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[xi]=e,i[Na]=o,t=(e.mode&1)!==0,n){case"dialog":St("cancel",i),St("close",i);break;case"iframe":case"object":case"embed":St("load",i);break;case"video":case"audio":for(r=0;r<aa.length;r++)St(aa[r],i);break;case"source":St("error",i);break;case"img":case"image":case"link":St("error",i),St("load",i);break;case"details":St("toggle",i);break;case"input":im(i,o),St("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},St("invalid",i);break;case"textarea":om(i,o),St("invalid",i)}ef(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&ml(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&ml(i.textContent,a,t),r=["children",""+a]):wa.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&St("scroll",i)}switch(n){case"input":al(i),rm(i,o,!0);break;case"textarea":al(i),sm(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=Pc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=h_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[xi]=e,t[Na]=i,O0(t,e,!1,!1),e.stateNode=t;e:{switch(s=tf(n,i),n){case"dialog":St("cancel",t),St("close",t),r=i;break;case"iframe":case"object":case"embed":St("load",t),r=i;break;case"video":case"audio":for(r=0;r<aa.length;r++)St(aa[r],t);r=i;break;case"source":St("error",t),r=i;break;case"img":case"image":case"link":St("error",t),St("load",t),r=i;break;case"details":St("toggle",t),r=i;break;case"input":im(t,i),r=qd(t,i),St("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Lt({},i,{value:void 0}),St("invalid",t);break;case"textarea":om(t,i),r=Qd(t,i),St("invalid",t);break;default:r=i}ef(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?g_(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&p_(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ta(t,l):typeof l=="number"&&Ta(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(wa.hasOwnProperty(o)?l!=null&&o==="onScroll"&&St("scroll",t):l!=null&&Nh(t,o,l,s))}switch(n){case"input":al(t),rm(t,i,!1);break;case"textarea":al(t),sm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Pr(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?ss(t,!!i.multiple,o,!1):i.defaultValue!=null&&ss(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Pc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return sn(e),null;case 6:if(t&&e.stateNode!=null)z0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ue(166));if(n=Jr(Fa.current),Jr(wi.current),gl(e)){if(i=e.stateNode,n=e.memoizedProps,i[xi]=e,(o=i.nodeValue!==n)&&(t=zn,t!==null))switch(t.tag){case 3:ml(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ml(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[xi]=e,e.stateNode=i}return sn(e),null;case 13:if(wt(Pt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(At&&On!==null&&e.mode&1&&!(e.flags&128))i0(),_s(),e.flags|=98560,o=!1;else if(o=gl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(ue(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(ue(317));o[xi]=e}else _s(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;sn(e),o=!1}else li!==null&&(Ff(li),li=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Pt.current&1?jt===0&&(jt=3):gp())),e.updateQueue!==null&&(e.flags|=4),sn(e),null);case 4:return xs(),Cf(t,e),t===null&&Da(e.stateNode.containerInfo),sn(e),null;case 10:return Jh(e.type._context),sn(e),null;case 17:return An(e.type)&&bc(),sn(e),null;case 19:if(wt(Pt),o=e.memoizedState,o===null)return sn(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)Ys(o,!1);else{if(jt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Oc(t),s!==null){for(e.flags|=128,Ys(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return yt(Pt,Pt.current&1|2),e.child}t=t.sibling}o.tail!==null&&Ft()>Ms&&(e.flags|=128,i=!0,Ys(o,!1),e.lanes=4194304)}else{if(!i)if(t=Oc(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ys(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!At)return sn(e),null}else 2*Ft()-o.renderingStartTime>Ms&&n!==1073741824&&(e.flags|=128,i=!0,Ys(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Ft(),e.sibling=null,n=Pt.current,yt(Pt,i?n&1|2:n&1),e):(sn(e),null);case 22:case 23:return mp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Nn&1073741824&&(sn(e),e.subtreeFlags&6&&(e.flags|=8192)):sn(e),null;case 24:return null;case 25:return null}throw Error(ue(156,e.tag))}function OM(t,e){switch(qh(e),e.tag){case 1:return An(e.type)&&bc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return xs(),wt(Tn),wt(dn),rp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ip(e),null;case 13:if(wt(Pt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ue(340));_s()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return wt(Pt),null;case 4:return xs(),null;case 10:return Jh(e.type._context),null;case 22:case 23:return mp(),null;case 24:return null;default:return null}}var yl=!1,cn=!1,kM=typeof WeakSet=="function"?WeakSet:Set,Te=null;function es(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Ut(t,e,i)}else n.current=null}function Pf(t,e,n){try{n()}catch(i){Ut(t,e,i)}}var qm=!1;function zM(t,e){if(ff=Ac,t=W_(),$h(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,u=0,f=t,d=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=s+r),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===t)break t;if(d===n&&++c===r&&(a=s),d===o&&++u===i&&(l=s),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(hf={focusedElem:t,selectionRange:n},Ac=!1,Te=e;Te!==null;)if(e=Te,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Te=t;else for(;Te!==null;){e=Te;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,m=g.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?y:oi(e.type,y),m);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ue(163))}}catch(S){Ut(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Te=t;break}Te=e.return}return g=qm,qm=!1,g}function va(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&Pf(e,n,o)}r=r.next}while(r!==i)}}function hu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function bf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function B0(t){var e=t.alternate;e!==null&&(t.alternate=null,B0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[xi],delete e[Na],delete e[gf],delete e[SM],delete e[MM])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function H0(t){return t.tag===5||t.tag===3||t.tag===4}function Km(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||H0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Lf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Pc));else if(i!==4&&(t=t.child,t!==null))for(Lf(t,e,n),t=t.sibling;t!==null;)Lf(t,e,n),t=t.sibling}function Df(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Df(t,e,n),t=t.sibling;t!==null;)Df(t,e,n),t=t.sibling}var tn=null,si=!1;function Ji(t,e,n){for(n=n.child;n!==null;)V0(t,e,n),n=n.sibling}function V0(t,e,n){if(Ei&&typeof Ei.onCommitFiberUnmount=="function")try{Ei.onCommitFiberUnmount(ou,n)}catch{}switch(n.tag){case 5:cn||es(n,e);case 6:var i=tn,r=si;tn=null,Ji(t,e,n),tn=i,si=r,tn!==null&&(si?(t=tn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):tn.removeChild(n.stateNode));break;case 18:tn!==null&&(si?(t=tn,n=n.stateNode,t.nodeType===8?Qu(t.parentNode,n):t.nodeType===1&&Qu(t,n),Pa(t)):Qu(tn,n.stateNode));break;case 4:i=tn,r=si,tn=n.stateNode.containerInfo,si=!0,Ji(t,e,n),tn=i,si=r;break;case 0:case 11:case 14:case 15:if(!cn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Pf(n,e,s),r=r.next}while(r!==i)}Ji(t,e,n);break;case 1:if(!cn&&(es(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Ut(n,e,a)}Ji(t,e,n);break;case 21:Ji(t,e,n);break;case 22:n.mode&1?(cn=(i=cn)||n.memoizedState!==null,Ji(t,e,n),cn=i):Ji(t,e,n);break;default:Ji(t,e,n)}}function Zm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new kM),e.forEach(function(i){var r=YM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function ti(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:tn=a.stateNode,si=!1;break e;case 3:tn=a.stateNode.containerInfo,si=!0;break e;case 4:tn=a.stateNode.containerInfo,si=!0;break e}a=a.return}if(tn===null)throw Error(ue(160));V0(o,s,r),tn=null,si=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Ut(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)G0(e,t),e=e.sibling}function G0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ti(e,t),mi(t),i&4){try{va(3,t,t.return),hu(3,t)}catch(y){Ut(t,t.return,y)}try{va(5,t,t.return)}catch(y){Ut(t,t.return,y)}}break;case 1:ti(e,t),mi(t),i&512&&n!==null&&es(n,n.return);break;case 5:if(ti(e,t),mi(t),i&512&&n!==null&&es(n,n.return),t.flags&32){var r=t.stateNode;try{Ta(r,"")}catch(y){Ut(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&d_(r,o),tf(a,s);var c=tf(a,o);for(s=0;s<l.length;s+=2){var u=l[s],f=l[s+1];u==="style"?g_(r,f):u==="dangerouslySetInnerHTML"?p_(r,f):u==="children"?Ta(r,f):Nh(r,u,f,c)}switch(a){case"input":Kd(r,o);break;case"textarea":f_(r,o);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?ss(r,!!o.multiple,p,!1):d!==!!o.multiple&&(o.defaultValue!=null?ss(r,!!o.multiple,o.defaultValue,!0):ss(r,!!o.multiple,o.multiple?[]:"",!1))}r[Na]=o}catch(y){Ut(t,t.return,y)}}break;case 6:if(ti(e,t),mi(t),i&4){if(t.stateNode===null)throw Error(ue(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(y){Ut(t,t.return,y)}}break;case 3:if(ti(e,t),mi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Pa(e.containerInfo)}catch(y){Ut(t,t.return,y)}break;case 4:ti(e,t),mi(t);break;case 13:ti(e,t),mi(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(hp=Ft())),i&4&&Zm(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(cn=(c=cn)||u,ti(e,t),cn=c):ti(e,t),mi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Te=t,u=t.child;u!==null;){for(f=Te=u;Te!==null;){switch(d=Te,p=d.child,d.tag){case 0:case 11:case 14:case 15:va(4,d,d.return);break;case 1:es(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(y){Ut(i,n,y)}}break;case 5:es(d,d.return);break;case 22:if(d.memoizedState!==null){Jm(f);continue}}p!==null?(p.return=d,Te=p):Jm(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=m_("display",s))}catch(y){Ut(t,t.return,y)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(y){Ut(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ti(e,t),mi(t),i&4&&Zm(t);break;case 21:break;default:ti(e,t),mi(t)}}function mi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(H0(n)){var i=n;break e}n=n.return}throw Error(ue(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ta(r,""),i.flags&=-33);var o=Km(t);Df(t,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=Km(t);Lf(t,a,s);break;default:throw Error(ue(161))}}catch(l){Ut(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function BM(t,e,n){Te=t,W0(t)}function W0(t,e,n){for(var i=(t.mode&1)!==0;Te!==null;){var r=Te,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||yl;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||cn;a=yl;var c=cn;if(yl=s,(cn=l)&&!c)for(Te=r;Te!==null;)s=Te,l=s.child,s.tag===22&&s.memoizedState!==null?eg(r):l!==null?(l.return=s,Te=l):eg(r);for(;o!==null;)Te=o,W0(o),o=o.sibling;Te=r,yl=a,cn=c}Qm(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,Te=o):Qm(t)}}function Qm(t){for(;Te!==null;){var e=Te;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:cn||hu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!cn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:oi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Fm(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Fm(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&Pa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ue(163))}cn||e.flags&512&&bf(e)}catch(d){Ut(e,e.return,d)}}if(e===t){Te=null;break}if(n=e.sibling,n!==null){n.return=e.return,Te=n;break}Te=e.return}}function Jm(t){for(;Te!==null;){var e=Te;if(e===t){Te=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Te=n;break}Te=e.return}}function eg(t){for(;Te!==null;){var e=Te;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{hu(4,e)}catch(l){Ut(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ut(e,r,l)}}var o=e.return;try{bf(e)}catch(l){Ut(e,o,l)}break;case 5:var s=e.return;try{bf(e)}catch(l){Ut(e,s,l)}}}catch(l){Ut(e,e.return,l)}if(e===t){Te=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Te=a;break}Te=e.return}}var HM=Math.ceil,Bc=Zi.ReactCurrentDispatcher,dp=Zi.ReactCurrentOwner,Kn=Zi.ReactCurrentBatchConfig,at=0,en=null,Bt=null,nn=0,Nn=0,ts=Nr(0),jt=0,Ba=null,uo=0,pu=0,fp=0,_a=null,Mn=null,hp=0,Ms=1/0,Ii=null,Hc=!1,If=null,Er=null,xl=!1,gr=null,Vc=0,ya=0,Nf=null,sc=-1,ac=0;function gn(){return at&6?Ft():sc!==-1?sc:sc=Ft()}function wr(t){return t.mode&1?at&2&&nn!==0?nn&-nn:wM.transition!==null?(ac===0&&(ac=C_()),ac):(t=pt,t!==0||(t=window.event,t=t===void 0?16:U_(t.type)),t):1}function fi(t,e,n,i){if(50<ya)throw ya=0,Nf=null,Error(ue(185));Ya(t,n,i),(!(at&2)||t!==en)&&(t===en&&(!(at&2)&&(pu|=n),jt===4&&fr(t,nn)),Rn(t,i),n===1&&at===0&&!(e.mode&1)&&(Ms=Ft()+500,uu&&Ur()))}function Rn(t,e){var n=t.callbackNode;wS(t,e);var i=Tc(t,t===en?nn:0);if(i===0)n!==null&&cm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&cm(n),e===1)t.tag===0?EM(tg.bind(null,t)):e0(tg.bind(null,t)),yM(function(){!(at&6)&&Ur()}),n=null;else{switch(P_(i)){case 1:n=zh;break;case 4:n=A_;break;case 16:n=wc;break;case 536870912:n=R_;break;default:n=wc}n=Q0(n,j0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function j0(t,e){if(sc=-1,ac=0,at&6)throw Error(ue(327));var n=t.callbackNode;if(ds()&&t.callbackNode!==n)return null;var i=Tc(t,t===en?nn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Gc(t,i);else{e=i;var r=at;at|=2;var o=$0();(en!==t||nn!==e)&&(Ii=null,Ms=Ft()+500,io(t,e));do try{WM();break}catch(a){X0(t,a)}while(!0);Qh(),Bc.current=o,at=r,Bt!==null?e=0:(en=null,nn=0,e=jt)}if(e!==0){if(e===2&&(r=af(t),r!==0&&(i=r,e=Uf(t,r))),e===1)throw n=Ba,io(t,0),fr(t,i),Rn(t,Ft()),n;if(e===6)fr(t,i);else{if(r=t.current.alternate,!(i&30)&&!VM(r)&&(e=Gc(t,i),e===2&&(o=af(t),o!==0&&(i=o,e=Uf(t,o))),e===1))throw n=Ba,io(t,0),fr(t,i),Rn(t,Ft()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ue(345));case 2:Xr(t,Mn,Ii);break;case 3:if(fr(t,i),(i&130023424)===i&&(e=hp+500-Ft(),10<e)){if(Tc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){gn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=mf(Xr.bind(null,t,Mn,Ii),e);break}Xr(t,Mn,Ii);break;case 4:if(fr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-di(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=Ft()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*HM(i/1960))-i,10<i){t.timeoutHandle=mf(Xr.bind(null,t,Mn,Ii),i);break}Xr(t,Mn,Ii);break;case 5:Xr(t,Mn,Ii);break;default:throw Error(ue(329))}}}return Rn(t,Ft()),t.callbackNode===n?j0.bind(null,t):null}function Uf(t,e){var n=_a;return t.current.memoizedState.isDehydrated&&(io(t,e).flags|=256),t=Gc(t,e),t!==2&&(e=Mn,Mn=n,e!==null&&Ff(e)),t}function Ff(t){Mn===null?Mn=t:Mn.push.apply(Mn,t)}function VM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!pi(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function fr(t,e){for(e&=~fp,e&=~pu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-di(e),i=1<<n;t[n]=-1,e&=~i}}function tg(t){if(at&6)throw Error(ue(327));ds();var e=Tc(t,0);if(!(e&1))return Rn(t,Ft()),null;var n=Gc(t,e);if(t.tag!==0&&n===2){var i=af(t);i!==0&&(e=i,n=Uf(t,i))}if(n===1)throw n=Ba,io(t,0),fr(t,e),Rn(t,Ft()),n;if(n===6)throw Error(ue(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Xr(t,Mn,Ii),Rn(t,Ft()),null}function pp(t,e){var n=at;at|=1;try{return t(e)}finally{at=n,at===0&&(Ms=Ft()+500,uu&&Ur())}}function fo(t){gr!==null&&gr.tag===0&&!(at&6)&&ds();var e=at;at|=1;var n=Kn.transition,i=pt;try{if(Kn.transition=null,pt=1,t)return t()}finally{pt=i,Kn.transition=n,at=e,!(at&6)&&Ur()}}function mp(){Nn=ts.current,wt(ts)}function io(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,_M(n)),Bt!==null)for(n=Bt.return;n!==null;){var i=n;switch(qh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&bc();break;case 3:xs(),wt(Tn),wt(dn),rp();break;case 5:ip(i);break;case 4:xs();break;case 13:wt(Pt);break;case 19:wt(Pt);break;case 10:Jh(i.type._context);break;case 22:case 23:mp()}n=n.return}if(en=t,Bt=t=Tr(t.current,null),nn=Nn=e,jt=0,Ba=null,fp=pu=uo=0,Mn=_a=null,Qr!==null){for(e=0;e<Qr.length;e++)if(n=Qr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}Qr=null}return t}function X0(t,e){do{var n=Bt;try{if(Qh(),ic.current=zc,kc){for(var i=bt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}kc=!1}if(co=0,Kt=Wt=bt=null,ga=!1,Oa=0,dp.current=null,n===null||n.return===null){jt=1,Ba=e,Bt=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=nn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Vm(s);if(p!==null){p.flags&=-257,Gm(p,s,a,o,e),p.mode&1&&Hm(o,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var y=new Set;y.add(l),e.updateQueue=y}else g.add(l);break e}else{if(!(e&1)){Hm(o,c,e),gp();break e}l=Error(ue(426))}}else if(At&&a.mode&1){var m=Vm(s);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Gm(m,s,a,o,e),Kh(Ss(l,a));break e}}o=l=Ss(l,a),jt!==4&&(jt=2),_a===null?_a=[o]:_a.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var h=P0(o,l,e);Um(o,h);break e;case 1:a=l;var v=o.type,_=o.stateNode;if(!(o.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Er===null||!Er.has(_)))){o.flags|=65536,e&=-e,o.lanes|=e;var S=b0(o,a,e);Um(o,S);break e}}o=o.return}while(o!==null)}q0(n)}catch(C){e=C,Bt===n&&n!==null&&(Bt=n=n.return);continue}break}while(!0)}function $0(){var t=Bc.current;return Bc.current=zc,t===null?zc:t}function gp(){(jt===0||jt===3||jt===2)&&(jt=4),en===null||!(uo&268435455)&&!(pu&268435455)||fr(en,nn)}function Gc(t,e){var n=at;at|=2;var i=$0();(en!==t||nn!==e)&&(Ii=null,io(t,e));do try{GM();break}catch(r){X0(t,r)}while(!0);if(Qh(),at=n,Bc.current=i,Bt!==null)throw Error(ue(261));return en=null,nn=0,jt}function GM(){for(;Bt!==null;)Y0(Bt)}function WM(){for(;Bt!==null&&!mS();)Y0(Bt)}function Y0(t){var e=Z0(t.alternate,t,Nn);t.memoizedProps=t.pendingProps,e===null?q0(t):Bt=e,dp.current=null}function q0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=OM(n,e),n!==null){n.flags&=32767,Bt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{jt=6,Bt=null;return}}else if(n=FM(n,e,Nn),n!==null){Bt=n;return}if(e=e.sibling,e!==null){Bt=e;return}Bt=e=t}while(e!==null);jt===0&&(jt=5)}function Xr(t,e,n){var i=pt,r=Kn.transition;try{Kn.transition=null,pt=1,jM(t,e,n,i)}finally{Kn.transition=r,pt=i}return null}function jM(t,e,n,i){do ds();while(gr!==null);if(at&6)throw Error(ue(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ue(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(TS(t,o),t===en&&(Bt=en=null,nn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xl||(xl=!0,Q0(wc,function(){return ds(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Kn.transition,Kn.transition=null;var s=pt;pt=1;var a=at;at|=4,dp.current=null,zM(t,n),G0(n,t),dM(hf),Ac=!!ff,hf=ff=null,t.current=n,BM(n),gS(),at=a,pt=s,Kn.transition=o}else t.current=n;if(xl&&(xl=!1,gr=t,Vc=r),o=t.pendingLanes,o===0&&(Er=null),yS(n.stateNode),Rn(t,Ft()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Hc)throw Hc=!1,t=If,If=null,t;return Vc&1&&t.tag!==0&&ds(),o=t.pendingLanes,o&1?t===Nf?ya++:(ya=0,Nf=t):ya=0,Ur(),null}function ds(){if(gr!==null){var t=P_(Vc),e=Kn.transition,n=pt;try{if(Kn.transition=null,pt=16>t?16:t,gr===null)var i=!1;else{if(t=gr,gr=null,Vc=0,at&6)throw Error(ue(331));var r=at;for(at|=4,Te=t.current;Te!==null;){var o=Te,s=o.child;if(Te.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Te=c;Te!==null;){var u=Te;switch(u.tag){case 0:case 11:case 15:va(8,u,o)}var f=u.child;if(f!==null)f.return=u,Te=f;else for(;Te!==null;){u=Te;var d=u.sibling,p=u.return;if(B0(u),u===c){Te=null;break}if(d!==null){d.return=p,Te=d;break}Te=p}}}var g=o.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}Te=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,Te=s;else e:for(;Te!==null;){if(o=Te,o.flags&2048)switch(o.tag){case 0:case 11:case 15:va(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,Te=h;break e}Te=o.return}}var v=t.current;for(Te=v;Te!==null;){s=Te;var _=s.child;if(s.subtreeFlags&2064&&_!==null)_.return=s,Te=_;else e:for(s=v;Te!==null;){if(a=Te,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:hu(9,a)}}catch(C){Ut(a,a.return,C)}if(a===s){Te=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Te=S;break e}Te=a.return}}if(at=r,Ur(),Ei&&typeof Ei.onPostCommitFiberRoot=="function")try{Ei.onPostCommitFiberRoot(ou,t)}catch{}i=!0}return i}finally{pt=n,Kn.transition=e}}return!1}function ng(t,e,n){e=Ss(n,e),e=P0(t,e,1),t=Mr(t,e,1),e=gn(),t!==null&&(Ya(t,1,e),Rn(t,e))}function Ut(t,e,n){if(t.tag===3)ng(t,t,n);else for(;e!==null;){if(e.tag===3){ng(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Er===null||!Er.has(i))){t=Ss(n,t),t=b0(e,t,1),e=Mr(e,t,1),t=gn(),e!==null&&(Ya(e,1,t),Rn(e,t));break}}e=e.return}}function XM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=gn(),t.pingedLanes|=t.suspendedLanes&n,en===t&&(nn&n)===n&&(jt===4||jt===3&&(nn&130023424)===nn&&500>Ft()-hp?io(t,0):fp|=n),Rn(t,e)}function K0(t,e){e===0&&(t.mode&1?(e=ul,ul<<=1,!(ul&130023424)&&(ul=4194304)):e=1);var n=gn();t=$i(t,e),t!==null&&(Ya(t,e,n),Rn(t,n))}function $M(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),K0(t,n)}function YM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ue(314))}i!==null&&i.delete(e),K0(t,n)}var Z0;Z0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Tn.current)En=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return En=!1,UM(t,e,n);En=!!(t.flags&131072)}else En=!1,At&&e.flags&1048576&&t0(e,Ic,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;oc(t,e),t=e.pendingProps;var r=vs(e,dn.current);us(e,n),r=sp(null,e,i,t,r,n);var o=ap();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,An(i)?(o=!0,Lc(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,tp(e),r.updater=fu,e.stateNode=r,r._reactInternals=e,Mf(e,i,t,n),e=Tf(null,e,i,!0,o,n)):(e.tag=0,At&&o&&Yh(e),mn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(oc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=KM(i),t=oi(i,t),r){case 0:e=wf(null,e,i,t,n);break e;case 1:e=Xm(null,e,i,t,n);break e;case 11:e=Wm(null,e,i,t,n);break e;case 14:e=jm(null,e,i,oi(i.type,t),n);break e}throw Error(ue(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),wf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),Xm(t,e,i,r,n);case 3:e:{if(N0(e),t===null)throw Error(ue(387));i=e.pendingProps,o=e.memoizedState,r=o.element,a0(t,e),Fc(e,i,null,n);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=Ss(Error(ue(423)),e),e=$m(t,e,i,n,r);break e}else if(i!==r){r=Ss(Error(ue(424)),e),e=$m(t,e,i,n,r);break e}else for(On=Sr(e.stateNode.containerInfo.firstChild),zn=e,At=!0,li=null,n=o0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_s(),i===r){e=Yi(t,e,n);break e}mn(t,e,i,n)}e=e.child}return e;case 5:return l0(e),t===null&&yf(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,pf(i,r)?s=null:o!==null&&pf(i,o)&&(e.flags|=32),I0(t,e),mn(t,e,s,n),e.child;case 6:return t===null&&yf(e),null;case 13:return U0(t,e,n);case 4:return np(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ys(e,null,i,n):mn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),Wm(t,e,i,r,n);case 7:return mn(t,e,e.pendingProps,n),e.child;case 8:return mn(t,e,e.pendingProps.children,n),e.child;case 12:return mn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,yt(Nc,i._currentValue),i._currentValue=s,o!==null)if(pi(o.value,s)){if(o.children===r.children&&!Tn.current){e=Yi(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=Hi(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),xf(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(ue(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),xf(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}mn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,us(e,n),r=Zn(r),i=i(r),e.flags|=1,mn(t,e,i,n),e.child;case 14:return i=e.type,r=oi(i,e.pendingProps),r=oi(i.type,r),jm(t,e,i,r,n);case 15:return L0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),oc(t,e),e.tag=1,An(i)?(t=!0,Lc(e)):t=!1,us(e,n),C0(e,i,r),Mf(e,i,r,n),Tf(null,e,i,!0,t,n);case 19:return F0(t,e,n);case 22:return D0(t,e,n)}throw Error(ue(156,e.tag))};function Q0(t,e){return T_(t,e)}function qM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,e,n,i){return new qM(t,e,n,i)}function vp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function KM(t){if(typeof t=="function")return vp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Fh)return 11;if(t===Oh)return 14}return 2}function Tr(t,e){var n=t.alternate;return n===null?(n=qn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function lc(t,e,n,i,r,o){var s=2;if(i=t,typeof t=="function")vp(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case jo:return ro(n.children,r,o,e);case Uh:s=8,r|=8;break;case jd:return t=qn(12,n,e,r|2),t.elementType=jd,t.lanes=o,t;case Xd:return t=qn(13,n,e,r),t.elementType=Xd,t.lanes=o,t;case $d:return t=qn(19,n,e,r),t.elementType=$d,t.lanes=o,t;case l_:return mu(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case s_:s=10;break e;case a_:s=9;break e;case Fh:s=11;break e;case Oh:s=14;break e;case lr:s=16,i=null;break e}throw Error(ue(130,t==null?t:typeof t,""))}return e=qn(s,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function ro(t,e,n,i){return t=qn(7,t,i,e),t.lanes=n,t}function mu(t,e,n,i){return t=qn(22,t,i,e),t.elementType=l_,t.lanes=n,t.stateNode={isHidden:!1},t}function sd(t,e,n){return t=qn(6,t,null,e),t.lanes=n,t}function ad(t,e,n){return e=qn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ZM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hu(0),this.expirationTimes=Hu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function _p(t,e,n,i,r,o,s,a,l){return t=new ZM(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=qn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},tp(o),t}function QM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wo,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function J0(t){if(!t)return br;t=t._reactInternals;e:{if(vo(t)!==t||t.tag!==1)throw Error(ue(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(An(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ue(171))}if(t.tag===1){var n=t.type;if(An(n))return J_(t,n,e)}return e}function ey(t,e,n,i,r,o,s,a,l){return t=_p(n,i,!0,t,r,o,s,a,l),t.context=J0(null),n=t.current,i=gn(),r=wr(n),o=Hi(i,r),o.callback=e??null,Mr(n,o,r),t.current.lanes=r,Ya(t,r,i),Rn(t,i),t}function gu(t,e,n,i){var r=e.current,o=gn(),s=wr(r);return n=J0(n),e.context===null?e.context=n:e.pendingContext=n,e=Hi(o,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Mr(r,e,s),t!==null&&(fi(t,r,s,o),nc(t,r,s)),s}function Wc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ig(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function yp(t,e){ig(t,e),(t=t.alternate)&&ig(t,e)}function JM(){return null}var ty=typeof reportError=="function"?reportError:function(t){console.error(t)};function xp(t){this._internalRoot=t}vu.prototype.render=xp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ue(409));gu(t,e,null,null)};vu.prototype.unmount=xp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;fo(function(){gu(null,t,null,null)}),e[Xi]=null}};function vu(t){this._internalRoot=t}vu.prototype.unstable_scheduleHydration=function(t){if(t){var e=D_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<dr.length&&e!==0&&e<dr[n].priority;n++);dr.splice(n,0,t),n===0&&N_(t)}};function Sp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function _u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function rg(){}function eE(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var c=Wc(s);o.call(c)}}var s=ey(e,i,t,0,null,!1,!1,"",rg);return t._reactRootContainer=s,t[Xi]=s.current,Da(t.nodeType===8?t.parentNode:t),fo(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Wc(l);a.call(c)}}var l=_p(t,0,!1,null,null,!1,!1,"",rg);return t._reactRootContainer=l,t[Xi]=l.current,Da(t.nodeType===8?t.parentNode:t),fo(function(){gu(e,l,n,i)}),l}function yu(t,e,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=Wc(s);a.call(l)}}gu(e,s,t,r)}else s=eE(n,e,t,r,i);return Wc(s)}b_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=sa(e.pendingLanes);n!==0&&(Bh(e,n|1),Rn(e,Ft()),!(at&6)&&(Ms=Ft()+500,Ur()))}break;case 13:fo(function(){var i=$i(t,1);if(i!==null){var r=gn();fi(i,t,1,r)}}),yp(t,1)}};Hh=function(t){if(t.tag===13){var e=$i(t,134217728);if(e!==null){var n=gn();fi(e,t,134217728,n)}yp(t,134217728)}};L_=function(t){if(t.tag===13){var e=wr(t),n=$i(t,e);if(n!==null){var i=gn();fi(n,t,e,i)}yp(t,e)}};D_=function(){return pt};I_=function(t,e){var n=pt;try{return pt=t,e()}finally{pt=n}};rf=function(t,e,n){switch(e){case"input":if(Kd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=cu(i);if(!r)throw Error(ue(90));u_(i),Kd(i,r)}}}break;case"textarea":f_(t,n);break;case"select":e=n.value,e!=null&&ss(t,!!n.multiple,e,!1)}};y_=pp;x_=fo;var tE={usingClientEntryPoint:!1,Events:[Ka,qo,cu,v_,__,pp]},qs={findFiberByHostInstance:Zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nE={bundleType:qs.bundleType,version:qs.version,rendererPackageName:qs.rendererPackageName,rendererConfig:qs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Zi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=E_(t),t===null?null:t.stateNode},findFiberByHostInstance:qs.findFiberByHostInstance||JM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sl.isDisabled&&Sl.supportsFiber)try{ou=Sl.inject(nE),Ei=Sl}catch{}}Vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tE;Vn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sp(e))throw Error(ue(200));return QM(t,e,null,n)};Vn.createRoot=function(t,e){if(!Sp(t))throw Error(ue(299));var n=!1,i="",r=ty;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=_p(t,1,!1,null,null,n,!1,i,r),t[Xi]=e.current,Da(t.nodeType===8?t.parentNode:t),new xp(e)};Vn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ue(188)):(t=Object.keys(t).join(","),Error(ue(268,t)));return t=E_(e),t=t===null?null:t.stateNode,t};Vn.flushSync=function(t){return fo(t)};Vn.hydrate=function(t,e,n){if(!_u(e))throw Error(ue(200));return yu(null,t,e,!0,n)};Vn.hydrateRoot=function(t,e,n){if(!Sp(t))throw Error(ue(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=ty;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=ey(e,null,t,1,n??null,r,!1,o,s),t[Xi]=e.current,Da(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new vu(e)};Vn.render=function(t,e,n){if(!_u(e))throw Error(ue(200));return yu(null,t,e,!1,n)};Vn.unmountComponentAtNode=function(t){if(!_u(t))throw Error(ue(40));return t._reactRootContainer?(fo(function(){yu(null,null,t,!1,function(){t._reactRootContainer=null,t[Xi]=null})}),!0):!1};Vn.unstable_batchedUpdates=pp;Vn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!_u(n))throw Error(ue(200));if(t==null||t._reactInternals===void 0)throw Error(ue(38));return yu(t,e,n,!1,i)};Vn.version="18.3.1-next-f1338f8080-20240426";function ny(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ny)}catch(t){console.error(t)}}ny(),n_.exports=Vn;var Mp=n_.exports;const iE=Rh(Mp),rE=Wv({__proto__:null,default:iE},[Mp]);var iy,og=Mp;iy=og.createRoot,og.hydrateRoot;/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ct(){return Ct=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ct.apply(this,arguments)}var kt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(kt||(kt={}));const sg="popstate";function oE(t){t===void 0&&(t={});function e(i,r){let{pathname:o,search:s,hash:a}=i.location;return Ha("",{pathname:o,search:s,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:ho(r)}return aE(e,n,null,t)}function nt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Es(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function sE(){return Math.random().toString(36).substr(2,8)}function ag(t,e){return{usr:t.state,key:t.key,idx:e}}function Ha(t,e,n,i){return n===void 0&&(n=null),Ct({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Fr(e):e,{state:n,key:e&&e.key||i||sE()})}function ho(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Fr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function aE(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:o=!1}=i,s=r.history,a=kt.Pop,l=null,c=u();c==null&&(c=0,s.replaceState(Ct({},s.state,{idx:c}),""));function u(){return(s.state||{idx:null}).idx}function f(){a=kt.Pop;let m=u(),h=m==null?null:m-c;c=m,l&&l({action:a,location:y.location,delta:h})}function d(m,h){a=kt.Push;let v=Ha(y.location,m,h);c=u()+1;let _=ag(v,c),S=y.createHref(v);try{s.pushState(_,"",S)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;r.location.assign(S)}o&&l&&l({action:a,location:y.location,delta:1})}function p(m,h){a=kt.Replace;let v=Ha(y.location,m,h);c=u();let _=ag(v,c),S=y.createHref(v);s.replaceState(_,"",S),o&&l&&l({action:a,location:y.location,delta:0})}function g(m){let h=r.location.origin!=="null"?r.location.origin:r.location.href,v=typeof m=="string"?m:ho(m);return v=v.replace(/ $/,"%20"),nt(h,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,h)}let y={get action(){return a},get location(){return t(r,s)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(sg,f),l=m,()=>{r.removeEventListener(sg,f),l=null}},createHref(m){return e(r,m)},createURL:g,encodeLocation(m){let h=g(m);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:d,replace:p,go(m){return s.go(m)}};return y}var mt;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(mt||(mt={}));const lE=new Set(["lazy","caseSensitive","path","id","index","children"]);function cE(t){return t.index===!0}function Va(t,e,n,i){return n===void 0&&(n=[]),i===void 0&&(i={}),t.map((r,o)=>{let s=[...n,String(o)],a=typeof r.id=="string"?r.id:s.join("-");if(nt(r.index!==!0||!r.children,"Cannot specify children on an index route"),nt(!i[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),cE(r)){let l=Ct({},r,e(r),{id:a});return i[a]=l,l}else{let l=Ct({},r,e(r),{id:a,children:void 0});return i[a]=l,r.children&&(l.children=Va(r.children,e,s,i)),l}})}function Yr(t,e,n){return n===void 0&&(n="/"),cc(t,e,n,!1)}function cc(t,e,n,i){let r=typeof e=="string"?Fr(e):e,o=Os(r.pathname||"/",n);if(o==null)return null;let s=ry(t);dE(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let c=ME(o);a=xE(s[l],c,i)}return a}function uE(t,e){let{route:n,pathname:i,params:r}=t;return{id:n.id,pathname:i,params:r,data:e[n.id],handle:n.handle}}function ry(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(nt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=Vi([i,l.relativePath]),u=n.concat(l);o.children&&o.children.length>0&&(nt(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),ry(o.children,e,u,c)),!(o.path==null&&!o.index)&&e.push({path:c,score:_E(c,o.index),routesMeta:u})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))r(o,s);else for(let l of oy(o.path))r(o,s,l)}),e}function oy(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),o=n.replace(/\?$/,"");if(i.length===0)return r?[o,""]:[o];let s=oy(i.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),r&&a.push(...s),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function dE(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:yE(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const fE=/^:[\w-]+$/,hE=3,pE=2,mE=1,gE=10,vE=-2,lg=t=>t==="*";function _E(t,e){let n=t.split("/"),i=n.length;return n.some(lg)&&(i+=vE),e&&(i+=pE),n.filter(r=>!lg(r)).reduce((r,o)=>r+(fE.test(o)?hE:o===""?mE:gE),i)}function yE(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function xE(t,e,n){n===void 0&&(n=!1);let{routesMeta:i}=t,r={},o="/",s=[];for(let a=0;a<i.length;++a){let l=i[a],c=a===i.length-1,u=o==="/"?e:e.slice(o.length)||"/",f=cg({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),d=l.route;if(!f&&c&&n&&!i[i.length-1].route.index&&(f=cg({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},u)),!f)return null;Object.assign(r,f.params),s.push({params:r,pathname:Vi([o,f.pathname]),pathnameBase:TE(Vi([o,f.pathnameBase])),route:d}),f.pathnameBase!=="/"&&(o=Vi([o,f.pathnameBase]))}return s}function cg(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=SE(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let o=r[0],s=o.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((c,u,f)=>{let{paramName:d,isOptional:p}=u;if(d==="*"){let y=a[f]||"";s=o.slice(0,o.length-y.length).replace(/(.)\/+$/,"$1")}const g=a[f];return p&&!g?c[d]=void 0:c[d]=(g||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:s,pattern:t}}function SE(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Es(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function ME(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Es(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Os(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function EE(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?Fr(t):t;return{pathname:n?n.startsWith("/")?n:wE(n,e):e,search:AE(i),hash:RE(r)}}function wE(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function ld(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function sy(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Ep(t,e){let n=sy(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function wp(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=Fr(t):(r=Ct({},t),nt(!r.pathname||!r.pathname.includes("?"),ld("?","pathname","search",r)),nt(!r.pathname||!r.pathname.includes("#"),ld("#","pathname","hash",r)),nt(!r.search||!r.search.includes("#"),ld("#","search","hash",r)));let o=t===""||r.pathname==="",s=o?"/":r.pathname,a;if(s==null)a=n;else{let f=e.length-1;if(!i&&s.startsWith("..")){let d=s.split("/");for(;d[0]==="..";)d.shift(),f-=1;r.pathname=d.join("/")}a=f>=0?e[f]:"/"}let l=EE(r,a),c=s&&s!=="/"&&s.endsWith("/"),u=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const Vi=t=>t.join("/").replace(/\/\/+/g,"/"),TE=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),AE=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,RE=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class jc{constructor(e,n,i,r){r===void 0&&(r=!1),this.status=e,this.statusText=n||"",this.internal=r,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}}function xu(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const ay=["post","put","patch","delete"],CE=new Set(ay),PE=["get",...ay],bE=new Set(PE),LE=new Set([301,302,303,307,308]),DE=new Set([307,308]),cd={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},IE={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Ks={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Tp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,NE=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),ly="remix-router-transitions";function UE(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",i=!n;nt(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let r;if(t.mapRouteProperties)r=t.mapRouteProperties;else if(t.detectErrorBoundary){let I=t.detectErrorBoundary;r=O=>({hasErrorBoundary:I(O)})}else r=NE;let o={},s=Va(t.routes,r,void 0,o),a,l=t.basename||"/",c=t.unstable_dataStrategy||HE,u=t.unstable_patchRoutesOnNavigation,f=Ct({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},t.future),d=null,p=new Set,g=1e3,y=new Set,m=null,h=null,v=null,_=t.hydrationData!=null,S=Yr(s,t.history.location,l),C=null;if(S==null&&!u){let I=pn(404,{pathname:t.history.location.pathname}),{matches:O,route:W}=_g(s);S=O,C={[W.id]:I}}S&&!t.hydrationData&&kr(S,s,t.history.location.pathname).active&&(S=null);let A;if(S)if(S.some(I=>I.route.lazy))A=!1;else if(!S.some(I=>I.route.loader))A=!0;else if(f.v7_partialHydration){let I=t.hydrationData?t.hydrationData.loaderData:null,O=t.hydrationData?t.hydrationData.errors:null,W=ne=>ne.route.loader?typeof ne.route.loader=="function"&&ne.route.loader.hydrate===!0?!1:I&&I[ne.route.id]!==void 0||O&&O[ne.route.id]!==void 0:!0;if(O){let ne=S.findIndex(Me=>O[Me.route.id]!==void 0);A=S.slice(0,ne+1).every(W)}else A=S.every(W)}else A=t.hydrationData!=null;else if(A=!1,S=[],f.v7_partialHydration){let I=kr(null,s,t.history.location.pathname);I.active&&I.matches&&(S=I.matches)}let R,E={historyAction:t.history.action,location:t.history.location,matches:S,initialized:A,navigation:cd,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||C,fetchers:new Map,blockers:new Map},T=kt.Pop,x=!1,b,H=!1,B=new Map,V=null,K=!1,$=!1,oe=[],F=new Set,X=new Map,Q=0,de=-1,Ee=new Map,We=new Set,q=new Map,ae=new Map,he=new Set,pe=new Map,Ce=new Map,Oe=new Map,je;function ft(){if(d=t.history.listen(I=>{let{action:O,location:W,delta:ne}=I;if(je){je(),je=void 0;return}Es(Ce.size===0||ne!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let Me=me({currentLocation:E.location,nextLocation:W,historyAction:O});if(Me&&ne!=null){let De=new Promise(Ge=>{je=Ge});t.history.go(ne*-1),ee(Me,{state:"blocked",location:W,proceed(){ee(Me,{state:"proceeding",proceed:void 0,reset:void 0,location:W}),De.then(()=>t.history.go(ne))},reset(){let Ge=new Map(E.blockers);Ge.set(Me,Ks),Xe({blockers:Ge})}});return}return ke(O,W)}),n){n1(e,B);let I=()=>i1(e,B);e.addEventListener("pagehide",I),V=()=>e.removeEventListener("pagehide",I)}return E.initialized||ke(kt.Pop,E.location,{initialHydration:!0}),R}function D(){d&&d(),V&&V(),p.clear(),b&&b.abort(),E.fetchers.forEach((I,O)=>He(O)),E.blockers.forEach((I,O)=>J(O))}function Dt(I){return p.add(I),()=>p.delete(I)}function Xe(I,O){O===void 0&&(O={}),E=Ct({},E,I);let W=[],ne=[];f.v7_fetcherPersist&&E.fetchers.forEach((Me,De)=>{Me.state==="idle"&&(he.has(De)?ne.push(De):W.push(De))}),[...p].forEach(Me=>Me(E,{deletedFetchers:ne,unstable_viewTransitionOpts:O.viewTransitionOpts,unstable_flushSync:O.flushSync===!0})),f.v7_fetcherPersist&&(W.forEach(Me=>E.fetchers.delete(Me)),ne.forEach(Me=>He(Me)))}function rt(I,O,W){var ne,Me;let{flushSync:De}=W===void 0?{}:W,Ge=E.actionData!=null&&E.navigation.formMethod!=null&&ai(E.navigation.formMethod)&&E.navigation.state==="loading"&&((ne=I.state)==null?void 0:ne._isRedirect)!==!0,ye;O.actionData?Object.keys(O.actionData).length>0?ye=O.actionData:ye=null:Ge?ye=E.actionData:ye=null;let M=O.loaderData?gg(E.loaderData,O.loaderData,O.matches||[],O.errors):E.loaderData,P=E.blockers;P.size>0&&(P=new Map(P),P.forEach((U,te)=>P.set(te,Ks)));let N=x===!0||E.navigation.formMethod!=null&&ai(E.navigation.formMethod)&&((Me=I.state)==null?void 0:Me._isRedirect)!==!0;a&&(s=a,a=void 0),K||T===kt.Pop||(T===kt.Push?t.history.push(I,I.state):T===kt.Replace&&t.history.replace(I,I.state));let z;if(T===kt.Pop){let U=B.get(E.location.pathname);U&&U.has(I.pathname)?z={currentLocation:E.location,nextLocation:I}:B.has(I.pathname)&&(z={currentLocation:I,nextLocation:E.location})}else if(H){let U=B.get(E.location.pathname);U?U.add(I.pathname):(U=new Set([I.pathname]),B.set(E.location.pathname,U)),z={currentLocation:E.location,nextLocation:I}}Xe(Ct({},O,{actionData:ye,loaderData:M,historyAction:T,location:I,initialized:!0,navigation:cd,revalidation:"idle",restoreScrollPosition:bn(I,O.matches||E.matches),preventScrollReset:N,blockers:P}),{viewTransitionOpts:z,flushSync:De===!0}),T=kt.Pop,x=!1,H=!1,K=!1,$=!1,oe=[]}async function Ie(I,O){if(typeof I=="number"){t.history.go(I);return}let W=Of(E.location,E.matches,l,f.v7_prependBasename,I,f.v7_relativeSplatPath,O==null?void 0:O.fromRouteId,O==null?void 0:O.relative),{path:ne,submission:Me,error:De}=ug(f.v7_normalizeFormMethod,!1,W,O),Ge=E.location,ye=Ha(E.location,ne,O&&O.state);ye=Ct({},ye,t.history.encodeLocation(ye));let M=O&&O.replace!=null?O.replace:void 0,P=kt.Push;M===!0?P=kt.Replace:M===!1||Me!=null&&ai(Me.formMethod)&&Me.formAction===E.location.pathname+E.location.search&&(P=kt.Replace);let N=O&&"preventScrollReset"in O?O.preventScrollReset===!0:void 0,z=(O&&O.unstable_flushSync)===!0,U=me({currentLocation:Ge,nextLocation:ye,historyAction:P});if(U){ee(U,{state:"blocked",location:ye,proceed(){ee(U,{state:"proceeding",proceed:void 0,reset:void 0,location:ye}),Ie(I,O)},reset(){let te=new Map(E.blockers);te.set(U,Ks),Xe({blockers:te})}});return}return await ke(P,ye,{submission:Me,pendingError:De,preventScrollReset:N,replace:O&&O.replace,enableViewTransition:O&&O.unstable_viewTransition,flushSync:z})}function It(){if(Ye(),Xe({revalidation:"loading"}),E.navigation.state!=="submitting"){if(E.navigation.state==="idle"){ke(E.historyAction,E.location,{startUninterruptedRevalidation:!0});return}ke(T||E.historyAction,E.navigation.location,{overrideNavigation:E.navigation,enableViewTransition:H===!0})}}async function ke(I,O,W){b&&b.abort(),b=null,T=I,K=(W&&W.startUninterruptedRevalidation)===!0,ei(E.location,E.matches),x=(W&&W.preventScrollReset)===!0,H=(W&&W.enableViewTransition)===!0;let ne=a||s,Me=W&&W.overrideNavigation,De=Yr(ne,O,l),Ge=(W&&W.flushSync)===!0,ye=kr(De,ne,O.pathname);if(ye.active&&ye.matches&&(De=ye.matches),!De){let{error:se,notFoundMatches:ve,route:ge}=Be(O.pathname);rt(O,{matches:ve,loaderData:{},errors:{[ge.id]:se}},{flushSync:Ge});return}if(E.initialized&&!$&&$E(E.location,O)&&!(W&&W.submission&&ai(W.submission.formMethod))){rt(O,{matches:De},{flushSync:Ge});return}b=new AbortController;let M=wo(t.history,O,b.signal,W&&W.submission),P;if(W&&W.pendingError)P=[ns(De).route.id,{type:mt.error,error:W.pendingError}];else if(W&&W.submission&&ai(W.submission.formMethod)){let se=await $e(M,O,W.submission,De,ye.active,{replace:W.replace,flushSync:Ge});if(se.shortCircuited)return;if(se.pendingActionResult){let[ve,ge]=se.pendingActionResult;if(Un(ge)&&xu(ge.error)&&ge.error.status===404){b=null,rt(O,{matches:se.matches,loaderData:{},errors:{[ve]:ge.error}});return}}De=se.matches||De,P=se.pendingActionResult,Me=ud(O,W.submission),Ge=!1,ye.active=!1,M=wo(t.history,M.url,M.signal)}let{shortCircuited:N,matches:z,loaderData:U,errors:te}=await L(M,O,De,ye.active,Me,W&&W.submission,W&&W.fetcherSubmission,W&&W.replace,W&&W.initialHydration===!0,Ge,P);N||(b=null,rt(O,Ct({matches:z||De},vg(P),{loaderData:U,errors:te})))}async function $e(I,O,W,ne,Me,De){De===void 0&&(De={}),Ye();let Ge=e1(O,W);if(Xe({navigation:Ge},{flushSync:De.flushSync===!0}),Me){let P=await Wn(ne,O.pathname,I.signal);if(P.type==="aborted")return{shortCircuited:!0};if(P.type==="error"){let{boundaryId:N,error:z}=et(O.pathname,P);return{matches:P.partialMatches,pendingActionResult:[N,{type:mt.error,error:z}]}}else if(P.matches)ne=P.matches;else{let{notFoundMatches:N,error:z,route:U}=Be(O.pathname);return{matches:N,pendingActionResult:[U.id,{type:mt.error,error:z}]}}}let ye,M=la(ne,O);if(!M.route.action&&!M.route.lazy)ye={type:mt.error,error:pn(405,{method:I.method,pathname:O.pathname,routeId:M.route.id})};else if(ye=(await _e("action",E,I,[M],ne,null))[M.route.id],I.signal.aborted)return{shortCircuited:!0};if(eo(ye)){let P;return De&&De.replace!=null?P=De.replace:P=hg(ye.response.headers.get("Location"),new URL(I.url),l)===E.location.pathname+E.location.search,await be(I,ye,!0,{submission:W,replace:P}),{shortCircuited:!0}}if(vr(ye))throw pn(400,{type:"defer-action"});if(Un(ye)){let P=ns(ne,M.route.id);return(De&&De.replace)!==!0&&(T=kt.Push),{matches:ne,pendingActionResult:[P.route.id,ye]}}return{matches:ne,pendingActionResult:[M.route.id,ye]}}async function L(I,O,W,ne,Me,De,Ge,ye,M,P,N){let z=Me||ud(O,De),U=De||Ge||xg(z),te=!K&&(!f.v7_partialHydration||!M);if(ne){if(te){let Fe=w(N);Xe(Ct({navigation:z},Fe!==void 0?{actionData:Fe}:{}),{flushSync:P})}let Le=await Wn(W,O.pathname,I.signal);if(Le.type==="aborted")return{shortCircuited:!0};if(Le.type==="error"){let{boundaryId:Fe,error:xt}=et(O.pathname,Le);return{matches:Le.partialMatches,loaderData:{},errors:{[Fe]:xt}}}else if(Le.matches)W=Le.matches;else{let{error:Fe,notFoundMatches:xt,route:ht}=Be(O.pathname);return{matches:xt,loaderData:{},errors:{[ht.id]:Fe}}}}let se=a||s,[ve,ge]=dg(t.history,E,W,U,O,f.v7_partialHydration&&M===!0,f.v7_skipActionErrorRevalidation,$,oe,F,he,q,We,se,l,N);if(Tt(Le=>!(W&&W.some(Fe=>Fe.route.id===Le))||ve&&ve.some(Fe=>Fe.route.id===Le)),de=++Q,ve.length===0&&ge.length===0){let Le=_t();return rt(O,Ct({matches:W,loaderData:{},errors:N&&Un(N[1])?{[N[0]]:N[1].error}:null},vg(N),Le?{fetchers:new Map(E.fetchers)}:{}),{flushSync:P}),{shortCircuited:!0}}if(te){let Le={};if(!ne){Le.navigation=z;let Fe=w(N);Fe!==void 0&&(Le.actionData=Fe)}ge.length>0&&(Le.fetchers=Y(ge)),Xe(Le,{flushSync:P})}ge.forEach(Le=>{X.has(Le.key)&&ze(Le.key),Le.controller&&X.set(Le.key,Le.controller)});let Ue=()=>ge.forEach(Le=>ze(Le.key));b&&b.signal.addEventListener("abort",Ue);let{loaderResults:Ne,fetcherResults:Re}=await we(E,W,ve,ge,I);if(I.signal.aborted)return{shortCircuited:!0};b&&b.signal.removeEventListener("abort",Ue),ge.forEach(Le=>X.delete(Le.key));let Je=Ml(Ne);if(Je)return await be(I,Je.result,!0,{replace:ye}),{shortCircuited:!0};if(Je=Ml(Re),Je)return We.add(Je.key),await be(I,Je.result,!0,{replace:ye}),{shortCircuited:!0};let{loaderData:vt,errors:lt}=mg(E,W,ve,Ne,N,ge,Re,pe);pe.forEach((Le,Fe)=>{Le.subscribe(xt=>{(xt||Le.done)&&pe.delete(Fe)})}),f.v7_partialHydration&&M&&E.errors&&Object.entries(E.errors).filter(Le=>{let[Fe]=Le;return!ve.some(xt=>xt.route.id===Fe)}).forEach(Le=>{let[Fe,xt]=Le;lt=Object.assign(lt||{},{[Fe]:xt})});let Yt=_t(),ot=k(de),Pe=Yt||ot||ge.length>0;return Ct({matches:W,loaderData:vt,errors:lt},Pe?{fetchers:new Map(E.fetchers)}:{})}function w(I){if(I&&!Un(I[1]))return{[I[0]]:I[1].data};if(E.actionData)return Object.keys(E.actionData).length===0?null:E.actionData}function Y(I){return I.forEach(O=>{let W=E.fetchers.get(O.key),ne=Zs(void 0,W?W.data:void 0);E.fetchers.set(O.key,ne)}),new Map(E.fetchers)}function ie(I,O,W,ne){if(i)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");X.has(I)&&ze(I);let Me=(ne&&ne.unstable_flushSync)===!0,De=a||s,Ge=Of(E.location,E.matches,l,f.v7_prependBasename,W,f.v7_relativeSplatPath,O,ne==null?void 0:ne.relative),ye=Yr(De,Ge,l),M=kr(ye,De,Ge);if(M.active&&M.matches&&(ye=M.matches),!ye){xe(I,O,pn(404,{pathname:Ge}),{flushSync:Me});return}let{path:P,submission:N,error:z}=ug(f.v7_normalizeFormMethod,!0,Ge,ne);if(z){xe(I,O,z,{flushSync:Me});return}let U=la(ye,P);if(x=(ne&&ne.preventScrollReset)===!0,N&&ai(N.formMethod)){le(I,O,P,U,ye,M.active,Me,N);return}q.set(I,{routeId:O,path:P}),re(I,O,P,U,ye,M.active,Me,N)}async function le(I,O,W,ne,Me,De,Ge,ye){Ye(),q.delete(I);function M(ht){if(!ht.route.action&&!ht.route.lazy){let Rt=pn(405,{method:ye.formMethod,pathname:W,routeId:O});return xe(I,O,Rt,{flushSync:Ge}),!0}return!1}if(!De&&M(ne))return;let P=E.fetchers.get(I);ce(I,t1(ye,P),{flushSync:Ge});let N=new AbortController,z=wo(t.history,W,N.signal,ye);if(De){let ht=await Wn(Me,W,z.signal);if(ht.type==="aborted")return;if(ht.type==="error"){let{error:Rt}=et(W,ht);xe(I,O,Rt,{flushSync:Ge});return}else if(ht.matches){if(Me=ht.matches,ne=la(Me,W),M(ne))return}else{xe(I,O,pn(404,{pathname:W}),{flushSync:Ge});return}}X.set(I,N);let U=Q,se=(await _e("action",E,z,[ne],Me,I))[ne.route.id];if(z.signal.aborted){X.get(I)===N&&X.delete(I);return}if(f.v7_fetcherPersist&&he.has(I)){if(eo(se)||Un(se)){ce(I,sr(void 0));return}}else{if(eo(se))if(X.delete(I),de>U){ce(I,sr(void 0));return}else return We.add(I),ce(I,Zs(ye)),be(z,se,!1,{fetcherSubmission:ye});if(Un(se)){xe(I,O,se.error);return}}if(vr(se))throw pn(400,{type:"defer-action"});let ve=E.navigation.location||E.location,ge=wo(t.history,ve,N.signal),Ue=a||s,Ne=E.navigation.state!=="idle"?Yr(Ue,E.navigation.location,l):E.matches;nt(Ne,"Didn't find any matches after fetcher action");let Re=++Q;Ee.set(I,Re);let Je=Zs(ye,se.data);E.fetchers.set(I,Je);let[vt,lt]=dg(t.history,E,Ne,ye,ve,!1,f.v7_skipActionErrorRevalidation,$,oe,F,he,q,We,Ue,l,[ne.route.id,se]);lt.filter(ht=>ht.key!==I).forEach(ht=>{let Rt=ht.key,Mo=E.fetchers.get(Rt),Nt=Zs(void 0,Mo?Mo.data:void 0);E.fetchers.set(Rt,Nt),X.has(Rt)&&ze(Rt),ht.controller&&X.set(Rt,ht.controller)}),Xe({fetchers:new Map(E.fetchers)});let Yt=()=>lt.forEach(ht=>ze(ht.key));N.signal.addEventListener("abort",Yt);let{loaderResults:ot,fetcherResults:Pe}=await we(E,Ne,vt,lt,ge);if(N.signal.aborted)return;N.signal.removeEventListener("abort",Yt),Ee.delete(I),X.delete(I),lt.forEach(ht=>X.delete(ht.key));let Le=Ml(ot);if(Le)return be(ge,Le.result,!1);if(Le=Ml(Pe),Le)return We.add(Le.key),be(ge,Le.result,!1);let{loaderData:Fe,errors:xt}=mg(E,Ne,vt,ot,void 0,lt,Pe,pe);if(E.fetchers.has(I)){let ht=sr(se.data);E.fetchers.set(I,ht)}k(Re),E.navigation.state==="loading"&&Re>de?(nt(T,"Expected pending action"),b&&b.abort(),rt(E.navigation.location,{matches:Ne,loaderData:Fe,errors:xt,fetchers:new Map(E.fetchers)})):(Xe({errors:xt,loaderData:gg(E.loaderData,Fe,Ne,xt),fetchers:new Map(E.fetchers)}),$=!1)}async function re(I,O,W,ne,Me,De,Ge,ye){let M=E.fetchers.get(I);ce(I,Zs(ye,M?M.data:void 0),{flushSync:Ge});let P=new AbortController,N=wo(t.history,W,P.signal);if(De){let se=await Wn(Me,W,N.signal);if(se.type==="aborted")return;if(se.type==="error"){let{error:ve}=et(W,se);xe(I,O,ve,{flushSync:Ge});return}else if(se.matches)Me=se.matches,ne=la(Me,W);else{xe(I,O,pn(404,{pathname:W}),{flushSync:Ge});return}}X.set(I,P);let z=Q,te=(await _e("loader",E,N,[ne],Me,I))[ne.route.id];if(vr(te)&&(te=await Ap(te,N.signal,!0)||te),X.get(I)===P&&X.delete(I),!N.signal.aborted){if(he.has(I)){ce(I,sr(void 0));return}if(eo(te))if(de>z){ce(I,sr(void 0));return}else{We.add(I),await be(N,te,!1);return}if(Un(te)){xe(I,O,te.error);return}nt(!vr(te),"Unhandled fetcher deferred data"),ce(I,sr(te.data))}}async function be(I,O,W,ne){let{submission:Me,fetcherSubmission:De,replace:Ge}=ne===void 0?{}:ne;O.response.headers.has("X-Remix-Revalidate")&&($=!0);let ye=O.response.headers.get("Location");nt(ye,"Expected a Location header on the redirect Response"),ye=hg(ye,new URL(I.url),l);let M=Ha(E.location,ye,{_isRedirect:!0});if(n){let se=!1;if(O.response.headers.has("X-Remix-Reload-Document"))se=!0;else if(Tp.test(ye)){const ve=t.history.createURL(ye);se=ve.origin!==e.location.origin||Os(ve.pathname,l)==null}if(se){Ge?e.location.replace(ye):e.location.assign(ye);return}}b=null;let P=Ge===!0||O.response.headers.has("X-Remix-Replace")?kt.Replace:kt.Push,{formMethod:N,formAction:z,formEncType:U}=E.navigation;!Me&&!De&&N&&z&&U&&(Me=xg(E.navigation));let te=Me||De;if(DE.has(O.response.status)&&te&&ai(te.formMethod))await ke(P,M,{submission:Ct({},te,{formAction:ye}),preventScrollReset:x,enableViewTransition:W?H:void 0});else{let se=ud(M,Me);await ke(P,M,{overrideNavigation:se,fetcherSubmission:De,preventScrollReset:x,enableViewTransition:W?H:void 0})}}async function _e(I,O,W,ne,Me,De){let Ge,ye={};try{Ge=await VE(c,I,O,W,ne,Me,De,o,r)}catch(M){return ne.forEach(P=>{ye[P.route.id]={type:mt.error,error:M}}),ye}for(let[M,P]of Object.entries(Ge))if(qE(P)){let N=P.result;ye[M]={type:mt.redirect,response:jE(N,W,M,Me,l,f.v7_relativeSplatPath)}}else ye[M]=await WE(P);return ye}async function we(I,O,W,ne,Me){let De=I.matches,Ge=_e("loader",I,Me,W,O,null),ye=Promise.all(ne.map(async N=>{if(N.matches&&N.match&&N.controller){let U=(await _e("loader",I,wo(t.history,N.path,N.controller.signal),[N.match],N.matches,N.key))[N.match.route.id];return{[N.key]:U}}else return Promise.resolve({[N.key]:{type:mt.error,error:pn(404,{pathname:N.path})}})})),M=await Ge,P=(await ye).reduce((N,z)=>Object.assign(N,z),{});return await Promise.all([QE(O,M,Me.signal,De,I.loaderData),JE(O,P,ne)]),{loaderResults:M,fetcherResults:P}}function Ye(){$=!0,oe.push(...Tt()),q.forEach((I,O)=>{X.has(O)&&(F.add(O),ze(O))})}function ce(I,O,W){W===void 0&&(W={}),E.fetchers.set(I,O),Xe({fetchers:new Map(E.fetchers)},{flushSync:(W&&W.flushSync)===!0})}function xe(I,O,W,ne){ne===void 0&&(ne={});let Me=ns(E.matches,O);He(I),Xe({errors:{[Me.route.id]:W},fetchers:new Map(E.fetchers)},{flushSync:(ne&&ne.flushSync)===!0})}function tt(I){return f.v7_fetcherPersist&&(ae.set(I,(ae.get(I)||0)+1),he.has(I)&&he.delete(I)),E.fetchers.get(I)||IE}function He(I){let O=E.fetchers.get(I);X.has(I)&&!(O&&O.state==="loading"&&Ee.has(I))&&ze(I),q.delete(I),Ee.delete(I),We.delete(I),he.delete(I),F.delete(I),E.fetchers.delete(I)}function Ae(I){if(f.v7_fetcherPersist){let O=(ae.get(I)||0)-1;O<=0?(ae.delete(I),he.add(I)):ae.set(I,O)}else He(I);Xe({fetchers:new Map(E.fetchers)})}function ze(I){let O=X.get(I);nt(O,"Expected fetch controller: "+I),O.abort(),X.delete(I)}function qe(I){for(let O of I){let W=tt(O),ne=sr(W.data);E.fetchers.set(O,ne)}}function _t(){let I=[],O=!1;for(let W of We){let ne=E.fetchers.get(W);nt(ne,"Expected fetcher: "+W),ne.state==="loading"&&(We.delete(W),I.push(W),O=!0)}return qe(I),O}function k(I){let O=[];for(let[W,ne]of Ee)if(ne<I){let Me=E.fetchers.get(W);nt(Me,"Expected fetcher: "+W),Me.state==="loading"&&(ze(W),Ee.delete(W),O.push(W))}return qe(O),O.length>0}function fe(I,O){let W=E.blockers.get(I)||Ks;return Ce.get(I)!==O&&Ce.set(I,O),W}function J(I){E.blockers.delete(I),Ce.delete(I)}function ee(I,O){let W=E.blockers.get(I)||Ks;nt(W.state==="unblocked"&&O.state==="blocked"||W.state==="blocked"&&O.state==="blocked"||W.state==="blocked"&&O.state==="proceeding"||W.state==="blocked"&&O.state==="unblocked"||W.state==="proceeding"&&O.state==="unblocked","Invalid blocker state transition: "+W.state+" -> "+O.state);let ne=new Map(E.blockers);ne.set(I,O),Xe({blockers:ne})}function me(I){let{currentLocation:O,nextLocation:W,historyAction:ne}=I;if(Ce.size===0)return;Ce.size>1&&Es(!1,"A router only supports one blocker at a time");let Me=Array.from(Ce.entries()),[De,Ge]=Me[Me.length-1],ye=E.blockers.get(De);if(!(ye&&ye.state==="proceeding")&&Ge({currentLocation:O,nextLocation:W,historyAction:ne}))return De}function Be(I){let O=pn(404,{pathname:I}),W=a||s,{matches:ne,route:Me}=_g(W);return Tt(),{notFoundMatches:ne,route:Me,error:O}}function et(I,O){return{boundaryId:ns(O.partialMatches).route.id,error:pn(400,{type:"route-discovery",pathname:I,message:O.error!=null&&"message"in O.error?O.error:String(O.error)})}}function Tt(I){let O=[];return pe.forEach((W,ne)=>{(!I||I(ne))&&(W.cancel(),O.push(ne),pe.delete(ne))}),O}function Vt(I,O,W){if(m=I,v=O,h=W||null,!_&&E.navigation===cd){_=!0;let ne=bn(E.location,E.matches);ne!=null&&Xe({restoreScrollPosition:ne})}return()=>{m=null,v=null,h=null}}function st(I,O){return h&&h(I,O.map(ne=>uE(ne,E.loaderData)))||I.key}function ei(I,O){if(m&&v){let W=st(I,O);m[W]=v()}}function bn(I,O){if(m){let W=st(I,O),ne=m[W];if(typeof ne=="number")return ne}return null}function kr(I,O,W){if(u){if(y.has(W))return{active:!1,matches:I};if(I){if(Object.keys(I[0].params).length>0)return{active:!0,matches:cc(O,W,l,!0)}}else return{active:!0,matches:cc(O,W,l,!0)||[]}}return{active:!1,matches:null}}async function Wn(I,O,W){let ne=I;for(;;){let Me=a==null,De=a||s;try{await zE(u,O,ne,De,o,r,Oe,W)}catch(M){return{type:"error",error:M,partialMatches:ne}}finally{Me&&(s=[...s])}if(W.aborted)return{type:"aborted"};let Ge=Yr(De,O,l);if(Ge)return So(O,y),{type:"success",matches:Ge};let ye=cc(De,O,l,!0);if(!ye||ne.length===ye.length&&ne.every((M,P)=>M.route.id===ye[P].route.id))return So(O,y),{type:"success",matches:null};ne=ye}}function So(I,O){if(O.size>=g){let W=O.values().next().value;O.delete(W)}O.add(I)}function il(I){o={},a=Va(I,r,void 0,o)}function rl(I,O){let W=a==null;uy(I,O,a||s,o,r),W&&(s=[...s],Xe({}))}return R={get basename(){return l},get future(){return f},get state(){return E},get routes(){return s},get window(){return e},initialize:ft,subscribe:Dt,enableScrollRestoration:Vt,navigate:Ie,fetch:ie,revalidate:It,createHref:I=>t.history.createHref(I),encodeLocation:I=>t.history.encodeLocation(I),getFetcher:tt,deleteFetcher:Ae,dispose:D,getBlocker:fe,deleteBlocker:J,patchRoutes:rl,_internalFetchControllers:X,_internalActiveDeferreds:pe,_internalSetRoutes:il},R}function FE(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function Of(t,e,n,i,r,o,s,a){let l,c;if(s){l=[];for(let f of e)if(l.push(f),f.route.id===s){c=f;break}}else l=e,c=e[e.length-1];let u=wp(r||".",Ep(l,o),Os(t.pathname,n)||t.pathname,a==="path");return r==null&&(u.search=t.search,u.hash=t.hash),(r==null||r===""||r===".")&&c&&c.route.index&&!Rp(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i&&n!=="/"&&(u.pathname=u.pathname==="/"?n:Vi([n,u.pathname])),ho(u)}function ug(t,e,n,i){if(!i||!FE(i))return{path:n};if(i.formMethod&&!ZE(i.formMethod))return{path:n,error:pn(405,{method:i.formMethod})};let r=()=>({path:n,error:pn(400,{type:"invalid-body"})}),o=i.formMethod||"get",s=t?o.toUpperCase():o.toLowerCase(),a=dy(n);if(i.body!==void 0){if(i.formEncType==="text/plain"){if(!ai(s))return r();let d=typeof i.body=="string"?i.body:i.body instanceof FormData||i.body instanceof URLSearchParams?Array.from(i.body.entries()).reduce((p,g)=>{let[y,m]=g;return""+p+y+"="+m+`
`},""):String(i.body);return{path:n,submission:{formMethod:s,formAction:a,formEncType:i.formEncType,formData:void 0,json:void 0,text:d}}}else if(i.formEncType==="application/json"){if(!ai(s))return r();try{let d=typeof i.body=="string"?JSON.parse(i.body):i.body;return{path:n,submission:{formMethod:s,formAction:a,formEncType:i.formEncType,formData:void 0,json:d,text:void 0}}}catch{return r()}}}nt(typeof FormData=="function","FormData is not available in this environment");let l,c;if(i.formData)l=kf(i.formData),c=i.formData;else if(i.body instanceof FormData)l=kf(i.body),c=i.body;else if(i.body instanceof URLSearchParams)l=i.body,c=pg(l);else if(i.body==null)l=new URLSearchParams,c=new FormData;else try{l=new URLSearchParams(i.body),c=pg(l)}catch{return r()}let u={formMethod:s,formAction:a,formEncType:i&&i.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(ai(u.formMethod))return{path:n,submission:u};let f=Fr(n);return e&&f.search&&Rp(f.search)&&l.append("index",""),f.search="?"+l,{path:ho(f),submission:u}}function OE(t,e){let n=t;if(e){let i=t.findIndex(r=>r.route.id===e);i>=0&&(n=t.slice(0,i))}return n}function dg(t,e,n,i,r,o,s,a,l,c,u,f,d,p,g,y){let m=y?Un(y[1])?y[1].error:y[1].data:void 0,h=t.createURL(e.location),v=t.createURL(r),_=y&&Un(y[1])?y[0]:void 0,S=_?OE(n,_):n,C=y?y[1].statusCode:void 0,A=s&&C&&C>=400,R=S.filter((T,x)=>{let{route:b}=T;if(b.lazy)return!0;if(b.loader==null)return!1;if(o)return typeof b.loader!="function"||b.loader.hydrate?!0:e.loaderData[b.id]===void 0&&(!e.errors||e.errors[b.id]===void 0);if(kE(e.loaderData,e.matches[x],T)||l.some(V=>V===T.route.id))return!0;let H=e.matches[x],B=T;return fg(T,Ct({currentUrl:h,currentParams:H.params,nextUrl:v,nextParams:B.params},i,{actionResult:m,actionStatus:C,defaultShouldRevalidate:A?!1:a||h.pathname+h.search===v.pathname+v.search||h.search!==v.search||cy(H,B)}))}),E=[];return f.forEach((T,x)=>{if(o||!n.some(K=>K.route.id===T.routeId)||u.has(x))return;let b=Yr(p,T.path,g);if(!b){E.push({key:x,routeId:T.routeId,path:T.path,matches:null,match:null,controller:null});return}let H=e.fetchers.get(x),B=la(b,T.path),V=!1;d.has(x)?V=!1:c.has(x)?(c.delete(x),V=!0):H&&H.state!=="idle"&&H.data===void 0?V=a:V=fg(B,Ct({currentUrl:h,currentParams:e.matches[e.matches.length-1].params,nextUrl:v,nextParams:n[n.length-1].params},i,{actionResult:m,actionStatus:C,defaultShouldRevalidate:A?!1:a})),V&&E.push({key:x,routeId:T.routeId,path:T.path,matches:b,match:B,controller:new AbortController})}),[R,E]}function kE(t,e,n){let i=!e||n.route.id!==e.route.id,r=t[n.route.id]===void 0;return i||r}function cy(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function fg(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function zE(t,e,n,i,r,o,s,a){let l=[e,...n.map(c=>c.route.id)].join("-");try{let c=s.get(l);c||(c=t({path:e,matches:n,patch:(u,f)=>{a.aborted||uy(u,f,i,r,o)}}),s.set(l,c)),c&&YE(c)&&await c}finally{s.delete(l)}}function uy(t,e,n,i,r){if(t){var o;let s=i[t];nt(s,"No route found to patch children into: routeId = "+t);let a=Va(e,r,[t,"patch",String(((o=s.children)==null?void 0:o.length)||"0")],i);s.children?s.children.push(...a):s.children=a}else{let s=Va(e,r,["patch",String(n.length||"0")],i);n.push(...s)}}async function BE(t,e,n){if(!t.lazy)return;let i=await t.lazy();if(!t.lazy)return;let r=n[t.id];nt(r,"No route found in manifest");let o={};for(let s in i){let l=r[s]!==void 0&&s!=="hasErrorBoundary";Es(!l,'Route "'+r.id+'" has a static property "'+s+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+s+'" will be ignored.')),!l&&!lE.has(s)&&(o[s]=i[s])}Object.assign(r,o),Object.assign(r,Ct({},e(r),{lazy:void 0}))}async function HE(t){let{matches:e}=t,n=e.filter(r=>r.shouldLoad);return(await Promise.all(n.map(r=>r.resolve()))).reduce((r,o,s)=>Object.assign(r,{[n[s].route.id]:o}),{})}async function VE(t,e,n,i,r,o,s,a,l,c){let u=o.map(p=>p.route.lazy?BE(p.route,l,a):void 0),f=o.map((p,g)=>{let y=u[g],m=r.some(v=>v.route.id===p.route.id);return Ct({},p,{shouldLoad:m,resolve:async v=>(v&&i.method==="GET"&&(p.route.lazy||p.route.loader)&&(m=!0),m?GE(e,i,p,y,v,c):Promise.resolve({type:mt.data,result:void 0}))})}),d=await t({matches:f,request:i,params:o[0].params,fetcherKey:s,context:c});try{await Promise.all(u)}catch{}return d}async function GE(t,e,n,i,r,o){let s,a,l=c=>{let u,f=new Promise((g,y)=>u=y);a=()=>u(),e.signal.addEventListener("abort",a);let d=g=>typeof c!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+t+'" [routeId: '+n.route.id+"]"))):c({request:e,params:n.params,context:o},...g!==void 0?[g]:[]),p=(async()=>{try{return{type:"data",result:await(r?r(y=>d(y)):d())}}catch(g){return{type:"error",result:g}}})();return Promise.race([p,f])};try{let c=n.route[t];if(i)if(c){let u,[f]=await Promise.all([l(c).catch(d=>{u=d}),i]);if(u!==void 0)throw u;s=f}else if(await i,c=n.route[t],c)s=await l(c);else if(t==="action"){let u=new URL(e.url),f=u.pathname+u.search;throw pn(405,{method:e.method,pathname:f,routeId:n.route.id})}else return{type:mt.data,result:void 0};else if(c)s=await l(c);else{let u=new URL(e.url),f=u.pathname+u.search;throw pn(404,{pathname:f})}nt(s.result!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(c){return{type:mt.error,result:c}}finally{a&&e.signal.removeEventListener("abort",a)}return s}async function WE(t){let{result:e,type:n}=t;if(fy(e)){let c;try{let u=e.headers.get("Content-Type");u&&/\bapplication\/json\b/.test(u)?e.body==null?c=null:c=await e.json():c=await e.text()}catch(u){return{type:mt.error,error:u}}return n===mt.error?{type:mt.error,error:new jc(e.status,e.statusText,c),statusCode:e.status,headers:e.headers}:{type:mt.data,data:c,statusCode:e.status,headers:e.headers}}if(n===mt.error){if(yg(e)){var i;if(e.data instanceof Error){var r;return{type:mt.error,error:e.data,statusCode:(r=e.init)==null?void 0:r.status}}e=new jc(((i=e.init)==null?void 0:i.status)||500,void 0,e.data)}return{type:mt.error,error:e,statusCode:xu(e)?e.status:void 0}}if(KE(e)){var o,s;return{type:mt.deferred,deferredData:e,statusCode:(o=e.init)==null?void 0:o.status,headers:((s=e.init)==null?void 0:s.headers)&&new Headers(e.init.headers)}}if(yg(e)){var a,l;return{type:mt.data,data:e.data,statusCode:(a=e.init)==null?void 0:a.status,headers:(l=e.init)!=null&&l.headers?new Headers(e.init.headers):void 0}}return{type:mt.data,data:e}}function jE(t,e,n,i,r,o){let s=t.headers.get("Location");if(nt(s,"Redirects returned/thrown from loaders/actions must have a Location header"),!Tp.test(s)){let a=i.slice(0,i.findIndex(l=>l.route.id===n)+1);s=Of(new URL(e.url),a,r,!0,s,o),t.headers.set("Location",s)}return t}function hg(t,e,n){if(Tp.test(t)){let i=t,r=i.startsWith("//")?new URL(e.protocol+i):new URL(i),o=Os(r.pathname,n)!=null;if(r.origin===e.origin&&o)return r.pathname+r.search+r.hash}return t}function wo(t,e,n,i){let r=t.createURL(dy(e)).toString(),o={signal:n};if(i&&ai(i.formMethod)){let{formMethod:s,formEncType:a}=i;o.method=s.toUpperCase(),a==="application/json"?(o.headers=new Headers({"Content-Type":a}),o.body=JSON.stringify(i.json)):a==="text/plain"?o.body=i.text:a==="application/x-www-form-urlencoded"&&i.formData?o.body=kf(i.formData):o.body=i.formData}return new Request(r,o)}function kf(t){let e=new URLSearchParams;for(let[n,i]of t.entries())e.append(n,typeof i=="string"?i:i.name);return e}function pg(t){let e=new FormData;for(let[n,i]of t.entries())e.append(n,i);return e}function XE(t,e,n,i,r){let o={},s=null,a,l=!1,c={},u=n&&Un(n[1])?n[1].error:void 0;return t.forEach(f=>{if(!(f.route.id in e))return;let d=f.route.id,p=e[d];if(nt(!eo(p),"Cannot handle redirect results in processLoaderData"),Un(p)){let g=p.error;u!==void 0&&(g=u,u=void 0),s=s||{};{let y=ns(t,d);s[y.route.id]==null&&(s[y.route.id]=g)}o[d]=void 0,l||(l=!0,a=xu(p.error)?p.error.status:500),p.headers&&(c[d]=p.headers)}else vr(p)?(i.set(d,p.deferredData),o[d]=p.deferredData.data,p.statusCode!=null&&p.statusCode!==200&&!l&&(a=p.statusCode),p.headers&&(c[d]=p.headers)):(o[d]=p.data,p.statusCode&&p.statusCode!==200&&!l&&(a=p.statusCode),p.headers&&(c[d]=p.headers))}),u!==void 0&&n&&(s={[n[0]]:u},o[n[0]]=void 0),{loaderData:o,errors:s,statusCode:a||200,loaderHeaders:c}}function mg(t,e,n,i,r,o,s,a){let{loaderData:l,errors:c}=XE(e,i,r,a);return o.forEach(u=>{let{key:f,match:d,controller:p}=u,g=s[f];if(nt(g,"Did not find corresponding fetcher result"),!(p&&p.signal.aborted))if(Un(g)){let y=ns(t.matches,d==null?void 0:d.route.id);c&&c[y.route.id]||(c=Ct({},c,{[y.route.id]:g.error})),t.fetchers.delete(f)}else if(eo(g))nt(!1,"Unhandled fetcher revalidation redirect");else if(vr(g))nt(!1,"Unhandled fetcher deferred data");else{let y=sr(g.data);t.fetchers.set(f,y)}}),{loaderData:l,errors:c}}function gg(t,e,n,i){let r=Ct({},e);for(let o of n){let s=o.route.id;if(e.hasOwnProperty(s)?e[s]!==void 0&&(r[s]=e[s]):t[s]!==void 0&&o.route.loader&&(r[s]=t[s]),i&&i.hasOwnProperty(s))break}return r}function vg(t){return t?Un(t[1])?{actionData:{}}:{actionData:{[t[0]]:t[1].data}}:{}}function ns(t,e){return(e?t.slice(0,t.findIndex(i=>i.route.id===e)+1):[...t]).reverse().find(i=>i.route.hasErrorBoundary===!0)||t[0]}function _g(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function pn(t,e){let{pathname:n,routeId:i,method:r,type:o,message:s}=e===void 0?{}:e,a="Unknown Server Error",l="Unknown @remix-run/router error";return t===400?(a="Bad Request",o==="route-discovery"?l='Unable to match URL "'+n+'" - the `unstable_patchRoutesOnNavigation()` '+(`function threw the following error:
`+s):r&&n&&i?l="You made a "+r+' request to "'+n+'" but '+('did not provide a `loader` for route "'+i+'", ')+"so there is no way to handle the request.":o==="defer-action"?l="defer() is not supported in actions":o==="invalid-body"&&(l="Unable to encode submission body")):t===403?(a="Forbidden",l='Route "'+i+'" does not match URL "'+n+'"'):t===404?(a="Not Found",l='No route matches URL "'+n+'"'):t===405&&(a="Method Not Allowed",r&&n&&i?l="You made a "+r.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+i+'", ')+"so there is no way to handle the request.":r&&(l='Invalid request method "'+r.toUpperCase()+'"')),new jc(t||500,a,new Error(l),!0)}function Ml(t){let e=Object.entries(t);for(let n=e.length-1;n>=0;n--){let[i,r]=e[n];if(eo(r))return{key:i,result:r}}}function dy(t){let e=typeof t=="string"?Fr(t):t;return ho(Ct({},e,{hash:""}))}function $E(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function YE(t){return typeof t=="object"&&t!=null&&"then"in t}function qE(t){return fy(t.result)&&LE.has(t.result.status)}function vr(t){return t.type===mt.deferred}function Un(t){return t.type===mt.error}function eo(t){return(t&&t.type)===mt.redirect}function yg(t){return typeof t=="object"&&t!=null&&"type"in t&&"data"in t&&"init"in t&&t.type==="DataWithResponseInit"}function KE(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function fy(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function ZE(t){return bE.has(t.toLowerCase())}function ai(t){return CE.has(t.toLowerCase())}async function QE(t,e,n,i,r){let o=Object.entries(e);for(let s=0;s<o.length;s++){let[a,l]=o[s],c=t.find(d=>(d==null?void 0:d.route.id)===a);if(!c)continue;let u=i.find(d=>d.route.id===c.route.id),f=u!=null&&!cy(u,c)&&(r&&r[c.route.id])!==void 0;vr(l)&&f&&await Ap(l,n,!1).then(d=>{d&&(e[a]=d)})}}async function JE(t,e,n){for(let i=0;i<n.length;i++){let{key:r,routeId:o,controller:s}=n[i],a=e[r];t.find(c=>(c==null?void 0:c.route.id)===o)&&vr(a)&&(nt(s,"Expected an AbortController for revalidating fetcher deferred result"),await Ap(a,s.signal,!0).then(c=>{c&&(e[r]=c)}))}}async function Ap(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:mt.data,data:t.deferredData.unwrappedData}}catch(r){return{type:mt.error,error:r}}return{type:mt.data,data:t.deferredData.data}}}function Rp(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function la(t,e){let n=typeof e=="string"?Fr(e).search:e.search;if(t[t.length-1].route.index&&Rp(n||""))return t[t.length-1];let i=sy(t);return i[i.length-1]}function xg(t){let{formMethod:e,formAction:n,formEncType:i,text:r,formData:o,json:s}=t;if(!(!e||!n||!i)){if(r!=null)return{formMethod:e,formAction:n,formEncType:i,formData:void 0,json:void 0,text:r};if(o!=null)return{formMethod:e,formAction:n,formEncType:i,formData:o,json:void 0,text:void 0};if(s!==void 0)return{formMethod:e,formAction:n,formEncType:i,formData:void 0,json:s,text:void 0}}}function ud(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function e1(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function Zs(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function t1(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function sr(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function n1(t,e){try{let n=t.sessionStorage.getItem(ly);if(n){let i=JSON.parse(n);for(let[r,o]of Object.entries(i||{}))o&&Array.isArray(o)&&e.set(r,new Set(o||[]))}}catch{}}function i1(t,e){if(e.size>0){let n={};for(let[i,r]of e)n[i]=[...r];try{t.sessionStorage.setItem(ly,JSON.stringify(n))}catch(i){Es(!1,"Failed to save applied view transitions in sessionStorage ("+i+").")}}}/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xc(){return Xc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Xc.apply(this,arguments)}const Su=Z.createContext(null),hy=Z.createContext(null),_o=Z.createContext(null),Cp=Z.createContext(null),yo=Z.createContext({outlet:null,matches:[],isDataRoute:!1}),py=Z.createContext(null);function r1(t,e){let{relative:n}=e===void 0?{}:e;Qa()||nt(!1);let{basename:i,navigator:r}=Z.useContext(_o),{hash:o,pathname:s,search:a}=gy(t,{relative:n}),l=s;return i!=="/"&&(l=s==="/"?i:Vi([i,s])),r.createHref({pathname:l,search:a,hash:o})}function Qa(){return Z.useContext(Cp)!=null}function Mu(){return Qa()||nt(!1),Z.useContext(Cp).location}function my(t){Z.useContext(_o).static||Z.useLayoutEffect(t)}function o1(){let{isDataRoute:t}=Z.useContext(yo);return t?v1():s1()}function s1(){Qa()||nt(!1);let t=Z.useContext(Su),{basename:e,future:n,navigator:i}=Z.useContext(_o),{matches:r}=Z.useContext(yo),{pathname:o}=Mu(),s=JSON.stringify(Ep(r,n.v7_relativeSplatPath)),a=Z.useRef(!1);return my(()=>{a.current=!0}),Z.useCallback(function(c,u){if(u===void 0&&(u={}),!a.current)return;if(typeof c=="number"){i.go(c);return}let f=wp(c,JSON.parse(s),o,u.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Vi([e,f.pathname])),(u.replace?i.replace:i.push)(f,u.state,u)},[e,i,s,o,t])}function gy(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=Z.useContext(_o),{matches:r}=Z.useContext(yo),{pathname:o}=Mu(),s=JSON.stringify(Ep(r,i.v7_relativeSplatPath));return Z.useMemo(()=>wp(t,JSON.parse(s),o,n==="path"),[t,s,o,n])}function a1(t,e,n,i){Qa()||nt(!1);let{navigator:r}=Z.useContext(_o),{matches:o}=Z.useContext(yo),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let c=Mu(),u;u=c;let f=u.pathname||"/",d=f;if(l!=="/"){let y=l.replace(/^\//,"").split("/");d="/"+f.replace(/^\//,"").split("/").slice(y.length).join("/")}let p=Yr(t,{pathname:d});return f1(p&&p.map(y=>Object.assign({},y,{params:Object.assign({},a,y.params),pathname:Vi([l,r.encodeLocation?r.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?l:Vi([l,r.encodeLocation?r.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),o,n,i)}function l1(){let t=g1(),e=xu(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return Z.createElement(Z.Fragment,null,Z.createElement("h2",null,"Unexpected Application Error!"),Z.createElement("h3",{style:{fontStyle:"italic"}},e),n?Z.createElement("pre",{style:r},n):null,null)}const c1=Z.createElement(l1,null);class u1 extends Z.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?Z.createElement(yo.Provider,{value:this.props.routeContext},Z.createElement(py.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function d1(t){let{routeContext:e,match:n,children:i}=t,r=Z.useContext(Su);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),Z.createElement(yo.Provider,{value:e},i)}function f1(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var o;if(!n)return null;if(n.errors)t=n.matches;else if((o=i)!=null&&o.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let s=t,a=(r=n)==null?void 0:r.errors;if(a!=null){let u=s.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);u>=0||nt(!1),s=s.slice(0,Math.min(s.length,u+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let u=0;u<s.length;u++){let f=s[u];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=u),f.route.id){let{loaderData:d,errors:p}=n,g=f.route.loader&&d[f.route.id]===void 0&&(!p||p[f.route.id]===void 0);if(f.route.lazy||g){l=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((u,f,d)=>{let p,g=!1,y=null,m=null;n&&(p=a&&f.route.id?a[f.route.id]:void 0,y=f.route.errorElement||c1,l&&(c<0&&d===0?(g=!0,m=null):c===d&&(g=!0,m=f.route.hydrateFallbackElement||null)));let h=e.concat(s.slice(0,d+1)),v=()=>{let _;return p?_=y:g?_=m:f.route.Component?_=Z.createElement(f.route.Component,null):f.route.element?_=f.route.element:_=u,Z.createElement(d1,{match:f,routeContext:{outlet:u,matches:h,isDataRoute:n!=null},children:_})};return n&&(f.route.ErrorBoundary||f.route.errorElement||d===0)?Z.createElement(u1,{location:n.location,revalidation:n.revalidation,component:y,error:p,children:v(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):v()},null)}var vy=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(vy||{}),$c=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}($c||{});function h1(t){let e=Z.useContext(Su);return e||nt(!1),e}function p1(t){let e=Z.useContext(hy);return e||nt(!1),e}function m1(t){let e=Z.useContext(yo);return e||nt(!1),e}function _y(t){let e=m1(),n=e.matches[e.matches.length-1];return n.route.id||nt(!1),n.route.id}function g1(){var t;let e=Z.useContext(py),n=p1($c.UseRouteError),i=_y($c.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function v1(){let{router:t}=h1(vy.UseNavigateStable),e=_y($c.UseNavigateStable),n=Z.useRef(!1);return my(()=>{n.current=!0}),Z.useCallback(function(r,o){o===void 0&&(o={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,Xc({fromRouteId:e},o)))},[t,e])}function _1(t){let{basename:e="/",children:n=null,location:i,navigationType:r=kt.Pop,navigator:o,static:s=!1,future:a}=t;Qa()&&nt(!1);let l=e.replace(/^\/*/,"/"),c=Z.useMemo(()=>({basename:l,navigator:o,static:s,future:Xc({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof i=="string"&&(i=Fr(i));let{pathname:u="/",search:f="",hash:d="",state:p=null,key:g="default"}=i,y=Z.useMemo(()=>{let m=Os(u,l);return m==null?null:{location:{pathname:m,search:f,hash:d,state:p,key:g},navigationType:r}},[l,u,f,d,p,g,r]);return y==null?null:Z.createElement(_o.Provider,{value:c},Z.createElement(Cp.Provider,{children:n,value:y}))}new Promise(()=>{});function y1(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:Z.createElement(t.Component),Component:void 0}),t.HydrateFallback&&Object.assign(e,{hydrateFallbackElement:Z.createElement(t.HydrateFallback),HydrateFallback:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:Z.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ga(){return Ga=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ga.apply(this,arguments)}function x1(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,o;for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function S1(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function M1(t,e){return t.button===0&&(!e||e==="_self")&&!S1(t)}const E1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],w1="6";try{window.__reactRouterVersion=w1}catch{}function T1(t,e){return UE({basename:void 0,future:Ga({},void 0,{v7_prependBasename:!0}),history:oE({window:void 0}),hydrationData:A1(),routes:t,mapRouteProperties:y1,unstable_dataStrategy:void 0,unstable_patchRoutesOnNavigation:void 0,window:void 0}).initialize()}function A1(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=Ga({},e,{errors:R1(e.errors)})),e}function R1(t){if(!t)return null;let e=Object.entries(t),n={};for(let[i,r]of e)if(r&&r.__type==="RouteErrorResponse")n[i]=new jc(r.status,r.statusText,r.data,r.internal===!0);else if(r&&r.__type==="Error"){if(r.__subType){let o=window[r.__subType];if(typeof o=="function")try{let s=new o(r.message);s.stack="",n[i]=s}catch{}}if(n[i]==null){let o=new Error(r.message);o.stack="",n[i]=o}}else n[i]=r;return n}const C1=Z.createContext({isTransitioning:!1}),P1=Z.createContext(new Map),b1="startTransition",Sg=Xx[b1],L1="flushSync",Mg=rE[L1];function D1(t){Sg?Sg(t):t()}function Qs(t){Mg?Mg(t):t()}class I1{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=i=>{this.status==="pending"&&(this.status="resolved",e(i))},this.reject=i=>{this.status==="pending"&&(this.status="rejected",n(i))}})}}function N1(t){let{fallbackElement:e,router:n,future:i}=t,[r,o]=Z.useState(n.state),[s,a]=Z.useState(),[l,c]=Z.useState({isTransitioning:!1}),[u,f]=Z.useState(),[d,p]=Z.useState(),[g,y]=Z.useState(),m=Z.useRef(new Map),{v7_startTransition:h}=i||{},v=Z.useCallback(E=>{h?D1(E):E()},[h]),_=Z.useCallback((E,T)=>{let{deletedFetchers:x,unstable_flushSync:b,unstable_viewTransitionOpts:H}=T;x.forEach(V=>m.current.delete(V)),E.fetchers.forEach((V,K)=>{V.data!==void 0&&m.current.set(K,V.data)});let B=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!H||B){b?Qs(()=>o(E)):v(()=>o(E));return}if(b){Qs(()=>{d&&(u&&u.resolve(),d.skipTransition()),c({isTransitioning:!0,flushSync:!0,currentLocation:H.currentLocation,nextLocation:H.nextLocation})});let V=n.window.document.startViewTransition(()=>{Qs(()=>o(E))});V.finished.finally(()=>{Qs(()=>{f(void 0),p(void 0),a(void 0),c({isTransitioning:!1})})}),Qs(()=>p(V));return}d?(u&&u.resolve(),d.skipTransition(),y({state:E,currentLocation:H.currentLocation,nextLocation:H.nextLocation})):(a(E),c({isTransitioning:!0,flushSync:!1,currentLocation:H.currentLocation,nextLocation:H.nextLocation}))},[n.window,d,u,m,v]);Z.useLayoutEffect(()=>n.subscribe(_),[n,_]),Z.useEffect(()=>{l.isTransitioning&&!l.flushSync&&f(new I1)},[l]),Z.useEffect(()=>{if(u&&s&&n.window){let E=s,T=u.promise,x=n.window.document.startViewTransition(async()=>{v(()=>o(E)),await T});x.finished.finally(()=>{f(void 0),p(void 0),a(void 0),c({isTransitioning:!1})}),p(x)}},[v,s,u,n.window]),Z.useEffect(()=>{u&&s&&r.location.key===s.location.key&&u.resolve()},[u,d,r.location,s]),Z.useEffect(()=>{!l.isTransitioning&&g&&(a(g.state),c({isTransitioning:!0,flushSync:!1,currentLocation:g.currentLocation,nextLocation:g.nextLocation}),y(void 0))},[l.isTransitioning,g]),Z.useEffect(()=>{},[]);let S=Z.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:E=>n.navigate(E),push:(E,T,x)=>n.navigate(E,{state:T,preventScrollReset:x==null?void 0:x.preventScrollReset}),replace:(E,T,x)=>n.navigate(E,{replace:!0,state:T,preventScrollReset:x==null?void 0:x.preventScrollReset})}),[n]),C=n.basename||"/",A=Z.useMemo(()=>({router:n,navigator:S,static:!1,basename:C}),[n,S,C]),R=Z.useMemo(()=>({v7_relativeSplatPath:n.future.v7_relativeSplatPath}),[n.future.v7_relativeSplatPath]);return Z.createElement(Z.Fragment,null,Z.createElement(Su.Provider,{value:A},Z.createElement(hy.Provider,{value:r},Z.createElement(P1.Provider,{value:m.current},Z.createElement(C1.Provider,{value:l},Z.createElement(_1,{basename:C,location:r.location,navigationType:r.historyAction,navigator:S,future:R},r.initialized||n.future.v7_partialHydration?Z.createElement(U1,{routes:n.routes,future:n.future,state:r}):e))))),null)}const U1=Z.memo(F1);function F1(t){let{routes:e,future:n,state:i}=t;return a1(e,void 0,i,n)}const O1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",k1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ar=Z.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:o,replace:s,state:a,target:l,to:c,preventScrollReset:u,unstable_viewTransition:f}=e,d=x1(e,E1),{basename:p}=Z.useContext(_o),g,y=!1;if(typeof c=="string"&&k1.test(c)&&(g=c,O1))try{let _=new URL(window.location.href),S=c.startsWith("//")?new URL(_.protocol+c):new URL(c),C=Os(S.pathname,p);S.origin===_.origin&&C!=null?c=C+S.search+S.hash:y=!0}catch{}let m=r1(c,{relative:r}),h=z1(c,{replace:s,state:a,target:l,preventScrollReset:u,relative:r,unstable_viewTransition:f});function v(_){i&&i(_),_.defaultPrevented||h(_)}return Z.createElement("a",Ga({},d,{href:g||m,onClick:y||o?i:v,ref:n,target:l}))});var Eg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Eg||(Eg={}));var wg;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(wg||(wg={}));function z1(t,e){let{target:n,replace:i,state:r,preventScrollReset:o,relative:s,unstable_viewTransition:a}=e===void 0?{}:e,l=o1(),c=Mu(),u=gy(t,{relative:s});return Z.useCallback(f=>{if(M1(f,n)){f.preventDefault();let d=i!==void 0?i:ho(c)===ho(u);l(t,{replace:d,state:r,preventScrollReset:o,relative:s,unstable_viewTransition:a})}},[c,l,u,i,r,n,t,o,s,a])}const B1="modulepreload",H1=function(t){return"/"+t},Tg={},xn=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),s=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(n.map(a=>{if(a=H1(a),a in Tg)return;Tg[a]=!0;const l=a.endsWith(".css"),c=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${c}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":B1,l||(u.as="script"),u.crossOrigin="",u.href=a,s&&u.setAttribute("nonce",s),document.head.appendChild(u),l)return new Promise((f,d)=>{u.addEventListener("load",f),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${a}`)))})}))}return r.then(o=>{for(const s of o||[]){if(s.status!=="rejected")continue;const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s.reason,window.dispatchEvent(a),!a.defaultPrevented)throw s.reason}return e()})},dd=Z.lazy(()=>xn(()=>import("./Animatedbutton1-BK9pqj1H.js"),__vite__mapDeps([0,1]))),V1=Z.lazy(()=>xn(()=>import("./Sharetooltipbutton-Bqu0vOcw.js"),[])),Pp=Wi.memo(()=>{const t=Z.useMemo(()=>({home:"Home",projects:"Projects",contact:"Contact"}),[]);return j.jsxs("div",{className:"nav",children:[j.jsx("div",{className:"logo-name",children:j.jsx(Z.Suspense,{fallback:j.jsx("div",{children:"Loading..."}),children:j.jsx(V1,{})})}),j.jsx("div",{className:"links-div",children:j.jsxs(Z.Suspense,{fallback:j.jsx("div",{children:"Loading..."}),children:[j.jsx(Ar,{to:"/home",className:"nav-link",alt:"Home",children:j.jsx(dd,{name:t.home})}),j.jsx(Ar,{to:"/projects",className:"nav-link",alt:"Projects",children:j.jsx(dd,{name:t.projects})}),j.jsx(Ar,{to:"/contact",className:"nav-link",alt:"Contact",children:j.jsx(dd,{name:t.contact})})]})})]})});Pp.displayName="Navbar";const yy=Object.freeze(Object.defineProperty({__proto__:null,default:Pp},Symbol.toStringTag,{value:"Module"})),G1=()=>j.jsx(j.Fragment,{children:j.jsxs("div",{className:"HomeComponents",children:[j.jsx("div",{className:"Heading",children:j.jsx("h1",{children:"Hi! I am Lokesh"})}),j.jsx("div",{children:j.jsx("p",{children:"I am a passionate software engineer with a strong foundation in web development, AI, and machine learning. I hold a degree in Computer Science and Engineering with a specialization in Artificial Intelligence. I have developed innovative projects like Audio Forgery Alert, a deepfake detection system, and published a paper on the topic. I have also worked on projects like Tic-Tac-Toe, Rock-Paper-Scissors, and a Currency Converter."})})]})}),W1="/assets/lok-BZDWJyHm.jpg";var wn=function(){return wn=Object.assign||function(e){for(var n,i=1,r=arguments.length;i<r;i++){n=arguments[i];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},wn.apply(this,arguments)};function Yc(t,e,n){if(n||arguments.length===2)for(var i=0,r=e.length,o;i<r;i++)(o||!(i in e))&&(o||(o=Array.prototype.slice.call(e,0,i)),o[i]=e[i]);return t.concat(o||Array.prototype.slice.call(e))}var Mt="-ms-",xa="-moz-",ut="-webkit-",xy="comm",Eu="rule",bp="decl",j1="@import",Sy="@keyframes",X1="@layer",My=Math.abs,Lp=String.fromCharCode,zf=Object.assign;function $1(t,e){return Zt(t,0)^45?(((e<<2^Zt(t,0))<<2^Zt(t,1))<<2^Zt(t,2))<<2^Zt(t,3):0}function Ey(t){return t.trim()}function Ni(t,e){return(t=e.exec(t))?t[0]:t}function Ze(t,e,n){return t.replace(e,n)}function uc(t,e,n){return t.indexOf(e,n)}function Zt(t,e){return t.charCodeAt(e)|0}function ws(t,e,n){return t.slice(e,n)}function _i(t){return t.length}function wy(t){return t.length}function ca(t,e){return e.push(t),t}function Y1(t,e){return t.map(e).join("")}function Ag(t,e){return t.filter(function(n){return!Ni(n,e)})}var wu=1,Ts=1,Ty=0,Jn=0,zt=0,ks="";function Tu(t,e,n,i,r,o,s,a){return{value:t,root:e,parent:n,type:i,props:r,children:o,line:wu,column:Ts,length:s,return:"",siblings:a}}function ar(t,e){return zf(Tu("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function To(t){for(;t.root;)t=ar(t.root,{children:[t]});ca(t,t.siblings)}function q1(){return zt}function K1(){return zt=Jn>0?Zt(ks,--Jn):0,Ts--,zt===10&&(Ts=1,wu--),zt}function hi(){return zt=Jn<Ty?Zt(ks,Jn++):0,Ts++,zt===10&&(Ts=1,wu++),zt}function oo(){return Zt(ks,Jn)}function dc(){return Jn}function Au(t,e){return ws(ks,t,e)}function Bf(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Z1(t){return wu=Ts=1,Ty=_i(ks=t),Jn=0,[]}function Q1(t){return ks="",t}function fd(t){return Ey(Au(Jn-1,Hf(t===91?t+2:t===40?t+1:t)))}function J1(t){for(;(zt=oo())&&zt<33;)hi();return Bf(t)>2||Bf(zt)>3?"":" "}function ew(t,e){for(;--e&&hi()&&!(zt<48||zt>102||zt>57&&zt<65||zt>70&&zt<97););return Au(t,dc()+(e<6&&oo()==32&&hi()==32))}function Hf(t){for(;hi();)switch(zt){case t:return Jn;case 34:case 39:t!==34&&t!==39&&Hf(zt);break;case 40:t===41&&Hf(t);break;case 92:hi();break}return Jn}function tw(t,e){for(;hi()&&t+zt!==57;)if(t+zt===84&&oo()===47)break;return"/*"+Au(e,Jn-1)+"*"+Lp(t===47?t:hi())}function nw(t){for(;!Bf(oo());)hi();return Au(t,Jn)}function iw(t){return Q1(fc("",null,null,null,[""],t=Z1(t),0,[0],t))}function fc(t,e,n,i,r,o,s,a,l){for(var c=0,u=0,f=s,d=0,p=0,g=0,y=1,m=1,h=1,v=0,_="",S=r,C=o,A=i,R=_;m;)switch(g=v,v=hi()){case 40:if(g!=108&&Zt(R,f-1)==58){uc(R+=Ze(fd(v),"&","&\f"),"&\f",My(c?a[c-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:R+=fd(v);break;case 9:case 10:case 13:case 32:R+=J1(g);break;case 92:R+=ew(dc()-1,7);continue;case 47:switch(oo()){case 42:case 47:ca(rw(tw(hi(),dc()),e,n,l),l);break;default:R+="/"}break;case 123*y:a[c++]=_i(R)*h;case 125*y:case 59:case 0:switch(v){case 0:case 125:m=0;case 59+u:h==-1&&(R=Ze(R,/\f/g,"")),p>0&&_i(R)-f&&ca(p>32?Cg(R+";",i,n,f-1,l):Cg(Ze(R," ","")+";",i,n,f-2,l),l);break;case 59:R+=";";default:if(ca(A=Rg(R,e,n,c,u,r,a,_,S=[],C=[],f,o),o),v===123)if(u===0)fc(R,e,A,A,S,o,f,a,C);else switch(d===99&&Zt(R,3)===110?100:d){case 100:case 108:case 109:case 115:fc(t,A,A,i&&ca(Rg(t,A,A,0,0,r,a,_,r,S=[],f,C),C),r,C,f,a,i?S:C);break;default:fc(R,A,A,A,[""],C,0,a,C)}}c=u=p=0,y=h=1,_=R="",f=s;break;case 58:f=1+_i(R),p=g;default:if(y<1){if(v==123)--y;else if(v==125&&y++==0&&K1()==125)continue}switch(R+=Lp(v),v*y){case 38:h=u>0?1:(R+="\f",-1);break;case 44:a[c++]=(_i(R)-1)*h,h=1;break;case 64:oo()===45&&(R+=fd(hi())),d=oo(),u=f=_i(_=R+=nw(dc())),v++;break;case 45:g===45&&_i(R)==2&&(y=0)}}return o}function Rg(t,e,n,i,r,o,s,a,l,c,u,f){for(var d=r-1,p=r===0?o:[""],g=wy(p),y=0,m=0,h=0;y<i;++y)for(var v=0,_=ws(t,d+1,d=My(m=s[y])),S=t;v<g;++v)(S=Ey(m>0?p[v]+" "+_:Ze(_,/&\f/g,p[v])))&&(l[h++]=S);return Tu(t,e,n,r===0?Eu:a,l,c,u,f)}function rw(t,e,n,i){return Tu(t,e,n,xy,Lp(q1()),ws(t,2,-2),0,i)}function Cg(t,e,n,i,r){return Tu(t,e,n,bp,ws(t,0,i),ws(t,i+1,-1),i,r)}function Ay(t,e,n){switch($1(t,e)){case 5103:return ut+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ut+t+t;case 4789:return xa+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ut+t+xa+t+Mt+t+t;case 5936:switch(Zt(t,e+11)){case 114:return ut+t+Mt+Ze(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ut+t+Mt+Ze(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ut+t+Mt+Ze(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return ut+t+Mt+t+t;case 6165:return ut+t+Mt+"flex-"+t+t;case 5187:return ut+t+Ze(t,/(\w+).+(:[^]+)/,ut+"box-$1$2"+Mt+"flex-$1$2")+t;case 5443:return ut+t+Mt+"flex-item-"+Ze(t,/flex-|-self/g,"")+(Ni(t,/flex-|baseline/)?"":Mt+"grid-row-"+Ze(t,/flex-|-self/g,""))+t;case 4675:return ut+t+Mt+"flex-line-pack"+Ze(t,/align-content|flex-|-self/g,"")+t;case 5548:return ut+t+Mt+Ze(t,"shrink","negative")+t;case 5292:return ut+t+Mt+Ze(t,"basis","preferred-size")+t;case 6060:return ut+"box-"+Ze(t,"-grow","")+ut+t+Mt+Ze(t,"grow","positive")+t;case 4554:return ut+Ze(t,/([^-])(transform)/g,"$1"+ut+"$2")+t;case 6187:return Ze(Ze(Ze(t,/(zoom-|grab)/,ut+"$1"),/(image-set)/,ut+"$1"),t,"")+t;case 5495:case 3959:return Ze(t,/(image-set\([^]*)/,ut+"$1$`$1");case 4968:return Ze(Ze(t,/(.+:)(flex-)?(.*)/,ut+"box-pack:$3"+Mt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ut+t+t;case 4200:if(!Ni(t,/flex-|baseline/))return Mt+"grid-column-align"+ws(t,e)+t;break;case 2592:case 3360:return Mt+Ze(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(i,r){return e=r,Ni(i.props,/grid-\w+-end/)})?~uc(t+(n=n[e].value),"span",0)?t:Mt+Ze(t,"-start","")+t+Mt+"grid-row-span:"+(~uc(n,"span",0)?Ni(n,/\d+/):+Ni(n,/\d+/)-+Ni(t,/\d+/))+";":Mt+Ze(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(i){return Ni(i.props,/grid-\w+-start/)})?t:Mt+Ze(Ze(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Ze(t,/(.+)-inline(.+)/,ut+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_i(t)-1-e>6)switch(Zt(t,e+1)){case 109:if(Zt(t,e+4)!==45)break;case 102:return Ze(t,/(.+:)(.+)-([^]+)/,"$1"+ut+"$2-$3$1"+xa+(Zt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~uc(t,"stretch",0)?Ay(Ze(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return Ze(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,r,o,s,a,l,c){return Mt+r+":"+o+c+(s?Mt+r+"-span:"+(a?l:+l-+o)+c:"")+t});case 4949:if(Zt(t,e+6)===121)return Ze(t,":",":"+ut)+t;break;case 6444:switch(Zt(t,Zt(t,14)===45?18:11)){case 120:return Ze(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ut+(Zt(t,14)===45?"inline-":"")+"box$3$1"+ut+"$2$3$1"+Mt+"$2box$3")+t;case 100:return Ze(t,":",":"+Mt)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Ze(t,"scroll-","scroll-snap-")+t}return t}function qc(t,e){for(var n="",i=0;i<t.length;i++)n+=e(t[i],i,t,e)||"";return n}function ow(t,e,n,i){switch(t.type){case X1:if(t.children.length)break;case j1:case bp:return t.return=t.return||t.value;case xy:return"";case Sy:return t.return=t.value+"{"+qc(t.children,i)+"}";case Eu:if(!_i(t.value=t.props.join(",")))return""}return _i(n=qc(t.children,i))?t.return=t.value+"{"+n+"}":""}function sw(t){var e=wy(t);return function(n,i,r,o){for(var s="",a=0;a<e;a++)s+=t[a](n,i,r,o)||"";return s}}function aw(t){return function(e){e.root||(e=e.return)&&t(e)}}function lw(t,e,n,i){if(t.length>-1&&!t.return)switch(t.type){case bp:t.return=Ay(t.value,t.length,n);return;case Sy:return qc([ar(t,{value:Ze(t.value,"@","@"+ut)})],i);case Eu:if(t.length)return Y1(n=t.props,function(r){switch(Ni(r,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":To(ar(t,{props:[Ze(r,/:(read-\w+)/,":"+xa+"$1")]})),To(ar(t,{props:[r]})),zf(t,{props:Ag(n,i)});break;case"::placeholder":To(ar(t,{props:[Ze(r,/:(plac\w+)/,":"+ut+"input-$1")]})),To(ar(t,{props:[Ze(r,/:(plac\w+)/,":"+xa+"$1")]})),To(ar(t,{props:[Ze(r,/:(plac\w+)/,Mt+"input-$1")]})),To(ar(t,{props:[r]})),zf(t,{props:Ag(n,i)});break}return""})}}var cw={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},In={},As=typeof process<"u"&&In!==void 0&&(In.REACT_APP_SC_ATTR||In.SC_ATTR)||"data-styled",Ry="active",Cy="data-styled-version",Ru="6.1.13",Dp=`/*!sc*/
`,Kc=typeof window<"u"&&"HTMLElement"in window,uw=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&In!==void 0&&In.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&In.REACT_APP_SC_DISABLE_SPEEDY!==""?In.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&In.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&In!==void 0&&In.SC_DISABLE_SPEEDY!==void 0&&In.SC_DISABLE_SPEEDY!==""&&In.SC_DISABLE_SPEEDY!=="false"&&In.SC_DISABLE_SPEEDY),Cu=Object.freeze([]),Rs=Object.freeze({});function dw(t,e,n){return n===void 0&&(n=Rs),t.theme!==n.theme&&t.theme||e||n.theme}var Py=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),fw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,hw=/(^-|-$)/g;function Pg(t){return t.replace(fw,"-").replace(hw,"")}var pw=/(a)(d)/gi,El=52,bg=function(t){return String.fromCharCode(t+(t>25?39:97))};function Vf(t){var e,n="";for(e=Math.abs(t);e>El;e=e/El|0)n=bg(e%El)+n;return(bg(e%El)+n).replace(pw,"$1-$2")}var hd,by=5381,is=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},Ly=function(t){return is(by,t)};function mw(t){return Vf(Ly(t)>>>0)}function gw(t){return t.displayName||t.name||"Component"}function pd(t){return typeof t=="string"&&!0}var Dy=typeof Symbol=="function"&&Symbol.for,Iy=Dy?Symbol.for("react.memo"):60115,vw=Dy?Symbol.for("react.forward_ref"):60112,_w={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},yw={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ny={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},xw=((hd={})[vw]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},hd[Iy]=Ny,hd);function Lg(t){return("type"in(e=t)&&e.type.$$typeof)===Iy?Ny:"$$typeof"in t?xw[t.$$typeof]:_w;var e}var Sw=Object.defineProperty,Mw=Object.getOwnPropertyNames,Dg=Object.getOwnPropertySymbols,Ew=Object.getOwnPropertyDescriptor,ww=Object.getPrototypeOf,Ig=Object.prototype;function Uy(t,e,n){if(typeof e!="string"){if(Ig){var i=ww(e);i&&i!==Ig&&Uy(t,i,n)}var r=Mw(e);Dg&&(r=r.concat(Dg(e)));for(var o=Lg(t),s=Lg(e),a=0;a<r.length;++a){var l=r[a];if(!(l in yw||n&&n[l]||s&&l in s||o&&l in o)){var c=Ew(e,l);try{Sw(t,l,c)}catch{}}}}return t}function Cs(t){return typeof t=="function"}function Ip(t){return typeof t=="object"&&"styledComponentId"in t}function to(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Ng(t,e){if(t.length===0)return"";for(var n=t[0],i=1;i<t.length;i++)n+=t[i];return n}function Wa(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Gf(t,e,n){if(n===void 0&&(n=!1),!n&&!Wa(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var i=0;i<e.length;i++)t[i]=Gf(t[i],e[i]);else if(Wa(e))for(var i in e)t[i]=Gf(t[i],e[i]);return t}function Np(t,e){Object.defineProperty(t,"toString",{value:e})}function Ja(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var Tw=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,i=0;i<e;i++)n+=this.groupSizes[i];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var i=this.groupSizes,r=i.length,o=r;e>=o;)if((o<<=1)<0)throw Ja(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var s=r;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(e+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],i=this.indexOfGroup(e),r=i+n;this.groupSizes[e]=0;for(var o=i;o<r;o++)this.tag.deleteRule(i)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var i=this.groupSizes[e],r=this.indexOfGroup(e),o=r+i,s=r;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(Dp);return n},t}(),hc=new Map,Zc=new Map,pc=1,wl=function(t){if(hc.has(t))return hc.get(t);for(;Zc.has(pc);)pc++;var e=pc++;return hc.set(t,e),Zc.set(e,t),e},Aw=function(t,e){pc=e+1,hc.set(t,e),Zc.set(e,t)},Rw="style[".concat(As,"][").concat(Cy,'="').concat(Ru,'"]'),Cw=new RegExp("^".concat(As,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Pw=function(t,e,n){for(var i,r=n.split(","),o=0,s=r.length;o<s;o++)(i=r[o])&&t.registerName(e,i)},bw=function(t,e){for(var n,i=((n=e.textContent)!==null&&n!==void 0?n:"").split(Dp),r=[],o=0,s=i.length;o<s;o++){var a=i[o].trim();if(a){var l=a.match(Cw);if(l){var c=0|parseInt(l[1],10),u=l[2];c!==0&&(Aw(u,c),Pw(t,u,l[3]),t.getTag().insertRules(c,r)),r.length=0}else r.push(a)}}},Ug=function(t){for(var e=document.querySelectorAll(Rw),n=0,i=e.length;n<i;n++){var r=e[n];r&&r.getAttribute(As)!==Ry&&(bw(t,r),r.parentNode&&r.parentNode.removeChild(r))}};function Lw(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Fy=function(t){var e=document.head,n=t||e,i=document.createElement("style"),r=function(a){var l=Array.from(a.querySelectorAll("style[".concat(As,"]")));return l[l.length-1]}(n),o=r!==void 0?r.nextSibling:null;i.setAttribute(As,Ry),i.setAttribute(Cy,Ru);var s=Lw();return s&&i.setAttribute("nonce",s),n.insertBefore(i,o),i},Dw=function(){function t(e){this.element=Fy(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var i=document.styleSheets,r=0,o=i.length;r<o;r++){var s=i[r];if(s.ownerNode===n)return s}throw Ja(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),Iw=function(){function t(e){this.element=Fy(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var i=document.createTextNode(n);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),Nw=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),Fg=Kc,Uw={isServer:!Kc,useCSSOMInjection:!uw},Oy=function(){function t(e,n,i){e===void 0&&(e=Rs),n===void 0&&(n={});var r=this;this.options=wn(wn({},Uw),e),this.gs=n,this.names=new Map(i),this.server=!!e.isServer,!this.server&&Kc&&Fg&&(Fg=!1,Ug(this)),Np(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",c=function(f){var d=function(h){return Zc.get(h)}(f);if(d===void 0)return"continue";var p=o.names.get(d),g=s.getGroup(f);if(p===void 0||!p.size||g.length===0)return"continue";var y="".concat(As,".g").concat(f,'[id="').concat(d,'"]'),m="";p!==void 0&&p.forEach(function(h){h.length>0&&(m+="".concat(h,","))}),l+="".concat(g).concat(y,'{content:"').concat(m,'"}').concat(Dp)},u=0;u<a;u++)c(u);return l}(r)})}return t.registerId=function(e){return wl(e)},t.prototype.rehydrate=function(){!this.server&&Kc&&Ug(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(wn(wn({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var i=n.useCSSOMInjection,r=n.target;return n.isServer?new Nw(r):i?new Dw(r):new Iw(r)}(this.options),new Tw(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(wl(e),this.names.has(e))this.names.get(e).add(n);else{var i=new Set;i.add(n),this.names.set(e,i)}},t.prototype.insertRules=function(e,n,i){this.registerName(e,n),this.getTag().insertRules(wl(e),i)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(wl(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),Fw=/&/g,Ow=/^\s*\/\/.*$/gm;function ky(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(i){return"".concat(e," ").concat(i)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=ky(n.children,e)),n})}function kw(t){var e,n,i,r=Rs,o=r.options,s=o===void 0?Rs:o,a=r.plugins,l=a===void 0?Cu:a,c=function(d,p,g){return g.startsWith(n)&&g.endsWith(n)&&g.replaceAll(n,"").length>0?".".concat(e):d},u=l.slice();u.push(function(d){d.type===Eu&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(Fw,n).replace(i,c))}),s.prefix&&u.push(lw),u.push(ow);var f=function(d,p,g,y){p===void 0&&(p=""),g===void 0&&(g=""),y===void 0&&(y="&"),e=y,n=p,i=new RegExp("\\".concat(n,"\\b"),"g");var m=d.replace(Ow,""),h=iw(g||p?"".concat(g," ").concat(p," { ").concat(m," }"):m);s.namespace&&(h=ky(h,s.namespace));var v=[];return qc(h,sw(u.concat(aw(function(_){return v.push(_)})))),v};return f.hash=l.length?l.reduce(function(d,p){return p.name||Ja(15),is(d,p.name)},by).toString():"",f}var zw=new Oy,Wf=kw(),zy=Wi.createContext({shouldForwardProp:void 0,styleSheet:zw,stylis:Wf});zy.Consumer;Wi.createContext(void 0);function Og(){return Z.useContext(zy)}var Bw=function(){function t(e,n){var i=this;this.inject=function(r,o){o===void 0&&(o=Wf);var s=i.name+o.hash;r.hasNameForId(i.id,s)||r.insertRules(i.id,s,o(i.rules,s,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Np(this,function(){throw Ja(12,String(i.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Wf),this.name+e.hash},t}(),Hw=function(t){return t>="A"&&t<="Z"};function kg(t){for(var e="",n=0;n<t.length;n++){var i=t[n];if(n===1&&i==="-"&&t[0]==="-")return t;Hw(i)?e+="-"+i.toLowerCase():e+=i}return e.startsWith("ms-")?"-"+e:e}var By=function(t){return t==null||t===!1||t===""},Hy=function(t){var e,n,i=[];for(var r in t){var o=t[r];t.hasOwnProperty(r)&&!By(o)&&(Array.isArray(o)&&o.isCss||Cs(o)?i.push("".concat(kg(r),":"),o,";"):Wa(o)?i.push.apply(i,Yc(Yc(["".concat(r," {")],Hy(o),!1),["}"],!1)):i.push("".concat(kg(r),": ").concat((e=r,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in cw||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return i};function so(t,e,n,i){if(By(t))return[];if(Ip(t))return[".".concat(t.styledComponentId)];if(Cs(t)){if(!Cs(o=t)||o.prototype&&o.prototype.isReactComponent||!e)return[t];var r=t(e);return so(r,e,n,i)}var o;return t instanceof Bw?n?(t.inject(n,i),[t.getName(i)]):[t]:Wa(t)?Hy(t):Array.isArray(t)?Array.prototype.concat.apply(Cu,t.map(function(s){return so(s,e,n,i)})):[t.toString()]}function Vw(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Cs(n)&&!Ip(n))return!1}return!0}var Gw=Ly(Ru),Ww=function(){function t(e,n,i){this.rules=e,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&Vw(e),this.componentId=n,this.baseHash=is(Gw,n),this.baseStyle=i,Oy.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,i){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))r=to(r,this.staticRulesId);else{var o=Ng(so(this.rules,e,n,i)),s=Vf(is(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=i(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}r=to(r,s),this.staticRulesId=s}else{for(var l=is(this.baseHash,i.hash),c="",u=0;u<this.rules.length;u++){var f=this.rules[u];if(typeof f=="string")c+=f;else if(f){var d=Ng(so(f,e,n,i));l=is(l,d+u),c+=d}}if(c){var p=Vf(l>>>0);n.hasNameForId(this.componentId,p)||n.insertRules(this.componentId,p,i(c,".".concat(p),void 0,this.componentId)),r=to(r,p)}}return r},t}(),Vy=Wi.createContext(void 0);Vy.Consumer;var md={};function jw(t,e,n){var i=Ip(t),r=t,o=!pd(t),s=e.attrs,a=s===void 0?Cu:s,l=e.componentId,c=l===void 0?function(S,C){var A=typeof S!="string"?"sc":Pg(S);md[A]=(md[A]||0)+1;var R="".concat(A,"-").concat(mw(Ru+A+md[A]));return C?"".concat(C,"-").concat(R):R}(e.displayName,e.parentComponentId):l,u=e.displayName,f=u===void 0?function(S){return pd(S)?"styled.".concat(S):"Styled(".concat(gw(S),")")}(t):u,d=e.displayName&&e.componentId?"".concat(Pg(e.displayName),"-").concat(e.componentId):e.componentId||c,p=i&&r.attrs?r.attrs.concat(a).filter(Boolean):a,g=e.shouldForwardProp;if(i&&r.shouldForwardProp){var y=r.shouldForwardProp;if(e.shouldForwardProp){var m=e.shouldForwardProp;g=function(S,C){return y(S,C)&&m(S,C)}}else g=y}var h=new Ww(n,d,i?r.componentStyle:void 0);function v(S,C){return function(A,R,E){var T=A.attrs,x=A.componentStyle,b=A.defaultProps,H=A.foldedComponentIds,B=A.styledComponentId,V=A.target,K=Wi.useContext(Vy),$=Og(),oe=A.shouldForwardProp||$.shouldForwardProp,F=dw(R,K,b)||Rs,X=function(ae,he,pe){for(var Ce,Oe=wn(wn({},he),{className:void 0,theme:pe}),je=0;je<ae.length;je+=1){var ft=Cs(Ce=ae[je])?Ce(Oe):Ce;for(var D in ft)Oe[D]=D==="className"?to(Oe[D],ft[D]):D==="style"?wn(wn({},Oe[D]),ft[D]):ft[D]}return he.className&&(Oe.className=to(Oe.className,he.className)),Oe}(T,R,F),Q=X.as||V,de={};for(var Ee in X)X[Ee]===void 0||Ee[0]==="$"||Ee==="as"||Ee==="theme"&&X.theme===F||(Ee==="forwardedAs"?de.as=X.forwardedAs:oe&&!oe(Ee,Q)||(de[Ee]=X[Ee]));var We=function(ae,he){var pe=Og(),Ce=ae.generateAndInjectStyles(he,pe.styleSheet,pe.stylis);return Ce}(x,X),q=to(H,B);return We&&(q+=" "+We),X.className&&(q+=" "+X.className),de[pd(Q)&&!Py.has(Q)?"class":"className"]=q,de.ref=E,Z.createElement(Q,de)}(_,S,C)}v.displayName=f;var _=Wi.forwardRef(v);return _.attrs=p,_.componentStyle=h,_.displayName=f,_.shouldForwardProp=g,_.foldedComponentIds=i?to(r.foldedComponentIds,r.styledComponentId):"",_.styledComponentId=d,_.target=i?r.target:t,Object.defineProperty(_,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=i?function(C){for(var A=[],R=1;R<arguments.length;R++)A[R-1]=arguments[R];for(var E=0,T=A;E<T.length;E++)Gf(C,T[E],!0);return C}({},r.defaultProps,S):S}}),Np(_,function(){return".".concat(_.styledComponentId)}),o&&Uy(_,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),_}function zg(t,e){for(var n=[t[0]],i=0,r=e.length;i<r;i+=1)n.push(e[i],t[i+1]);return n}var Bg=function(t){return Object.assign(t,{isCss:!0})};function Xw(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Cs(t)||Wa(t))return Bg(so(zg(Cu,Yc([t],e,!0))));var i=t;return e.length===0&&i.length===1&&typeof i[0]=="string"?so(i):Bg(so(zg(i,e)))}function jf(t,e,n){if(n===void 0&&(n=Rs),!e)throw Ja(1,e);var i=function(r){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return t(e,n,Xw.apply(void 0,Yc([r],o,!1)))};return i.attrs=function(r){return jf(t,e,wn(wn({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},i.withConfig=function(r){return jf(t,e,wn(wn({},n),r))},i}var Gy=function(t){return jf(jw,t)},Wy=Gy;Py.forEach(function(t){Wy[t]=Gy(t)});var jy={exports:{}},$w="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Yw=$w,qw=Yw;function Xy(){}function $y(){}$y.resetWarningCache=Xy;var Kw=function(){function t(i,r,o,s,a,l){if(l!==qw){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:$y,resetWarningCache:Xy};return n.PropTypes=n,n};jy.exports=Kw();var Zw=jy.exports;const hr=Rh(Zw),Up=({imageUrl:t,width:e,height:n})=>j.jsxs(Qw,{width:e,height:n,children:[j.jsx("div",{className:"glow",children:j.jsx("div",{className:"glow-inner"})}),j.jsx("div",{className:"image-container",children:j.jsx("img",{src:t,alt:"glowing skill"})})]});Up.propTypes={imageUrl:hr.string.isRequired,width:hr.string.isRequired,height:hr.string.isRequired};const Qw=Wy.div`
  position: relative;
  width: ${t=>t.width};
  height: ${t=>t.height};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .glow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-image: linear-gradient(135deg, rgba(186, 66, 255, 0.7), rgba(0, 225, 255, 0.7));
    filter: blur(8px);
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    box-shadow: 0px 0px 20px rgba(186, 66, 255, 0.8), 0px 0px 20px rgba(0, 225, 255, 0.8);
    z-index: 1;
  }

  .glow-inner {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: rgba(36, 36, 36, 0.5);
    filter: blur(10px);
    z-index: 1;
  }

  .image-container {
    position: relative;
    z-index: 2; /* Ensure the image is above the glow */
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  img {
    width: calc(100% - 10px); /* Reduce width by 10px */
    height: calc(100% - 10px); /* Reduce height by 10px */
    object-fit: cover;
    object-position: 70% 30%;
    border-radius: 50%;
  }

  &:hover .glow {
    opacity: 1;
    animation: rotateGlow 1s linear infinite;
  }

  @keyframes rotateGlow {
    to {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 768px) {
    width: calc(${t=>t.width} * 0.6);
    height: calc(${t=>t.height} * 0.6);
  }

  @media (max-width: 375px) {
    width: calc(${t=>t.width} * 0.5);
    height: calc(${t=>t.height} * 0.5);
  }
`,Jw=Object.freeze(Object.defineProperty({__proto__:null,default:Up},Symbol.toStringTag,{value:"Module"})),eT=()=>j.jsx(j.Fragment,{children:j.jsx("div",{className:"HomeComponents",children:j.jsx(Up,{imageUrl:W1,width:"300px",height:"300px"})})}),tT=Z.lazy(()=>xn(()=>Promise.resolve().then(()=>Jw),void 0)),nT=Z.lazy(()=>xn(()=>import("./Skillbar-B6iWoqKT.js"),[])),Fp=Wi.memo(({skills:t})=>{const e=Z.useMemo(()=>t.map((n,i)=>j.jsxs("div",{className:"EachSkill",children:[j.jsx(Z.Suspense,{fallback:j.jsx("div",{children:"Loading..."}),children:j.jsx(tT,{imageUrl:n.image,width:"150px",height:"150px"})}),j.jsx(Z.Suspense,{fallback:j.jsx("div",{children:"Loading skill bar..."}),children:j.jsx(nT,{name:n.name,percentage:n.percentage})})]},i)),[t]);return j.jsx(j.Fragment,{children:e})});Fp.displayName="Skills";Fp.propTypes={skills:hr.arrayOf(hr.shape({name:hr.string.isRequired,percentage:hr.number.isRequired,image:hr.string.isRequired})).isRequired};const gd=Z.lazy(()=>xn(()=>import("./Animatedbutton1-BK9pqj1H.js"),__vite__mapDeps([0,1]))),iT=Z.lazy(()=>xn(()=>import("./AnimatedshareFooter-Bcg3si6J.js"),[])),Op=Wi.memo(()=>{const e=new Date().getFullYear(),n=Z.useMemo(()=>({home:"Home",projects:"Projects",contact:"Contact"}),[]);return j.jsx("div",{className:"Footer",children:j.jsxs("div",{className:"Footer-Container",children:[j.jsx("div",{className:"footer-gap"}),j.jsx("div",{className:"Share",children:j.jsx(Z.Suspense,{fallback:j.jsx("div",{children:"Loading..."}),children:j.jsx(iT,{})})}),j.jsx("div",{className:"Navigate",children:j.jsxs(Z.Suspense,{fallback:j.jsx("div",{children:"Loading..."}),children:[j.jsx(Ar,{to:"/",children:j.jsx(gd,{name:n.home})}),j.jsx(Ar,{to:"/projects",children:j.jsx(gd,{name:n.projects})}),j.jsx(Ar,{to:"/contact",children:j.jsx(gd,{name:n.contact})})]})}),j.jsx("div",{}),j.jsx("div",{children:j.jsxs("p",{children:["© All Rights Reserved ",e]})})]})})});Op.displayName="Footer";const Yy=Object.freeze(Object.defineProperty({__proto__:null,default:Op},Symbol.toStringTag,{value:"Module"})),rT="/assets/Python-BCcQRLXO.jpg",oT="/assets/Javascript-DYVhvBon.jpg",sT="/assets/Html-1n5CwXu0.jpg",aT="/assets/Css-BjOgS8SZ.jpg",lT="/assets/Reactjs-kNPwBAHm.jpg",cT="/assets/Problemsolvingskills-iF3kQzwE.jpg",uT="/assets/Macingelearning-BD_mb0fj.jpg",dT=()=>{const t=[{name:"Python",percentage:85,image:rT},{name:"Javascript",percentage:70,image:oT},{name:"Html",percentage:75,image:sT},{name:"Css",percentage:80,image:aT},{name:"React",percentage:85,image:lT},{name:"Problem solvings kills",percentage:90,image:cT},{name:"Machin learning",percentage:65,image:uT}];return j.jsxs(j.Fragment,{children:[j.jsx(Pp,{}),j.jsx("div",{className:"scrollable-container",children:j.jsxs("div",{className:"Main-div",children:[j.jsxs("div",{className:"about",children:[j.jsx(G1,{}),j.jsx(eT,{})]}),j.jsx("div",{className:"skills",children:j.jsx(Fp,{skills:t})}),j.jsx("div",{}),j.jsx("div",{className:"space block"}),j.jsx(Op,{})]})})]})};function fT(){return j.jsxs("h1",{className:"flex justify-center items-center h-screen bg-gray-100",children:["Error 404 Not Found",j.jsx(Ar,{to:"/",children:"Go to Home"})]})}const hT=Z.lazy(()=>xn(()=>Promise.resolve().then(()=>yy),void 0)),pT=Z.lazy(()=>xn(()=>import("./AnimatedDownloadResumecard-V6DG9CAY.js"),[])),mT=Z.lazy(()=>xn(()=>Promise.resolve().then(()=>Yy),void 0)),gT=Z.lazy(()=>xn(()=>import("./AnimatedContactForm-DFwh02VM.js"),[])),vT=Z.lazy(()=>xn(()=>import("./AnimatedShareiconsincontact-CEeU6_2c.js"),[])),_T=()=>j.jsxs("div",{children:[j.jsx(Z.Suspense,{fallback:j.jsx("div",{children:"Navbar is loading"}),children:j.jsx(hT,{})}),j.jsx("div",{className:"scrollable-container",children:j.jsxs("div",{className:"Main-div",children:[j.jsx("div",{className:"Contact-resume-div",children:j.jsxs(Z.Suspense,{fallback:j.jsx("div",{children:"Loading to resume to download"}),children:[j.jsx(pT,{})," "]})}),j.jsx("div",{className:"All-share-icons-div",children:j.jsx("div",{children:j.jsx(Z.Suspense,{fallback:j.jsx("div",{children:"Loading"}),children:j.jsx(vT,{})})})}),j.jsx("div",{className:"Contact-form-div",children:j.jsx(Z.Suspense,{fallback:j.jsx("div",{children:"Form is loading"}),children:j.jsx(gT,{})})}),j.jsx("div",{className:"footer",children:j.jsx(Z.Suspense,{fallback:j.jsx("div",{children:"Loading Footer"}),children:j.jsx(mT,{})})})]})})]}),yT=[{Title:"Audio forgery alert uncovering artificial inteligence with deepfake detection.",Description:"This project is a deep learning model that can detect whether the given audio is generated by  AI or not. It uses a combination of convolutional neural networks and recurrent neural networks to classify the audio",Deploymentlink:""},{Title:"AI-powered chatbot for customer support",Description:"This project is a chatbot that uses natural language processing to understand customer queries and respond accordingly",Deploymentlink:""}],xT=[{Title:"Currency Converter",Description:"A web-based application that allows users to convert one currency to another. The app fetches real-time exchange rates and provides accurate conversions based on user input.",Deploymentlink:"https://transcendent-sopapillas-198ed8.netlify.app/"},{Title:"Tic-Tac-Toe Game",Description:"A classic Tic-Tac-Toe game developed using HTML, CSS, and JavaScript. It allows two players to take turns marking the spaces in a 3×3 grid, aiming to get three in a row.",Deploymentlink:"https://extraordinary-custard-b52b0b.netlify.app/"},{Title:"Rock-Paper-Scissor",Description:"A fun Rock-Paper-Scissor game where the user plays against the computer. The game randomly selects an option for the computer, and the winner is determined based on the rules of the game.",Deploymentlink:"https://lokesh95159.netlify.app/"}],ST=Z.lazy(()=>xn(()=>Promise.resolve().then(()=>yy),void 0)),MT=Z.lazy(()=>xn(()=>import("./AnimatedCard1-BA4Qk6Cl.js"),[])),ET=Z.lazy(()=>xn(()=>import("./AnimatedCard2-B5O1hCXs.js"),[])),wT=Z.lazy(()=>xn(()=>Promise.resolve().then(()=>Yy),void 0)),TT=()=>j.jsxs("div",{children:[j.jsx(Z.Suspense,{fallback:j.jsx("div",{children:"Navbar is Loading..."}),children:j.jsx(ST,{})}),j.jsx("div",{className:"scrollable-container",children:j.jsxs("div",{className:"Main-div",children:[j.jsxs("div",{className:"Projects",children:[j.jsx("div",{className:"Major-projects-Title",children:j.jsx("h1",{children:"Major Projects"})}),j.jsx("div",{className:"Major-projects",children:yT.map((t,e)=>j.jsx(Z.Suspense,{fallback:j.jsx("div",{children:"Project is loading..."}),children:j.jsx(ET,{Title:t.Title,Description:t.Description,Deploymentlink:t.Deploymentlink})},e))}),j.jsx("div",{className:"Mini-projects-Title",children:j.jsx("h1",{children:"Mini Projects"})}),j.jsx("div",{className:"Mini-projects",children:xT.map((t,e)=>j.jsx(Z.Suspense,{fallback:j.jsx("div",{children:"Project is loading..."}),children:j.jsx(MT,{Title:t.Title,Description:t.Description,Deploymentlink:t.Deploymentlink})},e))})]}),j.jsx("div",{className:"footer",children:j.jsx(Z.Suspense,{fallback:j.jsx("div",{children:"Footer is loading...."}),children:j.jsx(wT,{})})})]})})]}),AT=()=>{const t=Z.useRef(null);return Z.useEffect(()=>{const n=t.current.querySelectorAll("li"),i=r=>{const{clientX:o,clientY:s}=r,a=window.innerWidth/2,l=window.innerHeight/2;n.forEach((c,u)=>{const f=(u+1)*.01,d=(o-a)*f,p=(s-l)*f;c.style.transform=`translate(${d}px, ${p}px)`})};return window.addEventListener("mousemove",i),()=>{window.removeEventListener("mousemove",i)}},[]),j.jsx("div",{className:"h-screen bg-black overflow-hidden relative",children:j.jsx("div",{ref:t,className:"absolute inset-0 z-0",children:j.jsx("ul",{className:"relative",children:Array.from({length:100}).map((e,n)=>{const i=Math.random()*4+1,r=Math.random()*100,o=Math.random()*100,s=Math.random()*5;return j.jsx("li",{className:"absolute star",style:{width:`${i}px`,height:`${i}px`,top:`${r}vh`,left:`${o}vw`,animationDelay:`${s}s`},children:j.jsx("div",{className:"star-glow",children:j.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"white",className:"w-full h-full",children:j.jsx("path",{fillRule:"evenodd",d:"M12 2.25l2.35 6.5h6.84L15.3 12.4l2.4 6.55-5.7-4.15-5.7 4.15 2.4-6.55-5.9-3.65h6.9l2.35-6.5z",clipRule:"evenodd"})})})},n)})})})})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kp="168",fs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},rs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},RT=0,Hg=1,CT=2,qy=1,PT=2,Di=3,Lr=0,Cn=1,Fi=2,Rr=0,hs=1,Xf=2,Vg=3,Gg=4,bT=5,qr=100,LT=101,DT=102,IT=103,NT=104,UT=200,FT=201,OT=202,kT=203,$f=204,Yf=205,zT=206,BT=207,HT=208,VT=209,GT=210,WT=211,jT=212,XT=213,$T=214,YT=0,qT=1,KT=2,Qc=3,ZT=4,QT=5,JT=6,eA=7,Ky=0,tA=1,nA=2,Cr=0,iA=1,rA=2,oA=3,sA=4,aA=5,lA=6,cA=7,Zy=300,Ps=301,bs=302,qf=303,Kf=304,Pu=306,Zf=1e3,zi=1001,Qf=1002,Jt=1003,uA=1004,Tl=1005,ci=1006,vd=1007,no=1008,qi=1009,Qy=1010,Jy=1011,ja=1012,zp=1013,po=1014,ui=1015,zs=1016,Bp=1017,Hp=1018,Ls=1020,ex=35902,tx=1021,nx=1022,kn=1023,ix=1024,rx=1025,ps=1026,Ds=1027,ox=1028,Vp=1029,sx=1030,Gp=1031,Wp=1033,mc=33776,gc=33777,vc=33778,_c=33779,Jf=35840,eh=35841,th=35842,nh=35843,ih=36196,rh=37492,oh=37496,sh=37808,ah=37809,lh=37810,ch=37811,uh=37812,dh=37813,fh=37814,hh=37815,ph=37816,mh=37817,gh=37818,vh=37819,_h=37820,yh=37821,yc=36492,xh=36494,Sh=36495,ax=36283,Mh=36284,Eh=36285,wh=36286,dA=3200,fA=3201,hA=0,pA=1,pr="",vi="srgb",Or="srgb-linear",jp="display-p3",bu="display-p3-linear",Jc="linear",Et="srgb",eu="rec709",tu="p3",Ao=7680,Wg=519,mA=512,gA=513,vA=514,lx=515,_A=516,yA=517,xA=518,SA=519,jg=35044,Xg="300 es",Bi=2e3,nu=2001;class xo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $g=1234567;const Sa=Math.PI/180,Xa=180/Math.PI;function Bs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(an[t&255]+an[t>>8&255]+an[t>>16&255]+an[t>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[n&63|128]+an[n>>8&255]+"-"+an[n>>16&255]+an[n>>24&255]+an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]).toLowerCase()}function un(t,e,n){return Math.max(e,Math.min(n,t))}function Xp(t,e){return(t%e+e)%e}function MA(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function EA(t,e,n){return t!==e?(n-t)/(e-t):0}function Ma(t,e,n){return(1-n)*t+n*e}function wA(t,e,n,i){return Ma(t,e,1-Math.exp(-n*i))}function TA(t,e=1){return e-Math.abs(Xp(t,e*2)-e)}function AA(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function RA(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function CA(t,e){return t+Math.floor(Math.random()*(e-t+1))}function PA(t,e){return t+Math.random()*(e-t)}function bA(t){return t*(.5-Math.random())}function LA(t){t!==void 0&&($g=t);let e=$g+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function DA(t){return t*Sa}function IA(t){return t*Xa}function NA(t){return(t&t-1)===0&&t!==0}function UA(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function FA(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function OA(t,e,n,i,r){const o=Math.cos,s=Math.sin,a=o(n/2),l=s(n/2),c=o((e+i)/2),u=s((e+i)/2),f=o((e-i)/2),d=s((e-i)/2),p=o((i-e)/2),g=s((i-e)/2);switch(r){case"XYX":t.set(a*u,l*f,l*d,a*c);break;case"YZY":t.set(l*d,a*u,l*f,a*c);break;case"ZXZ":t.set(l*f,l*d,a*u,a*c);break;case"XZX":t.set(a*u,l*g,l*p,a*c);break;case"YXY":t.set(l*p,a*u,l*g,a*c);break;case"ZYZ":t.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Go(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function fn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const cx={DEG2RAD:Sa,RAD2DEG:Xa,generateUUID:Bs,clamp:un,euclideanModulo:Xp,mapLinear:MA,inverseLerp:EA,lerp:Ma,damp:wA,pingpong:TA,smoothstep:AA,smootherstep:RA,randInt:CA,randFloat:PA,randFloatSpread:bA,seededRandom:LA,degToRad:DA,radToDeg:IA,isPowerOfTwo:NA,ceilPowerOfTwo:UA,floorPowerOfTwo:FA,setQuaternionFromProperEuler:OA,normalize:fn,denormalize:Go};class Ve{constructor(e=0,n=0){Ve.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(un(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(e,n,i,r,o,s,a,l,c){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,c)}set(e,n,i,r,o,s,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=o,u[5]=l,u[6]=i,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],g=i[8],y=r[0],m=r[3],h=r[6],v=r[1],_=r[4],S=r[7],C=r[2],A=r[5],R=r[8];return o[0]=s*y+a*v+l*C,o[3]=s*m+a*_+l*A,o[6]=s*h+a*S+l*R,o[1]=c*y+u*v+f*C,o[4]=c*m+u*_+f*A,o[7]=c*h+u*S+f*R,o[2]=d*y+p*v+g*C,o[5]=d*m+p*_+g*A,o[8]=d*h+p*S+g*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*s*u-n*a*c-i*o*u+i*a*l+r*o*c-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*s-a*c,d=a*l-u*o,p=c*o-s*l,g=n*f+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=f*y,e[1]=(r*c-u*i)*y,e[2]=(a*i-r*s)*y,e[3]=d*y,e[4]=(u*n-r*l)*y,e[5]=(r*o-a*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(s*n-i*o)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),c=Math.sin(o);return this.set(i*l,i*c,-i*(l*s+c*a)+s+e,-r*c,r*l,-r*(-c*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(_d.makeScale(e,n)),this}rotate(e){return this.premultiply(_d.makeRotation(-e)),this}translate(e,n){return this.premultiply(_d.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _d=new Qe;function ux(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function iu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function kA(){const t=iu("canvas");return t.style.display="block",t}const Yg={};function Ea(t){t in Yg||(Yg[t]=!0,console.warn(t))}function zA(t,e,n){return new Promise(function(i,r){function o(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(o,n);break;default:i()}}setTimeout(o,n)})}const qg=new Qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Kg=new Qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Js={[Or]:{transfer:Jc,primaries:eu,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[vi]:{transfer:Et,primaries:eu,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[bu]:{transfer:Jc,primaries:tu,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Kg),fromReference:t=>t.applyMatrix3(qg)},[jp]:{transfer:Et,primaries:tu,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Kg),fromReference:t=>t.applyMatrix3(qg).convertLinearToSRGB()}},BA=new Set([Or,bu]),dt={enabled:!0,_workingColorSpace:Or,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!BA.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Js[e].toReference,r=Js[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Js[t].primaries},getTransfer:function(t){return t===pr?Jc:Js[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Js[e].luminanceCoefficients)}};function ms(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function yd(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ro;class HA{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ro===void 0&&(Ro=iu("canvas")),Ro.width=e.width,Ro.height=e.height;const i=Ro.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ro}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=iu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=ms(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ms(n[i]/255)*255):n[i]=ms(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let VA=0;class dx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:VA++}),this.uuid=Bs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(xd(r[s].image)):o.push(xd(r[s]))}else o=xd(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function xd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?HA.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let GA=0;class vn extends xo{constructor(e=vn.DEFAULT_IMAGE,n=vn.DEFAULT_MAPPING,i=zi,r=zi,o=ci,s=no,a=kn,l=qi,c=vn.DEFAULT_ANISOTROPY,u=pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:GA++}),this.uuid=Bs(),this.name="",this.source=new dx(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zf:e.x=e.x-Math.floor(e.x);break;case zi:e.x=e.x<0?0:1;break;case Qf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zf:e.y=e.y-Math.floor(e.y);break;case zi:e.y=e.y<0?0:1;break;case Qf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=Zy;vn.DEFAULT_ANISOTROPY=1;class Qt{constructor(e=0,n=0,i=0,r=1){Qt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],g=l[9],y=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,S=(p+1)/2,C=(h+1)/2,A=(u+d)/4,R=(f+y)/4,E=(g+m)/4;return _>S&&_>C?_<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(_),r=A/i,o=R/i):S>C?S<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(S),i=A/r,o=E/r):C<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(C),i=R/o,r=E/o),this.set(i,r,o,n),this}let v=Math.sqrt((m-g)*(m-g)+(f-y)*(f-y)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-y)/v,this.z=(d-u)/v,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class WA extends xo{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Qt(0,0,e,n),this.scissorTest=!1,this.viewport=new Qt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new vn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new dx(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dr extends WA{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class fx extends vn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class jA extends vn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=o[s+0],p=o[s+1],g=o[s+2],y=o[s+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=g,e[n+3]=y;return}if(f!==y||l!==d||c!==p||u!==g){let m=1-a;const h=l*d+c*p+u*g+f*y,v=h>=0?1:-1,_=1-h*h;if(_>Number.EPSILON){const C=Math.sqrt(_),A=Math.atan2(C,h*v);m=Math.sin(m*A)/C,a=Math.sin(a*A)/C}const S=a*v;if(l=l*m+d*S,c=c*m+p*S,u=u*m+g*S,f=f*m+y*S,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=o[s],d=o[s+1],p=o[s+2],g=o[s+3];return e[n]=a*g+u*f+l*p-c*d,e[n+1]=l*g+u*d+c*f-a*p,e[n+2]=c*g+u*p+a*d-l*f,e[n+3]=u*g-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(o/2),d=l(i/2),p=l(r/2),g=l(o/2);switch(s){case"XYZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"YXZ":this._x=d*u*f+c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"ZXY":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f-d*p*g;break;case"ZYX":this._x=d*u*f-c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f+d*p*g;break;case"YZX":this._x=d*u*f+c*p*g,this._y=c*p*f+d*u*g,this._z=c*u*g-d*p*f,this._w=c*u*f-d*p*g;break;case"XZY":this._x=d*u*f-c*p*g,this._y=c*p*f-d*u*g,this._z=c*u*g+d*p*f,this._w=c*u*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(o-c)*p,this._z=(s-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(o+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(o-c)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(s-r)/p,this._x=(o+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(un(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+s*a+r*c-o*l,this._y=r*u+s*l+o*a-i*c,this._z=o*u+s*c+i*l-r*a,this._w=s*u-i*a-r*l-o*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*s+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*o+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=s*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=o*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(n),o*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,n=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Zg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Zg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,c=2*(s*r-a*i),u=2*(a*n-o*r),f=2*(o*i-s*n);return this.x=n+l*c+s*f-a*u,this.y=i+l*u+a*c-o*f,this.z=r+l*f+o*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Sd.copy(this).projectOnVector(e),this.sub(Sd)}reflect(e){return this.sub(Sd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(un(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sd=new G,Zg=new mo;class el{constructor(e=new G(1/0,1/0,1/0),n=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ni.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ni.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ni.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,ni):ni.fromBufferAttribute(o,s),ni.applyMatrix4(e.matrixWorld),this.expandByPoint(ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Al.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Al.copy(i.boundingBox)),Al.applyMatrix4(e.matrixWorld),this.union(Al)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ni),ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ea),Rl.subVectors(this.max,ea),Co.subVectors(e.a,ea),Po.subVectors(e.b,ea),bo.subVectors(e.c,ea),er.subVectors(Po,Co),tr.subVectors(bo,Po),zr.subVectors(Co,bo);let n=[0,-er.z,er.y,0,-tr.z,tr.y,0,-zr.z,zr.y,er.z,0,-er.x,tr.z,0,-tr.x,zr.z,0,-zr.x,-er.y,er.x,0,-tr.y,tr.x,0,-zr.y,zr.x,0];return!Md(n,Co,Po,bo,Rl)||(n=[1,0,0,0,1,0,0,0,1],!Md(n,Co,Po,bo,Rl))?!1:(Cl.crossVectors(er,tr),n=[Cl.x,Cl.y,Cl.z],Md(n,Co,Po,bo,Rl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ri=[new G,new G,new G,new G,new G,new G,new G,new G],ni=new G,Al=new el,Co=new G,Po=new G,bo=new G,er=new G,tr=new G,zr=new G,ea=new G,Rl=new G,Cl=new G,Br=new G;function Md(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){Br.fromArray(t,o);const a=r.x*Math.abs(Br.x)+r.y*Math.abs(Br.y)+r.z*Math.abs(Br.z),l=e.dot(Br),c=n.dot(Br),u=i.dot(Br);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const XA=new el,ta=new G,Ed=new G;class Lu{constructor(e=new G,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):XA.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ta.subVectors(e,this.center);const n=ta.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ta,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ed.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ta.copy(e.center).add(Ed)),this.expandByPoint(ta.copy(e.center).sub(Ed))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ci=new G,wd=new G,Pl=new G,nr=new G,Td=new G,bl=new G,Ad=new G;class $p{constructor(e=new G,n=new G(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ci.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,n),Ci.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){wd.copy(e).add(n).multiplyScalar(.5),Pl.copy(n).sub(e).normalize(),nr.copy(this.origin).sub(wd);const o=e.distanceTo(n)*.5,s=-this.direction.dot(Pl),a=nr.dot(this.direction),l=-nr.dot(Pl),c=nr.lengthSq(),u=Math.abs(1-s*s);let f,d,p,g;if(u>0)if(f=s*l-a,d=s*a-l,g=o*u,f>=0)if(d>=-g)if(d<=g){const y=1/u;f*=y,d*=y,p=f*(f+s*d+2*a)+d*(s*f+d+2*l)+c}else d=o,f=Math.max(0,-(s*d+a)),p=-f*f+d*(d+2*l)+c;else d=-o,f=Math.max(0,-(s*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-s*o+a)),d=f>0?-o:Math.min(Math.max(-o,-l),o),p=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-o,-l),o),p=d*(d+2*l)+c):(f=Math.max(0,-(s*o+a)),d=f>0?o:Math.min(Math.max(-o,-l),o),p=-f*f+d*(d+2*l)+c);else d=s>0?-o:o,f=Math.max(0,-(s*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(wd).addScaledVector(Pl,d),p}intersectSphere(e,n){Ci.subVectors(e.center,this.origin);const i=Ci.dot(this.direction),r=Ci.dot(Ci)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(o=(e.min.y-d.y)*u,s=(e.max.y-d.y)*u):(o=(e.max.y-d.y)*u,s=(e.min.y-d.y)*u),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,n,i,r,o){Td.subVectors(n,e),bl.subVectors(i,e),Ad.crossVectors(Td,bl);let s=this.direction.dot(Ad),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;nr.subVectors(this.origin,e);const l=a*this.direction.dot(bl.crossVectors(nr,bl));if(l<0)return null;const c=a*this.direction.dot(Td.cross(nr));if(c<0||l+c>s)return null;const u=-a*nr.dot(Ad);return u<0?null:this.at(u/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ht{constructor(e,n,i,r,o,s,a,l,c,u,f,d,p,g,y,m){Ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,c,u,f,d,p,g,y,m)}set(e,n,i,r,o,s,a,l,c,u,f,d,p,g,y,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=o,h[5]=s,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=g,h[11]=y,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ht().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Lo.setFromMatrixColumn(e,0).length(),o=1/Lo.setFromMatrixColumn(e,1).length(),s=1/Lo.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(o),f=Math.sin(o);if(e.order==="XYZ"){const d=s*u,p=s*f,g=a*u,y=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+g*c,n[5]=d-y*c,n[9]=-a*l,n[2]=y-d*c,n[6]=g+p*c,n[10]=s*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,g=c*u,y=c*f;n[0]=d+y*a,n[4]=g*a-p,n[8]=s*c,n[1]=s*f,n[5]=s*u,n[9]=-a,n[2]=p*a-g,n[6]=y+d*a,n[10]=s*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,g=c*u,y=c*f;n[0]=d-y*a,n[4]=-s*f,n[8]=g+p*a,n[1]=p+g*a,n[5]=s*u,n[9]=y-d*a,n[2]=-s*c,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const d=s*u,p=s*f,g=a*u,y=a*f;n[0]=l*u,n[4]=g*c-p,n[8]=d*c+y,n[1]=l*f,n[5]=y*c+d,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const d=s*l,p=s*c,g=a*l,y=a*c;n[0]=l*u,n[4]=y-d*f,n[8]=g*f+p,n[1]=f,n[5]=s*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+g,n[10]=d-y*f}else if(e.order==="XZY"){const d=s*l,p=s*c,g=a*l,y=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+y,n[5]=s*u,n[9]=p*f-g,n[2]=g*f-p,n[6]=a*u,n[10]=y*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose($A,e,YA)}lookAt(e,n,i){const r=this.elements;return Ln.subVectors(e,n),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),ir.crossVectors(i,Ln),ir.lengthSq()===0&&(Math.abs(i.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),ir.crossVectors(i,Ln)),ir.normalize(),Ll.crossVectors(Ln,ir),r[0]=ir.x,r[4]=Ll.x,r[8]=Ln.x,r[1]=ir.y,r[5]=Ll.y,r[9]=Ln.y,r[2]=ir.z,r[6]=Ll.z,r[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],g=i[2],y=i[6],m=i[10],h=i[14],v=i[3],_=i[7],S=i[11],C=i[15],A=r[0],R=r[4],E=r[8],T=r[12],x=r[1],b=r[5],H=r[9],B=r[13],V=r[2],K=r[6],$=r[10],oe=r[14],F=r[3],X=r[7],Q=r[11],de=r[15];return o[0]=s*A+a*x+l*V+c*F,o[4]=s*R+a*b+l*K+c*X,o[8]=s*E+a*H+l*$+c*Q,o[12]=s*T+a*B+l*oe+c*de,o[1]=u*A+f*x+d*V+p*F,o[5]=u*R+f*b+d*K+p*X,o[9]=u*E+f*H+d*$+p*Q,o[13]=u*T+f*B+d*oe+p*de,o[2]=g*A+y*x+m*V+h*F,o[6]=g*R+y*b+m*K+h*X,o[10]=g*E+y*H+m*$+h*Q,o[14]=g*T+y*B+m*oe+h*de,o[3]=v*A+_*x+S*V+C*F,o[7]=v*R+_*b+S*K+C*X,o[11]=v*E+_*H+S*$+C*Q,o[15]=v*T+_*B+S*oe+C*de,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],g=e[3],y=e[7],m=e[11],h=e[15];return g*(+o*l*f-r*c*f-o*a*d+i*c*d+r*a*p-i*l*p)+y*(+n*l*p-n*c*d+o*s*d-r*s*p+r*c*u-o*l*u)+m*(+n*c*f-n*a*p-o*s*f+i*s*p+o*a*u-i*c*u)+h*(-r*a*u-n*l*f+n*a*d+r*s*f-i*s*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],g=e[12],y=e[13],m=e[14],h=e[15],v=f*m*c-y*d*c+y*l*p-a*m*p-f*l*h+a*d*h,_=g*d*c-u*m*c-g*l*p+s*m*p+u*l*h-s*d*h,S=u*y*c-g*f*c+g*a*p-s*y*p-u*a*h+s*f*h,C=g*f*l-u*y*l-g*a*d+s*y*d+u*a*m-s*f*m,A=n*v+i*_+r*S+o*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=v*R,e[1]=(y*d*o-f*m*o-y*r*p+i*m*p+f*r*h-i*d*h)*R,e[2]=(a*m*o-y*l*o+y*r*c-i*m*c-a*r*h+i*l*h)*R,e[3]=(f*l*o-a*d*o-f*r*c+i*d*c+a*r*p-i*l*p)*R,e[4]=_*R,e[5]=(u*m*o-g*d*o+g*r*p-n*m*p-u*r*h+n*d*h)*R,e[6]=(g*l*o-s*m*o-g*r*c+n*m*c+s*r*h-n*l*h)*R,e[7]=(s*d*o-u*l*o+u*r*c-n*d*c-s*r*p+n*l*p)*R,e[8]=S*R,e[9]=(g*f*o-u*y*o-g*i*p+n*y*p+u*i*h-n*f*h)*R,e[10]=(s*y*o-g*a*o+g*i*c-n*y*c-s*i*h+n*a*h)*R,e[11]=(u*a*o-s*f*o-u*i*c+n*f*c+s*i*p-n*a*p)*R,e[12]=C*R,e[13]=(u*y*r-g*f*r+g*i*d-n*y*d-u*i*m+n*f*m)*R,e[14]=(g*a*r-s*y*r-g*i*l+n*y*l+s*i*m-n*a*m)*R,e[15]=(s*f*r-u*a*r+u*i*l-n*f*l-s*i*d+n*a*d)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,c=o*s,u=o*a;return this.set(c*s+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*s,0,c*l-r*a,u*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,c=o+o,u=s+s,f=a+a,d=o*c,p=o*u,g=o*f,y=s*u,m=s*f,h=a*f,v=l*c,_=l*u,S=l*f,C=i.x,A=i.y,R=i.z;return r[0]=(1-(y+h))*C,r[1]=(p+S)*C,r[2]=(g-_)*C,r[3]=0,r[4]=(p-S)*A,r[5]=(1-(d+h))*A,r[6]=(m+v)*A,r[7]=0,r[8]=(g+_)*R,r[9]=(m-v)*R,r[10]=(1-(d+y))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=Lo.set(r[0],r[1],r[2]).length();const s=Lo.set(r[4],r[5],r[6]).length(),a=Lo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],ii.copy(this);const c=1/o,u=1/s,f=1/a;return ii.elements[0]*=c,ii.elements[1]*=c,ii.elements[2]*=c,ii.elements[4]*=u,ii.elements[5]*=u,ii.elements[6]*=u,ii.elements[8]*=f,ii.elements[9]*=f,ii.elements[10]*=f,n.setFromRotationMatrix(ii),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s,a=Bi){const l=this.elements,c=2*o/(n-e),u=2*o/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let p,g;if(a===Bi)p=-(s+o)/(s-o),g=-2*s*o/(s-o);else if(a===nu)p=-s/(s-o),g=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=Bi){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(s-o),d=(n+e)*c,p=(i+r)*u;let g,y;if(a===Bi)g=(s+o)*f,y=-2*f;else if(a===nu)g=o*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Lo=new G,ii=new Ht,$A=new G(0,0,0),YA=new G(1,1,1),ir=new G,Ll=new G,Ln=new G,Qg=new Ht,Jg=new mo;class Ki{constructor(e=0,n=0,i=0,r=Ki.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(un(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-un(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(un(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-un(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(un(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-un(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Qg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Jg.setFromEuler(this),this.setFromQuaternion(Jg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ki.DEFAULT_ORDER="XYZ";class hx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qA=0;const ev=new G,Do=new mo,Pi=new Ht,Dl=new G,na=new G,KA=new G,ZA=new mo,tv=new G(1,0,0),nv=new G(0,1,0),iv=new G(0,0,1),rv={type:"added"},QA={type:"removed"},Io={type:"childadded",child:null},Rd={type:"childremoved",child:null};class Pn extends xo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qA++}),this.uuid=Bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pn.DEFAULT_UP.clone();const e=new G,n=new Ki,i=new mo,r=new G(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ht},normalMatrix:{value:new Qe}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=Pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Do.setFromAxisAngle(e,n),this.quaternion.multiply(Do),this}rotateOnWorldAxis(e,n){return Do.setFromAxisAngle(e,n),this.quaternion.premultiply(Do),this}rotateX(e){return this.rotateOnAxis(tv,e)}rotateY(e){return this.rotateOnAxis(nv,e)}rotateZ(e){return this.rotateOnAxis(iv,e)}translateOnAxis(e,n){return ev.copy(e).applyQuaternion(this.quaternion),this.position.add(ev.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(tv,e)}translateY(e){return this.translateOnAxis(nv,e)}translateZ(e){return this.translateOnAxis(iv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Dl.copy(e):Dl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),na.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(na,Dl,this.up):Pi.lookAt(Dl,na,this.up),this.quaternion.setFromRotationMatrix(Pi),r&&(Pi.extractRotation(r.matrixWorld),Do.setFromRotationMatrix(Pi),this.quaternion.premultiply(Do.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rv),Io.child=e,this.dispatchEvent(Io),Io.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(QA),Rd.child=e,this.dispatchEvent(Rd),Rd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rv),Io.child=e,this.dispatchEvent(Io),Io.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,e,KA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,ZA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];o(e.shapes,f)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),f=s(e.shapes),d=s(e.skeletons),p=s(e.animations),g=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function s(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Pn.DEFAULT_UP=new G(0,1,0);Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ri=new G,bi=new G,Cd=new G,Li=new G,No=new G,Uo=new G,ov=new G,Pd=new G,bd=new G,Ld=new G;class Si{constructor(e=new G,n=new G,i=new G){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ri.subVectors(e,n),r.cross(ri);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){ri.subVectors(r,n),bi.subVectors(i,n),Cd.subVectors(e,n);const s=ri.dot(ri),a=ri.dot(bi),l=ri.dot(Cd),c=bi.dot(bi),u=bi.dot(Cd),f=s*c-a*a;if(f===0)return o.set(0,0,0),null;const d=1/f,p=(c*l-a*u)*d,g=(s*u-a*l)*d;return o.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,Li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Li.x),l.addScaledVector(s,Li.y),l.addScaledVector(a,Li.z),l)}static isFrontFacing(e,n,i,r){return ri.subVectors(i,n),bi.subVectors(e,n),ri.cross(bi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ri.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),ri.cross(bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Si.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,o){return Si.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return Si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;No.subVectors(r,i),Uo.subVectors(o,i),Pd.subVectors(e,i);const l=No.dot(Pd),c=Uo.dot(Pd);if(l<=0&&c<=0)return n.copy(i);bd.subVectors(e,r);const u=No.dot(bd),f=Uo.dot(bd);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return s=l/(l-u),n.copy(i).addScaledVector(No,s);Ld.subVectors(e,o);const p=No.dot(Ld),g=Uo.dot(Ld);if(g>=0&&p<=g)return n.copy(o);const y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Uo,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return ov.subVectors(o,r),a=(f-u)/(f-u+(p-g)),n.copy(r).addScaledVector(ov,a);const h=1/(m+y+d);return s=y*h,a=d*h,n.copy(i).addScaledVector(No,s).addScaledVector(Uo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const px={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rr={h:0,s:0,l:0},Il={h:0,s:0,l:0};function Dd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ct{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=vi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=dt.workingColorSpace){return this.r=e,this.g=n,this.b=i,dt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=dt.workingColorSpace){if(e=Xp(e,1),n=un(n,0,1),i=un(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=Dd(s,o,e+1/3),this.g=Dd(s,o,e),this.b=Dd(s,o,e-1/3)}return dt.toWorkingColorSpace(this,r),this}setStyle(e,n=vi){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=vi){const i=px[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ms(e.r),this.g=ms(e.g),this.b=ms(e.b),this}copyLinearToSRGB(e){return this.r=yd(e.r),this.g=yd(e.g),this.b=yd(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vi){return dt.fromWorkingColorSpace(ln.copy(this),e),Math.round(un(ln.r*255,0,255))*65536+Math.round(un(ln.g*255,0,255))*256+Math.round(un(ln.b*255,0,255))}getHexString(e=vi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=dt.workingColorSpace){dt.fromWorkingColorSpace(ln.copy(this),n);const i=ln.r,r=ln.g,o=ln.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,c;const u=(a+s)/2;if(a===s)l=0,c=0;else{const f=s-a;switch(c=u<=.5?f/(s+a):f/(2-s-a),s){case i:l=(r-o)/f+(r<o?6:0);break;case r:l=(o-i)/f+2;break;case o:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=dt.workingColorSpace){return dt.fromWorkingColorSpace(ln.copy(this),n),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=vi){dt.fromWorkingColorSpace(ln.copy(this),e);const n=ln.r,i=ln.g,r=ln.b;return e!==vi?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(rr),this.setHSL(rr.h+e,rr.s+n,rr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(rr),e.getHSL(Il);const i=Ma(rr.h,Il.h,n),r=Ma(rr.s,Il.s,n),o=Ma(rr.l,Il.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new ct;ct.NAMES=px;let JA=0;class tl extends xo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:JA++}),this.uuid=Bs(),this.name="",this.type="Material",this.blending=hs,this.side=Lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$f,this.blendDst=Yf,this.blendEquation=qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=Qc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ao,this.stencilZFail=Ao,this.stencilZPass=Ao,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(i.blending=this.blending),this.side!==Lr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==$f&&(i.blendSrc=this.blendSrc),this.blendDst!==Yf&&(i.blendDst=this.blendDst),this.blendEquation!==qr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Qc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ao&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ao&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ao&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class mx extends tl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.combine=Ky,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ot=new G,Nl=new Ve;class Bn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=jg,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ea("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Nl.fromBufferAttribute(this,n),Nl.applyMatrix3(e),this.setXY(n,Nl.x,Nl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyMatrix3(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyMatrix4(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyNormalMatrix(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.transformDirection(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Go(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=fn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Go(n,this.array)),n}setX(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Go(n,this.array)),n}setY(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Go(n,this.array)),n}setZ(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Go(n,this.array)),n}setW(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array),r=fn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array),r=fn(r,this.array),o=fn(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jg&&(e.usage=this.usage),e}}class gx extends Bn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class vx extends Bn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Gi extends Bn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let eR=0;const Xn=new Ht,Id=new Pn,Fo=new G,Dn=new el,ia=new el,qt=new G;class Ai extends xo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eR++}),this.uuid=Bs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ux(e)?vx:gx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Qe().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xn.makeRotationFromQuaternion(e),this.applyMatrix4(Xn),this}rotateX(e){return Xn.makeRotationX(e),this.applyMatrix4(Xn),this}rotateY(e){return Xn.makeRotationY(e),this.applyMatrix4(Xn),this}rotateZ(e){return Xn.makeRotationZ(e),this.applyMatrix4(Xn),this}translate(e,n,i){return Xn.makeTranslation(e,n,i),this.applyMatrix4(Xn),this}scale(e,n,i){return Xn.makeScale(e,n,i),this.applyMatrix4(Xn),this}lookAt(e){return Id.lookAt(e),Id.updateMatrix(),this.applyMatrix4(Id.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fo).negate(),this.translate(Fo.x,Fo.y,Fo.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Gi(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new el);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];Dn.setFromBufferAttribute(o),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(Dn.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];ia.setFromBufferAttribute(a),this.morphTargetsRelative?(qt.addVectors(Dn.min,ia.min),Dn.expandByPoint(qt),qt.addVectors(Dn.max,ia.max),Dn.expandByPoint(qt)):(Dn.expandByPoint(ia.min),Dn.expandByPoint(ia.max))}Dn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)qt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(qt));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)qt.fromBufferAttribute(a,c),l&&(Fo.fromBufferAttribute(e,c),qt.add(Fo)),r=Math.max(r,i.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let E=0;E<i.count;E++)a[E]=new G,l[E]=new G;const c=new G,u=new G,f=new G,d=new Ve,p=new Ve,g=new Ve,y=new G,m=new G;function h(E,T,x){c.fromBufferAttribute(i,E),u.fromBufferAttribute(i,T),f.fromBufferAttribute(i,x),d.fromBufferAttribute(o,E),p.fromBufferAttribute(o,T),g.fromBufferAttribute(o,x),u.sub(c),f.sub(c),p.sub(d),g.sub(d);const b=1/(p.x*g.y-g.x*p.y);isFinite(b)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(b),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(b),a[E].add(y),a[T].add(y),a[x].add(y),l[E].add(m),l[T].add(m),l[x].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let E=0,T=v.length;E<T;++E){const x=v[E],b=x.start,H=x.count;for(let B=b,V=b+H;B<V;B+=3)h(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const _=new G,S=new G,C=new G,A=new G;function R(E){C.fromBufferAttribute(r,E),A.copy(C);const T=a[E];_.copy(T),_.sub(C.multiplyScalar(C.dot(T))).normalize(),S.crossVectors(A,T);const b=S.dot(l[E])<0?-1:1;s.setXYZW(E,_.x,_.y,_.z,b)}for(let E=0,T=v.length;E<T;++E){const x=v[E],b=x.start,H=x.count;for(let B=b,V=b+H;B<V;B+=3)R(e.getX(B+0)),R(e.getX(B+1)),R(e.getX(B+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Bn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new G,o=new G,s=new G,a=new G,l=new G,c=new G,u=new G,f=new G;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,g),o.fromBufferAttribute(n,y),s.fromBufferAttribute(n,m),u.subVectors(s,o),f.subVectors(r,o),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),o.fromBufferAttribute(n,d+1),s.fromBufferAttribute(n,d+2),u.subVectors(s,o),f.subVectors(r,o),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)qt.fromBufferAttribute(e,n),qt.normalize(),e.setXYZ(n,qt.x,qt.y,qt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*u;for(let h=0;h<u;h++)d[g++]=c[p++]}return new Bn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ai,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const o=e.morphAttributes;for(const c in o){const u=[],f=o[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const f=s[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sv=new Ht,Hr=new $p,Ul=new Lu,av=new G,Oo=new G,ko=new G,zo=new G,Nd=new G,Fl=new G,Ol=new Ve,kl=new Ve,zl=new Ve,lv=new G,cv=new G,uv=new G,Bl=new G,Hl=new G;class Mi extends Pn{constructor(e=new Ai,n=new mx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){Fl.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const u=a[l],f=o[l];u!==0&&(Nd.fromBufferAttribute(f,e),s?Fl.addScaledVector(Nd,u):Fl.addScaledVector(Nd.sub(n),u))}n.add(Fl)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ul.copy(i.boundingSphere),Ul.applyMatrix4(o),Hr.copy(e.ray).recast(e.near),!(Ul.containsPoint(Hr.origin)===!1&&(Hr.intersectSphere(Ul,av)===null||Hr.origin.distanceToSquared(av)>(e.far-e.near)**2))&&(sv.copy(o).invert(),Hr.copy(e.ray).applyMatrix4(sv),!(i.boundingBox!==null&&Hr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Hr)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,u=o.attributes.uv1,f=o.attributes.normal,d=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(s))for(let g=0,y=d.length;g<y;g++){const m=d[g],h=s[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,C=_;S<C;S+=3){const A=a.getX(S),R=a.getX(S+1),E=a.getX(S+2);r=Vl(this,h,e,i,c,u,f,A,R,E),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=g,h=y;m<h;m+=3){const v=a.getX(m),_=a.getX(m+1),S=a.getX(m+2);r=Vl(this,s,e,i,c,u,f,v,_,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,y=d.length;g<y;g++){const m=d[g],h=s[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,C=_;S<C;S+=3){const A=S,R=S+1,E=S+2;r=Vl(this,h,e,i,c,u,f,A,R,E),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=g,h=y;m<h;m+=3){const v=m,_=m+1,S=m+2;r=Vl(this,s,e,i,c,u,f,v,_,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function tR(t,e,n,i,r,o,s,a){let l;if(e.side===Cn?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===Lr,a),l===null)return null;Hl.copy(a),Hl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Hl);return c<n.near||c>n.far?null:{distance:c,point:Hl.clone(),object:t}}function Vl(t,e,n,i,r,o,s,a,l,c){t.getVertexPosition(a,Oo),t.getVertexPosition(l,ko),t.getVertexPosition(c,zo);const u=tR(t,e,n,i,Oo,ko,zo,Bl);if(u){r&&(Ol.fromBufferAttribute(r,a),kl.fromBufferAttribute(r,l),zl.fromBufferAttribute(r,c),u.uv=Si.getInterpolation(Bl,Oo,ko,zo,Ol,kl,zl,new Ve)),o&&(Ol.fromBufferAttribute(o,a),kl.fromBufferAttribute(o,l),zl.fromBufferAttribute(o,c),u.uv1=Si.getInterpolation(Bl,Oo,ko,zo,Ol,kl,zl,new Ve)),s&&(lv.fromBufferAttribute(s,a),cv.fromBufferAttribute(s,l),uv.fromBufferAttribute(s,c),u.normal=Si.getInterpolation(Bl,Oo,ko,zo,lv,cv,uv,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new G,materialIndex:0};Si.getNormal(Oo,ko,zo,f.normal),u.face=f}return u}class nl extends Ai{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],c=[],u=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,i,n,e,s,o,0),g("z","y","x",1,-1,i,n,-e,s,o,1),g("x","z","y",1,1,e,i,n,r,s,2),g("x","z","y",1,-1,e,i,-n,r,s,3),g("x","y","z",1,-1,e,n,i,r,o,4),g("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new Gi(c,3)),this.setAttribute("normal",new Gi(u,3)),this.setAttribute("uv",new Gi(f,2));function g(y,m,h,v,_,S,C,A,R,E,T){const x=S/R,b=C/E,H=S/2,B=C/2,V=A/2,K=R+1,$=E+1;let oe=0,F=0;const X=new G;for(let Q=0;Q<$;Q++){const de=Q*b-B;for(let Ee=0;Ee<K;Ee++){const We=Ee*x-H;X[y]=We*v,X[m]=de*_,X[h]=V,c.push(X.x,X.y,X.z),X[y]=0,X[m]=0,X[h]=A>0?1:-1,u.push(X.x,X.y,X.z),f.push(Ee/R),f.push(1-Q/E),oe+=1}}for(let Q=0;Q<E;Q++)for(let de=0;de<R;de++){const Ee=d+de+K*Q,We=d+de+K*(Q+1),q=d+(de+1)+K*(Q+1),ae=d+(de+1)+K*Q;l.push(Ee,We,ae),l.push(We,q,ae),F+=6}a.addGroup(p,F,T),p+=F,d+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Is(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function hn(t){const e={};for(let n=0;n<t.length;n++){const i=Is(t[n]);for(const r in i)e[r]=i[r]}return e}function nR(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function _x(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const iR={clone:Is,merge:hn};var rR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ti extends tl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rR,this.fragmentShader=oR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Is(e.uniforms),this.uniformsGroups=nR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class yx extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=Bi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const or=new G,dv=new Ve,fv=new Ve;class Fn extends yx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Xa*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xa*2*Math.atan(Math.tan(Sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){or.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(or.x,or.y).multiplyScalar(-e/or.z),or.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(or.x,or.y).multiplyScalar(-e/or.z)}getViewSize(e,n){return this.getViewBounds(e,dv,fv),n.subVectors(fv,dv)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Sa*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Bo=-90,Ho=1;class sR extends Pn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Fn(Bo,Ho,e,n);r.layers=this.layers,this.add(r);const o=new Fn(Bo,Ho,e,n);o.layers=this.layers,this.add(o);const s=new Fn(Bo,Ho,e,n);s.layers=this.layers,this.add(s);const a=new Fn(Bo,Ho,e,n);a.layers=this.layers,this.add(a);const l=new Fn(Bo,Ho,e,n);l.layers=this.layers,this.add(l);const c=new Fn(Bo,Ho,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,l]=n;for(const c of n)this.remove(c);if(e===Bi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===nu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,s),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class xx extends vn{constructor(e,n,i,r,o,s,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Ps,super(e,n,i,r,o,s,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class aR extends Dr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new xx(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ci}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new nl(5,5,5),o=new Ti({name:"CubemapFromEquirect",uniforms:Is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Cn,blending:Rr});o.uniforms.tEquirect.value=n;const s=new Mi(r,o),a=n.minFilter;return n.minFilter===no&&(n.minFilter=ci),new sR(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}const Ud=new G,lR=new G,cR=new Qe;class ur{constructor(e=new G(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ud.subVectors(i,n).cross(lR.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Ud),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||cR.getNormalMatrix(e),r=this.coplanarPoint(Ud).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vr=new Lu,Gl=new G;class Sx{constructor(e=new ur,n=new ur,i=new ur,r=new ur,o=new ur,s=new ur){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Bi){const i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],p=r[8],g=r[9],y=r[10],m=r[11],h=r[12],v=r[13],_=r[14],S=r[15];if(i[0].setComponents(l-o,d-c,m-p,S-h).normalize(),i[1].setComponents(l+o,d+c,m+p,S+h).normalize(),i[2].setComponents(l+s,d+u,m+g,S+v).normalize(),i[3].setComponents(l-s,d-u,m-g,S-v).normalize(),i[4].setComponents(l-a,d-f,m-y,S-_).normalize(),n===Bi)i[5].setComponents(l+a,d+f,m+y,S+_).normalize();else if(n===nu)i[5].setComponents(a,f,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vr)}intersectsSprite(e){return Vr.center.set(0,0,0),Vr.radius=.7071067811865476,Vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Gl.x=r.normal.x>0?e.max.x:e.min.x,Gl.y=r.normal.y>0?e.max.y:e.min.y,Gl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Gl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Mx(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function uR(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l._updateRange,d=l.updateRanges;if(t.bindBuffer(c,a),f.count===-1&&d.length===0&&t.bufferSubData(c,0,u),d.length!==0){for(let p=0,g=d.length;p<g;p++){const y=d[p];t.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}f.count!==-1&&(t.bufferSubData(c,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:o,update:s}}class Du extends Ai{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=n/l,p=[],g=[],y=[],m=[];for(let h=0;h<u;h++){const v=h*d-s;for(let _=0;_<c;_++){const S=_*f-o;g.push(S,-v,0),y.push(0,0,1),m.push(_/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){const _=v+c*h,S=v+c*(h+1),C=v+1+c*(h+1),A=v+1+c*h;p.push(_,S,A),p.push(S,C,A)}this.setIndex(p),this.setAttribute("position",new Gi(g,3)),this.setAttribute("normal",new Gi(y,3)),this.setAttribute("uv",new Gi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Du(e.width,e.height,e.widthSegments,e.heightSegments)}}var dR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fR=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vR=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_R=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yR=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,xR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,SR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,MR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ER=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wR=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,TR=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,AR=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,RR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,CR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,PR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,LR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,DR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,IR=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,NR=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,UR=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,FR=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,OR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,BR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,HR="gl_FragColor = linearToOutputTexel( gl_FragColor );",VR=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,GR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,WR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,XR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$R=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,YR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,KR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ZR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,QR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,JR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tC=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nC=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,iC=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,rC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oC=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,aC=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lC=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cC=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,uC=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dC=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hC=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pC=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mC=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gC=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_C=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xC=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,MC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,EC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,TC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AC=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,RC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,PC=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,IC=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,NC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,UC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,FC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,OC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,BC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,HC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,GC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,WC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,XC=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,$C=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,YC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,KC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ZC=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,QC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,JC=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,eP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iP=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rP=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,oP=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,aP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dP=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hP=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vP=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_P=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yP=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,xP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,SP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MP=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,EP=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,TP=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AP=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RP=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CP=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,PP=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bP=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,LP=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,DP=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IP=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NP=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,UP=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FP=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OP=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kP=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,BP=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HP=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,VP=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,GP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:dR,alphahash_pars_fragment:fR,alphamap_fragment:hR,alphamap_pars_fragment:pR,alphatest_fragment:mR,alphatest_pars_fragment:gR,aomap_fragment:vR,aomap_pars_fragment:_R,batching_pars_vertex:yR,batching_vertex:xR,begin_vertex:SR,beginnormal_vertex:MR,bsdfs:ER,iridescence_fragment:wR,bumpmap_pars_fragment:TR,clipping_planes_fragment:AR,clipping_planes_pars_fragment:RR,clipping_planes_pars_vertex:CR,clipping_planes_vertex:PR,color_fragment:bR,color_pars_fragment:LR,color_pars_vertex:DR,color_vertex:IR,common:NR,cube_uv_reflection_fragment:UR,defaultnormal_vertex:FR,displacementmap_pars_vertex:OR,displacementmap_vertex:kR,emissivemap_fragment:zR,emissivemap_pars_fragment:BR,colorspace_fragment:HR,colorspace_pars_fragment:VR,envmap_fragment:GR,envmap_common_pars_fragment:WR,envmap_pars_fragment:jR,envmap_pars_vertex:XR,envmap_physical_pars_fragment:iC,envmap_vertex:$R,fog_vertex:YR,fog_pars_vertex:qR,fog_fragment:KR,fog_pars_fragment:ZR,gradientmap_pars_fragment:QR,lightmap_pars_fragment:JR,lights_lambert_fragment:eC,lights_lambert_pars_fragment:tC,lights_pars_begin:nC,lights_toon_fragment:rC,lights_toon_pars_fragment:oC,lights_phong_fragment:sC,lights_phong_pars_fragment:aC,lights_physical_fragment:lC,lights_physical_pars_fragment:cC,lights_fragment_begin:uC,lights_fragment_maps:dC,lights_fragment_end:fC,logdepthbuf_fragment:hC,logdepthbuf_pars_fragment:pC,logdepthbuf_pars_vertex:mC,logdepthbuf_vertex:gC,map_fragment:vC,map_pars_fragment:_C,map_particle_fragment:yC,map_particle_pars_fragment:xC,metalnessmap_fragment:SC,metalnessmap_pars_fragment:MC,morphinstance_vertex:EC,morphcolor_vertex:wC,morphnormal_vertex:TC,morphtarget_pars_vertex:AC,morphtarget_vertex:RC,normal_fragment_begin:CC,normal_fragment_maps:PC,normal_pars_fragment:bC,normal_pars_vertex:LC,normal_vertex:DC,normalmap_pars_fragment:IC,clearcoat_normal_fragment_begin:NC,clearcoat_normal_fragment_maps:UC,clearcoat_pars_fragment:FC,iridescence_pars_fragment:OC,opaque_fragment:kC,packing:zC,premultiplied_alpha_fragment:BC,project_vertex:HC,dithering_fragment:VC,dithering_pars_fragment:GC,roughnessmap_fragment:WC,roughnessmap_pars_fragment:jC,shadowmap_pars_fragment:XC,shadowmap_pars_vertex:$C,shadowmap_vertex:YC,shadowmask_pars_fragment:qC,skinbase_vertex:KC,skinning_pars_vertex:ZC,skinning_vertex:QC,skinnormal_vertex:JC,specularmap_fragment:eP,specularmap_pars_fragment:tP,tonemapping_fragment:nP,tonemapping_pars_fragment:iP,transmission_fragment:rP,transmission_pars_fragment:oP,uv_pars_fragment:sP,uv_pars_vertex:aP,uv_vertex:lP,worldpos_vertex:cP,background_vert:uP,background_frag:dP,backgroundCube_vert:fP,backgroundCube_frag:hP,cube_vert:pP,cube_frag:mP,depth_vert:gP,depth_frag:vP,distanceRGBA_vert:_P,distanceRGBA_frag:yP,equirect_vert:xP,equirect_frag:SP,linedashed_vert:MP,linedashed_frag:EP,meshbasic_vert:wP,meshbasic_frag:TP,meshlambert_vert:AP,meshlambert_frag:RP,meshmatcap_vert:CP,meshmatcap_frag:PP,meshnormal_vert:bP,meshnormal_frag:LP,meshphong_vert:DP,meshphong_frag:IP,meshphysical_vert:NP,meshphysical_frag:UP,meshtoon_vert:FP,meshtoon_frag:OP,points_vert:kP,points_frag:zP,shadow_vert:BP,shadow_frag:HP,sprite_vert:VP,sprite_frag:GP},Se={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},yi={basic:{uniforms:hn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:hn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new ct(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:hn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:hn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:hn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new ct(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:hn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:hn([Se.points,Se.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:hn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:hn([Se.common,Se.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:hn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:hn([Se.sprite,Se.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:hn([Se.common,Se.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:hn([Se.lights,Se.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};yi.physical={uniforms:hn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Wl={r:0,b:0,g:0},Gr=new Ki,WP=new Ht;function jP(t,e,n,i,r,o,s){const a=new ct(0);let l=o===!0?0:1,c,u,f=null,d=0,p=null;function g(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?n:e).get(_)),_}function y(v){let _=!1;const S=g(v);S===null?h(a,l):S&&S.isColor&&(h(S,1),_=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(v,_){const S=g(_);S&&(S.isCubeTexture||S.mapping===Pu)?(u===void 0&&(u=new Mi(new nl(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:Is(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Gr.copy(_.backgroundRotation),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(WP.makeRotationFromEuler(Gr)),u.material.toneMapped=dt.getTransfer(S.colorSpace)!==Et,(f!==S||d!==S.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=S,d=S.version,p=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Mi(new Du(2,2),new Ti({name:"BackgroundMaterial",uniforms:Is(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Lr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=dt.getTransfer(S.colorSpace)!==Et,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=S,d=S.version,p=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function h(v,_){v.getRGB(Wl,_x(t)),i.buffers.color.setClear(Wl.r,Wl.g,Wl.b,_,s)}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),l=_,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,h(a,l)},render:y,addToRenderList:m}}function XP(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let o=r,s=!1;function a(x,b,H,B,V){let K=!1;const $=f(B,H,b);o!==$&&(o=$,c(o.object)),K=p(x,B,H,V),K&&g(x,B,H,V),V!==null&&e.update(V,t.ELEMENT_ARRAY_BUFFER),(K||s)&&(s=!1,S(x,b,H,B),V!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return t.createVertexArray()}function c(x){return t.bindVertexArray(x)}function u(x){return t.deleteVertexArray(x)}function f(x,b,H){const B=H.wireframe===!0;let V=i[x.id];V===void 0&&(V={},i[x.id]=V);let K=V[b.id];K===void 0&&(K={},V[b.id]=K);let $=K[B];return $===void 0&&($=d(l()),K[B]=$),$}function d(x){const b=[],H=[],B=[];for(let V=0;V<n;V++)b[V]=0,H[V]=0,B[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:H,attributeDivisors:B,object:x,attributes:{},index:null}}function p(x,b,H,B){const V=o.attributes,K=b.attributes;let $=0;const oe=H.getAttributes();for(const F in oe)if(oe[F].location>=0){const Q=V[F];let de=K[F];if(de===void 0&&(F==="instanceMatrix"&&x.instanceMatrix&&(de=x.instanceMatrix),F==="instanceColor"&&x.instanceColor&&(de=x.instanceColor)),Q===void 0||Q.attribute!==de||de&&Q.data!==de.data)return!0;$++}return o.attributesNum!==$||o.index!==B}function g(x,b,H,B){const V={},K=b.attributes;let $=0;const oe=H.getAttributes();for(const F in oe)if(oe[F].location>=0){let Q=K[F];Q===void 0&&(F==="instanceMatrix"&&x.instanceMatrix&&(Q=x.instanceMatrix),F==="instanceColor"&&x.instanceColor&&(Q=x.instanceColor));const de={};de.attribute=Q,Q&&Q.data&&(de.data=Q.data),V[F]=de,$++}o.attributes=V,o.attributesNum=$,o.index=B}function y(){const x=o.newAttributes;for(let b=0,H=x.length;b<H;b++)x[b]=0}function m(x){h(x,0)}function h(x,b){const H=o.newAttributes,B=o.enabledAttributes,V=o.attributeDivisors;H[x]=1,B[x]===0&&(t.enableVertexAttribArray(x),B[x]=1),V[x]!==b&&(t.vertexAttribDivisor(x,b),V[x]=b)}function v(){const x=o.newAttributes,b=o.enabledAttributes;for(let H=0,B=b.length;H<B;H++)b[H]!==x[H]&&(t.disableVertexAttribArray(H),b[H]=0)}function _(x,b,H,B,V,K,$){$===!0?t.vertexAttribIPointer(x,b,H,V,K):t.vertexAttribPointer(x,b,H,B,V,K)}function S(x,b,H,B){y();const V=B.attributes,K=H.getAttributes(),$=b.defaultAttributeValues;for(const oe in K){const F=K[oe];if(F.location>=0){let X=V[oe];if(X===void 0&&(oe==="instanceMatrix"&&x.instanceMatrix&&(X=x.instanceMatrix),oe==="instanceColor"&&x.instanceColor&&(X=x.instanceColor)),X!==void 0){const Q=X.normalized,de=X.itemSize,Ee=e.get(X);if(Ee===void 0)continue;const We=Ee.buffer,q=Ee.type,ae=Ee.bytesPerElement,he=q===t.INT||q===t.UNSIGNED_INT||X.gpuType===zp;if(X.isInterleavedBufferAttribute){const pe=X.data,Ce=pe.stride,Oe=X.offset;if(pe.isInstancedInterleavedBuffer){for(let je=0;je<F.locationSize;je++)h(F.location+je,pe.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let je=0;je<F.locationSize;je++)m(F.location+je);t.bindBuffer(t.ARRAY_BUFFER,We);for(let je=0;je<F.locationSize;je++)_(F.location+je,de/F.locationSize,q,Q,Ce*ae,(Oe+de/F.locationSize*je)*ae,he)}else{if(X.isInstancedBufferAttribute){for(let pe=0;pe<F.locationSize;pe++)h(F.location+pe,X.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let pe=0;pe<F.locationSize;pe++)m(F.location+pe);t.bindBuffer(t.ARRAY_BUFFER,We);for(let pe=0;pe<F.locationSize;pe++)_(F.location+pe,de/F.locationSize,q,Q,de*ae,de/F.locationSize*pe*ae,he)}}else if($!==void 0){const Q=$[oe];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(F.location,Q);break;case 3:t.vertexAttrib3fv(F.location,Q);break;case 4:t.vertexAttrib4fv(F.location,Q);break;default:t.vertexAttrib1fv(F.location,Q)}}}}v()}function C(){E();for(const x in i){const b=i[x];for(const H in b){const B=b[H];for(const V in B)u(B[V].object),delete B[V];delete b[H]}delete i[x]}}function A(x){if(i[x.id]===void 0)return;const b=i[x.id];for(const H in b){const B=b[H];for(const V in B)u(B[V].object),delete B[V];delete b[H]}delete i[x.id]}function R(x){for(const b in i){const H=i[b];if(H[x.id]===void 0)continue;const B=H[x.id];for(const V in B)u(B[V].object),delete B[V];delete H[x.id]}}function E(){T(),s=!0,o!==r&&(o=r,c(o.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:E,resetDefaultState:T,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:m,disableUnusedAttributes:v}}function $P(t,e,n){let i;function r(c){i=c}function o(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function s(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let g=0;g<f;g++)p+=u[g];n.update(p,i,1)}function l(c,u,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)s(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let g=0;for(let y=0;y<f;y++)g+=u[y];for(let y=0;y<d.length;y++)n.update(g,i,d[y])}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function YP(t,e,n,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(A){return!(A!==kn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const R=A===zs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==qi&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ui&&!R)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),h=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),S=p>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:y,maxAttributes:m,maxVertexUniforms:h,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:S,maxSamples:C}}function qP(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new ur,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,h=t.get(f);if(!r||g===null||g.length===0||o&&!m)o?u(null):c();else{const v=o?0:i,_=v*4;let S=h.clippingState||null;l.value=S,S=u(g,d,_,p);for(let C=0;C!==_;++C)S[C]=n[C];h.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,g){const y=f!==null?f.length:0;let m=null;if(y!==0){if(m=l.value,g!==!0||m===null){const h=p+y*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<h)&&(m=new Float32Array(h));for(let _=0,S=p;_!==y;++_,S+=4)s.copy(f[_]).applyMatrix4(v,a),s.normal.toArray(m,S),m[S+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function KP(t){let e=new WeakMap;function n(s,a){return a===qf?s.mapping=Ps:a===Kf&&(s.mapping=bs),s}function i(s){if(s&&s.isTexture){const a=s.mapping;if(a===qf||a===Kf)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new aR(l.height);return c.fromEquirectangularTexture(t,s),e.set(s,c),s.addEventListener("dispose",r),n(c.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class Ex extends yx{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const os=4,hv=[.125,.215,.35,.446,.526,.582],Kr=20,Fd=new Ex,pv=new ct;let Od=null,kd=0,zd=0,Bd=!1;const $r=(1+Math.sqrt(5))/2,Vo=1/$r,mv=[new G(-$r,Vo,0),new G($r,Vo,0),new G(-Vo,0,$r),new G(Vo,0,$r),new G(0,$r,-Vo),new G(0,$r,Vo),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)];class gv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Od=this._renderer.getRenderTarget(),kd=this._renderer.getActiveCubeFace(),zd=this._renderer.getActiveMipmapLevel(),Bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_v(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Od,kd,zd),this._renderer.xr.enabled=Bd,e.scissorTest=!1,jl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ps||e.mapping===bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Od=this._renderer.getRenderTarget(),kd=this._renderer.getActiveCubeFace(),zd=this._renderer.getActiveMipmapLevel(),Bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ci,minFilter:ci,generateMipmaps:!1,type:zs,format:kn,colorSpace:Or,depthBuffer:!1},r=vv(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vv(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ZP(o)),this._blurMaterial=QP(o,e,n)}return r}_compileMaterial(e){const n=new Mi(this._lodPlanes[0],e);this._renderer.compile(n,Fd)}_sceneToCubeUV(e,n,i,r){const a=new Fn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(pv),u.toneMapping=Cr,u.autoClear=!1;const p=new mx({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1}),g=new Mi(new nl,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(pv),y=!0);for(let h=0;h<6;h++){const v=h%3;v===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):v===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const _=this._cubeSize;jl(r,v*_,h>2?_:0,_,_),u.setRenderTarget(r),y&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ps||e.mapping===bs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=yv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_v());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new Mi(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;jl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,Fd)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=mv[(r-o-1)%mv.length];this._blur(e,o-1,o,s,a)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Mi(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*Kr-1),y=o/g,m=isFinite(o)?1+Math.floor(u*y):Kr;m>Kr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Kr}`);const h=[];let v=0;for(let R=0;R<Kr;++R){const E=R/y,T=Math.exp(-E*E/2);h.push(T),R===0?v+=T:R<m&&(v+=2*T)}for(let R=0;R<h.length;R++)h[R]=h[R]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=s==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-i;const S=this._sizeLods[r],C=3*S*(r>_-os?r-_+os:0),A=4*(this._cubeSize-S);jl(n,C,A,3*S,2*S),l.setRenderTarget(n),l.render(f,Fd)}}function ZP(t){const e=[],n=[],i=[];let r=t;const o=t-os+1+hv.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let l=1/a;s>t-os?l=hv[s-t+os-1]:s===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,y=3,m=2,h=1,v=new Float32Array(y*g*p),_=new Float32Array(m*g*p),S=new Float32Array(h*g*p);for(let A=0;A<p;A++){const R=A%3*2/3-1,E=A>2?0:-1,T=[R,E,0,R+2/3,E,0,R+2/3,E+1,0,R,E,0,R+2/3,E+1,0,R,E+1,0];v.set(T,y*g*A),_.set(d,m*g*A);const x=[A,A,A,A,A,A];S.set(x,h*g*A)}const C=new Ai;C.setAttribute("position",new Bn(v,y)),C.setAttribute("uv",new Bn(_,m)),C.setAttribute("faceIndex",new Bn(S,h)),e.push(C),r>os&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function vv(t,e,n){const i=new Dr(t,e,n);return i.texture.mapping=Pu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function jl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function QP(t,e,n){const i=new Float32Array(Kr),r=new G(0,1,0);return new Ti({name:"SphericalGaussianBlur",defines:{n:Kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Yp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function _v(){return new Ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function yv(){return new Ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function Yp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function JP(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===qf||l===Kf,u=l===Ps||l===bs;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new gv(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new gv(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",o),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function eb(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ea("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function tb(t,e,n,i){const r={},o=new WeakMap;function s(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const y=d.morphAttributes[g];for(let m=0,h=y.length;m<h;m++)e.remove(y[m])}d.removeEventListener("dispose",s),delete r[d.id];const p=o.get(d);p&&(e.remove(p),o.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",s),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const y=p[g];for(let m=0,h=y.length;m<h;m++)e.update(y[m],t.ARRAY_BUFFER)}}function c(f){const d=[],p=f.index,g=f.attributes.position;let y=0;if(p!==null){const v=p.array;y=p.version;for(let _=0,S=v.length;_<S;_+=3){const C=v[_+0],A=v[_+1],R=v[_+2];d.push(C,A,A,R,R,C)}}else if(g!==void 0){const v=g.array;y=g.version;for(let _=0,S=v.length/3-1;_<S;_+=3){const C=_+0,A=_+1,R=_+2;d.push(C,A,A,R,R,C)}}else return;const m=new(ux(d)?vx:gx)(d,1);m.version=y;const h=o.get(f);h&&e.remove(h),o.set(f,m)}function u(f){const d=o.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return o.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function nb(t,e,n){let i;function r(d){i=d}let o,s;function a(d){o=d.type,s=d.bytesPerElement}function l(d,p){t.drawElements(i,p,o,d*s),n.update(p,i,1)}function c(d,p,g){g!==0&&(t.drawElementsInstanced(i,p,o,d*s,g),n.update(p,i,g))}function u(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,o,d,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];n.update(m,i,1)}function f(d,p,g,y){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)c(d[h]/s,p[h],y[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,o,d,0,y,0,g);let h=0;for(let v=0;v<g;v++)h+=p[v];for(let v=0;v<y.length;v++)n.update(h,i,y[v])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function ib(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function rb(t,e,n){const i=new WeakMap,r=new Qt;function o(s,a,l){const c=s.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let T=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let _=0;p===!0&&(_=1),g===!0&&(_=2),y===!0&&(_=3);let S=a.attributes.position.count*_,C=1;S>e.maxTextureSize&&(C=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const A=new Float32Array(S*C*4*f),R=new fx(A,S,C,f);R.type=ui,R.needsUpdate=!0;const E=_*4;for(let x=0;x<f;x++){const b=m[x],H=h[x],B=v[x],V=S*C*4*x;for(let K=0;K<b.count;K++){const $=K*E;p===!0&&(r.fromBufferAttribute(b,K),A[V+$+0]=r.x,A[V+$+1]=r.y,A[V+$+2]=r.z,A[V+$+3]=0),g===!0&&(r.fromBufferAttribute(H,K),A[V+$+4]=r.x,A[V+$+5]=r.y,A[V+$+6]=r.z,A[V+$+7]=0),y===!0&&(r.fromBufferAttribute(B,K),A[V+$+8]=r.x,A[V+$+9]=r.y,A[V+$+10]=r.z,A[V+$+11]=B.itemSize===4?r.w:1)}}d={count:f,texture:R,size:new Ve(S,C)},i.set(a,d),a.addEventListener("dispose",T)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let p=0;for(let y=0;y<c.length;y++)p+=c[y];const g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:o}}function ob(t,e,n,i){let r=new WeakMap;function o(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function s(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:o,dispose:s}}class wx extends vn{constructor(e,n,i,r,o,s,a,l,c,u=ps){if(u!==ps&&u!==Ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ps&&(i=po),i===void 0&&u===Ds&&(i=Ls),super(null,r,o,s,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Jt,this.minFilter=l!==void 0?l:Jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Tx=new vn,xv=new wx(1,1),Ax=new fx,Rx=new jA,Cx=new xx,Sv=[],Mv=[],Ev=new Float32Array(16),wv=new Float32Array(9),Tv=new Float32Array(4);function Hs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=Sv[r];if(o===void 0&&(o=new Float32Array(r),Sv[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function Xt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function $t(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Iu(t,e){let n=Mv[e];n===void 0&&(n=new Int32Array(e),Mv[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function sb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function ab(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2fv(this.addr,e),$t(n,e)}}function lb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Xt(n,e))return;t.uniform3fv(this.addr,e),$t(n,e)}}function cb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4fv(this.addr,e),$t(n,e)}}function ub(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),$t(n,e)}else{if(Xt(n,i))return;Tv.set(i),t.uniformMatrix2fv(this.addr,!1,Tv),$t(n,i)}}function db(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),$t(n,e)}else{if(Xt(n,i))return;wv.set(i),t.uniformMatrix3fv(this.addr,!1,wv),$t(n,i)}}function fb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),$t(n,e)}else{if(Xt(n,i))return;Ev.set(i),t.uniformMatrix4fv(this.addr,!1,Ev),$t(n,i)}}function hb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function pb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2iv(this.addr,e),$t(n,e)}}function mb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Xt(n,e))return;t.uniform3iv(this.addr,e),$t(n,e)}}function gb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4iv(this.addr,e),$t(n,e)}}function vb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function _b(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2uiv(this.addr,e),$t(n,e)}}function yb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Xt(n,e))return;t.uniform3uiv(this.addr,e),$t(n,e)}}function xb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4uiv(this.addr,e),$t(n,e)}}function Sb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let o;this.type===t.SAMPLER_2D_SHADOW?(xv.compareFunction=lx,o=xv):o=Tx,n.setTexture2D(e||o,r)}function Mb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Rx,r)}function Eb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Cx,r)}function wb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Ax,r)}function Tb(t){switch(t){case 5126:return sb;case 35664:return ab;case 35665:return lb;case 35666:return cb;case 35674:return ub;case 35675:return db;case 35676:return fb;case 5124:case 35670:return hb;case 35667:case 35671:return pb;case 35668:case 35672:return mb;case 35669:case 35673:return gb;case 5125:return vb;case 36294:return _b;case 36295:return yb;case 36296:return xb;case 35678:case 36198:case 36298:case 36306:case 35682:return Sb;case 35679:case 36299:case 36307:return Mb;case 35680:case 36300:case 36308:case 36293:return Eb;case 36289:case 36303:case 36311:case 36292:return wb}}function Ab(t,e){t.uniform1fv(this.addr,e)}function Rb(t,e){const n=Hs(e,this.size,2);t.uniform2fv(this.addr,n)}function Cb(t,e){const n=Hs(e,this.size,3);t.uniform3fv(this.addr,n)}function Pb(t,e){const n=Hs(e,this.size,4);t.uniform4fv(this.addr,n)}function bb(t,e){const n=Hs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Lb(t,e){const n=Hs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Db(t,e){const n=Hs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Ib(t,e){t.uniform1iv(this.addr,e)}function Nb(t,e){t.uniform2iv(this.addr,e)}function Ub(t,e){t.uniform3iv(this.addr,e)}function Fb(t,e){t.uniform4iv(this.addr,e)}function Ob(t,e){t.uniform1uiv(this.addr,e)}function kb(t,e){t.uniform2uiv(this.addr,e)}function zb(t,e){t.uniform3uiv(this.addr,e)}function Bb(t,e){t.uniform4uiv(this.addr,e)}function Hb(t,e,n){const i=this.cache,r=e.length,o=Iu(n,r);Xt(i,o)||(t.uniform1iv(this.addr,o),$t(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||Tx,o[s])}function Vb(t,e,n){const i=this.cache,r=e.length,o=Iu(n,r);Xt(i,o)||(t.uniform1iv(this.addr,o),$t(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||Rx,o[s])}function Gb(t,e,n){const i=this.cache,r=e.length,o=Iu(n,r);Xt(i,o)||(t.uniform1iv(this.addr,o),$t(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||Cx,o[s])}function Wb(t,e,n){const i=this.cache,r=e.length,o=Iu(n,r);Xt(i,o)||(t.uniform1iv(this.addr,o),$t(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||Ax,o[s])}function jb(t){switch(t){case 5126:return Ab;case 35664:return Rb;case 35665:return Cb;case 35666:return Pb;case 35674:return bb;case 35675:return Lb;case 35676:return Db;case 5124:case 35670:return Ib;case 35667:case 35671:return Nb;case 35668:case 35672:return Ub;case 35669:case 35673:return Fb;case 5125:return Ob;case 36294:return kb;case 36295:return zb;case 36296:return Bb;case 35678:case 36198:case 36298:case 36306:case 35682:return Hb;case 35679:case 36299:case 36307:return Vb;case 35680:case 36300:case 36308:case 36293:return Gb;case 36289:case 36303:case 36311:case 36292:return Wb}}class Xb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Tb(n.type)}}class $b{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=jb(n.type)}}class Yb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const Hd=/(\w+)(\])?(\[|\.)?/g;function Av(t,e){t.seq.push(e),t.map[e.id]=e}function qb(t,e,n){const i=t.name,r=i.length;for(Hd.lastIndex=0;;){const o=Hd.exec(i),s=Hd.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){Av(n,c===void 0?new Xb(a,t,e):new $b(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new Yb(a),Av(n,f)),n=f}}}class xc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);qb(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function Rv(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Kb=37297;let Zb=0;function Qb(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}function Jb(t){const e=dt.getPrimaries(dt.workingColorSpace),n=dt.getPrimaries(t);let i;switch(e===n?i="":e===tu&&n===eu?i="LinearDisplayP3ToLinearSRGB":e===eu&&n===tu&&(i="LinearSRGBToLinearDisplayP3"),t){case Or:case bu:return[i,"LinearTransferOETF"];case vi:case jp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Cv(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+Qb(t.getShaderSource(e),s)}else return r}function eL(t,e){const n=Jb(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function tL(t,e){let n;switch(e){case iA:n="Linear";break;case rA:n="Reinhard";break;case oA:n="Cineon";break;case sA:n="ACESFilmic";break;case lA:n="AgX";break;case cA:n="Neutral";break;case aA:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Xl=new G;function nL(){dt.getLuminanceCoefficients(Xl);const t=Xl.x.toFixed(4),e=Xl.y.toFixed(4),n=Xl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iL(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ua).join(`
`)}function rL(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function oL(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function ua(t){return t!==""}function Pv(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sL=/^[ \t]*#include +<([\w\d./]+)>/gm;function Th(t){return t.replace(sL,lL)}const aL=new Map;function lL(t,e){let n=Ke[e];if(n===void 0){const i=aL.get(e);if(i!==void 0)n=Ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Th(n)}const cL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lv(t){return t.replace(cL,uL)}function uL(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Dv(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function dL(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===qy?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===PT?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Di&&(e="SHADOWMAP_TYPE_VSM"),e}function fL(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ps:case bs:e="ENVMAP_TYPE_CUBE";break;case Pu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hL(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case bs:e="ENVMAP_MODE_REFRACTION";break}return e}function pL(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Ky:e="ENVMAP_BLENDING_MULTIPLY";break;case tA:e="ENVMAP_BLENDING_MIX";break;case nA:e="ENVMAP_BLENDING_ADD";break}return e}function mL(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function gL(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=dL(n),c=fL(n),u=hL(n),f=pL(n),d=mL(n),p=iL(n),g=rL(o),y=r.createProgram();let m,h,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ua).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ua).join(`
`),h.length>0&&(h+=`
`)):(m=[Dv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ua).join(`
`),h=[Dv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Cr?"#define TONE_MAPPING":"",n.toneMapping!==Cr?Ke.tonemapping_pars_fragment:"",n.toneMapping!==Cr?tL("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,eL("linearToOutputTexel",n.outputColorSpace),nL(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ua).join(`
`)),s=Th(s),s=Pv(s,n),s=bv(s,n),a=Th(a),a=Pv(a,n),a=bv(a,n),s=Lv(s),a=Lv(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===Xg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Xg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const _=v+m+s,S=v+h+a,C=Rv(r,r.VERTEX_SHADER,_),A=Rv(r,r.FRAGMENT_SHADER,S);r.attachShader(y,C),r.attachShader(y,A),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function R(b){if(t.debug.checkShaderErrors){const H=r.getProgramInfoLog(y).trim(),B=r.getShaderInfoLog(C).trim(),V=r.getShaderInfoLog(A).trim();let K=!0,$=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(K=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,C,A);else{const oe=Cv(r,C,"vertex"),F=Cv(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+H+`
`+oe+`
`+F)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(B===""||V==="")&&($=!1);$&&(b.diagnostics={runnable:K,programLog:H,vertexShader:{log:B,prefix:m},fragmentShader:{log:V,prefix:h}})}r.deleteShader(C),r.deleteShader(A),E=new xc(r,y),T=oL(r,y)}let E;this.getUniforms=function(){return E===void 0&&R(this),E};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let x=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(y,Kb)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Zb++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=A,this}let vL=0;class _L{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new yL(e),n.set(e,i)),i}}class yL{constructor(e){this.id=vL++,this.code=e,this.usedTimes=0}}function xL(t,e,n,i,r,o,s){const a=new hx,l=new _L,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,x,b,H,B){const V=H.fog,K=B.geometry,$=T.isMeshStandardMaterial?H.environment:null,oe=(T.isMeshStandardMaterial?n:e).get(T.envMap||$),F=oe&&oe.mapping===Pu?oe.image.height:null,X=g[T.type];T.precision!==null&&(p=r.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const Q=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,de=Q!==void 0?Q.length:0;let Ee=0;K.morphAttributes.position!==void 0&&(Ee=1),K.morphAttributes.normal!==void 0&&(Ee=2),K.morphAttributes.color!==void 0&&(Ee=3);let We,q,ae,he;if(X){const st=yi[X];We=st.vertexShader,q=st.fragmentShader}else We=T.vertexShader,q=T.fragmentShader,l.update(T),ae=l.getVertexShaderID(T),he=l.getFragmentShaderID(T);const pe=t.getRenderTarget(),Ce=B.isInstancedMesh===!0,Oe=B.isBatchedMesh===!0,je=!!T.map,ft=!!T.matcap,D=!!oe,Dt=!!T.aoMap,Xe=!!T.lightMap,rt=!!T.bumpMap,Ie=!!T.normalMap,It=!!T.displacementMap,ke=!!T.emissiveMap,$e=!!T.metalnessMap,L=!!T.roughnessMap,w=T.anisotropy>0,Y=T.clearcoat>0,ie=T.dispersion>0,le=T.iridescence>0,re=T.sheen>0,be=T.transmission>0,_e=w&&!!T.anisotropyMap,we=Y&&!!T.clearcoatMap,Ye=Y&&!!T.clearcoatNormalMap,ce=Y&&!!T.clearcoatRoughnessMap,xe=le&&!!T.iridescenceMap,tt=le&&!!T.iridescenceThicknessMap,He=re&&!!T.sheenColorMap,Ae=re&&!!T.sheenRoughnessMap,ze=!!T.specularMap,qe=!!T.specularColorMap,_t=!!T.specularIntensityMap,k=be&&!!T.transmissionMap,fe=be&&!!T.thicknessMap,J=!!T.gradientMap,ee=!!T.alphaMap,me=T.alphaTest>0,Be=!!T.alphaHash,et=!!T.extensions;let Tt=Cr;T.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Tt=t.toneMapping);const Vt={shaderID:X,shaderType:T.type,shaderName:T.name,vertexShader:We,fragmentShader:q,defines:T.defines,customVertexShaderID:ae,customFragmentShaderID:he,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Oe,batchingColor:Oe&&B._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&B.instanceColor!==null,instancingMorph:Ce&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:pe===null?t.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Or,alphaToCoverage:!!T.alphaToCoverage,map:je,matcap:ft,envMap:D,envMapMode:D&&oe.mapping,envMapCubeUVHeight:F,aoMap:Dt,lightMap:Xe,bumpMap:rt,normalMap:Ie,displacementMap:d&&It,emissiveMap:ke,normalMapObjectSpace:Ie&&T.normalMapType===pA,normalMapTangentSpace:Ie&&T.normalMapType===hA,metalnessMap:$e,roughnessMap:L,anisotropy:w,anisotropyMap:_e,clearcoat:Y,clearcoatMap:we,clearcoatNormalMap:Ye,clearcoatRoughnessMap:ce,dispersion:ie,iridescence:le,iridescenceMap:xe,iridescenceThicknessMap:tt,sheen:re,sheenColorMap:He,sheenRoughnessMap:Ae,specularMap:ze,specularColorMap:qe,specularIntensityMap:_t,transmission:be,transmissionMap:k,thicknessMap:fe,gradientMap:J,opaque:T.transparent===!1&&T.blending===hs&&T.alphaToCoverage===!1,alphaMap:ee,alphaTest:me,alphaHash:Be,combine:T.combine,mapUv:je&&y(T.map.channel),aoMapUv:Dt&&y(T.aoMap.channel),lightMapUv:Xe&&y(T.lightMap.channel),bumpMapUv:rt&&y(T.bumpMap.channel),normalMapUv:Ie&&y(T.normalMap.channel),displacementMapUv:It&&y(T.displacementMap.channel),emissiveMapUv:ke&&y(T.emissiveMap.channel),metalnessMapUv:$e&&y(T.metalnessMap.channel),roughnessMapUv:L&&y(T.roughnessMap.channel),anisotropyMapUv:_e&&y(T.anisotropyMap.channel),clearcoatMapUv:we&&y(T.clearcoatMap.channel),clearcoatNormalMapUv:Ye&&y(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&y(T.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&y(T.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&y(T.iridescenceThicknessMap.channel),sheenColorMapUv:He&&y(T.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&y(T.sheenRoughnessMap.channel),specularMapUv:ze&&y(T.specularMap.channel),specularColorMapUv:qe&&y(T.specularColorMap.channel),specularIntensityMapUv:_t&&y(T.specularIntensityMap.channel),transmissionMapUv:k&&y(T.transmissionMap.channel),thicknessMapUv:fe&&y(T.thicknessMap.channel),alphaMapUv:ee&&y(T.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Ie||w),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!K.attributes.uv&&(je||ee),fog:!!V,useFog:T.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:B.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Ee,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&b.length>0,shadowMapType:t.shadowMap.type,toneMapping:Tt,decodeVideoTexture:je&&T.map.isVideoTexture===!0&&dt.getTransfer(T.map.colorSpace)===Et,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Fi,flipSided:T.side===Cn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:et&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&T.extensions.multiDraw===!0||Oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Vt.vertexUv1s=c.has(1),Vt.vertexUv2s=c.has(2),Vt.vertexUv3s=c.has(3),c.clear(),Vt}function h(T){const x=[];if(T.shaderID?x.push(T.shaderID):(x.push(T.customVertexShaderID),x.push(T.customFragmentShaderID)),T.defines!==void 0)for(const b in T.defines)x.push(b),x.push(T.defines[b]);return T.isRawShaderMaterial===!1&&(v(x,T),_(x,T),x.push(t.outputColorSpace)),x.push(T.customProgramCacheKey),x.join()}function v(T,x){T.push(x.precision),T.push(x.outputColorSpace),T.push(x.envMapMode),T.push(x.envMapCubeUVHeight),T.push(x.mapUv),T.push(x.alphaMapUv),T.push(x.lightMapUv),T.push(x.aoMapUv),T.push(x.bumpMapUv),T.push(x.normalMapUv),T.push(x.displacementMapUv),T.push(x.emissiveMapUv),T.push(x.metalnessMapUv),T.push(x.roughnessMapUv),T.push(x.anisotropyMapUv),T.push(x.clearcoatMapUv),T.push(x.clearcoatNormalMapUv),T.push(x.clearcoatRoughnessMapUv),T.push(x.iridescenceMapUv),T.push(x.iridescenceThicknessMapUv),T.push(x.sheenColorMapUv),T.push(x.sheenRoughnessMapUv),T.push(x.specularMapUv),T.push(x.specularColorMapUv),T.push(x.specularIntensityMapUv),T.push(x.transmissionMapUv),T.push(x.thicknessMapUv),T.push(x.combine),T.push(x.fogExp2),T.push(x.sizeAttenuation),T.push(x.morphTargetsCount),T.push(x.morphAttributeCount),T.push(x.numDirLights),T.push(x.numPointLights),T.push(x.numSpotLights),T.push(x.numSpotLightMaps),T.push(x.numHemiLights),T.push(x.numRectAreaLights),T.push(x.numDirLightShadows),T.push(x.numPointLightShadows),T.push(x.numSpotLightShadows),T.push(x.numSpotLightShadowsWithMaps),T.push(x.numLightProbes),T.push(x.shadowMapType),T.push(x.toneMapping),T.push(x.numClippingPlanes),T.push(x.numClipIntersection),T.push(x.depthPacking)}function _(T,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.skinning&&a.enable(4),x.morphTargets&&a.enable(5),x.morphNormals&&a.enable(6),x.morphColors&&a.enable(7),x.premultipliedAlpha&&a.enable(8),x.shadowMapEnabled&&a.enable(9),x.doubleSided&&a.enable(10),x.flipSided&&a.enable(11),x.useDepthPacking&&a.enable(12),x.dithering&&a.enable(13),x.transmission&&a.enable(14),x.sheen&&a.enable(15),x.opaque&&a.enable(16),x.pointsUvs&&a.enable(17),x.decodeVideoTexture&&a.enable(18),x.alphaToCoverage&&a.enable(19),T.push(a.mask)}function S(T){const x=g[T.type];let b;if(x){const H=yi[x];b=iR.clone(H.uniforms)}else b=T.uniforms;return b}function C(T,x){let b;for(let H=0,B=u.length;H<B;H++){const V=u[H];if(V.cacheKey===x){b=V,++b.usedTimes;break}}return b===void 0&&(b=new gL(t,x,T,o),u.push(b)),b}function A(T){if(--T.usedTimes===0){const x=u.indexOf(T);u[x]=u[u.length-1],u.pop(),T.destroy()}}function R(T){l.remove(T)}function E(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:S,acquireProgram:C,releaseProgram:A,releaseShaderCache:R,programs:u,dispose:E}}function SL(){let t=new WeakMap;function e(s){return t.has(s)}function n(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function i(s){t.delete(s)}function r(s,a,l){t.get(s)[a]=l}function o(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:o}}function ML(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Iv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Nv(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(f,d,p,g,y,m){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:y,group:m},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=y,h.group=m),e++,h}function a(f,d,p,g,y,m){const h=s(f,d,p,g,y,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(f,d,p,g,y,m){const h=s(f,d,p,g,y,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(f,d){n.length>1&&n.sort(f||ML),i.length>1&&i.sort(d||Iv),r.length>1&&r.sort(d||Iv)}function u(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:u,sort:c}}function EL(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new Nv,t.set(i,[s])):r>=o.length?(s=new Nv,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function wL(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new G,color:new ct};break;case"SpotLight":n={position:new G,direction:new G,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new G,color:new ct,distance:0,decay:0};break;case"HemisphereLight":n={direction:new G,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":n={color:new ct,position:new G,halfWidth:new G,halfHeight:new G};break}return t[e.id]=n,n}}}function TL(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let AL=0;function RL(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function CL(t){const e=new wL,n=TL(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);const r=new G,o=new Ht,s=new Ht;function a(c){let u=0,f=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,g=0,y=0,m=0,h=0,v=0,_=0,S=0,C=0,A=0,R=0;c.sort(RL);for(let T=0,x=c.length;T<x;T++){const b=c[T],H=b.color,B=b.intensity,V=b.distance,K=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)u+=H.r*B,f+=H.g*B,d+=H.b*B;else if(b.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(b.sh.coefficients[$],B);R++}else if(b.isDirectionalLight){const $=e.get(b);if($.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const oe=b.shadow,F=n.get(b);F.shadowIntensity=oe.intensity,F.shadowBias=oe.bias,F.shadowNormalBias=oe.normalBias,F.shadowRadius=oe.radius,F.shadowMapSize=oe.mapSize,i.directionalShadow[p]=F,i.directionalShadowMap[p]=K,i.directionalShadowMatrix[p]=b.shadow.matrix,v++}i.directional[p]=$,p++}else if(b.isSpotLight){const $=e.get(b);$.position.setFromMatrixPosition(b.matrixWorld),$.color.copy(H).multiplyScalar(B),$.distance=V,$.coneCos=Math.cos(b.angle),$.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),$.decay=b.decay,i.spot[y]=$;const oe=b.shadow;if(b.map&&(i.spotLightMap[C]=b.map,C++,oe.updateMatrices(b),b.castShadow&&A++),i.spotLightMatrix[y]=oe.matrix,b.castShadow){const F=n.get(b);F.shadowIntensity=oe.intensity,F.shadowBias=oe.bias,F.shadowNormalBias=oe.normalBias,F.shadowRadius=oe.radius,F.shadowMapSize=oe.mapSize,i.spotShadow[y]=F,i.spotShadowMap[y]=K,S++}y++}else if(b.isRectAreaLight){const $=e.get(b);$.color.copy(H).multiplyScalar(B),$.halfWidth.set(b.width*.5,0,0),$.halfHeight.set(0,b.height*.5,0),i.rectArea[m]=$,m++}else if(b.isPointLight){const $=e.get(b);if($.color.copy(b.color).multiplyScalar(b.intensity),$.distance=b.distance,$.decay=b.decay,b.castShadow){const oe=b.shadow,F=n.get(b);F.shadowIntensity=oe.intensity,F.shadowBias=oe.bias,F.shadowNormalBias=oe.normalBias,F.shadowRadius=oe.radius,F.shadowMapSize=oe.mapSize,F.shadowCameraNear=oe.camera.near,F.shadowCameraFar=oe.camera.far,i.pointShadow[g]=F,i.pointShadowMap[g]=K,i.pointShadowMatrix[g]=b.shadow.matrix,_++}i.point[g]=$,g++}else if(b.isHemisphereLight){const $=e.get(b);$.skyColor.copy(b.color).multiplyScalar(B),$.groundColor.copy(b.groundColor).multiplyScalar(B),i.hemi[h]=$,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const E=i.hash;(E.directionalLength!==p||E.pointLength!==g||E.spotLength!==y||E.rectAreaLength!==m||E.hemiLength!==h||E.numDirectionalShadows!==v||E.numPointShadows!==_||E.numSpotShadows!==S||E.numSpotMaps!==C||E.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=S+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,E.directionalLength=p,E.pointLength=g,E.spotLength=y,E.rectAreaLength=m,E.hemiLength=h,E.numDirectionalShadows=v,E.numPointShadows=_,E.numSpotShadows=S,E.numSpotMaps=C,E.numLightProbes=R,i.version=AL++)}function l(c,u){let f=0,d=0,p=0,g=0,y=0;const m=u.matrixWorldInverse;for(let h=0,v=c.length;h<v;h++){const _=c[h];if(_.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(_.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),s.identity(),o.copy(_.matrixWorld),o.premultiply(m),s.extractRotation(o),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(s),S.halfHeight.applyMatrix4(s),g++}else if(_.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){const S=i.hemi[y];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function Uv(t){const e=new CL(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function o(u){n.push(u)}function s(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:s}}function PL(t){let e=new WeakMap;function n(r,o=0){const s=e.get(r);let a;return s===void 0?(a=new Uv(t),e.set(r,[a])):o>=s.length?(a=new Uv(t),s.push(a)):a=s[o],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class bL extends tl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class LL extends tl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const DL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IL=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function NL(t,e,n){let i=new Sx;const r=new Ve,o=new Ve,s=new Qt,a=new bL({depthPacking:fA}),l=new LL,c={},u=n.maxTextureSize,f={[Lr]:Cn,[Cn]:Lr,[Fi]:Fi},d=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:DL,fragmentShader:IL}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ai;g.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Mi(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qy;let h=this.type;this.render=function(A,R,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const T=t.getRenderTarget(),x=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),H=t.state;H.setBlending(Rr),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const B=h!==Di&&this.type===Di,V=h===Di&&this.type!==Di;for(let K=0,$=A.length;K<$;K++){const oe=A[K],F=oe.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const X=F.getFrameExtents();if(r.multiply(X),o.copy(F.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(o.x=Math.floor(u/X.x),r.x=o.x*X.x,F.mapSize.x=o.x),r.y>u&&(o.y=Math.floor(u/X.y),r.y=o.y*X.y,F.mapSize.y=o.y)),F.map===null||B===!0||V===!0){const de=this.type!==Di?{minFilter:Jt,magFilter:Jt}:{};F.map!==null&&F.map.dispose(),F.map=new Dr(r.x,r.y,de),F.map.texture.name=oe.name+".shadowMap",F.camera.updateProjectionMatrix()}t.setRenderTarget(F.map),t.clear();const Q=F.getViewportCount();for(let de=0;de<Q;de++){const Ee=F.getViewport(de);s.set(o.x*Ee.x,o.y*Ee.y,o.x*Ee.z,o.y*Ee.w),H.viewport(s),F.updateMatrices(oe,de),i=F.getFrustum(),S(R,E,F.camera,oe,this.type)}F.isPointLightShadow!==!0&&this.type===Di&&v(F,E),F.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(T,x,b)};function v(A,R){const E=e.update(y);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Dr(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(R,null,E,d,y,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(R,null,E,p,y,null)}function _(A,R,E,T){let x=null;const b=E.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(b!==void 0)x=b;else if(x=E.isPointLight===!0?l:a,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const H=x.uuid,B=R.uuid;let V=c[H];V===void 0&&(V={},c[H]=V);let K=V[B];K===void 0&&(K=x.clone(),V[B]=K,R.addEventListener("dispose",C)),x=K}if(x.visible=R.visible,x.wireframe=R.wireframe,T===Di?x.side=R.shadowSide!==null?R.shadowSide:R.side:x.side=R.shadowSide!==null?R.shadowSide:f[R.side],x.alphaMap=R.alphaMap,x.alphaTest=R.alphaTest,x.map=R.map,x.clipShadows=R.clipShadows,x.clippingPlanes=R.clippingPlanes,x.clipIntersection=R.clipIntersection,x.displacementMap=R.displacementMap,x.displacementScale=R.displacementScale,x.displacementBias=R.displacementBias,x.wireframeLinewidth=R.wireframeLinewidth,x.linewidth=R.linewidth,E.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const H=t.properties.get(x);H.light=E}return x}function S(A,R,E,T,x){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===Di)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,A.matrixWorld);const B=e.update(A),V=A.material;if(Array.isArray(V)){const K=B.groups;for(let $=0,oe=K.length;$<oe;$++){const F=K[$],X=V[F.materialIndex];if(X&&X.visible){const Q=_(A,X,T,x);A.onBeforeShadow(t,A,R,E,B,Q,F),t.renderBufferDirect(E,null,B,Q,A,F),A.onAfterShadow(t,A,R,E,B,Q,F)}}}else if(V.visible){const K=_(A,V,T,x);A.onBeforeShadow(t,A,R,E,B,K,null),t.renderBufferDirect(E,null,B,K,A,null),A.onAfterShadow(t,A,R,E,B,K,null)}}const H=A.children;for(let B=0,V=H.length;B<V;B++)S(H[B],R,E,T,x)}function C(A){A.target.removeEventListener("dispose",C);for(const E in c){const T=c[E],x=A.target.uuid;x in T&&(T[x].dispose(),delete T[x])}}}function UL(t){function e(){let k=!1;const fe=new Qt;let J=null;const ee=new Qt(0,0,0,0);return{setMask:function(me){J!==me&&!k&&(t.colorMask(me,me,me,me),J=me)},setLocked:function(me){k=me},setClear:function(me,Be,et,Tt,Vt){Vt===!0&&(me*=Tt,Be*=Tt,et*=Tt),fe.set(me,Be,et,Tt),ee.equals(fe)===!1&&(t.clearColor(me,Be,et,Tt),ee.copy(fe))},reset:function(){k=!1,J=null,ee.set(-1,0,0,0)}}}function n(){let k=!1,fe=null,J=null,ee=null;return{setTest:function(me){me?he(t.DEPTH_TEST):pe(t.DEPTH_TEST)},setMask:function(me){fe!==me&&!k&&(t.depthMask(me),fe=me)},setFunc:function(me){if(J!==me){switch(me){case YT:t.depthFunc(t.NEVER);break;case qT:t.depthFunc(t.ALWAYS);break;case KT:t.depthFunc(t.LESS);break;case Qc:t.depthFunc(t.LEQUAL);break;case ZT:t.depthFunc(t.EQUAL);break;case QT:t.depthFunc(t.GEQUAL);break;case JT:t.depthFunc(t.GREATER);break;case eA:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}J=me}},setLocked:function(me){k=me},setClear:function(me){ee!==me&&(t.clearDepth(me),ee=me)},reset:function(){k=!1,fe=null,J=null,ee=null}}}function i(){let k=!1,fe=null,J=null,ee=null,me=null,Be=null,et=null,Tt=null,Vt=null;return{setTest:function(st){k||(st?he(t.STENCIL_TEST):pe(t.STENCIL_TEST))},setMask:function(st){fe!==st&&!k&&(t.stencilMask(st),fe=st)},setFunc:function(st,ei,bn){(J!==st||ee!==ei||me!==bn)&&(t.stencilFunc(st,ei,bn),J=st,ee=ei,me=bn)},setOp:function(st,ei,bn){(Be!==st||et!==ei||Tt!==bn)&&(t.stencilOp(st,ei,bn),Be=st,et=ei,Tt=bn)},setLocked:function(st){k=st},setClear:function(st){Vt!==st&&(t.clearStencil(st),Vt=st)},reset:function(){k=!1,fe=null,J=null,ee=null,me=null,Be=null,et=null,Tt=null,Vt=null}}}const r=new e,o=new n,s=new i,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,d=[],p=null,g=!1,y=null,m=null,h=null,v=null,_=null,S=null,C=null,A=new ct(0,0,0),R=0,E=!1,T=null,x=null,b=null,H=null,B=null;const V=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,$=0;const oe=t.getParameter(t.VERSION);oe.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(oe)[1]),K=$>=1):oe.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),K=$>=2);let F=null,X={};const Q=t.getParameter(t.SCISSOR_BOX),de=t.getParameter(t.VIEWPORT),Ee=new Qt().fromArray(Q),We=new Qt().fromArray(de);function q(k,fe,J,ee){const me=new Uint8Array(4),Be=t.createTexture();t.bindTexture(k,Be),t.texParameteri(k,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(k,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let et=0;et<J;et++)k===t.TEXTURE_3D||k===t.TEXTURE_2D_ARRAY?t.texImage3D(fe,0,t.RGBA,1,1,ee,0,t.RGBA,t.UNSIGNED_BYTE,me):t.texImage2D(fe+et,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,me);return Be}const ae={};ae[t.TEXTURE_2D]=q(t.TEXTURE_2D,t.TEXTURE_2D,1),ae[t.TEXTURE_CUBE_MAP]=q(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[t.TEXTURE_2D_ARRAY]=q(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ae[t.TEXTURE_3D]=q(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),s.setClear(0),he(t.DEPTH_TEST),o.setFunc(Qc),rt(!1),Ie(Hg),he(t.CULL_FACE),Dt(Rr);function he(k){c[k]!==!0&&(t.enable(k),c[k]=!0)}function pe(k){c[k]!==!1&&(t.disable(k),c[k]=!1)}function Ce(k,fe){return u[k]!==fe?(t.bindFramebuffer(k,fe),u[k]=fe,k===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=fe),k===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=fe),!0):!1}function Oe(k,fe){let J=d,ee=!1;if(k){J=f.get(fe),J===void 0&&(J=[],f.set(fe,J));const me=k.textures;if(J.length!==me.length||J[0]!==t.COLOR_ATTACHMENT0){for(let Be=0,et=me.length;Be<et;Be++)J[Be]=t.COLOR_ATTACHMENT0+Be;J.length=me.length,ee=!0}}else J[0]!==t.BACK&&(J[0]=t.BACK,ee=!0);ee&&t.drawBuffers(J)}function je(k){return p!==k?(t.useProgram(k),p=k,!0):!1}const ft={[qr]:t.FUNC_ADD,[LT]:t.FUNC_SUBTRACT,[DT]:t.FUNC_REVERSE_SUBTRACT};ft[IT]=t.MIN,ft[NT]=t.MAX;const D={[UT]:t.ZERO,[FT]:t.ONE,[OT]:t.SRC_COLOR,[$f]:t.SRC_ALPHA,[GT]:t.SRC_ALPHA_SATURATE,[HT]:t.DST_COLOR,[zT]:t.DST_ALPHA,[kT]:t.ONE_MINUS_SRC_COLOR,[Yf]:t.ONE_MINUS_SRC_ALPHA,[VT]:t.ONE_MINUS_DST_COLOR,[BT]:t.ONE_MINUS_DST_ALPHA,[WT]:t.CONSTANT_COLOR,[jT]:t.ONE_MINUS_CONSTANT_COLOR,[XT]:t.CONSTANT_ALPHA,[$T]:t.ONE_MINUS_CONSTANT_ALPHA};function Dt(k,fe,J,ee,me,Be,et,Tt,Vt,st){if(k===Rr){g===!0&&(pe(t.BLEND),g=!1);return}if(g===!1&&(he(t.BLEND),g=!0),k!==bT){if(k!==y||st!==E){if((m!==qr||_!==qr)&&(t.blendEquation(t.FUNC_ADD),m=qr,_=qr),st)switch(k){case hs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Xf:t.blendFunc(t.ONE,t.ONE);break;case Vg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Gg:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case hs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Xf:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Vg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Gg:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}h=null,v=null,S=null,C=null,A.set(0,0,0),R=0,y=k,E=st}return}me=me||fe,Be=Be||J,et=et||ee,(fe!==m||me!==_)&&(t.blendEquationSeparate(ft[fe],ft[me]),m=fe,_=me),(J!==h||ee!==v||Be!==S||et!==C)&&(t.blendFuncSeparate(D[J],D[ee],D[Be],D[et]),h=J,v=ee,S=Be,C=et),(Tt.equals(A)===!1||Vt!==R)&&(t.blendColor(Tt.r,Tt.g,Tt.b,Vt),A.copy(Tt),R=Vt),y=k,E=!1}function Xe(k,fe){k.side===Fi?pe(t.CULL_FACE):he(t.CULL_FACE);let J=k.side===Cn;fe&&(J=!J),rt(J),k.blending===hs&&k.transparent===!1?Dt(Rr):Dt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);const ee=k.stencilWrite;s.setTest(ee),ee&&(s.setMask(k.stencilWriteMask),s.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),s.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ke(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?he(t.SAMPLE_ALPHA_TO_COVERAGE):pe(t.SAMPLE_ALPHA_TO_COVERAGE)}function rt(k){T!==k&&(k?t.frontFace(t.CW):t.frontFace(t.CCW),T=k)}function Ie(k){k!==RT?(he(t.CULL_FACE),k!==x&&(k===Hg?t.cullFace(t.BACK):k===CT?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):pe(t.CULL_FACE),x=k}function It(k){k!==b&&(K&&t.lineWidth(k),b=k)}function ke(k,fe,J){k?(he(t.POLYGON_OFFSET_FILL),(H!==fe||B!==J)&&(t.polygonOffset(fe,J),H=fe,B=J)):pe(t.POLYGON_OFFSET_FILL)}function $e(k){k?he(t.SCISSOR_TEST):pe(t.SCISSOR_TEST)}function L(k){k===void 0&&(k=t.TEXTURE0+V-1),F!==k&&(t.activeTexture(k),F=k)}function w(k,fe,J){J===void 0&&(F===null?J=t.TEXTURE0+V-1:J=F);let ee=X[J];ee===void 0&&(ee={type:void 0,texture:void 0},X[J]=ee),(ee.type!==k||ee.texture!==fe)&&(F!==J&&(t.activeTexture(J),F=J),t.bindTexture(k,fe||ae[k]),ee.type=k,ee.texture=fe)}function Y(){const k=X[F];k!==void 0&&k.type!==void 0&&(t.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ie(){try{t.compressedTexImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function le(){try{t.compressedTexImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function re(){try{t.texSubImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function be(){try{t.texSubImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _e(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function we(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ye(){try{t.texStorage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ce(){try{t.texStorage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xe(){try{t.texImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function tt(){try{t.texImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function He(k){Ee.equals(k)===!1&&(t.scissor(k.x,k.y,k.z,k.w),Ee.copy(k))}function Ae(k){We.equals(k)===!1&&(t.viewport(k.x,k.y,k.z,k.w),We.copy(k))}function ze(k,fe){let J=l.get(fe);J===void 0&&(J=new WeakMap,l.set(fe,J));let ee=J.get(k);ee===void 0&&(ee=t.getUniformBlockIndex(fe,k.name),J.set(k,ee))}function qe(k,fe){const ee=l.get(fe).get(k);a.get(fe)!==ee&&(t.uniformBlockBinding(fe,ee,k.__bindingPointIndex),a.set(fe,ee))}function _t(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},F=null,X={},u={},f=new WeakMap,d=[],p=null,g=!1,y=null,m=null,h=null,v=null,_=null,S=null,C=null,A=new ct(0,0,0),R=0,E=!1,T=null,x=null,b=null,H=null,B=null,Ee.set(0,0,t.canvas.width,t.canvas.height),We.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),s.reset()}return{buffers:{color:r,depth:o,stencil:s},enable:he,disable:pe,bindFramebuffer:Ce,drawBuffers:Oe,useProgram:je,setBlending:Dt,setMaterial:Xe,setFlipSided:rt,setCullFace:Ie,setLineWidth:It,setPolygonOffset:ke,setScissorTest:$e,activeTexture:L,bindTexture:w,unbindTexture:Y,compressedTexImage2D:ie,compressedTexImage3D:le,texImage2D:xe,texImage3D:tt,updateUBOMapping:ze,uniformBlockBinding:qe,texStorage2D:Ye,texStorage3D:ce,texSubImage2D:re,texSubImage3D:be,compressedTexSubImage2D:_e,compressedTexSubImage3D:we,scissor:He,viewport:Ae,reset:_t}}function Fv(t,e,n,i){const r=FL(i);switch(n){case tx:return t*e;case ix:return t*e;case rx:return t*e*2;case ox:return t*e/r.components*r.byteLength;case Vp:return t*e/r.components*r.byteLength;case sx:return t*e*2/r.components*r.byteLength;case Gp:return t*e*2/r.components*r.byteLength;case nx:return t*e*3/r.components*r.byteLength;case kn:return t*e*4/r.components*r.byteLength;case Wp:return t*e*4/r.components*r.byteLength;case mc:case gc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case vc:case _c:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case eh:case nh:return Math.max(t,16)*Math.max(e,8)/4;case Jf:case th:return Math.max(t,8)*Math.max(e,8)/2;case ih:case rh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case oh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case sh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ah:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case lh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case ch:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case uh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case dh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case fh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case hh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case ph:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case mh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case gh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case vh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case _h:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case yh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case yc:case xh:case Sh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case ax:case Mh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Eh:case wh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function FL(t){switch(t){case qi:case Qy:return{byteLength:1,components:1};case ja:case Jy:case zs:return{byteLength:2,components:1};case Bp:case Hp:return{byteLength:2,components:4};case po:case zp:case ui:return{byteLength:4,components:1};case ex:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function OL(t,e,n,i,r,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ve,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,w){return p?new OffscreenCanvas(L,w):iu("canvas")}function y(L,w,Y){let ie=1;const le=$e(L);if((le.width>Y||le.height>Y)&&(ie=Y/Math.max(le.width,le.height)),ie<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const re=Math.floor(ie*le.width),be=Math.floor(ie*le.height);f===void 0&&(f=g(re,be));const _e=w?g(re,be):f;return _e.width=re,_e.height=be,_e.getContext("2d").drawImage(L,0,0,re,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+re+"x"+be+")."),_e}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),L;return L}function m(L){return L.generateMipmaps&&L.minFilter!==Jt&&L.minFilter!==ci}function h(L){t.generateMipmap(L)}function v(L,w,Y,ie,le=!1){if(L!==null){if(t[L]!==void 0)return t[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let re=w;if(w===t.RED&&(Y===t.FLOAT&&(re=t.R32F),Y===t.HALF_FLOAT&&(re=t.R16F),Y===t.UNSIGNED_BYTE&&(re=t.R8)),w===t.RED_INTEGER&&(Y===t.UNSIGNED_BYTE&&(re=t.R8UI),Y===t.UNSIGNED_SHORT&&(re=t.R16UI),Y===t.UNSIGNED_INT&&(re=t.R32UI),Y===t.BYTE&&(re=t.R8I),Y===t.SHORT&&(re=t.R16I),Y===t.INT&&(re=t.R32I)),w===t.RG&&(Y===t.FLOAT&&(re=t.RG32F),Y===t.HALF_FLOAT&&(re=t.RG16F),Y===t.UNSIGNED_BYTE&&(re=t.RG8)),w===t.RG_INTEGER&&(Y===t.UNSIGNED_BYTE&&(re=t.RG8UI),Y===t.UNSIGNED_SHORT&&(re=t.RG16UI),Y===t.UNSIGNED_INT&&(re=t.RG32UI),Y===t.BYTE&&(re=t.RG8I),Y===t.SHORT&&(re=t.RG16I),Y===t.INT&&(re=t.RG32I)),w===t.RGB&&Y===t.UNSIGNED_INT_5_9_9_9_REV&&(re=t.RGB9_E5),w===t.RGBA){const be=le?Jc:dt.getTransfer(ie);Y===t.FLOAT&&(re=t.RGBA32F),Y===t.HALF_FLOAT&&(re=t.RGBA16F),Y===t.UNSIGNED_BYTE&&(re=be===Et?t.SRGB8_ALPHA8:t.RGBA8),Y===t.UNSIGNED_SHORT_4_4_4_4&&(re=t.RGBA4),Y===t.UNSIGNED_SHORT_5_5_5_1&&(re=t.RGB5_A1)}return(re===t.R16F||re===t.R32F||re===t.RG16F||re===t.RG32F||re===t.RGBA16F||re===t.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function _(L,w){let Y;return L?w===null||w===po||w===Ls?Y=t.DEPTH24_STENCIL8:w===ui?Y=t.DEPTH32F_STENCIL8:w===ja&&(Y=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===po||w===Ls?Y=t.DEPTH_COMPONENT24:w===ui?Y=t.DEPTH_COMPONENT32F:w===ja&&(Y=t.DEPTH_COMPONENT16),Y}function S(L,w){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==Jt&&L.minFilter!==ci?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function C(L){const w=L.target;w.removeEventListener("dispose",C),R(w),w.isVideoTexture&&u.delete(w)}function A(L){const w=L.target;w.removeEventListener("dispose",A),T(w)}function R(L){const w=i.get(L);if(w.__webglInit===void 0)return;const Y=L.source,ie=d.get(Y);if(ie){const le=ie[w.__cacheKey];le.usedTimes--,le.usedTimes===0&&E(L),Object.keys(ie).length===0&&d.delete(Y)}i.remove(L)}function E(L){const w=i.get(L);t.deleteTexture(w.__webglTexture);const Y=L.source,ie=d.get(Y);delete ie[w.__cacheKey],s.memory.textures--}function T(L){const w=i.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(w.__webglFramebuffer[ie]))for(let le=0;le<w.__webglFramebuffer[ie].length;le++)t.deleteFramebuffer(w.__webglFramebuffer[ie][le]);else t.deleteFramebuffer(w.__webglFramebuffer[ie]);w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer[ie])}else{if(Array.isArray(w.__webglFramebuffer))for(let ie=0;ie<w.__webglFramebuffer.length;ie++)t.deleteFramebuffer(w.__webglFramebuffer[ie]);else t.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&t.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ie=0;ie<w.__webglColorRenderbuffer.length;ie++)w.__webglColorRenderbuffer[ie]&&t.deleteRenderbuffer(w.__webglColorRenderbuffer[ie]);w.__webglDepthRenderbuffer&&t.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Y=L.textures;for(let ie=0,le=Y.length;ie<le;ie++){const re=i.get(Y[ie]);re.__webglTexture&&(t.deleteTexture(re.__webglTexture),s.memory.textures--),i.remove(Y[ie])}i.remove(L)}let x=0;function b(){x=0}function H(){const L=x;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),x+=1,L}function B(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function V(L,w){const Y=i.get(L);if(L.isVideoTexture&&It(L),L.isRenderTargetTexture===!1&&L.version>0&&Y.__version!==L.version){const ie=L.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{We(Y,L,w);return}}n.bindTexture(t.TEXTURE_2D,Y.__webglTexture,t.TEXTURE0+w)}function K(L,w){const Y=i.get(L);if(L.version>0&&Y.__version!==L.version){We(Y,L,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,Y.__webglTexture,t.TEXTURE0+w)}function $(L,w){const Y=i.get(L);if(L.version>0&&Y.__version!==L.version){We(Y,L,w);return}n.bindTexture(t.TEXTURE_3D,Y.__webglTexture,t.TEXTURE0+w)}function oe(L,w){const Y=i.get(L);if(L.version>0&&Y.__version!==L.version){q(Y,L,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture,t.TEXTURE0+w)}const F={[Zf]:t.REPEAT,[zi]:t.CLAMP_TO_EDGE,[Qf]:t.MIRRORED_REPEAT},X={[Jt]:t.NEAREST,[uA]:t.NEAREST_MIPMAP_NEAREST,[Tl]:t.NEAREST_MIPMAP_LINEAR,[ci]:t.LINEAR,[vd]:t.LINEAR_MIPMAP_NEAREST,[no]:t.LINEAR_MIPMAP_LINEAR},Q={[mA]:t.NEVER,[SA]:t.ALWAYS,[gA]:t.LESS,[lx]:t.LEQUAL,[vA]:t.EQUAL,[xA]:t.GEQUAL,[_A]:t.GREATER,[yA]:t.NOTEQUAL};function de(L,w){if(w.type===ui&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===ci||w.magFilter===vd||w.magFilter===Tl||w.magFilter===no||w.minFilter===ci||w.minFilter===vd||w.minFilter===Tl||w.minFilter===no)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(L,t.TEXTURE_WRAP_S,F[w.wrapS]),t.texParameteri(L,t.TEXTURE_WRAP_T,F[w.wrapT]),(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)&&t.texParameteri(L,t.TEXTURE_WRAP_R,F[w.wrapR]),t.texParameteri(L,t.TEXTURE_MAG_FILTER,X[w.magFilter]),t.texParameteri(L,t.TEXTURE_MIN_FILTER,X[w.minFilter]),w.compareFunction&&(t.texParameteri(L,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(L,t.TEXTURE_COMPARE_FUNC,Q[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Jt||w.minFilter!==Tl&&w.minFilter!==no||w.type===ui&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");t.texParameterf(L,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Ee(L,w){let Y=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",C));const ie=w.source;let le=d.get(ie);le===void 0&&(le={},d.set(ie,le));const re=B(w);if(re!==L.__cacheKey){le[re]===void 0&&(le[re]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,Y=!0),le[re].usedTimes++;const be=le[L.__cacheKey];be!==void 0&&(le[L.__cacheKey].usedTimes--,be.usedTimes===0&&E(w)),L.__cacheKey=re,L.__webglTexture=le[re].texture}return Y}function We(L,w,Y){let ie=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ie=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ie=t.TEXTURE_3D);const le=Ee(L,w),re=w.source;n.bindTexture(ie,L.__webglTexture,t.TEXTURE0+Y);const be=i.get(re);if(re.version!==be.__version||le===!0){n.activeTexture(t.TEXTURE0+Y);const _e=dt.getPrimaries(dt.workingColorSpace),we=w.colorSpace===pr?null:dt.getPrimaries(w.colorSpace),Ye=w.colorSpace===pr||_e===we?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let ce=y(w.image,!1,r.maxTextureSize);ce=ke(w,ce);const xe=o.convert(w.format,w.colorSpace),tt=o.convert(w.type);let He=v(w.internalFormat,xe,tt,w.colorSpace,w.isVideoTexture);de(ie,w);let Ae;const ze=w.mipmaps,qe=w.isVideoTexture!==!0,_t=be.__version===void 0||le===!0,k=re.dataReady,fe=S(w,ce);if(w.isDepthTexture)He=_(w.format===Ds,w.type),_t&&(qe?n.texStorage2D(t.TEXTURE_2D,1,He,ce.width,ce.height):n.texImage2D(t.TEXTURE_2D,0,He,ce.width,ce.height,0,xe,tt,null));else if(w.isDataTexture)if(ze.length>0){qe&&_t&&n.texStorage2D(t.TEXTURE_2D,fe,He,ze[0].width,ze[0].height);for(let J=0,ee=ze.length;J<ee;J++)Ae=ze[J],qe?k&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,Ae.width,Ae.height,xe,tt,Ae.data):n.texImage2D(t.TEXTURE_2D,J,He,Ae.width,Ae.height,0,xe,tt,Ae.data);w.generateMipmaps=!1}else qe?(_t&&n.texStorage2D(t.TEXTURE_2D,fe,He,ce.width,ce.height),k&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ce.width,ce.height,xe,tt,ce.data)):n.texImage2D(t.TEXTURE_2D,0,He,ce.width,ce.height,0,xe,tt,ce.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){qe&&_t&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,He,ze[0].width,ze[0].height,ce.depth);for(let J=0,ee=ze.length;J<ee;J++)if(Ae=ze[J],w.format!==kn)if(xe!==null)if(qe){if(k)if(w.layerUpdates.size>0){const me=Fv(Ae.width,Ae.height,w.format,w.type);for(const Be of w.layerUpdates){const et=Ae.data.subarray(Be*me/Ae.data.BYTES_PER_ELEMENT,(Be+1)*me/Ae.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,Be,Ae.width,Ae.height,1,xe,et,0,0)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,Ae.width,Ae.height,ce.depth,xe,Ae.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,J,He,Ae.width,Ae.height,ce.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?k&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,Ae.width,Ae.height,ce.depth,xe,tt,Ae.data):n.texImage3D(t.TEXTURE_2D_ARRAY,J,He,Ae.width,Ae.height,ce.depth,0,xe,tt,Ae.data)}else{qe&&_t&&n.texStorage2D(t.TEXTURE_2D,fe,He,ze[0].width,ze[0].height);for(let J=0,ee=ze.length;J<ee;J++)Ae=ze[J],w.format!==kn?xe!==null?qe?k&&n.compressedTexSubImage2D(t.TEXTURE_2D,J,0,0,Ae.width,Ae.height,xe,Ae.data):n.compressedTexImage2D(t.TEXTURE_2D,J,He,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?k&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,Ae.width,Ae.height,xe,tt,Ae.data):n.texImage2D(t.TEXTURE_2D,J,He,Ae.width,Ae.height,0,xe,tt,Ae.data)}else if(w.isDataArrayTexture)if(qe){if(_t&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,He,ce.width,ce.height,ce.depth),k)if(w.layerUpdates.size>0){const J=Fv(ce.width,ce.height,w.format,w.type);for(const ee of w.layerUpdates){const me=ce.data.subarray(ee*J/ce.data.BYTES_PER_ELEMENT,(ee+1)*J/ce.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ee,ce.width,ce.height,1,xe,tt,me)}w.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,xe,tt,ce.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,He,ce.width,ce.height,ce.depth,0,xe,tt,ce.data);else if(w.isData3DTexture)qe?(_t&&n.texStorage3D(t.TEXTURE_3D,fe,He,ce.width,ce.height,ce.depth),k&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,xe,tt,ce.data)):n.texImage3D(t.TEXTURE_3D,0,He,ce.width,ce.height,ce.depth,0,xe,tt,ce.data);else if(w.isFramebufferTexture){if(_t)if(qe)n.texStorage2D(t.TEXTURE_2D,fe,He,ce.width,ce.height);else{let J=ce.width,ee=ce.height;for(let me=0;me<fe;me++)n.texImage2D(t.TEXTURE_2D,me,He,J,ee,0,xe,tt,null),J>>=1,ee>>=1}}else if(ze.length>0){if(qe&&_t){const J=$e(ze[0]);n.texStorage2D(t.TEXTURE_2D,fe,He,J.width,J.height)}for(let J=0,ee=ze.length;J<ee;J++)Ae=ze[J],qe?k&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,xe,tt,Ae):n.texImage2D(t.TEXTURE_2D,J,He,xe,tt,Ae);w.generateMipmaps=!1}else if(qe){if(_t){const J=$e(ce);n.texStorage2D(t.TEXTURE_2D,fe,He,J.width,J.height)}k&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,xe,tt,ce)}else n.texImage2D(t.TEXTURE_2D,0,He,xe,tt,ce);m(w)&&h(ie),be.__version=re.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function q(L,w,Y){if(w.image.length!==6)return;const ie=Ee(L,w),le=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+Y);const re=i.get(le);if(le.version!==re.__version||ie===!0){n.activeTexture(t.TEXTURE0+Y);const be=dt.getPrimaries(dt.workingColorSpace),_e=w.colorSpace===pr?null:dt.getPrimaries(w.colorSpace),we=w.colorSpace===pr||be===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Ye=w.isCompressedTexture||w.image[0].isCompressedTexture,ce=w.image[0]&&w.image[0].isDataTexture,xe=[];for(let ee=0;ee<6;ee++)!Ye&&!ce?xe[ee]=y(w.image[ee],!0,r.maxCubemapSize):xe[ee]=ce?w.image[ee].image:w.image[ee],xe[ee]=ke(w,xe[ee]);const tt=xe[0],He=o.convert(w.format,w.colorSpace),Ae=o.convert(w.type),ze=v(w.internalFormat,He,Ae,w.colorSpace),qe=w.isVideoTexture!==!0,_t=re.__version===void 0||ie===!0,k=le.dataReady;let fe=S(w,tt);de(t.TEXTURE_CUBE_MAP,w);let J;if(Ye){qe&&_t&&n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,ze,tt.width,tt.height);for(let ee=0;ee<6;ee++){J=xe[ee].mipmaps;for(let me=0;me<J.length;me++){const Be=J[me];w.format!==kn?He!==null?qe?k&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me,0,0,Be.width,Be.height,He,Be.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me,ze,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me,0,0,Be.width,Be.height,He,Ae,Be.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me,ze,Be.width,Be.height,0,He,Ae,Be.data)}}}else{if(J=w.mipmaps,qe&&_t){J.length>0&&fe++;const ee=$e(xe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,ze,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(ce){qe?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,xe[ee].width,xe[ee].height,He,Ae,xe[ee].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,ze,xe[ee].width,xe[ee].height,0,He,Ae,xe[ee].data);for(let me=0;me<J.length;me++){const et=J[me].image[ee].image;qe?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me+1,0,0,et.width,et.height,He,Ae,et.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me+1,ze,et.width,et.height,0,He,Ae,et.data)}}else{qe?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,He,Ae,xe[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,ze,He,Ae,xe[ee]);for(let me=0;me<J.length;me++){const Be=J[me];qe?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me+1,0,0,He,Ae,Be.image[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me+1,ze,He,Ae,Be.image[ee])}}}m(w)&&h(t.TEXTURE_CUBE_MAP),re.__version=le.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function ae(L,w,Y,ie,le,re){const be=o.convert(Y.format,Y.colorSpace),_e=o.convert(Y.type),we=v(Y.internalFormat,be,_e,Y.colorSpace);if(!i.get(w).__hasExternalTextures){const ce=Math.max(1,w.width>>re),xe=Math.max(1,w.height>>re);le===t.TEXTURE_3D||le===t.TEXTURE_2D_ARRAY?n.texImage3D(le,re,we,ce,xe,w.depth,0,be,_e,null):n.texImage2D(le,re,we,ce,xe,0,be,_e,null)}n.bindFramebuffer(t.FRAMEBUFFER,L),Ie(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,le,i.get(Y).__webglTexture,0,rt(w)):(le===t.TEXTURE_2D||le>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ie,le,i.get(Y).__webglTexture,re),n.bindFramebuffer(t.FRAMEBUFFER,null)}function he(L,w,Y){if(t.bindRenderbuffer(t.RENDERBUFFER,L),w.depthBuffer){const ie=w.depthTexture,le=ie&&ie.isDepthTexture?ie.type:null,re=_(w.stencilBuffer,le),be=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,_e=rt(w);Ie(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,_e,re,w.width,w.height):Y?t.renderbufferStorageMultisample(t.RENDERBUFFER,_e,re,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,re,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,be,t.RENDERBUFFER,L)}else{const ie=w.textures;for(let le=0;le<ie.length;le++){const re=ie[le],be=o.convert(re.format,re.colorSpace),_e=o.convert(re.type),we=v(re.internalFormat,be,_e,re.colorSpace),Ye=rt(w);Y&&Ie(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ye,we,w.width,w.height):Ie(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ye,we,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,we,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function pe(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),V(w.depthTexture,0);const ie=i.get(w.depthTexture).__webglTexture,le=rt(w);if(w.depthTexture.format===ps)Ie(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0,le):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ie,0);else if(w.depthTexture.format===Ds)Ie(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0,le):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Ce(L){const w=i.get(L),Y=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){const ie=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ie){const le=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ie.removeEventListener("dispose",le)};ie.addEventListener("dispose",le),w.__depthDisposeCallback=le}w.__boundDepthTexture=ie}if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");pe(w.__webglFramebuffer,L)}else if(Y){w.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[ie]),w.__webglDepthbuffer[ie]===void 0)w.__webglDepthbuffer[ie]=t.createRenderbuffer(),he(w.__webglDepthbuffer[ie],L,!1);else{const le=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=w.__webglDepthbuffer[ie];t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,le,t.RENDERBUFFER,re)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=t.createRenderbuffer(),he(w.__webglDepthbuffer,L,!1);else{const ie=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=w.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,le),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,le)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Oe(L,w,Y){const ie=i.get(L);w!==void 0&&ae(ie.__webglFramebuffer,L,L.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),Y!==void 0&&Ce(L)}function je(L){const w=L.texture,Y=i.get(L),ie=i.get(w);L.addEventListener("dispose",A);const le=L.textures,re=L.isWebGLCubeRenderTarget===!0,be=le.length>1;if(be||(ie.__webglTexture===void 0&&(ie.__webglTexture=t.createTexture()),ie.__version=w.version,s.memory.textures++),re){Y.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(w.mipmaps&&w.mipmaps.length>0){Y.__webglFramebuffer[_e]=[];for(let we=0;we<w.mipmaps.length;we++)Y.__webglFramebuffer[_e][we]=t.createFramebuffer()}else Y.__webglFramebuffer[_e]=t.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Y.__webglFramebuffer=[];for(let _e=0;_e<w.mipmaps.length;_e++)Y.__webglFramebuffer[_e]=t.createFramebuffer()}else Y.__webglFramebuffer=t.createFramebuffer();if(be)for(let _e=0,we=le.length;_e<we;_e++){const Ye=i.get(le[_e]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=t.createTexture(),s.memory.textures++)}if(L.samples>0&&Ie(L)===!1){Y.__webglMultisampledFramebuffer=t.createFramebuffer(),Y.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let _e=0;_e<le.length;_e++){const we=le[_e];Y.__webglColorRenderbuffer[_e]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,Y.__webglColorRenderbuffer[_e]);const Ye=o.convert(we.format,we.colorSpace),ce=o.convert(we.type),xe=v(we.internalFormat,Ye,ce,we.colorSpace,L.isXRRenderTarget===!0),tt=rt(L);t.renderbufferStorageMultisample(t.RENDERBUFFER,tt,xe,L.width,L.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,Y.__webglColorRenderbuffer[_e])}t.bindRenderbuffer(t.RENDERBUFFER,null),L.depthBuffer&&(Y.__webglDepthRenderbuffer=t.createRenderbuffer(),he(Y.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(re){n.bindTexture(t.TEXTURE_CUBE_MAP,ie.__webglTexture),de(t.TEXTURE_CUBE_MAP,w);for(let _e=0;_e<6;_e++)if(w.mipmaps&&w.mipmaps.length>0)for(let we=0;we<w.mipmaps.length;we++)ae(Y.__webglFramebuffer[_e][we],L,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,we);else ae(Y.__webglFramebuffer[_e],L,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);m(w)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(be){for(let _e=0,we=le.length;_e<we;_e++){const Ye=le[_e],ce=i.get(Ye);n.bindTexture(t.TEXTURE_2D,ce.__webglTexture),de(t.TEXTURE_2D,Ye),ae(Y.__webglFramebuffer,L,Ye,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,0),m(Ye)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let _e=t.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(_e=L.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(_e,ie.__webglTexture),de(_e,w),w.mipmaps&&w.mipmaps.length>0)for(let we=0;we<w.mipmaps.length;we++)ae(Y.__webglFramebuffer[we],L,w,t.COLOR_ATTACHMENT0,_e,we);else ae(Y.__webglFramebuffer,L,w,t.COLOR_ATTACHMENT0,_e,0);m(w)&&h(_e),n.unbindTexture()}L.depthBuffer&&Ce(L)}function ft(L){const w=L.textures;for(let Y=0,ie=w.length;Y<ie;Y++){const le=w[Y];if(m(le)){const re=L.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,be=i.get(le).__webglTexture;n.bindTexture(re,be),h(re),n.unbindTexture()}}}const D=[],Dt=[];function Xe(L){if(L.samples>0){if(Ie(L)===!1){const w=L.textures,Y=L.width,ie=L.height;let le=t.COLOR_BUFFER_BIT;const re=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,be=i.get(L),_e=w.length>1;if(_e)for(let we=0;we<w.length;we++)n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let we=0;we<w.length;we++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(le|=t.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(le|=t.STENCIL_BUFFER_BIT)),_e){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,be.__webglColorRenderbuffer[we]);const Ye=i.get(w[we]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ye,0)}t.blitFramebuffer(0,0,Y,ie,0,0,Y,ie,le,t.NEAREST),l===!0&&(D.length=0,Dt.length=0,D.push(t.COLOR_ATTACHMENT0+we),L.depthBuffer&&L.resolveDepthBuffer===!1&&(D.push(re),Dt.push(re),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Dt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,D))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),_e)for(let we=0;we<w.length;we++){n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,be.__webglColorRenderbuffer[we]);const Ye=i.get(w[we]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,Ye,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const w=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[w])}}}function rt(L){return Math.min(r.maxSamples,L.samples)}function Ie(L){const w=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function It(L){const w=s.render.frame;u.get(L)!==w&&(u.set(L,w),L.update())}function ke(L,w){const Y=L.colorSpace,ie=L.format,le=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Y!==Or&&Y!==pr&&(dt.getTransfer(Y)===Et?(ie!==kn||le!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),w}function $e(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=b,this.setTexture2D=V,this.setTexture2DArray=K,this.setTexture3D=$,this.setTextureCube=oe,this.rebindTextures=Oe,this.setupRenderTarget=je,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Ie}function kL(t,e){function n(i,r=pr){let o;const s=dt.getTransfer(r);if(i===qi)return t.UNSIGNED_BYTE;if(i===Bp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Hp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===ex)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Qy)return t.BYTE;if(i===Jy)return t.SHORT;if(i===ja)return t.UNSIGNED_SHORT;if(i===zp)return t.INT;if(i===po)return t.UNSIGNED_INT;if(i===ui)return t.FLOAT;if(i===zs)return t.HALF_FLOAT;if(i===tx)return t.ALPHA;if(i===nx)return t.RGB;if(i===kn)return t.RGBA;if(i===ix)return t.LUMINANCE;if(i===rx)return t.LUMINANCE_ALPHA;if(i===ps)return t.DEPTH_COMPONENT;if(i===Ds)return t.DEPTH_STENCIL;if(i===ox)return t.RED;if(i===Vp)return t.RED_INTEGER;if(i===sx)return t.RG;if(i===Gp)return t.RG_INTEGER;if(i===Wp)return t.RGBA_INTEGER;if(i===mc||i===gc||i===vc||i===_c)if(s===Et)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===mc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===gc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===vc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_c)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===mc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===gc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===vc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_c)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Jf||i===eh||i===th||i===nh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Jf)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===eh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===th)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===nh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ih||i===rh||i===oh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===ih||i===rh)return s===Et?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===oh)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===sh||i===ah||i===lh||i===ch||i===uh||i===dh||i===fh||i===hh||i===ph||i===mh||i===gh||i===vh||i===_h||i===yh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===sh)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ah)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===lh)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ch)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===uh)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===dh)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===fh)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hh)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ph)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===mh)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===gh)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===vh)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===_h)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===yh)return s===Et?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===yc||i===xh||i===Sh)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===yc)return s===Et?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===xh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Sh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ax||i===Mh||i===Eh||i===wh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===yc)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Mh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Eh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ls?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class zL extends Fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class $l extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const BL={type:"move"};class Vd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $l,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $l,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $l,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),h=this._getHandJoint(c,y);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(BL)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new $l;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const HL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,VL=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class GL{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new vn,o=e.properties.get(r);o.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ti({vertexShader:HL,fragmentShader:VL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Mi(new Du(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class WL extends xo{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,g=null;const y=new GL,m=n.getContextAttributes();let h=null,v=null;const _=[],S=[],C=new Ve;let A=null;const R=new Fn;R.layers.enable(1),R.viewport=new Qt;const E=new Fn;E.layers.enable(2),E.viewport=new Qt;const T=[R,E],x=new zL;x.layers.enable(1),x.layers.enable(2);let b=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ae=_[q];return ae===void 0&&(ae=new Vd,_[q]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(q){let ae=_[q];return ae===void 0&&(ae=new Vd,_[q]=ae),ae.getGripSpace()},this.getHand=function(q){let ae=_[q];return ae===void 0&&(ae=new Vd,_[q]=ae),ae.getHandSpace()};function B(q){const ae=S.indexOf(q.inputSource);if(ae===-1)return;const he=_[ae];he!==void 0&&(he.update(q.inputSource,q.frame,c||s),he.dispatchEvent({type:q.type,data:q.inputSource}))}function V(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",K);for(let q=0;q<_.length;q++){const ae=S[q];ae!==null&&(S[q]=null,_[q].disconnect(ae))}b=null,H=null,y.reset(),e.setRenderTarget(h),p=null,d=null,f=null,r=null,v=null,We.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",V),r.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const ae={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(r,n,ae),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Dr(p.framebufferWidth,p.framebufferHeight,{format:kn,type:qi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ae=null,he=null,pe=null;m.depth&&(pe=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ae=m.stencil?Ds:ps,he=m.stencil?Ls:po);const Ce={colorFormat:n.RGBA8,depthFormat:pe,scaleFactor:o};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(Ce),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Dr(d.textureWidth,d.textureHeight,{format:kn,type:qi,depthTexture:new wx(d.textureWidth,d.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),We.setContext(r),We.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function K(q){for(let ae=0;ae<q.removed.length;ae++){const he=q.removed[ae],pe=S.indexOf(he);pe>=0&&(S[pe]=null,_[pe].disconnect(he))}for(let ae=0;ae<q.added.length;ae++){const he=q.added[ae];let pe=S.indexOf(he);if(pe===-1){for(let Oe=0;Oe<_.length;Oe++)if(Oe>=S.length){S.push(he),pe=Oe;break}else if(S[Oe]===null){S[Oe]=he,pe=Oe;break}if(pe===-1)break}const Ce=_[pe];Ce&&Ce.connect(he)}}const $=new G,oe=new G;function F(q,ae,he){$.setFromMatrixPosition(ae.matrixWorld),oe.setFromMatrixPosition(he.matrixWorld);const pe=$.distanceTo(oe),Ce=ae.projectionMatrix.elements,Oe=he.projectionMatrix.elements,je=Ce[14]/(Ce[10]-1),ft=Ce[14]/(Ce[10]+1),D=(Ce[9]+1)/Ce[5],Dt=(Ce[9]-1)/Ce[5],Xe=(Ce[8]-1)/Ce[0],rt=(Oe[8]+1)/Oe[0],Ie=je*Xe,It=je*rt,ke=pe/(-Xe+rt),$e=ke*-Xe;if(ae.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX($e),q.translateZ(ke),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ce[10]===-1)q.projectionMatrix.copy(ae.projectionMatrix),q.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const L=je+ke,w=ft+ke,Y=Ie-$e,ie=It+(pe-$e),le=D*ft/w*L,re=Dt*ft/w*L;q.projectionMatrix.makePerspective(Y,ie,le,re,L,w),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function X(q,ae){ae===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ae.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let ae=q.near,he=q.far;y.texture!==null&&(y.depthNear>0&&(ae=y.depthNear),y.depthFar>0&&(he=y.depthFar)),x.near=E.near=R.near=ae,x.far=E.far=R.far=he,(b!==x.near||H!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),b=x.near,H=x.far);const pe=q.parent,Ce=x.cameras;X(x,pe);for(let Oe=0;Oe<Ce.length;Oe++)X(Ce[Oe],pe);Ce.length===2?F(x,R,E):x.projectionMatrix.copy(R.projectionMatrix),Q(q,x,pe)};function Q(q,ae,he){he===null?q.matrix.copy(ae.matrixWorld):(q.matrix.copy(he.matrixWorld),q.matrix.invert(),q.matrix.multiply(ae.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ae.projectionMatrix),q.projectionMatrixInverse.copy(ae.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Xa*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let de=null;function Ee(q,ae){if(u=ae.getViewerPose(c||s),g=ae,u!==null){const he=u.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let pe=!1;he.length!==x.cameras.length&&(x.cameras.length=0,pe=!0);for(let Oe=0;Oe<he.length;Oe++){const je=he[Oe];let ft=null;if(p!==null)ft=p.getViewport(je);else{const Dt=f.getViewSubImage(d,je);ft=Dt.viewport,Oe===0&&(e.setRenderTargetTextures(v,Dt.colorTexture,d.ignoreDepthValues?void 0:Dt.depthStencilTexture),e.setRenderTarget(v))}let D=T[Oe];D===void 0&&(D=new Fn,D.layers.enable(Oe),D.viewport=new Qt,T[Oe]=D),D.matrix.fromArray(je.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(je.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(ft.x,ft.y,ft.width,ft.height),Oe===0&&(x.matrix.copy(D.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),pe===!0&&x.cameras.push(D)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const Oe=f.getDepthInformation(he[0]);Oe&&Oe.isValid&&Oe.texture&&y.init(e,Oe,r.renderState)}}for(let he=0;he<_.length;he++){const pe=S[he],Ce=_[he];pe!==null&&Ce!==void 0&&Ce.update(pe,ae,c||s)}de&&de(q,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),g=null}const We=new Mx;We.setAnimationLoop(Ee),this.setAnimationLoop=function(q){de=q},this.dispose=function(){}}}const Wr=new Ki,jL=new Ht;function XL(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,_x(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,v,_,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?o(m,h):h.isMeshToonMaterial?(o(m,h),f(m,h)):h.isMeshPhongMaterial?(o(m,h),u(m,h)):h.isMeshStandardMaterial?(o(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,S)):h.isMeshMatcapMaterial?(o(m,h),g(m,h)):h.isMeshDepthMaterial?o(m,h):h.isMeshDistanceMaterial?(o(m,h),y(m,h)):h.isMeshNormalMaterial?o(m,h):h.isLineBasicMaterial?(s(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,v,_):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function o(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Cn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Cn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const v=e.get(h),_=v.envMap,S=v.envMapRotation;_&&(m.envMap.value=_,Wr.copy(S),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),m.envMapRotation.value.setFromMatrix4(jL.makeRotationFromEuler(Wr)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function s(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,v,_){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*v,m.scale.value=_*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,v){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Cn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function y(m,h){const v=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function $L(t,e,n,i){let r={},o={},s=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){const S=_.program;i.uniformBlockBinding(v,S)}function c(v,_){let S=r[v.id];S===void 0&&(g(v),S=u(v),r[v.id]=S,v.addEventListener("dispose",m));const C=_.program;i.updateUBOMapping(v,C);const A=e.render.frame;o[v.id]!==A&&(d(v),o[v.id]=A)}function u(v){const _=f();v.__bindingPointIndex=_;const S=t.createBuffer(),C=v.__size,A=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,C,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,S),S}function f(){for(let v=0;v<a;v++)if(s.indexOf(v)===-1)return s.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const _=r[v.id],S=v.uniforms,C=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let A=0,R=S.length;A<R;A++){const E=Array.isArray(S[A])?S[A]:[S[A]];for(let T=0,x=E.length;T<x;T++){const b=E[T];if(p(b,A,T,C)===!0){const H=b.__offset,B=Array.isArray(b.value)?b.value:[b.value];let V=0;for(let K=0;K<B.length;K++){const $=B[K],oe=y($);typeof $=="number"||typeof $=="boolean"?(b.__data[0]=$,t.bufferSubData(t.UNIFORM_BUFFER,H+V,b.__data)):$.isMatrix3?(b.__data[0]=$.elements[0],b.__data[1]=$.elements[1],b.__data[2]=$.elements[2],b.__data[3]=0,b.__data[4]=$.elements[3],b.__data[5]=$.elements[4],b.__data[6]=$.elements[5],b.__data[7]=0,b.__data[8]=$.elements[6],b.__data[9]=$.elements[7],b.__data[10]=$.elements[8],b.__data[11]=0):($.toArray(b.__data,V),V+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,H,b.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,_,S,C){const A=v.value,R=_+"_"+S;if(C[R]===void 0)return typeof A=="number"||typeof A=="boolean"?C[R]=A:C[R]=A.clone(),!0;{const E=C[R];if(typeof A=="number"||typeof A=="boolean"){if(E!==A)return C[R]=A,!0}else if(E.equals(A)===!1)return E.copy(A),!0}return!1}function g(v){const _=v.uniforms;let S=0;const C=16;for(let R=0,E=_.length;R<E;R++){const T=Array.isArray(_[R])?_[R]:[_[R]];for(let x=0,b=T.length;x<b;x++){const H=T[x],B=Array.isArray(H.value)?H.value:[H.value];for(let V=0,K=B.length;V<K;V++){const $=B[V],oe=y($),F=S%C,X=F%oe.boundary,Q=F+X;S+=X,Q!==0&&C-Q<oe.storage&&(S+=C-Q),H.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=S,S+=oe.storage}}}const A=S%C;return A>0&&(S+=C-A),v.__size=S,v.__cache={},this}function y(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){const _=v.target;_.removeEventListener("dispose",m);const S=s.indexOf(_.__bindingPointIndex);s.splice(S,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete o[_.id]}function h(){for(const v in r)t.deleteBuffer(r[v]);s=[],r={},o={}}return{bind:l,update:c,dispose:h}}class YL{constructor(e={}){const{canvas:n=kA(),context:i=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=s;const p=new Uint32Array(4),g=new Int32Array(4);let y=null,m=null;const h=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vi,this.toneMapping=Cr,this.toneMappingExposure=1;const _=this;let S=!1,C=0,A=0,R=null,E=-1,T=null;const x=new Qt,b=new Qt;let H=null;const B=new ct(0);let V=0,K=n.width,$=n.height,oe=1,F=null,X=null;const Q=new Qt(0,0,K,$),de=new Qt(0,0,K,$);let Ee=!1;const We=new Sx;let q=!1,ae=!1;const he=new Ht,pe=new G,Ce=new Qt,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function ft(){return R===null?oe:1}let D=i;function Dt(M,P){return n.getContext(M,P)}try{const M={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${kp}`),n.addEventListener("webglcontextlost",J,!1),n.addEventListener("webglcontextrestored",ee,!1),n.addEventListener("webglcontextcreationerror",me,!1),D===null){const P="webgl2";if(D=Dt(P,M),D===null)throw Dt(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Xe,rt,Ie,It,ke,$e,L,w,Y,ie,le,re,be,_e,we,Ye,ce,xe,tt,He,Ae,ze,qe,_t;function k(){Xe=new eb(D),Xe.init(),ze=new kL(D,Xe),rt=new YP(D,Xe,e,ze),Ie=new UL(D),It=new ib(D),ke=new SL,$e=new OL(D,Xe,Ie,ke,rt,ze,It),L=new KP(_),w=new JP(_),Y=new uR(D),qe=new XP(D,Y),ie=new tb(D,Y,It,qe),le=new ob(D,ie,Y,It),tt=new rb(D,rt,$e),Ye=new qP(ke),re=new xL(_,L,w,Xe,rt,qe,Ye),be=new XL(_,ke),_e=new EL,we=new PL(Xe),xe=new jP(_,L,w,Ie,le,d,l),ce=new NL(_,le,rt),_t=new $L(D,It,rt,Ie),He=new $P(D,Xe,It),Ae=new nb(D,Xe,It),It.programs=re.programs,_.capabilities=rt,_.extensions=Xe,_.properties=ke,_.renderLists=_e,_.shadowMap=ce,_.state=Ie,_.info=It}k();const fe=new WL(_,D);this.xr=fe,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const M=Xe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Xe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(M){M!==void 0&&(oe=M,this.setSize(K,$,!1))},this.getSize=function(M){return M.set(K,$)},this.setSize=function(M,P,N=!0){if(fe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=M,$=P,n.width=Math.floor(M*oe),n.height=Math.floor(P*oe),N===!0&&(n.style.width=M+"px",n.style.height=P+"px"),this.setViewport(0,0,M,P)},this.getDrawingBufferSize=function(M){return M.set(K*oe,$*oe).floor()},this.setDrawingBufferSize=function(M,P,N){K=M,$=P,oe=N,n.width=Math.floor(M*N),n.height=Math.floor(P*N),this.setViewport(0,0,M,P)},this.getCurrentViewport=function(M){return M.copy(x)},this.getViewport=function(M){return M.copy(Q)},this.setViewport=function(M,P,N,z){M.isVector4?Q.set(M.x,M.y,M.z,M.w):Q.set(M,P,N,z),Ie.viewport(x.copy(Q).multiplyScalar(oe).round())},this.getScissor=function(M){return M.copy(de)},this.setScissor=function(M,P,N,z){M.isVector4?de.set(M.x,M.y,M.z,M.w):de.set(M,P,N,z),Ie.scissor(b.copy(de).multiplyScalar(oe).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(M){Ie.setScissorTest(Ee=M)},this.setOpaqueSort=function(M){F=M},this.setTransparentSort=function(M){X=M},this.getClearColor=function(M){return M.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor.apply(xe,arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha.apply(xe,arguments)},this.clear=function(M=!0,P=!0,N=!0){let z=0;if(M){let U=!1;if(R!==null){const te=R.texture.format;U=te===Wp||te===Gp||te===Vp}if(U){const te=R.texture.type,se=te===qi||te===po||te===ja||te===Ls||te===Bp||te===Hp,ve=xe.getClearColor(),ge=xe.getClearAlpha(),Ue=ve.r,Ne=ve.g,Re=ve.b;se?(p[0]=Ue,p[1]=Ne,p[2]=Re,p[3]=ge,D.clearBufferuiv(D.COLOR,0,p)):(g[0]=Ue,g[1]=Ne,g[2]=Re,g[3]=ge,D.clearBufferiv(D.COLOR,0,g))}else z|=D.COLOR_BUFFER_BIT}P&&(z|=D.DEPTH_BUFFER_BIT),N&&(z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",J,!1),n.removeEventListener("webglcontextrestored",ee,!1),n.removeEventListener("webglcontextcreationerror",me,!1),_e.dispose(),we.dispose(),ke.dispose(),L.dispose(),w.dispose(),le.dispose(),qe.dispose(),_t.dispose(),re.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",bn),fe.removeEventListener("sessionend",kr),Wn.stop()};function J(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ee(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const M=It.autoReset,P=ce.enabled,N=ce.autoUpdate,z=ce.needsUpdate,U=ce.type;k(),It.autoReset=M,ce.enabled=P,ce.autoUpdate=N,ce.needsUpdate=z,ce.type=U}function me(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Be(M){const P=M.target;P.removeEventListener("dispose",Be),et(P)}function et(M){Tt(M),ke.remove(M)}function Tt(M){const P=ke.get(M).programs;P!==void 0&&(P.forEach(function(N){re.releaseProgram(N)}),M.isShaderMaterial&&re.releaseShaderCache(M))}this.renderBufferDirect=function(M,P,N,z,U,te){P===null&&(P=Oe);const se=U.isMesh&&U.matrixWorld.determinant()<0,ve=De(M,P,N,z,U);Ie.setMaterial(z,se);let ge=N.index,Ue=1;if(z.wireframe===!0){if(ge=ie.getWireframeAttribute(N),ge===void 0)return;Ue=2}const Ne=N.drawRange,Re=N.attributes.position;let Je=Ne.start*Ue,vt=(Ne.start+Ne.count)*Ue;te!==null&&(Je=Math.max(Je,te.start*Ue),vt=Math.min(vt,(te.start+te.count)*Ue)),ge!==null?(Je=Math.max(Je,0),vt=Math.min(vt,ge.count)):Re!=null&&(Je=Math.max(Je,0),vt=Math.min(vt,Re.count));const lt=vt-Je;if(lt<0||lt===1/0)return;qe.setup(U,z,ve,N,ge);let Yt,ot=He;if(ge!==null&&(Yt=Y.get(ge),ot=Ae,ot.setIndex(Yt)),U.isMesh)z.wireframe===!0?(Ie.setLineWidth(z.wireframeLinewidth*ft()),ot.setMode(D.LINES)):ot.setMode(D.TRIANGLES);else if(U.isLine){let Pe=z.linewidth;Pe===void 0&&(Pe=1),Ie.setLineWidth(Pe*ft()),U.isLineSegments?ot.setMode(D.LINES):U.isLineLoop?ot.setMode(D.LINE_LOOP):ot.setMode(D.LINE_STRIP)}else U.isPoints?ot.setMode(D.POINTS):U.isSprite&&ot.setMode(D.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)ot.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Xe.get("WEBGL_multi_draw"))ot.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Pe=U._multiDrawStarts,Le=U._multiDrawCounts,Fe=U._multiDrawCount,xt=ge?Y.get(ge).bytesPerElement:1,ht=ke.get(z).currentProgram.getUniforms();for(let Rt=0;Rt<Fe;Rt++)ht.setValue(D,"_gl_DrawID",Rt),ot.render(Pe[Rt]/xt,Le[Rt])}else if(U.isInstancedMesh)ot.renderInstances(Je,lt,U.count);else if(N.isInstancedBufferGeometry){const Pe=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,Le=Math.min(N.instanceCount,Pe);ot.renderInstances(Je,lt,Le)}else ot.render(Je,lt)};function Vt(M,P,N){M.transparent===!0&&M.side===Fi&&M.forceSinglePass===!1?(M.side=Cn,M.needsUpdate=!0,W(M,P,N),M.side=Lr,M.needsUpdate=!0,W(M,P,N),M.side=Fi):W(M,P,N)}this.compile=function(M,P,N=null){N===null&&(N=M),m=we.get(N),m.init(P),v.push(m),N.traverseVisible(function(U){U.isLight&&U.layers.test(P.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),M!==N&&M.traverseVisible(function(U){U.isLight&&U.layers.test(P.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights();const z=new Set;return M.traverse(function(U){const te=U.material;if(te)if(Array.isArray(te))for(let se=0;se<te.length;se++){const ve=te[se];Vt(ve,N,U),z.add(ve)}else Vt(te,N,U),z.add(te)}),v.pop(),m=null,z},this.compileAsync=function(M,P,N=null){const z=this.compile(M,P,N);return new Promise(U=>{function te(){if(z.forEach(function(se){ke.get(se).currentProgram.isReady()&&z.delete(se)}),z.size===0){U(M);return}setTimeout(te,10)}Xe.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let st=null;function ei(M){st&&st(M)}function bn(){Wn.stop()}function kr(){Wn.start()}const Wn=new Mx;Wn.setAnimationLoop(ei),typeof self<"u"&&Wn.setContext(self),this.setAnimationLoop=function(M){st=M,fe.setAnimationLoop(M),M===null?Wn.stop():Wn.start()},fe.addEventListener("sessionstart",bn),fe.addEventListener("sessionend",kr),this.render=function(M,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(P),P=fe.getCamera()),M.isScene===!0&&M.onBeforeRender(_,M,P,R),m=we.get(M,v.length),m.init(P),v.push(m),he.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),We.setFromProjectionMatrix(he),ae=this.localClippingEnabled,q=Ye.init(this.clippingPlanes,ae),y=_e.get(M,h.length),y.init(),h.push(y),fe.enabled===!0&&fe.isPresenting===!0){const te=_.xr.getDepthSensingMesh();te!==null&&So(te,P,-1/0,_.sortObjects)}So(M,P,0,_.sortObjects),y.finish(),_.sortObjects===!0&&y.sort(F,X),je=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,je&&xe.addToRenderList(y,M),this.info.render.frame++,q===!0&&Ye.beginShadows();const N=m.state.shadowsArray;ce.render(N,M,P),q===!0&&Ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=y.opaque,U=y.transmissive;if(m.setupLights(),P.isArrayCamera){const te=P.cameras;if(U.length>0)for(let se=0,ve=te.length;se<ve;se++){const ge=te[se];rl(z,U,M,ge)}je&&xe.render(M);for(let se=0,ve=te.length;se<ve;se++){const ge=te[se];il(y,M,ge,ge.viewport)}}else U.length>0&&rl(z,U,M,P),je&&xe.render(M),il(y,M,P);R!==null&&($e.updateMultisampleRenderTarget(R),$e.updateRenderTargetMipmap(R)),M.isScene===!0&&M.onAfterRender(_,M,P),qe.resetDefaultState(),E=-1,T=null,v.pop(),v.length>0?(m=v[v.length-1],q===!0&&Ye.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,h.pop(),h.length>0?y=h[h.length-1]:y=null};function So(M,P,N,z){if(M.visible===!1)return;if(M.layers.test(P.layers)){if(M.isGroup)N=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(P);else if(M.isLight)m.pushLight(M),M.castShadow&&m.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||We.intersectsSprite(M)){z&&Ce.setFromMatrixPosition(M.matrixWorld).applyMatrix4(he);const se=le.update(M),ve=M.material;ve.visible&&y.push(M,se,ve,N,Ce.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||We.intersectsObject(M))){const se=le.update(M),ve=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ce.copy(M.boundingSphere.center)):(se.boundingSphere===null&&se.computeBoundingSphere(),Ce.copy(se.boundingSphere.center)),Ce.applyMatrix4(M.matrixWorld).applyMatrix4(he)),Array.isArray(ve)){const ge=se.groups;for(let Ue=0,Ne=ge.length;Ue<Ne;Ue++){const Re=ge[Ue],Je=ve[Re.materialIndex];Je&&Je.visible&&y.push(M,se,Je,N,Ce.z,Re)}}else ve.visible&&y.push(M,se,ve,N,Ce.z,null)}}const te=M.children;for(let se=0,ve=te.length;se<ve;se++)So(te[se],P,N,z)}function il(M,P,N,z){const U=M.opaque,te=M.transmissive,se=M.transparent;m.setupLightsView(N),q===!0&&Ye.setGlobalState(_.clippingPlanes,N),z&&Ie.viewport(x.copy(z)),U.length>0&&I(U,P,N),te.length>0&&I(te,P,N),se.length>0&&I(se,P,N),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function rl(M,P,N,z){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[z.id]===void 0&&(m.state.transmissionRenderTarget[z.id]=new Dr(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float")?zs:qi,minFilter:no,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace}));const te=m.state.transmissionRenderTarget[z.id],se=z.viewport||x;te.setSize(se.z,se.w);const ve=_.getRenderTarget();_.setRenderTarget(te),_.getClearColor(B),V=_.getClearAlpha(),V<1&&_.setClearColor(16777215,.5),_.clear(),je&&xe.render(N);const ge=_.toneMapping;_.toneMapping=Cr;const Ue=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),m.setupLightsView(z),q===!0&&Ye.setGlobalState(_.clippingPlanes,z),I(M,N,z),$e.updateMultisampleRenderTarget(te),$e.updateRenderTargetMipmap(te),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let Re=0,Je=P.length;Re<Je;Re++){const vt=P[Re],lt=vt.object,Yt=vt.geometry,ot=vt.material,Pe=vt.group;if(ot.side===Fi&&lt.layers.test(z.layers)){const Le=ot.side;ot.side=Cn,ot.needsUpdate=!0,O(lt,N,z,Yt,ot,Pe),ot.side=Le,ot.needsUpdate=!0,Ne=!0}}Ne===!0&&($e.updateMultisampleRenderTarget(te),$e.updateRenderTargetMipmap(te))}_.setRenderTarget(ve),_.setClearColor(B,V),Ue!==void 0&&(z.viewport=Ue),_.toneMapping=ge}function I(M,P,N){const z=P.isScene===!0?P.overrideMaterial:null;for(let U=0,te=M.length;U<te;U++){const se=M[U],ve=se.object,ge=se.geometry,Ue=z===null?se.material:z,Ne=se.group;ve.layers.test(N.layers)&&O(ve,P,N,ge,Ue,Ne)}}function O(M,P,N,z,U,te){M.onBeforeRender(_,P,N,z,U,te),M.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),U.onBeforeRender(_,P,N,z,M,te),U.transparent===!0&&U.side===Fi&&U.forceSinglePass===!1?(U.side=Cn,U.needsUpdate=!0,_.renderBufferDirect(N,P,z,U,M,te),U.side=Lr,U.needsUpdate=!0,_.renderBufferDirect(N,P,z,U,M,te),U.side=Fi):_.renderBufferDirect(N,P,z,U,M,te),M.onAfterRender(_,P,N,z,U,te)}function W(M,P,N){P.isScene!==!0&&(P=Oe);const z=ke.get(M),U=m.state.lights,te=m.state.shadowsArray,se=U.state.version,ve=re.getParameters(M,U.state,te,P,N),ge=re.getProgramCacheKey(ve);let Ue=z.programs;z.environment=M.isMeshStandardMaterial?P.environment:null,z.fog=P.fog,z.envMap=(M.isMeshStandardMaterial?w:L).get(M.envMap||z.environment),z.envMapRotation=z.environment!==null&&M.envMap===null?P.environmentRotation:M.envMapRotation,Ue===void 0&&(M.addEventListener("dispose",Be),Ue=new Map,z.programs=Ue);let Ne=Ue.get(ge);if(Ne!==void 0){if(z.currentProgram===Ne&&z.lightsStateVersion===se)return Me(M,ve),Ne}else ve.uniforms=re.getUniforms(M),M.onBeforeCompile(ve,_),Ne=re.acquireProgram(ve,ge),Ue.set(ge,Ne),z.uniforms=ve.uniforms;const Re=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Re.clippingPlanes=Ye.uniform),Me(M,ve),z.needsLights=ye(M),z.lightsStateVersion=se,z.needsLights&&(Re.ambientLightColor.value=U.state.ambient,Re.lightProbe.value=U.state.probe,Re.directionalLights.value=U.state.directional,Re.directionalLightShadows.value=U.state.directionalShadow,Re.spotLights.value=U.state.spot,Re.spotLightShadows.value=U.state.spotShadow,Re.rectAreaLights.value=U.state.rectArea,Re.ltc_1.value=U.state.rectAreaLTC1,Re.ltc_2.value=U.state.rectAreaLTC2,Re.pointLights.value=U.state.point,Re.pointLightShadows.value=U.state.pointShadow,Re.hemisphereLights.value=U.state.hemi,Re.directionalShadowMap.value=U.state.directionalShadowMap,Re.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Re.spotShadowMap.value=U.state.spotShadowMap,Re.spotLightMatrix.value=U.state.spotLightMatrix,Re.spotLightMap.value=U.state.spotLightMap,Re.pointShadowMap.value=U.state.pointShadowMap,Re.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=Ne,z.uniformsList=null,Ne}function ne(M){if(M.uniformsList===null){const P=M.currentProgram.getUniforms();M.uniformsList=xc.seqWithValue(P.seq,M.uniforms)}return M.uniformsList}function Me(M,P){const N=ke.get(M);N.outputColorSpace=P.outputColorSpace,N.batching=P.batching,N.batchingColor=P.batchingColor,N.instancing=P.instancing,N.instancingColor=P.instancingColor,N.instancingMorph=P.instancingMorph,N.skinning=P.skinning,N.morphTargets=P.morphTargets,N.morphNormals=P.morphNormals,N.morphColors=P.morphColors,N.morphTargetsCount=P.morphTargetsCount,N.numClippingPlanes=P.numClippingPlanes,N.numIntersection=P.numClipIntersection,N.vertexAlphas=P.vertexAlphas,N.vertexTangents=P.vertexTangents,N.toneMapping=P.toneMapping}function De(M,P,N,z,U){P.isScene!==!0&&(P=Oe),$e.resetTextureUnits();const te=P.fog,se=z.isMeshStandardMaterial?P.environment:null,ve=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Or,ge=(z.isMeshStandardMaterial?w:L).get(z.envMap||se),Ue=z.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,Ne=!!N.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Re=!!N.morphAttributes.position,Je=!!N.morphAttributes.normal,vt=!!N.morphAttributes.color;let lt=Cr;z.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(lt=_.toneMapping);const Yt=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ot=Yt!==void 0?Yt.length:0,Pe=ke.get(z),Le=m.state.lights;if(q===!0&&(ae===!0||M!==T)){const jn=M===T&&z.id===E;Ye.setState(z,M,jn)}let Fe=!1;z.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Le.state.version||Pe.outputColorSpace!==ve||U.isBatchedMesh&&Pe.batching===!1||!U.isBatchedMesh&&Pe.batching===!0||U.isBatchedMesh&&Pe.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Pe.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Pe.instancing===!1||!U.isInstancedMesh&&Pe.instancing===!0||U.isSkinnedMesh&&Pe.skinning===!1||!U.isSkinnedMesh&&Pe.skinning===!0||U.isInstancedMesh&&Pe.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Pe.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Pe.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Pe.instancingMorph===!1&&U.morphTexture!==null||Pe.envMap!==ge||z.fog===!0&&Pe.fog!==te||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==Ye.numPlanes||Pe.numIntersection!==Ye.numIntersection)||Pe.vertexAlphas!==Ue||Pe.vertexTangents!==Ne||Pe.morphTargets!==Re||Pe.morphNormals!==Je||Pe.morphColors!==vt||Pe.toneMapping!==lt||Pe.morphTargetsCount!==ot)&&(Fe=!0):(Fe=!0,Pe.__version=z.version);let xt=Pe.currentProgram;Fe===!0&&(xt=W(z,P,U));let ht=!1,Rt=!1,Mo=!1;const Nt=xt.getUniforms(),Qi=Pe.uniforms;if(Ie.useProgram(xt.program)&&(ht=!0,Rt=!0,Mo=!0),z.id!==E&&(E=z.id,Rt=!0),ht||T!==M){Nt.setValue(D,"projectionMatrix",M.projectionMatrix),Nt.setValue(D,"viewMatrix",M.matrixWorldInverse);const jn=Nt.map.cameraPosition;jn!==void 0&&jn.setValue(D,pe.setFromMatrixPosition(M.matrixWorld)),rt.logarithmicDepthBuffer&&Nt.setValue(D,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Nt.setValue(D,"isOrthographic",M.isOrthographicCamera===!0),T!==M&&(T=M,Rt=!0,Mo=!0)}if(U.isSkinnedMesh){Nt.setOptional(D,U,"bindMatrix"),Nt.setOptional(D,U,"bindMatrixInverse");const jn=U.skeleton;jn&&(jn.boneTexture===null&&jn.computeBoneTexture(),Nt.setValue(D,"boneTexture",jn.boneTexture,$e))}U.isBatchedMesh&&(Nt.setOptional(D,U,"batchingTexture"),Nt.setValue(D,"batchingTexture",U._matricesTexture,$e),Nt.setOptional(D,U,"batchingIdTexture"),Nt.setValue(D,"batchingIdTexture",U._indirectTexture,$e),Nt.setOptional(D,U,"batchingColorTexture"),U._colorsTexture!==null&&Nt.setValue(D,"batchingColorTexture",U._colorsTexture,$e));const Nu=N.morphAttributes;if((Nu.position!==void 0||Nu.normal!==void 0||Nu.color!==void 0)&&tt.update(U,N,xt),(Rt||Pe.receiveShadow!==U.receiveShadow)&&(Pe.receiveShadow=U.receiveShadow,Nt.setValue(D,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Qi.envMap.value=ge,Qi.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&P.environment!==null&&(Qi.envMapIntensity.value=P.environmentIntensity),Rt&&(Nt.setValue(D,"toneMappingExposure",_.toneMappingExposure),Pe.needsLights&&Ge(Qi,Mo),te&&z.fog===!0&&be.refreshFogUniforms(Qi,te),be.refreshMaterialUniforms(Qi,z,oe,$,m.state.transmissionRenderTarget[M.id]),xc.upload(D,ne(Pe),Qi,$e)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(xc.upload(D,ne(Pe),Qi,$e),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Nt.setValue(D,"center",U.center),Nt.setValue(D,"modelViewMatrix",U.modelViewMatrix),Nt.setValue(D,"normalMatrix",U.normalMatrix),Nt.setValue(D,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const jn=z.uniformsGroups;for(let Uu=0,bx=jn.length;Uu<bx;Uu++){const Kp=jn[Uu];_t.update(Kp,xt),_t.bind(Kp,xt)}}return xt}function Ge(M,P){M.ambientLightColor.needsUpdate=P,M.lightProbe.needsUpdate=P,M.directionalLights.needsUpdate=P,M.directionalLightShadows.needsUpdate=P,M.pointLights.needsUpdate=P,M.pointLightShadows.needsUpdate=P,M.spotLights.needsUpdate=P,M.spotLightShadows.needsUpdate=P,M.rectAreaLights.needsUpdate=P,M.hemisphereLights.needsUpdate=P}function ye(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(M,P,N){ke.get(M.texture).__webglTexture=P,ke.get(M.depthTexture).__webglTexture=N;const z=ke.get(M);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=N===void 0,z.__autoAllocateDepthBuffer||Xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,P){const N=ke.get(M);N.__webglFramebuffer=P,N.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(M,P=0,N=0){R=M,C=P,A=N;let z=!0,U=null,te=!1,se=!1;if(M){const ge=ke.get(M);if(ge.__useDefaultFramebuffer!==void 0)Ie.bindFramebuffer(D.FRAMEBUFFER,null),z=!1;else if(ge.__webglFramebuffer===void 0)$e.setupRenderTarget(M);else if(ge.__hasExternalTextures)$e.rebindTextures(M,ke.get(M.texture).__webglTexture,ke.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Re=M.depthTexture;if(ge.__boundDepthTexture!==Re){if(Re!==null&&ke.has(Re)&&(M.width!==Re.image.width||M.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");$e.setupDepthRenderbuffer(M)}}const Ue=M.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(se=!0);const Ne=ke.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ne[P])?U=Ne[P][N]:U=Ne[P],te=!0):M.samples>0&&$e.useMultisampledRTT(M)===!1?U=ke.get(M).__webglMultisampledFramebuffer:Array.isArray(Ne)?U=Ne[N]:U=Ne,x.copy(M.viewport),b.copy(M.scissor),H=M.scissorTest}else x.copy(Q).multiplyScalar(oe).floor(),b.copy(de).multiplyScalar(oe).floor(),H=Ee;if(Ie.bindFramebuffer(D.FRAMEBUFFER,U)&&z&&Ie.drawBuffers(M,U),Ie.viewport(x),Ie.scissor(b),Ie.setScissorTest(H),te){const ge=ke.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+P,ge.__webglTexture,N)}else if(se){const ge=ke.get(M.texture),Ue=P||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,ge.__webglTexture,N||0,Ue)}E=-1},this.readRenderTargetPixels=function(M,P,N,z,U,te,se){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=ke.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&se!==void 0&&(ve=ve[se]),ve){Ie.bindFramebuffer(D.FRAMEBUFFER,ve);try{const ge=M.texture,Ue=ge.format,Ne=ge.type;if(!rt.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=M.width-z&&N>=0&&N<=M.height-U&&D.readPixels(P,N,z,U,ze.convert(Ue),ze.convert(Ne),te)}finally{const ge=R!==null?ke.get(R).__webglFramebuffer:null;Ie.bindFramebuffer(D.FRAMEBUFFER,ge)}}},this.readRenderTargetPixelsAsync=async function(M,P,N,z,U,te,se){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=ke.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&se!==void 0&&(ve=ve[se]),ve){Ie.bindFramebuffer(D.FRAMEBUFFER,ve);try{const ge=M.texture,Ue=ge.format,Ne=ge.type;if(!rt.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(P>=0&&P<=M.width-z&&N>=0&&N<=M.height-U){const Re=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Re),D.bufferData(D.PIXEL_PACK_BUFFER,te.byteLength,D.STREAM_READ),D.readPixels(P,N,z,U,ze.convert(Ue),ze.convert(Ne),0),D.flush();const Je=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await zA(D,Je,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,Re),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,te)}finally{D.deleteBuffer(Re),D.deleteSync(Je)}return te}}finally{const ge=R!==null?ke.get(R).__webglFramebuffer:null;Ie.bindFramebuffer(D.FRAMEBUFFER,ge)}}},this.copyFramebufferToTexture=function(M,P=null,N=0){M.isTexture!==!0&&(Ea("WebGLRenderer: copyFramebufferToTexture function signature has changed."),P=arguments[0]||null,M=arguments[1]);const z=Math.pow(2,-N),U=Math.floor(M.image.width*z),te=Math.floor(M.image.height*z),se=P!==null?P.x:0,ve=P!==null?P.y:0;$e.setTexture2D(M,0),D.copyTexSubImage2D(D.TEXTURE_2D,N,0,0,se,ve,U,te),Ie.unbindTexture()},this.copyTextureToTexture=function(M,P,N=null,z=null,U=0){M.isTexture!==!0&&(Ea("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,M=arguments[1],P=arguments[2],U=arguments[3]||0,N=null);let te,se,ve,ge,Ue,Ne;N!==null?(te=N.max.x-N.min.x,se=N.max.y-N.min.y,ve=N.min.x,ge=N.min.y):(te=M.image.width,se=M.image.height,ve=0,ge=0),z!==null?(Ue=z.x,Ne=z.y):(Ue=0,Ne=0);const Re=ze.convert(P.format),Je=ze.convert(P.type);$e.setTexture2D(P,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,P.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,P.unpackAlignment);const vt=D.getParameter(D.UNPACK_ROW_LENGTH),lt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Yt=D.getParameter(D.UNPACK_SKIP_PIXELS),ot=D.getParameter(D.UNPACK_SKIP_ROWS),Pe=D.getParameter(D.UNPACK_SKIP_IMAGES),Le=M.isCompressedTexture?M.mipmaps[U]:M.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Le.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Le.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ve),D.pixelStorei(D.UNPACK_SKIP_ROWS,ge),M.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,U,Ue,Ne,te,se,Re,Je,Le.data):M.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,U,Ue,Ne,Le.width,Le.height,Re,Le.data):D.texSubImage2D(D.TEXTURE_2D,U,Ue,Ne,te,se,Re,Je,Le),D.pixelStorei(D.UNPACK_ROW_LENGTH,vt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,lt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Yt),D.pixelStorei(D.UNPACK_SKIP_ROWS,ot),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Pe),U===0&&P.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Ie.unbindTexture()},this.copyTextureToTexture3D=function(M,P,N=null,z=null,U=0){M.isTexture!==!0&&(Ea("WebGLRenderer: copyTextureToTexture3D function signature has changed."),N=arguments[0]||null,z=arguments[1]||null,M=arguments[2],P=arguments[3],U=arguments[4]||0);let te,se,ve,ge,Ue,Ne,Re,Je,vt;const lt=M.isCompressedTexture?M.mipmaps[U]:M.image;N!==null?(te=N.max.x-N.min.x,se=N.max.y-N.min.y,ve=N.max.z-N.min.z,ge=N.min.x,Ue=N.min.y,Ne=N.min.z):(te=lt.width,se=lt.height,ve=lt.depth,ge=0,Ue=0,Ne=0),z!==null?(Re=z.x,Je=z.y,vt=z.z):(Re=0,Je=0,vt=0);const Yt=ze.convert(P.format),ot=ze.convert(P.type);let Pe;if(P.isData3DTexture)$e.setTexture3D(P,0),Pe=D.TEXTURE_3D;else if(P.isDataArrayTexture||P.isCompressedArrayTexture)$e.setTexture2DArray(P,0),Pe=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,P.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,P.unpackAlignment);const Le=D.getParameter(D.UNPACK_ROW_LENGTH),Fe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),xt=D.getParameter(D.UNPACK_SKIP_PIXELS),ht=D.getParameter(D.UNPACK_SKIP_ROWS),Rt=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,lt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,lt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ge),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ue),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ne),M.isDataTexture||M.isData3DTexture?D.texSubImage3D(Pe,U,Re,Je,vt,te,se,ve,Yt,ot,lt.data):P.isCompressedArrayTexture?D.compressedTexSubImage3D(Pe,U,Re,Je,vt,te,se,ve,Yt,lt.data):D.texSubImage3D(Pe,U,Re,Je,vt,te,se,ve,Yt,ot,lt),D.pixelStorei(D.UNPACK_ROW_LENGTH,Le),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Fe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,xt),D.pixelStorei(D.UNPACK_SKIP_ROWS,ht),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Rt),U===0&&P.generateMipmaps&&D.generateMipmap(Pe),Ie.unbindTexture()},this.initRenderTarget=function(M){ke.get(M).__webglFramebuffer===void 0&&$e.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?$e.setTextureCube(M,0):M.isData3DTexture?$e.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?$e.setTexture2DArray(M,0):$e.setTexture2D(M,0),Ie.unbindTexture()},this.resetState=function(){C=0,A=0,R=null,Ie.reset(),qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===jp?"display-p3":"srgb",n.unpackColorSpace=dt.workingColorSpace===bu?"display-p3":"srgb"}}class qL extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ki,this.environmentIntensity=1,this.environmentRotation=new Ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class KL extends vn{constructor(e=null,n=1,i=1,r,o,s,a,l,c=Jt,u=Jt,f,d){super(null,s,a,l,c,u,r,o,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ZL extends tl{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ov=new Ht,Ah=new $p,Yl=new Lu,ql=new G;class QL extends Pn{constructor(e=new Ai,n=new ZL){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Yl.copy(i.boundingSphere),Yl.applyMatrix4(r),Yl.radius+=o,e.ray.intersectsSphere(Yl)===!1)return;Ov.copy(r).invert(),Ah.copy(e.ray).applyMatrix4(Ov);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,s.start),p=Math.min(c.count,s.start+s.count);for(let g=d,y=p;g<y;g++){const m=c.getX(g);ql.fromBufferAttribute(f,m),kv(ql,m,l,r,e,n,this)}}else{const d=Math.max(0,s.start),p=Math.min(f.count,s.start+s.count);for(let g=d,y=p;g<y;g++)ql.fromBufferAttribute(f,g),kv(ql,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function kv(t,e,n,i,r,o,s){const a=Ah.distanceSqToPoint(t);if(a<n){const l=new G;Ah.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:s})}}class zv{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(un(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class JL extends xo{constructor(e,n){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kp);const Bv={type:"change"},qp={type:"start"},Px={type:"end"},Kl=new $p,Hv=new ur,eD=Math.cos(70*cx.DEG2RAD),Gt=new G,Sn=2*Math.PI,gt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Gd=1e-6;class tD extends JL{constructor(e,n=null){super(e,n),this.state=gt.NONE,this.enabled=!0,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fs.ROTATE,MIDDLE:fs.DOLLY,RIGHT:fs.PAN},this.touches={ONE:rs.ROTATE,TWO:rs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new G,this._lastQuaternion=new mo,this._lastTargetPosition=new G,this._quat=new mo().setFromUnitVectors(e.up,new G(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new zv,this._sphericalDelta=new zv,this._scale=1,this._panOffset=new G,this._rotateStart=new Ve,this._rotateEnd=new Ve,this._rotateDelta=new Ve,this._panStart=new Ve,this._panEnd=new Ve,this._panDelta=new Ve,this._dollyStart=new Ve,this._dollyEnd=new Ve,this._dollyDelta=new Ve,this._dollyDirection=new G,this._mouse=new Ve,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=iD.bind(this),this._onPointerDown=nD.bind(this),this._onPointerUp=rD.bind(this),this._onContextMenu=dD.bind(this),this._onMouseWheel=aD.bind(this),this._onKeyDown=lD.bind(this),this._onTouchStart=cD.bind(this),this._onTouchMove=uD.bind(this),this._onMouseDown=oD.bind(this),this._onMouseMove=sD.bind(this),this._interceptControlDown=fD.bind(this),this._interceptControlUp=hD.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Bv),this.update(),this.state=gt.NONE}update(e=null){const n=this.object.position;Gt.copy(n).sub(this.target),Gt.applyQuaternion(this._quat),this._spherical.setFromVector3(Gt),this.autoRotate&&this.state===gt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Sn:i>Math.PI&&(i-=Sn),r<-Math.PI?r+=Sn:r>Math.PI&&(r-=Sn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=s!=this._spherical.radius}if(Gt.setFromSpherical(this._spherical),Gt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Gt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){const a=Gt.length();s=this._clampDistance(a*this._scale);const l=a-s;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),o=!!l}else if(this.object.isOrthographicCamera){const a=new G(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=l!==this.object.zoom;const c=new G(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),s=Gt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(Kl.origin.copy(this.object.position),Kl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Kl.direction))<eD?this.object.lookAt(this.target):(Hv.setFromNormalAndCoplanarPoint(this.object.up,this.target),Kl.intersectPlane(Hv,this.target))))}else if(this.object.isOrthographicCamera){const s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Gd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Gd||this._lastTargetPosition.distanceToSquared(this.target)>Gd?(this.dispatchEvent(Bv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Sn/60*this.autoRotateSpeed*e:Sn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Gt.setFromMatrixColumn(n,0),Gt.multiplyScalar(-e),this._panOffset.add(Gt)}_panUp(e,n){this.screenSpacePanning===!0?Gt.setFromMatrixColumn(n,1):(Gt.setFromMatrixColumn(n,0),Gt.crossVectors(this.object.up,Gt)),Gt.multiplyScalar(e),this._panOffset.add(Gt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Gt.copy(r).sub(this.target);let o=Gt.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/i.clientHeight,this.object.matrix),this._panUp(2*n*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,o=n-i.top,s=i.width,a=i.height;this._mouse.x=r/s*2-1,this._mouse.y=-(o/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Sn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Sn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Sn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Sn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Sn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Sn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,o=Math.sqrt(i*i+r*r);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),o=.5*(e.pageY+i.y);this._rotateEnd.set(r,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Sn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Sn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,o=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const s=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(s,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Ve,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function nD(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function iD(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function rD(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Px),this.state=gt.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function oD(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case fs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=gt.DOLLY;break;case fs.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=gt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=gt.ROTATE}break;case fs.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=gt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=gt.PAN}break;default:this.state=gt.NONE}this.state!==gt.NONE&&this.dispatchEvent(qp)}function sD(t){switch(this.state){case gt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case gt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case gt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function aD(t){this.enabled===!1||this.enableZoom===!1||this.state!==gt.NONE||(t.preventDefault(),this.dispatchEvent(qp),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(Px))}function lD(t){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(t)}function cD(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case rs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=gt.TOUCH_ROTATE;break;case rs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=gt.TOUCH_PAN;break;default:this.state=gt.NONE}break;case 2:switch(this.touches.TWO){case rs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=gt.TOUCH_DOLLY_PAN;break;case rs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=gt.TOUCH_DOLLY_ROTATE;break;default:this.state=gt.NONE}break;default:this.state=gt.NONE}this.state!==gt.NONE&&this.dispatchEvent(qp)}function uD(t){switch(this._trackPointer(t),this.state){case gt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case gt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case gt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case gt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=gt.NONE}}function dD(t){this.enabled!==!1&&t.preventDefault()}function fD(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function hD(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const pD=new Ex(-1,1,1,-1,0,1);class mD extends Ai{constructor(){super(),this.setAttribute("position",new Gi([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Gi([0,2,0,0,2,0],2))}}const gD=new mD;class vD{constructor(e){this._mesh=new Mi(gD,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,pD)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class _D{constructor(e,n,i){this.variables=[],this.currentTextureIndex=0;let r=ui;const o={passThruTexture:{value:null}},s=c(f(),o),a=new vD(s);this.setDataType=function(d){return r=d,this},this.addVariable=function(d,p,g){const y=this.createShaderMaterial(p),m={name:d,initialValueTexture:g,material:y,dependencies:null,renderTargets:[],wrapS:null,wrapT:null,minFilter:Jt,magFilter:Jt};return this.variables.push(m),m},this.setVariableDependencies=function(d,p){d.dependencies=p},this.init=function(){if(i.capabilities.maxVertexTextures===0)return"No support for vertex shader textures.";for(let d=0;d<this.variables.length;d++){const p=this.variables[d];p.renderTargets[0]=this.createRenderTarget(e,n,p.wrapS,p.wrapT,p.minFilter,p.magFilter),p.renderTargets[1]=this.createRenderTarget(e,n,p.wrapS,p.wrapT,p.minFilter,p.magFilter),this.renderTexture(p.initialValueTexture,p.renderTargets[0]),this.renderTexture(p.initialValueTexture,p.renderTargets[1]);const g=p.material,y=g.uniforms;if(p.dependencies!==null)for(let m=0;m<p.dependencies.length;m++){const h=p.dependencies[m];if(h.name!==p.name){let v=!1;for(let _=0;_<this.variables.length;_++)if(h.name===this.variables[_].name){v=!0;break}if(!v)return"Variable dependency not found. Variable="+p.name+", dependency="+h.name}y[h.name]={value:null},g.fragmentShader=`
uniform sampler2D `+h.name+`;
`+g.fragmentShader}}return this.currentTextureIndex=0,null},this.compute=function(){const d=this.currentTextureIndex,p=this.currentTextureIndex===0?1:0;for(let g=0,y=this.variables.length;g<y;g++){const m=this.variables[g];if(m.dependencies!==null){const h=m.material.uniforms;for(let v=0,_=m.dependencies.length;v<_;v++){const S=m.dependencies[v];h[S.name].value=S.renderTargets[d].texture}}this.doRenderTarget(m.material,m.renderTargets[p])}this.currentTextureIndex=p},this.getCurrentRenderTarget=function(d){return d.renderTargets[this.currentTextureIndex]},this.getAlternateRenderTarget=function(d){return d.renderTargets[this.currentTextureIndex===0?1:0]},this.dispose=function(){a.dispose();const d=this.variables;for(let p=0;p<d.length;p++){const g=d[p];g.initialValueTexture&&g.initialValueTexture.dispose();const y=g.renderTargets;for(let m=0;m<y.length;m++)y[m].dispose()}};function l(d){d.defines.resolution="vec2( "+e.toFixed(1)+", "+n.toFixed(1)+" )"}this.addResolutionDefine=l;function c(d,p){p=p||{};const g=new Ti({name:"GPUComputationShader",uniforms:p,vertexShader:u(),fragmentShader:d});return l(g),g}this.createShaderMaterial=c,this.createRenderTarget=function(d,p,g,y,m,h){return d=d||e,p=p||n,g=g||zi,y=y||zi,m=m||Jt,h=h||Jt,new Dr(d,p,{wrapS:g,wrapT:y,minFilter:m,magFilter:h,format:kn,type:r,depthBuffer:!1})},this.createTexture=function(){const d=new Float32Array(e*n*4),p=new KL(d,e,n,kn,ui);return p.needsUpdate=!0,p},this.renderTexture=function(d,p){o.passThruTexture.value=d,this.doRenderTarget(s,p),o.passThruTexture.value=null},this.doRenderTarget=function(d,p){const g=i.getRenderTarget(),y=i.xr.enabled,m=i.shadowMap.autoUpdate;i.xr.enabled=!1,i.shadowMap.autoUpdate=!1,a.material=d,i.setRenderTarget(p),a.render(i),a.material=s,i.xr.enabled=y,i.shadowMap.autoUpdate=m,i.setRenderTarget(g)};function u(){return`void main()	{

	gl_Position = vec4( position, 1.0 );

}
`}function f(){return`uniform sampler2D passThruTexture;

void main() {

	vec2 uv = gl_FragCoord.xy / resolution.xy;

	gl_FragColor = texture2D( passThruTexture, uv );

}
`}}}function yD(t){const{domElement:e,onClick:n=()=>{},onEnter:i=()=>{},onMove:r=()=>{},onLeave:o=()=>{},onDragStart:s=()=>{},onDragMove:a=()=>{},onDragStop:l=()=>{}}=t,c=new Ve,u=new Ve,f=new Ve,d=new Ve,p=new Ve,g={position:c,nPosition:u,hover:!1,down:!1,removeListeners:R};return A(),g;function y(E){f.distanceTo(c)<20&&(C(E),n({position:c,nPosition:u}))}function m(E){g.hover=E.pointerType==="mouse",C(E),i({position:c,nPosition:u})}function h(E){g.down=!0,C(E),f.copy(c),d.copy(c),s({position:c,nPosition:u})}function v(E){C(E),p.copy(c).sub(d),g.down?a({position:c,nPosition:u,startPosition:f,lastPosition:d,delta:p}):g.hover||(g.hover=!0),r({position:c,nPosition:u,startPosition:f,lastPosition:d,delta:p}),d.copy(c)}function _(E){g.down=!1,l()}function S(E){g.down&&(g.down=!1,l()),g.hover=!1,o()}function C(E){const T=e.getBoundingClientRect();c.x=E.clientX-T.left,c.y=E.clientY-T.top,u.x=c.x/T.width*2-1,u.y=-(c.y/T.height)*2+1}function A(){e.addEventListener("click",y),e.addEventListener("pointerenter",m),e.addEventListener("pointerdown",h),e.addEventListener("pointermove",v),e.addEventListener("pointerup",_),e.addEventListener("pointerleave",S)}function R(){e.removeEventListener("click",y),e.removeEventListener("pointerenter",m),e.removeEventListener("pointerdown",h),e.removeEventListener("pointermove",v),e.removeEventListener("pointerup",_),e.removeEventListener("pointerleave",S)}}function xD(t){const e={el:null,canvas:null,eventsEl:null,width:null,height:null,resize:!0,alpha:!1,antialias:!1,orbitControls:!1,init(){},initCamera(){},initScene(){},afterResize(){},beforeRender(){},...t},n={renderer:null,camera:null,scene:null,pointer:null,width:0,height:0,wWidth:0,wHeight:0,clock:{startTime:0,time:0,elapsed:0},options:e};let i,r;return o(),n;function o(){var u,f,d,p,g;let y;if(e.el)y=document.createElement("canvas"),e.el.appendChild(y);else if(e.canvas)y=e.canvas;else throw new Error("Missing parameter : el or canvas is required");(u=e.init)==null||u.call(e,n),n.renderer=new YL({canvas:y,alpha:e.alpha,antialias:e.antialias}),(f=e.initRenderer)==null||f.call(e,n),n.camera=new Fn,n.camera.position.z=50,(d=e.initCamera)==null||d.call(e,n),e.orbitControls&&(r=new tD(n.camera,(p=e.eventsEl)!=null?p:n.renderer.domElement),r.enableDamping=!0,r.dampingFactor=.1,typeof e.orbitControls=="object"&&Object.keys(e.orbitControls).forEach(m=>{r[m]=e.orbitControls[m]})),l(),e.resize&&!e.width&&!e.height&&window.addEventListener("resize",l),n.scene=new qL,(g=e.initScene)==null||g.call(e,n),s(),i=e.render?e.render:()=>{n.renderer.render(n.scene,n.camera)},requestAnimationFrame(m=>{n.clock.startTime=n.clock.time=m,requestAnimationFrame(a)})}function s(){var u,f;const d={};e.onPointerEnter&&(d.onEnter=e.onPointerEnter),e.onPointerMove&&(d.onMove=e.onPointerMove),e.onPointerMove&&(d.onLeave=e.onPointerLeave),Object.keys(d).length>0&&(n.pointer=yD({domElement:(f=e.eventsEl)!=null?f:(u=e.el)!=null?u:e.canvas,...d}))}function a(u){const{clock:f}=n;f.elapsed=u-f.time,f.time=u,e.beforeRender(n),r&&r.update(),i(n),requestAnimationFrame(a)}function l(){var u;if(e.width&&e.height)n.width=e.width,n.height=e.height;else if(e.resize==="window")n.width=window.innerWidth,n.height=window.innerHeight;else{const f=n.renderer.domElement.parentElement;n.width=f.clientWidth,n.height=f.clientHeight}if(n.renderer.setSize(n.width,n.height),n.camera.aspect=n.width/n.height,n.camera.updateProjectionMatrix(),n.camera instanceof Fn){const f=c();n.wWidth=f[0],n.wHeight=f[1]}else n.wWidth=n.camera.top-n.camera.bottom,n.wHeight=n.camera.right-n.camera.left;(u=e.afterResize)==null||u.call(e,n)}function c(){const u=n.camera.fov*Math.PI/180,f=2*Math.tan(u/2)*Math.abs(n.camera.position.z);return[f*n.camera.aspect,f]}}function SD(t){let e=[];i(t);const n=new ct;return{setColors:i,getColorAt:r};function i(o){e=[],o.forEach(s=>{e.push(new ct(s))})}function r(o){const s=Math.max(0,Math.min(1,o))*(t.length-1),a=Math.floor(s),l=e[a];if(a===t.length-1)return l.getHex();const c=s-a,u=e[a+1];return n.r=l.r+c*(u.r-l.r),n.g=l.g+c*(u.g-l.g),n.b=l.b+c*(u.b-l.b),n.clone()}}var MD=`vec4 permute(vec4 x){vec4 xm=mod(x,289.0);return mod(((xm*34.0)+10.0)*xm,289.0);}float psrdnoise(vec3 x,vec3 period,float alpha,out vec3 gradient){
#ifndef PERLINGRID
const mat3 M=mat3(0.0,1.0,1.0,1.0,0.0,1.0,1.0,1.0,0.0);const mat3 Mi=mat3(-0.5,0.5,0.5,0.5,-0.5,0.5,0.5,0.5,-0.5);
#endif
vec3 uvw;
#ifndef PERLINGRID
uvw=M*x;
#else
uvw=x+dot(x,vec3(1.0/3.0));
#endif
vec3 i0=floor(uvw);vec3 f0=fract(uvw);vec3 g_=step(f0.xyx,f0.yzz);vec3 l_=1.0-g_;vec3 g=vec3(l_.z,g_.xy);vec3 l=vec3(l_.xy,g_.z);vec3 o1=min(g,l);vec3 o2=max(g,l);vec3 i1=i0+o1;vec3 i2=i0+o2;vec3 i3=i0+vec3(1.0);vec3 v0,v1,v2,v3;
#ifndef PERLINGRID
v0=Mi*i0;v1=Mi*i1;v2=Mi*i2;v3=Mi*i3;
#else
v0=i0-dot(i0,vec3(1.0/6.0));v1=i1-dot(i1,vec3(1.0/6.0));v2=i2-dot(i2,vec3(1.0/6.0));v3=i3-dot(i3,vec3(1.0/6.0));
#endif
vec3 x0=x-v0;vec3 x1=x-v1;vec3 x2=x-v2;vec3 x3=x-v3;if(any(greaterThan(period,vec3(0.0)))){vec4 vx=vec4(v0.x,v1.x,v2.x,v3.x);vec4 vy=vec4(v0.y,v1.y,v2.y,v3.y);vec4 vz=vec4(v0.z,v1.z,v2.z,v3.z);if(period.x>0.0)vx=mod(vx,period.x);if(period.y>0.0)vy=mod(vy,period.y);if(period.z>0.0)vz=mod(vz,period.z);
#ifndef PERLINGRID
i0=M*vec3(vx.x,vy.x,vz.x);i1=M*vec3(vx.y,vy.y,vz.y);i2=M*vec3(vx.z,vy.z,vz.z);i3=M*vec3(vx.w,vy.w,vz.w);
#else
v0=vec3(vx.x,vy.x,vz.x);v1=vec3(vx.y,vy.y,vz.y);v2=vec3(vx.z,vy.z,vz.z);v3=vec3(vx.w,vy.w,vz.w);i0=v0+dot(v0,vec3(1.0/3.0));i1=v1+dot(v1,vec3(1.0/3.0));i2=v2+dot(v2,vec3(1.0/3.0));i3=v3+dot(v3,vec3(1.0/3.0));
#endif
i0=floor(i0+0.5);i1=floor(i1+0.5);i2=floor(i2+0.5);i3=floor(i3+0.5);}vec4 hash=permute(permute(permute(vec4(i0.z,i1.z,i2.z,i3.z))+vec4(i0.y,i1.y,i2.y,i3.y))+vec4(i0.x,i1.x,i2.x,i3.x));vec4 theta=hash*3.883222077;vec4 sz=hash*-0.006920415+0.996539792;vec4 psi=hash*0.108705628;vec4 Ct=cos(theta);vec4 St=sin(theta);vec4 sz_prime=sqrt(1.0-sz*sz);vec4 gx,gy,gz;
#ifdef FASTROTATION
vec4 qx=St;vec4 qy=-Ct;vec4 qz=vec4(0.0);vec4 px=sz*qy;vec4 py=-sz*qx;vec4 pz=sz_prime;psi+=alpha;vec4 Sa=sin(psi);vec4 Ca=cos(psi);gx=Ca*px+Sa*qx;gy=Ca*py+Sa*qy;gz=Ca*pz+Sa*qz;
#else
if(alpha!=0.0){vec4 Sp=sin(psi);vec4 Cp=cos(psi);vec4 px=Ct*sz_prime;vec4 py=St*sz_prime;vec4 pz=sz;vec4 Ctp=St*Sp-Ct*Cp;vec4 qx=mix(Ctp*St,Sp,sz);vec4 qy=mix(-Ctp*Ct,Cp,sz);vec4 qz=-(py*Cp+px*Sp);vec4 Sa=vec4(sin(alpha));vec4 Ca=vec4(cos(alpha));gx=Ca*px+Sa*qx;gy=Ca*py+Sa*qy;gz=Ca*pz+Sa*qz;}else{gx=Ct*sz_prime;gy=St*sz_prime;gz=sz;}
#endif
vec3 g0=vec3(gx.x,gy.x,gz.x);vec3 g1=vec3(gx.y,gy.y,gz.y);vec3 g2=vec3(gx.z,gy.z,gz.z);vec3 g3=vec3(gx.w,gy.w,gz.w);vec4 w=0.5-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3));w=max(w,0.0);vec4 w2=w*w;vec4 w3=w2*w;vec4 gdotx=vec4(dot(g0,x0),dot(g1,x1),dot(g2,x2),dot(g3,x3));float n=dot(w3,gdotx);vec4 dw=-6.0*w2*gdotx;vec3 dn0=w3.x*g0+dw.x*x0;vec3 dn1=w3.y*g1+dw.y*x1;vec3 dn2=w3.z*g2+dw.z*x2;vec3 dn3=w3.w*g3+dw.w*x3;gradient=39.5*(dn0+dn1+dn2+dn3);return 39.5*n;}`;const{randFloat:Vv,randFloatSpread:Gv}=cx,ED={gpgpuSize:256,colors:[65280,255],color:16711680,coordScale:1.5,noiseIntensity:.001,noiseTimeCoef:1e-4,pointSize:5,pointDecay:.005,sleepRadiusX:250,sleepRadiusY:250,sleepTimeCoefX:.001,sleepTimeCoefY:.002};function wD(t){const e={...ED,...t},n=e.gpgpuSize,i=n*n;let r,o,s,a,l;const c={value:0},u={value:e.coordScale},f={value:e.noiseIntensity},d={value:e.pointSize},p={value:e.pointDecay},g={value:new ct(e.color)},y={value:new Ve},m={value:new Ve},h={uTime:c,uCoordScale:u,uNoiseIntensity:f,uPointSize:d,uPointDecay:p,uColor:g,uMouse:y,uMouseDirection:m};let v,_,S,C=!1;const A=new Ve;return xD({...TD(t),antialias:!1,initRenderer({renderer:x}){R(x)},initScene({scene:x}){E(),x.add(S)},beforeRender({width:x,wWidth:b,wHeight:H,clock:B,pointer:V}){if(C)A.x=V.nPosition.x*.5*b,A.y=V.nPosition.y*.5*H;else{const K=B.time*e.sleepTimeCoefX,$=B.time*e.sleepTimeCoefY,oe=Math.cos(K),F=Math.sin($),X=e.sleepRadiusX*b/x,Q=e.sleepRadiusY*b/x;A.x=X*oe,A.y=Q*F}y.value.lerp(A,.05),c.value=B.time*e.noiseTimeCoef,r.compute(),_.uniforms.texturePosition.value=r.getCurrentRenderTarget(l).texture,_.uniforms.textureVelocity.value=r.getCurrentRenderTarget(a).texture},onPointerMove({delta:x}){C=!0,m.value.copy(x)},onPointerLeave(){C=!1}}),{config:e,uniforms:h};function R(x){r=new _D(n,n,x),x.capabilities.isWebGL2||r.setDataType(zs),o=r.createTexture(),s=r.createTexture(),T(o,s),a=r.addVariable("textureVelocity",`
      ${MD}
      uniform float uTime;
      uniform float uCoordScale;
      uniform float uNoiseIntensity;
      void main() {
        vec2 uv = gl_FragCoord.xy / resolution.xy;
        vec4 pos = texture2D(texturePosition, uv);
        vec4 vel = texture2D(textureVelocity, uv);

        if (pos.w < 0.0) {
          vel.x = 0.0;
          vel.y = 0.0;
          vel.z = 0.0;
        } else {
          vec3 grad;
          vec3 p = vec3(0.0);
          float n = psrdnoise(pos.xyz * uCoordScale, p, uTime, grad);
          vel.xyz += grad * uNoiseIntensity * pos.w;
        }
        gl_FragColor = vel;
      }
    `,s),l=r.addVariable("texturePosition",`
      uniform float uPointDecay;
      uniform vec2 uMouse;
      uniform vec2 uMouseDirection;
      void main() {
        vec2 uv = gl_FragCoord.xy / resolution.xy;
        vec4 pos = texture2D(texturePosition, uv);
        vec4 vel = texture2D(textureVelocity, uv);
        if (pos.w < 0.0) { pos.w = vel.w; }
        pos.w -= uPointDecay;
        if (pos.w <= 0.0) {
          pos.xy = uMouse.xy;
          pos.z = 0.0;
        } else {
          pos.xyz += vel.xyz;
        }
        gl_FragColor = pos;
      }
    `,o),r.setVariableDependencies(a,[l,a]),r.setVariableDependencies(l,[l,a]),Object.keys(h).forEach(H=>{a.material.uniforms[H]=h[H],l.material.uniforms[H]=h[H]});const b=r.init();b!==null&&console.error(b)}function E(){v=new Ai;const x=new Float32Array(i*3),b=new Float32Array(i*2),H=new Float32Array(i*3);for(let K=0;K<i*3;K+=3)x[K]=0,x[K+1]=0,x[K+2]=0;let B=0;for(let K=0;K<n;K++)for(let $=0;$<n;$++)b[B++]=$/(n-1),b[B++]=K/(n-1);const V=SD(e.colors);for(let K=0;K<i*3;K+=3){const $=V.getColorAt(Math.random());H[K]=$.r,H[K+1]=$.g,H[K+2]=$.b}v.setAttribute("position",new Bn(x,3)),v.setAttribute("uv",new Bn(b,2)),v.setAttribute("color",new Bn(H,3)),_=new Ti({blending:Xf,depthTest:!1,transparent:!0,vertexColors:!0,uniforms:{texturePosition:{value:null},textureVelocity:{value:null},uPointSize:d,uColor:g},vertexShader:`
        uniform sampler2D texturePosition;
        uniform sampler2D textureVelocity;
        uniform float uPointSize;
        varying vec4 vPos;
        varying vec4 vVel;
        varying vec3 vCol;
        void main() {
          vCol = color;
          vPos = texture2D(texturePosition, uv);
          vVel = texture2D(textureVelocity, uv);
          vec4 mvPosition = modelViewMatrix * vec4(vPos.xyz, 1.0);
          // gl_PointSize = smoothstep(0.0, 2.0, vPos.w) * uPointSize;
          gl_PointSize = vPos.w * (vVel.w + 0.5) * uPointSize;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        uniform vec3 uColor;
        varying vec4 vPos;
        varying vec4 vVel;
        varying vec3 vCol;
        void main() {
          float dist = length(gl_PointCoord - 0.5);
          if (dist > 0.5) discard;
          // float a = smoothstep(0.0, 1.0, vPos.w);
          gl_FragColor = vec4(mix(vCol, uColor, vPos.w), vPos.w);
        }
      `}),S=new QL(v,_),S.matrixAutoUpdate=!1,S.updateMatrix()}function T(x,b){const H=x.image.data,B=b.image.data;for(let V=0,K=H.length;V<K;V+=4)H[V+0]=Gv(1),H[V+1]=Gv(1),H[V+2]=-1e5,H[V+3]=Vv(.1,1),B[V+0]=0,B[V+1]=0,B[V+2]=0,B[V+3]=Vv(.1,1)}}function TD(t){const e={};return["el","canvas","width","height","resize"].forEach(i=>{t[i]!==void 0&&(e[i]=t[i])}),e}const AD=()=>(Z.useEffect(()=>{const t=document.getElementById("bg");if(!t)return;const e=wD({el:t,gpgpuSize:512,colors:[65532,65532],color:1940200,coordScale:.5,noiseIntensity:.005,noiseTimeCoef:1e-4,pointSize:2,pointDecay:.0025,sleepRadiusX:250,sleepRadiusY:250,sleepTimeCoefX:.001,sleepTimeCoefY:.002}),n=i=>{var r,o;(o=(r=e==null?void 0:e.uniforms)==null?void 0:r.uMousePos)!=null&&o.value&&e.uniforms.uMousePos.value.set(i.clientX/window.innerWidth,1-i.clientY/window.innerHeight)};return document.addEventListener("mousemove",n),()=>{document.removeEventListener("mousemove",n)}},[]),j.jsx("div",{id:"bg",children:j.jsxs("div",{id:"hero",children:[j.jsx("h1",{children:"Welcome to My Web Development Portfolio"}),j.jsx("p",{children:"Hi! I am Lokesh, a passionate web developer specializing in full-stack solutions. Let's create something amazing together!"}),j.jsx(Ar,{to:"/Home",className:"nav-link",alt:"Home",children:j.jsx("button",{className:"button",children:"Click to Explore"})})]})}));function RD(){const t=T1([{path:"/",element:j.jsx(AD,{}),errorElement:j.jsx(fT,{})},{path:"/Home",element:j.jsx(dT,{})},{path:"/contact",element:j.jsx(_T,{})},{path:"/projects",element:j.jsx(TT,{})}]);return j.jsxs("div",{className:"relative h-screen overflow-hidden",children:[j.jsx(AT,{}),j.jsx("div",{className:"absolute inset-0 z-10",children:j.jsx(N1,{router:t})})]})}iy(document.getElementById("root")).render(j.jsx(Z.StrictMode,{children:j.jsx(RD,{})}));export{hr as P,Wi as R,Wy as d,j,Z as r};
