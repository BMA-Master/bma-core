(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();function gs(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const be={},pn=[],ft=()=>{},Vo=()=>!1,fa=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ms=e=>e.startsWith("onUpdate:"),ke=Object.assign,bs=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Li=Object.prototype.hasOwnProperty,fe=(e,t)=>Li.call(e,t),ae=Array.isArray,fn=e=>ha(e)==="[object Map]",Qo=e=>ha(e)==="[object Set]",oe=e=>typeof e=="function",we=e=>typeof e=="string",Yt=e=>typeof e=="symbol",ye=e=>e!==null&&typeof e=="object",Xo=e=>(ye(e)||oe(e))&&oe(e.then)&&oe(e.catch),Zo=Object.prototype.toString,ha=e=>Zo.call(e),Di=e=>ha(e).slice(8,-1),er=e=>ha(e)==="[object Object]",_s=e=>we(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,An=gs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ga=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},Ii=/-\w/g,Qe=ga(e=>e.replace(Ii,t=>t.slice(1).toUpperCase())),Mi=/\B([A-Z])/g,jt=ga(e=>e.replace(Mi,"-$1").toLowerCase()),ma=ga(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ca=ga(e=>e?`on${ma(e)}`:""),Bt=(e,t)=>!Object.is(e,t),Ra=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},tr=(e,t,n,a=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:a,value:n})},Bi=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Fi=e=>{const t=we(e)?Number(e):NaN;return isNaN(t)?e:t};let Ys;const ba=()=>Ys||(Ys=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ys(e){if(ae(e)){const t={};for(let n=0;n<e.length;n++){const a=e[n],s=we(a)?Ki(a):ys(a);if(s)for(const o in s)t[o]=s[o]}return t}else if(we(e)||ye(e))return e}const $i=/;(?![^(]*\))/g,Ui=/:([^]+)/,Hi=/\/\*[^]*?\*\//g;function Ki(e){const t={};return e.replace(Hi,"").split($i).forEach(n=>{if(n){const a=n.split(Ui);a.length>1&&(t[a[0].trim()]=a[1].trim())}}),t}function Ut(e){let t="";if(we(e))t=e;else if(ae(e))for(let n=0;n<e.length;n++){const a=Ut(e[n]);a&&(t+=a+" ")}else if(ye(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Yi="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ji=gs(Yi);function nr(e){return!!e||e===""}const ar=e=>!!(e&&e.__v_isRef===!0),sr=e=>we(e)?e:e==null?"":ae(e)||ye(e)&&(e.toString===Zo||!oe(e.toString))?ar(e)?sr(e.value):JSON.stringify(e,or,2):String(e),or=(e,t)=>ar(t)?or(e,t.value):fn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[a,s],o)=>(n[Na(a,o)+" =>"]=s,n),{})}:Qo(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Na(n))}:Yt(t)?Na(t):ye(t)&&!ae(t)&&!er(t)?String(t):t,Na=(e,t="")=>{var n;return Yt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};let Ce;class rr{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ce,!t&&Ce&&(this.index=(Ce.scopes||(Ce.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Ce;try{return Ce=this,t()}finally{Ce=n}}}on(){++this._on===1&&(this.prevScope=Ce,Ce=this)}off(){this._on>0&&--this._on===0&&(Ce=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,a;for(n=0,a=this.effects.length;n<a;n++)this.effects[n].stop();for(this.effects.length=0,n=0,a=this.cleanups.length;n<a;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,a=this.scopes.length;n<a;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function ir(e){return new rr(e)}function lr(){return Ce}function Gi(e,t=!1){Ce&&Ce.cleanups.push(e)}let me;const La=new WeakSet;class cr{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ce&&Ce.active&&Ce.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,La.has(this)&&(La.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ur(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,js(this),pr(this);const t=me,n=tt;me=this,tt=!0;try{return this.fn()}finally{fr(this),me=t,tt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Es(t);this.deps=this.depsTail=void 0,js(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?La.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){za(this)&&this.run()}get dirty(){return za(this)}}let dr=0,wn,On;function ur(e,t=!1){if(e.flags|=8,t){e.next=On,On=e;return}e.next=wn,wn=e}function vs(){dr++}function Ts(){if(--dr>0)return;if(On){let t=On;for(On=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;wn;){let t=wn;for(wn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(a){e||(e=a)}t=n}}if(e)throw e}function pr(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function fr(e){let t,n=e.depsTail,a=n;for(;a;){const s=a.prevDep;a.version===-1?(a===n&&(n=s),Es(a),qi(a)):t=a,a.dep.activeLink=a.prevActiveLink,a.prevActiveLink=void 0,a=s}e.deps=t,e.depsTail=n}function za(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(hr(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function hr(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Dn)||(e.globalVersion=Dn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!za(e))))return;e.flags|=2;const t=e.dep,n=me,a=tt;me=e,tt=!0;try{pr(e);const s=e.fn(e._value);(t.version===0||Bt(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{me=n,tt=a,fr(e),e.flags&=-3}}function Es(e,t=!1){const{dep:n,prevSub:a,nextSub:s}=e;if(a&&(a.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=a,e.nextSub=void 0),n.subs===e&&(n.subs=a,!a&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)Es(o,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function qi(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let tt=!0;const gr=[];function At(){gr.push(tt),tt=!1}function wt(){const e=gr.pop();tt=e===void 0?!0:e}function js(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=me;me=void 0;try{t()}finally{me=n}}}let Dn=0;class Wi{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ss{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!me||!tt||me===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==me)n=this.activeLink=new Wi(me,this),me.deps?(n.prevDep=me.depsTail,me.depsTail.nextDep=n,me.depsTail=n):me.deps=me.depsTail=n,mr(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const a=n.nextDep;a.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=a),n.prevDep=me.depsTail,n.nextDep=void 0,me.depsTail.nextDep=n,me.depsTail=n,me.deps===n&&(me.deps=a)}return n}trigger(t){this.version++,Dn++,this.notify(t)}notify(t){vs();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ts()}}}function mr(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let a=t.deps;a;a=a.nextDep)mr(a)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const na=new WeakMap,nn=Symbol(""),Va=Symbol(""),In=Symbol("");function Re(e,t,n){if(tt&&me){let a=na.get(e);a||na.set(e,a=new Map);let s=a.get(n);s||(a.set(n,s=new Ss),s.map=a,s.key=n),s.track()}}function Et(e,t,n,a,s,o){const r=na.get(e);if(!r){Dn++;return}const i=l=>{l&&l.trigger()};if(vs(),t==="clear")r.forEach(i);else{const l=ae(e),u=l&&_s(n);if(l&&n==="length"){const c=Number(a);r.forEach((p,f)=>{(f==="length"||f===In||!Yt(f)&&f>=c)&&i(p)})}else switch((n!==void 0||r.has(void 0))&&i(r.get(n)),u&&i(r.get(In)),t){case"add":l?u&&i(r.get("length")):(i(r.get(nn)),fn(e)&&i(r.get(Va)));break;case"delete":l||(i(r.get(nn)),fn(e)&&i(r.get(Va)));break;case"set":fn(e)&&i(r.get(nn));break}}Ts()}function Ji(e,t){const n=na.get(e);return n&&n.get(t)}function rn(e){const t=de(e);return t===e?t:(Re(t,"iterate",In),nt(e)?t:t.map(Me))}function As(e){return Re(e=de(e),"iterate",In),e}const zi={__proto__:null,[Symbol.iterator](){return Da(this,Symbol.iterator,Me)},concat(...e){return rn(this).concat(...e.map(t=>ae(t)?rn(t):t))},entries(){return Da(this,"entries",e=>(e[1]=Me(e[1]),e))},every(e,t){return mt(this,"every",e,t,void 0,arguments)},filter(e,t){return mt(this,"filter",e,t,n=>n.map(Me),arguments)},find(e,t){return mt(this,"find",e,t,Me,arguments)},findIndex(e,t){return mt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return mt(this,"findLast",e,t,Me,arguments)},findLastIndex(e,t){return mt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return mt(this,"forEach",e,t,void 0,arguments)},includes(...e){return Ia(this,"includes",e)},indexOf(...e){return Ia(this,"indexOf",e)},join(e){return rn(this).join(e)},lastIndexOf(...e){return Ia(this,"lastIndexOf",e)},map(e,t){return mt(this,"map",e,t,void 0,arguments)},pop(){return yn(this,"pop")},push(...e){return yn(this,"push",e)},reduce(e,...t){return Gs(this,"reduce",e,t)},reduceRight(e,...t){return Gs(this,"reduceRight",e,t)},shift(){return yn(this,"shift")},some(e,t){return mt(this,"some",e,t,void 0,arguments)},splice(...e){return yn(this,"splice",e)},toReversed(){return rn(this).toReversed()},toSorted(e){return rn(this).toSorted(e)},toSpliced(...e){return rn(this).toSpliced(...e)},unshift(...e){return yn(this,"unshift",e)},values(){return Da(this,"values",Me)}};function Da(e,t,n){const a=As(e),s=a[t]();return a!==e&&!nt(e)&&(s._next=s.next,s.next=()=>{const o=s._next();return o.done||(o.value=n(o.value)),o}),s}const Vi=Array.prototype;function mt(e,t,n,a,s,o){const r=As(e),i=r!==e&&!nt(e),l=r[t];if(l!==Vi[t]){const p=l.apply(e,o);return i?Me(p):p}let u=n;r!==e&&(i?u=function(p,f){return n.call(this,Me(p),f,e)}:n.length>2&&(u=function(p,f){return n.call(this,p,f,e)}));const c=l.call(r,u,a);return i&&s?s(c):c}function Gs(e,t,n,a){const s=As(e);let o=n;return s!==e&&(nt(e)?n.length>3&&(o=function(r,i,l){return n.call(this,r,i,l,e)}):o=function(r,i,l){return n.call(this,r,Me(i),l,e)}),s[t](o,...a)}function Ia(e,t,n){const a=de(e);Re(a,"iterate",In);const s=a[t](...n);return(s===-1||s===!1)&&Ps(n[0])?(n[0]=de(n[0]),a[t](...n)):s}function yn(e,t,n=[]){At(),vs();const a=de(e)[t].apply(e,n);return Ts(),wt(),a}const Qi=gs("__proto__,__v_isRef,__isVue"),br=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Yt));function Xi(e){Yt(e)||(e=String(e));const t=de(this);return Re(t,"has",e),t.hasOwnProperty(e)}class _r{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,a){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return o;if(n==="__v_raw")return a===(s?o?ll:Er:o?Tr:vr).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(a)?t:void 0;const r=ae(t);if(!s){let l;if(r&&(l=zi[n]))return l;if(n==="hasOwnProperty")return Xi}const i=Reflect.get(t,n,Ae(t)?t:a);if((Yt(n)?br.has(n):Qi(n))||(s||Re(t,"get",n),o))return i;if(Ae(i)){const l=r&&_s(n)?i:i.value;return s&&ye(l)?Xa(l):l}return ye(i)?s?Xa(i):St(i):i}}class yr extends _r{constructor(t=!1){super(!1,t)}set(t,n,a,s){let o=t[n];if(!this._isShallow){const l=on(o);if(!nt(a)&&!on(a)&&(o=de(o),a=de(a)),!ae(t)&&Ae(o)&&!Ae(a))return l||(o.value=a),!0}const r=ae(t)&&_s(n)?Number(n)<t.length:fe(t,n),i=Reflect.set(t,n,a,Ae(t)?t:s);return t===de(s)&&(r?Bt(a,o)&&Et(t,"set",n,a):Et(t,"add",n,a)),i}deleteProperty(t,n){const a=fe(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&a&&Et(t,"delete",n,void 0),s}has(t,n){const a=Reflect.has(t,n);return(!Yt(n)||!br.has(n))&&Re(t,"has",n),a}ownKeys(t){return Re(t,"iterate",ae(t)?"length":nn),Reflect.ownKeys(t)}}class Zi extends _r{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const el=new yr,tl=new Zi,nl=new yr(!0);const Qa=e=>e,qn=e=>Reflect.getPrototypeOf(e);function al(e,t,n){return function(...a){const s=this.__v_raw,o=de(s),r=fn(o),i=e==="entries"||e===Symbol.iterator&&r,l=e==="keys"&&r,u=s[e](...a),c=n?Qa:t?Za:Me;return!t&&Re(o,"iterate",l?Va:nn),{next(){const{value:p,done:f}=u.next();return f?{value:p,done:f}:{value:i?[c(p[0]),c(p[1])]:c(p),done:f}},[Symbol.iterator](){return this}}}}function Wn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function sl(e,t){const n={get(s){const o=this.__v_raw,r=de(o),i=de(s);e||(Bt(s,i)&&Re(r,"get",s),Re(r,"get",i));const{has:l}=qn(r),u=t?Qa:e?Za:Me;if(l.call(r,s))return u(o.get(s));if(l.call(r,i))return u(o.get(i));o!==r&&o.get(s)},get size(){const s=this.__v_raw;return!e&&Re(de(s),"iterate",nn),s.size},has(s){const o=this.__v_raw,r=de(o),i=de(s);return e||(Bt(s,i)&&Re(r,"has",s),Re(r,"has",i)),s===i?o.has(s):o.has(s)||o.has(i)},forEach(s,o){const r=this,i=r.__v_raw,l=de(i),u=t?Qa:e?Za:Me;return!e&&Re(l,"iterate",nn),i.forEach((c,p)=>s.call(o,u(c),u(p),r))}};return ke(n,e?{add:Wn("add"),set:Wn("set"),delete:Wn("delete"),clear:Wn("clear")}:{add(s){!t&&!nt(s)&&!on(s)&&(s=de(s));const o=de(this);return qn(o).has.call(o,s)||(o.add(s),Et(o,"add",s,s)),this},set(s,o){!t&&!nt(o)&&!on(o)&&(o=de(o));const r=de(this),{has:i,get:l}=qn(r);let u=i.call(r,s);u||(s=de(s),u=i.call(r,s));const c=l.call(r,s);return r.set(s,o),u?Bt(o,c)&&Et(r,"set",s,o):Et(r,"add",s,o),this},delete(s){const o=de(this),{has:r,get:i}=qn(o);let l=r.call(o,s);l||(s=de(s),l=r.call(o,s)),i&&i.call(o,s);const u=o.delete(s);return l&&Et(o,"delete",s,void 0),u},clear(){const s=de(this),o=s.size!==0,r=s.clear();return o&&Et(s,"clear",void 0,void 0),r}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=al(s,e,t)}),n}function ws(e,t){const n=sl(e,t);return(a,s,o)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?a:Reflect.get(fe(n,s)&&s in a?n:a,s,o)}const ol={get:ws(!1,!1)},rl={get:ws(!1,!0)},il={get:ws(!0,!1)};const vr=new WeakMap,Tr=new WeakMap,Er=new WeakMap,ll=new WeakMap;function cl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function dl(e){return e.__v_skip||!Object.isExtensible(e)?0:cl(Di(e))}function St(e){return on(e)?e:Os(e,!1,el,ol,vr)}function Sr(e){return Os(e,!1,nl,rl,Tr)}function Xa(e){return Os(e,!0,tl,il,Er)}function Os(e,t,n,a,s){if(!ye(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=dl(e);if(o===0)return e;const r=s.get(e);if(r)return r;const i=new Proxy(e,o===2?a:n);return s.set(e,i),i}function an(e){return on(e)?an(e.__v_raw):!!(e&&e.__v_isReactive)}function on(e){return!!(e&&e.__v_isReadonly)}function nt(e){return!!(e&&e.__v_isShallow)}function Ps(e){return e?!!e.__v_raw:!1}function de(e){const t=e&&e.__v_raw;return t?de(t):e}function ks(e){return!fe(e,"__v_skip")&&Object.isExtensible(e)&&tr(e,"__v_skip",!0),e}const Me=e=>ye(e)?St(e):e,Za=e=>ye(e)?Xa(e):e;function Ae(e){return e?e.__v_isRef===!0:!1}function ze(e){return Ar(e,!1)}function ul(e){return Ar(e,!0)}function Ar(e,t){return Ae(e)?e:new pl(e,t)}class pl{constructor(t,n){this.dep=new Ss,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:de(t),this._value=n?t:Me(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,a=this.__v_isShallow||nt(t)||on(t);t=a?t:de(t),Bt(t,n)&&(this._rawValue=t,this._value=a?t:Me(t),this.dep.trigger())}}function Ft(e){return Ae(e)?e.value:e}const fl={get:(e,t,n)=>t==="__v_raw"?e:Ft(Reflect.get(e,t,n)),set:(e,t,n,a)=>{const s=e[t];return Ae(s)&&!Ae(n)?(s.value=n,!0):Reflect.set(e,t,n,a)}};function wr(e){return an(e)?e:new Proxy(e,fl)}function hl(e){const t=ae(e)?new Array(e.length):{};for(const n in e)t[n]=ml(e,n);return t}class gl{constructor(t,n,a){this._object=t,this._key=n,this._defaultValue=a,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Ji(de(this._object),this._key)}}function ml(e,t,n){const a=e[t];return Ae(a)?a:new gl(e,t,n)}class bl{constructor(t,n,a){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Ss(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Dn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=a}notify(){if(this.flags|=16,!(this.flags&8)&&me!==this)return ur(this,!0),!0}get value(){const t=this.dep.track();return hr(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function _l(e,t,n=!1){let a,s;return oe(e)?a=e:(a=e.get,s=e.set),new bl(a,s,n)}const Jn={},aa=new WeakMap;let Xt;function yl(e,t=!1,n=Xt){if(n){let a=aa.get(n);a||aa.set(n,a=[]),a.push(e)}}function vl(e,t,n=be){const{immediate:a,deep:s,once:o,scheduler:r,augmentJob:i,call:l}=n,u=E=>s?E:nt(E)||s===!1||s===0?Mt(E,1):Mt(E);let c,p,f,h,m=!1,d=!1;if(Ae(e)?(p=()=>e.value,m=nt(e)):an(e)?(p=()=>u(e),m=!0):ae(e)?(d=!0,m=e.some(E=>an(E)||nt(E)),p=()=>e.map(E=>{if(Ae(E))return E.value;if(an(E))return u(E);if(oe(E))return l?l(E,2):E()})):oe(e)?t?p=l?()=>l(e,2):e:p=()=>{if(f){At();try{f()}finally{wt()}}const E=Xt;Xt=c;try{return l?l(e,3,[h]):e(h)}finally{Xt=E}}:p=ft,t&&s){const E=p,O=s===!0?1/0:s;p=()=>Mt(E(),O)}const g=lr(),b=()=>{c.stop(),g&&g.active&&bs(g.effects,c)};if(o&&t){const E=t;t=(...O)=>{E(...O),b()}}let y=d?new Array(e.length).fill(Jn):Jn;const T=E=>{if(!(!(c.flags&1)||!c.dirty&&!E))if(t){const O=c.run();if(s||m||(d?O.some((C,I)=>Bt(C,y[I])):Bt(O,y))){f&&f();const C=Xt;Xt=c;try{const I=[O,y===Jn?void 0:d&&y[0]===Jn?[]:y,h];y=O,l?l(t,3,I):t(...I)}finally{Xt=C}}}else c.run()};return i&&i(T),c=new cr(p),c.scheduler=r?()=>r(T,!1):T,h=E=>yl(E,!1,c),f=c.onStop=()=>{const E=aa.get(c);if(E){if(l)l(E,4);else for(const O of E)O();aa.delete(c)}},t?a?T(!0):y=c.run():r?r(T.bind(null,!0),!0):c.run(),b.pause=c.pause.bind(c),b.resume=c.resume.bind(c),b.stop=b,b}function Mt(e,t=1/0,n){if(t<=0||!ye(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Ae(e))Mt(e.value,t,n);else if(ae(e))for(let a=0;a<e.length;a++)Mt(e[a],t,n);else if(Qo(e)||fn(e))e.forEach(a=>{Mt(a,t,n)});else if(er(e)){for(const a in e)Mt(e[a],t,n);for(const a of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,a)&&Mt(e[a],t,n)}return e}function Yn(e,t,n,a){try{return a?e(...a):e()}catch(s){_a(s,t,n)}}function at(e,t,n,a){if(oe(e)){const s=Yn(e,t,n,a);return s&&Xo(s)&&s.catch(o=>{_a(o,t,n)}),s}if(ae(e)){const s=[];for(let o=0;o<e.length;o++)s.push(at(e[o],t,n,a));return s}}function _a(e,t,n,a=!0){const s=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:r}=t&&t.appContext.config||be;if(t){let i=t.parent;const l=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const c=i.ec;if(c){for(let p=0;p<c.length;p++)if(c[p](e,l,u)===!1)return}i=i.parent}if(o){At(),Yn(o,null,10,[e,l,u]),wt();return}}Tl(e,n,s,a,r)}function Tl(e,t,n,a=!0,s=!1){if(s)throw e;console.error(e)}const Be=[];let ct=-1;const hn=[];let Rt=null,dn=0;const Or=Promise.resolve();let sa=null;function xs(e){const t=sa||Or;return e?t.then(this?e.bind(this):e):t}function El(e){let t=ct+1,n=Be.length;for(;t<n;){const a=t+n>>>1,s=Be[a],o=Mn(s);o<e||o===e&&s.flags&2?t=a+1:n=a}return t}function Cs(e){if(!(e.flags&1)){const t=Mn(e),n=Be[Be.length-1];!n||!(e.flags&2)&&t>=Mn(n)?Be.push(e):Be.splice(El(t),0,e),e.flags|=1,Pr()}}function Pr(){sa||(sa=Or.then(xr))}function Sl(e){ae(e)?hn.push(...e):Rt&&e.id===-1?Rt.splice(dn+1,0,e):e.flags&1||(hn.push(e),e.flags|=1),Pr()}function qs(e,t,n=ct+1){for(;n<Be.length;n++){const a=Be[n];if(a&&a.flags&2){if(e&&a.id!==e.uid)continue;Be.splice(n,1),n--,a.flags&4&&(a.flags&=-2),a(),a.flags&4||(a.flags&=-2)}}}function kr(e){if(hn.length){const t=[...new Set(hn)].sort((n,a)=>Mn(n)-Mn(a));if(hn.length=0,Rt){Rt.push(...t);return}for(Rt=t,dn=0;dn<Rt.length;dn++){const n=Rt[dn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Rt=null,dn=0}}const Mn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function xr(e){try{for(ct=0;ct<Be.length;ct++){const t=Be[ct];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Yn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;ct<Be.length;ct++){const t=Be[ct];t&&(t.flags&=-2)}ct=-1,Be.length=0,kr(),sa=null,(Be.length||hn.length)&&xr()}}let et=null,Cr=null;function oa(e){const t=et;return et=e,Cr=e&&e.type.__scopeId||null,t}function es(e,t=et,n){if(!t||e._n)return e;const a=(...s)=>{a._d&&la(-1);const o=oa(t);let r;try{r=e(...s)}finally{oa(o),a._d&&la(1)}return r};return a._n=!0,a._c=!0,a._d=!0,a}function Jt(e,t,n,a){const s=e.dirs,o=t&&t.dirs;for(let r=0;r<s.length;r++){const i=s[r];o&&(i.oldValue=o[r].value);let l=i.dir[a];l&&(At(),at(l,n,8,[e.el,i,e,t]),wt())}}const Al=Symbol("_vte"),Rr=e=>e.__isTeleport,vt=Symbol("_leaveCb"),zn=Symbol("_enterCb");function wl(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Gt(()=>{e.isMounted=!0}),Ur(()=>{e.isUnmounting=!0}),e}const qe=[Function,Array],Nr={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:qe,onEnter:qe,onAfterEnter:qe,onEnterCancelled:qe,onBeforeLeave:qe,onLeave:qe,onAfterLeave:qe,onLeaveCancelled:qe,onBeforeAppear:qe,onAppear:qe,onAfterAppear:qe,onAppearCancelled:qe},Lr=e=>{const t=e.subTree;return t.component?Lr(t.component):t},Ol={name:"BaseTransition",props:Nr,setup(e,{slots:t}){const n=Ds(),a=wl();return()=>{const s=t.default&&Mr(t.default(),!0);if(!s||!s.length)return;const o=Dr(s),r=de(e),{mode:i}=r;if(a.isLeaving)return Ma(o);const l=Ws(o);if(!l)return Ma(o);let u=ts(l,r,a,n,p=>u=p);l.type!==Ye&&Bn(l,u);let c=n.subTree&&Ws(n.subTree);if(c&&c.type!==Ye&&!Zt(c,l)&&Lr(n).type!==Ye){let p=ts(c,r,a,n);if(Bn(c,p),i==="out-in"&&l.type!==Ye)return a.isLeaving=!0,p.afterLeave=()=>{a.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,c=void 0},Ma(o);i==="in-out"&&l.type!==Ye?p.delayLeave=(f,h,m)=>{const d=Ir(a,c);d[String(c.key)]=c,f[vt]=()=>{h(),f[vt]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{m(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return o}}};function Dr(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Ye){t=n;break}}return t}const Pl=Ol;function Ir(e,t){const{leavingVNodes:n}=e;let a=n.get(t.type);return a||(a=Object.create(null),n.set(t.type,a)),a}function ts(e,t,n,a,s){const{appear:o,mode:r,persisted:i=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:p,onBeforeLeave:f,onLeave:h,onAfterLeave:m,onLeaveCancelled:d,onBeforeAppear:g,onAppear:b,onAfterAppear:y,onAppearCancelled:T}=t,E=String(e.key),O=Ir(n,e),C=(w,N)=>{w&&at(w,a,9,N)},I=(w,N)=>{const $=N[1];C(w,N),ae(w)?w.every(P=>P.length<=1)&&$():w.length<=1&&$()},B={mode:r,persisted:i,beforeEnter(w){let N=l;if(!n.isMounted)if(o)N=g||l;else return;w[vt]&&w[vt](!0);const $=O[E];$&&Zt(e,$)&&$.el[vt]&&$.el[vt](),C(N,[w])},enter(w){let N=u,$=c,P=p;if(!n.isMounted)if(o)N=b||u,$=y||c,P=T||p;else return;let K=!1;const Q=w[zn]=ee=>{K||(K=!0,ee?C(P,[w]):C($,[w]),B.delayedLeave&&B.delayedLeave(),w[zn]=void 0)};N?I(N,[w,Q]):Q()},leave(w,N){const $=String(e.key);if(w[zn]&&w[zn](!0),n.isUnmounting)return N();C(f,[w]);let P=!1;const K=w[vt]=Q=>{P||(P=!0,N(),Q?C(d,[w]):C(m,[w]),w[vt]=void 0,O[$]===e&&delete O[$])};O[$]=e,h?I(h,[w,K]):K()},clone(w){const N=ts(w,t,n,a,s);return s&&s(N),N}};return B}function Ma(e){if(ya(e))return e=Ht(e),e.children=null,e}function Ws(e){if(!ya(e))return Rr(e.type)&&e.children?Dr(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&oe(n.default))return n.default()}}function Bn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Bn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Mr(e,t=!1,n){let a=[],s=0;for(let o=0;o<e.length;o++){let r=e[o];const i=n==null?r.key:String(n)+String(r.key!=null?r.key:o);r.type===ut?(r.patchFlag&128&&s++,a=a.concat(Mr(r.children,t,i))):(t||r.type!==Ye)&&a.push(i!=null?Ht(r,{key:i}):r)}if(s>1)for(let o=0;o<a.length;o++)a[o].patchFlag=-2;return a}function Br(e,t){return oe(e)?ke({name:e.name},t,{setup:e}):e}function Fr(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const ra=new WeakMap;function Pn(e,t,n,a,s=!1){if(ae(e)){e.forEach((m,d)=>Pn(m,t&&(ae(t)?t[d]:t),n,a,s));return}if(kn(a)&&!s){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&Pn(e,t,n,a.component.subTree);return}const o=a.shapeFlag&4?Is(a.component):a.el,r=s?null:o,{i,r:l}=e,u=t&&t.r,c=i.refs===be?i.refs={}:i.refs,p=i.setupState,f=de(p),h=p===be?Vo:m=>fe(f,m);if(u!=null&&u!==l){if(Js(t),we(u))c[u]=null,h(u)&&(p[u]=null);else if(Ae(u)){u.value=null;const m=t;m.k&&(c[m.k]=null)}}if(oe(l))Yn(l,i,12,[r,c]);else{const m=we(l),d=Ae(l);if(m||d){const g=()=>{if(e.f){const b=m?h(l)?p[l]:c[l]:l.value;if(s)ae(b)&&bs(b,o);else if(ae(b))b.includes(o)||b.push(o);else if(m)c[l]=[o],h(l)&&(p[l]=c[l]);else{const y=[o];l.value=y,e.k&&(c[e.k]=y)}}else m?(c[l]=r,h(l)&&(p[l]=r)):d&&(l.value=r,e.k&&(c[e.k]=r))};if(r){const b=()=>{g(),ra.delete(e)};b.id=-1,ra.set(e,b),Ke(b,n)}else Js(e),g()}}}function Js(e){const t=ra.get(e);t&&(t.flags|=8,ra.delete(e))}ba().requestIdleCallback;ba().cancelIdleCallback;const kn=e=>!!e.type.__asyncLoader,ya=e=>e.type.__isKeepAlive;function kl(e,t){$r(e,"a",t)}function xl(e,t){$r(e,"da",t)}function $r(e,t,n=Ne){const a=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(va(t,a,n),n){let s=n.parent;for(;s&&s.parent;)ya(s.parent.vnode)&&Cl(a,t,n,s),s=s.parent}}function Cl(e,t,n,a){const s=va(t,e,a,!0);Ta(()=>{bs(a[t],s)},n)}function va(e,t,n=Ne,a=!1){if(n){const s=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...r)=>{At();const i=jn(n),l=at(t,n,e,r);return i(),wt(),l});return a?s.unshift(o):s.push(o),o}}const Pt=e=>(t,n=Ne)=>{(!$n||e==="sp")&&va(e,(...a)=>t(...a),n)},Rl=Pt("bm"),Gt=Pt("m"),Nl=Pt("bu"),Ll=Pt("u"),Ur=Pt("bum"),Ta=Pt("um"),Dl=Pt("sp"),Il=Pt("rtg"),Ml=Pt("rtc");function Bl(e,t=Ne){va("ec",e,t)}const Fl="components",Hr=Symbol.for("v-ndc");function $l(e){return we(e)?Ul(Fl,e,!1)||e:e||Hr}function Ul(e,t,n=!0,a=!1){const s=et||Ne;if(s){const o=s.type;{const i=kc(o,!1);if(i&&(i===t||i===Qe(t)||i===ma(Qe(t))))return o}const r=zs(s[e]||o[e],t)||zs(s.appContext[e],t);return!r&&a?o:r}}function zs(e,t){return e&&(e[t]||e[Qe(t)]||e[ma(Qe(t))])}const ns=e=>e?ii(e)?Is(e):ns(e.parent):null,xn=ke(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ns(e.parent),$root:e=>ns(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Yr(e),$forceUpdate:e=>e.f||(e.f=()=>{Cs(e.update)}),$nextTick:e=>e.n||(e.n=xs.bind(e.proxy)),$watch:e=>lc.bind(e)}),Ba=(e,t)=>e!==be&&!e.__isScriptSetup&&fe(e,t),Hl={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:a,data:s,props:o,accessCache:r,type:i,appContext:l}=e;let u;if(t[0]!=="$"){const h=r[t];if(h!==void 0)switch(h){case 1:return a[t];case 2:return s[t];case 4:return n[t];case 3:return o[t]}else{if(Ba(a,t))return r[t]=1,a[t];if(s!==be&&fe(s,t))return r[t]=2,s[t];if((u=e.propsOptions[0])&&fe(u,t))return r[t]=3,o[t];if(n!==be&&fe(n,t))return r[t]=4,n[t];as&&(r[t]=0)}}const c=xn[t];let p,f;if(c)return t==="$attrs"&&Re(e.attrs,"get",""),c(e);if((p=i.__cssModules)&&(p=p[t]))return p;if(n!==be&&fe(n,t))return r[t]=4,n[t];if(f=l.config.globalProperties,fe(f,t))return f[t]},set({_:e},t,n){const{data:a,setupState:s,ctx:o}=e;return Ba(s,t)?(s[t]=n,!0):a!==be&&fe(a,t)?(a[t]=n,!0):fe(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:a,appContext:s,propsOptions:o,type:r}},i){let l,u;return!!(n[i]||e!==be&&i[0]!=="$"&&fe(e,i)||Ba(t,i)||(l=o[0])&&fe(l,i)||fe(a,i)||fe(xn,i)||fe(s.config.globalProperties,i)||(u=r.__cssModules)&&u[i])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:fe(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Vs(e){return ae(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let as=!0;function Kl(e){const t=Yr(e),n=e.proxy,a=e.ctx;as=!1,t.beforeCreate&&Qs(t.beforeCreate,e,"bc");const{data:s,computed:o,methods:r,watch:i,provide:l,inject:u,created:c,beforeMount:p,mounted:f,beforeUpdate:h,updated:m,activated:d,deactivated:g,beforeDestroy:b,beforeUnmount:y,destroyed:T,unmounted:E,render:O,renderTracked:C,renderTriggered:I,errorCaptured:B,serverPrefetch:w,expose:N,inheritAttrs:$,components:P,directives:K,filters:Q}=t;if(u&&Yl(u,a,null),r)for(const W in r){const H=r[W];oe(H)&&(a[W]=H.bind(n))}if(s){const W=s.call(n,n);ye(W)&&(e.data=St(W))}if(as=!0,o)for(const W in o){const H=o[W],re=oe(H)?H.bind(n,n):oe(H.get)?H.get.bind(n,n):ft,te=!oe(H)&&oe(H.set)?H.set.bind(n):ft,Te=je({get:re,set:te});Object.defineProperty(a,W,{enumerable:!0,configurable:!0,get:()=>Te.value,set:le=>Te.value=le})}if(i)for(const W in i)Kr(i[W],a,n,W);if(l){const W=oe(l)?l.call(n):l;Reflect.ownKeys(W).forEach(H=>{Xn(H,W[H])})}c&&Qs(c,e,"c");function X(W,H){ae(H)?H.forEach(re=>W(re.bind(n))):H&&W(H.bind(n))}if(X(Rl,p),X(Gt,f),X(Nl,h),X(Ll,m),X(kl,d),X(xl,g),X(Bl,B),X(Ml,C),X(Il,I),X(Ur,y),X(Ta,E),X(Dl,w),ae(N))if(N.length){const W=e.exposed||(e.exposed={});N.forEach(H=>{Object.defineProperty(W,H,{get:()=>n[H],set:re=>n[H]=re,enumerable:!0})})}else e.exposed||(e.exposed={});O&&e.render===ft&&(e.render=O),$!=null&&(e.inheritAttrs=$),P&&(e.components=P),K&&(e.directives=K),w&&Fr(e)}function Yl(e,t,n=ft){ae(e)&&(e=ss(e));for(const a in e){const s=e[a];let o;ye(s)?"default"in s?o=Ve(s.from||a,s.default,!0):o=Ve(s.from||a):o=Ve(s),Ae(o)?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:r=>o.value=r}):t[a]=o}}function Qs(e,t,n){at(ae(e)?e.map(a=>a.bind(t.proxy)):e.bind(t.proxy),t,n)}function Kr(e,t,n,a){let s=a.includes(".")?ni(n,a):()=>n[a];if(we(e)){const o=t[e];oe(o)&&Cn(s,o)}else if(oe(e))Cn(s,e.bind(n));else if(ye(e))if(ae(e))e.forEach(o=>Kr(o,t,n,a));else{const o=oe(e.handler)?e.handler.bind(n):t[e.handler];oe(o)&&Cn(s,o,e)}}function Yr(e){const t=e.type,{mixins:n,extends:a}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:r}}=e.appContext,i=o.get(t);let l;return i?l=i:!s.length&&!n&&!a?l=t:(l={},s.length&&s.forEach(u=>ia(l,u,r,!0)),ia(l,t,r)),ye(t)&&o.set(t,l),l}function ia(e,t,n,a=!1){const{mixins:s,extends:o}=t;o&&ia(e,o,n,!0),s&&s.forEach(r=>ia(e,r,n,!0));for(const r in t)if(!(a&&r==="expose")){const i=jl[r]||n&&n[r];e[r]=i?i(e[r],t[r]):t[r]}return e}const jl={data:Xs,props:Zs,emits:Zs,methods:En,computed:En,beforeCreate:De,created:De,beforeMount:De,mounted:De,beforeUpdate:De,updated:De,beforeDestroy:De,beforeUnmount:De,destroyed:De,unmounted:De,activated:De,deactivated:De,errorCaptured:De,serverPrefetch:De,components:En,directives:En,watch:ql,provide:Xs,inject:Gl};function Xs(e,t){return t?e?function(){return ke(oe(e)?e.call(this,this):e,oe(t)?t.call(this,this):t)}:t:e}function Gl(e,t){return En(ss(e),ss(t))}function ss(e){if(ae(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function De(e,t){return e?[...new Set([].concat(e,t))]:t}function En(e,t){return e?ke(Object.create(null),e,t):t}function Zs(e,t){return e?ae(e)&&ae(t)?[...new Set([...e,...t])]:ke(Object.create(null),Vs(e),Vs(t??{})):t}function ql(e,t){if(!e)return t;if(!t)return e;const n=ke(Object.create(null),e);for(const a in t)n[a]=De(e[a],t[a]);return n}function jr(){return{app:null,config:{isNativeTag:Vo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wl=0;function Jl(e,t){return function(a,s=null){oe(a)||(a=ke({},a)),s!=null&&!ye(s)&&(s=null);const o=jr(),r=new WeakSet,i=[];let l=!1;const u=o.app={_uid:Wl++,_component:a,_props:s,_container:null,_context:o,_instance:null,version:Cc,get config(){return o.config},set config(c){},use(c,...p){return r.has(c)||(c&&oe(c.install)?(r.add(c),c.install(u,...p)):oe(c)&&(r.add(c),c(u,...p))),u},mixin(c){return o.mixins.includes(c)||o.mixins.push(c),u},component(c,p){return p?(o.components[c]=p,u):o.components[c]},directive(c,p){return p?(o.directives[c]=p,u):o.directives[c]},mount(c,p,f){if(!l){const h=u._ceVNode||Ue(a,s);return h.appContext=o,f===!0?f="svg":f===!1&&(f=void 0),e(h,c,f),l=!0,u._container=c,c.__vue_app__=u,Is(h.component)}},onUnmount(c){i.push(c)},unmount(){l&&(at(i,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(c,p){return o.provides[c]=p,u},runWithContext(c){const p=sn;sn=u;try{return c()}finally{sn=p}}};return u}}let sn=null;function Xn(e,t){if(Ne){let n=Ne.provides;const a=Ne.parent&&Ne.parent.provides;a===n&&(n=Ne.provides=Object.create(a)),n[e]=t}}function Ve(e,t,n=!1){const a=Ds();if(a||sn){let s=sn?sn._context.provides:a?a.parent==null||a.ce?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&oe(t)?t.call(a&&a.proxy):t}}function zl(){return!!(Ds()||sn)}const Gr={},qr=()=>Object.create(Gr),Wr=e=>Object.getPrototypeOf(e)===Gr;function Vl(e,t,n,a=!1){const s={},o=qr();e.propsDefaults=Object.create(null),Jr(e,t,s,o);for(const r in e.propsOptions[0])r in s||(s[r]=void 0);n?e.props=a?s:Sr(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function Ql(e,t,n,a){const{props:s,attrs:o,vnode:{patchFlag:r}}=e,i=de(s),[l]=e.propsOptions;let u=!1;if((a||r>0)&&!(r&16)){if(r&8){const c=e.vnode.dynamicProps;for(let p=0;p<c.length;p++){let f=c[p];if(Ea(e.emitsOptions,f))continue;const h=t[f];if(l)if(fe(o,f))h!==o[f]&&(o[f]=h,u=!0);else{const m=Qe(f);s[m]=os(l,i,m,h,e,!1)}else h!==o[f]&&(o[f]=h,u=!0)}}}else{Jr(e,t,s,o)&&(u=!0);let c;for(const p in i)(!t||!fe(t,p)&&((c=jt(p))===p||!fe(t,c)))&&(l?n&&(n[p]!==void 0||n[c]!==void 0)&&(s[p]=os(l,i,p,void 0,e,!0)):delete s[p]);if(o!==i)for(const p in o)(!t||!fe(t,p))&&(delete o[p],u=!0)}u&&Et(e.attrs,"set","")}function Jr(e,t,n,a){const[s,o]=e.propsOptions;let r=!1,i;if(t)for(let l in t){if(An(l))continue;const u=t[l];let c;s&&fe(s,c=Qe(l))?!o||!o.includes(c)?n[c]=u:(i||(i={}))[c]=u:Ea(e.emitsOptions,l)||(!(l in a)||u!==a[l])&&(a[l]=u,r=!0)}if(o){const l=de(n),u=i||be;for(let c=0;c<o.length;c++){const p=o[c];n[p]=os(s,l,p,u[p],e,!fe(u,p))}}return r}function os(e,t,n,a,s,o){const r=e[n];if(r!=null){const i=fe(r,"default");if(i&&a===void 0){const l=r.default;if(r.type!==Function&&!r.skipFactory&&oe(l)){const{propsDefaults:u}=s;if(n in u)a=u[n];else{const c=jn(s);a=u[n]=l.call(null,t),c()}}else a=l;s.ce&&s.ce._setProp(n,a)}r[0]&&(o&&!i?a=!1:r[1]&&(a===""||a===jt(n))&&(a=!0))}return a}const Xl=new WeakMap;function zr(e,t,n=!1){const a=n?Xl:t.propsCache,s=a.get(e);if(s)return s;const o=e.props,r={},i=[];let l=!1;if(!oe(e)){const c=p=>{l=!0;const[f,h]=zr(p,t,!0);ke(r,f),h&&i.push(...h)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!o&&!l)return ye(e)&&a.set(e,pn),pn;if(ae(o))for(let c=0;c<o.length;c++){const p=Qe(o[c]);eo(p)&&(r[p]=be)}else if(o)for(const c in o){const p=Qe(c);if(eo(p)){const f=o[c],h=r[p]=ae(f)||oe(f)?{type:f}:ke({},f),m=h.type;let d=!1,g=!0;if(ae(m))for(let b=0;b<m.length;++b){const y=m[b],T=oe(y)&&y.name;if(T==="Boolean"){d=!0;break}else T==="String"&&(g=!1)}else d=oe(m)&&m.name==="Boolean";h[0]=d,h[1]=g,(d||fe(h,"default"))&&i.push(p)}}const u=[r,i];return ye(e)&&a.set(e,u),u}function eo(e){return e[0]!=="$"&&!An(e)}const Rs=e=>e==="_"||e==="_ctx"||e==="$stable",Ns=e=>ae(e)?e.map(pt):[pt(e)],Zl=(e,t,n)=>{if(t._n)return t;const a=es((...s)=>Ns(t(...s)),n);return a._c=!1,a},Vr=(e,t,n)=>{const a=e._ctx;for(const s in e){if(Rs(s))continue;const o=e[s];if(oe(o))t[s]=Zl(s,o,a);else if(o!=null){const r=Ns(o);t[s]=()=>r}}},Qr=(e,t)=>{const n=Ns(t);e.slots.default=()=>n},Xr=(e,t,n)=>{for(const a in t)(n||!Rs(a))&&(e[a]=t[a])},ec=(e,t,n)=>{const a=e.slots=qr();if(e.vnode.shapeFlag&32){const s=t._;s?(Xr(a,t,n),n&&tr(a,"_",s,!0)):Vr(t,a)}else t&&Qr(e,t)},tc=(e,t,n)=>{const{vnode:a,slots:s}=e;let o=!0,r=be;if(a.shapeFlag&32){const i=t._;i?n&&i===1?o=!1:Xr(s,t,n):(o=!t.$stable,Vr(t,s)),r=t}else t&&(Qr(e,t),r={default:1});if(o)for(const i in s)!Rs(i)&&r[i]==null&&delete s[i]},Ke=mc;function nc(e){return ac(e)}function ac(e,t){const n=ba();n.__VUE__=!0;const{insert:a,remove:s,patchProp:o,createElement:r,createText:i,createComment:l,setText:u,setElementText:c,parentNode:p,nextSibling:f,setScopeId:h=ft,insertStaticContent:m}=e,d=(_,v,S,L=null,D=null,R=null,q=void 0,G=null,U=!!v.dynamicChildren)=>{if(_===v)return;_&&!Zt(_,v)&&(L=x(_),le(_,D,R,!0),_=null),v.patchFlag===-2&&(U=!1,v.dynamicChildren=null);const{type:F,ref:ne,shapeFlag:J}=v;switch(F){case Sa:g(_,v,S,L);break;case Ye:b(_,v,S,L);break;case Zn:_==null&&y(v,S,L,q);break;case ut:P(_,v,S,L,D,R,q,G,U);break;default:J&1?O(_,v,S,L,D,R,q,G,U):J&6?K(_,v,S,L,D,R,q,G,U):(J&64||J&128)&&F.process(_,v,S,L,D,R,q,G,U,V)}ne!=null&&D?Pn(ne,_&&_.ref,R,v||_,!v):ne==null&&_&&_.ref!=null&&Pn(_.ref,null,R,_,!0)},g=(_,v,S,L)=>{if(_==null)a(v.el=i(v.children),S,L);else{const D=v.el=_.el;v.children!==_.children&&u(D,v.children)}},b=(_,v,S,L)=>{_==null?a(v.el=l(v.children||""),S,L):v.el=_.el},y=(_,v,S,L)=>{[_.el,_.anchor]=m(_.children,v,S,L,_.el,_.anchor)},T=({el:_,anchor:v},S,L)=>{let D;for(;_&&_!==v;)D=f(_),a(_,S,L),_=D;a(v,S,L)},E=({el:_,anchor:v})=>{let S;for(;_&&_!==v;)S=f(_),s(_),_=S;s(v)},O=(_,v,S,L,D,R,q,G,U)=>{if(v.type==="svg"?q="svg":v.type==="math"&&(q="mathml"),_==null)C(v,S,L,D,R,q,G,U);else{const F=_.el&&_.el._isVueCE?_.el:null;try{F&&F._beginPatch(),w(_,v,D,R,q,G,U)}finally{F&&F._endPatch()}}},C=(_,v,S,L,D,R,q,G)=>{let U,F;const{props:ne,shapeFlag:J,transition:Z,dirs:se}=_;if(U=_.el=r(_.type,R,ne&&ne.is,ne),J&8?c(U,_.children):J&16&&B(_.children,U,null,L,D,Fa(_,R),q,G),se&&Jt(_,null,L,"created"),I(U,_,_.scopeId,q,L),ne){for(const ge in ne)ge!=="value"&&!An(ge)&&o(U,ge,null,ne[ge],R,L);"value"in ne&&o(U,"value",null,ne.value,R),(F=ne.onVnodeBeforeMount)&&lt(F,L,_)}se&&Jt(_,null,L,"beforeMount");const ce=sc(D,Z);ce&&Z.beforeEnter(U),a(U,v,S),((F=ne&&ne.onVnodeMounted)||ce||se)&&Ke(()=>{F&&lt(F,L,_),ce&&Z.enter(U),se&&Jt(_,null,L,"mounted")},D)},I=(_,v,S,L,D)=>{if(S&&h(_,S),L)for(let R=0;R<L.length;R++)h(_,L[R]);if(D){let R=D.subTree;if(v===R||si(R.type)&&(R.ssContent===v||R.ssFallback===v)){const q=D.vnode;I(_,q,q.scopeId,q.slotScopeIds,D.parent)}}},B=(_,v,S,L,D,R,q,G,U=0)=>{for(let F=U;F<_.length;F++){const ne=_[F]=G?Nt(_[F]):pt(_[F]);d(null,ne,v,S,L,D,R,q,G)}},w=(_,v,S,L,D,R,q)=>{const G=v.el=_.el;let{patchFlag:U,dynamicChildren:F,dirs:ne}=v;U|=_.patchFlag&16;const J=_.props||be,Z=v.props||be;let se;if(S&&zt(S,!1),(se=Z.onVnodeBeforeUpdate)&&lt(se,S,v,_),ne&&Jt(v,_,S,"beforeUpdate"),S&&zt(S,!0),(J.innerHTML&&Z.innerHTML==null||J.textContent&&Z.textContent==null)&&c(G,""),F?N(_.dynamicChildren,F,G,S,L,Fa(v,D),R):q||H(_,v,G,null,S,L,Fa(v,D),R,!1),U>0){if(U&16)$(G,J,Z,S,D);else if(U&2&&J.class!==Z.class&&o(G,"class",null,Z.class,D),U&4&&o(G,"style",J.style,Z.style,D),U&8){const ce=v.dynamicProps;for(let ge=0;ge<ce.length;ge++){const he=ce[ge],Fe=J[he],$e=Z[he];($e!==Fe||he==="value")&&o(G,he,Fe,$e,D,S)}}U&1&&_.children!==v.children&&c(G,v.children)}else!q&&F==null&&$(G,J,Z,S,D);((se=Z.onVnodeUpdated)||ne)&&Ke(()=>{se&&lt(se,S,v,_),ne&&Jt(v,_,S,"updated")},L)},N=(_,v,S,L,D,R,q)=>{for(let G=0;G<v.length;G++){const U=_[G],F=v[G],ne=U.el&&(U.type===ut||!Zt(U,F)||U.shapeFlag&198)?p(U.el):S;d(U,F,ne,null,L,D,R,q,!0)}},$=(_,v,S,L,D)=>{if(v!==S){if(v!==be)for(const R in v)!An(R)&&!(R in S)&&o(_,R,v[R],null,D,L);for(const R in S){if(An(R))continue;const q=S[R],G=v[R];q!==G&&R!=="value"&&o(_,R,G,q,D,L)}"value"in S&&o(_,"value",v.value,S.value,D)}},P=(_,v,S,L,D,R,q,G,U)=>{const F=v.el=_?_.el:i(""),ne=v.anchor=_?_.anchor:i("");let{patchFlag:J,dynamicChildren:Z,slotScopeIds:se}=v;se&&(G=G?G.concat(se):se),_==null?(a(F,S,L),a(ne,S,L),B(v.children||[],S,ne,D,R,q,G,U)):J>0&&J&64&&Z&&_.dynamicChildren?(N(_.dynamicChildren,Z,S,D,R,q,G),(v.key!=null||D&&v===D.subTree)&&Zr(_,v,!0)):H(_,v,S,ne,D,R,q,G,U)},K=(_,v,S,L,D,R,q,G,U)=>{v.slotScopeIds=G,_==null?v.shapeFlag&512?D.ctx.activate(v,S,L,q,U):Q(v,S,L,D,R,q,U):ee(_,v,U)},Q=(_,v,S,L,D,R,q)=>{const G=_.component=Sc(_,L,D);if(ya(_)&&(G.ctx.renderer=V),Ac(G,!1,q),G.asyncDep){if(D&&D.registerDep(G,X,q),!_.el){const U=G.subTree=Ue(Ye);b(null,U,v,S),_.placeholder=U.el}}else X(G,_,v,S,D,R,q)},ee=(_,v,S)=>{const L=v.component=_.component;if(hc(_,v,S))if(L.asyncDep&&!L.asyncResolved){W(L,v,S);return}else L.next=v,L.update();else v.el=_.el,L.vnode=v},X=(_,v,S,L,D,R,q)=>{const G=()=>{if(_.isMounted){let{next:J,bu:Z,u:se,parent:ce,vnode:ge}=_;{const rt=ei(_);if(rt){J&&(J.el=ge.el,W(_,J,q)),rt.asyncDep.then(()=>{_.isUnmounted||G()});return}}let he=J,Fe;zt(_,!1),J?(J.el=ge.el,W(_,J,q)):J=ge,Z&&Ra(Z),(Fe=J.props&&J.props.onVnodeBeforeUpdate)&&lt(Fe,ce,J,ge),zt(_,!0);const $e=no(_),ot=_.subTree;_.subTree=$e,d(ot,$e,p(ot.el),x(ot),_,D,R),J.el=$e.el,he===null&&gc(_,$e.el),se&&Ke(se,D),(Fe=J.props&&J.props.onVnodeUpdated)&&Ke(()=>lt(Fe,ce,J,ge),D)}else{let J;const{el:Z,props:se}=v,{bm:ce,m:ge,parent:he,root:Fe,type:$e}=_,ot=kn(v);zt(_,!1),ce&&Ra(ce),!ot&&(J=se&&se.onVnodeBeforeMount)&&lt(J,he,v),zt(_,!0);{Fe.ce&&Fe.ce._def.shadowRoot!==!1&&Fe.ce._injectChildStyle($e);const rt=_.subTree=no(_);d(null,rt,S,L,_,D,R),v.el=rt.el}if(ge&&Ke(ge,D),!ot&&(J=se&&se.onVnodeMounted)){const rt=v;Ke(()=>lt(J,he,rt),D)}(v.shapeFlag&256||he&&kn(he.vnode)&&he.vnode.shapeFlag&256)&&_.a&&Ke(_.a,D),_.isMounted=!0,v=S=L=null}};_.scope.on();const U=_.effect=new cr(G);_.scope.off();const F=_.update=U.run.bind(U),ne=_.job=U.runIfDirty.bind(U);ne.i=_,ne.id=_.uid,U.scheduler=()=>Cs(ne),zt(_,!0),F()},W=(_,v,S)=>{v.component=_;const L=_.vnode.props;_.vnode=v,_.next=null,Ql(_,v.props,L,S),tc(_,v.children,S),At(),qs(_),wt()},H=(_,v,S,L,D,R,q,G,U=!1)=>{const F=_&&_.children,ne=_?_.shapeFlag:0,J=v.children,{patchFlag:Z,shapeFlag:se}=v;if(Z>0){if(Z&128){te(F,J,S,L,D,R,q,G,U);return}else if(Z&256){re(F,J,S,L,D,R,q,G,U);return}}se&8?(ne&16&&ue(F,D,R),J!==F&&c(S,J)):ne&16?se&16?te(F,J,S,L,D,R,q,G,U):ue(F,D,R,!0):(ne&8&&c(S,""),se&16&&B(J,S,L,D,R,q,G,U))},re=(_,v,S,L,D,R,q,G,U)=>{_=_||pn,v=v||pn;const F=_.length,ne=v.length,J=Math.min(F,ne);let Z;for(Z=0;Z<J;Z++){const se=v[Z]=U?Nt(v[Z]):pt(v[Z]);d(_[Z],se,S,null,D,R,q,G,U)}F>ne?ue(_,D,R,!0,!1,J):B(v,S,L,D,R,q,G,U,J)},te=(_,v,S,L,D,R,q,G,U)=>{let F=0;const ne=v.length;let J=_.length-1,Z=ne-1;for(;F<=J&&F<=Z;){const se=_[F],ce=v[F]=U?Nt(v[F]):pt(v[F]);if(Zt(se,ce))d(se,ce,S,null,D,R,q,G,U);else break;F++}for(;F<=J&&F<=Z;){const se=_[J],ce=v[Z]=U?Nt(v[Z]):pt(v[Z]);if(Zt(se,ce))d(se,ce,S,null,D,R,q,G,U);else break;J--,Z--}if(F>J){if(F<=Z){const se=Z+1,ce=se<ne?v[se].el:L;for(;F<=Z;)d(null,v[F]=U?Nt(v[F]):pt(v[F]),S,ce,D,R,q,G,U),F++}}else if(F>Z)for(;F<=J;)le(_[F],D,R,!0),F++;else{const se=F,ce=F,ge=new Map;for(F=ce;F<=Z;F++){const He=v[F]=U?Nt(v[F]):pt(v[F]);He.key!=null&&ge.set(He.key,F)}let he,Fe=0;const $e=Z-ce+1;let ot=!1,rt=0;const _n=new Array($e);for(F=0;F<$e;F++)_n[F]=0;for(F=se;F<=J;F++){const He=_[F];if(Fe>=$e){le(He,D,R,!0);continue}let it;if(He.key!=null)it=ge.get(He.key);else for(he=ce;he<=Z;he++)if(_n[he-ce]===0&&Zt(He,v[he])){it=he;break}it===void 0?le(He,D,R,!0):(_n[it-ce]=F+1,it>=rt?rt=it:ot=!0,d(He,v[it],S,null,D,R,q,G,U),Fe++)}const Us=ot?oc(_n):pn;for(he=Us.length-1,F=$e-1;F>=0;F--){const He=ce+F,it=v[He],Hs=v[He+1],Ks=He+1<ne?Hs.el||Hs.placeholder:L;_n[F]===0?d(null,it,S,Ks,D,R,q,G,U):ot&&(he<0||F!==Us[he]?Te(it,S,Ks,2):he--)}}},Te=(_,v,S,L,D=null)=>{const{el:R,type:q,transition:G,children:U,shapeFlag:F}=_;if(F&6){Te(_.component.subTree,v,S,L);return}if(F&128){_.suspense.move(v,S,L);return}if(F&64){q.move(_,v,S,V);return}if(q===ut){a(R,v,S);for(let J=0;J<U.length;J++)Te(U[J],v,S,L);a(_.anchor,v,S);return}if(q===Zn){T(_,v,S);return}if(L!==2&&F&1&&G)if(L===0)G.beforeEnter(R),a(R,v,S),Ke(()=>G.enter(R),D);else{const{leave:J,delayLeave:Z,afterLeave:se}=G,ce=()=>{_.ctx.isUnmounted?s(R):a(R,v,S)},ge=()=>{R._isLeaving&&R[vt](!0),J(R,()=>{ce(),se&&se()})};Z?Z(R,ce,ge):ge()}else a(R,v,S)},le=(_,v,S,L=!1,D=!1)=>{const{type:R,props:q,ref:G,children:U,dynamicChildren:F,shapeFlag:ne,patchFlag:J,dirs:Z,cacheIndex:se}=_;if(J===-2&&(D=!1),G!=null&&(At(),Pn(G,null,S,_,!0),wt()),se!=null&&(v.renderCache[se]=void 0),ne&256){v.ctx.deactivate(_);return}const ce=ne&1&&Z,ge=!kn(_);let he;if(ge&&(he=q&&q.onVnodeBeforeUnmount)&&lt(he,v,_),ne&6)Pe(_.component,S,L);else{if(ne&128){_.suspense.unmount(S,L);return}ce&&Jt(_,null,v,"beforeUnmount"),ne&64?_.type.remove(_,v,S,V,L):F&&!F.hasOnce&&(R!==ut||J>0&&J&64)?ue(F,v,S,!1,!0):(R===ut&&J&384||!D&&ne&16)&&ue(U,v,S),L&&Le(_)}(ge&&(he=q&&q.onVnodeUnmounted)||ce)&&Ke(()=>{he&&lt(he,v,_),ce&&Jt(_,null,v,"unmounted")},S)},Le=_=>{const{type:v,el:S,anchor:L,transition:D}=_;if(v===ut){Se(S,L);return}if(v===Zn){E(_);return}const R=()=>{s(S),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(_.shapeFlag&1&&D&&!D.persisted){const{leave:q,delayLeave:G}=D,U=()=>q(S,R);G?G(_.el,R,U):U()}else R()},Se=(_,v)=>{let S;for(;_!==v;)S=f(_),s(_),_=S;s(v)},Pe=(_,v,S)=>{const{bum:L,scope:D,job:R,subTree:q,um:G,m:U,a:F}=_;to(U),to(F),L&&Ra(L),D.stop(),R&&(R.flags|=8,le(q,_,v,S)),G&&Ke(G,v),Ke(()=>{_.isUnmounted=!0},v)},ue=(_,v,S,L=!1,D=!1,R=0)=>{for(let q=R;q<_.length;q++)le(_[q],v,S,L,D)},x=_=>{if(_.shapeFlag&6)return x(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const v=f(_.anchor||_.el),S=v&&v[Al];return S?f(S):v};let Y=!1;const j=(_,v,S)=>{_==null?v._vnode&&le(v._vnode,null,null,!0):d(v._vnode||null,_,v,null,null,null,S),v._vnode=_,Y||(Y=!0,qs(),kr(),Y=!1)},V={p:d,um:le,m:Te,r:Le,mt:Q,mc:B,pc:H,pbc:N,n:x,o:e};return{render:j,hydrate:void 0,createApp:Jl(j)}}function Fa({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function zt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function sc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Zr(e,t,n=!1){const a=e.children,s=t.children;if(ae(a)&&ae(s))for(let o=0;o<a.length;o++){const r=a[o];let i=s[o];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=s[o]=Nt(s[o]),i.el=r.el),!n&&i.patchFlag!==-2&&Zr(r,i)),i.type===Sa&&i.patchFlag!==-1&&(i.el=r.el),i.type===Ye&&!i.el&&(i.el=r.el)}}function oc(e){const t=e.slice(),n=[0];let a,s,o,r,i;const l=e.length;for(a=0;a<l;a++){const u=e[a];if(u!==0){if(s=n[n.length-1],e[s]<u){t[a]=s,n.push(a);continue}for(o=0,r=n.length-1;o<r;)i=o+r>>1,e[n[i]]<u?o=i+1:r=i;u<e[n[o]]&&(o>0&&(t[a]=n[o-1]),n[o]=a)}}for(o=n.length,r=n[o-1];o-- >0;)n[o]=r,r=t[r];return n}function ei(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:ei(t)}function to(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const rc=Symbol.for("v-scx"),ic=()=>Ve(rc);function Cn(e,t,n){return ti(e,t,n)}function ti(e,t,n=be){const{immediate:a,deep:s,flush:o,once:r}=n,i=ke({},n),l=t&&a||!t&&o!=="post";let u;if($n){if(o==="sync"){const h=ic();u=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=ft,h.resume=ft,h.pause=ft,h}}const c=Ne;i.call=(h,m,d)=>at(h,c,m,d);let p=!1;o==="post"?i.scheduler=h=>{Ke(h,c&&c.suspense)}:o!=="sync"&&(p=!0,i.scheduler=(h,m)=>{m?h():Cs(h)}),i.augmentJob=h=>{t&&(h.flags|=4),p&&(h.flags|=2,c&&(h.id=c.uid,h.i=c))};const f=vl(e,t,i);return $n&&(u?u.push(f):l&&f()),f}function lc(e,t,n){const a=this.proxy,s=we(e)?e.includes(".")?ni(a,e):()=>a[e]:e.bind(a,a);let o;oe(t)?o=t:(o=t.handler,n=t);const r=jn(this),i=ti(s,o.bind(a),n);return r(),i}function ni(e,t){const n=t.split(".");return()=>{let a=e;for(let s=0;s<n.length&&a;s++)a=a[n[s]];return a}}const cc=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Qe(t)}Modifiers`]||e[`${jt(t)}Modifiers`];function dc(e,t,...n){if(e.isUnmounted)return;const a=e.vnode.props||be;let s=n;const o=t.startsWith("update:"),r=o&&cc(a,t.slice(7));r&&(r.trim&&(s=n.map(c=>we(c)?c.trim():c)),r.number&&(s=n.map(Bi)));let i,l=a[i=Ca(t)]||a[i=Ca(Qe(t))];!l&&o&&(l=a[i=Ca(jt(t))]),l&&at(l,e,6,s);const u=a[i+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,at(u,e,6,s)}}const uc=new WeakMap;function ai(e,t,n=!1){const a=n?uc:t.emitsCache,s=a.get(e);if(s!==void 0)return s;const o=e.emits;let r={},i=!1;if(!oe(e)){const l=u=>{const c=ai(u,t,!0);c&&(i=!0,ke(r,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!o&&!i?(ye(e)&&a.set(e,null),null):(ae(o)?o.forEach(l=>r[l]=null):ke(r,o),ye(e)&&a.set(e,r),r)}function Ea(e,t){return!e||!fa(t)?!1:(t=t.slice(2).replace(/Once$/,""),fe(e,t[0].toLowerCase()+t.slice(1))||fe(e,jt(t))||fe(e,t))}function no(e){const{type:t,vnode:n,proxy:a,withProxy:s,propsOptions:[o],slots:r,attrs:i,emit:l,render:u,renderCache:c,props:p,data:f,setupState:h,ctx:m,inheritAttrs:d}=e,g=oa(e);let b,y;try{if(n.shapeFlag&4){const E=s||a,O=E;b=pt(u.call(O,E,c,p,h,f,m)),y=i}else{const E=t;b=pt(E.length>1?E(p,{attrs:i,slots:r,emit:l}):E(p,null)),y=t.props?i:pc(i)}}catch(E){Rn.length=0,_a(E,e,1),b=Ue(Ye)}let T=b;if(y&&d!==!1){const E=Object.keys(y),{shapeFlag:O}=T;E.length&&O&7&&(o&&E.some(ms)&&(y=fc(y,o)),T=Ht(T,y,!1,!0))}return n.dirs&&(T=Ht(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(n.dirs):n.dirs),n.transition&&Bn(T,n.transition),b=T,oa(g),b}const pc=e=>{let t;for(const n in e)(n==="class"||n==="style"||fa(n))&&((t||(t={}))[n]=e[n]);return t},fc=(e,t)=>{const n={};for(const a in e)(!ms(a)||!(a.slice(9)in t))&&(n[a]=e[a]);return n};function hc(e,t,n){const{props:a,children:s,component:o}=e,{props:r,children:i,patchFlag:l}=t,u=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return a?ao(a,r,u):!!r;if(l&8){const c=t.dynamicProps;for(let p=0;p<c.length;p++){const f=c[p];if(r[f]!==a[f]&&!Ea(u,f))return!0}}}else return(s||i)&&(!i||!i.$stable)?!0:a===r?!1:a?r?ao(a,r,u):!0:!!r;return!1}function ao(e,t,n){const a=Object.keys(t);if(a.length!==Object.keys(e).length)return!0;for(let s=0;s<a.length;s++){const o=a[s];if(t[o]!==e[o]&&!Ea(n,o))return!0}return!1}function gc({vnode:e,parent:t},n){for(;t;){const a=t.subTree;if(a.suspense&&a.suspense.activeBranch===e&&(a.el=e.el),a===e)(e=t.vnode).el=n,t=t.parent;else break}}const si=e=>e.__isSuspense;function mc(e,t){t&&t.pendingBranch?ae(e)?t.effects.push(...e):t.effects.push(e):Sl(e)}const ut=Symbol.for("v-fgt"),Sa=Symbol.for("v-txt"),Ye=Symbol.for("v-cmt"),Zn=Symbol.for("v-stc"),Rn=[];let Ge=null;function Xe(e=!1){Rn.push(Ge=e?null:[])}function bc(){Rn.pop(),Ge=Rn[Rn.length-1]||null}let Fn=1;function la(e,t=!1){Fn+=e,e<0&&Ge&&t&&(Ge.hasOnce=!0)}function oi(e){return e.dynamicChildren=Fn>0?Ge||pn:null,bc(),Fn>0&&Ge&&Ge.push(e),e}function ht(e,t,n,a,s,o){return oi(k(e,t,n,a,s,o,!0))}function so(e,t,n,a,s){return oi(Ue(e,t,n,a,s,!0))}function ca(e){return e?e.__v_isVNode===!0:!1}function Zt(e,t){return e.type===t.type&&e.key===t.key}const ri=({key:e})=>e??null,ea=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?we(e)||Ae(e)||oe(e)?{i:et,r:e,k:t,f:!!n}:e:null);function k(e,t=null,n=null,a=0,s=null,o=e===ut?0:1,r=!1,i=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ri(t),ref:t&&ea(t),scopeId:Cr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:a,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:et};return i?(Ls(l,n),o&128&&e.normalize(l)):n&&(l.shapeFlag|=we(n)?8:16),Fn>0&&!r&&Ge&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&Ge.push(l),l}const Ue=_c;function _c(e,t=null,n=null,a=0,s=null,o=!1){if((!e||e===Hr)&&(e=Ye),ca(e)){const i=Ht(e,t,!0);return n&&Ls(i,n),Fn>0&&!o&&Ge&&(i.shapeFlag&6?Ge[Ge.indexOf(e)]=i:Ge.push(i)),i.patchFlag=-2,i}if(xc(e)&&(e=e.__vccOpts),t){t=yc(t);let{class:i,style:l}=t;i&&!we(i)&&(t.class=Ut(i)),ye(l)&&(Ps(l)&&!ae(l)&&(l=ke({},l)),t.style=ys(l))}const r=we(e)?1:si(e)?128:Rr(e)?64:ye(e)?4:oe(e)?2:0;return k(e,t,n,a,s,r,o,!0)}function yc(e){return e?Ps(e)||Wr(e)?ke({},e):e:null}function Ht(e,t,n=!1,a=!1){const{props:s,ref:o,patchFlag:r,children:i,transition:l}=e,u=t?vc(s||{},t):s,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&ri(u),ref:t&&t.ref?n&&o?ae(o)?o.concat(ea(t)):[o,ea(t)]:ea(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ut?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ht(e.ssContent),ssFallback:e.ssFallback&&Ht(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&a&&Bn(c,l.clone(c)),c}function Aa(e=" ",t=0){return Ue(Sa,null,e,t)}function qt(e,t){const n=Ue(Zn,null,e);return n.staticCount=t,n}function pt(e){return e==null||typeof e=="boolean"?Ue(Ye):ae(e)?Ue(ut,null,e.slice()):ca(e)?Nt(e):Ue(Sa,null,String(e))}function Nt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ht(e)}function Ls(e,t){let n=0;const{shapeFlag:a}=e;if(t==null)t=null;else if(ae(t))n=16;else if(typeof t=="object")if(a&65){const s=t.default;s&&(s._c&&(s._d=!1),Ls(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!Wr(t)?t._ctx=et:s===3&&et&&(et.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else oe(t)?(t={default:t,_ctx:et},n=32):(t=String(t),a&64?(n=16,t=[Aa(t)]):n=8);e.children=t,e.shapeFlag|=n}function vc(...e){const t={};for(let n=0;n<e.length;n++){const a=e[n];for(const s in a)if(s==="class")t.class!==a.class&&(t.class=Ut([t.class,a.class]));else if(s==="style")t.style=ys([t.style,a.style]);else if(fa(s)){const o=t[s],r=a[s];r&&o!==r&&!(ae(o)&&o.includes(r))&&(t[s]=o?[].concat(o,r):r)}else s!==""&&(t[s]=a[s])}return t}function lt(e,t,n,a=null){at(e,t,7,[n,a])}const Tc=jr();let Ec=0;function Sc(e,t,n){const a=e.type,s=(t?t.appContext:e.appContext)||Tc,o={uid:Ec++,vnode:e,type:a,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new rr(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:zr(a,s),emitsOptions:ai(a,s),emit:null,emitted:null,propsDefaults:be,inheritAttrs:a.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=dc.bind(null,o),e.ce&&e.ce(o),o}let Ne=null;const Ds=()=>Ne||et;let da,rs;{const e=ba(),t=(n,a)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(a),o=>{s.length>1?s.forEach(r=>r(o)):s[0](o)}};da=t("__VUE_INSTANCE_SETTERS__",n=>Ne=n),rs=t("__VUE_SSR_SETTERS__",n=>$n=n)}const jn=e=>{const t=Ne;return da(e),e.scope.on(),()=>{e.scope.off(),da(t)}},oo=()=>{Ne&&Ne.scope.off(),da(null)};function ii(e){return e.vnode.shapeFlag&4}let $n=!1;function Ac(e,t=!1,n=!1){t&&rs(t);const{props:a,children:s}=e.vnode,o=ii(e);Vl(e,a,o,t),ec(e,s,n||t);const r=o?wc(e,t):void 0;return t&&rs(!1),r}function wc(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Hl);const{setup:a}=n;if(a){At();const s=e.setupContext=a.length>1?Pc(e):null,o=jn(e),r=Yn(a,e,0,[e.props,s]),i=Xo(r);if(wt(),o(),(i||e.sp)&&!kn(e)&&Fr(e),i){if(r.then(oo,oo),t)return r.then(l=>{ro(e,l)}).catch(l=>{_a(l,e,0)});e.asyncDep=r}else ro(e,r)}else li(e)}function ro(e,t,n){oe(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ye(t)&&(e.setupState=wr(t)),li(e)}function li(e,t,n){const a=e.type;e.render||(e.render=a.render||ft);{const s=jn(e);At();try{Kl(e)}finally{wt(),s()}}}const Oc={get(e,t){return Re(e,"get",""),e[t]}};function Pc(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Oc),slots:e.slots,emit:e.emit,expose:t}}function Is(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(wr(ks(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in xn)return xn[n](e)},has(t,n){return n in t||n in xn}})):e.proxy}function kc(e,t=!0){return oe(e)?e.displayName||e.name:e.name||t&&e.__name}function xc(e){return oe(e)&&"__vccOpts"in e}const je=(e,t)=>_l(e,t,$n);function Ms(e,t,n){try{la(-1);const a=arguments.length;return a===2?ye(t)&&!ae(t)?ca(t)?Ue(e,null,[t]):Ue(e,t):Ue(e,null,t):(a>3?n=Array.prototype.slice.call(arguments,2):a===3&&ca(n)&&(n=[n]),Ue(e,t,n))}finally{la(1)}}const Cc="3.5.24";let is;const io=typeof window<"u"&&window.trustedTypes;if(io)try{is=io.createPolicy("vue",{createHTML:e=>e})}catch{}const ci=is?e=>is.createHTML(e):e=>e,Rc="http://www.w3.org/2000/svg",Nc="http://www.w3.org/1998/Math/MathML",yt=typeof document<"u"?document:null,lo=yt&&yt.createElement("template"),Lc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,a)=>{const s=t==="svg"?yt.createElementNS(Rc,e):t==="mathml"?yt.createElementNS(Nc,e):n?yt.createElement(e,{is:n}):yt.createElement(e);return e==="select"&&a&&a.multiple!=null&&s.setAttribute("multiple",a.multiple),s},createText:e=>yt.createTextNode(e),createComment:e=>yt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>yt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,a,s,o){const r=n?n.previousSibling:t.lastChild;if(s&&(s===o||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===o||!(s=s.nextSibling)););else{lo.innerHTML=ci(a==="svg"?`<svg>${e}</svg>`:a==="mathml"?`<math>${e}</math>`:e);const i=lo.content;if(a==="svg"||a==="mathml"){const l=i.firstChild;for(;l.firstChild;)i.appendChild(l.firstChild);i.removeChild(l)}t.insertBefore(i,n)}return[r?r.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},kt="transition",vn="animation",Un=Symbol("_vtc"),di={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Dc=ke({},Nr,di),Ic=e=>(e.displayName="Transition",e.props=Dc,e),Mc=Ic((e,{slots:t})=>Ms(Pl,Bc(e),t)),Vt=(e,t=[])=>{ae(e)?e.forEach(n=>n(...t)):e&&e(...t)},co=e=>e?ae(e)?e.some(t=>t.length>1):e.length>1:!1;function Bc(e){const t={};for(const P in e)P in di||(t[P]=e[P]);if(e.css===!1)return t;const{name:n="v",type:a,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:r=`${n}-enter-active`,enterToClass:i=`${n}-enter-to`,appearFromClass:l=o,appearActiveClass:u=r,appearToClass:c=i,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=e,m=Fc(s),d=m&&m[0],g=m&&m[1],{onBeforeEnter:b,onEnter:y,onEnterCancelled:T,onLeave:E,onLeaveCancelled:O,onBeforeAppear:C=b,onAppear:I=y,onAppearCancelled:B=T}=t,w=(P,K,Q,ee)=>{P._enterCancelled=ee,Qt(P,K?c:i),Qt(P,K?u:r),Q&&Q()},N=(P,K)=>{P._isLeaving=!1,Qt(P,p),Qt(P,h),Qt(P,f),K&&K()},$=P=>(K,Q)=>{const ee=P?I:y,X=()=>w(K,P,Q);Vt(ee,[K,X]),uo(()=>{Qt(K,P?l:o),bt(K,P?c:i),co(ee)||po(K,a,d,X)})};return ke(t,{onBeforeEnter(P){Vt(b,[P]),bt(P,o),bt(P,r)},onBeforeAppear(P){Vt(C,[P]),bt(P,l),bt(P,u)},onEnter:$(!1),onAppear:$(!0),onLeave(P,K){P._isLeaving=!0;const Q=()=>N(P,K);bt(P,p),P._enterCancelled?(bt(P,f),go(P)):(go(P),bt(P,f)),uo(()=>{P._isLeaving&&(Qt(P,p),bt(P,h),co(E)||po(P,a,g,Q))}),Vt(E,[P,Q])},onEnterCancelled(P){w(P,!1,void 0,!0),Vt(T,[P])},onAppearCancelled(P){w(P,!0,void 0,!0),Vt(B,[P])},onLeaveCancelled(P){N(P),Vt(O,[P])}})}function Fc(e){if(e==null)return null;if(ye(e))return[$a(e.enter),$a(e.leave)];{const t=$a(e);return[t,t]}}function $a(e){return Fi(e)}function bt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Un]||(e[Un]=new Set)).add(t)}function Qt(e,t){t.split(/\s+/).forEach(a=>a&&e.classList.remove(a));const n=e[Un];n&&(n.delete(t),n.size||(e[Un]=void 0))}function uo(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let $c=0;function po(e,t,n,a){const s=e._endId=++$c,o=()=>{s===e._endId&&a()};if(n!=null)return setTimeout(o,n);const{type:r,timeout:i,propCount:l}=Uc(e,t);if(!r)return a();const u=r+"end";let c=0;const p=()=>{e.removeEventListener(u,f),o()},f=h=>{h.target===e&&++c>=l&&p()};setTimeout(()=>{c<l&&p()},i+1),e.addEventListener(u,f)}function Uc(e,t){const n=window.getComputedStyle(e),a=m=>(n[m]||"").split(", "),s=a(`${kt}Delay`),o=a(`${kt}Duration`),r=fo(s,o),i=a(`${vn}Delay`),l=a(`${vn}Duration`),u=fo(i,l);let c=null,p=0,f=0;t===kt?r>0&&(c=kt,p=r,f=o.length):t===vn?u>0&&(c=vn,p=u,f=l.length):(p=Math.max(r,u),c=p>0?r>u?kt:vn:null,f=c?c===kt?o.length:l.length:0);const h=c===kt&&/\b(?:transform|all)(?:,|$)/.test(a(`${kt}Property`).toString());return{type:c,timeout:p,propCount:f,hasTransform:h}}function fo(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,a)=>ho(n)+ho(e[a])))}function ho(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function go(e){return(e?e.ownerDocument:document).body.offsetHeight}function Hc(e,t,n){const a=e[Un];a&&(t=(t?[t,...a]:[...a]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const mo=Symbol("_vod"),Kc=Symbol("_vsh"),Yc=Symbol(""),jc=/(?:^|;)\s*display\s*:/;function Gc(e,t,n){const a=e.style,s=we(n);let o=!1;if(n&&!s){if(t)if(we(t))for(const r of t.split(";")){const i=r.slice(0,r.indexOf(":")).trim();n[i]==null&&ta(a,i,"")}else for(const r in t)n[r]==null&&ta(a,r,"");for(const r in n)r==="display"&&(o=!0),ta(a,r,n[r])}else if(s){if(t!==n){const r=a[Yc];r&&(n+=";"+r),a.cssText=n,o=jc.test(n)}}else t&&e.removeAttribute("style");mo in e&&(e[mo]=o?a.display:"",e[Kc]&&(a.display="none"))}const bo=/\s*!important$/;function ta(e,t,n){if(ae(n))n.forEach(a=>ta(e,t,a));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const a=qc(e,t);bo.test(n)?e.setProperty(jt(a),n.replace(bo,""),"important"):e[a]=n}}const _o=["Webkit","Moz","ms"],Ua={};function qc(e,t){const n=Ua[t];if(n)return n;let a=Qe(t);if(a!=="filter"&&a in e)return Ua[t]=a;a=ma(a);for(let s=0;s<_o.length;s++){const o=_o[s]+a;if(o in e)return Ua[t]=o}return t}const yo="http://www.w3.org/1999/xlink";function vo(e,t,n,a,s,o=ji(t)){a&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(yo,t.slice(6,t.length)):e.setAttributeNS(yo,t,n):n==null||o&&!nr(n)?e.removeAttribute(t):e.setAttribute(t,o?"":Yt(n)?String(n):n)}function To(e,t,n,a,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?ci(n):n);return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){const i=o==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(i!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let r=!1;if(n===""||n==null){const i=typeof e[t];i==="boolean"?n=nr(n):n==null&&i==="string"?(n="",r=!0):i==="number"&&(n=0,r=!0)}try{e[t]=n}catch{}r&&e.removeAttribute(s||t)}function Wc(e,t,n,a){e.addEventListener(t,n,a)}function Jc(e,t,n,a){e.removeEventListener(t,n,a)}const Eo=Symbol("_vei");function zc(e,t,n,a,s=null){const o=e[Eo]||(e[Eo]={}),r=o[t];if(a&&r)r.value=a;else{const[i,l]=Vc(t);if(a){const u=o[t]=Zc(a,s);Wc(e,i,u,l)}else r&&(Jc(e,i,r,l),o[t]=void 0)}}const So=/(?:Once|Passive|Capture)$/;function Vc(e){let t;if(So.test(e)){t={};let a;for(;a=e.match(So);)e=e.slice(0,e.length-a[0].length),t[a[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):jt(e.slice(2)),t]}let Ha=0;const Qc=Promise.resolve(),Xc=()=>Ha||(Qc.then(()=>Ha=0),Ha=Date.now());function Zc(e,t){const n=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=n.attached)return;at(ed(a,n.value),t,5,[a])};return n.value=e,n.attached=Xc(),n}function ed(e,t){if(ae(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(a=>s=>!s._stopped&&a&&a(s))}else return t}const Ao=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,td=(e,t,n,a,s,o)=>{const r=s==="svg";t==="class"?Hc(e,a,r):t==="style"?Gc(e,n,a):fa(t)?ms(t)||zc(e,t,n,a,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):nd(e,t,a,r))?(To(e,t,a),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&vo(e,t,a,r,o,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!we(a))?To(e,Qe(t),a,o,t):(t==="true-value"?e._trueValue=a:t==="false-value"&&(e._falseValue=a),vo(e,t,a,r))};function nd(e,t,n,a){if(a)return!!(t==="innerHTML"||t==="textContent"||t in e&&Ao(t)&&oe(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ao(t)&&we(n)?!1:t in e}const ad=["ctrl","shift","alt","meta"],sd={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>ad.some(n=>e[`${n}Key`]&&!t.includes(n))},wa=(e,t)=>{const n=e._withMods||(e._withMods={}),a=t.join(".");return n[a]||(n[a]=((s,...o)=>{for(let r=0;r<t.length;r++){const i=sd[t[r]];if(i&&i(s,t))return}return e(s,...o)}))},od={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Tt=(e,t)=>{const n=e._withKeys||(e._withKeys={}),a=t.join(".");return n[a]||(n[a]=(s=>{if(!("key"in s))return;const o=jt(s.key);if(t.some(r=>r===o||od[r]===o))return e(s)}))},rd=ke({patchProp:td},Lc);let wo;function id(){return wo||(wo=nc(rd))}const ld=((...e)=>{const t=id().createApp(...e),{mount:n}=t;return t.mount=a=>{const s=dd(a);if(!s)return;const o=t._component;!oe(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const r=n(s,!1,cd(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),r},t});function cd(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function dd(e){return we(e)?document.querySelector(e):e}let ui;const Oa=e=>ui=e,pi=Symbol();function ls(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Nn;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Nn||(Nn={}));function ud(){const e=ir(!0),t=e.run(()=>ze({}));let n=[],a=[];const s=ks({install(o){Oa(s),s._a=o,o.provide(pi,s),o.config.globalProperties.$pinia=s,a.forEach(r=>n.push(r)),a=[]},use(o){return this._a?n.push(o):a.push(o),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}const fi=()=>{};function Oo(e,t,n,a=fi){e.add(t);const s=()=>{e.delete(t)&&a()};return!n&&lr()&&Gi(s),s}function ln(e,...t){e.forEach(n=>{n(...t)})}const pd=e=>e(),Po=Symbol(),Ka=Symbol();function cs(e,t){e instanceof Map&&t instanceof Map?t.forEach((n,a)=>e.set(a,n)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const a=t[n],s=e[n];ls(s)&&ls(a)&&e.hasOwnProperty(n)&&!Ae(a)&&!an(a)?e[n]=cs(s,a):e[n]=a}return e}const fd=Symbol();function hd(e){return!ls(e)||!Object.prototype.hasOwnProperty.call(e,fd)}const{assign:Ct}=Object;function gd(e){return!!(Ae(e)&&e.effect)}function md(e,t,n,a){const{state:s,actions:o,getters:r}=t,i=n.state.value[e];let l;function u(){i||(n.state.value[e]=s?s():{});const c=hl(n.state.value[e]);return Ct(c,o,Object.keys(r||{}).reduce((p,f)=>(p[f]=ks(je(()=>{Oa(n);const h=n._s.get(e);return r[f].call(h,h)})),p),{}))}return l=hi(e,u,t,n,a,!0),l}function hi(e,t,n={},a,s,o){let r;const i=Ct({actions:{}},n),l={deep:!0};let u,c,p=new Set,f=new Set,h;const m=a.state.value[e];!o&&!m&&(a.state.value[e]={}),ze({});let d;function g(B){let w;u=c=!1,typeof B=="function"?(B(a.state.value[e]),w={type:Nn.patchFunction,storeId:e,events:h}):(cs(a.state.value[e],B),w={type:Nn.patchObject,payload:B,storeId:e,events:h});const N=d=Symbol();xs().then(()=>{d===N&&(u=!0)}),c=!0,ln(p,w,a.state.value[e])}const b=o?function(){const{state:w}=n,N=w?w():{};this.$patch($=>{Ct($,N)})}:fi;function y(){r.stop(),p.clear(),f.clear(),a._s.delete(e)}const T=(B,w="")=>{if(Po in B)return B[Ka]=w,B;const N=function(){Oa(a);const $=Array.from(arguments),P=new Set,K=new Set;function Q(W){P.add(W)}function ee(W){K.add(W)}ln(f,{args:$,name:N[Ka],store:O,after:Q,onError:ee});let X;try{X=B.apply(this&&this.$id===e?this:O,$)}catch(W){throw ln(K,W),W}return X instanceof Promise?X.then(W=>(ln(P,W),W)).catch(W=>(ln(K,W),Promise.reject(W))):(ln(P,X),X)};return N[Po]=!0,N[Ka]=w,N},E={_p:a,$id:e,$onAction:Oo.bind(null,f),$patch:g,$reset:b,$subscribe(B,w={}){const N=Oo(p,B,w.detached,()=>$()),$=r.run(()=>Cn(()=>a.state.value[e],P=>{(w.flush==="sync"?c:u)&&B({storeId:e,type:Nn.direct,events:h},P)},Ct({},l,w)));return N},$dispose:y},O=St(E);a._s.set(e,O);const I=(a._a&&a._a.runWithContext||pd)(()=>a._e.run(()=>(r=ir()).run(()=>t({action:T}))));for(const B in I){const w=I[B];if(Ae(w)&&!gd(w)||an(w))o||(m&&hd(w)&&(Ae(w)?w.value=m[B]:cs(w,m[B])),a.state.value[e][B]=w);else if(typeof w=="function"){const N=T(w,B);I[B]=N,i.actions[B]=w}}return Ct(O,I),Ct(de(O),I),Object.defineProperty(O,"$state",{get:()=>a.state.value[e],set:B=>{g(w=>{Ct(w,B)})}}),a._p.forEach(B=>{Ct(O,r.run(()=>B({store:O,app:a._a,pinia:a,options:i})))}),m&&o&&n.hydrate&&n.hydrate(O.$state,m),u=!0,c=!0,O}function bd(e,t,n){let a;const s=typeof t=="function";a=s?n:t;function o(r,i){const l=zl();return r=r||(l?Ve(pi,null):null),r&&Oa(r),r=ui,r._s.has(e)||(s?hi(e,t,a,r):md(e,a,r)),r._s.get(e)}return o.$id=e,o}const un=typeof document<"u";function gi(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function _d(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&gi(e.default)}const pe=Object.assign;function Ya(e,t){const n={};for(const a in t){const s=t[a];n[a]=st(s)?s.map(e):e(s)}return n}const Ln=()=>{},st=Array.isArray;function ko(e,t){const n={};for(const a in e)n[a]=a in t?t[a]:e[a];return n}const mi=/#/g,yd=/&/g,vd=/\//g,Td=/=/g,Ed=/\?/g,bi=/\+/g,Sd=/%5B/g,Ad=/%5D/g,_i=/%5E/g,wd=/%60/g,yi=/%7B/g,Od=/%7C/g,vi=/%7D/g,Pd=/%20/g;function Bs(e){return e==null?"":encodeURI(""+e).replace(Od,"|").replace(Sd,"[").replace(Ad,"]")}function kd(e){return Bs(e).replace(yi,"{").replace(vi,"}").replace(_i,"^")}function ds(e){return Bs(e).replace(bi,"%2B").replace(Pd,"+").replace(mi,"%23").replace(yd,"%26").replace(wd,"`").replace(yi,"{").replace(vi,"}").replace(_i,"^")}function xd(e){return ds(e).replace(Td,"%3D")}function Cd(e){return Bs(e).replace(mi,"%23").replace(Ed,"%3F")}function Rd(e){return Cd(e).replace(vd,"%2F")}function Hn(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Nd=/\/$/,Ld=e=>e.replace(Nd,"");function ja(e,t,n="/"){let a,s={},o="",r="";const i=t.indexOf("#");let l=t.indexOf("?");return l=i>=0&&l>i?-1:l,l>=0&&(a=t.slice(0,l),o=t.slice(l,i>0?i:t.length),s=e(o.slice(1))),i>=0&&(a=a||t.slice(0,i),r=t.slice(i,t.length)),a=Bd(a??t,n),{fullPath:a+o+r,path:a,query:s,hash:Hn(r)}}function Dd(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function xo(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Id(e,t,n){const a=t.matched.length-1,s=n.matched.length-1;return a>-1&&a===s&&gn(t.matched[a],n.matched[s])&&Ti(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function gn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ti(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Md(e[n],t[n]))return!1;return!0}function Md(e,t){return st(e)?Co(e,t):st(t)?Co(t,e):e===t}function Co(e,t){return st(t)?e.length===t.length&&e.every((n,a)=>n===t[a]):e.length===1&&e[0]===t}function Bd(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),a=e.split("/"),s=a[a.length-1];(s===".."||s===".")&&a.push("");let o=n.length-1,r,i;for(r=0;r<a.length;r++)if(i=a[r],i!==".")if(i==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+a.slice(r).join("/")}const xt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let us=(function(e){return e.pop="pop",e.push="push",e})({}),Ga=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function Fd(e){if(!e)if(un){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Ld(e)}const $d=/^[^#]+#/;function Ud(e,t){return e.replace($d,"#")+t}function Hd(e,t){const n=document.documentElement.getBoundingClientRect(),a=e.getBoundingClientRect();return{behavior:t.behavior,left:a.left-n.left-(t.left||0),top:a.top-n.top-(t.top||0)}}const Pa=()=>({left:window.scrollX,top:window.scrollY});function Kd(e){let t;if("el"in e){const n=e.el,a=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?a?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=Hd(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Ro(e,t){return(history.state?history.state.position-t:-1)+e}const ps=new Map;function Yd(e,t){ps.set(e,t)}function jd(e){const t=ps.get(e);return ps.delete(e),t}function Gd(e){return typeof e=="string"||e&&typeof e=="object"}function Ei(e){return typeof e=="string"||typeof e=="symbol"}let Ee=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const Si=Symbol("");Ee.MATCHER_NOT_FOUND+"",Ee.NAVIGATION_GUARD_REDIRECT+"",Ee.NAVIGATION_ABORTED+"",Ee.NAVIGATION_CANCELLED+"",Ee.NAVIGATION_DUPLICATED+"";function mn(e,t){return pe(new Error,{type:e,[Si]:!0},t)}function _t(e,t){return e instanceof Error&&Si in e&&(t==null||!!(e.type&t))}const qd=["params","query","hash"];function Wd(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of qd)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function Jd(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<n.length;++a){const s=n[a].replace(bi," "),o=s.indexOf("="),r=Hn(o<0?s:s.slice(0,o)),i=o<0?null:Hn(s.slice(o+1));if(r in t){let l=t[r];st(l)||(l=t[r]=[l]),l.push(i)}else t[r]=i}return t}function No(e){let t="";for(let n in e){const a=e[n];if(n=xd(n),a==null){a!==void 0&&(t+=(t.length?"&":"")+n);continue}(st(a)?a.map(s=>s&&ds(s)):[a&&ds(a)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function zd(e){const t={};for(const n in e){const a=e[n];a!==void 0&&(t[n]=st(a)?a.map(s=>s==null?null:""+s):a==null?a:""+a)}return t}const Vd=Symbol(""),Lo=Symbol(""),ka=Symbol(""),Fs=Symbol(""),fs=Symbol("");function Tn(){let e=[];function t(a){return e.push(a),()=>{const s=e.indexOf(a);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Lt(e,t,n,a,s,o=r=>r()){const r=a&&(a.enterCallbacks[s]=a.enterCallbacks[s]||[]);return()=>new Promise((i,l)=>{const u=f=>{f===!1?l(mn(Ee.NAVIGATION_ABORTED,{from:n,to:t})):f instanceof Error?l(f):Gd(f)?l(mn(Ee.NAVIGATION_GUARD_REDIRECT,{from:t,to:f})):(r&&a.enterCallbacks[s]===r&&typeof f=="function"&&r.push(f),i())},c=o(()=>e.call(a&&a.instances[s],t,n,u));let p=Promise.resolve(c);e.length<3&&(p=p.then(u)),p.catch(f=>l(f))})}function qa(e,t,n,a,s=o=>o()){const o=[];for(const r of e)for(const i in r.components){let l=r.components[i];if(!(t!=="beforeRouteEnter"&&!r.instances[i]))if(gi(l)){const u=(l.__vccOpts||l)[t];u&&o.push(Lt(u,n,a,r,i,s))}else{let u=l();o.push(()=>u.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${i}" at "${r.path}"`);const p=_d(c)?c.default:c;r.mods[i]=c,r.components[i]=p;const f=(p.__vccOpts||p)[t];return f&&Lt(f,n,a,r,i,s)()}))}}return o}function Qd(e,t){const n=[],a=[],s=[],o=Math.max(t.matched.length,e.matched.length);for(let r=0;r<o;r++){const i=t.matched[r];i&&(e.matched.find(u=>gn(u,i))?a.push(i):n.push(i));const l=e.matched[r];l&&(t.matched.find(u=>gn(u,l))||s.push(l))}return[n,a,s]}let Xd=()=>location.protocol+"//"+location.host;function Ai(e,t){const{pathname:n,search:a,hash:s}=t,o=e.indexOf("#");if(o>-1){let r=s.includes(e.slice(o))?e.slice(o).length:1,i=s.slice(r);return i[0]!=="/"&&(i="/"+i),xo(i,"")}return xo(n,e)+a+s}function Zd(e,t,n,a){let s=[],o=[],r=null;const i=({state:f})=>{const h=Ai(e,location),m=n.value,d=t.value;let g=0;if(f){if(n.value=h,t.value=f,r&&r===m){r=null;return}g=d?f.position-d.position:0}else a(h);s.forEach(b=>{b(n.value,m,{delta:g,type:us.pop,direction:g?g>0?Ga.forward:Ga.back:Ga.unknown})})};function l(){r=n.value}function u(f){s.push(f);const h=()=>{const m=s.indexOf(f);m>-1&&s.splice(m,1)};return o.push(h),h}function c(){if(document.visibilityState==="hidden"){const{history:f}=window;if(!f.state)return;f.replaceState(pe({},f.state,{scroll:Pa()}),"")}}function p(){for(const f of o)f();o=[],window.removeEventListener("popstate",i),window.removeEventListener("pagehide",c),document.removeEventListener("visibilitychange",c)}return window.addEventListener("popstate",i),window.addEventListener("pagehide",c),document.addEventListener("visibilitychange",c),{pauseListeners:l,listen:u,destroy:p}}function Do(e,t,n,a=!1,s=!1){return{back:e,current:t,forward:n,replaced:a,position:window.history.length,scroll:s?Pa():null}}function eu(e){const{history:t,location:n}=window,a={value:Ai(e,n)},s={value:t.state};s.value||o(a.value,{back:null,current:a.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(l,u,c){const p=e.indexOf("#"),f=p>-1?(n.host&&document.querySelector("base")?e:e.slice(p))+l:Xd()+e+l;try{t[c?"replaceState":"pushState"](u,"",f),s.value=u}catch(h){console.error(h),n[c?"replace":"assign"](f)}}function r(l,u){o(l,pe({},t.state,Do(s.value.back,l,s.value.forward,!0),u,{position:s.value.position}),!0),a.value=l}function i(l,u){const c=pe({},s.value,t.state,{forward:l,scroll:Pa()});o(c.current,c,!0),o(l,pe({},Do(a.value,l,null),{position:c.position+1},u),!1),a.value=l}return{location:a,state:s,push:i,replace:r}}function tu(e){e=Fd(e);const t=eu(e),n=Zd(e,t.state,t.location,t.replace);function a(o,r=!0){r||n.pauseListeners(),history.go(o)}const s=pe({location:"",base:e,go:a,createHref:Ud.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function nu(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),tu(e)}let tn=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var Oe=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(Oe||{});const au={type:tn.Static,value:""},su=/[a-zA-Z0-9_]/;function ou(e){if(!e)return[[]];if(e==="/")return[[au]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(h){throw new Error(`ERR (${n})/"${u}": ${h}`)}let n=Oe.Static,a=n;const s=[];let o;function r(){o&&s.push(o),o=[]}let i=0,l,u="",c="";function p(){u&&(n===Oe.Static?o.push({type:tn.Static,value:u}):n===Oe.Param||n===Oe.ParamRegExp||n===Oe.ParamRegExpEnd?(o.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),o.push({type:tn.Param,value:u,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),u="")}function f(){u+=l}for(;i<e.length;){if(l=e[i++],l==="\\"&&n!==Oe.ParamRegExp){a=n,n=Oe.EscapeNext;continue}switch(n){case Oe.Static:l==="/"?(u&&p(),r()):l===":"?(p(),n=Oe.Param):f();break;case Oe.EscapeNext:f(),n=a;break;case Oe.Param:l==="("?n=Oe.ParamRegExp:su.test(l)?f():(p(),n=Oe.Static,l!=="*"&&l!=="?"&&l!=="+"&&i--);break;case Oe.ParamRegExp:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=Oe.ParamRegExpEnd:c+=l;break;case Oe.ParamRegExpEnd:p(),n=Oe.Static,l!=="*"&&l!=="?"&&l!=="+"&&i--,c="";break;default:t("Unknown state");break}}return n===Oe.ParamRegExp&&t(`Unfinished custom RegExp for param "${u}"`),p(),r(),s}const Io="[^/]+?",ru={sensitive:!1,strict:!1,start:!0,end:!0};var Ie=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(Ie||{});const iu=/[.+*?^${}()[\]/\\]/g;function lu(e,t){const n=pe({},ru,t),a=[];let s=n.start?"^":"";const o=[];for(const u of e){const c=u.length?[]:[Ie.Root];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const f=u[p];let h=Ie.Segment+(n.sensitive?Ie.BonusCaseSensitive:0);if(f.type===tn.Static)p||(s+="/"),s+=f.value.replace(iu,"\\$&"),h+=Ie.Static;else if(f.type===tn.Param){const{value:m,repeatable:d,optional:g,regexp:b}=f;o.push({name:m,repeatable:d,optional:g});const y=b||Io;if(y!==Io){h+=Ie.BonusCustomRegExp;try{`${y}`}catch(E){throw new Error(`Invalid custom RegExp for param "${m}" (${y}): `+E.message)}}let T=d?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;p||(T=g&&u.length<2?`(?:/${T})`:"/"+T),g&&(T+="?"),s+=T,h+=Ie.Dynamic,g&&(h+=Ie.BonusOptional),d&&(h+=Ie.BonusRepeatable),y===".*"&&(h+=Ie.BonusWildcard)}c.push(h)}a.push(c)}if(n.strict&&n.end){const u=a.length-1;a[u][a[u].length-1]+=Ie.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const r=new RegExp(s,n.sensitive?"":"i");function i(u){const c=u.match(r),p={};if(!c)return null;for(let f=1;f<c.length;f++){const h=c[f]||"",m=o[f-1];p[m.name]=h&&m.repeatable?h.split("/"):h}return p}function l(u){let c="",p=!1;for(const f of e){(!p||!c.endsWith("/"))&&(c+="/"),p=!1;for(const h of f)if(h.type===tn.Static)c+=h.value;else if(h.type===tn.Param){const{value:m,repeatable:d,optional:g}=h,b=m in u?u[m]:"";if(st(b)&&!d)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const y=st(b)?b.join("/"):b;if(!y)if(g)f.length<2&&(c.endsWith("/")?c=c.slice(0,-1):p=!0);else throw new Error(`Missing required param "${m}"`);c+=y}}return c||"/"}return{re:r,score:a,keys:o,parse:i,stringify:l}}function cu(e,t){let n=0;for(;n<e.length&&n<t.length;){const a=t[n]-e[n];if(a)return a;n++}return e.length<t.length?e.length===1&&e[0]===Ie.Static+Ie.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Ie.Static+Ie.Segment?1:-1:0}function wi(e,t){let n=0;const a=e.score,s=t.score;for(;n<a.length&&n<s.length;){const o=cu(a[n],s[n]);if(o)return o;n++}if(Math.abs(s.length-a.length)===1){if(Mo(a))return 1;if(Mo(s))return-1}return s.length-a.length}function Mo(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const du={strict:!1,end:!0,sensitive:!1};function uu(e,t,n){const a=lu(ou(e.path),n),s=pe(a,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function pu(e,t){const n=[],a=new Map;t=ko(du,t);function s(p){return a.get(p)}function o(p,f,h){const m=!h,d=Fo(p);d.aliasOf=h&&h.record;const g=ko(t,p),b=[d];if("alias"in p){const E=typeof p.alias=="string"?[p.alias]:p.alias;for(const O of E)b.push(Fo(pe({},d,{components:h?h.record.components:d.components,path:O,aliasOf:h?h.record:d})))}let y,T;for(const E of b){const{path:O}=E;if(f&&O[0]!=="/"){const C=f.record.path,I=C[C.length-1]==="/"?"":"/";E.path=f.record.path+(O&&I+O)}if(y=uu(E,f,g),h?h.alias.push(y):(T=T||y,T!==y&&T.alias.push(y),m&&p.name&&!$o(y)&&r(p.name)),Oi(y)&&l(y),d.children){const C=d.children;for(let I=0;I<C.length;I++)o(C[I],y,h&&h.children[I])}h=h||y}return T?()=>{r(T)}:Ln}function r(p){if(Ei(p)){const f=a.get(p);f&&(a.delete(p),n.splice(n.indexOf(f),1),f.children.forEach(r),f.alias.forEach(r))}else{const f=n.indexOf(p);f>-1&&(n.splice(f,1),p.record.name&&a.delete(p.record.name),p.children.forEach(r),p.alias.forEach(r))}}function i(){return n}function l(p){const f=gu(p,n);n.splice(f,0,p),p.record.name&&!$o(p)&&a.set(p.record.name,p)}function u(p,f){let h,m={},d,g;if("name"in p&&p.name){if(h=a.get(p.name),!h)throw mn(Ee.MATCHER_NOT_FOUND,{location:p});g=h.record.name,m=pe(Bo(f.params,h.keys.filter(T=>!T.optional).concat(h.parent?h.parent.keys.filter(T=>T.optional):[]).map(T=>T.name)),p.params&&Bo(p.params,h.keys.map(T=>T.name))),d=h.stringify(m)}else if(p.path!=null)d=p.path,h=n.find(T=>T.re.test(d)),h&&(m=h.parse(d),g=h.record.name);else{if(h=f.name?a.get(f.name):n.find(T=>T.re.test(f.path)),!h)throw mn(Ee.MATCHER_NOT_FOUND,{location:p,currentLocation:f});g=h.record.name,m=pe({},f.params,p.params),d=h.stringify(m)}const b=[];let y=h;for(;y;)b.unshift(y.record),y=y.parent;return{name:g,path:d,params:m,matched:b,meta:hu(b)}}e.forEach(p=>o(p));function c(){n.length=0,a.clear()}return{addRoute:o,resolve:u,removeRoute:r,clearRoutes:c,getRoutes:i,getRecordMatcher:s}}function Bo(e,t){const n={};for(const a of t)a in e&&(n[a]=e[a]);return n}function Fo(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:fu(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function fu(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const a in e.components)t[a]=typeof n=="object"?n[a]:n;return t}function $o(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function hu(e){return e.reduce((t,n)=>pe(t,n.meta),{})}function gu(e,t){let n=0,a=t.length;for(;n!==a;){const o=n+a>>1;wi(e,t[o])<0?a=o:n=o+1}const s=mu(e);return s&&(a=t.lastIndexOf(s,a-1)),a}function mu(e){let t=e;for(;t=t.parent;)if(Oi(t)&&wi(e,t)===0)return t}function Oi({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Uo(e){const t=Ve(ka),n=Ve(Fs),a=je(()=>{const l=Ft(e.to);return t.resolve(l)}),s=je(()=>{const{matched:l}=a.value,{length:u}=l,c=l[u-1],p=n.matched;if(!c||!p.length)return-1;const f=p.findIndex(gn.bind(null,c));if(f>-1)return f;const h=Ho(l[u-2]);return u>1&&Ho(c)===h&&p[p.length-1].path!==h?p.findIndex(gn.bind(null,l[u-2])):f}),o=je(()=>s.value>-1&&Tu(n.params,a.value.params)),r=je(()=>s.value>-1&&s.value===n.matched.length-1&&Ti(n.params,a.value.params));function i(l={}){if(vu(l)){const u=t[Ft(e.replace)?"replace":"push"](Ft(e.to)).catch(Ln);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:a,href:je(()=>a.value.href),isActive:o,isExactActive:r,navigate:i}}function bu(e){return e.length===1?e[0]:e}const _u=Br({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Uo,setup(e,{slots:t}){const n=St(Uo(e)),{options:a}=Ve(ka),s=je(()=>({[Ko(e.activeClass,a.linkActiveClass,"router-link-active")]:n.isActive,[Ko(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=t.default&&bu(t.default(n));return e.custom?o:Ms("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},o)}}}),yu=_u;function vu(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Tu(e,t){for(const n in t){const a=t[n],s=e[n];if(typeof a=="string"){if(a!==s)return!1}else if(!st(s)||s.length!==a.length||a.some((o,r)=>o!==s[r]))return!1}return!0}function Ho(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ko=(e,t,n)=>e??t??n,Eu=Br({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const a=Ve(fs),s=je(()=>e.route||a.value),o=Ve(Lo,0),r=je(()=>{let u=Ft(o);const{matched:c}=s.value;let p;for(;(p=c[u])&&!p.components;)u++;return u}),i=je(()=>s.value.matched[r.value]);Xn(Lo,je(()=>r.value+1)),Xn(Vd,i),Xn(fs,s);const l=ze();return Cn(()=>[l.value,i.value,e.name],([u,c,p],[f,h,m])=>{c&&(c.instances[p]=u,h&&h!==c&&u&&u===f&&(c.leaveGuards.size||(c.leaveGuards=h.leaveGuards),c.updateGuards.size||(c.updateGuards=h.updateGuards))),u&&c&&(!h||!gn(c,h)||!f)&&(c.enterCallbacks[p]||[]).forEach(d=>d(u))},{flush:"post"}),()=>{const u=s.value,c=e.name,p=i.value,f=p&&p.components[c];if(!f)return Yo(n.default,{Component:f,route:u});const h=p.props[c],m=h?h===!0?u.params:typeof h=="function"?h(u):h:null,g=Ms(f,pe({},m,t,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(p.instances[c]=null)},ref:l}));return Yo(n.default,{Component:g,route:u})||g}}});function Yo(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Pi=Eu;function Su(e){const t=pu(e.routes,e),n=e.parseQuery||Jd,a=e.stringifyQuery||No,s=e.history,o=Tn(),r=Tn(),i=Tn(),l=ul(xt);let u=xt;un&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=Ya.bind(null,x=>""+x),p=Ya.bind(null,Rd),f=Ya.bind(null,Hn);function h(x,Y){let j,V;return Ei(x)?(j=t.getRecordMatcher(x),V=Y):V=x,t.addRoute(V,j)}function m(x){const Y=t.getRecordMatcher(x);Y&&t.removeRoute(Y)}function d(){return t.getRoutes().map(x=>x.record)}function g(x){return!!t.getRecordMatcher(x)}function b(x,Y){if(Y=pe({},Y||l.value),typeof x=="string"){const S=ja(n,x,Y.path),L=t.resolve({path:S.path},Y),D=s.createHref(S.fullPath);return pe(S,L,{params:f(L.params),hash:Hn(S.hash),redirectedFrom:void 0,href:D})}let j;if(x.path!=null)j=pe({},x,{path:ja(n,x.path,Y.path).path});else{const S=pe({},x.params);for(const L in S)S[L]==null&&delete S[L];j=pe({},x,{params:p(S)}),Y.params=p(Y.params)}const V=t.resolve(j,Y),ie=x.hash||"";V.params=c(f(V.params));const _=Dd(a,pe({},x,{hash:kd(ie),path:V.path})),v=s.createHref(_);return pe({fullPath:_,hash:ie,query:a===No?zd(x.query):x.query||{}},V,{redirectedFrom:void 0,href:v})}function y(x){return typeof x=="string"?ja(n,x,l.value.path):pe({},x)}function T(x,Y){if(u!==x)return mn(Ee.NAVIGATION_CANCELLED,{from:Y,to:x})}function E(x){return I(x)}function O(x){return E(pe(y(x),{replace:!0}))}function C(x,Y){const j=x.matched[x.matched.length-1];if(j&&j.redirect){const{redirect:V}=j;let ie=typeof V=="function"?V(x,Y):V;return typeof ie=="string"&&(ie=ie.includes("?")||ie.includes("#")?ie=y(ie):{path:ie},ie.params={}),pe({query:x.query,hash:x.hash,params:ie.path!=null?{}:x.params},ie)}}function I(x,Y){const j=u=b(x),V=l.value,ie=x.state,_=x.force,v=x.replace===!0,S=C(j,V);if(S)return I(pe(y(S),{state:typeof S=="object"?pe({},ie,S.state):ie,force:_,replace:v}),Y||j);const L=j;L.redirectedFrom=Y;let D;return!_&&Id(a,V,j)&&(D=mn(Ee.NAVIGATION_DUPLICATED,{to:L,from:V}),Te(V,V,!0,!1)),(D?Promise.resolve(D):N(L,V)).catch(R=>_t(R)?_t(R,Ee.NAVIGATION_GUARD_REDIRECT)?R:te(R):H(R,L,V)).then(R=>{if(R){if(_t(R,Ee.NAVIGATION_GUARD_REDIRECT))return I(pe({replace:v},y(R.to),{state:typeof R.to=="object"?pe({},ie,R.to.state):ie,force:_}),Y||L)}else R=P(L,V,!0,v,ie);return $(L,V,R),R})}function B(x,Y){const j=T(x,Y);return j?Promise.reject(j):Promise.resolve()}function w(x){const Y=Se.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(x):x()}function N(x,Y){let j;const[V,ie,_]=Qd(x,Y);j=qa(V.reverse(),"beforeRouteLeave",x,Y);for(const S of V)S.leaveGuards.forEach(L=>{j.push(Lt(L,x,Y))});const v=B.bind(null,x,Y);return j.push(v),ue(j).then(()=>{j=[];for(const S of o.list())j.push(Lt(S,x,Y));return j.push(v),ue(j)}).then(()=>{j=qa(ie,"beforeRouteUpdate",x,Y);for(const S of ie)S.updateGuards.forEach(L=>{j.push(Lt(L,x,Y))});return j.push(v),ue(j)}).then(()=>{j=[];for(const S of _)if(S.beforeEnter)if(st(S.beforeEnter))for(const L of S.beforeEnter)j.push(Lt(L,x,Y));else j.push(Lt(S.beforeEnter,x,Y));return j.push(v),ue(j)}).then(()=>(x.matched.forEach(S=>S.enterCallbacks={}),j=qa(_,"beforeRouteEnter",x,Y,w),j.push(v),ue(j))).then(()=>{j=[];for(const S of r.list())j.push(Lt(S,x,Y));return j.push(v),ue(j)}).catch(S=>_t(S,Ee.NAVIGATION_CANCELLED)?S:Promise.reject(S))}function $(x,Y,j){i.list().forEach(V=>w(()=>V(x,Y,j)))}function P(x,Y,j,V,ie){const _=T(x,Y);if(_)return _;const v=Y===xt,S=un?history.state:{};j&&(V||v?s.replace(x.fullPath,pe({scroll:v&&S&&S.scroll},ie)):s.push(x.fullPath,ie)),l.value=x,Te(x,Y,j,v),te()}let K;function Q(){K||(K=s.listen((x,Y,j)=>{if(!Pe.listening)return;const V=b(x),ie=C(V,Pe.currentRoute.value);if(ie){I(pe(ie,{replace:!0,force:!0}),V).catch(Ln);return}u=V;const _=l.value;un&&Yd(Ro(_.fullPath,j.delta),Pa()),N(V,_).catch(v=>_t(v,Ee.NAVIGATION_ABORTED|Ee.NAVIGATION_CANCELLED)?v:_t(v,Ee.NAVIGATION_GUARD_REDIRECT)?(I(pe(y(v.to),{force:!0}),V).then(S=>{_t(S,Ee.NAVIGATION_ABORTED|Ee.NAVIGATION_DUPLICATED)&&!j.delta&&j.type===us.pop&&s.go(-1,!1)}).catch(Ln),Promise.reject()):(j.delta&&s.go(-j.delta,!1),H(v,V,_))).then(v=>{v=v||P(V,_,!1),v&&(j.delta&&!_t(v,Ee.NAVIGATION_CANCELLED)?s.go(-j.delta,!1):j.type===us.pop&&_t(v,Ee.NAVIGATION_ABORTED|Ee.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),$(V,_,v)}).catch(Ln)}))}let ee=Tn(),X=Tn(),W;function H(x,Y,j){te(x);const V=X.list();return V.length?V.forEach(ie=>ie(x,Y,j)):console.error(x),Promise.reject(x)}function re(){return W&&l.value!==xt?Promise.resolve():new Promise((x,Y)=>{ee.add([x,Y])})}function te(x){return W||(W=!x,Q(),ee.list().forEach(([Y,j])=>x?j(x):Y()),ee.reset()),x}function Te(x,Y,j,V){const{scrollBehavior:ie}=e;if(!un||!ie)return Promise.resolve();const _=!j&&jd(Ro(x.fullPath,0))||(V||!j)&&history.state&&history.state.scroll||null;return xs().then(()=>ie(x,Y,_)).then(v=>v&&Kd(v)).catch(v=>H(v,x,Y))}const le=x=>s.go(x);let Le;const Se=new Set,Pe={currentRoute:l,listening:!0,addRoute:h,removeRoute:m,clearRoutes:t.clearRoutes,hasRoute:g,getRoutes:d,resolve:b,options:e,push:E,replace:O,go:le,back:()=>le(-1),forward:()=>le(1),beforeEach:o.add,beforeResolve:r.add,afterEach:i.add,onError:X.add,isReady:re,install(x){x.component("RouterLink",yu),x.component("RouterView",Pi),x.config.globalProperties.$router=Pe,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>Ft(l)}),un&&!Le&&l.value===xt&&(Le=!0,E(s.location).catch(V=>{}));const Y={};for(const V in xt)Object.defineProperty(Y,V,{get:()=>l.value[V],enumerable:!0});x.provide(ka,Pe),x.provide(Fs,Sr(Y)),x.provide(fs,l);const j=x.unmount;Se.add(x),x.unmount=function(){Se.delete(x),Se.size<1&&(u=xt,K&&K(),K=null,l.value=xt,Le=!1,W=!1),j()}}};function ue(x){return x.reduce((Y,j)=>Y.then(()=>w(j)),Promise.resolve())}return Pe}function gt(){return Ve(ka)}function ki(e){return Ve(Fs)}var Au=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function wu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Sn={exports:{}},Ou=Sn.exports,jo;function Pu(){return jo||(jo=1,(function(e,t){(function(n,a){var s={};n.PubSub?(s=n.PubSub,console.warn("PubSub already loaded, using existing version")):(n.PubSub=s,a(s)),e!==void 0&&e.exports&&(t=e.exports=s),t.PubSub=s,e.exports=t=s})(typeof window=="object"&&window||Ou||Au,function(n){var a={},s=-1,o="*";function r(d){var g;for(g in d)if(Object.prototype.hasOwnProperty.call(d,g))return!0;return!1}function i(d){return function(){throw d}}function l(d,g,b){try{d(g,b)}catch(y){setTimeout(i(y),0)}}function u(d,g,b){d(g,b)}function c(d,g,b,y){var T=a[g],E=y?u:l,O;if(Object.prototype.hasOwnProperty.call(a,g))for(O in T)Object.prototype.hasOwnProperty.call(T,O)&&E(T[O],d,b)}function p(d,g,b){return function(){var T=String(d),E=T.lastIndexOf(".");for(c(d,d,g,b);E!==-1;)T=T.substr(0,E),E=T.lastIndexOf("."),c(d,T,g,b);c(d,o,g,b)}}function f(d){var g=String(d),b=!!(Object.prototype.hasOwnProperty.call(a,g)&&r(a[g]));return b}function h(d){for(var g=String(d),b=f(g)||f(o),y=g.lastIndexOf(".");!b&&y!==-1;)g=g.substr(0,y),y=g.lastIndexOf("."),b=f(g);return b}function m(d,g,b,y){d=typeof d=="symbol"?d.toString():d;var T=p(d,g,y),E=h(d);return E?(b===!0?T():setTimeout(T,0),!0):!1}n.publish=function(d,g){return m(d,g,!1,n.immediateExceptions)},n.publishSync=function(d,g){return m(d,g,!0,n.immediateExceptions)},n.subscribe=function(d,g){if(typeof g!="function")return!1;d=typeof d=="symbol"?d.toString():d,Object.prototype.hasOwnProperty.call(a,d)||(a[d]={});var b="uid_"+String(++s);return a[d][b]=g,b},n.subscribeAll=function(d){return n.subscribe(o,d)},n.subscribeOnce=function(d,g){var b=n.subscribe(d,function(){n.unsubscribe(b),g.apply(this,arguments)});return n},n.clearAllSubscriptions=function(){a={}},n.clearSubscriptions=function(g){var b;for(b in a)Object.prototype.hasOwnProperty.call(a,b)&&b.indexOf(g)===0&&delete a[b]},n.countSubscriptions=function(g){var b,y,T=0;for(b in a)if(Object.prototype.hasOwnProperty.call(a,b)&&b.indexOf(g)===0){for(y in a[b])T++;break}return T},n.getSubscriptions=function(g){var b,y=[];for(b in a)Object.prototype.hasOwnProperty.call(a,b)&&b.indexOf(g)===0&&y.push(b);return y},n.unsubscribe=function(d){var g=function(B){var w;for(w in a)if(Object.prototype.hasOwnProperty.call(a,w)&&w.indexOf(B)===0)return!0;return!1},b=typeof d=="string"&&(Object.prototype.hasOwnProperty.call(a,d)||g(d)),y=!b&&typeof d=="string",T=typeof d=="function",E=!1,O,C,I;if(b){n.clearSubscriptions(d);return}for(O in a)if(Object.prototype.hasOwnProperty.call(a,O)){if(C=a[O],y&&C[d]){delete C[d],E=d;break}if(T)for(I in C)Object.prototype.hasOwnProperty.call(C,I)&&C[I]===d&&(delete C[I],E=!0)}return E}})})(Sn,Sn.exports)),Sn.exports}var ku=Pu();const z=wu(ku);let $t=[{key:"americanfootball_cfl",group:"American Football",title:"CFL",description:"Canadian Football League",active:!0,has_outrights:!1},{key:"americanfootball_ncaaf",group:"American Football",title:"NCAAF",description:"US College Football",active:!0,has_outrights:!1},{key:"americanfootball_ncaaf_championship_winner",group:"American Football",title:"NCAAF Championship Winner",description:"US College Football Championship Winner",active:!0,has_outrights:!0},{key:"americanfootball_nfl",group:"American Football",title:"NFL",description:"US Football",active:!0,has_outrights:!1},{key:"americanfootball_nfl_super_bowl_winner",group:"American Football",title:"NFL Super Bowl Winner",description:"Super Bowl Winner 2025/2026",active:!1,has_outrights:!0},{key:"aussierules_afl",group:"Aussie Rules",title:"AFL",description:"Aussie Football",active:!1,has_outrights:!1},{key:"baseball_kbo",group:"Baseball",title:"KBO",description:"KBO League",active:!1,has_outrights:!1},{key:"baseball_milb",group:"Baseball",title:"MiLB",description:"Minor League Baseball",active:!1,has_outrights:!1},{key:"baseball_mlb",group:"Baseball",title:"MLB",description:"Major League Baseball",active:!0,has_outrights:!1},{key:"baseball_mlb_world_series_winner",group:"Baseball",title:"MLB World Series Winner",description:"World Series Winner 2025",active:!1,has_outrights:!0},{key:"baseball_npb",group:"Baseball",title:"NPB",description:"Nippon Professional Baseball",active:!0,has_outrights:!1},{key:"basketball_euroleague",group:"Basketball",title:"Basketball Euroleague",description:"Basketball Euroleague",active:!1,has_outrights:!1},{key:"basketball_nba",group:"Basketball",title:"NBA",description:"US Basketball",active:!0,has_outrights:!1},{key:"basketball_nba_championship_winner",group:"Basketball",title:"NBA Championship Winner",description:"Championship Winner 2025/2026",active:!1,has_outrights:!0},{key:"basketball_nbl",group:"Basketball",title:"NBL",description:"AU National Basketball League",active:!1,has_outrights:!1},{key:"basketball_ncaab",group:"Basketball",title:"NCAAB",description:"US College Basketball",active:!0,has_outrights:!0},{key:"basketball_ncaab_championship_winner",group:"Basketball",title:"NCAAB Championship Winner",description:"US College Basketball Championship Winner",active:!0,has_outrights:!0},{key:"basketball_wnba",group:"Basketball",title:"WNBA",description:"US Basketball",active:!0,has_outrights:!1},{key:"boxing_boxing",group:"Boxing",title:"Boxing",description:"Boxing Bouts",active:!0,has_outrights:!1},{key:"cricket_asia_cup",group:"Cricket",title:"Asia Cup",description:"Asia Cup",active:!1,has_outrights:!1},{key:"cricket_international_t20",group:"Cricket",title:"International Twenty20",description:"International Twenty20",active:!0,has_outrights:!1},{key:"golf_masters_tournament_winner",group:"Golf",title:"Masters Tournament Winner",description:"2026 Winner",active:!0,has_outrights:!0},{key:"icehockey_liiga",group:"Ice Hockey",title:"Liiga",description:"Finnish SM League",active:!1,has_outrights:!1},{key:"icehockey_mestis",group:"Ice Hockey",title:"Mestis",description:"Finnish Mestis League",active:!1,has_outrights:!1},{key:"icehockey_nhl",group:"Ice Hockey",title:"NHL",description:"US Ice Hockey",active:!0,has_outrights:!1},{key:"icehockey_nhl_championship_winner",group:"Ice Hockey",title:"NHL Championship Winner",description:"Stanley Cup Winner 2025/2026",active:!1,has_outrights:!0},{key:"icehockey_sweden_allsvenskan",group:"Ice Hockey",title:"HockeyAllsvenskan",description:"Swedish Hockey Allsvenskan",active:!1,has_outrights:!1},{key:"icehockey_sweden_hockey_league",group:"Ice Hockey",title:"SHL",description:"Swedish Hockey League",active:!1,has_outrights:!1},{key:"mma_mixed_martial_arts",group:"Mixed Martial Arts",title:"MMA",description:"Mixed Martial Arts",active:!0,has_outrights:!1},{key:"politics_us_presidential_election_winner",group:"Politics",title:"US Presidential Elections Winner",description:"2028 US Presidential Election Winner",active:!1,has_outrights:!0},{key:"rugbyleague_nrl",group:"Rugby League",title:"NRL",description:"Aussie Rugby League",active:!1,has_outrights:!1},{key:"soccer_argentina_primera_division",group:"Soccer",title:"Primera División - Argentina",description:"Argentine Primera División",active:!1,has_outrights:!1},{key:"soccer_australia_aleague",group:"Soccer",title:"A-League",description:"Aussie Soccer",active:!1,has_outrights:!1},{key:"soccer_austria_bundesliga",group:"Soccer",title:"Austrian Football Bundesliga",description:"Austrian Soccer",active:!1,has_outrights:!1},{key:"soccer_belgium_first_div",group:"Soccer",title:"Belgium First Div",description:"Belgian First Division A",active:!1,has_outrights:!1},{key:"soccer_brazil_campeonato",group:"Soccer",title:"Brazil Série A",description:"Brasileirão Série A",active:!1,has_outrights:!1},{key:"soccer_brazil_serie_b",group:"Soccer",title:"Brazil Série B",description:"Campeonato Brasileiro Série B",active:!1,has_outrights:!1},{key:"soccer_chile_campeonato",group:"Soccer",title:"Primera División - Chile",description:"Campeonato Chileno",active:!1,has_outrights:!1},{key:"soccer_china_superleague",group:"Soccer",title:"Super League - China",description:"Chinese Soccer",active:!1,has_outrights:!1},{key:"soccer_conmebol_copa_libertadores",group:"Soccer",title:"Copa Libertadores",description:"CONMEBOL Copa Libertadores",active:!1,has_outrights:!1},{key:"soccer_conmebol_copa_sudamericana",group:"Soccer",title:"Copa Sudamericana",description:"CONMEBOL Copa Sudamericana",active:!1,has_outrights:!1},{key:"soccer_denmark_superliga",group:"Soccer",title:"Denmark Superliga",description:"Danish Soccer",active:!1,has_outrights:!1},{key:"soccer_efl_champ",group:"Soccer",title:"Championship",description:"EFL Championship",active:!1,has_outrights:!1},{key:"soccer_england_league1",group:"Soccer",title:"League 1",description:"EFL League 1",active:!1,has_outrights:!1},{key:"soccer_england_league2",group:"Soccer",title:"League 2",description:"EFL League 2 ",active:!1,has_outrights:!1},{key:"soccer_epl",group:"Soccer",title:"EPL",description:"English Premier League",active:!0,has_outrights:!1},{key:"soccer_fifa_world_cup_qualifiers_europe",group:"Soccer",title:"FIFA World Cup Qualifiers - Europe",description:"FIFA World Cup Qualifiers - UEFA",active:!0,has_outrights:!1},{key:"soccer_fifa_world_cup_winner",group:"Soccer",title:"FIFA World Cup Winner",description:"FIFA World Cup Winner 2026",active:!1,has_outrights:!0},{key:"soccer_finland_veikkausliiga",group:"Soccer",title:"Veikkausliiga - Finland",description:"Finnish  Soccer",active:!1,has_outrights:!1},{key:"soccer_france_ligue_one",group:"Soccer",title:"Ligue 1 - France",description:"French Soccer",active:!1,has_outrights:!1},{key:"soccer_france_ligue_two",group:"Soccer",title:"Ligue 2 - France",description:"French Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_bundesliga",group:"Soccer",title:"Bundesliga - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_bundesliga2",group:"Soccer",title:"Bundesliga 2 - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_liga3",group:"Soccer",title:"3. Liga - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_greece_super_league",group:"Soccer",title:"Super League - Greece",description:"Greek Soccer",active:!1,has_outrights:!1},{key:"soccer_italy_serie_a",group:"Soccer",title:"Serie A - Italy",description:"Italian Soccer",active:!1,has_outrights:!1},{key:"soccer_italy_serie_b",group:"Soccer",title:"Serie B - Italy",description:"Italian Soccer",active:!1,has_outrights:!1},{key:"soccer_japan_j_league",group:"Soccer",title:"J League",description:"Japan Soccer League",active:!1,has_outrights:!1},{key:"soccer_korea_kleague1",group:"Soccer",title:"K League 1",description:"Korean Soccer",active:!1,has_outrights:!1},{key:"soccer_league_of_ireland",group:"Soccer",title:"League of Ireland",description:"Airtricity League Premier Division",active:!1,has_outrights:!1},{key:"soccer_mexico_ligamx",group:"Soccer",title:"Liga MX",description:"Mexican Soccer",active:!1,has_outrights:!1},{key:"soccer_netherlands_eredivisie",group:"Soccer",title:"Dutch Eredivisie",description:"Dutch Soccer",active:!1,has_outrights:!1},{key:"soccer_norway_eliteserien",group:"Soccer",title:"Eliteserien - Norway",description:"Norwegian Soccer",active:!1,has_outrights:!1},{key:"soccer_poland_ekstraklasa",group:"Soccer",title:"Ekstraklasa - Poland",description:"Polish Soccer",active:!1,has_outrights:!1},{key:"soccer_portugal_primeira_liga",group:"Soccer",title:"Primeira Liga - Portugal",description:"Portugese Soccer",active:!1,has_outrights:!1},{key:"soccer_spain_la_liga",group:"Soccer",title:"La Liga - Spain",description:"Spanish Soccer",active:!1,has_outrights:!1},{key:"soccer_spain_segunda_division",group:"Soccer",title:"La Liga 2 - Spain",description:"Spanish Soccer",active:!1,has_outrights:!1},{key:"soccer_spl",group:"Soccer",title:"Premiership - Scotland",description:"Scottish Premiership",active:!1,has_outrights:!1},{key:"soccer_sweden_allsvenskan",group:"Soccer",title:"Allsvenskan - Sweden",description:"Swedish Soccer",active:!1,has_outrights:!1},{key:"soccer_sweden_superettan",group:"Soccer",title:"Superettan - Sweden",description:"Swedish Soccer",active:!1,has_outrights:!1},{key:"soccer_switzerland_superleague",group:"Soccer",title:"Swiss Superleague",description:"Swiss Soccer",active:!1,has_outrights:!1},{key:"soccer_turkey_super_league",group:"Soccer",title:"Turkey Super League",description:"Turkish Soccer",active:!1,has_outrights:!1},{key:"soccer_uefa_champs_league",group:"Soccer",title:"UEFA Champions League",description:"European Champions League",active:!0,has_outrights:!1},{key:"soccer_uefa_europa_conference_league",group:"Soccer",title:"UEFA Europa Conference League",description:"UEFA Europa Conference League",active:!1,has_outrights:!1},{key:"soccer_uefa_europa_league",group:"Soccer",title:"UEFA Europa League",description:"European Europa League",active:!1,has_outrights:!1},{key:"soccer_usa_mls",group:"Soccer",title:"MLS",description:"Major League Soccer",active:!1,has_outrights:!1},{key:"tennis_atp_china_open",group:"Tennis",title:"ATP China Open",description:"Men's Singles",active:!1,has_outrights:!1},{key:"tennis_wta_china_open",group:"Tennis",title:"WTA China Open",description:"Women's Singles",active:!1,has_outrights:!1}];const xu={getMeta(){return{language:[{lang:"Abkhazian",code:"ab",enabled:!1,copy:[["key","value"]]},{lang:"Afar",code:"aa",enabled:!1,copy:[["key","value"]]},{lang:"Afrikaans",code:"af",enabled:!1,copy:[["key","value"]]},{lang:"Akan",code:"ak",enabled:!1,copy:[["key","value"]]},{lang:"Albanian",code:"sq",enabled:!1,copy:[["key","value"]]},{lang:"Amharic",code:"am",enabled:!1,copy:[["key","value"]]},{lang:"Arabic",code:"ar",enabled:!1,copy:[["key","value"]]},{lang:"Aragonese",code:"an",enabled:!1,copy:[["key","value"]]},{lang:"Armenian",code:"hy",enabled:!1,copy:[["key","value"]]},{lang:"Assamese",code:"as",enabled:!1,copy:[["key","value"]]},{lang:"Avaric",code:"av",enabled:!1,copy:[["key","value"]]},{lang:"Avestan",code:"ae",enabled:!1,copy:[["key","value"]]},{lang:"Aymara",code:"ay",enabled:!1,copy:[["key","value"]]},{lang:"Azerbaijani",code:"az",enabled:!1,copy:[["key","value"]]},{lang:"Bambara",code:"bm",enabled:!1,copy:[["key","value"]]},{lang:"Bashkir",code:"ba",enabled:!1,copy:[["key","value"]]},{lang:"Basque",code:"eu",enabled:!1,copy:[["key","value"]]},{lang:"Belarusian",code:"be",enabled:!1,copy:[["key","value"]]},{lang:"Bengali (Bangla)",code:"bn",enabled:!1,copy:[["key","value"]]},{lang:"Bihari",code:"bh",enabled:!1,copy:[["key","value"]]},{lang:"Bislama",code:"bi",enabled:!1,copy:[["key","value"]]},{lang:"Bosnian",code:"bs",enabled:!1,copy:[["key","value"]]},{lang:"Breton",code:"br",enabled:!1,copy:[["key","value"]]},{lang:"Bulgarian",code:"bg",enabled:!1,copy:[["key","value"]]},{lang:"Burmese",code:"my",enabled:!1,copy:[["key","value"]]},{lang:"Catalan",code:"ca",enabled:!1,copy:[["key","value"]]},{lang:"Chamorro",code:"ch",enabled:!1,copy:[["key","value"]]},{lang:"Chechen",code:"ce",enabled:!1,copy:[["key","value"]]},{lang:"Chichewa, Chewa, Nyanja",code:"ny",enabled:!1,copy:[["key","value"]]},{lang:"Chinese",code:"zh",enabled:!1,copy:[["key","value"]]},{lang:"Chinese (Simplified)",code:"zh-Hans",enabled:!1,copy:[["welcome_back","欢迎回来"],["please_enter_your_details","请输入您的详细信息"],["email","电子邮件"],["enter_your_email","输入您的电子邮件"],["password","密码"],["enter_your_password","输入您的密码"],["enter_email_and_password","输入邮箱和密码"],["sign_in","登入"],["forgot_password","忘记密码"],["dont_have_an_account","沒有帳戶？"],["sign_up","报名"],["please_enter_your_details_to_get_started","请输入您的详细信息以开始"],["already_have_an_account","已有账户？"],["log_in","登录"],["name","姓名"],["enter_your_name","输入您的姓名"]]},{lang:"Chinese (Traditional)",code:"zh-Hant",enabled:!1,copy:[["key","value"]]},{lang:"Chuvash",code:"cv",enabled:!1,copy:[["key","value"]]},{lang:"Cornish",code:"kw",enabled:!1,copy:[["key","value"]]},{lang:"Corsican",code:"co",enabled:!1,copy:[["key","value"]]},{lang:"Cree",code:"cr",enabled:!1,copy:[["key","value"]]},{lang:"Croatian",code:"hr",enabled:!1,copy:[["key","value"]]},{lang:"Czech",code:"cs",enabled:!1,copy:[["key","value"]]},{lang:"Danish",code:"da",enabled:!1,copy:[["key","value"]]},{lang:"Divehi, Dhivehi, Maldivian",code:"dv",enabled:!1,copy:[["key","value"]]},{lang:"Dutch",code:"nl",enabled:!1,copy:[["key","value"]]},{lang:"Dzongkha",code:"dz",enabled:!1,copy:[["key","value"]]},{lang:"English",code:"en",enabled:!0,copy:[["welcome_back","Welcome Back"],["please_enter_your_details","Please Enter your Details"],["email","Email"],["enter_your_email","Enter your email"],["password","Password"],["enter_your_password","Enter your password"],["enter_email_and_password","Enter Email and Password"],["sign_in","Sign in"],["forgot_password","Forgot Password"],["dont_have_an_account","Don't have an account?"],["sign_up","Sign up"],["please_enter_your_details_to_get_started","Please enter your details to get started"],["already_have_an_account","Already have an account?"],["log_in","Sign in"],["name","Name"],["enter_your_name","Enter your name"]]},{lang:"Esperanto",code:"eo",enabled:!1,copy:[["key","value"]]},{lang:"Estonian",code:"et",enabled:!1,copy:[["key","value"]]},{lang:"Ewe",code:"ee",enabled:!1,copy:[["key","value"]]},{lang:"Faroese",code:"fo",enabled:!1,copy:[["key","value"]]},{lang:"Fijian",code:"fj",enabled:!1,copy:[["key","value"]]},{lang:"Finnish",code:"fi",enabled:!1,copy:[["key","value"]]},{lang:"French",code:"fr",enabled:!1,copy:[["key","value"]]},{lang:"Fula, Fulah, Pulaar, Pular",code:"ff",enabled:!1,copy:[["key","value"]]},{lang:"Galician",code:"gl",enabled:!1,copy:[["key","value"]]},{lang:"Gaelic (Scottish)",code:"gd",enabled:!1,copy:[["key","value"]]},{lang:"Gaelic (Manx)",code:"gv",enabled:!1,copy:[["key","value"]]},{lang:"Georgian",code:"ka",enabled:!1,copy:[["key","value"]]},{lang:"German",code:"de",enabled:!1,copy:[["key","value"]]},{lang:"Greek",code:"el",enabled:!1,copy:[["key","value"]]},{lang:"Greenlandic",code:"kl",enabled:!1,copy:[["key","value"]]},{lang:"Guarani",code:"gn",enabled:!1,copy:[["key","value"]]},{lang:"Gujarati",code:"gu",enabled:!1,copy:[["key","value"]]},{lang:"Haitian Creole",code:"ht",enabled:!1,copy:[["key","value"]]},{lang:"Hausa",code:"ha",enabled:!1,copy:[["key","value"]]},{lang:"Hebrew",code:"he",enabled:!1,copy:[["key","value"]]},{lang:"Herero",code:"hz",enabled:!1,copy:[["key","value"]]},{lang:"Hindi",code:"hi",enabled:!1,copy:[["key","value"]]},{lang:"Hiri Motu",code:"ho",enabled:!1,copy:[["key","value"]]},{lang:"Hungarian",code:"hu",enabled:!1,copy:[["key","value"]]},{lang:"Icelandic",code:"is",enabled:!1,copy:[["key","value"]]},{lang:"Ido",code:"io",enabled:!1,copy:[["key","value"]]},{lang:"Igbo",code:"ig",enabled:!1,copy:[["key","value"]]},{lang:"Indonesian",code:"id, in",enabled:!1,copy:[["key","value"]]},{lang:"Interlingua",code:"ia",enabled:!1,copy:[["key","value"]]},{lang:"Interlingue",code:"ie",enabled:!1,copy:[["key","value"]]},{lang:"Inuktitut",code:"iu",enabled:!1,copy:[["key","value"]]},{lang:"Inupiak",code:"ik",enabled:!1,copy:[["key","value"]]},{lang:"Irish",code:"ga",enabled:!1,copy:[["key","value"]]},{lang:"Italian",code:"it",enabled:!0,copy:[["welcome_back","Bentornato"],["please_enter_your_details","Per favore, inserisci i tuoi dati"],["email","E-mail"],["enter_your_email","Inserisci la tua email"],["password","Password"],["enter_your_password","Inserisci la tua password"],["enter_email_and_password","Inserisci email e password"],["sign_in","Registrazione"],["forgot_password","Ha dimenticato la password"],["dont_have_an_account","Non hai un account?"],["sign_up","Iscrizione"],["please_enter_your_details_to_get_started","Inserisci i tuoi dati per iniziare"],["already_have_an_account","Hai già un account?"],["log_in","Login"],["name","Nome"],["enter_your_name","Inserisci il tuo nome"]]},{lang:"Japanese",code:"ja",enabled:!1,copy:[["key","value"]]},{lang:"Javanese",code:"jv",enabled:!1,copy:[["key","value"]]},{lang:"Kalaallisut, Greenlandic",code:"kl",enabled:!1,copy:[["key","value"]]},{lang:"Kannada",code:"kn",enabled:!1,copy:[["key","value"]]},{lang:"Kanuri",code:"kr",enabled:!1,copy:[["key","value"]]},{lang:"Kashmiri",code:"ks",enabled:!1,copy:[["key","value"]]},{lang:"Kazakh",code:"kk",enabled:!1,copy:[["key","value"]]},{lang:"Khmer",code:"km",enabled:!1,copy:[["key","value"]]},{lang:"Kikuyu",code:"ki",enabled:!1,copy:[["key","value"]]},{lang:"Kinyarwanda (Rwanda)",code:"rw",enabled:!1,copy:[["key","value"]]},{lang:"Kirundi",code:"rn",enabled:!1,copy:[["key","value"]]},{lang:"Kyrgyz",code:"ky",enabled:!1,copy:[["key","value"]]},{lang:"Komi",code:"kv",enabled:!1,copy:[["key","value"]]},{lang:"Kongo",code:"kg",enabled:!1,copy:[["key","value"]]},{lang:"Korean",code:"ko",enabled:!1,copy:[["key","value"]]},{lang:"Kurdish",code:"ku",enabled:!1,copy:[["key","value"]]},{lang:"Kwanyama",code:"kj",enabled:!1,copy:[["key","value"]]},{lang:"Lao",code:"lo",enabled:!1,copy:[["key","value"]]},{lang:"Latin",code:"la",enabled:!0,copy:[["key","value"]]},{lang:"Latvian (Lettish)",code:"lv",enabled:!1,copy:[["key","value"]]},{lang:"Limburgish ( Limburger)",code:"li",enabled:!1,copy:[["key","value"]]},{lang:"Lingala",code:"ln",enabled:!1,copy:[["key","value"]]},{lang:"Lithuanian",code:"lt",enabled:!1,copy:[["key","value"]]},{lang:"Luga-Katanga",code:"lu",enabled:!1,copy:[["key","value"]]},{lang:"Luganda, Ganda",code:"lg",enabled:!1,copy:[["key","value"]]},{lang:"Luxembourgish",code:"lb",enabled:!1,copy:[["key","value"]]},{lang:"Manx",code:"gv",enabled:!1,copy:[["key","value"]]},{lang:"Macedonian",code:"mk",enabled:!1,copy:[["key","value"]]},{lang:"Malagasy",code:"mg",enabled:!1,copy:[["key","value"]]},{lang:"Malay",code:"ms",enabled:!1,copy:[["key","value"]]},{lang:"Malayalam",code:"ml",enabled:!1,copy:[["key","value"]]},{lang:"Maltese",code:"mt",enabled:!1,copy:[["key","value"]]},{lang:"Maori",code:"mi",enabled:!1,copy:[["key","value"]]},{lang:"Marathi",code:"mr",enabled:!1,copy:[["key","value"]]},{lang:"Marshallese",code:"mh",enabled:!1,copy:[["key","value"]]},{lang:"Moldavian",code:"mo",enabled:!1,copy:[["key","value"]]},{lang:"Mongolian",code:"mn",enabled:!1,copy:[["key","value"]]},{lang:"Nauru",code:"na",enabled:!1,copy:[["key","value"]]},{lang:"Navajo",code:"nv",enabled:!1,copy:[["key","value"]]},{lang:"Ndonga",code:"ng",enabled:!1,copy:[["key","value"]]},{lang:"Northern Ndebele",code:"nd",enabled:!1,copy:[["key","value"]]},{lang:"Nepali",code:"ne",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian",code:"no",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian bokmål",code:"nb",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian nynorsk",code:"nn",enabled:!1,copy:[["key","value"]]},{lang:"Nuosu",code:"ii",enabled:!1,copy:[["key","value"]]},{lang:"Occitan",code:"oc",enabled:!1,copy:[["key","value"]]},{lang:"Ojibwe",code:"oj",enabled:!1,copy:[["key","value"]]},{lang:"Old Church Slavonic, Old Bulgarian",code:"cu",enabled:!1,copy:[["key","value"]]},{lang:"Oriya",code:"or",enabled:!1,copy:[["key","value"]]},{lang:"Oromo (Afaan Oromo)",code:"om",enabled:!1,copy:[["key","value"]]},{lang:"Ossetian",code:"os",enabled:!1,copy:[["key","value"]]},{lang:"Pāli",code:"pi",enabled:!1,copy:[["key","value"]]},{lang:"Pashto, Pushto",code:"ps",enabled:!1,copy:[["key","value"]]},{lang:"Persian (Farsi)",code:"fa",enabled:!1,copy:[["key","value"]]},{lang:"Polish",code:"pl",enabled:!1,copy:[["key","value"]]},{lang:"Portuguese",code:"pt",enabled:!1,copy:[["key","value"]]},{lang:"Punjabi (Eastern)",code:"pa",enabled:!1,copy:[["key","value"]]},{lang:"Quechua",code:"qu",enabled:!1,copy:[["key","value"]]},{lang:"Romansh",code:"rm",enabled:!1,copy:[["key","value"]]},{lang:"Romanian",code:"ro",enabled:!1,copy:[["key","value"]]},{lang:"Russian",code:"ru",enabled:!1,copy:[["key","value"]]},{lang:"Sami",code:"se",enabled:!1,copy:[["key","value"]]},{lang:"Samoan",code:"sm",enabled:!1,copy:[["key","value"]]},{lang:"Sango",code:"sg",enabled:!1,copy:[["key","value"]]},{lang:"Sanskrit",code:"sa",enabled:!1,copy:[["key","value"]]},{lang:"Serbian",code:"sr",enabled:!1,copy:[["key","value"]]},{lang:"Serbo-Croatian",code:"sh",enabled:!1,copy:[["key","value"]]},{lang:"Sesotho",code:"st",enabled:!1,copy:[["key","value"]]},{lang:"Setswana",code:"tn",enabled:!1,copy:[["key","value"]]},{lang:"Shona",code:"sn",enabled:!1,copy:[["key","value"]]},{lang:"Sichuan Yi",code:"ii",enabled:!1,copy:[["key","value"]]},{lang:"Sindhi",code:"sd",enabled:!1,copy:[["key","value"]]},{lang:"Sinhalese",code:"si",enabled:!1,copy:[["key","value"]]},{lang:"Siswati",code:"ss",enabled:!1,copy:[["key","value"]]},{lang:"Slovak",code:"sk",enabled:!1,copy:[["key","value"]]},{lang:"Slovenian",code:"sl",enabled:!1,copy:[["key","value"]]},{lang:"Somali",code:"so",enabled:!1,copy:[["key","value"]]},{lang:"Southern Ndebele",code:"nr",enabled:!1,copy:[["key","value"]]},{lang:"Spanish",code:"es",enabled:!1,copy:[["key","value"]]},{lang:"Sundanese",code:"su",enabled:!1,copy:[["key","value"]]},{lang:"Swahili (Kiswahili)",code:"sw",enabled:!1,copy:[["key","value"]]},{lang:"Swati",code:"ss",enabled:!1,copy:[["key","value"]]},{lang:"Swedish",code:"sv",enabled:!1,copy:[["key","value"]]},{lang:"Tagalog",code:"tl",enabled:!1,copy:[["key","value"]]},{lang:"Tahitian",code:"ty",enabled:!1,copy:[["key","value"]]},{lang:"Tajik",code:"tg",enabled:!1,copy:[["key","value"]]},{lang:"Tamil",code:"ta",enabled:!1,copy:[["key","value"]]},{lang:"Tatar",code:"tt",enabled:!1,copy:[["key","value"]]},{lang:"Telugu",code:"te",enabled:!1,copy:[["key","value"]]},{lang:"Thai",code:"th",enabled:!1,copy:[["key","value"]]},{lang:"Tibetan",code:"bo",enabled:!1,copy:[["key","value"]]},{lang:"Tigrinya",code:"ti",enabled:!1,copy:[["key","value"]]},{lang:"Tonga",code:"to",enabled:!1,copy:[["key","value"]]},{lang:"Tsonga",code:"ts",enabled:!1,copy:[["key","value"]]},{lang:"Turkish",code:"tr",enabled:!1,copy:[["key","value"]]},{lang:"Turkmen",code:"tk",enabled:!1,copy:[["key","value"]]},{lang:"Twi",code:"tw",enabled:!1,copy:[["key","value"]]},{lang:"Uyghur",code:"ug",enabled:!1,copy:[["key","value"]]},{lang:"Ukrainian",code:"uk",enabled:!1,copy:[["key","value"]]},{lang:"Urdu",code:"ur",enabled:!1,copy:[["key","value"]]},{lang:"Uzbek",code:"uz",enabled:!1,copy:[["key","value"]]},{lang:"Venda",code:"ve",enabled:!1,copy:[["key","value"]]},{lang:"Vietnamese",code:"vi",enabled:!1,copy:[["key","value"]]},{lang:"Volapük",code:"vo",enabled:!1,copy:[["key","value"]]},{lang:"Wallon",code:"wa",enabled:!1,copy:[["key","value"]]},{lang:"Welsh",code:"cy",enabled:!1,copy:[["key","value"]]},{lang:"Wolof",code:"wo",enabled:!1,copy:[["key","value"]]},{lang:"Western Frisian",code:"fy",enabled:!1,copy:[["key","value"]]},{lang:"Xhosa",code:"xh",enabled:!1,copy:[["key","value"]]},{lang:"Yiddish",code:"yi, ji",enabled:!1,copy:[["key","value"]]},{lang:"Yoruba",code:"yo",enabled:!1,copy:[["key","value"]]},{lang:"Zhuang, Chuang",code:"za",enabled:!1,copy:[["key","value"]]},{lang:"Zulu",code:"zu",enabled:!1,copy:[["key","value"]]}]}}};function Kt(e){return new Promise((t,n)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>n(e.error)})}function Cu(e,t){let n;const a=()=>{if(n)return n;const s=indexedDB.open(e);return s.onupgradeneeded=()=>s.result.createObjectStore(t),n=Kt(s),n.then(o=>{o.onclose=()=>n=void 0},()=>{}),n};return(s,o)=>a().then(r=>o(r.transaction(t,s).objectStore(t)))}let Wa;function Gn(){return Wa||(Wa=Cu("keyval-store","keyval")),Wa}function Ru(e,t=Gn()){return t("readonly",n=>Kt(n.get(e)))}function Go(e,t,n=Gn()){return n("readwrite",a=>(a.put(t,e),Kt(a.transaction)))}function Ja(e,t=Gn()){return t("readwrite",n=>(n.delete(e),Kt(n.transaction)))}function xi(e,t){return e.openCursor().onsuccess=function(){this.result&&(t(this.result),this.result.continue())},Kt(e.transaction)}function cn(e=Gn()){return e("readonly",t=>{if(t.getAllKeys)return Kt(t.getAllKeys());const n=[];return xi(t,a=>n.push(a.key)).then(()=>n)})}function Nu(e=Gn()){return e("readonly",t=>{if(t.getAll&&t.getAllKeys)return Promise.all([Kt(t.getAllKeys()),Kt(t.getAll())]).then(([a,s])=>a.map((o,r)=>[o,s[r]]));const n=[];return e("readonly",a=>xi(a,s=>n.push([s.key,s.value])).then(()=>n))})}const bn=e=>e!==null&&Object.prototype.toString.call(e)==="[object Object]",ua=(e,t)=>{if(e===t)return!0;if(typeof e!=typeof t)return!1;if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n+=1)if(!ua(e[n],t[n]))return!1;return!0}if(bn(e)&&bn(t)){const n=Object.entries(e),a=new Set(Object.keys(t));if(n.length!==a.size)return!1;for(const[s,o]of n){if(!ua(o,t[s]))return!1;a.delete(s)}return a.size===0}return!1},Vn=e=>{if(e===""||e===!1||e===null||e===void 0||Array.isArray(e)&&e.length===0)return!0;if(bn(e)){for(const t in e)if(e.hasOwnProperty(t))return!1;return!0}return!1},Lu=e=>e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="_",qo=e=>e>="0"&&e<="9"||e==="-",Du=e=>e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="_";var A;(function(e){e.TOK_EOF="EOF",e.TOK_UNQUOTEDIDENTIFIER="UnquotedIdentifier",e.TOK_QUOTEDIDENTIFIER="QuotedIdentifier",e.TOK_RBRACKET="Rbracket",e.TOK_RPAREN="Rparen",e.TOK_COMMA="Comma",e.TOK_COLON="Colon",e.TOK_RBRACE="Rbrace",e.TOK_NUMBER="Number",e.TOK_CURRENT="Current",e.TOK_ROOT="Root",e.TOK_EXPREF="Expref",e.TOK_PIPE="Pipe",e.TOK_OR="Or",e.TOK_AND="And",e.TOK_EQ="EQ",e.TOK_GT="GT",e.TOK_LT="LT",e.TOK_GTE="GTE",e.TOK_LTE="LTE",e.TOK_NE="NE",e.TOK_FLATTEN="Flatten",e.TOK_STAR="Star",e.TOK_FILTER="Filter",e.TOK_DOT="Dot",e.TOK_NOT="Not",e.TOK_LBRACE="Lbrace",e.TOK_LBRACKET="Lbracket",e.TOK_LPAREN="Lparen",e.TOK_LITERAL="Literal"})(A||(A={}));const Wo={"(":A.TOK_LPAREN,")":A.TOK_RPAREN,"*":A.TOK_STAR,",":A.TOK_COMMA,".":A.TOK_DOT,":":A.TOK_COLON,"@":A.TOK_CURRENT,$:A.TOK_ROOT,"]":A.TOK_RBRACKET,"{":A.TOK_LBRACE,"}":A.TOK_RBRACE},Iu={"!":!0,"<":!0,"=":!0,">":!0},Mu={"	":!0,"\n":!0,"\r":!0," ":!0};class Bu{constructor(){this._current=0}tokenize(t){const n=[];this._current=0;let a,s,o;for(;this._current<t.length;)if(Lu(t[this._current]))a=this._current,s=this.consumeUnquotedIdentifier(t),n.push({start:a,type:A.TOK_UNQUOTEDIDENTIFIER,value:s});else if(Wo[t[this._current]]!==void 0)n.push({start:this._current,type:Wo[t[this._current]],value:t[this._current]}),this._current+=1;else if(qo(t[this._current]))o=this.consumeNumber(t),n.push(o);else if(t[this._current]==="[")o=this.consumeLBracket(t),n.push(o);else if(t[this._current]==='"')a=this._current,s=this.consumeQuotedIdentifier(t),n.push({start:a,type:A.TOK_QUOTEDIDENTIFIER,value:s});else if(t[this._current]==="'")a=this._current,s=this.consumeRawStringLiteral(t),n.push({start:a,type:A.TOK_LITERAL,value:s});else if(t[this._current]==="`"){a=this._current;const r=this.consumeLiteral(t);n.push({start:a,type:A.TOK_LITERAL,value:r})}else if(Iu[t[this._current]]!==void 0)o=this.consumeOperator(t),o&&n.push(o);else if(Mu[t[this._current]]!==void 0)this._current+=1;else if(t[this._current]==="&")a=this._current,this._current+=1,t[this._current]==="&"?(this._current+=1,n.push({start:a,type:A.TOK_AND,value:"&&"})):n.push({start:a,type:A.TOK_EXPREF,value:"&"});else if(t[this._current]==="|")a=this._current,this._current+=1,t[this._current]==="|"?(this._current+=1,n.push({start:a,type:A.TOK_OR,value:"||"})):n.push({start:a,type:A.TOK_PIPE,value:"|"});else{const r=new Error(`Unknown character: ${t[this._current]}`);throw r.name="LexerError",r}return n}consumeUnquotedIdentifier(t){const n=this._current;for(this._current+=1;this._current<t.length&&Du(t[this._current]);)this._current+=1;return t.slice(n,this._current)}consumeQuotedIdentifier(t){const n=this._current;this._current+=1;const a=t.length;for(;t[this._current]!=='"'&&this._current<a;){let s=this._current;t[s]==="\\"&&(t[s+1]==="\\"||t[s+1]==='"')?s+=2:s+=1,this._current=s}return this._current+=1,JSON.parse(t.slice(n,this._current))}consumeRawStringLiteral(t){const n=this._current;this._current+=1;const a=t.length;for(;t[this._current]!=="'"&&this._current<a;){let o=this._current;t[o]==="\\"&&(t[o+1]==="\\"||t[o+1]==="'")?o+=2:o+=1,this._current=o}return this._current+=1,t.slice(n+1,this._current-1).replace("\\'","'")}consumeNumber(t){const n=this._current;this._current+=1;const a=t.length;for(;qo(t[this._current])&&this._current<a;)this._current+=1;const s=parseInt(t.slice(n,this._current),10);return{start:n,value:s,type:A.TOK_NUMBER}}consumeLBracket(t){const n=this._current;return this._current+=1,t[this._current]==="?"?(this._current+=1,{start:n,type:A.TOK_FILTER,value:"[?"}):t[this._current]==="]"?(this._current+=1,{start:n,type:A.TOK_FLATTEN,value:"[]"}):{start:n,type:A.TOK_LBRACKET,value:"["}}consumeOperator(t){const n=this._current,a=t[n];if(this._current+=1,a==="!")return t[this._current]==="="?(this._current+=1,{start:n,type:A.TOK_NE,value:"!="}):{start:n,type:A.TOK_NOT,value:"!"};if(a==="<")return t[this._current]==="="?(this._current+=1,{start:n,type:A.TOK_LTE,value:"<="}):{start:n,type:A.TOK_LT,value:"<"};if(a===">")return t[this._current]==="="?(this._current+=1,{start:n,type:A.TOK_GTE,value:">="}):{start:n,type:A.TOK_GT,value:">"};if(a==="="&&t[this._current]==="=")return this._current+=1,{start:n,type:A.TOK_EQ,value:"=="}}consumeLiteral(t){this._current+=1;const n=this._current,a=t.length;for(;t[this._current]!=="`"&&this._current<a;){let r=this._current;t[r]==="\\"&&(t[r+1]==="\\"||t[r+1]==="`")?r+=2:r+=1,this._current=r}let s=t.slice(n,this._current).trimLeft();s=s.replace("\\`","`");const o=this.looksLikeJSON(s)?JSON.parse(s):JSON.parse(`"${s}"`);return this._current+=1,o}looksLikeJSON(t){const a=["true","false","null"],s="-0123456789";if(t==="")return!1;if('[{"'.includes(t[0])||a.includes(t))return!0;if(s.includes(t[0]))try{return JSON.parse(t),!0}catch{return!1}return!1}}const Ci=new Bu,xe={[A.TOK_EOF]:0,[A.TOK_UNQUOTEDIDENTIFIER]:0,[A.TOK_QUOTEDIDENTIFIER]:0,[A.TOK_RBRACKET]:0,[A.TOK_RPAREN]:0,[A.TOK_COMMA]:0,[A.TOK_RBRACE]:0,[A.TOK_NUMBER]:0,[A.TOK_CURRENT]:0,[A.TOK_EXPREF]:0,[A.TOK_ROOT]:0,[A.TOK_PIPE]:1,[A.TOK_OR]:2,[A.TOK_AND]:3,[A.TOK_EQ]:5,[A.TOK_GT]:5,[A.TOK_LT]:5,[A.TOK_GTE]:5,[A.TOK_LTE]:5,[A.TOK_NE]:5,[A.TOK_FLATTEN]:9,[A.TOK_STAR]:20,[A.TOK_FILTER]:21,[A.TOK_DOT]:40,[A.TOK_NOT]:45,[A.TOK_LBRACE]:50,[A.TOK_LBRACKET]:55,[A.TOK_LPAREN]:60};class Fu{constructor(){this.index=0,this.tokens=[]}parse(t){this.loadTokens(t),this.index=0;const n=this.expression(0);if(this.lookahead(0)!==A.TOK_EOF){const a=this.lookaheadToken(0);this.errorToken(a,`Unexpected token type: ${a.type}, value: ${a.value}`)}return n}loadTokens(t){this.tokens=[...Ci.tokenize(t),{type:A.TOK_EOF,value:"",start:t.length}]}expression(t){const n=this.lookaheadToken(0);this.advance();let a=this.nud(n),s=this.lookahead(0);for(;t<xe[s];)this.advance(),a=this.led(s,a),s=this.lookahead(0);return a}lookahead(t){return this.tokens[this.index+t].type}lookaheadToken(t){return this.tokens[this.index+t]}advance(){this.index+=1}nud(t){let n,a,s;switch(t.type){case A.TOK_LITERAL:return{type:"Literal",value:t.value};case A.TOK_UNQUOTEDIDENTIFIER:return{type:"Field",name:t.value};case A.TOK_QUOTEDIDENTIFIER:const o={type:"Field",name:t.value};if(this.lookahead(0)===A.TOK_LPAREN)throw new Error("Quoted identifier not allowed for function names.");return o;case A.TOK_NOT:return a=this.expression(xe.Not),{type:"NotExpression",children:[a]};case A.TOK_STAR:return n={type:"Identity"},a=this.lookahead(0)===A.TOK_RBRACKET&&{type:"Identity"}||this.parseProjectionRHS(xe.Star),{type:"ValueProjection",children:[n,a]};case A.TOK_FILTER:return this.led(t.type,{type:"Identity"});case A.TOK_LBRACE:return this.parseMultiselectHash();case A.TOK_FLATTEN:return n={type:A.TOK_FLATTEN,children:[{type:"Identity"}]},a=this.parseProjectionRHS(xe.Flatten),{type:"Projection",children:[n,a]};case A.TOK_LBRACKET:return this.lookahead(0)===A.TOK_NUMBER||this.lookahead(0)===A.TOK_COLON?(a=this.parseIndexExpression(),this.projectIfSlice({type:"Identity"},a)):this.lookahead(0)===A.TOK_STAR&&this.lookahead(1)===A.TOK_RBRACKET?(this.advance(),this.advance(),a=this.parseProjectionRHS(xe.Star),{children:[{type:"Identity"},a],type:"Projection"}):this.parseMultiselectList();case A.TOK_CURRENT:return{type:A.TOK_CURRENT};case A.TOK_ROOT:return{type:A.TOK_ROOT};case A.TOK_EXPREF:return s=this.expression(xe.Expref),{type:"ExpressionReference",children:[s]};case A.TOK_LPAREN:const r=[];for(;this.lookahead(0)!==A.TOK_RPAREN;)this.lookahead(0)===A.TOK_CURRENT?(s={type:A.TOK_CURRENT},this.advance()):s=this.expression(0),r.push(s);return this.match(A.TOK_RPAREN),r[0];default:this.errorToken(t)}}led(t,n){let a;switch(t){case A.TOK_DOT:const s=xe.Dot;return this.lookahead(0)!==A.TOK_STAR?(a=this.parseDotRHS(s),{type:"Subexpression",children:[n,a]}):(this.advance(),a=this.parseProjectionRHS(s),{type:"ValueProjection",children:[n,a]});case A.TOK_PIPE:return a=this.expression(xe.Pipe),{type:A.TOK_PIPE,children:[n,a]};case A.TOK_OR:return a=this.expression(xe.Or),{type:"OrExpression",children:[n,a]};case A.TOK_AND:return a=this.expression(xe.And),{type:"AndExpression",children:[n,a]};case A.TOK_LPAREN:const o=n.name,r=[];let i;for(;this.lookahead(0)!==A.TOK_RPAREN;)this.lookahead(0)===A.TOK_CURRENT?(i={type:A.TOK_CURRENT},this.advance()):i=this.expression(0),this.lookahead(0)===A.TOK_COMMA&&this.match(A.TOK_COMMA),r.push(i);return this.match(A.TOK_RPAREN),{name:o,type:"Function",children:r};case A.TOK_FILTER:const u=this.expression(0);return this.match(A.TOK_RBRACKET),a=this.lookahead(0)===A.TOK_FLATTEN&&{type:"Identity"}||this.parseProjectionRHS(xe.Filter),{type:"FilterProjection",children:[n,a,u]};case A.TOK_FLATTEN:const c={type:A.TOK_FLATTEN,children:[n]},p=this.parseProjectionRHS(xe.Flatten);return{type:"Projection",children:[c,p]};case A.TOK_EQ:case A.TOK_NE:case A.TOK_GT:case A.TOK_GTE:case A.TOK_LT:case A.TOK_LTE:return this.parseComparator(n,t);case A.TOK_LBRACKET:const f=this.lookaheadToken(0);return f.type===A.TOK_NUMBER||f.type===A.TOK_COLON?(a=this.parseIndexExpression(),this.projectIfSlice(n,a)):(this.match(A.TOK_STAR),this.match(A.TOK_RBRACKET),a=this.parseProjectionRHS(xe.Star),{type:"Projection",children:[n,a]});default:return this.errorToken(this.lookaheadToken(0))}}match(t){if(this.lookahead(0)===t){this.advance();return}else{const n=this.lookaheadToken(0);this.errorToken(n,`Expected ${t}, got: ${n.type}`)}}errorToken(t,n=""){const a=new Error(n||`Invalid token (${t.type}): "${t.value}"`);throw a.name="ParserError",a}parseIndexExpression(){if(this.lookahead(0)===A.TOK_COLON||this.lookahead(1)===A.TOK_COLON)return this.parseSliceExpression();const t={type:"Index",value:this.lookaheadToken(0).value};return this.advance(),this.match(A.TOK_RBRACKET),t}projectIfSlice(t,n){const a={type:"IndexExpression",children:[t,n]};return n.type==="Slice"?{children:[a,this.parseProjectionRHS(xe.Star)],type:"Projection"}:a}parseSliceExpression(){const t=[null,null,null];let n=0,a=this.lookahead(0);for(;a!==A.TOK_RBRACKET&&n<3;){if(a===A.TOK_COLON)n+=1,this.advance();else if(a===A.TOK_NUMBER)t[n]=this.lookaheadToken(0).value,this.advance();else{const s=this.lookaheadToken(0);this.errorToken(s,`Syntax error, unexpected token: ${s.value}(${s.type})`)}a=this.lookahead(0)}return this.match(A.TOK_RBRACKET),{children:t,type:"Slice"}}parseComparator(t,n){const a=this.expression(xe[n]);return{type:"Comparator",name:n,children:[t,a]}}parseDotRHS(t){const n=this.lookahead(0);if([A.TOK_UNQUOTEDIDENTIFIER,A.TOK_QUOTEDIDENTIFIER,A.TOK_STAR].includes(n))return this.expression(t);if(n===A.TOK_LBRACKET)return this.match(A.TOK_LBRACKET),this.parseMultiselectList();if(n===A.TOK_LBRACE)return this.match(A.TOK_LBRACE),this.parseMultiselectHash();const s=this.lookaheadToken(0);this.errorToken(s,`Syntax error, unexpected token: ${s.value}(${s.type})`)}parseProjectionRHS(t){if(xe[this.lookahead(0)]<10)return{type:"Identity"};if(this.lookahead(0)===A.TOK_LBRACKET)return this.expression(t);if(this.lookahead(0)===A.TOK_FILTER)return this.expression(t);if(this.lookahead(0)===A.TOK_DOT)return this.match(A.TOK_DOT),this.parseDotRHS(t);const n=this.lookaheadToken(0);this.errorToken(n,`Syntax error, unexpected token: ${n.value}(${n.type})`)}parseMultiselectList(){const t=[];for(;this.lookahead(0)!==A.TOK_RBRACKET;){const n=this.expression(0);if(t.push(n),this.lookahead(0)===A.TOK_COMMA&&(this.match(A.TOK_COMMA),this.lookahead(0)===A.TOK_RBRACKET))throw new Error("Unexpected token Rbracket")}return this.match(A.TOK_RBRACKET),{type:"MultiSelectList",children:t}}parseMultiselectHash(){const t=[],n=[A.TOK_UNQUOTEDIDENTIFIER,A.TOK_QUOTEDIDENTIFIER];let a,s,o;for(;;){if(a=this.lookaheadToken(0),!n.includes(a.type))throw new Error(`Expecting an identifier token, got: ${a.type}`);if(s=a.value,this.advance(),this.match(A.TOK_COLON),o=this.expression(0),t.push({value:o,type:"KeyValuePair",name:s}),this.lookahead(0)===A.TOK_COMMA)this.match(A.TOK_COMMA);else if(this.lookahead(0)===A.TOK_RBRACE){this.match(A.TOK_RBRACE);break}}return{type:"MultiSelectHash",children:t}}}const Ri=new Fu;var M;(function(e){e[e.TYPE_NUMBER=0]="TYPE_NUMBER",e[e.TYPE_ANY=1]="TYPE_ANY",e[e.TYPE_STRING=2]="TYPE_STRING",e[e.TYPE_ARRAY=3]="TYPE_ARRAY",e[e.TYPE_OBJECT=4]="TYPE_OBJECT",e[e.TYPE_BOOLEAN=5]="TYPE_BOOLEAN",e[e.TYPE_EXPREF=6]="TYPE_EXPREF",e[e.TYPE_NULL=7]="TYPE_NULL",e[e.TYPE_ARRAY_NUMBER=8]="TYPE_ARRAY_NUMBER",e[e.TYPE_ARRAY_STRING=9]="TYPE_ARRAY_STRING"})(M||(M={}));class $u{constructor(t){this.TYPE_NAME_TABLE={[M.TYPE_NUMBER]:"number",[M.TYPE_ANY]:"any",[M.TYPE_STRING]:"string",[M.TYPE_ARRAY]:"array",[M.TYPE_OBJECT]:"object",[M.TYPE_BOOLEAN]:"boolean",[M.TYPE_EXPREF]:"expression",[M.TYPE_NULL]:"null",[M.TYPE_ARRAY_NUMBER]:"Array<number>",[M.TYPE_ARRAY_STRING]:"Array<string>"},this.functionAbs=([n])=>Math.abs(n),this.functionAvg=([n])=>{let a=0;for(let s=0;s<n.length;s+=1)a+=n[s];return a/n.length},this.functionCeil=([n])=>Math.ceil(n),this.functionContains=n=>{const[a,s]=n;return a.includes(s)},this.functionEndsWith=n=>{const[a,s]=n;return a.includes(s,a.length-s.length)},this.functionFloor=([n])=>Math.floor(n),this.functionJoin=n=>{const[a,s]=n;return s.join(a)},this.functionKeys=([n])=>Object.keys(n),this.functionLength=([n])=>bn(n)?Object.keys(n).length:n.length,this.functionMap=n=>{if(!this._interpreter)return[];const a=[],s=this._interpreter,o=n[0],r=n[1];for(let i=0;i<r.length;i+=1)a.push(s.visit(o,r[i]));return a},this.functionMax=([n])=>{if(!n.length)return null;if(this.getTypeName(n[0])===M.TYPE_NUMBER)return Math.max(...n);const s=n;let o=s[0];for(let r=1;r<s.length;r+=1)o.localeCompare(s[r])<0&&(o=s[r]);return o},this.functionMaxBy=n=>{const a=n[1],s=n[0],o=this.createKeyFunction(a,[M.TYPE_NUMBER,M.TYPE_STRING]);let r=-1/0,i,l;for(let u=0;u<s.length;u+=1)l=o&&o(s[u]),l!==void 0&&l>r&&(r=l,i=s[u]);return i},this.functionMerge=n=>{let a={};for(let s=0;s<n.length;s+=1){const o=n[s];a=Object.assign(a,o)}return a},this.functionMin=([n])=>{if(!n.length)return null;if(this.getTypeName(n[0])===M.TYPE_NUMBER)return Math.min(...n);const s=n;let o=s[0];for(let r=1;r<s.length;r+=1)s[r].localeCompare(o)<0&&(o=s[r]);return o},this.functionMinBy=n=>{const a=n[1],s=n[0],o=this.createKeyFunction(a,[M.TYPE_NUMBER,M.TYPE_STRING]);let r=1/0,i,l;for(let u=0;u<s.length;u+=1)l=o&&o(s[u]),l!==void 0&&l<r&&(r=l,i=s[u]);return i},this.functionNotNull=n=>{for(let a=0;a<n.length;a+=1)if(this.getTypeName(n[a])!==M.TYPE_NULL)return n[a];return null},this.functionReverse=([n])=>{if(this.getTypeName(n)===M.TYPE_STRING){const o=n;let r="";for(let i=o.length-1;i>=0;i-=1)r+=o[i];return r}const s=n.slice(0);return s.reverse(),s},this.functionSort=([n])=>[...n].sort(),this.functionSortBy=n=>{if(!this._interpreter)return[];const a=n[0].slice(0);if(a.length===0)return a;const s=this._interpreter,o=n[1],r=this.getTypeName(s.visit(o,a[0]));if(r!==void 0&&![M.TYPE_NUMBER,M.TYPE_STRING].includes(r))throw new Error(`TypeError: unexpected type (${this.TYPE_NAME_TABLE[r]})`);const i=[];for(let l=0;l<a.length;l+=1)i.push([l,a[l]]);i.sort((l,u)=>{const c=s.visit(o,l[1]),p=s.visit(o,u[1]);if(this.getTypeName(c)!==r)throw new Error(`TypeError: expected (${this.TYPE_NAME_TABLE[r]}), received ${this.TYPE_NAME_TABLE[this.getTypeName(c)]}`);if(this.getTypeName(p)!==r)throw new Error(`TypeError: expected (${this.TYPE_NAME_TABLE[r]}), received ${this.TYPE_NAME_TABLE[this.getTypeName(p)]}`);return c>p?1:c<p?-1:l[0]-u[0]});for(let l=0;l<i.length;l+=1)a[l]=i[l][1];return a},this.functionStartsWith=([n,a])=>n.startsWith(a),this.functionSum=([n])=>n.reduce((a,s)=>a+s,0),this.functionToArray=([n])=>this.getTypeName(n)===M.TYPE_ARRAY?n:[n],this.functionToNumber=([n])=>{const a=this.getTypeName(n);let s;return a===M.TYPE_NUMBER?n:a===M.TYPE_STRING&&(s=+n,!isNaN(s))?s:null},this.functionToString=([n])=>this.getTypeName(n)===M.TYPE_STRING?n:JSON.stringify(n),this.functionType=([n])=>{switch(this.getTypeName(n)){case M.TYPE_NUMBER:return"number";case M.TYPE_STRING:return"string";case M.TYPE_ARRAY:return"array";case M.TYPE_OBJECT:return"object";case M.TYPE_BOOLEAN:return"boolean";case M.TYPE_EXPREF:return"expref";case M.TYPE_NULL:return"null";default:return}},this.functionValues=([n])=>Object.values(n),this.functionTable={abs:{_func:this.functionAbs,_signature:[{types:[M.TYPE_NUMBER]}]},avg:{_func:this.functionAvg,_signature:[{types:[M.TYPE_ARRAY_NUMBER]}]},ceil:{_func:this.functionCeil,_signature:[{types:[M.TYPE_NUMBER]}]},contains:{_func:this.functionContains,_signature:[{types:[M.TYPE_STRING,M.TYPE_ARRAY]},{types:[M.TYPE_ANY]}]},ends_with:{_func:this.functionEndsWith,_signature:[{types:[M.TYPE_STRING]},{types:[M.TYPE_STRING]}]},floor:{_func:this.functionFloor,_signature:[{types:[M.TYPE_NUMBER]}]},join:{_func:this.functionJoin,_signature:[{types:[M.TYPE_STRING]},{types:[M.TYPE_ARRAY_STRING]}]},keys:{_func:this.functionKeys,_signature:[{types:[M.TYPE_OBJECT]}]},length:{_func:this.functionLength,_signature:[{types:[M.TYPE_STRING,M.TYPE_ARRAY,M.TYPE_OBJECT]}]},map:{_func:this.functionMap,_signature:[{types:[M.TYPE_EXPREF]},{types:[M.TYPE_ARRAY]}]},max:{_func:this.functionMax,_signature:[{types:[M.TYPE_ARRAY_NUMBER,M.TYPE_ARRAY_STRING]}]},max_by:{_func:this.functionMaxBy,_signature:[{types:[M.TYPE_ARRAY]},{types:[M.TYPE_EXPREF]}]},merge:{_func:this.functionMerge,_signature:[{types:[M.TYPE_OBJECT],variadic:!0}]},min:{_func:this.functionMin,_signature:[{types:[M.TYPE_ARRAY_NUMBER,M.TYPE_ARRAY_STRING]}]},min_by:{_func:this.functionMinBy,_signature:[{types:[M.TYPE_ARRAY]},{types:[M.TYPE_EXPREF]}]},not_null:{_func:this.functionNotNull,_signature:[{types:[M.TYPE_ANY],variadic:!0}]},reverse:{_func:this.functionReverse,_signature:[{types:[M.TYPE_STRING,M.TYPE_ARRAY]}]},sort:{_func:this.functionSort,_signature:[{types:[M.TYPE_ARRAY_STRING,M.TYPE_ARRAY_NUMBER]}]},sort_by:{_func:this.functionSortBy,_signature:[{types:[M.TYPE_ARRAY]},{types:[M.TYPE_EXPREF]}]},starts_with:{_func:this.functionStartsWith,_signature:[{types:[M.TYPE_STRING]},{types:[M.TYPE_STRING]}]},sum:{_func:this.functionSum,_signature:[{types:[M.TYPE_ARRAY_NUMBER]}]},to_array:{_func:this.functionToArray,_signature:[{types:[M.TYPE_ANY]}]},to_number:{_func:this.functionToNumber,_signature:[{types:[M.TYPE_ANY]}]},to_string:{_func:this.functionToString,_signature:[{types:[M.TYPE_ANY]}]},type:{_func:this.functionType,_signature:[{types:[M.TYPE_ANY]}]},values:{_func:this.functionValues,_signature:[{types:[M.TYPE_OBJECT]}]}},this._interpreter=t}registerFunction(t,n,a){if(t in this.functionTable)throw new Error(`Function already defined: ${t}()`);this.functionTable[t]={_func:n.bind(this),_signature:a}}callFunction(t,n){const a=this.functionTable[t];if(a===void 0)throw new Error(`Unknown function: ${t}()`);return this.validateArgs(t,n,a._signature),a._func.call(this,n)}validateInputSignatures(t,n){for(let a=0;a<n.length;a+=1)if("variadic"in n[a]&&a!==n.length-1)throw new Error(`ArgumentError: ${t}() 'variadic' argument ${a+1} must occur last`)}validateArgs(t,n,a){var s,o;let r;this.validateInputSignatures(t,a);const i=a.filter(d=>{var g;return(g=!d.optional)!==null&&g!==void 0?g:!1}).length,l=(o=(s=a[a.length-1])===null||s===void 0?void 0:s.variadic)!==null&&o!==void 0?o:!1,u=n.length<i,c=n.length>a.length,p=u&&(!l&&i>1||l)?"at least ":"";if(l&&u||!l&&(u||c))throw r=a.length>1,new Error(`ArgumentError: ${t}() takes ${p}${i} argument${r&&"s"||""} but received ${n.length}`);let f,h,m;for(let d=0;d<a.length;d+=1){m=!1,f=a[d].types,h=this.getTypeName(n[d]);let g;for(g=0;g<f.length;g+=1)if(h!==void 0&&this.typeMatches(h,f[g],n[d])){m=!0;break}if(!m&&h!==void 0){const b=f.map(y=>this.TYPE_NAME_TABLE[y]).join(" | ");throw new Error(`TypeError: ${t}() expected argument ${d+1} to be type (${b}) but received type ${this.TYPE_NAME_TABLE[h]} instead.`)}}}typeMatches(t,n,a){if(n===M.TYPE_ANY)return!0;if(n===M.TYPE_ARRAY_STRING||n===M.TYPE_ARRAY_NUMBER||n===M.TYPE_ARRAY){if(n===M.TYPE_ARRAY)return t===M.TYPE_ARRAY;if(t===M.TYPE_ARRAY){let s;n===M.TYPE_ARRAY_NUMBER?s=M.TYPE_NUMBER:n===M.TYPE_ARRAY_STRING&&(s=M.TYPE_STRING);for(let o=0;o<a.length;o+=1){const r=this.getTypeName(a[o]);if(r!==void 0&&s!==void 0&&!this.typeMatches(r,s,a[o]))return!1}return!0}}else return t===n;return!1}getTypeName(t){switch(Object.prototype.toString.call(t)){case"[object String]":return M.TYPE_STRING;case"[object Number]":return M.TYPE_NUMBER;case"[object Array]":return M.TYPE_ARRAY;case"[object Boolean]":return M.TYPE_BOOLEAN;case"[object Null]":return M.TYPE_NULL;case"[object Object]":return t.jmespathType===A.TOK_EXPREF?M.TYPE_EXPREF:M.TYPE_OBJECT;default:return}}createKeyFunction(t,n){if(!this._interpreter)return;const a=this._interpreter;return o=>{const r=a.visit(t,o);if(!n.includes(this.getTypeName(r))){const i=`TypeError: expected one of (${n.map(l=>this.TYPE_NAME_TABLE[l]).join(" | ")}), received ${this.TYPE_NAME_TABLE[this.getTypeName(r)]}`;throw new Error(i)}return r}}}class Uu{constructor(){this._rootValue=null,this.runtime=new $u(this)}search(t,n){return this._rootValue=n,this.visit(t,n)}visit(t,n){let a,s,o,r,i,l,u,c,p,f,h;switch(t.type){case"Field":return n===null?null:bn(n)?(l=n[t.name],l===void 0?null:l):null;case"Subexpression":for(o=this.visit(t.children[0],n),f=1;f<t.children.length;f+=1)if(o=this.visit(t.children[1],o),o===null)return null;return o;case"IndexExpression":return u=this.visit(t.children[0],n),c=this.visit(t.children[1],u),c;case"Index":if(!Array.isArray(n))return null;let m=t.value;return m<0&&(m=n.length+m),o=n[m],o===void 0&&(o=null),o;case"Slice":if(!Array.isArray(n))return null;const d=[...t.children],g=this.computeSliceParams(n.length,d),[b,y,T]=g;if(o=[],T>0)for(f=b;f<y;f+=T)o.push(n[f]);else for(f=b;f>y;f+=T)o.push(n[f]);return o;case"Projection":if(h=this.visit(t.children[0],n),!Array.isArray(h))return null;for(p=[],f=0;f<h.length;f+=1)s=this.visit(t.children[1],h[f]),s!==null&&p.push(s);return p;case"ValueProjection":if(h=this.visit(t.children[0],n),!bn(h))return null;p=[];const E=Object.values(h);for(f=0;f<E.length;f+=1)s=this.visit(t.children[1],E[f]),s!==null&&p.push(s);return p;case"FilterProjection":if(h=this.visit(t.children[0],n),!Array.isArray(h))return null;const O=[],C=[];for(f=0;f<h.length;f+=1)a=this.visit(t.children[2],h[f]),Vn(a)||O.push(h[f]);for(let P=0;P<O.length;P+=1)s=this.visit(t.children[1],O[P]),s!==null&&C.push(s);return C;case"Comparator":switch(r=this.visit(t.children[0],n),i=this.visit(t.children[1],n),t.name){case A.TOK_EQ:o=ua(r,i);break;case A.TOK_NE:o=!ua(r,i);break;case A.TOK_GT:o=r>i;break;case A.TOK_GTE:o=r>=i;break;case A.TOK_LT:o=r<i;break;case A.TOK_LTE:o=r<=i;break;default:throw new Error(`Unknown comparator: ${t.name}`)}return o;case A.TOK_FLATTEN:const I=this.visit(t.children[0],n);if(!Array.isArray(I))return null;let B=[];for(f=0;f<I.length;f+=1)s=I[f],Array.isArray(s)?B=[...B,...s]:B.push(s);return B;case"Identity":return n;case"MultiSelectList":if(n===null)return null;for(p=[],f=0;f<t.children.length;f+=1)p.push(this.visit(t.children[f],n));return p;case"MultiSelectHash":if(n===null)return null;p={};let w;for(f=0;f<t.children.length;f+=1)w=t.children[f],p[w.name]=this.visit(w.value,n);return p;case"OrExpression":return a=this.visit(t.children[0],n),Vn(a)&&(a=this.visit(t.children[1],n)),a;case"AndExpression":return r=this.visit(t.children[0],n),Vn(r)?r:this.visit(t.children[1],n);case"NotExpression":return r=this.visit(t.children[0],n),Vn(r);case"Literal":return t.value;case A.TOK_PIPE:return u=this.visit(t.children[0],n),this.visit(t.children[1],u);case A.TOK_CURRENT:return n;case A.TOK_ROOT:return this._rootValue;case"Function":const N=[];for(let P=0;P<t.children.length;P+=1)N.push(this.visit(t.children[P],n));return this.runtime.callFunction(t.name,N);case"ExpressionReference":const $=t.children[0];return $.jmespathType=A.TOK_EXPREF,$;default:throw new Error(`Unknown node type: ${t.type}`)}}computeSliceParams(t,n){let[a,s,o]=n;if(o===null)o=1;else if(o===0){const i=new Error("Invalid slice, step cannot be 0");throw i.name="RuntimeError",i}const r=o<0;return a=a===null?r?t-1:0:this.capSliceRange(t,a,o),s=s===null?r?-1:t:this.capSliceRange(t,s,o),[a,s,o]}capSliceRange(t,n,a){let s=n;return s<0?(s+=t,s<0&&(s=a<0?-1:0)):s>=t&&(s=a<0?t-1:t),s}}const $s=new Uu,Hu=M.TYPE_ANY,Ku=M.TYPE_ARRAY,Yu=M.TYPE_ARRAY_NUMBER,ju=M.TYPE_ARRAY_STRING,Gu=M.TYPE_BOOLEAN,qu=M.TYPE_EXPREF,Wu=M.TYPE_NULL,Ju=M.TYPE_NUMBER,zu=M.TYPE_OBJECT,Vu=M.TYPE_STRING;function Qu(e){return Ri.parse(e)}function Xu(e){return Ci.tokenize(e)}const Zu=(e,t,n)=>{$s.runtime.registerFunction(e,t,n)};function ep(e,t){const n=Ri.parse(t);return $s.search(n,e)}const tp=$s,Ze={compile:Qu,registerFunction:Zu,search:ep,tokenize:Xu,TreeInterpreter:tp,TYPE_ANY:Hu,TYPE_ARRAY_NUMBER:Yu,TYPE_ARRAY_STRING:ju,TYPE_ARRAY:Ku,TYPE_BOOLEAN:Gu,TYPE_EXPREF:qu,TYPE_NULL:Wu,TYPE_NUMBER:Ju,TYPE_OBJECT:zu,TYPE_STRING:Vu},dt=class dt{static async appendPrompt(t,n){Go(t,LZString.compressToUTF16(JSON.stringify(n))).then(async()=>{cn().then(a=>{a=a.filter(s=>s.indexOf(this.DELIM_PROMPTS)!=-1),a.length>dt.MAX_PROMPTS_VALS&&Ja(a[0])})}).catch(a=>console.error("~IDB Failed | ",a))}static async appendVIR_products(t){t.forEach(n=>{let a=JSON.stringify({ts:Date.now(),name:n[1]});Go(n[0],LZString.compressToUTF16(a)).then(async()=>{}).catch(s=>console.error("~IDB Failed | ",s))})}static async keys(t,n){cn().then(a=>{a=a.filter(s=>s.indexOf(t)!=-1),n&&n(a)})}static async get(t,n){Ru(t).then(a=>{try{a=JSON.parse(LZString.decompressFromUTF16(a))}catch{}finally{n&&n(a)}})}static async entries(t,n){Nu().then(a=>{a=a.filter(s=>s[0].indexOf(t)!=-1),a=a.map(s=>{try{s[1]=JSON.parse(LZString.decompressFromUTF16(s[1]))}catch{}finally{}return s}),n&&n(a)})}static compr(t){return t}static decompr(t){return t}static async act(t,n,a){let s="";switch(t){case"PROMPTS_COUNT":cn().then(r=>{r=r.filter(i=>i.indexOf(this.DELIM_PROMPTS)!=-1),s=`There are ${r.length} prompts in local IDB storage. The current max is ${this.MAX_PROMPTS_VALS}.`,s&&a&&a(s)});break;case"PROMPTS_IMPORT":console.log("~ PROMPTS_IMPORT | ");break;case"PROMPTS_EXPORT":console.log("~ PROMPTS_EXPORT | ");break;case"PROMPTS_CLEAR":cn().then(r=>{r.forEach(i=>{i.indexOf(this.DELIM_PROMPTS)!=-1&&i.split(dt.DELIM_PROMPTS)[0]==n&&Ja(i)})}),s="The Prompt history has been removed for UPI: "+n,console.log("~ PROMPTS_CLEAR ------ | ",s);break;case"VIR_COUNT":cn().then(r=>{r=r.filter(i=>i.indexOf(this.DELIM_VIR)!=-1),s=`There are ${r.length} VNR names in local IDB storage.`,s&&a&&a(s)});break;case"VIR_CLEAR":let o=0;await cn().then(r=>{r.forEach(i=>{i.indexOf(this.DELIM_VIR)!=-1&&i.split(dt.DELIM_VIR)[0]==n&&(o++,Ja(i))})}),s=`The VNR Names have been removed for UPI: ${n} (Total Deleted: ${o})`;break;case"FEATURE_CLEAR":localStorage.getItem("feature_flags")&&localStorage.removeItem("feature_flags"),s="Features have been reset to default. Refresh.";break}console.log("~ resultMsg | ",s),s&&a&&a(s)}};dt.MAX_TYPEAHEAD_ROWS=14,dt.MAX_PROMPTS_VALS=50,dt.DELIM_PROMPTS="_",dt.DELIM_VIR="-",dt.DELIM_SNDX="|";let en=dt;const _e=bd("AppState",()=>{const e=gt(),t="DEV",n="BMA Tourney v0.0.5 ",a="#app",s=St({APP__ROUTE_SYNC:"APP.ROUTE_SYNC",WC__TOURN_ACTION:"WC.TOURN_ACTION",WC__APP__HEAD_TOP:"WC.APP.HEAD_TOP",WC__APP__HEAD_TOP__LOGO:"WC.APP.HEAD_TOP.LOGO",WC__APP__HEAD_TOP__USER_PROFILE:"WC.APP.HEAD_TOP.USER_PROFILE",WC__APP__HEAD_MID:"WC.APP.HEAD_MID",WC__APP__HEAD_MID__HEAD_MID_LOBBY:"WC.APP.HEAD_MID.HEAD_MID_LOBBY",WC__APP__HEAD_MID__HEAD_MID_MY:"WC.APP.HEAD_MID.HEAD_MID_MY",WC__APP__HEAD_MID__HEAD_MID_COMPLETED:"WC.APP.HEAD_MID.HEAD_MID_COMPLETED",WC__APP__HEAD_MID__HEAD_MID_LEADERBOARD:"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD",WC__APP__HEAD_MID__HEAD_MID_SQUAD:"WC.APP.HEAD_MID.HEAD_MID_SQUAD",WC__APP__HEAD_SPORTS:"WC.APP.HEAD_SPORTS",WC__APP__HEAD_SPORTS__HEAD_SPORTS_DRAG_START:"WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START",WC__APP__FOOT:"WC.APP.FOOT",WC__APP__FOOT__ALL_SPORTS:"WC.APP.FOOT.ALL_SPORTS",WC__APP__FOOT__MY_TOURNEYS:"WC.APP.FOOT.MY_TOURNEYS",WC__APP__FOOT__LEADERBOARD:"WC.APP.FOOT.LEADERBOARD",WC__APP__FOOT__MY_PROFILE:"WC.APP.FOOT.MY_PROFILE",ROUTE__HOME_ONMOUNT:"ROUTE.HOME_ONMOUNT",ROUTE__HOME_HYDRATE:"ROUTE.HOME_HYDRATE",ROUTE__HOME__USER_PROFILE:"ROUTE.HOME.USER_PROFILE",SSE__CORE__TOURN_SYNC:"SSE.CORE.TOURN_SYNC",CANVAS__HYDRATE__STATUS:"CANVAS.HYDRATE.STATUS",SODAPOP__HYDRATE__COREBETSLIP:"SODAPOP.HYDRATE.COREBETSLIP",COREBETSLIP:"COREBETSLIP",COREBETSLIP__BET:"COREBETSLIP.BET",COREBETSLIP__SPREAD:"COREBETSLIP.SPREAD",COREBETSLIP__MONEY:"COREBETSLIP.MONEY",COREBETSLIP__TOTAL:"COREBETSLIP.TOTAL",COREBETSLIP__CLOSE:"COREBETSLIP.CLOSE",COREBETSLIP__INTERSYNC:"COREBETSLIP.INTERSYNC",COREBETSLIP__TDSYNC:"COREBETSLIP.TDSYNC"});let o=St([]),r=St([]);const i=w=>{o.push(w),o.length>10&&(o.shift(),console.log("[appState] coreTourn exceeded 10 items, removed oldest")),console.log(`[appState] coreTourn length: ${o.length}`)},l=w=>{r.push(w),r.length>10&&(r.shift(),console.log("[appState] coreBetSlip exceeded 10 items, removed oldest")),console.log(`[appState] coreBetSlip length: ${r.length}`)},u=()=>{const w=localStorage.getItem("session_user");if(console.log("[appState] Loading session_user from localStorage:",w),w)try{const N=JSON.parse(w);return console.log("[appState] Parsed session_user:",N),N}catch(N){console.error("Failed to parse session_user from localStorage:",N)}return console.log("[appState] No saved session, returning default"),{authenticated:!1,userName:"",name:"",fname:"",lname:"",email:"",token:"",guid:""}},c=ze({session_app:{online:!0,route:"",version:n+t,buildmode:t},session_log:[],session_ui:{orientation:"landscape",isTouch:"utils.isTouch()"},session_user:u()}),p=ze({commands:["clear","debug","export","feature","help","logout","reload","route","theme","version","workflow"],features:{theme:{state:"dark"},motif:{state:"brand"},lang:{state:"en"},sse:{state:!0},disable_existing_bet_btn:{state:!1},animation:{state:!0},audio:{state:!0},contextmenu:{state:!1},debug:{state:!1},guided_tour:{state:!1}},env_override:{DEV:{contextmenu:{state:!1}},QA:{contextmenu:{state:!0}},PROD:{contextmenu:{state:!1},sse:!0}}}),f=()=>{if(!localStorage.getItem("feature_flags"))localStorage.setItem("feature_flags",en.compr(JSON.stringify(p.value.features)));else{let w=en.decompr(localStorage.getItem("feature_flags"));w=Object.assign(p.value.features,JSON.parse(w));for(let N in w)typeof p.value?.env_override[t][N]<"u"&&(w[N]=p.value.env_override[t][N]);localStorage.setItem("feature_flags",en.compr(JSON.stringify(p.value.features=w)))}},h=()=>{const w=document.querySelector(a);if(w){const N=w.dataset;for(let $ in N){const P=$.replace(/^sync/,""),K=Object.keys(p.value.features).find(Q=>Q.toLowerCase()===P.toLowerCase());if(K){const Q=p.value.features[K]?.state;Q&&(N[$]=Q)}}}},m=(w="Theme",N={state:"dark"})=>{const $=document.querySelector(a);$&&($.dataset["sync"+w]=N.state)},d=(w="Theme",N={state:"dark"})=>{if(localStorage.getItem("feature_flags")&&N){let P=JSON.parse(en.decompr(localStorage.getItem("feature_flags")));P[w]={state:N.state},localStorage.setItem("feature_flags",en.compr(JSON.stringify(p.value.features=P))),m(w,N),z.publish("APP.ROUTE_SYNC",`{ "${w}": ${JSON.stringify(N)}}`)}},g=w=>{const N=p.value?.features?.Lang?.state;let $=T.value.microcopy.language.filter(P=>P.code==N)[0]?.copy;if($=$.filter(P=>P[0]==w)[0],$)return $[1]},b=(w=":version")=>{let[N,$,P]=w.split(" ");switch(N=N.toLocaleLowerCase(),P=="true"&&(P=!0),P=="false"&&(P=!1),N){case":version":neodigmToast.q(`Version Q ${c.value.session_app.version}`,"brand");break;case":feature":d($,{state:P});break;case":route":neodigmToast.q(`route ${$}`,"brand"),e.push({name:$});break}};f(),h();const y=St({designer:"guided_tour",notifications:{unread:0}}),T=ze({sports:$t,microcopy:xu.getMeta()}),E=je(()=>c.value.session_user.fname+" "+c.value.session_user.lname),O=()=>{console.log("[appState] Saving session_user to localStorage:",c.value.session_user),localStorage.setItem("session_user",JSON.stringify(c.value.session_user))},C=()=>{localStorage.removeItem("session_user")};function I(w){return c.value.session_user.authenticated=!0,c.value.session_user.token=w,O(),c.value.session_app.route="chat"}function B(){return c.value.session_user.authenticated=!1,c.value.session_user.token="",c.value.session_user.guid="",C(),API_ORCH.setTJO(null),c.value.session_app.route="auth"}return{appCLIFeatures:p,appDesigner:y,appMeta:T,appSession:c,clearSessionUser:C,concatFirstLast:E,coreBetSlip:r,coreTourn:o,doCLI:b,doLogin:I,doLogout:B,hierTopics:s,i18n:g,pushCoreTourn:i,pushcoreBetSlip:l,saveSessionUser:O,setFeaturePersistPub:d}}),Je=class Je{static RETIREgetTJO(){if(this.jsTJO)return this.jsTJO;let t=localStorage.getItem("tjo");return t&&(this.jsTJO=JSON.parse(t)),this.jsTJO}static RETIREsetTJO(t){return t?localStorage.setItem("tjo",JSON.stringify(t)):localStorage.clear("tjo"),this.jsTJO=t}static setStateSignout(){typeof neodigmWired4Sound<"u"&&neodigmWired4Sound.sound(11),Je.setTJO(null),location.reload()}static async doSignin(t,n=null){const a={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}},o=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity/signin",a)).json();o.ok?(typeof mvvLegit<"u"&&mvvLegit&&o?.accessToken&&mvvLegit.doSignin(o?.accessToken),n&&n(o)):typeof neodigmToast<"u"&&neodigmToast.q("Invalid User ID|Password")}static async doSignup(t,n=null){const a={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}},o=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity",a)).json();if(o.ok)typeof neodigmToast<"u"&&neodigmToast.q("Account created successfully!|Please sign in","success"),n&&n(o);else{const r=o?.error||o?.message||"Signup failed. Please try again.";typeof neodigmToast<"u"&&neodigmToast.q(r,"danger"),n&&n(o)}}static async checkUserName(t,n=null){const a={method:"POST",body:JSON.stringify({userName:t}),headers:{"Content-Type":"application/json"}},o=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity/checkUserName",a)).json();return n&&n(o),o}static async resetHash(t,n,a=null){typeof neodigmAgent<"u"?neodigmAgent.genChronSync():Date.now();const s=typeof neodigmUtils<"u"?neodigmUtils.genHash(n):n,o={method:"POST",body:JSON.stringify({guid:t,hash:s}),headers:Je.genHeaders()},i=await(await fetch(this.API_baseURI+this.API_ver+"/acct/resetHash",o)).json();a&&a(i)}static genHeaders(t={}){let n={};return n.protomolecule=typeof neodigmAgent<"u"?neodigmAgent.genChronSync():Date.now(),n.Authorization="Bearer expired",n["Content-Type"]="application/json",typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.class&&(n.role=SessionAcctEntity.oEntities.data.entity.class),typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.guid&&(n.guid=SessionAcctEntity.oEntities.data.entity.guid),typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.company&&(n.company=SessionAcctEntity.oEntities.data.entity.company),n}static async fetchTournaments(t=null){const n={method:"GET",headers:Je.genHeaders()},s=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/coreTournaments",n)).json();return t&&t(s),s}static async fetchBetSlips(t,n="",a="",s=null){let o=`/m5t/${this.API_ver}/coreBetSlip/filter/${t}`;n&&(o+=`/${n}`),n&&a&&(o+=`/${a}`);const r={method:"GET",headers:Je.genHeaders()},l=await(await fetch(this.API_baseURI+o,r)).json();return s&&s(l),l}static async fetchLeaderboard(t,n="",a=null){let s=`/m5t/${this.API_ver}/coreLeaderboard?tourney=${t}`;n&&(s+=`&user=${n}`);const o={method:"GET",headers:Je.genHeaders()},i=await(await fetch(this.API_baseURI+s,o)).json();return a&&a(i),i}static async postBetSlips(t,n=null){const a=t.map(o=>{const r={method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json"}};return fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/coreBetSlip/",r).then(i=>i.json())}),s=await Promise.all(a);return n&&n(s),s}};Je.API_baseURI="https://machfive-bmacdev-rest.onrender.com",Je.API_ver="v5",Je.jsState={},Je.jsMeta={},Je.jsTJO=null;let ve=Je;const Kn={shootConfetti(){if(typeof confetti=="function"){let a=function(s,o){confetti({...t,...o,particleCount:Math.floor(e*s)})};var n=a,e=200,t={origin:{y:.7}};a(.25,{zIndex:304,spread:26,startVelocity:55}),a(.2,{zIndex:304,spread:60}),a(.35,{zIndex:304,spread:100,decay:.91,scalar:.8}),a(.1,{zIndex:304,spread:120,startVelocity:25,decay:.92,scalar:1.2}),a(.1,{zIndex:304,spread:120,startVelocity:45})}},hardReload(){const e=new URLSearchParams(window.location.search);e.set("reload",new Date().getTime());const t=e.toString();window.location.search=t},isJSON(e){let t=!1;try{t=typeof JSON.parse(e)}catch{}return t=="object"},isTouch:function(){return typeof document.body.ontouchstart<"u"},prettyTimeExt(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"})},formatDateLocal(e,t={}){if(!e)return"TBD";let n=new Date(e);!e.includes("Z")&&!e.match(/[+-]\d{2}:\d{2}$/)&&(n=new Date(e+"Z"));const a={month:"short",day:"numeric",hour:"numeric",minute:"2-digit"};return n.toLocaleString(void 0,{...a,...t})},shallowDelta(e,t){if(Object.keys(t).length==0&&Object.keys(e).length>0)return e;let n={};for(const a in t)e[a]&&t[a]!=e[a]&&(n[a]=e[a]);return Object.keys(n).length>0?n:t},genLorumIpsum(e=1){}},Wt=(e,t)=>{const n=e.__vccOpts||e;for(const[a,s]of t)n[a]=s;return n},np={class:"auth-page"},ap={__name:"splash_route",setup(e){const t=gt(),n=ki();return _e(),setTimeout(()=>{n&&n.name=="splash_route"&&(mvvLegit&&mvvLegit.isRouteAllowed("home_route")?t.push({name:"home_route"}):t.push({name:"signin_route"}))},3e3),(a,s)=>(Xe(),ht("div",np,[...s[0]||(s[0]=[qt('<div class="auth-page-left" data-v-910ecc85><div class="auth-bg" data-v-910ecc85><div class="auth-bg-image" data-v-910ecc85></div><div class="auth-bg-image" data-v-910ecc85></div><div class="auth-bg-image" data-v-910ecc85></div></div><div class="auth-overlay" data-v-910ecc85></div><div class="auth-branding-content" data-v-910ecc85><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-910ecc85><p class="auth-branding-tagline" data-v-910ecc85>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-910ecc85>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-910ecc85> © 2026 Bet Max Action. All rights reserved. </div></div>',1),k("div",{class:"auth-page-right"},[k("div",{class:"auth-card splash-content"},[k("p",{class:"splash-message"},"Loading Tournaments..."),k("br"),k("br"),k("neodigm-juicebar",{role:"progressbar","data-n55-theme":"brand","data-n55-size":"medium",style:{"background-color":"#242424"}},[k("div")])])],-1)])]))}},Jo=Wt(ap,[["__scopeId","data-v-910ecc85"]]);class sp extends HTMLElement{connectedCallback(){this.attachShadow({mode:"open"}),this.render()}static get observedAttributes(){return["sport","data-sync-theme"]}attributeChangedCallback(){this.shadowRoot&&this.render()}render(){this.getAttribute("sport");const n=document.getElementById("app")?.getAttribute("data-sync-theme").toLowerCase()||"dark",a=n==="dark";let s=this.getAttribute("data-sport-group")||"Soccer",o,r;s==="Multi"?(o="Multi",r=`var( --sport-icon__Multi--${n} )`):(o=s.replaceAll(" ","_"),r=`var( --sport-icon__${o}--${n} )`),this.shadowRoot.innerHTML=`
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
          border-radius: 0;
          color: ${n?"#fff":"#000"};
          cursor: pointer;
          height: 100%;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          user-select: none;
          transition: transform 0.3s ease;
        }

        .card:hover {
          transform: scale(1.02);
        }

        /* Status-based card accents */
        .card[data-bma-tourn-status="COMPLETED"] {
          opacity: 0.9;
        }

        .card[data-bma-tourn-status="COMPLETED"]:hover {
          opacity: 1;
        }

        .card-header {
          display: flex;
          flex-direction: column;
          height: 30%;
          padding: 16px;
          background:  ${n?"var( --app-core-color--gray-3__dark--brand )":"var( --app-core-color--gray-4__light--brand )"};
          border-radius: 0;
          clip-path: polygon(
            0 0,
            100% 0,
            100% calc(100% - 12px),
            50% 100%,
            50% 100%,
            0 calc(100% - 12px)
          );
        }

        .header-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 12px;
        }

        .header-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-width: 0;
        }

        .txt-caption {
          font-size: 16px; font-weight: 600;
          color: #FFFFFF;
          margin: 0 0 4px 0;
          line-height: 1.3;
          overflow: hidden;
          text-overflow: ellipsis;
          text-align: left;
          white-space: nowrap;
        }

        .tagline {
          font-size: 13px;
          color: ${n?"var( --app-core-color--gray-6__light--brand )":"var( --app-core-color--white-5__dark--brand )"};
          margin: 0;
          line-height: 1.4;
          overflow: hidden;
          text-overflow: ellipsis;
          text-align: left;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          font-style: italic;
          word-wrap: break-word;
          min-height: 19px;
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
          border-radius: 0;
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
          grid-template-rows: auto 1fr auto;
          flex: 1;
          margin-top: 24px;
        }

        .info-item {
          display: grid;
          grid-template-columns: 32% 32% 32%;
          gap: 2%;
          text-align: center;
          margin: 0 8px;
          min-width: 0;
          width: calc(100% - 16px);
          padding-bottom: 12px;
        }

        .info-item .info-cell {
          border-radius: 0;
          padding: 8px 4px;
          position: relative;
        }

        .info-item .info-cell > P {
          margin: 4px 0;
        }

        .info-cell .info-label {
          font-size: 0.65rem;
          color: rgba(255, 255, 255, 0.5);
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 1.5px;
          margin-bottom: 8px;
        }

        .card-bottom-section .info-cell .info-label {
          color: rgba(255, 255, 255, 0.6);
        }

        .info-cell .info-value {
          font-size: 1.25rem;
          font-weight: 700;
          color: ${n?"var(--app-core-color--yellow-3__dark--brand, #F7C60D)":"#FFB700"};
          font-family: 'Monaco', 'Courier New', monospace;
          text-shadow: ${n?"0 1px 2px rgba(0, 0, 0, 0.5)":"none"};
        }

        .card-bottom-section .info-cell .info-value {
          color: #FFD700;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
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
          border-radius: 0;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* Default INFO button - green for UPCOMING */
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

        /* Yellow INFO button for LOCKED status */
        :host([data-bma-tourn-status="LOCKED"]) .btn-info {
          background: rgba(247, 198, 13, 0.15);
          color: ${n?"#F7C60D":"#B28F09"};
          border: 1px solid rgba(247, 198, 13, 0.3);
        }

        :host([data-bma-tourn-status="LOCKED"]) .btn-info:hover {
          background: rgba(247, 198, 13, 0.25);
          border-color: rgba(247, 198, 13, 0.4);
          box-shadow: 0 0 12px rgba(247, 198, 13, 0.3);
          color: ${n?"#FFD700":"#F7C60D"};
        }

        /* Gray INFO button for COMPLETED status */
        :host([data-bma-tourn-status="COMPLETED"]) .btn-info {
          background: rgba(150, 150, 150, 0.15);
          color: ${n?"#969696":"#484848"};
          border: 1px solid rgba(150, 150, 150, 0.3);
        }

        :host([data-bma-tourn-status="COMPLETED"]) .btn-info:hover {
          background: rgba(150, 150, 150, 0.25);
          border-color: rgba(150, 150, 150, 0.4);
          box-shadow: 0 0 12px rgba(150, 150, 150, 0.3);
          color: ${n?"#B0B0B0":"#323232"};
        }

        .btn-join {
          background: linear-gradient(135deg, #00E676 0%, #FFD700 100%);
          color: #000000;
          display: none;
          position: relative;
          border: none;
          box-shadow: 0 4px 15px rgba(0, 230, 118, 0.4);
          text-shadow: 0 1px 2px rgba(255, 255, 255, 0.3);
          font-weight: 600;
          font-size: 0.875rem;
          letter-spacing: 0.5px;
          animation: subtle-pulse 2s ease-in-out infinite;
        }

        @keyframes subtle-pulse {
          0%, 100% { transform: scale(1); box-shadow: 0 4px 15px rgba(0, 230, 118, 0.4); }
          50% { transform: scale(1.02); box-shadow: 0 6px 20px rgba(0, 230, 118, 0.5); }
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
          background: linear-gradient(135deg, #00FF88 0%, #FFE033 100%);
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 8px 25px rgba(0, 230, 118, 0.6);
          animation: none;
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

        /* Progress Bar - now in bottom section */
        .card-entrants__dataviz {
          padding: 0 16px 12px;
        }

        /* Bottom Section with solid background matching header */
        .card-bottom-section {
          background: var( --app-core-color--gray-3__dark--brand );
          padding: 16px 0 12px;
          margin-top: auto;
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
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
          color: rgba(255, 255, 255, 0.6);
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 600;
        }

        .progress-bar {
          width: 100%;
          height: 6px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 0;
          overflow: hidden;
          position: relative;
        }

        .progress-fill {
          height: 100%;
          border-radius: 0;
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
          <div class="header-top">
            <span class="sport-tag">${this.sportsDisplay}</span>
            <span class="status ${this.status.toUpperCase()}">${this.status}</span>
          </div>
          <section class="header-content">
            <h3 class="txt-caption">${this.caption}</h3>
            <p class="tagline">${this.tagline}</p>
          </section>
        </div>
        <div class="card-body">
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
        <div class="card-bottom-section">
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
        </div>
      </div>
    `}}customElements.define("bma-tournament-card",op);class rp extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.setupEventListeners(),setTimeout(()=>{const t=this.shadowRoot.querySelector(".content_stake_text input");t&&t.focus()},100)}static get observedAttributes(){return["data-content-team-points","data-content-odds","data-content-stake-text","data-content-type","data-abbreviated-title","data-scheduled-at","data-stake","data-payout"]}attributeChangedCallback(t,n,a){if(n!==a){if(t==="data-stake")return;if(t==="data-payout"){this.updatePayoutDisplay();return}this.render()}}get teamPoints(){return this.getAttribute("data-content-team-points")||""}get odds(){return this.getAttribute("data-content-odds")||"0"}get stake(){return this.getAttribute("data-content-stake-text")||"0"}get type(){return this.getAttribute("data-content-type")||""}get abbreviatedTitle(){return this.getAttribute("data-abbreviated-title")||""}get scheduledAt(){const t=this.getAttribute("data-scheduled-at")||"";return t?Kn.formatDateLocal(t):""}get payout(){const t=this.getAttribute("data-payout")||"0",n=parseFloat(t);return isNaN(n)?"0.00":n.toFixed(2)}updatePayoutDisplay(){const t=this.shadowRoot?.querySelector(".payout-value");t&&(t.textContent=this.payout)}setupEventListeners(){const t=this.shadowRoot.querySelector(".grid_close button");t&&t.addEventListener("click",()=>{z.publish("COREBETSLIP.CLOSE",JSON.stringify({teamPoints:this.teamPoints,odds:this.odds,stake:this.stake,type:this.type,abbreviatedTitle:this.abbreviatedTitle,scheduledAt:this.getAttribute("data-scheduled-at"),timestamp:Date.now()})),this.dispatchEvent(new CustomEvent("bma-bet-entry-remove",{bubbles:!0,composed:!0,detail:{teamPoints:this.teamPoints,odds:this.odds,stake:this.stake,type:this.type,abbreviatedTitle:this.abbreviatedTitle,scheduledAt:this.getAttribute("data-scheduled-at")}}))});const n=this.shadowRoot.querySelector(".content_stake_text input");n&&n.addEventListener("input",a=>{const s=a.target.value;this.setAttribute("data-stake",s)})}render(){this.shadowRoot.innerHTML=`
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
                    padding: 1.5rem;
                    margin-bottom: 12px;
                    border: none;
                    border-radius: 0;
                    transition: all 0.3s ease;
                    background: ${t?"linear-gradient(135deg, rgba(46, 139, 87, 0.1), rgba(46, 139, 87, 0.05))":"#ffffff"};
                    position: relative;
                    cursor: default;
                }

                /* Hover state removed - no interactive hover for bet match cards */

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

                .card--live .date-status {
                    position: relative;
                    overflow: hidden;
                }

                .card--live .date-status::after {
                    content: '';
                    position: absolute;
                    bottom: -2px;
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
                    animation: slideGradient 2s linear infinite;
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
                    border-bottom: 1px solid ${t?"rgba(46, 139, 87, 0.2)":"#d0d0d0"};
                }

                .date-status {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    justify-content: flex-start;
                    flex-wrap: wrap;
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
                    border-radius: 0;
                    font-size: 0.7rem;
                    font-weight: 600;
                    display: inline-flex;
                    align-items: center;
                    gap: 4px;
                    white-space: nowrap;
                    flex-shrink: 0;
                }

                /* Mobile responsive adjustments */
                @media (max-width: 480px) {
                    .date-status {
                        gap: 6px;
                    }

                    .date {
                        font-size: 0.75rem;
                    }

                    .status-badge {
                        font-size: 0.65rem;
                        padding: 2px 6px;
                    }
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
                    border-radius: 0;
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

                .rows-container {
                    display: grid;
                    grid-template-rows: auto auto;
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

                /* Default order: away first, home second (for most sports) */
                .row--home {
                    grid-row: 2;
                }

                .row--away {
                    grid-row: 1;
                }

                /* Soccer leagues: home first, away second */
                :host([data-sport-key^="soccer_"]) .row--home {
                    grid-row: 1;
                }

                :host([data-sport-key^="soccer_"]) .row--away {
                    grid-row: 2;
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
                    border-radius: 0;
                    min-width: 28px;
                    text-align: center;
                }

                .team--home .team-name {
                    color: ${t?"#FFFFFF":"#000000"};
                }

                .team--away .team-name {
                    color: ${t?"#FFFFFF":"#000000"};
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
                    border-radius: 0;
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

                <div class="rows-container">
                    <div class="row row--home">
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

                    <div class="row row--away">
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
            </div>
        `,s&&this.shadowRoot.querySelectorAll(".btn:not(.btn--empty)").forEach(g=>{const b=g.dataset.betType,y=g.dataset.team,T=g.dataset.price,E=g.dataset.point||null;g.addEventListener("click",O=>this.handleButtonClick(O,b,y,T,E))})}}customElements.define("bma-bet-match-card",ip);class lp extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}static get observedAttributes(){return["data-match-guid","data-match-title","data-match-scheduled-at","data-match-home-team","data-match-away-team","data-match-home-score","data-match-away-score","data-match-scoreboard","data-match-sport-id","data-sync-theme"]}attributeChangedCallback(t,n,a){n!==a&&this.render()}get matchGuid(){return this.getAttribute("data-match-guid")||""}get matchTitle(){return this.getAttribute("data-match-title")||"Match"}get scheduledAt(){return this.getAttribute("data-match-scheduled-at")||""}get homeTeam(){return this.getAttribute("data-match-home-team")||"Home"}get awayTeam(){return this.getAttribute("data-match-away-team")||"Away"}get homeScore(){const t=this.getAttribute("data-match-home-score");return t!=null&&t!==""?t:null}get awayScore(){const t=this.getAttribute("data-match-away-score");return t!=null&&t!==""?t:null}get scoreboardData(){const t=this.getAttribute("data-match-scoreboard");if(!t)return null;try{return typeof t=="string"?JSON.parse(t):t}catch(n){return console.warn("[bma-match-status] Failed to parse scoreboard data:",n),null}}get sportId(){return this.getAttribute("data-match-sport-id")||""}get theme(){return this.getAttribute("data-sync-theme")||"dark"}getSportAbbr(){return{basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",hockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",cricket:"CRI",rugby:"RUG",tennis:"TEN",golf:"GOLF"}[this.sportId]||"SPORT"}getMatchStatus(){const t=this.scoreboardData,n=this.homeScore!==null&&this.awayScore!==null;let a=!1;if(this.scheduledAt){let r=this.scheduledAt;!r.includes("Z")&&!r.match(/[+-]\d{2}:\d{2}$/)&&(r=r+"Z");const i=new Date(r),l=new Date(Date.now()-300*1e3);a=i<l}let s="UPCOMING",o=null;if(t?.time_remaining){const r=t.time_remaining;r==="Final"?(s="FINAL",o="Final"):r==="In Progress"?a?(s="IN_PROGRESS",o="In Progress"):(s="UPCOMING",o="Upcoming"):(s="IN_PROGRESS",o=r)}else n?(s="FINAL",o="Final"):(s="UPCOMING",o="Upcoming");return{status:s,timeRemaining:o}}render(){const{status:t,timeRemaining:n}=this.getMatchStatus(),a=this.homeScore!==null&&this.awayScore!==null,s=this.scheduledAt?Kn.formatDateLocal(this.scheduledAt,{timeZoneName:"short"}):"",o=parseInt(this.homeScore),r=parseInt(this.awayScore),i=a&&t==="FINAL"&&o>r,l=a&&t==="FINAL"&&r>o;this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: block;
          width: 100%;
        }

        :host(:nth-child(even)) .match-row {
          background: rgba(255, 255, 255, 0.02);
        }

        .match-row {
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: 'Monaco', 'Courier New', monospace;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.9);
          transition: all 0.2s ease;
          cursor: pointer;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .match-row:hover {
          background: rgba(255, 255, 255, 0.05);
          padding-left: 20px;
        }

        .match-row--final {
          opacity: 0.6;
        }

        .match-row--live {
          color: #FFFFFF;
        }

        /* Sport indicator */
        .sport-indicator {
          color: rgba(255, 255, 255, 0.5);
          font-weight: 600;
          text-transform: uppercase;
          font-size: 0.75rem;
          min-width: 40px;
        }

        /* Bullet separator */
        .bullet {
          color: rgba(255, 255, 255, 0.3);
        }

        /* Teams and scores */
        .match-content {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .team-name {
          color: inherit;
        }

        .score {
          font-weight: 700;
          color: #FFFFFF;
        }

        .winner {
          color: #00E676;
        }

        .loser {
          opacity: 0.6;
        }

        /* Status */
        .status {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.85rem;
          text-transform: uppercase;
        }

        .status--live {
          color: #00E676;
          font-weight: 600;
        }

        .status--upcoming {
          color: #F7C60D;
        }

        /* Expanded details (hidden by default) */
        .match-details {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
          padding: 0 16px;
        }

        .match-row:hover + .match-details,
        .match-details:hover {
          max-height: 100px;
          padding: 12px 16px;
          background: rgba(255, 255, 255, 0.02);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .detail-row {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 4px;
        }

        /* Light theme overrides */
        :host([data-sync-theme='light']) .match-row {
          color: rgba(0, 0, 0, 0.9);
          border-bottom-color: rgba(0, 0, 0, 0.1);
        }

        :host([data-sync-theme='light']) .sport-indicator {
          color: rgba(0, 0, 0, 0.5);
        }

        :host([data-sync-theme='light']) .bullet {
          color: rgba(0, 0, 0, 0.3);
        }

        :host([data-sync-theme='light']) .score {
          color: #000000;
        }

        :host([data-sync-theme='light']) .status {
          color: rgba(0, 0, 0, 0.5);
        }

        :host([data-sync-theme='light']) .status--live {
          color: #00A352;
        }

        :host([data-sync-theme='light']) .status--upcoming {
          color: #B28F09;
        }

        :host([data-sync-theme='light']) .detail-row {
          color: rgba(0, 0, 0, 0.6);
        }

        /* Mobile responsive - fluid scaling */
        .match-row {
          padding: clamp(10px, 3vw, 12px) clamp(12px, 4vw, 16px);
          font-size: clamp(0.8rem, 2.5vw, 0.9rem);
        }

        .sport-indicator {
          font-size: clamp(0.65rem, 2vw, 0.75rem);
          min-width: clamp(32px, 10vw, 40px);
        }

        .detail-row {
          font-size: clamp(0.7rem, 2vw, 0.8rem);
        }
      </style>

      <div class="match-row ${t==="FINAL"?"match-row--final":""} ${t==="IN_PROGRESS"?"match-row--live":""}" data-sync-theme="${this.theme}">
        <span class="sport-indicator">${this.getSportAbbr()}</span>
        <span class="bullet">•</span>
        <div class="match-content">
          ${a?`
            <span class="team-name ${i?"winner":l?"loser":""}">${this.homeTeam}</span>
            <span class="score ${i?"winner":l?"loser":""}">${this.homeScore}</span>
            <span class="bullet">-</span>
            <span class="team-name ${l?"winner":i?"loser":""}">${this.awayTeam}</span>
            <span class="score ${l?"winner":i?"loser":""}">${this.awayScore}</span>
          `:`
            <span class="team-name">${this.homeTeam}</span>
            <span>vs</span>
            <span class="team-name">${this.awayTeam}</span>
          `}
        </div>
        <span class="bullet">•</span>
        <span class="status ${t==="IN_PROGRESS"?"status--live":""} ${t==="UPCOMING"?"status--upcoming":""}">
          ${n||t}
        </span>
      </div>
      <div class="match-details">
        <div class="detail-row">Scheduled: ${s}</div>
        ${this.matchTitle?`<div class="detail-row">Match: ${this.matchTitle}</div>`:""}
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
            `,l.bets.forEach(p=>{const f=p.bet||[];if(f.length===0)return;const h=f[0],m=Object.keys(h).filter(b=>b!=="short_title")[0],d=h[m],g=parseFloat(d.payout||0)>0;r+=`
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
                    border-radius: 0;
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
                    border-radius: 0;
                    box-shadow: 0 0 12px rgba(255, 215, 0, 0.6);
                }

                .badge-trophy--silver {
                    background: radial-gradient(circle, #C0C0C0, #A8A8A8);
                    border-radius: 0;
                    box-shadow: 0 0 12px rgba(192, 192, 192, 0.6);
                }

                .badge-trophy--bronze {
                    background: radial-gradient(circle, #CD7F32, #B8732D);
                    border-radius: 0;
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
                    border-radius: 0;
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
                    border-radius: 0;
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
                    border-radius: 0;
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
                    width: 180px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
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

                    .bet-selection {
                        width: 120px;
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
        `}}customElements.define("bma-leaderboard-card",Dt);class Ni{static isPayout(t){if(!t?.Bet||!t?.Match)return console.error("[CoreBetSlip.isPayout] Invalid bet object - missing Bet or Match data"),!1;const{type:n,scope:a}=t.Bet,{home_team_id:s,home_team_score:o,away_team_id:r,away_team_score:i}=t.Match,l=n?.toUpperCase()||"",u=parseFloat(o)||0,c=parseFloat(i)||0;if(u===0&&c===0)return console.warn("[CoreBetSlip.isPayout] Invalid scores - both teams have 0 points"),!1;switch(console.log(`[CoreBetSlip.isPayout] Evaluating ${l} bet:`,{home:`${s} (${u})`,away:`${r} (${c})`,scope:a}),l){case"MONEY":return this._evaluateMoneyline(a.team_id,s,r,u,c);case"SPREAD":return this._evaluateSpread(a.team_id,a.point,s,r,u,c);case"TOTAL":return this._evaluateTotal(a.over,a.under,u,c);case"PROP":return console.warn("[CoreBetSlip.isPayout] PROP bet evaluation not implemented"),!1;case"PARLAY":return console.warn("[CoreBetSlip.isPayout] PARLAY bet evaluation not implemented"),!1;default:return console.warn("[CoreBetSlip.isPayout] Unknown bet type:",l),!1}}static _evaluateMoneyline(t,n,a,s,o){const r=t===n,i=t===a;if(!r&&!i)return console.warn("[CoreBetSlip.isPayout] Betted team does not match home or away team"),!1;const l=s>o,u=o>s;if(s===o)return console.log("[CoreBetSlip.isPayout] MONEY - PUSH (tie game)"),!1;const p=r&&l||i&&u;return console.log(`[CoreBetSlip.isPayout] MONEY - ${p?"WON":"LOST"}`),p}static _evaluateSpread(t,n,a,s,o,r){const i=t===a,l=t===s;if(!i&&!l)return console.warn("[CoreBetSlip.isPayout] Betted team does not match home or away team"),!1;const u=parseFloat(n)||0;let c=o,p=r;i?c=o+u:p=r+u;const f=c>p,h=p>c;if(c===p)return console.log("[CoreBetSlip.isPayout] SPREAD - PUSH (exact spread)"),!1;const d=i&&f||l&&h;return console.log(`[CoreBetSlip.isPayout] SPREAD (${u>0?"+":""}${u}) - ${d?"WON":"LOST"}`),d}static _evaluateTotal(t,n,a,s){const o=a+s,r=t&&t!=="";if(!r&&!(n&&n!==""))return console.warn("[CoreBetSlip.isPayout] No over/under value specified"),!1;const l=parseFloat(r?t:n);if(o===l)return console.log("[CoreBetSlip.isPayout] TOTAL - PUSH (exact line)"),!1;let u=!1;return r?(u=o>l,console.log(`[CoreBetSlip.isPayout] TOTAL OVER ${l} (actual: ${o}) - ${u?"WON":"LOST"}`)):(u=o<l,console.log(`[CoreBetSlip.isPayout] TOTAL UNDER ${l} (actual: ${o}) - ${u?"WON":"LOST"}`)),u}static calcPayout(t){if(!t?.Bet)return console.error("[CoreBetSlip] Invalid bet object - missing Bet data"),0;const{type:n,odds:a,stake:s}=t.Bet,o=n?.toUpperCase()||"",r=parseFloat(a)||0,i=parseFloat(s)||0;if(i<=0)return console.warn("[CoreBetSlip] Invalid stake amount:",i),0;if(r===0)return console.warn("[CoreBetSlip] Invalid odds value:",r),0;let l=0;switch(o){case"SPREAD":l=this.calcAmericanOddsPayout(r,i),console.log("[CoreBetSlip] SPREAD payout calculated:",{odds:r,stake:i,payout:l});break;case"MONEY":l=this.calcAmericanOddsPayout(r,i),console.log("[CoreBetSlip] MONEY payout calculated:",{odds:r,stake:i,payout:l});break;case"TOTAL":l=this.calcAmericanOddsPayout(r,i),console.log("[CoreBetSlip] TOTAL payout calculated:",{odds:r,stake:i,payout:l});break;case"PROP":l=this.calcAmericanOddsPayout(r,i),console.log("[CoreBetSlip] PROP payout calculated:",{odds:r,stake:i,payout:l});break;case"PARLAY":l=this.calcAmericanOddsPayout(r,i),console.log("[CoreBetSlip] PARLAY payout calculated (single odds):",{odds:r,stake:i,payout:l});break;default:console.warn("[CoreBetSlip] Unknown bet type:",o),l=0;break}return parseFloat(l.toFixed(2))}static calcAmericanOddsPayout(t,n){let a=0;return t>0?a=n*(t/100):t<0?a=n/(Math.abs(t)/100):a=0,n+a}static americanToDecimal(t){return t>0?t/100+1:t<0?100/Math.abs(t)+1:1}static calcImpliedProbability(t){return t>0?100/(t+100)*100:t<0?Math.abs(t)/(Math.abs(t)+100)*100:0}}const cp={class:"home-layout"},dp=["data-user-name"],up={__name:"home_route",setup(e){const t=gt(),n=_e();window.CoreBetSlip=Ni,document.addEventListener("click",i=>{const l=i.target;l&&l.dataset?.publishRouteHome&&(l.dataset.publishRouteHome.startsWith("ROUTE.HOME.SODAPOP_PLAY.")&&document.querySelectorAll("#sodapop_play .btn-info-sm").forEach(c=>{c===l?(c.style.background="var(--app-core-color--yellow-1__dark--brand, #ffcc33)",c.style.color="var(--app-core-color--green-1__dark--brand, #27794d)"):(c.style.background="#27794d1A",c.style.color="#fff")}),z.publish(l.dataset.publishRouteHome,`{"ts": ${Date.now()} }`)),l&&l.dataset?.sodapopClose&&neodigmSodaPop&&neodigmSodaPop.close()});const a=(i,l=!1)=>{const u=document.querySelector(".tournaments-grid");if(!u)return;u.innerHTML="";const c=document.getElementById("app"),p=c?.getAttribute("data-sync-theme")||"dark",f=c?.getAttribute("data-sync-lang")||"en",h=c?.getAttribute("data-sync-motif")||"brand",m=d=>{const g=document.createElement("article"),b=d.status||"DRAFT";g.className=`tournament-item tournament-status-${b.toLowerCase()}`;const y=document.createElement("bma-tournament-card");return y.setAttribute("data-bma-tourn-id",d.id||""),y.setAttribute("data-bma-tourn-guid",d.guid||""),y.setAttribute("data-bma-tourn-caption",d.caption||""),y.setAttribute("data-bma-tourn-tagline",d.tagline||""),y.setAttribute("data-bma-tourn-window_start_time",d.window_start_time||""),y.setAttribute("data-bma-tourn-window_end_time",d.window_end_time||""),y.setAttribute("data-bma-tourn-sports_allowed",Array.isArray(d.sports_allowed)?JSON.stringify(d.sports_allowed):d.sports_allowed||""),y.setAttribute("data-bma-tourn-entities",d.entities?JSON.stringify(d.entities):""),y.setAttribute("data-bma-tourn-tournament_dollars",d.tournament_dollars||""),y.setAttribute("data-bma-tourn-prize_distro",Array.isArray(d.prize_distro)?JSON.stringify(d.prize_distro):d.prize_distro||""),y.setAttribute("data-bma-tourn-matches",Array.isArray(d.matches_guids)?JSON.stringify(d.matches_guids):d.matches_guids||""),y.setAttribute("data-bma-tourn-matches_expanded",Array.isArray(d.matches_expanded)?JSON.stringify(d.matches_expanded):d.matches_expanded||""),y.setAttribute("data-bma-tourn-entry_fee",d.entry_fee||""),y.setAttribute("data-bma-tourn-rake",d.rake||""),y.setAttribute("data-bma-tourn-tags",Array.isArray(d.tags)?JSON.stringify(d.tags):d.tags||""),y.setAttribute("data-bma-tourn-comments",d.comments||""),y.setAttribute("data-bma-tourn-class",d.status||""),y.setAttribute("data-bma-tourn-status",d.status||""),y.setAttribute("data-sync-theme",p),y.setAttribute("data-sync-lang",f),y.setAttribute("data-sync-motif",h),y.setAttribute("data-n55-size","medium"),y.setAttribute("data-n55-enchanted-cta-ambient","none"),y.setAttribute("data-tourn-custom-css",""),y.setAttribute("data-tourn-trophy","0"),y.setAttribute("data-bma-tourn-focus",""),y.setAttribute("data-bma-tourn-wait","false"),g.appendChild(y),g};l?i.forEach(d=>{const g=document.createElement("div");g.className="tournament-category";const b=document.createElement("header");b.className="tournament-category-header";const y=document.createElement("h2");if(y.className="category-title",y.textContent=d.title,b.appendChild(y),d.subtext){const T=document.createElement("p");T.className="category-subtext",T.textContent=d.subtext,b.appendChild(T)}g.appendChild(b),u.appendChild(g),d.tournaments.forEach(T=>{const E=m(T);u.appendChild(E)})}):i.forEach(d=>{const g=m(d);u.appendChild(g)})},s=i=>{document.querySelectorAll("bma-tournament-card").forEach(u=>{u.setAttribute("data-sync-theme",i)})},o=i=>{const l=document.querySelectorAll("bma-tournament-card"),u=Date.now().toString();l.forEach(c=>{if(c===i){if(c.setAttribute("data-bma-tourn-focus",u),c.shadowRoot){const p=c.shadowRoot.querySelector(".card-focus__feedback");p&&(p.style.visibility="visible")}typeof neodigmMarquee<"u"&&neodigmMarquee.init()}else if(c.setAttribute("data-bma-tourn-focus",""),c.shadowRoot){const p=c.shadowRoot.querySelector(".card-focus__feedback");p&&(p.style.visibility="hidden")}})},r=i=>{const{action:l,tournamentId:u,tournamentGuid:c,tournamentStatus:p,...f}=i.detail;console.log("[home_route] Tournament action:",{action:l,tournamentId:u,tournamentGuid:c,tournamentStatus:p,...f}),o(i.target),z.publish("WC.TOURN_ACTION",JSON.stringify({action:l,tournamentId:u,tournamentGuid:c,tournamentStatus:p,...f,timestamp:Date.now()}))};return Gt(async()=>{if(!n.appSession.session_user.authenticated){console.log("User not authenticated, redirecting to signin"),t.push({name:"signin_route"});return}const i=document.getElementById("app");if(i){const u=n.appCLIFeatures.features.theme?.state,c=n.appCLIFeatures.features.lang?.state,p=n.appCLIFeatures.features.motif?.state,f=n.appSession.session_user.guid;u&&(i.setAttribute("data-sync-theme",u),document.body.setAttribute("data-sync-theme",u)),c&&i.setAttribute("data-sync-lang",c),p&&i.setAttribute("data-sync-motif",p),f&&i.setAttribute("data-user-guid",f)}window._homeRouteRenderCards=a;const l=z.subscribe("APP.ROUTE_SYNC",(u,c)=>{try{const p=JSON.parse(c);p.theme&&s(p.theme.state)}catch(p){console.error("[home_route] Failed to parse APP.ROUTE_SYNC data:",p)}});window._homeRoutePubSubToken=l,console.log("[home_route] Publishing ROUTE.HOME_ONMOUNT"),z.publish("ROUTE.HOME_ONMOUNT",JSON.stringify({timestamp:Date.now()})),document.addEventListener("bma-tournament-action",r)}),Ta(()=>{document.removeEventListener("bma-tournament-action",r),delete window._homeRouteRenderCards,window._homeRoutePubSubToken&&z.unsubscribe(window._homeRoutePubSubToken)}),(i,l)=>(Xe(),ht("main",cp,[k("bma-app-head-top",{"data-user-name":Ft(n).appSession.session_user.name||"Guest"},null,8,dp),l[0]||(l[0]=qt('<bma-app-head-mid data-selected-tab="head_mid_lobby"></bma-app-head-mid><bma-app-head-sports data-selected-chip="all"></bma-app-head-sports><section class="tournaments-section"><div class="tournaments-grid"></div></section><bma-app-foot data-selected-item="foot_all_sports"></bma-app-foot>',4))]))}},pp={};function fp(e,t){return Xe(),ht("main",null,[...t[0]||(t[0]=[k("h1",null,"App FAQ",-1)])])}const Qn=Wt(pp,[["render",fp]]),hp={};function gp(e,t){return Xe(),ht("main",null,[...t[0]||(t[0]=[k("h1",null,"App Help",-1)])])}const mp=Wt(hp,[["render",gp]]),It=class It{static async establishSSE(t,n,a,s=!0){this.strChat=a,this.isDebug=s,console.log(" ~... sse client 'Q' | ","Q"),t=t.replaceAll("##SSEID##",n).replaceAll("##LASTKEY##",localStorage.getItem("sse_lastkey")||-1),this.isDebug&&console.warn(" ~... sse push uri | ",t),this.sseEvent&&(this.sseEvent.close(),this.sseEvent=null),this.sseEvent=new EventSource(t),this.sseEvent.onopen=function(o){It.onSSEOpen(o)},this.sseEvent.onmessage=function(o){It.onSSEMessage(o)},this.sseEvent.onerror=function(o){It.onSSEError(o)}}static async onSSEOpen(t){this.isDebug&&console.warn(" ~... sse push onSSEOpen ev | ",t)}static async onSSEMessage(t){let n=null;if(this.isDebug&&console.warn(" ~... sse push onSSEMessage ev | ",t),t?.data){localStorage.setItem("sse_lastkey",t?.data?.id||-1);try{if(n=JSON.parse(t.data),n?.class!="NO_MESSAGE")if(n?.class&&n?.msg)switch(n.class){case"BANNER_DISMISS":break;case"BANNER_MODAL":break;case"BANNER_MODAL_CLOSE":break;case"BUBBLE_CONFETTI":break;case"BUBBLE_MARQUEE":break;case"BUBBLE":break;case"CLI":break;case"CONSOLE":break;case"FEATURE_FLAG":break;case"MVV_POPUP":break;case"MVV_TOAST":n?.msg&&neodigmWired4Sound&&(neodigmWired4Sound.sound(5).vibrate(),neodigmToast.q(n.msg,"brand",4500),this.isDebug&&console.warn(" ~... sse push pushPackage.id class msg criterion  | ",n.id+" | "+n.class+" | "+n.msg+" | "+n.criterion));break;case"WEBNOTE":break;case"GUIDED_TOUR":break;case"META_MACRO":break;case"META_TEMPLATE":break;case"MVV_CAROUSEL":break;case"MVV_POPOVER":break;case"MVV_WIDGET":break;case"RECONNECT":break;case"TOURNAMENT_SYNC":this.isDebug&&console.warn(" ~... sse TOURNAMENT_SYNC | ",n),z.publish("SSE.CORE.TOURN_SYNC",JSON.stringify(n));break}else this.isDebug&&console.warn(" ~... sse push - invalid package - no class/msg");else this.isDebug&&console.warn(" ~... sse push - no message")}catch{this.isDebug&&console.warn(" ~... sse push - invalid package")}}}static async onSSEError(t){this.isDebug&&console.warn(" ~... sse push onSSEError ev | ",t)}static async disconnectSSE(t){this.isDebug&&console.warn(" ~... sse push disconnectSSE ev | ",t),this.sseEvent.close(),this.sseEvent=null}};It.sseEvent=null,It.strChat=null,It.isDebug=!0;let pa=It;class Ot{static neodigmOpt={neodigmToast:!0,N55_GTM_DL_TOAST:"n55_gtm_dl_toast",neodigmSodaPop:!0,N55_SP_DISABLE_SCROLL:!0,N55_GTM_DL_POP_OPEN:"n55_gtm_dl_pop_open",N55_GTM_DL_POP_CLOSE:"n55_gtm_dl_pop_close",neodigmWired4Sound:!0,W4S_VOLUME:.022,EVENT_SOUNDS:!0,neodigmParallax:!0,PRLX_MOBILE:!1,neodigmMarquee:!0,neodigmEnchantedCTA:!0,N55_CTA_RND_TOUCH:14001,N55_GTM_DL_CTA:"n55_gtm_dl_cta",N55_CTA_LONG_TAP:3400,N55_CTA_FX:["alternate","emit","flash_danger","flash_warning","radius","scroll","shake"],neodigmKPI:!0,N55_GTM_DL_KPI:"n55_gtm_dl_kpi",neodigmPWA:!0,N55_PWA_TEMPLATE_ID:"js-pup-n55-pwa",neodigmCarousel:!0,N55_GTM_DL_CARSL:"n55_gtm_dl_carsl",N55_CARO_BLUR:!0,neodigmTulip:!0,neodigmPopTart:!0,N55_GTM_DL_POPTRT:"n55_gtm_dl_poptrt",neodigmAgent:!0,API_baseURI:"https://a55-wtt-api-v1.onrender.com/",API_ver:"v1",neodigmPicnic:!0,N55_GTM_DL_PICNIC:"n55_gtm_dl_picnic",neodigmWWInterval:!0,neodigmMetronome:{countTo:116,neodigmMarquee:132},N55_ZIND:{PopTart:264},CONSOLE_LOG_VER:!0,N55_DEBUG_lOG:!1,N55_AMPM_THEME:"light",N55_EVENT_HAPTIC:!0,N55_FLASH_TITLE:!0,N55_GENRE_MOTIF:"neodigm",N55_THEME_DEFAULT:"brand",N55_THEME_COLORS:{brand:["EDBA08","915E00","🟧"],primary:["92a8d1","364C75","🟦"],secondary:["EDCED0","978284","🟫"],success:["009473","003817","🟩"],white:["FFFFFF","FDFDFD","⬜"],ghost:["ffffff","000000","⬜"],danger:["DD4124","810000","🟥"],warning:["F5DF4D","988200","🟨"],info:["7BC4C4","1F6868","🟦"],disabled:["868686","767676","⬜"],night:["6a6a6a","242424","⬛"],marcom:["B163A3","5F4B8B","🟪"],party:["FF6F61","C93F60","🟪"]},N55_APP_STATE:{CONTEXT:"body",FIRST_TAP:!1,ONLINE:!0,PWA_READY:!1,PWA_CONTAIN:!1,SHAKE:!1,CONTEXTMNU:!1,FOCUS:!0,AMPM:"light",REDUCE_MOTION:!1},ROOT:document.querySelector(":root"),N55_TYPE:"https://fonts.googleapis.com/css?family=Roboto+Condensed:wght@100;300;400|Roboto+Slab:wght@300|Roboto+Mono:wght@300|Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,300,0,0"};static neodigmUtils=((t=document)=>({ver:"4.0.0",isMobile:function(){return t.body.clientWidth<=768},isTouch:function(){return typeof document.body.ontouchstart<"u"},f1210:function(){return Math.floor(Math.random()*10+1)},f02x:function(n){return Math.floor(Math.random()*n)},fPromiseJS:async function(n,a){return new Promise((s,o)=>{const r=Object.assign(n.createElement(LZString.decompress("㎆ぎॠข")),{type:LZString.decompress("அ〞샴ՠ蘆㠘쁎Ұΰ耀"),src:a});r.onload=s,r.onerror=o,n.getElementsByTagName("head")[0].appendChild(r)})},fAsyncJS:function(n,a,s){const o=Object.assign(n.createElement(LZString.decompress("㎆ぎॠข")),{type:LZString.decompress("அ〞샴ՠ蘆㠘쁎Ұΰ耀"),src:a});s&&(o.onload=function(){s()}),n.getElementsByTagName("head")[0].appendChild(o)},fAsyncCSS:function(n,a){let s=n.createElement("link");s.rel="stylesheet",s.href=a,n.getElementsByTagName("head")[0].appendChild(s)},data2prop:function(n){n=n.replace("data-","").toLowerCase();let a=n.split(""),s=[],o=!1;return a.forEach(r=>{r=="-"?o=!0:(s.push(o?r.toUpperCase():r),o=!1)}),s.join("")},doDataLayer:function(n,a){neodigmOpt.N55_DEBUG_lOG&&console.log("~ga | "+n+" | "+a),window.dataLayer&&window.dataLayer.push({event:n,msg:a})},isJSON:function(n){let a=!1;try{a=typeof JSON.parse(n)}catch{}return a=="object"},appStateListen:function(n){NeodigmKeylime.subscribe("mouseover",s=>{s?.target?.dataset?.n55TypeonHover&&neodigmUtils.typeOn(JSON.parse(s.target.dataset.n55TypeonHover))},!0),NeodigmKeylime.subscribe("click",s=>{neodigmOpt.N55_APP_STATE.FIRST_TAP||(neodigmOpt.N55_APP_STATE.FIRST_TAP=!0),neodigmOpt.neodigmTulip&&neodigmTulip.close();let o=neodigmUtils.walkDOM3(s?.target,"n55TypeonClick");o&&neodigmUtils.typeOn(JSON.parse(o))},!0),NeodigmKeylime.subscribe("touchstart",s=>{neodigmOpt.N55_APP_STATE.FIRST_TAP||(neodigmOpt.N55_APP_STATE.FIRST_TAP=!0),neodigmOpt.neodigmTulip&&neodigmTulip.close()},!0),NeodigmKeylime.subscribe("resize",s=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmCarousel&&neodigmCarousel.init(),neodigmOpt.neodigmTulip&&neodigmTulip.close(),neodigmOpt.neodigmPopTart&&neodigmPopTart.close()})},!0,window),NeodigmKeylime.subscribe("orientationchange",s=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmCarousel&&neodigmCarousel.init(),neodigmOpt.neodigmTulip&&neodigmTulip.close(),neodigmOpt.neodigmPopTart&&neodigmPopTart.close()})},!0,window),NeodigmKeylime.subscribe("scroll",s=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmTulip&&neodigmTulip.close()})},!0,window),neodigmOpt.N55_APP_STATE.REDUCE_MOTION=!window.matchMedia("(prefers-reduced-motion: no-preference)").matches;let a=document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelector("[data-n55-Ampm-theme]")?.dataset.n55AmpmTheme;a&&(neodigmOpt.N55_AMPM_THEME=neodigmOpt.N55_APP_STATE.AMPM=a)},prettyTimeRETIRE:n=>{let a=new Date(n).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"});return n=="Dec 31, 1969"&&(a=""),a},prettyTime:n=>new Date(n).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"}),capFirst:n=>n&&n[0].toUpperCase()+n.slice(1)||"",genHash:n=>(n=String(n),Math.abs(n.split("").reduce((a,s)=>(a<<5)-a+s.charCodeAt(0)|0,0))),flashTitle:(n=neodigmOpt.N55_THEME_DEFAULT,a=4e3)=>{neodigmOpt.N55_FLASH_TITLE&&(document?.n55Title||(document.n55Title=document.title),neodigmOpt?.N55_THEME_COLORS[n]&&(document.title=neodigmOpt.N55_THEME_COLORS[n][2]+document.n55Title),neodigmUtils.doSetT(function(){document.title=document.n55Title},a))},robinTheme:function(n=Object.keys(neodigmOpt.N55_THEME_COLORS)[0]){if(!neodigmMetronome.isPaused()){let a=[...document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelectorAll("[data-n55-theme")];const s=56;a.forEach((r,i)=>{r.dataset.n55Theme!="disabled"&&(r.n55Theme||(r.n55Theme=r.dataset.n55Theme),setTimeout(function(){r.dataset.n55Theme=n},i*s),setTimeout(function(){r.dataset.n55Theme=r.n55Theme},i*(s+s)))}),a=[...document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelectorAll("[data-n55-theme-pulse")];const o=256;a.forEach((r,i)=>{r.n55ThemePulse||(r.n55ThemePulse=r.dataset.n55ThemePulse),setTimeout(function(){r.dataset.n55ThemePulse=n},i*o),setTimeout(function(){r.dataset.n55ThemePulse=r.n55ThemePulse},i*o+3e3)}),neodigmUtils.flashTitle(n,2e3)}},countTo:async function(n,a,s=neodigmOpt.neodigmMetronome.countTo){const o=[16,s];return[...document.querySelectorAll(n)].forEach(function(r,i){let l=Math.abs(Number(r.textContent)-a);neodigmMetronome.unsubscribe(o[1]+i).subscribe(function(u){let c=Number(r.textContent);if(!Number.isNaN(c)&&!isNaN(c)&&a!=c){let p=l/o[0];p=Math.round(p),u!=0?r.textContent=c<a?c+p:c-p:r.textContent=a}},o[1]+i,o[0])}),neodigmUtils},typeOff:async function(n){let a=document.querySelector(n?.q1st);if(a){let s=a.textContent.length,o=window.getComputedStyle(a),r=Number(o.paddingTop.replace("px",""))+Number(o.paddingBottom.replace("px",""));for(a.offsetHeight&&(a.style.height=a.offsetHeight-r+"px");s;)setTimeout(()=>{a.textContent=a.textContent.replace(/.$/,"")},n.uniqueDelay*s--)}},typeOn:async function(n){let a=document.querySelector(n?.q1st);if(a){a.dataset.n55Typeon=0;let s=n.msg.replaceAll("|","   |   ")+"   ",o=s.split("|");if(n?.mode=="OFF")return neodigmUtils.typeOff({q1st:n.q1st,uniqueDelay:n.uniqueDelay}),neodigmUtils;if(n?.mode=="RANDOM"&&o.length){let r=a.dataset.n55Typeon=neodigmUtils.f02x(o.length);s=o[r]}neodigmUtils.typeOff({q1st:n.q1st,uniqueDelay:n.uniqueDelay/a.textContent.length-4}),neodigmMetronome.unsubscribe(n.uniqueDelay).subscribe(r=>{let i=s[s.length-(r+1)];i=="|"&&(i="",neodigmUtils.typeOff({q1st:n.q1st,uniqueDelay:n.uniqueDelay/a.textContent.length-4}),a.dataset.n55Typeon++),a.textContent+=i,n?.mode=="LOOP"&&r==0&&neodigmUtils.typeOn(n)},n.uniqueDelay,s.length)}return neodigmUtils},getValJSON:function(n,a){try{return JSON.parse(n)}catch{return JSON.parse('{ "'+a+'": "'+n+'" }')}},walkDOM3:function(n,a,s=!1){let o=null;if(!o&&n?.dataset[a]&&(o=n),!o&&n?.parentNode?.dataset[a]&&(o=n.parentNode),!o&&n.tagName!="BODY"&&n?.parentNode?.parentNode?.dataset[a]&&(o=n.parentNode.parentNode),o)return s?o:o.dataset[a]},doSetT:function(n,a){return neodigmOpt.neodigmWWInterval?window.setTimeoutN55(n,a):setTimeout(n,a)},shake:function(n,a=!0){return[...document.querySelectorAll(n)].forEach(function(s,o){s.classList.add("shake__an"),setTimeout(function(){s.classList.remove("shake__an")},460)}),Ot.neodigmUtils},hardReload:function(n="n55reset"){const a=new URLSearchParams(window.location.search);a.set(n,new Date().getTime());const s=a.toString();window.location.search=s}}))}const bp={class:"auth-page"},_p={class:"auth-page-right"},yp={class:"auth-card"},vp={class:"form-group"},Tp={class:"form-group"},Ep={class:"password-input-wrapper"},Sp=["type"],Ap={style:{"text-align":"right"}},wp={class:"auth-link-center"},Op={__name:"signin_route",setup(e){const t=gt(),n=_e(),a=(f="signin")=>{t.push({name:f})};let s=null;const o=ze(!1),r=()=>{o.value=!o.value},i=(f=3,h=1)=>{switch(n.appCLIFeatures.features.motif.state){case"brand":f=3,h=1;break;case"white_label":f=3,h=4;break}const m=Math.floor(Math.random()*f)+h,d=document.querySelector(".img__bg")?.classList;d&&(d.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),d.add(`img__bg--${m}`)),s||(s=z.subscribe("APP__ROUTE_SYNC",(g,b)=>{const y=JSON.parse(b);switch(Object.keys(y)[0]){case"Motif":i();break;case"Lang":l();break}}))},l=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(f=>{const h=n.appCLIFeatures?.features?.lang?.state;let m=n.appMeta.microcopy.language.filter(d=>d.code==h)[0]?.copy;m=m.filter(d=>d[0]==f.dataset.syncMicrocopyText)[0],m&&(f.textContent=m[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(f=>{const h=n.appCLIFeatures?.features?.lang?.state;let m=n.appMeta.microcopy.language.filter(d=>d.code==h)[0]?.copy;m=m.filter(d=>d[0]==f.dataset.syncMicrocopyPlaceholder)[0],m&&(f.placeholder=m[1])})},u=f=>{Ot.neodigmUtils().shake(f||"#inp__text--email")},c=()=>{let f=document.querySelectorAll("#inp__text--email")[0].value;neodigmUtils.messageNotification("Cub vs. Cardianals","https://mach-five-group.github.io/bma-landing/Assets/Bet%20Max%20Action-Full%20Lockup-600.png"),n.doCLI(f)},p=()=>{const f=document.querySelector("#inp__text--email"),h=document.querySelector("#inp__text--password");let m=null,d=null;if(!f?.value)m="Please enter your email",d="#inp__text--email";else if(f.value.indexOf("@")===-1||f.value.indexOf(".")===-1)m="Please enter a valid email address",d="#inp__text--email";else if(!h?.value)m="Please enter your password",d="#inp__text--password";else if(h.value.length<10)m="Password must be at least 10 characters",d="#inp__text--password";else{const g={email:f.value,hash:Ot.neodigmUtils().genHash(h.value)};ve.doSignin(g,b=>{const E=(b?.entity?.tags||[]).find(O=>O.userName)?.userName||"";if(n.appSession.session_user.authenticated=!0,n.appSession.session_user.email=g.email,n.appSession.session_user.fname=b?.entity?.first,n.appSession.session_user.lname=b?.entity?.last,n.appSession.session_user.userName=E,n.appSession.session_user.name=E,n.appSession.session_user.guid=b?.entity?.guid,n.saveSessionUser(),n.appCLIFeatures.features.sse.state){const O=b?.entity?.guid||n.appSession.session_user.guid;pa.establishSSE("https://machfive-bmacdev-rest.onrender.com/v5/sse?appid=BMACORE&sseid=##SSEID##&lastkey=##LASTKEY##",O,n,!0)}})}m&&(u(d),neodigmToast.q(m,"danger"))};return Gt(()=>{i(),l()}),(f,h)=>(Xe(),ht("div",bp,[h[10]||(h[10]=qt('<div class="auth-page-left" data-v-bdc22b93><div class="auth-bg" data-v-bdc22b93><div class="auth-bg-image" data-v-bdc22b93></div><div class="auth-bg-image" data-v-bdc22b93></div><div class="auth-bg-image" data-v-bdc22b93></div></div><div class="auth-overlay" data-v-bdc22b93></div><div class="auth-branding-content" data-v-bdc22b93><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-bdc22b93><p class="auth-branding-tagline" data-v-bdc22b93>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-bdc22b93>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-bdc22b93> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),k("div",_p,[k("div",yp,[h[9]||(h[9]=k("div",{class:"auth-header"},[k("h1",{class:"auth-title","data-sync-microcopy-text":"welcome_back"},"Welcome Back")],-1)),k("form",{class:"auth-form",onSubmit:wa(p,["prevent"])},[k("div",vp,[h[4]||(h[4]=k("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),k("input",{id:"inp__text--email",type:"text","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onDblclick:h[0]||(h[0]=m=>c())},null,32)]),k("div",Tp,[h[5]||(h[5]=k("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),k("div",Ep,[k("input",{id:"inp__text--password",type:o.value?"text":"password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password"},null,8,Sp),k("button",{type:"button",class:"password-toggle-btn",onClick:h[1]||(h[1]=m=>r()),tabindex:"-1"},[k("span",{class:Ut(o.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),k("div",Ap,[k("a",{class:"auth-link",onClick:h[2]||(h[2]=m=>a("forgot_route")),"data-sync-microcopy-text":"forgot_password"},"Forgot Password?")]),h[8]||(h[8]=k("div",{class:"auth-actions"},[k("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"sign_in"},"Sign In")],-1)),k("p",wp,[h[6]||(h[6]=k("span",{"data-sync-microcopy-text":"dont_have_an_account"},"Don't have an account?",-1)),h[7]||(h[7]=Aa()),k("a",{class:"auth-link",onClick:h[3]||(h[3]=m=>a("signup_route")),"data-sync-microcopy-text":"sign_up"},"Sign Up")])],32)])])]))}},Pp=Wt(Op,[["__scopeId","data-v-bdc22b93"]]),kp={class:"auth-page"},xp={__name:"signout_route",setup(e){const t=gt();_e();const n=()=>{mvvLegit.doSignout()},a=()=>{t.push({name:"home_route"})};return(s,o)=>(Xe(),ht("div",kp,[o[1]||(o[1]=qt('<div class="auth-page-left" data-v-119b5d43><div class="auth-bg" data-v-119b5d43><div class="auth-bg-image" data-v-119b5d43></div><div class="auth-bg-image" data-v-119b5d43></div><div class="auth-bg-image" data-v-119b5d43></div></div><div class="auth-overlay" data-v-119b5d43></div><div class="auth-branding-content" data-v-119b5d43><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-119b5d43><p class="auth-branding-tagline" data-v-119b5d43>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-119b5d43>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-119b5d43> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),k("div",{class:"auth-page-right"},[k("div",{class:"auth-card"},[o[0]||(o[0]=k("div",{class:"auth-header"},[k("h1",{class:"auth-title"},"Sign Out"),k("p",{class:"auth-subtitle"},"Confirm you want to sign out")],-1)),k("div",{class:"auth-actions"},[k("button",{onClick:n,class:"btn btn-red"}," Sign Out "),k("button",{onClick:a,class:"btn btn-outline"}," Cancel ")])])])]))}},Cp=Wt(xp,[["__scopeId","data-v-119b5d43"]]),Rp={class:"auth-page"},Np={class:"auth-page-right",style:{display:"block"}},Lp={class:"auth-card auth-card-wide"},Dp={class:"form-group"},Ip={class:"form-group"},Mp={class:"form-group"},Bp={class:"form-group"},Fp={class:"form-group"},$p={class:"password-input-wrapper"},Up=["type"],Hp={class:"form-group"},Kp={class:"password-input-wrapper"},Yp=["type"],jp={class:"auth-link-center"},Gp={__name:"signup_route",setup(e){const t=gt(),n=_e(),a=(g="signin")=>{t.push({name:g})};ve.getTJO()&&a("contests");let s=null;const o=ze(!1),r=ze(!1),i=()=>{o.value=!o.value},l=()=>{r.value=!r.value},u=(g=3,b=1)=>{switch(n.appCLIFeatures.features.motif.state){case"brand":g=3,b=1;break;case"white_label":g=3,b=4;break}const y=Math.floor(Math.random()*g)+b,T=document.querySelector(".img__bg")?.classList;T&&(T.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),T.add(`img__bg--${y}`)),s||(s=z.subscribe("APP__ROUTE_SYNC",(E,O)=>{const C=JSON.parse(O);switch(Object.keys(C)[0]){case"Motif":u();break;case"Lang":c();break}}))},c=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(g=>{const b=n.appCLIFeatures?.features?.lang?.state;let y=n.appMeta.microcopy.language.filter(T=>T.code==b)[0]?.copy;y=y.filter(T=>T[0]==g.dataset.syncMicrocopyText)[0],y&&(g.textContent=y[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(g=>{const b=n.appCLIFeatures?.features?.lang?.state;let y=n.appMeta.microcopy.language.filter(T=>T.code==b)[0]?.copy;y=y.filter(T=>T[0]==g.dataset.syncMicrocopyPlaceholder)[0],y&&(g.placeholder=y[1])})},p=g=>{Ot.neodigmUtils().shake(g||"#inp__text--email")},f=()=>{let g=document.querySelectorAll("#inp__text--email")[0].value;n.doCLI(g)},h=g=>{const b=[];return g.length<10&&b.push("at least 10 characters"),/[a-z]/.test(g)||b.push("1 lowercase"),/[A-Z]/.test(g)||b.push("1 uppercase"),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(g)||b.push("1 special character"),/[^\x00-\x7F]/.test(g)&&b.push("ASCII characters only"),b},m=async()=>{const g=document.querySelector("#inp__text--username"),b=g?.value?.trim();if(b)try{(await ve.checkUserName(b)).userNameExists&&(neodigmToast.q("User name already taken|Please choose a different one","danger"),g.value="",g.focus())}catch(y){console.error("Error checking username:",y)}},d=()=>{const g=document.querySelector("#inp__text--first-name"),b=document.querySelector("#inp__text--last-name"),y=document.querySelector("#inp__text--email"),T=document.querySelector("#inp__text--username"),E=document.querySelector("#inp__text--password"),O=document.querySelector("#inp__text--verify-password");let C=null,I=null;if(!g?.value)C="Please enter your first name",I="#inp__text--first-name";else if(!b?.value)C="Please enter your last name",I="#inp__text--last-name";else if(!y?.value)C="Please enter your email",I="#inp__text--email";else if(y.value.indexOf("@")===-1||y.value.indexOf(".")===-1)C="Please enter a valid email address",I="#inp__text--email";else if(!T?.value)C="Please enter a user name",I="#inp__text--username";else if(!E?.value)C="Please enter a password",I="#inp__text--password";else{const B=h(E.value);if(B.length>0)C="Password must have:|"+B.join(", "),I="#inp__text--password";else if(!O?.value)C="Please verify your password",I="#inp__text--verify-password";else if(E.value!==O.value)C="Passwords do not match",I="#inp__text--verify-password";else{const w=g.value.trim(),N=b.value.trim(),$=[{userName:T.value.trim(),ts:Date.now()}],P={email:y.value,hash:Ot.neodigmUtils().genHash(E.value),first:w,last:N,company:"",phone:"",tags:$};ve.doSignup(P,K=>{K.ok&&setTimeout(()=>{mvvLegit.doUNVERF()},1e3)})}}C&&(p(I),neodigmToast.q(C,"danger"))};return Gt(()=>{u(),c()}),(g,b)=>(Xe(),ht("div",Rp,[b[22]||(b[22]=qt('<div class="auth-page-left" data-v-a46ae1e8><div class="auth-bg" data-v-a46ae1e8><div class="auth-bg-image" data-v-a46ae1e8></div><div class="auth-bg-image" data-v-a46ae1e8></div><div class="auth-bg-image" data-v-a46ae1e8></div></div><div class="auth-overlay" data-v-a46ae1e8></div><div class="auth-branding-content" data-v-a46ae1e8><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-a46ae1e8><p class="auth-branding-tagline" data-v-a46ae1e8>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-a46ae1e8>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-a46ae1e8> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),k("div",Np,[k("div",Lp,[b[21]||(b[21]=k("div",{class:"auth-header"},[k("h1",{class:"auth-title","data-sync-microcopy-text":"sign_up"},"Sign Up")],-1)),k("form",{class:"auth-form",onSubmit:wa(d,["prevent"])},[k("div",Dp,[b[11]||(b[11]=k("label",{for:"inp__text--first-name","data-sync-microcopy-text":"first_name"},"First Name",-1)),k("input",{id:"inp__text--first-name",type:"text","data-sync-microcopy-placeholder":"enter_your_first_name",placeholder:"Enter your first name",onKeyup:b[0]||(b[0]=Tt(y=>d(),["enter"]))},null,32)]),k("div",Ip,[b[12]||(b[12]=k("label",{for:"inp__text--last-name","data-sync-microcopy-text":"last_name"},"Last Name",-1)),k("input",{id:"inp__text--last-name",type:"text","data-sync-microcopy-placeholder":"enter_your_last_name",placeholder:"Enter your last name",onKeyup:b[1]||(b[1]=Tt(y=>d(),["enter"]))},null,32)]),k("div",Mp,[b[13]||(b[13]=k("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),k("input",{id:"inp__text--email",type:"text","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onDblclick:b[2]||(b[2]=y=>f()),onKeyup:b[3]||(b[3]=Tt(y=>d(),["enter"]))},null,32)]),k("div",Bp,[b[14]||(b[14]=k("label",{for:"inp__text--username","data-sync-microcopy-text":"username"},"Username",-1)),k("input",{id:"inp__text--username",type:"text","data-sync-microcopy-placeholder":"enter_your_username",placeholder:"Enter your username",onBlur:b[4]||(b[4]=y=>m()),onKeyup:b[5]||(b[5]=Tt(y=>d(),["enter"]))},null,32)]),k("div",Fp,[b[15]||(b[15]=k("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),k("div",$p,[k("input",{id:"inp__text--password",type:o.value?"text":"password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password",onKeyup:b[6]||(b[6]=Tt(y=>d(),["enter"]))},null,40,Up),k("button",{type:"button",class:"password-toggle-btn",onClick:b[7]||(b[7]=y=>i()),tabindex:"-1"},[k("span",{class:Ut(o.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])]),b[16]||(b[16]=k("small",{"data-sync-microcopy-text":"must_be_at_least_10_characters_long"},"Must be at least 10 characters long",-1))]),k("div",Hp,[b[17]||(b[17]=k("label",{for:"inp__text--verify-password","data-sync-microcopy-text":"verify_password"},"Verify Password",-1)),k("div",Kp,[k("input",{id:"inp__text--verify-password",type:r.value?"text":"password","data-sync-microcopy-placeholder":"re_enter_your_password",placeholder:"Re-enter your password",onKeyup:b[8]||(b[8]=Tt(y=>d(),["enter"]))},null,40,Yp),k("button",{type:"button",class:"password-toggle-btn",onClick:b[9]||(b[9]=y=>l()),tabindex:"-1"},[k("span",{class:Ut(r.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),b[20]||(b[20]=k("div",{class:"auth-actions"},[k("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"sign_up"},"Sign Up")],-1)),k("p",jp,[b[18]||(b[18]=k("span",{"data-sync-microcopy-text":"already_have_an_account"},"Already have an account?",-1)),b[19]||(b[19]=Aa()),k("a",{class:"auth-link",onClick:b[10]||(b[10]=y=>a("signin_route")),"data-sync-microcopy-text":"log_in"},"Sign In")])],32)])])]))}},qp=Wt(Gp,[["__scopeId","data-v-a46ae1e8"]]),Wp={class:"auth-page"},Jp={class:"auth-page-right"},zp={class:"auth-card"},Vp={class:"form-group"},Qp={class:"auth-link-center"},Xp={__name:"forgot_route",setup(e){const t=gt(),n=_e(),a=(u="signin_route")=>{t.push({name:u})};ve.getTJO()&&a("contests");let s=null;const o=(u=3,c=1)=>{switch(n.appCLIFeatures.features.motif.state){case"brand":u=3,c=1;break;case"white_label":u=3,c=4;break}const p=Math.floor(Math.random()*u)+c,f=document.querySelector(".img__bg")?.classList;f&&(f.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),f.add(`img__bg--${p}`)),s||(s=z.subscribe("APP__ROUTE_SYNC",(h,m)=>{const d=JSON.parse(m);switch(Object.keys(d)[0]){case"Motif":o();break;case"Lang":r();break}}))},r=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(u=>{const c=n.appCLIFeatures?.features?.lang?.state;let p=n.appMeta.microcopy.language.filter(f=>f.code==c)[0]?.copy;p=p.filter(f=>f[0]==u.dataset.syncMicrocopyText)[0],p&&(u.textContent=p[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(u=>{const c=n.appCLIFeatures?.features?.lang?.state;let p=n.appMeta.microcopy.language.filter(f=>f.code==c)[0]?.copy;p=p.filter(f=>f[0]==u.dataset.syncMicrocopyPlaceholder)[0],p&&(u.placeholder=p[1])})},i=u=>{Ot.neodigmUtils().shake(u||"#inp__text--email")},l=()=>{const u=document.querySelector("#inp__text--email");let c=null,p=null;if(!u?.value)c="Please enter your email address",p="#inp__text--email";else if(u.value.indexOf("@")===-1||u.value.indexOf(".")===-1)c="Please enter a valid email address",p="#inp__text--email";else{const f={method:"GET",headers:ve.genHeaders()};fetch(ve.API_baseURI+"/m5t/"+ve.API_ver+"/acctEntity/forgot?CODE="+encodeURIComponent(u.value),f).then(h=>h.json()).then(h=>{h.ok?(neodigmToast.q("Password reset email sent!|Please check your inbox","success"),setTimeout(()=>{a("verf_link_route")},2e3)):neodigmToast.q("Failed to send reset email|Please try again","danger")}).catch(h=>{neodigmToast.q("An error occurred|Please try again","danger")});return}c&&(i(p),neodigmToast.q(c,"danger"))};return Gt(()=>{o(),r()}),(u,c)=>(Xe(),ht("div",Wp,[c[7]||(c[7]=qt('<div class="auth-page-left"><div class="auth-bg"><div class="auth-bg-image"></div><div class="auth-bg-image"></div><div class="auth-bg-image"></div></div><div class="auth-overlay"></div><div class="auth-branding-content"><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img"><p class="auth-branding-tagline">Daily Tournament Betting</p><p class="auth-branding-subtitle">Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer"> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),k("div",Jp,[k("div",zp,[c[6]||(c[6]=k("div",{class:"auth-header"},[k("h1",{class:"auth-title","data-sync-microcopy-text":"forgot_password"},"Forgot Password"),k("p",{class:"auth-subtitle","data-sync-microcopy-text":"please_enter_your_email"},"Please enter your email to receive a password reset link")],-1)),k("form",{class:"auth-form",onSubmit:wa(l,["prevent"])},[k("div",Vp,[c[2]||(c[2]=k("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),k("input",{id:"inp__text--email",type:"text","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onKeyup:c[0]||(c[0]=Tt(p=>l(),["enter"]))},null,32)]),c[5]||(c[5]=k("div",{class:"auth-actions"},[k("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"send_reset_link"},"Send Reset Link")],-1)),k("p",Qp,[c[3]||(c[3]=k("span",{"data-sync-microcopy-text":"remember_your_password"},"Remember your password?",-1)),c[4]||(c[4]=Aa()),k("a",{class:"auth-link",onClick:c[1]||(c[1]=p=>a("signin_route")),"data-sync-microcopy-text":"sign_in"},"Sign In")])],32)])])]))}},Zp={class:"auth-page"},ef={class:"auth-page-right"},tf={class:"auth-card"},nf={class:"form-group"},af={class:"password-input-wrapper"},sf=["type"],of={class:"form-group"},rf={class:"password-input-wrapper"},lf=["type"],cf={__name:"resethash_route",setup(e){const t=gt(),n=_e(),a=()=>{t.push({name:"home_route"})};let s=null;const o=ze(!1),r=ze(!1),i=()=>{o.value=!o.value},l=()=>{r.value=!r.value},u=(m=3,d=1)=>{switch(n.appCLIFeatures.features.motif.state){case"brand":m=3,d=1;break;case"white_label":m=3,d=4;break}const g=Math.floor(Math.random()*m)+d,b=document.querySelector(".img__bg")?.classList;b&&(b.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),b.add(`img__bg--${g}`)),s||(s=z.subscribe("APP__ROUTE_SYNC",(y,T)=>{const E=JSON.parse(T);switch(Object.keys(E)[0]){case"Motif":u();break;case"Lang":c();break}}))},c=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(m=>{const d=n.appCLIFeatures?.features?.lang?.state;let g=n.appMeta.microcopy.language.filter(b=>b.code==d)[0]?.copy;g=g.filter(b=>b[0]==m.dataset.syncMicrocopyText)[0],g&&(m.textContent=g[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(m=>{const d=n.appCLIFeatures?.features?.lang?.state;let g=n.appMeta.microcopy.language.filter(b=>b.code==d)[0]?.copy;g=g.filter(b=>b[0]==m.dataset.syncMicrocopyPlaceholder)[0],g&&(m.placeholder=g[1])})},p=m=>{Ot.neodigmUtils().shake(m||"#inp__text--password")},f=m=>{const d=[];return m.length<10&&d.push("at least 10 characters"),/[a-z]/.test(m)||d.push("1 lowercase"),/[A-Z]/.test(m)||d.push("1 uppercase"),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(m)||d.push("1 special character"),/[^\x00-\x7F]/.test(m)&&d.push("ASCII characters only"),d},h=()=>{const m=document.querySelector("#inp__text--password"),d=document.querySelector("#inp__text--verify-password");let g=null,b=null;if(!m?.value)g="Please enter a password",b="#inp__text--password";else{const y=f(m.value);if(y.length>0)g="Password must have:|"+y.join(", "),b="#inp__text--password";else if(!d?.value)g="Please verify your password",b="#inp__text--verify-password";else if(m.value!==d.value)g="Passwords do not match",b="#inp__text--verify-password";else{const T=n.appSession.session_user.email||"",E={email:T,hash:Ot.neodigmUtils().genHash(m.value),modified_by:T},O={method:"POST",body:JSON.stringify(E),headers:ve.genHeaders()};fetch(ve.API_baseURI+"/m5t/"+ve.API_ver+"/acctEntity/resetHash",O).then(C=>C.json()).then(C=>{C.ok?(neodigmToast.q("Password reset successful!|Signing you out...","success"),setTimeout(()=>{mvvLegit.doSignout()},4e3)):neodigmToast.q("Password reset failed|Please try again","danger")}).catch(C=>{neodigmToast.q("An error occurred|Please try again","danger")});return}}g&&(p(b),neodigmToast.q(g,"danger"))};return Gt(()=>{u(),c()}),(m,d)=>(Xe(),ht("div",Zp,[d[9]||(d[9]=qt('<div class="auth-page-left" data-v-cef3f735><div class="auth-bg" data-v-cef3f735><div class="auth-bg-image" data-v-cef3f735></div><div class="auth-bg-image" data-v-cef3f735></div><div class="auth-bg-image" data-v-cef3f735></div></div><div class="auth-overlay" data-v-cef3f735></div><div class="auth-branding-content" data-v-cef3f735><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-cef3f735><p class="auth-branding-tagline" data-v-cef3f735>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-cef3f735>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-cef3f735> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),k("div",ef,[k("div",tf,[d[8]||(d[8]=k("div",{class:"auth-header"},[k("h1",{class:"auth-title","data-sync-microcopy-text":"reset_password"},"Reset Password"),k("p",{class:"auth-subtitle","data-sync-microcopy-text":"please_enter_your_new_password"},"Please enter your new password")],-1)),k("form",{class:"auth-form",onSubmit:wa(h,["prevent"])},[k("div",nf,[d[4]||(d[4]=k("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),k("div",af,[k("input",{id:"inp__text--password",type:o.value?"text":"password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password",onKeyup:d[0]||(d[0]=Tt(g=>h(),["enter"]))},null,40,sf),k("button",{type:"button",class:"password-toggle-btn",onClick:d[1]||(d[1]=g=>i()),tabindex:"-1"},[k("span",{class:Ut(o.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])]),d[5]||(d[5]=k("small",{"data-sync-microcopy-text":"must_be_at_least_10_characters_long"},"Must be at least 10 characters long",-1))]),k("div",of,[d[6]||(d[6]=k("label",{for:"inp__text--verify-password","data-sync-microcopy-text":"verify_password"},"Verify Password",-1)),k("div",rf,[k("input",{id:"inp__text--verify-password",type:r.value?"text":"password","data-sync-microcopy-placeholder":"re_enter_your_password",placeholder:"Re-enter your password",onKeyup:d[2]||(d[2]=Tt(g=>h(),["enter"]))},null,40,lf),k("button",{type:"button",class:"password-toggle-btn",onClick:d[3]||(d[3]=g=>l()),tabindex:"-1"},[k("span",{class:Ut(r.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),k("div",{class:"auth-actions"},[d[7]||(d[7]=k("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"reset_password"},"Reset Password",-1)),k("button",{type:"button",onClick:a,class:"btn btn-outline"}," Cancel ")])],32)])])]))}},df=Wt(cf,[["__scopeId","data-v-cef3f735"]]),uf={class:"auth-page"},pf={class:"auth-page-right"},ff={class:"auth-card"},hf={class:"verification-content"},gf={class:"timer-display"},mf={__name:"verf_link_route",setup(e){const t=gt();ki(),_e();const n=ze(7200);let a=null;const s=r=>{const i=Math.floor(r/3600),l=Math.floor(r%3600/60),u=r%60;return`${i.toString().padStart(2,"0")}:${l.toString().padStart(2,"0")}:${u.toString().padStart(2,"0")}`},o=()=>{a=setInterval(()=>{n.value--,n.value<=0&&(clearInterval(a),neodigmWired4Sound.sound(14),t.push({name:"splash_route"}))},1e3)};return Gt(()=>{o()}),Ta(()=>{a&&clearInterval(a)}),(r,i)=>(Xe(),ht("div",uf,[i[4]||(i[4]=qt('<div class="auth-page-left" data-v-f5b4a3c8><div class="auth-bg" data-v-f5b4a3c8><div class="auth-bg-image" data-v-f5b4a3c8></div><div class="auth-bg-image" data-v-f5b4a3c8></div><div class="auth-bg-image" data-v-f5b4a3c8></div></div><div class="auth-overlay" data-v-f5b4a3c8></div><div class="auth-branding-content" data-v-f5b4a3c8><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-f5b4a3c8><p class="auth-branding-tagline" data-v-f5b4a3c8>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-f5b4a3c8>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-f5b4a3c8> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),k("div",pf,[k("div",ff,[i[3]||(i[3]=k("div",{class:"auth-header"},[k("h1",{class:"auth-title"},"Check Your Email"),k("p",{class:"auth-subtitle"},"A verification link has been sent to the email address you provided.")],-1)),k("div",hf,[i[0]||(i[0]=k("p",{class:"verification-instructions"},"Please click on that link to continue.",-1)),i[1]||(i[1]=k("p",{class:"verification-note"},"The link will expire in 2 hours.",-1)),i[2]||(i[2]=k("p",{class:"verification-note"},"Remember to check your spam folder.",-1)),k("div",gf,sr(s(n.value)),1)])])])]))}},bf=Wt(mf,[["__scopeId","data-v-f5b4a3c8"]]),hs=Su({history:nu(),routes:[{path:"/",name:"splash_route",component:Jo},{path:"/splash_route",name:"splash_route",component:Jo},{path:"/error_route",name:"error_route",component:Qn},{path:"/forgot_route",name:"forgot_route",component:Xp},{path:"/resetforgot_route",name:"resetforgot_route",component:Qn},{path:"/resethash_route",name:"resethash_route",component:df},{path:"/signin_route",name:"signin_route",component:Pp},{path:"/signout_route",name:"signout_route",component:Cp},{path:"/signup_route",name:"signup_route",component:qp},{path:"/verf_link_route",name:"verf_link_route",component:bf},{path:"/offline_route",name:"offline_route",component:Qn},{path:"/home_route",name:"home_route",component:up},{path:"/appFAQ",name:"appFAQ",component:Qn},{path:"/appHelp",name:"appHelp",component:mp}]}),We={updateTDBalance(e,t){const n=document.querySelector(e);if(!n)return;t%1!==0?n.textContent=t.toFixed(2):neodigmUtils.countTo(e,t)},updateSummaryAndDashboard(e,t,n,a=null){const s=document.querySelector("#summary-balance"),o=document.querySelector("#summary-stake"),r=document.querySelector("#summary-payout");s&&(this.updateTDBalance("#summary-balance",e),e<0?s.classList.add("summary-cell__red"):s.classList.remove("summary-cell__red")),o&&(o.textContent=t.toFixed(2)),r&&(r.textContent=n.toFixed(2),n<0?r.classList.add("summary-cell__red"):r.classList.remove("summary-cell__red"));const i=document.getElementById("dashboard-td-balance"),l=document.getElementById("dashboard-td-pending");if(i&&(i.textContent=`TD$ ${e.toLocaleString()}`,e<0?i.style.color="#FF5252":a&&e<a.tournament_dollars*.2?i.style.color="#FF9800":i.style.color="var(--app-core-color--yellow-3__dark--brand, #F7C60D)"),l&&(l.textContent=`TD$ ${t.toLocaleString()}`),a&&a.tournament_dollars){const u=a.tournament_dollars,c=document.querySelector(".tourn-dashboard__gauge-fill--balance");if(c){const f=Math.max(e/u*100,0);c.style.width=`${f}%`}const p=document.querySelector(".tourn-dashboard__gauge-fill--pending");if(p){const f=Math.min(t/u*100,100);p.style.width=`${f}%`}}},categorizeTournaments(e,t,n,a){const s=[],o=l=>(l.entities?.guids||[]).includes(a),r=(l,u)=>(l.sports_allowed||[]).some(p=>p.key===u),i=l=>$t.find(c=>c.key===l)?.title||l;if(t==="lobby"&&n==="all"){const l=e.filter(f=>!o(f)&&(f.status==="UPCOMING"||f.class==="UPCOMING"||f.status==="LOCKED"||f.class==="LOCKED"));l.length>0&&s.push({title:"Discover New Tournaments",subtext:`Join now • ${l.length} tournament${l.length!==1?"s":""}`,tournaments:l});const u=e.filter(f=>o(f)&&(f.status==="LOCKED"||f.class==="LOCKED"));u.length>0&&s.push({title:"Your Active Tournaments",subtext:`Currently in progress • ${u.length} tournament${u.length!==1?"s":""}`,tournaments:u});const c=e.filter(f=>o(f)&&(f.status==="UPCOMING"||f.class==="UPCOMING"));c.length>0&&s.push({title:"Your Upcoming Tournaments",subtext:`Joined, not yet started • ${c.length} tournament${c.length!==1?"s":""}`,tournaments:c});const p=e.filter(f=>f.status==="COMPLETED"||f.class==="COMPLETED").slice(0,20);p.length>0&&s.push({title:"Recently Completed",subtext:`Past competitions • ${p.length} tournament${p.length!==1?"s":""}`,tournaments:p})}else if(t==="my"){let l=e.filter(u=>o(u));if(n!=="all"){l=l.filter(h=>r(h,n));const u=i(n),c=l.filter(h=>h.status==="UPCOMING"||h.class==="UPCOMING");c.length>0&&s.push({title:`Your Upcoming ${u} Tournaments`,subtext:`Ready to start • ${c.length} tournament${c.length!==1?"s":""}`,tournaments:c});const p=l.filter(h=>h.status==="LOCKED"||h.class==="LOCKED");p.length>0&&s.push({title:`Your Active ${u} Tournaments`,subtext:`Currently playing • ${p.length} tournament${p.length!==1?"s":""}`,tournaments:p});const f=l.filter(h=>h.status==="COMPLETED"||h.class==="COMPLETED");f.length>0&&s.push({title:`Your Completed ${u} Tournaments`,subtext:`View results • ${f.length} tournament${f.length!==1?"s":""}`,tournaments:f})}else{const u=l.filter(f=>f.status==="UPCOMING"||f.class==="UPCOMING");u.length>0&&s.push({title:"Your Upcoming Tournaments",subtext:`Ready to start • ${u.length} tournament${u.length!==1?"s":""}`,tournaments:u});const c=l.filter(f=>f.status==="LOCKED"||f.class==="LOCKED");c.length>0&&s.push({title:"Your Active Tournaments",subtext:`Currently playing • ${c.length} tournament${c.length!==1?"s":""}`,tournaments:c});const p=l.filter(f=>f.status==="COMPLETED"||f.class==="COMPLETED");p.length>0&&s.push({title:"Your Completed Tournaments",subtext:`View results • ${p.length} tournament${p.length!==1?"s":""}`,tournaments:p})}}else if(t==="completed"&&n==="all"){const l=e.filter(c=>o(c)&&(c.status==="COMPLETED"||c.class==="COMPLETED"));l.length>0&&s.push({title:"Your Completed Tournaments",subtext:`Your results • ${l.length} tournament${l.length!==1?"s":""}`,tournaments:l});const u=e.filter(c=>!o(c)&&(c.status==="COMPLETED"||c.class==="COMPLETED"));u.length>0&&s.push({title:"Other Completed Tournaments",subtext:`Browse results • ${u.length} tournament${u.length!==1?"s":""}`,tournaments:u})}else if(n==="multi"){const l=e.filter(u=>(u.sports_allowed?.length||0)>1);if(t==="lobby"){const u=l.filter(f=>!o(f)&&(f.status==="UPCOMING"||f.class==="UPCOMING"));u.length>0&&s.push({title:"Discover Multi-Sport Tournaments",subtext:`Available to join • ${u.length} tournament${u.length!==1?"s":""}`,tournaments:u});const c=l.filter(f=>o(f)&&(f.status==="UPCOMING"||f.class==="UPCOMING"||f.status==="LOCKED"||f.class==="LOCKED"));c.length>0&&s.push({title:"Your Multi-Sport Tournaments",subtext:`Active and upcoming • ${c.length} tournament${c.length!==1?"s":""}`,tournaments:c});const p=l.filter(f=>o(f)&&(f.status==="COMPLETED"||f.class==="COMPLETED")).slice(0,10);p.length>0&&s.push({title:"Your Completed Multi-Sport",subtext:`Past results • ${p.length} tournament${p.length!==1?"s":""}`,tournaments:p})}else if(t==="my"){const u=l.filter(f=>o(f)&&(f.status==="LOCKED"||f.class==="LOCKED"));u.length>0&&s.push({title:"Active Multi-Sport Tournaments",subtext:`Currently playing • ${u.length} tournament${u.length!==1?"s":""}`,tournaments:u});const c=l.filter(f=>o(f)&&(f.status==="UPCOMING"||f.class==="UPCOMING"));c.length>0&&s.push({title:"Upcoming Multi-Sport Tournaments",subtext:`Ready to start • ${c.length} tournament${c.length!==1?"s":""}`,tournaments:c});const p=l.filter(f=>o(f)&&(f.status==="COMPLETED"||f.class==="COMPLETED"));p.length>0&&s.push({title:"Completed Multi-Sport Tournaments",subtext:`View results • ${p.length} tournament${p.length!==1?"s":""}`,tournaments:p})}else if(t==="completed"){const u=l.filter(p=>o(p)&&(p.status==="COMPLETED"||p.class==="COMPLETED"));u.length>0&&s.push({title:"Your Completed Multi-Sport",subtext:`Your results • ${u.length} tournament${u.length!==1?"s":""}`,tournaments:u});const c=l.filter(p=>!o(p)&&(p.status==="COMPLETED"||p.class==="COMPLETED"));c.length>0&&s.push({title:"Other Completed Multi-Sport",subtext:`Browse results • ${c.length} tournament${c.length!==1?"s":""}`,tournaments:c})}}else if(n!=="all"&&t!=="my"){const l=i(n),u=e.filter(f=>r(f,n));if(t==="lobby"){const f=u.filter(m=>!o(m)&&(m.status==="UPCOMING"||m.class==="UPCOMING"));f.length>0&&s.push({title:`Discover ${l} Tournaments`,subtext:`Available to join • ${f.length} tournament${f.length!==1?"s":""}`,tournaments:f});const h=u.filter(m=>o(m)&&(m.status==="UPCOMING"||m.class==="UPCOMING"||m.status==="LOCKED"||m.class==="LOCKED"));h.length>0&&s.push({title:`Your ${l} Tournaments`,subtext:`Active and upcoming • ${h.length} tournament${h.length!==1?"s":""}`,tournaments:h})}const c=u.filter(f=>o(f)&&(f.status==="COMPLETED"||f.class==="COMPLETED")).slice(0,10);c.length>0&&s.push({title:`Your Completed ${l}`,subtext:`Your past results • ${c.length} tournament${c.length!==1?"s":""}`,tournaments:c});const p=u.filter(f=>!o(f)&&(f.status==="COMPLETED"||f.class==="COMPLETED")).slice(0,10);p.length>0&&s.push({title:`Other Completed ${l}`,subtext:`Browse results • ${p.length} tournament${p.length!==1?"s":""}`,tournaments:p})}else s.push({title:"Tournaments",subtext:`${e.length} tournament${e.length!==1?"s":""}`,tournaments:e});return s},updateTournamentDashboard(e){if(!e)return;console.log("[Dashboard Update] Starting dashboard update for:",e.caption);const t=_e();t.appSession?.session_user?.guid;const n=e.tournament_dollars||1e4;let a=0,s=0,o=0;if(t.coreBetSlip&&t.coreBetSlip.length>0){const g=t.coreBetSlip[t.coreBetSlip.length-1].data.filter(b=>b.tournament_guid===e.guid);console.log("[Dashboard Update] Found",g.length,"existing bets for this tournament"),g.forEach(b=>{(b.bet||[]).forEach(T=>{Object.keys(T).filter(O=>O!=="short_title").forEach(O=>{const C=T[O];C&&(C.stake&&(a+=parseFloat(C.stake)),C.reconciled===!0&&C.payout>0&&(s+=parseFloat(C.payout)))})})})}const r=document.querySelector("#summary-stake");if(r){const d=parseFloat(r.textContent)||0;o=Math.max(0,d-a),console.log("[Dashboard Update] Summary total stakes:",d,"Pending:",o)}const i=a+o,l=n-a-o+s;console.log("[Dashboard Update] TD$:",n,"Committed:",a,"Pending:",o,"Payouts:",s,"=> Balance:",l);const u=document.getElementById("dashboard-td-balance");u&&(u.textContent=`TD$ ${l.toLocaleString()}`,l<0?u.style.color="#FF5252":l<n*.2?u.style.color="#FF9800":u.style.color="var(--app-core-color--yellow-3__dark--brand, #F7C60D)");const c=document.getElementById("dashboard-td-pending"),p=document.querySelector(".tourn-dashboard__gauge-fill--pending");if(c){const d=o>0?o:i;if(c.textContent=`TD$ ${d.toLocaleString()}`,p){const g=Math.min(d/n*100,100);p.style.width=`${g}%`}}const f=document.querySelector(".tourn-dashboard__gauge-fill--balance");if(f){const d=Math.max(l/n*100,0);f.style.width=`${d}%`}const h=document.getElementById("dashboard-participants"),m=document.querySelector(".tourn-dashboard__gauge-fill--participants");if(h){const d=e.entities?.guids?.length||0,g=e.entities?.max||100;if(h.textContent=`${d}/${g}`,m){const b=d/g*100;m.style.width=`${b}%`}}},renderMatchCards(e){if(!e||!e.matches_expanded)return;const t=document.querySelector(".select-grid");if(!t)return;t.innerHTML="";const n=new Date,a=[...e.matches_expanded].sort((o,r)=>{const i=new Date(o.scheduled_at),l=new Date(r.scheduled_at),u=i<n,c=l<n;return u&&!c?1:!u&&c?-1:i-l}),s=()=>{const r=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let i=0;r&&_e().coreTourn.length>0&&(i=_e().coreTourn[_e().coreTourn.length-1].data.find(m=>m.guid===r)?.tournament_dollars||0);const l=document.querySelector(".bet-grid__slip-BETSLIP-content"),u=l?l.querySelectorAll("bma-bet-entry"):[],c=Array.from(u).map(f=>({matchGuid:f.getAttribute("data-match-guid"),type:f.getAttribute("data-content-type"),teamPoints:f.getAttribute("data-content-team-points"),odds:f.getAttribute("data-content-odds"),stake:f.getAttribute("data-stake"),payout:f.getAttribute("data-payout"),matchTitle:f.getAttribute("data-match-title"),abbreviatedTitle:f.getAttribute("data-abbreviated-title"),scheduledAt:f.getAttribute("data-scheduled-at")})),p=_e();z.publish(p.hierTopics.COREBETSLIP__INTERSYNC,JSON.stringify({tournament_dollars:i,bets:c,timestamp:Date.now()}))};a.forEach(o=>{const i=new Date(o.scheduled_at)<n;let l=!1;try{l=(typeof o.scoreboard_data=="string"?JSON.parse(o.scoreboard_data):o.scoreboard_data)?.time_remaining?.toLowerCase()==="final"}catch{}const u=document.createElement("bma-bet-match-card");if(u.setAttribute("data-match-id",o.id),u.setAttribute("data-match-guid",o.odds_id||o.guid||o.id),u.setAttribute("data-match-title",o.title),u.setAttribute("data-match-short-title",o.short_title||o.title),u.setAttribute("data-scheduled-at",o.scheduled_at),u.setAttribute("data-home-team",o.home_team_id||"Home"),u.setAttribute("data-away-team",o.away_team_id||"Away"),u.setAttribute("data-is-disabled",i||l?"true":"false"),u.setAttribute("data-sync-theme","dark"),o.odds_markets){const c=typeof o.odds_markets=="string"?o.odds_markets:JSON.stringify(o.odds_markets);u.setAttribute("data-odds-markets",c)}if(o.scoreboard_data){const c=typeof o.scoreboard_data=="string"?o.scoreboard_data:JSON.stringify(o.scoreboard_data);u.setAttribute("data-scoreboard",c)}if(o.sport_id)u.setAttribute("data-sport-key",o.sport_id);else if(e.sports_allowed&&e.sports_allowed.length===1){const c=e.sports_allowed[0];c&&c.key&&u.setAttribute("data-sport-key",c.key)}u.addEventListener("bet-button-click",c=>{const{betData:p,isActive:f,button:h}=c.detail;if(f){const m=document.querySelector(".bet-grid__slip-BETSLIP-content");if(m){const d=m.querySelectorAll("bma-bet-entry");let g=!1;d.forEach(b=>{if(g)return;const y=b.getAttribute("data-content-type"),T=b.getAttribute("data-content-odds");y===p.type&&T===p.price&&(b.remove(),g=!0)}),m.children.length===0&&(m.innerHTML='<div class="bet-slip__empty"><p>Select odds to create a new bet slip</p></div>')}h.classList.remove("btn--active"),setTimeout(()=>{s()},100)}else{document.querySelectorAll("bma-bet-match-card").forEach(g=>{g.shadowRoot.querySelectorAll(".btn--selected").forEach(b=>{b.classList.remove("btn--selected")})}),h.classList.add("btn--selected"),h.classList.add("btn--active");const m=_e(),d=p.type;d==="spread"?z.publish(m.hierTopics.COREBETSLIP__SPREAD,JSON.stringify(p)):d==="money"?z.publish(m.hierTopics.COREBETSLIP__MONEY,JSON.stringify(p)):d==="total"&&z.publish(m.hierTopics.COREBETSLIP__TOTAL,JSON.stringify(p)),z.publish(m.hierTopics.COREBETSLIP,JSON.stringify(p))}}),t.appendChild(u)})},refreshPlayPopupUI(e,t){console.log("[app_events] Refreshing PLAY popup UI for tournament:",e);const n=document.querySelector(".bet-grid__slip-BETSLIP-content");n&&(n.innerHTML='<div class="bet-slip__empty"><p>Select odds to create a new bet slip</p></div>');const a=_e();if(a.coreTourn.length>0){const r=a.coreTourn[a.coreTourn.length-1].data.find(i=>i.guid===e);r&&We.renderMatchCards(r)}t?.rows&&(console.log("[app_events] Publishing SODAPOP__HYDRATE__COREBETSLIP with",t.rows.length,"bets"),setTimeout(()=>{z.publish(a.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,JSON.stringify(t))},100));const s=document.querySelector(".bet-grid__slip");s&&s.setAttribute("data-active-bet-tab","MYBETS")},disableExistingBetButtons(){const e=document.querySelectorAll(".bet-grid__slip-MYBETS bma-bet-existing"),t=Array.from(e).map(a=>{try{return JSON.parse(a.getAttribute("data-corebetslip")||"{}")}catch{return null}}).filter(Boolean);document.querySelectorAll("bma-bet-match-card").forEach(a=>{const s=a.getAttribute("data-match-guid"),o=a.getAttribute("data-home-team"),r=a.getAttribute("data-away-team");(a.shadowRoot?.querySelectorAll(".btn:not(.btn--empty)")||[]).forEach(l=>{if(l.disabled)return;const u=l.dataset.betType,f=l.dataset.team==="home"?o:r;t.some(m=>{if(m.coreMatches__guid!==s)return!1;const d=m.bet||[];if(d.length===0)return!1;const g=d[0],y=Object.keys(g).filter(O=>O!=="short_title")[0],E=g[y]?.type;return u==="total"?E===u:E===u&&y===f})&&(l.disabled=!0,l.classList.add("btn--disabled"))})})},bindAppListeners(e){z.subscribe("APP",(h,m)=>{console.warn("~~ sub all APP | "+h+"|"+m)}),z.subscribe("WC",(h,m)=>{console.warn("~~ sub all WC  | "+h+"|"+m)}),z.subscribe("ROUTE",(h,m)=>{console.warn("~~ sub all ROUTE  | "+h+"|"+m)});let t="lobby",n="all";const a=()=>{if(e.coreTourn.length===0)return;const m=e.coreTourn[e.coreTourn.length-1].data,d=e.appSession?.session_user?.guid;document.querySelectorAll(".tournament-item").forEach(y=>y.classList.remove("h-ds__none"));let b=0;if(m.forEach(y=>{const T=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${y.guid}"]`);if(!T)return;const E=T.parentElement;let O=!0;if(t==="my"?(y.entities?.guids||[]).includes(d)||(O=!1):t==="completed"&&(y.status||y.class)!=="COMPLETED"&&(O=!1),n!=="all"&&O){const C=y.sports_allowed||[];n==="multi"?C.length<=1&&(O=!1):C.some(B=>B.key===n)||(O=!1)}O?b++:E&&E.classList.add("h-ds__none")}),console.log(`[app_events] Filter applied - ${t}/${n} - showing ${b} of ${m.length} tournaments`),b===0){let y="No tournaments match the current filters";t==="my"&&(y="You haven't joined any tournaments yet"),t==="completed"&&(y="No completed tournaments yet"),typeof neodigmToast<"u"&&neodigmToast.q(y,"night")}};z.subscribe(e.hierTopics.COREBETSLIP,(h,m)=>{JSON.parse(m);let d=16;switch(h){case e.hierTopics.COREBETSLIP__BET:d=5,Kn.shootConfetti(),console.log("~~~  |  "+h+" | ",m);const g=document.querySelector("neodigm-sodapop");g&&g.setAttribute("data-wait","true");const b=document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry");if(b.length===0){console.warn("[app_events] No bets to submit"),g&&g.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("No bets to submit","warning");break}const T=document.querySelector(".play-cntr")?.dataset?.currentTournGuid,E=e.appSession?.session_user?.guid;if(!T||!E){console.error("[app_events] Missing tournament or user GUID"),g&&g.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("Missing tournament or user data","danger");break}const O=Array.from(b).map(K=>{const Q=K.getAttribute("data-content-team-points"),ee=K.getAttribute("data-content-odds"),X=K.getAttribute("data-stake")||"0",W=K.getAttribute("data-content-type"),H=K.getAttribute("data-payout")||"0",re=K.getAttribute("data-match-guid")||"",te={};return te[Q]={type:W,stake:parseFloat(X),odds:parseFloat(ee),payout:parseFloat(H),reconciled:!1},{acctEntity__guid:E,coreTournaments__guid:T,coreMatches__guid:re,bet:[te],status:"PENDING"}});console.log("[app_events] Submitting bet slips:",O),ve.postBetSlips(O).then(K=>{console.log("[app_events] Bet slips posted successfully:",K);const Q=O.reduce((ee,X)=>{const W=X.bet[0],H=Object.keys(W)[0];return ee+(W[H]?.stake||0)},0);typeof neodigmToast<"u"&&neodigmToast.q(`Bets placed successfully!|Total Stake: TD$ ${Q.toFixed(2)}`,"success"),ve.fetchBetSlips(E,T).then(ee=>{if(ee?.rows){const X={timestamp:Date.now(),source:"API",data:ee.rows};e.pushcoreBetSlip(X),console.log("[app_events] Refreshed bet slips in store:",ee.rows.length,"items")}We.refreshPlayPopupUI(T,ee),g&&g.setAttribute("data-wait","false")}).catch(ee=>{console.error("[app_events] Error fetching fresh bet slips:",ee),g&&g.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("Bets placed but failed to refresh|Please close and reopen","warning")})}).catch(K=>{console.error("[app_events] Error posting bet slips:",K),typeof neodigmToast<"u"&&neodigmToast.q("Failed to place bets|Please try again","danger"),g&&g.setAttribute("data-wait","false")});break;case e.hierTopics.COREBETSLIP__SPREAD:break;case e.hierTopics.COREBETSLIP__MONEY:break;case e.hierTopics.COREBETSLIP__TOTAL:break;case e.hierTopics.COREBETSLIP__CLOSE:d=24;break;case e.hierTopics.COREBETSLIP__TDSYNC:if(document.querySelector("#summary-balance")&&m){m=JSON.parse(m);const Q=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(e.coreBetSlip[0]?.data&&Q){const ee=e.coreBetSlip[0].data.filter(Se=>Se.coreTournaments__guid===Q),X=[],W=[],H=[];ee.forEach(Se=>{const Pe=Se.bet||[];if(Pe.length===0)return;const ue=Pe[0];Object.keys(ue).filter(Y=>Y!=="short_title").forEach(Y=>{const j=ue[Y],V=j?.reconciled!==!1,ie=parseFloat(j?.payout||0);V?ie===0?W.push(Se):H.push(Se):X.push(Se)})});const re=Ze.search(X,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,te=Ze.search(W,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,Te=re+te,le=Ze.search(H,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0,Le=m.tournament_dollars-Te+le;We.updateTDBalance("#summary-balance",Le)}else We.updateTDBalance("#summary-balance",m.tournament_dollars)}break;case e.hierTopics.COREBETSLIP__INTERSYNC:let I=0,B=0,w=0;if(e.coreBetSlip.length>0){const Q=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(Q){const X=e.coreBetSlip[e.coreBetSlip.length-1].data.filter(le=>le.coreTournaments__guid===Q),W=[],H=[],re=[];X.forEach(le=>{const Le=le.bet||[];if(Le.length===0)return;const Se=Le[0];Object.keys(Se).filter(ue=>ue!=="short_title").forEach(ue=>{const x=Se[ue],Y=x?.reconciled!==!1,j=parseFloat(x?.payout||0);Y?j===0?H.push(le):re.push(le):W.push(le)})}),I=Ze.search(W,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,B=Ze.search(re,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0;const te=Ze.search(H,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,Te=Ze.search(re,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0;w=te+Te}}let N=!0,$=0;const P=document.querySelector("[data-bets-valid]");if(P&&m){m=JSON.parse(m),m.pending_stake_sum=0,m.pending_payout_sum=0,m.bets.length||(N=!1),m.bets.forEach(re=>{re.stake=Number(re.stake),re.stake?m.pending_stake_sum+=re.stake:N=!1}),document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry").forEach(re=>{const te=parseFloat(re.getAttribute("data-payout")||"0");m.pending_payout_sum+=te});const Q=I+m.pending_stake_sum,ee=B+m.pending_payout_sum;$=m.tournament_dollars-Q-w+B;const W=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let H=null;W&&e.coreTourn.length>0&&(H=e.coreTourn[e.coreTourn.length-1]?.data?.find(te=>te.guid===W)),We.updateSummaryAndDashboard($,Q,ee,H),(m.tournament_dollars<0||$<0)&&(N=!1),P.dataset.betsValid=N}break}d&&neodigmWired4Sound&&neodigmWired4Sound.sound(d,"QUITE").vibrate()});const s=()=>{const m=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let d=0;m&&e.coreTourn.length>0&&(d=e.coreTourn[e.coreTourn.length-1].data.find(y=>y.guid===m)?.tournament_dollars||0),z.publish(e.hierTopics.COREBETSLIP__TDSYNC,JSON.stringify({tournament_dollars:d,timestamp:Date.now()}))},o=()=>{const m=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let d=0;m&&e.coreTourn.length>0&&(d=e.coreTourn[e.coreTourn.length-1].data.find(I=>I.guid===m)?.tournament_dollars||0);let g=0,b=0,y=0;if(e.coreBetSlip.length>0&&m){const C=e.coreBetSlip[e.coreBetSlip.length-1].data.filter(K=>K.coreTournaments__guid===m);console.log("[app_events] Filtered bets for tournament:",m,"found:",C.length),console.log("[app_events] Using latest bet slip data index:",e.coreBetSlip.length-1),console.log("[app_events] First bet sample:",C[0]);const I=[],B=[],w=[];C.forEach(K=>{const Q=K.bet||[];if(Q.length===0)return;const ee=Q[0];Object.keys(ee).filter(W=>W!=="short_title").forEach(W=>{const H=ee[W],re=H?.reconciled!==!1,te=parseFloat(H?.payout||0);re?te===0?B.push(K):w.push(K):I.push(K)})}),console.log("[app_events] Bet categories:",{unreconciled:I.length,reconciledZero:B.length,reconciledNonZero:w.length});const N=Ze.search(I,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,$=Ze.search(B,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,P=Ze.search(w,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0;y=$+P,b=Ze.search(w,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0,g=N,console.log("[app_events] Balance calculation:",{unreconciledStakes:N,lostBetStakes:$,wonBetStakes:P,allReconciledStakes:y,displayedStake:g,reconciledPayouts:b,tournamentDollars:d,calculatedBalance:d-g-y+b})}else console.warn("[app_events] No bet data found in Pinia store or missing tournamentGuid");const T=d-g-y+b;let E=null;m&&e.coreTourn.length>0&&(E=e.coreTourn[e.coreTourn.length-1].data.find(C=>C.guid===m)),We.updateSummaryAndDashboard(T,g,b,E)};z.subscribe(e.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,(h,m)=>{const g=JSON.parse(m)?.rows||[],b=document.querySelector(".bet-grid__slip-MYBETS");if(!b)return;if(b.innerHTML="",g.length===0){b.innerHTML='<p style="color: var(--app-core-color--gray-6__dark--brand, #969696); text-align: center; padding: 20px;">No active bets</p>';const O=document.querySelector(".bet-grid__slip");O&&O.setAttribute("data-active-bet-tab","BETSLIP"),s();return}g.forEach(O=>{if((O.bet||[]).length===0)return;const I=document.createElement("bma-bet-existing");I.setAttribute("data-corebetslip",JSON.stringify(O)),b.appendChild(I)});const y=document.querySelector(".bet-grid__slip");y&&y.setAttribute("data-active-bet-tab","MYBETS"),_e().appCLIFeatures?.features?.disable_existing_bet_btn?.state===!0&&We.disableExistingBetButtons(),setTimeout(()=>{console.log("[app_events] Calling updateSummaryFromExistingBets after HYDRATE, bet count:",g.length),console.log("[app_events] Pinia store bet count:",e.coreBetSlip[0]?.data?.length||0),o()},200)}),document.addEventListener("click",h=>{const m=h.target;if(m&&m.classList.contains("bet-slip-tab")){const d=m.dataset.betTab,g=document.querySelector(".bet-grid__slip");d&&g&&(g.setAttribute("data-active-bet-tab",d),neodigmWired4Sound&&neodigmWired4Sound.sound(3),console.log("[app_events] Switched to bet tab:",d))}if(m&&m.dataset.publishBetslip){const d=m.dataset.publishBetslip;z.publish(d,JSON.stringify({timestamp:Date.now()}))}});const r=()=>{const m=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let d=0;m&&e.coreTourn.length>0&&(d=e.coreTourn[e.coreTourn.length-1].data.find(E=>E.guid===m)?.tournament_dollars||0);const g=document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry"),b=Array.from(g).map(y=>({teamPoints:y.getAttribute("data-content-team-points"),odds:y.getAttribute("data-content-odds"),stake:y.getAttribute("data-stake")||"0",type:y.getAttribute("data-content-type"),abbreviatedTitle:y.getAttribute("data-abbreviated-title"),scheduledAt:y.getAttribute("data-scheduled-at")}));z.publish(e.hierTopics.COREBETSLIP__INTERSYNC,JSON.stringify({tournament_dollars:d,bets:b,timestamp:Date.now()}))},i=(h,m)=>{const d=JSON.parse(m),g=document.querySelector(".bet-grid__slip-BETSLIP-content");if(!g){console.error("[app_events] Bet slip container not found");return}const b=g.querySelector(".bet-slip__empty");b&&b.remove();let y="";d.type==="total"?y=d.team==="over"?"Over":"Under":d.team==="home"?y=d.homeTeam:d.team==="away"&&(y=d.awayTeam);let T=y;if(d.point)if(d.type==="spread"){const w=parseFloat(d.point)>0?`+${d.point}`:d.point;T=`${y} ${w}`}else d.type==="total"&&(T=`${y} ${d.point}`);const E=document.createElement("bma-bet-entry");E.setAttribute("data-content-team-points",T),E.setAttribute("data-content-odds",d.price||"0"),E.setAttribute("data-content-stake-text","0"),E.setAttribute("data-content-type",d.type||""),E.setAttribute("data-abbreviated-title",d.abbreviatedTitle||`${d.homeTeam} vs ${d.awayTeam}`),E.setAttribute("data-scheduled-at",d.scheduledAt||""),E.setAttribute("data-match-guid",d.matchGuid||""),E.setAttribute("data-home-team",d.homeTeam||""),E.setAttribute("data-away-team",d.awayTeam||""),E.setAttribute("data-bet-team",y||"");const C=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(C&&e.coreTourn.length>0){const N=e.coreTourn[e.coreTourn.length-1].data.find($=>$.guid===C);if(N?.sports_allowed&&N.sports_allowed.length>0){const $=N.sports_allowed[0];E.setAttribute("data-sport-key",$.key||"");const P=$t.find(K=>K.key===$.key);E.setAttribute("data-sport-group",P?.group||"")}}g.appendChild(E),console.log("[app_events] Bet entry appended to container:",E,"Container children:",g.children.length),setTimeout(()=>{l(E)},0);const I=document.querySelector(".bet-grid__slip");I&&(I.setAttribute("data-active-bet-tab","BETSLIP"),console.log("[app_events] Switched to BETSLIP tab"));const B=g.querySelectorAll("bma-bet-entry").length;B>=3?requestAnimationFrame(()=>{setTimeout(()=>{const w=document.querySelector(".bet-grid__slip");w&&(console.log("[app_events] Scrolling parent to bottom - bet count:",B,"scrollHeight:",w.scrollHeight,"current scrollTop:",w.scrollTop),w.scrollTo({top:w.scrollHeight,behavior:"smooth"}),setTimeout(()=>{console.log("[app_events] After scroll - scrollTop:",w.scrollTop)},500))},150)}):console.log("[app_events] Skipping scroll - only",B,"bet cards (need 3+)"),setTimeout(()=>{r()},200),console.log("[app_events] Created bet entry:",{teamPoints:T,odds:d.price,type:d.type})};z.subscribe(e.hierTopics.COREBETSLIP__SPREAD,i),z.subscribe(e.hierTopics.COREBETSLIP__MONEY,i),z.subscribe(e.hierTopics.COREBETSLIP__TOTAL,i);const l=h=>{const m={sport:{key:h.getAttribute("data-sport-key")||"",group:h.getAttribute("data-sport-group")||""},Match:{scheduled_at:h.getAttribute("data-scheduled-at")||"",home_team_id:h.getAttribute("data-home-team")||"",home_team_score:"",away_team_id:h.getAttribute("data-away-team")||"",away_team_score:""},Bet:{scope:{team_id:h.getAttribute("data-bet-team")||"",over:"",under:""},type:h.getAttribute("data-content-type")||"",odds:h.getAttribute("data-content-odds")||"0",stake:h.getAttribute("data-stake")||"0"}},d=Ni.calcPayout(m);h.setAttribute("data-payout",d.toString()),console.log("[app_events] Payout calculated:",{stake:m.Bet.stake,odds:m.Bet.odds,payout:d})};new MutationObserver(h=>{h.forEach(m=>{m.type==="attributes"&&m.attributeName==="data-stake"&&m.target.tagName==="BMA-BET-ENTRY"&&(console.log("[app_events] Stake changed:",m.target.getAttribute("data-stake")),l(m.target),clearTimeout(window.betSlipStakeTimeout),window.betSlipStakeTimeout=setTimeout(()=>{r()},300))})}).observe(document.body,{attributes:!0,attributeFilter:["data-stake"],subtree:!0}),console.log("[app_events] MutationObserver for stake changes initialized"),document.addEventListener("bma-bet-entry-remove",h=>{console.log("[app_events] Removing bet entry:",h.detail);const m=h.target,d=h.detail;m.remove(),setTimeout(()=>{const T=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(T){const E=_e(),O=E.coreTourn[E.coreTourn.length-1];if(O&&O.data){const C=O.data.find(I=>I.guid===T);C&&We.updateTournamentDashboard(C)}}},100),document.querySelectorAll("bma-bet-match-card").forEach(y=>{(y.shadowRoot?.querySelectorAll(".btn")||[]).forEach(E=>{const O=E.dataset.betType,C=E.dataset.price,I=O===d.type,B=C===d.odds;I&&B&&E.classList.contains("btn--active")&&(E.classList.remove("btn--active"),console.log("[app_events] Deactivated button via X removal:",{btnType:O,btnPrice:C}))})});const b=document.querySelector(".bet-grid__slip-BETSLIP-content");b&&b.children.length,setTimeout(()=>{r()},100)}),z.subscribe(e.hierTopics.CANVAS__HYDRATE__STATUS,(h,m)=>{const d=JSON.parse(m);d&&d.guid&&neodigmUtils&&neodigmUtils.shake(`[data-bma-tourn-guid="${d.guid}"]`)}),z.subscribe(e.hierTopics.WC__APP__FOOT,(h,m)=>{JSON.parse(m);let d=16;switch(h){case e.hierTopics.WC__APP__FOOT__ALL_SPORTS:z.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_LOBBY,JSON.stringify({tab:"ALL_SPORTS",timestamp:Date.now()}));break;case e.hierTopics.WC__APP__FOOT__MY_TOURNEYS:z.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_MY,JSON.stringify({tab:"MY_TOURNEYS",timestamp:Date.now()}));break;case e.hierTopics.WC__APP__FOOT__LEADERBOARD:d=24,z.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_LEADERBOARD,JSON.stringify({tab:"LEADERBOARD",timestamp:Date.now()}));break;case e.hierTopics.WC__APP__FOOT__MY_PROFILE:z.publish(e.hierTopics.WC__APP__HEAD_TOP__USER_PROFILE,JSON.stringify({tab:"USER_PROFILE",timestamp:Date.now()}));break}d&&neodigmWired4Sound&&neodigmWired4Sound.sound(d).vibrate()}),z.subscribe(e.hierTopics.WC__APP__HEAD_SPORTS,(h,m)=>{const d=JSON.parse(m);let g=16;h=="WC.APP.HEAD_SPORTS.PREV"||h=="WC.APP.HEAD_SPORTS.NEXT"||h=="WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START"?g=3:(n=d.key||"all",console.log(`[app_events] Sports filter changed to: ${n} (${d.group})`),z.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"SPORT_FILTER_CHANGE"}))),g&&neodigmWired4Sound&&neodigmWired4Sound.sound(g).vibrate()}),z.subscribe(e.hierTopics.WC__APP__HEAD_MID,(h,m)=>{JSON.parse(m);let d=16;const g=()=>{n="all";const b=document.querySelector("bma-app-head-sports");b&&b.setAttribute("data-selected-chip","all")};switch(h){case"WC.APP.HEAD_MID.HEAD_MID_LOBBY":t="lobby",g(),z.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"FILTER_CHANGE"}));break;case"WC.APP.HEAD_MID.HEAD_MID_MY":if(!e.appSession?.session_user?.guid){console.warn("[app_events] No user GUID found, cannot filter tournaments"),typeof neodigmToast<"u"&&neodigmToast.q("Please sign in to view your tournaments","warning");return}t="my",g(),z.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"FILTER_CHANGE"}));break;case"WC.APP.HEAD_MID.HEAD_MID_COMPLETED":t="completed",g(),z.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"FILTER_CHANGE"}));break;case"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD":t="leaderboard",g(),a(),d=24,typeof neodigmToast<"u"&&neodigmToast.q("Feature not Available|in Beta","night");break;case"WC.APP.HEAD_MID.HEAD_MID_SQUAD":t="squad",g(),a(),d=24,typeof neodigmToast<"u"&&neodigmToast.q("Feature not Available|in Beta","night");break}d&&neodigmWired4Sound&&neodigmWired4Sound.sound(d).vibrate()}),z.subscribe(e.hierTopics.ROUTE__HOME__USER_PROFILE,async(h,m)=>{JSON.parse(m);let d=16;switch(h){case"ROUTE.HOME.USER_PROFILE.INSTALL_PWA":const g=window.deferredPWAPrompt;if(!g){console.log("No install prompt available"),typeof neodigmToast<"u"&&neodigmToast.q("PWA install not available","warning");return}try{g.prompt();const{outcome:y}=await g.userChoice;y==="accepted"?(console.log("PWA installed successfully"),window.deferredPWAPrompt=null,typeof neodigmToast<"u"&&neodigmToast.q("App installed successfully!","success"),d=8,neodigmSodaPop&&neodigmSodaPop.close()):(console.log("PWA install declined"),typeof neodigmToast<"u"&&neodigmToast.q("Install cancelled","night"))}catch(y){console.error("PWA install error:",y),typeof neodigmToast<"u"&&neodigmToast.q("Install failed","danger")}break;case"ROUTE.HOME.USER_PROFILE.TOGGLE_THEME":(()=>{const T=e.appCLIFeatures.features.theme.state==="dark"?"light":"dark";e.setFeaturePersistPub("theme",{state:T});const E=document.getElementById("app");E&&E.setAttribute("data-sync-theme",T),document.body.setAttribute("data-sync-theme",T)})(),neodigmSodaPop&&neodigmSodaPop.close();break;case"ROUTE.HOME.USER_PROFILE.RESET_PASSWORD":hs.push({name:"resethash_route"}),neodigmSodaPop&&neodigmSodaPop.close();break;case"ROUTE.HOME.USER_PROFILE.SIGNOUT":hs.push({name:"signout_route"}),neodigmSodaPop&&neodigmSodaPop.close();break}d&&neodigmWired4Sound&&neodigmWired4Sound.sound(d).vibrate()});const c=(h,m)=>{const d=h.split(".").pop();console.log("[app_events] SODAPOP_PLAY subscriber - action:",d,"topic:",h),setTimeout(()=>{const g=document.querySelectorAll(".play-cntr .btn-info-sm"),y=document.querySelector(".play-cntr")?.closest("neodigm-sodapop");g.forEach(T=>{const E=T.dataset.publishRouteHome?.split(".").pop()||"";if(E===d){if(console.log("[app_events] Activating button:",E),T.classList.add("btn-info-sm--active"),T.classList.remove("btn-info-sm--inactive"),neodigmCarousel.nav({id:"caro-play",nav:E}),neodigmWired4Sound.sound(3),y){const O=d==="PLAY"?"hidden":"auto";y.style.overflow=O,console.log("[app_events] Set sodapop overflow to:",O)}}else T.classList.add("btn-info-sm--inactive"),T.classList.remove("btn-info-sm--active")})},100)};z.subscribe("ROUTE.HOME.SODAPOP_PLAY.INFO",c),z.subscribe("ROUTE.HOME.SODAPOP_PLAY.LEADERBOARD",c),z.subscribe("ROUTE.HOME.SODAPOP_PLAY.PLAY",(h,m)=>{JSON.parse(m);const d=document.getElementById("btn-join__play--id");if(!d){console.warn("[app_events] PLAY button not found");return}const g=d.dataset.requiresJoin==="true",b=d.textContent.trim().toLowerCase();if(console.log("[app_events] PLAY button clicked - text:",b,"requiresJoin:",g),g&&b==="join"){const T=document.querySelector(".play-cntr")?.dataset?.currentTournGuid,E=_e();if(!T){console.error("[app_events] No tournament GUID found");return}console.log("[app_events] Executing JOIN for tournament:",T),z.publish(E.hierTopics.WC__TOURN_ACTION,JSON.stringify({action:"JOIN",tournamentGuid:T,timestamp:Date.now()})),d.textContent="Play",d.dataset.requiresJoin="false",setTimeout(()=>{c(h),console.log("[app_events] JOIN triggered, advancing carousel to PLAY page")},500)}else c(h),console.log("[app_events] Advancing carousel to PLAY page")}),z.subscribe(e.hierTopics.WC__APP__HEAD_TOP,(h,m)=>{JSON.parse(m);let d=10;switch(h){case"WC.APP.HEAD_TOP.USER_PROFILE":d=10,neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_my_profile"),setTimeout(()=>{neodigmCarousel.nav({id:"caro-user_profile",nav:"caro-page__badges"})},1200);break;case"WC.APP.HEAD_TOP.LOGO":const g=e.appSession.session_app.version,b=new Date().getFullYear();g&&neodigmToast&&neodigmToast.q(`${g} 2/20/2026, 8:43:17 PM|© ${b} Bet Max Action`,"night");break}d&&neodigmWired4Sound&&neodigmWired4Sound.sound(d).vibrate()});let p=null,f=null;z.subscribe(e.hierTopics.WC__TOURN_ACTION,(h,m)=>{const d=JSON.parse(m);let g=0;switch(d?.action){case"JOIN":g=512;break;case"PLAY":g=8;break;case"INFO":g=8;break}if(g){p=d?.tournamentGuid,f=d?.action,console.log("[app_events] Storing pending tourn data:",p,f);const b=e.appSession?.session_user?.guid,y=d?.tournamentGuid;b&&y?ve.fetchBetSlips(b,y).then(T=>{if(T?.rows){const E={timestamp:Date.now(),source:"API",data:T.rows};e.pushcoreBetSlip(E),console.log("[app_events] Bet slips fetched:",T.rows.length,"items")}setTimeout(()=>{neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_play"),setTimeout(()=>{z.publish(e.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,JSON.stringify(T))},3e3)},g)}).catch(T=>{console.error("[app_events] Error fetching bet slips:",T),setTimeout(()=>{neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_play")},g)}):setTimeout(()=>{neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_play")},g)}}),z.subscribe(e.hierTopics.WC__TOURN_ACTION,(h,m)=>{const d=JSON.parse(m);let g=16;switch(d?.action){case"FOCUS":g=3;break;case"SPORT_ICON":g=10;break;case"JOIN":g=5;break;case"PLAY":g=16;break}g&&neodigmWired4Sound&&neodigmWired4Sound.sound(g).vibrate()}),z.subscribe(e.hierTopics.WC__TOURN_ACTION,(h,m)=>{const d=JSON.parse(m);let g=0,b="night";switch(neodigmOpt&&neodigmOpt.EVENT_SOUNDS&&(neodigmOpt.EVENT_SOUNDS=!1),d?.tournamentStatus){case"UPCOMING":b="success";break;case"LOCKED":b="warning";break;case"COMPLETED":b="danger";break}switch(d?.action){case"SPORT_ICON":d?.sportTitle==d?.sportDescription?g=d?.sportTitle:g=d?.sportTitle+"|"+d?.sportDescription;break}g&&neodigmToast&&neodigmToast.q(g,b)}),z.subscribe(e.hierTopics.WC__TOURN_ACTION,async(h,m)=>{const d=JSON.parse(m);if(d?.action==="JOIN"){const b=_e().appSession?.session_user?.guid;if(!b){console.error("No entity guid found in session"),typeof neodigmToast<"u"&&neodigmToast.q("Please sign in to join tournaments","warning");return}const y=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${d.tournamentGuid}"]`);y&&(y.setAttribute("data-bma-tourn-wait","true"),Kn.shootConfetti());const T={acctEntityGuid:b,tournamentGuid:d.tournamentGuid};try{const E={method:"POST",body:JSON.stringify(T),headers:ve.genHeaders()};console.log("Posting to:",ve.API_baseURI+"/m5t/"+ve.API_ver+"/coreTournaments/join",T);const C=await(await fetch(ve.API_baseURI+"/m5t/"+ve.API_ver+"/coreTournaments/join",E)).json();if(console.log("Join response:",C),C.ok)typeof neodigmToast<"u"&&neodigmToast.q("Successfully joined tournament!","success"),setTimeout(()=>{const I=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${d.tournamentGuid}"]`);if(I){I.setAttribute("data-bma-tourn-wait","false");const B=I.getAttribute("data-bma-tourn-entities");if(B)try{const w=JSON.parse(B);w.guids.includes(b)||(w.guids.push(b),I.setAttribute("data-bma-tourn-entities",JSON.stringify(w)))}catch(w){console.error("Failed to parse entities:",w)}}},3e3);else{const I=C?.message||"Failed to join tournament";typeof neodigmToast<"u"&&neodigmToast.q(I,"danger");const B=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${d.tournamentGuid}"]`);B&&B.setAttribute("data-bma-tourn-wait","false")}}catch(E){console.error("Join tournament error:",E),typeof neodigmToast<"u"&&neodigmToast.q("Network error joining tournament","danger");const O=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${d.tournamentGuid}"]`);O&&O.setAttribute("data-bma-tourn-wait","false")}}}),z.subscribe(e.hierTopics.ROUTE__HOME_ONMOUNT,async(h,m)=>{console.log("[app_events] ROUTE__HOME_ONMOUNT event received");const d=_e();try{const g=await ve.fetchTournaments();console.log("[app_events] Tournaments fetched:",g),g?.rows&&Array.isArray(g.rows)?(d.pushCoreTourn({timestamp:Date.now(),source:"API",data:g.rows}),console.log("[app_events] Pushed to coreTourn, length:",d.coreTourn.length),z.publish(d.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now()}))):console.warn("[app_events] Invalid API response format:",g)}catch(g){console.error("[app_events] Error fetching tournaments:",g),typeof neodigmToast<"u"&&neodigmToast.q("Failed to load tournaments","danger")}}),z.subscribe(e.hierTopics.ROUTE__HOME_HYDRATE,(h,m)=>{console.log("[app_events] ROUTE__HOME_HYDRATE event received");const d=_e();if(d.coreTourn.length===0){console.warn("[app_events] No tournament data in coreTourn array");return}const g=d.coreTourn[d.coreTourn.length-1],b=d.coreTourn.length>1?d.coreTourn[d.coreTourn.length-2]:null;console.log("[app_events] Hydrating with latest data:",g);const y=[];if(b){const C=g.data,I=b.data;C.forEach(B=>{const w=I.find(N=>N.guid===B.guid);w&&w.status!==B.status&&(console.log(`[app_events] Status changed for tournament ${B.guid}: ${w.status} -> ${B.status}`),y.push(B.guid))})}const T=d.appSession?.session_user?.guid,E=[...g.data].sort((C,I)=>{const B=C.status||C.class,w=I.status||I.class,N=C.entities?.guids||[],$=I.entities?.guids||[],P=N.includes(T),K=$.includes(T),Q=(Le,Se)=>{const Pe=new Date(Le.status_time||0).getTime();return new Date(Se.status_time||0).getTime()-Pe},ee=B==="LOCKED"&&P,X=w==="LOCKED"&&K;if(ee&&!X)return-1;if(!ee&&X)return 1;if(ee&&X)return Q(C,I);const W=B==="UPCOMING",H=w==="UPCOMING";if(W&&!H)return-1;if(!W&&H)return 1;if(W&&H)return Q(C,I);const re=B==="COMPLETED"&&P,te=w==="COMPLETED"&&K;if(re&&!te)return-1;if(!re&&te)return 1;if(re&&te)return Q(C,I);const Te=B==="COMPLETED"&&!P,le=w==="COMPLETED"&&!K;return Te&&!le?1:!Te&&le?-1:Q(C,I)}),O=We.categorizeTournaments(E,t,n,T);if(console.log(`[app_events] Categorized into ${O.length} categories for filter: ${t}/${n}`),window._homeRouteRenderCards&&typeof window._homeRouteRenderCards=="function"){if(window._homeRouteRenderCards(O,!0),setTimeout(()=>{a(),console.log("[app_events] Re-applied filter after hydration:",t)},100),y.length>0){const C=g.data;y.forEach(I=>{const B=C.find(w=>w.guid===I);if(B){const w=Math.floor(Math.random()*2e3)+1e3;setTimeout(()=>{z.publish(d.hierTopics.CANVAS__HYDRATE__STATUS,JSON.stringify({guid:I,status:B.status,timestamp:Date.now()}))},w)}})}}else console.warn("[app_events] window._homeRouteRenderCards not available")}),z.subscribe(e.hierTopics.SSE__CORE__TOURN_SYNC,(h,m)=>{console.log("[app_events] SSE__CORE__TOURN_SYNC event received:",m);const d=_e();try{const g=JSON.parse(m);console.log("[app_events] SSE tournament sync data:",g);const b=JSON.parse(g.msg);if(console.log("[app_events] Parsed tournaments array:",b),!Array.isArray(b)){console.warn("[app_events] SSE msg is not an array:",b);return}d.pushCoreTourn({timestamp:Date.now(),source:"SSE",data:b}),console.log("[app_events] Pushed SSE data to coreTourn, length:",d.coreTourn.length),z.publish(d.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"SSE"}))}catch(g){console.error("[app_events] Error processing SSE tournament sync:",g)}}),setTimeout(function(){neodigmSodaPop&&neodigmMarquee&&neodigmEnchantedCTA&&(neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{},1e3),neodigmMetronome.init().pause(800),neodigmMarquee.init().pause(1200),neodigmEnchantedCTA.init(),neodigmCarousel.init()}),neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{NeodigmClaire.showCanv("neodigm-sodapop",.5).setTheme(["warning","success"]).initCanvOn("neodigm-sodapop").waxOn("neodigm-sodapop");const h=document.querySelector("#caption__my-profile");h&&(h.textContent="My Profile");const m=e.appSession?.session_user?.guid;if(console.log("[app_events] User GUID:",m),console.log("[app_events] coreTourn length:",e.coreTourn.length),!m||e.coreTourn.length===0){console.warn("[app_events] Missing user GUID or tournament data");return}const g=e.coreTourn[e.coreTourn.length-1].data;console.log("[app_events] Processing tournaments:",g.length);let b=0,y=0,T=0;g.forEach((E,O)=>{if(!E.tags||!Array.isArray(E.tags)){console.log(`[app_events] Tournament ${O} has no tags or tags not an array`);return}E.tags.forEach((C,I)=>{if(typeof C=="object"&&C!==null&&C[m]){const B=C[m];B==="--badge__ribbon--gold"?b++:B==="--badge__ribbon--silver"?y++:B==="--badge__ribbon--bronze"&&T++}})}),setTimeout(()=>{let E=document.querySelectorAll(".badge-counter");if(E.length===0){const O=document.querySelector("neodigm-sodapop");O&&(E=O.querySelectorAll(".badge-counter"))}E.length>=3?(E[0].textContent=b,E[1].textContent=y,E[2].textContent=T,console.log("[app_events] Updated UI counters successfully")):console.warn("[app_events] Not enough counter elements found")},500)},1e3)},"sodapop_my_profile"),neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{const h=_e(),m=document.querySelector(".play-cntr");p&&(m.dataset.currentTournGuid=p),f&&(m.dataset.currentTournAction=f);const d=m?.dataset?.currentTournGuid,g=m?.dataset?.currentTournAction||"INFO";console.log("[app_events] sodapop_play opened - GUID:",d,"action:",g),(()=>{const N=document.getElementById("btn-join__play--id");if(!N||!d||h.coreTourn.length===0)return;const P=h.coreTourn[h.coreTourn.length-1].data.find(W=>W.guid===d);if(!P)return;const K=h.appSession?.session_user?.guid,Q=P.entities?.guids?.includes(K),ee=P.status,X=g;N.style.display="none",!(ee==="COMPLETED"||ee==="LOCKED"&&!Q)&&(N.style.display="",ee==="UPCOMING"&&!Q?X==="INFO"?(N.textContent="Join",N.dataset.requiresJoin="true"):X==="PLAY"&&(N.textContent="Play",N.dataset.requiresJoin="false"):(N.textContent="Play",N.dataset.requiresJoin="false"))})(),(()=>{if(!d||h.coreTourn.length===0)return;const $=h.coreTourn[h.coreTourn.length-1].data.find(H=>H.guid===d);if(!$)return;const P=document.getElementById("pop-play__caro-info-summary1--id");if(!P)return;const K=H=>{if(!H)return"N/A";const re=new Date(H);return isNaN(re.getTime())?"Invalid Date":re.toLocaleString(void 0,{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit",hour12:!0})},Q=$.status?`info-row__value--${$.status.toLowerCase()}`:"",ee=$.sports_allowed&&Array.isArray($.sports_allowed)?$.sports_allowed.map(H=>{const re=H.key||H,te=$t.find(le=>le.key===re),Te=te?te.group:"default";return`<bma-sport-icon sport="${re}" data-sport-group="${Te}" style="width: 20px; height: 20px;"></bma-sport-icon>`}).join(" "):"N/A";P.innerHTML=`
                                <div class="info-section">
                                    <div class="info-section__title">Competition</div>
                                    <div class="info-row">
                                        <span class="info-row__label">Total Games</span>
                                        <span class="info-row__value">${$.matches_expanded?.length||0}</span>
                                    </div>
                                    <div class="info-row">
                                        <span class="info-row__label">Sports</span>
                                        <span class="info-row__value">${ee}</span>
                                    </div>
                                </div>

                                <div class="info-section">
                                    <div class="info-section__title">Tournament Schedule</div>
                                    <div class="info-row">
                                        <span class="info-row__label">Start Time</span>
                                        <span class="info-row__value">${K($.window_start_time)}</span>
                                    </div>
                                    <div class="info-row">
                                        <span class="info-row__label">End Time</span>
                                        <span class="info-row__value">${K($.window_end_time)}</span>
                                    </div>
                                    <div class="info-row">
                                        <span class="info-row__label">Status</span>
                                        <span class="info-row__value ${Q}">${$.status||"Unknown"}</span>
                                    </div>
                                </div>

                                <div class="info-section">
                                    <div class="info-section__title">Participation</div>
                                    <div class="info-row">
                                        <span class="info-row__label">Entry Fee</span>
                                        <span class="info-row__value">FREE</span>
                                    </div>
                                    <div class="info-row">
                                        <span class="info-row__label">Tournament Dollars</span>
                                        <span class="info-row__value">TD$ ${$.tournament_dollars||0}</span>
                                    </div>
                                    <div class="info-row info-row--entrants">
                                        <span class="info-row__label">Entrants</span>
                                        <div class="info-row__value-with-bar">
                                            <span class="info-row__value">${$.entities?.guids?.length||0} / ${$.entities?.max||0}</span>
                                            <div class="info-progress-bar">
                                                <div class="info-progress-fill" style="width: ${(($.entities?.guids?.length||0)/($.entities?.max||1)*100).toFixed(1)}%"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;const X=document.getElementById("pop-play__caro-info-summary2--id");X&&(X.innerHTML="");const W=document.getElementById("pop-play__caro-info-list--id");W&&$.matches_expanded&&Array.isArray($.matches_expanded)&&(W.innerHTML=`
                                    <div class="info-section">
                                        <div class="info-section__title">Matches</div>
                                    </div>
                                `+$.matches_expanded.map(H=>{const re=H.scoreboard_data?typeof H.scoreboard_data=="string"?H.scoreboard_data:JSON.stringify(H.scoreboard_data):"";return`
                                        <bma-match-status
                                            data-match-guid="${H.guid||H.odds_id||H.id||""}"
                                            data-match-title="${H.short_title||H.title||"Match"}"
                                            data-match-scheduled-at="${H.scheduled_at||""}"
                                            data-match-home-team="${H.home_team_id||"Home"}"
                                            data-match-away-team="${H.away_team_id||"Away"}"
                                            data-match-home-score="${H.home_team_score!==null&&H.home_team_score!==void 0?H.home_team_score:""}"
                                            data-match-away-score="${H.away_team_score!==null&&H.away_team_score!==void 0?H.away_team_score:""}"
                                            data-match-scoreboard="${re.replace(/"/g,"&quot;")}"
                                            data-match-sport-id="${H.sport_id||""}"
                                            data-sync-theme="dark"
                                        ></bma-match-status>
                                    `}).join(""))})(),setTimeout(()=>{const N=h.appSession?.session_user?.guid;d&&ve.fetchLeaderboard(d).then($=>{const P=document.getElementById("pop-play__caro-leaderboard--id");if(!P)return;const K=$?.data||$?.rows;if(K&&K.length>0){const ee=h.coreTourn[h.coreTourn.length-1]?.data.find(te=>te.guid===d);P.innerHTML=K.map((te,Te)=>{let le="";if(ee?.tags&&Array.isArray(ee.tags)){const Pe=ee.tags.find(ue=>typeof ue=="object"&&ue!==null&&ue[te.user_guid]?ue[te.user_guid].startsWith("--badge__ribbon--"):!1);if(Pe){const ue=Pe[te.user_guid];ue==="--badge__ribbon--gold"?le="badge-trophy--gold":ue==="--badge__ribbon--silver"?le="badge-trophy--silver":ue==="--badge__ribbon--bronze"&&(le="badge-trophy--bronze")}}const Le=te.combined_betslips?typeof te.combined_betslips=="string"?te.combined_betslips:JSON.stringify(te.combined_betslips):"[]";let Se="[]";if(te.combined_betslips&&ee?.matches_expanded){const Pe=typeof te.combined_betslips=="string"?JSON.parse(te.combined_betslips):te.combined_betslips,ue=[...new Set(Pe.map(Y=>Y.coreMatches__guid||Y.match_guid||Y.odds_id).filter(Boolean))],x=ee.matches_expanded.filter(Y=>{const j=Y.guid||Y.id||Y.odds_id;return ue.includes(j)});Se=JSON.stringify(x)}return`
                                                <bma-leaderboard-card
                                                    data-rank="${Te+1}"
                                                    data-username="${te.username||"Unknown"}"
                                                    data-user-guid="${te.user_guid||""}"
                                                    data-tournament-dollars="${te.calculated_tournament_dollars||0}"
                                                    data-total-betslips="${te.total_betslips||0}"
                                                    data-total-payout="${te.total_payout||0}"
                                                    data-combined-betslips="${Le.replace(/"/g,"&quot;")}"
                                                    data-user-matches="${Se.replace(/"/g,"&quot;")}"
                                                    data-badge-class="${le}"
                                                    data-is-current-user="${te.user_guid===N}"
                                                    data-sync-theme="dark"
                                                ></bma-leaderboard-card>
                                            `}).join("");const X=K.findIndex(te=>te.user_guid===N),W=X>=0?X+1:K.length,H=ee?.entities?.guids?.length||K.length,re=document.getElementById("dashboard-rank");re&&(re.innerHTML=`
                                                <span class="tourn-dashboard__rank-text">${W}/${H}</span>
                                            `)}else P.innerHTML=`
                                            <div class="leaderboard-empty">
                                                <p>No leaderboard data available yet.</p>
                                                <p class="leaderboard-empty__subtitle">Be the first to place a bet!</p>
                                            </div>
                                        `}).catch($=>{console.error("[app_events] Error fetching leaderboard:",$);const P=document.getElementById("pop-play__caro-leaderboard--id");P&&(P.innerHTML=`
                                            <div class="leaderboard-empty">
                                                <p>Unable to load leaderboard data.</p>
                                            </div>
                                        `)})},600);let T=g==="PLAY"||g==="JOIN"?"PLAY":g;if(!d||h.coreTourn.length===0||h.coreTourn[h.coreTourn.length-1].data.find(P=>P.guid===d)?.status==="COMPLETED"&&(T="LEADERBOARD",console.log("[app_events] Tournament is COMPLETED, defaulting to LEADERBOARD")),T){const N=`ROUTE.HOME.SODAPOP_PLAY.${T}`;console.log("[app_events] Publishing initial topic:",N),z.publish(N,JSON.stringify({tournamentGuid:d,timestamp:Date.now()}))}if(!d||h.coreTourn.length===0)return;const O=h.coreTourn[h.coreTourn.length-1].data.find(N=>N.guid===d);We.renderMatchCards(O);const C=document.querySelector("#pop-play__tourn-caption--id"),I=document.querySelector("#pop-play__tourn-tagline--id");C&&(C.textContent=O.caption),I&&(I.textContent=O.tagline),console.log("[Modal Debug] Updating dashboard for tournament:",O?.caption);const B=document.querySelector(".head-caption");console.log("[Modal Debug] Modal header found:",!!B),B&&console.log("[Modal Debug] Modal classes:",B.className),We.updateTournamentDashboard(O);const w=document.getElementById("dashboard-rank");if(w){const N=O.entities?.guids?.length||0;w.innerHTML=`
                                <span class="tourn-dashboard__rank-text">-/${N}</span>
                            `}},1e3)},"sodapop_play"))},3e3),setTimeout(function(){neodigmSodaPop&&NeodigmClaire&&neodigmSodaPop.setOnClose(function(){return!0})},4e3)}},_f={__name:"App",setup(e){const t=gt(),n=_e();return setTimeout(function(){neodigmOpt.mvvLegit&&mvvLegit.setNavConroller((a=null)=>{neodigmOpt.N55_DEBUG_lOG&&neodigmToast.q(`Legit route: ${a}`,"primary"),t.push({name:a})}).setOnState((a=null)=>{a&&neodigmOpt.ROOT&&(neodigmOpt.ROOT.dataset.mvvLegit=a)}).init({BASE:ve.API_baseURI})},2e3),setTimeout(()=>{n.appCLIFeatures.features.sse.state&&pa.establishSSE("https://machfive-bmacdev-rest.onrender.com/v5/sse?appid=BMACORE&sseid=user%40example.com&lastkey=123",n.appSession.session_user.guid,n,!0)},3e3),setTimeout(()=>{We.bindAppListeners(n)},3e3),t.beforeEach((a,s,o)=>{a.name=="splash_route"||a.name&&mvvLegit&&mvvLegit.isRouteAllowed(a.name)?o():o(!1)}),(a,s)=>(Xe(),so(Ft(Pi),null,{default:es(({Component:o})=>[Ue(Mc,{name:"slide-left"},{default:es(()=>[(Xe(),so($l(o)))]),_:2},1024)]),_:1}))}};class yf extends HTMLElement{constructor(){super(),this.clockInterval=null}connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this.startClock()}disconnectedCallback(){this.clockInterval&&clearInterval(this.clockInterval)}static get observedAttributes(){return["data-sync-theme","data-user-name"]}attributeChangedCallback(t,n,a){this.shadowRoot&&n!==a&&this.render()}startClock(){this.updateTime(),this.clockInterval=setInterval(()=>{this.updateTime()},24e3)}updateTime(){const t=this.shadowRoot?.querySelector(".status-time");if(t){const n=new Date,a=n.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0}),s=n.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});t.textContent=`${s} ${a}`}}handleLogoClick(t){t.preventDefault(),z.publish("WC.APP.HEAD_TOP.LOGO",JSON.stringify({timestamp:Date.now()}))}handleProfileClick(t){t.preventDefault(),z.publish("WC.APP.HEAD_TOP.USER_PROFILE",JSON.stringify({timestamp:Date.now()}))}render(){const a=(document.getElementById("app")?.getAttribute("data-sync-theme")||"dark")==="dark",s=this.getAttribute("data-user-name")||"Guest";this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: block;
          position: sticky;
          top: 0;
          z-index: 100;
          width: 100%;
          /* Premium dark gradient - darkest of the three headers */
          background: ${a?"#101010":`linear-gradient(
                180deg,
                rgba(252, 252, 252, 0.98) 0%,
                rgba(248, 248, 248, 0.95) 100%
              )`};
          backdrop-filter: blur(15px) saturate(120%);
          /* Subtle premium border - white */
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          /* Premium depth shadow */
          box-shadow:
            inset 0 -1px 0 rgba(0, 0, 0, 0.3),
            0 2px 8px rgba(0, 0, 0, 0.2),
            0 4px 16px rgba(0, 0, 0, 0.1);
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
          color: ${a?"rgba(255, 255, 255, 0.85)":"rgba(0, 0, 0, 0.85)"};
          text-shadow: ${a?"0 1px 2px rgba(0, 0, 0, 0.3)":"none"};
        }

        .status-time {
          font-size: 0.8rem;
          font-weight: 400;
          color: ${a?"rgba(255, 255, 255, 0.5)":"rgba(0, 0, 0, 0.5)"};
        }

        .profile-section {
          grid-area: head_top_user_profile;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          user-select: none;
        }

        .profile-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: ${a?"rgba(32, 32, 32, 0.8)":"rgba(250, 250, 250, 0.8)"};
          background-image: var( --nav-icon__account_circle--${a?"dark":"vlight"} );
          background-size: 112% 112%;
          background-position: center;
          background-repeat: no-repeat;
          border: 2px solid ${a?"rgba(255, 215, 0, 0.2)":"rgba(255, 215, 0, 0.3)"};
          cursor: pointer;
          transition: all 0.3s ease;
          opacity: 0.8;
        }

        .profile-icon:hover {
          transform: scale(1.05);
          opacity: 1;
          border-color: rgba(255, 215, 0, 0.5);
          background-color: ${a?"rgba(255, 215, 0, 0.1)":"rgba(255, 215, 0, 0.05)"};
          box-shadow: 0 0 12px rgba(255, 215, 0, 0.3);
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
    `;const o=this.shadowRoot.querySelector("#logoLink"),r=this.shadowRoot.querySelector("#profileIcon");o&&o.addEventListener("click",i=>this.handleLogoClick(i)),r&&(r.addEventListener("click",i=>this.handleProfileClick(i)),r.addEventListener("keypress",i=>{(i.key==="Enter"||i.key===" ")&&this.handleProfileClick(i)})),this.updateTime()}}customElements.define("bma-app-head-top",yf);class vf extends HTMLElement{constructor(){super(),this.selectedTab="head_mid_lobby"}connectedCallback(){this.attachShadow({mode:"open"}),this.render()}static get observedAttributes(){return["data-sync-theme","data-selected-tab"]}attributeChangedCallback(t,n,a){this.shadowRoot&&n!==a&&(t==="data-selected-tab"&&(this.selectedTab=a||"head_mid_lobby"),this.render())}handleTabClick(t,n){this.selectedTab=t,this.setAttribute("data-selected-tab",t),z.publish(n,JSON.stringify({tab:t,timestamp:Date.now()})),this.render()}render(){const a=(document.getElementById("app")?.getAttribute("data-sync-theme")||"dark")==="dark",s=[{name:"head_mid_lobby",caption:"Tournament Lobby",mobileCaption:"Lobby",topic:"WC.APP.HEAD_MID.HEAD_MID_LOBBY"},{name:"head_mid_my",caption:"My Tournaments",mobileCaption:"My Tourneys",topic:"WC.APP.HEAD_MID.HEAD_MID_MY"},{name:"head_mid_completed",caption:"Completed Tournaments",mobileCaption:"Completed Tourneys",topic:"WC.APP.HEAD_MID.HEAD_MID_COMPLETED"},{name:"head_mid_leaderboard",caption:"Leaderboard Ranking",mobileCaption:"Leaderboard",topic:"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD"},{name:"head_mid_squad",caption:"My Squads",mobileCaption:"Squads",topic:"WC.APP.HEAD_MID.HEAD_MID_SQUAD"}],o=r=>`
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
          /* Darker recessed background similar to sports bar but slightly lighter */
          background: ${a?"#242424":`linear-gradient(
                180deg,
                rgba(250, 250, 250, 0.95) 0%,
                rgba(245, 245, 245, 0.9) 100%
              )`};
          backdrop-filter: blur(10px);
          /* Simple dark border without glow */
          border-bottom: 1px solid rgba(0, 0, 0, 0.3);
          /* Subtle depth shadows */
          box-shadow:
            inset 0 1px 2px rgba(0, 0, 0, 0.2),
            0 2px 6px rgba(0, 0, 0, 0.1);
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

        /* Unselected state - matching sports bar style */
        .tab-unselected {
          color: ${a?"rgba(255, 255, 255, 0.5)":"rgba(0, 0, 0, 0.5)"};
          border-bottom-color: transparent;
          position: relative;
        }

        /* Unselected hover state - subtle highlight */
        .tab-unselected:hover {
          color: ${a?"rgba(255, 255, 255, 0.8)":"rgba(0, 0, 0, 0.75)"};
          background: ${a?"linear-gradient(180deg, transparent 0%, rgba(255, 215, 0, 0.05) 100%)":"linear-gradient(180deg, transparent 0%, rgba(255, 215, 0, 0.03) 100%)"};
          transform: translateY(-1px);
          transition: all 0.3s ease;
        }

        /* Selected state - gold accent matching primary nav importance */
        .tab-selected {
          color: ${a?"#FFD700":"#B28F09"};
          background: ${a?"linear-gradient(180deg, rgba(255, 215, 0, 0.1) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255, 215, 0, 0.08) 0%, transparent 100%)"};
          font-weight: 700;
          position: relative;
        }

        /* Gold underline for selected tab with animation */
        .tab-selected::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 60%;
          height: 3px;
          background: #FFD700;
          border-radius: 2px;
          opacity: 0.8;
          animation: slideIn 0.3s ease forwards;
        }

        @keyframes slideIn {
          from {
            transform: translateX(-50%) scaleX(0);
          }
          to {
            transform: translateX(-50%) scaleX(1);
          }
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
    `,s.forEach(r=>{const i=this.shadowRoot.querySelector(`[data-tab="${r.name}"]`);i&&(i.addEventListener("click",()=>this.handleTabClick(r.name,r.topic)),i.addEventListener("keypress",l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),this.handleTabClick(r.name,r.topic))}))})}}customElements.define("bma-app-head-mid",vf);class Tf extends HTMLElement{constructor(){super(),this.selectedChip="all",this.savedScrollPosition=0}connectedCallback(){this.attachShadow({mode:"open"}),this.render()}static get observedAttributes(){return["data-sync-theme","data-selected-chip"]}attributeChangedCallback(t,n,a){this.shadowRoot&&n!==a&&(t==="data-selected-chip"&&(this.selectedChip=a||"all"),this.render())}handleChipClick(t,n){const a=this.shadowRoot.querySelector(".chips-container");a&&(this.savedScrollPosition=a.scrollLeft),this.selectedChip=t,this.setAttribute("data-selected-chip",t),z.publish("WC.APP.HEAD_SPORTS",JSON.stringify({key:t,group:n,timestamp:Date.now()})),this.render()}scrollToPrev(){const t=this.shadowRoot.querySelector(".chips-container");t&&(t.scrollBy({left:-256,behavior:"smooth"}),z.publish("WC.APP.HEAD_SPORTS.PREV",JSON.stringify({timestamp:Date.now()})))}scrollToNext(){const t=this.shadowRoot.querySelector(".chips-container");t&&(t.scrollBy({left:256,behavior:"smooth"}),z.publish("WC.APP.HEAD_SPORTS.NEXT",JSON.stringify({timestamp:Date.now()})))}initDragScroll(){const t=this.shadowRoot.querySelector(".chips-container");if(!t)return;let n=!1,a,s;t.addEventListener("mousedown",o=>{n=!0,t.style.cursor="grabbing",a=o.pageX-t.offsetLeft,s=t.scrollLeft,z.publish("WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START",JSON.stringify({action:"start",scrollPosition:s,timestamp:Date.now()}))}),t.addEventListener("mouseleave",()=>{n=!1,t.style.cursor="grab"}),t.addEventListener("mouseup",()=>{n=!1,t.style.cursor="grab"}),t.addEventListener("mousemove",o=>{if(!n)return;o.preventDefault();const i=(o.pageX-t.offsetLeft-a)*2;t.scrollLeft=s-i})}render(){const a=(document.getElementById("app")?.getAttribute("data-sync-theme")||"dark")==="dark",r=(_e().appMeta?.sports||[]).filter(m=>m.active===!0),i=["NFL","NBA","NHL","EPL","MLB","NCAAF","MMA","Boxing"],l=[...r].sort((m,d)=>{const g=m.title||m.description||"",b=d.title||d.description||"",y=i.indexOf(g),T=i.indexOf(b);return y!==-1&&T!==-1?y-T:y!==-1?-1:T!==-1?1:g.toLowerCase().localeCompare(b.toLowerCase())}),u=[{key:"all",group:"All",title:"HOME",description:"All Sports"},{key:"multi",group:"Multi",title:"Multiple Sport",description:"Multi-Sport Tournaments"},...l],c=m=>{const d=this.selectedChip===m.key,g=m.key==="all";m.key;let b="";return g||(b=`<bma-sport-icon sport="${m.key}" data-sport-group="${m.group}"></bma-sport-icon>`),`
        <div
          class="sport-chip ${d?"chip-selected":"chip-unselected"}"
          data-chip="${m.key}"
          role="button"
          tabindex="0"
          aria-label="${m.description||m.title}"
        >
          ${b}
          <span class="chip-title">${m.title||m.group}</span>
        </div>
      `};this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: block;
          width: 100%;
          /* Darker, recessed appearance - distinct from header above */
          background: ${a?"#101010":`linear-gradient(
                180deg,
                rgba(250, 250, 250, 0.95) 0%,
                rgba(240, 240, 240, 0.9) 100%
              )`};
          backdrop-filter: blur(10px);
          border-top: 1px solid ${a?"rgba(0, 0, 0, 0.8)":"rgba(0, 0, 0, 0.1)"};
          border-bottom: 2px solid ${a?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"};
          box-shadow:
            inset 0 2px 4px rgba(0, 0, 0, 0.2),
            0 2px 8px rgba(0, 0, 0, 0.1);
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
          border-radius: 0;
          background-color: ${a?"rgba(32, 32, 32, 0.8)":"rgba(255, 255, 255, 0.8)"};
          background-size: 112% 112%;
          background-position: center;
          background-repeat: no-repeat;
          border: 1px solid ${a?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"};
          cursor: pointer;
          transition: all 0.2s ease;
          opacity: 0.6;
        }

        .nav-icon:hover {
          opacity: 1;
          background-color: ${a?"rgba(0, 230, 118, 0.1)":"rgba(0, 230, 118, 0.05)"};
          border-color: ${a?"rgba(0, 230, 118, 0.3)":"rgba(0, 230, 118, 0.2)"};
          transform: scale(1.05);
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
          border-radius: 0;
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
          color: ${a?"rgba(255, 255, 255, 0.5)":"rgba(0, 0, 0, 0.6)"};
          background: ${a?"rgba(32, 32, 32, 0.6)":"rgba(255, 255, 255, 0.6)"};
          border: 1px solid ${a?"rgba(255, 255, 255, 0.08)":"rgba(0, 0, 0, 0.08)"};
          border-bottom: 2px solid transparent;
        }

        .chip-unselected:hover {
          color: ${a?"rgba(255, 255, 255, 0.85)":"rgba(0, 0, 0, 0.85)"};
          background: ${a?"rgba(46, 139, 87, 0.15)":"rgba(46, 139, 87, 0.1)"};
          border-bottom-color: ${a?"rgba(0, 230, 118, 0.3)":"rgba(0, 230, 118, 0.4)"};
          transform: translateY(-1px);
        }

        .chip-selected {
          color: ${a?"#00E676":"#00C853"};
          background: ${a?"rgba(0, 230, 118, 0.1)":"rgba(0, 230, 118, 0.08)"};
          border: 1px solid ${a?"rgba(0, 230, 118, 0.3)":"rgba(0, 230, 118, 0.25)"};
          border-bottom: 1px solid ${a?"rgba(0, 230, 118, 0.3)":"rgba(0, 230, 118, 0.25)"};
          box-shadow: 0 2px 8px rgba(0, 230, 118, 0.15);
          font-weight: 700;
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
    `,u.forEach(m=>{const d=this.shadowRoot.querySelector(`[data-chip="${m.key}"]`);d&&d.addEventListener("click",()=>this.handleChipClick(m.key,m.group))});const p=this.shadowRoot.querySelector("#navPrev"),f=this.shadowRoot.querySelector("#navNext");p&&p.addEventListener("click",()=>this.scrollToPrev()),f&&f.addEventListener("click",()=>this.scrollToNext()),this.initDragScroll();const h=this.shadowRoot.querySelector(".chips-container");h&&this.savedScrollPosition>0&&(h.scrollLeft=this.savedScrollPosition)}}customElements.define("bma-app-head-sports",Tf);class Ef extends HTMLElement{constructor(){super(),this.selectedItem="foot_all_sports"}connectedCallback(){this.attachShadow({mode:"open"}),this.render()}static get observedAttributes(){return["data-sync-theme","data-selected-item"]}attributeChangedCallback(t,n,a){this.shadowRoot&&n!==a&&(t==="data-selected-item"&&(this.selectedItem=a||"foot_all_sports"),this.render())}handleItemClick(t,n){this.selectedItem=t,this.setAttribute("data-selected-item",t),z.publish(n,JSON.stringify({item:t,timestamp:Date.now()})),this.render()}render(){const a=(document.getElementById("app")?.getAttribute("data-sync-theme")||"dark")==="dark",s=[{name:"foot_all_sports",caption:"Lobby",iconVar:"--nav-icon__sports--",topic:"WC.APP.FOOT.ALL_SPORTS"},{name:"foot_my_tourneys",caption:"My Tourneys",iconVar:"--nav-icon__trophy--",topic:"WC.APP.FOOT.MY_TOURNEYS"},{name:"foot_leaderboard",caption:"Leaderboard",iconVar:"--nav-icon__leaderboard--",topic:"WC.APP.FOOT.LEADERBOARD"},{name:"foot_my_account",caption:"My Profile",iconVar:"--nav-icon__my_profile_circle--",topic:"WC.APP.FOOT.MY_PROFILE"}],o=r=>`
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
          background: ${a?"#101010":"rgba(245, 245, 245, 0.64)"};
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
          padding: 0.25rem 0;
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
          padding: 0.25rem 0.25rem;
          cursor: pointer;
          transition: all 0.2s ease;
          border-top: 2px solid transparent;
          user-select: none;
          min-height: 48px;
        }

        .nav-icon {
          width: 24px;
          height: 24px;
          border-radius: 0;
          background-color: transparent;
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
          transition: all 0.2s ease;
          filter: brightness(70%);
          margin-bottom: 0.125rem;
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
          color: ${a?"#FFFFFF":"#000000"};
          border-top-color: ${a?"rgba(255, 255, 255, 0.8)":"rgba(0, 0, 0, 0.8)"};
        }

        .nav-selected .nav-icon {
          filter: brightness(120%);
        }
      </style>

      <div class="foot-container">
        ${s.map(r=>o(r)).join("")}
      </div>
    `,s.forEach(r=>{const i=this.shadowRoot.querySelector(`[data-item="${r.name}"]`);i&&(i.addEventListener("click",()=>this.handleItemClick(r.name,r.topic)),i.addEventListener("keypress",l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),this.handleItemClick(r.name,r.topic))}))})}}customElements.define("bma-app-foot",Ef);class Sf extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}static get observedAttributes(){return["data-corebetslip"]}attributeChangedCallback(t,n,a){n!==a&&this.render()}get betSlipData(){const t=this.getAttribute("data-corebetslip");if(!t)return null;try{return JSON.parse(t)}catch(n){return console.error("[bma-bet-existing] Failed to parse data-corebetslip:",n),null}}render(){const t=this.betSlipData;if(!t){this.shadowRoot.innerHTML="<div>Invalid bet data</div>";return}const n=t.bet||[];if(n.length===0){this.shadowRoot.innerHTML="<div>No bet data</div>";return}const a=n[0],s=a.short_title||"Match Info N/A",r=Object.keys(a).filter(y=>y!=="short_title")[0]||"Unknown Team",i=a[r],l=i.odds||"N/A",u=i.type||"N/A",c=parseFloat(i.stake||0).toFixed(2),p=parseFloat(i.payout||0).toFixed(2),f=i.reconciled!==!1,h=f&&parseFloat(p)>parseFloat(c),m=f&&parseFloat(p)<=parseFloat(c);let d="";f?h?d="win":m&&(d="loss"):d="unreconciled";const g=t.status_time?Kn.formatDateLocal(t.status_time):"";let b=r;if(u==="spread"&&i.point){const y=parseFloat(i.point)>0?`+${i.point}`:i.point;b=`${r} ${y}`}else u==="total"&&i.point&&(b=`${i.team==="over"?"Over":"Under"} ${i.point}`);this.shadowRoot.innerHTML=`
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

        /* Border color states */
        .bet-existing-card.unreconciled {
          border-color: rgba(247, 198, 13, 0.5);
        }

        .bet-existing-card.win {
          border-color: rgba(20, 185, 99, 0.5);
        }

        .bet-existing-card.loss {
          border-color: rgba(185, 20, 24, 0.5);
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

      <div class="bet-existing-card ${d}">
        <div class="grid_header">
          <div class="match_desc">${s}</div>
          <div class="match_date">${g}</div>
        </div>
        <div class="grid_content">
          <!-- Row 1 -->
          <div class="content_team_points">${b}</div>
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
        <div class="tourn-dashboard__logo">
          <img src="https://bma-master.github.io/bma-core/img/BMT-White-Secondary.png" alt="BMA Tournament" />
        </div>
        <section class="tourn-dashboard__center">
          <h3 id="pop-play__tourn-caption--id" class="pop-play__tourn-caption">Tournament</h3>
          <p id="pop-play__tourn-tagline--id" class="pop-play__tourn-tagline">Loading...</p>
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

`;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{document.body.insertAdjacentHTML("beforeend",zo)}):document.body.insertAdjacentHTML("beforeend",zo);window.deferredPWAPrompt=null;window.addEventListener("beforeinstallprompt",e=>{console.log("[Global] beforeinstallprompt event fired"),e.preventDefault(),window.deferredPWAPrompt=e,window.dispatchEvent(new CustomEvent("pwa-installable"))});window.addEventListener("appinstalled",()=>{console.log("[Global] appinstalled event fired"),window.deferredPWAPrompt=null,window.dispatchEvent(new CustomEvent("pwa-installed"))});const xa=ld(_f);xa.config.devtools=!1;xa.use(ud());xa.use(hs);xa.mount("#app");if("serviceWorker"in navigator){let e=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{e||(e=!0,window.neodigmToast&&window.neodigmToast.q("App updated! Reloading...","success"),setTimeout(()=>{window.location.reload()},1e3))}),document.addEventListener("visibilitychange",()=>{document.hidden||navigator.serviceWorker.getRegistration().then(t=>{t?.update()})})}window.addEventListener("resize",e=>{window.requestAnimationFrame(()=>{neodigmMetronome.subscribe(()=>{neodigmMetronome.unsubscribe(303),neodigmCarousel&&[...document.querySelectorAll("neodigm-carousel")].forEach(n=>{neodigmCarousel.init().nav({id:n.id,nav:"resize"},!1)})},303)})});
