(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();var _C=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Fv(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Gd={exports:{}},Ro={},Wd={exports:{}},Vt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lg;function _y(){if(Lg)return Vt;Lg=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),v=Symbol.iterator;function g(k){return k===null||typeof k!="object"?null:(k=v&&k[v]||k["@@iterator"],typeof k=="function"?k:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,b={};function M(k,J,Pe){this.props=k,this.context=J,this.refs=b,this.updater=Pe||x}M.prototype.isReactComponent={},M.prototype.setState=function(k,J){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,J,"setState")},M.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function y(){}y.prototype=M.prototype;function N(k,J,Pe){this.props=k,this.context=J,this.refs=b,this.updater=Pe||x}var P=N.prototype=new y;P.constructor=N,S(P,M.prototype),P.isPureReactComponent=!0;var T=Array.isArray,I=Object.prototype.hasOwnProperty,L={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function E(k,J,Pe){var oe,ve={},K=null,xe=null;if(J!=null)for(oe in J.ref!==void 0&&(xe=J.ref),J.key!==void 0&&(K=""+J.key),J)I.call(J,oe)&&!O.hasOwnProperty(oe)&&(ve[oe]=J[oe]);var ge=arguments.length-2;if(ge===1)ve.children=Pe;else if(1<ge){for(var ce=Array(ge),be=0;be<ge;be++)ce[be]=arguments[be+2];ve.children=ce}if(k&&k.defaultProps)for(oe in ge=k.defaultProps,ge)ve[oe]===void 0&&(ve[oe]=ge[oe]);return{$$typeof:r,type:k,key:K,ref:xe,props:ve,_owner:L.current}}function R(k,J){return{$$typeof:r,type:k.type,key:J,ref:k.ref,props:k.props,_owner:k._owner}}function z(k){return typeof k=="object"&&k!==null&&k.$$typeof===r}function B(k){var J={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(Pe){return J[Pe]})}var j=/\/+/g;function G(k,J){return typeof k=="object"&&k!==null&&k.key!=null?B(""+k.key):J.toString(36)}function de(k,J,Pe,oe,ve){var K=typeof k;(K==="undefined"||K==="boolean")&&(k=null);var xe=!1;if(k===null)xe=!0;else switch(K){case"string":case"number":xe=!0;break;case"object":switch(k.$$typeof){case r:case e:xe=!0}}if(xe)return xe=k,ve=ve(xe),k=oe===""?"."+G(xe,0):oe,T(ve)?(Pe="",k!=null&&(Pe=k.replace(j,"$&/")+"/"),de(ve,J,Pe,"",function(be){return be})):ve!=null&&(z(ve)&&(ve=R(ve,Pe+(!ve.key||xe&&xe.key===ve.key?"":(""+ve.key).replace(j,"$&/")+"/")+k)),J.push(ve)),1;if(xe=0,oe=oe===""?".":oe+":",T(k))for(var ge=0;ge<k.length;ge++){K=k[ge];var ce=oe+G(K,ge);xe+=de(K,J,Pe,ce,ve)}else if(ce=g(k),typeof ce=="function")for(k=ce.call(k),ge=0;!(K=k.next()).done;)K=K.value,ce=oe+G(K,ge++),xe+=de(K,J,Pe,ce,ve);else if(K==="object")throw J=String(k),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.");return xe}function W(k,J,Pe){if(k==null)return k;var oe=[],ve=0;return de(k,oe,"","",function(K){return J.call(Pe,K,ve++)}),oe}function ae(k){if(k._status===-1){var J=k._result;J=J(),J.then(function(Pe){(k._status===0||k._status===-1)&&(k._status=1,k._result=Pe)},function(Pe){(k._status===0||k._status===-1)&&(k._status=2,k._result=Pe)}),k._status===-1&&(k._status=0,k._result=J)}if(k._status===1)return k._result.default;throw k._result}var Q={current:null},q={transition:null},ie={ReactCurrentDispatcher:Q,ReactCurrentBatchConfig:q,ReactCurrentOwner:L};function ee(){throw Error("act(...) is not supported in production builds of React.")}return Vt.Children={map:W,forEach:function(k,J,Pe){W(k,function(){J.apply(this,arguments)},Pe)},count:function(k){var J=0;return W(k,function(){J++}),J},toArray:function(k){return W(k,function(J){return J})||[]},only:function(k){if(!z(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},Vt.Component=M,Vt.Fragment=t,Vt.Profiler=a,Vt.PureComponent=N,Vt.StrictMode=i,Vt.Suspense=h,Vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ie,Vt.act=ee,Vt.cloneElement=function(k,J,Pe){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var oe=S({},k.props),ve=k.key,K=k.ref,xe=k._owner;if(J!=null){if(J.ref!==void 0&&(K=J.ref,xe=L.current),J.key!==void 0&&(ve=""+J.key),k.type&&k.type.defaultProps)var ge=k.type.defaultProps;for(ce in J)I.call(J,ce)&&!O.hasOwnProperty(ce)&&(oe[ce]=J[ce]===void 0&&ge!==void 0?ge[ce]:J[ce])}var ce=arguments.length-2;if(ce===1)oe.children=Pe;else if(1<ce){ge=Array(ce);for(var be=0;be<ce;be++)ge[be]=arguments[be+2];oe.children=ge}return{$$typeof:r,type:k.type,key:ve,ref:K,props:oe,_owner:xe}},Vt.createContext=function(k){return k={$$typeof:c,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:o,_context:k},k.Consumer=k},Vt.createElement=E,Vt.createFactory=function(k){var J=E.bind(null,k);return J.type=k,J},Vt.createRef=function(){return{current:null}},Vt.forwardRef=function(k){return{$$typeof:d,render:k}},Vt.isValidElement=z,Vt.lazy=function(k){return{$$typeof:m,_payload:{_status:-1,_result:k},_init:ae}},Vt.memo=function(k,J){return{$$typeof:f,type:k,compare:J===void 0?null:J}},Vt.startTransition=function(k){var J=q.transition;q.transition={};try{k()}finally{q.transition=J}},Vt.unstable_act=ee,Vt.useCallback=function(k,J){return Q.current.useCallback(k,J)},Vt.useContext=function(k){return Q.current.useContext(k)},Vt.useDebugValue=function(){},Vt.useDeferredValue=function(k){return Q.current.useDeferredValue(k)},Vt.useEffect=function(k,J){return Q.current.useEffect(k,J)},Vt.useId=function(){return Q.current.useId()},Vt.useImperativeHandle=function(k,J,Pe){return Q.current.useImperativeHandle(k,J,Pe)},Vt.useInsertionEffect=function(k,J){return Q.current.useInsertionEffect(k,J)},Vt.useLayoutEffect=function(k,J){return Q.current.useLayoutEffect(k,J)},Vt.useMemo=function(k,J){return Q.current.useMemo(k,J)},Vt.useReducer=function(k,J,Pe){return Q.current.useReducer(k,J,Pe)},Vt.useRef=function(k){return Q.current.useRef(k)},Vt.useState=function(k){return Q.current.useState(k)},Vt.useSyncExternalStore=function(k,J,Pe){return Q.current.useSyncExternalStore(k,J,Pe)},Vt.useTransition=function(){return Q.current.useTransition()},Vt.version="18.3.1",Vt}var Ng;function Oh(){return Ng||(Ng=1,Wd.exports=_y()),Wd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dg;function yy(){if(Dg)return Ro;Dg=1;var r=Oh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(d,h,f){var m,v={},g=null,x=null;f!==void 0&&(g=""+f),h.key!==void 0&&(g=""+h.key),h.ref!==void 0&&(x=h.ref);for(m in h)i.call(h,m)&&!o.hasOwnProperty(m)&&(v[m]=h[m]);if(d&&d.defaultProps)for(m in h=d.defaultProps,h)v[m]===void 0&&(v[m]=h[m]);return{$$typeof:e,type:d,key:g,ref:x,props:v,_owner:a.current}}return Ro.Fragment=t,Ro.jsx=c,Ro.jsxs=c,Ro}var Ig;function Sy(){return Ig||(Ig=1,Gd.exports=yy()),Gd.exports}var D=Sy(),ye=Oh();const My=Fv(ye);var sc={},Xd={exports:{}},hi={},$d={exports:{}},jd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ug;function Ey(){return Ug||(Ug=1,(function(r){function e(q,ie){var ee=q.length;q.push(ie);e:for(;0<ee;){var k=ee-1>>>1,J=q[k];if(0<a(J,ie))q[k]=ie,q[ee]=J,ee=k;else break e}}function t(q){return q.length===0?null:q[0]}function i(q){if(q.length===0)return null;var ie=q[0],ee=q.pop();if(ee!==ie){q[0]=ee;e:for(var k=0,J=q.length,Pe=J>>>1;k<Pe;){var oe=2*(k+1)-1,ve=q[oe],K=oe+1,xe=q[K];if(0>a(ve,ee))K<J&&0>a(xe,ve)?(q[k]=xe,q[K]=ee,k=K):(q[k]=ve,q[oe]=ee,k=oe);else if(K<J&&0>a(xe,ee))q[k]=xe,q[K]=ee,k=K;else break e}}return ie}function a(q,ie){var ee=q.sortIndex-ie.sortIndex;return ee!==0?ee:q.id-ie.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;r.unstable_now=function(){return o.now()}}else{var c=Date,d=c.now();r.unstable_now=function(){return c.now()-d}}var h=[],f=[],m=1,v=null,g=3,x=!1,S=!1,b=!1,M=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(q){for(var ie=t(f);ie!==null;){if(ie.callback===null)i(f);else if(ie.startTime<=q)i(f),ie.sortIndex=ie.expirationTime,e(h,ie);else break;ie=t(f)}}function T(q){if(b=!1,P(q),!S)if(t(h)!==null)S=!0,ae(I);else{var ie=t(f);ie!==null&&Q(T,ie.startTime-q)}}function I(q,ie){S=!1,b&&(b=!1,y(E),E=-1),x=!0;var ee=g;try{for(P(ie),v=t(h);v!==null&&(!(v.expirationTime>ie)||q&&!B());){var k=v.callback;if(typeof k=="function"){v.callback=null,g=v.priorityLevel;var J=k(v.expirationTime<=ie);ie=r.unstable_now(),typeof J=="function"?v.callback=J:v===t(h)&&i(h),P(ie)}else i(h);v=t(h)}if(v!==null)var Pe=!0;else{var oe=t(f);oe!==null&&Q(T,oe.startTime-ie),Pe=!1}return Pe}finally{v=null,g=ee,x=!1}}var L=!1,O=null,E=-1,R=5,z=-1;function B(){return!(r.unstable_now()-z<R)}function j(){if(O!==null){var q=r.unstable_now();z=q;var ie=!0;try{ie=O(!0,q)}finally{ie?G():(L=!1,O=null)}}else L=!1}var G;if(typeof N=="function")G=function(){N(j)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,W=de.port2;de.port1.onmessage=j,G=function(){W.postMessage(null)}}else G=function(){M(j,0)};function ae(q){O=q,L||(L=!0,G())}function Q(q,ie){E=M(function(){q(r.unstable_now())},ie)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(q){q.callback=null},r.unstable_continueExecution=function(){S||x||(S=!0,ae(I))},r.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<q?Math.floor(1e3/q):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_getFirstCallbackNode=function(){return t(h)},r.unstable_next=function(q){switch(g){case 1:case 2:case 3:var ie=3;break;default:ie=g}var ee=g;g=ie;try{return q()}finally{g=ee}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(q,ie){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var ee=g;g=q;try{return ie()}finally{g=ee}},r.unstable_scheduleCallback=function(q,ie,ee){var k=r.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?k+ee:k):ee=k,q){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=ee+J,q={id:m++,callback:ie,priorityLevel:q,startTime:ee,expirationTime:J,sortIndex:-1},ee>k?(q.sortIndex=ee,e(f,q),t(h)===null&&q===t(f)&&(b?(y(E),E=-1):b=!0,Q(T,ee-k))):(q.sortIndex=J,e(h,q),S||x||(S=!0,ae(I))),q},r.unstable_shouldYield=B,r.unstable_wrapCallback=function(q){var ie=g;return function(){var ee=g;g=ie;try{return q.apply(this,arguments)}finally{g=ee}}}})(jd)),jd}var Fg;function wy(){return Fg||(Fg=1,$d.exports=Ey()),$d.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Og;function Ty(){if(Og)return hi;Og=1;var r=Oh(),e=wy();function t(n){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,a={};function o(n,s){c(n,s),c(n+"Capture",s)}function c(n,s){for(a[n]=s,n=0;n<s.length;n++)i.add(s[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},v={};function g(n){return h.call(v,n)?!0:h.call(m,n)?!1:f.test(n)?v[n]=!0:(m[n]=!0,!1)}function x(n,s,l,u){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return u?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function S(n,s,l,u){if(s===null||typeof s>"u"||x(n,s,l,u))return!0;if(u)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function b(n,s,l,u,p,_,A){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=u,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=n,this.type=s,this.sanitizeURL=_,this.removeEmptyString=A}var M={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){M[n]=new b(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var s=n[0];M[s]=new b(s,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){M[n]=new b(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){M[n]=new b(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){M[n]=new b(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){M[n]=new b(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){M[n]=new b(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){M[n]=new b(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){M[n]=new b(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function N(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var s=n.replace(y,N);M[s]=new b(s,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var s=n.replace(y,N);M[s]=new b(s,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var s=n.replace(y,N);M[s]=new b(s,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){M[n]=new b(n,1,!1,n.toLowerCase(),null,!1,!1)}),M.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){M[n]=new b(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,s,l,u){var p=M.hasOwnProperty(s)?M[s]:null;(p!==null?p.type!==0:u||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(S(s,l,p,u)&&(l=null),u||p===null?g(s)&&(l===null?n.removeAttribute(s):n.setAttribute(s,""+l)):p.mustUseProperty?n[p.propertyName]=l===null?p.type===3?!1:"":l:(s=p.attributeName,u=p.attributeNamespace,l===null?n.removeAttribute(s):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,u?n.setAttributeNS(u,s,l):n.setAttribute(s,l))))}var T=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),L=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),B=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),Q=Symbol.for("react.offscreen"),q=Symbol.iterator;function ie(n){return n===null||typeof n!="object"?null:(n=q&&n[q]||n["@@iterator"],typeof n=="function"?n:null)}var ee=Object.assign,k;function J(n){if(k===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);k=s&&s[1]||""}return`
`+k+n}var Pe=!1;function oe(n,s){if(!n||Pe)return"";Pe=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(Se){var u=Se}Reflect.construct(n,[],s)}else{try{s.call()}catch(Se){u=Se}n.call(s.prototype)}else{try{throw Error()}catch(Se){u=Se}n()}}catch(Se){if(Se&&u&&typeof Se.stack=="string"){for(var p=Se.stack.split(`
`),_=u.stack.split(`
`),A=p.length-1,H=_.length-1;1<=A&&0<=H&&p[A]!==_[H];)H--;for(;1<=A&&0<=H;A--,H--)if(p[A]!==_[H]){if(A!==1||H!==1)do if(A--,H--,0>H||p[A]!==_[H]){var Z=`
`+p[A].replace(" at new "," at ");return n.displayName&&Z.includes("<anonymous>")&&(Z=Z.replace("<anonymous>",n.displayName)),Z}while(1<=A&&0<=H);break}}}finally{Pe=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?J(n):""}function ve(n){switch(n.tag){case 5:return J(n.type);case 16:return J("Lazy");case 13:return J("Suspense");case 19:return J("SuspenseList");case 0:case 2:case 15:return n=oe(n.type,!1),n;case 11:return n=oe(n.type.render,!1),n;case 1:return n=oe(n.type,!0),n;default:return""}}function K(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case L:return"Portal";case R:return"Profiler";case E:return"StrictMode";case G:return"Suspense";case de:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case B:return(n.displayName||"Context")+".Consumer";case z:return(n._context.displayName||"Context")+".Provider";case j:var s=n.render;return n=n.displayName,n||(n=s.displayName||s.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case W:return s=n.displayName||null,s!==null?s:K(n.type)||"Memo";case ae:s=n._payload,n=n._init;try{return K(n(s))}catch{}}return null}function xe(n){var s=n.type;switch(n.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=s.render,n=n.displayName||n.name||"",s.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return K(s);case 8:return s===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function ge(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ce(n){var s=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function be(n){var s=ce(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,s),u=""+n[s];if(!n.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,_=l.set;return Object.defineProperty(n,s,{configurable:!0,get:function(){return p.call(this)},set:function(A){u=""+A,_.call(this,A)}}),Object.defineProperty(n,s,{enumerable:l.enumerable}),{getValue:function(){return u},setValue:function(A){u=""+A},stopTracking:function(){n._valueTracker=null,delete n[s]}}}}function et(n){n._valueTracker||(n._valueTracker=be(n))}function Mt(n){if(!n)return!1;var s=n._valueTracker;if(!s)return!0;var l=s.getValue(),u="";return n&&(u=ce(n)?n.checked?"true":"false":n.value),n=u,n!==l?(s.setValue(n),!0):!1}function Ge(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function we(n,s){var l=s.checked;return ee({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function Le(n,s){var l=s.defaultValue==null?"":s.defaultValue,u=s.checked!=null?s.checked:s.defaultChecked;l=ge(s.value!=null?s.value:l),n._wrapperState={initialChecked:u,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function De(n,s){s=s.checked,s!=null&&P(n,"checked",s,!1)}function Qe(n,s){De(n,s);var l=ge(s.value),u=s.type;if(l!=null)u==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}s.hasOwnProperty("value")?vt(n,s.type,l):s.hasOwnProperty("defaultValue")&&vt(n,s.type,ge(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(n.defaultChecked=!!s.defaultChecked)}function je(n,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var u=s.type;if(!(u!=="submit"&&u!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+n._wrapperState.initialValue,l||s===n.value||(n.value=s),n.defaultValue=s}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function vt(n,s,l){(s!=="number"||Ge(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var st=Array.isArray;function _t(n,s,l,u){if(n=n.options,s){s={};for(var p=0;p<l.length;p++)s["$"+l[p]]=!0;for(l=0;l<n.length;l++)p=s.hasOwnProperty("$"+n[l].value),n[l].selected!==p&&(n[l].selected=p),p&&u&&(n[l].defaultSelected=!0)}else{for(l=""+ge(l),s=null,p=0;p<n.length;p++){if(n[p].value===l){n[p].selected=!0,u&&(n[p].defaultSelected=!0);return}s!==null||n[p].disabled||(s=n[p])}s!==null&&(s.selected=!0)}}function Et(n,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ee({},s,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function X(n,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(st(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}n._wrapperState={initialValue:ge(l)}}function Bt(n,s){var l=ge(s.value),u=ge(s.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),s.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),u!=null&&(n.defaultValue=""+u)}function Dt(n){var s=n.textContent;s===n._wrapperState.initialValue&&s!==""&&s!==null&&(n.value=s)}function F(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function w(n,s){return n==null||n==="http://www.w3.org/1999/xhtml"?F(s):n==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var re,ue=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,u,p){MSApp.execUnsafeLocalFunction(function(){return n(s,l,u,p)})}:n})(function(n,s){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=s;else{for(re=re||document.createElement("div"),re.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=re.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;s.firstChild;)n.appendChild(s.firstChild)}});function Me(n,s){if(s){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=s;return}}n.textContent=s}var Oe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ze=["Webkit","ms","Moz","O"];Object.keys(Oe).forEach(function(n){ze.forEach(function(s){s=s+n.charAt(0).toUpperCase()+n.substring(1),Oe[s]=Oe[n]})});function U(n,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||Oe.hasOwnProperty(n)&&Oe[n]?(""+s).trim():s+"px"}function V(n,s){n=n.style;for(var l in s)if(s.hasOwnProperty(l)){var u=l.indexOf("--")===0,p=U(l,s[l],u);l==="float"&&(l="cssFloat"),u?n.setProperty(l,p):n[l]=p}}var le=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ee(n,s){if(s){if(le[n]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Ce(n,s){if(n.indexOf("-")===-1)return typeof s.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ae=null;function Ke(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var nt=null,ft=null,Y=null;function $e(n){if(n=po(n)){if(typeof nt!="function")throw Error(t(280));var s=n.stateNode;s&&(s=yl(s),nt(n.stateNode,n.type,s))}}function Te(n){ft?Y?Y.push(n):Y=[n]:ft=n}function Ie(){if(ft){var n=ft,s=Y;if(Y=ft=null,$e(n),s)for(n=0;n<s.length;n++)$e(s[n])}}function Ye(n,s){return n(s)}function Ne(){}var ct=!1;function ot(n,s,l){if(ct)return n(s,l);ct=!0;try{return Ye(n,s,l)}finally{ct=!1,(ft!==null||Y!==null)&&(Ne(),Ie())}}function Jt(n,s){var l=n.stateNode;if(l===null)return null;var u=yl(l);if(u===null)return null;l=u[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var Xt=!1;if(d)try{var Pn={};Object.defineProperty(Pn,"passive",{get:function(){Xt=!0}}),window.addEventListener("test",Pn,Pn),window.removeEventListener("test",Pn,Pn)}catch{Xt=!1}function oi(n,s,l,u,p,_,A,H,Z){var Se=Array.prototype.slice.call(arguments,3);try{s.apply(l,Se)}catch(Fe){this.onError(Fe)}}var Xi=!1,fr=null,se=!1,Re=null,Be={onError:function(n){Xi=!0,fr=n}};function it(n,s,l,u,p,_,A,H,Z){Xi=!1,fr=null,oi.apply(Be,arguments)}function qe(n,s,l,u,p,_,A,H,Z){if(it.apply(this,arguments),Xi){if(Xi){var Se=fr;Xi=!1,fr=null}else throw Error(t(198));se||(se=!0,Re=Se)}}function ut(n){var s=n,l=n;if(n.alternate)for(;s.return;)s=s.return;else{n=s;do s=n,(s.flags&4098)!==0&&(l=s.return),n=s.return;while(n)}return s.tag===3?l:null}function Ht(n){if(n.tag===13){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function wt(n){if(ut(n)!==n)throw Error(t(188))}function Tn(n){var s=n.alternate;if(!s){if(s=ut(n),s===null)throw Error(t(188));return s!==n?null:n}for(var l=n,u=s;;){var p=l.return;if(p===null)break;var _=p.alternate;if(_===null){if(u=p.return,u!==null){l=u;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===l)return wt(p),n;if(_===u)return wt(p),s;_=_.sibling}throw Error(t(188))}if(l.return!==u.return)l=p,u=_;else{for(var A=!1,H=p.child;H;){if(H===l){A=!0,l=p,u=_;break}if(H===u){A=!0,u=p,l=_;break}H=H.sibling}if(!A){for(H=_.child;H;){if(H===l){A=!0,l=_,u=p;break}if(H===u){A=!0,u=_,l=p;break}H=H.sibling}if(!A)throw Error(t(189))}}if(l.alternate!==u)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:s}function an(n){return n=Tn(n),n!==null?Ut(n):null}function Ut(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var s=Ut(n);if(s!==null)return s;n=n.sibling}return null}var Ft=e.unstable_scheduleCallback,Kt=e.unstable_cancelCallback,mn=e.unstable_shouldYield,An=e.unstable_requestPaint,$t=e.unstable_now,Fr=e.unstable_getCurrentPriorityLevel,Or=e.unstable_ImmediatePriority,C=e.unstable_UserBlockingPriority,te=e.unstable_NormalPriority,_e=e.unstable_LowPriority,he=e.unstable_IdlePriority,pe=null,Ve=null;function rt(n){if(Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(pe,n,void 0,(n.current.flags&128)===128)}catch{}}var We=Math.clz32?Math.clz32:Pt,dt=Math.log,gt=Math.LN2;function Pt(n){return n>>>=0,n===0?32:31-(dt(n)/gt|0)|0}var Nt=64,pt=4194304;function Gt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Qt(n,s){var l=n.pendingLanes;if(l===0)return 0;var u=0,p=n.suspendedLanes,_=n.pingedLanes,A=l&268435455;if(A!==0){var H=A&~p;H!==0?u=Gt(H):(_&=A,_!==0&&(u=Gt(_)))}else A=l&~p,A!==0?u=Gt(A):_!==0&&(u=Gt(_));if(u===0)return 0;if(s!==0&&s!==u&&(s&p)===0&&(p=u&-u,_=s&-s,p>=_||p===16&&(_&4194240)!==0))return s;if((u&4)!==0&&(u|=l&16),s=n.entangledLanes,s!==0)for(n=n.entanglements,s&=u;0<s;)l=31-We(s),p=1<<l,u|=n[l],s&=~p;return u}function on(n,s){switch(n){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ze(n,s){for(var l=n.suspendedLanes,u=n.pingedLanes,p=n.expirationTimes,_=n.pendingLanes;0<_;){var A=31-We(_),H=1<<A,Z=p[A];Z===-1?((H&l)===0||(H&u)!==0)&&(p[A]=on(H,s)):Z<=s&&(n.expiredLanes|=H),_&=~H}}function Rt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Je(){var n=Nt;return Nt<<=1,(Nt&4194240)===0&&(Nt=64),n}function gn(n){for(var s=[],l=0;31>l;l++)s.push(n);return s}function yt(n,s,l){n.pendingLanes|=s,s!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,s=31-We(s),n[s]=l}function St(n,s){var l=n.pendingLanes&~s;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=s,n.mutableReadLanes&=s,n.entangledLanes&=s,s=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<l;){var p=31-We(l),_=1<<p;s[p]=0,u[p]=-1,n[p]=-1,l&=~_}}function rn(n,s){var l=n.entangledLanes|=s;for(n=n.entanglements;l;){var u=31-We(l),p=1<<u;p&s|n[u]&s&&(n[u]|=s),l&=~p}}var Tt=0;function Fn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var qt,dn,Pi,en,Li,$i=!1,xs=[],zr=null,kr=null,Br=null,Ka=new Map,Ja=new Map,Hr=[],Hx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pp(n,s){switch(n){case"focusin":case"focusout":zr=null;break;case"dragenter":case"dragleave":kr=null;break;case"mouseover":case"mouseout":Br=null;break;case"pointerover":case"pointerout":Ka.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ja.delete(s.pointerId)}}function Qa(n,s,l,u,p,_){return n===null||n.nativeEvent!==_?(n={blockedOn:s,domEventName:l,eventSystemFlags:u,nativeEvent:_,targetContainers:[p]},s!==null&&(s=po(s),s!==null&&dn(s)),n):(n.eventSystemFlags|=u,s=n.targetContainers,p!==null&&s.indexOf(p)===-1&&s.push(p),n)}function Vx(n,s,l,u,p){switch(s){case"focusin":return zr=Qa(zr,n,s,l,u,p),!0;case"dragenter":return kr=Qa(kr,n,s,l,u,p),!0;case"mouseover":return Br=Qa(Br,n,s,l,u,p),!0;case"pointerover":var _=p.pointerId;return Ka.set(_,Qa(Ka.get(_)||null,n,s,l,u,p)),!0;case"gotpointercapture":return _=p.pointerId,Ja.set(_,Qa(Ja.get(_)||null,n,s,l,u,p)),!0}return!1}function mp(n){var s=_s(n.target);if(s!==null){var l=ut(s);if(l!==null){if(s=l.tag,s===13){if(s=Ht(l),s!==null){n.blockedOn=s,Li(n.priority,function(){Pi(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function al(n){if(n.blockedOn!==null)return!1;for(var s=n.targetContainers;0<s.length;){var l=gu(n.domEventName,n.eventSystemFlags,s[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var u=new l.constructor(l.type,l);Ae=u,l.target.dispatchEvent(u),Ae=null}else return s=po(l),s!==null&&dn(s),n.blockedOn=l,!1;s.shift()}return!0}function gp(n,s,l){al(n)&&l.delete(s)}function Gx(){$i=!1,zr!==null&&al(zr)&&(zr=null),kr!==null&&al(kr)&&(kr=null),Br!==null&&al(Br)&&(Br=null),Ka.forEach(gp),Ja.forEach(gp)}function eo(n,s){n.blockedOn===s&&(n.blockedOn=null,$i||($i=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Gx)))}function to(n){function s(p){return eo(p,n)}if(0<xs.length){eo(xs[0],n);for(var l=1;l<xs.length;l++){var u=xs[l];u.blockedOn===n&&(u.blockedOn=null)}}for(zr!==null&&eo(zr,n),kr!==null&&eo(kr,n),Br!==null&&eo(Br,n),Ka.forEach(s),Ja.forEach(s),l=0;l<Hr.length;l++)u=Hr[l],u.blockedOn===n&&(u.blockedOn=null);for(;0<Hr.length&&(l=Hr[0],l.blockedOn===null);)mp(l),l.blockedOn===null&&Hr.shift()}var js=T.ReactCurrentBatchConfig,ol=!0;function Wx(n,s,l,u){var p=Tt,_=js.transition;js.transition=null;try{Tt=1,mu(n,s,l,u)}finally{Tt=p,js.transition=_}}function Xx(n,s,l,u){var p=Tt,_=js.transition;js.transition=null;try{Tt=4,mu(n,s,l,u)}finally{Tt=p,js.transition=_}}function mu(n,s,l,u){if(ol){var p=gu(n,s,l,u);if(p===null)Du(n,s,u,ll,l),pp(n,u);else if(Vx(p,n,s,l,u))u.stopPropagation();else if(pp(n,u),s&4&&-1<Hx.indexOf(n)){for(;p!==null;){var _=po(p);if(_!==null&&qt(_),_=gu(n,s,l,u),_===null&&Du(n,s,u,ll,l),_===p)break;p=_}p!==null&&u.stopPropagation()}else Du(n,s,u,null,l)}}var ll=null;function gu(n,s,l,u){if(ll=null,n=Ke(u),n=_s(n),n!==null)if(s=ut(n),s===null)n=null;else if(l=s.tag,l===13){if(n=Ht(s),n!==null)return n;n=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;n=null}else s!==n&&(n=null);return ll=n,null}function vp(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fr()){case Or:return 1;case C:return 4;case te:case _e:return 16;case he:return 536870912;default:return 16}default:return 16}}var Vr=null,vu=null,cl=null;function xp(){if(cl)return cl;var n,s=vu,l=s.length,u,p="value"in Vr?Vr.value:Vr.textContent,_=p.length;for(n=0;n<l&&s[n]===p[n];n++);var A=l-n;for(u=1;u<=A&&s[l-u]===p[_-u];u++);return cl=p.slice(n,1<u?1-u:void 0)}function ul(n){var s=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&s===13&&(n=13)):n=s,n===10&&(n=13),32<=n||n===13?n:0}function dl(){return!0}function _p(){return!1}function mi(n){function s(l,u,p,_,A){this._reactName=l,this._targetInst=p,this.type=u,this.nativeEvent=_,this.target=A,this.currentTarget=null;for(var H in n)n.hasOwnProperty(H)&&(l=n[H],this[H]=l?l(_):_[H]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?dl:_p,this.isPropagationStopped=_p,this}return ee(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=dl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=dl)},persist:function(){},isPersistent:dl}),s}var Ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xu=mi(Ys),no=ee({},Ys,{view:0,detail:0}),$x=mi(no),_u,yu,io,fl=ee({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==io&&(io&&n.type==="mousemove"?(_u=n.screenX-io.screenX,yu=n.screenY-io.screenY):yu=_u=0,io=n),_u)},movementY:function(n){return"movementY"in n?n.movementY:yu}}),yp=mi(fl),jx=ee({},fl,{dataTransfer:0}),Yx=mi(jx),qx=ee({},no,{relatedTarget:0}),Su=mi(qx),Zx=ee({},Ys,{animationName:0,elapsedTime:0,pseudoElement:0}),Kx=mi(Zx),Jx=ee({},Ys,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Qx=mi(Jx),e_=ee({},Ys,{data:0}),Sp=mi(e_),t_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},n_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},i_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function r_(n){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(n):(n=i_[n])?!!s[n]:!1}function Mu(){return r_}var s_=ee({},no,{key:function(n){if(n.key){var s=t_[n.key]||n.key;if(s!=="Unidentified")return s}return n.type==="keypress"?(n=ul(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?n_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mu,charCode:function(n){return n.type==="keypress"?ul(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ul(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),a_=mi(s_),o_=ee({},fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mp=mi(o_),l_=ee({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mu}),c_=mi(l_),u_=ee({},Ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),d_=mi(u_),f_=ee({},fl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),h_=mi(f_),p_=[9,13,27,32],Eu=d&&"CompositionEvent"in window,ro=null;d&&"documentMode"in document&&(ro=document.documentMode);var m_=d&&"TextEvent"in window&&!ro,Ep=d&&(!Eu||ro&&8<ro&&11>=ro),wp=" ",Tp=!1;function bp(n,s){switch(n){case"keyup":return p_.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ap(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var qs=!1;function g_(n,s){switch(n){case"compositionend":return Ap(s);case"keypress":return s.which!==32?null:(Tp=!0,wp);case"textInput":return n=s.data,n===wp&&Tp?null:n;default:return null}}function v_(n,s){if(qs)return n==="compositionend"||!Eu&&bp(n,s)?(n=xp(),cl=vu=Vr=null,qs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Ep&&s.locale!=="ko"?null:s.data;default:return null}}var x_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cp(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s==="input"?!!x_[n.type]:s==="textarea"}function Rp(n,s,l,u){Te(u),s=vl(s,"onChange"),0<s.length&&(l=new xu("onChange","change",null,l,u),n.push({event:l,listeners:s}))}var so=null,ao=null;function __(n){jp(n,0)}function hl(n){var s=ea(n);if(Mt(s))return n}function y_(n,s){if(n==="change")return s}var Pp=!1;if(d){var wu;if(d){var Tu="oninput"in document;if(!Tu){var Lp=document.createElement("div");Lp.setAttribute("oninput","return;"),Tu=typeof Lp.oninput=="function"}wu=Tu}else wu=!1;Pp=wu&&(!document.documentMode||9<document.documentMode)}function Np(){so&&(so.detachEvent("onpropertychange",Dp),ao=so=null)}function Dp(n){if(n.propertyName==="value"&&hl(ao)){var s=[];Rp(s,ao,n,Ke(n)),ot(__,s)}}function S_(n,s,l){n==="focusin"?(Np(),so=s,ao=l,so.attachEvent("onpropertychange",Dp)):n==="focusout"&&Np()}function M_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return hl(ao)}function E_(n,s){if(n==="click")return hl(s)}function w_(n,s){if(n==="input"||n==="change")return hl(s)}function T_(n,s){return n===s&&(n!==0||1/n===1/s)||n!==n&&s!==s}var Ni=typeof Object.is=="function"?Object.is:T_;function oo(n,s){if(Ni(n,s))return!0;if(typeof n!="object"||n===null||typeof s!="object"||s===null)return!1;var l=Object.keys(n),u=Object.keys(s);if(l.length!==u.length)return!1;for(u=0;u<l.length;u++){var p=l[u];if(!h.call(s,p)||!Ni(n[p],s[p]))return!1}return!0}function Ip(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Up(n,s){var l=Ip(n);n=0;for(var u;l;){if(l.nodeType===3){if(u=n+l.textContent.length,n<=s&&u>=s)return{node:l,offset:s-n};n=u}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Ip(l)}}function Fp(n,s){return n&&s?n===s?!0:n&&n.nodeType===3?!1:s&&s.nodeType===3?Fp(n,s.parentNode):"contains"in n?n.contains(s):n.compareDocumentPosition?!!(n.compareDocumentPosition(s)&16):!1:!1}function Op(){for(var n=window,s=Ge();s instanceof n.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)n=s.contentWindow;else break;s=Ge(n.document)}return s}function bu(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s&&(s==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||s==="textarea"||n.contentEditable==="true")}function b_(n){var s=Op(),l=n.focusedElem,u=n.selectionRange;if(s!==l&&l&&l.ownerDocument&&Fp(l.ownerDocument.documentElement,l)){if(u!==null&&bu(l)){if(s=u.start,n=u.end,n===void 0&&(n=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(n,l.value.length);else if(n=(s=l.ownerDocument||document)&&s.defaultView||window,n.getSelection){n=n.getSelection();var p=l.textContent.length,_=Math.min(u.start,p);u=u.end===void 0?_:Math.min(u.end,p),!n.extend&&_>u&&(p=u,u=_,_=p),p=Up(l,_);var A=Up(l,u);p&&A&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==A.node||n.focusOffset!==A.offset)&&(s=s.createRange(),s.setStart(p.node,p.offset),n.removeAllRanges(),_>u?(n.addRange(s),n.extend(A.node,A.offset)):(s.setEnd(A.node,A.offset),n.addRange(s)))}}for(s=[],n=l;n=n.parentNode;)n.nodeType===1&&s.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)n=s[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var A_=d&&"documentMode"in document&&11>=document.documentMode,Zs=null,Au=null,lo=null,Cu=!1;function zp(n,s,l){var u=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Cu||Zs==null||Zs!==Ge(u)||(u=Zs,"selectionStart"in u&&bu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),lo&&oo(lo,u)||(lo=u,u=vl(Au,"onSelect"),0<u.length&&(s=new xu("onSelect","select",null,s,l),n.push({event:s,listeners:u}),s.target=Zs)))}function pl(n,s){var l={};return l[n.toLowerCase()]=s.toLowerCase(),l["Webkit"+n]="webkit"+s,l["Moz"+n]="moz"+s,l}var Ks={animationend:pl("Animation","AnimationEnd"),animationiteration:pl("Animation","AnimationIteration"),animationstart:pl("Animation","AnimationStart"),transitionend:pl("Transition","TransitionEnd")},Ru={},kp={};d&&(kp=document.createElement("div").style,"AnimationEvent"in window||(delete Ks.animationend.animation,delete Ks.animationiteration.animation,delete Ks.animationstart.animation),"TransitionEvent"in window||delete Ks.transitionend.transition);function ml(n){if(Ru[n])return Ru[n];if(!Ks[n])return n;var s=Ks[n],l;for(l in s)if(s.hasOwnProperty(l)&&l in kp)return Ru[n]=s[l];return n}var Bp=ml("animationend"),Hp=ml("animationiteration"),Vp=ml("animationstart"),Gp=ml("transitionend"),Wp=new Map,Xp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gr(n,s){Wp.set(n,s),o(s,[n])}for(var Pu=0;Pu<Xp.length;Pu++){var Lu=Xp[Pu],C_=Lu.toLowerCase(),R_=Lu[0].toUpperCase()+Lu.slice(1);Gr(C_,"on"+R_)}Gr(Bp,"onAnimationEnd"),Gr(Hp,"onAnimationIteration"),Gr(Vp,"onAnimationStart"),Gr("dblclick","onDoubleClick"),Gr("focusin","onFocus"),Gr("focusout","onBlur"),Gr(Gp,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),o("onBeforeInput",["compositionend","keypress","textInput","paste"]),o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),P_=new Set("cancel close invalid load scroll toggle".split(" ").concat(co));function $p(n,s,l){var u=n.type||"unknown-event";n.currentTarget=l,qe(u,s,void 0,n),n.currentTarget=null}function jp(n,s){s=(s&4)!==0;for(var l=0;l<n.length;l++){var u=n[l],p=u.event;u=u.listeners;e:{var _=void 0;if(s)for(var A=u.length-1;0<=A;A--){var H=u[A],Z=H.instance,Se=H.currentTarget;if(H=H.listener,Z!==_&&p.isPropagationStopped())break e;$p(p,H,Se),_=Z}else for(A=0;A<u.length;A++){if(H=u[A],Z=H.instance,Se=H.currentTarget,H=H.listener,Z!==_&&p.isPropagationStopped())break e;$p(p,H,Se),_=Z}}}if(se)throw n=Re,se=!1,Re=null,n}function fn(n,s){var l=s[ku];l===void 0&&(l=s[ku]=new Set);var u=n+"__bubble";l.has(u)||(Yp(s,n,2,!1),l.add(u))}function Nu(n,s,l){var u=0;s&&(u|=4),Yp(l,n,u,s)}var gl="_reactListening"+Math.random().toString(36).slice(2);function uo(n){if(!n[gl]){n[gl]=!0,i.forEach(function(l){l!=="selectionchange"&&(P_.has(l)||Nu(l,!1,n),Nu(l,!0,n))});var s=n.nodeType===9?n:n.ownerDocument;s===null||s[gl]||(s[gl]=!0,Nu("selectionchange",!1,s))}}function Yp(n,s,l,u){switch(vp(s)){case 1:var p=Wx;break;case 4:p=Xx;break;default:p=mu}l=p.bind(null,s,l,n),p=void 0,!Xt||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(p=!0),u?p!==void 0?n.addEventListener(s,l,{capture:!0,passive:p}):n.addEventListener(s,l,!0):p!==void 0?n.addEventListener(s,l,{passive:p}):n.addEventListener(s,l,!1)}function Du(n,s,l,u,p){var _=u;if((s&1)===0&&(s&2)===0&&u!==null)e:for(;;){if(u===null)return;var A=u.tag;if(A===3||A===4){var H=u.stateNode.containerInfo;if(H===p||H.nodeType===8&&H.parentNode===p)break;if(A===4)for(A=u.return;A!==null;){var Z=A.tag;if((Z===3||Z===4)&&(Z=A.stateNode.containerInfo,Z===p||Z.nodeType===8&&Z.parentNode===p))return;A=A.return}for(;H!==null;){if(A=_s(H),A===null)return;if(Z=A.tag,Z===5||Z===6){u=_=A;continue e}H=H.parentNode}}u=u.return}ot(function(){var Se=_,Fe=Ke(l),He=[];e:{var Ue=Wp.get(n);if(Ue!==void 0){var at=xu,ht=n;switch(n){case"keypress":if(ul(l)===0)break e;case"keydown":case"keyup":at=a_;break;case"focusin":ht="focus",at=Su;break;case"focusout":ht="blur",at=Su;break;case"beforeblur":case"afterblur":at=Su;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":at=yp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":at=Yx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":at=c_;break;case Bp:case Hp:case Vp:at=Kx;break;case Gp:at=d_;break;case"scroll":at=$x;break;case"wheel":at=h_;break;case"copy":case"cut":case"paste":at=Qx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":at=Mp}var mt=(s&4)!==0,bn=!mt&&n==="scroll",fe=mt?Ue!==null?Ue+"Capture":null:Ue;mt=[];for(var ne=Se,me;ne!==null;){me=ne;var Xe=me.stateNode;if(me.tag===5&&Xe!==null&&(me=Xe,fe!==null&&(Xe=Jt(ne,fe),Xe!=null&&mt.push(fo(ne,Xe,me)))),bn)break;ne=ne.return}0<mt.length&&(Ue=new at(Ue,ht,null,l,Fe),He.push({event:Ue,listeners:mt}))}}if((s&7)===0){e:{if(Ue=n==="mouseover"||n==="pointerover",at=n==="mouseout"||n==="pointerout",Ue&&l!==Ae&&(ht=l.relatedTarget||l.fromElement)&&(_s(ht)||ht[hr]))break e;if((at||Ue)&&(Ue=Fe.window===Fe?Fe:(Ue=Fe.ownerDocument)?Ue.defaultView||Ue.parentWindow:window,at?(ht=l.relatedTarget||l.toElement,at=Se,ht=ht?_s(ht):null,ht!==null&&(bn=ut(ht),ht!==bn||ht.tag!==5&&ht.tag!==6)&&(ht=null)):(at=null,ht=Se),at!==ht)){if(mt=yp,Xe="onMouseLeave",fe="onMouseEnter",ne="mouse",(n==="pointerout"||n==="pointerover")&&(mt=Mp,Xe="onPointerLeave",fe="onPointerEnter",ne="pointer"),bn=at==null?Ue:ea(at),me=ht==null?Ue:ea(ht),Ue=new mt(Xe,ne+"leave",at,l,Fe),Ue.target=bn,Ue.relatedTarget=me,Xe=null,_s(Fe)===Se&&(mt=new mt(fe,ne+"enter",ht,l,Fe),mt.target=me,mt.relatedTarget=bn,Xe=mt),bn=Xe,at&&ht)t:{for(mt=at,fe=ht,ne=0,me=mt;me;me=Js(me))ne++;for(me=0,Xe=fe;Xe;Xe=Js(Xe))me++;for(;0<ne-me;)mt=Js(mt),ne--;for(;0<me-ne;)fe=Js(fe),me--;for(;ne--;){if(mt===fe||fe!==null&&mt===fe.alternate)break t;mt=Js(mt),fe=Js(fe)}mt=null}else mt=null;at!==null&&qp(He,Ue,at,mt,!1),ht!==null&&bn!==null&&qp(He,bn,ht,mt,!0)}}e:{if(Ue=Se?ea(Se):window,at=Ue.nodeName&&Ue.nodeName.toLowerCase(),at==="select"||at==="input"&&Ue.type==="file")var xt=y_;else if(Cp(Ue))if(Pp)xt=w_;else{xt=M_;var bt=S_}else(at=Ue.nodeName)&&at.toLowerCase()==="input"&&(Ue.type==="checkbox"||Ue.type==="radio")&&(xt=E_);if(xt&&(xt=xt(n,Se))){Rp(He,xt,l,Fe);break e}bt&&bt(n,Ue,Se),n==="focusout"&&(bt=Ue._wrapperState)&&bt.controlled&&Ue.type==="number"&&vt(Ue,"number",Ue.value)}switch(bt=Se?ea(Se):window,n){case"focusin":(Cp(bt)||bt.contentEditable==="true")&&(Zs=bt,Au=Se,lo=null);break;case"focusout":lo=Au=Zs=null;break;case"mousedown":Cu=!0;break;case"contextmenu":case"mouseup":case"dragend":Cu=!1,zp(He,l,Fe);break;case"selectionchange":if(A_)break;case"keydown":case"keyup":zp(He,l,Fe)}var At;if(Eu)e:{switch(n){case"compositionstart":var Lt="onCompositionStart";break e;case"compositionend":Lt="onCompositionEnd";break e;case"compositionupdate":Lt="onCompositionUpdate";break e}Lt=void 0}else qs?bp(n,l)&&(Lt="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(Lt="onCompositionStart");Lt&&(Ep&&l.locale!=="ko"&&(qs||Lt!=="onCompositionStart"?Lt==="onCompositionEnd"&&qs&&(At=xp()):(Vr=Fe,vu="value"in Vr?Vr.value:Vr.textContent,qs=!0)),bt=vl(Se,Lt),0<bt.length&&(Lt=new Sp(Lt,n,null,l,Fe),He.push({event:Lt,listeners:bt}),At?Lt.data=At:(At=Ap(l),At!==null&&(Lt.data=At)))),(At=m_?g_(n,l):v_(n,l))&&(Se=vl(Se,"onBeforeInput"),0<Se.length&&(Fe=new Sp("onBeforeInput","beforeinput",null,l,Fe),He.push({event:Fe,listeners:Se}),Fe.data=At))}jp(He,s)})}function fo(n,s,l){return{instance:n,listener:s,currentTarget:l}}function vl(n,s){for(var l=s+"Capture",u=[];n!==null;){var p=n,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=Jt(n,l),_!=null&&u.unshift(fo(n,_,p)),_=Jt(n,s),_!=null&&u.push(fo(n,_,p))),n=n.return}return u}function Js(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function qp(n,s,l,u,p){for(var _=s._reactName,A=[];l!==null&&l!==u;){var H=l,Z=H.alternate,Se=H.stateNode;if(Z!==null&&Z===u)break;H.tag===5&&Se!==null&&(H=Se,p?(Z=Jt(l,_),Z!=null&&A.unshift(fo(l,Z,H))):p||(Z=Jt(l,_),Z!=null&&A.push(fo(l,Z,H)))),l=l.return}A.length!==0&&n.push({event:s,listeners:A})}var L_=/\r\n?/g,N_=/\u0000|\uFFFD/g;function Zp(n){return(typeof n=="string"?n:""+n).replace(L_,`
`).replace(N_,"")}function xl(n,s,l){if(s=Zp(s),Zp(n)!==s&&l)throw Error(t(425))}function _l(){}var Iu=null,Uu=null;function Fu(n,s){return n==="textarea"||n==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Ou=typeof setTimeout=="function"?setTimeout:void 0,D_=typeof clearTimeout=="function"?clearTimeout:void 0,Kp=typeof Promise=="function"?Promise:void 0,I_=typeof queueMicrotask=="function"?queueMicrotask:typeof Kp<"u"?function(n){return Kp.resolve(null).then(n).catch(U_)}:Ou;function U_(n){setTimeout(function(){throw n})}function zu(n,s){var l=s,u=0;do{var p=l.nextSibling;if(n.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(u===0){n.removeChild(p),to(s);return}u--}else l!=="$"&&l!=="$?"&&l!=="$!"||u++;l=p}while(l);to(s)}function Wr(n){for(;n!=null;n=n.nextSibling){var s=n.nodeType;if(s===1||s===3)break;if(s===8){if(s=n.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return n}function Jp(n){n=n.previousSibling;for(var s=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return n;s--}else l==="/$"&&s++}n=n.previousSibling}return null}var Qs=Math.random().toString(36).slice(2),ji="__reactFiber$"+Qs,ho="__reactProps$"+Qs,hr="__reactContainer$"+Qs,ku="__reactEvents$"+Qs,F_="__reactListeners$"+Qs,O_="__reactHandles$"+Qs;function _s(n){var s=n[ji];if(s)return s;for(var l=n.parentNode;l;){if(s=l[hr]||l[ji]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(n=Jp(n);n!==null;){if(l=n[ji])return l;n=Jp(n)}return s}n=l,l=n.parentNode}return null}function po(n){return n=n[ji]||n[hr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ea(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function yl(n){return n[ho]||null}var Bu=[],ta=-1;function Xr(n){return{current:n}}function hn(n){0>ta||(n.current=Bu[ta],Bu[ta]=null,ta--)}function ln(n,s){ta++,Bu[ta]=n.current,n.current=s}var $r={},qn=Xr($r),li=Xr(!1),ys=$r;function na(n,s){var l=n.type.contextTypes;if(!l)return $r;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===s)return u.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in l)p[_]=s[_];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=s,n.__reactInternalMemoizedMaskedChildContext=p),p}function ci(n){return n=n.childContextTypes,n!=null}function Sl(){hn(li),hn(qn)}function Qp(n,s,l){if(qn.current!==$r)throw Error(t(168));ln(qn,s),ln(li,l)}function em(n,s,l){var u=n.stateNode;if(s=s.childContextTypes,typeof u.getChildContext!="function")return l;u=u.getChildContext();for(var p in u)if(!(p in s))throw Error(t(108,xe(n)||"Unknown",p));return ee({},l,u)}function Ml(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||$r,ys=qn.current,ln(qn,n),ln(li,li.current),!0}function tm(n,s,l){var u=n.stateNode;if(!u)throw Error(t(169));l?(n=em(n,s,ys),u.__reactInternalMemoizedMergedChildContext=n,hn(li),hn(qn),ln(qn,n)):hn(li),ln(li,l)}var pr=null,El=!1,Hu=!1;function nm(n){pr===null?pr=[n]:pr.push(n)}function z_(n){El=!0,nm(n)}function jr(){if(!Hu&&pr!==null){Hu=!0;var n=0,s=Tt;try{var l=pr;for(Tt=1;n<l.length;n++){var u=l[n];do u=u(!0);while(u!==null)}pr=null,El=!1}catch(p){throw pr!==null&&(pr=pr.slice(n+1)),Ft(Or,jr),p}finally{Tt=s,Hu=!1}}return null}var ia=[],ra=0,wl=null,Tl=0,Ei=[],wi=0,Ss=null,mr=1,gr="";function Ms(n,s){ia[ra++]=Tl,ia[ra++]=wl,wl=n,Tl=s}function im(n,s,l){Ei[wi++]=mr,Ei[wi++]=gr,Ei[wi++]=Ss,Ss=n;var u=mr;n=gr;var p=32-We(u)-1;u&=~(1<<p),l+=1;var _=32-We(s)+p;if(30<_){var A=p-p%5;_=(u&(1<<A)-1).toString(32),u>>=A,p-=A,mr=1<<32-We(s)+p|l<<p|u,gr=_+n}else mr=1<<_|l<<p|u,gr=n}function Vu(n){n.return!==null&&(Ms(n,1),im(n,1,0))}function Gu(n){for(;n===wl;)wl=ia[--ra],ia[ra]=null,Tl=ia[--ra],ia[ra]=null;for(;n===Ss;)Ss=Ei[--wi],Ei[wi]=null,gr=Ei[--wi],Ei[wi]=null,mr=Ei[--wi],Ei[wi]=null}var gi=null,vi=null,vn=!1,Di=null;function rm(n,s){var l=Ci(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=n,s=n.deletions,s===null?(n.deletions=[l],n.flags|=16):s.push(l)}function sm(n,s){switch(n.tag){case 5:var l=n.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(n.stateNode=s,gi=n,vi=Wr(s.firstChild),!0):!1;case 6:return s=n.pendingProps===""||s.nodeType!==3?null:s,s!==null?(n.stateNode=s,gi=n,vi=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=Ss!==null?{id:mr,overflow:gr}:null,n.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=Ci(18,null,null,0),l.stateNode=s,l.return=n,n.child=l,gi=n,vi=null,!0):!1;default:return!1}}function Wu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Xu(n){if(vn){var s=vi;if(s){var l=s;if(!sm(n,s)){if(Wu(n))throw Error(t(418));s=Wr(l.nextSibling);var u=gi;s&&sm(n,s)?rm(u,l):(n.flags=n.flags&-4097|2,vn=!1,gi=n)}}else{if(Wu(n))throw Error(t(418));n.flags=n.flags&-4097|2,vn=!1,gi=n}}}function am(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;gi=n}function bl(n){if(n!==gi)return!1;if(!vn)return am(n),vn=!0,!1;var s;if((s=n.tag!==3)&&!(s=n.tag!==5)&&(s=n.type,s=s!=="head"&&s!=="body"&&!Fu(n.type,n.memoizedProps)),s&&(s=vi)){if(Wu(n))throw om(),Error(t(418));for(;s;)rm(n,s),s=Wr(s.nextSibling)}if(am(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,s=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(s===0){vi=Wr(n.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}n=n.nextSibling}vi=null}}else vi=gi?Wr(n.stateNode.nextSibling):null;return!0}function om(){for(var n=vi;n;)n=Wr(n.nextSibling)}function sa(){vi=gi=null,vn=!1}function $u(n){Di===null?Di=[n]:Di.push(n)}var k_=T.ReactCurrentBatchConfig;function mo(n,s,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var u=l.stateNode}if(!u)throw Error(t(147,n));var p=u,_=""+n;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===_?s.ref:(s=function(A){var H=p.refs;A===null?delete H[_]:H[_]=A},s._stringRef=_,s)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function Al(n,s){throw n=Object.prototype.toString.call(s),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":n))}function lm(n){var s=n._init;return s(n._payload)}function cm(n){function s(fe,ne){if(n){var me=fe.deletions;me===null?(fe.deletions=[ne],fe.flags|=16):me.push(ne)}}function l(fe,ne){if(!n)return null;for(;ne!==null;)s(fe,ne),ne=ne.sibling;return null}function u(fe,ne){for(fe=new Map;ne!==null;)ne.key!==null?fe.set(ne.key,ne):fe.set(ne.index,ne),ne=ne.sibling;return fe}function p(fe,ne){return fe=ts(fe,ne),fe.index=0,fe.sibling=null,fe}function _(fe,ne,me){return fe.index=me,n?(me=fe.alternate,me!==null?(me=me.index,me<ne?(fe.flags|=2,ne):me):(fe.flags|=2,ne)):(fe.flags|=1048576,ne)}function A(fe){return n&&fe.alternate===null&&(fe.flags|=2),fe}function H(fe,ne,me,Xe){return ne===null||ne.tag!==6?(ne=Od(me,fe.mode,Xe),ne.return=fe,ne):(ne=p(ne,me),ne.return=fe,ne)}function Z(fe,ne,me,Xe){var xt=me.type;return xt===O?Fe(fe,ne,me.props.children,Xe,me.key):ne!==null&&(ne.elementType===xt||typeof xt=="object"&&xt!==null&&xt.$$typeof===ae&&lm(xt)===ne.type)?(Xe=p(ne,me.props),Xe.ref=mo(fe,ne,me),Xe.return=fe,Xe):(Xe=Kl(me.type,me.key,me.props,null,fe.mode,Xe),Xe.ref=mo(fe,ne,me),Xe.return=fe,Xe)}function Se(fe,ne,me,Xe){return ne===null||ne.tag!==4||ne.stateNode.containerInfo!==me.containerInfo||ne.stateNode.implementation!==me.implementation?(ne=zd(me,fe.mode,Xe),ne.return=fe,ne):(ne=p(ne,me.children||[]),ne.return=fe,ne)}function Fe(fe,ne,me,Xe,xt){return ne===null||ne.tag!==7?(ne=Ps(me,fe.mode,Xe,xt),ne.return=fe,ne):(ne=p(ne,me),ne.return=fe,ne)}function He(fe,ne,me){if(typeof ne=="string"&&ne!==""||typeof ne=="number")return ne=Od(""+ne,fe.mode,me),ne.return=fe,ne;if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case I:return me=Kl(ne.type,ne.key,ne.props,null,fe.mode,me),me.ref=mo(fe,null,ne),me.return=fe,me;case L:return ne=zd(ne,fe.mode,me),ne.return=fe,ne;case ae:var Xe=ne._init;return He(fe,Xe(ne._payload),me)}if(st(ne)||ie(ne))return ne=Ps(ne,fe.mode,me,null),ne.return=fe,ne;Al(fe,ne)}return null}function Ue(fe,ne,me,Xe){var xt=ne!==null?ne.key:null;if(typeof me=="string"&&me!==""||typeof me=="number")return xt!==null?null:H(fe,ne,""+me,Xe);if(typeof me=="object"&&me!==null){switch(me.$$typeof){case I:return me.key===xt?Z(fe,ne,me,Xe):null;case L:return me.key===xt?Se(fe,ne,me,Xe):null;case ae:return xt=me._init,Ue(fe,ne,xt(me._payload),Xe)}if(st(me)||ie(me))return xt!==null?null:Fe(fe,ne,me,Xe,null);Al(fe,me)}return null}function at(fe,ne,me,Xe,xt){if(typeof Xe=="string"&&Xe!==""||typeof Xe=="number")return fe=fe.get(me)||null,H(ne,fe,""+Xe,xt);if(typeof Xe=="object"&&Xe!==null){switch(Xe.$$typeof){case I:return fe=fe.get(Xe.key===null?me:Xe.key)||null,Z(ne,fe,Xe,xt);case L:return fe=fe.get(Xe.key===null?me:Xe.key)||null,Se(ne,fe,Xe,xt);case ae:var bt=Xe._init;return at(fe,ne,me,bt(Xe._payload),xt)}if(st(Xe)||ie(Xe))return fe=fe.get(me)||null,Fe(ne,fe,Xe,xt,null);Al(ne,Xe)}return null}function ht(fe,ne,me,Xe){for(var xt=null,bt=null,At=ne,Lt=ne=0,kn=null;At!==null&&Lt<me.length;Lt++){At.index>Lt?(kn=At,At=null):kn=At.sibling;var Zt=Ue(fe,At,me[Lt],Xe);if(Zt===null){At===null&&(At=kn);break}n&&At&&Zt.alternate===null&&s(fe,At),ne=_(Zt,ne,Lt),bt===null?xt=Zt:bt.sibling=Zt,bt=Zt,At=kn}if(Lt===me.length)return l(fe,At),vn&&Ms(fe,Lt),xt;if(At===null){for(;Lt<me.length;Lt++)At=He(fe,me[Lt],Xe),At!==null&&(ne=_(At,ne,Lt),bt===null?xt=At:bt.sibling=At,bt=At);return vn&&Ms(fe,Lt),xt}for(At=u(fe,At);Lt<me.length;Lt++)kn=at(At,fe,Lt,me[Lt],Xe),kn!==null&&(n&&kn.alternate!==null&&At.delete(kn.key===null?Lt:kn.key),ne=_(kn,ne,Lt),bt===null?xt=kn:bt.sibling=kn,bt=kn);return n&&At.forEach(function(ns){return s(fe,ns)}),vn&&Ms(fe,Lt),xt}function mt(fe,ne,me,Xe){var xt=ie(me);if(typeof xt!="function")throw Error(t(150));if(me=xt.call(me),me==null)throw Error(t(151));for(var bt=xt=null,At=ne,Lt=ne=0,kn=null,Zt=me.next();At!==null&&!Zt.done;Lt++,Zt=me.next()){At.index>Lt?(kn=At,At=null):kn=At.sibling;var ns=Ue(fe,At,Zt.value,Xe);if(ns===null){At===null&&(At=kn);break}n&&At&&ns.alternate===null&&s(fe,At),ne=_(ns,ne,Lt),bt===null?xt=ns:bt.sibling=ns,bt=ns,At=kn}if(Zt.done)return l(fe,At),vn&&Ms(fe,Lt),xt;if(At===null){for(;!Zt.done;Lt++,Zt=me.next())Zt=He(fe,Zt.value,Xe),Zt!==null&&(ne=_(Zt,ne,Lt),bt===null?xt=Zt:bt.sibling=Zt,bt=Zt);return vn&&Ms(fe,Lt),xt}for(At=u(fe,At);!Zt.done;Lt++,Zt=me.next())Zt=at(At,fe,Lt,Zt.value,Xe),Zt!==null&&(n&&Zt.alternate!==null&&At.delete(Zt.key===null?Lt:Zt.key),ne=_(Zt,ne,Lt),bt===null?xt=Zt:bt.sibling=Zt,bt=Zt);return n&&At.forEach(function(xy){return s(fe,xy)}),vn&&Ms(fe,Lt),xt}function bn(fe,ne,me,Xe){if(typeof me=="object"&&me!==null&&me.type===O&&me.key===null&&(me=me.props.children),typeof me=="object"&&me!==null){switch(me.$$typeof){case I:e:{for(var xt=me.key,bt=ne;bt!==null;){if(bt.key===xt){if(xt=me.type,xt===O){if(bt.tag===7){l(fe,bt.sibling),ne=p(bt,me.props.children),ne.return=fe,fe=ne;break e}}else if(bt.elementType===xt||typeof xt=="object"&&xt!==null&&xt.$$typeof===ae&&lm(xt)===bt.type){l(fe,bt.sibling),ne=p(bt,me.props),ne.ref=mo(fe,bt,me),ne.return=fe,fe=ne;break e}l(fe,bt);break}else s(fe,bt);bt=bt.sibling}me.type===O?(ne=Ps(me.props.children,fe.mode,Xe,me.key),ne.return=fe,fe=ne):(Xe=Kl(me.type,me.key,me.props,null,fe.mode,Xe),Xe.ref=mo(fe,ne,me),Xe.return=fe,fe=Xe)}return A(fe);case L:e:{for(bt=me.key;ne!==null;){if(ne.key===bt)if(ne.tag===4&&ne.stateNode.containerInfo===me.containerInfo&&ne.stateNode.implementation===me.implementation){l(fe,ne.sibling),ne=p(ne,me.children||[]),ne.return=fe,fe=ne;break e}else{l(fe,ne);break}else s(fe,ne);ne=ne.sibling}ne=zd(me,fe.mode,Xe),ne.return=fe,fe=ne}return A(fe);case ae:return bt=me._init,bn(fe,ne,bt(me._payload),Xe)}if(st(me))return ht(fe,ne,me,Xe);if(ie(me))return mt(fe,ne,me,Xe);Al(fe,me)}return typeof me=="string"&&me!==""||typeof me=="number"?(me=""+me,ne!==null&&ne.tag===6?(l(fe,ne.sibling),ne=p(ne,me),ne.return=fe,fe=ne):(l(fe,ne),ne=Od(me,fe.mode,Xe),ne.return=fe,fe=ne),A(fe)):l(fe,ne)}return bn}var aa=cm(!0),um=cm(!1),Cl=Xr(null),Rl=null,oa=null,ju=null;function Yu(){ju=oa=Rl=null}function qu(n){var s=Cl.current;hn(Cl),n._currentValue=s}function Zu(n,s,l){for(;n!==null;){var u=n.alternate;if((n.childLanes&s)!==s?(n.childLanes|=s,u!==null&&(u.childLanes|=s)):u!==null&&(u.childLanes&s)!==s&&(u.childLanes|=s),n===l)break;n=n.return}}function la(n,s){Rl=n,ju=oa=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&s)!==0&&(ui=!0),n.firstContext=null)}function Ti(n){var s=n._currentValue;if(ju!==n)if(n={context:n,memoizedValue:s,next:null},oa===null){if(Rl===null)throw Error(t(308));oa=n,Rl.dependencies={lanes:0,firstContext:n}}else oa=oa.next=n;return s}var Es=null;function Ku(n){Es===null?Es=[n]:Es.push(n)}function dm(n,s,l,u){var p=s.interleaved;return p===null?(l.next=l,Ku(s)):(l.next=p.next,p.next=l),s.interleaved=l,vr(n,u)}function vr(n,s){n.lanes|=s;var l=n.alternate;for(l!==null&&(l.lanes|=s),l=n,n=n.return;n!==null;)n.childLanes|=s,l=n.alternate,l!==null&&(l.childLanes|=s),l=n,n=n.return;return l.tag===3?l.stateNode:null}var Yr=!1;function Ju(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fm(n,s){n=n.updateQueue,s.updateQueue===n&&(s.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function xr(n,s){return{eventTime:n,lane:s,tag:0,payload:null,callback:null,next:null}}function qr(n,s,l){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Yt&2)!==0){var p=u.pending;return p===null?s.next=s:(s.next=p.next,p.next=s),u.pending=s,vr(n,l)}return p=u.interleaved,p===null?(s.next=s,Ku(u)):(s.next=p.next,p.next=s),u.interleaved=s,vr(n,l)}function Pl(n,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var u=s.lanes;u&=n.pendingLanes,l|=u,s.lanes=l,rn(n,l)}}function hm(n,s){var l=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,l===u)){var p=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var A={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};_===null?p=_=A:_=_.next=A,l=l.next}while(l!==null);_===null?p=_=s:_=_.next=s}else p=_=s;l={baseState:u.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:u.shared,effects:u.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=s:n.next=s,l.lastBaseUpdate=s}function Ll(n,s,l,u){var p=n.updateQueue;Yr=!1;var _=p.firstBaseUpdate,A=p.lastBaseUpdate,H=p.shared.pending;if(H!==null){p.shared.pending=null;var Z=H,Se=Z.next;Z.next=null,A===null?_=Se:A.next=Se,A=Z;var Fe=n.alternate;Fe!==null&&(Fe=Fe.updateQueue,H=Fe.lastBaseUpdate,H!==A&&(H===null?Fe.firstBaseUpdate=Se:H.next=Se,Fe.lastBaseUpdate=Z))}if(_!==null){var He=p.baseState;A=0,Fe=Se=Z=null,H=_;do{var Ue=H.lane,at=H.eventTime;if((u&Ue)===Ue){Fe!==null&&(Fe=Fe.next={eventTime:at,lane:0,tag:H.tag,payload:H.payload,callback:H.callback,next:null});e:{var ht=n,mt=H;switch(Ue=s,at=l,mt.tag){case 1:if(ht=mt.payload,typeof ht=="function"){He=ht.call(at,He,Ue);break e}He=ht;break e;case 3:ht.flags=ht.flags&-65537|128;case 0:if(ht=mt.payload,Ue=typeof ht=="function"?ht.call(at,He,Ue):ht,Ue==null)break e;He=ee({},He,Ue);break e;case 2:Yr=!0}}H.callback!==null&&H.lane!==0&&(n.flags|=64,Ue=p.effects,Ue===null?p.effects=[H]:Ue.push(H))}else at={eventTime:at,lane:Ue,tag:H.tag,payload:H.payload,callback:H.callback,next:null},Fe===null?(Se=Fe=at,Z=He):Fe=Fe.next=at,A|=Ue;if(H=H.next,H===null){if(H=p.shared.pending,H===null)break;Ue=H,H=Ue.next,Ue.next=null,p.lastBaseUpdate=Ue,p.shared.pending=null}}while(!0);if(Fe===null&&(Z=He),p.baseState=Z,p.firstBaseUpdate=Se,p.lastBaseUpdate=Fe,s=p.shared.interleaved,s!==null){p=s;do A|=p.lane,p=p.next;while(p!==s)}else _===null&&(p.shared.lanes=0);bs|=A,n.lanes=A,n.memoizedState=He}}function pm(n,s,l){if(n=s.effects,s.effects=null,n!==null)for(s=0;s<n.length;s++){var u=n[s],p=u.callback;if(p!==null){if(u.callback=null,u=l,typeof p!="function")throw Error(t(191,p));p.call(u)}}}var go={},Yi=Xr(go),vo=Xr(go),xo=Xr(go);function ws(n){if(n===go)throw Error(t(174));return n}function Qu(n,s){switch(ln(xo,s),ln(vo,n),ln(Yi,go),n=s.nodeType,n){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:w(null,"");break;default:n=n===8?s.parentNode:s,s=n.namespaceURI||null,n=n.tagName,s=w(s,n)}hn(Yi),ln(Yi,s)}function ca(){hn(Yi),hn(vo),hn(xo)}function mm(n){ws(xo.current);var s=ws(Yi.current),l=w(s,n.type);s!==l&&(ln(vo,n),ln(Yi,l))}function ed(n){vo.current===n&&(hn(Yi),hn(vo))}var xn=Xr(0);function Nl(n){for(var s=n;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var td=[];function nd(){for(var n=0;n<td.length;n++)td[n]._workInProgressVersionPrimary=null;td.length=0}var Dl=T.ReactCurrentDispatcher,id=T.ReactCurrentBatchConfig,Ts=0,_n=null,Ln=null,On=null,Il=!1,_o=!1,yo=0,B_=0;function Zn(){throw Error(t(321))}function rd(n,s){if(s===null)return!1;for(var l=0;l<s.length&&l<n.length;l++)if(!Ni(n[l],s[l]))return!1;return!0}function sd(n,s,l,u,p,_){if(Ts=_,_n=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Dl.current=n===null||n.memoizedState===null?W_:X_,n=l(u,p),_o){_=0;do{if(_o=!1,yo=0,25<=_)throw Error(t(301));_+=1,On=Ln=null,s.updateQueue=null,Dl.current=$_,n=l(u,p)}while(_o)}if(Dl.current=Ol,s=Ln!==null&&Ln.next!==null,Ts=0,On=Ln=_n=null,Il=!1,s)throw Error(t(300));return n}function ad(){var n=yo!==0;return yo=0,n}function qi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return On===null?_n.memoizedState=On=n:On=On.next=n,On}function bi(){if(Ln===null){var n=_n.alternate;n=n!==null?n.memoizedState:null}else n=Ln.next;var s=On===null?_n.memoizedState:On.next;if(s!==null)On=s,Ln=n;else{if(n===null)throw Error(t(310));Ln=n,n={memoizedState:Ln.memoizedState,baseState:Ln.baseState,baseQueue:Ln.baseQueue,queue:Ln.queue,next:null},On===null?_n.memoizedState=On=n:On=On.next=n}return On}function So(n,s){return typeof s=="function"?s(n):s}function od(n){var s=bi(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var u=Ln,p=u.baseQueue,_=l.pending;if(_!==null){if(p!==null){var A=p.next;p.next=_.next,_.next=A}u.baseQueue=p=_,l.pending=null}if(p!==null){_=p.next,u=u.baseState;var H=A=null,Z=null,Se=_;do{var Fe=Se.lane;if((Ts&Fe)===Fe)Z!==null&&(Z=Z.next={lane:0,action:Se.action,hasEagerState:Se.hasEagerState,eagerState:Se.eagerState,next:null}),u=Se.hasEagerState?Se.eagerState:n(u,Se.action);else{var He={lane:Fe,action:Se.action,hasEagerState:Se.hasEagerState,eagerState:Se.eagerState,next:null};Z===null?(H=Z=He,A=u):Z=Z.next=He,_n.lanes|=Fe,bs|=Fe}Se=Se.next}while(Se!==null&&Se!==_);Z===null?A=u:Z.next=H,Ni(u,s.memoizedState)||(ui=!0),s.memoizedState=u,s.baseState=A,s.baseQueue=Z,l.lastRenderedState=u}if(n=l.interleaved,n!==null){p=n;do _=p.lane,_n.lanes|=_,bs|=_,p=p.next;while(p!==n)}else p===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function ld(n){var s=bi(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var u=l.dispatch,p=l.pending,_=s.memoizedState;if(p!==null){l.pending=null;var A=p=p.next;do _=n(_,A.action),A=A.next;while(A!==p);Ni(_,s.memoizedState)||(ui=!0),s.memoizedState=_,s.baseQueue===null&&(s.baseState=_),l.lastRenderedState=_}return[_,u]}function gm(){}function vm(n,s){var l=_n,u=bi(),p=s(),_=!Ni(u.memoizedState,p);if(_&&(u.memoizedState=p,ui=!0),u=u.queue,cd(ym.bind(null,l,u,n),[n]),u.getSnapshot!==s||_||On!==null&&On.memoizedState.tag&1){if(l.flags|=2048,Mo(9,_m.bind(null,l,u,p,s),void 0,null),zn===null)throw Error(t(349));(Ts&30)!==0||xm(l,s,p)}return p}function xm(n,s,l){n.flags|=16384,n={getSnapshot:s,value:l},s=_n.updateQueue,s===null?(s={lastEffect:null,stores:null},_n.updateQueue=s,s.stores=[n]):(l=s.stores,l===null?s.stores=[n]:l.push(n))}function _m(n,s,l,u){s.value=l,s.getSnapshot=u,Sm(s)&&Mm(n)}function ym(n,s,l){return l(function(){Sm(s)&&Mm(n)})}function Sm(n){var s=n.getSnapshot;n=n.value;try{var l=s();return!Ni(n,l)}catch{return!0}}function Mm(n){var s=vr(n,1);s!==null&&Oi(s,n,1,-1)}function Em(n){var s=qi();return typeof n=="function"&&(n=n()),s.memoizedState=s.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:So,lastRenderedState:n},s.queue=n,n=n.dispatch=G_.bind(null,_n,n),[s.memoizedState,n]}function Mo(n,s,l,u){return n={tag:n,create:s,destroy:l,deps:u,next:null},s=_n.updateQueue,s===null?(s={lastEffect:null,stores:null},_n.updateQueue=s,s.lastEffect=n.next=n):(l=s.lastEffect,l===null?s.lastEffect=n.next=n:(u=l.next,l.next=n,n.next=u,s.lastEffect=n)),n}function wm(){return bi().memoizedState}function Ul(n,s,l,u){var p=qi();_n.flags|=n,p.memoizedState=Mo(1|s,l,void 0,u===void 0?null:u)}function Fl(n,s,l,u){var p=bi();u=u===void 0?null:u;var _=void 0;if(Ln!==null){var A=Ln.memoizedState;if(_=A.destroy,u!==null&&rd(u,A.deps)){p.memoizedState=Mo(s,l,_,u);return}}_n.flags|=n,p.memoizedState=Mo(1|s,l,_,u)}function Tm(n,s){return Ul(8390656,8,n,s)}function cd(n,s){return Fl(2048,8,n,s)}function bm(n,s){return Fl(4,2,n,s)}function Am(n,s){return Fl(4,4,n,s)}function Cm(n,s){if(typeof s=="function")return n=n(),s(n),function(){s(null)};if(s!=null)return n=n(),s.current=n,function(){s.current=null}}function Rm(n,s,l){return l=l!=null?l.concat([n]):null,Fl(4,4,Cm.bind(null,s,n),l)}function ud(){}function Pm(n,s){var l=bi();s=s===void 0?null:s;var u=l.memoizedState;return u!==null&&s!==null&&rd(s,u[1])?u[0]:(l.memoizedState=[n,s],n)}function Lm(n,s){var l=bi();s=s===void 0?null:s;var u=l.memoizedState;return u!==null&&s!==null&&rd(s,u[1])?u[0]:(n=n(),l.memoizedState=[n,s],n)}function Nm(n,s,l){return(Ts&21)===0?(n.baseState&&(n.baseState=!1,ui=!0),n.memoizedState=l):(Ni(l,s)||(l=Je(),_n.lanes|=l,bs|=l,n.baseState=!0),s)}function H_(n,s){var l=Tt;Tt=l!==0&&4>l?l:4,n(!0);var u=id.transition;id.transition={};try{n(!1),s()}finally{Tt=l,id.transition=u}}function Dm(){return bi().memoizedState}function V_(n,s,l){var u=Qr(n);if(l={lane:u,action:l,hasEagerState:!1,eagerState:null,next:null},Im(n))Um(s,l);else if(l=dm(n,s,l,u),l!==null){var p=ri();Oi(l,n,u,p),Fm(l,s,u)}}function G_(n,s,l){var u=Qr(n),p={lane:u,action:l,hasEagerState:!1,eagerState:null,next:null};if(Im(n))Um(s,p);else{var _=n.alternate;if(n.lanes===0&&(_===null||_.lanes===0)&&(_=s.lastRenderedReducer,_!==null))try{var A=s.lastRenderedState,H=_(A,l);if(p.hasEagerState=!0,p.eagerState=H,Ni(H,A)){var Z=s.interleaved;Z===null?(p.next=p,Ku(s)):(p.next=Z.next,Z.next=p),s.interleaved=p;return}}catch{}finally{}l=dm(n,s,p,u),l!==null&&(p=ri(),Oi(l,n,u,p),Fm(l,s,u))}}function Im(n){var s=n.alternate;return n===_n||s!==null&&s===_n}function Um(n,s){_o=Il=!0;var l=n.pending;l===null?s.next=s:(s.next=l.next,l.next=s),n.pending=s}function Fm(n,s,l){if((l&4194240)!==0){var u=s.lanes;u&=n.pendingLanes,l|=u,s.lanes=l,rn(n,l)}}var Ol={readContext:Ti,useCallback:Zn,useContext:Zn,useEffect:Zn,useImperativeHandle:Zn,useInsertionEffect:Zn,useLayoutEffect:Zn,useMemo:Zn,useReducer:Zn,useRef:Zn,useState:Zn,useDebugValue:Zn,useDeferredValue:Zn,useTransition:Zn,useMutableSource:Zn,useSyncExternalStore:Zn,useId:Zn,unstable_isNewReconciler:!1},W_={readContext:Ti,useCallback:function(n,s){return qi().memoizedState=[n,s===void 0?null:s],n},useContext:Ti,useEffect:Tm,useImperativeHandle:function(n,s,l){return l=l!=null?l.concat([n]):null,Ul(4194308,4,Cm.bind(null,s,n),l)},useLayoutEffect:function(n,s){return Ul(4194308,4,n,s)},useInsertionEffect:function(n,s){return Ul(4,2,n,s)},useMemo:function(n,s){var l=qi();return s=s===void 0?null:s,n=n(),l.memoizedState=[n,s],n},useReducer:function(n,s,l){var u=qi();return s=l!==void 0?l(s):s,u.memoizedState=u.baseState=s,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:s},u.queue=n,n=n.dispatch=V_.bind(null,_n,n),[u.memoizedState,n]},useRef:function(n){var s=qi();return n={current:n},s.memoizedState=n},useState:Em,useDebugValue:ud,useDeferredValue:function(n){return qi().memoizedState=n},useTransition:function(){var n=Em(!1),s=n[0];return n=H_.bind(null,n[1]),qi().memoizedState=n,[s,n]},useMutableSource:function(){},useSyncExternalStore:function(n,s,l){var u=_n,p=qi();if(vn){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),zn===null)throw Error(t(349));(Ts&30)!==0||xm(u,s,l)}p.memoizedState=l;var _={value:l,getSnapshot:s};return p.queue=_,Tm(ym.bind(null,u,_,n),[n]),u.flags|=2048,Mo(9,_m.bind(null,u,_,l,s),void 0,null),l},useId:function(){var n=qi(),s=zn.identifierPrefix;if(vn){var l=gr,u=mr;l=(u&~(1<<32-We(u)-1)).toString(32)+l,s=":"+s+"R"+l,l=yo++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=B_++,s=":"+s+"r"+l.toString(32)+":";return n.memoizedState=s},unstable_isNewReconciler:!1},X_={readContext:Ti,useCallback:Pm,useContext:Ti,useEffect:cd,useImperativeHandle:Rm,useInsertionEffect:bm,useLayoutEffect:Am,useMemo:Lm,useReducer:od,useRef:wm,useState:function(){return od(So)},useDebugValue:ud,useDeferredValue:function(n){var s=bi();return Nm(s,Ln.memoizedState,n)},useTransition:function(){var n=od(So)[0],s=bi().memoizedState;return[n,s]},useMutableSource:gm,useSyncExternalStore:vm,useId:Dm,unstable_isNewReconciler:!1},$_={readContext:Ti,useCallback:Pm,useContext:Ti,useEffect:cd,useImperativeHandle:Rm,useInsertionEffect:bm,useLayoutEffect:Am,useMemo:Lm,useReducer:ld,useRef:wm,useState:function(){return ld(So)},useDebugValue:ud,useDeferredValue:function(n){var s=bi();return Ln===null?s.memoizedState=n:Nm(s,Ln.memoizedState,n)},useTransition:function(){var n=ld(So)[0],s=bi().memoizedState;return[n,s]},useMutableSource:gm,useSyncExternalStore:vm,useId:Dm,unstable_isNewReconciler:!1};function Ii(n,s){if(n&&n.defaultProps){s=ee({},s),n=n.defaultProps;for(var l in n)s[l]===void 0&&(s[l]=n[l]);return s}return s}function dd(n,s,l,u){s=n.memoizedState,l=l(u,s),l=l==null?s:ee({},s,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var zl={isMounted:function(n){return(n=n._reactInternals)?ut(n)===n:!1},enqueueSetState:function(n,s,l){n=n._reactInternals;var u=ri(),p=Qr(n),_=xr(u,p);_.payload=s,l!=null&&(_.callback=l),s=qr(n,_,p),s!==null&&(Oi(s,n,p,u),Pl(s,n,p))},enqueueReplaceState:function(n,s,l){n=n._reactInternals;var u=ri(),p=Qr(n),_=xr(u,p);_.tag=1,_.payload=s,l!=null&&(_.callback=l),s=qr(n,_,p),s!==null&&(Oi(s,n,p,u),Pl(s,n,p))},enqueueForceUpdate:function(n,s){n=n._reactInternals;var l=ri(),u=Qr(n),p=xr(l,u);p.tag=2,s!=null&&(p.callback=s),s=qr(n,p,u),s!==null&&(Oi(s,n,u,l),Pl(s,n,u))}};function Om(n,s,l,u,p,_,A){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,_,A):s.prototype&&s.prototype.isPureReactComponent?!oo(l,u)||!oo(p,_):!0}function zm(n,s,l){var u=!1,p=$r,_=s.contextType;return typeof _=="object"&&_!==null?_=Ti(_):(p=ci(s)?ys:qn.current,u=s.contextTypes,_=(u=u!=null)?na(n,p):$r),s=new s(l,_),n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=zl,n.stateNode=s,s._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=_),s}function km(n,s,l,u){n=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,u),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,u),s.state!==n&&zl.enqueueReplaceState(s,s.state,null)}function fd(n,s,l,u){var p=n.stateNode;p.props=l,p.state=n.memoizedState,p.refs={},Ju(n);var _=s.contextType;typeof _=="object"&&_!==null?p.context=Ti(_):(_=ci(s)?ys:qn.current,p.context=na(n,_)),p.state=n.memoizedState,_=s.getDerivedStateFromProps,typeof _=="function"&&(dd(n,s,_,l),p.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(s=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),s!==p.state&&zl.enqueueReplaceState(p,p.state,null),Ll(n,l,p,u),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function ua(n,s){try{var l="",u=s;do l+=ve(u),u=u.return;while(u);var p=l}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:n,source:s,stack:p,digest:null}}function hd(n,s,l){return{value:n,source:null,stack:l??null,digest:s??null}}function pd(n,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var j_=typeof WeakMap=="function"?WeakMap:Map;function Bm(n,s,l){l=xr(-1,l),l.tag=3,l.payload={element:null};var u=s.value;return l.callback=function(){Xl||(Xl=!0,Rd=u),pd(n,s)},l}function Hm(n,s,l){l=xr(-1,l),l.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var p=s.value;l.payload=function(){return u(p)},l.callback=function(){pd(n,s)}}var _=n.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(l.callback=function(){pd(n,s),typeof u!="function"&&(Kr===null?Kr=new Set([this]):Kr.add(this));var A=s.stack;this.componentDidCatch(s.value,{componentStack:A!==null?A:""})}),l}function Vm(n,s,l){var u=n.pingCache;if(u===null){u=n.pingCache=new j_;var p=new Set;u.set(s,p)}else p=u.get(s),p===void 0&&(p=new Set,u.set(s,p));p.has(l)||(p.add(l),n=oy.bind(null,n,s,l),s.then(n,n))}function Gm(n){do{var s;if((s=n.tag===13)&&(s=n.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return n;n=n.return}while(n!==null);return null}function Wm(n,s,l,u,p){return(n.mode&1)===0?(n===s?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=xr(-1,1),s.tag=2,qr(l,s,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var Y_=T.ReactCurrentOwner,ui=!1;function ii(n,s,l,u){s.child=n===null?um(s,null,l,u):aa(s,n.child,l,u)}function Xm(n,s,l,u,p){l=l.render;var _=s.ref;return la(s,p),u=sd(n,s,l,u,_,p),l=ad(),n!==null&&!ui?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~p,_r(n,s,p)):(vn&&l&&Vu(s),s.flags|=1,ii(n,s,u,p),s.child)}function $m(n,s,l,u,p){if(n===null){var _=l.type;return typeof _=="function"&&!Fd(_)&&_.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=_,jm(n,s,_,u,p)):(n=Kl(l.type,null,u,s,s.mode,p),n.ref=s.ref,n.return=s,s.child=n)}if(_=n.child,(n.lanes&p)===0){var A=_.memoizedProps;if(l=l.compare,l=l!==null?l:oo,l(A,u)&&n.ref===s.ref)return _r(n,s,p)}return s.flags|=1,n=ts(_,u),n.ref=s.ref,n.return=s,s.child=n}function jm(n,s,l,u,p){if(n!==null){var _=n.memoizedProps;if(oo(_,u)&&n.ref===s.ref)if(ui=!1,s.pendingProps=u=_,(n.lanes&p)!==0)(n.flags&131072)!==0&&(ui=!0);else return s.lanes=n.lanes,_r(n,s,p)}return md(n,s,l,u,p)}function Ym(n,s,l){var u=s.pendingProps,p=u.children,_=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},ln(fa,xi),xi|=l;else{if((l&1073741824)===0)return n=_!==null?_.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:n,cachePool:null,transitions:null},s.updateQueue=null,ln(fa,xi),xi|=n,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=_!==null?_.baseLanes:l,ln(fa,xi),xi|=u}else _!==null?(u=_.baseLanes|l,s.memoizedState=null):u=l,ln(fa,xi),xi|=u;return ii(n,s,p,l),s.child}function qm(n,s){var l=s.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function md(n,s,l,u,p){var _=ci(l)?ys:qn.current;return _=na(s,_),la(s,p),l=sd(n,s,l,u,_,p),u=ad(),n!==null&&!ui?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~p,_r(n,s,p)):(vn&&u&&Vu(s),s.flags|=1,ii(n,s,l,p),s.child)}function Zm(n,s,l,u,p){if(ci(l)){var _=!0;Ml(s)}else _=!1;if(la(s,p),s.stateNode===null)Bl(n,s),zm(s,l,u),fd(s,l,u,p),u=!0;else if(n===null){var A=s.stateNode,H=s.memoizedProps;A.props=H;var Z=A.context,Se=l.contextType;typeof Se=="object"&&Se!==null?Se=Ti(Se):(Se=ci(l)?ys:qn.current,Se=na(s,Se));var Fe=l.getDerivedStateFromProps,He=typeof Fe=="function"||typeof A.getSnapshotBeforeUpdate=="function";He||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(H!==u||Z!==Se)&&km(s,A,u,Se),Yr=!1;var Ue=s.memoizedState;A.state=Ue,Ll(s,u,A,p),Z=s.memoizedState,H!==u||Ue!==Z||li.current||Yr?(typeof Fe=="function"&&(dd(s,l,Fe,u),Z=s.memoizedState),(H=Yr||Om(s,l,H,u,Ue,Z,Se))?(He||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(s.flags|=4194308)):(typeof A.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=u,s.memoizedState=Z),A.props=u,A.state=Z,A.context=Se,u=H):(typeof A.componentDidMount=="function"&&(s.flags|=4194308),u=!1)}else{A=s.stateNode,fm(n,s),H=s.memoizedProps,Se=s.type===s.elementType?H:Ii(s.type,H),A.props=Se,He=s.pendingProps,Ue=A.context,Z=l.contextType,typeof Z=="object"&&Z!==null?Z=Ti(Z):(Z=ci(l)?ys:qn.current,Z=na(s,Z));var at=l.getDerivedStateFromProps;(Fe=typeof at=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(H!==He||Ue!==Z)&&km(s,A,u,Z),Yr=!1,Ue=s.memoizedState,A.state=Ue,Ll(s,u,A,p);var ht=s.memoizedState;H!==He||Ue!==ht||li.current||Yr?(typeof at=="function"&&(dd(s,l,at,u),ht=s.memoizedState),(Se=Yr||Om(s,l,Se,u,Ue,ht,Z)||!1)?(Fe||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(u,ht,Z),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(u,ht,Z)),typeof A.componentDidUpdate=="function"&&(s.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof A.componentDidUpdate!="function"||H===n.memoizedProps&&Ue===n.memoizedState||(s.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||H===n.memoizedProps&&Ue===n.memoizedState||(s.flags|=1024),s.memoizedProps=u,s.memoizedState=ht),A.props=u,A.state=ht,A.context=Z,u=Se):(typeof A.componentDidUpdate!="function"||H===n.memoizedProps&&Ue===n.memoizedState||(s.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||H===n.memoizedProps&&Ue===n.memoizedState||(s.flags|=1024),u=!1)}return gd(n,s,l,u,_,p)}function gd(n,s,l,u,p,_){qm(n,s);var A=(s.flags&128)!==0;if(!u&&!A)return p&&tm(s,l,!1),_r(n,s,_);u=s.stateNode,Y_.current=s;var H=A&&typeof l.getDerivedStateFromError!="function"?null:u.render();return s.flags|=1,n!==null&&A?(s.child=aa(s,n.child,null,_),s.child=aa(s,null,H,_)):ii(n,s,H,_),s.memoizedState=u.state,p&&tm(s,l,!0),s.child}function Km(n){var s=n.stateNode;s.pendingContext?Qp(n,s.pendingContext,s.pendingContext!==s.context):s.context&&Qp(n,s.context,!1),Qu(n,s.containerInfo)}function Jm(n,s,l,u,p){return sa(),$u(p),s.flags|=256,ii(n,s,l,u),s.child}var vd={dehydrated:null,treeContext:null,retryLane:0};function xd(n){return{baseLanes:n,cachePool:null,transitions:null}}function Qm(n,s,l){var u=s.pendingProps,p=xn.current,_=!1,A=(s.flags&128)!==0,H;if((H=A)||(H=n!==null&&n.memoizedState===null?!1:(p&2)!==0),H?(_=!0,s.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),ln(xn,p&1),n===null)return Xu(s),n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((s.mode&1)===0?s.lanes=1:n.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(A=u.children,n=u.fallback,_?(u=s.mode,_=s.child,A={mode:"hidden",children:A},(u&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=A):_=Jl(A,u,0,null),n=Ps(n,u,l,null),_.return=s,n.return=s,_.sibling=n,s.child=_,s.child.memoizedState=xd(l),s.memoizedState=vd,n):_d(s,A));if(p=n.memoizedState,p!==null&&(H=p.dehydrated,H!==null))return q_(n,s,A,u,H,p,l);if(_){_=u.fallback,A=s.mode,p=n.child,H=p.sibling;var Z={mode:"hidden",children:u.children};return(A&1)===0&&s.child!==p?(u=s.child,u.childLanes=0,u.pendingProps=Z,s.deletions=null):(u=ts(p,Z),u.subtreeFlags=p.subtreeFlags&14680064),H!==null?_=ts(H,_):(_=Ps(_,A,l,null),_.flags|=2),_.return=s,u.return=s,u.sibling=_,s.child=u,u=_,_=s.child,A=n.child.memoizedState,A=A===null?xd(l):{baseLanes:A.baseLanes|l,cachePool:null,transitions:A.transitions},_.memoizedState=A,_.childLanes=n.childLanes&~l,s.memoizedState=vd,u}return _=n.child,n=_.sibling,u=ts(_,{mode:"visible",children:u.children}),(s.mode&1)===0&&(u.lanes=l),u.return=s,u.sibling=null,n!==null&&(l=s.deletions,l===null?(s.deletions=[n],s.flags|=16):l.push(n)),s.child=u,s.memoizedState=null,u}function _d(n,s){return s=Jl({mode:"visible",children:s},n.mode,0,null),s.return=n,n.child=s}function kl(n,s,l,u){return u!==null&&$u(u),aa(s,n.child,null,l),n=_d(s,s.pendingProps.children),n.flags|=2,s.memoizedState=null,n}function q_(n,s,l,u,p,_,A){if(l)return s.flags&256?(s.flags&=-257,u=hd(Error(t(422))),kl(n,s,A,u)):s.memoizedState!==null?(s.child=n.child,s.flags|=128,null):(_=u.fallback,p=s.mode,u=Jl({mode:"visible",children:u.children},p,0,null),_=Ps(_,p,A,null),_.flags|=2,u.return=s,_.return=s,u.sibling=_,s.child=u,(s.mode&1)!==0&&aa(s,n.child,null,A),s.child.memoizedState=xd(A),s.memoizedState=vd,_);if((s.mode&1)===0)return kl(n,s,A,null);if(p.data==="$!"){if(u=p.nextSibling&&p.nextSibling.dataset,u)var H=u.dgst;return u=H,_=Error(t(419)),u=hd(_,u,void 0),kl(n,s,A,u)}if(H=(A&n.childLanes)!==0,ui||H){if(u=zn,u!==null){switch(A&-A){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(u.suspendedLanes|A))!==0?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,vr(n,p),Oi(u,n,p,-1))}return Ud(),u=hd(Error(t(421))),kl(n,s,A,u)}return p.data==="$?"?(s.flags|=128,s.child=n.child,s=ly.bind(null,n),p._reactRetry=s,null):(n=_.treeContext,vi=Wr(p.nextSibling),gi=s,vn=!0,Di=null,n!==null&&(Ei[wi++]=mr,Ei[wi++]=gr,Ei[wi++]=Ss,mr=n.id,gr=n.overflow,Ss=s),s=_d(s,u.children),s.flags|=4096,s)}function eg(n,s,l){n.lanes|=s;var u=n.alternate;u!==null&&(u.lanes|=s),Zu(n.return,s,l)}function yd(n,s,l,u,p){var _=n.memoizedState;_===null?n.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:u,tail:l,tailMode:p}:(_.isBackwards=s,_.rendering=null,_.renderingStartTime=0,_.last=u,_.tail=l,_.tailMode=p)}function tg(n,s,l){var u=s.pendingProps,p=u.revealOrder,_=u.tail;if(ii(n,s,u.children,l),u=xn.current,(u&2)!==0)u=u&1|2,s.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=s.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&eg(n,l,s);else if(n.tag===19)eg(n,l,s);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break e;for(;n.sibling===null;){if(n.return===null||n.return===s)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(ln(xn,u),(s.mode&1)===0)s.memoizedState=null;else switch(p){case"forwards":for(l=s.child,p=null;l!==null;)n=l.alternate,n!==null&&Nl(n)===null&&(p=l),l=l.sibling;l=p,l===null?(p=s.child,s.child=null):(p=l.sibling,l.sibling=null),yd(s,!1,p,l,_);break;case"backwards":for(l=null,p=s.child,s.child=null;p!==null;){if(n=p.alternate,n!==null&&Nl(n)===null){s.child=p;break}n=p.sibling,p.sibling=l,l=p,p=n}yd(s,!0,l,null,_);break;case"together":yd(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Bl(n,s){(s.mode&1)===0&&n!==null&&(n.alternate=null,s.alternate=null,s.flags|=2)}function _r(n,s,l){if(n!==null&&(s.dependencies=n.dependencies),bs|=s.lanes,(l&s.childLanes)===0)return null;if(n!==null&&s.child!==n.child)throw Error(t(153));if(s.child!==null){for(n=s.child,l=ts(n,n.pendingProps),s.child=l,l.return=s;n.sibling!==null;)n=n.sibling,l=l.sibling=ts(n,n.pendingProps),l.return=s;l.sibling=null}return s.child}function Z_(n,s,l){switch(s.tag){case 3:Km(s),sa();break;case 5:mm(s);break;case 1:ci(s.type)&&Ml(s);break;case 4:Qu(s,s.stateNode.containerInfo);break;case 10:var u=s.type._context,p=s.memoizedProps.value;ln(Cl,u._currentValue),u._currentValue=p;break;case 13:if(u=s.memoizedState,u!==null)return u.dehydrated!==null?(ln(xn,xn.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?Qm(n,s,l):(ln(xn,xn.current&1),n=_r(n,s,l),n!==null?n.sibling:null);ln(xn,xn.current&1);break;case 19:if(u=(l&s.childLanes)!==0,(n.flags&128)!==0){if(u)return tg(n,s,l);s.flags|=128}if(p=s.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),ln(xn,xn.current),u)break;return null;case 22:case 23:return s.lanes=0,Ym(n,s,l)}return _r(n,s,l)}var ng,Sd,ig,rg;ng=function(n,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Sd=function(){},ig=function(n,s,l,u){var p=n.memoizedProps;if(p!==u){n=s.stateNode,ws(Yi.current);var _=null;switch(l){case"input":p=we(n,p),u=we(n,u),_=[];break;case"select":p=ee({},p,{value:void 0}),u=ee({},u,{value:void 0}),_=[];break;case"textarea":p=Et(n,p),u=Et(n,u),_=[];break;default:typeof p.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=_l)}Ee(l,u);var A;l=null;for(Se in p)if(!u.hasOwnProperty(Se)&&p.hasOwnProperty(Se)&&p[Se]!=null)if(Se==="style"){var H=p[Se];for(A in H)H.hasOwnProperty(A)&&(l||(l={}),l[A]="")}else Se!=="dangerouslySetInnerHTML"&&Se!=="children"&&Se!=="suppressContentEditableWarning"&&Se!=="suppressHydrationWarning"&&Se!=="autoFocus"&&(a.hasOwnProperty(Se)?_||(_=[]):(_=_||[]).push(Se,null));for(Se in u){var Z=u[Se];if(H=p!=null?p[Se]:void 0,u.hasOwnProperty(Se)&&Z!==H&&(Z!=null||H!=null))if(Se==="style")if(H){for(A in H)!H.hasOwnProperty(A)||Z&&Z.hasOwnProperty(A)||(l||(l={}),l[A]="");for(A in Z)Z.hasOwnProperty(A)&&H[A]!==Z[A]&&(l||(l={}),l[A]=Z[A])}else l||(_||(_=[]),_.push(Se,l)),l=Z;else Se==="dangerouslySetInnerHTML"?(Z=Z?Z.__html:void 0,H=H?H.__html:void 0,Z!=null&&H!==Z&&(_=_||[]).push(Se,Z)):Se==="children"?typeof Z!="string"&&typeof Z!="number"||(_=_||[]).push(Se,""+Z):Se!=="suppressContentEditableWarning"&&Se!=="suppressHydrationWarning"&&(a.hasOwnProperty(Se)?(Z!=null&&Se==="onScroll"&&fn("scroll",n),_||H===Z||(_=[])):(_=_||[]).push(Se,Z))}l&&(_=_||[]).push("style",l);var Se=_;(s.updateQueue=Se)&&(s.flags|=4)}},rg=function(n,s,l,u){l!==u&&(s.flags|=4)};function Eo(n,s){if(!vn)switch(n.tailMode){case"hidden":s=n.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var u=null;l!==null;)l.alternate!==null&&(u=l),l=l.sibling;u===null?s||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Kn(n){var s=n.alternate!==null&&n.alternate.child===n.child,l=0,u=0;if(s)for(var p=n.child;p!==null;)l|=p.lanes|p.childLanes,u|=p.subtreeFlags&14680064,u|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)l|=p.lanes|p.childLanes,u|=p.subtreeFlags,u|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=u,n.childLanes=l,s}function K_(n,s,l){var u=s.pendingProps;switch(Gu(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kn(s),null;case 1:return ci(s.type)&&Sl(),Kn(s),null;case 3:return u=s.stateNode,ca(),hn(li),hn(qn),nd(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(bl(s)?s.flags|=4:n===null||n.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Di!==null&&(Nd(Di),Di=null))),Sd(n,s),Kn(s),null;case 5:ed(s);var p=ws(xo.current);if(l=s.type,n!==null&&s.stateNode!=null)ig(n,s,l,u,p),n.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!u){if(s.stateNode===null)throw Error(t(166));return Kn(s),null}if(n=ws(Yi.current),bl(s)){u=s.stateNode,l=s.type;var _=s.memoizedProps;switch(u[ji]=s,u[ho]=_,n=(s.mode&1)!==0,l){case"dialog":fn("cancel",u),fn("close",u);break;case"iframe":case"object":case"embed":fn("load",u);break;case"video":case"audio":for(p=0;p<co.length;p++)fn(co[p],u);break;case"source":fn("error",u);break;case"img":case"image":case"link":fn("error",u),fn("load",u);break;case"details":fn("toggle",u);break;case"input":Le(u,_),fn("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!_.multiple},fn("invalid",u);break;case"textarea":X(u,_),fn("invalid",u)}Ee(l,_),p=null;for(var A in _)if(_.hasOwnProperty(A)){var H=_[A];A==="children"?typeof H=="string"?u.textContent!==H&&(_.suppressHydrationWarning!==!0&&xl(u.textContent,H,n),p=["children",H]):typeof H=="number"&&u.textContent!==""+H&&(_.suppressHydrationWarning!==!0&&xl(u.textContent,H,n),p=["children",""+H]):a.hasOwnProperty(A)&&H!=null&&A==="onScroll"&&fn("scroll",u)}switch(l){case"input":et(u),je(u,_,!0);break;case"textarea":et(u),Dt(u);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(u.onclick=_l)}u=p,s.updateQueue=u,u!==null&&(s.flags|=4)}else{A=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=F(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=A.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=A.createElement(l,{is:u.is}):(n=A.createElement(l),l==="select"&&(A=n,u.multiple?A.multiple=!0:u.size&&(A.size=u.size))):n=A.createElementNS(n,l),n[ji]=s,n[ho]=u,ng(n,s,!1,!1),s.stateNode=n;e:{switch(A=Ce(l,u),l){case"dialog":fn("cancel",n),fn("close",n),p=u;break;case"iframe":case"object":case"embed":fn("load",n),p=u;break;case"video":case"audio":for(p=0;p<co.length;p++)fn(co[p],n);p=u;break;case"source":fn("error",n),p=u;break;case"img":case"image":case"link":fn("error",n),fn("load",n),p=u;break;case"details":fn("toggle",n),p=u;break;case"input":Le(n,u),p=we(n,u),fn("invalid",n);break;case"option":p=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},p=ee({},u,{value:void 0}),fn("invalid",n);break;case"textarea":X(n,u),p=Et(n,u),fn("invalid",n);break;default:p=u}Ee(l,p),H=p;for(_ in H)if(H.hasOwnProperty(_)){var Z=H[_];_==="style"?V(n,Z):_==="dangerouslySetInnerHTML"?(Z=Z?Z.__html:void 0,Z!=null&&ue(n,Z)):_==="children"?typeof Z=="string"?(l!=="textarea"||Z!=="")&&Me(n,Z):typeof Z=="number"&&Me(n,""+Z):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(a.hasOwnProperty(_)?Z!=null&&_==="onScroll"&&fn("scroll",n):Z!=null&&P(n,_,Z,A))}switch(l){case"input":et(n),je(n,u,!1);break;case"textarea":et(n),Dt(n);break;case"option":u.value!=null&&n.setAttribute("value",""+ge(u.value));break;case"select":n.multiple=!!u.multiple,_=u.value,_!=null?_t(n,!!u.multiple,_,!1):u.defaultValue!=null&&_t(n,!!u.multiple,u.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=_l)}switch(l){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Kn(s),null;case 6:if(n&&s.stateNode!=null)rg(n,s,n.memoizedProps,u);else{if(typeof u!="string"&&s.stateNode===null)throw Error(t(166));if(l=ws(xo.current),ws(Yi.current),bl(s)){if(u=s.stateNode,l=s.memoizedProps,u[ji]=s,(_=u.nodeValue!==l)&&(n=gi,n!==null))switch(n.tag){case 3:xl(u.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&xl(u.nodeValue,l,(n.mode&1)!==0)}_&&(s.flags|=4)}else u=(l.nodeType===9?l:l.ownerDocument).createTextNode(u),u[ji]=s,s.stateNode=u}return Kn(s),null;case 13:if(hn(xn),u=s.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(vn&&vi!==null&&(s.mode&1)!==0&&(s.flags&128)===0)om(),sa(),s.flags|=98560,_=!1;else if(_=bl(s),u!==null&&u.dehydrated!==null){if(n===null){if(!_)throw Error(t(318));if(_=s.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[ji]=s}else sa(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Kn(s),_=!1}else Di!==null&&(Nd(Di),Di=null),_=!0;if(!_)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(s.child.flags|=8192,(s.mode&1)!==0&&(n===null||(xn.current&1)!==0?Nn===0&&(Nn=3):Ud())),s.updateQueue!==null&&(s.flags|=4),Kn(s),null);case 4:return ca(),Sd(n,s),n===null&&uo(s.stateNode.containerInfo),Kn(s),null;case 10:return qu(s.type._context),Kn(s),null;case 17:return ci(s.type)&&Sl(),Kn(s),null;case 19:if(hn(xn),_=s.memoizedState,_===null)return Kn(s),null;if(u=(s.flags&128)!==0,A=_.rendering,A===null)if(u)Eo(_,!1);else{if(Nn!==0||n!==null&&(n.flags&128)!==0)for(n=s.child;n!==null;){if(A=Nl(n),A!==null){for(s.flags|=128,Eo(_,!1),u=A.updateQueue,u!==null&&(s.updateQueue=u,s.flags|=4),s.subtreeFlags=0,u=l,l=s.child;l!==null;)_=l,n=u,_.flags&=14680066,A=_.alternate,A===null?(_.childLanes=0,_.lanes=n,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=A.childLanes,_.lanes=A.lanes,_.child=A.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=A.memoizedProps,_.memoizedState=A.memoizedState,_.updateQueue=A.updateQueue,_.type=A.type,n=A.dependencies,_.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return ln(xn,xn.current&1|2),s.child}n=n.sibling}_.tail!==null&&$t()>ha&&(s.flags|=128,u=!0,Eo(_,!1),s.lanes=4194304)}else{if(!u)if(n=Nl(A),n!==null){if(s.flags|=128,u=!0,l=n.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),Eo(_,!0),_.tail===null&&_.tailMode==="hidden"&&!A.alternate&&!vn)return Kn(s),null}else 2*$t()-_.renderingStartTime>ha&&l!==1073741824&&(s.flags|=128,u=!0,Eo(_,!1),s.lanes=4194304);_.isBackwards?(A.sibling=s.child,s.child=A):(l=_.last,l!==null?l.sibling=A:s.child=A,_.last=A)}return _.tail!==null?(s=_.tail,_.rendering=s,_.tail=s.sibling,_.renderingStartTime=$t(),s.sibling=null,l=xn.current,ln(xn,u?l&1|2:l&1),s):(Kn(s),null);case 22:case 23:return Id(),u=s.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(s.flags|=8192),u&&(s.mode&1)!==0?(xi&1073741824)!==0&&(Kn(s),s.subtreeFlags&6&&(s.flags|=8192)):Kn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function J_(n,s){switch(Gu(s),s.tag){case 1:return ci(s.type)&&Sl(),n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 3:return ca(),hn(li),hn(qn),nd(),n=s.flags,(n&65536)!==0&&(n&128)===0?(s.flags=n&-65537|128,s):null;case 5:return ed(s),null;case 13:if(hn(xn),n=s.memoizedState,n!==null&&n.dehydrated!==null){if(s.alternate===null)throw Error(t(340));sa()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 19:return hn(xn),null;case 4:return ca(),null;case 10:return qu(s.type._context),null;case 22:case 23:return Id(),null;case 24:return null;default:return null}}var Hl=!1,Jn=!1,Q_=typeof WeakSet=="function"?WeakSet:Set,lt=null;function da(n,s){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(u){Mn(n,s,u)}else l.current=null}function Md(n,s,l){try{l()}catch(u){Mn(n,s,u)}}var sg=!1;function ey(n,s){if(Iu=ol,n=Op(),bu(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var u=l.getSelection&&l.getSelection();if(u&&u.rangeCount!==0){l=u.anchorNode;var p=u.anchorOffset,_=u.focusNode;u=u.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var A=0,H=-1,Z=-1,Se=0,Fe=0,He=n,Ue=null;t:for(;;){for(var at;He!==l||p!==0&&He.nodeType!==3||(H=A+p),He!==_||u!==0&&He.nodeType!==3||(Z=A+u),He.nodeType===3&&(A+=He.nodeValue.length),(at=He.firstChild)!==null;)Ue=He,He=at;for(;;){if(He===n)break t;if(Ue===l&&++Se===p&&(H=A),Ue===_&&++Fe===u&&(Z=A),(at=He.nextSibling)!==null)break;He=Ue,Ue=He.parentNode}He=at}l=H===-1||Z===-1?null:{start:H,end:Z}}else l=null}l=l||{start:0,end:0}}else l=null;for(Uu={focusedElem:n,selectionRange:l},ol=!1,lt=s;lt!==null;)if(s=lt,n=s.child,(s.subtreeFlags&1028)!==0&&n!==null)n.return=s,lt=n;else for(;lt!==null;){s=lt;try{var ht=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ht!==null){var mt=ht.memoizedProps,bn=ht.memoizedState,fe=s.stateNode,ne=fe.getSnapshotBeforeUpdate(s.elementType===s.type?mt:Ii(s.type,mt),bn);fe.__reactInternalSnapshotBeforeUpdate=ne}break;case 3:var me=s.stateNode.containerInfo;me.nodeType===1?me.textContent="":me.nodeType===9&&me.documentElement&&me.removeChild(me.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Xe){Mn(s,s.return,Xe)}if(n=s.sibling,n!==null){n.return=s.return,lt=n;break}lt=s.return}return ht=sg,sg=!1,ht}function wo(n,s,l){var u=s.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var p=u=u.next;do{if((p.tag&n)===n){var _=p.destroy;p.destroy=void 0,_!==void 0&&Md(s,l,_)}p=p.next}while(p!==u)}}function Vl(n,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&n)===n){var u=l.create;l.destroy=u()}l=l.next}while(l!==s)}}function Ed(n){var s=n.ref;if(s!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof s=="function"?s(n):s.current=n}}function ag(n){var s=n.alternate;s!==null&&(n.alternate=null,ag(s)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(s=n.stateNode,s!==null&&(delete s[ji],delete s[ho],delete s[ku],delete s[F_],delete s[O_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function og(n){return n.tag===5||n.tag===3||n.tag===4}function lg(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||og(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function wd(n,s,l){var u=n.tag;if(u===5||u===6)n=n.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(n,s):l.insertBefore(n,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(n,l)):(s=l,s.appendChild(n)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=_l));else if(u!==4&&(n=n.child,n!==null))for(wd(n,s,l),n=n.sibling;n!==null;)wd(n,s,l),n=n.sibling}function Td(n,s,l){var u=n.tag;if(u===5||u===6)n=n.stateNode,s?l.insertBefore(n,s):l.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Td(n,s,l),n=n.sibling;n!==null;)Td(n,s,l),n=n.sibling}var Wn=null,Ui=!1;function Zr(n,s,l){for(l=l.child;l!==null;)cg(n,s,l),l=l.sibling}function cg(n,s,l){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(pe,l)}catch{}switch(l.tag){case 5:Jn||da(l,s);case 6:var u=Wn,p=Ui;Wn=null,Zr(n,s,l),Wn=u,Ui=p,Wn!==null&&(Ui?(n=Wn,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):Wn.removeChild(l.stateNode));break;case 18:Wn!==null&&(Ui?(n=Wn,l=l.stateNode,n.nodeType===8?zu(n.parentNode,l):n.nodeType===1&&zu(n,l),to(n)):zu(Wn,l.stateNode));break;case 4:u=Wn,p=Ui,Wn=l.stateNode.containerInfo,Ui=!0,Zr(n,s,l),Wn=u,Ui=p;break;case 0:case 11:case 14:case 15:if(!Jn&&(u=l.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){p=u=u.next;do{var _=p,A=_.destroy;_=_.tag,A!==void 0&&((_&2)!==0||(_&4)!==0)&&Md(l,s,A),p=p.next}while(p!==u)}Zr(n,s,l);break;case 1:if(!Jn&&(da(l,s),u=l.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=l.memoizedProps,u.state=l.memoizedState,u.componentWillUnmount()}catch(H){Mn(l,s,H)}Zr(n,s,l);break;case 21:Zr(n,s,l);break;case 22:l.mode&1?(Jn=(u=Jn)||l.memoizedState!==null,Zr(n,s,l),Jn=u):Zr(n,s,l);break;default:Zr(n,s,l)}}function ug(n){var s=n.updateQueue;if(s!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new Q_),s.forEach(function(u){var p=cy.bind(null,n,u);l.has(u)||(l.add(u),u.then(p,p))})}}function Fi(n,s){var l=s.deletions;if(l!==null)for(var u=0;u<l.length;u++){var p=l[u];try{var _=n,A=s,H=A;e:for(;H!==null;){switch(H.tag){case 5:Wn=H.stateNode,Ui=!1;break e;case 3:Wn=H.stateNode.containerInfo,Ui=!0;break e;case 4:Wn=H.stateNode.containerInfo,Ui=!0;break e}H=H.return}if(Wn===null)throw Error(t(160));cg(_,A,p),Wn=null,Ui=!1;var Z=p.alternate;Z!==null&&(Z.return=null),p.return=null}catch(Se){Mn(p,s,Se)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)dg(s,n),s=s.sibling}function dg(n,s){var l=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Fi(s,n),Zi(n),u&4){try{wo(3,n,n.return),Vl(3,n)}catch(mt){Mn(n,n.return,mt)}try{wo(5,n,n.return)}catch(mt){Mn(n,n.return,mt)}}break;case 1:Fi(s,n),Zi(n),u&512&&l!==null&&da(l,l.return);break;case 5:if(Fi(s,n),Zi(n),u&512&&l!==null&&da(l,l.return),n.flags&32){var p=n.stateNode;try{Me(p,"")}catch(mt){Mn(n,n.return,mt)}}if(u&4&&(p=n.stateNode,p!=null)){var _=n.memoizedProps,A=l!==null?l.memoizedProps:_,H=n.type,Z=n.updateQueue;if(n.updateQueue=null,Z!==null)try{H==="input"&&_.type==="radio"&&_.name!=null&&De(p,_),Ce(H,A);var Se=Ce(H,_);for(A=0;A<Z.length;A+=2){var Fe=Z[A],He=Z[A+1];Fe==="style"?V(p,He):Fe==="dangerouslySetInnerHTML"?ue(p,He):Fe==="children"?Me(p,He):P(p,Fe,He,Se)}switch(H){case"input":Qe(p,_);break;case"textarea":Bt(p,_);break;case"select":var Ue=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var at=_.value;at!=null?_t(p,!!_.multiple,at,!1):Ue!==!!_.multiple&&(_.defaultValue!=null?_t(p,!!_.multiple,_.defaultValue,!0):_t(p,!!_.multiple,_.multiple?[]:"",!1))}p[ho]=_}catch(mt){Mn(n,n.return,mt)}}break;case 6:if(Fi(s,n),Zi(n),u&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,_=n.memoizedProps;try{p.nodeValue=_}catch(mt){Mn(n,n.return,mt)}}break;case 3:if(Fi(s,n),Zi(n),u&4&&l!==null&&l.memoizedState.isDehydrated)try{to(s.containerInfo)}catch(mt){Mn(n,n.return,mt)}break;case 4:Fi(s,n),Zi(n);break;case 13:Fi(s,n),Zi(n),p=n.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(Cd=$t())),u&4&&ug(n);break;case 22:if(Fe=l!==null&&l.memoizedState!==null,n.mode&1?(Jn=(Se=Jn)||Fe,Fi(s,n),Jn=Se):Fi(s,n),Zi(n),u&8192){if(Se=n.memoizedState!==null,(n.stateNode.isHidden=Se)&&!Fe&&(n.mode&1)!==0)for(lt=n,Fe=n.child;Fe!==null;){for(He=lt=Fe;lt!==null;){switch(Ue=lt,at=Ue.child,Ue.tag){case 0:case 11:case 14:case 15:wo(4,Ue,Ue.return);break;case 1:da(Ue,Ue.return);var ht=Ue.stateNode;if(typeof ht.componentWillUnmount=="function"){u=Ue,l=Ue.return;try{s=u,ht.props=s.memoizedProps,ht.state=s.memoizedState,ht.componentWillUnmount()}catch(mt){Mn(u,l,mt)}}break;case 5:da(Ue,Ue.return);break;case 22:if(Ue.memoizedState!==null){pg(He);continue}}at!==null?(at.return=Ue,lt=at):pg(He)}Fe=Fe.sibling}e:for(Fe=null,He=n;;){if(He.tag===5){if(Fe===null){Fe=He;try{p=He.stateNode,Se?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(H=He.stateNode,Z=He.memoizedProps.style,A=Z!=null&&Z.hasOwnProperty("display")?Z.display:null,H.style.display=U("display",A))}catch(mt){Mn(n,n.return,mt)}}}else if(He.tag===6){if(Fe===null)try{He.stateNode.nodeValue=Se?"":He.memoizedProps}catch(mt){Mn(n,n.return,mt)}}else if((He.tag!==22&&He.tag!==23||He.memoizedState===null||He===n)&&He.child!==null){He.child.return=He,He=He.child;continue}if(He===n)break e;for(;He.sibling===null;){if(He.return===null||He.return===n)break e;Fe===He&&(Fe=null),He=He.return}Fe===He&&(Fe=null),He.sibling.return=He.return,He=He.sibling}}break;case 19:Fi(s,n),Zi(n),u&4&&ug(n);break;case 21:break;default:Fi(s,n),Zi(n)}}function Zi(n){var s=n.flags;if(s&2){try{e:{for(var l=n.return;l!==null;){if(og(l)){var u=l;break e}l=l.return}throw Error(t(160))}switch(u.tag){case 5:var p=u.stateNode;u.flags&32&&(Me(p,""),u.flags&=-33);var _=lg(n);Td(n,_,p);break;case 3:case 4:var A=u.stateNode.containerInfo,H=lg(n);wd(n,H,A);break;default:throw Error(t(161))}}catch(Z){Mn(n,n.return,Z)}n.flags&=-3}s&4096&&(n.flags&=-4097)}function ty(n,s,l){lt=n,fg(n)}function fg(n,s,l){for(var u=(n.mode&1)!==0;lt!==null;){var p=lt,_=p.child;if(p.tag===22&&u){var A=p.memoizedState!==null||Hl;if(!A){var H=p.alternate,Z=H!==null&&H.memoizedState!==null||Jn;H=Hl;var Se=Jn;if(Hl=A,(Jn=Z)&&!Se)for(lt=p;lt!==null;)A=lt,Z=A.child,A.tag===22&&A.memoizedState!==null?mg(p):Z!==null?(Z.return=A,lt=Z):mg(p);for(;_!==null;)lt=_,fg(_),_=_.sibling;lt=p,Hl=H,Jn=Se}hg(n)}else(p.subtreeFlags&8772)!==0&&_!==null?(_.return=p,lt=_):hg(n)}}function hg(n){for(;lt!==null;){var s=lt;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Jn||Vl(5,s);break;case 1:var u=s.stateNode;if(s.flags&4&&!Jn)if(l===null)u.componentDidMount();else{var p=s.elementType===s.type?l.memoizedProps:Ii(s.type,l.memoizedProps);u.componentDidUpdate(p,l.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var _=s.updateQueue;_!==null&&pm(s,_,u);break;case 3:var A=s.updateQueue;if(A!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}pm(s,A,l)}break;case 5:var H=s.stateNode;if(l===null&&s.flags&4){l=H;var Z=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":Z.autoFocus&&l.focus();break;case"img":Z.src&&(l.src=Z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var Se=s.alternate;if(Se!==null){var Fe=Se.memoizedState;if(Fe!==null){var He=Fe.dehydrated;He!==null&&to(He)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Jn||s.flags&512&&Ed(s)}catch(Ue){Mn(s,s.return,Ue)}}if(s===n){lt=null;break}if(l=s.sibling,l!==null){l.return=s.return,lt=l;break}lt=s.return}}function pg(n){for(;lt!==null;){var s=lt;if(s===n){lt=null;break}var l=s.sibling;if(l!==null){l.return=s.return,lt=l;break}lt=s.return}}function mg(n){for(;lt!==null;){var s=lt;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{Vl(4,s)}catch(Z){Mn(s,l,Z)}break;case 1:var u=s.stateNode;if(typeof u.componentDidMount=="function"){var p=s.return;try{u.componentDidMount()}catch(Z){Mn(s,p,Z)}}var _=s.return;try{Ed(s)}catch(Z){Mn(s,_,Z)}break;case 5:var A=s.return;try{Ed(s)}catch(Z){Mn(s,A,Z)}}}catch(Z){Mn(s,s.return,Z)}if(s===n){lt=null;break}var H=s.sibling;if(H!==null){H.return=s.return,lt=H;break}lt=s.return}}var ny=Math.ceil,Gl=T.ReactCurrentDispatcher,bd=T.ReactCurrentOwner,Ai=T.ReactCurrentBatchConfig,Yt=0,zn=null,Cn=null,Xn=0,xi=0,fa=Xr(0),Nn=0,To=null,bs=0,Wl=0,Ad=0,bo=null,di=null,Cd=0,ha=1/0,yr=null,Xl=!1,Rd=null,Kr=null,$l=!1,Jr=null,jl=0,Ao=0,Pd=null,Yl=-1,ql=0;function ri(){return(Yt&6)!==0?$t():Yl!==-1?Yl:Yl=$t()}function Qr(n){return(n.mode&1)===0?1:(Yt&2)!==0&&Xn!==0?Xn&-Xn:k_.transition!==null?(ql===0&&(ql=Je()),ql):(n=Tt,n!==0||(n=window.event,n=n===void 0?16:vp(n.type)),n)}function Oi(n,s,l,u){if(50<Ao)throw Ao=0,Pd=null,Error(t(185));yt(n,l,u),((Yt&2)===0||n!==zn)&&(n===zn&&((Yt&2)===0&&(Wl|=l),Nn===4&&es(n,Xn)),fi(n,u),l===1&&Yt===0&&(s.mode&1)===0&&(ha=$t()+500,El&&jr()))}function fi(n,s){var l=n.callbackNode;Ze(n,s);var u=Qt(n,n===zn?Xn:0);if(u===0)l!==null&&Kt(l),n.callbackNode=null,n.callbackPriority=0;else if(s=u&-u,n.callbackPriority!==s){if(l!=null&&Kt(l),s===1)n.tag===0?z_(vg.bind(null,n)):nm(vg.bind(null,n)),I_(function(){(Yt&6)===0&&jr()}),l=null;else{switch(Fn(u)){case 1:l=Or;break;case 4:l=C;break;case 16:l=te;break;case 536870912:l=he;break;default:l=te}l=Tg(l,gg.bind(null,n))}n.callbackPriority=s,n.callbackNode=l}}function gg(n,s){if(Yl=-1,ql=0,(Yt&6)!==0)throw Error(t(327));var l=n.callbackNode;if(pa()&&n.callbackNode!==l)return null;var u=Qt(n,n===zn?Xn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||s)s=Zl(n,u);else{s=u;var p=Yt;Yt|=2;var _=_g();(zn!==n||Xn!==s)&&(yr=null,ha=$t()+500,Cs(n,s));do try{sy();break}catch(H){xg(n,H)}while(!0);Yu(),Gl.current=_,Yt=p,Cn!==null?s=0:(zn=null,Xn=0,s=Nn)}if(s!==0){if(s===2&&(p=Rt(n),p!==0&&(u=p,s=Ld(n,p))),s===1)throw l=To,Cs(n,0),es(n,u),fi(n,$t()),l;if(s===6)es(n,u);else{if(p=n.current.alternate,(u&30)===0&&!iy(p)&&(s=Zl(n,u),s===2&&(_=Rt(n),_!==0&&(u=_,s=Ld(n,_))),s===1))throw l=To,Cs(n,0),es(n,u),fi(n,$t()),l;switch(n.finishedWork=p,n.finishedLanes=u,s){case 0:case 1:throw Error(t(345));case 2:Rs(n,di,yr);break;case 3:if(es(n,u),(u&130023424)===u&&(s=Cd+500-$t(),10<s)){if(Qt(n,0)!==0)break;if(p=n.suspendedLanes,(p&u)!==u){ri(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=Ou(Rs.bind(null,n,di,yr),s);break}Rs(n,di,yr);break;case 4:if(es(n,u),(u&4194240)===u)break;for(s=n.eventTimes,p=-1;0<u;){var A=31-We(u);_=1<<A,A=s[A],A>p&&(p=A),u&=~_}if(u=p,u=$t()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*ny(u/1960))-u,10<u){n.timeoutHandle=Ou(Rs.bind(null,n,di,yr),u);break}Rs(n,di,yr);break;case 5:Rs(n,di,yr);break;default:throw Error(t(329))}}}return fi(n,$t()),n.callbackNode===l?gg.bind(null,n):null}function Ld(n,s){var l=bo;return n.current.memoizedState.isDehydrated&&(Cs(n,s).flags|=256),n=Zl(n,s),n!==2&&(s=di,di=l,s!==null&&Nd(s)),n}function Nd(n){di===null?di=n:di.push.apply(di,n)}function iy(n){for(var s=n;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var u=0;u<l.length;u++){var p=l[u],_=p.getSnapshot;p=p.value;try{if(!Ni(_(),p))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function es(n,s){for(s&=~Ad,s&=~Wl,n.suspendedLanes|=s,n.pingedLanes&=~s,n=n.expirationTimes;0<s;){var l=31-We(s),u=1<<l;n[l]=-1,s&=~u}}function vg(n){if((Yt&6)!==0)throw Error(t(327));pa();var s=Qt(n,0);if((s&1)===0)return fi(n,$t()),null;var l=Zl(n,s);if(n.tag!==0&&l===2){var u=Rt(n);u!==0&&(s=u,l=Ld(n,u))}if(l===1)throw l=To,Cs(n,0),es(n,s),fi(n,$t()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=s,Rs(n,di,yr),fi(n,$t()),null}function Dd(n,s){var l=Yt;Yt|=1;try{return n(s)}finally{Yt=l,Yt===0&&(ha=$t()+500,El&&jr())}}function As(n){Jr!==null&&Jr.tag===0&&(Yt&6)===0&&pa();var s=Yt;Yt|=1;var l=Ai.transition,u=Tt;try{if(Ai.transition=null,Tt=1,n)return n()}finally{Tt=u,Ai.transition=l,Yt=s,(Yt&6)===0&&jr()}}function Id(){xi=fa.current,hn(fa)}function Cs(n,s){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,D_(l)),Cn!==null)for(l=Cn.return;l!==null;){var u=l;switch(Gu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Sl();break;case 3:ca(),hn(li),hn(qn),nd();break;case 5:ed(u);break;case 4:ca();break;case 13:hn(xn);break;case 19:hn(xn);break;case 10:qu(u.type._context);break;case 22:case 23:Id()}l=l.return}if(zn=n,Cn=n=ts(n.current,null),Xn=xi=s,Nn=0,To=null,Ad=Wl=bs=0,di=bo=null,Es!==null){for(s=0;s<Es.length;s++)if(l=Es[s],u=l.interleaved,u!==null){l.interleaved=null;var p=u.next,_=l.pending;if(_!==null){var A=_.next;_.next=p,u.next=A}l.pending=u}Es=null}return n}function xg(n,s){do{var l=Cn;try{if(Yu(),Dl.current=Ol,Il){for(var u=_n.memoizedState;u!==null;){var p=u.queue;p!==null&&(p.pending=null),u=u.next}Il=!1}if(Ts=0,On=Ln=_n=null,_o=!1,yo=0,bd.current=null,l===null||l.return===null){Nn=1,To=s,Cn=null;break}e:{var _=n,A=l.return,H=l,Z=s;if(s=Xn,H.flags|=32768,Z!==null&&typeof Z=="object"&&typeof Z.then=="function"){var Se=Z,Fe=H,He=Fe.tag;if((Fe.mode&1)===0&&(He===0||He===11||He===15)){var Ue=Fe.alternate;Ue?(Fe.updateQueue=Ue.updateQueue,Fe.memoizedState=Ue.memoizedState,Fe.lanes=Ue.lanes):(Fe.updateQueue=null,Fe.memoizedState=null)}var at=Gm(A);if(at!==null){at.flags&=-257,Wm(at,A,H,_,s),at.mode&1&&Vm(_,Se,s),s=at,Z=Se;var ht=s.updateQueue;if(ht===null){var mt=new Set;mt.add(Z),s.updateQueue=mt}else ht.add(Z);break e}else{if((s&1)===0){Vm(_,Se,s),Ud();break e}Z=Error(t(426))}}else if(vn&&H.mode&1){var bn=Gm(A);if(bn!==null){(bn.flags&65536)===0&&(bn.flags|=256),Wm(bn,A,H,_,s),$u(ua(Z,H));break e}}_=Z=ua(Z,H),Nn!==4&&(Nn=2),bo===null?bo=[_]:bo.push(_),_=A;do{switch(_.tag){case 3:_.flags|=65536,s&=-s,_.lanes|=s;var fe=Bm(_,Z,s);hm(_,fe);break e;case 1:H=Z;var ne=_.type,me=_.stateNode;if((_.flags&128)===0&&(typeof ne.getDerivedStateFromError=="function"||me!==null&&typeof me.componentDidCatch=="function"&&(Kr===null||!Kr.has(me)))){_.flags|=65536,s&=-s,_.lanes|=s;var Xe=Hm(_,H,s);hm(_,Xe);break e}}_=_.return}while(_!==null)}Sg(l)}catch(xt){s=xt,Cn===l&&l!==null&&(Cn=l=l.return);continue}break}while(!0)}function _g(){var n=Gl.current;return Gl.current=Ol,n===null?Ol:n}function Ud(){(Nn===0||Nn===3||Nn===2)&&(Nn=4),zn===null||(bs&268435455)===0&&(Wl&268435455)===0||es(zn,Xn)}function Zl(n,s){var l=Yt;Yt|=2;var u=_g();(zn!==n||Xn!==s)&&(yr=null,Cs(n,s));do try{ry();break}catch(p){xg(n,p)}while(!0);if(Yu(),Yt=l,Gl.current=u,Cn!==null)throw Error(t(261));return zn=null,Xn=0,Nn}function ry(){for(;Cn!==null;)yg(Cn)}function sy(){for(;Cn!==null&&!mn();)yg(Cn)}function yg(n){var s=wg(n.alternate,n,xi);n.memoizedProps=n.pendingProps,s===null?Sg(n):Cn=s,bd.current=null}function Sg(n){var s=n;do{var l=s.alternate;if(n=s.return,(s.flags&32768)===0){if(l=K_(l,s,xi),l!==null){Cn=l;return}}else{if(l=J_(l,s),l!==null){l.flags&=32767,Cn=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Nn=6,Cn=null;return}}if(s=s.sibling,s!==null){Cn=s;return}Cn=s=n}while(s!==null);Nn===0&&(Nn=5)}function Rs(n,s,l){var u=Tt,p=Ai.transition;try{Ai.transition=null,Tt=1,ay(n,s,l,u)}finally{Ai.transition=p,Tt=u}return null}function ay(n,s,l,u){do pa();while(Jr!==null);if((Yt&6)!==0)throw Error(t(327));l=n.finishedWork;var p=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var _=l.lanes|l.childLanes;if(St(n,_),n===zn&&(Cn=zn=null,Xn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||$l||($l=!0,Tg(te,function(){return pa(),null})),_=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||_){_=Ai.transition,Ai.transition=null;var A=Tt;Tt=1;var H=Yt;Yt|=4,bd.current=null,ey(n,l),dg(l,n),b_(Uu),ol=!!Iu,Uu=Iu=null,n.current=l,ty(l),An(),Yt=H,Tt=A,Ai.transition=_}else n.current=l;if($l&&($l=!1,Jr=n,jl=p),_=n.pendingLanes,_===0&&(Kr=null),rt(l.stateNode),fi(n,$t()),s!==null)for(u=n.onRecoverableError,l=0;l<s.length;l++)p=s[l],u(p.value,{componentStack:p.stack,digest:p.digest});if(Xl)throw Xl=!1,n=Rd,Rd=null,n;return(jl&1)!==0&&n.tag!==0&&pa(),_=n.pendingLanes,(_&1)!==0?n===Pd?Ao++:(Ao=0,Pd=n):Ao=0,jr(),null}function pa(){if(Jr!==null){var n=Fn(jl),s=Ai.transition,l=Tt;try{if(Ai.transition=null,Tt=16>n?16:n,Jr===null)var u=!1;else{if(n=Jr,Jr=null,jl=0,(Yt&6)!==0)throw Error(t(331));var p=Yt;for(Yt|=4,lt=n.current;lt!==null;){var _=lt,A=_.child;if((lt.flags&16)!==0){var H=_.deletions;if(H!==null){for(var Z=0;Z<H.length;Z++){var Se=H[Z];for(lt=Se;lt!==null;){var Fe=lt;switch(Fe.tag){case 0:case 11:case 15:wo(8,Fe,_)}var He=Fe.child;if(He!==null)He.return=Fe,lt=He;else for(;lt!==null;){Fe=lt;var Ue=Fe.sibling,at=Fe.return;if(ag(Fe),Fe===Se){lt=null;break}if(Ue!==null){Ue.return=at,lt=Ue;break}lt=at}}}var ht=_.alternate;if(ht!==null){var mt=ht.child;if(mt!==null){ht.child=null;do{var bn=mt.sibling;mt.sibling=null,mt=bn}while(mt!==null)}}lt=_}}if((_.subtreeFlags&2064)!==0&&A!==null)A.return=_,lt=A;else e:for(;lt!==null;){if(_=lt,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:wo(9,_,_.return)}var fe=_.sibling;if(fe!==null){fe.return=_.return,lt=fe;break e}lt=_.return}}var ne=n.current;for(lt=ne;lt!==null;){A=lt;var me=A.child;if((A.subtreeFlags&2064)!==0&&me!==null)me.return=A,lt=me;else e:for(A=ne;lt!==null;){if(H=lt,(H.flags&2048)!==0)try{switch(H.tag){case 0:case 11:case 15:Vl(9,H)}}catch(xt){Mn(H,H.return,xt)}if(H===A){lt=null;break e}var Xe=H.sibling;if(Xe!==null){Xe.return=H.return,lt=Xe;break e}lt=H.return}}if(Yt=p,jr(),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(pe,n)}catch{}u=!0}return u}finally{Tt=l,Ai.transition=s}}return!1}function Mg(n,s,l){s=ua(l,s),s=Bm(n,s,1),n=qr(n,s,1),s=ri(),n!==null&&(yt(n,1,s),fi(n,s))}function Mn(n,s,l){if(n.tag===3)Mg(n,n,l);else for(;s!==null;){if(s.tag===3){Mg(s,n,l);break}else if(s.tag===1){var u=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Kr===null||!Kr.has(u))){n=ua(l,n),n=Hm(s,n,1),s=qr(s,n,1),n=ri(),s!==null&&(yt(s,1,n),fi(s,n));break}}s=s.return}}function oy(n,s,l){var u=n.pingCache;u!==null&&u.delete(s),s=ri(),n.pingedLanes|=n.suspendedLanes&l,zn===n&&(Xn&l)===l&&(Nn===4||Nn===3&&(Xn&130023424)===Xn&&500>$t()-Cd?Cs(n,0):Ad|=l),fi(n,s)}function Eg(n,s){s===0&&((n.mode&1)===0?s=1:(s=pt,pt<<=1,(pt&130023424)===0&&(pt=4194304)));var l=ri();n=vr(n,s),n!==null&&(yt(n,s,l),fi(n,l))}function ly(n){var s=n.memoizedState,l=0;s!==null&&(l=s.retryLane),Eg(n,l)}function cy(n,s){var l=0;switch(n.tag){case 13:var u=n.stateNode,p=n.memoizedState;p!==null&&(l=p.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(s),Eg(n,l)}var wg;wg=function(n,s,l){if(n!==null)if(n.memoizedProps!==s.pendingProps||li.current)ui=!0;else{if((n.lanes&l)===0&&(s.flags&128)===0)return ui=!1,Z_(n,s,l);ui=(n.flags&131072)!==0}else ui=!1,vn&&(s.flags&1048576)!==0&&im(s,Tl,s.index);switch(s.lanes=0,s.tag){case 2:var u=s.type;Bl(n,s),n=s.pendingProps;var p=na(s,qn.current);la(s,l),p=sd(null,s,u,n,p,l);var _=ad();return s.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,ci(u)?(_=!0,Ml(s)):_=!1,s.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Ju(s),p.updater=zl,s.stateNode=p,p._reactInternals=s,fd(s,u,n,l),s=gd(null,s,u,!0,_,l)):(s.tag=0,vn&&_&&Vu(s),ii(null,s,p,l),s=s.child),s;case 16:u=s.elementType;e:{switch(Bl(n,s),n=s.pendingProps,p=u._init,u=p(u._payload),s.type=u,p=s.tag=dy(u),n=Ii(u,n),p){case 0:s=md(null,s,u,n,l);break e;case 1:s=Zm(null,s,u,n,l);break e;case 11:s=Xm(null,s,u,n,l);break e;case 14:s=$m(null,s,u,Ii(u.type,n),l);break e}throw Error(t(306,u,""))}return s;case 0:return u=s.type,p=s.pendingProps,p=s.elementType===u?p:Ii(u,p),md(n,s,u,p,l);case 1:return u=s.type,p=s.pendingProps,p=s.elementType===u?p:Ii(u,p),Zm(n,s,u,p,l);case 3:e:{if(Km(s),n===null)throw Error(t(387));u=s.pendingProps,_=s.memoizedState,p=_.element,fm(n,s),Ll(s,u,null,l);var A=s.memoizedState;if(u=A.element,_.isDehydrated)if(_={element:u,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},s.updateQueue.baseState=_,s.memoizedState=_,s.flags&256){p=ua(Error(t(423)),s),s=Jm(n,s,u,l,p);break e}else if(u!==p){p=ua(Error(t(424)),s),s=Jm(n,s,u,l,p);break e}else for(vi=Wr(s.stateNode.containerInfo.firstChild),gi=s,vn=!0,Di=null,l=um(s,null,u,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(sa(),u===p){s=_r(n,s,l);break e}ii(n,s,u,l)}s=s.child}return s;case 5:return mm(s),n===null&&Xu(s),u=s.type,p=s.pendingProps,_=n!==null?n.memoizedProps:null,A=p.children,Fu(u,p)?A=null:_!==null&&Fu(u,_)&&(s.flags|=32),qm(n,s),ii(n,s,A,l),s.child;case 6:return n===null&&Xu(s),null;case 13:return Qm(n,s,l);case 4:return Qu(s,s.stateNode.containerInfo),u=s.pendingProps,n===null?s.child=aa(s,null,u,l):ii(n,s,u,l),s.child;case 11:return u=s.type,p=s.pendingProps,p=s.elementType===u?p:Ii(u,p),Xm(n,s,u,p,l);case 7:return ii(n,s,s.pendingProps,l),s.child;case 8:return ii(n,s,s.pendingProps.children,l),s.child;case 12:return ii(n,s,s.pendingProps.children,l),s.child;case 10:e:{if(u=s.type._context,p=s.pendingProps,_=s.memoizedProps,A=p.value,ln(Cl,u._currentValue),u._currentValue=A,_!==null)if(Ni(_.value,A)){if(_.children===p.children&&!li.current){s=_r(n,s,l);break e}}else for(_=s.child,_!==null&&(_.return=s);_!==null;){var H=_.dependencies;if(H!==null){A=_.child;for(var Z=H.firstContext;Z!==null;){if(Z.context===u){if(_.tag===1){Z=xr(-1,l&-l),Z.tag=2;var Se=_.updateQueue;if(Se!==null){Se=Se.shared;var Fe=Se.pending;Fe===null?Z.next=Z:(Z.next=Fe.next,Fe.next=Z),Se.pending=Z}}_.lanes|=l,Z=_.alternate,Z!==null&&(Z.lanes|=l),Zu(_.return,l,s),H.lanes|=l;break}Z=Z.next}}else if(_.tag===10)A=_.type===s.type?null:_.child;else if(_.tag===18){if(A=_.return,A===null)throw Error(t(341));A.lanes|=l,H=A.alternate,H!==null&&(H.lanes|=l),Zu(A,l,s),A=_.sibling}else A=_.child;if(A!==null)A.return=_;else for(A=_;A!==null;){if(A===s){A=null;break}if(_=A.sibling,_!==null){_.return=A.return,A=_;break}A=A.return}_=A}ii(n,s,p.children,l),s=s.child}return s;case 9:return p=s.type,u=s.pendingProps.children,la(s,l),p=Ti(p),u=u(p),s.flags|=1,ii(n,s,u,l),s.child;case 14:return u=s.type,p=Ii(u,s.pendingProps),p=Ii(u.type,p),$m(n,s,u,p,l);case 15:return jm(n,s,s.type,s.pendingProps,l);case 17:return u=s.type,p=s.pendingProps,p=s.elementType===u?p:Ii(u,p),Bl(n,s),s.tag=1,ci(u)?(n=!0,Ml(s)):n=!1,la(s,l),zm(s,u,p),fd(s,u,p,l),gd(null,s,u,!0,n,l);case 19:return tg(n,s,l);case 22:return Ym(n,s,l)}throw Error(t(156,s.tag))};function Tg(n,s){return Ft(n,s)}function uy(n,s,l,u){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ci(n,s,l,u){return new uy(n,s,l,u)}function Fd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function dy(n){if(typeof n=="function")return Fd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===j)return 11;if(n===W)return 14}return 2}function ts(n,s){var l=n.alternate;return l===null?(l=Ci(n.tag,s,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=s,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,s=n.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function Kl(n,s,l,u,p,_){var A=2;if(u=n,typeof n=="function")Fd(n)&&(A=1);else if(typeof n=="string")A=5;else e:switch(n){case O:return Ps(l.children,p,_,s);case E:A=8,p|=8;break;case R:return n=Ci(12,l,s,p|2),n.elementType=R,n.lanes=_,n;case G:return n=Ci(13,l,s,p),n.elementType=G,n.lanes=_,n;case de:return n=Ci(19,l,s,p),n.elementType=de,n.lanes=_,n;case Q:return Jl(l,p,_,s);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case z:A=10;break e;case B:A=9;break e;case j:A=11;break e;case W:A=14;break e;case ae:A=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return s=Ci(A,l,s,p),s.elementType=n,s.type=u,s.lanes=_,s}function Ps(n,s,l,u){return n=Ci(7,n,u,s),n.lanes=l,n}function Jl(n,s,l,u){return n=Ci(22,n,u,s),n.elementType=Q,n.lanes=l,n.stateNode={isHidden:!1},n}function Od(n,s,l){return n=Ci(6,n,null,s),n.lanes=l,n}function zd(n,s,l){return s=Ci(4,n.children!==null?n.children:[],n.key,s),s.lanes=l,s.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},s}function fy(n,s,l,u,p){this.tag=s,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gn(0),this.expirationTimes=gn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gn(0),this.identifierPrefix=u,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function kd(n,s,l,u,p,_,A,H,Z){return n=new fy(n,s,l,H,Z),s===1?(s=1,_===!0&&(s|=8)):s=0,_=Ci(3,null,null,s),n.current=_,_.stateNode=n,_.memoizedState={element:u,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ju(_),n}function hy(n,s,l){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:u==null?null:""+u,children:n,containerInfo:s,implementation:l}}function bg(n){if(!n)return $r;n=n._reactInternals;e:{if(ut(n)!==n||n.tag!==1)throw Error(t(170));var s=n;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(ci(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(ci(l))return em(n,l,s)}return s}function Ag(n,s,l,u,p,_,A,H,Z){return n=kd(l,u,!0,n,p,_,A,H,Z),n.context=bg(null),l=n.current,u=ri(),p=Qr(l),_=xr(u,p),_.callback=s??null,qr(l,_,p),n.current.lanes=p,yt(n,p,u),fi(n,u),n}function Ql(n,s,l,u){var p=s.current,_=ri(),A=Qr(p);return l=bg(l),s.context===null?s.context=l:s.pendingContext=l,s=xr(_,A),s.payload={element:n},u=u===void 0?null:u,u!==null&&(s.callback=u),n=qr(p,s,A),n!==null&&(Oi(n,p,A,_),Pl(n,p,A)),A}function ec(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Cg(n,s){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<s?l:s}}function Bd(n,s){Cg(n,s),(n=n.alternate)&&Cg(n,s)}function py(){return null}var Rg=typeof reportError=="function"?reportError:function(n){console.error(n)};function Hd(n){this._internalRoot=n}tc.prototype.render=Hd.prototype.render=function(n){var s=this._internalRoot;if(s===null)throw Error(t(409));Ql(n,s,null,null)},tc.prototype.unmount=Hd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var s=n.containerInfo;As(function(){Ql(null,n,null,null)}),s[hr]=null}};function tc(n){this._internalRoot=n}tc.prototype.unstable_scheduleHydration=function(n){if(n){var s=en();n={blockedOn:null,target:n,priority:s};for(var l=0;l<Hr.length&&s!==0&&s<Hr[l].priority;l++);Hr.splice(l,0,n),l===0&&mp(n)}};function Vd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function nc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Pg(){}function my(n,s,l,u,p){if(p){if(typeof u=="function"){var _=u;u=function(){var Se=ec(A);_.call(Se)}}var A=Ag(s,u,n,0,null,!1,!1,"",Pg);return n._reactRootContainer=A,n[hr]=A.current,uo(n.nodeType===8?n.parentNode:n),As(),A}for(;p=n.lastChild;)n.removeChild(p);if(typeof u=="function"){var H=u;u=function(){var Se=ec(Z);H.call(Se)}}var Z=kd(n,0,!1,null,null,!1,!1,"",Pg);return n._reactRootContainer=Z,n[hr]=Z.current,uo(n.nodeType===8?n.parentNode:n),As(function(){Ql(s,Z,l,u)}),Z}function ic(n,s,l,u,p){var _=l._reactRootContainer;if(_){var A=_;if(typeof p=="function"){var H=p;p=function(){var Z=ec(A);H.call(Z)}}Ql(s,A,n,p)}else A=my(l,s,n,p,u);return ec(A)}qt=function(n){switch(n.tag){case 3:var s=n.stateNode;if(s.current.memoizedState.isDehydrated){var l=Gt(s.pendingLanes);l!==0&&(rn(s,l|1),fi(s,$t()),(Yt&6)===0&&(ha=$t()+500,jr()))}break;case 13:As(function(){var u=vr(n,1);if(u!==null){var p=ri();Oi(u,n,1,p)}}),Bd(n,1)}},dn=function(n){if(n.tag===13){var s=vr(n,134217728);if(s!==null){var l=ri();Oi(s,n,134217728,l)}Bd(n,134217728)}},Pi=function(n){if(n.tag===13){var s=Qr(n),l=vr(n,s);if(l!==null){var u=ri();Oi(l,n,s,u)}Bd(n,s)}},en=function(){return Tt},Li=function(n,s){var l=Tt;try{return Tt=n,s()}finally{Tt=l}},nt=function(n,s,l){switch(s){case"input":if(Qe(n,l),s=l.name,l.type==="radio"&&s!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var u=l[s];if(u!==n&&u.form===n.form){var p=yl(u);if(!p)throw Error(t(90));Mt(u),Qe(u,p)}}}break;case"textarea":Bt(n,l);break;case"select":s=l.value,s!=null&&_t(n,!!l.multiple,s,!1)}},Ye=Dd,Ne=As;var gy={usingClientEntryPoint:!1,Events:[po,ea,yl,Te,Ie,Dd]},Co={findFiberByHostInstance:_s,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vy={bundleType:Co.bundleType,version:Co.version,rendererPackageName:Co.rendererPackageName,rendererConfig:Co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:T.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=an(n),n===null?null:n.stateNode},findFiberByHostInstance:Co.findFiberByHostInstance||py,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{pe=rc.inject(vy),Ve=rc}catch{}}return hi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gy,hi.createPortal=function(n,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vd(s))throw Error(t(200));return hy(n,s,null,l)},hi.createRoot=function(n,s){if(!Vd(n))throw Error(t(299));var l=!1,u="",p=Rg;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onRecoverableError!==void 0&&(p=s.onRecoverableError)),s=kd(n,1,!1,null,null,l,!1,u,p),n[hr]=s.current,uo(n.nodeType===8?n.parentNode:n),new Hd(s)},hi.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var s=n._reactInternals;if(s===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=an(s),n=n===null?null:n.stateNode,n},hi.flushSync=function(n){return As(n)},hi.hydrate=function(n,s,l){if(!nc(s))throw Error(t(200));return ic(null,n,s,!0,l)},hi.hydrateRoot=function(n,s,l){if(!Vd(n))throw Error(t(405));var u=l!=null&&l.hydratedSources||null,p=!1,_="",A=Rg;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(_=l.identifierPrefix),l.onRecoverableError!==void 0&&(A=l.onRecoverableError)),s=Ag(s,null,n,1,l??null,p,!1,_,A),n[hr]=s.current,uo(n),u)for(n=0;n<u.length;n++)l=u[n],p=l._getVersion,p=p(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,p]:s.mutableSourceEagerHydrationData.push(l,p);return new tc(s)},hi.render=function(n,s,l){if(!nc(s))throw Error(t(200));return ic(null,n,s,!1,l)},hi.unmountComponentAtNode=function(n){if(!nc(n))throw Error(t(40));return n._reactRootContainer?(As(function(){ic(null,null,n,!1,function(){n._reactRootContainer=null,n[hr]=null})}),!0):!1},hi.unstable_batchedUpdates=Dd,hi.unstable_renderSubtreeIntoContainer=function(n,s,l,u){if(!nc(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return ic(n,s,l,!1,u)},hi.version="18.3.1-next-f1338f8080-20240426",hi}var zg;function by(){if(zg)return Xd.exports;zg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Xd.exports=Ty(),Xd.exports}var kg;function Ay(){if(kg)return sc;kg=1;var r=by();return sc.createRoot=r.createRoot,sc.hydrateRoot=r.hydrateRoot,sc}var Cy=Ay();const Ry=Fv(Cy),Py="modulepreload",Ly=function(r,e){return new URL(r,e).href},Bg={},Hg=function(e,t,i){let a=Promise.resolve();if(t&&t.length>0){let c=function(m){return Promise.all(m.map(v=>Promise.resolve(v).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};const d=document.getElementsByTagName("link"),h=document.querySelector("meta[property=csp-nonce]"),f=(h==null?void 0:h.nonce)||(h==null?void 0:h.getAttribute("nonce"));a=c(t.map(m=>{if(m=Ly(m,i),m in Bg)return;Bg[m]=!0;const v=m.endsWith(".css"),g=v?'[rel="stylesheet"]':"";if(!!i)for(let b=d.length-1;b>=0;b--){const M=d[b];if(M.href===m&&(!v||M.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${m}"]${g}`))return;const S=document.createElement("link");if(S.rel=v?"stylesheet":Py,v||(S.as="script"),S.crossOrigin="",S.href=m,f&&S.setAttribute("nonce",f),document.head.appendChild(S),v)return new Promise((b,M)=>{S.addEventListener("load",b),S.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${m}`)))})}))}function o(c){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=c,window.dispatchEvent(d),!d.defaultPrevented)throw c}return a.then(c=>{for(const d of c||[])d.status==="rejected"&&o(d.reason);return e().catch(o)})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zh="185",ka={ROTATE:0,DOLLY:1,PAN:2},Oa={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ny=0,Vg=1,Dy=2,Vc=1,Iy=2,Go=3,gs=0,jn=1,Hi=2,Lr=0,Ba=1,Gg=2,Wg=3,Xg=4,Uy=5,ks=100,Fy=101,Oy=102,zy=103,ky=104,By=200,Hy=201,Vy=202,Gy=203,kf=204,Bf=205,Wy=206,Xy=207,$y=208,jy=209,Yy=210,qy=211,Zy=212,Ky=213,Jy=214,Hf=0,Vf=1,Gf=2,Wa=3,Wf=4,Xf=5,$f=6,jf=7,kh=0,Qy=1,eS=2,sr=0,Ov=1,zv=2,kv=3,Bv=4,Hv=5,Vv=6,Gv=7,Wv=300,Gs=301,Xa=302,Yd=303,qd=304,au=306,Yf=1e3,Cr=1001,qf=1002,$n=1003,tS=1004,ac=1005,Hn=1006,Zd=1007,Hs=1008,Si=1009,Xv=1010,$v=1011,qo=1012,Bh=1013,lr=1014,tr=1015,Dr=1016,Hh=1017,Vh=1018,Zo=1020,jv=35902,Yv=35899,qv=1021,Zv=1022,Gi=1023,Ir=1026,Vs=1027,Kv=1028,Gh=1029,Ws=1030,Wh=1031,Xh=1033,Gc=33776,Wc=33777,Xc=33778,$c=33779,Zf=35840,Kf=35841,Jf=35842,Qf=35843,eh=36196,th=37492,nh=37496,ih=37488,rh=37489,qc=37490,sh=37491,ah=37808,oh=37809,lh=37810,ch=37811,uh=37812,dh=37813,fh=37814,hh=37815,ph=37816,mh=37817,gh=37818,vh=37819,xh=37820,_h=37821,yh=36492,Sh=36494,Mh=36495,Eh=36283,wh=36284,Zc=36285,Th=36286,nS=3200,bh=0,iS=1,ds="",ti="srgb",Kc="srgb-linear",Jc="linear",tn="srgb",ma=7680,$g=519,rS=512,sS=513,aS=514,$h=515,oS=516,lS=517,jh=518,cS=519,Ah=35044,jg="300 es",nr=2e3,Ko=2001;function uS(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Jo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function dS(){const r=Jo("canvas");return r.style.display="block",r}const Yg={};function Qc(...r){const e="THREE."+r.shift();console.log(e,...r)}function Jv(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Ct(...r){r=Jv(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Wt(...r){r=Jv(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Ha(...r){const e=r.join(" ");e in Yg||(Yg[e]=!0,Ct(...r))}function fS(r,e,t){return new Promise(function(i,a){function o(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:a();break;case r.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:i()}}setTimeout(o,t)})}const hS={[Hf]:Vf,[Gf]:$f,[Wf]:jf,[Wa]:Xf,[Vf]:Hf,[$f]:Gf,[jf]:Wf,[Xf]:Wa};class vs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const a=i[e];if(a!==void 0){const o=a.indexOf(t);o!==-1&&a.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const a=i.slice(0);for(let o=0,c=a.length;o<c;o++)a[o].call(this,e);e.target=null}}}const Qn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qg=1234567;const Va=Math.PI/180,Qo=180/Math.PI;function ar(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qn[r&255]+Qn[r>>8&255]+Qn[r>>16&255]+Qn[r>>24&255]+"-"+Qn[e&255]+Qn[e>>8&255]+"-"+Qn[e>>16&15|64]+Qn[e>>24&255]+"-"+Qn[t&63|128]+Qn[t>>8&255]+"-"+Qn[t>>16&255]+Qn[t>>24&255]+Qn[i&255]+Qn[i>>8&255]+Qn[i>>16&255]+Qn[i>>24&255]).toLowerCase()}function kt(r,e,t){return Math.max(e,Math.min(t,r))}function Yh(r,e){return(r%e+e)%e}function pS(r,e,t,i,a){return i+(r-e)*(a-i)/(t-e)}function mS(r,e,t){return r!==e?(t-r)/(e-r):0}function $o(r,e,t){return(1-t)*r+t*e}function gS(r,e,t,i){return $o(r,e,1-Math.exp(-t*i))}function vS(r,e=1){return e-Math.abs(Yh(r,e*2)-e)}function xS(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function _S(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function yS(r,e){return r+Math.floor(Math.random()*(e-r+1))}function SS(r,e){return r+Math.random()*(e-r)}function MS(r){return r*(.5-Math.random())}function ES(r){r!==void 0&&(qg=r);let e=qg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function wS(r){return r*Va}function TS(r){return r*Qo}function bS(r){return(r&r-1)===0&&r!==0}function AS(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function CS(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function RS(r,e,t,i,a){const o=Math.cos,c=Math.sin,d=o(t/2),h=c(t/2),f=o((e+i)/2),m=c((e+i)/2),v=o((e-i)/2),g=c((e-i)/2),x=o((i-e)/2),S=c((i-e)/2);switch(a){case"XYX":r.set(d*m,h*v,h*g,d*f);break;case"YZY":r.set(h*g,d*m,h*v,d*f);break;case"ZXZ":r.set(h*v,h*g,d*m,d*f);break;case"XZX":r.set(d*m,h*S,h*x,d*f);break;case"YXY":r.set(h*x,d*m,h*S,d*f);break;case"ZYZ":r.set(h*S,h*x,d*m,d*f);break;default:Ct("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Vi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function nn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const br={DEG2RAD:Va,RAD2DEG:Qo,generateUUID:ar,clamp:kt,euclideanModulo:Yh,mapLinear:pS,inverseLerp:mS,lerp:$o,damp:gS,pingpong:vS,smoothstep:xS,smootherstep:_S,randInt:yS,randFloat:SS,randFloatSpread:MS,seededRandom:ES,degToRad:wS,radToDeg:TS,isPowerOfTwo:bS,ceilPowerOfTwo:AS,floorPowerOfTwo:CS,setQuaternionFromProperEuler:RS,normalize:nn,denormalize:Vi},cp=class cp{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6],this.y=a[1]*t+a[4]*i+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=kt(this.x,e.x,t.x),this.y=kt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=kt(this.x,e,t),this.y=kt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(kt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),a=Math.sin(t),o=this.x-e.x,c=this.y-e.y;return this.x=o*i-c*a+e.x,this.y=o*a+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};cp.prototype.isVector2=!0;let ke=cp;class cr{constructor(e=0,t=0,i=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=a}static slerpFlat(e,t,i,a,o,c,d){let h=i[a+0],f=i[a+1],m=i[a+2],v=i[a+3],g=o[c+0],x=o[c+1],S=o[c+2],b=o[c+3];if(v!==b||h!==g||f!==x||m!==S){let M=h*g+f*x+m*S+v*b;M<0&&(g=-g,x=-x,S=-S,b=-b,M=-M);let y=1-d;if(M<.9995){const N=Math.acos(M),P=Math.sin(N);y=Math.sin(y*N)/P,d=Math.sin(d*N)/P,h=h*y+g*d,f=f*y+x*d,m=m*y+S*d,v=v*y+b*d}else{h=h*y+g*d,f=f*y+x*d,m=m*y+S*d,v=v*y+b*d;const N=1/Math.sqrt(h*h+f*f+m*m+v*v);h*=N,f*=N,m*=N,v*=N}}e[t]=h,e[t+1]=f,e[t+2]=m,e[t+3]=v}static multiplyQuaternionsFlat(e,t,i,a,o,c){const d=i[a],h=i[a+1],f=i[a+2],m=i[a+3],v=o[c],g=o[c+1],x=o[c+2],S=o[c+3];return e[t]=d*S+m*v+h*x-f*g,e[t+1]=h*S+m*g+f*v-d*x,e[t+2]=f*S+m*x+d*g-h*v,e[t+3]=m*S-d*v-h*g-f*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,a){return this._x=e,this._y=t,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,a=e._y,o=e._z,c=e._order,d=Math.cos,h=Math.sin,f=d(i/2),m=d(a/2),v=d(o/2),g=h(i/2),x=h(a/2),S=h(o/2);switch(c){case"XYZ":this._x=g*m*v+f*x*S,this._y=f*x*v-g*m*S,this._z=f*m*S+g*x*v,this._w=f*m*v-g*x*S;break;case"YXZ":this._x=g*m*v+f*x*S,this._y=f*x*v-g*m*S,this._z=f*m*S-g*x*v,this._w=f*m*v+g*x*S;break;case"ZXY":this._x=g*m*v-f*x*S,this._y=f*x*v+g*m*S,this._z=f*m*S+g*x*v,this._w=f*m*v-g*x*S;break;case"ZYX":this._x=g*m*v-f*x*S,this._y=f*x*v+g*m*S,this._z=f*m*S-g*x*v,this._w=f*m*v+g*x*S;break;case"YZX":this._x=g*m*v+f*x*S,this._y=f*x*v+g*m*S,this._z=f*m*S-g*x*v,this._w=f*m*v-g*x*S;break;case"XZY":this._x=g*m*v-f*x*S,this._y=f*x*v-g*m*S,this._z=f*m*S+g*x*v,this._w=f*m*v+g*x*S;break;default:Ct("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,a=Math.sin(i);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],a=t[4],o=t[8],c=t[1],d=t[5],h=t[9],f=t[2],m=t[6],v=t[10],g=i+d+v;if(g>0){const x=.5/Math.sqrt(g+1);this._w=.25/x,this._x=(m-h)*x,this._y=(o-f)*x,this._z=(c-a)*x}else if(i>d&&i>v){const x=2*Math.sqrt(1+i-d-v);this._w=(m-h)/x,this._x=.25*x,this._y=(a+c)/x,this._z=(o+f)/x}else if(d>v){const x=2*Math.sqrt(1+d-i-v);this._w=(o-f)/x,this._x=(a+c)/x,this._y=.25*x,this._z=(h+m)/x}else{const x=2*Math.sqrt(1+v-i-d);this._w=(c-a)/x,this._x=(o+f)/x,this._y=(h+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const a=Math.min(1,t/i);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,a=e._y,o=e._z,c=e._w,d=t._x,h=t._y,f=t._z,m=t._w;return this._x=i*m+c*d+a*f-o*h,this._y=a*m+c*h+o*d-i*f,this._z=o*m+c*f+i*h-a*d,this._w=c*m-i*d-a*h-o*f,this._onChangeCallback(),this}slerp(e,t){let i=e._x,a=e._y,o=e._z,c=e._w,d=this.dot(e);d<0&&(i=-i,a=-a,o=-o,c=-c,d=-d);let h=1-t;if(d<.9995){const f=Math.acos(d),m=Math.sin(f);h=Math.sin(h*f)/m,t=Math.sin(t*f)/m,this._x=this._x*h+i*t,this._y=this._y*h+a*t,this._z=this._z*h+o*t,this._w=this._w*h+c*t,this._onChangeCallback()}else this._x=this._x*h+i*t,this._y=this._y*h+a*t,this._z=this._z*h+o*t,this._w=this._w*h+c*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(a*Math.sin(e),a*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const up=class up{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*a,this.y=o[1]*t+o[4]*i+o[7]*a,this.z=o[2]*t+o[5]*i+o[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,o=e.elements,c=1/(o[3]*t+o[7]*i+o[11]*a+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*a+o[12])*c,this.y=(o[1]*t+o[5]*i+o[9]*a+o[13])*c,this.z=(o[2]*t+o[6]*i+o[10]*a+o[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,a=this.z,o=e.x,c=e.y,d=e.z,h=e.w,f=2*(c*a-d*i),m=2*(d*t-o*a),v=2*(o*i-c*t);return this.x=t+h*f+c*v-d*m,this.y=i+h*m+d*f-o*v,this.z=a+h*v+o*m-c*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*a,this.y=o[1]*t+o[5]*i+o[9]*a,this.z=o[2]*t+o[6]*i+o[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=kt(this.x,e.x,t.x),this.y=kt(this.y,e.y,t.y),this.z=kt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=kt(this.x,e,t),this.y=kt(this.y,e,t),this.z=kt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(kt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,a=e.y,o=e.z,c=t.x,d=t.y,h=t.z;return this.x=a*h-o*d,this.y=o*c-i*h,this.z=i*d-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Kd.copy(this).projectOnVector(e),this.sub(Kd)}reflect(e){return this.sub(Kd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,a=this.z-e.z;return t*t+i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const a=Math.sin(t)*e;return this.x=a*Math.sin(i),this.y=Math.cos(t)*e,this.z=a*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};up.prototype.isVector3=!0;let $=up;const Kd=new $,Zg=new cr,dp=class dp{constructor(e,t,i,a,o,c,d,h,f){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,a,o,c,d,h,f)}set(e,t,i,a,o,c,d,h,f){const m=this.elements;return m[0]=e,m[1]=a,m[2]=d,m[3]=t,m[4]=o,m[5]=h,m[6]=i,m[7]=c,m[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,o=this.elements,c=i[0],d=i[3],h=i[6],f=i[1],m=i[4],v=i[7],g=i[2],x=i[5],S=i[8],b=a[0],M=a[3],y=a[6],N=a[1],P=a[4],T=a[7],I=a[2],L=a[5],O=a[8];return o[0]=c*b+d*N+h*I,o[3]=c*M+d*P+h*L,o[6]=c*y+d*T+h*O,o[1]=f*b+m*N+v*I,o[4]=f*M+m*P+v*L,o[7]=f*y+m*T+v*O,o[2]=g*b+x*N+S*I,o[5]=g*M+x*P+S*L,o[8]=g*y+x*T+S*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],c=e[4],d=e[5],h=e[6],f=e[7],m=e[8];return t*c*m-t*d*f-i*o*m+i*d*h+a*o*f-a*c*h}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],c=e[4],d=e[5],h=e[6],f=e[7],m=e[8],v=m*c-d*f,g=d*h-m*o,x=f*o-c*h,S=t*v+i*g+a*x;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/S;return e[0]=v*b,e[1]=(a*f-m*i)*b,e[2]=(d*i-a*c)*b,e[3]=g*b,e[4]=(m*t-a*h)*b,e[5]=(a*o-d*t)*b,e[6]=x*b,e[7]=(i*h-f*t)*b,e[8]=(c*t-i*o)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,a,o,c,d){const h=Math.cos(o),f=Math.sin(o);return this.set(i*h,i*f,-i*(h*c+f*d)+c+e,-a*f,a*h,-a*(-f*c+h*d)+d+t,0,0,1),this}scale(e,t){return Ha("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Jd.makeScale(e,t)),this}rotate(e){return Ha("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Jd.makeRotation(-e)),this}translate(e,t){return Ha("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Jd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<9;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};dp.prototype.isMatrix3=!0;let It=dp;const Jd=new It,Kg=new It().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jg=new It().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function PS(){const r={enabled:!0,workingColorSpace:Kc,spaces:{},convert:function(a,o,c){return this.enabled===!1||o===c||!o||!c||(this.spaces[o].transfer===tn&&(a.r=Nr(a.r),a.g=Nr(a.g),a.b=Nr(a.b)),this.spaces[o].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[o].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===tn&&(a.r=Ga(a.r),a.g=Ga(a.g),a.b=Ga(a.b))),a},workingToColorSpace:function(a,o){return this.convert(a,this.workingColorSpace,o)},colorSpaceToWorking:function(a,o){return this.convert(a,o,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===ds?Jc:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,o=this.workingColorSpace){return a.fromArray(this.spaces[o].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,o,c){return a.copy(this.spaces[o].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,o){return Ha("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(a,o)},toWorkingColorSpace:function(a,o){return Ha("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(a,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[Kc]:{primaries:e,whitePoint:i,transfer:Jc,toXYZ:Kg,fromXYZ:Jg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:e,whitePoint:i,transfer:tn,toXYZ:Kg,fromXYZ:Jg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}}),r}const jt=PS();function Nr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ga(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ga;class LS{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ga===void 0&&(ga=Jo("canvas")),ga.width=e.width,ga.height=e.height;const a=ga.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),i=ga}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Jo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const a=i.getImageData(0,0,e.width,e.height),o=a.data;for(let c=0;c<o.length;c++)o[c]=Nr(o[c]/255)*255;return i.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Nr(t[i]/255)*255):t[i]=Nr(t[i]);return{data:t,width:e.width,height:e.height}}else return Ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let NS=0;class qh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:NS++}),this.uuid=ar(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let o;if(Array.isArray(a)){o=[];for(let c=0,d=a.length;c<d;c++)a[c].isDataTexture?o.push(Qd(a[c].image)):o.push(Qd(a[c]))}else o=Qd(a);i.url=o}return t||(e.images[this.uuid]=i),i}}function Qd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?LS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Ct("Texture: Unable to serialize Texture."),{})}let DS=0;const ef=new $;class Vn extends vs{constructor(e=Vn.DEFAULT_IMAGE,t=Vn.DEFAULT_MAPPING,i=Cr,a=Cr,o=Hn,c=Hs,d=Gi,h=Si,f=Vn.DEFAULT_ANISOTROPY,m=ds){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:DS++}),this.uuid=ar(),this.name="",this.source=new qh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=c,this.anisotropy=f,this.format=d,this.internalFormat=null,this.type=h,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ef).x}get height(){return this.source.getSize(ef).y}get depth(){return this.source.getSize(ef).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ct(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){Ct(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yf:e.x=e.x-Math.floor(e.x);break;case Cr:e.x=e.x<0?0:1;break;case qf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yf:e.y=e.y-Math.floor(e.y);break;case Cr:e.y=e.y<0?0:1;break;case qf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=Wv;Vn.DEFAULT_ANISOTROPY=1;const fp=class fp{constructor(e=0,t=0,i=0,a=1){this.x=e,this.y=t,this.z=i,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,a){return this.x=e,this.y=t,this.z=i,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,a=this.z,o=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*a+c[12]*o,this.y=c[1]*t+c[5]*i+c[9]*a+c[13]*o,this.z=c[2]*t+c[6]*i+c[10]*a+c[14]*o,this.w=c[3]*t+c[7]*i+c[11]*a+c[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,a,o;const h=e.elements,f=h[0],m=h[4],v=h[8],g=h[1],x=h[5],S=h[9],b=h[2],M=h[6],y=h[10];if(Math.abs(m-g)<.01&&Math.abs(v-b)<.01&&Math.abs(S-M)<.01){if(Math.abs(m+g)<.1&&Math.abs(v+b)<.1&&Math.abs(S+M)<.1&&Math.abs(f+x+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(f+1)/2,T=(x+1)/2,I=(y+1)/2,L=(m+g)/4,O=(v+b)/4,E=(S+M)/4;return P>T&&P>I?P<.01?(i=0,a=.707106781,o=.707106781):(i=Math.sqrt(P),a=L/i,o=O/i):T>I?T<.01?(i=.707106781,a=0,o=.707106781):(a=Math.sqrt(T),i=L/a,o=E/a):I<.01?(i=.707106781,a=.707106781,o=0):(o=Math.sqrt(I),i=O/o,a=E/o),this.set(i,a,o,t),this}let N=Math.sqrt((M-S)*(M-S)+(v-b)*(v-b)+(g-m)*(g-m));return Math.abs(N)<.001&&(N=1),this.x=(M-S)/N,this.y=(v-b)/N,this.z=(g-m)/N,this.w=Math.acos((f+x+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=kt(this.x,e.x,t.x),this.y=kt(this.y,e.y,t.y),this.z=kt(this.z,e.z,t.z),this.w=kt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=kt(this.x,e,t),this.y=kt(this.y,e,t),this.z=kt(this.z,e,t),this.w=kt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(kt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};fp.prototype.isVector4=!0;let yn=fp;class IS extends vs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new yn(0,0,e,t),this.scissorTest=!1,this.viewport=new yn(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:i.depth},o=new Vn(a),c=i.count;for(let d=0;d<c;d++)this.textures[d]=o.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Hn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let a=0,o=this.textures.length;a<o;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new qh(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class or extends IS{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Qv extends Vn{constructor(e=null,t=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=$n,this.minFilter=$n,this.wrapR=Cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class US extends Vn{constructor(e=null,t=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:a},this.magFilter=$n,this.minFilter=$n,this.wrapR=Cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const su=class su{constructor(e,t,i,a,o,c,d,h,f,m,v,g,x,S,b,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,a,o,c,d,h,f,m,v,g,x,S,b,M)}set(e,t,i,a,o,c,d,h,f,m,v,g,x,S,b,M){const y=this.elements;return y[0]=e,y[4]=t,y[8]=i,y[12]=a,y[1]=o,y[5]=c,y[9]=d,y[13]=h,y[2]=f,y[6]=m,y[10]=v,y[14]=g,y[3]=x,y[7]=S,y[11]=b,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new su().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,a=1/va.setFromMatrixColumn(e,0).length(),o=1/va.setFromMatrixColumn(e,1).length(),c=1/va.setFromMatrixColumn(e,2).length();return t[0]=i[0]*a,t[1]=i[1]*a,t[2]=i[2]*a,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,a=e.y,o=e.z,c=Math.cos(i),d=Math.sin(i),h=Math.cos(a),f=Math.sin(a),m=Math.cos(o),v=Math.sin(o);if(e.order==="XYZ"){const g=c*m,x=c*v,S=d*m,b=d*v;t[0]=h*m,t[4]=-h*v,t[8]=f,t[1]=x+S*f,t[5]=g-b*f,t[9]=-d*h,t[2]=b-g*f,t[6]=S+x*f,t[10]=c*h}else if(e.order==="YXZ"){const g=h*m,x=h*v,S=f*m,b=f*v;t[0]=g+b*d,t[4]=S*d-x,t[8]=c*f,t[1]=c*v,t[5]=c*m,t[9]=-d,t[2]=x*d-S,t[6]=b+g*d,t[10]=c*h}else if(e.order==="ZXY"){const g=h*m,x=h*v,S=f*m,b=f*v;t[0]=g-b*d,t[4]=-c*v,t[8]=S+x*d,t[1]=x+S*d,t[5]=c*m,t[9]=b-g*d,t[2]=-c*f,t[6]=d,t[10]=c*h}else if(e.order==="ZYX"){const g=c*m,x=c*v,S=d*m,b=d*v;t[0]=h*m,t[4]=S*f-x,t[8]=g*f+b,t[1]=h*v,t[5]=b*f+g,t[9]=x*f-S,t[2]=-f,t[6]=d*h,t[10]=c*h}else if(e.order==="YZX"){const g=c*h,x=c*f,S=d*h,b=d*f;t[0]=h*m,t[4]=b-g*v,t[8]=S*v+x,t[1]=v,t[5]=c*m,t[9]=-d*m,t[2]=-f*m,t[6]=x*v+S,t[10]=g-b*v}else if(e.order==="XZY"){const g=c*h,x=c*f,S=d*h,b=d*f;t[0]=h*m,t[4]=-v,t[8]=f*m,t[1]=g*v+b,t[5]=c*m,t[9]=x*v-S,t[2]=S*v-x,t[6]=d*m,t[10]=b*v+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(FS,e,OS)}lookAt(e,t,i){const a=this.elements;return _i.subVectors(e,t),_i.lengthSq()===0&&(_i.z=1),_i.normalize(),is.crossVectors(i,_i),is.lengthSq()===0&&(Math.abs(i.z)===1?_i.x+=1e-4:_i.z+=1e-4,_i.normalize(),is.crossVectors(i,_i)),is.normalize(),oc.crossVectors(_i,is),a[0]=is.x,a[4]=oc.x,a[8]=_i.x,a[1]=is.y,a[5]=oc.y,a[9]=_i.y,a[2]=is.z,a[6]=oc.z,a[10]=_i.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,a=t.elements,o=this.elements,c=i[0],d=i[4],h=i[8],f=i[12],m=i[1],v=i[5],g=i[9],x=i[13],S=i[2],b=i[6],M=i[10],y=i[14],N=i[3],P=i[7],T=i[11],I=i[15],L=a[0],O=a[4],E=a[8],R=a[12],z=a[1],B=a[5],j=a[9],G=a[13],de=a[2],W=a[6],ae=a[10],Q=a[14],q=a[3],ie=a[7],ee=a[11],k=a[15];return o[0]=c*L+d*z+h*de+f*q,o[4]=c*O+d*B+h*W+f*ie,o[8]=c*E+d*j+h*ae+f*ee,o[12]=c*R+d*G+h*Q+f*k,o[1]=m*L+v*z+g*de+x*q,o[5]=m*O+v*B+g*W+x*ie,o[9]=m*E+v*j+g*ae+x*ee,o[13]=m*R+v*G+g*Q+x*k,o[2]=S*L+b*z+M*de+y*q,o[6]=S*O+b*B+M*W+y*ie,o[10]=S*E+b*j+M*ae+y*ee,o[14]=S*R+b*G+M*Q+y*k,o[3]=N*L+P*z+T*de+I*q,o[7]=N*O+P*B+T*W+I*ie,o[11]=N*E+P*j+T*ae+I*ee,o[15]=N*R+P*G+T*Q+I*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],a=e[8],o=e[12],c=e[1],d=e[5],h=e[9],f=e[13],m=e[2],v=e[6],g=e[10],x=e[14],S=e[3],b=e[7],M=e[11],y=e[15],N=h*x-f*g,P=d*x-f*v,T=d*g-h*v,I=c*x-f*m,L=c*g-h*m,O=c*v-d*m;return t*(b*N-M*P+y*T)-i*(S*N-M*I+y*L)+a*(S*P-b*I+y*O)-o*(S*T-b*L+M*O)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],a=e[8],o=e[1],c=e[5],d=e[9],h=e[2],f=e[6],m=e[10];return t*(c*m-d*f)-i*(o*m-d*h)+a*(o*f-c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],a=e[2],o=e[3],c=e[4],d=e[5],h=e[6],f=e[7],m=e[8],v=e[9],g=e[10],x=e[11],S=e[12],b=e[13],M=e[14],y=e[15],N=t*d-i*c,P=t*h-a*c,T=t*f-o*c,I=i*h-a*d,L=i*f-o*d,O=a*f-o*h,E=m*b-v*S,R=m*M-g*S,z=m*y-x*S,B=v*M-g*b,j=v*y-x*b,G=g*y-x*M,de=N*G-P*j+T*B+I*z-L*R+O*E;if(de===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/de;return e[0]=(d*G-h*j+f*B)*W,e[1]=(a*j-i*G-o*B)*W,e[2]=(b*O-M*L+y*I)*W,e[3]=(g*L-v*O-x*I)*W,e[4]=(h*z-c*G-f*R)*W,e[5]=(t*G-a*z+o*R)*W,e[6]=(M*T-S*O-y*P)*W,e[7]=(m*O-g*T+x*P)*W,e[8]=(c*j-d*z+f*E)*W,e[9]=(i*z-t*j-o*E)*W,e[10]=(S*L-b*T+y*N)*W,e[11]=(v*T-m*L-x*N)*W,e[12]=(d*R-c*B-h*E)*W,e[13]=(t*B-i*R+a*E)*W,e[14]=(b*P-S*I-M*N)*W,e[15]=(m*I-v*P+g*N)*W,this}scale(e){const t=this.elements,i=e.x,a=e.y,o=e.z;return t[0]*=i,t[4]*=a,t[8]*=o,t[1]*=i,t[5]*=a,t[9]*=o,t[2]*=i,t[6]*=a,t[10]*=o,t[3]*=i,t[7]*=a,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,a))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),a=Math.sin(t),o=1-i,c=e.x,d=e.y,h=e.z,f=o*c,m=o*d;return this.set(f*c+i,f*d-a*h,f*h+a*d,0,f*d+a*h,m*d+i,m*h-a*c,0,f*h-a*d,m*h+a*c,o*h*h+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,a,o,c){return this.set(1,i,o,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,i){const a=this.elements,o=t._x,c=t._y,d=t._z,h=t._w,f=o+o,m=c+c,v=d+d,g=o*f,x=o*m,S=o*v,b=c*m,M=c*v,y=d*v,N=h*f,P=h*m,T=h*v,I=i.x,L=i.y,O=i.z;return a[0]=(1-(b+y))*I,a[1]=(x+T)*I,a[2]=(S-P)*I,a[3]=0,a[4]=(x-T)*L,a[5]=(1-(g+y))*L,a[6]=(M+N)*L,a[7]=0,a[8]=(S+P)*O,a[9]=(M-N)*O,a[10]=(1-(g+b))*O,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,i){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const o=this.determinantAffine();if(o===0)return i.set(1,1,1),t.identity(),this;let c=va.set(a[0],a[1],a[2]).length();const d=va.set(a[4],a[5],a[6]).length(),h=va.set(a[8],a[9],a[10]).length();o<0&&(c=-c),zi.copy(this);const f=1/c,m=1/d,v=1/h;return zi.elements[0]*=f,zi.elements[1]*=f,zi.elements[2]*=f,zi.elements[4]*=m,zi.elements[5]*=m,zi.elements[6]*=m,zi.elements[8]*=v,zi.elements[9]*=v,zi.elements[10]*=v,t.setFromRotationMatrix(zi),i.x=c,i.y=d,i.z=h,this}makePerspective(e,t,i,a,o,c,d=nr,h=!1){const f=this.elements,m=2*o/(t-e),v=2*o/(i-a),g=(t+e)/(t-e),x=(i+a)/(i-a);let S,b;if(h)S=o/(c-o),b=c*o/(c-o);else if(d===nr)S=-(c+o)/(c-o),b=-2*c*o/(c-o);else if(d===Ko)S=-c/(c-o),b=-c*o/(c-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return f[0]=m,f[4]=0,f[8]=g,f[12]=0,f[1]=0,f[5]=v,f[9]=x,f[13]=0,f[2]=0,f[6]=0,f[10]=S,f[14]=b,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,i,a,o,c,d=nr,h=!1){const f=this.elements,m=2/(t-e),v=2/(i-a),g=-(t+e)/(t-e),x=-(i+a)/(i-a);let S,b;if(h)S=1/(c-o),b=c/(c-o);else if(d===nr)S=-2/(c-o),b=-(c+o)/(c-o);else if(d===Ko)S=-1/(c-o),b=-o/(c-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return f[0]=m,f[4]=0,f[8]=0,f[12]=g,f[1]=0,f[5]=v,f[9]=0,f[13]=x,f[2]=0,f[6]=0,f[10]=S,f[14]=b,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let a=0;a<16;a++)if(t[a]!==i[a])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};su.prototype.isMatrix4=!0;let un=su;const va=new $,zi=new un,FS=new $(0,0,0),OS=new $(1,1,1),is=new $,oc=new $,_i=new $,Qg=new un,e0=new cr;class Ur{constructor(e=0,t=0,i=0,a=Ur.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,a=this._order){return this._x=e,this._y=t,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const a=e.elements,o=a[0],c=a[4],d=a[8],h=a[1],f=a[5],m=a[9],v=a[2],g=a[6],x=a[10];switch(t){case"XYZ":this._y=Math.asin(kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-c,o)):(this._x=Math.atan2(g,f),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(d,x),this._z=Math.atan2(h,f)):(this._y=Math.atan2(-v,o),this._z=0);break;case"ZXY":this._x=Math.asin(kt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,x),this._z=Math.atan2(-c,f)):(this._y=0,this._z=Math.atan2(h,o));break;case"ZYX":this._y=Math.asin(-kt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,x),this._z=Math.atan2(h,o)):(this._x=0,this._z=Math.atan2(-c,f));break;case"YZX":this._z=Math.asin(kt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,f),this._y=Math.atan2(-v,o)):(this._x=0,this._y=Math.atan2(d,x));break;case"XZY":this._z=Math.asin(-kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,f),this._y=Math.atan2(d,o)):(this._x=Math.atan2(-m,x),this._y=0);break;default:Ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Qg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return e0.setFromEuler(this),this.setFromQuaternion(e0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ur.DEFAULT_ORDER="XYZ";class Zh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zS=0;const t0=new $,xa=new cr,Sr=new un,lc=new $,Po=new $,kS=new $,BS=new cr,n0=new $(1,0,0),i0=new $(0,1,0),r0=new $(0,0,1),s0={type:"added"},HS={type:"removed"},_a={type:"childadded",child:null},tf={type:"childremoved",child:null};class Gn extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zS++}),this.uuid=ar(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gn.DEFAULT_UP.clone();const e=new $,t=new Ur,i=new cr,a=new $(1,1,1);function o(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new un},normalMatrix:{value:new It}}),this.matrix=new un,this.matrixWorld=new un,this.matrixAutoUpdate=Gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xa.setFromAxisAngle(e,t),this.quaternion.multiply(xa),this}rotateOnWorldAxis(e,t){return xa.setFromAxisAngle(e,t),this.quaternion.premultiply(xa),this}rotateX(e){return this.rotateOnAxis(n0,e)}rotateY(e){return this.rotateOnAxis(i0,e)}rotateZ(e){return this.rotateOnAxis(r0,e)}translateOnAxis(e,t){return t0.copy(e).applyQuaternion(this.quaternion),this.position.add(t0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(n0,e)}translateY(e){return this.translateOnAxis(i0,e)}translateZ(e){return this.translateOnAxis(r0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?lc.copy(e):lc.set(e,t,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sr.lookAt(Po,lc,this.up):Sr.lookAt(lc,Po,this.up),this.quaternion.setFromRotationMatrix(Sr),a&&(Sr.extractRotation(a.matrixWorld),xa.setFromRotationMatrix(Sr),this.quaternion.premultiply(xa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Wt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(s0),_a.child=e,this.dispatchEvent(_a),_a.child=null):Wt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(HS),tf.child=e,this.dispatchEvent(tf),tf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(s0),_a.child=e,this.dispatchEvent(_a),_a.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,a=this.children.length;i<a;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const a=this.children;for(let o=0,c=a.length;o<c;o++)a[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,e,kS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,BS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,a=e.z,o=this.matrix.elements;o[12]+=t-o[0]*t-o[4]*i-o[8]*a,o[13]+=i-o[1]*t-o[5]*i-o[9]*a,o[14]+=a-o[2]*t-o[6]*i-o[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,a=t.length;i<a;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const o=this.children;for(let c=0,d=o.length;c<d;c++)o[c].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(d=>({...d})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function o(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=o(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let f=0,m=h.length;f<m;f++){const v=h[f];o(e.shapes,v)}else o(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,f=this.material.length;h<f;h++)d.push(o(e.materials,this.material[h]));a.material=d}else a.material=o(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];a.animations.push(o(e.animations,h))}}if(t){const d=c(e.geometries),h=c(e.materials),f=c(e.textures),m=c(e.images),v=c(e.shapes),g=c(e.skeletons),x=c(e.animations),S=c(e.nodes);d.length>0&&(i.geometries=d),h.length>0&&(i.materials=h),f.length>0&&(i.textures=f),m.length>0&&(i.images=m),v.length>0&&(i.shapes=v),g.length>0&&(i.skeletons=g),x.length>0&&(i.animations=x),S.length>0&&(i.nodes=S)}return i.object=a,i;function c(d){const h=[];for(const f in d){const m=d[f];delete m.metadata,h.push(m)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const a=e.children[i];this.add(a.clone())}return this}}Gn.DEFAULT_UP=new $(0,1,0);Gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class fs extends Gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const VS={type:"move"};class nf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let a=null,o=null,c=null;const d=this._targetRay,h=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){c=!0;for(const b of e.hand.values()){const M=t.getJointPose(b,i),y=this._getHandJoint(f,b);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const m=f.joints["index-finger-tip"],v=f.joints["thumb-tip"],g=m.position.distanceTo(v.position),x=.02,S=.005;f.inputState.pinching&&g>x+S?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&g<=x-S&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(a=t.getPose(e.targetRaySpace,i),a===null&&o!==null&&(a=o),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(VS)))}return d!==null&&(d.visible=a!==null),h!==null&&(h.visible=o!==null),f!==null&&(f.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new fs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const ex={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rs={h:0,s:0,l:0},cc={h:0,s:0,l:0};function rf(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ot{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,jt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,a=jt.workingColorSpace){return this.r=e,this.g=t,this.b=i,jt.colorSpaceToWorking(this,a),this}setHSL(e,t,i,a=jt.workingColorSpace){if(e=Yh(e,1),t=kt(t,0,1),i=kt(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,c=2*i-o;this.r=rf(c,o,e+1/3),this.g=rf(c,o,e),this.b=rf(c,o,e-1/3)}return jt.colorSpaceToWorking(this,a),this}setStyle(e,t=ti){function i(o){o!==void 0&&parseFloat(o)<1&&Ct("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const c=a[1],d=a[2];switch(c){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:Ct("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=a[1],c=o.length;if(c===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(o,16),t);Ct("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ti){const i=ex[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ct("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Nr(e.r),this.g=Nr(e.g),this.b=Nr(e.b),this}copyLinearToSRGB(e){return this.r=Ga(e.r),this.g=Ga(e.g),this.b=Ga(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return jt.workingToColorSpace(ei.copy(this),e),Math.round(kt(ei.r*255,0,255))*65536+Math.round(kt(ei.g*255,0,255))*256+Math.round(kt(ei.b*255,0,255))}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=jt.workingColorSpace){jt.workingToColorSpace(ei.copy(this),t);const i=ei.r,a=ei.g,o=ei.b,c=Math.max(i,a,o),d=Math.min(i,a,o);let h,f;const m=(d+c)/2;if(d===c)h=0,f=0;else{const v=c-d;switch(f=m<=.5?v/(c+d):v/(2-c-d),c){case i:h=(a-o)/v+(a<o?6:0);break;case a:h=(o-i)/v+2;break;case o:h=(i-a)/v+4;break}h/=6}return e.h=h,e.s=f,e.l=m,e}getRGB(e,t=jt.workingColorSpace){return jt.workingToColorSpace(ei.copy(this),t),e.r=ei.r,e.g=ei.g,e.b=ei.b,e}getStyle(e=ti){jt.workingToColorSpace(ei.copy(this),e);const t=ei.r,i=ei.g,a=ei.b;return e!==ti?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(e,t,i){return this.getHSL(rs),this.setHSL(rs.h+e,rs.s+t,rs.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(rs),e.getHSL(cc);const i=$o(rs.h,cc.h,t),a=$o(rs.s,cc.s,t),o=$o(rs.l,cc.l,t);return this.setHSL(i,a,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,a=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*a,this.g=o[1]*t+o[4]*i+o[7]*a,this.b=o[2]*t+o[5]*i+o[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ei=new Ot;Ot.NAMES=ex;class ou extends Gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ur,this.environmentIntensity=1,this.environmentRotation=new Ur,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ki=new $,Mr=new $,sf=new $,Er=new $,ya=new $,Sa=new $,a0=new $,af=new $,of=new $,lf=new $,cf=new yn,uf=new yn,df=new yn;class Mi{constructor(e=new $,t=new $,i=new $){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,a){a.subVectors(i,t),ki.subVectors(e,t),a.cross(ki);const o=a.lengthSq();return o>0?a.multiplyScalar(1/Math.sqrt(o)):a.set(0,0,0)}static getBarycoord(e,t,i,a,o){ki.subVectors(a,t),Mr.subVectors(i,t),sf.subVectors(e,t);const c=ki.dot(ki),d=ki.dot(Mr),h=ki.dot(sf),f=Mr.dot(Mr),m=Mr.dot(sf),v=c*f-d*d;if(v===0)return o.set(0,0,0),null;const g=1/v,x=(f*h-d*m)*g,S=(c*m-d*h)*g;return o.set(1-x-S,S,x)}static containsPoint(e,t,i,a){return this.getBarycoord(e,t,i,a,Er)===null?!1:Er.x>=0&&Er.y>=0&&Er.x+Er.y<=1}static getInterpolation(e,t,i,a,o,c,d,h){return this.getBarycoord(e,t,i,a,Er)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(o,Er.x),h.addScaledVector(c,Er.y),h.addScaledVector(d,Er.z),h)}static getInterpolatedAttribute(e,t,i,a,o,c){return cf.setScalar(0),uf.setScalar(0),df.setScalar(0),cf.fromBufferAttribute(e,t),uf.fromBufferAttribute(e,i),df.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(cf,o.x),c.addScaledVector(uf,o.y),c.addScaledVector(df,o.z),c}static isFrontFacing(e,t,i,a){return ki.subVectors(i,t),Mr.subVectors(e,t),ki.cross(Mr).dot(a)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,a){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,i,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ki.subVectors(this.c,this.b),Mr.subVectors(this.a,this.b),ki.cross(Mr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,a,o){return Mi.getInterpolation(e,this.a,this.b,this.c,t,i,a,o)}containsPoint(e){return Mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,a=this.b,o=this.c;let c,d;ya.subVectors(a,i),Sa.subVectors(o,i),af.subVectors(e,i);const h=ya.dot(af),f=Sa.dot(af);if(h<=0&&f<=0)return t.copy(i);of.subVectors(e,a);const m=ya.dot(of),v=Sa.dot(of);if(m>=0&&v<=m)return t.copy(a);const g=h*v-m*f;if(g<=0&&h>=0&&m<=0)return c=h/(h-m),t.copy(i).addScaledVector(ya,c);lf.subVectors(e,o);const x=ya.dot(lf),S=Sa.dot(lf);if(S>=0&&x<=S)return t.copy(o);const b=x*f-h*S;if(b<=0&&f>=0&&S<=0)return d=f/(f-S),t.copy(i).addScaledVector(Sa,d);const M=m*S-x*v;if(M<=0&&v-m>=0&&x-S>=0)return a0.subVectors(o,a),d=(v-m)/(v-m+(x-S)),t.copy(a).addScaledVector(a0,d);const y=1/(M+b+g);return c=b*y,d=g*y,t.copy(i).addScaledVector(ya,c).addScaledVector(Sa,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class il{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=o.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,Bi):Bi.fromBufferAttribute(o,c),Bi.applyMatrix4(e.matrixWorld),this.expandByPoint(Bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),uc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),uc.copy(i.boundingBox)),uc.applyMatrix4(e.matrixWorld),this.union(uc)}const a=e.children;for(let o=0,c=a.length;o<c;o++)this.expandByObject(a[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bi),Bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lo),dc.subVectors(this.max,Lo),Ma.subVectors(e.a,Lo),Ea.subVectors(e.b,Lo),wa.subVectors(e.c,Lo),ss.subVectors(Ea,Ma),as.subVectors(wa,Ea),Ls.subVectors(Ma,wa);let t=[0,-ss.z,ss.y,0,-as.z,as.y,0,-Ls.z,Ls.y,ss.z,0,-ss.x,as.z,0,-as.x,Ls.z,0,-Ls.x,-ss.y,ss.x,0,-as.y,as.x,0,-Ls.y,Ls.x,0];return!ff(t,Ma,Ea,wa,dc)||(t=[1,0,0,0,1,0,0,0,1],!ff(t,Ma,Ea,wa,dc))?!1:(fc.crossVectors(ss,as),t=[fc.x,fc.y,fc.z],ff(t,Ma,Ea,wa,dc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wr=[new $,new $,new $,new $,new $,new $,new $,new $],Bi=new $,uc=new il,Ma=new $,Ea=new $,wa=new $,ss=new $,as=new $,Ls=new $,Lo=new $,dc=new $,fc=new $,Ns=new $;function ff(r,e,t,i,a){for(let o=0,c=r.length-3;o<=c;o+=3){Ns.fromArray(r,o);const d=a.x*Math.abs(Ns.x)+a.y*Math.abs(Ns.y)+a.z*Math.abs(Ns.z),h=e.dot(Ns),f=t.dot(Ns),m=i.dot(Ns);if(Math.max(-Math.max(h,f,m),Math.min(h,f,m))>d)return!1}return!0}const Rn=new $,hc=new ke;let GS=0;class Wi extends vs{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:GS++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ah,this.updateRanges=[],this.gpuType=tr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let a=0,o=this.itemSize;a<o;a++)this.array[e+a]=t.array[i+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)hc.fromBufferAttribute(this,t),hc.applyMatrix3(e),this.setXY(t,hc.x,hc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Rn.fromBufferAttribute(this,t),Rn.applyMatrix3(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Rn.fromBufferAttribute(this,t),Rn.applyMatrix4(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Rn.fromBufferAttribute(this,t),Rn.applyNormalMatrix(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Rn.fromBufferAttribute(this,t),Rn.transformDirection(e),this.setXYZ(t,Rn.x,Rn.y,Rn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Vi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=nn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,a){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array),a=nn(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this}setXYZW(e,t,i,a,o){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array),a=nn(a,this.array),o=nn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=a,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ah&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class tx extends Wi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class nx extends Wi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class wn extends Wi{constructor(e,t,i){super(new Float32Array(e),t,i)}}const WS=new il,No=new $,hf=new $;class lu{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):WS.setFromPoints(e).getCenter(i);let a=0;for(let o=0,c=e.length;o<c;o++)a=Math.max(a,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;No.subVectors(e,this.center);const t=No.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),a=(i-this.radius)*.5;this.center.addScaledVector(No,a/i),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(No.copy(e.center).add(hf)),this.expandByPoint(No.copy(e.center).sub(hf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let XS=0;const Ri=new un,pf=new Gn,Ta=new $,yi=new il,Do=new il,Bn=new $;class En extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:XS++}),this.uuid=ar(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uS(e)?nx:tx)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new It().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ri.makeRotationFromQuaternion(e),this.applyMatrix4(Ri),this}rotateX(e){return Ri.makeRotationX(e),this.applyMatrix4(Ri),this}rotateY(e){return Ri.makeRotationY(e),this.applyMatrix4(Ri),this}rotateZ(e){return Ri.makeRotationZ(e),this.applyMatrix4(Ri),this}translate(e,t,i){return Ri.makeTranslation(e,t,i),this.applyMatrix4(Ri),this}scale(e,t,i){return Ri.makeScale(e,t,i),this.applyMatrix4(Ri),this}lookAt(e){return pf.lookAt(e),pf.updateMatrix(),this.applyMatrix4(pf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ta).negate(),this.translate(Ta.x,Ta.y,Ta.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let a=0,o=e.length;a<o;a++){const c=e[a];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new wn(i,3))}else{const i=Math.min(e.length,t.count);for(let a=0;a<i;a++){const o=e[a];t.setXYZ(a,o.x,o.y,o.z||0)}e.length>t.count&&Ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new il);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){const o=t[i];yi.setFromBufferAttribute(o),this.morphTargetsRelative?(Bn.addVectors(this.boundingBox.min,yi.min),this.boundingBox.expandByPoint(Bn),Bn.addVectors(this.boundingBox.max,yi.max),this.boundingBox.expandByPoint(Bn)):(this.boundingBox.expandByPoint(yi.min),this.boundingBox.expandByPoint(yi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(yi.setFromBufferAttribute(e),t)for(let o=0,c=t.length;o<c;o++){const d=t[o];Do.setFromBufferAttribute(d),this.morphTargetsRelative?(Bn.addVectors(yi.min,Do.min),yi.expandByPoint(Bn),Bn.addVectors(yi.max,Do.max),yi.expandByPoint(Bn)):(yi.expandByPoint(Do.min),yi.expandByPoint(Do.max))}yi.getCenter(i);let a=0;for(let o=0,c=e.count;o<c;o++)Bn.fromBufferAttribute(e,o),a=Math.max(a,i.distanceToSquared(Bn));if(t)for(let o=0,c=t.length;o<c;o++){const d=t[o],h=this.morphTargetsRelative;for(let f=0,m=d.count;f<m;f++)Bn.fromBufferAttribute(d,f),h&&(Ta.fromBufferAttribute(e,f),Bn.add(Ta)),a=Math.max(a,i.distanceToSquared(Bn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,a=t.normal,o=t.uv;let c=this.getAttribute("tangent");(c===void 0||c.count!==i.count)&&(c=new Wi(new Float32Array(4*i.count),4),this.setAttribute("tangent",c));const d=[],h=[];for(let E=0;E<i.count;E++)d[E]=new $,h[E]=new $;const f=new $,m=new $,v=new $,g=new ke,x=new ke,S=new ke,b=new $,M=new $;function y(E,R,z){f.fromBufferAttribute(i,E),m.fromBufferAttribute(i,R),v.fromBufferAttribute(i,z),g.fromBufferAttribute(o,E),x.fromBufferAttribute(o,R),S.fromBufferAttribute(o,z),m.sub(f),v.sub(f),x.sub(g),S.sub(g);const B=1/(x.x*S.y-S.x*x.y);isFinite(B)&&(b.copy(m).multiplyScalar(S.y).addScaledVector(v,-x.y).multiplyScalar(B),M.copy(v).multiplyScalar(x.x).addScaledVector(m,-S.x).multiplyScalar(B),d[E].add(b),d[R].add(b),d[z].add(b),h[E].add(M),h[R].add(M),h[z].add(M))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let E=0,R=N.length;E<R;++E){const z=N[E],B=z.start,j=z.count;for(let G=B,de=B+j;G<de;G+=3)y(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const P=new $,T=new $,I=new $,L=new $;function O(E){I.fromBufferAttribute(a,E),L.copy(I);const R=d[E];P.copy(R),P.sub(I.multiplyScalar(I.dot(R))).normalize(),T.crossVectors(L,R);const B=T.dot(h[E])<0?-1:1;c.setXYZW(E,P.x,P.y,P.z,B)}for(let E=0,R=N.length;E<R;++E){const z=N[E],B=z.start,j=z.count;for(let G=B,de=B+j;G<de;G+=3)O(e.getX(G+0)),O(e.getX(G+1)),O(e.getX(G+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Wi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let g=0,x=i.count;g<x;g++)i.setXYZ(g,0,0,0);const a=new $,o=new $,c=new $,d=new $,h=new $,f=new $,m=new $,v=new $;if(e)for(let g=0,x=e.count;g<x;g+=3){const S=e.getX(g+0),b=e.getX(g+1),M=e.getX(g+2);a.fromBufferAttribute(t,S),o.fromBufferAttribute(t,b),c.fromBufferAttribute(t,M),m.subVectors(c,o),v.subVectors(a,o),m.cross(v),d.fromBufferAttribute(i,S),h.fromBufferAttribute(i,b),f.fromBufferAttribute(i,M),d.add(m),h.add(m),f.add(m),i.setXYZ(S,d.x,d.y,d.z),i.setXYZ(b,h.x,h.y,h.z),i.setXYZ(M,f.x,f.y,f.z)}else for(let g=0,x=t.count;g<x;g+=3)a.fromBufferAttribute(t,g+0),o.fromBufferAttribute(t,g+1),c.fromBufferAttribute(t,g+2),m.subVectors(c,o),v.subVectors(a,o),m.cross(v),i.setXYZ(g+0,m.x,m.y,m.z),i.setXYZ(g+1,m.x,m.y,m.z),i.setXYZ(g+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Bn.fromBufferAttribute(e,t),Bn.normalize(),e.setXYZ(t,Bn.x,Bn.y,Bn.z)}toNonIndexed(){function e(d,h){const f=d.array,m=d.itemSize,v=d.normalized,g=new f.constructor(h.length*m);let x=0,S=0;for(let b=0,M=h.length;b<M;b++){d.isInterleavedBufferAttribute?x=h[b]*d.data.stride+d.offset:x=h[b]*m;for(let y=0;y<m;y++)g[S++]=f[x++]}return new Wi(g,m,v)}if(this.index===null)return Ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new En,i=this.index.array,a=this.attributes;for(const d in a){const h=a[d],f=e(h,i);t.setAttribute(d,f)}const o=this.morphAttributes;for(const d in o){const h=[],f=o[d];for(let m=0,v=f.length;m<v;m++){const g=f[m],x=e(g,i);h.push(x)}t.morphAttributes[d]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,h=c.length;d<h;d++){const f=c[d];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const h=this.parameters;for(const f in h)h[f]!==void 0&&(e[f]=h[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const h in i){const f=i[h];e.data.attributes[h]=f.toJSON(e.data)}const a={};let o=!1;for(const h in this.morphAttributes){const f=this.morphAttributes[h],m=[];for(let v=0,g=f.length;v<g;v++){const x=f[v];m.push(x.toJSON(e.data))}m.length>0&&(a[h]=m,o=!0)}o&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const a=e.attributes;for(const f in a){const m=a[f];this.setAttribute(f,m.clone(t))}const o=e.morphAttributes;for(const f in o){const m=[],v=o[f];for(let g=0,x=v.length;g<x;g++)m.push(v[g].clone(t));this.morphAttributes[f]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let f=0,m=c.length;f<m;f++){const v=c[f];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $S{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ah,this.updateRanges=[],this.version=0,this.uuid=ar()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let a=0,o=this.stride;a<o;a++)this.array[e+a]=t.array[i+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ar()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ar()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const si=new $;class eu{constructor(e,t,i,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)si.fromBufferAttribute(this,t),si.applyMatrix4(e),this.setXYZ(t,si.x,si.y,si.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)si.fromBufferAttribute(this,t),si.applyNormalMatrix(e),this.setXYZ(t,si.x,si.y,si.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)si.fromBufferAttribute(this,t),si.transformDirection(e),this.setXYZ(t,si.x,si.y,si.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Vi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=nn(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=nn(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nn(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nn(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nn(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Vi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Vi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Vi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Vi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array),a=nn(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this}setXYZW(e,t,i,a,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array),a=nn(a,this.array),o=nn(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=a,this.data.array[e+3]=o,this}clone(e){if(e===void 0){Qc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[a+o])}return new Wi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new eu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Qc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const a=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[a+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let jS=0;class $s extends vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jS++}),this.uuid=ar(),this.name="",this.type="Material",this.blending=Ba,this.side=gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kf,this.blendDst=Bf,this.blendEquation=ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=Wa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$g,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ma,this.stencilZFail=ma,this.stencilZPass=ma,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ct(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){Ct(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector2&&i&&i.isVector2||a&&a.isEuler&&i&&i.isEuler||a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ba&&(i.blending=this.blending),this.side!==gs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==kf&&(i.blendSrc=this.blendSrc),this.blendDst!==Bf&&(i.blendDst=this.blendDst),this.blendEquation!==ks&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Wa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$g&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ma&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ma&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ma&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(o){const c=[];for(const d in o){const h=o[d];delete h.metadata,c.push(h)}return c}if(t){const o=a(e.textures),c=a(e.images);o.length>0&&(i.textures=o),c.length>0&&(i.images=c)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ot().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ke().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ke().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const a=t.length;i=new Array(a);for(let o=0;o!==a;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ix extends $s{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ba;const Io=new $,Aa=new $,Ca=new $,Ra=new ke,Uo=new ke,rx=new un,pc=new $,Fo=new $,mc=new $,o0=new ke,mf=new ke,l0=new ke;class YS extends Gn{constructor(e=new ix){if(super(),this.isSprite=!0,this.type="Sprite",ba===void 0){ba=new En;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new $S(t,5);ba.setIndex([0,1,2,0,2,3]),ba.setAttribute("position",new eu(i,3,0,!1)),ba.setAttribute("uv",new eu(i,2,3,!1))}this.geometry=ba,this.material=e,this.center=new ke(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Wt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Aa.setFromMatrixScale(this.matrixWorld),rx.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ca.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Aa.multiplyScalar(-Ca.z);const i=this.material.rotation;let a,o;i!==0&&(o=Math.cos(i),a=Math.sin(i));const c=this.center;gc(pc.set(-.5,-.5,0),Ca,c,Aa,a,o),gc(Fo.set(.5,-.5,0),Ca,c,Aa,a,o),gc(mc.set(.5,.5,0),Ca,c,Aa,a,o),o0.set(0,0),mf.set(1,0),l0.set(1,1);let d=e.ray.intersectTriangle(pc,Fo,mc,!1,Io);if(d===null&&(gc(Fo.set(-.5,.5,0),Ca,c,Aa,a,o),mf.set(0,1),d=e.ray.intersectTriangle(pc,mc,Fo,!1,Io),d===null))return;const h=e.ray.origin.distanceTo(Io);h<e.near||h>e.far||t.push({distance:h,point:Io.clone(),uv:Mi.getInterpolation(Io,pc,Fo,mc,o0,mf,l0,new ke),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function gc(r,e,t,i,a,o){Ra.subVectors(r,t).addScalar(.5).multiply(i),a!==void 0?(Uo.x=o*Ra.x-a*Ra.y,Uo.y=a*Ra.x+o*Ra.y):Uo.copy(Ra),r.copy(e),r.x+=Uo.x,r.y+=Uo.y,r.applyMatrix4(rx)}const Tr=new $,gf=new $,vc=new $,os=new $,vf=new $,xc=new $,xf=new $;class cu{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Tr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Tr.copy(this.origin).addScaledVector(this.direction,t),Tr.distanceToSquared(e))}distanceSqToSegment(e,t,i,a){gf.copy(e).add(t).multiplyScalar(.5),vc.copy(t).sub(e).normalize(),os.copy(this.origin).sub(gf);const o=e.distanceTo(t)*.5,c=-this.direction.dot(vc),d=os.dot(this.direction),h=-os.dot(vc),f=os.lengthSq(),m=Math.abs(1-c*c);let v,g,x,S;if(m>0)if(v=c*h-d,g=c*d-h,S=o*m,v>=0)if(g>=-S)if(g<=S){const b=1/m;v*=b,g*=b,x=v*(v+c*g+2*d)+g*(c*v+g+2*h)+f}else g=o,v=Math.max(0,-(c*g+d)),x=-v*v+g*(g+2*h)+f;else g=-o,v=Math.max(0,-(c*g+d)),x=-v*v+g*(g+2*h)+f;else g<=-S?(v=Math.max(0,-(-c*o+d)),g=v>0?-o:Math.min(Math.max(-o,-h),o),x=-v*v+g*(g+2*h)+f):g<=S?(v=0,g=Math.min(Math.max(-o,-h),o),x=g*(g+2*h)+f):(v=Math.max(0,-(c*o+d)),g=v>0?o:Math.min(Math.max(-o,-h),o),x=-v*v+g*(g+2*h)+f);else g=c>0?-o:o,v=Math.max(0,-(c*g+d)),x=-v*v+g*(g+2*h)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(gf).addScaledVector(vc,g),x}intersectSphere(e,t){Tr.subVectors(e.center,this.origin);const i=Tr.dot(this.direction),a=Tr.dot(Tr)-i*i,o=e.radius*e.radius;if(a>o)return null;const c=Math.sqrt(o-a),d=i-c,h=i+c;return h<0?null:d<0?this.at(h,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,a,o,c,d,h;const f=1/this.direction.x,m=1/this.direction.y,v=1/this.direction.z,g=this.origin;return f>=0?(i=(e.min.x-g.x)*f,a=(e.max.x-g.x)*f):(i=(e.max.x-g.x)*f,a=(e.min.x-g.x)*f),m>=0?(o=(e.min.y-g.y)*m,c=(e.max.y-g.y)*m):(o=(e.max.y-g.y)*m,c=(e.min.y-g.y)*m),i>c||o>a||((o>i||isNaN(i))&&(i=o),(c<a||isNaN(a))&&(a=c),v>=0?(d=(e.min.z-g.z)*v,h=(e.max.z-g.z)*v):(d=(e.max.z-g.z)*v,h=(e.min.z-g.z)*v),i>h||d>a)||((d>i||i!==i)&&(i=d),(h<a||a!==a)&&(a=h),a<0)?null:this.at(i>=0?i:a,t)}intersectsBox(e){return this.intersectBox(e,Tr)!==null}intersectTriangle(e,t,i,a,o){vf.subVectors(t,e),xc.subVectors(i,e),xf.crossVectors(vf,xc);let c=this.direction.dot(xf),d;if(c>0){if(a)return null;d=1}else if(c<0)d=-1,c=-c;else return null;os.subVectors(this.origin,e);const h=d*this.direction.dot(xc.crossVectors(os,xc));if(h<0)return null;const f=d*this.direction.dot(vf.cross(os));if(f<0||h+f>c)return null;const m=-d*os.dot(xf);return m<0?null:this.at(m/c,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ps extends $s{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ur,this.combine=kh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const c0=new un,Ds=new cu,_c=new lu,u0=new $,yc=new $,Sc=new $,Mc=new $,_f=new $,Ec=new $,d0=new $,wc=new $;class Yn extends Gn{constructor(e=new En,t=new ps){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=a.length;o<c;o++){const d=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=o}}}}getVertexPosition(e,t){const i=this.geometry,a=i.attributes.position,o=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(o&&d){Ec.set(0,0,0);for(let h=0,f=o.length;h<f;h++){const m=d[h],v=o[h];m!==0&&(_f.fromBufferAttribute(v,e),c?Ec.addScaledVector(_f,m):Ec.addScaledVector(_f.sub(t),m))}t.add(Ec)}return t}raycast(e,t){const i=this.geometry,a=this.material,o=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),_c.copy(i.boundingSphere),_c.applyMatrix4(o),Ds.copy(e.ray).recast(e.near),!(_c.containsPoint(Ds.origin)===!1&&(Ds.intersectSphere(_c,u0)===null||Ds.origin.distanceToSquared(u0)>(e.far-e.near)**2))&&(c0.copy(o).invert(),Ds.copy(e.ray).applyMatrix4(c0),!(i.boundingBox!==null&&Ds.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ds)))}_computeIntersections(e,t,i){let a;const o=this.geometry,c=this.material,d=o.index,h=o.attributes.position,f=o.attributes.uv,m=o.attributes.uv1,v=o.attributes.normal,g=o.groups,x=o.drawRange;if(d!==null)if(Array.isArray(c))for(let S=0,b=g.length;S<b;S++){const M=g[S],y=c[M.materialIndex],N=Math.max(M.start,x.start),P=Math.min(d.count,Math.min(M.start+M.count,x.start+x.count));for(let T=N,I=P;T<I;T+=3){const L=d.getX(T),O=d.getX(T+1),E=d.getX(T+2);a=Tc(this,y,e,i,f,m,v,L,O,E),a&&(a.faceIndex=Math.floor(T/3),a.face.materialIndex=M.materialIndex,t.push(a))}}else{const S=Math.max(0,x.start),b=Math.min(d.count,x.start+x.count);for(let M=S,y=b;M<y;M+=3){const N=d.getX(M),P=d.getX(M+1),T=d.getX(M+2);a=Tc(this,c,e,i,f,m,v,N,P,T),a&&(a.faceIndex=Math.floor(M/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(c))for(let S=0,b=g.length;S<b;S++){const M=g[S],y=c[M.materialIndex],N=Math.max(M.start,x.start),P=Math.min(h.count,Math.min(M.start+M.count,x.start+x.count));for(let T=N,I=P;T<I;T+=3){const L=T,O=T+1,E=T+2;a=Tc(this,y,e,i,f,m,v,L,O,E),a&&(a.faceIndex=Math.floor(T/3),a.face.materialIndex=M.materialIndex,t.push(a))}}else{const S=Math.max(0,x.start),b=Math.min(h.count,x.start+x.count);for(let M=S,y=b;M<y;M+=3){const N=M,P=M+1,T=M+2;a=Tc(this,c,e,i,f,m,v,N,P,T),a&&(a.faceIndex=Math.floor(M/3),t.push(a))}}}}function qS(r,e,t,i,a,o,c,d){let h;if(e.side===jn?h=i.intersectTriangle(c,o,a,!0,d):h=i.intersectTriangle(a,o,c,e.side===gs,d),h===null)return null;wc.copy(d),wc.applyMatrix4(r.matrixWorld);const f=t.ray.origin.distanceTo(wc);return f<t.near||f>t.far?null:{distance:f,point:wc.clone(),object:r}}function Tc(r,e,t,i,a,o,c,d,h,f){r.getVertexPosition(d,yc),r.getVertexPosition(h,Sc),r.getVertexPosition(f,Mc);const m=qS(r,e,t,i,yc,Sc,Mc,d0);if(m){const v=new $;Mi.getBarycoord(d0,yc,Sc,Mc,v),a&&(m.uv=Mi.getInterpolatedAttribute(a,d,h,f,v,new ke)),o&&(m.uv1=Mi.getInterpolatedAttribute(o,d,h,f,v,new ke)),c&&(m.normal=Mi.getInterpolatedAttribute(c,d,h,f,v,new $),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const g={a:d,b:h,c:f,normal:new $,materialIndex:0};Mi.getNormal(yc,Sc,Mc,g.normal),m.face=g,m.barycoord=v}return m}class ZS extends Vn{constructor(e=null,t=1,i=1,a,o,c,d,h,f=$n,m=$n,v,g){super(null,c,d,h,f,m,a,o,v,g),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const yf=new $,KS=new $,JS=new It;class us{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,a){return this.normal.set(e,t,i),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const a=yf.subVectors(i,t).cross(KS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const a=e.delta(yf),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return i===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(a,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||JS.getNormalMatrix(e),a=this.coplanarPoint(yf).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Is=new lu,QS=new ke(.5,.5),bc=new $;class Kh{constructor(e=new us,t=new us,i=new us,a=new us,o=new us,c=new us){this.planes=[e,t,i,a,o,c]}set(e,t,i,a,o,c){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(i),d[3].copy(a),d[4].copy(o),d[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=nr,i=!1){const a=this.planes,o=e.elements,c=o[0],d=o[1],h=o[2],f=o[3],m=o[4],v=o[5],g=o[6],x=o[7],S=o[8],b=o[9],M=o[10],y=o[11],N=o[12],P=o[13],T=o[14],I=o[15];if(a[0].setComponents(f-c,x-m,y-S,I-N).normalize(),a[1].setComponents(f+c,x+m,y+S,I+N).normalize(),a[2].setComponents(f+d,x+v,y+b,I+P).normalize(),a[3].setComponents(f-d,x-v,y-b,I-P).normalize(),i)a[4].setComponents(h,g,M,T).normalize(),a[5].setComponents(f-h,x-g,y-M,I-T).normalize();else if(a[4].setComponents(f-h,x-g,y-M,I-T).normalize(),t===nr)a[5].setComponents(f+h,x+g,y+M,I+T).normalize();else if(t===Ko)a[5].setComponents(h,g,M,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Is)}intersectsSprite(e){Is.center.set(0,0,0);const t=QS.distanceTo(e.center);return Is.radius=.7071067811865476+t,Is.applyMatrix4(e.matrixWorld),this.intersectsSphere(Is)}intersectsSphere(e){const t=this.planes,i=e.center,a=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const a=t[i];if(bc.x=a.normal.x>0?e.max.x:e.min.x,bc.y=a.normal.y>0?e.max.y:e.min.y,bc.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(bc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ar extends $s{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const tu=new $,nu=new $,f0=new un,Oo=new cu,Ac=new lu,Sf=new $,h0=new $;class Os extends Gn{constructor(e=new En,t=new Ar){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let a=1,o=t.count;a<o;a++)tu.fromBufferAttribute(t,a-1),nu.fromBufferAttribute(t,a),i[a]=i[a-1],i[a]+=tu.distanceTo(nu);e.setAttribute("lineDistance",new wn(i,1))}else Ct("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,a=this.matrixWorld,o=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ac.copy(i.boundingSphere),Ac.applyMatrix4(a),Ac.radius+=o,e.ray.intersectsSphere(Ac)===!1)return;f0.copy(a).invert(),Oo.copy(e.ray).applyMatrix4(f0);const d=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,f=this.isLineSegments?2:1,m=i.index,g=i.attributes.position;if(m!==null){const x=Math.max(0,c.start),S=Math.min(m.count,c.start+c.count);for(let b=x,M=S-1;b<M;b+=f){const y=m.getX(b),N=m.getX(b+1),P=Cc(this,e,Oo,h,y,N,b);P&&t.push(P)}if(this.isLineLoop){const b=m.getX(S-1),M=m.getX(x),y=Cc(this,e,Oo,h,b,M,S-1);y&&t.push(y)}}else{const x=Math.max(0,c.start),S=Math.min(g.count,c.start+c.count);for(let b=x,M=S-1;b<M;b+=f){const y=Cc(this,e,Oo,h,b,b+1,b);y&&t.push(y)}if(this.isLineLoop){const b=Cc(this,e,Oo,h,S-1,x,S-1);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const a=t[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=a.length;o<c;o++){const d=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=o}}}}}function Cc(r,e,t,i,a,o,c){const d=r.geometry.attributes.position;if(tu.fromBufferAttribute(d,a),nu.fromBufferAttribute(d,o),t.distanceSqToSegment(tu,nu,Sf,h0)>i)return;Sf.applyMatrix4(r.matrixWorld);const f=e.ray.origin.distanceTo(Sf);if(!(f<e.near||f>e.far))return{distance:f,point:h0.clone().applyMatrix4(r.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:r}}const p0=new $,m0=new $;class sx extends Os{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let a=0,o=t.count;a<o;a+=2)p0.fromBufferAttribute(t,a),m0.fromBufferAttribute(t,a+1),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+p0.distanceTo(m0);e.setAttribute("lineDistance",new wn(i,1))}else Ct("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class eM extends Vn{constructor(e,t,i,a,o=Hn,c=Hn,d,h,f){super(e,t,i,a,o,c,d,h,f),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const m=this;function v(){m.needsUpdate=!0,m._requestVideoFrameCallbackId=e.requestVideoFrameCallback(v)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(v))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class ax extends Vn{constructor(e=[],t=Gs,i,a,o,c,d,h,f,m){super(e,t,i,a,o,c,d,h,f,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tM extends Vn{constructor(e,t,i,a,o,c,d,h,f){super(e,t,i,a,o,c,d,h,f),this.isCanvasTexture=!0,this.needsUpdate=!0}}class $a extends Vn{constructor(e,t,i=lr,a,o,c,d=$n,h=$n,f,m=Ir,v=1){if(m!==Ir&&m!==Vs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:v};super(g,a,o,c,d,h,m,i,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class nM extends $a{constructor(e,t=lr,i=Gs,a,o,c=$n,d=$n,h,f=Ir){const m={width:e,height:e,depth:1},v=[m,m,m,m,m,m];super(e,e,t,i,a,o,c,d,h,f),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ox extends Vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class rl extends En{constructor(e=1,t=1,i=1,a=1,o=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:a,heightSegments:o,depthSegments:c};const d=this;a=Math.floor(a),o=Math.floor(o),c=Math.floor(c);const h=[],f=[],m=[],v=[];let g=0,x=0;S("z","y","x",-1,-1,i,t,e,c,o,0),S("z","y","x",1,-1,i,t,-e,c,o,1),S("x","z","y",1,1,e,i,t,a,c,2),S("x","z","y",1,-1,e,i,-t,a,c,3),S("x","y","z",1,-1,e,t,i,a,o,4),S("x","y","z",-1,-1,e,t,-i,a,o,5),this.setIndex(h),this.setAttribute("position",new wn(f,3)),this.setAttribute("normal",new wn(m,3)),this.setAttribute("uv",new wn(v,2));function S(b,M,y,N,P,T,I,L,O,E,R){const z=T/O,B=I/E,j=T/2,G=I/2,de=L/2,W=O+1,ae=E+1;let Q=0,q=0;const ie=new $;for(let ee=0;ee<ae;ee++){const k=ee*B-G;for(let J=0;J<W;J++){const Pe=J*z-j;ie[b]=Pe*N,ie[M]=k*P,ie[y]=de,f.push(ie.x,ie.y,ie.z),ie[b]=0,ie[M]=0,ie[y]=L>0?1:-1,m.push(ie.x,ie.y,ie.z),v.push(J/O),v.push(1-ee/E),Q+=1}}for(let ee=0;ee<E;ee++)for(let k=0;k<O;k++){const J=g+k+W*ee,Pe=g+k+W*(ee+1),oe=g+(k+1)+W*(ee+1),ve=g+(k+1)+W*ee;h.push(J,Pe,ve),h.push(Pe,oe,ve),q+=6}d.addGroup(x,q,R),x+=q,g+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}const Rc=new $,Pc=new $,Mf=new $,Lc=new Mi;class iM extends En{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const a=Math.pow(10,4),o=Math.cos(Va*t),c=e.getIndex(),d=e.getAttribute("position"),h=c?c.count:d.count,f=[0,0,0],m=["a","b","c"],v=new Array(3),g={},x=[];for(let S=0;S<h;S+=3){c?(f[0]=c.getX(S),f[1]=c.getX(S+1),f[2]=c.getX(S+2)):(f[0]=S,f[1]=S+1,f[2]=S+2);const{a:b,b:M,c:y}=Lc;if(b.fromBufferAttribute(d,f[0]),M.fromBufferAttribute(d,f[1]),y.fromBufferAttribute(d,f[2]),Lc.getNormal(Mf),v[0]=`${Math.round(b.x*a)},${Math.round(b.y*a)},${Math.round(b.z*a)}`,v[1]=`${Math.round(M.x*a)},${Math.round(M.y*a)},${Math.round(M.z*a)}`,v[2]=`${Math.round(y.x*a)},${Math.round(y.y*a)},${Math.round(y.z*a)}`,!(v[0]===v[1]||v[1]===v[2]||v[2]===v[0]))for(let N=0;N<3;N++){const P=(N+1)%3,T=v[N],I=v[P],L=Lc[m[N]],O=Lc[m[P]],E=`${T}_${I}`,R=`${I}_${T}`;R in g&&g[R]?(Mf.dot(g[R].normal)<=o&&(x.push(L.x,L.y,L.z),x.push(O.x,O.y,O.z)),g[R]=null):E in g||(g[E]={index0:f[N],index1:f[P],normal:Mf.clone()})}}for(const S in g)if(g[S]){const{index0:b,index1:M}=g[S];Rc.fromBufferAttribute(d,b),Pc.fromBufferAttribute(d,M),x.push(Rc.x,Rc.y,Rc.z),x.push(Pc.x,Pc.y,Pc.z)}this.setAttribute("position",new wn(x,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class dr{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ct("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,a=this.getPoint(0),o=0;t.push(0);for(let c=1;c<=e;c++)i=this.getPoint(c/e),o+=i.distanceTo(a),t.push(o),a=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let a=0;const o=i.length;let c;t?c=t:c=e*i[o-1];let d=0,h=o-1,f;for(;d<=h;)if(a=Math.floor(d+(h-d)/2),f=i[a]-c,f<0)d=a+1;else if(f>0)h=a-1;else{h=a;break}if(a=h,i[a]===c)return a/(o-1);const m=i[a],g=i[a+1]-m,x=(c-m)/g;return(a+x)/(o-1)}getTangent(e,t){let a=e-1e-4,o=e+1e-4;a<0&&(a=0),o>1&&(o=1);const c=this.getPoint(a),d=this.getPoint(o),h=t||(c.isVector2?new ke:new $);return h.copy(d).sub(c).normalize(),h}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new $,a=[],o=[],c=[],d=new $,h=new un;for(let x=0;x<=e;x++){const S=x/e;a[x]=this.getTangentAt(S,new $)}o[0]=new $,c[0]=new $;let f=Number.MAX_VALUE;const m=Math.abs(a[0].x),v=Math.abs(a[0].y),g=Math.abs(a[0].z);m<=f&&(f=m,i.set(1,0,0)),v<=f&&(f=v,i.set(0,1,0)),g<=f&&i.set(0,0,1),d.crossVectors(a[0],i).normalize(),o[0].crossVectors(a[0],d),c[0].crossVectors(a[0],o[0]);for(let x=1;x<=e;x++){if(o[x]=o[x-1].clone(),c[x]=c[x-1].clone(),d.crossVectors(a[x-1],a[x]),d.length()>Number.EPSILON){d.normalize();const S=Math.acos(kt(a[x-1].dot(a[x]),-1,1));o[x].applyMatrix4(h.makeRotationAxis(d,S))}c[x].crossVectors(a[x],o[x])}if(t===!0){let x=Math.acos(kt(o[0].dot(o[e]),-1,1));x/=e,a[0].dot(d.crossVectors(o[0],o[e]))>0&&(x=-x);for(let S=1;S<=e;S++)o[S].applyMatrix4(h.makeRotationAxis(a[S],x*S)),c[S].crossVectors(a[S],o[S])}return{tangents:a,normals:o,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Jh extends dr{constructor(e=0,t=0,i=1,a=1,o=0,c=Math.PI*2,d=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=a,this.aStartAngle=o,this.aEndAngle=c,this.aClockwise=d,this.aRotation=h}getPoint(e,t=new ke){const i=t,a=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const c=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=a;for(;o>a;)o-=a;o<Number.EPSILON&&(c?o=0:o=a),this.aClockwise===!0&&!c&&(o===a?o=-a:o=o-a);const d=this.aStartAngle+e*o;let h=this.aX+this.xRadius*Math.cos(d),f=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const m=Math.cos(this.aRotation),v=Math.sin(this.aRotation),g=h-this.aX,x=f-this.aY;h=g*m-x*v+this.aX,f=g*v+x*m+this.aY}return i.set(h,f)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class rM extends Jh{constructor(e,t,i,a,o,c){super(e,t,i,i,a,o,c),this.isArcCurve=!0,this.type="ArcCurve"}}function Qh(){let r=0,e=0,t=0,i=0;function a(o,c,d,h){r=o,e=d,t=-3*o+3*c-2*d-h,i=2*o-2*c+d+h}return{initCatmullRom:function(o,c,d,h,f){a(c,d,f*(d-o),f*(h-c))},initNonuniformCatmullRom:function(o,c,d,h,f,m,v){let g=(c-o)/f-(d-o)/(f+m)+(d-c)/m,x=(d-c)/m-(h-c)/(m+v)+(h-d)/v;g*=m,x*=m,a(c,d,g,x)},calc:function(o){const c=o*o,d=c*o;return r+e*o+t*c+i*d}}}const g0=new $,v0=new $,Ef=new Qh,wf=new Qh,Tf=new Qh;class sM extends dr{constructor(e=[],t=!1,i="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=a}getPoint(e,t=new $){const i=t,a=this.points,o=a.length,c=(o-(this.closed?0:1))*e;let d=Math.floor(c),h=c-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/o)+1)*o:h===0&&d===o-1&&(d=o-2,h=1);let f,m;this.closed||d>0?f=a[(d-1)%o]:(v0.subVectors(a[0],a[1]).add(a[0]),f=v0);const v=a[d%o],g=a[(d+1)%o];if(this.closed||d+2<o?m=a[(d+2)%o]:(g0.subVectors(a[o-1],a[o-2]).add(a[o-1]),m=g0),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let S=Math.pow(f.distanceToSquared(v),x),b=Math.pow(v.distanceToSquared(g),x),M=Math.pow(g.distanceToSquared(m),x);b<1e-4&&(b=1),S<1e-4&&(S=b),M<1e-4&&(M=b),Ef.initNonuniformCatmullRom(f.x,v.x,g.x,m.x,S,b,M),wf.initNonuniformCatmullRom(f.y,v.y,g.y,m.y,S,b,M),Tf.initNonuniformCatmullRom(f.z,v.z,g.z,m.z,S,b,M)}else this.curveType==="catmullrom"&&(Ef.initCatmullRom(f.x,v.x,g.x,m.x,this.tension),wf.initCatmullRom(f.y,v.y,g.y,m.y,this.tension),Tf.initCatmullRom(f.z,v.z,g.z,m.z,this.tension));return i.set(Ef.calc(h),wf.calc(h),Tf.calc(h)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(new $().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function x0(r,e,t,i,a){const o=(i-e)*.5,c=(a-t)*.5,d=r*r,h=r*d;return(2*t-2*i+o+c)*h+(-3*t+3*i-2*o-c)*d+o*r+t}function aM(r,e){const t=1-r;return t*t*e}function oM(r,e){return 2*(1-r)*r*e}function lM(r,e){return r*r*e}function jo(r,e,t,i){return aM(r,e)+oM(r,t)+lM(r,i)}function cM(r,e){const t=1-r;return t*t*t*e}function uM(r,e){const t=1-r;return 3*t*t*r*e}function dM(r,e){return 3*(1-r)*r*r*e}function fM(r,e){return r*r*r*e}function Yo(r,e,t,i,a){return cM(r,e)+uM(r,t)+dM(r,i)+fM(r,a)}class lx extends dr{constructor(e=new ke,t=new ke,i=new ke,a=new ke){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=a}getPoint(e,t=new ke){const i=t,a=this.v0,o=this.v1,c=this.v2,d=this.v3;return i.set(Yo(e,a.x,o.x,c.x,d.x),Yo(e,a.y,o.y,c.y,d.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class hM extends dr{constructor(e=new $,t=new $,i=new $,a=new $){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=a}getPoint(e,t=new $){const i=t,a=this.v0,o=this.v1,c=this.v2,d=this.v3;return i.set(Yo(e,a.x,o.x,c.x,d.x),Yo(e,a.y,o.y,c.y,d.y),Yo(e,a.z,o.z,c.z,d.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class cx extends dr{constructor(e=new ke,t=new ke){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ke){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ke){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pM extends dr{constructor(e=new $,t=new $){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new $){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new $){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ux extends dr{constructor(e=new ke,t=new ke,i=new ke){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ke){const i=t,a=this.v0,o=this.v1,c=this.v2;return i.set(jo(e,a.x,o.x,c.x),jo(e,a.y,o.y,c.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mM extends dr{constructor(e=new $,t=new $,i=new $){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new $){const i=t,a=this.v0,o=this.v1,c=this.v2;return i.set(jo(e,a.x,o.x,c.x),jo(e,a.y,o.y,c.y),jo(e,a.z,o.z,c.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class dx extends dr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ke){const i=t,a=this.points,o=(a.length-1)*e,c=Math.floor(o),d=o-c,h=a[c===0?c:c-1],f=a[c],m=a[c>a.length-2?a.length-1:c+1],v=a[c>a.length-3?a.length-1:c+2];return i.set(x0(d,h.x,f.x,m.x,v.x),x0(d,h.y,f.y,m.y,v.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const a=this.points[t];e.points.push(a.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const a=e.points[t];this.points.push(new ke().fromArray(a))}return this}}var Ch=Object.freeze({__proto__:null,ArcCurve:rM,CatmullRomCurve3:sM,CubicBezierCurve:lx,CubicBezierCurve3:hM,EllipseCurve:Jh,LineCurve:cx,LineCurve3:pM,QuadraticBezierCurve:ux,QuadraticBezierCurve3:mM,SplineCurve:dx});class gM extends dr{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ch[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),a=this.getCurveLengths();let o=0;for(;o<a.length;){if(a[o]>=i){const c=a[o]-i,d=this.curves[o],h=d.getLength(),f=h===0?0:1-c/h;return d.getPointAt(f,t)}o++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,a=this.curves.length;i<a;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let a=0,o=this.curves;a<o.length;a++){const c=o[a],d=c.isEllipseCurve?e*2:c.isLineCurve||c.isLineCurve3?1:c.isSplineCurve?e*c.points.length:e,h=c.getPoints(d);for(let f=0;f<h.length;f++){const m=h[f];i&&i.equals(m)||(t.push(m),i=m)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const a=e.curves[t];this.curves.push(a.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const a=this.curves[t];e.curves.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const a=e.curves[t];this.curves.push(new Ch[a.type]().fromJSON(a))}return this}}class _0 extends gM{constructor(e){super(),this.type="Path",this.currentPoint=new ke,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new cx(this.currentPoint.clone(),new ke(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,a){const o=new ux(this.currentPoint.clone(),new ke(e,t),new ke(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}bezierCurveTo(e,t,i,a,o,c){const d=new lx(this.currentPoint.clone(),new ke(e,t),new ke(i,a),new ke(o,c));return this.curves.push(d),this.currentPoint.set(o,c),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new dx(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,a,o,c){const d=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(e+d,t+h,i,a,o,c),this}absarc(e,t,i,a,o,c){return this.absellipse(e,t,i,i,a,o,c),this}ellipse(e,t,i,a,o,c,d,h){const f=this.currentPoint.x,m=this.currentPoint.y;return this.absellipse(e+f,t+m,i,a,o,c,d,h),this}absellipse(e,t,i,a,o,c,d,h){const f=new Jh(e,t,i,a,o,c,d,h);if(this.curves.length>0){const v=f.getPoint(0);v.equals(this.currentPoint)||this.lineTo(v.x,v.y)}this.curves.push(f);const m=f.getPoint(1);return this.currentPoint.copy(m),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ep extends _0{constructor(e){super(e),this.uuid=ar(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,a=this.holes.length;i<a;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const a=e.holes[t];this.holes.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const a=this.holes[t];e.holes.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const a=e.holes[t];this.holes.push(new _0().fromJSON(a))}return this}}function vM(r,e,t=2){const i=e&&e.length,a=i?e[0]*t:r.length;let o=fx(r,0,a,t,!0);const c=[];if(!o||o.next===o.prev)return c;let d,h,f;if(i&&(o=MM(r,e,o,t)),r.length>80*t){d=r[0],h=r[1];let m=d,v=h;for(let g=t;g<a;g+=t){const x=r[g],S=r[g+1];x<d&&(d=x),S<h&&(h=S),x>m&&(m=x),S>v&&(v=S)}f=Math.max(m-d,v-h),f=f!==0?32767/f:0}return el(o,c,t,d,h,f,0),c}function fx(r,e,t,i,a){let o;if(a===DM(r,e,t,i)>0)for(let c=e;c<t;c+=i)o=y0(c/i|0,r[c],r[c+1],o);else for(let c=t-i;c>=e;c-=i)o=y0(c/i|0,r[c],r[c+1],o);return o&&ja(o,o.next)&&(nl(o),o=o.next),o}function Xs(r,e){if(!r)return r;e||(e=r);let t=r,i;do if(i=!1,!t.steiner&&(ja(t,t.next)||Sn(t.prev,t,t.next)===0)){if(nl(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function el(r,e,t,i,a,o,c){if(!r)return;!c&&o&&AM(r,i,a,o);let d=r;for(;r.prev!==r.next;){const h=r.prev,f=r.next;if(o?_M(r,i,a,o):xM(r)){e.push(h.i,r.i,f.i),nl(r),r=f.next,d=f.next;continue}if(r=f,r===d){c?c===1?(r=yM(Xs(r),e),el(r,e,t,i,a,o,2)):c===2&&SM(r,e,t,i,a,o):el(Xs(r),e,t,i,a,o,1);break}}}function xM(r){const e=r.prev,t=r,i=r.next;if(Sn(e,t,i)>=0)return!1;const a=e.x,o=t.x,c=i.x,d=e.y,h=t.y,f=i.y,m=Math.min(a,o,c),v=Math.min(d,h,f),g=Math.max(a,o,c),x=Math.max(d,h,f);let S=i.next;for(;S!==e;){if(S.x>=m&&S.x<=g&&S.y>=v&&S.y<=x&&Wo(a,d,o,h,c,f,S.x,S.y)&&Sn(S.prev,S,S.next)>=0)return!1;S=S.next}return!0}function _M(r,e,t,i){const a=r.prev,o=r,c=r.next;if(Sn(a,o,c)>=0)return!1;const d=a.x,h=o.x,f=c.x,m=a.y,v=o.y,g=c.y,x=Math.min(d,h,f),S=Math.min(m,v,g),b=Math.max(d,h,f),M=Math.max(m,v,g),y=Rh(x,S,e,t,i),N=Rh(b,M,e,t,i);let P=r.prevZ,T=r.nextZ;for(;P&&P.z>=y&&T&&T.z<=N;){if(P.x>=x&&P.x<=b&&P.y>=S&&P.y<=M&&P!==a&&P!==c&&Wo(d,m,h,v,f,g,P.x,P.y)&&Sn(P.prev,P,P.next)>=0||(P=P.prevZ,T.x>=x&&T.x<=b&&T.y>=S&&T.y<=M&&T!==a&&T!==c&&Wo(d,m,h,v,f,g,T.x,T.y)&&Sn(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;P&&P.z>=y;){if(P.x>=x&&P.x<=b&&P.y>=S&&P.y<=M&&P!==a&&P!==c&&Wo(d,m,h,v,f,g,P.x,P.y)&&Sn(P.prev,P,P.next)>=0)return!1;P=P.prevZ}for(;T&&T.z<=N;){if(T.x>=x&&T.x<=b&&T.y>=S&&T.y<=M&&T!==a&&T!==c&&Wo(d,m,h,v,f,g,T.x,T.y)&&Sn(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function yM(r,e){let t=r;do{const i=t.prev,a=t.next.next;!ja(i,a)&&px(i,t,t.next,a)&&tl(i,a)&&tl(a,i)&&(e.push(i.i,t.i,a.i),nl(t),nl(t.next),t=r=a),t=t.next}while(t!==r);return Xs(t)}function SM(r,e,t,i,a,o){let c=r;do{let d=c.next.next;for(;d!==c.prev;){if(c.i!==d.i&&PM(c,d)){let h=mx(c,d);c=Xs(c,c.next),h=Xs(h,h.next),el(c,e,t,i,a,o,0),el(h,e,t,i,a,o,0);return}d=d.next}c=c.next}while(c!==r)}function MM(r,e,t,i){const a=[];for(let o=0,c=e.length;o<c;o++){const d=e[o]*i,h=o<c-1?e[o+1]*i:r.length,f=fx(r,d,h,i,!1);f===f.next&&(f.steiner=!0),a.push(RM(f))}a.sort(EM);for(let o=0;o<a.length;o++)t=wM(a[o],t);return t}function EM(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0)){const i=(r.next.y-r.y)/(r.next.x-r.x),a=(e.next.y-e.y)/(e.next.x-e.x);t=i-a}return t}function wM(r,e){const t=TM(r,e);if(!t)return e;const i=mx(t,r);return Xs(i,i.next),Xs(t,t.next)}function TM(r,e){let t=e;const i=r.x,a=r.y;let o=-1/0,c;if(ja(r,t))return t;do{if(ja(r,t.next))return t.next;if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const v=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(v<=i&&v>o&&(o=v,c=t.x<t.next.x?t:t.next,v===i))return c}t=t.next}while(t!==e);if(!c)return null;const d=c,h=c.x,f=c.y;let m=1/0;t=c;do{if(i>=t.x&&t.x>=h&&i!==t.x&&hx(a<f?i:o,a,h,f,a<f?o:i,a,t.x,t.y)){const v=Math.abs(a-t.y)/(i-t.x);tl(t,r)&&(v<m||v===m&&(t.x>c.x||t.x===c.x&&bM(c,t)))&&(c=t,m=v)}t=t.next}while(t!==d);return c}function bM(r,e){return Sn(r.prev,r,e.prev)<0&&Sn(e.next,r,r.next)<0}function AM(r,e,t,i){let a=r;do a.z===0&&(a.z=Rh(a.x,a.y,e,t,i)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==r);a.prevZ.nextZ=null,a.prevZ=null,CM(a)}function CM(r){let e,t=1;do{let i=r,a;r=null;let o=null;for(e=0;i;){e++;let c=i,d=0;for(let f=0;f<t&&(d++,c=c.nextZ,!!c);f++);let h=t;for(;d>0||h>0&&c;)d!==0&&(h===0||!c||i.z<=c.z)?(a=i,i=i.nextZ,d--):(a=c,c=c.nextZ,h--),o?o.nextZ=a:r=a,a.prevZ=o,o=a;i=c}o.nextZ=null,t*=2}while(e>1);return r}function Rh(r,e,t,i,a){return r=(r-t)*a|0,e=(e-i)*a|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function RM(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function hx(r,e,t,i,a,o,c,d){return(a-c)*(e-d)>=(r-c)*(o-d)&&(r-c)*(i-d)>=(t-c)*(e-d)&&(t-c)*(o-d)>=(a-c)*(i-d)}function Wo(r,e,t,i,a,o,c,d){return!(r===c&&e===d)&&hx(r,e,t,i,a,o,c,d)}function PM(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!LM(r,e)&&(tl(r,e)&&tl(e,r)&&NM(r,e)&&(Sn(r.prev,r,e.prev)||Sn(r,e.prev,e))||ja(r,e)&&Sn(r.prev,r,r.next)>0&&Sn(e.prev,e,e.next)>0)}function Sn(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function ja(r,e){return r.x===e.x&&r.y===e.y}function px(r,e,t,i){const a=Dc(Sn(r,e,t)),o=Dc(Sn(r,e,i)),c=Dc(Sn(t,i,r)),d=Dc(Sn(t,i,e));return!!(a!==o&&c!==d||a===0&&Nc(r,t,e)||o===0&&Nc(r,i,e)||c===0&&Nc(t,r,i)||d===0&&Nc(t,e,i))}function Nc(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Dc(r){return r>0?1:r<0?-1:0}function LM(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&px(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function tl(r,e){return Sn(r.prev,r,r.next)<0?Sn(r,e,r.next)>=0&&Sn(r,r.prev,e)>=0:Sn(r,e,r.prev)<0||Sn(r,r.next,e)<0}function NM(r,e){let t=r,i=!1;const a=(r.x+e.x)/2,o=(r.y+e.y)/2;do t.y>o!=t.next.y>o&&t.next.y!==t.y&&a<(t.next.x-t.x)*(o-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==r);return i}function mx(r,e){const t=Ph(r.i,r.x,r.y),i=Ph(e.i,e.x,e.y),a=r.next,o=e.prev;return r.next=e,e.prev=r,t.next=a,a.prev=t,i.next=t,t.prev=i,o.next=i,i.prev=o,i}function y0(r,e,t,i){const a=Ph(r,e,t);return i?(a.next=i.next,a.prev=i,i.next.prev=a,i.next=a):(a.prev=a,a.next=a),a}function nl(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Ph(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function DM(r,e,t,i){let a=0;for(let o=e,c=t-i;o<t;o+=i)a+=(r[c]-r[o])*(r[o+1]+r[c+1]),c=o;return a}class IM{static triangulate(e,t,i=2){return vM(e,t,i)}}class Rr{static area(e){const t=e.length;let i=0;for(let a=t-1,o=0;o<t;a=o++)i+=e[a].x*e[o].y-e[o].x*e[a].y;return i*.5}static isClockWise(e){return Rr.area(e)<0}static triangulateShape(e,t){const i=[],a=[],o=[];S0(e),M0(i,e);let c=e.length;t.forEach(S0);for(let h=0;h<t.length;h++)a.push(c),c+=t[h].length,M0(i,t[h]);const d=IM.triangulate(i,a);for(let h=0;h<d.length;h+=3)o.push(d.slice(h,h+3));return o}}function S0(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function M0(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class tp extends En{constructor(e=new ep([new ke(.5,.5),new ke(-.5,.5),new ke(-.5,-.5),new ke(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,a=[],o=[];for(let d=0,h=e.length;d<h;d++){const f=e[d];c(f)}this.setAttribute("position",new wn(a,3)),this.setAttribute("uv",new wn(o,2)),this.computeVertexNormals();function c(d){const h=[],f=t.curveSegments!==void 0?t.curveSegments:12,m=t.steps!==void 0?t.steps:1,v=t.depth!==void 0?t.depth:1;let g=t.bevelEnabled!==void 0?t.bevelEnabled:!0,x=t.bevelThickness!==void 0?t.bevelThickness:.2,S=t.bevelSize!==void 0?t.bevelSize:x-.1,b=t.bevelOffset!==void 0?t.bevelOffset:0,M=t.bevelSegments!==void 0?t.bevelSegments:3;const y=t.extrudePath,N=t.UVGenerator!==void 0?t.UVGenerator:UM;let P,T=!1,I,L,O,E;if(y){P=y.getSpacedPoints(m),T=!0,g=!1;const we=y.isCatmullRomCurve3?y.closed:!1;I=y.computeFrenetFrames(m,we),L=new $,O=new $,E=new $}g||(M=0,x=0,S=0,b=0);const R=d.extractPoints(f);let z=R.shape;const B=R.holes;if(!Rr.isClockWise(z)){z=z.reverse();for(let we=0,Le=B.length;we<Le;we++){const De=B[we];Rr.isClockWise(De)&&(B[we]=De.reverse())}}function G(we){const De=10000000000000001e-36;let Qe=we[0];for(let je=1;je<=we.length;je++){const vt=je%we.length,st=we[vt],_t=st.x-Qe.x,Et=st.y-Qe.y,X=_t*_t+Et*Et,Bt=Math.max(Math.abs(st.x),Math.abs(st.y),Math.abs(Qe.x),Math.abs(Qe.y)),Dt=De*Bt*Bt;if(X<=Dt){we.splice(vt,1),je--;continue}Qe=st}}G(z),B.forEach(G);const de=B.length,W=z;for(let we=0;we<de;we++){const Le=B[we];z=z.concat(Le)}function ae(we,Le,De){return Le||Wt("ExtrudeGeometry: vec does not exist"),we.clone().addScaledVector(Le,De)}const Q=z.length;function q(we,Le,De){let Qe,je,vt;const st=we.x-Le.x,_t=we.y-Le.y,Et=De.x-we.x,X=De.y-we.y,Bt=st*st+_t*_t,Dt=st*X-_t*Et;if(Math.abs(Dt)>Number.EPSILON){const F=Math.sqrt(Bt),w=Math.sqrt(Et*Et+X*X),re=Le.x-_t/F,ue=Le.y+st/F,Me=De.x-X/w,Oe=De.y+Et/w,ze=((Me-re)*X-(Oe-ue)*Et)/(st*X-_t*Et);Qe=re+st*ze-we.x,je=ue+_t*ze-we.y;const U=Qe*Qe+je*je;if(U<=2)return new ke(Qe,je);vt=Math.sqrt(U/2)}else{let F=!1;st>Number.EPSILON?Et>Number.EPSILON&&(F=!0):st<-Number.EPSILON?Et<-Number.EPSILON&&(F=!0):Math.sign(_t)===Math.sign(X)&&(F=!0),F?(Qe=-_t,je=st,vt=Math.sqrt(Bt)):(Qe=st,je=_t,vt=Math.sqrt(Bt/2))}return new ke(Qe/vt,je/vt)}const ie=[];for(let we=0,Le=W.length,De=Le-1,Qe=we+1;we<Le;we++,De++,Qe++)De===Le&&(De=0),Qe===Le&&(Qe=0),ie[we]=q(W[we],W[De],W[Qe]);const ee=[];let k,J=ie.concat();for(let we=0,Le=de;we<Le;we++){const De=B[we];k=[];for(let Qe=0,je=De.length,vt=je-1,st=Qe+1;Qe<je;Qe++,vt++,st++)vt===je&&(vt=0),st===je&&(st=0),k[Qe]=q(De[Qe],De[vt],De[st]);ee.push(k),J=J.concat(k)}let Pe;if(M===0)Pe=Rr.triangulateShape(W,B);else{const we=[],Le=[];for(let De=0;De<M;De++){const Qe=De/M,je=x*Math.cos(Qe*Math.PI/2),vt=S*Math.sin(Qe*Math.PI/2)+b;for(let st=0,_t=W.length;st<_t;st++){const Et=ae(W[st],ie[st],vt);ce(Et.x,Et.y,-je),Qe===0&&we.push(Et)}for(let st=0,_t=de;st<_t;st++){const Et=B[st];k=ee[st];const X=[];for(let Bt=0,Dt=Et.length;Bt<Dt;Bt++){const F=ae(Et[Bt],k[Bt],vt);ce(F.x,F.y,-je),Qe===0&&X.push(F)}Qe===0&&Le.push(X)}}Pe=Rr.triangulateShape(we,Le)}const oe=Pe.length,ve=S+b;for(let we=0;we<Q;we++){const Le=g?ae(z[we],J[we],ve):z[we];T?(O.copy(I.normals[0]).multiplyScalar(Le.x),L.copy(I.binormals[0]).multiplyScalar(Le.y),E.copy(P[0]).add(O).add(L),ce(E.x,E.y,E.z)):ce(Le.x,Le.y,0)}for(let we=1;we<=m;we++)for(let Le=0;Le<Q;Le++){const De=g?ae(z[Le],J[Le],ve):z[Le];T?(O.copy(I.normals[we]).multiplyScalar(De.x),L.copy(I.binormals[we]).multiplyScalar(De.y),E.copy(P[we]).add(O).add(L),ce(E.x,E.y,E.z)):ce(De.x,De.y,v/m*we)}for(let we=M-1;we>=0;we--){const Le=we/M,De=x*Math.cos(Le*Math.PI/2),Qe=S*Math.sin(Le*Math.PI/2)+b;for(let je=0,vt=W.length;je<vt;je++){const st=ae(W[je],ie[je],Qe);ce(st.x,st.y,v+De)}for(let je=0,vt=B.length;je<vt;je++){const st=B[je];k=ee[je];for(let _t=0,Et=st.length;_t<Et;_t++){const X=ae(st[_t],k[_t],Qe);T?ce(X.x,X.y+P[m-1].y,P[m-1].x+De):ce(X.x,X.y,v+De)}}}K(),xe();function K(){const we=a.length/3;if(g){let Le=0,De=Q*Le;for(let Qe=0;Qe<oe;Qe++){const je=Pe[Qe];be(je[2]+De,je[1]+De,je[0]+De)}Le=m+M*2,De=Q*Le;for(let Qe=0;Qe<oe;Qe++){const je=Pe[Qe];be(je[0]+De,je[1]+De,je[2]+De)}}else{for(let Le=0;Le<oe;Le++){const De=Pe[Le];be(De[2],De[1],De[0])}for(let Le=0;Le<oe;Le++){const De=Pe[Le];be(De[0]+Q*m,De[1]+Q*m,De[2]+Q*m)}}i.addGroup(we,a.length/3-we,0)}function xe(){const we=a.length/3;let Le=0;ge(W,Le),Le+=W.length;for(let De=0,Qe=B.length;De<Qe;De++){const je=B[De];ge(je,Le),Le+=je.length}i.addGroup(we,a.length/3-we,1)}function ge(we,Le){let De=we.length;for(;--De>=0;){const Qe=De;let je=De-1;je<0&&(je=we.length-1);for(let vt=0,st=m+M*2;vt<st;vt++){const _t=Q*vt,Et=Q*(vt+1),X=Le+Qe+_t,Bt=Le+je+_t,Dt=Le+je+Et,F=Le+Qe+Et;et(X,Bt,Dt,F)}}}function ce(we,Le,De){h.push(we),h.push(Le),h.push(De)}function be(we,Le,De){Mt(we),Mt(Le),Mt(De);const Qe=a.length/3,je=N.generateTopUV(i,a,Qe-3,Qe-2,Qe-1);Ge(je[0]),Ge(je[1]),Ge(je[2])}function et(we,Le,De,Qe){Mt(we),Mt(Le),Mt(Qe),Mt(Le),Mt(De),Mt(Qe);const je=a.length/3,vt=N.generateSideWallUV(i,a,je-6,je-3,je-2,je-1);Ge(vt[0]),Ge(vt[1]),Ge(vt[3]),Ge(vt[1]),Ge(vt[2]),Ge(vt[3])}function Mt(we){a.push(h[we*3+0]),a.push(h[we*3+1]),a.push(h[we*3+2])}function Ge(we){o.push(we.x),o.push(we.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return FM(t,i,e)}static fromJSON(e,t){const i=[];for(let o=0,c=e.shapes.length;o<c;o++){const d=t[e.shapes[o]];i.push(d)}const a=e.options.extrudePath;return a!==void 0&&(e.options.extrudePath=new Ch[a.type]().fromJSON(a)),new tp(i,e.options)}}const UM={generateTopUV:function(r,e,t,i,a){const o=e[t*3],c=e[t*3+1],d=e[i*3],h=e[i*3+1],f=e[a*3],m=e[a*3+1];return[new ke(o,c),new ke(d,h),new ke(f,m)]},generateSideWallUV:function(r,e,t,i,a,o){const c=e[t*3],d=e[t*3+1],h=e[t*3+2],f=e[i*3],m=e[i*3+1],v=e[i*3+2],g=e[a*3],x=e[a*3+1],S=e[a*3+2],b=e[o*3],M=e[o*3+1],y=e[o*3+2];return Math.abs(d-m)<Math.abs(c-f)?[new ke(c,1-h),new ke(f,1-v),new ke(g,1-S),new ke(b,1-y)]:[new ke(d,1-h),new ke(m,1-v),new ke(x,1-S),new ke(M,1-y)]}};function FM(r,e,t){if(t.shapes=[],Array.isArray(r))for(let i=0,a=r.length;i<a;i++){const o=r[i];t.shapes.push(o.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class uu extends En{constructor(e=1,t=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:a};const o=e/2,c=t/2,d=Math.floor(i),h=Math.floor(a),f=d+1,m=h+1,v=e/d,g=t/h,x=[],S=[],b=[],M=[];for(let y=0;y<m;y++){const N=y*g-c;for(let P=0;P<f;P++){const T=P*v-o;S.push(T,-N,0),b.push(0,0,1),M.push(P/d),M.push(1-y/h)}}for(let y=0;y<h;y++)for(let N=0;N<d;N++){const P=N+f*y,T=N+f*(y+1),I=N+1+f*(y+1),L=N+1+f*y;x.push(P,T,L),x.push(T,I,L)}this.setIndex(x),this.setAttribute("position",new wn(S,3)),this.setAttribute("normal",new wn(b,3)),this.setAttribute("uv",new wn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uu(e.width,e.height,e.widthSegments,e.heightSegments)}}class np extends En{constructor(e=new ep([new ke(0,.5),new ke(-.5,-.5),new ke(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],a=[],o=[],c=[];let d=0,h=0;if(Array.isArray(e)===!1)f(e);else for(let m=0;m<e.length;m++)f(e[m]),this.addGroup(d,h,m),d+=h,h=0;this.setIndex(i),this.setAttribute("position",new wn(a,3)),this.setAttribute("normal",new wn(o,3)),this.setAttribute("uv",new wn(c,2));function f(m){const v=a.length/3,g=m.extractPoints(t);let x=g.shape;const S=g.holes;Rr.isClockWise(x)===!1&&(x=x.reverse());for(let M=0,y=S.length;M<y;M++){const N=S[M];Rr.isClockWise(N)===!0&&(S[M]=N.reverse())}const b=Rr.triangulateShape(x,S);for(let M=0,y=S.length;M<y;M++){const N=S[M];x=x.concat(N)}for(let M=0,y=x.length;M<y;M++){const N=x[M];a.push(N.x,N.y,0),o.push(0,0,1),c.push(N.x,N.y)}for(let M=0,y=b.length;M<y;M++){const N=b[M],P=N[0]+v,T=N[1]+v,I=N[2]+v;i.push(P,T,I),h+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return OM(t,e)}static fromJSON(e,t){const i=[];for(let a=0,o=e.shapes.length;a<o;a++){const c=t[e.shapes[a]];i.push(c)}return new np(i,e.curveSegments)}}function OM(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,i=r.length;t<i;t++){const a=r[t];e.shapes.push(a.uuid)}else e.shapes.push(r.uuid);return e}class ms extends En{constructor(e=1,t=32,i=16,a=0,o=Math.PI*2,c=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:a,phiLength:o,thetaStart:c,thetaLength:d},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const h=Math.min(c+d,Math.PI);let f=0;const m=[],v=new $,g=new $,x=[],S=[],b=[],M=[];for(let y=0;y<=i;y++){const N=[],P=y/i,T=c+P*d,I=e*Math.cos(T),L=Math.sqrt(e*e-I*I);let O=0;y===0&&c===0?O=.5/t:y===i&&h===Math.PI&&(O=-.5/t);for(let E=0;E<=t;E++){const R=E/t,z=a+R*o;v.x=-L*Math.cos(z),v.y=I,v.z=L*Math.sin(z),S.push(v.x,v.y,v.z),g.copy(v).normalize(),b.push(g.x,g.y,g.z),M.push(R+O,1-P),N.push(f++)}m.push(N)}for(let y=0;y<i;y++)for(let N=0;N<t;N++){const P=m[y][N+1],T=m[y][N],I=m[y+1][N],L=m[y+1][N+1];(y!==0||c>0)&&x.push(P,T,L),(y!==i-1||h<Math.PI)&&x.push(T,I,L)}this.setIndex(x),this.setAttribute("position",new wn(S,3)),this.setAttribute("normal",new wn(b,3)),this.setAttribute("uv",new wn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ms(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Ya(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const a=r[t][i];if(E0(a))a.isRenderTargetTexture?(Ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=a.clone();else if(Array.isArray(a))if(E0(a[0])){const o=[];for(let c=0,d=a.length;c<d;c++)o[c]=a[c].clone();e[t][i]=o}else e[t][i]=a.slice();else e[t][i]=a}}return e}function ai(r){const e={};for(let t=0;t<r.length;t++){const i=Ya(r[t]);for(const a in i)e[a]=i[a]}return e}function E0(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function zM(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function gx(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:jt.workingColorSpace}const kM={clone:Ya,merge:ai};var BM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,HM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ur extends $s{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=BM,this.fragmentShader=HM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ya(e.uniforms),this.uniformsGroups=zM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const a=e.uniforms[i];switch(this.uniforms[i]={},a.type){case"t":this.uniforms[i].value=t[a.value]||null;break;case"c":this.uniforms[i].value=new Ot().setHex(a.value);break;case"v2":this.uniforms[i].value=new ke().fromArray(a.value);break;case"v3":this.uniforms[i].value=new $().fromArray(a.value);break;case"v4":this.uniforms[i].value=new yn().fromArray(a.value);break;case"m3":this.uniforms[i].value=new It().fromArray(a.value);break;case"m4":this.uniforms[i].value=new un().fromArray(a.value);break;default:this.uniforms[i].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class VM extends ur{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class w0 extends $s{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bh,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ur,this.combine=kh,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class GM extends $s{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class WM extends $s{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const bf={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(T0(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!T0(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function T0(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class XM{constructor(e,t,i){const a=this;let o=!1,c=0,d=0,h;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(m){d++,o===!1&&a.onStart!==void 0&&a.onStart(m,c,d),o=!0},this.itemEnd=function(m){c++,a.onProgress!==void 0&&a.onProgress(m,c,d),c===d&&(o=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(m){a.onError!==void 0&&a.onError(m)},this.resolveURL=function(m){return m=m.normalize("NFC"),h?h(m):m},this.setURLModifier=function(m){return h=m,this},this.addHandler=function(m,v){return f.push(m,v),this},this.removeHandler=function(m){const v=f.indexOf(m);return v!==-1&&f.splice(v,2),this},this.getHandler=function(m){for(let v=0,g=f.length;v<g;v+=2){const x=f[v],S=f[v+1];if(x.global&&(x.lastIndex=0),x.test(m))return S}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const $M=new XM;class ip{constructor(e){this.manager=e!==void 0?e:$M,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(a,o){i.load(e,a,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ip.DEFAULT_MATERIAL_NAME="__DEFAULT";const Pa=new WeakMap;class jM extends ip{constructor(e){super(e)}load(e,t,i,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,c=bf.get(`image:${e}`);if(c!==void 0){if(c.complete===!0)o.manager.itemStart(e),setTimeout(function(){t&&t(c),o.manager.itemEnd(e)},0);else{let v=Pa.get(c);v===void 0&&(v=[],Pa.set(c,v)),v.push({onLoad:t,onError:a})}return c}const d=Jo("img");function h(){m(),t&&t(this);const v=Pa.get(this)||[];for(let g=0;g<v.length;g++){const x=v[g];x.onLoad&&x.onLoad(this)}Pa.delete(this),o.manager.itemEnd(e)}function f(v){m(),a&&a(v),bf.remove(`image:${e}`);const g=Pa.get(this)||[];for(let x=0;x<g.length;x++){const S=g[x];S.onError&&S.onError(v)}Pa.delete(this),o.manager.itemError(e),o.manager.itemEnd(e)}function m(){d.removeEventListener("load",h,!1),d.removeEventListener("error",f,!1)}return d.addEventListener("load",h,!1),d.addEventListener("error",f,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),bf.add(`image:${e}`,d),o.manager.itemStart(e),d.src=e,d}}class vx extends ip{constructor(e){super(e)}load(e,t,i,a){const o=new Vn,c=new jM(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(d){o.image=d,o.needsUpdate=!0,t!==void 0&&t(o)},i,a),o}}class xx extends Gn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Af=new un,b0=new $,A0=new $;class YM{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.mapType=Si,this.map=null,this.mapPass=null,this.matrix=new un,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kh,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new yn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;b0.setFromMatrixPosition(e.matrixWorld),t.position.copy(b0),A0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(A0),t.updateMatrixWorld(),Af.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Af,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Ko||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Af)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ic=new $,Uc=new cr,Ki=new $;class _x extends Gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new un,this.projectionMatrix=new un,this.projectionMatrixInverse=new un,this.coordinateSystem=nr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ic,Uc,Ki),Ki.x===1&&Ki.y===1&&Ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ic,Uc,Ki.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Ic,Uc,Ki),Ki.x===1&&Ki.y===1&&Ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ic,Uc,Ki.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ls=new $,C0=new ke,R0=new ke;class ni extends _x{constructor(e=50,t=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Va*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qo*2*Math.atan(Math.tan(Va*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ls.x,ls.y).multiplyScalar(-e/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ls.x,ls.y).multiplyScalar(-e/ls.z)}getViewSize(e,t){return this.getViewBounds(e,C0,R0),t.subVectors(R0,C0)}setViewOffset(e,t,i,a,o,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Va*.5*this.fov)/this.zoom,i=2*t,a=this.aspect*i,o=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,f=c.fullHeight;o+=c.offsetX*a/h,t-=c.offsetY*i/f,a*=c.width/h,i*=c.height/f}const d=this.filmOffset;d!==0&&(o+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+a,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class rp extends _x{constructor(e=-1,t=1,i=1,a=-1,o=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=a,this.near=o,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,a,o,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=a,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let o=i-e,c=i+e,d=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=f*this.view.offsetX,c=o+f*this.view.width,d-=m*this.view.offsetY,h=d-m*this.view.height}this.projectionMatrix.makeOrthographic(o,c,d,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class qM extends YM{constructor(){super(new rp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ZM extends xx{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gn.DEFAULT_UP),this.updateMatrix(),this.target=new Gn,this.shadow=new qM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class KM extends xx{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const La=-90,Na=1;class JM extends Gn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ni(La,Na,e,t);a.layers=this.layers,this.add(a);const o=new ni(La,Na,e,t);o.layers=this.layers,this.add(o);const c=new ni(La,Na,e,t);c.layers=this.layers,this.add(c);const d=new ni(La,Na,e,t);d.layers=this.layers,this.add(d);const h=new ni(La,Na,e,t);h.layers=this.layers,this.add(h);const f=new ni(La,Na,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,a,o,c,d,h]=t;for(const f of t)this.remove(f);if(e===nr)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Ko)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,c,d,h,f,m]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(i,0,a),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,1,a),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,2,a),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(i,3,a),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(i,4,a),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,a),M&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),e.setRenderTarget(v,g,x),e.xr.enabled=S,i.texture.needsPMREMUpdate=!0}}class QM extends ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const P0=new un;class yx{constructor(e,t,i=0,a=1/0){this.ray=new cu(e,t),this.near=i,this.far=a,this.camera=null,this.layers=new Zh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Wt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return P0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(P0),this}intersectObject(e,t=!0,i=[]){return Lh(e,this,i,t),i.sort(L0),i}intersectObjects(e,t=!0,i=[]){for(let a=0,o=e.length;a<o;a++)Lh(e[a],this,i,t);return i.sort(L0),i}}function L0(r,e){return r.distance-e.distance}function Lh(r,e,t,i){let a=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(a=!1),a===!0&&i===!0){const o=r.children;for(let c=0,d=o.length;c<d;c++)Lh(o[c],e,t,!0)}}class N0{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=kt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(kt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const hp=class hp{constructor(e,t,i,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,a){const o=this.elements;return o[0]=e,o[2]=t,o[1]=i,o[3]=a,this}};hp.prototype.isMatrix2=!0;let D0=hp;class eE extends sx{constructor(e=10,t=10,i=4473924,a=8947848){i=new Ot(i),a=new Ot(a);const o=t/2,c=e/t,d=e/2,h=[],f=[];for(let g=0,x=0,S=-d;g<=t;g++,S+=c){h.push(-d,0,S,d,0,S),h.push(S,0,-d,S,0,d);const b=g===o?i:a;b.toArray(f,x),x+=3,b.toArray(f,x),x+=3,b.toArray(f,x),x+=3,b.toArray(f,x),x+=3}const m=new En;m.setAttribute("position",new wn(h,3)),m.setAttribute("color",new wn(f,3));const v=new Ar({vertexColors:!0,toneMapped:!1});super(m,v),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class tE extends vs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ct("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function I0(r,e,t,i){const a=nE(i);switch(t){case qv:return r*e;case Kv:return r*e/a.components*a.byteLength;case Gh:return r*e/a.components*a.byteLength;case Ws:return r*e*2/a.components*a.byteLength;case Wh:return r*e*2/a.components*a.byteLength;case Zv:return r*e*3/a.components*a.byteLength;case Gi:return r*e*4/a.components*a.byteLength;case Xh:return r*e*4/a.components*a.byteLength;case Gc:case Wc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Xc:case $c:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Kf:case Qf:return Math.max(r,16)*Math.max(e,8)/4;case Zf:case Jf:return Math.max(r,8)*Math.max(e,8)/2;case eh:case th:case ih:case rh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case nh:case qc:case sh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ah:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case oh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case lh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case ch:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case uh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case dh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case fh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case hh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case ph:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case mh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case gh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case vh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case xh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case _h:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case yh:case Sh:case Mh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Eh:case wh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Zc:case Th:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function nE(r){switch(r){case Si:case Xv:return{byteLength:1,components:1};case qo:case $v:case Dr:return{byteLength:2,components:1};case Hh:case Vh:return{byteLength:2,components:4};case lr:case Bh:case tr:return{byteLength:4,components:1};case jv:case Yv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zh}}));typeof window<"u"&&(window.__THREE__?Ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Sx(){let r=null,e=!1,t=null,i=null;function a(o,c){t(o,c),i=r.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&r!==null&&(i=r.requestAnimationFrame(a),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){r=o}}}function iE(r){const e=new WeakMap;function t(d,h){const f=d.array,m=d.usage,v=f.byteLength,g=r.createBuffer();r.bindBuffer(h,g),r.bufferData(h,f,m),d.onUploadCallback();let x;if(f instanceof Float32Array)x=r.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)x=r.HALF_FLOAT;else if(f instanceof Uint16Array)d.isFloat16BufferAttribute?x=r.HALF_FLOAT:x=r.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=r.SHORT;else if(f instanceof Uint32Array)x=r.UNSIGNED_INT;else if(f instanceof Int32Array)x=r.INT;else if(f instanceof Int8Array)x=r.BYTE;else if(f instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:d.version,size:v}}function i(d,h,f){const m=h.array,v=h.updateRanges;if(r.bindBuffer(f,d),v.length===0)r.bufferSubData(f,0,m);else{v.sort((x,S)=>x.start-S.start);let g=0;for(let x=1;x<v.length;x++){const S=v[g],b=v[x];b.start<=S.start+S.count+1?S.count=Math.max(S.count,b.start+b.count-S.start):(++g,v[g]=b)}v.length=g+1;for(let x=0,S=v.length;x<S;x++){const b=v[x];r.bufferSubData(f,b.start*m.BYTES_PER_ELEMENT,m,b.start,b.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function o(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(r.deleteBuffer(h.buffer),e.delete(d))}function c(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const m=e.get(d);(!m||m.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const f=e.get(d);if(f===void 0)e.set(d,t(d,h));else if(f.version<d.version){if(f.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,d,h),f.version=d.version}}return{get:a,remove:o,update:c}}var rE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sE=`#ifdef USE_ALPHAHASH
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
#endif`,aE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,oE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uE=`#ifdef USE_AOMAP
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
#endif`,dE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fE=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,hE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vE=`#ifdef USE_IRIDESCENCE
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
#endif`,xE=`#ifdef USE_BUMPMAP
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
#endif`,_E=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,SE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ME=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,EE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,wE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,TE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,bE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,AE=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,CE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,RE=`vec3 transformedNormal = objectNormal;
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
#endif`,PE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,LE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,NE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,DE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,IE="gl_FragColor = linearToOutputTexel( gl_FragColor );",UE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,FE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,OE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,zE=`#ifdef USE_ENVMAP
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
#endif`,kE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,BE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,HE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,VE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,GE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,WE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,XE=`#ifdef USE_GRADIENTMAP
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
}`,$E=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,YE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qE=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif
#include <lightprobes_pars_fragment>`,ZE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
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
#endif`,KE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,JE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,QE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,e1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,t1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,n1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,i1=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,r1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,s1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,a1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,o1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,l1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,c1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,u1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,d1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,f1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,h1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,p1=`#if defined( USE_POINTS_UV )
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
#endif`,m1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,g1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,v1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,x1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y1=`#ifdef USE_MORPHTARGETS
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
#endif`,S1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,M1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,E1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,w1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,A1=`#ifdef USE_NORMALMAP
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
#endif`,C1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,R1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,P1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,L1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,N1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,D1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,I1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,U1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,F1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,O1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,z1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,k1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,B1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,H1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,V1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,G1=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,W1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,X1=`#ifdef USE_SKINNING
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
#endif`,$1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,j1=`#ifdef USE_SKINNING
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
#endif`,Y1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,q1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Z1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,K1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,J1=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Q1=`#ifdef USE_TRANSMISSION
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
#endif`,ew=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sw=`uniform sampler2D t2D;
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
}`,aw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ow=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uw=`#include <common>
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
}`,dw=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,fw=`#define DISTANCE
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
}`,hw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,pw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gw=`uniform float scale;
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
}`,vw=`uniform vec3 diffuse;
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
}`,xw=`#include <common>
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
}`,_w=`uniform vec3 diffuse;
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
}`,yw=`#define LAMBERT
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
}`,Sw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Mw=`#define MATCAP
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
}`,Ew=`#define MATCAP
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
}`,ww=`#define NORMAL
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
}`,Tw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bw=`#define PHONG
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
}`,Aw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Cw=`#define STANDARD
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
}`,Rw=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Pw=`#define TOON
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
}`,Lw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,Nw=`uniform float size;
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
}`,Dw=`uniform vec3 diffuse;
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
}`,Iw=`#include <common>
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
}`,Uw=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,Fw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Ow=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:rE,alphahash_pars_fragment:sE,alphamap_fragment:aE,alphamap_pars_fragment:oE,alphatest_fragment:lE,alphatest_pars_fragment:cE,aomap_fragment:uE,aomap_pars_fragment:dE,batching_pars_vertex:fE,batching_vertex:hE,begin_vertex:pE,beginnormal_vertex:mE,bsdfs:gE,iridescence_fragment:vE,bumpmap_pars_fragment:xE,clipping_planes_fragment:_E,clipping_planes_pars_fragment:yE,clipping_planes_pars_vertex:SE,clipping_planes_vertex:ME,color_fragment:EE,color_pars_fragment:wE,color_pars_vertex:TE,color_vertex:bE,common:AE,cube_uv_reflection_fragment:CE,defaultnormal_vertex:RE,displacementmap_pars_vertex:PE,displacementmap_vertex:LE,emissivemap_fragment:NE,emissivemap_pars_fragment:DE,colorspace_fragment:IE,colorspace_pars_fragment:UE,envmap_fragment:FE,envmap_common_pars_fragment:OE,envmap_pars_fragment:zE,envmap_pars_vertex:kE,envmap_physical_pars_fragment:ZE,envmap_vertex:BE,fog_vertex:HE,fog_pars_vertex:VE,fog_fragment:GE,fog_pars_fragment:WE,gradientmap_pars_fragment:XE,lightmap_pars_fragment:$E,lights_lambert_fragment:jE,lights_lambert_pars_fragment:YE,lights_pars_begin:qE,lights_toon_fragment:KE,lights_toon_pars_fragment:JE,lights_phong_fragment:QE,lights_phong_pars_fragment:e1,lights_physical_fragment:t1,lights_physical_pars_fragment:n1,lights_fragment_begin:i1,lights_fragment_maps:r1,lights_fragment_end:s1,lightprobes_pars_fragment:a1,logdepthbuf_fragment:o1,logdepthbuf_pars_fragment:l1,logdepthbuf_pars_vertex:c1,logdepthbuf_vertex:u1,map_fragment:d1,map_pars_fragment:f1,map_particle_fragment:h1,map_particle_pars_fragment:p1,metalnessmap_fragment:m1,metalnessmap_pars_fragment:g1,morphinstance_vertex:v1,morphcolor_vertex:x1,morphnormal_vertex:_1,morphtarget_pars_vertex:y1,morphtarget_vertex:S1,normal_fragment_begin:M1,normal_fragment_maps:E1,normal_pars_fragment:w1,normal_pars_vertex:T1,normal_vertex:b1,normalmap_pars_fragment:A1,clearcoat_normal_fragment_begin:C1,clearcoat_normal_fragment_maps:R1,clearcoat_pars_fragment:P1,iridescence_pars_fragment:L1,opaque_fragment:N1,packing:D1,premultiplied_alpha_fragment:I1,project_vertex:U1,dithering_fragment:F1,dithering_pars_fragment:O1,roughnessmap_fragment:z1,roughnessmap_pars_fragment:k1,shadowmap_pars_fragment:B1,shadowmap_pars_vertex:H1,shadowmap_vertex:V1,shadowmask_pars_fragment:G1,skinbase_vertex:W1,skinning_pars_vertex:X1,skinning_vertex:$1,skinnormal_vertex:j1,specularmap_fragment:Y1,specularmap_pars_fragment:q1,tonemapping_fragment:Z1,tonemapping_pars_fragment:K1,transmission_fragment:J1,transmission_pars_fragment:Q1,uv_pars_fragment:ew,uv_pars_vertex:tw,uv_vertex:nw,worldpos_vertex:iw,background_vert:rw,background_frag:sw,backgroundCube_vert:aw,backgroundCube_frag:ow,cube_vert:lw,cube_frag:cw,depth_vert:uw,depth_frag:dw,distance_vert:fw,distance_frag:hw,equirect_vert:pw,equirect_frag:mw,linedashed_vert:gw,linedashed_frag:vw,meshbasic_vert:xw,meshbasic_frag:_w,meshlambert_vert:yw,meshlambert_frag:Sw,meshmatcap_vert:Mw,meshmatcap_frag:Ew,meshnormal_vert:ww,meshnormal_frag:Tw,meshphong_vert:bw,meshphong_frag:Aw,meshphysical_vert:Cw,meshphysical_frag:Rw,meshtoon_vert:Pw,meshtoon_frag:Lw,points_vert:Nw,points_frag:Dw,shadow_vert:Iw,shadow_frag:Uw,sprite_vert:Fw,sprite_frag:Ow},tt={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},envMapRotation:{value:new It},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},er={basic:{uniforms:ai([tt.common,tt.specularmap,tt.envmap,tt.aomap,tt.lightmap,tt.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:ai([tt.common,tt.specularmap,tt.envmap,tt.aomap,tt.lightmap,tt.emissivemap,tt.bumpmap,tt.normalmap,tt.displacementmap,tt.fog,tt.lights,{emissive:{value:new Ot(0)},envMapIntensity:{value:1}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:ai([tt.common,tt.specularmap,tt.envmap,tt.aomap,tt.lightmap,tt.emissivemap,tt.bumpmap,tt.normalmap,tt.displacementmap,tt.fog,tt.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:ai([tt.common,tt.envmap,tt.aomap,tt.lightmap,tt.emissivemap,tt.bumpmap,tt.normalmap,tt.displacementmap,tt.roughnessmap,tt.metalnessmap,tt.fog,tt.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:ai([tt.common,tt.aomap,tt.lightmap,tt.emissivemap,tt.bumpmap,tt.normalmap,tt.displacementmap,tt.gradientmap,tt.fog,tt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:ai([tt.common,tt.bumpmap,tt.normalmap,tt.displacementmap,tt.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:ai([tt.points,tt.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:ai([tt.common,tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:ai([tt.common,tt.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:ai([tt.common,tt.bumpmap,tt.normalmap,tt.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:ai([tt.sprite,tt.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new It}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distance:{uniforms:ai([tt.common,tt.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distance_vert,fragmentShader:zt.distance_frag},shadow:{uniforms:ai([tt.lights,tt.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};er.physical={uniforms:ai([er.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const Fc={r:0,b:0,g:0},zw=new un,Mx=new It;Mx.set(-1,0,0,0,1,0,0,0,1);function kw(r,e,t,i,a,o){const c=new Ot(0);let d=a===!0?0:1,h,f,m=null,v=0,g=null;function x(N){let P=N.isScene===!0?N.background:null;if(P&&P.isTexture){const T=N.backgroundBlurriness>0;P=e.get(P,T)}return P}function S(N){let P=!1;const T=x(N);T===null?M(c,d):T&&T.isColor&&(M(T,1),P=!0);const I=r.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(r.autoClear||P)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function b(N,P){const T=x(P);T&&(T.isCubeTexture||T.mapping===au)?(f===void 0&&(f=new Yn(new rl(1,1,1),new ur({name:"BackgroundCubeMaterial",uniforms:Ya(er.backgroundCube.uniforms),vertexShader:er.backgroundCube.vertexShader,fragmentShader:er.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(I,L,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),f.material.uniforms.envMap.value=T,f.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(zw.makeRotationFromEuler(P.backgroundRotation)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&f.material.uniforms.backgroundRotation.value.premultiply(Mx),f.material.toneMapped=jt.getTransfer(T.colorSpace)!==tn,(m!==T||v!==T.version||g!==r.toneMapping)&&(f.material.needsUpdate=!0,m=T,v=T.version,g=r.toneMapping),f.layers.enableAll(),N.unshift(f,f.geometry,f.material,0,0,null)):T&&T.isTexture&&(h===void 0&&(h=new Yn(new uu(2,2),new ur({name:"BackgroundMaterial",uniforms:Ya(er.background.uniforms),vertexShader:er.background.vertexShader,fragmentShader:er.background.fragmentShader,side:gs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=T,h.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,h.material.toneMapped=jt.getTransfer(T.colorSpace)!==tn,T.matrixAutoUpdate===!0&&T.updateMatrix(),h.material.uniforms.uvTransform.value.copy(T.matrix),(m!==T||v!==T.version||g!==r.toneMapping)&&(h.material.needsUpdate=!0,m=T,v=T.version,g=r.toneMapping),h.layers.enableAll(),N.unshift(h,h.geometry,h.material,0,0,null))}function M(N,P){N.getRGB(Fc,gx(r)),t.buffers.color.setClear(Fc.r,Fc.g,Fc.b,P,o)}function y(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(N,P=1){c.set(N),d=P,M(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(N){d=N,M(c,d)},render:S,addToRenderList:b,dispose:y}}function Bw(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},a=g(null);let o=a,c=!1;function d(B,j,G,de,W){let ae=!1;const Q=v(B,de,G,j);o!==Q&&(o=Q,f(o.object)),ae=x(B,de,G,W),ae&&S(B,de,G,W),W!==null&&e.update(W,r.ELEMENT_ARRAY_BUFFER),(ae||c)&&(c=!1,T(B,j,G,de),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function h(){return r.createVertexArray()}function f(B){return r.bindVertexArray(B)}function m(B){return r.deleteVertexArray(B)}function v(B,j,G,de){const W=de.wireframe===!0;let ae=i[j.id];ae===void 0&&(ae={},i[j.id]=ae);const Q=B.isInstancedMesh===!0?B.id:0;let q=ae[Q];q===void 0&&(q={},ae[Q]=q);let ie=q[G.id];ie===void 0&&(ie={},q[G.id]=ie);let ee=ie[W];return ee===void 0&&(ee=g(h()),ie[W]=ee),ee}function g(B){const j=[],G=[],de=[];for(let W=0;W<t;W++)j[W]=0,G[W]=0,de[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:G,attributeDivisors:de,object:B,attributes:{},index:null}}function x(B,j,G,de){const W=o.attributes,ae=j.attributes;let Q=0;const q=G.getAttributes();for(const ie in q)if(q[ie].location>=0){const k=W[ie];let J=ae[ie];if(J===void 0&&(ie==="instanceMatrix"&&B.instanceMatrix&&(J=B.instanceMatrix),ie==="instanceColor"&&B.instanceColor&&(J=B.instanceColor)),k===void 0||k.attribute!==J||J&&k.data!==J.data)return!0;Q++}return o.attributesNum!==Q||o.index!==de}function S(B,j,G,de){const W={},ae=j.attributes;let Q=0;const q=G.getAttributes();for(const ie in q)if(q[ie].location>=0){let k=ae[ie];k===void 0&&(ie==="instanceMatrix"&&B.instanceMatrix&&(k=B.instanceMatrix),ie==="instanceColor"&&B.instanceColor&&(k=B.instanceColor));const J={};J.attribute=k,k&&k.data&&(J.data=k.data),W[ie]=J,Q++}o.attributes=W,o.attributesNum=Q,o.index=de}function b(){const B=o.newAttributes;for(let j=0,G=B.length;j<G;j++)B[j]=0}function M(B){y(B,0)}function y(B,j){const G=o.newAttributes,de=o.enabledAttributes,W=o.attributeDivisors;G[B]=1,de[B]===0&&(r.enableVertexAttribArray(B),de[B]=1),W[B]!==j&&(r.vertexAttribDivisor(B,j),W[B]=j)}function N(){const B=o.newAttributes,j=o.enabledAttributes;for(let G=0,de=j.length;G<de;G++)j[G]!==B[G]&&(r.disableVertexAttribArray(G),j[G]=0)}function P(B,j,G,de,W,ae,Q){Q===!0?r.vertexAttribIPointer(B,j,G,W,ae):r.vertexAttribPointer(B,j,G,de,W,ae)}function T(B,j,G,de){b();const W=de.attributes,ae=G.getAttributes(),Q=j.defaultAttributeValues;for(const q in ae){const ie=ae[q];if(ie.location>=0){let ee=W[q];if(ee===void 0&&(q==="instanceMatrix"&&B.instanceMatrix&&(ee=B.instanceMatrix),q==="instanceColor"&&B.instanceColor&&(ee=B.instanceColor)),ee!==void 0){const k=ee.normalized,J=ee.itemSize,Pe=e.get(ee);if(Pe===void 0)continue;const oe=Pe.buffer,ve=Pe.type,K=Pe.bytesPerElement,xe=ve===r.INT||ve===r.UNSIGNED_INT||ee.gpuType===Bh;if(ee.isInterleavedBufferAttribute){const ge=ee.data,ce=ge.stride,be=ee.offset;if(ge.isInstancedInterleavedBuffer){for(let et=0;et<ie.locationSize;et++)y(ie.location+et,ge.meshPerAttribute);B.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let et=0;et<ie.locationSize;et++)M(ie.location+et);r.bindBuffer(r.ARRAY_BUFFER,oe);for(let et=0;et<ie.locationSize;et++)P(ie.location+et,J/ie.locationSize,ve,k,ce*K,(be+J/ie.locationSize*et)*K,xe)}else{if(ee.isInstancedBufferAttribute){for(let ge=0;ge<ie.locationSize;ge++)y(ie.location+ge,ee.meshPerAttribute);B.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ge=0;ge<ie.locationSize;ge++)M(ie.location+ge);r.bindBuffer(r.ARRAY_BUFFER,oe);for(let ge=0;ge<ie.locationSize;ge++)P(ie.location+ge,J/ie.locationSize,ve,k,J*K,J/ie.locationSize*ge*K,xe)}}else if(Q!==void 0){const k=Q[q];if(k!==void 0)switch(k.length){case 2:r.vertexAttrib2fv(ie.location,k);break;case 3:r.vertexAttrib3fv(ie.location,k);break;case 4:r.vertexAttrib4fv(ie.location,k);break;default:r.vertexAttrib1fv(ie.location,k)}}}}N()}function I(){R();for(const B in i){const j=i[B];for(const G in j){const de=j[G];for(const W in de){const ae=de[W];for(const Q in ae)m(ae[Q].object),delete ae[Q];delete de[W]}}delete i[B]}}function L(B){if(i[B.id]===void 0)return;const j=i[B.id];for(const G in j){const de=j[G];for(const W in de){const ae=de[W];for(const Q in ae)m(ae[Q].object),delete ae[Q];delete de[W]}}delete i[B.id]}function O(B){for(const j in i){const G=i[j];for(const de in G){const W=G[de];if(W[B.id]===void 0)continue;const ae=W[B.id];for(const Q in ae)m(ae[Q].object),delete ae[Q];delete W[B.id]}}}function E(B){for(const j in i){const G=i[j],de=B.isInstancedMesh===!0?B.id:0,W=G[de];if(W!==void 0){for(const ae in W){const Q=W[ae];for(const q in Q)m(Q[q].object),delete Q[q];delete W[ae]}delete G[de],Object.keys(G).length===0&&delete i[j]}}}function R(){z(),c=!0,o!==a&&(o=a,f(o.object))}function z(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:R,resetDefaultState:z,dispose:I,releaseStatesOfGeometry:L,releaseStatesOfObject:E,releaseStatesOfProgram:O,initAttributes:b,enableAttribute:M,disableUnusedAttributes:N}}function Hw(r,e,t){let i;function a(h){i=h}function o(h,f){r.drawArrays(i,h,f),t.update(f,i,1)}function c(h,f,m){m!==0&&(r.drawArraysInstanced(i,h,f,m),t.update(f,i,m))}function d(h,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,f,0,m);let g=0;for(let x=0;x<m;x++)g+=f[x];t.update(g,i,1)}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=d}function Vw(r,e,t,i){let a;function o(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");a=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(O){return!(O!==Gi&&i.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const E=O===Dr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Si&&i.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==tr&&!E)}function h(O){if(O==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const m=h(f);m!==f&&(Ct("WebGLRenderer:",f,"not supported, using",m,"instead."),f=m);const v=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&Ct("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),S=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),N=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),P=r.getParameter(r.MAX_VARYING_VECTORS),T=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=r.getParameter(r.MAX_SAMPLES),L=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:d,precision:f,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:x,maxVertexTextures:S,maxTextureSize:b,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:N,maxVaryings:P,maxFragmentUniforms:T,maxSamples:I,samples:L}}function Gw(r){const e=this;let t=null,i=0,a=!1,o=!1;const c=new us,d=new It,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const x=v.length!==0||g||i!==0||a;return a=g,i=v.length,x},this.beginShadows=function(){o=!0,m(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(v,g){t=m(v,g,0)},this.setState=function(v,g,x){const S=v.clippingPlanes,b=v.clipIntersection,M=v.clipShadows,y=r.get(v);if(!a||S===null||S.length===0||o&&!M)o?m(null):f();else{const N=o?0:i,P=N*4;let T=y.clippingState||null;h.value=T,T=m(S,g,P,x);for(let I=0;I!==P;++I)T[I]=t[I];y.clippingState=T,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=N}};function f(){h.value!==t&&(h.value=t,h.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function m(v,g,x,S){const b=v!==null?v.length:0;let M=null;if(b!==0){if(M=h.value,S!==!0||M===null){const y=x+b*4,N=g.matrixWorldInverse;d.getNormalMatrix(N),(M===null||M.length<y)&&(M=new Float32Array(y));for(let P=0,T=x;P!==b;++P,T+=4)c.copy(v[P]).applyMatrix4(N,d),c.normal.toArray(M,T),M[T+3]=c.constant}h.value=M,h.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,M}}const hs=4,U0=[.125,.215,.35,.446,.526,.582],Bs=20,Ww=256,zo=new rp,F0=new Ot;let Cf=null,Rf=0,Pf=0,Lf=!1;const Xw=new $;class O0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,a=100,o={}){const{size:c=256,position:d=Xw}=o;Cf=this._renderer.getRenderTarget(),Rf=this._renderer.getActiveCubeFace(),Pf=this._renderer.getActiveMipmapLevel(),Lf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,i,a,h,d),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=B0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=k0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Cf,Rf,Pf),this._renderer.xr.enabled=Lf,e.scissorTest=!1,Da(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gs||e.mapping===Xa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cf=this._renderer.getRenderTarget(),Rf=this._renderer.getActiveCubeFace(),Pf=this._renderer.getActiveMipmapLevel(),Lf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:Dr,format:Gi,colorSpace:Kc,depthBuffer:!1},a=z0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=z0(e,t,i);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=$w(o)),this._blurMaterial=Yw(o,e,t),this._ggxMaterial=jw(o,e,t)}return a}_compileMaterial(e){const t=new Yn(new En,e);this._renderer.compile(t,zo)}_sceneToCubeUV(e,t,i,a,o){const h=new ni(90,1,t,i),f=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,x=v.toneMapping;v.getClearColor(F0),v.toneMapping=sr,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(a),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Yn(new rl,new ps({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,M=b.material;let y=!1;const N=e.background;N?N.isColor&&(M.color.copy(N),e.background=null,y=!0):(M.color.copy(F0),y=!0);for(let P=0;P<6;P++){const T=P%3;T===0?(h.up.set(0,f[P],0),h.position.set(o.x,o.y,o.z),h.lookAt(o.x+m[P],o.y,o.z)):T===1?(h.up.set(0,0,f[P]),h.position.set(o.x,o.y,o.z),h.lookAt(o.x,o.y+m[P],o.z)):(h.up.set(0,f[P],0),h.position.set(o.x,o.y,o.z),h.lookAt(o.x,o.y,o.z+m[P]));const I=this._cubeSize;Da(a,T*I,P>2?I:0,I,I),v.setRenderTarget(a),y&&v.render(b,h),v.render(e,h)}v.toneMapping=x,v.autoClear=g,e.background=N}_textureToCubeUV(e,t){const i=this._renderer,a=e.mapping===Gs||e.mapping===Xa;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=B0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=k0());const o=a?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=o;const d=o.uniforms;d.envMap.value=e;const h=this._cubeSize;Da(t,0,0,3*h,2*h),i.setRenderTarget(t),i.render(c,zo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let o=1;o<a;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=i}_applyGGXFilter(e,t,i){const a=this._renderer,o=this._pingPongRenderTarget,c=this._ggxMaterial,d=this._lodMeshes[i];d.material=c;const h=c.uniforms,f=i/(this._lodMeshes.length-1),m=t/(this._lodMeshes.length-1),v=Math.sqrt(f*f-m*m),g=0+f*1.25,x=v*g,{_lodMax:S}=this,b=this._sizeLods[i],M=3*b*(i>S-hs?i-S+hs:0),y=4*(this._cubeSize-b);h.envMap.value=e.texture,h.roughness.value=x,h.mipInt.value=S-t,Da(o,M,y,3*b,2*b),a.setRenderTarget(o),a.render(d,zo),h.envMap.value=o.texture,h.roughness.value=0,h.mipInt.value=S-i,Da(e,M,y,3*b,2*b),a.setRenderTarget(e),a.render(d,zo)}_blur(e,t,i,a,o){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,a,"latitudinal",o),this._halfBlur(c,e,i,i,a,"longitudinal",o)}_halfBlur(e,t,i,a,o,c,d){const h=this._renderer,f=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Wt("blur direction must be either latitudinal or longitudinal!");const m=3,v=this._lodMeshes[a];v.material=f;const g=f.uniforms,x=this._sizeLods[i]-1,S=isFinite(o)?Math.PI/(2*x):2*Math.PI/(2*Bs-1),b=o/S,M=isFinite(o)?1+Math.floor(m*b):Bs;M>Bs&&Ct(`sigmaRadians, ${o}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Bs}`);const y=[];let N=0;for(let O=0;O<Bs;++O){const E=O/b,R=Math.exp(-E*E/2);y.push(R),O===0?N+=R:O<M&&(N+=2*R)}for(let O=0;O<y.length;O++)y[O]=y[O]/N;g.envMap.value=e.texture,g.samples.value=M,g.weights.value=y,g.latitudinal.value=c==="latitudinal",d&&(g.poleAxis.value=d);const{_lodMax:P}=this;g.dTheta.value=S,g.mipInt.value=P-i;const T=this._sizeLods[a],I=3*T*(a>P-hs?a-P+hs:0),L=4*(this._cubeSize-T);Da(t,I,L,3*T,2*T),h.setRenderTarget(t),h.render(v,zo)}}function $w(r){const e=[],t=[],i=[];let a=r;const o=r-hs+1+U0.length;for(let c=0;c<o;c++){const d=Math.pow(2,a);e.push(d);let h=1/d;c>r-hs?h=U0[c-r+hs-1]:c===0&&(h=0),t.push(h);const f=1/(d-2),m=-f,v=1+f,g=[m,m,v,m,v,v,m,m,v,v,m,v],x=6,S=6,b=3,M=2,y=1,N=new Float32Array(b*S*x),P=new Float32Array(M*S*x),T=new Float32Array(y*S*x);for(let L=0;L<x;L++){const O=L%3*2/3-1,E=L>2?0:-1,R=[O,E,0,O+2/3,E,0,O+2/3,E+1,0,O,E,0,O+2/3,E+1,0,O,E+1,0];N.set(R,b*S*L),P.set(g,M*S*L);const z=[L,L,L,L,L,L];T.set(z,y*S*L)}const I=new En;I.setAttribute("position",new Wi(N,b)),I.setAttribute("uv",new Wi(P,M)),I.setAttribute("faceIndex",new Wi(T,y)),i.push(new Yn(I,null)),a>hs&&a--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function z0(r,e,t){const i=new or(r,e,t);return i.texture.mapping=au,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Da(r,e,t,i,a){r.viewport.set(e,t,i,a),r.scissor.set(e,t,i,a)}function jw(r,e,t){return new ur({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ww,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:du(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function Yw(r,e,t){const i=new Float32Array(Bs),a=new $(0,1,0);return new ur({name:"SphericalGaussianBlur",defines:{n:Bs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:du(),fragmentShader:`

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
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function k0(){return new ur({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:du(),fragmentShader:`

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
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function B0(){return new ur({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function du(){return`

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
	`}class Ex extends or{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},a=[i,i,i,i,i,i];this.texture=new ax(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new rl(5,5,5),o=new ur({name:"CubemapFromEquirect",uniforms:Ya(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:jn,blending:Lr});o.uniforms.tEquirect.value=t;const c=new Yn(a,o),d=t.minFilter;return t.minFilter===Hs&&(t.minFilter=Hn),new JM(1,10,this).update(e,c),t.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,i=!0,a=!0){const o=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,a);e.setRenderTarget(o)}}function qw(r){let e=new WeakMap,t=new WeakMap,i=null;function a(g,x=!1){return g==null?null:x?c(g):o(g)}function o(g){if(g&&g.isTexture){const x=g.mapping;if(x===Yd||x===qd)if(e.has(g)){const S=e.get(g).texture;return d(S,g.mapping)}else{const S=g.image;if(S&&S.height>0){const b=new Ex(S.height);return b.fromEquirectangularTexture(r,g),e.set(g,b),g.addEventListener("dispose",f),d(b.texture,g.mapping)}else return null}}return g}function c(g){if(g&&g.isTexture){const x=g.mapping,S=x===Yd||x===qd,b=x===Gs||x===Xa;if(S||b){let M=t.get(g);const y=M!==void 0?M.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return i===null&&(i=new O0(r)),M=S?i.fromEquirectangular(g,M):i.fromCubemap(g,M),M.texture.pmremVersion=g.pmremVersion,t.set(g,M),M.texture;if(M!==void 0)return M.texture;{const N=g.image;return S&&N&&N.height>0||b&&N&&h(N)?(i===null&&(i=new O0(r)),M=S?i.fromEquirectangular(g):i.fromCubemap(g),M.texture.pmremVersion=g.pmremVersion,t.set(g,M),g.addEventListener("dispose",m),M.texture):null}}}return g}function d(g,x){return x===Yd?g.mapping=Gs:x===qd&&(g.mapping=Xa),g}function h(g){let x=0;const S=6;for(let b=0;b<S;b++)g[b]!==void 0&&x++;return x===S}function f(g){const x=g.target;x.removeEventListener("dispose",f);const S=e.get(x);S!==void 0&&(e.delete(x),S.dispose())}function m(g){const x=g.target;x.removeEventListener("dispose",m);const S=t.get(x);S!==void 0&&(t.delete(x),S.dispose())}function v(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:v}}function Zw(r){const e={};function t(i){if(e[i]!==void 0)return e[i];const a=r.getExtension(i);return e[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const a=t(i);return a===null&&Ha("WebGLRenderer: "+i+" extension not supported."),a}}}function Kw(r,e,t,i){const a={},o=new WeakMap;function c(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const S in g.attributes)e.remove(g.attributes[S]);g.removeEventListener("dispose",c),delete a[g.id];const x=o.get(g);x&&(e.remove(x),o.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function d(v,g){return a[g.id]===!0||(g.addEventListener("dispose",c),a[g.id]=!0,t.memory.geometries++),g}function h(v){const g=v.attributes;for(const x in g)e.update(g[x],r.ARRAY_BUFFER)}function f(v){const g=[],x=v.index,S=v.attributes.position;let b=0;if(S===void 0)return;if(x!==null){const N=x.array;b=x.version;for(let P=0,T=N.length;P<T;P+=3){const I=N[P+0],L=N[P+1],O=N[P+2];g.push(I,L,L,O,O,I)}}else{const N=S.array;b=S.version;for(let P=0,T=N.length/3-1;P<T;P+=3){const I=P+0,L=P+1,O=P+2;g.push(I,L,L,O,O,I)}}const M=new(S.count>=65535?nx:tx)(g,1);M.version=b;const y=o.get(v);y&&e.remove(y),o.set(v,M)}function m(v){const g=o.get(v);if(g){const x=v.index;x!==null&&g.version<x.version&&f(v)}else f(v);return o.get(v)}return{get:d,update:h,getWireframeAttribute:m}}function Jw(r,e,t){let i;function a(v){i=v}let o,c;function d(v){o=v.type,c=v.bytesPerElement}function h(v,g){r.drawElements(i,g,o,v*c),t.update(g,i,1)}function f(v,g,x){x!==0&&(r.drawElementsInstanced(i,g,o,v*c,x),t.update(g,i,x))}function m(v,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,o,v,0,x);let b=0;for(let M=0;M<x;M++)b+=g[M];t.update(b,i,1)}this.setMode=a,this.setIndex=d,this.render=h,this.renderInstances=f,this.renderMultiDraw=m}function Qw(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,c,d){switch(t.calls++,c){case r.TRIANGLES:t.triangles+=d*(o/3);break;case r.LINES:t.lines+=d*(o/2);break;case r.LINE_STRIP:t.lines+=d*(o-1);break;case r.LINE_LOOP:t.lines+=d*o;break;case r.POINTS:t.points+=d*o;break;default:Wt("WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:i}}function eT(r,e,t){const i=new WeakMap,a=new yn;function o(c,d,h){const f=c.morphTargetInfluences,m=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=m!==void 0?m.length:0;let g=i.get(d);if(g===void 0||g.count!==v){let R=function(){O.dispose(),i.delete(d),d.removeEventListener("dispose",R)};g!==void 0&&g.texture.dispose();const x=d.morphAttributes.position!==void 0,S=d.morphAttributes.normal!==void 0,b=d.morphAttributes.color!==void 0,M=d.morphAttributes.position||[],y=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let P=0;x===!0&&(P=1),S===!0&&(P=2),b===!0&&(P=3);let T=d.attributes.position.count*P,I=1;T>e.maxTextureSize&&(I=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const L=new Float32Array(T*I*4*v),O=new Qv(L,T,I,v);O.type=tr,O.needsUpdate=!0;const E=P*4;for(let z=0;z<v;z++){const B=M[z],j=y[z],G=N[z],de=T*I*4*z;for(let W=0;W<B.count;W++){const ae=W*E;x===!0&&(a.fromBufferAttribute(B,W),L[de+ae+0]=a.x,L[de+ae+1]=a.y,L[de+ae+2]=a.z,L[de+ae+3]=0),S===!0&&(a.fromBufferAttribute(j,W),L[de+ae+4]=a.x,L[de+ae+5]=a.y,L[de+ae+6]=a.z,L[de+ae+7]=0),b===!0&&(a.fromBufferAttribute(G,W),L[de+ae+8]=a.x,L[de+ae+9]=a.y,L[de+ae+10]=a.z,L[de+ae+11]=G.itemSize===4?a.w:1)}}g={count:v,texture:O,size:new ke(T,I)},i.set(d,g),d.addEventListener("dispose",R)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",c.morphTexture,t);else{let x=0;for(let b=0;b<f.length;b++)x+=f[b];const S=d.morphTargetsRelative?1:1-x;h.getUniforms().setValue(r,"morphTargetBaseInfluence",S),h.getUniforms().setValue(r,"morphTargetInfluences",f)}h.getUniforms().setValue(r,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:o}}function tT(r,e,t,i,a){let o=new WeakMap;function c(f){const m=a.render.frame,v=f.geometry,g=e.get(f,v);if(o.get(g)!==m&&(e.update(g),o.set(g,m)),f.isInstancedMesh&&(f.hasEventListener("dispose",h)===!1&&f.addEventListener("dispose",h),o.get(f)!==m&&(t.update(f.instanceMatrix,r.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,r.ARRAY_BUFFER),o.set(f,m))),f.isSkinnedMesh){const x=f.skeleton;o.get(x)!==m&&(x.update(),o.set(x,m))}return g}function d(){o=new WeakMap}function h(f){const m=f.target;m.removeEventListener("dispose",h),i.releaseStatesOfObject(m),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:c,dispose:d}}const nT={[Ov]:"LINEAR_TONE_MAPPING",[zv]:"REINHARD_TONE_MAPPING",[kv]:"CINEON_TONE_MAPPING",[Bv]:"ACES_FILMIC_TONE_MAPPING",[Vv]:"AGX_TONE_MAPPING",[Gv]:"NEUTRAL_TONE_MAPPING",[Hv]:"CUSTOM_TONE_MAPPING"};function iT(r,e,t,i,a,o){const c=new or(e,t,{type:r,depthBuffer:a,stencilBuffer:o,samples:i?4:0,depthTexture:a?new $a(e,t):void 0}),d=new or(e,t,{type:Dr,depthBuffer:!1,stencilBuffer:!1}),h=new En;h.setAttribute("position",new wn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new wn([0,2,0,0,2,0],2));const f=new VM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),m=new Yn(h,f),v=new rp(-1,1,1,-1,0,1);let g=null,x=null,S=!1,b,M=null,y=[],N=!1;this.setSize=function(P,T){c.setSize(P,T),d.setSize(P,T);for(let I=0;I<y.length;I++){const L=y[I];L.setSize&&L.setSize(P,T)}},this.setEffects=function(P){y=P,N=y.length>0&&y[0].isRenderPass===!0;const T=c.width,I=c.height;for(let L=0;L<y.length;L++){const O=y[L];O.setSize&&O.setSize(T,I)}},this.begin=function(P,T){if(S||P.toneMapping===sr&&y.length===0)return!1;if(M=T,T!==null){const I=T.width,L=T.height;(c.width!==I||c.height!==L)&&this.setSize(I,L)}return N===!1&&P.setRenderTarget(c),b=P.toneMapping,P.toneMapping=sr,!0},this.hasRenderPass=function(){return N},this.end=function(P,T){P.toneMapping=b,S=!0;let I=c,L=d;for(let O=0;O<y.length;O++){const E=y[O];if(E.enabled!==!1&&(E.render(P,L,I,T),E.needsSwap!==!1)){const R=I;I=L,L=R}}if(g!==P.outputColorSpace||x!==P.toneMapping){g=P.outputColorSpace,x=P.toneMapping,f.defines={},jt.getTransfer(g)===tn&&(f.defines.SRGB_TRANSFER="");const O=nT[x];O&&(f.defines[O]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=I.texture,P.setRenderTarget(M),P.render(m,v),M=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),d.dispose(),h.dispose(),f.dispose()}}const wx=new Vn,Nh=new $a(1,1),Tx=new Qv,bx=new US,Ax=new ax,H0=[],V0=[],G0=new Float32Array(16),W0=new Float32Array(9),X0=new Float32Array(4);function Za(r,e,t){const i=r[0];if(i<=0||i>0)return r;const a=e*t;let o=H0[a];if(o===void 0&&(o=new Float32Array(a),H0[a]=o),e!==0){i.toArray(o,0);for(let c=1,d=0;c!==e;++c)d+=t,r[c].toArray(o,d)}return o}function In(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function Un(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function fu(r,e){let t=V0[e];t===void 0&&(t=new Int32Array(e),V0[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function rT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function sT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(In(t,e))return;r.uniform2fv(this.addr,e),Un(t,e)}}function aT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(In(t,e))return;r.uniform3fv(this.addr,e),Un(t,e)}}function oT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(In(t,e))return;r.uniform4fv(this.addr,e),Un(t,e)}}function lT(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(In(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Un(t,e)}else{if(In(t,i))return;X0.set(i),r.uniformMatrix2fv(this.addr,!1,X0),Un(t,i)}}function cT(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(In(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Un(t,e)}else{if(In(t,i))return;W0.set(i),r.uniformMatrix3fv(this.addr,!1,W0),Un(t,i)}}function uT(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(In(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Un(t,e)}else{if(In(t,i))return;G0.set(i),r.uniformMatrix4fv(this.addr,!1,G0),Un(t,i)}}function dT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function fT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(In(t,e))return;r.uniform2iv(this.addr,e),Un(t,e)}}function hT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(In(t,e))return;r.uniform3iv(this.addr,e),Un(t,e)}}function pT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(In(t,e))return;r.uniform4iv(this.addr,e),Un(t,e)}}function mT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function gT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(In(t,e))return;r.uniform2uiv(this.addr,e),Un(t,e)}}function vT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(In(t,e))return;r.uniform3uiv(this.addr,e),Un(t,e)}}function xT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(In(t,e))return;r.uniform4uiv(this.addr,e),Un(t,e)}}function _T(r,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a);let o;this.type===r.SAMPLER_2D_SHADOW?(Nh.compareFunction=t.isReversedDepthBuffer()?jh:$h,o=Nh):o=wx,t.setTexture2D(e||o,a)}function yT(r,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(e||bx,a)}function ST(r,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(e||Ax,a)}function MT(r,e,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(e||Tx,a)}function ET(r){switch(r){case 5126:return rT;case 35664:return sT;case 35665:return aT;case 35666:return oT;case 35674:return lT;case 35675:return cT;case 35676:return uT;case 5124:case 35670:return dT;case 35667:case 35671:return fT;case 35668:case 35672:return hT;case 35669:case 35673:return pT;case 5125:return mT;case 36294:return gT;case 36295:return vT;case 36296:return xT;case 35678:case 36198:case 36298:case 36306:case 35682:return _T;case 35679:case 36299:case 36307:return yT;case 35680:case 36300:case 36308:case 36293:return ST;case 36289:case 36303:case 36311:case 36292:return MT}}function wT(r,e){r.uniform1fv(this.addr,e)}function TT(r,e){const t=Za(e,this.size,2);r.uniform2fv(this.addr,t)}function bT(r,e){const t=Za(e,this.size,3);r.uniform3fv(this.addr,t)}function AT(r,e){const t=Za(e,this.size,4);r.uniform4fv(this.addr,t)}function CT(r,e){const t=Za(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function RT(r,e){const t=Za(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function PT(r,e){const t=Za(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function LT(r,e){r.uniform1iv(this.addr,e)}function NT(r,e){r.uniform2iv(this.addr,e)}function DT(r,e){r.uniform3iv(this.addr,e)}function IT(r,e){r.uniform4iv(this.addr,e)}function UT(r,e){r.uniform1uiv(this.addr,e)}function FT(r,e){r.uniform2uiv(this.addr,e)}function OT(r,e){r.uniform3uiv(this.addr,e)}function zT(r,e){r.uniform4uiv(this.addr,e)}function kT(r,e,t){const i=this.cache,a=e.length,o=fu(t,a);In(i,o)||(r.uniform1iv(this.addr,o),Un(i,o));let c;this.type===r.SAMPLER_2D_SHADOW?c=Nh:c=wx;for(let d=0;d!==a;++d)t.setTexture2D(e[d]||c,o[d])}function BT(r,e,t){const i=this.cache,a=e.length,o=fu(t,a);In(i,o)||(r.uniform1iv(this.addr,o),Un(i,o));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||bx,o[c])}function HT(r,e,t){const i=this.cache,a=e.length,o=fu(t,a);In(i,o)||(r.uniform1iv(this.addr,o),Un(i,o));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||Ax,o[c])}function VT(r,e,t){const i=this.cache,a=e.length,o=fu(t,a);In(i,o)||(r.uniform1iv(this.addr,o),Un(i,o));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||Tx,o[c])}function GT(r){switch(r){case 5126:return wT;case 35664:return TT;case 35665:return bT;case 35666:return AT;case 35674:return CT;case 35675:return RT;case 35676:return PT;case 5124:case 35670:return LT;case 35667:case 35671:return NT;case 35668:case 35672:return DT;case 35669:case 35673:return IT;case 5125:return UT;case 36294:return FT;case 36295:return OT;case 36296:return zT;case 35678:case 36198:case 36298:case 36306:case 35682:return kT;case 35679:case 36299:case 36307:return BT;case 35680:case 36300:case 36308:case 36293:return HT;case 36289:case 36303:case 36311:case 36292:return VT}}class WT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ET(t.type)}}class XT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=GT(t.type)}}class $T{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const a=this.seq;for(let o=0,c=a.length;o!==c;++o){const d=a[o];d.setValue(e,t[d.id],i)}}}const Nf=/(\w+)(\])?(\[|\.)?/g;function $0(r,e){r.seq.push(e),r.map[e.id]=e}function jT(r,e,t){const i=r.name,a=i.length;for(Nf.lastIndex=0;;){const o=Nf.exec(i),c=Nf.lastIndex;let d=o[1];const h=o[2]==="]",f=o[3];if(h&&(d=d|0),f===void 0||f==="["&&c+2===a){$0(t,f===void 0?new WT(d,r,e):new XT(d,r,e));break}else{let v=t.map[d];v===void 0&&(v=new $T(d),$0(t,v)),t=v}}}class jc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){const d=e.getActiveUniform(t,c),h=e.getUniformLocation(t,d.name);jT(d,h,this)}const a=[],o=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(c):o.push(c);a.length>0&&(this.seq=a.concat(o))}setValue(e,t,i,a){const o=this.map[t];o!==void 0&&o.setValue(e,i,a)}setOptional(e,t,i){const a=t[i];a!==void 0&&this.setValue(e,i,a)}static upload(e,t,i,a){for(let o=0,c=t.length;o!==c;++o){const d=t[o],h=i[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,a)}}static seqWithValue(e,t){const i=[];for(let a=0,o=e.length;a!==o;++a){const c=e[a];c.id in t&&i.push(c)}return i}}function j0(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const YT=37297;let qT=0;function ZT(r,e){const t=r.split(`
`),i=[],a=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let c=a;c<o;c++){const d=c+1;i.push(`${d===e?">":" "} ${d}: ${t[c]}`)}return i.join(`
`)}const Y0=new It;function KT(r){jt._getMatrix(Y0,jt.workingColorSpace,r);const e=`mat3( ${Y0.elements.map(t=>t.toFixed(4))} )`;switch(jt.getTransfer(r)){case Jc:return[e,"LinearTransferOETF"];case tn:return[e,"sRGBTransferOETF"];default:return Ct("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function q0(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),o=(r.getShaderInfoLog(e)||"").trim();if(i&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const d=parseInt(c[1]);return t.toUpperCase()+`

`+o+`

`+ZT(r.getShaderSource(e),d)}else return o}function JT(r,e){const t=KT(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const QT={[Ov]:"Linear",[zv]:"Reinhard",[kv]:"Cineon",[Bv]:"ACESFilmic",[Vv]:"AgX",[Gv]:"Neutral",[Hv]:"Custom"};function eb(r,e){const t=QT[e];return t===void 0?(Ct("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Oc=new $;function tb(){jt.getLuminanceCoefficients(Oc);const r=Oc.x.toFixed(4),e=Oc.y.toFixed(4),t=Oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nb(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function ib(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function rb(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const o=r.getActiveAttrib(e,a),c=o.name;let d=1;o.type===r.FLOAT_MAT2&&(d=2),o.type===r.FLOAT_MAT3&&(d=3),o.type===r.FLOAT_MAT4&&(d=4),t[c]={type:o.type,location:r.getAttribLocation(e,c),locationSize:d}}return t}function Xo(r){return r!==""}function Z0(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function K0(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dh(r){return r.replace(sb,ob)}const ab=new Map;function ob(r,e){let t=zt[e];if(t===void 0){const i=ab.get(e);if(i!==void 0)t=zt[i],Ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Dh(t)}const lb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function J0(r){return r.replace(lb,cb)}function cb(r,e,t,i){let a="";for(let o=parseInt(e);o<parseInt(t);o++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return a}function Q0(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const ub={[Vc]:"SHADOWMAP_TYPE_PCF",[Go]:"SHADOWMAP_TYPE_VSM"};function db(r){return ub[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const fb={[Gs]:"ENVMAP_TYPE_CUBE",[Xa]:"ENVMAP_TYPE_CUBE",[au]:"ENVMAP_TYPE_CUBE_UV"};function hb(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":fb[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const pb={[Xa]:"ENVMAP_MODE_REFRACTION"};function mb(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":pb[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const gb={[kh]:"ENVMAP_BLENDING_MULTIPLY",[Qy]:"ENVMAP_BLENDING_MIX",[eS]:"ENVMAP_BLENDING_ADD"};function vb(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":gb[r.combine]||"ENVMAP_BLENDING_NONE"}function xb(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function _b(r,e,t,i){const a=r.getContext(),o=t.defines;let c=t.vertexShader,d=t.fragmentShader;const h=db(t),f=hb(t),m=mb(t),v=vb(t),g=xb(t),x=nb(t),S=ib(o),b=a.createProgram();let M,y,N=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Xo).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Xo).join(`
`),y.length>0&&(y+=`
`)):(M=[Q0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),y=[Q0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+m:"",t.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==sr?"#define TONE_MAPPING":"",t.toneMapping!==sr?zt.tonemapping_pars_fragment:"",t.toneMapping!==sr?eb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,JT("linearToOutputTexel",t.outputColorSpace),tb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xo).join(`
`)),c=Dh(c),c=Z0(c,t),c=K0(c,t),d=Dh(d),d=Z0(d,t),d=K0(d,t),c=J0(c),d=J0(d),t.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,M=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",t.glslVersion===jg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const P=N+M+c,T=N+y+d,I=j0(a,a.VERTEX_SHADER,P),L=j0(a,a.FRAGMENT_SHADER,T);a.attachShader(b,I),a.attachShader(b,L),t.index0AttributeName!==void 0?a.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&a.bindAttribLocation(b,0,"position"),a.linkProgram(b);function O(B){if(r.debug.checkShaderErrors){const j=a.getProgramInfoLog(b)||"",G=a.getShaderInfoLog(I)||"",de=a.getShaderInfoLog(L)||"",W=j.trim(),ae=G.trim(),Q=de.trim();let q=!0,ie=!0;if(a.getProgramParameter(b,a.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(a,b,I,L);else{const ee=q0(a,I,"vertex"),k=q0(a,L,"fragment");Wt("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(b,a.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+W+`
`+ee+`
`+k)}else W!==""?Ct("WebGLProgram: Program Info Log:",W):(ae===""||Q==="")&&(ie=!1);ie&&(B.diagnostics={runnable:q,programLog:W,vertexShader:{log:ae,prefix:M},fragmentShader:{log:Q,prefix:y}})}a.deleteShader(I),a.deleteShader(L),E=new jc(a,b),R=rb(a,b)}let E;this.getUniforms=function(){return E===void 0&&O(this),E};let R;this.getAttributes=function(){return R===void 0&&O(this),R};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=a.getProgramParameter(b,YT)),z},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qT++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=I,this.fragmentShader=L,this}let yb=0;class Sb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const a=this._getShaderCacheForMaterial(e);return a.has(t)===!1&&(a.add(t),t.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Mb(e),t.set(e,i)),i}}class Mb{constructor(e){this.id=yb++,this.code=e,this.usedTimes=0}}function Eb(r){return r===Ws||r===qc||r===Zc}function wb(r,e,t,i,a,o){const c=new Zh,d=new Sb,h=new Set,f=[],m=new Map,v=i.logarithmicDepthBuffer;let g=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(E){return h.add(E),E===0?"uv":`uv${E}`}function b(E,R,z,B,j,G){const de=B.fog,W=j.geometry,ae=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?B.environment:null,Q=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,q=e.get(E.envMap||ae,Q),ie=q&&q.mapping===au?q.image.height:null,ee=x[E.type];E.precision!==null&&(g=i.getMaxPrecision(E.precision),g!==E.precision&&Ct("WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const k=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,J=k!==void 0?k.length:0;let Pe=0;W.morphAttributes.position!==void 0&&(Pe=1),W.morphAttributes.normal!==void 0&&(Pe=2),W.morphAttributes.color!==void 0&&(Pe=3);let oe,ve,K,xe;if(ee){const ot=er[ee];oe=ot.vertexShader,ve=ot.fragmentShader}else{oe=E.vertexShader,ve=E.fragmentShader;const ot=d.getVertexShaderStage(E),Jt=d.getFragmentShaderStage(E);d.update(E,ot,Jt),K=ot.id,xe=Jt.id}const ge=r.getRenderTarget(),ce=r.state.buffers.depth.getReversed(),be=j.isInstancedMesh===!0,et=j.isBatchedMesh===!0,Mt=!!E.map,Ge=!!E.matcap,we=!!q,Le=!!E.aoMap,De=!!E.lightMap,Qe=!!E.bumpMap&&E.wireframe===!1,je=!!E.normalMap,vt=!!E.displacementMap,st=!!E.emissiveMap,_t=!!E.metalnessMap,Et=!!E.roughnessMap,X=E.anisotropy>0,Bt=E.clearcoat>0,Dt=E.dispersion>0,F=E.iridescence>0,w=E.sheen>0,re=E.transmission>0,ue=X&&!!E.anisotropyMap,Me=Bt&&!!E.clearcoatMap,Oe=Bt&&!!E.clearcoatNormalMap,ze=Bt&&!!E.clearcoatRoughnessMap,U=F&&!!E.iridescenceMap,V=F&&!!E.iridescenceThicknessMap,le=w&&!!E.sheenColorMap,Ee=w&&!!E.sheenRoughnessMap,Ce=!!E.specularMap,Ae=!!E.specularColorMap,Ke=!!E.specularIntensityMap,nt=re&&!!E.transmissionMap,ft=re&&!!E.thicknessMap,Y=!!E.gradientMap,$e=!!E.alphaMap,Te=E.alphaTest>0,Ie=!!E.alphaHash,Ye=!!E.extensions;let Ne=sr;E.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Ne=r.toneMapping);const ct={shaderID:ee,shaderType:E.type,shaderName:E.name,vertexShader:oe,fragmentShader:ve,defines:E.defines,customVertexShaderID:K,customFragmentShaderID:xe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:et,batchingColor:et&&j._colorsTexture!==null,instancing:be,instancingColor:be&&j.instanceColor!==null,instancingMorph:be&&j.morphTexture!==null,outputColorSpace:ge===null?r.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:jt.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:Mt,matcap:Ge,envMap:we,envMapMode:we&&q.mapping,envMapCubeUVHeight:ie,aoMap:Le,lightMap:De,bumpMap:Qe,normalMap:je,displacementMap:vt,emissiveMap:st,normalMapObjectSpace:je&&E.normalMapType===iS,normalMapTangentSpace:je&&E.normalMapType===bh,packedNormalMap:je&&E.normalMapType===bh&&Eb(E.normalMap.format),metalnessMap:_t,roughnessMap:Et,anisotropy:X,anisotropyMap:ue,clearcoat:Bt,clearcoatMap:Me,clearcoatNormalMap:Oe,clearcoatRoughnessMap:ze,dispersion:Dt,iridescence:F,iridescenceMap:U,iridescenceThicknessMap:V,sheen:w,sheenColorMap:le,sheenRoughnessMap:Ee,specularMap:Ce,specularColorMap:Ae,specularIntensityMap:Ke,transmission:re,transmissionMap:nt,thicknessMap:ft,gradientMap:Y,opaque:E.transparent===!1&&E.blending===Ba&&E.alphaToCoverage===!1,alphaMap:$e,alphaTest:Te,alphaHash:Ie,combine:E.combine,mapUv:Mt&&S(E.map.channel),aoMapUv:Le&&S(E.aoMap.channel),lightMapUv:De&&S(E.lightMap.channel),bumpMapUv:Qe&&S(E.bumpMap.channel),normalMapUv:je&&S(E.normalMap.channel),displacementMapUv:vt&&S(E.displacementMap.channel),emissiveMapUv:st&&S(E.emissiveMap.channel),metalnessMapUv:_t&&S(E.metalnessMap.channel),roughnessMapUv:Et&&S(E.roughnessMap.channel),anisotropyMapUv:ue&&S(E.anisotropyMap.channel),clearcoatMapUv:Me&&S(E.clearcoatMap.channel),clearcoatNormalMapUv:Oe&&S(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&S(E.clearcoatRoughnessMap.channel),iridescenceMapUv:U&&S(E.iridescenceMap.channel),iridescenceThicknessMapUv:V&&S(E.iridescenceThicknessMap.channel),sheenColorMapUv:le&&S(E.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&S(E.sheenRoughnessMap.channel),specularMapUv:Ce&&S(E.specularMap.channel),specularColorMapUv:Ae&&S(E.specularColorMap.channel),specularIntensityMapUv:Ke&&S(E.specularIntensityMap.channel),transmissionMapUv:nt&&S(E.transmissionMap.channel),thicknessMapUv:ft&&S(E.thicknessMap.channel),alphaMapUv:$e&&S(E.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(je||X),vertexNormals:!!W.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!W.attributes.uv&&(Mt||$e),fog:!!de,useFog:E.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||W.attributes.normal===void 0&&je===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:ce,skinning:j.isSkinnedMesh===!0,hasPositionAttribute:W.attributes.position!==void 0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:Pe,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&z.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ne,decodeVideoTexture:Mt&&E.map.isVideoTexture===!0&&jt.getTransfer(E.map.colorSpace)===tn,decodeVideoTextureEmissive:st&&E.emissiveMap.isVideoTexture===!0&&jt.getTransfer(E.emissiveMap.colorSpace)===tn,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Hi,flipSided:E.side===jn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ye&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&E.extensions.multiDraw===!0||et)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ct.vertexUv1s=h.has(1),ct.vertexUv2s=h.has(2),ct.vertexUv3s=h.has(3),h.clear(),ct}function M(E){const R=[];if(E.shaderID?R.push(E.shaderID):(R.push(E.customVertexShaderID),R.push(E.customFragmentShaderID)),E.defines!==void 0)for(const z in E.defines)R.push(z),R.push(E.defines[z]);return E.isRawShaderMaterial===!1&&(y(R,E),N(R,E),R.push(r.outputColorSpace)),R.push(E.customProgramCacheKey),R.join()}function y(E,R){E.push(R.precision),E.push(R.outputColorSpace),E.push(R.envMapMode),E.push(R.envMapCubeUVHeight),E.push(R.mapUv),E.push(R.alphaMapUv),E.push(R.lightMapUv),E.push(R.aoMapUv),E.push(R.bumpMapUv),E.push(R.normalMapUv),E.push(R.displacementMapUv),E.push(R.emissiveMapUv),E.push(R.metalnessMapUv),E.push(R.roughnessMapUv),E.push(R.anisotropyMapUv),E.push(R.clearcoatMapUv),E.push(R.clearcoatNormalMapUv),E.push(R.clearcoatRoughnessMapUv),E.push(R.iridescenceMapUv),E.push(R.iridescenceThicknessMapUv),E.push(R.sheenColorMapUv),E.push(R.sheenRoughnessMapUv),E.push(R.specularMapUv),E.push(R.specularColorMapUv),E.push(R.specularIntensityMapUv),E.push(R.transmissionMapUv),E.push(R.thicknessMapUv),E.push(R.combine),E.push(R.fogExp2),E.push(R.sizeAttenuation),E.push(R.morphTargetsCount),E.push(R.morphAttributeCount),E.push(R.numDirLights),E.push(R.numPointLights),E.push(R.numSpotLights),E.push(R.numSpotLightMaps),E.push(R.numHemiLights),E.push(R.numRectAreaLights),E.push(R.numDirLightShadows),E.push(R.numPointLightShadows),E.push(R.numSpotLightShadows),E.push(R.numSpotLightShadowsWithMaps),E.push(R.numLightProbes),E.push(R.shadowMapType),E.push(R.toneMapping),E.push(R.numClippingPlanes),E.push(R.numClipIntersection),E.push(R.depthPacking)}function N(E,R){c.disableAll(),R.instancing&&c.enable(0),R.instancingColor&&c.enable(1),R.instancingMorph&&c.enable(2),R.matcap&&c.enable(3),R.envMap&&c.enable(4),R.normalMapObjectSpace&&c.enable(5),R.normalMapTangentSpace&&c.enable(6),R.clearcoat&&c.enable(7),R.iridescence&&c.enable(8),R.alphaTest&&c.enable(9),R.vertexColors&&c.enable(10),R.vertexAlphas&&c.enable(11),R.vertexUv1s&&c.enable(12),R.vertexUv2s&&c.enable(13),R.vertexUv3s&&c.enable(14),R.vertexTangents&&c.enable(15),R.anisotropy&&c.enable(16),R.alphaHash&&c.enable(17),R.batching&&c.enable(18),R.dispersion&&c.enable(19),R.batchingColor&&c.enable(20),R.gradientMap&&c.enable(21),R.packedNormalMap&&c.enable(22),R.vertexNormals&&c.enable(23),E.push(c.mask),c.disableAll(),R.fog&&c.enable(0),R.useFog&&c.enable(1),R.flatShading&&c.enable(2),R.logarithmicDepthBuffer&&c.enable(3),R.reversedDepthBuffer&&c.enable(4),R.skinning&&c.enable(5),R.morphTargets&&c.enable(6),R.morphNormals&&c.enable(7),R.morphColors&&c.enable(8),R.premultipliedAlpha&&c.enable(9),R.shadowMapEnabled&&c.enable(10),R.doubleSided&&c.enable(11),R.flipSided&&c.enable(12),R.useDepthPacking&&c.enable(13),R.dithering&&c.enable(14),R.transmission&&c.enable(15),R.sheen&&c.enable(16),R.opaque&&c.enable(17),R.pointsUvs&&c.enable(18),R.decodeVideoTexture&&c.enable(19),R.decodeVideoTextureEmissive&&c.enable(20),R.alphaToCoverage&&c.enable(21),R.numLightProbeGrids>0&&c.enable(22),R.hasPositionAttribute&&c.enable(23),E.push(c.mask)}function P(E){const R=x[E.type];let z;if(R){const B=er[R];z=kM.clone(B.uniforms)}else z=E.uniforms;return z}function T(E,R){let z=m.get(R);return z!==void 0?++z.usedTimes:(z=new _b(r,R,E,a),f.push(z),m.set(R,z)),z}function I(E){if(--E.usedTimes===0){const R=f.indexOf(E);f[R]=f[f.length-1],f.pop(),m.delete(E.cacheKey),E.destroy()}}function L(E){d.remove(E)}function O(){d.dispose()}return{getParameters:b,getProgramCacheKey:M,getUniforms:P,acquireProgram:T,releaseProgram:I,releaseShaderCache:L,programs:f,dispose:O}}function Tb(){let r=new WeakMap;function e(c){return r.has(c)}function t(c){let d=r.get(c);return d===void 0&&(d={},r.set(c,d)),d}function i(c){r.delete(c)}function a(c,d,h){r.get(c)[d]=h}function o(){r=new WeakMap}return{has:e,get:t,remove:i,update:a,dispose:o}}function bb(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function ev(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function tv(){const r=[];let e=0;const t=[],i=[],a=[];function o(){e=0,t.length=0,i.length=0,a.length=0}function c(g){let x=0;return g.isInstancedMesh&&(x+=2),g.isSkinnedMesh&&(x+=1),x}function d(g,x,S,b,M,y){let N=r[e];return N===void 0?(N={id:g.id,object:g,geometry:x,material:S,materialVariant:c(g),groupOrder:b,renderOrder:g.renderOrder,z:M,group:y},r[e]=N):(N.id=g.id,N.object=g,N.geometry=x,N.material=S,N.materialVariant=c(g),N.groupOrder=b,N.renderOrder=g.renderOrder,N.z=M,N.group=y),e++,N}function h(g,x,S,b,M,y){const N=d(g,x,S,b,M,y);S.transmission>0?i.push(N):S.transparent===!0?a.push(N):t.push(N)}function f(g,x,S,b,M,y){const N=d(g,x,S,b,M,y);S.transmission>0?i.unshift(N):S.transparent===!0?a.unshift(N):t.unshift(N)}function m(g,x,S){t.length>1&&t.sort(g||bb),i.length>1&&i.sort(x||ev),a.length>1&&a.sort(x||ev),S&&(t.reverse(),i.reverse(),a.reverse())}function v(){for(let g=e,x=r.length;g<x;g++){const S=r[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:i,transparent:a,init:o,push:h,unshift:f,finish:v,sort:m}}function Ab(){let r=new WeakMap;function e(i,a){const o=r.get(i);let c;return o===void 0?(c=new tv,r.set(i,[c])):a>=o.length?(c=new tv,o.push(c)):c=o[a],c}function t(){r=new WeakMap}return{get:e,dispose:t}}function Cb(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new $,color:new Ot};break;case"SpotLight":t={position:new $,direction:new $,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":t={color:new Ot,position:new $,halfWidth:new $,halfHeight:new $};break}return r[e.id]=t,t}}}function Rb(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Pb=0;function Lb(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Nb(r){const e=new Cb,t=Rb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new $);const a=new $,o=new un,c=new un;function d(f){let m=0,v=0,g=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let x=0,S=0,b=0,M=0,y=0,N=0,P=0,T=0,I=0,L=0,O=0;f.sort(Lb);for(let R=0,z=f.length;R<z;R++){const B=f[R],j=B.color,G=B.intensity,de=B.distance;let W=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===Ws?W=B.shadow.map.texture:W=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)m+=j.r*G,v+=j.g*G,g+=j.b*G;else if(B.isLightProbe){for(let ae=0;ae<9;ae++)i.probe[ae].addScaledVector(B.sh.coefficients[ae],G);O++}else if(B.isDirectionalLight){const ae=e.get(B);if(ae.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const Q=B.shadow,q=t.get(B);q.shadowIntensity=Q.intensity,q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,i.directionalShadow[x]=q,i.directionalShadowMap[x]=W,i.directionalShadowMatrix[x]=B.shadow.matrix,N++}i.directional[x]=ae,x++}else if(B.isSpotLight){const ae=e.get(B);ae.position.setFromMatrixPosition(B.matrixWorld),ae.color.copy(j).multiplyScalar(G),ae.distance=de,ae.coneCos=Math.cos(B.angle),ae.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),ae.decay=B.decay,i.spot[b]=ae;const Q=B.shadow;if(B.map&&(i.spotLightMap[I]=B.map,I++,Q.updateMatrices(B),B.castShadow&&L++),i.spotLightMatrix[b]=Q.matrix,B.castShadow){const q=t.get(B);q.shadowIntensity=Q.intensity,q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,i.spotShadow[b]=q,i.spotShadowMap[b]=W,T++}b++}else if(B.isRectAreaLight){const ae=e.get(B);ae.color.copy(j).multiplyScalar(G),ae.halfWidth.set(B.width*.5,0,0),ae.halfHeight.set(0,B.height*.5,0),i.rectArea[M]=ae,M++}else if(B.isPointLight){const ae=e.get(B);if(ae.color.copy(B.color).multiplyScalar(B.intensity),ae.distance=B.distance,ae.decay=B.decay,B.castShadow){const Q=B.shadow,q=t.get(B);q.shadowIntensity=Q.intensity,q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,q.shadowCameraNear=Q.camera.near,q.shadowCameraFar=Q.camera.far,i.pointShadow[S]=q,i.pointShadowMap[S]=W,i.pointShadowMatrix[S]=B.shadow.matrix,P++}i.point[S]=ae,S++}else if(B.isHemisphereLight){const ae=e.get(B);ae.skyColor.copy(B.color).multiplyScalar(G),ae.groundColor.copy(B.groundColor).multiplyScalar(G),i.hemi[y]=ae,y++}}M>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=tt.LTC_FLOAT_1,i.rectAreaLTC2=tt.LTC_FLOAT_2):(i.rectAreaLTC1=tt.LTC_HALF_1,i.rectAreaLTC2=tt.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=v,i.ambient[2]=g;const E=i.hash;(E.directionalLength!==x||E.pointLength!==S||E.spotLength!==b||E.rectAreaLength!==M||E.hemiLength!==y||E.numDirectionalShadows!==N||E.numPointShadows!==P||E.numSpotShadows!==T||E.numSpotMaps!==I||E.numLightProbes!==O)&&(i.directional.length=x,i.spot.length=b,i.rectArea.length=M,i.point.length=S,i.hemi.length=y,i.directionalShadow.length=N,i.directionalShadowMap.length=N,i.pointShadow.length=P,i.pointShadowMap.length=P,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=N,i.pointShadowMatrix.length=P,i.spotLightMatrix.length=T+I-L,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=O,E.directionalLength=x,E.pointLength=S,E.spotLength=b,E.rectAreaLength=M,E.hemiLength=y,E.numDirectionalShadows=N,E.numPointShadows=P,E.numSpotShadows=T,E.numSpotMaps=I,E.numLightProbes=O,i.version=Pb++)}function h(f,m){let v=0,g=0,x=0,S=0,b=0;const M=m.matrixWorldInverse;for(let y=0,N=f.length;y<N;y++){const P=f[y];if(P.isDirectionalLight){const T=i.directional[v];T.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(M),v++}else if(P.isSpotLight){const T=i.spot[x];T.position.setFromMatrixPosition(P.matrixWorld),T.position.applyMatrix4(M),T.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(M),x++}else if(P.isRectAreaLight){const T=i.rectArea[S];T.position.setFromMatrixPosition(P.matrixWorld),T.position.applyMatrix4(M),c.identity(),o.copy(P.matrixWorld),o.premultiply(M),c.extractRotation(o),T.halfWidth.set(P.width*.5,0,0),T.halfHeight.set(0,P.height*.5,0),T.halfWidth.applyMatrix4(c),T.halfHeight.applyMatrix4(c),S++}else if(P.isPointLight){const T=i.point[g];T.position.setFromMatrixPosition(P.matrixWorld),T.position.applyMatrix4(M),g++}else if(P.isHemisphereLight){const T=i.hemi[b];T.direction.setFromMatrixPosition(P.matrixWorld),T.direction.transformDirection(M),b++}}}return{setup:d,setupView:h,state:i}}function nv(r){const e=new Nb(r),t=[],i=[],a=[];function o(g){v.camera=g,t.length=0,i.length=0,a.length=0}function c(g){t.push(g)}function d(g){i.push(g)}function h(g){a.push(g)}function f(){e.setup(t)}function m(g){e.setupView(t,g)}const v={lightsArray:t,shadowsArray:i,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:v,setupLights:f,setupLightsView:m,pushLight:c,pushShadow:d,pushLightProbeGrid:h}}function Db(r){let e=new WeakMap;function t(a,o=0){const c=e.get(a);let d;return c===void 0?(d=new nv(r),e.set(a,[d])):o>=c.length?(d=new nv(r),c.push(d)):d=c[o],d}function i(){e=new WeakMap}return{get:t,dispose:i}}const Ib=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ub=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Fb=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],Ob=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],iv=new un,ko=new $,Df=new $;function zb(r,e,t){let i=new Kh;const a=new ke,o=new ke,c=new yn,d=new GM,h=new WM,f={},m=t.maxTextureSize,v={[gs]:jn,[jn]:gs,[Hi]:Hi},g=new ur({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:Ib,fragmentShader:Ub}),x=g.clone();x.defines.HORIZONTAL_PASS=1;const S=new En;S.setAttribute("position",new Wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Yn(S,g),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vc;let y=this.type;this.render=function(L,O,E){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||L.length===0)return;this.type===Iy&&(Ct("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Vc);const R=r.getRenderTarget(),z=r.getActiveCubeFace(),B=r.getActiveMipmapLevel(),j=r.state;j.setBlending(Lr),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const G=y!==this.type;G&&O.traverse(function(de){de.material&&(Array.isArray(de.material)?de.material.forEach(W=>W.needsUpdate=!0):de.material.needsUpdate=!0)});for(let de=0,W=L.length;de<W;de++){const ae=L[de],Q=ae.shadow;if(Q===void 0){Ct("WebGLShadowMap:",ae,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;a.copy(Q.mapSize);const q=Q.getFrameExtents();a.multiply(q),o.copy(Q.mapSize),(a.x>m||a.y>m)&&(a.x>m&&(o.x=Math.floor(m/q.x),a.x=o.x*q.x,Q.mapSize.x=o.x),a.y>m&&(o.y=Math.floor(m/q.y),a.y=o.y*q.y,Q.mapSize.y=o.y));const ie=r.state.buffers.depth.getReversed();if(Q.camera._reversedDepth=ie,Q.map===null||G===!0){if(Q.map!==null&&(Q.map.depthTexture!==null&&(Q.map.depthTexture.dispose(),Q.map.depthTexture=null),Q.map.dispose()),this.type===Go){if(ae.isPointLight){Ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Q.map=new or(a.x,a.y,{format:Ws,type:Dr,minFilter:Hn,magFilter:Hn,generateMipmaps:!1}),Q.map.texture.name=ae.name+".shadowMap",Q.map.depthTexture=new $a(a.x,a.y,tr),Q.map.depthTexture.name=ae.name+".shadowMapDepth",Q.map.depthTexture.format=Ir,Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=$n,Q.map.depthTexture.magFilter=$n}else ae.isPointLight?(Q.map=new Ex(a.x),Q.map.depthTexture=new nM(a.x,lr)):(Q.map=new or(a.x,a.y),Q.map.depthTexture=new $a(a.x,a.y,lr)),Q.map.depthTexture.name=ae.name+".shadowMap",Q.map.depthTexture.format=Ir,this.type===Vc?(Q.map.depthTexture.compareFunction=ie?jh:$h,Q.map.depthTexture.minFilter=Hn,Q.map.depthTexture.magFilter=Hn):(Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=$n,Q.map.depthTexture.magFilter=$n);Q.camera.updateProjectionMatrix()}const ee=Q.map.isWebGLCubeRenderTarget?6:1;for(let k=0;k<ee;k++){if(Q.map.isWebGLCubeRenderTarget)r.setRenderTarget(Q.map,k),r.clear();else{k===0&&(r.setRenderTarget(Q.map),r.clear());const J=Q.getViewport(k);c.set(o.x*J.x,o.y*J.y,o.x*J.z,o.y*J.w),j.viewport(c)}if(ae.isPointLight){const J=Q.camera,Pe=Q.matrix,oe=ae.distance||J.far;oe!==J.far&&(J.far=oe,J.updateProjectionMatrix()),ko.setFromMatrixPosition(ae.matrixWorld),J.position.copy(ko),Df.copy(J.position),Df.add(Fb[k]),J.up.copy(Ob[k]),J.lookAt(Df),J.updateMatrixWorld(),Pe.makeTranslation(-ko.x,-ko.y,-ko.z),iv.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),Q._frustum.setFromProjectionMatrix(iv,J.coordinateSystem,J.reversedDepth)}else Q.updateMatrices(ae);i=Q.getFrustum(),T(O,E,Q.camera,ae,this.type)}Q.isPointLightShadow!==!0&&this.type===Go&&N(Q,E),Q.needsUpdate=!1}y=this.type,M.needsUpdate=!1,r.setRenderTarget(R,z,B)};function N(L,O){const E=e.update(b);g.defines.VSM_SAMPLES!==L.blurSamples&&(g.defines.VSM_SAMPLES=L.blurSamples,x.defines.VSM_SAMPLES=L.blurSamples,g.needsUpdate=!0,x.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new or(a.x,a.y,{format:Ws,type:Dr})),g.uniforms.shadow_pass.value=L.map.depthTexture,g.uniforms.resolution.value=L.mapSize,g.uniforms.radius.value=L.radius,r.setRenderTarget(L.mapPass),r.clear(),r.renderBufferDirect(O,null,E,g,b,null),x.uniforms.shadow_pass.value=L.mapPass.texture,x.uniforms.resolution.value=L.mapSize,x.uniforms.radius.value=L.radius,r.setRenderTarget(L.map),r.clear(),r.renderBufferDirect(O,null,E,x,b,null)}function P(L,O,E,R){let z=null;const B=E.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(B!==void 0)z=B;else if(z=E.isPointLight===!0?h:d,r.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const j=z.uuid,G=O.uuid;let de=f[j];de===void 0&&(de={},f[j]=de);let W=de[G];W===void 0&&(W=z.clone(),de[G]=W,O.addEventListener("dispose",I)),z=W}if(z.visible=O.visible,z.wireframe=O.wireframe,R===Go?z.side=O.shadowSide!==null?O.shadowSide:O.side:z.side=O.shadowSide!==null?O.shadowSide:v[O.side],z.alphaMap=O.alphaMap,z.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,z.map=O.map,z.clipShadows=O.clipShadows,z.clippingPlanes=O.clippingPlanes,z.clipIntersection=O.clipIntersection,z.displacementMap=O.displacementMap,z.displacementScale=O.displacementScale,z.displacementBias=O.displacementBias,z.wireframeLinewidth=O.wireframeLinewidth,z.linewidth=O.linewidth,E.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const j=r.properties.get(z);j.light=E}return z}function T(L,O,E,R,z){if(L.visible===!1)return;if(L.layers.test(O.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&z===Go)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,L.matrixWorld);const G=e.update(L),de=L.material;if(Array.isArray(de)){const W=G.groups;for(let ae=0,Q=W.length;ae<Q;ae++){const q=W[ae],ie=de[q.materialIndex];if(ie&&ie.visible){const ee=P(L,ie,R,z);L.onBeforeShadow(r,L,O,E,G,ee,q),r.renderBufferDirect(E,null,G,ee,L,q),L.onAfterShadow(r,L,O,E,G,ee,q)}}}else if(de.visible){const W=P(L,de,R,z);L.onBeforeShadow(r,L,O,E,G,W,null),r.renderBufferDirect(E,null,G,W,L,null),L.onAfterShadow(r,L,O,E,G,W,null)}}const j=L.children;for(let G=0,de=j.length;G<de;G++)T(j[G],O,E,R,z)}function I(L){L.target.removeEventListener("dispose",I);for(const E in f){const R=f[E],z=L.target.uuid;z in R&&(R[z].dispose(),delete R[z])}}}function kb(r,e){function t(){let Y=!1;const $e=new yn;let Te=null;const Ie=new yn(0,0,0,0);return{setMask:function(Ye){Te!==Ye&&!Y&&(r.colorMask(Ye,Ye,Ye,Ye),Te=Ye)},setLocked:function(Ye){Y=Ye},setClear:function(Ye,Ne,ct,ot,Jt){Jt===!0&&(Ye*=ot,Ne*=ot,ct*=ot),$e.set(Ye,Ne,ct,ot),Ie.equals($e)===!1&&(r.clearColor(Ye,Ne,ct,ot),Ie.copy($e))},reset:function(){Y=!1,Te=null,Ie.set(-1,0,0,0)}}}function i(){let Y=!1,$e=!1,Te=null,Ie=null,Ye=null;return{setReversed:function(Ne){if($e!==Ne){const ct=e.get("EXT_clip_control");Ne?ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.ZERO_TO_ONE_EXT):ct.clipControlEXT(ct.LOWER_LEFT_EXT,ct.NEGATIVE_ONE_TO_ONE_EXT),$e=Ne;const ot=Ye;Ye=null,this.setClear(ot)}},getReversed:function(){return $e},setTest:function(Ne){Ne?ge(r.DEPTH_TEST):ce(r.DEPTH_TEST)},setMask:function(Ne){Te!==Ne&&!Y&&(r.depthMask(Ne),Te=Ne)},setFunc:function(Ne){if($e&&(Ne=hS[Ne]),Ie!==Ne){switch(Ne){case Hf:r.depthFunc(r.NEVER);break;case Vf:r.depthFunc(r.ALWAYS);break;case Gf:r.depthFunc(r.LESS);break;case Wa:r.depthFunc(r.LEQUAL);break;case Wf:r.depthFunc(r.EQUAL);break;case Xf:r.depthFunc(r.GEQUAL);break;case $f:r.depthFunc(r.GREATER);break;case jf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ie=Ne}},setLocked:function(Ne){Y=Ne},setClear:function(Ne){Ye!==Ne&&(Ye=Ne,$e&&(Ne=1-Ne),r.clearDepth(Ne))},reset:function(){Y=!1,Te=null,Ie=null,Ye=null,$e=!1}}}function a(){let Y=!1,$e=null,Te=null,Ie=null,Ye=null,Ne=null,ct=null,ot=null,Jt=null;return{setTest:function(Xt){Y||(Xt?ge(r.STENCIL_TEST):ce(r.STENCIL_TEST))},setMask:function(Xt){$e!==Xt&&!Y&&(r.stencilMask(Xt),$e=Xt)},setFunc:function(Xt,Pn,oi){(Te!==Xt||Ie!==Pn||Ye!==oi)&&(r.stencilFunc(Xt,Pn,oi),Te=Xt,Ie=Pn,Ye=oi)},setOp:function(Xt,Pn,oi){(Ne!==Xt||ct!==Pn||ot!==oi)&&(r.stencilOp(Xt,Pn,oi),Ne=Xt,ct=Pn,ot=oi)},setLocked:function(Xt){Y=Xt},setClear:function(Xt){Jt!==Xt&&(r.clearStencil(Xt),Jt=Xt)},reset:function(){Y=!1,$e=null,Te=null,Ie=null,Ye=null,Ne=null,ct=null,ot=null,Jt=null}}}const o=new t,c=new i,d=new a,h=new WeakMap,f=new WeakMap;let m={},v={},g={},x=new WeakMap,S=[],b=null,M=!1,y=null,N=null,P=null,T=null,I=null,L=null,O=null,E=new Ot(0,0,0),R=0,z=!1,B=null,j=null,G=null,de=null,W=null;const ae=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,q=0;const ie=r.getParameter(r.VERSION);ie.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(ie)[1]),Q=q>=1):ie.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),Q=q>=2);let ee=null,k={};const J=r.getParameter(r.SCISSOR_BOX),Pe=r.getParameter(r.VIEWPORT),oe=new yn().fromArray(J),ve=new yn().fromArray(Pe);function K(Y,$e,Te,Ie){const Ye=new Uint8Array(4),Ne=r.createTexture();r.bindTexture(Y,Ne),r.texParameteri(Y,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(Y,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ct=0;ct<Te;ct++)Y===r.TEXTURE_3D||Y===r.TEXTURE_2D_ARRAY?r.texImage3D($e,0,r.RGBA,1,1,Ie,0,r.RGBA,r.UNSIGNED_BYTE,Ye):r.texImage2D($e+ct,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ye);return Ne}const xe={};xe[r.TEXTURE_2D]=K(r.TEXTURE_2D,r.TEXTURE_2D,1),xe[r.TEXTURE_CUBE_MAP]=K(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[r.TEXTURE_2D_ARRAY]=K(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),xe[r.TEXTURE_3D]=K(r.TEXTURE_3D,r.TEXTURE_3D,1,1),o.setClear(0,0,0,1),c.setClear(1),d.setClear(0),ge(r.DEPTH_TEST),c.setFunc(Wa),Qe(!1),je(Vg),ge(r.CULL_FACE),Le(Lr);function ge(Y){m[Y]!==!0&&(r.enable(Y),m[Y]=!0)}function ce(Y){m[Y]!==!1&&(r.disable(Y),m[Y]=!1)}function be(Y,$e){return g[Y]!==$e?(r.bindFramebuffer(Y,$e),g[Y]=$e,Y===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=$e),Y===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=$e),!0):!1}function et(Y,$e){let Te=S,Ie=!1;if(Y){Te=x.get($e),Te===void 0&&(Te=[],x.set($e,Te));const Ye=Y.textures;if(Te.length!==Ye.length||Te[0]!==r.COLOR_ATTACHMENT0){for(let Ne=0,ct=Ye.length;Ne<ct;Ne++)Te[Ne]=r.COLOR_ATTACHMENT0+Ne;Te.length=Ye.length,Ie=!0}}else Te[0]!==r.BACK&&(Te[0]=r.BACK,Ie=!0);Ie&&r.drawBuffers(Te)}function Mt(Y){return b!==Y?(r.useProgram(Y),b=Y,!0):!1}const Ge={[ks]:r.FUNC_ADD,[Fy]:r.FUNC_SUBTRACT,[Oy]:r.FUNC_REVERSE_SUBTRACT};Ge[zy]=r.MIN,Ge[ky]=r.MAX;const we={[By]:r.ZERO,[Hy]:r.ONE,[Vy]:r.SRC_COLOR,[kf]:r.SRC_ALPHA,[Yy]:r.SRC_ALPHA_SATURATE,[$y]:r.DST_COLOR,[Wy]:r.DST_ALPHA,[Gy]:r.ONE_MINUS_SRC_COLOR,[Bf]:r.ONE_MINUS_SRC_ALPHA,[jy]:r.ONE_MINUS_DST_COLOR,[Xy]:r.ONE_MINUS_DST_ALPHA,[qy]:r.CONSTANT_COLOR,[Zy]:r.ONE_MINUS_CONSTANT_COLOR,[Ky]:r.CONSTANT_ALPHA,[Jy]:r.ONE_MINUS_CONSTANT_ALPHA};function Le(Y,$e,Te,Ie,Ye,Ne,ct,ot,Jt,Xt){if(Y===Lr){M===!0&&(ce(r.BLEND),M=!1);return}if(M===!1&&(ge(r.BLEND),M=!0),Y!==Uy){if(Y!==y||Xt!==z){if((N!==ks||I!==ks)&&(r.blendEquation(r.FUNC_ADD),N=ks,I=ks),Xt)switch(Y){case Ba:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Gg:r.blendFunc(r.ONE,r.ONE);break;case Wg:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Xg:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Wt("WebGLState: Invalid blending: ",Y);break}else switch(Y){case Ba:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Gg:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Wg:Wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xg:Wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Wt("WebGLState: Invalid blending: ",Y);break}P=null,T=null,L=null,O=null,E.set(0,0,0),R=0,y=Y,z=Xt}return}Ye=Ye||$e,Ne=Ne||Te,ct=ct||Ie,($e!==N||Ye!==I)&&(r.blendEquationSeparate(Ge[$e],Ge[Ye]),N=$e,I=Ye),(Te!==P||Ie!==T||Ne!==L||ct!==O)&&(r.blendFuncSeparate(we[Te],we[Ie],we[Ne],we[ct]),P=Te,T=Ie,L=Ne,O=ct),(ot.equals(E)===!1||Jt!==R)&&(r.blendColor(ot.r,ot.g,ot.b,Jt),E.copy(ot),R=Jt),y=Y,z=!1}function De(Y,$e){Y.side===Hi?ce(r.CULL_FACE):ge(r.CULL_FACE);let Te=Y.side===jn;$e&&(Te=!Te),Qe(Te),Y.blending===Ba&&Y.transparent===!1?Le(Lr):Le(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),c.setFunc(Y.depthFunc),c.setTest(Y.depthTest),c.setMask(Y.depthWrite),o.setMask(Y.colorWrite);const Ie=Y.stencilWrite;d.setTest(Ie),Ie&&(d.setMask(Y.stencilWriteMask),d.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),d.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),st(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?ge(r.SAMPLE_ALPHA_TO_COVERAGE):ce(r.SAMPLE_ALPHA_TO_COVERAGE)}function Qe(Y){B!==Y&&(Y?r.frontFace(r.CW):r.frontFace(r.CCW),B=Y)}function je(Y){Y!==Ny?(ge(r.CULL_FACE),Y!==j&&(Y===Vg?r.cullFace(r.BACK):Y===Dy?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ce(r.CULL_FACE),j=Y}function vt(Y){Y!==G&&(Q&&r.lineWidth(Y),G=Y)}function st(Y,$e,Te){Y?(ge(r.POLYGON_OFFSET_FILL),(de!==$e||W!==Te)&&(de=$e,W=Te,c.getReversed()&&($e=-$e),r.polygonOffset($e,Te))):ce(r.POLYGON_OFFSET_FILL)}function _t(Y){Y?ge(r.SCISSOR_TEST):ce(r.SCISSOR_TEST)}function Et(Y){Y===void 0&&(Y=r.TEXTURE0+ae-1),ee!==Y&&(r.activeTexture(Y),ee=Y)}function X(Y,$e,Te){Te===void 0&&(ee===null?Te=r.TEXTURE0+ae-1:Te=ee);let Ie=k[Te];Ie===void 0&&(Ie={type:void 0,texture:void 0},k[Te]=Ie),(Ie.type!==Y||Ie.texture!==$e)&&(ee!==Te&&(r.activeTexture(Te),ee=Te),r.bindTexture(Y,$e||xe[Y]),Ie.type=Y,Ie.texture=$e)}function Bt(){const Y=k[ee];Y!==void 0&&Y.type!==void 0&&(r.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function Dt(){try{r.compressedTexImage2D(...arguments)}catch(Y){Wt("WebGLState:",Y)}}function F(){try{r.compressedTexImage3D(...arguments)}catch(Y){Wt("WebGLState:",Y)}}function w(){try{r.texSubImage2D(...arguments)}catch(Y){Wt("WebGLState:",Y)}}function re(){try{r.texSubImage3D(...arguments)}catch(Y){Wt("WebGLState:",Y)}}function ue(){try{r.compressedTexSubImage2D(...arguments)}catch(Y){Wt("WebGLState:",Y)}}function Me(){try{r.compressedTexSubImage3D(...arguments)}catch(Y){Wt("WebGLState:",Y)}}function Oe(){try{r.texStorage2D(...arguments)}catch(Y){Wt("WebGLState:",Y)}}function ze(){try{r.texStorage3D(...arguments)}catch(Y){Wt("WebGLState:",Y)}}function U(){try{r.texImage2D(...arguments)}catch(Y){Wt("WebGLState:",Y)}}function V(){try{r.texImage3D(...arguments)}catch(Y){Wt("WebGLState:",Y)}}function le(Y){return v[Y]!==void 0?v[Y]:r.getParameter(Y)}function Ee(Y,$e){v[Y]!==$e&&(r.pixelStorei(Y,$e),v[Y]=$e)}function Ce(Y){oe.equals(Y)===!1&&(r.scissor(Y.x,Y.y,Y.z,Y.w),oe.copy(Y))}function Ae(Y){ve.equals(Y)===!1&&(r.viewport(Y.x,Y.y,Y.z,Y.w),ve.copy(Y))}function Ke(Y,$e){let Te=f.get($e);Te===void 0&&(Te=new WeakMap,f.set($e,Te));let Ie=Te.get(Y);Ie===void 0&&(Ie=r.getUniformBlockIndex($e,Y.name),Te.set(Y,Ie))}function nt(Y,$e){const Ie=f.get($e).get(Y);h.get($e)!==Ie&&(r.uniformBlockBinding($e,Ie,Y.__bindingPointIndex),h.set($e,Ie))}function ft(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),m={},v={},ee=null,k={},g={},x=new WeakMap,S=[],b=null,M=!1,y=null,N=null,P=null,T=null,I=null,L=null,O=null,E=new Ot(0,0,0),R=0,z=!1,B=null,j=null,G=null,de=null,W=null,oe.set(0,0,r.canvas.width,r.canvas.height),ve.set(0,0,r.canvas.width,r.canvas.height),o.reset(),c.reset(),d.reset()}return{buffers:{color:o,depth:c,stencil:d},enable:ge,disable:ce,bindFramebuffer:be,drawBuffers:et,useProgram:Mt,setBlending:Le,setMaterial:De,setFlipSided:Qe,setCullFace:je,setLineWidth:vt,setPolygonOffset:st,setScissorTest:_t,activeTexture:Et,bindTexture:X,unbindTexture:Bt,compressedTexImage2D:Dt,compressedTexImage3D:F,texImage2D:U,texImage3D:V,pixelStorei:Ee,getParameter:le,updateUBOMapping:Ke,uniformBlockBinding:nt,texStorage2D:Oe,texStorage3D:ze,texSubImage2D:w,texSubImage3D:re,compressedTexSubImage2D:ue,compressedTexSubImage3D:Me,scissor:Ce,viewport:Ae,reset:ft}}function Bb(r,e,t,i,a,o,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new ke,m=new WeakMap,v=new Set;let g;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(F,w){return S?new OffscreenCanvas(F,w):Jo("canvas")}function M(F,w,re){let ue=1;const Me=Dt(F);if((Me.width>re||Me.height>re)&&(ue=re/Math.max(Me.width,Me.height)),ue<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const Oe=Math.floor(ue*Me.width),ze=Math.floor(ue*Me.height);g===void 0&&(g=b(Oe,ze));const U=w?b(Oe,ze):g;return U.width=Oe,U.height=ze,U.getContext("2d").drawImage(F,0,0,Oe,ze),Ct("WebGLRenderer: Texture has been resized from ("+Me.width+"x"+Me.height+") to ("+Oe+"x"+ze+")."),U}else return"data"in F&&Ct("WebGLRenderer: Image in DataTexture is too big ("+Me.width+"x"+Me.height+")."),F;return F}function y(F){return F.generateMipmaps}function N(F){r.generateMipmap(F)}function P(F){return F.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?r.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function T(F,w,re,ue,Me,Oe=!1){if(F!==null){if(r[F]!==void 0)return r[F];Ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let ze;ue&&(ze=e.get("EXT_texture_norm16"),ze||Ct("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let U=w;if(w===r.RED&&(re===r.FLOAT&&(U=r.R32F),re===r.HALF_FLOAT&&(U=r.R16F),re===r.UNSIGNED_BYTE&&(U=r.R8),re===r.UNSIGNED_SHORT&&ze&&(U=ze.R16_EXT),re===r.SHORT&&ze&&(U=ze.R16_SNORM_EXT)),w===r.RED_INTEGER&&(re===r.UNSIGNED_BYTE&&(U=r.R8UI),re===r.UNSIGNED_SHORT&&(U=r.R16UI),re===r.UNSIGNED_INT&&(U=r.R32UI),re===r.BYTE&&(U=r.R8I),re===r.SHORT&&(U=r.R16I),re===r.INT&&(U=r.R32I)),w===r.RG&&(re===r.FLOAT&&(U=r.RG32F),re===r.HALF_FLOAT&&(U=r.RG16F),re===r.UNSIGNED_BYTE&&(U=r.RG8),re===r.UNSIGNED_SHORT&&ze&&(U=ze.RG16_EXT),re===r.SHORT&&ze&&(U=ze.RG16_SNORM_EXT)),w===r.RG_INTEGER&&(re===r.UNSIGNED_BYTE&&(U=r.RG8UI),re===r.UNSIGNED_SHORT&&(U=r.RG16UI),re===r.UNSIGNED_INT&&(U=r.RG32UI),re===r.BYTE&&(U=r.RG8I),re===r.SHORT&&(U=r.RG16I),re===r.INT&&(U=r.RG32I)),w===r.RGB_INTEGER&&(re===r.UNSIGNED_BYTE&&(U=r.RGB8UI),re===r.UNSIGNED_SHORT&&(U=r.RGB16UI),re===r.UNSIGNED_INT&&(U=r.RGB32UI),re===r.BYTE&&(U=r.RGB8I),re===r.SHORT&&(U=r.RGB16I),re===r.INT&&(U=r.RGB32I)),w===r.RGBA_INTEGER&&(re===r.UNSIGNED_BYTE&&(U=r.RGBA8UI),re===r.UNSIGNED_SHORT&&(U=r.RGBA16UI),re===r.UNSIGNED_INT&&(U=r.RGBA32UI),re===r.BYTE&&(U=r.RGBA8I),re===r.SHORT&&(U=r.RGBA16I),re===r.INT&&(U=r.RGBA32I)),w===r.RGB&&(re===r.UNSIGNED_SHORT&&ze&&(U=ze.RGB16_EXT),re===r.SHORT&&ze&&(U=ze.RGB16_SNORM_EXT),re===r.UNSIGNED_INT_5_9_9_9_REV&&(U=r.RGB9_E5),re===r.UNSIGNED_INT_10F_11F_11F_REV&&(U=r.R11F_G11F_B10F)),w===r.RGBA){const V=Oe?Jc:jt.getTransfer(Me);re===r.FLOAT&&(U=r.RGBA32F),re===r.HALF_FLOAT&&(U=r.RGBA16F),re===r.UNSIGNED_BYTE&&(U=V===tn?r.SRGB8_ALPHA8:r.RGBA8),re===r.UNSIGNED_SHORT&&ze&&(U=ze.RGBA16_EXT),re===r.SHORT&&ze&&(U=ze.RGBA16_SNORM_EXT),re===r.UNSIGNED_SHORT_4_4_4_4&&(U=r.RGBA4),re===r.UNSIGNED_SHORT_5_5_5_1&&(U=r.RGB5_A1)}return(U===r.R16F||U===r.R32F||U===r.RG16F||U===r.RG32F||U===r.RGBA16F||U===r.RGBA32F)&&e.get("EXT_color_buffer_float"),U}function I(F,w){let re;return F?w===null||w===lr||w===Zo?re=r.DEPTH24_STENCIL8:w===tr?re=r.DEPTH32F_STENCIL8:w===qo&&(re=r.DEPTH24_STENCIL8,Ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===lr||w===Zo?re=r.DEPTH_COMPONENT24:w===tr?re=r.DEPTH_COMPONENT32F:w===qo&&(re=r.DEPTH_COMPONENT16),re}function L(F,w){return y(F)===!0||F.isFramebufferTexture&&F.minFilter!==$n&&F.minFilter!==Hn?Math.log2(Math.max(w.width,w.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?w.mipmaps.length:1}function O(F){const w=F.target;w.removeEventListener("dispose",O),R(w),w.isVideoTexture&&m.delete(w),w.isHTMLTexture&&v.delete(w)}function E(F){const w=F.target;w.removeEventListener("dispose",E),B(w)}function R(F){const w=i.get(F);if(w.__webglInit===void 0)return;const re=F.source,ue=x.get(re);if(ue){const Me=ue[w.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&z(F),Object.keys(ue).length===0&&x.delete(re)}i.remove(F)}function z(F){const w=i.get(F);r.deleteTexture(w.__webglTexture);const re=F.source,ue=x.get(re);delete ue[w.__cacheKey],c.memory.textures--}function B(F){const w=i.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),i.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(w.__webglFramebuffer[ue]))for(let Me=0;Me<w.__webglFramebuffer[ue].length;Me++)r.deleteFramebuffer(w.__webglFramebuffer[ue][Me]);else r.deleteFramebuffer(w.__webglFramebuffer[ue]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[ue])}else{if(Array.isArray(w.__webglFramebuffer))for(let ue=0;ue<w.__webglFramebuffer.length;ue++)r.deleteFramebuffer(w.__webglFramebuffer[ue]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ue=0;ue<w.__webglColorRenderbuffer.length;ue++)w.__webglColorRenderbuffer[ue]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[ue]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const re=F.textures;for(let ue=0,Me=re.length;ue<Me;ue++){const Oe=i.get(re[ue]);Oe.__webglTexture&&(r.deleteTexture(Oe.__webglTexture),c.memory.textures--),i.remove(re[ue])}i.remove(F)}let j=0;function G(){j=0}function de(){return j}function W(F){j=F}function ae(){const F=j;return F>=a.maxTextures&&Ct("WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+a.maxTextures),j+=1,F}function Q(F){const w=[];return w.push(F.wrapS),w.push(F.wrapT),w.push(F.wrapR||0),w.push(F.magFilter),w.push(F.minFilter),w.push(F.anisotropy),w.push(F.internalFormat),w.push(F.format),w.push(F.type),w.push(F.generateMipmaps),w.push(F.premultiplyAlpha),w.push(F.flipY),w.push(F.unpackAlignment),w.push(F.colorSpace),w.join()}function q(F,w){const re=i.get(F);if(F.isVideoTexture&&X(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&re.__version!==F.version){const ue=F.image;if(ue===null)Ct("WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)Ct("WebGLRenderer: Texture marked for update but image is incomplete");else{ce(re,F,w);return}}else F.isExternalTexture&&(re.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,re.__webglTexture,r.TEXTURE0+w)}function ie(F,w){const re=i.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&re.__version!==F.version){ce(re,F,w);return}else F.isExternalTexture&&(re.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,re.__webglTexture,r.TEXTURE0+w)}function ee(F,w){const re=i.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&re.__version!==F.version){ce(re,F,w);return}t.bindTexture(r.TEXTURE_3D,re.__webglTexture,r.TEXTURE0+w)}function k(F,w){const re=i.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&re.__version!==F.version){be(re,F,w);return}t.bindTexture(r.TEXTURE_CUBE_MAP,re.__webglTexture,r.TEXTURE0+w)}const J={[Yf]:r.REPEAT,[Cr]:r.CLAMP_TO_EDGE,[qf]:r.MIRRORED_REPEAT},Pe={[$n]:r.NEAREST,[tS]:r.NEAREST_MIPMAP_NEAREST,[ac]:r.NEAREST_MIPMAP_LINEAR,[Hn]:r.LINEAR,[Zd]:r.LINEAR_MIPMAP_NEAREST,[Hs]:r.LINEAR_MIPMAP_LINEAR},oe={[rS]:r.NEVER,[cS]:r.ALWAYS,[sS]:r.LESS,[$h]:r.LEQUAL,[aS]:r.EQUAL,[jh]:r.GEQUAL,[oS]:r.GREATER,[lS]:r.NOTEQUAL};function ve(F,w){if(w.type===tr&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Hn||w.magFilter===Zd||w.magFilter===ac||w.magFilter===Hs||w.minFilter===Hn||w.minFilter===Zd||w.minFilter===ac||w.minFilter===Hs)&&Ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(F,r.TEXTURE_WRAP_S,J[w.wrapS]),r.texParameteri(F,r.TEXTURE_WRAP_T,J[w.wrapT]),(F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY)&&r.texParameteri(F,r.TEXTURE_WRAP_R,J[w.wrapR]),r.texParameteri(F,r.TEXTURE_MAG_FILTER,Pe[w.magFilter]),r.texParameteri(F,r.TEXTURE_MIN_FILTER,Pe[w.minFilter]),w.compareFunction&&(r.texParameteri(F,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(F,r.TEXTURE_COMPARE_FUNC,oe[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===$n||w.minFilter!==ac&&w.minFilter!==Hs||w.type===tr&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const re=e.get("EXT_texture_filter_anisotropic");r.texParameterf(F,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,a.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function K(F,w){let re=!1;F.__webglInit===void 0&&(F.__webglInit=!0,w.addEventListener("dispose",O));const ue=w.source;let Me=x.get(ue);Me===void 0&&(Me={},x.set(ue,Me));const Oe=Q(w);if(Oe!==F.__cacheKey){Me[Oe]===void 0&&(Me[Oe]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,re=!0),Me[Oe].usedTimes++;const ze=Me[F.__cacheKey];ze!==void 0&&(Me[F.__cacheKey].usedTimes--,ze.usedTimes===0&&z(w)),F.__cacheKey=Oe,F.__webglTexture=Me[Oe].texture}return re}function xe(F,w,re){return Math.floor(Math.floor(F/re)/w)}function ge(F,w,re,ue){const Oe=F.updateRanges;if(Oe.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,w.width,w.height,re,ue,w.data);else{Oe.sort((Ee,Ce)=>Ee.start-Ce.start);let ze=0;for(let Ee=1;Ee<Oe.length;Ee++){const Ce=Oe[ze],Ae=Oe[Ee],Ke=Ce.start+Ce.count,nt=xe(Ae.start,w.width,4),ft=xe(Ce.start,w.width,4);Ae.start<=Ke+1&&nt===ft&&xe(Ae.start+Ae.count-1,w.width,4)===nt?Ce.count=Math.max(Ce.count,Ae.start+Ae.count-Ce.start):(++ze,Oe[ze]=Ae)}Oe.length=ze+1;const U=t.getParameter(r.UNPACK_ROW_LENGTH),V=t.getParameter(r.UNPACK_SKIP_PIXELS),le=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,w.width);for(let Ee=0,Ce=Oe.length;Ee<Ce;Ee++){const Ae=Oe[Ee],Ke=Math.floor(Ae.start/4),nt=Math.ceil(Ae.count/4),ft=Ke%w.width,Y=Math.floor(Ke/w.width),$e=nt,Te=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,ft),t.pixelStorei(r.UNPACK_SKIP_ROWS,Y),t.texSubImage2D(r.TEXTURE_2D,0,ft,Y,$e,Te,re,ue,w.data)}F.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,U),t.pixelStorei(r.UNPACK_SKIP_PIXELS,V),t.pixelStorei(r.UNPACK_SKIP_ROWS,le)}}function ce(F,w,re){let ue=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ue=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ue=r.TEXTURE_3D);const Me=K(F,w),Oe=w.source;t.bindTexture(ue,F.__webglTexture,r.TEXTURE0+re);const ze=i.get(Oe);if(Oe.version!==ze.__version||Me===!0){if(t.activeTexture(r.TEXTURE0+re),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const Te=jt.getPrimaries(jt.workingColorSpace),Ie=w.colorSpace===ds?null:jt.getPrimaries(w.colorSpace),Ye=w.colorSpace===ds||Te===Ie?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye)}t.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment);let V=M(w.image,!1,a.maxTextureSize);V=Bt(w,V);const le=o.convert(w.format,w.colorSpace),Ee=o.convert(w.type);let Ce=T(w.internalFormat,le,Ee,w.normalized,w.colorSpace,w.isVideoTexture);ve(ue,w);let Ae;const Ke=w.mipmaps,nt=w.isVideoTexture!==!0,ft=ze.__version===void 0||Me===!0,Y=Oe.dataReady,$e=L(w,V);if(w.isDepthTexture)Ce=I(w.format===Vs,w.type),ft&&(nt?t.texStorage2D(r.TEXTURE_2D,1,Ce,V.width,V.height):t.texImage2D(r.TEXTURE_2D,0,Ce,V.width,V.height,0,le,Ee,null));else if(w.isDataTexture)if(Ke.length>0){nt&&ft&&t.texStorage2D(r.TEXTURE_2D,$e,Ce,Ke[0].width,Ke[0].height);for(let Te=0,Ie=Ke.length;Te<Ie;Te++)Ae=Ke[Te],nt?Y&&t.texSubImage2D(r.TEXTURE_2D,Te,0,0,Ae.width,Ae.height,le,Ee,Ae.data):t.texImage2D(r.TEXTURE_2D,Te,Ce,Ae.width,Ae.height,0,le,Ee,Ae.data);w.generateMipmaps=!1}else nt?(ft&&t.texStorage2D(r.TEXTURE_2D,$e,Ce,V.width,V.height),Y&&ge(w,V,le,Ee)):t.texImage2D(r.TEXTURE_2D,0,Ce,V.width,V.height,0,le,Ee,V.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){nt&&ft&&t.texStorage3D(r.TEXTURE_2D_ARRAY,$e,Ce,Ke[0].width,Ke[0].height,V.depth);for(let Te=0,Ie=Ke.length;Te<Ie;Te++)if(Ae=Ke[Te],w.format!==Gi)if(le!==null)if(nt){if(Y)if(w.layerUpdates.size>0){const Ye=I0(Ae.width,Ae.height,w.format,w.type);for(const Ne of w.layerUpdates){const ct=Ae.data.subarray(Ne*Ye/Ae.data.BYTES_PER_ELEMENT,(Ne+1)*Ye/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Te,0,0,Ne,Ae.width,Ae.height,1,le,ct)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Te,0,0,0,Ae.width,Ae.height,V.depth,le,Ae.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Te,Ce,Ae.width,Ae.height,V.depth,0,Ae.data,0,0);else Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?Y&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Te,0,0,0,Ae.width,Ae.height,V.depth,le,Ee,Ae.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Te,Ce,Ae.width,Ae.height,V.depth,0,le,Ee,Ae.data)}else{nt&&ft&&t.texStorage2D(r.TEXTURE_2D,$e,Ce,Ke[0].width,Ke[0].height);for(let Te=0,Ie=Ke.length;Te<Ie;Te++)Ae=Ke[Te],w.format!==Gi?le!==null?nt?Y&&t.compressedTexSubImage2D(r.TEXTURE_2D,Te,0,0,Ae.width,Ae.height,le,Ae.data):t.compressedTexImage2D(r.TEXTURE_2D,Te,Ce,Ae.width,Ae.height,0,Ae.data):Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?Y&&t.texSubImage2D(r.TEXTURE_2D,Te,0,0,Ae.width,Ae.height,le,Ee,Ae.data):t.texImage2D(r.TEXTURE_2D,Te,Ce,Ae.width,Ae.height,0,le,Ee,Ae.data)}else if(w.isDataArrayTexture)if(nt){if(ft&&t.texStorage3D(r.TEXTURE_2D_ARRAY,$e,Ce,V.width,V.height,V.depth),Y)if(w.layerUpdates.size>0){const Te=I0(V.width,V.height,w.format,w.type);for(const Ie of w.layerUpdates){const Ye=V.data.subarray(Ie*Te/V.data.BYTES_PER_ELEMENT,(Ie+1)*Te/V.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ie,V.width,V.height,1,le,Ee,Ye)}w.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,V.width,V.height,V.depth,le,Ee,V.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ce,V.width,V.height,V.depth,0,le,Ee,V.data);else if(w.isData3DTexture)nt?(ft&&t.texStorage3D(r.TEXTURE_3D,$e,Ce,V.width,V.height,V.depth),Y&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,V.width,V.height,V.depth,le,Ee,V.data)):t.texImage3D(r.TEXTURE_3D,0,Ce,V.width,V.height,V.depth,0,le,Ee,V.data);else if(w.isFramebufferTexture){if(ft)if(nt)t.texStorage2D(r.TEXTURE_2D,$e,Ce,V.width,V.height);else{let Te=V.width,Ie=V.height;for(let Ye=0;Ye<$e;Ye++)t.texImage2D(r.TEXTURE_2D,Ye,Ce,Te,Ie,0,le,Ee,null),Te>>=1,Ie>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in r){const Te=r.canvas;if(Te.hasAttribute("layoutsubtree")||Te.setAttribute("layoutsubtree","true"),V.parentNode!==Te){Te.appendChild(V),v.add(w),Te.onpaint=Ie=>{const Ye=Ie.changedElements;for(const Ne of v)Ye.includes(Ne.image)&&(Ne.needsUpdate=!0)},Te.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,V);else{const Ye=r.RGBA,Ne=r.RGBA,ct=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Ye,Ne,ct,V)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Ke.length>0){if(nt&&ft){const Te=Dt(Ke[0]);t.texStorage2D(r.TEXTURE_2D,$e,Ce,Te.width,Te.height)}for(let Te=0,Ie=Ke.length;Te<Ie;Te++)Ae=Ke[Te],nt?Y&&t.texSubImage2D(r.TEXTURE_2D,Te,0,0,le,Ee,Ae):t.texImage2D(r.TEXTURE_2D,Te,Ce,le,Ee,Ae);w.generateMipmaps=!1}else if(nt){if(ft){const Te=Dt(V);t.texStorage2D(r.TEXTURE_2D,$e,Ce,Te.width,Te.height)}Y&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,le,Ee,V)}else t.texImage2D(r.TEXTURE_2D,0,Ce,le,Ee,V);y(w)&&N(ue),ze.__version=Oe.version,w.onUpdate&&w.onUpdate(w)}F.__version=w.version}function be(F,w,re){if(w.image.length!==6)return;const ue=K(F,w),Me=w.source;t.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+re);const Oe=i.get(Me);if(Me.version!==Oe.__version||ue===!0){t.activeTexture(r.TEXTURE0+re);const ze=jt.getPrimaries(jt.workingColorSpace),U=w.colorSpace===ds?null:jt.getPrimaries(w.colorSpace),V=w.colorSpace===ds||ze===U?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,V);const le=w.isCompressedTexture||w.image[0].isCompressedTexture,Ee=w.image[0]&&w.image[0].isDataTexture,Ce=[];for(let Ne=0;Ne<6;Ne++)!le&&!Ee?Ce[Ne]=M(w.image[Ne],!0,a.maxCubemapSize):Ce[Ne]=Ee?w.image[Ne].image:w.image[Ne],Ce[Ne]=Bt(w,Ce[Ne]);const Ae=Ce[0],Ke=o.convert(w.format,w.colorSpace),nt=o.convert(w.type),ft=T(w.internalFormat,Ke,nt,w.normalized,w.colorSpace),Y=w.isVideoTexture!==!0,$e=Oe.__version===void 0||ue===!0,Te=Me.dataReady;let Ie=L(w,Ae);ve(r.TEXTURE_CUBE_MAP,w);let Ye;if(le){Y&&$e&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,ft,Ae.width,Ae.height);for(let Ne=0;Ne<6;Ne++){Ye=Ce[Ne].mipmaps;for(let ct=0;ct<Ye.length;ct++){const ot=Ye[ct];w.format!==Gi?Ke!==null?Y?Te&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,ct,0,0,ot.width,ot.height,Ke,ot.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,ct,ft,ot.width,ot.height,0,ot.data):Ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?Te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,ct,0,0,ot.width,ot.height,Ke,nt,ot.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,ct,ft,ot.width,ot.height,0,Ke,nt,ot.data)}}}else{if(Ye=w.mipmaps,Y&&$e){Ye.length>0&&Ie++;const Ne=Dt(Ce[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,ft,Ne.width,Ne.height)}for(let Ne=0;Ne<6;Ne++)if(Ee){Y?Te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,0,0,Ce[Ne].width,Ce[Ne].height,Ke,nt,Ce[Ne].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,ft,Ce[Ne].width,Ce[Ne].height,0,Ke,nt,Ce[Ne].data);for(let ct=0;ct<Ye.length;ct++){const Jt=Ye[ct].image[Ne].image;Y?Te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,ct+1,0,0,Jt.width,Jt.height,Ke,nt,Jt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,ct+1,ft,Jt.width,Jt.height,0,Ke,nt,Jt.data)}}else{Y?Te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,0,0,Ke,nt,Ce[Ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,ft,Ke,nt,Ce[Ne]);for(let ct=0;ct<Ye.length;ct++){const ot=Ye[ct];Y?Te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,ct+1,0,0,Ke,nt,ot.image[Ne]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,ct+1,ft,Ke,nt,ot.image[Ne])}}}y(w)&&N(r.TEXTURE_CUBE_MAP),Oe.__version=Me.version,w.onUpdate&&w.onUpdate(w)}F.__version=w.version}function et(F,w,re,ue,Me,Oe){const ze=o.convert(re.format,re.colorSpace),U=o.convert(re.type),V=T(re.internalFormat,ze,U,re.normalized,re.colorSpace),le=i.get(w),Ee=i.get(re);if(Ee.__renderTarget=w,!le.__hasExternalTextures){const Ce=Math.max(1,w.width>>Oe),Ae=Math.max(1,w.height>>Oe);Me===r.TEXTURE_3D||Me===r.TEXTURE_2D_ARRAY?t.texImage3D(Me,Oe,V,Ce,Ae,w.depth,0,ze,U,null):t.texImage2D(Me,Oe,V,Ce,Ae,0,ze,U,null)}t.bindFramebuffer(r.FRAMEBUFFER,F),Et(w)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ue,Me,Ee.__webglTexture,0,_t(w)):(Me===r.TEXTURE_2D||Me>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ue,Me,Ee.__webglTexture,Oe),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Mt(F,w,re){if(r.bindRenderbuffer(r.RENDERBUFFER,F),w.depthBuffer){const ue=w.depthTexture,Me=ue&&ue.isDepthTexture?ue.type:null,Oe=I(w.stencilBuffer,Me),ze=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Et(w)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,_t(w),Oe,w.width,w.height):re?r.renderbufferStorageMultisample(r.RENDERBUFFER,_t(w),Oe,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,Oe,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ze,r.RENDERBUFFER,F)}else{const ue=w.textures;for(let Me=0;Me<ue.length;Me++){const Oe=ue[Me],ze=o.convert(Oe.format,Oe.colorSpace),U=o.convert(Oe.type),V=T(Oe.internalFormat,ze,U,Oe.normalized,Oe.colorSpace);Et(w)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,_t(w),V,w.width,w.height):re?r.renderbufferStorageMultisample(r.RENDERBUFFER,_t(w),V,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,V,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ge(F,w,re){const ue=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,F),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Me=i.get(w.depthTexture);if(Me.__renderTarget=w,(!Me.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),ue){if(Me.__webglInit===void 0&&(Me.__webglInit=!0,w.depthTexture.addEventListener("dispose",O)),Me.__webglTexture===void 0){Me.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,Me.__webglTexture),ve(r.TEXTURE_CUBE_MAP,w.depthTexture);const le=o.convert(w.depthTexture.format),Ee=o.convert(w.depthTexture.type);let Ce;w.depthTexture.format===Ir?Ce=r.DEPTH_COMPONENT24:w.depthTexture.format===Vs&&(Ce=r.DEPTH24_STENCIL8);for(let Ae=0;Ae<6;Ae++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,Ce,w.width,w.height,0,le,Ee,null)}}else q(w.depthTexture,0);const Oe=Me.__webglTexture,ze=_t(w),U=ue?r.TEXTURE_CUBE_MAP_POSITIVE_X+re:r.TEXTURE_2D,V=w.depthTexture.format===Vs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(w.depthTexture.format===Ir)Et(w)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,V,U,Oe,0,ze):r.framebufferTexture2D(r.FRAMEBUFFER,V,U,Oe,0);else if(w.depthTexture.format===Vs)Et(w)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,V,U,Oe,0,ze):r.framebufferTexture2D(r.FRAMEBUFFER,V,U,Oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function we(F){const w=i.get(F),re=F.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==F.depthTexture){const ue=F.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ue){const Me=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ue.removeEventListener("dispose",Me)};ue.addEventListener("dispose",Me),w.__depthDisposeCallback=Me}w.__boundDepthTexture=ue}if(F.depthTexture&&!w.__autoAllocateDepthBuffer)if(re)for(let ue=0;ue<6;ue++)Ge(w.__webglFramebuffer[ue],F,ue);else{const ue=F.texture.mipmaps;ue&&ue.length>0?Ge(w.__webglFramebuffer[0],F,0):Ge(w.__webglFramebuffer,F,0)}else if(re){w.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[ue]),w.__webglDepthbuffer[ue]===void 0)w.__webglDepthbuffer[ue]=r.createRenderbuffer(),Mt(w.__webglDepthbuffer[ue],F,!1);else{const Me=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Oe=w.__webglDepthbuffer[ue];r.bindRenderbuffer(r.RENDERBUFFER,Oe),r.framebufferRenderbuffer(r.FRAMEBUFFER,Me,r.RENDERBUFFER,Oe)}}else{const ue=F.texture.mipmaps;if(ue&&ue.length>0?t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=r.createRenderbuffer(),Mt(w.__webglDepthbuffer,F,!1);else{const Me=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Oe=w.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Oe),r.framebufferRenderbuffer(r.FRAMEBUFFER,Me,r.RENDERBUFFER,Oe)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Le(F,w,re){const ue=i.get(F);w!==void 0&&et(ue.__webglFramebuffer,F,F.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),re!==void 0&&we(F)}function De(F){const w=F.texture,re=i.get(F),ue=i.get(w);F.addEventListener("dispose",E);const Me=F.textures,Oe=F.isWebGLCubeRenderTarget===!0,ze=Me.length>1;if(ze||(ue.__webglTexture===void 0&&(ue.__webglTexture=r.createTexture()),ue.__version=w.version,c.memory.textures++),Oe){re.__webglFramebuffer=[];for(let U=0;U<6;U++)if(w.mipmaps&&w.mipmaps.length>0){re.__webglFramebuffer[U]=[];for(let V=0;V<w.mipmaps.length;V++)re.__webglFramebuffer[U][V]=r.createFramebuffer()}else re.__webglFramebuffer[U]=r.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){re.__webglFramebuffer=[];for(let U=0;U<w.mipmaps.length;U++)re.__webglFramebuffer[U]=r.createFramebuffer()}else re.__webglFramebuffer=r.createFramebuffer();if(ze)for(let U=0,V=Me.length;U<V;U++){const le=i.get(Me[U]);le.__webglTexture===void 0&&(le.__webglTexture=r.createTexture(),c.memory.textures++)}if(F.samples>0&&Et(F)===!1){re.__webglMultisampledFramebuffer=r.createFramebuffer(),re.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,re.__webglMultisampledFramebuffer);for(let U=0;U<Me.length;U++){const V=Me[U];re.__webglColorRenderbuffer[U]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,re.__webglColorRenderbuffer[U]);const le=o.convert(V.format,V.colorSpace),Ee=o.convert(V.type),Ce=T(V.internalFormat,le,Ee,V.normalized,V.colorSpace,F.isXRRenderTarget===!0),Ae=_t(F);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ae,Ce,F.width,F.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+U,r.RENDERBUFFER,re.__webglColorRenderbuffer[U])}r.bindRenderbuffer(r.RENDERBUFFER,null),F.depthBuffer&&(re.__webglDepthRenderbuffer=r.createRenderbuffer(),Mt(re.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Oe){t.bindTexture(r.TEXTURE_CUBE_MAP,ue.__webglTexture),ve(r.TEXTURE_CUBE_MAP,w);for(let U=0;U<6;U++)if(w.mipmaps&&w.mipmaps.length>0)for(let V=0;V<w.mipmaps.length;V++)et(re.__webglFramebuffer[U][V],F,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+U,V);else et(re.__webglFramebuffer[U],F,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+U,0);y(w)&&N(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ze){for(let U=0,V=Me.length;U<V;U++){const le=Me[U],Ee=i.get(le);let Ce=r.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ce=F.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ce,Ee.__webglTexture),ve(Ce,le),et(re.__webglFramebuffer,F,le,r.COLOR_ATTACHMENT0+U,Ce,0),y(le)&&N(Ce)}t.unbindTexture()}else{let U=r.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(U=F.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(U,ue.__webglTexture),ve(U,w),w.mipmaps&&w.mipmaps.length>0)for(let V=0;V<w.mipmaps.length;V++)et(re.__webglFramebuffer[V],F,w,r.COLOR_ATTACHMENT0,U,V);else et(re.__webglFramebuffer,F,w,r.COLOR_ATTACHMENT0,U,0);y(w)&&N(U),t.unbindTexture()}F.depthBuffer&&we(F)}function Qe(F){const w=F.textures;for(let re=0,ue=w.length;re<ue;re++){const Me=w[re];if(y(Me)){const Oe=P(F),ze=i.get(Me).__webglTexture;t.bindTexture(Oe,ze),N(Oe),t.unbindTexture()}}}const je=[],vt=[];function st(F){if(F.samples>0){if(Et(F)===!1){const w=F.textures,re=F.width,ue=F.height;let Me=r.COLOR_BUFFER_BIT;const Oe=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ze=i.get(F),U=w.length>1;if(U)for(let le=0;le<w.length;le++)t.bindFramebuffer(r.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ze.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ze.__webglMultisampledFramebuffer);const V=F.texture.mipmaps;V&&V.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ze.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let le=0;le<w.length;le++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(Me|=r.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(Me|=r.STENCIL_BUFFER_BIT)),U){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ze.__webglColorRenderbuffer[le]);const Ee=i.get(w[le]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ee,0)}r.blitFramebuffer(0,0,re,ue,0,0,re,ue,Me,r.NEAREST),h===!0&&(je.length=0,vt.length=0,je.push(r.COLOR_ATTACHMENT0+le),F.depthBuffer&&F.resolveDepthBuffer===!1&&(je.push(Oe),vt.push(Oe),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,vt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,je))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),U)for(let le=0;le<w.length;le++){t.bindFramebuffer(r.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.RENDERBUFFER,ze.__webglColorRenderbuffer[le]);const Ee=i.get(w[le]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ze.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+le,r.TEXTURE_2D,Ee,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ze.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&h){const w=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}}function _t(F){return Math.min(a.maxSamples,F.samples)}function Et(F){const w=i.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function X(F){const w=c.render.frame;m.get(F)!==w&&(m.set(F,w),F.update())}function Bt(F,w){const re=F.colorSpace,ue=F.format,Me=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||re!==Kc&&re!==ds&&(jt.getTransfer(re)===tn?(ue!==Gi||Me!==Si)&&Ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Wt("WebGLTextures: Unsupported texture color space:",re)),w}function Dt(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(f.width=F.naturalWidth||F.width,f.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(f.width=F.displayWidth,f.height=F.displayHeight):(f.width=F.width,f.height=F.height),f}this.allocateTextureUnit=ae,this.resetTextureUnits=G,this.getTextureUnits=de,this.setTextureUnits=W,this.setTexture2D=q,this.setTexture2DArray=ie,this.setTexture3D=ee,this.setTextureCube=k,this.rebindTextures=Le,this.setupRenderTarget=De,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=et,this.useMultisampledRTT=Et,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Hb(r,e){function t(i,a=ds){let o;const c=jt.getTransfer(a);if(i===Si)return r.UNSIGNED_BYTE;if(i===Hh)return r.UNSIGNED_SHORT_4_4_4_4;if(i===Vh)return r.UNSIGNED_SHORT_5_5_5_1;if(i===jv)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===Yv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(i===Xv)return r.BYTE;if(i===$v)return r.SHORT;if(i===qo)return r.UNSIGNED_SHORT;if(i===Bh)return r.INT;if(i===lr)return r.UNSIGNED_INT;if(i===tr)return r.FLOAT;if(i===Dr)return r.HALF_FLOAT;if(i===qv)return r.ALPHA;if(i===Zv)return r.RGB;if(i===Gi)return r.RGBA;if(i===Ir)return r.DEPTH_COMPONENT;if(i===Vs)return r.DEPTH_STENCIL;if(i===Kv)return r.RED;if(i===Gh)return r.RED_INTEGER;if(i===Ws)return r.RG;if(i===Wh)return r.RG_INTEGER;if(i===Xh)return r.RGBA_INTEGER;if(i===Gc||i===Wc||i===Xc||i===$c)if(c===tn)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Gc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$c)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Gc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$c)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Zf||i===Kf||i===Jf||i===Qf)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Zf)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Kf)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Jf)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Qf)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===eh||i===th||i===nh||i===ih||i===rh||i===qc||i===sh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===eh||i===th)return c===tn?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===nh)return c===tn?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(i===ih)return o.COMPRESSED_R11_EAC;if(i===rh)return o.COMPRESSED_SIGNED_R11_EAC;if(i===qc)return o.COMPRESSED_RG11_EAC;if(i===sh)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ah||i===oh||i===lh||i===ch||i===uh||i===dh||i===fh||i===hh||i===ph||i===mh||i===gh||i===vh||i===xh||i===_h)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===ah)return c===tn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===oh)return c===tn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===lh)return c===tn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ch)return c===tn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===uh)return c===tn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===dh)return c===tn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===fh)return c===tn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hh)return c===tn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ph)return c===tn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===mh)return c===tn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===gh)return c===tn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===vh)return c===tn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===xh)return c===tn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===_h)return c===tn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===yh||i===Sh||i===Mh)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===yh)return c===tn?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Sh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Mh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Eh||i===wh||i===Zc||i===Th)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===Eh)return o.COMPRESSED_RED_RGTC1_EXT;if(i===wh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Zc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Th)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zo?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:t}}const Vb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gb=`
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

}`;class Wb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new ox(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ur({vertexShader:Vb,fragmentShader:Gb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Yn(new uu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Xb extends vs{constructor(e,t){super();const i=this;let a=null,o=1,c=null,d="local-floor",h=1,f=null,m=null,v=null,g=null,x=null,S=null;const b=typeof XRWebGLBinding<"u",M=new Wb,y={},N=t.getContextAttributes();let P=null,T=null;const I=[],L=[],O=new ke;let E=null;const R=new ni;R.viewport=new yn;const z=new ni;z.viewport=new yn;const B=[R,z],j=new QM;let G=null,de=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let xe=I[K];return xe===void 0&&(xe=new nf,I[K]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(K){let xe=I[K];return xe===void 0&&(xe=new nf,I[K]=xe),xe.getGripSpace()},this.getHand=function(K){let xe=I[K];return xe===void 0&&(xe=new nf,I[K]=xe),xe.getHandSpace()};function W(K){const xe=L.indexOf(K.inputSource);if(xe===-1)return;const ge=I[xe];ge!==void 0&&(ge.update(K.inputSource,K.frame,f||c),ge.dispatchEvent({type:K.type,data:K.inputSource}))}function ae(){a.removeEventListener("select",W),a.removeEventListener("selectstart",W),a.removeEventListener("selectend",W),a.removeEventListener("squeeze",W),a.removeEventListener("squeezestart",W),a.removeEventListener("squeezeend",W),a.removeEventListener("end",ae),a.removeEventListener("inputsourceschange",Q);for(let K=0;K<I.length;K++){const xe=L[K];xe!==null&&(L[K]=null,I[K].disconnect(xe))}G=null,de=null,M.reset();for(const K in y)delete y[K];e.setRenderTarget(P),x=null,g=null,v=null,a=null,T=null,ve.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){o=K,i.isPresenting===!0&&Ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){d=K,i.isPresenting===!0&&Ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||c},this.setReferenceSpace=function(K){f=K},this.getBaseLayer=function(){return g!==null?g:x},this.getBinding=function(){return v===null&&b&&(v=new XRWebGLBinding(a,t)),v},this.getFrame=function(){return S},this.getSession=function(){return a},this.setSession=async function(K){if(a=K,a!==null){if(P=e.getRenderTarget(),a.addEventListener("select",W),a.addEventListener("selectstart",W),a.addEventListener("selectend",W),a.addEventListener("squeeze",W),a.addEventListener("squeezestart",W),a.addEventListener("squeezeend",W),a.addEventListener("end",ae),a.addEventListener("inputsourceschange",Q),N.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(O),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,ce=null,be=null;N.depth&&(be=N.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=N.stencil?Vs:Ir,ce=N.stencil?Zo:lr);const et={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:o};v=this.getBinding(),g=v.createProjectionLayer(et),a.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),T=new or(g.textureWidth,g.textureHeight,{format:Gi,type:Si,depthTexture:new $a(g.textureWidth,g.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const ge={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:o};x=new XRWebGLLayer(a,t,ge),a.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),T=new or(x.framebufferWidth,x.framebufferHeight,{format:Gi,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(h),f=null,c=await a.requestReferenceSpace(d),ve.setContext(a),ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function Q(K){for(let xe=0;xe<K.removed.length;xe++){const ge=K.removed[xe],ce=L.indexOf(ge);ce>=0&&(L[ce]=null,I[ce].disconnect(ge))}for(let xe=0;xe<K.added.length;xe++){const ge=K.added[xe];let ce=L.indexOf(ge);if(ce===-1){for(let et=0;et<I.length;et++)if(et>=L.length){L.push(ge),ce=et;break}else if(L[et]===null){L[et]=ge,ce=et;break}if(ce===-1)break}const be=I[ce];be&&be.connect(ge)}}const q=new $,ie=new $;function ee(K,xe,ge){q.setFromMatrixPosition(xe.matrixWorld),ie.setFromMatrixPosition(ge.matrixWorld);const ce=q.distanceTo(ie),be=xe.projectionMatrix.elements,et=ge.projectionMatrix.elements,Mt=be[14]/(be[10]-1),Ge=be[14]/(be[10]+1),we=(be[9]+1)/be[5],Le=(be[9]-1)/be[5],De=(be[8]-1)/be[0],Qe=(et[8]+1)/et[0],je=Mt*De,vt=Mt*Qe,st=ce/(-De+Qe),_t=st*-De;if(xe.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(_t),K.translateZ(st),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),be[10]===-1)K.projectionMatrix.copy(xe.projectionMatrix),K.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const Et=Mt+st,X=Ge+st,Bt=je-_t,Dt=vt+(ce-_t),F=we*Ge/X*Et,w=Le*Ge/X*Et;K.projectionMatrix.makePerspective(Bt,Dt,F,w,Et,X),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function k(K,xe){xe===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(xe.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(a===null)return;let xe=K.near,ge=K.far;M.texture!==null&&(M.depthNear>0&&(xe=M.depthNear),M.depthFar>0&&(ge=M.depthFar)),j.near=z.near=R.near=xe,j.far=z.far=R.far=ge,(G!==j.near||de!==j.far)&&(a.updateRenderState({depthNear:j.near,depthFar:j.far}),G=j.near,de=j.far),j.layers.mask=K.layers.mask|6,R.layers.mask=j.layers.mask&-5,z.layers.mask=j.layers.mask&-3;const ce=K.parent,be=j.cameras;k(j,ce);for(let et=0;et<be.length;et++)k(be[et],ce);be.length===2?ee(j,R,z):j.projectionMatrix.copy(R.projectionMatrix),J(K,j,ce)};function J(K,xe,ge){ge===null?K.matrix.copy(xe.matrixWorld):(K.matrix.copy(ge.matrixWorld),K.matrix.invert(),K.matrix.multiply(xe.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(xe.projectionMatrix),K.projectionMatrixInverse.copy(xe.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Qo*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(g===null&&x===null))return h},this.setFoveation=function(K){h=K,g!==null&&(g.fixedFoveation=K),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=K)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(j)},this.getCameraTexture=function(K){return y[K]};let Pe=null;function oe(K,xe){if(m=xe.getViewerPose(f||c),S=xe,m!==null){const ge=m.views;x!==null&&(e.setRenderTargetFramebuffer(T,x.framebuffer),e.setRenderTarget(T));let ce=!1;ge.length!==j.cameras.length&&(j.cameras.length=0,ce=!0);for(let Ge=0;Ge<ge.length;Ge++){const we=ge[Ge];let Le=null;if(x!==null)Le=x.getViewport(we);else{const Qe=v.getViewSubImage(g,we);Le=Qe.viewport,Ge===0&&(e.setRenderTargetTextures(T,Qe.colorTexture,Qe.depthStencilTexture),e.setRenderTarget(T))}let De=B[Ge];De===void 0&&(De=new ni,De.layers.enable(Ge),De.viewport=new yn,B[Ge]=De),De.matrix.fromArray(we.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(we.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(Le.x,Le.y,Le.width,Le.height),Ge===0&&(j.matrix.copy(De.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),ce===!0&&j.cameras.push(De)}const be=a.enabledFeatures;if(be&&be.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&b){v=i.getBinding();const Ge=v.getDepthInformation(ge[0]);Ge&&Ge.isValid&&Ge.texture&&M.init(Ge,a.renderState)}if(be&&be.includes("camera-access")&&b){e.state.unbindTexture(),v=i.getBinding();for(let Ge=0;Ge<ge.length;Ge++){const we=ge[Ge].camera;if(we){let Le=y[we];Le||(Le=new ox,y[we]=Le);const De=v.getCameraImage(we);Le.sourceTexture=De}}}}for(let ge=0;ge<I.length;ge++){const ce=L[ge],be=I[ge];ce!==null&&be!==void 0&&be.update(ce,xe,f||c)}Pe&&Pe(K,xe),xe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:xe}),S=null}const ve=new Sx;ve.setAnimationLoop(oe),this.setAnimationLoop=function(K){Pe=K},this.dispose=function(){}}}const $b=new un,Cx=new It;Cx.set(-1,0,0,0,1,0,0,0,1);function jb(r,e){function t(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function i(M,y){y.color.getRGB(M.fogColor.value,gx(r)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function a(M,y,N,P,T){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?o(M,y):y.isMeshLambertMaterial?(o(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(o(M,y),v(M,y)):y.isMeshPhongMaterial?(o(M,y),m(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(o(M,y),g(M,y),y.isMeshPhysicalMaterial&&x(M,y,T)):y.isMeshMatcapMaterial?(o(M,y),S(M,y)):y.isMeshDepthMaterial?o(M,y):y.isMeshDistanceMaterial?(o(M,y),b(M,y)):y.isMeshNormalMaterial?o(M,y):y.isLineBasicMaterial?(c(M,y),y.isLineDashedMaterial&&d(M,y)):y.isPointsMaterial?h(M,y,N,P):y.isSpriteMaterial?f(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function o(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,t(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,t(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,t(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===jn&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,t(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===jn&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,t(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,t(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const N=e.get(y),P=N.envMap,T=N.envMapRotation;P&&(M.envMap.value=P,M.envMapRotation.value.setFromMatrix4($b.makeRotationFromEuler(T)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(Cx),M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,M.aoMapTransform))}function c(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,t(y.map,M.mapTransform))}function d(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function h(M,y,N,P){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*N,M.scale.value=P*.5,y.map&&(M.map.value=y.map,t(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,t(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function f(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,t(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,t(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function m(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function v(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function g(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function x(M,y,N){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===jn&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=N.texture,M.transmissionSamplerSize.value.set(N.width,N.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,M.specularIntensityMapTransform))}function S(M,y){y.matcap&&(M.matcap.value=y.matcap)}function b(M,y){const N=e.get(y).light;M.referencePosition.value.setFromMatrixPosition(N.matrixWorld),M.nearDistance.value=N.shadow.camera.near,M.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function Yb(r,e,t,i){let a={},o={},c=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(T,I){const L=I.program;i.uniformBlockBinding(T,L)}function f(T,I){let L=a[T.id];L===void 0&&(M(T),L=m(T),a[T.id]=L,T.addEventListener("dispose",N));const O=I.program;i.updateUBOMapping(T,O);const E=e.render.frame;o[T.id]!==E&&(g(T),o[T.id]=E)}function m(T){const I=v();T.__bindingPointIndex=I;const L=r.createBuffer(),O=T.__size,E=T.usage;return r.bindBuffer(r.UNIFORM_BUFFER,L),r.bufferData(r.UNIFORM_BUFFER,O,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,I,L),L}function v(){for(let T=0;T<d;T++)if(c.indexOf(T)===-1)return c.push(T),T;return Wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(T){const I=a[T.id],L=T.uniforms,O=T.__cache;r.bindBuffer(r.UNIFORM_BUFFER,I);for(let E=0,R=L.length;E<R;E++){const z=L[E];if(Array.isArray(z))for(let B=0,j=z.length;B<j;B++)x(z[B],E,B,O);else x(z,E,0,O)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(T,I,L,O){if(b(T,I,L,O)===!0){const E=T.__offset,R=T.value;if(Array.isArray(R)){let z=0;for(let B=0;B<R.length;B++){const j=R[B],G=y(j);S(j,T.__data,z),typeof j!="number"&&typeof j!="boolean"&&!j.isMatrix3&&!ArrayBuffer.isView(j)&&(z+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else S(R,T.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,E,T.__data)}}function S(T,I,L){typeof T=="number"||typeof T=="boolean"?I[0]=T:T.isMatrix3?(I[0]=T.elements[0],I[1]=T.elements[1],I[2]=T.elements[2],I[3]=0,I[4]=T.elements[3],I[5]=T.elements[4],I[6]=T.elements[5],I[7]=0,I[8]=T.elements[6],I[9]=T.elements[7],I[10]=T.elements[8],I[11]=0):ArrayBuffer.isView(T)?I.set(new T.constructor(T.buffer,T.byteOffset,I.length)):T.toArray(I,L)}function b(T,I,L,O){const E=T.value,R=I+"_"+L;if(O[R]===void 0)return typeof E=="number"||typeof E=="boolean"?O[R]=E:ArrayBuffer.isView(E)?O[R]=E.slice():O[R]=E.clone(),!0;{const z=O[R];if(typeof E=="number"||typeof E=="boolean"){if(z!==E)return O[R]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(z.equals(E)===!1)return z.copy(E),!0}}return!1}function M(T){const I=T.uniforms;let L=0;const O=16;for(let R=0,z=I.length;R<z;R++){const B=Array.isArray(I[R])?I[R]:[I[R]];for(let j=0,G=B.length;j<G;j++){const de=B[j],W=Array.isArray(de.value)?de.value:[de.value];for(let ae=0,Q=W.length;ae<Q;ae++){const q=W[ae],ie=y(q),ee=L%O,k=ee%ie.boundary,J=ee+k;L+=k,J!==0&&O-J<ie.storage&&(L+=O-J),de.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),de.__offset=L,L+=ie.storage}}}const E=L%O;return E>0&&(L+=O-E),T.__size=L,T.__cache={},this}function y(T){const I={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(I.boundary=4,I.storage=4):T.isVector2?(I.boundary=8,I.storage=8):T.isVector3||T.isColor?(I.boundary=16,I.storage=12):T.isVector4?(I.boundary=16,I.storage=16):T.isMatrix3?(I.boundary=48,I.storage=48):T.isMatrix4?(I.boundary=64,I.storage=64):T.isTexture?Ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(T)?(I.boundary=16,I.storage=T.byteLength):Ct("WebGLRenderer: Unsupported uniform value type.",T),I}function N(T){const I=T.target;I.removeEventListener("dispose",N);const L=c.indexOf(I.__bindingPointIndex);c.splice(L,1),r.deleteBuffer(a[I.id]),delete a[I.id],delete o[I.id]}function P(){for(const T in a)r.deleteBuffer(a[T]);c=[],a={},o={}}return{bind:h,update:f,dispose:P}}const qb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ji=null;function Zb(){return Ji===null&&(Ji=new ZS(qb,16,16,Ws,Dr),Ji.name="DFG_LUT",Ji.minFilter=Hn,Ji.magFilter=Hn,Ji.wrapS=Cr,Ji.wrapT=Cr,Ji.generateMipmaps=!1,Ji.needsUpdate=!0),Ji}class hu{constructor(e={}){const{canvas:t=dS(),context:i=null,depth:a=!0,stencil:o=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:f=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:x=Si}=e;this.isWebGLRenderer=!0;let S;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=i.getContextAttributes().alpha}else S=c;const b=x,M=new Set([Xh,Wh,Gh]),y=new Set([Si,lr,qo,Zo,Hh,Vh]),N=new Uint32Array(4),P=new Int32Array(4),T=new $;let I=null,L=null;const O=[],E=[];let R=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=sr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const z=this;let B=!1,j=null,G=null,de=null,W=null;this._outputColorSpace=ti;let ae=0,Q=0,q=null,ie=-1,ee=null;const k=new yn,J=new yn;let Pe=null;const oe=new Ot(0);let ve=0,K=t.width,xe=t.height,ge=1,ce=null,be=null;const et=new yn(0,0,K,xe),Mt=new yn(0,0,K,xe);let Ge=!1;const we=new Kh;let Le=!1,De=!1;const Qe=new un,je=new $,vt=new yn,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _t=!1;function Et(){return q===null?ge:1}let X=i;function Bt(C,te){return t.getContext(C,te)}try{const C={alpha:!0,depth:a,stencil:o,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:f,powerPreference:m,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zh}`),t.addEventListener("webglcontextlost",Jt,!1),t.addEventListener("webglcontextrestored",Xt,!1),t.addEventListener("webglcontextcreationerror",Pn,!1),X===null){const te="webgl2";if(X=Bt(te,C),X===null)throw Bt(te)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(C){throw Wt("WebGLRenderer: "+C.message),C}let Dt,F,w,re,ue,Me,Oe,ze,U,V,le,Ee,Ce,Ae,Ke,nt,ft,Y,$e,Te,Ie,Ye,Ne;function ct(){Dt=new Zw(X),Dt.init(),Ie=new Hb(X,Dt),F=new Vw(X,Dt,e,Ie),w=new kb(X,Dt),F.reversedDepthBuffer&&g&&w.buffers.depth.setReversed(!0),G=X.createFramebuffer(),de=X.createFramebuffer(),W=X.createFramebuffer(),re=new Qw(X),ue=new Tb,Me=new Bb(X,Dt,w,ue,F,Ie,re),Oe=new qw(z),ze=new iE(X),Ye=new Bw(X,ze),U=new Kw(X,ze,re,Ye),V=new tT(X,U,ze,Ye,re),Y=new eT(X,F,Me),Ke=new Gw(ue),le=new wb(z,Oe,Dt,F,Ye,Ke),Ee=new jb(z,ue),Ce=new Ab,Ae=new Db(Dt),ft=new kw(z,Oe,w,V,S,h),nt=new zb(z,V,F),Ne=new Yb(X,re,F,w),$e=new Hw(X,Dt,re),Te=new Jw(X,Dt,re),re.programs=le.programs,z.capabilities=F,z.extensions=Dt,z.properties=ue,z.renderLists=Ce,z.shadowMap=nt,z.state=w,z.info=re}ct(),b!==Si&&(R=new iT(b,t.width,t.height,d,a,o));const ot=new Xb(z,X);this.xr=ot,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const C=Dt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Dt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(C){C!==void 0&&(ge=C,this.setSize(K,xe,!1))},this.getSize=function(C){return C.set(K,xe)},this.setSize=function(C,te,_e=!0){if(ot.isPresenting){Ct("WebGLRenderer: Can't change size while VR device is presenting.");return}K=C,xe=te,t.width=Math.floor(C*ge),t.height=Math.floor(te*ge),_e===!0&&(t.style.width=C+"px",t.style.height=te+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,C,te)},this.getDrawingBufferSize=function(C){return C.set(K*ge,xe*ge).floor()},this.setDrawingBufferSize=function(C,te,_e){K=C,xe=te,ge=_e,t.width=Math.floor(C*_e),t.height=Math.floor(te*_e),this.setViewport(0,0,C,te)},this.setEffects=function(C){if(b===Si){Wt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let te=0;te<C.length;te++)if(C[te].isOutputPass===!0){Ct("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(k)},this.getViewport=function(C){return C.copy(et)},this.setViewport=function(C,te,_e,he){C.isVector4?et.set(C.x,C.y,C.z,C.w):et.set(C,te,_e,he),w.viewport(k.copy(et).multiplyScalar(ge).round())},this.getScissor=function(C){return C.copy(Mt)},this.setScissor=function(C,te,_e,he){C.isVector4?Mt.set(C.x,C.y,C.z,C.w):Mt.set(C,te,_e,he),w.scissor(J.copy(Mt).multiplyScalar(ge).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(C){w.setScissorTest(Ge=C)},this.setOpaqueSort=function(C){ce=C},this.setTransparentSort=function(C){be=C},this.getClearColor=function(C){return C.copy(ft.getClearColor())},this.setClearColor=function(){ft.setClearColor(...arguments)},this.getClearAlpha=function(){return ft.getClearAlpha()},this.setClearAlpha=function(){ft.setClearAlpha(...arguments)},this.clear=function(C=!0,te=!0,_e=!0){let he=0;if(C){let pe=!1;if(q!==null){const Ve=q.texture.format;pe=M.has(Ve)}if(pe){const Ve=q.texture.type,rt=y.has(Ve),We=ft.getClearColor(),dt=ft.getClearAlpha(),gt=We.r,Pt=We.g,Nt=We.b;rt?(N[0]=gt,N[1]=Pt,N[2]=Nt,N[3]=dt,X.clearBufferuiv(X.COLOR,0,N)):(P[0]=gt,P[1]=Pt,P[2]=Nt,P[3]=dt,X.clearBufferiv(X.COLOR,0,P))}else he|=X.COLOR_BUFFER_BIT}te&&(he|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),_e&&(he|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),he!==0&&X.clear(he)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),j=C},this.dispose=function(){t.removeEventListener("webglcontextlost",Jt,!1),t.removeEventListener("webglcontextrestored",Xt,!1),t.removeEventListener("webglcontextcreationerror",Pn,!1),ft.dispose(),Ce.dispose(),Ae.dispose(),ue.dispose(),Oe.dispose(),V.dispose(),Ye.dispose(),Ne.dispose(),le.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",it),ot.removeEventListener("sessionend",qe),ut.stop()};function Jt(C){C.preventDefault(),Qc("WebGLRenderer: Context Lost."),B=!0}function Xt(){Qc("WebGLRenderer: Context Restored."),B=!1;const C=re.autoReset,te=nt.enabled,_e=nt.autoUpdate,he=nt.needsUpdate,pe=nt.type;ct(),re.autoReset=C,nt.enabled=te,nt.autoUpdate=_e,nt.needsUpdate=he,nt.type=pe}function Pn(C){Wt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function oi(C){const te=C.target;te.removeEventListener("dispose",oi),Xi(te)}function Xi(C){fr(C),ue.remove(C)}function fr(C){const te=ue.get(C).programs;te!==void 0&&(te.forEach(function(_e){le.releaseProgram(_e)}),C.isShaderMaterial&&le.releaseShaderCache(C))}this.renderBufferDirect=function(C,te,_e,he,pe,Ve){te===null&&(te=st);const rt=pe.isMesh&&pe.matrixWorld.determinantAffine()<0,We=$t(C,te,_e,he,pe);w.setMaterial(he,rt);let dt=_e.index,gt=1;if(he.wireframe===!0){if(dt=U.getWireframeAttribute(_e),dt===void 0)return;gt=2}const Pt=_e.drawRange,Nt=_e.attributes.position;let pt=Pt.start*gt,Gt=(Pt.start+Pt.count)*gt;Ve!==null&&(pt=Math.max(pt,Ve.start*gt),Gt=Math.min(Gt,(Ve.start+Ve.count)*gt)),dt!==null?(pt=Math.max(pt,0),Gt=Math.min(Gt,dt.count)):Nt!=null&&(pt=Math.max(pt,0),Gt=Math.min(Gt,Nt.count));const Qt=Gt-pt;if(Qt<0||Qt===1/0)return;Ye.setup(pe,he,We,_e,dt);let on,Ze=$e;if(dt!==null&&(on=ze.get(dt),Ze=Te,Ze.setIndex(on)),pe.isMesh)he.wireframe===!0?(w.setLineWidth(he.wireframeLinewidth*Et()),Ze.setMode(X.LINES)):Ze.setMode(X.TRIANGLES);else if(pe.isLine){let Rt=he.linewidth;Rt===void 0&&(Rt=1),w.setLineWidth(Rt*Et()),pe.isLineSegments?Ze.setMode(X.LINES):pe.isLineLoop?Ze.setMode(X.LINE_LOOP):Ze.setMode(X.LINE_STRIP)}else pe.isPoints?Ze.setMode(X.POINTS):pe.isSprite&&Ze.setMode(X.TRIANGLES);if(pe.isBatchedMesh)if(Dt.get("WEBGL_multi_draw"))Ze.renderMultiDraw(pe._multiDrawStarts,pe._multiDrawCounts,pe._multiDrawCount);else{const Rt=pe._multiDrawStarts,Je=pe._multiDrawCounts,gn=pe._multiDrawCount,yt=dt?ze.get(dt).bytesPerElement:1,St=ue.get(he).currentProgram.getUniforms();for(let rn=0;rn<gn;rn++)St.setValue(X,"_gl_DrawID",rn),Ze.render(Rt[rn]/yt,Je[rn])}else if(pe.isInstancedMesh)Ze.renderInstances(pt,Qt,pe.count);else if(_e.isInstancedBufferGeometry){const Rt=_e._maxInstanceCount!==void 0?_e._maxInstanceCount:1/0,Je=Math.min(_e.instanceCount,Rt);Ze.renderInstances(pt,Qt,Je)}else Ze.render(pt,Qt)};function se(C,te,_e){C.transparent===!0&&C.side===Hi&&C.forceSinglePass===!1?(C.side=jn,C.needsUpdate=!0,Ft(C,te,_e),C.side=gs,C.needsUpdate=!0,Ft(C,te,_e),C.side=Hi):Ft(C,te,_e)}this.compile=function(C,te,_e=null){_e===null&&(_e=C),L=Ae.get(_e),L.init(te),E.push(L),_e.traverseVisible(function(pe){pe.isLight&&pe.layers.test(te.layers)&&(L.pushLight(pe),pe.castShadow&&L.pushShadow(pe))}),C!==_e&&C.traverseVisible(function(pe){pe.isLight&&pe.layers.test(te.layers)&&(L.pushLight(pe),pe.castShadow&&L.pushShadow(pe))}),L.setupLights();const he=new Set;return C.traverse(function(pe){if(!(pe.isMesh||pe.isPoints||pe.isLine||pe.isSprite))return;const Ve=pe.material;if(Ve)if(Array.isArray(Ve))for(let rt=0;rt<Ve.length;rt++){const We=Ve[rt];se(We,_e,pe),he.add(We)}else se(Ve,_e,pe),he.add(Ve)}),L=E.pop(),he},this.compileAsync=function(C,te,_e=null){const he=this.compile(C,te,_e);return new Promise(pe=>{function Ve(){if(he.forEach(function(rt){ue.get(rt).currentProgram.isReady()&&he.delete(rt)}),he.size===0){pe(C);return}setTimeout(Ve,10)}Dt.get("KHR_parallel_shader_compile")!==null?Ve():setTimeout(Ve,10)})};let Re=null;function Be(C){Re&&Re(C)}function it(){ut.stop()}function qe(){ut.start()}const ut=new Sx;ut.setAnimationLoop(Be),typeof self<"u"&&ut.setContext(self),this.setAnimationLoop=function(C){Re=C,ot.setAnimationLoop(C),C===null?ut.stop():ut.start()},ot.addEventListener("sessionstart",it),ot.addEventListener("sessionend",qe),this.render=function(C,te){if(te!==void 0&&te.isCamera!==!0){Wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;j!==null&&j.renderStart(C,te);const _e=ot.enabled===!0&&ot.isPresenting===!0,he=R!==null&&(q===null||_e)&&R.begin(z,q);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),te.parent===null&&te.matrixWorldAutoUpdate===!0&&te.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(te),te=ot.getCamera()),C.isScene===!0&&C.onBeforeRender(z,C,te,q),L=Ae.get(C,E.length),L.init(te),L.state.textureUnits=Me.getTextureUnits(),E.push(L),Qe.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),we.setFromProjectionMatrix(Qe,nr,te.reversedDepth),De=this.localClippingEnabled,Le=Ke.init(this.clippingPlanes,De),I=Ce.get(C,O.length),I.init(),O.push(I),ot.enabled===!0&&ot.isPresenting===!0){const rt=z.xr.getDepthSensingMesh();rt!==null&&Ht(rt,te,-1/0,z.sortObjects)}Ht(C,te,0,z.sortObjects),I.finish(),z.sortObjects===!0&&I.sort(ce,be,te.reversedDepth),_t=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,_t&&ft.addToRenderList(I,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Le===!0&&Ke.beginShadows();const pe=L.state.shadowsArray;if(nt.render(pe,C,te),Le===!0&&Ke.endShadows(),(he&&R.hasRenderPass())===!1){const rt=I.opaque,We=I.transmissive;if(L.setupLights(),te.isArrayCamera){const dt=te.cameras;if(We.length>0)for(let gt=0,Pt=dt.length;gt<Pt;gt++){const Nt=dt[gt];Tn(rt,We,C,Nt)}_t&&ft.render(C);for(let gt=0,Pt=dt.length;gt<Pt;gt++){const Nt=dt[gt];wt(I,C,Nt,Nt.viewport)}}else We.length>0&&Tn(rt,We,C,te),_t&&ft.render(C),wt(I,C,te)}q!==null&&Q===0&&(Me.updateMultisampleRenderTarget(q),Me.updateRenderTargetMipmap(q)),he&&R.end(z),C.isScene===!0&&C.onAfterRender(z,C,te),Ye.resetDefaultState(),ie=-1,ee=null,E.pop(),E.length>0?(L=E[E.length-1],Me.setTextureUnits(L.state.textureUnits),Le===!0&&Ke.setGlobalState(z.clippingPlanes,L.state.camera)):L=null,O.pop(),O.length>0?I=O[O.length-1]:I=null,j!==null&&j.renderEnd()};function Ht(C,te,_e,he){if(C.visible===!1)return;if(C.layers.test(te.layers)){if(C.isGroup)_e=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(te);else if(C.isLightProbeGrid)L.pushLightProbeGrid(C);else if(C.isLight)L.pushLight(C),C.castShadow&&L.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||we.intersectsSprite(C)){he&&vt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Qe);const rt=V.update(C),We=C.material;We.visible&&I.push(C,rt,We,_e,vt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||we.intersectsObject(C))){const rt=V.update(C),We=C.material;if(he&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),vt.copy(C.boundingSphere.center)):(rt.boundingSphere===null&&rt.computeBoundingSphere(),vt.copy(rt.boundingSphere.center)),vt.applyMatrix4(C.matrixWorld).applyMatrix4(Qe)),Array.isArray(We)){const dt=rt.groups;for(let gt=0,Pt=dt.length;gt<Pt;gt++){const Nt=dt[gt],pt=We[Nt.materialIndex];pt&&pt.visible&&I.push(C,rt,pt,_e,vt.z,Nt)}}else We.visible&&I.push(C,rt,We,_e,vt.z,null)}}const Ve=C.children;for(let rt=0,We=Ve.length;rt<We;rt++)Ht(Ve[rt],te,_e,he)}function wt(C,te,_e,he){const{opaque:pe,transmissive:Ve,transparent:rt}=C;L.setupLightsView(_e),Le===!0&&Ke.setGlobalState(z.clippingPlanes,_e),he&&w.viewport(k.copy(he)),pe.length>0&&an(pe,te,_e),Ve.length>0&&an(Ve,te,_e),rt.length>0&&an(rt,te,_e),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function Tn(C,te,_e,he){if((_e.isScene===!0?_e.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[he.id]===void 0){const pt=Dt.has("EXT_color_buffer_half_float")||Dt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[he.id]=new or(1,1,{generateMipmaps:!0,type:pt?Dr:Si,minFilter:Hs,samples:Math.max(4,F.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace})}const Ve=L.state.transmissionRenderTarget[he.id],rt=he.viewport||k;Ve.setSize(rt.z*z.transmissionResolutionScale,rt.w*z.transmissionResolutionScale);const We=z.getRenderTarget(),dt=z.getActiveCubeFace(),gt=z.getActiveMipmapLevel();z.setRenderTarget(Ve),z.getClearColor(oe),ve=z.getClearAlpha(),ve<1&&z.setClearColor(16777215,.5),z.clear(),_t&&ft.render(_e);const Pt=z.toneMapping;z.toneMapping=sr;const Nt=he.viewport;if(he.viewport!==void 0&&(he.viewport=void 0),L.setupLightsView(he),Le===!0&&Ke.setGlobalState(z.clippingPlanes,he),an(C,_e,he),Me.updateMultisampleRenderTarget(Ve),Me.updateRenderTargetMipmap(Ve),Dt.has("WEBGL_multisampled_render_to_texture")===!1){let pt=!1;for(let Gt=0,Qt=te.length;Gt<Qt;Gt++){const on=te[Gt],{object:Ze,geometry:Rt,material:Je,group:gn}=on;if(Je.side===Hi&&Ze.layers.test(he.layers)){const yt=Je.side;Je.side=jn,Je.needsUpdate=!0,Ut(Ze,_e,he,Rt,Je,gn),Je.side=yt,Je.needsUpdate=!0,pt=!0}}pt===!0&&(Me.updateMultisampleRenderTarget(Ve),Me.updateRenderTargetMipmap(Ve))}z.setRenderTarget(We,dt,gt),z.setClearColor(oe,ve),Nt!==void 0&&(he.viewport=Nt),z.toneMapping=Pt}function an(C,te,_e){const he=te.isScene===!0?te.overrideMaterial:null;for(let pe=0,Ve=C.length;pe<Ve;pe++){const rt=C[pe],{object:We,geometry:dt,group:gt}=rt;let Pt=rt.material;Pt.allowOverride===!0&&he!==null&&(Pt=he),We.layers.test(_e.layers)&&Ut(We,te,_e,dt,Pt,gt)}}function Ut(C,te,_e,he,pe,Ve){C.onBeforeRender(z,te,_e,he,pe,Ve),C.modelViewMatrix.multiplyMatrices(_e.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),pe.onBeforeRender(z,te,_e,he,C,Ve),pe.transparent===!0&&pe.side===Hi&&pe.forceSinglePass===!1?(pe.side=jn,pe.needsUpdate=!0,z.renderBufferDirect(_e,te,he,pe,C,Ve),pe.side=gs,pe.needsUpdate=!0,z.renderBufferDirect(_e,te,he,pe,C,Ve),pe.side=Hi):z.renderBufferDirect(_e,te,he,pe,C,Ve),C.onAfterRender(z,te,_e,he,pe,Ve)}function Ft(C,te,_e){te.isScene!==!0&&(te=st);const he=ue.get(C),pe=L.state.lights,Ve=L.state.shadowsArray,rt=pe.state.version,We=le.getParameters(C,pe.state,Ve,te,_e,L.state.lightProbeGridArray),dt=le.getProgramCacheKey(We);let gt=he.programs;he.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?te.environment:null,he.fog=te.fog;const Pt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;he.envMap=Oe.get(C.envMap||he.environment,Pt),he.envMapRotation=he.environment!==null&&C.envMap===null?te.environmentRotation:C.envMapRotation,gt===void 0&&(C.addEventListener("dispose",oi),gt=new Map,he.programs=gt);let Nt=gt.get(dt);if(Nt!==void 0){if(he.currentProgram===Nt&&he.lightsStateVersion===rt)return mn(C,We),Nt}else We.uniforms=le.getUniforms(C),j!==null&&C.isNodeMaterial&&j.build(C,_e,We),C.onBeforeCompile(We,z),Nt=le.acquireProgram(We,dt),gt.set(dt,Nt),he.uniforms=We.uniforms;const pt=he.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(pt.clippingPlanes=Ke.uniform),mn(C,We),he.needsLights=Or(C),he.lightsStateVersion=rt,he.needsLights&&(pt.ambientLightColor.value=pe.state.ambient,pt.lightProbe.value=pe.state.probe,pt.directionalLights.value=pe.state.directional,pt.directionalLightShadows.value=pe.state.directionalShadow,pt.spotLights.value=pe.state.spot,pt.spotLightShadows.value=pe.state.spotShadow,pt.rectAreaLights.value=pe.state.rectArea,pt.ltc_1.value=pe.state.rectAreaLTC1,pt.ltc_2.value=pe.state.rectAreaLTC2,pt.pointLights.value=pe.state.point,pt.pointLightShadows.value=pe.state.pointShadow,pt.hemisphereLights.value=pe.state.hemi,pt.directionalShadowMatrix.value=pe.state.directionalShadowMatrix,pt.spotLightMatrix.value=pe.state.spotLightMatrix,pt.spotLightMap.value=pe.state.spotLightMap,pt.pointShadowMatrix.value=pe.state.pointShadowMatrix),he.lightProbeGrid=L.state.lightProbeGridArray.length>0,he.currentProgram=Nt,he.uniformsList=null,Nt}function Kt(C){if(C.uniformsList===null){const te=C.currentProgram.getUniforms();C.uniformsList=jc.seqWithValue(te.seq,C.uniforms)}return C.uniformsList}function mn(C,te){const _e=ue.get(C);_e.outputColorSpace=te.outputColorSpace,_e.batching=te.batching,_e.batchingColor=te.batchingColor,_e.instancing=te.instancing,_e.instancingColor=te.instancingColor,_e.instancingMorph=te.instancingMorph,_e.skinning=te.skinning,_e.morphTargets=te.morphTargets,_e.morphNormals=te.morphNormals,_e.morphColors=te.morphColors,_e.morphTargetsCount=te.morphTargetsCount,_e.numClippingPlanes=te.numClippingPlanes,_e.numIntersection=te.numClipIntersection,_e.vertexAlphas=te.vertexAlphas,_e.vertexTangents=te.vertexTangents,_e.toneMapping=te.toneMapping}function An(C,te){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;T.setFromMatrixPosition(te.matrixWorld);for(let _e=0,he=C.length;_e<he;_e++){const pe=C[_e];if(pe.texture!==null&&pe.boundingBox.containsPoint(T))return pe}return null}function $t(C,te,_e,he,pe){te.isScene!==!0&&(te=st),Me.resetTextureUnits();const Ve=te.fog,rt=he.isMeshStandardMaterial||he.isMeshLambertMaterial||he.isMeshPhongMaterial?te.environment:null,We=q===null?z.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:jt.workingColorSpace,dt=he.isMeshStandardMaterial||he.isMeshLambertMaterial&&!he.envMap||he.isMeshPhongMaterial&&!he.envMap,gt=Oe.get(he.envMap||rt,dt),Pt=he.vertexColors===!0&&!!_e.attributes.color&&_e.attributes.color.itemSize===4,Nt=!!_e.attributes.tangent&&(!!he.normalMap||he.anisotropy>0),pt=!!_e.morphAttributes.position,Gt=!!_e.morphAttributes.normal,Qt=!!_e.morphAttributes.color;let on=sr;he.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(on=z.toneMapping);const Ze=_e.morphAttributes.position||_e.morphAttributes.normal||_e.morphAttributes.color,Rt=Ze!==void 0?Ze.length:0,Je=ue.get(he),gn=L.state.lights;if(Le===!0&&(De===!0||C!==ee)){const en=C===ee&&he.id===ie;Ke.setState(he,C,en)}let yt=!1;he.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==gn.state.version||Je.outputColorSpace!==We||pe.isBatchedMesh&&Je.batching===!1||!pe.isBatchedMesh&&Je.batching===!0||pe.isBatchedMesh&&Je.batchingColor===!0&&pe.colorTexture===null||pe.isBatchedMesh&&Je.batchingColor===!1&&pe.colorTexture!==null||pe.isInstancedMesh&&Je.instancing===!1||!pe.isInstancedMesh&&Je.instancing===!0||pe.isSkinnedMesh&&Je.skinning===!1||!pe.isSkinnedMesh&&Je.skinning===!0||pe.isInstancedMesh&&Je.instancingColor===!0&&pe.instanceColor===null||pe.isInstancedMesh&&Je.instancingColor===!1&&pe.instanceColor!==null||pe.isInstancedMesh&&Je.instancingMorph===!0&&pe.morphTexture===null||pe.isInstancedMesh&&Je.instancingMorph===!1&&pe.morphTexture!==null||Je.envMap!==gt||he.fog===!0&&Je.fog!==Ve||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==Ke.numPlanes||Je.numIntersection!==Ke.numIntersection)||Je.vertexAlphas!==Pt||Je.vertexTangents!==Nt||Je.morphTargets!==pt||Je.morphNormals!==Gt||Je.morphColors!==Qt||Je.toneMapping!==on||Je.morphTargetsCount!==Rt||!!Je.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(yt=!0):(yt=!0,Je.__version=he.version);let St=Je.currentProgram;yt===!0&&(St=Ft(he,te,pe),j&&he.isNodeMaterial&&j.onUpdateProgram(he,St,Je));let rn=!1,Tt=!1,Fn=!1;const qt=St.getUniforms(),dn=Je.uniforms;if(w.useProgram(St.program)&&(rn=!0,Tt=!0,Fn=!0),he.id!==ie&&(ie=he.id,Tt=!0),Je.needsLights){const en=An(L.state.lightProbeGridArray,pe);Je.lightProbeGrid!==en&&(Je.lightProbeGrid=en,Tt=!0)}if(rn||ee!==C){w.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),qt.setValue(X,"projectionMatrix",C.projectionMatrix),qt.setValue(X,"viewMatrix",C.matrixWorldInverse);const Li=qt.map.cameraPosition;Li!==void 0&&Li.setValue(X,je.setFromMatrixPosition(C.matrixWorld)),F.logarithmicDepthBuffer&&qt.setValue(X,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(he.isMeshPhongMaterial||he.isMeshToonMaterial||he.isMeshLambertMaterial||he.isMeshBasicMaterial||he.isMeshStandardMaterial||he.isShaderMaterial)&&qt.setValue(X,"isOrthographic",C.isOrthographicCamera===!0),ee!==C&&(ee=C,Tt=!0,Fn=!0)}if(Je.needsLights&&(gn.state.directionalShadowMap.length>0&&qt.setValue(X,"directionalShadowMap",gn.state.directionalShadowMap,Me),gn.state.spotShadowMap.length>0&&qt.setValue(X,"spotShadowMap",gn.state.spotShadowMap,Me),gn.state.pointShadowMap.length>0&&qt.setValue(X,"pointShadowMap",gn.state.pointShadowMap,Me)),pe.isSkinnedMesh){qt.setOptional(X,pe,"bindMatrix"),qt.setOptional(X,pe,"bindMatrixInverse");const en=pe.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),qt.setValue(X,"boneTexture",en.boneTexture,Me))}pe.isBatchedMesh&&(qt.setOptional(X,pe,"batchingTexture"),qt.setValue(X,"batchingTexture",pe._matricesTexture,Me),qt.setOptional(X,pe,"batchingIdTexture"),qt.setValue(X,"batchingIdTexture",pe._indirectTexture,Me),qt.setOptional(X,pe,"batchingColorTexture"),pe._colorsTexture!==null&&qt.setValue(X,"batchingColorTexture",pe._colorsTexture,Me));const Pi=_e.morphAttributes;if((Pi.position!==void 0||Pi.normal!==void 0||Pi.color!==void 0)&&Y.update(pe,_e,St),(Tt||Je.receiveShadow!==pe.receiveShadow)&&(Je.receiveShadow=pe.receiveShadow,qt.setValue(X,"receiveShadow",pe.receiveShadow)),(he.isMeshStandardMaterial||he.isMeshLambertMaterial||he.isMeshPhongMaterial)&&he.envMap===null&&te.environment!==null&&(dn.envMapIntensity.value=te.environmentIntensity),dn.dfgLUT!==void 0&&(dn.dfgLUT.value=Zb()),Tt){if(qt.setValue(X,"toneMappingExposure",z.toneMappingExposure),Je.needsLights&&Fr(dn,Fn),Ve&&he.fog===!0&&Ee.refreshFogUniforms(dn,Ve),Ee.refreshMaterialUniforms(dn,he,ge,xe,L.state.transmissionRenderTarget[C.id]),Je.needsLights&&Je.lightProbeGrid){const en=Je.lightProbeGrid;dn.probesSH.value=en.texture,dn.probesMin.value.copy(en.boundingBox.min),dn.probesMax.value.copy(en.boundingBox.max),dn.probesResolution.value.copy(en.resolution)}jc.upload(X,Kt(Je),dn,Me)}if(he.isShaderMaterial&&he.uniformsNeedUpdate===!0&&(jc.upload(X,Kt(Je),dn,Me),he.uniformsNeedUpdate=!1),he.isSpriteMaterial&&qt.setValue(X,"center",pe.center),qt.setValue(X,"modelViewMatrix",pe.modelViewMatrix),qt.setValue(X,"normalMatrix",pe.normalMatrix),qt.setValue(X,"modelMatrix",pe.matrixWorld),he.uniformsGroups!==void 0){const en=he.uniformsGroups;for(let Li=0,$i=en.length;Li<$i;Li++){const xs=en[Li];Ne.update(xs,St),Ne.bind(xs,St)}}return St}function Fr(C,te){C.ambientLightColor.needsUpdate=te,C.lightProbe.needsUpdate=te,C.directionalLights.needsUpdate=te,C.directionalLightShadows.needsUpdate=te,C.pointLights.needsUpdate=te,C.pointLightShadows.needsUpdate=te,C.spotLights.needsUpdate=te,C.spotLightShadows.needsUpdate=te,C.rectAreaLights.needsUpdate=te,C.hemisphereLights.needsUpdate=te}function Or(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return ae},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(C,te,_e){const he=ue.get(C);he.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,he.__autoAllocateDepthBuffer===!1&&(he.__useRenderToTexture=!1),ue.get(C.texture).__webglTexture=te,ue.get(C.depthTexture).__webglTexture=he.__autoAllocateDepthBuffer?void 0:_e,he.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,te){const _e=ue.get(C);_e.__webglFramebuffer=te,_e.__useDefaultFramebuffer=te===void 0},this.setRenderTarget=function(C,te=0,_e=0){q=C,ae=te,Q=_e;let he=null,pe=!1,Ve=!1;if(C){const We=ue.get(C);if(We.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(X.FRAMEBUFFER,We.__webglFramebuffer),k.copy(C.viewport),J.copy(C.scissor),Pe=C.scissorTest,w.viewport(k),w.scissor(J),w.setScissorTest(Pe),ie=-1;return}else if(We.__webglFramebuffer===void 0)Me.setupRenderTarget(C);else if(We.__hasExternalTextures)Me.rebindTextures(C,ue.get(C.texture).__webglTexture,ue.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Pt=C.depthTexture;if(We.__boundDepthTexture!==Pt){if(Pt!==null&&ue.has(Pt)&&(C.width!==Pt.image.width||C.height!==Pt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Me.setupDepthRenderbuffer(C)}}const dt=C.texture;(dt.isData3DTexture||dt.isDataArrayTexture||dt.isCompressedArrayTexture)&&(Ve=!0);const gt=ue.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(gt[te])?he=gt[te][_e]:he=gt[te],pe=!0):C.samples>0&&Me.useMultisampledRTT(C)===!1?he=ue.get(C).__webglMultisampledFramebuffer:Array.isArray(gt)?he=gt[_e]:he=gt,k.copy(C.viewport),J.copy(C.scissor),Pe=C.scissorTest}else k.copy(et).multiplyScalar(ge).floor(),J.copy(Mt).multiplyScalar(ge).floor(),Pe=Ge;if(_e!==0&&(he=G),w.bindFramebuffer(X.FRAMEBUFFER,he)&&w.drawBuffers(C,he),w.viewport(k),w.scissor(J),w.setScissorTest(Pe),pe){const We=ue.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+te,We.__webglTexture,_e)}else if(Ve){const We=te;for(let dt=0;dt<C.textures.length;dt++){const gt=ue.get(C.textures[dt]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+dt,gt.__webglTexture,_e,We)}}else if(C!==null&&_e!==0){const We=ue.get(C.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,We.__webglTexture,_e)}ie=-1},this.readRenderTargetPixels=function(C,te,_e,he,pe,Ve,rt,We=0){if(!(C&&C.isWebGLRenderTarget)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let dt=ue.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&rt!==void 0&&(dt=dt[rt]),dt){w.bindFramebuffer(X.FRAMEBUFFER,dt);try{const gt=C.textures[We],Pt=gt.format,Nt=gt.type;if(C.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+We),!F.textureFormatReadable(Pt)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!F.textureTypeReadable(Nt)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}te>=0&&te<=C.width-he&&_e>=0&&_e<=C.height-pe&&X.readPixels(te,_e,he,pe,Ie.convert(Pt),Ie.convert(Nt),Ve)}finally{const gt=q!==null?ue.get(q).__webglFramebuffer:null;w.bindFramebuffer(X.FRAMEBUFFER,gt)}}},this.readRenderTargetPixelsAsync=async function(C,te,_e,he,pe,Ve,rt,We=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let dt=ue.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&rt!==void 0&&(dt=dt[rt]),dt)if(te>=0&&te<=C.width-he&&_e>=0&&_e<=C.height-pe){w.bindFramebuffer(X.FRAMEBUFFER,dt);const gt=C.textures[We],Pt=gt.format,Nt=gt.type;if(C.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+We),!F.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!F.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pt=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,pt),X.bufferData(X.PIXEL_PACK_BUFFER,Ve.byteLength,X.STREAM_READ),X.readPixels(te,_e,he,pe,Ie.convert(Pt),Ie.convert(Nt),0);const Gt=q!==null?ue.get(q).__webglFramebuffer:null;w.bindFramebuffer(X.FRAMEBUFFER,Gt);const Qt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await fS(X,Qt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,pt),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Ve),X.deleteBuffer(pt),X.deleteSync(Qt),Ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,te=null,_e=0){const he=Math.pow(2,-_e),pe=Math.floor(C.image.width*he),Ve=Math.floor(C.image.height*he),rt=te!==null?te.x:0,We=te!==null?te.y:0;Me.setTexture2D(C,0),X.copyTexSubImage2D(X.TEXTURE_2D,_e,0,0,rt,We,pe,Ve),w.unbindTexture()},this.copyTextureToTexture=function(C,te,_e=null,he=null,pe=0,Ve=0){let rt,We,dt,gt,Pt,Nt,pt,Gt,Qt;const on=C.isCompressedTexture?C.mipmaps[Ve]:C.image;if(_e!==null)rt=_e.max.x-_e.min.x,We=_e.max.y-_e.min.y,dt=_e.isBox3?_e.max.z-_e.min.z:1,gt=_e.min.x,Pt=_e.min.y,Nt=_e.isBox3?_e.min.z:0;else{const dn=Math.pow(2,-pe);rt=Math.floor(on.width*dn),We=Math.floor(on.height*dn),C.isDataArrayTexture?dt=on.depth:C.isData3DTexture?dt=Math.floor(on.depth*dn):dt=1,gt=0,Pt=0,Nt=0}he!==null?(pt=he.x,Gt=he.y,Qt=he.z):(pt=0,Gt=0,Qt=0);const Ze=Ie.convert(te.format),Rt=Ie.convert(te.type);let Je;te.isData3DTexture?(Me.setTexture3D(te,0),Je=X.TEXTURE_3D):te.isDataArrayTexture||te.isCompressedArrayTexture?(Me.setTexture2DArray(te,0),Je=X.TEXTURE_2D_ARRAY):(Me.setTexture2D(te,0),Je=X.TEXTURE_2D),w.activeTexture(X.TEXTURE0),w.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,te.flipY),w.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),w.pixelStorei(X.UNPACK_ALIGNMENT,te.unpackAlignment);const gn=w.getParameter(X.UNPACK_ROW_LENGTH),yt=w.getParameter(X.UNPACK_IMAGE_HEIGHT),St=w.getParameter(X.UNPACK_SKIP_PIXELS),rn=w.getParameter(X.UNPACK_SKIP_ROWS),Tt=w.getParameter(X.UNPACK_SKIP_IMAGES);w.pixelStorei(X.UNPACK_ROW_LENGTH,on.width),w.pixelStorei(X.UNPACK_IMAGE_HEIGHT,on.height),w.pixelStorei(X.UNPACK_SKIP_PIXELS,gt),w.pixelStorei(X.UNPACK_SKIP_ROWS,Pt),w.pixelStorei(X.UNPACK_SKIP_IMAGES,Nt);const Fn=C.isDataArrayTexture||C.isData3DTexture,qt=te.isDataArrayTexture||te.isData3DTexture;if(C.isDepthTexture){const dn=ue.get(C),Pi=ue.get(te),en=ue.get(dn.__renderTarget),Li=ue.get(Pi.__renderTarget);w.bindFramebuffer(X.READ_FRAMEBUFFER,en.__webglFramebuffer),w.bindFramebuffer(X.DRAW_FRAMEBUFFER,Li.__webglFramebuffer);for(let $i=0;$i<dt;$i++)Fn&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ue.get(C).__webglTexture,pe,Nt+$i),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ue.get(te).__webglTexture,Ve,Qt+$i)),X.blitFramebuffer(gt,Pt,rt,We,pt,Gt,rt,We,X.DEPTH_BUFFER_BIT,X.NEAREST);w.bindFramebuffer(X.READ_FRAMEBUFFER,null),w.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(pe!==0||C.isRenderTargetTexture||ue.has(C)){const dn=ue.get(C),Pi=ue.get(te);w.bindFramebuffer(X.READ_FRAMEBUFFER,de),w.bindFramebuffer(X.DRAW_FRAMEBUFFER,W);for(let en=0;en<dt;en++)Fn?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,dn.__webglTexture,pe,Nt+en):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,dn.__webglTexture,pe),qt?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Pi.__webglTexture,Ve,Qt+en):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Pi.__webglTexture,Ve),pe!==0?X.blitFramebuffer(gt,Pt,rt,We,pt,Gt,rt,We,X.COLOR_BUFFER_BIT,X.NEAREST):qt?X.copyTexSubImage3D(Je,Ve,pt,Gt,Qt+en,gt,Pt,rt,We):X.copyTexSubImage2D(Je,Ve,pt,Gt,gt,Pt,rt,We);w.bindFramebuffer(X.READ_FRAMEBUFFER,null),w.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else qt?C.isDataTexture||C.isData3DTexture?X.texSubImage3D(Je,Ve,pt,Gt,Qt,rt,We,dt,Ze,Rt,on.data):te.isCompressedArrayTexture?X.compressedTexSubImage3D(Je,Ve,pt,Gt,Qt,rt,We,dt,Ze,on.data):X.texSubImage3D(Je,Ve,pt,Gt,Qt,rt,We,dt,Ze,Rt,on):C.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Ve,pt,Gt,rt,We,Ze,Rt,on.data):C.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Ve,pt,Gt,on.width,on.height,Ze,on.data):X.texSubImage2D(X.TEXTURE_2D,Ve,pt,Gt,rt,We,Ze,Rt,on);w.pixelStorei(X.UNPACK_ROW_LENGTH,gn),w.pixelStorei(X.UNPACK_IMAGE_HEIGHT,yt),w.pixelStorei(X.UNPACK_SKIP_PIXELS,St),w.pixelStorei(X.UNPACK_SKIP_ROWS,rn),w.pixelStorei(X.UNPACK_SKIP_IMAGES,Tt),Ve===0&&te.generateMipmaps&&X.generateMipmap(Je),w.unbindTexture()},this.initRenderTarget=function(C){ue.get(C).__webglFramebuffer===void 0&&Me.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Me.setTextureCube(C,0):C.isData3DTexture?Me.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Me.setTexture2DArray(C,0):Me.setTexture2D(C,0),w.unbindTexture()},this.resetState=function(){ae=0,Q=0,q=null,w.reset(),Ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(e),t.unpackColorSpace=jt._getUnpackColorSpace()}}const rv={type:"change"},sp={type:"start"},Rx={type:"end"},zc=new cu,sv=new us,Kb=Math.cos(70*br.DEG2RAD),Dn=new $,pi=2*Math.PI,sn={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},If=1e-6;class pu extends tE{constructor(e,t=null){super(e,t),this.state=sn.NONE,this.target=new $,this.cursor=new $,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ka.ROTATE,MIDDLE:ka.DOLLY,RIGHT:ka.PAN},this.touches={ONE:Oa.ROTATE,TWO:Oa.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new $,this._lastQuaternion=new cr,this._lastTargetPosition=new $,this._quat=new cr().setFromUnitVectors(e.up,new $(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new N0,this._sphericalDelta=new N0,this._scale=1,this._panOffset=new $,this._rotateStart=new ke,this._rotateEnd=new ke,this._rotateDelta=new ke,this._panStart=new ke,this._panEnd=new ke,this._panDelta=new ke,this._dollyStart=new ke,this._dollyEnd=new ke,this._dollyDelta=new ke,this._dollyDirection=new $,this._mouse=new ke,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Qb.bind(this),this._onPointerDown=Jb.bind(this),this._onPointerUp=eA.bind(this),this._onContextMenu=oA.bind(this),this._onMouseWheel=iA.bind(this),this._onKeyDown=rA.bind(this),this._onTouchStart=sA.bind(this),this._onTouchMove=aA.bind(this),this._onMouseDown=tA.bind(this),this._onMouseMove=nA.bind(this),this._interceptControlDown=lA.bind(this),this._interceptControlUp=cA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(rv),this.update(),this.state=sn.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Dn.copy(t).sub(this.target),Dn.applyQuaternion(this._quat),this._spherical.setFromVector3(Dn),this.autoRotate&&this.state===sn.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(i)&&isFinite(a)&&(i<-Math.PI?i+=pi:i>Math.PI&&(i-=pi),a<-Math.PI?a+=pi:a>Math.PI&&(a-=pi),i<=a?this._spherical.theta=Math.max(i,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+a)/2?Math.max(i,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=c!=this._spherical.radius}if(Dn.setFromSpherical(this._spherical),Dn.applyQuaternion(this._quatInverse),t.copy(this.target).add(Dn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const d=Dn.length();c=this._clampDistance(d*this._scale);const h=d-c;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),o=!!h}else if(this.object.isOrthographicCamera){const d=new $(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=h!==this.object.zoom;const f=new $(this._mouse.x,this._mouse.y,0);f.unproject(this.object),this.object.position.sub(f).add(d),this.object.updateMatrixWorld(),c=Dn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(zc.origin.copy(this.object.position),zc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(zc.direction))<Kb?this.object.lookAt(this.target):(sv.setFromNormalAndCoplanarPoint(this.object.up,this.target),zc.intersectPlane(sv,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>If||8*(1-this._lastQuaternion.dot(this.object.quaternion))>If||this._lastTargetPosition.distanceToSquared(this.target)>If?(this.dispatchEvent(rv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?pi/60*this.autoRotateSpeed*e:pi/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Dn.setFromMatrixColumn(t,0),Dn.multiplyScalar(-e),this._panOffset.add(Dn)}_panUp(e,t){this.screenSpacePanning===!0?Dn.setFromMatrixColumn(t,1):(Dn.setFromMatrixColumn(t,0),Dn.crossVectors(this.object.up,Dn)),Dn.multiplyScalar(e),this._panOffset.add(Dn)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;Dn.copy(a).sub(this.target);let o=Dn.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/i.clientHeight,this.object.matrix),this._panUp(2*t*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),a=e-i.left,o=t-i.top,c=i.width,d=i.height;this._mouse.x=a/c*2-1,this._mouse.y=-(o/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(pi*this._rotateDelta.x/t.clientHeight),this._rotateUp(pi*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(pi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-pi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(pi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-pi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(i,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(i,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,a=e.pageY-t.y,o=Math.sqrt(i*i+a*a);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),a=.5*(e.pageX+i.x),o=.5*(e.pageY+i.y);this._rotateEnd.set(a,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(pi*this._rotateDelta.x/t.clientHeight),this._rotateUp(pi*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(i,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,a=e.pageY-t.y,o=Math.sqrt(i*i+a*a);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(e.pageX+t.x)*.5,d=(e.pageY+t.y)*.5;this._updateZoomParameters(c,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ke,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Jb(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Qb(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function eA(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Rx),this.state=sn.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function tA(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ka.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=sn.DOLLY;break;case ka.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=sn.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=sn.ROTATE}break;case ka.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=sn.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=sn.PAN}break;default:this.state=sn.NONE}this.state!==sn.NONE&&this.dispatchEvent(sp)}function nA(r){switch(this.state){case sn.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case sn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case sn.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function iA(r){this.enabled===!1||this.enableZoom===!1||this.state!==sn.NONE||(r.preventDefault(),this.dispatchEvent(sp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Rx))}function rA(r){this.enabled!==!1&&this._handleKeyDown(r)}function sA(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Oa.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=sn.TOUCH_ROTATE;break;case Oa.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=sn.TOUCH_PAN;break;default:this.state=sn.NONE}break;case 2:switch(this.touches.TWO){case Oa.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=sn.TOUCH_DOLLY_PAN;break;case Oa.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=sn.TOUCH_DOLLY_ROTATE;break;default:this.state=sn.NONE}break;default:this.state=sn.NONE}this.state!==sn.NONE&&this.dispatchEvent(sp)}function aA(r){switch(this._trackPointer(r),this.state){case sn.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case sn.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case sn.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case sn.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=sn.NONE}}function oA(r){this.enabled!==!1&&r.preventDefault()}function lA(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function cA(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function uA(r,e,t=.03){if(!(e>0)||r.y>=-t)return null;const i=e/-r.y,a=r.x*i,o=r.z*i;return{x:a,y:-e,z:o,horizontal:Math.hypot(a,o),r:i}}function Fa(r,e){return Math.hypot(e.x-r.x,e.z-r.z)}function kc(r){let e=0;for(let t=1;t<r.length;t++)e+=Fa(r[t-1],r[t]);return e}function av(r){if(r.length<3)return 0;let e=0;for(let t=0;t<r.length;t++){const i=r[t],a=r[(t+1)%r.length];e+=i.x*a.z-a.x*i.z}return Math.abs(e)/2}function Bc(r,e,t){if(!r)return null;const i=r.horizontal,a=Math.hypot(e.x,e.z);if(a<1e-6)return null;const o=e.y/a*i;return t+o}function dA(r,e,t){if(!(r>0)||!(e>0)||!(t>0))return null;const i=r*(t/e);return i>.2&&i<10?i:null}function fA(r,e,t=0,i=45,a=6){const o=e.x-r.x,c=e.z-r.z,d=Math.hypot(o,c);if(d<1e-6)return e;const h=Math.atan2(c,o)-t,f=i*Math.PI/180,m=Math.round(h/f)*f;if(Math.abs(h-m)>a*Math.PI/180)return e;const v=m+t;return{x:r.x+d*Math.cos(v),z:r.z+d*Math.sin(v)}}function hA(r,e){return Math.atan2(e.z-r.z,e.x-r.x)}function pA(r,e){const t=e.x-r.x,i=e.z-r.z,a=Math.hypot(t,i);if(a<1e-6)return null;const o=-i/a,c=t/a;return{nx:o,nz:c,c:o*r.x+c*r.z}}function mA(r,e){const t=e.nx*r.x+e.nz*r.z;if(Math.abs(t)<1e-6)return null;const i=e.c/t;return i<=0?null:{x:r.x*i,y:r.y*i,z:r.z*i}}function gA(r,e){return Math.hypot(e.x-r.x,e.y-r.y,e.z-r.z)}function Px(r,e=2.5){var h;const t=r.imgW,i=r.camHeight;if(!t||!i||!(((h=r.points)==null?void 0:h.length)>=1))return null;const a=e*2*Math.PI/t,o=f=>{const m=f.horizontal??Math.hypot(f.x??0,f.z??0);return(i*i+m*m)/i*a},c=r.points.map(o),d=Math.sqrt(c.reduce((f,m)=>f+m*m,0));if(r.mode==="area"){const f=c.reduce((m,v)=>m+v,0)/c.length;return(r.perimeter??4*Math.sqrt(r.value))*f/2}return r.mode==="height"||r.mode==="slope"?c[0]*Math.max(1,r.value/i):d}const vA=[{id:"m",label:"m"},{id:"cm",label:"cm"},{id:"mm",label:"mm"},{id:"ft",label:"ft-in"}],iu=.3048;function cn(r,e="m",t=2){if(e==="cm")return`${(r*100).toFixed(0)} cm`;if(e==="mm")return`${(r*1e3).toFixed(0)} mm`;if(e==="ft"){const i=Math.round(r/iu*12*8),a=Math.floor(i/96),o=i-a*12*8,c=Math.floor(o/8),d=o-c*8,f=d?["","⅛","¼","⅜","½","⅝","¾","⅞"][d]:"";return`${a}′ ${c}${f}″`}return`${r.toFixed(t)} m`}function pn(r,e="m",t=2){return e==="ft"?`${(r/(iu*iu)).toFixed(1)} ft²`:`${r.toFixed(t)} m²`}function ov(r,e="m"){return e==="ft"?`${(r/iu**3).toFixed(0)} ft³`:`${r.toFixed(2)} m³`}function Yc(r,e="m"){return r.mode==="note"?r.text??"📝":r.unit==="°"?`${r.value.toFixed(1)}°`:r.unit==="m²"?pn(r.value,e):cn(r.value,e)}const Uf="6e400001-b5a3-f393-e0a9-e50e24dcca9e",xA="6e400003-b5a3-f393-e0a9-e50e24dcca9e",Ff="02a6c0d0-0451-4000-b000-fb3210111989",_A="02a6c0d1-0451-4000-b000-fb3210111989",lv=new Uint8Array([192,85,2,1,0,26]);function Ih(){return typeof navigator<"u"&&!!navigator.bluetooth}function yA(r,e){if(r.byteLength<4)return;const t=r.getUint32(0,!0);t>0&&t<1e5&&e(t/1e3)}function SA(r,e){if(r.byteLength<11||r.getUint8(0)!==192||r.getUint8(1)!==85)return;const t=r.getFloat32(7,!0);Number.isFinite(t)&&t>.01&&t<200&&e(t)}async function Lx(r,e){const t=await navigator.bluetooth.requestDevice({filters:[{services:[Uf]},{services:[Ff]},{namePrefix:"Bosch"}],optionalServices:[Uf,Ff]}),i=await t.gatt.connect();let a="diy",o=null;try{o=await i.getPrimaryService(Uf)}catch{o=await i.getPrimaryService(Ff),a="bosch"}const c=await o.getCharacteristic(a==="diy"?xA:_A),d=h=>{const f=h.target.value;f&&(a==="diy"?yA(f,r):SA(f,r))};if(c.addEventListener("characteristicvaluechanged",d),await c.startNotifications(),a==="bosch")try{await c.writeValueWithResponse(lv)}catch{await c.writeValueWithoutResponse(lv)}return t.addEventListener("gattserverdisconnected",()=>e==null?void 0:e()),{device:t,kind:a,disconnect:()=>{try{c.removeEventListener("characteristicvaluechanged",d),t.gatt.disconnect()}catch{}}}}const Uh="workpulse360.aikey.v1";function MA(){return localStorage.getItem(Uh)||""}function cv(r){r?localStorage.setItem(Uh,r.trim()):localStorage.removeItem(Uh)}async function EA(r,e=1024){const t=new Image;t.src=r,await new Promise((a,o)=>{t.onload=a,t.onerror=o});const i=document.createElement("canvas");return i.width=e,i.height=Math.round(e/2),i.getContext("2d").drawImage(t,0,0,i.width,i.height),i.toDataURL("image/jpeg",.7)}const uv='Esta es una foto 360 equirectangular del interior de un espacio. Responde SOLO con JSON válido, sin texto extra, con esta forma: {"nombre":"nombre corto del espacio en español (p.ej. Cocina, Baño, Salón, Dormitorio, Pasillo, Sótano, Balcón)","tipo":"HNF|NNF|VF|FF|BALKON|TERRASSE|GARTEN según SIA 416 (HNF=habitable, NNF=sótano/trastero, VF=circulación, FF=técnica)","observaciones":["hasta 3 observaciones útiles para un aufmaß: estado, daños visibles, particularidades"]}';function dv(r){const e=/\{[\s\S]*\}/.exec(r??"");if(!e)throw new Error("sin JSON");return JSON.parse(e[0])}async function wA(r,e){var o,c,d,h,f;const t=await EA(r);if(e.startsWith("sk-ant-")){const m=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"content-type":"application/json","x-api-key":e,"anthropic-version":"2023-06-01","anthropic-dangerous-direct-browser-access":"true"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:400,messages:[{role:"user",content:[{type:"image",source:{type:"base64",media_type:"image/jpeg",data:t.split(",")[1]}},{type:"text",text:uv}]}]})});if(!m.ok)throw new Error(`API ${m.status}`);const v=await m.json();return dv((c=(o=v.content)==null?void 0:o[0])==null?void 0:c.text)}const i=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"content-type":"application/json",authorization:`Bearer ${e}`},body:JSON.stringify({model:"gpt-4o-mini",max_tokens:400,messages:[{role:"user",content:[{type:"text",text:uv},{type:"image_url",image_url:{url:t}}]}]})});if(!i.ok)throw new Error(`API ${i.status}`);const a=await i.json();return dv((f=(h=(d=a.choices)==null?void 0:d[0])==null?void 0:h.message)==null?void 0:f.content)}const Bo=[{id:"distance",label:"📏 Distancia",hint:"Toca dos puntos del SUELO"},{id:"path",label:"📐 Ruta / Área",hint:"Encadena puntos del suelo; toca el 1º punto o ⬛ para cerrar"},{id:"height",label:"📊 Altura",hint:"Toca el PIE del objeto (en el suelo) y luego su parte ALTA"},{id:"wall",label:"🧱 Pared",hint:"Toca 2 puntos de la BASE de la pared (en el suelo); después mide pares de puntos SOBRE esa pared (ventanas, huecos, diagonales)"},{id:"slope",label:"⛰️ Pendiente",hint:"Ángulo de techo inclinado: PIE y TOPE del punto BAJO, luego PIE y TOPE del punto ALTO"},{id:"note",label:"📝 Nota",hint:"Toca cualquier punto para anclar una nota (defecto, material, recordatorio…)"},{id:"marker",label:"🔌 Elemento",hint:"Instalación eléctrica: elige el tipo y toca el SUELO justo bajo el elemento — aparecerá en el plano con su posición"},{id:"access",label:"♿ SIA 500",hint:"Toca el SUELO para proyectar el círculo de giro de silla de ruedas (Ø 1.50 m) y el área de maniobra 1.40 × 1.70 m — comprueba holguras a ojo contra muebles y paredes"},{id:"calibrate",label:"🎯 Calibrar",hint:"Toca 2 puntos del suelo con distancia CONOCIDA (p. ej. una baldosa o un metro plegable)"},{id:"calibv",label:"🚪 Puerta",hint:"Calibrar con altura conocida: toca el PIE y el TOPE de una puerta (CH ≈ 2.10 m; stock antiguo 2.00) u otra referencia"}],zs=[{id:"enchufe",label:"🔌 Enchufe",sym:"E"},{id:"interruptor",label:"💡 Interruptor",sym:"I"},{id:"luminaria",label:"🔆 Luminaria",sym:"L"},{id:"caja",label:"📦 Caja de derivación",sym:"C"},{id:"red",label:"🌐 Toma de red/TV",sym:"R"},{id:"radiador",label:"🔥 Radiador",sym:"H"},{id:"sanitario",label:"🚰 Sanitario",sym:"S"}];function TA(r){return r==null?"#ffffff":r<4?"#34d399":r<8?"#f59e0b":"#f87171"}function fv(r,e){const t=Math.atan2(e.x,e.z),i=Math.asin(Math.max(-1,Math.min(1,r.y))),a=Math.cos(i);return{x:a*Math.sin(t),y:Math.sin(i),z:a*Math.cos(t)}}const ir=["#34d399","#60a5fa","#f472b6","#f59e0b","#a78bfa","#f87171","#4ade80","#22d3ee"],Us={size:150,margin:12,fov:10};function hv(r,e){const a=document.createElement("canvas"),o=a.getContext("2d");o.font="600 30px system-ui, sans-serif";const c=Math.ceil(o.measureText(r).width)+28,d=30+14*1.4;a.width=c,a.height=d,o.font="600 30px system-ui, sans-serif",o.fillStyle="rgba(10,14,18,0.82)",o.beginPath(),o.roundRect?o.roundRect(1,1,c-2,d-2,12):o.rect(1,1,c-2,d-2),o.fill(),o.strokeStyle=e,o.lineWidth=3,o.stroke(),o.fillStyle="#fff",o.textBaseline="middle",o.fillText(r,14,d/2+1);const h=new tM(a);h.colorSpace=ti;const f=new YS(new ix({map:h,depthTest:!1})),m=3.2;return f.scale.set(c/d*m,m,1),f}function bA(r,e){const t=new $(r.x,-e,r.z).normalize();return{dir:{x:t.x,y:t.y,z:t.z},fp:{...r,y:-e,horizontal:Math.hypot(r.x,r.z),r:Math.hypot(r.x,e,r.z)}}}function AA({imageURL:r,measurements:e=[],onSave:t,onDelete:i,onRename:a,onOpenPlan:o,onClose:c,extraControls:d,initialCamHeight:h=1.6,onCamHeight:f,unitSys:m="m",onUnitSys:v,initialLevel:g={pitch:0,roll:0},onLevel:x,calibrated:S=!1,onAIResult:b,onRememberTripod:M}){const y=ye.useRef(null),N=ye.useRef({}),[P,T]=ye.useState(h),I=ye.useRef(h),[L,O]=ye.useState("distance"),E=ye.useRef("distance"),[R,z]=ye.useState([]),B=ye.useRef([]),[j,G]=ye.useState(Bo[0].hint),[de,W]=ye.useState(!0),[ae,Q]=ye.useState(!0),q=ye.useRef(!0),[ie,ee]=ye.useState(!1),k=ye.useRef({enabled:!1,alpha:0,beta:0,gamma:0,orient:0,seen:!1}),J=ye.useRef(e),Pe=ye.useRef(m),oe=ye.useRef(!1),[ve,K]=ye.useState("enchufe"),xe=ye.useRef("enchufe"),[ge,ce]=ye.useState(g),[be,et]=ye.useState(null),[Mt,Ge]=ye.useState(()=>!S),[we,Le]=ye.useState("ask"),[De,Qe]=ye.useState("1.60"),[je,vt]=ye.useState(!0),[st,_t]=ye.useState(()=>localStorage.getItem("workpulse360.pro.v1")==="1"),Et=["distance","path","height"],[X,Bt]=ye.useState(!1),Dt=ye.useRef([]),F=ye.useRef(0),[w,re]=ye.useState(null),[ue,Me]=ye.useState(null),Oe=ye.useRef({value:null,at:0});ye.useEffect(()=>{B.current=R},[R]),ye.useEffect(()=>{q.current=ae},[ae]),ye.useEffect(()=>{Pe.current=m},[m]),ye.useEffect(()=>{xe.current=ve},[ve]);const ze=ye.useRef({}),U=ye.useRef(!0);ye.useEffect(()=>{if(I.current=P,U.current){U.current=!1;return}f==null||f(P)},[P]),ye.useEffect(()=>{J.current=e},[e]),ye.useEffect(()=>{var se;E.current=L,z([]),L!=="access"&&et(null),G(((se=Bo.find(Re=>Re.id===L))==null?void 0:se.hint)??"")},[L]);function V(se){const Re={distance:"D",path:"A",height:"H",wall:"W",note:"N",slope:"P",marker:"E"}[se]??"M",Be=J.current.filter(it=>{var qe;return(qe=it.label)==null?void 0:qe.startsWith(Re)}).length+1;return`${Re}${Be}`}function le(se,Re){const Be=Fa(se.fp,Re.fp);t==null||t({id:crypto.randomUUID(),mode:"distance",label:V("distance"),value:Be,unit:"m",points:[se.fp,Re.fp],dirs:[se.dir,Re.dir],camHeight:I.current,imgW:F.current}),G(`📏 Guardado: ${cn(Be,Pe.current)}`),z([])}async function Ee(){if(w){w.disconnect(),re(null),Me(null);return}try{const se=await Lx(Re=>{Oe.current={value:Re,at:Date.now()},Me(Re)},()=>{re(null),Me(null)});re(se),G(se.kind==="bosch"?"🔗 Bosch GLM conectado. Dispara una medición en el aparato y su valor se ofrecerá al calibrar.":"🔗 Láser conectado. Su lectura se ofrecerá como valor al calibrar.")}catch{G("⚠️ No se pudo conectar el láser (¿Bluetooth activado? ¿Chrome/Edge?).")}}function Ce(se,Re,Be=""){const it=Oe.current;it.value!=null&&Date.now()-it.at<6e4&&(Be=it.value.toFixed(3),Re+=`
🔗 Lectura del láser: ${it.value.toFixed(3)} m (propuesta como valor)`);const qe=prompt(Re,Be);if(qe===null){z([]);return}const ut=parseFloat(String(qe).replace(",",".")),Ht=dA(I.current,se,ut);if(Ht==null){G("⚠️ Valor no válido. La altura resultante debe estar entre 0.2 y 10 m."),z([]);return}Dt.current.push({h:Ht,w:ut});const wt=Dt.current,Tn=wt.reduce((Ut,Ft)=>Ut+Ft.w,0),an=wt.reduce((Ut,Ft)=>Ut+Ft.h*Ft.w,0)/Tn;if(T(Math.round(an*1e3)/1e3),wt.length===1)G(`🎯 Altura de cámara calibrada: ${an.toFixed(3)} m. Añade otra referencia (en otra dirección) para afinar más.`);else{const Ut=Math.max(...wt.map(Kt=>Math.abs(Kt.h-an)))/an*100,Ft=Ut<1?"excelente":Ut<2.5?"buena":"⚠️ revisa la nivelación";G(`🎯 h = ${an.toFixed(3)} m con ${wt.length} referencias · dispersión ±${Ut.toFixed(1)} % (${Ft})`)}z([])}function Ae(se,Re){const Be=Fa(se.fp,Re.fp);Ce(Be,`Distancia medida ahora: ${Be.toFixed(2)} m con cámara a ${I.current.toFixed(2)} m.
¿Cuál es la distancia REAL entre esos dos puntos, en metros?
Referencias: hoja A4 = 0.297 · baldosa habitual 0.30 / 0.60 · módulo de cocina suizo 0.55`)}function Ke(se,Re){const Be=Bc(se.fp,Re,I.current);if(Be==null||Be<=0){G("⚠️ No se pudo calcular. Toca el tope en la misma vertical del pie."),z([]);return}Ce(Be,`Altura medida ahora: ${Be.toFixed(2)} m.
¿Cuál es la altura REAL del objeto, en metros?
Referencias CH: puerta 2.10 (stock antiguo 2.00) · encimera 0.90 · interruptor ≈ 1.05 · barandilla 0.90–1.00 (SIA 358)`,"2.10")}function nt(se,Re){const Be=Bc(se.fp,Re,I.current);if(Be==null||Be<=0){G("⚠️ No se pudo calcular. Toca el tope en la misma vertical del pie."),z([]);return}t==null||t({id:crypto.randomUUID(),mode:"height",label:V("height"),value:Be,unit:"m",points:[se.fp],dirs:[se.dir,Re],camHeight:I.current,imgW:F.current}),G(`📊 Guardado: altura ${cn(Be,Pe.current)}`),z([])}function ft(se){const Re=B.current,Be=Re.filter(ut=>ut.fp).map(ut=>ut.fp);if(Be.length<2)return;const it=se&&Be.length>=3,qe=it?av(Be):kc(Be);t==null||t({id:crypto.randomUUID(),mode:it?"area":"path",label:V("path"),value:qe,unit:it?"m²":"m",perimeter:it?kc([...Be,Be[0]]):void 0,points:Be,dirs:Re.map(ut=>ut.dir),closed:it,camHeight:I.current,imgW:F.current}),G(it?`📐 Guardado: área ${pn(qe,Pe.current)}`:`📐 Guardado: ruta ${cn(qe,Pe.current)}`),z([])}function Y(){const{renderer:se}=N.current;se==null||se.domElement.toBlob(Re=>{if(!Re)return;const Be=URL.createObjectURL(Re),it=document.createElement("a");it.href=Be,it.download="workpulse360-captura.png",it.click(),URL.revokeObjectURL(Be),G("📸 Captura descargada (vista actual con mediciones)")},"image/png")}function $e(se){var Be;const Re=Yc(se,Pe.current);(Be=navigator.clipboard)==null||Be.writeText(Re).then(()=>G(`📋 Copiado: ${se.label} = ${Re}`)).catch(()=>{})}function Te(se,Re,Be,it){const qe=gA(Be,it);t==null||t({id:crypto.randomUUID(),mode:"wall",label:V("wall"),value:qe,unit:"m",points:[Be,it],base:[se.fp,Re.fp],dirs:[Be,it].map(ut=>{const Ht=Math.hypot(ut.x,ut.y,ut.z)||1;return{x:ut.x/Ht,y:ut.y/Ht,z:ut.z/Ht}}),camHeight:I.current,imgW:F.current}),G(`🧱 Guardado: ${cn(qe,Pe.current)} sobre la pared. Sigue midiendo en la misma pared o cambia de modo.`),oe.current=!0,z(ut=>ut.slice(0,2))}function Ie(se,Re,Be,it){const qe=I.current,ut=Bc(se.fp,Re,qe),Ht=Bc(Be.fp,it,qe),wt=Fa(se.fp,Be.fp);if(ut==null||Ht==null||wt<.05){G("⚠️ No se pudo calcular la pendiente. Los dos pies deben estar separados y en el suelo."),z([]);return}const Tn=Math.abs(Math.atan2(Ht-ut,wt)*180/Math.PI),an=Math.min(ut,Ht),Ut=Math.max(ut,Ht),Ft=an<1.5&&Ut>1.5?` · cruza 1.50 m a ${(wt*(1.5-an)/(Ut-an)).toFixed(2)} m del punto bajo`:"";t==null||t({id:crypto.randomUUID(),mode:"slope",label:V("slope"),value:Tn,unit:"°",text:`${an.toFixed(2)}→${Ut.toFixed(2)} m sobre ${wt.toFixed(2)} m${Ft}`,points:[se.fp,Be.fp],dirs:[se.dir,Re,Be.dir,it],camHeight:qe}),G(`⛰️ Guardado: pendiente ${Tn.toFixed(1)}° (${an.toFixed(2)} m → ${Ut.toFixed(2)} m)${Ft}`),z([])}function Ye(se){const Re=zs.find(Be=>Be.id===xe.current)??zs[0];t==null||t({id:crypto.randomUUID(),mode:"marker",label:V("marker"),value:0,unit:"",text:Re.id,points:[se.fp],dirs:[se.dir],camHeight:I.current,imgW:F.current}),G(`${Re.label} colocado a ${cn(se.fp.horizontal,Pe.current)} de la cámara. Sigue colocando o cambia de modo.`),z([])}function Ne(se){const Re=prompt("Texto de la nota (defecto, material, recordatorio…):");if(!(Re!=null&&Re.trim())){z([]);return}t==null||t({id:crypto.randomUUID(),mode:"note",label:V("note"),value:0,unit:"nota",text:Re.trim(),points:[],dirs:[se],camHeight:I.current,imgW:F.current}),G("📝 Nota anclada"),z([])}const[ct,ot]=ye.useState(!1);async function Jt(){var Re,Be;let se=MA();if(!se){if(se=(Re=prompt(`🤖 Análisis automático con IA (opcional).

Pega tu clave API de OpenAI (sk-…) o de Anthropic (sk-ant-…).
Se guarda solo en este dispositivo. AVISO: al usar esta función, una copia reducida de la foto se envía al proveedor de IA — es lo único de la app que sale de tu dispositivo.`))==null?void 0:Re.trim(),!se)return;cv(se)}ot(!0),G("🤖 Analizando la foto…");try{const it=await wA(r,se);b==null||b(it);const qe=[];it.nombre&&qe.push(`espacio «${it.nombre}»`),it.tipo&&qe.push(`tipo ${it.tipo}`),(Be=it.observaciones)!=null&&Be.length&&qe.push(`${it.observaciones.length} observación(es) anotada(s)`),G(qe.length?`🤖 Aplicado: ${qe.join(" · ")}.`:"🤖 La IA no devolvió datos útiles.")}catch(it){String(it).includes("401")||String(it).includes("403")?(cv(""),G("⚠️ Clave API rechazada — se ha borrado. Vuelve a intentarlo con una clave válida.")):G("⚠️ El análisis con IA falló (¿conexión? ¿saldo de la clave?).")}finally{ot(!1)}}function Xt(se,Re=!1,Be=!1){if(Ge(!1),Re){O("calibv");return}if(se!=null){const it=Math.round(se*1e3)/1e3;it===P?f==null||f(it):T(it),Be&&(M==null||M(it))}O("distance"),setTimeout(()=>G("📏 Listo. Toca DOS puntos del SUELO y tendrás tu primera medida."),50)}function Pn(){if(B.current.length>0)z(se=>se.slice(0,-1)),G("↩️ Punto deshecho");else if(J.current.length>0){const se=J.current[J.current.length-1];i==null||i(se.id),G(`↩️ Medición ${se.label} eliminada`)}}ze.current={saveDistance:le,saveHeight:nt,savePath:ft,calibrateWith:Ae,calibrateVerticalWith:Ke,saveWallDistance:Te,saveNote:Ne,saveSlope:Ie,saveMarker:Ye,undo:Pn},ye.useEffect(()=>()=>{w==null||w.disconnect()},[w]),ye.useEffect(()=>{const{sphere:se,verticalsGroup:Re}=N.current;se&&(se.rotation.set(br.degToRad(ge.pitch),0,br.degToRad(ge.roll)),Re&&(Re.visible=X),x==null||x(ge))},[ge,X,r]),ye.useEffect(()=>{const se=Re=>{(Re.ctrlKey||Re.metaKey)&&Re.key.toLowerCase()==="z"?(Re.preventDefault(),ze.current.undo()):Re.key==="Escape"?z([]):Re.key==="Enter"&&E.current==="path"&&B.current.length>=3&&ze.current.savePath(!0)};return window.addEventListener("keydown",se),()=>window.removeEventListener("keydown",se)},[]);async function oi(){if(!ie&&typeof DeviceOrientationEvent<"u"&&typeof DeviceOrientationEvent.requestPermission=="function")try{if(await DeviceOrientationEvent.requestPermission()!=="granted"){G("⚠️ Permiso de giroscopio denegado.");return}}catch{G("⚠️ No se pudo pedir permiso de giroscopio.");return}ee(se=>(k.current.enabled=!se,!se))}ye.useEffect(()=>{const se=Be=>{const it=k.current;Be.alpha!=null&&(it.alpha=br.degToRad(Be.alpha),it.beta=br.degToRad(Be.beta),it.gamma=br.degToRad(Be.gamma),it.seen=!0)},Re=()=>{var Be;k.current.orient=br.degToRad(((Be=screen.orientation)==null?void 0:Be.angle)??window.orientation??0)};return Re(),window.addEventListener("deviceorientation",se),window.addEventListener("orientationchange",Re),()=>{window.removeEventListener("deviceorientation",se),window.removeEventListener("orientationchange",Re)}},[]),ye.useEffect(()=>{if(!r||!y.current)return;const se=y.current,Re=new ou,Be=new ni(75,se.clientWidth/se.clientHeight,.1,200);Be.position.set(0,0,.01);const it=new ni(Us.fov,1,.1,200),qe=new hu({antialias:!0,preserveDrawingBuffer:!0});qe.setSize(se.clientWidth,se.clientHeight),qe.setPixelRatio(Math.min(window.devicePixelRatio,2)),se.appendChild(qe.domElement);const ut=new Yn(new ms(50,64,48),new ps({side:jn}));Re.add(ut),new vx().load(r,Ze=>{var Rt;Ze.colorSpace=ti,ut.material.map=Ze,ut.material.needsUpdate=!0,F.current=((Rt=Ze.image)==null?void 0:Rt.width)??0});const Ht=new fs,wt=new fs;Re.add(Ht,wt);const Tn=[];for(let Ze=0;Ze<=128;Ze++){const Rt=Ze/128*Math.PI*2;Tn.push(new $(Math.cos(Rt)*49,0,Math.sin(Rt)*49))}const an=new Os(new En().setFromPoints(Tn),new Ar({color:9149095,transparent:!0,opacity:.35}));Re.add(an);const Ut=new fs;for(let Ze=0;Ze<360;Ze+=30){const Rt=[],Je=Ze*Math.PI/180;for(let gn=0;gn<=64;gn++){const yt=-Math.PI/2+gn/64*Math.PI;Rt.push(new $(Math.cos(yt)*Math.sin(Je)*49,Math.sin(yt)*49,Math.cos(yt)*Math.cos(Je)*49))}Ut.add(new Os(new En().setFromPoints(Rt),new Ar({color:3462041,transparent:!0,opacity:.3})))}Ut.visible=!1,Re.add(Ut);const Ft=new pu(Be,qe.domElement);Ft.enableZoom=!1,Ft.enablePan=!1,Ft.rotateSpeed=-.35;const Kt=Ze=>{Be.fov=Math.min(100,Math.max(20,Ze)),Be.updateProjectionMatrix()},mn=Ze=>{Ze.preventDefault(),Kt(Be.fov+Ze.deltaY*.05)};qe.domElement.addEventListener("wheel",mn,{passive:!1});let An=0;const $t=Ze=>{Ze.touches.length===2&&(Ft.enabled=!1,An=Math.hypot(Ze.touches[0].clientX-Ze.touches[1].clientX,Ze.touches[0].clientY-Ze.touches[1].clientY))},Fr=Ze=>{if(Ze.touches.length===2&&An>0){Ze.preventDefault();const Rt=Math.hypot(Ze.touches[0].clientX-Ze.touches[1].clientX,Ze.touches[0].clientY-Ze.touches[1].clientY);Kt(Be.fov*(An/Rt)),An=Rt}},Or=Ze=>{Ze.touches.length<2&&(An=0,Ft.enabled=!k.current.enabled)};qe.domElement.addEventListener("touchstart",$t,{passive:!1}),qe.domElement.addEventListener("touchmove",Fr,{passive:!1}),qe.domElement.addEventListener("touchend",Or);const C=new yx,te={x:0,y:0,active:!1},_e=Ze=>{const Rt=qe.domElement.getBoundingClientRect();return new ke((Ze.clientX-Rt.left)/Rt.width*2-1,-((Ze.clientY-Rt.top)/Rt.height)*2+1)};let he=null;const pe=Ze=>{he=[Ze.clientX,Ze.clientY]},Ve=se.closest(".pano360"),rt=Ze=>{const Rt=qe.domElement.getBoundingClientRect();te.x=(Ze.clientX-Rt.left)/Rt.width*2-1,te.y=-((Ze.clientY-Rt.top)/Rt.height)*2+1,te.active=!0,Ve==null||Ve.classList.add("loupe-on")},We=()=>{te.active=!1,Ve==null||Ve.classList.remove("loupe-on")},dt=Ze=>{if(Ze.pointerType==="touch"&&(te.active=!1,Ve==null||Ve.classList.remove("loupe-on")),!he||Math.hypot(Ze.clientX-he[0],Ze.clientY-he[1])>6)return;C.setFromCamera(_e(Ze),Be);const Rt=C.ray.direction.clone().normalize(),Je=E.current,gn=I.current;let yt=uA(Rt,gn);const St=B.current;let rn={dir:{x:Rt.x,y:Rt.y,z:Rt.z},fp:yt};if(Je==="distance"||Je==="calibrate"){if(!yt){G("⚠️ Ese punto no está en el suelo. Apunta más abajo.");return}St.length===1?Je==="calibrate"?ze.current.calibrateWith(St[0],rn):ze.current.saveDistance(St[0],rn):z([rn])}else if(Je==="path"){if(!yt){G("⚠️ Ese punto no está en el suelo. Apunta más abajo.");return}if(St.length>=3&&St[0].fp){const Tt=Math.max(.15,kc(St.map(Fn=>Fn.fp))*.02);if(Fa(yt,St[0].fp)<Tt){ze.current.savePath(!0);return}}if(q.current&&St.length>=1&&St[St.length-1].fp){const Tt=St.length>=2&&St[0].fp&&St[1].fp?hA(St[0].fp,St[1].fp):0,Fn=fA(St[St.length-1].fp,yt,Tt);Fn!==yt&&(rn=bA(Fn,gn))}z([...St,rn])}else if(Je==="wall")if(St.length<2){if(!yt){G("⚠️ La base de la pared debe estar en el suelo.");return}z([...St,rn])}else{const Tt=pA(St[0].fp,St[1].fp),Fn=Tt&&mA(Rt,Tt);if(!Fn){G("⚠️ Ese rayo no corta el plano de la pared. Apunta hacia la pared definida.");return}const qt={dir:rn.dir,wp:Fn};St.length===3?ze.current.saveWallDistance(St[0],St[1],St[2].wp,Fn):z([...St,qt])}else if(Je==="slope")if(St.length%2===0){if(!yt){G("⚠️ El PIE debe estar en el suelo.");return}z([...St,rn])}else{const Tt=fv(rn.dir,St[St.length-1].dir);St.length===3?ze.current.saveSlope(St[0],St[1].topDir??St[1].dir,St[2],Tt):z([...St,{dir:Tt,topDir:Tt,fp:null}])}else if(Je==="note")ze.current.saveNote(rn.dir);else if(Je==="marker"){if(!yt){G("⚠️ Toca el SUELO justo bajo el elemento (su vertical).");return}ze.current.saveMarker(rn)}else if(Je==="access"){if(!yt){G("⚠️ La plantilla se proyecta sobre el SUELO. Apunta más abajo.");return}et({x:yt.x,z:yt.z}),G("♿ Círculo Ø 1.50 m + maniobra 1.40 × 1.70 m (SIA 500). Si cabe sin tocar muebles ni paredes, la holgura cumple. Toca en otro sitio para moverla.")}else if(St.length===0){if(!yt){G("⚠️ El PIE debe estar en el suelo. Toca la base del objeto.");return}z([rn])}else{const Tt=fv(rn.dir,St[0].dir);Je==="calibv"?ze.current.calibrateVerticalWith(St[0],Tt):ze.current.saveHeight(St[0],Tt)}};qe.domElement.addEventListener("pointerdown",pe),qe.domElement.addEventListener("pointermove",rt),qe.domElement.addEventListener("pointerleave",We),qe.domElement.addEventListener("pointerup",dt),N.current={scene:Re,camera:Be,renderer:qe,savedGroup:Ht,draftGroup:wt,controls:Ft,sphere:ut,verticalsGroup:Ut};const gt=new $(0,0,1),Pt=new Ur,Nt=new cr,pt=new cr(-Math.sqrt(.5),0,0,Math.sqrt(.5));let Gt;const Qt=()=>{Gt=requestAnimationFrame(Qt);const Ze=k.current;if(Ze.enabled&&Ze.seen?(Ft.enabled=!1,Pt.set(Ze.beta,Ze.alpha,-Ze.gamma,"YXZ"),Be.quaternion.setFromEuler(Pt),Be.quaternion.multiply(pt),Be.quaternion.multiply(Nt.setFromAxisAngle(gt,-Ze.orient))):(!Ft.enabled&&An===0&&(Ft.enabled=!0),Ft.update()),qe.setViewport(0,0,se.clientWidth,se.clientHeight),qe.setScissorTest(!1),qe.render(Re,Be),te.active){C.setFromCamera(te,Be),it.position.set(0,0,0),it.lookAt(C.ray.direction);const Rt=64;qe.setViewport(Us.margin,Rt,Us.size,Us.size),qe.setScissor(Us.margin,Rt,Us.size,Us.size),qe.setScissorTest(!0),qe.render(Re,it),qe.setScissorTest(!1)}};Qt();const on=()=>{Be.aspect=se.clientWidth/se.clientHeight,Be.updateProjectionMatrix(),qe.setSize(se.clientWidth,se.clientHeight)};return window.addEventListener("resize",on),()=>{var Ze;cancelAnimationFrame(Gt),window.removeEventListener("resize",on),qe.domElement.removeEventListener("wheel",mn),qe.domElement.removeEventListener("touchstart",$t),qe.domElement.removeEventListener("touchmove",Fr),qe.domElement.removeEventListener("touchend",Or),qe.domElement.removeEventListener("pointerdown",pe),qe.domElement.removeEventListener("pointermove",rt),qe.domElement.removeEventListener("pointerleave",We),qe.domElement.removeEventListener("pointerup",dt),Ft.dispose(),ut.geometry.dispose(),(Ze=ut.material.map)==null||Ze.dispose(),ut.material.dispose(),qe.dispose(),se.removeChild(qe.domElement)}},[r]);const Xi=se=>new $(se.x,se.y,se.z).normalize().multiplyScalar(48),fr=(se,Re,Be,it=16)=>{const qe=[];for(let ut=0;ut<=it;ut++){const Ht=ut/it,wt=se.x+(Re.x-se.x)*Ht,Tn=se.z+(Re.z-se.z)*Ht;qe.push(new $(wt,-Be,Tn).normalize().multiplyScalar(48))}return qe};return ye.useEffect(()=>{const{savedGroup:se}=N.current;se&&(se.clear(),e.forEach((Re,Be)=>{var an,Ut,Ft;const it=ir[Be%ir.length],qe=new Ot(it),ut=(Re.dirs??[]).map(Xi);for(const Kt of ut){const mn=new Yn(new ms(.55,14,10),new ps({color:qe}));mn.position.copy(Kt),se.add(mn)}const Ht=Re.camHeight??I.current;let wt=null;if(Re.mode==="height"&&((an=Re.points)!=null&&an[0])){const Kt=Re.points[0],mn=Re.value-Ht;wt=[];for(let An=0;An<=12;An++){const $t=-Ht+(mn+Ht)*(An/12);wt.push(new $(Kt.x,$t,Kt.z).normalize().multiplyScalar(48))}}else if(Re.mode==="wall"&&(((Ut=Re.points)==null?void 0:Ut.length)??0)>=2){const[Kt,mn]=Re.points;wt=[];for(let An=0;An<=16;An++){const $t=An/16;wt.push(new $(Kt.x+(mn.x-Kt.x)*$t,Kt.y+(mn.y-Kt.y)*$t,Kt.z+(mn.z-Kt.z)*$t).normalize().multiplyScalar(48))}}else if(Re.mode!=="note"&&(((Ft=Re.points)==null?void 0:Ft.length)??0)>=2){const Kt=Re.closed?[...Re.points,Re.points[0]]:Re.points;wt=[];for(let mn=1;mn<Kt.length;mn++)wt.push(...fr(Kt[mn-1],Kt[mn],Ht))}else ut.length>=2&&(wt=Re.closed?[...ut,ut[0]]:ut);wt&&se.add(new Os(new En().setFromPoints(wt),new Ar({color:qe})));const Tn=wt!=null&&wt.length?wt:ut;if(Tn.length>=1){const Kt=Tn[Math.floor(Tn.length/2)].clone(),mn=Re.mode==="marker"?zs.find(Fr=>Fr.id===Re.text)??zs[0]:null,An=Re.mode==="note"?`📝 ${(Re.text??"").slice(0,28)}${(Re.text??"").length>28?"…":""}`:mn?mn.label:`${Re.label} · ${Yc(Re,m)}`,$t=hv(An,it);$t.position.copy(Kt.normalize().multiplyScalar(44)),se.add($t)}}))},[e,r,m]),ye.useEffect(()=>{const{draftGroup:se}=N.current;if(!se)return;se.clear();const Re=R.map(qe=>Xi(qe.dir));if(R.forEach((qe,ut)=>{var wt;const Ht=new Yn(new ms(.65,14,10),new ps({color:new Ot(TA((wt=qe.fp)==null?void 0:wt.horizontal))}));Ht.position.copy(Re[ut]),se.add(Ht)}),Re.length>=2){const qe=I.current,ut=R.every(wt=>wt.fp);let Ht=Re;if(ut){Ht=[];for(let wt=1;wt<R.length;wt++)Ht.push(...fr(R[wt-1].fp,R[wt].fp,qe))}se.add(new Os(new En().setFromPoints(Ht),new Ar({color:16777215})))}if(be){const qe=I.current,ut=(Ut,Ft)=>new $(Ut,-qe,Ft).normalize().multiplyScalar(47.5),Ht=[];for(let Ut=0;Ut<=48;Ut++){const Ft=Ut/48*Math.PI*2;Ht.push(ut(be.x+Math.cos(Ft)*.75,be.z+Math.sin(Ft)*.75))}se.add(new Os(new En().setFromPoints(Ht),new Ar({color:5809906})));const wt=[[-.7,-.85],[.7,-.85],[.7,.85],[-.7,.85],[-.7,-.85]],Tn=[];for(let Ut=1;Ut<wt.length;Ut++)for(let Ft=0;Ft<=8;Ft++){const Kt=Ft/8;Tn.push(ut(be.x+wt[Ut-1][0]+(wt[Ut][0]-wt[Ut-1][0])*Kt,be.z+wt[Ut-1][1]+(wt[Ut][1]-wt[Ut-1][1])*Kt))}se.add(new Os(new En().setFromPoints(Tn),new Ar({color:5809906,transparent:!0,opacity:.6})));const an=hv("♿ Ø 1.50 m · 1.40 × 1.70 m","#58a6f2");an.position.copy(ut(be.x,be.z).normalize().multiplyScalar(44)),se.add(an)}if(R.length===0)return;if(oe.current){oe.current=!1;return}const Be=R.filter(qe=>qe.fp).map(qe=>qe.fp),it=m;if((L==="distance"||L==="calibrate")&&Be.length===1)G(`📍 A ${cn(Be[0].horizontal,it)} de la cámara. Toca el segundo punto.`);else if(L==="path"){const qe=Be.length>=3?` · área si cierras: ${pn(av(Be),it)}`:"";G(`📐 ${Be.length} puntos · recorrido ${cn(kc(Be),it)}${qe}`)}else if((L==="height"||L==="calibv")&&R.length===1){const qe=Be[0].horizontal>8?" ⚠️ punto muy lejano, precisión baja":"";G(`📍 Pie a ${cn(Be[0].horizontal,it)}. Ahora toca la parte ALTA (se ajusta a plomada).${qe}`)}else L==="wall"?R.length===1?G("🧱 Toca el SEGUNDO punto de la base de la pared (en el suelo)."):R.length===2?G(`🧱 Pared definida (base ${cn(Fa(R[0].fp,R[1].fp),it)}). Toca 2 puntos SOBRE la pared para medir.`):R.length===3&&G("🧱 Toca el segundo punto sobre la pared (ancho, alto o diagonal del hueco)."):L==="slope"&&G(["","⛰️ Toca el TOPE sobre ese pie (punto BAJO de la pendiente).","⛰️ Ahora el PIE del punto ALTO de la pendiente.","⛰️ Y el TOPE sobre ese pie."][R.length]??"")},[R,L,m,be]),D.jsxs("div",{className:"pano360",children:[D.jsx("div",{ref:y,className:"pano360-canvas"}),D.jsx("div",{className:"pano360-loupe-frame","aria-hidden":!0}),D.jsxs("div",{className:"pano360-top",children:[D.jsx("div",{className:"tb-row",children:D.jsxs("div",{className:"pano360-modes",children:[(st?Bo:Bo.filter(se=>Et.includes(se.id))).map(se=>D.jsx("button",{className:L===se.id?"active":"",onClick:()=>O(se.id),title:se.hint,children:se.label},se.id)),D.jsx("button",{onClick:()=>{const se=!st;_t(se),localStorage.setItem("workpulse360.pro.v1",se?"1":""),!se&&!Et.includes(L)&&O("distance")},title:st?"Ocultar las herramientas avanzadas":"Mostrar todas las herramientas (pared, pendiente, elementos, SIA 500, calibración…)",children:st?"− Menos":"⋯ Más"})]})}),D.jsxs("div",{className:"tb-row",children:[d,D.jsx("span",{className:"tb-sep","aria-hidden":!0}),D.jsxs("label",{title:"Altura de la cámara sobre el suelo (m). Usa 🎯 Calibrar si no la conoces con exactitud.",children:["📷",D.jsx("input",{type:"number",min:"0.3",max:"5",step:"0.1",value:P,onChange:se=>T(parseFloat(se.target.value)||1.6)})," m"]}),w&&ue!=null&&D.jsxs("button",{onClick:()=>{T(Math.round(ue*1e3)/1e3),G(`📷 Altura de cámara fijada desde el láser: ${ue.toFixed(3)} m. (Apunta el láser del objetivo de la cámara al suelo, en vertical.)`)},title:"Fijar la altura de cámara con el láser: apoya el Bosch junto al objetivo de la cámara, apunta al suelo en vertical y pulsa aquí",children:["⤓ ",ue.toFixed(2)]}),D.jsx("select",{value:m,onChange:se=>v==null?void 0:v(se.target.value),title:"Unidades",children:vA.map(se=>D.jsx("option",{value:se.id,children:se.label},se.id))}),L==="path"&&D.jsx("button",{className:ae?"active":"",onClick:()=>Q(se=>!se),title:"Snapping ortogonal: ajusta los tramos a ángulos de 45°/90°",children:"⟂"}),L==="marker"&&D.jsx("select",{value:ve,onChange:se=>K(se.target.value),title:"Tipo de elemento a colocar",children:zs.map(se=>D.jsx("option",{value:se.id,children:se.label},se.id))}),L==="path"&&R.length>0&&D.jsxs(D.Fragment,{children:[R.length>=3&&D.jsx("button",{onClick:()=>ft(!0),children:"⬛ Área"}),R.length>=2&&D.jsx("button",{onClick:()=>ft(!1),children:"💾 Ruta"})]}),D.jsx("span",{className:"tb-sep","aria-hidden":!0}),D.jsx("button",{onClick:Pn,title:"Deshacer último punto o medición (Ctrl+Z)",children:"↩️"}),D.jsx("button",{onClick:()=>{var se;z([]),G(((se=Bo.find(Re=>Re.id===L))==null?void 0:se.hint)??"")},title:"Cancelar puntos en curso",children:"🗑️"}),D.jsx("span",{className:"tb-sep","aria-hidden":!0}),D.jsx("button",{className:ie?"active":"",onClick:oi,title:"Giroscopio: mirar moviendo el teléfono",children:"🧭"}),D.jsx("button",{className:X?"active":"",onClick:()=>Bt(se=>!se),title:"Nivelación fina: corrige la inclinación de la foto (clave para la precisión)",children:"🎚️"}),D.jsx("button",{onClick:Y,title:"Descargar captura PNG de la vista con las mediciones",children:"📸"}),D.jsx("button",{onClick:Jt,disabled:ct,title:"IA (clave propia OpenAI/Anthropic): nombra la sala, sugiere el tipo SIA y anota observaciones automáticamente",children:ct?"🤖…":"🤖"}),Ih()&&D.jsxs("button",{className:w?"active":"",onClick:Ee,title:"Conectar un láser Bluetooth (Bosch GLM o Workpulse DIY). Su lectura se usa al calibrar.",children:["🔗",ue!=null?` ${ue.toFixed(2)} m`:""]}),D.jsx("span",{className:"tb-sep","aria-hidden":!0}),D.jsx("button",{onClick:()=>W(se=>!se),title:"Mostrar u ocultar la lista de mediciones",children:"📋"}),D.jsx("button",{onClick:c,title:"Volver al inicio",children:"✕"})]})]}),de&&D.jsxs("div",{className:"pano360-panel",children:[D.jsxs("b",{children:["Mediciones (",e.length,")"]}),D.jsxs("ul",{children:[e.map((se,Re)=>{var Be;return D.jsxs("li",{children:[D.jsx("span",{className:"dot",style:{background:ir[Re%ir.length]}}),D.jsx("span",{className:"lbl",style:{cursor:"pointer"},title:"Clic para renombrar",onClick:()=>a==null?void 0:a(se.id),children:se.label}),D.jsxs("span",{className:"val",style:{cursor:"copy"},title:(()=>{const it=Px(se);return it!=null?`Incertidumbre estimada: ±${se.unit==="m²"?pn(it,m):cn(it,m)} · clic para copiar`:"Clic para copiar el valor"})(),onClick:()=>$e(se),children:[se.mode==="note"?`📝 ${(se.text??"").slice(0,22)}`:se.mode==="marker"?((Be=zs.find(it=>it.id===se.text))==null?void 0:Be.label)??se.text:Yc(se,m),se.mode==="area"&&se.perimeter?` · per. ${cn(se.perimeter,m,1)}`:""]}),D.jsx("button",{className:"del",onClick:()=>i==null?void 0:i(se.id),children:"✕"})]},se.id)}),e.length===0&&D.jsx("li",{className:"empty",children:"Aún no hay mediciones."})]}),o&&D.jsx("button",{disabled:!e.some(se=>{var Re;return((Re=se.points)==null?void 0:Re.length)>=2}),onClick:o,children:"🗺️ Plano de planta"})]}),X&&D.jsxs("div",{className:"pano360-level",children:[D.jsx("b",{children:"🎚️ Nivelación fina"}),D.jsx("span",{className:"hint",children:"Alinea las aristas verticales (puertas, esquinas) con las guías verdes y el horizonte con la línea gris."}),["pitch","roll"].map(se=>D.jsxs("label",{children:[se==="pitch"?"Cabeceo":"Alabeo",D.jsx("input",{type:"range",min:"-5",max:"5",step:"0.05",value:ge[se],onChange:Re=>ce(Be=>({...Be,[se]:parseFloat(Re.target.value)}))}),D.jsxs("span",{className:"val",children:[ge[se].toFixed(2),"°"]})]},se)),D.jsx("button",{onClick:()=>ce({pitch:0,roll:0}),children:"Reiniciar"})]}),Mt&&D.jsxs("div",{className:"coach",children:[we==="ask"&&D.jsxs(D.Fragment,{children:[D.jsx("b",{children:"¿A qué altura estaba la cámara?"}),D.jsx("span",{className:"hint",children:"Es lo único que la app necesita para convertir la foto en medidas reales (la distancia del objetivo al suelo)."}),D.jsx("button",{className:"active",onClick:()=>Le("manual"),children:"📏 La sé — escribirla"}),Ih()&&D.jsx("button",{onClick:async()=>{Le("laser"),w||await Ee()},children:"🔗 Medirla con el láser Bluetooth"}),D.jsx("button",{onClick:()=>Xt(null,!0),children:"🚪 No la sé — calibrar con una puerta"}),D.jsx("button",{onClick:()=>Xt(1.6),children:"Saltar (usar 1.60 m aproximado)"})]}),we==="manual"&&D.jsxs(D.Fragment,{children:[D.jsx("b",{children:"Altura de la cámara"}),D.jsx("span",{className:"hint",children:"Mide del suelo al centro del objetivo (cinta o láser) y escríbela."}),D.jsxs("label",{className:"row",children:[D.jsx("input",{type:"number",min:"0.3",max:"5",step:"0.01",value:De,onChange:se=>Qe(se.target.value),style:{flex:1},autoFocus:!0})," m"]}),M&&D.jsxs("label",{className:"row wizard-remember",children:[D.jsx("input",{type:"checkbox",checked:je,onChange:se=>vt(se.target.checked)}),"Es mi trípode de siempre — calibrar solas las próximas fotos"]}),D.jsx("button",{className:"active",onClick:()=>Xt(parseFloat(String(De).replace(",","."))||1.6,!1,je),children:"✓ Fijar y empezar a medir"}),D.jsx("button",{onClick:()=>Le("ask"),children:"← Volver"})]}),we==="laser"&&D.jsxs(D.Fragment,{children:[D.jsx("b",{children:"Altura con el láser"}),D.jsx("span",{className:"hint",children:"Apoya el láser junto al objetivo de la cámara, apunta al suelo en vertical y dispara. La lectura aparece aquí."}),D.jsx("div",{className:"wizard-reading",children:ue!=null?`${ue.toFixed(3)} m`:w?"esperando disparo…":"conectando…"}),M&&D.jsxs("label",{className:"row wizard-remember",children:[D.jsx("input",{type:"checkbox",checked:je,onChange:se=>vt(se.target.checked)}),"Es mi trípode de siempre — calibrar solas las próximas fotos"]}),D.jsx("button",{className:"active",disabled:ue==null,onClick:()=>Xt(ue,!1,je),children:"⤓ Fijar y empezar a medir"}),D.jsx("button",{onClick:()=>Le("ask"),children:"← Volver"})]})]}),D.jsx("div",{className:"pano360-msg",children:j}),D.jsx("div",{className:"pano360-hint",children:"Suelo plano + altura de cámara calibrada = medidas fiables · arrastra para mirar · rueda o pellizco para zoom"})]})}function Nx(r,e=640,t=480,i=40){const a=[{x:0,z:0}];for(const S of r)for(const b of S.points??[])a.push(b);const o=a.map(S=>S.x),c=a.map(S=>S.z),d=Math.min(...o)-1,h=Math.max(...o)+1,f=Math.min(...c)-1,m=Math.max(...c)+1,v=Math.min((e-i*2)/(h-d),(t-i*2)/(m-f));return{W:e,H:t,minX:d,maxX:h,minZ:f,maxZ:m,scale:v,sx:S=>i+(S-d)*v,sy:S=>t-i-(S-f)*v}}function Fh(r,e={}){const{title:t="",dark:i=!0,unitSys:a="m"}=e,o=Nx(r),c=o.scale>60?1:o.scale>25?2:5,d=i?"#0f1418":"#ffffff",h=i?"#2a3742":"#dde3e8",f=i?"#e6edf3":"#1c2733",m=i?"#8b9aa7":"#5c6b78",v=[];v.push(`<svg viewBox="0 0 ${o.W} ${o.H}" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">`,`<rect x="0" y="0" width="${o.W}" height="${o.H}" fill="${d}"/>`);for(let g=Math.ceil(o.minX/c)*c;g<=o.maxX;g+=c)v.push(`<line x1="${o.sx(g).toFixed(1)}" y1="${o.sy(o.minZ).toFixed(1)}" x2="${o.sx(g).toFixed(1)}" y2="${o.sy(o.maxZ).toFixed(1)}" stroke="${h}" stroke-width="0.5"/>`);for(let g=Math.ceil(o.minZ/c)*c;g<=o.maxZ;g+=c)v.push(`<line x1="${o.sx(o.minX).toFixed(1)}" y1="${o.sy(g).toFixed(1)}" x2="${o.sx(o.maxX).toFixed(1)}" y2="${o.sy(g).toFixed(1)}" stroke="${h}" stroke-width="0.5"/>`);v.push(`<text x="${o.W-12}" y="${o.H-10}" text-anchor="end" font-size="11" fill="${m}">cuadrícula ${c} m</text>`),t&&v.push(`<text x="12" y="20" font-size="13" fill="${f}" font-weight="bold">${Ho(t)}</text>`),r.forEach((g,x)=>{const S=ir[x%ir.length],b=g.points??[];if(g.mode==="marker"){const T=b[0];if(!T)return;const I=zs.find(E=>E.id===g.text)??{sym:"?",label:g.text},L=o.sx(T.x),O=o.sy(T.z);v.push(`<circle cx="${L.toFixed(1)}" cy="${O.toFixed(1)}" r="7" fill="${d}" stroke="#2a7de1" stroke-width="1.6"/>`,`<text x="${L.toFixed(1)}" y="${(O+3.4).toFixed(1)}" text-anchor="middle" font-size="9" font-weight="700" fill="#2a7de1">${Ho(I.sym)}</text>`,`<text x="${(L+10).toFixed(1)}" y="${(O-6).toFixed(1)}" font-size="9" fill="${m}">${Ho(g.label)}</text>`);return}if(g.mode==="height"){const T=b[0];if(!T)return;v.push(`<circle cx="${o.sx(T.x).toFixed(1)}" cy="${o.sy(T.z).toFixed(1)}" r="4" fill="${S}"/>`,`<text x="${(o.sx(T.x)+7).toFixed(1)}" y="${(o.sy(T.z)-6).toFixed(1)}" font-size="12" fill="${S}">${Ho(g.label)}: ${g.value.toFixed(2)} m ↑</text>`);return}if(b.length<2)return;const M=b.map((T,I)=>`${I===0?"M":"L"}${o.sx(T.x).toFixed(1)},${o.sy(T.z).toFixed(1)}`).join(" "),y=b.reduce((T,I)=>T+o.sx(I.x),0)/b.length,N=b.reduce((T,I)=>T+o.sy(I.z),0)/b.length;v.push(g.closed?`<path d="${M} Z" fill="${S}" fill-opacity="0.12" stroke="${S}" stroke-width="2"/>`:`<path d="${M}" fill="none" stroke="${S}" stroke-width="2"/>`);for(const T of b)v.push(`<circle cx="${o.sx(T.x).toFixed(1)}" cy="${o.sy(T.z).toFixed(1)}" r="3" fill="${S}"/>`);if(b.length>=3){const T=g.closed?b.length:b.length-1;for(let I=0;I<T;I++){const L=b[I],O=b[(I+1)%b.length],E=Math.hypot(O.x-L.x,O.z-L.z);if(E<.05)continue;const R=(o.sx(L.x)+o.sx(O.x))/2,z=(o.sy(L.z)+o.sy(O.z))/2,B=o.sx(O.x)-o.sx(L.x),j=o.sy(O.z)-o.sy(L.z),G=Math.hypot(B,j)||1;let de=-j/G*10,W=B/G*10;(R-y)*de+(z-N)*W<0&&(de=-de,W=-W),v.push(`<text x="${(R+de).toFixed(1)}" y="${(z+W+3).toFixed(1)}" text-anchor="middle" font-size="9.5" fill="${m}">${cn(E,a)}</text>`)}}if(g.closed&&b.length>=3)for(let T=0;T<b.length;T++){const I=b[T],L=b[(T-1+b.length)%b.length],O=b[(T+1)%b.length],E={x:L.x-I.x,z:L.z-I.z},R={x:O.x-I.x,z:O.z-I.z},z=Math.hypot(E.x,E.z),B=Math.hypot(R.x,R.z);if(z<.1||B<.1)continue;const j=(E.x*R.x+E.z*R.z)/(z*B),G=Math.acos(Math.max(-1,Math.min(1,j)))*180/Math.PI,de=Math.abs(G-90)>3&&Math.abs(G-180)>3,W=E.x/z+R.x/B,ae=E.z/z+R.z/B,Q=Math.hypot(W,ae)||1,q=o.sx(I.x)+W/Q*16,ie=o.sy(I.z)-ae/Q*16;v.push(`<text x="${q.toFixed(1)}" y="${ie.toFixed(1)}" text-anchor="middle" font-size="8.5" fill="${de?"#d33":m}"${de?' font-weight="700"':""}>${G.toFixed(0)}°</text>`)}const P=g.unit==="°"?`${g.value.toFixed(1)}°`:g.unit==="m²"?pn(g.value,a):cn(g.value,a);v.push(`<text x="${y.toFixed(1)}" y="${N.toFixed(1)}" text-anchor="middle" font-size="12" font-weight="600" fill="${S}">${Ho(g.label)}: ${P}</text>`),g.closed&&g.perimeter&&v.push(`<text x="${y.toFixed(1)}" y="${(N+13).toFixed(1)}" text-anchor="middle" font-size="10" fill="${m}">U = ${cn(g.perimeter,a)}</text>`)});{const g=c,x=14,S=o.H-14,b=g*o.scale;v.push(`<line x1="${x}" y1="${S}" x2="${(x+b).toFixed(1)}" y2="${S}" stroke="${f}" stroke-width="2"/>`,`<line x1="${x}" y1="${S-4}" x2="${x}" y2="${S+4}" stroke="${f}" stroke-width="2"/>`,`<line x1="${(x+b).toFixed(1)}" y1="${S-4}" x2="${(x+b).toFixed(1)}" y2="${S+4}" stroke="${f}" stroke-width="2"/>`,`<text x="${(x+b/2).toFixed(1)}" y="${S-7}" text-anchor="middle" font-size="10" fill="${m}">${cn(g,a,0)}</text>`)}return v.push(`<circle cx="${o.sx(0).toFixed(1)}" cy="${o.sy(0).toFixed(1)}" r="6" fill="${f}"/>`,`<circle cx="${o.sx(0).toFixed(1)}" cy="${o.sy(0).toFixed(1)}" r="10" fill="none" stroke="${f}" stroke-dasharray="2 2"/>`,`<text x="${(o.sx(0)+12).toFixed(1)}" y="${(o.sy(0)+4).toFixed(1)}" font-size="11" fill="${m}">cámara</text>`,"</svg>"),v.join(`
`)}function Ho(r){return String(r??"").replace(/[<>&"]/g,e=>({"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;"})[e])}const Pr=r=>(Math.round(r*1e3)/1e3).toString();function Ia(r,e,t,i,a){return["0","LINE","8",a,"10",Pr(r),"20",Pr(e),"11",Pr(t),"21",Pr(i)]}function Vo(r,e,t,i,a){return["0","TEXT","8",a,"10",Pr(r),"20",Pr(e),"40",Pr(t),"1",i]}function CA(r,e="HABITACION"){const t=e.toUpperCase().replace(/[^A-Z0-9]/g,"_").slice(0,30)||"PLANO",i=["0","SECTION","2","ENTITIES"];i.push(...Ia(-.15,0,.15,0,"CAMARA")),i.push(...Ia(0,-.15,0,.15,"CAMARA")),i.push(...Vo(.2,.2,.15,"CAMARA","CAMARA"));for(const a of r){const o=(a.points??[]).map(f=>({x:f.x,y:-f.z}));if(a.mode==="marker"){const f=o[0];if(!f)continue;i.push("0","CIRCLE","8","ELEMENTOS","10",Pr(f.x),"20",Pr(f.y),"40","0.08"),i.push(...Vo(f.x+.12,f.y,.12,`${a.label} ${a.text??""}`,"ELEMENTOS"));continue}if(a.mode==="height"){const f=o[0];if(!f)continue;i.push(...Ia(f.x-.1,f.y-.1,f.x+.1,f.y+.1,t)),i.push(...Ia(f.x-.1,f.y+.1,f.x+.1,f.y-.1,t)),i.push(...Vo(f.x+.15,f.y,.15,`${a.label} h=${a.value.toFixed(2)}m`,t));continue}if(o.length<2)continue;for(let f=1;f<o.length;f++)i.push(...Ia(o[f-1].x,o[f-1].y,o[f].x,o[f].y,t));if(a.closed&&i.push(...Ia(o[o.length-1].x,o[o.length-1].y,o[0].x,o[0].y,t)),o.length>=3){const f=a.closed?o.length:o.length-1;for(let m=0;m<f;m++){const v=o[m],g=o[(m+1)%o.length],x=Math.hypot(g.x-v.x,g.y-v.y);x<.05||i.push(...Vo((v.x+g.x)/2,(v.y+g.y)/2,.12,`${x.toFixed(2)}m`,"COTAS"))}}const c=o.reduce((f,m)=>f+m.x,0)/o.length,d=o.reduce((f,m)=>f+m.y,0)/o.length,h={"m²":"m2","°":"deg"}[a.unit]??a.unit;i.push(...Vo(c,d,.18,`${a.label} ${a.value.toFixed(2)}${h}`,t))}return i.push("0","ENDSEC","0","EOF"),i.join(`\r
`)+`\r
`}function RA(r,e){const t=CA(r,e),i=new Blob([t],{type:"application/dxf"}),a=URL.createObjectURL(i),o=document.createElement("a");o.href=a,o.download=`${(e||"plano").replace(/\.[^.]+$/,"")}.dxf`,o.click(),URL.revokeObjectURL(a)}function PA({measurements:r,photoName:e,roomName:t,unitSys:i="m",onClose:a}){const o=ye.useMemo(()=>Fh(r,{title:t||e,unitSys:i,dark:!1}),[r,t,e,i]),c=(t||e||"plano").replace(/\.[^.]+$/,"");function d(){const v=new Blob([`<?xml version="1.0" encoding="UTF-8"?>
`+o],{type:"image/svg+xml"});f(v,`${c}-plano.svg`)}function h(){const v=new Image,g=URL.createObjectURL(new Blob([o],{type:"image/svg+xml"}));v.onload=()=>{const x=document.createElement("canvas");x.width=1280,x.height=960,x.getContext("2d").drawImage(v,0,0,1280,960),URL.revokeObjectURL(g),x.toBlob(b=>b&&f(b,`${c}-plano.png`),"image/png")},v.src=g}function f(v,g){const x=URL.createObjectURL(v),S=document.createElement("a");S.href=x,S.download=g,S.click(),URL.revokeObjectURL(x)}function m(v){const g=Nx(r),x=g.W/g.scale*1e3/v,S=g.H/g.scale*1e3/v,b=Fh(r,{title:t||e,dark:!1,unitSys:i}),M=window.open("","_blank");M&&(M.document.write(`<!doctype html>
<html lang="es"><head><meta charset="utf-8"><title>Plano 1:${v} — ${c}</title>
<style>
  body { margin: 10mm; font-family: system-ui, sans-serif; }
  h1 { font-size: 14px; margin: 0 0 2mm; }
  .meta { font-size: 11px; color: #555; margin-bottom: 4mm; }
  svg { width: ${x.toFixed(1)}mm; height: ${S.toFixed(1)}mm; border: 0.3mm solid #999; }
  @media print { @page { size: ${x>180||S>267?"A3":"A4"} ${x>S?"landscape":"portrait"}; } }
</style></head><body>
<h1>${c} — Escala 1:${v}</h1>
<div class="meta">Workpulse 360 · imprimir al 100% (sin "ajustar a página") para conservar la escala</div>
${b}
<script>window.onload = () => setTimeout(() => window.print(), 300)<\/script>
</body></html>`),M.document.close())}return D.jsx("div",{className:"floorplan",children:D.jsxs("div",{className:"floorplan-card",children:[D.jsxs("div",{className:"floorplan-head",children:[D.jsxs("b",{children:["🗺️ ",t||e]}),D.jsxs("span",{children:[D.jsx("button",{onClick:d,children:"SVG"})," ",D.jsx("button",{onClick:h,children:"PNG"})," ",D.jsx("button",{onClick:()=>RA(r,c),title:"Formato CAD: AutoCAD, LibreCAD, QCAD…",children:"📐 DXF (CAD)"})," ",D.jsx("button",{onClick:()=>m(50),title:"Imprimir a escala real de arquitecto",children:"🖨️ 1:50"})," ",D.jsx("button",{onClick:()=>m(100),title:"Imprimir a escala real de arquitecto",children:"🖨️ 1:100"})," ",D.jsx("button",{onClick:a,children:"✕"})]})]}),D.jsx("div",{className:"floorplan-svgwrap",dangerouslySetInnerHTML:{__html:o}}),D.jsx("p",{className:"hint",children:"Vista cenital a escala real. El DXF abre en cualquier CAD (unidades en metros, cámara en el origen) — lo que otras apps cobran aparte, aquí gratis."})]})})}const pv="workpulse360.assembly.v1";function LA(r){return r.filter(e=>{var t;return e.mode==="area"&&(((t=e.points)==null?void 0:t.length)??0)>=3})}function mv(r){const e=r.length||1;return{x:r.reduce((t,i)=>t+i.x,0)/e,z:r.reduce((t,i)=>t+i.z,0)/e}}function Ua(r,e,t){const i=Math.cos(t.rot),a=Math.sin(t.rot),o=r.x-e.x,c=r.z-e.z;return{x:e.x+o*i-c*a+t.tx,z:e.z+o*a+c*i+t.tz}}function gv(r){return r.map((e,t)=>[e,r[(t+1)%r.length]])}function vv(r,e,t=.6,i=8){let a=null;for(const[o,c]of gv(r)){const d=c.x-o.x,h=c.z-o.z,f=Math.hypot(d,h);if(f<.3)continue;const m={x:d/f,z:h/f},v={x:-m.z,z:m.x},g=Math.atan2(h,d);for(const[x,S]of gv(e)){const b=Math.hypot(S.x-x.x,S.z-x.z);if(b<.3)continue;let y=(Math.atan2(S.z-x.z,S.x-x.x)-g)%Math.PI;if(y>Math.PI/2&&(y-=Math.PI),y<-Math.PI/2&&(y+=Math.PI),Math.abs(y)>i*Math.PI/180)continue;const N=(x.x-o.x)*m.x+(x.z-o.z)*m.z,P=(S.x-o.x)*m.x+(S.z-o.z)*m.z;if(Math.min(f,Math.max(N,P))-Math.max(0,Math.min(N,P))<.3)continue;const I=Math.abs((x.x-o.x)*v.x+(x.z-o.z)*v.z),L=Math.abs((S.x-o.x)*v.x+(S.z-o.z)*v.z),O=(I+L)/2;if(!(O>t)&&(!a||O<a.gap)){const E=Math.max(0,Math.min(N,P)),R=Math.min(f,Math.max(N,P)),z=(E+R)/2;a={angleDiff:y,gap:O,lenA:f,lenB:b,mid:{x:o.x+m.x*z+v.x*((x.x-o.x)*v.x+(x.z-o.z)*v.z>0?O/2:-O/2),z:o.z+m.z*z+v.z*((x.x-o.x)*v.x+(x.z-o.z)*v.z>0?O/2:-O/2)}}}}}return a}function NA({store:r,roomNames:e,roomTypes:t,unitSys:i="m",onClose:a}){const[o,c]=ye.useState(()=>{try{return JSON.parse(localStorage.getItem(pv))??{}}catch{return{}}}),[d,h]=ye.useState(null),[f,m]=ye.useState(!1),[v,g]=ye.useState([]),x=ye.useRef(null),S=ye.useRef(null);ye.useEffect(()=>{localStorage.setItem(pv,JSON.stringify(o))},[o]);const b=ye.useMemo(()=>{const oe=[];let ve=0;for(const[K,xe]of Object.entries(r)){const ge=LA(xe);if(!ge.length)continue;const ce=ge.flatMap(Ge=>Ge.points),be=mv(ce),et=o[K]??{tx:ve-be.x,tz:-be.z,rot:0},Mt=Math.max(...ce.map(Ge=>Ge.x))-Math.min(...ce.map(Ge=>Ge.x));ve+=Mt+1.5,oe.push({photo:K,outlines:ge,centroid:be,t:et})}return oe},[r,o]),[M,y]=ye.useState(0),N=ye.useMemo(()=>{const oe=b.flatMap(ve=>ve.outlines.flatMap(K=>K.points.map(xe=>Ua(xe,ve.centroid,ve.t))));return oe.length?{minX:Math.min(...oe.map(ve=>ve.x))-1.5,maxX:Math.max(...oe.map(ve=>ve.x))+1.5,minZ:Math.min(...oe.map(ve=>ve.z))-1.5,maxZ:Math.max(...oe.map(ve=>ve.z))+1.5}:{minX:-5,maxX:5,minZ:-5,maxZ:5}},[b.length,M]),P=820,T=560,I=Math.min(P/(N.maxX-N.minX),T/(N.maxZ-N.minZ)),L=oe=>(oe-N.minX)*I,O=oe=>T-(oe-N.minZ)*I,E=b.reduce((oe,ve)=>oe+ve.outlines.reduce((K,xe)=>K+xe.value,0),0);function R(oe){const ve=x.current.getBoundingClientRect(),K=(oe.clientX-ve.left)/ve.width*P,xe=(oe.clientY-ve.top)/ve.height*T;return{x:N.minX+K/I,z:N.minZ+(T-xe)/I}}function z(oe,ve){var ge,ce,be;if(oe.preventDefault(),f){g(et=>[...et,R(oe)]);return}h(ve);const K=R(oe),xe=((ge=b.find(et=>et.photo===ve))==null?void 0:ge.t)??{tx:0,tz:0,rot:0};S.current={photo:ve,start:K,t0:{...xe}},(be=(ce=oe.target).setPointerCapture)==null||be.call(ce,oe.pointerId)}function B(oe){const ve=S.current;if(!ve)return;const K=R(oe);c(xe=>({...xe,[ve.photo]:{...ve.t0,tx:ve.t0.tx+(K.x-ve.start.x),tz:ve.t0.tz+(K.z-ve.start.z)}}))}function j(){const oe=S.current;if(S.current=null,!oe)return;const ve=b.find(xe=>xe.photo===oe.photo);if(!ve)return;const K=ve.outlines[0].points.map(xe=>Ua(xe,ve.centroid,ve.t));for(const xe of b){if(xe.photo===oe.photo)continue;const ge=xe.outlines[0].points.map(be=>Ua(be,xe.centroid,xe.t)),ce=vv(ge,K);if(ce&&Math.abs(ce.angleDiff)>.002){c(be=>({...be,[oe.photo]:{...ve.t,rot:ve.t.rot-ce.angleDiff}}));break}}}function G(oe){f&&oe.target===x.current&&g(ve=>[...ve,R(oe)])}const de=v.reduce((oe,ve,K)=>K?oe+Math.hypot(ve.x-v[K-1].x,ve.z-v[K-1].z):0,0);function W(oe){if(!d)return;const ve=b.find(K=>K.photo===d);ve&&c(K=>({...K,[d]:{...ve.t,rot:ve.t.rot+oe*Math.PI/180}}))}function ae(){return x.current?new XMLSerializer().serializeToString(x.current):""}function Q(){const oe=new Blob([`<?xml version="1.0" encoding="UTF-8"?>
`+ae()],{type:"image/svg+xml"});ie(oe,"plano-general.svg")}function q(){const oe=new Image,ve=URL.createObjectURL(new Blob([ae()],{type:"image/svg+xml"}));oe.onload=()=>{const K=document.createElement("canvas");K.width=P*2,K.height=T*2;const xe=K.getContext("2d");xe.fillStyle="#ffffff",xe.fillRect(0,0,K.width,K.height),xe.drawImage(oe,0,0,K.width,K.height),URL.revokeObjectURL(ve),K.toBlob(ge=>ge&&ie(ge,"plano-general.png"),"image/png")},oe.src=ve}function ie(oe,ve){const K=URL.createObjectURL(oe),xe=document.createElement("a");xe.href=K,xe.download=ve,xe.click(),URL.revokeObjectURL(K)}const ee=ye.useMemo(()=>{const oe=[];for(let ve=0;ve<b.length;ve++)for(let K=ve+1;K<b.length;K++){const xe=b[ve].outlines[0].points.map(be=>Ua(be,b[ve].centroid,b[ve].t)),ge=b[K].outlines[0].points.map(be=>Ua(be,b[K].centroid,b[K].t)),ce=vv(xe,ge);if(ce&&ce.gap>=.02){const be=Math.abs(ce.lenA-ce.lenB),et=be/Math.max(ce.lenA,ce.lenB)*100;oe.push({mid:ce.mid,gap:ce.gap,delta:be,deltaPct:et})}}return oe},[b]),k=ee.length?Math.max(...ee.map(oe=>oe.deltaPct)):null,J=I>60?1:I>25?2:5,Pe=[];for(let oe=Math.ceil(N.minX/J)*J;oe<=N.maxX;oe+=J)Pe.push(D.jsx("line",{x1:L(oe),y1:0,x2:L(oe),y2:T,stroke:"#e2e8ee",strokeWidth:"0.6"},`x${oe}`));for(let oe=Math.ceil(N.minZ/J)*J;oe<=N.maxZ;oe+=J)Pe.push(D.jsx("line",{x1:0,y1:O(oe),x2:P,y2:O(oe),stroke:"#e2e8ee",strokeWidth:"0.6"},`z${oe}`));return D.jsx("div",{className:"floorplan",children:D.jsxs("div",{className:"floorplan-card",style:{maxWidth:920},children:[D.jsxs("div",{className:"floorplan-head",children:[D.jsxs("b",{children:["🧩 Plano general — ",pn(E,i)," en ",b.length," espacio(s)",k!=null&&D.jsxs("span",{style:{marginLeft:8,fontSize:12,color:k<2?"var(--ok)":"var(--warn)"},title:"Coherencia: el mismo muro medido desde las dos habitaciones adyacentes; un Δ alto indica error de medición o calibración en alguna de las dos",children:["· coherencia entre salas: Δ máx ",k.toFixed(1)," %"]})]}),D.jsxs("span",{children:[D.jsx("button",{onClick:()=>W(-15),disabled:!d,title:"Rotar la habitación seleccionada",children:"⟲ 15°"})," ",D.jsx("button",{onClick:()=>W(15),disabled:!d,title:"Rotar la habitación seleccionada",children:"⟳ 15°"})," ",D.jsx("button",{onClick:()=>y(oe=>oe+1),title:"Reencuadrar la vista",children:"🔍 Ajustar"})," ",D.jsx("button",{className:f?"active":"",onClick:()=>m(oe=>!oe),title:"Ruta de evacuación: traza el recorrido real hasta la salida; la norma suiza VKF admite máx. 35 m",children:"🚪 Ruta"})," ",v.length>0&&D.jsx("button",{onClick:()=>g([]),title:"Borrar la ruta trazada",children:"✗ Ruta"})," ",D.jsx("button",{onClick:Q,children:"SVG"})," ",D.jsx("button",{onClick:q,children:"PNG"})," ",D.jsx("button",{onClick:a,children:"✕"})]})]}),D.jsxs("svg",{ref:x,viewBox:`0 0 ${P} ${T}`,xmlns:"http://www.w3.org/2000/svg",style:{width:"100%",height:"auto",background:"#ffffff",borderRadius:8,touchAction:"none",cursor:"grab"},fontFamily:"system-ui, sans-serif",onPointerDown:G,onPointerMove:B,onPointerUp:j,onPointerLeave:j,children:[D.jsx("rect",{x:"0",y:"0",width:P,height:T,fill:"#ffffff"}),Pe,D.jsxs("text",{x:P-10,y:T-8,textAnchor:"end",fontSize:"11",fill:"#8a97a3",children:["cuadrícula ",J," m"]}),v.length>0&&D.jsxs("g",{pointerEvents:"none",children:[D.jsx("polyline",{points:v.map(oe=>`${L(oe.x).toFixed(1)},${O(oe.z).toFixed(1)}`).join(" "),fill:"none",stroke:de>35?"#c3372c":"#e05a10",strokeWidth:"2.5",strokeDasharray:"7 5"}),v.map((oe,ve)=>D.jsx("circle",{cx:L(oe.x),cy:O(oe.z),r:"4",fill:ve===0?"#14805f":"#e05a10"},ve)),v.length>=2&&D.jsxs("text",{x:L(v[v.length-1].x)+8,y:O(v[v.length-1].z)-8,fontSize:"12",fontWeight:"700",fill:de>35?"#c3372c":"#1c2a31",children:["🚪 ",cn(de,i)," ",de>35?"✗ >35 m (VKF)":"✓ ≤35 m"]})]}),ee.map((oe,ve)=>D.jsxs("g",{children:[D.jsx("circle",{cx:L(oe.mid.x),cy:O(oe.mid.z),r:"3",fill:"#b3261e"}),D.jsxs("text",{x:L(oe.mid.x)+6,y:O(oe.mid.z)-5,fontSize:"10",fill:"#b3261e",fontWeight:"600",children:["muro ",(oe.gap*100).toFixed(0)," cm"]}),oe.delta>.03&&D.jsxs("text",{x:L(oe.mid.x)+6,y:O(oe.mid.z)+7,fontSize:"9",fill:oe.deltaPct<2?"#5f6d7a":"#b3261e",children:["Δ ",(oe.delta*100).toFixed(0)," cm (",oe.deltaPct.toFixed(1)," %)"]})]},`wall${ve}`)),b.map((oe,ve)=>{var et;const K=ir[ve%ir.length],xe=e[oe.photo]||oe.photo,ge=d===oe.photo,ce=oe.outlines.map(Mt=>Mt.points.map(Ge=>Ua(Ge,oe.centroid,oe.t))),be=mv(ce.flat());return D.jsxs("g",{onPointerDown:Mt=>z(Mt,oe.photo),style:{cursor:"move"},children:[ce.map((Mt,Ge)=>D.jsx("polygon",{points:Mt.map(we=>`${L(we.x).toFixed(1)},${O(we.z).toFixed(1)}`).join(" "),fill:K,fillOpacity:ge?.28:.14,stroke:K,strokeWidth:ge?3:2},Ge)),(et=ce[0])==null?void 0:et.map((Mt,Ge)=>{const we=ce[0][(Ge+1)%ce[0].length],Le=Math.hypot(we.x-Mt.x,we.z-Mt.z);return Le<.3?null:D.jsx("text",{x:(L(Mt.x)+L(we.x))/2,y:(O(Mt.z)+O(we.z))/2-3,textAnchor:"middle",fontSize:"9",fill:"#66727e",children:cn(Le,i)},Ge)}),D.jsx("text",{x:L(be.x),y:O(be.z),textAnchor:"middle",fontSize:"13",fontWeight:"600",fill:"#1c2733",children:xe}),D.jsxs("text",{x:L(be.x),y:O(be.z)+14,textAnchor:"middle",fontSize:"11",fill:"#66727e",children:[pn(oe.outlines.reduce((Mt,Ge)=>Mt+Ge.value,0),i),t!=null&&t[oe.photo]?` · ${t[oe.photo]}`:""]})]},oe.photo)})]}),D.jsx("p",{className:"hint",children:"Arrastra cada habitación para colocarla; selecciónala y usa ⟲/⟳ para rotarla (las posiciones se recuerdan). Vista esquemática: cada habitación se midió desde su propia cámara, alinéalas por puertas y paredes compartidas."})]})})}function xv(r){return Math.atan2(r.x,r.z)}function DA(r,e,t){const i={x:t*Math.sin(r),y:0,z:t*Math.cos(r)},a=r+Math.PI-e;return{pos:i,dyaw:a}}function _v(r,e){const t=Math.cos(e),i=Math.sin(e);return{x:r.x*t+r.z*i,y:r.y,z:r.z*t-r.x*i}}function yv(r,e,t){const i={x:-e.x,y:-e.y,z:-e.z},a=r.x*t.x+r.y*t.y+r.z*t.z,o=r.x*i.x+r.y*i.y+r.z*i.z,c=t.x*i.x+t.y*i.y+t.z*i.z,d=1-a*a;if(Math.abs(d)<1e-6)return null;const h=(a*c-o)/d,f=(c-a*o)/d;if(h<=0||f<=0)return null;const m={x:h*r.x,y:h*r.y,z:h*r.z},v={x:e.x+f*t.x,y:e.y+f*t.y,z:e.z+f*t.z},g=Math.hypot(m.x-v.x,m.y-v.y,m.z-v.z);return{point:{x:(m.x+v.x)/2,y:(m.y+v.y)/2,z:(m.z+v.z)/2},gap:g,range:h}}function IA(r,e){return Math.hypot(e.x-r.x,e.y-r.y,e.z-r.z)}const Sv=ye.forwardRef(function({imageURL:e,level:t,active:i,onPick:a},o){const c=ye.useRef(null),d=ye.useRef({}),h=ye.useRef(a);return ye.useEffect(()=>{h.current=a}),ye.useImperativeHandle(o,()=>({addMarker(f,m){const{markers:v}=d.current;if(!v)return;const g=new Yn(new ms(.6,12,8),new ps({color:m}));g.position.set(f.x,f.y,f.z).multiplyScalar(48),v.add(g)},clearMarkers(){var f;(f=d.current.markers)==null||f.clear()}})),ye.useEffect(()=>{if(!e||!c.current)return;const f=c.current,m=new ou,v=new ni(75,f.clientWidth/f.clientHeight,.1,200);v.position.set(0,0,.01);const g=new hu({antialias:!0});g.setSize(f.clientWidth,f.clientHeight),g.setPixelRatio(Math.min(window.devicePixelRatio,2)),f.appendChild(g.domElement);const x=new Yn(new ms(50,64,48),new ps({side:jn}));t&&x.rotation.set(br.degToRad(t.pitch??0),0,br.degToRad(t.roll??0)),m.add(x),new vx().load(e,E=>{E.colorSpace=ti,x.material.map=E,x.material.needsUpdate=!0});const S=new fs;m.add(S);const b=new pu(v,g.domElement);b.enableZoom=!1,b.enablePan=!1,b.rotateSpeed=-.35;const M=E=>{E.preventDefault(),v.fov=Math.min(100,Math.max(15,v.fov+E.deltaY*.05)),v.updateProjectionMatrix()};g.domElement.addEventListener("wheel",M,{passive:!1});const y=new yx;let N=null;const P=E=>{N=[E.clientX,E.clientY]},T=E=>{var B;if(!N||Math.hypot(E.clientX-N[0],E.clientY-N[1])>6)return;const R=g.domElement.getBoundingClientRect();y.setFromCamera(new ke((E.clientX-R.left)/R.width*2-1,-((E.clientY-R.top)/R.height)*2+1),v);const z=y.ray.direction.clone().normalize();(B=h.current)==null||B.call(h,{x:z.x,y:z.y,z:z.z})};g.domElement.addEventListener("pointerdown",P),g.domElement.addEventListener("pointerup",T),d.current={markers:S};let I;const L=()=>{I=requestAnimationFrame(L),b.update(),g.render(m,v)};L();const O=()=>{v.aspect=f.clientWidth/f.clientHeight,v.updateProjectionMatrix(),g.setSize(f.clientWidth,f.clientHeight)};return window.addEventListener("resize",O),()=>{var E;cancelAnimationFrame(I),window.removeEventListener("resize",O),g.domElement.removeEventListener("wheel",M),g.domElement.removeEventListener("pointerdown",P),g.domElement.removeEventListener("pointerup",T),b.dispose(),x.geometry.dispose(),(E=x.material.map)==null||E.dispose(),x.material.dispose(),g.dispose(),f.removeChild(g.domElement)}},[e]),D.jsx("div",{ref:c,className:`stereo-pane ${i?"active":""}`})}),Of={orientA:"PASO 1 · En la foto A, toca el punto del suelo donde estaba el TRÍPODE de la cámara B.",orientB:"PASO 2 · En la foto B, toca donde estaba el TRÍPODE de la cámara A.",measure:"Mide: toca un punto en A, el MISMO punto en B, y repite con un segundo punto → distancia triangulada."};function UA({photos:r,levels:e={},unitSys:t="m",onSave:i,onClose:a}){var q,ie;const[o,c]=ye.useState((q=r[0])==null?void 0:q.name),[d,h]=ye.useState((ie=r[1])==null?void 0:ie.name),[f,m]=ye.useState(""),[v,g]=ye.useState("setup"),[x,S]=ye.useState(null),[b,M]=ye.useState(null),[y,N]=ye.useState([]),[P,T]=ye.useState(null),[I,L]=ye.useState(0),[O,E]=ye.useState(""),R=ye.useRef(null),z=ye.useRef(null),B=ee=>{var k;return(k=r.find(J=>J.name===ee))==null?void 0:k.url},j=parseFloat(String(f).replace(",","."));function G(){if(!o||!d||o===d){E("⚠️ Elige dos fotos distintas de la misma sala.");return}if(!(j>.2)){E("⚠️ Introduce la distancia real entre las dos posiciones de cámara (mídela con el láser).");return}g("orientA"),E(Of.orientA)}function de(ee){var k,J;if(v==="orientA")M(xv(ee)),(k=R.current)==null||k.addMarker(ee,"#f5b04b"),g("orientB"),E(Of.orientB);else if(v==="measure"){if(y.length%2!==0){E("⚠️ Ahora toca el MISMO punto en la foto B.");return}(J=R.current)==null||J.addMarker(ee,y.length<2?"#34d399":"#58a6f2"),N(Pe=>[...Pe,ee]),E("Ahora el MISMO punto en la foto B.")}}function W(ee){var k,J;if(v==="orientB"){const Pe=DA(b,xv(ee),j);(k=z.current)==null||k.addMarker(ee,"#f5b04b"),S(Pe),g("measure"),E(Of.measure)}else if(v==="measure"){if(y.length%2!==1){E("⚠️ Primero toca el punto en la foto A.");return}(J=z.current)==null||J.addMarker(ee,y.length<2?"#34d399":"#58a6f2"),N(Pe=>[...Pe,ee])}}ye.useEffect(()=>{var ve,K;if(v!=="measure"||y.length<4||!x)return;const ee=yv(y[0],x.pos,_v(y[1],x.dyaw)),k=yv(y[2],x.pos,_v(y[3],x.dyaw));if(!ee||!k){E("⚠️ Los rayos no se cruzan bien (¿punto marcado distinto en cada foto?). Repite los 4 toques."),N([]),(ve=R.current)==null||ve.clearMarkers(),(K=z.current)==null||K.clearMarkers();return}const J=IA(ee.point,k.point),Pe=Math.max(ee.gap,k.gap),oe=Pe<.03?"excelente":Pe<.08?"buena":"⚠️ dudosa";T({value:J,worstGap:Pe,quality:oe,points:[ee.point,k.point]}),E(`📐 ${cn(J,t)} · calidad de correspondencia ${oe} (gap ${(Pe*100).toFixed(1)} cm)`)},[y,v,x,t]);function ae(){P&&(i==null||i(o,{id:crypto.randomUUID(),mode:"stereo",label:`S${I+1}`,value:P.value,unit:"m",text:`estéreo base ${j.toFixed(3)} m · gap ${(P.worstGap*100).toFixed(1)} cm`,points:P.points,dirs:[y[0],y[2]],baseline:j}),L(ee=>ee+1),Q(),E("💾 Guardada en la foto A. Marca el siguiente par de puntos."))}function Q(){var ee,k;N([]),T(null),(ee=R.current)==null||ee.clearMarkers(),(k=z.current)==null||k.clearMarkers()}return v==="setup"?D.jsx("div",{className:"floorplan",children:D.jsxs("div",{className:"floorplan-card",style:{maxWidth:560},children:[D.jsxs("div",{className:"floorplan-head",children:[D.jsx("b",{children:"🛰️ Medición estéreo (2 fotos)"}),D.jsx("button",{onClick:a,children:"✕"})]}),D.jsx("p",{className:"hint",children:"Dos fotos 360 de la misma sala desde posiciones distintas + la distancia entre ambas (mídela con el láser) = medidas por triangulación pura, sin depender de la altura de cámara ni del suelo plano. La máxima precisión posible con fotos."}),D.jsxs("label",{className:"row",children:["Foto A",D.jsx("select",{value:o,onChange:ee=>c(ee.target.value),style:{flex:1},children:r.map(ee=>D.jsx("option",{value:ee.name,children:ee.name},ee.name))})]}),D.jsxs("label",{className:"row",children:["Foto B",D.jsx("select",{value:d,onChange:ee=>h(ee.target.value),style:{flex:1},children:r.map(ee=>D.jsx("option",{value:ee.name,children:ee.name},ee.name))})]}),D.jsxs("label",{className:"row",children:["Base (m)",D.jsx("input",{type:"number",min:"0.2",step:"0.001",value:f,placeholder:"p. ej. 1.500",onChange:ee=>m(ee.target.value),style:{flex:1}})]}),O&&D.jsx("p",{className:"hint",children:O}),D.jsx("button",{className:"active",onClick:G,children:"Empezar"})]})}):D.jsxs("div",{className:"stereo",children:[D.jsxs("div",{className:"stereo-bar",children:[D.jsx("b",{children:"🛰️ Estéreo"}),D.jsx("span",{className:"stereo-msg",children:O}),P&&D.jsxs(D.Fragment,{children:[D.jsx("button",{className:"active",onClick:ae,children:"💾 Guardar"}),D.jsx("button",{onClick:Q,children:"Descartar"})]}),!P&&v==="measure"&&y.length>0&&D.jsx("button",{onClick:Q,children:"↩️ Reiniciar puntos"}),D.jsxs("span",{className:"hint",children:[I," guardada(s) en ",o]}),D.jsx("button",{onClick:a,children:"✕"})]}),D.jsxs("div",{className:"stereo-panes",children:[D.jsxs("div",{className:"stereo-col",children:[D.jsxs("span",{className:"stereo-label",children:["A · ",o]}),D.jsx(Sv,{ref:R,imageURL:B(o),level:e[o],active:v==="orientA"||v==="measure"&&y.length%2===0,onPick:de})]}),D.jsxs("div",{className:"stereo-col",children:[D.jsxs("span",{className:"stereo-label",children:["B · ",d]}),D.jsx(Sv,{ref:z,imageURL:B(d),level:e[d],active:v==="orientB"||v==="measure"&&y.length%2===1,onPick:W})]})]})]})}function FA({onClose:r,onCapture:e}){const t=ye.useRef(null),i=ye.useRef(null),a=ye.useRef(null),[o,c]=ye.useState(null),[d,h]=ye.useState(null),[f,m]=ye.useState(null),[v,g]=ye.useState(null),[x,S]=ye.useState([]),[b,M]=ye.useState(""),[y,N]=ye.useState(!1),[P,T]=ye.useState(!1);ye.useEffect(()=>{var z,B;let E=!1;const R=b?{video:{deviceId:{exact:b},width:{ideal:3840}},audio:!1}:{video:{facingMode:"environment",width:{ideal:1920}},audio:!1};return(z=i.current)==null||z.getTracks().forEach(j=>j.stop()),N(!1),T(!1),(B=navigator.mediaDevices)==null||B.getUserMedia(R).then(j=>{if(E){j.getTracks().forEach(G=>G.stop());return}i.current=j,c(null),t.current&&(t.current.srcObject=j,t.current.onloadedmetadata=()=>{const G=t.current;G&&G.videoHeight>0&&Math.abs(G.videoWidth/G.videoHeight-2)<.08&&(N(!0),T(!0))},t.current.play().catch(()=>{})),navigator.mediaDevices.enumerateDevices().then(G=>{E||S(G.filter(de=>de.kind==="videoinput"))}).catch(()=>{})}).catch(j=>{c((j==null?void 0:j.name)==="NotAllowedError"?"Permiso de cámara denegado. Actívalo en el navegador para ver la imagen en vivo.":"No se pudo abrir la cámara del dispositivo.")}),()=>{var j;E=!0,(j=i.current)==null||j.getTracks().forEach(G=>G.stop())}},[b]),ye.useEffect(()=>{if(!P||!a.current||!t.current)return;const E=a.current,R=new ou,z=new ni(75,E.clientWidth/E.clientHeight,.1,200);z.position.set(0,0,.01);const B=new hu({antialias:!0});B.setSize(E.clientWidth,E.clientHeight),E.appendChild(B.domElement);const j=new eM(t.current);j.colorSpace=ti;const G=new Yn(new ms(50,64,48),new ps({map:j,side:jn}));R.add(G);const de=new pu(z,B.domElement);de.enableZoom=!1,de.enablePan=!1,de.rotateSpeed=-.35;const W=ie=>{ie.preventDefault(),z.fov=Math.min(100,Math.max(20,z.fov+ie.deltaY*.05)),z.updateProjectionMatrix()};B.domElement.addEventListener("wheel",W,{passive:!1});let ae;const Q=()=>{ae=requestAnimationFrame(Q),de.update(),B.render(R,z)};Q();const q=()=>{z.aspect=E.clientWidth/E.clientHeight,z.updateProjectionMatrix(),B.setSize(E.clientWidth,E.clientHeight)};return window.addEventListener("resize",q),()=>{cancelAnimationFrame(ae),window.removeEventListener("resize",q),B.domElement.removeEventListener("wheel",W),de.dispose(),G.geometry.dispose(),j.dispose(),G.material.dispose(),B.dispose(),E.removeChild(B.domElement)}},[P]),ye.useEffect(()=>()=>{d==null||d.disconnect()},[d]);async function I(){if(d){d.disconnect(),h(null),m(null);return}try{const E=await Lx(R=>m(R),()=>{h(null),m(null)});h(E)}catch{c("No se pudo conectar el láser (¿Bluetooth activado? ¿Chrome/Edge?).")}}function L(){const E=t.current;if(!(E!=null&&E.videoWidth))return;const R=document.createElement("canvas");R.width=E.videoWidth,R.height=E.videoHeight;const z=R.getContext("2d");z.drawImage(E,0,0);const B=Math.round(R.width*.015),j=Math.round(R.width*.035);z.font=`600 ${j}px "IBM Plex Mono", monospace`;const G=[f!=null?`LASER ${f.toFixed(3)} m`:"SIN LÁSER",new Date().toLocaleString("es-CH")],de=Math.max(...G.map(ae=>z.measureText(ae).width))+B*2,W=(j+B)*G.length+B;z.fillStyle="rgba(13,18,22,0.82)",z.fillRect(B,R.height-W-B,de,W),z.fillStyle="#e05a10",z.fillRect(B,R.height-W-B,Math.round(B/2),W),z.fillStyle="#ffffff",G.forEach((ae,Q)=>{z.fillText(ae,B*2,R.height-W-B+(j+B)*(Q+1)-B/2)}),g(f),R.toBlob(ae=>{if(!ae)return;const Q=URL.createObjectURL(ae),q=document.createElement("a");q.href=Q,q.download=`workpulse-evidencia-${Date.now()}.png`,q.click(),URL.revokeObjectURL(Q)},"image/png")}function O(){const E=t.current;if(!(E!=null&&E.videoWidth))return;const R=document.createElement("canvas");R.width=E.videoWidth,R.height=E.videoHeight,R.getContext("2d").drawImage(E,0,0),R.toBlob(z=>{z&&(e==null||e(z))},"image/png")}return D.jsxs("div",{className:"live",children:[D.jsx("video",{ref:t,className:"live-video",playsInline:!0,muted:!0,style:P?{display:"none"}:void 0}),P&&D.jsx("div",{ref:a,className:"live-sphere"}),o&&D.jsx("div",{className:"live-error",children:o}),D.jsxs("div",{className:"live-hud",children:[D.jsx("span",{className:"live-hud-label",children:"LÁSER"}),D.jsx("span",{className:"live-hud-value",children:f!=null?`${f.toFixed(3)} m`:"— · — — —"}),v!=null&&D.jsxs("span",{className:"live-hud-frozen",children:["última captura: ",v.toFixed(3)," m"]})]}),D.jsxs("div",{className:"live-bar",children:[x.length>1&&D.jsxs("select",{value:b,onChange:E=>M(E.target.value),title:"Elegir cámara — una Theta por USB en modo LIVE aparece aquí como webcam 360",children:[D.jsx("option",{value:"",children:"Cámara por defecto"}),x.map((E,R)=>D.jsx("option",{value:E.deviceId,children:E.label||`Cámara ${R+1}`},E.deviceId))]}),y&&D.jsx("button",{className:P?"active":"",onClick:()=>T(E=>!E),title:"Stream 2:1 detectado: proyectarlo como esfera 360 navegable",children:"🌐 Vista 360"}),Ih()&&D.jsxs("button",{className:d?"active":"",onClick:I,children:["🔗 ",d?"Láser conectado":"Conectar láser"]}),y&&D.jsx("button",{className:"active",onClick:O,title:"Congela el fotograma equirectangular y ábrelo como foto medible en el visor",children:"📥 Capturar y medir"}),D.jsx("button",{onClick:L,disabled:!!o,title:"Guarda el fotograma con la lectura del láser y la fecha estampadas — evidencia para peritajes",children:"📸 Capturar con lectura"}),D.jsx("button",{onClick:r,children:"✕ Cerrar"})]}),D.jsx("p",{className:"live-note",children:y?"Cámara 360 detectada (stream 2:1). 📥 congela el fotograma y lo abre listo para medir.":"Consejo: una Ricoh Theta conectada por USB en modo LIVE aparece en el selector como webcam 360 (en Windows, con el driver UVC gratuito de RICOH). El WiFi de las cámaras 360 no es accesible desde el navegador."})]})}const OA="workpulse360.assembly.v1";function zA(r){const e=r.length||1;return{x:r.reduce((t,i)=>t+i.x,0)/e,z:r.reduce((t,i)=>t+i.z,0)/e}}function kA(r,e,t){const i=Math.cos(t.rot??0),a=Math.sin(t.rot??0),o=r.x-e.x,c=r.z-e.z;return{x:e.x+o*i-c*a+(t.tx??0),z:e.z+o*a+c*i+(t.tz??0)}}function BA({store:r,roomNames:e,onClose:t}){const i=ye.useRef(null);return ye.useEffect(()=>{const a=i.current;if(!a)return;let o={};try{o=JSON.parse(localStorage.getItem(OA))??{}}catch{}const c=new ou;c.background=new Ot("#10151a");const d=new ni(55,a.clientWidth/a.clientHeight,.1,500),h=new hu({antialias:!0});h.setSize(a.clientWidth,a.clientHeight),a.appendChild(h.domElement),c.add(new KM(16777215,.75));const f=new ZM(16777215,1.1);f.position.set(8,14,6),c.add(f);const m={minX:1/0,maxX:-1/0,minZ:1/0,maxZ:-1/0};let v=0;Object.entries(r).forEach(([T,I],L)=>{const O=I.find(ie=>{var ee;return ie.mode==="area"&&(((ee=ie.points)==null?void 0:ee.length)??0)>=3});if(!O)return;const E=I.filter(ie=>ie.mode==="height"),R=E.length?E.reduce((ie,ee)=>ie+ee.value,0)/E.length:2.4,z=zA(O.points),B=Math.max(...O.points.map(ie=>ie.x))-Math.min(...O.points.map(ie=>ie.x)),j=o[T]??{tx:v-z.x,tz:-z.z,rot:0};v+=B+1.5;const G=O.points.map(ie=>kA(ie,z,j));for(const ie of G)m.minX=Math.min(m.minX,ie.x),m.maxX=Math.max(m.maxX,ie.x),m.minZ=Math.min(m.minZ,ie.z),m.maxZ=Math.max(m.maxZ,ie.z);const de=new ep(G.map(ie=>new ke(ie.x,ie.z))),W=new Ot(ir[L%ir.length]),ae=new Yn(new tp(de,{depth:R,bevelEnabled:!1}),new w0({color:W,transparent:!0,opacity:.35,side:Hi}));ae.rotation.x=-Math.PI/2,ae.position.y=0,c.add(ae);const Q=new Yn(new np(de),new w0({color:W,side:Hi}));Q.rotation.x=-Math.PI/2,Q.position.y=.01,c.add(Q);const q=new sx(new iM(ae.geometry),new Ar({color:15331314}));q.rotation.x=-Math.PI/2,c.add(q)});const g=(m.minX+m.maxX)/2||0,x=(m.minZ+m.maxZ)/2||0,S=Math.max(m.maxX-m.minX,m.maxZ-m.minZ,4);d.position.set(g+S*.9,S*.9,x+S*.9);const b=new pu(d,h.domElement);b.target.set(g,1,x);const M=new eE(S*3,Math.round(S*3),3359308,1910575);M.position.set(g,-.02,x),c.add(M);let y;const N=()=>{y=requestAnimationFrame(N),b.update(),h.render(c,d)};N();const P=()=>{d.aspect=a.clientWidth/a.clientHeight,d.updateProjectionMatrix(),h.setSize(a.clientWidth,a.clientHeight)};return window.addEventListener("resize",P),()=>{cancelAnimationFrame(y),window.removeEventListener("resize",P),b.dispose(),h.dispose(),a.removeChild(h.domElement)}},[r,e]),D.jsxs("div",{className:"stereo",children:[D.jsxs("div",{className:"stereo-bar",children:[D.jsx("b",{children:"🏠 Dollhouse 3D"}),D.jsx("span",{className:"stereo-msg",children:"Las habitaciones extruidas a su altura medida, colocadas según tu plano general. Arrastra para orbitar · rueda para acercar."}),D.jsx("button",{onClick:t,children:"✕"})]}),D.jsx("div",{ref:i,style:{flex:1,minHeight:0}})]})}const Mv=16*1024;async function HA(r,e,t){const i=new Blob([r]).stream().pipeThrough(new e(t)),a=await new Response(i).arrayBuffer();return new Uint8Array(a)}const Dx={enc:r=>btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,""),dec:r=>Uint8Array.from(atob(r.replace(/-/g,"+").replace(/_/g,"/")),e=>e.charCodeAt(0))};async function Ix(r){return Dx.enc(await HA(r,CompressionStream,"gzip"))}async function Ux(r){const e=new Blob([Dx.dec(r.trim())]).stream().pipeThrough(new DecompressionStream("gzip"));return new Response(e).text()}function Fx(){return new RTCPeerConnection({iceServers:[{urls:"stun:stun.l.google.com:19302"}]})}function Ox(r){return r.iceGatheringState==="complete"?Promise.resolve():new Promise(e=>{const t=()=>{r.iceGatheringState==="complete"&&(r.removeEventListener("icegatheringstatechange",t),e())};r.addEventListener("icegatheringstatechange",t),setTimeout(e,4e3)})}function zx(r,e){r.binaryType="arraybuffer",r.onopen=()=>{var t;return(t=e.onOpen)==null?void 0:t.call(e)},r.onclose=()=>{var t;return(t=e.onClose)==null?void 0:t.call(e)},r.onmessage=t=>{var i,a;if(typeof t.data=="string")try{(i=e.onJSON)==null||i.call(e,JSON.parse(t.data))}catch{}else(a=e.onChunk)==null||a.call(e,t.data)}}async function VA(r,e,t,i){const a=await i.arrayBuffer();r.send(JSON.stringify({t:`${e}-start`,name:t,size:a.byteLength,mime:i.type}));for(let o=0;o<a.byteLength;o+=Mv){for(;r.bufferedAmount>4*1024*1024;)await new Promise(c=>setTimeout(c,50));r.send(a.slice(o,o+Mv))}r.send(JSON.stringify({t:`${e}-end`,name:t}))}function GA(r={}){const e=Fx(),t=e.createDataChannel("workpulse360");return zx(t,r),{offerCode:(async()=>(await e.setLocalDescription(await e.createOffer()),await Ox(e),Ix(JSON.stringify(e.localDescription))))(),async acceptAnswer(a){const o=JSON.parse(await Ux(a));await e.setRemoteDescription(o)},send:a=>{t.readyState==="open"&&t.send(JSON.stringify(a))},sendBlob:(a,o,c)=>VA(t,a,o,c),close:()=>{try{t.close(),e.close()}catch{}},channel:()=>t}}async function WA(r,e={}){const t=Fx();t.ondatachannel=o=>zx(o.channel,e);const i=JSON.parse(await Ux(r));return await t.setRemoteDescription(i),await t.setLocalDescription(await t.createAnswer()),await Ox(t),{answerCode:await Ix(JSON.stringify(t.localDescription)),close:()=>{try{t.close()}catch{}}}}function XA(){let r=null,e=[],t=0;return{start(i){r=i,e=[],t=0},chunk(i){r&&(e.push(i),t+=i.byteLength)},end(){if(!r)return null;const i=new Blob(e,{type:r.mime||"image/jpeg"}),a={...r,blob:i,complete:t>=(r.size??0)};return r=null,e=[],a}}}function $A({photo:r,measurements:e,roomName:t,onClose:i}){const a=ye.useRef(null),[o,c]=ye.useState(""),[d,h]=ye.useState(""),[f,m]=ye.useState("preparando"),[v,g]=ye.useState(!1),x=ye.useRef(!1);ye.useEffect(()=>{const y=GA({onOpen:async()=>{m("conectado"),g(!0),y.send({t:"meta",name:r.name,roomName:t});try{const N=await jA(r.url);await y.sendBlob("photo",r.name,N),x.current=!0,y.send({t:"measurements",list:e})}catch{}},onClose:()=>m("cerrado")});return a.current=y,y.offerCode.then(N=>{c(N),m("esperando")}),()=>y.close()},[]),ye.useEffect(()=>{var y;f==="conectado"&&x.current&&((y=a.current)==null||y.send({t:"measurements",list:e}))},[e,f]);const S=`${location.origin}${location.pathname}#join=${o}`;async function b(){var y;if(navigator.share)try{await navigator.share({title:"Sesión Workpulse 360 en vivo",url:S});return}catch{}await((y=navigator.clipboard)==null?void 0:y.writeText(S))}async function M(){try{await a.current.acceptAnswer(d)}catch{m("esperando"),alert("Ese código de respuesta no es válido. Pide al cliente que lo copie completo.")}}return v?D.jsxs("div",{className:"share-chip",onClick:()=>g(!1),title:"Sesión en vivo — clic para abrir los detalles",children:["🔴 En vivo · ",f==="conectado"?"cliente conectado":f]}):D.jsx("div",{className:"floorplan",children:D.jsxs("div",{className:"floorplan-card",style:{maxWidth:560},children:[D.jsxs("div",{className:"floorplan-head",children:[D.jsxs("b",{children:["🔴 Sesión en vivo — ",t||r.name]}),D.jsxs("span",{children:[f==="conectado"&&D.jsx("button",{onClick:()=>g(!0),children:"— Minimizar"})," ",D.jsx("button",{onClick:i,children:"✕ Terminar"})]})]}),f!=="conectado"&&D.jsxs(D.Fragment,{children:[D.jsxs("p",{className:"hint",children:[D.jsx("b",{children:"1."})," Envía este enlace al cliente (WhatsApp, correo…). Lo abre en su móvil u ordenador — sin instalar nada, sin cuentas; la conexión es directa entre vuestros dispositivos."]}),D.jsxs("div",{className:"row",children:[D.jsx("input",{type:"text",readOnly:!0,value:f==="preparando"?"generando…":S,style:{flex:1,fontSize:11},onFocus:y=>y.target.select()}),D.jsx("button",{className:"active",onClick:b,disabled:!o,children:"📤 Enviar"})]}),D.jsxs("p",{className:"hint",children:[D.jsx("b",{children:"2."})," Su pantalla le mostrará un ",D.jsx("b",{children:"código de respuesta"})," — pídele que te lo mande y pégalo aquí:"]}),D.jsxs("div",{className:"row",children:[D.jsx("input",{type:"text",value:d,onChange:y=>h(y.target.value),placeholder:"pega aquí el código del cliente",style:{flex:1,fontSize:11}}),D.jsx("button",{className:"active",onClick:M,disabled:!d.trim(),children:"Conectar"})]})]}),f==="conectado"&&D.jsxs("p",{className:"hint",children:["✅ Cliente conectado. Ve tu foto y ",D.jsx("b",{children:"cada medición que hagas, al instante"}),". Puedes minimizar esto y seguir midiendo."]}),f==="cerrado"&&D.jsx("p",{className:"hint",children:"La conexión se cerró."})]})})}async function jA(r,e=2048){const t=new Image;t.src=r,await new Promise((a,o)=>{t.onload=a,t.onerror=o});const i=document.createElement("canvas");return i.width=e,i.height=Math.round(e/2),i.getContext("2d").drawImage(t,0,0,i.width,i.height),new Promise(a=>i.toBlob(o=>a(o),"image/jpeg",.8))}function YA({offerCode:r,onPhoto:e,onMeasurements:t,onClose:i}){const[a,o]=ye.useState(""),[c,d]=ye.useState("preparando"),h=ye.useRef(null),f=ye.useRef({});ye.useEffect(()=>{const v=XA();let g=!0;return WA(r,{onOpen:()=>g&&d("conectado"),onClose:()=>g&&d(x=>x==="recibido"?x:"error"),onJSON:x=>{if(x.t==="meta")f.current=x;else if(x.t==="photo-start")v.start(x);else if(x.t==="photo-end"){const S=v.end();S!=null&&S.blob&&(e==null||e({name:f.current.name??S.name,roomName:f.current.roomName,blob:S.blob}),d("recibido"))}else x.t==="measurements"&&(t==null||t(f.current.name,x.list??[]))},onChunk:x=>v.chunk(x)}).then(x=>{if(!g){x.close();return}h.current=x,o(x.answerCode),d("responde")}).catch(()=>g&&d("error")),()=>{var x;g=!1,(x=h.current)==null||x.close()}},[r]);async function m(){var v;if(navigator.share)try{await navigator.share({title:"Código de respuesta Workpulse 360",text:a});return}catch{}await((v=navigator.clipboard)==null?void 0:v.writeText(a)),alert("Código copiado — pégaselo al medidor.")}return c==="recibido"?D.jsx("div",{className:"share-chip",title:"Sesión en vivo: recibiendo mediciones del medidor",children:"🟢 En vivo · viendo la sesión"}):D.jsx("div",{className:"floorplan",children:D.jsxs("div",{className:"floorplan-card",style:{maxWidth:560},children:[D.jsxs("div",{className:"floorplan-head",children:[D.jsx("b",{children:"🟢 Unirse a la sesión en vivo"}),D.jsx("button",{onClick:i,children:"✕"})]}),c==="preparando"&&D.jsx("p",{className:"hint",children:"Preparando la conexión…"}),c==="responde"&&D.jsxs(D.Fragment,{children:[D.jsxs("p",{className:"hint",children:["Envía este ",D.jsx("b",{children:"código de respuesta"})," al medidor (WhatsApp, correo…). En cuanto lo pegue, la conexión se establece en directo entre vuestros dispositivos — sin servidores."]}),D.jsxs("div",{className:"row",children:[D.jsx("input",{type:"text",readOnly:!0,value:a,style:{flex:1,fontSize:11},onFocus:v=>v.target.select()}),D.jsx("button",{className:"active",onClick:m,children:"📤 Enviar"})]})]}),c==="conectado"&&D.jsx("p",{className:"hint",children:"✅ Conectado — recibiendo la foto…"}),c==="error"&&D.jsx("p",{className:"hint",children:"⚠️ No se pudo conectar. Pide un enlace nuevo al medidor (los códigos caducan al cerrar su pantalla)."})]})})}const rr=[{id:"HNF",label:"🛋️ HNF — habitable (salón, cocina, baño…)",short:"HNF",weight:1,nwf:!0},{id:"NNF",label:"📦 NNF — anexa (sótano, trastero, lavadero)",short:"NNF",weight:0,nwf:!1},{id:"VF",label:"🚶 VF — circulación (escalera, pasillo común)",short:"VF",weight:0,nwf:!1},{id:"FF",label:"⚙️ FF — técnica (calefacción, instalaciones)",short:"FF",weight:0,nwf:!1},{id:"BALKON",label:"🌤️ Balcón / loggia (AGF)",short:"Balcón",weight:.5,nwf:!1},{id:"TERRASSE",label:"☀️ Terraza / azotea (AGF)",short:"Terraza",weight:1/3,nwf:!1},{id:"GARTEN",label:"🌿 Jardín privativo",short:"Jardín",weight:.1,nwf:!1}],za="HNF",Ev={minHabitableZH:2.4,minCountable:1.5},wv={doorClearWidth:.8,corridorWidth:1.2},qA=/puerta|t(ü|u)r|porte|door/i,ZA=/pasillo|korridor|flur|couloir|corridor/i,Tv=/descuento|<\s*1[.,]5|pendiente|schr(ä|a)ge|mansarde|abzug/i;function KA(r){const e=[];for(const t of r)t.mode==="height"&&(t.value<Ev.minCountable?e.push({level:"warn",text:`${t.label} = ${t.value.toFixed(2)} m: por debajo de 1.50 m no computa como superficie habitable (regla WBS para pendientes).`}):t.value<Ev.minHabitableZH&&t.value>1.8&&e.push({level:"warn",text:`${t.label} = ${t.value.toFixed(2)} m: bajo el mínimo habitual de altura de techo habitable (≈ 2.40 m según PBG ZH § 304; varía por cantón).`})),(t.mode==="distance"||t.mode==="wall")&&(qA.test(t.label??"")?e.push(t.value>=wv.doorClearWidth?{level:"ok",text:`${t.label} = ${t.value.toFixed(2)} m: cumple el paso libre mínimo de puerta SIA 500 (≥ 0.80 m).`}:{level:"fail",text:`${t.label} = ${t.value.toFixed(2)} m: NO cumple el paso libre mínimo de puerta SIA 500 (≥ 0.80 m).`}):ZA.test(t.label??"")&&e.push(t.value>=wv.corridorWidth?{level:"ok",text:`${t.label} = ${t.value.toFixed(2)} m: cumple el ancho mínimo de pasillo SIA 500 (≥ 1.20 m).`}:{level:"fail",text:`${t.label} = ${t.value.toFixed(2)} m: NO cumple el ancho mínimo de pasillo SIA 500 (≥ 1.20 m). (1.00 m admisible sin puertas laterales.)`}));return e}function JA(r,e={},t={}){const i={};let a=0,o=0,c=0,d=0;for(const[h,f]of Object.entries(r)){const m=f.filter(M=>M.mode==="area"),v=m.filter(M=>Tv.test(M.label??"")).reduce((M,y)=>M+y.value,0),g=m.filter(M=>!Tv.test(M.label??"")).reduce((M,y)=>M+y.value,0);if(g<=0&&v<=0)continue;const x=e[h]??za,S=rr.find(M=>M.id===x)??rr[0],b=t[S.id]??S.weight;i[S.id]=(i[S.id]??0)+g,S.nwf&&(a+=Math.max(0,g-v),o+=Math.min(v,g)),c+=Math.max(0,g-(S.nwf?v:0))*b,d+=g}return{byType:i,nwf:a,deducted:o,weighted:c,total:d}}const kx="workpulse360.audit.v1";function ap(){try{return JSON.parse(localStorage.getItem(kx))??[]}catch{return[]}}async function QA(r){const e=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(r));return[...new Uint8Array(e)].map(t=>t.toString(16).padStart(2,"0")).join("")}async function Qi(r,e){try{const t=ap(),i=t.length?t[t.length-1].hash:"GENESIS",a={ts:new Date().toISOString(),action:r,summary:e,prev:i};a.hash=await QA(i+JSON.stringify([a.ts,r,e])),t.push(a),localStorage.setItem(kx,JSON.stringify(t))}catch{}}function eC(){const r=ap();return r.length?{count:r.length,first:r[0].ts,last:r[r.length-1].ts,head:r[r.length-1].hash}:null}function tC(){return ap()}const nC=/da(ñ|n)o|agua|inundaci|humedad|flut|wasser|moho/i,iC=/(\d+(?:[.,]\d+)?)\s*[x×]\s*(\d+(?:[.,]\d+)?)/,rC=/puerta|t(ü|u)r|porte|door/i;function sC(r){const e=iC.exec(r.label??"");if(!e)return 0;const t=parseFloat(e[1].replace(",",".")),i=parseFloat(e[2].replace(",","."));return t>0&&i>0&&t<6&&i<4?t*i:0}const aC=/@\s*(\d+(?:[.,]\d+)?)/;function Bx(r){const e=aC.exec(r.label??"");if(!e||!(r.value>0))return null;const t=parseFloat(e[1].replace(",","."));if(!(t>0))return null;const i=(r.value-t)/t*100;return{expected:t,deltaPct:i}}function oC(r,{calibrated:e,leveled:t}={}){const i=[];let a=0;e?(a+=2,i.push("altura de cámara calibrada")):i.push("⚠️ altura de cámara sin calibrar (1.60 m por defecto)"),t&&(a+=1,i.push("foto nivelada"));const o=r.flatMap(h=>h.points??[]).filter(h=>h.horizontal!=null);if(o.length){const h=o.filter(f=>f.horizontal<4).length/o.length;h>=.8?(a+=2,i.push("puntos cercanos a la cámara")):h>=.5?(a+=1,i.push("algunos puntos lejanos")):i.push("⚠️ mayoría de puntos lejanos (>4 m)")}const c=r.map(Bx).filter(Boolean);if(c.length){const h=Math.max(...c.map(f=>Math.abs(f.deltaPct)));h<2?(a+=2,i.push(`${c.length} control(es) dentro de ±2 %`)):h<5?(a+=1,i.push("controles con desvío moderado")):i.push("⚠️ un control supera el 5 % de desvío")}else i.push('sin valores de control (añade "@valor" a una etiqueta medida con láser)');return{grade:a>=5?"A":a>=3?"B":"C",reasons:i}}const cs=r=>String(r??"").replace(/[<>&]/g,e=>({"<":"&lt;",">":"&gt;","&":"&amp;"})[e]);function op(r,e={},t={},i=!0){const a=t.unitSys??"m",o=t.roomTypes??{},c=t.weights??{},d=Object.entries(r).filter(([,P])=>P.length>0);if(!d.length)return null;let h=0,f=0,m=0;const v=t.prices??{},g=d.map(([P,T])=>{var xe,ge;const I=e[P]||P,L=T.filter(ce=>ce.mode==="area"),O=T.filter(ce=>ce.mode==="height"),E=L.reduce((ce,be)=>ce+be.value,0),R=L.reduce((ce,be)=>ce+(be.perimeter??0),0),z=O.length?O.reduce((ce,be)=>ce+be.value,0)/O.length:null,B=z!=null&&R>0?R*z:null,j=z!=null&&E>0?E*z:null;h+=E,j&&(f+=j);const G=[...new Set(T.map(ce=>ce.camHeight).filter(Boolean).map(ce=>ce.toFixed(2)))],de=T.map(ce=>{const be={distance:"📏 Distancia",path:"📐 Ruta",area:"⬛ Área",height:"📊 Altura",wall:"🧱 Pared",note:"📝 Nota",slope:"⛰️ Pendiente",marker:"🔌 Elemento",stereo:"🛰️ Estéreo"}[ce.mode]??ce.mode,et=Px(ce),Mt=et!=null?`±${ce.unit==="m²"?pn(et,a):cn(et,a,3)}`:"—",Ge=Bx(ce),we=Ge?`${Math.abs(Ge.deltaPct)<2?"✅":Math.abs(Ge.deltaPct)<5?"⚠️":"❌"} ${cn(Ge.expected,a)} (${Ge.deltaPct>=0?"+":""}${Ge.deltaPct.toFixed(1)} %)`:"—";return`<tr><td>${cs(ce.label)}</td><td>${be}</td><td>${cs(Yc(ce,a))}</td><td>${Mt}</td><td>${we}</td><td>${ce.perimeter?cn(ce.perimeter,a):"—"}</td></tr>`}).join(""),W=[];E>0&&W.push(`Superficie: <b>${pn(E,a)}</b>`),R>0&&W.push(`Perímetro: <b>${cn(R,a)}</b>`),z!=null&&W.push(`Altura media: <b>${cn(z,a)}</b>`),B!=null&&W.push(`Paredes brutas (per. × alt.): <b>${pn(B,a)}</b>`),j!=null&&W.push(`Volumen: <b>${ov(j,a)}</b>`);const ae=T.reduce((ce,be)=>ce+sC(be),0),Q=B!=null?Math.max(0,B-ae):null;if(ae>0&&Q!=null&&W.push(`Huecos declarados: <b>−${pn(ae,a)}</b> → paredes netas <b>${pn(Q,a)}</b>`),R>0){const ce=T.filter(be=>(be.mode==="wall"||be.mode==="distance")&&rC.test(be.label??"")&&be.value<2.5).reduce((be,et)=>be+et.value,0);ce>0&&W.push(`Rodapié (per. − puertas): <b>${cn(Math.max(0,R-ce),a)}</b>`)}if(B!=null){const ce=((Q??B)+E)*2/10;W.push(`Pintura orient.: <b>${ce.toFixed(1)} L</b> <small>(2 manos, paredes netas+techo)</small>`)}const q=T.filter(ce=>ce.mode==="height"&&nC.test(ce.label??""));for(const ce of q)if(R>0){const be=R*ce.value;W.push(`💧 <b>${cs(ce.label)}</b> hasta ${cn(ce.value,a)}: paredes afectadas <b>${pn(be,a)}</b>${E>0?` + suelo <b>${pn(E,a)}</b>`:""}`)}E>0&&W.push(`Suelo con merma: recto <b>${pn(E*1.1,a)}</b> (+10 %) · diagonal <b>${pn(E*1.2,a)}</b> (+20 %) · espiga <b>${pn(E*1.25,a)}</b> (+25 %)`);let ie=0;if(v.paint>0&&B!=null){const ce=((Q??B)+E)*v.paint;ie+=ce,W.push(`Pintura ≈ <b>CHF ${ce.toFixed(0)}</b> <small>(${v.paint}/m²)</small>`)}if(v.floor>0&&E>0){const ce=E*1.1*v.floor;ie+=ce,W.push(`Suelo ≈ <b>CHF ${ce.toFixed(0)}</b> <small>(${v.floor}/m², +10 % merma)</small>`)}if(m+=ie,j!=null&&B!=null){const ce=E*.05+E*.1+B*.05;if(ce>0){const be=.161*j/ce;W.push(`Acústica RT60 ≈ <b>${be.toFixed(1)} s</b> <small>(sala vacía, superficies duras — Sabine)</small>`)}}const ee=T.filter(ce=>ce.mode==="marker");if(ee.length){const ce={};for(const be of ee)ce[be.text]=(ce[be.text]??0)+1;W.push(`Elementos: <b>${Object.entries(ce).map(([be,et])=>`${et}× ${be}`).join(", ")}</b>`)}const k=T.some(ce=>{var be;return(((be=ce.points)==null?void 0:be.length)??0)>=2})?Fh(T,{title:I,dark:!1,unitSys:a}):"",J=o[P]??za,Pe=rr.find(ce=>ce.id===J)??rr[0],oe=oC(T,{calibrated:((xe=t.camHeights)==null?void 0:xe[P])!=null&&t.camHeights[P]!==1.6,leveled:!!((ge=t.levels)!=null&&ge[P]&&(t.levels[P].pitch||t.levels[P].roll))}),ve=KA(T),K=ve.length?`<ul class="checks">${ve.map(ce=>`<li class="${ce.level}">${{ok:"✅",warn:"⚠️",fail:"❌"}[ce.level]} ${cs(ce.text)}</li>`).join("")}</ul>`:"";return`
      <section>
        <h2>${cs(I)} <span class="siatype">${cs(Pe.short)}</span>
          <span class="rel rel-${oe.grade}">Fiabilidad ${oe.grade}</span>${E>0?` — ${pn(E,a)}`:""}</h2>
        <p class="relwhy">${oe.reasons.map(cs).join(" · ")}</p>
        ${W.length?`<div class="stats">${W.join(" · ")}</div>`:""}
        <table><tr><th>Etiqueta</th><th>Tipo</th><th>Valor</th><th>Incert.</th><th>Control</th><th>Perímetro</th></tr>${de}</table>
        ${K}
        ${k?`<div class="plan">${k}</div>`:""}
        <p class="method">Método: proyección al plano del suelo con cámara a ${G.length?G.join(" / "):"?"} m.
        Las superficies de pared no descuentan puertas ni ventanas.</p>
      </section>`}).join(""),x=JA(r,o,c),S=P=>c[P.id]??P.weight,b=rr.filter(P=>x.byType[P.id]>0).map(P=>{const T=x.byType[P.id],I=S(P)>0&&S(P)<1?` × ${S(P).toFixed(2)} = ${pn(T*S(P),a)}`:"";return`<tr><td>${cs(P.label)}</td><td>${pn(T,a)}${I}</td></tr>`}).join(""),M=["BALKON","TERRASSE","GARTEN"].map(P=>`${{BALKON:"balcón",TERRASSE:"terraza",GARTEN:"jardín"}[P]} ×${(c[P]??rr.find(T=>T.id===P).weight).toFixed(2)}`).join(" · "),y=x.total>0?`
  <h2>Desglose de superficies (SIA 416)</h2>
  <table>${b}
    ${x.deducted>0?`<tr><td>− Descuento por zonas con altura &lt; 1.50 m (regla WBS)</td><td>− ${pn(x.deducted,a)}</td></tr>`:""}
    <tr class="sum"><td><b>NWF — superficie habitable neta (práctica WBS)</b></td><td><b>${pn(x.nwf,a)}</b></td></tr>
    <tr class="sum"><td><b>Superficie ponderada de tasación</b> <small>(${M})</small></td><td><b>${pn(x.weighted,a)}</b></td></tr>
  </table>
  <p class="method">Clasificación según SIA 416 (HNF = uso principal, NNF = anexos, VF = circulación,
  FF = técnica; balcones/terrazas son AGF y no forman parte de la superficie de piso). La NWF sigue la
  práctica WBS: superficies interiores acabadas, de pared a pared; bajo pendientes solo computa la zona
  con altura ≥ 1.50 m. Indica siempre el método al publicar un anuncio.</p>`:"";return`<!doctype html>
<html lang="es"><head><meta charset="utf-8"><title>Informe 360 — Workpulse</title>
<style>
  body { font-family: system-ui, sans-serif; color: #111; margin: 32px; }
  h1 { font-size: 22px; margin: 0 0 2px; }
  .sub { color: #666; font-size: 13px; margin-bottom: 8px; }
  .total { font-size: 15px; background: #eef7f2; border: 1px solid #bfe3d2;
           border-radius: 8px; padding: 10px 14px; margin: 14px 0 22px; }
  h2 { font-size: 15px; border-bottom: 1px solid #ccc; padding-bottom: 4px; margin-top: 26px; }
  .stats { font-size: 13px; color: #333; margin: 6px 0 10px; }
  table { width: 100%; border-collapse: collapse; font-size: 13px; margin-bottom: 10px; }
  td, th { text-align: left; padding: 6px 8px; border-bottom: 1px solid #eee; }
  th { color: #555; font-weight: 600; }
  .plan { max-width: 560px; border: 1px solid #ddd; border-radius: 8px; overflow: hidden; }
  .plan svg { display: block; width: 100%; height: auto; }
  .method { color: #888; font-size: 11px; margin: 6px 0 0; }
  .siatype { font-size: 11px; background: #e8eef4; border: 1px solid #c8d4de; border-radius: 10px;
             padding: 1px 8px; vertical-align: middle; color: #456; }
  .rel { font-size: 11px; border-radius: 10px; padding: 1px 8px; vertical-align: middle; font-weight: 700; }
  .rel-A { background: #e3f6ec; border: 1px solid #9ad9b9; color: #17714a; }
  .rel-B { background: #fdf3df; border: 1px solid #ecd096; color: #8a6510; }
  .rel-C { background: #fdeaea; border: 1px solid #efb3b3; color: #a52a24; }
  .relwhy { color: #889; font-size: 11px; margin: 3px 0 8px; }
  .checks { list-style: none; padding: 0; margin: 4px 0 10px; font-size: 12.5px; }
  .checks li { padding: 3px 0; }
  .checks li.fail { color: #b3261e; }
  .checks li.warn { color: #8a6d00; }
  .checks li.ok { color: #1b6e46; }
  tr.sum td { border-top: 2px solid #999; }
  footer { margin-top: 36px; color: #999; font-size: 11px; }
  section { break-inside: avoid; }
  @media print { body { margin: 12mm; } }
</style></head><body>
<h1>Workpulse 360 — Informe de medición</h1>
<div class="sub">Generado: ${new Date().toLocaleString("es-CH")} · ${d.length} espacio(s)</div>
${h>0?`<div class="total"><b>Superficie total medida: ${pn(h,a)}</b>${f>0?` · Volumen total (tipo GV: GF × altura): ${ov(f,a)}`:""}${m>0?` · <b>Presupuesto estimado: CHF ${m.toFixed(0)}</b>`:""}</div>`:""}
${y}
${g}
${(()=>{const P=eC();return P?`<h2>Registro de auditoría (cuaderno de campo digital)</h2>
<p class="method">${P.count} acciones registradas entre ${new Date(P.first).toLocaleString("es-CH")} y
${new Date(P.last).toLocaleString("es-CH")} en un registro solo-añadir encadenado con SHA-256.
Hash de cabeza: <code>${P.head.slice(0,24)}…</code> — cualquier alteración posterior de las mediciones
rompe la cadena y es detectable. El registro completo viaja con el archivo de proyecto.</p>`:""})()}
<footer>Medidas por trigonometría sobre foto 360° equirectangular con altura de cámara conocida o calibrada
(proyección al plano del suelo; alturas por pie/tope a plomada). Válido en suelos planos; la exactitud
depende de la nivelación de la cámara y de la altura indicada. No es un levantamiento topográfico.</footer>
${i?"<script>window.onload = () => setTimeout(() => window.print(), 300)<\/script>":""}
</body></html>`}function lC(r,e={},t={}){return op(r,e,t,!1)}function cC(r,e={},t={}){const i=op(r,e,t,!0);if(!i)return!1;const a=window.open("","_blank");return a?(a.document.write(i),a.document.close(),!0):!1}function uC(r,e={},t={}){const i=op(r,e,t,!1);if(!i)return!1;const a=new Blob([i],{type:"text/html"}),o=URL.createObjectURL(a),c=document.createElement("a");return c.href=o,c.download="workpulse360-informe.html",c.click(),URL.revokeObjectURL(o),!0}const dC="workpulse360",ru="photos",qa="kv";function sl(){return new Promise((r,e)=>{const t=indexedDB.open(dC,2);t.onupgradeneeded=()=>{t.result.objectStoreNames.contains(ru)||t.result.createObjectStore(ru,{keyPath:"name"}),t.result.objectStoreNames.contains(qa)||t.result.createObjectStore(qa)},t.onsuccess=()=>r(t.result),t.onerror=()=>e(t.error)})}async function fC(r,e){const t=await sl();return new Promise((i,a)=>{const o=t.transaction(qa,"readwrite").objectStore(qa).put(e,r);o.onsuccess=i,o.onerror=()=>a(o.error)})}async function hC(r){const e=await sl();return new Promise((t,i)=>{const a=e.transaction(qa,"readonly").objectStore(qa).get(r);a.onsuccess=()=>t(a.result),a.onerror=()=>i(a.error)})}function lp(r,e){return r.transaction(ru,e).objectStore(ru)}async function Hc(r,e){const t=await sl();return new Promise((i,a)=>{const o=lp(t,"readwrite").put({name:r,blob:e,addedAt:Date.now()});o.onsuccess=i,o.onerror=()=>a(o.error)})}async function bv(){const r=await sl();return new Promise((e,t)=>{const i=lp(r,"readonly").getAll();i.onsuccess=()=>e((i.result??[]).sort((a,o)=>a.addedAt-o.addedAt)),i.onerror=()=>t(i.error)})}async function pC(r){const e=await sl();return new Promise((t,i)=>{const a=lp(e,"readwrite").delete(r);a.onsuccess=t,a.onerror=()=>i(a.error)})}async function mC(r){try{const e=await r.slice(0,262144).arrayBuffer(),t=new TextDecoder("latin1").decode(e),i=c=>{const d=t.match(new RegExp(`${c}(?:="|>)\\s*(-?\\d+(?:\\.\\d+)?)`));return d?parseFloat(d[1]):null},a=i("GPano:PosePitchDegrees"),o=i("GPano:PoseRollDegrees");return a==null&&o==null?null:{pitch:a??0,roll:o??0}}catch{return null}}const Av=r=>Math.max(-5,Math.min(5,r));function gC(r){if(!r)return null;const e=Av(-(r.pitch??0)),t=Av(-(r.roll??0));return Math.abs(e)<.05&&Math.abs(t)<.05?null:{pitch:Math.round(e*100)/100,roll:Math.round(t*100)/100}}const Cv="workpulse360.measurements.v1",Rv="workpulse360.roomnames.v1",Pv="workpulse360.camheights.v1",Lv="workpulse360.units.v1",Nv="workpulse360.roomtypes.v1",Dv="workpulse360.weights.v1",Iv="workpulse360.level.v1",Uv="workpulse360.prices.v1",zf="workpulse360.tripod.v1",vC={BALKON:.5,TERRASSE:1/3,GARTEN:.1};function Fs(r){try{return JSON.parse(localStorage.getItem(r))??{}}catch{return{}}}function xC(){const[r,e]=ye.useState([]),[t,i]=ye.useState(null),[a,o]=ye.useState(()=>Fs(Cv)),[c,d]=ye.useState(()=>Fs(Rv)),[h,f]=ye.useState(()=>Fs(Pv)),[m,v]=ye.useState(()=>Fs(Nv)),[g,x]=ye.useState(()=>({...vC,...Fs(Dv)})),[S,b]=ye.useState(()=>Fs(Iv)),[M,y]=ye.useState(()=>({paint:0,floor:0,...Fs(Uv)})),[N,P]=ye.useState(()=>localStorage.getItem(Lv)||"m"),[T,I]=ye.useState(()=>{const U=parseFloat(localStorage.getItem(zf));return Number.isFinite(U)&&U>0?U:null}),[L,O]=ye.useState(!1),[E,R]=ye.useState(!1),[z,B]=ye.useState(!1),[j,G]=ye.useState(!1),[de,W]=ye.useState(!1),[ae,Q]=ye.useState(null),[q,ie]=ye.useState(()=>{const U=/#join=([A-Za-z0-9_-]+)/.exec(location.hash);return U&&history.replaceState(null,"",location.pathname),U?U[1]:null}),[ee,k]=ye.useState(!0),J=ye.useRef(null),[Pe,oe]=ye.useState("off"),ve=ye.useRef(null),K=ye.useRef(null);ye.useEffect(()=>{localStorage.setItem(Cv,JSON.stringify(a))},[a]),ye.useEffect(()=>{localStorage.setItem(Rv,JSON.stringify(c))},[c]),ye.useEffect(()=>{localStorage.setItem(Pv,JSON.stringify(h))},[h]),ye.useEffect(()=>{localStorage.setItem(Lv,N)},[N]),ye.useEffect(()=>{localStorage.setItem(Nv,JSON.stringify(m))},[m]),ye.useEffect(()=>{localStorage.setItem(Dv,JSON.stringify(g))},[g]),ye.useEffect(()=>{localStorage.setItem(Iv,JSON.stringify(S))},[S]),ye.useEffect(()=>{localStorage.setItem(Uv,JSON.stringify(M))},[M]),ye.useEffect(()=>{T!=null?localStorage.setItem(zf,String(T)):localStorage.removeItem(zf)},[T]),ye.useEffect(()=>{T==null||r.length===0||f(U=>{const V=r.filter(Ee=>U[Ee.name]==null);if(V.length===0)return U;const le={...U};for(const Ee of V)le[Ee.name]=T;return le})},[r,T]),ye.useEffect(()=>{let U=!1;return bv().then(V=>{U||e(le=>{const Ee=new Set(le.map(Ae=>Ae.name)),Ce=V.filter(Ae=>!Ee.has(Ae.name)).map(Ae=>({name:Ae.name,url:URL.createObjectURL(Ae.blob)}));return[...le,...Ce]})}).catch(()=>{}).finally(()=>!U&&k(!1)),()=>{U=!0}},[]);function xe(){return{app:"workpulse360",version:1,exportedAt:new Date().toISOString(),store:a,roomNames:c,camHeights:h,roomTypes:m,levels:S,weights:g,prices:M,unitSys:N,auditLog:tC()}}ye.useEffect(()=>{"showSaveFilePicker"in window&&hC("projectFileHandle").then(async U=>{var le;if(!U)return;ve.current=U;const V=await((le=U.queryPermission)==null?void 0:le.call(U,{mode:"readwrite"}));oe(V==="granted"?"on":"paused")}).catch(()=>{})},[]);async function ge(){const U=ve.current;if(U)try{const V=await U.createWritable();await V.write(JSON.stringify(xe(),null,1)),await V.close(),oe("on")}catch{oe("paused")}}ye.useEffect(()=>{if(!(Pe!=="on"||!ve.current))return clearTimeout(K.current),K.current=setTimeout(ge,2e3),()=>clearTimeout(K.current)},[a,c,h,m,S,g,M,N]);async function ce(){var U,V;try{if(Pe==="paused"&&ve.current){await((V=(U=ve.current).requestPermission)==null?void 0:V.call(U,{mode:"readwrite"}))==="granted"&&await ge();return}const le=await window.showSaveFilePicker({suggestedName:"proyecto-workpulse360.json",types:[{description:"Proyecto Workpulse 360",accept:{"application/json":[".json"]}}]});ve.current=le,await fC("projectFileHandle",le).catch(()=>{}),await ge(),Qi("autoguardado",`activado en ${le.name}`)}catch{}}function be(U){const V=prompt("Nombre del espacio (p.ej. Salón, Cocina):",c[U]??"");V!==null&&d(le=>({...le,[U]:V.trim()}))}function et(U){const le=(a[t]??[]).find(Ce=>Ce.id===U);if(!le)return;const Ee=prompt(`Etiqueta de la medición.
Consejo: añade "@valor" (p. ej. "puerta @0.93") con la medida real de tu láser o cinta — el informe la comparará como CONTROL de calidad:`,le.label);Ee&&o(Ce=>({...Ce,[t]:(Ce[t]??[]).map(Ae=>Ae.id===U?{...Ae,label:Ee.trim()}:Ae)}))}function Mt(U){confirm(`¿Eliminar "${c[U]||U}" y sus mediciones?`)&&(e(V=>V.filter(le=>le.name!==U)),o(V=>{const le={...V};return delete le[U],le}),d(V=>{const le={...V};return delete le[U],le}),pC(U).catch(()=>{}),t===U&&i(null))}const Ge=r.find(U=>U.name===t)??null,we=a[t]??[];function Le(U){const V=[...U.target.files??[]];if(!V.length)return;const le=V.map(Ee=>({name:Ee.name,url:URL.createObjectURL(Ee)}));for(const Ee of V){Hc(Ee.name,Ee).catch(()=>{});const Ce=new Image;Ce.onload=()=>{const Ae=Ce.width/Ce.height;Math.abs(Ae-2)>.06&&alert(`⚠️ «${Ee.name}» tiene proporción ${Ae.toFixed(2)}:1, no 2:1.
No parece una foto 360 equirectangular completa — las medidas pueden salir mal. Exporta desde la app de la cámara en formato equirectangular.`)},Ce.src=URL.createObjectURL(Ee),mC(Ee).then(Ae=>{const Ke=gC(Ae);Ke&&b(nt=>nt[Ee.name]?nt:{...nt,[Ee.name]:Ke})}).catch(()=>{})}e(Ee=>{const Ce=new Set(Ee.map(Ae=>Ae.name));return[...Ee,...le.filter(Ae=>!Ce.has(Ae.name))]}),i(le[0].name),U.target.value=""}function De(U){var V,le;o(Ee=>({...Ee,[t]:[...Ee[t]??[],U]})),Qi("medir",`${t} · ${U.label} · ${U.mode} · ${((le=(V=U.value)==null?void 0:V.toFixed)==null?void 0:le.call(V,3))??""} ${U.unit??""} · h=${U.camHeight}`)}function Qe(U){const V=(a[t]??[]).find(le=>le.id===U);o(le=>({...le,[t]:(le[t]??[]).filter(Ee=>Ee.id!==U)})),V&&Qi("borrar",`${t} · ${V.label} · ${V.mode}`)}function je(){var le,Ee;const U=[["foto","espacio","tipo_sia416","etiqueta","tipo","valor","unidad","perimetro_m","altura_camara_m"]];for(const[Ce,Ae]of Object.entries(a))for(const Ke of Ae)U.push([Ce,c[Ce]??"",m[Ce]??za,Ke.label,Ke.mode,Ke.value.toFixed(3),Ke.unit,((le=Ke.perimeter)==null?void 0:le.toFixed(3))??"",((Ee=Ke.camHeight)==null?void 0:Ee.toFixed(2))??""]);const V=new Blob([U.map(Ce=>Ce.join(",")).join(`
`)],{type:"text/csv"});Bt(V,"workpulse360-mediciones.csv")}function vt(){const U=[["foto","espacio","tipo_sia416","superficie_m2","perimetro_m","altura_media_m","volumen_m3","elementos","notas"]];for(const[le,Ee]of Object.entries(a)){if(!Ee.length)continue;const Ce=Ee.filter(Ie=>Ie.mode==="area"),Ae=Ee.filter(Ie=>Ie.mode==="height"),Ke=Ce.reduce((Ie,Ye)=>Ie+Ye.value,0),nt=Ce.reduce((Ie,Ye)=>Ie+(Ye.perimeter??0),0),ft=Ae.length?Ae.reduce((Ie,Ye)=>Ie+Ye.value,0)/Ae.length:null,Y=Ee.filter(Ie=>Ie.mode==="marker"),$e={};for(const Ie of Y)$e[Ie.text]=($e[Ie.text]??0)+1;const Te=Ee.filter(Ie=>Ie.mode==="note").map(Ie=>Ie.text).join(" | ");U.push([le,c[le]??"",m[le]??za,Ke?Ke.toFixed(2):"",nt?nt.toFixed(2):"",ft?ft.toFixed(2):"",Ke&&ft?(Ke*ft).toFixed(2):"",Object.entries($e).map(([Ie,Ye])=>`${Ye}x ${Ie}`).join("; "),Te])}const V=U.map(le=>le.map(Ee=>`"${String(Ee).replace(/"/g,'""')}"`).join(",")).join(`
`);Bt(new Blob(["\uFEFF"+V],{type:"text/csv;charset=utf-8"}),"workpulse360-raumbuch.csv"),Qi("exportar","Raumbuch CSV")}function st(){const U=new Blob([JSON.stringify(xe(),null,1)],{type:"application/json"});Bt(U,"proyecto-workpulse360.json"),Qi("exportar","proyecto JSON")}function _t(U){if((U==null?void 0:U.app)!=="workpulse360"||!U.store)throw new Error("formato");o(V=>({...V,...U.store})),d(V=>({...V,...U.roomNames})),f(V=>({...V,...U.camHeights})),v(V=>({...V,...U.roomTypes})),b(V=>({...V,...U.levels})),U.weights&&x(V=>({...V,...U.weights})),U.unitSys&&P(U.unitSys)}async function Et(){const{default:U}=await Hg(async()=>{const{default:Ke}=await import("./jszip.min-DyMdwJPh.js").then(nt=>nt.j);return{default:Ke}},[],import.meta.url),V=new U,le={app:"workpulse360",version:1,exportedAt:new Date().toISOString(),store:a,roomNames:c,camHeights:h,roomTypes:m,levels:S,weights:g,unitSys:N};V.file("proyecto.json",JSON.stringify(le,null,1));const Ee=await bv().catch(()=>[]),Ce=V.folder("fotos");for(const Ke of Ee)Ce.file(Ke.name,Ke.blob);const Ae=await V.generateAsync({type:"blob"});Bt(Ae,"workpulse360-copia-completa.zip")}function X(U){var le;const V=(le=U.target.files)==null?void 0:le[0];if(U.target.value="",!!V){if(/\.zip$/i.test(V.name)){Hg(()=>import("./jszip.min-DyMdwJPh.js").then(Ee=>Ee.j),[],import.meta.url).then(async({default:Ee})=>{const Ce=await Ee.loadAsync(V),Ae=Ce.file("proyecto.json");Ae&&_t(JSON.parse(await Ae.async("string")));const Ke=[];for(const nt of Object.values(Ce.files)){if(nt.dir||!nt.name.startsWith("fotos/"))continue;const ft=nt.name.slice(6);if(!ft)continue;const Y=await nt.async("blob");await Hc(ft,Y).catch(()=>{}),Ke.push({name:ft,url:URL.createObjectURL(Y)})}e(nt=>{const ft=new Set(nt.map(Y=>Y.name));return[...nt,...Ke.filter(Y=>!ft.has(Y.name))]}),alert(`Copia restaurada: ${Ke.length} foto(s) con sus mediciones.`)}).catch(()=>alert("No se pudo leer esa copia de seguridad."));return}V.text().then(Ee=>{_t(JSON.parse(Ee)),alert("Proyecto importado. Abre las fotos con el mismo nombre para ver las mediciones.")}).catch(()=>alert("Ese archivo no parece un proyecto de Workpulse 360."))}}function Bt(U,V){const le=URL.createObjectURL(U),Ee=document.createElement("a");Ee.href=le,Ee.download=V,Ee.click(),URL.revokeObjectURL(le)}async function Dt(){var le;const U=w();if(!U)return;const V=new File([U],"workpulse360-informe.html",{type:"text/html"});if((le=navigator.canShare)!=null&&le.call(navigator,{files:[V]}))try{await navigator.share({files:[V],title:"Informe Workpulse 360"})}catch{}else Bt(new Blob([U],{type:"text/html"}),"workpulse360-informe.html")}function F(){const U=T!=null?String(T):"1.45",V=prompt(`Altura de tu trípode: del suelo al CENTRO del objetivo, con la cámara ya montada (en metros).
Se guarda para siempre y cada foto nueva queda calibrada sola.

Deja el campo vacío y acepta para borrarla.`,U);if(V==null)return;if(!V.trim()){I(null),Qi("tripode","altura de trípode borrada");return}const le=parseFloat(V.replace(",","."));if(!Number.isFinite(le)||le<.3||le>3){alert("Escribe una altura en metros entre 0.30 y 3.00 (por ejemplo 1.45).");return}I(Math.round(le*1e3)/1e3),Qi("tripode",`altura de trípode fijada: ${le.toFixed(3)} m`)}function w(){return lC(a,c,{unitSys:N,roomTypes:m,weights:g,camHeights:h,levels:S,prices:M})}const re=D.jsxs(D.Fragment,{children:[ae&&D.jsx($A,{photo:ae,measurements:a[ae.name]??[],roomName:c[ae.name],onClose:()=>Q(null)}),q&&D.jsx(YA,{offerCode:q,onPhoto:({name:U,roomName:V,blob:le})=>{const Ee=`en-vivo-${U}`;Hc(Ee,le).catch(()=>{}),e(Ce=>Ce.some(Ae=>Ae.name===Ee)?Ce:[...Ce,{name:Ee,url:URL.createObjectURL(le)}]),V&&d(Ce=>({...Ce,[Ee]:V})),i(Ee)},onMeasurements:(U,V)=>{o(le=>({...le,[`en-vivo-${U}`]:V}))},onClose:()=>ie(null)})]}),ue=Ge?D.jsxs("div",{className:"app360-stage",children:[D.jsx(AA,{imageURL:Ge.url,measurements:we,onSave:De,onDelete:Qe,onRename:et,onOpenPlan:()=>O(!0),onClose:()=>i(null),initialCamHeight:h[Ge.name]??T??1.6,calibrated:h[Ge.name]!=null||T!=null,onAIResult:U=>{const V=Ge.name;U.nombre&&!c[V]&&d(le=>({...le,[V]:U.nombre})),U.tipo&&rr.some(le=>le.id===U.tipo)&&v(le=>({...le,[V]:U.tipo}));for(const le of(U.observaciones??[]).slice(0,3))typeof le!="string"||!le.trim()||o(Ee=>({...Ee,[V]:[...Ee[V]??[],{id:crypto.randomUUID(),mode:"note",label:`IA${(Ee[V]??[]).filter(Ce=>{var Ae;return(Ae=Ce.label)==null?void 0:Ae.startsWith("IA")}).length+1}`,value:0,unit:"nota",text:`🤖 ${le.trim()}`,points:[],dirs:[]}]}));Qi("ia",`${V} · análisis automático (${U.nombre??"—"} / ${U.tipo??"—"})`)},onCamHeight:U=>f(V=>V[Ge.name]===U?V:{...V,[Ge.name]:U}),onRememberTripod:U=>I(U),unitSys:N,onUnitSys:P,initialLevel:S[Ge.name]??{pitch:0,roll:0},onLevel:U=>b(V=>{const le=V[Ge.name];return le&&le.pitch===U.pitch&&le.roll===U.roll?V:{...V,[Ge.name]:U}}),extraControls:D.jsxs(D.Fragment,{children:[r.length>1&&D.jsx("select",{value:t,onChange:U=>i(U.target.value),title:"Cambiar de foto/habitación",children:r.map(U=>D.jsxs("option",{value:U.name,children:["🖼️ ",c[U.name]||U.name," (",(a[U.name]??[]).length,")"]},U.name))}),D.jsxs("button",{onClick:()=>be(Ge.name),title:"Nombrar este espacio",children:["🏷️ ",c[Ge.name]||"nombrar"]}),D.jsx("select",{value:m[Ge.name]??za,onChange:U=>v(V=>({...V,[Ge.name]:U.target.value})),title:"Tipo de superficie según SIA 416 (para el desglose del informe)",children:rr.map(U=>D.jsx("option",{value:U.id,children:U.label},U.id))})]})},Ge.name),L&&D.jsx(PA,{measurements:we,photoName:Ge.name,roomName:c[Ge.name],unitSys:N,onClose:()=>O(!1)})]}):null,Me=Object.values(a).reduce((U,V)=>U+V.length,0),Oe=Object.values(a).filter(U=>U.some(V=>{var le;return V.mode==="area"&&(((le=V.points)==null?void 0:le.length)??0)>=3})).length,ze=Object.values(a).flat().filter(U=>U.mode==="area").reduce((U,V)=>U+V.value,0);return D.jsxs(D.Fragment,{children:[re,ue??D.jsxs("div",{className:"app360-landing",children:[D.jsxs("header",{className:"brand",children:[D.jsxs("h1",{children:["Workpulse",D.jsx("span",{children:"360"})]}),D.jsx("p",{children:"Medición profesional con cámara 360° — sin nube, sin cuenta, sin suscripción: todo en tu dispositivo."})]}),D.jsxs("label",{className:"filebtn app360-open",children:["📷 Abrir fotos 360° y medir",D.jsx("input",{type:"file",accept:"image/jpeg,image/png",multiple:!0,hidden:!0,onChange:Le})]}),D.jsx("button",{onClick:()=>G(!0),title:"Cámara del dispositivo en vivo con la lectura del láser superpuesta; captura fotos-evidencia con la medida estampada",children:"🎥 En vivo · cámara + láser"}),r.length>0&&D.jsxs("section",{className:"app360-rooms",children:[D.jsxs("b",{children:["Sesión actual",ze>0?` · superficie total ${pn(ze,N)}`:""]}),D.jsx("ul",{className:"list",children:r.map(U=>D.jsxs("li",{children:[D.jsxs("span",{className:"mrow",onClick:()=>i(U.name),style:{cursor:"pointer",flex:1},children:["🖼️ ",c[U.name]||U.name," · ",(a[U.name]??[]).length," mediciones"," · ",(rr.find(V=>V.id===(m[U.name]??za))??rr[0]).short]}),D.jsx("button",{className:"del",title:"Eliminar foto y mediciones",onClick:()=>Mt(U.name),children:"✕"})]},U.name))})]}),ee&&r.length===0&&D.jsx("p",{className:"hint",children:"Buscando fotos de sesiones anteriores…"}),D.jsxs("ol",{className:"app360-steps",children:[D.jsxs("li",{className:"app360-step",children:[D.jsx("b",{children:"Captura"}),D.jsxs("p",{children:["Coloca la cámara (Insta360, Ricoh Theta…) en un trípode a",D.jsx("b",{children:" altura conocida"})," — p. ej. 1.60 m — en medio de cada estancia. ¿No la sabes? Dentro del visor, ",D.jsx("b",{children:"🎯 Calibrar"})," la deduce con una distancia conocida o tu láser Bluetooth."]})]}),D.jsxs("li",{className:"app360-step",children:[D.jsx("b",{children:"Exporta la foto 360"}),D.jsxs("p",{children:["Desde la app de la cámara, en formato ",D.jsx("b",{children:"equirectangular "}),"(la imagen completa «desplegada», proporción 2:1)."]})]}),D.jsxs("li",{className:"app360-step",children:[D.jsx("b",{children:"Mide y entrega"}),D.jsxs("p",{children:["Distancias, áreas, alturas, paredes y elementos eléctricos con lupa de precisión. Todo queda en tu dispositivo y sale como ",D.jsx("b",{children:"plano con cotas"}),", informe SIA y archivos ",D.jsx("b",{children:"CSV, SVG, PNG, DXF o PDF"}),"."]})]})]}),Me>0&&D.jsxs("div",{className:"toolgroup",children:[D.jsx("span",{className:"toolgroup-label",children:"Planos e informes"}),D.jsxs("div",{className:"tools",children:[D.jsx("button",{onClick:()=>cC(a,c,{unitSys:N,roomTypes:m,weights:g,camHeights:h,levels:S,prices:M}),children:"🖨️ Informe (PDF)"}),D.jsx("button",{onClick:()=>uC(a,c,{unitSys:N,roomTypes:m,weights:g,camHeights:h,levels:S,prices:M}),title:"Informe como archivo HTML autónomo (se abre en cualquier navegador)",children:"📑 Informe HTML"}),typeof navigator<"u"&&!!navigator.canShare&&D.jsx("button",{onClick:Dt,title:"Enviar el informe por WhatsApp, correo…",children:"📤 Compartir"}),Oe>0&&D.jsx("button",{onClick:()=>R(!0),title:"Ensamblar todas las habitaciones en un plano de conjunto",children:"🧩 Plano general"}),r.length>0&&D.jsx("button",{onClick:()=>Q(r.find(U=>U.name===t)??r[0]),title:"El cliente ve tu foto y tus mediciones en directo, de dispositivo a dispositivo, sin servidores ni cuentas",children:"🔴 Compartir en vivo"}),Oe>0&&D.jsx("button",{onClick:()=>W(!0),title:"La casa en 3D: habitaciones extruidas a su altura medida, según el plano general",children:"🏠 Dollhouse 3D"})]})]}),D.jsxs("div",{className:"toolgroup",children:[D.jsx("span",{className:"toolgroup-label",children:"Datos y copias"}),D.jsxs("div",{className:"tools",children:[Me>0&&D.jsxs(D.Fragment,{children:[D.jsxs("button",{onClick:je,children:["📄 CSV (",Me,")"]}),D.jsx("button",{onClick:vt,title:"Libro de habitaciones (Raumbuch): una fila por espacio con superficies, altura, volumen y equipamiento — para facility management",children:"🏢 Raumbuch"}),D.jsx("button",{onClick:st,title:"Descarga las mediciones como archivo de proyecto",children:"💾 Proyecto"}),D.jsx("button",{onClick:Et,title:"Copia de seguridad completa: fotos + mediciones en un ZIP",children:"🗄️ Copia completa"})]}),D.jsxs("button",{className:T!=null?"active":"",onClick:F,title:"Mide una vez del suelo al centro del objetivo (con la cámara montada); desde entonces cada foto nueva queda calibrada sola con esa altura",children:["📷 Mi trípode: ",T!=null?`${T.toFixed(2)} m`:"sin fijar"]}),D.jsx("button",{onClick:()=>{var U;return(U=J.current)==null?void 0:U.click()},title:"Cargar un proyecto o copia completa (.json / .zip)",children:"📂 Importar"}),"showSaveFilePicker"in window&&D.jsx("button",{className:Pe==="on"?"active":"",onClick:ce,title:"Elige un archivo de proyecto una vez y la app lo reescribe sola tras cada cambio — el proyecto sobrevive a cualquier limpieza del navegador",children:Pe==="on"?"📌 Auto-guardado activo":Pe==="paused"?"📌 Reanudar auto-guardado":"📌 Auto-guardar en archivo…"}),r.length>=2&&D.jsx("button",{onClick:()=>B(!0),title:"Máxima precisión: dos fotos de la misma sala + distancia entre cámaras → triangulación pura",children:"🛰️ Estéreo (2 fotos)"}),D.jsx("input",{ref:J,type:"file",accept:".json,.zip,application/json,application/zip",hidden:!0,onChange:X})]})]}),D.jsxs("details",{className:"app360-step",children:[D.jsx("summary",{children:D.jsx("b",{children:"🇨🇭 Normas y referencias suizas integradas"})}),D.jsxs("p",{children:["Cada espacio se clasifica según ",D.jsx("b",{children:"SIA 416"})," (HNF/NNF/VF/FF, balcón, terraza) y el informe desglosa ",D.jsx("b",{children:"NWF"})," (superficie habitable neta, práctica WBS) y la ",D.jsx("b",{children:"superficie ponderada"})," de tasación (balcón ×0.5, terraza ×⅓, jardín ×0.1). Se comprueban además: paso libre de puerta ≥ 0.80 m y pasillo ≥ 1.20 m (",D.jsx("b",{children:"SIA 500"}),"), altura habitable ≈ 2.40 m (PBG ZH, varía por cantón) y la regla de 1.50 m bajo pendientes. Referencias de calibración suizas: puerta 2.10 m (stock antiguo 2.00), encimera 0.90 m (norma de cocina suiza), interruptor ≈ 1.05 m, barandilla 0.90–1.00 m (SIA 358), hoja A4 0.297 m."]}),D.jsx("p",{children:"Para descontar zonas bajo pendiente (altura < 1.50 m) de la NWF: mide esa zona como área y renómbrala con la palabra «descuento» o «pendiente» — se restará automáticamente."}),D.jsxs("div",{className:"row small",style:{gap:12,flexWrap:"wrap"},children:[D.jsx("b",{children:"Presupuesto (CHF/m²):"}),[["paint","Pintura"],["floor","Suelo"]].map(([U,V])=>D.jsxs("label",{style:{display:"flex",gap:4,alignItems:"center"},children:[V,D.jsx("input",{type:"number",min:"0",step:"1",value:M[U]||"",placeholder:"0",onChange:le=>y(Ee=>({...Ee,[U]:Math.max(0,parseFloat(le.target.value)||0)})),style:{width:70},title:"Tu precio por m². Con un valor > 0, el informe añade el coste estimado por habitación y el total"})]},U))]}),D.jsxs("div",{className:"row small",style:{gap:12,flexWrap:"wrap"},children:[D.jsx("b",{children:"Pesos de tasación:"}),["BALKON","TERRASSE","GARTEN"].map(U=>D.jsxs("label",{style:{display:"flex",gap:4,alignItems:"center"},children:[{BALKON:"Balcón",TERRASSE:"Terraza",GARTEN:"Jardín"}[U],D.jsx("input",{type:"number",min:"0",max:"1",step:"0.05",value:Number((g[U]??0).toFixed(2)),onChange:V=>x(le=>({...le,[U]:Math.min(1,Math.max(0,parseFloat(V.target.value)||0))})),style:{width:58},title:"Fracción del área que computa en la superficie ponderada (varía por cantón/tasador)"})]},U))]})]}),D.jsx("p",{className:"hint app360-note",children:"Todo se procesa en tu dispositivo — las fotos no se suben a ningún servidor. Fotos y mediciones se recuerdan aunque cierres la app."}),D.jsxs("footer",{className:"app360-foot",children:["¿Mediciones de terreno con drone? → ",D.jsx("a",{href:"../",children:"Workpulse Drohne 🚁"})]}),j&&D.jsx(FA,{onClose:()=>G(!1),onCapture:U=>{const V=`en-vivo-${new Date().toISOString().slice(0,19).replace(/[:T]/g,"-")}.png`;Hc(V,U).catch(()=>{}),e(le=>[...le,{name:V,url:URL.createObjectURL(U)}]),G(!1),i(V),Qi("capturar",`${V} desde cámara en vivo`)}}),de&&D.jsx(BA,{store:a,roomNames:c,onClose:()=>W(!1)}),z&&D.jsx(UA,{photos:r,levels:S,unitSys:N,onSave:(U,V)=>{o(le=>({...le,[U]:[...le[U]??[],V]})),Qi("medir",`${U} · ${V.label} · estéreo · ${V.value.toFixed(3)} m · base=${V.baseline}`)},onClose:()=>B(!1)}),E&&D.jsx(NA,{store:a,roomNames:c,roomTypes:m,unitSys:N,onClose:()=>R(!1)})]})]})}Ry.createRoot(document.getElementById("root")).render(D.jsx(My.StrictMode,{children:D.jsx(xC,{})}));"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("sw.js").catch(()=>{})});export{_C as c,Fv as g};
