(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function hs(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const he={},un=[],pt=()=>{},Vr=()=>!1,fa=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),gs=e=>e.startsWith("onUpdate:"),Pe=Object.assign,ms=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Li=Object.prototype.hasOwnProperty,ce=(e,t)=>Li.call(e,t),te=Array.isArray,pn=e=>ha(e)==="[object Map]",zr=e=>ha(e)==="[object Set]",se=e=>typeof e=="function",Ae=e=>typeof e=="string",Kt=e=>typeof e=="symbol",me=e=>e!==null&&typeof e=="object",Qr=e=>(me(e)||se(e))&&se(e.then)&&se(e.catch),Xr=Object.prototype.toString,ha=e=>Xr.call(e),Ii=e=>ha(e).slice(8,-1),Zr=e=>ha(e)==="[object Object]",_s=e=>Ae(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,An=hs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ga=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},Di=/-\w/g,ze=ga(e=>e.replace(Di,t=>t.slice(1).toUpperCase())),Mi=/\B([A-Z])/g,Yt=ga(e=>e.replace(Mi,"-$1").toLowerCase()),ma=ga(e=>e.charAt(0).toUpperCase()+e.slice(1)),xa=ga(e=>e?`on${ma(e)}`:""),Bt=(e,t)=>!Object.is(e,t),Ca=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},eo=(e,t,n,a=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:a,value:n})},Bi=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Fi=e=>{const t=Ae(e)?Number(e):NaN;return isNaN(t)?e:t};let Ys;const _a=()=>Ys||(Ys=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function bs(e){if(te(e)){const t={};for(let n=0;n<e.length;n++){const a=e[n],s=Ae(a)?Ki(a):bs(a);if(s)for(const r in s)t[r]=s[r]}return t}else if(Ae(e)||me(e))return e}const $i=/;(?![^(]*\))/g,Ui=/:([^]+)/,Hi=/\/\*[^]*?\*\//g;function Ki(e){const t={};return e.replace(Hi,"").split($i).forEach(n=>{if(n){const a=n.split(Ui);a.length>1&&(t[a[0].trim()]=a[1].trim())}}),t}function $t(e){let t="";if(Ae(e))t=e;else if(te(e))for(let n=0;n<e.length;n++){const a=$t(e[n]);a&&(t+=a+" ")}else if(me(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Yi="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ji=hs(Yi);function to(e){return!!e||e===""}const no=e=>!!(e&&e.__v_isRef===!0),ao=e=>Ae(e)?e:e==null?"":te(e)||me(e)&&(e.toString===Xr||!se(e.toString))?no(e)?ao(e.value):JSON.stringify(e,so,2):String(e),so=(e,t)=>no(t)?so(e,t.value):pn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[a,s],r)=>(n[Ra(a,r)+" =>"]=s,n),{})}:zr(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Ra(n))}:Kt(t)?Ra(t):me(t)&&!te(t)&&!Zr(t)?String(t):t,Ra=(e,t="")=>{var n;return Kt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};let xe;class ro{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=xe,!t&&xe&&(this.index=(xe.scopes||(xe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=xe;try{return xe=this,t()}finally{xe=n}}}on(){++this._on===1&&(this.prevScope=xe,xe=this)}off(){this._on>0&&--this._on===0&&(xe=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,a;for(n=0,a=this.effects.length;n<a;n++)this.effects[n].stop();for(this.effects.length=0,n=0,a=this.cleanups.length;n<a;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,a=this.scopes.length;n<a;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function oo(e){return new ro(e)}function io(){return xe}function qi(e,t=!1){xe&&xe.cleanups.push(e)}let fe;const Na=new WeakSet;class lo{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,xe&&xe.active&&xe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Na.has(this)&&(Na.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||uo(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,js(this),po(this);const t=fe,n=Ze;fe=this,Ze=!0;try{return this.fn()}finally{fo(this),fe=t,Ze=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Ts(t);this.deps=this.depsTail=void 0,js(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Na.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ja(this)&&this.run()}get dirty(){return Ja(this)}}let co=0,On,Pn;function uo(e,t=!1){if(e.flags|=8,t){e.next=Pn,Pn=e;return}e.next=On,On=e}function ys(){co++}function vs(){if(--co>0)return;if(Pn){let t=Pn;for(Pn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;On;){let t=On;for(On=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(a){e||(e=a)}t=n}}if(e)throw e}function po(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function fo(e){let t,n=e.depsTail,a=n;for(;a;){const s=a.prevDep;a.version===-1?(a===n&&(n=s),Ts(a),Gi(a)):t=a,a.dep.activeLink=a.prevActiveLink,a.prevActiveLink=void 0,a=s}e.deps=t,e.depsTail=n}function Ja(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(ho(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function ho(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===In)||(e.globalVersion=In,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ja(e))))return;e.flags|=2;const t=e.dep,n=fe,a=Ze;fe=e,Ze=!0;try{po(e);const s=e.fn(e._value);(t.version===0||Bt(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{fe=n,Ze=a,fo(e),e.flags&=-3}}function Ts(e,t=!1){const{dep:n,prevSub:a,nextSub:s}=e;if(a&&(a.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=a,e.nextSub=void 0),n.subs===e&&(n.subs=a,!a&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Ts(r,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Gi(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Ze=!0;const go=[];function At(){go.push(Ze),Ze=!1}function Ot(){const e=go.pop();Ze=e===void 0?!0:e}function js(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=fe;fe=void 0;try{t()}finally{fe=n}}}let In=0;class Wi{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Es{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!fe||!Ze||fe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==fe)n=this.activeLink=new Wi(fe,this),fe.deps?(n.prevDep=fe.depsTail,fe.depsTail.nextDep=n,fe.depsTail=n):fe.deps=fe.depsTail=n,mo(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const a=n.nextDep;a.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=a),n.prevDep=fe.depsTail,n.nextDep=void 0,fe.depsTail.nextDep=n,fe.depsTail=n,fe.deps===n&&(fe.deps=a)}return n}trigger(t){this.version++,In++,this.notify(t)}notify(t){ys();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{vs()}}}function mo(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let a=t.deps;a;a=a.nextDep)mo(a)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const na=new WeakMap,tn=Symbol(""),Va=Symbol(""),Dn=Symbol("");function Ce(e,t,n){if(Ze&&fe){let a=na.get(e);a||na.set(e,a=new Map);let s=a.get(n);s||(a.set(n,s=new Es),s.map=a,s.key=n),s.track()}}function Et(e,t,n,a,s,r){const o=na.get(e);if(!o){In++;return}const i=l=>{l&&l.trigger()};if(ys(),t==="clear")o.forEach(i);else{const l=te(e),u=l&&_s(n);if(l&&n==="length"){const d=Number(a);o.forEach((f,g)=>{(g==="length"||g===Dn||!Kt(g)&&g>=d)&&i(f)})}else switch((n!==void 0||o.has(void 0))&&i(o.get(n)),u&&i(o.get(Dn)),t){case"add":l?u&&i(o.get("length")):(i(o.get(tn)),pn(e)&&i(o.get(Va)));break;case"delete":l||(i(o.get(tn)),pn(e)&&i(o.get(Va)));break;case"set":pn(e)&&i(o.get(tn));break}}vs()}function Ji(e,t){const n=na.get(e);return n&&n.get(t)}function rn(e){const t=ie(e);return t===e?t:(Ce(t,"iterate",Dn),et(e)?t:t.map(Ie))}function Ss(e){return Ce(e=ie(e),"iterate",Dn),e}const Vi={__proto__:null,[Symbol.iterator](){return La(this,Symbol.iterator,Ie)},concat(...e){return rn(this).concat(...e.map(t=>te(t)?rn(t):t))},entries(){return La(this,"entries",e=>(e[1]=Ie(e[1]),e))},every(e,t){return gt(this,"every",e,t,void 0,arguments)},filter(e,t){return gt(this,"filter",e,t,n=>n.map(Ie),arguments)},find(e,t){return gt(this,"find",e,t,Ie,arguments)},findIndex(e,t){return gt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return gt(this,"findLast",e,t,Ie,arguments)},findLastIndex(e,t){return gt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return gt(this,"forEach",e,t,void 0,arguments)},includes(...e){return Ia(this,"includes",e)},indexOf(...e){return Ia(this,"indexOf",e)},join(e){return rn(this).join(e)},lastIndexOf(...e){return Ia(this,"lastIndexOf",e)},map(e,t){return gt(this,"map",e,t,void 0,arguments)},pop(){return yn(this,"pop")},push(...e){return yn(this,"push",e)},reduce(e,...t){return qs(this,"reduce",e,t)},reduceRight(e,...t){return qs(this,"reduceRight",e,t)},shift(){return yn(this,"shift")},some(e,t){return gt(this,"some",e,t,void 0,arguments)},splice(...e){return yn(this,"splice",e)},toReversed(){return rn(this).toReversed()},toSorted(e){return rn(this).toSorted(e)},toSpliced(...e){return rn(this).toSpliced(...e)},unshift(...e){return yn(this,"unshift",e)},values(){return La(this,"values",Ie)}};function La(e,t,n){const a=Ss(e),s=a[t]();return a!==e&&!et(e)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=n(r.value)),r}),s}const zi=Array.prototype;function gt(e,t,n,a,s,r){const o=Ss(e),i=o!==e&&!et(e),l=o[t];if(l!==zi[t]){const f=l.apply(e,r);return i?Ie(f):f}let u=n;o!==e&&(i?u=function(f,g){return n.call(this,Ie(f),g,e)}:n.length>2&&(u=function(f,g){return n.call(this,f,g,e)}));const d=l.call(o,u,a);return i&&s?s(d):d}function qs(e,t,n,a){const s=Ss(e);let r=n;return s!==e&&(et(e)?n.length>3&&(r=function(o,i,l){return n.call(this,o,i,l,e)}):r=function(o,i,l){return n.call(this,o,Ie(i),l,e)}),s[t](r,...a)}function Ia(e,t,n){const a=ie(e);Ce(a,"iterate",Dn);const s=a[t](...n);return(s===-1||s===!1)&&Ps(n[0])?(n[0]=ie(n[0]),a[t](...n)):s}function yn(e,t,n=[]){At(),ys();const a=ie(e)[t].apply(e,n);return vs(),Ot(),a}const Qi=hs("__proto__,__v_isRef,__isVue"),_o=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Kt));function Xi(e){Kt(e)||(e=String(e));const t=ie(this);return Ce(t,"has",e),t.hasOwnProperty(e)}class bo{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,a){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return a===(s?r?ll:Eo:r?To:vo).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(a)?t:void 0;const o=te(t);if(!s){let l;if(o&&(l=Vi[n]))return l;if(n==="hasOwnProperty")return Xi}const i=Reflect.get(t,n,Se(t)?t:a);if((Kt(n)?_o.has(n):Qi(n))||(s||Ce(t,"get",n),r))return i;if(Se(i)){const l=o&&_s(n)?i:i.value;return s&&me(l)?Qa(l):l}return me(i)?s?Qa(i):St(i):i}}class yo extends bo{constructor(t=!1){super(!1,t)}set(t,n,a,s){let r=t[n];if(!this._isShallow){const l=sn(r);if(!et(a)&&!sn(a)&&(r=ie(r),a=ie(a)),!te(t)&&Se(r)&&!Se(a))return l||(r.value=a),!0}const o=te(t)&&_s(n)?Number(n)<t.length:ce(t,n),i=Reflect.set(t,n,a,Se(t)?t:s);return t===ie(s)&&(o?Bt(a,r)&&Et(t,"set",n,a):Et(t,"add",n,a)),i}deleteProperty(t,n){const a=ce(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&a&&Et(t,"delete",n,void 0),s}has(t,n){const a=Reflect.has(t,n);return(!Kt(n)||!_o.has(n))&&Ce(t,"has",n),a}ownKeys(t){return Ce(t,"iterate",te(t)?"length":tn),Reflect.ownKeys(t)}}class Zi extends bo{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const el=new yo,tl=new Zi,nl=new yo(!0);const za=e=>e,Gn=e=>Reflect.getPrototypeOf(e);function al(e,t,n){return function(...a){const s=this.__v_raw,r=ie(s),o=pn(r),i=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=s[e](...a),d=n?za:t?Xa:Ie;return!t&&Ce(r,"iterate",l?Va:tn),{next(){const{value:f,done:g}=u.next();return g?{value:f,done:g}:{value:i?[d(f[0]),d(f[1])]:d(f),done:g}},[Symbol.iterator](){return this}}}}function Wn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function sl(e,t){const n={get(s){const r=this.__v_raw,o=ie(r),i=ie(s);e||(Bt(s,i)&&Ce(o,"get",s),Ce(o,"get",i));const{has:l}=Gn(o),u=t?za:e?Xa:Ie;if(l.call(o,s))return u(r.get(s));if(l.call(o,i))return u(r.get(i));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!e&&Ce(ie(s),"iterate",tn),s.size},has(s){const r=this.__v_raw,o=ie(r),i=ie(s);return e||(Bt(s,i)&&Ce(o,"has",s),Ce(o,"has",i)),s===i?r.has(s):r.has(s)||r.has(i)},forEach(s,r){const o=this,i=o.__v_raw,l=ie(i),u=t?za:e?Xa:Ie;return!e&&Ce(l,"iterate",tn),i.forEach((d,f)=>s.call(r,u(d),u(f),o))}};return Pe(n,e?{add:Wn("add"),set:Wn("set"),delete:Wn("delete"),clear:Wn("clear")}:{add(s){!t&&!et(s)&&!sn(s)&&(s=ie(s));const r=ie(this);return Gn(r).has.call(r,s)||(r.add(s),Et(r,"add",s,s)),this},set(s,r){!t&&!et(r)&&!sn(r)&&(r=ie(r));const o=ie(this),{has:i,get:l}=Gn(o);let u=i.call(o,s);u||(s=ie(s),u=i.call(o,s));const d=l.call(o,s);return o.set(s,r),u?Bt(r,d)&&Et(o,"set",s,r):Et(o,"add",s,r),this},delete(s){const r=ie(this),{has:o,get:i}=Gn(r);let l=o.call(r,s);l||(s=ie(s),l=o.call(r,s)),i&&i.call(r,s);const u=r.delete(s);return l&&Et(r,"delete",s,void 0),u},clear(){const s=ie(this),r=s.size!==0,o=s.clear();return r&&Et(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=al(s,e,t)}),n}function As(e,t){const n=sl(e,t);return(a,s,r)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?a:Reflect.get(ce(n,s)&&s in a?n:a,s,r)}const rl={get:As(!1,!1)},ol={get:As(!1,!0)},il={get:As(!0,!1)};const vo=new WeakMap,To=new WeakMap,Eo=new WeakMap,ll=new WeakMap;function cl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function dl(e){return e.__v_skip||!Object.isExtensible(e)?0:cl(Ii(e))}function St(e){return sn(e)?e:Os(e,!1,el,rl,vo)}function So(e){return Os(e,!1,nl,ol,To)}function Qa(e){return Os(e,!0,tl,il,Eo)}function Os(e,t,n,a,s){if(!me(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=dl(e);if(r===0)return e;const o=s.get(e);if(o)return o;const i=new Proxy(e,r===2?a:n);return s.set(e,i),i}function nn(e){return sn(e)?nn(e.__v_raw):!!(e&&e.__v_isReactive)}function sn(e){return!!(e&&e.__v_isReadonly)}function et(e){return!!(e&&e.__v_isShallow)}function Ps(e){return e?!!e.__v_raw:!1}function ie(e){const t=e&&e.__v_raw;return t?ie(t):e}function ks(e){return!ce(e,"__v_skip")&&Object.isExtensible(e)&&eo(e,"__v_skip",!0),e}const Ie=e=>me(e)?St(e):e,Xa=e=>me(e)?Qa(e):e;function Se(e){return e?e.__v_isRef===!0:!1}function Je(e){return Ao(e,!1)}function ul(e){return Ao(e,!0)}function Ao(e,t){return Se(e)?e:new pl(e,t)}class pl{constructor(t,n){this.dep=new Es,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:ie(t),this._value=n?t:Ie(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,a=this.__v_isShallow||et(t)||sn(t);t=a?t:ie(t),Bt(t,n)&&(this._rawValue=t,this._value=a?t:Ie(t),this.dep.trigger())}}function Ft(e){return Se(e)?e.value:e}const fl={get:(e,t,n)=>t==="__v_raw"?e:Ft(Reflect.get(e,t,n)),set:(e,t,n,a)=>{const s=e[t];return Se(s)&&!Se(n)?(s.value=n,!0):Reflect.set(e,t,n,a)}};function Oo(e){return nn(e)?e:new Proxy(e,fl)}function hl(e){const t=te(e)?new Array(e.length):{};for(const n in e)t[n]=ml(e,n);return t}class gl{constructor(t,n,a){this._object=t,this._key=n,this._defaultValue=a,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Ji(ie(this._object),this._key)}}function ml(e,t,n){const a=e[t];return Se(a)?a:new gl(e,t,n)}class _l{constructor(t,n,a){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Es(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=In-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=a}notify(){if(this.flags|=16,!(this.flags&8)&&fe!==this)return uo(this,!0),!0}get value(){const t=this.dep.track();return ho(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function bl(e,t,n=!1){let a,s;return se(e)?a=e:(a=e.get,s=e.set),new _l(a,s,n)}const Jn={},aa=new WeakMap;let Qt;function yl(e,t=!1,n=Qt){if(n){let a=aa.get(n);a||aa.set(n,a=[]),a.push(e)}}function vl(e,t,n=he){const{immediate:a,deep:s,once:r,scheduler:o,augmentJob:i,call:l}=n,u=S=>s?S:et(S)||s===!1||s===0?Mt(S,1):Mt(S);let d,f,g,p,h=!1,c=!1;if(Se(e)?(f=()=>e.value,h=et(e)):nn(e)?(f=()=>u(e),h=!0):te(e)?(c=!0,h=e.some(S=>nn(S)||et(S)),f=()=>e.map(S=>{if(Se(S))return S.value;if(nn(S))return u(S);if(se(S))return l?l(S,2):S()})):se(e)?t?f=l?()=>l(e,2):e:f=()=>{if(g){At();try{g()}finally{Ot()}}const S=Qt;Qt=d;try{return l?l(e,3,[p]):e(p)}finally{Qt=S}}:f=pt,t&&s){const S=f,x=s===!0?1/0:s;f=()=>Mt(S(),x)}const m=io(),_=()=>{d.stop(),m&&m.active&&ms(m.effects,d)};if(r&&t){const S=t;t=(...x)=>{S(...x),_()}}let y=c?new Array(e.length).fill(Jn):Jn;const T=S=>{if(!(!(d.flags&1)||!d.dirty&&!S))if(t){const x=d.run();if(s||h||(c?x.some((L,w)=>Bt(L,y[w])):Bt(x,y))){g&&g();const L=Qt;Qt=d;try{const w=[x,y===Jn?void 0:c&&y[0]===Jn?[]:y,p];y=x,l?l(t,3,w):t(...w)}finally{Qt=L}}}else d.run()};return i&&i(T),d=new lo(f),d.scheduler=o?()=>o(T,!1):T,p=S=>yl(S,!1,d),g=d.onStop=()=>{const S=aa.get(d);if(S){if(l)l(S,4);else for(const x of S)x();aa.delete(d)}},t?a?T(!0):y=d.run():o?o(T.bind(null,!0),!0):d.run(),_.pause=d.pause.bind(d),_.resume=d.resume.bind(d),_.stop=_,_}function Mt(e,t=1/0,n){if(t<=0||!me(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Se(e))Mt(e.value,t,n);else if(te(e))for(let a=0;a<e.length;a++)Mt(e[a],t,n);else if(zr(e)||pn(e))e.forEach(a=>{Mt(a,t,n)});else if(Zr(e)){for(const a in e)Mt(e[a],t,n);for(const a of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,a)&&Mt(e[a],t,n)}return e}function Yn(e,t,n,a){try{return a?e(...a):e()}catch(s){ba(s,t,n)}}function tt(e,t,n,a){if(se(e)){const s=Yn(e,t,n,a);return s&&Qr(s)&&s.catch(r=>{ba(r,t,n)}),s}if(te(e)){const s=[];for(let r=0;r<e.length;r++)s.push(tt(e[r],t,n,a));return s}}function ba(e,t,n,a=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||he;if(t){let i=t.parent;const l=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const d=i.ec;if(d){for(let f=0;f<d.length;f++)if(d[f](e,l,u)===!1)return}i=i.parent}if(r){At(),Yn(r,null,10,[e,l,u]),Ot();return}}Tl(e,n,s,a,o)}function Tl(e,t,n,a=!0,s=!1){if(s)throw e;console.error(e)}const De=[];let lt=-1;const fn=[];let Rt=null,cn=0;const Po=Promise.resolve();let sa=null;function ws(e){const t=sa||Po;return e?t.then(this?e.bind(this):e):t}function El(e){let t=lt+1,n=De.length;for(;t<n;){const a=t+n>>>1,s=De[a],r=Mn(s);r<e||r===e&&s.flags&2?t=a+1:n=a}return t}function xs(e){if(!(e.flags&1)){const t=Mn(e),n=De[De.length-1];!n||!(e.flags&2)&&t>=Mn(n)?De.push(e):De.splice(El(t),0,e),e.flags|=1,ko()}}function ko(){sa||(sa=Po.then(xo))}function Sl(e){te(e)?fn.push(...e):Rt&&e.id===-1?Rt.splice(cn+1,0,e):e.flags&1||(fn.push(e),e.flags|=1),ko()}function Gs(e,t,n=lt+1){for(;n<De.length;n++){const a=De[n];if(a&&a.flags&2){if(e&&a.id!==e.uid)continue;De.splice(n,1),n--,a.flags&4&&(a.flags&=-2),a(),a.flags&4||(a.flags&=-2)}}}function wo(e){if(fn.length){const t=[...new Set(fn)].sort((n,a)=>Mn(n)-Mn(a));if(fn.length=0,Rt){Rt.push(...t);return}for(Rt=t,cn=0;cn<Rt.length;cn++){const n=Rt[cn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Rt=null,cn=0}}const Mn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function xo(e){try{for(lt=0;lt<De.length;lt++){const t=De[lt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Yn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;lt<De.length;lt++){const t=De[lt];t&&(t.flags&=-2)}lt=-1,De.length=0,wo(),sa=null,(De.length||fn.length)&&xo()}}let Xe=null,Co=null;function ra(e){const t=Xe;return Xe=e,Co=e&&e.type.__scopeId||null,t}function Za(e,t=Xe,n){if(!t||e._n)return e;const a=(...s)=>{a._d&&la(-1);const r=ra(t);let o;try{o=e(...s)}finally{ra(r),a._d&&la(1)}return o};return a._n=!0,a._c=!0,a._d=!0,a}function Wt(e,t,n,a){const s=e.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const i=s[o];r&&(i.oldValue=r[o].value);let l=i.dir[a];l&&(At(),tt(l,n,8,[e.el,i,e,t]),Ot())}}const Al=Symbol("_vte"),Ro=e=>e.__isTeleport,vt=Symbol("_leaveCb"),Vn=Symbol("_enterCb");function Ol(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return jt(()=>{e.isMounted=!0}),Uo(()=>{e.isUnmounting=!0}),e}const We=[Function,Array],No={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:We,onEnter:We,onAfterEnter:We,onEnterCancelled:We,onBeforeLeave:We,onLeave:We,onAfterLeave:We,onLeaveCancelled:We,onBeforeAppear:We,onAppear:We,onAfterAppear:We,onAppearCancelled:We},Lo=e=>{const t=e.subTree;return t.component?Lo(t.component):t},Pl={name:"BaseTransition",props:No,setup(e,{slots:t}){const n=Ls(),a=Ol();return()=>{const s=t.default&&Mo(t.default(),!0);if(!s||!s.length)return;const r=Io(s),o=ie(e),{mode:i}=o;if(a.isLeaving)return Da(r);const l=Ws(r);if(!l)return Da(r);let u=es(l,o,a,n,f=>u=f);l.type!==Ye&&Bn(l,u);let d=n.subTree&&Ws(n.subTree);if(d&&d.type!==Ye&&!Xt(d,l)&&Lo(n).type!==Ye){let f=es(d,o,a,n);if(Bn(d,f),i==="out-in"&&l.type!==Ye)return a.isLeaving=!0,f.afterLeave=()=>{a.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,d=void 0},Da(r);i==="in-out"&&l.type!==Ye?f.delayLeave=(g,p,h)=>{const c=Do(a,d);c[String(d.key)]=d,g[vt]=()=>{p(),g[vt]=void 0,delete u.delayedLeave,d=void 0},u.delayedLeave=()=>{h(),delete u.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return r}}};function Io(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Ye){t=n;break}}return t}const kl=Pl;function Do(e,t){const{leavingVNodes:n}=e;let a=n.get(t.type);return a||(a=Object.create(null),n.set(t.type,a)),a}function es(e,t,n,a,s){const{appear:r,mode:o,persisted:i=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:d,onEnterCancelled:f,onBeforeLeave:g,onLeave:p,onAfterLeave:h,onLeaveCancelled:c,onBeforeAppear:m,onAppear:_,onAfterAppear:y,onAppearCancelled:T}=t,S=String(e.key),x=Do(n,e),L=(O,B)=>{O&&tt(O,a,9,B)},w=(O,B)=>{const K=B[1];L(O,B),te(O)?O.every(P=>P.length<=1)&&K():O.length<=1&&K()},I={mode:o,persisted:i,beforeEnter(O){let B=l;if(!n.isMounted)if(r)B=m||l;else return;O[vt]&&O[vt](!0);const K=x[S];K&&Xt(e,K)&&K.el[vt]&&K.el[vt](),L(B,[O])},enter(O){let B=u,K=d,P=f;if(!n.isMounted)if(r)B=_||u,K=y||d,P=T||f;else return;let V=!1;const U=O[Vn]=ne=>{V||(V=!0,ne?L(P,[O]):L(K,[O]),I.delayedLeave&&I.delayedLeave(),O[Vn]=void 0)};B?w(B,[O,U]):U()},leave(O,B){const K=String(e.key);if(O[Vn]&&O[Vn](!0),n.isUnmounting)return B();L(g,[O]);let P=!1;const V=O[vt]=U=>{P||(P=!0,B(),U?L(c,[O]):L(h,[O]),O[vt]=void 0,x[K]===e&&delete x[K])};x[K]=e,p?w(p,[O,V]):V()},clone(O){const B=es(O,t,n,a,s);return s&&s(B),B}};return I}function Da(e){if(ya(e))return e=Ut(e),e.children=null,e}function Ws(e){if(!ya(e))return Ro(e.type)&&e.children?Io(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&se(n.default))return n.default()}}function Bn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Bn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Mo(e,t=!1,n){let a=[],s=0;for(let r=0;r<e.length;r++){let o=e[r];const i=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===dt?(o.patchFlag&128&&s++,a=a.concat(Mo(o.children,t,i))):(t||o.type!==Ye)&&a.push(i!=null?Ut(o,{key:i}):o)}if(s>1)for(let r=0;r<a.length;r++)a[r].patchFlag=-2;return a}function Bo(e,t){return se(e)?Pe({name:e.name},t,{setup:e}):e}function Fo(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const oa=new WeakMap;function kn(e,t,n,a,s=!1){if(te(e)){e.forEach((h,c)=>kn(h,t&&(te(t)?t[c]:t),n,a,s));return}if(wn(a)&&!s){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&kn(e,t,n,a.component.subTree);return}const r=a.shapeFlag&4?Is(a.component):a.el,o=s?null:r,{i,r:l}=e,u=t&&t.r,d=i.refs===he?i.refs={}:i.refs,f=i.setupState,g=ie(f),p=f===he?Vr:h=>ce(g,h);if(u!=null&&u!==l){if(Js(t),Ae(u))d[u]=null,p(u)&&(f[u]=null);else if(Se(u)){u.value=null;const h=t;h.k&&(d[h.k]=null)}}if(se(l))Yn(l,i,12,[o,d]);else{const h=Ae(l),c=Se(l);if(h||c){const m=()=>{if(e.f){const _=h?p(l)?f[l]:d[l]:l.value;if(s)te(_)&&ms(_,r);else if(te(_))_.includes(r)||_.push(r);else if(h)d[l]=[r],p(l)&&(f[l]=d[l]);else{const y=[r];l.value=y,e.k&&(d[e.k]=y)}}else h?(d[l]=o,p(l)&&(f[l]=o)):c&&(l.value=o,e.k&&(d[e.k]=o))};if(o){const _=()=>{m(),oa.delete(e)};_.id=-1,oa.set(e,_),Ke(_,n)}else Js(e),m()}}}function Js(e){const t=oa.get(e);t&&(t.flags|=8,oa.delete(e))}_a().requestIdleCallback;_a().cancelIdleCallback;const wn=e=>!!e.type.__asyncLoader,ya=e=>e.type.__isKeepAlive;function wl(e,t){$o(e,"a",t)}function xl(e,t){$o(e,"da",t)}function $o(e,t,n=Re){const a=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(va(t,a,n),n){let s=n.parent;for(;s&&s.parent;)ya(s.parent.vnode)&&Cl(a,t,n,s),s=s.parent}}function Cl(e,t,n,a){const s=va(t,e,a,!0);Ta(()=>{ms(a[t],s)},n)}function va(e,t,n=Re,a=!1){if(n){const s=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...o)=>{At();const i=jn(n),l=tt(t,n,e,o);return i(),Ot(),l});return a?s.unshift(r):s.push(r),r}}const kt=e=>(t,n=Re)=>{(!$n||e==="sp")&&va(e,(...a)=>t(...a),n)},Rl=kt("bm"),jt=kt("m"),Nl=kt("bu"),Ll=kt("u"),Uo=kt("bum"),Ta=kt("um"),Il=kt("sp"),Dl=kt("rtg"),Ml=kt("rtc");function Bl(e,t=Re){va("ec",e,t)}const Fl="components",Ho=Symbol.for("v-ndc");function $l(e){return Ae(e)?Ul(Fl,e,!1)||e:e||Ho}function Ul(e,t,n=!0,a=!1){const s=Xe||Re;if(s){const r=s.type;{const i=wc(r,!1);if(i&&(i===t||i===ze(t)||i===ma(ze(t))))return r}const o=Vs(s[e]||r[e],t)||Vs(s.appContext[e],t);return!o&&a?r:o}}function Vs(e,t){return e&&(e[t]||e[ze(t)]||e[ma(ze(t))])}const ts=e=>e?ii(e)?Is(e):ts(e.parent):null,xn=Pe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ts(e.parent),$root:e=>ts(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Yo(e),$forceUpdate:e=>e.f||(e.f=()=>{xs(e.update)}),$nextTick:e=>e.n||(e.n=ws.bind(e.proxy)),$watch:e=>lc.bind(e)}),Ma=(e,t)=>e!==he&&!e.__isScriptSetup&&ce(e,t),Hl={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:a,data:s,props:r,accessCache:o,type:i,appContext:l}=e;let u;if(t[0]!=="$"){const p=o[t];if(p!==void 0)switch(p){case 1:return a[t];case 2:return s[t];case 4:return n[t];case 3:return r[t]}else{if(Ma(a,t))return o[t]=1,a[t];if(s!==he&&ce(s,t))return o[t]=2,s[t];if((u=e.propsOptions[0])&&ce(u,t))return o[t]=3,r[t];if(n!==he&&ce(n,t))return o[t]=4,n[t];ns&&(o[t]=0)}}const d=xn[t];let f,g;if(d)return t==="$attrs"&&Ce(e.attrs,"get",""),d(e);if((f=i.__cssModules)&&(f=f[t]))return f;if(n!==he&&ce(n,t))return o[t]=4,n[t];if(g=l.config.globalProperties,ce(g,t))return g[t]},set({_:e},t,n){const{data:a,setupState:s,ctx:r}=e;return Ma(s,t)?(s[t]=n,!0):a!==he&&ce(a,t)?(a[t]=n,!0):ce(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:a,appContext:s,propsOptions:r,type:o}},i){let l,u;return!!(n[i]||e!==he&&i[0]!=="$"&&ce(e,i)||Ma(t,i)||(l=r[0])&&ce(l,i)||ce(a,i)||ce(xn,i)||ce(s.config.globalProperties,i)||(u=o.__cssModules)&&u[i])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ce(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function zs(e){return te(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ns=!0;function Kl(e){const t=Yo(e),n=e.proxy,a=e.ctx;ns=!1,t.beforeCreate&&Qs(t.beforeCreate,e,"bc");const{data:s,computed:r,methods:o,watch:i,provide:l,inject:u,created:d,beforeMount:f,mounted:g,beforeUpdate:p,updated:h,activated:c,deactivated:m,beforeDestroy:_,beforeUnmount:y,destroyed:T,unmounted:S,render:x,renderTracked:L,renderTriggered:w,errorCaptured:I,serverPrefetch:O,expose:B,inheritAttrs:K,components:P,directives:V,filters:U}=t;if(u&&Yl(u,a,null),o)for(const Y in o){const Q=o[Y];se(Q)&&(a[Y]=Q.bind(n))}if(s){const Y=s.call(n,n);me(Y)&&(e.data=St(Y))}if(ns=!0,r)for(const Y in r){const Q=r[Y],ue=se(Q)?Q.bind(n,n):se(Q.get)?Q.get.bind(n,n):pt,_e=!se(Q)&&se(Q.set)?Q.set.bind(n):pt,Ee=je({get:ue,set:_e});Object.defineProperty(a,Y,{enumerable:!0,configurable:!0,get:()=>Ee.value,set:ge=>Ee.value=ge})}if(i)for(const Y in i)Ko(i[Y],a,n,Y);if(l){const Y=se(l)?l.call(n):l;Reflect.ownKeys(Y).forEach(Q=>{Xn(Q,Y[Q])})}d&&Qs(d,e,"c");function Z(Y,Q){te(Q)?Q.forEach(ue=>Y(ue.bind(n))):Q&&Y(Q.bind(n))}if(Z(Rl,f),Z(jt,g),Z(Nl,p),Z(Ll,h),Z(wl,c),Z(xl,m),Z(Bl,I),Z(Ml,L),Z(Dl,w),Z(Uo,y),Z(Ta,S),Z(Il,O),te(B))if(B.length){const Y=e.exposed||(e.exposed={});B.forEach(Q=>{Object.defineProperty(Y,Q,{get:()=>n[Q],set:ue=>n[Q]=ue,enumerable:!0})})}else e.exposed||(e.exposed={});x&&e.render===pt&&(e.render=x),K!=null&&(e.inheritAttrs=K),P&&(e.components=P),V&&(e.directives=V),O&&Fo(e)}function Yl(e,t,n=pt){te(e)&&(e=as(e));for(const a in e){const s=e[a];let r;me(s)?"default"in s?r=Ve(s.from||a,s.default,!0):r=Ve(s.from||a):r=Ve(s),Se(r)?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[a]=r}}function Qs(e,t,n){tt(te(e)?e.map(a=>a.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ko(e,t,n,a){let s=a.includes(".")?ni(n,a):()=>n[a];if(Ae(e)){const r=t[e];se(r)&&Cn(s,r)}else if(se(e))Cn(s,e.bind(n));else if(me(e))if(te(e))e.forEach(r=>Ko(r,t,n,a));else{const r=se(e.handler)?e.handler.bind(n):t[e.handler];se(r)&&Cn(s,r,e)}}function Yo(e){const t=e.type,{mixins:n,extends:a}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=e.appContext,i=r.get(t);let l;return i?l=i:!s.length&&!n&&!a?l=t:(l={},s.length&&s.forEach(u=>ia(l,u,o,!0)),ia(l,t,o)),me(t)&&r.set(t,l),l}function ia(e,t,n,a=!1){const{mixins:s,extends:r}=t;r&&ia(e,r,n,!0),s&&s.forEach(o=>ia(e,o,n,!0));for(const o in t)if(!(a&&o==="expose")){const i=jl[o]||n&&n[o];e[o]=i?i(e[o],t[o]):t[o]}return e}const jl={data:Xs,props:Zs,emits:Zs,methods:En,computed:En,beforeCreate:Ne,created:Ne,beforeMount:Ne,mounted:Ne,beforeUpdate:Ne,updated:Ne,beforeDestroy:Ne,beforeUnmount:Ne,destroyed:Ne,unmounted:Ne,activated:Ne,deactivated:Ne,errorCaptured:Ne,serverPrefetch:Ne,components:En,directives:En,watch:Gl,provide:Xs,inject:ql};function Xs(e,t){return t?e?function(){return Pe(se(e)?e.call(this,this):e,se(t)?t.call(this,this):t)}:t:e}function ql(e,t){return En(as(e),as(t))}function as(e){if(te(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ne(e,t){return e?[...new Set([].concat(e,t))]:t}function En(e,t){return e?Pe(Object.create(null),e,t):t}function Zs(e,t){return e?te(e)&&te(t)?[...new Set([...e,...t])]:Pe(Object.create(null),zs(e),zs(t??{})):t}function Gl(e,t){if(!e)return t;if(!t)return e;const n=Pe(Object.create(null),e);for(const a in t)n[a]=Ne(e[a],t[a]);return n}function jo(){return{app:null,config:{isNativeTag:Vr,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wl=0;function Jl(e,t){return function(a,s=null){se(a)||(a=Pe({},a)),s!=null&&!me(s)&&(s=null);const r=jo(),o=new WeakSet,i=[];let l=!1;const u=r.app={_uid:Wl++,_component:a,_props:s,_container:null,_context:r,_instance:null,version:Cc,get config(){return r.config},set config(d){},use(d,...f){return o.has(d)||(d&&se(d.install)?(o.add(d),d.install(u,...f)):se(d)&&(o.add(d),d(u,...f))),u},mixin(d){return r.mixins.includes(d)||r.mixins.push(d),u},component(d,f){return f?(r.components[d]=f,u):r.components[d]},directive(d,f){return f?(r.directives[d]=f,u):r.directives[d]},mount(d,f,g){if(!l){const p=u._ceVNode||Ue(a,s);return p.appContext=r,g===!0?g="svg":g===!1&&(g=void 0),e(p,d,g),l=!0,u._container=d,d.__vue_app__=u,Is(p.component)}},onUnmount(d){i.push(d)},unmount(){l&&(tt(i,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(d,f){return r.provides[d]=f,u},runWithContext(d){const f=an;an=u;try{return d()}finally{an=f}}};return u}}let an=null;function Xn(e,t){if(Re){let n=Re.provides;const a=Re.parent&&Re.parent.provides;a===n&&(n=Re.provides=Object.create(a)),n[e]=t}}function Ve(e,t,n=!1){const a=Ls();if(a||an){let s=an?an._context.provides:a?a.parent==null||a.ce?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&se(t)?t.call(a&&a.proxy):t}}function Vl(){return!!(Ls()||an)}const qo={},Go=()=>Object.create(qo),Wo=e=>Object.getPrototypeOf(e)===qo;function zl(e,t,n,a=!1){const s={},r=Go();e.propsDefaults=Object.create(null),Jo(e,t,s,r);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=a?s:So(s):e.type.props?e.props=s:e.props=r,e.attrs=r}function Ql(e,t,n,a){const{props:s,attrs:r,vnode:{patchFlag:o}}=e,i=ie(s),[l]=e.propsOptions;let u=!1;if((a||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let f=0;f<d.length;f++){let g=d[f];if(Ea(e.emitsOptions,g))continue;const p=t[g];if(l)if(ce(r,g))p!==r[g]&&(r[g]=p,u=!0);else{const h=ze(g);s[h]=ss(l,i,h,p,e,!1)}else p!==r[g]&&(r[g]=p,u=!0)}}}else{Jo(e,t,s,r)&&(u=!0);let d;for(const f in i)(!t||!ce(t,f)&&((d=Yt(f))===f||!ce(t,d)))&&(l?n&&(n[f]!==void 0||n[d]!==void 0)&&(s[f]=ss(l,i,f,void 0,e,!0)):delete s[f]);if(r!==i)for(const f in r)(!t||!ce(t,f))&&(delete r[f],u=!0)}u&&Et(e.attrs,"set","")}function Jo(e,t,n,a){const[s,r]=e.propsOptions;let o=!1,i;if(t)for(let l in t){if(An(l))continue;const u=t[l];let d;s&&ce(s,d=ze(l))?!r||!r.includes(d)?n[d]=u:(i||(i={}))[d]=u:Ea(e.emitsOptions,l)||(!(l in a)||u!==a[l])&&(a[l]=u,o=!0)}if(r){const l=ie(n),u=i||he;for(let d=0;d<r.length;d++){const f=r[d];n[f]=ss(s,l,f,u[f],e,!ce(u,f))}}return o}function ss(e,t,n,a,s,r){const o=e[n];if(o!=null){const i=ce(o,"default");if(i&&a===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&se(l)){const{propsDefaults:u}=s;if(n in u)a=u[n];else{const d=jn(s);a=u[n]=l.call(null,t),d()}}else a=l;s.ce&&s.ce._setProp(n,a)}o[0]&&(r&&!i?a=!1:o[1]&&(a===""||a===Yt(n))&&(a=!0))}return a}const Xl=new WeakMap;function Vo(e,t,n=!1){const a=n?Xl:t.propsCache,s=a.get(e);if(s)return s;const r=e.props,o={},i=[];let l=!1;if(!se(e)){const d=f=>{l=!0;const[g,p]=Vo(f,t,!0);Pe(o,g),p&&i.push(...p)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!r&&!l)return me(e)&&a.set(e,un),un;if(te(r))for(let d=0;d<r.length;d++){const f=ze(r[d]);er(f)&&(o[f]=he)}else if(r)for(const d in r){const f=ze(d);if(er(f)){const g=r[d],p=o[f]=te(g)||se(g)?{type:g}:Pe({},g),h=p.type;let c=!1,m=!0;if(te(h))for(let _=0;_<h.length;++_){const y=h[_],T=se(y)&&y.name;if(T==="Boolean"){c=!0;break}else T==="String"&&(m=!1)}else c=se(h)&&h.name==="Boolean";p[0]=c,p[1]=m,(c||ce(p,"default"))&&i.push(f)}}const u=[o,i];return me(e)&&a.set(e,u),u}function er(e){return e[0]!=="$"&&!An(e)}const Cs=e=>e==="_"||e==="_ctx"||e==="$stable",Rs=e=>te(e)?e.map(ut):[ut(e)],Zl=(e,t,n)=>{if(t._n)return t;const a=Za((...s)=>Rs(t(...s)),n);return a._c=!1,a},zo=(e,t,n)=>{const a=e._ctx;for(const s in e){if(Cs(s))continue;const r=e[s];if(se(r))t[s]=Zl(s,r,a);else if(r!=null){const o=Rs(r);t[s]=()=>o}}},Qo=(e,t)=>{const n=Rs(t);e.slots.default=()=>n},Xo=(e,t,n)=>{for(const a in t)(n||!Cs(a))&&(e[a]=t[a])},ec=(e,t,n)=>{const a=e.slots=Go();if(e.vnode.shapeFlag&32){const s=t._;s?(Xo(a,t,n),n&&eo(a,"_",s,!0)):zo(t,a)}else t&&Qo(e,t)},tc=(e,t,n)=>{const{vnode:a,slots:s}=e;let r=!0,o=he;if(a.shapeFlag&32){const i=t._;i?n&&i===1?r=!1:Xo(s,t,n):(r=!t.$stable,zo(t,s)),o=t}else t&&(Qo(e,t),o={default:1});if(r)for(const i in s)!Cs(i)&&o[i]==null&&delete s[i]},Ke=mc;function nc(e){return ac(e)}function ac(e,t){const n=_a();n.__VUE__=!0;const{insert:a,remove:s,patchProp:r,createElement:o,createText:i,createComment:l,setText:u,setElementText:d,parentNode:f,nextSibling:g,setScopeId:p=pt,insertStaticContent:h}=e,c=(b,v,E,N=null,D=null,R=null,q=void 0,H=null,$=!!v.dynamicChildren)=>{if(b===v)return;b&&!Xt(b,v)&&(N=C(b),ge(b,D,R,!0),b=null),v.patchFlag===-2&&($=!1,v.dynamicChildren=null);const{type:F,ref:ee,shapeFlag:W}=v;switch(F){case Sa:m(b,v,E,N);break;case Ye:_(b,v,E,N);break;case Zn:b==null&&y(v,E,N,q);break;case dt:P(b,v,E,N,D,R,q,H,$);break;default:W&1?x(b,v,E,N,D,R,q,H,$):W&6?V(b,v,E,N,D,R,q,H,$):(W&64||W&128)&&F.process(b,v,E,N,D,R,q,H,$,z)}ee!=null&&D?kn(ee,b&&b.ref,R,v||b,!v):ee==null&&b&&b.ref!=null&&kn(b.ref,null,R,b,!0)},m=(b,v,E,N)=>{if(b==null)a(v.el=i(v.children),E,N);else{const D=v.el=b.el;v.children!==b.children&&u(D,v.children)}},_=(b,v,E,N)=>{b==null?a(v.el=l(v.children||""),E,N):v.el=b.el},y=(b,v,E,N)=>{[b.el,b.anchor]=h(b.children,v,E,N,b.el,b.anchor)},T=({el:b,anchor:v},E,N)=>{let D;for(;b&&b!==v;)D=g(b),a(b,E,N),b=D;a(v,E,N)},S=({el:b,anchor:v})=>{let E;for(;b&&b!==v;)E=g(b),s(b),b=E;s(v)},x=(b,v,E,N,D,R,q,H,$)=>{if(v.type==="svg"?q="svg":v.type==="math"&&(q="mathml"),b==null)L(v,E,N,D,R,q,H,$);else{const F=b.el&&b.el._isVueCE?b.el:null;try{F&&F._beginPatch(),O(b,v,D,R,q,H,$)}finally{F&&F._endPatch()}}},L=(b,v,E,N,D,R,q,H)=>{let $,F;const{props:ee,shapeFlag:W,transition:X,dirs:ae}=b;if($=b.el=o(b.type,R,ee&&ee.is,ee),W&8?d($,b.children):W&16&&I(b.children,$,null,N,D,Ba(b,R),q,H),ae&&Wt(b,null,N,"created"),w($,b,b.scopeId,q,N),ee){for(const pe in ee)pe!=="value"&&!An(pe)&&r($,pe,null,ee[pe],R,N);"value"in ee&&r($,"value",null,ee.value,R),(F=ee.onVnodeBeforeMount)&&ot(F,N,b)}ae&&Wt(b,null,N,"beforeMount");const oe=sc(D,X);oe&&X.beforeEnter($),a($,v,E),((F=ee&&ee.onVnodeMounted)||oe||ae)&&Ke(()=>{F&&ot(F,N,b),oe&&X.enter($),ae&&Wt(b,null,N,"mounted")},D)},w=(b,v,E,N,D)=>{if(E&&p(b,E),N)for(let R=0;R<N.length;R++)p(b,N[R]);if(D){let R=D.subTree;if(v===R||si(R.type)&&(R.ssContent===v||R.ssFallback===v)){const q=D.vnode;w(b,q,q.scopeId,q.slotScopeIds,D.parent)}}},I=(b,v,E,N,D,R,q,H,$=0)=>{for(let F=$;F<b.length;F++){const ee=b[F]=H?Nt(b[F]):ut(b[F]);c(null,ee,v,E,N,D,R,q,H)}},O=(b,v,E,N,D,R,q)=>{const H=v.el=b.el;let{patchFlag:$,dynamicChildren:F,dirs:ee}=v;$|=b.patchFlag&16;const W=b.props||he,X=v.props||he;let ae;if(E&&Jt(E,!1),(ae=X.onVnodeBeforeUpdate)&&ot(ae,E,v,b),ee&&Wt(v,b,E,"beforeUpdate"),E&&Jt(E,!0),(W.innerHTML&&X.innerHTML==null||W.textContent&&X.textContent==null)&&d(H,""),F?B(b.dynamicChildren,F,H,E,N,Ba(v,D),R):q||Q(b,v,H,null,E,N,Ba(v,D),R,!1),$>0){if($&16)K(H,W,X,E,D);else if($&2&&W.class!==X.class&&r(H,"class",null,X.class,D),$&4&&r(H,"style",W.style,X.style,D),$&8){const oe=v.dynamicProps;for(let pe=0;pe<oe.length;pe++){const de=oe[pe],Be=W[de],Fe=X[de];(Fe!==Be||de==="value")&&r(H,de,Be,Fe,D,E)}}$&1&&b.children!==v.children&&d(H,v.children)}else!q&&F==null&&K(H,W,X,E,D);((ae=X.onVnodeUpdated)||ee)&&Ke(()=>{ae&&ot(ae,E,v,b),ee&&Wt(v,b,E,"updated")},N)},B=(b,v,E,N,D,R,q)=>{for(let H=0;H<v.length;H++){const $=b[H],F=v[H],ee=$.el&&($.type===dt||!Xt($,F)||$.shapeFlag&198)?f($.el):E;c($,F,ee,null,N,D,R,q,!0)}},K=(b,v,E,N,D)=>{if(v!==E){if(v!==he)for(const R in v)!An(R)&&!(R in E)&&r(b,R,v[R],null,D,N);for(const R in E){if(An(R))continue;const q=E[R],H=v[R];q!==H&&R!=="value"&&r(b,R,H,q,D,N)}"value"in E&&r(b,"value",v.value,E.value,D)}},P=(b,v,E,N,D,R,q,H,$)=>{const F=v.el=b?b.el:i(""),ee=v.anchor=b?b.anchor:i("");let{patchFlag:W,dynamicChildren:X,slotScopeIds:ae}=v;ae&&(H=H?H.concat(ae):ae),b==null?(a(F,E,N),a(ee,E,N),I(v.children||[],E,ee,D,R,q,H,$)):W>0&&W&64&&X&&b.dynamicChildren?(B(b.dynamicChildren,X,E,D,R,q,H),(v.key!=null||D&&v===D.subTree)&&Zo(b,v,!0)):Q(b,v,E,ee,D,R,q,H,$)},V=(b,v,E,N,D,R,q,H,$)=>{v.slotScopeIds=H,b==null?v.shapeFlag&512?D.ctx.activate(v,E,N,q,$):U(v,E,N,D,R,q,$):ne(b,v,$)},U=(b,v,E,N,D,R,q)=>{const H=b.component=Sc(b,N,D);if(ya(b)&&(H.ctx.renderer=z),Ac(H,!1,q),H.asyncDep){if(D&&D.registerDep(H,Z,q),!b.el){const $=H.subTree=Ue(Ye);_(null,$,v,E),b.placeholder=$.el}}else Z(H,b,v,E,D,R,q)},ne=(b,v,E)=>{const N=v.component=b.component;if(hc(b,v,E))if(N.asyncDep&&!N.asyncResolved){Y(N,v,E);return}else N.next=v,N.update();else v.el=b.el,N.vnode=v},Z=(b,v,E,N,D,R,q)=>{const H=()=>{if(b.isMounted){let{next:W,bu:X,u:ae,parent:oe,vnode:pe}=b;{const st=ei(b);if(st){W&&(W.el=pe.el,Y(b,W,q)),st.asyncDep.then(()=>{b.isUnmounted||H()});return}}let de=W,Be;Jt(b,!1),W?(W.el=pe.el,Y(b,W,q)):W=pe,X&&Ca(X),(Be=W.props&&W.props.onVnodeBeforeUpdate)&&ot(Be,oe,W,pe),Jt(b,!0);const Fe=nr(b),at=b.subTree;b.subTree=Fe,c(at,Fe,f(at.el),C(at),b,D,R),W.el=Fe.el,de===null&&gc(b,Fe.el),ae&&Ke(ae,D),(Be=W.props&&W.props.onVnodeUpdated)&&Ke(()=>ot(Be,oe,W,pe),D)}else{let W;const{el:X,props:ae}=v,{bm:oe,m:pe,parent:de,root:Be,type:Fe}=b,at=wn(v);Jt(b,!1),oe&&Ca(oe),!at&&(W=ae&&ae.onVnodeBeforeMount)&&ot(W,de,v),Jt(b,!0);{Be.ce&&Be.ce._def.shadowRoot!==!1&&Be.ce._injectChildStyle(Fe);const st=b.subTree=nr(b);c(null,st,E,N,b,D,R),v.el=st.el}if(pe&&Ke(pe,D),!at&&(W=ae&&ae.onVnodeMounted)){const st=v;Ke(()=>ot(W,de,st),D)}(v.shapeFlag&256||de&&wn(de.vnode)&&de.vnode.shapeFlag&256)&&b.a&&Ke(b.a,D),b.isMounted=!0,v=E=N=null}};b.scope.on();const $=b.effect=new lo(H);b.scope.off();const F=b.update=$.run.bind($),ee=b.job=$.runIfDirty.bind($);ee.i=b,ee.id=b.uid,$.scheduler=()=>xs(ee),Jt(b,!0),F()},Y=(b,v,E)=>{v.component=b;const N=b.vnode.props;b.vnode=v,b.next=null,Ql(b,v.props,N,E),tc(b,v.children,E),At(),Gs(b),Ot()},Q=(b,v,E,N,D,R,q,H,$=!1)=>{const F=b&&b.children,ee=b?b.shapeFlag:0,W=v.children,{patchFlag:X,shapeFlag:ae}=v;if(X>0){if(X&128){_e(F,W,E,N,D,R,q,H,$);return}else if(X&256){ue(F,W,E,N,D,R,q,H,$);return}}ae&8?(ee&16&&ye(F,D,R),W!==F&&d(E,W)):ee&16?ae&16?_e(F,W,E,N,D,R,q,H,$):ye(F,D,R,!0):(ee&8&&d(E,""),ae&16&&I(W,E,N,D,R,q,H,$))},ue=(b,v,E,N,D,R,q,H,$)=>{b=b||un,v=v||un;const F=b.length,ee=v.length,W=Math.min(F,ee);let X;for(X=0;X<W;X++){const ae=v[X]=$?Nt(v[X]):ut(v[X]);c(b[X],ae,E,null,D,R,q,H,$)}F>ee?ye(b,D,R,!0,!1,W):I(v,E,N,D,R,q,H,$,W)},_e=(b,v,E,N,D,R,q,H,$)=>{let F=0;const ee=v.length;let W=b.length-1,X=ee-1;for(;F<=W&&F<=X;){const ae=b[F],oe=v[F]=$?Nt(v[F]):ut(v[F]);if(Xt(ae,oe))c(ae,oe,E,null,D,R,q,H,$);else break;F++}for(;F<=W&&F<=X;){const ae=b[W],oe=v[X]=$?Nt(v[X]):ut(v[X]);if(Xt(ae,oe))c(ae,oe,E,null,D,R,q,H,$);else break;W--,X--}if(F>W){if(F<=X){const ae=X+1,oe=ae<ee?v[ae].el:N;for(;F<=X;)c(null,v[F]=$?Nt(v[F]):ut(v[F]),E,oe,D,R,q,H,$),F++}}else if(F>X)for(;F<=W;)ge(b[F],D,R,!0),F++;else{const ae=F,oe=F,pe=new Map;for(F=oe;F<=X;F++){const He=v[F]=$?Nt(v[F]):ut(v[F]);He.key!=null&&pe.set(He.key,F)}let de,Be=0;const Fe=X-oe+1;let at=!1,st=0;const bn=new Array(Fe);for(F=0;F<Fe;F++)bn[F]=0;for(F=ae;F<=W;F++){const He=b[F];if(Be>=Fe){ge(He,D,R,!0);continue}let rt;if(He.key!=null)rt=pe.get(He.key);else for(de=oe;de<=X;de++)if(bn[de-oe]===0&&Xt(He,v[de])){rt=de;break}rt===void 0?ge(He,D,R,!0):(bn[rt-oe]=F+1,rt>=st?st=rt:at=!0,c(He,v[rt],E,null,D,R,q,H,$),Be++)}const Us=at?rc(bn):un;for(de=Us.length-1,F=Fe-1;F>=0;F--){const He=oe+F,rt=v[He],Hs=v[He+1],Ks=He+1<ee?Hs.el||Hs.placeholder:N;bn[F]===0?c(null,rt,E,Ks,D,R,q,H,$):at&&(de<0||F!==Us[de]?Ee(rt,E,Ks,2):de--)}}},Ee=(b,v,E,N,D=null)=>{const{el:R,type:q,transition:H,children:$,shapeFlag:F}=b;if(F&6){Ee(b.component.subTree,v,E,N);return}if(F&128){b.suspense.move(v,E,N);return}if(F&64){q.move(b,v,E,z);return}if(q===dt){a(R,v,E);for(let W=0;W<$.length;W++)Ee($[W],v,E,N);a(b.anchor,v,E);return}if(q===Zn){T(b,v,E);return}if(N!==2&&F&1&&H)if(N===0)H.beforeEnter(R),a(R,v,E),Ke(()=>H.enter(R),D);else{const{leave:W,delayLeave:X,afterLeave:ae}=H,oe=()=>{b.ctx.isUnmounted?s(R):a(R,v,E)},pe=()=>{R._isLeaving&&R[vt](!0),W(R,()=>{oe(),ae&&ae()})};X?X(R,oe,pe):pe()}else a(R,v,E)},ge=(b,v,E,N=!1,D=!1)=>{const{type:R,props:q,ref:H,children:$,dynamicChildren:F,shapeFlag:ee,patchFlag:W,dirs:X,cacheIndex:ae}=b;if(W===-2&&(D=!1),H!=null&&(At(),kn(H,null,E,b,!0),Ot()),ae!=null&&(v.renderCache[ae]=void 0),ee&256){v.ctx.deactivate(b);return}const oe=ee&1&&X,pe=!wn(b);let de;if(pe&&(de=q&&q.onVnodeBeforeUnmount)&&ot(de,v,b),ee&6)Me(b.component,E,N);else{if(ee&128){b.suspense.unmount(E,N);return}oe&&Wt(b,null,v,"beforeUnmount"),ee&64?b.type.remove(b,v,E,z,N):F&&!F.hasOnce&&(R!==dt||W>0&&W&64)?ye(F,v,E,!1,!0):(R===dt&&W&384||!D&&ee&16)&&ye($,v,E),N&&Ge(b)}(pe&&(de=q&&q.onVnodeUnmounted)||oe)&&Ke(()=>{de&&ot(de,v,b),oe&&Wt(b,null,v,"unmounted")},E)},Ge=b=>{const{type:v,el:E,anchor:N,transition:D}=b;if(v===dt){ke(E,N);return}if(v===Zn){S(b);return}const R=()=>{s(E),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(b.shapeFlag&1&&D&&!D.persisted){const{leave:q,delayLeave:H}=D,$=()=>q(E,R);H?H(b.el,R,$):$()}else R()},ke=(b,v)=>{let E;for(;b!==v;)E=g(b),s(b),b=E;s(v)},Me=(b,v,E)=>{const{bum:N,scope:D,job:R,subTree:q,um:H,m:$,a:F}=b;tr($),tr(F),N&&Ca(N),D.stop(),R&&(R.flags|=8,ge(q,b,v,E)),H&&Ke(H,v),Ke(()=>{b.isUnmounted=!0},v)},ye=(b,v,E,N=!1,D=!1,R=0)=>{for(let q=R;q<b.length;q++)ge(b[q],v,E,N,D)},C=b=>{if(b.shapeFlag&6)return C(b.component.subTree);if(b.shapeFlag&128)return b.suspense.next();const v=g(b.anchor||b.el),E=v&&v[Al];return E?g(E):v};let G=!1;const j=(b,v,E)=>{b==null?v._vnode&&ge(v._vnode,null,null,!0):c(v._vnode||null,b,v,null,null,null,E),v._vnode=b,G||(G=!0,Gs(),wo(),G=!1)},z={p:c,um:ge,m:Ee,r:Ge,mt:U,mc:I,pc:Q,pbc:B,n:C,o:e};return{render:j,hydrate:void 0,createApp:Jl(j)}}function Ba({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Jt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function sc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Zo(e,t,n=!1){const a=e.children,s=t.children;if(te(a)&&te(s))for(let r=0;r<a.length;r++){const o=a[r];let i=s[r];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=s[r]=Nt(s[r]),i.el=o.el),!n&&i.patchFlag!==-2&&Zo(o,i)),i.type===Sa&&i.patchFlag!==-1&&(i.el=o.el),i.type===Ye&&!i.el&&(i.el=o.el)}}function rc(e){const t=e.slice(),n=[0];let a,s,r,o,i;const l=e.length;for(a=0;a<l;a++){const u=e[a];if(u!==0){if(s=n[n.length-1],e[s]<u){t[a]=s,n.push(a);continue}for(r=0,o=n.length-1;r<o;)i=r+o>>1,e[n[i]]<u?r=i+1:o=i;u<e[n[r]]&&(r>0&&(t[a]=n[r-1]),n[r]=a)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=t[o];return n}function ei(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:ei(t)}function tr(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const oc=Symbol.for("v-scx"),ic=()=>Ve(oc);function Cn(e,t,n){return ti(e,t,n)}function ti(e,t,n=he){const{immediate:a,deep:s,flush:r,once:o}=n,i=Pe({},n),l=t&&a||!t&&r!=="post";let u;if($n){if(r==="sync"){const p=ic();u=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=pt,p.resume=pt,p.pause=pt,p}}const d=Re;i.call=(p,h,c)=>tt(p,d,h,c);let f=!1;r==="post"?i.scheduler=p=>{Ke(p,d&&d.suspense)}:r!=="sync"&&(f=!0,i.scheduler=(p,h)=>{h?p():xs(p)}),i.augmentJob=p=>{t&&(p.flags|=4),f&&(p.flags|=2,d&&(p.id=d.uid,p.i=d))};const g=vl(e,t,i);return $n&&(u?u.push(g):l&&g()),g}function lc(e,t,n){const a=this.proxy,s=Ae(e)?e.includes(".")?ni(a,e):()=>a[e]:e.bind(a,a);let r;se(t)?r=t:(r=t.handler,n=t);const o=jn(this),i=ti(s,r.bind(a),n);return o(),i}function ni(e,t){const n=t.split(".");return()=>{let a=e;for(let s=0;s<n.length&&a;s++)a=a[n[s]];return a}}const cc=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${ze(t)}Modifiers`]||e[`${Yt(t)}Modifiers`];function dc(e,t,...n){if(e.isUnmounted)return;const a=e.vnode.props||he;let s=n;const r=t.startsWith("update:"),o=r&&cc(a,t.slice(7));o&&(o.trim&&(s=n.map(d=>Ae(d)?d.trim():d)),o.number&&(s=n.map(Bi)));let i,l=a[i=xa(t)]||a[i=xa(ze(t))];!l&&r&&(l=a[i=xa(Yt(t))]),l&&tt(l,e,6,s);const u=a[i+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,tt(u,e,6,s)}}const uc=new WeakMap;function ai(e,t,n=!1){const a=n?uc:t.emitsCache,s=a.get(e);if(s!==void 0)return s;const r=e.emits;let o={},i=!1;if(!se(e)){const l=u=>{const d=ai(u,t,!0);d&&(i=!0,Pe(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!r&&!i?(me(e)&&a.set(e,null),null):(te(r)?r.forEach(l=>o[l]=null):Pe(o,r),me(e)&&a.set(e,o),o)}function Ea(e,t){return!e||!fa(t)?!1:(t=t.slice(2).replace(/Once$/,""),ce(e,t[0].toLowerCase()+t.slice(1))||ce(e,Yt(t))||ce(e,t))}function nr(e){const{type:t,vnode:n,proxy:a,withProxy:s,propsOptions:[r],slots:o,attrs:i,emit:l,render:u,renderCache:d,props:f,data:g,setupState:p,ctx:h,inheritAttrs:c}=e,m=ra(e);let _,y;try{if(n.shapeFlag&4){const S=s||a,x=S;_=ut(u.call(x,S,d,f,p,g,h)),y=i}else{const S=t;_=ut(S.length>1?S(f,{attrs:i,slots:o,emit:l}):S(f,null)),y=t.props?i:pc(i)}}catch(S){Rn.length=0,ba(S,e,1),_=Ue(Ye)}let T=_;if(y&&c!==!1){const S=Object.keys(y),{shapeFlag:x}=T;S.length&&x&7&&(r&&S.some(gs)&&(y=fc(y,r)),T=Ut(T,y,!1,!0))}return n.dirs&&(T=Ut(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(n.dirs):n.dirs),n.transition&&Bn(T,n.transition),_=T,ra(m),_}const pc=e=>{let t;for(const n in e)(n==="class"||n==="style"||fa(n))&&((t||(t={}))[n]=e[n]);return t},fc=(e,t)=>{const n={};for(const a in e)(!gs(a)||!(a.slice(9)in t))&&(n[a]=e[a]);return n};function hc(e,t,n){const{props:a,children:s,component:r}=e,{props:o,children:i,patchFlag:l}=t,u=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return a?ar(a,o,u):!!o;if(l&8){const d=t.dynamicProps;for(let f=0;f<d.length;f++){const g=d[f];if(o[g]!==a[g]&&!Ea(u,g))return!0}}}else return(s||i)&&(!i||!i.$stable)?!0:a===o?!1:a?o?ar(a,o,u):!0:!!o;return!1}function ar(e,t,n){const a=Object.keys(t);if(a.length!==Object.keys(e).length)return!0;for(let s=0;s<a.length;s++){const r=a[s];if(t[r]!==e[r]&&!Ea(n,r))return!0}return!1}function gc({vnode:e,parent:t},n){for(;t;){const a=t.subTree;if(a.suspense&&a.suspense.activeBranch===e&&(a.el=e.el),a===e)(e=t.vnode).el=n,t=t.parent;else break}}const si=e=>e.__isSuspense;function mc(e,t){t&&t.pendingBranch?te(e)?t.effects.push(...e):t.effects.push(e):Sl(e)}const dt=Symbol.for("v-fgt"),Sa=Symbol.for("v-txt"),Ye=Symbol.for("v-cmt"),Zn=Symbol.for("v-stc"),Rn=[];let qe=null;function Qe(e=!1){Rn.push(qe=e?null:[])}function _c(){Rn.pop(),qe=Rn[Rn.length-1]||null}let Fn=1;function la(e,t=!1){Fn+=e,e<0&&qe&&t&&(qe.hasOnce=!0)}function ri(e){return e.dynamicChildren=Fn>0?qe||un:null,_c(),Fn>0&&qe&&qe.push(e),e}function ft(e,t,n,a,s,r){return ri(k(e,t,n,a,s,r,!0))}function sr(e,t,n,a,s){return ri(Ue(e,t,n,a,s,!0))}function ca(e){return e?e.__v_isVNode===!0:!1}function Xt(e,t){return e.type===t.type&&e.key===t.key}const oi=({key:e})=>e??null,ea=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Ae(e)||Se(e)||se(e)?{i:Xe,r:e,k:t,f:!!n}:e:null);function k(e,t=null,n=null,a=0,s=null,r=e===dt?0:1,o=!1,i=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&oi(t),ref:t&&ea(t),scopeId:Co,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:a,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Xe};return i?(Ns(l,n),r&128&&e.normalize(l)):n&&(l.shapeFlag|=Ae(n)?8:16),Fn>0&&!o&&qe&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&qe.push(l),l}const Ue=bc;function bc(e,t=null,n=null,a=0,s=null,r=!1){if((!e||e===Ho)&&(e=Ye),ca(e)){const i=Ut(e,t,!0);return n&&Ns(i,n),Fn>0&&!r&&qe&&(i.shapeFlag&6?qe[qe.indexOf(e)]=i:qe.push(i)),i.patchFlag=-2,i}if(xc(e)&&(e=e.__vccOpts),t){t=yc(t);let{class:i,style:l}=t;i&&!Ae(i)&&(t.class=$t(i)),me(l)&&(Ps(l)&&!te(l)&&(l=Pe({},l)),t.style=bs(l))}const o=Ae(e)?1:si(e)?128:Ro(e)?64:me(e)?4:se(e)?2:0;return k(e,t,n,a,s,o,r,!0)}function yc(e){return e?Ps(e)||Wo(e)?Pe({},e):e:null}function Ut(e,t,n=!1,a=!1){const{props:s,ref:r,patchFlag:o,children:i,transition:l}=e,u=t?vc(s||{},t):s,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&oi(u),ref:t&&t.ref?n&&r?te(r)?r.concat(ea(t)):[r,ea(t)]:ea(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==dt?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ut(e.ssContent),ssFallback:e.ssFallback&&Ut(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&a&&Bn(d,l.clone(d)),d}function Aa(e=" ",t=0){return Ue(Sa,null,e,t)}function qt(e,t){const n=Ue(Zn,null,e);return n.staticCount=t,n}function ut(e){return e==null||typeof e=="boolean"?Ue(Ye):te(e)?Ue(dt,null,e.slice()):ca(e)?Nt(e):Ue(Sa,null,String(e))}function Nt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ut(e)}function Ns(e,t){let n=0;const{shapeFlag:a}=e;if(t==null)t=null;else if(te(t))n=16;else if(typeof t=="object")if(a&65){const s=t.default;s&&(s._c&&(s._d=!1),Ns(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!Wo(t)?t._ctx=Xe:s===3&&Xe&&(Xe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else se(t)?(t={default:t,_ctx:Xe},n=32):(t=String(t),a&64?(n=16,t=[Aa(t)]):n=8);e.children=t,e.shapeFlag|=n}function vc(...e){const t={};for(let n=0;n<e.length;n++){const a=e[n];for(const s in a)if(s==="class")t.class!==a.class&&(t.class=$t([t.class,a.class]));else if(s==="style")t.style=bs([t.style,a.style]);else if(fa(s)){const r=t[s],o=a[s];o&&r!==o&&!(te(r)&&r.includes(o))&&(t[s]=r?[].concat(r,o):o)}else s!==""&&(t[s]=a[s])}return t}function ot(e,t,n,a=null){tt(e,t,7,[n,a])}const Tc=jo();let Ec=0;function Sc(e,t,n){const a=e.type,s=(t?t.appContext:e.appContext)||Tc,r={uid:Ec++,vnode:e,type:a,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ro(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Vo(a,s),emitsOptions:ai(a,s),emit:null,emitted:null,propsDefaults:he,inheritAttrs:a.inheritAttrs,ctx:he,data:he,props:he,attrs:he,slots:he,refs:he,setupState:he,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=dc.bind(null,r),e.ce&&e.ce(r),r}let Re=null;const Ls=()=>Re||Xe;let da,rs;{const e=_a(),t=(n,a)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(a),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};da=t("__VUE_INSTANCE_SETTERS__",n=>Re=n),rs=t("__VUE_SSR_SETTERS__",n=>$n=n)}const jn=e=>{const t=Re;return da(e),e.scope.on(),()=>{e.scope.off(),da(t)}},rr=()=>{Re&&Re.scope.off(),da(null)};function ii(e){return e.vnode.shapeFlag&4}let $n=!1;function Ac(e,t=!1,n=!1){t&&rs(t);const{props:a,children:s}=e.vnode,r=ii(e);zl(e,a,r,t),ec(e,s,n||t);const o=r?Oc(e,t):void 0;return t&&rs(!1),o}function Oc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Hl);const{setup:a}=n;if(a){At();const s=e.setupContext=a.length>1?kc(e):null,r=jn(e),o=Yn(a,e,0,[e.props,s]),i=Qr(o);if(Ot(),r(),(i||e.sp)&&!wn(e)&&Fo(e),i){if(o.then(rr,rr),t)return o.then(l=>{or(e,l)}).catch(l=>{ba(l,e,0)});e.asyncDep=o}else or(e,o)}else li(e)}function or(e,t,n){se(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:me(t)&&(e.setupState=Oo(t)),li(e)}function li(e,t,n){const a=e.type;e.render||(e.render=a.render||pt);{const s=jn(e);At();try{Kl(e)}finally{Ot(),s()}}}const Pc={get(e,t){return Ce(e,"get",""),e[t]}};function kc(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Pc),slots:e.slots,emit:e.emit,expose:t}}function Is(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Oo(ks(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in xn)return xn[n](e)},has(t,n){return n in t||n in xn}})):e.proxy}function wc(e,t=!0){return se(e)?e.displayName||e.name:e.name||t&&e.__name}function xc(e){return se(e)&&"__vccOpts"in e}const je=(e,t)=>bl(e,t,$n);function Ds(e,t,n){try{la(-1);const a=arguments.length;return a===2?me(t)&&!te(t)?ca(t)?Ue(e,null,[t]):Ue(e,t):Ue(e,null,t):(a>3?n=Array.prototype.slice.call(arguments,2):a===3&&ca(n)&&(n=[n]),Ue(e,t,n))}finally{la(1)}}const Cc="3.5.24";let os;const ir=typeof window<"u"&&window.trustedTypes;if(ir)try{os=ir.createPolicy("vue",{createHTML:e=>e})}catch{}const ci=os?e=>os.createHTML(e):e=>e,Rc="http://www.w3.org/2000/svg",Nc="http://www.w3.org/1998/Math/MathML",yt=typeof document<"u"?document:null,lr=yt&&yt.createElement("template"),Lc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,a)=>{const s=t==="svg"?yt.createElementNS(Rc,e):t==="mathml"?yt.createElementNS(Nc,e):n?yt.createElement(e,{is:n}):yt.createElement(e);return e==="select"&&a&&a.multiple!=null&&s.setAttribute("multiple",a.multiple),s},createText:e=>yt.createTextNode(e),createComment:e=>yt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>yt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,a,s,r){const o=n?n.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{lr.innerHTML=ci(a==="svg"?`<svg>${e}</svg>`:a==="mathml"?`<math>${e}</math>`:e);const i=lr.content;if(a==="svg"||a==="mathml"){const l=i.firstChild;for(;l.firstChild;)i.appendChild(l.firstChild);i.removeChild(l)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},wt="transition",vn="animation",Un=Symbol("_vtc"),di={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Ic=Pe({},No,di),Dc=e=>(e.displayName="Transition",e.props=Ic,e),Mc=Dc((e,{slots:t})=>Ds(kl,Bc(e),t)),Vt=(e,t=[])=>{te(e)?e.forEach(n=>n(...t)):e&&e(...t)},cr=e=>e?te(e)?e.some(t=>t.length>1):e.length>1:!1;function Bc(e){const t={};for(const P in e)P in di||(t[P]=e[P]);if(e.css===!1)return t;const{name:n="v",type:a,duration:s,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:i=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:u=o,appearToClass:d=i,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,h=Fc(s),c=h&&h[0],m=h&&h[1],{onBeforeEnter:_,onEnter:y,onEnterCancelled:T,onLeave:S,onLeaveCancelled:x,onBeforeAppear:L=_,onAppear:w=y,onAppearCancelled:I=T}=t,O=(P,V,U,ne)=>{P._enterCancelled=ne,zt(P,V?d:i),zt(P,V?u:o),U&&U()},B=(P,V)=>{P._isLeaving=!1,zt(P,f),zt(P,p),zt(P,g),V&&V()},K=P=>(V,U)=>{const ne=P?w:y,Z=()=>O(V,P,U);Vt(ne,[V,Z]),dr(()=>{zt(V,P?l:r),mt(V,P?d:i),cr(ne)||ur(V,a,c,Z)})};return Pe(t,{onBeforeEnter(P){Vt(_,[P]),mt(P,r),mt(P,o)},onBeforeAppear(P){Vt(L,[P]),mt(P,l),mt(P,u)},onEnter:K(!1),onAppear:K(!0),onLeave(P,V){P._isLeaving=!0;const U=()=>B(P,V);mt(P,f),P._enterCancelled?(mt(P,g),hr(P)):(hr(P),mt(P,g)),dr(()=>{P._isLeaving&&(zt(P,f),mt(P,p),cr(S)||ur(P,a,m,U))}),Vt(S,[P,U])},onEnterCancelled(P){O(P,!1,void 0,!0),Vt(T,[P])},onAppearCancelled(P){O(P,!0,void 0,!0),Vt(I,[P])},onLeaveCancelled(P){B(P),Vt(x,[P])}})}function Fc(e){if(e==null)return null;if(me(e))return[Fa(e.enter),Fa(e.leave)];{const t=Fa(e);return[t,t]}}function Fa(e){return Fi(e)}function mt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Un]||(e[Un]=new Set)).add(t)}function zt(e,t){t.split(/\s+/).forEach(a=>a&&e.classList.remove(a));const n=e[Un];n&&(n.delete(t),n.size||(e[Un]=void 0))}function dr(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let $c=0;function ur(e,t,n,a){const s=e._endId=++$c,r=()=>{s===e._endId&&a()};if(n!=null)return setTimeout(r,n);const{type:o,timeout:i,propCount:l}=Uc(e,t);if(!o)return a();const u=o+"end";let d=0;const f=()=>{e.removeEventListener(u,g),r()},g=p=>{p.target===e&&++d>=l&&f()};setTimeout(()=>{d<l&&f()},i+1),e.addEventListener(u,g)}function Uc(e,t){const n=window.getComputedStyle(e),a=h=>(n[h]||"").split(", "),s=a(`${wt}Delay`),r=a(`${wt}Duration`),o=pr(s,r),i=a(`${vn}Delay`),l=a(`${vn}Duration`),u=pr(i,l);let d=null,f=0,g=0;t===wt?o>0&&(d=wt,f=o,g=r.length):t===vn?u>0&&(d=vn,f=u,g=l.length):(f=Math.max(o,u),d=f>0?o>u?wt:vn:null,g=d?d===wt?r.length:l.length:0);const p=d===wt&&/\b(?:transform|all)(?:,|$)/.test(a(`${wt}Property`).toString());return{type:d,timeout:f,propCount:g,hasTransform:p}}function pr(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,a)=>fr(n)+fr(e[a])))}function fr(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function hr(e){return(e?e.ownerDocument:document).body.offsetHeight}function Hc(e,t,n){const a=e[Un];a&&(t=(t?[t,...a]:[...a]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const gr=Symbol("_vod"),Kc=Symbol("_vsh"),Yc=Symbol(""),jc=/(?:^|;)\s*display\s*:/;function qc(e,t,n){const a=e.style,s=Ae(n);let r=!1;if(n&&!s){if(t)if(Ae(t))for(const o of t.split(";")){const i=o.slice(0,o.indexOf(":")).trim();n[i]==null&&ta(a,i,"")}else for(const o in t)n[o]==null&&ta(a,o,"");for(const o in n)o==="display"&&(r=!0),ta(a,o,n[o])}else if(s){if(t!==n){const o=a[Yc];o&&(n+=";"+o),a.cssText=n,r=jc.test(n)}}else t&&e.removeAttribute("style");gr in e&&(e[gr]=r?a.display:"",e[Kc]&&(a.display="none"))}const mr=/\s*!important$/;function ta(e,t,n){if(te(n))n.forEach(a=>ta(e,t,a));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const a=Gc(e,t);mr.test(n)?e.setProperty(Yt(a),n.replace(mr,""),"important"):e[a]=n}}const _r=["Webkit","Moz","ms"],$a={};function Gc(e,t){const n=$a[t];if(n)return n;let a=ze(t);if(a!=="filter"&&a in e)return $a[t]=a;a=ma(a);for(let s=0;s<_r.length;s++){const r=_r[s]+a;if(r in e)return $a[t]=r}return t}const br="http://www.w3.org/1999/xlink";function yr(e,t,n,a,s,r=ji(t)){a&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(br,t.slice(6,t.length)):e.setAttributeNS(br,t,n):n==null||r&&!to(n)?e.removeAttribute(t):e.setAttribute(t,r?"":Kt(n)?String(n):n)}function vr(e,t,n,a,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?ci(n):n);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const i=r==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(i!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const i=typeof e[t];i==="boolean"?n=to(n):n==null&&i==="string"?(n="",o=!0):i==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(s||t)}function Wc(e,t,n,a){e.addEventListener(t,n,a)}function Jc(e,t,n,a){e.removeEventListener(t,n,a)}const Tr=Symbol("_vei");function Vc(e,t,n,a,s=null){const r=e[Tr]||(e[Tr]={}),o=r[t];if(a&&o)o.value=a;else{const[i,l]=zc(t);if(a){const u=r[t]=Zc(a,s);Wc(e,i,u,l)}else o&&(Jc(e,i,o,l),r[t]=void 0)}}const Er=/(?:Once|Passive|Capture)$/;function zc(e){let t;if(Er.test(e)){t={};let a;for(;a=e.match(Er);)e=e.slice(0,e.length-a[0].length),t[a[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Yt(e.slice(2)),t]}let Ua=0;const Qc=Promise.resolve(),Xc=()=>Ua||(Qc.then(()=>Ua=0),Ua=Date.now());function Zc(e,t){const n=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=n.attached)return;tt(ed(a,n.value),t,5,[a])};return n.value=e,n.attached=Xc(),n}function ed(e,t){if(te(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(a=>s=>!s._stopped&&a&&a(s))}else return t}const Sr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,td=(e,t,n,a,s,r)=>{const o=s==="svg";t==="class"?Hc(e,a,o):t==="style"?qc(e,n,a):fa(t)?gs(t)||Vc(e,t,n,a,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):nd(e,t,a,o))?(vr(e,t,a),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&yr(e,t,a,o,r,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Ae(a))?vr(e,ze(t),a,r,t):(t==="true-value"?e._trueValue=a:t==="false-value"&&(e._falseValue=a),yr(e,t,a,o))};function nd(e,t,n,a){if(a)return!!(t==="innerHTML"||t==="textContent"||t in e&&Sr(t)&&se(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Sr(t)&&Ae(n)?!1:t in e}const ad=["ctrl","shift","alt","meta"],sd={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>ad.some(n=>e[`${n}Key`]&&!t.includes(n))},Oa=(e,t)=>{const n=e._withMods||(e._withMods={}),a=t.join(".");return n[a]||(n[a]=((s,...r)=>{for(let o=0;o<t.length;o++){const i=sd[t[o]];if(i&&i(s,t))return}return e(s,...r)}))},rd={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Tt=(e,t)=>{const n=e._withKeys||(e._withKeys={}),a=t.join(".");return n[a]||(n[a]=(s=>{if(!("key"in s))return;const r=Yt(s.key);if(t.some(o=>o===r||rd[o]===r))return e(s)}))},od=Pe({patchProp:td},Lc);let Ar;function id(){return Ar||(Ar=nc(od))}const ld=((...e)=>{const t=id().createApp(...e),{mount:n}=t;return t.mount=a=>{const s=dd(a);if(!s)return;const r=t._component;!se(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,cd(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t});function cd(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function dd(e){return Ae(e)?document.querySelector(e):e}let ui;const Pa=e=>ui=e,pi=Symbol();function is(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Nn;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Nn||(Nn={}));function ud(){const e=oo(!0),t=e.run(()=>Je({}));let n=[],a=[];const s=ks({install(r){Pa(s),s._a=r,r.provide(pi,s),r.config.globalProperties.$pinia=s,a.forEach(o=>n.push(o)),a=[]},use(r){return this._a?n.push(r):a.push(r),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}const fi=()=>{};function Or(e,t,n,a=fi){e.add(t);const s=()=>{e.delete(t)&&a()};return!n&&io()&&qi(s),s}function on(e,...t){e.forEach(n=>{n(...t)})}const pd=e=>e(),Pr=Symbol(),Ha=Symbol();function ls(e,t){e instanceof Map&&t instanceof Map?t.forEach((n,a)=>e.set(a,n)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const a=t[n],s=e[n];is(s)&&is(a)&&e.hasOwnProperty(n)&&!Se(a)&&!nn(a)?e[n]=ls(s,a):e[n]=a}return e}const fd=Symbol();function hd(e){return!is(e)||!Object.prototype.hasOwnProperty.call(e,fd)}const{assign:Ct}=Object;function gd(e){return!!(Se(e)&&e.effect)}function md(e,t,n,a){const{state:s,actions:r,getters:o}=t,i=n.state.value[e];let l;function u(){i||(n.state.value[e]=s?s():{});const d=hl(n.state.value[e]);return Ct(d,r,Object.keys(o||{}).reduce((f,g)=>(f[g]=ks(je(()=>{Pa(n);const p=n._s.get(e);return o[g].call(p,p)})),f),{}))}return l=hi(e,u,t,n,a,!0),l}function hi(e,t,n={},a,s,r){let o;const i=Ct({actions:{}},n),l={deep:!0};let u,d,f=new Set,g=new Set,p;const h=a.state.value[e];!r&&!h&&(a.state.value[e]={}),Je({});let c;function m(I){let O;u=d=!1,typeof I=="function"?(I(a.state.value[e]),O={type:Nn.patchFunction,storeId:e,events:p}):(ls(a.state.value[e],I),O={type:Nn.patchObject,payload:I,storeId:e,events:p});const B=c=Symbol();ws().then(()=>{c===B&&(u=!0)}),d=!0,on(f,O,a.state.value[e])}const _=r?function(){const{state:O}=n,B=O?O():{};this.$patch(K=>{Ct(K,B)})}:fi;function y(){o.stop(),f.clear(),g.clear(),a._s.delete(e)}const T=(I,O="")=>{if(Pr in I)return I[Ha]=O,I;const B=function(){Pa(a);const K=Array.from(arguments),P=new Set,V=new Set;function U(Y){P.add(Y)}function ne(Y){V.add(Y)}on(g,{args:K,name:B[Ha],store:x,after:U,onError:ne});let Z;try{Z=I.apply(this&&this.$id===e?this:x,K)}catch(Y){throw on(V,Y),Y}return Z instanceof Promise?Z.then(Y=>(on(P,Y),Y)).catch(Y=>(on(V,Y),Promise.reject(Y))):(on(P,Z),Z)};return B[Pr]=!0,B[Ha]=O,B},S={_p:a,$id:e,$onAction:Or.bind(null,g),$patch:m,$reset:_,$subscribe(I,O={}){const B=Or(f,I,O.detached,()=>K()),K=o.run(()=>Cn(()=>a.state.value[e],P=>{(O.flush==="sync"?d:u)&&I({storeId:e,type:Nn.direct,events:p},P)},Ct({},l,O)));return B},$dispose:y},x=St(S);a._s.set(e,x);const w=(a._a&&a._a.runWithContext||pd)(()=>a._e.run(()=>(o=oo()).run(()=>t({action:T}))));for(const I in w){const O=w[I];if(Se(O)&&!gd(O)||nn(O))r||(h&&hd(O)&&(Se(O)?O.value=h[I]:ls(O,h[I])),a.state.value[e][I]=O);else if(typeof O=="function"){const B=T(O,I);w[I]=B,i.actions[I]=O}}return Ct(x,w),Ct(ie(x),w),Object.defineProperty(x,"$state",{get:()=>a.state.value[e],set:I=>{m(O=>{Ct(O,I)})}}),a._p.forEach(I=>{Ct(x,o.run(()=>I({store:x,app:a._a,pinia:a,options:i})))}),h&&r&&n.hydrate&&n.hydrate(x.$state,h),u=!0,d=!0,x}function _d(e,t,n){let a;const s=typeof t=="function";a=s?n:t;function r(o,i){const l=Vl();return o=o||(l?Ve(pi,null):null),o&&Pa(o),o=ui,o._s.has(e)||(s?hi(e,t,a,o):md(e,a,o)),o._s.get(e)}return r.$id=e,r}const dn=typeof document<"u";function gi(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function bd(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&gi(e.default)}const le=Object.assign;function Ka(e,t){const n={};for(const a in t){const s=t[a];n[a]=nt(s)?s.map(e):e(s)}return n}const Ln=()=>{},nt=Array.isArray;function kr(e,t){const n={};for(const a in e)n[a]=a in t?t[a]:e[a];return n}const mi=/#/g,yd=/&/g,vd=/\//g,Td=/=/g,Ed=/\?/g,_i=/\+/g,Sd=/%5B/g,Ad=/%5D/g,bi=/%5E/g,Od=/%60/g,yi=/%7B/g,Pd=/%7C/g,vi=/%7D/g,kd=/%20/g;function Ms(e){return e==null?"":encodeURI(""+e).replace(Pd,"|").replace(Sd,"[").replace(Ad,"]")}function wd(e){return Ms(e).replace(yi,"{").replace(vi,"}").replace(bi,"^")}function cs(e){return Ms(e).replace(_i,"%2B").replace(kd,"+").replace(mi,"%23").replace(yd,"%26").replace(Od,"`").replace(yi,"{").replace(vi,"}").replace(bi,"^")}function xd(e){return cs(e).replace(Td,"%3D")}function Cd(e){return Ms(e).replace(mi,"%23").replace(Ed,"%3F")}function Rd(e){return Cd(e).replace(vd,"%2F")}function Hn(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Nd=/\/$/,Ld=e=>e.replace(Nd,"");function Ya(e,t,n="/"){let a,s={},r="",o="";const i=t.indexOf("#");let l=t.indexOf("?");return l=i>=0&&l>i?-1:l,l>=0&&(a=t.slice(0,l),r=t.slice(l,i>0?i:t.length),s=e(r.slice(1))),i>=0&&(a=a||t.slice(0,i),o=t.slice(i,t.length)),a=Bd(a??t,n),{fullPath:a+r+o,path:a,query:s,hash:Hn(o)}}function Id(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function wr(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Dd(e,t,n){const a=t.matched.length-1,s=n.matched.length-1;return a>-1&&a===s&&gn(t.matched[a],n.matched[s])&&Ti(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function gn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ti(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Md(e[n],t[n]))return!1;return!0}function Md(e,t){return nt(e)?xr(e,t):nt(t)?xr(t,e):e===t}function xr(e,t){return nt(t)?e.length===t.length&&e.every((n,a)=>n===t[a]):e.length===1&&e[0]===t}function Bd(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),a=e.split("/"),s=a[a.length-1];(s===".."||s===".")&&a.push("");let r=n.length-1,o,i;for(o=0;o<a.length;o++)if(i=a[o],i!==".")if(i==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+a.slice(o).join("/")}const xt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let ds=(function(e){return e.pop="pop",e.push="push",e})({}),ja=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function Fd(e){if(!e)if(dn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Ld(e)}const $d=/^[^#]+#/;function Ud(e,t){return e.replace($d,"#")+t}function Hd(e,t){const n=document.documentElement.getBoundingClientRect(),a=e.getBoundingClientRect();return{behavior:t.behavior,left:a.left-n.left-(t.left||0),top:a.top-n.top-(t.top||0)}}const ka=()=>({left:window.scrollX,top:window.scrollY});function Kd(e){let t;if("el"in e){const n=e.el,a=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?a?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=Hd(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Cr(e,t){return(history.state?history.state.position-t:-1)+e}const us=new Map;function Yd(e,t){us.set(e,t)}function jd(e){const t=us.get(e);return us.delete(e),t}function qd(e){return typeof e=="string"||e&&typeof e=="object"}function Ei(e){return typeof e=="string"||typeof e=="symbol"}let Te=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const Si=Symbol("");Te.MATCHER_NOT_FOUND+"",Te.NAVIGATION_GUARD_REDIRECT+"",Te.NAVIGATION_ABORTED+"",Te.NAVIGATION_CANCELLED+"",Te.NAVIGATION_DUPLICATED+"";function mn(e,t){return le(new Error,{type:e,[Si]:!0},t)}function _t(e,t){return e instanceof Error&&Si in e&&(t==null||!!(e.type&t))}const Gd=["params","query","hash"];function Wd(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of Gd)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function Jd(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<n.length;++a){const s=n[a].replace(_i," "),r=s.indexOf("="),o=Hn(r<0?s:s.slice(0,r)),i=r<0?null:Hn(s.slice(r+1));if(o in t){let l=t[o];nt(l)||(l=t[o]=[l]),l.push(i)}else t[o]=i}return t}function Rr(e){let t="";for(let n in e){const a=e[n];if(n=xd(n),a==null){a!==void 0&&(t+=(t.length?"&":"")+n);continue}(nt(a)?a.map(s=>s&&cs(s)):[a&&cs(a)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function Vd(e){const t={};for(const n in e){const a=e[n];a!==void 0&&(t[n]=nt(a)?a.map(s=>s==null?null:""+s):a==null?a:""+a)}return t}const zd=Symbol(""),Nr=Symbol(""),wa=Symbol(""),Bs=Symbol(""),ps=Symbol("");function Tn(){let e=[];function t(a){return e.push(a),()=>{const s=e.indexOf(a);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Lt(e,t,n,a,s,r=o=>o()){const o=a&&(a.enterCallbacks[s]=a.enterCallbacks[s]||[]);return()=>new Promise((i,l)=>{const u=g=>{g===!1?l(mn(Te.NAVIGATION_ABORTED,{from:n,to:t})):g instanceof Error?l(g):qd(g)?l(mn(Te.NAVIGATION_GUARD_REDIRECT,{from:t,to:g})):(o&&a.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),i())},d=r(()=>e.call(a&&a.instances[s],t,n,u));let f=Promise.resolve(d);e.length<3&&(f=f.then(u)),f.catch(g=>l(g))})}function qa(e,t,n,a,s=r=>r()){const r=[];for(const o of e)for(const i in o.components){let l=o.components[i];if(!(t!=="beforeRouteEnter"&&!o.instances[i]))if(gi(l)){const u=(l.__vccOpts||l)[t];u&&r.push(Lt(u,n,a,o,i,s))}else{let u=l();r.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${i}" at "${o.path}"`);const f=bd(d)?d.default:d;o.mods[i]=d,o.components[i]=f;const g=(f.__vccOpts||f)[t];return g&&Lt(g,n,a,o,i,s)()}))}}return r}function Qd(e,t){const n=[],a=[],s=[],r=Math.max(t.matched.length,e.matched.length);for(let o=0;o<r;o++){const i=t.matched[o];i&&(e.matched.find(u=>gn(u,i))?a.push(i):n.push(i));const l=e.matched[o];l&&(t.matched.find(u=>gn(u,l))||s.push(l))}return[n,a,s]}let Xd=()=>location.protocol+"//"+location.host;function Ai(e,t){const{pathname:n,search:a,hash:s}=t,r=e.indexOf("#");if(r>-1){let o=s.includes(e.slice(r))?e.slice(r).length:1,i=s.slice(o);return i[0]!=="/"&&(i="/"+i),wr(i,"")}return wr(n,e)+a+s}function Zd(e,t,n,a){let s=[],r=[],o=null;const i=({state:g})=>{const p=Ai(e,location),h=n.value,c=t.value;let m=0;if(g){if(n.value=p,t.value=g,o&&o===h){o=null;return}m=c?g.position-c.position:0}else a(p);s.forEach(_=>{_(n.value,h,{delta:m,type:ds.pop,direction:m?m>0?ja.forward:ja.back:ja.unknown})})};function l(){o=n.value}function u(g){s.push(g);const p=()=>{const h=s.indexOf(g);h>-1&&s.splice(h,1)};return r.push(p),p}function d(){if(document.visibilityState==="hidden"){const{history:g}=window;if(!g.state)return;g.replaceState(le({},g.state,{scroll:ka()}),"")}}function f(){for(const g of r)g();r=[],window.removeEventListener("popstate",i),window.removeEventListener("pagehide",d),document.removeEventListener("visibilitychange",d)}return window.addEventListener("popstate",i),window.addEventListener("pagehide",d),document.addEventListener("visibilitychange",d),{pauseListeners:l,listen:u,destroy:f}}function Lr(e,t,n,a=!1,s=!1){return{back:e,current:t,forward:n,replaced:a,position:window.history.length,scroll:s?ka():null}}function eu(e){const{history:t,location:n}=window,a={value:Ai(e,n)},s={value:t.state};s.value||r(a.value,{back:null,current:a.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(l,u,d){const f=e.indexOf("#"),g=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+l:Xd()+e+l;try{t[d?"replaceState":"pushState"](u,"",g),s.value=u}catch(p){console.error(p),n[d?"replace":"assign"](g)}}function o(l,u){r(l,le({},t.state,Lr(s.value.back,l,s.value.forward,!0),u,{position:s.value.position}),!0),a.value=l}function i(l,u){const d=le({},s.value,t.state,{forward:l,scroll:ka()});r(d.current,d,!0),r(l,le({},Lr(a.value,l,null),{position:d.position+1},u),!1),a.value=l}return{location:a,state:s,push:i,replace:o}}function tu(e){e=Fd(e);const t=eu(e),n=Zd(e,t.state,t.location,t.replace);function a(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=le({location:"",base:e,go:a,createHref:Ud.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function nu(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),tu(e)}let en=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var Oe=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(Oe||{});const au={type:en.Static,value:""},su=/[a-zA-Z0-9_]/;function ru(e){if(!e)return[[]];if(e==="/")return[[au]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(p){throw new Error(`ERR (${n})/"${u}": ${p}`)}let n=Oe.Static,a=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let i=0,l,u="",d="";function f(){u&&(n===Oe.Static?r.push({type:en.Static,value:u}):n===Oe.Param||n===Oe.ParamRegExp||n===Oe.ParamRegExpEnd?(r.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:en.Param,value:u,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),u="")}function g(){u+=l}for(;i<e.length;){if(l=e[i++],l==="\\"&&n!==Oe.ParamRegExp){a=n,n=Oe.EscapeNext;continue}switch(n){case Oe.Static:l==="/"?(u&&f(),o()):l===":"?(f(),n=Oe.Param):g();break;case Oe.EscapeNext:g(),n=a;break;case Oe.Param:l==="("?n=Oe.ParamRegExp:su.test(l)?g():(f(),n=Oe.Static,l!=="*"&&l!=="?"&&l!=="+"&&i--);break;case Oe.ParamRegExp:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:n=Oe.ParamRegExpEnd:d+=l;break;case Oe.ParamRegExpEnd:f(),n=Oe.Static,l!=="*"&&l!=="?"&&l!=="+"&&i--,d="";break;default:t("Unknown state");break}}return n===Oe.ParamRegExp&&t(`Unfinished custom RegExp for param "${u}"`),f(),o(),s}const Ir="[^/]+?",ou={sensitive:!1,strict:!1,start:!0,end:!0};var Le=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(Le||{});const iu=/[.+*?^${}()[\]/\\]/g;function lu(e,t){const n=le({},ou,t),a=[];let s=n.start?"^":"";const r=[];for(const u of e){const d=u.length?[]:[Le.Root];n.strict&&!u.length&&(s+="/");for(let f=0;f<u.length;f++){const g=u[f];let p=Le.Segment+(n.sensitive?Le.BonusCaseSensitive:0);if(g.type===en.Static)f||(s+="/"),s+=g.value.replace(iu,"\\$&"),p+=Le.Static;else if(g.type===en.Param){const{value:h,repeatable:c,optional:m,regexp:_}=g;r.push({name:h,repeatable:c,optional:m});const y=_||Ir;if(y!==Ir){p+=Le.BonusCustomRegExp;try{`${y}`}catch(S){throw new Error(`Invalid custom RegExp for param "${h}" (${y}): `+S.message)}}let T=c?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;f||(T=m&&u.length<2?`(?:/${T})`:"/"+T),m&&(T+="?"),s+=T,p+=Le.Dynamic,m&&(p+=Le.BonusOptional),c&&(p+=Le.BonusRepeatable),y===".*"&&(p+=Le.BonusWildcard)}d.push(p)}a.push(d)}if(n.strict&&n.end){const u=a.length-1;a[u][a[u].length-1]+=Le.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function i(u){const d=u.match(o),f={};if(!d)return null;for(let g=1;g<d.length;g++){const p=d[g]||"",h=r[g-1];f[h.name]=p&&h.repeatable?p.split("/"):p}return f}function l(u){let d="",f=!1;for(const g of e){(!f||!d.endsWith("/"))&&(d+="/"),f=!1;for(const p of g)if(p.type===en.Static)d+=p.value;else if(p.type===en.Param){const{value:h,repeatable:c,optional:m}=p,_=h in u?u[h]:"";if(nt(_)&&!c)throw new Error(`Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`);const y=nt(_)?_.join("/"):_;if(!y)if(m)g.length<2&&(d.endsWith("/")?d=d.slice(0,-1):f=!0);else throw new Error(`Missing required param "${h}"`);d+=y}}return d||"/"}return{re:o,score:a,keys:r,parse:i,stringify:l}}function cu(e,t){let n=0;for(;n<e.length&&n<t.length;){const a=t[n]-e[n];if(a)return a;n++}return e.length<t.length?e.length===1&&e[0]===Le.Static+Le.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Le.Static+Le.Segment?1:-1:0}function Oi(e,t){let n=0;const a=e.score,s=t.score;for(;n<a.length&&n<s.length;){const r=cu(a[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-a.length)===1){if(Dr(a))return 1;if(Dr(s))return-1}return s.length-a.length}function Dr(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const du={strict:!1,end:!0,sensitive:!1};function uu(e,t,n){const a=lu(ru(e.path),n),s=le(a,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function pu(e,t){const n=[],a=new Map;t=kr(du,t);function s(f){return a.get(f)}function r(f,g,p){const h=!p,c=Br(f);c.aliasOf=p&&p.record;const m=kr(t,f),_=[c];if("alias"in f){const S=typeof f.alias=="string"?[f.alias]:f.alias;for(const x of S)_.push(Br(le({},c,{components:p?p.record.components:c.components,path:x,aliasOf:p?p.record:c})))}let y,T;for(const S of _){const{path:x}=S;if(g&&x[0]!=="/"){const L=g.record.path,w=L[L.length-1]==="/"?"":"/";S.path=g.record.path+(x&&w+x)}if(y=uu(S,g,m),p?p.alias.push(y):(T=T||y,T!==y&&T.alias.push(y),h&&f.name&&!Fr(y)&&o(f.name)),Pi(y)&&l(y),c.children){const L=c.children;for(let w=0;w<L.length;w++)r(L[w],y,p&&p.children[w])}p=p||y}return T?()=>{o(T)}:Ln}function o(f){if(Ei(f)){const g=a.get(f);g&&(a.delete(f),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(f);g>-1&&(n.splice(g,1),f.record.name&&a.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function i(){return n}function l(f){const g=gu(f,n);n.splice(g,0,f),f.record.name&&!Fr(f)&&a.set(f.record.name,f)}function u(f,g){let p,h={},c,m;if("name"in f&&f.name){if(p=a.get(f.name),!p)throw mn(Te.MATCHER_NOT_FOUND,{location:f});m=p.record.name,h=le(Mr(g.params,p.keys.filter(T=>!T.optional).concat(p.parent?p.parent.keys.filter(T=>T.optional):[]).map(T=>T.name)),f.params&&Mr(f.params,p.keys.map(T=>T.name))),c=p.stringify(h)}else if(f.path!=null)c=f.path,p=n.find(T=>T.re.test(c)),p&&(h=p.parse(c),m=p.record.name);else{if(p=g.name?a.get(g.name):n.find(T=>T.re.test(g.path)),!p)throw mn(Te.MATCHER_NOT_FOUND,{location:f,currentLocation:g});m=p.record.name,h=le({},g.params,f.params),c=p.stringify(h)}const _=[];let y=p;for(;y;)_.unshift(y.record),y=y.parent;return{name:m,path:c,params:h,matched:_,meta:hu(_)}}e.forEach(f=>r(f));function d(){n.length=0,a.clear()}return{addRoute:r,resolve:u,removeRoute:o,clearRoutes:d,getRoutes:i,getRecordMatcher:s}}function Mr(e,t){const n={};for(const a of t)a in e&&(n[a]=e[a]);return n}function Br(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:fu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function fu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const a in e.components)t[a]=typeof n=="object"?n[a]:n;return t}function Fr(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function hu(e){return e.reduce((t,n)=>le(t,n.meta),{})}function gu(e,t){let n=0,a=t.length;for(;n!==a;){const r=n+a>>1;Oi(e,t[r])<0?a=r:n=r+1}const s=mu(e);return s&&(a=t.lastIndexOf(s,a-1)),a}function mu(e){let t=e;for(;t=t.parent;)if(Pi(t)&&Oi(e,t)===0)return t}function Pi({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function $r(e){const t=Ve(wa),n=Ve(Bs),a=je(()=>{const l=Ft(e.to);return t.resolve(l)}),s=je(()=>{const{matched:l}=a.value,{length:u}=l,d=l[u-1],f=n.matched;if(!d||!f.length)return-1;const g=f.findIndex(gn.bind(null,d));if(g>-1)return g;const p=Ur(l[u-2]);return u>1&&Ur(d)===p&&f[f.length-1].path!==p?f.findIndex(gn.bind(null,l[u-2])):g}),r=je(()=>s.value>-1&&Tu(n.params,a.value.params)),o=je(()=>s.value>-1&&s.value===n.matched.length-1&&Ti(n.params,a.value.params));function i(l={}){if(vu(l)){const u=t[Ft(e.replace)?"replace":"push"](Ft(e.to)).catch(Ln);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:a,href:je(()=>a.value.href),isActive:r,isExactActive:o,navigate:i}}function _u(e){return e.length===1?e[0]:e}const bu=Bo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:$r,setup(e,{slots:t}){const n=St($r(e)),{options:a}=Ve(wa),s=je(()=>({[Hr(e.activeClass,a.linkActiveClass,"router-link-active")]:n.isActive,[Hr(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&_u(t.default(n));return e.custom?r:Ds("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),yu=bu;function vu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Tu(e,t){for(const n in t){const a=t[n],s=e[n];if(typeof a=="string"){if(a!==s)return!1}else if(!nt(s)||s.length!==a.length||a.some((r,o)=>r!==s[o]))return!1}return!0}function Ur(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Hr=(e,t,n)=>e??t??n,Eu=Bo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const a=Ve(ps),s=je(()=>e.route||a.value),r=Ve(Nr,0),o=je(()=>{let u=Ft(r);const{matched:d}=s.value;let f;for(;(f=d[u])&&!f.components;)u++;return u}),i=je(()=>s.value.matched[o.value]);Xn(Nr,je(()=>o.value+1)),Xn(zd,i),Xn(ps,s);const l=Je();return Cn(()=>[l.value,i.value,e.name],([u,d,f],[g,p,h])=>{d&&(d.instances[f]=u,p&&p!==d&&u&&u===g&&(d.leaveGuards.size||(d.leaveGuards=p.leaveGuards),d.updateGuards.size||(d.updateGuards=p.updateGuards))),u&&d&&(!p||!gn(d,p)||!g)&&(d.enterCallbacks[f]||[]).forEach(c=>c(u))},{flush:"post"}),()=>{const u=s.value,d=e.name,f=i.value,g=f&&f.components[d];if(!g)return Kr(n.default,{Component:g,route:u});const p=f.props[d],h=p?p===!0?u.params:typeof p=="function"?p(u):p:null,m=Ds(g,le({},h,t,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(f.instances[d]=null)},ref:l}));return Kr(n.default,{Component:m,route:u})||m}}});function Kr(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const ki=Eu;function Su(e){const t=pu(e.routes,e),n=e.parseQuery||Jd,a=e.stringifyQuery||Rr,s=e.history,r=Tn(),o=Tn(),i=Tn(),l=ul(xt);let u=xt;dn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Ka.bind(null,C=>""+C),f=Ka.bind(null,Rd),g=Ka.bind(null,Hn);function p(C,G){let j,z;return Ei(C)?(j=t.getRecordMatcher(C),z=G):z=C,t.addRoute(z,j)}function h(C){const G=t.getRecordMatcher(C);G&&t.removeRoute(G)}function c(){return t.getRoutes().map(C=>C.record)}function m(C){return!!t.getRecordMatcher(C)}function _(C,G){if(G=le({},G||l.value),typeof C=="string"){const E=Ya(n,C,G.path),N=t.resolve({path:E.path},G),D=s.createHref(E.fullPath);return le(E,N,{params:g(N.params),hash:Hn(E.hash),redirectedFrom:void 0,href:D})}let j;if(C.path!=null)j=le({},C,{path:Ya(n,C.path,G.path).path});else{const E=le({},C.params);for(const N in E)E[N]==null&&delete E[N];j=le({},C,{params:f(E)}),G.params=f(G.params)}const z=t.resolve(j,G),re=C.hash||"";z.params=d(g(z.params));const b=Id(a,le({},C,{hash:wd(re),path:z.path})),v=s.createHref(b);return le({fullPath:b,hash:re,query:a===Rr?Vd(C.query):C.query||{}},z,{redirectedFrom:void 0,href:v})}function y(C){return typeof C=="string"?Ya(n,C,l.value.path):le({},C)}function T(C,G){if(u!==C)return mn(Te.NAVIGATION_CANCELLED,{from:G,to:C})}function S(C){return w(C)}function x(C){return S(le(y(C),{replace:!0}))}function L(C,G){const j=C.matched[C.matched.length-1];if(j&&j.redirect){const{redirect:z}=j;let re=typeof z=="function"?z(C,G):z;return typeof re=="string"&&(re=re.includes("?")||re.includes("#")?re=y(re):{path:re},re.params={}),le({query:C.query,hash:C.hash,params:re.path!=null?{}:C.params},re)}}function w(C,G){const j=u=_(C),z=l.value,re=C.state,b=C.force,v=C.replace===!0,E=L(j,z);if(E)return w(le(y(E),{state:typeof E=="object"?le({},re,E.state):re,force:b,replace:v}),G||j);const N=j;N.redirectedFrom=G;let D;return!b&&Dd(a,z,j)&&(D=mn(Te.NAVIGATION_DUPLICATED,{to:N,from:z}),Ee(z,z,!0,!1)),(D?Promise.resolve(D):B(N,z)).catch(R=>_t(R)?_t(R,Te.NAVIGATION_GUARD_REDIRECT)?R:_e(R):Q(R,N,z)).then(R=>{if(R){if(_t(R,Te.NAVIGATION_GUARD_REDIRECT))return w(le({replace:v},y(R.to),{state:typeof R.to=="object"?le({},re,R.to.state):re,force:b}),G||N)}else R=P(N,z,!0,v,re);return K(N,z,R),R})}function I(C,G){const j=T(C,G);return j?Promise.reject(j):Promise.resolve()}function O(C){const G=ke.values().next().value;return G&&typeof G.runWithContext=="function"?G.runWithContext(C):C()}function B(C,G){let j;const[z,re,b]=Qd(C,G);j=qa(z.reverse(),"beforeRouteLeave",C,G);for(const E of z)E.leaveGuards.forEach(N=>{j.push(Lt(N,C,G))});const v=I.bind(null,C,G);return j.push(v),ye(j).then(()=>{j=[];for(const E of r.list())j.push(Lt(E,C,G));return j.push(v),ye(j)}).then(()=>{j=qa(re,"beforeRouteUpdate",C,G);for(const E of re)E.updateGuards.forEach(N=>{j.push(Lt(N,C,G))});return j.push(v),ye(j)}).then(()=>{j=[];for(const E of b)if(E.beforeEnter)if(nt(E.beforeEnter))for(const N of E.beforeEnter)j.push(Lt(N,C,G));else j.push(Lt(E.beforeEnter,C,G));return j.push(v),ye(j)}).then(()=>(C.matched.forEach(E=>E.enterCallbacks={}),j=qa(b,"beforeRouteEnter",C,G,O),j.push(v),ye(j))).then(()=>{j=[];for(const E of o.list())j.push(Lt(E,C,G));return j.push(v),ye(j)}).catch(E=>_t(E,Te.NAVIGATION_CANCELLED)?E:Promise.reject(E))}function K(C,G,j){i.list().forEach(z=>O(()=>z(C,G,j)))}function P(C,G,j,z,re){const b=T(C,G);if(b)return b;const v=G===xt,E=dn?history.state:{};j&&(z||v?s.replace(C.fullPath,le({scroll:v&&E&&E.scroll},re)):s.push(C.fullPath,re)),l.value=C,Ee(C,G,j,v),_e()}let V;function U(){V||(V=s.listen((C,G,j)=>{if(!Me.listening)return;const z=_(C),re=L(z,Me.currentRoute.value);if(re){w(le(re,{replace:!0,force:!0}),z).catch(Ln);return}u=z;const b=l.value;dn&&Yd(Cr(b.fullPath,j.delta),ka()),B(z,b).catch(v=>_t(v,Te.NAVIGATION_ABORTED|Te.NAVIGATION_CANCELLED)?v:_t(v,Te.NAVIGATION_GUARD_REDIRECT)?(w(le(y(v.to),{force:!0}),z).then(E=>{_t(E,Te.NAVIGATION_ABORTED|Te.NAVIGATION_DUPLICATED)&&!j.delta&&j.type===ds.pop&&s.go(-1,!1)}).catch(Ln),Promise.reject()):(j.delta&&s.go(-j.delta,!1),Q(v,z,b))).then(v=>{v=v||P(z,b,!1),v&&(j.delta&&!_t(v,Te.NAVIGATION_CANCELLED)?s.go(-j.delta,!1):j.type===ds.pop&&_t(v,Te.NAVIGATION_ABORTED|Te.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),K(z,b,v)}).catch(Ln)}))}let ne=Tn(),Z=Tn(),Y;function Q(C,G,j){_e(C);const z=Z.list();return z.length?z.forEach(re=>re(C,G,j)):console.error(C),Promise.reject(C)}function ue(){return Y&&l.value!==xt?Promise.resolve():new Promise((C,G)=>{ne.add([C,G])})}function _e(C){return Y||(Y=!C,U(),ne.list().forEach(([G,j])=>C?j(C):G()),ne.reset()),C}function Ee(C,G,j,z){const{scrollBehavior:re}=e;if(!dn||!re)return Promise.resolve();const b=!j&&jd(Cr(C.fullPath,0))||(z||!j)&&history.state&&history.state.scroll||null;return ws().then(()=>re(C,G,b)).then(v=>v&&Kd(v)).catch(v=>Q(v,C,G))}const ge=C=>s.go(C);let Ge;const ke=new Set,Me={currentRoute:l,listening:!0,addRoute:p,removeRoute:h,clearRoutes:t.clearRoutes,hasRoute:m,getRoutes:c,resolve:_,options:e,push:S,replace:x,go:ge,back:()=>ge(-1),forward:()=>ge(1),beforeEach:r.add,beforeResolve:o.add,afterEach:i.add,onError:Z.add,isReady:ue,install(C){C.component("RouterLink",yu),C.component("RouterView",ki),C.config.globalProperties.$router=Me,Object.defineProperty(C.config.globalProperties,"$route",{enumerable:!0,get:()=>Ft(l)}),dn&&!Ge&&l.value===xt&&(Ge=!0,S(s.location).catch(z=>{}));const G={};for(const z in xt)Object.defineProperty(G,z,{get:()=>l.value[z],enumerable:!0});C.provide(wa,Me),C.provide(Bs,So(G)),C.provide(ps,l);const j=C.unmount;ke.add(C),C.unmount=function(){ke.delete(C),ke.size<1&&(u=xt,V&&V(),V=null,l.value=xt,Ge=!1,Y=!1),j()}}};function ye(C){return C.reduce((G,j)=>G.then(()=>O(j)),Promise.resolve())}return Me}function ht(){return Ve(wa)}function wi(e){return Ve(Bs)}var Au=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ou(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Sn={exports:{}},Pu=Sn.exports,Yr;function ku(){return Yr||(Yr=1,(function(e,t){(function(n,a){var s={};n.PubSub?(s=n.PubSub,console.warn("PubSub already loaded, using existing version")):(n.PubSub=s,a(s)),e!==void 0&&e.exports&&(t=e.exports=s),t.PubSub=s,e.exports=t=s})(typeof window=="object"&&window||Pu||Au,function(n){var a={},s=-1,r="*";function o(c){var m;for(m in c)if(Object.prototype.hasOwnProperty.call(c,m))return!0;return!1}function i(c){return function(){throw c}}function l(c,m,_){try{c(m,_)}catch(y){setTimeout(i(y),0)}}function u(c,m,_){c(m,_)}function d(c,m,_,y){var T=a[m],S=y?u:l,x;if(Object.prototype.hasOwnProperty.call(a,m))for(x in T)Object.prototype.hasOwnProperty.call(T,x)&&S(T[x],c,_)}function f(c,m,_){return function(){var T=String(c),S=T.lastIndexOf(".");for(d(c,c,m,_);S!==-1;)T=T.substr(0,S),S=T.lastIndexOf("."),d(c,T,m,_);d(c,r,m,_)}}function g(c){var m=String(c),_=!!(Object.prototype.hasOwnProperty.call(a,m)&&o(a[m]));return _}function p(c){for(var m=String(c),_=g(m)||g(r),y=m.lastIndexOf(".");!_&&y!==-1;)m=m.substr(0,y),y=m.lastIndexOf("."),_=g(m);return _}function h(c,m,_,y){c=typeof c=="symbol"?c.toString():c;var T=f(c,m,y),S=p(c);return S?(_===!0?T():setTimeout(T,0),!0):!1}n.publish=function(c,m){return h(c,m,!1,n.immediateExceptions)},n.publishSync=function(c,m){return h(c,m,!0,n.immediateExceptions)},n.subscribe=function(c,m){if(typeof m!="function")return!1;c=typeof c=="symbol"?c.toString():c,Object.prototype.hasOwnProperty.call(a,c)||(a[c]={});var _="uid_"+String(++s);return a[c][_]=m,_},n.subscribeAll=function(c){return n.subscribe(r,c)},n.subscribeOnce=function(c,m){var _=n.subscribe(c,function(){n.unsubscribe(_),m.apply(this,arguments)});return n},n.clearAllSubscriptions=function(){a={}},n.clearSubscriptions=function(m){var _;for(_ in a)Object.prototype.hasOwnProperty.call(a,_)&&_.indexOf(m)===0&&delete a[_]},n.countSubscriptions=function(m){var _,y,T=0;for(_ in a)if(Object.prototype.hasOwnProperty.call(a,_)&&_.indexOf(m)===0){for(y in a[_])T++;break}return T},n.getSubscriptions=function(m){var _,y=[];for(_ in a)Object.prototype.hasOwnProperty.call(a,_)&&_.indexOf(m)===0&&y.push(_);return y},n.unsubscribe=function(c){var m=function(I){var O;for(O in a)if(Object.prototype.hasOwnProperty.call(a,O)&&O.indexOf(I)===0)return!0;return!1},_=typeof c=="string"&&(Object.prototype.hasOwnProperty.call(a,c)||m(c)),y=!_&&typeof c=="string",T=typeof c=="function",S=!1,x,L,w;if(_){n.clearSubscriptions(c);return}for(x in a)if(Object.prototype.hasOwnProperty.call(a,x)){if(L=a[x],y&&L[c]){delete L[c],S=c;break}if(T)for(w in L)Object.prototype.hasOwnProperty.call(L,w)&&L[w]===c&&(delete L[w],S=!0)}return S}})})(Sn,Sn.exports)),Sn.exports}var wu=ku();const J=Ou(wu);let Kn=[{key:"americanfootball_cfl",group:"American Football",title:"CFL",description:"Canadian Football League",active:!0,has_outrights:!1},{key:"americanfootball_ncaaf",group:"American Football",title:"NCAAF",description:"US College Football",active:!0,has_outrights:!1},{key:"americanfootball_ncaaf_championship_winner",group:"American Football",title:"NCAAF Championship Winner",description:"US College Football Championship Winner",active:!0,has_outrights:!0},{key:"americanfootball_nfl",group:"American Football",title:"NFL",description:"US Football",active:!0,has_outrights:!1},{key:"americanfootball_nfl_super_bowl_winner",group:"American Football",title:"NFL Super Bowl Winner",description:"Super Bowl Winner 2025/2026",active:!1,has_outrights:!0},{key:"aussierules_afl",group:"Aussie Rules",title:"AFL",description:"Aussie Football",active:!1,has_outrights:!1},{key:"baseball_kbo",group:"Baseball",title:"KBO",description:"KBO League",active:!1,has_outrights:!1},{key:"baseball_milb",group:"Baseball",title:"MiLB",description:"Minor League Baseball",active:!1,has_outrights:!1},{key:"baseball_mlb",group:"Baseball",title:"MLB",description:"Major League Baseball",active:!0,has_outrights:!1},{key:"baseball_mlb_world_series_winner",group:"Baseball",title:"MLB World Series Winner",description:"World Series Winner 2025",active:!1,has_outrights:!0},{key:"baseball_npb",group:"Baseball",title:"NPB",description:"Nippon Professional Baseball",active:!0,has_outrights:!1},{key:"basketball_euroleague",group:"Basketball",title:"Basketball Euroleague",description:"Basketball Euroleague",active:!1,has_outrights:!1},{key:"basketball_nba",group:"Basketball",title:"NBA",description:"US Basketball",active:!0,has_outrights:!1},{key:"basketball_nba_championship_winner",group:"Basketball",title:"NBA Championship Winner",description:"Championship Winner 2025/2026",active:!1,has_outrights:!0},{key:"basketball_nbl",group:"Basketball",title:"NBL",description:"AU National Basketball League",active:!1,has_outrights:!1},{key:"basketball_ncaab_championship_winner",group:"Basketball",title:"NCAAB Championship Winner",description:"US College Basketball Championship Winner",active:!0,has_outrights:!0},{key:"basketball_wnba",group:"Basketball",title:"WNBA",description:"US Basketball",active:!0,has_outrights:!1},{key:"boxing_boxing",group:"Boxing",title:"Boxing",description:"Boxing Bouts",active:!0,has_outrights:!1},{key:"cricket_asia_cup",group:"Cricket",title:"Asia Cup",description:"Asia Cup",active:!1,has_outrights:!1},{key:"cricket_international_t20",group:"Cricket",title:"International Twenty20",description:"International Twenty20",active:!0,has_outrights:!1},{key:"golf_masters_tournament_winner",group:"Golf",title:"Masters Tournament Winner",description:"2026 Winner",active:!0,has_outrights:!0},{key:"icehockey_liiga",group:"Ice Hockey",title:"Liiga",description:"Finnish SM League",active:!1,has_outrights:!1},{key:"icehockey_mestis",group:"Ice Hockey",title:"Mestis",description:"Finnish Mestis League",active:!1,has_outrights:!1},{key:"icehockey_nhl",group:"Ice Hockey",title:"NHL",description:"US Ice Hockey",active:!0,has_outrights:!1},{key:"icehockey_nhl_championship_winner",group:"Ice Hockey",title:"NHL Championship Winner",description:"Stanley Cup Winner 2025/2026",active:!1,has_outrights:!0},{key:"icehockey_sweden_allsvenskan",group:"Ice Hockey",title:"HockeyAllsvenskan",description:"Swedish Hockey Allsvenskan",active:!1,has_outrights:!1},{key:"icehockey_sweden_hockey_league",group:"Ice Hockey",title:"SHL",description:"Swedish Hockey League",active:!1,has_outrights:!1},{key:"mma_mixed_martial_arts",group:"Mixed Martial Arts",title:"MMA",description:"Mixed Martial Arts",active:!0,has_outrights:!1},{key:"politics_us_presidential_election_winner",group:"Politics",title:"US Presidential Elections Winner",description:"2028 US Presidential Election Winner",active:!1,has_outrights:!0},{key:"rugbyleague_nrl",group:"Rugby League",title:"NRL",description:"Aussie Rugby League",active:!1,has_outrights:!1},{key:"soccer_argentina_primera_division",group:"Soccer",title:"Primera División - Argentina",description:"Argentine Primera División",active:!1,has_outrights:!1},{key:"soccer_australia_aleague",group:"Soccer",title:"A-League",description:"Aussie Soccer",active:!1,has_outrights:!1},{key:"soccer_austria_bundesliga",group:"Soccer",title:"Austrian Football Bundesliga",description:"Austrian Soccer",active:!1,has_outrights:!1},{key:"soccer_belgium_first_div",group:"Soccer",title:"Belgium First Div",description:"Belgian First Division A",active:!1,has_outrights:!1},{key:"soccer_brazil_campeonato",group:"Soccer",title:"Brazil Série A",description:"Brasileirão Série A",active:!1,has_outrights:!1},{key:"soccer_brazil_serie_b",group:"Soccer",title:"Brazil Série B",description:"Campeonato Brasileiro Série B",active:!1,has_outrights:!1},{key:"soccer_chile_campeonato",group:"Soccer",title:"Primera División - Chile",description:"Campeonato Chileno",active:!1,has_outrights:!1},{key:"soccer_china_superleague",group:"Soccer",title:"Super League - China",description:"Chinese Soccer",active:!1,has_outrights:!1},{key:"soccer_conmebol_copa_libertadores",group:"Soccer",title:"Copa Libertadores",description:"CONMEBOL Copa Libertadores",active:!1,has_outrights:!1},{key:"soccer_conmebol_copa_sudamericana",group:"Soccer",title:"Copa Sudamericana",description:"CONMEBOL Copa Sudamericana",active:!1,has_outrights:!1},{key:"soccer_denmark_superliga",group:"Soccer",title:"Denmark Superliga",description:"Danish Soccer",active:!1,has_outrights:!1},{key:"soccer_efl_champ",group:"Soccer",title:"Championship",description:"EFL Championship",active:!1,has_outrights:!1},{key:"soccer_england_league1",group:"Soccer",title:"League 1",description:"EFL League 1",active:!1,has_outrights:!1},{key:"soccer_england_league2",group:"Soccer",title:"League 2",description:"EFL League 2 ",active:!1,has_outrights:!1},{key:"soccer_epl",group:"Soccer",title:"EPL",description:"English Premier League",active:!0,has_outrights:!1},{key:"soccer_fifa_world_cup_qualifiers_europe",group:"Soccer",title:"FIFA World Cup Qualifiers - Europe",description:"FIFA World Cup Qualifiers - UEFA",active:!0,has_outrights:!1},{key:"soccer_fifa_world_cup_winner",group:"Soccer",title:"FIFA World Cup Winner",description:"FIFA World Cup Winner 2026",active:!1,has_outrights:!0},{key:"soccer_finland_veikkausliiga",group:"Soccer",title:"Veikkausliiga - Finland",description:"Finnish  Soccer",active:!1,has_outrights:!1},{key:"soccer_france_ligue_one",group:"Soccer",title:"Ligue 1 - France",description:"French Soccer",active:!1,has_outrights:!1},{key:"soccer_france_ligue_two",group:"Soccer",title:"Ligue 2 - France",description:"French Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_bundesliga",group:"Soccer",title:"Bundesliga - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_bundesliga2",group:"Soccer",title:"Bundesliga 2 - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_liga3",group:"Soccer",title:"3. Liga - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_greece_super_league",group:"Soccer",title:"Super League - Greece",description:"Greek Soccer",active:!1,has_outrights:!1},{key:"soccer_italy_serie_a",group:"Soccer",title:"Serie A - Italy",description:"Italian Soccer",active:!1,has_outrights:!1},{key:"soccer_italy_serie_b",group:"Soccer",title:"Serie B - Italy",description:"Italian Soccer",active:!1,has_outrights:!1},{key:"soccer_japan_j_league",group:"Soccer",title:"J League",description:"Japan Soccer League",active:!1,has_outrights:!1},{key:"soccer_korea_kleague1",group:"Soccer",title:"K League 1",description:"Korean Soccer",active:!1,has_outrights:!1},{key:"soccer_league_of_ireland",group:"Soccer",title:"League of Ireland",description:"Airtricity League Premier Division",active:!1,has_outrights:!1},{key:"soccer_mexico_ligamx",group:"Soccer",title:"Liga MX",description:"Mexican Soccer",active:!1,has_outrights:!1},{key:"soccer_netherlands_eredivisie",group:"Soccer",title:"Dutch Eredivisie",description:"Dutch Soccer",active:!1,has_outrights:!1},{key:"soccer_norway_eliteserien",group:"Soccer",title:"Eliteserien - Norway",description:"Norwegian Soccer",active:!1,has_outrights:!1},{key:"soccer_poland_ekstraklasa",group:"Soccer",title:"Ekstraklasa - Poland",description:"Polish Soccer",active:!1,has_outrights:!1},{key:"soccer_portugal_primeira_liga",group:"Soccer",title:"Primeira Liga - Portugal",description:"Portugese Soccer",active:!1,has_outrights:!1},{key:"soccer_spain_la_liga",group:"Soccer",title:"La Liga - Spain",description:"Spanish Soccer",active:!1,has_outrights:!1},{key:"soccer_spain_segunda_division",group:"Soccer",title:"La Liga 2 - Spain",description:"Spanish Soccer",active:!1,has_outrights:!1},{key:"soccer_spl",group:"Soccer",title:"Premiership - Scotland",description:"Scottish Premiership",active:!1,has_outrights:!1},{key:"soccer_sweden_allsvenskan",group:"Soccer",title:"Allsvenskan - Sweden",description:"Swedish Soccer",active:!1,has_outrights:!1},{key:"soccer_sweden_superettan",group:"Soccer",title:"Superettan - Sweden",description:"Swedish Soccer",active:!1,has_outrights:!1},{key:"soccer_switzerland_superleague",group:"Soccer",title:"Swiss Superleague",description:"Swiss Soccer",active:!1,has_outrights:!1},{key:"soccer_turkey_super_league",group:"Soccer",title:"Turkey Super League",description:"Turkish Soccer",active:!1,has_outrights:!1},{key:"soccer_uefa_champs_league",group:"Soccer",title:"UEFA Champions League",description:"European Champions League",active:!0,has_outrights:!1},{key:"soccer_uefa_europa_conference_league",group:"Soccer",title:"UEFA Europa Conference League",description:"UEFA Europa Conference League",active:!1,has_outrights:!1},{key:"soccer_uefa_europa_league",group:"Soccer",title:"UEFA Europa League",description:"European Europa League",active:!1,has_outrights:!1},{key:"soccer_usa_mls",group:"Soccer",title:"MLS",description:"Major League Soccer",active:!1,has_outrights:!1},{key:"tennis_atp_china_open",group:"Tennis",title:"ATP China Open",description:"Men's Singles",active:!1,has_outrights:!1},{key:"tennis_wta_china_open",group:"Tennis",title:"WTA China Open",description:"Women's Singles",active:!1,has_outrights:!1}];const xu={getMeta(){return{language:[{lang:"Abkhazian",code:"ab",enabled:!1,copy:[["key","value"]]},{lang:"Afar",code:"aa",enabled:!1,copy:[["key","value"]]},{lang:"Afrikaans",code:"af",enabled:!1,copy:[["key","value"]]},{lang:"Akan",code:"ak",enabled:!1,copy:[["key","value"]]},{lang:"Albanian",code:"sq",enabled:!1,copy:[["key","value"]]},{lang:"Amharic",code:"am",enabled:!1,copy:[["key","value"]]},{lang:"Arabic",code:"ar",enabled:!1,copy:[["key","value"]]},{lang:"Aragonese",code:"an",enabled:!1,copy:[["key","value"]]},{lang:"Armenian",code:"hy",enabled:!1,copy:[["key","value"]]},{lang:"Assamese",code:"as",enabled:!1,copy:[["key","value"]]},{lang:"Avaric",code:"av",enabled:!1,copy:[["key","value"]]},{lang:"Avestan",code:"ae",enabled:!1,copy:[["key","value"]]},{lang:"Aymara",code:"ay",enabled:!1,copy:[["key","value"]]},{lang:"Azerbaijani",code:"az",enabled:!1,copy:[["key","value"]]},{lang:"Bambara",code:"bm",enabled:!1,copy:[["key","value"]]},{lang:"Bashkir",code:"ba",enabled:!1,copy:[["key","value"]]},{lang:"Basque",code:"eu",enabled:!1,copy:[["key","value"]]},{lang:"Belarusian",code:"be",enabled:!1,copy:[["key","value"]]},{lang:"Bengali (Bangla)",code:"bn",enabled:!1,copy:[["key","value"]]},{lang:"Bihari",code:"bh",enabled:!1,copy:[["key","value"]]},{lang:"Bislama",code:"bi",enabled:!1,copy:[["key","value"]]},{lang:"Bosnian",code:"bs",enabled:!1,copy:[["key","value"]]},{lang:"Breton",code:"br",enabled:!1,copy:[["key","value"]]},{lang:"Bulgarian",code:"bg",enabled:!1,copy:[["key","value"]]},{lang:"Burmese",code:"my",enabled:!1,copy:[["key","value"]]},{lang:"Catalan",code:"ca",enabled:!1,copy:[["key","value"]]},{lang:"Chamorro",code:"ch",enabled:!1,copy:[["key","value"]]},{lang:"Chechen",code:"ce",enabled:!1,copy:[["key","value"]]},{lang:"Chichewa, Chewa, Nyanja",code:"ny",enabled:!1,copy:[["key","value"]]},{lang:"Chinese",code:"zh",enabled:!1,copy:[["key","value"]]},{lang:"Chinese (Simplified)",code:"zh-Hans",enabled:!1,copy:[["welcome_back","欢迎回来"],["please_enter_your_details","请输入您的详细信息"],["email","电子邮件"],["enter_your_email","输入您的电子邮件"],["password","密码"],["enter_your_password","输入您的密码"],["enter_email_and_password","输入邮箱和密码"],["sign_in","登入"],["forgot_password","忘记密码"],["dont_have_an_account","沒有帳戶？"],["sign_up","报名"],["please_enter_your_details_to_get_started","请输入您的详细信息以开始"],["already_have_an_account","已有账户？"],["log_in","登录"],["name","姓名"],["enter_your_name","输入您的姓名"]]},{lang:"Chinese (Traditional)",code:"zh-Hant",enabled:!1,copy:[["key","value"]]},{lang:"Chuvash",code:"cv",enabled:!1,copy:[["key","value"]]},{lang:"Cornish",code:"kw",enabled:!1,copy:[["key","value"]]},{lang:"Corsican",code:"co",enabled:!1,copy:[["key","value"]]},{lang:"Cree",code:"cr",enabled:!1,copy:[["key","value"]]},{lang:"Croatian",code:"hr",enabled:!1,copy:[["key","value"]]},{lang:"Czech",code:"cs",enabled:!1,copy:[["key","value"]]},{lang:"Danish",code:"da",enabled:!1,copy:[["key","value"]]},{lang:"Divehi, Dhivehi, Maldivian",code:"dv",enabled:!1,copy:[["key","value"]]},{lang:"Dutch",code:"nl",enabled:!1,copy:[["key","value"]]},{lang:"Dzongkha",code:"dz",enabled:!1,copy:[["key","value"]]},{lang:"English",code:"en",enabled:!0,copy:[["welcome_back","Welcome Back"],["please_enter_your_details","Please Enter your Details"],["email","Email"],["enter_your_email","Enter your email"],["password","Password"],["enter_your_password","Enter your password"],["enter_email_and_password","Enter Email and Password"],["sign_in","Sign in"],["forgot_password","Forgot Password"],["dont_have_an_account","Don't have an account?"],["sign_up","Sign up"],["please_enter_your_details_to_get_started","Please enter your details to get started"],["already_have_an_account","Already have an account?"],["log_in","Sign in"],["name","Name"],["enter_your_name","Enter your name"]]},{lang:"Esperanto",code:"eo",enabled:!1,copy:[["key","value"]]},{lang:"Estonian",code:"et",enabled:!1,copy:[["key","value"]]},{lang:"Ewe",code:"ee",enabled:!1,copy:[["key","value"]]},{lang:"Faroese",code:"fo",enabled:!1,copy:[["key","value"]]},{lang:"Fijian",code:"fj",enabled:!1,copy:[["key","value"]]},{lang:"Finnish",code:"fi",enabled:!1,copy:[["key","value"]]},{lang:"French",code:"fr",enabled:!1,copy:[["key","value"]]},{lang:"Fula, Fulah, Pulaar, Pular",code:"ff",enabled:!1,copy:[["key","value"]]},{lang:"Galician",code:"gl",enabled:!1,copy:[["key","value"]]},{lang:"Gaelic (Scottish)",code:"gd",enabled:!1,copy:[["key","value"]]},{lang:"Gaelic (Manx)",code:"gv",enabled:!1,copy:[["key","value"]]},{lang:"Georgian",code:"ka",enabled:!1,copy:[["key","value"]]},{lang:"German",code:"de",enabled:!1,copy:[["key","value"]]},{lang:"Greek",code:"el",enabled:!1,copy:[["key","value"]]},{lang:"Greenlandic",code:"kl",enabled:!1,copy:[["key","value"]]},{lang:"Guarani",code:"gn",enabled:!1,copy:[["key","value"]]},{lang:"Gujarati",code:"gu",enabled:!1,copy:[["key","value"]]},{lang:"Haitian Creole",code:"ht",enabled:!1,copy:[["key","value"]]},{lang:"Hausa",code:"ha",enabled:!1,copy:[["key","value"]]},{lang:"Hebrew",code:"he",enabled:!1,copy:[["key","value"]]},{lang:"Herero",code:"hz",enabled:!1,copy:[["key","value"]]},{lang:"Hindi",code:"hi",enabled:!1,copy:[["key","value"]]},{lang:"Hiri Motu",code:"ho",enabled:!1,copy:[["key","value"]]},{lang:"Hungarian",code:"hu",enabled:!1,copy:[["key","value"]]},{lang:"Icelandic",code:"is",enabled:!1,copy:[["key","value"]]},{lang:"Ido",code:"io",enabled:!1,copy:[["key","value"]]},{lang:"Igbo",code:"ig",enabled:!1,copy:[["key","value"]]},{lang:"Indonesian",code:"id, in",enabled:!1,copy:[["key","value"]]},{lang:"Interlingua",code:"ia",enabled:!1,copy:[["key","value"]]},{lang:"Interlingue",code:"ie",enabled:!1,copy:[["key","value"]]},{lang:"Inuktitut",code:"iu",enabled:!1,copy:[["key","value"]]},{lang:"Inupiak",code:"ik",enabled:!1,copy:[["key","value"]]},{lang:"Irish",code:"ga",enabled:!1,copy:[["key","value"]]},{lang:"Italian",code:"it",enabled:!0,copy:[["welcome_back","Bentornato"],["please_enter_your_details","Per favore, inserisci i tuoi dati"],["email","E-mail"],["enter_your_email","Inserisci la tua email"],["password","Password"],["enter_your_password","Inserisci la tua password"],["enter_email_and_password","Inserisci email e password"],["sign_in","Registrazione"],["forgot_password","Ha dimenticato la password"],["dont_have_an_account","Non hai un account?"],["sign_up","Iscrizione"],["please_enter_your_details_to_get_started","Inserisci i tuoi dati per iniziare"],["already_have_an_account","Hai già un account?"],["log_in","Login"],["name","Nome"],["enter_your_name","Inserisci il tuo nome"]]},{lang:"Japanese",code:"ja",enabled:!1,copy:[["key","value"]]},{lang:"Javanese",code:"jv",enabled:!1,copy:[["key","value"]]},{lang:"Kalaallisut, Greenlandic",code:"kl",enabled:!1,copy:[["key","value"]]},{lang:"Kannada",code:"kn",enabled:!1,copy:[["key","value"]]},{lang:"Kanuri",code:"kr",enabled:!1,copy:[["key","value"]]},{lang:"Kashmiri",code:"ks",enabled:!1,copy:[["key","value"]]},{lang:"Kazakh",code:"kk",enabled:!1,copy:[["key","value"]]},{lang:"Khmer",code:"km",enabled:!1,copy:[["key","value"]]},{lang:"Kikuyu",code:"ki",enabled:!1,copy:[["key","value"]]},{lang:"Kinyarwanda (Rwanda)",code:"rw",enabled:!1,copy:[["key","value"]]},{lang:"Kirundi",code:"rn",enabled:!1,copy:[["key","value"]]},{lang:"Kyrgyz",code:"ky",enabled:!1,copy:[["key","value"]]},{lang:"Komi",code:"kv",enabled:!1,copy:[["key","value"]]},{lang:"Kongo",code:"kg",enabled:!1,copy:[["key","value"]]},{lang:"Korean",code:"ko",enabled:!1,copy:[["key","value"]]},{lang:"Kurdish",code:"ku",enabled:!1,copy:[["key","value"]]},{lang:"Kwanyama",code:"kj",enabled:!1,copy:[["key","value"]]},{lang:"Lao",code:"lo",enabled:!1,copy:[["key","value"]]},{lang:"Latin",code:"la",enabled:!0,copy:[["key","value"]]},{lang:"Latvian (Lettish)",code:"lv",enabled:!1,copy:[["key","value"]]},{lang:"Limburgish ( Limburger)",code:"li",enabled:!1,copy:[["key","value"]]},{lang:"Lingala",code:"ln",enabled:!1,copy:[["key","value"]]},{lang:"Lithuanian",code:"lt",enabled:!1,copy:[["key","value"]]},{lang:"Luga-Katanga",code:"lu",enabled:!1,copy:[["key","value"]]},{lang:"Luganda, Ganda",code:"lg",enabled:!1,copy:[["key","value"]]},{lang:"Luxembourgish",code:"lb",enabled:!1,copy:[["key","value"]]},{lang:"Manx",code:"gv",enabled:!1,copy:[["key","value"]]},{lang:"Macedonian",code:"mk",enabled:!1,copy:[["key","value"]]},{lang:"Malagasy",code:"mg",enabled:!1,copy:[["key","value"]]},{lang:"Malay",code:"ms",enabled:!1,copy:[["key","value"]]},{lang:"Malayalam",code:"ml",enabled:!1,copy:[["key","value"]]},{lang:"Maltese",code:"mt",enabled:!1,copy:[["key","value"]]},{lang:"Maori",code:"mi",enabled:!1,copy:[["key","value"]]},{lang:"Marathi",code:"mr",enabled:!1,copy:[["key","value"]]},{lang:"Marshallese",code:"mh",enabled:!1,copy:[["key","value"]]},{lang:"Moldavian",code:"mo",enabled:!1,copy:[["key","value"]]},{lang:"Mongolian",code:"mn",enabled:!1,copy:[["key","value"]]},{lang:"Nauru",code:"na",enabled:!1,copy:[["key","value"]]},{lang:"Navajo",code:"nv",enabled:!1,copy:[["key","value"]]},{lang:"Ndonga",code:"ng",enabled:!1,copy:[["key","value"]]},{lang:"Northern Ndebele",code:"nd",enabled:!1,copy:[["key","value"]]},{lang:"Nepali",code:"ne",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian",code:"no",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian bokmål",code:"nb",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian nynorsk",code:"nn",enabled:!1,copy:[["key","value"]]},{lang:"Nuosu",code:"ii",enabled:!1,copy:[["key","value"]]},{lang:"Occitan",code:"oc",enabled:!1,copy:[["key","value"]]},{lang:"Ojibwe",code:"oj",enabled:!1,copy:[["key","value"]]},{lang:"Old Church Slavonic, Old Bulgarian",code:"cu",enabled:!1,copy:[["key","value"]]},{lang:"Oriya",code:"or",enabled:!1,copy:[["key","value"]]},{lang:"Oromo (Afaan Oromo)",code:"om",enabled:!1,copy:[["key","value"]]},{lang:"Ossetian",code:"os",enabled:!1,copy:[["key","value"]]},{lang:"Pāli",code:"pi",enabled:!1,copy:[["key","value"]]},{lang:"Pashto, Pushto",code:"ps",enabled:!1,copy:[["key","value"]]},{lang:"Persian (Farsi)",code:"fa",enabled:!1,copy:[["key","value"]]},{lang:"Polish",code:"pl",enabled:!1,copy:[["key","value"]]},{lang:"Portuguese",code:"pt",enabled:!1,copy:[["key","value"]]},{lang:"Punjabi (Eastern)",code:"pa",enabled:!1,copy:[["key","value"]]},{lang:"Quechua",code:"qu",enabled:!1,copy:[["key","value"]]},{lang:"Romansh",code:"rm",enabled:!1,copy:[["key","value"]]},{lang:"Romanian",code:"ro",enabled:!1,copy:[["key","value"]]},{lang:"Russian",code:"ru",enabled:!1,copy:[["key","value"]]},{lang:"Sami",code:"se",enabled:!1,copy:[["key","value"]]},{lang:"Samoan",code:"sm",enabled:!1,copy:[["key","value"]]},{lang:"Sango",code:"sg",enabled:!1,copy:[["key","value"]]},{lang:"Sanskrit",code:"sa",enabled:!1,copy:[["key","value"]]},{lang:"Serbian",code:"sr",enabled:!1,copy:[["key","value"]]},{lang:"Serbo-Croatian",code:"sh",enabled:!1,copy:[["key","value"]]},{lang:"Sesotho",code:"st",enabled:!1,copy:[["key","value"]]},{lang:"Setswana",code:"tn",enabled:!1,copy:[["key","value"]]},{lang:"Shona",code:"sn",enabled:!1,copy:[["key","value"]]},{lang:"Sichuan Yi",code:"ii",enabled:!1,copy:[["key","value"]]},{lang:"Sindhi",code:"sd",enabled:!1,copy:[["key","value"]]},{lang:"Sinhalese",code:"si",enabled:!1,copy:[["key","value"]]},{lang:"Siswati",code:"ss",enabled:!1,copy:[["key","value"]]},{lang:"Slovak",code:"sk",enabled:!1,copy:[["key","value"]]},{lang:"Slovenian",code:"sl",enabled:!1,copy:[["key","value"]]},{lang:"Somali",code:"so",enabled:!1,copy:[["key","value"]]},{lang:"Southern Ndebele",code:"nr",enabled:!1,copy:[["key","value"]]},{lang:"Spanish",code:"es",enabled:!1,copy:[["key","value"]]},{lang:"Sundanese",code:"su",enabled:!1,copy:[["key","value"]]},{lang:"Swahili (Kiswahili)",code:"sw",enabled:!1,copy:[["key","value"]]},{lang:"Swati",code:"ss",enabled:!1,copy:[["key","value"]]},{lang:"Swedish",code:"sv",enabled:!1,copy:[["key","value"]]},{lang:"Tagalog",code:"tl",enabled:!1,copy:[["key","value"]]},{lang:"Tahitian",code:"ty",enabled:!1,copy:[["key","value"]]},{lang:"Tajik",code:"tg",enabled:!1,copy:[["key","value"]]},{lang:"Tamil",code:"ta",enabled:!1,copy:[["key","value"]]},{lang:"Tatar",code:"tt",enabled:!1,copy:[["key","value"]]},{lang:"Telugu",code:"te",enabled:!1,copy:[["key","value"]]},{lang:"Thai",code:"th",enabled:!1,copy:[["key","value"]]},{lang:"Tibetan",code:"bo",enabled:!1,copy:[["key","value"]]},{lang:"Tigrinya",code:"ti",enabled:!1,copy:[["key","value"]]},{lang:"Tonga",code:"to",enabled:!1,copy:[["key","value"]]},{lang:"Tsonga",code:"ts",enabled:!1,copy:[["key","value"]]},{lang:"Turkish",code:"tr",enabled:!1,copy:[["key","value"]]},{lang:"Turkmen",code:"tk",enabled:!1,copy:[["key","value"]]},{lang:"Twi",code:"tw",enabled:!1,copy:[["key","value"]]},{lang:"Uyghur",code:"ug",enabled:!1,copy:[["key","value"]]},{lang:"Ukrainian",code:"uk",enabled:!1,copy:[["key","value"]]},{lang:"Urdu",code:"ur",enabled:!1,copy:[["key","value"]]},{lang:"Uzbek",code:"uz",enabled:!1,copy:[["key","value"]]},{lang:"Venda",code:"ve",enabled:!1,copy:[["key","value"]]},{lang:"Vietnamese",code:"vi",enabled:!1,copy:[["key","value"]]},{lang:"Volapük",code:"vo",enabled:!1,copy:[["key","value"]]},{lang:"Wallon",code:"wa",enabled:!1,copy:[["key","value"]]},{lang:"Welsh",code:"cy",enabled:!1,copy:[["key","value"]]},{lang:"Wolof",code:"wo",enabled:!1,copy:[["key","value"]]},{lang:"Western Frisian",code:"fy",enabled:!1,copy:[["key","value"]]},{lang:"Xhosa",code:"xh",enabled:!1,copy:[["key","value"]]},{lang:"Yiddish",code:"yi, ji",enabled:!1,copy:[["key","value"]]},{lang:"Yoruba",code:"yo",enabled:!1,copy:[["key","value"]]},{lang:"Zhuang, Chuang",code:"za",enabled:!1,copy:[["key","value"]]},{lang:"Zulu",code:"zu",enabled:!1,copy:[["key","value"]]}]}}};function Ht(e){return new Promise((t,n)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>n(e.error)})}function Cu(e,t){let n;const a=()=>{if(n)return n;const s=indexedDB.open(e);return s.onupgradeneeded=()=>s.result.createObjectStore(t),n=Ht(s),n.then(r=>{r.onclose=()=>n=void 0},()=>{}),n};return(s,r)=>a().then(o=>r(o.transaction(t,s).objectStore(t)))}let Ga;function qn(){return Ga||(Ga=Cu("keyval-store","keyval")),Ga}function Ru(e,t=qn()){return t("readonly",n=>Ht(n.get(e)))}function jr(e,t,n=qn()){return n("readwrite",a=>(a.put(t,e),Ht(a.transaction)))}function Wa(e,t=qn()){return t("readwrite",n=>(n.delete(e),Ht(n.transaction)))}function xi(e,t){return e.openCursor().onsuccess=function(){this.result&&(t(this.result),this.result.continue())},Ht(e.transaction)}function ln(e=qn()){return e("readonly",t=>{if(t.getAllKeys)return Ht(t.getAllKeys());const n=[];return xi(t,a=>n.push(a.key)).then(()=>n)})}function Nu(e=qn()){return e("readonly",t=>{if(t.getAll&&t.getAllKeys)return Promise.all([Ht(t.getAllKeys()),Ht(t.getAll())]).then(([a,s])=>a.map((r,o)=>[r,s[o]]));const n=[];return e("readonly",a=>xi(a,s=>n.push([s.key,s.value])).then(()=>n))})}const _n=e=>e!==null&&Object.prototype.toString.call(e)==="[object Object]",ua=(e,t)=>{if(e===t)return!0;if(typeof e!=typeof t)return!1;if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n+=1)if(!ua(e[n],t[n]))return!1;return!0}if(_n(e)&&_n(t)){const n=Object.entries(e),a=new Set(Object.keys(t));if(n.length!==a.size)return!1;for(const[s,r]of n){if(!ua(r,t[s]))return!1;a.delete(s)}return a.size===0}return!1},zn=e=>{if(e===""||e===!1||e===null||e===void 0||Array.isArray(e)&&e.length===0)return!0;if(_n(e)){for(const t in e)if(e.hasOwnProperty(t))return!1;return!0}return!1},Lu=e=>e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="_",qr=e=>e>="0"&&e<="9"||e==="-",Iu=e=>e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="_";var A;(function(e){e.TOK_EOF="EOF",e.TOK_UNQUOTEDIDENTIFIER="UnquotedIdentifier",e.TOK_QUOTEDIDENTIFIER="QuotedIdentifier",e.TOK_RBRACKET="Rbracket",e.TOK_RPAREN="Rparen",e.TOK_COMMA="Comma",e.TOK_COLON="Colon",e.TOK_RBRACE="Rbrace",e.TOK_NUMBER="Number",e.TOK_CURRENT="Current",e.TOK_ROOT="Root",e.TOK_EXPREF="Expref",e.TOK_PIPE="Pipe",e.TOK_OR="Or",e.TOK_AND="And",e.TOK_EQ="EQ",e.TOK_GT="GT",e.TOK_LT="LT",e.TOK_GTE="GTE",e.TOK_LTE="LTE",e.TOK_NE="NE",e.TOK_FLATTEN="Flatten",e.TOK_STAR="Star",e.TOK_FILTER="Filter",e.TOK_DOT="Dot",e.TOK_NOT="Not",e.TOK_LBRACE="Lbrace",e.TOK_LBRACKET="Lbracket",e.TOK_LPAREN="Lparen",e.TOK_LITERAL="Literal"})(A||(A={}));const Gr={"(":A.TOK_LPAREN,")":A.TOK_RPAREN,"*":A.TOK_STAR,",":A.TOK_COMMA,".":A.TOK_DOT,":":A.TOK_COLON,"@":A.TOK_CURRENT,$:A.TOK_ROOT,"]":A.TOK_RBRACKET,"{":A.TOK_LBRACE,"}":A.TOK_RBRACE},Du={"!":!0,"<":!0,"=":!0,">":!0},Mu={"	":!0,"\n":!0,"\r":!0," ":!0};class Bu{constructor(){this._current=0}tokenize(t){const n=[];this._current=0;let a,s,r;for(;this._current<t.length;)if(Lu(t[this._current]))a=this._current,s=this.consumeUnquotedIdentifier(t),n.push({start:a,type:A.TOK_UNQUOTEDIDENTIFIER,value:s});else if(Gr[t[this._current]]!==void 0)n.push({start:this._current,type:Gr[t[this._current]],value:t[this._current]}),this._current+=1;else if(qr(t[this._current]))r=this.consumeNumber(t),n.push(r);else if(t[this._current]==="[")r=this.consumeLBracket(t),n.push(r);else if(t[this._current]==='"')a=this._current,s=this.consumeQuotedIdentifier(t),n.push({start:a,type:A.TOK_QUOTEDIDENTIFIER,value:s});else if(t[this._current]==="'")a=this._current,s=this.consumeRawStringLiteral(t),n.push({start:a,type:A.TOK_LITERAL,value:s});else if(t[this._current]==="`"){a=this._current;const o=this.consumeLiteral(t);n.push({start:a,type:A.TOK_LITERAL,value:o})}else if(Du[t[this._current]]!==void 0)r=this.consumeOperator(t),r&&n.push(r);else if(Mu[t[this._current]]!==void 0)this._current+=1;else if(t[this._current]==="&")a=this._current,this._current+=1,t[this._current]==="&"?(this._current+=1,n.push({start:a,type:A.TOK_AND,value:"&&"})):n.push({start:a,type:A.TOK_EXPREF,value:"&"});else if(t[this._current]==="|")a=this._current,this._current+=1,t[this._current]==="|"?(this._current+=1,n.push({start:a,type:A.TOK_OR,value:"||"})):n.push({start:a,type:A.TOK_PIPE,value:"|"});else{const o=new Error(`Unknown character: ${t[this._current]}`);throw o.name="LexerError",o}return n}consumeUnquotedIdentifier(t){const n=this._current;for(this._current+=1;this._current<t.length&&Iu(t[this._current]);)this._current+=1;return t.slice(n,this._current)}consumeQuotedIdentifier(t){const n=this._current;this._current+=1;const a=t.length;for(;t[this._current]!=='"'&&this._current<a;){let s=this._current;t[s]==="\\"&&(t[s+1]==="\\"||t[s+1]==='"')?s+=2:s+=1,this._current=s}return this._current+=1,JSON.parse(t.slice(n,this._current))}consumeRawStringLiteral(t){const n=this._current;this._current+=1;const a=t.length;for(;t[this._current]!=="'"&&this._current<a;){let r=this._current;t[r]==="\\"&&(t[r+1]==="\\"||t[r+1]==="'")?r+=2:r+=1,this._current=r}return this._current+=1,t.slice(n+1,this._current-1).replace("\\'","'")}consumeNumber(t){const n=this._current;this._current+=1;const a=t.length;for(;qr(t[this._current])&&this._current<a;)this._current+=1;const s=parseInt(t.slice(n,this._current),10);return{start:n,value:s,type:A.TOK_NUMBER}}consumeLBracket(t){const n=this._current;return this._current+=1,t[this._current]==="?"?(this._current+=1,{start:n,type:A.TOK_FILTER,value:"[?"}):t[this._current]==="]"?(this._current+=1,{start:n,type:A.TOK_FLATTEN,value:"[]"}):{start:n,type:A.TOK_LBRACKET,value:"["}}consumeOperator(t){const n=this._current,a=t[n];if(this._current+=1,a==="!")return t[this._current]==="="?(this._current+=1,{start:n,type:A.TOK_NE,value:"!="}):{start:n,type:A.TOK_NOT,value:"!"};if(a==="<")return t[this._current]==="="?(this._current+=1,{start:n,type:A.TOK_LTE,value:"<="}):{start:n,type:A.TOK_LT,value:"<"};if(a===">")return t[this._current]==="="?(this._current+=1,{start:n,type:A.TOK_GTE,value:">="}):{start:n,type:A.TOK_GT,value:">"};if(a==="="&&t[this._current]==="=")return this._current+=1,{start:n,type:A.TOK_EQ,value:"=="}}consumeLiteral(t){this._current+=1;const n=this._current,a=t.length;for(;t[this._current]!=="`"&&this._current<a;){let o=this._current;t[o]==="\\"&&(t[o+1]==="\\"||t[o+1]==="`")?o+=2:o+=1,this._current=o}let s=t.slice(n,this._current).trimLeft();s=s.replace("\\`","`");const r=this.looksLikeJSON(s)?JSON.parse(s):JSON.parse(`"${s}"`);return this._current+=1,r}looksLikeJSON(t){const a=["true","false","null"],s="-0123456789";if(t==="")return!1;if('[{"'.includes(t[0])||a.includes(t))return!0;if(s.includes(t[0]))try{return JSON.parse(t),!0}catch{return!1}return!1}}const Ci=new Bu,we={[A.TOK_EOF]:0,[A.TOK_UNQUOTEDIDENTIFIER]:0,[A.TOK_QUOTEDIDENTIFIER]:0,[A.TOK_RBRACKET]:0,[A.TOK_RPAREN]:0,[A.TOK_COMMA]:0,[A.TOK_RBRACE]:0,[A.TOK_NUMBER]:0,[A.TOK_CURRENT]:0,[A.TOK_EXPREF]:0,[A.TOK_ROOT]:0,[A.TOK_PIPE]:1,[A.TOK_OR]:2,[A.TOK_AND]:3,[A.TOK_EQ]:5,[A.TOK_GT]:5,[A.TOK_LT]:5,[A.TOK_GTE]:5,[A.TOK_LTE]:5,[A.TOK_NE]:5,[A.TOK_FLATTEN]:9,[A.TOK_STAR]:20,[A.TOK_FILTER]:21,[A.TOK_DOT]:40,[A.TOK_NOT]:45,[A.TOK_LBRACE]:50,[A.TOK_LBRACKET]:55,[A.TOK_LPAREN]:60};class Fu{constructor(){this.index=0,this.tokens=[]}parse(t){this.loadTokens(t),this.index=0;const n=this.expression(0);if(this.lookahead(0)!==A.TOK_EOF){const a=this.lookaheadToken(0);this.errorToken(a,`Unexpected token type: ${a.type}, value: ${a.value}`)}return n}loadTokens(t){this.tokens=[...Ci.tokenize(t),{type:A.TOK_EOF,value:"",start:t.length}]}expression(t){const n=this.lookaheadToken(0);this.advance();let a=this.nud(n),s=this.lookahead(0);for(;t<we[s];)this.advance(),a=this.led(s,a),s=this.lookahead(0);return a}lookahead(t){return this.tokens[this.index+t].type}lookaheadToken(t){return this.tokens[this.index+t]}advance(){this.index+=1}nud(t){let n,a,s;switch(t.type){case A.TOK_LITERAL:return{type:"Literal",value:t.value};case A.TOK_UNQUOTEDIDENTIFIER:return{type:"Field",name:t.value};case A.TOK_QUOTEDIDENTIFIER:const r={type:"Field",name:t.value};if(this.lookahead(0)===A.TOK_LPAREN)throw new Error("Quoted identifier not allowed for function names.");return r;case A.TOK_NOT:return a=this.expression(we.Not),{type:"NotExpression",children:[a]};case A.TOK_STAR:return n={type:"Identity"},a=this.lookahead(0)===A.TOK_RBRACKET&&{type:"Identity"}||this.parseProjectionRHS(we.Star),{type:"ValueProjection",children:[n,a]};case A.TOK_FILTER:return this.led(t.type,{type:"Identity"});case A.TOK_LBRACE:return this.parseMultiselectHash();case A.TOK_FLATTEN:return n={type:A.TOK_FLATTEN,children:[{type:"Identity"}]},a=this.parseProjectionRHS(we.Flatten),{type:"Projection",children:[n,a]};case A.TOK_LBRACKET:return this.lookahead(0)===A.TOK_NUMBER||this.lookahead(0)===A.TOK_COLON?(a=this.parseIndexExpression(),this.projectIfSlice({type:"Identity"},a)):this.lookahead(0)===A.TOK_STAR&&this.lookahead(1)===A.TOK_RBRACKET?(this.advance(),this.advance(),a=this.parseProjectionRHS(we.Star),{children:[{type:"Identity"},a],type:"Projection"}):this.parseMultiselectList();case A.TOK_CURRENT:return{type:A.TOK_CURRENT};case A.TOK_ROOT:return{type:A.TOK_ROOT};case A.TOK_EXPREF:return s=this.expression(we.Expref),{type:"ExpressionReference",children:[s]};case A.TOK_LPAREN:const o=[];for(;this.lookahead(0)!==A.TOK_RPAREN;)this.lookahead(0)===A.TOK_CURRENT?(s={type:A.TOK_CURRENT},this.advance()):s=this.expression(0),o.push(s);return this.match(A.TOK_RPAREN),o[0];default:this.errorToken(t)}}led(t,n){let a;switch(t){case A.TOK_DOT:const s=we.Dot;return this.lookahead(0)!==A.TOK_STAR?(a=this.parseDotRHS(s),{type:"Subexpression",children:[n,a]}):(this.advance(),a=this.parseProjectionRHS(s),{type:"ValueProjection",children:[n,a]});case A.TOK_PIPE:return a=this.expression(we.Pipe),{type:A.TOK_PIPE,children:[n,a]};case A.TOK_OR:return a=this.expression(we.Or),{type:"OrExpression",children:[n,a]};case A.TOK_AND:return a=this.expression(we.And),{type:"AndExpression",children:[n,a]};case A.TOK_LPAREN:const r=n.name,o=[];let i;for(;this.lookahead(0)!==A.TOK_RPAREN;)this.lookahead(0)===A.TOK_CURRENT?(i={type:A.TOK_CURRENT},this.advance()):i=this.expression(0),this.lookahead(0)===A.TOK_COMMA&&this.match(A.TOK_COMMA),o.push(i);return this.match(A.TOK_RPAREN),{name:r,type:"Function",children:o};case A.TOK_FILTER:const u=this.expression(0);return this.match(A.TOK_RBRACKET),a=this.lookahead(0)===A.TOK_FLATTEN&&{type:"Identity"}||this.parseProjectionRHS(we.Filter),{type:"FilterProjection",children:[n,a,u]};case A.TOK_FLATTEN:const d={type:A.TOK_FLATTEN,children:[n]},f=this.parseProjectionRHS(we.Flatten);return{type:"Projection",children:[d,f]};case A.TOK_EQ:case A.TOK_NE:case A.TOK_GT:case A.TOK_GTE:case A.TOK_LT:case A.TOK_LTE:return this.parseComparator(n,t);case A.TOK_LBRACKET:const g=this.lookaheadToken(0);return g.type===A.TOK_NUMBER||g.type===A.TOK_COLON?(a=this.parseIndexExpression(),this.projectIfSlice(n,a)):(this.match(A.TOK_STAR),this.match(A.TOK_RBRACKET),a=this.parseProjectionRHS(we.Star),{type:"Projection",children:[n,a]});default:return this.errorToken(this.lookaheadToken(0))}}match(t){if(this.lookahead(0)===t){this.advance();return}else{const n=this.lookaheadToken(0);this.errorToken(n,`Expected ${t}, got: ${n.type}`)}}errorToken(t,n=""){const a=new Error(n||`Invalid token (${t.type}): "${t.value}"`);throw a.name="ParserError",a}parseIndexExpression(){if(this.lookahead(0)===A.TOK_COLON||this.lookahead(1)===A.TOK_COLON)return this.parseSliceExpression();const t={type:"Index",value:this.lookaheadToken(0).value};return this.advance(),this.match(A.TOK_RBRACKET),t}projectIfSlice(t,n){const a={type:"IndexExpression",children:[t,n]};return n.type==="Slice"?{children:[a,this.parseProjectionRHS(we.Star)],type:"Projection"}:a}parseSliceExpression(){const t=[null,null,null];let n=0,a=this.lookahead(0);for(;a!==A.TOK_RBRACKET&&n<3;){if(a===A.TOK_COLON)n+=1,this.advance();else if(a===A.TOK_NUMBER)t[n]=this.lookaheadToken(0).value,this.advance();else{const s=this.lookaheadToken(0);this.errorToken(s,`Syntax error, unexpected token: ${s.value}(${s.type})`)}a=this.lookahead(0)}return this.match(A.TOK_RBRACKET),{children:t,type:"Slice"}}parseComparator(t,n){const a=this.expression(we[n]);return{type:"Comparator",name:n,children:[t,a]}}parseDotRHS(t){const n=this.lookahead(0);if([A.TOK_UNQUOTEDIDENTIFIER,A.TOK_QUOTEDIDENTIFIER,A.TOK_STAR].includes(n))return this.expression(t);if(n===A.TOK_LBRACKET)return this.match(A.TOK_LBRACKET),this.parseMultiselectList();if(n===A.TOK_LBRACE)return this.match(A.TOK_LBRACE),this.parseMultiselectHash();const s=this.lookaheadToken(0);this.errorToken(s,`Syntax error, unexpected token: ${s.value}(${s.type})`)}parseProjectionRHS(t){if(we[this.lookahead(0)]<10)return{type:"Identity"};if(this.lookahead(0)===A.TOK_LBRACKET)return this.expression(t);if(this.lookahead(0)===A.TOK_FILTER)return this.expression(t);if(this.lookahead(0)===A.TOK_DOT)return this.match(A.TOK_DOT),this.parseDotRHS(t);const n=this.lookaheadToken(0);this.errorToken(n,`Syntax error, unexpected token: ${n.value}(${n.type})`)}parseMultiselectList(){const t=[];for(;this.lookahead(0)!==A.TOK_RBRACKET;){const n=this.expression(0);if(t.push(n),this.lookahead(0)===A.TOK_COMMA&&(this.match(A.TOK_COMMA),this.lookahead(0)===A.TOK_RBRACKET))throw new Error("Unexpected token Rbracket")}return this.match(A.TOK_RBRACKET),{type:"MultiSelectList",children:t}}parseMultiselectHash(){const t=[],n=[A.TOK_UNQUOTEDIDENTIFIER,A.TOK_QUOTEDIDENTIFIER];let a,s,r;for(;;){if(a=this.lookaheadToken(0),!n.includes(a.type))throw new Error(`Expecting an identifier token, got: ${a.type}`);if(s=a.value,this.advance(),this.match(A.TOK_COLON),r=this.expression(0),t.push({value:r,type:"KeyValuePair",name:s}),this.lookahead(0)===A.TOK_COMMA)this.match(A.TOK_COMMA);else if(this.lookahead(0)===A.TOK_RBRACE){this.match(A.TOK_RBRACE);break}}return{type:"MultiSelectHash",children:t}}}const Ri=new Fu;var M;(function(e){e[e.TYPE_NUMBER=0]="TYPE_NUMBER",e[e.TYPE_ANY=1]="TYPE_ANY",e[e.TYPE_STRING=2]="TYPE_STRING",e[e.TYPE_ARRAY=3]="TYPE_ARRAY",e[e.TYPE_OBJECT=4]="TYPE_OBJECT",e[e.TYPE_BOOLEAN=5]="TYPE_BOOLEAN",e[e.TYPE_EXPREF=6]="TYPE_EXPREF",e[e.TYPE_NULL=7]="TYPE_NULL",e[e.TYPE_ARRAY_NUMBER=8]="TYPE_ARRAY_NUMBER",e[e.TYPE_ARRAY_STRING=9]="TYPE_ARRAY_STRING"})(M||(M={}));class $u{constructor(t){this.TYPE_NAME_TABLE={[M.TYPE_NUMBER]:"number",[M.TYPE_ANY]:"any",[M.TYPE_STRING]:"string",[M.TYPE_ARRAY]:"array",[M.TYPE_OBJECT]:"object",[M.TYPE_BOOLEAN]:"boolean",[M.TYPE_EXPREF]:"expression",[M.TYPE_NULL]:"null",[M.TYPE_ARRAY_NUMBER]:"Array<number>",[M.TYPE_ARRAY_STRING]:"Array<string>"},this.functionAbs=([n])=>Math.abs(n),this.functionAvg=([n])=>{let a=0;for(let s=0;s<n.length;s+=1)a+=n[s];return a/n.length},this.functionCeil=([n])=>Math.ceil(n),this.functionContains=n=>{const[a,s]=n;return a.includes(s)},this.functionEndsWith=n=>{const[a,s]=n;return a.includes(s,a.length-s.length)},this.functionFloor=([n])=>Math.floor(n),this.functionJoin=n=>{const[a,s]=n;return s.join(a)},this.functionKeys=([n])=>Object.keys(n),this.functionLength=([n])=>_n(n)?Object.keys(n).length:n.length,this.functionMap=n=>{if(!this._interpreter)return[];const a=[],s=this._interpreter,r=n[0],o=n[1];for(let i=0;i<o.length;i+=1)a.push(s.visit(r,o[i]));return a},this.functionMax=([n])=>{if(!n.length)return null;if(this.getTypeName(n[0])===M.TYPE_NUMBER)return Math.max(...n);const s=n;let r=s[0];for(let o=1;o<s.length;o+=1)r.localeCompare(s[o])<0&&(r=s[o]);return r},this.functionMaxBy=n=>{const a=n[1],s=n[0],r=this.createKeyFunction(a,[M.TYPE_NUMBER,M.TYPE_STRING]);let o=-1/0,i,l;for(let u=0;u<s.length;u+=1)l=r&&r(s[u]),l!==void 0&&l>o&&(o=l,i=s[u]);return i},this.functionMerge=n=>{let a={};for(let s=0;s<n.length;s+=1){const r=n[s];a=Object.assign(a,r)}return a},this.functionMin=([n])=>{if(!n.length)return null;if(this.getTypeName(n[0])===M.TYPE_NUMBER)return Math.min(...n);const s=n;let r=s[0];for(let o=1;o<s.length;o+=1)s[o].localeCompare(r)<0&&(r=s[o]);return r},this.functionMinBy=n=>{const a=n[1],s=n[0],r=this.createKeyFunction(a,[M.TYPE_NUMBER,M.TYPE_STRING]);let o=1/0,i,l;for(let u=0;u<s.length;u+=1)l=r&&r(s[u]),l!==void 0&&l<o&&(o=l,i=s[u]);return i},this.functionNotNull=n=>{for(let a=0;a<n.length;a+=1)if(this.getTypeName(n[a])!==M.TYPE_NULL)return n[a];return null},this.functionReverse=([n])=>{if(this.getTypeName(n)===M.TYPE_STRING){const r=n;let o="";for(let i=r.length-1;i>=0;i-=1)o+=r[i];return o}const s=n.slice(0);return s.reverse(),s},this.functionSort=([n])=>[...n].sort(),this.functionSortBy=n=>{if(!this._interpreter)return[];const a=n[0].slice(0);if(a.length===0)return a;const s=this._interpreter,r=n[1],o=this.getTypeName(s.visit(r,a[0]));if(o!==void 0&&![M.TYPE_NUMBER,M.TYPE_STRING].includes(o))throw new Error(`TypeError: unexpected type (${this.TYPE_NAME_TABLE[o]})`);const i=[];for(let l=0;l<a.length;l+=1)i.push([l,a[l]]);i.sort((l,u)=>{const d=s.visit(r,l[1]),f=s.visit(r,u[1]);if(this.getTypeName(d)!==o)throw new Error(`TypeError: expected (${this.TYPE_NAME_TABLE[o]}), received ${this.TYPE_NAME_TABLE[this.getTypeName(d)]}`);if(this.getTypeName(f)!==o)throw new Error(`TypeError: expected (${this.TYPE_NAME_TABLE[o]}), received ${this.TYPE_NAME_TABLE[this.getTypeName(f)]}`);return d>f?1:d<f?-1:l[0]-u[0]});for(let l=0;l<i.length;l+=1)a[l]=i[l][1];return a},this.functionStartsWith=([n,a])=>n.startsWith(a),this.functionSum=([n])=>n.reduce((a,s)=>a+s,0),this.functionToArray=([n])=>this.getTypeName(n)===M.TYPE_ARRAY?n:[n],this.functionToNumber=([n])=>{const a=this.getTypeName(n);let s;return a===M.TYPE_NUMBER?n:a===M.TYPE_STRING&&(s=+n,!isNaN(s))?s:null},this.functionToString=([n])=>this.getTypeName(n)===M.TYPE_STRING?n:JSON.stringify(n),this.functionType=([n])=>{switch(this.getTypeName(n)){case M.TYPE_NUMBER:return"number";case M.TYPE_STRING:return"string";case M.TYPE_ARRAY:return"array";case M.TYPE_OBJECT:return"object";case M.TYPE_BOOLEAN:return"boolean";case M.TYPE_EXPREF:return"expref";case M.TYPE_NULL:return"null";default:return}},this.functionValues=([n])=>Object.values(n),this.functionTable={abs:{_func:this.functionAbs,_signature:[{types:[M.TYPE_NUMBER]}]},avg:{_func:this.functionAvg,_signature:[{types:[M.TYPE_ARRAY_NUMBER]}]},ceil:{_func:this.functionCeil,_signature:[{types:[M.TYPE_NUMBER]}]},contains:{_func:this.functionContains,_signature:[{types:[M.TYPE_STRING,M.TYPE_ARRAY]},{types:[M.TYPE_ANY]}]},ends_with:{_func:this.functionEndsWith,_signature:[{types:[M.TYPE_STRING]},{types:[M.TYPE_STRING]}]},floor:{_func:this.functionFloor,_signature:[{types:[M.TYPE_NUMBER]}]},join:{_func:this.functionJoin,_signature:[{types:[M.TYPE_STRING]},{types:[M.TYPE_ARRAY_STRING]}]},keys:{_func:this.functionKeys,_signature:[{types:[M.TYPE_OBJECT]}]},length:{_func:this.functionLength,_signature:[{types:[M.TYPE_STRING,M.TYPE_ARRAY,M.TYPE_OBJECT]}]},map:{_func:this.functionMap,_signature:[{types:[M.TYPE_EXPREF]},{types:[M.TYPE_ARRAY]}]},max:{_func:this.functionMax,_signature:[{types:[M.TYPE_ARRAY_NUMBER,M.TYPE_ARRAY_STRING]}]},max_by:{_func:this.functionMaxBy,_signature:[{types:[M.TYPE_ARRAY]},{types:[M.TYPE_EXPREF]}]},merge:{_func:this.functionMerge,_signature:[{types:[M.TYPE_OBJECT],variadic:!0}]},min:{_func:this.functionMin,_signature:[{types:[M.TYPE_ARRAY_NUMBER,M.TYPE_ARRAY_STRING]}]},min_by:{_func:this.functionMinBy,_signature:[{types:[M.TYPE_ARRAY]},{types:[M.TYPE_EXPREF]}]},not_null:{_func:this.functionNotNull,_signature:[{types:[M.TYPE_ANY],variadic:!0}]},reverse:{_func:this.functionReverse,_signature:[{types:[M.TYPE_STRING,M.TYPE_ARRAY]}]},sort:{_func:this.functionSort,_signature:[{types:[M.TYPE_ARRAY_STRING,M.TYPE_ARRAY_NUMBER]}]},sort_by:{_func:this.functionSortBy,_signature:[{types:[M.TYPE_ARRAY]},{types:[M.TYPE_EXPREF]}]},starts_with:{_func:this.functionStartsWith,_signature:[{types:[M.TYPE_STRING]},{types:[M.TYPE_STRING]}]},sum:{_func:this.functionSum,_signature:[{types:[M.TYPE_ARRAY_NUMBER]}]},to_array:{_func:this.functionToArray,_signature:[{types:[M.TYPE_ANY]}]},to_number:{_func:this.functionToNumber,_signature:[{types:[M.TYPE_ANY]}]},to_string:{_func:this.functionToString,_signature:[{types:[M.TYPE_ANY]}]},type:{_func:this.functionType,_signature:[{types:[M.TYPE_ANY]}]},values:{_func:this.functionValues,_signature:[{types:[M.TYPE_OBJECT]}]}},this._interpreter=t}registerFunction(t,n,a){if(t in this.functionTable)throw new Error(`Function already defined: ${t}()`);this.functionTable[t]={_func:n.bind(this),_signature:a}}callFunction(t,n){const a=this.functionTable[t];if(a===void 0)throw new Error(`Unknown function: ${t}()`);return this.validateArgs(t,n,a._signature),a._func.call(this,n)}validateInputSignatures(t,n){for(let a=0;a<n.length;a+=1)if("variadic"in n[a]&&a!==n.length-1)throw new Error(`ArgumentError: ${t}() 'variadic' argument ${a+1} must occur last`)}validateArgs(t,n,a){var s,r;let o;this.validateInputSignatures(t,a);const i=a.filter(c=>{var m;return(m=!c.optional)!==null&&m!==void 0?m:!1}).length,l=(r=(s=a[a.length-1])===null||s===void 0?void 0:s.variadic)!==null&&r!==void 0?r:!1,u=n.length<i,d=n.length>a.length,f=u&&(!l&&i>1||l)?"at least ":"";if(l&&u||!l&&(u||d))throw o=a.length>1,new Error(`ArgumentError: ${t}() takes ${f}${i} argument${o&&"s"||""} but received ${n.length}`);let g,p,h;for(let c=0;c<a.length;c+=1){h=!1,g=a[c].types,p=this.getTypeName(n[c]);let m;for(m=0;m<g.length;m+=1)if(p!==void 0&&this.typeMatches(p,g[m],n[c])){h=!0;break}if(!h&&p!==void 0){const _=g.map(y=>this.TYPE_NAME_TABLE[y]).join(" | ");throw new Error(`TypeError: ${t}() expected argument ${c+1} to be type (${_}) but received type ${this.TYPE_NAME_TABLE[p]} instead.`)}}}typeMatches(t,n,a){if(n===M.TYPE_ANY)return!0;if(n===M.TYPE_ARRAY_STRING||n===M.TYPE_ARRAY_NUMBER||n===M.TYPE_ARRAY){if(n===M.TYPE_ARRAY)return t===M.TYPE_ARRAY;if(t===M.TYPE_ARRAY){let s;n===M.TYPE_ARRAY_NUMBER?s=M.TYPE_NUMBER:n===M.TYPE_ARRAY_STRING&&(s=M.TYPE_STRING);for(let r=0;r<a.length;r+=1){const o=this.getTypeName(a[r]);if(o!==void 0&&s!==void 0&&!this.typeMatches(o,s,a[r]))return!1}return!0}}else return t===n;return!1}getTypeName(t){switch(Object.prototype.toString.call(t)){case"[object String]":return M.TYPE_STRING;case"[object Number]":return M.TYPE_NUMBER;case"[object Array]":return M.TYPE_ARRAY;case"[object Boolean]":return M.TYPE_BOOLEAN;case"[object Null]":return M.TYPE_NULL;case"[object Object]":return t.jmespathType===A.TOK_EXPREF?M.TYPE_EXPREF:M.TYPE_OBJECT;default:return}}createKeyFunction(t,n){if(!this._interpreter)return;const a=this._interpreter;return r=>{const o=a.visit(t,r);if(!n.includes(this.getTypeName(o))){const i=`TypeError: expected one of (${n.map(l=>this.TYPE_NAME_TABLE[l]).join(" | ")}), received ${this.TYPE_NAME_TABLE[this.getTypeName(o)]}`;throw new Error(i)}return o}}}class Uu{constructor(){this._rootValue=null,this.runtime=new $u(this)}search(t,n){return this._rootValue=n,this.visit(t,n)}visit(t,n){let a,s,r,o,i,l,u,d,f,g,p;switch(t.type){case"Field":return n===null?null:_n(n)?(l=n[t.name],l===void 0?null:l):null;case"Subexpression":for(r=this.visit(t.children[0],n),g=1;g<t.children.length;g+=1)if(r=this.visit(t.children[1],r),r===null)return null;return r;case"IndexExpression":return u=this.visit(t.children[0],n),d=this.visit(t.children[1],u),d;case"Index":if(!Array.isArray(n))return null;let h=t.value;return h<0&&(h=n.length+h),r=n[h],r===void 0&&(r=null),r;case"Slice":if(!Array.isArray(n))return null;const c=[...t.children],m=this.computeSliceParams(n.length,c),[_,y,T]=m;if(r=[],T>0)for(g=_;g<y;g+=T)r.push(n[g]);else for(g=_;g>y;g+=T)r.push(n[g]);return r;case"Projection":if(p=this.visit(t.children[0],n),!Array.isArray(p))return null;for(f=[],g=0;g<p.length;g+=1)s=this.visit(t.children[1],p[g]),s!==null&&f.push(s);return f;case"ValueProjection":if(p=this.visit(t.children[0],n),!_n(p))return null;f=[];const S=Object.values(p);for(g=0;g<S.length;g+=1)s=this.visit(t.children[1],S[g]),s!==null&&f.push(s);return f;case"FilterProjection":if(p=this.visit(t.children[0],n),!Array.isArray(p))return null;const x=[],L=[];for(g=0;g<p.length;g+=1)a=this.visit(t.children[2],p[g]),zn(a)||x.push(p[g]);for(let P=0;P<x.length;P+=1)s=this.visit(t.children[1],x[P]),s!==null&&L.push(s);return L;case"Comparator":switch(o=this.visit(t.children[0],n),i=this.visit(t.children[1],n),t.name){case A.TOK_EQ:r=ua(o,i);break;case A.TOK_NE:r=!ua(o,i);break;case A.TOK_GT:r=o>i;break;case A.TOK_GTE:r=o>=i;break;case A.TOK_LT:r=o<i;break;case A.TOK_LTE:r=o<=i;break;default:throw new Error(`Unknown comparator: ${t.name}`)}return r;case A.TOK_FLATTEN:const w=this.visit(t.children[0],n);if(!Array.isArray(w))return null;let I=[];for(g=0;g<w.length;g+=1)s=w[g],Array.isArray(s)?I=[...I,...s]:I.push(s);return I;case"Identity":return n;case"MultiSelectList":if(n===null)return null;for(f=[],g=0;g<t.children.length;g+=1)f.push(this.visit(t.children[g],n));return f;case"MultiSelectHash":if(n===null)return null;f={};let O;for(g=0;g<t.children.length;g+=1)O=t.children[g],f[O.name]=this.visit(O.value,n);return f;case"OrExpression":return a=this.visit(t.children[0],n),zn(a)&&(a=this.visit(t.children[1],n)),a;case"AndExpression":return o=this.visit(t.children[0],n),zn(o)?o:this.visit(t.children[1],n);case"NotExpression":return o=this.visit(t.children[0],n),zn(o);case"Literal":return t.value;case A.TOK_PIPE:return u=this.visit(t.children[0],n),this.visit(t.children[1],u);case A.TOK_CURRENT:return n;case A.TOK_ROOT:return this._rootValue;case"Function":const B=[];for(let P=0;P<t.children.length;P+=1)B.push(this.visit(t.children[P],n));return this.runtime.callFunction(t.name,B);case"ExpressionReference":const K=t.children[0];return K.jmespathType=A.TOK_EXPREF,K;default:throw new Error(`Unknown node type: ${t.type}`)}}computeSliceParams(t,n){let[a,s,r]=n;if(r===null)r=1;else if(r===0){const i=new Error("Invalid slice, step cannot be 0");throw i.name="RuntimeError",i}const o=r<0;return a=a===null?o?t-1:0:this.capSliceRange(t,a,r),s=s===null?o?-1:t:this.capSliceRange(t,s,r),[a,s,r]}capSliceRange(t,n,a){let s=n;return s<0?(s+=t,s<0&&(s=a<0?-1:0)):s>=t&&(s=a<0?t-1:t),s}}const Fs=new Uu,Hu=M.TYPE_ANY,Ku=M.TYPE_ARRAY,Yu=M.TYPE_ARRAY_NUMBER,ju=M.TYPE_ARRAY_STRING,qu=M.TYPE_BOOLEAN,Gu=M.TYPE_EXPREF,Wu=M.TYPE_NULL,Ju=M.TYPE_NUMBER,Vu=M.TYPE_OBJECT,zu=M.TYPE_STRING;function Qu(e){return Ri.parse(e)}function Xu(e){return Ci.tokenize(e)}const Zu=(e,t,n)=>{Fs.runtime.registerFunction(e,t,n)};function ep(e,t){const n=Ri.parse(t);return Fs.search(n,e)}const tp=Fs,bt={compile:Qu,registerFunction:Zu,search:ep,tokenize:Xu,TreeInterpreter:tp,TYPE_ANY:Hu,TYPE_ARRAY_NUMBER:Yu,TYPE_ARRAY_STRING:ju,TYPE_ARRAY:Ku,TYPE_BOOLEAN:qu,TYPE_EXPREF:Gu,TYPE_NULL:Wu,TYPE_NUMBER:Ju,TYPE_OBJECT:Vu,TYPE_STRING:zu},ct=class ct{static async appendPrompt(t,n){jr(t,LZString.compressToUTF16(JSON.stringify(n))).then(async()=>{ln().then(a=>{a=a.filter(s=>s.indexOf(this.DELIM_PROMPTS)!=-1),a.length>ct.MAX_PROMPTS_VALS&&Wa(a[0])})}).catch(a=>console.error("~IDB Failed | ",a))}static async appendVIR_products(t){t.forEach(n=>{let a=JSON.stringify({ts:Date.now(),name:n[1]});jr(n[0],LZString.compressToUTF16(a)).then(async()=>{}).catch(s=>console.error("~IDB Failed | ",s))})}static async keys(t,n){ln().then(a=>{a=a.filter(s=>s.indexOf(t)!=-1),n&&n(a)})}static async get(t,n){Ru(t).then(a=>{try{a=JSON.parse(LZString.decompressFromUTF16(a))}catch{}finally{n&&n(a)}})}static async entries(t,n){Nu().then(a=>{a=a.filter(s=>s[0].indexOf(t)!=-1),a=a.map(s=>{try{s[1]=JSON.parse(LZString.decompressFromUTF16(s[1]))}catch{}finally{}return s}),n&&n(a)})}static compr(t){return t}static decompr(t){return t}static async act(t,n,a){let s="";switch(t){case"PROMPTS_COUNT":ln().then(o=>{o=o.filter(i=>i.indexOf(this.DELIM_PROMPTS)!=-1),s=`There are ${o.length} prompts in local IDB storage. The current max is ${this.MAX_PROMPTS_VALS}.`,s&&a&&a(s)});break;case"PROMPTS_IMPORT":console.log("~ PROMPTS_IMPORT | ");break;case"PROMPTS_EXPORT":console.log("~ PROMPTS_EXPORT | ");break;case"PROMPTS_CLEAR":ln().then(o=>{o.forEach(i=>{i.indexOf(this.DELIM_PROMPTS)!=-1&&i.split(ct.DELIM_PROMPTS)[0]==n&&Wa(i)})}),s="The Prompt history has been removed for UPI: "+n,console.log("~ PROMPTS_CLEAR ------ | ",s);break;case"VIR_COUNT":ln().then(o=>{o=o.filter(i=>i.indexOf(this.DELIM_VIR)!=-1),s=`There are ${o.length} VNR names in local IDB storage.`,s&&a&&a(s)});break;case"VIR_CLEAR":let r=0;await ln().then(o=>{o.forEach(i=>{i.indexOf(this.DELIM_VIR)!=-1&&i.split(ct.DELIM_VIR)[0]==n&&(r++,Wa(i))})}),s=`The VNR Names have been removed for UPI: ${n} (Total Deleted: ${r})`;break;case"FEATURE_CLEAR":localStorage.getItem("feature_flags")&&localStorage.removeItem("feature_flags"),s="Features have been reset to default. Refresh.";break}console.log("~ resultMsg | ",s),s&&a&&a(s)}};ct.MAX_TYPEAHEAD_ROWS=14,ct.MAX_PROMPTS_VALS=50,ct.DELIM_PROMPTS="_",ct.DELIM_VIR="-",ct.DELIM_SNDX="|";let Zt=ct;const ve=_d("AppState",()=>{const e=ht(),t="DEV",n="BMA Tourney v0.0.5 ",a="#app",s=St({APP__ROUTE_SYNC:"APP.ROUTE_SYNC",WC__TOURN_ACTION:"WC.TOURN_ACTION",WC__APP__HEAD_TOP:"WC.APP.HEAD_TOP",WC__APP__HEAD_TOP__LOGO:"WC.APP.HEAD_TOP.LOGO",WC__APP__HEAD_TOP__USER_PROFILE:"WC.APP.HEAD_TOP.USER_PROFILE",WC__APP__HEAD_MID:"WC.APP.HEAD_MID",WC__APP__HEAD_MID__HEAD_MID_LOBBY:"WC.APP.HEAD_MID.HEAD_MID_LOBBY",WC__APP__HEAD_MID__HEAD_MID_MY:"WC.APP.HEAD_MID.HEAD_MID_MY",WC__APP__HEAD_MID__HEAD_MID_COMPLETED:"WC.APP.HEAD_MID.HEAD_MID_COMPLETED",WC__APP__HEAD_MID__HEAD_MID_LEADERBOARD:"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD",WC__APP__HEAD_MID__HEAD_MID_SQUAD:"WC.APP.HEAD_MID.HEAD_MID_SQUAD",WC__APP__HEAD_SPORTS:"WC.APP.HEAD_SPORTS",WC__APP__HEAD_SPORTS__HEAD_SPORTS_DRAG_START:"WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START",WC__APP__FOOT:"WC.APP.FOOT",WC__APP__FOOT__ALL_SPORTS:"WC.APP.FOOT.ALL_SPORTS",WC__APP__FOOT__MY_TOURNEYS:"WC.APP.FOOT.MY_TOURNEYS",WC__APP__FOOT__LEADERBOARD:"WC.APP.FOOT.LEADERBOARD",WC__APP__FOOT__MY_PROFILE:"WC.APP.FOOT.MY_PROFILE",ROUTE__HOME_ONMOUNT:"ROUTE.HOME_ONMOUNT",ROUTE__HOME_HYDRATE:"ROUTE.HOME_HYDRATE",ROUTE__HOME__USER_PROFILE:"ROUTE.HOME.USER_PROFILE",SSE__CORE__TOURN_SYNC:"SSE.CORE.TOURN_SYNC",CANVAS__HYDRATE__STATUS:"CANVAS.HYDRATE.STATUS",SODAPOP__HYDRATE__COREBETSLIP:"SODAPOP.HYDRATE.COREBETSLIP",COREBETSLIP:"COREBETSLIP",COREBETSLIP__BET:"COREBETSLIP.BET",COREBETSLIP__SPREAD:"COREBETSLIP.SPREAD",COREBETSLIP__MONEY:"COREBETSLIP.MONEY",COREBETSLIP__TOTAL:"COREBETSLIP.TOTAL",COREBETSLIP__CLOSE:"COREBETSLIP.CLOSE",COREBETSLIP__INTERSYNC:"COREBETSLIP.INTERSYNC",COREBETSLIP__TDSYNC:"COREBETSLIP.TDSYNC"});let r=St([]),o=St([]);const i=O=>{r.push(O),r.length>10&&(r.shift(),console.log("[appState] coreTourn exceeded 10 items, removed oldest")),console.log(`[appState] coreTourn length: ${r.length}`)},l=O=>{o.push(O),o.length>10&&(o.shift(),console.log("[appState] coreBetSlip exceeded 10 items, removed oldest")),console.log(`[appState] coreBetSlip length: ${o.length}`)},u=()=>{const O=localStorage.getItem("session_user");if(console.log("[appState] Loading session_user from localStorage:",O),O)try{const B=JSON.parse(O);return console.log("[appState] Parsed session_user:",B),B}catch(B){console.error("Failed to parse session_user from localStorage:",B)}return console.log("[appState] No saved session, returning default"),{authenticated:!1,userName:"",name:"",fname:"",lname:"",email:"",token:"",guid:""}},d=Je({session_app:{online:!0,route:"",version:n+t,buildmode:t},session_log:[],session_ui:{orientation:"landscape",isTouch:"utils.isTouch()"},session_user:u()}),f=Je({commands:["clear","debug","export","feature","help","logout","reload","route","theme","version","workflow"],features:{theme:{state:"dark"},motif:{state:"brand"},lang:{state:"en"},sse:{state:!0},disable_existing_bet_btn:{state:!1},animation:{state:!0},audio:{state:!0},contextmenu:{state:!1},debug:{state:!1},guided_tour:{state:!1}},env_override:{DEV:{contextmenu:{state:!1}},QA:{contextmenu:{state:!0}},PROD:{contextmenu:{state:!1},sse:!0}}}),g=()=>{if(!localStorage.getItem("feature_flags"))localStorage.setItem("feature_flags",Zt.compr(JSON.stringify(f.value.features)));else{let O=Zt.decompr(localStorage.getItem("feature_flags"));O=Object.assign(f.value.features,JSON.parse(O));for(let B in O)typeof f.value?.env_override[t][B]<"u"&&(O[B]=f.value.env_override[t][B]);localStorage.setItem("feature_flags",Zt.compr(JSON.stringify(f.value.features=O)))}},p=()=>{const O=document.querySelector(a);if(O){const B=O.dataset;for(let K in B){const P=K.replace(/^sync/,""),V=Object.keys(f.value.features).find(U=>U.toLowerCase()===P.toLowerCase());if(V){const U=f.value.features[V]?.state;U&&(B[K]=U)}}}},h=(O="Theme",B={state:"dark"})=>{const K=document.querySelector(a);K&&(K.dataset["sync"+O]=B.state)},c=(O="Theme",B={state:"dark"})=>{if(localStorage.getItem("feature_flags")&&B){let P=JSON.parse(Zt.decompr(localStorage.getItem("feature_flags")));P[O]={state:B.state},localStorage.setItem("feature_flags",Zt.compr(JSON.stringify(f.value.features=P))),h(O,B),J.publish("APP.ROUTE_SYNC",`{ "${O}": ${JSON.stringify(B)}}`)}},m=O=>{const B=f.value?.features?.Lang?.state;let K=T.value.microcopy.language.filter(P=>P.code==B)[0]?.copy;if(K=K.filter(P=>P[0]==O)[0],K)return K[1]},_=(O=":version")=>{let[B,K,P]=O.split(" ");switch(B=B.toLocaleLowerCase(),P=="true"&&(P=!0),P=="false"&&(P=!1),B){case":version":neodigmToast.q(`Version Q ${d.value.session_app.version}`,"brand");break;case":feature":c(K,{state:P});break;case":route":neodigmToast.q(`route ${K}`,"brand"),e.push({name:K});break}};g(),p();const y=St({designer:"guided_tour",notifications:{unread:0}}),T=Je({sports:Kn,microcopy:xu.getMeta()}),S=je(()=>d.value.session_user.fname+" "+d.value.session_user.lname),x=()=>{console.log("[appState] Saving session_user to localStorage:",d.value.session_user),localStorage.setItem("session_user",JSON.stringify(d.value.session_user))},L=()=>{localStorage.removeItem("session_user")};function w(O){return d.value.session_user.authenticated=!0,d.value.session_user.token=O,x(),d.value.session_app.route="chat"}function I(){return d.value.session_user.authenticated=!1,d.value.session_user.token="",d.value.session_user.guid="",L(),API_ORCH.setTJO(null),d.value.session_app.route="auth"}return{appCLIFeatures:f,appDesigner:y,appMeta:T,appSession:d,clearSessionUser:L,concatFirstLast:S,coreBetSlip:o,coreTourn:r,doCLI:_,doLogin:w,doLogout:I,hierTopics:s,i18n:m,pushCoreTourn:i,pushcoreBetSlip:l,saveSessionUser:x,setFeaturePersistPub:c}}),$e=class $e{static getTJO(){if(this.jsTJO)return this.jsTJO;let t=localStorage.getItem("tjo");return t&&(this.jsTJO=JSON.parse(t)),this.jsTJO}static setTJO(t){return t?localStorage.setItem("tjo",JSON.stringify(t)):localStorage.clear("tjo"),this.jsTJO=t}static setStateSignout(){typeof neodigmWired4Sound<"u"&&neodigmWired4Sound.sound(11),$e.setTJO(null),location.reload()}static async doSignin(t,n=null){const a={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}},r=await(await fetch(this.API_baseURI+"/bmac/"+this.API_ver+"/acctEntity/signin",a)).json();r.ok?(typeof mvvLegit<"u"&&mvvLegit&&r?.accessToken&&mvvLegit.doSignin(r?.accessToken),n&&n(r)):typeof neodigmToast<"u"&&neodigmToast.q("Invalid User ID|Password")}static async doSignup(t,n=null){const a={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}},r=await(await fetch(this.API_baseURI+"/bmac/"+this.API_ver+"/acctEntity",a)).json();if(r.ok)typeof neodigmToast<"u"&&neodigmToast.q("Account created successfully!|Please sign in","success"),n&&n(r);else{const o=r?.error||r?.message||"Signup failed. Please try again.";typeof neodigmToast<"u"&&neodigmToast.q(o,"danger"),n&&n(r)}}static async checkUserName(t,n=null){const a={method:"POST",body:JSON.stringify({userName:t}),headers:{"Content-Type":"application/json"}},r=await(await fetch(this.API_baseURI+"/bmac/"+this.API_ver+"/acctEntity/checkUserName",a)).json();return n&&n(r),r}static async resetHash(t,n,a=null){typeof neodigmAgent<"u"?neodigmAgent.genChronSync():Date.now();const s=typeof neodigmUtils<"u"?neodigmUtils.genHash(n):n,r={method:"POST",body:JSON.stringify({guid:t,hash:s}),headers:$e.genHeaders()},i=await(await fetch(this.API_baseURI+this.API_ver+"/acct/resetHash",r)).json();a&&a(i)}static genHeaders(t={}){let n={};return n.protomolecule=typeof neodigmAgent<"u"?neodigmAgent.genChronSync():Date.now(),n.Authorization="Bearer expired",n["Content-Type"]="application/json",$e.getTJO()&&(n.Authorization="Bearer "+$e.getTJO().tokens[0]),typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.class&&(n.role=SessionAcctEntity.oEntities.data.entity.class),typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.guid&&(n.guid=SessionAcctEntity.oEntities.data.entity.guid),typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.company&&(n.company=SessionAcctEntity.oEntities.data.entity.company),n}static async fetchTournaments(t=null){const n={method:"GET",headers:$e.genHeaders()},s=await(await fetch(this.API_baseURI+"/bmac/"+this.API_ver+"/coreTournaments",n)).json();return t&&t(s),s}static async fetchBetSlips(t,n="",a="",s=null){let r=`/bmac/${this.API_ver}/coreBetSlip/filter/${t}`;n&&(r+=`/${n}`),n&&a&&(r+=`/${a}`);const o={method:"GET",headers:$e.genHeaders()},l=await(await fetch(this.API_baseURI+r,o)).json();return s&&s(l),l}static async fetchLeaderboard(t,n="",a=null){let s=`/bmac/${this.API_ver}/coreLeaderboard?tourney=${t}`;n&&(s+=`&user=${n}`);const r={method:"GET",headers:$e.genHeaders()},i=await(await fetch(this.API_baseURI+s,r)).json();return a&&a(i),i}static async postBetSlips(t,n=null){const a=t.map(r=>{const o={method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}};return fetch(this.API_baseURI+"/bmac/"+this.API_ver+"/coreBetSlip/",o).then(i=>i.json())}),s=await Promise.all(a);return n&&n(s),s}};$e.API_baseURI="https://machfive-bmacdev-rest.onrender.com",$e.API_ver="v5",$e.jsState={},$e.jsMeta={},$e.jsTJO=null;let be=$e;const hn={shootConfetti(){if(typeof confetti=="function"){let a=function(s,r){confetti({...t,...r,particleCount:Math.floor(e*s)})};var n=a,e=200,t={origin:{y:.7}};a(.25,{zIndex:304,spread:26,startVelocity:55}),a(.2,{zIndex:304,spread:60}),a(.35,{zIndex:304,spread:100,decay:.91,scalar:.8}),a(.1,{zIndex:304,spread:120,startVelocity:25,decay:.92,scalar:1.2}),a(.1,{zIndex:304,spread:120,startVelocity:45})}},hardReload(){const e=new URLSearchParams(window.location.search);e.set("reload",new Date().getTime());const t=e.toString();window.location.search=t},isJSON(e){let t=!1;try{t=typeof JSON.parse(e)}catch{}return t=="object"},isTouch:function(){return typeof document.body.ontouchstart<"u"},prettyTimeExt(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"})},formatDateLocal(e,t={}){if(!e)return"TBD";let n=new Date(e);!e.includes("Z")&&!e.match(/[+-]\d{2}:\d{2}$/)&&(n=new Date(e+"Z"));const a={month:"short",day:"numeric",hour:"numeric",minute:"2-digit"};return n.toLocaleString(void 0,{...a,...t})},shallowDelta(e,t){if(Object.keys(t).length==0&&Object.keys(e).length>0)return e;let n={};for(const a in t)e[a]&&t[a]!=e[a]&&(n[a]=e[a]);return Object.keys(n).length>0?n:t},genLorumIpsum(e=1){}},Gt=(e,t)=>{const n=e.__vccOpts||e;for(const[a,s]of t)n[a]=s;return n},np={class:"auth-page"},ap={__name:"splash_route",setup(e){const t=ht(),n=wi();return ve(),setTimeout(()=>{n&&n.name=="splash_route"&&(mvvLegit&&mvvLegit.isRouteAllowed("home_route")?t.push({name:"home_route"}):t.push({name:"signin_route"}))},3e3),(a,s)=>(Qe(),ft("div",np,[...s[0]||(s[0]=[qt('<div class="auth-page-left" data-v-91dce2eb><div class="auth-bg" data-v-91dce2eb><div class="auth-bg-image" data-v-91dce2eb></div><div class="auth-bg-image" data-v-91dce2eb></div><div class="auth-bg-image" data-v-91dce2eb></div></div><div class="auth-overlay" data-v-91dce2eb></div><div class="auth-branding-content" data-v-91dce2eb><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-91dce2eb><p class="auth-branding-tagline" data-v-91dce2eb>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-91dce2eb>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-91dce2eb> © 2026 Bet Max Action. All rights reserved. </div></div>',1),k("div",{class:"auth-page-right"},[k("div",{class:"auth-card splash-content"},[k("p",{class:"splash-message"},"Loading your experience ..."),k("br"),k("br"),k("neodigm-juicebar",{role:"progressbar","data-n55-theme":"brand","data-n55-size":"medium",style:{"background-color":"#242424"}},[k("div")])])],-1)])]))}},Wr=Gt(ap,[["__scopeId","data-v-91dce2eb"]]);class sp extends HTMLElement{connectedCallback(){this.attachShadow({mode:"open"}),this.render()}static get observedAttributes(){return["sport","data-sync-theme"]}attributeChangedCallback(){this.shadowRoot&&this.render()}render(){this.getAttribute("sport");const n=document.getElementById("app")?.getAttribute("data-sync-theme").toLowerCase()||"dark",a=n==="dark";let s=this.getAttribute("data-sport-group")||"Soccer",r=s.replaceAll(" ","_");this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: inline-block;
          width: 30px; height: 30px;
          border-radius: 50%;
          background-color: ${a?"var( --app-core-color--gray-1__dark--brand )":"var( --app-core-color--gray-6__dark--brand )"};
          background-position: center;
          filter: brightness(70%);
          border: 1px solid var( --app-core-color--gray-4__dark--brand );
        }

        :host([data-sport-group="${s}"]) {
          background-image: ${"var( --sport-icon__"+r+"--"+n+" )"};
        }
      </style>
      <div class="icon"></div>
    `}}customElements.define("bma-sport-icon",sp);class rp extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-bma-tourn-caption","data-bma-tourn-entities","data-bma-tourn-entry_fee","data-bma-tourn-matches","data-bma-tourn-matches_expanded","data-bma-tourn-prize_distro","data-bma-tourn-sports_allowed","data-bma-tourn-status","data-sync-theme","data-bma-tourn-tagline","data-bma-tourn-tournament_dollars","data-bma-tourn-tags"]}connectedCallback(){this.render(),this.observeTheme(),this.attachEventListeners()}dispatchCardEvent(t,n={}){const a=new CustomEvent("bma-tournament-action",{bubbles:!0,composed:!0,detail:{action:t,tournamentId:this.getAttribute("data-bma-tourn-id"),tournamentGuid:this.getAttribute("data-bma-tourn-guid"),tournamentStatus:this.status,...n}});this.dispatchEvent(a)}attachEventListeners(){this.shadowRoot.addEventListener("click",t=>{const n=t.target.closest(".btn-info"),a=t.target.closest(".btn-join"),s=t.target.closest(".btn-play"),r=t.target.closest("bma-sport-icon");if(n){t.stopPropagation(),this.dispatchCardEvent("INFO");return}if(a){t.stopPropagation(),this.dispatchCardEvent("JOIN");return}if(s){t.stopPropagation(),this.dispatchCardEvent("PLAY");return}if(r){t.stopPropagation();const o=r.getAttribute("sport"),i=this.getSportInfo(o);this.dispatchCardEvent("SPORT_ICON",{sportKey:o,sportTitle:i.title,sportDescription:i.description});return}t.target.closest(".card")&&this.dispatchCardEvent("FOCUS")})}attributeChangedCallback(t,n,a){n!==a&&this.render()}observeTheme(){const t=document.getElementById("app");if(!t)return;new MutationObserver(()=>{this.render()}).observe(t,{attributes:!0,attributeFilter:["data-sync-theme"]})}getTheme(){return document.getElementById("app")?.getAttribute("data-sync-theme")||"dark"}get caption(){return this.getAttribute("data-bma-tourn-caption")||"Tournament"}get tournament_dollars(){return this.getAttribute("data-bma-tourn-tournament_dollars")||"0"}get entities(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const n=JSON.parse(t);return Array.isArray(n)?n.find(s=>Array.isArray(s))?.length||"0":n?.guids?.length||"0"}catch{return"0"}return"0"}get entitiesGuids(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const n=JSON.parse(t);return Array.isArray(n)?n.find(s=>Array.isArray(s))||[]:n?.guids||[]}catch{return[]}return[]}get entitiesData(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const n=JSON.parse(t);if(Array.isArray(n)){const a=n.find(r=>r&&typeof r=="object"&&!Array.isArray(r));return{current:n.find(r=>Array.isArray(r))?.length||0,max:parseInt(a?.max)||100}}return{current:n?.guids?.length||0,max:n?.max||100}}catch{return{current:0,max:100}}return{current:0,max:100}}isUserParticipating(){const n=document.getElementById("app")?.dataset?.userGuid;return n?this.entitiesGuids.includes(n):!1}getUserBadge(){const n=document.getElementById("app")?.dataset?.userGuid;if(!n)return null;const a=this.getAttribute("data-bma-tourn-tags");if(!a)return null;try{const s=JSON.parse(a);if(!Array.isArray(s))return null;const r=s.find(o=>typeof o=="object"&&o!==null?o[n]&&o[n].startsWith("--badge__ribbon--"):!1);return r?r[n]:null}catch{return null}}getBadgeClass(){const t=this.getUserBadge();if(!t)return"";const n=t.match(/--badge__ribbon--(\w+)/);return n?n[1]:""}getSportInfo(t){const n=Kn.find(a=>a.key===t);return n?{title:n.title,description:n.description}:{title:t,description:t}}get matches(){let t=this.getAttribute("data-bma-tourn-matches");return t&&(t=JSON.parse(t)),t?.length||"0"}get matches_expanded(){let t=this.getAttribute("data-bma-tourn-matches_expanded");return t&&(t=JSON.parse(t)),t||null}get marqueeText(){const t=this.matches_expanded;return!t||t.length===0?"   Exciting Sports Matchups Coming Soon!   ":"  "+t.map(a=>{const s=a.title||"Match";let r="TBD";if(a.scheduled_at)try{r=new Date(a.scheduled_at).toLocaleString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit",hour12:!0})}catch{r=a.scheduled_at}return`  ${s} @ ${r}  `}).join(" • ")+"  "}get tagline(){return this.getAttribute("data-bma-tourn-tagline")||""}get status(){return this.getAttribute("data-bma-tourn-status")||"upcoming"}get prizeDistro(){const t=this.getAttribute("data-bma-tourn-prize_distro");if(!t)return null;try{return JSON.parse(t)}catch{return t}}get entryFee(){return this.getAttribute("data-bma-tourn-entry_fee")||"Free"}get sportsAllowed(){const t=this.getAttribute("data-bma-tourn-sports_allowed");if(!t)return[];try{const n=JSON.parse(t);return Array.isArray(n)?n.map(a=>typeof a=="object"&&a.sport_key?a.sport_key:a):[n]}catch{return[t]}}get sportsDisplay(){const t=this.sportsAllowed;if(!Array.isArray(t)||t.length===0)return'<bma-sport-icon sport="default" data-sport-group="default"></bma-sport-icon>';const n=Math.min(t.length,3);let a="";for(let s=0;s<n;s++){const r=t[s].key,o=Kn.find(l=>l.key===r),i=o?o.group:"default";a+=`<bma-sport-icon sport="${r}" data-sport-group="${i}"></bma-sport-icon>`}return t.length>3&&(a+=`<span class="sport-count">+${t.length-3}</span>`),a}render(){const t=this.getTheme(),n=t==="dark",a=this.getAttribute("data-sync-theme")||t;this.shadowRoot.innerHTML=`
      <style>
        neodigm-marquee pre { color: var( --app-core-color--yellow-1__dark--brand ) !important; }
        :host {
          display: block;
          aspect-ratio: 1 / 1.2; /* width / height */
          width: 100%;
        }

        /* Small variant */
        :host([data-n55-size="small"]) {
          min-width: 192px;  /* 256px - 64px */
          max-width: 320px;  /* 384px - 64px */
        }

        /* Medium variant (default) */
        :host([data-n55-size="medium"]) {
          min-width: 256px;
          max-width: 384px;
        }

        /* Large variant */
        :host([data-n55-size="large"]) {
          min-width: 320px;  /* 256px + 64px */
          max-width: 448px;  /* 384px + 64px */
        }

        /* Tournament status-based styling */
        :host([data-bma-tourn-class="UPCOMING"]) .card {
          background: ${n?"linear-gradient(135deg, var( --app-core-color--gray-3__dark--brand ) 0%, var( --app-core-color--green-3__dark--brand ) 100%)":"linear-gradient(135deg, var( --app-core-color--gray-7__light--brand ) 0%, var( --app-core-color--green-5__light--brand ) 100%)"};

        }

        :host([data-bma-tourn-class="LOCKED"]) .card {
          background: ${n?"linear-gradient(135deg, var( --app-core-color--gray-3__dark--brand ) 0%, var( --app-core-color--yellow-3__dark--brand ) 100%)":"linear-gradient(135deg, var( --app-core-color--gray-7__light--brand ) 0%, var( --app-core-color--yellow-5__light--brand ) 100%)"};
        }

        :host([data-bma-tourn-class="COMPLETED"]) .card {
          background: ${n?"linear-gradient(135deg, var( --app-core-color--gray-3__dark--brand ) 0%, var( --app-core-color--red-1__dark--brand ) 100%)":"linear-gradient(135deg, var( --app-core-color--gray-7__light--brand ) 0%, var( --app-core-color--red-5__light--brand ) 100%)"};
        }

        /* Ribbon badges for tournament winners */
        .badge-ribbon {
          position: absolute;
          top: -8px;
          right: 2px;
          width: 48px;
          height: 56px;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          display: none;
          z-index: 10;
        }

        .badge-ribbon.visible {
          display: block;
        }

        /* Badge variants */
        .badge-ribbon.gold {
          background-image: var(--badge__ribbon--gold);
        }

        .badge-ribbon.silver {
          background-image: var(--badge__ribbon--silver);
        }

        .badge-ribbon.bronze {
          background-image: var(--badge__ribbon--bronze);
        }

        /* Wait state - blur and make unclickable */
        :host([data-bma-tourn-wait="true"]) .card {
          filter: blur(2px);
          opacity: 0.6;
          pointer-events: none;
          cursor: wait;
        }

        :host([data-bma-tourn-wait="true"]) {
          pointer-events: none;
          cursor: wait;
        }

        :host([data-bma-tourn-wait="true"])  neodigm-juicebar { position: absolute; display: block; width: 100%; top: 2px; }
        :host([data-bma-tourn-wait="false"]) neodigm-juicebar { display: none; }


        * {
          font-family: 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif !important;
        }

        .card {
          position: relative;
          background: ${n?"linear-gradient(135deg, var( --app-core-color--gray-3__dark--brand ) 0%, var( --app-core-color--gray-5__dark--brand ) 100%)":"linear-gradient(135deg, var( --app-core-color--gray-7__light--brand ) 0%, var( --app-core-color--gray-6__light--brand ) 100%)"};

          border: 2px solid ${n?"var( --app-core-color--gray-3__dark--brand )":"var( --app-core-color--gray-6__light--brand )"};
          border-radius: 10px;
          color: ${n?"#fff":"#000"};
          cursor: pointer;
          height: 100%;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          user-select: none;
        }

        .card-header {
          display: grid;
          grid-template-rows: 64px auto;
          height: 30%;
          padding: 16px;
          background:  ${n?"var( --app-core-color--gray-2__dark--brand )":"var( --app-core-color--gray-4__light--brand )"};
          border-radius: 8px 8px 0 0;
          clip-path: polygon(
            0 0,
            100% 0,
            100% calc(100% - 12px),
            50% 100%,
            50% 100%,
            0 calc(100% - 12px)
          );
        }

        .card-header > section {
          min-width: 0;
        }

        .txt-caption {
          font-size: 16px; font-weight: 300;
          color: var( --app-core-color--yellow-3__dark--brand );
          margin: 0 0 4px 0;
          line-height: 1.3;
          overflow: hidden;
          text-overflow: ellipsis;
          text-align: center;
          white-space: nowrap;
        }

        .tagline {
          font-size: 13px;
          color: ${n?"var( --app-core-color--gray-6__light--brand )":"var( --app-core-color--white-5__dark--brand )"};
          margin: 0 0 6px 0;
          line-height: 1.4;
          overflow: hidden;
          text-overflow: ellipsis;
          text-align: center;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          font-style: italic;
          word-wrap: break-word;
        }

        .meta-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 0.5rem;
        }

        .sport-tag {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.75rem;
          color: ${n?"#b0b0b0":"#666"};
          text-transform: uppercase;
          font-weight: 500;
        }

        .sport-count {
          margin-left: 0.25rem;
          font-size: 0.7rem;
          color: ${n?"#888":"#999"};
        }

        .status {
          padding: 0.25rem 0.625rem;
          border-radius: 4px;
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .card[data-sync-theme="light"] .status             { background: rgba(200, 200, 200); }
        .card[data-sync-theme="light"] .status.UPCOMING    { color: var(--app-core-color--green-5__dark--brand); }
        .card[data-sync-theme="light"] .status.LOCKED      { color: var(--app-core-color--yellow-2__light--brand); }
        .card[data-sync-theme="light"] .status.COMPLETED   { color: var(--app-core-color--red-2__light--brand); }

        .card[data-sync-theme="dark"] .status             { background: rgba(128, 128, 128, 0.2); }
        .card[data-sync-theme="dark"] .status.UPCOMING    { color: var(--app-core-color--green-4__dark--brand); }
        .card[data-sync-theme="dark"] .status.LOCKED      { color: var(--app-core-color--yellow-2__light--brand); }
        .card[data-sync-theme="dark"] .status.COMPLETED   { color: var(--app-core-color--red-3__light--brand); }

        .card-body {
          display: grid;
          grid-template-rows: auto 1fr auto auto;
          flex: 1;
          margin-top: 24px;
        }

        .info-item {
          display: grid;
          grid-template-columns: 32% 32% 32%;
          gap: 2%;
          text-align: center;
          margin: 0 4px;
          min-width: 0;
          width: calc(100% - 8px);
        }

        .info-item .info-cell {
          border: 1px solid #66666632;
          border-radius: 12px;
        }

        .info-item .info-cell > P {
          margin: 8px 0;
        }

        .info-cell .info-label {
          font-size: 0.6rem;
          color: ${n?"#CACACA":"#666"};
          text-transform: uppercase;
          font-weight: 500;
          letter-spacing: 0.5px;
        }

        .info-cell .info-value {
          font-size: 1.125rem;
          font-weight: 500;
          color: ${n?"#fff":"#000"};
        }

        /* Action buttons */
        .card-actions {
          display: flex;
          gap: 8px;
          margin-top: 16px;
          padding: 0 16px 16px;
        }

        .btn-info,
        .btn-join,
        .btn-play {
          flex: 1;
          height: 32px;
          padding: 5px;
          border: none;
          border-radius: 6px;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .btn-info {
          background: ${n?"var(--app-core-color--gray-4__dark--brand)":"var(--app-core-color--gray-6__light--brand)"};
          color: ${n?"#fff":"#000"};
        }

        .btn-info:hover {
          background: ${n?"var(--app-core-color--gray-5__dark--brand)":"var(--app-core-color--gray-5__light--brand)"};
        }

        .btn-join {
          background: var(--app-core-color--yellow-1__dark--brand);
          color: var(--app-core-color--green-1__dark--brand);
          display: none;
        }

        .btn-join.visible {
          display: block;
        }

        .btn-join:hover {
          background: var(--app-core-color--yellow-4__dark--brand);
        }

        .btn-play {
          background: var(--app-core-color--yellow-3__dark--brand);
          color: #000;
          display: none;
        }

        .btn-play.visible {
          display: block;
        }

        .btn-play:hover {
          background: var(--app-core-color--yellow-4__dark--brand);
        }

/*  Neodigm Marquee Begin  */
.card-focus__feedback {
    visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 0;
    margin-top: 8px;
    width: 100%;
    overflow: hidden;
}

neodigm-marquee {
    display: inline-block;
    width: 100%;
    user-select: none;
    overflow: hidden;
    background-color: #282828;
        height: 38px;
}
[data-sync-theme="light"] neodigm-marquee[data-n55-theme='ghost'] { background-color: #fff; }
[data-sync-theme="dark"]  neodigm-marquee[data-n55-theme='ghost'] { background-color: #282828; }

neodigm-marquee pre {
    color: var(--neodigm-theme-brand);
    font-family: 'Roboto Mono', 'Courier New', 'Monaco', 'Consolas', 'Liberation Mono', monospace !important;
    padding: 4px 0 0 0; margin: 2px;
    font-weight: 100;
    font-size: 20px; line-height: 1.1;
    text-shadow: -0.2rem -0.2rem 1rem #ed5808, 0.1rem 0.1rem .6rem #fff
}
neodigm-marquee pre[data-n55-theme='warning'],
neodigm-marquee pre [data-n55-theme='warning'] { color: var(--neodigm-theme-warning); text-shadow: -0.2rem -0.2rem 1rem var(--neodigm-theme-warning-alt), 0.1rem 0.1rem .6rem #fff }
[data-sync-theme="light"] neodigm-marquee pre[data-n55-theme='ghost'],
[data-sync-theme="light"] neodigm-marquee pre [data-n55-theme='ghost'] { color: var(--neodigm-theme-night); text-shadow: none; }
[data-sync-theme="dark"]  neodigm-marquee pre[data-n55-theme='ghost'],
[data-sync-theme="dark"]  neodigm-marquee pre [data-n55-theme='ghost'] { color: #fff; text-shadow: none; }

neodigm-marquee[data-n55-marquee-size='small'] { height: 28px; }
neodigm-marquee[data-n55-marquee-size='small'] * {
    font-size: 18px; line-height: 1;
}
/*  Neodigm Marquee End  */

        /* Progress Bar */
        .card-entrants__dataviz {
          padding: 0 16px 16px;
        }

        .progress-container {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .progress-label {
          display: flex;
          justify-content: space-between;
          font-size: 0.7rem;
          color: #CACACA;
        }

        .progress-bar {
          width: 100%;
          height: 8px;
          background: ${n?"var(--app-core-color--gray-4__dark--brand)":"var(--app-core-color--gray-6__light--brand)"};
          border-radius: 4px;
          overflow: hidden;
          position: relative;
        }

        .progress-fill {
          height: 100%;
          border-radius: 4px;
          animation: fillProgress 3.2s ease-in forwards;
        }

        @keyframes fillProgress {
          from {
            width: 0%;
          }
        }

        /* Progress bar colors based on status and theme */
        :host([data-bma-tourn-status="UPCOMING"]) .progress-fill {
          background: ${n?"var(--app-core-color--green-3__dark--brand)":"var(--app-core-color--green-4__dark--brand)"};
        }

        :host([data-bma-tourn-status="LOCKED"]) .progress-fill {
          background: ${n?"var(--app-core-color--yellow-3__dark--brand)":"var(--app-core-color--yellow-4__dark--brand)"};
        }

        :host([data-bma-tourn-status="COMPLETED"]) .progress-fill {
          background: ${n?"var(--app-core-color--red-3__dark--brand)":"var(--app-core-color--red-4__dark--brand)"};
        }

        :host([data-bma-tourn-status="DRAFT"]) .progress-fill {
          background: ${n?"var(--app-core-color--gray-5__dark--brand)":"var(--app-core-color--gray-5__light--brand)"};
        }
/*  Neodigm JuiceBar Begin  */
neodigm-juicebar{
    display: block;
    height: 4px; width: 99%;
    background-color: #f8f8f8;
    overflow: hidden;
}
neodigm-juicebar[data-n55-size='pico']  { height: 1px; }
neodigm-juicebar[data-n55-size='micro'] { height: 2px; }
neodigm-juicebar[data-n55-size='milli'],
neodigm-juicebar[data-n55-size='xsmall']{ height: 3px; }  /*  Milli and XSmall same  */
neodigm-juicebar[data-n55-size='small'] { height: 4px; }
neodigm-juicebar[data-n55-size='medium']{ height: 8px; }
neodigm-juicebar[data-n55-size='large'] { height: 12px; }
neodigm-juicebar[data-n55-size='xlarge']{ height: 16px; }
[data-n55-ampm-theme="light"] neodigm-juicebar { background-color: #f8f8f8; }
[data-n55-ampm-theme="dark"] neodigm-juicebar { background-color: var( --neodigm-theme-night-alt ); }

neodigm-juicebar > DIV {
    height: 100%;
    background-color: var( --neodigm-theme-brand );
    animation: juicebar_linear 1s infinite ease-in-out;
    transform-origin: 0% 50%;
}
neodigm-juicebar[data-n55-show="false"] { visibility: hidden; }

[data-n55-ampm-theme="light"] neodigm-juicebar[data-n55-theme='brand'] > DIV{ background-color: var( --neodigm-theme-brand )}
[data-n55-ampm-theme="light"] neodigm-juicebar[data-n55-theme='primary'] > DIV{ background-color: var( --neodigm-theme-primary )}
[data-n55-ampm-theme="light"] neodigm-juicebar[data-n55-theme='secondary'] > DIV{ background-color: var( --neodigm-theme-secondary )}
[data-n55-ampm-theme="light"] neodigm-juicebar[data-n55-theme='success'] > DIV{ background-color: var( --neodigm-theme-success )}
[data-n55-ampm-theme="light"] neodigm-juicebar[data-n55-theme='danger'] > DIV{ background-color: var( --neodigm-theme-danger )}
[data-n55-ampm-theme="light"] neodigm-juicebar[data-n55-theme='warning'] > DIV{ background-color: var( --neodigm-theme-warning )}
[data-n55-ampm-theme="light"] neodigm-juicebar[data-n55-theme='info'] > DIV{ background-color: var( --neodigm-theme-info )}
[data-n55-ampm-theme="light"] neodigm-juicebar[data-n55-theme='disabled'] > DIV{ background-color: var( --neodigm-theme-disabled )}
[data-n55-ampm-theme="light"] neodigm-juicebar[data-n55-theme='night'] > DIV{ background-color: var( --neodigm-theme-night )}
[data-n55-ampm-theme="light"] neodigm-juicebar[data-n55-theme='marcom'] > DIV{ background-color: var( --neodigm-theme-marcom )}
[data-n55-ampm-theme="light"] neodigm-juicebar[data-n55-theme='party'] > DIV{ background-color: var( --neodigm-theme-party )}
[data-n55-ampm-theme="dark"] neodigm-juicebar[data-n55-theme='brand'] > DIV{ background-color: var( --neodigm-theme-brand-alt )}
[data-n55-ampm-theme="dark"] neodigm-juicebar[data-n55-theme='primary'] > DIV{ background-color: var( --neodigm-theme-primary-alt )}
[data-n55-ampm-theme="dark"] neodigm-juicebar[data-n55-theme='secondary'] > DIV{ background-color: var( --neodigm-theme-secondary-alt )}
[data-n55-ampm-theme="dark"] neodigm-juicebar[data-n55-theme='success'] > DIV{ background-color: var( --neodigm-theme-success-alt )}
[data-n55-ampm-theme="dark"] neodigm-juicebar[data-n55-theme='danger'] > DIV{ background-color: var( --neodigm-theme-danger-alt )}
[data-n55-ampm-theme="dark"] neodigm-juicebar[data-n55-theme='warning'] > DIV{ background-color: var( --neodigm-theme-warning-alt )}
[data-n55-ampm-theme="dark"] neodigm-juicebar[data-n55-theme='info'] > DIV{ background-color: var( --neodigm-theme-info-alt )}
[data-n55-ampm-theme="dark"] neodigm-juicebar[data-n55-theme='disabled'] > DIV{ background-color: var( --neodigm-theme-disabled-alt )}
[data-n55-ampm-theme="dark"] neodigm-juicebar[data-n55-theme='night'] > DIV{ background-color: var( --neodigm-theme-night-alt )}
[data-n55-ampm-theme="dark"] neodigm-juicebar[data-n55-theme='marcom'] > DIV{ background-color: var( --neodigm-theme-marcom-alt )}
[data-n55-ampm-theme="dark"] neodigm-juicebar[data-n55-theme='party'] > DIV{ background-color: var( --neodigm-theme-party-alt )}

@keyframes juicebar_linear {
    0% { transform: translateX(0) scaleX(0); }
    30% { transform: translateX(0) scaleX(-0.4); }
    100% { transform: translateX(100%) scaleX(0.8); }
}
/*  Neodigm JuiceBar End  */ 

      </style>

      <div class="card" data-sync-theme="${a}">
        <div class="badge-ribbon ${this.getUserBadge()?"visible":""} ${this.getBadgeClass()}"></div>
        <div class="card-header">
          <section>
            <h3 class="txt-caption">${this.caption}</h3>
            <p class="tagline">${this.tagline}</p>
          </section>
          <div class="meta-row">
            <span class="sport-tag">${this.sportsDisplay}</span>
            <span class="status ${this.status.toUpperCase()}">${this.status}</span>
          </div>
        </div>
        <div class="card-body">
          <div class="info-item">
            <section class="info-cell">
              <p class="info-label">Entry</p>
              <p class="info-value">${this.entryFee}</p>
            </section>
            <section class="info-cell">
              <p class="info-label">Games</p>
              <p class="info-value">${this.matches}</p>
            </section>
            <section class="info-cell">
              <p class="info-label">TD$</p>
              <p class="info-value">${this.tournament_dollars}</p>
            </section>
          </div>
          <output class="card-focus__feedback">
            <neodigm-marquee data-n55-marquee-text="${this.marqueeText}"
            data-n55-marquee-size="small"
            style="padding: 7px 0 4px 0; height: 34px;">
            <pre data-n55-theme="warning"></pre>
            </neodigm-marquee>
          </output>
          <output class="card-waiting">
            <neodigm-juicebar role="progressbar" data-n55-theme="brand" data-n55-size="medium"
            style="background-color: #242424;"><div></div></neodigm-juicebar>
          </output>
        </div>
        <nav class="card-actions">
          <button class="btn-info" aria-label="Tournament information">Info</button>
          <button class="btn-join ${!this.isUserParticipating()&&this.status.toUpperCase()!=="LOCKED"&&this.status.toUpperCase()!=="COMPLETED"?"visible":""}" aria-label="Join tournament">Join</button>
          <button class="btn-play ${this.isUserParticipating()&&this.status.toUpperCase()!=="COMPLETED"?"visible":""}" aria-label="Play tournament">Play</button>
        </nav>
        <aside class="card-entrants__dataviz">
          <div class="progress-container">
            <div class="progress-label">
              <span>Entrants</span>
              <span>${this.entitiesData.current} / ${this.entitiesData.max}</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" style="width: ${(this.entitiesData.current/this.entitiesData.max*100).toFixed(1)}%"></div>
            </div>
          </div>
        </aside>
      </div>
    `}}customElements.define("bma-tournament-card",rp);class op extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.setupEventListeners(),setTimeout(()=>{const t=this.shadowRoot.querySelector(".content_stake_text input");t&&t.focus()},100)}static get observedAttributes(){return["data-content-team-points","data-content-odds","data-content-stake-text","data-content-type","data-abbreviated-title","data-scheduled-at","data-stake","data-payout"]}attributeChangedCallback(t,n,a){if(n!==a){if(t==="data-stake")return;if(t==="data-payout"){this.updatePayoutDisplay();return}this.render()}}get teamPoints(){return this.getAttribute("data-content-team-points")||""}get odds(){return this.getAttribute("data-content-odds")||"0"}get stake(){return this.getAttribute("data-content-stake-text")||"0"}get type(){return this.getAttribute("data-content-type")||""}get abbreviatedTitle(){return this.getAttribute("data-abbreviated-title")||""}get scheduledAt(){const t=this.getAttribute("data-scheduled-at")||"";return t?hn.formatDateLocal(t):""}get payout(){const t=this.getAttribute("data-payout")||"0",n=parseFloat(t);return isNaN(n)?"0.00":n.toFixed(2)}updatePayoutDisplay(){const t=this.shadowRoot?.querySelector(".payout-value");t&&(t.textContent=this.payout)}setupEventListeners(){const t=this.shadowRoot.querySelector(".grid_close button");t&&t.addEventListener("click",()=>{J.publish("COREBETSLIP.CLOSE",JSON.stringify({teamPoints:this.teamPoints,odds:this.odds,stake:this.stake,type:this.type,abbreviatedTitle:this.abbreviatedTitle,scheduledAt:this.getAttribute("data-scheduled-at"),timestamp:Date.now()})),this.dispatchEvent(new CustomEvent("bma-bet-entry-remove",{bubbles:!0,composed:!0,detail:{teamPoints:this.teamPoints,odds:this.odds,stake:this.stake,type:this.type,abbreviatedTitle:this.abbreviatedTitle,scheduledAt:this.getAttribute("data-scheduled-at")}}))});const n=this.shadowRoot.querySelector(".content_stake_text input");n&&n.addEventListener("input",a=>{const s=a.target.value;this.setAttribute("data-stake",s)})}render(){this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: block;
          width: 100%;
          margin-bottom: 8px;
        }

        .bet-entry-card {
          display: grid;
          grid-template-columns: 28px auto;
          grid-template-areas:
            "grid_close grid_header"
            "grid_close grid_content";
          grid-template-rows: auto auto;
          background: var(--app-core-color--gray-2__dark--brand, #161616);
          border: 1px solid var(--app-core-color--gray-4__dark--brand, #323232);
          border-radius: 8px;
          padding: 6px;
          gap: 6px;
          box-sizing: border-box;
        }

        .grid_close {
          grid-area: grid_close;
          display: flex;
          align-items: flex-start;
          justify-content: center;
        }

        .grid_header {
          grid-area: grid_header;
          display: grid;
          grid-template-columns: 70% 30%;
          gap: 8px;
          align-items: center;
          padding-bottom: 8px;
          border-bottom: 1px solid var(--app-core-color--gray-4__dark--brand, #323232);
        }

        .grid_close button {
          width: 22px; height: 22px;
          border-radius: 50%;
          background: var(--app-core-color--gray-4__dark--brand, #323232);
          border: 1px solid var(--app-core-color--gray-5__dark--brand, #484848);
          color: var(--app-core-color--gray-6__dark--brand, #969696);
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
          padding: 0;
        }

        .grid_close button:hover {
          background: var(--app-core-color--red-3__dark--brand, #B91418);
          color: #fff;
          border-color: var(--app-core-color--red-3__dark--brand, #B91418);
        }

        .grid_content {
          grid-area: grid_content;
          display: grid;
          grid-template-columns: 36% auto 124px;
          gap: 6px;
          align-items: center;
        }

        .content_team_points {
          font-weight: 700;
          font-size: 12px;
          color: var(--app-core-color--yellow-3__dark--brand, #F7C60D);
        }

        .content_odds {
          font-size: 0.9rem;
          color: #fff;
          text-align: center;
        }

        .content_stake_text {
          display: flex;
          align-items: center;
        }

        .content_stake_text input {
          width: 100%;
          padding: 8px;
          background: var(--app-core-color--gray-3__dark--brand, #181818);
          border: 1px solid var(--app-core-color--gray-4__dark--brand, #323232);
          border-radius: 4px;
          color: #fff;
          font-size: 0.9rem;
          font-weight: 600;
          text-align: right;
          box-sizing: border-box;
        }

        .content_stake_text input:focus {
          outline: none;
          border-color: var(--app-core-color--yellow-3__dark--brand, #F7C60D);
        }

        /* Hide number input spinners/steppers */
        .content_stake_text input::-webkit-outer-spin-button,
        .content_stake_text input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        .content_stake_text input[type=number] {
          -moz-appearance: textfield;
        }

        .content_type {
          font-size: 0.75rem;
          color: var(--app-core-color--gray-6__dark--brand, #969696);
          text-transform: uppercase;
          font-weight: 600;
        }

        .content_auto_1,
        .content_auto_2 {
          /* Reserved for future use */
        }

        .match_desc {
          font-size: 11px;
          color: var(--app-core-color--gray-6__dark--brand, #969696);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .match_date {
          font-size: 10px;
          color: var(--app-core-color--gray-6__dark--brand, #969696);
          text-align: center;
        }

        .content_payout {
          font-size: 12px;
          font-weight: 700;
          color: var(--app-core-color--green-3__dark--brand, #14b963);
          text-align: right;
        }

        @media (max-width: 768px) {
          .grid_content {
            grid-template-columns: 45% auto 120px;
            gap: 6px;
          }

          .content_team_points {
            font-size: 0.85rem;
          }

          .content_odds {
            font-size: 0.8rem;
          }

          .content_stake_text input {
            padding: 6px;
            font-size: 0.85rem;
          }
        }
      </style>

      <div class="bet-entry-card">
        <div class="grid_close">
          <button aria-label="Remove bet">✕</button>
        </div>
        <div class="grid_header">
          <div class="match_desc">${this.abbreviatedTitle}</div>
          <div class="match_date">${this.scheduledAt}</div>
        </div>
        <div class="grid_content">
          <!-- Row 1 -->
          <div class="content_team_points">${this.teamPoints}</div>
          <div class="content_odds">${this.odds}</div>
          <div class="content_stake_text">
            <input type="number" min="0" value="${this.stake!=="0"?this.stake:""}" placeholder="Stake" aria-label="Stake amount">
          </div>

          <!-- Row 2 -->
          <div class="content_type">${this.type}</div>
          <div class="content_auto_1"></div>
          <div class="content_auto_2"></div>

          <!-- Row 3 (payout only) -->
          <div></div>
          <div></div>
          <div class="content_payout">Payout: <span class="payout-value">${this.payout}</span></div>
        </div>
      </div>
    `,this.setupEventListeners()}}customElements.define("bma-bet-entry",op);class ip extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-match-id","data-match-guid","data-match-title","data-match-short-title","data-scheduled-at","data-home-team","data-away-team","data-odds-markets","data-is-disabled","data-sync-theme","data-scoreboard"]}get matchId(){return this.getAttribute("data-match-id")||""}get matchGuid(){return this.getAttribute("data-match-guid")||""}get matchTitle(){return this.getAttribute("data-match-title")||""}get shortTitle(){return this.getAttribute("data-match-short-title")||this.matchTitle}get scheduledAt(){return this.getAttribute("data-scheduled-at")||""}get homeTeam(){return this.getAttribute("data-home-team")||"Home"}get awayTeam(){return this.getAttribute("data-away-team")||"Away"}get oddsMarkets(){const t=this.getAttribute("data-odds-markets");if(!t)return null;try{return JSON.parse(t)}catch(n){return console.error("[bma-bet-match-card] Error parsing odds_markets:",n),null}}get isDisabled(){return this.getAttribute("data-is-disabled")==="true"}get theme(){return this.getAttribute("data-sync-theme")||"dark"}get scoreboard(){const t=this.getAttribute("data-scoreboard");if(!t)return null;try{return JSON.parse(t)}catch(n){return console.error("[bma-bet-match-card] Error parsing scoreboard:",n),null}}connectedCallback(){this.render(),this.startCountdownTimer()}disconnectedCallback(){this.stopCountdownTimer()}startCountdownTimer(){this.stopCountdownTimer(),this.countdownInterval=setInterval(()=>{this.updateCountdown()},6e4)}stopCountdownTimer(){this.countdownInterval&&(clearInterval(this.countdownInterval),this.countdownInterval=null)}updateCountdown(){const t=this.shadowRoot?.querySelector(".countdown");t&&(t.textContent=this.getCountdownText())}attributeChangedCallback(t,n,a){n!==a&&this.render()}formatDate(t){if(!t)return"TBD";let n=new Date(t);return!t.includes("Z")&&!t.match(/[+-]\d{2}:\d{2}$/)&&(n=new Date(t+"Z")),n.toLocaleString(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}getCountdownText(){if(!this.scheduledAt)return"";const t=new Date,n=new Date(this.scheduledAt);!this.scheduledAt.includes("Z")&&!this.scheduledAt.match(/[+-]\d{2}:\d{2}$/)&&n.setTime(new Date(this.scheduledAt+"Z").getTime());const a=n-t;if(a<=0)return"";const s=Math.floor(a/(1e3*60*60)),r=Math.floor(a%(1e3*60*60)/(1e3*60));return s>24?`${Math.floor(s/24)}d ${s%24}h`:s>0?`${s}h ${r}m`:r>5?`${r} min`:"Starting Soon"}getGameStatus(){const t=this.getCountdownText();if(t)return{type:"upcoming",text:t,color:"#F7C60D"};const n=this.scoreboard;if(n&&n.time_remaining){const a=n.time_remaining.toLowerCase();if(a==="final")return{type:"final",text:"Final",color:"#969696"};if(a==="in progress"||a.includes("q")||a.includes("half")||a.includes("period")){const s=n.home_score!==void 0&&n.home_score!==null||n.away_score!==void 0&&n.away_score!==null,r=n.period!==void 0&&n.period!==null&&n.period!==0;if(s||r)return{type:"live",text:n.time_remaining,color:"#00E676"}}}return{type:"scheduled",text:this.formatDate(this.scheduledAt),color:"#969696"}}handleButtonClick(t,n,a,s,r){t.stopPropagation();const o=t.currentTarget,i=o.classList.contains("btn--active"),l={matchId:this.matchId,matchGuid:this.matchGuid,matchTitle:this.matchTitle,abbreviatedTitle:this.shortTitle,homeTeam:this.homeTeam,awayTeam:this.awayTeam,scheduledAt:this.scheduledAt,type:n,team:a,price:s,point:r,timestamp:Date.now()};this.dispatchEvent(new CustomEvent("bet-button-click",{bubbles:!0,composed:!0,detail:{betData:l,isActive:i,button:o}}))}renderButton(t,n,a,s){if(!a)return'<button class="btn btn--empty" disabled></button>';const r=a.price,o=a.point;let i="";return t==="spread"?i=`${o>0?`+${o}`:o}<br>${r}`:t==="money"?i=r:t==="total"&&(i=`${s}${o}<br>${r}`),`<button class="btn"
                    data-bet-type="${t}"
                    data-team="${n}"
                    data-price="${r}"
                    ${o?`data-point="${o}"`:""}>
            ${i}
        </button>`}render(){const t=this.theme==="dark",n=this.oddsMarkets,a=n&&(n.h2h||n.totals||n.spreads),s=!this.isDisabled&&a,r=this.getGameStatus(),o=this.scoreboard,i=o?.home_score||0,l=o?.away_score||0,u=r?.type==="live"||r?.type==="final",d=n?.spreads?.outcomes?.find(m=>m.name===this.homeTeam),f=n?.spreads?.outcomes?.find(m=>m.name===this.awayTeam),g=n?.h2h?.outcomes?.find(m=>m.name===this.homeTeam),p=n?.h2h?.outcomes?.find(m=>m.name===this.awayTeam),h=n?.totals?.outcomes?.find(m=>m.name==="Over"),c=n?.totals?.outcomes?.find(m=>m.name==="Under");this.shadowRoot.innerHTML=`
            <style>
                :host {
                    display: block;
                }

                * {
                    box-sizing: border-box;
                }

                .card {
                    padding: 12px;
                    margin-bottom: 12px;
                    border: 1px solid ${t?"rgba(247, 198, 13, 0.2)":"#d0d0d0"};
                    border-radius: 8px;
                    transition: all 0.2s;
                    background: ${t?`linear-gradient(
                        135deg,
                        rgba(24, 24, 24, 0.85) 0%,
                        rgba(30, 30, 30, 0.75) 50%,
                        rgba(24, 24, 24, 0.85) 100%
                    )`:"#ffffff"};
                    backdrop-filter: ${t?"blur(12px) saturate(150%)":"none"};
                    -webkit-backdrop-filter: ${t?"blur(12px) saturate(150%)":"none"};
                    position: relative;
                    box-shadow: ${t?`
                        0 4px 20px rgba(0, 0, 0, 0.4),
                        inset 0 1px 0 rgba(255, 255, 255, 0.05),
                        inset 0 -1px 0 rgba(0, 0, 0, 0.2)
                    `:"none"};
                }

                /* Live game glow effect */
                .card--live {
                    border-color: ${t?"rgba(0, 230, 118, 0.5)":"#00C853"};
                    background: ${t?`linear-gradient(
                        135deg,
                        rgba(0, 230, 118, 0.05) 0%,
                        rgba(24, 24, 24, 0.9) 20%,
                        rgba(30, 30, 30, 0.85) 50%,
                        rgba(24, 24, 24, 0.9) 80%,
                        rgba(0, 230, 118, 0.05) 100%
                    )`:"#ffffff"};
                    animation: livePulse 2s ease-in-out infinite;
                }

                @keyframes livePulse {
                    0%, 100% {
                        box-shadow: ${t?`
                            0 4px 20px rgba(0, 0, 0, 0.4),
                            inset 0 1px 0 rgba(255, 255, 255, 0.05),
                            inset 0 -1px 0 rgba(0, 0, 0, 0.2),
                            0 0 0 0 rgba(0, 230, 118, 0)
                        `:"none"};
                    }
                    50% {
                        box-shadow: ${t?`
                            0 4px 20px rgba(0, 0, 0, 0.4),
                            inset 0 1px 0 rgba(255, 255, 255, 0.05),
                            inset 0 -1px 0 rgba(0, 0, 0, 0.2),
                            0 0 30px 6px rgba(0, 230, 118, 0.2)
                        `:"none"};
                    }
                }

                .card--upcoming {
                    border-color: ${t?"rgba(247, 198, 13, 0.4)":"#FFA000"};
                    background: ${t?`linear-gradient(
                        135deg,
                        rgba(247, 198, 13, 0.03) 0%,
                        rgba(24, 24, 24, 0.85) 30%,
                        rgba(30, 30, 30, 0.8) 50%,
                        rgba(24, 24, 24, 0.85) 70%,
                        rgba(247, 198, 13, 0.03) 100%
                    )`:"#ffffff"};
                }

                .card--final {
                    opacity: 0.75;
                    background: ${t?`linear-gradient(
                        135deg,
                        rgba(24, 24, 24, 0.7) 0%,
                        rgba(20, 20, 20, 0.65) 100%
                    )`:"#ffffff"};
                }

                :host([data-is-disabled="true"]) .card {
                    opacity: 0.4;
                    cursor: not-allowed;
                    pointer-events: none;
                }

                .header {
                    display: grid;
                    grid-template-columns: 30% 70%;
                    gap: 8px;
                    margin-bottom: 10px;
                    padding-bottom: 8px;
                    border-bottom: 1px solid ${t?"rgba(247, 198, 13, 0.1)":"#d0d0d0"};
                }

                .date-status {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    justify-content: flex-start;
                }

                .date {
                    font-size: 0.8rem;
                    color: ${t?"#F7C60D":"#d4a800"};
                    font-weight: 500;
                    white-space: nowrap;
                }

                .status-badge {
                    padding: 2px 8px;
                    border-radius: 12px;
                    font-size: 0.7rem;
                    font-weight: 600;
                    display: inline-flex;
                    align-items: center;
                    gap: 4px;
                }

                .status-badge--live {
                    background: rgba(0, 230, 118, 0.15);
                    color: #00E676;
                    border: 1px solid rgba(0, 230, 118, 0.3);
                }

                .status-badge--upcoming {
                    background: rgba(247, 198, 13, 0.15);
                    color: #F7C60D;
                    border: 1px solid rgba(247, 198, 13, 0.3);
                }

                .status-badge--final,
                .status-badge--scheduled {
                    background: rgba(150, 150, 150, 0.15);
                    color: #969696;
                    border: 1px solid rgba(150, 150, 150, 0.3);
                }

                .live-dot {
                    width: 6px;
                    height: 6px;
                    background: #00E676;
                    border-radius: 50%;
                    animation: pulse 1.5s ease-in-out infinite;
                }

                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }

                .labels {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 6px;
                    align-items: center;
                }

                .labels span {
                    font-size: 0.65rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    text-align: center;
                    color: ${t?"#969696":"#666"};
                    letter-spacing: 0.5px;
                }

                .row {
                    display: grid;
                    grid-template-columns: 30% 70%;
                    gap: 8px;
                    margin-bottom: 8px;
                }

                .row:last-child {
                    margin-bottom: 0;
                }

                .team {
                    font-weight: 600;
                    font-size: 0.85rem;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .team-name {
                    flex: 1;
                }

                .team-score {
                    font-size: 1rem;
                    font-weight: 700;
                    margin-left: 8px;
                    padding: 2px 6px;
                    background: rgba(247, 198, 13, 0.1);
                    border-radius: 4px;
                    min-width: 28px;
                    text-align: center;
                }

                .team--home .team-name {
                    color: ${t?"#ffe24d":"#d4a800"};
                }

                .team--away .team-name {
                    color: ${t?"#14b963":"#0e8f4d"};
                }

                .team--home .team-score {
                    color: ${t?"#ffe24d":"#d4a800"};
                    background: rgba(255, 226, 77, 0.15);
                }

                .team--away .team-score {
                    color: ${t?"#14b963":"#0e8f4d"};
                    background: rgba(20, 185, 99, 0.15);
                }

                .buttons {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 6px;
                }

                .btn {
                    padding: 10px 8px;
                    border: 1px solid ${t?"#323232":"#d0d0d0"};
                    border-radius: 8px;
                    background: ${t?"#161616":"#f5f5f5"};
                    color: ${t?"#fff":"#000"};
                    font-size: 0.75rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    text-align: center;
                    line-height: 1.4;
                }

                .btn--empty {
                    opacity: 0.2;
                    cursor: not-allowed;
                }

                .btn--disabled {
                    opacity: 0.4;
                    cursor: not-allowed;
                    background: ${t?"#181818":"#e5e5e5"};
                    border-color: ${t?"#484848":"#b0b0b0"};
                    color: ${t?"#969696":"#888"};
                    pointer-events: none;
                }

                .btn:not(.btn--empty):not(.btn--disabled):hover {
                    border-color: ${t?"#F7C60D":"#d4a800"};
                    background: ${t?"#181818":"#fff"};
                    color: ${t?"#F7C60D":"#d4a800"};
                }

                .btn:not(.btn--empty):not(.btn--disabled):active {
                    background: ${t?"#F7C60D":"#d4a800"};
                    color: #000;
                }

                .btn--selected {
                    border-color: ${t?"#F7C60D":"#d4a800"};
                    background: ${t?"color-mix(in srgb, #6D5706 15%, #161616)":"color-mix(in srgb, #d4a800 15%, #f5f5f5)"};
                    color: ${t?"#F7C60D":"#d4a800"};
                    font-weight: 700;
                }

                .btn--active {
                    border: 1px solid ${t?"#F7C60D":"#d4a800"};
                    box-shadow: 0 0 12px ${t?"rgba(247, 198, 13, 0.3)":"rgba(212, 168, 0, 0.3)"};
                }
            </style>

            <div class="card ${r?`card--${r.type}`:""}">
                <div class="header">
                    <div class="date-status">
                        <div class="date">${this.formatDate(this.scheduledAt)}</div>
                        ${r&&r.type!=="scheduled"?`
                            <div class="status-badge status-badge--${r.type}">
                                ${r.type==="live"?'<span class="live-dot"></span>':""}
                                <span class="countdown">${r.text}</span>
                            </div>
                        `:""}
                    </div>
                    ${s?`
                        <div class="labels">
                            <span>SPREAD</span>
                            <span>MONEY</span>
                            <span>TOTAL</span>
                        </div>
                    `:'<div class="labels"></div>'}
                </div>

                <div class="row">
                    <div class="team team--home">
                        <span class="team-name">${this.homeTeam}</span>
                        ${u?`<span class="team-score">${i}</span>`:""}
                    </div>
                    ${s?`
                        <div class="buttons">
                            ${this.renderButton("spread","home",d)}
                            ${this.renderButton("money","home",g)}
                            ${this.renderButton("total","over",h,"O")}
                        </div>
                    `:""}
                </div>

                <div class="row">
                    <div class="team team--away">
                        <span class="team-name">${this.awayTeam}</span>
                        ${u?`<span class="team-score">${l}</span>`:""}
                    </div>
                    ${s?`
                        <div class="buttons">
                            ${this.renderButton("spread","away",f)}
                            ${this.renderButton("money","away",p)}
                            ${this.renderButton("total","under",c,"U")}
                        </div>
                    `:""}
                </div>
            </div>
        `,s&&this.shadowRoot.querySelectorAll(".btn:not(.btn--empty)").forEach(m=>{const _=m.dataset.betType,y=m.dataset.team,T=m.dataset.price,S=m.dataset.point||null;m.addEventListener("click",x=>this.handleButtonClick(x,_,y,T,S))})}}customElements.define("bma-bet-match-card",ip);class lp extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}static get observedAttributes(){return["data-match-guid","data-match-title","data-match-scheduled-at","data-match-home-team","data-match-away-team","data-match-home-score","data-match-away-score","data-match-scoreboard","data-match-sport-id","data-sync-theme"]}attributeChangedCallback(t,n,a){n!==a&&this.render()}get matchGuid(){return this.getAttribute("data-match-guid")||""}get matchTitle(){return this.getAttribute("data-match-title")||"Match"}get scheduledAt(){return this.getAttribute("data-match-scheduled-at")||""}get homeTeam(){return this.getAttribute("data-match-home-team")||"Home"}get awayTeam(){return this.getAttribute("data-match-away-team")||"Away"}get homeScore(){const t=this.getAttribute("data-match-home-score");return t!=null&&t!==""?t:null}get awayScore(){const t=this.getAttribute("data-match-away-score");return t!=null&&t!==""?t:null}get scoreboardData(){const t=this.getAttribute("data-match-scoreboard");if(!t)return null;try{return typeof t=="string"?JSON.parse(t):t}catch(n){return console.warn("[bma-match-status] Failed to parse scoreboard data:",n),null}}get sportId(){return this.getAttribute("data-match-sport-id")||""}get theme(){return this.getAttribute("data-sync-theme")||"dark"}getMatchStatus(){const t=this.scoreboardData,n=this.homeScore!==null&&this.awayScore!==null;let a=!1;if(this.scheduledAt){let o=this.scheduledAt;!o.includes("Z")&&!o.match(/[+-]\d{2}:\d{2}$/)&&(o=o+"Z");const i=new Date(o),l=new Date(Date.now()-300*1e3);a=i<l}let s="UPCOMING",r=null;if(t?.time_remaining){const o=t.time_remaining;o==="Final"?(s="FINAL",r="Final"):o==="In Progress"?a?(s="IN_PROGRESS",r="In Progress"):(s="UPCOMING",r="Upcoming"):(s="IN_PROGRESS",r=o)}else n?(s="FINAL",r="Final"):(s="UPCOMING",r="Upcoming");return{status:s,timeRemaining:r}}render(){const{status:t,timeRemaining:n}=this.getMatchStatus(),a=this.homeScore!==null&&this.awayScore!==null,s=this.scheduledAt?hn.formatDateLocal(this.scheduledAt,{timeZoneName:"short"}):"",r=t==="FINAL"?"match-status-card--past":"";this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: block;
          width: 100%;
          margin-bottom: 12px;
        }

        .match-status-card {
          /* Glass morphism effect */
          background: linear-gradient(135deg, rgba(46, 139, 87, 0.12) 0%, rgba(10, 10, 10, 0.6) 100%);
          border: 1px solid rgba(46, 139, 87, 0.4);
          border-radius: 16px;
          backdrop-filter: blur(5px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
          padding: 16px;
          box-sizing: border-box;
        }

        .match-status-card--past {
          opacity: 0.7;
        }

        .match-status-card__header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 12px;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .match-status-card__title {
          font-size: 1rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #fff;
          flex: 1;
        }

        .match-status-card__date {
          font-size: 0.85rem;
          color: var(--app-core-color--yellow-3__dark--brand, #F7C60D);
          white-space: nowrap;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .match-status-card__time-remaining {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.5);
          margin-top: 4px;
          font-weight: 600;
          text-align: right;
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }

        .match-status-card__scores {
          display: grid;
          grid-template-columns: auto 25% 25% auto;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(0, 0, 0, 0.4) 100%);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(5px);
          padding: 16px;
        }

        .score-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
          justify-self: center;
        }

        .score-item:first-child {
          grid-column: 2;
          align-items: flex-end;
          text-align: right;
        }

        .score-item:last-child {
          grid-column: 3;
          align-items: flex-start;
          text-align: left;
        }

        .score-team {
          font-size: 0.875rem;
          color: #fff;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .score-value {
          font-size: 2.5rem;
          color: var(--app-core-color--yellow-3__dark--brand, #F7C60D);
          font-weight: 900;
          line-height: 1;
        }

        .score-label {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.5);
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 600;
        }

        /* Light theme overrides */
        [data-sync-theme='light'] .match-status-card {
          background: #f5f5f5;
          border-color: #ddd;
        }

        [data-sync-theme='light'] .match-status-card__title {
          color: #000;
        }

        [data-sync-theme='light'] .match-status-card__date {
          color: #b28f09;
        }

        [data-sync-theme='light'] .match-status-card__time-remaining {
          color: #666;
        }

        [data-sync-theme='light'] .score-label {
          color: #666;
        }

        [data-sync-theme='light'] .score-value {
          color: #b28f09;
        }
      </style>

      <div class="match-status-card ${r}" data-sync-theme="${this.theme}">
        <div class="match-status-card__header">
          <div>
            <div class="match-status-card__title">${this.matchTitle}</div>
          </div>
          <div>
            <div class="match-status-card__date">${s}</div>
            ${n?`<div class="match-status-card__time-remaining">${n}</div>`:""}
          </div>
        </div>
        ${a?`
          <div class="match-status-card__scores">
            <div class="score-item">
              <div class="score-team">${this.homeTeam}</div>
              <div class="score-value">${this.homeScore}</div>
              <div class="score-label">Home</div>
            </div>
            <div class="score-item">
              <div class="score-team">${this.awayTeam}</div>
              <div class="score-value">${this.awayScore}</div>
              <div class="score-label">Away</div>
            </div>
          </div>
        `:""}
      </div>
    `}}customElements.define("bma-match-status",lp);class It extends HTMLElement{static currentlyExpanded=null;constructor(){super(),this.attachShadow({mode:"open"}),this.expanded=!1}static get observedAttributes(){return["data-rank","data-username","data-user-guid","data-tournament-dollars","data-total-betslips","data-total-payout","data-combined-betslips","data-badge-class","data-is-current-user","data-sync-theme"]}get rank(){return this.getAttribute("data-rank")||""}get username(){return this.getAttribute("data-username")||"Unknown"}get userGuid(){return this.getAttribute("data-user-guid")||""}get tournamentDollars(){return this.getAttribute("data-tournament-dollars")||"0"}get totalBetslips(){return this.getAttribute("data-total-betslips")||"0"}get totalPayout(){return this.getAttribute("data-total-payout")||"0"}get combinedBetslips(){const t=this.getAttribute("data-combined-betslips");if(!t)return[];try{return JSON.parse(t)}catch(n){return console.error("[bma-leaderboard-card] Error parsing combined_betslips:",n),[]}}get badgeClass(){return this.getAttribute("data-badge-class")||""}get isCurrentUser(){return this.getAttribute("data-is-current-user")==="true"}get theme(){return this.getAttribute("data-sync-theme")||"dark"}connectedCallback(){this.render(),this.attachEventListeners()}attributeChangedCallback(t,n,a){n!==a&&(this.render(),this.attachEventListeners())}toggleExpanded(){It.currentlyExpanded&&It.currentlyExpanded!==this&&It.currentlyExpanded.collapse(),this.expanded=!this.expanded;const t=this.shadowRoot.querySelector(".leaderboard-card__details"),n=this.shadowRoot.querySelector(".expand-icon");this.expanded?(t.style.display="block",n.textContent="▼",It.currentlyExpanded=this):(t.style.display="none",n.textContent="▶",It.currentlyExpanded===this&&(It.currentlyExpanded=null))}collapse(){this.expanded=!1;const t=this.shadowRoot.querySelector(".leaderboard-card__details"),n=this.shadowRoot.querySelector(".expand-icon");t&&(t.style.display="none"),n&&(n.textContent="▶")}attachEventListeners(){const t=this.shadowRoot.querySelector(".leaderboard-card");t&&t.addEventListener("click",()=>this.toggleExpanded())}renderBetsTable(){const t=this.combinedBetslips;if(!t||t.length===0)return'<p class="no-bets">No bets available</p>';const n=t.filter(s=>{const r=s.bet||[];if(r.length===0)return!1;const o=r[0],i=Object.keys(o)[0];return o[i]?.reconciled===!0});if(n.length===0)return'<p class="no-bets">No reconciled bets</p>';let a=`
            <table class="bets-table">
                <thead>
                    <tr>
                        <th>Selection</th>
                        <th>Type</th>
                        <th>Odds</th>
                        <th>Stake</th>
                        <th>Payout</th>
                    </tr>
                </thead>
                <tbody>
        `;return n.forEach(s=>{const r=s.bet||[];if(r.length===0)return;const o=r[0],i=Object.keys(o)[0],l=o[i],u=parseFloat(l.payout||0)>0;a+=`
                <tr class="${u?"bet-win":"bet-loss"}">
                    <td class="bet-selection">${i}</td>
                    <td class="bet-type">${l.type||"-"}</td>
                    <td class="bet-odds">${l.odds>0?"+":""}${l.odds||"-"}</td>
                    <td class="bet-stake">$${parseFloat(l.stake||0).toFixed(2)}</td>
                    <td class="bet-payout ${u?"payout-win":"payout-loss"}">$${parseFloat(l.payout||0).toFixed(2)}</td>
                </tr>
            `}),a+=`
                </tbody>
            </table>
        `,a}render(){const t=this.isCurrentUser?"leaderboard-card--current-user":"",n=this.badgeClass?`<div class="badge-trophy ${this.badgeClass}"></div>`:"";this.shadowRoot.innerHTML=`
            <style>
                :host {
                    display: block;
                    margin-bottom: 0.75rem;
                }

                * {
                    box-sizing: border-box;
                }

                /* Glass Morphism Card */
                .leaderboard-card {
                    background: linear-gradient(135deg, rgba(46, 139, 87, 0.12) 0%, rgba(10, 10, 10, 0.6) 100%);
                    border: 1px solid rgba(46, 139, 87, 0.4);
                    border-radius: 12px;
                    backdrop-filter: blur(5px);
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
                    padding: 1rem;
                    cursor: pointer;
                    user-select: none;
                    transition: all 0.3s ease;
                }

                .leaderboard-card:hover {
                    background: linear-gradient(135deg, rgba(46, 139, 87, 0.18) 0%, rgba(10, 10, 10, 0.7) 100%);
                    border-color: rgba(46, 139, 87, 0.6);
                    transform: translateY(-2px);
                    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
                }

                .leaderboard-card--current-user {
                    border: 2px solid rgba(247, 198, 13, 0.8);
                    background: linear-gradient(135deg, rgba(247, 198, 13, 0.15) 0%, rgba(10, 10, 10, 0.7) 100%);
                }

                .leaderboard-card__header {
                    display: grid;
                    grid-template-columns: 60px 1fr 180px;
                    align-items: center;
                    gap: 1rem;
                    cursor: pointer;
                }

                .leaderboard-card__rank {
                    font-size: 1.75rem;
                    font-weight: 900;
                    color: var(--app-core-color--yellow-3__dark--brand, #F7C60D);
                    text-align: center;
                    text-shadow: 0 2px 8px rgba(247, 198, 13, 0.4);
                }

                .leaderboard-card__user {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .badge-trophy {
                    width: 24px;
                    height: 24px;
                    flex-shrink: 0;
                }

                .badge-trophy--gold {
                    background: radial-gradient(circle, #FFD700, #FFA500);
                    border-radius: 50%;
                    box-shadow: 0 0 12px rgba(255, 215, 0, 0.6);
                }

                .badge-trophy--silver {
                    background: radial-gradient(circle, #C0C0C0, #A8A8A8);
                    border-radius: 50%;
                    box-shadow: 0 0 12px rgba(192, 192, 192, 0.6);
                }

                .badge-trophy--bronze {
                    background: radial-gradient(circle, #CD7F32, #B8732D);
                    border-radius: 50%;
                    box-shadow: 0 0 12px rgba(205, 127, 50, 0.6);
                }

                .leaderboard-card__username {
                    font-size: 1.125rem;
                    font-weight: 600;
                    color: var(--app-core-color--white-5__dark--brand, #FFFFFF);
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .leaderboard-card__dollars {
                    text-align: right;
                    display: flex;
                    flex-direction: column;
                    gap: 0.25rem;
                }

                .dollars-amount {
                    font-size: 1.5rem;
                    font-weight: 900;
                    color: var(--app-core-color--yellow-3__dark--brand, #F7C60D);
                    text-shadow: 0 2px 8px rgba(247, 198, 13, 0.4);
                }

                .dollars-label {
                    font-size: 0.75rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    color: var(--app-core-color--gray-6__dark--brand, #969696);
                }

                .expand-icon {
                    display: none;
                    position: absolute;
                    top: 4px;
                    right: 4px;
                    font-size: 0.75rem;
                    color: var(--app-core-color--yellow-3__dark--brand, #F7C60D);
                    transition: transform 0.3s ease;
                    cursor: pointer;
                    user-select: none;
                }

                /* Details Section */
                .leaderboard-card__details {
                    display: none;
                    margin-top: 1.5rem;
                    padding-top: 1.5rem;
                    border-top: 1px solid rgba(46, 139, 87, 0.3);
                }

                .details-summary {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1rem;
                    margin-bottom: 1.5rem;
                }

                .summary-item {
                    background: linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(0, 0, 0, 0.4) 100%);
                    border-radius: 8px;
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    padding: 0.75rem;
                    text-align: center;
                }

                .summary-item__label {
                    font-size: 0.75rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    color: var(--app-core-color--gray-6__dark--brand, #969696);
                    margin-bottom: 0.25rem;
                }

                .summary-item__value {
                    font-size: 1.25rem;
                    font-weight: 900;
                    color: var(--app-core-color--white-5__dark--brand, #FFFFFF);
                }

                /* Bets Table */
                .bets-table {
                    width: 100%;
                    border-collapse: collapse;
                    font-size: 0.875rem;
                    background: linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(0, 0, 0, 0.3) 100%);
                    border-radius: 8px;
                    overflow: hidden;
                }

                .bets-table thead {
                    background: linear-gradient(135deg, rgba(46, 139, 87, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%);
                }

                .bets-table th {
                    padding: 0.75rem 0.5rem;
                    text-align: left;
                    font-weight: 900;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    font-size: 0.7rem;
                    color: var(--app-core-color--yellow-3__dark--brand, #F7C60D);
                }

                .bets-table td {
                    padding: 0.75rem 0.5rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.05);
                    color: var(--app-core-color--gray-7__dark--brand, #E6E6E6);
                }

                .bets-table tbody tr {
                    transition: background 0.2s ease;
                }

                .bets-table tbody tr:hover {
                    background: rgba(46, 139, 87, 0.1);
                }

                .bet-win {
                    background: rgba(46, 139, 87, 0.05);
                }

                .bet-loss {
                    background: rgba(185, 20, 24, 0.05);
                }

                .bet-selection {
                    font-weight: 600;
                    color: var(--app-core-color--white-5__dark--brand, #FFFFFF);
                }

                .bet-type {
                    text-transform: capitalize;
                    font-size: 0.75rem;
                    color: var(--app-core-color--gray-6__dark--brand, #969696);
                }

                .payout-win {
                    color: var(--app-core-color--yellow-3__dark--brand, #F7C60D);
                    font-weight: 900;
                }

                .payout-loss {
                    color: var(--app-core-color--red-3__dark--brand, #B91418);
                    font-weight: 600;
                }

                .no-bets {
                    text-align: center;
                    padding: 2rem;
                    color: var(--app-core-color--gray-6__dark--brand, #969696);
                    font-style: italic;
                }

                /* Responsive */
                @media (max-width: 768px) {
                    .leaderboard-card__header {
                        grid-template-columns: 50px 1fr 160px;
                        gap: 0.75rem;
                    }

                    .leaderboard-card__rank {
                        font-size: 1.5rem;
                    }

                    .leaderboard-card__username {
                        font-size: 1rem;
                    }

                    .dollars-amount {
                        font-size: 1.25rem;
                    }

                    .bets-table {
                        font-size: 0.75rem;
                    }

                    .bets-table th,
                    .bets-table td {
                        padding: 0.5rem 0.25rem;
                    }
                }
            </style>

            <div class="leaderboard-card ${t}">
                <span class="expand-icon">▶</span>

                <div class="leaderboard-card__header">
                    <div class="leaderboard-card__rank">#${this.rank}</div>

                    <div class="leaderboard-card__user">
                        ${n}
                        <span class="leaderboard-card__username">${this.username}</span>
                    </div>

                    <div class="leaderboard-card__dollars">
                        <div class="dollars-amount">TD$ ${parseFloat(this.tournamentDollars||0).toFixed(2)}</div>
                        <div class="dollars-label">Balance</div>
                    </div>
                </div>

                <div class="leaderboard-card__details">
                    <div class="details-summary">
                        <div class="summary-item">
                            <div class="summary-item__label">Total Bets</div>
                            <div class="summary-item__value">${this.totalBetslips}</div>
                        </div>
                        <div class="summary-item">
                            <div class="summary-item__label">Total Payout</div>
                            <div class="summary-item__value">$${parseFloat(this.totalPayout||0).toFixed(2)}</div>
                        </div>
                    </div>

                    ${this.renderBetsTable()}
                </div>
            </div>
        `}}customElements.define("bma-leaderboard-card",It);class Ni{static isPayout(t){if(!t?.Bet||!t?.Match)return console.error("[CoreBetSlip.isPayout] Invalid bet object - missing Bet or Match data"),!1;const{type:n,scope:a}=t.Bet,{home_team_id:s,home_team_score:r,away_team_id:o,away_team_score:i}=t.Match,l=n?.toUpperCase()||"",u=parseFloat(r)||0,d=parseFloat(i)||0;if(u===0&&d===0)return console.warn("[CoreBetSlip.isPayout] Invalid scores - both teams have 0 points"),!1;switch(console.log(`[CoreBetSlip.isPayout] Evaluating ${l} bet:`,{home:`${s} (${u})`,away:`${o} (${d})`,scope:a}),l){case"MONEY":return this._evaluateMoneyline(a.team_id,s,o,u,d);case"SPREAD":return this._evaluateSpread(a.team_id,a.point,s,o,u,d);case"TOTAL":return this._evaluateTotal(a.over,a.under,u,d);case"PROP":return console.warn("[CoreBetSlip.isPayout] PROP bet evaluation not implemented"),!1;case"PARLAY":return console.warn("[CoreBetSlip.isPayout] PARLAY bet evaluation not implemented"),!1;default:return console.warn("[CoreBetSlip.isPayout] Unknown bet type:",l),!1}}static _evaluateMoneyline(t,n,a,s,r){const o=t===n,i=t===a;if(!o&&!i)return console.warn("[CoreBetSlip.isPayout] Betted team does not match home or away team"),!1;const l=s>r,u=r>s;if(s===r)return console.log("[CoreBetSlip.isPayout] MONEY - PUSH (tie game)"),!1;const f=o&&l||i&&u;return console.log(`[CoreBetSlip.isPayout] MONEY - ${f?"WON":"LOST"}`),f}static _evaluateSpread(t,n,a,s,r,o){const i=t===a,l=t===s;if(!i&&!l)return console.warn("[CoreBetSlip.isPayout] Betted team does not match home or away team"),!1;const u=parseFloat(n)||0;let d=r,f=o;i?d=r+u:f=o+u;const g=d>f,p=f>d;if(d===f)return console.log("[CoreBetSlip.isPayout] SPREAD - PUSH (exact spread)"),!1;const c=i&&g||l&&p;return console.log(`[CoreBetSlip.isPayout] SPREAD (${u>0?"+":""}${u}) - ${c?"WON":"LOST"}`),c}static _evaluateTotal(t,n,a,s){const r=a+s,o=t&&t!=="";if(!o&&!(n&&n!==""))return console.warn("[CoreBetSlip.isPayout] No over/under value specified"),!1;const l=parseFloat(o?t:n);if(r===l)return console.log("[CoreBetSlip.isPayout] TOTAL - PUSH (exact line)"),!1;let u=!1;return o?(u=r>l,console.log(`[CoreBetSlip.isPayout] TOTAL OVER ${l} (actual: ${r}) - ${u?"WON":"LOST"}`)):(u=r<l,console.log(`[CoreBetSlip.isPayout] TOTAL UNDER ${l} (actual: ${r}) - ${u?"WON":"LOST"}`)),u}static calcPayout(t){if(!t?.Bet)return console.error("[CoreBetSlip] Invalid bet object - missing Bet data"),0;const{type:n,odds:a,stake:s}=t.Bet,r=n?.toUpperCase()||"",o=parseFloat(a)||0,i=parseFloat(s)||0;if(i<=0)return console.warn("[CoreBetSlip] Invalid stake amount:",i),0;if(o===0)return console.warn("[CoreBetSlip] Invalid odds value:",o),0;let l=0;switch(r){case"SPREAD":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] SPREAD payout calculated:",{odds:o,stake:i,payout:l});break;case"MONEY":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] MONEY payout calculated:",{odds:o,stake:i,payout:l});break;case"TOTAL":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] TOTAL payout calculated:",{odds:o,stake:i,payout:l});break;case"PROP":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] PROP payout calculated:",{odds:o,stake:i,payout:l});break;case"PARLAY":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] PARLAY payout calculated (single odds):",{odds:o,stake:i,payout:l});break;default:console.warn("[CoreBetSlip] Unknown bet type:",r),l=0;break}return parseFloat(l.toFixed(2))}static calcAmericanOddsPayout(t,n){let a=0;return t>0?a=n*(t/100):t<0?a=n/(Math.abs(t)/100):a=0,n+a}static americanToDecimal(t){return t>0?t/100+1:t<0?100/Math.abs(t)+1:1}static calcImpliedProbability(t){return t>0?100/(t+100)*100:t<0?Math.abs(t)/(Math.abs(t)+100)*100:0}}const cp={class:"home-layout"},dp=["data-user-name"],up={__name:"home_route",setup(e){const t=ht(),n=ve();window.CoreBetSlip=Ni,document.addEventListener("click",i=>{const l=i.target;l&&l.dataset?.publishRouteHome&&(l.dataset.publishRouteHome.startsWith("ROUTE.HOME.SODAPOP_PLAY.")&&document.querySelectorAll("#sodapop_play .btn-info-sm").forEach(d=>{d===l?(d.style.background="var(--app-core-color--yellow-1__dark--brand, #ffcc33)",d.style.color="var(--app-core-color--green-1__dark--brand, #27794d)"):(d.style.background="#27794d1A",d.style.color="#fff")}),J.publish(l.dataset.publishRouteHome,`{"ts": ${Date.now()} }`)),l&&l.dataset?.sodapopClose&&neodigmSodaPop&&neodigmSodaPop.close()});const a=(i,l=!1)=>{const u=document.querySelector(".tournaments-grid");if(!u)return;u.innerHTML="";const d=document.getElementById("app"),f=d?.getAttribute("data-sync-theme")||"dark",g=d?.getAttribute("data-sync-lang")||"en",p=d?.getAttribute("data-sync-motif")||"brand",h=c=>{const m=document.createElement("article"),_=c.status||"DRAFT";m.className=`tournament-item tournament-status-${_.toLowerCase()}`;const y=document.createElement("bma-tournament-card");return y.setAttribute("data-bma-tourn-id",c.id||""),y.setAttribute("data-bma-tourn-guid",c.guid||""),y.setAttribute("data-bma-tourn-caption",c.caption||""),y.setAttribute("data-bma-tourn-tagline",c.tagline||""),y.setAttribute("data-bma-tourn-window_start_time",c.window_start_time||""),y.setAttribute("data-bma-tourn-window_end_time",c.window_end_time||""),y.setAttribute("data-bma-tourn-sports_allowed",Array.isArray(c.sports_allowed)?JSON.stringify(c.sports_allowed):c.sports_allowed||""),y.setAttribute("data-bma-tourn-entities",c.entities?JSON.stringify(c.entities):""),y.setAttribute("data-bma-tourn-tournament_dollars",c.tournament_dollars||""),y.setAttribute("data-bma-tourn-prize_distro",Array.isArray(c.prize_distro)?JSON.stringify(c.prize_distro):c.prize_distro||""),y.setAttribute("data-bma-tourn-matches",Array.isArray(c.matches_guids)?JSON.stringify(c.matches_guids):c.matches_guids||""),y.setAttribute("data-bma-tourn-matches_expanded",Array.isArray(c.matches_expanded)?JSON.stringify(c.matches_expanded):c.matches_expanded||""),y.setAttribute("data-bma-tourn-entry_fee",c.entry_fee||""),y.setAttribute("data-bma-tourn-rake",c.rake||""),y.setAttribute("data-bma-tourn-tags",Array.isArray(c.tags)?JSON.stringify(c.tags):c.tags||""),y.setAttribute("data-bma-tourn-comments",c.comments||""),y.setAttribute("data-bma-tourn-class",c.status||""),y.setAttribute("data-bma-tourn-status",c.status||""),y.setAttribute("data-sync-theme",f),y.setAttribute("data-sync-lang",g),y.setAttribute("data-sync-motif",p),y.setAttribute("data-n55-size","medium"),y.setAttribute("data-n55-enchanted-cta-ambient","none"),y.setAttribute("data-tourn-custom-css",""),y.setAttribute("data-tourn-trophy","0"),y.setAttribute("data-bma-tourn-focus",""),y.setAttribute("data-bma-tourn-wait","false"),m.appendChild(y),m};l?i.forEach(c=>{const m=document.createElement("div");m.className="tournament-category";const _=document.createElement("header");_.className="tournament-category-header";const y=document.createElement("h2");if(y.className="category-title",y.textContent=c.title,_.appendChild(y),c.subtext){const T=document.createElement("p");T.className="category-subtext",T.textContent=c.subtext,_.appendChild(T)}m.appendChild(_),u.appendChild(m),c.tournaments.forEach(T=>{const S=h(T);u.appendChild(S)})}):i.forEach(c=>{const m=h(c);u.appendChild(m)})},s=i=>{document.querySelectorAll("bma-tournament-card").forEach(u=>{u.setAttribute("data-sync-theme",i)})},r=i=>{const l=document.querySelectorAll("bma-tournament-card"),u=Date.now().toString();l.forEach(d=>{if(d===i){if(d.setAttribute("data-bma-tourn-focus",u),d.shadowRoot){const f=d.shadowRoot.querySelector(".card-focus__feedback");f&&(f.style.visibility="visible")}typeof neodigmMarquee<"u"&&neodigmMarquee.init()}else if(d.setAttribute("data-bma-tourn-focus",""),d.shadowRoot){const f=d.shadowRoot.querySelector(".card-focus__feedback");f&&(f.style.visibility="hidden")}})},o=i=>{const{action:l,tournamentId:u,tournamentGuid:d,tournamentStatus:f,...g}=i.detail;console.log("[home_route] Tournament action:",{action:l,tournamentId:u,tournamentGuid:d,tournamentStatus:f,...g}),r(i.target),J.publish("WC.TOURN_ACTION",JSON.stringify({action:l,tournamentId:u,tournamentGuid:d,tournamentStatus:f,...g,timestamp:Date.now()}))};return jt(async()=>{if(!n.appSession.session_user.authenticated){console.log("User not authenticated, redirecting to signin"),t.push({name:"signin_route"});return}const i=document.getElementById("app");if(i){const u=n.appCLIFeatures.features.theme?.state,d=n.appCLIFeatures.features.lang?.state,f=n.appCLIFeatures.features.motif?.state,g=n.appSession.session_user.guid;u&&(i.setAttribute("data-sync-theme",u),document.body.setAttribute("data-sync-theme",u)),d&&i.setAttribute("data-sync-lang",d),f&&i.setAttribute("data-sync-motif",f),g&&i.setAttribute("data-user-guid",g)}window._homeRouteRenderCards=a;const l=J.subscribe("APP.ROUTE_SYNC",(u,d)=>{try{const f=JSON.parse(d);f.theme&&s(f.theme.state)}catch(f){console.error("[home_route] Failed to parse APP.ROUTE_SYNC data:",f)}});window._homeRoutePubSubToken=l,console.log("[home_route] Publishing ROUTE.HOME_ONMOUNT"),J.publish("ROUTE.HOME_ONMOUNT",JSON.stringify({timestamp:Date.now()})),document.addEventListener("bma-tournament-action",o)}),Ta(()=>{document.removeEventListener("bma-tournament-action",o),delete window._homeRouteRenderCards,window._homeRoutePubSubToken&&J.unsubscribe(window._homeRoutePubSubToken)}),(i,l)=>(Qe(),ft("main",cp,[k("bma-app-head-top",{"data-user-name":Ft(n).appSession.session_user.name||"Guest"},null,8,dp),l[0]||(l[0]=qt('<bma-app-head-mid data-selected-tab="head_mid_lobby"></bma-app-head-mid><bma-app-head-sports data-selected-chip="all"></bma-app-head-sports><section class="tournaments-section"><div class="tournaments-grid"></div></section><bma-app-foot data-selected-item="foot_all_sports"></bma-app-foot>',4))]))}},pp={};function fp(e,t){return Qe(),ft("main",null,[...t[0]||(t[0]=[k("h1",null,"App FAQ",-1)])])}const Qn=Gt(pp,[["render",fp]]),hp={};function gp(e,t){return Qe(),ft("main",null,[...t[0]||(t[0]=[k("h1",null,"App Help",-1)])])}const mp=Gt(hp,[["render",gp]]),Dt=class Dt{static async establishSSE(t,n,a,s=!0){this.strChat=a,this.isDebug=s,console.log(" ~... sse client 'Q' | ","Q"),t=t.replaceAll("##SSEID##",n).replaceAll("##LASTKEY##",localStorage.getItem("sse_lastkey")||-1),this.isDebug&&console.warn(" ~... sse push uri | ",t),this.sseEvent&&(this.sseEvent.close(),this.sseEvent=null),this.sseEvent=new EventSource(t),this.sseEvent.onopen=function(r){Dt.onSSEOpen(r)},this.sseEvent.onmessage=function(r){Dt.onSSEMessage(r)},this.sseEvent.onerror=function(r){Dt.onSSEError(r)}}static async onSSEOpen(t){this.isDebug&&console.warn(" ~... sse push onSSEOpen ev | ",t)}static async onSSEMessage(t){let n=null;if(this.isDebug&&console.warn(" ~... sse push onSSEMessage ev | ",t),t?.data){localStorage.setItem("sse_lastkey",t?.data?.id||-1);try{if(n=JSON.parse(t.data),n?.class!="NO_MESSAGE")if(n?.class&&n?.msg)switch(n.class){case"BANNER_DISMISS":break;case"BANNER_MODAL":break;case"BANNER_MODAL_CLOSE":break;case"BUBBLE_CONFETTI":break;case"BUBBLE_MARQUEE":break;case"BUBBLE":break;case"CLI":break;case"CONSOLE":break;case"FEATURE_FLAG":break;case"MVV_POPUP":break;case"MVV_TOAST":n?.msg&&neodigmWired4Sound&&(neodigmWired4Sound.sound(5).vibrate(),neodigmToast.q(n.msg,"brand",4500),this.isDebug&&console.warn(" ~... sse push pushPackage.id class msg criterion  | ",n.id+" | "+n.class+" | "+n.msg+" | "+n.criterion));break;case"WEBNOTE":break;case"GUIDED_TOUR":break;case"META_MACRO":break;case"META_TEMPLATE":break;case"MVV_CAROUSEL":break;case"MVV_POPOVER":break;case"MVV_WIDGET":break;case"RECONNECT":break;case"TOURNAMENT_SYNC":this.isDebug&&console.warn(" ~... sse TOURNAMENT_SYNC | ",n),J.publish("SSE.CORE.TOURN_SYNC",JSON.stringify(n));break}else this.isDebug&&console.warn(" ~... sse push - invalid package - no class/msg");else this.isDebug&&console.warn(" ~... sse push - no message")}catch{this.isDebug&&console.warn(" ~... sse push - invalid package")}}}static async onSSEError(t){this.isDebug&&console.warn(" ~... sse push onSSEError ev | ",t)}static async disconnectSSE(t){this.isDebug&&console.warn(" ~... sse push disconnectSSE ev | ",t),this.sseEvent.close(),this.sseEvent=null}};Dt.sseEvent=null,Dt.strChat=null,Dt.isDebug=!0;let pa=Dt;class Pt{static neodigmOpt={neodigmToast:!0,N55_GTM_DL_TOAST:"n55_gtm_dl_toast",neodigmSodaPop:!0,N55_SP_DISABLE_SCROLL:!0,N55_GTM_DL_POP_OPEN:"n55_gtm_dl_pop_open",N55_GTM_DL_POP_CLOSE:"n55_gtm_dl_pop_close",neodigmWired4Sound:!0,W4S_VOLUME:.022,EVENT_SOUNDS:!0,neodigmParallax:!0,PRLX_MOBILE:!1,neodigmMarquee:!0,neodigmEnchantedCTA:!0,N55_CTA_RND_TOUCH:14001,N55_GTM_DL_CTA:"n55_gtm_dl_cta",N55_CTA_LONG_TAP:3400,N55_CTA_FX:["alternate","emit","flash_danger","flash_warning","radius","scroll","shake"],neodigmKPI:!0,N55_GTM_DL_KPI:"n55_gtm_dl_kpi",neodigmPWA:!0,N55_PWA_TEMPLATE_ID:"js-pup-n55-pwa",neodigmCarousel:!0,N55_GTM_DL_CARSL:"n55_gtm_dl_carsl",N55_CARO_BLUR:!0,neodigmTulip:!0,neodigmPopTart:!0,N55_GTM_DL_POPTRT:"n55_gtm_dl_poptrt",neodigmAgent:!0,API_baseURI:"https://a55-wtt-api-v1.onrender.com/",API_ver:"v1",neodigmPicnic:!0,N55_GTM_DL_PICNIC:"n55_gtm_dl_picnic",neodigmWWInterval:!0,neodigmMetronome:{countTo:116,neodigmMarquee:132},N55_ZIND:{PopTart:264},CONSOLE_LOG_VER:!0,N55_DEBUG_lOG:!1,N55_AMPM_THEME:"light",N55_EVENT_HAPTIC:!0,N55_FLASH_TITLE:!0,N55_GENRE_MOTIF:"neodigm",N55_THEME_DEFAULT:"brand",N55_THEME_COLORS:{brand:["EDBA08","915E00","🟧"],primary:["92a8d1","364C75","🟦"],secondary:["EDCED0","978284","🟫"],success:["009473","003817","🟩"],white:["FFFFFF","FDFDFD","⬜"],ghost:["ffffff","000000","⬜"],danger:["DD4124","810000","🟥"],warning:["F5DF4D","988200","🟨"],info:["7BC4C4","1F6868","🟦"],disabled:["868686","767676","⬜"],night:["6a6a6a","242424","⬛"],marcom:["B163A3","5F4B8B","🟪"],party:["FF6F61","C93F60","🟪"]},N55_APP_STATE:{CONTEXT:"body",FIRST_TAP:!1,ONLINE:!0,PWA_READY:!1,PWA_CONTAIN:!1,SHAKE:!1,CONTEXTMNU:!1,FOCUS:!0,AMPM:"light",REDUCE_MOTION:!1},ROOT:document.querySelector(":root"),N55_TYPE:"https://fonts.googleapis.com/css?family=Roboto+Condensed:wght@100;300;400|Roboto+Slab:wght@300|Roboto+Mono:wght@300|Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,300,0,0"};static neodigmUtils=((t=document)=>({ver:"4.0.0",isMobile:function(){return t.body.clientWidth<=768},isTouch:function(){return typeof document.body.ontouchstart<"u"},f1210:function(){return Math.floor(Math.random()*10+1)},f02x:function(n){return Math.floor(Math.random()*n)},fPromiseJS:async function(n,a){return new Promise((s,r)=>{const o=Object.assign(n.createElement(LZString.decompress("㎆ぎॠข")),{type:LZString.decompress("அ〞샴ՠ蘆㠘쁎Ұΰ耀"),src:a});o.onload=s,o.onerror=r,n.getElementsByTagName("head")[0].appendChild(o)})},fAsyncJS:function(n,a,s){const r=Object.assign(n.createElement(LZString.decompress("㎆ぎॠข")),{type:LZString.decompress("அ〞샴ՠ蘆㠘쁎Ұΰ耀"),src:a});s&&(r.onload=function(){s()}),n.getElementsByTagName("head")[0].appendChild(r)},fAsyncCSS:function(n,a){let s=n.createElement("link");s.rel="stylesheet",s.href=a,n.getElementsByTagName("head")[0].appendChild(s)},data2prop:function(n){n=n.replace("data-","").toLowerCase();let a=n.split(""),s=[],r=!1;return a.forEach(o=>{o=="-"?r=!0:(s.push(r?o.toUpperCase():o),r=!1)}),s.join("")},doDataLayer:function(n,a){neodigmOpt.N55_DEBUG_lOG&&console.log("~ga | "+n+" | "+a),window.dataLayer&&window.dataLayer.push({event:n,msg:a})},isJSON:function(n){let a=!1;try{a=typeof JSON.parse(n)}catch{}return a=="object"},appStateListen:function(n){NeodigmKeylime.subscribe("mouseover",s=>{s?.target?.dataset?.n55TypeonHover&&neodigmUtils.typeOn(JSON.parse(s.target.dataset.n55TypeonHover))},!0),NeodigmKeylime.subscribe("click",s=>{neodigmOpt.N55_APP_STATE.FIRST_TAP||(neodigmOpt.N55_APP_STATE.FIRST_TAP=!0),neodigmOpt.neodigmTulip&&neodigmTulip.close();let r=neodigmUtils.walkDOM3(s?.target,"n55TypeonClick");r&&neodigmUtils.typeOn(JSON.parse(r))},!0),NeodigmKeylime.subscribe("touchstart",s=>{neodigmOpt.N55_APP_STATE.FIRST_TAP||(neodigmOpt.N55_APP_STATE.FIRST_TAP=!0),neodigmOpt.neodigmTulip&&neodigmTulip.close()},!0),NeodigmKeylime.subscribe("resize",s=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmCarousel&&neodigmCarousel.init(),neodigmOpt.neodigmTulip&&neodigmTulip.close(),neodigmOpt.neodigmPopTart&&neodigmPopTart.close()})},!0,window),NeodigmKeylime.subscribe("orientationchange",s=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmCarousel&&neodigmCarousel.init(),neodigmOpt.neodigmTulip&&neodigmTulip.close(),neodigmOpt.neodigmPopTart&&neodigmPopTart.close()})},!0,window),NeodigmKeylime.subscribe("scroll",s=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmTulip&&neodigmTulip.close()})},!0,window),neodigmOpt.N55_APP_STATE.REDUCE_MOTION=!window.matchMedia("(prefers-reduced-motion: no-preference)").matches;let a=document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelector("[data-n55-Ampm-theme]")?.dataset.n55AmpmTheme;a&&(neodigmOpt.N55_AMPM_THEME=neodigmOpt.N55_APP_STATE.AMPM=a)},prettyTimeRETIRE:n=>{let a=new Date(n).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"});return n=="Dec 31, 1969"&&(a=""),a},prettyTime:n=>new Date(n).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"}),capFirst:n=>n&&n[0].toUpperCase()+n.slice(1)||"",genHash:n=>(n=String(n),Math.abs(n.split("").reduce((a,s)=>(a<<5)-a+s.charCodeAt(0)|0,0))),flashTitle:(n=neodigmOpt.N55_THEME_DEFAULT,a=4e3)=>{neodigmOpt.N55_FLASH_TITLE&&(document?.n55Title||(document.n55Title=document.title),neodigmOpt?.N55_THEME_COLORS[n]&&(document.title=neodigmOpt.N55_THEME_COLORS[n][2]+document.n55Title),neodigmUtils.doSetT(function(){document.title=document.n55Title},a))},robinTheme:function(n=Object.keys(neodigmOpt.N55_THEME_COLORS)[0]){if(!neodigmMetronome.isPaused()){let a=[...document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelectorAll("[data-n55-theme")];const s=56;a.forEach((o,i)=>{o.dataset.n55Theme!="disabled"&&(o.n55Theme||(o.n55Theme=o.dataset.n55Theme),setTimeout(function(){o.dataset.n55Theme=n},i*s),setTimeout(function(){o.dataset.n55Theme=o.n55Theme},i*(s+s)))}),a=[...document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelectorAll("[data-n55-theme-pulse")];const r=256;a.forEach((o,i)=>{o.n55ThemePulse||(o.n55ThemePulse=o.dataset.n55ThemePulse),setTimeout(function(){o.dataset.n55ThemePulse=n},i*r),setTimeout(function(){o.dataset.n55ThemePulse=o.n55ThemePulse},i*r+3e3)}),neodigmUtils.flashTitle(n,2e3)}},countTo:async function(n,a,s=neodigmOpt.neodigmMetronome.countTo){const r=[16,s];return[...document.querySelectorAll(n)].forEach(function(o,i){let l=Math.abs(Number(o.textContent)-a);neodigmMetronome.unsubscribe(r[1]+i).subscribe(function(u){let d=Number(o.textContent);if(!Number.isNaN(d)&&!isNaN(d)&&a!=d){let f=l/r[0];f=Math.round(f),u!=0?o.textContent=d<a?d+f:d-f:o.textContent=a}},r[1]+i,r[0])}),neodigmUtils},typeOff:async function(n){let a=document.querySelector(n?.q1st);if(a){let s=a.textContent.length,r=window.getComputedStyle(a),o=Number(r.paddingTop.replace("px",""))+Number(r.paddingBottom.replace("px",""));for(a.offsetHeight&&(a.style.height=a.offsetHeight-o+"px");s;)setTimeout(()=>{a.textContent=a.textContent.replace(/.$/,"")},n.uniqueDelay*s--)}},typeOn:async function(n){let a=document.querySelector(n?.q1st);if(a){a.dataset.n55Typeon=0;let s=n.msg.replaceAll("|","   |   ")+"   ",r=s.split("|");if(n?.mode=="OFF")return neodigmUtils.typeOff({q1st:n.q1st,uniqueDelay:n.uniqueDelay}),neodigmUtils;if(n?.mode=="RANDOM"&&r.length){let o=a.dataset.n55Typeon=neodigmUtils.f02x(r.length);s=r[o]}neodigmUtils.typeOff({q1st:n.q1st,uniqueDelay:n.uniqueDelay/a.textContent.length-4}),neodigmMetronome.unsubscribe(n.uniqueDelay).subscribe(o=>{let i=s[s.length-(o+1)];i=="|"&&(i="",neodigmUtils.typeOff({q1st:n.q1st,uniqueDelay:n.uniqueDelay/a.textContent.length-4}),a.dataset.n55Typeon++),a.textContent+=i,n?.mode=="LOOP"&&o==0&&neodigmUtils.typeOn(n)},n.uniqueDelay,s.length)}return neodigmUtils},getValJSON:function(n,a){try{return JSON.parse(n)}catch{return JSON.parse('{ "'+a+'": "'+n+'" }')}},walkDOM3:function(n,a,s=!1){let r=null;if(!r&&n?.dataset[a]&&(r=n),!r&&n?.parentNode?.dataset[a]&&(r=n.parentNode),!r&&n.tagName!="BODY"&&n?.parentNode?.parentNode?.dataset[a]&&(r=n.parentNode.parentNode),r)return s?r:r.dataset[a]},doSetT:function(n,a){return neodigmOpt.neodigmWWInterval?window.setTimeoutN55(n,a):setTimeout(n,a)},shake:function(n,a=!0){return[...document.querySelectorAll(n)].forEach(function(s,r){s.classList.add("shake__an"),setTimeout(function(){s.classList.remove("shake__an")},460)}),Pt.neodigmUtils},hardReload:function(n="n55reset"){const a=new URLSearchParams(window.location.search);a.set(n,new Date().getTime());const s=a.toString();window.location.search=s}}))}const _p={class:"auth-page"},bp={class:"auth-page-right"},yp={class:"auth-card"},vp={class:"form-group"},Tp={class:"form-group"},Ep={class:"password-input-wrapper"},Sp=["type"],Ap={style:{"text-align":"right"}},Op={class:"auth-link-center"},Pp={__name:"signin_route",setup(e){const t=ht(),n=ve(),a=(g="signin")=>{t.push({name:g})};let s=null;const r=Je(!1),o=()=>{r.value=!r.value},i=(g=3,p=1)=>{switch(n.appCLIFeatures.features.motif.state){case"brand":g=3,p=1;break;case"white_label":g=3,p=4;break}const h=Math.floor(Math.random()*g)+p,c=document.querySelector(".img__bg")?.classList;c&&(c.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),c.add(`img__bg--${h}`)),s||(s=J.subscribe("APP__ROUTE_SYNC",(m,_)=>{const y=JSON.parse(_);switch(Object.keys(y)[0]){case"Motif":i();break;case"Lang":l();break}}))},l=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(g=>{const p=n.appCLIFeatures?.features?.lang?.state;let h=n.appMeta.microcopy.language.filter(c=>c.code==p)[0]?.copy;h=h.filter(c=>c[0]==g.dataset.syncMicrocopyText)[0],h&&(g.textContent=h[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(g=>{const p=n.appCLIFeatures?.features?.lang?.state;let h=n.appMeta.microcopy.language.filter(c=>c.code==p)[0]?.copy;h=h.filter(c=>c[0]==g.dataset.syncMicrocopyPlaceholder)[0],h&&(g.placeholder=h[1])})},u=g=>{Pt.neodigmUtils().shake(g||"#inp__text--email")},d=()=>{let g=document.querySelectorAll("#inp__text--email")[0].value;neodigmUtils.messageNotification("Cub vs. Cardianals","https://mach-five-group.github.io/bma-landing/Assets/Bet%20Max%20Action-Full%20Lockup-600.png"),n.doCLI(g)},f=()=>{const g=document.querySelector("#inp__text--email"),p=document.querySelector("#inp__text--password");let h=null,c=null;if(!g?.value)h="Please enter your email",c="#inp__text--email";else if(g.value.indexOf("@")===-1||g.value.indexOf(".")===-1)h="Please enter a valid email address",c="#inp__text--email";else if(!p?.value)h="Please enter your password",c="#inp__text--password";else if(p.value.length<10)h="Password must be at least 10 characters",c="#inp__text--password";else{const m={email:g.value,hash:Pt.neodigmUtils().genHash(p.value)};be.doSignin(m,_=>{const S=(_?.entity?.tags||[]).find(x=>x.userName)?.userName||"";if(n.appSession.session_user.authenticated=!0,n.appSession.session_user.email=m.email,n.appSession.session_user.fname=_?.entity?.first,n.appSession.session_user.lname=_?.entity?.last,n.appSession.session_user.userName=S,n.appSession.session_user.name=S,n.appSession.session_user.guid=_?.entity?.guid,n.saveSessionUser(),n.appCLIFeatures.features.sse.state){const x=_?.entity?.guid||n.appSession.session_user.guid;pa.establishSSE("https://machfive-bmacdev-rest.onrender.com/v5/sse?appid=BMACORE&sseid=##SSEID##&lastkey=##LASTKEY##",x,n,!0)}})}h&&(u(c),neodigmToast.q(h,"danger"))};return jt(()=>{i(),l()}),(g,p)=>(Qe(),ft("div",_p,[p[10]||(p[10]=qt('<div class="auth-page-left" data-v-9f21eb27><div class="auth-bg" data-v-9f21eb27><div class="auth-bg-image" data-v-9f21eb27></div><div class="auth-bg-image" data-v-9f21eb27></div><div class="auth-bg-image" data-v-9f21eb27></div></div><div class="auth-overlay" data-v-9f21eb27></div><div class="auth-branding-content" data-v-9f21eb27><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-9f21eb27><p class="auth-branding-tagline" data-v-9f21eb27>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-9f21eb27>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-9f21eb27> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),k("div",bp,[k("div",yp,[p[9]||(p[9]=k("div",{class:"auth-header"},[k("h1",{class:"auth-title","data-sync-microcopy-text":"welcome_back"},"Welcome Back"),k("p",{class:"auth-subtitle","data-sync-microcopy-text":"please_enter_your_details"},"Please enter your details to sign in")],-1)),k("form",{class:"auth-form",onSubmit:Oa(f,["prevent"])},[k("div",vp,[p[4]||(p[4]=k("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),k("input",{id:"inp__text--email",type:"text","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onDblclick:p[0]||(p[0]=h=>d())},null,32)]),k("div",Tp,[p[5]||(p[5]=k("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),k("div",Ep,[k("input",{id:"inp__text--password",type:r.value?"text":"password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password"},null,8,Sp),k("button",{type:"button",class:"password-toggle-btn",onClick:p[1]||(p[1]=h=>o()),tabindex:"-1"},[k("span",{class:$t(r.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),k("div",Ap,[k("a",{class:"auth-link",onClick:p[2]||(p[2]=h=>a("forgot_route")),"data-sync-microcopy-text":"forgot_password"},"Forgot Password?")]),p[8]||(p[8]=k("div",{class:"auth-actions"},[k("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"sign_in"},"Sign In")],-1)),k("p",Op,[p[6]||(p[6]=k("span",{"data-sync-microcopy-text":"dont_have_an_account"},"Don't have an account?",-1)),p[7]||(p[7]=Aa()),k("a",{class:"auth-link",onClick:p[3]||(p[3]=h=>a("signup_route")),"data-sync-microcopy-text":"sign_up"},"Sign Up")])],32)])])]))}},kp=Gt(Pp,[["__scopeId","data-v-9f21eb27"]]),wp={class:"auth-page"},xp={__name:"signout_route",setup(e){const t=ht();ve();const n=()=>{mvvLegit.doSignout()},a=()=>{t.push({name:"home_route"})};return(s,r)=>(Qe(),ft("div",wp,[r[1]||(r[1]=qt('<div class="auth-page-left" data-v-900c11b9><div class="auth-bg" data-v-900c11b9><div class="auth-bg-image" data-v-900c11b9></div><div class="auth-bg-image" data-v-900c11b9></div><div class="auth-bg-image" data-v-900c11b9></div></div><div class="auth-overlay" data-v-900c11b9></div><div class="auth-branding-content" data-v-900c11b9><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-900c11b9><p class="auth-branding-tagline" data-v-900c11b9>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-900c11b9>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-900c11b9> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),k("div",{class:"auth-page-right"},[k("div",{class:"auth-card"},[r[0]||(r[0]=k("div",{class:"auth-header"},[k("h1",{class:"auth-title"},"Sign Out"),k("p",{class:"auth-subtitle"},"Confirm you want to sign out")],-1)),k("div",{class:"auth-actions"},[k("button",{onClick:n,class:"btn btn-red"}," Sign Out "),k("button",{onClick:a,class:"btn btn-outline"}," Cancel ")])])])]))}},Cp=Gt(xp,[["__scopeId","data-v-900c11b9"]]),Rp={class:"auth-page"},Np={class:"auth-page-right",style:{display:"block"}},Lp={class:"auth-card auth-card-wide"},Ip={class:"form-group"},Dp={class:"form-group"},Mp={class:"form-group"},Bp={class:"form-group"},Fp={class:"form-group"},$p={class:"password-input-wrapper"},Up=["type"],Hp={class:"form-group"},Kp={class:"password-input-wrapper"},Yp=["type"],jp={class:"auth-link-center"},qp={__name:"signup_route",setup(e){const t=ht(),n=ve(),a=(m="signin")=>{t.push({name:m})};be.getTJO()&&a("contests");let s=null;const r=Je(!1),o=Je(!1),i=()=>{r.value=!r.value},l=()=>{o.value=!o.value},u=(m=3,_=1)=>{switch(n.appCLIFeatures.features.motif.state){case"brand":m=3,_=1;break;case"white_label":m=3,_=4;break}const y=Math.floor(Math.random()*m)+_,T=document.querySelector(".img__bg")?.classList;T&&(T.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),T.add(`img__bg--${y}`)),s||(s=J.subscribe("APP__ROUTE_SYNC",(S,x)=>{const L=JSON.parse(x);switch(Object.keys(L)[0]){case"Motif":u();break;case"Lang":d();break}}))},d=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(m=>{const _=n.appCLIFeatures?.features?.lang?.state;let y=n.appMeta.microcopy.language.filter(T=>T.code==_)[0]?.copy;y=y.filter(T=>T[0]==m.dataset.syncMicrocopyText)[0],y&&(m.textContent=y[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(m=>{const _=n.appCLIFeatures?.features?.lang?.state;let y=n.appMeta.microcopy.language.filter(T=>T.code==_)[0]?.copy;y=y.filter(T=>T[0]==m.dataset.syncMicrocopyPlaceholder)[0],y&&(m.placeholder=y[1])})},f=m=>{Pt.neodigmUtils().shake(m||"#inp__text--email")},g=()=>{let m=document.querySelectorAll("#inp__text--email")[0].value;n.doCLI(m)},p=m=>{const _=[];return m.length<10&&_.push("at least 10 characters"),/[a-z]/.test(m)||_.push("1 lowercase"),/[A-Z]/.test(m)||_.push("1 uppercase"),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(m)||_.push("1 special character"),/[^\x00-\x7F]/.test(m)&&_.push("ASCII characters only"),_},h=async()=>{const m=document.querySelector("#inp__text--username"),_=m?.value?.trim();if(_)try{(await be.checkUserName(_)).userNameExists&&(neodigmToast.q("User name already taken|Please choose a different one","danger"),m.value="",m.focus())}catch(y){console.error("Error checking username:",y)}},c=()=>{const m=document.querySelector("#inp__text--first-name"),_=document.querySelector("#inp__text--last-name"),y=document.querySelector("#inp__text--email"),T=document.querySelector("#inp__text--username"),S=document.querySelector("#inp__text--password"),x=document.querySelector("#inp__text--verify-password");let L=null,w=null;if(!m?.value)L="Please enter your first name",w="#inp__text--first-name";else if(!_?.value)L="Please enter your last name",w="#inp__text--last-name";else if(!y?.value)L="Please enter your email",w="#inp__text--email";else if(y.value.indexOf("@")===-1||y.value.indexOf(".")===-1)L="Please enter a valid email address",w="#inp__text--email";else if(!T?.value)L="Please enter a user name",w="#inp__text--username";else if(!S?.value)L="Please enter a password",w="#inp__text--password";else{const I=p(S.value);if(I.length>0)L="Password must have:|"+I.join(", "),w="#inp__text--password";else if(!x?.value)L="Please verify your password",w="#inp__text--verify-password";else if(S.value!==x.value)L="Passwords do not match",w="#inp__text--verify-password";else{const O=m.value.trim(),B=_.value.trim(),K=[{userName:T.value.trim(),ts:Date.now()}],P={email:y.value,hash:Pt.neodigmUtils().genHash(S.value),first:O,last:B,company:"",phone:"",tags:K};be.doSignup(P,V=>{V.ok&&setTimeout(()=>{mvvLegit.doUNVERF()},1e3)})}}L&&(f(w),neodigmToast.q(L,"danger"))};return jt(()=>{u(),d()}),(m,_)=>(Qe(),ft("div",Rp,[_[22]||(_[22]=qt('<div class="auth-page-left" data-v-0b6f1055><div class="auth-bg" data-v-0b6f1055><div class="auth-bg-image" data-v-0b6f1055></div><div class="auth-bg-image" data-v-0b6f1055></div><div class="auth-bg-image" data-v-0b6f1055></div></div><div class="auth-overlay" data-v-0b6f1055></div><div class="auth-branding-content" data-v-0b6f1055><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-0b6f1055><p class="auth-branding-tagline" data-v-0b6f1055>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-0b6f1055>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-0b6f1055> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),k("div",Np,[k("div",Lp,[_[21]||(_[21]=k("div",{class:"auth-header"},[k("h1",{class:"auth-title","data-sync-microcopy-text":"sign_up"},"Sign Up"),k("p",{class:"auth-subtitle","data-sync-microcopy-text":"please_enter_your_details_to_get_started"},"Please enter your details to get started")],-1)),k("form",{class:"auth-form",onSubmit:Oa(c,["prevent"])},[k("div",Ip,[_[11]||(_[11]=k("label",{for:"inp__text--first-name","data-sync-microcopy-text":"first_name"},"First Name",-1)),k("input",{id:"inp__text--first-name",type:"text","data-sync-microcopy-placeholder":"enter_your_first_name",placeholder:"Enter your first name",onKeyup:_[0]||(_[0]=Tt(y=>c(),["enter"]))},null,32)]),k("div",Dp,[_[12]||(_[12]=k("label",{for:"inp__text--last-name","data-sync-microcopy-text":"last_name"},"Last Name",-1)),k("input",{id:"inp__text--last-name",type:"text","data-sync-microcopy-placeholder":"enter_your_last_name",placeholder:"Enter your last name",onKeyup:_[1]||(_[1]=Tt(y=>c(),["enter"]))},null,32)]),k("div",Mp,[_[13]||(_[13]=k("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),k("input",{id:"inp__text--email",type:"text","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onDblclick:_[2]||(_[2]=y=>g()),onKeyup:_[3]||(_[3]=Tt(y=>c(),["enter"]))},null,32)]),k("div",Bp,[_[14]||(_[14]=k("label",{for:"inp__text--username","data-sync-microcopy-text":"username"},"User Name",-1)),k("input",{id:"inp__text--username",type:"text","data-sync-microcopy-placeholder":"public_alias",placeholder:"Public Alias",onBlur:_[4]||(_[4]=y=>h()),onKeyup:_[5]||(_[5]=Tt(y=>c(),["enter"]))},null,32)]),k("div",Fp,[_[15]||(_[15]=k("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),k("div",$p,[k("input",{id:"inp__text--password",type:r.value?"text":"password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password",onKeyup:_[6]||(_[6]=Tt(y=>c(),["enter"]))},null,40,Up),k("button",{type:"button",class:"password-toggle-btn",onClick:_[7]||(_[7]=y=>i()),tabindex:"-1"},[k("span",{class:$t(r.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])]),_[16]||(_[16]=k("small",{"data-sync-microcopy-text":"must_be_at_least_10_characters_long"},"Must be at least 10 characters long",-1))]),k("div",Hp,[_[17]||(_[17]=k("label",{for:"inp__text--verify-password","data-sync-microcopy-text":"verify_password"},"Verify Password",-1)),k("div",Kp,[k("input",{id:"inp__text--verify-password",type:o.value?"text":"password","data-sync-microcopy-placeholder":"re_enter_your_password",placeholder:"Re-enter your password",onKeyup:_[8]||(_[8]=Tt(y=>c(),["enter"]))},null,40,Yp),k("button",{type:"button",class:"password-toggle-btn",onClick:_[9]||(_[9]=y=>l()),tabindex:"-1"},[k("span",{class:$t(o.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),_[20]||(_[20]=k("div",{class:"auth-actions"},[k("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"sign_up"},"Sign Up")],-1)),k("p",jp,[_[18]||(_[18]=k("span",{"data-sync-microcopy-text":"already_have_an_account"},"Already have an account?",-1)),_[19]||(_[19]=Aa()),k("a",{class:"auth-link",onClick:_[10]||(_[10]=y=>a("signin_route")),"data-sync-microcopy-text":"log_in"},"Sign In")])],32)])])]))}},Gp=Gt(qp,[["__scopeId","data-v-0b6f1055"]]),Wp={class:"auth-page"},Jp={class:"auth-page-right"},Vp={class:"auth-card"},zp={class:"form-group"},Qp={class:"auth-link-center"},Xp={__name:"forgot_route",setup(e){const t=ht(),n=ve(),a=(u="signin_route")=>{t.push({name:u})};be.getTJO()&&a("contests");let s=null;const r=(u=3,d=1)=>{switch(n.appCLIFeatures.features.motif.state){case"brand":u=3,d=1;break;case"white_label":u=3,d=4;break}const f=Math.floor(Math.random()*u)+d,g=document.querySelector(".img__bg")?.classList;g&&(g.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),g.add(`img__bg--${f}`)),s||(s=J.subscribe("APP__ROUTE_SYNC",(p,h)=>{const c=JSON.parse(h);switch(Object.keys(c)[0]){case"Motif":r();break;case"Lang":o();break}}))},o=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(u=>{const d=n.appCLIFeatures?.features?.lang?.state;let f=n.appMeta.microcopy.language.filter(g=>g.code==d)[0]?.copy;f=f.filter(g=>g[0]==u.dataset.syncMicrocopyText)[0],f&&(u.textContent=f[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(u=>{const d=n.appCLIFeatures?.features?.lang?.state;let f=n.appMeta.microcopy.language.filter(g=>g.code==d)[0]?.copy;f=f.filter(g=>g[0]==u.dataset.syncMicrocopyPlaceholder)[0],f&&(u.placeholder=f[1])})},i=u=>{Pt.neodigmUtils().shake(u||"#inp__text--email")},l=()=>{const u=document.querySelector("#inp__text--email");let d=null,f=null;if(!u?.value)d="Please enter your email address",f="#inp__text--email";else if(u.value.indexOf("@")===-1||u.value.indexOf(".")===-1)d="Please enter a valid email address",f="#inp__text--email";else{const g={method:"GET",headers:be.genHeaders()};fetch(be.API_baseURI+"/bmac/"+be.API_ver+"/acctEntity/forgot?CODE="+encodeURIComponent(u.value),g).then(p=>p.json()).then(p=>{p.ok?(neodigmToast.q("Password reset email sent!|Please check your inbox","success"),setTimeout(()=>{a("verf_link_route")},2e3)):neodigmToast.q("Failed to send reset email|Please try again","danger")}).catch(p=>{neodigmToast.q("An error occurred|Please try again","danger")});return}d&&(i(f),neodigmToast.q(d,"danger"))};return jt(()=>{r(),o()}),(u,d)=>(Qe(),ft("div",Wp,[d[7]||(d[7]=qt('<div class="auth-page-left"><div class="auth-bg"><div class="auth-bg-image"></div><div class="auth-bg-image"></div><div class="auth-bg-image"></div></div><div class="auth-overlay"></div><div class="auth-branding-content"><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img"><p class="auth-branding-tagline">Daily Tournament Betting</p><p class="auth-branding-subtitle">Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer"> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),k("div",Jp,[k("div",Vp,[d[6]||(d[6]=k("div",{class:"auth-header"},[k("h1",{class:"auth-title","data-sync-microcopy-text":"forgot_password"},"Forgot Password"),k("p",{class:"auth-subtitle","data-sync-microcopy-text":"please_enter_your_email"},"Please enter your email to receive a password reset link")],-1)),k("form",{class:"auth-form",onSubmit:Oa(l,["prevent"])},[k("div",zp,[d[2]||(d[2]=k("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),k("input",{id:"inp__text--email",type:"text","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onKeyup:d[0]||(d[0]=Tt(f=>l(),["enter"]))},null,32)]),d[5]||(d[5]=k("div",{class:"auth-actions"},[k("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"send_reset_link"},"Send Reset Link")],-1)),k("p",Qp,[d[3]||(d[3]=k("span",{"data-sync-microcopy-text":"remember_your_password"},"Remember your password?",-1)),d[4]||(d[4]=Aa()),k("a",{class:"auth-link",onClick:d[1]||(d[1]=f=>a("signin_route")),"data-sync-microcopy-text":"sign_in"},"Sign In")])],32)])])]))}},Zp={class:"auth-page"},ef={class:"auth-page-right"},tf={class:"auth-card"},nf={class:"form-group"},af={class:"password-input-wrapper"},sf=["type"],rf={class:"form-group"},of={class:"password-input-wrapper"},lf=["type"],cf={__name:"resethash_route",setup(e){const t=ht(),n=ve(),a=()=>{t.push({name:"home_route"})};let s=null;const r=Je(!1),o=Je(!1),i=()=>{r.value=!r.value},l=()=>{o.value=!o.value},u=(h=3,c=1)=>{switch(n.appCLIFeatures.features.motif.state){case"brand":h=3,c=1;break;case"white_label":h=3,c=4;break}const m=Math.floor(Math.random()*h)+c,_=document.querySelector(".img__bg")?.classList;_&&(_.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),_.add(`img__bg--${m}`)),s||(s=J.subscribe("APP__ROUTE_SYNC",(y,T)=>{const S=JSON.parse(T);switch(Object.keys(S)[0]){case"Motif":u();break;case"Lang":d();break}}))},d=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(h=>{const c=n.appCLIFeatures?.features?.lang?.state;let m=n.appMeta.microcopy.language.filter(_=>_.code==c)[0]?.copy;m=m.filter(_=>_[0]==h.dataset.syncMicrocopyText)[0],m&&(h.textContent=m[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(h=>{const c=n.appCLIFeatures?.features?.lang?.state;let m=n.appMeta.microcopy.language.filter(_=>_.code==c)[0]?.copy;m=m.filter(_=>_[0]==h.dataset.syncMicrocopyPlaceholder)[0],m&&(h.placeholder=m[1])})},f=h=>{Pt.neodigmUtils().shake(h||"#inp__text--password")},g=h=>{const c=[];return h.length<10&&c.push("at least 10 characters"),/[a-z]/.test(h)||c.push("1 lowercase"),/[A-Z]/.test(h)||c.push("1 uppercase"),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(h)||c.push("1 special character"),/[^\x00-\x7F]/.test(h)&&c.push("ASCII characters only"),c},p=()=>{const h=document.querySelector("#inp__text--password"),c=document.querySelector("#inp__text--verify-password");let m=null,_=null;if(!h?.value)m="Please enter a password",_="#inp__text--password";else{const y=g(h.value);if(y.length>0)m="Password must have:|"+y.join(", "),_="#inp__text--password";else if(!c?.value)m="Please verify your password",_="#inp__text--verify-password";else if(h.value!==c.value)m="Passwords do not match",_="#inp__text--verify-password";else{const T=n.appSession.session_user.email||"",S={email:T,hash:Pt.neodigmUtils().genHash(h.value),modified_by:T},x={method:"POST",body:JSON.stringify(S),headers:be.genHeaders()};fetch(be.API_baseURI+"/bmac/"+be.API_ver+"/acctEntity/resetHash",x).then(L=>L.json()).then(L=>{L.ok?(neodigmToast.q("Password reset successful!|Signing you out...","success"),setTimeout(()=>{mvvLegit.doSignout()},4e3)):neodigmToast.q("Password reset failed|Please try again","danger")}).catch(L=>{neodigmToast.q("An error occurred|Please try again","danger")});return}}m&&(f(_),neodigmToast.q(m,"danger"))};return jt(()=>{u(),d()}),(h,c)=>(Qe(),ft("div",Zp,[c[9]||(c[9]=qt('<div class="auth-page-left" data-v-2ff7f7f3><div class="auth-bg" data-v-2ff7f7f3><div class="auth-bg-image" data-v-2ff7f7f3></div><div class="auth-bg-image" data-v-2ff7f7f3></div><div class="auth-bg-image" data-v-2ff7f7f3></div></div><div class="auth-overlay" data-v-2ff7f7f3></div><div class="auth-branding-content" data-v-2ff7f7f3><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-2ff7f7f3><p class="auth-branding-tagline" data-v-2ff7f7f3>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-2ff7f7f3>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-2ff7f7f3> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),k("div",ef,[k("div",tf,[c[8]||(c[8]=k("div",{class:"auth-header"},[k("h1",{class:"auth-title","data-sync-microcopy-text":"reset_password"},"Reset Password"),k("p",{class:"auth-subtitle","data-sync-microcopy-text":"please_enter_your_new_password"},"Please enter your new password")],-1)),k("form",{class:"auth-form",onSubmit:Oa(p,["prevent"])},[k("div",nf,[c[4]||(c[4]=k("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),k("div",af,[k("input",{id:"inp__text--password",type:r.value?"text":"password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password",onKeyup:c[0]||(c[0]=Tt(m=>p(),["enter"]))},null,40,sf),k("button",{type:"button",class:"password-toggle-btn",onClick:c[1]||(c[1]=m=>i()),tabindex:"-1"},[k("span",{class:$t(r.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])]),c[5]||(c[5]=k("small",{"data-sync-microcopy-text":"must_be_at_least_10_characters_long"},"Must be at least 10 characters long",-1))]),k("div",rf,[c[6]||(c[6]=k("label",{for:"inp__text--verify-password","data-sync-microcopy-text":"verify_password"},"Verify Password",-1)),k("div",of,[k("input",{id:"inp__text--verify-password",type:o.value?"text":"password","data-sync-microcopy-placeholder":"re_enter_your_password",placeholder:"Re-enter your password",onKeyup:c[2]||(c[2]=Tt(m=>p(),["enter"]))},null,40,lf),k("button",{type:"button",class:"password-toggle-btn",onClick:c[3]||(c[3]=m=>l()),tabindex:"-1"},[k("span",{class:$t(o.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),k("div",{class:"auth-actions"},[c[7]||(c[7]=k("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"reset_password"},"Reset Password",-1)),k("button",{type:"button",onClick:a,class:"btn btn-outline"}," Cancel ")])],32)])])]))}},df=Gt(cf,[["__scopeId","data-v-2ff7f7f3"]]),uf={class:"auth-page"},pf={class:"auth-page-right"},ff={class:"auth-card"},hf={class:"verification-content"},gf={class:"timer-display"},mf={__name:"verf_link_route",setup(e){const t=ht();wi(),ve();const n=Je(7200);let a=null;const s=o=>{const i=Math.floor(o/3600),l=Math.floor(o%3600/60),u=o%60;return`${i.toString().padStart(2,"0")}:${l.toString().padStart(2,"0")}:${u.toString().padStart(2,"0")}`},r=()=>{a=setInterval(()=>{n.value--,n.value<=0&&(clearInterval(a),neodigmWired4Sound.sound(14),t.push({name:"splash_route"}))},1e3)};return jt(()=>{r()}),Ta(()=>{a&&clearInterval(a)}),(o,i)=>(Qe(),ft("div",uf,[i[4]||(i[4]=qt('<div class="auth-page-left" data-v-f5b4a3c8><div class="auth-bg" data-v-f5b4a3c8><div class="auth-bg-image" data-v-f5b4a3c8></div><div class="auth-bg-image" data-v-f5b4a3c8></div><div class="auth-bg-image" data-v-f5b4a3c8></div></div><div class="auth-overlay" data-v-f5b4a3c8></div><div class="auth-branding-content" data-v-f5b4a3c8><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-f5b4a3c8><p class="auth-branding-tagline" data-v-f5b4a3c8>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-f5b4a3c8>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-f5b4a3c8> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),k("div",pf,[k("div",ff,[i[3]||(i[3]=k("div",{class:"auth-header"},[k("h1",{class:"auth-title"},"Check Your Email"),k("p",{class:"auth-subtitle"},"A verification link has been sent to the email address you provided.")],-1)),k("div",hf,[i[0]||(i[0]=k("p",{class:"verification-instructions"},"Please click on that link to continue.",-1)),i[1]||(i[1]=k("p",{class:"verification-note"},"The link will expire in 2 hours.",-1)),i[2]||(i[2]=k("p",{class:"verification-note"},"Remember to check your spam folder.",-1)),k("div",gf,ao(s(n.value)),1)])])])]))}},_f=Gt(mf,[["__scopeId","data-v-f5b4a3c8"]]),fs=Su({history:nu(),routes:[{path:"/",name:"splash_route",component:Wr},{path:"/splash_route",name:"splash_route",component:Wr},{path:"/error_route",name:"error_route",component:Qn},{path:"/forgot_route",name:"forgot_route",component:Xp},{path:"/resetforgot_route",name:"resetforgot_route",component:Qn},{path:"/resethash_route",name:"resethash_route",component:df},{path:"/signin_route",name:"signin_route",component:kp},{path:"/signout_route",name:"signout_route",component:Cp},{path:"/signup_route",name:"signup_route",component:Gp},{path:"/verf_link_route",name:"verf_link_route",component:_f},{path:"/offline_route",name:"offline_route",component:Qn},{path:"/home_route",name:"home_route",component:up},{path:"/appFAQ",name:"appFAQ",component:Qn},{path:"/appHelp",name:"appHelp",component:mp}]}),it={updateTDBalance(e,t){const n=document.querySelector(e);if(!n)return;t%1!==0?n.textContent=t.toFixed(2):neodigmUtils.countTo(e,t)},categorizeTournaments(e,t,n,a){const s=[],r=l=>(l.entities?.guids||[]).includes(a),o=l=>(l.sports_allowed||[]).length===1,i=l=>(l.sports_allowed||[]).length>1;if(t==="lobby"&&n==="all"){const l=e.filter(h=>r(h)&&(h.status==="LOCKED"||h.class==="LOCKED"));l.length>0&&s.push({title:"Your Active Tournaments",subtext:`Currently in progress • ${l.length} tournament${l.length!==1?"s":""}`,tournaments:l});const u=e.filter(h=>r(h)&&(h.status==="UPCOMING"||h.class==="UPCOMING"));u.length>0&&s.push({title:"Your Upcoming Tournaments",subtext:`Joined, not yet started • ${u.length} tournament${u.length!==1?"s":""}`,tournaments:u});const d=e.filter(h=>!r(h)&&(h.status==="UPCOMING"||h.class==="UPCOMING")&&o(h));d.length>0&&s.push({title:"Upcoming Single-Sport Tournaments",subtext:`Focused competitions • ${d.length} tournament${d.length!==1?"s":""}`,tournaments:d});const f=e.filter(h=>!r(h)&&(h.status==="UPCOMING"||h.class==="UPCOMING")&&i(h));f.length>0&&s.push({title:"Upcoming Multi-Sport Tournaments",subtext:`Cross-league action • ${f.length} tournament${f.length!==1?"s":""}`,tournaments:f});const g=e.filter(h=>r(h)&&(h.status==="COMPLETED"||h.class==="COMPLETED")).slice(0,10);g.length>0&&s.push({title:"Your Recently Completed Tournaments",subtext:`Check your results • ${g.length} tournament${g.length!==1?"s":""}`,tournaments:g});const p=e.filter(h=>!r(h)&&(h.status==="COMPLETED"||h.class==="COMPLETED")).slice(0,20);p.length>0&&s.push({title:"Recently Completed Tournaments",subtext:`Explore past competitions • ${p.length} tournament${p.length!==1?"s":""}`,tournaments:p})}else s.push({title:"Tournaments",subtext:`${e.length} tournament${e.length!==1?"s":""}`,tournaments:e});return s},renderMatchCards(e){if(!e||!e.matches_expanded)return;const t=document.querySelector(".select-grid");if(!t)return;t.innerHTML="";const n=new Date,a=[...e.matches_expanded].sort((r,o)=>{const i=new Date(r.scheduled_at),l=new Date(o.scheduled_at),u=i<n,d=l<n;return u&&!d?1:!u&&d?-1:i-l}),s=()=>{const o=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let i=0;o&&ve().coreTourn.length>0&&(i=ve().coreTourn[ve().coreTourn.length-1].data.find(h=>h.guid===o)?.tournament_dollars||0);const l=document.querySelector(".bet-grid__slip-BETSLIP-content"),u=l?l.querySelectorAll("bma-bet-entry"):[],d=Array.from(u).map(g=>({matchGuid:g.getAttribute("data-match-guid"),type:g.getAttribute("data-content-type"),teamPoints:g.getAttribute("data-content-team-points"),odds:g.getAttribute("data-content-odds"),stake:g.getAttribute("data-stake"),payout:g.getAttribute("data-payout"),matchTitle:g.getAttribute("data-match-title"),abbreviatedTitle:g.getAttribute("data-abbreviated-title"),scheduledAt:g.getAttribute("data-scheduled-at")})),f=ve();J.publish(f.hierTopics.COREBETSLIP__INTERSYNC,JSON.stringify({tournament_dollars:i,bets:d,timestamp:Date.now()}))};a.forEach(r=>{const i=new Date(r.scheduled_at)<n;let l=!1;try{l=(typeof r.scoreboard_data=="string"?JSON.parse(r.scoreboard_data):r.scoreboard_data)?.time_remaining?.toLowerCase()==="final"}catch{}const u=document.createElement("bma-bet-match-card");if(u.setAttribute("data-match-id",r.id),u.setAttribute("data-match-guid",r.odds_id||r.guid||r.id),u.setAttribute("data-match-title",r.title),u.setAttribute("data-match-short-title",r.short_title||r.title),u.setAttribute("data-scheduled-at",r.scheduled_at),u.setAttribute("data-home-team",r.home_team_id||"Home"),u.setAttribute("data-away-team",r.away_team_id||"Away"),u.setAttribute("data-is-disabled",i||l?"true":"false"),u.setAttribute("data-sync-theme","dark"),r.odds_markets){const d=typeof r.odds_markets=="string"?r.odds_markets:JSON.stringify(r.odds_markets);u.setAttribute("data-odds-markets",d)}if(r.scoreboard_data){const d=typeof r.scoreboard_data=="string"?r.scoreboard_data:JSON.stringify(r.scoreboard_data);u.setAttribute("data-scoreboard",d)}u.addEventListener("bet-button-click",d=>{const{betData:f,isActive:g,button:p}=d.detail;if(g){const h=document.querySelector(".bet-grid__slip-BETSLIP-content");if(h){const c=h.querySelectorAll("bma-bet-entry");let m=!1;c.forEach(_=>{if(m)return;const y=_.getAttribute("data-content-type"),T=_.getAttribute("data-content-odds");y===f.type&&T===f.price&&(_.remove(),m=!0)}),h.children.length===0&&(h.innerHTML='<div class="bet-slip__empty"><p>Select odds to create a new bet slip</p></div>')}p.classList.remove("btn--active"),setTimeout(()=>{s()},100)}else{document.querySelectorAll("bma-bet-match-card").forEach(m=>{m.shadowRoot.querySelectorAll(".btn--selected").forEach(_=>{_.classList.remove("btn--selected")})}),p.classList.add("btn--selected"),p.classList.add("btn--active");const h=ve(),c=f.type;c==="spread"?J.publish(h.hierTopics.COREBETSLIP__SPREAD,JSON.stringify(f)):c==="money"?J.publish(h.hierTopics.COREBETSLIP__MONEY,JSON.stringify(f)):c==="total"&&J.publish(h.hierTopics.COREBETSLIP__TOTAL,JSON.stringify(f)),J.publish(h.hierTopics.COREBETSLIP,JSON.stringify(f))}}),t.appendChild(u)})},refreshPlayPopupUI(e,t){console.log("[app_events] Refreshing PLAY popup UI for tournament:",e);const n=document.querySelector(".bet-grid__slip-BETSLIP-content");n&&(n.innerHTML='<div class="bet-slip__empty"><p>Select odds to create a new bet slip</p></div>');const a=ve();if(a.coreTourn.length>0){const o=a.coreTourn[a.coreTourn.length-1].data.find(i=>i.guid===e);o&&it.renderMatchCards(o)}t?.rows&&(console.log("[app_events] Publishing SODAPOP__HYDRATE__COREBETSLIP with",t.rows.length,"bets"),setTimeout(()=>{J.publish(a.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,JSON.stringify(t))},100));const s=document.querySelector(".bet-grid__slip");s&&s.setAttribute("data-active-bet-tab","MYBETS")},disableExistingBetButtons(){const e=document.querySelectorAll(".bet-grid__slip-MYBETS bma-bet-existing"),t=Array.from(e).map(a=>{try{return JSON.parse(a.getAttribute("data-corebetslip")||"{}")}catch{return null}}).filter(Boolean);document.querySelectorAll("bma-bet-match-card").forEach(a=>{const s=a.getAttribute("data-match-guid"),r=a.getAttribute("data-home-team"),o=a.getAttribute("data-away-team");(a.shadowRoot?.querySelectorAll(".btn:not(.btn--empty)")||[]).forEach(l=>{if(l.disabled)return;const u=l.dataset.betType,g=l.dataset.team==="home"?r:o;t.some(h=>{if(h.coreMatches__guid!==s)return!1;const c=h.bet||[];if(c.length===0)return!1;const m=c[0],y=Object.keys(m).filter(x=>x!=="short_title")[0],S=m[y]?.type;return u==="total"?S===u:S===u&&y===g})&&(l.disabled=!0,l.classList.add("btn--disabled"))})})},bindAppListeners(e){J.subscribe("APP",(p,h)=>{console.warn("~~ sub all APP | "+p+"|"+h)}),J.subscribe("WC",(p,h)=>{console.warn("~~ sub all WC  | "+p+"|"+h)}),J.subscribe("ROUTE",(p,h)=>{console.warn("~~ sub all ROUTE  | "+p+"|"+h)});let t="lobby",n="all";const a=()=>{if(e.coreTourn.length===0)return;const h=e.coreTourn[e.coreTourn.length-1].data,c=e.appSession?.session_user?.guid;document.querySelectorAll(".tournament-item").forEach(y=>y.classList.remove("h-ds__none"));let _=0;if(h.forEach(y=>{const T=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${y.guid}"]`);if(!T)return;const S=T.parentElement;let x=!0;t==="my"?(y.entities?.guids||[]).includes(c)||(x=!1):t==="completed"&&(y.status||y.class)!=="COMPLETED"&&(x=!1),n!=="all"&&x&&((y.sports_allowed||[]).some(I=>I.key===n)||(x=!1)),x?_++:S&&S.classList.add("h-ds__none")}),console.log(`[app_events] Filter applied - ${t}/${n} - showing ${_} of ${h.length} tournaments`),_===0){let y="No tournaments match the current filters";t==="my"&&(y="You haven't joined any tournaments yet"),t==="completed"&&(y="No completed tournaments yet"),typeof neodigmToast<"u"&&neodigmToast.q(y,"night")}};J.subscribe(e.hierTopics.COREBETSLIP,(p,h)=>{JSON.parse(h);let c=16;switch(p){case e.hierTopics.COREBETSLIP__BET:c=5,hn.shootConfetti(),console.log("~~~  |  "+p+" | ",h);const m=document.querySelector("neodigm-sodapop");m&&m.setAttribute("data-wait","true");const _=document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry");if(_.length===0){console.warn("[app_events] No bets to submit"),m&&m.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("No bets to submit","warning");break}const T=document.querySelector(".play-cntr")?.dataset?.currentTournGuid,S=e.appSession?.session_user?.guid;if(!T||!S){console.error("[app_events] Missing tournament or user GUID"),m&&m.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("Missing tournament or user data","danger");break}const x=Array.from(_).map(ne=>{const Z=ne.getAttribute("data-content-team-points"),Y=ne.getAttribute("data-content-odds"),Q=ne.getAttribute("data-stake")||"0",ue=ne.getAttribute("data-content-type"),_e=ne.getAttribute("data-payout")||"0",Ee=ne.getAttribute("data-match-guid")||"",ge={};return ge[Z]={type:ue,stake:parseFloat(Q),odds:parseFloat(Y),payout:parseFloat(_e),reconciled:!1},{acctEntity__guid:S,coreTournaments__guid:T,coreMatches__guid:Ee,bet:[ge],status:"PENDING"}});console.log("[app_events] Submitting bet slips:",x),be.postBetSlips(x).then(ne=>{console.log("[app_events] Bet slips posted successfully:",ne);const Z=x.reduce((Y,Q)=>{const ue=Q.bet[0],_e=Object.keys(ue)[0];return Y+(ue[_e]?.stake||0)},0);typeof neodigmToast<"u"&&neodigmToast.q(`Bets placed successfully!|Total Stake: TD$ ${Z.toFixed(2)}`,"success"),be.fetchBetSlips(S,T).then(Y=>{if(Y?.rows){const Q={timestamp:Date.now(),source:"API",data:Y.rows};e.pushcoreBetSlip(Q),console.log("[app_events] Refreshed bet slips in store:",Y.rows.length,"items")}it.refreshPlayPopupUI(T,Y),m&&m.setAttribute("data-wait","false")}).catch(Y=>{console.error("[app_events] Error fetching fresh bet slips:",Y),m&&m.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("Bets placed but failed to refresh|Please close and reopen","warning")})}).catch(ne=>{console.error("[app_events] Error posting bet slips:",ne),typeof neodigmToast<"u"&&neodigmToast.q("Failed to place bets|Please try again","danger"),m&&m.setAttribute("data-wait","false")});break;case e.hierTopics.COREBETSLIP__SPREAD:break;case e.hierTopics.COREBETSLIP__MONEY:break;case e.hierTopics.COREBETSLIP__TOTAL:break;case e.hierTopics.COREBETSLIP__CLOSE:c=24;break;case e.hierTopics.COREBETSLIP__TDSYNC:if(document.querySelector("#summary-balance")&&h){h=JSON.parse(h);const Z=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(e.coreBetSlip[0]?.data&&Z){const Y=e.coreBetSlip[0].data.filter(ye=>ye.coreTournaments__guid===Z),Q=[],ue=[],_e=[];Y.forEach(ye=>{const C=ye.bet||[];if(C.length===0)return;const G=C[0];Object.keys(G).filter(z=>z!=="short_title").forEach(z=>{const re=G[z],b=re?.reconciled!==!1,v=parseFloat(re?.payout||0);b?v===0?ue.push(ye):_e.push(ye):Q.push(ye)})});const Ee=bt.search(Q,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,ge=bt.search(ue,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,Ge=Ee+ge,ke=bt.search(_e,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0,Me=h.tournament_dollars-Ge+ke;it.updateTDBalance("#summary-balance",Me)}else it.updateTDBalance("#summary-balance",h.tournament_dollars)}break;case e.hierTopics.COREBETSLIP__INTERSYNC:let w=0,I=0;if(e.coreBetSlip.length>0){const Z=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(Z){const Q=e.coreBetSlip[e.coreBetSlip.length-1].data.filter(ke=>ke.coreTournaments__guid===Z),ue=[],_e=[],Ee=[];Q.forEach(ke=>{const Me=ke.bet||[];if(Me.length===0)return;const ye=Me[0];Object.keys(ye).filter(G=>G!=="short_title").forEach(G=>{const j=ye[G],z=j?.reconciled!==!1,re=parseFloat(j?.payout||0);z?re===0?_e.push(ke):Ee.push(ke):ue.push(ke)})});const ge=bt.search(ue,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,Ge=bt.search(_e,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0;w=ge+Ge,I=bt.search(Ee,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0}}let O=!0,B=0;const K=document.querySelector("[data-bets-valid]"),P=document.querySelector("#summary-balance"),V=document.querySelector("#summary-stake"),U=document.querySelector("#summary-payout");if(K&&h){h=JSON.parse(h),h.pending_stake_sum=0,h.pending_payout_sum=0,h.bets.length||(O=!1),h.bets.forEach(Q=>{Q.stake=Number(Q.stake),Q.stake?h.pending_stake_sum+=Q.stake:O=!1}),document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry").forEach(Q=>{const ue=parseFloat(Q.getAttribute("data-payout")||"0");h.pending_payout_sum+=ue});const Z=w+h.pending_stake_sum,Y=I+h.pending_payout_sum;B=h.tournament_dollars-Z+I,B<0?P.classList.add("summary-cell__red"):P.classList.remove("summary-cell__red"),it.updateTDBalance("#summary-balance",B),V.innerHTML=Z.toFixed(2),U&&(U.innerHTML=Y.toFixed(2),Y<0?U.classList.add("summary-cell__red"):U.classList.remove("summary-cell__red")),(h.tournament_dollars<0||B<0)&&(O=!1),K.dataset.betsValid=O}break}c&&neodigmWired4Sound&&neodigmWired4Sound.sound(c,"QUITE").vibrate()});const s=()=>{const h=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let c=0;h&&e.coreTourn.length>0&&(c=e.coreTourn[e.coreTourn.length-1].data.find(y=>y.guid===h)?.tournament_dollars||0),J.publish(e.hierTopics.COREBETSLIP__TDSYNC,JSON.stringify({tournament_dollars:c,timestamp:Date.now()}))},r=()=>{const p=document.querySelector("#summary-balance"),h=document.querySelector("#summary-stake"),c=document.querySelector("#summary-payout");if(!p||!h||!c){console.warn("[app_events] Summary elements not found");return}const _=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let y=0;_&&e.coreTourn.length>0&&(y=e.coreTourn[e.coreTourn.length-1].data.find(I=>I.guid===_)?.tournament_dollars||0);let T=0,S=0;if(e.coreBetSlip.length>0&&_){const w=e.coreBetSlip[e.coreBetSlip.length-1].data.filter(V=>V.coreTournaments__guid===_);console.log("[app_events] Filtered bets for tournament:",_,"found:",w.length),console.log("[app_events] Using latest bet slip data index:",e.coreBetSlip.length-1),console.log("[app_events] First bet sample:",w[0]);const I=[],O=[],B=[];w.forEach(V=>{const U=V.bet||[];if(U.length===0)return;const ne=U[0];Object.keys(ne).filter(Y=>Y!=="short_title").forEach(Y=>{const Q=ne[Y],ue=Q?.reconciled!==!1,_e=parseFloat(Q?.payout||0);ue?_e===0?O.push(V):B.push(V):I.push(V)})}),console.log("[app_events] Bet categories:",{unreconciled:I.length,reconciledZero:O.length,reconciledNonZero:B.length});const K=bt.search(I,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,P=bt.search(O,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0;T=K+P,S=bt.search(B,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0,console.log("[app_events] Balance calculation:",{unreconciledStakes:K,lostBetStakes:P,stakesToSubtract:T,reconciledPayouts:S,tournamentDollars:y})}else console.warn("[app_events] No bet data found in Pinia store or missing tournamentGuid");const x=y-T+S;it.updateTDBalance("#summary-balance",x),x<0?p.classList.add("summary-cell__red"):p.classList.remove("summary-cell__red"),h.innerHTML=T.toFixed(2),c.innerHTML=S.toFixed(2),S<0?c.classList.add("summary-cell__red"):c.classList.remove("summary-cell__red")};J.subscribe(e.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,(p,h)=>{const m=JSON.parse(h)?.rows||[],_=document.querySelector(".bet-grid__slip-MYBETS");if(!_)return;if(_.innerHTML="",m.length===0){_.innerHTML='<p style="color: var(--app-core-color--gray-6__dark--brand, #969696); text-align: center; padding: 20px;">No active bets</p>';const x=document.querySelector(".bet-grid__slip");x&&x.setAttribute("data-active-bet-tab","BETSLIP"),s();return}m.forEach(x=>{if((x.bet||[]).length===0)return;const w=document.createElement("bma-bet-existing");w.setAttribute("data-corebetslip",JSON.stringify(x)),_.appendChild(w)});const y=document.querySelector(".bet-grid__slip");y&&y.setAttribute("data-active-bet-tab","MYBETS"),ve().appCLIFeatures?.features?.disable_existing_bet_btn?.state===!0&&it.disableExistingBetButtons(),setTimeout(()=>{console.log("[app_events] Calling updateSummaryFromExistingBets after HYDRATE, bet count:",m.length),console.log("[app_events] Pinia store bet count:",e.coreBetSlip[0]?.data?.length||0),r()},200)}),document.addEventListener("click",p=>{const h=p.target;if(h&&h.classList.contains("bet-slip-tab")){const c=h.dataset.betTab,m=document.querySelector(".bet-grid__slip");c&&m&&(m.setAttribute("data-active-bet-tab",c),neodigmWired4Sound&&neodigmWired4Sound.sound(3),console.log("[app_events] Switched to bet tab:",c))}if(h&&h.dataset.publishBetslip){const c=h.dataset.publishBetslip;J.publish(c,JSON.stringify({timestamp:Date.now()}))}});const o=()=>{const h=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let c=0;h&&e.coreTourn.length>0&&(c=e.coreTourn[e.coreTourn.length-1].data.find(S=>S.guid===h)?.tournament_dollars||0);const m=document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry"),_=Array.from(m).map(y=>({teamPoints:y.getAttribute("data-content-team-points"),odds:y.getAttribute("data-content-odds"),stake:y.getAttribute("data-stake")||"0",type:y.getAttribute("data-content-type"),abbreviatedTitle:y.getAttribute("data-abbreviated-title"),scheduledAt:y.getAttribute("data-scheduled-at")}));J.publish(e.hierTopics.COREBETSLIP__INTERSYNC,JSON.stringify({tournament_dollars:c,bets:_,timestamp:Date.now()}))},i=(p,h)=>{const c=JSON.parse(h),m=document.querySelector(".bet-grid__slip-BETSLIP-content");if(!m){console.error("[app_events] Bet slip container not found");return}const _=m.querySelector(".bet-slip__empty");_&&_.remove();let y="";c.type==="total"?y=c.team==="over"?"Over":"Under":c.team==="home"?y=c.homeTeam:c.team==="away"&&(y=c.awayTeam);let T=y;if(c.point)if(c.type==="spread"){const O=parseFloat(c.point)>0?`+${c.point}`:c.point;T=`${y} ${O}`}else c.type==="total"&&(T=`${y} ${c.point}`);const S=document.createElement("bma-bet-entry");S.setAttribute("data-content-team-points",T),S.setAttribute("data-content-odds",c.price||"0"),S.setAttribute("data-content-stake-text","0"),S.setAttribute("data-content-type",c.type||""),S.setAttribute("data-abbreviated-title",c.abbreviatedTitle||`${c.homeTeam} vs ${c.awayTeam}`),S.setAttribute("data-scheduled-at",c.scheduledAt||""),S.setAttribute("data-match-guid",c.matchGuid||""),S.setAttribute("data-home-team",c.homeTeam||""),S.setAttribute("data-away-team",c.awayTeam||""),S.setAttribute("data-bet-team",y||"");const L=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(L&&e.coreTourn.length>0){const B=e.coreTourn[e.coreTourn.length-1].data.find(K=>K.guid===L);if(B?.sports_allowed&&B.sports_allowed.length>0){const K=B.sports_allowed[0];S.setAttribute("data-sport-key",K.key||"");const P=Kn.find(V=>V.key===K.key);S.setAttribute("data-sport-group",P?.group||"")}}m.appendChild(S),console.log("[app_events] Bet entry appended to container:",S,"Container children:",m.children.length),setTimeout(()=>{l(S)},0);const w=document.querySelector(".bet-grid__slip");w&&(w.setAttribute("data-active-bet-tab","BETSLIP"),console.log("[app_events] Switched to BETSLIP tab"));const I=m.querySelectorAll("bma-bet-entry").length;I>=3?requestAnimationFrame(()=>{setTimeout(()=>{const O=document.querySelector(".bet-grid__slip");O&&(console.log("[app_events] Scrolling parent to bottom - bet count:",I,"scrollHeight:",O.scrollHeight,"current scrollTop:",O.scrollTop),O.scrollTo({top:O.scrollHeight,behavior:"smooth"}),setTimeout(()=>{console.log("[app_events] After scroll - scrollTop:",O.scrollTop)},500))},150)}):console.log("[app_events] Skipping scroll - only",I,"bet cards (need 3+)"),setTimeout(()=>{o()},200),console.log("[app_events] Created bet entry:",{teamPoints:T,odds:c.price,type:c.type})};J.subscribe(e.hierTopics.COREBETSLIP__SPREAD,i),J.subscribe(e.hierTopics.COREBETSLIP__MONEY,i),J.subscribe(e.hierTopics.COREBETSLIP__TOTAL,i);const l=p=>{const h={sport:{key:p.getAttribute("data-sport-key")||"",group:p.getAttribute("data-sport-group")||""},Match:{scheduled_at:p.getAttribute("data-scheduled-at")||"",home_team_id:p.getAttribute("data-home-team")||"",home_team_score:"",away_team_id:p.getAttribute("data-away-team")||"",away_team_score:""},Bet:{scope:{team_id:p.getAttribute("data-bet-team")||"",over:"",under:""},type:p.getAttribute("data-content-type")||"",odds:p.getAttribute("data-content-odds")||"0",stake:p.getAttribute("data-stake")||"0"}},c=Ni.calcPayout(h);p.setAttribute("data-payout",c.toString()),console.log("[app_events] Payout calculated:",{stake:h.Bet.stake,odds:h.Bet.odds,payout:c})};new MutationObserver(p=>{p.forEach(h=>{h.type==="attributes"&&h.attributeName==="data-stake"&&h.target.tagName==="BMA-BET-ENTRY"&&(console.log("[app_events] Stake changed:",h.target.getAttribute("data-stake")),l(h.target),clearTimeout(window.betSlipStakeTimeout),window.betSlipStakeTimeout=setTimeout(()=>{o()},300))})}).observe(document.body,{attributes:!0,attributeFilter:["data-stake"],subtree:!0}),console.log("[app_events] MutationObserver for stake changes initialized"),document.addEventListener("bma-bet-entry-remove",p=>{console.log("[app_events] Removing bet entry:",p.detail);const h=p.target,c=p.detail;h.remove(),document.querySelectorAll("bma-bet-match-card").forEach(y=>{(y.shadowRoot?.querySelectorAll(".btn")||[]).forEach(S=>{const x=S.dataset.betType,L=S.dataset.price,w=x===c.type,I=L===c.odds;w&&I&&S.classList.contains("btn--active")&&(S.classList.remove("btn--active"),console.log("[app_events] Deactivated button via X removal:",{btnType:x,btnPrice:L}))})});const _=document.querySelector(".bet-grid__slip-BETSLIP-content");_&&_.children.length,setTimeout(()=>{o()},100)}),J.subscribe(e.hierTopics.CANVAS__HYDRATE__STATUS,(p,h)=>{const c=JSON.parse(h);c&&c.guid&&neodigmUtils&&neodigmUtils.shake(`[data-bma-tourn-guid="${c.guid}"]`)}),J.subscribe(e.hierTopics.WC__APP__FOOT,(p,h)=>{JSON.parse(h);let c=16;switch(p){case e.hierTopics.WC__APP__FOOT__ALL_SPORTS:J.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_LOBBY,JSON.stringify({tab:"ALL_SPORTS",timestamp:Date.now()}));break;case e.hierTopics.WC__APP__FOOT__MY_TOURNEYS:J.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_MY,JSON.stringify({tab:"MY_TOURNEYS",timestamp:Date.now()}));break;case e.hierTopics.WC__APP__FOOT__LEADERBOARD:c=24,J.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_LEADERBOARD,JSON.stringify({tab:"LEADERBOARD",timestamp:Date.now()}));break;case e.hierTopics.WC__APP__FOOT__MY_PROFILE:J.publish(e.hierTopics.WC__APP__HEAD_TOP__USER_PROFILE,JSON.stringify({tab:"USER_PROFILE",timestamp:Date.now()}));break}c&&neodigmWired4Sound&&neodigmWired4Sound.sound(c).vibrate()}),J.subscribe(e.hierTopics.WC__APP__HEAD_SPORTS,(p,h)=>{const c=JSON.parse(h);let m=16;p=="WC.APP.HEAD_SPORTS.PREV"||p=="WC.APP.HEAD_SPORTS.NEXT"||p=="WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START"?m=3:(n=c.key||"all",console.log(`[app_events] Sports filter changed to: ${n} (${c.group})`),a()),m&&neodigmWired4Sound&&neodigmWired4Sound.sound(m).vibrate()}),J.subscribe(e.hierTopics.WC__APP__HEAD_MID,(p,h)=>{JSON.parse(h);let c=16;const m=()=>{n="all";const _=document.querySelector("bma-app-head-sports");_&&_.setAttribute("data-selected-chip","all")};switch(p){case"WC.APP.HEAD_MID.HEAD_MID_LOBBY":t="lobby",m(),a();break;case"WC.APP.HEAD_MID.HEAD_MID_MY":if(!e.appSession?.session_user?.guid){console.warn("[app_events] No user GUID found, cannot filter tournaments"),typeof neodigmToast<"u"&&neodigmToast.q("Please sign in to view your tournaments","warning");return}t="my",m(),a();break;case"WC.APP.HEAD_MID.HEAD_MID_COMPLETED":t="completed",m(),a();break;case"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD":t="leaderboard",m(),a(),c=24,typeof neodigmToast<"u"&&neodigmToast.q("Feature not Available|in Beta","night");break;case"WC.APP.HEAD_MID.HEAD_MID_SQUAD":t="squad",m(),a(),c=24,typeof neodigmToast<"u"&&neodigmToast.q("Feature not Available|in Beta","night");break}c&&neodigmWired4Sound&&neodigmWired4Sound.sound(c).vibrate()}),J.subscribe(e.hierTopics.ROUTE__HOME__USER_PROFILE,async(p,h)=>{JSON.parse(h);let c=16;switch(p){case"ROUTE.HOME.USER_PROFILE.INSTALL_PWA":const m=window.deferredPWAPrompt;if(!m){console.log("No install prompt available"),typeof neodigmToast<"u"&&neodigmToast.q("PWA install not available","warning");return}try{m.prompt();const{outcome:y}=await m.userChoice;y==="accepted"?(console.log("PWA installed successfully"),window.deferredPWAPrompt=null,typeof neodigmToast<"u"&&neodigmToast.q("App installed successfully!","success"),c=8,neodigmSodaPop&&neodigmSodaPop.close()):(console.log("PWA install declined"),typeof neodigmToast<"u"&&neodigmToast.q("Install cancelled","night"))}catch(y){console.error("PWA install error:",y),typeof neodigmToast<"u"&&neodigmToast.q("Install failed","danger")}break;case"ROUTE.HOME.USER_PROFILE.TOGGLE_THEME":(()=>{const T=e.appCLIFeatures.features.theme.state==="dark"?"light":"dark";e.setFeaturePersistPub("theme",{state:T});const S=document.getElementById("app");S&&S.setAttribute("data-sync-theme",T),document.body.setAttribute("data-sync-theme",T)})(),neodigmSodaPop&&neodigmSodaPop.close();break;case"ROUTE.HOME.USER_PROFILE.RESET_PASSWORD":fs.push({name:"resethash_route"}),neodigmSodaPop&&neodigmSodaPop.close();break;case"ROUTE.HOME.USER_PROFILE.SIGNOUT":fs.push({name:"signout_route"}),neodigmSodaPop&&neodigmSodaPop.close();break}c&&neodigmWired4Sound&&neodigmWired4Sound.sound(c).vibrate()});const d=(p,h)=>{const c=p.split(".").pop();console.log("[app_events] SODAPOP_PLAY subscriber - action:",c,"topic:",p),setTimeout(()=>{const m=document.querySelectorAll(".play-cntr .btn-info-sm"),y=document.querySelector(".play-cntr")?.closest("neodigm-sodapop");m.forEach(T=>{const S=T.dataset.publishRouteHome?.split(".").pop()||"";if(S===c){if(console.log("[app_events] Activating button:",S),T.classList.add("btn-info-sm--active"),T.classList.remove("btn-info-sm--inactive"),neodigmCarousel.nav({id:"caro-play",nav:S}),neodigmWired4Sound.sound(3),y){const x=c==="PLAY"?"hidden":"auto";y.style.overflow=x,console.log("[app_events] Set sodapop overflow to:",x)}}else T.classList.add("btn-info-sm--inactive"),T.classList.remove("btn-info-sm--active")})},100)};J.subscribe("ROUTE.HOME.SODAPOP_PLAY.INFO",d),J.subscribe("ROUTE.HOME.SODAPOP_PLAY.LEADERBOARD",d),J.subscribe("ROUTE.HOME.SODAPOP_PLAY.PLAY",(p,h)=>{JSON.parse(h);const c=document.getElementById("btn-join__play--id");if(!c){console.warn("[app_events] PLAY button not found");return}const m=c.dataset.requiresJoin==="true",_=c.textContent.trim().toLowerCase();if(console.log("[app_events] PLAY button clicked - text:",_,"requiresJoin:",m),m&&_==="join"){const T=document.querySelector(".play-cntr")?.dataset?.currentTournGuid,S=ve();if(!T){console.error("[app_events] No tournament GUID found");return}console.log("[app_events] Executing JOIN for tournament:",T),J.publish(S.hierTopics.WC__TOURN_ACTION,JSON.stringify({action:"JOIN",tournamentGuid:T,timestamp:Date.now()})),c.textContent="Play",c.dataset.requiresJoin="false",setTimeout(()=>{d(p),console.log("[app_events] JOIN triggered, advancing carousel to PLAY page")},500)}else d(p),console.log("[app_events] Advancing carousel to PLAY page")}),J.subscribe(e.hierTopics.WC__APP__HEAD_TOP,(p,h)=>{JSON.parse(h);let c=10;switch(p){case"WC.APP.HEAD_TOP.USER_PROFILE":c=10,neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_my_profile"),setTimeout(()=>{neodigmCarousel.nav({id:"caro-user_profile",nav:"caro-page__badges"})},1200);break;case"WC.APP.HEAD_TOP.LOGO":const m=e.appSession.session_app.version,_=new Date().getFullYear();m&&neodigmToast&&neodigmToast.q(`${m} 1/14/2026, 12:07:06 PM|© ${_} Bet Max Action`,"night");break}c&&neodigmWired4Sound&&neodigmWired4Sound.sound(c).vibrate()});let f=null,g=null;J.subscribe(e.hierTopics.WC__TOURN_ACTION,(p,h)=>{const c=JSON.parse(h);let m=0;switch(c?.action){case"JOIN":m=512;break;case"PLAY":m=8;break;case"INFO":m=8;break}if(m){f=c?.tournamentGuid,g=c?.action,console.log("[app_events] Storing pending tourn data:",f,g);const _=e.appSession?.session_user?.guid,y=c?.tournamentGuid;_&&y?be.fetchBetSlips(_,y).then(T=>{if(T?.rows){const S={timestamp:Date.now(),source:"API",data:T.rows};e.pushcoreBetSlip(S),console.log("[app_events] Bet slips fetched:",T.rows.length,"items")}setTimeout(()=>{neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_play"),setTimeout(()=>{J.publish(e.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,JSON.stringify(T))},3e3)},m)}).catch(T=>{console.error("[app_events] Error fetching bet slips:",T),setTimeout(()=>{neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_play")},m)}):setTimeout(()=>{neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_play")},m)}}),J.subscribe(e.hierTopics.WC__TOURN_ACTION,(p,h)=>{const c=JSON.parse(h);let m=16;switch(c?.action){case"FOCUS":m=3;break;case"SPORT_ICON":m=10;break;case"JOIN":m=5;break;case"PLAY":m=16;break}m&&neodigmWired4Sound&&neodigmWired4Sound.sound(m).vibrate()}),J.subscribe(e.hierTopics.WC__TOURN_ACTION,(p,h)=>{const c=JSON.parse(h);let m=0,_="night";switch(neodigmOpt&&neodigmOpt.EVENT_SOUNDS&&(neodigmOpt.EVENT_SOUNDS=!1),c?.tournamentStatus){case"UPCOMING":_="success";break;case"LOCKED":_="warning";break;case"COMPLETED":_="danger";break}switch(c?.action){case"SPORT_ICON":c?.sportTitle==c?.sportDescription?m=c?.sportTitle:m=c?.sportTitle+"|"+c?.sportDescription;break}m&&neodigmToast&&neodigmToast.q(m,_)}),J.subscribe(e.hierTopics.WC__TOURN_ACTION,async(p,h)=>{const c=JSON.parse(h);if(c?.action==="JOIN"){const _=ve().appSession?.session_user?.guid;if(!_){console.error("No entity guid found in session"),typeof neodigmToast<"u"&&neodigmToast.q("Please sign in to join tournaments","warning");return}const y=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${c.tournamentGuid}"]`);y&&(y.setAttribute("data-bma-tourn-wait","true"),hn.shootConfetti());const T={acctEntityGuid:_,tournamentGuid:c.tournamentGuid};try{const S={method:"POST",body:JSON.stringify(T),headers:be.genHeaders()};console.log("Posting to:",be.API_baseURI+"/bmac/"+be.API_ver+"/coreTournaments/join",T);const L=await(await fetch(be.API_baseURI+"/bmac/"+be.API_ver+"/coreTournaments/join",S)).json();if(console.log("Join response:",L),L.ok)typeof neodigmToast<"u"&&neodigmToast.q("Successfully joined tournament!","success"),setTimeout(()=>{if(y){y.setAttribute("data-bma-tourn-wait","false");const w=y.getAttribute("data-bma-tourn-entities");if(w)try{const I=JSON.parse(w);I.guids.includes(_)||(I.guids.push(_),y.setAttribute("data-bma-tourn-entities",JSON.stringify(I)))}catch(I){console.error("Failed to parse entities:",I)}}},3e3);else{const w=L?.message||"Failed to join tournament";typeof neodigmToast<"u"&&neodigmToast.q(w,"danger"),y&&y.setAttribute("data-bma-tourn-wait","false")}}catch(S){console.error("Join tournament error:",S),typeof neodigmToast<"u"&&neodigmToast.q("Network error joining tournament","danger"),y&&y.setAttribute("data-bma-tourn-wait","false")}}}),J.subscribe(e.hierTopics.ROUTE__HOME_ONMOUNT,async(p,h)=>{console.log("[app_events] ROUTE__HOME_ONMOUNT event received");const c=ve();try{const m=await be.fetchTournaments();console.log("[app_events] Tournaments fetched:",m),m?.rows&&Array.isArray(m.rows)?(c.pushCoreTourn({timestamp:Date.now(),source:"API",data:m.rows}),console.log("[app_events] Pushed to coreTourn, length:",c.coreTourn.length),J.publish(c.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now()}))):console.warn("[app_events] Invalid API response format:",m)}catch(m){console.error("[app_events] Error fetching tournaments:",m),typeof neodigmToast<"u"&&neodigmToast.q("Failed to load tournaments","danger"),hn.hardReload()}}),J.subscribe(e.hierTopics.ROUTE__HOME_HYDRATE,(p,h)=>{console.log("[app_events] ROUTE__HOME_HYDRATE event received");const c=ve();if(c.coreTourn.length===0){console.warn("[app_events] No tournament data in coreTourn array");return}const m=c.coreTourn[c.coreTourn.length-1],_=c.coreTourn.length>1?c.coreTourn[c.coreTourn.length-2]:null;console.log("[app_events] Hydrating with latest data:",m);const y=[];if(_){const L=m.data,w=_.data;L.forEach(I=>{const O=w.find(B=>B.guid===I.guid);O&&O.status!==I.status&&(console.log(`[app_events] Status changed for tournament ${I.guid}: ${O.status} -> ${I.status}`),y.push(I.guid))})}const T=c.appSession?.session_user?.guid,S=[...m.data].sort((L,w)=>{const I=L.status||L.class,O=w.status||w.class,B=L.entities?.guids||[],K=w.entities?.guids||[],P=B.includes(T),V=K.includes(T),U=(Ge,ke)=>{const Me=new Date(Ge.status_time||0).getTime();return new Date(ke.status_time||0).getTime()-Me},ne=I==="LOCKED"&&P,Z=O==="LOCKED"&&V;if(ne&&!Z)return-1;if(!ne&&Z)return 1;if(ne&&Z)return U(L,w);const Y=I==="UPCOMING",Q=O==="UPCOMING";if(Y&&!Q)return-1;if(!Y&&Q)return 1;if(Y&&Q)return U(L,w);const ue=I==="COMPLETED"&&P,_e=O==="COMPLETED"&&V;if(ue&&!_e)return-1;if(!ue&&_e)return 1;if(ue&&_e)return U(L,w);const Ee=I==="COMPLETED"&&!P,ge=O==="COMPLETED"&&!V;return Ee&&!ge?1:!Ee&&ge?-1:U(L,w)}),x=it.categorizeTournaments(S,t,n,T);if(console.log(`[app_events] Categorized into ${x.length} categories for filter: ${t}/${n}`),window._homeRouteRenderCards&&typeof window._homeRouteRenderCards=="function"){if(window._homeRouteRenderCards(x,!0),setTimeout(()=>{a(),console.log("[app_events] Re-applied filter after hydration:",t)},100),y.length>0){const L=m.data;y.forEach(w=>{const I=L.find(O=>O.guid===w);if(I){const O=Math.floor(Math.random()*2e3)+1e3;setTimeout(()=>{J.publish(c.hierTopics.CANVAS__HYDRATE__STATUS,JSON.stringify({guid:w,status:I.status,timestamp:Date.now()}))},O)}})}}else console.warn("[app_events] window._homeRouteRenderCards not available")}),J.subscribe(e.hierTopics.SSE__CORE__TOURN_SYNC,(p,h)=>{console.log("[app_events] SSE__CORE__TOURN_SYNC event received:",h);const c=ve();try{const m=JSON.parse(h);console.log("[app_events] SSE tournament sync data:",m);const _=JSON.parse(m.msg);if(console.log("[app_events] Parsed tournaments array:",_),!Array.isArray(_)){console.warn("[app_events] SSE msg is not an array:",_);return}c.pushCoreTourn({timestamp:Date.now(),source:"SSE",data:_}),console.log("[app_events] Pushed SSE data to coreTourn, length:",c.coreTourn.length),J.publish(c.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"SSE"}))}catch(m){console.error("[app_events] Error processing SSE tournament sync:",m)}}),setTimeout(function(){neodigmSodaPop&&neodigmMarquee&&neodigmEnchantedCTA&&(neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{NeodigmClaire.showCanv("neodigm-sodapop",.5).setTheme(["warning","success"]).initCanvOn("neodigm-sodapop").waxOn("neodigm-sodapop")},1e3),neodigmMetronome.init().pause(800),neodigmMarquee.init().pause(1200),neodigmEnchantedCTA.init(),neodigmCarousel.init()}),neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{neodigmUtils.typeOn({q1st:"#caption__my-profile",msg:`${e.appSession.session_user.name}|${e.appSession.session_user.email}|${e.appSession.session_user.fname} ${e.appSession.session_user.lname}|My Profile`,mode:"LOOP",uniqueDelay:124});const p=e.appSession?.session_user?.guid;if(console.log("[app_events] User GUID:",p),console.log("[app_events] coreTourn length:",e.coreTourn.length),!p||e.coreTourn.length===0){console.warn("[app_events] Missing user GUID or tournament data");return}const c=e.coreTourn[e.coreTourn.length-1].data;console.log("[app_events] Processing tournaments:",c.length);let m=0,_=0,y=0;c.forEach((T,S)=>{if(!T.tags||!Array.isArray(T.tags)){console.log(`[app_events] Tournament ${S} has no tags or tags not an array`);return}T.tags.forEach((x,L)=>{if(typeof x=="object"&&x!==null&&x[p]){const w=x[p];w==="--badge__ribbon--gold"?m++:w==="--badge__ribbon--silver"?_++:w==="--badge__ribbon--bronze"&&y++}})}),setTimeout(()=>{let T=document.querySelectorAll(".badge-counter");if(T.length===0){const S=document.querySelector("neodigm-sodapop");S&&(T=S.querySelectorAll(".badge-counter"))}T.length>=3?(T[0].textContent=m,T[1].textContent=_,T[2].textContent=y,console.log("[app_events] Updated UI counters successfully")):console.warn("[app_events] Not enough counter elements found")},500)},1e3)},"sodapop_my_profile"),neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{const p=ve(),h=document.querySelector(".play-cntr");f&&(h.dataset.currentTournGuid=f),g&&(h.dataset.currentTournAction=g);const c=h?.dataset?.currentTournGuid,m=h?.dataset?.currentTournAction||"INFO";console.log("[app_events] sodapop_play opened - GUID:",c,"action:",m),(()=>{const L=document.getElementById("btn-join__play--id");if(!L||!c||p.coreTourn.length===0)return;const I=p.coreTourn[p.coreTourn.length-1].data.find(V=>V.guid===c);if(!I)return;const O=p.appSession?.session_user?.guid,B=I.entities?.guids?.includes(O),K=I.status,P=m;L.style.display="none",!(K==="COMPLETED"||K==="LOCKED"&&!B)&&(L.style.display="",K==="UPCOMING"&&!B?P==="INFO"?(L.textContent="Join",L.dataset.requiresJoin="true"):P==="PLAY"&&(L.textContent="Play",L.dataset.requiresJoin="false"):(L.textContent="Play",L.dataset.requiresJoin="false"))})(),(()=>{if(!c||p.coreTourn.length===0)return;const w=p.coreTourn[p.coreTourn.length-1].data.find(U=>U.guid===c);if(!w)return;const I=document.getElementById("pop-play__caro-info-summary1--id");if(!I)return;const O=U=>{if(!U)return"N/A";const ne=new Date(U);return isNaN(ne.getTime())?"Invalid Date":ne.toLocaleString(void 0,{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit",hour12:!0})},B=U=>{switch(U){case"UPCOMING":return"var(--app-core-color--yellow-3__dark--brand, #F7C60D)";case"LOCKED":return"var(--app-core-color--green-3__dark--brand, #14b963)";case"COMPLETED":return"var(--app-core-color--gray-6__dark--brand, #969696)";default:return"#fff"}},K=[{caption:"Start",value:O(w.window_start_time)},{caption:"End",value:O(w.window_end_time)},{caption:"Status",value:w.status||"Unknown",color:B(w.status)},{caption:"Entry Fee",value:"FREE"},{caption:"TD$",value:`${w.tournament_dollars||0}`},{caption:"Participants",value:`${w.entities?.guids?.length||0} / ${w.entities?.max||0}`},{caption:"Games",value:`${w.matches_expanded.length||0}`}];I.innerHTML=K.map(U=>`
                                <div class="info-card">
                                    <div class="info-card__caption">${U.caption}</div>
                                    <div class="info-card__value" ${U.color?`style="color: ${U.color}"`:""}>${U.value}</div>
                                </div>
                            `).join("");const P=document.getElementById("pop-play__caro-info-summary2--id");P&&w.sports_allowed&&Array.isArray(w.sports_allowed)&&(P.innerHTML=w.sports_allowed.map(U=>{const ne=U.key||U,Z=Kn.find(Q=>Q.key===ne),Y=Z?Z.group:"default";return`<bma-sport-icon sport="${ne}" data-sport-group="${Y}"></bma-sport-icon>`}).join(""));const V=document.getElementById("pop-play__caro-info-list--id");V&&w.matches_expanded&&Array.isArray(w.matches_expanded)&&(V.innerHTML=w.matches_expanded.map(U=>{const ne=U.scoreboard_data?typeof U.scoreboard_data=="string"?U.scoreboard_data:JSON.stringify(U.scoreboard_data):"";return`
                                        <bma-match-status
                                            data-match-guid="${U.guid||U.odds_id||U.id||""}"
                                            data-match-title="${U.short_title||U.title||"Match"}"
                                            data-match-scheduled-at="${U.scheduled_at||""}"
                                            data-match-home-team="${U.home_team_id||"Home"}"
                                            data-match-away-team="${U.away_team_id||"Away"}"
                                            data-match-home-score="${U.home_team_score!==null&&U.home_team_score!==void 0?U.home_team_score:""}"
                                            data-match-away-score="${U.away_team_score!==null&&U.away_team_score!==void 0?U.away_team_score:""}"
                                            data-match-scoreboard="${ne.replace(/"/g,"&quot;")}"
                                            data-match-sport-id="${U.sport_id||""}"
                                            data-sync-theme="dark"
                                        ></bma-match-status>
                                    `}).join(""))})(),setTimeout(()=>{const L=p.appSession?.session_user?.guid;c&&be.fetchLeaderboard(c).then(w=>{const I=document.getElementById("pop-play__caro-leaderboard--id");if(!I)return;const O=w?.data||w?.rows;if(O&&O.length>0){const K=p.coreTourn[p.coreTourn.length-1]?.data.find(P=>P.guid===c);I.innerHTML=O.map((P,V)=>{let U="";if(K?.tags&&Array.isArray(K.tags)){const Z=K.tags.find(Y=>typeof Y=="object"&&Y!==null&&Y[P.user_guid]?Y[P.user_guid].startsWith("--badge__ribbon--"):!1);if(Z){const Y=Z[P.user_guid];Y==="--badge__ribbon--gold"?U="badge-trophy--gold":Y==="--badge__ribbon--silver"?U="badge-trophy--silver":Y==="--badge__ribbon--bronze"&&(U="badge-trophy--bronze")}}const ne=P.combined_betslips?typeof P.combined_betslips=="string"?P.combined_betslips:JSON.stringify(P.combined_betslips):"[]";return`
                                                <bma-leaderboard-card
                                                    data-rank="${V+1}"
                                                    data-username="${P.username||"Unknown"}"
                                                    data-user-guid="${P.user_guid||""}"
                                                    data-tournament-dollars="${P.calculated_tournament_dollars||0}"
                                                    data-total-betslips="${P.total_betslips||0}"
                                                    data-total-payout="${P.total_payout||0}"
                                                    data-combined-betslips="${ne.replace(/"/g,"&quot;")}"
                                                    data-badge-class="${U}"
                                                    data-is-current-user="${P.user_guid===L}"
                                                    data-sync-theme="dark"
                                                ></bma-leaderboard-card>
                                            `}).join("")}else I.innerHTML=`
                                            <div class="leaderboard-empty">
                                                <p>No leaderboard data available yet.</p>
                                                <p class="leaderboard-empty__subtitle">Be the first to place a bet!</p>
                                            </div>
                                        `}).catch(w=>{console.error("[app_events] Error fetching leaderboard:",w);const I=document.getElementById("pop-play__caro-leaderboard--id");I&&(I.innerHTML=`
                                            <div class="leaderboard-empty">
                                                <p>Unable to load leaderboard data.</p>
                                            </div>
                                        `)})},600);let T=m==="PLAY"||m==="JOIN"?"PLAY":m;if(!c||p.coreTourn.length===0||p.coreTourn[p.coreTourn.length-1].data.find(I=>I.guid===c)?.status==="COMPLETED"&&(T="LEADERBOARD",console.log("[app_events] Tournament is COMPLETED, defaulting to LEADERBOARD")),T){const L=`ROUTE.HOME.SODAPOP_PLAY.${T}`;console.log("[app_events] Publishing initial topic:",L),J.publish(L,JSON.stringify({tournamentGuid:c,timestamp:Date.now()}))}if(!c||p.coreTourn.length===0)return;const x=p.coreTourn[p.coreTourn.length-1].data.find(L=>L.guid===c);it.renderMatchCards(x),neodigmUtils.typeOn({q1st:"#pop-play__tourn-caption--id",msg:`${x.caption}`,mode:"",uniqueDelay:62}),neodigmUtils.typeOn({q1st:"#pop-play__tourn-tagline--id",msg:`${x.tagline}`,mode:"",uniqueDelay:91})},1e3)},"sodapop_play"))},3e3),setTimeout(function(){neodigmSodaPop&&NeodigmClaire&&neodigmSodaPop.setOnClose(function(){return!0})},4e3)}},bf={__name:"App",setup(e){const t=ht(),n=ve();return setTimeout(function(){neodigmOpt.mvvLegit&&mvvLegit.setNavConroller((a=null)=>{neodigmOpt.N55_DEBUG_lOG&&neodigmToast.q(`Legit route: ${a}`,"primary"),t.push({name:a})}).setOnState((a=null)=>{a&&neodigmOpt.ROOT&&(neodigmOpt.ROOT.dataset.mvvLegit=a)}).init({BASE:be.API_baseURI})},2e3),setTimeout(()=>{n.appCLIFeatures.features.sse.state&&pa.establishSSE("https://machfive-bmacdev-rest.onrender.com/v5/sse?appid=BMACORE&sseid=user%40example.com&lastkey=123",n.appSession.session_user.guid,n,!0)},3e3),setTimeout(()=>{it.bindAppListeners(n)},3e3),t.beforeEach((a,s,r)=>{a.name=="splash_route"||a.name&&mvvLegit&&mvvLegit.isRouteAllowed(a.name)?r():r(!1)}),(a,s)=>(Qe(),sr(Ft(ki),null,{default:Za(({Component:r})=>[Ue(Mc,{name:"slide-left"},{default:Za(()=>[(Qe(),sr($l(r)))]),_:2},1024)]),_:1}))}};class yf extends HTMLElement{constructor(){super(),this.clockInterval=null}connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this.startClock()}disconnectedCallback(){this.clockInterval&&clearInterval(this.clockInterval)}static get observedAttributes(){return["data-sync-theme","data-user-name"]}attributeChangedCallback(t,n,a){this.shadowRoot&&n!==a&&this.render()}startClock(){this.updateTime(),this.clockInterval=setInterval(()=>{this.updateTime()},24e3)}updateTime(){const t=this.shadowRoot?.querySelector(".status-time");if(t){const n=new Date,a=n.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0}),s=n.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});t.textContent=`${s} ${a}`}}handleLogoClick(t){t.preventDefault(),J.publish("WC.APP.HEAD_TOP.LOGO",JSON.stringify({timestamp:Date.now()}))}handleProfileClick(t){t.preventDefault(),J.publish("WC.APP.HEAD_TOP.USER_PROFILE",JSON.stringify({timestamp:Date.now()}))}render(){const a=(document.getElementById("app")?.getAttribute("data-sync-theme")||"dark")==="dark",s=this.getAttribute("data-user-name")||"Guest";this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: block;
          position: sticky;
          top: 0;
          z-index: 100;
          width: 100%;
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--app-core-color--gray-4__dark--brand, #323232);
          box-shadow: ${a?"0 4px 20px rgba(0, 0, 0, 0.4)":"0 4px 20px rgba(0, 0, 0, 0.1)"};
        }

        .head-top-container {
          max-width: var(--bma-app-head__max--width, 1180px);
          margin: 0 auto;
          padding: 0.75rem 1rem;
          display: grid;
          grid-template-areas: "head_top_logo head_top_status head_top_user_profile";
          grid-template-columns: minmax(176px, 256px) auto minmax(176px, 256px);
          align-items: center;
          gap: 1rem;
        }

        .logo-section {
          grid-area: head_top_logo;
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }

        .logo-link {
          display: block;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .logo-img {
          position: absolute; top: 0;
          height: 62px;
          width: auto;
          filter: drop-shadow(0 2px 4px rgba(255, 215, 0, 0.2));
          content: url("https://bma-master.github.io/bma-core/img/BMT-White-Secondary.png");
        }

        .status-section {
          grid-area: head_top_status;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 0.25rem;
          user-select: none;
        }

        .status-username {
          font-size: 0.95rem;
          font-weight: 600;
          color: ${a?"rgba(255, 255, 255, 0.9)":"rgba(0, 0, 0, 0.9)"};
        }

        .status-time {
          font-size: 0.8rem;
          font-weight: 400;
          color: ${a?"rgba(255, 255, 255, 0.6)":"rgba(0, 0, 0, 0.6)"};
        }

        .profile-section {
          grid-area: head_top_user_profile;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          user-select: none;
        }

        .profile-icon {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background-color: ${a?"var(--app-core-color--gray-1__dark--brand, #080808)":"var(--app-core-color--gray-6__dark--brand, #969696)"};
          background-image: var( --nav-icon__account_circle--${a?"dark":"vlight"} );
          background-size: 112% 112%;
          background-position: center;
          background-repeat: no-repeat;
          border: 2px solid var(--app-core-color--gray-4__dark--brand, #323232);
          cursor: pointer;
          transition: all 0.2s ease;
          filter: brightness(70%);
        }

        .QQQQprofile-icon:hover {
          transform: scale(1.1);
          filter: brightness(110%);
          border-color: rgba(255, 215, 0, 0.6);
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .head-top-container {
            grid-template-columns: minmax(96px, 124px) auto minmax(96px, 124px);
            gap: 0.5rem;
            padding: 0.5rem 0.75rem;
          }

          .logo-img {
            QQQQheight: 28px;
            content: url("https://bma-master.github.io/bma-core/img/BMT-Color-Tertiary-.png");
          }

          .status-username {
            font-size: 0.85rem;
          }

          .status-time {
            font-size: 0.5rem;
          }
        }

        @media (min-width: 1280px) {
          .logo-img {
            height: 66px;
          }
        }
      </style>

      <div class="head-top-container">
        <div class="logo-section">
          <a href="#" class="logo-link" id="logoLink">
            <img
              src=""
              alt="Bet Max Action"
              class="logo-img"
            />
          </a>
        </div>

        <div class="status-section">
          <div class="status-username">${s}</div>
          <div class="status-time">Loading...</div>
        </div>

        <div class="profile-section">
          <div class="profile-icon" id="profileIcon" role="button" tabindex="0" aria-label="User Profile"></div>
        </div>
      </div>
    `;const r=this.shadowRoot.querySelector("#logoLink"),o=this.shadowRoot.querySelector("#profileIcon");r&&r.addEventListener("click",i=>this.handleLogoClick(i)),o&&(o.addEventListener("click",i=>this.handleProfileClick(i)),o.addEventListener("keypress",i=>{(i.key==="Enter"||i.key===" ")&&this.handleProfileClick(i)})),this.updateTime()}}customElements.define("bma-app-head-top",yf);class vf extends HTMLElement{constructor(){super(),this.selectedTab="head_mid_lobby"}connectedCallback(){this.attachShadow({mode:"open"}),this.render()}static get observedAttributes(){return["data-sync-theme","data-selected-tab"]}attributeChangedCallback(t,n,a){this.shadowRoot&&n!==a&&(t==="data-selected-tab"&&(this.selectedTab=a||"head_mid_lobby"),this.render())}handleTabClick(t,n){this.selectedTab=t,this.setAttribute("data-selected-tab",t),J.publish(n,JSON.stringify({tab:t,timestamp:Date.now()})),this.render()}render(){const a=(document.getElementById("app")?.getAttribute("data-sync-theme")||"dark")==="dark",s=[{name:"head_mid_lobby",caption:"Tournament Lobby",mobileCaption:"Lobby",topic:"WC.APP.HEAD_MID.HEAD_MID_LOBBY"},{name:"head_mid_my",caption:"My Tournaments",mobileCaption:"My Tourneys",topic:"WC.APP.HEAD_MID.HEAD_MID_MY"},{name:"head_mid_completed",caption:"Completed Tournaments",mobileCaption:"Completed Tourneys",topic:"WC.APP.HEAD_MID.HEAD_MID_COMPLETED"},{name:"head_mid_leaderboard",caption:"Leaderboard Ranking",mobileCaption:"Leaderboard",topic:"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD"},{name:"head_mid_squad",caption:"My Squads",mobileCaption:"Squads",topic:"WC.APP.HEAD_MID.HEAD_MID_SQUAD"}],r=o=>`
        <div
          class="tab-item ${this.selectedTab===o.name?"tab-selected":"tab-unselected"}"
          data-tab="${o.name}"
          role="button"
          tabindex="0"
          aria-label="${o.caption}"
        >
          <span class="tab-caption-desktop">${o.caption}</span>
          <span class="tab-caption-mobile">${o.mobileCaption}</span>
        </div>
      `;this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: block;
          width: 100%;
          background: ${a?"rgba(15, 25, 15, 0.85)":"rgba(245, 245, 245, 0.85)"};
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--app-core-color--gray-4__dark--brand, #323232);
        }

        /* Hide on mobile (≤768px) */
        @media (max-width: 768px) {
          :host {
            display: none;
          }
        }

        .head-mid-container {
          max-width: var(--bma-app-head__max--width, 1220px);
          margin: 0 auto;
          padding: 0;
          display: grid;
          grid-template-areas: "head_mid_lobby head_mid_my head_mid_completed head_mid_leaderboard head_mid_squad";
          grid-template-columns: repeat(5, 1fr);
          gap: 0;
        }

        .tab-item {
          grid-area: var(--tab-area);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem 0.5rem;
          cursor: pointer;
          transition: all 0.6s ease;
          border-bottom: 3px solid transparent;
          font-size: 0.9rem;
          font-weight: 600;
          text-align: center;
          user-select: none;
        }

        .tab-item[data-tab="head_mid_lobby"] { grid-area: head_mid_lobby; }
        .tab-item[data-tab="head_mid_my"] { grid-area: head_mid_my; }
        .tab-item[data-tab="head_mid_completed"] { grid-area: head_mid_completed; }
        .tab-item[data-tab="head_mid_leaderboard"] { grid-area: head_mid_leaderboard; }
        .tab-item[data-tab="head_mid_squad"] { grid-area: head_mid_squad; }

        /* Unselected state */
        .tab-unselected {
          color: ${a?"rgba(255, 255, 255, 0.6)":"rgba(0, 0, 0, 0.6)"};
          border-bottom-color: transparent;
        }

        /* Unselected hover state */
        .tab-unselected:hover {
          color: ${a?"rgba(255, 255, 255, 0.85)":"rgba(0, 0, 0, 0.85)"};
          background: ${a?"rgba(46, 139, 87, 0.1)":"rgba(46, 139, 87, 0.15)"};
          border-bottom-color: ${a?"rgba(255, 215, 0, 0.3)":"rgba(255, 215, 0, 0.5)"};
        }

        /* Selected state */
        .tab-selected {
          color: ${a?"#FFD700":"#B28F09"};
          border-bottom-color: var(--app-core-color--yellow-3__dark--brand, #F7C60D);
          background: ${a?"rgba(46, 139, 87, 0.15)":"rgba(46, 139, 87, 0.2)"};
        }

        .tab-caption-mobile {
          display: none;
        }

        .tab-caption-desktop {
          display: inline;
        }

        /* Tablet - show shorter captions */
        @media (min-width: 769px) and (max-width: 1024px) {
          .tab-item {
            font-size: 0.85rem;
            padding: 0.875rem 0.375rem;
          }

          .tab-caption-desktop {
            display: none;
          }

          .tab-caption-mobile {
            display: inline;
          }
        }
      </style>

      <div class="head-mid-container">
        ${s.map(o=>r(o)).join("")}
      </div>
    `,s.forEach(o=>{const i=this.shadowRoot.querySelector(`[data-tab="${o.name}"]`);i&&(i.addEventListener("click",()=>this.handleTabClick(o.name,o.topic)),i.addEventListener("keypress",l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),this.handleTabClick(o.name,o.topic))}))})}}customElements.define("bma-app-head-mid",vf);class Tf extends HTMLElement{constructor(){super(),this.selectedChip="all",this.savedScrollPosition=0}connectedCallback(){this.attachShadow({mode:"open"}),this.render()}static get observedAttributes(){return["data-sync-theme","data-selected-chip"]}attributeChangedCallback(t,n,a){this.shadowRoot&&n!==a&&(t==="data-selected-chip"&&(this.selectedChip=a||"all"),this.render())}handleChipClick(t,n){const a=this.shadowRoot.querySelector(".chips-container");a&&(this.savedScrollPosition=a.scrollLeft),this.selectedChip=t,this.setAttribute("data-selected-chip",t),J.publish("WC.APP.HEAD_SPORTS",JSON.stringify({key:t,group:n,timestamp:Date.now()})),this.render()}scrollToPrev(){const t=this.shadowRoot.querySelector(".chips-container");t&&(t.scrollBy({left:-256,behavior:"smooth"}),J.publish("WC.APP.HEAD_SPORTS.PREV",JSON.stringify({timestamp:Date.now()})))}scrollToNext(){const t=this.shadowRoot.querySelector(".chips-container");t&&(t.scrollBy({left:256,behavior:"smooth"}),J.publish("WC.APP.HEAD_SPORTS.NEXT",JSON.stringify({timestamp:Date.now()})))}initDragScroll(){const t=this.shadowRoot.querySelector(".chips-container");if(!t)return;let n=!1,a,s;t.addEventListener("mousedown",r=>{n=!0,t.style.cursor="grabbing",a=r.pageX-t.offsetLeft,s=t.scrollLeft,J.publish("WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START",JSON.stringify({action:"start",scrollPosition:s,timestamp:Date.now()}))}),t.addEventListener("mouseleave",()=>{n=!1,t.style.cursor="grab"}),t.addEventListener("mouseup",()=>{n=!1,t.style.cursor="grab"}),t.addEventListener("mousemove",r=>{if(!n)return;r.preventDefault();const i=(r.pageX-t.offsetLeft-a)*2;t.scrollLeft=s-i})}render(){const a=(document.getElementById("app")?.getAttribute("data-sync-theme")||"dark")==="dark",i=[...(ve().appMeta?.sports||[]).filter(p=>p.active===!0)].sort((p,h)=>{const c=(p.title||p.description||"").toLowerCase(),m=(h.title||h.description||"").toLowerCase();return c.localeCompare(m)}),l=[{key:"all",group:"All",title:"ALL",description:"All Sports"},...i],u=p=>{const h=this.selectedChip===p.key,c=p.key==="all";return`
        <div
          class="sport-chip ${h?"chip-selected":"chip-unselected"}"
          data-chip="${p.key}"
          role="button"
          tabindex="0"
          aria-label="${p.description||p.title}"
        >
          ${c?"":`<bma-sport-icon sport="${p.key}" data-sport-group="${p.group}"></bma-sport-icon>`}
          <span class="chip-title">${p.title||p.group}</span>
        </div>
      `};this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: block;
          width: 100%;
          background: ${a?"rgba(15, 25, 15, 0.85)":"rgba(245, 245, 245, 0.85)"};
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--app-core-color--gray-4__dark--brand, #323232);
        }

        .head-sports-container {
          max-width: var(--bma-app-head__max--width, 1180px);
          margin: 0 auto;
          display: grid;
          grid-template-areas: "head_sports_prev head_sports_chips head_sports_next";
          grid-template-columns: 48px auto 48px;
          align-items: flex-start;
          gap: 8px;
          padding: 8px;
        }

        .nav-icon {
          width: 32px; height: 32px;
          border-radius: 50%;
          QQQQbackground-color: ${a?"var(--app-core-color--gray-1__dark--brand, #080808)":"var(--app-core-color--gray-6__dark--brand, #969696)"};
          background-size: 112% 112%;
          background-position: center;
          background-repeat: no-repeat;
          border: 2px solid var(--app-core-color--gray-4__dark--brand, #323232);
          cursor: pointer;
          transition: all 0.2s ease;
          filter: brightness(70%);
        }
        .nav-icon.nav-icon__prev { background-image: var( --nav-icon__chevron_prev--${a?"dark":"vlight"} ); }
        .nav-icon.nav-icon__next { background-image: var( --nav-icon__chevron_prev--${a?"dark":"vlight"} ); transform: rotate(180deg); }


        .nav-prev {
          grid-area: head_sports_prev;
        }

        .nav-next {
          grid-area: head_sports_next;
        }

        .chips-wrapper {
          grid-area: head_sports_chips;
          position: relative;
          overflow: hidden;
        }

        .chips-container {
          display: flex;
          gap: 6px;
          overflow-x: auto;
          overflow-y: hidden;
          scroll-behavior: smooth;
          padding: 1px 0;
          margin: 0;
          cursor: grab;
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE/Edge */
        }

        /* Hide scrollbar for Chrome/Safari/Opera */
        .chips-container::-webkit-scrollbar {
          display: none;
        }

        .sport-chip {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 2px 4px 0 4px;
          border-radius: 4px;
          border: 1px solid #323232;
          border-bottom: 3px solid #323232;
          cursor: pointer;
          transition: all 0.6s ease;
          white-space: nowrap;
          user-select: none;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .chip-unselected {
          color: ${a?"rgba(255, 255, 255, 0.6)":"rgba(0, 0, 0, 0.6)"};
          background: ${a?"rgba(46, 139, 87, 0.05)":"rgba(46, 139, 87, 0.1)"};
          QQQQborder-bottom-color: transparent;
        }

        .chip-unselected:hover {
          color: ${a?"rgba(255, 255, 255, 0.85)":"rgba(0, 0, 0, 0.85)"};
          background: ${a?"rgba(46, 139, 87, 0.15)":"rgba(46, 139, 87, 0.2)"};
          border-bottom-color: ${a?"rgba(255, 215, 0, 0.3)":"rgba(255, 215, 0, 0.5)"};
        }

        .chip-selected {
          color: ${a?"#FFD700":"#B28F09"};
          background: ${a?"rgba(46, 139, 87, 0.2)":"rgba(46, 139, 87, 0.25)"};
          border-bottom-color: var(--app-core-color--yellow-3__dark--brand, #F7C60D);
        }

        .chip-title {
          font-size: 0.875rem;
          font-weight: 600;
        }

        bma-sport-icon {
          flex-shrink: 0;
        }
      </style>

      <div class="head-sports-container">
        <aside class="nav-icon nav-prev nav-icon__prev" id="navPrev" role="button" tabindex="0" aria-label="Scroll left"></aside>

        <div class="chips-wrapper">
          <div class="chips-container">
            ${l.map(p=>u(p)).join("")}
          </div>
        </div>

        <aside class="nav-icon nav-next nav-icon__next" id="navNext" role="button" tabindex="0" aria-label="Scroll right"></aside>
      </div>
    `,l.forEach(p=>{const h=this.shadowRoot.querySelector(`[data-chip="${p.key}"]`);h&&h.addEventListener("click",()=>this.handleChipClick(p.key,p.group))});const d=this.shadowRoot.querySelector("#navPrev"),f=this.shadowRoot.querySelector("#navNext");d&&d.addEventListener("click",()=>this.scrollToPrev()),f&&f.addEventListener("click",()=>this.scrollToNext()),this.initDragScroll();const g=this.shadowRoot.querySelector(".chips-container");g&&this.savedScrollPosition>0&&(g.scrollLeft=this.savedScrollPosition)}}customElements.define("bma-app-head-sports",Tf);class Ef extends HTMLElement{constructor(){super(),this.selectedItem="foot_all_sports"}connectedCallback(){this.attachShadow({mode:"open"}),this.render()}static get observedAttributes(){return["data-sync-theme","data-selected-item"]}attributeChangedCallback(t,n,a){this.shadowRoot&&n!==a&&(t==="data-selected-item"&&(this.selectedItem=a||"foot_all_sports"),this.render())}handleItemClick(t,n){this.selectedItem=t,this.setAttribute("data-selected-item",t),J.publish(n,JSON.stringify({item:t,timestamp:Date.now()})),this.render()}render(){const a=(document.getElementById("app")?.getAttribute("data-sync-theme")||"dark")==="dark",s=[{name:"foot_all_sports",caption:"Lobby",iconVar:"--nav-icon__sports--",topic:"WC.APP.FOOT.ALL_SPORTS"},{name:"foot_my_tourneys",caption:"My Tourneys",iconVar:"--nav-icon__trophy--",topic:"WC.APP.FOOT.MY_TOURNEYS"},{name:"foot_leaderboard",caption:"Leaderboard",iconVar:"--nav-icon__leaderboard--",topic:"WC.APP.FOOT.LEADERBOARD"},{name:"foot_my_account",caption:"My Profile",iconVar:"--nav-icon__my_profile_circle--",topic:"WC.APP.FOOT.MY_PROFILE"}],r=o=>`
        <div
          class="nav-item ${this.selectedItem===o.name?"nav-selected":"nav-unselected"}"
          data-item="${o.name}"
          role="button"
          tabindex="0"
          aria-label="${o.caption}"
        >
          <div class="nav-icon" data-icon-var="${o.iconVar}"></div>
          <span class="nav-caption">${o.caption}</span>
        </div>
      `;this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: none; /* Hidden by default */
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          z-index: 248;
          background: ${a?"rgba(15, 25, 15, 0.95)":"rgba(245, 245, 245, 0.64)"};
          backdrop-filter: blur(10px);
          border-top: 1px solid var(--app-core-color--gray-4__dark--brand, #323232);
          box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.2);
        }

        /* Show only on mobile (≤768px) */
        @media (max-width: 768px) {
          :host {
            display: block;
          }
        }

        .foot-container {
          max-width: var(--bma-app-head__max--width, 1180px);
          margin: 0 auto;
          padding: 0.5rem 0;
          display: flex;
          justify-content: space-around;
          align-items: center;
          gap: 0;
        }

        .nav-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 0.5rem 0.25rem;
          cursor: pointer;
          transition: all 0.2s ease;
          border-top: 3px solid transparent;
          user-select: none;
          min-height: 64px;
        }

        .nav-icon {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background-color: ${a?"var(--app-core-color--gray-1__dark--brand, #080808)":"var(--app-core-color--gray-6__dark--brand, #969696)"};
          background-position: center;
          background-repeat: no-repeat;
          border: 2px solid var(--app-core-color--gray-4__dark--brand, #323232);
          transition: all 0.2s ease;
          filter: brightness(70%);
          margin-bottom: 0.25rem;
        }

        .nav-icon[data-icon-var="--nav-icon__sports--"] {
          background-image: var(--nav-icon__trophy--${a?"dark":"light"});
        }

        .nav-icon[data-icon-var="--nav-icon__trophy--"] {
          background-image: var(--nav-icon__person_celebrate--${a?"dark":"light"});
        }

        .nav-icon[data-icon-var="--nav-icon__leaderboard--"] {
          background-image: var(--nav-icon__social_leaderboard--${a?"dark":"light"});
        }

        .nav-icon[data-icon-var="--nav-icon__my_profile_circle--"] {
          background-image: var(--nav-icon__account_circle--${a?"dark":"light"});
        }

        .nav-caption {
          font-size: 0.7rem;
          font-weight: 600;
          text-align: center;
          line-height: 1.2;
        }

        /* Unselected state */
        .nav-unselected {
          color: ${a?"rgba(255, 255, 255, 0.6)":"rgba(0, 0, 0, 0.6)"};
          border-top-color: transparent;
        }

        /* Selected state */
        .nav-selected {
          color: ${a?"#FFD700":"#B28F09"};
          border-top-color: var(--app-core-color--yellow-3__dark--brand, #F7C60D);
          background: ${a?"rgba(46, 139, 87, 0.15)":"rgba(46, 139, 87, 0.2)"};
        }

        .nav-selected .nav-icon {
          filter: brightness(120%);
        }
      </style>

      <div class="foot-container">
        ${s.map(o=>r(o)).join("")}
      </div>
    `,s.forEach(o=>{const i=this.shadowRoot.querySelector(`[data-item="${o.name}"]`);i&&(i.addEventListener("click",()=>this.handleItemClick(o.name,o.topic)),i.addEventListener("keypress",l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),this.handleItemClick(o.name,o.topic))}))})}}customElements.define("bma-app-foot",Ef);class Sf extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}static get observedAttributes(){return["data-corebetslip"]}attributeChangedCallback(t,n,a){n!==a&&this.render()}get betSlipData(){const t=this.getAttribute("data-corebetslip");if(!t)return null;try{return JSON.parse(t)}catch(n){return console.error("[bma-bet-existing] Failed to parse data-corebetslip:",n),null}}render(){const t=this.betSlipData;if(!t){this.shadowRoot.innerHTML="<div>Invalid bet data</div>";return}const n=t.bet||[];if(n.length===0){this.shadowRoot.innerHTML="<div>No bet data</div>";return}const a=n[0],s=a.short_title||"Match Info N/A",o=Object.keys(a).filter(c=>c!=="short_title")[0]||"Unknown Team",i=a[o],l=i.odds||"N/A",u=i.type||"N/A",d=parseFloat(i.stake||0).toFixed(2),f=parseFloat(i.payout||0).toFixed(2),g=i.reconciled!==!1,p=t.status_time?hn.formatDateLocal(t.status_time):"";let h=o;if(u==="spread"&&i.point){const c=parseFloat(i.point)>0?`+${i.point}`:i.point;h=`${o} ${c}`}else u==="total"&&i.point&&(h=`${i.team==="over"?"Over":"Under"} ${i.point}`);this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: block;
          width: 100%;
          margin-bottom: 8px;
        }

        .bet-existing-card {
          display: grid;
          grid-template-areas:
            "grid_header"
            "grid_content";
          grid-template-rows: auto auto;
          background: var(--app-core-color--gray-2__dark--brand, #161616);
          border: 1px solid var(--app-core-color--gray-4__dark--brand, #323232);
          border-radius: 8px;
          margin-bottom: 6px; padding: 8px;
          gap: 8px;
          box-sizing: border-box;
        }

        .grid_header {
          grid-area: grid_header;
          display: grid;
          grid-template-columns: 70% 30%;
          gap: 8px;
          align-items: center;
          padding-bottom: 8px;
          border-bottom: 1px solid var(--app-core-color--gray-4__dark--brand, #323232);
        }

        .grid_content {
          grid-area: grid_content;
          display: grid;
          grid-template-columns: 36% auto 124px;
          gap: 6px;
          align-items: center;
        }

        .content_team_points {
          font-weight: 700;
          font-size: 12px;
          color: var(--app-core-color--yellow-3__dark--brand, #F7C60D);
        }

        .content_odds {
          font-size: 0.9rem;
          color: #fff;
          text-align: center;
        }

        .content_stake_text {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding: 8px;
          background: var(--app-core-color--gray-3__dark--brand, #181818);
          border: 1px solid var(--app-core-color--gray-4__dark--brand, #323232);
          border-radius: 4px;
          color: #fff;
          font-size: 0.9rem;
          font-weight: 600;
          text-align: right;
          box-sizing: border-box;
        }

        .content_type {
          font-size: 0.75rem;
          color: var(--app-core-color--gray-6__dark--brand, #969696);
          text-transform: uppercase;
          font-weight: 600;
        }

        .match_desc {
          font-size: 11px;
          color: var(--app-core-color--gray-6__dark--brand, #969696);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .match_date {
          font-size: 10px;
          color: var(--app-core-color--gray-6__dark--brand, #969696);
          text-align: center;
        }

        .content_payout {
          font-size: 12px;
          font-weight: 700;
          color: var(--app-core-color--green-3__dark--brand, #14b963);
          text-align: right;
        }

        .content_payout.unreconciled {
          opacity: 0.4;
        }

        @media (max-width: 768px) {
          .grid_content {
            grid-template-columns: 45% auto 120px;
            gap: 6px;
          }

          .content_team_points {
            font-size: 0.85rem;
          }

          .content_odds {
            font-size: 0.8rem;
          }

          .content_stake_text {
            padding: 6px;
            font-size: 0.85rem;
          }
        }
      </style>

      <div class="bet-existing-card">
        <div class="grid_header">
          <div class="match_desc">${s}</div>
          <div class="match_date">${p}</div>
        </div>
        <div class="grid_content">
          <!-- Row 1 -->
          <div class="content_team_points">${h}</div>
          <div class="content_odds">${l}</div>
          <div class="content_stake_text">${d}</div>

          <!-- Row 2 -->
          <div class="content_type">${u.toUpperCase()}</div>
          <div></div>
          <div></div>

          <!-- Row 3 (payout only) -->
          <div></div>
          <div></div>
          <div class="content_payout ${g?"":"unreconciled"}">Payout: ${f}</div>
        </div>
      </div>
    `}}customElements.define("bma-bet-existing",Sf);const Jr=`
  <template id="sodapop_my_profile" data-n55-sodapop-modal="true"
    data-n55-sodapop-size="large" data-n55-sodapop-fullscreen="false"
    style="padding: 0;">
    <div>
      <div class="head-caption">
        <section class="head-caption__text">
          <h1 id="caption__my-profile" class="pop-play__tourn-caption"
          style="height: 30px;">My Profile</h1>
        </section>
        <div class="head-caption__close">
          <img data-sodapop-close="true"
          src="https://bma-master.github.io/bma-core/img/X-v1.png" alt="Close">
        </div>
      </div>
      <br><br>

      <neodigm-carousel id="caro-user_profile">
        <section>
<section data-n55-carousel-page-name="SPLASH">
  <div class="splash-lgo grass-branded h-center">
  <img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="Bet Max Tourney" />
  </div>
</section>
          <section data-n55-carousel-page-name="caro-page__badges">
            <div class="badges-grid grass-branded">
              <div class="badge-item">
                <div class="badge-icon badge-icon--gold"></div>
                <div class="badge-counter">0</div>
              </div>
              <div class="badge-item">
                <div class="badge-icon badge-icon--silver"></div>
                <div class="badge-counter">0</div>
              </div>
              <div class="badge-item">
                <div class="badge-icon badge-icon--bronze"></div>
                <div class="badge-counter">0</div>
              </div>
            </div>
          </section>
          <section data-n55-carousel-page-name="caro-page__squads"
          data-n55-cloak="true">
          </section>
        </section>
      </neodigm-carousel>

      <nav class="nav__bg--green h-center">
        <button class="btn-info-sm" data-publish-route-home="ROUTE.HOME.USER_PROFILE.INSTALL_PWA">Install App</button>
        <button class="btn-info-sm" data-publish-route-home="ROUTE.HOME.USER_PROFILE.RESET_PASSWORD">Reset Password</button>
        <button class="btn-info-sm" data-publish-route-home="ROUTE.HOME.USER_PROFILE.SIGNOUT">Sign Out</button>
      </nav>
      <br>
    </div>
  </template>

  <template id="sodapop_play" data-n55-sodapop-modal="true"
    data-n55-sodapop-size="xlarge" data-n55-sodapop-fullscreen="true"
    style="padding: 0;">
    <article class="play-cntr" data-current-tourn-guid="" data-current-tourn-action="">
      <div class="head-caption">
        <section class="head-caption__text">
          <h3 id="pop-play__tourn-caption--id" class="pop-play__tourn-caption"
          style="height: 24px;">Tourney</h3>
          <p id="pop-play__tourn-tagline--id" class="pop-play__tourn-tagline"
          style="height: 24px;">Play Now!</p>
        </section>
        <div class="head-caption__close">
          <img data-sodapop-close="true"
          src="https://bma-master.github.io/bma-core/img/X-v1.png" alt="Close">
        </div>
      </div>
      <br>
      <nav class="nav__bg--green h-center">
        <button class="btn-info-sm" data-publish-route-home="ROUTE.HOME.SODAPOP_PLAY.INFO">Info</button>
        <button id="btn-join__play--id"
        class="btn-info-sm" data-publish-route-home="ROUTE.HOME.SODAPOP_PLAY.PLAY" style="display: none;">Play</button>
        <button class="btn-info-sm" data-publish-route-home="ROUTE.HOME.SODAPOP_PLAY.LEADERBOARD">Leaderboard</button>
      </nav>
      <br>

<neodigm-carousel id="caro-play">
    <section>
        <section data-n55-carousel-page-name="SPLASH">
            <div class="splash-lgo grass-branded h-center"
            style="height: 60vh;">
              <br><br><br><br>
              <img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="Bet Max Tourney" />
            </div>
        </section>
        <section data-n55-carousel-page-name="INFO"  data-n55-carousel-height="auto"
        data-n55-cloak="true"
        style="max-width: 96vw;">
            <div id="pop-play__caro-info-summary2--id" class=""></div>
            <div id="pop-play__caro-info-summary1--id" class=""></div>
            <div id="pop-play__caro-info-list--id" class=""></div>
        </section>
        <section data-n55-carousel-page-name="PLAY"  data-n55-carousel-height="viewport"
        data-n55-cloak="true">
          <article class="bet-grid">
            <section class="bet-grid__select">
              <article class="select-grid"></article>
            </section>
            <aside class="bet-grid__slip" data-active-bet-tab="MYBETS">
              <nav class="bet-slip__tabs">
                <button class="bet-slip-tab" data-bet-tab="BETSLIP">Bet Slip</button>
                <button class="bet-slip-tab" data-bet-tab="MYBETS">My Bets</button>
              </nav>
              <section class="bet-grid__slip-BETSLIP" style="display: none;"
              data-bets-valid="false">
                <div class="bet-grid__slip-BETSLIP-content">
                  <!-- Placeholder for new bet creation UI -->
                  <div class="bet-slip__empty">
                    <p>Select odds to create a new bet slip</p>
                  </div>
                </div>
                <output class="bet-grid__slip-BETSLIP-summary">
                  <div class="summary-row summary-row--labels">
                    <div class="summary-cell">TD$</div>
                    <div class="summary-cell">Stake</div>
                    <div class="summary-cell">Payout</div>
                  </div>
                  <div class="summary-row summary-row--values">
                    <div id="summary-balance" class="summary-cell">0.00</div>
                    <div id="summary-stake" class="summary-cell">0.00</div>
                    <div id="summary-payout" class="summary-cell">0.00</div>
                  </div>
                </output>
                <button class="bet-grid__slip-BETSLIP-cta" data-publish-betslip="COREBETSLIP.BET">BET!</button>
              </section>
              <div class="bet-grid__slip-MYBETS">
                <!-- Historic bets populated here by JavaScript -->
              </div>
            </aside>
          </article>
        </section>
        <section data-n55-carousel-page-name="LEADERBOARD"   data-n55-carousel-height="viewport"
        data-n55-cloak="true">
          <div id="pop-play__caro-leaderboard--id"></div>
        </section>
    </section>
</neodigm-carousel>

      <br>
    </article>
  </template>
`;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{document.body.insertAdjacentHTML("beforeend",Jr)}):document.body.insertAdjacentHTML("beforeend",Jr);window.deferredPWAPrompt=null;window.addEventListener("beforeinstallprompt",e=>{console.log("[Global] beforeinstallprompt event fired"),e.preventDefault(),window.deferredPWAPrompt=e,window.dispatchEvent(new CustomEvent("pwa-installable"))});window.addEventListener("appinstalled",()=>{console.log("[Global] appinstalled event fired"),window.deferredPWAPrompt=null,window.dispatchEvent(new CustomEvent("pwa-installed"))});const $s=ld(bf);$s.use(ud());$s.use(fs);$s.mount("#app");if("serviceWorker"in navigator){let e=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{e||(e=!0,window.neodigmToast&&window.neodigmToast.q("App updated! Reloading...","success"),setTimeout(()=>{window.location.reload()},1e3))}),document.addEventListener("visibilitychange",()=>{document.hidden||navigator.serviceWorker.getRegistration().then(t=>{t?.update()})})}window.addEventListener("resize",e=>{window.requestAnimationFrame(()=>{neodigmMetronome.subscribe(()=>{neodigmMetronome.unsubscribe(303),neodigmCarousel&&[...document.querySelectorAll("neodigm-carousel")].forEach(n=>{neodigmCarousel.init().nav({id:n.id,nav:"resize"},!1)})},303)})});
