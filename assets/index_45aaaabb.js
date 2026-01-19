(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();function hs(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const _e={},pn=[],ft=()=>{},Vo=()=>!1,fa=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),gs=e=>e.startsWith("onUpdate:"),we=Object.assign,ms=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Li=Object.prototype.hasOwnProperty,fe=(e,t)=>Li.call(e,t),ae=Array.isArray,fn=e=>ha(e)==="[object Map]",Qo=e=>ha(e)==="[object Set]",oe=e=>typeof e=="function",Oe=e=>typeof e=="string",Yt=e=>typeof e=="symbol",ye=e=>e!==null&&typeof e=="object",Xo=e=>(ye(e)||oe(e))&&oe(e.then)&&oe(e.catch),Zo=Object.prototype.toString,ha=e=>Zo.call(e),Di=e=>ha(e).slice(8,-1),er=e=>ha(e)==="[object Object]",_s=e=>Oe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,An=hs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ga=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},Ii=/-\w/g,Qe=ga(e=>e.replace(Ii,t=>t.slice(1).toUpperCase())),Mi=/\B([A-Z])/g,jt=ga(e=>e.replace(Mi,"-$1").toLowerCase()),ma=ga(e=>e.charAt(0).toUpperCase()+e.slice(1)),xa=ga(e=>e?`on${ma(e)}`:""),Bt=(e,t)=>!Object.is(e,t),Ca=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},tr=(e,t,n,a=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:a,value:n})},Bi=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Fi=e=>{const t=Oe(e)?Number(e):NaN;return isNaN(t)?e:t};let Ys;const _a=()=>Ys||(Ys=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function bs(e){if(ae(e)){const t={};for(let n=0;n<e.length;n++){const a=e[n],s=Oe(a)?Ki(a):bs(a);if(s)for(const o in s)t[o]=s[o]}return t}else if(Oe(e)||ye(e))return e}const $i=/;(?![^(]*\))/g,Ui=/:([^]+)/,Hi=/\/\*[^]*?\*\//g;function Ki(e){const t={};return e.replace(Hi,"").split($i).forEach(n=>{if(n){const a=n.split(Ui);a.length>1&&(t[a[0].trim()]=a[1].trim())}}),t}function Ut(e){let t="";if(Oe(e))t=e;else if(ae(e))for(let n=0;n<e.length;n++){const a=Ut(e[n]);a&&(t+=a+" ")}else if(ye(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Yi="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ji=hs(Yi);function nr(e){return!!e||e===""}const ar=e=>!!(e&&e.__v_isRef===!0),sr=e=>Oe(e)?e:e==null?"":ae(e)||ye(e)&&(e.toString===Zo||!oe(e.toString))?ar(e)?sr(e.value):JSON.stringify(e,or,2):String(e),or=(e,t)=>ar(t)?or(e,t.value):fn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[a,s],o)=>(n[Ra(a,o)+" =>"]=s,n),{})}:Qo(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Ra(n))}:Yt(t)?Ra(t):ye(t)&&!ae(t)&&!er(t)?String(t):t,Ra=(e,t="")=>{var n;return Yt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};let Ce;class rr{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ce,!t&&Ce&&(this.index=(Ce.scopes||(Ce.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Ce;try{return Ce=this,t()}finally{Ce=n}}}on(){++this._on===1&&(this.prevScope=Ce,Ce=this)}off(){this._on>0&&--this._on===0&&(Ce=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,a;for(n=0,a=this.effects.length;n<a;n++)this.effects[n].stop();for(this.effects.length=0,n=0,a=this.cleanups.length;n<a;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,a=this.scopes.length;n<a;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function ir(e){return new rr(e)}function lr(){return Ce}function Gi(e,t=!1){Ce&&Ce.cleanups.push(e)}let me;const Na=new WeakSet;class cr{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ce&&Ce.active&&Ce.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Na.has(this)&&(Na.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ur(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,js(this),pr(this);const t=me,n=tt;me=this,tt=!0;try{return this.fn()}finally{fr(this),me=t,tt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Ts(t);this.deps=this.depsTail=void 0,js(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Na.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ja(this)&&this.run()}get dirty(){return Ja(this)}}let dr=0,On,Pn;function ur(e,t=!1){if(e.flags|=8,t){e.next=Pn,Pn=e;return}e.next=On,On=e}function ys(){dr++}function vs(){if(--dr>0)return;if(Pn){let t=Pn;for(Pn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;On;){let t=On;for(On=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(a){e||(e=a)}t=n}}if(e)throw e}function pr(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function fr(e){let t,n=e.depsTail,a=n;for(;a;){const s=a.prevDep;a.version===-1?(a===n&&(n=s),Ts(a),qi(a)):t=a,a.dep.activeLink=a.prevActiveLink,a.prevActiveLink=void 0,a=s}e.deps=t,e.depsTail=n}function Ja(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(hr(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function hr(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Dn)||(e.globalVersion=Dn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ja(e))))return;e.flags|=2;const t=e.dep,n=me,a=tt;me=e,tt=!0;try{pr(e);const s=e.fn(e._value);(t.version===0||Bt(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{me=n,tt=a,fr(e),e.flags&=-3}}function Ts(e,t=!1){const{dep:n,prevSub:a,nextSub:s}=e;if(a&&(a.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=a,e.nextSub=void 0),n.subs===e&&(n.subs=a,!a&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)Ts(o,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function qi(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let tt=!0;const gr=[];function At(){gr.push(tt),tt=!1}function Ot(){const e=gr.pop();tt=e===void 0?!0:e}function js(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=me;me=void 0;try{t()}finally{me=n}}}let Dn=0;class Wi{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Es{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!me||!tt||me===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==me)n=this.activeLink=new Wi(me,this),me.deps?(n.prevDep=me.depsTail,me.depsTail.nextDep=n,me.depsTail=n):me.deps=me.depsTail=n,mr(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const a=n.nextDep;a.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=a),n.prevDep=me.depsTail,n.nextDep=void 0,me.depsTail.nextDep=n,me.depsTail=n,me.deps===n&&(me.deps=a)}return n}trigger(t){this.version++,Dn++,this.notify(t)}notify(t){ys();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{vs()}}}function mr(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let a=t.deps;a;a=a.nextDep)mr(a)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const na=new WeakMap,nn=Symbol(""),za=Symbol(""),In=Symbol("");function Re(e,t,n){if(tt&&me){let a=na.get(e);a||na.set(e,a=new Map);let s=a.get(n);s||(a.set(n,s=new Es),s.map=a,s.key=n),s.track()}}function Et(e,t,n,a,s,o){const r=na.get(e);if(!r){Dn++;return}const i=l=>{l&&l.trigger()};if(ys(),t==="clear")r.forEach(i);else{const l=ae(e),u=l&&_s(n);if(l&&n==="length"){const c=Number(a);r.forEach((p,f)=>{(f==="length"||f===In||!Yt(f)&&f>=c)&&i(p)})}else switch((n!==void 0||r.has(void 0))&&i(r.get(n)),u&&i(r.get(In)),t){case"add":l?u&&i(r.get("length")):(i(r.get(nn)),fn(e)&&i(r.get(za)));break;case"delete":l||(i(r.get(nn)),fn(e)&&i(r.get(za)));break;case"set":fn(e)&&i(r.get(nn));break}}vs()}function Ji(e,t){const n=na.get(e);return n&&n.get(t)}function rn(e){const t=ce(e);return t===e?t:(Re(t,"iterate",In),nt(e)?t:t.map(Me))}function Ss(e){return Re(e=ce(e),"iterate",In),e}const zi={__proto__:null,[Symbol.iterator](){return La(this,Symbol.iterator,Me)},concat(...e){return rn(this).concat(...e.map(t=>ae(t)?rn(t):t))},entries(){return La(this,"entries",e=>(e[1]=Me(e[1]),e))},every(e,t){return mt(this,"every",e,t,void 0,arguments)},filter(e,t){return mt(this,"filter",e,t,n=>n.map(Me),arguments)},find(e,t){return mt(this,"find",e,t,Me,arguments)},findIndex(e,t){return mt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return mt(this,"findLast",e,t,Me,arguments)},findLastIndex(e,t){return mt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return mt(this,"forEach",e,t,void 0,arguments)},includes(...e){return Da(this,"includes",e)},indexOf(...e){return Da(this,"indexOf",e)},join(e){return rn(this).join(e)},lastIndexOf(...e){return Da(this,"lastIndexOf",e)},map(e,t){return mt(this,"map",e,t,void 0,arguments)},pop(){return yn(this,"pop")},push(...e){return yn(this,"push",e)},reduce(e,...t){return Gs(this,"reduce",e,t)},reduceRight(e,...t){return Gs(this,"reduceRight",e,t)},shift(){return yn(this,"shift")},some(e,t){return mt(this,"some",e,t,void 0,arguments)},splice(...e){return yn(this,"splice",e)},toReversed(){return rn(this).toReversed()},toSorted(e){return rn(this).toSorted(e)},toSpliced(...e){return rn(this).toSpliced(...e)},unshift(...e){return yn(this,"unshift",e)},values(){return La(this,"values",Me)}};function La(e,t,n){const a=Ss(e),s=a[t]();return a!==e&&!nt(e)&&(s._next=s.next,s.next=()=>{const o=s._next();return o.done||(o.value=n(o.value)),o}),s}const Vi=Array.prototype;function mt(e,t,n,a,s,o){const r=Ss(e),i=r!==e&&!nt(e),l=r[t];if(l!==Vi[t]){const p=l.apply(e,o);return i?Me(p):p}let u=n;r!==e&&(i?u=function(p,f){return n.call(this,Me(p),f,e)}:n.length>2&&(u=function(p,f){return n.call(this,p,f,e)}));const c=l.call(r,u,a);return i&&s?s(c):c}function Gs(e,t,n,a){const s=Ss(e);let o=n;return s!==e&&(nt(e)?n.length>3&&(o=function(r,i,l){return n.call(this,r,i,l,e)}):o=function(r,i,l){return n.call(this,r,Me(i),l,e)}),s[t](o,...a)}function Da(e,t,n){const a=ce(e);Re(a,"iterate",In);const s=a[t](...n);return(s===-1||s===!1)&&Ps(n[0])?(n[0]=ce(n[0]),a[t](...n)):s}function yn(e,t,n=[]){At(),ys();const a=ce(e)[t].apply(e,n);return vs(),Ot(),a}const Qi=hs("__proto__,__v_isRef,__isVue"),_r=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Yt));function Xi(e){Yt(e)||(e=String(e));const t=ce(this);return Re(t,"has",e),t.hasOwnProperty(e)}class br{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,a){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return o;if(n==="__v_raw")return a===(s?o?ll:Er:o?Tr:vr).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(a)?t:void 0;const r=ae(t);if(!s){let l;if(r&&(l=zi[n]))return l;if(n==="hasOwnProperty")return Xi}const i=Reflect.get(t,n,Ae(t)?t:a);if((Yt(n)?_r.has(n):Qi(n))||(s||Re(t,"get",n),o))return i;if(Ae(i)){const l=r&&_s(n)?i:i.value;return s&&ye(l)?Qa(l):l}return ye(i)?s?Qa(i):St(i):i}}class yr extends br{constructor(t=!1){super(!1,t)}set(t,n,a,s){let o=t[n];if(!this._isShallow){const l=on(o);if(!nt(a)&&!on(a)&&(o=ce(o),a=ce(a)),!ae(t)&&Ae(o)&&!Ae(a))return l||(o.value=a),!0}const r=ae(t)&&_s(n)?Number(n)<t.length:fe(t,n),i=Reflect.set(t,n,a,Ae(t)?t:s);return t===ce(s)&&(r?Bt(a,o)&&Et(t,"set",n,a):Et(t,"add",n,a)),i}deleteProperty(t,n){const a=fe(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&a&&Et(t,"delete",n,void 0),s}has(t,n){const a=Reflect.has(t,n);return(!Yt(n)||!_r.has(n))&&Re(t,"has",n),a}ownKeys(t){return Re(t,"iterate",ae(t)?"length":nn),Reflect.ownKeys(t)}}class Zi extends br{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const el=new yr,tl=new Zi,nl=new yr(!0);const Va=e=>e,qn=e=>Reflect.getPrototypeOf(e);function al(e,t,n){return function(...a){const s=this.__v_raw,o=ce(s),r=fn(o),i=e==="entries"||e===Symbol.iterator&&r,l=e==="keys"&&r,u=s[e](...a),c=n?Va:t?Xa:Me;return!t&&Re(o,"iterate",l?za:nn),{next(){const{value:p,done:f}=u.next();return f?{value:p,done:f}:{value:i?[c(p[0]),c(p[1])]:c(p),done:f}},[Symbol.iterator](){return this}}}}function Wn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function sl(e,t){const n={get(s){const o=this.__v_raw,r=ce(o),i=ce(s);e||(Bt(s,i)&&Re(r,"get",s),Re(r,"get",i));const{has:l}=qn(r),u=t?Va:e?Xa:Me;if(l.call(r,s))return u(o.get(s));if(l.call(r,i))return u(o.get(i));o!==r&&o.get(s)},get size(){const s=this.__v_raw;return!e&&Re(ce(s),"iterate",nn),s.size},has(s){const o=this.__v_raw,r=ce(o),i=ce(s);return e||(Bt(s,i)&&Re(r,"has",s),Re(r,"has",i)),s===i?o.has(s):o.has(s)||o.has(i)},forEach(s,o){const r=this,i=r.__v_raw,l=ce(i),u=t?Va:e?Xa:Me;return!e&&Re(l,"iterate",nn),i.forEach((c,p)=>s.call(o,u(c),u(p),r))}};return we(n,e?{add:Wn("add"),set:Wn("set"),delete:Wn("delete"),clear:Wn("clear")}:{add(s){!t&&!nt(s)&&!on(s)&&(s=ce(s));const o=ce(this);return qn(o).has.call(o,s)||(o.add(s),Et(o,"add",s,s)),this},set(s,o){!t&&!nt(o)&&!on(o)&&(o=ce(o));const r=ce(this),{has:i,get:l}=qn(r);let u=i.call(r,s);u||(s=ce(s),u=i.call(r,s));const c=l.call(r,s);return r.set(s,o),u?Bt(o,c)&&Et(r,"set",s,o):Et(r,"add",s,o),this},delete(s){const o=ce(this),{has:r,get:i}=qn(o);let l=r.call(o,s);l||(s=ce(s),l=r.call(o,s)),i&&i.call(o,s);const u=o.delete(s);return l&&Et(o,"delete",s,void 0),u},clear(){const s=ce(this),o=s.size!==0,r=s.clear();return o&&Et(s,"clear",void 0,void 0),r}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=al(s,e,t)}),n}function As(e,t){const n=sl(e,t);return(a,s,o)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?a:Reflect.get(fe(n,s)&&s in a?n:a,s,o)}const ol={get:As(!1,!1)},rl={get:As(!1,!0)},il={get:As(!0,!1)};const vr=new WeakMap,Tr=new WeakMap,Er=new WeakMap,ll=new WeakMap;function cl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function dl(e){return e.__v_skip||!Object.isExtensible(e)?0:cl(Di(e))}function St(e){return on(e)?e:Os(e,!1,el,ol,vr)}function Sr(e){return Os(e,!1,nl,rl,Tr)}function Qa(e){return Os(e,!0,tl,il,Er)}function Os(e,t,n,a,s){if(!ye(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=dl(e);if(o===0)return e;const r=s.get(e);if(r)return r;const i=new Proxy(e,o===2?a:n);return s.set(e,i),i}function an(e){return on(e)?an(e.__v_raw):!!(e&&e.__v_isReactive)}function on(e){return!!(e&&e.__v_isReadonly)}function nt(e){return!!(e&&e.__v_isShallow)}function Ps(e){return e?!!e.__v_raw:!1}function ce(e){const t=e&&e.__v_raw;return t?ce(t):e}function ks(e){return!fe(e,"__v_skip")&&Object.isExtensible(e)&&tr(e,"__v_skip",!0),e}const Me=e=>ye(e)?St(e):e,Xa=e=>ye(e)?Qa(e):e;function Ae(e){return e?e.__v_isRef===!0:!1}function ze(e){return Ar(e,!1)}function ul(e){return Ar(e,!0)}function Ar(e,t){return Ae(e)?e:new pl(e,t)}class pl{constructor(t,n){this.dep=new Es,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:ce(t),this._value=n?t:Me(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,a=this.__v_isShallow||nt(t)||on(t);t=a?t:ce(t),Bt(t,n)&&(this._rawValue=t,this._value=a?t:Me(t),this.dep.trigger())}}function Ft(e){return Ae(e)?e.value:e}const fl={get:(e,t,n)=>t==="__v_raw"?e:Ft(Reflect.get(e,t,n)),set:(e,t,n,a)=>{const s=e[t];return Ae(s)&&!Ae(n)?(s.value=n,!0):Reflect.set(e,t,n,a)}};function Or(e){return an(e)?e:new Proxy(e,fl)}function hl(e){const t=ae(e)?new Array(e.length):{};for(const n in e)t[n]=ml(e,n);return t}class gl{constructor(t,n,a){this._object=t,this._key=n,this._defaultValue=a,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Ji(ce(this._object),this._key)}}function ml(e,t,n){const a=e[t];return Ae(a)?a:new gl(e,t,n)}class _l{constructor(t,n,a){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Es(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Dn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=a}notify(){if(this.flags|=16,!(this.flags&8)&&me!==this)return ur(this,!0),!0}get value(){const t=this.dep.track();return hr(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function bl(e,t,n=!1){let a,s;return oe(e)?a=e:(a=e.get,s=e.set),new _l(a,s,n)}const Jn={},aa=new WeakMap;let Xt;function yl(e,t=!1,n=Xt){if(n){let a=aa.get(n);a||aa.set(n,a=[]),a.push(e)}}function vl(e,t,n=_e){const{immediate:a,deep:s,once:o,scheduler:r,augmentJob:i,call:l}=n,u=S=>s?S:nt(S)||s===!1||s===0?Mt(S,1):Mt(S);let c,p,f,h,m=!1,d=!1;if(Ae(e)?(p=()=>e.value,m=nt(e)):an(e)?(p=()=>u(e),m=!0):ae(e)?(d=!0,m=e.some(S=>an(S)||nt(S)),p=()=>e.map(S=>{if(Ae(S))return S.value;if(an(S))return u(S);if(oe(S))return l?l(S,2):S()})):oe(e)?t?p=l?()=>l(e,2):e:p=()=>{if(f){At();try{f()}finally{Ot()}}const S=Xt;Xt=c;try{return l?l(e,3,[h]):e(h)}finally{Xt=S}}:p=ft,t&&s){const S=p,P=s===!0?1/0:s;p=()=>Mt(S(),P)}const g=lr(),_=()=>{c.stop(),g&&g.active&&ms(g.effects,c)};if(o&&t){const S=t;t=(...P)=>{S(...P),_()}}let b=d?new Array(e.length).fill(Jn):Jn;const T=S=>{if(!(!(c.flags&1)||!c.dirty&&!S))if(t){const P=c.run();if(s||m||(d?P.some((C,I)=>Bt(C,b[I])):Bt(P,b))){f&&f();const C=Xt;Xt=c;try{const I=[P,b===Jn?void 0:d&&b[0]===Jn?[]:b,h];b=P,l?l(t,3,I):t(...I)}finally{Xt=C}}}else c.run()};return i&&i(T),c=new cr(p),c.scheduler=r?()=>r(T,!1):T,h=S=>yl(S,!1,c),f=c.onStop=()=>{const S=aa.get(c);if(S){if(l)l(S,4);else for(const P of S)P();aa.delete(c)}},t?a?T(!0):b=c.run():r?r(T.bind(null,!0),!0):c.run(),_.pause=c.pause.bind(c),_.resume=c.resume.bind(c),_.stop=_,_}function Mt(e,t=1/0,n){if(t<=0||!ye(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Ae(e))Mt(e.value,t,n);else if(ae(e))for(let a=0;a<e.length;a++)Mt(e[a],t,n);else if(Qo(e)||fn(e))e.forEach(a=>{Mt(a,t,n)});else if(er(e)){for(const a in e)Mt(e[a],t,n);for(const a of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,a)&&Mt(e[a],t,n)}return e}function Yn(e,t,n,a){try{return a?e(...a):e()}catch(s){ba(s,t,n)}}function at(e,t,n,a){if(oe(e)){const s=Yn(e,t,n,a);return s&&Xo(s)&&s.catch(o=>{ba(o,t,n)}),s}if(ae(e)){const s=[];for(let o=0;o<e.length;o++)s.push(at(e[o],t,n,a));return s}}function ba(e,t,n,a=!0){const s=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:r}=t&&t.appContext.config||_e;if(t){let i=t.parent;const l=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const c=i.ec;if(c){for(let p=0;p<c.length;p++)if(c[p](e,l,u)===!1)return}i=i.parent}if(o){At(),Yn(o,null,10,[e,l,u]),Ot();return}}Tl(e,n,s,a,r)}function Tl(e,t,n,a=!0,s=!1){if(s)throw e;console.error(e)}const Be=[];let ct=-1;const hn=[];let Rt=null,dn=0;const Pr=Promise.resolve();let sa=null;function ws(e){const t=sa||Pr;return e?t.then(this?e.bind(this):e):t}function El(e){let t=ct+1,n=Be.length;for(;t<n;){const a=t+n>>>1,s=Be[a],o=Mn(s);o<e||o===e&&s.flags&2?t=a+1:n=a}return t}function xs(e){if(!(e.flags&1)){const t=Mn(e),n=Be[Be.length-1];!n||!(e.flags&2)&&t>=Mn(n)?Be.push(e):Be.splice(El(t),0,e),e.flags|=1,kr()}}function kr(){sa||(sa=Pr.then(xr))}function Sl(e){ae(e)?hn.push(...e):Rt&&e.id===-1?Rt.splice(dn+1,0,e):e.flags&1||(hn.push(e),e.flags|=1),kr()}function qs(e,t,n=ct+1){for(;n<Be.length;n++){const a=Be[n];if(a&&a.flags&2){if(e&&a.id!==e.uid)continue;Be.splice(n,1),n--,a.flags&4&&(a.flags&=-2),a(),a.flags&4||(a.flags&=-2)}}}function wr(e){if(hn.length){const t=[...new Set(hn)].sort((n,a)=>Mn(n)-Mn(a));if(hn.length=0,Rt){Rt.push(...t);return}for(Rt=t,dn=0;dn<Rt.length;dn++){const n=Rt[dn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Rt=null,dn=0}}const Mn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function xr(e){try{for(ct=0;ct<Be.length;ct++){const t=Be[ct];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Yn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;ct<Be.length;ct++){const t=Be[ct];t&&(t.flags&=-2)}ct=-1,Be.length=0,wr(),sa=null,(Be.length||hn.length)&&xr()}}let et=null,Cr=null;function oa(e){const t=et;return et=e,Cr=e&&e.type.__scopeId||null,t}function Za(e,t=et,n){if(!t||e._n)return e;const a=(...s)=>{a._d&&la(-1);const o=oa(t);let r;try{r=e(...s)}finally{oa(o),a._d&&la(1)}return r};return a._n=!0,a._c=!0,a._d=!0,a}function Jt(e,t,n,a){const s=e.dirs,o=t&&t.dirs;for(let r=0;r<s.length;r++){const i=s[r];o&&(i.oldValue=o[r].value);let l=i.dir[a];l&&(At(),at(l,n,8,[e.el,i,e,t]),Ot())}}const Al=Symbol("_vte"),Rr=e=>e.__isTeleport,vt=Symbol("_leaveCb"),zn=Symbol("_enterCb");function Ol(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Gt(()=>{e.isMounted=!0}),Ur(()=>{e.isUnmounting=!0}),e}const We=[Function,Array],Nr={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:We,onEnter:We,onAfterEnter:We,onEnterCancelled:We,onBeforeLeave:We,onLeave:We,onAfterLeave:We,onLeaveCancelled:We,onBeforeAppear:We,onAppear:We,onAfterAppear:We,onAppearCancelled:We},Lr=e=>{const t=e.subTree;return t.component?Lr(t.component):t},Pl={name:"BaseTransition",props:Nr,setup(e,{slots:t}){const n=Ls(),a=Ol();return()=>{const s=t.default&&Mr(t.default(),!0);if(!s||!s.length)return;const o=Dr(s),r=ce(e),{mode:i}=r;if(a.isLeaving)return Ia(o);const l=Ws(o);if(!l)return Ia(o);let u=es(l,r,a,n,p=>u=p);l.type!==je&&Bn(l,u);let c=n.subTree&&Ws(n.subTree);if(c&&c.type!==je&&!Zt(c,l)&&Lr(n).type!==je){let p=es(c,r,a,n);if(Bn(c,p),i==="out-in"&&l.type!==je)return a.isLeaving=!0,p.afterLeave=()=>{a.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,c=void 0},Ia(o);i==="in-out"&&l.type!==je?p.delayLeave=(f,h,m)=>{const d=Ir(a,c);d[String(c.key)]=c,f[vt]=()=>{h(),f[vt]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{m(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return o}}};function Dr(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==je){t=n;break}}return t}const kl=Pl;function Ir(e,t){const{leavingVNodes:n}=e;let a=n.get(t.type);return a||(a=Object.create(null),n.set(t.type,a)),a}function es(e,t,n,a,s){const{appear:o,mode:r,persisted:i=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:p,onBeforeLeave:f,onLeave:h,onAfterLeave:m,onLeaveCancelled:d,onBeforeAppear:g,onAppear:_,onAfterAppear:b,onAppearCancelled:T}=t,S=String(e.key),P=Ir(n,e),C=(A,R)=>{A&&at(A,a,9,R)},I=(A,R)=>{const U=R[1];C(A,R),ae(A)?A.every(w=>w.length<=1)&&U():A.length<=1&&U()},$={mode:r,persisted:i,beforeEnter(A){let R=l;if(!n.isMounted)if(o)R=g||l;else return;A[vt]&&A[vt](!0);const U=P[S];U&&Zt(e,U)&&U.el[vt]&&U.el[vt](),C(R,[A])},enter(A){let R=u,U=c,w=p;if(!n.isMounted)if(o)R=_||u,U=b||c,w=T||p;else return;let q=!1;const V=A[zn]=ne=>{q||(q=!0,ne?C(w,[A]):C(U,[A]),$.delayedLeave&&$.delayedLeave(),A[zn]=void 0)};R?I(R,[A,V]):V()},leave(A,R){const U=String(e.key);if(A[zn]&&A[zn](!0),n.isUnmounting)return R();C(f,[A]);let w=!1;const q=A[vt]=V=>{w||(w=!0,R(),V?C(d,[A]):C(m,[A]),A[vt]=void 0,P[U]===e&&delete P[U])};P[U]=e,h?I(h,[A,q]):q()},clone(A){const R=es(A,t,n,a,s);return s&&s(R),R}};return $}function Ia(e){if(ya(e))return e=Ht(e),e.children=null,e}function Ws(e){if(!ya(e))return Rr(e.type)&&e.children?Dr(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&oe(n.default))return n.default()}}function Bn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Bn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Mr(e,t=!1,n){let a=[],s=0;for(let o=0;o<e.length;o++){let r=e[o];const i=n==null?r.key:String(n)+String(r.key!=null?r.key:o);r.type===ut?(r.patchFlag&128&&s++,a=a.concat(Mr(r.children,t,i))):(t||r.type!==je)&&a.push(i!=null?Ht(r,{key:i}):r)}if(s>1)for(let o=0;o<a.length;o++)a[o].patchFlag=-2;return a}function Br(e,t){return oe(e)?we({name:e.name},t,{setup:e}):e}function Fr(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const ra=new WeakMap;function kn(e,t,n,a,s=!1){if(ae(e)){e.forEach((m,d)=>kn(m,t&&(ae(t)?t[d]:t),n,a,s));return}if(wn(a)&&!s){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&kn(e,t,n,a.component.subTree);return}const o=a.shapeFlag&4?Ds(a.component):a.el,r=s?null:o,{i,r:l}=e,u=t&&t.r,c=i.refs===_e?i.refs={}:i.refs,p=i.setupState,f=ce(p),h=p===_e?Vo:m=>fe(f,m);if(u!=null&&u!==l){if(Js(t),Oe(u))c[u]=null,h(u)&&(p[u]=null);else if(Ae(u)){u.value=null;const m=t;m.k&&(c[m.k]=null)}}if(oe(l))Yn(l,i,12,[r,c]);else{const m=Oe(l),d=Ae(l);if(m||d){const g=()=>{if(e.f){const _=m?h(l)?p[l]:c[l]:l.value;if(s)ae(_)&&ms(_,o);else if(ae(_))_.includes(o)||_.push(o);else if(m)c[l]=[o],h(l)&&(p[l]=c[l]);else{const b=[o];l.value=b,e.k&&(c[e.k]=b)}}else m?(c[l]=r,h(l)&&(p[l]=r)):d&&(l.value=r,e.k&&(c[e.k]=r))};if(r){const _=()=>{g(),ra.delete(e)};_.id=-1,ra.set(e,_),Ye(_,n)}else Js(e),g()}}}function Js(e){const t=ra.get(e);t&&(t.flags|=8,ra.delete(e))}_a().requestIdleCallback;_a().cancelIdleCallback;const wn=e=>!!e.type.__asyncLoader,ya=e=>e.type.__isKeepAlive;function wl(e,t){$r(e,"a",t)}function xl(e,t){$r(e,"da",t)}function $r(e,t,n=Ne){const a=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(va(t,a,n),n){let s=n.parent;for(;s&&s.parent;)ya(s.parent.vnode)&&Cl(a,t,n,s),s=s.parent}}function Cl(e,t,n,a){const s=va(t,e,a,!0);Ta(()=>{ms(a[t],s)},n)}function va(e,t,n=Ne,a=!1){if(n){const s=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...r)=>{At();const i=jn(n),l=at(t,n,e,r);return i(),Ot(),l});return a?s.unshift(o):s.push(o),o}}const kt=e=>(t,n=Ne)=>{(!$n||e==="sp")&&va(e,(...a)=>t(...a),n)},Rl=kt("bm"),Gt=kt("m"),Nl=kt("bu"),Ll=kt("u"),Ur=kt("bum"),Ta=kt("um"),Dl=kt("sp"),Il=kt("rtg"),Ml=kt("rtc");function Bl(e,t=Ne){va("ec",e,t)}const Fl="components",Hr=Symbol.for("v-ndc");function $l(e){return Oe(e)?Ul(Fl,e,!1)||e:e||Hr}function Ul(e,t,n=!0,a=!1){const s=et||Ne;if(s){const o=s.type;{const i=wc(o,!1);if(i&&(i===t||i===Qe(t)||i===ma(Qe(t))))return o}const r=zs(s[e]||o[e],t)||zs(s.appContext[e],t);return!r&&a?o:r}}function zs(e,t){return e&&(e[t]||e[Qe(t)]||e[ma(Qe(t))])}const ts=e=>e?ii(e)?Ds(e):ts(e.parent):null,xn=we(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ts(e.parent),$root:e=>ts(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Yr(e),$forceUpdate:e=>e.f||(e.f=()=>{xs(e.update)}),$nextTick:e=>e.n||(e.n=ws.bind(e.proxy)),$watch:e=>lc.bind(e)}),Ma=(e,t)=>e!==_e&&!e.__isScriptSetup&&fe(e,t),Hl={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:a,data:s,props:o,accessCache:r,type:i,appContext:l}=e;let u;if(t[0]!=="$"){const h=r[t];if(h!==void 0)switch(h){case 1:return a[t];case 2:return s[t];case 4:return n[t];case 3:return o[t]}else{if(Ma(a,t))return r[t]=1,a[t];if(s!==_e&&fe(s,t))return r[t]=2,s[t];if((u=e.propsOptions[0])&&fe(u,t))return r[t]=3,o[t];if(n!==_e&&fe(n,t))return r[t]=4,n[t];ns&&(r[t]=0)}}const c=xn[t];let p,f;if(c)return t==="$attrs"&&Re(e.attrs,"get",""),c(e);if((p=i.__cssModules)&&(p=p[t]))return p;if(n!==_e&&fe(n,t))return r[t]=4,n[t];if(f=l.config.globalProperties,fe(f,t))return f[t]},set({_:e},t,n){const{data:a,setupState:s,ctx:o}=e;return Ma(s,t)?(s[t]=n,!0):a!==_e&&fe(a,t)?(a[t]=n,!0):fe(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:a,appContext:s,propsOptions:o,type:r}},i){let l,u;return!!(n[i]||e!==_e&&i[0]!=="$"&&fe(e,i)||Ma(t,i)||(l=o[0])&&fe(l,i)||fe(a,i)||fe(xn,i)||fe(s.config.globalProperties,i)||(u=r.__cssModules)&&u[i])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:fe(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Vs(e){return ae(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ns=!0;function Kl(e){const t=Yr(e),n=e.proxy,a=e.ctx;ns=!1,t.beforeCreate&&Qs(t.beforeCreate,e,"bc");const{data:s,computed:o,methods:r,watch:i,provide:l,inject:u,created:c,beforeMount:p,mounted:f,beforeUpdate:h,updated:m,activated:d,deactivated:g,beforeDestroy:_,beforeUnmount:b,destroyed:T,unmounted:S,render:P,renderTracked:C,renderTriggered:I,errorCaptured:$,serverPrefetch:A,expose:R,inheritAttrs:U,components:w,directives:q,filters:V}=t;if(u&&Yl(u,a,null),r)for(const M in r){const z=r[M];oe(z)&&(a[M]=z.bind(n))}if(s){const M=s.call(n,n);ye(M)&&(e.data=St(M))}if(ns=!0,o)for(const M in o){const z=o[M],re=oe(z)?z.bind(n,n):oe(z.get)?z.get.bind(n,n):ft,ee=!oe(z)&&oe(z.set)?z.set.bind(n):ft,Te=Ge({get:re,set:ee});Object.defineProperty(a,M,{enumerable:!0,configurable:!0,get:()=>Te.value,set:de=>Te.value=de})}if(i)for(const M in i)Kr(i[M],a,n,M);if(l){const M=oe(l)?l.call(n):l;Reflect.ownKeys(M).forEach(z=>{Xn(z,M[z])})}c&&Qs(c,e,"c");function X(M,z){ae(z)?z.forEach(re=>M(re.bind(n))):z&&M(z.bind(n))}if(X(Rl,p),X(Gt,f),X(Nl,h),X(Ll,m),X(wl,d),X(xl,g),X(Bl,$),X(Ml,C),X(Il,I),X(Ur,b),X(Ta,S),X(Dl,A),ae(R))if(R.length){const M=e.exposed||(e.exposed={});R.forEach(z=>{Object.defineProperty(M,z,{get:()=>n[z],set:re=>n[z]=re,enumerable:!0})})}else e.exposed||(e.exposed={});P&&e.render===ft&&(e.render=P),U!=null&&(e.inheritAttrs=U),w&&(e.components=w),q&&(e.directives=q),A&&Fr(e)}function Yl(e,t,n=ft){ae(e)&&(e=as(e));for(const a in e){const s=e[a];let o;ye(s)?"default"in s?o=Ve(s.from||a,s.default,!0):o=Ve(s.from||a):o=Ve(s),Ae(o)?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:r=>o.value=r}):t[a]=o}}function Qs(e,t,n){at(ae(e)?e.map(a=>a.bind(t.proxy)):e.bind(t.proxy),t,n)}function Kr(e,t,n,a){let s=a.includes(".")?ni(n,a):()=>n[a];if(Oe(e)){const o=t[e];oe(o)&&Cn(s,o)}else if(oe(e))Cn(s,e.bind(n));else if(ye(e))if(ae(e))e.forEach(o=>Kr(o,t,n,a));else{const o=oe(e.handler)?e.handler.bind(n):t[e.handler];oe(o)&&Cn(s,o,e)}}function Yr(e){const t=e.type,{mixins:n,extends:a}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:r}}=e.appContext,i=o.get(t);let l;return i?l=i:!s.length&&!n&&!a?l=t:(l={},s.length&&s.forEach(u=>ia(l,u,r,!0)),ia(l,t,r)),ye(t)&&o.set(t,l),l}function ia(e,t,n,a=!1){const{mixins:s,extends:o}=t;o&&ia(e,o,n,!0),s&&s.forEach(r=>ia(e,r,n,!0));for(const r in t)if(!(a&&r==="expose")){const i=jl[r]||n&&n[r];e[r]=i?i(e[r],t[r]):t[r]}return e}const jl={data:Xs,props:Zs,emits:Zs,methods:En,computed:En,beforeCreate:De,created:De,beforeMount:De,mounted:De,beforeUpdate:De,updated:De,beforeDestroy:De,beforeUnmount:De,destroyed:De,unmounted:De,activated:De,deactivated:De,errorCaptured:De,serverPrefetch:De,components:En,directives:En,watch:ql,provide:Xs,inject:Gl};function Xs(e,t){return t?e?function(){return we(oe(e)?e.call(this,this):e,oe(t)?t.call(this,this):t)}:t:e}function Gl(e,t){return En(as(e),as(t))}function as(e){if(ae(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function De(e,t){return e?[...new Set([].concat(e,t))]:t}function En(e,t){return e?we(Object.create(null),e,t):t}function Zs(e,t){return e?ae(e)&&ae(t)?[...new Set([...e,...t])]:we(Object.create(null),Vs(e),Vs(t??{})):t}function ql(e,t){if(!e)return t;if(!t)return e;const n=we(Object.create(null),e);for(const a in t)n[a]=De(e[a],t[a]);return n}function jr(){return{app:null,config:{isNativeTag:Vo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wl=0;function Jl(e,t){return function(a,s=null){oe(a)||(a=we({},a)),s!=null&&!ye(s)&&(s=null);const o=jr(),r=new WeakSet,i=[];let l=!1;const u=o.app={_uid:Wl++,_component:a,_props:s,_container:null,_context:o,_instance:null,version:Cc,get config(){return o.config},set config(c){},use(c,...p){return r.has(c)||(c&&oe(c.install)?(r.add(c),c.install(u,...p)):oe(c)&&(r.add(c),c(u,...p))),u},mixin(c){return o.mixins.includes(c)||o.mixins.push(c),u},component(c,p){return p?(o.components[c]=p,u):o.components[c]},directive(c,p){return p?(o.directives[c]=p,u):o.directives[c]},mount(c,p,f){if(!l){const h=u._ceVNode||He(a,s);return h.appContext=o,f===!0?f="svg":f===!1&&(f=void 0),e(h,c,f),l=!0,u._container=c,c.__vue_app__=u,Ds(h.component)}},onUnmount(c){i.push(c)},unmount(){l&&(at(i,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(c,p){return o.provides[c]=p,u},runWithContext(c){const p=sn;sn=u;try{return c()}finally{sn=p}}};return u}}let sn=null;function Xn(e,t){if(Ne){let n=Ne.provides;const a=Ne.parent&&Ne.parent.provides;a===n&&(n=Ne.provides=Object.create(a)),n[e]=t}}function Ve(e,t,n=!1){const a=Ls();if(a||sn){let s=sn?sn._context.provides:a?a.parent==null||a.ce?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&oe(t)?t.call(a&&a.proxy):t}}function zl(){return!!(Ls()||sn)}const Gr={},qr=()=>Object.create(Gr),Wr=e=>Object.getPrototypeOf(e)===Gr;function Vl(e,t,n,a=!1){const s={},o=qr();e.propsDefaults=Object.create(null),Jr(e,t,s,o);for(const r in e.propsOptions[0])r in s||(s[r]=void 0);n?e.props=a?s:Sr(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function Ql(e,t,n,a){const{props:s,attrs:o,vnode:{patchFlag:r}}=e,i=ce(s),[l]=e.propsOptions;let u=!1;if((a||r>0)&&!(r&16)){if(r&8){const c=e.vnode.dynamicProps;for(let p=0;p<c.length;p++){let f=c[p];if(Ea(e.emitsOptions,f))continue;const h=t[f];if(l)if(fe(o,f))h!==o[f]&&(o[f]=h,u=!0);else{const m=Qe(f);s[m]=ss(l,i,m,h,e,!1)}else h!==o[f]&&(o[f]=h,u=!0)}}}else{Jr(e,t,s,o)&&(u=!0);let c;for(const p in i)(!t||!fe(t,p)&&((c=jt(p))===p||!fe(t,c)))&&(l?n&&(n[p]!==void 0||n[c]!==void 0)&&(s[p]=ss(l,i,p,void 0,e,!0)):delete s[p]);if(o!==i)for(const p in o)(!t||!fe(t,p))&&(delete o[p],u=!0)}u&&Et(e.attrs,"set","")}function Jr(e,t,n,a){const[s,o]=e.propsOptions;let r=!1,i;if(t)for(let l in t){if(An(l))continue;const u=t[l];let c;s&&fe(s,c=Qe(l))?!o||!o.includes(c)?n[c]=u:(i||(i={}))[c]=u:Ea(e.emitsOptions,l)||(!(l in a)||u!==a[l])&&(a[l]=u,r=!0)}if(o){const l=ce(n),u=i||_e;for(let c=0;c<o.length;c++){const p=o[c];n[p]=ss(s,l,p,u[p],e,!fe(u,p))}}return r}function ss(e,t,n,a,s,o){const r=e[n];if(r!=null){const i=fe(r,"default");if(i&&a===void 0){const l=r.default;if(r.type!==Function&&!r.skipFactory&&oe(l)){const{propsDefaults:u}=s;if(n in u)a=u[n];else{const c=jn(s);a=u[n]=l.call(null,t),c()}}else a=l;s.ce&&s.ce._setProp(n,a)}r[0]&&(o&&!i?a=!1:r[1]&&(a===""||a===jt(n))&&(a=!0))}return a}const Xl=new WeakMap;function zr(e,t,n=!1){const a=n?Xl:t.propsCache,s=a.get(e);if(s)return s;const o=e.props,r={},i=[];let l=!1;if(!oe(e)){const c=p=>{l=!0;const[f,h]=zr(p,t,!0);we(r,f),h&&i.push(...h)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!o&&!l)return ye(e)&&a.set(e,pn),pn;if(ae(o))for(let c=0;c<o.length;c++){const p=Qe(o[c]);eo(p)&&(r[p]=_e)}else if(o)for(const c in o){const p=Qe(c);if(eo(p)){const f=o[c],h=r[p]=ae(f)||oe(f)?{type:f}:we({},f),m=h.type;let d=!1,g=!0;if(ae(m))for(let _=0;_<m.length;++_){const b=m[_],T=oe(b)&&b.name;if(T==="Boolean"){d=!0;break}else T==="String"&&(g=!1)}else d=oe(m)&&m.name==="Boolean";h[0]=d,h[1]=g,(d||fe(h,"default"))&&i.push(p)}}const u=[r,i];return ye(e)&&a.set(e,u),u}function eo(e){return e[0]!=="$"&&!An(e)}const Cs=e=>e==="_"||e==="_ctx"||e==="$stable",Rs=e=>ae(e)?e.map(pt):[pt(e)],Zl=(e,t,n)=>{if(t._n)return t;const a=Za((...s)=>Rs(t(...s)),n);return a._c=!1,a},Vr=(e,t,n)=>{const a=e._ctx;for(const s in e){if(Cs(s))continue;const o=e[s];if(oe(o))t[s]=Zl(s,o,a);else if(o!=null){const r=Rs(o);t[s]=()=>r}}},Qr=(e,t)=>{const n=Rs(t);e.slots.default=()=>n},Xr=(e,t,n)=>{for(const a in t)(n||!Cs(a))&&(e[a]=t[a])},ec=(e,t,n)=>{const a=e.slots=qr();if(e.vnode.shapeFlag&32){const s=t._;s?(Xr(a,t,n),n&&tr(a,"_",s,!0)):Vr(t,a)}else t&&Qr(e,t)},tc=(e,t,n)=>{const{vnode:a,slots:s}=e;let o=!0,r=_e;if(a.shapeFlag&32){const i=t._;i?n&&i===1?o=!1:Xr(s,t,n):(o=!t.$stable,Vr(t,s)),r=t}else t&&(Qr(e,t),r={default:1});if(o)for(const i in s)!Cs(i)&&r[i]==null&&delete s[i]},Ye=mc;function nc(e){return ac(e)}function ac(e,t){const n=_a();n.__VUE__=!0;const{insert:a,remove:s,patchProp:o,createElement:r,createText:i,createComment:l,setText:u,setElementText:c,parentNode:p,nextSibling:f,setScopeId:h=ft,insertStaticContent:m}=e,d=(y,v,E,L=null,D=null,N=null,G=void 0,j=null,H=!!v.dynamicChildren)=>{if(y===v)return;y&&!Zt(y,v)&&(L=x(y),de(y,D,N,!0),y=null),v.patchFlag===-2&&(H=!1,v.dynamicChildren=null);const{type:F,ref:te,shapeFlag:W}=v;switch(F){case Sa:g(y,v,E,L);break;case je:_(y,v,E,L);break;case Zn:y==null&&b(v,E,L,G);break;case ut:w(y,v,E,L,D,N,G,j,H);break;default:W&1?P(y,v,E,L,D,N,G,j,H):W&6?q(y,v,E,L,D,N,G,j,H):(W&64||W&128)&&F.process(y,v,E,L,D,N,G,j,H,Q)}te!=null&&D?kn(te,y&&y.ref,N,v||y,!v):te==null&&y&&y.ref!=null&&kn(y.ref,null,N,y,!0)},g=(y,v,E,L)=>{if(y==null)a(v.el=i(v.children),E,L);else{const D=v.el=y.el;v.children!==y.children&&u(D,v.children)}},_=(y,v,E,L)=>{y==null?a(v.el=l(v.children||""),E,L):v.el=y.el},b=(y,v,E,L)=>{[y.el,y.anchor]=m(y.children,v,E,L,y.el,y.anchor)},T=({el:y,anchor:v},E,L)=>{let D;for(;y&&y!==v;)D=f(y),a(y,E,L),y=D;a(v,E,L)},S=({el:y,anchor:v})=>{let E;for(;y&&y!==v;)E=f(y),s(y),y=E;s(v)},P=(y,v,E,L,D,N,G,j,H)=>{if(v.type==="svg"?G="svg":v.type==="math"&&(G="mathml"),y==null)C(v,E,L,D,N,G,j,H);else{const F=y.el&&y.el._isVueCE?y.el:null;try{F&&F._beginPatch(),A(y,v,D,N,G,j,H)}finally{F&&F._endPatch()}}},C=(y,v,E,L,D,N,G,j)=>{let H,F;const{props:te,shapeFlag:W,transition:Z,dirs:se}=y;if(H=y.el=r(y.type,N,te&&te.is,te),W&8?c(H,y.children):W&16&&$(y.children,H,null,L,D,Ba(y,N),G,j),se&&Jt(y,null,L,"created"),I(H,y,y.scopeId,G,L),te){for(const ge in te)ge!=="value"&&!An(ge)&&o(H,ge,null,te[ge],N,L);"value"in te&&o(H,"value",null,te.value,N),(F=te.onVnodeBeforeMount)&&lt(F,L,y)}se&&Jt(y,null,L,"beforeMount");const le=sc(D,Z);le&&Z.beforeEnter(H),a(H,v,E),((F=te&&te.onVnodeMounted)||le||se)&&Ye(()=>{F&&lt(F,L,y),le&&Z.enter(H),se&&Jt(y,null,L,"mounted")},D)},I=(y,v,E,L,D)=>{if(E&&h(y,E),L)for(let N=0;N<L.length;N++)h(y,L[N]);if(D){let N=D.subTree;if(v===N||si(N.type)&&(N.ssContent===v||N.ssFallback===v)){const G=D.vnode;I(y,G,G.scopeId,G.slotScopeIds,D.parent)}}},$=(y,v,E,L,D,N,G,j,H=0)=>{for(let F=H;F<y.length;F++){const te=y[F]=j?Nt(y[F]):pt(y[F]);d(null,te,v,E,L,D,N,G,j)}},A=(y,v,E,L,D,N,G)=>{const j=v.el=y.el;let{patchFlag:H,dynamicChildren:F,dirs:te}=v;H|=y.patchFlag&16;const W=y.props||_e,Z=v.props||_e;let se;if(E&&zt(E,!1),(se=Z.onVnodeBeforeUpdate)&&lt(se,E,v,y),te&&Jt(v,y,E,"beforeUpdate"),E&&zt(E,!0),(W.innerHTML&&Z.innerHTML==null||W.textContent&&Z.textContent==null)&&c(j,""),F?R(y.dynamicChildren,F,j,E,L,Ba(v,D),N):G||z(y,v,j,null,E,L,Ba(v,D),N,!1),H>0){if(H&16)U(j,W,Z,E,D);else if(H&2&&W.class!==Z.class&&o(j,"class",null,Z.class,D),H&4&&o(j,"style",W.style,Z.style,D),H&8){const le=v.dynamicProps;for(let ge=0;ge<le.length;ge++){const he=le[ge],Fe=W[he],$e=Z[he];($e!==Fe||he==="value")&&o(j,he,Fe,$e,D,E)}}H&1&&y.children!==v.children&&c(j,v.children)}else!G&&F==null&&U(j,W,Z,E,D);((se=Z.onVnodeUpdated)||te)&&Ye(()=>{se&&lt(se,E,v,y),te&&Jt(v,y,E,"updated")},L)},R=(y,v,E,L,D,N,G)=>{for(let j=0;j<v.length;j++){const H=y[j],F=v[j],te=H.el&&(H.type===ut||!Zt(H,F)||H.shapeFlag&198)?p(H.el):E;d(H,F,te,null,L,D,N,G,!0)}},U=(y,v,E,L,D)=>{if(v!==E){if(v!==_e)for(const N in v)!An(N)&&!(N in E)&&o(y,N,v[N],null,D,L);for(const N in E){if(An(N))continue;const G=E[N],j=v[N];G!==j&&N!=="value"&&o(y,N,j,G,D,L)}"value"in E&&o(y,"value",v.value,E.value,D)}},w=(y,v,E,L,D,N,G,j,H)=>{const F=v.el=y?y.el:i(""),te=v.anchor=y?y.anchor:i("");let{patchFlag:W,dynamicChildren:Z,slotScopeIds:se}=v;se&&(j=j?j.concat(se):se),y==null?(a(F,E,L),a(te,E,L),$(v.children||[],E,te,D,N,G,j,H)):W>0&&W&64&&Z&&y.dynamicChildren?(R(y.dynamicChildren,Z,E,D,N,G,j),(v.key!=null||D&&v===D.subTree)&&Zr(y,v,!0)):z(y,v,E,te,D,N,G,j,H)},q=(y,v,E,L,D,N,G,j,H)=>{v.slotScopeIds=j,y==null?v.shapeFlag&512?D.ctx.activate(v,E,L,G,H):V(v,E,L,D,N,G,H):ne(y,v,H)},V=(y,v,E,L,D,N,G)=>{const j=y.component=Sc(y,L,D);if(ya(y)&&(j.ctx.renderer=Q),Ac(j,!1,G),j.asyncDep){if(D&&D.registerDep(j,X,G),!y.el){const H=j.subTree=He(je);_(null,H,v,E),y.placeholder=H.el}}else X(j,y,v,E,D,N,G)},ne=(y,v,E)=>{const L=v.component=y.component;if(hc(y,v,E))if(L.asyncDep&&!L.asyncResolved){M(L,v,E);return}else L.next=v,L.update();else v.el=y.el,L.vnode=v},X=(y,v,E,L,D,N,G)=>{const j=()=>{if(y.isMounted){let{next:W,bu:Z,u:se,parent:le,vnode:ge}=y;{const rt=ei(y);if(rt){W&&(W.el=ge.el,M(y,W,G)),rt.asyncDep.then(()=>{y.isUnmounted||j()});return}}let he=W,Fe;zt(y,!1),W?(W.el=ge.el,M(y,W,G)):W=ge,Z&&Ca(Z),(Fe=W.props&&W.props.onVnodeBeforeUpdate)&&lt(Fe,le,W,ge),zt(y,!0);const $e=no(y),ot=y.subTree;y.subTree=$e,d(ot,$e,p(ot.el),x(ot),y,D,N),W.el=$e.el,he===null&&gc(y,$e.el),se&&Ye(se,D),(Fe=W.props&&W.props.onVnodeUpdated)&&Ye(()=>lt(Fe,le,W,ge),D)}else{let W;const{el:Z,props:se}=v,{bm:le,m:ge,parent:he,root:Fe,type:$e}=y,ot=wn(v);zt(y,!1),le&&Ca(le),!ot&&(W=se&&se.onVnodeBeforeMount)&&lt(W,he,v),zt(y,!0);{Fe.ce&&Fe.ce._def.shadowRoot!==!1&&Fe.ce._injectChildStyle($e);const rt=y.subTree=no(y);d(null,rt,E,L,y,D,N),v.el=rt.el}if(ge&&Ye(ge,D),!ot&&(W=se&&se.onVnodeMounted)){const rt=v;Ye(()=>lt(W,he,rt),D)}(v.shapeFlag&256||he&&wn(he.vnode)&&he.vnode.shapeFlag&256)&&y.a&&Ye(y.a,D),y.isMounted=!0,v=E=L=null}};y.scope.on();const H=y.effect=new cr(j);y.scope.off();const F=y.update=H.run.bind(H),te=y.job=H.runIfDirty.bind(H);te.i=y,te.id=y.uid,H.scheduler=()=>xs(te),zt(y,!0),F()},M=(y,v,E)=>{v.component=y;const L=y.vnode.props;y.vnode=v,y.next=null,Ql(y,v.props,L,E),tc(y,v.children,E),At(),qs(y),Ot()},z=(y,v,E,L,D,N,G,j,H=!1)=>{const F=y&&y.children,te=y?y.shapeFlag:0,W=v.children,{patchFlag:Z,shapeFlag:se}=v;if(Z>0){if(Z&128){ee(F,W,E,L,D,N,G,j,H);return}else if(Z&256){re(F,W,E,L,D,N,G,j,H);return}}se&8?(te&16&&ue(F,D,N),W!==F&&c(E,W)):te&16?se&16?ee(F,W,E,L,D,N,G,j,H):ue(F,D,N,!0):(te&8&&c(E,""),se&16&&$(W,E,L,D,N,G,j,H))},re=(y,v,E,L,D,N,G,j,H)=>{y=y||pn,v=v||pn;const F=y.length,te=v.length,W=Math.min(F,te);let Z;for(Z=0;Z<W;Z++){const se=v[Z]=H?Nt(v[Z]):pt(v[Z]);d(y[Z],se,E,null,D,N,G,j,H)}F>te?ue(y,D,N,!0,!1,W):$(v,E,L,D,N,G,j,H,W)},ee=(y,v,E,L,D,N,G,j,H)=>{let F=0;const te=v.length;let W=y.length-1,Z=te-1;for(;F<=W&&F<=Z;){const se=y[F],le=v[F]=H?Nt(v[F]):pt(v[F]);if(Zt(se,le))d(se,le,E,null,D,N,G,j,H);else break;F++}for(;F<=W&&F<=Z;){const se=y[W],le=v[Z]=H?Nt(v[Z]):pt(v[Z]);if(Zt(se,le))d(se,le,E,null,D,N,G,j,H);else break;W--,Z--}if(F>W){if(F<=Z){const se=Z+1,le=se<te?v[se].el:L;for(;F<=Z;)d(null,v[F]=H?Nt(v[F]):pt(v[F]),E,le,D,N,G,j,H),F++}}else if(F>Z)for(;F<=W;)de(y[F],D,N,!0),F++;else{const se=F,le=F,ge=new Map;for(F=le;F<=Z;F++){const Ke=v[F]=H?Nt(v[F]):pt(v[F]);Ke.key!=null&&ge.set(Ke.key,F)}let he,Fe=0;const $e=Z-le+1;let ot=!1,rt=0;const bn=new Array($e);for(F=0;F<$e;F++)bn[F]=0;for(F=se;F<=W;F++){const Ke=y[F];if(Fe>=$e){de(Ke,D,N,!0);continue}let it;if(Ke.key!=null)it=ge.get(Ke.key);else for(he=le;he<=Z;he++)if(bn[he-le]===0&&Zt(Ke,v[he])){it=he;break}it===void 0?de(Ke,D,N,!0):(bn[it-le]=F+1,it>=rt?rt=it:ot=!0,d(Ke,v[it],E,null,D,N,G,j,H),Fe++)}const Us=ot?oc(bn):pn;for(he=Us.length-1,F=$e-1;F>=0;F--){const Ke=le+F,it=v[Ke],Hs=v[Ke+1],Ks=Ke+1<te?Hs.el||Hs.placeholder:L;bn[F]===0?d(null,it,E,Ks,D,N,G,j,H):ot&&(he<0||F!==Us[he]?Te(it,E,Ks,2):he--)}}},Te=(y,v,E,L,D=null)=>{const{el:N,type:G,transition:j,children:H,shapeFlag:F}=y;if(F&6){Te(y.component.subTree,v,E,L);return}if(F&128){y.suspense.move(v,E,L);return}if(F&64){G.move(y,v,E,Q);return}if(G===ut){a(N,v,E);for(let W=0;W<H.length;W++)Te(H[W],v,E,L);a(y.anchor,v,E);return}if(G===Zn){T(y,v,E);return}if(L!==2&&F&1&&j)if(L===0)j.beforeEnter(N),a(N,v,E),Ye(()=>j.enter(N),D);else{const{leave:W,delayLeave:Z,afterLeave:se}=j,le=()=>{y.ctx.isUnmounted?s(N):a(N,v,E)},ge=()=>{N._isLeaving&&N[vt](!0),W(N,()=>{le(),se&&se()})};Z?Z(N,le,ge):ge()}else a(N,v,E)},de=(y,v,E,L=!1,D=!1)=>{const{type:N,props:G,ref:j,children:H,dynamicChildren:F,shapeFlag:te,patchFlag:W,dirs:Z,cacheIndex:se}=y;if(W===-2&&(D=!1),j!=null&&(At(),kn(j,null,E,y,!0),Ot()),se!=null&&(v.renderCache[se]=void 0),te&256){v.ctx.deactivate(y);return}const le=te&1&&Z,ge=!wn(y);let he;if(ge&&(he=G&&G.onVnodeBeforeUnmount)&&lt(he,v,y),te&6)ke(y.component,E,L);else{if(te&128){y.suspense.unmount(E,L);return}le&&Jt(y,null,v,"beforeUnmount"),te&64?y.type.remove(y,v,E,Q,L):F&&!F.hasOnce&&(N!==ut||W>0&&W&64)?ue(F,v,E,!1,!0):(N===ut&&W&384||!D&&te&16)&&ue(H,v,E),L&&Le(y)}(ge&&(he=G&&G.onVnodeUnmounted)||le)&&Ye(()=>{he&&lt(he,v,y),le&&Jt(y,null,v,"unmounted")},E)},Le=y=>{const{type:v,el:E,anchor:L,transition:D}=y;if(v===ut){Se(E,L);return}if(v===Zn){S(y);return}const N=()=>{s(E),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(y.shapeFlag&1&&D&&!D.persisted){const{leave:G,delayLeave:j}=D,H=()=>G(E,N);j?j(y.el,N,H):H()}else N()},Se=(y,v)=>{let E;for(;y!==v;)E=f(y),s(y),y=E;s(v)},ke=(y,v,E)=>{const{bum:L,scope:D,job:N,subTree:G,um:j,m:H,a:F}=y;to(H),to(F),L&&Ca(L),D.stop(),N&&(N.flags|=8,de(G,y,v,E)),j&&Ye(j,v),Ye(()=>{y.isUnmounted=!0},v)},ue=(y,v,E,L=!1,D=!1,N=0)=>{for(let G=N;G<y.length;G++)de(y[G],v,E,L,D)},x=y=>{if(y.shapeFlag&6)return x(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const v=f(y.anchor||y.el),E=v&&v[Al];return E?f(E):v};let K=!1;const Y=(y,v,E)=>{y==null?v._vnode&&de(v._vnode,null,null,!0):d(v._vnode||null,y,v,null,null,null,E),v._vnode=y,K||(K=!0,qs(),wr(),K=!1)},Q={p:d,um:de,m:Te,r:Le,mt:V,mc:$,pc:z,pbc:R,n:x,o:e};return{render:Y,hydrate:void 0,createApp:Jl(Y)}}function Ba({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function zt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function sc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Zr(e,t,n=!1){const a=e.children,s=t.children;if(ae(a)&&ae(s))for(let o=0;o<a.length;o++){const r=a[o];let i=s[o];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=s[o]=Nt(s[o]),i.el=r.el),!n&&i.patchFlag!==-2&&Zr(r,i)),i.type===Sa&&i.patchFlag!==-1&&(i.el=r.el),i.type===je&&!i.el&&(i.el=r.el)}}function oc(e){const t=e.slice(),n=[0];let a,s,o,r,i;const l=e.length;for(a=0;a<l;a++){const u=e[a];if(u!==0){if(s=n[n.length-1],e[s]<u){t[a]=s,n.push(a);continue}for(o=0,r=n.length-1;o<r;)i=o+r>>1,e[n[i]]<u?o=i+1:r=i;u<e[n[o]]&&(o>0&&(t[a]=n[o-1]),n[o]=a)}}for(o=n.length,r=n[o-1];o-- >0;)n[o]=r,r=t[r];return n}function ei(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:ei(t)}function to(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const rc=Symbol.for("v-scx"),ic=()=>Ve(rc);function Cn(e,t,n){return ti(e,t,n)}function ti(e,t,n=_e){const{immediate:a,deep:s,flush:o,once:r}=n,i=we({},n),l=t&&a||!t&&o!=="post";let u;if($n){if(o==="sync"){const h=ic();u=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=ft,h.resume=ft,h.pause=ft,h}}const c=Ne;i.call=(h,m,d)=>at(h,c,m,d);let p=!1;o==="post"?i.scheduler=h=>{Ye(h,c&&c.suspense)}:o!=="sync"&&(p=!0,i.scheduler=(h,m)=>{m?h():xs(h)}),i.augmentJob=h=>{t&&(h.flags|=4),p&&(h.flags|=2,c&&(h.id=c.uid,h.i=c))};const f=vl(e,t,i);return $n&&(u?u.push(f):l&&f()),f}function lc(e,t,n){const a=this.proxy,s=Oe(e)?e.includes(".")?ni(a,e):()=>a[e]:e.bind(a,a);let o;oe(t)?o=t:(o=t.handler,n=t);const r=jn(this),i=ti(s,o.bind(a),n);return r(),i}function ni(e,t){const n=t.split(".");return()=>{let a=e;for(let s=0;s<n.length&&a;s++)a=a[n[s]];return a}}const cc=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Qe(t)}Modifiers`]||e[`${jt(t)}Modifiers`];function dc(e,t,...n){if(e.isUnmounted)return;const a=e.vnode.props||_e;let s=n;const o=t.startsWith("update:"),r=o&&cc(a,t.slice(7));r&&(r.trim&&(s=n.map(c=>Oe(c)?c.trim():c)),r.number&&(s=n.map(Bi)));let i,l=a[i=xa(t)]||a[i=xa(Qe(t))];!l&&o&&(l=a[i=xa(jt(t))]),l&&at(l,e,6,s);const u=a[i+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,at(u,e,6,s)}}const uc=new WeakMap;function ai(e,t,n=!1){const a=n?uc:t.emitsCache,s=a.get(e);if(s!==void 0)return s;const o=e.emits;let r={},i=!1;if(!oe(e)){const l=u=>{const c=ai(u,t,!0);c&&(i=!0,we(r,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!o&&!i?(ye(e)&&a.set(e,null),null):(ae(o)?o.forEach(l=>r[l]=null):we(r,o),ye(e)&&a.set(e,r),r)}function Ea(e,t){return!e||!fa(t)?!1:(t=t.slice(2).replace(/Once$/,""),fe(e,t[0].toLowerCase()+t.slice(1))||fe(e,jt(t))||fe(e,t))}function no(e){const{type:t,vnode:n,proxy:a,withProxy:s,propsOptions:[o],slots:r,attrs:i,emit:l,render:u,renderCache:c,props:p,data:f,setupState:h,ctx:m,inheritAttrs:d}=e,g=oa(e);let _,b;try{if(n.shapeFlag&4){const S=s||a,P=S;_=pt(u.call(P,S,c,p,h,f,m)),b=i}else{const S=t;_=pt(S.length>1?S(p,{attrs:i,slots:r,emit:l}):S(p,null)),b=t.props?i:pc(i)}}catch(S){Rn.length=0,ba(S,e,1),_=He(je)}let T=_;if(b&&d!==!1){const S=Object.keys(b),{shapeFlag:P}=T;S.length&&P&7&&(o&&S.some(gs)&&(b=fc(b,o)),T=Ht(T,b,!1,!0))}return n.dirs&&(T=Ht(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(n.dirs):n.dirs),n.transition&&Bn(T,n.transition),_=T,oa(g),_}const pc=e=>{let t;for(const n in e)(n==="class"||n==="style"||fa(n))&&((t||(t={}))[n]=e[n]);return t},fc=(e,t)=>{const n={};for(const a in e)(!gs(a)||!(a.slice(9)in t))&&(n[a]=e[a]);return n};function hc(e,t,n){const{props:a,children:s,component:o}=e,{props:r,children:i,patchFlag:l}=t,u=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return a?ao(a,r,u):!!r;if(l&8){const c=t.dynamicProps;for(let p=0;p<c.length;p++){const f=c[p];if(r[f]!==a[f]&&!Ea(u,f))return!0}}}else return(s||i)&&(!i||!i.$stable)?!0:a===r?!1:a?r?ao(a,r,u):!0:!!r;return!1}function ao(e,t,n){const a=Object.keys(t);if(a.length!==Object.keys(e).length)return!0;for(let s=0;s<a.length;s++){const o=a[s];if(t[o]!==e[o]&&!Ea(n,o))return!0}return!1}function gc({vnode:e,parent:t},n){for(;t;){const a=t.subTree;if(a.suspense&&a.suspense.activeBranch===e&&(a.el=e.el),a===e)(e=t.vnode).el=n,t=t.parent;else break}}const si=e=>e.__isSuspense;function mc(e,t){t&&t.pendingBranch?ae(e)?t.effects.push(...e):t.effects.push(e):Sl(e)}const ut=Symbol.for("v-fgt"),Sa=Symbol.for("v-txt"),je=Symbol.for("v-cmt"),Zn=Symbol.for("v-stc"),Rn=[];let qe=null;function Xe(e=!1){Rn.push(qe=e?null:[])}function _c(){Rn.pop(),qe=Rn[Rn.length-1]||null}let Fn=1;function la(e,t=!1){Fn+=e,e<0&&qe&&t&&(qe.hasOnce=!0)}function oi(e){return e.dynamicChildren=Fn>0?qe||pn:null,_c(),Fn>0&&qe&&qe.push(e),e}function ht(e,t,n,a,s,o){return oi(k(e,t,n,a,s,o,!0))}function so(e,t,n,a,s){return oi(He(e,t,n,a,s,!0))}function ca(e){return e?e.__v_isVNode===!0:!1}function Zt(e,t){return e.type===t.type&&e.key===t.key}const ri=({key:e})=>e??null,ea=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Oe(e)||Ae(e)||oe(e)?{i:et,r:e,k:t,f:!!n}:e:null);function k(e,t=null,n=null,a=0,s=null,o=e===ut?0:1,r=!1,i=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ri(t),ref:t&&ea(t),scopeId:Cr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:a,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:et};return i?(Ns(l,n),o&128&&e.normalize(l)):n&&(l.shapeFlag|=Oe(n)?8:16),Fn>0&&!r&&qe&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&qe.push(l),l}const He=bc;function bc(e,t=null,n=null,a=0,s=null,o=!1){if((!e||e===Hr)&&(e=je),ca(e)){const i=Ht(e,t,!0);return n&&Ns(i,n),Fn>0&&!o&&qe&&(i.shapeFlag&6?qe[qe.indexOf(e)]=i:qe.push(i)),i.patchFlag=-2,i}if(xc(e)&&(e=e.__vccOpts),t){t=yc(t);let{class:i,style:l}=t;i&&!Oe(i)&&(t.class=Ut(i)),ye(l)&&(Ps(l)&&!ae(l)&&(l=we({},l)),t.style=bs(l))}const r=Oe(e)?1:si(e)?128:Rr(e)?64:ye(e)?4:oe(e)?2:0;return k(e,t,n,a,s,r,o,!0)}function yc(e){return e?Ps(e)||Wr(e)?we({},e):e:null}function Ht(e,t,n=!1,a=!1){const{props:s,ref:o,patchFlag:r,children:i,transition:l}=e,u=t?vc(s||{},t):s,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&ri(u),ref:t&&t.ref?n&&o?ae(o)?o.concat(ea(t)):[o,ea(t)]:ea(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ut?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ht(e.ssContent),ssFallback:e.ssFallback&&Ht(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&a&&Bn(c,l.clone(c)),c}function Aa(e=" ",t=0){return He(Sa,null,e,t)}function qt(e,t){const n=He(Zn,null,e);return n.staticCount=t,n}function pt(e){return e==null||typeof e=="boolean"?He(je):ae(e)?He(ut,null,e.slice()):ca(e)?Nt(e):He(Sa,null,String(e))}function Nt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ht(e)}function Ns(e,t){let n=0;const{shapeFlag:a}=e;if(t==null)t=null;else if(ae(t))n=16;else if(typeof t=="object")if(a&65){const s=t.default;s&&(s._c&&(s._d=!1),Ns(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!Wr(t)?t._ctx=et:s===3&&et&&(et.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else oe(t)?(t={default:t,_ctx:et},n=32):(t=String(t),a&64?(n=16,t=[Aa(t)]):n=8);e.children=t,e.shapeFlag|=n}function vc(...e){const t={};for(let n=0;n<e.length;n++){const a=e[n];for(const s in a)if(s==="class")t.class!==a.class&&(t.class=Ut([t.class,a.class]));else if(s==="style")t.style=bs([t.style,a.style]);else if(fa(s)){const o=t[s],r=a[s];r&&o!==r&&!(ae(o)&&o.includes(r))&&(t[s]=o?[].concat(o,r):r)}else s!==""&&(t[s]=a[s])}return t}function lt(e,t,n,a=null){at(e,t,7,[n,a])}const Tc=jr();let Ec=0;function Sc(e,t,n){const a=e.type,s=(t?t.appContext:e.appContext)||Tc,o={uid:Ec++,vnode:e,type:a,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new rr(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:zr(a,s),emitsOptions:ai(a,s),emit:null,emitted:null,propsDefaults:_e,inheritAttrs:a.inheritAttrs,ctx:_e,data:_e,props:_e,attrs:_e,slots:_e,refs:_e,setupState:_e,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=dc.bind(null,o),e.ce&&e.ce(o),o}let Ne=null;const Ls=()=>Ne||et;let da,os;{const e=_a(),t=(n,a)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(a),o=>{s.length>1?s.forEach(r=>r(o)):s[0](o)}};da=t("__VUE_INSTANCE_SETTERS__",n=>Ne=n),os=t("__VUE_SSR_SETTERS__",n=>$n=n)}const jn=e=>{const t=Ne;return da(e),e.scope.on(),()=>{e.scope.off(),da(t)}},oo=()=>{Ne&&Ne.scope.off(),da(null)};function ii(e){return e.vnode.shapeFlag&4}let $n=!1;function Ac(e,t=!1,n=!1){t&&os(t);const{props:a,children:s}=e.vnode,o=ii(e);Vl(e,a,o,t),ec(e,s,n||t);const r=o?Oc(e,t):void 0;return t&&os(!1),r}function Oc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Hl);const{setup:a}=n;if(a){At();const s=e.setupContext=a.length>1?kc(e):null,o=jn(e),r=Yn(a,e,0,[e.props,s]),i=Xo(r);if(Ot(),o(),(i||e.sp)&&!wn(e)&&Fr(e),i){if(r.then(oo,oo),t)return r.then(l=>{ro(e,l)}).catch(l=>{ba(l,e,0)});e.asyncDep=r}else ro(e,r)}else li(e)}function ro(e,t,n){oe(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ye(t)&&(e.setupState=Or(t)),li(e)}function li(e,t,n){const a=e.type;e.render||(e.render=a.render||ft);{const s=jn(e);At();try{Kl(e)}finally{Ot(),s()}}}const Pc={get(e,t){return Re(e,"get",""),e[t]}};function kc(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Pc),slots:e.slots,emit:e.emit,expose:t}}function Ds(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Or(ks(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in xn)return xn[n](e)},has(t,n){return n in t||n in xn}})):e.proxy}function wc(e,t=!0){return oe(e)?e.displayName||e.name:e.name||t&&e.__name}function xc(e){return oe(e)&&"__vccOpts"in e}const Ge=(e,t)=>bl(e,t,$n);function Is(e,t,n){try{la(-1);const a=arguments.length;return a===2?ye(t)&&!ae(t)?ca(t)?He(e,null,[t]):He(e,t):He(e,null,t):(a>3?n=Array.prototype.slice.call(arguments,2):a===3&&ca(n)&&(n=[n]),He(e,t,n))}finally{la(1)}}const Cc="3.5.24";let rs;const io=typeof window<"u"&&window.trustedTypes;if(io)try{rs=io.createPolicy("vue",{createHTML:e=>e})}catch{}const ci=rs?e=>rs.createHTML(e):e=>e,Rc="http://www.w3.org/2000/svg",Nc="http://www.w3.org/1998/Math/MathML",yt=typeof document<"u"?document:null,lo=yt&&yt.createElement("template"),Lc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,a)=>{const s=t==="svg"?yt.createElementNS(Rc,e):t==="mathml"?yt.createElementNS(Nc,e):n?yt.createElement(e,{is:n}):yt.createElement(e);return e==="select"&&a&&a.multiple!=null&&s.setAttribute("multiple",a.multiple),s},createText:e=>yt.createTextNode(e),createComment:e=>yt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>yt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,a,s,o){const r=n?n.previousSibling:t.lastChild;if(s&&(s===o||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===o||!(s=s.nextSibling)););else{lo.innerHTML=ci(a==="svg"?`<svg>${e}</svg>`:a==="mathml"?`<math>${e}</math>`:e);const i=lo.content;if(a==="svg"||a==="mathml"){const l=i.firstChild;for(;l.firstChild;)i.appendChild(l.firstChild);i.removeChild(l)}t.insertBefore(i,n)}return[r?r.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},wt="transition",vn="animation",Un=Symbol("_vtc"),di={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Dc=we({},Nr,di),Ic=e=>(e.displayName="Transition",e.props=Dc,e),Mc=Ic((e,{slots:t})=>Is(kl,Bc(e),t)),Vt=(e,t=[])=>{ae(e)?e.forEach(n=>n(...t)):e&&e(...t)},co=e=>e?ae(e)?e.some(t=>t.length>1):e.length>1:!1;function Bc(e){const t={};for(const w in e)w in di||(t[w]=e[w]);if(e.css===!1)return t;const{name:n="v",type:a,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:r=`${n}-enter-active`,enterToClass:i=`${n}-enter-to`,appearFromClass:l=o,appearActiveClass:u=r,appearToClass:c=i,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=e,m=Fc(s),d=m&&m[0],g=m&&m[1],{onBeforeEnter:_,onEnter:b,onEnterCancelled:T,onLeave:S,onLeaveCancelled:P,onBeforeAppear:C=_,onAppear:I=b,onAppearCancelled:$=T}=t,A=(w,q,V,ne)=>{w._enterCancelled=ne,Qt(w,q?c:i),Qt(w,q?u:r),V&&V()},R=(w,q)=>{w._isLeaving=!1,Qt(w,p),Qt(w,h),Qt(w,f),q&&q()},U=w=>(q,V)=>{const ne=w?I:b,X=()=>A(q,w,V);Vt(ne,[q,X]),uo(()=>{Qt(q,w?l:o),_t(q,w?c:i),co(ne)||po(q,a,d,X)})};return we(t,{onBeforeEnter(w){Vt(_,[w]),_t(w,o),_t(w,r)},onBeforeAppear(w){Vt(C,[w]),_t(w,l),_t(w,u)},onEnter:U(!1),onAppear:U(!0),onLeave(w,q){w._isLeaving=!0;const V=()=>R(w,q);_t(w,p),w._enterCancelled?(_t(w,f),go(w)):(go(w),_t(w,f)),uo(()=>{w._isLeaving&&(Qt(w,p),_t(w,h),co(S)||po(w,a,g,V))}),Vt(S,[w,V])},onEnterCancelled(w){A(w,!1,void 0,!0),Vt(T,[w])},onAppearCancelled(w){A(w,!0,void 0,!0),Vt($,[w])},onLeaveCancelled(w){R(w),Vt(P,[w])}})}function Fc(e){if(e==null)return null;if(ye(e))return[Fa(e.enter),Fa(e.leave)];{const t=Fa(e);return[t,t]}}function Fa(e){return Fi(e)}function _t(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Un]||(e[Un]=new Set)).add(t)}function Qt(e,t){t.split(/\s+/).forEach(a=>a&&e.classList.remove(a));const n=e[Un];n&&(n.delete(t),n.size||(e[Un]=void 0))}function uo(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let $c=0;function po(e,t,n,a){const s=e._endId=++$c,o=()=>{s===e._endId&&a()};if(n!=null)return setTimeout(o,n);const{type:r,timeout:i,propCount:l}=Uc(e,t);if(!r)return a();const u=r+"end";let c=0;const p=()=>{e.removeEventListener(u,f),o()},f=h=>{h.target===e&&++c>=l&&p()};setTimeout(()=>{c<l&&p()},i+1),e.addEventListener(u,f)}function Uc(e,t){const n=window.getComputedStyle(e),a=m=>(n[m]||"").split(", "),s=a(`${wt}Delay`),o=a(`${wt}Duration`),r=fo(s,o),i=a(`${vn}Delay`),l=a(`${vn}Duration`),u=fo(i,l);let c=null,p=0,f=0;t===wt?r>0&&(c=wt,p=r,f=o.length):t===vn?u>0&&(c=vn,p=u,f=l.length):(p=Math.max(r,u),c=p>0?r>u?wt:vn:null,f=c?c===wt?o.length:l.length:0);const h=c===wt&&/\b(?:transform|all)(?:,|$)/.test(a(`${wt}Property`).toString());return{type:c,timeout:p,propCount:f,hasTransform:h}}function fo(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,a)=>ho(n)+ho(e[a])))}function ho(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function go(e){return(e?e.ownerDocument:document).body.offsetHeight}function Hc(e,t,n){const a=e[Un];a&&(t=(t?[t,...a]:[...a]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const mo=Symbol("_vod"),Kc=Symbol("_vsh"),Yc=Symbol(""),jc=/(?:^|;)\s*display\s*:/;function Gc(e,t,n){const a=e.style,s=Oe(n);let o=!1;if(n&&!s){if(t)if(Oe(t))for(const r of t.split(";")){const i=r.slice(0,r.indexOf(":")).trim();n[i]==null&&ta(a,i,"")}else for(const r in t)n[r]==null&&ta(a,r,"");for(const r in n)r==="display"&&(o=!0),ta(a,r,n[r])}else if(s){if(t!==n){const r=a[Yc];r&&(n+=";"+r),a.cssText=n,o=jc.test(n)}}else t&&e.removeAttribute("style");mo in e&&(e[mo]=o?a.display:"",e[Kc]&&(a.display="none"))}const _o=/\s*!important$/;function ta(e,t,n){if(ae(n))n.forEach(a=>ta(e,t,a));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const a=qc(e,t);_o.test(n)?e.setProperty(jt(a),n.replace(_o,""),"important"):e[a]=n}}const bo=["Webkit","Moz","ms"],$a={};function qc(e,t){const n=$a[t];if(n)return n;let a=Qe(t);if(a!=="filter"&&a in e)return $a[t]=a;a=ma(a);for(let s=0;s<bo.length;s++){const o=bo[s]+a;if(o in e)return $a[t]=o}return t}const yo="http://www.w3.org/1999/xlink";function vo(e,t,n,a,s,o=ji(t)){a&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(yo,t.slice(6,t.length)):e.setAttributeNS(yo,t,n):n==null||o&&!nr(n)?e.removeAttribute(t):e.setAttribute(t,o?"":Yt(n)?String(n):n)}function To(e,t,n,a,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?ci(n):n);return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){const i=o==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(i!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let r=!1;if(n===""||n==null){const i=typeof e[t];i==="boolean"?n=nr(n):n==null&&i==="string"?(n="",r=!0):i==="number"&&(n=0,r=!0)}try{e[t]=n}catch{}r&&e.removeAttribute(s||t)}function Wc(e,t,n,a){e.addEventListener(t,n,a)}function Jc(e,t,n,a){e.removeEventListener(t,n,a)}const Eo=Symbol("_vei");function zc(e,t,n,a,s=null){const o=e[Eo]||(e[Eo]={}),r=o[t];if(a&&r)r.value=a;else{const[i,l]=Vc(t);if(a){const u=o[t]=Zc(a,s);Wc(e,i,u,l)}else r&&(Jc(e,i,r,l),o[t]=void 0)}}const So=/(?:Once|Passive|Capture)$/;function Vc(e){let t;if(So.test(e)){t={};let a;for(;a=e.match(So);)e=e.slice(0,e.length-a[0].length),t[a[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):jt(e.slice(2)),t]}let Ua=0;const Qc=Promise.resolve(),Xc=()=>Ua||(Qc.then(()=>Ua=0),Ua=Date.now());function Zc(e,t){const n=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=n.attached)return;at(ed(a,n.value),t,5,[a])};return n.value=e,n.attached=Xc(),n}function ed(e,t){if(ae(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(a=>s=>!s._stopped&&a&&a(s))}else return t}const Ao=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,td=(e,t,n,a,s,o)=>{const r=s==="svg";t==="class"?Hc(e,a,r):t==="style"?Gc(e,n,a):fa(t)?gs(t)||zc(e,t,n,a,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):nd(e,t,a,r))?(To(e,t,a),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&vo(e,t,a,r,o,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Oe(a))?To(e,Qe(t),a,o,t):(t==="true-value"?e._trueValue=a:t==="false-value"&&(e._falseValue=a),vo(e,t,a,r))};function nd(e,t,n,a){if(a)return!!(t==="innerHTML"||t==="textContent"||t in e&&Ao(t)&&oe(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ao(t)&&Oe(n)?!1:t in e}const ad=["ctrl","shift","alt","meta"],sd={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>ad.some(n=>e[`${n}Key`]&&!t.includes(n))},Oa=(e,t)=>{const n=e._withMods||(e._withMods={}),a=t.join(".");return n[a]||(n[a]=((s,...o)=>{for(let r=0;r<t.length;r++){const i=sd[t[r]];if(i&&i(s,t))return}return e(s,...o)}))},od={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Tt=(e,t)=>{const n=e._withKeys||(e._withKeys={}),a=t.join(".");return n[a]||(n[a]=(s=>{if(!("key"in s))return;const o=jt(s.key);if(t.some(r=>r===o||od[r]===o))return e(s)}))},rd=we({patchProp:td},Lc);let Oo;function id(){return Oo||(Oo=nc(rd))}const ld=((...e)=>{const t=id().createApp(...e),{mount:n}=t;return t.mount=a=>{const s=dd(a);if(!s)return;const o=t._component;!oe(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const r=n(s,!1,cd(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),r},t});function cd(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function dd(e){return Oe(e)?document.querySelector(e):e}let ui;const Pa=e=>ui=e,pi=Symbol();function is(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Nn;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Nn||(Nn={}));function ud(){const e=ir(!0),t=e.run(()=>ze({}));let n=[],a=[];const s=ks({install(o){Pa(s),s._a=o,o.provide(pi,s),o.config.globalProperties.$pinia=s,a.forEach(r=>n.push(r)),a=[]},use(o){return this._a?n.push(o):a.push(o),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}const fi=()=>{};function Po(e,t,n,a=fi){e.add(t);const s=()=>{e.delete(t)&&a()};return!n&&lr()&&Gi(s),s}function ln(e,...t){e.forEach(n=>{n(...t)})}const pd=e=>e(),ko=Symbol(),Ha=Symbol();function ls(e,t){e instanceof Map&&t instanceof Map?t.forEach((n,a)=>e.set(a,n)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const a=t[n],s=e[n];is(s)&&is(a)&&e.hasOwnProperty(n)&&!Ae(a)&&!an(a)?e[n]=ls(s,a):e[n]=a}return e}const fd=Symbol();function hd(e){return!is(e)||!Object.prototype.hasOwnProperty.call(e,fd)}const{assign:Ct}=Object;function gd(e){return!!(Ae(e)&&e.effect)}function md(e,t,n,a){const{state:s,actions:o,getters:r}=t,i=n.state.value[e];let l;function u(){i||(n.state.value[e]=s?s():{});const c=hl(n.state.value[e]);return Ct(c,o,Object.keys(r||{}).reduce((p,f)=>(p[f]=ks(Ge(()=>{Pa(n);const h=n._s.get(e);return r[f].call(h,h)})),p),{}))}return l=hi(e,u,t,n,a,!0),l}function hi(e,t,n={},a,s,o){let r;const i=Ct({actions:{}},n),l={deep:!0};let u,c,p=new Set,f=new Set,h;const m=a.state.value[e];!o&&!m&&(a.state.value[e]={}),ze({});let d;function g($){let A;u=c=!1,typeof $=="function"?($(a.state.value[e]),A={type:Nn.patchFunction,storeId:e,events:h}):(ls(a.state.value[e],$),A={type:Nn.patchObject,payload:$,storeId:e,events:h});const R=d=Symbol();ws().then(()=>{d===R&&(u=!0)}),c=!0,ln(p,A,a.state.value[e])}const _=o?function(){const{state:A}=n,R=A?A():{};this.$patch(U=>{Ct(U,R)})}:fi;function b(){r.stop(),p.clear(),f.clear(),a._s.delete(e)}const T=($,A="")=>{if(ko in $)return $[Ha]=A,$;const R=function(){Pa(a);const U=Array.from(arguments),w=new Set,q=new Set;function V(M){w.add(M)}function ne(M){q.add(M)}ln(f,{args:U,name:R[Ha],store:P,after:V,onError:ne});let X;try{X=$.apply(this&&this.$id===e?this:P,U)}catch(M){throw ln(q,M),M}return X instanceof Promise?X.then(M=>(ln(w,M),M)).catch(M=>(ln(q,M),Promise.reject(M))):(ln(w,X),X)};return R[ko]=!0,R[Ha]=A,R},S={_p:a,$id:e,$onAction:Po.bind(null,f),$patch:g,$reset:_,$subscribe($,A={}){const R=Po(p,$,A.detached,()=>U()),U=r.run(()=>Cn(()=>a.state.value[e],w=>{(A.flush==="sync"?c:u)&&$({storeId:e,type:Nn.direct,events:h},w)},Ct({},l,A)));return R},$dispose:b},P=St(S);a._s.set(e,P);const I=(a._a&&a._a.runWithContext||pd)(()=>a._e.run(()=>(r=ir()).run(()=>t({action:T}))));for(const $ in I){const A=I[$];if(Ae(A)&&!gd(A)||an(A))o||(m&&hd(A)&&(Ae(A)?A.value=m[$]:ls(A,m[$])),a.state.value[e][$]=A);else if(typeof A=="function"){const R=T(A,$);I[$]=R,i.actions[$]=A}}return Ct(P,I),Ct(ce(P),I),Object.defineProperty(P,"$state",{get:()=>a.state.value[e],set:$=>{g(A=>{Ct(A,$)})}}),a._p.forEach($=>{Ct(P,r.run(()=>$({store:P,app:a._a,pinia:a,options:i})))}),m&&o&&n.hydrate&&n.hydrate(P.$state,m),u=!0,c=!0,P}function _d(e,t,n){let a;const s=typeof t=="function";a=s?n:t;function o(r,i){const l=zl();return r=r||(l?Ve(pi,null):null),r&&Pa(r),r=ui,r._s.has(e)||(s?hi(e,t,a,r):md(e,a,r)),r._s.get(e)}return o.$id=e,o}const un=typeof document<"u";function gi(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function bd(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&gi(e.default)}const pe=Object.assign;function Ka(e,t){const n={};for(const a in t){const s=t[a];n[a]=st(s)?s.map(e):e(s)}return n}const Ln=()=>{},st=Array.isArray;function wo(e,t){const n={};for(const a in e)n[a]=a in t?t[a]:e[a];return n}const mi=/#/g,yd=/&/g,vd=/\//g,Td=/=/g,Ed=/\?/g,_i=/\+/g,Sd=/%5B/g,Ad=/%5D/g,bi=/%5E/g,Od=/%60/g,yi=/%7B/g,Pd=/%7C/g,vi=/%7D/g,kd=/%20/g;function Ms(e){return e==null?"":encodeURI(""+e).replace(Pd,"|").replace(Sd,"[").replace(Ad,"]")}function wd(e){return Ms(e).replace(yi,"{").replace(vi,"}").replace(bi,"^")}function cs(e){return Ms(e).replace(_i,"%2B").replace(kd,"+").replace(mi,"%23").replace(yd,"%26").replace(Od,"`").replace(yi,"{").replace(vi,"}").replace(bi,"^")}function xd(e){return cs(e).replace(Td,"%3D")}function Cd(e){return Ms(e).replace(mi,"%23").replace(Ed,"%3F")}function Rd(e){return Cd(e).replace(vd,"%2F")}function Hn(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Nd=/\/$/,Ld=e=>e.replace(Nd,"");function Ya(e,t,n="/"){let a,s={},o="",r="";const i=t.indexOf("#");let l=t.indexOf("?");return l=i>=0&&l>i?-1:l,l>=0&&(a=t.slice(0,l),o=t.slice(l,i>0?i:t.length),s=e(o.slice(1))),i>=0&&(a=a||t.slice(0,i),r=t.slice(i,t.length)),a=Bd(a??t,n),{fullPath:a+o+r,path:a,query:s,hash:Hn(r)}}function Dd(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function xo(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Id(e,t,n){const a=t.matched.length-1,s=n.matched.length-1;return a>-1&&a===s&&gn(t.matched[a],n.matched[s])&&Ti(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function gn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ti(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Md(e[n],t[n]))return!1;return!0}function Md(e,t){return st(e)?Co(e,t):st(t)?Co(t,e):e===t}function Co(e,t){return st(t)?e.length===t.length&&e.every((n,a)=>n===t[a]):e.length===1&&e[0]===t}function Bd(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),a=e.split("/"),s=a[a.length-1];(s===".."||s===".")&&a.push("");let o=n.length-1,r,i;for(r=0;r<a.length;r++)if(i=a[r],i!==".")if(i==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+a.slice(r).join("/")}const xt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let ds=(function(e){return e.pop="pop",e.push="push",e})({}),ja=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function Fd(e){if(!e)if(un){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Ld(e)}const $d=/^[^#]+#/;function Ud(e,t){return e.replace($d,"#")+t}function Hd(e,t){const n=document.documentElement.getBoundingClientRect(),a=e.getBoundingClientRect();return{behavior:t.behavior,left:a.left-n.left-(t.left||0),top:a.top-n.top-(t.top||0)}}const ka=()=>({left:window.scrollX,top:window.scrollY});function Kd(e){let t;if("el"in e){const n=e.el,a=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?a?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=Hd(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Ro(e,t){return(history.state?history.state.position-t:-1)+e}const us=new Map;function Yd(e,t){us.set(e,t)}function jd(e){const t=us.get(e);return us.delete(e),t}function Gd(e){return typeof e=="string"||e&&typeof e=="object"}function Ei(e){return typeof e=="string"||typeof e=="symbol"}let Ee=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const Si=Symbol("");Ee.MATCHER_NOT_FOUND+"",Ee.NAVIGATION_GUARD_REDIRECT+"",Ee.NAVIGATION_ABORTED+"",Ee.NAVIGATION_CANCELLED+"",Ee.NAVIGATION_DUPLICATED+"";function mn(e,t){return pe(new Error,{type:e,[Si]:!0},t)}function bt(e,t){return e instanceof Error&&Si in e&&(t==null||!!(e.type&t))}const qd=["params","query","hash"];function Wd(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of qd)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function Jd(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<n.length;++a){const s=n[a].replace(_i," "),o=s.indexOf("="),r=Hn(o<0?s:s.slice(0,o)),i=o<0?null:Hn(s.slice(o+1));if(r in t){let l=t[r];st(l)||(l=t[r]=[l]),l.push(i)}else t[r]=i}return t}function No(e){let t="";for(let n in e){const a=e[n];if(n=xd(n),a==null){a!==void 0&&(t+=(t.length?"&":"")+n);continue}(st(a)?a.map(s=>s&&cs(s)):[a&&cs(a)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function zd(e){const t={};for(const n in e){const a=e[n];a!==void 0&&(t[n]=st(a)?a.map(s=>s==null?null:""+s):a==null?a:""+a)}return t}const Vd=Symbol(""),Lo=Symbol(""),wa=Symbol(""),Bs=Symbol(""),ps=Symbol("");function Tn(){let e=[];function t(a){return e.push(a),()=>{const s=e.indexOf(a);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Lt(e,t,n,a,s,o=r=>r()){const r=a&&(a.enterCallbacks[s]=a.enterCallbacks[s]||[]);return()=>new Promise((i,l)=>{const u=f=>{f===!1?l(mn(Ee.NAVIGATION_ABORTED,{from:n,to:t})):f instanceof Error?l(f):Gd(f)?l(mn(Ee.NAVIGATION_GUARD_REDIRECT,{from:t,to:f})):(r&&a.enterCallbacks[s]===r&&typeof f=="function"&&r.push(f),i())},c=o(()=>e.call(a&&a.instances[s],t,n,u));let p=Promise.resolve(c);e.length<3&&(p=p.then(u)),p.catch(f=>l(f))})}function Ga(e,t,n,a,s=o=>o()){const o=[];for(const r of e)for(const i in r.components){let l=r.components[i];if(!(t!=="beforeRouteEnter"&&!r.instances[i]))if(gi(l)){const u=(l.__vccOpts||l)[t];u&&o.push(Lt(u,n,a,r,i,s))}else{let u=l();o.push(()=>u.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${i}" at "${r.path}"`);const p=bd(c)?c.default:c;r.mods[i]=c,r.components[i]=p;const f=(p.__vccOpts||p)[t];return f&&Lt(f,n,a,r,i,s)()}))}}return o}function Qd(e,t){const n=[],a=[],s=[],o=Math.max(t.matched.length,e.matched.length);for(let r=0;r<o;r++){const i=t.matched[r];i&&(e.matched.find(u=>gn(u,i))?a.push(i):n.push(i));const l=e.matched[r];l&&(t.matched.find(u=>gn(u,l))||s.push(l))}return[n,a,s]}let Xd=()=>location.protocol+"//"+location.host;function Ai(e,t){const{pathname:n,search:a,hash:s}=t,o=e.indexOf("#");if(o>-1){let r=s.includes(e.slice(o))?e.slice(o).length:1,i=s.slice(r);return i[0]!=="/"&&(i="/"+i),xo(i,"")}return xo(n,e)+a+s}function Zd(e,t,n,a){let s=[],o=[],r=null;const i=({state:f})=>{const h=Ai(e,location),m=n.value,d=t.value;let g=0;if(f){if(n.value=h,t.value=f,r&&r===m){r=null;return}g=d?f.position-d.position:0}else a(h);s.forEach(_=>{_(n.value,m,{delta:g,type:ds.pop,direction:g?g>0?ja.forward:ja.back:ja.unknown})})};function l(){r=n.value}function u(f){s.push(f);const h=()=>{const m=s.indexOf(f);m>-1&&s.splice(m,1)};return o.push(h),h}function c(){if(document.visibilityState==="hidden"){const{history:f}=window;if(!f.state)return;f.replaceState(pe({},f.state,{scroll:ka()}),"")}}function p(){for(const f of o)f();o=[],window.removeEventListener("popstate",i),window.removeEventListener("pagehide",c),document.removeEventListener("visibilitychange",c)}return window.addEventListener("popstate",i),window.addEventListener("pagehide",c),document.addEventListener("visibilitychange",c),{pauseListeners:l,listen:u,destroy:p}}function Do(e,t,n,a=!1,s=!1){return{back:e,current:t,forward:n,replaced:a,position:window.history.length,scroll:s?ka():null}}function eu(e){const{history:t,location:n}=window,a={value:Ai(e,n)},s={value:t.state};s.value||o(a.value,{back:null,current:a.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(l,u,c){const p=e.indexOf("#"),f=p>-1?(n.host&&document.querySelector("base")?e:e.slice(p))+l:Xd()+e+l;try{t[c?"replaceState":"pushState"](u,"",f),s.value=u}catch(h){console.error(h),n[c?"replace":"assign"](f)}}function r(l,u){o(l,pe({},t.state,Do(s.value.back,l,s.value.forward,!0),u,{position:s.value.position}),!0),a.value=l}function i(l,u){const c=pe({},s.value,t.state,{forward:l,scroll:ka()});o(c.current,c,!0),o(l,pe({},Do(a.value,l,null),{position:c.position+1},u),!1),a.value=l}return{location:a,state:s,push:i,replace:r}}function tu(e){e=Fd(e);const t=eu(e),n=Zd(e,t.state,t.location,t.replace);function a(o,r=!0){r||n.pauseListeners(),history.go(o)}const s=pe({location:"",base:e,go:a,createHref:Ud.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function nu(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),tu(e)}let tn=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var Pe=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(Pe||{});const au={type:tn.Static,value:""},su=/[a-zA-Z0-9_]/;function ou(e){if(!e)return[[]];if(e==="/")return[[au]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(h){throw new Error(`ERR (${n})/"${u}": ${h}`)}let n=Pe.Static,a=n;const s=[];let o;function r(){o&&s.push(o),o=[]}let i=0,l,u="",c="";function p(){u&&(n===Pe.Static?o.push({type:tn.Static,value:u}):n===Pe.Param||n===Pe.ParamRegExp||n===Pe.ParamRegExpEnd?(o.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),o.push({type:tn.Param,value:u,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),u="")}function f(){u+=l}for(;i<e.length;){if(l=e[i++],l==="\\"&&n!==Pe.ParamRegExp){a=n,n=Pe.EscapeNext;continue}switch(n){case Pe.Static:l==="/"?(u&&p(),r()):l===":"?(p(),n=Pe.Param):f();break;case Pe.EscapeNext:f(),n=a;break;case Pe.Param:l==="("?n=Pe.ParamRegExp:su.test(l)?f():(p(),n=Pe.Static,l!=="*"&&l!=="?"&&l!=="+"&&i--);break;case Pe.ParamRegExp:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=Pe.ParamRegExpEnd:c+=l;break;case Pe.ParamRegExpEnd:p(),n=Pe.Static,l!=="*"&&l!=="?"&&l!=="+"&&i--,c="";break;default:t("Unknown state");break}}return n===Pe.ParamRegExp&&t(`Unfinished custom RegExp for param "${u}"`),p(),r(),s}const Io="[^/]+?",ru={sensitive:!1,strict:!1,start:!0,end:!0};var Ie=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(Ie||{});const iu=/[.+*?^${}()[\]/\\]/g;function lu(e,t){const n=pe({},ru,t),a=[];let s=n.start?"^":"";const o=[];for(const u of e){const c=u.length?[]:[Ie.Root];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const f=u[p];let h=Ie.Segment+(n.sensitive?Ie.BonusCaseSensitive:0);if(f.type===tn.Static)p||(s+="/"),s+=f.value.replace(iu,"\\$&"),h+=Ie.Static;else if(f.type===tn.Param){const{value:m,repeatable:d,optional:g,regexp:_}=f;o.push({name:m,repeatable:d,optional:g});const b=_||Io;if(b!==Io){h+=Ie.BonusCustomRegExp;try{`${b}`}catch(S){throw new Error(`Invalid custom RegExp for param "${m}" (${b}): `+S.message)}}let T=d?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;p||(T=g&&u.length<2?`(?:/${T})`:"/"+T),g&&(T+="?"),s+=T,h+=Ie.Dynamic,g&&(h+=Ie.BonusOptional),d&&(h+=Ie.BonusRepeatable),b===".*"&&(h+=Ie.BonusWildcard)}c.push(h)}a.push(c)}if(n.strict&&n.end){const u=a.length-1;a[u][a[u].length-1]+=Ie.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const r=new RegExp(s,n.sensitive?"":"i");function i(u){const c=u.match(r),p={};if(!c)return null;for(let f=1;f<c.length;f++){const h=c[f]||"",m=o[f-1];p[m.name]=h&&m.repeatable?h.split("/"):h}return p}function l(u){let c="",p=!1;for(const f of e){(!p||!c.endsWith("/"))&&(c+="/"),p=!1;for(const h of f)if(h.type===tn.Static)c+=h.value;else if(h.type===tn.Param){const{value:m,repeatable:d,optional:g}=h,_=m in u?u[m]:"";if(st(_)&&!d)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const b=st(_)?_.join("/"):_;if(!b)if(g)f.length<2&&(c.endsWith("/")?c=c.slice(0,-1):p=!0);else throw new Error(`Missing required param "${m}"`);c+=b}}return c||"/"}return{re:r,score:a,keys:o,parse:i,stringify:l}}function cu(e,t){let n=0;for(;n<e.length&&n<t.length;){const a=t[n]-e[n];if(a)return a;n++}return e.length<t.length?e.length===1&&e[0]===Ie.Static+Ie.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Ie.Static+Ie.Segment?1:-1:0}function Oi(e,t){let n=0;const a=e.score,s=t.score;for(;n<a.length&&n<s.length;){const o=cu(a[n],s[n]);if(o)return o;n++}if(Math.abs(s.length-a.length)===1){if(Mo(a))return 1;if(Mo(s))return-1}return s.length-a.length}function Mo(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const du={strict:!1,end:!0,sensitive:!1};function uu(e,t,n){const a=lu(ou(e.path),n),s=pe(a,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function pu(e,t){const n=[],a=new Map;t=wo(du,t);function s(p){return a.get(p)}function o(p,f,h){const m=!h,d=Fo(p);d.aliasOf=h&&h.record;const g=wo(t,p),_=[d];if("alias"in p){const S=typeof p.alias=="string"?[p.alias]:p.alias;for(const P of S)_.push(Fo(pe({},d,{components:h?h.record.components:d.components,path:P,aliasOf:h?h.record:d})))}let b,T;for(const S of _){const{path:P}=S;if(f&&P[0]!=="/"){const C=f.record.path,I=C[C.length-1]==="/"?"":"/";S.path=f.record.path+(P&&I+P)}if(b=uu(S,f,g),h?h.alias.push(b):(T=T||b,T!==b&&T.alias.push(b),m&&p.name&&!$o(b)&&r(p.name)),Pi(b)&&l(b),d.children){const C=d.children;for(let I=0;I<C.length;I++)o(C[I],b,h&&h.children[I])}h=h||b}return T?()=>{r(T)}:Ln}function r(p){if(Ei(p)){const f=a.get(p);f&&(a.delete(p),n.splice(n.indexOf(f),1),f.children.forEach(r),f.alias.forEach(r))}else{const f=n.indexOf(p);f>-1&&(n.splice(f,1),p.record.name&&a.delete(p.record.name),p.children.forEach(r),p.alias.forEach(r))}}function i(){return n}function l(p){const f=gu(p,n);n.splice(f,0,p),p.record.name&&!$o(p)&&a.set(p.record.name,p)}function u(p,f){let h,m={},d,g;if("name"in p&&p.name){if(h=a.get(p.name),!h)throw mn(Ee.MATCHER_NOT_FOUND,{location:p});g=h.record.name,m=pe(Bo(f.params,h.keys.filter(T=>!T.optional).concat(h.parent?h.parent.keys.filter(T=>T.optional):[]).map(T=>T.name)),p.params&&Bo(p.params,h.keys.map(T=>T.name))),d=h.stringify(m)}else if(p.path!=null)d=p.path,h=n.find(T=>T.re.test(d)),h&&(m=h.parse(d),g=h.record.name);else{if(h=f.name?a.get(f.name):n.find(T=>T.re.test(f.path)),!h)throw mn(Ee.MATCHER_NOT_FOUND,{location:p,currentLocation:f});g=h.record.name,m=pe({},f.params,p.params),d=h.stringify(m)}const _=[];let b=h;for(;b;)_.unshift(b.record),b=b.parent;return{name:g,path:d,params:m,matched:_,meta:hu(_)}}e.forEach(p=>o(p));function c(){n.length=0,a.clear()}return{addRoute:o,resolve:u,removeRoute:r,clearRoutes:c,getRoutes:i,getRecordMatcher:s}}function Bo(e,t){const n={};for(const a of t)a in e&&(n[a]=e[a]);return n}function Fo(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:fu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function fu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const a in e.components)t[a]=typeof n=="object"?n[a]:n;return t}function $o(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function hu(e){return e.reduce((t,n)=>pe(t,n.meta),{})}function gu(e,t){let n=0,a=t.length;for(;n!==a;){const o=n+a>>1;Oi(e,t[o])<0?a=o:n=o+1}const s=mu(e);return s&&(a=t.lastIndexOf(s,a-1)),a}function mu(e){let t=e;for(;t=t.parent;)if(Pi(t)&&Oi(e,t)===0)return t}function Pi({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Uo(e){const t=Ve(wa),n=Ve(Bs),a=Ge(()=>{const l=Ft(e.to);return t.resolve(l)}),s=Ge(()=>{const{matched:l}=a.value,{length:u}=l,c=l[u-1],p=n.matched;if(!c||!p.length)return-1;const f=p.findIndex(gn.bind(null,c));if(f>-1)return f;const h=Ho(l[u-2]);return u>1&&Ho(c)===h&&p[p.length-1].path!==h?p.findIndex(gn.bind(null,l[u-2])):f}),o=Ge(()=>s.value>-1&&Tu(n.params,a.value.params)),r=Ge(()=>s.value>-1&&s.value===n.matched.length-1&&Ti(n.params,a.value.params));function i(l={}){if(vu(l)){const u=t[Ft(e.replace)?"replace":"push"](Ft(e.to)).catch(Ln);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:a,href:Ge(()=>a.value.href),isActive:o,isExactActive:r,navigate:i}}function _u(e){return e.length===1?e[0]:e}const bu=Br({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Uo,setup(e,{slots:t}){const n=St(Uo(e)),{options:a}=Ve(wa),s=Ge(()=>({[Ko(e.activeClass,a.linkActiveClass,"router-link-active")]:n.isActive,[Ko(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=t.default&&_u(t.default(n));return e.custom?o:Is("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},o)}}}),yu=bu;function vu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Tu(e,t){for(const n in t){const a=t[n],s=e[n];if(typeof a=="string"){if(a!==s)return!1}else if(!st(s)||s.length!==a.length||a.some((o,r)=>o!==s[r]))return!1}return!0}function Ho(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ko=(e,t,n)=>e??t??n,Eu=Br({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const a=Ve(ps),s=Ge(()=>e.route||a.value),o=Ve(Lo,0),r=Ge(()=>{let u=Ft(o);const{matched:c}=s.value;let p;for(;(p=c[u])&&!p.components;)u++;return u}),i=Ge(()=>s.value.matched[r.value]);Xn(Lo,Ge(()=>r.value+1)),Xn(Vd,i),Xn(ps,s);const l=ze();return Cn(()=>[l.value,i.value,e.name],([u,c,p],[f,h,m])=>{c&&(c.instances[p]=u,h&&h!==c&&u&&u===f&&(c.leaveGuards.size||(c.leaveGuards=h.leaveGuards),c.updateGuards.size||(c.updateGuards=h.updateGuards))),u&&c&&(!h||!gn(c,h)||!f)&&(c.enterCallbacks[p]||[]).forEach(d=>d(u))},{flush:"post"}),()=>{const u=s.value,c=e.name,p=i.value,f=p&&p.components[c];if(!f)return Yo(n.default,{Component:f,route:u});const h=p.props[c],m=h?h===!0?u.params:typeof h=="function"?h(u):h:null,g=Is(f,pe({},m,t,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(p.instances[c]=null)},ref:l}));return Yo(n.default,{Component:g,route:u})||g}}});function Yo(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const ki=Eu;function Su(e){const t=pu(e.routes,e),n=e.parseQuery||Jd,a=e.stringifyQuery||No,s=e.history,o=Tn(),r=Tn(),i=Tn(),l=ul(xt);let u=xt;un&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=Ka.bind(null,x=>""+x),p=Ka.bind(null,Rd),f=Ka.bind(null,Hn);function h(x,K){let Y,Q;return Ei(x)?(Y=t.getRecordMatcher(x),Q=K):Q=x,t.addRoute(Q,Y)}function m(x){const K=t.getRecordMatcher(x);K&&t.removeRoute(K)}function d(){return t.getRoutes().map(x=>x.record)}function g(x){return!!t.getRecordMatcher(x)}function _(x,K){if(K=pe({},K||l.value),typeof x=="string"){const E=Ya(n,x,K.path),L=t.resolve({path:E.path},K),D=s.createHref(E.fullPath);return pe(E,L,{params:f(L.params),hash:Hn(E.hash),redirectedFrom:void 0,href:D})}let Y;if(x.path!=null)Y=pe({},x,{path:Ya(n,x.path,K.path).path});else{const E=pe({},x.params);for(const L in E)E[L]==null&&delete E[L];Y=pe({},x,{params:p(E)}),K.params=p(K.params)}const Q=t.resolve(Y,K),ie=x.hash||"";Q.params=c(f(Q.params));const y=Dd(a,pe({},x,{hash:wd(ie),path:Q.path})),v=s.createHref(y);return pe({fullPath:y,hash:ie,query:a===No?zd(x.query):x.query||{}},Q,{redirectedFrom:void 0,href:v})}function b(x){return typeof x=="string"?Ya(n,x,l.value.path):pe({},x)}function T(x,K){if(u!==x)return mn(Ee.NAVIGATION_CANCELLED,{from:K,to:x})}function S(x){return I(x)}function P(x){return S(pe(b(x),{replace:!0}))}function C(x,K){const Y=x.matched[x.matched.length-1];if(Y&&Y.redirect){const{redirect:Q}=Y;let ie=typeof Q=="function"?Q(x,K):Q;return typeof ie=="string"&&(ie=ie.includes("?")||ie.includes("#")?ie=b(ie):{path:ie},ie.params={}),pe({query:x.query,hash:x.hash,params:ie.path!=null?{}:x.params},ie)}}function I(x,K){const Y=u=_(x),Q=l.value,ie=x.state,y=x.force,v=x.replace===!0,E=C(Y,Q);if(E)return I(pe(b(E),{state:typeof E=="object"?pe({},ie,E.state):ie,force:y,replace:v}),K||Y);const L=Y;L.redirectedFrom=K;let D;return!y&&Id(a,Q,Y)&&(D=mn(Ee.NAVIGATION_DUPLICATED,{to:L,from:Q}),Te(Q,Q,!0,!1)),(D?Promise.resolve(D):R(L,Q)).catch(N=>bt(N)?bt(N,Ee.NAVIGATION_GUARD_REDIRECT)?N:ee(N):z(N,L,Q)).then(N=>{if(N){if(bt(N,Ee.NAVIGATION_GUARD_REDIRECT))return I(pe({replace:v},b(N.to),{state:typeof N.to=="object"?pe({},ie,N.to.state):ie,force:y}),K||L)}else N=w(L,Q,!0,v,ie);return U(L,Q,N),N})}function $(x,K){const Y=T(x,K);return Y?Promise.reject(Y):Promise.resolve()}function A(x){const K=Se.values().next().value;return K&&typeof K.runWithContext=="function"?K.runWithContext(x):x()}function R(x,K){let Y;const[Q,ie,y]=Qd(x,K);Y=Ga(Q.reverse(),"beforeRouteLeave",x,K);for(const E of Q)E.leaveGuards.forEach(L=>{Y.push(Lt(L,x,K))});const v=$.bind(null,x,K);return Y.push(v),ue(Y).then(()=>{Y=[];for(const E of o.list())Y.push(Lt(E,x,K));return Y.push(v),ue(Y)}).then(()=>{Y=Ga(ie,"beforeRouteUpdate",x,K);for(const E of ie)E.updateGuards.forEach(L=>{Y.push(Lt(L,x,K))});return Y.push(v),ue(Y)}).then(()=>{Y=[];for(const E of y)if(E.beforeEnter)if(st(E.beforeEnter))for(const L of E.beforeEnter)Y.push(Lt(L,x,K));else Y.push(Lt(E.beforeEnter,x,K));return Y.push(v),ue(Y)}).then(()=>(x.matched.forEach(E=>E.enterCallbacks={}),Y=Ga(y,"beforeRouteEnter",x,K,A),Y.push(v),ue(Y))).then(()=>{Y=[];for(const E of r.list())Y.push(Lt(E,x,K));return Y.push(v),ue(Y)}).catch(E=>bt(E,Ee.NAVIGATION_CANCELLED)?E:Promise.reject(E))}function U(x,K,Y){i.list().forEach(Q=>A(()=>Q(x,K,Y)))}function w(x,K,Y,Q,ie){const y=T(x,K);if(y)return y;const v=K===xt,E=un?history.state:{};Y&&(Q||v?s.replace(x.fullPath,pe({scroll:v&&E&&E.scroll},ie)):s.push(x.fullPath,ie)),l.value=x,Te(x,K,Y,v),ee()}let q;function V(){q||(q=s.listen((x,K,Y)=>{if(!ke.listening)return;const Q=_(x),ie=C(Q,ke.currentRoute.value);if(ie){I(pe(ie,{replace:!0,force:!0}),Q).catch(Ln);return}u=Q;const y=l.value;un&&Yd(Ro(y.fullPath,Y.delta),ka()),R(Q,y).catch(v=>bt(v,Ee.NAVIGATION_ABORTED|Ee.NAVIGATION_CANCELLED)?v:bt(v,Ee.NAVIGATION_GUARD_REDIRECT)?(I(pe(b(v.to),{force:!0}),Q).then(E=>{bt(E,Ee.NAVIGATION_ABORTED|Ee.NAVIGATION_DUPLICATED)&&!Y.delta&&Y.type===ds.pop&&s.go(-1,!1)}).catch(Ln),Promise.reject()):(Y.delta&&s.go(-Y.delta,!1),z(v,Q,y))).then(v=>{v=v||w(Q,y,!1),v&&(Y.delta&&!bt(v,Ee.NAVIGATION_CANCELLED)?s.go(-Y.delta,!1):Y.type===ds.pop&&bt(v,Ee.NAVIGATION_ABORTED|Ee.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),U(Q,y,v)}).catch(Ln)}))}let ne=Tn(),X=Tn(),M;function z(x,K,Y){ee(x);const Q=X.list();return Q.length?Q.forEach(ie=>ie(x,K,Y)):console.error(x),Promise.reject(x)}function re(){return M&&l.value!==xt?Promise.resolve():new Promise((x,K)=>{ne.add([x,K])})}function ee(x){return M||(M=!x,V(),ne.list().forEach(([K,Y])=>x?Y(x):K()),ne.reset()),x}function Te(x,K,Y,Q){const{scrollBehavior:ie}=e;if(!un||!ie)return Promise.resolve();const y=!Y&&jd(Ro(x.fullPath,0))||(Q||!Y)&&history.state&&history.state.scroll||null;return ws().then(()=>ie(x,K,y)).then(v=>v&&Kd(v)).catch(v=>z(v,x,K))}const de=x=>s.go(x);let Le;const Se=new Set,ke={currentRoute:l,listening:!0,addRoute:h,removeRoute:m,clearRoutes:t.clearRoutes,hasRoute:g,getRoutes:d,resolve:_,options:e,push:S,replace:P,go:de,back:()=>de(-1),forward:()=>de(1),beforeEach:o.add,beforeResolve:r.add,afterEach:i.add,onError:X.add,isReady:re,install(x){x.component("RouterLink",yu),x.component("RouterView",ki),x.config.globalProperties.$router=ke,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>Ft(l)}),un&&!Le&&l.value===xt&&(Le=!0,S(s.location).catch(Q=>{}));const K={};for(const Q in xt)Object.defineProperty(K,Q,{get:()=>l.value[Q],enumerable:!0});x.provide(wa,ke),x.provide(Bs,Sr(K)),x.provide(ps,l);const Y=x.unmount;Se.add(x),x.unmount=function(){Se.delete(x),Se.size<1&&(u=xt,q&&q(),q=null,l.value=xt,Le=!1,M=!1),Y()}}};function ue(x){return x.reduce((K,Y)=>K.then(()=>A(Y)),Promise.resolve())}return ke}function gt(){return Ve(wa)}function wi(e){return Ve(Bs)}var Au=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ou(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Sn={exports:{}},Pu=Sn.exports,jo;function ku(){return jo||(jo=1,(function(e,t){(function(n,a){var s={};n.PubSub?(s=n.PubSub,console.warn("PubSub already loaded, using existing version")):(n.PubSub=s,a(s)),e!==void 0&&e.exports&&(t=e.exports=s),t.PubSub=s,e.exports=t=s})(typeof window=="object"&&window||Pu||Au,function(n){var a={},s=-1,o="*";function r(d){var g;for(g in d)if(Object.prototype.hasOwnProperty.call(d,g))return!0;return!1}function i(d){return function(){throw d}}function l(d,g,_){try{d(g,_)}catch(b){setTimeout(i(b),0)}}function u(d,g,_){d(g,_)}function c(d,g,_,b){var T=a[g],S=b?u:l,P;if(Object.prototype.hasOwnProperty.call(a,g))for(P in T)Object.prototype.hasOwnProperty.call(T,P)&&S(T[P],d,_)}function p(d,g,_){return function(){var T=String(d),S=T.lastIndexOf(".");for(c(d,d,g,_);S!==-1;)T=T.substr(0,S),S=T.lastIndexOf("."),c(d,T,g,_);c(d,o,g,_)}}function f(d){var g=String(d),_=!!(Object.prototype.hasOwnProperty.call(a,g)&&r(a[g]));return _}function h(d){for(var g=String(d),_=f(g)||f(o),b=g.lastIndexOf(".");!_&&b!==-1;)g=g.substr(0,b),b=g.lastIndexOf("."),_=f(g);return _}function m(d,g,_,b){d=typeof d=="symbol"?d.toString():d;var T=p(d,g,b),S=h(d);return S?(_===!0?T():setTimeout(T,0),!0):!1}n.publish=function(d,g){return m(d,g,!1,n.immediateExceptions)},n.publishSync=function(d,g){return m(d,g,!0,n.immediateExceptions)},n.subscribe=function(d,g){if(typeof g!="function")return!1;d=typeof d=="symbol"?d.toString():d,Object.prototype.hasOwnProperty.call(a,d)||(a[d]={});var _="uid_"+String(++s);return a[d][_]=g,_},n.subscribeAll=function(d){return n.subscribe(o,d)},n.subscribeOnce=function(d,g){var _=n.subscribe(d,function(){n.unsubscribe(_),g.apply(this,arguments)});return n},n.clearAllSubscriptions=function(){a={}},n.clearSubscriptions=function(g){var _;for(_ in a)Object.prototype.hasOwnProperty.call(a,_)&&_.indexOf(g)===0&&delete a[_]},n.countSubscriptions=function(g){var _,b,T=0;for(_ in a)if(Object.prototype.hasOwnProperty.call(a,_)&&_.indexOf(g)===0){for(b in a[_])T++;break}return T},n.getSubscriptions=function(g){var _,b=[];for(_ in a)Object.prototype.hasOwnProperty.call(a,_)&&_.indexOf(g)===0&&b.push(_);return b},n.unsubscribe=function(d){var g=function($){var A;for(A in a)if(Object.prototype.hasOwnProperty.call(a,A)&&A.indexOf($)===0)return!0;return!1},_=typeof d=="string"&&(Object.prototype.hasOwnProperty.call(a,d)||g(d)),b=!_&&typeof d=="string",T=typeof d=="function",S=!1,P,C,I;if(_){n.clearSubscriptions(d);return}for(P in a)if(Object.prototype.hasOwnProperty.call(a,P)){if(C=a[P],b&&C[d]){delete C[d],S=d;break}if(T)for(I in C)Object.prototype.hasOwnProperty.call(C,I)&&C[I]===d&&(delete C[I],S=!0)}return S}})})(Sn,Sn.exports)),Sn.exports}var wu=ku();const J=Ou(wu);let $t=[{key:"americanfootball_cfl",group:"American Football",title:"CFL",description:"Canadian Football League",active:!0,has_outrights:!1},{key:"americanfootball_ncaaf",group:"American Football",title:"NCAAF",description:"US College Football",active:!0,has_outrights:!1},{key:"americanfootball_ncaaf_championship_winner",group:"American Football",title:"NCAAF Championship Winner",description:"US College Football Championship Winner",active:!0,has_outrights:!0},{key:"americanfootball_nfl",group:"American Football",title:"NFL",description:"US Football",active:!0,has_outrights:!1},{key:"americanfootball_nfl_super_bowl_winner",group:"American Football",title:"NFL Super Bowl Winner",description:"Super Bowl Winner 2025/2026",active:!1,has_outrights:!0},{key:"aussierules_afl",group:"Aussie Rules",title:"AFL",description:"Aussie Football",active:!1,has_outrights:!1},{key:"baseball_kbo",group:"Baseball",title:"KBO",description:"KBO League",active:!1,has_outrights:!1},{key:"baseball_milb",group:"Baseball",title:"MiLB",description:"Minor League Baseball",active:!1,has_outrights:!1},{key:"baseball_mlb",group:"Baseball",title:"MLB",description:"Major League Baseball",active:!0,has_outrights:!1},{key:"baseball_mlb_world_series_winner",group:"Baseball",title:"MLB World Series Winner",description:"World Series Winner 2025",active:!1,has_outrights:!0},{key:"baseball_npb",group:"Baseball",title:"NPB",description:"Nippon Professional Baseball",active:!0,has_outrights:!1},{key:"basketball_euroleague",group:"Basketball",title:"Basketball Euroleague",description:"Basketball Euroleague",active:!1,has_outrights:!1},{key:"basketball_nba",group:"Basketball",title:"NBA",description:"US Basketball",active:!0,has_outrights:!1},{key:"basketball_nba_championship_winner",group:"Basketball",title:"NBA Championship Winner",description:"Championship Winner 2025/2026",active:!1,has_outrights:!0},{key:"basketball_nbl",group:"Basketball",title:"NBL",description:"AU National Basketball League",active:!1,has_outrights:!1},{key:"basketball_ncaab_championship_winner",group:"Basketball",title:"NCAAB Championship Winner",description:"US College Basketball Championship Winner",active:!0,has_outrights:!0},{key:"basketball_wnba",group:"Basketball",title:"WNBA",description:"US Basketball",active:!0,has_outrights:!1},{key:"boxing_boxing",group:"Boxing",title:"Boxing",description:"Boxing Bouts",active:!0,has_outrights:!1},{key:"cricket_asia_cup",group:"Cricket",title:"Asia Cup",description:"Asia Cup",active:!1,has_outrights:!1},{key:"cricket_international_t20",group:"Cricket",title:"International Twenty20",description:"International Twenty20",active:!0,has_outrights:!1},{key:"golf_masters_tournament_winner",group:"Golf",title:"Masters Tournament Winner",description:"2026 Winner",active:!0,has_outrights:!0},{key:"icehockey_liiga",group:"Ice Hockey",title:"Liiga",description:"Finnish SM League",active:!1,has_outrights:!1},{key:"icehockey_mestis",group:"Ice Hockey",title:"Mestis",description:"Finnish Mestis League",active:!1,has_outrights:!1},{key:"icehockey_nhl",group:"Ice Hockey",title:"NHL",description:"US Ice Hockey",active:!0,has_outrights:!1},{key:"icehockey_nhl_championship_winner",group:"Ice Hockey",title:"NHL Championship Winner",description:"Stanley Cup Winner 2025/2026",active:!1,has_outrights:!0},{key:"icehockey_sweden_allsvenskan",group:"Ice Hockey",title:"HockeyAllsvenskan",description:"Swedish Hockey Allsvenskan",active:!1,has_outrights:!1},{key:"icehockey_sweden_hockey_league",group:"Ice Hockey",title:"SHL",description:"Swedish Hockey League",active:!1,has_outrights:!1},{key:"mma_mixed_martial_arts",group:"Mixed Martial Arts",title:"MMA",description:"Mixed Martial Arts",active:!0,has_outrights:!1},{key:"politics_us_presidential_election_winner",group:"Politics",title:"US Presidential Elections Winner",description:"2028 US Presidential Election Winner",active:!1,has_outrights:!0},{key:"rugbyleague_nrl",group:"Rugby League",title:"NRL",description:"Aussie Rugby League",active:!1,has_outrights:!1},{key:"soccer_argentina_primera_division",group:"Soccer",title:"Primera División - Argentina",description:"Argentine Primera División",active:!1,has_outrights:!1},{key:"soccer_australia_aleague",group:"Soccer",title:"A-League",description:"Aussie Soccer",active:!1,has_outrights:!1},{key:"soccer_austria_bundesliga",group:"Soccer",title:"Austrian Football Bundesliga",description:"Austrian Soccer",active:!1,has_outrights:!1},{key:"soccer_belgium_first_div",group:"Soccer",title:"Belgium First Div",description:"Belgian First Division A",active:!1,has_outrights:!1},{key:"soccer_brazil_campeonato",group:"Soccer",title:"Brazil Série A",description:"Brasileirão Série A",active:!1,has_outrights:!1},{key:"soccer_brazil_serie_b",group:"Soccer",title:"Brazil Série B",description:"Campeonato Brasileiro Série B",active:!1,has_outrights:!1},{key:"soccer_chile_campeonato",group:"Soccer",title:"Primera División - Chile",description:"Campeonato Chileno",active:!1,has_outrights:!1},{key:"soccer_china_superleague",group:"Soccer",title:"Super League - China",description:"Chinese Soccer",active:!1,has_outrights:!1},{key:"soccer_conmebol_copa_libertadores",group:"Soccer",title:"Copa Libertadores",description:"CONMEBOL Copa Libertadores",active:!1,has_outrights:!1},{key:"soccer_conmebol_copa_sudamericana",group:"Soccer",title:"Copa Sudamericana",description:"CONMEBOL Copa Sudamericana",active:!1,has_outrights:!1},{key:"soccer_denmark_superliga",group:"Soccer",title:"Denmark Superliga",description:"Danish Soccer",active:!1,has_outrights:!1},{key:"soccer_efl_champ",group:"Soccer",title:"Championship",description:"EFL Championship",active:!1,has_outrights:!1},{key:"soccer_england_league1",group:"Soccer",title:"League 1",description:"EFL League 1",active:!1,has_outrights:!1},{key:"soccer_england_league2",group:"Soccer",title:"League 2",description:"EFL League 2 ",active:!1,has_outrights:!1},{key:"soccer_epl",group:"Soccer",title:"EPL",description:"English Premier League",active:!0,has_outrights:!1},{key:"soccer_fifa_world_cup_qualifiers_europe",group:"Soccer",title:"FIFA World Cup Qualifiers - Europe",description:"FIFA World Cup Qualifiers - UEFA",active:!0,has_outrights:!1},{key:"soccer_fifa_world_cup_winner",group:"Soccer",title:"FIFA World Cup Winner",description:"FIFA World Cup Winner 2026",active:!1,has_outrights:!0},{key:"soccer_finland_veikkausliiga",group:"Soccer",title:"Veikkausliiga - Finland",description:"Finnish  Soccer",active:!1,has_outrights:!1},{key:"soccer_france_ligue_one",group:"Soccer",title:"Ligue 1 - France",description:"French Soccer",active:!1,has_outrights:!1},{key:"soccer_france_ligue_two",group:"Soccer",title:"Ligue 2 - France",description:"French Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_bundesliga",group:"Soccer",title:"Bundesliga - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_bundesliga2",group:"Soccer",title:"Bundesliga 2 - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_liga3",group:"Soccer",title:"3. Liga - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_greece_super_league",group:"Soccer",title:"Super League - Greece",description:"Greek Soccer",active:!1,has_outrights:!1},{key:"soccer_italy_serie_a",group:"Soccer",title:"Serie A - Italy",description:"Italian Soccer",active:!1,has_outrights:!1},{key:"soccer_italy_serie_b",group:"Soccer",title:"Serie B - Italy",description:"Italian Soccer",active:!1,has_outrights:!1},{key:"soccer_japan_j_league",group:"Soccer",title:"J League",description:"Japan Soccer League",active:!1,has_outrights:!1},{key:"soccer_korea_kleague1",group:"Soccer",title:"K League 1",description:"Korean Soccer",active:!1,has_outrights:!1},{key:"soccer_league_of_ireland",group:"Soccer",title:"League of Ireland",description:"Airtricity League Premier Division",active:!1,has_outrights:!1},{key:"soccer_mexico_ligamx",group:"Soccer",title:"Liga MX",description:"Mexican Soccer",active:!1,has_outrights:!1},{key:"soccer_netherlands_eredivisie",group:"Soccer",title:"Dutch Eredivisie",description:"Dutch Soccer",active:!1,has_outrights:!1},{key:"soccer_norway_eliteserien",group:"Soccer",title:"Eliteserien - Norway",description:"Norwegian Soccer",active:!1,has_outrights:!1},{key:"soccer_poland_ekstraklasa",group:"Soccer",title:"Ekstraklasa - Poland",description:"Polish Soccer",active:!1,has_outrights:!1},{key:"soccer_portugal_primeira_liga",group:"Soccer",title:"Primeira Liga - Portugal",description:"Portugese Soccer",active:!1,has_outrights:!1},{key:"soccer_spain_la_liga",group:"Soccer",title:"La Liga - Spain",description:"Spanish Soccer",active:!1,has_outrights:!1},{key:"soccer_spain_segunda_division",group:"Soccer",title:"La Liga 2 - Spain",description:"Spanish Soccer",active:!1,has_outrights:!1},{key:"soccer_spl",group:"Soccer",title:"Premiership - Scotland",description:"Scottish Premiership",active:!1,has_outrights:!1},{key:"soccer_sweden_allsvenskan",group:"Soccer",title:"Allsvenskan - Sweden",description:"Swedish Soccer",active:!1,has_outrights:!1},{key:"soccer_sweden_superettan",group:"Soccer",title:"Superettan - Sweden",description:"Swedish Soccer",active:!1,has_outrights:!1},{key:"soccer_switzerland_superleague",group:"Soccer",title:"Swiss Superleague",description:"Swiss Soccer",active:!1,has_outrights:!1},{key:"soccer_turkey_super_league",group:"Soccer",title:"Turkey Super League",description:"Turkish Soccer",active:!1,has_outrights:!1},{key:"soccer_uefa_champs_league",group:"Soccer",title:"UEFA Champions League",description:"European Champions League",active:!0,has_outrights:!1},{key:"soccer_uefa_europa_conference_league",group:"Soccer",title:"UEFA Europa Conference League",description:"UEFA Europa Conference League",active:!1,has_outrights:!1},{key:"soccer_uefa_europa_league",group:"Soccer",title:"UEFA Europa League",description:"European Europa League",active:!1,has_outrights:!1},{key:"soccer_usa_mls",group:"Soccer",title:"MLS",description:"Major League Soccer",active:!1,has_outrights:!1},{key:"tennis_atp_china_open",group:"Tennis",title:"ATP China Open",description:"Men's Singles",active:!1,has_outrights:!1},{key:"tennis_wta_china_open",group:"Tennis",title:"WTA China Open",description:"Women's Singles",active:!1,has_outrights:!1}];const xu={getMeta(){return{language:[{lang:"Abkhazian",code:"ab",enabled:!1,copy:[["key","value"]]},{lang:"Afar",code:"aa",enabled:!1,copy:[["key","value"]]},{lang:"Afrikaans",code:"af",enabled:!1,copy:[["key","value"]]},{lang:"Akan",code:"ak",enabled:!1,copy:[["key","value"]]},{lang:"Albanian",code:"sq",enabled:!1,copy:[["key","value"]]},{lang:"Amharic",code:"am",enabled:!1,copy:[["key","value"]]},{lang:"Arabic",code:"ar",enabled:!1,copy:[["key","value"]]},{lang:"Aragonese",code:"an",enabled:!1,copy:[["key","value"]]},{lang:"Armenian",code:"hy",enabled:!1,copy:[["key","value"]]},{lang:"Assamese",code:"as",enabled:!1,copy:[["key","value"]]},{lang:"Avaric",code:"av",enabled:!1,copy:[["key","value"]]},{lang:"Avestan",code:"ae",enabled:!1,copy:[["key","value"]]},{lang:"Aymara",code:"ay",enabled:!1,copy:[["key","value"]]},{lang:"Azerbaijani",code:"az",enabled:!1,copy:[["key","value"]]},{lang:"Bambara",code:"bm",enabled:!1,copy:[["key","value"]]},{lang:"Bashkir",code:"ba",enabled:!1,copy:[["key","value"]]},{lang:"Basque",code:"eu",enabled:!1,copy:[["key","value"]]},{lang:"Belarusian",code:"be",enabled:!1,copy:[["key","value"]]},{lang:"Bengali (Bangla)",code:"bn",enabled:!1,copy:[["key","value"]]},{lang:"Bihari",code:"bh",enabled:!1,copy:[["key","value"]]},{lang:"Bislama",code:"bi",enabled:!1,copy:[["key","value"]]},{lang:"Bosnian",code:"bs",enabled:!1,copy:[["key","value"]]},{lang:"Breton",code:"br",enabled:!1,copy:[["key","value"]]},{lang:"Bulgarian",code:"bg",enabled:!1,copy:[["key","value"]]},{lang:"Burmese",code:"my",enabled:!1,copy:[["key","value"]]},{lang:"Catalan",code:"ca",enabled:!1,copy:[["key","value"]]},{lang:"Chamorro",code:"ch",enabled:!1,copy:[["key","value"]]},{lang:"Chechen",code:"ce",enabled:!1,copy:[["key","value"]]},{lang:"Chichewa, Chewa, Nyanja",code:"ny",enabled:!1,copy:[["key","value"]]},{lang:"Chinese",code:"zh",enabled:!1,copy:[["key","value"]]},{lang:"Chinese (Simplified)",code:"zh-Hans",enabled:!1,copy:[["welcome_back","欢迎回来"],["please_enter_your_details","请输入您的详细信息"],["email","电子邮件"],["enter_your_email","输入您的电子邮件"],["password","密码"],["enter_your_password","输入您的密码"],["enter_email_and_password","输入邮箱和密码"],["sign_in","登入"],["forgot_password","忘记密码"],["dont_have_an_account","沒有帳戶？"],["sign_up","报名"],["please_enter_your_details_to_get_started","请输入您的详细信息以开始"],["already_have_an_account","已有账户？"],["log_in","登录"],["name","姓名"],["enter_your_name","输入您的姓名"]]},{lang:"Chinese (Traditional)",code:"zh-Hant",enabled:!1,copy:[["key","value"]]},{lang:"Chuvash",code:"cv",enabled:!1,copy:[["key","value"]]},{lang:"Cornish",code:"kw",enabled:!1,copy:[["key","value"]]},{lang:"Corsican",code:"co",enabled:!1,copy:[["key","value"]]},{lang:"Cree",code:"cr",enabled:!1,copy:[["key","value"]]},{lang:"Croatian",code:"hr",enabled:!1,copy:[["key","value"]]},{lang:"Czech",code:"cs",enabled:!1,copy:[["key","value"]]},{lang:"Danish",code:"da",enabled:!1,copy:[["key","value"]]},{lang:"Divehi, Dhivehi, Maldivian",code:"dv",enabled:!1,copy:[["key","value"]]},{lang:"Dutch",code:"nl",enabled:!1,copy:[["key","value"]]},{lang:"Dzongkha",code:"dz",enabled:!1,copy:[["key","value"]]},{lang:"English",code:"en",enabled:!0,copy:[["welcome_back","Welcome Back"],["please_enter_your_details","Please Enter your Details"],["email","Email"],["enter_your_email","Enter your email"],["password","Password"],["enter_your_password","Enter your password"],["enter_email_and_password","Enter Email and Password"],["sign_in","Sign in"],["forgot_password","Forgot Password"],["dont_have_an_account","Don't have an account?"],["sign_up","Sign up"],["please_enter_your_details_to_get_started","Please enter your details to get started"],["already_have_an_account","Already have an account?"],["log_in","Sign in"],["name","Name"],["enter_your_name","Enter your name"]]},{lang:"Esperanto",code:"eo",enabled:!1,copy:[["key","value"]]},{lang:"Estonian",code:"et",enabled:!1,copy:[["key","value"]]},{lang:"Ewe",code:"ee",enabled:!1,copy:[["key","value"]]},{lang:"Faroese",code:"fo",enabled:!1,copy:[["key","value"]]},{lang:"Fijian",code:"fj",enabled:!1,copy:[["key","value"]]},{lang:"Finnish",code:"fi",enabled:!1,copy:[["key","value"]]},{lang:"French",code:"fr",enabled:!1,copy:[["key","value"]]},{lang:"Fula, Fulah, Pulaar, Pular",code:"ff",enabled:!1,copy:[["key","value"]]},{lang:"Galician",code:"gl",enabled:!1,copy:[["key","value"]]},{lang:"Gaelic (Scottish)",code:"gd",enabled:!1,copy:[["key","value"]]},{lang:"Gaelic (Manx)",code:"gv",enabled:!1,copy:[["key","value"]]},{lang:"Georgian",code:"ka",enabled:!1,copy:[["key","value"]]},{lang:"German",code:"de",enabled:!1,copy:[["key","value"]]},{lang:"Greek",code:"el",enabled:!1,copy:[["key","value"]]},{lang:"Greenlandic",code:"kl",enabled:!1,copy:[["key","value"]]},{lang:"Guarani",code:"gn",enabled:!1,copy:[["key","value"]]},{lang:"Gujarati",code:"gu",enabled:!1,copy:[["key","value"]]},{lang:"Haitian Creole",code:"ht",enabled:!1,copy:[["key","value"]]},{lang:"Hausa",code:"ha",enabled:!1,copy:[["key","value"]]},{lang:"Hebrew",code:"he",enabled:!1,copy:[["key","value"]]},{lang:"Herero",code:"hz",enabled:!1,copy:[["key","value"]]},{lang:"Hindi",code:"hi",enabled:!1,copy:[["key","value"]]},{lang:"Hiri Motu",code:"ho",enabled:!1,copy:[["key","value"]]},{lang:"Hungarian",code:"hu",enabled:!1,copy:[["key","value"]]},{lang:"Icelandic",code:"is",enabled:!1,copy:[["key","value"]]},{lang:"Ido",code:"io",enabled:!1,copy:[["key","value"]]},{lang:"Igbo",code:"ig",enabled:!1,copy:[["key","value"]]},{lang:"Indonesian",code:"id, in",enabled:!1,copy:[["key","value"]]},{lang:"Interlingua",code:"ia",enabled:!1,copy:[["key","value"]]},{lang:"Interlingue",code:"ie",enabled:!1,copy:[["key","value"]]},{lang:"Inuktitut",code:"iu",enabled:!1,copy:[["key","value"]]},{lang:"Inupiak",code:"ik",enabled:!1,copy:[["key","value"]]},{lang:"Irish",code:"ga",enabled:!1,copy:[["key","value"]]},{lang:"Italian",code:"it",enabled:!0,copy:[["welcome_back","Bentornato"],["please_enter_your_details","Per favore, inserisci i tuoi dati"],["email","E-mail"],["enter_your_email","Inserisci la tua email"],["password","Password"],["enter_your_password","Inserisci la tua password"],["enter_email_and_password","Inserisci email e password"],["sign_in","Registrazione"],["forgot_password","Ha dimenticato la password"],["dont_have_an_account","Non hai un account?"],["sign_up","Iscrizione"],["please_enter_your_details_to_get_started","Inserisci i tuoi dati per iniziare"],["already_have_an_account","Hai già un account?"],["log_in","Login"],["name","Nome"],["enter_your_name","Inserisci il tuo nome"]]},{lang:"Japanese",code:"ja",enabled:!1,copy:[["key","value"]]},{lang:"Javanese",code:"jv",enabled:!1,copy:[["key","value"]]},{lang:"Kalaallisut, Greenlandic",code:"kl",enabled:!1,copy:[["key","value"]]},{lang:"Kannada",code:"kn",enabled:!1,copy:[["key","value"]]},{lang:"Kanuri",code:"kr",enabled:!1,copy:[["key","value"]]},{lang:"Kashmiri",code:"ks",enabled:!1,copy:[["key","value"]]},{lang:"Kazakh",code:"kk",enabled:!1,copy:[["key","value"]]},{lang:"Khmer",code:"km",enabled:!1,copy:[["key","value"]]},{lang:"Kikuyu",code:"ki",enabled:!1,copy:[["key","value"]]},{lang:"Kinyarwanda (Rwanda)",code:"rw",enabled:!1,copy:[["key","value"]]},{lang:"Kirundi",code:"rn",enabled:!1,copy:[["key","value"]]},{lang:"Kyrgyz",code:"ky",enabled:!1,copy:[["key","value"]]},{lang:"Komi",code:"kv",enabled:!1,copy:[["key","value"]]},{lang:"Kongo",code:"kg",enabled:!1,copy:[["key","value"]]},{lang:"Korean",code:"ko",enabled:!1,copy:[["key","value"]]},{lang:"Kurdish",code:"ku",enabled:!1,copy:[["key","value"]]},{lang:"Kwanyama",code:"kj",enabled:!1,copy:[["key","value"]]},{lang:"Lao",code:"lo",enabled:!1,copy:[["key","value"]]},{lang:"Latin",code:"la",enabled:!0,copy:[["key","value"]]},{lang:"Latvian (Lettish)",code:"lv",enabled:!1,copy:[["key","value"]]},{lang:"Limburgish ( Limburger)",code:"li",enabled:!1,copy:[["key","value"]]},{lang:"Lingala",code:"ln",enabled:!1,copy:[["key","value"]]},{lang:"Lithuanian",code:"lt",enabled:!1,copy:[["key","value"]]},{lang:"Luga-Katanga",code:"lu",enabled:!1,copy:[["key","value"]]},{lang:"Luganda, Ganda",code:"lg",enabled:!1,copy:[["key","value"]]},{lang:"Luxembourgish",code:"lb",enabled:!1,copy:[["key","value"]]},{lang:"Manx",code:"gv",enabled:!1,copy:[["key","value"]]},{lang:"Macedonian",code:"mk",enabled:!1,copy:[["key","value"]]},{lang:"Malagasy",code:"mg",enabled:!1,copy:[["key","value"]]},{lang:"Malay",code:"ms",enabled:!1,copy:[["key","value"]]},{lang:"Malayalam",code:"ml",enabled:!1,copy:[["key","value"]]},{lang:"Maltese",code:"mt",enabled:!1,copy:[["key","value"]]},{lang:"Maori",code:"mi",enabled:!1,copy:[["key","value"]]},{lang:"Marathi",code:"mr",enabled:!1,copy:[["key","value"]]},{lang:"Marshallese",code:"mh",enabled:!1,copy:[["key","value"]]},{lang:"Moldavian",code:"mo",enabled:!1,copy:[["key","value"]]},{lang:"Mongolian",code:"mn",enabled:!1,copy:[["key","value"]]},{lang:"Nauru",code:"na",enabled:!1,copy:[["key","value"]]},{lang:"Navajo",code:"nv",enabled:!1,copy:[["key","value"]]},{lang:"Ndonga",code:"ng",enabled:!1,copy:[["key","value"]]},{lang:"Northern Ndebele",code:"nd",enabled:!1,copy:[["key","value"]]},{lang:"Nepali",code:"ne",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian",code:"no",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian bokmål",code:"nb",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian nynorsk",code:"nn",enabled:!1,copy:[["key","value"]]},{lang:"Nuosu",code:"ii",enabled:!1,copy:[["key","value"]]},{lang:"Occitan",code:"oc",enabled:!1,copy:[["key","value"]]},{lang:"Ojibwe",code:"oj",enabled:!1,copy:[["key","value"]]},{lang:"Old Church Slavonic, Old Bulgarian",code:"cu",enabled:!1,copy:[["key","value"]]},{lang:"Oriya",code:"or",enabled:!1,copy:[["key","value"]]},{lang:"Oromo (Afaan Oromo)",code:"om",enabled:!1,copy:[["key","value"]]},{lang:"Ossetian",code:"os",enabled:!1,copy:[["key","value"]]},{lang:"Pāli",code:"pi",enabled:!1,copy:[["key","value"]]},{lang:"Pashto, Pushto",code:"ps",enabled:!1,copy:[["key","value"]]},{lang:"Persian (Farsi)",code:"fa",enabled:!1,copy:[["key","value"]]},{lang:"Polish",code:"pl",enabled:!1,copy:[["key","value"]]},{lang:"Portuguese",code:"pt",enabled:!1,copy:[["key","value"]]},{lang:"Punjabi (Eastern)",code:"pa",enabled:!1,copy:[["key","value"]]},{lang:"Quechua",code:"qu",enabled:!1,copy:[["key","value"]]},{lang:"Romansh",code:"rm",enabled:!1,copy:[["key","value"]]},{lang:"Romanian",code:"ro",enabled:!1,copy:[["key","value"]]},{lang:"Russian",code:"ru",enabled:!1,copy:[["key","value"]]},{lang:"Sami",code:"se",enabled:!1,copy:[["key","value"]]},{lang:"Samoan",code:"sm",enabled:!1,copy:[["key","value"]]},{lang:"Sango",code:"sg",enabled:!1,copy:[["key","value"]]},{lang:"Sanskrit",code:"sa",enabled:!1,copy:[["key","value"]]},{lang:"Serbian",code:"sr",enabled:!1,copy:[["key","value"]]},{lang:"Serbo-Croatian",code:"sh",enabled:!1,copy:[["key","value"]]},{lang:"Sesotho",code:"st",enabled:!1,copy:[["key","value"]]},{lang:"Setswana",code:"tn",enabled:!1,copy:[["key","value"]]},{lang:"Shona",code:"sn",enabled:!1,copy:[["key","value"]]},{lang:"Sichuan Yi",code:"ii",enabled:!1,copy:[["key","value"]]},{lang:"Sindhi",code:"sd",enabled:!1,copy:[["key","value"]]},{lang:"Sinhalese",code:"si",enabled:!1,copy:[["key","value"]]},{lang:"Siswati",code:"ss",enabled:!1,copy:[["key","value"]]},{lang:"Slovak",code:"sk",enabled:!1,copy:[["key","value"]]},{lang:"Slovenian",code:"sl",enabled:!1,copy:[["key","value"]]},{lang:"Somali",code:"so",enabled:!1,copy:[["key","value"]]},{lang:"Southern Ndebele",code:"nr",enabled:!1,copy:[["key","value"]]},{lang:"Spanish",code:"es",enabled:!1,copy:[["key","value"]]},{lang:"Sundanese",code:"su",enabled:!1,copy:[["key","value"]]},{lang:"Swahili (Kiswahili)",code:"sw",enabled:!1,copy:[["key","value"]]},{lang:"Swati",code:"ss",enabled:!1,copy:[["key","value"]]},{lang:"Swedish",code:"sv",enabled:!1,copy:[["key","value"]]},{lang:"Tagalog",code:"tl",enabled:!1,copy:[["key","value"]]},{lang:"Tahitian",code:"ty",enabled:!1,copy:[["key","value"]]},{lang:"Tajik",code:"tg",enabled:!1,copy:[["key","value"]]},{lang:"Tamil",code:"ta",enabled:!1,copy:[["key","value"]]},{lang:"Tatar",code:"tt",enabled:!1,copy:[["key","value"]]},{lang:"Telugu",code:"te",enabled:!1,copy:[["key","value"]]},{lang:"Thai",code:"th",enabled:!1,copy:[["key","value"]]},{lang:"Tibetan",code:"bo",enabled:!1,copy:[["key","value"]]},{lang:"Tigrinya",code:"ti",enabled:!1,copy:[["key","value"]]},{lang:"Tonga",code:"to",enabled:!1,copy:[["key","value"]]},{lang:"Tsonga",code:"ts",enabled:!1,copy:[["key","value"]]},{lang:"Turkish",code:"tr",enabled:!1,copy:[["key","value"]]},{lang:"Turkmen",code:"tk",enabled:!1,copy:[["key","value"]]},{lang:"Twi",code:"tw",enabled:!1,copy:[["key","value"]]},{lang:"Uyghur",code:"ug",enabled:!1,copy:[["key","value"]]},{lang:"Ukrainian",code:"uk",enabled:!1,copy:[["key","value"]]},{lang:"Urdu",code:"ur",enabled:!1,copy:[["key","value"]]},{lang:"Uzbek",code:"uz",enabled:!1,copy:[["key","value"]]},{lang:"Venda",code:"ve",enabled:!1,copy:[["key","value"]]},{lang:"Vietnamese",code:"vi",enabled:!1,copy:[["key","value"]]},{lang:"Volapük",code:"vo",enabled:!1,copy:[["key","value"]]},{lang:"Wallon",code:"wa",enabled:!1,copy:[["key","value"]]},{lang:"Welsh",code:"cy",enabled:!1,copy:[["key","value"]]},{lang:"Wolof",code:"wo",enabled:!1,copy:[["key","value"]]},{lang:"Western Frisian",code:"fy",enabled:!1,copy:[["key","value"]]},{lang:"Xhosa",code:"xh",enabled:!1,copy:[["key","value"]]},{lang:"Yiddish",code:"yi, ji",enabled:!1,copy:[["key","value"]]},{lang:"Yoruba",code:"yo",enabled:!1,copy:[["key","value"]]},{lang:"Zhuang, Chuang",code:"za",enabled:!1,copy:[["key","value"]]},{lang:"Zulu",code:"zu",enabled:!1,copy:[["key","value"]]}]}}};function Kt(e){return new Promise((t,n)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>n(e.error)})}function Cu(e,t){let n;const a=()=>{if(n)return n;const s=indexedDB.open(e);return s.onupgradeneeded=()=>s.result.createObjectStore(t),n=Kt(s),n.then(o=>{o.onclose=()=>n=void 0},()=>{}),n};return(s,o)=>a().then(r=>o(r.transaction(t,s).objectStore(t)))}let qa;function Gn(){return qa||(qa=Cu("keyval-store","keyval")),qa}function Ru(e,t=Gn()){return t("readonly",n=>Kt(n.get(e)))}function Go(e,t,n=Gn()){return n("readwrite",a=>(a.put(t,e),Kt(a.transaction)))}function Wa(e,t=Gn()){return t("readwrite",n=>(n.delete(e),Kt(n.transaction)))}function xi(e,t){return e.openCursor().onsuccess=function(){this.result&&(t(this.result),this.result.continue())},Kt(e.transaction)}function cn(e=Gn()){return e("readonly",t=>{if(t.getAllKeys)return Kt(t.getAllKeys());const n=[];return xi(t,a=>n.push(a.key)).then(()=>n)})}function Nu(e=Gn()){return e("readonly",t=>{if(t.getAll&&t.getAllKeys)return Promise.all([Kt(t.getAllKeys()),Kt(t.getAll())]).then(([a,s])=>a.map((o,r)=>[o,s[r]]));const n=[];return e("readonly",a=>xi(a,s=>n.push([s.key,s.value])).then(()=>n))})}const _n=e=>e!==null&&Object.prototype.toString.call(e)==="[object Object]",ua=(e,t)=>{if(e===t)return!0;if(typeof e!=typeof t)return!1;if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n+=1)if(!ua(e[n],t[n]))return!1;return!0}if(_n(e)&&_n(t)){const n=Object.entries(e),a=new Set(Object.keys(t));if(n.length!==a.size)return!1;for(const[s,o]of n){if(!ua(o,t[s]))return!1;a.delete(s)}return a.size===0}return!1},Vn=e=>{if(e===""||e===!1||e===null||e===void 0||Array.isArray(e)&&e.length===0)return!0;if(_n(e)){for(const t in e)if(e.hasOwnProperty(t))return!1;return!0}return!1},Lu=e=>e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="_",qo=e=>e>="0"&&e<="9"||e==="-",Du=e=>e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="_";var O;(function(e){e.TOK_EOF="EOF",e.TOK_UNQUOTEDIDENTIFIER="UnquotedIdentifier",e.TOK_QUOTEDIDENTIFIER="QuotedIdentifier",e.TOK_RBRACKET="Rbracket",e.TOK_RPAREN="Rparen",e.TOK_COMMA="Comma",e.TOK_COLON="Colon",e.TOK_RBRACE="Rbrace",e.TOK_NUMBER="Number",e.TOK_CURRENT="Current",e.TOK_ROOT="Root",e.TOK_EXPREF="Expref",e.TOK_PIPE="Pipe",e.TOK_OR="Or",e.TOK_AND="And",e.TOK_EQ="EQ",e.TOK_GT="GT",e.TOK_LT="LT",e.TOK_GTE="GTE",e.TOK_LTE="LTE",e.TOK_NE="NE",e.TOK_FLATTEN="Flatten",e.TOK_STAR="Star",e.TOK_FILTER="Filter",e.TOK_DOT="Dot",e.TOK_NOT="Not",e.TOK_LBRACE="Lbrace",e.TOK_LBRACKET="Lbracket",e.TOK_LPAREN="Lparen",e.TOK_LITERAL="Literal"})(O||(O={}));const Wo={"(":O.TOK_LPAREN,")":O.TOK_RPAREN,"*":O.TOK_STAR,",":O.TOK_COMMA,".":O.TOK_DOT,":":O.TOK_COLON,"@":O.TOK_CURRENT,$:O.TOK_ROOT,"]":O.TOK_RBRACKET,"{":O.TOK_LBRACE,"}":O.TOK_RBRACE},Iu={"!":!0,"<":!0,"=":!0,">":!0},Mu={"	":!0,"\n":!0,"\r":!0," ":!0};class Bu{constructor(){this._current=0}tokenize(t){const n=[];this._current=0;let a,s,o;for(;this._current<t.length;)if(Lu(t[this._current]))a=this._current,s=this.consumeUnquotedIdentifier(t),n.push({start:a,type:O.TOK_UNQUOTEDIDENTIFIER,value:s});else if(Wo[t[this._current]]!==void 0)n.push({start:this._current,type:Wo[t[this._current]],value:t[this._current]}),this._current+=1;else if(qo(t[this._current]))o=this.consumeNumber(t),n.push(o);else if(t[this._current]==="[")o=this.consumeLBracket(t),n.push(o);else if(t[this._current]==='"')a=this._current,s=this.consumeQuotedIdentifier(t),n.push({start:a,type:O.TOK_QUOTEDIDENTIFIER,value:s});else if(t[this._current]==="'")a=this._current,s=this.consumeRawStringLiteral(t),n.push({start:a,type:O.TOK_LITERAL,value:s});else if(t[this._current]==="`"){a=this._current;const r=this.consumeLiteral(t);n.push({start:a,type:O.TOK_LITERAL,value:r})}else if(Iu[t[this._current]]!==void 0)o=this.consumeOperator(t),o&&n.push(o);else if(Mu[t[this._current]]!==void 0)this._current+=1;else if(t[this._current]==="&")a=this._current,this._current+=1,t[this._current]==="&"?(this._current+=1,n.push({start:a,type:O.TOK_AND,value:"&&"})):n.push({start:a,type:O.TOK_EXPREF,value:"&"});else if(t[this._current]==="|")a=this._current,this._current+=1,t[this._current]==="|"?(this._current+=1,n.push({start:a,type:O.TOK_OR,value:"||"})):n.push({start:a,type:O.TOK_PIPE,value:"|"});else{const r=new Error(`Unknown character: ${t[this._current]}`);throw r.name="LexerError",r}return n}consumeUnquotedIdentifier(t){const n=this._current;for(this._current+=1;this._current<t.length&&Du(t[this._current]);)this._current+=1;return t.slice(n,this._current)}consumeQuotedIdentifier(t){const n=this._current;this._current+=1;const a=t.length;for(;t[this._current]!=='"'&&this._current<a;){let s=this._current;t[s]==="\\"&&(t[s+1]==="\\"||t[s+1]==='"')?s+=2:s+=1,this._current=s}return this._current+=1,JSON.parse(t.slice(n,this._current))}consumeRawStringLiteral(t){const n=this._current;this._current+=1;const a=t.length;for(;t[this._current]!=="'"&&this._current<a;){let o=this._current;t[o]==="\\"&&(t[o+1]==="\\"||t[o+1]==="'")?o+=2:o+=1,this._current=o}return this._current+=1,t.slice(n+1,this._current-1).replace("\\'","'")}consumeNumber(t){const n=this._current;this._current+=1;const a=t.length;for(;qo(t[this._current])&&this._current<a;)this._current+=1;const s=parseInt(t.slice(n,this._current),10);return{start:n,value:s,type:O.TOK_NUMBER}}consumeLBracket(t){const n=this._current;return this._current+=1,t[this._current]==="?"?(this._current+=1,{start:n,type:O.TOK_FILTER,value:"[?"}):t[this._current]==="]"?(this._current+=1,{start:n,type:O.TOK_FLATTEN,value:"[]"}):{start:n,type:O.TOK_LBRACKET,value:"["}}consumeOperator(t){const n=this._current,a=t[n];if(this._current+=1,a==="!")return t[this._current]==="="?(this._current+=1,{start:n,type:O.TOK_NE,value:"!="}):{start:n,type:O.TOK_NOT,value:"!"};if(a==="<")return t[this._current]==="="?(this._current+=1,{start:n,type:O.TOK_LTE,value:"<="}):{start:n,type:O.TOK_LT,value:"<"};if(a===">")return t[this._current]==="="?(this._current+=1,{start:n,type:O.TOK_GTE,value:">="}):{start:n,type:O.TOK_GT,value:">"};if(a==="="&&t[this._current]==="=")return this._current+=1,{start:n,type:O.TOK_EQ,value:"=="}}consumeLiteral(t){this._current+=1;const n=this._current,a=t.length;for(;t[this._current]!=="`"&&this._current<a;){let r=this._current;t[r]==="\\"&&(t[r+1]==="\\"||t[r+1]==="`")?r+=2:r+=1,this._current=r}let s=t.slice(n,this._current).trimLeft();s=s.replace("\\`","`");const o=this.looksLikeJSON(s)?JSON.parse(s):JSON.parse(`"${s}"`);return this._current+=1,o}looksLikeJSON(t){const a=["true","false","null"],s="-0123456789";if(t==="")return!1;if('[{"'.includes(t[0])||a.includes(t))return!0;if(s.includes(t[0]))try{return JSON.parse(t),!0}catch{return!1}return!1}}const Ci=new Bu,xe={[O.TOK_EOF]:0,[O.TOK_UNQUOTEDIDENTIFIER]:0,[O.TOK_QUOTEDIDENTIFIER]:0,[O.TOK_RBRACKET]:0,[O.TOK_RPAREN]:0,[O.TOK_COMMA]:0,[O.TOK_RBRACE]:0,[O.TOK_NUMBER]:0,[O.TOK_CURRENT]:0,[O.TOK_EXPREF]:0,[O.TOK_ROOT]:0,[O.TOK_PIPE]:1,[O.TOK_OR]:2,[O.TOK_AND]:3,[O.TOK_EQ]:5,[O.TOK_GT]:5,[O.TOK_LT]:5,[O.TOK_GTE]:5,[O.TOK_LTE]:5,[O.TOK_NE]:5,[O.TOK_FLATTEN]:9,[O.TOK_STAR]:20,[O.TOK_FILTER]:21,[O.TOK_DOT]:40,[O.TOK_NOT]:45,[O.TOK_LBRACE]:50,[O.TOK_LBRACKET]:55,[O.TOK_LPAREN]:60};class Fu{constructor(){this.index=0,this.tokens=[]}parse(t){this.loadTokens(t),this.index=0;const n=this.expression(0);if(this.lookahead(0)!==O.TOK_EOF){const a=this.lookaheadToken(0);this.errorToken(a,`Unexpected token type: ${a.type}, value: ${a.value}`)}return n}loadTokens(t){this.tokens=[...Ci.tokenize(t),{type:O.TOK_EOF,value:"",start:t.length}]}expression(t){const n=this.lookaheadToken(0);this.advance();let a=this.nud(n),s=this.lookahead(0);for(;t<xe[s];)this.advance(),a=this.led(s,a),s=this.lookahead(0);return a}lookahead(t){return this.tokens[this.index+t].type}lookaheadToken(t){return this.tokens[this.index+t]}advance(){this.index+=1}nud(t){let n,a,s;switch(t.type){case O.TOK_LITERAL:return{type:"Literal",value:t.value};case O.TOK_UNQUOTEDIDENTIFIER:return{type:"Field",name:t.value};case O.TOK_QUOTEDIDENTIFIER:const o={type:"Field",name:t.value};if(this.lookahead(0)===O.TOK_LPAREN)throw new Error("Quoted identifier not allowed for function names.");return o;case O.TOK_NOT:return a=this.expression(xe.Not),{type:"NotExpression",children:[a]};case O.TOK_STAR:return n={type:"Identity"},a=this.lookahead(0)===O.TOK_RBRACKET&&{type:"Identity"}||this.parseProjectionRHS(xe.Star),{type:"ValueProjection",children:[n,a]};case O.TOK_FILTER:return this.led(t.type,{type:"Identity"});case O.TOK_LBRACE:return this.parseMultiselectHash();case O.TOK_FLATTEN:return n={type:O.TOK_FLATTEN,children:[{type:"Identity"}]},a=this.parseProjectionRHS(xe.Flatten),{type:"Projection",children:[n,a]};case O.TOK_LBRACKET:return this.lookahead(0)===O.TOK_NUMBER||this.lookahead(0)===O.TOK_COLON?(a=this.parseIndexExpression(),this.projectIfSlice({type:"Identity"},a)):this.lookahead(0)===O.TOK_STAR&&this.lookahead(1)===O.TOK_RBRACKET?(this.advance(),this.advance(),a=this.parseProjectionRHS(xe.Star),{children:[{type:"Identity"},a],type:"Projection"}):this.parseMultiselectList();case O.TOK_CURRENT:return{type:O.TOK_CURRENT};case O.TOK_ROOT:return{type:O.TOK_ROOT};case O.TOK_EXPREF:return s=this.expression(xe.Expref),{type:"ExpressionReference",children:[s]};case O.TOK_LPAREN:const r=[];for(;this.lookahead(0)!==O.TOK_RPAREN;)this.lookahead(0)===O.TOK_CURRENT?(s={type:O.TOK_CURRENT},this.advance()):s=this.expression(0),r.push(s);return this.match(O.TOK_RPAREN),r[0];default:this.errorToken(t)}}led(t,n){let a;switch(t){case O.TOK_DOT:const s=xe.Dot;return this.lookahead(0)!==O.TOK_STAR?(a=this.parseDotRHS(s),{type:"Subexpression",children:[n,a]}):(this.advance(),a=this.parseProjectionRHS(s),{type:"ValueProjection",children:[n,a]});case O.TOK_PIPE:return a=this.expression(xe.Pipe),{type:O.TOK_PIPE,children:[n,a]};case O.TOK_OR:return a=this.expression(xe.Or),{type:"OrExpression",children:[n,a]};case O.TOK_AND:return a=this.expression(xe.And),{type:"AndExpression",children:[n,a]};case O.TOK_LPAREN:const o=n.name,r=[];let i;for(;this.lookahead(0)!==O.TOK_RPAREN;)this.lookahead(0)===O.TOK_CURRENT?(i={type:O.TOK_CURRENT},this.advance()):i=this.expression(0),this.lookahead(0)===O.TOK_COMMA&&this.match(O.TOK_COMMA),r.push(i);return this.match(O.TOK_RPAREN),{name:o,type:"Function",children:r};case O.TOK_FILTER:const u=this.expression(0);return this.match(O.TOK_RBRACKET),a=this.lookahead(0)===O.TOK_FLATTEN&&{type:"Identity"}||this.parseProjectionRHS(xe.Filter),{type:"FilterProjection",children:[n,a,u]};case O.TOK_FLATTEN:const c={type:O.TOK_FLATTEN,children:[n]},p=this.parseProjectionRHS(xe.Flatten);return{type:"Projection",children:[c,p]};case O.TOK_EQ:case O.TOK_NE:case O.TOK_GT:case O.TOK_GTE:case O.TOK_LT:case O.TOK_LTE:return this.parseComparator(n,t);case O.TOK_LBRACKET:const f=this.lookaheadToken(0);return f.type===O.TOK_NUMBER||f.type===O.TOK_COLON?(a=this.parseIndexExpression(),this.projectIfSlice(n,a)):(this.match(O.TOK_STAR),this.match(O.TOK_RBRACKET),a=this.parseProjectionRHS(xe.Star),{type:"Projection",children:[n,a]});default:return this.errorToken(this.lookaheadToken(0))}}match(t){if(this.lookahead(0)===t){this.advance();return}else{const n=this.lookaheadToken(0);this.errorToken(n,`Expected ${t}, got: ${n.type}`)}}errorToken(t,n=""){const a=new Error(n||`Invalid token (${t.type}): "${t.value}"`);throw a.name="ParserError",a}parseIndexExpression(){if(this.lookahead(0)===O.TOK_COLON||this.lookahead(1)===O.TOK_COLON)return this.parseSliceExpression();const t={type:"Index",value:this.lookaheadToken(0).value};return this.advance(),this.match(O.TOK_RBRACKET),t}projectIfSlice(t,n){const a={type:"IndexExpression",children:[t,n]};return n.type==="Slice"?{children:[a,this.parseProjectionRHS(xe.Star)],type:"Projection"}:a}parseSliceExpression(){const t=[null,null,null];let n=0,a=this.lookahead(0);for(;a!==O.TOK_RBRACKET&&n<3;){if(a===O.TOK_COLON)n+=1,this.advance();else if(a===O.TOK_NUMBER)t[n]=this.lookaheadToken(0).value,this.advance();else{const s=this.lookaheadToken(0);this.errorToken(s,`Syntax error, unexpected token: ${s.value}(${s.type})`)}a=this.lookahead(0)}return this.match(O.TOK_RBRACKET),{children:t,type:"Slice"}}parseComparator(t,n){const a=this.expression(xe[n]);return{type:"Comparator",name:n,children:[t,a]}}parseDotRHS(t){const n=this.lookahead(0);if([O.TOK_UNQUOTEDIDENTIFIER,O.TOK_QUOTEDIDENTIFIER,O.TOK_STAR].includes(n))return this.expression(t);if(n===O.TOK_LBRACKET)return this.match(O.TOK_LBRACKET),this.parseMultiselectList();if(n===O.TOK_LBRACE)return this.match(O.TOK_LBRACE),this.parseMultiselectHash();const s=this.lookaheadToken(0);this.errorToken(s,`Syntax error, unexpected token: ${s.value}(${s.type})`)}parseProjectionRHS(t){if(xe[this.lookahead(0)]<10)return{type:"Identity"};if(this.lookahead(0)===O.TOK_LBRACKET)return this.expression(t);if(this.lookahead(0)===O.TOK_FILTER)return this.expression(t);if(this.lookahead(0)===O.TOK_DOT)return this.match(O.TOK_DOT),this.parseDotRHS(t);const n=this.lookaheadToken(0);this.errorToken(n,`Syntax error, unexpected token: ${n.value}(${n.type})`)}parseMultiselectList(){const t=[];for(;this.lookahead(0)!==O.TOK_RBRACKET;){const n=this.expression(0);if(t.push(n),this.lookahead(0)===O.TOK_COMMA&&(this.match(O.TOK_COMMA),this.lookahead(0)===O.TOK_RBRACKET))throw new Error("Unexpected token Rbracket")}return this.match(O.TOK_RBRACKET),{type:"MultiSelectList",children:t}}parseMultiselectHash(){const t=[],n=[O.TOK_UNQUOTEDIDENTIFIER,O.TOK_QUOTEDIDENTIFIER];let a,s,o;for(;;){if(a=this.lookaheadToken(0),!n.includes(a.type))throw new Error(`Expecting an identifier token, got: ${a.type}`);if(s=a.value,this.advance(),this.match(O.TOK_COLON),o=this.expression(0),t.push({value:o,type:"KeyValuePair",name:s}),this.lookahead(0)===O.TOK_COMMA)this.match(O.TOK_COMMA);else if(this.lookahead(0)===O.TOK_RBRACE){this.match(O.TOK_RBRACE);break}}return{type:"MultiSelectHash",children:t}}}const Ri=new Fu;var B;(function(e){e[e.TYPE_NUMBER=0]="TYPE_NUMBER",e[e.TYPE_ANY=1]="TYPE_ANY",e[e.TYPE_STRING=2]="TYPE_STRING",e[e.TYPE_ARRAY=3]="TYPE_ARRAY",e[e.TYPE_OBJECT=4]="TYPE_OBJECT",e[e.TYPE_BOOLEAN=5]="TYPE_BOOLEAN",e[e.TYPE_EXPREF=6]="TYPE_EXPREF",e[e.TYPE_NULL=7]="TYPE_NULL",e[e.TYPE_ARRAY_NUMBER=8]="TYPE_ARRAY_NUMBER",e[e.TYPE_ARRAY_STRING=9]="TYPE_ARRAY_STRING"})(B||(B={}));class $u{constructor(t){this.TYPE_NAME_TABLE={[B.TYPE_NUMBER]:"number",[B.TYPE_ANY]:"any",[B.TYPE_STRING]:"string",[B.TYPE_ARRAY]:"array",[B.TYPE_OBJECT]:"object",[B.TYPE_BOOLEAN]:"boolean",[B.TYPE_EXPREF]:"expression",[B.TYPE_NULL]:"null",[B.TYPE_ARRAY_NUMBER]:"Array<number>",[B.TYPE_ARRAY_STRING]:"Array<string>"},this.functionAbs=([n])=>Math.abs(n),this.functionAvg=([n])=>{let a=0;for(let s=0;s<n.length;s+=1)a+=n[s];return a/n.length},this.functionCeil=([n])=>Math.ceil(n),this.functionContains=n=>{const[a,s]=n;return a.includes(s)},this.functionEndsWith=n=>{const[a,s]=n;return a.includes(s,a.length-s.length)},this.functionFloor=([n])=>Math.floor(n),this.functionJoin=n=>{const[a,s]=n;return s.join(a)},this.functionKeys=([n])=>Object.keys(n),this.functionLength=([n])=>_n(n)?Object.keys(n).length:n.length,this.functionMap=n=>{if(!this._interpreter)return[];const a=[],s=this._interpreter,o=n[0],r=n[1];for(let i=0;i<r.length;i+=1)a.push(s.visit(o,r[i]));return a},this.functionMax=([n])=>{if(!n.length)return null;if(this.getTypeName(n[0])===B.TYPE_NUMBER)return Math.max(...n);const s=n;let o=s[0];for(let r=1;r<s.length;r+=1)o.localeCompare(s[r])<0&&(o=s[r]);return o},this.functionMaxBy=n=>{const a=n[1],s=n[0],o=this.createKeyFunction(a,[B.TYPE_NUMBER,B.TYPE_STRING]);let r=-1/0,i,l;for(let u=0;u<s.length;u+=1)l=o&&o(s[u]),l!==void 0&&l>r&&(r=l,i=s[u]);return i},this.functionMerge=n=>{let a={};for(let s=0;s<n.length;s+=1){const o=n[s];a=Object.assign(a,o)}return a},this.functionMin=([n])=>{if(!n.length)return null;if(this.getTypeName(n[0])===B.TYPE_NUMBER)return Math.min(...n);const s=n;let o=s[0];for(let r=1;r<s.length;r+=1)s[r].localeCompare(o)<0&&(o=s[r]);return o},this.functionMinBy=n=>{const a=n[1],s=n[0],o=this.createKeyFunction(a,[B.TYPE_NUMBER,B.TYPE_STRING]);let r=1/0,i,l;for(let u=0;u<s.length;u+=1)l=o&&o(s[u]),l!==void 0&&l<r&&(r=l,i=s[u]);return i},this.functionNotNull=n=>{for(let a=0;a<n.length;a+=1)if(this.getTypeName(n[a])!==B.TYPE_NULL)return n[a];return null},this.functionReverse=([n])=>{if(this.getTypeName(n)===B.TYPE_STRING){const o=n;let r="";for(let i=o.length-1;i>=0;i-=1)r+=o[i];return r}const s=n.slice(0);return s.reverse(),s},this.functionSort=([n])=>[...n].sort(),this.functionSortBy=n=>{if(!this._interpreter)return[];const a=n[0].slice(0);if(a.length===0)return a;const s=this._interpreter,o=n[1],r=this.getTypeName(s.visit(o,a[0]));if(r!==void 0&&![B.TYPE_NUMBER,B.TYPE_STRING].includes(r))throw new Error(`TypeError: unexpected type (${this.TYPE_NAME_TABLE[r]})`);const i=[];for(let l=0;l<a.length;l+=1)i.push([l,a[l]]);i.sort((l,u)=>{const c=s.visit(o,l[1]),p=s.visit(o,u[1]);if(this.getTypeName(c)!==r)throw new Error(`TypeError: expected (${this.TYPE_NAME_TABLE[r]}), received ${this.TYPE_NAME_TABLE[this.getTypeName(c)]}`);if(this.getTypeName(p)!==r)throw new Error(`TypeError: expected (${this.TYPE_NAME_TABLE[r]}), received ${this.TYPE_NAME_TABLE[this.getTypeName(p)]}`);return c>p?1:c<p?-1:l[0]-u[0]});for(let l=0;l<i.length;l+=1)a[l]=i[l][1];return a},this.functionStartsWith=([n,a])=>n.startsWith(a),this.functionSum=([n])=>n.reduce((a,s)=>a+s,0),this.functionToArray=([n])=>this.getTypeName(n)===B.TYPE_ARRAY?n:[n],this.functionToNumber=([n])=>{const a=this.getTypeName(n);let s;return a===B.TYPE_NUMBER?n:a===B.TYPE_STRING&&(s=+n,!isNaN(s))?s:null},this.functionToString=([n])=>this.getTypeName(n)===B.TYPE_STRING?n:JSON.stringify(n),this.functionType=([n])=>{switch(this.getTypeName(n)){case B.TYPE_NUMBER:return"number";case B.TYPE_STRING:return"string";case B.TYPE_ARRAY:return"array";case B.TYPE_OBJECT:return"object";case B.TYPE_BOOLEAN:return"boolean";case B.TYPE_EXPREF:return"expref";case B.TYPE_NULL:return"null";default:return}},this.functionValues=([n])=>Object.values(n),this.functionTable={abs:{_func:this.functionAbs,_signature:[{types:[B.TYPE_NUMBER]}]},avg:{_func:this.functionAvg,_signature:[{types:[B.TYPE_ARRAY_NUMBER]}]},ceil:{_func:this.functionCeil,_signature:[{types:[B.TYPE_NUMBER]}]},contains:{_func:this.functionContains,_signature:[{types:[B.TYPE_STRING,B.TYPE_ARRAY]},{types:[B.TYPE_ANY]}]},ends_with:{_func:this.functionEndsWith,_signature:[{types:[B.TYPE_STRING]},{types:[B.TYPE_STRING]}]},floor:{_func:this.functionFloor,_signature:[{types:[B.TYPE_NUMBER]}]},join:{_func:this.functionJoin,_signature:[{types:[B.TYPE_STRING]},{types:[B.TYPE_ARRAY_STRING]}]},keys:{_func:this.functionKeys,_signature:[{types:[B.TYPE_OBJECT]}]},length:{_func:this.functionLength,_signature:[{types:[B.TYPE_STRING,B.TYPE_ARRAY,B.TYPE_OBJECT]}]},map:{_func:this.functionMap,_signature:[{types:[B.TYPE_EXPREF]},{types:[B.TYPE_ARRAY]}]},max:{_func:this.functionMax,_signature:[{types:[B.TYPE_ARRAY_NUMBER,B.TYPE_ARRAY_STRING]}]},max_by:{_func:this.functionMaxBy,_signature:[{types:[B.TYPE_ARRAY]},{types:[B.TYPE_EXPREF]}]},merge:{_func:this.functionMerge,_signature:[{types:[B.TYPE_OBJECT],variadic:!0}]},min:{_func:this.functionMin,_signature:[{types:[B.TYPE_ARRAY_NUMBER,B.TYPE_ARRAY_STRING]}]},min_by:{_func:this.functionMinBy,_signature:[{types:[B.TYPE_ARRAY]},{types:[B.TYPE_EXPREF]}]},not_null:{_func:this.functionNotNull,_signature:[{types:[B.TYPE_ANY],variadic:!0}]},reverse:{_func:this.functionReverse,_signature:[{types:[B.TYPE_STRING,B.TYPE_ARRAY]}]},sort:{_func:this.functionSort,_signature:[{types:[B.TYPE_ARRAY_STRING,B.TYPE_ARRAY_NUMBER]}]},sort_by:{_func:this.functionSortBy,_signature:[{types:[B.TYPE_ARRAY]},{types:[B.TYPE_EXPREF]}]},starts_with:{_func:this.functionStartsWith,_signature:[{types:[B.TYPE_STRING]},{types:[B.TYPE_STRING]}]},sum:{_func:this.functionSum,_signature:[{types:[B.TYPE_ARRAY_NUMBER]}]},to_array:{_func:this.functionToArray,_signature:[{types:[B.TYPE_ANY]}]},to_number:{_func:this.functionToNumber,_signature:[{types:[B.TYPE_ANY]}]},to_string:{_func:this.functionToString,_signature:[{types:[B.TYPE_ANY]}]},type:{_func:this.functionType,_signature:[{types:[B.TYPE_ANY]}]},values:{_func:this.functionValues,_signature:[{types:[B.TYPE_OBJECT]}]}},this._interpreter=t}registerFunction(t,n,a){if(t in this.functionTable)throw new Error(`Function already defined: ${t}()`);this.functionTable[t]={_func:n.bind(this),_signature:a}}callFunction(t,n){const a=this.functionTable[t];if(a===void 0)throw new Error(`Unknown function: ${t}()`);return this.validateArgs(t,n,a._signature),a._func.call(this,n)}validateInputSignatures(t,n){for(let a=0;a<n.length;a+=1)if("variadic"in n[a]&&a!==n.length-1)throw new Error(`ArgumentError: ${t}() 'variadic' argument ${a+1} must occur last`)}validateArgs(t,n,a){var s,o;let r;this.validateInputSignatures(t,a);const i=a.filter(d=>{var g;return(g=!d.optional)!==null&&g!==void 0?g:!1}).length,l=(o=(s=a[a.length-1])===null||s===void 0?void 0:s.variadic)!==null&&o!==void 0?o:!1,u=n.length<i,c=n.length>a.length,p=u&&(!l&&i>1||l)?"at least ":"";if(l&&u||!l&&(u||c))throw r=a.length>1,new Error(`ArgumentError: ${t}() takes ${p}${i} argument${r&&"s"||""} but received ${n.length}`);let f,h,m;for(let d=0;d<a.length;d+=1){m=!1,f=a[d].types,h=this.getTypeName(n[d]);let g;for(g=0;g<f.length;g+=1)if(h!==void 0&&this.typeMatches(h,f[g],n[d])){m=!0;break}if(!m&&h!==void 0){const _=f.map(b=>this.TYPE_NAME_TABLE[b]).join(" | ");throw new Error(`TypeError: ${t}() expected argument ${d+1} to be type (${_}) but received type ${this.TYPE_NAME_TABLE[h]} instead.`)}}}typeMatches(t,n,a){if(n===B.TYPE_ANY)return!0;if(n===B.TYPE_ARRAY_STRING||n===B.TYPE_ARRAY_NUMBER||n===B.TYPE_ARRAY){if(n===B.TYPE_ARRAY)return t===B.TYPE_ARRAY;if(t===B.TYPE_ARRAY){let s;n===B.TYPE_ARRAY_NUMBER?s=B.TYPE_NUMBER:n===B.TYPE_ARRAY_STRING&&(s=B.TYPE_STRING);for(let o=0;o<a.length;o+=1){const r=this.getTypeName(a[o]);if(r!==void 0&&s!==void 0&&!this.typeMatches(r,s,a[o]))return!1}return!0}}else return t===n;return!1}getTypeName(t){switch(Object.prototype.toString.call(t)){case"[object String]":return B.TYPE_STRING;case"[object Number]":return B.TYPE_NUMBER;case"[object Array]":return B.TYPE_ARRAY;case"[object Boolean]":return B.TYPE_BOOLEAN;case"[object Null]":return B.TYPE_NULL;case"[object Object]":return t.jmespathType===O.TOK_EXPREF?B.TYPE_EXPREF:B.TYPE_OBJECT;default:return}}createKeyFunction(t,n){if(!this._interpreter)return;const a=this._interpreter;return o=>{const r=a.visit(t,o);if(!n.includes(this.getTypeName(r))){const i=`TypeError: expected one of (${n.map(l=>this.TYPE_NAME_TABLE[l]).join(" | ")}), received ${this.TYPE_NAME_TABLE[this.getTypeName(r)]}`;throw new Error(i)}return r}}}class Uu{constructor(){this._rootValue=null,this.runtime=new $u(this)}search(t,n){return this._rootValue=n,this.visit(t,n)}visit(t,n){let a,s,o,r,i,l,u,c,p,f,h;switch(t.type){case"Field":return n===null?null:_n(n)?(l=n[t.name],l===void 0?null:l):null;case"Subexpression":for(o=this.visit(t.children[0],n),f=1;f<t.children.length;f+=1)if(o=this.visit(t.children[1],o),o===null)return null;return o;case"IndexExpression":return u=this.visit(t.children[0],n),c=this.visit(t.children[1],u),c;case"Index":if(!Array.isArray(n))return null;let m=t.value;return m<0&&(m=n.length+m),o=n[m],o===void 0&&(o=null),o;case"Slice":if(!Array.isArray(n))return null;const d=[...t.children],g=this.computeSliceParams(n.length,d),[_,b,T]=g;if(o=[],T>0)for(f=_;f<b;f+=T)o.push(n[f]);else for(f=_;f>b;f+=T)o.push(n[f]);return o;case"Projection":if(h=this.visit(t.children[0],n),!Array.isArray(h))return null;for(p=[],f=0;f<h.length;f+=1)s=this.visit(t.children[1],h[f]),s!==null&&p.push(s);return p;case"ValueProjection":if(h=this.visit(t.children[0],n),!_n(h))return null;p=[];const S=Object.values(h);for(f=0;f<S.length;f+=1)s=this.visit(t.children[1],S[f]),s!==null&&p.push(s);return p;case"FilterProjection":if(h=this.visit(t.children[0],n),!Array.isArray(h))return null;const P=[],C=[];for(f=0;f<h.length;f+=1)a=this.visit(t.children[2],h[f]),Vn(a)||P.push(h[f]);for(let w=0;w<P.length;w+=1)s=this.visit(t.children[1],P[w]),s!==null&&C.push(s);return C;case"Comparator":switch(r=this.visit(t.children[0],n),i=this.visit(t.children[1],n),t.name){case O.TOK_EQ:o=ua(r,i);break;case O.TOK_NE:o=!ua(r,i);break;case O.TOK_GT:o=r>i;break;case O.TOK_GTE:o=r>=i;break;case O.TOK_LT:o=r<i;break;case O.TOK_LTE:o=r<=i;break;default:throw new Error(`Unknown comparator: ${t.name}`)}return o;case O.TOK_FLATTEN:const I=this.visit(t.children[0],n);if(!Array.isArray(I))return null;let $=[];for(f=0;f<I.length;f+=1)s=I[f],Array.isArray(s)?$=[...$,...s]:$.push(s);return $;case"Identity":return n;case"MultiSelectList":if(n===null)return null;for(p=[],f=0;f<t.children.length;f+=1)p.push(this.visit(t.children[f],n));return p;case"MultiSelectHash":if(n===null)return null;p={};let A;for(f=0;f<t.children.length;f+=1)A=t.children[f],p[A.name]=this.visit(A.value,n);return p;case"OrExpression":return a=this.visit(t.children[0],n),Vn(a)&&(a=this.visit(t.children[1],n)),a;case"AndExpression":return r=this.visit(t.children[0],n),Vn(r)?r:this.visit(t.children[1],n);case"NotExpression":return r=this.visit(t.children[0],n),Vn(r);case"Literal":return t.value;case O.TOK_PIPE:return u=this.visit(t.children[0],n),this.visit(t.children[1],u);case O.TOK_CURRENT:return n;case O.TOK_ROOT:return this._rootValue;case"Function":const R=[];for(let w=0;w<t.children.length;w+=1)R.push(this.visit(t.children[w],n));return this.runtime.callFunction(t.name,R);case"ExpressionReference":const U=t.children[0];return U.jmespathType=O.TOK_EXPREF,U;default:throw new Error(`Unknown node type: ${t.type}`)}}computeSliceParams(t,n){let[a,s,o]=n;if(o===null)o=1;else if(o===0){const i=new Error("Invalid slice, step cannot be 0");throw i.name="RuntimeError",i}const r=o<0;return a=a===null?r?t-1:0:this.capSliceRange(t,a,o),s=s===null?r?-1:t:this.capSliceRange(t,s,o),[a,s,o]}capSliceRange(t,n,a){let s=n;return s<0?(s+=t,s<0&&(s=a<0?-1:0)):s>=t&&(s=a<0?t-1:t),s}}const Fs=new Uu,Hu=B.TYPE_ANY,Ku=B.TYPE_ARRAY,Yu=B.TYPE_ARRAY_NUMBER,ju=B.TYPE_ARRAY_STRING,Gu=B.TYPE_BOOLEAN,qu=B.TYPE_EXPREF,Wu=B.TYPE_NULL,Ju=B.TYPE_NUMBER,zu=B.TYPE_OBJECT,Vu=B.TYPE_STRING;function Qu(e){return Ri.parse(e)}function Xu(e){return Ci.tokenize(e)}const Zu=(e,t,n)=>{Fs.runtime.registerFunction(e,t,n)};function ep(e,t){const n=Ri.parse(t);return Fs.search(n,e)}const tp=Fs,Ze={compile:Qu,registerFunction:Zu,search:ep,tokenize:Xu,TreeInterpreter:tp,TYPE_ANY:Hu,TYPE_ARRAY_NUMBER:Yu,TYPE_ARRAY_STRING:ju,TYPE_ARRAY:Ku,TYPE_BOOLEAN:Gu,TYPE_EXPREF:qu,TYPE_NULL:Wu,TYPE_NUMBER:Ju,TYPE_OBJECT:zu,TYPE_STRING:Vu},dt=class dt{static async appendPrompt(t,n){Go(t,LZString.compressToUTF16(JSON.stringify(n))).then(async()=>{cn().then(a=>{a=a.filter(s=>s.indexOf(this.DELIM_PROMPTS)!=-1),a.length>dt.MAX_PROMPTS_VALS&&Wa(a[0])})}).catch(a=>console.error("~IDB Failed | ",a))}static async appendVIR_products(t){t.forEach(n=>{let a=JSON.stringify({ts:Date.now(),name:n[1]});Go(n[0],LZString.compressToUTF16(a)).then(async()=>{}).catch(s=>console.error("~IDB Failed | ",s))})}static async keys(t,n){cn().then(a=>{a=a.filter(s=>s.indexOf(t)!=-1),n&&n(a)})}static async get(t,n){Ru(t).then(a=>{try{a=JSON.parse(LZString.decompressFromUTF16(a))}catch{}finally{n&&n(a)}})}static async entries(t,n){Nu().then(a=>{a=a.filter(s=>s[0].indexOf(t)!=-1),a=a.map(s=>{try{s[1]=JSON.parse(LZString.decompressFromUTF16(s[1]))}catch{}finally{}return s}),n&&n(a)})}static compr(t){return t}static decompr(t){return t}static async act(t,n,a){let s="";switch(t){case"PROMPTS_COUNT":cn().then(r=>{r=r.filter(i=>i.indexOf(this.DELIM_PROMPTS)!=-1),s=`There are ${r.length} prompts in local IDB storage. The current max is ${this.MAX_PROMPTS_VALS}.`,s&&a&&a(s)});break;case"PROMPTS_IMPORT":console.log("~ PROMPTS_IMPORT | ");break;case"PROMPTS_EXPORT":console.log("~ PROMPTS_EXPORT | ");break;case"PROMPTS_CLEAR":cn().then(r=>{r.forEach(i=>{i.indexOf(this.DELIM_PROMPTS)!=-1&&i.split(dt.DELIM_PROMPTS)[0]==n&&Wa(i)})}),s="The Prompt history has been removed for UPI: "+n,console.log("~ PROMPTS_CLEAR ------ | ",s);break;case"VIR_COUNT":cn().then(r=>{r=r.filter(i=>i.indexOf(this.DELIM_VIR)!=-1),s=`There are ${r.length} VNR names in local IDB storage.`,s&&a&&a(s)});break;case"VIR_CLEAR":let o=0;await cn().then(r=>{r.forEach(i=>{i.indexOf(this.DELIM_VIR)!=-1&&i.split(dt.DELIM_VIR)[0]==n&&(o++,Wa(i))})}),s=`The VNR Names have been removed for UPI: ${n} (Total Deleted: ${o})`;break;case"FEATURE_CLEAR":localStorage.getItem("feature_flags")&&localStorage.removeItem("feature_flags"),s="Features have been reset to default. Refresh.";break}console.log("~ resultMsg | ",s),s&&a&&a(s)}};dt.MAX_TYPEAHEAD_ROWS=14,dt.MAX_PROMPTS_VALS=50,dt.DELIM_PROMPTS="_",dt.DELIM_VIR="-",dt.DELIM_SNDX="|";let en=dt;const be=_d("AppState",()=>{const e=gt(),t="DEV",n="BMA Tourney v0.0.5 ",a="#app",s=St({APP__ROUTE_SYNC:"APP.ROUTE_SYNC",WC__TOURN_ACTION:"WC.TOURN_ACTION",WC__APP__HEAD_TOP:"WC.APP.HEAD_TOP",WC__APP__HEAD_TOP__LOGO:"WC.APP.HEAD_TOP.LOGO",WC__APP__HEAD_TOP__USER_PROFILE:"WC.APP.HEAD_TOP.USER_PROFILE",WC__APP__HEAD_MID:"WC.APP.HEAD_MID",WC__APP__HEAD_MID__HEAD_MID_LOBBY:"WC.APP.HEAD_MID.HEAD_MID_LOBBY",WC__APP__HEAD_MID__HEAD_MID_MY:"WC.APP.HEAD_MID.HEAD_MID_MY",WC__APP__HEAD_MID__HEAD_MID_COMPLETED:"WC.APP.HEAD_MID.HEAD_MID_COMPLETED",WC__APP__HEAD_MID__HEAD_MID_LEADERBOARD:"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD",WC__APP__HEAD_MID__HEAD_MID_SQUAD:"WC.APP.HEAD_MID.HEAD_MID_SQUAD",WC__APP__HEAD_SPORTS:"WC.APP.HEAD_SPORTS",WC__APP__HEAD_SPORTS__HEAD_SPORTS_DRAG_START:"WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START",WC__APP__FOOT:"WC.APP.FOOT",WC__APP__FOOT__ALL_SPORTS:"WC.APP.FOOT.ALL_SPORTS",WC__APP__FOOT__MY_TOURNEYS:"WC.APP.FOOT.MY_TOURNEYS",WC__APP__FOOT__LEADERBOARD:"WC.APP.FOOT.LEADERBOARD",WC__APP__FOOT__MY_PROFILE:"WC.APP.FOOT.MY_PROFILE",ROUTE__HOME_ONMOUNT:"ROUTE.HOME_ONMOUNT",ROUTE__HOME_HYDRATE:"ROUTE.HOME_HYDRATE",ROUTE__HOME__USER_PROFILE:"ROUTE.HOME.USER_PROFILE",SSE__CORE__TOURN_SYNC:"SSE.CORE.TOURN_SYNC",CANVAS__HYDRATE__STATUS:"CANVAS.HYDRATE.STATUS",SODAPOP__HYDRATE__COREBETSLIP:"SODAPOP.HYDRATE.COREBETSLIP",COREBETSLIP:"COREBETSLIP",COREBETSLIP__BET:"COREBETSLIP.BET",COREBETSLIP__SPREAD:"COREBETSLIP.SPREAD",COREBETSLIP__MONEY:"COREBETSLIP.MONEY",COREBETSLIP__TOTAL:"COREBETSLIP.TOTAL",COREBETSLIP__CLOSE:"COREBETSLIP.CLOSE",COREBETSLIP__INTERSYNC:"COREBETSLIP.INTERSYNC",COREBETSLIP__TDSYNC:"COREBETSLIP.TDSYNC"});let o=St([]),r=St([]);const i=A=>{o.push(A),o.length>10&&(o.shift(),console.log("[appState] coreTourn exceeded 10 items, removed oldest")),console.log(`[appState] coreTourn length: ${o.length}`)},l=A=>{r.push(A),r.length>10&&(r.shift(),console.log("[appState] coreBetSlip exceeded 10 items, removed oldest")),console.log(`[appState] coreBetSlip length: ${r.length}`)},u=()=>{const A=localStorage.getItem("session_user");if(console.log("[appState] Loading session_user from localStorage:",A),A)try{const R=JSON.parse(A);return console.log("[appState] Parsed session_user:",R),R}catch(R){console.error("Failed to parse session_user from localStorage:",R)}return console.log("[appState] No saved session, returning default"),{authenticated:!1,userName:"",name:"",fname:"",lname:"",email:"",token:"",guid:""}},c=ze({session_app:{online:!0,route:"",version:n+t,buildmode:t},session_log:[],session_ui:{orientation:"landscape",isTouch:"utils.isTouch()"},session_user:u()}),p=ze({commands:["clear","debug","export","feature","help","logout","reload","route","theme","version","workflow"],features:{theme:{state:"dark"},motif:{state:"brand"},lang:{state:"en"},sse:{state:!0},disable_existing_bet_btn:{state:!1},animation:{state:!0},audio:{state:!0},contextmenu:{state:!1},debug:{state:!1},guided_tour:{state:!1}},env_override:{DEV:{contextmenu:{state:!1}},QA:{contextmenu:{state:!0}},PROD:{contextmenu:{state:!1},sse:!0}}}),f=()=>{if(!localStorage.getItem("feature_flags"))localStorage.setItem("feature_flags",en.compr(JSON.stringify(p.value.features)));else{let A=en.decompr(localStorage.getItem("feature_flags"));A=Object.assign(p.value.features,JSON.parse(A));for(let R in A)typeof p.value?.env_override[t][R]<"u"&&(A[R]=p.value.env_override[t][R]);localStorage.setItem("feature_flags",en.compr(JSON.stringify(p.value.features=A)))}},h=()=>{const A=document.querySelector(a);if(A){const R=A.dataset;for(let U in R){const w=U.replace(/^sync/,""),q=Object.keys(p.value.features).find(V=>V.toLowerCase()===w.toLowerCase());if(q){const V=p.value.features[q]?.state;V&&(R[U]=V)}}}},m=(A="Theme",R={state:"dark"})=>{const U=document.querySelector(a);U&&(U.dataset["sync"+A]=R.state)},d=(A="Theme",R={state:"dark"})=>{if(localStorage.getItem("feature_flags")&&R){let w=JSON.parse(en.decompr(localStorage.getItem("feature_flags")));w[A]={state:R.state},localStorage.setItem("feature_flags",en.compr(JSON.stringify(p.value.features=w))),m(A,R),J.publish("APP.ROUTE_SYNC",`{ "${A}": ${JSON.stringify(R)}}`)}},g=A=>{const R=p.value?.features?.Lang?.state;let U=T.value.microcopy.language.filter(w=>w.code==R)[0]?.copy;if(U=U.filter(w=>w[0]==A)[0],U)return U[1]},_=(A=":version")=>{let[R,U,w]=A.split(" ");switch(R=R.toLocaleLowerCase(),w=="true"&&(w=!0),w=="false"&&(w=!1),R){case":version":neodigmToast.q(`Version Q ${c.value.session_app.version}`,"brand");break;case":feature":d(U,{state:w});break;case":route":neodigmToast.q(`route ${U}`,"brand"),e.push({name:U});break}};f(),h();const b=St({designer:"guided_tour",notifications:{unread:0}}),T=ze({sports:$t,microcopy:xu.getMeta()}),S=Ge(()=>c.value.session_user.fname+" "+c.value.session_user.lname),P=()=>{console.log("[appState] Saving session_user to localStorage:",c.value.session_user),localStorage.setItem("session_user",JSON.stringify(c.value.session_user))},C=()=>{localStorage.removeItem("session_user")};function I(A){return c.value.session_user.authenticated=!0,c.value.session_user.token=A,P(),c.value.session_app.route="chat"}function $(){return c.value.session_user.authenticated=!1,c.value.session_user.token="",c.value.session_user.guid="",C(),API_ORCH.setTJO(null),c.value.session_app.route="auth"}return{appCLIFeatures:p,appDesigner:b,appMeta:T,appSession:c,clearSessionUser:C,concatFirstLast:S,coreBetSlip:r,coreTourn:o,doCLI:_,doLogin:I,doLogout:$,hierTopics:s,i18n:g,pushCoreTourn:i,pushcoreBetSlip:l,saveSessionUser:P,setFeaturePersistPub:d}}),Ue=class Ue{static getTJO(){if(this.jsTJO)return this.jsTJO;let t=localStorage.getItem("tjo");return t&&(this.jsTJO=JSON.parse(t)),this.jsTJO}static setTJO(t){return t?localStorage.setItem("tjo",JSON.stringify(t)):localStorage.clear("tjo"),this.jsTJO=t}static setStateSignout(){typeof neodigmWired4Sound<"u"&&neodigmWired4Sound.sound(11),Ue.setTJO(null),location.reload()}static async doSignin(t,n=null){const a={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}},o=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity/signin",a)).json();o.ok?(typeof mvvLegit<"u"&&mvvLegit&&o?.accessToken&&mvvLegit.doSignin(o?.accessToken),n&&n(o)):typeof neodigmToast<"u"&&neodigmToast.q("Invalid User ID|Password")}static async doSignup(t,n=null){const a={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}},o=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity",a)).json();if(o.ok)typeof neodigmToast<"u"&&neodigmToast.q("Account created successfully!|Please sign in","success"),n&&n(o);else{const r=o?.error||o?.message||"Signup failed. Please try again.";typeof neodigmToast<"u"&&neodigmToast.q(r,"danger"),n&&n(o)}}static async checkUserName(t,n=null){const a={method:"POST",body:JSON.stringify({userName:t}),headers:{"Content-Type":"application/json"}},o=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity/checkUserName",a)).json();return n&&n(o),o}static async resetHash(t,n,a=null){typeof neodigmAgent<"u"?neodigmAgent.genChronSync():Date.now();const s=typeof neodigmUtils<"u"?neodigmUtils.genHash(n):n,o={method:"POST",body:JSON.stringify({guid:t,hash:s}),headers:Ue.genHeaders()},i=await(await fetch(this.API_baseURI+this.API_ver+"/acct/resetHash",o)).json();a&&a(i)}static genHeaders(t={}){let n={};return n.protomolecule=typeof neodigmAgent<"u"?neodigmAgent.genChronSync():Date.now(),n.Authorization="Bearer expired",n["Content-Type"]="application/json",Ue.getTJO()&&(n.Authorization="Bearer "+Ue.getTJO().tokens[0]),typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.class&&(n.role=SessionAcctEntity.oEntities.data.entity.class),typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.guid&&(n.guid=SessionAcctEntity.oEntities.data.entity.guid),typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.company&&(n.company=SessionAcctEntity.oEntities.data.entity.company),n}static async fetchTournaments(t=null){const n={method:"GET",headers:Ue.genHeaders()},s=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/coreTournaments",n)).json();return t&&t(s),s}static async fetchBetSlips(t,n="",a="",s=null){let o=`/m5t/${this.API_ver}/coreBetSlip/filter/${t}`;n&&(o+=`/${n}`),n&&a&&(o+=`/${a}`);const r={method:"GET",headers:Ue.genHeaders()},l=await(await fetch(this.API_baseURI+o,r)).json();return s&&s(l),l}static async fetchLeaderboard(t,n="",a=null){let s=`/m5t/${this.API_ver}/coreLeaderboard?tourney=${t}`;n&&(s+=`&user=${n}`);const o={method:"GET",headers:Ue.genHeaders()},i=await(await fetch(this.API_baseURI+s,o)).json();return a&&a(i),i}static async postBetSlips(t,n=null){const a=t.map(o=>{const r={method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json"}};return fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/coreBetSlip/",r).then(i=>i.json())}),s=await Promise.all(a);return n&&n(s),s}};Ue.API_baseURI="https://machfive-bmacdev-rest.onrender.com",Ue.API_ver="v5",Ue.jsState={},Ue.jsMeta={},Ue.jsTJO=null;let ve=Ue;const Kn={shootConfetti(){if(typeof confetti=="function"){let a=function(s,o){confetti({...t,...o,particleCount:Math.floor(e*s)})};var n=a,e=200,t={origin:{y:.7}};a(.25,{zIndex:304,spread:26,startVelocity:55}),a(.2,{zIndex:304,spread:60}),a(.35,{zIndex:304,spread:100,decay:.91,scalar:.8}),a(.1,{zIndex:304,spread:120,startVelocity:25,decay:.92,scalar:1.2}),a(.1,{zIndex:304,spread:120,startVelocity:45})}},hardReload(){const e=new URLSearchParams(window.location.search);e.set("reload",new Date().getTime());const t=e.toString();window.location.search=t},isJSON(e){let t=!1;try{t=typeof JSON.parse(e)}catch{}return t=="object"},isTouch:function(){return typeof document.body.ontouchstart<"u"},prettyTimeExt(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"})},formatDateLocal(e,t={}){if(!e)return"TBD";let n=new Date(e);!e.includes("Z")&&!e.match(/[+-]\d{2}:\d{2}$/)&&(n=new Date(e+"Z"));const a={month:"short",day:"numeric",hour:"numeric",minute:"2-digit"};return n.toLocaleString(void 0,{...a,...t})},shallowDelta(e,t){if(Object.keys(t).length==0&&Object.keys(e).length>0)return e;let n={};for(const a in t)e[a]&&t[a]!=e[a]&&(n[a]=e[a]);return Object.keys(n).length>0?n:t},genLorumIpsum(e=1){}},Wt=(e,t)=>{const n=e.__vccOpts||e;for(const[a,s]of t)n[a]=s;return n},np={class:"auth-page"},ap={__name:"splash_route",setup(e){const t=gt(),n=wi();return be(),setTimeout(()=>{n&&n.name=="splash_route"&&(mvvLegit&&mvvLegit.isRouteAllowed("home_route")?t.push({name:"home_route"}):t.push({name:"signin_route"}))},3e3),(a,s)=>(Xe(),ht("div",np,[...s[0]||(s[0]=[qt('<div class="auth-page-left" data-v-91dce2eb><div class="auth-bg" data-v-91dce2eb><div class="auth-bg-image" data-v-91dce2eb></div><div class="auth-bg-image" data-v-91dce2eb></div><div class="auth-bg-image" data-v-91dce2eb></div></div><div class="auth-overlay" data-v-91dce2eb></div><div class="auth-branding-content" data-v-91dce2eb><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-91dce2eb><p class="auth-branding-tagline" data-v-91dce2eb>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-91dce2eb>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-91dce2eb> © 2026 Bet Max Action. All rights reserved. </div></div>',1),k("div",{class:"auth-page-right"},[k("div",{class:"auth-card splash-content"},[k("p",{class:"splash-message"},"Loading your experience ..."),k("br"),k("br"),k("neodigm-juicebar",{role:"progressbar","data-n55-theme":"brand","data-n55-size":"medium",style:{"background-color":"#242424"}},[k("div")])])],-1)])]))}},Jo=Wt(ap,[["__scopeId","data-v-91dce2eb"]]);class sp extends HTMLElement{connectedCallback(){this.attachShadow({mode:"open"}),this.render()}static get observedAttributes(){return["sport","data-sync-theme"]}attributeChangedCallback(){this.shadowRoot&&this.render()}render(){this.getAttribute("sport");const n=document.getElementById("app")?.getAttribute("data-sync-theme").toLowerCase()||"dark",a=n==="dark";let s=this.getAttribute("data-sport-group")||"Soccer",o,r;s==="Multi"?(o="Multi",r=`var( --sport-icon__Multi--${n} )`):(o=s.replaceAll(" ","_"),r=`var( --sport-icon__${o}--${n} )`),this.shadowRoot.innerHTML=`
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
          background-image: ${r};
        }
      </style>
      <div class="icon"></div>
    `}}customElements.define("bma-sport-icon",sp);class op extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-bma-tourn-caption","data-bma-tourn-entities","data-bma-tourn-entry_fee","data-bma-tourn-matches","data-bma-tourn-matches_expanded","data-bma-tourn-prize_distro","data-bma-tourn-sports_allowed","data-bma-tourn-status","data-sync-theme","data-bma-tourn-tagline","data-bma-tourn-tournament_dollars","data-bma-tourn-tags"]}connectedCallback(){this.render(),this.observeTheme(),this.attachEventListeners()}dispatchCardEvent(t,n={}){const a=new CustomEvent("bma-tournament-action",{bubbles:!0,composed:!0,detail:{action:t,tournamentId:this.getAttribute("data-bma-tourn-id"),tournamentGuid:this.getAttribute("data-bma-tourn-guid"),tournamentStatus:this.status,...n}});this.dispatchEvent(a)}attachEventListeners(){this.shadowRoot.addEventListener("click",t=>{const n=t.target.closest(".btn-info"),a=t.target.closest(".btn-join"),s=t.target.closest(".btn-play"),o=t.target.closest("bma-sport-icon");if(n){t.stopPropagation(),this.dispatchCardEvent("INFO");return}if(a){t.stopPropagation(),this.dispatchCardEvent("JOIN");return}if(s){t.stopPropagation(),this.dispatchCardEvent("PLAY");return}if(o){t.stopPropagation();const r=o.getAttribute("sport"),i=this.getSportInfo(r);this.dispatchCardEvent("SPORT_ICON",{sportKey:r,sportTitle:i.title,sportDescription:i.description});return}t.target.closest(".card")&&this.dispatchCardEvent("FOCUS")})}attributeChangedCallback(t,n,a){n!==a&&this.render()}observeTheme(){const t=document.getElementById("app");if(!t)return;new MutationObserver(()=>{this.render()}).observe(t,{attributes:!0,attributeFilter:["data-sync-theme"]})}getTheme(){return document.getElementById("app")?.getAttribute("data-sync-theme")||"dark"}get caption(){return this.getAttribute("data-bma-tourn-caption")||"Tournament"}get tournament_dollars(){return this.getAttribute("data-bma-tourn-tournament_dollars")||"0"}get entities(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const n=JSON.parse(t);return Array.isArray(n)?n.find(s=>Array.isArray(s))?.length||"0":n?.guids?.length||"0"}catch{return"0"}return"0"}get entitiesGuids(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const n=JSON.parse(t);return Array.isArray(n)?n.find(s=>Array.isArray(s))||[]:n?.guids||[]}catch{return[]}return[]}get entitiesData(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const n=JSON.parse(t);if(Array.isArray(n)){const a=n.find(o=>o&&typeof o=="object"&&!Array.isArray(o));return{current:n.find(o=>Array.isArray(o))?.length||0,max:parseInt(a?.max)||100}}return{current:n?.guids?.length||0,max:n?.max||100}}catch{return{current:0,max:100}}return{current:0,max:100}}isUserParticipating(){const n=document.getElementById("app")?.dataset?.userGuid;return n?this.entitiesGuids.includes(n):!1}getUserBadge(){const n=document.getElementById("app")?.dataset?.userGuid;if(!n)return null;const a=this.getAttribute("data-bma-tourn-tags");if(!a)return null;try{const s=JSON.parse(a);if(!Array.isArray(s))return null;const o=s.find(r=>typeof r=="object"&&r!==null?r[n]&&r[n].startsWith("--badge__ribbon--"):!1);return o?o[n]:null}catch{return null}}getBadgeClass(){const t=this.getUserBadge();if(!t)return"";const n=t.match(/--badge__ribbon--(\w+)/);return n?n[1]:""}getSportInfo(t){const n=$t.find(a=>a.key===t);return n?{title:n.title,description:n.description}:{title:t,description:t}}get matches(){let t=this.getAttribute("data-bma-tourn-matches");return t&&(t=JSON.parse(t)),t?.length||"0"}get matches_expanded(){let t=this.getAttribute("data-bma-tourn-matches_expanded");return t&&(t=JSON.parse(t)),t||null}get marqueeText(){const t=this.matches_expanded;return!t||t.length===0?"   Exciting Sports Matchups Coming Soon!   ":"  "+t.map(a=>{const s=a.title||"Match";let o="TBD";if(a.scheduled_at)try{o=new Date(a.scheduled_at).toLocaleString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit",hour12:!0})}catch{o=a.scheduled_at}return`  ${s} @ ${o}  `}).join(" • ")+"  "}get tagline(){return this.getAttribute("data-bma-tourn-tagline")||""}get status(){return this.getAttribute("data-bma-tourn-status")||"upcoming"}get prizeDistro(){const t=this.getAttribute("data-bma-tourn-prize_distro");if(!t)return null;try{return JSON.parse(t)}catch{return t}}get entryFee(){return this.getAttribute("data-bma-tourn-entry_fee")||"Free"}get sportsAllowed(){const t=this.getAttribute("data-bma-tourn-sports_allowed");if(!t)return[];try{const n=JSON.parse(t);return Array.isArray(n)?n.map(a=>typeof a=="object"&&a.sport_key?a.sport_key:a):[n]}catch{return[t]}}get sportsDisplay(){const t=this.sportsAllowed;if(!Array.isArray(t)||t.length===0)return'<bma-sport-icon sport="default" data-sport-group="default"></bma-sport-icon>';const n=Math.min(t.length,3);let a="";for(let s=0;s<n;s++){const o=t[s].key,r=$t.find(l=>l.key===o),i=r?r.group:"default";a+=`<bma-sport-icon sport="${o}" data-sport-group="${i}"></bma-sport-icon>`}return t.length>3&&(a+=`<span class="sport-count">+${t.length-3}</span>`),a}render(){const t=this.getTheme(),n=t==="dark",a=this.getAttribute("data-sync-theme")||t;this.shadowRoot.innerHTML=`
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
          background: ${n?"linear-gradient(135deg, var( --app-core-color--gray-3__dark--brand ) 0%, var( --app-core-color--gray-2__dark--brand ) 100%)":"linear-gradient(135deg, var( --app-core-color--gray-7__light--brand ) 0%, var( --app-core-color--gray-6__light--brand ) 100%)"};

          border: none;
          border-radius: 10px;
          color: ${n?"#fff":"#000"};
          cursor: pointer;
          height: 100%;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          user-select: none;
          transition: all 0.3s ease;
          box-shadow:
            0 2px 8px rgba(0,0,0,0.2);
        }

        .card:hover {
          transform: scale(1.02);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
        }

        /* Status-based card accents */
        .card[data-bma-tourn-status="UPCOMING"] {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3), 0 0 8px rgba(0, 230, 118, 0.1);
        }

        .card[data-bma-tourn-status="UPCOMING"]:hover {
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4), 0 0 16px rgba(0, 230, 118, 0.15);
        }

        .card[data-bma-tourn-status="LOCKED"] {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3), 0 0 8px rgba(255, 215, 0, 0.1);
        }

        .card[data-bma-tourn-status="LOCKED"]:hover {
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4), 0 0 16px rgba(255, 215, 0, 0.15);
        }

        .card[data-bma-tourn-status="COMPLETED"] {
          opacity: 0.9;
        }

        .card[data-bma-tourn-status="COMPLETED"]:hover {
          opacity: 1;
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
          border-radius: 8px;
          padding: 8px 4px;
          position: relative;
        }

        .info-item .info-cell > P {
          margin: 4px 0;
        }

        .info-cell .info-label {
          font-size: 0.65rem;
          color: #fafafa;
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 1.5px;
          margin-bottom: 8px;
        }

        .info-cell .info-value {
          font-size: 1.25rem;
          font-weight: 700;
          color: ${n?"var(--app-core-color--yellow-3__dark--brand, #F7C60D)":"#FFB700"};
          font-family: 'Monaco', 'Courier New', monospace;
          text-shadow: ${n?"0 1px 2px rgba(0, 0, 0, 0.5)":"none"};
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
          background: rgba(0, 230, 118, 0.15);
          color: ${n?"#00E676":"#00C853"};
          border: 1px solid rgba(0, 230, 118, 0.3);
          position: relative;
          overflow: hidden;
          font-weight: 600;
        }

        .btn-info:hover {
          background: rgba(0, 230, 118, 0.25);
          border-color: rgba(0, 230, 118, 0.4);
          box-shadow: 0 0 12px rgba(0, 230, 118, 0.3);
          color: ${n?"#00FF88":"#00E676"};
        }

        .btn-join {
          background: linear-gradient(135deg, #00C853 0%, #F7C60D 100%);
          color: #fff;
          display: none;
          position: relative;
          overflow: hidden;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
          font-weight: 700;
        }

        .btn-join::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 10px,
            rgba(0, 0, 0, 0.02) 10px,
            rgba(0, 0, 0, 0.02) 20px
          );
          pointer-events: none;
        }

        .btn-join.visible {
          display: block;
        }

        .btn-join:hover {
          background: linear-gradient(135deg, #FFD700 0%, #00C853 100%);
          transform: translateY(-1px);
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.25);
        }

        .btn-play {
          background: linear-gradient(180deg, #FFD700 0%, #FFC107 100%);
          color: #000;
          display: none;
          position: relative;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3), 0 2px 4px rgba(0, 0, 0, 0.15);
        }

        .btn-play.visible {
          display: block;
        }

        .btn-play:hover {
          background: linear-gradient(180deg, #FFE033 0%, #FFD700 100%);
          transform: translateY(-1px);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 3px 6px rgba(0, 0, 0, 0.2);
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
          color: #fafafa;
        }

        .progress-bar {
          width: 100%;
          height: 8px;
          background: ${n?"rgba(0, 0, 0, 0.3)":"var(--app-core-color--gray-6__light--brand)"};
          border-radius: 4px;
          overflow: hidden;
          position: relative;
          border: 1px solid rgba(0, 230, 118, 0.1);
        }

        .progress-fill {
          height: 100%;
          border-radius: 4px;
          animation: fillProgress 3.2s ease-in forwards;
          background: linear-gradient(90deg, #00C853 0%, #00E676 50%, #00C853 100%);
          background-size: 200% 100%;
          position: relative;
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
    `}}customElements.define("bma-tournament-card",op);class rp extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.setupEventListeners(),setTimeout(()=>{const t=this.shadowRoot.querySelector(".content_stake_text input");t&&t.focus()},100)}static get observedAttributes(){return["data-content-team-points","data-content-odds","data-content-stake-text","data-content-type","data-abbreviated-title","data-scheduled-at","data-stake","data-payout"]}attributeChangedCallback(t,n,a){if(n!==a){if(t==="data-stake")return;if(t==="data-payout"){this.updatePayoutDisplay();return}this.render()}}get teamPoints(){return this.getAttribute("data-content-team-points")||""}get odds(){return this.getAttribute("data-content-odds")||"0"}get stake(){return this.getAttribute("data-content-stake-text")||"0"}get type(){return this.getAttribute("data-content-type")||""}get abbreviatedTitle(){return this.getAttribute("data-abbreviated-title")||""}get scheduledAt(){const t=this.getAttribute("data-scheduled-at")||"";return t?Kn.formatDateLocal(t):""}get payout(){const t=this.getAttribute("data-payout")||"0",n=parseFloat(t);return isNaN(n)?"0.00":n.toFixed(2)}updatePayoutDisplay(){const t=this.shadowRoot?.querySelector(".payout-value");t&&(t.textContent=this.payout)}setupEventListeners(){const t=this.shadowRoot.querySelector(".grid_close button");t&&t.addEventListener("click",()=>{J.publish("COREBETSLIP.CLOSE",JSON.stringify({teamPoints:this.teamPoints,odds:this.odds,stake:this.stake,type:this.type,abbreviatedTitle:this.abbreviatedTitle,scheduledAt:this.getAttribute("data-scheduled-at"),timestamp:Date.now()})),this.dispatchEvent(new CustomEvent("bma-bet-entry-remove",{bubbles:!0,composed:!0,detail:{teamPoints:this.teamPoints,odds:this.odds,stake:this.stake,type:this.type,abbreviatedTitle:this.abbreviatedTitle,scheduledAt:this.getAttribute("data-scheduled-at")}}))});const n=this.shadowRoot.querySelector(".content_stake_text input");n&&n.addEventListener("input",a=>{const s=a.target.value;this.setAttribute("data-stake",s)})}render(){this.shadowRoot.innerHTML=`
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
    `,this.setupEventListeners()}}customElements.define("bma-bet-entry",rp);class ip extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-match-id","data-match-guid","data-match-title","data-match-short-title","data-scheduled-at","data-home-team","data-away-team","data-odds-markets","data-is-disabled","data-sync-theme","data-scoreboard","data-sport-key"]}get matchId(){return this.getAttribute("data-match-id")||""}get matchGuid(){return this.getAttribute("data-match-guid")||""}get matchTitle(){return this.getAttribute("data-match-title")||""}get shortTitle(){return this.getAttribute("data-match-short-title")||this.matchTitle}get scheduledAt(){return this.getAttribute("data-scheduled-at")||""}get homeTeam(){return this.getAttribute("data-home-team")||"Home"}get awayTeam(){return this.getAttribute("data-away-team")||"Away"}get oddsMarkets(){const t=this.getAttribute("data-odds-markets");if(!t)return null;try{return JSON.parse(t)}catch(n){return console.error("[bma-bet-match-card] Error parsing odds_markets:",n),null}}get isDisabled(){return this.getAttribute("data-is-disabled")==="true"}get theme(){return this.getAttribute("data-sync-theme")||"dark"}get scoreboard(){const t=this.getAttribute("data-scoreboard");if(!t)return null;try{return JSON.parse(t)}catch(n){return console.error("[bma-bet-match-card] Error parsing scoreboard:",n),null}}get sportKey(){return this.getAttribute("data-sport-key")||""}get sportGroup(){const t=this.sportKey;if(!t)return"";const n=$t.find(a=>a.key===t);return n?n.group:""}connectedCallback(){this.render(),this.startCountdownTimer()}disconnectedCallback(){this.stopCountdownTimer()}startCountdownTimer(){this.stopCountdownTimer(),this.countdownInterval=setInterval(()=>{this.updateCountdown()},6e4)}stopCountdownTimer(){this.countdownInterval&&(clearInterval(this.countdownInterval),this.countdownInterval=null)}updateCountdown(){const t=this.shadowRoot?.querySelector(".countdown");t&&(t.textContent=this.getCountdownText())}attributeChangedCallback(t,n,a){n!==a&&this.render()}formatDate(t){if(!t)return"TBD";let n=new Date(t);return!t.includes("Z")&&!t.match(/[+-]\d{2}:\d{2}$/)&&(n=new Date(t+"Z")),n.toLocaleString(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}getCountdownText(){if(!this.scheduledAt)return"";const t=new Date,n=new Date(this.scheduledAt);!this.scheduledAt.includes("Z")&&!this.scheduledAt.match(/[+-]\d{2}:\d{2}$/)&&n.setTime(new Date(this.scheduledAt+"Z").getTime());const a=n-t;if(a<=0)return"";const s=Math.floor(a/(1e3*60*60)),o=Math.floor(a%(1e3*60*60)/(1e3*60));return s>24?`${Math.floor(s/24)}d ${s%24}h`:s>0?`${s}h ${o}m`:o>5?`${o} min`:"Starting Soon"}getGameStatus(){const t=this.getCountdownText();if(t)return{type:"upcoming",text:t,color:"#F7C60D"};const n=this.scoreboard;if(n&&n.time_remaining){const a=n.time_remaining.toLowerCase();if(a==="final")return{type:"final",text:"Final",color:"#969696"};if(a==="in progress"||a.includes("q")||a.includes("half")||a.includes("period")){const s=n.home_score!==void 0&&n.home_score!==null||n.away_score!==void 0&&n.away_score!==null,o=n.period!==void 0&&n.period!==null&&n.period!==0;if(s||o)return{type:"live",text:n.time_remaining,color:"#00E676"}}}return{type:"scheduled",text:this.formatDate(this.scheduledAt),color:"#969696"}}handleButtonClick(t,n,a,s,o){t.stopPropagation();const r=t.currentTarget,i=r.classList.contains("btn--active"),l={matchId:this.matchId,matchGuid:this.matchGuid,matchTitle:this.matchTitle,abbreviatedTitle:this.shortTitle,homeTeam:this.homeTeam,awayTeam:this.awayTeam,scheduledAt:this.scheduledAt,type:n,team:a,price:s,point:o,timestamp:Date.now()};this.dispatchEvent(new CustomEvent("bet-button-click",{bubbles:!0,composed:!0,detail:{betData:l,isActive:i,button:r}}))}renderButton(t,n,a,s){if(!a)return'<button class="btn btn--empty" disabled></button>';const o=a.price,r=a.point;let i="";return t==="spread"?i=`${r>0?`+${r}`:r}<br>${o}`:t==="money"?i=o:t==="total"&&(i=`${s}${r}<br>${o}`),`<button class="btn"
                    data-bet-type="${t}"
                    data-team="${n}"
                    data-price="${o}"
                    ${r?`data-point="${r}"`:""}>
            ${i}
        </button>`}render(){const t=this.theme==="dark",n=this.oddsMarkets,a=n&&(n.h2h||n.totals||n.spreads),s=!this.isDisabled&&a,o=this.getGameStatus(),r=this.scoreboard,i=r?.home_score||0,l=r?.away_score||0,u=o?.type==="live"||o?.type==="final",c=n?.spreads?.outcomes?.find(g=>g.name===this.homeTeam),p=n?.spreads?.outcomes?.find(g=>g.name===this.awayTeam),f=n?.h2h?.outcomes?.find(g=>g.name===this.homeTeam),h=n?.h2h?.outcomes?.find(g=>g.name===this.awayTeam),m=n?.totals?.outcomes?.find(g=>g.name==="Over"),d=n?.totals?.outcomes?.find(g=>g.name==="Under");this.shadowRoot.innerHTML=`
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

                /* Game state variations - subtle header border treatment */
                .card--upcoming .header {
                    border-bottom: 2px solid transparent;
                    background-image: linear-gradient(
                        90deg,
                        transparent 0%,
                        rgba(247, 198, 13, 0.2) 10%,
                        rgba(247, 198, 13, 0.4) 50%,
                        rgba(247, 198, 13, 0.2) 90%,
                        transparent 100%
                    );
                    background-size: 100% 2px;
                    background-position: 0 100%;
                    background-repeat: no-repeat;
                }

                .card--live .header {
                    border-bottom: 2px solid transparent;
                    position: relative;
                    overflow: hidden;
                }

                .card--live .header::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: -100%;
                    width: 100%;
                    height: 2px;
                    background: linear-gradient(
                        90deg,
                        transparent 0%,
                        rgba(0, 230, 118, 0.4) 20%,
                        rgba(0, 230, 118, 0.8) 50%,
                        rgba(0, 230, 118, 0.4) 80%,
                        transparent 100%
                    );
                    animation: slideGradient 3s linear infinite;
                }

                @keyframes slideGradient {
                    0% {
                        left: -100%;
                    }
                    100% {
                        left: 100%;
                    }
                }

                .card--final {
                    opacity: 0.85;
                }

                .card--scheduled {
                    /* No special treatment, uses default styling */
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
                    gap: 8px;
                    justify-content: flex-start;
                }

                .date-status bma-sport-icon {
                    flex-shrink: 0;
                }

                .date {
                    font-size: 0.8rem;
                    color: ${t?"#F7C60D":"#d4a800"};
                    font-weight: 500;
                    white-space: nowrap;
                    display: flex;
                    align-items: center;
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

            <div class="card ${o?`card--${o.type}`:""}">
                <div class="header">
                    <div class="date-status">
                        ${this.sportKey?`
                            <bma-sport-icon
                                sport="${this.sportKey}"
                                data-sport-group="${this.sportGroup}"
                                style="width: 24px; height: 24px; flex-shrink: 0;">
                            </bma-sport-icon>
                        `:""}
                        <div class="date">${this.formatDate(this.scheduledAt)}</div>
                        ${o&&o.type!=="scheduled"?`
                            <div class="status-badge status-badge--${o.type}">
                                ${o.type==="live"?'<span class="live-dot"></span>':""}
                                <span class="countdown">${o.text}</span>
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
                            ${this.renderButton("spread","home",c)}
                            ${this.renderButton("money","home",f)}
                            ${this.renderButton("total","over",m,"O")}
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
                            ${this.renderButton("spread","away",p)}
                            ${this.renderButton("money","away",h)}
                            ${this.renderButton("total","under",d,"U")}
                        </div>
                    `:""}
                </div>
            </div>
        `,s&&this.shadowRoot.querySelectorAll(".btn:not(.btn--empty)").forEach(g=>{const _=g.dataset.betType,b=g.dataset.team,T=g.dataset.price,S=g.dataset.point||null;g.addEventListener("click",P=>this.handleButtonClick(P,_,b,T,S))})}}customElements.define("bma-bet-match-card",ip);class lp extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}static get observedAttributes(){return["data-match-guid","data-match-title","data-match-scheduled-at","data-match-home-team","data-match-away-team","data-match-home-score","data-match-away-score","data-match-scoreboard","data-match-sport-id","data-sync-theme"]}attributeChangedCallback(t,n,a){n!==a&&this.render()}get matchGuid(){return this.getAttribute("data-match-guid")||""}get matchTitle(){return this.getAttribute("data-match-title")||"Match"}get scheduledAt(){return this.getAttribute("data-match-scheduled-at")||""}get homeTeam(){return this.getAttribute("data-match-home-team")||"Home"}get awayTeam(){return this.getAttribute("data-match-away-team")||"Away"}get homeScore(){const t=this.getAttribute("data-match-home-score");return t!=null&&t!==""?t:null}get awayScore(){const t=this.getAttribute("data-match-away-score");return t!=null&&t!==""?t:null}get scoreboardData(){const t=this.getAttribute("data-match-scoreboard");if(!t)return null;try{return typeof t=="string"?JSON.parse(t):t}catch(n){return console.warn("[bma-match-status] Failed to parse scoreboard data:",n),null}}get sportId(){return this.getAttribute("data-match-sport-id")||""}get theme(){return this.getAttribute("data-sync-theme")||"dark"}getMatchStatus(){const t=this.scoreboardData,n=this.homeScore!==null&&this.awayScore!==null;let a=!1;if(this.scheduledAt){let r=this.scheduledAt;!r.includes("Z")&&!r.match(/[+-]\d{2}:\d{2}$/)&&(r=r+"Z");const i=new Date(r),l=new Date(Date.now()-300*1e3);a=i<l}let s="UPCOMING",o=null;if(t?.time_remaining){const r=t.time_remaining;r==="Final"?(s="FINAL",o="Final"):r==="In Progress"?a?(s="IN_PROGRESS",o="In Progress"):(s="UPCOMING",o="Upcoming"):(s="IN_PROGRESS",o=r)}else n?(s="FINAL",o="Final"):(s="UPCOMING",o="Upcoming");return{status:s,timeRemaining:o}}render(){const{status:t,timeRemaining:n}=this.getMatchStatus(),a=this.homeScore!==null&&this.awayScore!==null,s=this.scheduledAt?Kn.formatDateLocal(this.scheduledAt,{timeZoneName:"short"}):"",o=t==="FINAL"?"match-status-card--past":"";this.shadowRoot.innerHTML=`
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

      <div class="match-status-card ${o}" data-sync-theme="${this.theme}">
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
    `}}customElements.define("bma-match-status",lp);class Dt extends HTMLElement{static currentlyExpanded=null;constructor(){super(),this.attachShadow({mode:"open"}),this.expanded=!1}static get observedAttributes(){return["data-rank","data-username","data-user-guid","data-tournament-dollars","data-total-betslips","data-total-payout","data-combined-betslips","data-user-matches","data-badge-class","data-is-current-user","data-sync-theme"]}get rank(){return this.getAttribute("data-rank")||""}get username(){return this.getAttribute("data-username")||"Unknown"}get userGuid(){return this.getAttribute("data-user-guid")||""}get tournamentDollars(){return this.getAttribute("data-tournament-dollars")||"0"}get totalBetslips(){return this.getAttribute("data-total-betslips")||"0"}get totalPayout(){return this.getAttribute("data-total-payout")||"0"}get combinedBetslips(){const t=this.getAttribute("data-combined-betslips");if(!t)return[];try{return JSON.parse(t)}catch(n){return console.error("[bma-leaderboard-card] Error parsing combined_betslips:",n),[]}}get userMatches(){const t=this.getAttribute("data-user-matches");if(!t)return[];try{return JSON.parse(t)}catch(n){return console.error("[bma-leaderboard-card] Error parsing user_matches:",n),[]}}get badgeClass(){return this.getAttribute("data-badge-class")||""}get isCurrentUser(){return this.getAttribute("data-is-current-user")==="true"}get theme(){return this.getAttribute("data-sync-theme")||"dark"}connectedCallback(){this.render(),this.attachEventListeners()}attributeChangedCallback(t,n,a){n!==a&&(this.render(),this.attachEventListeners())}toggleExpanded(){Dt.currentlyExpanded&&Dt.currentlyExpanded!==this&&Dt.currentlyExpanded.collapse(),this.expanded=!this.expanded;const t=this.shadowRoot.querySelector(".leaderboard-card__details"),n=this.shadowRoot.querySelector(".expand-icon");if(this.expanded){t.style.display="block",n.textContent="▼",Dt.currentlyExpanded=this;const a=document.querySelector("body > neodigm-sodapop");a&&a.scrollTo(0,0)}else t.style.display="none",n.textContent="▶",Dt.currentlyExpanded===this&&(Dt.currentlyExpanded=null)}collapse(){this.expanded=!1;const t=this.shadowRoot.querySelector(".leaderboard-card__details"),n=this.shadowRoot.querySelector(".expand-icon");t&&(t.style.display="none"),n&&(n.textContent="▶")}attachEventListeners(){const t=this.shadowRoot.querySelector(".leaderboard-card");t&&t.addEventListener("click",()=>this.toggleExpanded())}renderBetsTable(){const t=this.combinedBetslips,n=this.userMatches;if(!t||t.length===0)return'<p class="no-bets">No bets available</p>';const a=t.filter(i=>{const l=i.bet||[];if(l.length===0)return!1;const u=l[0],c=Object.keys(u).filter(p=>p!=="short_title")[0];return u[c]?.reconciled===!0});if(a.length===0)return'<p class="no-bets">No reconciled bets</p>';const s={};n.forEach(i=>{const l=i.guid||i.id||i.odds_id;l&&(s[l]=i)});const o={};a.forEach(i=>{const l=i.coreMatches__guid||i.match_guid||i.odds_id||"unknown";o[l]||(o[l]={bets:[],matchTitle:"Unknown Match",sportKey:"default"});const u=s[l];if(u){o[l].matchTitle=u.short_title||u.title||"Unknown Match";const c=u.sport_id,p=$t.find(f=>f.key===c);o[l].sportKey=p?.group||"default"}o[l].bets.push(i)});let r="";return Object.keys(o).forEach(i=>{const l=o[i],u=l.sportKey||"default",c=l.matchTitle||"Unknown Match";r+=`
                <div class="match-group-header">
                    <bma-sport-icon data-sport-group="${u}"></bma-sport-icon>
                    <span class="match-title">${c}</span>
                </div>
            `,r+=`
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
            `,l.bets.forEach(p=>{const f=p.bet||[];if(f.length===0)return;const h=f[0],m=Object.keys(h).filter(_=>_!=="short_title")[0],d=h[m],g=parseFloat(d.payout||0)>0;r+=`
                    <tr class="${g?"bet-win":"bet-loss"}">
                        <td class="bet-selection">${m}</td>
                        <td class="bet-type">${d.type||"-"}</td>
                        <td class="bet-odds">${d.odds>0?"+":""}${d.odds||"-"}</td>
                        <td class="bet-stake">$${parseFloat(d.stake||0).toFixed(2)}</td>
                        <td class="bet-payout ${g?"payout-win":"payout-loss"}">$${parseFloat(d.payout||0).toFixed(2)}</td>
                    </tr>
                `}),r+=`
                    </tbody>
                </table>
            `}),r}render(){const t=this.isCurrentUser?"leaderboard-card--current-user":"",n=this.badgeClass?`<div class="badge-trophy ${this.badgeClass}"></div>`:"";this.shadowRoot.innerHTML=`
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

                /* Match Group Header Band */
                .match-group-header {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 0.75rem 1rem;
                    margin-bottom: 0.5rem;
                    background: linear-gradient(135deg, rgba(46, 139, 87, 0.15) 0%, rgba(10, 10, 10, 0.6) 100%);
                    border-left: 3px solid var(--app-core-color--yellow-3__dark--brand, #F7C60D);
                    border-radius: 6px;
                }

                .match-group-header:not(:first-child) {
                    margin-top: 1.5rem;
                }

                .match-title {
                    font-size: 0.875rem;
                    font-weight: 700;
                    color: var(--app-core-color--yellow-3__dark--brand, #F7C60D);
                    letter-spacing: 0.5px;
                }

                .match-group-header bma-sport-icon {
                    flex-shrink: 0;
                }

                /* Bets Table */
                .bets-table {
                    width: 100%;
                    border-collapse: collapse;
                    font-size: 0.875rem;
                    background: linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(0, 0, 0, 0.3) 100%);
                    border-radius: 8px;
                    overflow: hidden;
                    margin-bottom: 1rem;
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
        `}}customElements.define("bma-leaderboard-card",Dt);class Ni{static isPayout(t){if(!t?.Bet||!t?.Match)return console.error("[CoreBetSlip.isPayout] Invalid bet object - missing Bet or Match data"),!1;const{type:n,scope:a}=t.Bet,{home_team_id:s,home_team_score:o,away_team_id:r,away_team_score:i}=t.Match,l=n?.toUpperCase()||"",u=parseFloat(o)||0,c=parseFloat(i)||0;if(u===0&&c===0)return console.warn("[CoreBetSlip.isPayout] Invalid scores - both teams have 0 points"),!1;switch(console.log(`[CoreBetSlip.isPayout] Evaluating ${l} bet:`,{home:`${s} (${u})`,away:`${r} (${c})`,scope:a}),l){case"MONEY":return this._evaluateMoneyline(a.team_id,s,r,u,c);case"SPREAD":return this._evaluateSpread(a.team_id,a.point,s,r,u,c);case"TOTAL":return this._evaluateTotal(a.over,a.under,u,c);case"PROP":return console.warn("[CoreBetSlip.isPayout] PROP bet evaluation not implemented"),!1;case"PARLAY":return console.warn("[CoreBetSlip.isPayout] PARLAY bet evaluation not implemented"),!1;default:return console.warn("[CoreBetSlip.isPayout] Unknown bet type:",l),!1}}static _evaluateMoneyline(t,n,a,s,o){const r=t===n,i=t===a;if(!r&&!i)return console.warn("[CoreBetSlip.isPayout] Betted team does not match home or away team"),!1;const l=s>o,u=o>s;if(s===o)return console.log("[CoreBetSlip.isPayout] MONEY - PUSH (tie game)"),!1;const p=r&&l||i&&u;return console.log(`[CoreBetSlip.isPayout] MONEY - ${p?"WON":"LOST"}`),p}static _evaluateSpread(t,n,a,s,o,r){const i=t===a,l=t===s;if(!i&&!l)return console.warn("[CoreBetSlip.isPayout] Betted team does not match home or away team"),!1;const u=parseFloat(n)||0;let c=o,p=r;i?c=o+u:p=r+u;const f=c>p,h=p>c;if(c===p)return console.log("[CoreBetSlip.isPayout] SPREAD - PUSH (exact spread)"),!1;const d=i&&f||l&&h;return console.log(`[CoreBetSlip.isPayout] SPREAD (${u>0?"+":""}${u}) - ${d?"WON":"LOST"}`),d}static _evaluateTotal(t,n,a,s){const o=a+s,r=t&&t!=="";if(!r&&!(n&&n!==""))return console.warn("[CoreBetSlip.isPayout] No over/under value specified"),!1;const l=parseFloat(r?t:n);if(o===l)return console.log("[CoreBetSlip.isPayout] TOTAL - PUSH (exact line)"),!1;let u=!1;return r?(u=o>l,console.log(`[CoreBetSlip.isPayout] TOTAL OVER ${l} (actual: ${o}) - ${u?"WON":"LOST"}`)):(u=o<l,console.log(`[CoreBetSlip.isPayout] TOTAL UNDER ${l} (actual: ${o}) - ${u?"WON":"LOST"}`)),u}static calcPayout(t){if(!t?.Bet)return console.error("[CoreBetSlip] Invalid bet object - missing Bet data"),0;const{type:n,odds:a,stake:s}=t.Bet,o=n?.toUpperCase()||"",r=parseFloat(a)||0,i=parseFloat(s)||0;if(i<=0)return console.warn("[CoreBetSlip] Invalid stake amount:",i),0;if(r===0)return console.warn("[CoreBetSlip] Invalid odds value:",r),0;let l=0;switch(o){case"SPREAD":l=this.calcAmericanOddsPayout(r,i),console.log("[CoreBetSlip] SPREAD payout calculated:",{odds:r,stake:i,payout:l});break;case"MONEY":l=this.calcAmericanOddsPayout(r,i),console.log("[CoreBetSlip] MONEY payout calculated:",{odds:r,stake:i,payout:l});break;case"TOTAL":l=this.calcAmericanOddsPayout(r,i),console.log("[CoreBetSlip] TOTAL payout calculated:",{odds:r,stake:i,payout:l});break;case"PROP":l=this.calcAmericanOddsPayout(r,i),console.log("[CoreBetSlip] PROP payout calculated:",{odds:r,stake:i,payout:l});break;case"PARLAY":l=this.calcAmericanOddsPayout(r,i),console.log("[CoreBetSlip] PARLAY payout calculated (single odds):",{odds:r,stake:i,payout:l});break;default:console.warn("[CoreBetSlip] Unknown bet type:",o),l=0;break}return parseFloat(l.toFixed(2))}static calcAmericanOddsPayout(t,n){let a=0;return t>0?a=n*(t/100):t<0?a=n/(Math.abs(t)/100):a=0,n+a}static americanToDecimal(t){return t>0?t/100+1:t<0?100/Math.abs(t)+1:1}static calcImpliedProbability(t){return t>0?100/(t+100)*100:t<0?Math.abs(t)/(Math.abs(t)+100)*100:0}}const cp={class:"home-layout"},dp=["data-user-name"],up={__name:"home_route",setup(e){const t=gt(),n=be();window.CoreBetSlip=Ni,document.addEventListener("click",i=>{const l=i.target;l&&l.dataset?.publishRouteHome&&(l.dataset.publishRouteHome.startsWith("ROUTE.HOME.SODAPOP_PLAY.")&&document.querySelectorAll("#sodapop_play .btn-info-sm").forEach(c=>{c===l?(c.style.background="var(--app-core-color--yellow-1__dark--brand, #ffcc33)",c.style.color="var(--app-core-color--green-1__dark--brand, #27794d)"):(c.style.background="#27794d1A",c.style.color="#fff")}),J.publish(l.dataset.publishRouteHome,`{"ts": ${Date.now()} }`)),l&&l.dataset?.sodapopClose&&neodigmSodaPop&&neodigmSodaPop.close()});const a=(i,l=!1)=>{const u=document.querySelector(".tournaments-grid");if(!u)return;u.innerHTML="";const c=document.getElementById("app"),p=c?.getAttribute("data-sync-theme")||"dark",f=c?.getAttribute("data-sync-lang")||"en",h=c?.getAttribute("data-sync-motif")||"brand",m=d=>{const g=document.createElement("article"),_=d.status||"DRAFT";g.className=`tournament-item tournament-status-${_.toLowerCase()}`;const b=document.createElement("bma-tournament-card");return b.setAttribute("data-bma-tourn-id",d.id||""),b.setAttribute("data-bma-tourn-guid",d.guid||""),b.setAttribute("data-bma-tourn-caption",d.caption||""),b.setAttribute("data-bma-tourn-tagline",d.tagline||""),b.setAttribute("data-bma-tourn-window_start_time",d.window_start_time||""),b.setAttribute("data-bma-tourn-window_end_time",d.window_end_time||""),b.setAttribute("data-bma-tourn-sports_allowed",Array.isArray(d.sports_allowed)?JSON.stringify(d.sports_allowed):d.sports_allowed||""),b.setAttribute("data-bma-tourn-entities",d.entities?JSON.stringify(d.entities):""),b.setAttribute("data-bma-tourn-tournament_dollars",d.tournament_dollars||""),b.setAttribute("data-bma-tourn-prize_distro",Array.isArray(d.prize_distro)?JSON.stringify(d.prize_distro):d.prize_distro||""),b.setAttribute("data-bma-tourn-matches",Array.isArray(d.matches_guids)?JSON.stringify(d.matches_guids):d.matches_guids||""),b.setAttribute("data-bma-tourn-matches_expanded",Array.isArray(d.matches_expanded)?JSON.stringify(d.matches_expanded):d.matches_expanded||""),b.setAttribute("data-bma-tourn-entry_fee",d.entry_fee||""),b.setAttribute("data-bma-tourn-rake",d.rake||""),b.setAttribute("data-bma-tourn-tags",Array.isArray(d.tags)?JSON.stringify(d.tags):d.tags||""),b.setAttribute("data-bma-tourn-comments",d.comments||""),b.setAttribute("data-bma-tourn-class",d.status||""),b.setAttribute("data-bma-tourn-status",d.status||""),b.setAttribute("data-sync-theme",p),b.setAttribute("data-sync-lang",f),b.setAttribute("data-sync-motif",h),b.setAttribute("data-n55-size","medium"),b.setAttribute("data-n55-enchanted-cta-ambient","none"),b.setAttribute("data-tourn-custom-css",""),b.setAttribute("data-tourn-trophy","0"),b.setAttribute("data-bma-tourn-focus",""),b.setAttribute("data-bma-tourn-wait","false"),g.appendChild(b),g};l?i.forEach(d=>{const g=document.createElement("div");g.className="tournament-category";const _=document.createElement("header");_.className="tournament-category-header";const b=document.createElement("h2");if(b.className="category-title",b.textContent=d.title,_.appendChild(b),d.subtext){const T=document.createElement("p");T.className="category-subtext",T.textContent=d.subtext,_.appendChild(T)}g.appendChild(_),u.appendChild(g),d.tournaments.forEach(T=>{const S=m(T);u.appendChild(S)})}):i.forEach(d=>{const g=m(d);u.appendChild(g)})},s=i=>{document.querySelectorAll("bma-tournament-card").forEach(u=>{u.setAttribute("data-sync-theme",i)})},o=i=>{const l=document.querySelectorAll("bma-tournament-card"),u=Date.now().toString();l.forEach(c=>{if(c===i){if(c.setAttribute("data-bma-tourn-focus",u),c.shadowRoot){const p=c.shadowRoot.querySelector(".card-focus__feedback");p&&(p.style.visibility="visible")}typeof neodigmMarquee<"u"&&neodigmMarquee.init()}else if(c.setAttribute("data-bma-tourn-focus",""),c.shadowRoot){const p=c.shadowRoot.querySelector(".card-focus__feedback");p&&(p.style.visibility="hidden")}})},r=i=>{const{action:l,tournamentId:u,tournamentGuid:c,tournamentStatus:p,...f}=i.detail;console.log("[home_route] Tournament action:",{action:l,tournamentId:u,tournamentGuid:c,tournamentStatus:p,...f}),o(i.target),J.publish("WC.TOURN_ACTION",JSON.stringify({action:l,tournamentId:u,tournamentGuid:c,tournamentStatus:p,...f,timestamp:Date.now()}))};return Gt(async()=>{if(!n.appSession.session_user.authenticated){console.log("User not authenticated, redirecting to signin"),t.push({name:"signin_route"});return}const i=document.getElementById("app");if(i){const u=n.appCLIFeatures.features.theme?.state,c=n.appCLIFeatures.features.lang?.state,p=n.appCLIFeatures.features.motif?.state,f=n.appSession.session_user.guid;u&&(i.setAttribute("data-sync-theme",u),document.body.setAttribute("data-sync-theme",u)),c&&i.setAttribute("data-sync-lang",c),p&&i.setAttribute("data-sync-motif",p),f&&i.setAttribute("data-user-guid",f)}window._homeRouteRenderCards=a;const l=J.subscribe("APP.ROUTE_SYNC",(u,c)=>{try{const p=JSON.parse(c);p.theme&&s(p.theme.state)}catch(p){console.error("[home_route] Failed to parse APP.ROUTE_SYNC data:",p)}});window._homeRoutePubSubToken=l,console.log("[home_route] Publishing ROUTE.HOME_ONMOUNT"),J.publish("ROUTE.HOME_ONMOUNT",JSON.stringify({timestamp:Date.now()})),document.addEventListener("bma-tournament-action",r)}),Ta(()=>{document.removeEventListener("bma-tournament-action",r),delete window._homeRouteRenderCards,window._homeRoutePubSubToken&&J.unsubscribe(window._homeRoutePubSubToken)}),(i,l)=>(Xe(),ht("main",cp,[k("bma-app-head-top",{"data-user-name":Ft(n).appSession.session_user.name||"Guest"},null,8,dp),l[0]||(l[0]=qt('<bma-app-head-mid data-selected-tab="head_mid_lobby"></bma-app-head-mid><bma-app-head-sports data-selected-chip="all"></bma-app-head-sports><section class="tournaments-section"><div class="tournaments-grid"></div></section><bma-app-foot data-selected-item="foot_all_sports"></bma-app-foot>',4))]))}},pp={};function fp(e,t){return Xe(),ht("main",null,[...t[0]||(t[0]=[k("h1",null,"App FAQ",-1)])])}const Qn=Wt(pp,[["render",fp]]),hp={};function gp(e,t){return Xe(),ht("main",null,[...t[0]||(t[0]=[k("h1",null,"App Help",-1)])])}const mp=Wt(hp,[["render",gp]]),It=class It{static async establishSSE(t,n,a,s=!0){this.strChat=a,this.isDebug=s,console.log(" ~... sse client 'Q' | ","Q"),t=t.replaceAll("##SSEID##",n).replaceAll("##LASTKEY##",localStorage.getItem("sse_lastkey")||-1),this.isDebug&&console.warn(" ~... sse push uri | ",t),this.sseEvent&&(this.sseEvent.close(),this.sseEvent=null),this.sseEvent=new EventSource(t),this.sseEvent.onopen=function(o){It.onSSEOpen(o)},this.sseEvent.onmessage=function(o){It.onSSEMessage(o)},this.sseEvent.onerror=function(o){It.onSSEError(o)}}static async onSSEOpen(t){this.isDebug&&console.warn(" ~... sse push onSSEOpen ev | ",t)}static async onSSEMessage(t){let n=null;if(this.isDebug&&console.warn(" ~... sse push onSSEMessage ev | ",t),t?.data){localStorage.setItem("sse_lastkey",t?.data?.id||-1);try{if(n=JSON.parse(t.data),n?.class!="NO_MESSAGE")if(n?.class&&n?.msg)switch(n.class){case"BANNER_DISMISS":break;case"BANNER_MODAL":break;case"BANNER_MODAL_CLOSE":break;case"BUBBLE_CONFETTI":break;case"BUBBLE_MARQUEE":break;case"BUBBLE":break;case"CLI":break;case"CONSOLE":break;case"FEATURE_FLAG":break;case"MVV_POPUP":break;case"MVV_TOAST":n?.msg&&neodigmWired4Sound&&(neodigmWired4Sound.sound(5).vibrate(),neodigmToast.q(n.msg,"brand",4500),this.isDebug&&console.warn(" ~... sse push pushPackage.id class msg criterion  | ",n.id+" | "+n.class+" | "+n.msg+" | "+n.criterion));break;case"WEBNOTE":break;case"GUIDED_TOUR":break;case"META_MACRO":break;case"META_TEMPLATE":break;case"MVV_CAROUSEL":break;case"MVV_POPOVER":break;case"MVV_WIDGET":break;case"RECONNECT":break;case"TOURNAMENT_SYNC":this.isDebug&&console.warn(" ~... sse TOURNAMENT_SYNC | ",n),J.publish("SSE.CORE.TOURN_SYNC",JSON.stringify(n));break}else this.isDebug&&console.warn(" ~... sse push - invalid package - no class/msg");else this.isDebug&&console.warn(" ~... sse push - no message")}catch{this.isDebug&&console.warn(" ~... sse push - invalid package")}}}static async onSSEError(t){this.isDebug&&console.warn(" ~... sse push onSSEError ev | ",t)}static async disconnectSSE(t){this.isDebug&&console.warn(" ~... sse push disconnectSSE ev | ",t),this.sseEvent.close(),this.sseEvent=null}};It.sseEvent=null,It.strChat=null,It.isDebug=!0;let pa=It;class Pt{static neodigmOpt={neodigmToast:!0,N55_GTM_DL_TOAST:"n55_gtm_dl_toast",neodigmSodaPop:!0,N55_SP_DISABLE_SCROLL:!0,N55_GTM_DL_POP_OPEN:"n55_gtm_dl_pop_open",N55_GTM_DL_POP_CLOSE:"n55_gtm_dl_pop_close",neodigmWired4Sound:!0,W4S_VOLUME:.022,EVENT_SOUNDS:!0,neodigmParallax:!0,PRLX_MOBILE:!1,neodigmMarquee:!0,neodigmEnchantedCTA:!0,N55_CTA_RND_TOUCH:14001,N55_GTM_DL_CTA:"n55_gtm_dl_cta",N55_CTA_LONG_TAP:3400,N55_CTA_FX:["alternate","emit","flash_danger","flash_warning","radius","scroll","shake"],neodigmKPI:!0,N55_GTM_DL_KPI:"n55_gtm_dl_kpi",neodigmPWA:!0,N55_PWA_TEMPLATE_ID:"js-pup-n55-pwa",neodigmCarousel:!0,N55_GTM_DL_CARSL:"n55_gtm_dl_carsl",N55_CARO_BLUR:!0,neodigmTulip:!0,neodigmPopTart:!0,N55_GTM_DL_POPTRT:"n55_gtm_dl_poptrt",neodigmAgent:!0,API_baseURI:"https://a55-wtt-api-v1.onrender.com/",API_ver:"v1",neodigmPicnic:!0,N55_GTM_DL_PICNIC:"n55_gtm_dl_picnic",neodigmWWInterval:!0,neodigmMetronome:{countTo:116,neodigmMarquee:132},N55_ZIND:{PopTart:264},CONSOLE_LOG_VER:!0,N55_DEBUG_lOG:!1,N55_AMPM_THEME:"light",N55_EVENT_HAPTIC:!0,N55_FLASH_TITLE:!0,N55_GENRE_MOTIF:"neodigm",N55_THEME_DEFAULT:"brand",N55_THEME_COLORS:{brand:["EDBA08","915E00","🟧"],primary:["92a8d1","364C75","🟦"],secondary:["EDCED0","978284","🟫"],success:["009473","003817","🟩"],white:["FFFFFF","FDFDFD","⬜"],ghost:["ffffff","000000","⬜"],danger:["DD4124","810000","🟥"],warning:["F5DF4D","988200","🟨"],info:["7BC4C4","1F6868","🟦"],disabled:["868686","767676","⬜"],night:["6a6a6a","242424","⬛"],marcom:["B163A3","5F4B8B","🟪"],party:["FF6F61","C93F60","🟪"]},N55_APP_STATE:{CONTEXT:"body",FIRST_TAP:!1,ONLINE:!0,PWA_READY:!1,PWA_CONTAIN:!1,SHAKE:!1,CONTEXTMNU:!1,FOCUS:!0,AMPM:"light",REDUCE_MOTION:!1},ROOT:document.querySelector(":root"),N55_TYPE:"https://fonts.googleapis.com/css?family=Roboto+Condensed:wght@100;300;400|Roboto+Slab:wght@300|Roboto+Mono:wght@300|Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,300,0,0"};static neodigmUtils=((t=document)=>({ver:"4.0.0",isMobile:function(){return t.body.clientWidth<=768},isTouch:function(){return typeof document.body.ontouchstart<"u"},f1210:function(){return Math.floor(Math.random()*10+1)},f02x:function(n){return Math.floor(Math.random()*n)},fPromiseJS:async function(n,a){return new Promise((s,o)=>{const r=Object.assign(n.createElement(LZString.decompress("㎆ぎॠข")),{type:LZString.decompress("அ〞샴ՠ蘆㠘쁎Ұΰ耀"),src:a});r.onload=s,r.onerror=o,n.getElementsByTagName("head")[0].appendChild(r)})},fAsyncJS:function(n,a,s){const o=Object.assign(n.createElement(LZString.decompress("㎆ぎॠข")),{type:LZString.decompress("அ〞샴ՠ蘆㠘쁎Ұΰ耀"),src:a});s&&(o.onload=function(){s()}),n.getElementsByTagName("head")[0].appendChild(o)},fAsyncCSS:function(n,a){let s=n.createElement("link");s.rel="stylesheet",s.href=a,n.getElementsByTagName("head")[0].appendChild(s)},data2prop:function(n){n=n.replace("data-","").toLowerCase();let a=n.split(""),s=[],o=!1;return a.forEach(r=>{r=="-"?o=!0:(s.push(o?r.toUpperCase():r),o=!1)}),s.join("")},doDataLayer:function(n,a){neodigmOpt.N55_DEBUG_lOG&&console.log("~ga | "+n+" | "+a),window.dataLayer&&window.dataLayer.push({event:n,msg:a})},isJSON:function(n){let a=!1;try{a=typeof JSON.parse(n)}catch{}return a=="object"},appStateListen:function(n){NeodigmKeylime.subscribe("mouseover",s=>{s?.target?.dataset?.n55TypeonHover&&neodigmUtils.typeOn(JSON.parse(s.target.dataset.n55TypeonHover))},!0),NeodigmKeylime.subscribe("click",s=>{neodigmOpt.N55_APP_STATE.FIRST_TAP||(neodigmOpt.N55_APP_STATE.FIRST_TAP=!0),neodigmOpt.neodigmTulip&&neodigmTulip.close();let o=neodigmUtils.walkDOM3(s?.target,"n55TypeonClick");o&&neodigmUtils.typeOn(JSON.parse(o))},!0),NeodigmKeylime.subscribe("touchstart",s=>{neodigmOpt.N55_APP_STATE.FIRST_TAP||(neodigmOpt.N55_APP_STATE.FIRST_TAP=!0),neodigmOpt.neodigmTulip&&neodigmTulip.close()},!0),NeodigmKeylime.subscribe("resize",s=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmCarousel&&neodigmCarousel.init(),neodigmOpt.neodigmTulip&&neodigmTulip.close(),neodigmOpt.neodigmPopTart&&neodigmPopTart.close()})},!0,window),NeodigmKeylime.subscribe("orientationchange",s=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmCarousel&&neodigmCarousel.init(),neodigmOpt.neodigmTulip&&neodigmTulip.close(),neodigmOpt.neodigmPopTart&&neodigmPopTart.close()})},!0,window),NeodigmKeylime.subscribe("scroll",s=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmTulip&&neodigmTulip.close()})},!0,window),neodigmOpt.N55_APP_STATE.REDUCE_MOTION=!window.matchMedia("(prefers-reduced-motion: no-preference)").matches;let a=document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelector("[data-n55-Ampm-theme]")?.dataset.n55AmpmTheme;a&&(neodigmOpt.N55_AMPM_THEME=neodigmOpt.N55_APP_STATE.AMPM=a)},prettyTimeRETIRE:n=>{let a=new Date(n).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"});return n=="Dec 31, 1969"&&(a=""),a},prettyTime:n=>new Date(n).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"}),capFirst:n=>n&&n[0].toUpperCase()+n.slice(1)||"",genHash:n=>(n=String(n),Math.abs(n.split("").reduce((a,s)=>(a<<5)-a+s.charCodeAt(0)|0,0))),flashTitle:(n=neodigmOpt.N55_THEME_DEFAULT,a=4e3)=>{neodigmOpt.N55_FLASH_TITLE&&(document?.n55Title||(document.n55Title=document.title),neodigmOpt?.N55_THEME_COLORS[n]&&(document.title=neodigmOpt.N55_THEME_COLORS[n][2]+document.n55Title),neodigmUtils.doSetT(function(){document.title=document.n55Title},a))},robinTheme:function(n=Object.keys(neodigmOpt.N55_THEME_COLORS)[0]){if(!neodigmMetronome.isPaused()){let a=[...document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelectorAll("[data-n55-theme")];const s=56;a.forEach((r,i)=>{r.dataset.n55Theme!="disabled"&&(r.n55Theme||(r.n55Theme=r.dataset.n55Theme),setTimeout(function(){r.dataset.n55Theme=n},i*s),setTimeout(function(){r.dataset.n55Theme=r.n55Theme},i*(s+s)))}),a=[...document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelectorAll("[data-n55-theme-pulse")];const o=256;a.forEach((r,i)=>{r.n55ThemePulse||(r.n55ThemePulse=r.dataset.n55ThemePulse),setTimeout(function(){r.dataset.n55ThemePulse=n},i*o),setTimeout(function(){r.dataset.n55ThemePulse=r.n55ThemePulse},i*o+3e3)}),neodigmUtils.flashTitle(n,2e3)}},countTo:async function(n,a,s=neodigmOpt.neodigmMetronome.countTo){const o=[16,s];return[...document.querySelectorAll(n)].forEach(function(r,i){let l=Math.abs(Number(r.textContent)-a);neodigmMetronome.unsubscribe(o[1]+i).subscribe(function(u){let c=Number(r.textContent);if(!Number.isNaN(c)&&!isNaN(c)&&a!=c){let p=l/o[0];p=Math.round(p),u!=0?r.textContent=c<a?c+p:c-p:r.textContent=a}},o[1]+i,o[0])}),neodigmUtils},typeOff:async function(n){let a=document.querySelector(n?.q1st);if(a){let s=a.textContent.length,o=window.getComputedStyle(a),r=Number(o.paddingTop.replace("px",""))+Number(o.paddingBottom.replace("px",""));for(a.offsetHeight&&(a.style.height=a.offsetHeight-r+"px");s;)setTimeout(()=>{a.textContent=a.textContent.replace(/.$/,"")},n.uniqueDelay*s--)}},typeOn:async function(n){let a=document.querySelector(n?.q1st);if(a){a.dataset.n55Typeon=0;let s=n.msg.replaceAll("|","   |   ")+"   ",o=s.split("|");if(n?.mode=="OFF")return neodigmUtils.typeOff({q1st:n.q1st,uniqueDelay:n.uniqueDelay}),neodigmUtils;if(n?.mode=="RANDOM"&&o.length){let r=a.dataset.n55Typeon=neodigmUtils.f02x(o.length);s=o[r]}neodigmUtils.typeOff({q1st:n.q1st,uniqueDelay:n.uniqueDelay/a.textContent.length-4}),neodigmMetronome.unsubscribe(n.uniqueDelay).subscribe(r=>{let i=s[s.length-(r+1)];i=="|"&&(i="",neodigmUtils.typeOff({q1st:n.q1st,uniqueDelay:n.uniqueDelay/a.textContent.length-4}),a.dataset.n55Typeon++),a.textContent+=i,n?.mode=="LOOP"&&r==0&&neodigmUtils.typeOn(n)},n.uniqueDelay,s.length)}return neodigmUtils},getValJSON:function(n,a){try{return JSON.parse(n)}catch{return JSON.parse('{ "'+a+'": "'+n+'" }')}},walkDOM3:function(n,a,s=!1){let o=null;if(!o&&n?.dataset[a]&&(o=n),!o&&n?.parentNode?.dataset[a]&&(o=n.parentNode),!o&&n.tagName!="BODY"&&n?.parentNode?.parentNode?.dataset[a]&&(o=n.parentNode.parentNode),o)return s?o:o.dataset[a]},doSetT:function(n,a){return neodigmOpt.neodigmWWInterval?window.setTimeoutN55(n,a):setTimeout(n,a)},shake:function(n,a=!0){return[...document.querySelectorAll(n)].forEach(function(s,o){s.classList.add("shake__an"),setTimeout(function(){s.classList.remove("shake__an")},460)}),Pt.neodigmUtils},hardReload:function(n="n55reset"){const a=new URLSearchParams(window.location.search);a.set(n,new Date().getTime());const s=a.toString();window.location.search=s}}))}const _p={class:"auth-page"},bp={class:"auth-page-right"},yp={class:"auth-card"},vp={class:"form-group"},Tp={class:"form-group"},Ep={class:"password-input-wrapper"},Sp=["type"],Ap={style:{"text-align":"right"}},Op={class:"auth-link-center"},Pp={__name:"signin_route",setup(e){const t=gt(),n=be(),a=(f="signin")=>{t.push({name:f})};let s=null;const o=ze(!1),r=()=>{o.value=!o.value},i=(f=3,h=1)=>{switch(n.appCLIFeatures.features.motif.state){case"brand":f=3,h=1;break;case"white_label":f=3,h=4;break}const m=Math.floor(Math.random()*f)+h,d=document.querySelector(".img__bg")?.classList;d&&(d.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),d.add(`img__bg--${m}`)),s||(s=J.subscribe("APP__ROUTE_SYNC",(g,_)=>{const b=JSON.parse(_);switch(Object.keys(b)[0]){case"Motif":i();break;case"Lang":l();break}}))},l=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(f=>{const h=n.appCLIFeatures?.features?.lang?.state;let m=n.appMeta.microcopy.language.filter(d=>d.code==h)[0]?.copy;m=m.filter(d=>d[0]==f.dataset.syncMicrocopyText)[0],m&&(f.textContent=m[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(f=>{const h=n.appCLIFeatures?.features?.lang?.state;let m=n.appMeta.microcopy.language.filter(d=>d.code==h)[0]?.copy;m=m.filter(d=>d[0]==f.dataset.syncMicrocopyPlaceholder)[0],m&&(f.placeholder=m[1])})},u=f=>{Pt.neodigmUtils().shake(f||"#inp__text--email")},c=()=>{let f=document.querySelectorAll("#inp__text--email")[0].value;neodigmUtils.messageNotification("Cub vs. Cardianals","https://mach-five-group.github.io/bma-landing/Assets/Bet%20Max%20Action-Full%20Lockup-600.png"),n.doCLI(f)},p=()=>{const f=document.querySelector("#inp__text--email"),h=document.querySelector("#inp__text--password");let m=null,d=null;if(!f?.value)m="Please enter your email",d="#inp__text--email";else if(f.value.indexOf("@")===-1||f.value.indexOf(".")===-1)m="Please enter a valid email address",d="#inp__text--email";else if(!h?.value)m="Please enter your password",d="#inp__text--password";else if(h.value.length<10)m="Password must be at least 10 characters",d="#inp__text--password";else{const g={email:f.value,hash:Pt.neodigmUtils().genHash(h.value)};ve.doSignin(g,_=>{const S=(_?.entity?.tags||[]).find(P=>P.userName)?.userName||"";if(n.appSession.session_user.authenticated=!0,n.appSession.session_user.email=g.email,n.appSession.session_user.fname=_?.entity?.first,n.appSession.session_user.lname=_?.entity?.last,n.appSession.session_user.userName=S,n.appSession.session_user.name=S,n.appSession.session_user.guid=_?.entity?.guid,n.saveSessionUser(),n.appCLIFeatures.features.sse.state){const P=_?.entity?.guid||n.appSession.session_user.guid;pa.establishSSE("https://machfive-bmacdev-rest.onrender.com/v5/sse?appid=BMACORE&sseid=##SSEID##&lastkey=##LASTKEY##",P,n,!0)}})}m&&(u(d),neodigmToast.q(m,"danger"))};return Gt(()=>{i(),l()}),(f,h)=>(Xe(),ht("div",_p,[h[10]||(h[10]=qt('<div class="auth-page-left" data-v-9f21eb27><div class="auth-bg" data-v-9f21eb27><div class="auth-bg-image" data-v-9f21eb27></div><div class="auth-bg-image" data-v-9f21eb27></div><div class="auth-bg-image" data-v-9f21eb27></div></div><div class="auth-overlay" data-v-9f21eb27></div><div class="auth-branding-content" data-v-9f21eb27><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-9f21eb27><p class="auth-branding-tagline" data-v-9f21eb27>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-9f21eb27>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-9f21eb27> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),k("div",bp,[k("div",yp,[h[9]||(h[9]=k("div",{class:"auth-header"},[k("h1",{class:"auth-title","data-sync-microcopy-text":"welcome_back"},"Welcome Back"),k("p",{class:"auth-subtitle","data-sync-microcopy-text":"please_enter_your_details"},"Please enter your details to sign in")],-1)),k("form",{class:"auth-form",onSubmit:Oa(p,["prevent"])},[k("div",vp,[h[4]||(h[4]=k("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),k("input",{id:"inp__text--email",type:"text","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onDblclick:h[0]||(h[0]=m=>c())},null,32)]),k("div",Tp,[h[5]||(h[5]=k("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),k("div",Ep,[k("input",{id:"inp__text--password",type:o.value?"text":"password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password"},null,8,Sp),k("button",{type:"button",class:"password-toggle-btn",onClick:h[1]||(h[1]=m=>r()),tabindex:"-1"},[k("span",{class:Ut(o.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),k("div",Ap,[k("a",{class:"auth-link",onClick:h[2]||(h[2]=m=>a("forgot_route")),"data-sync-microcopy-text":"forgot_password"},"Forgot Password?")]),h[8]||(h[8]=k("div",{class:"auth-actions"},[k("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"sign_in"},"Sign In")],-1)),k("p",Op,[h[6]||(h[6]=k("span",{"data-sync-microcopy-text":"dont_have_an_account"},"Don't have an account?",-1)),h[7]||(h[7]=Aa()),k("a",{class:"auth-link",onClick:h[3]||(h[3]=m=>a("signup_route")),"data-sync-microcopy-text":"sign_up"},"Sign Up")])],32)])])]))}},kp=Wt(Pp,[["__scopeId","data-v-9f21eb27"]]),wp={class:"auth-page"},xp={__name:"signout_route",setup(e){const t=gt();be();const n=()=>{mvvLegit.doSignout()},a=()=>{t.push({name:"home_route"})};return(s,o)=>(Xe(),ht("div",wp,[o[1]||(o[1]=qt('<div class="auth-page-left" data-v-900c11b9><div class="auth-bg" data-v-900c11b9><div class="auth-bg-image" data-v-900c11b9></div><div class="auth-bg-image" data-v-900c11b9></div><div class="auth-bg-image" data-v-900c11b9></div></div><div class="auth-overlay" data-v-900c11b9></div><div class="auth-branding-content" data-v-900c11b9><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-900c11b9><p class="auth-branding-tagline" data-v-900c11b9>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-900c11b9>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-900c11b9> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),k("div",{class:"auth-page-right"},[k("div",{class:"auth-card"},[o[0]||(o[0]=k("div",{class:"auth-header"},[k("h1",{class:"auth-title"},"Sign Out"),k("p",{class:"auth-subtitle"},"Confirm you want to sign out")],-1)),k("div",{class:"auth-actions"},[k("button",{onClick:n,class:"btn btn-red"}," Sign Out "),k("button",{onClick:a,class:"btn btn-outline"}," Cancel ")])])])]))}},Cp=Wt(xp,[["__scopeId","data-v-900c11b9"]]),Rp={class:"auth-page"},Np={class:"auth-page-right",style:{display:"block"}},Lp={class:"auth-card auth-card-wide"},Dp={class:"form-group"},Ip={class:"form-group"},Mp={class:"form-group"},Bp={class:"form-group"},Fp={class:"form-group"},$p={class:"password-input-wrapper"},Up=["type"],Hp={class:"form-group"},Kp={class:"password-input-wrapper"},Yp=["type"],jp={class:"auth-link-center"},Gp={__name:"signup_route",setup(e){const t=gt(),n=be(),a=(g="signin")=>{t.push({name:g})};ve.getTJO()&&a("contests");let s=null;const o=ze(!1),r=ze(!1),i=()=>{o.value=!o.value},l=()=>{r.value=!r.value},u=(g=3,_=1)=>{switch(n.appCLIFeatures.features.motif.state){case"brand":g=3,_=1;break;case"white_label":g=3,_=4;break}const b=Math.floor(Math.random()*g)+_,T=document.querySelector(".img__bg")?.classList;T&&(T.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),T.add(`img__bg--${b}`)),s||(s=J.subscribe("APP__ROUTE_SYNC",(S,P)=>{const C=JSON.parse(P);switch(Object.keys(C)[0]){case"Motif":u();break;case"Lang":c();break}}))},c=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(g=>{const _=n.appCLIFeatures?.features?.lang?.state;let b=n.appMeta.microcopy.language.filter(T=>T.code==_)[0]?.copy;b=b.filter(T=>T[0]==g.dataset.syncMicrocopyText)[0],b&&(g.textContent=b[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(g=>{const _=n.appCLIFeatures?.features?.lang?.state;let b=n.appMeta.microcopy.language.filter(T=>T.code==_)[0]?.copy;b=b.filter(T=>T[0]==g.dataset.syncMicrocopyPlaceholder)[0],b&&(g.placeholder=b[1])})},p=g=>{Pt.neodigmUtils().shake(g||"#inp__text--email")},f=()=>{let g=document.querySelectorAll("#inp__text--email")[0].value;n.doCLI(g)},h=g=>{const _=[];return g.length<10&&_.push("at least 10 characters"),/[a-z]/.test(g)||_.push("1 lowercase"),/[A-Z]/.test(g)||_.push("1 uppercase"),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(g)||_.push("1 special character"),/[^\x00-\x7F]/.test(g)&&_.push("ASCII characters only"),_},m=async()=>{const g=document.querySelector("#inp__text--username"),_=g?.value?.trim();if(_)try{(await ve.checkUserName(_)).userNameExists&&(neodigmToast.q("User name already taken|Please choose a different one","danger"),g.value="",g.focus())}catch(b){console.error("Error checking username:",b)}},d=()=>{const g=document.querySelector("#inp__text--first-name"),_=document.querySelector("#inp__text--last-name"),b=document.querySelector("#inp__text--email"),T=document.querySelector("#inp__text--username"),S=document.querySelector("#inp__text--password"),P=document.querySelector("#inp__text--verify-password");let C=null,I=null;if(!g?.value)C="Please enter your first name",I="#inp__text--first-name";else if(!_?.value)C="Please enter your last name",I="#inp__text--last-name";else if(!b?.value)C="Please enter your email",I="#inp__text--email";else if(b.value.indexOf("@")===-1||b.value.indexOf(".")===-1)C="Please enter a valid email address",I="#inp__text--email";else if(!T?.value)C="Please enter a user name",I="#inp__text--username";else if(!S?.value)C="Please enter a password",I="#inp__text--password";else{const $=h(S.value);if($.length>0)C="Password must have:|"+$.join(", "),I="#inp__text--password";else if(!P?.value)C="Please verify your password",I="#inp__text--verify-password";else if(S.value!==P.value)C="Passwords do not match",I="#inp__text--verify-password";else{const A=g.value.trim(),R=_.value.trim(),U=[{userName:T.value.trim(),ts:Date.now()}],w={email:b.value,hash:Pt.neodigmUtils().genHash(S.value),first:A,last:R,company:"",phone:"",tags:U};ve.doSignup(w,q=>{q.ok&&setTimeout(()=>{mvvLegit.doUNVERF()},1e3)})}}C&&(p(I),neodigmToast.q(C,"danger"))};return Gt(()=>{u(),c()}),(g,_)=>(Xe(),ht("div",Rp,[_[22]||(_[22]=qt('<div class="auth-page-left" data-v-0b6f1055><div class="auth-bg" data-v-0b6f1055><div class="auth-bg-image" data-v-0b6f1055></div><div class="auth-bg-image" data-v-0b6f1055></div><div class="auth-bg-image" data-v-0b6f1055></div></div><div class="auth-overlay" data-v-0b6f1055></div><div class="auth-branding-content" data-v-0b6f1055><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-0b6f1055><p class="auth-branding-tagline" data-v-0b6f1055>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-0b6f1055>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-0b6f1055> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),k("div",Np,[k("div",Lp,[_[21]||(_[21]=k("div",{class:"auth-header"},[k("h1",{class:"auth-title","data-sync-microcopy-text":"sign_up"},"Sign Up"),k("p",{class:"auth-subtitle","data-sync-microcopy-text":"please_enter_your_details_to_get_started"},"Please enter your details to get started")],-1)),k("form",{class:"auth-form",onSubmit:Oa(d,["prevent"])},[k("div",Dp,[_[11]||(_[11]=k("label",{for:"inp__text--first-name","data-sync-microcopy-text":"first_name"},"First Name",-1)),k("input",{id:"inp__text--first-name",type:"text","data-sync-microcopy-placeholder":"enter_your_first_name",placeholder:"Enter your first name",onKeyup:_[0]||(_[0]=Tt(b=>d(),["enter"]))},null,32)]),k("div",Ip,[_[12]||(_[12]=k("label",{for:"inp__text--last-name","data-sync-microcopy-text":"last_name"},"Last Name",-1)),k("input",{id:"inp__text--last-name",type:"text","data-sync-microcopy-placeholder":"enter_your_last_name",placeholder:"Enter your last name",onKeyup:_[1]||(_[1]=Tt(b=>d(),["enter"]))},null,32)]),k("div",Mp,[_[13]||(_[13]=k("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),k("input",{id:"inp__text--email",type:"text","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onDblclick:_[2]||(_[2]=b=>f()),onKeyup:_[3]||(_[3]=Tt(b=>d(),["enter"]))},null,32)]),k("div",Bp,[_[14]||(_[14]=k("label",{for:"inp__text--username","data-sync-microcopy-text":"username"},"User Name",-1)),k("input",{id:"inp__text--username",type:"text","data-sync-microcopy-placeholder":"public_alias",placeholder:"Public Alias",onBlur:_[4]||(_[4]=b=>m()),onKeyup:_[5]||(_[5]=Tt(b=>d(),["enter"]))},null,32)]),k("div",Fp,[_[15]||(_[15]=k("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),k("div",$p,[k("input",{id:"inp__text--password",type:o.value?"text":"password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password",onKeyup:_[6]||(_[6]=Tt(b=>d(),["enter"]))},null,40,Up),k("button",{type:"button",class:"password-toggle-btn",onClick:_[7]||(_[7]=b=>i()),tabindex:"-1"},[k("span",{class:Ut(o.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])]),_[16]||(_[16]=k("small",{"data-sync-microcopy-text":"must_be_at_least_10_characters_long"},"Must be at least 10 characters long",-1))]),k("div",Hp,[_[17]||(_[17]=k("label",{for:"inp__text--verify-password","data-sync-microcopy-text":"verify_password"},"Verify Password",-1)),k("div",Kp,[k("input",{id:"inp__text--verify-password",type:r.value?"text":"password","data-sync-microcopy-placeholder":"re_enter_your_password",placeholder:"Re-enter your password",onKeyup:_[8]||(_[8]=Tt(b=>d(),["enter"]))},null,40,Yp),k("button",{type:"button",class:"password-toggle-btn",onClick:_[9]||(_[9]=b=>l()),tabindex:"-1"},[k("span",{class:Ut(r.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),_[20]||(_[20]=k("div",{class:"auth-actions"},[k("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"sign_up"},"Sign Up")],-1)),k("p",jp,[_[18]||(_[18]=k("span",{"data-sync-microcopy-text":"already_have_an_account"},"Already have an account?",-1)),_[19]||(_[19]=Aa()),k("a",{class:"auth-link",onClick:_[10]||(_[10]=b=>a("signin_route")),"data-sync-microcopy-text":"log_in"},"Sign In")])],32)])])]))}},qp=Wt(Gp,[["__scopeId","data-v-0b6f1055"]]),Wp={class:"auth-page"},Jp={class:"auth-page-right"},zp={class:"auth-card"},Vp={class:"form-group"},Qp={class:"auth-link-center"},Xp={__name:"forgot_route",setup(e){const t=gt(),n=be(),a=(u="signin_route")=>{t.push({name:u})};ve.getTJO()&&a("contests");let s=null;const o=(u=3,c=1)=>{switch(n.appCLIFeatures.features.motif.state){case"brand":u=3,c=1;break;case"white_label":u=3,c=4;break}const p=Math.floor(Math.random()*u)+c,f=document.querySelector(".img__bg")?.classList;f&&(f.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),f.add(`img__bg--${p}`)),s||(s=J.subscribe("APP__ROUTE_SYNC",(h,m)=>{const d=JSON.parse(m);switch(Object.keys(d)[0]){case"Motif":o();break;case"Lang":r();break}}))},r=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(u=>{const c=n.appCLIFeatures?.features?.lang?.state;let p=n.appMeta.microcopy.language.filter(f=>f.code==c)[0]?.copy;p=p.filter(f=>f[0]==u.dataset.syncMicrocopyText)[0],p&&(u.textContent=p[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(u=>{const c=n.appCLIFeatures?.features?.lang?.state;let p=n.appMeta.microcopy.language.filter(f=>f.code==c)[0]?.copy;p=p.filter(f=>f[0]==u.dataset.syncMicrocopyPlaceholder)[0],p&&(u.placeholder=p[1])})},i=u=>{Pt.neodigmUtils().shake(u||"#inp__text--email")},l=()=>{const u=document.querySelector("#inp__text--email");let c=null,p=null;if(!u?.value)c="Please enter your email address",p="#inp__text--email";else if(u.value.indexOf("@")===-1||u.value.indexOf(".")===-1)c="Please enter a valid email address",p="#inp__text--email";else{const f={method:"GET",headers:ve.genHeaders()};fetch(ve.API_baseURI+"/m5t/"+ve.API_ver+"/acctEntity/forgot?CODE="+encodeURIComponent(u.value),f).then(h=>h.json()).then(h=>{h.ok?(neodigmToast.q("Password reset email sent!|Please check your inbox","success"),setTimeout(()=>{a("verf_link_route")},2e3)):neodigmToast.q("Failed to send reset email|Please try again","danger")}).catch(h=>{neodigmToast.q("An error occurred|Please try again","danger")});return}c&&(i(p),neodigmToast.q(c,"danger"))};return Gt(()=>{o(),r()}),(u,c)=>(Xe(),ht("div",Wp,[c[7]||(c[7]=qt('<div class="auth-page-left"><div class="auth-bg"><div class="auth-bg-image"></div><div class="auth-bg-image"></div><div class="auth-bg-image"></div></div><div class="auth-overlay"></div><div class="auth-branding-content"><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img"><p class="auth-branding-tagline">Daily Tournament Betting</p><p class="auth-branding-subtitle">Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer"> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),k("div",Jp,[k("div",zp,[c[6]||(c[6]=k("div",{class:"auth-header"},[k("h1",{class:"auth-title","data-sync-microcopy-text":"forgot_password"},"Forgot Password"),k("p",{class:"auth-subtitle","data-sync-microcopy-text":"please_enter_your_email"},"Please enter your email to receive a password reset link")],-1)),k("form",{class:"auth-form",onSubmit:Oa(l,["prevent"])},[k("div",Vp,[c[2]||(c[2]=k("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),k("input",{id:"inp__text--email",type:"text","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onKeyup:c[0]||(c[0]=Tt(p=>l(),["enter"]))},null,32)]),c[5]||(c[5]=k("div",{class:"auth-actions"},[k("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"send_reset_link"},"Send Reset Link")],-1)),k("p",Qp,[c[3]||(c[3]=k("span",{"data-sync-microcopy-text":"remember_your_password"},"Remember your password?",-1)),c[4]||(c[4]=Aa()),k("a",{class:"auth-link",onClick:c[1]||(c[1]=p=>a("signin_route")),"data-sync-microcopy-text":"sign_in"},"Sign In")])],32)])])]))}},Zp={class:"auth-page"},ef={class:"auth-page-right"},tf={class:"auth-card"},nf={class:"form-group"},af={class:"password-input-wrapper"},sf=["type"],of={class:"form-group"},rf={class:"password-input-wrapper"},lf=["type"],cf={__name:"resethash_route",setup(e){const t=gt(),n=be(),a=()=>{t.push({name:"home_route"})};let s=null;const o=ze(!1),r=ze(!1),i=()=>{o.value=!o.value},l=()=>{r.value=!r.value},u=(m=3,d=1)=>{switch(n.appCLIFeatures.features.motif.state){case"brand":m=3,d=1;break;case"white_label":m=3,d=4;break}const g=Math.floor(Math.random()*m)+d,_=document.querySelector(".img__bg")?.classList;_&&(_.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),_.add(`img__bg--${g}`)),s||(s=J.subscribe("APP__ROUTE_SYNC",(b,T)=>{const S=JSON.parse(T);switch(Object.keys(S)[0]){case"Motif":u();break;case"Lang":c();break}}))},c=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(m=>{const d=n.appCLIFeatures?.features?.lang?.state;let g=n.appMeta.microcopy.language.filter(_=>_.code==d)[0]?.copy;g=g.filter(_=>_[0]==m.dataset.syncMicrocopyText)[0],g&&(m.textContent=g[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(m=>{const d=n.appCLIFeatures?.features?.lang?.state;let g=n.appMeta.microcopy.language.filter(_=>_.code==d)[0]?.copy;g=g.filter(_=>_[0]==m.dataset.syncMicrocopyPlaceholder)[0],g&&(m.placeholder=g[1])})},p=m=>{Pt.neodigmUtils().shake(m||"#inp__text--password")},f=m=>{const d=[];return m.length<10&&d.push("at least 10 characters"),/[a-z]/.test(m)||d.push("1 lowercase"),/[A-Z]/.test(m)||d.push("1 uppercase"),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(m)||d.push("1 special character"),/[^\x00-\x7F]/.test(m)&&d.push("ASCII characters only"),d},h=()=>{const m=document.querySelector("#inp__text--password"),d=document.querySelector("#inp__text--verify-password");let g=null,_=null;if(!m?.value)g="Please enter a password",_="#inp__text--password";else{const b=f(m.value);if(b.length>0)g="Password must have:|"+b.join(", "),_="#inp__text--password";else if(!d?.value)g="Please verify your password",_="#inp__text--verify-password";else if(m.value!==d.value)g="Passwords do not match",_="#inp__text--verify-password";else{const T=n.appSession.session_user.email||"",S={email:T,hash:Pt.neodigmUtils().genHash(m.value),modified_by:T},P={method:"POST",body:JSON.stringify(S),headers:ve.genHeaders()};fetch(ve.API_baseURI+"/m5t/"+ve.API_ver+"/acctEntity/resetHash",P).then(C=>C.json()).then(C=>{C.ok?(neodigmToast.q("Password reset successful!|Signing you out...","success"),setTimeout(()=>{mvvLegit.doSignout()},4e3)):neodigmToast.q("Password reset failed|Please try again","danger")}).catch(C=>{neodigmToast.q("An error occurred|Please try again","danger")});return}}g&&(p(_),neodigmToast.q(g,"danger"))};return Gt(()=>{u(),c()}),(m,d)=>(Xe(),ht("div",Zp,[d[9]||(d[9]=qt('<div class="auth-page-left" data-v-ad79ad95><div class="auth-bg" data-v-ad79ad95><div class="auth-bg-image" data-v-ad79ad95></div><div class="auth-bg-image" data-v-ad79ad95></div><div class="auth-bg-image" data-v-ad79ad95></div></div><div class="auth-overlay" data-v-ad79ad95></div><div class="auth-branding-content" data-v-ad79ad95><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-ad79ad95><p class="auth-branding-tagline" data-v-ad79ad95>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-ad79ad95>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-ad79ad95> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),k("div",ef,[k("div",tf,[d[8]||(d[8]=k("div",{class:"auth-header"},[k("h1",{class:"auth-title","data-sync-microcopy-text":"reset_password"},"Reset Password"),k("p",{class:"auth-subtitle","data-sync-microcopy-text":"please_enter_your_new_password"},"Please enter your new password")],-1)),k("form",{class:"auth-form",onSubmit:Oa(h,["prevent"])},[k("div",nf,[d[4]||(d[4]=k("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),k("div",af,[k("input",{id:"inp__text--password",type:o.value?"text":"password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password",onKeyup:d[0]||(d[0]=Tt(g=>h(),["enter"]))},null,40,sf),k("button",{type:"button",class:"password-toggle-btn",onClick:d[1]||(d[1]=g=>i()),tabindex:"-1"},[k("span",{class:Ut(o.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])]),d[5]||(d[5]=k("small",{"data-sync-microcopy-text":"must_be_at_least_10_characters_long"},"Must be at least 10 characters long",-1))]),k("div",of,[d[6]||(d[6]=k("label",{for:"inp__text--verify-password","data-sync-microcopy-text":"verify_password"},"Verify Password",-1)),k("div",rf,[k("input",{id:"inp__text--verify-password",type:r.value?"text":"password","data-sync-microcopy-placeholder":"re_enter_your_password",placeholder:"Re-enter your password",onKeyup:d[2]||(d[2]=Tt(g=>h(),["enter"]))},null,40,lf),k("button",{type:"button",class:"password-toggle-btn",onClick:d[3]||(d[3]=g=>l()),tabindex:"-1"},[k("span",{class:Ut(r.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),k("div",{class:"auth-actions"},[d[7]||(d[7]=k("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"reset_password"},"Reset Password",-1)),k("button",{type:"button",onClick:a,class:"btn btn-outline"}," Cancel ")])],32)])])]))}},df=Wt(cf,[["__scopeId","data-v-ad79ad95"]]),uf={class:"auth-page"},pf={class:"auth-page-right"},ff={class:"auth-card"},hf={class:"verification-content"},gf={class:"timer-display"},mf={__name:"verf_link_route",setup(e){const t=gt();wi(),be();const n=ze(7200);let a=null;const s=r=>{const i=Math.floor(r/3600),l=Math.floor(r%3600/60),u=r%60;return`${i.toString().padStart(2,"0")}:${l.toString().padStart(2,"0")}:${u.toString().padStart(2,"0")}`},o=()=>{a=setInterval(()=>{n.value--,n.value<=0&&(clearInterval(a),neodigmWired4Sound.sound(14),t.push({name:"splash_route"}))},1e3)};return Gt(()=>{o()}),Ta(()=>{a&&clearInterval(a)}),(r,i)=>(Xe(),ht("div",uf,[i[4]||(i[4]=qt('<div class="auth-page-left" data-v-f5b4a3c8><div class="auth-bg" data-v-f5b4a3c8><div class="auth-bg-image" data-v-f5b4a3c8></div><div class="auth-bg-image" data-v-f5b4a3c8></div><div class="auth-bg-image" data-v-f5b4a3c8></div></div><div class="auth-overlay" data-v-f5b4a3c8></div><div class="auth-branding-content" data-v-f5b4a3c8><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-f5b4a3c8><p class="auth-branding-tagline" data-v-f5b4a3c8>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-f5b4a3c8>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-f5b4a3c8> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),k("div",pf,[k("div",ff,[i[3]||(i[3]=k("div",{class:"auth-header"},[k("h1",{class:"auth-title"},"Check Your Email"),k("p",{class:"auth-subtitle"},"A verification link has been sent to the email address you provided.")],-1)),k("div",hf,[i[0]||(i[0]=k("p",{class:"verification-instructions"},"Please click on that link to continue.",-1)),i[1]||(i[1]=k("p",{class:"verification-note"},"The link will expire in 2 hours.",-1)),i[2]||(i[2]=k("p",{class:"verification-note"},"Remember to check your spam folder.",-1)),k("div",gf,sr(s(n.value)),1)])])])]))}},_f=Wt(mf,[["__scopeId","data-v-f5b4a3c8"]]),fs=Su({history:nu(),routes:[{path:"/",name:"splash_route",component:Jo},{path:"/splash_route",name:"splash_route",component:Jo},{path:"/error_route",name:"error_route",component:Qn},{path:"/forgot_route",name:"forgot_route",component:Xp},{path:"/resetforgot_route",name:"resetforgot_route",component:Qn},{path:"/resethash_route",name:"resethash_route",component:df},{path:"/signin_route",name:"signin_route",component:kp},{path:"/signout_route",name:"signout_route",component:Cp},{path:"/signup_route",name:"signup_route",component:qp},{path:"/verf_link_route",name:"verf_link_route",component:_f},{path:"/offline_route",name:"offline_route",component:Qn},{path:"/home_route",name:"home_route",component:up},{path:"/appFAQ",name:"appFAQ",component:Qn},{path:"/appHelp",name:"appHelp",component:mp}]}),Je={updateTDBalance(e,t){const n=document.querySelector(e);if(!n)return;t%1!==0?n.textContent=t.toFixed(2):neodigmUtils.countTo(e,t)},updateSummaryAndDashboard(e,t,n,a=null){const s=document.querySelector("#summary-balance"),o=document.querySelector("#summary-stake"),r=document.querySelector("#summary-payout");s&&(this.updateTDBalance("#summary-balance",e),e<0?s.classList.add("summary-cell__red"):s.classList.remove("summary-cell__red")),o&&(o.textContent=t.toFixed(2)),r&&(r.textContent=n.toFixed(2),n<0?r.classList.add("summary-cell__red"):r.classList.remove("summary-cell__red"));const i=document.getElementById("dashboard-td-balance"),l=document.getElementById("dashboard-td-pending");if(i&&(i.textContent=`TD$ ${e.toLocaleString()}`,e<0?i.style.color="#FF5252":a&&e<a.tournament_dollars*.2?i.style.color="#FF9800":i.style.color="var(--app-core-color--yellow-3__dark--brand, #F7C60D)"),l&&(l.textContent=`TD$ ${t.toLocaleString()}`),a&&a.tournament_dollars){const u=a.tournament_dollars,c=document.querySelector(".tourn-dashboard__gauge-fill--balance");if(c){const f=Math.max(e/u*100,0);c.style.width=`${f}%`}const p=document.querySelector(".tourn-dashboard__gauge-fill--pending");if(p){const f=Math.min(t/u*100,100);p.style.width=`${f}%`}}},categorizeTournaments(e,t,n,a){const s=[],o=l=>(l.entities?.guids||[]).includes(a),r=(l,u)=>(l.sports_allowed||[]).some(p=>p.key===u),i=l=>$t.find(c=>c.key===l)?.title||l;if(t==="lobby"&&n==="all"){const l=e.filter(f=>!o(f)&&(f.status==="UPCOMING"||f.class==="UPCOMING"||f.status==="LOCKED"||f.class==="LOCKED"));l.length>0&&s.push({title:"Discover New Tournaments",subtext:`Join now • ${l.length} tournament${l.length!==1?"s":""}`,tournaments:l});const u=e.filter(f=>o(f)&&(f.status==="LOCKED"||f.class==="LOCKED"));u.length>0&&s.push({title:"Your Active Tournaments",subtext:`Currently in progress • ${u.length} tournament${u.length!==1?"s":""}`,tournaments:u});const c=e.filter(f=>o(f)&&(f.status==="UPCOMING"||f.class==="UPCOMING"));c.length>0&&s.push({title:"Your Upcoming Tournaments",subtext:`Joined, not yet started • ${c.length} tournament${c.length!==1?"s":""}`,tournaments:c});const p=e.filter(f=>f.status==="COMPLETED"||f.class==="COMPLETED").slice(0,20);p.length>0&&s.push({title:"Recently Completed",subtext:`Past competitions • ${p.length} tournament${p.length!==1?"s":""}`,tournaments:p})}else if(t==="my"){let l=e.filter(u=>o(u));if(n!=="all"){l=l.filter(h=>r(h,n));const u=i(n),c=l.filter(h=>h.status==="UPCOMING"||h.class==="UPCOMING");c.length>0&&s.push({title:`Your Upcoming ${u} Tournaments`,subtext:`Ready to start • ${c.length} tournament${c.length!==1?"s":""}`,tournaments:c});const p=l.filter(h=>h.status==="LOCKED"||h.class==="LOCKED");p.length>0&&s.push({title:`Your Active ${u} Tournaments`,subtext:`Currently playing • ${p.length} tournament${p.length!==1?"s":""}`,tournaments:p});const f=l.filter(h=>h.status==="COMPLETED"||h.class==="COMPLETED");f.length>0&&s.push({title:`Your Completed ${u} Tournaments`,subtext:`View results • ${f.length} tournament${f.length!==1?"s":""}`,tournaments:f})}else{const u=l.filter(f=>f.status==="UPCOMING"||f.class==="UPCOMING");u.length>0&&s.push({title:"Your Upcoming Tournaments",subtext:`Ready to start • ${u.length} tournament${u.length!==1?"s":""}`,tournaments:u});const c=l.filter(f=>f.status==="LOCKED"||f.class==="LOCKED");c.length>0&&s.push({title:"Your Active Tournaments",subtext:`Currently playing • ${c.length} tournament${c.length!==1?"s":""}`,tournaments:c});const p=l.filter(f=>f.status==="COMPLETED"||f.class==="COMPLETED");p.length>0&&s.push({title:"Your Completed Tournaments",subtext:`View results • ${p.length} tournament${p.length!==1?"s":""}`,tournaments:p})}}else if(t==="completed"&&n==="all"){const l=e.filter(c=>o(c)&&(c.status==="COMPLETED"||c.class==="COMPLETED"));l.length>0&&s.push({title:"Your Completed Tournaments",subtext:`Your results • ${l.length} tournament${l.length!==1?"s":""}`,tournaments:l});const u=e.filter(c=>!o(c)&&(c.status==="COMPLETED"||c.class==="COMPLETED"));u.length>0&&s.push({title:"Other Completed Tournaments",subtext:`Browse results • ${u.length} tournament${u.length!==1?"s":""}`,tournaments:u})}else if(n==="multi"){const l=e.filter(u=>(u.sports_allowed?.length||0)>1);if(t==="lobby"){const u=l.filter(f=>!o(f)&&(f.status==="UPCOMING"||f.class==="UPCOMING"));u.length>0&&s.push({title:"Discover Multi-Sport Tournaments",subtext:`Available to join • ${u.length} tournament${u.length!==1?"s":""}`,tournaments:u});const c=l.filter(f=>o(f)&&(f.status==="UPCOMING"||f.class==="UPCOMING"||f.status==="LOCKED"||f.class==="LOCKED"));c.length>0&&s.push({title:"Your Multi-Sport Tournaments",subtext:`Active and upcoming • ${c.length} tournament${c.length!==1?"s":""}`,tournaments:c});const p=l.filter(f=>o(f)&&(f.status==="COMPLETED"||f.class==="COMPLETED")).slice(0,10);p.length>0&&s.push({title:"Your Completed Multi-Sport",subtext:`Past results • ${p.length} tournament${p.length!==1?"s":""}`,tournaments:p})}else if(t==="my"){const u=l.filter(f=>o(f)&&(f.status==="LOCKED"||f.class==="LOCKED"));u.length>0&&s.push({title:"Active Multi-Sport Tournaments",subtext:`Currently playing • ${u.length} tournament${u.length!==1?"s":""}`,tournaments:u});const c=l.filter(f=>o(f)&&(f.status==="UPCOMING"||f.class==="UPCOMING"));c.length>0&&s.push({title:"Upcoming Multi-Sport Tournaments",subtext:`Ready to start • ${c.length} tournament${c.length!==1?"s":""}`,tournaments:c});const p=l.filter(f=>o(f)&&(f.status==="COMPLETED"||f.class==="COMPLETED"));p.length>0&&s.push({title:"Completed Multi-Sport Tournaments",subtext:`View results • ${p.length} tournament${p.length!==1?"s":""}`,tournaments:p})}else if(t==="completed"){const u=l.filter(p=>o(p)&&(p.status==="COMPLETED"||p.class==="COMPLETED"));u.length>0&&s.push({title:"Your Completed Multi-Sport",subtext:`Your results • ${u.length} tournament${u.length!==1?"s":""}`,tournaments:u});const c=l.filter(p=>!o(p)&&(p.status==="COMPLETED"||p.class==="COMPLETED"));c.length>0&&s.push({title:"Other Completed Multi-Sport",subtext:`Browse results • ${c.length} tournament${c.length!==1?"s":""}`,tournaments:c})}}else if(n!=="all"&&t!=="my"){const l=i(n),u=e.filter(f=>r(f,n));if(t==="lobby"){const f=u.filter(m=>!o(m)&&(m.status==="UPCOMING"||m.class==="UPCOMING"));f.length>0&&s.push({title:`Discover ${l} Tournaments`,subtext:`Available to join • ${f.length} tournament${f.length!==1?"s":""}`,tournaments:f});const h=u.filter(m=>o(m)&&(m.status==="UPCOMING"||m.class==="UPCOMING"||m.status==="LOCKED"||m.class==="LOCKED"));h.length>0&&s.push({title:`Your ${l} Tournaments`,subtext:`Active and upcoming • ${h.length} tournament${h.length!==1?"s":""}`,tournaments:h})}const c=u.filter(f=>o(f)&&(f.status==="COMPLETED"||f.class==="COMPLETED")).slice(0,10);c.length>0&&s.push({title:`Your Completed ${l}`,subtext:`Your past results • ${c.length} tournament${c.length!==1?"s":""}`,tournaments:c});const p=u.filter(f=>!o(f)&&(f.status==="COMPLETED"||f.class==="COMPLETED")).slice(0,10);p.length>0&&s.push({title:`Other Completed ${l}`,subtext:`Browse results • ${p.length} tournament${p.length!==1?"s":""}`,tournaments:p})}else s.push({title:"Tournaments",subtext:`${e.length} tournament${e.length!==1?"s":""}`,tournaments:e});return s},updateTournamentDashboard(e){if(!e)return;console.log("[Dashboard Update] Starting dashboard update for:",e.caption);const t=be();t.appSession?.session_user?.guid;const n=e.tournament_dollars||1e4;let a=0,s=0,o=0;if(t.coreBetSlip&&t.coreBetSlip.length>0){const g=t.coreBetSlip[t.coreBetSlip.length-1].data.filter(_=>_.tournament_guid===e.guid);console.log("[Dashboard Update] Found",g.length,"existing bets for this tournament"),g.forEach(_=>{(_.bet||[]).forEach(T=>{Object.keys(T).filter(P=>P!=="short_title").forEach(P=>{const C=T[P];C&&(C.stake&&(a+=parseFloat(C.stake)),C.reconciled===!0&&C.payout>0&&(s+=parseFloat(C.payout)))})})})}const r=document.querySelector("#summary-stake");if(r){const d=parseFloat(r.textContent)||0;o=Math.max(0,d-a),console.log("[Dashboard Update] Summary total stakes:",d,"Pending:",o)}const i=a+o,l=n-a-o+s;console.log("[Dashboard Update] TD$:",n,"Committed:",a,"Pending:",o,"Payouts:",s,"=> Balance:",l);const u=document.getElementById("dashboard-td-balance");u&&(u.textContent=`TD$ ${l.toLocaleString()}`,l<0?u.style.color="#FF5252":l<n*.2?u.style.color="#FF9800":u.style.color="var(--app-core-color--yellow-3__dark--brand, #F7C60D)");const c=document.getElementById("dashboard-td-pending"),p=document.querySelector(".tourn-dashboard__gauge-fill--pending");if(c){const d=o>0?o:i;if(c.textContent=`TD$ ${d.toLocaleString()}`,p){const g=Math.min(d/n*100,100);p.style.width=`${g}%`}}const f=document.querySelector(".tourn-dashboard__gauge-fill--balance");if(f){const d=Math.max(l/n*100,0);f.style.width=`${d}%`}const h=document.getElementById("dashboard-participants"),m=document.querySelector(".tourn-dashboard__gauge-fill--participants");if(h){const d=e.entities?.guids?.length||0,g=e.entities?.max||100;if(h.textContent=`${d}/${g}`,m){const _=d/g*100;m.style.width=`${_}%`}}},renderMatchCards(e){if(!e||!e.matches_expanded)return;const t=document.querySelector(".select-grid");if(!t)return;t.innerHTML="";const n=new Date,a=[...e.matches_expanded].sort((o,r)=>{const i=new Date(o.scheduled_at),l=new Date(r.scheduled_at),u=i<n,c=l<n;return u&&!c?1:!u&&c?-1:i-l}),s=()=>{const r=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let i=0;r&&be().coreTourn.length>0&&(i=be().coreTourn[be().coreTourn.length-1].data.find(m=>m.guid===r)?.tournament_dollars||0);const l=document.querySelector(".bet-grid__slip-BETSLIP-content"),u=l?l.querySelectorAll("bma-bet-entry"):[],c=Array.from(u).map(f=>({matchGuid:f.getAttribute("data-match-guid"),type:f.getAttribute("data-content-type"),teamPoints:f.getAttribute("data-content-team-points"),odds:f.getAttribute("data-content-odds"),stake:f.getAttribute("data-stake"),payout:f.getAttribute("data-payout"),matchTitle:f.getAttribute("data-match-title"),abbreviatedTitle:f.getAttribute("data-abbreviated-title"),scheduledAt:f.getAttribute("data-scheduled-at")})),p=be();J.publish(p.hierTopics.COREBETSLIP__INTERSYNC,JSON.stringify({tournament_dollars:i,bets:c,timestamp:Date.now()}))};a.forEach(o=>{const i=new Date(o.scheduled_at)<n;let l=!1;try{l=(typeof o.scoreboard_data=="string"?JSON.parse(o.scoreboard_data):o.scoreboard_data)?.time_remaining?.toLowerCase()==="final"}catch{}const u=document.createElement("bma-bet-match-card");if(u.setAttribute("data-match-id",o.id),u.setAttribute("data-match-guid",o.odds_id||o.guid||o.id),u.setAttribute("data-match-title",o.title),u.setAttribute("data-match-short-title",o.short_title||o.title),u.setAttribute("data-scheduled-at",o.scheduled_at),u.setAttribute("data-home-team",o.home_team_id||"Home"),u.setAttribute("data-away-team",o.away_team_id||"Away"),u.setAttribute("data-is-disabled",i||l?"true":"false"),u.setAttribute("data-sync-theme","dark"),o.odds_markets){const c=typeof o.odds_markets=="string"?o.odds_markets:JSON.stringify(o.odds_markets);u.setAttribute("data-odds-markets",c)}if(o.scoreboard_data){const c=typeof o.scoreboard_data=="string"?o.scoreboard_data:JSON.stringify(o.scoreboard_data);u.setAttribute("data-scoreboard",c)}if(o.sport_id)u.setAttribute("data-sport-key",o.sport_id);else if(e.sports_allowed&&e.sports_allowed.length===1){const c=e.sports_allowed[0];c&&c.key&&u.setAttribute("data-sport-key",c.key)}u.addEventListener("bet-button-click",c=>{const{betData:p,isActive:f,button:h}=c.detail;if(f){const m=document.querySelector(".bet-grid__slip-BETSLIP-content");if(m){const d=m.querySelectorAll("bma-bet-entry");let g=!1;d.forEach(_=>{if(g)return;const b=_.getAttribute("data-content-type"),T=_.getAttribute("data-content-odds");b===p.type&&T===p.price&&(_.remove(),g=!0)}),m.children.length===0&&(m.innerHTML='<div class="bet-slip__empty"><p>Select odds to create a new bet slip</p></div>')}h.classList.remove("btn--active"),setTimeout(()=>{s()},100)}else{document.querySelectorAll("bma-bet-match-card").forEach(g=>{g.shadowRoot.querySelectorAll(".btn--selected").forEach(_=>{_.classList.remove("btn--selected")})}),h.classList.add("btn--selected"),h.classList.add("btn--active");const m=be(),d=p.type;d==="spread"?J.publish(m.hierTopics.COREBETSLIP__SPREAD,JSON.stringify(p)):d==="money"?J.publish(m.hierTopics.COREBETSLIP__MONEY,JSON.stringify(p)):d==="total"&&J.publish(m.hierTopics.COREBETSLIP__TOTAL,JSON.stringify(p)),J.publish(m.hierTopics.COREBETSLIP,JSON.stringify(p))}}),t.appendChild(u)})},refreshPlayPopupUI(e,t){console.log("[app_events] Refreshing PLAY popup UI for tournament:",e);const n=document.querySelector(".bet-grid__slip-BETSLIP-content");n&&(n.innerHTML='<div class="bet-slip__empty"><p>Select odds to create a new bet slip</p></div>');const a=be();if(a.coreTourn.length>0){const r=a.coreTourn[a.coreTourn.length-1].data.find(i=>i.guid===e);r&&Je.renderMatchCards(r)}t?.rows&&(console.log("[app_events] Publishing SODAPOP__HYDRATE__COREBETSLIP with",t.rows.length,"bets"),setTimeout(()=>{J.publish(a.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,JSON.stringify(t))},100));const s=document.querySelector(".bet-grid__slip");s&&s.setAttribute("data-active-bet-tab","MYBETS")},disableExistingBetButtons(){const e=document.querySelectorAll(".bet-grid__slip-MYBETS bma-bet-existing"),t=Array.from(e).map(a=>{try{return JSON.parse(a.getAttribute("data-corebetslip")||"{}")}catch{return null}}).filter(Boolean);document.querySelectorAll("bma-bet-match-card").forEach(a=>{const s=a.getAttribute("data-match-guid"),o=a.getAttribute("data-home-team"),r=a.getAttribute("data-away-team");(a.shadowRoot?.querySelectorAll(".btn:not(.btn--empty)")||[]).forEach(l=>{if(l.disabled)return;const u=l.dataset.betType,f=l.dataset.team==="home"?o:r;t.some(m=>{if(m.coreMatches__guid!==s)return!1;const d=m.bet||[];if(d.length===0)return!1;const g=d[0],b=Object.keys(g).filter(P=>P!=="short_title")[0],S=g[b]?.type;return u==="total"?S===u:S===u&&b===f})&&(l.disabled=!0,l.classList.add("btn--disabled"))})})},bindAppListeners(e){J.subscribe("APP",(h,m)=>{console.warn("~~ sub all APP | "+h+"|"+m)}),J.subscribe("WC",(h,m)=>{console.warn("~~ sub all WC  | "+h+"|"+m)}),J.subscribe("ROUTE",(h,m)=>{console.warn("~~ sub all ROUTE  | "+h+"|"+m)});let t="lobby",n="all";const a=()=>{if(e.coreTourn.length===0)return;const m=e.coreTourn[e.coreTourn.length-1].data,d=e.appSession?.session_user?.guid;document.querySelectorAll(".tournament-item").forEach(b=>b.classList.remove("h-ds__none"));let _=0;if(m.forEach(b=>{const T=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${b.guid}"]`);if(!T)return;const S=T.parentElement;let P=!0;if(t==="my"?(b.entities?.guids||[]).includes(d)||(P=!1):t==="completed"&&(b.status||b.class)!=="COMPLETED"&&(P=!1),n!=="all"&&P){const C=b.sports_allowed||[];n==="multi"?C.length<=1&&(P=!1):C.some($=>$.key===n)||(P=!1)}P?_++:S&&S.classList.add("h-ds__none")}),console.log(`[app_events] Filter applied - ${t}/${n} - showing ${_} of ${m.length} tournaments`),_===0){let b="No tournaments match the current filters";t==="my"&&(b="You haven't joined any tournaments yet"),t==="completed"&&(b="No completed tournaments yet"),typeof neodigmToast<"u"&&neodigmToast.q(b,"night")}};J.subscribe(e.hierTopics.COREBETSLIP,(h,m)=>{JSON.parse(m);let d=16;switch(h){case e.hierTopics.COREBETSLIP__BET:d=5,Kn.shootConfetti(),console.log("~~~  |  "+h+" | ",m);const g=document.querySelector("neodigm-sodapop");g&&g.setAttribute("data-wait","true");const _=document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry");if(_.length===0){console.warn("[app_events] No bets to submit"),g&&g.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("No bets to submit","warning");break}const T=document.querySelector(".play-cntr")?.dataset?.currentTournGuid,S=e.appSession?.session_user?.guid;if(!T||!S){console.error("[app_events] Missing tournament or user GUID"),g&&g.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("Missing tournament or user data","danger");break}const P=Array.from(_).map(q=>{const V=q.getAttribute("data-content-team-points"),ne=q.getAttribute("data-content-odds"),X=q.getAttribute("data-stake")||"0",M=q.getAttribute("data-content-type"),z=q.getAttribute("data-payout")||"0",re=q.getAttribute("data-match-guid")||"",ee={};return ee[V]={type:M,stake:parseFloat(X),odds:parseFloat(ne),payout:parseFloat(z),reconciled:!1},{acctEntity__guid:S,coreTournaments__guid:T,coreMatches__guid:re,bet:[ee],status:"PENDING"}});console.log("[app_events] Submitting bet slips:",P),ve.postBetSlips(P).then(q=>{console.log("[app_events] Bet slips posted successfully:",q);const V=P.reduce((ne,X)=>{const M=X.bet[0],z=Object.keys(M)[0];return ne+(M[z]?.stake||0)},0);typeof neodigmToast<"u"&&neodigmToast.q(`Bets placed successfully!|Total Stake: TD$ ${V.toFixed(2)}`,"success"),ve.fetchBetSlips(S,T).then(ne=>{if(ne?.rows){const X={timestamp:Date.now(),source:"API",data:ne.rows};e.pushcoreBetSlip(X),console.log("[app_events] Refreshed bet slips in store:",ne.rows.length,"items")}Je.refreshPlayPopupUI(T,ne),g&&g.setAttribute("data-wait","false")}).catch(ne=>{console.error("[app_events] Error fetching fresh bet slips:",ne),g&&g.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("Bets placed but failed to refresh|Please close and reopen","warning")})}).catch(q=>{console.error("[app_events] Error posting bet slips:",q),typeof neodigmToast<"u"&&neodigmToast.q("Failed to place bets|Please try again","danger"),g&&g.setAttribute("data-wait","false")});break;case e.hierTopics.COREBETSLIP__SPREAD:break;case e.hierTopics.COREBETSLIP__MONEY:break;case e.hierTopics.COREBETSLIP__TOTAL:break;case e.hierTopics.COREBETSLIP__CLOSE:d=24;break;case e.hierTopics.COREBETSLIP__TDSYNC:if(document.querySelector("#summary-balance")&&m){m=JSON.parse(m);const V=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(e.coreBetSlip[0]?.data&&V){const ne=e.coreBetSlip[0].data.filter(Se=>Se.coreTournaments__guid===V),X=[],M=[],z=[];ne.forEach(Se=>{const ke=Se.bet||[];if(ke.length===0)return;const ue=ke[0];Object.keys(ue).filter(K=>K!=="short_title").forEach(K=>{const Y=ue[K],Q=Y?.reconciled!==!1,ie=parseFloat(Y?.payout||0);Q?ie===0?M.push(Se):z.push(Se):X.push(Se)})});const re=Ze.search(X,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,ee=Ze.search(M,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,Te=re+ee,de=Ze.search(z,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0,Le=m.tournament_dollars-Te+de;Je.updateTDBalance("#summary-balance",Le)}else Je.updateTDBalance("#summary-balance",m.tournament_dollars)}break;case e.hierTopics.COREBETSLIP__INTERSYNC:let I=0,$=0,A=0;if(e.coreBetSlip.length>0){const V=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(V){const X=e.coreBetSlip[e.coreBetSlip.length-1].data.filter(de=>de.coreTournaments__guid===V),M=[],z=[],re=[];X.forEach(de=>{const Le=de.bet||[];if(Le.length===0)return;const Se=Le[0];Object.keys(Se).filter(ue=>ue!=="short_title").forEach(ue=>{const x=Se[ue],K=x?.reconciled!==!1,Y=parseFloat(x?.payout||0);K?Y===0?z.push(de):re.push(de):M.push(de)})}),I=Ze.search(M,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,$=Ze.search(re,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0;const ee=Ze.search(z,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,Te=Ze.search(re,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0;A=ee+Te}}let R=!0,U=0;const w=document.querySelector("[data-bets-valid]");if(w&&m){m=JSON.parse(m),m.pending_stake_sum=0,m.pending_payout_sum=0,m.bets.length||(R=!1),m.bets.forEach(re=>{re.stake=Number(re.stake),re.stake?m.pending_stake_sum+=re.stake:R=!1}),document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry").forEach(re=>{const ee=parseFloat(re.getAttribute("data-payout")||"0");m.pending_payout_sum+=ee});const V=I+m.pending_stake_sum,ne=$+m.pending_payout_sum;U=m.tournament_dollars-V-A+$;const M=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let z=null;M&&e.coreTourn.length>0&&(z=e.coreTourn[e.coreTourn.length-1]?.data?.find(ee=>ee.guid===M)),Je.updateSummaryAndDashboard(U,V,ne,z),(m.tournament_dollars<0||U<0)&&(R=!1),w.dataset.betsValid=R}break}d&&neodigmWired4Sound&&neodigmWired4Sound.sound(d,"QUITE").vibrate()});const s=()=>{const m=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let d=0;m&&e.coreTourn.length>0&&(d=e.coreTourn[e.coreTourn.length-1].data.find(b=>b.guid===m)?.tournament_dollars||0),J.publish(e.hierTopics.COREBETSLIP__TDSYNC,JSON.stringify({tournament_dollars:d,timestamp:Date.now()}))},o=()=>{const m=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let d=0;m&&e.coreTourn.length>0&&(d=e.coreTourn[e.coreTourn.length-1].data.find(I=>I.guid===m)?.tournament_dollars||0);let g=0,_=0,b=0;if(e.coreBetSlip.length>0&&m){const C=e.coreBetSlip[e.coreBetSlip.length-1].data.filter(q=>q.coreTournaments__guid===m);console.log("[app_events] Filtered bets for tournament:",m,"found:",C.length),console.log("[app_events] Using latest bet slip data index:",e.coreBetSlip.length-1),console.log("[app_events] First bet sample:",C[0]);const I=[],$=[],A=[];C.forEach(q=>{const V=q.bet||[];if(V.length===0)return;const ne=V[0];Object.keys(ne).filter(M=>M!=="short_title").forEach(M=>{const z=ne[M],re=z?.reconciled!==!1,ee=parseFloat(z?.payout||0);re?ee===0?$.push(q):A.push(q):I.push(q)})}),console.log("[app_events] Bet categories:",{unreconciled:I.length,reconciledZero:$.length,reconciledNonZero:A.length});const R=Ze.search(I,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,U=Ze.search($,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,w=Ze.search(A,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0;b=U+w,_=Ze.search(A,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0,g=R,console.log("[app_events] Balance calculation:",{unreconciledStakes:R,lostBetStakes:U,wonBetStakes:w,allReconciledStakes:b,displayedStake:g,reconciledPayouts:_,tournamentDollars:d,calculatedBalance:d-g-b+_})}else console.warn("[app_events] No bet data found in Pinia store or missing tournamentGuid");const T=d-g-b+_;let S=null;m&&e.coreTourn.length>0&&(S=e.coreTourn[e.coreTourn.length-1].data.find(C=>C.guid===m)),Je.updateSummaryAndDashboard(T,g,_,S)};J.subscribe(e.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,(h,m)=>{const g=JSON.parse(m)?.rows||[],_=document.querySelector(".bet-grid__slip-MYBETS");if(!_)return;if(_.innerHTML="",g.length===0){_.innerHTML='<p style="color: var(--app-core-color--gray-6__dark--brand, #969696); text-align: center; padding: 20px;">No active bets</p>';const P=document.querySelector(".bet-grid__slip");P&&P.setAttribute("data-active-bet-tab","BETSLIP"),s();return}g.forEach(P=>{if((P.bet||[]).length===0)return;const I=document.createElement("bma-bet-existing");I.setAttribute("data-corebetslip",JSON.stringify(P)),_.appendChild(I)});const b=document.querySelector(".bet-grid__slip");b&&b.setAttribute("data-active-bet-tab","MYBETS"),be().appCLIFeatures?.features?.disable_existing_bet_btn?.state===!0&&Je.disableExistingBetButtons(),setTimeout(()=>{console.log("[app_events] Calling updateSummaryFromExistingBets after HYDRATE, bet count:",g.length),console.log("[app_events] Pinia store bet count:",e.coreBetSlip[0]?.data?.length||0),o()},200)}),document.addEventListener("click",h=>{const m=h.target;if(m&&m.classList.contains("bet-slip-tab")){const d=m.dataset.betTab,g=document.querySelector(".bet-grid__slip");d&&g&&(g.setAttribute("data-active-bet-tab",d),neodigmWired4Sound&&neodigmWired4Sound.sound(3),console.log("[app_events] Switched to bet tab:",d))}if(m&&m.dataset.publishBetslip){const d=m.dataset.publishBetslip;J.publish(d,JSON.stringify({timestamp:Date.now()}))}});const r=()=>{const m=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let d=0;m&&e.coreTourn.length>0&&(d=e.coreTourn[e.coreTourn.length-1].data.find(S=>S.guid===m)?.tournament_dollars||0);const g=document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry"),_=Array.from(g).map(b=>({teamPoints:b.getAttribute("data-content-team-points"),odds:b.getAttribute("data-content-odds"),stake:b.getAttribute("data-stake")||"0",type:b.getAttribute("data-content-type"),abbreviatedTitle:b.getAttribute("data-abbreviated-title"),scheduledAt:b.getAttribute("data-scheduled-at")}));J.publish(e.hierTopics.COREBETSLIP__INTERSYNC,JSON.stringify({tournament_dollars:d,bets:_,timestamp:Date.now()}))},i=(h,m)=>{const d=JSON.parse(m),g=document.querySelector(".bet-grid__slip-BETSLIP-content");if(!g){console.error("[app_events] Bet slip container not found");return}const _=g.querySelector(".bet-slip__empty");_&&_.remove();let b="";d.type==="total"?b=d.team==="over"?"Over":"Under":d.team==="home"?b=d.homeTeam:d.team==="away"&&(b=d.awayTeam);let T=b;if(d.point)if(d.type==="spread"){const A=parseFloat(d.point)>0?`+${d.point}`:d.point;T=`${b} ${A}`}else d.type==="total"&&(T=`${b} ${d.point}`);const S=document.createElement("bma-bet-entry");S.setAttribute("data-content-team-points",T),S.setAttribute("data-content-odds",d.price||"0"),S.setAttribute("data-content-stake-text","0"),S.setAttribute("data-content-type",d.type||""),S.setAttribute("data-abbreviated-title",d.abbreviatedTitle||`${d.homeTeam} vs ${d.awayTeam}`),S.setAttribute("data-scheduled-at",d.scheduledAt||""),S.setAttribute("data-match-guid",d.matchGuid||""),S.setAttribute("data-home-team",d.homeTeam||""),S.setAttribute("data-away-team",d.awayTeam||""),S.setAttribute("data-bet-team",b||"");const C=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(C&&e.coreTourn.length>0){const R=e.coreTourn[e.coreTourn.length-1].data.find(U=>U.guid===C);if(R?.sports_allowed&&R.sports_allowed.length>0){const U=R.sports_allowed[0];S.setAttribute("data-sport-key",U.key||"");const w=$t.find(q=>q.key===U.key);S.setAttribute("data-sport-group",w?.group||"")}}g.appendChild(S),console.log("[app_events] Bet entry appended to container:",S,"Container children:",g.children.length),setTimeout(()=>{l(S)},0);const I=document.querySelector(".bet-grid__slip");I&&(I.setAttribute("data-active-bet-tab","BETSLIP"),console.log("[app_events] Switched to BETSLIP tab"));const $=g.querySelectorAll("bma-bet-entry").length;$>=3?requestAnimationFrame(()=>{setTimeout(()=>{const A=document.querySelector(".bet-grid__slip");A&&(console.log("[app_events] Scrolling parent to bottom - bet count:",$,"scrollHeight:",A.scrollHeight,"current scrollTop:",A.scrollTop),A.scrollTo({top:A.scrollHeight,behavior:"smooth"}),setTimeout(()=>{console.log("[app_events] After scroll - scrollTop:",A.scrollTop)},500))},150)}):console.log("[app_events] Skipping scroll - only",$,"bet cards (need 3+)"),setTimeout(()=>{r()},200),console.log("[app_events] Created bet entry:",{teamPoints:T,odds:d.price,type:d.type})};J.subscribe(e.hierTopics.COREBETSLIP__SPREAD,i),J.subscribe(e.hierTopics.COREBETSLIP__MONEY,i),J.subscribe(e.hierTopics.COREBETSLIP__TOTAL,i);const l=h=>{const m={sport:{key:h.getAttribute("data-sport-key")||"",group:h.getAttribute("data-sport-group")||""},Match:{scheduled_at:h.getAttribute("data-scheduled-at")||"",home_team_id:h.getAttribute("data-home-team")||"",home_team_score:"",away_team_id:h.getAttribute("data-away-team")||"",away_team_score:""},Bet:{scope:{team_id:h.getAttribute("data-bet-team")||"",over:"",under:""},type:h.getAttribute("data-content-type")||"",odds:h.getAttribute("data-content-odds")||"0",stake:h.getAttribute("data-stake")||"0"}},d=Ni.calcPayout(m);h.setAttribute("data-payout",d.toString()),console.log("[app_events] Payout calculated:",{stake:m.Bet.stake,odds:m.Bet.odds,payout:d})};new MutationObserver(h=>{h.forEach(m=>{m.type==="attributes"&&m.attributeName==="data-stake"&&m.target.tagName==="BMA-BET-ENTRY"&&(console.log("[app_events] Stake changed:",m.target.getAttribute("data-stake")),l(m.target),clearTimeout(window.betSlipStakeTimeout),window.betSlipStakeTimeout=setTimeout(()=>{r()},300))})}).observe(document.body,{attributes:!0,attributeFilter:["data-stake"],subtree:!0}),console.log("[app_events] MutationObserver for stake changes initialized"),document.addEventListener("bma-bet-entry-remove",h=>{console.log("[app_events] Removing bet entry:",h.detail);const m=h.target,d=h.detail;m.remove(),setTimeout(()=>{const T=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(T){const S=be(),P=S.coreTourn[S.coreTourn.length-1];if(P&&P.data){const C=P.data.find(I=>I.guid===T);C&&Je.updateTournamentDashboard(C)}}},100),document.querySelectorAll("bma-bet-match-card").forEach(b=>{(b.shadowRoot?.querySelectorAll(".btn")||[]).forEach(S=>{const P=S.dataset.betType,C=S.dataset.price,I=P===d.type,$=C===d.odds;I&&$&&S.classList.contains("btn--active")&&(S.classList.remove("btn--active"),console.log("[app_events] Deactivated button via X removal:",{btnType:P,btnPrice:C}))})});const _=document.querySelector(".bet-grid__slip-BETSLIP-content");_&&_.children.length,setTimeout(()=>{r()},100)}),J.subscribe(e.hierTopics.CANVAS__HYDRATE__STATUS,(h,m)=>{const d=JSON.parse(m);d&&d.guid&&neodigmUtils&&neodigmUtils.shake(`[data-bma-tourn-guid="${d.guid}"]`)}),J.subscribe(e.hierTopics.WC__APP__FOOT,(h,m)=>{JSON.parse(m);let d=16;switch(h){case e.hierTopics.WC__APP__FOOT__ALL_SPORTS:J.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_LOBBY,JSON.stringify({tab:"ALL_SPORTS",timestamp:Date.now()}));break;case e.hierTopics.WC__APP__FOOT__MY_TOURNEYS:J.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_MY,JSON.stringify({tab:"MY_TOURNEYS",timestamp:Date.now()}));break;case e.hierTopics.WC__APP__FOOT__LEADERBOARD:d=24,J.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_LEADERBOARD,JSON.stringify({tab:"LEADERBOARD",timestamp:Date.now()}));break;case e.hierTopics.WC__APP__FOOT__MY_PROFILE:J.publish(e.hierTopics.WC__APP__HEAD_TOP__USER_PROFILE,JSON.stringify({tab:"USER_PROFILE",timestamp:Date.now()}));break}d&&neodigmWired4Sound&&neodigmWired4Sound.sound(d).vibrate()}),J.subscribe(e.hierTopics.WC__APP__HEAD_SPORTS,(h,m)=>{const d=JSON.parse(m);let g=16;h=="WC.APP.HEAD_SPORTS.PREV"||h=="WC.APP.HEAD_SPORTS.NEXT"||h=="WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START"?g=3:(n=d.key||"all",console.log(`[app_events] Sports filter changed to: ${n} (${d.group})`),J.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"SPORT_FILTER_CHANGE"}))),g&&neodigmWired4Sound&&neodigmWired4Sound.sound(g).vibrate()}),J.subscribe(e.hierTopics.WC__APP__HEAD_MID,(h,m)=>{JSON.parse(m);let d=16;const g=()=>{n="all";const _=document.querySelector("bma-app-head-sports");_&&_.setAttribute("data-selected-chip","all")};switch(h){case"WC.APP.HEAD_MID.HEAD_MID_LOBBY":t="lobby",g(),J.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"FILTER_CHANGE"}));break;case"WC.APP.HEAD_MID.HEAD_MID_MY":if(!e.appSession?.session_user?.guid){console.warn("[app_events] No user GUID found, cannot filter tournaments"),typeof neodigmToast<"u"&&neodigmToast.q("Please sign in to view your tournaments","warning");return}t="my",g(),J.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"FILTER_CHANGE"}));break;case"WC.APP.HEAD_MID.HEAD_MID_COMPLETED":t="completed",g(),J.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"FILTER_CHANGE"}));break;case"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD":t="leaderboard",g(),a(),d=24,typeof neodigmToast<"u"&&neodigmToast.q("Feature not Available|in Beta","night");break;case"WC.APP.HEAD_MID.HEAD_MID_SQUAD":t="squad",g(),a(),d=24,typeof neodigmToast<"u"&&neodigmToast.q("Feature not Available|in Beta","night");break}d&&neodigmWired4Sound&&neodigmWired4Sound.sound(d).vibrate()}),J.subscribe(e.hierTopics.ROUTE__HOME__USER_PROFILE,async(h,m)=>{JSON.parse(m);let d=16;switch(h){case"ROUTE.HOME.USER_PROFILE.INSTALL_PWA":const g=window.deferredPWAPrompt;if(!g){console.log("No install prompt available"),typeof neodigmToast<"u"&&neodigmToast.q("PWA install not available","warning");return}try{g.prompt();const{outcome:b}=await g.userChoice;b==="accepted"?(console.log("PWA installed successfully"),window.deferredPWAPrompt=null,typeof neodigmToast<"u"&&neodigmToast.q("App installed successfully!","success"),d=8,neodigmSodaPop&&neodigmSodaPop.close()):(console.log("PWA install declined"),typeof neodigmToast<"u"&&neodigmToast.q("Install cancelled","night"))}catch(b){console.error("PWA install error:",b),typeof neodigmToast<"u"&&neodigmToast.q("Install failed","danger")}break;case"ROUTE.HOME.USER_PROFILE.TOGGLE_THEME":(()=>{const T=e.appCLIFeatures.features.theme.state==="dark"?"light":"dark";e.setFeaturePersistPub("theme",{state:T});const S=document.getElementById("app");S&&S.setAttribute("data-sync-theme",T),document.body.setAttribute("data-sync-theme",T)})(),neodigmSodaPop&&neodigmSodaPop.close();break;case"ROUTE.HOME.USER_PROFILE.RESET_PASSWORD":fs.push({name:"resethash_route"}),neodigmSodaPop&&neodigmSodaPop.close();break;case"ROUTE.HOME.USER_PROFILE.SIGNOUT":fs.push({name:"signout_route"}),neodigmSodaPop&&neodigmSodaPop.close();break}d&&neodigmWired4Sound&&neodigmWired4Sound.sound(d).vibrate()});const c=(h,m)=>{const d=h.split(".").pop();console.log("[app_events] SODAPOP_PLAY subscriber - action:",d,"topic:",h),setTimeout(()=>{const g=document.querySelectorAll(".play-cntr .btn-info-sm"),b=document.querySelector(".play-cntr")?.closest("neodigm-sodapop");g.forEach(T=>{const S=T.dataset.publishRouteHome?.split(".").pop()||"";if(S===d){if(console.log("[app_events] Activating button:",S),T.classList.add("btn-info-sm--active"),T.classList.remove("btn-info-sm--inactive"),neodigmCarousel.nav({id:"caro-play",nav:S}),neodigmWired4Sound.sound(3),b){const P=d==="PLAY"?"hidden":"auto";b.style.overflow=P,console.log("[app_events] Set sodapop overflow to:",P)}}else T.classList.add("btn-info-sm--inactive"),T.classList.remove("btn-info-sm--active")})},100)};J.subscribe("ROUTE.HOME.SODAPOP_PLAY.INFO",c),J.subscribe("ROUTE.HOME.SODAPOP_PLAY.LEADERBOARD",c),J.subscribe("ROUTE.HOME.SODAPOP_PLAY.PLAY",(h,m)=>{JSON.parse(m);const d=document.getElementById("btn-join__play--id");if(!d){console.warn("[app_events] PLAY button not found");return}const g=d.dataset.requiresJoin==="true",_=d.textContent.trim().toLowerCase();if(console.log("[app_events] PLAY button clicked - text:",_,"requiresJoin:",g),g&&_==="join"){const T=document.querySelector(".play-cntr")?.dataset?.currentTournGuid,S=be();if(!T){console.error("[app_events] No tournament GUID found");return}console.log("[app_events] Executing JOIN for tournament:",T),J.publish(S.hierTopics.WC__TOURN_ACTION,JSON.stringify({action:"JOIN",tournamentGuid:T,timestamp:Date.now()})),d.textContent="Play",d.dataset.requiresJoin="false",setTimeout(()=>{c(h),console.log("[app_events] JOIN triggered, advancing carousel to PLAY page")},500)}else c(h),console.log("[app_events] Advancing carousel to PLAY page")}),J.subscribe(e.hierTopics.WC__APP__HEAD_TOP,(h,m)=>{JSON.parse(m);let d=10;switch(h){case"WC.APP.HEAD_TOP.USER_PROFILE":d=10,neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_my_profile"),setTimeout(()=>{neodigmCarousel.nav({id:"caro-user_profile",nav:"caro-page__badges"})},1200);break;case"WC.APP.HEAD_TOP.LOGO":const g=e.appSession.session_app.version,_=new Date().getFullYear();g&&neodigmToast&&neodigmToast.q(`${g} 1/19/2026, 10:56:24 AM|© ${_} Bet Max Action`,"night");break}d&&neodigmWired4Sound&&neodigmWired4Sound.sound(d).vibrate()});let p=null,f=null;J.subscribe(e.hierTopics.WC__TOURN_ACTION,(h,m)=>{const d=JSON.parse(m);let g=0;switch(d?.action){case"JOIN":g=512;break;case"PLAY":g=8;break;case"INFO":g=8;break}if(g){p=d?.tournamentGuid,f=d?.action,console.log("[app_events] Storing pending tourn data:",p,f);const _=e.appSession?.session_user?.guid,b=d?.tournamentGuid;_&&b?ve.fetchBetSlips(_,b).then(T=>{if(T?.rows){const S={timestamp:Date.now(),source:"API",data:T.rows};e.pushcoreBetSlip(S),console.log("[app_events] Bet slips fetched:",T.rows.length,"items")}setTimeout(()=>{neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_play"),setTimeout(()=>{J.publish(e.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,JSON.stringify(T))},3e3)},g)}).catch(T=>{console.error("[app_events] Error fetching bet slips:",T),setTimeout(()=>{neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_play")},g)}):setTimeout(()=>{neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_play")},g)}}),J.subscribe(e.hierTopics.WC__TOURN_ACTION,(h,m)=>{const d=JSON.parse(m);let g=16;switch(d?.action){case"FOCUS":g=3;break;case"SPORT_ICON":g=10;break;case"JOIN":g=5;break;case"PLAY":g=16;break}g&&neodigmWired4Sound&&neodigmWired4Sound.sound(g).vibrate()}),J.subscribe(e.hierTopics.WC__TOURN_ACTION,(h,m)=>{const d=JSON.parse(m);let g=0,_="night";switch(neodigmOpt&&neodigmOpt.EVENT_SOUNDS&&(neodigmOpt.EVENT_SOUNDS=!1),d?.tournamentStatus){case"UPCOMING":_="success";break;case"LOCKED":_="warning";break;case"COMPLETED":_="danger";break}switch(d?.action){case"SPORT_ICON":d?.sportTitle==d?.sportDescription?g=d?.sportTitle:g=d?.sportTitle+"|"+d?.sportDescription;break}g&&neodigmToast&&neodigmToast.q(g,_)}),J.subscribe(e.hierTopics.WC__TOURN_ACTION,async(h,m)=>{const d=JSON.parse(m);if(d?.action==="JOIN"){const _=be().appSession?.session_user?.guid;if(!_){console.error("No entity guid found in session"),typeof neodigmToast<"u"&&neodigmToast.q("Please sign in to join tournaments","warning");return}const b=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${d.tournamentGuid}"]`);b&&(b.setAttribute("data-bma-tourn-wait","true"),Kn.shootConfetti());const T={acctEntityGuid:_,tournamentGuid:d.tournamentGuid};try{const S={method:"POST",body:JSON.stringify(T),headers:ve.genHeaders()};console.log("Posting to:",ve.API_baseURI+"/m5t/"+ve.API_ver+"/coreTournaments/join",T);const C=await(await fetch(ve.API_baseURI+"/m5t/"+ve.API_ver+"/coreTournaments/join",S)).json();if(console.log("Join response:",C),C.ok)typeof neodigmToast<"u"&&neodigmToast.q("Successfully joined tournament!","success"),setTimeout(()=>{if(b){b.setAttribute("data-bma-tourn-wait","false");const I=b.getAttribute("data-bma-tourn-entities");if(I)try{const $=JSON.parse(I);$.guids.includes(_)||($.guids.push(_),b.setAttribute("data-bma-tourn-entities",JSON.stringify($)))}catch($){console.error("Failed to parse entities:",$)}}},3e3);else{const I=C?.message||"Failed to join tournament";typeof neodigmToast<"u"&&neodigmToast.q(I,"danger"),b&&b.setAttribute("data-bma-tourn-wait","false")}}catch(S){console.error("Join tournament error:",S),typeof neodigmToast<"u"&&neodigmToast.q("Network error joining tournament","danger"),b&&b.setAttribute("data-bma-tourn-wait","false")}}}),J.subscribe(e.hierTopics.ROUTE__HOME_ONMOUNT,async(h,m)=>{console.log("[app_events] ROUTE__HOME_ONMOUNT event received");const d=be();try{const g=await ve.fetchTournaments();console.log("[app_events] Tournaments fetched:",g),g?.rows&&Array.isArray(g.rows)?(d.pushCoreTourn({timestamp:Date.now(),source:"API",data:g.rows}),console.log("[app_events] Pushed to coreTourn, length:",d.coreTourn.length),J.publish(d.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now()}))):console.warn("[app_events] Invalid API response format:",g)}catch(g){console.error("[app_events] Error fetching tournaments:",g),typeof neodigmToast<"u"&&neodigmToast.q("Failed to load tournaments","danger")}}),J.subscribe(e.hierTopics.ROUTE__HOME_HYDRATE,(h,m)=>{console.log("[app_events] ROUTE__HOME_HYDRATE event received");const d=be();if(d.coreTourn.length===0){console.warn("[app_events] No tournament data in coreTourn array");return}const g=d.coreTourn[d.coreTourn.length-1],_=d.coreTourn.length>1?d.coreTourn[d.coreTourn.length-2]:null;console.log("[app_events] Hydrating with latest data:",g);const b=[];if(_){const C=g.data,I=_.data;C.forEach($=>{const A=I.find(R=>R.guid===$.guid);A&&A.status!==$.status&&(console.log(`[app_events] Status changed for tournament ${$.guid}: ${A.status} -> ${$.status}`),b.push($.guid))})}const T=d.appSession?.session_user?.guid,S=[...g.data].sort((C,I)=>{const $=C.status||C.class,A=I.status||I.class,R=C.entities?.guids||[],U=I.entities?.guids||[],w=R.includes(T),q=U.includes(T),V=(Le,Se)=>{const ke=new Date(Le.status_time||0).getTime();return new Date(Se.status_time||0).getTime()-ke},ne=$==="LOCKED"&&w,X=A==="LOCKED"&&q;if(ne&&!X)return-1;if(!ne&&X)return 1;if(ne&&X)return V(C,I);const M=$==="UPCOMING",z=A==="UPCOMING";if(M&&!z)return-1;if(!M&&z)return 1;if(M&&z)return V(C,I);const re=$==="COMPLETED"&&w,ee=A==="COMPLETED"&&q;if(re&&!ee)return-1;if(!re&&ee)return 1;if(re&&ee)return V(C,I);const Te=$==="COMPLETED"&&!w,de=A==="COMPLETED"&&!q;return Te&&!de?1:!Te&&de?-1:V(C,I)}),P=Je.categorizeTournaments(S,t,n,T);if(console.log(`[app_events] Categorized into ${P.length} categories for filter: ${t}/${n}`),window._homeRouteRenderCards&&typeof window._homeRouteRenderCards=="function"){if(window._homeRouteRenderCards(P,!0),setTimeout(()=>{a(),console.log("[app_events] Re-applied filter after hydration:",t)},100),b.length>0){const C=g.data;b.forEach(I=>{const $=C.find(A=>A.guid===I);if($){const A=Math.floor(Math.random()*2e3)+1e3;setTimeout(()=>{J.publish(d.hierTopics.CANVAS__HYDRATE__STATUS,JSON.stringify({guid:I,status:$.status,timestamp:Date.now()}))},A)}})}}else console.warn("[app_events] window._homeRouteRenderCards not available")}),J.subscribe(e.hierTopics.SSE__CORE__TOURN_SYNC,(h,m)=>{console.log("[app_events] SSE__CORE__TOURN_SYNC event received:",m);const d=be();try{const g=JSON.parse(m);console.log("[app_events] SSE tournament sync data:",g);const _=JSON.parse(g.msg);if(console.log("[app_events] Parsed tournaments array:",_),!Array.isArray(_)){console.warn("[app_events] SSE msg is not an array:",_);return}d.pushCoreTourn({timestamp:Date.now(),source:"SSE",data:_}),console.log("[app_events] Pushed SSE data to coreTourn, length:",d.coreTourn.length),J.publish(d.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"SSE"}))}catch(g){console.error("[app_events] Error processing SSE tournament sync:",g)}}),setTimeout(function(){neodigmSodaPop&&neodigmMarquee&&neodigmEnchantedCTA&&(neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{NeodigmClaire.showCanv("neodigm-sodapop",.5).setTheme(["warning","success"]).initCanvOn("neodigm-sodapop").waxOn("neodigm-sodapop")},1e3),neodigmMetronome.init().pause(800),neodigmMarquee.init().pause(1200),neodigmEnchantedCTA.init(),neodigmCarousel.init()}),neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{neodigmUtils.typeOn({q1st:"#caption__my-profile",msg:`${e.appSession.session_user.name}|${e.appSession.session_user.email}|${e.appSession.session_user.fname} ${e.appSession.session_user.lname}|My Profile`,mode:"LOOP",uniqueDelay:124});const h=e.appSession?.session_user?.guid;if(console.log("[app_events] User GUID:",h),console.log("[app_events] coreTourn length:",e.coreTourn.length),!h||e.coreTourn.length===0){console.warn("[app_events] Missing user GUID or tournament data");return}const d=e.coreTourn[e.coreTourn.length-1].data;console.log("[app_events] Processing tournaments:",d.length);let g=0,_=0,b=0;d.forEach((T,S)=>{if(!T.tags||!Array.isArray(T.tags)){console.log(`[app_events] Tournament ${S} has no tags or tags not an array`);return}T.tags.forEach((P,C)=>{if(typeof P=="object"&&P!==null&&P[h]){const I=P[h];I==="--badge__ribbon--gold"?g++:I==="--badge__ribbon--silver"?_++:I==="--badge__ribbon--bronze"&&b++}})}),setTimeout(()=>{let T=document.querySelectorAll(".badge-counter");if(T.length===0){const S=document.querySelector("neodigm-sodapop");S&&(T=S.querySelectorAll(".badge-counter"))}T.length>=3?(T[0].textContent=g,T[1].textContent=_,T[2].textContent=b,console.log("[app_events] Updated UI counters successfully")):console.warn("[app_events] Not enough counter elements found")},500)},1e3)},"sodapop_my_profile"),neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{const h=be(),m=document.querySelector(".play-cntr");p&&(m.dataset.currentTournGuid=p),f&&(m.dataset.currentTournAction=f);const d=m?.dataset?.currentTournGuid,g=m?.dataset?.currentTournAction||"INFO";console.log("[app_events] sodapop_play opened - GUID:",d,"action:",g),(()=>{const A=document.getElementById("btn-join__play--id");if(!A||!d||h.coreTourn.length===0)return;const U=h.coreTourn[h.coreTourn.length-1].data.find(X=>X.guid===d);if(!U)return;const w=h.appSession?.session_user?.guid,q=U.entities?.guids?.includes(w),V=U.status,ne=g;A.style.display="none",!(V==="COMPLETED"||V==="LOCKED"&&!q)&&(A.style.display="",V==="UPCOMING"&&!q?ne==="INFO"?(A.textContent="Join",A.dataset.requiresJoin="true"):ne==="PLAY"&&(A.textContent="Play",A.dataset.requiresJoin="false"):(A.textContent="Play",A.dataset.requiresJoin="false"))})(),(()=>{if(!d||h.coreTourn.length===0)return;const R=h.coreTourn[h.coreTourn.length-1].data.find(M=>M.guid===d);if(!R)return;const U=document.getElementById("pop-play__caro-info-summary1--id");if(!U)return;const w=M=>{if(!M)return"N/A";const z=new Date(M);return isNaN(z.getTime())?"Invalid Date":z.toLocaleString(void 0,{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit",hour12:!0})},q=M=>{switch(M){case"UPCOMING":return"var(--app-core-color--yellow-3__dark--brand, #F7C60D)";case"LOCKED":return"var(--app-core-color--green-3__dark--brand, #14b963)";case"COMPLETED":return"var(--app-core-color--gray-6__dark--brand, #969696)";default:return"#fff"}},V=[{caption:"Start",value:w(R.window_start_time)},{caption:"End",value:w(R.window_end_time)},{caption:"Status",value:R.status||"Unknown",color:q(R.status)},{caption:"Entry Fee",value:"FREE"},{caption:"TD$",value:`${R.tournament_dollars||0}`},{caption:"Participants",value:`${R.entities?.guids?.length||0} / ${R.entities?.max||0}`},{caption:"Games",value:`${R.matches_expanded.length||0}`}];U.innerHTML=V.map(M=>`
                                <div class="info-card">
                                    <div class="info-card__caption">${M.caption}</div>
                                    <div class="info-card__value" ${M.color?`style="color: ${M.color}"`:""}>${M.value}</div>
                                </div>
                            `).join("");const ne=document.getElementById("pop-play__caro-info-summary2--id");ne&&R.sports_allowed&&Array.isArray(R.sports_allowed)&&(ne.innerHTML=R.sports_allowed.map(M=>{const z=M.key||M,re=$t.find(Te=>Te.key===z),ee=re?re.group:"default";return`<bma-sport-icon sport="${z}" data-sport-group="${ee}"></bma-sport-icon>`}).join(""));const X=document.getElementById("pop-play__caro-info-list--id");X&&R.matches_expanded&&Array.isArray(R.matches_expanded)&&(X.innerHTML=R.matches_expanded.map(M=>{const z=M.scoreboard_data?typeof M.scoreboard_data=="string"?M.scoreboard_data:JSON.stringify(M.scoreboard_data):"";return`
                                        <bma-match-status
                                            data-match-guid="${M.guid||M.odds_id||M.id||""}"
                                            data-match-title="${M.short_title||M.title||"Match"}"
                                            data-match-scheduled-at="${M.scheduled_at||""}"
                                            data-match-home-team="${M.home_team_id||"Home"}"
                                            data-match-away-team="${M.away_team_id||"Away"}"
                                            data-match-home-score="${M.home_team_score!==null&&M.home_team_score!==void 0?M.home_team_score:""}"
                                            data-match-away-score="${M.away_team_score!==null&&M.away_team_score!==void 0?M.away_team_score:""}"
                                            data-match-scoreboard="${z.replace(/"/g,"&quot;")}"
                                            data-match-sport-id="${M.sport_id||""}"
                                            data-sync-theme="dark"
                                        ></bma-match-status>
                                    `}).join(""))})(),setTimeout(()=>{const A=h.appSession?.session_user?.guid;d&&ve.fetchLeaderboard(d).then(R=>{const U=document.getElementById("pop-play__caro-leaderboard--id");if(!U)return;const w=R?.data||R?.rows;if(w&&w.length>0){const V=h.coreTourn[h.coreTourn.length-1]?.data.find(ee=>ee.guid===d);U.innerHTML=w.map((ee,Te)=>{let de="";if(V?.tags&&Array.isArray(V.tags)){const ke=V.tags.find(ue=>typeof ue=="object"&&ue!==null&&ue[ee.user_guid]?ue[ee.user_guid].startsWith("--badge__ribbon--"):!1);if(ke){const ue=ke[ee.user_guid];ue==="--badge__ribbon--gold"?de="badge-trophy--gold":ue==="--badge__ribbon--silver"?de="badge-trophy--silver":ue==="--badge__ribbon--bronze"&&(de="badge-trophy--bronze")}}const Le=ee.combined_betslips?typeof ee.combined_betslips=="string"?ee.combined_betslips:JSON.stringify(ee.combined_betslips):"[]";let Se="[]";if(ee.combined_betslips&&V?.matches_expanded){const ke=typeof ee.combined_betslips=="string"?JSON.parse(ee.combined_betslips):ee.combined_betslips,ue=[...new Set(ke.map(K=>K.coreMatches__guid||K.match_guid||K.odds_id).filter(Boolean))],x=V.matches_expanded.filter(K=>{const Y=K.guid||K.id||K.odds_id;return ue.includes(Y)});Se=JSON.stringify(x)}return`
                                                <bma-leaderboard-card
                                                    data-rank="${Te+1}"
                                                    data-username="${ee.username||"Unknown"}"
                                                    data-user-guid="${ee.user_guid||""}"
                                                    data-tournament-dollars="${ee.calculated_tournament_dollars||0}"
                                                    data-total-betslips="${ee.total_betslips||0}"
                                                    data-total-payout="${ee.total_payout||0}"
                                                    data-combined-betslips="${Le.replace(/"/g,"&quot;")}"
                                                    data-user-matches="${Se.replace(/"/g,"&quot;")}"
                                                    data-badge-class="${de}"
                                                    data-is-current-user="${ee.user_guid===A}"
                                                    data-sync-theme="dark"
                                                ></bma-leaderboard-card>
                                            `}).join("");const ne=w.findIndex(ee=>ee.user_guid===A),X=ne>=0?ne+1:w.length,M=V?.entities?.guids?.length||w.length,z=document.getElementById("dashboard-rank"),re=document.getElementById("dashboard-rank-percentile");if(z&&(z.innerHTML=`
                                                <span class="tourn-dashboard__rank-text">${X}/${M}</span>
                                            `),re&&M>0){const ee=Math.round((M-X+1)/M*100);re.textContent=`Top ${ee}%`}}else U.innerHTML=`
                                            <div class="leaderboard-empty">
                                                <p>No leaderboard data available yet.</p>
                                                <p class="leaderboard-empty__subtitle">Be the first to place a bet!</p>
                                            </div>
                                        `}).catch(R=>{console.error("[app_events] Error fetching leaderboard:",R);const U=document.getElementById("pop-play__caro-leaderboard--id");U&&(U.innerHTML=`
                                            <div class="leaderboard-empty">
                                                <p>Unable to load leaderboard data.</p>
                                            </div>
                                        `)})},600);let T=g==="PLAY"||g==="JOIN"?"PLAY":g;if(!d||h.coreTourn.length===0||h.coreTourn[h.coreTourn.length-1].data.find(U=>U.guid===d)?.status==="COMPLETED"&&(T="LEADERBOARD",console.log("[app_events] Tournament is COMPLETED, defaulting to LEADERBOARD")),T){const A=`ROUTE.HOME.SODAPOP_PLAY.${T}`;console.log("[app_events] Publishing initial topic:",A),J.publish(A,JSON.stringify({tournamentGuid:d,timestamp:Date.now()}))}if(!d||h.coreTourn.length===0)return;const P=h.coreTourn[h.coreTourn.length-1].data.find(A=>A.guid===d);Je.renderMatchCards(P),neodigmUtils.typeOn({q1st:"#pop-play__tourn-caption--id",msg:`${P.caption}`,mode:"",uniqueDelay:62}),neodigmUtils.typeOn({q1st:"#pop-play__tourn-tagline--id",msg:`${P.tagline}`,mode:"",uniqueDelay:91}),console.log("[Modal Debug] Updating dashboard for tournament:",P?.caption);const C=document.querySelector(".head-caption");console.log("[Modal Debug] Modal header found:",!!C),C&&console.log("[Modal Debug] Modal classes:",C.className),Je.updateTournamentDashboard(P);const I=document.getElementById("dashboard-rank"),$=document.getElementById("dashboard-rank-percentile");if(I){const A=P.entities?.guids?.length||0;I.innerHTML=`
                                <span class="tourn-dashboard__rank-text">-/${A}</span>
                            `}$&&($.textContent="Loading...")},1e3)},"sodapop_play"))},3e3),setTimeout(function(){neodigmSodaPop&&NeodigmClaire&&neodigmSodaPop.setOnClose(function(){return!0})},4e3)}},bf={__name:"App",setup(e){const t=gt(),n=be();return setTimeout(function(){neodigmOpt.mvvLegit&&mvvLegit.setNavConroller((a=null)=>{neodigmOpt.N55_DEBUG_lOG&&neodigmToast.q(`Legit route: ${a}`,"primary"),t.push({name:a})}).setOnState((a=null)=>{a&&neodigmOpt.ROOT&&(neodigmOpt.ROOT.dataset.mvvLegit=a)}).init({BASE:ve.API_baseURI})},2e3),setTimeout(()=>{n.appCLIFeatures.features.sse.state&&pa.establishSSE("https://machfive-bmacdev-rest.onrender.com/v5/sse?appid=BMACORE&sseid=user%40example.com&lastkey=123",n.appSession.session_user.guid,n,!0)},3e3),setTimeout(()=>{Je.bindAppListeners(n)},3e3),t.beforeEach((a,s,o)=>{a.name=="splash_route"||a.name&&mvvLegit&&mvvLegit.isRouteAllowed(a.name)?o():o(!1)}),(a,s)=>(Xe(),so(Ft(ki),null,{default:Za(({Component:o})=>[He(Mc,{name:"slide-left"},{default:Za(()=>[(Xe(),so($l(o)))]),_:2},1024)]),_:1}))}};class yf extends HTMLElement{constructor(){super(),this.clockInterval=null}connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this.startClock()}disconnectedCallback(){this.clockInterval&&clearInterval(this.clockInterval)}static get observedAttributes(){return["data-sync-theme","data-user-name"]}attributeChangedCallback(t,n,a){this.shadowRoot&&n!==a&&this.render()}startClock(){this.updateTime(),this.clockInterval=setInterval(()=>{this.updateTime()},24e3)}updateTime(){const t=this.shadowRoot?.querySelector(".status-time");if(t){const n=new Date,a=n.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0}),s=n.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});t.textContent=`${s} ${a}`}}handleLogoClick(t){t.preventDefault(),J.publish("WC.APP.HEAD_TOP.LOGO",JSON.stringify({timestamp:Date.now()}))}handleProfileClick(t){t.preventDefault(),J.publish("WC.APP.HEAD_TOP.USER_PROFILE",JSON.stringify({timestamp:Date.now()}))}render(){const a=(document.getElementById("app")?.getAttribute("data-sync-theme")||"dark")==="dark",s=this.getAttribute("data-user-name")||"Guest";this.shadowRoot.innerHTML=`
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
            height: 56px;
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
    `;const o=this.shadowRoot.querySelector("#logoLink"),r=this.shadowRoot.querySelector("#profileIcon");o&&o.addEventListener("click",i=>this.handleLogoClick(i)),r&&(r.addEventListener("click",i=>this.handleProfileClick(i)),r.addEventListener("keypress",i=>{(i.key==="Enter"||i.key===" ")&&this.handleProfileClick(i)})),this.updateTime()}}customElements.define("bma-app-head-top",yf);class vf extends HTMLElement{constructor(){super(),this.selectedTab="head_mid_lobby"}connectedCallback(){this.attachShadow({mode:"open"}),this.render()}static get observedAttributes(){return["data-sync-theme","data-selected-tab"]}attributeChangedCallback(t,n,a){this.shadowRoot&&n!==a&&(t==="data-selected-tab"&&(this.selectedTab=a||"head_mid_lobby"),this.render())}handleTabClick(t,n){this.selectedTab=t,this.setAttribute("data-selected-tab",t),J.publish(n,JSON.stringify({tab:t,timestamp:Date.now()})),this.render()}render(){const a=(document.getElementById("app")?.getAttribute("data-sync-theme")||"dark")==="dark",s=[{name:"head_mid_lobby",caption:"Tournament Lobby",mobileCaption:"Lobby",topic:"WC.APP.HEAD_MID.HEAD_MID_LOBBY"},{name:"head_mid_my",caption:"My Tournaments",mobileCaption:"My Tourneys",topic:"WC.APP.HEAD_MID.HEAD_MID_MY"},{name:"head_mid_completed",caption:"Completed Tournaments",mobileCaption:"Completed Tourneys",topic:"WC.APP.HEAD_MID.HEAD_MID_COMPLETED"},{name:"head_mid_leaderboard",caption:"Leaderboard Ranking",mobileCaption:"Leaderboard",topic:"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD"},{name:"head_mid_squad",caption:"My Squads",mobileCaption:"Squads",topic:"WC.APP.HEAD_MID.HEAD_MID_SQUAD"}],o=r=>`
        <div
          class="tab-item ${this.selectedTab===r.name?"tab-selected":"tab-unselected"}"
          data-tab="${r.name}"
          role="button"
          tabindex="0"
          aria-label="${r.caption}"
        >
          <span class="tab-caption-desktop">${r.caption}</span>
          <span class="tab-caption-mobile">${r.mobileCaption}</span>
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
        ${s.map(r=>o(r)).join("")}
      </div>
    `,s.forEach(r=>{const i=this.shadowRoot.querySelector(`[data-tab="${r.name}"]`);i&&(i.addEventListener("click",()=>this.handleTabClick(r.name,r.topic)),i.addEventListener("keypress",l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),this.handleTabClick(r.name,r.topic))}))})}}customElements.define("bma-app-head-mid",vf);class Tf extends HTMLElement{constructor(){super(),this.selectedChip="all",this.savedScrollPosition=0}connectedCallback(){this.attachShadow({mode:"open"}),this.render()}static get observedAttributes(){return["data-sync-theme","data-selected-chip"]}attributeChangedCallback(t,n,a){this.shadowRoot&&n!==a&&(t==="data-selected-chip"&&(this.selectedChip=a||"all"),this.render())}handleChipClick(t,n){const a=this.shadowRoot.querySelector(".chips-container");a&&(this.savedScrollPosition=a.scrollLeft),this.selectedChip=t,this.setAttribute("data-selected-chip",t),J.publish("WC.APP.HEAD_SPORTS",JSON.stringify({key:t,group:n,timestamp:Date.now()})),this.render()}scrollToPrev(){const t=this.shadowRoot.querySelector(".chips-container");t&&(t.scrollBy({left:-256,behavior:"smooth"}),J.publish("WC.APP.HEAD_SPORTS.PREV",JSON.stringify({timestamp:Date.now()})))}scrollToNext(){const t=this.shadowRoot.querySelector(".chips-container");t&&(t.scrollBy({left:256,behavior:"smooth"}),J.publish("WC.APP.HEAD_SPORTS.NEXT",JSON.stringify({timestamp:Date.now()})))}initDragScroll(){const t=this.shadowRoot.querySelector(".chips-container");if(!t)return;let n=!1,a,s;t.addEventListener("mousedown",o=>{n=!0,t.style.cursor="grabbing",a=o.pageX-t.offsetLeft,s=t.scrollLeft,J.publish("WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START",JSON.stringify({action:"start",scrollPosition:s,timestamp:Date.now()}))}),t.addEventListener("mouseleave",()=>{n=!1,t.style.cursor="grab"}),t.addEventListener("mouseup",()=>{n=!1,t.style.cursor="grab"}),t.addEventListener("mousemove",o=>{if(!n)return;o.preventDefault();const i=(o.pageX-t.offsetLeft-a)*2;t.scrollLeft=s-i})}render(){const a=(document.getElementById("app")?.getAttribute("data-sync-theme")||"dark")==="dark",r=(be().appMeta?.sports||[]).filter(m=>m.active===!0),i=["NFL","NBA","NHL","EPL","MLB","NCAAF","MMA","Boxing"],l=[...r].sort((m,d)=>{const g=m.title||m.description||"",_=d.title||d.description||"",b=i.indexOf(g),T=i.indexOf(_);return b!==-1&&T!==-1?b-T:b!==-1?-1:T!==-1?1:g.toLowerCase().localeCompare(_.toLowerCase())}),u=[{key:"all",group:"All",title:"ALL",description:"All Sports"},{key:"multi",group:"Multi",title:"Multiple Sport",description:"Multi-Sport Tournaments"},...l],c=m=>{const d=this.selectedChip===m.key,g=m.key==="all";m.key;let _="";return g||(_=`<bma-sport-icon sport="${m.key}" data-sport-group="${m.group}"></bma-sport-icon>`),`
        <div
          class="sport-chip ${d?"chip-selected":"chip-unselected"}"
          data-chip="${m.key}"
          role="button"
          tabindex="0"
          aria-label="${m.description||m.title}"
        >
          ${_}
          <span class="chip-title">${m.title||m.group}</span>
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
            ${u.map(m=>c(m)).join("")}
          </div>
        </div>

        <aside class="nav-icon nav-next nav-icon__next" id="navNext" role="button" tabindex="0" aria-label="Scroll right"></aside>
      </div>
    `,u.forEach(m=>{const d=this.shadowRoot.querySelector(`[data-chip="${m.key}"]`);d&&d.addEventListener("click",()=>this.handleChipClick(m.key,m.group))});const p=this.shadowRoot.querySelector("#navPrev"),f=this.shadowRoot.querySelector("#navNext");p&&p.addEventListener("click",()=>this.scrollToPrev()),f&&f.addEventListener("click",()=>this.scrollToNext()),this.initDragScroll();const h=this.shadowRoot.querySelector(".chips-container");h&&this.savedScrollPosition>0&&(h.scrollLeft=this.savedScrollPosition)}}customElements.define("bma-app-head-sports",Tf);class Ef extends HTMLElement{constructor(){super(),this.selectedItem="foot_all_sports"}connectedCallback(){this.attachShadow({mode:"open"}),this.render()}static get observedAttributes(){return["data-sync-theme","data-selected-item"]}attributeChangedCallback(t,n,a){this.shadowRoot&&n!==a&&(t==="data-selected-item"&&(this.selectedItem=a||"foot_all_sports"),this.render())}handleItemClick(t,n){this.selectedItem=t,this.setAttribute("data-selected-item",t),J.publish(n,JSON.stringify({item:t,timestamp:Date.now()})),this.render()}render(){const a=(document.getElementById("app")?.getAttribute("data-sync-theme")||"dark")==="dark",s=[{name:"foot_all_sports",caption:"Lobby",iconVar:"--nav-icon__sports--",topic:"WC.APP.FOOT.ALL_SPORTS"},{name:"foot_my_tourneys",caption:"My Tourneys",iconVar:"--nav-icon__trophy--",topic:"WC.APP.FOOT.MY_TOURNEYS"},{name:"foot_leaderboard",caption:"Leaderboard",iconVar:"--nav-icon__leaderboard--",topic:"WC.APP.FOOT.LEADERBOARD"},{name:"foot_my_account",caption:"My Profile",iconVar:"--nav-icon__my_profile_circle--",topic:"WC.APP.FOOT.MY_PROFILE"}],o=r=>`
        <div
          class="nav-item ${this.selectedItem===r.name?"nav-selected":"nav-unselected"}"
          data-item="${r.name}"
          role="button"
          tabindex="0"
          aria-label="${r.caption}"
        >
          <div class="nav-icon" data-icon-var="${r.iconVar}"></div>
          <span class="nav-caption">${r.caption}</span>
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
        ${s.map(r=>o(r)).join("")}
      </div>
    `,s.forEach(r=>{const i=this.shadowRoot.querySelector(`[data-item="${r.name}"]`);i&&(i.addEventListener("click",()=>this.handleItemClick(r.name,r.topic)),i.addEventListener("keypress",l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),this.handleItemClick(r.name,r.topic))}))})}}customElements.define("bma-app-foot",Ef);class Sf extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}static get observedAttributes(){return["data-corebetslip"]}attributeChangedCallback(t,n,a){n!==a&&this.render()}get betSlipData(){const t=this.getAttribute("data-corebetslip");if(!t)return null;try{return JSON.parse(t)}catch(n){return console.error("[bma-bet-existing] Failed to parse data-corebetslip:",n),null}}render(){const t=this.betSlipData;if(!t){this.shadowRoot.innerHTML="<div>Invalid bet data</div>";return}const n=t.bet||[];if(n.length===0){this.shadowRoot.innerHTML="<div>No bet data</div>";return}const a=n[0],s=a.short_title||"Match Info N/A",r=Object.keys(a).filter(d=>d!=="short_title")[0]||"Unknown Team",i=a[r],l=i.odds||"N/A",u=i.type||"N/A",c=parseFloat(i.stake||0).toFixed(2),p=parseFloat(i.payout||0).toFixed(2),f=i.reconciled!==!1,h=t.status_time?Kn.formatDateLocal(t.status_time):"";let m=r;if(u==="spread"&&i.point){const d=parseFloat(i.point)>0?`+${i.point}`:i.point;m=`${r} ${d}`}else u==="total"&&i.point&&(m=`${i.team==="over"?"Over":"Under"} ${i.point}`);this.shadowRoot.innerHTML=`
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
          <div class="match_date">${h}</div>
        </div>
        <div class="grid_content">
          <!-- Row 1 -->
          <div class="content_team_points">${m}</div>
          <div class="content_odds">${l}</div>
          <div class="content_stake_text">${c}</div>

          <!-- Row 2 -->
          <div class="content_type">${u.toUpperCase()}</div>
          <div></div>
          <div></div>

          <!-- Row 3 (payout only) -->
          <div></div>
          <div></div>
          <div class="content_payout ${f?"":"unreconciled"}">Payout: ${p}</div>
        </div>
      </div>
    `}}customElements.define("bma-bet-existing",Sf);const zo=`
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
      <div class="head-caption tourn-dashboard">
        <section class="head-caption__text">
          <div class="tourn-dashboard__title">
            <div>
              <h3 id="pop-play__tourn-caption--id" class="pop-play__tourn-caption">Tournament</h3>
              <p id="pop-play__tourn-tagline--id" class="pop-play__tourn-tagline">Loading...</p>
            </div>
          </div>
        </section>
        <div class="head-caption__close">
          <img data-sodapop-close="true"
          src="https://bma-master.github.io/bma-core/img/X-v1.png" alt="Close">
        </div>
      </div>

      <!-- Stats Dashboard -->
      <div class="tourn-dashboard__tier2">
        <div class="tourn-dashboard__stat">
          <div class="tourn-dashboard__stat-label">TD$ BALANCE</div>
          <div class="tourn-dashboard__stat-value" id="dashboard-td-balance">TD$ 0</div>
          <div class="tourn-dashboard__gauge">
            <div class="tourn-dashboard__gauge-fill tourn-dashboard__gauge-fill--balance" style="width: 100%"></div>
          </div>
        </div>

        <div class="tourn-dashboard__stat">
          <div class="tourn-dashboard__stat-label">PENDING</div>
          <div class="tourn-dashboard__stat-value tourn-dashboard__stat-value--pending" id="dashboard-td-pending">TD$ 0</div>
          <div class="tourn-dashboard__gauge">
            <div class="tourn-dashboard__gauge-fill tourn-dashboard__gauge-fill--pending" style="width: 0%"></div>
          </div>
        </div>

        <div class="tourn-dashboard__stat">
          <div class="tourn-dashboard__stat-label">LEADERBOARD</div>
          <div class="tourn-dashboard__stat-value" id="dashboard-rank">
            <span class="tourn-dashboard__rank-badge">-</span>
            <span class="tourn-dashboard__rank-text">-/-</span>
          </div>
          <div class="tourn-dashboard__stat-subtext" id="dashboard-rank-percentile">Unranked</div>
        </div>

        <div class="tourn-dashboard__stat">
          <div class="tourn-dashboard__stat-label">PARTICIPANTS</div>
          <div class="tourn-dashboard__stat-value" id="dashboard-participants">0/0</div>
          <div class="tourn-dashboard__gauge">
            <div class="tourn-dashboard__gauge-fill tourn-dashboard__gauge-fill--participants" style="width: 0%"></div>
          </div>
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
        <section data-n55-carousel-page-name="LEADERBOARD"   data-n55-carousel-height="auto" 
        data-n55-cloak="true">
          <div id="pop-play__caro-leaderboard--id"></div>
        </section>
    </section>
</neodigm-carousel>

      <br>
    </article>
  </template>
`;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{document.body.insertAdjacentHTML("beforeend",zo)}):document.body.insertAdjacentHTML("beforeend",zo);window.deferredPWAPrompt=null;window.addEventListener("beforeinstallprompt",e=>{console.log("[Global] beforeinstallprompt event fired"),e.preventDefault(),window.deferredPWAPrompt=e,window.dispatchEvent(new CustomEvent("pwa-installable"))});window.addEventListener("appinstalled",()=>{console.log("[Global] appinstalled event fired"),window.deferredPWAPrompt=null,window.dispatchEvent(new CustomEvent("pwa-installed"))});const $s=ld(bf);$s.use(ud());$s.use(fs);$s.mount("#app");if("serviceWorker"in navigator){let e=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{e||(e=!0,window.neodigmToast&&window.neodigmToast.q("App updated! Reloading...","success"),setTimeout(()=>{window.location.reload()},1e3))}),document.addEventListener("visibilitychange",()=>{document.hidden||navigator.serviceWorker.getRegistration().then(t=>{t?.update()})})}window.addEventListener("resize",e=>{window.requestAnimationFrame(()=>{neodigmMetronome.subscribe(()=>{neodigmMetronome.unsubscribe(303),neodigmCarousel&&[...document.querySelectorAll("neodigm-carousel")].forEach(n=>{neodigmCarousel.init().nav({id:n.id,nav:"resize"},!1)})},303)})});
