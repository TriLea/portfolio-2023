(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Jg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var sp={exports:{}},$a={},op={exports:{}},Fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mo=Symbol.for("react.element"),e_=Symbol.for("react.portal"),t_=Symbol.for("react.fragment"),n_=Symbol.for("react.strict_mode"),i_=Symbol.for("react.profiler"),r_=Symbol.for("react.provider"),s_=Symbol.for("react.context"),o_=Symbol.for("react.forward_ref"),a_=Symbol.for("react.suspense"),l_=Symbol.for("react.memo"),u_=Symbol.for("react.lazy"),Df=Symbol.iterator;function c_(t){return t===null||typeof t!="object"?null:(t=Df&&t[Df]||t["@@iterator"],typeof t=="function"?t:null)}var ap={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},lp=Object.assign,up={};function ps(t,e,n){this.props=t,this.context=e,this.refs=up,this.updater=n||ap}ps.prototype.isReactComponent={};ps.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ps.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function cp(){}cp.prototype=ps.prototype;function Tc(t,e,n){this.props=t,this.context=e,this.refs=up,this.updater=n||ap}var wc=Tc.prototype=new cp;wc.constructor=Tc;lp(wc,ps.prototype);wc.isPureReactComponent=!0;var If=Array.isArray,fp=Object.prototype.hasOwnProperty,Ac={current:null},dp={key:!0,ref:!0,__self:!0,__source:!0};function hp(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)fp.call(e,i)&&!dp.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:mo,type:t,key:s,ref:o,props:r,_owner:Ac.current}}function f_(t,e){return{$$typeof:mo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Rc(t){return typeof t=="object"&&t!==null&&t.$$typeof===mo}function d_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Nf=/\/+/g;function Sl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?d_(""+t.key):e.toString(36)}function ca(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case mo:case e_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Sl(o,0):i,If(r)?(n="",t!=null&&(n=t.replace(Nf,"$&/")+"/"),ca(r,e,n,"",function(u){return u})):r!=null&&(Rc(r)&&(r=f_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Nf,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",If(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Sl(s,a);o+=ca(s,e,n,l,r)}else if(l=c_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Sl(s,a++),o+=ca(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ao(t,e,n){if(t==null)return t;var i=[],r=0;return ca(t,i,"","",function(s){return e.call(n,s,r++)}),i}function h_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ht={current:null},fa={transition:null},p_={ReactCurrentDispatcher:Ht,ReactCurrentBatchConfig:fa,ReactCurrentOwner:Ac};Fe.Children={map:Ao,forEach:function(t,e,n){Ao(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ao(t,function(){e++}),e},toArray:function(t){return Ao(t,function(e){return e})||[]},only:function(t){if(!Rc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Fe.Component=ps;Fe.Fragment=t_;Fe.Profiler=i_;Fe.PureComponent=Tc;Fe.StrictMode=n_;Fe.Suspense=a_;Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=p_;Fe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=lp({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ac.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)fp.call(e,l)&&!dp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:mo,type:t.type,key:r,ref:s,props:i,_owner:o}};Fe.createContext=function(t){return t={$$typeof:s_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:r_,_context:t},t.Consumer=t};Fe.createElement=hp;Fe.createFactory=function(t){var e=hp.bind(null,t);return e.type=t,e};Fe.createRef=function(){return{current:null}};Fe.forwardRef=function(t){return{$$typeof:o_,render:t}};Fe.isValidElement=Rc;Fe.lazy=function(t){return{$$typeof:u_,_payload:{_status:-1,_result:t},_init:h_}};Fe.memo=function(t,e){return{$$typeof:l_,type:t,compare:e===void 0?null:e}};Fe.startTransition=function(t){var e=fa.transition;fa.transition={};try{t()}finally{fa.transition=e}};Fe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Fe.useCallback=function(t,e){return Ht.current.useCallback(t,e)};Fe.useContext=function(t){return Ht.current.useContext(t)};Fe.useDebugValue=function(){};Fe.useDeferredValue=function(t){return Ht.current.useDeferredValue(t)};Fe.useEffect=function(t,e){return Ht.current.useEffect(t,e)};Fe.useId=function(){return Ht.current.useId()};Fe.useImperativeHandle=function(t,e,n){return Ht.current.useImperativeHandle(t,e,n)};Fe.useInsertionEffect=function(t,e){return Ht.current.useInsertionEffect(t,e)};Fe.useLayoutEffect=function(t,e){return Ht.current.useLayoutEffect(t,e)};Fe.useMemo=function(t,e){return Ht.current.useMemo(t,e)};Fe.useReducer=function(t,e,n){return Ht.current.useReducer(t,e,n)};Fe.useRef=function(t){return Ht.current.useRef(t)};Fe.useState=function(t){return Ht.current.useState(t)};Fe.useSyncExternalStore=function(t,e,n){return Ht.current.useSyncExternalStore(t,e,n)};Fe.useTransition=function(){return Ht.current.useTransition()};Fe.version="18.2.0";op.exports=Fe;var qs=op.exports;const m_=Jg(qs);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g_=qs,__=Symbol.for("react.element"),v_=Symbol.for("react.fragment"),x_=Object.prototype.hasOwnProperty,S_=g_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y_={key:!0,ref:!0,__self:!0,__source:!0};function pp(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)x_.call(e,i)&&!y_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:__,type:t,key:s,ref:o,props:r,_owner:S_.current}}$a.Fragment=v_;$a.jsx=pp;$a.jsxs=pp;sp.exports=$a;var vt=sp.exports,Mu={},mp={exports:{}},ln={},gp={exports:{}},_p={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(b,V){var B=b.length;b.push(V);e:for(;0<B;){var U=B-1>>>1,O=b[U];if(0<r(O,V))b[U]=V,b[B]=O,B=U;else break e}}function n(b){return b.length===0?null:b[0]}function i(b){if(b.length===0)return null;var V=b[0],B=b.pop();if(B!==V){b[0]=B;e:for(var U=0,O=b.length,se=O>>>1;U<se;){var oe=2*(U+1)-1,ue=b[oe],pe=oe+1,Se=b[pe];if(0>r(ue,B))pe<O&&0>r(Se,ue)?(b[U]=Se,b[pe]=B,U=pe):(b[U]=ue,b[oe]=B,U=oe);else if(pe<O&&0>r(Se,B))b[U]=Se,b[pe]=B,U=pe;else break e}}return V}function r(b,V){var B=b.sortIndex-V.sortIndex;return B!==0?B:b.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],f=1,h=null,d=3,_=!1,x=!1,v=!1,g=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(b){for(var V=n(u);V!==null;){if(V.callback===null)i(u);else if(V.startTime<=b)i(u),V.sortIndex=V.expirationTime,e(l,V);else break;V=n(u)}}function S(b){if(v=!1,p(b),!x)if(n(l)!==null)x=!0,Z(E);else{var V=n(u);V!==null&&q(S,V.startTime-b)}}function E(b,V){x=!1,v&&(v=!1,c(P),P=-1),_=!0;var B=d;try{for(p(V),h=n(l);h!==null&&(!(h.expirationTime>V)||b&&!$());){var U=h.callback;if(typeof U=="function"){h.callback=null,d=h.priorityLevel;var O=U(h.expirationTime<=V);V=t.unstable_now(),typeof O=="function"?h.callback=O:h===n(l)&&i(l),p(V)}else i(l);h=n(l)}if(h!==null)var se=!0;else{var oe=n(u);oe!==null&&q(S,oe.startTime-V),se=!1}return se}finally{h=null,d=B,_=!1}}var C=!1,A=null,P=-1,y=5,T=-1;function $(){return!(t.unstable_now()-T<y)}function K(){if(A!==null){var b=t.unstable_now();T=b;var V=!0;try{V=A(!0,b)}finally{V?z():(C=!1,A=null)}}else C=!1}var z;if(typeof m=="function")z=function(){m(K)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,Y=j.port2;j.port1.onmessage=K,z=function(){Y.postMessage(null)}}else z=function(){g(K,0)};function Z(b){A=b,C||(C=!0,z())}function q(b,V){P=g(function(){b(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(b){b.callback=null},t.unstable_continueExecution=function(){x||_||(x=!0,Z(E))},t.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=0<b?Math.floor(1e3/b):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(b){switch(d){case 1:case 2:case 3:var V=3;break;default:V=d}var B=d;d=V;try{return b()}finally{d=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(b,V){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var B=d;d=b;try{return V()}finally{d=B}},t.unstable_scheduleCallback=function(b,V,B){var U=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?U+B:U):B=U,b){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=B+O,b={id:f++,callback:V,priorityLevel:b,startTime:B,expirationTime:O,sortIndex:-1},B>U?(b.sortIndex=B,e(u,b),n(l)===null&&b===n(u)&&(v?(c(P),P=-1):v=!0,q(S,B-U))):(b.sortIndex=O,e(l,b),x||_||(x=!0,Z(E))),b},t.unstable_shouldYield=$,t.unstable_wrapCallback=function(b){var V=d;return function(){var B=d;d=V;try{return b.apply(this,arguments)}finally{d=B}}}})(_p);gp.exports=_p;var M_=gp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vp=qs,an=M_;function Q(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var xp=new Set,$s={};function gr(t,e){is(t,e),is(t+"Capture",e)}function is(t,e){for($s[t]=e,t=0;t<e.length;t++)xp.add(e[t])}var oi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Eu=Object.prototype.hasOwnProperty,E_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ff={},Of={};function T_(t){return Eu.call(Of,t)?!0:Eu.call(Ff,t)?!1:E_.test(t)?Of[t]=!0:(Ff[t]=!0,!1)}function w_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function A_(t,e,n,i){if(e===null||typeof e>"u"||w_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Gt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var At={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){At[t]=new Gt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];At[e]=new Gt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){At[t]=new Gt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){At[t]=new Gt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){At[t]=new Gt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){At[t]=new Gt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){At[t]=new Gt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){At[t]=new Gt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){At[t]=new Gt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Cc=/[\-:]([a-z])/g;function Lc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Cc,Lc);At[e]=new Gt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Cc,Lc);At[e]=new Gt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Cc,Lc);At[e]=new Gt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){At[t]=new Gt(t,1,!1,t.toLowerCase(),null,!1,!1)});At.xlinkHref=new Gt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){At[t]=new Gt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Pc(t,e,n,i){var r=At.hasOwnProperty(e)?At[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(A_(e,n,r,i)&&(n=null),i||r===null?T_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var ci=vp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ro=Symbol.for("react.element"),Fr=Symbol.for("react.portal"),Or=Symbol.for("react.fragment"),bc=Symbol.for("react.strict_mode"),Tu=Symbol.for("react.profiler"),Sp=Symbol.for("react.provider"),yp=Symbol.for("react.context"),Uc=Symbol.for("react.forward_ref"),wu=Symbol.for("react.suspense"),Au=Symbol.for("react.suspense_list"),Dc=Symbol.for("react.memo"),_i=Symbol.for("react.lazy"),Mp=Symbol.for("react.offscreen"),zf=Symbol.iterator;function Ss(t){return t===null||typeof t!="object"?null:(t=zf&&t[zf]||t["@@iterator"],typeof t=="function"?t:null)}var nt=Object.assign,yl;function Ds(t){if(yl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);yl=e&&e[1]||""}return`
`+yl+t}var Ml=!1;function El(t,e){if(!t||Ml)return"";Ml=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ml=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ds(t):""}function R_(t){switch(t.tag){case 5:return Ds(t.type);case 16:return Ds("Lazy");case 13:return Ds("Suspense");case 19:return Ds("SuspenseList");case 0:case 2:case 15:return t=El(t.type,!1),t;case 11:return t=El(t.type.render,!1),t;case 1:return t=El(t.type,!0),t;default:return""}}function Ru(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Or:return"Fragment";case Fr:return"Portal";case Tu:return"Profiler";case bc:return"StrictMode";case wu:return"Suspense";case Au:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case yp:return(t.displayName||"Context")+".Consumer";case Sp:return(t._context.displayName||"Context")+".Provider";case Uc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Dc:return e=t.displayName||null,e!==null?e:Ru(t.type)||"Memo";case _i:e=t._payload,t=t._init;try{return Ru(t(e))}catch{}}return null}function C_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ru(e);case 8:return e===bc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Fi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ep(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function L_(t){var e=Ep(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Co(t){t._valueTracker||(t._valueTracker=L_(t))}function Tp(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Ep(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ea(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Cu(t,e){var n=e.checked;return nt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function kf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Fi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function wp(t,e){e=e.checked,e!=null&&Pc(t,"checked",e,!1)}function Lu(t,e){wp(t,e);var n=Fi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Pu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Pu(t,e.type,Fi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Bf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Pu(t,e,n){(e!=="number"||Ea(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Is=Array.isArray;function $r(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Fi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function bu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Q(91));return nt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Hf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Q(92));if(Is(n)){if(1<n.length)throw Error(Q(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Fi(n)}}function Ap(t,e){var n=Fi(e.value),i=Fi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Gf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Rp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Uu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Rp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Lo,Cp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Lo=Lo||document.createElement("div"),Lo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Lo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ks(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var zs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},P_=["Webkit","ms","Moz","O"];Object.keys(zs).forEach(function(t){P_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),zs[e]=zs[t]})});function Lp(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||zs.hasOwnProperty(t)&&zs[t]?(""+e).trim():e+"px"}function Pp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Lp(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var b_=nt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Du(t,e){if(e){if(b_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Q(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Q(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Q(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Q(62))}}function Iu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nu=null;function Ic(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Fu=null,Kr=null,Zr=null;function Vf(t){if(t=vo(t)){if(typeof Fu!="function")throw Error(Q(280));var e=t.stateNode;e&&(e=el(e),Fu(t.stateNode,t.type,e))}}function bp(t){Kr?Zr?Zr.push(t):Zr=[t]:Kr=t}function Up(){if(Kr){var t=Kr,e=Zr;if(Zr=Kr=null,Vf(t),e)for(t=0;t<e.length;t++)Vf(e[t])}}function Dp(t,e){return t(e)}function Ip(){}var Tl=!1;function Np(t,e,n){if(Tl)return t(e,n);Tl=!0;try{return Dp(t,e,n)}finally{Tl=!1,(Kr!==null||Zr!==null)&&(Ip(),Up())}}function Zs(t,e){var n=t.stateNode;if(n===null)return null;var i=el(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Q(231,e,typeof n));return n}var Ou=!1;if(oi)try{var ys={};Object.defineProperty(ys,"passive",{get:function(){Ou=!0}}),window.addEventListener("test",ys,ys),window.removeEventListener("test",ys,ys)}catch{Ou=!1}function U_(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var ks=!1,Ta=null,wa=!1,zu=null,D_={onError:function(t){ks=!0,Ta=t}};function I_(t,e,n,i,r,s,o,a,l){ks=!1,Ta=null,U_.apply(D_,arguments)}function N_(t,e,n,i,r,s,o,a,l){if(I_.apply(this,arguments),ks){if(ks){var u=Ta;ks=!1,Ta=null}else throw Error(Q(198));wa||(wa=!0,zu=u)}}function _r(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Fp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Wf(t){if(_r(t)!==t)throw Error(Q(188))}function F_(t){var e=t.alternate;if(!e){if(e=_r(t),e===null)throw Error(Q(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Wf(r),t;if(s===i)return Wf(r),e;s=s.sibling}throw Error(Q(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(Q(189))}}if(n.alternate!==i)throw Error(Q(190))}if(n.tag!==3)throw Error(Q(188));return n.stateNode.current===n?t:e}function Op(t){return t=F_(t),t!==null?zp(t):null}function zp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=zp(t);if(e!==null)return e;t=t.sibling}return null}var kp=an.unstable_scheduleCallback,Xf=an.unstable_cancelCallback,O_=an.unstable_shouldYield,z_=an.unstable_requestPaint,ot=an.unstable_now,k_=an.unstable_getCurrentPriorityLevel,Nc=an.unstable_ImmediatePriority,Bp=an.unstable_UserBlockingPriority,Aa=an.unstable_NormalPriority,B_=an.unstable_LowPriority,Hp=an.unstable_IdlePriority,Ka=null,kn=null;function H_(t){if(kn&&typeof kn.onCommitFiberRoot=="function")try{kn.onCommitFiberRoot(Ka,t,void 0,(t.current.flags&128)===128)}catch{}}var bn=Math.clz32?Math.clz32:W_,G_=Math.log,V_=Math.LN2;function W_(t){return t>>>=0,t===0?32:31-(G_(t)/V_|0)|0}var Po=64,bo=4194304;function Ns(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ra(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Ns(a):(s&=o,s!==0&&(i=Ns(s)))}else o=n&~r,o!==0?i=Ns(o):s!==0&&(i=Ns(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-bn(e),r=1<<n,i|=t[n],e&=~r;return i}function X_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function j_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-bn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=X_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function ku(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Gp(){var t=Po;return Po<<=1,!(Po&4194240)&&(Po=64),t}function wl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function go(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-bn(e),t[e]=n}function Y_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-bn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Fc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-bn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ge=0;function Vp(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Wp,Oc,Xp,jp,Yp,Bu=!1,Uo=[],wi=null,Ai=null,Ri=null,Qs=new Map,Js=new Map,xi=[],q_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jf(t,e){switch(t){case"focusin":case"focusout":wi=null;break;case"dragenter":case"dragleave":Ai=null;break;case"mouseover":case"mouseout":Ri=null;break;case"pointerover":case"pointerout":Qs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Js.delete(e.pointerId)}}function Ms(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=vo(e),e!==null&&Oc(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function $_(t,e,n,i,r){switch(e){case"focusin":return wi=Ms(wi,t,e,n,i,r),!0;case"dragenter":return Ai=Ms(Ai,t,e,n,i,r),!0;case"mouseover":return Ri=Ms(Ri,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Qs.set(s,Ms(Qs.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Js.set(s,Ms(Js.get(s)||null,t,e,n,i,r)),!0}return!1}function qp(t){var e=er(t.target);if(e!==null){var n=_r(e);if(n!==null){if(e=n.tag,e===13){if(e=Fp(n),e!==null){t.blockedOn=e,Yp(t.priority,function(){Xp(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function da(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Hu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Nu=i,n.target.dispatchEvent(i),Nu=null}else return e=vo(n),e!==null&&Oc(e),t.blockedOn=n,!1;e.shift()}return!0}function Yf(t,e,n){da(t)&&n.delete(e)}function K_(){Bu=!1,wi!==null&&da(wi)&&(wi=null),Ai!==null&&da(Ai)&&(Ai=null),Ri!==null&&da(Ri)&&(Ri=null),Qs.forEach(Yf),Js.forEach(Yf)}function Es(t,e){t.blockedOn===e&&(t.blockedOn=null,Bu||(Bu=!0,an.unstable_scheduleCallback(an.unstable_NormalPriority,K_)))}function eo(t){function e(r){return Es(r,t)}if(0<Uo.length){Es(Uo[0],t);for(var n=1;n<Uo.length;n++){var i=Uo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(wi!==null&&Es(wi,t),Ai!==null&&Es(Ai,t),Ri!==null&&Es(Ri,t),Qs.forEach(e),Js.forEach(e),n=0;n<xi.length;n++)i=xi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<xi.length&&(n=xi[0],n.blockedOn===null);)qp(n),n.blockedOn===null&&xi.shift()}var Qr=ci.ReactCurrentBatchConfig,Ca=!0;function Z_(t,e,n,i){var r=Ge,s=Qr.transition;Qr.transition=null;try{Ge=1,zc(t,e,n,i)}finally{Ge=r,Qr.transition=s}}function Q_(t,e,n,i){var r=Ge,s=Qr.transition;Qr.transition=null;try{Ge=4,zc(t,e,n,i)}finally{Ge=r,Qr.transition=s}}function zc(t,e,n,i){if(Ca){var r=Hu(t,e,n,i);if(r===null)Nl(t,e,i,La,n),jf(t,i);else if($_(r,t,e,n,i))i.stopPropagation();else if(jf(t,i),e&4&&-1<q_.indexOf(t)){for(;r!==null;){var s=vo(r);if(s!==null&&Wp(s),s=Hu(t,e,n,i),s===null&&Nl(t,e,i,La,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Nl(t,e,i,null,n)}}var La=null;function Hu(t,e,n,i){if(La=null,t=Ic(i),t=er(t),t!==null)if(e=_r(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Fp(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return La=t,null}function $p(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(k_()){case Nc:return 1;case Bp:return 4;case Aa:case B_:return 16;case Hp:return 536870912;default:return 16}default:return 16}}var yi=null,kc=null,ha=null;function Kp(){if(ha)return ha;var t,e=kc,n=e.length,i,r="value"in yi?yi.value:yi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return ha=r.slice(t,1<i?1-i:void 0)}function pa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Do(){return!0}function qf(){return!1}function un(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Do:qf,this.isPropagationStopped=qf,this}return nt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Do)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Do)},persist:function(){},isPersistent:Do}),e}var ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bc=un(ms),_o=nt({},ms,{view:0,detail:0}),J_=un(_o),Al,Rl,Ts,Za=nt({},_o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ts&&(Ts&&t.type==="mousemove"?(Al=t.screenX-Ts.screenX,Rl=t.screenY-Ts.screenY):Rl=Al=0,Ts=t),Al)},movementY:function(t){return"movementY"in t?t.movementY:Rl}}),$f=un(Za),ev=nt({},Za,{dataTransfer:0}),tv=un(ev),nv=nt({},_o,{relatedTarget:0}),Cl=un(nv),iv=nt({},ms,{animationName:0,elapsedTime:0,pseudoElement:0}),rv=un(iv),sv=nt({},ms,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ov=un(sv),av=nt({},ms,{data:0}),Kf=un(av),lv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=cv[t])?!!e[t]:!1}function Hc(){return fv}var dv=nt({},_o,{key:function(t){if(t.key){var e=lv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=pa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?uv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hc,charCode:function(t){return t.type==="keypress"?pa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?pa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),hv=un(dv),pv=nt({},Za,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zf=un(pv),mv=nt({},_o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hc}),gv=un(mv),_v=nt({},ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),vv=un(_v),xv=nt({},Za,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Sv=un(xv),yv=[9,13,27,32],Gc=oi&&"CompositionEvent"in window,Bs=null;oi&&"documentMode"in document&&(Bs=document.documentMode);var Mv=oi&&"TextEvent"in window&&!Bs,Zp=oi&&(!Gc||Bs&&8<Bs&&11>=Bs),Qf=String.fromCharCode(32),Jf=!1;function Qp(t,e){switch(t){case"keyup":return yv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var zr=!1;function Ev(t,e){switch(t){case"compositionend":return Jp(e);case"keypress":return e.which!==32?null:(Jf=!0,Qf);case"textInput":return t=e.data,t===Qf&&Jf?null:t;default:return null}}function Tv(t,e){if(zr)return t==="compositionend"||!Gc&&Qp(t,e)?(t=Kp(),ha=kc=yi=null,zr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Zp&&e.locale!=="ko"?null:e.data;default:return null}}var wv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ed(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!wv[t.type]:e==="textarea"}function em(t,e,n,i){bp(i),e=Pa(e,"onChange"),0<e.length&&(n=new Bc("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Hs=null,to=null;function Av(t){fm(t,0)}function Qa(t){var e=Hr(t);if(Tp(e))return t}function Rv(t,e){if(t==="change")return e}var tm=!1;if(oi){var Ll;if(oi){var Pl="oninput"in document;if(!Pl){var td=document.createElement("div");td.setAttribute("oninput","return;"),Pl=typeof td.oninput=="function"}Ll=Pl}else Ll=!1;tm=Ll&&(!document.documentMode||9<document.documentMode)}function nd(){Hs&&(Hs.detachEvent("onpropertychange",nm),to=Hs=null)}function nm(t){if(t.propertyName==="value"&&Qa(to)){var e=[];em(e,to,t,Ic(t)),Np(Av,e)}}function Cv(t,e,n){t==="focusin"?(nd(),Hs=e,to=n,Hs.attachEvent("onpropertychange",nm)):t==="focusout"&&nd()}function Lv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Qa(to)}function Pv(t,e){if(t==="click")return Qa(e)}function bv(t,e){if(t==="input"||t==="change")return Qa(e)}function Uv(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Dn=typeof Object.is=="function"?Object.is:Uv;function no(t,e){if(Dn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Eu.call(e,r)||!Dn(t[r],e[r]))return!1}return!0}function id(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function rd(t,e){var n=id(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=id(n)}}function im(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?im(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function rm(){for(var t=window,e=Ea();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ea(t.document)}return e}function Vc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Dv(t){var e=rm(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&im(n.ownerDocument.documentElement,n)){if(i!==null&&Vc(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=rd(n,s);var o=rd(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Iv=oi&&"documentMode"in document&&11>=document.documentMode,kr=null,Gu=null,Gs=null,Vu=!1;function sd(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vu||kr==null||kr!==Ea(i)||(i=kr,"selectionStart"in i&&Vc(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Gs&&no(Gs,i)||(Gs=i,i=Pa(Gu,"onSelect"),0<i.length&&(e=new Bc("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=kr)))}function Io(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Br={animationend:Io("Animation","AnimationEnd"),animationiteration:Io("Animation","AnimationIteration"),animationstart:Io("Animation","AnimationStart"),transitionend:Io("Transition","TransitionEnd")},bl={},sm={};oi&&(sm=document.createElement("div").style,"AnimationEvent"in window||(delete Br.animationend.animation,delete Br.animationiteration.animation,delete Br.animationstart.animation),"TransitionEvent"in window||delete Br.transitionend.transition);function Ja(t){if(bl[t])return bl[t];if(!Br[t])return t;var e=Br[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in sm)return bl[t]=e[n];return t}var om=Ja("animationend"),am=Ja("animationiteration"),lm=Ja("animationstart"),um=Ja("transitionend"),cm=new Map,od="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ki(t,e){cm.set(t,e),gr(e,[t])}for(var Ul=0;Ul<od.length;Ul++){var Dl=od[Ul],Nv=Dl.toLowerCase(),Fv=Dl[0].toUpperCase()+Dl.slice(1);ki(Nv,"on"+Fv)}ki(om,"onAnimationEnd");ki(am,"onAnimationIteration");ki(lm,"onAnimationStart");ki("dblclick","onDoubleClick");ki("focusin","onFocus");ki("focusout","onBlur");ki(um,"onTransitionEnd");is("onMouseEnter",["mouseout","mouseover"]);is("onMouseLeave",["mouseout","mouseover"]);is("onPointerEnter",["pointerout","pointerover"]);is("onPointerLeave",["pointerout","pointerover"]);gr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gr("onBeforeInput",["compositionend","keypress","textInput","paste"]);gr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ov=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fs));function ad(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,N_(i,e,void 0,t),t.currentTarget=null}function fm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;ad(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;ad(r,a,u),s=l}}}if(wa)throw t=zu,wa=!1,zu=null,t}function Ye(t,e){var n=e[qu];n===void 0&&(n=e[qu]=new Set);var i=t+"__bubble";n.has(i)||(dm(e,t,2,!1),n.add(i))}function Il(t,e,n){var i=0;e&&(i|=4),dm(n,t,i,e)}var No="_reactListening"+Math.random().toString(36).slice(2);function io(t){if(!t[No]){t[No]=!0,xp.forEach(function(n){n!=="selectionchange"&&(Ov.has(n)||Il(n,!1,t),Il(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[No]||(e[No]=!0,Il("selectionchange",!1,e))}}function dm(t,e,n,i){switch($p(e)){case 1:var r=Z_;break;case 4:r=Q_;break;default:r=zc}n=r.bind(null,e,n,t),r=void 0,!Ou||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Nl(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=er(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Np(function(){var u=s,f=Ic(n),h=[];e:{var d=cm.get(t);if(d!==void 0){var _=Bc,x=t;switch(t){case"keypress":if(pa(n)===0)break e;case"keydown":case"keyup":_=hv;break;case"focusin":x="focus",_=Cl;break;case"focusout":x="blur",_=Cl;break;case"beforeblur":case"afterblur":_=Cl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=$f;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=tv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=gv;break;case om:case am:case lm:_=rv;break;case um:_=vv;break;case"scroll":_=J_;break;case"wheel":_=Sv;break;case"copy":case"cut":case"paste":_=ov;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Zf}var v=(e&4)!==0,g=!v&&t==="scroll",c=v?d!==null?d+"Capture":null:d;v=[];for(var m=u,p;m!==null;){p=m;var S=p.stateNode;if(p.tag===5&&S!==null&&(p=S,c!==null&&(S=Zs(m,c),S!=null&&v.push(ro(m,S,p)))),g)break;m=m.return}0<v.length&&(d=new _(d,x,null,n,f),h.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",d&&n!==Nu&&(x=n.relatedTarget||n.fromElement)&&(er(x)||x[ai]))break e;if((_||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,_?(x=n.relatedTarget||n.toElement,_=u,x=x?er(x):null,x!==null&&(g=_r(x),x!==g||x.tag!==5&&x.tag!==6)&&(x=null)):(_=null,x=u),_!==x)){if(v=$f,S="onMouseLeave",c="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(v=Zf,S="onPointerLeave",c="onPointerEnter",m="pointer"),g=_==null?d:Hr(_),p=x==null?d:Hr(x),d=new v(S,m+"leave",_,n,f),d.target=g,d.relatedTarget=p,S=null,er(f)===u&&(v=new v(c,m+"enter",x,n,f),v.target=p,v.relatedTarget=g,S=v),g=S,_&&x)t:{for(v=_,c=x,m=0,p=v;p;p=vr(p))m++;for(p=0,S=c;S;S=vr(S))p++;for(;0<m-p;)v=vr(v),m--;for(;0<p-m;)c=vr(c),p--;for(;m--;){if(v===c||c!==null&&v===c.alternate)break t;v=vr(v),c=vr(c)}v=null}else v=null;_!==null&&ld(h,d,_,v,!1),x!==null&&g!==null&&ld(h,g,x,v,!0)}}e:{if(d=u?Hr(u):window,_=d.nodeName&&d.nodeName.toLowerCase(),_==="select"||_==="input"&&d.type==="file")var E=Rv;else if(ed(d))if(tm)E=bv;else{E=Lv;var C=Cv}else(_=d.nodeName)&&_.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(E=Pv);if(E&&(E=E(t,u))){em(h,E,n,f);break e}C&&C(t,d,u),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&Pu(d,"number",d.value)}switch(C=u?Hr(u):window,t){case"focusin":(ed(C)||C.contentEditable==="true")&&(kr=C,Gu=u,Gs=null);break;case"focusout":Gs=Gu=kr=null;break;case"mousedown":Vu=!0;break;case"contextmenu":case"mouseup":case"dragend":Vu=!1,sd(h,n,f);break;case"selectionchange":if(Iv)break;case"keydown":case"keyup":sd(h,n,f)}var A;if(Gc)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else zr?Qp(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Zp&&n.locale!=="ko"&&(zr||P!=="onCompositionStart"?P==="onCompositionEnd"&&zr&&(A=Kp()):(yi=f,kc="value"in yi?yi.value:yi.textContent,zr=!0)),C=Pa(u,P),0<C.length&&(P=new Kf(P,t,null,n,f),h.push({event:P,listeners:C}),A?P.data=A:(A=Jp(n),A!==null&&(P.data=A)))),(A=Mv?Ev(t,n):Tv(t,n))&&(u=Pa(u,"onBeforeInput"),0<u.length&&(f=new Kf("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:u}),f.data=A))}fm(h,e)})}function ro(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Pa(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Zs(t,n),s!=null&&i.unshift(ro(t,s,r)),s=Zs(t,e),s!=null&&i.push(ro(t,s,r))),t=t.return}return i}function vr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ld(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Zs(n,s),l!=null&&o.unshift(ro(n,l,a))):r||(l=Zs(n,s),l!=null&&o.push(ro(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var zv=/\r\n?/g,kv=/\u0000|\uFFFD/g;function ud(t){return(typeof t=="string"?t:""+t).replace(zv,`
`).replace(kv,"")}function Fo(t,e,n){if(e=ud(e),ud(t)!==e&&n)throw Error(Q(425))}function ba(){}var Wu=null,Xu=null;function ju(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Yu=typeof setTimeout=="function"?setTimeout:void 0,Bv=typeof clearTimeout=="function"?clearTimeout:void 0,cd=typeof Promise=="function"?Promise:void 0,Hv=typeof queueMicrotask=="function"?queueMicrotask:typeof cd<"u"?function(t){return cd.resolve(null).then(t).catch(Gv)}:Yu;function Gv(t){setTimeout(function(){throw t})}function Fl(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),eo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);eo(e)}function Ci(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function fd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var gs=Math.random().toString(36).slice(2),zn="__reactFiber$"+gs,so="__reactProps$"+gs,ai="__reactContainer$"+gs,qu="__reactEvents$"+gs,Vv="__reactListeners$"+gs,Wv="__reactHandles$"+gs;function er(t){var e=t[zn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ai]||n[zn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=fd(t);t!==null;){if(n=t[zn])return n;t=fd(t)}return e}t=n,n=t.parentNode}return null}function vo(t){return t=t[zn]||t[ai],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Hr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Q(33))}function el(t){return t[so]||null}var $u=[],Gr=-1;function Bi(t){return{current:t}}function $e(t){0>Gr||(t.current=$u[Gr],$u[Gr]=null,Gr--)}function Xe(t,e){Gr++,$u[Gr]=t.current,t.current=e}var Oi={},It=Bi(Oi),qt=Bi(!1),ur=Oi;function rs(t,e){var n=t.type.contextTypes;if(!n)return Oi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function $t(t){return t=t.childContextTypes,t!=null}function Ua(){$e(qt),$e(It)}function dd(t,e,n){if(It.current!==Oi)throw Error(Q(168));Xe(It,e),Xe(qt,n)}function hm(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Q(108,C_(t)||"Unknown",r));return nt({},n,i)}function Da(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Oi,ur=It.current,Xe(It,t),Xe(qt,qt.current),!0}function hd(t,e,n){var i=t.stateNode;if(!i)throw Error(Q(169));n?(t=hm(t,e,ur),i.__reactInternalMemoizedMergedChildContext=t,$e(qt),$e(It),Xe(It,t)):$e(qt),Xe(qt,n)}var Jn=null,tl=!1,Ol=!1;function pm(t){Jn===null?Jn=[t]:Jn.push(t)}function Xv(t){tl=!0,pm(t)}function Hi(){if(!Ol&&Jn!==null){Ol=!0;var t=0,e=Ge;try{var n=Jn;for(Ge=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Jn=null,tl=!1}catch(r){throw Jn!==null&&(Jn=Jn.slice(t+1)),kp(Nc,Hi),r}finally{Ge=e,Ol=!1}}return null}var Vr=[],Wr=0,Ia=null,Na=0,dn=[],hn=0,cr=null,ti=1,ni="";function $i(t,e){Vr[Wr++]=Na,Vr[Wr++]=Ia,Ia=t,Na=e}function mm(t,e,n){dn[hn++]=ti,dn[hn++]=ni,dn[hn++]=cr,cr=t;var i=ti;t=ni;var r=32-bn(i)-1;i&=~(1<<r),n+=1;var s=32-bn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ti=1<<32-bn(e)+r|n<<r|i,ni=s+t}else ti=1<<s|n<<r|i,ni=t}function Wc(t){t.return!==null&&($i(t,1),mm(t,1,0))}function Xc(t){for(;t===Ia;)Ia=Vr[--Wr],Vr[Wr]=null,Na=Vr[--Wr],Vr[Wr]=null;for(;t===cr;)cr=dn[--hn],dn[hn]=null,ni=dn[--hn],dn[hn]=null,ti=dn[--hn],dn[hn]=null}var rn=null,nn=null,Ze=!1,Rn=null;function gm(t,e){var n=gn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function pd(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,rn=t,nn=Ci(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,rn=t,nn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=cr!==null?{id:ti,overflow:ni}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=gn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,rn=t,nn=null,!0):!1;default:return!1}}function Ku(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Zu(t){if(Ze){var e=nn;if(e){var n=e;if(!pd(t,e)){if(Ku(t))throw Error(Q(418));e=Ci(n.nextSibling);var i=rn;e&&pd(t,e)?gm(i,n):(t.flags=t.flags&-4097|2,Ze=!1,rn=t)}}else{if(Ku(t))throw Error(Q(418));t.flags=t.flags&-4097|2,Ze=!1,rn=t}}}function md(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;rn=t}function Oo(t){if(t!==rn)return!1;if(!Ze)return md(t),Ze=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ju(t.type,t.memoizedProps)),e&&(e=nn)){if(Ku(t))throw _m(),Error(Q(418));for(;e;)gm(t,e),e=Ci(e.nextSibling)}if(md(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Q(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){nn=Ci(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}nn=null}}else nn=rn?Ci(t.stateNode.nextSibling):null;return!0}function _m(){for(var t=nn;t;)t=Ci(t.nextSibling)}function ss(){nn=rn=null,Ze=!1}function jc(t){Rn===null?Rn=[t]:Rn.push(t)}var jv=ci.ReactCurrentBatchConfig;function wn(t,e){if(t&&t.defaultProps){e=nt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Fa=Bi(null),Oa=null,Xr=null,Yc=null;function qc(){Yc=Xr=Oa=null}function $c(t){var e=Fa.current;$e(Fa),t._currentValue=e}function Qu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Jr(t,e){Oa=t,Yc=Xr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Yt=!0),t.firstContext=null)}function vn(t){var e=t._currentValue;if(Yc!==t)if(t={context:t,memoizedValue:e,next:null},Xr===null){if(Oa===null)throw Error(Q(308));Xr=t,Oa.dependencies={lanes:0,firstContext:t}}else Xr=Xr.next=t;return e}var tr=null;function Kc(t){tr===null?tr=[t]:tr.push(t)}function vm(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Kc(e)):(n.next=r.next,r.next=n),e.interleaved=n,li(t,i)}function li(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var vi=!1;function Zc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xm(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function si(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Li(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,ze&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,li(t,n)}return r=i.interleaved,r===null?(e.next=e,Kc(i)):(e.next=r.next,r.next=e),i.interleaved=e,li(t,n)}function ma(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Fc(t,n)}}function gd(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function za(t,e,n,i){var r=t.updateQueue;vi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,f=u=l=null,a=s;do{var d=a.lane,_=a.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,v=a;switch(d=e,_=n,v.tag){case 1:if(x=v.payload,typeof x=="function"){h=x.call(_,h,d);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=v.payload,d=typeof x=="function"?x.call(_,h,d):x,d==null)break e;h=nt({},h,d);break e;case 2:vi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else _={eventTime:_,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=_,l=h):f=f.next=_,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(1);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);dr|=o,t.lanes=o,t.memoizedState=h}}function _d(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(Q(191,r));r.call(i)}}}var Sm=new vp.Component().refs;function Ju(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:nt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var nl={isMounted:function(t){return(t=t._reactInternals)?_r(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Bt(),r=bi(t),s=si(i,r);s.payload=e,n!=null&&(s.callback=n),e=Li(t,s,r),e!==null&&(Un(e,t,r,i),ma(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Bt(),r=bi(t),s=si(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Li(t,s,r),e!==null&&(Un(e,t,r,i),ma(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Bt(),i=bi(t),r=si(n,i);r.tag=2,e!=null&&(r.callback=e),e=Li(t,r,i),e!==null&&(Un(e,t,i,n),ma(e,t,i))}};function vd(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!no(n,i)||!no(r,s):!0}function ym(t,e,n){var i=!1,r=Oi,s=e.contextType;return typeof s=="object"&&s!==null?s=vn(s):(r=$t(e)?ur:It.current,i=e.contextTypes,s=(i=i!=null)?rs(t,r):Oi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=nl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function xd(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&nl.enqueueReplaceState(e,e.state,null)}function ec(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=Sm,Zc(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=vn(s):(s=$t(e)?ur:It.current,r.context=rs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ju(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&nl.enqueueReplaceState(r,r.state,null),za(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ws(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Q(309));var i=n.stateNode}if(!i)throw Error(Q(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===Sm&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(Q(284));if(!n._owner)throw Error(Q(290,t))}return t}function zo(t,e){throw t=Object.prototype.toString.call(e),Error(Q(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Sd(t){var e=t._init;return e(t._payload)}function Mm(t){function e(c,m){if(t){var p=c.deletions;p===null?(c.deletions=[m],c.flags|=16):p.push(m)}}function n(c,m){if(!t)return null;for(;m!==null;)e(c,m),m=m.sibling;return null}function i(c,m){for(c=new Map;m!==null;)m.key!==null?c.set(m.key,m):c.set(m.index,m),m=m.sibling;return c}function r(c,m){return c=Ui(c,m),c.index=0,c.sibling=null,c}function s(c,m,p){return c.index=p,t?(p=c.alternate,p!==null?(p=p.index,p<m?(c.flags|=2,m):p):(c.flags|=2,m)):(c.flags|=1048576,m)}function o(c){return t&&c.alternate===null&&(c.flags|=2),c}function a(c,m,p,S){return m===null||m.tag!==6?(m=Wl(p,c.mode,S),m.return=c,m):(m=r(m,p),m.return=c,m)}function l(c,m,p,S){var E=p.type;return E===Or?f(c,m,p.props.children,S,p.key):m!==null&&(m.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===_i&&Sd(E)===m.type)?(S=r(m,p.props),S.ref=ws(c,m,p),S.return=c,S):(S=ya(p.type,p.key,p.props,null,c.mode,S),S.ref=ws(c,m,p),S.return=c,S)}function u(c,m,p,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==p.containerInfo||m.stateNode.implementation!==p.implementation?(m=Xl(p,c.mode,S),m.return=c,m):(m=r(m,p.children||[]),m.return=c,m)}function f(c,m,p,S,E){return m===null||m.tag!==7?(m=rr(p,c.mode,S,E),m.return=c,m):(m=r(m,p),m.return=c,m)}function h(c,m,p){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Wl(""+m,c.mode,p),m.return=c,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ro:return p=ya(m.type,m.key,m.props,null,c.mode,p),p.ref=ws(c,null,m),p.return=c,p;case Fr:return m=Xl(m,c.mode,p),m.return=c,m;case _i:var S=m._init;return h(c,S(m._payload),p)}if(Is(m)||Ss(m))return m=rr(m,c.mode,p,null),m.return=c,m;zo(c,m)}return null}function d(c,m,p,S){var E=m!==null?m.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return E!==null?null:a(c,m,""+p,S);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ro:return p.key===E?l(c,m,p,S):null;case Fr:return p.key===E?u(c,m,p,S):null;case _i:return E=p._init,d(c,m,E(p._payload),S)}if(Is(p)||Ss(p))return E!==null?null:f(c,m,p,S,null);zo(c,p)}return null}function _(c,m,p,S,E){if(typeof S=="string"&&S!==""||typeof S=="number")return c=c.get(p)||null,a(m,c,""+S,E);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ro:return c=c.get(S.key===null?p:S.key)||null,l(m,c,S,E);case Fr:return c=c.get(S.key===null?p:S.key)||null,u(m,c,S,E);case _i:var C=S._init;return _(c,m,p,C(S._payload),E)}if(Is(S)||Ss(S))return c=c.get(p)||null,f(m,c,S,E,null);zo(m,S)}return null}function x(c,m,p,S){for(var E=null,C=null,A=m,P=m=0,y=null;A!==null&&P<p.length;P++){A.index>P?(y=A,A=null):y=A.sibling;var T=d(c,A,p[P],S);if(T===null){A===null&&(A=y);break}t&&A&&T.alternate===null&&e(c,A),m=s(T,m,P),C===null?E=T:C.sibling=T,C=T,A=y}if(P===p.length)return n(c,A),Ze&&$i(c,P),E;if(A===null){for(;P<p.length;P++)A=h(c,p[P],S),A!==null&&(m=s(A,m,P),C===null?E=A:C.sibling=A,C=A);return Ze&&$i(c,P),E}for(A=i(c,A);P<p.length;P++)y=_(A,c,P,p[P],S),y!==null&&(t&&y.alternate!==null&&A.delete(y.key===null?P:y.key),m=s(y,m,P),C===null?E=y:C.sibling=y,C=y);return t&&A.forEach(function($){return e(c,$)}),Ze&&$i(c,P),E}function v(c,m,p,S){var E=Ss(p);if(typeof E!="function")throw Error(Q(150));if(p=E.call(p),p==null)throw Error(Q(151));for(var C=E=null,A=m,P=m=0,y=null,T=p.next();A!==null&&!T.done;P++,T=p.next()){A.index>P?(y=A,A=null):y=A.sibling;var $=d(c,A,T.value,S);if($===null){A===null&&(A=y);break}t&&A&&$.alternate===null&&e(c,A),m=s($,m,P),C===null?E=$:C.sibling=$,C=$,A=y}if(T.done)return n(c,A),Ze&&$i(c,P),E;if(A===null){for(;!T.done;P++,T=p.next())T=h(c,T.value,S),T!==null&&(m=s(T,m,P),C===null?E=T:C.sibling=T,C=T);return Ze&&$i(c,P),E}for(A=i(c,A);!T.done;P++,T=p.next())T=_(A,c,P,T.value,S),T!==null&&(t&&T.alternate!==null&&A.delete(T.key===null?P:T.key),m=s(T,m,P),C===null?E=T:C.sibling=T,C=T);return t&&A.forEach(function(K){return e(c,K)}),Ze&&$i(c,P),E}function g(c,m,p,S){if(typeof p=="object"&&p!==null&&p.type===Or&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Ro:e:{for(var E=p.key,C=m;C!==null;){if(C.key===E){if(E=p.type,E===Or){if(C.tag===7){n(c,C.sibling),m=r(C,p.props.children),m.return=c,c=m;break e}}else if(C.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===_i&&Sd(E)===C.type){n(c,C.sibling),m=r(C,p.props),m.ref=ws(c,C,p),m.return=c,c=m;break e}n(c,C);break}else e(c,C);C=C.sibling}p.type===Or?(m=rr(p.props.children,c.mode,S,p.key),m.return=c,c=m):(S=ya(p.type,p.key,p.props,null,c.mode,S),S.ref=ws(c,m,p),S.return=c,c=S)}return o(c);case Fr:e:{for(C=p.key;m!==null;){if(m.key===C)if(m.tag===4&&m.stateNode.containerInfo===p.containerInfo&&m.stateNode.implementation===p.implementation){n(c,m.sibling),m=r(m,p.children||[]),m.return=c,c=m;break e}else{n(c,m);break}else e(c,m);m=m.sibling}m=Xl(p,c.mode,S),m.return=c,c=m}return o(c);case _i:return C=p._init,g(c,m,C(p._payload),S)}if(Is(p))return x(c,m,p,S);if(Ss(p))return v(c,m,p,S);zo(c,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,m!==null&&m.tag===6?(n(c,m.sibling),m=r(m,p),m.return=c,c=m):(n(c,m),m=Wl(p,c.mode,S),m.return=c,c=m),o(c)):n(c,m)}return g}var os=Mm(!0),Em=Mm(!1),xo={},Bn=Bi(xo),oo=Bi(xo),ao=Bi(xo);function nr(t){if(t===xo)throw Error(Q(174));return t}function Qc(t,e){switch(Xe(ao,e),Xe(oo,t),Xe(Bn,xo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Uu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Uu(e,t)}$e(Bn),Xe(Bn,e)}function as(){$e(Bn),$e(oo),$e(ao)}function Tm(t){nr(ao.current);var e=nr(Bn.current),n=Uu(e,t.type);e!==n&&(Xe(oo,t),Xe(Bn,n))}function Jc(t){oo.current===t&&($e(Bn),$e(oo))}var et=Bi(0);function ka(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var zl=[];function ef(){for(var t=0;t<zl.length;t++)zl[t]._workInProgressVersionPrimary=null;zl.length=0}var ga=ci.ReactCurrentDispatcher,kl=ci.ReactCurrentBatchConfig,fr=0,tt=null,ht=null,xt=null,Ba=!1,Vs=!1,lo=0,Yv=0;function Lt(){throw Error(Q(321))}function tf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Dn(t[n],e[n]))return!1;return!0}function nf(t,e,n,i,r,s){if(fr=s,tt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ga.current=t===null||t.memoizedState===null?Zv:Qv,t=n(i,r),Vs){s=0;do{if(Vs=!1,lo=0,25<=s)throw Error(Q(301));s+=1,xt=ht=null,e.updateQueue=null,ga.current=Jv,t=n(i,r)}while(Vs)}if(ga.current=Ha,e=ht!==null&&ht.next!==null,fr=0,xt=ht=tt=null,Ba=!1,e)throw Error(Q(300));return t}function rf(){var t=lo!==0;return lo=0,t}function Fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xt===null?tt.memoizedState=xt=t:xt=xt.next=t,xt}function xn(){if(ht===null){var t=tt.alternate;t=t!==null?t.memoizedState:null}else t=ht.next;var e=xt===null?tt.memoizedState:xt.next;if(e!==null)xt=e,ht=t;else{if(t===null)throw Error(Q(310));ht=t,t={memoizedState:ht.memoizedState,baseState:ht.baseState,baseQueue:ht.baseQueue,queue:ht.queue,next:null},xt===null?tt.memoizedState=xt=t:xt=xt.next=t}return xt}function uo(t,e){return typeof e=="function"?e(t):e}function Bl(t){var e=xn(),n=e.queue;if(n===null)throw Error(Q(311));n.lastRenderedReducer=t;var i=ht,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var f=u.lane;if((fr&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,tt.lanes|=f,dr|=f}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Dn(i,e.memoizedState)||(Yt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,tt.lanes|=s,dr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Hl(t){var e=xn(),n=e.queue;if(n===null)throw Error(Q(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Dn(s,e.memoizedState)||(Yt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function wm(){}function Am(t,e){var n=tt,i=xn(),r=e(),s=!Dn(i.memoizedState,r);if(s&&(i.memoizedState=r,Yt=!0),i=i.queue,sf(Lm.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||xt!==null&&xt.memoizedState.tag&1){if(n.flags|=2048,co(9,Cm.bind(null,n,i,r,e),void 0,null),St===null)throw Error(Q(349));fr&30||Rm(n,e,r)}return r}function Rm(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=tt.updateQueue,e===null?(e={lastEffect:null,stores:null},tt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Cm(t,e,n,i){e.value=n,e.getSnapshot=i,Pm(e)&&bm(t)}function Lm(t,e,n){return n(function(){Pm(e)&&bm(t)})}function Pm(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Dn(t,n)}catch{return!0}}function bm(t){var e=li(t,1);e!==null&&Un(e,t,1,-1)}function yd(t){var e=Fn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:uo,lastRenderedState:t},e.queue=t,t=t.dispatch=Kv.bind(null,tt,t),[e.memoizedState,t]}function co(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=tt.updateQueue,e===null?(e={lastEffect:null,stores:null},tt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Um(){return xn().memoizedState}function _a(t,e,n,i){var r=Fn();tt.flags|=t,r.memoizedState=co(1|e,n,void 0,i===void 0?null:i)}function il(t,e,n,i){var r=xn();i=i===void 0?null:i;var s=void 0;if(ht!==null){var o=ht.memoizedState;if(s=o.destroy,i!==null&&tf(i,o.deps)){r.memoizedState=co(e,n,s,i);return}}tt.flags|=t,r.memoizedState=co(1|e,n,s,i)}function Md(t,e){return _a(8390656,8,t,e)}function sf(t,e){return il(2048,8,t,e)}function Dm(t,e){return il(4,2,t,e)}function Im(t,e){return il(4,4,t,e)}function Nm(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Fm(t,e,n){return n=n!=null?n.concat([t]):null,il(4,4,Nm.bind(null,e,t),n)}function of(){}function Om(t,e){var n=xn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&tf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function zm(t,e){var n=xn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&tf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function km(t,e,n){return fr&21?(Dn(n,e)||(n=Gp(),tt.lanes|=n,dr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Yt=!0),t.memoizedState=n)}function qv(t,e){var n=Ge;Ge=n!==0&&4>n?n:4,t(!0);var i=kl.transition;kl.transition={};try{t(!1),e()}finally{Ge=n,kl.transition=i}}function Bm(){return xn().memoizedState}function $v(t,e,n){var i=bi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Hm(t))Gm(e,n);else if(n=vm(t,e,n,i),n!==null){var r=Bt();Un(n,t,i,r),Vm(n,e,i)}}function Kv(t,e,n){var i=bi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Hm(t))Gm(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Dn(a,o)){var l=e.interleaved;l===null?(r.next=r,Kc(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=vm(t,e,r,i),n!==null&&(r=Bt(),Un(n,t,i,r),Vm(n,e,i))}}function Hm(t){var e=t.alternate;return t===tt||e!==null&&e===tt}function Gm(t,e){Vs=Ba=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Vm(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Fc(t,n)}}var Ha={readContext:vn,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useInsertionEffect:Lt,useLayoutEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useMutableSource:Lt,useSyncExternalStore:Lt,useId:Lt,unstable_isNewReconciler:!1},Zv={readContext:vn,useCallback:function(t,e){return Fn().memoizedState=[t,e===void 0?null:e],t},useContext:vn,useEffect:Md,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,_a(4194308,4,Nm.bind(null,e,t),n)},useLayoutEffect:function(t,e){return _a(4194308,4,t,e)},useInsertionEffect:function(t,e){return _a(4,2,t,e)},useMemo:function(t,e){var n=Fn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Fn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=$v.bind(null,tt,t),[i.memoizedState,t]},useRef:function(t){var e=Fn();return t={current:t},e.memoizedState=t},useState:yd,useDebugValue:of,useDeferredValue:function(t){return Fn().memoizedState=t},useTransition:function(){var t=yd(!1),e=t[0];return t=qv.bind(null,t[1]),Fn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=tt,r=Fn();if(Ze){if(n===void 0)throw Error(Q(407));n=n()}else{if(n=e(),St===null)throw Error(Q(349));fr&30||Rm(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Md(Lm.bind(null,i,s,t),[t]),i.flags|=2048,co(9,Cm.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Fn(),e=St.identifierPrefix;if(Ze){var n=ni,i=ti;n=(i&~(1<<32-bn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=lo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Yv++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Qv={readContext:vn,useCallback:Om,useContext:vn,useEffect:sf,useImperativeHandle:Fm,useInsertionEffect:Dm,useLayoutEffect:Im,useMemo:zm,useReducer:Bl,useRef:Um,useState:function(){return Bl(uo)},useDebugValue:of,useDeferredValue:function(t){var e=xn();return km(e,ht.memoizedState,t)},useTransition:function(){var t=Bl(uo)[0],e=xn().memoizedState;return[t,e]},useMutableSource:wm,useSyncExternalStore:Am,useId:Bm,unstable_isNewReconciler:!1},Jv={readContext:vn,useCallback:Om,useContext:vn,useEffect:sf,useImperativeHandle:Fm,useInsertionEffect:Dm,useLayoutEffect:Im,useMemo:zm,useReducer:Hl,useRef:Um,useState:function(){return Hl(uo)},useDebugValue:of,useDeferredValue:function(t){var e=xn();return ht===null?e.memoizedState=t:km(e,ht.memoizedState,t)},useTransition:function(){var t=Hl(uo)[0],e=xn().memoizedState;return[t,e]},useMutableSource:wm,useSyncExternalStore:Am,useId:Bm,unstable_isNewReconciler:!1};function ls(t,e){try{var n="",i=e;do n+=R_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Gl(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function tc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var e0=typeof WeakMap=="function"?WeakMap:Map;function Wm(t,e,n){n=si(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Va||(Va=!0,fc=i),tc(t,e)},n}function Xm(t,e,n){n=si(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){tc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){tc(t,e),typeof i!="function"&&(Pi===null?Pi=new Set([this]):Pi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ed(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new e0;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=p0.bind(null,t,e,n),e.then(t,t))}function Td(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function wd(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=si(-1,1),e.tag=2,Li(n,e,1))),n.lanes|=1),t)}var t0=ci.ReactCurrentOwner,Yt=!1;function zt(t,e,n,i){e.child=t===null?Em(e,null,n,i):os(e,t.child,n,i)}function Ad(t,e,n,i,r){n=n.render;var s=e.ref;return Jr(e,r),i=nf(t,e,n,i,s,r),n=rf(),t!==null&&!Yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ui(t,e,r)):(Ze&&n&&Wc(e),e.flags|=1,zt(t,e,i,r),e.child)}function Rd(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!pf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,jm(t,e,s,i,r)):(t=ya(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:no,n(o,i)&&t.ref===e.ref)return ui(t,e,r)}return e.flags|=1,t=Ui(s,i),t.ref=e.ref,t.return=e,e.child=t}function jm(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(no(s,i)&&t.ref===e.ref)if(Yt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Yt=!0);else return e.lanes=t.lanes,ui(t,e,r)}return nc(t,e,n,i,r)}function Ym(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Xe(Yr,tn),tn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Xe(Yr,tn),tn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Xe(Yr,tn),tn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Xe(Yr,tn),tn|=i;return zt(t,e,r,n),e.child}function qm(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function nc(t,e,n,i,r){var s=$t(n)?ur:It.current;return s=rs(e,s),Jr(e,r),n=nf(t,e,n,i,s,r),i=rf(),t!==null&&!Yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,ui(t,e,r)):(Ze&&i&&Wc(e),e.flags|=1,zt(t,e,n,r),e.child)}function Cd(t,e,n,i,r){if($t(n)){var s=!0;Da(e)}else s=!1;if(Jr(e,r),e.stateNode===null)va(t,e),ym(e,n,i),ec(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=vn(u):(u=$t(n)?ur:It.current,u=rs(e,u));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&xd(e,o,i,u),vi=!1;var d=e.memoizedState;o.state=d,za(e,i,o,r),l=e.memoizedState,a!==i||d!==l||qt.current||vi?(typeof f=="function"&&(Ju(e,n,f,i),l=e.memoizedState),(a=vi||vd(e,n,a,i,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,xm(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:wn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=vn(l):(l=$t(n)?ur:It.current,l=rs(e,l));var _=n.getDerivedStateFromProps;(f=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&xd(e,o,i,l),vi=!1,d=e.memoizedState,o.state=d,za(e,i,o,r);var x=e.memoizedState;a!==h||d!==x||qt.current||vi?(typeof _=="function"&&(Ju(e,n,_,i),x=e.memoizedState),(u=vi||vd(e,n,u,i,d,x,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return ic(t,e,n,i,s,r)}function ic(t,e,n,i,r,s){qm(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&hd(e,n,!1),ui(t,e,s);i=e.stateNode,t0.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=os(e,t.child,null,s),e.child=os(e,null,a,s)):zt(t,e,a,s),e.memoizedState=i.state,r&&hd(e,n,!0),e.child}function $m(t){var e=t.stateNode;e.pendingContext?dd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&dd(t,e.context,!1),Qc(t,e.containerInfo)}function Ld(t,e,n,i,r){return ss(),jc(r),e.flags|=256,zt(t,e,n,i),e.child}var rc={dehydrated:null,treeContext:null,retryLane:0};function sc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Km(t,e,n){var i=e.pendingProps,r=et.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Xe(et,r&1),t===null)return Zu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ol(o,i,0,null),t=rr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=sc(n),e.memoizedState=rc,t):af(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return n0(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ui(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ui(a,s):(s=rr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?sc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=rc,i}return s=t.child,t=s.sibling,i=Ui(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function af(t,e){return e=ol({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ko(t,e,n,i){return i!==null&&jc(i),os(e,t.child,null,n),t=af(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function n0(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Gl(Error(Q(422))),ko(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ol({mode:"visible",children:i.children},r,0,null),s=rr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&os(e,t.child,null,o),e.child.memoizedState=sc(o),e.memoizedState=rc,s);if(!(e.mode&1))return ko(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(Q(419)),i=Gl(s,i,void 0),ko(t,e,o,i)}if(a=(o&t.childLanes)!==0,Yt||a){if(i=St,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,li(t,r),Un(i,t,r,-1))}return hf(),i=Gl(Error(Q(421))),ko(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=m0.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,nn=Ci(r.nextSibling),rn=e,Ze=!0,Rn=null,t!==null&&(dn[hn++]=ti,dn[hn++]=ni,dn[hn++]=cr,ti=t.id,ni=t.overflow,cr=e),e=af(e,i.children),e.flags|=4096,e)}function Pd(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Qu(t.return,e,n)}function Vl(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Zm(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(zt(t,e,i.children,n),i=et.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Pd(t,n,e);else if(t.tag===19)Pd(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Xe(et,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&ka(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Vl(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&ka(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Vl(e,!0,n,null,s);break;case"together":Vl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function va(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function ui(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),dr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Q(153));if(e.child!==null){for(t=e.child,n=Ui(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ui(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function i0(t,e,n){switch(e.tag){case 3:$m(e),ss();break;case 5:Tm(e);break;case 1:$t(e.type)&&Da(e);break;case 4:Qc(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Xe(Fa,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Xe(et,et.current&1),e.flags|=128,null):n&e.child.childLanes?Km(t,e,n):(Xe(et,et.current&1),t=ui(t,e,n),t!==null?t.sibling:null);Xe(et,et.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Zm(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Xe(et,et.current),i)break;return null;case 22:case 23:return e.lanes=0,Ym(t,e,n)}return ui(t,e,n)}var Qm,oc,Jm,eg;Qm=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};oc=function(){};Jm=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,nr(Bn.current);var s=null;switch(n){case"input":r=Cu(t,r),i=Cu(t,i),s=[];break;case"select":r=nt({},r,{value:void 0}),i=nt({},i,{value:void 0}),s=[];break;case"textarea":r=bu(t,r),i=bu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ba)}Du(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&($s.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&($s.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ye("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};eg=function(t,e,n,i){n!==i&&(e.flags|=4)};function As(t,e){if(!Ze)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Pt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function r0(t,e,n){var i=e.pendingProps;switch(Xc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pt(e),null;case 1:return $t(e.type)&&Ua(),Pt(e),null;case 3:return i=e.stateNode,as(),$e(qt),$e(It),ef(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Oo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Rn!==null&&(pc(Rn),Rn=null))),oc(t,e),Pt(e),null;case 5:Jc(e);var r=nr(ao.current);if(n=e.type,t!==null&&e.stateNode!=null)Jm(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Q(166));return Pt(e),null}if(t=nr(Bn.current),Oo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[zn]=e,i[so]=s,t=(e.mode&1)!==0,n){case"dialog":Ye("cancel",i),Ye("close",i);break;case"iframe":case"object":case"embed":Ye("load",i);break;case"video":case"audio":for(r=0;r<Fs.length;r++)Ye(Fs[r],i);break;case"source":Ye("error",i);break;case"img":case"image":case"link":Ye("error",i),Ye("load",i);break;case"details":Ye("toggle",i);break;case"input":kf(i,s),Ye("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Ye("invalid",i);break;case"textarea":Hf(i,s),Ye("invalid",i)}Du(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Fo(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Fo(i.textContent,a,t),r=["children",""+a]):$s.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ye("scroll",i)}switch(n){case"input":Co(i),Bf(i,s,!0);break;case"textarea":Co(i),Gf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ba)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Rp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[zn]=e,t[so]=i,Qm(t,e,!1,!1),e.stateNode=t;e:{switch(o=Iu(n,i),n){case"dialog":Ye("cancel",t),Ye("close",t),r=i;break;case"iframe":case"object":case"embed":Ye("load",t),r=i;break;case"video":case"audio":for(r=0;r<Fs.length;r++)Ye(Fs[r],t);r=i;break;case"source":Ye("error",t),r=i;break;case"img":case"image":case"link":Ye("error",t),Ye("load",t),r=i;break;case"details":Ye("toggle",t),r=i;break;case"input":kf(t,i),r=Cu(t,i),Ye("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=nt({},i,{value:void 0}),Ye("invalid",t);break;case"textarea":Hf(t,i),r=bu(t,i),Ye("invalid",t);break;default:r=i}Du(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Pp(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Cp(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ks(t,l):typeof l=="number"&&Ks(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&($s.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ye("scroll",t):l!=null&&Pc(t,s,l,o))}switch(n){case"input":Co(t),Bf(t,i,!1);break;case"textarea":Co(t),Gf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Fi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?$r(t,!!i.multiple,s,!1):i.defaultValue!=null&&$r(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ba)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Pt(e),null;case 6:if(t&&e.stateNode!=null)eg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Q(166));if(n=nr(ao.current),nr(Bn.current),Oo(e)){if(i=e.stateNode,n=e.memoizedProps,i[zn]=e,(s=i.nodeValue!==n)&&(t=rn,t!==null))switch(t.tag){case 3:Fo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Fo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[zn]=e,e.stateNode=i}return Pt(e),null;case 13:if($e(et),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ze&&nn!==null&&e.mode&1&&!(e.flags&128))_m(),ss(),e.flags|=98560,s=!1;else if(s=Oo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(Q(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Q(317));s[zn]=e}else ss(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Pt(e),s=!1}else Rn!==null&&(pc(Rn),Rn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||et.current&1?pt===0&&(pt=3):hf())),e.updateQueue!==null&&(e.flags|=4),Pt(e),null);case 4:return as(),oc(t,e),t===null&&io(e.stateNode.containerInfo),Pt(e),null;case 10:return $c(e.type._context),Pt(e),null;case 17:return $t(e.type)&&Ua(),Pt(e),null;case 19:if($e(et),s=e.memoizedState,s===null)return Pt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)As(s,!1);else{if(pt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ka(t),o!==null){for(e.flags|=128,As(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Xe(et,et.current&1|2),e.child}t=t.sibling}s.tail!==null&&ot()>us&&(e.flags|=128,i=!0,As(s,!1),e.lanes=4194304)}else{if(!i)if(t=ka(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),As(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ze)return Pt(e),null}else 2*ot()-s.renderingStartTime>us&&n!==1073741824&&(e.flags|=128,i=!0,As(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ot(),e.sibling=null,n=et.current,Xe(et,i?n&1|2:n&1),e):(Pt(e),null);case 22:case 23:return df(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?tn&1073741824&&(Pt(e),e.subtreeFlags&6&&(e.flags|=8192)):Pt(e),null;case 24:return null;case 25:return null}throw Error(Q(156,e.tag))}function s0(t,e){switch(Xc(e),e.tag){case 1:return $t(e.type)&&Ua(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return as(),$e(qt),$e(It),ef(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Jc(e),null;case 13:if($e(et),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Q(340));ss()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return $e(et),null;case 4:return as(),null;case 10:return $c(e.type._context),null;case 22:case 23:return df(),null;case 24:return null;default:return null}}var Bo=!1,Dt=!1,o0=typeof WeakSet=="function"?WeakSet:Set,ce=null;function jr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){rt(t,e,i)}else n.current=null}function ac(t,e,n){try{n()}catch(i){rt(t,e,i)}}var bd=!1;function a0(t,e){if(Wu=Ca,t=rm(),Vc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,f=0,h=t,d=null;t:for(;;){for(var _;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(_=h.firstChild)!==null;)d=h,h=_;for(;;){if(h===t)break t;if(d===n&&++u===r&&(a=o),d===s&&++f===i&&(l=o),(_=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=_}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xu={focusedElem:t,selectionRange:n},Ca=!1,ce=e;ce!==null;)if(e=ce,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ce=t;else for(;ce!==null;){e=ce;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var v=x.memoizedProps,g=x.memoizedState,c=e.stateNode,m=c.getSnapshotBeforeUpdate(e.elementType===e.type?v:wn(e.type,v),g);c.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var p=e.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Q(163))}}catch(S){rt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,ce=t;break}ce=e.return}return x=bd,bd=!1,x}function Ws(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&ac(e,n,s)}r=r.next}while(r!==i)}}function rl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function lc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function tg(t){var e=t.alternate;e!==null&&(t.alternate=null,tg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[zn],delete e[so],delete e[qu],delete e[Vv],delete e[Wv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ng(t){return t.tag===5||t.tag===3||t.tag===4}function Ud(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ng(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function uc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ba));else if(i!==4&&(t=t.child,t!==null))for(uc(t,e,n),t=t.sibling;t!==null;)uc(t,e,n),t=t.sibling}function cc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(cc(t,e,n),t=t.sibling;t!==null;)cc(t,e,n),t=t.sibling}var Mt=null,An=!1;function di(t,e,n){for(n=n.child;n!==null;)ig(t,e,n),n=n.sibling}function ig(t,e,n){if(kn&&typeof kn.onCommitFiberUnmount=="function")try{kn.onCommitFiberUnmount(Ka,n)}catch{}switch(n.tag){case 5:Dt||jr(n,e);case 6:var i=Mt,r=An;Mt=null,di(t,e,n),Mt=i,An=r,Mt!==null&&(An?(t=Mt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Mt.removeChild(n.stateNode));break;case 18:Mt!==null&&(An?(t=Mt,n=n.stateNode,t.nodeType===8?Fl(t.parentNode,n):t.nodeType===1&&Fl(t,n),eo(t)):Fl(Mt,n.stateNode));break;case 4:i=Mt,r=An,Mt=n.stateNode.containerInfo,An=!0,di(t,e,n),Mt=i,An=r;break;case 0:case 11:case 14:case 15:if(!Dt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ac(n,e,o),r=r.next}while(r!==i)}di(t,e,n);break;case 1:if(!Dt&&(jr(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){rt(n,e,a)}di(t,e,n);break;case 21:di(t,e,n);break;case 22:n.mode&1?(Dt=(i=Dt)||n.memoizedState!==null,di(t,e,n),Dt=i):di(t,e,n);break;default:di(t,e,n)}}function Dd(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new o0),e.forEach(function(i){var r=g0.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Sn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Mt=a.stateNode,An=!1;break e;case 3:Mt=a.stateNode.containerInfo,An=!0;break e;case 4:Mt=a.stateNode.containerInfo,An=!0;break e}a=a.return}if(Mt===null)throw Error(Q(160));ig(s,o,r),Mt=null,An=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){rt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)rg(e,t),e=e.sibling}function rg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Sn(e,t),Nn(t),i&4){try{Ws(3,t,t.return),rl(3,t)}catch(v){rt(t,t.return,v)}try{Ws(5,t,t.return)}catch(v){rt(t,t.return,v)}}break;case 1:Sn(e,t),Nn(t),i&512&&n!==null&&jr(n,n.return);break;case 5:if(Sn(e,t),Nn(t),i&512&&n!==null&&jr(n,n.return),t.flags&32){var r=t.stateNode;try{Ks(r,"")}catch(v){rt(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&wp(r,s),Iu(a,o);var u=Iu(a,s);for(o=0;o<l.length;o+=2){var f=l[o],h=l[o+1];f==="style"?Pp(r,h):f==="dangerouslySetInnerHTML"?Cp(r,h):f==="children"?Ks(r,h):Pc(r,f,h,u)}switch(a){case"input":Lu(r,s);break;case"textarea":Ap(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?$r(r,!!s.multiple,_,!1):d!==!!s.multiple&&(s.defaultValue!=null?$r(r,!!s.multiple,s.defaultValue,!0):$r(r,!!s.multiple,s.multiple?[]:"",!1))}r[so]=s}catch(v){rt(t,t.return,v)}}break;case 6:if(Sn(e,t),Nn(t),i&4){if(t.stateNode===null)throw Error(Q(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(v){rt(t,t.return,v)}}break;case 3:if(Sn(e,t),Nn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{eo(e.containerInfo)}catch(v){rt(t,t.return,v)}break;case 4:Sn(e,t),Nn(t);break;case 13:Sn(e,t),Nn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(cf=ot())),i&4&&Dd(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Dt=(u=Dt)||f,Sn(e,t),Dt=u):Sn(e,t),Nn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(ce=t,f=t.child;f!==null;){for(h=ce=f;ce!==null;){switch(d=ce,_=d.child,d.tag){case 0:case 11:case 14:case 15:Ws(4,d,d.return);break;case 1:jr(d,d.return);var x=d.stateNode;if(typeof x.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(v){rt(i,n,v)}}break;case 5:jr(d,d.return);break;case 22:if(d.memoizedState!==null){Nd(h);continue}}_!==null?(_.return=d,ce=_):Nd(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Lp("display",o))}catch(v){rt(t,t.return,v)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){rt(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Sn(e,t),Nn(t),i&4&&Dd(t);break;case 21:break;default:Sn(e,t),Nn(t)}}function Nn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ng(n)){var i=n;break e}n=n.return}throw Error(Q(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ks(r,""),i.flags&=-33);var s=Ud(t);cc(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Ud(t);uc(t,a,o);break;default:throw Error(Q(161))}}catch(l){rt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function l0(t,e,n){ce=t,sg(t)}function sg(t,e,n){for(var i=(t.mode&1)!==0;ce!==null;){var r=ce,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Bo;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Dt;a=Bo;var u=Dt;if(Bo=o,(Dt=l)&&!u)for(ce=r;ce!==null;)o=ce,l=o.child,o.tag===22&&o.memoizedState!==null?Fd(r):l!==null?(l.return=o,ce=l):Fd(r);for(;s!==null;)ce=s,sg(s),s=s.sibling;ce=r,Bo=a,Dt=u}Id(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ce=s):Id(t)}}function Id(t){for(;ce!==null;){var e=ce;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Dt||rl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Dt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:wn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&_d(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}_d(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&eo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Q(163))}Dt||e.flags&512&&lc(e)}catch(d){rt(e,e.return,d)}}if(e===t){ce=null;break}if(n=e.sibling,n!==null){n.return=e.return,ce=n;break}ce=e.return}}function Nd(t){for(;ce!==null;){var e=ce;if(e===t){ce=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ce=n;break}ce=e.return}}function Fd(t){for(;ce!==null;){var e=ce;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{rl(4,e)}catch(l){rt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){rt(e,r,l)}}var s=e.return;try{lc(e)}catch(l){rt(e,s,l)}break;case 5:var o=e.return;try{lc(e)}catch(l){rt(e,o,l)}}}catch(l){rt(e,e.return,l)}if(e===t){ce=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ce=a;break}ce=e.return}}var u0=Math.ceil,Ga=ci.ReactCurrentDispatcher,lf=ci.ReactCurrentOwner,_n=ci.ReactCurrentBatchConfig,ze=0,St=null,ft=null,Tt=0,tn=0,Yr=Bi(0),pt=0,fo=null,dr=0,sl=0,uf=0,Xs=null,Xt=null,cf=0,us=1/0,Qn=null,Va=!1,fc=null,Pi=null,Ho=!1,Mi=null,Wa=0,js=0,dc=null,xa=-1,Sa=0;function Bt(){return ze&6?ot():xa!==-1?xa:xa=ot()}function bi(t){return t.mode&1?ze&2&&Tt!==0?Tt&-Tt:jv.transition!==null?(Sa===0&&(Sa=Gp()),Sa):(t=Ge,t!==0||(t=window.event,t=t===void 0?16:$p(t.type)),t):1}function Un(t,e,n,i){if(50<js)throw js=0,dc=null,Error(Q(185));go(t,n,i),(!(ze&2)||t!==St)&&(t===St&&(!(ze&2)&&(sl|=n),pt===4&&Si(t,Tt)),Kt(t,i),n===1&&ze===0&&!(e.mode&1)&&(us=ot()+500,tl&&Hi()))}function Kt(t,e){var n=t.callbackNode;j_(t,e);var i=Ra(t,t===St?Tt:0);if(i===0)n!==null&&Xf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Xf(n),e===1)t.tag===0?Xv(Od.bind(null,t)):pm(Od.bind(null,t)),Hv(function(){!(ze&6)&&Hi()}),n=null;else{switch(Vp(i)){case 1:n=Nc;break;case 4:n=Bp;break;case 16:n=Aa;break;case 536870912:n=Hp;break;default:n=Aa}n=hg(n,og.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function og(t,e){if(xa=-1,Sa=0,ze&6)throw Error(Q(327));var n=t.callbackNode;if(es()&&t.callbackNode!==n)return null;var i=Ra(t,t===St?Tt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Xa(t,i);else{e=i;var r=ze;ze|=2;var s=lg();(St!==t||Tt!==e)&&(Qn=null,us=ot()+500,ir(t,e));do try{d0();break}catch(a){ag(t,a)}while(1);qc(),Ga.current=s,ze=r,ft!==null?e=0:(St=null,Tt=0,e=pt)}if(e!==0){if(e===2&&(r=ku(t),r!==0&&(i=r,e=hc(t,r))),e===1)throw n=fo,ir(t,0),Si(t,i),Kt(t,ot()),n;if(e===6)Si(t,i);else{if(r=t.current.alternate,!(i&30)&&!c0(r)&&(e=Xa(t,i),e===2&&(s=ku(t),s!==0&&(i=s,e=hc(t,s))),e===1))throw n=fo,ir(t,0),Si(t,i),Kt(t,ot()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(Q(345));case 2:Ki(t,Xt,Qn);break;case 3:if(Si(t,i),(i&130023424)===i&&(e=cf+500-ot(),10<e)){if(Ra(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Bt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Yu(Ki.bind(null,t,Xt,Qn),e);break}Ki(t,Xt,Qn);break;case 4:if(Si(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-bn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=ot()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*u0(i/1960))-i,10<i){t.timeoutHandle=Yu(Ki.bind(null,t,Xt,Qn),i);break}Ki(t,Xt,Qn);break;case 5:Ki(t,Xt,Qn);break;default:throw Error(Q(329))}}}return Kt(t,ot()),t.callbackNode===n?og.bind(null,t):null}function hc(t,e){var n=Xs;return t.current.memoizedState.isDehydrated&&(ir(t,e).flags|=256),t=Xa(t,e),t!==2&&(e=Xt,Xt=n,e!==null&&pc(e)),t}function pc(t){Xt===null?Xt=t:Xt.push.apply(Xt,t)}function c0(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Dn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Si(t,e){for(e&=~uf,e&=~sl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-bn(e),i=1<<n;t[n]=-1,e&=~i}}function Od(t){if(ze&6)throw Error(Q(327));es();var e=Ra(t,0);if(!(e&1))return Kt(t,ot()),null;var n=Xa(t,e);if(t.tag!==0&&n===2){var i=ku(t);i!==0&&(e=i,n=hc(t,i))}if(n===1)throw n=fo,ir(t,0),Si(t,e),Kt(t,ot()),n;if(n===6)throw Error(Q(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ki(t,Xt,Qn),Kt(t,ot()),null}function ff(t,e){var n=ze;ze|=1;try{return t(e)}finally{ze=n,ze===0&&(us=ot()+500,tl&&Hi())}}function hr(t){Mi!==null&&Mi.tag===0&&!(ze&6)&&es();var e=ze;ze|=1;var n=_n.transition,i=Ge;try{if(_n.transition=null,Ge=1,t)return t()}finally{Ge=i,_n.transition=n,ze=e,!(ze&6)&&Hi()}}function df(){tn=Yr.current,$e(Yr)}function ir(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Bv(n)),ft!==null)for(n=ft.return;n!==null;){var i=n;switch(Xc(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ua();break;case 3:as(),$e(qt),$e(It),ef();break;case 5:Jc(i);break;case 4:as();break;case 13:$e(et);break;case 19:$e(et);break;case 10:$c(i.type._context);break;case 22:case 23:df()}n=n.return}if(St=t,ft=t=Ui(t.current,null),Tt=tn=e,pt=0,fo=null,uf=sl=dr=0,Xt=Xs=null,tr!==null){for(e=0;e<tr.length;e++)if(n=tr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}tr=null}return t}function ag(t,e){do{var n=ft;try{if(qc(),ga.current=Ha,Ba){for(var i=tt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ba=!1}if(fr=0,xt=ht=tt=null,Vs=!1,lo=0,lf.current=null,n===null||n.return===null){pt=1,fo=e,ft=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Tt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var _=Td(o);if(_!==null){_.flags&=-257,wd(_,o,a,s,e),_.mode&1&&Ed(s,u,e),e=_,l=u;var x=e.updateQueue;if(x===null){var v=new Set;v.add(l),e.updateQueue=v}else x.add(l);break e}else{if(!(e&1)){Ed(s,u,e),hf();break e}l=Error(Q(426))}}else if(Ze&&a.mode&1){var g=Td(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),wd(g,o,a,s,e),jc(ls(l,a));break e}}s=l=ls(l,a),pt!==4&&(pt=2),Xs===null?Xs=[s]:Xs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var c=Wm(s,l,e);gd(s,c);break e;case 1:a=l;var m=s.type,p=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Pi===null||!Pi.has(p)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Xm(s,a,e);gd(s,S);break e}}s=s.return}while(s!==null)}cg(n)}catch(E){e=E,ft===n&&n!==null&&(ft=n=n.return);continue}break}while(1)}function lg(){var t=Ga.current;return Ga.current=Ha,t===null?Ha:t}function hf(){(pt===0||pt===3||pt===2)&&(pt=4),St===null||!(dr&268435455)&&!(sl&268435455)||Si(St,Tt)}function Xa(t,e){var n=ze;ze|=2;var i=lg();(St!==t||Tt!==e)&&(Qn=null,ir(t,e));do try{f0();break}catch(r){ag(t,r)}while(1);if(qc(),ze=n,Ga.current=i,ft!==null)throw Error(Q(261));return St=null,Tt=0,pt}function f0(){for(;ft!==null;)ug(ft)}function d0(){for(;ft!==null&&!O_();)ug(ft)}function ug(t){var e=dg(t.alternate,t,tn);t.memoizedProps=t.pendingProps,e===null?cg(t):ft=e,lf.current=null}function cg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=s0(n,e),n!==null){n.flags&=32767,ft=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{pt=6,ft=null;return}}else if(n=r0(n,e,tn),n!==null){ft=n;return}if(e=e.sibling,e!==null){ft=e;return}ft=e=t}while(e!==null);pt===0&&(pt=5)}function Ki(t,e,n){var i=Ge,r=_n.transition;try{_n.transition=null,Ge=1,h0(t,e,n,i)}finally{_n.transition=r,Ge=i}return null}function h0(t,e,n,i){do es();while(Mi!==null);if(ze&6)throw Error(Q(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Q(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Y_(t,s),t===St&&(ft=St=null,Tt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ho||(Ho=!0,hg(Aa,function(){return es(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=_n.transition,_n.transition=null;var o=Ge;Ge=1;var a=ze;ze|=4,lf.current=null,a0(t,n),rg(n,t),Dv(Xu),Ca=!!Wu,Xu=Wu=null,t.current=n,l0(n),z_(),ze=a,Ge=o,_n.transition=s}else t.current=n;if(Ho&&(Ho=!1,Mi=t,Wa=r),s=t.pendingLanes,s===0&&(Pi=null),H_(n.stateNode),Kt(t,ot()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Va)throw Va=!1,t=fc,fc=null,t;return Wa&1&&t.tag!==0&&es(),s=t.pendingLanes,s&1?t===dc?js++:(js=0,dc=t):js=0,Hi(),null}function es(){if(Mi!==null){var t=Vp(Wa),e=_n.transition,n=Ge;try{if(_n.transition=null,Ge=16>t?16:t,Mi===null)var i=!1;else{if(t=Mi,Mi=null,Wa=0,ze&6)throw Error(Q(331));var r=ze;for(ze|=4,ce=t.current;ce!==null;){var s=ce,o=s.child;if(ce.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(ce=u;ce!==null;){var f=ce;switch(f.tag){case 0:case 11:case 15:Ws(8,f,s)}var h=f.child;if(h!==null)h.return=f,ce=h;else for(;ce!==null;){f=ce;var d=f.sibling,_=f.return;if(tg(f),f===u){ce=null;break}if(d!==null){d.return=_,ce=d;break}ce=_}}}var x=s.alternate;if(x!==null){var v=x.child;if(v!==null){x.child=null;do{var g=v.sibling;v.sibling=null,v=g}while(v!==null)}}ce=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ce=o;else e:for(;ce!==null;){if(s=ce,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ws(9,s,s.return)}var c=s.sibling;if(c!==null){c.return=s.return,ce=c;break e}ce=s.return}}var m=t.current;for(ce=m;ce!==null;){o=ce;var p=o.child;if(o.subtreeFlags&2064&&p!==null)p.return=o,ce=p;else e:for(o=m;ce!==null;){if(a=ce,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:rl(9,a)}}catch(E){rt(a,a.return,E)}if(a===o){ce=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,ce=S;break e}ce=a.return}}if(ze=r,Hi(),kn&&typeof kn.onPostCommitFiberRoot=="function")try{kn.onPostCommitFiberRoot(Ka,t)}catch{}i=!0}return i}finally{Ge=n,_n.transition=e}}return!1}function zd(t,e,n){e=ls(n,e),e=Wm(t,e,1),t=Li(t,e,1),e=Bt(),t!==null&&(go(t,1,e),Kt(t,e))}function rt(t,e,n){if(t.tag===3)zd(t,t,n);else for(;e!==null;){if(e.tag===3){zd(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Pi===null||!Pi.has(i))){t=ls(n,t),t=Xm(e,t,1),e=Li(e,t,1),t=Bt(),e!==null&&(go(e,1,t),Kt(e,t));break}}e=e.return}}function p0(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Bt(),t.pingedLanes|=t.suspendedLanes&n,St===t&&(Tt&n)===n&&(pt===4||pt===3&&(Tt&130023424)===Tt&&500>ot()-cf?ir(t,0):uf|=n),Kt(t,e)}function fg(t,e){e===0&&(t.mode&1?(e=bo,bo<<=1,!(bo&130023424)&&(bo=4194304)):e=1);var n=Bt();t=li(t,e),t!==null&&(go(t,e,n),Kt(t,n))}function m0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),fg(t,n)}function g0(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(Q(314))}i!==null&&i.delete(e),fg(t,n)}var dg;dg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||qt.current)Yt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Yt=!1,i0(t,e,n);Yt=!!(t.flags&131072)}else Yt=!1,Ze&&e.flags&1048576&&mm(e,Na,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;va(t,e),t=e.pendingProps;var r=rs(e,It.current);Jr(e,n),r=nf(null,e,i,t,r,n);var s=rf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,$t(i)?(s=!0,Da(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Zc(e),r.updater=nl,e.stateNode=r,r._reactInternals=e,ec(e,i,t,n),e=ic(null,e,i,!0,s,n)):(e.tag=0,Ze&&s&&Wc(e),zt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(va(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=v0(i),t=wn(i,t),r){case 0:e=nc(null,e,i,t,n);break e;case 1:e=Cd(null,e,i,t,n);break e;case 11:e=Ad(null,e,i,t,n);break e;case 14:e=Rd(null,e,i,wn(i.type,t),n);break e}throw Error(Q(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:wn(i,r),nc(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:wn(i,r),Cd(t,e,i,r,n);case 3:e:{if($m(e),t===null)throw Error(Q(387));i=e.pendingProps,s=e.memoizedState,r=s.element,xm(t,e),za(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ls(Error(Q(423)),e),e=Ld(t,e,i,n,r);break e}else if(i!==r){r=ls(Error(Q(424)),e),e=Ld(t,e,i,n,r);break e}else for(nn=Ci(e.stateNode.containerInfo.firstChild),rn=e,Ze=!0,Rn=null,n=Em(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ss(),i===r){e=ui(t,e,n);break e}zt(t,e,i,n)}e=e.child}return e;case 5:return Tm(e),t===null&&Zu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,ju(i,r)?o=null:s!==null&&ju(i,s)&&(e.flags|=32),qm(t,e),zt(t,e,o,n),e.child;case 6:return t===null&&Zu(e),null;case 13:return Km(t,e,n);case 4:return Qc(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=os(e,null,i,n):zt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:wn(i,r),Ad(t,e,i,r,n);case 7:return zt(t,e,e.pendingProps,n),e.child;case 8:return zt(t,e,e.pendingProps.children,n),e.child;case 12:return zt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Xe(Fa,i._currentValue),i._currentValue=o,s!==null)if(Dn(s.value,o)){if(s.children===r.children&&!qt.current){e=ui(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=si(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Qu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Q(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Qu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}zt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Jr(e,n),r=vn(r),i=i(r),e.flags|=1,zt(t,e,i,n),e.child;case 14:return i=e.type,r=wn(i,e.pendingProps),r=wn(i.type,r),Rd(t,e,i,r,n);case 15:return jm(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:wn(i,r),va(t,e),e.tag=1,$t(i)?(t=!0,Da(e)):t=!1,Jr(e,n),ym(e,i,r),ec(e,i,r,n),ic(null,e,i,!0,t,n);case 19:return Zm(t,e,n);case 22:return Ym(t,e,n)}throw Error(Q(156,e.tag))};function hg(t,e){return kp(t,e)}function _0(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gn(t,e,n,i){return new _0(t,e,n,i)}function pf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function v0(t){if(typeof t=="function")return pf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Uc)return 11;if(t===Dc)return 14}return 2}function Ui(t,e){var n=t.alternate;return n===null?(n=gn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ya(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")pf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Or:return rr(n.children,r,s,e);case bc:o=8,r|=8;break;case Tu:return t=gn(12,n,e,r|2),t.elementType=Tu,t.lanes=s,t;case wu:return t=gn(13,n,e,r),t.elementType=wu,t.lanes=s,t;case Au:return t=gn(19,n,e,r),t.elementType=Au,t.lanes=s,t;case Mp:return ol(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Sp:o=10;break e;case yp:o=9;break e;case Uc:o=11;break e;case Dc:o=14;break e;case _i:o=16,i=null;break e}throw Error(Q(130,t==null?t:typeof t,""))}return e=gn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function rr(t,e,n,i){return t=gn(7,t,i,e),t.lanes=n,t}function ol(t,e,n,i){return t=gn(22,t,i,e),t.elementType=Mp,t.lanes=n,t.stateNode={isHidden:!1},t}function Wl(t,e,n){return t=gn(6,t,null,e),t.lanes=n,t}function Xl(t,e,n){return e=gn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function x0(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wl(0),this.expirationTimes=wl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function mf(t,e,n,i,r,s,o,a,l){return t=new x0(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=gn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zc(s),t}function S0(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function pg(t){if(!t)return Oi;t=t._reactInternals;e:{if(_r(t)!==t||t.tag!==1)throw Error(Q(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if($t(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Q(171))}if(t.tag===1){var n=t.type;if($t(n))return hm(t,n,e)}return e}function mg(t,e,n,i,r,s,o,a,l){return t=mf(n,i,!0,t,r,s,o,a,l),t.context=pg(null),n=t.current,i=Bt(),r=bi(n),s=si(i,r),s.callback=e??null,Li(n,s,r),t.current.lanes=r,go(t,r,i),Kt(t,i),t}function al(t,e,n,i){var r=e.current,s=Bt(),o=bi(r);return n=pg(n),e.context===null?e.context=n:e.pendingContext=n,e=si(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Li(r,e,o),t!==null&&(Un(t,r,o,s),ma(t,r,o)),o}function ja(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function kd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function gf(t,e){kd(t,e),(t=t.alternate)&&kd(t,e)}function y0(){return null}var gg=typeof reportError=="function"?reportError:function(t){console.error(t)};function _f(t){this._internalRoot=t}ll.prototype.render=_f.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Q(409));al(t,e,null,null)};ll.prototype.unmount=_f.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;hr(function(){al(null,t,null,null)}),e[ai]=null}};function ll(t){this._internalRoot=t}ll.prototype.unstable_scheduleHydration=function(t){if(t){var e=jp();t={blockedOn:null,target:t,priority:e};for(var n=0;n<xi.length&&e!==0&&e<xi[n].priority;n++);xi.splice(n,0,t),n===0&&qp(t)}};function vf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ul(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Bd(){}function M0(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=ja(o);s.call(u)}}var o=mg(e,i,t,0,null,!1,!1,"",Bd);return t._reactRootContainer=o,t[ai]=o.current,io(t.nodeType===8?t.parentNode:t),hr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=ja(l);a.call(u)}}var l=mf(t,0,!1,null,null,!1,!1,"",Bd);return t._reactRootContainer=l,t[ai]=l.current,io(t.nodeType===8?t.parentNode:t),hr(function(){al(e,l,n,i)}),l}function cl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=ja(o);a.call(l)}}al(e,o,t,r)}else o=M0(n,e,t,r,i);return ja(o)}Wp=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ns(e.pendingLanes);n!==0&&(Fc(e,n|1),Kt(e,ot()),!(ze&6)&&(us=ot()+500,Hi()))}break;case 13:hr(function(){var i=li(t,1);if(i!==null){var r=Bt();Un(i,t,1,r)}}),gf(t,1)}};Oc=function(t){if(t.tag===13){var e=li(t,134217728);if(e!==null){var n=Bt();Un(e,t,134217728,n)}gf(t,134217728)}};Xp=function(t){if(t.tag===13){var e=bi(t),n=li(t,e);if(n!==null){var i=Bt();Un(n,t,e,i)}gf(t,e)}};jp=function(){return Ge};Yp=function(t,e){var n=Ge;try{return Ge=t,e()}finally{Ge=n}};Fu=function(t,e,n){switch(e){case"input":if(Lu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=el(i);if(!r)throw Error(Q(90));Tp(i),Lu(i,r)}}}break;case"textarea":Ap(t,n);break;case"select":e=n.value,e!=null&&$r(t,!!n.multiple,e,!1)}};Dp=ff;Ip=hr;var E0={usingClientEntryPoint:!1,Events:[vo,Hr,el,bp,Up,ff]},Rs={findFiberByHostInstance:er,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},T0={bundleType:Rs.bundleType,version:Rs.version,rendererPackageName:Rs.rendererPackageName,rendererConfig:Rs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ci.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Op(t),t===null?null:t.stateNode},findFiberByHostInstance:Rs.findFiberByHostInstance||y0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Go=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Go.isDisabled&&Go.supportsFiber)try{Ka=Go.inject(T0),kn=Go}catch{}}ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E0;ln.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vf(e))throw Error(Q(200));return S0(t,e,null,n)};ln.createRoot=function(t,e){if(!vf(t))throw Error(Q(299));var n=!1,i="",r=gg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=mf(t,1,!1,null,null,n,!1,i,r),t[ai]=e.current,io(t.nodeType===8?t.parentNode:t),new _f(e)};ln.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Q(188)):(t=Object.keys(t).join(","),Error(Q(268,t)));return t=Op(e),t=t===null?null:t.stateNode,t};ln.flushSync=function(t){return hr(t)};ln.hydrate=function(t,e,n){if(!ul(e))throw Error(Q(200));return cl(null,t,e,!0,n)};ln.hydrateRoot=function(t,e,n){if(!vf(t))throw Error(Q(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=gg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=mg(e,null,t,1,n??null,r,!1,s,o),t[ai]=e.current,io(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new ll(e)};ln.render=function(t,e,n){if(!ul(e))throw Error(Q(200));return cl(null,t,e,!1,n)};ln.unmountComponentAtNode=function(t){if(!ul(t))throw Error(Q(40));return t._reactRootContainer?(hr(function(){cl(null,null,t,!1,function(){t._reactRootContainer=null,t[ai]=null})}),!0):!1};ln.unstable_batchedUpdates=ff;ln.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!ul(n))throw Error(Q(200));if(t==null||t._reactInternals===void 0)throw Error(Q(38));return cl(t,e,n,!1,i)};ln.version="18.2.0-next-9e3b772b8-20220608";function _g(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_g)}catch(t){console.error(t)}}_g(),mp.exports=ln;var w0=mp.exports,Hd=w0;Mu.createRoot=Hd.createRoot,Mu.hydrateRoot=Hd.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xf="156",A0=0,Gd=1,R0=2,vg=1,C0=2,Zn=3,zi=0,Zt=1,ei=2,Di=0,ts=1,Vd=2,Wd=3,Xd=4,L0=5,Nr=100,P0=101,b0=102,jd=103,Yd=104,U0=200,D0=201,I0=202,N0=203,xg=204,Sg=205,F0=206,O0=207,z0=208,k0=209,B0=210,H0=0,G0=1,V0=2,mc=3,W0=4,X0=5,j0=6,Y0=7,yg=0,q0=1,$0=2,Ii=0,K0=1,Z0=2,Q0=3,J0=4,ex=5,Mg=300,cs=301,fs=302,gc=303,_c=304,fl=306,vc=1e3,Ln=1001,xc=1002,kt=1003,qd=1004,jl=1005,pn=1006,tx=1007,ho=1008,Ni=1009,nx=1010,ix=1011,Sf=1012,Eg=1013,Ei=1014,Ti=1015,po=1016,Tg=1017,wg=1018,sr=1020,rx=1021,Pn=1023,sx=1024,ox=1025,or=1026,ds=1027,ax=1028,Ag=1029,lx=1030,Rg=1031,Cg=1033,Yl=33776,ql=33777,$l=33778,Kl=33779,$d=35840,Kd=35841,Zd=35842,Qd=35843,ux=36196,Jd=37492,eh=37496,th=37808,nh=37809,ih=37810,rh=37811,sh=37812,oh=37813,ah=37814,lh=37815,uh=37816,ch=37817,fh=37818,dh=37819,hh=37820,ph=37821,Zl=36492,mh=36494,gh=36495,cx=36283,_h=36284,vh=36285,xh=36286,Lg=3e3,ar=3001,fx=3200,dx=3201,hx=0,px=1,lr="",Ke="srgb",Vn="srgb-linear",dl="display-p3",Ql=7680,mx=519,gx=512,_x=513,vx=514,xx=515,Sx=516,yx=517,Mx=518,Ex=519,Sh=35044,yh="300 es",Sc=1035,ii=2e3,Ya=2001;class _s{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jl=Math.PI/180,yc=180/Math.PI;function So(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(bt[t&255]+bt[t>>8&255]+bt[t>>16&255]+bt[t>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[n&63|128]+bt[n>>8&255]+"-"+bt[n>>16&255]+bt[n>>24&255]+bt[i&255]+bt[i>>8&255]+bt[i>>16&255]+bt[i>>24&255]).toLowerCase()}function jt(t,e,n){return Math.max(e,Math.min(n,t))}function Tx(t,e){return(t%e+e)%e}function eu(t,e,n){return(1-n)*t+n*e}function Mh(t){return(t&t-1)===0&&t!==0}function Mc(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Cs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Wt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class He{constructor(e=0,n=0){He.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ue{constructor(e,n,i,r,s,o,a,l,u){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],f=i[4],h=i[7],d=i[2],_=i[5],x=i[8],v=r[0],g=r[3],c=r[6],m=r[1],p=r[4],S=r[7],E=r[2],C=r[5],A=r[8];return s[0]=o*v+a*m+l*E,s[3]=o*g+a*p+l*C,s[6]=o*c+a*S+l*A,s[1]=u*v+f*m+h*E,s[4]=u*g+f*p+h*C,s[7]=u*c+f*S+h*A,s[2]=d*v+_*m+x*E,s[5]=d*g+_*p+x*C,s[8]=d*c+_*S+x*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8];return n*o*f-n*a*u-i*s*f+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],h=f*o-a*u,d=a*l-f*s,_=u*s-o*l,x=n*h+i*d+r*_;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return e[0]=h*v,e[1]=(r*u-f*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(f*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=_*v,e[7]=(i*l-u*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(tu.makeScale(e,n)),this}rotate(e){return this.premultiply(tu.makeRotation(-e)),this}translate(e,n){return this.premultiply(tu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const tu=new Ue;function Pg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function qa(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function wx(){const t=qa("canvas");return t.style.display="block",t}const Eh={};function Ys(t){t in Eh||(Eh[t]=!0,console.warn(t))}function ns(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function nu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const Ax=new Ue().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Rx=new Ue().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Cx(t){return t.convertSRGBToLinear().applyMatrix3(Rx)}function Lx(t){return t.applyMatrix3(Ax).convertLinearToSRGB()}const Px={[Vn]:t=>t,[Ke]:t=>t.convertSRGBToLinear(),[dl]:Cx},bx={[Vn]:t=>t,[Ke]:t=>t.convertLinearToSRGB(),[dl]:Lx},yn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return Vn},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Px[e],r=bx[n];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let xr;class bg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{xr===void 0&&(xr=qa("canvas")),xr.width=e.width,xr.height=e.height;const i=xr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=xr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=qa("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ns(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ns(n[i]/255)*255):n[i]=ns(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ux=0;class Ug{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ux++}),this.uuid=So(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(iu(r[o].image)):s.push(iu(r[o]))}else s=iu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function iu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?bg.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Dx=0;class sn extends _s{constructor(e=sn.DEFAULT_IMAGE,n=sn.DEFAULT_MAPPING,i=Ln,r=Ln,s=pn,o=ho,a=Pn,l=Ni,u=sn.DEFAULT_ANISOTROPY,f=lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dx++}),this.uuid=So(),this.name="",this.source=new Ug(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(Ys("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===ar?Ke:lr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vc:e.x=e.x-Math.floor(e.x);break;case Ln:e.x=e.x<0?0:1;break;case xc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vc:e.y=e.y-Math.floor(e.y);break;case Ln:e.y=e.y<0?0:1;break;case xc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ys("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ke?ar:Lg}set encoding(e){Ys("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ar?Ke:lr}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Mg;sn.DEFAULT_ANISOTROPY=1;class Et{constructor(e=0,n=0,i=0,r=1){Et.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],f=l[4],h=l[8],d=l[1],_=l[5],x=l[9],v=l[2],g=l[6],c=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-v)<.01&&Math.abs(x-g)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+v)<.1&&Math.abs(x+g)<.1&&Math.abs(u+_+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const p=(u+1)/2,S=(_+1)/2,E=(c+1)/2,C=(f+d)/4,A=(h+v)/4,P=(x+g)/4;return p>S&&p>E?p<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(p),r=C/i,s=A/i):S>E?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=P/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=A/s,r=P/s),this.set(i,r,s,n),this}let m=Math.sqrt((g-x)*(g-x)+(h-v)*(h-v)+(d-f)*(d-f));return Math.abs(m)<.001&&(m=1),this.x=(g-x)/m,this.y=(h-v)/m,this.z=(d-f)/m,this.w=Math.acos((u+_+c-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ix extends _s{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Et(0,0,e,n),this.scissorTest=!1,this.viewport=new Et(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Ys("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ar?Ke:lr),this.texture=new sn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:pn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Ug(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pr extends Ix{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Dg extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nx extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],f=i[r+2],h=i[r+3];const d=s[o+0],_=s[o+1],x=s[o+2],v=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=f,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=_,e[n+2]=x,e[n+3]=v;return}if(h!==v||l!==d||u!==_||f!==x){let g=1-a;const c=l*d+u*_+f*x+h*v,m=c>=0?1:-1,p=1-c*c;if(p>Number.EPSILON){const E=Math.sqrt(p),C=Math.atan2(E,c*m);g=Math.sin(g*C)/E,a=Math.sin(a*C)/E}const S=a*m;if(l=l*g+d*S,u=u*g+_*S,f=f*g+x*S,h=h*g+v*S,g===1-a){const E=1/Math.sqrt(l*l+u*u+f*f+h*h);l*=E,u*=E,f*=E,h*=E}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],f=i[r+3],h=s[o],d=s[o+1],_=s[o+2],x=s[o+3];return e[n]=a*x+f*h+l*_-u*d,e[n+1]=l*x+f*d+u*h-a*_,e[n+2]=u*x+f*_+a*d-l*h,e[n+3]=f*x-a*h-l*d-u*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),f=a(r/2),h=a(s/2),d=l(i/2),_=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=d*f*h+u*_*x,this._y=u*_*h-d*f*x,this._z=u*f*x+d*_*h,this._w=u*f*h-d*_*x;break;case"YXZ":this._x=d*f*h+u*_*x,this._y=u*_*h-d*f*x,this._z=u*f*x-d*_*h,this._w=u*f*h+d*_*x;break;case"ZXY":this._x=d*f*h-u*_*x,this._y=u*_*h+d*f*x,this._z=u*f*x+d*_*h,this._w=u*f*h-d*_*x;break;case"ZYX":this._x=d*f*h-u*_*x,this._y=u*_*h+d*f*x,this._z=u*f*x-d*_*h,this._w=u*f*h+d*_*x;break;case"YZX":this._x=d*f*h+u*_*x,this._y=u*_*h+d*f*x,this._z=u*f*x-d*_*h,this._w=u*f*h-d*_*x;break;case"XZY":this._x=d*f*h-u*_*x,this._y=u*_*h-d*f*x,this._z=u*f*x+d*_*h,this._w=u*f*h+d*_*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],f=n[6],h=n[10],d=i+a+h;if(d>0){const _=.5/Math.sqrt(d+1);this._w=.25/_,this._x=(f-l)*_,this._y=(s-u)*_,this._z=(o-r)*_}else if(i>a&&i>h){const _=2*Math.sqrt(1+i-a-h);this._w=(f-l)/_,this._x=.25*_,this._y=(r+o)/_,this._z=(s+u)/_}else if(a>h){const _=2*Math.sqrt(1+a-i-h);this._w=(s-u)/_,this._x=(r+o)/_,this._y=.25*_,this._z=(l+f)/_}else{const _=2*Math.sqrt(1+h-i-a);this._w=(o-r)/_,this._x=(s+u)/_,this._y=(l+f)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,f=n._w;return this._x=i*f+o*a+r*u-s*l,this._y=r*f+o*l+s*a-i*u,this._z=s*f+o*u+i*l-r*a,this._w=o*f-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const _=1-n;return this._w=_*o+n*this._w,this._x=_*i+n*this._x,this._y=_*r+n*this._y,this._z=_*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),f=Math.atan2(u,a),h=Math.sin((1-n)*f)/u,d=Math.sin(n*f)/u;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,n=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Th.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Th.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*n+o*r-a*i,f=l*i+a*n-s*r,h=l*r+s*i-o*n,d=-s*n-o*i-a*r;return this.x=u*l+d*-s+f*-a-h*-o,this.y=f*l+d*-o+h*-s-u*-a,this.z=h*l+d*-a+u*-o-f*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ru.copy(this).projectOnVector(e),this.sub(ru)}reflect(e){return this.sub(ru.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ru=new F,Th=new yo;class Mo{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(jn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(jn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=jn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Sr.copy(e.boundingBox),Sr.applyMatrix4(e.matrixWorld),this.union(Sr);else{const r=e.geometry;if(r!==void 0)if(n&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)jn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(jn)}else r.boundingBox===null&&r.computeBoundingBox(),Sr.copy(r.boundingBox),Sr.applyMatrix4(e.matrixWorld),this.union(Sr)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ls),Vo.subVectors(this.max,Ls),yr.subVectors(e.a,Ls),Mr.subVectors(e.b,Ls),Er.subVectors(e.c,Ls),hi.subVectors(Mr,yr),pi.subVectors(Er,Mr),Xi.subVectors(yr,Er);let n=[0,-hi.z,hi.y,0,-pi.z,pi.y,0,-Xi.z,Xi.y,hi.z,0,-hi.x,pi.z,0,-pi.x,Xi.z,0,-Xi.x,-hi.y,hi.x,0,-pi.y,pi.x,0,-Xi.y,Xi.x,0];return!su(n,yr,Mr,Er,Vo)||(n=[1,0,0,0,1,0,0,0,1],!su(n,yr,Mr,Er,Vo))?!1:(Wo.crossVectors(hi,pi),n=[Wo.x,Wo.y,Wo.z],su(n,yr,Mr,Er,Vo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xn=[new F,new F,new F,new F,new F,new F,new F,new F],jn=new F,Sr=new Mo,yr=new F,Mr=new F,Er=new F,hi=new F,pi=new F,Xi=new F,Ls=new F,Vo=new F,Wo=new F,ji=new F;function su(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){ji.fromArray(t,s);const a=r.x*Math.abs(ji.x)+r.y*Math.abs(ji.y)+r.z*Math.abs(ji.z),l=e.dot(ji),u=n.dot(ji),f=i.dot(ji);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>a)return!1}return!0}const Fx=new Mo,Ps=new F,ou=new F;class yf{constructor(e=new F,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Fx.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ps.subVectors(e,this.center);const n=Ps.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ps,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ou.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ps.copy(e.center).add(ou)),this.expandByPoint(Ps.copy(e.center).sub(ou))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yn=new F,au=new F,Xo=new F,mi=new F,lu=new F,jo=new F,uu=new F;class Ox{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Yn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,n),Yn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){au.copy(e).add(n).multiplyScalar(.5),Xo.copy(n).sub(e).normalize(),mi.copy(this.origin).sub(au);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Xo),a=mi.dot(this.direction),l=-mi.dot(Xo),u=mi.lengthSq(),f=Math.abs(1-o*o);let h,d,_,x;if(f>0)if(h=o*l-a,d=o*a-l,x=s*f,h>=0)if(d>=-x)if(d<=x){const v=1/f;h*=v,d*=v,_=h*(h+o*d+2*a)+d*(o*h+d+2*l)+u}else d=s,h=Math.max(0,-(o*d+a)),_=-h*h+d*(d+2*l)+u;else d=-s,h=Math.max(0,-(o*d+a)),_=-h*h+d*(d+2*l)+u;else d<=-x?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),_=-h*h+d*(d+2*l)+u):d<=x?(h=0,d=Math.min(Math.max(-s,-l),s),_=d*(d+2*l)+u):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),_=-h*h+d*(d+2*l)+u);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),_=-h*h+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(au).addScaledVector(Xo,d),_}intersectSphere(e,n){Yn.subVectors(e.center,this.origin);const i=Yn.dot(this.direction),r=Yn.dot(Yn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),f>=0?(s=(e.min.y-d.y)*f,o=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,o=(e.min.y-d.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,n,i,r,s){lu.subVectors(n,e),jo.subVectors(i,e),uu.crossVectors(lu,jo);let o=this.direction.dot(uu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mi.subVectors(this.origin,e);const l=a*this.direction.dot(jo.crossVectors(mi,jo));if(l<0)return null;const u=a*this.direction.dot(lu.cross(mi));if(u<0||l+u>o)return null;const f=-a*mi.dot(uu);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wt{constructor(e,n,i,r,s,o,a,l,u,f,h,d,_,x,v,g){wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,f,h,d,_,x,v,g)}set(e,n,i,r,s,o,a,l,u,f,h,d,_,x,v,g){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=s,c[5]=o,c[9]=a,c[13]=l,c[2]=u,c[6]=f,c[10]=h,c[14]=d,c[3]=_,c[7]=x,c[11]=v,c[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Tr.setFromMatrixColumn(e,0).length(),s=1/Tr.setFromMatrixColumn(e,1).length(),o=1/Tr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*f,_=o*h,x=a*f,v=a*h;n[0]=l*f,n[4]=-l*h,n[8]=u,n[1]=_+x*u,n[5]=d-v*u,n[9]=-a*l,n[2]=v-d*u,n[6]=x+_*u,n[10]=o*l}else if(e.order==="YXZ"){const d=l*f,_=l*h,x=u*f,v=u*h;n[0]=d+v*a,n[4]=x*a-_,n[8]=o*u,n[1]=o*h,n[5]=o*f,n[9]=-a,n[2]=_*a-x,n[6]=v+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*f,_=l*h,x=u*f,v=u*h;n[0]=d-v*a,n[4]=-o*h,n[8]=x+_*a,n[1]=_+x*a,n[5]=o*f,n[9]=v-d*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*f,_=o*h,x=a*f,v=a*h;n[0]=l*f,n[4]=x*u-_,n[8]=d*u+v,n[1]=l*h,n[5]=v*u+d,n[9]=_*u-x,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,_=o*u,x=a*l,v=a*u;n[0]=l*f,n[4]=v-d*h,n[8]=x*h+_,n[1]=h,n[5]=o*f,n[9]=-a*f,n[2]=-u*f,n[6]=_*h+x,n[10]=d-v*h}else if(e.order==="XZY"){const d=o*l,_=o*u,x=a*l,v=a*u;n[0]=l*f,n[4]=-h,n[8]=u*f,n[1]=d*h+v,n[5]=o*f,n[9]=_*h-x,n[2]=x*h-_,n[6]=a*f,n[10]=v*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zx,e,kx)}lookAt(e,n,i){const r=this.elements;return Jt.subVectors(e,n),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),gi.crossVectors(i,Jt),gi.lengthSq()===0&&(Math.abs(i.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),gi.crossVectors(i,Jt)),gi.normalize(),Yo.crossVectors(Jt,gi),r[0]=gi.x,r[4]=Yo.x,r[8]=Jt.x,r[1]=gi.y,r[5]=Yo.y,r[9]=Jt.y,r[2]=gi.z,r[6]=Yo.z,r[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],f=i[1],h=i[5],d=i[9],_=i[13],x=i[2],v=i[6],g=i[10],c=i[14],m=i[3],p=i[7],S=i[11],E=i[15],C=r[0],A=r[4],P=r[8],y=r[12],T=r[1],$=r[5],K=r[9],z=r[13],j=r[2],Y=r[6],Z=r[10],q=r[14],b=r[3],V=r[7],B=r[11],U=r[15];return s[0]=o*C+a*T+l*j+u*b,s[4]=o*A+a*$+l*Y+u*V,s[8]=o*P+a*K+l*Z+u*B,s[12]=o*y+a*z+l*q+u*U,s[1]=f*C+h*T+d*j+_*b,s[5]=f*A+h*$+d*Y+_*V,s[9]=f*P+h*K+d*Z+_*B,s[13]=f*y+h*z+d*q+_*U,s[2]=x*C+v*T+g*j+c*b,s[6]=x*A+v*$+g*Y+c*V,s[10]=x*P+v*K+g*Z+c*B,s[14]=x*y+v*z+g*q+c*U,s[3]=m*C+p*T+S*j+E*b,s[7]=m*A+p*$+S*Y+E*V,s[11]=m*P+p*K+S*Z+E*B,s[15]=m*y+p*z+S*q+E*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],f=e[2],h=e[6],d=e[10],_=e[14],x=e[3],v=e[7],g=e[11],c=e[15];return x*(+s*l*h-r*u*h-s*a*d+i*u*d+r*a*_-i*l*_)+v*(+n*l*_-n*u*d+s*o*d-r*o*_+r*u*f-s*l*f)+g*(+n*u*h-n*a*_-s*o*h+i*o*_+s*a*f-i*u*f)+c*(-r*a*f-n*l*h+n*a*d+r*o*h-i*o*d+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],f=e[8],h=e[9],d=e[10],_=e[11],x=e[12],v=e[13],g=e[14],c=e[15],m=h*g*u-v*d*u+v*l*_-a*g*_-h*l*c+a*d*c,p=x*d*u-f*g*u-x*l*_+o*g*_+f*l*c-o*d*c,S=f*v*u-x*h*u+x*a*_-o*v*_-f*a*c+o*h*c,E=x*h*l-f*v*l-x*a*d+o*v*d+f*a*g-o*h*g,C=n*m+i*p+r*S+s*E;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=m*A,e[1]=(v*d*s-h*g*s-v*r*_+i*g*_+h*r*c-i*d*c)*A,e[2]=(a*g*s-v*l*s+v*r*u-i*g*u-a*r*c+i*l*c)*A,e[3]=(h*l*s-a*d*s-h*r*u+i*d*u+a*r*_-i*l*_)*A,e[4]=p*A,e[5]=(f*g*s-x*d*s+x*r*_-n*g*_-f*r*c+n*d*c)*A,e[6]=(x*l*s-o*g*s-x*r*u+n*g*u+o*r*c-n*l*c)*A,e[7]=(o*d*s-f*l*s+f*r*u-n*d*u-o*r*_+n*l*_)*A,e[8]=S*A,e[9]=(x*h*s-f*v*s-x*i*_+n*v*_+f*i*c-n*h*c)*A,e[10]=(o*v*s-x*a*s+x*i*u-n*v*u-o*i*c+n*a*c)*A,e[11]=(f*a*s-o*h*s-f*i*u+n*h*u+o*i*_-n*a*_)*A,e[12]=E*A,e[13]=(f*v*r-x*h*r+x*i*d-n*v*d-f*i*g+n*h*g)*A,e[14]=(x*a*r-o*v*r-x*i*l+n*v*l+o*i*g-n*a*g)*A,e[15]=(o*h*r-f*a*r+f*i*l-n*h*l-o*i*d+n*a*d)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,f=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,f*a+i,f*l-r*o,0,u*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,f=o+o,h=a+a,d=s*u,_=s*f,x=s*h,v=o*f,g=o*h,c=a*h,m=l*u,p=l*f,S=l*h,E=i.x,C=i.y,A=i.z;return r[0]=(1-(v+c))*E,r[1]=(_+S)*E,r[2]=(x-p)*E,r[3]=0,r[4]=(_-S)*C,r[5]=(1-(d+c))*C,r[6]=(g+m)*C,r[7]=0,r[8]=(x+p)*A,r[9]=(g-m)*A,r[10]=(1-(d+v))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Tr.set(r[0],r[1],r[2]).length();const o=Tr.set(r[4],r[5],r[6]).length(),a=Tr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Mn.copy(this);const u=1/s,f=1/o,h=1/a;return Mn.elements[0]*=u,Mn.elements[1]*=u,Mn.elements[2]*=u,Mn.elements[4]*=f,Mn.elements[5]*=f,Mn.elements[6]*=f,Mn.elements[8]*=h,Mn.elements[9]*=h,Mn.elements[10]*=h,n.setFromRotationMatrix(Mn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=ii){const l=this.elements,u=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let _,x;if(a===ii)_=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Ya)_=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=ii){const l=this.elements,u=1/(n-e),f=1/(i-r),h=1/(o-s),d=(n+e)*u,_=(i+r)*f;let x,v;if(a===ii)x=(o+s)*h,v=-2*h;else if(a===Ya)x=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-_,l[2]=0,l[6]=0,l[10]=v,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Tr=new F,Mn=new wt,zx=new F(0,0,0),kx=new F(1,1,1),gi=new F,Yo=new F,Jt=new F,wh=new wt,Ah=new yo;class hl{constructor(e=0,n=0,i=0,r=hl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],f=r[9],h=r[2],d=r[6],_=r[10];switch(n){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,_),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,_),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,_),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,_),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,_));break;case"XZY":this._z=Math.asin(-jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return wh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Ah.setFromEuler(this),this.setFromQuaternion(Ah,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hl.DEFAULT_ORDER="XYZ";class Ig{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Bx=0;const Rh=new F,wr=new yo,qn=new wt,qo=new F,bs=new F,Hx=new F,Gx=new yo,Ch=new F(1,0,0),Lh=new F(0,1,0),Ph=new F(0,0,1),Vx={type:"added"},Wx={type:"removed"};class on extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bx++}),this.uuid=So(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=on.DEFAULT_UP.clone();const e=new F,n=new hl,i=new yo,r=new F(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new wt},normalMatrix:{value:new Ue}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=on.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ig,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return wr.setFromAxisAngle(e,n),this.quaternion.multiply(wr),this}rotateOnWorldAxis(e,n){return wr.setFromAxisAngle(e,n),this.quaternion.premultiply(wr),this}rotateX(e){return this.rotateOnAxis(Ch,e)}rotateY(e){return this.rotateOnAxis(Lh,e)}rotateZ(e){return this.rotateOnAxis(Ph,e)}translateOnAxis(e,n){return Rh.copy(e).applyQuaternion(this.quaternion),this.position.add(Rh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ch,e)}translateY(e){return this.translateOnAxis(Lh,e)}translateZ(e){return this.translateOnAxis(Ph,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?qo.copy(e):qo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(bs,qo,this.up):qn.lookAt(qo,bs,this.up),this.quaternion.setFromRotationMatrix(qn),r&&(qn.extractRotation(r.matrixWorld),wr.setFromRotationMatrix(qn),this.quaternion.premultiply(wr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Vx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Wx)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(qn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,e,Hx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,Gx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),f=o(e.images),h=o(e.shapes),d=o(e.skeletons),_=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),_.length>0&&(i.animations=_),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const u in a){const f=a[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}on.DEFAULT_UP=new F(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const En=new F,$n=new F,cu=new F,Kn=new F,Ar=new F,Rr=new F,bh=new F,fu=new F,du=new F,hu=new F;let $o=!1;class Cn{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),En.subVectors(e,n),r.cross(En);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){En.subVectors(r,n),$n.subVectors(i,n),cu.subVectors(e,n);const o=En.dot(En),a=En.dot($n),l=En.dot(cu),u=$n.dot($n),f=$n.dot(cu),h=o*u-a*a;if(h===0)return s.set(-2,-1,-1);const d=1/h,_=(u*l-a*f)*d,x=(o*f-a*l)*d;return s.set(1-_-x,x,_)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Kn),Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getUV(e,n,i,r,s,o,a,l){return $o===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),$o=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Kn),l.setScalar(0),l.addScaledVector(s,Kn.x),l.addScaledVector(o,Kn.y),l.addScaledVector(a,Kn.z),l}static isFrontFacing(e,n,i,r){return En.subVectors(i,n),$n.subVectors(e,n),En.cross($n).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),En.cross($n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Cn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return $o===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),$o=!0),Cn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Cn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ar.subVectors(r,i),Rr.subVectors(s,i),fu.subVectors(e,i);const l=Ar.dot(fu),u=Rr.dot(fu);if(l<=0&&u<=0)return n.copy(i);du.subVectors(e,r);const f=Ar.dot(du),h=Rr.dot(du);if(f>=0&&h<=f)return n.copy(r);const d=l*h-f*u;if(d<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Ar,o);hu.subVectors(e,s);const _=Ar.dot(hu),x=Rr.dot(hu);if(x>=0&&_<=x)return n.copy(s);const v=_*u-l*x;if(v<=0&&u>=0&&x<=0)return a=u/(u-x),n.copy(i).addScaledVector(Rr,a);const g=f*x-_*h;if(g<=0&&h-f>=0&&_-x>=0)return bh.subVectors(s,r),a=(h-f)/(h-f+(_-x)),n.copy(r).addScaledVector(bh,a);const c=1/(g+v+d);return o=v*c,a=d*c,n.copy(i).addScaledVector(Ar,o).addScaledVector(Rr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Xx=0;class pl extends _s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xx++}),this.uuid=So(),this.name="",this.type="Material",this.blending=ts,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xg,this.blendDst=Sg,this.blendEquation=Nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=mc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ql,this.stencilZFail=Ql,this.stencilZPass=Ql,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ts&&(i.blending=this.blending),this.side!==zi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ng={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tn={h:0,s:0,l:0},Ko={h:0,s:0,l:0};function pu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ke){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yn.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=yn.workingColorSpace){return this.r=e,this.g=n,this.b=i,yn.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=yn.workingColorSpace){if(e=Tx(e,1),n=jt(n,0,1),i=jt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=pu(o,s,e+1/3),this.g=pu(o,s,e),this.b=pu(o,s,e-1/3)}return yn.toWorkingColorSpace(this,r),this}setStyle(e,n=Ke){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ke){const i=Ng[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ns(e.r),this.g=ns(e.g),this.b=ns(e.b),this}copyLinearToSRGB(e){return this.r=nu(e.r),this.g=nu(e.g),this.b=nu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ke){return yn.fromWorkingColorSpace(Ut.copy(this),e),Math.round(jt(Ut.r*255,0,255))*65536+Math.round(jt(Ut.g*255,0,255))*256+Math.round(jt(Ut.b*255,0,255))}getHexString(e=Ke){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=yn.workingColorSpace){yn.fromWorkingColorSpace(Ut.copy(this),n);const i=Ut.r,r=Ut.g,s=Ut.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const f=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=f<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=yn.workingColorSpace){return yn.fromWorkingColorSpace(Ut.copy(this),n),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=Ke){yn.fromWorkingColorSpace(Ut.copy(this),e);const n=Ut.r,i=Ut.g,r=Ut.b;return e!==Ke?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Tn),Tn.h+=e,Tn.s+=n,Tn.l+=i,this.setHSL(Tn.h,Tn.s,Tn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Tn),e.getHSL(Ko);const i=eu(Tn.h,Ko.h,n),r=eu(Tn.s,Ko.s,n),s=eu(Tn.l,Ko.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new qe;qe.NAMES=Ng;class Mf extends pl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=yg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ct=new F,Zo=new He;class Hn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Sh,this.updateRange={offset:0,count:-1},this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Zo.fromBufferAttribute(this,n),Zo.applyMatrix3(e),this.setXY(n,Zo.x,Zo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)ct.fromBufferAttribute(this,n),ct.applyMatrix3(e),this.setXYZ(n,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)ct.fromBufferAttribute(this,n),ct.applyMatrix4(e),this.setXYZ(n,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)ct.fromBufferAttribute(this,n),ct.applyNormalMatrix(e),this.setXYZ(n,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)ct.fromBufferAttribute(this,n),ct.transformDirection(e),this.setXYZ(n,ct.x,ct.y,ct.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Cs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Wt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Cs(n,this.array)),n}setX(e,n){return this.normalized&&(n=Wt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Cs(n,this.array)),n}setY(e,n){return this.normalized&&(n=Wt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Cs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Wt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Cs(n,this.array)),n}setW(e,n){return this.normalized&&(n=Wt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Wt(n,this.array),i=Wt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Wt(n,this.array),i=Wt(i,this.array),r=Wt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Wt(n,this.array),i=Wt(i,this.array),r=Wt(r,this.array),s=Wt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sh&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Fg extends Hn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Og extends Hn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Gn extends Hn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let jx=0;const fn=new wt,mu=new on,Cr=new F,en=new Mo,Us=new Mo,_t=new F;class Gi extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jx++}),this.uuid=So(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pg(e)?Og:Fg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ue().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,n,i){return fn.makeTranslation(e,n,i),this.applyMatrix4(fn),this}scale(e,n,i){return fn.makeScale(e,n,i),this.applyMatrix4(fn),this}lookAt(e){return mu.lookAt(e),mu.updateMatrix(),this.applyMatrix4(mu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Gn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];en.setFromBufferAttribute(s),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(en.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Us.setFromBufferAttribute(a),this.morphTargetsRelative?(_t.addVectors(en.min,Us.min),en.expandByPoint(_t),_t.addVectors(en.max,Us.max),en.expandByPoint(_t)):(en.expandByPoint(Us.min),en.expandByPoint(Us.max))}en.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)_t.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(_t));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)_t.fromBufferAttribute(a,u),l&&(Cr.fromBufferAttribute(e,u),_t.add(Cr)),r=Math.max(r,i.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],f=[];for(let T=0;T<a;T++)u[T]=new F,f[T]=new F;const h=new F,d=new F,_=new F,x=new He,v=new He,g=new He,c=new F,m=new F;function p(T,$,K){h.fromArray(r,T*3),d.fromArray(r,$*3),_.fromArray(r,K*3),x.fromArray(o,T*2),v.fromArray(o,$*2),g.fromArray(o,K*2),d.sub(h),_.sub(h),v.sub(x),g.sub(x);const z=1/(v.x*g.y-g.x*v.y);isFinite(z)&&(c.copy(d).multiplyScalar(g.y).addScaledVector(_,-v.y).multiplyScalar(z),m.copy(_).multiplyScalar(v.x).addScaledVector(d,-g.x).multiplyScalar(z),u[T].add(c),u[$].add(c),u[K].add(c),f[T].add(m),f[$].add(m),f[K].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let T=0,$=S.length;T<$;++T){const K=S[T],z=K.start,j=K.count;for(let Y=z,Z=z+j;Y<Z;Y+=3)p(i[Y+0],i[Y+1],i[Y+2])}const E=new F,C=new F,A=new F,P=new F;function y(T){A.fromArray(s,T*3),P.copy(A);const $=u[T];E.copy($),E.sub(A.multiplyScalar(A.dot($))).normalize(),C.crossVectors(P,$);const z=C.dot(f[T])<0?-1:1;l[T*4]=E.x,l[T*4+1]=E.y,l[T*4+2]=E.z,l[T*4+3]=z}for(let T=0,$=S.length;T<$;++T){const K=S[T],z=K.start,j=K.count;for(let Y=z,Z=z+j;Y<Z;Y+=3)y(i[Y+0]),y(i[Y+1]),y(i[Y+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Hn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,_=i.count;d<_;d++)i.setXYZ(d,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,u=new F,f=new F,h=new F;if(e)for(let d=0,_=e.count;d<_;d+=3){const x=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,g),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,g),a.add(f),l.add(f),u.add(f),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let d=0,_=n.count;d<_;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)_t.fromBufferAttribute(e,n),_t.normalize(),e.setXYZ(n,_t.x,_t.y,_t.z)}toNonIndexed(){function e(a,l){const u=a.array,f=a.itemSize,h=a.normalized,d=new u.constructor(l.length*f);let _=0,x=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?_=l[v]*a.data.stride+a.offset:_=l[v]*f;for(let c=0;c<f;c++)d[x++]=u[_++]}return new Hn(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Gi,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let f=0,h=u.length;f<h;f++){const d=u[f],_=e(d,i);l.push(_)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let h=0,d=u.length;h<d;h++){const _=u[h];f.push(_.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const s=e.morphAttributes;for(const u in s){const f=[],h=s[u];for(let d=0,_=h.length;d<_;d++)f.push(h[d].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,f=o.length;u<f;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Uh=new wt,Yi=new Ox,Qo=new yf,Dh=new F,Lr=new F,Pr=new F,br=new F,gu=new F,Jo=new F,ea=new He,ta=new He,na=new He,Ih=new F,Nh=new F,Fh=new F,ia=new F,ra=new F;class ri extends on{constructor(e=new Gi,n=new Mf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Jo.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const f=a[l],h=s[l];f!==0&&(gu.fromBufferAttribute(h,e),o?Jo.addScaledVector(gu,f):Jo.addScaledVector(gu.sub(n),f))}n.add(Jo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Qo.copy(i.boundingSphere),Qo.applyMatrix4(s),Yi.copy(e.ray).recast(e.near),!(Qo.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(Qo,Dh)===null||Yi.origin.distanceToSquared(Dh)>(e.far-e.near)**2))&&(Uh.copy(s).invert(),Yi.copy(e.ray).applyMatrix4(Uh),!(i.boundingBox!==null&&Yi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Yi)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,d=s.groups,_=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,v=d.length;x<v;x++){const g=d[x],c=o[g.materialIndex],m=Math.max(g.start,_.start),p=Math.min(a.count,Math.min(g.start+g.count,_.start+_.count));for(let S=m,E=p;S<E;S+=3){const C=a.getX(S),A=a.getX(S+1),P=a.getX(S+2);r=sa(this,c,e,i,u,f,h,C,A,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const x=Math.max(0,_.start),v=Math.min(a.count,_.start+_.count);for(let g=x,c=v;g<c;g+=3){const m=a.getX(g),p=a.getX(g+1),S=a.getX(g+2);r=sa(this,o,e,i,u,f,h,m,p,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,v=d.length;x<v;x++){const g=d[x],c=o[g.materialIndex],m=Math.max(g.start,_.start),p=Math.min(l.count,Math.min(g.start+g.count,_.start+_.count));for(let S=m,E=p;S<E;S+=3){const C=S,A=S+1,P=S+2;r=sa(this,c,e,i,u,f,h,C,A,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const x=Math.max(0,_.start),v=Math.min(l.count,_.start+_.count);for(let g=x,c=v;g<c;g+=3){const m=g,p=g+1,S=g+2;r=sa(this,o,e,i,u,f,h,m,p,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function Yx(t,e,n,i,r,s,o,a){let l;if(e.side===Zt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===zi,a),l===null)return null;ra.copy(a),ra.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(ra);return u<n.near||u>n.far?null:{distance:u,point:ra.clone(),object:t}}function sa(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,Lr),t.getVertexPosition(l,Pr),t.getVertexPosition(u,br);const f=Yx(t,e,n,i,Lr,Pr,br,ia);if(f){r&&(ea.fromBufferAttribute(r,a),ta.fromBufferAttribute(r,l),na.fromBufferAttribute(r,u),f.uv=Cn.getInterpolation(ia,Lr,Pr,br,ea,ta,na,new He)),s&&(ea.fromBufferAttribute(s,a),ta.fromBufferAttribute(s,l),na.fromBufferAttribute(s,u),f.uv1=Cn.getInterpolation(ia,Lr,Pr,br,ea,ta,na,new He),f.uv2=f.uv1),o&&(Ih.fromBufferAttribute(o,a),Nh.fromBufferAttribute(o,l),Fh.fromBufferAttribute(o,u),f.normal=Cn.getInterpolation(ia,Lr,Pr,br,Ih,Nh,Fh,new F),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new F,materialIndex:0};Cn.getNormal(Lr,Pr,br,h.normal),f.face=h}return f}class Eo extends Gi{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],f=[],h=[];let d=0,_=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Gn(u,3)),this.setAttribute("normal",new Gn(f,3)),this.setAttribute("uv",new Gn(h,2));function x(v,g,c,m,p,S,E,C,A,P,y){const T=S/A,$=E/P,K=S/2,z=E/2,j=C/2,Y=A+1,Z=P+1;let q=0,b=0;const V=new F;for(let B=0;B<Z;B++){const U=B*$-z;for(let O=0;O<Y;O++){const se=O*T-K;V[v]=se*m,V[g]=U*p,V[c]=j,u.push(V.x,V.y,V.z),V[v]=0,V[g]=0,V[c]=C>0?1:-1,f.push(V.x,V.y,V.z),h.push(O/A),h.push(1-B/P),q+=1}}for(let B=0;B<P;B++)for(let U=0;U<A;U++){const O=d+U+Y*B,se=d+U+Y*(B+1),oe=d+(U+1)+Y*(B+1),ue=d+(U+1)+Y*B;l.push(O,se,ue),l.push(se,oe,ue),b+=6}a.addGroup(_,b,y),_+=b,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function hs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Ot(t){const e={};for(let n=0;n<t.length;n++){const i=hs(t[n]);for(const r in i)e[r]=i[r]}return e}function qx(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function zg(t){return t.getRenderTarget()===null?t.outputColorSpace:Vn}const $x={clone:hs,merge:Ot};var Kx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mr extends pl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kx,this.fragmentShader=Zx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hs(e.uniforms),this.uniformsGroups=qx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class kg extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=ii}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class mn extends kg{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=yc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yc*2*Math.atan(Math.tan(Jl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Jl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ur=-90,Dr=1;class Qx extends on{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new mn(Ur,Dr,e,n);r.layers=this.layers,this.add(r);const s=new mn(Ur,Dr,e,n);s.layers=this.layers,this.add(s);const o=new mn(Ur,Dr,e,n);o.layers=this.layers,this.add(o);const a=new mn(Ur,Dr,e,n);a.layers=this.layers,this.add(a);const l=new mn(Ur,Dr,e,n);l.layers=this.layers,this.add(l);const u=new mn(Ur,Dr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===ii)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ya)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,a,l,u]=this.children,f=e.getRenderTarget(),h=e.xr.enabled;e.xr.enabled=!1;const d=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,s),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=d,e.setRenderTarget(i,5),e.render(n,u),e.setRenderTarget(f),e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class Bg extends sn{constructor(e,n,i,r,s,o,a,l,u,f){e=e!==void 0?e:[],n=n!==void 0?n:cs,super(e,n,i,r,s,o,a,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jx extends pr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Ys("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ar?Ke:lr),this.texture=new Bg(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:pn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Eo(5,5,5),s=new mr({name:"CubemapFromEquirect",uniforms:hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Zt,blending:Di});s.uniforms.tEquirect.value=n;const o=new ri(r,s),a=n.minFilter;return n.minFilter===ho&&(n.minFilter=pn),new Qx(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const _u=new F,eS=new F,tS=new Ue;class Zi{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=_u.subVectors(i,n).cross(eS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(_u),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||tS.getNormalMatrix(e),r=this.coplanarPoint(_u).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qi=new yf,oa=new F;class Hg{constructor(e=new Zi,n=new Zi,i=new Zi,r=new Zi,s=new Zi,o=new Zi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ii){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],f=r[5],h=r[6],d=r[7],_=r[8],x=r[9],v=r[10],g=r[11],c=r[12],m=r[13],p=r[14],S=r[15];if(i[0].setComponents(l-s,d-u,g-_,S-c).normalize(),i[1].setComponents(l+s,d+u,g+_,S+c).normalize(),i[2].setComponents(l+o,d+f,g+x,S+m).normalize(),i[3].setComponents(l-o,d-f,g-x,S-m).normalize(),i[4].setComponents(l-a,d-h,g-v,S-p).normalize(),n===ii)i[5].setComponents(l+a,d+h,g+v,S+p).normalize();else if(n===Ya)i[5].setComponents(a,h,v,p).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),qi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(e){return qi.center.set(0,0,0),qi.radius=.7071067811865476,qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(oa.x=r.normal.x>0?e.max.x:e.min.x,oa.y=r.normal.y>0?e.max.y:e.min.y,oa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(oa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Gg(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function nS(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,f){const h=u.array,d=u.usage,_=t.createBuffer();t.bindBuffer(f,_),t.bufferData(f,h,d),u.onUploadCallback();let x;if(h instanceof Float32Array)x=t.FLOAT;else if(h instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)x=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=t.SHORT;else if(h instanceof Uint32Array)x=t.UNSIGNED_INT;else if(h instanceof Int32Array)x=t.INT;else if(h instanceof Int8Array)x=t.BYTE;else if(h instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version}}function s(u,f,h){const d=f.array,_=f.updateRange;t.bindBuffer(h,u),_.count===-1?t.bufferSubData(h,0,d):(n?t.bufferSubData(h,_.offset*d.BYTES_PER_ELEMENT,d,_.offset,_.count):t.bufferSubData(h,_.offset*d.BYTES_PER_ELEMENT,d.subarray(_.offset,_.offset+_.count)),_.count=-1),f.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f&&(t.deleteBuffer(f.buffer),i.delete(u))}function l(u,f){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const h=i.get(u);h===void 0?i.set(u,r(u,f)):h.version<u.version&&(s(h.buffer,u,f),h.version=u.version)}return{get:o,remove:a,update:l}}class Ef extends Gi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,f=l+1,h=e/a,d=n/l,_=[],x=[],v=[],g=[];for(let c=0;c<f;c++){const m=c*d-o;for(let p=0;p<u;p++){const S=p*h-s;x.push(S,-m,0),v.push(0,0,1),g.push(p/a),g.push(1-c/l)}}for(let c=0;c<l;c++)for(let m=0;m<a;m++){const p=m+u*c,S=m+u*(c+1),E=m+1+u*(c+1),C=m+1+u*c;_.push(p,S,C),_.push(S,E,C)}this.setIndex(_),this.setAttribute("position",new Gn(x,3)),this.setAttribute("normal",new Gn(v,3)),this.setAttribute("uv",new Gn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ef(e.width,e.height,e.widthSegments,e.heightSegments)}}var iS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rS=`#ifdef USE_ALPHAHASH
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
#endif`,sS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,oS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aS=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,lS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pS=`#ifdef USE_IRIDESCENCE
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
#endif`,mS=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,_S=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,SS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,MS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ES=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,TS=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,wS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,AS=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,RS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,CS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,LS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,PS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bS="gl_FragColor = linearToOutputTexel( gl_FragColor );",US=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,DS=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,IS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,NS=`#ifdef USE_ENVMAP
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
#endif`,FS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,OS=`#ifdef USE_ENVMAP
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
#endif`,zS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,BS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,HS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,GS=`#ifdef USE_GRADIENTMAP
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
}`,VS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,WS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,XS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,YS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,qS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,$S=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,KS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ZS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,QS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,JS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,ey=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,ty=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ny=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,iy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,ry=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ay=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ly=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fy=`#if defined( USE_POINTS_UV )
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
#endif`,dy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,py=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,my=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,gy=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,_y=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,vy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,xy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,My=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ey=`#ifdef USE_NORMALMAP
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
#endif`,Ty=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,wy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ay=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ry=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ly=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,Py=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,by=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Uy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Iy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ny=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Oy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ky=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,By=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Gy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vy=`#ifdef USE_SKINNING
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
#endif`,Wy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yy=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qy=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$y=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tM=`uniform sampler2D t2D;
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
}`,nM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oM=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,aM=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
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
	#endif
}`,lM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,uM=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dM=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hM=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pM=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,mM=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,gM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,_M=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,vM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,xM=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,SM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yM=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,MM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,EM=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,TM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,wM=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AM=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,RM=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,CM=`uniform float size;
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
}`,LM=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,PM=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,bM=`uniform vec3 color;
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
}`,UM=`uniform float rotation;
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
}`,DM=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Le={alphahash_fragment:iS,alphahash_pars_fragment:rS,alphamap_fragment:sS,alphamap_pars_fragment:oS,alphatest_fragment:aS,alphatest_pars_fragment:lS,aomap_fragment:uS,aomap_pars_fragment:cS,begin_vertex:fS,beginnormal_vertex:dS,bsdfs:hS,iridescence_fragment:pS,bumpmap_pars_fragment:mS,clipping_planes_fragment:gS,clipping_planes_pars_fragment:_S,clipping_planes_pars_vertex:vS,clipping_planes_vertex:xS,color_fragment:SS,color_pars_fragment:yS,color_pars_vertex:MS,color_vertex:ES,common:TS,cube_uv_reflection_fragment:wS,defaultnormal_vertex:AS,displacementmap_pars_vertex:RS,displacementmap_vertex:CS,emissivemap_fragment:LS,emissivemap_pars_fragment:PS,colorspace_fragment:bS,colorspace_pars_fragment:US,envmap_fragment:DS,envmap_common_pars_fragment:IS,envmap_pars_fragment:NS,envmap_pars_vertex:FS,envmap_physical_pars_fragment:qS,envmap_vertex:OS,fog_vertex:zS,fog_pars_vertex:kS,fog_fragment:BS,fog_pars_fragment:HS,gradientmap_pars_fragment:GS,lightmap_fragment:VS,lightmap_pars_fragment:WS,lights_lambert_fragment:XS,lights_lambert_pars_fragment:jS,lights_pars_begin:YS,lights_toon_fragment:$S,lights_toon_pars_fragment:KS,lights_phong_fragment:ZS,lights_phong_pars_fragment:QS,lights_physical_fragment:JS,lights_physical_pars_fragment:ey,lights_fragment_begin:ty,lights_fragment_maps:ny,lights_fragment_end:iy,logdepthbuf_fragment:ry,logdepthbuf_pars_fragment:sy,logdepthbuf_pars_vertex:oy,logdepthbuf_vertex:ay,map_fragment:ly,map_pars_fragment:uy,map_particle_fragment:cy,map_particle_pars_fragment:fy,metalnessmap_fragment:dy,metalnessmap_pars_fragment:hy,morphcolor_vertex:py,morphnormal_vertex:my,morphtarget_pars_vertex:gy,morphtarget_vertex:_y,normal_fragment_begin:vy,normal_fragment_maps:xy,normal_pars_fragment:Sy,normal_pars_vertex:yy,normal_vertex:My,normalmap_pars_fragment:Ey,clearcoat_normal_fragment_begin:Ty,clearcoat_normal_fragment_maps:wy,clearcoat_pars_fragment:Ay,iridescence_pars_fragment:Ry,opaque_fragment:Cy,packing:Ly,premultiplied_alpha_fragment:Py,project_vertex:by,dithering_fragment:Uy,dithering_pars_fragment:Dy,roughnessmap_fragment:Iy,roughnessmap_pars_fragment:Ny,shadowmap_pars_fragment:Fy,shadowmap_pars_vertex:Oy,shadowmap_vertex:zy,shadowmask_pars_fragment:ky,skinbase_vertex:By,skinning_pars_vertex:Hy,skinning_vertex:Gy,skinnormal_vertex:Vy,specularmap_fragment:Wy,specularmap_pars_fragment:Xy,tonemapping_fragment:jy,tonemapping_pars_fragment:Yy,transmission_fragment:qy,transmission_pars_fragment:$y,uv_pars_fragment:Ky,uv_pars_vertex:Zy,uv_vertex:Qy,worldpos_vertex:Jy,background_vert:eM,background_frag:tM,backgroundCube_vert:nM,backgroundCube_frag:iM,cube_vert:rM,cube_frag:sM,depth_vert:oM,depth_frag:aM,distanceRGBA_vert:lM,distanceRGBA_frag:uM,equirect_vert:cM,equirect_frag:fM,linedashed_vert:dM,linedashed_frag:hM,meshbasic_vert:pM,meshbasic_frag:mM,meshlambert_vert:gM,meshlambert_frag:_M,meshmatcap_vert:vM,meshmatcap_frag:xM,meshnormal_vert:SM,meshnormal_frag:yM,meshphong_vert:MM,meshphong_frag:EM,meshphysical_vert:TM,meshphysical_frag:wM,meshtoon_vert:AM,meshtoon_frag:RM,points_vert:CM,points_frag:LM,shadow_vert:PM,shadow_frag:bM,sprite_vert:UM,sprite_frag:DM},re={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},On={basic:{uniforms:Ot([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:Ot([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new qe(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:Ot([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:Ot([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:Ot([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new qe(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:Ot([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:Ot([re.points,re.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:Ot([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:Ot([re.common,re.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:Ot([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:Ot([re.sprite,re.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:Ot([re.common,re.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:Ot([re.lights,re.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};On.physical={uniforms:Ot([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};const aa={r:0,b:0,g:0};function IM(t,e,n,i,r,s,o){const a=new qe(0);let l=s===!0?0:1,u,f,h=null,d=0,_=null;function x(g,c){let m=!1,p=c.isScene===!0?c.background:null;p&&p.isTexture&&(p=(c.backgroundBlurriness>0?n:e).get(p)),p===null?v(a,l):p&&p.isColor&&(v(p,1),m=!0);const S=t.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||m)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),p&&(p.isCubeTexture||p.mapping===fl)?(f===void 0&&(f=new ri(new Eo(1,1,1),new mr({name:"BackgroundCubeMaterial",uniforms:hs(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(E,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=p,f.material.uniforms.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,f.material.toneMapped=p.colorSpace!==Ke,(h!==p||d!==p.version||_!==t.toneMapping)&&(f.material.needsUpdate=!0,h=p,d=p.version,_=t.toneMapping),f.layers.enableAll(),g.unshift(f,f.geometry,f.material,0,0,null)):p&&p.isTexture&&(u===void 0&&(u=new ri(new Ef(2,2),new mr({name:"BackgroundMaterial",uniforms:hs(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=p,u.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,u.material.toneMapped=p.colorSpace!==Ke,p.matrixAutoUpdate===!0&&p.updateMatrix(),u.material.uniforms.uvTransform.value.copy(p.matrix),(h!==p||d!==p.version||_!==t.toneMapping)&&(u.material.needsUpdate=!0,h=p,d=p.version,_=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null))}function v(g,c){g.getRGB(aa,zg(t)),i.buffers.color.setClear(aa.r,aa.g,aa.b,c,o)}return{getClearColor:function(){return a},setClearColor:function(g,c=1){a.set(g),l=c,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,v(a,l)},render:x}}function NM(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=g(null);let u=l,f=!1;function h(j,Y,Z,q,b){let V=!1;if(o){const B=v(q,Z,Y);u!==B&&(u=B,_(u.object)),V=c(j,q,Z,b),V&&m(j,q,Z,b)}else{const B=Y.wireframe===!0;(u.geometry!==q.id||u.program!==Z.id||u.wireframe!==B)&&(u.geometry=q.id,u.program=Z.id,u.wireframe=B,V=!0)}b!==null&&n.update(b,t.ELEMENT_ARRAY_BUFFER),(V||f)&&(f=!1,P(j,Y,Z,q),b!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(b).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function _(j){return i.isWebGL2?t.bindVertexArray(j):s.bindVertexArrayOES(j)}function x(j){return i.isWebGL2?t.deleteVertexArray(j):s.deleteVertexArrayOES(j)}function v(j,Y,Z){const q=Z.wireframe===!0;let b=a[j.id];b===void 0&&(b={},a[j.id]=b);let V=b[Y.id];V===void 0&&(V={},b[Y.id]=V);let B=V[q];return B===void 0&&(B=g(d()),V[q]=B),B}function g(j){const Y=[],Z=[],q=[];for(let b=0;b<r;b++)Y[b]=0,Z[b]=0,q[b]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:Z,attributeDivisors:q,object:j,attributes:{},index:null}}function c(j,Y,Z,q){const b=u.attributes,V=Y.attributes;let B=0;const U=Z.getAttributes();for(const O in U)if(U[O].location>=0){const oe=b[O];let ue=V[O];if(ue===void 0&&(O==="instanceMatrix"&&j.instanceMatrix&&(ue=j.instanceMatrix),O==="instanceColor"&&j.instanceColor&&(ue=j.instanceColor)),oe===void 0||oe.attribute!==ue||ue&&oe.data!==ue.data)return!0;B++}return u.attributesNum!==B||u.index!==q}function m(j,Y,Z,q){const b={},V=Y.attributes;let B=0;const U=Z.getAttributes();for(const O in U)if(U[O].location>=0){let oe=V[O];oe===void 0&&(O==="instanceMatrix"&&j.instanceMatrix&&(oe=j.instanceMatrix),O==="instanceColor"&&j.instanceColor&&(oe=j.instanceColor));const ue={};ue.attribute=oe,oe&&oe.data&&(ue.data=oe.data),b[O]=ue,B++}u.attributes=b,u.attributesNum=B,u.index=q}function p(){const j=u.newAttributes;for(let Y=0,Z=j.length;Y<Z;Y++)j[Y]=0}function S(j){E(j,0)}function E(j,Y){const Z=u.newAttributes,q=u.enabledAttributes,b=u.attributeDivisors;Z[j]=1,q[j]===0&&(t.enableVertexAttribArray(j),q[j]=1),b[j]!==Y&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](j,Y),b[j]=Y)}function C(){const j=u.newAttributes,Y=u.enabledAttributes;for(let Z=0,q=Y.length;Z<q;Z++)Y[Z]!==j[Z]&&(t.disableVertexAttribArray(Z),Y[Z]=0)}function A(j,Y,Z,q,b,V,B){B===!0?t.vertexAttribIPointer(j,Y,Z,b,V):t.vertexAttribPointer(j,Y,Z,q,b,V)}function P(j,Y,Z,q){if(i.isWebGL2===!1&&(j.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;p();const b=q.attributes,V=Z.getAttributes(),B=Y.defaultAttributeValues;for(const U in V){const O=V[U];if(O.location>=0){let se=b[U];if(se===void 0&&(U==="instanceMatrix"&&j.instanceMatrix&&(se=j.instanceMatrix),U==="instanceColor"&&j.instanceColor&&(se=j.instanceColor)),se!==void 0){const oe=se.normalized,ue=se.itemSize,pe=n.get(se);if(pe===void 0)continue;const Se=pe.buffer,ye=pe.type,Be=pe.bytesPerElement,Vt=i.isWebGL2===!0&&(ye===t.INT||ye===t.UNSIGNED_INT||se.gpuType===Eg);if(se.isInterleavedBufferAttribute){const Pe=se.data,I=Pe.stride,Rt=se.offset;if(Pe.isInstancedInterleavedBuffer){for(let Me=0;Me<O.locationSize;Me++)E(O.location+Me,Pe.meshPerAttribute);j.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Pe.meshPerAttribute*Pe.count)}else for(let Me=0;Me<O.locationSize;Me++)S(O.location+Me);t.bindBuffer(t.ARRAY_BUFFER,Se);for(let Me=0;Me<O.locationSize;Me++)A(O.location+Me,ue/O.locationSize,ye,oe,I*Be,(Rt+ue/O.locationSize*Me)*Be,Vt)}else{if(se.isInstancedBufferAttribute){for(let Pe=0;Pe<O.locationSize;Pe++)E(O.location+Pe,se.meshPerAttribute);j.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Pe=0;Pe<O.locationSize;Pe++)S(O.location+Pe);t.bindBuffer(t.ARRAY_BUFFER,Se);for(let Pe=0;Pe<O.locationSize;Pe++)A(O.location+Pe,ue/O.locationSize,ye,oe,ue*Be,ue/O.locationSize*Pe*Be,Vt)}}else if(B!==void 0){const oe=B[U];if(oe!==void 0)switch(oe.length){case 2:t.vertexAttrib2fv(O.location,oe);break;case 3:t.vertexAttrib3fv(O.location,oe);break;case 4:t.vertexAttrib4fv(O.location,oe);break;default:t.vertexAttrib1fv(O.location,oe)}}}}C()}function y(){K();for(const j in a){const Y=a[j];for(const Z in Y){const q=Y[Z];for(const b in q)x(q[b].object),delete q[b];delete Y[Z]}delete a[j]}}function T(j){if(a[j.id]===void 0)return;const Y=a[j.id];for(const Z in Y){const q=Y[Z];for(const b in q)x(q[b].object),delete q[b];delete Y[Z]}delete a[j.id]}function $(j){for(const Y in a){const Z=a[Y];if(Z[j.id]===void 0)continue;const q=Z[j.id];for(const b in q)x(q[b].object),delete q[b];delete Z[j.id]}}function K(){z(),f=!0,u!==l&&(u=l,_(u.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:K,resetDefaultState:z,dispose:y,releaseStatesOfGeometry:T,releaseStatesOfProgram:$,initAttributes:p,enableAttribute:S,disableUnusedAttributes:C}}function FM(t,e,n,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,f){t.drawArrays(s,u,f),n.update(f,s,1)}function l(u,f,h){if(h===0)return;let d,_;if(r)d=t,_="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[_](s,u,f,h),n.update(f,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function OM(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),v=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),c=t.getParameter(t.MAX_VARYING_VECTORS),m=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),p=d>0,S=o||e.has("OES_texture_float"),E=p&&S,C=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:d,maxTextureSize:_,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:g,maxVaryings:c,maxFragmentUniforms:m,vertexTextures:p,floatFragmentTextures:S,floatVertexTextures:E,maxSamples:C}}function zM(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Zi,a=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const _=h.length!==0||d||i!==0||r;return r=d,i=h.length,_},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,_){const x=h.clippingPlanes,v=h.clipIntersection,g=h.clipShadows,c=t.get(h);if(!r||x===null||x.length===0||s&&!g)s?f(null):u();else{const m=s?0:i,p=m*4;let S=c.clippingState||null;l.value=S,S=f(x,d,p,_);for(let E=0;E!==p;++E)S[E]=n[E];c.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=m}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,_,x){const v=h!==null?h.length:0;let g=null;if(v!==0){if(g=l.value,x!==!0||g===null){const c=_+v*4,m=d.matrixWorldInverse;a.getNormalMatrix(m),(g===null||g.length<c)&&(g=new Float32Array(c));for(let p=0,S=_;p!==v;++p,S+=4)o.copy(h[p]).applyMatrix4(m,a),o.normal.toArray(g,S),g[S+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function kM(t){let e=new WeakMap;function n(o,a){return a===gc?o.mapping=cs:a===_c&&(o.mapping=fs),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===gc||a===_c)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Jx(l.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class BM extends kg{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const qr=4,Oh=[.125,.215,.35,.446,.526,.582],Ji=20,vu=new BM,zh=new qe;let xu=null;const Qi=(1+Math.sqrt(5))/2,Ir=1/Qi,kh=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,Qi,Ir),new F(0,Qi,-Ir),new F(Ir,0,Qi),new F(-Ir,0,Qi),new F(Qi,Ir,0),new F(-Qi,Ir,0)];class Bh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){xu=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xu),e.scissorTest=!1,la(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===cs||e.mapping===fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xu=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:po,format:Pn,colorSpace:Vn,depthBuffer:!1},r=Hh(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hh(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=HM(s)),this._blurMaterial=GM(s,e,n)}return r}_compileMaterial(e){const n=new ri(this._lodPlanes[0],e);this._renderer.compile(n,vu)}_sceneToCubeUV(e,n,i,r){const a=new mn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(zh),f.toneMapping=Ii,f.autoClear=!1;const _=new Mf({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1}),x=new ri(new Eo,_);let v=!1;const g=e.background;g?g.isColor&&(_.color.copy(g),e.background=null,v=!0):(_.color.copy(zh),v=!0);for(let c=0;c<6;c++){const m=c%3;m===0?(a.up.set(0,l[c],0),a.lookAt(u[c],0,0)):m===1?(a.up.set(0,0,l[c]),a.lookAt(0,u[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,u[c]));const p=this._cubeSize;la(r,m*p,c>2?p:0,p,p),f.setRenderTarget(r),v&&f.render(x,a),f.render(e,a)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===cs||e.mapping===fs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ri(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;la(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,vu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=kh[(r-1)%kh.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new ri(this._lodPlanes[r],u),d=u.uniforms,_=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*Ji-1),v=s/x,g=isFinite(s)?1+Math.floor(f*v):Ji;g>Ji&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ji}`);const c=[];let m=0;for(let A=0;A<Ji;++A){const P=A/v,y=Math.exp(-P*P/2);c.push(y),A===0?m+=y:A<g&&(m+=2*y)}for(let A=0;A<c.length;A++)c[A]=c[A]/m;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=c,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:p}=this;d.dTheta.value=x,d.mipInt.value=p-i;const S=this._sizeLods[r],E=3*S*(r>p-qr?r-p+qr:0),C=4*(this._cubeSize-S);la(n,E,C,3*S,2*S),l.setRenderTarget(n),l.render(h,vu)}}function HM(t){const e=[],n=[],i=[];let r=t;const s=t-qr+1+Oh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-qr?l=Oh[o-t+qr-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),f=-u,h=1+u,d=[f,f,h,f,h,h,f,f,h,h,f,h],_=6,x=6,v=3,g=2,c=1,m=new Float32Array(v*x*_),p=new Float32Array(g*x*_),S=new Float32Array(c*x*_);for(let C=0;C<_;C++){const A=C%3*2/3-1,P=C>2?0:-1,y=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];m.set(y,v*x*C),p.set(d,g*x*C);const T=[C,C,C,C,C,C];S.set(T,c*x*C)}const E=new Gi;E.setAttribute("position",new Hn(m,v)),E.setAttribute("uv",new Hn(p,g)),E.setAttribute("faceIndex",new Hn(S,c)),e.push(E),r>qr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Hh(t,e,n){const i=new pr(t,e,n);return i.texture.mapping=fl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function la(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function GM(t,e,n){const i=new Float32Array(Ji),r=new F(0,1,0);return new mr({name:"SphericalGaussianBlur",defines:{n:Ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Tf(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Gh(){return new mr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tf(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Vh(){return new mr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Tf(){return`

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
	`}function VM(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===gc||l===_c,f=l===cs||l===fs;if(u||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return n===null&&(n=new Bh(t)),h=u?n.fromEquirectangular(a,h):n.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(u&&h&&h.height>0||f&&h&&r(h)){n===null&&(n=new Bh(t));const d=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let f=0;f<u;f++)a[f]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function WM(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function XM(t,e,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);for(const x in d.morphAttributes){const v=d.morphAttributes[x];for(let g=0,c=v.length;g<c;g++)e.remove(v[g])}d.removeEventListener("dispose",o),delete r[d.id];const _=s.get(d);_&&(e.remove(_),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const x in d)e.update(d[x],t.ARRAY_BUFFER);const _=h.morphAttributes;for(const x in _){const v=_[x];for(let g=0,c=v.length;g<c;g++)e.update(v[g],t.ARRAY_BUFFER)}}function u(h){const d=[],_=h.index,x=h.attributes.position;let v=0;if(_!==null){const m=_.array;v=_.version;for(let p=0,S=m.length;p<S;p+=3){const E=m[p+0],C=m[p+1],A=m[p+2];d.push(E,C,C,A,A,E)}}else if(x!==void 0){const m=x.array;v=x.version;for(let p=0,S=m.length/3-1;p<S;p+=3){const E=p+0,C=p+1,A=p+2;d.push(E,C,C,A,A,E)}}else return;const g=new(Pg(d)?Og:Fg)(d,1);g.version=v;const c=s.get(h);c&&e.remove(c),s.set(h,g)}function f(h){const d=s.get(h);if(d){const _=h.index;_!==null&&d.version<_.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function jM(t,e,n,i){const r=i.isWebGL2;let s;function o(d){s=d}let a,l;function u(d){a=d.type,l=d.bytesPerElement}function f(d,_){t.drawElements(s,_,a,d*l),n.update(_,s,1)}function h(d,_,x){if(x===0)return;let v,g;if(r)v=t,g="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[g](s,_,a,d*l,x),n.update(_,s,x)}this.setMode=o,this.setIndex=u,this.render=f,this.renderInstances=h}function YM(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function qM(t,e){return t[0]-e[0]}function $M(t,e){return Math.abs(e[1])-Math.abs(t[1])}function KM(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Et,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,f,h){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const x=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=x!==void 0?x.length:0;let g=s.get(f);if(g===void 0||g.count!==v){let Y=function(){z.dispose(),s.delete(f),f.removeEventListener("dispose",Y)};var _=Y;g!==void 0&&g.texture.dispose();const p=f.morphAttributes.position!==void 0,S=f.morphAttributes.normal!==void 0,E=f.morphAttributes.color!==void 0,C=f.morphAttributes.position||[],A=f.morphAttributes.normal||[],P=f.morphAttributes.color||[];let y=0;p===!0&&(y=1),S===!0&&(y=2),E===!0&&(y=3);let T=f.attributes.position.count*y,$=1;T>e.maxTextureSize&&($=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const K=new Float32Array(T*$*4*v),z=new Dg(K,T,$,v);z.type=Ti,z.needsUpdate=!0;const j=y*4;for(let Z=0;Z<v;Z++){const q=C[Z],b=A[Z],V=P[Z],B=T*$*4*Z;for(let U=0;U<q.count;U++){const O=U*j;p===!0&&(o.fromBufferAttribute(q,U),K[B+O+0]=o.x,K[B+O+1]=o.y,K[B+O+2]=o.z,K[B+O+3]=0),S===!0&&(o.fromBufferAttribute(b,U),K[B+O+4]=o.x,K[B+O+5]=o.y,K[B+O+6]=o.z,K[B+O+7]=0),E===!0&&(o.fromBufferAttribute(V,U),K[B+O+8]=o.x,K[B+O+9]=o.y,K[B+O+10]=o.z,K[B+O+11]=V.itemSize===4?o.w:1)}}g={count:v,texture:z,size:new He(T,$)},s.set(f,g),f.addEventListener("dispose",Y)}let c=0;for(let p=0;p<d.length;p++)c+=d[p];const m=f.morphTargetsRelative?1:1-c;h.getUniforms().setValue(t,"morphTargetBaseInfluence",m),h.getUniforms().setValue(t,"morphTargetInfluences",d),h.getUniforms().setValue(t,"morphTargetsTexture",g.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",g.size)}else{const x=d===void 0?0:d.length;let v=i[f.id];if(v===void 0||v.length!==x){v=[];for(let S=0;S<x;S++)v[S]=[S,0];i[f.id]=v}for(let S=0;S<x;S++){const E=v[S];E[0]=S,E[1]=d[S]}v.sort($M);for(let S=0;S<8;S++)S<x&&v[S][1]?(a[S][0]=v[S][0],a[S][1]=v[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(qM);const g=f.morphAttributes.position,c=f.morphAttributes.normal;let m=0;for(let S=0;S<8;S++){const E=a[S],C=E[0],A=E[1];C!==Number.MAX_SAFE_INTEGER&&A?(g&&f.getAttribute("morphTarget"+S)!==g[C]&&f.setAttribute("morphTarget"+S,g[C]),c&&f.getAttribute("morphNormal"+S)!==c[C]&&f.setAttribute("morphNormal"+S,c[C]),r[S]=A,m+=A):(g&&f.hasAttribute("morphTarget"+S)===!0&&f.deleteAttribute("morphTarget"+S),c&&f.hasAttribute("morphNormal"+S)===!0&&f.deleteAttribute("morphNormal"+S),r[S]=0)}const p=f.morphTargetsRelative?1:1-m;h.getUniforms().setValue(t,"morphTargetBaseInfluence",p),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function ZM(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,f=l.geometry,h=e.get(l,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}const Vg=new sn,Wg=new Dg,Xg=new Nx,jg=new Bg,Wh=[],Xh=[],jh=new Float32Array(16),Yh=new Float32Array(9),qh=new Float32Array(4);function vs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Wh[r];if(s===void 0&&(s=new Float32Array(r),Wh[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function mt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function gt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ml(t,e){let n=Xh[e];n===void 0&&(n=new Int32Array(e),Xh[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function QM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function JM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(mt(n,e))return;t.uniform2fv(this.addr,e),gt(n,e)}}function eE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(mt(n,e))return;t.uniform3fv(this.addr,e),gt(n,e)}}function tE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(mt(n,e))return;t.uniform4fv(this.addr,e),gt(n,e)}}function nE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(mt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),gt(n,e)}else{if(mt(n,i))return;qh.set(i),t.uniformMatrix2fv(this.addr,!1,qh),gt(n,i)}}function iE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(mt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),gt(n,e)}else{if(mt(n,i))return;Yh.set(i),t.uniformMatrix3fv(this.addr,!1,Yh),gt(n,i)}}function rE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(mt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),gt(n,e)}else{if(mt(n,i))return;jh.set(i),t.uniformMatrix4fv(this.addr,!1,jh),gt(n,i)}}function sE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function oE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(mt(n,e))return;t.uniform2iv(this.addr,e),gt(n,e)}}function aE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(mt(n,e))return;t.uniform3iv(this.addr,e),gt(n,e)}}function lE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(mt(n,e))return;t.uniform4iv(this.addr,e),gt(n,e)}}function uE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function cE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(mt(n,e))return;t.uniform2uiv(this.addr,e),gt(n,e)}}function fE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(mt(n,e))return;t.uniform3uiv(this.addr,e),gt(n,e)}}function dE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(mt(n,e))return;t.uniform4uiv(this.addr,e),gt(n,e)}}function hE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||Vg,r)}function pE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Xg,r)}function mE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||jg,r)}function gE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Wg,r)}function _E(t){switch(t){case 5126:return QM;case 35664:return JM;case 35665:return eE;case 35666:return tE;case 35674:return nE;case 35675:return iE;case 35676:return rE;case 5124:case 35670:return sE;case 35667:case 35671:return oE;case 35668:case 35672:return aE;case 35669:case 35673:return lE;case 5125:return uE;case 36294:return cE;case 36295:return fE;case 36296:return dE;case 35678:case 36198:case 36298:case 36306:case 35682:return hE;case 35679:case 36299:case 36307:return pE;case 35680:case 36300:case 36308:case 36293:return mE;case 36289:case 36303:case 36311:case 36292:return gE}}function vE(t,e){t.uniform1fv(this.addr,e)}function xE(t,e){const n=vs(e,this.size,2);t.uniform2fv(this.addr,n)}function SE(t,e){const n=vs(e,this.size,3);t.uniform3fv(this.addr,n)}function yE(t,e){const n=vs(e,this.size,4);t.uniform4fv(this.addr,n)}function ME(t,e){const n=vs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function EE(t,e){const n=vs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function TE(t,e){const n=vs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function wE(t,e){t.uniform1iv(this.addr,e)}function AE(t,e){t.uniform2iv(this.addr,e)}function RE(t,e){t.uniform3iv(this.addr,e)}function CE(t,e){t.uniform4iv(this.addr,e)}function LE(t,e){t.uniform1uiv(this.addr,e)}function PE(t,e){t.uniform2uiv(this.addr,e)}function bE(t,e){t.uniform3uiv(this.addr,e)}function UE(t,e){t.uniform4uiv(this.addr,e)}function DE(t,e,n){const i=this.cache,r=e.length,s=ml(n,r);mt(i,s)||(t.uniform1iv(this.addr,s),gt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Vg,s[o])}function IE(t,e,n){const i=this.cache,r=e.length,s=ml(n,r);mt(i,s)||(t.uniform1iv(this.addr,s),gt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Xg,s[o])}function NE(t,e,n){const i=this.cache,r=e.length,s=ml(n,r);mt(i,s)||(t.uniform1iv(this.addr,s),gt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||jg,s[o])}function FE(t,e,n){const i=this.cache,r=e.length,s=ml(n,r);mt(i,s)||(t.uniform1iv(this.addr,s),gt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Wg,s[o])}function OE(t){switch(t){case 5126:return vE;case 35664:return xE;case 35665:return SE;case 35666:return yE;case 35674:return ME;case 35675:return EE;case 35676:return TE;case 5124:case 35670:return wE;case 35667:case 35671:return AE;case 35668:case 35672:return RE;case 35669:case 35673:return CE;case 5125:return LE;case 36294:return PE;case 36295:return bE;case 36296:return UE;case 35678:case 36198:case 36298:case 36306:case 35682:return DE;case 35679:case 36299:case 36307:return IE;case 35680:case 36300:case 36308:case 36293:return NE;case 36289:case 36303:case 36311:case 36292:return FE}}class zE{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=_E(n.type)}}class kE{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=OE(n.type)}}class BE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Su=/(\w+)(\])?(\[|\.)?/g;function $h(t,e){t.seq.push(e),t.map[e.id]=e}function HE(t,e,n){const i=t.name,r=i.length;for(Su.lastIndex=0;;){const s=Su.exec(i),o=Su.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){$h(n,u===void 0?new zE(a,t,e):new kE(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new BE(a),$h(n,h)),n=h}}}class Ma{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);HE(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Kh(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let GE=0;function VE(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function WE(t){switch(t){case Vn:return["Linear","( value )"];case Ke:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function Zh(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+VE(t.getShaderSource(e),o)}else return r}function XE(t,e){const n=WE(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function jE(t,e){let n;switch(e){case K0:n="Linear";break;case Z0:n="Reinhard";break;case Q0:n="OptimizedCineon";break;case J0:n="ACESFilmic";break;case ex:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function YE(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Os).join(`
`)}function qE(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function $E(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Os(t){return t!==""}function Qh(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const KE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ec(t){return t.replace(KE,QE)}const ZE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function QE(t,e){let n=Le[e];if(n===void 0){const i=ZE.get(e);if(i!==void 0)n=Le[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ec(n)}const JE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ep(t){return t.replace(JE,eT)}function eT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function tp(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function tT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===vg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===C0?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Zn&&(e="SHADOWMAP_TYPE_VSM"),e}function nT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case cs:case fs:e="ENVMAP_TYPE_CUBE";break;case fl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function iT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case fs:e="ENVMAP_MODE_REFRACTION";break}return e}function rT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case yg:e="ENVMAP_BLENDING_MULTIPLY";break;case q0:e="ENVMAP_BLENDING_MIX";break;case $0:e="ENVMAP_BLENDING_ADD";break}return e}function sT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function oT(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=tT(n),u=nT(n),f=iT(n),h=rT(n),d=sT(n),_=n.isWebGL2?"":YE(n),x=qE(s),v=r.createProgram();let g,c,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Os).join(`
`),g.length>0&&(g+=`
`),c=[_,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Os).join(`
`),c.length>0&&(c+=`
`)):(g=[tp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Os).join(`
`),c=[_,tp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ii?"#define TONE_MAPPING":"",n.toneMapping!==Ii?Le.tonemapping_pars_fragment:"",n.toneMapping!==Ii?jE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Le.colorspace_pars_fragment,XE("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Os).join(`
`)),o=Ec(o),o=Qh(o,n),o=Jh(o,n),a=Ec(a),a=Qh(a,n),a=Jh(a,n),o=ep(o),a=ep(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,c=["#define varying in",n.glslVersion===yh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===yh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const p=m+g+o,S=m+c+a,E=Kh(r,r.VERTEX_SHADER,p),C=Kh(r,r.FRAGMENT_SHADER,S);if(r.attachShader(v,E),r.attachShader(v,C),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),t.debug.checkShaderErrors){const y=r.getProgramInfoLog(v).trim(),T=r.getShaderInfoLog(E).trim(),$=r.getShaderInfoLog(C).trim();let K=!0,z=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(K=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,E,C);else{const j=Zh(r,E,"vertex"),Y=Zh(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+y+`
`+j+`
`+Y)}else y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",y):(T===""||$==="")&&(z=!1);z&&(this.diagnostics={runnable:K,programLog:y,vertexShader:{log:T,prefix:g},fragmentShader:{log:$,prefix:c}})}r.deleteShader(E),r.deleteShader(C);let A;this.getUniforms=function(){return A===void 0&&(A=new Ma(r,v)),A};let P;return this.getAttributes=function(){return P===void 0&&(P=$E(r,v)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=GE++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=C,this}let aT=0;class lT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new uT(e),n.set(e,i)),i}}class uT{constructor(e){this.id=aT++,this.code=e,this.usedTimes=0}}function cT(t,e,n,i,r,s,o){const a=new Ig,l=new lT,u=[],f=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let _=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return y===0?"uv":`uv${y}`}function g(y,T,$,K,z){const j=K.fog,Y=z.geometry,Z=y.isMeshStandardMaterial?K.environment:null,q=(y.isMeshStandardMaterial?n:e).get(y.envMap||Z),b=q&&q.mapping===fl?q.image.height:null,V=x[y.type];y.precision!==null&&(_=r.getMaxPrecision(y.precision),_!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",_,"instead."));const B=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,U=B!==void 0?B.length:0;let O=0;Y.morphAttributes.position!==void 0&&(O=1),Y.morphAttributes.normal!==void 0&&(O=2),Y.morphAttributes.color!==void 0&&(O=3);let se,oe,ue,pe;if(V){const je=On[V];se=je.vertexShader,oe=je.fragmentShader}else se=y.vertexShader,oe=y.fragmentShader,l.update(y),ue=l.getVertexShaderID(y),pe=l.getFragmentShaderID(y);const Se=t.getRenderTarget(),ye=z.isInstancedMesh===!0,Be=!!y.map,Vt=!!y.matcap,Pe=!!q,I=!!y.aoMap,Rt=!!y.lightMap,Me=!!y.bumpMap,Re=!!y.normalMap,Ae=!!y.displacementMap,Qe=!!y.emissiveMap,Oe=!!y.metalnessMap,be=!!y.roughnessMap,Ve=y.anisotropy>0,yt=y.clearcoat>0,Ct=y.iridescence>0,R=y.sheen>0,M=y.transmission>0,k=Ve&&!!y.anisotropyMap,ee=yt&&!!y.clearcoatMap,J=yt&&!!y.clearcoatNormalMap,te=yt&&!!y.clearcoatRoughnessMap,me=Ct&&!!y.iridescenceMap,ne=Ct&&!!y.iridescenceThicknessMap,G=R&&!!y.sheenColorMap,ve=R&&!!y.sheenRoughnessMap,ge=!!y.specularMap,_e=!!y.specularColorMap,de=!!y.specularIntensityMap,he=M&&!!y.transmissionMap,De=M&&!!y.thicknessMap,We=!!y.gradientMap,L=!!y.alphaMap,ae=y.alphaTest>0,H=!!y.alphaHash,ie=!!y.extensions,le=!!Y.attributes.uv1,ke=!!Y.attributes.uv2,Je=!!Y.attributes.uv3;let at=Ii;return y.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(at=t.toneMapping),{isWebGL2:f,shaderID:V,shaderType:y.type,shaderName:y.name,vertexShader:se,fragmentShader:oe,defines:y.defines,customVertexShaderID:ue,customFragmentShaderID:pe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:_,instancing:ye,instancingColor:ye&&z.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Se===null?t.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:Vn,map:Be,matcap:Vt,envMap:Pe,envMapMode:Pe&&q.mapping,envMapCubeUVHeight:b,aoMap:I,lightMap:Rt,bumpMap:Me,normalMap:Re,displacementMap:d&&Ae,emissiveMap:Qe,normalMapObjectSpace:Re&&y.normalMapType===px,normalMapTangentSpace:Re&&y.normalMapType===hx,metalnessMap:Oe,roughnessMap:be,anisotropy:Ve,anisotropyMap:k,clearcoat:yt,clearcoatMap:ee,clearcoatNormalMap:J,clearcoatRoughnessMap:te,iridescence:Ct,iridescenceMap:me,iridescenceThicknessMap:ne,sheen:R,sheenColorMap:G,sheenRoughnessMap:ve,specularMap:ge,specularColorMap:_e,specularIntensityMap:de,transmission:M,transmissionMap:he,thicknessMap:De,gradientMap:We,opaque:y.transparent===!1&&y.blending===ts,alphaMap:L,alphaTest:ae,alphaHash:H,combine:y.combine,mapUv:Be&&v(y.map.channel),aoMapUv:I&&v(y.aoMap.channel),lightMapUv:Rt&&v(y.lightMap.channel),bumpMapUv:Me&&v(y.bumpMap.channel),normalMapUv:Re&&v(y.normalMap.channel),displacementMapUv:Ae&&v(y.displacementMap.channel),emissiveMapUv:Qe&&v(y.emissiveMap.channel),metalnessMapUv:Oe&&v(y.metalnessMap.channel),roughnessMapUv:be&&v(y.roughnessMap.channel),anisotropyMapUv:k&&v(y.anisotropyMap.channel),clearcoatMapUv:ee&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:J&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:G&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:ve&&v(y.sheenRoughnessMap.channel),specularMapUv:ge&&v(y.specularMap.channel),specularColorMapUv:_e&&v(y.specularColorMap.channel),specularIntensityMapUv:de&&v(y.specularIntensityMap.channel),transmissionMapUv:he&&v(y.transmissionMap.channel),thicknessMapUv:De&&v(y.thicknessMap.channel),alphaMapUv:L&&v(y.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Re||Ve),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,vertexUv1s:le,vertexUv2s:ke,vertexUv3s:Je,pointsUvs:z.isPoints===!0&&!!Y.attributes.uv&&(Be||L),fog:!!j,useFog:y.fog===!0,fogExp2:j&&j.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:z.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:O,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&$.length>0,shadowMapType:t.shadowMap.type,toneMapping:at,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Be&&y.map.isVideoTexture===!0&&y.map.colorSpace===Ke,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ei,flipSided:y.side===Zt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:ie&&y.extensions.derivatives===!0,extensionFragDepth:ie&&y.extensions.fragDepth===!0,extensionDrawBuffers:ie&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:ie&&y.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function c(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const $ in y.defines)T.push($),T.push(y.defines[$]);return y.isRawShaderMaterial===!1&&(m(T,y),p(T,y),T.push(t.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function m(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function p(y,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function S(y){const T=x[y.type];let $;if(T){const K=On[T];$=$x.clone(K.uniforms)}else $=y.uniforms;return $}function E(y,T){let $;for(let K=0,z=u.length;K<z;K++){const j=u[K];if(j.cacheKey===T){$=j,++$.usedTimes;break}}return $===void 0&&($=new oT(t,T,y,s),u.push($)),$}function C(y){if(--y.usedTimes===0){const T=u.indexOf(y);u[T]=u[u.length-1],u.pop(),y.destroy()}}function A(y){l.remove(y)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:c,getUniforms:S,acquireProgram:E,releaseProgram:C,releaseShaderCache:A,programs:u,dispose:P}}function fT(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function dT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function np(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function ip(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,d,_,x,v,g){let c=t[e];return c===void 0?(c={id:h.id,object:h,geometry:d,material:_,groupOrder:x,renderOrder:h.renderOrder,z:v,group:g},t[e]=c):(c.id=h.id,c.object=h,c.geometry=d,c.material=_,c.groupOrder=x,c.renderOrder=h.renderOrder,c.z=v,c.group=g),e++,c}function a(h,d,_,x,v,g){const c=o(h,d,_,x,v,g);_.transmission>0?i.push(c):_.transparent===!0?r.push(c):n.push(c)}function l(h,d,_,x,v,g){const c=o(h,d,_,x,v,g);_.transmission>0?i.unshift(c):_.transparent===!0?r.unshift(c):n.unshift(c)}function u(h,d){n.length>1&&n.sort(h||dT),i.length>1&&i.sort(d||np),r.length>1&&r.sort(d||np)}function f(){for(let h=e,d=t.length;h<d;h++){const _=t[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:u}}function hT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new ip,t.set(i,[o])):r>=s.length?(o=new ip,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function pT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new F,color:new qe};break;case"SpotLight":n={position:new F,direction:new F,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":n={color:new qe,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function mT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let gT=0;function _T(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function vT(t,e){const n=new pT,i=mT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let f=0;f<9;f++)r.probe.push(new F);const s=new F,o=new wt,a=new wt;function l(f,h){let d=0,_=0,x=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let v=0,g=0,c=0,m=0,p=0,S=0,E=0,C=0,A=0,P=0;f.sort(_T);const y=h===!0?Math.PI:1;for(let $=0,K=f.length;$<K;$++){const z=f[$],j=z.color,Y=z.intensity,Z=z.distance,q=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)d+=j.r*Y*y,_+=j.g*Y*y,x+=j.b*Y*y;else if(z.isLightProbe)for(let b=0;b<9;b++)r.probe[b].addScaledVector(z.sh.coefficients[b],Y);else if(z.isDirectionalLight){const b=n.get(z);if(b.color.copy(z.color).multiplyScalar(z.intensity*y),z.castShadow){const V=z.shadow,B=i.get(z);B.shadowBias=V.bias,B.shadowNormalBias=V.normalBias,B.shadowRadius=V.radius,B.shadowMapSize=V.mapSize,r.directionalShadow[v]=B,r.directionalShadowMap[v]=q,r.directionalShadowMatrix[v]=z.shadow.matrix,S++}r.directional[v]=b,v++}else if(z.isSpotLight){const b=n.get(z);b.position.setFromMatrixPosition(z.matrixWorld),b.color.copy(j).multiplyScalar(Y*y),b.distance=Z,b.coneCos=Math.cos(z.angle),b.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),b.decay=z.decay,r.spot[c]=b;const V=z.shadow;if(z.map&&(r.spotLightMap[A]=z.map,A++,V.updateMatrices(z),z.castShadow&&P++),r.spotLightMatrix[c]=V.matrix,z.castShadow){const B=i.get(z);B.shadowBias=V.bias,B.shadowNormalBias=V.normalBias,B.shadowRadius=V.radius,B.shadowMapSize=V.mapSize,r.spotShadow[c]=B,r.spotShadowMap[c]=q,C++}c++}else if(z.isRectAreaLight){const b=n.get(z);b.color.copy(j).multiplyScalar(Y),b.halfWidth.set(z.width*.5,0,0),b.halfHeight.set(0,z.height*.5,0),r.rectArea[m]=b,m++}else if(z.isPointLight){const b=n.get(z);if(b.color.copy(z.color).multiplyScalar(z.intensity*y),b.distance=z.distance,b.decay=z.decay,z.castShadow){const V=z.shadow,B=i.get(z);B.shadowBias=V.bias,B.shadowNormalBias=V.normalBias,B.shadowRadius=V.radius,B.shadowMapSize=V.mapSize,B.shadowCameraNear=V.camera.near,B.shadowCameraFar=V.camera.far,r.pointShadow[g]=B,r.pointShadowMap[g]=q,r.pointShadowMatrix[g]=z.shadow.matrix,E++}r.point[g]=b,g++}else if(z.isHemisphereLight){const b=n.get(z);b.skyColor.copy(z.color).multiplyScalar(Y*y),b.groundColor.copy(z.groundColor).multiplyScalar(Y*y),r.hemi[p]=b,p++}}m>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=re.LTC_FLOAT_1,r.rectAreaLTC2=re.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=re.LTC_HALF_1,r.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=_,r.ambient[2]=x;const T=r.hash;(T.directionalLength!==v||T.pointLength!==g||T.spotLength!==c||T.rectAreaLength!==m||T.hemiLength!==p||T.numDirectionalShadows!==S||T.numPointShadows!==E||T.numSpotShadows!==C||T.numSpotMaps!==A)&&(r.directional.length=v,r.spot.length=c,r.rectArea.length=m,r.point.length=g,r.hemi.length=p,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=C+A-P,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=P,T.directionalLength=v,T.pointLength=g,T.spotLength=c,T.rectAreaLength=m,T.hemiLength=p,T.numDirectionalShadows=S,T.numPointShadows=E,T.numSpotShadows=C,T.numSpotMaps=A,r.version=gT++)}function u(f,h){let d=0,_=0,x=0,v=0,g=0;const c=h.matrixWorldInverse;for(let m=0,p=f.length;m<p;m++){const S=f[m];if(S.isDirectionalLight){const E=r.directional[d];E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(c),d++}else if(S.isSpotLight){const E=r.spot[x];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(c),E.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(c),x++}else if(S.isRectAreaLight){const E=r.rectArea[v];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(c),a.identity(),o.copy(S.matrixWorld),o.premultiply(c),a.extractRotation(o),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),v++}else if(S.isPointLight){const E=r.point[_];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(c),_++}else if(S.isHemisphereLight){const E=r.hemi[g];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(c),g++}}}return{setup:l,setupView:u,state:r}}function rp(t,e){const n=new vT(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){n.setup(i,h)}function u(h){n.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function xT(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new rp(t,e),n.set(s,[l])):o>=a.length?(l=new rp(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class ST extends pl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yT extends pl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const MT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ET=`uniform sampler2D shadow_pass;
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
}`;function TT(t,e,n){let i=new Hg;const r=new He,s=new He,o=new Et,a=new ST({depthPacking:dx}),l=new yT,u={},f=n.maxTextureSize,h={[zi]:Zt,[Zt]:zi,[ei]:ei},d=new mr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:MT,fragmentShader:ET}),_=d.clone();_.defines.HORIZONTAL_PASS=1;const x=new Gi;x.setAttribute("position",new Hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ri(x,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vg;let c=this.type;this.render=function(E,C,A){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;const P=t.getRenderTarget(),y=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),$=t.state;$.setBlending(Di),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const K=c!==Zn&&this.type===Zn,z=c===Zn&&this.type!==Zn;for(let j=0,Y=E.length;j<Y;j++){const Z=E[j],q=Z.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const b=q.getFrameExtents();if(r.multiply(b),s.copy(q.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/b.x),r.x=s.x*b.x,q.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/b.y),r.y=s.y*b.y,q.mapSize.y=s.y)),q.map===null||K===!0||z===!0){const B=this.type!==Zn?{minFilter:kt,magFilter:kt}:{};q.map!==null&&q.map.dispose(),q.map=new pr(r.x,r.y,B),q.map.texture.name=Z.name+".shadowMap",q.camera.updateProjectionMatrix()}t.setRenderTarget(q.map),t.clear();const V=q.getViewportCount();for(let B=0;B<V;B++){const U=q.getViewport(B);o.set(s.x*U.x,s.y*U.y,s.x*U.z,s.y*U.w),$.viewport(o),q.updateMatrices(Z,B),i=q.getFrustum(),S(C,A,q.camera,Z,this.type)}q.isPointLightShadow!==!0&&this.type===Zn&&m(q,A),q.needsUpdate=!1}c=this.type,g.needsUpdate=!1,t.setRenderTarget(P,y,T)};function m(E,C){const A=e.update(v);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,_.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,_.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new pr(r.x,r.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(C,null,A,d,v,null),_.uniforms.shadow_pass.value=E.mapPass.texture,_.uniforms.resolution.value=E.mapSize,_.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(C,null,A,_,v,null)}function p(E,C,A,P){let y=null;const T=A.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(T!==void 0)y=T;else if(y=A.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const $=y.uuid,K=C.uuid;let z=u[$];z===void 0&&(z={},u[$]=z);let j=z[K];j===void 0&&(j=y.clone(),z[K]=j),y=j}if(y.visible=C.visible,y.wireframe=C.wireframe,P===Zn?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:h[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,A.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const $=t.properties.get(y);$.light=A}return y}function S(E,C,A,P,y){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&y===Zn)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,E.matrixWorld);const K=e.update(E),z=E.material;if(Array.isArray(z)){const j=K.groups;for(let Y=0,Z=j.length;Y<Z;Y++){const q=j[Y],b=z[q.materialIndex];if(b&&b.visible){const V=p(E,b,P,y);t.renderBufferDirect(A,null,K,V,E,q)}}}else if(z.visible){const j=p(E,z,P,y);t.renderBufferDirect(A,null,K,j,E,null)}}const $=E.children;for(let K=0,z=$.length;K<z;K++)S($[K],C,A,P,y)}}function wT(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const ae=new Et;let H=null;const ie=new Et(0,0,0,0);return{setMask:function(le){H!==le&&!L&&(t.colorMask(le,le,le,le),H=le)},setLocked:function(le){L=le},setClear:function(le,ke,Je,at,fi){fi===!0&&(le*=at,ke*=at,Je*=at),ae.set(le,ke,Je,at),ie.equals(ae)===!1&&(t.clearColor(le,ke,Je,at),ie.copy(ae))},reset:function(){L=!1,H=null,ie.set(-1,0,0,0)}}}function s(){let L=!1,ae=null,H=null,ie=null;return{setTest:function(le){le?Se(t.DEPTH_TEST):ye(t.DEPTH_TEST)},setMask:function(le){ae!==le&&!L&&(t.depthMask(le),ae=le)},setFunc:function(le){if(H!==le){switch(le){case H0:t.depthFunc(t.NEVER);break;case G0:t.depthFunc(t.ALWAYS);break;case V0:t.depthFunc(t.LESS);break;case mc:t.depthFunc(t.LEQUAL);break;case W0:t.depthFunc(t.EQUAL);break;case X0:t.depthFunc(t.GEQUAL);break;case j0:t.depthFunc(t.GREATER);break;case Y0:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}H=le}},setLocked:function(le){L=le},setClear:function(le){ie!==le&&(t.clearDepth(le),ie=le)},reset:function(){L=!1,ae=null,H=null,ie=null}}}function o(){let L=!1,ae=null,H=null,ie=null,le=null,ke=null,Je=null,at=null,fi=null;return{setTest:function(je){L||(je?Se(t.STENCIL_TEST):ye(t.STENCIL_TEST))},setMask:function(je){ae!==je&&!L&&(t.stencilMask(je),ae=je)},setFunc:function(je,In,Nt){(H!==je||ie!==In||le!==Nt)&&(t.stencilFunc(je,In,Nt),H=je,ie=In,le=Nt)},setOp:function(je,In,Nt){(ke!==je||Je!==In||at!==Nt)&&(t.stencilOp(je,In,Nt),ke=je,Je=In,at=Nt)},setLocked:function(je){L=je},setClear:function(je){fi!==je&&(t.clearStencil(je),fi=je)},reset:function(){L=!1,ae=null,H=null,ie=null,le=null,ke=null,Je=null,at=null,fi=null}}}const a=new r,l=new s,u=new o,f=new WeakMap,h=new WeakMap;let d={},_={},x=new WeakMap,v=[],g=null,c=!1,m=null,p=null,S=null,E=null,C=null,A=null,P=null,y=!1,T=null,$=null,K=null,z=null,j=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,q=0;const b=t.getParameter(t.VERSION);b.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(b)[1]),Z=q>=1):b.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(b)[1]),Z=q>=2);let V=null,B={};const U=t.getParameter(t.SCISSOR_BOX),O=t.getParameter(t.VIEWPORT),se=new Et().fromArray(U),oe=new Et().fromArray(O);function ue(L,ae,H,ie){const le=new Uint8Array(4),ke=t.createTexture();t.bindTexture(L,ke),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Je=0;Je<H;Je++)i&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(ae,0,t.RGBA,1,1,ie,0,t.RGBA,t.UNSIGNED_BYTE,le):t.texImage2D(ae+Je,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,le);return ke}const pe={};pe[t.TEXTURE_2D]=ue(t.TEXTURE_2D,t.TEXTURE_2D,1),pe[t.TEXTURE_CUBE_MAP]=ue(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(pe[t.TEXTURE_2D_ARRAY]=ue(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),pe[t.TEXTURE_3D]=ue(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Se(t.DEPTH_TEST),l.setFunc(mc),Ae(!1),Qe(Gd),Se(t.CULL_FACE),Me(Di);function Se(L){d[L]!==!0&&(t.enable(L),d[L]=!0)}function ye(L){d[L]!==!1&&(t.disable(L),d[L]=!1)}function Be(L,ae){return _[L]!==ae?(t.bindFramebuffer(L,ae),_[L]=ae,i&&(L===t.DRAW_FRAMEBUFFER&&(_[t.FRAMEBUFFER]=ae),L===t.FRAMEBUFFER&&(_[t.DRAW_FRAMEBUFFER]=ae)),!0):!1}function Vt(L,ae){let H=v,ie=!1;if(L)if(H=x.get(ae),H===void 0&&(H=[],x.set(ae,H)),L.isWebGLMultipleRenderTargets){const le=L.texture;if(H.length!==le.length||H[0]!==t.COLOR_ATTACHMENT0){for(let ke=0,Je=le.length;ke<Je;ke++)H[ke]=t.COLOR_ATTACHMENT0+ke;H.length=le.length,ie=!0}}else H[0]!==t.COLOR_ATTACHMENT0&&(H[0]=t.COLOR_ATTACHMENT0,ie=!0);else H[0]!==t.BACK&&(H[0]=t.BACK,ie=!0);ie&&(n.isWebGL2?t.drawBuffers(H):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(H))}function Pe(L){return g!==L?(t.useProgram(L),g=L,!0):!1}const I={[Nr]:t.FUNC_ADD,[P0]:t.FUNC_SUBTRACT,[b0]:t.FUNC_REVERSE_SUBTRACT};if(i)I[jd]=t.MIN,I[Yd]=t.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(I[jd]=L.MIN_EXT,I[Yd]=L.MAX_EXT)}const Rt={[U0]:t.ZERO,[D0]:t.ONE,[I0]:t.SRC_COLOR,[xg]:t.SRC_ALPHA,[B0]:t.SRC_ALPHA_SATURATE,[z0]:t.DST_COLOR,[F0]:t.DST_ALPHA,[N0]:t.ONE_MINUS_SRC_COLOR,[Sg]:t.ONE_MINUS_SRC_ALPHA,[k0]:t.ONE_MINUS_DST_COLOR,[O0]:t.ONE_MINUS_DST_ALPHA};function Me(L,ae,H,ie,le,ke,Je,at){if(L===Di){c===!0&&(ye(t.BLEND),c=!1);return}if(c===!1&&(Se(t.BLEND),c=!0),L!==L0){if(L!==m||at!==y){if((p!==Nr||C!==Nr)&&(t.blendEquation(t.FUNC_ADD),p=Nr,C=Nr),at)switch(L){case ts:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Vd:t.blendFunc(t.ONE,t.ONE);break;case Wd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Xd:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ts:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Vd:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Wd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Xd:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,E=null,A=null,P=null,m=L,y=at}return}le=le||ae,ke=ke||H,Je=Je||ie,(ae!==p||le!==C)&&(t.blendEquationSeparate(I[ae],I[le]),p=ae,C=le),(H!==S||ie!==E||ke!==A||Je!==P)&&(t.blendFuncSeparate(Rt[H],Rt[ie],Rt[ke],Rt[Je]),S=H,E=ie,A=ke,P=Je),m=L,y=!1}function Re(L,ae){L.side===ei?ye(t.CULL_FACE):Se(t.CULL_FACE);let H=L.side===Zt;ae&&(H=!H),Ae(H),L.blending===ts&&L.transparent===!1?Me(Di):Me(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const ie=L.stencilWrite;u.setTest(ie),ie&&(u.setMask(L.stencilWriteMask),u.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),u.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),be(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Se(t.SAMPLE_ALPHA_TO_COVERAGE):ye(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(L){T!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),T=L)}function Qe(L){L!==A0?(Se(t.CULL_FACE),L!==$&&(L===Gd?t.cullFace(t.BACK):L===R0?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ye(t.CULL_FACE),$=L}function Oe(L){L!==K&&(Z&&t.lineWidth(L),K=L)}function be(L,ae,H){L?(Se(t.POLYGON_OFFSET_FILL),(z!==ae||j!==H)&&(t.polygonOffset(ae,H),z=ae,j=H)):ye(t.POLYGON_OFFSET_FILL)}function Ve(L){L?Se(t.SCISSOR_TEST):ye(t.SCISSOR_TEST)}function yt(L){L===void 0&&(L=t.TEXTURE0+Y-1),V!==L&&(t.activeTexture(L),V=L)}function Ct(L,ae,H){H===void 0&&(V===null?H=t.TEXTURE0+Y-1:H=V);let ie=B[H];ie===void 0&&(ie={type:void 0,texture:void 0},B[H]=ie),(ie.type!==L||ie.texture!==ae)&&(V!==H&&(t.activeTexture(H),V=H),t.bindTexture(L,ae||pe[L]),ie.type=L,ie.texture=ae)}function R(){const L=B[V];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function M(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function k(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function G(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(L){se.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),se.copy(L))}function de(L){oe.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),oe.copy(L))}function he(L,ae){let H=h.get(ae);H===void 0&&(H=new WeakMap,h.set(ae,H));let ie=H.get(L);ie===void 0&&(ie=t.getUniformBlockIndex(ae,L.name),H.set(L,ie))}function De(L,ae){const ie=h.get(ae).get(L);f.get(ae)!==ie&&(t.uniformBlockBinding(ae,ie,L.__bindingPointIndex),f.set(ae,ie))}function We(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},V=null,B={},_={},x=new WeakMap,v=[],g=null,c=!1,m=null,p=null,S=null,E=null,C=null,A=null,P=null,y=!1,T=null,$=null,K=null,z=null,j=null,se.set(0,0,t.canvas.width,t.canvas.height),oe.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Se,disable:ye,bindFramebuffer:Be,drawBuffers:Vt,useProgram:Pe,setBlending:Me,setMaterial:Re,setFlipSided:Ae,setCullFace:Qe,setLineWidth:Oe,setPolygonOffset:be,setScissorTest:Ve,activeTexture:yt,bindTexture:Ct,unbindTexture:R,compressedTexImage2D:M,compressedTexImage3D:k,texImage2D:ve,texImage3D:ge,updateUBOMapping:he,uniformBlockBinding:De,texStorage2D:ne,texStorage3D:G,texSubImage2D:ee,texSubImage3D:J,compressedTexSubImage2D:te,compressedTexSubImage3D:me,scissor:_e,viewport:de,reset:We}}function AT(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,f=r.maxTextureSize,h=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,_=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let v;const g=new WeakMap;let c=!1;try{c=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,M){return c?new OffscreenCanvas(R,M):qa("canvas")}function p(R,M,k,ee){let J=1;if((R.width>ee||R.height>ee)&&(J=ee/Math.max(R.width,R.height)),J<1||M===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const te=M?Mc:Math.floor,me=te(J*R.width),ne=te(J*R.height);v===void 0&&(v=m(me,ne));const G=k?m(me,ne):v;return G.width=me,G.height=ne,G.getContext("2d").drawImage(R,0,0,me,ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+me+"x"+ne+")."),G}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function S(R){return Mh(R.width)&&Mh(R.height)}function E(R){return a?!1:R.wrapS!==Ln||R.wrapT!==Ln||R.minFilter!==kt&&R.minFilter!==pn}function C(R,M){return R.generateMipmaps&&M&&R.minFilter!==kt&&R.minFilter!==pn}function A(R){t.generateMipmap(R)}function P(R,M,k,ee,J=!1){if(a===!1)return M;if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let te=M;return M===t.RED&&(k===t.FLOAT&&(te=t.R32F),k===t.HALF_FLOAT&&(te=t.R16F),k===t.UNSIGNED_BYTE&&(te=t.R8)),M===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&(te=t.R8UI),k===t.UNSIGNED_SHORT&&(te=t.R16UI),k===t.UNSIGNED_INT&&(te=t.R32UI),k===t.BYTE&&(te=t.R8I),k===t.SHORT&&(te=t.R16I),k===t.INT&&(te=t.R32I)),M===t.RG&&(k===t.FLOAT&&(te=t.RG32F),k===t.HALF_FLOAT&&(te=t.RG16F),k===t.UNSIGNED_BYTE&&(te=t.RG8)),M===t.RGBA&&(k===t.FLOAT&&(te=t.RGBA32F),k===t.HALF_FLOAT&&(te=t.RGBA16F),k===t.UNSIGNED_BYTE&&(te=ee===Ke&&J===!1?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT_4_4_4_4&&(te=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&(te=t.RGB5_A1)),(te===t.R16F||te===t.R32F||te===t.RG16F||te===t.RG32F||te===t.RGBA16F||te===t.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function y(R,M,k){return C(R,k)===!0||R.isFramebufferTexture&&R.minFilter!==kt&&R.minFilter!==pn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function T(R){return R===kt||R===qd||R===jl?t.NEAREST:t.LINEAR}function $(R){const M=R.target;M.removeEventListener("dispose",$),z(M),M.isVideoTexture&&x.delete(M)}function K(R){const M=R.target;M.removeEventListener("dispose",K),Y(M)}function z(R){const M=i.get(R);if(M.__webglInit===void 0)return;const k=R.source,ee=g.get(k);if(ee){const J=ee[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&j(R),Object.keys(ee).length===0&&g.delete(k)}i.remove(R)}function j(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const k=R.source,ee=g.get(k);delete ee[M.__cacheKey],o.memory.textures--}function Y(R){const M=R.texture,k=i.get(R),ee=i.get(M);if(ee.__webglTexture!==void 0&&(t.deleteTexture(ee.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(k.__webglFramebuffer[J]))for(let te=0;te<k.__webglFramebuffer[J].length;te++)t.deleteFramebuffer(k.__webglFramebuffer[J][te]);else t.deleteFramebuffer(k.__webglFramebuffer[J]);k.__webglDepthbuffer&&t.deleteRenderbuffer(k.__webglDepthbuffer[J])}else{if(Array.isArray(k.__webglFramebuffer))for(let J=0;J<k.__webglFramebuffer.length;J++)t.deleteFramebuffer(k.__webglFramebuffer[J]);else t.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&t.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&t.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let J=0;J<k.__webglColorRenderbuffer.length;J++)k.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(k.__webglColorRenderbuffer[J]);k.__webglDepthRenderbuffer&&t.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let J=0,te=M.length;J<te;J++){const me=i.get(M[J]);me.__webglTexture&&(t.deleteTexture(me.__webglTexture),o.memory.textures--),i.remove(M[J])}i.remove(M),i.remove(R)}let Z=0;function q(){Z=0}function b(){const R=Z;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),Z+=1,R}function V(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function B(R,M){const k=i.get(R);if(R.isVideoTexture&&yt(R),R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){const ee=R.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Be(k,R,M);return}}n.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+M)}function U(R,M){const k=i.get(R);if(R.version>0&&k.__version!==R.version){Be(k,R,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+M)}function O(R,M){const k=i.get(R);if(R.version>0&&k.__version!==R.version){Be(k,R,M);return}n.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+M)}function se(R,M){const k=i.get(R);if(R.version>0&&k.__version!==R.version){Vt(k,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+M)}const oe={[vc]:t.REPEAT,[Ln]:t.CLAMP_TO_EDGE,[xc]:t.MIRRORED_REPEAT},ue={[kt]:t.NEAREST,[qd]:t.NEAREST_MIPMAP_NEAREST,[jl]:t.NEAREST_MIPMAP_LINEAR,[pn]:t.LINEAR,[tx]:t.LINEAR_MIPMAP_NEAREST,[ho]:t.LINEAR_MIPMAP_LINEAR},pe={[gx]:t.NEVER,[Ex]:t.ALWAYS,[_x]:t.LESS,[xx]:t.LEQUAL,[vx]:t.EQUAL,[Mx]:t.GEQUAL,[Sx]:t.GREATER,[yx]:t.NOTEQUAL};function Se(R,M,k){if(k?(t.texParameteri(R,t.TEXTURE_WRAP_S,oe[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,oe[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,oe[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,ue[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,ue[M.minFilter])):(t.texParameteri(R,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(R,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==Ln||M.wrapT!==Ln)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(R,t.TEXTURE_MAG_FILTER,T(M.magFilter)),t.texParameteri(R,t.TEXTURE_MIN_FILTER,T(M.minFilter)),M.minFilter!==kt&&M.minFilter!==pn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,pe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===kt||M.minFilter!==jl&&M.minFilter!==ho||M.type===Ti&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===po&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(R,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function ye(R,M){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",$));const ee=M.source;let J=g.get(ee);J===void 0&&(J={},g.set(ee,J));const te=V(M);if(te!==R.__cacheKey){J[te]===void 0&&(J[te]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,k=!0),J[te].usedTimes++;const me=J[R.__cacheKey];me!==void 0&&(J[R.__cacheKey].usedTimes--,me.usedTimes===0&&j(M)),R.__cacheKey=te,R.__webglTexture=J[te].texture}return k}function Be(R,M,k){let ee=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ee=t.TEXTURE_3D);const J=ye(R,M),te=M.source;n.bindTexture(ee,R.__webglTexture,t.TEXTURE0+k);const me=i.get(te);if(te.version!==me.__version||J===!0){n.activeTexture(t.TEXTURE0+k),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const ne=E(M)&&S(M.image)===!1;let G=p(M.image,ne,!1,f);G=Ct(M,G);const ve=S(G)||a,ge=s.convert(M.format,M.colorSpace);let _e=s.convert(M.type),de=P(M.internalFormat,ge,_e,M.colorSpace,M.isVideoTexture);Se(ee,M,ve);let he;const De=M.mipmaps,We=a&&M.isVideoTexture!==!0,L=me.__version===void 0||J===!0,ae=y(M,G,ve);if(M.isDepthTexture)de=t.DEPTH_COMPONENT,a?M.type===Ti?de=t.DEPTH_COMPONENT32F:M.type===Ei?de=t.DEPTH_COMPONENT24:M.type===sr?de=t.DEPTH24_STENCIL8:de=t.DEPTH_COMPONENT16:M.type===Ti&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===or&&de===t.DEPTH_COMPONENT&&M.type!==Sf&&M.type!==Ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Ei,_e=s.convert(M.type)),M.format===ds&&de===t.DEPTH_COMPONENT&&(de=t.DEPTH_STENCIL,M.type!==sr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=sr,_e=s.convert(M.type))),L&&(We?n.texStorage2D(t.TEXTURE_2D,1,de,G.width,G.height):n.texImage2D(t.TEXTURE_2D,0,de,G.width,G.height,0,ge,_e,null));else if(M.isDataTexture)if(De.length>0&&ve){We&&L&&n.texStorage2D(t.TEXTURE_2D,ae,de,De[0].width,De[0].height);for(let H=0,ie=De.length;H<ie;H++)he=De[H],We?n.texSubImage2D(t.TEXTURE_2D,H,0,0,he.width,he.height,ge,_e,he.data):n.texImage2D(t.TEXTURE_2D,H,de,he.width,he.height,0,ge,_e,he.data);M.generateMipmaps=!1}else We?(L&&n.texStorage2D(t.TEXTURE_2D,ae,de,G.width,G.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,G.width,G.height,ge,_e,G.data)):n.texImage2D(t.TEXTURE_2D,0,de,G.width,G.height,0,ge,_e,G.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){We&&L&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ae,de,De[0].width,De[0].height,G.depth);for(let H=0,ie=De.length;H<ie;H++)he=De[H],M.format!==Pn?ge!==null?We?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,H,0,0,0,he.width,he.height,G.depth,ge,he.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,H,de,he.width,he.height,G.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?n.texSubImage3D(t.TEXTURE_2D_ARRAY,H,0,0,0,he.width,he.height,G.depth,ge,_e,he.data):n.texImage3D(t.TEXTURE_2D_ARRAY,H,de,he.width,he.height,G.depth,0,ge,_e,he.data)}else{We&&L&&n.texStorage2D(t.TEXTURE_2D,ae,de,De[0].width,De[0].height);for(let H=0,ie=De.length;H<ie;H++)he=De[H],M.format!==Pn?ge!==null?We?n.compressedTexSubImage2D(t.TEXTURE_2D,H,0,0,he.width,he.height,ge,he.data):n.compressedTexImage2D(t.TEXTURE_2D,H,de,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?n.texSubImage2D(t.TEXTURE_2D,H,0,0,he.width,he.height,ge,_e,he.data):n.texImage2D(t.TEXTURE_2D,H,de,he.width,he.height,0,ge,_e,he.data)}else if(M.isDataArrayTexture)We?(L&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ae,de,G.width,G.height,G.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,G.width,G.height,G.depth,ge,_e,G.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,de,G.width,G.height,G.depth,0,ge,_e,G.data);else if(M.isData3DTexture)We?(L&&n.texStorage3D(t.TEXTURE_3D,ae,de,G.width,G.height,G.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,G.width,G.height,G.depth,ge,_e,G.data)):n.texImage3D(t.TEXTURE_3D,0,de,G.width,G.height,G.depth,0,ge,_e,G.data);else if(M.isFramebufferTexture){if(L)if(We)n.texStorage2D(t.TEXTURE_2D,ae,de,G.width,G.height);else{let H=G.width,ie=G.height;for(let le=0;le<ae;le++)n.texImage2D(t.TEXTURE_2D,le,de,H,ie,0,ge,_e,null),H>>=1,ie>>=1}}else if(De.length>0&&ve){We&&L&&n.texStorage2D(t.TEXTURE_2D,ae,de,De[0].width,De[0].height);for(let H=0,ie=De.length;H<ie;H++)he=De[H],We?n.texSubImage2D(t.TEXTURE_2D,H,0,0,ge,_e,he):n.texImage2D(t.TEXTURE_2D,H,de,ge,_e,he);M.generateMipmaps=!1}else We?(L&&n.texStorage2D(t.TEXTURE_2D,ae,de,G.width,G.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,_e,G)):n.texImage2D(t.TEXTURE_2D,0,de,ge,_e,G);C(M,ve)&&A(ee),me.__version=te.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Vt(R,M,k){if(M.image.length!==6)return;const ee=ye(R,M),J=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+k);const te=i.get(J);if(J.version!==te.__version||ee===!0){n.activeTexture(t.TEXTURE0+k),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const me=M.isCompressedTexture||M.image[0].isCompressedTexture,ne=M.image[0]&&M.image[0].isDataTexture,G=[];for(let H=0;H<6;H++)!me&&!ne?G[H]=p(M.image[H],!1,!0,u):G[H]=ne?M.image[H].image:M.image[H],G[H]=Ct(M,G[H]);const ve=G[0],ge=S(ve)||a,_e=s.convert(M.format,M.colorSpace),de=s.convert(M.type),he=P(M.internalFormat,_e,de,M.colorSpace),De=a&&M.isVideoTexture!==!0,We=te.__version===void 0||ee===!0;let L=y(M,ve,ge);Se(t.TEXTURE_CUBE_MAP,M,ge);let ae;if(me){De&&We&&n.texStorage2D(t.TEXTURE_CUBE_MAP,L,he,ve.width,ve.height);for(let H=0;H<6;H++){ae=G[H].mipmaps;for(let ie=0;ie<ae.length;ie++){const le=ae[ie];M.format!==Pn?_e!==null?De?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,ie,0,0,le.width,le.height,_e,le.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,ie,he,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,ie,0,0,le.width,le.height,_e,de,le.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,ie,he,le.width,le.height,0,_e,de,le.data)}}}else{ae=M.mipmaps,De&&We&&(ae.length>0&&L++,n.texStorage2D(t.TEXTURE_CUBE_MAP,L,he,G[0].width,G[0].height));for(let H=0;H<6;H++)if(ne){De?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,G[H].width,G[H].height,_e,de,G[H].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,he,G[H].width,G[H].height,0,_e,de,G[H].data);for(let ie=0;ie<ae.length;ie++){const ke=ae[ie].image[H].image;De?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,ie+1,0,0,ke.width,ke.height,_e,de,ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,ie+1,he,ke.width,ke.height,0,_e,de,ke.data)}}else{De?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,_e,de,G[H]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,he,_e,de,G[H]);for(let ie=0;ie<ae.length;ie++){const le=ae[ie];De?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,ie+1,0,0,_e,de,le.image[H]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,ie+1,he,_e,de,le.image[H])}}}C(M,ge)&&A(t.TEXTURE_CUBE_MAP),te.__version=J.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Pe(R,M,k,ee,J,te){const me=s.convert(k.format,k.colorSpace),ne=s.convert(k.type),G=P(k.internalFormat,me,ne,k.colorSpace);if(!i.get(M).__hasExternalTextures){const ge=Math.max(1,M.width>>te),_e=Math.max(1,M.height>>te);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,te,G,ge,_e,M.depth,0,me,ne,null):n.texImage2D(J,te,G,ge,_e,0,me,ne,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Ve(M)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,J,i.get(k).__webglTexture,0,be(M)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,J,i.get(k).__webglTexture,te),n.bindFramebuffer(t.FRAMEBUFFER,null)}function I(R,M,k){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer&&!M.stencilBuffer){let ee=t.DEPTH_COMPONENT16;if(k||Ve(M)){const J=M.depthTexture;J&&J.isDepthTexture&&(J.type===Ti?ee=t.DEPTH_COMPONENT32F:J.type===Ei&&(ee=t.DEPTH_COMPONENT24));const te=be(M);Ve(M)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,te,ee,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,te,ee,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,ee,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(M.depthBuffer&&M.stencilBuffer){const ee=be(M);k&&Ve(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ee,t.DEPTH24_STENCIL8,M.width,M.height):Ve(M)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ee,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const ee=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let J=0;J<ee.length;J++){const te=ee[J],me=s.convert(te.format,te.colorSpace),ne=s.convert(te.type),G=P(te.internalFormat,me,ne,te.colorSpace),ve=be(M);k&&Ve(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ve,G,M.width,M.height):Ve(M)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ve,G,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,G,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Rt(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),B(M.depthTexture,0);const ee=i.get(M.depthTexture).__webglTexture,J=be(M);if(M.depthTexture.format===or)Ve(M)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(M.depthTexture.format===ds)Ve(M)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Me(R){const M=i.get(R),k=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Rt(M.__webglFramebuffer,R)}else if(k){M.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[ee]),M.__webglDepthbuffer[ee]=t.createRenderbuffer(),I(M.__webglDepthbuffer[ee],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),I(M.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Re(R,M,k){const ee=i.get(R);M!==void 0&&Pe(ee.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&Me(R)}function Ae(R){const M=R.texture,k=i.get(R),ee=i.get(M);R.addEventListener("dispose",K),R.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=M.version,o.memory.textures++);const J=R.isWebGLCubeRenderTarget===!0,te=R.isWebGLMultipleRenderTargets===!0,me=S(R)||a;if(J){k.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(a&&M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[ne]=[];for(let G=0;G<M.mipmaps.length;G++)k.__webglFramebuffer[ne][G]=t.createFramebuffer()}else k.__webglFramebuffer[ne]=t.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let ne=0;ne<M.mipmaps.length;ne++)k.__webglFramebuffer[ne]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(te)if(r.drawBuffers){const ne=R.texture;for(let G=0,ve=ne.length;G<ve;G++){const ge=i.get(ne[G]);ge.__webglTexture===void 0&&(ge.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&Ve(R)===!1){const ne=te?M:[M];k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let G=0;G<ne.length;G++){const ve=ne[G];k.__webglColorRenderbuffer[G]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[G]);const ge=s.convert(ve.format,ve.colorSpace),_e=s.convert(ve.type),de=P(ve.internalFormat,ge,_e,ve.colorSpace,R.isXRRenderTarget===!0),he=be(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,he,de,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+G,t.RENDERBUFFER,k.__webglColorRenderbuffer[G])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),I(k.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(J){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),Se(t.TEXTURE_CUBE_MAP,M,me);for(let ne=0;ne<6;ne++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let G=0;G<M.mipmaps.length;G++)Pe(k.__webglFramebuffer[ne][G],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,G);else Pe(k.__webglFramebuffer[ne],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);C(M,me)&&A(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(te){const ne=R.texture;for(let G=0,ve=ne.length;G<ve;G++){const ge=ne[G],_e=i.get(ge);n.bindTexture(t.TEXTURE_2D,_e.__webglTexture),Se(t.TEXTURE_2D,ge,me),Pe(k.__webglFramebuffer,R,ge,t.COLOR_ATTACHMENT0+G,t.TEXTURE_2D,0),C(ge,me)&&A(t.TEXTURE_2D)}n.unbindTexture()}else{let ne=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?ne=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ne,ee.__webglTexture),Se(ne,M,me),a&&M.mipmaps&&M.mipmaps.length>0)for(let G=0;G<M.mipmaps.length;G++)Pe(k.__webglFramebuffer[G],R,M,t.COLOR_ATTACHMENT0,ne,G);else Pe(k.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,ne,0);C(M,me)&&A(ne),n.unbindTexture()}R.depthBuffer&&Me(R)}function Qe(R){const M=S(R)||a,k=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ee=0,J=k.length;ee<J;ee++){const te=k[ee];if(C(te,M)){const me=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ne=i.get(te).__webglTexture;n.bindTexture(me,ne),A(me),n.unbindTexture()}}}function Oe(R){if(a&&R.samples>0&&Ve(R)===!1){const M=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],k=R.width,ee=R.height;let J=t.COLOR_BUFFER_BIT;const te=[],me=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=i.get(R),G=R.isWebGLMultipleRenderTargets===!0;if(G)for(let ve=0;ve<M.length;ve++)n.bindFramebuffer(t.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ne.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ne.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ne.__webglFramebuffer);for(let ve=0;ve<M.length;ve++){te.push(t.COLOR_ATTACHMENT0+ve),R.depthBuffer&&te.push(me);const ge=ne.__ignoreDepthValues!==void 0?ne.__ignoreDepthValues:!1;if(ge===!1&&(R.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),G&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ne.__webglColorRenderbuffer[ve]),ge===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[me]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[me])),G){const _e=i.get(M[ve]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,_e,0)}t.blitFramebuffer(0,0,k,ee,0,0,k,ee,J,t.NEAREST),_&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,te)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),G)for(let ve=0;ve<M.length;ve++){n.bindFramebuffer(t.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,ne.__webglColorRenderbuffer[ve]);const ge=i.get(M[ve]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ne.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,ge,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ne.__webglMultisampledFramebuffer)}}function be(R){return Math.min(h,R.samples)}function Ve(R){const M=i.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function yt(R){const M=o.render.frame;x.get(R)!==M&&(x.set(R,M),R.update())}function Ct(R,M){const k=R.colorSpace,ee=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Sc||k!==Vn&&k!==lr&&(k===Ke||k===dl?a===!1?e.has("EXT_sRGB")===!0&&ee===Pn?(R.format=Sc,R.minFilter=pn,R.generateMipmaps=!1):M=bg.sRGBToLinear(M):(ee!==Pn||J!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}this.allocateTextureUnit=b,this.resetTextureUnits=q,this.setTexture2D=B,this.setTexture2DArray=U,this.setTexture3D=O,this.setTextureCube=se,this.rebindTextures=Re,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=Ve}const RT=0,dt=1;function CT(t,e,n){const i=n.isWebGL2;function r(s,o=lr){let a;const l=o===Ke||o===dl?dt:RT;if(s===Ni)return t.UNSIGNED_BYTE;if(s===Tg)return t.UNSIGNED_SHORT_4_4_4_4;if(s===wg)return t.UNSIGNED_SHORT_5_5_5_1;if(s===nx)return t.BYTE;if(s===ix)return t.SHORT;if(s===Sf)return t.UNSIGNED_SHORT;if(s===Eg)return t.INT;if(s===Ei)return t.UNSIGNED_INT;if(s===Ti)return t.FLOAT;if(s===po)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===rx)return t.ALPHA;if(s===Pn)return t.RGBA;if(s===sx)return t.LUMINANCE;if(s===ox)return t.LUMINANCE_ALPHA;if(s===or)return t.DEPTH_COMPONENT;if(s===ds)return t.DEPTH_STENCIL;if(s===Sc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===ax)return t.RED;if(s===Ag)return t.RED_INTEGER;if(s===lx)return t.RG;if(s===Rg)return t.RG_INTEGER;if(s===Cg)return t.RGBA_INTEGER;if(s===Yl||s===ql||s===$l||s===Kl)if(l===dt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Yl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ql)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===$l)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Kl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Yl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ql)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===$l)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Kl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===$d||s===Kd||s===Zd||s===Qd)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===$d)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Kd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Zd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Qd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ux)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Jd||s===eh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Jd)return l===dt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===eh)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===th||s===nh||s===ih||s===rh||s===sh||s===oh||s===ah||s===lh||s===uh||s===ch||s===fh||s===dh||s===hh||s===ph)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===th)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===nh)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ih)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===rh)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===sh)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===oh)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ah)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===lh)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===uh)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ch)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===fh)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===dh)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===hh)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ph)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Zl||s===mh||s===gh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Zl)return l===dt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===mh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===gh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===cx||s===_h||s===vh||s===xh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Zl)return a.COMPRESSED_RED_RGTC1_EXT;if(s===_h)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===vh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===xh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===sr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class LT extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ua extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}}const PT={type:"move"};class yu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ua,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ua,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ua,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const v of e.hand.values()){const g=n.getJointPose(v,i),c=this._getHandJoint(u,v);g!==null&&(c.matrix.fromArray(g.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=g.radius),c.visible=g!==null}const f=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=f.position.distanceTo(h.position),_=.02,x=.005;u.inputState.pinching&&d>_+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=_-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(PT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ua;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class bT extends sn{constructor(e,n,i,r,s,o,a,l,u,f){if(f=f!==void 0?f:or,f!==or&&f!==ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===or&&(i=Ei),i===void 0&&f===ds&&(i=sr),super(null,r,s,o,a,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:kt,this.minFilter=l!==void 0?l:kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class UT extends _s{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,f=null,h=null,d=null,_=null,x=null;const v=n.getContextAttributes();let g=null,c=null;const m=[],p=[],S=new mn;S.layers.enable(1),S.viewport=new Et;const E=new mn;E.layers.enable(2),E.viewport=new Et;const C=[S,E],A=new LT;A.layers.enable(1),A.layers.enable(2);let P=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let O=m[U];return O===void 0&&(O=new yu,m[U]=O),O.getTargetRaySpace()},this.getControllerGrip=function(U){let O=m[U];return O===void 0&&(O=new yu,m[U]=O),O.getGripSpace()},this.getHand=function(U){let O=m[U];return O===void 0&&(O=new yu,m[U]=O),O.getHandSpace()};function T(U){const O=p.indexOf(U.inputSource);if(O===-1)return;const se=m[O];se!==void 0&&(se.update(U.inputSource,U.frame,u||o),se.dispatchEvent({type:U.type,data:U.inputSource}))}function $(){r.removeEventListener("select",T),r.removeEventListener("selectstart",T),r.removeEventListener("selectend",T),r.removeEventListener("squeeze",T),r.removeEventListener("squeezestart",T),r.removeEventListener("squeezeend",T),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",K);for(let U=0;U<m.length;U++){const O=p[U];O!==null&&(p[U]=null,m[U].disconnect(O))}P=null,y=null,e.setRenderTarget(g),_=null,d=null,h=null,r=null,c=null,B.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){s=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(U){u=U},this.getBaseLayer=function(){return d!==null?d:_},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(U){if(r=U,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",T),r.addEventListener("selectstart",T),r.addEventListener("selectend",T),r.addEventListener("squeeze",T),r.addEventListener("squeezestart",T),r.addEventListener("squeezeend",T),r.addEventListener("end",$),r.addEventListener("inputsourceschange",K),v.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const O={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,n,O),r.updateRenderState({baseLayer:_}),c=new pr(_.framebufferWidth,_.framebufferHeight,{format:Pn,type:Ni,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let O=null,se=null,oe=null;v.depth&&(oe=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,O=v.stencil?ds:or,se=v.stencil?sr:Ei);const ue={colorFormat:n.RGBA8,depthFormat:oe,scaleFactor:s};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(ue),r.updateRenderState({layers:[d]}),c=new pr(d.textureWidth,d.textureHeight,{format:Pn,type:Ni,depthTexture:new bT(d.textureWidth,d.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const pe=e.properties.get(c);pe.__ignoreDepthValues=d.ignoreDepthValues}c.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),B.setContext(r),B.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function K(U){for(let O=0;O<U.removed.length;O++){const se=U.removed[O],oe=p.indexOf(se);oe>=0&&(p[oe]=null,m[oe].disconnect(se))}for(let O=0;O<U.added.length;O++){const se=U.added[O];let oe=p.indexOf(se);if(oe===-1){for(let pe=0;pe<m.length;pe++)if(pe>=p.length){p.push(se),oe=pe;break}else if(p[pe]===null){p[pe]=se,oe=pe;break}if(oe===-1)break}const ue=m[oe];ue&&ue.connect(se)}}const z=new F,j=new F;function Y(U,O,se){z.setFromMatrixPosition(O.matrixWorld),j.setFromMatrixPosition(se.matrixWorld);const oe=z.distanceTo(j),ue=O.projectionMatrix.elements,pe=se.projectionMatrix.elements,Se=ue[14]/(ue[10]-1),ye=ue[14]/(ue[10]+1),Be=(ue[9]+1)/ue[5],Vt=(ue[9]-1)/ue[5],Pe=(ue[8]-1)/ue[0],I=(pe[8]+1)/pe[0],Rt=Se*Pe,Me=Se*I,Re=oe/(-Pe+I),Ae=Re*-Pe;O.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(Ae),U.translateZ(Re),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const Qe=Se+Re,Oe=ye+Re,be=Rt-Ae,Ve=Me+(oe-Ae),yt=Be*ye/Oe*Qe,Ct=Vt*ye/Oe*Qe;U.projectionMatrix.makePerspective(be,Ve,yt,Ct,Qe,Oe),U.projectionMatrixInverse.copy(U.projectionMatrix).invert()}function Z(U,O){O===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(O.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(r===null)return;A.near=E.near=S.near=U.near,A.far=E.far=S.far=U.far,(P!==A.near||y!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),P=A.near,y=A.far);const O=U.parent,se=A.cameras;Z(A,O);for(let oe=0;oe<se.length;oe++)Z(se[oe],O);se.length===2?Y(A,S,E):A.projectionMatrix.copy(S.projectionMatrix),q(U,A,O)};function q(U,O,se){se===null?U.matrix.copy(O.matrixWorld):(U.matrix.copy(se.matrixWorld),U.matrix.invert(),U.matrix.multiply(O.matrixWorld)),U.matrix.decompose(U.position,U.quaternion,U.scale),U.updateMatrixWorld(!0),U.projectionMatrix.copy(O.projectionMatrix),U.projectionMatrixInverse.copy(O.projectionMatrixInverse),U.isPerspectiveCamera&&(U.fov=yc*2*Math.atan(1/U.projectionMatrix.elements[5]),U.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(d===null&&_===null))return l},this.setFoveation=function(U){l=U,d!==null&&(d.fixedFoveation=U),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=U)};let b=null;function V(U,O){if(f=O.getViewerPose(u||o),x=O,f!==null){const se=f.views;_!==null&&(e.setRenderTargetFramebuffer(c,_.framebuffer),e.setRenderTarget(c));let oe=!1;se.length!==A.cameras.length&&(A.cameras.length=0,oe=!0);for(let ue=0;ue<se.length;ue++){const pe=se[ue];let Se=null;if(_!==null)Se=_.getViewport(pe);else{const Be=h.getViewSubImage(d,pe);Se=Be.viewport,ue===0&&(e.setRenderTargetTextures(c,Be.colorTexture,d.ignoreDepthValues?void 0:Be.depthStencilTexture),e.setRenderTarget(c))}let ye=C[ue];ye===void 0&&(ye=new mn,ye.layers.enable(ue),ye.viewport=new Et,C[ue]=ye),ye.matrix.fromArray(pe.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(pe.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Se.x,Se.y,Se.width,Se.height),ue===0&&(A.matrix.copy(ye.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),oe===!0&&A.cameras.push(ye)}}for(let se=0;se<m.length;se++){const oe=p[se],ue=m[se];oe!==null&&ue!==void 0&&ue.update(oe,O,u||o)}b&&b(U,O),O.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:O}),x=null}const B=new Gg;B.setAnimationLoop(V),this.setAnimationLoop=function(U){b=U},this.dispose=function(){}}}function DT(t,e){function n(g,c){g.matrixAutoUpdate===!0&&g.updateMatrix(),c.value.copy(g.matrix)}function i(g,c){c.color.getRGB(g.fogColor.value,zg(t)),c.isFog?(g.fogNear.value=c.near,g.fogFar.value=c.far):c.isFogExp2&&(g.fogDensity.value=c.density)}function r(g,c,m,p,S){c.isMeshBasicMaterial||c.isMeshLambertMaterial?s(g,c):c.isMeshToonMaterial?(s(g,c),h(g,c)):c.isMeshPhongMaterial?(s(g,c),f(g,c)):c.isMeshStandardMaterial?(s(g,c),d(g,c),c.isMeshPhysicalMaterial&&_(g,c,S)):c.isMeshMatcapMaterial?(s(g,c),x(g,c)):c.isMeshDepthMaterial?s(g,c):c.isMeshDistanceMaterial?(s(g,c),v(g,c)):c.isMeshNormalMaterial?s(g,c):c.isLineBasicMaterial?(o(g,c),c.isLineDashedMaterial&&a(g,c)):c.isPointsMaterial?l(g,c,m,p):c.isSpriteMaterial?u(g,c):c.isShadowMaterial?(g.color.value.copy(c.color),g.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(g,c){g.opacity.value=c.opacity,c.color&&g.diffuse.value.copy(c.color),c.emissive&&g.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(g.map.value=c.map,n(c.map,g.mapTransform)),c.alphaMap&&(g.alphaMap.value=c.alphaMap,n(c.alphaMap,g.alphaMapTransform)),c.bumpMap&&(g.bumpMap.value=c.bumpMap,n(c.bumpMap,g.bumpMapTransform),g.bumpScale.value=c.bumpScale,c.side===Zt&&(g.bumpScale.value*=-1)),c.normalMap&&(g.normalMap.value=c.normalMap,n(c.normalMap,g.normalMapTransform),g.normalScale.value.copy(c.normalScale),c.side===Zt&&g.normalScale.value.negate()),c.displacementMap&&(g.displacementMap.value=c.displacementMap,n(c.displacementMap,g.displacementMapTransform),g.displacementScale.value=c.displacementScale,g.displacementBias.value=c.displacementBias),c.emissiveMap&&(g.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,g.emissiveMapTransform)),c.specularMap&&(g.specularMap.value=c.specularMap,n(c.specularMap,g.specularMapTransform)),c.alphaTest>0&&(g.alphaTest.value=c.alphaTest);const m=e.get(c).envMap;if(m&&(g.envMap.value=m,g.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=c.reflectivity,g.ior.value=c.ior,g.refractionRatio.value=c.refractionRatio),c.lightMap){g.lightMap.value=c.lightMap;const p=t._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=c.lightMapIntensity*p,n(c.lightMap,g.lightMapTransform)}c.aoMap&&(g.aoMap.value=c.aoMap,g.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,g.aoMapTransform))}function o(g,c){g.diffuse.value.copy(c.color),g.opacity.value=c.opacity,c.map&&(g.map.value=c.map,n(c.map,g.mapTransform))}function a(g,c){g.dashSize.value=c.dashSize,g.totalSize.value=c.dashSize+c.gapSize,g.scale.value=c.scale}function l(g,c,m,p){g.diffuse.value.copy(c.color),g.opacity.value=c.opacity,g.size.value=c.size*m,g.scale.value=p*.5,c.map&&(g.map.value=c.map,n(c.map,g.uvTransform)),c.alphaMap&&(g.alphaMap.value=c.alphaMap,n(c.alphaMap,g.alphaMapTransform)),c.alphaTest>0&&(g.alphaTest.value=c.alphaTest)}function u(g,c){g.diffuse.value.copy(c.color),g.opacity.value=c.opacity,g.rotation.value=c.rotation,c.map&&(g.map.value=c.map,n(c.map,g.mapTransform)),c.alphaMap&&(g.alphaMap.value=c.alphaMap,n(c.alphaMap,g.alphaMapTransform)),c.alphaTest>0&&(g.alphaTest.value=c.alphaTest)}function f(g,c){g.specular.value.copy(c.specular),g.shininess.value=Math.max(c.shininess,1e-4)}function h(g,c){c.gradientMap&&(g.gradientMap.value=c.gradientMap)}function d(g,c){g.metalness.value=c.metalness,c.metalnessMap&&(g.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,g.metalnessMapTransform)),g.roughness.value=c.roughness,c.roughnessMap&&(g.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,g.roughnessMapTransform)),e.get(c).envMap&&(g.envMapIntensity.value=c.envMapIntensity)}function _(g,c,m){g.ior.value=c.ior,c.sheen>0&&(g.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),g.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(g.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,g.sheenColorMapTransform)),c.sheenRoughnessMap&&(g.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,g.sheenRoughnessMapTransform))),c.clearcoat>0&&(g.clearcoat.value=c.clearcoat,g.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(g.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,g.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(g.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===Zt&&g.clearcoatNormalScale.value.negate())),c.iridescence>0&&(g.iridescence.value=c.iridescence,g.iridescenceIOR.value=c.iridescenceIOR,g.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(g.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,g.iridescenceMapTransform)),c.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),c.transmission>0&&(g.transmission.value=c.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),c.transmissionMap&&(g.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,g.transmissionMapTransform)),g.thickness.value=c.thickness,c.thicknessMap&&(g.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=c.attenuationDistance,g.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(g.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(g.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=c.specularIntensity,g.specularColor.value.copy(c.specularColor),c.specularColorMap&&(g.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,g.specularColorMapTransform)),c.specularIntensityMap&&(g.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,c){c.matcap&&(g.matcap.value=c.matcap)}function v(g,c){const m=e.get(c).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function IT(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(m,p){const S=p.program;i.uniformBlockBinding(m,S)}function u(m,p){let S=r[m.id];S===void 0&&(x(m),S=f(m),r[m.id]=S,m.addEventListener("dispose",g));const E=p.program;i.updateUBOMapping(m,E);const C=e.render.frame;s[m.id]!==C&&(d(m),s[m.id]=C)}function f(m){const p=h();m.__bindingPointIndex=p;const S=t.createBuffer(),E=m.__size,C=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,E,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,p,S),S}function h(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(m){const p=r[m.id],S=m.uniforms,E=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,p);for(let C=0,A=S.length;C<A;C++){const P=S[C];if(_(P,C,E)===!0){const y=P.__offset,T=Array.isArray(P.value)?P.value:[P.value];let $=0;for(let K=0;K<T.length;K++){const z=T[K],j=v(z);typeof z=="number"?(P.__data[0]=z,t.bufferSubData(t.UNIFORM_BUFFER,y+$,P.__data)):z.isMatrix3?(P.__data[0]=z.elements[0],P.__data[1]=z.elements[1],P.__data[2]=z.elements[2],P.__data[3]=z.elements[0],P.__data[4]=z.elements[3],P.__data[5]=z.elements[4],P.__data[6]=z.elements[5],P.__data[7]=z.elements[0],P.__data[8]=z.elements[6],P.__data[9]=z.elements[7],P.__data[10]=z.elements[8],P.__data[11]=z.elements[0]):(z.toArray(P.__data,$),$+=j.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,y,P.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function _(m,p,S){const E=m.value;if(S[p]===void 0){if(typeof E=="number")S[p]=E;else{const C=Array.isArray(E)?E:[E],A=[];for(let P=0;P<C.length;P++)A.push(C[P].clone());S[p]=A}return!0}else if(typeof E=="number"){if(S[p]!==E)return S[p]=E,!0}else{const C=Array.isArray(S[p])?S[p]:[S[p]],A=Array.isArray(E)?E:[E];for(let P=0;P<C.length;P++){const y=C[P];if(y.equals(A[P])===!1)return y.copy(A[P]),!0}}return!1}function x(m){const p=m.uniforms;let S=0;const E=16;let C=0;for(let A=0,P=p.length;A<P;A++){const y=p[A],T={boundary:0,storage:0},$=Array.isArray(y.value)?y.value:[y.value];for(let K=0,z=$.length;K<z;K++){const j=$[K],Y=v(j);T.boundary+=Y.boundary,T.storage+=Y.storage}if(y.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=S,A>0){C=S%E;const K=E-C;C!==0&&K-T.boundary<0&&(S+=E-C,y.__offset=S)}S+=T.storage}return C=S%E,C>0&&(S+=E-C),m.__size=S,m.__cache={},this}function v(m){const p={boundary:0,storage:0};return typeof m=="number"?(p.boundary=4,p.storage=4):m.isVector2?(p.boundary=8,p.storage=8):m.isVector3||m.isColor?(p.boundary=16,p.storage=12):m.isVector4?(p.boundary=16,p.storage=16):m.isMatrix3?(p.boundary=48,p.storage=48):m.isMatrix4?(p.boundary=64,p.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),p}function g(m){const p=m.target;p.removeEventListener("dispose",g);const S=o.indexOf(p.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[p.id]),delete r[p.id],delete s[p.id]}function c(){for(const m in r)t.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:u,dispose:c}}class Yg{constructor(e={}){const{canvas:n=wx(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const _=new Uint32Array(4),x=new Int32Array(4);let v=null,g=null;const c=[],m=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ke,this._useLegacyLights=!1,this.toneMapping=Ii,this.toneMappingExposure=1;const p=this;let S=!1,E=0,C=0,A=null,P=-1,y=null;const T=new Et,$=new Et;let K=null;const z=new qe(0);let j=0,Y=n.width,Z=n.height,q=1,b=null,V=null;const B=new Et(0,0,Y,Z),U=new Et(0,0,Y,Z);let O=!1;const se=new Hg;let oe=!1,ue=!1,pe=null;const Se=new wt,ye=new He,Be=new F,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Pe(){return A===null?q:1}let I=i;function Rt(w,D){for(let W=0;W<w.length;W++){const N=w[W],X=n.getContext(N,D);if(X!==null)return X}return null}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${xf}`),n.addEventListener("webglcontextlost",ae,!1),n.addEventListener("webglcontextrestored",H,!1),n.addEventListener("webglcontextcreationerror",ie,!1),I===null){const D=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&D.shift(),I=Rt(D,w),I===null)throw Rt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Me,Re,Ae,Qe,Oe,be,Ve,yt,Ct,R,M,k,ee,J,te,me,ne,G,ve,ge,_e,de,he,De;function We(){Me=new WM(I),Re=new OM(I,Me,e),Me.init(Re),de=new CT(I,Me,Re),Ae=new wT(I,Me,Re),Qe=new YM(I),Oe=new fT,be=new AT(I,Me,Ae,Oe,Re,de,Qe),Ve=new kM(p),yt=new VM(p),Ct=new nS(I,Re),he=new NM(I,Me,Ct,Re),R=new XM(I,Ct,Qe,he),M=new ZM(I,R,Ct,Qe),ve=new KM(I,Re,be),me=new zM(Oe),k=new cT(p,Ve,yt,Me,Re,he,me),ee=new DT(p,Oe),J=new hT,te=new xT(Me,Re),G=new IM(p,Ve,yt,Ae,M,d,l),ne=new TT(p,M,Re),De=new IT(I,Qe,Re,Ae),ge=new FM(I,Me,Qe,Re),_e=new jM(I,Me,Qe,Re),Qe.programs=k.programs,p.capabilities=Re,p.extensions=Me,p.properties=Oe,p.renderLists=J,p.shadowMap=ne,p.state=Ae,p.info=Qe}We();const L=new UT(p,I);this.xr=L,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const w=Me.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Me.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(Y,Z,!1))},this.getSize=function(w){return w.set(Y,Z)},this.setSize=function(w,D,W=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=w,Z=D,n.width=Math.floor(w*q),n.height=Math.floor(D*q),W===!0&&(n.style.width=w+"px",n.style.height=D+"px"),this.setViewport(0,0,w,D)},this.getDrawingBufferSize=function(w){return w.set(Y*q,Z*q).floor()},this.setDrawingBufferSize=function(w,D,W){Y=w,Z=D,q=W,n.width=Math.floor(w*W),n.height=Math.floor(D*W),this.setViewport(0,0,w,D)},this.getCurrentViewport=function(w){return w.copy(T)},this.getViewport=function(w){return w.copy(B)},this.setViewport=function(w,D,W,N){w.isVector4?B.set(w.x,w.y,w.z,w.w):B.set(w,D,W,N),Ae.viewport(T.copy(B).multiplyScalar(q).floor())},this.getScissor=function(w){return w.copy(U)},this.setScissor=function(w,D,W,N){w.isVector4?U.set(w.x,w.y,w.z,w.w):U.set(w,D,W,N),Ae.scissor($.copy(U).multiplyScalar(q).floor())},this.getScissorTest=function(){return O},this.setScissorTest=function(w){Ae.setScissorTest(O=w)},this.setOpaqueSort=function(w){b=w},this.setTransparentSort=function(w){V=w},this.getClearColor=function(w){return w.copy(G.getClearColor())},this.setClearColor=function(){G.setClearColor.apply(G,arguments)},this.getClearAlpha=function(){return G.getClearAlpha()},this.setClearAlpha=function(){G.setClearAlpha.apply(G,arguments)},this.clear=function(w=!0,D=!0,W=!0){let N=0;if(w){let X=!1;if(A!==null){const fe=A.texture.format;X=fe===Cg||fe===Rg||fe===Ag}if(X){const fe=A.texture.type,xe=fe===Ni||fe===Ei||fe===Sf||fe===sr||fe===Tg||fe===wg,Te=G.getClearColor(),we=G.getClearAlpha(),Ie=Te.r,Ee=Te.g,Ce=Te.b;xe?(_[0]=Ie,_[1]=Ee,_[2]=Ce,_[3]=we,I.clearBufferuiv(I.COLOR,0,_)):(x[0]=Ie,x[1]=Ee,x[2]=Ce,x[3]=we,I.clearBufferiv(I.COLOR,0,x))}else N|=I.COLOR_BUFFER_BIT}D&&(N|=I.DEPTH_BUFFER_BIT),W&&(N|=I.STENCIL_BUFFER_BIT),I.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ae,!1),n.removeEventListener("webglcontextrestored",H,!1),n.removeEventListener("webglcontextcreationerror",ie,!1),J.dispose(),te.dispose(),Oe.dispose(),Ve.dispose(),yt.dispose(),M.dispose(),he.dispose(),De.dispose(),k.dispose(),L.dispose(),L.removeEventListener("sessionstart",je),L.removeEventListener("sessionend",In),pe&&(pe.dispose(),pe=null),Nt.stop()};function ae(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=Qe.autoReset,D=ne.enabled,W=ne.autoUpdate,N=ne.needsUpdate,X=ne.type;We(),Qe.autoReset=w,ne.enabled=D,ne.autoUpdate=W,ne.needsUpdate=N,ne.type=X}function ie(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function le(w){const D=w.target;D.removeEventListener("dispose",le),ke(D)}function ke(w){Je(w),Oe.remove(w)}function Je(w){const D=Oe.get(w).programs;D!==void 0&&(D.forEach(function(W){k.releaseProgram(W)}),w.isShaderMaterial&&k.releaseShaderCache(w))}this.renderBufferDirect=function(w,D,W,N,X,fe){D===null&&(D=Vt);const xe=X.isMesh&&X.matrixWorld.determinant()<0,Te=$g(w,D,W,N,X);Ae.setMaterial(N,xe);let we=W.index,Ie=1;if(N.wireframe===!0){if(we=R.getWireframeAttribute(W),we===void 0)return;Ie=2}const Ee=W.drawRange,Ce=W.attributes.position;let it=Ee.start*Ie,st=(Ee.start+Ee.count)*Ie;fe!==null&&(it=Math.max(it,fe.start*Ie),st=Math.min(st,(fe.start+fe.count)*Ie)),we!==null?(it=Math.max(it,0),st=Math.min(st,we.count)):Ce!=null&&(it=Math.max(it,0),st=Math.min(st,Ce.count));const cn=st-it;if(cn<0||cn===1/0)return;he.setup(X,N,Te,W,we);let Wn,lt=ge;if(we!==null&&(Wn=Ct.get(we),lt=_e,lt.setIndex(Wn)),X.isMesh)N.wireframe===!0?(Ae.setLineWidth(N.wireframeLinewidth*Pe()),lt.setMode(I.LINES)):lt.setMode(I.TRIANGLES);else if(X.isLine){let Ne=N.linewidth;Ne===void 0&&(Ne=1),Ae.setLineWidth(Ne*Pe()),X.isLineSegments?lt.setMode(I.LINES):X.isLineLoop?lt.setMode(I.LINE_LOOP):lt.setMode(I.LINE_STRIP)}else X.isPoints?lt.setMode(I.POINTS):X.isSprite&&lt.setMode(I.TRIANGLES);if(X.isInstancedMesh)lt.renderInstances(it,cn,X.count);else if(W.isInstancedBufferGeometry){const Ne=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,gl=Math.min(W.instanceCount,Ne);lt.renderInstances(it,cn,gl)}else lt.render(it,cn)},this.compile=function(w,D){function W(N,X,fe){N.transparent===!0&&N.side===ei&&N.forceSinglePass===!1?(N.side=Zt,N.needsUpdate=!0,wo(N,X,fe),N.side=zi,N.needsUpdate=!0,wo(N,X,fe),N.side=ei):wo(N,X,fe)}g=te.get(w),g.init(),m.push(g),w.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(g.pushLight(N),N.castShadow&&g.pushShadow(N))}),g.setupLights(p._useLegacyLights),w.traverse(function(N){const X=N.material;if(X)if(Array.isArray(X))for(let fe=0;fe<X.length;fe++){const xe=X[fe];W(xe,w,N)}else W(X,w,N)}),m.pop(),g=null};let at=null;function fi(w){at&&at(w)}function je(){Nt.stop()}function In(){Nt.start()}const Nt=new Gg;Nt.setAnimationLoop(fi),typeof self<"u"&&Nt.setContext(self),this.setAnimationLoop=function(w){at=w,L.setAnimationLoop(w),w===null?Nt.stop():Nt.start()},L.addEventListener("sessionstart",je),L.addEventListener("sessionend",In),this.render=function(w,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(L.cameraAutoUpdate===!0&&L.updateCamera(D),D=L.getCamera()),w.isScene===!0&&w.onBeforeRender(p,w,D,A),g=te.get(w,m.length),g.init(),m.push(g),Se.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),se.setFromProjectionMatrix(Se),ue=this.localClippingEnabled,oe=me.init(this.clippingPlanes,ue),v=J.get(w,c.length),v.init(),c.push(v),Rf(w,D,0,p.sortObjects),v.finish(),p.sortObjects===!0&&v.sort(b,V),this.info.render.frame++,oe===!0&&me.beginShadows();const W=g.state.shadowsArray;if(ne.render(W,w,D),oe===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset(),G.render(v,w),g.setupLights(p._useLegacyLights),D.isArrayCamera){const N=D.cameras;for(let X=0,fe=N.length;X<fe;X++){const xe=N[X];Cf(v,w,xe,xe.viewport)}}else Cf(v,w,D);A!==null&&(be.updateMultisampleRenderTarget(A),be.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(p,w,D),he.resetDefaultState(),P=-1,y=null,m.pop(),m.length>0?g=m[m.length-1]:g=null,c.pop(),c.length>0?v=c[c.length-1]:v=null};function Rf(w,D,W,N){if(w.visible===!1)return;if(w.layers.test(D.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(D);else if(w.isLight)g.pushLight(w),w.castShadow&&g.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||se.intersectsSprite(w)){N&&Be.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Se);const xe=M.update(w),Te=w.material;Te.visible&&v.push(w,xe,Te,W,Be.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||se.intersectsObject(w))){const xe=M.update(w),Te=w.material;if(N&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Be.copy(w.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Be.copy(xe.boundingSphere.center)),Be.applyMatrix4(w.matrixWorld).applyMatrix4(Se)),Array.isArray(Te)){const we=xe.groups;for(let Ie=0,Ee=we.length;Ie<Ee;Ie++){const Ce=we[Ie],it=Te[Ce.materialIndex];it&&it.visible&&v.push(w,xe,it,W,Be.z,Ce)}}else Te.visible&&v.push(w,xe,Te,W,Be.z,null)}}const fe=w.children;for(let xe=0,Te=fe.length;xe<Te;xe++)Rf(fe[xe],D,W,N)}function Cf(w,D,W,N){const X=w.opaque,fe=w.transmissive,xe=w.transparent;g.setupLightsView(W),oe===!0&&me.setGlobalState(p.clippingPlanes,W),fe.length>0&&qg(X,fe,D,W),N&&Ae.viewport(T.copy(N)),X.length>0&&To(X,D,W),fe.length>0&&To(fe,D,W),xe.length>0&&To(xe,D,W),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function qg(w,D,W,N){const X=Re.isWebGL2;pe===null&&(pe=new pr(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?po:Ni,minFilter:ho,samples:X?4:0})),p.getDrawingBufferSize(ye),X?pe.setSize(ye.x,ye.y):pe.setSize(Mc(ye.x),Mc(ye.y));const fe=p.getRenderTarget();p.setRenderTarget(pe),p.getClearColor(z),j=p.getClearAlpha(),j<1&&p.setClearColor(16777215,.5),p.clear();const xe=p.toneMapping;p.toneMapping=Ii,To(w,W,N),be.updateMultisampleRenderTarget(pe),be.updateRenderTargetMipmap(pe);let Te=!1;for(let we=0,Ie=D.length;we<Ie;we++){const Ee=D[we],Ce=Ee.object,it=Ee.geometry,st=Ee.material,cn=Ee.group;if(st.side===ei&&Ce.layers.test(N.layers)){const Wn=st.side;st.side=Zt,st.needsUpdate=!0,Lf(Ce,W,N,it,st,cn),st.side=Wn,st.needsUpdate=!0,Te=!0}}Te===!0&&(be.updateMultisampleRenderTarget(pe),be.updateRenderTargetMipmap(pe)),p.setRenderTarget(fe),p.setClearColor(z,j),p.toneMapping=xe}function To(w,D,W){const N=D.isScene===!0?D.overrideMaterial:null;for(let X=0,fe=w.length;X<fe;X++){const xe=w[X],Te=xe.object,we=xe.geometry,Ie=N===null?xe.material:N,Ee=xe.group;Te.layers.test(W.layers)&&Lf(Te,D,W,we,Ie,Ee)}}function Lf(w,D,W,N,X,fe){w.onBeforeRender(p,D,W,N,X,fe),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),X.onBeforeRender(p,D,W,N,w,fe),X.transparent===!0&&X.side===ei&&X.forceSinglePass===!1?(X.side=Zt,X.needsUpdate=!0,p.renderBufferDirect(W,D,N,X,w,fe),X.side=zi,X.needsUpdate=!0,p.renderBufferDirect(W,D,N,X,w,fe),X.side=ei):p.renderBufferDirect(W,D,N,X,w,fe),w.onAfterRender(p,D,W,N,X,fe)}function wo(w,D,W){D.isScene!==!0&&(D=Vt);const N=Oe.get(w),X=g.state.lights,fe=g.state.shadowsArray,xe=X.state.version,Te=k.getParameters(w,X.state,fe,D,W),we=k.getProgramCacheKey(Te);let Ie=N.programs;N.environment=w.isMeshStandardMaterial?D.environment:null,N.fog=D.fog,N.envMap=(w.isMeshStandardMaterial?yt:Ve).get(w.envMap||N.environment),Ie===void 0&&(w.addEventListener("dispose",le),Ie=new Map,N.programs=Ie);let Ee=Ie.get(we);if(Ee!==void 0){if(N.currentProgram===Ee&&N.lightsStateVersion===xe)return Pf(w,Te),Ee}else Te.uniforms=k.getUniforms(w),w.onBuild(W,Te,p),w.onBeforeCompile(Te,p),Ee=k.acquireProgram(Te,we),Ie.set(we,Ee),N.uniforms=Te.uniforms;const Ce=N.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ce.clippingPlanes=me.uniform),Pf(w,Te),N.needsLights=Zg(w),N.lightsStateVersion=xe,N.needsLights&&(Ce.ambientLightColor.value=X.state.ambient,Ce.lightProbe.value=X.state.probe,Ce.directionalLights.value=X.state.directional,Ce.directionalLightShadows.value=X.state.directionalShadow,Ce.spotLights.value=X.state.spot,Ce.spotLightShadows.value=X.state.spotShadow,Ce.rectAreaLights.value=X.state.rectArea,Ce.ltc_1.value=X.state.rectAreaLTC1,Ce.ltc_2.value=X.state.rectAreaLTC2,Ce.pointLights.value=X.state.point,Ce.pointLightShadows.value=X.state.pointShadow,Ce.hemisphereLights.value=X.state.hemi,Ce.directionalShadowMap.value=X.state.directionalShadowMap,Ce.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ce.spotShadowMap.value=X.state.spotShadowMap,Ce.spotLightMatrix.value=X.state.spotLightMatrix,Ce.spotLightMap.value=X.state.spotLightMap,Ce.pointShadowMap.value=X.state.pointShadowMap,Ce.pointShadowMatrix.value=X.state.pointShadowMatrix);const it=Ee.getUniforms(),st=Ma.seqWithValue(it.seq,Ce);return N.currentProgram=Ee,N.uniformsList=st,Ee}function Pf(w,D){const W=Oe.get(w);W.outputColorSpace=D.outputColorSpace,W.instancing=D.instancing,W.instancingColor=D.instancingColor,W.skinning=D.skinning,W.morphTargets=D.morphTargets,W.morphNormals=D.morphNormals,W.morphColors=D.morphColors,W.morphTargetsCount=D.morphTargetsCount,W.numClippingPlanes=D.numClippingPlanes,W.numIntersection=D.numClipIntersection,W.vertexAlphas=D.vertexAlphas,W.vertexTangents=D.vertexTangents,W.toneMapping=D.toneMapping}function $g(w,D,W,N,X){D.isScene!==!0&&(D=Vt),be.resetTextureUnits();const fe=D.fog,xe=N.isMeshStandardMaterial?D.environment:null,Te=A===null?p.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Vn,we=(N.isMeshStandardMaterial?yt:Ve).get(N.envMap||xe),Ie=N.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ee=!!W.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),Ce=!!W.morphAttributes.position,it=!!W.morphAttributes.normal,st=!!W.morphAttributes.color;let cn=Ii;N.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(cn=p.toneMapping);const Wn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,lt=Wn!==void 0?Wn.length:0,Ne=Oe.get(N),gl=g.state.lights;if(oe===!0&&(ue===!0||w!==y)){const Qt=w===y&&N.id===P;me.setState(N,w,Qt)}let ut=!1;N.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==gl.state.version||Ne.outputColorSpace!==Te||X.isInstancedMesh&&Ne.instancing===!1||!X.isInstancedMesh&&Ne.instancing===!0||X.isSkinnedMesh&&Ne.skinning===!1||!X.isSkinnedMesh&&Ne.skinning===!0||X.isInstancedMesh&&Ne.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ne.instancingColor===!1&&X.instanceColor!==null||Ne.envMap!==we||N.fog===!0&&Ne.fog!==fe||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==me.numPlanes||Ne.numIntersection!==me.numIntersection)||Ne.vertexAlphas!==Ie||Ne.vertexTangents!==Ee||Ne.morphTargets!==Ce||Ne.morphNormals!==it||Ne.morphColors!==st||Ne.toneMapping!==cn||Re.isWebGL2===!0&&Ne.morphTargetsCount!==lt)&&(ut=!0):(ut=!0,Ne.__version=N.version);let Vi=Ne.currentProgram;ut===!0&&(Vi=wo(N,D,X));let bf=!1,xs=!1,_l=!1;const Ft=Vi.getUniforms(),Wi=Ne.uniforms;if(Ae.useProgram(Vi.program)&&(bf=!0,xs=!0,_l=!0),N.id!==P&&(P=N.id,xs=!0),bf||y!==w){Ft.setValue(I,"projectionMatrix",w.projectionMatrix),Ft.setValue(I,"viewMatrix",w.matrixWorldInverse);const Qt=Ft.map.cameraPosition;Qt!==void 0&&Qt.setValue(I,Be.setFromMatrixPosition(w.matrixWorld)),Re.logarithmicDepthBuffer&&Ft.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&Ft.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,xs=!0,_l=!0)}if(X.isSkinnedMesh){Ft.setOptional(I,X,"bindMatrix"),Ft.setOptional(I,X,"bindMatrixInverse");const Qt=X.skeleton;Qt&&(Re.floatVertexTextures?(Qt.boneTexture===null&&Qt.computeBoneTexture(),Ft.setValue(I,"boneTexture",Qt.boneTexture,be),Ft.setValue(I,"boneTextureSize",Qt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const vl=W.morphAttributes;if((vl.position!==void 0||vl.normal!==void 0||vl.color!==void 0&&Re.isWebGL2===!0)&&ve.update(X,W,Vi),(xs||Ne.receiveShadow!==X.receiveShadow)&&(Ne.receiveShadow=X.receiveShadow,Ft.setValue(I,"receiveShadow",X.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(Wi.envMap.value=we,Wi.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),xs&&(Ft.setValue(I,"toneMappingExposure",p.toneMappingExposure),Ne.needsLights&&Kg(Wi,_l),fe&&N.fog===!0&&ee.refreshFogUniforms(Wi,fe),ee.refreshMaterialUniforms(Wi,N,q,Z,pe),Ma.upload(I,Ne.uniformsList,Wi,be)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(Ma.upload(I,Ne.uniformsList,Wi,be),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&Ft.setValue(I,"center",X.center),Ft.setValue(I,"modelViewMatrix",X.modelViewMatrix),Ft.setValue(I,"normalMatrix",X.normalMatrix),Ft.setValue(I,"modelMatrix",X.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const Qt=N.uniformsGroups;for(let xl=0,Qg=Qt.length;xl<Qg;xl++)if(Re.isWebGL2){const Uf=Qt[xl];De.update(Uf,Vi),De.bind(Uf,Vi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Vi}function Kg(w,D){w.ambientLightColor.needsUpdate=D,w.lightProbe.needsUpdate=D,w.directionalLights.needsUpdate=D,w.directionalLightShadows.needsUpdate=D,w.pointLights.needsUpdate=D,w.pointLightShadows.needsUpdate=D,w.spotLights.needsUpdate=D,w.spotLightShadows.needsUpdate=D,w.rectAreaLights.needsUpdate=D,w.hemisphereLights.needsUpdate=D}function Zg(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,D,W){Oe.get(w.texture).__webglTexture=D,Oe.get(w.depthTexture).__webglTexture=W;const N=Oe.get(w);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=W===void 0,N.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,D){const W=Oe.get(w);W.__webglFramebuffer=D,W.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(w,D=0,W=0){A=w,E=D,C=W;let N=!0,X=null,fe=!1,xe=!1;if(w){const we=Oe.get(w);we.__useDefaultFramebuffer!==void 0?(Ae.bindFramebuffer(I.FRAMEBUFFER,null),N=!1):we.__webglFramebuffer===void 0?be.setupRenderTarget(w):we.__hasExternalTextures&&be.rebindTextures(w,Oe.get(w.texture).__webglTexture,Oe.get(w.depthTexture).__webglTexture);const Ie=w.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(xe=!0);const Ee=Oe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ee[D])?X=Ee[D][W]:X=Ee[D],fe=!0):Re.isWebGL2&&w.samples>0&&be.useMultisampledRTT(w)===!1?X=Oe.get(w).__webglMultisampledFramebuffer:Array.isArray(Ee)?X=Ee[W]:X=Ee,T.copy(w.viewport),$.copy(w.scissor),K=w.scissorTest}else T.copy(B).multiplyScalar(q).floor(),$.copy(U).multiplyScalar(q).floor(),K=O;if(Ae.bindFramebuffer(I.FRAMEBUFFER,X)&&Re.drawBuffers&&N&&Ae.drawBuffers(w,X),Ae.viewport(T),Ae.scissor($),Ae.setScissorTest(K),fe){const we=Oe.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+D,we.__webglTexture,W)}else if(xe){const we=Oe.get(w.texture),Ie=D||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,we.__webglTexture,W||0,Ie)}P=-1},this.readRenderTargetPixels=function(w,D,W,N,X,fe,xe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Oe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&xe!==void 0&&(Te=Te[xe]),Te){Ae.bindFramebuffer(I.FRAMEBUFFER,Te);try{const we=w.texture,Ie=we.format,Ee=we.type;if(Ie!==Pn&&de.convert(Ie)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ce=Ee===po&&(Me.has("EXT_color_buffer_half_float")||Re.isWebGL2&&Me.has("EXT_color_buffer_float"));if(Ee!==Ni&&de.convert(Ee)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ee===Ti&&(Re.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!Ce){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=w.width-N&&W>=0&&W<=w.height-X&&I.readPixels(D,W,N,X,de.convert(Ie),de.convert(Ee),fe)}finally{const we=A!==null?Oe.get(A).__webglFramebuffer:null;Ae.bindFramebuffer(I.FRAMEBUFFER,we)}}},this.copyFramebufferToTexture=function(w,D,W=0){const N=Math.pow(2,-W),X=Math.floor(D.image.width*N),fe=Math.floor(D.image.height*N);be.setTexture2D(D,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,w.x,w.y,X,fe),Ae.unbindTexture()},this.copyTextureToTexture=function(w,D,W,N=0){const X=D.image.width,fe=D.image.height,xe=de.convert(W.format),Te=de.convert(W.type);be.setTexture2D(W,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,W.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,W.unpackAlignment),D.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,N,w.x,w.y,X,fe,xe,Te,D.image.data):D.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,N,w.x,w.y,D.mipmaps[0].width,D.mipmaps[0].height,xe,D.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,N,w.x,w.y,xe,Te,D.image),N===0&&W.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(w,D,W,N,X=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const fe=w.max.x-w.min.x+1,xe=w.max.y-w.min.y+1,Te=w.max.z-w.min.z+1,we=de.convert(N.format),Ie=de.convert(N.type);let Ee;if(N.isData3DTexture)be.setTexture3D(N,0),Ee=I.TEXTURE_3D;else if(N.isDataArrayTexture)be.setTexture2DArray(N,0),Ee=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);const Ce=I.getParameter(I.UNPACK_ROW_LENGTH),it=I.getParameter(I.UNPACK_IMAGE_HEIGHT),st=I.getParameter(I.UNPACK_SKIP_PIXELS),cn=I.getParameter(I.UNPACK_SKIP_ROWS),Wn=I.getParameter(I.UNPACK_SKIP_IMAGES),lt=W.isCompressedTexture?W.mipmaps[0]:W.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,lt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,lt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,w.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,w.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,w.min.z),W.isDataTexture||W.isData3DTexture?I.texSubImage3D(Ee,X,D.x,D.y,D.z,fe,xe,Te,we,Ie,lt.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Ee,X,D.x,D.y,D.z,fe,xe,Te,we,lt.data)):I.texSubImage3D(Ee,X,D.x,D.y,D.z,fe,xe,Te,we,Ie,lt),I.pixelStorei(I.UNPACK_ROW_LENGTH,Ce),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,it),I.pixelStorei(I.UNPACK_SKIP_PIXELS,st),I.pixelStorei(I.UNPACK_SKIP_ROWS,cn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Wn),X===0&&N.generateMipmaps&&I.generateMipmap(Ee),Ae.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?be.setTextureCube(w,0):w.isData3DTexture?be.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?be.setTexture2DArray(w,0):be.setTexture2D(w,0),Ae.unbindTexture()},this.resetState=function(){E=0,C=0,A=null,Ae.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ke?ar:Lg}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ar?Ke:Vn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class NT extends Yg{}NT.prototype.isWebGL1Renderer=!0;class FT extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class wf extends Gi{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),u(i),f(),this.setAttribute("position",new Gn(s,3)),this.setAttribute("normal",new Gn(s.slice(),3)),this.setAttribute("uv",new Gn(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(m){const p=new F,S=new F,E=new F;for(let C=0;C<n.length;C+=3)_(n[C+0],p),_(n[C+1],S),_(n[C+2],E),l(p,S,E,m)}function l(m,p,S,E){const C=E+1,A=[];for(let P=0;P<=C;P++){A[P]=[];const y=m.clone().lerp(S,P/C),T=p.clone().lerp(S,P/C),$=C-P;for(let K=0;K<=$;K++)K===0&&P===C?A[P][K]=y:A[P][K]=y.clone().lerp(T,K/$)}for(let P=0;P<C;P++)for(let y=0;y<2*(C-P)-1;y++){const T=Math.floor(y/2);y%2===0?(d(A[P][T+1]),d(A[P+1][T]),d(A[P][T])):(d(A[P][T+1]),d(A[P+1][T+1]),d(A[P+1][T]))}}function u(m){const p=new F;for(let S=0;S<s.length;S+=3)p.x=s[S+0],p.y=s[S+1],p.z=s[S+2],p.normalize().multiplyScalar(m),s[S+0]=p.x,s[S+1]=p.y,s[S+2]=p.z}function f(){const m=new F;for(let p=0;p<s.length;p+=3){m.x=s[p+0],m.y=s[p+1],m.z=s[p+2];const S=g(m)/2/Math.PI+.5,E=c(m)/Math.PI+.5;o.push(S,1-E)}x(),h()}function h(){for(let m=0;m<o.length;m+=6){const p=o[m+0],S=o[m+2],E=o[m+4],C=Math.max(p,S,E),A=Math.min(p,S,E);C>.9&&A<.1&&(p<.2&&(o[m+0]+=1),S<.2&&(o[m+2]+=1),E<.2&&(o[m+4]+=1))}}function d(m){s.push(m.x,m.y,m.z)}function _(m,p){const S=m*3;p.x=e[S+0],p.y=e[S+1],p.z=e[S+2]}function x(){const m=new F,p=new F,S=new F,E=new F,C=new He,A=new He,P=new He;for(let y=0,T=0;y<s.length;y+=9,T+=6){m.set(s[y+0],s[y+1],s[y+2]),p.set(s[y+3],s[y+4],s[y+5]),S.set(s[y+6],s[y+7],s[y+8]),C.set(o[T+0],o[T+1]),A.set(o[T+2],o[T+3]),P.set(o[T+4],o[T+5]),E.copy(m).add(p).add(S).divideScalar(3);const $=g(E);v(C,T+0,m,$),v(A,T+2,p,$),v(P,T+4,S,$)}}function v(m,p,S,E){E<0&&m.x===1&&(o[p]=m.x-1),S.x===0&&S.z===0&&(o[p]=E/2/Math.PI+.5)}function g(m){return Math.atan2(m.z,-m.x)}function c(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wf(e.vertices,e.indices,e.radius,e.details)}}class Af extends wf{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Af(e.radius,e.detail)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xf);function OT(){console.log("MyScene component is being rendered");const t=qs.useRef(null);return qs.useEffect(()=>{let e,n,i,r;function s(){if(console.log("Initialization started"),i=new Yg({alpha:!0}),!i){console.error("Renderer not initialized");return}e=new FT,n=new mn(45,window.innerWidth/window.innerHeight,.1,1e3),i.setSize(window.innerWidth,window.innerHeight);const u=new Af(2),f=new Mf({color:16777215,wireframe:!0});r=new ri(u,f),e.add(r),n.position.z=5,window.addEventListener("resize",a,!1),window.addEventListener("scroll",l,!1),o(),console.log("Initialization completed")}function o(){requestAnimationFrame(o),i.render(e,n)}function a(){n&&i&&(n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight))}function l(){const u=window.pageYOffset/document.body.offsetHeight;r.rotation.x=u*2*Math.PI,r.rotation.y=u*2*Math.PI,a()}return console.log("useEffect triggered"),s(),t.current&&i&&t.current.appendChild(i.domElement),()=>{window.removeEventListener("resize",a),window.removeEventListener("scroll",l),i&&t.current&&t.current.removeChild(i.domElement)}},[]),vt.jsx("div",{ref:t})}function zT(){return vt.jsxs(vt.Fragment,{children:[vt.jsx(OT,{}),vt.jsxs("div",{id:"about-card",children:[vt.jsx("h2",{children:"About Me"}),vt.jsx("p",{children:"Hello, I'm Tristan Lea"})]}),vt.jsxs("div",{id:"projects-card",children:[vt.jsx("h2",{children:"Projects"}),vt.jsx("p",{children:"Here are some of my projects"})]}),vt.jsxs("div",{id:"resume-card",children:[vt.jsx("h2",{children:"Resume"}),vt.jsx("p",{children:"Here is my resume"})]}),vt.jsxs("div",{id:"contact-card",children:[vt.jsx("h2",{children:"Contact"}),vt.jsx("p",{children:"Tlea5@uw.edu"})]})]})}Mu.createRoot(document.getElementById("root")).render(vt.jsx(m_.StrictMode,{children:vt.jsx(zT,{})}));
