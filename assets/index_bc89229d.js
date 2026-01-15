(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function hs(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const _e={},un=[],pt=()=>{},Vr=()=>!1,fa=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),gs=e=>e.startsWith("onUpdate:"),we=Object.assign,ms=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Li=Object.prototype.hasOwnProperty,fe=(e,t)=>Li.call(e,t),ne=Array.isArray,pn=e=>ha(e)==="[object Map]",zr=e=>ha(e)==="[object Set]",re=e=>typeof e=="function",Oe=e=>typeof e=="string",Kt=e=>typeof e=="symbol",ye=e=>e!==null&&typeof e=="object",Qr=e=>(ye(e)||re(e))&&re(e.then)&&re(e.catch),Xr=Object.prototype.toString,ha=e=>Xr.call(e),Di=e=>ha(e).slice(8,-1),Zr=e=>ha(e)==="[object Object]",_s=e=>Oe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,On=hs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ga=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},Ii=/-\w/g,Qe=ga(e=>e.replace(Ii,t=>t.slice(1).toUpperCase())),Mi=/\B([A-Z])/g,Yt=ga(e=>e.replace(Mi,"-$1").toLowerCase()),ma=ga(e=>e.charAt(0).toUpperCase()+e.slice(1)),xa=ga(e=>e?`on${ma(e)}`:""),Bt=(e,t)=>!Object.is(e,t),Ca=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},eo=(e,t,n,a=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:a,value:n})},Bi=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Fi=e=>{const t=Oe(e)?Number(e):NaN;return isNaN(t)?e:t};let Ys;const _a=()=>Ys||(Ys=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function bs(e){if(ne(e)){const t={};for(let n=0;n<e.length;n++){const a=e[n],s=Oe(a)?Ki(a):bs(a);if(s)for(const r in s)t[r]=s[r]}return t}else if(Oe(e)||ye(e))return e}const $i=/;(?![^(]*\))/g,Ui=/:([^]+)/,Hi=/\/\*[^]*?\*\//g;function Ki(e){const t={};return e.replace(Hi,"").split($i).forEach(n=>{if(n){const a=n.split(Ui);a.length>1&&(t[a[0].trim()]=a[1].trim())}}),t}function $t(e){let t="";if(Oe(e))t=e;else if(ne(e))for(let n=0;n<e.length;n++){const a=$t(e[n]);a&&(t+=a+" ")}else if(ye(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Yi="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ji=hs(Yi);function to(e){return!!e||e===""}const no=e=>!!(e&&e.__v_isRef===!0),ao=e=>Oe(e)?e:e==null?"":ne(e)||ye(e)&&(e.toString===Xr||!re(e.toString))?no(e)?ao(e.value):JSON.stringify(e,so,2):String(e),so=(e,t)=>no(t)?so(e,t.value):pn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[a,s],r)=>(n[Ra(a,r)+" =>"]=s,n),{})}:zr(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Ra(n))}:Kt(t)?Ra(t):ye(t)&&!ne(t)&&!Zr(t)?String(t):t,Ra=(e,t="")=>{var n;return Kt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};let Ce;class ro{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ce,!t&&Ce&&(this.index=(Ce.scopes||(Ce.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Ce;try{return Ce=this,t()}finally{Ce=n}}}on(){++this._on===1&&(this.prevScope=Ce,Ce=this)}off(){this._on>0&&--this._on===0&&(Ce=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,a;for(n=0,a=this.effects.length;n<a;n++)this.effects[n].stop();for(this.effects.length=0,n=0,a=this.cleanups.length;n<a;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,a=this.scopes.length;n<a;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function oo(e){return new ro(e)}function io(){return Ce}function Gi(e,t=!1){Ce&&Ce.cleanups.push(e)}let me;const Na=new WeakSet;class lo{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ce&&Ce.active&&Ce.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Na.has(this)&&(Na.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||uo(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,js(this),po(this);const t=me,n=et;me=this,et=!0;try{return this.fn()}finally{fo(this),me=t,et=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Ts(t);this.deps=this.depsTail=void 0,js(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Na.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ja(this)&&this.run()}get dirty(){return Ja(this)}}let co=0,kn,Pn;function uo(e,t=!1){if(e.flags|=8,t){e.next=Pn,Pn=e;return}e.next=kn,kn=e}function ys(){co++}function vs(){if(--co>0)return;if(Pn){let t=Pn;for(Pn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;kn;){let t=kn;for(kn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(a){e||(e=a)}t=n}}if(e)throw e}function po(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function fo(e){let t,n=e.depsTail,a=n;for(;a;){const s=a.prevDep;a.version===-1?(a===n&&(n=s),Ts(a),qi(a)):t=a,a.dep.activeLink=a.prevActiveLink,a.prevActiveLink=void 0,a=s}e.deps=t,e.depsTail=n}function Ja(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(ho(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function ho(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===In)||(e.globalVersion=In,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ja(e))))return;e.flags|=2;const t=e.dep,n=me,a=et;me=e,et=!0;try{po(e);const s=e.fn(e._value);(t.version===0||Bt(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{me=n,et=a,fo(e),e.flags&=-3}}function Ts(e,t=!1){const{dep:n,prevSub:a,nextSub:s}=e;if(a&&(a.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=a,e.nextSub=void 0),n.subs===e&&(n.subs=a,!a&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Ts(r,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function qi(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let et=!0;const go=[];function At(){go.push(et),et=!1}function Ot(){const e=go.pop();et=e===void 0?!0:e}function js(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=me;me=void 0;try{t()}finally{me=n}}}let In=0;class Wi{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Es{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!me||!et||me===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==me)n=this.activeLink=new Wi(me,this),me.deps?(n.prevDep=me.depsTail,me.depsTail.nextDep=n,me.depsTail=n):me.deps=me.depsTail=n,mo(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const a=n.nextDep;a.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=a),n.prevDep=me.depsTail,n.nextDep=void 0,me.depsTail.nextDep=n,me.depsTail=n,me.deps===n&&(me.deps=a)}return n}trigger(t){this.version++,In++,this.notify(t)}notify(t){ys();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{vs()}}}function mo(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let a=t.deps;a;a=a.nextDep)mo(a)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const na=new WeakMap,tn=Symbol(""),Va=Symbol(""),Mn=Symbol("");function Re(e,t,n){if(et&&me){let a=na.get(e);a||na.set(e,a=new Map);let s=a.get(n);s||(a.set(n,s=new Es),s.map=a,s.key=n),s.track()}}function Et(e,t,n,a,s,r){const o=na.get(e);if(!o){In++;return}const i=l=>{l&&l.trigger()};if(ys(),t==="clear")o.forEach(i);else{const l=ne(e),u=l&&_s(n);if(l&&n==="length"){const d=Number(a);o.forEach((f,m)=>{(m==="length"||m===Mn||!Kt(m)&&m>=d)&&i(f)})}else switch((n!==void 0||o.has(void 0))&&i(o.get(n)),u&&i(o.get(Mn)),t){case"add":l?u&&i(o.get("length")):(i(o.get(tn)),pn(e)&&i(o.get(Va)));break;case"delete":l||(i(o.get(tn)),pn(e)&&i(o.get(Va)));break;case"set":pn(e)&&i(o.get(tn));break}}vs()}function Ji(e,t){const n=na.get(e);return n&&n.get(t)}function rn(e){const t=ce(e);return t===e?t:(Re(t,"iterate",Mn),tt(e)?t:t.map(Ie))}function Ss(e){return Re(e=ce(e),"iterate",Mn),e}const Vi={__proto__:null,[Symbol.iterator](){return La(this,Symbol.iterator,Ie)},concat(...e){return rn(this).concat(...e.map(t=>ne(t)?rn(t):t))},entries(){return La(this,"entries",e=>(e[1]=Ie(e[1]),e))},every(e,t){return gt(this,"every",e,t,void 0,arguments)},filter(e,t){return gt(this,"filter",e,t,n=>n.map(Ie),arguments)},find(e,t){return gt(this,"find",e,t,Ie,arguments)},findIndex(e,t){return gt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return gt(this,"findLast",e,t,Ie,arguments)},findLastIndex(e,t){return gt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return gt(this,"forEach",e,t,void 0,arguments)},includes(...e){return Da(this,"includes",e)},indexOf(...e){return Da(this,"indexOf",e)},join(e){return rn(this).join(e)},lastIndexOf(...e){return Da(this,"lastIndexOf",e)},map(e,t){return gt(this,"map",e,t,void 0,arguments)},pop(){return vn(this,"pop")},push(...e){return vn(this,"push",e)},reduce(e,...t){return Gs(this,"reduce",e,t)},reduceRight(e,...t){return Gs(this,"reduceRight",e,t)},shift(){return vn(this,"shift")},some(e,t){return gt(this,"some",e,t,void 0,arguments)},splice(...e){return vn(this,"splice",e)},toReversed(){return rn(this).toReversed()},toSorted(e){return rn(this).toSorted(e)},toSpliced(...e){return rn(this).toSpliced(...e)},unshift(...e){return vn(this,"unshift",e)},values(){return La(this,"values",Ie)}};function La(e,t,n){const a=Ss(e),s=a[t]();return a!==e&&!tt(e)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=n(r.value)),r}),s}const zi=Array.prototype;function gt(e,t,n,a,s,r){const o=Ss(e),i=o!==e&&!tt(e),l=o[t];if(l!==zi[t]){const f=l.apply(e,r);return i?Ie(f):f}let u=n;o!==e&&(i?u=function(f,m){return n.call(this,Ie(f),m,e)}:n.length>2&&(u=function(f,m){return n.call(this,f,m,e)}));const d=l.call(o,u,a);return i&&s?s(d):d}function Gs(e,t,n,a){const s=Ss(e);let r=n;return s!==e&&(tt(e)?n.length>3&&(r=function(o,i,l){return n.call(this,o,i,l,e)}):r=function(o,i,l){return n.call(this,o,Ie(i),l,e)}),s[t](r,...a)}function Da(e,t,n){const a=ce(e);Re(a,"iterate",Mn);const s=a[t](...n);return(s===-1||s===!1)&&ks(n[0])?(n[0]=ce(n[0]),a[t](...n)):s}function vn(e,t,n=[]){At(),ys();const a=ce(e)[t].apply(e,n);return vs(),Ot(),a}const Qi=hs("__proto__,__v_isRef,__isVue"),_o=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Kt));function Xi(e){Kt(e)||(e=String(e));const t=ce(this);return Re(t,"has",e),t.hasOwnProperty(e)}class bo{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,a){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return a===(s?r?ll:Eo:r?To:vo).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(a)?t:void 0;const o=ne(t);if(!s){let l;if(o&&(l=Vi[n]))return l;if(n==="hasOwnProperty")return Xi}const i=Reflect.get(t,n,Ae(t)?t:a);if((Kt(n)?_o.has(n):Qi(n))||(s||Re(t,"get",n),r))return i;if(Ae(i)){const l=o&&_s(n)?i:i.value;return s&&ye(l)?Qa(l):l}return ye(i)?s?Qa(i):St(i):i}}class yo extends bo{constructor(t=!1){super(!1,t)}set(t,n,a,s){let r=t[n];if(!this._isShallow){const l=sn(r);if(!tt(a)&&!sn(a)&&(r=ce(r),a=ce(a)),!ne(t)&&Ae(r)&&!Ae(a))return l||(r.value=a),!0}const o=ne(t)&&_s(n)?Number(n)<t.length:fe(t,n),i=Reflect.set(t,n,a,Ae(t)?t:s);return t===ce(s)&&(o?Bt(a,r)&&Et(t,"set",n,a):Et(t,"add",n,a)),i}deleteProperty(t,n){const a=fe(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&a&&Et(t,"delete",n,void 0),s}has(t,n){const a=Reflect.has(t,n);return(!Kt(n)||!_o.has(n))&&Re(t,"has",n),a}ownKeys(t){return Re(t,"iterate",ne(t)?"length":tn),Reflect.ownKeys(t)}}class Zi extends bo{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const el=new yo,tl=new Zi,nl=new yo(!0);const za=e=>e,qn=e=>Reflect.getPrototypeOf(e);function al(e,t,n){return function(...a){const s=this.__v_raw,r=ce(s),o=pn(r),i=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=s[e](...a),d=n?za:t?Xa:Ie;return!t&&Re(r,"iterate",l?Va:tn),{next(){const{value:f,done:m}=u.next();return m?{value:f,done:m}:{value:i?[d(f[0]),d(f[1])]:d(f),done:m}},[Symbol.iterator](){return this}}}}function Wn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function sl(e,t){const n={get(s){const r=this.__v_raw,o=ce(r),i=ce(s);e||(Bt(s,i)&&Re(o,"get",s),Re(o,"get",i));const{has:l}=qn(o),u=t?za:e?Xa:Ie;if(l.call(o,s))return u(r.get(s));if(l.call(o,i))return u(r.get(i));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!e&&Re(ce(s),"iterate",tn),s.size},has(s){const r=this.__v_raw,o=ce(r),i=ce(s);return e||(Bt(s,i)&&Re(o,"has",s),Re(o,"has",i)),s===i?r.has(s):r.has(s)||r.has(i)},forEach(s,r){const o=this,i=o.__v_raw,l=ce(i),u=t?za:e?Xa:Ie;return!e&&Re(l,"iterate",tn),i.forEach((d,f)=>s.call(r,u(d),u(f),o))}};return we(n,e?{add:Wn("add"),set:Wn("set"),delete:Wn("delete"),clear:Wn("clear")}:{add(s){!t&&!tt(s)&&!sn(s)&&(s=ce(s));const r=ce(this);return qn(r).has.call(r,s)||(r.add(s),Et(r,"add",s,s)),this},set(s,r){!t&&!tt(r)&&!sn(r)&&(r=ce(r));const o=ce(this),{has:i,get:l}=qn(o);let u=i.call(o,s);u||(s=ce(s),u=i.call(o,s));const d=l.call(o,s);return o.set(s,r),u?Bt(r,d)&&Et(o,"set",s,r):Et(o,"add",s,r),this},delete(s){const r=ce(this),{has:o,get:i}=qn(r);let l=o.call(r,s);l||(s=ce(s),l=o.call(r,s)),i&&i.call(r,s);const u=r.delete(s);return l&&Et(r,"delete",s,void 0),u},clear(){const s=ce(this),r=s.size!==0,o=s.clear();return r&&Et(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=al(s,e,t)}),n}function As(e,t){const n=sl(e,t);return(a,s,r)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?a:Reflect.get(fe(n,s)&&s in a?n:a,s,r)}const rl={get:As(!1,!1)},ol={get:As(!1,!0)},il={get:As(!0,!1)};const vo=new WeakMap,To=new WeakMap,Eo=new WeakMap,ll=new WeakMap;function cl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function dl(e){return e.__v_skip||!Object.isExtensible(e)?0:cl(Di(e))}function St(e){return sn(e)?e:Os(e,!1,el,rl,vo)}function So(e){return Os(e,!1,nl,ol,To)}function Qa(e){return Os(e,!0,tl,il,Eo)}function Os(e,t,n,a,s){if(!ye(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=dl(e);if(r===0)return e;const o=s.get(e);if(o)return o;const i=new Proxy(e,r===2?a:n);return s.set(e,i),i}function nn(e){return sn(e)?nn(e.__v_raw):!!(e&&e.__v_isReactive)}function sn(e){return!!(e&&e.__v_isReadonly)}function tt(e){return!!(e&&e.__v_isShallow)}function ks(e){return e?!!e.__v_raw:!1}function ce(e){const t=e&&e.__v_raw;return t?ce(t):e}function Ps(e){return!fe(e,"__v_skip")&&Object.isExtensible(e)&&eo(e,"__v_skip",!0),e}const Ie=e=>ye(e)?St(e):e,Xa=e=>ye(e)?Qa(e):e;function Ae(e){return e?e.__v_isRef===!0:!1}function Ve(e){return Ao(e,!1)}function ul(e){return Ao(e,!0)}function Ao(e,t){return Ae(e)?e:new pl(e,t)}class pl{constructor(t,n){this.dep=new Es,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:ce(t),this._value=n?t:Ie(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,a=this.__v_isShallow||tt(t)||sn(t);t=a?t:ce(t),Bt(t,n)&&(this._rawValue=t,this._value=a?t:Ie(t),this.dep.trigger())}}function Ft(e){return Ae(e)?e.value:e}const fl={get:(e,t,n)=>t==="__v_raw"?e:Ft(Reflect.get(e,t,n)),set:(e,t,n,a)=>{const s=e[t];return Ae(s)&&!Ae(n)?(s.value=n,!0):Reflect.set(e,t,n,a)}};function Oo(e){return nn(e)?e:new Proxy(e,fl)}function hl(e){const t=ne(e)?new Array(e.length):{};for(const n in e)t[n]=ml(e,n);return t}class gl{constructor(t,n,a){this._object=t,this._key=n,this._defaultValue=a,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Ji(ce(this._object),this._key)}}function ml(e,t,n){const a=e[t];return Ae(a)?a:new gl(e,t,n)}class _l{constructor(t,n,a){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Es(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=In-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=a}notify(){if(this.flags|=16,!(this.flags&8)&&me!==this)return uo(this,!0),!0}get value(){const t=this.dep.track();return ho(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function bl(e,t,n=!1){let a,s;return re(e)?a=e:(a=e.get,s=e.set),new _l(a,s,n)}const Jn={},aa=new WeakMap;let Qt;function yl(e,t=!1,n=Qt){if(n){let a=aa.get(n);a||aa.set(n,a=[]),a.push(e)}}function vl(e,t,n=_e){const{immediate:a,deep:s,once:r,scheduler:o,augmentJob:i,call:l}=n,u=E=>s?E:tt(E)||s===!1||s===0?Mt(E,1):Mt(E);let d,f,m,p,g=!1,c=!1;if(Ae(e)?(f=()=>e.value,g=tt(e)):nn(e)?(f=()=>u(e),g=!0):ne(e)?(c=!0,g=e.some(E=>nn(E)||tt(E)),f=()=>e.map(E=>{if(Ae(E))return E.value;if(nn(E))return u(E);if(re(E))return l?l(E,2):E()})):re(e)?t?f=l?()=>l(e,2):e:f=()=>{if(m){At();try{m()}finally{Ot()}}const E=Qt;Qt=d;try{return l?l(e,3,[p]):e(p)}finally{Qt=E}}:f=pt,t&&s){const E=f,k=s===!0?1/0:s;f=()=>Mt(E(),k)}const h=io(),_=()=>{d.stop(),h&&h.active&&ms(h.effects,d)};if(r&&t){const E=t;t=(...k)=>{E(...k),_()}}let y=c?new Array(e.length).fill(Jn):Jn;const T=E=>{if(!(!(d.flags&1)||!d.dirty&&!E))if(t){const k=d.run();if(s||g||(c?k.some((L,D)=>Bt(L,y[D])):Bt(k,y))){m&&m();const L=Qt;Qt=d;try{const D=[k,y===Jn?void 0:c&&y[0]===Jn?[]:y,p];y=k,l?l(t,3,D):t(...D)}finally{Qt=L}}}else d.run()};return i&&i(T),d=new lo(f),d.scheduler=o?()=>o(T,!1):T,p=E=>yl(E,!1,d),m=d.onStop=()=>{const E=aa.get(d);if(E){if(l)l(E,4);else for(const k of E)k();aa.delete(d)}},t?a?T(!0):y=d.run():o?o(T.bind(null,!0),!0):d.run(),_.pause=d.pause.bind(d),_.resume=d.resume.bind(d),_.stop=_,_}function Mt(e,t=1/0,n){if(t<=0||!ye(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Ae(e))Mt(e.value,t,n);else if(ne(e))for(let a=0;a<e.length;a++)Mt(e[a],t,n);else if(zr(e)||pn(e))e.forEach(a=>{Mt(a,t,n)});else if(Zr(e)){for(const a in e)Mt(e[a],t,n);for(const a of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,a)&&Mt(e[a],t,n)}return e}function Yn(e,t,n,a){try{return a?e(...a):e()}catch(s){ba(s,t,n)}}function nt(e,t,n,a){if(re(e)){const s=Yn(e,t,n,a);return s&&Qr(s)&&s.catch(r=>{ba(r,t,n)}),s}if(ne(e)){const s=[];for(let r=0;r<e.length;r++)s.push(nt(e[r],t,n,a));return s}}function ba(e,t,n,a=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||_e;if(t){let i=t.parent;const l=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const d=i.ec;if(d){for(let f=0;f<d.length;f++)if(d[f](e,l,u)===!1)return}i=i.parent}if(r){At(),Yn(r,null,10,[e,l,u]),Ot();return}}Tl(e,n,s,a,o)}function Tl(e,t,n,a=!0,s=!1){if(s)throw e;console.error(e)}const Me=[];let lt=-1;const fn=[];let Rt=null,cn=0;const ko=Promise.resolve();let sa=null;function ws(e){const t=sa||ko;return e?t.then(this?e.bind(this):e):t}function El(e){let t=lt+1,n=Me.length;for(;t<n;){const a=t+n>>>1,s=Me[a],r=Bn(s);r<e||r===e&&s.flags&2?t=a+1:n=a}return t}function xs(e){if(!(e.flags&1)){const t=Bn(e),n=Me[Me.length-1];!n||!(e.flags&2)&&t>=Bn(n)?Me.push(e):Me.splice(El(t),0,e),e.flags|=1,Po()}}function Po(){sa||(sa=ko.then(xo))}function Sl(e){ne(e)?fn.push(...e):Rt&&e.id===-1?Rt.splice(cn+1,0,e):e.flags&1||(fn.push(e),e.flags|=1),Po()}function qs(e,t,n=lt+1){for(;n<Me.length;n++){const a=Me[n];if(a&&a.flags&2){if(e&&a.id!==e.uid)continue;Me.splice(n,1),n--,a.flags&4&&(a.flags&=-2),a(),a.flags&4||(a.flags&=-2)}}}function wo(e){if(fn.length){const t=[...new Set(fn)].sort((n,a)=>Bn(n)-Bn(a));if(fn.length=0,Rt){Rt.push(...t);return}for(Rt=t,cn=0;cn<Rt.length;cn++){const n=Rt[cn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Rt=null,cn=0}}const Bn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function xo(e){try{for(lt=0;lt<Me.length;lt++){const t=Me[lt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Yn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;lt<Me.length;lt++){const t=Me[lt];t&&(t.flags&=-2)}lt=-1,Me.length=0,wo(),sa=null,(Me.length||fn.length)&&xo()}}let Ze=null,Co=null;function ra(e){const t=Ze;return Ze=e,Co=e&&e.type.__scopeId||null,t}function Za(e,t=Ze,n){if(!t||e._n)return e;const a=(...s)=>{a._d&&la(-1);const r=ra(t);let o;try{o=e(...s)}finally{ra(r),a._d&&la(1)}return o};return a._n=!0,a._c=!0,a._d=!0,a}function Wt(e,t,n,a){const s=e.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const i=s[o];r&&(i.oldValue=r[o].value);let l=i.dir[a];l&&(At(),nt(l,n,8,[e.el,i,e,t]),Ot())}}const Al=Symbol("_vte"),Ro=e=>e.__isTeleport,vt=Symbol("_leaveCb"),Vn=Symbol("_enterCb");function Ol(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return jt(()=>{e.isMounted=!0}),Uo(()=>{e.isUnmounting=!0}),e}const Je=[Function,Array],No={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Je,onEnter:Je,onAfterEnter:Je,onEnterCancelled:Je,onBeforeLeave:Je,onLeave:Je,onAfterLeave:Je,onLeaveCancelled:Je,onBeforeAppear:Je,onAppear:Je,onAfterAppear:Je,onAppearCancelled:Je},Lo=e=>{const t=e.subTree;return t.component?Lo(t.component):t},kl={name:"BaseTransition",props:No,setup(e,{slots:t}){const n=Ls(),a=Ol();return()=>{const s=t.default&&Mo(t.default(),!0);if(!s||!s.length)return;const r=Do(s),o=ce(e),{mode:i}=o;if(a.isLeaving)return Ia(r);const l=Ws(r);if(!l)return Ia(r);let u=es(l,o,a,n,f=>u=f);l.type!==Ge&&Fn(l,u);let d=n.subTree&&Ws(n.subTree);if(d&&d.type!==Ge&&!Xt(d,l)&&Lo(n).type!==Ge){let f=es(d,o,a,n);if(Fn(d,f),i==="out-in"&&l.type!==Ge)return a.isLeaving=!0,f.afterLeave=()=>{a.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,d=void 0},Ia(r);i==="in-out"&&l.type!==Ge?f.delayLeave=(m,p,g)=>{const c=Io(a,d);c[String(d.key)]=d,m[vt]=()=>{p(),m[vt]=void 0,delete u.delayedLeave,d=void 0},u.delayedLeave=()=>{g(),delete u.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return r}}};function Do(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Ge){t=n;break}}return t}const Pl=kl;function Io(e,t){const{leavingVNodes:n}=e;let a=n.get(t.type);return a||(a=Object.create(null),n.set(t.type,a)),a}function es(e,t,n,a,s){const{appear:r,mode:o,persisted:i=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:d,onEnterCancelled:f,onBeforeLeave:m,onLeave:p,onAfterLeave:g,onLeaveCancelled:c,onBeforeAppear:h,onAppear:_,onAfterAppear:y,onAppearCancelled:T}=t,E=String(e.key),k=Io(n,e),L=(A,C)=>{A&&nt(A,a,9,C)},D=(A,C)=>{const U=C[1];L(A,C),ne(A)?A.every(w=>w.length<=1)&&U():A.length<=1&&U()},F={mode:o,persisted:i,beforeEnter(A){let C=l;if(!n.isMounted)if(r)C=h||l;else return;A[vt]&&A[vt](!0);const U=k[E];U&&Xt(e,U)&&U.el[vt]&&U.el[vt](),L(C,[A])},enter(A){let C=u,U=d,w=f;if(!n.isMounted)if(r)C=_||u,U=y||d,w=T||f;else return;let J=!1;const ee=A[Vn]=ae=>{J||(J=!0,ae?L(w,[A]):L(U,[A]),F.delayedLeave&&F.delayedLeave(),A[Vn]=void 0)};C?D(C,[A,ee]):ee()},leave(A,C){const U=String(e.key);if(A[Vn]&&A[Vn](!0),n.isUnmounting)return C();L(m,[A]);let w=!1;const J=A[vt]=ee=>{w||(w=!0,C(),ee?L(c,[A]):L(g,[A]),A[vt]=void 0,k[U]===e&&delete k[U])};k[U]=e,p?D(p,[A,J]):J()},clone(A){const C=es(A,t,n,a,s);return s&&s(C),C}};return F}function Ia(e){if(ya(e))return e=Ut(e),e.children=null,e}function Ws(e){if(!ya(e))return Ro(e.type)&&e.children?Do(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&re(n.default))return n.default()}}function Fn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Fn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Mo(e,t=!1,n){let a=[],s=0;for(let r=0;r<e.length;r++){let o=e[r];const i=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===dt?(o.patchFlag&128&&s++,a=a.concat(Mo(o.children,t,i))):(t||o.type!==Ge)&&a.push(i!=null?Ut(o,{key:i}):o)}if(s>1)for(let r=0;r<a.length;r++)a[r].patchFlag=-2;return a}function Bo(e,t){return re(e)?we({name:e.name},t,{setup:e}):e}function Fo(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const oa=new WeakMap;function wn(e,t,n,a,s=!1){if(ne(e)){e.forEach((g,c)=>wn(g,t&&(ne(t)?t[c]:t),n,a,s));return}if(xn(a)&&!s){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&wn(e,t,n,a.component.subTree);return}const r=a.shapeFlag&4?Ds(a.component):a.el,o=s?null:r,{i,r:l}=e,u=t&&t.r,d=i.refs===_e?i.refs={}:i.refs,f=i.setupState,m=ce(f),p=f===_e?Vr:g=>fe(m,g);if(u!=null&&u!==l){if(Js(t),Oe(u))d[u]=null,p(u)&&(f[u]=null);else if(Ae(u)){u.value=null;const g=t;g.k&&(d[g.k]=null)}}if(re(l))Yn(l,i,12,[o,d]);else{const g=Oe(l),c=Ae(l);if(g||c){const h=()=>{if(e.f){const _=g?p(l)?f[l]:d[l]:l.value;if(s)ne(_)&&ms(_,r);else if(ne(_))_.includes(r)||_.push(r);else if(g)d[l]=[r],p(l)&&(f[l]=d[l]);else{const y=[r];l.value=y,e.k&&(d[e.k]=y)}}else g?(d[l]=o,p(l)&&(f[l]=o)):c&&(l.value=o,e.k&&(d[e.k]=o))};if(o){const _=()=>{h(),oa.delete(e)};_.id=-1,oa.set(e,_),je(_,n)}else Js(e),h()}}}function Js(e){const t=oa.get(e);t&&(t.flags|=8,oa.delete(e))}_a().requestIdleCallback;_a().cancelIdleCallback;const xn=e=>!!e.type.__asyncLoader,ya=e=>e.type.__isKeepAlive;function wl(e,t){$o(e,"a",t)}function xl(e,t){$o(e,"da",t)}function $o(e,t,n=Ne){const a=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(va(t,a,n),n){let s=n.parent;for(;s&&s.parent;)ya(s.parent.vnode)&&Cl(a,t,n,s),s=s.parent}}function Cl(e,t,n,a){const s=va(t,e,a,!0);Ta(()=>{ms(a[t],s)},n)}function va(e,t,n=Ne,a=!1){if(n){const s=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...o)=>{At();const i=jn(n),l=nt(t,n,e,o);return i(),Ot(),l});return a?s.unshift(r):s.push(r),r}}const Pt=e=>(t,n=Ne)=>{(!Un||e==="sp")&&va(e,(...a)=>t(...a),n)},Rl=Pt("bm"),jt=Pt("m"),Nl=Pt("bu"),Ll=Pt("u"),Uo=Pt("bum"),Ta=Pt("um"),Dl=Pt("sp"),Il=Pt("rtg"),Ml=Pt("rtc");function Bl(e,t=Ne){va("ec",e,t)}const Fl="components",Ho=Symbol.for("v-ndc");function $l(e){return Oe(e)?Ul(Fl,e,!1)||e:e||Ho}function Ul(e,t,n=!0,a=!1){const s=Ze||Ne;if(s){const r=s.type;{const i=wc(r,!1);if(i&&(i===t||i===Qe(t)||i===ma(Qe(t))))return r}const o=Vs(s[e]||r[e],t)||Vs(s.appContext[e],t);return!o&&a?r:o}}function Vs(e,t){return e&&(e[t]||e[Qe(t)]||e[ma(Qe(t))])}const ts=e=>e?ii(e)?Ds(e):ts(e.parent):null,Cn=we(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ts(e.parent),$root:e=>ts(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Yo(e),$forceUpdate:e=>e.f||(e.f=()=>{xs(e.update)}),$nextTick:e=>e.n||(e.n=ws.bind(e.proxy)),$watch:e=>lc.bind(e)}),Ma=(e,t)=>e!==_e&&!e.__isScriptSetup&&fe(e,t),Hl={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:a,data:s,props:r,accessCache:o,type:i,appContext:l}=e;let u;if(t[0]!=="$"){const p=o[t];if(p!==void 0)switch(p){case 1:return a[t];case 2:return s[t];case 4:return n[t];case 3:return r[t]}else{if(Ma(a,t))return o[t]=1,a[t];if(s!==_e&&fe(s,t))return o[t]=2,s[t];if((u=e.propsOptions[0])&&fe(u,t))return o[t]=3,r[t];if(n!==_e&&fe(n,t))return o[t]=4,n[t];ns&&(o[t]=0)}}const d=Cn[t];let f,m;if(d)return t==="$attrs"&&Re(e.attrs,"get",""),d(e);if((f=i.__cssModules)&&(f=f[t]))return f;if(n!==_e&&fe(n,t))return o[t]=4,n[t];if(m=l.config.globalProperties,fe(m,t))return m[t]},set({_:e},t,n){const{data:a,setupState:s,ctx:r}=e;return Ma(s,t)?(s[t]=n,!0):a!==_e&&fe(a,t)?(a[t]=n,!0):fe(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:a,appContext:s,propsOptions:r,type:o}},i){let l,u;return!!(n[i]||e!==_e&&i[0]!=="$"&&fe(e,i)||Ma(t,i)||(l=r[0])&&fe(l,i)||fe(a,i)||fe(Cn,i)||fe(s.config.globalProperties,i)||(u=o.__cssModules)&&u[i])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:fe(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function zs(e){return ne(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ns=!0;function Kl(e){const t=Yo(e),n=e.proxy,a=e.ctx;ns=!1,t.beforeCreate&&Qs(t.beforeCreate,e,"bc");const{data:s,computed:r,methods:o,watch:i,provide:l,inject:u,created:d,beforeMount:f,mounted:m,beforeUpdate:p,updated:g,activated:c,deactivated:h,beforeDestroy:_,beforeUnmount:y,destroyed:T,unmounted:E,render:k,renderTracked:L,renderTriggered:D,errorCaptured:F,serverPrefetch:A,expose:C,inheritAttrs:U,components:w,directives:J,filters:ee}=t;if(u&&Yl(u,a,null),o)for(const I in o){const V=o[I];re(V)&&(a[I]=V.bind(n))}if(s){const I=s.call(n,n);ye(I)&&(e.data=St(I))}if(ns=!0,r)for(const I in r){const V=r[I],ie=re(V)?V.bind(n,n):re(V.get)?V.get.bind(n,n):pt,Q=!re(V)&&re(V.set)?V.set.bind(n):pt,ue=qe({get:ie,set:Q});Object.defineProperty(a,I,{enumerable:!0,configurable:!0,get:()=>ue.value,set:de=>ue.value=de})}if(i)for(const I in i)Ko(i[I],a,n,I);if(l){const I=re(l)?l.call(n):l;Reflect.ownKeys(I).forEach(V=>{Xn(V,I[V])})}d&&Qs(d,e,"c");function X(I,V){ne(V)?V.forEach(ie=>I(ie.bind(n))):V&&I(V.bind(n))}if(X(Rl,f),X(jt,m),X(Nl,p),X(Ll,g),X(wl,c),X(xl,h),X(Bl,F),X(Ml,L),X(Il,D),X(Uo,y),X(Ta,E),X(Dl,A),ne(C))if(C.length){const I=e.exposed||(e.exposed={});C.forEach(V=>{Object.defineProperty(I,V,{get:()=>n[V],set:ie=>n[V]=ie,enumerable:!0})})}else e.exposed||(e.exposed={});k&&e.render===pt&&(e.render=k),U!=null&&(e.inheritAttrs=U),w&&(e.components=w),J&&(e.directives=J),A&&Fo(e)}function Yl(e,t,n=pt){ne(e)&&(e=as(e));for(const a in e){const s=e[a];let r;ye(s)?"default"in s?r=ze(s.from||a,s.default,!0):r=ze(s.from||a):r=ze(s),Ae(r)?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[a]=r}}function Qs(e,t,n){nt(ne(e)?e.map(a=>a.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ko(e,t,n,a){let s=a.includes(".")?ni(n,a):()=>n[a];if(Oe(e)){const r=t[e];re(r)&&Rn(s,r)}else if(re(e))Rn(s,e.bind(n));else if(ye(e))if(ne(e))e.forEach(r=>Ko(r,t,n,a));else{const r=re(e.handler)?e.handler.bind(n):t[e.handler];re(r)&&Rn(s,r,e)}}function Yo(e){const t=e.type,{mixins:n,extends:a}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=e.appContext,i=r.get(t);let l;return i?l=i:!s.length&&!n&&!a?l=t:(l={},s.length&&s.forEach(u=>ia(l,u,o,!0)),ia(l,t,o)),ye(t)&&r.set(t,l),l}function ia(e,t,n,a=!1){const{mixins:s,extends:r}=t;r&&ia(e,r,n,!0),s&&s.forEach(o=>ia(e,o,n,!0));for(const o in t)if(!(a&&o==="expose")){const i=jl[o]||n&&n[o];e[o]=i?i(e[o],t[o]):t[o]}return e}const jl={data:Xs,props:Zs,emits:Zs,methods:Sn,computed:Sn,beforeCreate:Le,created:Le,beforeMount:Le,mounted:Le,beforeUpdate:Le,updated:Le,beforeDestroy:Le,beforeUnmount:Le,destroyed:Le,unmounted:Le,activated:Le,deactivated:Le,errorCaptured:Le,serverPrefetch:Le,components:Sn,directives:Sn,watch:ql,provide:Xs,inject:Gl};function Xs(e,t){return t?e?function(){return we(re(e)?e.call(this,this):e,re(t)?t.call(this,this):t)}:t:e}function Gl(e,t){return Sn(as(e),as(t))}function as(e){if(ne(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Le(e,t){return e?[...new Set([].concat(e,t))]:t}function Sn(e,t){return e?we(Object.create(null),e,t):t}function Zs(e,t){return e?ne(e)&&ne(t)?[...new Set([...e,...t])]:we(Object.create(null),zs(e),zs(t??{})):t}function ql(e,t){if(!e)return t;if(!t)return e;const n=we(Object.create(null),e);for(const a in t)n[a]=Le(e[a],t[a]);return n}function jo(){return{app:null,config:{isNativeTag:Vr,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wl=0;function Jl(e,t){return function(a,s=null){re(a)||(a=we({},a)),s!=null&&!ye(s)&&(s=null);const r=jo(),o=new WeakSet,i=[];let l=!1;const u=r.app={_uid:Wl++,_component:a,_props:s,_container:null,_context:r,_instance:null,version:Cc,get config(){return r.config},set config(d){},use(d,...f){return o.has(d)||(d&&re(d.install)?(o.add(d),d.install(u,...f)):re(d)&&(o.add(d),d(u,...f))),u},mixin(d){return r.mixins.includes(d)||r.mixins.push(d),u},component(d,f){return f?(r.components[d]=f,u):r.components[d]},directive(d,f){return f?(r.directives[d]=f,u):r.directives[d]},mount(d,f,m){if(!l){const p=u._ceVNode||Ke(a,s);return p.appContext=r,m===!0?m="svg":m===!1&&(m=void 0),e(p,d,m),l=!0,u._container=d,d.__vue_app__=u,Ds(p.component)}},onUnmount(d){i.push(d)},unmount(){l&&(nt(i,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(d,f){return r.provides[d]=f,u},runWithContext(d){const f=an;an=u;try{return d()}finally{an=f}}};return u}}let an=null;function Xn(e,t){if(Ne){let n=Ne.provides;const a=Ne.parent&&Ne.parent.provides;a===n&&(n=Ne.provides=Object.create(a)),n[e]=t}}function ze(e,t,n=!1){const a=Ls();if(a||an){let s=an?an._context.provides:a?a.parent==null||a.ce?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&re(t)?t.call(a&&a.proxy):t}}function Vl(){return!!(Ls()||an)}const Go={},qo=()=>Object.create(Go),Wo=e=>Object.getPrototypeOf(e)===Go;function zl(e,t,n,a=!1){const s={},r=qo();e.propsDefaults=Object.create(null),Jo(e,t,s,r);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=a?s:So(s):e.type.props?e.props=s:e.props=r,e.attrs=r}function Ql(e,t,n,a){const{props:s,attrs:r,vnode:{patchFlag:o}}=e,i=ce(s),[l]=e.propsOptions;let u=!1;if((a||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let f=0;f<d.length;f++){let m=d[f];if(Ea(e.emitsOptions,m))continue;const p=t[m];if(l)if(fe(r,m))p!==r[m]&&(r[m]=p,u=!0);else{const g=Qe(m);s[g]=ss(l,i,g,p,e,!1)}else p!==r[m]&&(r[m]=p,u=!0)}}}else{Jo(e,t,s,r)&&(u=!0);let d;for(const f in i)(!t||!fe(t,f)&&((d=Yt(f))===f||!fe(t,d)))&&(l?n&&(n[f]!==void 0||n[d]!==void 0)&&(s[f]=ss(l,i,f,void 0,e,!0)):delete s[f]);if(r!==i)for(const f in r)(!t||!fe(t,f))&&(delete r[f],u=!0)}u&&Et(e.attrs,"set","")}function Jo(e,t,n,a){const[s,r]=e.propsOptions;let o=!1,i;if(t)for(let l in t){if(On(l))continue;const u=t[l];let d;s&&fe(s,d=Qe(l))?!r||!r.includes(d)?n[d]=u:(i||(i={}))[d]=u:Ea(e.emitsOptions,l)||(!(l in a)||u!==a[l])&&(a[l]=u,o=!0)}if(r){const l=ce(n),u=i||_e;for(let d=0;d<r.length;d++){const f=r[d];n[f]=ss(s,l,f,u[f],e,!fe(u,f))}}return o}function ss(e,t,n,a,s,r){const o=e[n];if(o!=null){const i=fe(o,"default");if(i&&a===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&re(l)){const{propsDefaults:u}=s;if(n in u)a=u[n];else{const d=jn(s);a=u[n]=l.call(null,t),d()}}else a=l;s.ce&&s.ce._setProp(n,a)}o[0]&&(r&&!i?a=!1:o[1]&&(a===""||a===Yt(n))&&(a=!0))}return a}const Xl=new WeakMap;function Vo(e,t,n=!1){const a=n?Xl:t.propsCache,s=a.get(e);if(s)return s;const r=e.props,o={},i=[];let l=!1;if(!re(e)){const d=f=>{l=!0;const[m,p]=Vo(f,t,!0);we(o,m),p&&i.push(...p)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!r&&!l)return ye(e)&&a.set(e,un),un;if(ne(r))for(let d=0;d<r.length;d++){const f=Qe(r[d]);er(f)&&(o[f]=_e)}else if(r)for(const d in r){const f=Qe(d);if(er(f)){const m=r[d],p=o[f]=ne(m)||re(m)?{type:m}:we({},m),g=p.type;let c=!1,h=!0;if(ne(g))for(let _=0;_<g.length;++_){const y=g[_],T=re(y)&&y.name;if(T==="Boolean"){c=!0;break}else T==="String"&&(h=!1)}else c=re(g)&&g.name==="Boolean";p[0]=c,p[1]=h,(c||fe(p,"default"))&&i.push(f)}}const u=[o,i];return ye(e)&&a.set(e,u),u}function er(e){return e[0]!=="$"&&!On(e)}const Cs=e=>e==="_"||e==="_ctx"||e==="$stable",Rs=e=>ne(e)?e.map(ut):[ut(e)],Zl=(e,t,n)=>{if(t._n)return t;const a=Za((...s)=>Rs(t(...s)),n);return a._c=!1,a},zo=(e,t,n)=>{const a=e._ctx;for(const s in e){if(Cs(s))continue;const r=e[s];if(re(r))t[s]=Zl(s,r,a);else if(r!=null){const o=Rs(r);t[s]=()=>o}}},Qo=(e,t)=>{const n=Rs(t);e.slots.default=()=>n},Xo=(e,t,n)=>{for(const a in t)(n||!Cs(a))&&(e[a]=t[a])},ec=(e,t,n)=>{const a=e.slots=qo();if(e.vnode.shapeFlag&32){const s=t._;s?(Xo(a,t,n),n&&eo(a,"_",s,!0)):zo(t,a)}else t&&Qo(e,t)},tc=(e,t,n)=>{const{vnode:a,slots:s}=e;let r=!0,o=_e;if(a.shapeFlag&32){const i=t._;i?n&&i===1?r=!1:Xo(s,t,n):(r=!t.$stable,zo(t,s)),o=t}else t&&(Qo(e,t),o={default:1});if(r)for(const i in s)!Cs(i)&&o[i]==null&&delete s[i]},je=mc;function nc(e){return ac(e)}function ac(e,t){const n=_a();n.__VUE__=!0;const{insert:a,remove:s,patchProp:r,createElement:o,createText:i,createComment:l,setText:u,setElementText:d,parentNode:f,nextSibling:m,setScopeId:p=pt,insertStaticContent:g}=e,c=(b,v,S,N=null,M=null,R=null,j=void 0,K=null,H=!!v.dynamicChildren)=>{if(b===v)return;b&&!Xt(b,v)&&(N=x(b),de(b,M,R,!0),b=null),v.patchFlag===-2&&(H=!1,v.dynamicChildren=null);const{type:$,ref:te,shapeFlag:q}=v;switch($){case Sa:h(b,v,S,N);break;case Ge:_(b,v,S,N);break;case Zn:b==null&&y(v,S,N,j);break;case dt:w(b,v,S,N,M,R,j,K,H);break;default:q&1?k(b,v,S,N,M,R,j,K,H):q&6?J(b,v,S,N,M,R,j,K,H):(q&64||q&128)&&$.process(b,v,S,N,M,R,j,K,H,z)}te!=null&&M?wn(te,b&&b.ref,R,v||b,!v):te==null&&b&&b.ref!=null&&wn(b.ref,null,R,b,!0)},h=(b,v,S,N)=>{if(b==null)a(v.el=i(v.children),S,N);else{const M=v.el=b.el;v.children!==b.children&&u(M,v.children)}},_=(b,v,S,N)=>{b==null?a(v.el=l(v.children||""),S,N):v.el=b.el},y=(b,v,S,N)=>{[b.el,b.anchor]=g(b.children,v,S,N,b.el,b.anchor)},T=({el:b,anchor:v},S,N)=>{let M;for(;b&&b!==v;)M=m(b),a(b,S,N),b=M;a(v,S,N)},E=({el:b,anchor:v})=>{let S;for(;b&&b!==v;)S=m(b),s(b),b=S;s(v)},k=(b,v,S,N,M,R,j,K,H)=>{if(v.type==="svg"?j="svg":v.type==="math"&&(j="mathml"),b==null)L(v,S,N,M,R,j,K,H);else{const $=b.el&&b.el._isVueCE?b.el:null;try{$&&$._beginPatch(),A(b,v,M,R,j,K,H)}finally{$&&$._endPatch()}}},L=(b,v,S,N,M,R,j,K)=>{let H,$;const{props:te,shapeFlag:q,transition:Z,dirs:se}=b;if(H=b.el=o(b.type,R,te&&te.is,te),q&8?d(H,b.children):q&16&&F(b.children,H,null,N,M,Ba(b,R),j,K),se&&Wt(b,null,N,"created"),D(H,b,b.scopeId,j,N),te){for(const ge in te)ge!=="value"&&!On(ge)&&r(H,ge,null,te[ge],R,N);"value"in te&&r(H,"value",null,te.value,R),($=te.onVnodeBeforeMount)&&it($,N,b)}se&&Wt(b,null,N,"beforeMount");const le=sc(M,Z);le&&Z.beforeEnter(H),a(H,v,S),(($=te&&te.onVnodeMounted)||le||se)&&je(()=>{$&&it($,N,b),le&&Z.enter(H),se&&Wt(b,null,N,"mounted")},M)},D=(b,v,S,N,M)=>{if(S&&p(b,S),N)for(let R=0;R<N.length;R++)p(b,N[R]);if(M){let R=M.subTree;if(v===R||si(R.type)&&(R.ssContent===v||R.ssFallback===v)){const j=M.vnode;D(b,j,j.scopeId,j.slotScopeIds,M.parent)}}},F=(b,v,S,N,M,R,j,K,H=0)=>{for(let $=H;$<b.length;$++){const te=b[$]=K?Nt(b[$]):ut(b[$]);c(null,te,v,S,N,M,R,j,K)}},A=(b,v,S,N,M,R,j)=>{const K=v.el=b.el;let{patchFlag:H,dynamicChildren:$,dirs:te}=v;H|=b.patchFlag&16;const q=b.props||_e,Z=v.props||_e;let se;if(S&&Jt(S,!1),(se=Z.onVnodeBeforeUpdate)&&it(se,S,v,b),te&&Wt(v,b,S,"beforeUpdate"),S&&Jt(S,!0),(q.innerHTML&&Z.innerHTML==null||q.textContent&&Z.textContent==null)&&d(K,""),$?C(b.dynamicChildren,$,K,S,N,Ba(v,M),R):j||V(b,v,K,null,S,N,Ba(v,M),R,!1),H>0){if(H&16)U(K,q,Z,S,M);else if(H&2&&q.class!==Z.class&&r(K,"class",null,Z.class,M),H&4&&r(K,"style",q.style,Z.style,M),H&8){const le=v.dynamicProps;for(let ge=0;ge<le.length;ge++){const he=le[ge],Fe=q[he],$e=Z[he];($e!==Fe||he==="value")&&r(K,he,Fe,$e,M,S)}}H&1&&b.children!==v.children&&d(K,v.children)}else!j&&$==null&&U(K,q,Z,S,M);((se=Z.onVnodeUpdated)||te)&&je(()=>{se&&it(se,S,v,b),te&&Wt(v,b,S,"updated")},N)},C=(b,v,S,N,M,R,j)=>{for(let K=0;K<v.length;K++){const H=b[K],$=v[K],te=H.el&&(H.type===dt||!Xt(H,$)||H.shapeFlag&198)?f(H.el):S;c(H,$,te,null,N,M,R,j,!0)}},U=(b,v,S,N,M)=>{if(v!==S){if(v!==_e)for(const R in v)!On(R)&&!(R in S)&&r(b,R,v[R],null,M,N);for(const R in S){if(On(R))continue;const j=S[R],K=v[R];j!==K&&R!=="value"&&r(b,R,K,j,M,N)}"value"in S&&r(b,"value",v.value,S.value,M)}},w=(b,v,S,N,M,R,j,K,H)=>{const $=v.el=b?b.el:i(""),te=v.anchor=b?b.anchor:i("");let{patchFlag:q,dynamicChildren:Z,slotScopeIds:se}=v;se&&(K=K?K.concat(se):se),b==null?(a($,S,N),a(te,S,N),F(v.children||[],S,te,M,R,j,K,H)):q>0&&q&64&&Z&&b.dynamicChildren?(C(b.dynamicChildren,Z,S,M,R,j,K),(v.key!=null||M&&v===M.subTree)&&Zo(b,v,!0)):V(b,v,S,te,M,R,j,K,H)},J=(b,v,S,N,M,R,j,K,H)=>{v.slotScopeIds=K,b==null?v.shapeFlag&512?M.ctx.activate(v,S,N,j,H):ee(v,S,N,M,R,j,H):ae(b,v,H)},ee=(b,v,S,N,M,R,j)=>{const K=b.component=Sc(b,N,M);if(ya(b)&&(K.ctx.renderer=z),Ac(K,!1,j),K.asyncDep){if(M&&M.registerDep(K,X,j),!b.el){const H=K.subTree=Ke(Ge);_(null,H,v,S),b.placeholder=H.el}}else X(K,b,v,S,M,R,j)},ae=(b,v,S)=>{const N=v.component=b.component;if(hc(b,v,S))if(N.asyncDep&&!N.asyncResolved){I(N,v,S);return}else N.next=v,N.update();else v.el=b.el,N.vnode=v},X=(b,v,S,N,M,R,j)=>{const K=()=>{if(b.isMounted){let{next:q,bu:Z,u:se,parent:le,vnode:ge}=b;{const rt=ei(b);if(rt){q&&(q.el=ge.el,I(b,q,j)),rt.asyncDep.then(()=>{b.isUnmounted||K()});return}}let he=q,Fe;Jt(b,!1),q?(q.el=ge.el,I(b,q,j)):q=ge,Z&&Ca(Z),(Fe=q.props&&q.props.onVnodeBeforeUpdate)&&it(Fe,le,q,ge),Jt(b,!0);const $e=nr(b),st=b.subTree;b.subTree=$e,c(st,$e,f(st.el),x(st),b,M,R),q.el=$e.el,he===null&&gc(b,$e.el),se&&je(se,M),(Fe=q.props&&q.props.onVnodeUpdated)&&je(()=>it(Fe,le,q,ge),M)}else{let q;const{el:Z,props:se}=v,{bm:le,m:ge,parent:he,root:Fe,type:$e}=b,st=xn(v);Jt(b,!1),le&&Ca(le),!st&&(q=se&&se.onVnodeBeforeMount)&&it(q,he,v),Jt(b,!0);{Fe.ce&&Fe.ce._def.shadowRoot!==!1&&Fe.ce._injectChildStyle($e);const rt=b.subTree=nr(b);c(null,rt,S,N,b,M,R),v.el=rt.el}if(ge&&je(ge,M),!st&&(q=se&&se.onVnodeMounted)){const rt=v;je(()=>it(q,he,rt),M)}(v.shapeFlag&256||he&&xn(he.vnode)&&he.vnode.shapeFlag&256)&&b.a&&je(b.a,M),b.isMounted=!0,v=S=N=null}};b.scope.on();const H=b.effect=new lo(K);b.scope.off();const $=b.update=H.run.bind(H),te=b.job=H.runIfDirty.bind(H);te.i=b,te.id=b.uid,H.scheduler=()=>xs(te),Jt(b,!0),$()},I=(b,v,S)=>{v.component=b;const N=b.vnode.props;b.vnode=v,b.next=null,Ql(b,v.props,N,S),tc(b,v.children,S),At(),qs(b),Ot()},V=(b,v,S,N,M,R,j,K,H=!1)=>{const $=b&&b.children,te=b?b.shapeFlag:0,q=v.children,{patchFlag:Z,shapeFlag:se}=v;if(Z>0){if(Z&128){Q($,q,S,N,M,R,j,K,H);return}else if(Z&256){ie($,q,S,N,M,R,j,K,H);return}}se&8?(te&16&&Ee($,M,R),q!==$&&d(S,q)):te&16?se&16?Q($,q,S,N,M,R,j,K,H):Ee($,M,R,!0):(te&8&&d(S,""),se&16&&F(q,S,N,M,R,j,K,H))},ie=(b,v,S,N,M,R,j,K,H)=>{b=b||un,v=v||un;const $=b.length,te=v.length,q=Math.min($,te);let Z;for(Z=0;Z<q;Z++){const se=v[Z]=H?Nt(v[Z]):ut(v[Z]);c(b[Z],se,S,null,M,R,j,K,H)}$>te?Ee(b,M,R,!0,!1,q):F(v,S,N,M,R,j,K,H,q)},Q=(b,v,S,N,M,R,j,K,H)=>{let $=0;const te=v.length;let q=b.length-1,Z=te-1;for(;$<=q&&$<=Z;){const se=b[$],le=v[$]=H?Nt(v[$]):ut(v[$]);if(Xt(se,le))c(se,le,S,null,M,R,j,K,H);else break;$++}for(;$<=q&&$<=Z;){const se=b[q],le=v[Z]=H?Nt(v[Z]):ut(v[Z]);if(Xt(se,le))c(se,le,S,null,M,R,j,K,H);else break;q--,Z--}if($>q){if($<=Z){const se=Z+1,le=se<te?v[se].el:N;for(;$<=Z;)c(null,v[$]=H?Nt(v[$]):ut(v[$]),S,le,M,R,j,K,H),$++}}else if($>Z)for(;$<=q;)de(b[$],M,R,!0),$++;else{const se=$,le=$,ge=new Map;for($=le;$<=Z;$++){const Ye=v[$]=H?Nt(v[$]):ut(v[$]);Ye.key!=null&&ge.set(Ye.key,$)}let he,Fe=0;const $e=Z-le+1;let st=!1,rt=0;const yn=new Array($e);for($=0;$<$e;$++)yn[$]=0;for($=se;$<=q;$++){const Ye=b[$];if(Fe>=$e){de(Ye,M,R,!0);continue}let ot;if(Ye.key!=null)ot=ge.get(Ye.key);else for(he=le;he<=Z;he++)if(yn[he-le]===0&&Xt(Ye,v[he])){ot=he;break}ot===void 0?de(Ye,M,R,!0):(yn[ot-le]=$+1,ot>=rt?rt=ot:st=!0,c(Ye,v[ot],S,null,M,R,j,K,H),Fe++)}const Us=st?rc(yn):un;for(he=Us.length-1,$=$e-1;$>=0;$--){const Ye=le+$,ot=v[Ye],Hs=v[Ye+1],Ks=Ye+1<te?Hs.el||Hs.placeholder:N;yn[$]===0?c(null,ot,S,Ks,M,R,j,K,H):st&&(he<0||$!==Us[he]?ue(ot,S,Ks,2):he--)}}},ue=(b,v,S,N,M=null)=>{const{el:R,type:j,transition:K,children:H,shapeFlag:$}=b;if($&6){ue(b.component.subTree,v,S,N);return}if($&128){b.suspense.move(v,S,N);return}if($&64){j.move(b,v,S,z);return}if(j===dt){a(R,v,S);for(let q=0;q<H.length;q++)ue(H[q],v,S,N);a(b.anchor,v,S);return}if(j===Zn){T(b,v,S);return}if(N!==2&&$&1&&K)if(N===0)K.beforeEnter(R),a(R,v,S),je(()=>K.enter(R),M);else{const{leave:q,delayLeave:Z,afterLeave:se}=K,le=()=>{b.ctx.isUnmounted?s(R):a(R,v,S)},ge=()=>{R._isLeaving&&R[vt](!0),q(R,()=>{le(),se&&se()})};Z?Z(R,le,ge):ge()}else a(R,v,S)},de=(b,v,S,N=!1,M=!1)=>{const{type:R,props:j,ref:K,children:H,dynamicChildren:$,shapeFlag:te,patchFlag:q,dirs:Z,cacheIndex:se}=b;if(q===-2&&(M=!1),K!=null&&(At(),wn(K,null,S,b,!0),Ot()),se!=null&&(v.renderCache[se]=void 0),te&256){v.ctx.deactivate(b);return}const le=te&1&&Z,ge=!xn(b);let he;if(ge&&(he=j&&j.onVnodeBeforeUnmount)&&it(he,v,b),te&6)Te(b.component,S,N);else{if(te&128){b.suspense.unmount(S,N);return}le&&Wt(b,null,v,"beforeUnmount"),te&64?b.type.remove(b,v,S,z,N):$&&!$.hasOnce&&(R!==dt||q>0&&q&64)?Ee($,v,S,!1,!0):(R===dt&&q&384||!M&&te&16)&&Ee(H,v,S),N&&Be(b)}(ge&&(he=j&&j.onVnodeUnmounted)||le)&&je(()=>{he&&it(he,v,b),le&&Wt(b,null,v,"unmounted")},S)},Be=b=>{const{type:v,el:S,anchor:N,transition:M}=b;if(v===dt){ke(S,N);return}if(v===Zn){E(b);return}const R=()=>{s(S),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(b.shapeFlag&1&&M&&!M.persisted){const{leave:j,delayLeave:K}=M,H=()=>j(S,R);K?K(b.el,R,H):H()}else R()},ke=(b,v)=>{let S;for(;b!==v;)S=m(b),s(b),b=S;s(v)},Te=(b,v,S)=>{const{bum:N,scope:M,job:R,subTree:j,um:K,m:H,a:$}=b;tr(H),tr($),N&&Ca(N),M.stop(),R&&(R.flags|=8,de(j,b,v,S)),K&&je(K,v),je(()=>{b.isUnmounted=!0},v)},Ee=(b,v,S,N=!1,M=!1,R=0)=>{for(let j=R;j<b.length;j++)de(b[j],v,S,N,M)},x=b=>{if(b.shapeFlag&6)return x(b.component.subTree);if(b.shapeFlag&128)return b.suspense.next();const v=m(b.anchor||b.el),S=v&&v[Al];return S?m(S):v};let G=!1;const Y=(b,v,S)=>{b==null?v._vnode&&de(v._vnode,null,null,!0):c(v._vnode||null,b,v,null,null,null,S),v._vnode=b,G||(G=!0,qs(),wo(),G=!1)},z={p:c,um:de,m:ue,r:Be,mt:ee,mc:F,pc:V,pbc:C,n:x,o:e};return{render:Y,hydrate:void 0,createApp:Jl(Y)}}function Ba({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Jt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function sc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Zo(e,t,n=!1){const a=e.children,s=t.children;if(ne(a)&&ne(s))for(let r=0;r<a.length;r++){const o=a[r];let i=s[r];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=s[r]=Nt(s[r]),i.el=o.el),!n&&i.patchFlag!==-2&&Zo(o,i)),i.type===Sa&&i.patchFlag!==-1&&(i.el=o.el),i.type===Ge&&!i.el&&(i.el=o.el)}}function rc(e){const t=e.slice(),n=[0];let a,s,r,o,i;const l=e.length;for(a=0;a<l;a++){const u=e[a];if(u!==0){if(s=n[n.length-1],e[s]<u){t[a]=s,n.push(a);continue}for(r=0,o=n.length-1;r<o;)i=r+o>>1,e[n[i]]<u?r=i+1:o=i;u<e[n[r]]&&(r>0&&(t[a]=n[r-1]),n[r]=a)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=t[o];return n}function ei(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:ei(t)}function tr(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const oc=Symbol.for("v-scx"),ic=()=>ze(oc);function Rn(e,t,n){return ti(e,t,n)}function ti(e,t,n=_e){const{immediate:a,deep:s,flush:r,once:o}=n,i=we({},n),l=t&&a||!t&&r!=="post";let u;if(Un){if(r==="sync"){const p=ic();u=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=pt,p.resume=pt,p.pause=pt,p}}const d=Ne;i.call=(p,g,c)=>nt(p,d,g,c);let f=!1;r==="post"?i.scheduler=p=>{je(p,d&&d.suspense)}:r!=="sync"&&(f=!0,i.scheduler=(p,g)=>{g?p():xs(p)}),i.augmentJob=p=>{t&&(p.flags|=4),f&&(p.flags|=2,d&&(p.id=d.uid,p.i=d))};const m=vl(e,t,i);return Un&&(u?u.push(m):l&&m()),m}function lc(e,t,n){const a=this.proxy,s=Oe(e)?e.includes(".")?ni(a,e):()=>a[e]:e.bind(a,a);let r;re(t)?r=t:(r=t.handler,n=t);const o=jn(this),i=ti(s,r.bind(a),n);return o(),i}function ni(e,t){const n=t.split(".");return()=>{let a=e;for(let s=0;s<n.length&&a;s++)a=a[n[s]];return a}}const cc=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Qe(t)}Modifiers`]||e[`${Yt(t)}Modifiers`];function dc(e,t,...n){if(e.isUnmounted)return;const a=e.vnode.props||_e;let s=n;const r=t.startsWith("update:"),o=r&&cc(a,t.slice(7));o&&(o.trim&&(s=n.map(d=>Oe(d)?d.trim():d)),o.number&&(s=n.map(Bi)));let i,l=a[i=xa(t)]||a[i=xa(Qe(t))];!l&&r&&(l=a[i=xa(Yt(t))]),l&&nt(l,e,6,s);const u=a[i+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,nt(u,e,6,s)}}const uc=new WeakMap;function ai(e,t,n=!1){const a=n?uc:t.emitsCache,s=a.get(e);if(s!==void 0)return s;const r=e.emits;let o={},i=!1;if(!re(e)){const l=u=>{const d=ai(u,t,!0);d&&(i=!0,we(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!r&&!i?(ye(e)&&a.set(e,null),null):(ne(r)?r.forEach(l=>o[l]=null):we(o,r),ye(e)&&a.set(e,o),o)}function Ea(e,t){return!e||!fa(t)?!1:(t=t.slice(2).replace(/Once$/,""),fe(e,t[0].toLowerCase()+t.slice(1))||fe(e,Yt(t))||fe(e,t))}function nr(e){const{type:t,vnode:n,proxy:a,withProxy:s,propsOptions:[r],slots:o,attrs:i,emit:l,render:u,renderCache:d,props:f,data:m,setupState:p,ctx:g,inheritAttrs:c}=e,h=ra(e);let _,y;try{if(n.shapeFlag&4){const E=s||a,k=E;_=ut(u.call(k,E,d,f,p,m,g)),y=i}else{const E=t;_=ut(E.length>1?E(f,{attrs:i,slots:o,emit:l}):E(f,null)),y=t.props?i:pc(i)}}catch(E){Nn.length=0,ba(E,e,1),_=Ke(Ge)}let T=_;if(y&&c!==!1){const E=Object.keys(y),{shapeFlag:k}=T;E.length&&k&7&&(r&&E.some(gs)&&(y=fc(y,r)),T=Ut(T,y,!1,!0))}return n.dirs&&(T=Ut(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(n.dirs):n.dirs),n.transition&&Fn(T,n.transition),_=T,ra(h),_}const pc=e=>{let t;for(const n in e)(n==="class"||n==="style"||fa(n))&&((t||(t={}))[n]=e[n]);return t},fc=(e,t)=>{const n={};for(const a in e)(!gs(a)||!(a.slice(9)in t))&&(n[a]=e[a]);return n};function hc(e,t,n){const{props:a,children:s,component:r}=e,{props:o,children:i,patchFlag:l}=t,u=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return a?ar(a,o,u):!!o;if(l&8){const d=t.dynamicProps;for(let f=0;f<d.length;f++){const m=d[f];if(o[m]!==a[m]&&!Ea(u,m))return!0}}}else return(s||i)&&(!i||!i.$stable)?!0:a===o?!1:a?o?ar(a,o,u):!0:!!o;return!1}function ar(e,t,n){const a=Object.keys(t);if(a.length!==Object.keys(e).length)return!0;for(let s=0;s<a.length;s++){const r=a[s];if(t[r]!==e[r]&&!Ea(n,r))return!0}return!1}function gc({vnode:e,parent:t},n){for(;t;){const a=t.subTree;if(a.suspense&&a.suspense.activeBranch===e&&(a.el=e.el),a===e)(e=t.vnode).el=n,t=t.parent;else break}}const si=e=>e.__isSuspense;function mc(e,t){t&&t.pendingBranch?ne(e)?t.effects.push(...e):t.effects.push(e):Sl(e)}const dt=Symbol.for("v-fgt"),Sa=Symbol.for("v-txt"),Ge=Symbol.for("v-cmt"),Zn=Symbol.for("v-stc"),Nn=[];let We=null;function Xe(e=!1){Nn.push(We=e?null:[])}function _c(){Nn.pop(),We=Nn[Nn.length-1]||null}let $n=1;function la(e,t=!1){$n+=e,e<0&&We&&t&&(We.hasOnce=!0)}function ri(e){return e.dynamicChildren=$n>0?We||un:null,_c(),$n>0&&We&&We.push(e),e}function ft(e,t,n,a,s,r){return ri(P(e,t,n,a,s,r,!0))}function sr(e,t,n,a,s){return ri(Ke(e,t,n,a,s,!0))}function ca(e){return e?e.__v_isVNode===!0:!1}function Xt(e,t){return e.type===t.type&&e.key===t.key}const oi=({key:e})=>e??null,ea=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Oe(e)||Ae(e)||re(e)?{i:Ze,r:e,k:t,f:!!n}:e:null);function P(e,t=null,n=null,a=0,s=null,r=e===dt?0:1,o=!1,i=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&oi(t),ref:t&&ea(t),scopeId:Co,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:a,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ze};return i?(Ns(l,n),r&128&&e.normalize(l)):n&&(l.shapeFlag|=Oe(n)?8:16),$n>0&&!o&&We&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&We.push(l),l}const Ke=bc;function bc(e,t=null,n=null,a=0,s=null,r=!1){if((!e||e===Ho)&&(e=Ge),ca(e)){const i=Ut(e,t,!0);return n&&Ns(i,n),$n>0&&!r&&We&&(i.shapeFlag&6?We[We.indexOf(e)]=i:We.push(i)),i.patchFlag=-2,i}if(xc(e)&&(e=e.__vccOpts),t){t=yc(t);let{class:i,style:l}=t;i&&!Oe(i)&&(t.class=$t(i)),ye(l)&&(ks(l)&&!ne(l)&&(l=we({},l)),t.style=bs(l))}const o=Oe(e)?1:si(e)?128:Ro(e)?64:ye(e)?4:re(e)?2:0;return P(e,t,n,a,s,o,r,!0)}function yc(e){return e?ks(e)||Wo(e)?we({},e):e:null}function Ut(e,t,n=!1,a=!1){const{props:s,ref:r,patchFlag:o,children:i,transition:l}=e,u=t?vc(s||{},t):s,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&oi(u),ref:t&&t.ref?n&&r?ne(r)?r.concat(ea(t)):[r,ea(t)]:ea(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==dt?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ut(e.ssContent),ssFallback:e.ssFallback&&Ut(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&a&&Fn(d,l.clone(d)),d}function Aa(e=" ",t=0){return Ke(Sa,null,e,t)}function Gt(e,t){const n=Ke(Zn,null,e);return n.staticCount=t,n}function ut(e){return e==null||typeof e=="boolean"?Ke(Ge):ne(e)?Ke(dt,null,e.slice()):ca(e)?Nt(e):Ke(Sa,null,String(e))}function Nt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ut(e)}function Ns(e,t){let n=0;const{shapeFlag:a}=e;if(t==null)t=null;else if(ne(t))n=16;else if(typeof t=="object")if(a&65){const s=t.default;s&&(s._c&&(s._d=!1),Ns(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!Wo(t)?t._ctx=Ze:s===3&&Ze&&(Ze.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else re(t)?(t={default:t,_ctx:Ze},n=32):(t=String(t),a&64?(n=16,t=[Aa(t)]):n=8);e.children=t,e.shapeFlag|=n}function vc(...e){const t={};for(let n=0;n<e.length;n++){const a=e[n];for(const s in a)if(s==="class")t.class!==a.class&&(t.class=$t([t.class,a.class]));else if(s==="style")t.style=bs([t.style,a.style]);else if(fa(s)){const r=t[s],o=a[s];o&&r!==o&&!(ne(r)&&r.includes(o))&&(t[s]=r?[].concat(r,o):o)}else s!==""&&(t[s]=a[s])}return t}function it(e,t,n,a=null){nt(e,t,7,[n,a])}const Tc=jo();let Ec=0;function Sc(e,t,n){const a=e.type,s=(t?t.appContext:e.appContext)||Tc,r={uid:Ec++,vnode:e,type:a,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ro(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Vo(a,s),emitsOptions:ai(a,s),emit:null,emitted:null,propsDefaults:_e,inheritAttrs:a.inheritAttrs,ctx:_e,data:_e,props:_e,attrs:_e,slots:_e,refs:_e,setupState:_e,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=dc.bind(null,r),e.ce&&e.ce(r),r}let Ne=null;const Ls=()=>Ne||Ze;let da,rs;{const e=_a(),t=(n,a)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(a),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};da=t("__VUE_INSTANCE_SETTERS__",n=>Ne=n),rs=t("__VUE_SSR_SETTERS__",n=>Un=n)}const jn=e=>{const t=Ne;return da(e),e.scope.on(),()=>{e.scope.off(),da(t)}},rr=()=>{Ne&&Ne.scope.off(),da(null)};function ii(e){return e.vnode.shapeFlag&4}let Un=!1;function Ac(e,t=!1,n=!1){t&&rs(t);const{props:a,children:s}=e.vnode,r=ii(e);zl(e,a,r,t),ec(e,s,n||t);const o=r?Oc(e,t):void 0;return t&&rs(!1),o}function Oc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Hl);const{setup:a}=n;if(a){At();const s=e.setupContext=a.length>1?Pc(e):null,r=jn(e),o=Yn(a,e,0,[e.props,s]),i=Qr(o);if(Ot(),r(),(i||e.sp)&&!xn(e)&&Fo(e),i){if(o.then(rr,rr),t)return o.then(l=>{or(e,l)}).catch(l=>{ba(l,e,0)});e.asyncDep=o}else or(e,o)}else li(e)}function or(e,t,n){re(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ye(t)&&(e.setupState=Oo(t)),li(e)}function li(e,t,n){const a=e.type;e.render||(e.render=a.render||pt);{const s=jn(e);At();try{Kl(e)}finally{Ot(),s()}}}const kc={get(e,t){return Re(e,"get",""),e[t]}};function Pc(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,kc),slots:e.slots,emit:e.emit,expose:t}}function Ds(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Oo(Ps(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Cn)return Cn[n](e)},has(t,n){return n in t||n in Cn}})):e.proxy}function wc(e,t=!0){return re(e)?e.displayName||e.name:e.name||t&&e.__name}function xc(e){return re(e)&&"__vccOpts"in e}const qe=(e,t)=>bl(e,t,Un);function Is(e,t,n){try{la(-1);const a=arguments.length;return a===2?ye(t)&&!ne(t)?ca(t)?Ke(e,null,[t]):Ke(e,t):Ke(e,null,t):(a>3?n=Array.prototype.slice.call(arguments,2):a===3&&ca(n)&&(n=[n]),Ke(e,t,n))}finally{la(1)}}const Cc="3.5.24";let os;const ir=typeof window<"u"&&window.trustedTypes;if(ir)try{os=ir.createPolicy("vue",{createHTML:e=>e})}catch{}const ci=os?e=>os.createHTML(e):e=>e,Rc="http://www.w3.org/2000/svg",Nc="http://www.w3.org/1998/Math/MathML",yt=typeof document<"u"?document:null,lr=yt&&yt.createElement("template"),Lc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,a)=>{const s=t==="svg"?yt.createElementNS(Rc,e):t==="mathml"?yt.createElementNS(Nc,e):n?yt.createElement(e,{is:n}):yt.createElement(e);return e==="select"&&a&&a.multiple!=null&&s.setAttribute("multiple",a.multiple),s},createText:e=>yt.createTextNode(e),createComment:e=>yt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>yt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,a,s,r){const o=n?n.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{lr.innerHTML=ci(a==="svg"?`<svg>${e}</svg>`:a==="mathml"?`<math>${e}</math>`:e);const i=lr.content;if(a==="svg"||a==="mathml"){const l=i.firstChild;for(;l.firstChild;)i.appendChild(l.firstChild);i.removeChild(l)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},wt="transition",Tn="animation",Hn=Symbol("_vtc"),di={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Dc=we({},No,di),Ic=e=>(e.displayName="Transition",e.props=Dc,e),Mc=Ic((e,{slots:t})=>Is(Pl,Bc(e),t)),Vt=(e,t=[])=>{ne(e)?e.forEach(n=>n(...t)):e&&e(...t)},cr=e=>e?ne(e)?e.some(t=>t.length>1):e.length>1:!1;function Bc(e){const t={};for(const w in e)w in di||(t[w]=e[w]);if(e.css===!1)return t;const{name:n="v",type:a,duration:s,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:i=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:u=o,appearToClass:d=i,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,g=Fc(s),c=g&&g[0],h=g&&g[1],{onBeforeEnter:_,onEnter:y,onEnterCancelled:T,onLeave:E,onLeaveCancelled:k,onBeforeAppear:L=_,onAppear:D=y,onAppearCancelled:F=T}=t,A=(w,J,ee,ae)=>{w._enterCancelled=ae,zt(w,J?d:i),zt(w,J?u:o),ee&&ee()},C=(w,J)=>{w._isLeaving=!1,zt(w,f),zt(w,p),zt(w,m),J&&J()},U=w=>(J,ee)=>{const ae=w?D:y,X=()=>A(J,w,ee);Vt(ae,[J,X]),dr(()=>{zt(J,w?l:r),mt(J,w?d:i),cr(ae)||ur(J,a,c,X)})};return we(t,{onBeforeEnter(w){Vt(_,[w]),mt(w,r),mt(w,o)},onBeforeAppear(w){Vt(L,[w]),mt(w,l),mt(w,u)},onEnter:U(!1),onAppear:U(!0),onLeave(w,J){w._isLeaving=!0;const ee=()=>C(w,J);mt(w,f),w._enterCancelled?(mt(w,m),hr(w)):(hr(w),mt(w,m)),dr(()=>{w._isLeaving&&(zt(w,f),mt(w,p),cr(E)||ur(w,a,h,ee))}),Vt(E,[w,ee])},onEnterCancelled(w){A(w,!1,void 0,!0),Vt(T,[w])},onAppearCancelled(w){A(w,!0,void 0,!0),Vt(F,[w])},onLeaveCancelled(w){C(w),Vt(k,[w])}})}function Fc(e){if(e==null)return null;if(ye(e))return[Fa(e.enter),Fa(e.leave)];{const t=Fa(e);return[t,t]}}function Fa(e){return Fi(e)}function mt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Hn]||(e[Hn]=new Set)).add(t)}function zt(e,t){t.split(/\s+/).forEach(a=>a&&e.classList.remove(a));const n=e[Hn];n&&(n.delete(t),n.size||(e[Hn]=void 0))}function dr(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let $c=0;function ur(e,t,n,a){const s=e._endId=++$c,r=()=>{s===e._endId&&a()};if(n!=null)return setTimeout(r,n);const{type:o,timeout:i,propCount:l}=Uc(e,t);if(!o)return a();const u=o+"end";let d=0;const f=()=>{e.removeEventListener(u,m),r()},m=p=>{p.target===e&&++d>=l&&f()};setTimeout(()=>{d<l&&f()},i+1),e.addEventListener(u,m)}function Uc(e,t){const n=window.getComputedStyle(e),a=g=>(n[g]||"").split(", "),s=a(`${wt}Delay`),r=a(`${wt}Duration`),o=pr(s,r),i=a(`${Tn}Delay`),l=a(`${Tn}Duration`),u=pr(i,l);let d=null,f=0,m=0;t===wt?o>0&&(d=wt,f=o,m=r.length):t===Tn?u>0&&(d=Tn,f=u,m=l.length):(f=Math.max(o,u),d=f>0?o>u?wt:Tn:null,m=d?d===wt?r.length:l.length:0);const p=d===wt&&/\b(?:transform|all)(?:,|$)/.test(a(`${wt}Property`).toString());return{type:d,timeout:f,propCount:m,hasTransform:p}}function pr(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,a)=>fr(n)+fr(e[a])))}function fr(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function hr(e){return(e?e.ownerDocument:document).body.offsetHeight}function Hc(e,t,n){const a=e[Hn];a&&(t=(t?[t,...a]:[...a]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const gr=Symbol("_vod"),Kc=Symbol("_vsh"),Yc=Symbol(""),jc=/(?:^|;)\s*display\s*:/;function Gc(e,t,n){const a=e.style,s=Oe(n);let r=!1;if(n&&!s){if(t)if(Oe(t))for(const o of t.split(";")){const i=o.slice(0,o.indexOf(":")).trim();n[i]==null&&ta(a,i,"")}else for(const o in t)n[o]==null&&ta(a,o,"");for(const o in n)o==="display"&&(r=!0),ta(a,o,n[o])}else if(s){if(t!==n){const o=a[Yc];o&&(n+=";"+o),a.cssText=n,r=jc.test(n)}}else t&&e.removeAttribute("style");gr in e&&(e[gr]=r?a.display:"",e[Kc]&&(a.display="none"))}const mr=/\s*!important$/;function ta(e,t,n){if(ne(n))n.forEach(a=>ta(e,t,a));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const a=qc(e,t);mr.test(n)?e.setProperty(Yt(a),n.replace(mr,""),"important"):e[a]=n}}const _r=["Webkit","Moz","ms"],$a={};function qc(e,t){const n=$a[t];if(n)return n;let a=Qe(t);if(a!=="filter"&&a in e)return $a[t]=a;a=ma(a);for(let s=0;s<_r.length;s++){const r=_r[s]+a;if(r in e)return $a[t]=r}return t}const br="http://www.w3.org/1999/xlink";function yr(e,t,n,a,s,r=ji(t)){a&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(br,t.slice(6,t.length)):e.setAttributeNS(br,t,n):n==null||r&&!to(n)?e.removeAttribute(t):e.setAttribute(t,r?"":Kt(n)?String(n):n)}function vr(e,t,n,a,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?ci(n):n);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const i=r==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(i!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const i=typeof e[t];i==="boolean"?n=to(n):n==null&&i==="string"?(n="",o=!0):i==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(s||t)}function Wc(e,t,n,a){e.addEventListener(t,n,a)}function Jc(e,t,n,a){e.removeEventListener(t,n,a)}const Tr=Symbol("_vei");function Vc(e,t,n,a,s=null){const r=e[Tr]||(e[Tr]={}),o=r[t];if(a&&o)o.value=a;else{const[i,l]=zc(t);if(a){const u=r[t]=Zc(a,s);Wc(e,i,u,l)}else o&&(Jc(e,i,o,l),r[t]=void 0)}}const Er=/(?:Once|Passive|Capture)$/;function zc(e){let t;if(Er.test(e)){t={};let a;for(;a=e.match(Er);)e=e.slice(0,e.length-a[0].length),t[a[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Yt(e.slice(2)),t]}let Ua=0;const Qc=Promise.resolve(),Xc=()=>Ua||(Qc.then(()=>Ua=0),Ua=Date.now());function Zc(e,t){const n=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=n.attached)return;nt(ed(a,n.value),t,5,[a])};return n.value=e,n.attached=Xc(),n}function ed(e,t){if(ne(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(a=>s=>!s._stopped&&a&&a(s))}else return t}const Sr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,td=(e,t,n,a,s,r)=>{const o=s==="svg";t==="class"?Hc(e,a,o):t==="style"?Gc(e,n,a):fa(t)?gs(t)||Vc(e,t,n,a,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):nd(e,t,a,o))?(vr(e,t,a),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&yr(e,t,a,o,r,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Oe(a))?vr(e,Qe(t),a,r,t):(t==="true-value"?e._trueValue=a:t==="false-value"&&(e._falseValue=a),yr(e,t,a,o))};function nd(e,t,n,a){if(a)return!!(t==="innerHTML"||t==="textContent"||t in e&&Sr(t)&&re(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Sr(t)&&Oe(n)?!1:t in e}const ad=["ctrl","shift","alt","meta"],sd={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>ad.some(n=>e[`${n}Key`]&&!t.includes(n))},Oa=(e,t)=>{const n=e._withMods||(e._withMods={}),a=t.join(".");return n[a]||(n[a]=((s,...r)=>{for(let o=0;o<t.length;o++){const i=sd[t[o]];if(i&&i(s,t))return}return e(s,...r)}))},rd={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Tt=(e,t)=>{const n=e._withKeys||(e._withKeys={}),a=t.join(".");return n[a]||(n[a]=(s=>{if(!("key"in s))return;const r=Yt(s.key);if(t.some(o=>o===r||rd[o]===r))return e(s)}))},od=we({patchProp:td},Lc);let Ar;function id(){return Ar||(Ar=nc(od))}const ld=((...e)=>{const t=id().createApp(...e),{mount:n}=t;return t.mount=a=>{const s=dd(a);if(!s)return;const r=t._component;!re(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,cd(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t});function cd(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function dd(e){return Oe(e)?document.querySelector(e):e}let ui;const ka=e=>ui=e,pi=Symbol();function is(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Ln;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Ln||(Ln={}));function ud(){const e=oo(!0),t=e.run(()=>Ve({}));let n=[],a=[];const s=Ps({install(r){ka(s),s._a=r,r.provide(pi,s),r.config.globalProperties.$pinia=s,a.forEach(o=>n.push(o)),a=[]},use(r){return this._a?n.push(r):a.push(r),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}const fi=()=>{};function Or(e,t,n,a=fi){e.add(t);const s=()=>{e.delete(t)&&a()};return!n&&io()&&Gi(s),s}function on(e,...t){e.forEach(n=>{n(...t)})}const pd=e=>e(),kr=Symbol(),Ha=Symbol();function ls(e,t){e instanceof Map&&t instanceof Map?t.forEach((n,a)=>e.set(a,n)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const a=t[n],s=e[n];is(s)&&is(a)&&e.hasOwnProperty(n)&&!Ae(a)&&!nn(a)?e[n]=ls(s,a):e[n]=a}return e}const fd=Symbol();function hd(e){return!is(e)||!Object.prototype.hasOwnProperty.call(e,fd)}const{assign:Ct}=Object;function gd(e){return!!(Ae(e)&&e.effect)}function md(e,t,n,a){const{state:s,actions:r,getters:o}=t,i=n.state.value[e];let l;function u(){i||(n.state.value[e]=s?s():{});const d=hl(n.state.value[e]);return Ct(d,r,Object.keys(o||{}).reduce((f,m)=>(f[m]=Ps(qe(()=>{ka(n);const p=n._s.get(e);return o[m].call(p,p)})),f),{}))}return l=hi(e,u,t,n,a,!0),l}function hi(e,t,n={},a,s,r){let o;const i=Ct({actions:{}},n),l={deep:!0};let u,d,f=new Set,m=new Set,p;const g=a.state.value[e];!r&&!g&&(a.state.value[e]={}),Ve({});let c;function h(F){let A;u=d=!1,typeof F=="function"?(F(a.state.value[e]),A={type:Ln.patchFunction,storeId:e,events:p}):(ls(a.state.value[e],F),A={type:Ln.patchObject,payload:F,storeId:e,events:p});const C=c=Symbol();ws().then(()=>{c===C&&(u=!0)}),d=!0,on(f,A,a.state.value[e])}const _=r?function(){const{state:A}=n,C=A?A():{};this.$patch(U=>{Ct(U,C)})}:fi;function y(){o.stop(),f.clear(),m.clear(),a._s.delete(e)}const T=(F,A="")=>{if(kr in F)return F[Ha]=A,F;const C=function(){ka(a);const U=Array.from(arguments),w=new Set,J=new Set;function ee(I){w.add(I)}function ae(I){J.add(I)}on(m,{args:U,name:C[Ha],store:k,after:ee,onError:ae});let X;try{X=F.apply(this&&this.$id===e?this:k,U)}catch(I){throw on(J,I),I}return X instanceof Promise?X.then(I=>(on(w,I),I)).catch(I=>(on(J,I),Promise.reject(I))):(on(w,X),X)};return C[kr]=!0,C[Ha]=A,C},E={_p:a,$id:e,$onAction:Or.bind(null,m),$patch:h,$reset:_,$subscribe(F,A={}){const C=Or(f,F,A.detached,()=>U()),U=o.run(()=>Rn(()=>a.state.value[e],w=>{(A.flush==="sync"?d:u)&&F({storeId:e,type:Ln.direct,events:p},w)},Ct({},l,A)));return C},$dispose:y},k=St(E);a._s.set(e,k);const D=(a._a&&a._a.runWithContext||pd)(()=>a._e.run(()=>(o=oo()).run(()=>t({action:T}))));for(const F in D){const A=D[F];if(Ae(A)&&!gd(A)||nn(A))r||(g&&hd(A)&&(Ae(A)?A.value=g[F]:ls(A,g[F])),a.state.value[e][F]=A);else if(typeof A=="function"){const C=T(A,F);D[F]=C,i.actions[F]=A}}return Ct(k,D),Ct(ce(k),D),Object.defineProperty(k,"$state",{get:()=>a.state.value[e],set:F=>{h(A=>{Ct(A,F)})}}),a._p.forEach(F=>{Ct(k,o.run(()=>F({store:k,app:a._a,pinia:a,options:i})))}),g&&r&&n.hydrate&&n.hydrate(k.$state,g),u=!0,d=!0,k}function _d(e,t,n){let a;const s=typeof t=="function";a=s?n:t;function r(o,i){const l=Vl();return o=o||(l?ze(pi,null):null),o&&ka(o),o=ui,o._s.has(e)||(s?hi(e,t,a,o):md(e,a,o)),o._s.get(e)}return r.$id=e,r}const dn=typeof document<"u";function gi(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function bd(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&gi(e.default)}const pe=Object.assign;function Ka(e,t){const n={};for(const a in t){const s=t[a];n[a]=at(s)?s.map(e):e(s)}return n}const Dn=()=>{},at=Array.isArray;function Pr(e,t){const n={};for(const a in e)n[a]=a in t?t[a]:e[a];return n}const mi=/#/g,yd=/&/g,vd=/\//g,Td=/=/g,Ed=/\?/g,_i=/\+/g,Sd=/%5B/g,Ad=/%5D/g,bi=/%5E/g,Od=/%60/g,yi=/%7B/g,kd=/%7C/g,vi=/%7D/g,Pd=/%20/g;function Ms(e){return e==null?"":encodeURI(""+e).replace(kd,"|").replace(Sd,"[").replace(Ad,"]")}function wd(e){return Ms(e).replace(yi,"{").replace(vi,"}").replace(bi,"^")}function cs(e){return Ms(e).replace(_i,"%2B").replace(Pd,"+").replace(mi,"%23").replace(yd,"%26").replace(Od,"`").replace(yi,"{").replace(vi,"}").replace(bi,"^")}function xd(e){return cs(e).replace(Td,"%3D")}function Cd(e){return Ms(e).replace(mi,"%23").replace(Ed,"%3F")}function Rd(e){return Cd(e).replace(vd,"%2F")}function Kn(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Nd=/\/$/,Ld=e=>e.replace(Nd,"");function Ya(e,t,n="/"){let a,s={},r="",o="";const i=t.indexOf("#");let l=t.indexOf("?");return l=i>=0&&l>i?-1:l,l>=0&&(a=t.slice(0,l),r=t.slice(l,i>0?i:t.length),s=e(r.slice(1))),i>=0&&(a=a||t.slice(0,i),o=t.slice(i,t.length)),a=Bd(a??t,n),{fullPath:a+r+o,path:a,query:s,hash:Kn(o)}}function Dd(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function wr(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Id(e,t,n){const a=t.matched.length-1,s=n.matched.length-1;return a>-1&&a===s&&gn(t.matched[a],n.matched[s])&&Ti(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function gn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ti(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Md(e[n],t[n]))return!1;return!0}function Md(e,t){return at(e)?xr(e,t):at(t)?xr(t,e):e===t}function xr(e,t){return at(t)?e.length===t.length&&e.every((n,a)=>n===t[a]):e.length===1&&e[0]===t}function Bd(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),a=e.split("/"),s=a[a.length-1];(s===".."||s===".")&&a.push("");let r=n.length-1,o,i;for(o=0;o<a.length;o++)if(i=a[o],i!==".")if(i==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+a.slice(o).join("/")}const xt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let ds=(function(e){return e.pop="pop",e.push="push",e})({}),ja=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function Fd(e){if(!e)if(dn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Ld(e)}const $d=/^[^#]+#/;function Ud(e,t){return e.replace($d,"#")+t}function Hd(e,t){const n=document.documentElement.getBoundingClientRect(),a=e.getBoundingClientRect();return{behavior:t.behavior,left:a.left-n.left-(t.left||0),top:a.top-n.top-(t.top||0)}}const Pa=()=>({left:window.scrollX,top:window.scrollY});function Kd(e){let t;if("el"in e){const n=e.el,a=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?a?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=Hd(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Cr(e,t){return(history.state?history.state.position-t:-1)+e}const us=new Map;function Yd(e,t){us.set(e,t)}function jd(e){const t=us.get(e);return us.delete(e),t}function Gd(e){return typeof e=="string"||e&&typeof e=="object"}function Ei(e){return typeof e=="string"||typeof e=="symbol"}let Se=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const Si=Symbol("");Se.MATCHER_NOT_FOUND+"",Se.NAVIGATION_GUARD_REDIRECT+"",Se.NAVIGATION_ABORTED+"",Se.NAVIGATION_CANCELLED+"",Se.NAVIGATION_DUPLICATED+"";function mn(e,t){return pe(new Error,{type:e,[Si]:!0},t)}function _t(e,t){return e instanceof Error&&Si in e&&(t==null||!!(e.type&t))}const qd=["params","query","hash"];function Wd(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of qd)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function Jd(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<n.length;++a){const s=n[a].replace(_i," "),r=s.indexOf("="),o=Kn(r<0?s:s.slice(0,r)),i=r<0?null:Kn(s.slice(r+1));if(o in t){let l=t[o];at(l)||(l=t[o]=[l]),l.push(i)}else t[o]=i}return t}function Rr(e){let t="";for(let n in e){const a=e[n];if(n=xd(n),a==null){a!==void 0&&(t+=(t.length?"&":"")+n);continue}(at(a)?a.map(s=>s&&cs(s)):[a&&cs(a)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function Vd(e){const t={};for(const n in e){const a=e[n];a!==void 0&&(t[n]=at(a)?a.map(s=>s==null?null:""+s):a==null?a:""+a)}return t}const zd=Symbol(""),Nr=Symbol(""),wa=Symbol(""),Bs=Symbol(""),ps=Symbol("");function En(){let e=[];function t(a){return e.push(a),()=>{const s=e.indexOf(a);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Lt(e,t,n,a,s,r=o=>o()){const o=a&&(a.enterCallbacks[s]=a.enterCallbacks[s]||[]);return()=>new Promise((i,l)=>{const u=m=>{m===!1?l(mn(Se.NAVIGATION_ABORTED,{from:n,to:t})):m instanceof Error?l(m):Gd(m)?l(mn(Se.NAVIGATION_GUARD_REDIRECT,{from:t,to:m})):(o&&a.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),i())},d=r(()=>e.call(a&&a.instances[s],t,n,u));let f=Promise.resolve(d);e.length<3&&(f=f.then(u)),f.catch(m=>l(m))})}function Ga(e,t,n,a,s=r=>r()){const r=[];for(const o of e)for(const i in o.components){let l=o.components[i];if(!(t!=="beforeRouteEnter"&&!o.instances[i]))if(gi(l)){const u=(l.__vccOpts||l)[t];u&&r.push(Lt(u,n,a,o,i,s))}else{let u=l();r.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${i}" at "${o.path}"`);const f=bd(d)?d.default:d;o.mods[i]=d,o.components[i]=f;const m=(f.__vccOpts||f)[t];return m&&Lt(m,n,a,o,i,s)()}))}}return r}function Qd(e,t){const n=[],a=[],s=[],r=Math.max(t.matched.length,e.matched.length);for(let o=0;o<r;o++){const i=t.matched[o];i&&(e.matched.find(u=>gn(u,i))?a.push(i):n.push(i));const l=e.matched[o];l&&(t.matched.find(u=>gn(u,l))||s.push(l))}return[n,a,s]}let Xd=()=>location.protocol+"//"+location.host;function Ai(e,t){const{pathname:n,search:a,hash:s}=t,r=e.indexOf("#");if(r>-1){let o=s.includes(e.slice(r))?e.slice(r).length:1,i=s.slice(o);return i[0]!=="/"&&(i="/"+i),wr(i,"")}return wr(n,e)+a+s}function Zd(e,t,n,a){let s=[],r=[],o=null;const i=({state:m})=>{const p=Ai(e,location),g=n.value,c=t.value;let h=0;if(m){if(n.value=p,t.value=m,o&&o===g){o=null;return}h=c?m.position-c.position:0}else a(p);s.forEach(_=>{_(n.value,g,{delta:h,type:ds.pop,direction:h?h>0?ja.forward:ja.back:ja.unknown})})};function l(){o=n.value}function u(m){s.push(m);const p=()=>{const g=s.indexOf(m);g>-1&&s.splice(g,1)};return r.push(p),p}function d(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(pe({},m.state,{scroll:Pa()}),"")}}function f(){for(const m of r)m();r=[],window.removeEventListener("popstate",i),window.removeEventListener("pagehide",d),document.removeEventListener("visibilitychange",d)}return window.addEventListener("popstate",i),window.addEventListener("pagehide",d),document.addEventListener("visibilitychange",d),{pauseListeners:l,listen:u,destroy:f}}function Lr(e,t,n,a=!1,s=!1){return{back:e,current:t,forward:n,replaced:a,position:window.history.length,scroll:s?Pa():null}}function eu(e){const{history:t,location:n}=window,a={value:Ai(e,n)},s={value:t.state};s.value||r(a.value,{back:null,current:a.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(l,u,d){const f=e.indexOf("#"),m=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+l:Xd()+e+l;try{t[d?"replaceState":"pushState"](u,"",m),s.value=u}catch(p){console.error(p),n[d?"replace":"assign"](m)}}function o(l,u){r(l,pe({},t.state,Lr(s.value.back,l,s.value.forward,!0),u,{position:s.value.position}),!0),a.value=l}function i(l,u){const d=pe({},s.value,t.state,{forward:l,scroll:Pa()});r(d.current,d,!0),r(l,pe({},Lr(a.value,l,null),{position:d.position+1},u),!1),a.value=l}return{location:a,state:s,push:i,replace:o}}function tu(e){e=Fd(e);const t=eu(e),n=Zd(e,t.state,t.location,t.replace);function a(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=pe({location:"",base:e,go:a,createHref:Ud.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function nu(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),tu(e)}let en=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var Pe=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(Pe||{});const au={type:en.Static,value:""},su=/[a-zA-Z0-9_]/;function ru(e){if(!e)return[[]];if(e==="/")return[[au]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(p){throw new Error(`ERR (${n})/"${u}": ${p}`)}let n=Pe.Static,a=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let i=0,l,u="",d="";function f(){u&&(n===Pe.Static?r.push({type:en.Static,value:u}):n===Pe.Param||n===Pe.ParamRegExp||n===Pe.ParamRegExpEnd?(r.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:en.Param,value:u,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),u="")}function m(){u+=l}for(;i<e.length;){if(l=e[i++],l==="\\"&&n!==Pe.ParamRegExp){a=n,n=Pe.EscapeNext;continue}switch(n){case Pe.Static:l==="/"?(u&&f(),o()):l===":"?(f(),n=Pe.Param):m();break;case Pe.EscapeNext:m(),n=a;break;case Pe.Param:l==="("?n=Pe.ParamRegExp:su.test(l)?m():(f(),n=Pe.Static,l!=="*"&&l!=="?"&&l!=="+"&&i--);break;case Pe.ParamRegExp:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:n=Pe.ParamRegExpEnd:d+=l;break;case Pe.ParamRegExpEnd:f(),n=Pe.Static,l!=="*"&&l!=="?"&&l!=="+"&&i--,d="";break;default:t("Unknown state");break}}return n===Pe.ParamRegExp&&t(`Unfinished custom RegExp for param "${u}"`),f(),o(),s}const Dr="[^/]+?",ou={sensitive:!1,strict:!1,start:!0,end:!0};var De=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(De||{});const iu=/[.+*?^${}()[\]/\\]/g;function lu(e,t){const n=pe({},ou,t),a=[];let s=n.start?"^":"";const r=[];for(const u of e){const d=u.length?[]:[De.Root];n.strict&&!u.length&&(s+="/");for(let f=0;f<u.length;f++){const m=u[f];let p=De.Segment+(n.sensitive?De.BonusCaseSensitive:0);if(m.type===en.Static)f||(s+="/"),s+=m.value.replace(iu,"\\$&"),p+=De.Static;else if(m.type===en.Param){const{value:g,repeatable:c,optional:h,regexp:_}=m;r.push({name:g,repeatable:c,optional:h});const y=_||Dr;if(y!==Dr){p+=De.BonusCustomRegExp;try{`${y}`}catch(E){throw new Error(`Invalid custom RegExp for param "${g}" (${y}): `+E.message)}}let T=c?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;f||(T=h&&u.length<2?`(?:/${T})`:"/"+T),h&&(T+="?"),s+=T,p+=De.Dynamic,h&&(p+=De.BonusOptional),c&&(p+=De.BonusRepeatable),y===".*"&&(p+=De.BonusWildcard)}d.push(p)}a.push(d)}if(n.strict&&n.end){const u=a.length-1;a[u][a[u].length-1]+=De.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function i(u){const d=u.match(o),f={};if(!d)return null;for(let m=1;m<d.length;m++){const p=d[m]||"",g=r[m-1];f[g.name]=p&&g.repeatable?p.split("/"):p}return f}function l(u){let d="",f=!1;for(const m of e){(!f||!d.endsWith("/"))&&(d+="/"),f=!1;for(const p of m)if(p.type===en.Static)d+=p.value;else if(p.type===en.Param){const{value:g,repeatable:c,optional:h}=p,_=g in u?u[g]:"";if(at(_)&&!c)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const y=at(_)?_.join("/"):_;if(!y)if(h)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);d+=y}}return d||"/"}return{re:o,score:a,keys:r,parse:i,stringify:l}}function cu(e,t){let n=0;for(;n<e.length&&n<t.length;){const a=t[n]-e[n];if(a)return a;n++}return e.length<t.length?e.length===1&&e[0]===De.Static+De.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===De.Static+De.Segment?1:-1:0}function Oi(e,t){let n=0;const a=e.score,s=t.score;for(;n<a.length&&n<s.length;){const r=cu(a[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-a.length)===1){if(Ir(a))return 1;if(Ir(s))return-1}return s.length-a.length}function Ir(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const du={strict:!1,end:!0,sensitive:!1};function uu(e,t,n){const a=lu(ru(e.path),n),s=pe(a,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function pu(e,t){const n=[],a=new Map;t=Pr(du,t);function s(f){return a.get(f)}function r(f,m,p){const g=!p,c=Br(f);c.aliasOf=p&&p.record;const h=Pr(t,f),_=[c];if("alias"in f){const E=typeof f.alias=="string"?[f.alias]:f.alias;for(const k of E)_.push(Br(pe({},c,{components:p?p.record.components:c.components,path:k,aliasOf:p?p.record:c})))}let y,T;for(const E of _){const{path:k}=E;if(m&&k[0]!=="/"){const L=m.record.path,D=L[L.length-1]==="/"?"":"/";E.path=m.record.path+(k&&D+k)}if(y=uu(E,m,h),p?p.alias.push(y):(T=T||y,T!==y&&T.alias.push(y),g&&f.name&&!Fr(y)&&o(f.name)),ki(y)&&l(y),c.children){const L=c.children;for(let D=0;D<L.length;D++)r(L[D],y,p&&p.children[D])}p=p||y}return T?()=>{o(T)}:Dn}function o(f){if(Ei(f)){const m=a.get(f);m&&(a.delete(f),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(f);m>-1&&(n.splice(m,1),f.record.name&&a.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function i(){return n}function l(f){const m=gu(f,n);n.splice(m,0,f),f.record.name&&!Fr(f)&&a.set(f.record.name,f)}function u(f,m){let p,g={},c,h;if("name"in f&&f.name){if(p=a.get(f.name),!p)throw mn(Se.MATCHER_NOT_FOUND,{location:f});h=p.record.name,g=pe(Mr(m.params,p.keys.filter(T=>!T.optional).concat(p.parent?p.parent.keys.filter(T=>T.optional):[]).map(T=>T.name)),f.params&&Mr(f.params,p.keys.map(T=>T.name))),c=p.stringify(g)}else if(f.path!=null)c=f.path,p=n.find(T=>T.re.test(c)),p&&(g=p.parse(c),h=p.record.name);else{if(p=m.name?a.get(m.name):n.find(T=>T.re.test(m.path)),!p)throw mn(Se.MATCHER_NOT_FOUND,{location:f,currentLocation:m});h=p.record.name,g=pe({},m.params,f.params),c=p.stringify(g)}const _=[];let y=p;for(;y;)_.unshift(y.record),y=y.parent;return{name:h,path:c,params:g,matched:_,meta:hu(_)}}e.forEach(f=>r(f));function d(){n.length=0,a.clear()}return{addRoute:r,resolve:u,removeRoute:o,clearRoutes:d,getRoutes:i,getRecordMatcher:s}}function Mr(e,t){const n={};for(const a of t)a in e&&(n[a]=e[a]);return n}function Br(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:fu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function fu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const a in e.components)t[a]=typeof n=="object"?n[a]:n;return t}function Fr(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function hu(e){return e.reduce((t,n)=>pe(t,n.meta),{})}function gu(e,t){let n=0,a=t.length;for(;n!==a;){const r=n+a>>1;Oi(e,t[r])<0?a=r:n=r+1}const s=mu(e);return s&&(a=t.lastIndexOf(s,a-1)),a}function mu(e){let t=e;for(;t=t.parent;)if(ki(t)&&Oi(e,t)===0)return t}function ki({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function $r(e){const t=ze(wa),n=ze(Bs),a=qe(()=>{const l=Ft(e.to);return t.resolve(l)}),s=qe(()=>{const{matched:l}=a.value,{length:u}=l,d=l[u-1],f=n.matched;if(!d||!f.length)return-1;const m=f.findIndex(gn.bind(null,d));if(m>-1)return m;const p=Ur(l[u-2]);return u>1&&Ur(d)===p&&f[f.length-1].path!==p?f.findIndex(gn.bind(null,l[u-2])):m}),r=qe(()=>s.value>-1&&Tu(n.params,a.value.params)),o=qe(()=>s.value>-1&&s.value===n.matched.length-1&&Ti(n.params,a.value.params));function i(l={}){if(vu(l)){const u=t[Ft(e.replace)?"replace":"push"](Ft(e.to)).catch(Dn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:a,href:qe(()=>a.value.href),isActive:r,isExactActive:o,navigate:i}}function _u(e){return e.length===1?e[0]:e}const bu=Bo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:$r,setup(e,{slots:t}){const n=St($r(e)),{options:a}=ze(wa),s=qe(()=>({[Hr(e.activeClass,a.linkActiveClass,"router-link-active")]:n.isActive,[Hr(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&_u(t.default(n));return e.custom?r:Is("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),yu=bu;function vu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Tu(e,t){for(const n in t){const a=t[n],s=e[n];if(typeof a=="string"){if(a!==s)return!1}else if(!at(s)||s.length!==a.length||a.some((r,o)=>r!==s[o]))return!1}return!0}function Ur(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Hr=(e,t,n)=>e??t??n,Eu=Bo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const a=ze(ps),s=qe(()=>e.route||a.value),r=ze(Nr,0),o=qe(()=>{let u=Ft(r);const{matched:d}=s.value;let f;for(;(f=d[u])&&!f.components;)u++;return u}),i=qe(()=>s.value.matched[o.value]);Xn(Nr,qe(()=>o.value+1)),Xn(zd,i),Xn(ps,s);const l=Ve();return Rn(()=>[l.value,i.value,e.name],([u,d,f],[m,p,g])=>{d&&(d.instances[f]=u,p&&p!==d&&u&&u===m&&(d.leaveGuards.size||(d.leaveGuards=p.leaveGuards),d.updateGuards.size||(d.updateGuards=p.updateGuards))),u&&d&&(!p||!gn(d,p)||!m)&&(d.enterCallbacks[f]||[]).forEach(c=>c(u))},{flush:"post"}),()=>{const u=s.value,d=e.name,f=i.value,m=f&&f.components[d];if(!m)return Kr(n.default,{Component:m,route:u});const p=f.props[d],g=p?p===!0?u.params:typeof p=="function"?p(u):p:null,h=Is(m,pe({},g,t,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(f.instances[d]=null)},ref:l}));return Kr(n.default,{Component:h,route:u})||h}}});function Kr(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Pi=Eu;function Su(e){const t=pu(e.routes,e),n=e.parseQuery||Jd,a=e.stringifyQuery||Rr,s=e.history,r=En(),o=En(),i=En(),l=ul(xt);let u=xt;dn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Ka.bind(null,x=>""+x),f=Ka.bind(null,Rd),m=Ka.bind(null,Kn);function p(x,G){let Y,z;return Ei(x)?(Y=t.getRecordMatcher(x),z=G):z=x,t.addRoute(z,Y)}function g(x){const G=t.getRecordMatcher(x);G&&t.removeRoute(G)}function c(){return t.getRoutes().map(x=>x.record)}function h(x){return!!t.getRecordMatcher(x)}function _(x,G){if(G=pe({},G||l.value),typeof x=="string"){const S=Ya(n,x,G.path),N=t.resolve({path:S.path},G),M=s.createHref(S.fullPath);return pe(S,N,{params:m(N.params),hash:Kn(S.hash),redirectedFrom:void 0,href:M})}let Y;if(x.path!=null)Y=pe({},x,{path:Ya(n,x.path,G.path).path});else{const S=pe({},x.params);for(const N in S)S[N]==null&&delete S[N];Y=pe({},x,{params:f(S)}),G.params=f(G.params)}const z=t.resolve(Y,G),oe=x.hash||"";z.params=d(m(z.params));const b=Dd(a,pe({},x,{hash:wd(oe),path:z.path})),v=s.createHref(b);return pe({fullPath:b,hash:oe,query:a===Rr?Vd(x.query):x.query||{}},z,{redirectedFrom:void 0,href:v})}function y(x){return typeof x=="string"?Ya(n,x,l.value.path):pe({},x)}function T(x,G){if(u!==x)return mn(Se.NAVIGATION_CANCELLED,{from:G,to:x})}function E(x){return D(x)}function k(x){return E(pe(y(x),{replace:!0}))}function L(x,G){const Y=x.matched[x.matched.length-1];if(Y&&Y.redirect){const{redirect:z}=Y;let oe=typeof z=="function"?z(x,G):z;return typeof oe=="string"&&(oe=oe.includes("?")||oe.includes("#")?oe=y(oe):{path:oe},oe.params={}),pe({query:x.query,hash:x.hash,params:oe.path!=null?{}:x.params},oe)}}function D(x,G){const Y=u=_(x),z=l.value,oe=x.state,b=x.force,v=x.replace===!0,S=L(Y,z);if(S)return D(pe(y(S),{state:typeof S=="object"?pe({},oe,S.state):oe,force:b,replace:v}),G||Y);const N=Y;N.redirectedFrom=G;let M;return!b&&Id(a,z,Y)&&(M=mn(Se.NAVIGATION_DUPLICATED,{to:N,from:z}),ue(z,z,!0,!1)),(M?Promise.resolve(M):C(N,z)).catch(R=>_t(R)?_t(R,Se.NAVIGATION_GUARD_REDIRECT)?R:Q(R):V(R,N,z)).then(R=>{if(R){if(_t(R,Se.NAVIGATION_GUARD_REDIRECT))return D(pe({replace:v},y(R.to),{state:typeof R.to=="object"?pe({},oe,R.to.state):oe,force:b}),G||N)}else R=w(N,z,!0,v,oe);return U(N,z,R),R})}function F(x,G){const Y=T(x,G);return Y?Promise.reject(Y):Promise.resolve()}function A(x){const G=ke.values().next().value;return G&&typeof G.runWithContext=="function"?G.runWithContext(x):x()}function C(x,G){let Y;const[z,oe,b]=Qd(x,G);Y=Ga(z.reverse(),"beforeRouteLeave",x,G);for(const S of z)S.leaveGuards.forEach(N=>{Y.push(Lt(N,x,G))});const v=F.bind(null,x,G);return Y.push(v),Ee(Y).then(()=>{Y=[];for(const S of r.list())Y.push(Lt(S,x,G));return Y.push(v),Ee(Y)}).then(()=>{Y=Ga(oe,"beforeRouteUpdate",x,G);for(const S of oe)S.updateGuards.forEach(N=>{Y.push(Lt(N,x,G))});return Y.push(v),Ee(Y)}).then(()=>{Y=[];for(const S of b)if(S.beforeEnter)if(at(S.beforeEnter))for(const N of S.beforeEnter)Y.push(Lt(N,x,G));else Y.push(Lt(S.beforeEnter,x,G));return Y.push(v),Ee(Y)}).then(()=>(x.matched.forEach(S=>S.enterCallbacks={}),Y=Ga(b,"beforeRouteEnter",x,G,A),Y.push(v),Ee(Y))).then(()=>{Y=[];for(const S of o.list())Y.push(Lt(S,x,G));return Y.push(v),Ee(Y)}).catch(S=>_t(S,Se.NAVIGATION_CANCELLED)?S:Promise.reject(S))}function U(x,G,Y){i.list().forEach(z=>A(()=>z(x,G,Y)))}function w(x,G,Y,z,oe){const b=T(x,G);if(b)return b;const v=G===xt,S=dn?history.state:{};Y&&(z||v?s.replace(x.fullPath,pe({scroll:v&&S&&S.scroll},oe)):s.push(x.fullPath,oe)),l.value=x,ue(x,G,Y,v),Q()}let J;function ee(){J||(J=s.listen((x,G,Y)=>{if(!Te.listening)return;const z=_(x),oe=L(z,Te.currentRoute.value);if(oe){D(pe(oe,{replace:!0,force:!0}),z).catch(Dn);return}u=z;const b=l.value;dn&&Yd(Cr(b.fullPath,Y.delta),Pa()),C(z,b).catch(v=>_t(v,Se.NAVIGATION_ABORTED|Se.NAVIGATION_CANCELLED)?v:_t(v,Se.NAVIGATION_GUARD_REDIRECT)?(D(pe(y(v.to),{force:!0}),z).then(S=>{_t(S,Se.NAVIGATION_ABORTED|Se.NAVIGATION_DUPLICATED)&&!Y.delta&&Y.type===ds.pop&&s.go(-1,!1)}).catch(Dn),Promise.reject()):(Y.delta&&s.go(-Y.delta,!1),V(v,z,b))).then(v=>{v=v||w(z,b,!1),v&&(Y.delta&&!_t(v,Se.NAVIGATION_CANCELLED)?s.go(-Y.delta,!1):Y.type===ds.pop&&_t(v,Se.NAVIGATION_ABORTED|Se.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),U(z,b,v)}).catch(Dn)}))}let ae=En(),X=En(),I;function V(x,G,Y){Q(x);const z=X.list();return z.length?z.forEach(oe=>oe(x,G,Y)):console.error(x),Promise.reject(x)}function ie(){return I&&l.value!==xt?Promise.resolve():new Promise((x,G)=>{ae.add([x,G])})}function Q(x){return I||(I=!x,ee(),ae.list().forEach(([G,Y])=>x?Y(x):G()),ae.reset()),x}function ue(x,G,Y,z){const{scrollBehavior:oe}=e;if(!dn||!oe)return Promise.resolve();const b=!Y&&jd(Cr(x.fullPath,0))||(z||!Y)&&history.state&&history.state.scroll||null;return ws().then(()=>oe(x,G,b)).then(v=>v&&Kd(v)).catch(v=>V(v,x,G))}const de=x=>s.go(x);let Be;const ke=new Set,Te={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,clearRoutes:t.clearRoutes,hasRoute:h,getRoutes:c,resolve:_,options:e,push:E,replace:k,go:de,back:()=>de(-1),forward:()=>de(1),beforeEach:r.add,beforeResolve:o.add,afterEach:i.add,onError:X.add,isReady:ie,install(x){x.component("RouterLink",yu),x.component("RouterView",Pi),x.config.globalProperties.$router=Te,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>Ft(l)}),dn&&!Be&&l.value===xt&&(Be=!0,E(s.location).catch(z=>{}));const G={};for(const z in xt)Object.defineProperty(G,z,{get:()=>l.value[z],enumerable:!0});x.provide(wa,Te),x.provide(Bs,So(G)),x.provide(ps,l);const Y=x.unmount;ke.add(x),x.unmount=function(){ke.delete(x),ke.size<1&&(u=xt,J&&J(),J=null,l.value=xt,Be=!1,I=!1),Y()}}};function Ee(x){return x.reduce((G,Y)=>G.then(()=>A(Y)),Promise.resolve())}return Te}function ht(){return ze(wa)}function wi(e){return ze(Bs)}var Au=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ou(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var An={exports:{}},ku=An.exports,Yr;function Pu(){return Yr||(Yr=1,(function(e,t){(function(n,a){var s={};n.PubSub?(s=n.PubSub,console.warn("PubSub already loaded, using existing version")):(n.PubSub=s,a(s)),e!==void 0&&e.exports&&(t=e.exports=s),t.PubSub=s,e.exports=t=s})(typeof window=="object"&&window||ku||Au,function(n){var a={},s=-1,r="*";function o(c){var h;for(h in c)if(Object.prototype.hasOwnProperty.call(c,h))return!0;return!1}function i(c){return function(){throw c}}function l(c,h,_){try{c(h,_)}catch(y){setTimeout(i(y),0)}}function u(c,h,_){c(h,_)}function d(c,h,_,y){var T=a[h],E=y?u:l,k;if(Object.prototype.hasOwnProperty.call(a,h))for(k in T)Object.prototype.hasOwnProperty.call(T,k)&&E(T[k],c,_)}function f(c,h,_){return function(){var T=String(c),E=T.lastIndexOf(".");for(d(c,c,h,_);E!==-1;)T=T.substr(0,E),E=T.lastIndexOf("."),d(c,T,h,_);d(c,r,h,_)}}function m(c){var h=String(c),_=!!(Object.prototype.hasOwnProperty.call(a,h)&&o(a[h]));return _}function p(c){for(var h=String(c),_=m(h)||m(r),y=h.lastIndexOf(".");!_&&y!==-1;)h=h.substr(0,y),y=h.lastIndexOf("."),_=m(h);return _}function g(c,h,_,y){c=typeof c=="symbol"?c.toString():c;var T=f(c,h,y),E=p(c);return E?(_===!0?T():setTimeout(T,0),!0):!1}n.publish=function(c,h){return g(c,h,!1,n.immediateExceptions)},n.publishSync=function(c,h){return g(c,h,!0,n.immediateExceptions)},n.subscribe=function(c,h){if(typeof h!="function")return!1;c=typeof c=="symbol"?c.toString():c,Object.prototype.hasOwnProperty.call(a,c)||(a[c]={});var _="uid_"+String(++s);return a[c][_]=h,_},n.subscribeAll=function(c){return n.subscribe(r,c)},n.subscribeOnce=function(c,h){var _=n.subscribe(c,function(){n.unsubscribe(_),h.apply(this,arguments)});return n},n.clearAllSubscriptions=function(){a={}},n.clearSubscriptions=function(h){var _;for(_ in a)Object.prototype.hasOwnProperty.call(a,_)&&_.indexOf(h)===0&&delete a[_]},n.countSubscriptions=function(h){var _,y,T=0;for(_ in a)if(Object.prototype.hasOwnProperty.call(a,_)&&_.indexOf(h)===0){for(y in a[_])T++;break}return T},n.getSubscriptions=function(h){var _,y=[];for(_ in a)Object.prototype.hasOwnProperty.call(a,_)&&_.indexOf(h)===0&&y.push(_);return y},n.unsubscribe=function(c){var h=function(F){var A;for(A in a)if(Object.prototype.hasOwnProperty.call(a,A)&&A.indexOf(F)===0)return!0;return!1},_=typeof c=="string"&&(Object.prototype.hasOwnProperty.call(a,c)||h(c)),y=!_&&typeof c=="string",T=typeof c=="function",E=!1,k,L,D;if(_){n.clearSubscriptions(c);return}for(k in a)if(Object.prototype.hasOwnProperty.call(a,k)){if(L=a[k],y&&L[c]){delete L[c],E=c;break}if(T)for(D in L)Object.prototype.hasOwnProperty.call(L,D)&&L[D]===c&&(delete L[D],E=!0)}return E}})})(An,An.exports)),An.exports}var wu=Pu();const W=Ou(wu);let _n=[{key:"americanfootball_cfl",group:"American Football",title:"CFL",description:"Canadian Football League",active:!0,has_outrights:!1},{key:"americanfootball_ncaaf",group:"American Football",title:"NCAAF",description:"US College Football",active:!0,has_outrights:!1},{key:"americanfootball_ncaaf_championship_winner",group:"American Football",title:"NCAAF Championship Winner",description:"US College Football Championship Winner",active:!0,has_outrights:!0},{key:"americanfootball_nfl",group:"American Football",title:"NFL",description:"US Football",active:!0,has_outrights:!1},{key:"americanfootball_nfl_super_bowl_winner",group:"American Football",title:"NFL Super Bowl Winner",description:"Super Bowl Winner 2025/2026",active:!1,has_outrights:!0},{key:"aussierules_afl",group:"Aussie Rules",title:"AFL",description:"Aussie Football",active:!1,has_outrights:!1},{key:"baseball_kbo",group:"Baseball",title:"KBO",description:"KBO League",active:!1,has_outrights:!1},{key:"baseball_milb",group:"Baseball",title:"MiLB",description:"Minor League Baseball",active:!1,has_outrights:!1},{key:"baseball_mlb",group:"Baseball",title:"MLB",description:"Major League Baseball",active:!0,has_outrights:!1},{key:"baseball_mlb_world_series_winner",group:"Baseball",title:"MLB World Series Winner",description:"World Series Winner 2025",active:!1,has_outrights:!0},{key:"baseball_npb",group:"Baseball",title:"NPB",description:"Nippon Professional Baseball",active:!0,has_outrights:!1},{key:"basketball_euroleague",group:"Basketball",title:"Basketball Euroleague",description:"Basketball Euroleague",active:!1,has_outrights:!1},{key:"basketball_nba",group:"Basketball",title:"NBA",description:"US Basketball",active:!0,has_outrights:!1},{key:"basketball_nba_championship_winner",group:"Basketball",title:"NBA Championship Winner",description:"Championship Winner 2025/2026",active:!1,has_outrights:!0},{key:"basketball_nbl",group:"Basketball",title:"NBL",description:"AU National Basketball League",active:!1,has_outrights:!1},{key:"basketball_ncaab_championship_winner",group:"Basketball",title:"NCAAB Championship Winner",description:"US College Basketball Championship Winner",active:!0,has_outrights:!0},{key:"basketball_wnba",group:"Basketball",title:"WNBA",description:"US Basketball",active:!0,has_outrights:!1},{key:"boxing_boxing",group:"Boxing",title:"Boxing",description:"Boxing Bouts",active:!0,has_outrights:!1},{key:"cricket_asia_cup",group:"Cricket",title:"Asia Cup",description:"Asia Cup",active:!1,has_outrights:!1},{key:"cricket_international_t20",group:"Cricket",title:"International Twenty20",description:"International Twenty20",active:!0,has_outrights:!1},{key:"golf_masters_tournament_winner",group:"Golf",title:"Masters Tournament Winner",description:"2026 Winner",active:!0,has_outrights:!0},{key:"icehockey_liiga",group:"Ice Hockey",title:"Liiga",description:"Finnish SM League",active:!1,has_outrights:!1},{key:"icehockey_mestis",group:"Ice Hockey",title:"Mestis",description:"Finnish Mestis League",active:!1,has_outrights:!1},{key:"icehockey_nhl",group:"Ice Hockey",title:"NHL",description:"US Ice Hockey",active:!0,has_outrights:!1},{key:"icehockey_nhl_championship_winner",group:"Ice Hockey",title:"NHL Championship Winner",description:"Stanley Cup Winner 2025/2026",active:!1,has_outrights:!0},{key:"icehockey_sweden_allsvenskan",group:"Ice Hockey",title:"HockeyAllsvenskan",description:"Swedish Hockey Allsvenskan",active:!1,has_outrights:!1},{key:"icehockey_sweden_hockey_league",group:"Ice Hockey",title:"SHL",description:"Swedish Hockey League",active:!1,has_outrights:!1},{key:"mma_mixed_martial_arts",group:"Mixed Martial Arts",title:"MMA",description:"Mixed Martial Arts",active:!0,has_outrights:!1},{key:"politics_us_presidential_election_winner",group:"Politics",title:"US Presidential Elections Winner",description:"2028 US Presidential Election Winner",active:!1,has_outrights:!0},{key:"rugbyleague_nrl",group:"Rugby League",title:"NRL",description:"Aussie Rugby League",active:!1,has_outrights:!1},{key:"soccer_argentina_primera_division",group:"Soccer",title:"Primera División - Argentina",description:"Argentine Primera División",active:!1,has_outrights:!1},{key:"soccer_australia_aleague",group:"Soccer",title:"A-League",description:"Aussie Soccer",active:!1,has_outrights:!1},{key:"soccer_austria_bundesliga",group:"Soccer",title:"Austrian Football Bundesliga",description:"Austrian Soccer",active:!1,has_outrights:!1},{key:"soccer_belgium_first_div",group:"Soccer",title:"Belgium First Div",description:"Belgian First Division A",active:!1,has_outrights:!1},{key:"soccer_brazil_campeonato",group:"Soccer",title:"Brazil Série A",description:"Brasileirão Série A",active:!1,has_outrights:!1},{key:"soccer_brazil_serie_b",group:"Soccer",title:"Brazil Série B",description:"Campeonato Brasileiro Série B",active:!1,has_outrights:!1},{key:"soccer_chile_campeonato",group:"Soccer",title:"Primera División - Chile",description:"Campeonato Chileno",active:!1,has_outrights:!1},{key:"soccer_china_superleague",group:"Soccer",title:"Super League - China",description:"Chinese Soccer",active:!1,has_outrights:!1},{key:"soccer_conmebol_copa_libertadores",group:"Soccer",title:"Copa Libertadores",description:"CONMEBOL Copa Libertadores",active:!1,has_outrights:!1},{key:"soccer_conmebol_copa_sudamericana",group:"Soccer",title:"Copa Sudamericana",description:"CONMEBOL Copa Sudamericana",active:!1,has_outrights:!1},{key:"soccer_denmark_superliga",group:"Soccer",title:"Denmark Superliga",description:"Danish Soccer",active:!1,has_outrights:!1},{key:"soccer_efl_champ",group:"Soccer",title:"Championship",description:"EFL Championship",active:!1,has_outrights:!1},{key:"soccer_england_league1",group:"Soccer",title:"League 1",description:"EFL League 1",active:!1,has_outrights:!1},{key:"soccer_england_league2",group:"Soccer",title:"League 2",description:"EFL League 2 ",active:!1,has_outrights:!1},{key:"soccer_epl",group:"Soccer",title:"EPL",description:"English Premier League",active:!0,has_outrights:!1},{key:"soccer_fifa_world_cup_qualifiers_europe",group:"Soccer",title:"FIFA World Cup Qualifiers - Europe",description:"FIFA World Cup Qualifiers - UEFA",active:!0,has_outrights:!1},{key:"soccer_fifa_world_cup_winner",group:"Soccer",title:"FIFA World Cup Winner",description:"FIFA World Cup Winner 2026",active:!1,has_outrights:!0},{key:"soccer_finland_veikkausliiga",group:"Soccer",title:"Veikkausliiga - Finland",description:"Finnish  Soccer",active:!1,has_outrights:!1},{key:"soccer_france_ligue_one",group:"Soccer",title:"Ligue 1 - France",description:"French Soccer",active:!1,has_outrights:!1},{key:"soccer_france_ligue_two",group:"Soccer",title:"Ligue 2 - France",description:"French Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_bundesliga",group:"Soccer",title:"Bundesliga - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_bundesliga2",group:"Soccer",title:"Bundesliga 2 - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_liga3",group:"Soccer",title:"3. Liga - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_greece_super_league",group:"Soccer",title:"Super League - Greece",description:"Greek Soccer",active:!1,has_outrights:!1},{key:"soccer_italy_serie_a",group:"Soccer",title:"Serie A - Italy",description:"Italian Soccer",active:!1,has_outrights:!1},{key:"soccer_italy_serie_b",group:"Soccer",title:"Serie B - Italy",description:"Italian Soccer",active:!1,has_outrights:!1},{key:"soccer_japan_j_league",group:"Soccer",title:"J League",description:"Japan Soccer League",active:!1,has_outrights:!1},{key:"soccer_korea_kleague1",group:"Soccer",title:"K League 1",description:"Korean Soccer",active:!1,has_outrights:!1},{key:"soccer_league_of_ireland",group:"Soccer",title:"League of Ireland",description:"Airtricity League Premier Division",active:!1,has_outrights:!1},{key:"soccer_mexico_ligamx",group:"Soccer",title:"Liga MX",description:"Mexican Soccer",active:!1,has_outrights:!1},{key:"soccer_netherlands_eredivisie",group:"Soccer",title:"Dutch Eredivisie",description:"Dutch Soccer",active:!1,has_outrights:!1},{key:"soccer_norway_eliteserien",group:"Soccer",title:"Eliteserien - Norway",description:"Norwegian Soccer",active:!1,has_outrights:!1},{key:"soccer_poland_ekstraklasa",group:"Soccer",title:"Ekstraklasa - Poland",description:"Polish Soccer",active:!1,has_outrights:!1},{key:"soccer_portugal_primeira_liga",group:"Soccer",title:"Primeira Liga - Portugal",description:"Portugese Soccer",active:!1,has_outrights:!1},{key:"soccer_spain_la_liga",group:"Soccer",title:"La Liga - Spain",description:"Spanish Soccer",active:!1,has_outrights:!1},{key:"soccer_spain_segunda_division",group:"Soccer",title:"La Liga 2 - Spain",description:"Spanish Soccer",active:!1,has_outrights:!1},{key:"soccer_spl",group:"Soccer",title:"Premiership - Scotland",description:"Scottish Premiership",active:!1,has_outrights:!1},{key:"soccer_sweden_allsvenskan",group:"Soccer",title:"Allsvenskan - Sweden",description:"Swedish Soccer",active:!1,has_outrights:!1},{key:"soccer_sweden_superettan",group:"Soccer",title:"Superettan - Sweden",description:"Swedish Soccer",active:!1,has_outrights:!1},{key:"soccer_switzerland_superleague",group:"Soccer",title:"Swiss Superleague",description:"Swiss Soccer",active:!1,has_outrights:!1},{key:"soccer_turkey_super_league",group:"Soccer",title:"Turkey Super League",description:"Turkish Soccer",active:!1,has_outrights:!1},{key:"soccer_uefa_champs_league",group:"Soccer",title:"UEFA Champions League",description:"European Champions League",active:!0,has_outrights:!1},{key:"soccer_uefa_europa_conference_league",group:"Soccer",title:"UEFA Europa Conference League",description:"UEFA Europa Conference League",active:!1,has_outrights:!1},{key:"soccer_uefa_europa_league",group:"Soccer",title:"UEFA Europa League",description:"European Europa League",active:!1,has_outrights:!1},{key:"soccer_usa_mls",group:"Soccer",title:"MLS",description:"Major League Soccer",active:!1,has_outrights:!1},{key:"tennis_atp_china_open",group:"Tennis",title:"ATP China Open",description:"Men's Singles",active:!1,has_outrights:!1},{key:"tennis_wta_china_open",group:"Tennis",title:"WTA China Open",description:"Women's Singles",active:!1,has_outrights:!1}];const xu={getMeta(){return{language:[{lang:"Abkhazian",code:"ab",enabled:!1,copy:[["key","value"]]},{lang:"Afar",code:"aa",enabled:!1,copy:[["key","value"]]},{lang:"Afrikaans",code:"af",enabled:!1,copy:[["key","value"]]},{lang:"Akan",code:"ak",enabled:!1,copy:[["key","value"]]},{lang:"Albanian",code:"sq",enabled:!1,copy:[["key","value"]]},{lang:"Amharic",code:"am",enabled:!1,copy:[["key","value"]]},{lang:"Arabic",code:"ar",enabled:!1,copy:[["key","value"]]},{lang:"Aragonese",code:"an",enabled:!1,copy:[["key","value"]]},{lang:"Armenian",code:"hy",enabled:!1,copy:[["key","value"]]},{lang:"Assamese",code:"as",enabled:!1,copy:[["key","value"]]},{lang:"Avaric",code:"av",enabled:!1,copy:[["key","value"]]},{lang:"Avestan",code:"ae",enabled:!1,copy:[["key","value"]]},{lang:"Aymara",code:"ay",enabled:!1,copy:[["key","value"]]},{lang:"Azerbaijani",code:"az",enabled:!1,copy:[["key","value"]]},{lang:"Bambara",code:"bm",enabled:!1,copy:[["key","value"]]},{lang:"Bashkir",code:"ba",enabled:!1,copy:[["key","value"]]},{lang:"Basque",code:"eu",enabled:!1,copy:[["key","value"]]},{lang:"Belarusian",code:"be",enabled:!1,copy:[["key","value"]]},{lang:"Bengali (Bangla)",code:"bn",enabled:!1,copy:[["key","value"]]},{lang:"Bihari",code:"bh",enabled:!1,copy:[["key","value"]]},{lang:"Bislama",code:"bi",enabled:!1,copy:[["key","value"]]},{lang:"Bosnian",code:"bs",enabled:!1,copy:[["key","value"]]},{lang:"Breton",code:"br",enabled:!1,copy:[["key","value"]]},{lang:"Bulgarian",code:"bg",enabled:!1,copy:[["key","value"]]},{lang:"Burmese",code:"my",enabled:!1,copy:[["key","value"]]},{lang:"Catalan",code:"ca",enabled:!1,copy:[["key","value"]]},{lang:"Chamorro",code:"ch",enabled:!1,copy:[["key","value"]]},{lang:"Chechen",code:"ce",enabled:!1,copy:[["key","value"]]},{lang:"Chichewa, Chewa, Nyanja",code:"ny",enabled:!1,copy:[["key","value"]]},{lang:"Chinese",code:"zh",enabled:!1,copy:[["key","value"]]},{lang:"Chinese (Simplified)",code:"zh-Hans",enabled:!1,copy:[["welcome_back","欢迎回来"],["please_enter_your_details","请输入您的详细信息"],["email","电子邮件"],["enter_your_email","输入您的电子邮件"],["password","密码"],["enter_your_password","输入您的密码"],["enter_email_and_password","输入邮箱和密码"],["sign_in","登入"],["forgot_password","忘记密码"],["dont_have_an_account","沒有帳戶？"],["sign_up","报名"],["please_enter_your_details_to_get_started","请输入您的详细信息以开始"],["already_have_an_account","已有账户？"],["log_in","登录"],["name","姓名"],["enter_your_name","输入您的姓名"]]},{lang:"Chinese (Traditional)",code:"zh-Hant",enabled:!1,copy:[["key","value"]]},{lang:"Chuvash",code:"cv",enabled:!1,copy:[["key","value"]]},{lang:"Cornish",code:"kw",enabled:!1,copy:[["key","value"]]},{lang:"Corsican",code:"co",enabled:!1,copy:[["key","value"]]},{lang:"Cree",code:"cr",enabled:!1,copy:[["key","value"]]},{lang:"Croatian",code:"hr",enabled:!1,copy:[["key","value"]]},{lang:"Czech",code:"cs",enabled:!1,copy:[["key","value"]]},{lang:"Danish",code:"da",enabled:!1,copy:[["key","value"]]},{lang:"Divehi, Dhivehi, Maldivian",code:"dv",enabled:!1,copy:[["key","value"]]},{lang:"Dutch",code:"nl",enabled:!1,copy:[["key","value"]]},{lang:"Dzongkha",code:"dz",enabled:!1,copy:[["key","value"]]},{lang:"English",code:"en",enabled:!0,copy:[["welcome_back","Welcome Back"],["please_enter_your_details","Please Enter your Details"],["email","Email"],["enter_your_email","Enter your email"],["password","Password"],["enter_your_password","Enter your password"],["enter_email_and_password","Enter Email and Password"],["sign_in","Sign in"],["forgot_password","Forgot Password"],["dont_have_an_account","Don't have an account?"],["sign_up","Sign up"],["please_enter_your_details_to_get_started","Please enter your details to get started"],["already_have_an_account","Already have an account?"],["log_in","Sign in"],["name","Name"],["enter_your_name","Enter your name"]]},{lang:"Esperanto",code:"eo",enabled:!1,copy:[["key","value"]]},{lang:"Estonian",code:"et",enabled:!1,copy:[["key","value"]]},{lang:"Ewe",code:"ee",enabled:!1,copy:[["key","value"]]},{lang:"Faroese",code:"fo",enabled:!1,copy:[["key","value"]]},{lang:"Fijian",code:"fj",enabled:!1,copy:[["key","value"]]},{lang:"Finnish",code:"fi",enabled:!1,copy:[["key","value"]]},{lang:"French",code:"fr",enabled:!1,copy:[["key","value"]]},{lang:"Fula, Fulah, Pulaar, Pular",code:"ff",enabled:!1,copy:[["key","value"]]},{lang:"Galician",code:"gl",enabled:!1,copy:[["key","value"]]},{lang:"Gaelic (Scottish)",code:"gd",enabled:!1,copy:[["key","value"]]},{lang:"Gaelic (Manx)",code:"gv",enabled:!1,copy:[["key","value"]]},{lang:"Georgian",code:"ka",enabled:!1,copy:[["key","value"]]},{lang:"German",code:"de",enabled:!1,copy:[["key","value"]]},{lang:"Greek",code:"el",enabled:!1,copy:[["key","value"]]},{lang:"Greenlandic",code:"kl",enabled:!1,copy:[["key","value"]]},{lang:"Guarani",code:"gn",enabled:!1,copy:[["key","value"]]},{lang:"Gujarati",code:"gu",enabled:!1,copy:[["key","value"]]},{lang:"Haitian Creole",code:"ht",enabled:!1,copy:[["key","value"]]},{lang:"Hausa",code:"ha",enabled:!1,copy:[["key","value"]]},{lang:"Hebrew",code:"he",enabled:!1,copy:[["key","value"]]},{lang:"Herero",code:"hz",enabled:!1,copy:[["key","value"]]},{lang:"Hindi",code:"hi",enabled:!1,copy:[["key","value"]]},{lang:"Hiri Motu",code:"ho",enabled:!1,copy:[["key","value"]]},{lang:"Hungarian",code:"hu",enabled:!1,copy:[["key","value"]]},{lang:"Icelandic",code:"is",enabled:!1,copy:[["key","value"]]},{lang:"Ido",code:"io",enabled:!1,copy:[["key","value"]]},{lang:"Igbo",code:"ig",enabled:!1,copy:[["key","value"]]},{lang:"Indonesian",code:"id, in",enabled:!1,copy:[["key","value"]]},{lang:"Interlingua",code:"ia",enabled:!1,copy:[["key","value"]]},{lang:"Interlingue",code:"ie",enabled:!1,copy:[["key","value"]]},{lang:"Inuktitut",code:"iu",enabled:!1,copy:[["key","value"]]},{lang:"Inupiak",code:"ik",enabled:!1,copy:[["key","value"]]},{lang:"Irish",code:"ga",enabled:!1,copy:[["key","value"]]},{lang:"Italian",code:"it",enabled:!0,copy:[["welcome_back","Bentornato"],["please_enter_your_details","Per favore, inserisci i tuoi dati"],["email","E-mail"],["enter_your_email","Inserisci la tua email"],["password","Password"],["enter_your_password","Inserisci la tua password"],["enter_email_and_password","Inserisci email e password"],["sign_in","Registrazione"],["forgot_password","Ha dimenticato la password"],["dont_have_an_account","Non hai un account?"],["sign_up","Iscrizione"],["please_enter_your_details_to_get_started","Inserisci i tuoi dati per iniziare"],["already_have_an_account","Hai già un account?"],["log_in","Login"],["name","Nome"],["enter_your_name","Inserisci il tuo nome"]]},{lang:"Japanese",code:"ja",enabled:!1,copy:[["key","value"]]},{lang:"Javanese",code:"jv",enabled:!1,copy:[["key","value"]]},{lang:"Kalaallisut, Greenlandic",code:"kl",enabled:!1,copy:[["key","value"]]},{lang:"Kannada",code:"kn",enabled:!1,copy:[["key","value"]]},{lang:"Kanuri",code:"kr",enabled:!1,copy:[["key","value"]]},{lang:"Kashmiri",code:"ks",enabled:!1,copy:[["key","value"]]},{lang:"Kazakh",code:"kk",enabled:!1,copy:[["key","value"]]},{lang:"Khmer",code:"km",enabled:!1,copy:[["key","value"]]},{lang:"Kikuyu",code:"ki",enabled:!1,copy:[["key","value"]]},{lang:"Kinyarwanda (Rwanda)",code:"rw",enabled:!1,copy:[["key","value"]]},{lang:"Kirundi",code:"rn",enabled:!1,copy:[["key","value"]]},{lang:"Kyrgyz",code:"ky",enabled:!1,copy:[["key","value"]]},{lang:"Komi",code:"kv",enabled:!1,copy:[["key","value"]]},{lang:"Kongo",code:"kg",enabled:!1,copy:[["key","value"]]},{lang:"Korean",code:"ko",enabled:!1,copy:[["key","value"]]},{lang:"Kurdish",code:"ku",enabled:!1,copy:[["key","value"]]},{lang:"Kwanyama",code:"kj",enabled:!1,copy:[["key","value"]]},{lang:"Lao",code:"lo",enabled:!1,copy:[["key","value"]]},{lang:"Latin",code:"la",enabled:!0,copy:[["key","value"]]},{lang:"Latvian (Lettish)",code:"lv",enabled:!1,copy:[["key","value"]]},{lang:"Limburgish ( Limburger)",code:"li",enabled:!1,copy:[["key","value"]]},{lang:"Lingala",code:"ln",enabled:!1,copy:[["key","value"]]},{lang:"Lithuanian",code:"lt",enabled:!1,copy:[["key","value"]]},{lang:"Luga-Katanga",code:"lu",enabled:!1,copy:[["key","value"]]},{lang:"Luganda, Ganda",code:"lg",enabled:!1,copy:[["key","value"]]},{lang:"Luxembourgish",code:"lb",enabled:!1,copy:[["key","value"]]},{lang:"Manx",code:"gv",enabled:!1,copy:[["key","value"]]},{lang:"Macedonian",code:"mk",enabled:!1,copy:[["key","value"]]},{lang:"Malagasy",code:"mg",enabled:!1,copy:[["key","value"]]},{lang:"Malay",code:"ms",enabled:!1,copy:[["key","value"]]},{lang:"Malayalam",code:"ml",enabled:!1,copy:[["key","value"]]},{lang:"Maltese",code:"mt",enabled:!1,copy:[["key","value"]]},{lang:"Maori",code:"mi",enabled:!1,copy:[["key","value"]]},{lang:"Marathi",code:"mr",enabled:!1,copy:[["key","value"]]},{lang:"Marshallese",code:"mh",enabled:!1,copy:[["key","value"]]},{lang:"Moldavian",code:"mo",enabled:!1,copy:[["key","value"]]},{lang:"Mongolian",code:"mn",enabled:!1,copy:[["key","value"]]},{lang:"Nauru",code:"na",enabled:!1,copy:[["key","value"]]},{lang:"Navajo",code:"nv",enabled:!1,copy:[["key","value"]]},{lang:"Ndonga",code:"ng",enabled:!1,copy:[["key","value"]]},{lang:"Northern Ndebele",code:"nd",enabled:!1,copy:[["key","value"]]},{lang:"Nepali",code:"ne",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian",code:"no",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian bokmål",code:"nb",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian nynorsk",code:"nn",enabled:!1,copy:[["key","value"]]},{lang:"Nuosu",code:"ii",enabled:!1,copy:[["key","value"]]},{lang:"Occitan",code:"oc",enabled:!1,copy:[["key","value"]]},{lang:"Ojibwe",code:"oj",enabled:!1,copy:[["key","value"]]},{lang:"Old Church Slavonic, Old Bulgarian",code:"cu",enabled:!1,copy:[["key","value"]]},{lang:"Oriya",code:"or",enabled:!1,copy:[["key","value"]]},{lang:"Oromo (Afaan Oromo)",code:"om",enabled:!1,copy:[["key","value"]]},{lang:"Ossetian",code:"os",enabled:!1,copy:[["key","value"]]},{lang:"Pāli",code:"pi",enabled:!1,copy:[["key","value"]]},{lang:"Pashto, Pushto",code:"ps",enabled:!1,copy:[["key","value"]]},{lang:"Persian (Farsi)",code:"fa",enabled:!1,copy:[["key","value"]]},{lang:"Polish",code:"pl",enabled:!1,copy:[["key","value"]]},{lang:"Portuguese",code:"pt",enabled:!1,copy:[["key","value"]]},{lang:"Punjabi (Eastern)",code:"pa",enabled:!1,copy:[["key","value"]]},{lang:"Quechua",code:"qu",enabled:!1,copy:[["key","value"]]},{lang:"Romansh",code:"rm",enabled:!1,copy:[["key","value"]]},{lang:"Romanian",code:"ro",enabled:!1,copy:[["key","value"]]},{lang:"Russian",code:"ru",enabled:!1,copy:[["key","value"]]},{lang:"Sami",code:"se",enabled:!1,copy:[["key","value"]]},{lang:"Samoan",code:"sm",enabled:!1,copy:[["key","value"]]},{lang:"Sango",code:"sg",enabled:!1,copy:[["key","value"]]},{lang:"Sanskrit",code:"sa",enabled:!1,copy:[["key","value"]]},{lang:"Serbian",code:"sr",enabled:!1,copy:[["key","value"]]},{lang:"Serbo-Croatian",code:"sh",enabled:!1,copy:[["key","value"]]},{lang:"Sesotho",code:"st",enabled:!1,copy:[["key","value"]]},{lang:"Setswana",code:"tn",enabled:!1,copy:[["key","value"]]},{lang:"Shona",code:"sn",enabled:!1,copy:[["key","value"]]},{lang:"Sichuan Yi",code:"ii",enabled:!1,copy:[["key","value"]]},{lang:"Sindhi",code:"sd",enabled:!1,copy:[["key","value"]]},{lang:"Sinhalese",code:"si",enabled:!1,copy:[["key","value"]]},{lang:"Siswati",code:"ss",enabled:!1,copy:[["key","value"]]},{lang:"Slovak",code:"sk",enabled:!1,copy:[["key","value"]]},{lang:"Slovenian",code:"sl",enabled:!1,copy:[["key","value"]]},{lang:"Somali",code:"so",enabled:!1,copy:[["key","value"]]},{lang:"Southern Ndebele",code:"nr",enabled:!1,copy:[["key","value"]]},{lang:"Spanish",code:"es",enabled:!1,copy:[["key","value"]]},{lang:"Sundanese",code:"su",enabled:!1,copy:[["key","value"]]},{lang:"Swahili (Kiswahili)",code:"sw",enabled:!1,copy:[["key","value"]]},{lang:"Swati",code:"ss",enabled:!1,copy:[["key","value"]]},{lang:"Swedish",code:"sv",enabled:!1,copy:[["key","value"]]},{lang:"Tagalog",code:"tl",enabled:!1,copy:[["key","value"]]},{lang:"Tahitian",code:"ty",enabled:!1,copy:[["key","value"]]},{lang:"Tajik",code:"tg",enabled:!1,copy:[["key","value"]]},{lang:"Tamil",code:"ta",enabled:!1,copy:[["key","value"]]},{lang:"Tatar",code:"tt",enabled:!1,copy:[["key","value"]]},{lang:"Telugu",code:"te",enabled:!1,copy:[["key","value"]]},{lang:"Thai",code:"th",enabled:!1,copy:[["key","value"]]},{lang:"Tibetan",code:"bo",enabled:!1,copy:[["key","value"]]},{lang:"Tigrinya",code:"ti",enabled:!1,copy:[["key","value"]]},{lang:"Tonga",code:"to",enabled:!1,copy:[["key","value"]]},{lang:"Tsonga",code:"ts",enabled:!1,copy:[["key","value"]]},{lang:"Turkish",code:"tr",enabled:!1,copy:[["key","value"]]},{lang:"Turkmen",code:"tk",enabled:!1,copy:[["key","value"]]},{lang:"Twi",code:"tw",enabled:!1,copy:[["key","value"]]},{lang:"Uyghur",code:"ug",enabled:!1,copy:[["key","value"]]},{lang:"Ukrainian",code:"uk",enabled:!1,copy:[["key","value"]]},{lang:"Urdu",code:"ur",enabled:!1,copy:[["key","value"]]},{lang:"Uzbek",code:"uz",enabled:!1,copy:[["key","value"]]},{lang:"Venda",code:"ve",enabled:!1,copy:[["key","value"]]},{lang:"Vietnamese",code:"vi",enabled:!1,copy:[["key","value"]]},{lang:"Volapük",code:"vo",enabled:!1,copy:[["key","value"]]},{lang:"Wallon",code:"wa",enabled:!1,copy:[["key","value"]]},{lang:"Welsh",code:"cy",enabled:!1,copy:[["key","value"]]},{lang:"Wolof",code:"wo",enabled:!1,copy:[["key","value"]]},{lang:"Western Frisian",code:"fy",enabled:!1,copy:[["key","value"]]},{lang:"Xhosa",code:"xh",enabled:!1,copy:[["key","value"]]},{lang:"Yiddish",code:"yi, ji",enabled:!1,copy:[["key","value"]]},{lang:"Yoruba",code:"yo",enabled:!1,copy:[["key","value"]]},{lang:"Zhuang, Chuang",code:"za",enabled:!1,copy:[["key","value"]]},{lang:"Zulu",code:"zu",enabled:!1,copy:[["key","value"]]}]}}};function Ht(e){return new Promise((t,n)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>n(e.error)})}function Cu(e,t){let n;const a=()=>{if(n)return n;const s=indexedDB.open(e);return s.onupgradeneeded=()=>s.result.createObjectStore(t),n=Ht(s),n.then(r=>{r.onclose=()=>n=void 0},()=>{}),n};return(s,r)=>a().then(o=>r(o.transaction(t,s).objectStore(t)))}let qa;function Gn(){return qa||(qa=Cu("keyval-store","keyval")),qa}function Ru(e,t=Gn()){return t("readonly",n=>Ht(n.get(e)))}function jr(e,t,n=Gn()){return n("readwrite",a=>(a.put(t,e),Ht(a.transaction)))}function Wa(e,t=Gn()){return t("readwrite",n=>(n.delete(e),Ht(n.transaction)))}function xi(e,t){return e.openCursor().onsuccess=function(){this.result&&(t(this.result),this.result.continue())},Ht(e.transaction)}function ln(e=Gn()){return e("readonly",t=>{if(t.getAllKeys)return Ht(t.getAllKeys());const n=[];return xi(t,a=>n.push(a.key)).then(()=>n)})}function Nu(e=Gn()){return e("readonly",t=>{if(t.getAll&&t.getAllKeys)return Promise.all([Ht(t.getAllKeys()),Ht(t.getAll())]).then(([a,s])=>a.map((r,o)=>[r,s[o]]));const n=[];return e("readonly",a=>xi(a,s=>n.push([s.key,s.value])).then(()=>n))})}const bn=e=>e!==null&&Object.prototype.toString.call(e)==="[object Object]",ua=(e,t)=>{if(e===t)return!0;if(typeof e!=typeof t)return!1;if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n+=1)if(!ua(e[n],t[n]))return!1;return!0}if(bn(e)&&bn(t)){const n=Object.entries(e),a=new Set(Object.keys(t));if(n.length!==a.size)return!1;for(const[s,r]of n){if(!ua(r,t[s]))return!1;a.delete(s)}return a.size===0}return!1},zn=e=>{if(e===""||e===!1||e===null||e===void 0||Array.isArray(e)&&e.length===0)return!0;if(bn(e)){for(const t in e)if(e.hasOwnProperty(t))return!1;return!0}return!1},Lu=e=>e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="_",Gr=e=>e>="0"&&e<="9"||e==="-",Du=e=>e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="_";var O;(function(e){e.TOK_EOF="EOF",e.TOK_UNQUOTEDIDENTIFIER="UnquotedIdentifier",e.TOK_QUOTEDIDENTIFIER="QuotedIdentifier",e.TOK_RBRACKET="Rbracket",e.TOK_RPAREN="Rparen",e.TOK_COMMA="Comma",e.TOK_COLON="Colon",e.TOK_RBRACE="Rbrace",e.TOK_NUMBER="Number",e.TOK_CURRENT="Current",e.TOK_ROOT="Root",e.TOK_EXPREF="Expref",e.TOK_PIPE="Pipe",e.TOK_OR="Or",e.TOK_AND="And",e.TOK_EQ="EQ",e.TOK_GT="GT",e.TOK_LT="LT",e.TOK_GTE="GTE",e.TOK_LTE="LTE",e.TOK_NE="NE",e.TOK_FLATTEN="Flatten",e.TOK_STAR="Star",e.TOK_FILTER="Filter",e.TOK_DOT="Dot",e.TOK_NOT="Not",e.TOK_LBRACE="Lbrace",e.TOK_LBRACKET="Lbracket",e.TOK_LPAREN="Lparen",e.TOK_LITERAL="Literal"})(O||(O={}));const qr={"(":O.TOK_LPAREN,")":O.TOK_RPAREN,"*":O.TOK_STAR,",":O.TOK_COMMA,".":O.TOK_DOT,":":O.TOK_COLON,"@":O.TOK_CURRENT,$:O.TOK_ROOT,"]":O.TOK_RBRACKET,"{":O.TOK_LBRACE,"}":O.TOK_RBRACE},Iu={"!":!0,"<":!0,"=":!0,">":!0},Mu={"	":!0,"\n":!0,"\r":!0," ":!0};class Bu{constructor(){this._current=0}tokenize(t){const n=[];this._current=0;let a,s,r;for(;this._current<t.length;)if(Lu(t[this._current]))a=this._current,s=this.consumeUnquotedIdentifier(t),n.push({start:a,type:O.TOK_UNQUOTEDIDENTIFIER,value:s});else if(qr[t[this._current]]!==void 0)n.push({start:this._current,type:qr[t[this._current]],value:t[this._current]}),this._current+=1;else if(Gr(t[this._current]))r=this.consumeNumber(t),n.push(r);else if(t[this._current]==="[")r=this.consumeLBracket(t),n.push(r);else if(t[this._current]==='"')a=this._current,s=this.consumeQuotedIdentifier(t),n.push({start:a,type:O.TOK_QUOTEDIDENTIFIER,value:s});else if(t[this._current]==="'")a=this._current,s=this.consumeRawStringLiteral(t),n.push({start:a,type:O.TOK_LITERAL,value:s});else if(t[this._current]==="`"){a=this._current;const o=this.consumeLiteral(t);n.push({start:a,type:O.TOK_LITERAL,value:o})}else if(Iu[t[this._current]]!==void 0)r=this.consumeOperator(t),r&&n.push(r);else if(Mu[t[this._current]]!==void 0)this._current+=1;else if(t[this._current]==="&")a=this._current,this._current+=1,t[this._current]==="&"?(this._current+=1,n.push({start:a,type:O.TOK_AND,value:"&&"})):n.push({start:a,type:O.TOK_EXPREF,value:"&"});else if(t[this._current]==="|")a=this._current,this._current+=1,t[this._current]==="|"?(this._current+=1,n.push({start:a,type:O.TOK_OR,value:"||"})):n.push({start:a,type:O.TOK_PIPE,value:"|"});else{const o=new Error(`Unknown character: ${t[this._current]}`);throw o.name="LexerError",o}return n}consumeUnquotedIdentifier(t){const n=this._current;for(this._current+=1;this._current<t.length&&Du(t[this._current]);)this._current+=1;return t.slice(n,this._current)}consumeQuotedIdentifier(t){const n=this._current;this._current+=1;const a=t.length;for(;t[this._current]!=='"'&&this._current<a;){let s=this._current;t[s]==="\\"&&(t[s+1]==="\\"||t[s+1]==='"')?s+=2:s+=1,this._current=s}return this._current+=1,JSON.parse(t.slice(n,this._current))}consumeRawStringLiteral(t){const n=this._current;this._current+=1;const a=t.length;for(;t[this._current]!=="'"&&this._current<a;){let r=this._current;t[r]==="\\"&&(t[r+1]==="\\"||t[r+1]==="'")?r+=2:r+=1,this._current=r}return this._current+=1,t.slice(n+1,this._current-1).replace("\\'","'")}consumeNumber(t){const n=this._current;this._current+=1;const a=t.length;for(;Gr(t[this._current])&&this._current<a;)this._current+=1;const s=parseInt(t.slice(n,this._current),10);return{start:n,value:s,type:O.TOK_NUMBER}}consumeLBracket(t){const n=this._current;return this._current+=1,t[this._current]==="?"?(this._current+=1,{start:n,type:O.TOK_FILTER,value:"[?"}):t[this._current]==="]"?(this._current+=1,{start:n,type:O.TOK_FLATTEN,value:"[]"}):{start:n,type:O.TOK_LBRACKET,value:"["}}consumeOperator(t){const n=this._current,a=t[n];if(this._current+=1,a==="!")return t[this._current]==="="?(this._current+=1,{start:n,type:O.TOK_NE,value:"!="}):{start:n,type:O.TOK_NOT,value:"!"};if(a==="<")return t[this._current]==="="?(this._current+=1,{start:n,type:O.TOK_LTE,value:"<="}):{start:n,type:O.TOK_LT,value:"<"};if(a===">")return t[this._current]==="="?(this._current+=1,{start:n,type:O.TOK_GTE,value:">="}):{start:n,type:O.TOK_GT,value:">"};if(a==="="&&t[this._current]==="=")return this._current+=1,{start:n,type:O.TOK_EQ,value:"=="}}consumeLiteral(t){this._current+=1;const n=this._current,a=t.length;for(;t[this._current]!=="`"&&this._current<a;){let o=this._current;t[o]==="\\"&&(t[o+1]==="\\"||t[o+1]==="`")?o+=2:o+=1,this._current=o}let s=t.slice(n,this._current).trimLeft();s=s.replace("\\`","`");const r=this.looksLikeJSON(s)?JSON.parse(s):JSON.parse(`"${s}"`);return this._current+=1,r}looksLikeJSON(t){const a=["true","false","null"],s="-0123456789";if(t==="")return!1;if('[{"'.includes(t[0])||a.includes(t))return!0;if(s.includes(t[0]))try{return JSON.parse(t),!0}catch{return!1}return!1}}const Ci=new Bu,xe={[O.TOK_EOF]:0,[O.TOK_UNQUOTEDIDENTIFIER]:0,[O.TOK_QUOTEDIDENTIFIER]:0,[O.TOK_RBRACKET]:0,[O.TOK_RPAREN]:0,[O.TOK_COMMA]:0,[O.TOK_RBRACE]:0,[O.TOK_NUMBER]:0,[O.TOK_CURRENT]:0,[O.TOK_EXPREF]:0,[O.TOK_ROOT]:0,[O.TOK_PIPE]:1,[O.TOK_OR]:2,[O.TOK_AND]:3,[O.TOK_EQ]:5,[O.TOK_GT]:5,[O.TOK_LT]:5,[O.TOK_GTE]:5,[O.TOK_LTE]:5,[O.TOK_NE]:5,[O.TOK_FLATTEN]:9,[O.TOK_STAR]:20,[O.TOK_FILTER]:21,[O.TOK_DOT]:40,[O.TOK_NOT]:45,[O.TOK_LBRACE]:50,[O.TOK_LBRACKET]:55,[O.TOK_LPAREN]:60};class Fu{constructor(){this.index=0,this.tokens=[]}parse(t){this.loadTokens(t),this.index=0;const n=this.expression(0);if(this.lookahead(0)!==O.TOK_EOF){const a=this.lookaheadToken(0);this.errorToken(a,`Unexpected token type: ${a.type}, value: ${a.value}`)}return n}loadTokens(t){this.tokens=[...Ci.tokenize(t),{type:O.TOK_EOF,value:"",start:t.length}]}expression(t){const n=this.lookaheadToken(0);this.advance();let a=this.nud(n),s=this.lookahead(0);for(;t<xe[s];)this.advance(),a=this.led(s,a),s=this.lookahead(0);return a}lookahead(t){return this.tokens[this.index+t].type}lookaheadToken(t){return this.tokens[this.index+t]}advance(){this.index+=1}nud(t){let n,a,s;switch(t.type){case O.TOK_LITERAL:return{type:"Literal",value:t.value};case O.TOK_UNQUOTEDIDENTIFIER:return{type:"Field",name:t.value};case O.TOK_QUOTEDIDENTIFIER:const r={type:"Field",name:t.value};if(this.lookahead(0)===O.TOK_LPAREN)throw new Error("Quoted identifier not allowed for function names.");return r;case O.TOK_NOT:return a=this.expression(xe.Not),{type:"NotExpression",children:[a]};case O.TOK_STAR:return n={type:"Identity"},a=this.lookahead(0)===O.TOK_RBRACKET&&{type:"Identity"}||this.parseProjectionRHS(xe.Star),{type:"ValueProjection",children:[n,a]};case O.TOK_FILTER:return this.led(t.type,{type:"Identity"});case O.TOK_LBRACE:return this.parseMultiselectHash();case O.TOK_FLATTEN:return n={type:O.TOK_FLATTEN,children:[{type:"Identity"}]},a=this.parseProjectionRHS(xe.Flatten),{type:"Projection",children:[n,a]};case O.TOK_LBRACKET:return this.lookahead(0)===O.TOK_NUMBER||this.lookahead(0)===O.TOK_COLON?(a=this.parseIndexExpression(),this.projectIfSlice({type:"Identity"},a)):this.lookahead(0)===O.TOK_STAR&&this.lookahead(1)===O.TOK_RBRACKET?(this.advance(),this.advance(),a=this.parseProjectionRHS(xe.Star),{children:[{type:"Identity"},a],type:"Projection"}):this.parseMultiselectList();case O.TOK_CURRENT:return{type:O.TOK_CURRENT};case O.TOK_ROOT:return{type:O.TOK_ROOT};case O.TOK_EXPREF:return s=this.expression(xe.Expref),{type:"ExpressionReference",children:[s]};case O.TOK_LPAREN:const o=[];for(;this.lookahead(0)!==O.TOK_RPAREN;)this.lookahead(0)===O.TOK_CURRENT?(s={type:O.TOK_CURRENT},this.advance()):s=this.expression(0),o.push(s);return this.match(O.TOK_RPAREN),o[0];default:this.errorToken(t)}}led(t,n){let a;switch(t){case O.TOK_DOT:const s=xe.Dot;return this.lookahead(0)!==O.TOK_STAR?(a=this.parseDotRHS(s),{type:"Subexpression",children:[n,a]}):(this.advance(),a=this.parseProjectionRHS(s),{type:"ValueProjection",children:[n,a]});case O.TOK_PIPE:return a=this.expression(xe.Pipe),{type:O.TOK_PIPE,children:[n,a]};case O.TOK_OR:return a=this.expression(xe.Or),{type:"OrExpression",children:[n,a]};case O.TOK_AND:return a=this.expression(xe.And),{type:"AndExpression",children:[n,a]};case O.TOK_LPAREN:const r=n.name,o=[];let i;for(;this.lookahead(0)!==O.TOK_RPAREN;)this.lookahead(0)===O.TOK_CURRENT?(i={type:O.TOK_CURRENT},this.advance()):i=this.expression(0),this.lookahead(0)===O.TOK_COMMA&&this.match(O.TOK_COMMA),o.push(i);return this.match(O.TOK_RPAREN),{name:r,type:"Function",children:o};case O.TOK_FILTER:const u=this.expression(0);return this.match(O.TOK_RBRACKET),a=this.lookahead(0)===O.TOK_FLATTEN&&{type:"Identity"}||this.parseProjectionRHS(xe.Filter),{type:"FilterProjection",children:[n,a,u]};case O.TOK_FLATTEN:const d={type:O.TOK_FLATTEN,children:[n]},f=this.parseProjectionRHS(xe.Flatten);return{type:"Projection",children:[d,f]};case O.TOK_EQ:case O.TOK_NE:case O.TOK_GT:case O.TOK_GTE:case O.TOK_LT:case O.TOK_LTE:return this.parseComparator(n,t);case O.TOK_LBRACKET:const m=this.lookaheadToken(0);return m.type===O.TOK_NUMBER||m.type===O.TOK_COLON?(a=this.parseIndexExpression(),this.projectIfSlice(n,a)):(this.match(O.TOK_STAR),this.match(O.TOK_RBRACKET),a=this.parseProjectionRHS(xe.Star),{type:"Projection",children:[n,a]});default:return this.errorToken(this.lookaheadToken(0))}}match(t){if(this.lookahead(0)===t){this.advance();return}else{const n=this.lookaheadToken(0);this.errorToken(n,`Expected ${t}, got: ${n.type}`)}}errorToken(t,n=""){const a=new Error(n||`Invalid token (${t.type}): "${t.value}"`);throw a.name="ParserError",a}parseIndexExpression(){if(this.lookahead(0)===O.TOK_COLON||this.lookahead(1)===O.TOK_COLON)return this.parseSliceExpression();const t={type:"Index",value:this.lookaheadToken(0).value};return this.advance(),this.match(O.TOK_RBRACKET),t}projectIfSlice(t,n){const a={type:"IndexExpression",children:[t,n]};return n.type==="Slice"?{children:[a,this.parseProjectionRHS(xe.Star)],type:"Projection"}:a}parseSliceExpression(){const t=[null,null,null];let n=0,a=this.lookahead(0);for(;a!==O.TOK_RBRACKET&&n<3;){if(a===O.TOK_COLON)n+=1,this.advance();else if(a===O.TOK_NUMBER)t[n]=this.lookaheadToken(0).value,this.advance();else{const s=this.lookaheadToken(0);this.errorToken(s,`Syntax error, unexpected token: ${s.value}(${s.type})`)}a=this.lookahead(0)}return this.match(O.TOK_RBRACKET),{children:t,type:"Slice"}}parseComparator(t,n){const a=this.expression(xe[n]);return{type:"Comparator",name:n,children:[t,a]}}parseDotRHS(t){const n=this.lookahead(0);if([O.TOK_UNQUOTEDIDENTIFIER,O.TOK_QUOTEDIDENTIFIER,O.TOK_STAR].includes(n))return this.expression(t);if(n===O.TOK_LBRACKET)return this.match(O.TOK_LBRACKET),this.parseMultiselectList();if(n===O.TOK_LBRACE)return this.match(O.TOK_LBRACE),this.parseMultiselectHash();const s=this.lookaheadToken(0);this.errorToken(s,`Syntax error, unexpected token: ${s.value}(${s.type})`)}parseProjectionRHS(t){if(xe[this.lookahead(0)]<10)return{type:"Identity"};if(this.lookahead(0)===O.TOK_LBRACKET)return this.expression(t);if(this.lookahead(0)===O.TOK_FILTER)return this.expression(t);if(this.lookahead(0)===O.TOK_DOT)return this.match(O.TOK_DOT),this.parseDotRHS(t);const n=this.lookaheadToken(0);this.errorToken(n,`Syntax error, unexpected token: ${n.value}(${n.type})`)}parseMultiselectList(){const t=[];for(;this.lookahead(0)!==O.TOK_RBRACKET;){const n=this.expression(0);if(t.push(n),this.lookahead(0)===O.TOK_COMMA&&(this.match(O.TOK_COMMA),this.lookahead(0)===O.TOK_RBRACKET))throw new Error("Unexpected token Rbracket")}return this.match(O.TOK_RBRACKET),{type:"MultiSelectList",children:t}}parseMultiselectHash(){const t=[],n=[O.TOK_UNQUOTEDIDENTIFIER,O.TOK_QUOTEDIDENTIFIER];let a,s,r;for(;;){if(a=this.lookaheadToken(0),!n.includes(a.type))throw new Error(`Expecting an identifier token, got: ${a.type}`);if(s=a.value,this.advance(),this.match(O.TOK_COLON),r=this.expression(0),t.push({value:r,type:"KeyValuePair",name:s}),this.lookahead(0)===O.TOK_COMMA)this.match(O.TOK_COMMA);else if(this.lookahead(0)===O.TOK_RBRACE){this.match(O.TOK_RBRACE);break}}return{type:"MultiSelectHash",children:t}}}const Ri=new Fu;var B;(function(e){e[e.TYPE_NUMBER=0]="TYPE_NUMBER",e[e.TYPE_ANY=1]="TYPE_ANY",e[e.TYPE_STRING=2]="TYPE_STRING",e[e.TYPE_ARRAY=3]="TYPE_ARRAY",e[e.TYPE_OBJECT=4]="TYPE_OBJECT",e[e.TYPE_BOOLEAN=5]="TYPE_BOOLEAN",e[e.TYPE_EXPREF=6]="TYPE_EXPREF",e[e.TYPE_NULL=7]="TYPE_NULL",e[e.TYPE_ARRAY_NUMBER=8]="TYPE_ARRAY_NUMBER",e[e.TYPE_ARRAY_STRING=9]="TYPE_ARRAY_STRING"})(B||(B={}));class $u{constructor(t){this.TYPE_NAME_TABLE={[B.TYPE_NUMBER]:"number",[B.TYPE_ANY]:"any",[B.TYPE_STRING]:"string",[B.TYPE_ARRAY]:"array",[B.TYPE_OBJECT]:"object",[B.TYPE_BOOLEAN]:"boolean",[B.TYPE_EXPREF]:"expression",[B.TYPE_NULL]:"null",[B.TYPE_ARRAY_NUMBER]:"Array<number>",[B.TYPE_ARRAY_STRING]:"Array<string>"},this.functionAbs=([n])=>Math.abs(n),this.functionAvg=([n])=>{let a=0;for(let s=0;s<n.length;s+=1)a+=n[s];return a/n.length},this.functionCeil=([n])=>Math.ceil(n),this.functionContains=n=>{const[a,s]=n;return a.includes(s)},this.functionEndsWith=n=>{const[a,s]=n;return a.includes(s,a.length-s.length)},this.functionFloor=([n])=>Math.floor(n),this.functionJoin=n=>{const[a,s]=n;return s.join(a)},this.functionKeys=([n])=>Object.keys(n),this.functionLength=([n])=>bn(n)?Object.keys(n).length:n.length,this.functionMap=n=>{if(!this._interpreter)return[];const a=[],s=this._interpreter,r=n[0],o=n[1];for(let i=0;i<o.length;i+=1)a.push(s.visit(r,o[i]));return a},this.functionMax=([n])=>{if(!n.length)return null;if(this.getTypeName(n[0])===B.TYPE_NUMBER)return Math.max(...n);const s=n;let r=s[0];for(let o=1;o<s.length;o+=1)r.localeCompare(s[o])<0&&(r=s[o]);return r},this.functionMaxBy=n=>{const a=n[1],s=n[0],r=this.createKeyFunction(a,[B.TYPE_NUMBER,B.TYPE_STRING]);let o=-1/0,i,l;for(let u=0;u<s.length;u+=1)l=r&&r(s[u]),l!==void 0&&l>o&&(o=l,i=s[u]);return i},this.functionMerge=n=>{let a={};for(let s=0;s<n.length;s+=1){const r=n[s];a=Object.assign(a,r)}return a},this.functionMin=([n])=>{if(!n.length)return null;if(this.getTypeName(n[0])===B.TYPE_NUMBER)return Math.min(...n);const s=n;let r=s[0];for(let o=1;o<s.length;o+=1)s[o].localeCompare(r)<0&&(r=s[o]);return r},this.functionMinBy=n=>{const a=n[1],s=n[0],r=this.createKeyFunction(a,[B.TYPE_NUMBER,B.TYPE_STRING]);let o=1/0,i,l;for(let u=0;u<s.length;u+=1)l=r&&r(s[u]),l!==void 0&&l<o&&(o=l,i=s[u]);return i},this.functionNotNull=n=>{for(let a=0;a<n.length;a+=1)if(this.getTypeName(n[a])!==B.TYPE_NULL)return n[a];return null},this.functionReverse=([n])=>{if(this.getTypeName(n)===B.TYPE_STRING){const r=n;let o="";for(let i=r.length-1;i>=0;i-=1)o+=r[i];return o}const s=n.slice(0);return s.reverse(),s},this.functionSort=([n])=>[...n].sort(),this.functionSortBy=n=>{if(!this._interpreter)return[];const a=n[0].slice(0);if(a.length===0)return a;const s=this._interpreter,r=n[1],o=this.getTypeName(s.visit(r,a[0]));if(o!==void 0&&![B.TYPE_NUMBER,B.TYPE_STRING].includes(o))throw new Error(`TypeError: unexpected type (${this.TYPE_NAME_TABLE[o]})`);const i=[];for(let l=0;l<a.length;l+=1)i.push([l,a[l]]);i.sort((l,u)=>{const d=s.visit(r,l[1]),f=s.visit(r,u[1]);if(this.getTypeName(d)!==o)throw new Error(`TypeError: expected (${this.TYPE_NAME_TABLE[o]}), received ${this.TYPE_NAME_TABLE[this.getTypeName(d)]}`);if(this.getTypeName(f)!==o)throw new Error(`TypeError: expected (${this.TYPE_NAME_TABLE[o]}), received ${this.TYPE_NAME_TABLE[this.getTypeName(f)]}`);return d>f?1:d<f?-1:l[0]-u[0]});for(let l=0;l<i.length;l+=1)a[l]=i[l][1];return a},this.functionStartsWith=([n,a])=>n.startsWith(a),this.functionSum=([n])=>n.reduce((a,s)=>a+s,0),this.functionToArray=([n])=>this.getTypeName(n)===B.TYPE_ARRAY?n:[n],this.functionToNumber=([n])=>{const a=this.getTypeName(n);let s;return a===B.TYPE_NUMBER?n:a===B.TYPE_STRING&&(s=+n,!isNaN(s))?s:null},this.functionToString=([n])=>this.getTypeName(n)===B.TYPE_STRING?n:JSON.stringify(n),this.functionType=([n])=>{switch(this.getTypeName(n)){case B.TYPE_NUMBER:return"number";case B.TYPE_STRING:return"string";case B.TYPE_ARRAY:return"array";case B.TYPE_OBJECT:return"object";case B.TYPE_BOOLEAN:return"boolean";case B.TYPE_EXPREF:return"expref";case B.TYPE_NULL:return"null";default:return}},this.functionValues=([n])=>Object.values(n),this.functionTable={abs:{_func:this.functionAbs,_signature:[{types:[B.TYPE_NUMBER]}]},avg:{_func:this.functionAvg,_signature:[{types:[B.TYPE_ARRAY_NUMBER]}]},ceil:{_func:this.functionCeil,_signature:[{types:[B.TYPE_NUMBER]}]},contains:{_func:this.functionContains,_signature:[{types:[B.TYPE_STRING,B.TYPE_ARRAY]},{types:[B.TYPE_ANY]}]},ends_with:{_func:this.functionEndsWith,_signature:[{types:[B.TYPE_STRING]},{types:[B.TYPE_STRING]}]},floor:{_func:this.functionFloor,_signature:[{types:[B.TYPE_NUMBER]}]},join:{_func:this.functionJoin,_signature:[{types:[B.TYPE_STRING]},{types:[B.TYPE_ARRAY_STRING]}]},keys:{_func:this.functionKeys,_signature:[{types:[B.TYPE_OBJECT]}]},length:{_func:this.functionLength,_signature:[{types:[B.TYPE_STRING,B.TYPE_ARRAY,B.TYPE_OBJECT]}]},map:{_func:this.functionMap,_signature:[{types:[B.TYPE_EXPREF]},{types:[B.TYPE_ARRAY]}]},max:{_func:this.functionMax,_signature:[{types:[B.TYPE_ARRAY_NUMBER,B.TYPE_ARRAY_STRING]}]},max_by:{_func:this.functionMaxBy,_signature:[{types:[B.TYPE_ARRAY]},{types:[B.TYPE_EXPREF]}]},merge:{_func:this.functionMerge,_signature:[{types:[B.TYPE_OBJECT],variadic:!0}]},min:{_func:this.functionMin,_signature:[{types:[B.TYPE_ARRAY_NUMBER,B.TYPE_ARRAY_STRING]}]},min_by:{_func:this.functionMinBy,_signature:[{types:[B.TYPE_ARRAY]},{types:[B.TYPE_EXPREF]}]},not_null:{_func:this.functionNotNull,_signature:[{types:[B.TYPE_ANY],variadic:!0}]},reverse:{_func:this.functionReverse,_signature:[{types:[B.TYPE_STRING,B.TYPE_ARRAY]}]},sort:{_func:this.functionSort,_signature:[{types:[B.TYPE_ARRAY_STRING,B.TYPE_ARRAY_NUMBER]}]},sort_by:{_func:this.functionSortBy,_signature:[{types:[B.TYPE_ARRAY]},{types:[B.TYPE_EXPREF]}]},starts_with:{_func:this.functionStartsWith,_signature:[{types:[B.TYPE_STRING]},{types:[B.TYPE_STRING]}]},sum:{_func:this.functionSum,_signature:[{types:[B.TYPE_ARRAY_NUMBER]}]},to_array:{_func:this.functionToArray,_signature:[{types:[B.TYPE_ANY]}]},to_number:{_func:this.functionToNumber,_signature:[{types:[B.TYPE_ANY]}]},to_string:{_func:this.functionToString,_signature:[{types:[B.TYPE_ANY]}]},type:{_func:this.functionType,_signature:[{types:[B.TYPE_ANY]}]},values:{_func:this.functionValues,_signature:[{types:[B.TYPE_OBJECT]}]}},this._interpreter=t}registerFunction(t,n,a){if(t in this.functionTable)throw new Error(`Function already defined: ${t}()`);this.functionTable[t]={_func:n.bind(this),_signature:a}}callFunction(t,n){const a=this.functionTable[t];if(a===void 0)throw new Error(`Unknown function: ${t}()`);return this.validateArgs(t,n,a._signature),a._func.call(this,n)}validateInputSignatures(t,n){for(let a=0;a<n.length;a+=1)if("variadic"in n[a]&&a!==n.length-1)throw new Error(`ArgumentError: ${t}() 'variadic' argument ${a+1} must occur last`)}validateArgs(t,n,a){var s,r;let o;this.validateInputSignatures(t,a);const i=a.filter(c=>{var h;return(h=!c.optional)!==null&&h!==void 0?h:!1}).length,l=(r=(s=a[a.length-1])===null||s===void 0?void 0:s.variadic)!==null&&r!==void 0?r:!1,u=n.length<i,d=n.length>a.length,f=u&&(!l&&i>1||l)?"at least ":"";if(l&&u||!l&&(u||d))throw o=a.length>1,new Error(`ArgumentError: ${t}() takes ${f}${i} argument${o&&"s"||""} but received ${n.length}`);let m,p,g;for(let c=0;c<a.length;c+=1){g=!1,m=a[c].types,p=this.getTypeName(n[c]);let h;for(h=0;h<m.length;h+=1)if(p!==void 0&&this.typeMatches(p,m[h],n[c])){g=!0;break}if(!g&&p!==void 0){const _=m.map(y=>this.TYPE_NAME_TABLE[y]).join(" | ");throw new Error(`TypeError: ${t}() expected argument ${c+1} to be type (${_}) but received type ${this.TYPE_NAME_TABLE[p]} instead.`)}}}typeMatches(t,n,a){if(n===B.TYPE_ANY)return!0;if(n===B.TYPE_ARRAY_STRING||n===B.TYPE_ARRAY_NUMBER||n===B.TYPE_ARRAY){if(n===B.TYPE_ARRAY)return t===B.TYPE_ARRAY;if(t===B.TYPE_ARRAY){let s;n===B.TYPE_ARRAY_NUMBER?s=B.TYPE_NUMBER:n===B.TYPE_ARRAY_STRING&&(s=B.TYPE_STRING);for(let r=0;r<a.length;r+=1){const o=this.getTypeName(a[r]);if(o!==void 0&&s!==void 0&&!this.typeMatches(o,s,a[r]))return!1}return!0}}else return t===n;return!1}getTypeName(t){switch(Object.prototype.toString.call(t)){case"[object String]":return B.TYPE_STRING;case"[object Number]":return B.TYPE_NUMBER;case"[object Array]":return B.TYPE_ARRAY;case"[object Boolean]":return B.TYPE_BOOLEAN;case"[object Null]":return B.TYPE_NULL;case"[object Object]":return t.jmespathType===O.TOK_EXPREF?B.TYPE_EXPREF:B.TYPE_OBJECT;default:return}}createKeyFunction(t,n){if(!this._interpreter)return;const a=this._interpreter;return r=>{const o=a.visit(t,r);if(!n.includes(this.getTypeName(o))){const i=`TypeError: expected one of (${n.map(l=>this.TYPE_NAME_TABLE[l]).join(" | ")}), received ${this.TYPE_NAME_TABLE[this.getTypeName(o)]}`;throw new Error(i)}return o}}}class Uu{constructor(){this._rootValue=null,this.runtime=new $u(this)}search(t,n){return this._rootValue=n,this.visit(t,n)}visit(t,n){let a,s,r,o,i,l,u,d,f,m,p;switch(t.type){case"Field":return n===null?null:bn(n)?(l=n[t.name],l===void 0?null:l):null;case"Subexpression":for(r=this.visit(t.children[0],n),m=1;m<t.children.length;m+=1)if(r=this.visit(t.children[1],r),r===null)return null;return r;case"IndexExpression":return u=this.visit(t.children[0],n),d=this.visit(t.children[1],u),d;case"Index":if(!Array.isArray(n))return null;let g=t.value;return g<0&&(g=n.length+g),r=n[g],r===void 0&&(r=null),r;case"Slice":if(!Array.isArray(n))return null;const c=[...t.children],h=this.computeSliceParams(n.length,c),[_,y,T]=h;if(r=[],T>0)for(m=_;m<y;m+=T)r.push(n[m]);else for(m=_;m>y;m+=T)r.push(n[m]);return r;case"Projection":if(p=this.visit(t.children[0],n),!Array.isArray(p))return null;for(f=[],m=0;m<p.length;m+=1)s=this.visit(t.children[1],p[m]),s!==null&&f.push(s);return f;case"ValueProjection":if(p=this.visit(t.children[0],n),!bn(p))return null;f=[];const E=Object.values(p);for(m=0;m<E.length;m+=1)s=this.visit(t.children[1],E[m]),s!==null&&f.push(s);return f;case"FilterProjection":if(p=this.visit(t.children[0],n),!Array.isArray(p))return null;const k=[],L=[];for(m=0;m<p.length;m+=1)a=this.visit(t.children[2],p[m]),zn(a)||k.push(p[m]);for(let w=0;w<k.length;w+=1)s=this.visit(t.children[1],k[w]),s!==null&&L.push(s);return L;case"Comparator":switch(o=this.visit(t.children[0],n),i=this.visit(t.children[1],n),t.name){case O.TOK_EQ:r=ua(o,i);break;case O.TOK_NE:r=!ua(o,i);break;case O.TOK_GT:r=o>i;break;case O.TOK_GTE:r=o>=i;break;case O.TOK_LT:r=o<i;break;case O.TOK_LTE:r=o<=i;break;default:throw new Error(`Unknown comparator: ${t.name}`)}return r;case O.TOK_FLATTEN:const D=this.visit(t.children[0],n);if(!Array.isArray(D))return null;let F=[];for(m=0;m<D.length;m+=1)s=D[m],Array.isArray(s)?F=[...F,...s]:F.push(s);return F;case"Identity":return n;case"MultiSelectList":if(n===null)return null;for(f=[],m=0;m<t.children.length;m+=1)f.push(this.visit(t.children[m],n));return f;case"MultiSelectHash":if(n===null)return null;f={};let A;for(m=0;m<t.children.length;m+=1)A=t.children[m],f[A.name]=this.visit(A.value,n);return f;case"OrExpression":return a=this.visit(t.children[0],n),zn(a)&&(a=this.visit(t.children[1],n)),a;case"AndExpression":return o=this.visit(t.children[0],n),zn(o)?o:this.visit(t.children[1],n);case"NotExpression":return o=this.visit(t.children[0],n),zn(o);case"Literal":return t.value;case O.TOK_PIPE:return u=this.visit(t.children[0],n),this.visit(t.children[1],u);case O.TOK_CURRENT:return n;case O.TOK_ROOT:return this._rootValue;case"Function":const C=[];for(let w=0;w<t.children.length;w+=1)C.push(this.visit(t.children[w],n));return this.runtime.callFunction(t.name,C);case"ExpressionReference":const U=t.children[0];return U.jmespathType=O.TOK_EXPREF,U;default:throw new Error(`Unknown node type: ${t.type}`)}}computeSliceParams(t,n){let[a,s,r]=n;if(r===null)r=1;else if(r===0){const i=new Error("Invalid slice, step cannot be 0");throw i.name="RuntimeError",i}const o=r<0;return a=a===null?o?t-1:0:this.capSliceRange(t,a,r),s=s===null?o?-1:t:this.capSliceRange(t,s,r),[a,s,r]}capSliceRange(t,n,a){let s=n;return s<0?(s+=t,s<0&&(s=a<0?-1:0)):s>=t&&(s=a<0?t-1:t),s}}const Fs=new Uu,Hu=B.TYPE_ANY,Ku=B.TYPE_ARRAY,Yu=B.TYPE_ARRAY_NUMBER,ju=B.TYPE_ARRAY_STRING,Gu=B.TYPE_BOOLEAN,qu=B.TYPE_EXPREF,Wu=B.TYPE_NULL,Ju=B.TYPE_NUMBER,Vu=B.TYPE_OBJECT,zu=B.TYPE_STRING;function Qu(e){return Ri.parse(e)}function Xu(e){return Ci.tokenize(e)}const Zu=(e,t,n)=>{Fs.runtime.registerFunction(e,t,n)};function ep(e,t){const n=Ri.parse(t);return Fs.search(n,e)}const tp=Fs,bt={compile:Qu,registerFunction:Zu,search:ep,tokenize:Xu,TreeInterpreter:tp,TYPE_ANY:Hu,TYPE_ARRAY_NUMBER:Yu,TYPE_ARRAY_STRING:ju,TYPE_ARRAY:Ku,TYPE_BOOLEAN:Gu,TYPE_EXPREF:qu,TYPE_NULL:Wu,TYPE_NUMBER:Ju,TYPE_OBJECT:Vu,TYPE_STRING:zu},ct=class ct{static async appendPrompt(t,n){jr(t,LZString.compressToUTF16(JSON.stringify(n))).then(async()=>{ln().then(a=>{a=a.filter(s=>s.indexOf(this.DELIM_PROMPTS)!=-1),a.length>ct.MAX_PROMPTS_VALS&&Wa(a[0])})}).catch(a=>console.error("~IDB Failed | ",a))}static async appendVIR_products(t){t.forEach(n=>{let a=JSON.stringify({ts:Date.now(),name:n[1]});jr(n[0],LZString.compressToUTF16(a)).then(async()=>{}).catch(s=>console.error("~IDB Failed | ",s))})}static async keys(t,n){ln().then(a=>{a=a.filter(s=>s.indexOf(t)!=-1),n&&n(a)})}static async get(t,n){Ru(t).then(a=>{try{a=JSON.parse(LZString.decompressFromUTF16(a))}catch{}finally{n&&n(a)}})}static async entries(t,n){Nu().then(a=>{a=a.filter(s=>s[0].indexOf(t)!=-1),a=a.map(s=>{try{s[1]=JSON.parse(LZString.decompressFromUTF16(s[1]))}catch{}finally{}return s}),n&&n(a)})}static compr(t){return t}static decompr(t){return t}static async act(t,n,a){let s="";switch(t){case"PROMPTS_COUNT":ln().then(o=>{o=o.filter(i=>i.indexOf(this.DELIM_PROMPTS)!=-1),s=`There are ${o.length} prompts in local IDB storage. The current max is ${this.MAX_PROMPTS_VALS}.`,s&&a&&a(s)});break;case"PROMPTS_IMPORT":console.log("~ PROMPTS_IMPORT | ");break;case"PROMPTS_EXPORT":console.log("~ PROMPTS_EXPORT | ");break;case"PROMPTS_CLEAR":ln().then(o=>{o.forEach(i=>{i.indexOf(this.DELIM_PROMPTS)!=-1&&i.split(ct.DELIM_PROMPTS)[0]==n&&Wa(i)})}),s="The Prompt history has been removed for UPI: "+n,console.log("~ PROMPTS_CLEAR ------ | ",s);break;case"VIR_COUNT":ln().then(o=>{o=o.filter(i=>i.indexOf(this.DELIM_VIR)!=-1),s=`There are ${o.length} VNR names in local IDB storage.`,s&&a&&a(s)});break;case"VIR_CLEAR":let r=0;await ln().then(o=>{o.forEach(i=>{i.indexOf(this.DELIM_VIR)!=-1&&i.split(ct.DELIM_VIR)[0]==n&&(r++,Wa(i))})}),s=`The VNR Names have been removed for UPI: ${n} (Total Deleted: ${r})`;break;case"FEATURE_CLEAR":localStorage.getItem("feature_flags")&&localStorage.removeItem("feature_flags"),s="Features have been reset to default. Refresh.";break}console.log("~ resultMsg | ",s),s&&a&&a(s)}};ct.MAX_TYPEAHEAD_ROWS=14,ct.MAX_PROMPTS_VALS=50,ct.DELIM_PROMPTS="_",ct.DELIM_VIR="-",ct.DELIM_SNDX="|";let Zt=ct;const be=_d("AppState",()=>{const e=ht(),t="DEV",n="BMA Tourney v0.0.5 ",a="#app",s=St({APP__ROUTE_SYNC:"APP.ROUTE_SYNC",WC__TOURN_ACTION:"WC.TOURN_ACTION",WC__APP__HEAD_TOP:"WC.APP.HEAD_TOP",WC__APP__HEAD_TOP__LOGO:"WC.APP.HEAD_TOP.LOGO",WC__APP__HEAD_TOP__USER_PROFILE:"WC.APP.HEAD_TOP.USER_PROFILE",WC__APP__HEAD_MID:"WC.APP.HEAD_MID",WC__APP__HEAD_MID__HEAD_MID_LOBBY:"WC.APP.HEAD_MID.HEAD_MID_LOBBY",WC__APP__HEAD_MID__HEAD_MID_MY:"WC.APP.HEAD_MID.HEAD_MID_MY",WC__APP__HEAD_MID__HEAD_MID_COMPLETED:"WC.APP.HEAD_MID.HEAD_MID_COMPLETED",WC__APP__HEAD_MID__HEAD_MID_LEADERBOARD:"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD",WC__APP__HEAD_MID__HEAD_MID_SQUAD:"WC.APP.HEAD_MID.HEAD_MID_SQUAD",WC__APP__HEAD_SPORTS:"WC.APP.HEAD_SPORTS",WC__APP__HEAD_SPORTS__HEAD_SPORTS_DRAG_START:"WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START",WC__APP__FOOT:"WC.APP.FOOT",WC__APP__FOOT__ALL_SPORTS:"WC.APP.FOOT.ALL_SPORTS",WC__APP__FOOT__MY_TOURNEYS:"WC.APP.FOOT.MY_TOURNEYS",WC__APP__FOOT__LEADERBOARD:"WC.APP.FOOT.LEADERBOARD",WC__APP__FOOT__MY_PROFILE:"WC.APP.FOOT.MY_PROFILE",ROUTE__HOME_ONMOUNT:"ROUTE.HOME_ONMOUNT",ROUTE__HOME_HYDRATE:"ROUTE.HOME_HYDRATE",ROUTE__HOME__USER_PROFILE:"ROUTE.HOME.USER_PROFILE",SSE__CORE__TOURN_SYNC:"SSE.CORE.TOURN_SYNC",CANVAS__HYDRATE__STATUS:"CANVAS.HYDRATE.STATUS",SODAPOP__HYDRATE__COREBETSLIP:"SODAPOP.HYDRATE.COREBETSLIP",COREBETSLIP:"COREBETSLIP",COREBETSLIP__BET:"COREBETSLIP.BET",COREBETSLIP__SPREAD:"COREBETSLIP.SPREAD",COREBETSLIP__MONEY:"COREBETSLIP.MONEY",COREBETSLIP__TOTAL:"COREBETSLIP.TOTAL",COREBETSLIP__CLOSE:"COREBETSLIP.CLOSE",COREBETSLIP__INTERSYNC:"COREBETSLIP.INTERSYNC",COREBETSLIP__TDSYNC:"COREBETSLIP.TDSYNC"});let r=St([]),o=St([]);const i=A=>{r.push(A),r.length>10&&(r.shift(),console.log("[appState] coreTourn exceeded 10 items, removed oldest")),console.log(`[appState] coreTourn length: ${r.length}`)},l=A=>{o.push(A),o.length>10&&(o.shift(),console.log("[appState] coreBetSlip exceeded 10 items, removed oldest")),console.log(`[appState] coreBetSlip length: ${o.length}`)},u=()=>{const A=localStorage.getItem("session_user");if(console.log("[appState] Loading session_user from localStorage:",A),A)try{const C=JSON.parse(A);return console.log("[appState] Parsed session_user:",C),C}catch(C){console.error("Failed to parse session_user from localStorage:",C)}return console.log("[appState] No saved session, returning default"),{authenticated:!1,userName:"",name:"",fname:"",lname:"",email:"",token:"",guid:""}},d=Ve({session_app:{online:!0,route:"",version:n+t,buildmode:t},session_log:[],session_ui:{orientation:"landscape",isTouch:"utils.isTouch()"},session_user:u()}),f=Ve({commands:["clear","debug","export","feature","help","logout","reload","route","theme","version","workflow"],features:{theme:{state:"dark"},motif:{state:"brand"},lang:{state:"en"},sse:{state:!0},disable_existing_bet_btn:{state:!1},animation:{state:!0},audio:{state:!0},contextmenu:{state:!1},debug:{state:!1},guided_tour:{state:!1}},env_override:{DEV:{contextmenu:{state:!1}},QA:{contextmenu:{state:!0}},PROD:{contextmenu:{state:!1},sse:!0}}}),m=()=>{if(!localStorage.getItem("feature_flags"))localStorage.setItem("feature_flags",Zt.compr(JSON.stringify(f.value.features)));else{let A=Zt.decompr(localStorage.getItem("feature_flags"));A=Object.assign(f.value.features,JSON.parse(A));for(let C in A)typeof f.value?.env_override[t][C]<"u"&&(A[C]=f.value.env_override[t][C]);localStorage.setItem("feature_flags",Zt.compr(JSON.stringify(f.value.features=A)))}},p=()=>{const A=document.querySelector(a);if(A){const C=A.dataset;for(let U in C){const w=U.replace(/^sync/,""),J=Object.keys(f.value.features).find(ee=>ee.toLowerCase()===w.toLowerCase());if(J){const ee=f.value.features[J]?.state;ee&&(C[U]=ee)}}}},g=(A="Theme",C={state:"dark"})=>{const U=document.querySelector(a);U&&(U.dataset["sync"+A]=C.state)},c=(A="Theme",C={state:"dark"})=>{if(localStorage.getItem("feature_flags")&&C){let w=JSON.parse(Zt.decompr(localStorage.getItem("feature_flags")));w[A]={state:C.state},localStorage.setItem("feature_flags",Zt.compr(JSON.stringify(f.value.features=w))),g(A,C),W.publish("APP.ROUTE_SYNC",`{ "${A}": ${JSON.stringify(C)}}`)}},h=A=>{const C=f.value?.features?.Lang?.state;let U=T.value.microcopy.language.filter(w=>w.code==C)[0]?.copy;if(U=U.filter(w=>w[0]==A)[0],U)return U[1]},_=(A=":version")=>{let[C,U,w]=A.split(" ");switch(C=C.toLocaleLowerCase(),w=="true"&&(w=!0),w=="false"&&(w=!1),C){case":version":neodigmToast.q(`Version Q ${d.value.session_app.version}`,"brand");break;case":feature":c(U,{state:w});break;case":route":neodigmToast.q(`route ${U}`,"brand"),e.push({name:U});break}};m(),p();const y=St({designer:"guided_tour",notifications:{unread:0}}),T=Ve({sports:_n,microcopy:xu.getMeta()}),E=qe(()=>d.value.session_user.fname+" "+d.value.session_user.lname),k=()=>{console.log("[appState] Saving session_user to localStorage:",d.value.session_user),localStorage.setItem("session_user",JSON.stringify(d.value.session_user))},L=()=>{localStorage.removeItem("session_user")};function D(A){return d.value.session_user.authenticated=!0,d.value.session_user.token=A,k(),d.value.session_app.route="chat"}function F(){return d.value.session_user.authenticated=!1,d.value.session_user.token="",d.value.session_user.guid="",L(),API_ORCH.setTJO(null),d.value.session_app.route="auth"}return{appCLIFeatures:f,appDesigner:y,appMeta:T,appSession:d,clearSessionUser:L,concatFirstLast:E,coreBetSlip:o,coreTourn:r,doCLI:_,doLogin:D,doLogout:F,hierTopics:s,i18n:h,pushCoreTourn:i,pushcoreBetSlip:l,saveSessionUser:k,setFeaturePersistPub:c}}),He=class He{static getTJO(){if(this.jsTJO)return this.jsTJO;let t=localStorage.getItem("tjo");return t&&(this.jsTJO=JSON.parse(t)),this.jsTJO}static setTJO(t){return t?localStorage.setItem("tjo",JSON.stringify(t)):localStorage.clear("tjo"),this.jsTJO=t}static setStateSignout(){typeof neodigmWired4Sound<"u"&&neodigmWired4Sound.sound(11),He.setTJO(null),location.reload()}static async doSignin(t,n=null){const a={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}},r=await(await fetch(this.API_baseURI+"/bmac/"+this.API_ver+"/acctEntity/signin",a)).json();r.ok?(typeof mvvLegit<"u"&&mvvLegit&&r?.accessToken&&mvvLegit.doSignin(r?.accessToken),n&&n(r)):typeof neodigmToast<"u"&&neodigmToast.q("Invalid User ID|Password")}static async doSignup(t,n=null){const a={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}},r=await(await fetch(this.API_baseURI+"/bmac/"+this.API_ver+"/acctEntity",a)).json();if(r.ok)typeof neodigmToast<"u"&&neodigmToast.q("Account created successfully!|Please sign in","success"),n&&n(r);else{const o=r?.error||r?.message||"Signup failed. Please try again.";typeof neodigmToast<"u"&&neodigmToast.q(o,"danger"),n&&n(r)}}static async checkUserName(t,n=null){const a={method:"POST",body:JSON.stringify({userName:t}),headers:{"Content-Type":"application/json"}},r=await(await fetch(this.API_baseURI+"/bmac/"+this.API_ver+"/acctEntity/checkUserName",a)).json();return n&&n(r),r}static async resetHash(t,n,a=null){typeof neodigmAgent<"u"?neodigmAgent.genChronSync():Date.now();const s=typeof neodigmUtils<"u"?neodigmUtils.genHash(n):n,r={method:"POST",body:JSON.stringify({guid:t,hash:s}),headers:He.genHeaders()},i=await(await fetch(this.API_baseURI+this.API_ver+"/acct/resetHash",r)).json();a&&a(i)}static genHeaders(t={}){let n={};return n.protomolecule=typeof neodigmAgent<"u"?neodigmAgent.genChronSync():Date.now(),n.Authorization="Bearer expired",n["Content-Type"]="application/json",He.getTJO()&&(n.Authorization="Bearer "+He.getTJO().tokens[0]),typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.class&&(n.role=SessionAcctEntity.oEntities.data.entity.class),typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.guid&&(n.guid=SessionAcctEntity.oEntities.data.entity.guid),typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.company&&(n.company=SessionAcctEntity.oEntities.data.entity.company),n}static async fetchTournaments(t=null){const n={method:"GET",headers:He.genHeaders()},s=await(await fetch(this.API_baseURI+"/bmac/"+this.API_ver+"/coreTournaments",n)).json();return t&&t(s),s}static async fetchBetSlips(t,n="",a="",s=null){let r=`/bmac/${this.API_ver}/coreBetSlip/filter/${t}`;n&&(r+=`/${n}`),n&&a&&(r+=`/${a}`);const o={method:"GET",headers:He.genHeaders()},l=await(await fetch(this.API_baseURI+r,o)).json();return s&&s(l),l}static async fetchLeaderboard(t,n="",a=null){let s=`/bmac/${this.API_ver}/coreLeaderboard?tourney=${t}`;n&&(s+=`&user=${n}`);const r={method:"GET",headers:He.genHeaders()},i=await(await fetch(this.API_baseURI+s,r)).json();return a&&a(i),i}static async postBetSlips(t,n=null){const a=t.map(r=>{const o={method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}};return fetch(this.API_baseURI+"/bmac/"+this.API_ver+"/coreBetSlip/",o).then(i=>i.json())}),s=await Promise.all(a);return n&&n(s),s}};He.API_baseURI="https://machfive-bmacdev-rest.onrender.com",He.API_ver="v5",He.jsState={},He.jsMeta={},He.jsTJO=null;let ve=He;const hn={shootConfetti(){if(typeof confetti=="function"){let a=function(s,r){confetti({...t,...r,particleCount:Math.floor(e*s)})};var n=a,e=200,t={origin:{y:.7}};a(.25,{zIndex:304,spread:26,startVelocity:55}),a(.2,{zIndex:304,spread:60}),a(.35,{zIndex:304,spread:100,decay:.91,scalar:.8}),a(.1,{zIndex:304,spread:120,startVelocity:25,decay:.92,scalar:1.2}),a(.1,{zIndex:304,spread:120,startVelocity:45})}},hardReload(){const e=new URLSearchParams(window.location.search);e.set("reload",new Date().getTime());const t=e.toString();window.location.search=t},isJSON(e){let t=!1;try{t=typeof JSON.parse(e)}catch{}return t=="object"},isTouch:function(){return typeof document.body.ontouchstart<"u"},prettyTimeExt(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"})},formatDateLocal(e,t={}){if(!e)return"TBD";let n=new Date(e);!e.includes("Z")&&!e.match(/[+-]\d{2}:\d{2}$/)&&(n=new Date(e+"Z"));const a={month:"short",day:"numeric",hour:"numeric",minute:"2-digit"};return n.toLocaleString(void 0,{...a,...t})},shallowDelta(e,t){if(Object.keys(t).length==0&&Object.keys(e).length>0)return e;let n={};for(const a in t)e[a]&&t[a]!=e[a]&&(n[a]=e[a]);return Object.keys(n).length>0?n:t},genLorumIpsum(e=1){}},qt=(e,t)=>{const n=e.__vccOpts||e;for(const[a,s]of t)n[a]=s;return n},np={class:"auth-page"},ap={__name:"splash_route",setup(e){const t=ht(),n=wi();return be(),setTimeout(()=>{n&&n.name=="splash_route"&&(mvvLegit&&mvvLegit.isRouteAllowed("home_route")?t.push({name:"home_route"}):t.push({name:"signin_route"}))},3e3),(a,s)=>(Xe(),ft("div",np,[...s[0]||(s[0]=[Gt('<div class="auth-page-left" data-v-91dce2eb><div class="auth-bg" data-v-91dce2eb><div class="auth-bg-image" data-v-91dce2eb></div><div class="auth-bg-image" data-v-91dce2eb></div><div class="auth-bg-image" data-v-91dce2eb></div></div><div class="auth-overlay" data-v-91dce2eb></div><div class="auth-branding-content" data-v-91dce2eb><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-91dce2eb><p class="auth-branding-tagline" data-v-91dce2eb>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-91dce2eb>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-91dce2eb> © 2026 Bet Max Action. All rights reserved. </div></div>',1),P("div",{class:"auth-page-right"},[P("div",{class:"auth-card splash-content"},[P("p",{class:"splash-message"},"Loading your experience ..."),P("br"),P("br"),P("neodigm-juicebar",{role:"progressbar","data-n55-theme":"brand","data-n55-size":"medium",style:{"background-color":"#242424"}},[P("div")])])],-1)])]))}},Wr=qt(ap,[["__scopeId","data-v-91dce2eb"]]);class sp extends HTMLElement{connectedCallback(){this.attachShadow({mode:"open"}),this.render()}static get observedAttributes(){return["sport","data-sync-theme"]}attributeChangedCallback(){this.shadowRoot&&this.render()}render(){this.getAttribute("sport");const n=document.getElementById("app")?.getAttribute("data-sync-theme").toLowerCase()||"dark",a=n==="dark";let s=this.getAttribute("data-sport-group")||"Soccer",r=s.replaceAll(" ","_");this.shadowRoot.innerHTML=`
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
    `}}customElements.define("bma-sport-icon",sp);class rp extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-bma-tourn-caption","data-bma-tourn-entities","data-bma-tourn-entry_fee","data-bma-tourn-matches","data-bma-tourn-matches_expanded","data-bma-tourn-prize_distro","data-bma-tourn-sports_allowed","data-bma-tourn-status","data-sync-theme","data-bma-tourn-tagline","data-bma-tourn-tournament_dollars","data-bma-tourn-tags"]}connectedCallback(){this.render(),this.observeTheme(),this.attachEventListeners()}dispatchCardEvent(t,n={}){const a=new CustomEvent("bma-tournament-action",{bubbles:!0,composed:!0,detail:{action:t,tournamentId:this.getAttribute("data-bma-tourn-id"),tournamentGuid:this.getAttribute("data-bma-tourn-guid"),tournamentStatus:this.status,...n}});this.dispatchEvent(a)}attachEventListeners(){this.shadowRoot.addEventListener("click",t=>{const n=t.target.closest(".btn-info"),a=t.target.closest(".btn-join"),s=t.target.closest(".btn-play"),r=t.target.closest("bma-sport-icon");if(n){t.stopPropagation(),this.dispatchCardEvent("INFO");return}if(a){t.stopPropagation(),this.dispatchCardEvent("JOIN");return}if(s){t.stopPropagation(),this.dispatchCardEvent("PLAY");return}if(r){t.stopPropagation();const o=r.getAttribute("sport"),i=this.getSportInfo(o);this.dispatchCardEvent("SPORT_ICON",{sportKey:o,sportTitle:i.title,sportDescription:i.description});return}t.target.closest(".card")&&this.dispatchCardEvent("FOCUS")})}attributeChangedCallback(t,n,a){n!==a&&this.render()}observeTheme(){const t=document.getElementById("app");if(!t)return;new MutationObserver(()=>{this.render()}).observe(t,{attributes:!0,attributeFilter:["data-sync-theme"]})}getTheme(){return document.getElementById("app")?.getAttribute("data-sync-theme")||"dark"}get caption(){return this.getAttribute("data-bma-tourn-caption")||"Tournament"}get tournament_dollars(){return this.getAttribute("data-bma-tourn-tournament_dollars")||"0"}get entities(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const n=JSON.parse(t);return Array.isArray(n)?n.find(s=>Array.isArray(s))?.length||"0":n?.guids?.length||"0"}catch{return"0"}return"0"}get entitiesGuids(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const n=JSON.parse(t);return Array.isArray(n)?n.find(s=>Array.isArray(s))||[]:n?.guids||[]}catch{return[]}return[]}get entitiesData(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const n=JSON.parse(t);if(Array.isArray(n)){const a=n.find(r=>r&&typeof r=="object"&&!Array.isArray(r));return{current:n.find(r=>Array.isArray(r))?.length||0,max:parseInt(a?.max)||100}}return{current:n?.guids?.length||0,max:n?.max||100}}catch{return{current:0,max:100}}return{current:0,max:100}}isUserParticipating(){const n=document.getElementById("app")?.dataset?.userGuid;return n?this.entitiesGuids.includes(n):!1}getUserBadge(){const n=document.getElementById("app")?.dataset?.userGuid;if(!n)return null;const a=this.getAttribute("data-bma-tourn-tags");if(!a)return null;try{const s=JSON.parse(a);if(!Array.isArray(s))return null;const r=s.find(o=>typeof o=="object"&&o!==null?o[n]&&o[n].startsWith("--badge__ribbon--"):!1);return r?r[n]:null}catch{return null}}getBadgeClass(){const t=this.getUserBadge();if(!t)return"";const n=t.match(/--badge__ribbon--(\w+)/);return n?n[1]:""}getSportInfo(t){const n=_n.find(a=>a.key===t);return n?{title:n.title,description:n.description}:{title:t,description:t}}get matches(){let t=this.getAttribute("data-bma-tourn-matches");return t&&(t=JSON.parse(t)),t?.length||"0"}get matches_expanded(){let t=this.getAttribute("data-bma-tourn-matches_expanded");return t&&(t=JSON.parse(t)),t||null}get marqueeText(){const t=this.matches_expanded;return!t||t.length===0?"   Exciting Sports Matchups Coming Soon!   ":"  "+t.map(a=>{const s=a.title||"Match";let r="TBD";if(a.scheduled_at)try{r=new Date(a.scheduled_at).toLocaleString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit",hour12:!0})}catch{r=a.scheduled_at}return`  ${s} @ ${r}  `}).join(" • ")+"  "}get tagline(){return this.getAttribute("data-bma-tourn-tagline")||""}get status(){return this.getAttribute("data-bma-tourn-status")||"upcoming"}get prizeDistro(){const t=this.getAttribute("data-bma-tourn-prize_distro");if(!t)return null;try{return JSON.parse(t)}catch{return t}}get entryFee(){return this.getAttribute("data-bma-tourn-entry_fee")||"Free"}get sportsAllowed(){const t=this.getAttribute("data-bma-tourn-sports_allowed");if(!t)return[];try{const n=JSON.parse(t);return Array.isArray(n)?n.map(a=>typeof a=="object"&&a.sport_key?a.sport_key:a):[n]}catch{return[t]}}get sportsDisplay(){const t=this.sportsAllowed;if(!Array.isArray(t)||t.length===0)return'<bma-sport-icon sport="default" data-sport-group="default"></bma-sport-icon>';const n=Math.min(t.length,3);let a="";for(let s=0;s<n;s++){const r=t[s].key,o=_n.find(l=>l.key===r),i=o?o.group:"default";a+=`<bma-sport-icon sport="${r}" data-sport-group="${i}"></bma-sport-icon>`}return t.length>3&&(a+=`<span class="sport-count">+${t.length-3}</span>`),a}render(){const t=this.getTheme(),n=t==="dark",a=this.getAttribute("data-sync-theme")||t;this.shadowRoot.innerHTML=`
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
    `}}customElements.define("bma-tournament-card",rp);class op extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.setupEventListeners(),setTimeout(()=>{const t=this.shadowRoot.querySelector(".content_stake_text input");t&&t.focus()},100)}static get observedAttributes(){return["data-content-team-points","data-content-odds","data-content-stake-text","data-content-type","data-abbreviated-title","data-scheduled-at","data-stake","data-payout"]}attributeChangedCallback(t,n,a){if(n!==a){if(t==="data-stake")return;if(t==="data-payout"){this.updatePayoutDisplay();return}this.render()}}get teamPoints(){return this.getAttribute("data-content-team-points")||""}get odds(){return this.getAttribute("data-content-odds")||"0"}get stake(){return this.getAttribute("data-content-stake-text")||"0"}get type(){return this.getAttribute("data-content-type")||""}get abbreviatedTitle(){return this.getAttribute("data-abbreviated-title")||""}get scheduledAt(){const t=this.getAttribute("data-scheduled-at")||"";return t?hn.formatDateLocal(t):""}get payout(){const t=this.getAttribute("data-payout")||"0",n=parseFloat(t);return isNaN(n)?"0.00":n.toFixed(2)}updatePayoutDisplay(){const t=this.shadowRoot?.querySelector(".payout-value");t&&(t.textContent=this.payout)}setupEventListeners(){const t=this.shadowRoot.querySelector(".grid_close button");t&&t.addEventListener("click",()=>{W.publish("COREBETSLIP.CLOSE",JSON.stringify({teamPoints:this.teamPoints,odds:this.odds,stake:this.stake,type:this.type,abbreviatedTitle:this.abbreviatedTitle,scheduledAt:this.getAttribute("data-scheduled-at"),timestamp:Date.now()})),this.dispatchEvent(new CustomEvent("bma-bet-entry-remove",{bubbles:!0,composed:!0,detail:{teamPoints:this.teamPoints,odds:this.odds,stake:this.stake,type:this.type,abbreviatedTitle:this.abbreviatedTitle,scheduledAt:this.getAttribute("data-scheduled-at")}}))});const n=this.shadowRoot.querySelector(".content_stake_text input");n&&n.addEventListener("input",a=>{const s=a.target.value;this.setAttribute("data-stake",s)})}render(){this.shadowRoot.innerHTML=`
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
    `,this.setupEventListeners()}}customElements.define("bma-bet-entry",op);class ip extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-match-id","data-match-guid","data-match-title","data-match-short-title","data-scheduled-at","data-home-team","data-away-team","data-odds-markets","data-is-disabled","data-sync-theme","data-scoreboard","data-sport-key"]}get matchId(){return this.getAttribute("data-match-id")||""}get matchGuid(){return this.getAttribute("data-match-guid")||""}get matchTitle(){return this.getAttribute("data-match-title")||""}get shortTitle(){return this.getAttribute("data-match-short-title")||this.matchTitle}get scheduledAt(){return this.getAttribute("data-scheduled-at")||""}get homeTeam(){return this.getAttribute("data-home-team")||"Home"}get awayTeam(){return this.getAttribute("data-away-team")||"Away"}get oddsMarkets(){const t=this.getAttribute("data-odds-markets");if(!t)return null;try{return JSON.parse(t)}catch(n){return console.error("[bma-bet-match-card] Error parsing odds_markets:",n),null}}get isDisabled(){return this.getAttribute("data-is-disabled")==="true"}get theme(){return this.getAttribute("data-sync-theme")||"dark"}get scoreboard(){const t=this.getAttribute("data-scoreboard");if(!t)return null;try{return JSON.parse(t)}catch(n){return console.error("[bma-bet-match-card] Error parsing scoreboard:",n),null}}get sportKey(){return this.getAttribute("data-sport-key")||""}get sportGroup(){const t=this.sportKey;if(!t)return"";const n=_n.find(a=>a.key===t);return n?n.group:""}connectedCallback(){this.render(),this.startCountdownTimer()}disconnectedCallback(){this.stopCountdownTimer()}startCountdownTimer(){this.stopCountdownTimer(),this.countdownInterval=setInterval(()=>{this.updateCountdown()},6e4)}stopCountdownTimer(){this.countdownInterval&&(clearInterval(this.countdownInterval),this.countdownInterval=null)}updateCountdown(){const t=this.shadowRoot?.querySelector(".countdown");t&&(t.textContent=this.getCountdownText())}attributeChangedCallback(t,n,a){n!==a&&this.render()}formatDate(t){if(!t)return"TBD";let n=new Date(t);return!t.includes("Z")&&!t.match(/[+-]\d{2}:\d{2}$/)&&(n=new Date(t+"Z")),n.toLocaleString(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}getCountdownText(){if(!this.scheduledAt)return"";const t=new Date,n=new Date(this.scheduledAt);!this.scheduledAt.includes("Z")&&!this.scheduledAt.match(/[+-]\d{2}:\d{2}$/)&&n.setTime(new Date(this.scheduledAt+"Z").getTime());const a=n-t;if(a<=0)return"";const s=Math.floor(a/(1e3*60*60)),r=Math.floor(a%(1e3*60*60)/(1e3*60));return s>24?`${Math.floor(s/24)}d ${s%24}h`:s>0?`${s}h ${r}m`:r>5?`${r} min`:"Starting Soon"}getGameStatus(){const t=this.getCountdownText();if(t)return{type:"upcoming",text:t,color:"#F7C60D"};const n=this.scoreboard;if(n&&n.time_remaining){const a=n.time_remaining.toLowerCase();if(a==="final")return{type:"final",text:"Final",color:"#969696"};if(a==="in progress"||a.includes("q")||a.includes("half")||a.includes("period")){const s=n.home_score!==void 0&&n.home_score!==null||n.away_score!==void 0&&n.away_score!==null,r=n.period!==void 0&&n.period!==null&&n.period!==0;if(s||r)return{type:"live",text:n.time_remaining,color:"#00E676"}}}return{type:"scheduled",text:this.formatDate(this.scheduledAt),color:"#969696"}}handleButtonClick(t,n,a,s,r){t.stopPropagation();const o=t.currentTarget,i=o.classList.contains("btn--active"),l={matchId:this.matchId,matchGuid:this.matchGuid,matchTitle:this.matchTitle,abbreviatedTitle:this.shortTitle,homeTeam:this.homeTeam,awayTeam:this.awayTeam,scheduledAt:this.scheduledAt,type:n,team:a,price:s,point:r,timestamp:Date.now()};this.dispatchEvent(new CustomEvent("bet-button-click",{bubbles:!0,composed:!0,detail:{betData:l,isActive:i,button:o}}))}renderButton(t,n,a,s){if(!a)return'<button class="btn btn--empty" disabled></button>';const r=a.price,o=a.point;let i="";return t==="spread"?i=`${o>0?`+${o}`:o}<br>${r}`:t==="money"?i=r:t==="total"&&(i=`${s}${o}<br>${r}`),`<button class="btn"
                    data-bet-type="${t}"
                    data-team="${n}"
                    data-price="${r}"
                    ${o?`data-point="${o}"`:""}>
            ${i}
        </button>`}render(){const t=this.theme==="dark",n=this.oddsMarkets,a=n&&(n.h2h||n.totals||n.spreads),s=!this.isDisabled&&a,r=this.getGameStatus(),o=this.scoreboard,i=o?.home_score||0,l=o?.away_score||0,u=r?.type==="live"||r?.type==="final",d=n?.spreads?.outcomes?.find(h=>h.name===this.homeTeam),f=n?.spreads?.outcomes?.find(h=>h.name===this.awayTeam),m=n?.h2h?.outcomes?.find(h=>h.name===this.homeTeam),p=n?.h2h?.outcomes?.find(h=>h.name===this.awayTeam),g=n?.totals?.outcomes?.find(h=>h.name==="Over"),c=n?.totals?.outcomes?.find(h=>h.name==="Under");this.shadowRoot.innerHTML=`
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

            <div class="card ${r?`card--${r.type}`:""}">
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
                            ${this.renderButton("money","home",m)}
                            ${this.renderButton("total","over",g,"O")}
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
        `,s&&this.shadowRoot.querySelectorAll(".btn:not(.btn--empty)").forEach(h=>{const _=h.dataset.betType,y=h.dataset.team,T=h.dataset.price,E=h.dataset.point||null;h.addEventListener("click",k=>this.handleButtonClick(k,_,y,T,E))})}}customElements.define("bma-bet-match-card",ip);class lp extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}static get observedAttributes(){return["data-match-guid","data-match-title","data-match-scheduled-at","data-match-home-team","data-match-away-team","data-match-home-score","data-match-away-score","data-match-scoreboard","data-match-sport-id","data-sync-theme"]}attributeChangedCallback(t,n,a){n!==a&&this.render()}get matchGuid(){return this.getAttribute("data-match-guid")||""}get matchTitle(){return this.getAttribute("data-match-title")||"Match"}get scheduledAt(){return this.getAttribute("data-match-scheduled-at")||""}get homeTeam(){return this.getAttribute("data-match-home-team")||"Home"}get awayTeam(){return this.getAttribute("data-match-away-team")||"Away"}get homeScore(){const t=this.getAttribute("data-match-home-score");return t!=null&&t!==""?t:null}get awayScore(){const t=this.getAttribute("data-match-away-score");return t!=null&&t!==""?t:null}get scoreboardData(){const t=this.getAttribute("data-match-scoreboard");if(!t)return null;try{return typeof t=="string"?JSON.parse(t):t}catch(n){return console.warn("[bma-match-status] Failed to parse scoreboard data:",n),null}}get sportId(){return this.getAttribute("data-match-sport-id")||""}get theme(){return this.getAttribute("data-sync-theme")||"dark"}getMatchStatus(){const t=this.scoreboardData,n=this.homeScore!==null&&this.awayScore!==null;let a=!1;if(this.scheduledAt){let o=this.scheduledAt;!o.includes("Z")&&!o.match(/[+-]\d{2}:\d{2}$/)&&(o=o+"Z");const i=new Date(o),l=new Date(Date.now()-300*1e3);a=i<l}let s="UPCOMING",r=null;if(t?.time_remaining){const o=t.time_remaining;o==="Final"?(s="FINAL",r="Final"):o==="In Progress"?a?(s="IN_PROGRESS",r="In Progress"):(s="UPCOMING",r="Upcoming"):(s="IN_PROGRESS",r=o)}else n?(s="FINAL",r="Final"):(s="UPCOMING",r="Upcoming");return{status:s,timeRemaining:r}}render(){const{status:t,timeRemaining:n}=this.getMatchStatus(),a=this.homeScore!==null&&this.awayScore!==null,s=this.scheduledAt?hn.formatDateLocal(this.scheduledAt,{timeZoneName:"short"}):"",r=t==="FINAL"?"match-status-card--past":"";this.shadowRoot.innerHTML=`
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
    `}}customElements.define("bma-match-status",lp);class Dt extends HTMLElement{static currentlyExpanded=null;constructor(){super(),this.attachShadow({mode:"open"}),this.expanded=!1}static get observedAttributes(){return["data-rank","data-username","data-user-guid","data-tournament-dollars","data-total-betslips","data-total-payout","data-combined-betslips","data-badge-class","data-is-current-user","data-sync-theme"]}get rank(){return this.getAttribute("data-rank")||""}get username(){return this.getAttribute("data-username")||"Unknown"}get userGuid(){return this.getAttribute("data-user-guid")||""}get tournamentDollars(){return this.getAttribute("data-tournament-dollars")||"0"}get totalBetslips(){return this.getAttribute("data-total-betslips")||"0"}get totalPayout(){return this.getAttribute("data-total-payout")||"0"}get combinedBetslips(){const t=this.getAttribute("data-combined-betslips");if(!t)return[];try{return JSON.parse(t)}catch(n){return console.error("[bma-leaderboard-card] Error parsing combined_betslips:",n),[]}}get badgeClass(){return this.getAttribute("data-badge-class")||""}get isCurrentUser(){return this.getAttribute("data-is-current-user")==="true"}get theme(){return this.getAttribute("data-sync-theme")||"dark"}connectedCallback(){this.render(),this.attachEventListeners()}attributeChangedCallback(t,n,a){n!==a&&(this.render(),this.attachEventListeners())}toggleExpanded(){Dt.currentlyExpanded&&Dt.currentlyExpanded!==this&&Dt.currentlyExpanded.collapse(),this.expanded=!this.expanded;const t=this.shadowRoot.querySelector(".leaderboard-card__details"),n=this.shadowRoot.querySelector(".expand-icon");this.expanded?(t.style.display="block",n.textContent="▼",Dt.currentlyExpanded=this):(t.style.display="none",n.textContent="▶",Dt.currentlyExpanded===this&&(Dt.currentlyExpanded=null))}collapse(){this.expanded=!1;const t=this.shadowRoot.querySelector(".leaderboard-card__details"),n=this.shadowRoot.querySelector(".expand-icon");t&&(t.style.display="none"),n&&(n.textContent="▶")}attachEventListeners(){const t=this.shadowRoot.querySelector(".leaderboard-card");t&&t.addEventListener("click",()=>this.toggleExpanded())}renderBetsTable(){const t=this.combinedBetslips;if(!t||t.length===0)return'<p class="no-bets">No bets available</p>';const n=t.filter(s=>{const r=s.bet||[];if(r.length===0)return!1;const o=r[0],i=Object.keys(o)[0];return o[i]?.reconciled===!0});if(n.length===0)return'<p class="no-bets">No reconciled bets</p>';let a=`
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
        `}}customElements.define("bma-leaderboard-card",Dt);class Ni{static isPayout(t){if(!t?.Bet||!t?.Match)return console.error("[CoreBetSlip.isPayout] Invalid bet object - missing Bet or Match data"),!1;const{type:n,scope:a}=t.Bet,{home_team_id:s,home_team_score:r,away_team_id:o,away_team_score:i}=t.Match,l=n?.toUpperCase()||"",u=parseFloat(r)||0,d=parseFloat(i)||0;if(u===0&&d===0)return console.warn("[CoreBetSlip.isPayout] Invalid scores - both teams have 0 points"),!1;switch(console.log(`[CoreBetSlip.isPayout] Evaluating ${l} bet:`,{home:`${s} (${u})`,away:`${o} (${d})`,scope:a}),l){case"MONEY":return this._evaluateMoneyline(a.team_id,s,o,u,d);case"SPREAD":return this._evaluateSpread(a.team_id,a.point,s,o,u,d);case"TOTAL":return this._evaluateTotal(a.over,a.under,u,d);case"PROP":return console.warn("[CoreBetSlip.isPayout] PROP bet evaluation not implemented"),!1;case"PARLAY":return console.warn("[CoreBetSlip.isPayout] PARLAY bet evaluation not implemented"),!1;default:return console.warn("[CoreBetSlip.isPayout] Unknown bet type:",l),!1}}static _evaluateMoneyline(t,n,a,s,r){const o=t===n,i=t===a;if(!o&&!i)return console.warn("[CoreBetSlip.isPayout] Betted team does not match home or away team"),!1;const l=s>r,u=r>s;if(s===r)return console.log("[CoreBetSlip.isPayout] MONEY - PUSH (tie game)"),!1;const f=o&&l||i&&u;return console.log(`[CoreBetSlip.isPayout] MONEY - ${f?"WON":"LOST"}`),f}static _evaluateSpread(t,n,a,s,r,o){const i=t===a,l=t===s;if(!i&&!l)return console.warn("[CoreBetSlip.isPayout] Betted team does not match home or away team"),!1;const u=parseFloat(n)||0;let d=r,f=o;i?d=r+u:f=o+u;const m=d>f,p=f>d;if(d===f)return console.log("[CoreBetSlip.isPayout] SPREAD - PUSH (exact spread)"),!1;const c=i&&m||l&&p;return console.log(`[CoreBetSlip.isPayout] SPREAD (${u>0?"+":""}${u}) - ${c?"WON":"LOST"}`),c}static _evaluateTotal(t,n,a,s){const r=a+s,o=t&&t!=="";if(!o&&!(n&&n!==""))return console.warn("[CoreBetSlip.isPayout] No over/under value specified"),!1;const l=parseFloat(o?t:n);if(r===l)return console.log("[CoreBetSlip.isPayout] TOTAL - PUSH (exact line)"),!1;let u=!1;return o?(u=r>l,console.log(`[CoreBetSlip.isPayout] TOTAL OVER ${l} (actual: ${r}) - ${u?"WON":"LOST"}`)):(u=r<l,console.log(`[CoreBetSlip.isPayout] TOTAL UNDER ${l} (actual: ${r}) - ${u?"WON":"LOST"}`)),u}static calcPayout(t){if(!t?.Bet)return console.error("[CoreBetSlip] Invalid bet object - missing Bet data"),0;const{type:n,odds:a,stake:s}=t.Bet,r=n?.toUpperCase()||"",o=parseFloat(a)||0,i=parseFloat(s)||0;if(i<=0)return console.warn("[CoreBetSlip] Invalid stake amount:",i),0;if(o===0)return console.warn("[CoreBetSlip] Invalid odds value:",o),0;let l=0;switch(r){case"SPREAD":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] SPREAD payout calculated:",{odds:o,stake:i,payout:l});break;case"MONEY":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] MONEY payout calculated:",{odds:o,stake:i,payout:l});break;case"TOTAL":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] TOTAL payout calculated:",{odds:o,stake:i,payout:l});break;case"PROP":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] PROP payout calculated:",{odds:o,stake:i,payout:l});break;case"PARLAY":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] PARLAY payout calculated (single odds):",{odds:o,stake:i,payout:l});break;default:console.warn("[CoreBetSlip] Unknown bet type:",r),l=0;break}return parseFloat(l.toFixed(2))}static calcAmericanOddsPayout(t,n){let a=0;return t>0?a=n*(t/100):t<0?a=n/(Math.abs(t)/100):a=0,n+a}static americanToDecimal(t){return t>0?t/100+1:t<0?100/Math.abs(t)+1:1}static calcImpliedProbability(t){return t>0?100/(t+100)*100:t<0?Math.abs(t)/(Math.abs(t)+100)*100:0}}const cp={class:"home-layout"},dp=["data-user-name"],up={__name:"home_route",setup(e){const t=ht(),n=be();window.CoreBetSlip=Ni,document.addEventListener("click",i=>{const l=i.target;l&&l.dataset?.publishRouteHome&&(l.dataset.publishRouteHome.startsWith("ROUTE.HOME.SODAPOP_PLAY.")&&document.querySelectorAll("#sodapop_play .btn-info-sm").forEach(d=>{d===l?(d.style.background="var(--app-core-color--yellow-1__dark--brand, #ffcc33)",d.style.color="var(--app-core-color--green-1__dark--brand, #27794d)"):(d.style.background="#27794d1A",d.style.color="#fff")}),W.publish(l.dataset.publishRouteHome,`{"ts": ${Date.now()} }`)),l&&l.dataset?.sodapopClose&&neodigmSodaPop&&neodigmSodaPop.close()});const a=(i,l=!1)=>{const u=document.querySelector(".tournaments-grid");if(!u)return;u.innerHTML="";const d=document.getElementById("app"),f=d?.getAttribute("data-sync-theme")||"dark",m=d?.getAttribute("data-sync-lang")||"en",p=d?.getAttribute("data-sync-motif")||"brand",g=c=>{const h=document.createElement("article"),_=c.status||"DRAFT";h.className=`tournament-item tournament-status-${_.toLowerCase()}`;const y=document.createElement("bma-tournament-card");return y.setAttribute("data-bma-tourn-id",c.id||""),y.setAttribute("data-bma-tourn-guid",c.guid||""),y.setAttribute("data-bma-tourn-caption",c.caption||""),y.setAttribute("data-bma-tourn-tagline",c.tagline||""),y.setAttribute("data-bma-tourn-window_start_time",c.window_start_time||""),y.setAttribute("data-bma-tourn-window_end_time",c.window_end_time||""),y.setAttribute("data-bma-tourn-sports_allowed",Array.isArray(c.sports_allowed)?JSON.stringify(c.sports_allowed):c.sports_allowed||""),y.setAttribute("data-bma-tourn-entities",c.entities?JSON.stringify(c.entities):""),y.setAttribute("data-bma-tourn-tournament_dollars",c.tournament_dollars||""),y.setAttribute("data-bma-tourn-prize_distro",Array.isArray(c.prize_distro)?JSON.stringify(c.prize_distro):c.prize_distro||""),y.setAttribute("data-bma-tourn-matches",Array.isArray(c.matches_guids)?JSON.stringify(c.matches_guids):c.matches_guids||""),y.setAttribute("data-bma-tourn-matches_expanded",Array.isArray(c.matches_expanded)?JSON.stringify(c.matches_expanded):c.matches_expanded||""),y.setAttribute("data-bma-tourn-entry_fee",c.entry_fee||""),y.setAttribute("data-bma-tourn-rake",c.rake||""),y.setAttribute("data-bma-tourn-tags",Array.isArray(c.tags)?JSON.stringify(c.tags):c.tags||""),y.setAttribute("data-bma-tourn-comments",c.comments||""),y.setAttribute("data-bma-tourn-class",c.status||""),y.setAttribute("data-bma-tourn-status",c.status||""),y.setAttribute("data-sync-theme",f),y.setAttribute("data-sync-lang",m),y.setAttribute("data-sync-motif",p),y.setAttribute("data-n55-size","medium"),y.setAttribute("data-n55-enchanted-cta-ambient","none"),y.setAttribute("data-tourn-custom-css",""),y.setAttribute("data-tourn-trophy","0"),y.setAttribute("data-bma-tourn-focus",""),y.setAttribute("data-bma-tourn-wait","false"),h.appendChild(y),h};l?i.forEach(c=>{const h=document.createElement("div");h.className="tournament-category";const _=document.createElement("header");_.className="tournament-category-header";const y=document.createElement("h2");if(y.className="category-title",y.textContent=c.title,_.appendChild(y),c.subtext){const T=document.createElement("p");T.className="category-subtext",T.textContent=c.subtext,_.appendChild(T)}h.appendChild(_),u.appendChild(h),c.tournaments.forEach(T=>{const E=g(T);u.appendChild(E)})}):i.forEach(c=>{const h=g(c);u.appendChild(h)})},s=i=>{document.querySelectorAll("bma-tournament-card").forEach(u=>{u.setAttribute("data-sync-theme",i)})},r=i=>{const l=document.querySelectorAll("bma-tournament-card"),u=Date.now().toString();l.forEach(d=>{if(d===i){if(d.setAttribute("data-bma-tourn-focus",u),d.shadowRoot){const f=d.shadowRoot.querySelector(".card-focus__feedback");f&&(f.style.visibility="visible")}typeof neodigmMarquee<"u"&&neodigmMarquee.init()}else if(d.setAttribute("data-bma-tourn-focus",""),d.shadowRoot){const f=d.shadowRoot.querySelector(".card-focus__feedback");f&&(f.style.visibility="hidden")}})},o=i=>{const{action:l,tournamentId:u,tournamentGuid:d,tournamentStatus:f,...m}=i.detail;console.log("[home_route] Tournament action:",{action:l,tournamentId:u,tournamentGuid:d,tournamentStatus:f,...m}),r(i.target),W.publish("WC.TOURN_ACTION",JSON.stringify({action:l,tournamentId:u,tournamentGuid:d,tournamentStatus:f,...m,timestamp:Date.now()}))};return jt(async()=>{if(!n.appSession.session_user.authenticated){console.log("User not authenticated, redirecting to signin"),t.push({name:"signin_route"});return}const i=document.getElementById("app");if(i){const u=n.appCLIFeatures.features.theme?.state,d=n.appCLIFeatures.features.lang?.state,f=n.appCLIFeatures.features.motif?.state,m=n.appSession.session_user.guid;u&&(i.setAttribute("data-sync-theme",u),document.body.setAttribute("data-sync-theme",u)),d&&i.setAttribute("data-sync-lang",d),f&&i.setAttribute("data-sync-motif",f),m&&i.setAttribute("data-user-guid",m)}window._homeRouteRenderCards=a;const l=W.subscribe("APP.ROUTE_SYNC",(u,d)=>{try{const f=JSON.parse(d);f.theme&&s(f.theme.state)}catch(f){console.error("[home_route] Failed to parse APP.ROUTE_SYNC data:",f)}});window._homeRoutePubSubToken=l,console.log("[home_route] Publishing ROUTE.HOME_ONMOUNT"),W.publish("ROUTE.HOME_ONMOUNT",JSON.stringify({timestamp:Date.now()})),document.addEventListener("bma-tournament-action",o)}),Ta(()=>{document.removeEventListener("bma-tournament-action",o),delete window._homeRouteRenderCards,window._homeRoutePubSubToken&&W.unsubscribe(window._homeRoutePubSubToken)}),(i,l)=>(Xe(),ft("main",cp,[P("bma-app-head-top",{"data-user-name":Ft(n).appSession.session_user.name||"Guest"},null,8,dp),l[0]||(l[0]=Gt('<bma-app-head-mid data-selected-tab="head_mid_lobby"></bma-app-head-mid><bma-app-head-sports data-selected-chip="all"></bma-app-head-sports><section class="tournaments-section"><div class="tournaments-grid"></div></section><bma-app-foot data-selected-item="foot_all_sports"></bma-app-foot>',4))]))}},pp={};function fp(e,t){return Xe(),ft("main",null,[...t[0]||(t[0]=[P("h1",null,"App FAQ",-1)])])}const Qn=qt(pp,[["render",fp]]),hp={};function gp(e,t){return Xe(),ft("main",null,[...t[0]||(t[0]=[P("h1",null,"App Help",-1)])])}const mp=qt(hp,[["render",gp]]),It=class It{static async establishSSE(t,n,a,s=!0){this.strChat=a,this.isDebug=s,console.log(" ~... sse client 'Q' | ","Q"),t=t.replaceAll("##SSEID##",n).replaceAll("##LASTKEY##",localStorage.getItem("sse_lastkey")||-1),this.isDebug&&console.warn(" ~... sse push uri | ",t),this.sseEvent&&(this.sseEvent.close(),this.sseEvent=null),this.sseEvent=new EventSource(t),this.sseEvent.onopen=function(r){It.onSSEOpen(r)},this.sseEvent.onmessage=function(r){It.onSSEMessage(r)},this.sseEvent.onerror=function(r){It.onSSEError(r)}}static async onSSEOpen(t){this.isDebug&&console.warn(" ~... sse push onSSEOpen ev | ",t)}static async onSSEMessage(t){let n=null;if(this.isDebug&&console.warn(" ~... sse push onSSEMessage ev | ",t),t?.data){localStorage.setItem("sse_lastkey",t?.data?.id||-1);try{if(n=JSON.parse(t.data),n?.class!="NO_MESSAGE")if(n?.class&&n?.msg)switch(n.class){case"BANNER_DISMISS":break;case"BANNER_MODAL":break;case"BANNER_MODAL_CLOSE":break;case"BUBBLE_CONFETTI":break;case"BUBBLE_MARQUEE":break;case"BUBBLE":break;case"CLI":break;case"CONSOLE":break;case"FEATURE_FLAG":break;case"MVV_POPUP":break;case"MVV_TOAST":n?.msg&&neodigmWired4Sound&&(neodigmWired4Sound.sound(5).vibrate(),neodigmToast.q(n.msg,"brand",4500),this.isDebug&&console.warn(" ~... sse push pushPackage.id class msg criterion  | ",n.id+" | "+n.class+" | "+n.msg+" | "+n.criterion));break;case"WEBNOTE":break;case"GUIDED_TOUR":break;case"META_MACRO":break;case"META_TEMPLATE":break;case"MVV_CAROUSEL":break;case"MVV_POPOVER":break;case"MVV_WIDGET":break;case"RECONNECT":break;case"TOURNAMENT_SYNC":this.isDebug&&console.warn(" ~... sse TOURNAMENT_SYNC | ",n),W.publish("SSE.CORE.TOURN_SYNC",JSON.stringify(n));break}else this.isDebug&&console.warn(" ~... sse push - invalid package - no class/msg");else this.isDebug&&console.warn(" ~... sse push - no message")}catch{this.isDebug&&console.warn(" ~... sse push - invalid package")}}}static async onSSEError(t){this.isDebug&&console.warn(" ~... sse push onSSEError ev | ",t)}static async disconnectSSE(t){this.isDebug&&console.warn(" ~... sse push disconnectSSE ev | ",t),this.sseEvent.close(),this.sseEvent=null}};It.sseEvent=null,It.strChat=null,It.isDebug=!0;let pa=It;class kt{static neodigmOpt={neodigmToast:!0,N55_GTM_DL_TOAST:"n55_gtm_dl_toast",neodigmSodaPop:!0,N55_SP_DISABLE_SCROLL:!0,N55_GTM_DL_POP_OPEN:"n55_gtm_dl_pop_open",N55_GTM_DL_POP_CLOSE:"n55_gtm_dl_pop_close",neodigmWired4Sound:!0,W4S_VOLUME:.022,EVENT_SOUNDS:!0,neodigmParallax:!0,PRLX_MOBILE:!1,neodigmMarquee:!0,neodigmEnchantedCTA:!0,N55_CTA_RND_TOUCH:14001,N55_GTM_DL_CTA:"n55_gtm_dl_cta",N55_CTA_LONG_TAP:3400,N55_CTA_FX:["alternate","emit","flash_danger","flash_warning","radius","scroll","shake"],neodigmKPI:!0,N55_GTM_DL_KPI:"n55_gtm_dl_kpi",neodigmPWA:!0,N55_PWA_TEMPLATE_ID:"js-pup-n55-pwa",neodigmCarousel:!0,N55_GTM_DL_CARSL:"n55_gtm_dl_carsl",N55_CARO_BLUR:!0,neodigmTulip:!0,neodigmPopTart:!0,N55_GTM_DL_POPTRT:"n55_gtm_dl_poptrt",neodigmAgent:!0,API_baseURI:"https://a55-wtt-api-v1.onrender.com/",API_ver:"v1",neodigmPicnic:!0,N55_GTM_DL_PICNIC:"n55_gtm_dl_picnic",neodigmWWInterval:!0,neodigmMetronome:{countTo:116,neodigmMarquee:132},N55_ZIND:{PopTart:264},CONSOLE_LOG_VER:!0,N55_DEBUG_lOG:!1,N55_AMPM_THEME:"light",N55_EVENT_HAPTIC:!0,N55_FLASH_TITLE:!0,N55_GENRE_MOTIF:"neodigm",N55_THEME_DEFAULT:"brand",N55_THEME_COLORS:{brand:["EDBA08","915E00","🟧"],primary:["92a8d1","364C75","🟦"],secondary:["EDCED0","978284","🟫"],success:["009473","003817","🟩"],white:["FFFFFF","FDFDFD","⬜"],ghost:["ffffff","000000","⬜"],danger:["DD4124","810000","🟥"],warning:["F5DF4D","988200","🟨"],info:["7BC4C4","1F6868","🟦"],disabled:["868686","767676","⬜"],night:["6a6a6a","242424","⬛"],marcom:["B163A3","5F4B8B","🟪"],party:["FF6F61","C93F60","🟪"]},N55_APP_STATE:{CONTEXT:"body",FIRST_TAP:!1,ONLINE:!0,PWA_READY:!1,PWA_CONTAIN:!1,SHAKE:!1,CONTEXTMNU:!1,FOCUS:!0,AMPM:"light",REDUCE_MOTION:!1},ROOT:document.querySelector(":root"),N55_TYPE:"https://fonts.googleapis.com/css?family=Roboto+Condensed:wght@100;300;400|Roboto+Slab:wght@300|Roboto+Mono:wght@300|Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,300,0,0"};static neodigmUtils=((t=document)=>({ver:"4.0.0",isMobile:function(){return t.body.clientWidth<=768},isTouch:function(){return typeof document.body.ontouchstart<"u"},f1210:function(){return Math.floor(Math.random()*10+1)},f02x:function(n){return Math.floor(Math.random()*n)},fPromiseJS:async function(n,a){return new Promise((s,r)=>{const o=Object.assign(n.createElement(LZString.decompress("㎆ぎॠข")),{type:LZString.decompress("அ〞샴ՠ蘆㠘쁎Ұΰ耀"),src:a});o.onload=s,o.onerror=r,n.getElementsByTagName("head")[0].appendChild(o)})},fAsyncJS:function(n,a,s){const r=Object.assign(n.createElement(LZString.decompress("㎆ぎॠข")),{type:LZString.decompress("அ〞샴ՠ蘆㠘쁎Ұΰ耀"),src:a});s&&(r.onload=function(){s()}),n.getElementsByTagName("head")[0].appendChild(r)},fAsyncCSS:function(n,a){let s=n.createElement("link");s.rel="stylesheet",s.href=a,n.getElementsByTagName("head")[0].appendChild(s)},data2prop:function(n){n=n.replace("data-","").toLowerCase();let a=n.split(""),s=[],r=!1;return a.forEach(o=>{o=="-"?r=!0:(s.push(r?o.toUpperCase():o),r=!1)}),s.join("")},doDataLayer:function(n,a){neodigmOpt.N55_DEBUG_lOG&&console.log("~ga | "+n+" | "+a),window.dataLayer&&window.dataLayer.push({event:n,msg:a})},isJSON:function(n){let a=!1;try{a=typeof JSON.parse(n)}catch{}return a=="object"},appStateListen:function(n){NeodigmKeylime.subscribe("mouseover",s=>{s?.target?.dataset?.n55TypeonHover&&neodigmUtils.typeOn(JSON.parse(s.target.dataset.n55TypeonHover))},!0),NeodigmKeylime.subscribe("click",s=>{neodigmOpt.N55_APP_STATE.FIRST_TAP||(neodigmOpt.N55_APP_STATE.FIRST_TAP=!0),neodigmOpt.neodigmTulip&&neodigmTulip.close();let r=neodigmUtils.walkDOM3(s?.target,"n55TypeonClick");r&&neodigmUtils.typeOn(JSON.parse(r))},!0),NeodigmKeylime.subscribe("touchstart",s=>{neodigmOpt.N55_APP_STATE.FIRST_TAP||(neodigmOpt.N55_APP_STATE.FIRST_TAP=!0),neodigmOpt.neodigmTulip&&neodigmTulip.close()},!0),NeodigmKeylime.subscribe("resize",s=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmCarousel&&neodigmCarousel.init(),neodigmOpt.neodigmTulip&&neodigmTulip.close(),neodigmOpt.neodigmPopTart&&neodigmPopTart.close()})},!0,window),NeodigmKeylime.subscribe("orientationchange",s=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmCarousel&&neodigmCarousel.init(),neodigmOpt.neodigmTulip&&neodigmTulip.close(),neodigmOpt.neodigmPopTart&&neodigmPopTart.close()})},!0,window),NeodigmKeylime.subscribe("scroll",s=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmTulip&&neodigmTulip.close()})},!0,window),neodigmOpt.N55_APP_STATE.REDUCE_MOTION=!window.matchMedia("(prefers-reduced-motion: no-preference)").matches;let a=document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelector("[data-n55-Ampm-theme]")?.dataset.n55AmpmTheme;a&&(neodigmOpt.N55_AMPM_THEME=neodigmOpt.N55_APP_STATE.AMPM=a)},prettyTimeRETIRE:n=>{let a=new Date(n).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"});return n=="Dec 31, 1969"&&(a=""),a},prettyTime:n=>new Date(n).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"}),capFirst:n=>n&&n[0].toUpperCase()+n.slice(1)||"",genHash:n=>(n=String(n),Math.abs(n.split("").reduce((a,s)=>(a<<5)-a+s.charCodeAt(0)|0,0))),flashTitle:(n=neodigmOpt.N55_THEME_DEFAULT,a=4e3)=>{neodigmOpt.N55_FLASH_TITLE&&(document?.n55Title||(document.n55Title=document.title),neodigmOpt?.N55_THEME_COLORS[n]&&(document.title=neodigmOpt.N55_THEME_COLORS[n][2]+document.n55Title),neodigmUtils.doSetT(function(){document.title=document.n55Title},a))},robinTheme:function(n=Object.keys(neodigmOpt.N55_THEME_COLORS)[0]){if(!neodigmMetronome.isPaused()){let a=[...document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelectorAll("[data-n55-theme")];const s=56;a.forEach((o,i)=>{o.dataset.n55Theme!="disabled"&&(o.n55Theme||(o.n55Theme=o.dataset.n55Theme),setTimeout(function(){o.dataset.n55Theme=n},i*s),setTimeout(function(){o.dataset.n55Theme=o.n55Theme},i*(s+s)))}),a=[...document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelectorAll("[data-n55-theme-pulse")];const r=256;a.forEach((o,i)=>{o.n55ThemePulse||(o.n55ThemePulse=o.dataset.n55ThemePulse),setTimeout(function(){o.dataset.n55ThemePulse=n},i*r),setTimeout(function(){o.dataset.n55ThemePulse=o.n55ThemePulse},i*r+3e3)}),neodigmUtils.flashTitle(n,2e3)}},countTo:async function(n,a,s=neodigmOpt.neodigmMetronome.countTo){const r=[16,s];return[...document.querySelectorAll(n)].forEach(function(o,i){let l=Math.abs(Number(o.textContent)-a);neodigmMetronome.unsubscribe(r[1]+i).subscribe(function(u){let d=Number(o.textContent);if(!Number.isNaN(d)&&!isNaN(d)&&a!=d){let f=l/r[0];f=Math.round(f),u!=0?o.textContent=d<a?d+f:d-f:o.textContent=a}},r[1]+i,r[0])}),neodigmUtils},typeOff:async function(n){let a=document.querySelector(n?.q1st);if(a){let s=a.textContent.length,r=window.getComputedStyle(a),o=Number(r.paddingTop.replace("px",""))+Number(r.paddingBottom.replace("px",""));for(a.offsetHeight&&(a.style.height=a.offsetHeight-o+"px");s;)setTimeout(()=>{a.textContent=a.textContent.replace(/.$/,"")},n.uniqueDelay*s--)}},typeOn:async function(n){let a=document.querySelector(n?.q1st);if(a){a.dataset.n55Typeon=0;let s=n.msg.replaceAll("|","   |   ")+"   ",r=s.split("|");if(n?.mode=="OFF")return neodigmUtils.typeOff({q1st:n.q1st,uniqueDelay:n.uniqueDelay}),neodigmUtils;if(n?.mode=="RANDOM"&&r.length){let o=a.dataset.n55Typeon=neodigmUtils.f02x(r.length);s=r[o]}neodigmUtils.typeOff({q1st:n.q1st,uniqueDelay:n.uniqueDelay/a.textContent.length-4}),neodigmMetronome.unsubscribe(n.uniqueDelay).subscribe(o=>{let i=s[s.length-(o+1)];i=="|"&&(i="",neodigmUtils.typeOff({q1st:n.q1st,uniqueDelay:n.uniqueDelay/a.textContent.length-4}),a.dataset.n55Typeon++),a.textContent+=i,n?.mode=="LOOP"&&o==0&&neodigmUtils.typeOn(n)},n.uniqueDelay,s.length)}return neodigmUtils},getValJSON:function(n,a){try{return JSON.parse(n)}catch{return JSON.parse('{ "'+a+'": "'+n+'" }')}},walkDOM3:function(n,a,s=!1){let r=null;if(!r&&n?.dataset[a]&&(r=n),!r&&n?.parentNode?.dataset[a]&&(r=n.parentNode),!r&&n.tagName!="BODY"&&n?.parentNode?.parentNode?.dataset[a]&&(r=n.parentNode.parentNode),r)return s?r:r.dataset[a]},doSetT:function(n,a){return neodigmOpt.neodigmWWInterval?window.setTimeoutN55(n,a):setTimeout(n,a)},shake:function(n,a=!0){return[...document.querySelectorAll(n)].forEach(function(s,r){s.classList.add("shake__an"),setTimeout(function(){s.classList.remove("shake__an")},460)}),kt.neodigmUtils},hardReload:function(n="n55reset"){const a=new URLSearchParams(window.location.search);a.set(n,new Date().getTime());const s=a.toString();window.location.search=s}}))}const _p={class:"auth-page"},bp={class:"auth-page-right"},yp={class:"auth-card"},vp={class:"form-group"},Tp={class:"form-group"},Ep={class:"password-input-wrapper"},Sp=["type"],Ap={style:{"text-align":"right"}},Op={class:"auth-link-center"},kp={__name:"signin_route",setup(e){const t=ht(),n=be(),a=(m="signin")=>{t.push({name:m})};let s=null;const r=Ve(!1),o=()=>{r.value=!r.value},i=(m=3,p=1)=>{switch(n.appCLIFeatures.features.motif.state){case"brand":m=3,p=1;break;case"white_label":m=3,p=4;break}const g=Math.floor(Math.random()*m)+p,c=document.querySelector(".img__bg")?.classList;c&&(c.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),c.add(`img__bg--${g}`)),s||(s=W.subscribe("APP__ROUTE_SYNC",(h,_)=>{const y=JSON.parse(_);switch(Object.keys(y)[0]){case"Motif":i();break;case"Lang":l();break}}))},l=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(m=>{const p=n.appCLIFeatures?.features?.lang?.state;let g=n.appMeta.microcopy.language.filter(c=>c.code==p)[0]?.copy;g=g.filter(c=>c[0]==m.dataset.syncMicrocopyText)[0],g&&(m.textContent=g[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(m=>{const p=n.appCLIFeatures?.features?.lang?.state;let g=n.appMeta.microcopy.language.filter(c=>c.code==p)[0]?.copy;g=g.filter(c=>c[0]==m.dataset.syncMicrocopyPlaceholder)[0],g&&(m.placeholder=g[1])})},u=m=>{kt.neodigmUtils().shake(m||"#inp__text--email")},d=()=>{let m=document.querySelectorAll("#inp__text--email")[0].value;neodigmUtils.messageNotification("Cub vs. Cardianals","https://mach-five-group.github.io/bma-landing/Assets/Bet%20Max%20Action-Full%20Lockup-600.png"),n.doCLI(m)},f=()=>{const m=document.querySelector("#inp__text--email"),p=document.querySelector("#inp__text--password");let g=null,c=null;if(!m?.value)g="Please enter your email",c="#inp__text--email";else if(m.value.indexOf("@")===-1||m.value.indexOf(".")===-1)g="Please enter a valid email address",c="#inp__text--email";else if(!p?.value)g="Please enter your password",c="#inp__text--password";else if(p.value.length<10)g="Password must be at least 10 characters",c="#inp__text--password";else{const h={email:m.value,hash:kt.neodigmUtils().genHash(p.value)};ve.doSignin(h,_=>{const E=(_?.entity?.tags||[]).find(k=>k.userName)?.userName||"";if(n.appSession.session_user.authenticated=!0,n.appSession.session_user.email=h.email,n.appSession.session_user.fname=_?.entity?.first,n.appSession.session_user.lname=_?.entity?.last,n.appSession.session_user.userName=E,n.appSession.session_user.name=E,n.appSession.session_user.guid=_?.entity?.guid,n.saveSessionUser(),n.appCLIFeatures.features.sse.state){const k=_?.entity?.guid||n.appSession.session_user.guid;pa.establishSSE("https://machfive-bmacdev-rest.onrender.com/v5/sse?appid=BMACORE&sseid=##SSEID##&lastkey=##LASTKEY##",k,n,!0)}})}g&&(u(c),neodigmToast.q(g,"danger"))};return jt(()=>{i(),l()}),(m,p)=>(Xe(),ft("div",_p,[p[10]||(p[10]=Gt('<div class="auth-page-left" data-v-9f21eb27><div class="auth-bg" data-v-9f21eb27><div class="auth-bg-image" data-v-9f21eb27></div><div class="auth-bg-image" data-v-9f21eb27></div><div class="auth-bg-image" data-v-9f21eb27></div></div><div class="auth-overlay" data-v-9f21eb27></div><div class="auth-branding-content" data-v-9f21eb27><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-9f21eb27><p class="auth-branding-tagline" data-v-9f21eb27>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-9f21eb27>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-9f21eb27> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),P("div",bp,[P("div",yp,[p[9]||(p[9]=P("div",{class:"auth-header"},[P("h1",{class:"auth-title","data-sync-microcopy-text":"welcome_back"},"Welcome Back"),P("p",{class:"auth-subtitle","data-sync-microcopy-text":"please_enter_your_details"},"Please enter your details to sign in")],-1)),P("form",{class:"auth-form",onSubmit:Oa(f,["prevent"])},[P("div",vp,[p[4]||(p[4]=P("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),P("input",{id:"inp__text--email",type:"text","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onDblclick:p[0]||(p[0]=g=>d())},null,32)]),P("div",Tp,[p[5]||(p[5]=P("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),P("div",Ep,[P("input",{id:"inp__text--password",type:r.value?"text":"password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password"},null,8,Sp),P("button",{type:"button",class:"password-toggle-btn",onClick:p[1]||(p[1]=g=>o()),tabindex:"-1"},[P("span",{class:$t(r.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),P("div",Ap,[P("a",{class:"auth-link",onClick:p[2]||(p[2]=g=>a("forgot_route")),"data-sync-microcopy-text":"forgot_password"},"Forgot Password?")]),p[8]||(p[8]=P("div",{class:"auth-actions"},[P("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"sign_in"},"Sign In")],-1)),P("p",Op,[p[6]||(p[6]=P("span",{"data-sync-microcopy-text":"dont_have_an_account"},"Don't have an account?",-1)),p[7]||(p[7]=Aa()),P("a",{class:"auth-link",onClick:p[3]||(p[3]=g=>a("signup_route")),"data-sync-microcopy-text":"sign_up"},"Sign Up")])],32)])])]))}},Pp=qt(kp,[["__scopeId","data-v-9f21eb27"]]),wp={class:"auth-page"},xp={__name:"signout_route",setup(e){const t=ht();be();const n=()=>{mvvLegit.doSignout()},a=()=>{t.push({name:"home_route"})};return(s,r)=>(Xe(),ft("div",wp,[r[1]||(r[1]=Gt('<div class="auth-page-left" data-v-900c11b9><div class="auth-bg" data-v-900c11b9><div class="auth-bg-image" data-v-900c11b9></div><div class="auth-bg-image" data-v-900c11b9></div><div class="auth-bg-image" data-v-900c11b9></div></div><div class="auth-overlay" data-v-900c11b9></div><div class="auth-branding-content" data-v-900c11b9><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-900c11b9><p class="auth-branding-tagline" data-v-900c11b9>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-900c11b9>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-900c11b9> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),P("div",{class:"auth-page-right"},[P("div",{class:"auth-card"},[r[0]||(r[0]=P("div",{class:"auth-header"},[P("h1",{class:"auth-title"},"Sign Out"),P("p",{class:"auth-subtitle"},"Confirm you want to sign out")],-1)),P("div",{class:"auth-actions"},[P("button",{onClick:n,class:"btn btn-red"}," Sign Out "),P("button",{onClick:a,class:"btn btn-outline"}," Cancel ")])])])]))}},Cp=qt(xp,[["__scopeId","data-v-900c11b9"]]),Rp={class:"auth-page"},Np={class:"auth-page-right",style:{display:"block"}},Lp={class:"auth-card auth-card-wide"},Dp={class:"form-group"},Ip={class:"form-group"},Mp={class:"form-group"},Bp={class:"form-group"},Fp={class:"form-group"},$p={class:"password-input-wrapper"},Up=["type"],Hp={class:"form-group"},Kp={class:"password-input-wrapper"},Yp=["type"],jp={class:"auth-link-center"},Gp={__name:"signup_route",setup(e){const t=ht(),n=be(),a=(h="signin")=>{t.push({name:h})};ve.getTJO()&&a("contests");let s=null;const r=Ve(!1),o=Ve(!1),i=()=>{r.value=!r.value},l=()=>{o.value=!o.value},u=(h=3,_=1)=>{switch(n.appCLIFeatures.features.motif.state){case"brand":h=3,_=1;break;case"white_label":h=3,_=4;break}const y=Math.floor(Math.random()*h)+_,T=document.querySelector(".img__bg")?.classList;T&&(T.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),T.add(`img__bg--${y}`)),s||(s=W.subscribe("APP__ROUTE_SYNC",(E,k)=>{const L=JSON.parse(k);switch(Object.keys(L)[0]){case"Motif":u();break;case"Lang":d();break}}))},d=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(h=>{const _=n.appCLIFeatures?.features?.lang?.state;let y=n.appMeta.microcopy.language.filter(T=>T.code==_)[0]?.copy;y=y.filter(T=>T[0]==h.dataset.syncMicrocopyText)[0],y&&(h.textContent=y[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(h=>{const _=n.appCLIFeatures?.features?.lang?.state;let y=n.appMeta.microcopy.language.filter(T=>T.code==_)[0]?.copy;y=y.filter(T=>T[0]==h.dataset.syncMicrocopyPlaceholder)[0],y&&(h.placeholder=y[1])})},f=h=>{kt.neodigmUtils().shake(h||"#inp__text--email")},m=()=>{let h=document.querySelectorAll("#inp__text--email")[0].value;n.doCLI(h)},p=h=>{const _=[];return h.length<10&&_.push("at least 10 characters"),/[a-z]/.test(h)||_.push("1 lowercase"),/[A-Z]/.test(h)||_.push("1 uppercase"),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(h)||_.push("1 special character"),/[^\x00-\x7F]/.test(h)&&_.push("ASCII characters only"),_},g=async()=>{const h=document.querySelector("#inp__text--username"),_=h?.value?.trim();if(_)try{(await ve.checkUserName(_)).userNameExists&&(neodigmToast.q("User name already taken|Please choose a different one","danger"),h.value="",h.focus())}catch(y){console.error("Error checking username:",y)}},c=()=>{const h=document.querySelector("#inp__text--first-name"),_=document.querySelector("#inp__text--last-name"),y=document.querySelector("#inp__text--email"),T=document.querySelector("#inp__text--username"),E=document.querySelector("#inp__text--password"),k=document.querySelector("#inp__text--verify-password");let L=null,D=null;if(!h?.value)L="Please enter your first name",D="#inp__text--first-name";else if(!_?.value)L="Please enter your last name",D="#inp__text--last-name";else if(!y?.value)L="Please enter your email",D="#inp__text--email";else if(y.value.indexOf("@")===-1||y.value.indexOf(".")===-1)L="Please enter a valid email address",D="#inp__text--email";else if(!T?.value)L="Please enter a user name",D="#inp__text--username";else if(!E?.value)L="Please enter a password",D="#inp__text--password";else{const F=p(E.value);if(F.length>0)L="Password must have:|"+F.join(", "),D="#inp__text--password";else if(!k?.value)L="Please verify your password",D="#inp__text--verify-password";else if(E.value!==k.value)L="Passwords do not match",D="#inp__text--verify-password";else{const A=h.value.trim(),C=_.value.trim(),U=[{userName:T.value.trim(),ts:Date.now()}],w={email:y.value,hash:kt.neodigmUtils().genHash(E.value),first:A,last:C,company:"",phone:"",tags:U};ve.doSignup(w,J=>{J.ok&&setTimeout(()=>{mvvLegit.doUNVERF()},1e3)})}}L&&(f(D),neodigmToast.q(L,"danger"))};return jt(()=>{u(),d()}),(h,_)=>(Xe(),ft("div",Rp,[_[22]||(_[22]=Gt('<div class="auth-page-left" data-v-0b6f1055><div class="auth-bg" data-v-0b6f1055><div class="auth-bg-image" data-v-0b6f1055></div><div class="auth-bg-image" data-v-0b6f1055></div><div class="auth-bg-image" data-v-0b6f1055></div></div><div class="auth-overlay" data-v-0b6f1055></div><div class="auth-branding-content" data-v-0b6f1055><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-0b6f1055><p class="auth-branding-tagline" data-v-0b6f1055>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-0b6f1055>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-0b6f1055> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),P("div",Np,[P("div",Lp,[_[21]||(_[21]=P("div",{class:"auth-header"},[P("h1",{class:"auth-title","data-sync-microcopy-text":"sign_up"},"Sign Up"),P("p",{class:"auth-subtitle","data-sync-microcopy-text":"please_enter_your_details_to_get_started"},"Please enter your details to get started")],-1)),P("form",{class:"auth-form",onSubmit:Oa(c,["prevent"])},[P("div",Dp,[_[11]||(_[11]=P("label",{for:"inp__text--first-name","data-sync-microcopy-text":"first_name"},"First Name",-1)),P("input",{id:"inp__text--first-name",type:"text","data-sync-microcopy-placeholder":"enter_your_first_name",placeholder:"Enter your first name",onKeyup:_[0]||(_[0]=Tt(y=>c(),["enter"]))},null,32)]),P("div",Ip,[_[12]||(_[12]=P("label",{for:"inp__text--last-name","data-sync-microcopy-text":"last_name"},"Last Name",-1)),P("input",{id:"inp__text--last-name",type:"text","data-sync-microcopy-placeholder":"enter_your_last_name",placeholder:"Enter your last name",onKeyup:_[1]||(_[1]=Tt(y=>c(),["enter"]))},null,32)]),P("div",Mp,[_[13]||(_[13]=P("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),P("input",{id:"inp__text--email",type:"text","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onDblclick:_[2]||(_[2]=y=>m()),onKeyup:_[3]||(_[3]=Tt(y=>c(),["enter"]))},null,32)]),P("div",Bp,[_[14]||(_[14]=P("label",{for:"inp__text--username","data-sync-microcopy-text":"username"},"User Name",-1)),P("input",{id:"inp__text--username",type:"text","data-sync-microcopy-placeholder":"public_alias",placeholder:"Public Alias",onBlur:_[4]||(_[4]=y=>g()),onKeyup:_[5]||(_[5]=Tt(y=>c(),["enter"]))},null,32)]),P("div",Fp,[_[15]||(_[15]=P("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),P("div",$p,[P("input",{id:"inp__text--password",type:r.value?"text":"password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password",onKeyup:_[6]||(_[6]=Tt(y=>c(),["enter"]))},null,40,Up),P("button",{type:"button",class:"password-toggle-btn",onClick:_[7]||(_[7]=y=>i()),tabindex:"-1"},[P("span",{class:$t(r.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])]),_[16]||(_[16]=P("small",{"data-sync-microcopy-text":"must_be_at_least_10_characters_long"},"Must be at least 10 characters long",-1))]),P("div",Hp,[_[17]||(_[17]=P("label",{for:"inp__text--verify-password","data-sync-microcopy-text":"verify_password"},"Verify Password",-1)),P("div",Kp,[P("input",{id:"inp__text--verify-password",type:o.value?"text":"password","data-sync-microcopy-placeholder":"re_enter_your_password",placeholder:"Re-enter your password",onKeyup:_[8]||(_[8]=Tt(y=>c(),["enter"]))},null,40,Yp),P("button",{type:"button",class:"password-toggle-btn",onClick:_[9]||(_[9]=y=>l()),tabindex:"-1"},[P("span",{class:$t(o.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),_[20]||(_[20]=P("div",{class:"auth-actions"},[P("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"sign_up"},"Sign Up")],-1)),P("p",jp,[_[18]||(_[18]=P("span",{"data-sync-microcopy-text":"already_have_an_account"},"Already have an account?",-1)),_[19]||(_[19]=Aa()),P("a",{class:"auth-link",onClick:_[10]||(_[10]=y=>a("signin_route")),"data-sync-microcopy-text":"log_in"},"Sign In")])],32)])])]))}},qp=qt(Gp,[["__scopeId","data-v-0b6f1055"]]),Wp={class:"auth-page"},Jp={class:"auth-page-right"},Vp={class:"auth-card"},zp={class:"form-group"},Qp={class:"auth-link-center"},Xp={__name:"forgot_route",setup(e){const t=ht(),n=be(),a=(u="signin_route")=>{t.push({name:u})};ve.getTJO()&&a("contests");let s=null;const r=(u=3,d=1)=>{switch(n.appCLIFeatures.features.motif.state){case"brand":u=3,d=1;break;case"white_label":u=3,d=4;break}const f=Math.floor(Math.random()*u)+d,m=document.querySelector(".img__bg")?.classList;m&&(m.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),m.add(`img__bg--${f}`)),s||(s=W.subscribe("APP__ROUTE_SYNC",(p,g)=>{const c=JSON.parse(g);switch(Object.keys(c)[0]){case"Motif":r();break;case"Lang":o();break}}))},o=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(u=>{const d=n.appCLIFeatures?.features?.lang?.state;let f=n.appMeta.microcopy.language.filter(m=>m.code==d)[0]?.copy;f=f.filter(m=>m[0]==u.dataset.syncMicrocopyText)[0],f&&(u.textContent=f[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(u=>{const d=n.appCLIFeatures?.features?.lang?.state;let f=n.appMeta.microcopy.language.filter(m=>m.code==d)[0]?.copy;f=f.filter(m=>m[0]==u.dataset.syncMicrocopyPlaceholder)[0],f&&(u.placeholder=f[1])})},i=u=>{kt.neodigmUtils().shake(u||"#inp__text--email")},l=()=>{const u=document.querySelector("#inp__text--email");let d=null,f=null;if(!u?.value)d="Please enter your email address",f="#inp__text--email";else if(u.value.indexOf("@")===-1||u.value.indexOf(".")===-1)d="Please enter a valid email address",f="#inp__text--email";else{const m={method:"GET",headers:ve.genHeaders()};fetch(ve.API_baseURI+"/bmac/"+ve.API_ver+"/acctEntity/forgot?CODE="+encodeURIComponent(u.value),m).then(p=>p.json()).then(p=>{p.ok?(neodigmToast.q("Password reset email sent!|Please check your inbox","success"),setTimeout(()=>{a("verf_link_route")},2e3)):neodigmToast.q("Failed to send reset email|Please try again","danger")}).catch(p=>{neodigmToast.q("An error occurred|Please try again","danger")});return}d&&(i(f),neodigmToast.q(d,"danger"))};return jt(()=>{r(),o()}),(u,d)=>(Xe(),ft("div",Wp,[d[7]||(d[7]=Gt('<div class="auth-page-left"><div class="auth-bg"><div class="auth-bg-image"></div><div class="auth-bg-image"></div><div class="auth-bg-image"></div></div><div class="auth-overlay"></div><div class="auth-branding-content"><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img"><p class="auth-branding-tagline">Daily Tournament Betting</p><p class="auth-branding-subtitle">Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer"> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),P("div",Jp,[P("div",Vp,[d[6]||(d[6]=P("div",{class:"auth-header"},[P("h1",{class:"auth-title","data-sync-microcopy-text":"forgot_password"},"Forgot Password"),P("p",{class:"auth-subtitle","data-sync-microcopy-text":"please_enter_your_email"},"Please enter your email to receive a password reset link")],-1)),P("form",{class:"auth-form",onSubmit:Oa(l,["prevent"])},[P("div",zp,[d[2]||(d[2]=P("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),P("input",{id:"inp__text--email",type:"text","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onKeyup:d[0]||(d[0]=Tt(f=>l(),["enter"]))},null,32)]),d[5]||(d[5]=P("div",{class:"auth-actions"},[P("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"send_reset_link"},"Send Reset Link")],-1)),P("p",Qp,[d[3]||(d[3]=P("span",{"data-sync-microcopy-text":"remember_your_password"},"Remember your password?",-1)),d[4]||(d[4]=Aa()),P("a",{class:"auth-link",onClick:d[1]||(d[1]=f=>a("signin_route")),"data-sync-microcopy-text":"sign_in"},"Sign In")])],32)])])]))}},Zp={class:"auth-page"},ef={class:"auth-page-right"},tf={class:"auth-card"},nf={class:"form-group"},af={class:"password-input-wrapper"},sf=["type"],rf={class:"form-group"},of={class:"password-input-wrapper"},lf=["type"],cf={__name:"resethash_route",setup(e){const t=ht(),n=be(),a=()=>{t.push({name:"home_route"})};let s=null;const r=Ve(!1),o=Ve(!1),i=()=>{r.value=!r.value},l=()=>{o.value=!o.value},u=(g=3,c=1)=>{switch(n.appCLIFeatures.features.motif.state){case"brand":g=3,c=1;break;case"white_label":g=3,c=4;break}const h=Math.floor(Math.random()*g)+c,_=document.querySelector(".img__bg")?.classList;_&&(_.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),_.add(`img__bg--${h}`)),s||(s=W.subscribe("APP__ROUTE_SYNC",(y,T)=>{const E=JSON.parse(T);switch(Object.keys(E)[0]){case"Motif":u();break;case"Lang":d();break}}))},d=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(g=>{const c=n.appCLIFeatures?.features?.lang?.state;let h=n.appMeta.microcopy.language.filter(_=>_.code==c)[0]?.copy;h=h.filter(_=>_[0]==g.dataset.syncMicrocopyText)[0],h&&(g.textContent=h[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(g=>{const c=n.appCLIFeatures?.features?.lang?.state;let h=n.appMeta.microcopy.language.filter(_=>_.code==c)[0]?.copy;h=h.filter(_=>_[0]==g.dataset.syncMicrocopyPlaceholder)[0],h&&(g.placeholder=h[1])})},f=g=>{kt.neodigmUtils().shake(g||"#inp__text--password")},m=g=>{const c=[];return g.length<10&&c.push("at least 10 characters"),/[a-z]/.test(g)||c.push("1 lowercase"),/[A-Z]/.test(g)||c.push("1 uppercase"),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(g)||c.push("1 special character"),/[^\x00-\x7F]/.test(g)&&c.push("ASCII characters only"),c},p=()=>{const g=document.querySelector("#inp__text--password"),c=document.querySelector("#inp__text--verify-password");let h=null,_=null;if(!g?.value)h="Please enter a password",_="#inp__text--password";else{const y=m(g.value);if(y.length>0)h="Password must have:|"+y.join(", "),_="#inp__text--password";else if(!c?.value)h="Please verify your password",_="#inp__text--verify-password";else if(g.value!==c.value)h="Passwords do not match",_="#inp__text--verify-password";else{const T=n.appSession.session_user.email||"",E={email:T,hash:kt.neodigmUtils().genHash(g.value),modified_by:T},k={method:"POST",body:JSON.stringify(E),headers:ve.genHeaders()};fetch(ve.API_baseURI+"/bmac/"+ve.API_ver+"/acctEntity/resetHash",k).then(L=>L.json()).then(L=>{L.ok?(neodigmToast.q("Password reset successful!|Signing you out...","success"),setTimeout(()=>{mvvLegit.doSignout()},4e3)):neodigmToast.q("Password reset failed|Please try again","danger")}).catch(L=>{neodigmToast.q("An error occurred|Please try again","danger")});return}}h&&(f(_),neodigmToast.q(h,"danger"))};return jt(()=>{u(),d()}),(g,c)=>(Xe(),ft("div",Zp,[c[9]||(c[9]=Gt('<div class="auth-page-left" data-v-2ff7f7f3><div class="auth-bg" data-v-2ff7f7f3><div class="auth-bg-image" data-v-2ff7f7f3></div><div class="auth-bg-image" data-v-2ff7f7f3></div><div class="auth-bg-image" data-v-2ff7f7f3></div></div><div class="auth-overlay" data-v-2ff7f7f3></div><div class="auth-branding-content" data-v-2ff7f7f3><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-2ff7f7f3><p class="auth-branding-tagline" data-v-2ff7f7f3>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-2ff7f7f3>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-2ff7f7f3> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),P("div",ef,[P("div",tf,[c[8]||(c[8]=P("div",{class:"auth-header"},[P("h1",{class:"auth-title","data-sync-microcopy-text":"reset_password"},"Reset Password"),P("p",{class:"auth-subtitle","data-sync-microcopy-text":"please_enter_your_new_password"},"Please enter your new password")],-1)),P("form",{class:"auth-form",onSubmit:Oa(p,["prevent"])},[P("div",nf,[c[4]||(c[4]=P("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),P("div",af,[P("input",{id:"inp__text--password",type:r.value?"text":"password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password",onKeyup:c[0]||(c[0]=Tt(h=>p(),["enter"]))},null,40,sf),P("button",{type:"button",class:"password-toggle-btn",onClick:c[1]||(c[1]=h=>i()),tabindex:"-1"},[P("span",{class:$t(r.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])]),c[5]||(c[5]=P("small",{"data-sync-microcopy-text":"must_be_at_least_10_characters_long"},"Must be at least 10 characters long",-1))]),P("div",rf,[c[6]||(c[6]=P("label",{for:"inp__text--verify-password","data-sync-microcopy-text":"verify_password"},"Verify Password",-1)),P("div",of,[P("input",{id:"inp__text--verify-password",type:o.value?"text":"password","data-sync-microcopy-placeholder":"re_enter_your_password",placeholder:"Re-enter your password",onKeyup:c[2]||(c[2]=Tt(h=>p(),["enter"]))},null,40,lf),P("button",{type:"button",class:"password-toggle-btn",onClick:c[3]||(c[3]=h=>l()),tabindex:"-1"},[P("span",{class:$t(o.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),P("div",{class:"auth-actions"},[c[7]||(c[7]=P("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"reset_password"},"Reset Password",-1)),P("button",{type:"button",onClick:a,class:"btn btn-outline"}," Cancel ")])],32)])])]))}},df=qt(cf,[["__scopeId","data-v-2ff7f7f3"]]),uf={class:"auth-page"},pf={class:"auth-page-right"},ff={class:"auth-card"},hf={class:"verification-content"},gf={class:"timer-display"},mf={__name:"verf_link_route",setup(e){const t=ht();wi(),be();const n=Ve(7200);let a=null;const s=o=>{const i=Math.floor(o/3600),l=Math.floor(o%3600/60),u=o%60;return`${i.toString().padStart(2,"0")}:${l.toString().padStart(2,"0")}:${u.toString().padStart(2,"0")}`},r=()=>{a=setInterval(()=>{n.value--,n.value<=0&&(clearInterval(a),neodigmWired4Sound.sound(14),t.push({name:"splash_route"}))},1e3)};return jt(()=>{r()}),Ta(()=>{a&&clearInterval(a)}),(o,i)=>(Xe(),ft("div",uf,[i[4]||(i[4]=Gt('<div class="auth-page-left" data-v-f5b4a3c8><div class="auth-bg" data-v-f5b4a3c8><div class="auth-bg-image" data-v-f5b4a3c8></div><div class="auth-bg-image" data-v-f5b4a3c8></div><div class="auth-bg-image" data-v-f5b4a3c8></div></div><div class="auth-overlay" data-v-f5b4a3c8></div><div class="auth-branding-content" data-v-f5b4a3c8><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-f5b4a3c8><p class="auth-branding-tagline" data-v-f5b4a3c8>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-f5b4a3c8>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-f5b4a3c8> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),P("div",pf,[P("div",ff,[i[3]||(i[3]=P("div",{class:"auth-header"},[P("h1",{class:"auth-title"},"Check Your Email"),P("p",{class:"auth-subtitle"},"A verification link has been sent to the email address you provided.")],-1)),P("div",hf,[i[0]||(i[0]=P("p",{class:"verification-instructions"},"Please click on that link to continue.",-1)),i[1]||(i[1]=P("p",{class:"verification-note"},"The link will expire in 2 hours.",-1)),i[2]||(i[2]=P("p",{class:"verification-note"},"Remember to check your spam folder.",-1)),P("div",gf,ao(s(n.value)),1)])])])]))}},_f=qt(mf,[["__scopeId","data-v-f5b4a3c8"]]),fs=Su({history:nu(),routes:[{path:"/",name:"splash_route",component:Wr},{path:"/splash_route",name:"splash_route",component:Wr},{path:"/error_route",name:"error_route",component:Qn},{path:"/forgot_route",name:"forgot_route",component:Xp},{path:"/resetforgot_route",name:"resetforgot_route",component:Qn},{path:"/resethash_route",name:"resethash_route",component:df},{path:"/signin_route",name:"signin_route",component:Pp},{path:"/signout_route",name:"signout_route",component:Cp},{path:"/signup_route",name:"signup_route",component:qp},{path:"/verf_link_route",name:"verf_link_route",component:_f},{path:"/offline_route",name:"offline_route",component:Qn},{path:"/home_route",name:"home_route",component:up},{path:"/appFAQ",name:"appFAQ",component:Qn},{path:"/appHelp",name:"appHelp",component:mp}]}),Ue={updateTDBalance(e,t){const n=document.querySelector(e);if(!n)return;t%1!==0?n.textContent=t.toFixed(2):neodigmUtils.countTo(e,t)},categorizeTournaments(e,t,n,a){const s=[],r=l=>(l.entities?.guids||[]).includes(a),o=l=>(l.sports_allowed||[]).length===1,i=l=>(l.sports_allowed||[]).length>1;if(t==="lobby"&&n==="all"){const l=e.filter(g=>r(g)&&(g.status==="LOCKED"||g.class==="LOCKED"));l.length>0&&s.push({title:"Your Active Tournaments",subtext:`Currently in progress • ${l.length} tournament${l.length!==1?"s":""}`,tournaments:l});const u=e.filter(g=>r(g)&&(g.status==="UPCOMING"||g.class==="UPCOMING"));u.length>0&&s.push({title:"Your Upcoming Tournaments",subtext:`Joined, not yet started • ${u.length} tournament${u.length!==1?"s":""}`,tournaments:u});const d=e.filter(g=>!r(g)&&(g.status==="UPCOMING"||g.class==="UPCOMING")&&o(g));d.length>0&&s.push({title:"Upcoming Single-Sport Tournaments",subtext:`Focused competitions • ${d.length} tournament${d.length!==1?"s":""}`,tournaments:d});const f=e.filter(g=>!r(g)&&(g.status==="UPCOMING"||g.class==="UPCOMING")&&i(g));f.length>0&&s.push({title:"Upcoming Multi-Sport Tournaments",subtext:`Cross-league action • ${f.length} tournament${f.length!==1?"s":""}`,tournaments:f});const m=e.filter(g=>r(g)&&(g.status==="COMPLETED"||g.class==="COMPLETED")).slice(0,10);m.length>0&&s.push({title:"Your Recently Completed Tournaments",subtext:`Check your results • ${m.length} tournament${m.length!==1?"s":""}`,tournaments:m});const p=e.filter(g=>!r(g)&&(g.status==="COMPLETED"||g.class==="COMPLETED")).slice(0,20);p.length>0&&s.push({title:"Recently Completed Tournaments",subtext:`Explore past competitions • ${p.length} tournament${p.length!==1?"s":""}`,tournaments:p})}else s.push({title:"Tournaments",subtext:`${e.length} tournament${e.length!==1?"s":""}`,tournaments:e});return s},updateTournamentDashboard(e){if(!e)return;console.log("[Dashboard Update] Starting dashboard update for:",e.caption);const t=be();t.appSession?.session_user?.guid;const n=e.tournament_dollars||1e4;let a=0,s=0,r=0;if(t.coreBetSlip&&t.coreBetSlip.length>0){const h=t.coreBetSlip[t.coreBetSlip.length-1].data.filter(_=>_.tournament_guid===e.guid);console.log("[Dashboard Update] Found",h.length,"existing bets for this tournament"),h.forEach(_=>{(_.bet||[]).forEach(T=>{Object.keys(T).filter(k=>k!=="short_title").forEach(k=>{const L=T[k];L&&(L.stake&&(a+=parseFloat(L.stake)),L.reconciled===!0&&L.payout>0&&(s+=parseFloat(L.payout)))})})})}const o=document.querySelector("#summary-stake");if(o){const c=parseFloat(o.textContent)||0;r=Math.max(0,c-a),console.log("[Dashboard Update] Summary total stakes:",c,"Pending:",r)}const i=a+r,l=n-a-r+s;console.log("[Dashboard Update] TD$:",n,"Committed:",a,"Pending:",r,"Payouts:",s,"=> Balance:",l);const u=document.getElementById("dashboard-td-balance");u&&(u.textContent=`TD$ ${l.toLocaleString()}`,l<0?u.style.color="#FF5252":l<n*.2?u.style.color="#FF9800":u.style.color="var(--app-core-color--yellow-3__dark--brand, #F7C60D)");const d=document.getElementById("dashboard-td-pending"),f=document.querySelector(".tourn-dashboard__gauge-fill--pending");if(d){const c=r>0?r:i;if(d.textContent=`TD$ ${c.toLocaleString()}`,f){const h=Math.min(c/n*100,100);f.style.width=`${h}%`}}const m=document.querySelector(".tourn-dashboard__gauge-fill--balance");if(m){const c=Math.max(l/n*100,0);m.style.width=`${c}%`}const p=document.getElementById("dashboard-participants"),g=document.querySelector(".tourn-dashboard__gauge-fill--participants");if(p){const c=e.entities?.guids?.length||0,h=e.entities?.max||100;if(p.textContent=`${c}/${h}`,g){const _=c/h*100;g.style.width=`${_}%`}}},renderMatchCards(e){if(!e||!e.matches_expanded)return;const t=document.querySelector(".select-grid");if(!t)return;t.innerHTML="";const n=new Date,a=[...e.matches_expanded].sort((r,o)=>{const i=new Date(r.scheduled_at),l=new Date(o.scheduled_at),u=i<n,d=l<n;return u&&!d?1:!u&&d?-1:i-l}),s=()=>{const o=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let i=0;o&&be().coreTourn.length>0&&(i=be().coreTourn[be().coreTourn.length-1].data.find(g=>g.guid===o)?.tournament_dollars||0);const l=document.querySelector(".bet-grid__slip-BETSLIP-content"),u=l?l.querySelectorAll("bma-bet-entry"):[],d=Array.from(u).map(m=>({matchGuid:m.getAttribute("data-match-guid"),type:m.getAttribute("data-content-type"),teamPoints:m.getAttribute("data-content-team-points"),odds:m.getAttribute("data-content-odds"),stake:m.getAttribute("data-stake"),payout:m.getAttribute("data-payout"),matchTitle:m.getAttribute("data-match-title"),abbreviatedTitle:m.getAttribute("data-abbreviated-title"),scheduledAt:m.getAttribute("data-scheduled-at")})),f=be();W.publish(f.hierTopics.COREBETSLIP__INTERSYNC,JSON.stringify({tournament_dollars:i,bets:d,timestamp:Date.now()}))};a.forEach(r=>{const i=new Date(r.scheduled_at)<n;let l=!1;try{l=(typeof r.scoreboard_data=="string"?JSON.parse(r.scoreboard_data):r.scoreboard_data)?.time_remaining?.toLowerCase()==="final"}catch{}const u=document.createElement("bma-bet-match-card");if(u.setAttribute("data-match-id",r.id),u.setAttribute("data-match-guid",r.odds_id||r.guid||r.id),u.setAttribute("data-match-title",r.title),u.setAttribute("data-match-short-title",r.short_title||r.title),u.setAttribute("data-scheduled-at",r.scheduled_at),u.setAttribute("data-home-team",r.home_team_id||"Home"),u.setAttribute("data-away-team",r.away_team_id||"Away"),u.setAttribute("data-is-disabled",i||l?"true":"false"),u.setAttribute("data-sync-theme","dark"),r.odds_markets){const d=typeof r.odds_markets=="string"?r.odds_markets:JSON.stringify(r.odds_markets);u.setAttribute("data-odds-markets",d)}if(r.scoreboard_data){const d=typeof r.scoreboard_data=="string"?r.scoreboard_data:JSON.stringify(r.scoreboard_data);u.setAttribute("data-scoreboard",d)}if(r.sport_id)u.setAttribute("data-sport-key",r.sport_id);else if(e.sports_allowed&&e.sports_allowed.length===1){const d=e.sports_allowed[0];d&&d.key&&u.setAttribute("data-sport-key",d.key)}u.addEventListener("bet-button-click",d=>{const{betData:f,isActive:m,button:p}=d.detail;if(m){const g=document.querySelector(".bet-grid__slip-BETSLIP-content");if(g){const c=g.querySelectorAll("bma-bet-entry");let h=!1;c.forEach(_=>{if(h)return;const y=_.getAttribute("data-content-type"),T=_.getAttribute("data-content-odds");y===f.type&&T===f.price&&(_.remove(),h=!0)}),g.children.length===0&&(g.innerHTML='<div class="bet-slip__empty"><p>Select odds to create a new bet slip</p></div>')}p.classList.remove("btn--active"),setTimeout(()=>{s()},100)}else{document.querySelectorAll("bma-bet-match-card").forEach(h=>{h.shadowRoot.querySelectorAll(".btn--selected").forEach(_=>{_.classList.remove("btn--selected")})}),p.classList.add("btn--selected"),p.classList.add("btn--active");const g=be(),c=f.type;c==="spread"?W.publish(g.hierTopics.COREBETSLIP__SPREAD,JSON.stringify(f)):c==="money"?W.publish(g.hierTopics.COREBETSLIP__MONEY,JSON.stringify(f)):c==="total"&&W.publish(g.hierTopics.COREBETSLIP__TOTAL,JSON.stringify(f)),W.publish(g.hierTopics.COREBETSLIP,JSON.stringify(f))}}),t.appendChild(u)})},refreshPlayPopupUI(e,t){console.log("[app_events] Refreshing PLAY popup UI for tournament:",e);const n=document.querySelector(".bet-grid__slip-BETSLIP-content");n&&(n.innerHTML='<div class="bet-slip__empty"><p>Select odds to create a new bet slip</p></div>');const a=be();if(a.coreTourn.length>0){const o=a.coreTourn[a.coreTourn.length-1].data.find(i=>i.guid===e);o&&Ue.renderMatchCards(o)}t?.rows&&(console.log("[app_events] Publishing SODAPOP__HYDRATE__COREBETSLIP with",t.rows.length,"bets"),setTimeout(()=>{W.publish(a.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,JSON.stringify(t))},100));const s=document.querySelector(".bet-grid__slip");s&&s.setAttribute("data-active-bet-tab","MYBETS")},disableExistingBetButtons(){const e=document.querySelectorAll(".bet-grid__slip-MYBETS bma-bet-existing"),t=Array.from(e).map(a=>{try{return JSON.parse(a.getAttribute("data-corebetslip")||"{}")}catch{return null}}).filter(Boolean);document.querySelectorAll("bma-bet-match-card").forEach(a=>{const s=a.getAttribute("data-match-guid"),r=a.getAttribute("data-home-team"),o=a.getAttribute("data-away-team");(a.shadowRoot?.querySelectorAll(".btn:not(.btn--empty)")||[]).forEach(l=>{if(l.disabled)return;const u=l.dataset.betType,m=l.dataset.team==="home"?r:o;t.some(g=>{if(g.coreMatches__guid!==s)return!1;const c=g.bet||[];if(c.length===0)return!1;const h=c[0],y=Object.keys(h).filter(k=>k!=="short_title")[0],E=h[y]?.type;return u==="total"?E===u:E===u&&y===m})&&(l.disabled=!0,l.classList.add("btn--disabled"))})})},bindAppListeners(e){W.subscribe("APP",(p,g)=>{console.warn("~~ sub all APP | "+p+"|"+g)}),W.subscribe("WC",(p,g)=>{console.warn("~~ sub all WC  | "+p+"|"+g)}),W.subscribe("ROUTE",(p,g)=>{console.warn("~~ sub all ROUTE  | "+p+"|"+g)});let t="lobby",n="all";const a=()=>{if(e.coreTourn.length===0)return;const g=e.coreTourn[e.coreTourn.length-1].data,c=e.appSession?.session_user?.guid;document.querySelectorAll(".tournament-item").forEach(y=>y.classList.remove("h-ds__none"));let _=0;if(g.forEach(y=>{const T=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${y.guid}"]`);if(!T)return;const E=T.parentElement;let k=!0;t==="my"?(y.entities?.guids||[]).includes(c)||(k=!1):t==="completed"&&(y.status||y.class)!=="COMPLETED"&&(k=!1),n!=="all"&&k&&((y.sports_allowed||[]).some(F=>F.key===n)||(k=!1)),k?_++:E&&E.classList.add("h-ds__none")}),console.log(`[app_events] Filter applied - ${t}/${n} - showing ${_} of ${g.length} tournaments`),_===0){let y="No tournaments match the current filters";t==="my"&&(y="You haven't joined any tournaments yet"),t==="completed"&&(y="No completed tournaments yet"),typeof neodigmToast<"u"&&neodigmToast.q(y,"night")}};W.subscribe(e.hierTopics.COREBETSLIP,(p,g)=>{JSON.parse(g);let c=16;switch(p){case e.hierTopics.COREBETSLIP__BET:c=5,hn.shootConfetti(),console.log("~~~  |  "+p+" | ",g);const h=document.querySelector("neodigm-sodapop");h&&h.setAttribute("data-wait","true");const _=document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry");if(_.length===0){console.warn("[app_events] No bets to submit"),h&&h.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("No bets to submit","warning");break}const T=document.querySelector(".play-cntr")?.dataset?.currentTournGuid,E=e.appSession?.session_user?.guid;if(!T||!E){console.error("[app_events] Missing tournament or user GUID"),h&&h.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("Missing tournament or user data","danger");break}const k=Array.from(_).map(ae=>{const X=ae.getAttribute("data-content-team-points"),I=ae.getAttribute("data-content-odds"),V=ae.getAttribute("data-stake")||"0",ie=ae.getAttribute("data-content-type"),Q=ae.getAttribute("data-payout")||"0",ue=ae.getAttribute("data-match-guid")||"",de={};return de[X]={type:ie,stake:parseFloat(V),odds:parseFloat(I),payout:parseFloat(Q),reconciled:!1},{acctEntity__guid:E,coreTournaments__guid:T,coreMatches__guid:ue,bet:[de],status:"PENDING"}});console.log("[app_events] Submitting bet slips:",k),ve.postBetSlips(k).then(ae=>{console.log("[app_events] Bet slips posted successfully:",ae);const X=k.reduce((I,V)=>{const ie=V.bet[0],Q=Object.keys(ie)[0];return I+(ie[Q]?.stake||0)},0);typeof neodigmToast<"u"&&neodigmToast.q(`Bets placed successfully!|Total Stake: TD$ ${X.toFixed(2)}`,"success"),ve.fetchBetSlips(E,T).then(I=>{if(I?.rows){const V={timestamp:Date.now(),source:"API",data:I.rows};e.pushcoreBetSlip(V),console.log("[app_events] Refreshed bet slips in store:",I.rows.length,"items")}Ue.refreshPlayPopupUI(T,I),h&&h.setAttribute("data-wait","false")}).catch(I=>{console.error("[app_events] Error fetching fresh bet slips:",I),h&&h.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("Bets placed but failed to refresh|Please close and reopen","warning")})}).catch(ae=>{console.error("[app_events] Error posting bet slips:",ae),typeof neodigmToast<"u"&&neodigmToast.q("Failed to place bets|Please try again","danger"),h&&h.setAttribute("data-wait","false")});break;case e.hierTopics.COREBETSLIP__SPREAD:break;case e.hierTopics.COREBETSLIP__MONEY:break;case e.hierTopics.COREBETSLIP__TOTAL:break;case e.hierTopics.COREBETSLIP__CLOSE:c=24;break;case e.hierTopics.COREBETSLIP__TDSYNC:if(document.querySelector("#summary-balance")&&g){g=JSON.parse(g);const X=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(e.coreBetSlip[0]?.data&&X){const I=e.coreBetSlip[0].data.filter(Ee=>Ee.coreTournaments__guid===X),V=[],ie=[],Q=[];I.forEach(Ee=>{const x=Ee.bet||[];if(x.length===0)return;const G=x[0];Object.keys(G).filter(z=>z!=="short_title").forEach(z=>{const oe=G[z],b=oe?.reconciled!==!1,v=parseFloat(oe?.payout||0);b?v===0?ie.push(Ee):Q.push(Ee):V.push(Ee)})});const ue=bt.search(V,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,de=bt.search(ie,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,Be=ue+de,ke=bt.search(Q,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0,Te=g.tournament_dollars-Be+ke;Ue.updateTDBalance("#summary-balance",Te)}else Ue.updateTDBalance("#summary-balance",g.tournament_dollars)}break;case e.hierTopics.COREBETSLIP__INTERSYNC:let D=0,F=0;if(e.coreBetSlip.length>0){const X=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(X){const V=e.coreBetSlip[e.coreBetSlip.length-1].data.filter(ke=>ke.coreTournaments__guid===X),ie=[],Q=[],ue=[];V.forEach(ke=>{const Te=ke.bet||[];if(Te.length===0)return;const Ee=Te[0];Object.keys(Ee).filter(G=>G!=="short_title").forEach(G=>{const Y=Ee[G],z=Y?.reconciled!==!1,oe=parseFloat(Y?.payout||0);z?oe===0?Q.push(ke):ue.push(ke):ie.push(ke)})});const de=bt.search(ie,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,Be=bt.search(Q,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0;D=de+Be,F=bt.search(ue,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0}}let A=!0,C=0;const U=document.querySelector("[data-bets-valid]"),w=document.querySelector("#summary-balance"),J=document.querySelector("#summary-stake"),ee=document.querySelector("#summary-payout");if(U&&g){g=JSON.parse(g),g.pending_stake_sum=0,g.pending_payout_sum=0,g.bets.length||(A=!1),g.bets.forEach(Q=>{Q.stake=Number(Q.stake),Q.stake?g.pending_stake_sum+=Q.stake:A=!1}),document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry").forEach(Q=>{const ue=parseFloat(Q.getAttribute("data-payout")||"0");g.pending_payout_sum+=ue});const X=D+g.pending_stake_sum,I=F+g.pending_payout_sum;C=g.tournament_dollars-X+F,C<0?w.classList.add("summary-cell__red"):w.classList.remove("summary-cell__red"),Ue.updateTDBalance("#summary-balance",C),J.innerHTML=X.toFixed(2),ee&&(ee.innerHTML=I.toFixed(2),I<0?ee.classList.add("summary-cell__red"):ee.classList.remove("summary-cell__red"));const ie=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(ie){const Q=e.coreTourn[e.coreTourn.length-1];if(Q&&Q.data){const ue=Q.data.find(de=>de.guid===ie);ue&&Ue.updateTournamentDashboard(ue)}}(g.tournament_dollars<0||C<0)&&(A=!1),U.dataset.betsValid=A}break}c&&neodigmWired4Sound&&neodigmWired4Sound.sound(c,"QUITE").vibrate()});const s=()=>{const g=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let c=0;g&&e.coreTourn.length>0&&(c=e.coreTourn[e.coreTourn.length-1].data.find(y=>y.guid===g)?.tournament_dollars||0),W.publish(e.hierTopics.COREBETSLIP__TDSYNC,JSON.stringify({tournament_dollars:c,timestamp:Date.now()}))},r=()=>{const p=document.querySelector("#summary-balance"),g=document.querySelector("#summary-stake"),c=document.querySelector("#summary-payout");if(!p||!g||!c){console.warn("[app_events] Summary elements not found");return}const _=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let y=0;_&&e.coreTourn.length>0&&(y=e.coreTourn[e.coreTourn.length-1].data.find(F=>F.guid===_)?.tournament_dollars||0);let T=0,E=0;if(e.coreBetSlip.length>0&&_){const D=e.coreBetSlip[e.coreBetSlip.length-1].data.filter(J=>J.coreTournaments__guid===_);console.log("[app_events] Filtered bets for tournament:",_,"found:",D.length),console.log("[app_events] Using latest bet slip data index:",e.coreBetSlip.length-1),console.log("[app_events] First bet sample:",D[0]);const F=[],A=[],C=[];D.forEach(J=>{const ee=J.bet||[];if(ee.length===0)return;const ae=ee[0];Object.keys(ae).filter(I=>I!=="short_title").forEach(I=>{const V=ae[I],ie=V?.reconciled!==!1,Q=parseFloat(V?.payout||0);ie?Q===0?A.push(J):C.push(J):F.push(J)})}),console.log("[app_events] Bet categories:",{unreconciled:F.length,reconciledZero:A.length,reconciledNonZero:C.length});const U=bt.search(F,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,w=bt.search(A,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0;T=U+w,E=bt.search(C,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0,console.log("[app_events] Balance calculation:",{unreconciledStakes:U,lostBetStakes:w,stakesToSubtract:T,reconciledPayouts:E,tournamentDollars:y})}else console.warn("[app_events] No bet data found in Pinia store or missing tournamentGuid");const k=y-T+E;if(Ue.updateTDBalance("#summary-balance",k),k<0?p.classList.add("summary-cell__red"):p.classList.remove("summary-cell__red"),g.innerHTML=T.toFixed(2),c.innerHTML=E.toFixed(2),E<0?c.classList.add("summary-cell__red"):c.classList.remove("summary-cell__red"),_&&e.coreTourn.length>0){const D=e.coreTourn[e.coreTourn.length-1].data.find(F=>F.guid===_);D&&Ue.updateTournamentDashboard(D)}};W.subscribe(e.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,(p,g)=>{const h=JSON.parse(g)?.rows||[],_=document.querySelector(".bet-grid__slip-MYBETS");if(!_)return;if(_.innerHTML="",h.length===0){_.innerHTML='<p style="color: var(--app-core-color--gray-6__dark--brand, #969696); text-align: center; padding: 20px;">No active bets</p>';const k=document.querySelector(".bet-grid__slip");k&&k.setAttribute("data-active-bet-tab","BETSLIP"),s();return}h.forEach(k=>{if((k.bet||[]).length===0)return;const D=document.createElement("bma-bet-existing");D.setAttribute("data-corebetslip",JSON.stringify(k)),_.appendChild(D)});const y=document.querySelector(".bet-grid__slip");y&&y.setAttribute("data-active-bet-tab","MYBETS"),be().appCLIFeatures?.features?.disable_existing_bet_btn?.state===!0&&Ue.disableExistingBetButtons(),setTimeout(()=>{console.log("[app_events] Calling updateSummaryFromExistingBets after HYDRATE, bet count:",h.length),console.log("[app_events] Pinia store bet count:",e.coreBetSlip[0]?.data?.length||0),r()},200)}),document.addEventListener("click",p=>{const g=p.target;if(g&&g.classList.contains("bet-slip-tab")){const c=g.dataset.betTab,h=document.querySelector(".bet-grid__slip");c&&h&&(h.setAttribute("data-active-bet-tab",c),neodigmWired4Sound&&neodigmWired4Sound.sound(3),console.log("[app_events] Switched to bet tab:",c))}if(g&&g.dataset.publishBetslip){const c=g.dataset.publishBetslip;W.publish(c,JSON.stringify({timestamp:Date.now()}))}});const o=()=>{const g=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let c=0;g&&e.coreTourn.length>0&&(c=e.coreTourn[e.coreTourn.length-1].data.find(E=>E.guid===g)?.tournament_dollars||0);const h=document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry"),_=Array.from(h).map(y=>({teamPoints:y.getAttribute("data-content-team-points"),odds:y.getAttribute("data-content-odds"),stake:y.getAttribute("data-stake")||"0",type:y.getAttribute("data-content-type"),abbreviatedTitle:y.getAttribute("data-abbreviated-title"),scheduledAt:y.getAttribute("data-scheduled-at")}));W.publish(e.hierTopics.COREBETSLIP__INTERSYNC,JSON.stringify({tournament_dollars:c,bets:_,timestamp:Date.now()}))},i=(p,g)=>{const c=JSON.parse(g),h=document.querySelector(".bet-grid__slip-BETSLIP-content");if(!h){console.error("[app_events] Bet slip container not found");return}const _=h.querySelector(".bet-slip__empty");_&&_.remove();let y="";c.type==="total"?y=c.team==="over"?"Over":"Under":c.team==="home"?y=c.homeTeam:c.team==="away"&&(y=c.awayTeam);let T=y;if(c.point)if(c.type==="spread"){const A=parseFloat(c.point)>0?`+${c.point}`:c.point;T=`${y} ${A}`}else c.type==="total"&&(T=`${y} ${c.point}`);const E=document.createElement("bma-bet-entry");E.setAttribute("data-content-team-points",T),E.setAttribute("data-content-odds",c.price||"0"),E.setAttribute("data-content-stake-text","0"),E.setAttribute("data-content-type",c.type||""),E.setAttribute("data-abbreviated-title",c.abbreviatedTitle||`${c.homeTeam} vs ${c.awayTeam}`),E.setAttribute("data-scheduled-at",c.scheduledAt||""),E.setAttribute("data-match-guid",c.matchGuid||""),E.setAttribute("data-home-team",c.homeTeam||""),E.setAttribute("data-away-team",c.awayTeam||""),E.setAttribute("data-bet-team",y||"");const L=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(L&&e.coreTourn.length>0){const C=e.coreTourn[e.coreTourn.length-1].data.find(U=>U.guid===L);if(C?.sports_allowed&&C.sports_allowed.length>0){const U=C.sports_allowed[0];E.setAttribute("data-sport-key",U.key||"");const w=_n.find(J=>J.key===U.key);E.setAttribute("data-sport-group",w?.group||"")}}h.appendChild(E),console.log("[app_events] Bet entry appended to container:",E,"Container children:",h.children.length),setTimeout(()=>{l(E)},0);const D=document.querySelector(".bet-grid__slip");D&&(D.setAttribute("data-active-bet-tab","BETSLIP"),console.log("[app_events] Switched to BETSLIP tab"));const F=h.querySelectorAll("bma-bet-entry").length;F>=3?requestAnimationFrame(()=>{setTimeout(()=>{const A=document.querySelector(".bet-grid__slip");A&&(console.log("[app_events] Scrolling parent to bottom - bet count:",F,"scrollHeight:",A.scrollHeight,"current scrollTop:",A.scrollTop),A.scrollTo({top:A.scrollHeight,behavior:"smooth"}),setTimeout(()=>{console.log("[app_events] After scroll - scrollTop:",A.scrollTop)},500))},150)}):console.log("[app_events] Skipping scroll - only",F,"bet cards (need 3+)"),setTimeout(()=>{o()},200),console.log("[app_events] Created bet entry:",{teamPoints:T,odds:c.price,type:c.type})};W.subscribe(e.hierTopics.COREBETSLIP__SPREAD,i),W.subscribe(e.hierTopics.COREBETSLIP__MONEY,i),W.subscribe(e.hierTopics.COREBETSLIP__TOTAL,i);const l=p=>{const g={sport:{key:p.getAttribute("data-sport-key")||"",group:p.getAttribute("data-sport-group")||""},Match:{scheduled_at:p.getAttribute("data-scheduled-at")||"",home_team_id:p.getAttribute("data-home-team")||"",home_team_score:"",away_team_id:p.getAttribute("data-away-team")||"",away_team_score:""},Bet:{scope:{team_id:p.getAttribute("data-bet-team")||"",over:"",under:""},type:p.getAttribute("data-content-type")||"",odds:p.getAttribute("data-content-odds")||"0",stake:p.getAttribute("data-stake")||"0"}},c=Ni.calcPayout(g);p.setAttribute("data-payout",c.toString()),console.log("[app_events] Payout calculated:",{stake:g.Bet.stake,odds:g.Bet.odds,payout:c})};new MutationObserver(p=>{p.forEach(g=>{g.type==="attributes"&&g.attributeName==="data-stake"&&g.target.tagName==="BMA-BET-ENTRY"&&(console.log("[app_events] Stake changed:",g.target.getAttribute("data-stake")),l(g.target),clearTimeout(window.betSlipStakeTimeout),window.betSlipStakeTimeout=setTimeout(()=>{o()},300))})}).observe(document.body,{attributes:!0,attributeFilter:["data-stake"],subtree:!0}),console.log("[app_events] MutationObserver for stake changes initialized"),document.addEventListener("bma-bet-entry-remove",p=>{console.log("[app_events] Removing bet entry:",p.detail);const g=p.target,c=p.detail;g.remove(),setTimeout(()=>{const T=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(T){const E=be(),k=E.coreTourn[E.coreTourn.length-1];if(k&&k.data){const L=k.data.find(D=>D.guid===T);L&&Ue.updateTournamentDashboard(L)}}},100),document.querySelectorAll("bma-bet-match-card").forEach(y=>{(y.shadowRoot?.querySelectorAll(".btn")||[]).forEach(E=>{const k=E.dataset.betType,L=E.dataset.price,D=k===c.type,F=L===c.odds;D&&F&&E.classList.contains("btn--active")&&(E.classList.remove("btn--active"),console.log("[app_events] Deactivated button via X removal:",{btnType:k,btnPrice:L}))})});const _=document.querySelector(".bet-grid__slip-BETSLIP-content");_&&_.children.length,setTimeout(()=>{o()},100)}),W.subscribe(e.hierTopics.CANVAS__HYDRATE__STATUS,(p,g)=>{const c=JSON.parse(g);c&&c.guid&&neodigmUtils&&neodigmUtils.shake(`[data-bma-tourn-guid="${c.guid}"]`)}),W.subscribe(e.hierTopics.WC__APP__FOOT,(p,g)=>{JSON.parse(g);let c=16;switch(p){case e.hierTopics.WC__APP__FOOT__ALL_SPORTS:W.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_LOBBY,JSON.stringify({tab:"ALL_SPORTS",timestamp:Date.now()}));break;case e.hierTopics.WC__APP__FOOT__MY_TOURNEYS:W.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_MY,JSON.stringify({tab:"MY_TOURNEYS",timestamp:Date.now()}));break;case e.hierTopics.WC__APP__FOOT__LEADERBOARD:c=24,W.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_LEADERBOARD,JSON.stringify({tab:"LEADERBOARD",timestamp:Date.now()}));break;case e.hierTopics.WC__APP__FOOT__MY_PROFILE:W.publish(e.hierTopics.WC__APP__HEAD_TOP__USER_PROFILE,JSON.stringify({tab:"USER_PROFILE",timestamp:Date.now()}));break}c&&neodigmWired4Sound&&neodigmWired4Sound.sound(c).vibrate()}),W.subscribe(e.hierTopics.WC__APP__HEAD_SPORTS,(p,g)=>{const c=JSON.parse(g);let h=16;p=="WC.APP.HEAD_SPORTS.PREV"||p=="WC.APP.HEAD_SPORTS.NEXT"||p=="WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START"?h=3:(n=c.key||"all",console.log(`[app_events] Sports filter changed to: ${n} (${c.group})`),a()),h&&neodigmWired4Sound&&neodigmWired4Sound.sound(h).vibrate()}),W.subscribe(e.hierTopics.WC__APP__HEAD_MID,(p,g)=>{JSON.parse(g);let c=16;const h=()=>{n="all";const _=document.querySelector("bma-app-head-sports");_&&_.setAttribute("data-selected-chip","all")};switch(p){case"WC.APP.HEAD_MID.HEAD_MID_LOBBY":t="lobby",h(),a();break;case"WC.APP.HEAD_MID.HEAD_MID_MY":if(!e.appSession?.session_user?.guid){console.warn("[app_events] No user GUID found, cannot filter tournaments"),typeof neodigmToast<"u"&&neodigmToast.q("Please sign in to view your tournaments","warning");return}t="my",h(),a();break;case"WC.APP.HEAD_MID.HEAD_MID_COMPLETED":t="completed",h(),a();break;case"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD":t="leaderboard",h(),a(),c=24,typeof neodigmToast<"u"&&neodigmToast.q("Feature not Available|in Beta","night");break;case"WC.APP.HEAD_MID.HEAD_MID_SQUAD":t="squad",h(),a(),c=24,typeof neodigmToast<"u"&&neodigmToast.q("Feature not Available|in Beta","night");break}c&&neodigmWired4Sound&&neodigmWired4Sound.sound(c).vibrate()}),W.subscribe(e.hierTopics.ROUTE__HOME__USER_PROFILE,async(p,g)=>{JSON.parse(g);let c=16;switch(p){case"ROUTE.HOME.USER_PROFILE.INSTALL_PWA":const h=window.deferredPWAPrompt;if(!h){console.log("No install prompt available"),typeof neodigmToast<"u"&&neodigmToast.q("PWA install not available","warning");return}try{h.prompt();const{outcome:y}=await h.userChoice;y==="accepted"?(console.log("PWA installed successfully"),window.deferredPWAPrompt=null,typeof neodigmToast<"u"&&neodigmToast.q("App installed successfully!","success"),c=8,neodigmSodaPop&&neodigmSodaPop.close()):(console.log("PWA install declined"),typeof neodigmToast<"u"&&neodigmToast.q("Install cancelled","night"))}catch(y){console.error("PWA install error:",y),typeof neodigmToast<"u"&&neodigmToast.q("Install failed","danger")}break;case"ROUTE.HOME.USER_PROFILE.TOGGLE_THEME":(()=>{const T=e.appCLIFeatures.features.theme.state==="dark"?"light":"dark";e.setFeaturePersistPub("theme",{state:T});const E=document.getElementById("app");E&&E.setAttribute("data-sync-theme",T),document.body.setAttribute("data-sync-theme",T)})(),neodigmSodaPop&&neodigmSodaPop.close();break;case"ROUTE.HOME.USER_PROFILE.RESET_PASSWORD":fs.push({name:"resethash_route"}),neodigmSodaPop&&neodigmSodaPop.close();break;case"ROUTE.HOME.USER_PROFILE.SIGNOUT":fs.push({name:"signout_route"}),neodigmSodaPop&&neodigmSodaPop.close();break}c&&neodigmWired4Sound&&neodigmWired4Sound.sound(c).vibrate()});const d=(p,g)=>{const c=p.split(".").pop();console.log("[app_events] SODAPOP_PLAY subscriber - action:",c,"topic:",p),setTimeout(()=>{const h=document.querySelectorAll(".play-cntr .btn-info-sm"),y=document.querySelector(".play-cntr")?.closest("neodigm-sodapop");h.forEach(T=>{const E=T.dataset.publishRouteHome?.split(".").pop()||"";if(E===c){if(console.log("[app_events] Activating button:",E),T.classList.add("btn-info-sm--active"),T.classList.remove("btn-info-sm--inactive"),neodigmCarousel.nav({id:"caro-play",nav:E}),neodigmWired4Sound.sound(3),y){const k=c==="PLAY"?"hidden":"auto";y.style.overflow=k,console.log("[app_events] Set sodapop overflow to:",k)}}else T.classList.add("btn-info-sm--inactive"),T.classList.remove("btn-info-sm--active")})},100)};W.subscribe("ROUTE.HOME.SODAPOP_PLAY.INFO",d),W.subscribe("ROUTE.HOME.SODAPOP_PLAY.LEADERBOARD",d),W.subscribe("ROUTE.HOME.SODAPOP_PLAY.PLAY",(p,g)=>{JSON.parse(g);const c=document.getElementById("btn-join__play--id");if(!c){console.warn("[app_events] PLAY button not found");return}const h=c.dataset.requiresJoin==="true",_=c.textContent.trim().toLowerCase();if(console.log("[app_events] PLAY button clicked - text:",_,"requiresJoin:",h),h&&_==="join"){const T=document.querySelector(".play-cntr")?.dataset?.currentTournGuid,E=be();if(!T){console.error("[app_events] No tournament GUID found");return}console.log("[app_events] Executing JOIN for tournament:",T),W.publish(E.hierTopics.WC__TOURN_ACTION,JSON.stringify({action:"JOIN",tournamentGuid:T,timestamp:Date.now()})),c.textContent="Play",c.dataset.requiresJoin="false",setTimeout(()=>{d(p),console.log("[app_events] JOIN triggered, advancing carousel to PLAY page")},500)}else d(p),console.log("[app_events] Advancing carousel to PLAY page")}),W.subscribe(e.hierTopics.WC__APP__HEAD_TOP,(p,g)=>{JSON.parse(g);let c=10;switch(p){case"WC.APP.HEAD_TOP.USER_PROFILE":c=10,neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_my_profile"),setTimeout(()=>{neodigmCarousel.nav({id:"caro-user_profile",nav:"caro-page__badges"})},1200);break;case"WC.APP.HEAD_TOP.LOGO":const h=e.appSession.session_app.version,_=new Date().getFullYear();h&&neodigmToast&&neodigmToast.q(`${h} 1/14/2026, 8:26:24 PM|© ${_} Bet Max Action`,"night");break}c&&neodigmWired4Sound&&neodigmWired4Sound.sound(c).vibrate()});let f=null,m=null;W.subscribe(e.hierTopics.WC__TOURN_ACTION,(p,g)=>{const c=JSON.parse(g);let h=0;switch(c?.action){case"JOIN":h=512;break;case"PLAY":h=8;break;case"INFO":h=8;break}if(h){f=c?.tournamentGuid,m=c?.action,console.log("[app_events] Storing pending tourn data:",f,m);const _=e.appSession?.session_user?.guid,y=c?.tournamentGuid;_&&y?ve.fetchBetSlips(_,y).then(T=>{if(T?.rows){const E={timestamp:Date.now(),source:"API",data:T.rows};e.pushcoreBetSlip(E),console.log("[app_events] Bet slips fetched:",T.rows.length,"items")}setTimeout(()=>{neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_play"),setTimeout(()=>{W.publish(e.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,JSON.stringify(T))},3e3)},h)}).catch(T=>{console.error("[app_events] Error fetching bet slips:",T),setTimeout(()=>{neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_play")},h)}):setTimeout(()=>{neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_play")},h)}}),W.subscribe(e.hierTopics.WC__TOURN_ACTION,(p,g)=>{const c=JSON.parse(g);let h=16;switch(c?.action){case"FOCUS":h=3;break;case"SPORT_ICON":h=10;break;case"JOIN":h=5;break;case"PLAY":h=16;break}h&&neodigmWired4Sound&&neodigmWired4Sound.sound(h).vibrate()}),W.subscribe(e.hierTopics.WC__TOURN_ACTION,(p,g)=>{const c=JSON.parse(g);let h=0,_="night";switch(neodigmOpt&&neodigmOpt.EVENT_SOUNDS&&(neodigmOpt.EVENT_SOUNDS=!1),c?.tournamentStatus){case"UPCOMING":_="success";break;case"LOCKED":_="warning";break;case"COMPLETED":_="danger";break}switch(c?.action){case"SPORT_ICON":c?.sportTitle==c?.sportDescription?h=c?.sportTitle:h=c?.sportTitle+"|"+c?.sportDescription;break}h&&neodigmToast&&neodigmToast.q(h,_)}),W.subscribe(e.hierTopics.WC__TOURN_ACTION,async(p,g)=>{const c=JSON.parse(g);if(c?.action==="JOIN"){const _=be().appSession?.session_user?.guid;if(!_){console.error("No entity guid found in session"),typeof neodigmToast<"u"&&neodigmToast.q("Please sign in to join tournaments","warning");return}const y=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${c.tournamentGuid}"]`);y&&(y.setAttribute("data-bma-tourn-wait","true"),hn.shootConfetti());const T={acctEntityGuid:_,tournamentGuid:c.tournamentGuid};try{const E={method:"POST",body:JSON.stringify(T),headers:ve.genHeaders()};console.log("Posting to:",ve.API_baseURI+"/bmac/"+ve.API_ver+"/coreTournaments/join",T);const L=await(await fetch(ve.API_baseURI+"/bmac/"+ve.API_ver+"/coreTournaments/join",E)).json();if(console.log("Join response:",L),L.ok)typeof neodigmToast<"u"&&neodigmToast.q("Successfully joined tournament!","success"),setTimeout(()=>{if(y){y.setAttribute("data-bma-tourn-wait","false");const D=y.getAttribute("data-bma-tourn-entities");if(D)try{const F=JSON.parse(D);F.guids.includes(_)||(F.guids.push(_),y.setAttribute("data-bma-tourn-entities",JSON.stringify(F)))}catch(F){console.error("Failed to parse entities:",F)}}},3e3);else{const D=L?.message||"Failed to join tournament";typeof neodigmToast<"u"&&neodigmToast.q(D,"danger"),y&&y.setAttribute("data-bma-tourn-wait","false")}}catch(E){console.error("Join tournament error:",E),typeof neodigmToast<"u"&&neodigmToast.q("Network error joining tournament","danger"),y&&y.setAttribute("data-bma-tourn-wait","false")}}}),W.subscribe(e.hierTopics.ROUTE__HOME_ONMOUNT,async(p,g)=>{console.log("[app_events] ROUTE__HOME_ONMOUNT event received");const c=be();try{const h=await ve.fetchTournaments();console.log("[app_events] Tournaments fetched:",h),h?.rows&&Array.isArray(h.rows)?(c.pushCoreTourn({timestamp:Date.now(),source:"API",data:h.rows}),console.log("[app_events] Pushed to coreTourn, length:",c.coreTourn.length),W.publish(c.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now()}))):console.warn("[app_events] Invalid API response format:",h)}catch(h){console.error("[app_events] Error fetching tournaments:",h),typeof neodigmToast<"u"&&neodigmToast.q("Failed to load tournaments","danger"),hn.hardReload()}}),W.subscribe(e.hierTopics.ROUTE__HOME_HYDRATE,(p,g)=>{console.log("[app_events] ROUTE__HOME_HYDRATE event received");const c=be();if(c.coreTourn.length===0){console.warn("[app_events] No tournament data in coreTourn array");return}const h=c.coreTourn[c.coreTourn.length-1],_=c.coreTourn.length>1?c.coreTourn[c.coreTourn.length-2]:null;console.log("[app_events] Hydrating with latest data:",h);const y=[];if(_){const L=h.data,D=_.data;L.forEach(F=>{const A=D.find(C=>C.guid===F.guid);A&&A.status!==F.status&&(console.log(`[app_events] Status changed for tournament ${F.guid}: ${A.status} -> ${F.status}`),y.push(F.guid))})}const T=c.appSession?.session_user?.guid,E=[...h.data].sort((L,D)=>{const F=L.status||L.class,A=D.status||D.class,C=L.entities?.guids||[],U=D.entities?.guids||[],w=C.includes(T),J=U.includes(T),ee=(Be,ke)=>{const Te=new Date(Be.status_time||0).getTime();return new Date(ke.status_time||0).getTime()-Te},ae=F==="LOCKED"&&w,X=A==="LOCKED"&&J;if(ae&&!X)return-1;if(!ae&&X)return 1;if(ae&&X)return ee(L,D);const I=F==="UPCOMING",V=A==="UPCOMING";if(I&&!V)return-1;if(!I&&V)return 1;if(I&&V)return ee(L,D);const ie=F==="COMPLETED"&&w,Q=A==="COMPLETED"&&J;if(ie&&!Q)return-1;if(!ie&&Q)return 1;if(ie&&Q)return ee(L,D);const ue=F==="COMPLETED"&&!w,de=A==="COMPLETED"&&!J;return ue&&!de?1:!ue&&de?-1:ee(L,D)}),k=Ue.categorizeTournaments(E,t,n,T);if(console.log(`[app_events] Categorized into ${k.length} categories for filter: ${t}/${n}`),window._homeRouteRenderCards&&typeof window._homeRouteRenderCards=="function"){if(window._homeRouteRenderCards(k,!0),setTimeout(()=>{a(),console.log("[app_events] Re-applied filter after hydration:",t)},100),y.length>0){const L=h.data;y.forEach(D=>{const F=L.find(A=>A.guid===D);if(F){const A=Math.floor(Math.random()*2e3)+1e3;setTimeout(()=>{W.publish(c.hierTopics.CANVAS__HYDRATE__STATUS,JSON.stringify({guid:D,status:F.status,timestamp:Date.now()}))},A)}})}}else console.warn("[app_events] window._homeRouteRenderCards not available")}),W.subscribe(e.hierTopics.SSE__CORE__TOURN_SYNC,(p,g)=>{console.log("[app_events] SSE__CORE__TOURN_SYNC event received:",g);const c=be();try{const h=JSON.parse(g);console.log("[app_events] SSE tournament sync data:",h);const _=JSON.parse(h.msg);if(console.log("[app_events] Parsed tournaments array:",_),!Array.isArray(_)){console.warn("[app_events] SSE msg is not an array:",_);return}c.pushCoreTourn({timestamp:Date.now(),source:"SSE",data:_}),console.log("[app_events] Pushed SSE data to coreTourn, length:",c.coreTourn.length),W.publish(c.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"SSE"}))}catch(h){console.error("[app_events] Error processing SSE tournament sync:",h)}}),setTimeout(function(){neodigmSodaPop&&neodigmMarquee&&neodigmEnchantedCTA&&(neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{NeodigmClaire.showCanv("neodigm-sodapop",.5).setTheme(["warning","success"]).initCanvOn("neodigm-sodapop").waxOn("neodigm-sodapop")},1e3),neodigmMetronome.init().pause(800),neodigmMarquee.init().pause(1200),neodigmEnchantedCTA.init(),neodigmCarousel.init()}),neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{neodigmUtils.typeOn({q1st:"#caption__my-profile",msg:`${e.appSession.session_user.name}|${e.appSession.session_user.email}|${e.appSession.session_user.fname} ${e.appSession.session_user.lname}|My Profile`,mode:"LOOP",uniqueDelay:124});const p=e.appSession?.session_user?.guid;if(console.log("[app_events] User GUID:",p),console.log("[app_events] coreTourn length:",e.coreTourn.length),!p||e.coreTourn.length===0){console.warn("[app_events] Missing user GUID or tournament data");return}const c=e.coreTourn[e.coreTourn.length-1].data;console.log("[app_events] Processing tournaments:",c.length);let h=0,_=0,y=0;c.forEach((T,E)=>{if(!T.tags||!Array.isArray(T.tags)){console.log(`[app_events] Tournament ${E} has no tags or tags not an array`);return}T.tags.forEach((k,L)=>{if(typeof k=="object"&&k!==null&&k[p]){const D=k[p];D==="--badge__ribbon--gold"?h++:D==="--badge__ribbon--silver"?_++:D==="--badge__ribbon--bronze"&&y++}})}),setTimeout(()=>{let T=document.querySelectorAll(".badge-counter");if(T.length===0){const E=document.querySelector("neodigm-sodapop");E&&(T=E.querySelectorAll(".badge-counter"))}T.length>=3?(T[0].textContent=h,T[1].textContent=_,T[2].textContent=y,console.log("[app_events] Updated UI counters successfully")):console.warn("[app_events] Not enough counter elements found")},500)},1e3)},"sodapop_my_profile"),neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{const p=be(),g=document.querySelector(".play-cntr");f&&(g.dataset.currentTournGuid=f),m&&(g.dataset.currentTournAction=m);const c=g?.dataset?.currentTournGuid,h=g?.dataset?.currentTournAction||"INFO";console.log("[app_events] sodapop_play opened - GUID:",c,"action:",h),(()=>{const A=document.getElementById("btn-join__play--id");if(!A||!c||p.coreTourn.length===0)return;const U=p.coreTourn[p.coreTourn.length-1].data.find(X=>X.guid===c);if(!U)return;const w=p.appSession?.session_user?.guid,J=U.entities?.guids?.includes(w),ee=U.status,ae=h;A.style.display="none",!(ee==="COMPLETED"||ee==="LOCKED"&&!J)&&(A.style.display="",ee==="UPCOMING"&&!J?ae==="INFO"?(A.textContent="Join",A.dataset.requiresJoin="true"):ae==="PLAY"&&(A.textContent="Play",A.dataset.requiresJoin="false"):(A.textContent="Play",A.dataset.requiresJoin="false"))})(),(()=>{if(!c||p.coreTourn.length===0)return;const C=p.coreTourn[p.coreTourn.length-1].data.find(I=>I.guid===c);if(!C)return;const U=document.getElementById("pop-play__caro-info-summary1--id");if(!U)return;const w=I=>{if(!I)return"N/A";const V=new Date(I);return isNaN(V.getTime())?"Invalid Date":V.toLocaleString(void 0,{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit",hour12:!0})},J=I=>{switch(I){case"UPCOMING":return"var(--app-core-color--yellow-3__dark--brand, #F7C60D)";case"LOCKED":return"var(--app-core-color--green-3__dark--brand, #14b963)";case"COMPLETED":return"var(--app-core-color--gray-6__dark--brand, #969696)";default:return"#fff"}},ee=[{caption:"Start",value:w(C.window_start_time)},{caption:"End",value:w(C.window_end_time)},{caption:"Status",value:C.status||"Unknown",color:J(C.status)},{caption:"Entry Fee",value:"FREE"},{caption:"TD$",value:`${C.tournament_dollars||0}`},{caption:"Participants",value:`${C.entities?.guids?.length||0} / ${C.entities?.max||0}`},{caption:"Games",value:`${C.matches_expanded.length||0}`}];U.innerHTML=ee.map(I=>`
                                <div class="info-card">
                                    <div class="info-card__caption">${I.caption}</div>
                                    <div class="info-card__value" ${I.color?`style="color: ${I.color}"`:""}>${I.value}</div>
                                </div>
                            `).join("");const ae=document.getElementById("pop-play__caro-info-summary2--id");ae&&C.sports_allowed&&Array.isArray(C.sports_allowed)&&(ae.innerHTML=C.sports_allowed.map(I=>{const V=I.key||I,ie=_n.find(ue=>ue.key===V),Q=ie?ie.group:"default";return`<bma-sport-icon sport="${V}" data-sport-group="${Q}"></bma-sport-icon>`}).join(""));const X=document.getElementById("pop-play__caro-info-list--id");X&&C.matches_expanded&&Array.isArray(C.matches_expanded)&&(X.innerHTML=C.matches_expanded.map(I=>{const V=I.scoreboard_data?typeof I.scoreboard_data=="string"?I.scoreboard_data:JSON.stringify(I.scoreboard_data):"";return`
                                        <bma-match-status
                                            data-match-guid="${I.guid||I.odds_id||I.id||""}"
                                            data-match-title="${I.short_title||I.title||"Match"}"
                                            data-match-scheduled-at="${I.scheduled_at||""}"
                                            data-match-home-team="${I.home_team_id||"Home"}"
                                            data-match-away-team="${I.away_team_id||"Away"}"
                                            data-match-home-score="${I.home_team_score!==null&&I.home_team_score!==void 0?I.home_team_score:""}"
                                            data-match-away-score="${I.away_team_score!==null&&I.away_team_score!==void 0?I.away_team_score:""}"
                                            data-match-scoreboard="${V.replace(/"/g,"&quot;")}"
                                            data-match-sport-id="${I.sport_id||""}"
                                            data-sync-theme="dark"
                                        ></bma-match-status>
                                    `}).join(""))})(),setTimeout(()=>{const A=p.appSession?.session_user?.guid;c&&ve.fetchLeaderboard(c).then(C=>{const U=document.getElementById("pop-play__caro-leaderboard--id");if(!U)return;const w=C?.data||C?.rows;if(w&&w.length>0){const ee=p.coreTourn[p.coreTourn.length-1]?.data.find(Q=>Q.guid===c);U.innerHTML=w.map((Q,ue)=>{let de="";if(ee?.tags&&Array.isArray(ee.tags)){const ke=ee.tags.find(Te=>typeof Te=="object"&&Te!==null&&Te[Q.user_guid]?Te[Q.user_guid].startsWith("--badge__ribbon--"):!1);if(ke){const Te=ke[Q.user_guid];Te==="--badge__ribbon--gold"?de="badge-trophy--gold":Te==="--badge__ribbon--silver"?de="badge-trophy--silver":Te==="--badge__ribbon--bronze"&&(de="badge-trophy--bronze")}}const Be=Q.combined_betslips?typeof Q.combined_betslips=="string"?Q.combined_betslips:JSON.stringify(Q.combined_betslips):"[]";return`
                                                <bma-leaderboard-card
                                                    data-rank="${ue+1}"
                                                    data-username="${Q.username||"Unknown"}"
                                                    data-user-guid="${Q.user_guid||""}"
                                                    data-tournament-dollars="${Q.calculated_tournament_dollars||0}"
                                                    data-total-betslips="${Q.total_betslips||0}"
                                                    data-total-payout="${Q.total_payout||0}"
                                                    data-combined-betslips="${Be.replace(/"/g,"&quot;")}"
                                                    data-badge-class="${de}"
                                                    data-is-current-user="${Q.user_guid===A}"
                                                    data-sync-theme="dark"
                                                ></bma-leaderboard-card>
                                            `}).join("");const ae=w.findIndex(Q=>Q.user_guid===A),X=ae>=0?ae+1:w.length,I=ee?.entities?.guids?.length||w.length,V=document.getElementById("dashboard-rank"),ie=document.getElementById("dashboard-rank-percentile");if(V&&(V.innerHTML=`
                                                <span class="tourn-dashboard__rank-text">${X}/${I}</span>
                                            `),ie&&I>0){const Q=Math.round((I-X+1)/I*100);ie.textContent=`Top ${Q}%`}}else U.innerHTML=`
                                            <div class="leaderboard-empty">
                                                <p>No leaderboard data available yet.</p>
                                                <p class="leaderboard-empty__subtitle">Be the first to place a bet!</p>
                                            </div>
                                        `}).catch(C=>{console.error("[app_events] Error fetching leaderboard:",C);const U=document.getElementById("pop-play__caro-leaderboard--id");U&&(U.innerHTML=`
                                            <div class="leaderboard-empty">
                                                <p>Unable to load leaderboard data.</p>
                                            </div>
                                        `)})},600);let T=h==="PLAY"||h==="JOIN"?"PLAY":h;if(!c||p.coreTourn.length===0||p.coreTourn[p.coreTourn.length-1].data.find(U=>U.guid===c)?.status==="COMPLETED"&&(T="LEADERBOARD",console.log("[app_events] Tournament is COMPLETED, defaulting to LEADERBOARD")),T){const A=`ROUTE.HOME.SODAPOP_PLAY.${T}`;console.log("[app_events] Publishing initial topic:",A),W.publish(A,JSON.stringify({tournamentGuid:c,timestamp:Date.now()}))}if(!c||p.coreTourn.length===0)return;const k=p.coreTourn[p.coreTourn.length-1].data.find(A=>A.guid===c);Ue.renderMatchCards(k),neodigmUtils.typeOn({q1st:"#pop-play__tourn-caption--id",msg:`${k.caption}`,mode:"",uniqueDelay:62}),neodigmUtils.typeOn({q1st:"#pop-play__tourn-tagline--id",msg:`${k.tagline}`,mode:"",uniqueDelay:91}),console.log("[Modal Debug] Updating dashboard for tournament:",k?.caption);const L=document.querySelector(".head-caption");console.log("[Modal Debug] Modal header found:",!!L),L&&console.log("[Modal Debug] Modal classes:",L.className),Ue.updateTournamentDashboard(k);const D=document.getElementById("dashboard-rank"),F=document.getElementById("dashboard-rank-percentile");if(D){const A=k.entities?.guids?.length||0;D.innerHTML=`
                                <span class="tourn-dashboard__rank-text">-/${A}</span>
                            `}F&&(F.textContent="Loading...")},1e3)},"sodapop_play"))},3e3),setTimeout(function(){neodigmSodaPop&&NeodigmClaire&&neodigmSodaPop.setOnClose(function(){return!0})},4e3)}},bf={__name:"App",setup(e){const t=ht(),n=be();return setTimeout(function(){neodigmOpt.mvvLegit&&mvvLegit.setNavConroller((a=null)=>{neodigmOpt.N55_DEBUG_lOG&&neodigmToast.q(`Legit route: ${a}`,"primary"),t.push({name:a})}).setOnState((a=null)=>{a&&neodigmOpt.ROOT&&(neodigmOpt.ROOT.dataset.mvvLegit=a)}).init({BASE:ve.API_baseURI})},2e3),setTimeout(()=>{n.appCLIFeatures.features.sse.state&&pa.establishSSE("https://machfive-bmacdev-rest.onrender.com/v5/sse?appid=BMACORE&sseid=user%40example.com&lastkey=123",n.appSession.session_user.guid,n,!0)},3e3),setTimeout(()=>{Ue.bindAppListeners(n)},3e3),t.beforeEach((a,s,r)=>{a.name=="splash_route"||a.name&&mvvLegit&&mvvLegit.isRouteAllowed(a.name)?r():r(!1)}),(a,s)=>(Xe(),sr(Ft(Pi),null,{default:Za(({Component:r})=>[Ke(Mc,{name:"slide-left"},{default:Za(()=>[(Xe(),sr($l(r)))]),_:2},1024)]),_:1}))}};class yf extends HTMLElement{constructor(){super(),this.clockInterval=null}connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this.startClock()}disconnectedCallback(){this.clockInterval&&clearInterval(this.clockInterval)}static get observedAttributes(){return["data-sync-theme","data-user-name"]}attributeChangedCallback(t,n,a){this.shadowRoot&&n!==a&&this.render()}startClock(){this.updateTime(),this.clockInterval=setInterval(()=>{this.updateTime()},24e3)}updateTime(){const t=this.shadowRoot?.querySelector(".status-time");if(t){const n=new Date,a=n.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0}),s=n.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});t.textContent=`${s} ${a}`}}handleLogoClick(t){t.preventDefault(),W.publish("WC.APP.HEAD_TOP.LOGO",JSON.stringify({timestamp:Date.now()}))}handleProfileClick(t){t.preventDefault(),W.publish("WC.APP.HEAD_TOP.USER_PROFILE",JSON.stringify({timestamp:Date.now()}))}render(){const a=(document.getElementById("app")?.getAttribute("data-sync-theme")||"dark")==="dark",s=this.getAttribute("data-user-name")||"Guest";this.shadowRoot.innerHTML=`
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
    `;const r=this.shadowRoot.querySelector("#logoLink"),o=this.shadowRoot.querySelector("#profileIcon");r&&r.addEventListener("click",i=>this.handleLogoClick(i)),o&&(o.addEventListener("click",i=>this.handleProfileClick(i)),o.addEventListener("keypress",i=>{(i.key==="Enter"||i.key===" ")&&this.handleProfileClick(i)})),this.updateTime()}}customElements.define("bma-app-head-top",yf);class vf extends HTMLElement{constructor(){super(),this.selectedTab="head_mid_lobby"}connectedCallback(){this.attachShadow({mode:"open"}),this.render()}static get observedAttributes(){return["data-sync-theme","data-selected-tab"]}attributeChangedCallback(t,n,a){this.shadowRoot&&n!==a&&(t==="data-selected-tab"&&(this.selectedTab=a||"head_mid_lobby"),this.render())}handleTabClick(t,n){this.selectedTab=t,this.setAttribute("data-selected-tab",t),W.publish(n,JSON.stringify({tab:t,timestamp:Date.now()})),this.render()}render(){const a=(document.getElementById("app")?.getAttribute("data-sync-theme")||"dark")==="dark",s=[{name:"head_mid_lobby",caption:"Tournament Lobby",mobileCaption:"Lobby",topic:"WC.APP.HEAD_MID.HEAD_MID_LOBBY"},{name:"head_mid_my",caption:"My Tournaments",mobileCaption:"My Tourneys",topic:"WC.APP.HEAD_MID.HEAD_MID_MY"},{name:"head_mid_completed",caption:"Completed Tournaments",mobileCaption:"Completed Tourneys",topic:"WC.APP.HEAD_MID.HEAD_MID_COMPLETED"},{name:"head_mid_leaderboard",caption:"Leaderboard Ranking",mobileCaption:"Leaderboard",topic:"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD"},{name:"head_mid_squad",caption:"My Squads",mobileCaption:"Squads",topic:"WC.APP.HEAD_MID.HEAD_MID_SQUAD"}],r=o=>`
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
    `,s.forEach(o=>{const i=this.shadowRoot.querySelector(`[data-tab="${o.name}"]`);i&&(i.addEventListener("click",()=>this.handleTabClick(o.name,o.topic)),i.addEventListener("keypress",l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),this.handleTabClick(o.name,o.topic))}))})}}customElements.define("bma-app-head-mid",vf);class Tf extends HTMLElement{constructor(){super(),this.selectedChip="all",this.savedScrollPosition=0}connectedCallback(){this.attachShadow({mode:"open"}),this.render()}static get observedAttributes(){return["data-sync-theme","data-selected-chip"]}attributeChangedCallback(t,n,a){this.shadowRoot&&n!==a&&(t==="data-selected-chip"&&(this.selectedChip=a||"all"),this.render())}handleChipClick(t,n){const a=this.shadowRoot.querySelector(".chips-container");a&&(this.savedScrollPosition=a.scrollLeft),this.selectedChip=t,this.setAttribute("data-selected-chip",t),W.publish("WC.APP.HEAD_SPORTS",JSON.stringify({key:t,group:n,timestamp:Date.now()})),this.render()}scrollToPrev(){const t=this.shadowRoot.querySelector(".chips-container");t&&(t.scrollBy({left:-256,behavior:"smooth"}),W.publish("WC.APP.HEAD_SPORTS.PREV",JSON.stringify({timestamp:Date.now()})))}scrollToNext(){const t=this.shadowRoot.querySelector(".chips-container");t&&(t.scrollBy({left:256,behavior:"smooth"}),W.publish("WC.APP.HEAD_SPORTS.NEXT",JSON.stringify({timestamp:Date.now()})))}initDragScroll(){const t=this.shadowRoot.querySelector(".chips-container");if(!t)return;let n=!1,a,s;t.addEventListener("mousedown",r=>{n=!0,t.style.cursor="grabbing",a=r.pageX-t.offsetLeft,s=t.scrollLeft,W.publish("WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START",JSON.stringify({action:"start",scrollPosition:s,timestamp:Date.now()}))}),t.addEventListener("mouseleave",()=>{n=!1,t.style.cursor="grab"}),t.addEventListener("mouseup",()=>{n=!1,t.style.cursor="grab"}),t.addEventListener("mousemove",r=>{if(!n)return;r.preventDefault();const i=(r.pageX-t.offsetLeft-a)*2;t.scrollLeft=s-i})}render(){const a=(document.getElementById("app")?.getAttribute("data-sync-theme")||"dark")==="dark",i=[...(be().appMeta?.sports||[]).filter(p=>p.active===!0)].sort((p,g)=>{const c=(p.title||p.description||"").toLowerCase(),h=(g.title||g.description||"").toLowerCase();return c.localeCompare(h)}),l=[{key:"all",group:"All",title:"ALL",description:"All Sports"},...i],u=p=>{const g=this.selectedChip===p.key,c=p.key==="all";return`
        <div
          class="sport-chip ${g?"chip-selected":"chip-unselected"}"
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
    `,l.forEach(p=>{const g=this.shadowRoot.querySelector(`[data-chip="${p.key}"]`);g&&g.addEventListener("click",()=>this.handleChipClick(p.key,p.group))});const d=this.shadowRoot.querySelector("#navPrev"),f=this.shadowRoot.querySelector("#navNext");d&&d.addEventListener("click",()=>this.scrollToPrev()),f&&f.addEventListener("click",()=>this.scrollToNext()),this.initDragScroll();const m=this.shadowRoot.querySelector(".chips-container");m&&this.savedScrollPosition>0&&(m.scrollLeft=this.savedScrollPosition)}}customElements.define("bma-app-head-sports",Tf);class Ef extends HTMLElement{constructor(){super(),this.selectedItem="foot_all_sports"}connectedCallback(){this.attachShadow({mode:"open"}),this.render()}static get observedAttributes(){return["data-sync-theme","data-selected-item"]}attributeChangedCallback(t,n,a){this.shadowRoot&&n!==a&&(t==="data-selected-item"&&(this.selectedItem=a||"foot_all_sports"),this.render())}handleItemClick(t,n){this.selectedItem=t,this.setAttribute("data-selected-item",t),W.publish(n,JSON.stringify({item:t,timestamp:Date.now()})),this.render()}render(){const a=(document.getElementById("app")?.getAttribute("data-sync-theme")||"dark")==="dark",s=[{name:"foot_all_sports",caption:"Lobby",iconVar:"--nav-icon__sports--",topic:"WC.APP.FOOT.ALL_SPORTS"},{name:"foot_my_tourneys",caption:"My Tourneys",iconVar:"--nav-icon__trophy--",topic:"WC.APP.FOOT.MY_TOURNEYS"},{name:"foot_leaderboard",caption:"Leaderboard",iconVar:"--nav-icon__leaderboard--",topic:"WC.APP.FOOT.LEADERBOARD"},{name:"foot_my_account",caption:"My Profile",iconVar:"--nav-icon__my_profile_circle--",topic:"WC.APP.FOOT.MY_PROFILE"}],r=o=>`
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
    `,s.forEach(o=>{const i=this.shadowRoot.querySelector(`[data-item="${o.name}"]`);i&&(i.addEventListener("click",()=>this.handleItemClick(o.name,o.topic)),i.addEventListener("keypress",l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),this.handleItemClick(o.name,o.topic))}))})}}customElements.define("bma-app-foot",Ef);class Sf extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}static get observedAttributes(){return["data-corebetslip"]}attributeChangedCallback(t,n,a){n!==a&&this.render()}get betSlipData(){const t=this.getAttribute("data-corebetslip");if(!t)return null;try{return JSON.parse(t)}catch(n){return console.error("[bma-bet-existing] Failed to parse data-corebetslip:",n),null}}render(){const t=this.betSlipData;if(!t){this.shadowRoot.innerHTML="<div>Invalid bet data</div>";return}const n=t.bet||[];if(n.length===0){this.shadowRoot.innerHTML="<div>No bet data</div>";return}const a=n[0],s=a.short_title||"Match Info N/A",o=Object.keys(a).filter(c=>c!=="short_title")[0]||"Unknown Team",i=a[o],l=i.odds||"N/A",u=i.type||"N/A",d=parseFloat(i.stake||0).toFixed(2),f=parseFloat(i.payout||0).toFixed(2),m=i.reconciled!==!1,p=t.status_time?hn.formatDateLocal(t.status_time):"";let g=o;if(u==="spread"&&i.point){const c=parseFloat(i.point)>0?`+${i.point}`:i.point;g=`${o} ${c}`}else u==="total"&&i.point&&(g=`${i.team==="over"?"Over":"Under"} ${i.point}`);this.shadowRoot.innerHTML=`
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
          <div class="content_team_points">${g}</div>
          <div class="content_odds">${l}</div>
          <div class="content_stake_text">${d}</div>

          <!-- Row 2 -->
          <div class="content_type">${u.toUpperCase()}</div>
          <div></div>
          <div></div>

          <!-- Row 3 (payout only) -->
          <div></div>
          <div></div>
          <div class="content_payout ${m?"":"unreconciled"}">Payout: ${f}</div>
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
