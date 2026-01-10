(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function fs(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const he={},dn=[],dt=()=>{},Jr=()=>!1,pa=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),hs=e=>e.startsWith("onUpdate:"),ke=Object.assign,gs=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ni=Object.prototype.hasOwnProperty,ce=(e,t)=>Ni.call(e,t),te=Array.isArray,pn=e=>fa(e)==="[object Map]",Vr=e=>fa(e)==="[object Set]",se=e=>typeof e=="function",Se=e=>typeof e=="string",$t=e=>typeof e=="symbol",me=e=>e!==null&&typeof e=="object",zr=e=>(me(e)||se(e))&&se(e.then)&&se(e.catch),Qr=Object.prototype.toString,fa=e=>Qr.call(e),Li=e=>fa(e).slice(8,-1),Xr=e=>fa(e)==="[object Object]",ms=e=>Se(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Sn=fs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ha=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},Ii=/-\w/g,ze=ha(e=>e.replace(Ii,t=>t.slice(1).toUpperCase())),Di=/\B([A-Z])/g,Ht=ha(e=>e.replace(Di,"-$1").toLowerCase()),ga=ha(e=>e.charAt(0).toUpperCase()+e.slice(1)),wa=ha(e=>e?`on${ga(e)}`:""),Dt=(e,t)=>!Object.is(e,t),xa=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Zr=(e,t,n,a=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:a,value:n})},Mi=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Bi=e=>{const t=Se(e)?Number(e):NaN;return isNaN(t)?e:t};let Ks;const ma=()=>Ks||(Ks=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function _s(e){if(te(e)){const t={};for(let n=0;n<e.length;n++){const a=e[n],s=Se(a)?Hi(a):_s(a);if(s)for(const r in s)t[r]=s[r]}return t}else if(Se(e)||me(e))return e}const Fi=/;(?![^(]*\))/g,Ui=/:([^]+)/,$i=/\/\*[^]*?\*\//g;function Hi(e){const t={};return e.replace($i,"").split(Fi).forEach(n=>{if(n){const a=n.split(Ui);a.length>1&&(t[a[0].trim()]=a[1].trim())}}),t}function Bt(e){let t="";if(Se(e))t=e;else if(te(e))for(let n=0;n<e.length;n++){const a=Bt(e[n]);a&&(t+=a+" ")}else if(me(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ki="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Yi=fs(Ki);function eo(e){return!!e||e===""}const to=e=>!!(e&&e.__v_isRef===!0),no=e=>Se(e)?e:e==null?"":te(e)||me(e)&&(e.toString===Qr||!se(e.toString))?to(e)?no(e.value):JSON.stringify(e,ao,2):String(e),ao=(e,t)=>to(t)?ao(e,t.value):pn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[a,s],r)=>(n[Ra(a,r)+" =>"]=s,n),{})}:Vr(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Ra(n))}:$t(t)?Ra(t):me(t)&&!te(t)&&!Xr(t)?String(t):t,Ra=(e,t="")=>{var n;return $t(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};let Re;class so{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Re,!t&&Re&&(this.index=(Re.scopes||(Re.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Re;try{return Re=this,t()}finally{Re=n}}}on(){++this._on===1&&(this.prevScope=Re,Re=this)}off(){this._on>0&&--this._on===0&&(Re=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,a;for(n=0,a=this.effects.length;n<a;n++)this.effects[n].stop();for(this.effects.length=0,n=0,a=this.cleanups.length;n<a;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,a=this.scopes.length;n<a;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function ro(e){return new so(e)}function oo(){return Re}function ji(e,t=!1){Re&&Re.cleanups.push(e)}let fe;const Ca=new WeakSet;class io{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Re&&Re.active&&Re.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ca.has(this)&&(Ca.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||co(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ys(this),uo(this);const t=fe,n=Ze;fe=this,Ze=!0;try{return this.fn()}finally{po(this),fe=t,Ze=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)vs(t);this.deps=this.depsTail=void 0,Ys(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ca.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Wa(this)&&this.run()}get dirty(){return Wa(this)}}let lo=0,An,On;function co(e,t=!1){if(e.flags|=8,t){e.next=On,On=e;return}e.next=An,An=e}function bs(){lo++}function ys(){if(--lo>0)return;if(On){let t=On;for(On=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;An;){let t=An;for(An=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(a){e||(e=a)}t=n}}if(e)throw e}function uo(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function po(e){let t,n=e.depsTail,a=n;for(;a;){const s=a.prevDep;a.version===-1?(a===n&&(n=s),vs(a),qi(a)):t=a,a.dep.activeLink=a.prevActiveLink,a.prevActiveLink=void 0,a=s}e.deps=t,e.depsTail=n}function Wa(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(fo(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function fo(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Ln)||(e.globalVersion=Ln,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Wa(e))))return;e.flags|=2;const t=e.dep,n=fe,a=Ze;fe=e,Ze=!0;try{uo(e);const s=e.fn(e._value);(t.version===0||Dt(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{fe=n,Ze=a,po(e),e.flags&=-3}}function vs(e,t=!1){const{dep:n,prevSub:a,nextSub:s}=e;if(a&&(a.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=a,e.nextSub=void 0),n.subs===e&&(n.subs=a,!a&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)vs(r,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function qi(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Ze=!0;const ho=[];function St(){ho.push(Ze),Ze=!1}function At(){const e=ho.pop();Ze=e===void 0?!0:e}function Ys(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=fe;fe=void 0;try{t()}finally{fe=n}}}let Ln=0;class Gi{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ts{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!fe||!Ze||fe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==fe)n=this.activeLink=new Gi(fe,this),fe.deps?(n.prevDep=fe.depsTail,fe.depsTail.nextDep=n,fe.depsTail=n):fe.deps=fe.depsTail=n,go(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const a=n.nextDep;a.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=a),n.prevDep=fe.depsTail,n.nextDep=void 0,fe.depsTail.nextDep=n,fe.depsTail=n,fe.deps===n&&(fe.deps=a)}return n}trigger(t){this.version++,Ln++,this.notify(t)}notify(t){bs();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ys()}}}function go(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let a=t.deps;a;a=a.nextDep)go(a)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const ta=new WeakMap,en=Symbol(""),Ja=Symbol(""),In=Symbol("");function Ce(e,t,n){if(Ze&&fe){let a=ta.get(e);a||ta.set(e,a=new Map);let s=a.get(n);s||(a.set(n,s=new Ts),s.map=a,s.key=n),s.track()}}function Tt(e,t,n,a,s,r){const o=ta.get(e);if(!o){Ln++;return}const i=l=>{l&&l.trigger()};if(bs(),t==="clear")o.forEach(i);else{const l=te(e),f=l&&ms(n);if(l&&n==="length"){const u=Number(a);o.forEach((d,h)=>{(h==="length"||h===In||!$t(h)&&h>=u)&&i(d)})}else switch((n!==void 0||o.has(void 0))&&i(o.get(n)),f&&i(o.get(In)),t){case"add":l?f&&i(o.get("length")):(i(o.get(en)),pn(e)&&i(o.get(Ja)));break;case"delete":l||(i(o.get(en)),pn(e)&&i(o.get(Ja)));break;case"set":pn(e)&&i(o.get(en));break}}ys()}function Wi(e,t){const n=ta.get(e);return n&&n.get(t)}function sn(e){const t=ie(e);return t===e?t:(Ce(t,"iterate",In),et(e)?t:t.map(De))}function Es(e){return Ce(e=ie(e),"iterate",In),e}const Ji={__proto__:null,[Symbol.iterator](){return Na(this,Symbol.iterator,De)},concat(...e){return sn(this).concat(...e.map(t=>te(t)?sn(t):t))},entries(){return Na(this,"entries",e=>(e[1]=De(e[1]),e))},every(e,t){return ht(this,"every",e,t,void 0,arguments)},filter(e,t){return ht(this,"filter",e,t,n=>n.map(De),arguments)},find(e,t){return ht(this,"find",e,t,De,arguments)},findIndex(e,t){return ht(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return ht(this,"findLast",e,t,De,arguments)},findLastIndex(e,t){return ht(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return ht(this,"forEach",e,t,void 0,arguments)},includes(...e){return La(this,"includes",e)},indexOf(...e){return La(this,"indexOf",e)},join(e){return sn(this).join(e)},lastIndexOf(...e){return La(this,"lastIndexOf",e)},map(e,t){return ht(this,"map",e,t,void 0,arguments)},pop(){return bn(this,"pop")},push(...e){return bn(this,"push",e)},reduce(e,...t){return js(this,"reduce",e,t)},reduceRight(e,...t){return js(this,"reduceRight",e,t)},shift(){return bn(this,"shift")},some(e,t){return ht(this,"some",e,t,void 0,arguments)},splice(...e){return bn(this,"splice",e)},toReversed(){return sn(this).toReversed()},toSorted(e){return sn(this).toSorted(e)},toSpliced(...e){return sn(this).toSpliced(...e)},unshift(...e){return bn(this,"unshift",e)},values(){return Na(this,"values",De)}};function Na(e,t,n){const a=Es(e),s=a[t]();return a!==e&&!et(e)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=n(r.value)),r}),s}const Vi=Array.prototype;function ht(e,t,n,a,s,r){const o=Es(e),i=o!==e&&!et(e),l=o[t];if(l!==Vi[t]){const d=l.apply(e,r);return i?De(d):d}let f=n;o!==e&&(i?f=function(d,h){return n.call(this,De(d),h,e)}:n.length>2&&(f=function(d,h){return n.call(this,d,h,e)}));const u=l.call(o,f,a);return i&&s?s(u):u}function js(e,t,n,a){const s=Es(e);let r=n;return s!==e&&(et(e)?n.length>3&&(r=function(o,i,l){return n.call(this,o,i,l,e)}):r=function(o,i,l){return n.call(this,o,De(i),l,e)}),s[t](r,...a)}function La(e,t,n){const a=ie(e);Ce(a,"iterate",In);const s=a[t](...n);return(s===-1||s===!1)&&Os(n[0])?(n[0]=ie(n[0]),a[t](...n)):s}function bn(e,t,n=[]){St(),bs();const a=ie(e)[t].apply(e,n);return ys(),At(),a}const zi=fs("__proto__,__v_isRef,__isVue"),mo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter($t));function Qi(e){$t(e)||(e=String(e));const t=ie(this);return Ce(t,"has",e),t.hasOwnProperty(e)}class _o{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,a){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return a===(s?r?il:To:r?vo:yo).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(a)?t:void 0;const o=te(t);if(!s){let l;if(o&&(l=Ji[n]))return l;if(n==="hasOwnProperty")return Qi}const i=Reflect.get(t,n,Ee(t)?t:a);if(($t(n)?mo.has(n):zi(n))||(s||Ce(t,"get",n),r))return i;if(Ee(i)){const l=o&&ms(n)?i:i.value;return s&&me(l)?za(l):l}return me(i)?s?za(i):Et(i):i}}class bo extends _o{constructor(t=!1){super(!1,t)}set(t,n,a,s){let r=t[n];if(!this._isShallow){const l=an(r);if(!et(a)&&!an(a)&&(r=ie(r),a=ie(a)),!te(t)&&Ee(r)&&!Ee(a))return l||(r.value=a),!0}const o=te(t)&&ms(n)?Number(n)<t.length:ce(t,n),i=Reflect.set(t,n,a,Ee(t)?t:s);return t===ie(s)&&(o?Dt(a,r)&&Tt(t,"set",n,a):Tt(t,"add",n,a)),i}deleteProperty(t,n){const a=ce(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&a&&Tt(t,"delete",n,void 0),s}has(t,n){const a=Reflect.has(t,n);return(!$t(n)||!mo.has(n))&&Ce(t,"has",n),a}ownKeys(t){return Ce(t,"iterate",te(t)?"length":en),Reflect.ownKeys(t)}}class Xi extends _o{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Zi=new bo,el=new Xi,tl=new bo(!0);const Va=e=>e,qn=e=>Reflect.getPrototypeOf(e);function nl(e,t,n){return function(...a){const s=this.__v_raw,r=ie(s),o=pn(r),i=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=s[e](...a),u=n?Va:t?Qa:De;return!t&&Ce(r,"iterate",l?Ja:en),{next(){const{value:d,done:h}=f.next();return h?{value:d,done:h}:{value:i?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function Gn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function al(e,t){const n={get(s){const r=this.__v_raw,o=ie(r),i=ie(s);e||(Dt(s,i)&&Ce(o,"get",s),Ce(o,"get",i));const{has:l}=qn(o),f=t?Va:e?Qa:De;if(l.call(o,s))return f(r.get(s));if(l.call(o,i))return f(r.get(i));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!e&&Ce(ie(s),"iterate",en),s.size},has(s){const r=this.__v_raw,o=ie(r),i=ie(s);return e||(Dt(s,i)&&Ce(o,"has",s),Ce(o,"has",i)),s===i?r.has(s):r.has(s)||r.has(i)},forEach(s,r){const o=this,i=o.__v_raw,l=ie(i),f=t?Va:e?Qa:De;return!e&&Ce(l,"iterate",en),i.forEach((u,d)=>s.call(r,f(u),f(d),o))}};return ke(n,e?{add:Gn("add"),set:Gn("set"),delete:Gn("delete"),clear:Gn("clear")}:{add(s){!t&&!et(s)&&!an(s)&&(s=ie(s));const r=ie(this);return qn(r).has.call(r,s)||(r.add(s),Tt(r,"add",s,s)),this},set(s,r){!t&&!et(r)&&!an(r)&&(r=ie(r));const o=ie(this),{has:i,get:l}=qn(o);let f=i.call(o,s);f||(s=ie(s),f=i.call(o,s));const u=l.call(o,s);return o.set(s,r),f?Dt(r,u)&&Tt(o,"set",s,r):Tt(o,"add",s,r),this},delete(s){const r=ie(this),{has:o,get:i}=qn(r);let l=o.call(r,s);l||(s=ie(s),l=o.call(r,s)),i&&i.call(r,s);const f=r.delete(s);return l&&Tt(r,"delete",s,void 0),f},clear(){const s=ie(this),r=s.size!==0,o=s.clear();return r&&Tt(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=nl(s,e,t)}),n}function Ss(e,t){const n=al(e,t);return(a,s,r)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?a:Reflect.get(ce(n,s)&&s in a?n:a,s,r)}const sl={get:Ss(!1,!1)},rl={get:Ss(!1,!0)},ol={get:Ss(!0,!1)};const yo=new WeakMap,vo=new WeakMap,To=new WeakMap,il=new WeakMap;function ll(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function cl(e){return e.__v_skip||!Object.isExtensible(e)?0:ll(Li(e))}function Et(e){return an(e)?e:As(e,!1,Zi,sl,yo)}function Eo(e){return As(e,!1,tl,rl,vo)}function za(e){return As(e,!0,el,ol,To)}function As(e,t,n,a,s){if(!me(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=cl(e);if(r===0)return e;const o=s.get(e);if(o)return o;const i=new Proxy(e,r===2?a:n);return s.set(e,i),i}function tn(e){return an(e)?tn(e.__v_raw):!!(e&&e.__v_isReactive)}function an(e){return!!(e&&e.__v_isReadonly)}function et(e){return!!(e&&e.__v_isShallow)}function Os(e){return e?!!e.__v_raw:!1}function ie(e){const t=e&&e.__v_raw;return t?ie(t):e}function Ps(e){return!ce(e,"__v_skip")&&Object.isExtensible(e)&&Zr(e,"__v_skip",!0),e}const De=e=>me(e)?Et(e):e,Qa=e=>me(e)?za(e):e;function Ee(e){return e?e.__v_isRef===!0:!1}function Je(e){return So(e,!1)}function ul(e){return So(e,!0)}function So(e,t){return Ee(e)?e:new dl(e,t)}class dl{constructor(t,n){this.dep=new Ts,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:ie(t),this._value=n?t:De(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,a=this.__v_isShallow||et(t)||an(t);t=a?t:ie(t),Dt(t,n)&&(this._rawValue=t,this._value=a?t:De(t),this.dep.trigger())}}function Mt(e){return Ee(e)?e.value:e}const pl={get:(e,t,n)=>t==="__v_raw"?e:Mt(Reflect.get(e,t,n)),set:(e,t,n,a)=>{const s=e[t];return Ee(s)&&!Ee(n)?(s.value=n,!0):Reflect.set(e,t,n,a)}};function Ao(e){return tn(e)?e:new Proxy(e,pl)}function fl(e){const t=te(e)?new Array(e.length):{};for(const n in e)t[n]=gl(e,n);return t}class hl{constructor(t,n,a){this._object=t,this._key=n,this._defaultValue=a,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Wi(ie(this._object),this._key)}}function gl(e,t,n){const a=e[t];return Ee(a)?a:new hl(e,t,n)}class ml{constructor(t,n,a){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Ts(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ln-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=a}notify(){if(this.flags|=16,!(this.flags&8)&&fe!==this)return co(this,!0),!0}get value(){const t=this.dep.track();return fo(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function _l(e,t,n=!1){let a,s;return se(e)?a=e:(a=e.get,s=e.set),new ml(a,s,n)}const Wn={},na=new WeakMap;let Vt;function bl(e,t=!1,n=Vt){if(n){let a=na.get(n);a||na.set(n,a=[]),a.push(e)}}function yl(e,t,n=he){const{immediate:a,deep:s,once:r,scheduler:o,augmentJob:i,call:l}=n,f=S=>s?S:et(S)||s===!1||s===0?It(S,1):It(S);let u,d,h,p,g=!1,c=!1;if(Ee(e)?(d=()=>e.value,g=et(e)):tn(e)?(d=()=>f(e),g=!0):te(e)?(c=!0,g=e.some(S=>tn(S)||et(S)),d=()=>e.map(S=>{if(Ee(S))return S.value;if(tn(S))return f(S);if(se(S))return l?l(S,2):S()})):se(e)?t?d=l?()=>l(e,2):e:d=()=>{if(h){St();try{h()}finally{At()}}const S=Vt;Vt=u;try{return l?l(e,3,[p]):e(p)}finally{Vt=S}}:d=dt,t&&s){const S=d,x=s===!0?1/0:s;d=()=>It(S(),x)}const m=oo(),_=()=>{u.stop(),m&&m.active&&gs(m.effects,u)};if(r&&t){const S=t;t=(...x)=>{S(...x),_()}}let y=c?new Array(e.length).fill(Wn):Wn;const T=S=>{if(!(!(u.flags&1)||!u.dirty&&!S))if(t){const x=u.run();if(s||g||(c?x.some((R,w)=>Dt(R,y[w])):Dt(x,y))){h&&h();const R=Vt;Vt=u;try{const w=[x,y===Wn?void 0:c&&y[0]===Wn?[]:y,p];y=x,l?l(t,3,w):t(...w)}finally{Vt=R}}}else u.run()};return i&&i(T),u=new io(d),u.scheduler=o?()=>o(T,!1):T,p=S=>bl(S,!1,u),h=u.onStop=()=>{const S=na.get(u);if(S){if(l)l(S,4);else for(const x of S)x();na.delete(u)}},t?a?T(!0):y=u.run():o?o(T.bind(null,!0),!0):u.run(),_.pause=u.pause.bind(u),_.resume=u.resume.bind(u),_.stop=_,_}function It(e,t=1/0,n){if(t<=0||!me(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Ee(e))It(e.value,t,n);else if(te(e))for(let a=0;a<e.length;a++)It(e[a],t,n);else if(Vr(e)||pn(e))e.forEach(a=>{It(a,t,n)});else if(Xr(e)){for(const a in e)It(e[a],t,n);for(const a of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,a)&&It(e[a],t,n)}return e}function Kn(e,t,n,a){try{return a?e(...a):e()}catch(s){_a(s,t,n)}}function tt(e,t,n,a){if(se(e)){const s=Kn(e,t,n,a);return s&&zr(s)&&s.catch(r=>{_a(r,t,n)}),s}if(te(e)){const s=[];for(let r=0;r<e.length;r++)s.push(tt(e[r],t,n,a));return s}}function _a(e,t,n,a=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||he;if(t){let i=t.parent;const l=t.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,l,f)===!1)return}i=i.parent}if(r){St(),Kn(r,null,10,[e,l,f]),At();return}}vl(e,n,s,a,o)}function vl(e,t,n,a=!0,s=!1){if(s)throw e;console.error(e)}const Me=[];let it=-1;const fn=[];let Rt=null,ln=0;const Oo=Promise.resolve();let aa=null;function ks(e){const t=aa||Oo;return e?t.then(this?e.bind(this):e):t}function Tl(e){let t=it+1,n=Me.length;for(;t<n;){const a=t+n>>>1,s=Me[a],r=Dn(s);r<e||r===e&&s.flags&2?t=a+1:n=a}return t}function ws(e){if(!(e.flags&1)){const t=Dn(e),n=Me[Me.length-1];!n||!(e.flags&2)&&t>=Dn(n)?Me.push(e):Me.splice(Tl(t),0,e),e.flags|=1,Po()}}function Po(){aa||(aa=Oo.then(wo))}function El(e){te(e)?fn.push(...e):Rt&&e.id===-1?Rt.splice(ln+1,0,e):e.flags&1||(fn.push(e),e.flags|=1),Po()}function qs(e,t,n=it+1){for(;n<Me.length;n++){const a=Me[n];if(a&&a.flags&2){if(e&&a.id!==e.uid)continue;Me.splice(n,1),n--,a.flags&4&&(a.flags&=-2),a(),a.flags&4||(a.flags&=-2)}}}function ko(e){if(fn.length){const t=[...new Set(fn)].sort((n,a)=>Dn(n)-Dn(a));if(fn.length=0,Rt){Rt.push(...t);return}for(Rt=t,ln=0;ln<Rt.length;ln++){const n=Rt[ln];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Rt=null,ln=0}}const Dn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function wo(e){try{for(it=0;it<Me.length;it++){const t=Me[it];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Kn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;it<Me.length;it++){const t=Me[it];t&&(t.flags&=-2)}it=-1,Me.length=0,ko(),aa=null,(Me.length||fn.length)&&wo()}}let Xe=null,xo=null;function sa(e){const t=Xe;return Xe=e,xo=e&&e.type.__scopeId||null,t}function Xa(e,t=Xe,n){if(!t||e._n)return e;const a=(...s)=>{a._d&&ia(-1);const r=sa(t);let o;try{o=e(...s)}finally{sa(r),a._d&&ia(1)}return o};return a._n=!0,a._c=!0,a._d=!0,a}function qt(e,t,n,a){const s=e.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const i=s[o];r&&(i.oldValue=r[o].value);let l=i.dir[a];l&&(St(),tt(l,n,8,[e.el,i,e,t]),At())}}const Sl=Symbol("_vte"),Ro=e=>e.__isTeleport,yt=Symbol("_leaveCb"),Jn=Symbol("_enterCb");function Al(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Kt(()=>{e.isMounted=!0}),Uo(()=>{e.isUnmounting=!0}),e}const We=[Function,Array],Co={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:We,onEnter:We,onAfterEnter:We,onEnterCancelled:We,onBeforeLeave:We,onLeave:We,onAfterLeave:We,onLeaveCancelled:We,onBeforeAppear:We,onAppear:We,onAfterAppear:We,onAppearCancelled:We},No=e=>{const t=e.subTree;return t.component?No(t.component):t},Ol={name:"BaseTransition",props:Co,setup(e,{slots:t}){const n=Ns(),a=Al();return()=>{const s=t.default&&Do(t.default(),!0);if(!s||!s.length)return;const r=Lo(s),o=ie(e),{mode:i}=o;if(a.isLeaving)return Ia(r);const l=Gs(r);if(!l)return Ia(r);let f=Za(l,o,a,n,d=>f=d);l.type!==Ye&&Mn(l,f);let u=n.subTree&&Gs(n.subTree);if(u&&u.type!==Ye&&!zt(u,l)&&No(n).type!==Ye){let d=Za(u,o,a,n);if(Mn(u,d),i==="out-in"&&l.type!==Ye)return a.isLeaving=!0,d.afterLeave=()=>{a.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,u=void 0},Ia(r);i==="in-out"&&l.type!==Ye?d.delayLeave=(h,p,g)=>{const c=Io(a,u);c[String(u.key)]=u,h[yt]=()=>{p(),h[yt]=void 0,delete f.delayedLeave,u=void 0},f.delayedLeave=()=>{g(),delete f.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function Lo(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Ye){t=n;break}}return t}const Pl=Ol;function Io(e,t){const{leavingVNodes:n}=e;let a=n.get(t.type);return a||(a=Object.create(null),n.set(t.type,a)),a}function Za(e,t,n,a,s){const{appear:r,mode:o,persisted:i=!1,onBeforeEnter:l,onEnter:f,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:h,onLeave:p,onAfterLeave:g,onLeaveCancelled:c,onBeforeAppear:m,onAppear:_,onAfterAppear:y,onAppearCancelled:T}=t,S=String(e.key),x=Io(n,e),R=(O,F)=>{O&&tt(O,a,9,F)},w=(O,F)=>{const Y=F[1];R(O,F),te(O)?O.every(P=>P.length<=1)&&Y():O.length<=1&&Y()},D={mode:o,persisted:i,beforeEnter(O){let F=l;if(!n.isMounted)if(r)F=m||l;else return;O[yt]&&O[yt](!0);const Y=x[S];Y&&zt(e,Y)&&Y.el[yt]&&Y.el[yt](),R(F,[O])},enter(O){let F=f,Y=u,P=d;if(!n.isMounted)if(r)F=_||f,Y=y||u,P=T||d;else return;let V=!1;const $=O[Jn]=ne=>{V||(V=!0,ne?R(P,[O]):R(Y,[O]),D.delayedLeave&&D.delayedLeave(),O[Jn]=void 0)};F?w(F,[O,$]):$()},leave(O,F){const Y=String(e.key);if(O[Jn]&&O[Jn](!0),n.isUnmounting)return F();R(h,[O]);let P=!1;const V=O[yt]=$=>{P||(P=!0,F(),$?R(c,[O]):R(g,[O]),O[yt]=void 0,x[Y]===e&&delete x[Y])};x[Y]=e,p?w(p,[O,V]):V()},clone(O){const F=Za(O,t,n,a,s);return s&&s(F),F}};return D}function Ia(e){if(ba(e))return e=Ft(e),e.children=null,e}function Gs(e){if(!ba(e))return Ro(e.type)&&e.children?Lo(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&se(n.default))return n.default()}}function Mn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Mn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Do(e,t=!1,n){let a=[],s=0;for(let r=0;r<e.length;r++){let o=e[r];const i=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===ct?(o.patchFlag&128&&s++,a=a.concat(Do(o.children,t,i))):(t||o.type!==Ye)&&a.push(i!=null?Ft(o,{key:i}):o)}if(s>1)for(let r=0;r<a.length;r++)a[r].patchFlag=-2;return a}function Mo(e,t){return se(e)?ke({name:e.name},t,{setup:e}):e}function Bo(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const ra=new WeakMap;function Pn(e,t,n,a,s=!1){if(te(e)){e.forEach((g,c)=>Pn(g,t&&(te(t)?t[c]:t),n,a,s));return}if(kn(a)&&!s){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&Pn(e,t,n,a.component.subTree);return}const r=a.shapeFlag&4?Ls(a.component):a.el,o=s?null:r,{i,r:l}=e,f=t&&t.r,u=i.refs===he?i.refs={}:i.refs,d=i.setupState,h=ie(d),p=d===he?Jr:g=>ce(h,g);if(f!=null&&f!==l){if(Ws(t),Se(f))u[f]=null,p(f)&&(d[f]=null);else if(Ee(f)){f.value=null;const g=t;g.k&&(u[g.k]=null)}}if(se(l))Kn(l,i,12,[o,u]);else{const g=Se(l),c=Ee(l);if(g||c){const m=()=>{if(e.f){const _=g?p(l)?d[l]:u[l]:l.value;if(s)te(_)&&gs(_,r);else if(te(_))_.includes(r)||_.push(r);else if(g)u[l]=[r],p(l)&&(d[l]=u[l]);else{const y=[r];l.value=y,e.k&&(u[e.k]=y)}}else g?(u[l]=o,p(l)&&(d[l]=o)):c&&(l.value=o,e.k&&(u[e.k]=o))};if(o){const _=()=>{m(),ra.delete(e)};_.id=-1,ra.set(e,_),Ke(_,n)}else Ws(e),m()}}}function Ws(e){const t=ra.get(e);t&&(t.flags|=8,ra.delete(e))}ma().requestIdleCallback;ma().cancelIdleCallback;const kn=e=>!!e.type.__asyncLoader,ba=e=>e.type.__isKeepAlive;function kl(e,t){Fo(e,"a",t)}function wl(e,t){Fo(e,"da",t)}function Fo(e,t,n=Ne){const a=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(ya(t,a,n),n){let s=n.parent;for(;s&&s.parent;)ba(s.parent.vnode)&&xl(a,t,n,s),s=s.parent}}function xl(e,t,n,a){const s=ya(t,e,a,!0);va(()=>{gs(a[t],s)},n)}function ya(e,t,n=Ne,a=!1){if(n){const s=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...o)=>{St();const i=Yn(n),l=tt(t,n,e,o);return i(),At(),l});return a?s.unshift(r):s.push(r),r}}const Pt=e=>(t,n=Ne)=>{(!Fn||e==="sp")&&ya(e,(...a)=>t(...a),n)},Rl=Pt("bm"),Kt=Pt("m"),Cl=Pt("bu"),Nl=Pt("u"),Uo=Pt("bum"),va=Pt("um"),Ll=Pt("sp"),Il=Pt("rtg"),Dl=Pt("rtc");function Ml(e,t=Ne){ya("ec",e,t)}const Bl="components",$o=Symbol.for("v-ndc");function Fl(e){return Se(e)?Ul(Bl,e,!1)||e:e||$o}function Ul(e,t,n=!0,a=!1){const s=Xe||Ne;if(s){const r=s.type;{const i=kc(r,!1);if(i&&(i===t||i===ze(t)||i===ga(ze(t))))return r}const o=Js(s[e]||r[e],t)||Js(s.appContext[e],t);return!o&&a?r:o}}function Js(e,t){return e&&(e[t]||e[ze(t)]||e[ga(ze(t))])}const es=e=>e?oi(e)?Ls(e):es(e.parent):null,wn=ke(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>es(e.parent),$root:e=>es(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Ko(e),$forceUpdate:e=>e.f||(e.f=()=>{ws(e.update)}),$nextTick:e=>e.n||(e.n=ks.bind(e.proxy)),$watch:e=>ic.bind(e)}),Da=(e,t)=>e!==he&&!e.__isScriptSetup&&ce(e,t),$l={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:a,data:s,props:r,accessCache:o,type:i,appContext:l}=e;let f;if(t[0]!=="$"){const p=o[t];if(p!==void 0)switch(p){case 1:return a[t];case 2:return s[t];case 4:return n[t];case 3:return r[t]}else{if(Da(a,t))return o[t]=1,a[t];if(s!==he&&ce(s,t))return o[t]=2,s[t];if((f=e.propsOptions[0])&&ce(f,t))return o[t]=3,r[t];if(n!==he&&ce(n,t))return o[t]=4,n[t];ts&&(o[t]=0)}}const u=wn[t];let d,h;if(u)return t==="$attrs"&&Ce(e.attrs,"get",""),u(e);if((d=i.__cssModules)&&(d=d[t]))return d;if(n!==he&&ce(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,ce(h,t))return h[t]},set({_:e},t,n){const{data:a,setupState:s,ctx:r}=e;return Da(s,t)?(s[t]=n,!0):a!==he&&ce(a,t)?(a[t]=n,!0):ce(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:a,appContext:s,propsOptions:r,type:o}},i){let l,f;return!!(n[i]||e!==he&&i[0]!=="$"&&ce(e,i)||Da(t,i)||(l=r[0])&&ce(l,i)||ce(a,i)||ce(wn,i)||ce(s.config.globalProperties,i)||(f=o.__cssModules)&&f[i])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ce(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Vs(e){return te(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ts=!0;function Hl(e){const t=Ko(e),n=e.proxy,a=e.ctx;ts=!1,t.beforeCreate&&zs(t.beforeCreate,e,"bc");const{data:s,computed:r,methods:o,watch:i,provide:l,inject:f,created:u,beforeMount:d,mounted:h,beforeUpdate:p,updated:g,activated:c,deactivated:m,beforeDestroy:_,beforeUnmount:y,destroyed:T,unmounted:S,render:x,renderTracked:R,renderTriggered:w,errorCaptured:D,serverPrefetch:O,expose:F,inheritAttrs:Y,components:P,directives:V,filters:$}=t;if(f&&Kl(f,a,null),o)for(const j in o){const Q=o[j];se(Q)&&(a[j]=Q.bind(n))}if(s){const j=s.call(n,n);me(j)&&(e.data=Et(j))}if(ts=!0,r)for(const j in r){const Q=r[j],de=se(Q)?Q.bind(n,n):se(Q.get)?Q.get.bind(n,n):dt,_e=!se(Q)&&se(Q.set)?Q.set.bind(n):dt,Te=je({get:de,set:_e});Object.defineProperty(a,j,{enumerable:!0,configurable:!0,get:()=>Te.value,set:ge=>Te.value=ge})}if(i)for(const j in i)Ho(i[j],a,n,j);if(l){const j=se(l)?l.call(n):l;Reflect.ownKeys(j).forEach(Q=>{Qn(Q,j[Q])})}u&&zs(u,e,"c");function Z(j,Q){te(Q)?Q.forEach(de=>j(de.bind(n))):Q&&j(Q.bind(n))}if(Z(Rl,d),Z(Kt,h),Z(Cl,p),Z(Nl,g),Z(kl,c),Z(wl,m),Z(Ml,D),Z(Dl,R),Z(Il,w),Z(Uo,y),Z(va,S),Z(Ll,O),te(F))if(F.length){const j=e.exposed||(e.exposed={});F.forEach(Q=>{Object.defineProperty(j,Q,{get:()=>n[Q],set:de=>n[Q]=de,enumerable:!0})})}else e.exposed||(e.exposed={});x&&e.render===dt&&(e.render=x),Y!=null&&(e.inheritAttrs=Y),P&&(e.components=P),V&&(e.directives=V),O&&Bo(e)}function Kl(e,t,n=dt){te(e)&&(e=ns(e));for(const a in e){const s=e[a];let r;me(s)?"default"in s?r=Ve(s.from||a,s.default,!0):r=Ve(s.from||a):r=Ve(s),Ee(r)?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[a]=r}}function zs(e,t,n){tt(te(e)?e.map(a=>a.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ho(e,t,n,a){let s=a.includes(".")?ti(n,a):()=>n[a];if(Se(e)){const r=t[e];se(r)&&xn(s,r)}else if(se(e))xn(s,e.bind(n));else if(me(e))if(te(e))e.forEach(r=>Ho(r,t,n,a));else{const r=se(e.handler)?e.handler.bind(n):t[e.handler];se(r)&&xn(s,r,e)}}function Ko(e){const t=e.type,{mixins:n,extends:a}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=e.appContext,i=r.get(t);let l;return i?l=i:!s.length&&!n&&!a?l=t:(l={},s.length&&s.forEach(f=>oa(l,f,o,!0)),oa(l,t,o)),me(t)&&r.set(t,l),l}function oa(e,t,n,a=!1){const{mixins:s,extends:r}=t;r&&oa(e,r,n,!0),s&&s.forEach(o=>oa(e,o,n,!0));for(const o in t)if(!(a&&o==="expose")){const i=Yl[o]||n&&n[o];e[o]=i?i(e[o],t[o]):t[o]}return e}const Yl={data:Qs,props:Xs,emits:Xs,methods:Tn,computed:Tn,beforeCreate:Le,created:Le,beforeMount:Le,mounted:Le,beforeUpdate:Le,updated:Le,beforeDestroy:Le,beforeUnmount:Le,destroyed:Le,unmounted:Le,activated:Le,deactivated:Le,errorCaptured:Le,serverPrefetch:Le,components:Tn,directives:Tn,watch:ql,provide:Qs,inject:jl};function Qs(e,t){return t?e?function(){return ke(se(e)?e.call(this,this):e,se(t)?t.call(this,this):t)}:t:e}function jl(e,t){return Tn(ns(e),ns(t))}function ns(e){if(te(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Le(e,t){return e?[...new Set([].concat(e,t))]:t}function Tn(e,t){return e?ke(Object.create(null),e,t):t}function Xs(e,t){return e?te(e)&&te(t)?[...new Set([...e,...t])]:ke(Object.create(null),Vs(e),Vs(t??{})):t}function ql(e,t){if(!e)return t;if(!t)return e;const n=ke(Object.create(null),e);for(const a in t)n[a]=Le(e[a],t[a]);return n}function Yo(){return{app:null,config:{isNativeTag:Jr,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Gl=0;function Wl(e,t){return function(a,s=null){se(a)||(a=ke({},a)),s!=null&&!me(s)&&(s=null);const r=Yo(),o=new WeakSet,i=[];let l=!1;const f=r.app={_uid:Gl++,_component:a,_props:s,_container:null,_context:r,_instance:null,version:xc,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&se(u.install)?(o.add(u),u.install(f,...d)):se(u)&&(o.add(u),u(f,...d))),f},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),f},component(u,d){return d?(r.components[u]=d,f):r.components[u]},directive(u,d){return d?(r.directives[u]=d,f):r.directives[u]},mount(u,d,h){if(!l){const p=f._ceVNode||$e(a,s);return p.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),e(p,u,h),l=!0,f._container=u,u.__vue_app__=f,Ls(p.component)}},onUnmount(u){i.push(u)},unmount(){l&&(tt(i,f._instance,16),e(null,f._container),delete f._container.__vue_app__)},provide(u,d){return r.provides[u]=d,f},runWithContext(u){const d=nn;nn=f;try{return u()}finally{nn=d}}};return f}}let nn=null;function Qn(e,t){if(Ne){let n=Ne.provides;const a=Ne.parent&&Ne.parent.provides;a===n&&(n=Ne.provides=Object.create(a)),n[e]=t}}function Ve(e,t,n=!1){const a=Ns();if(a||nn){let s=nn?nn._context.provides:a?a.parent==null||a.ce?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&se(t)?t.call(a&&a.proxy):t}}function Jl(){return!!(Ns()||nn)}const jo={},qo=()=>Object.create(jo),Go=e=>Object.getPrototypeOf(e)===jo;function Vl(e,t,n,a=!1){const s={},r=qo();e.propsDefaults=Object.create(null),Wo(e,t,s,r);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=a?s:Eo(s):e.type.props?e.props=s:e.props=r,e.attrs=r}function zl(e,t,n,a){const{props:s,attrs:r,vnode:{patchFlag:o}}=e,i=ie(s),[l]=e.propsOptions;let f=!1;if((a||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(Ta(e.emitsOptions,h))continue;const p=t[h];if(l)if(ce(r,h))p!==r[h]&&(r[h]=p,f=!0);else{const g=ze(h);s[g]=as(l,i,g,p,e,!1)}else p!==r[h]&&(r[h]=p,f=!0)}}}else{Wo(e,t,s,r)&&(f=!0);let u;for(const d in i)(!t||!ce(t,d)&&((u=Ht(d))===d||!ce(t,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(s[d]=as(l,i,d,void 0,e,!0)):delete s[d]);if(r!==i)for(const d in r)(!t||!ce(t,d))&&(delete r[d],f=!0)}f&&Tt(e.attrs,"set","")}function Wo(e,t,n,a){const[s,r]=e.propsOptions;let o=!1,i;if(t)for(let l in t){if(Sn(l))continue;const f=t[l];let u;s&&ce(s,u=ze(l))?!r||!r.includes(u)?n[u]=f:(i||(i={}))[u]=f:Ta(e.emitsOptions,l)||(!(l in a)||f!==a[l])&&(a[l]=f,o=!0)}if(r){const l=ie(n),f=i||he;for(let u=0;u<r.length;u++){const d=r[u];n[d]=as(s,l,d,f[d],e,!ce(f,d))}}return o}function as(e,t,n,a,s,r){const o=e[n];if(o!=null){const i=ce(o,"default");if(i&&a===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&se(l)){const{propsDefaults:f}=s;if(n in f)a=f[n];else{const u=Yn(s);a=f[n]=l.call(null,t),u()}}else a=l;s.ce&&s.ce._setProp(n,a)}o[0]&&(r&&!i?a=!1:o[1]&&(a===""||a===Ht(n))&&(a=!0))}return a}const Ql=new WeakMap;function Jo(e,t,n=!1){const a=n?Ql:t.propsCache,s=a.get(e);if(s)return s;const r=e.props,o={},i=[];let l=!1;if(!se(e)){const u=d=>{l=!0;const[h,p]=Jo(d,t,!0);ke(o,h),p&&i.push(...p)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!r&&!l)return me(e)&&a.set(e,dn),dn;if(te(r))for(let u=0;u<r.length;u++){const d=ze(r[u]);Zs(d)&&(o[d]=he)}else if(r)for(const u in r){const d=ze(u);if(Zs(d)){const h=r[u],p=o[d]=te(h)||se(h)?{type:h}:ke({},h),g=p.type;let c=!1,m=!0;if(te(g))for(let _=0;_<g.length;++_){const y=g[_],T=se(y)&&y.name;if(T==="Boolean"){c=!0;break}else T==="String"&&(m=!1)}else c=se(g)&&g.name==="Boolean";p[0]=c,p[1]=m,(c||ce(p,"default"))&&i.push(d)}}const f=[o,i];return me(e)&&a.set(e,f),f}function Zs(e){return e[0]!=="$"&&!Sn(e)}const xs=e=>e==="_"||e==="_ctx"||e==="$stable",Rs=e=>te(e)?e.map(ut):[ut(e)],Xl=(e,t,n)=>{if(t._n)return t;const a=Xa((...s)=>Rs(t(...s)),n);return a._c=!1,a},Vo=(e,t,n)=>{const a=e._ctx;for(const s in e){if(xs(s))continue;const r=e[s];if(se(r))t[s]=Xl(s,r,a);else if(r!=null){const o=Rs(r);t[s]=()=>o}}},zo=(e,t)=>{const n=Rs(t);e.slots.default=()=>n},Qo=(e,t,n)=>{for(const a in t)(n||!xs(a))&&(e[a]=t[a])},Zl=(e,t,n)=>{const a=e.slots=qo();if(e.vnode.shapeFlag&32){const s=t._;s?(Qo(a,t,n),n&&Zr(a,"_",s,!0)):Vo(t,a)}else t&&zo(e,t)},ec=(e,t,n)=>{const{vnode:a,slots:s}=e;let r=!0,o=he;if(a.shapeFlag&32){const i=t._;i?n&&i===1?r=!1:Qo(s,t,n):(r=!t.$stable,Vo(t,s)),o=t}else t&&(zo(e,t),o={default:1});if(r)for(const i in s)!xs(i)&&o[i]==null&&delete s[i]},Ke=gc;function tc(e){return nc(e)}function nc(e,t){const n=ma();n.__VUE__=!0;const{insert:a,remove:s,patchProp:r,createElement:o,createText:i,createComment:l,setText:f,setElementText:u,parentNode:d,nextSibling:h,setScopeId:p=dt,insertStaticContent:g}=e,c=(b,v,E,L=null,I=null,N=null,q=void 0,K=null,U=!!v.dynamicChildren)=>{if(b===v)return;b&&!zt(b,v)&&(L=C(b),ge(b,I,N,!0),b=null),v.patchFlag===-2&&(U=!1,v.dynamicChildren=null);const{type:B,ref:ee,shapeFlag:W}=v;switch(B){case Ea:m(b,v,E,L);break;case Ye:_(b,v,E,L);break;case Xn:b==null&&y(v,E,L,q);break;case ct:P(b,v,E,L,I,N,q,K,U);break;default:W&1?x(b,v,E,L,I,N,q,K,U):W&6?V(b,v,E,L,I,N,q,K,U):(W&64||W&128)&&B.process(b,v,E,L,I,N,q,K,U,z)}ee!=null&&I?Pn(ee,b&&b.ref,N,v||b,!v):ee==null&&b&&b.ref!=null&&Pn(b.ref,null,N,b,!0)},m=(b,v,E,L)=>{if(b==null)a(v.el=i(v.children),E,L);else{const I=v.el=b.el;v.children!==b.children&&f(I,v.children)}},_=(b,v,E,L)=>{b==null?a(v.el=l(v.children||""),E,L):v.el=b.el},y=(b,v,E,L)=>{[b.el,b.anchor]=g(b.children,v,E,L,b.el,b.anchor)},T=({el:b,anchor:v},E,L)=>{let I;for(;b&&b!==v;)I=h(b),a(b,E,L),b=I;a(v,E,L)},S=({el:b,anchor:v})=>{let E;for(;b&&b!==v;)E=h(b),s(b),b=E;s(v)},x=(b,v,E,L,I,N,q,K,U)=>{if(v.type==="svg"?q="svg":v.type==="math"&&(q="mathml"),b==null)R(v,E,L,I,N,q,K,U);else{const B=b.el&&b.el._isVueCE?b.el:null;try{B&&B._beginPatch(),O(b,v,I,N,q,K,U)}finally{B&&B._endPatch()}}},R=(b,v,E,L,I,N,q,K)=>{let U,B;const{props:ee,shapeFlag:W,transition:X,dirs:ae}=b;if(U=b.el=o(b.type,N,ee&&ee.is,ee),W&8?u(U,b.children):W&16&&D(b.children,U,null,L,I,Ma(b,N),q,K),ae&&qt(b,null,L,"created"),w(U,b,b.scopeId,q,L),ee){for(const pe in ee)pe!=="value"&&!Sn(pe)&&r(U,pe,null,ee[pe],N,L);"value"in ee&&r(U,"value",null,ee.value,N),(B=ee.onVnodeBeforeMount)&&ot(B,L,b)}ae&&qt(b,null,L,"beforeMount");const oe=ac(I,X);oe&&X.beforeEnter(U),a(U,v,E),((B=ee&&ee.onVnodeMounted)||oe||ae)&&Ke(()=>{B&&ot(B,L,b),oe&&X.enter(U),ae&&qt(b,null,L,"mounted")},I)},w=(b,v,E,L,I)=>{if(E&&p(b,E),L)for(let N=0;N<L.length;N++)p(b,L[N]);if(I){let N=I.subTree;if(v===N||ai(N.type)&&(N.ssContent===v||N.ssFallback===v)){const q=I.vnode;w(b,q,q.scopeId,q.slotScopeIds,I.parent)}}},D=(b,v,E,L,I,N,q,K,U=0)=>{for(let B=U;B<b.length;B++){const ee=b[B]=K?Ct(b[B]):ut(b[B]);c(null,ee,v,E,L,I,N,q,K)}},O=(b,v,E,L,I,N,q)=>{const K=v.el=b.el;let{patchFlag:U,dynamicChildren:B,dirs:ee}=v;U|=b.patchFlag&16;const W=b.props||he,X=v.props||he;let ae;if(E&&Gt(E,!1),(ae=X.onVnodeBeforeUpdate)&&ot(ae,E,v,b),ee&&qt(v,b,E,"beforeUpdate"),E&&Gt(E,!0),(W.innerHTML&&X.innerHTML==null||W.textContent&&X.textContent==null)&&u(K,""),B?F(b.dynamicChildren,B,K,E,L,Ma(v,I),N):q||Q(b,v,K,null,E,L,Ma(v,I),N,!1),U>0){if(U&16)Y(K,W,X,E,I);else if(U&2&&W.class!==X.class&&r(K,"class",null,X.class,I),U&4&&r(K,"style",W.style,X.style,I),U&8){const oe=v.dynamicProps;for(let pe=0;pe<oe.length;pe++){const ue=oe[pe],Be=W[ue],Fe=X[ue];(Fe!==Be||ue==="value")&&r(K,ue,Be,Fe,I,E)}}U&1&&b.children!==v.children&&u(K,v.children)}else!q&&B==null&&Y(K,W,X,E,I);((ae=X.onVnodeUpdated)||ee)&&Ke(()=>{ae&&ot(ae,E,v,b),ee&&qt(v,b,E,"updated")},L)},F=(b,v,E,L,I,N,q)=>{for(let K=0;K<v.length;K++){const U=b[K],B=v[K],ee=U.el&&(U.type===ct||!zt(U,B)||U.shapeFlag&198)?d(U.el):E;c(U,B,ee,null,L,I,N,q,!0)}},Y=(b,v,E,L,I)=>{if(v!==E){if(v!==he)for(const N in v)!Sn(N)&&!(N in E)&&r(b,N,v[N],null,I,L);for(const N in E){if(Sn(N))continue;const q=E[N],K=v[N];q!==K&&N!=="value"&&r(b,N,K,q,I,L)}"value"in E&&r(b,"value",v.value,E.value,I)}},P=(b,v,E,L,I,N,q,K,U)=>{const B=v.el=b?b.el:i(""),ee=v.anchor=b?b.anchor:i("");let{patchFlag:W,dynamicChildren:X,slotScopeIds:ae}=v;ae&&(K=K?K.concat(ae):ae),b==null?(a(B,E,L),a(ee,E,L),D(v.children||[],E,ee,I,N,q,K,U)):W>0&&W&64&&X&&b.dynamicChildren?(F(b.dynamicChildren,X,E,I,N,q,K),(v.key!=null||I&&v===I.subTree)&&Xo(b,v,!0)):Q(b,v,E,ee,I,N,q,K,U)},V=(b,v,E,L,I,N,q,K,U)=>{v.slotScopeIds=K,b==null?v.shapeFlag&512?I.ctx.activate(v,E,L,q,U):$(v,E,L,I,N,q,U):ne(b,v,U)},$=(b,v,E,L,I,N,q)=>{const K=b.component=Ec(b,L,I);if(ba(b)&&(K.ctx.renderer=z),Sc(K,!1,q),K.asyncDep){if(I&&I.registerDep(K,Z,q),!b.el){const U=K.subTree=$e(Ye);_(null,U,v,E),b.placeholder=U.el}}else Z(K,b,v,E,I,N,q)},ne=(b,v,E)=>{const L=v.component=b.component;if(fc(b,v,E))if(L.asyncDep&&!L.asyncResolved){j(L,v,E);return}else L.next=v,L.update();else v.el=b.el,L.vnode=v},Z=(b,v,E,L,I,N,q)=>{const K=()=>{if(b.isMounted){let{next:W,bu:X,u:ae,parent:oe,vnode:pe}=b;{const st=Zo(b);if(st){W&&(W.el=pe.el,j(b,W,q)),st.asyncDep.then(()=>{b.isUnmounted||K()});return}}let ue=W,Be;Gt(b,!1),W?(W.el=pe.el,j(b,W,q)):W=pe,X&&xa(X),(Be=W.props&&W.props.onVnodeBeforeUpdate)&&ot(Be,oe,W,pe),Gt(b,!0);const Fe=tr(b),at=b.subTree;b.subTree=Fe,c(at,Fe,d(at.el),C(at),b,I,N),W.el=Fe.el,ue===null&&hc(b,Fe.el),ae&&Ke(ae,I),(Be=W.props&&W.props.onVnodeUpdated)&&Ke(()=>ot(Be,oe,W,pe),I)}else{let W;const{el:X,props:ae}=v,{bm:oe,m:pe,parent:ue,root:Be,type:Fe}=b,at=kn(v);Gt(b,!1),oe&&xa(oe),!at&&(W=ae&&ae.onVnodeBeforeMount)&&ot(W,ue,v),Gt(b,!0);{Be.ce&&Be.ce._def.shadowRoot!==!1&&Be.ce._injectChildStyle(Fe);const st=b.subTree=tr(b);c(null,st,E,L,b,I,N),v.el=st.el}if(pe&&Ke(pe,I),!at&&(W=ae&&ae.onVnodeMounted)){const st=v;Ke(()=>ot(W,ue,st),I)}(v.shapeFlag&256||ue&&kn(ue.vnode)&&ue.vnode.shapeFlag&256)&&b.a&&Ke(b.a,I),b.isMounted=!0,v=E=L=null}};b.scope.on();const U=b.effect=new io(K);b.scope.off();const B=b.update=U.run.bind(U),ee=b.job=U.runIfDirty.bind(U);ee.i=b,ee.id=b.uid,U.scheduler=()=>ws(ee),Gt(b,!0),B()},j=(b,v,E)=>{v.component=b;const L=b.vnode.props;b.vnode=v,b.next=null,zl(b,v.props,L,E),ec(b,v.children,E),St(),qs(b),At()},Q=(b,v,E,L,I,N,q,K,U=!1)=>{const B=b&&b.children,ee=b?b.shapeFlag:0,W=v.children,{patchFlag:X,shapeFlag:ae}=v;if(X>0){if(X&128){_e(B,W,E,L,I,N,q,K,U);return}else if(X&256){de(B,W,E,L,I,N,q,K,U);return}}ae&8?(ee&16&&Oe(B,I,N),W!==B&&u(E,W)):ee&16?ae&16?_e(B,W,E,L,I,N,q,K,U):Oe(B,I,N,!0):(ee&8&&u(E,""),ae&16&&D(W,E,L,I,N,q,K,U))},de=(b,v,E,L,I,N,q,K,U)=>{b=b||dn,v=v||dn;const B=b.length,ee=v.length,W=Math.min(B,ee);let X;for(X=0;X<W;X++){const ae=v[X]=U?Ct(v[X]):ut(v[X]);c(b[X],ae,E,null,I,N,q,K,U)}B>ee?Oe(b,I,N,!0,!1,W):D(v,E,L,I,N,q,K,U,W)},_e=(b,v,E,L,I,N,q,K,U)=>{let B=0;const ee=v.length;let W=b.length-1,X=ee-1;for(;B<=W&&B<=X;){const ae=b[B],oe=v[B]=U?Ct(v[B]):ut(v[B]);if(zt(ae,oe))c(ae,oe,E,null,I,N,q,K,U);else break;B++}for(;B<=W&&B<=X;){const ae=b[W],oe=v[X]=U?Ct(v[X]):ut(v[X]);if(zt(ae,oe))c(ae,oe,E,null,I,N,q,K,U);else break;W--,X--}if(B>W){if(B<=X){const ae=X+1,oe=ae<ee?v[ae].el:L;for(;B<=X;)c(null,v[B]=U?Ct(v[B]):ut(v[B]),E,oe,I,N,q,K,U),B++}}else if(B>X)for(;B<=W;)ge(b[B],I,N,!0),B++;else{const ae=B,oe=B,pe=new Map;for(B=oe;B<=X;B++){const He=v[B]=U?Ct(v[B]):ut(v[B]);He.key!=null&&pe.set(He.key,B)}let ue,Be=0;const Fe=X-oe+1;let at=!1,st=0;const _n=new Array(Fe);for(B=0;B<Fe;B++)_n[B]=0;for(B=ae;B<=W;B++){const He=b[B];if(Be>=Fe){ge(He,I,N,!0);continue}let rt;if(He.key!=null)rt=pe.get(He.key);else for(ue=oe;ue<=X;ue++)if(_n[ue-oe]===0&&zt(He,v[ue])){rt=ue;break}rt===void 0?ge(He,I,N,!0):(_n[rt-oe]=B+1,rt>=st?st=rt:at=!0,c(He,v[rt],E,null,I,N,q,K,U),Be++)}const Us=at?sc(_n):dn;for(ue=Us.length-1,B=Fe-1;B>=0;B--){const He=oe+B,rt=v[He],$s=v[He+1],Hs=He+1<ee?$s.el||$s.placeholder:L;_n[B]===0?c(null,rt,E,Hs,I,N,q,K,U):at&&(ue<0||B!==Us[ue]?Te(rt,E,Hs,2):ue--)}}},Te=(b,v,E,L,I=null)=>{const{el:N,type:q,transition:K,children:U,shapeFlag:B}=b;if(B&6){Te(b.component.subTree,v,E,L);return}if(B&128){b.suspense.move(v,E,L);return}if(B&64){q.move(b,v,E,z);return}if(q===ct){a(N,v,E);for(let W=0;W<U.length;W++)Te(U[W],v,E,L);a(b.anchor,v,E);return}if(q===Xn){T(b,v,E);return}if(L!==2&&B&1&&K)if(L===0)K.beforeEnter(N),a(N,v,E),Ke(()=>K.enter(N),I);else{const{leave:W,delayLeave:X,afterLeave:ae}=K,oe=()=>{b.ctx.isUnmounted?s(N):a(N,v,E)},pe=()=>{N._isLeaving&&N[yt](!0),W(N,()=>{oe(),ae&&ae()})};X?X(N,oe,pe):pe()}else a(N,v,E)},ge=(b,v,E,L=!1,I=!1)=>{const{type:N,props:q,ref:K,children:U,dynamicChildren:B,shapeFlag:ee,patchFlag:W,dirs:X,cacheIndex:ae}=b;if(W===-2&&(I=!1),K!=null&&(St(),Pn(K,null,E,b,!0),At()),ae!=null&&(v.renderCache[ae]=void 0),ee&256){v.ctx.deactivate(b);return}const oe=ee&1&&X,pe=!kn(b);let ue;if(pe&&(ue=q&&q.onVnodeBeforeUnmount)&&ot(ue,v,b),ee&6)Ae(b.component,E,L);else{if(ee&128){b.suspense.unmount(E,L);return}oe&&qt(b,null,v,"beforeUnmount"),ee&64?b.type.remove(b,v,E,z,L):B&&!B.hasOnce&&(N!==ct||W>0&&W&64)?Oe(B,v,E,!1,!0):(N===ct&&W&384||!I&&ee&16)&&Oe(U,v,E),L&&Ge(b)}(pe&&(ue=q&&q.onVnodeUnmounted)||oe)&&Ke(()=>{ue&&ot(ue,v,b),oe&&qt(b,null,v,"unmounted")},E)},Ge=b=>{const{type:v,el:E,anchor:L,transition:I}=b;if(v===ct){we(E,L);return}if(v===Xn){S(b);return}const N=()=>{s(E),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(b.shapeFlag&1&&I&&!I.persisted){const{leave:q,delayLeave:K}=I,U=()=>q(E,N);K?K(b.el,N,U):U()}else N()},we=(b,v)=>{let E;for(;b!==v;)E=h(b),s(b),b=E;s(v)},Ae=(b,v,E)=>{const{bum:L,scope:I,job:N,subTree:q,um:K,m:U,a:B}=b;er(U),er(B),L&&xa(L),I.stop(),N&&(N.flags|=8,ge(q,b,v,E)),K&&Ke(K,v),Ke(()=>{b.isUnmounted=!0},v)},Oe=(b,v,E,L=!1,I=!1,N=0)=>{for(let q=N;q<b.length;q++)ge(b[q],v,E,L,I)},C=b=>{if(b.shapeFlag&6)return C(b.component.subTree);if(b.shapeFlag&128)return b.suspense.next();const v=h(b.anchor||b.el),E=v&&v[Sl];return E?h(E):v};let G=!1;const H=(b,v,E)=>{b==null?v._vnode&&ge(v._vnode,null,null,!0):c(v._vnode||null,b,v,null,null,null,E),v._vnode=b,G||(G=!0,qs(),ko(),G=!1)},z={p:c,um:ge,m:Te,r:Ge,mt:$,mc:D,pc:Q,pbc:F,n:C,o:e};return{render:H,hydrate:void 0,createApp:Wl(H)}}function Ma({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Gt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function ac(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Xo(e,t,n=!1){const a=e.children,s=t.children;if(te(a)&&te(s))for(let r=0;r<a.length;r++){const o=a[r];let i=s[r];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=s[r]=Ct(s[r]),i.el=o.el),!n&&i.patchFlag!==-2&&Xo(o,i)),i.type===Ea&&i.patchFlag!==-1&&(i.el=o.el),i.type===Ye&&!i.el&&(i.el=o.el)}}function sc(e){const t=e.slice(),n=[0];let a,s,r,o,i;const l=e.length;for(a=0;a<l;a++){const f=e[a];if(f!==0){if(s=n[n.length-1],e[s]<f){t[a]=s,n.push(a);continue}for(r=0,o=n.length-1;r<o;)i=r+o>>1,e[n[i]]<f?r=i+1:o=i;f<e[n[r]]&&(r>0&&(t[a]=n[r-1]),n[r]=a)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=t[o];return n}function Zo(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Zo(t)}function er(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const rc=Symbol.for("v-scx"),oc=()=>Ve(rc);function xn(e,t,n){return ei(e,t,n)}function ei(e,t,n=he){const{immediate:a,deep:s,flush:r,once:o}=n,i=ke({},n),l=t&&a||!t&&r!=="post";let f;if(Fn){if(r==="sync"){const p=oc();f=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=dt,p.resume=dt,p.pause=dt,p}}const u=Ne;i.call=(p,g,c)=>tt(p,u,g,c);let d=!1;r==="post"?i.scheduler=p=>{Ke(p,u&&u.suspense)}:r!=="sync"&&(d=!0,i.scheduler=(p,g)=>{g?p():ws(p)}),i.augmentJob=p=>{t&&(p.flags|=4),d&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const h=yl(e,t,i);return Fn&&(f?f.push(h):l&&h()),h}function ic(e,t,n){const a=this.proxy,s=Se(e)?e.includes(".")?ti(a,e):()=>a[e]:e.bind(a,a);let r;se(t)?r=t:(r=t.handler,n=t);const o=Yn(this),i=ei(s,r.bind(a),n);return o(),i}function ti(e,t){const n=t.split(".");return()=>{let a=e;for(let s=0;s<n.length&&a;s++)a=a[n[s]];return a}}const lc=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${ze(t)}Modifiers`]||e[`${Ht(t)}Modifiers`];function cc(e,t,...n){if(e.isUnmounted)return;const a=e.vnode.props||he;let s=n;const r=t.startsWith("update:"),o=r&&lc(a,t.slice(7));o&&(o.trim&&(s=n.map(u=>Se(u)?u.trim():u)),o.number&&(s=n.map(Mi)));let i,l=a[i=wa(t)]||a[i=wa(ze(t))];!l&&r&&(l=a[i=wa(Ht(t))]),l&&tt(l,e,6,s);const f=a[i+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,tt(f,e,6,s)}}const uc=new WeakMap;function ni(e,t,n=!1){const a=n?uc:t.emitsCache,s=a.get(e);if(s!==void 0)return s;const r=e.emits;let o={},i=!1;if(!se(e)){const l=f=>{const u=ni(f,t,!0);u&&(i=!0,ke(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!r&&!i?(me(e)&&a.set(e,null),null):(te(r)?r.forEach(l=>o[l]=null):ke(o,r),me(e)&&a.set(e,o),o)}function Ta(e,t){return!e||!pa(t)?!1:(t=t.slice(2).replace(/Once$/,""),ce(e,t[0].toLowerCase()+t.slice(1))||ce(e,Ht(t))||ce(e,t))}function tr(e){const{type:t,vnode:n,proxy:a,withProxy:s,propsOptions:[r],slots:o,attrs:i,emit:l,render:f,renderCache:u,props:d,data:h,setupState:p,ctx:g,inheritAttrs:c}=e,m=sa(e);let _,y;try{if(n.shapeFlag&4){const S=s||a,x=S;_=ut(f.call(x,S,u,d,p,h,g)),y=i}else{const S=t;_=ut(S.length>1?S(d,{attrs:i,slots:o,emit:l}):S(d,null)),y=t.props?i:dc(i)}}catch(S){Rn.length=0,_a(S,e,1),_=$e(Ye)}let T=_;if(y&&c!==!1){const S=Object.keys(y),{shapeFlag:x}=T;S.length&&x&7&&(r&&S.some(hs)&&(y=pc(y,r)),T=Ft(T,y,!1,!0))}return n.dirs&&(T=Ft(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(n.dirs):n.dirs),n.transition&&Mn(T,n.transition),_=T,sa(m),_}const dc=e=>{let t;for(const n in e)(n==="class"||n==="style"||pa(n))&&((t||(t={}))[n]=e[n]);return t},pc=(e,t)=>{const n={};for(const a in e)(!hs(a)||!(a.slice(9)in t))&&(n[a]=e[a]);return n};function fc(e,t,n){const{props:a,children:s,component:r}=e,{props:o,children:i,patchFlag:l}=t,f=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return a?nr(a,o,f):!!o;if(l&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==a[h]&&!Ta(f,h))return!0}}}else return(s||i)&&(!i||!i.$stable)?!0:a===o?!1:a?o?nr(a,o,f):!0:!!o;return!1}function nr(e,t,n){const a=Object.keys(t);if(a.length!==Object.keys(e).length)return!0;for(let s=0;s<a.length;s++){const r=a[s];if(t[r]!==e[r]&&!Ta(n,r))return!0}return!1}function hc({vnode:e,parent:t},n){for(;t;){const a=t.subTree;if(a.suspense&&a.suspense.activeBranch===e&&(a.el=e.el),a===e)(e=t.vnode).el=n,t=t.parent;else break}}const ai=e=>e.__isSuspense;function gc(e,t){t&&t.pendingBranch?te(e)?t.effects.push(...e):t.effects.push(e):El(e)}const ct=Symbol.for("v-fgt"),Ea=Symbol.for("v-txt"),Ye=Symbol.for("v-cmt"),Xn=Symbol.for("v-stc"),Rn=[];let qe=null;function Qe(e=!1){Rn.push(qe=e?null:[])}function mc(){Rn.pop(),qe=Rn[Rn.length-1]||null}let Bn=1;function ia(e,t=!1){Bn+=e,e<0&&qe&&t&&(qe.hasOnce=!0)}function si(e){return e.dynamicChildren=Bn>0?qe||dn:null,mc(),Bn>0&&qe&&qe.push(e),e}function pt(e,t,n,a,s,r){return si(k(e,t,n,a,s,r,!0))}function ar(e,t,n,a,s){return si($e(e,t,n,a,s,!0))}function la(e){return e?e.__v_isVNode===!0:!1}function zt(e,t){return e.type===t.type&&e.key===t.key}const ri=({key:e})=>e??null,Zn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Se(e)||Ee(e)||se(e)?{i:Xe,r:e,k:t,f:!!n}:e:null);function k(e,t=null,n=null,a=0,s=null,r=e===ct?0:1,o=!1,i=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ri(t),ref:t&&Zn(t),scopeId:xo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:a,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Xe};return i?(Cs(l,n),r&128&&e.normalize(l)):n&&(l.shapeFlag|=Se(n)?8:16),Bn>0&&!o&&qe&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&qe.push(l),l}const $e=_c;function _c(e,t=null,n=null,a=0,s=null,r=!1){if((!e||e===$o)&&(e=Ye),la(e)){const i=Ft(e,t,!0);return n&&Cs(i,n),Bn>0&&!r&&qe&&(i.shapeFlag&6?qe[qe.indexOf(e)]=i:qe.push(i)),i.patchFlag=-2,i}if(wc(e)&&(e=e.__vccOpts),t){t=bc(t);let{class:i,style:l}=t;i&&!Se(i)&&(t.class=Bt(i)),me(l)&&(Os(l)&&!te(l)&&(l=ke({},l)),t.style=_s(l))}const o=Se(e)?1:ai(e)?128:Ro(e)?64:me(e)?4:se(e)?2:0;return k(e,t,n,a,s,o,r,!0)}function bc(e){return e?Os(e)||Go(e)?ke({},e):e:null}function Ft(e,t,n=!1,a=!1){const{props:s,ref:r,patchFlag:o,children:i,transition:l}=e,f=t?yc(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&ri(f),ref:t&&t.ref?n&&r?te(r)?r.concat(Zn(t)):[r,Zn(t)]:Zn(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ct?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ft(e.ssContent),ssFallback:e.ssFallback&&Ft(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&a&&Mn(u,l.clone(u)),u}function Sa(e=" ",t=0){return $e(Ea,null,e,t)}function Yt(e,t){const n=$e(Xn,null,e);return n.staticCount=t,n}function ut(e){return e==null||typeof e=="boolean"?$e(Ye):te(e)?$e(ct,null,e.slice()):la(e)?Ct(e):$e(Ea,null,String(e))}function Ct(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ft(e)}function Cs(e,t){let n=0;const{shapeFlag:a}=e;if(t==null)t=null;else if(te(t))n=16;else if(typeof t=="object")if(a&65){const s=t.default;s&&(s._c&&(s._d=!1),Cs(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!Go(t)?t._ctx=Xe:s===3&&Xe&&(Xe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else se(t)?(t={default:t,_ctx:Xe},n=32):(t=String(t),a&64?(n=16,t=[Sa(t)]):n=8);e.children=t,e.shapeFlag|=n}function yc(...e){const t={};for(let n=0;n<e.length;n++){const a=e[n];for(const s in a)if(s==="class")t.class!==a.class&&(t.class=Bt([t.class,a.class]));else if(s==="style")t.style=_s([t.style,a.style]);else if(pa(s)){const r=t[s],o=a[s];o&&r!==o&&!(te(r)&&r.includes(o))&&(t[s]=r?[].concat(r,o):o)}else s!==""&&(t[s]=a[s])}return t}function ot(e,t,n,a=null){tt(e,t,7,[n,a])}const vc=Yo();let Tc=0;function Ec(e,t,n){const a=e.type,s=(t?t.appContext:e.appContext)||vc,r={uid:Tc++,vnode:e,type:a,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new so(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Jo(a,s),emitsOptions:ni(a,s),emit:null,emitted:null,propsDefaults:he,inheritAttrs:a.inheritAttrs,ctx:he,data:he,props:he,attrs:he,slots:he,refs:he,setupState:he,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=cc.bind(null,r),e.ce&&e.ce(r),r}let Ne=null;const Ns=()=>Ne||Xe;let ca,ss;{const e=ma(),t=(n,a)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(a),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};ca=t("__VUE_INSTANCE_SETTERS__",n=>Ne=n),ss=t("__VUE_SSR_SETTERS__",n=>Fn=n)}const Yn=e=>{const t=Ne;return ca(e),e.scope.on(),()=>{e.scope.off(),ca(t)}},sr=()=>{Ne&&Ne.scope.off(),ca(null)};function oi(e){return e.vnode.shapeFlag&4}let Fn=!1;function Sc(e,t=!1,n=!1){t&&ss(t);const{props:a,children:s}=e.vnode,r=oi(e);Vl(e,a,r,t),Zl(e,s,n||t);const o=r?Ac(e,t):void 0;return t&&ss(!1),o}function Ac(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,$l);const{setup:a}=n;if(a){St();const s=e.setupContext=a.length>1?Pc(e):null,r=Yn(e),o=Kn(a,e,0,[e.props,s]),i=zr(o);if(At(),r(),(i||e.sp)&&!kn(e)&&Bo(e),i){if(o.then(sr,sr),t)return o.then(l=>{rr(e,l)}).catch(l=>{_a(l,e,0)});e.asyncDep=o}else rr(e,o)}else ii(e)}function rr(e,t,n){se(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:me(t)&&(e.setupState=Ao(t)),ii(e)}function ii(e,t,n){const a=e.type;e.render||(e.render=a.render||dt);{const s=Yn(e);St();try{Hl(e)}finally{At(),s()}}}const Oc={get(e,t){return Ce(e,"get",""),e[t]}};function Pc(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Oc),slots:e.slots,emit:e.emit,expose:t}}function Ls(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Ao(Ps(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in wn)return wn[n](e)},has(t,n){return n in t||n in wn}})):e.proxy}function kc(e,t=!0){return se(e)?e.displayName||e.name:e.name||t&&e.__name}function wc(e){return se(e)&&"__vccOpts"in e}const je=(e,t)=>_l(e,t,Fn);function Is(e,t,n){try{ia(-1);const a=arguments.length;return a===2?me(t)&&!te(t)?la(t)?$e(e,null,[t]):$e(e,t):$e(e,null,t):(a>3?n=Array.prototype.slice.call(arguments,2):a===3&&la(n)&&(n=[n]),$e(e,t,n))}finally{ia(1)}}const xc="3.5.24";let rs;const or=typeof window<"u"&&window.trustedTypes;if(or)try{rs=or.createPolicy("vue",{createHTML:e=>e})}catch{}const li=rs?e=>rs.createHTML(e):e=>e,Rc="http://www.w3.org/2000/svg",Cc="http://www.w3.org/1998/Math/MathML",bt=typeof document<"u"?document:null,ir=bt&&bt.createElement("template"),Nc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,a)=>{const s=t==="svg"?bt.createElementNS(Rc,e):t==="mathml"?bt.createElementNS(Cc,e):n?bt.createElement(e,{is:n}):bt.createElement(e);return e==="select"&&a&&a.multiple!=null&&s.setAttribute("multiple",a.multiple),s},createText:e=>bt.createTextNode(e),createComment:e=>bt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>bt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,a,s,r){const o=n?n.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{ir.innerHTML=li(a==="svg"?`<svg>${e}</svg>`:a==="mathml"?`<math>${e}</math>`:e);const i=ir.content;if(a==="svg"||a==="mathml"){const l=i.firstChild;for(;l.firstChild;)i.appendChild(l.firstChild);i.removeChild(l)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},kt="transition",yn="animation",Un=Symbol("_vtc"),ci={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Lc=ke({},Co,ci),Ic=e=>(e.displayName="Transition",e.props=Lc,e),Dc=Ic((e,{slots:t})=>Is(Pl,Mc(e),t)),Wt=(e,t=[])=>{te(e)?e.forEach(n=>n(...t)):e&&e(...t)},lr=e=>e?te(e)?e.some(t=>t.length>1):e.length>1:!1;function Mc(e){const t={};for(const P in e)P in ci||(t[P]=e[P]);if(e.css===!1)return t;const{name:n="v",type:a,duration:s,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:i=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:f=o,appearToClass:u=i,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,g=Bc(s),c=g&&g[0],m=g&&g[1],{onBeforeEnter:_,onEnter:y,onEnterCancelled:T,onLeave:S,onLeaveCancelled:x,onBeforeAppear:R=_,onAppear:w=y,onAppearCancelled:D=T}=t,O=(P,V,$,ne)=>{P._enterCancelled=ne,Jt(P,V?u:i),Jt(P,V?f:o),$&&$()},F=(P,V)=>{P._isLeaving=!1,Jt(P,d),Jt(P,p),Jt(P,h),V&&V()},Y=P=>(V,$)=>{const ne=P?w:y,Z=()=>O(V,P,$);Wt(ne,[V,Z]),cr(()=>{Jt(V,P?l:r),gt(V,P?u:i),lr(ne)||ur(V,a,c,Z)})};return ke(t,{onBeforeEnter(P){Wt(_,[P]),gt(P,r),gt(P,o)},onBeforeAppear(P){Wt(R,[P]),gt(P,l),gt(P,f)},onEnter:Y(!1),onAppear:Y(!0),onLeave(P,V){P._isLeaving=!0;const $=()=>F(P,V);gt(P,d),P._enterCancelled?(gt(P,h),fr(P)):(fr(P),gt(P,h)),cr(()=>{P._isLeaving&&(Jt(P,d),gt(P,p),lr(S)||ur(P,a,m,$))}),Wt(S,[P,$])},onEnterCancelled(P){O(P,!1,void 0,!0),Wt(T,[P])},onAppearCancelled(P){O(P,!0,void 0,!0),Wt(D,[P])},onLeaveCancelled(P){F(P),Wt(x,[P])}})}function Bc(e){if(e==null)return null;if(me(e))return[Ba(e.enter),Ba(e.leave)];{const t=Ba(e);return[t,t]}}function Ba(e){return Bi(e)}function gt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Un]||(e[Un]=new Set)).add(t)}function Jt(e,t){t.split(/\s+/).forEach(a=>a&&e.classList.remove(a));const n=e[Un];n&&(n.delete(t),n.size||(e[Un]=void 0))}function cr(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Fc=0;function ur(e,t,n,a){const s=e._endId=++Fc,r=()=>{s===e._endId&&a()};if(n!=null)return setTimeout(r,n);const{type:o,timeout:i,propCount:l}=Uc(e,t);if(!o)return a();const f=o+"end";let u=0;const d=()=>{e.removeEventListener(f,h),r()},h=p=>{p.target===e&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},i+1),e.addEventListener(f,h)}function Uc(e,t){const n=window.getComputedStyle(e),a=g=>(n[g]||"").split(", "),s=a(`${kt}Delay`),r=a(`${kt}Duration`),o=dr(s,r),i=a(`${yn}Delay`),l=a(`${yn}Duration`),f=dr(i,l);let u=null,d=0,h=0;t===kt?o>0&&(u=kt,d=o,h=r.length):t===yn?f>0&&(u=yn,d=f,h=l.length):(d=Math.max(o,f),u=d>0?o>f?kt:yn:null,h=u?u===kt?r.length:l.length:0);const p=u===kt&&/\b(?:transform|all)(?:,|$)/.test(a(`${kt}Property`).toString());return{type:u,timeout:d,propCount:h,hasTransform:p}}function dr(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,a)=>pr(n)+pr(e[a])))}function pr(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function fr(e){return(e?e.ownerDocument:document).body.offsetHeight}function $c(e,t,n){const a=e[Un];a&&(t=(t?[t,...a]:[...a]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const hr=Symbol("_vod"),Hc=Symbol("_vsh"),Kc=Symbol(""),Yc=/(?:^|;)\s*display\s*:/;function jc(e,t,n){const a=e.style,s=Se(n);let r=!1;if(n&&!s){if(t)if(Se(t))for(const o of t.split(";")){const i=o.slice(0,o.indexOf(":")).trim();n[i]==null&&ea(a,i,"")}else for(const o in t)n[o]==null&&ea(a,o,"");for(const o in n)o==="display"&&(r=!0),ea(a,o,n[o])}else if(s){if(t!==n){const o=a[Kc];o&&(n+=";"+o),a.cssText=n,r=Yc.test(n)}}else t&&e.removeAttribute("style");hr in e&&(e[hr]=r?a.display:"",e[Hc]&&(a.display="none"))}const gr=/\s*!important$/;function ea(e,t,n){if(te(n))n.forEach(a=>ea(e,t,a));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const a=qc(e,t);gr.test(n)?e.setProperty(Ht(a),n.replace(gr,""),"important"):e[a]=n}}const mr=["Webkit","Moz","ms"],Fa={};function qc(e,t){const n=Fa[t];if(n)return n;let a=ze(t);if(a!=="filter"&&a in e)return Fa[t]=a;a=ga(a);for(let s=0;s<mr.length;s++){const r=mr[s]+a;if(r in e)return Fa[t]=r}return t}const _r="http://www.w3.org/1999/xlink";function br(e,t,n,a,s,r=Yi(t)){a&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(_r,t.slice(6,t.length)):e.setAttributeNS(_r,t,n):n==null||r&&!eo(n)?e.removeAttribute(t):e.setAttribute(t,r?"":$t(n)?String(n):n)}function yr(e,t,n,a,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?li(n):n);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const i=r==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(i!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const i=typeof e[t];i==="boolean"?n=eo(n):n==null&&i==="string"?(n="",o=!0):i==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(s||t)}function Gc(e,t,n,a){e.addEventListener(t,n,a)}function Wc(e,t,n,a){e.removeEventListener(t,n,a)}const vr=Symbol("_vei");function Jc(e,t,n,a,s=null){const r=e[vr]||(e[vr]={}),o=r[t];if(a&&o)o.value=a;else{const[i,l]=Vc(t);if(a){const f=r[t]=Xc(a,s);Gc(e,i,f,l)}else o&&(Wc(e,i,o,l),r[t]=void 0)}}const Tr=/(?:Once|Passive|Capture)$/;function Vc(e){let t;if(Tr.test(e)){t={};let a;for(;a=e.match(Tr);)e=e.slice(0,e.length-a[0].length),t[a[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ht(e.slice(2)),t]}let Ua=0;const zc=Promise.resolve(),Qc=()=>Ua||(zc.then(()=>Ua=0),Ua=Date.now());function Xc(e,t){const n=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=n.attached)return;tt(Zc(a,n.value),t,5,[a])};return n.value=e,n.attached=Qc(),n}function Zc(e,t){if(te(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(a=>s=>!s._stopped&&a&&a(s))}else return t}const Er=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,eu=(e,t,n,a,s,r)=>{const o=s==="svg";t==="class"?$c(e,a,o):t==="style"?jc(e,n,a):pa(t)?hs(t)||Jc(e,t,n,a,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):tu(e,t,a,o))?(yr(e,t,a),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&br(e,t,a,o,r,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Se(a))?yr(e,ze(t),a,r,t):(t==="true-value"?e._trueValue=a:t==="false-value"&&(e._falseValue=a),br(e,t,a,o))};function tu(e,t,n,a){if(a)return!!(t==="innerHTML"||t==="textContent"||t in e&&Er(t)&&se(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Er(t)&&Se(n)?!1:t in e}const nu=["ctrl","shift","alt","meta"],au={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>nu.some(n=>e[`${n}Key`]&&!t.includes(n))},Aa=(e,t)=>{const n=e._withMods||(e._withMods={}),a=t.join(".");return n[a]||(n[a]=((s,...r)=>{for(let o=0;o<t.length;o++){const i=au[t[o]];if(i&&i(s,t))return}return e(s,...r)}))},su={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},vt=(e,t)=>{const n=e._withKeys||(e._withKeys={}),a=t.join(".");return n[a]||(n[a]=(s=>{if(!("key"in s))return;const r=Ht(s.key);if(t.some(o=>o===r||su[o]===r))return e(s)}))},ru=ke({patchProp:eu},Nc);let Sr;function ou(){return Sr||(Sr=tc(ru))}const iu=((...e)=>{const t=ou().createApp(...e),{mount:n}=t;return t.mount=a=>{const s=cu(a);if(!s)return;const r=t._component;!se(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,lu(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t});function lu(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function cu(e){return Se(e)?document.querySelector(e):e}let ui;const Oa=e=>ui=e,di=Symbol();function os(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Cn;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Cn||(Cn={}));function uu(){const e=ro(!0),t=e.run(()=>Je({}));let n=[],a=[];const s=Ps({install(r){Oa(s),s._a=r,r.provide(di,s),r.config.globalProperties.$pinia=s,a.forEach(o=>n.push(o)),a=[]},use(r){return this._a?n.push(r):a.push(r),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}const pi=()=>{};function Ar(e,t,n,a=pi){e.add(t);const s=()=>{e.delete(t)&&a()};return!n&&oo()&&ji(s),s}function rn(e,...t){e.forEach(n=>{n(...t)})}const du=e=>e(),Or=Symbol(),$a=Symbol();function is(e,t){e instanceof Map&&t instanceof Map?t.forEach((n,a)=>e.set(a,n)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const a=t[n],s=e[n];os(s)&&os(a)&&e.hasOwnProperty(n)&&!Ee(a)&&!tn(a)?e[n]=is(s,a):e[n]=a}return e}const pu=Symbol();function fu(e){return!os(e)||!Object.prototype.hasOwnProperty.call(e,pu)}const{assign:xt}=Object;function hu(e){return!!(Ee(e)&&e.effect)}function gu(e,t,n,a){const{state:s,actions:r,getters:o}=t,i=n.state.value[e];let l;function f(){i||(n.state.value[e]=s?s():{});const u=fl(n.state.value[e]);return xt(u,r,Object.keys(o||{}).reduce((d,h)=>(d[h]=Ps(je(()=>{Oa(n);const p=n._s.get(e);return o[h].call(p,p)})),d),{}))}return l=fi(e,f,t,n,a,!0),l}function fi(e,t,n={},a,s,r){let o;const i=xt({actions:{}},n),l={deep:!0};let f,u,d=new Set,h=new Set,p;const g=a.state.value[e];!r&&!g&&(a.state.value[e]={}),Je({});let c;function m(D){let O;f=u=!1,typeof D=="function"?(D(a.state.value[e]),O={type:Cn.patchFunction,storeId:e,events:p}):(is(a.state.value[e],D),O={type:Cn.patchObject,payload:D,storeId:e,events:p});const F=c=Symbol();ks().then(()=>{c===F&&(f=!0)}),u=!0,rn(d,O,a.state.value[e])}const _=r?function(){const{state:O}=n,F=O?O():{};this.$patch(Y=>{xt(Y,F)})}:pi;function y(){o.stop(),d.clear(),h.clear(),a._s.delete(e)}const T=(D,O="")=>{if(Or in D)return D[$a]=O,D;const F=function(){Oa(a);const Y=Array.from(arguments),P=new Set,V=new Set;function $(j){P.add(j)}function ne(j){V.add(j)}rn(h,{args:Y,name:F[$a],store:x,after:$,onError:ne});let Z;try{Z=D.apply(this&&this.$id===e?this:x,Y)}catch(j){throw rn(V,j),j}return Z instanceof Promise?Z.then(j=>(rn(P,j),j)).catch(j=>(rn(V,j),Promise.reject(j))):(rn(P,Z),Z)};return F[Or]=!0,F[$a]=O,F},S={_p:a,$id:e,$onAction:Ar.bind(null,h),$patch:m,$reset:_,$subscribe(D,O={}){const F=Ar(d,D,O.detached,()=>Y()),Y=o.run(()=>xn(()=>a.state.value[e],P=>{(O.flush==="sync"?u:f)&&D({storeId:e,type:Cn.direct,events:p},P)},xt({},l,O)));return F},$dispose:y},x=Et(S);a._s.set(e,x);const w=(a._a&&a._a.runWithContext||du)(()=>a._e.run(()=>(o=ro()).run(()=>t({action:T}))));for(const D in w){const O=w[D];if(Ee(O)&&!hu(O)||tn(O))r||(g&&fu(O)&&(Ee(O)?O.value=g[D]:is(O,g[D])),a.state.value[e][D]=O);else if(typeof O=="function"){const F=T(O,D);w[D]=F,i.actions[D]=O}}return xt(x,w),xt(ie(x),w),Object.defineProperty(x,"$state",{get:()=>a.state.value[e],set:D=>{m(O=>{xt(O,D)})}}),a._p.forEach(D=>{xt(x,o.run(()=>D({store:x,app:a._a,pinia:a,options:i})))}),g&&r&&n.hydrate&&n.hydrate(x.$state,g),f=!0,u=!0,x}function mu(e,t,n){let a;const s=typeof t=="function";a=s?n:t;function r(o,i){const l=Jl();return o=o||(l?Ve(di,null):null),o&&Oa(o),o=ui,o._s.has(e)||(s?fi(e,t,a,o):gu(e,a,o)),o._s.get(e)}return r.$id=e,r}const cn=typeof document<"u";function hi(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function _u(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&hi(e.default)}const le=Object.assign;function Ha(e,t){const n={};for(const a in t){const s=t[a];n[a]=nt(s)?s.map(e):e(s)}return n}const Nn=()=>{},nt=Array.isArray;function Pr(e,t){const n={};for(const a in e)n[a]=a in t?t[a]:e[a];return n}const gi=/#/g,bu=/&/g,yu=/\//g,vu=/=/g,Tu=/\?/g,mi=/\+/g,Eu=/%5B/g,Su=/%5D/g,_i=/%5E/g,Au=/%60/g,bi=/%7B/g,Ou=/%7C/g,yi=/%7D/g,Pu=/%20/g;function Ds(e){return e==null?"":encodeURI(""+e).replace(Ou,"|").replace(Eu,"[").replace(Su,"]")}function ku(e){return Ds(e).replace(bi,"{").replace(yi,"}").replace(_i,"^")}function ls(e){return Ds(e).replace(mi,"%2B").replace(Pu,"+").replace(gi,"%23").replace(bu,"%26").replace(Au,"`").replace(bi,"{").replace(yi,"}").replace(_i,"^")}function wu(e){return ls(e).replace(vu,"%3D")}function xu(e){return Ds(e).replace(gi,"%23").replace(Tu,"%3F")}function Ru(e){return xu(e).replace(yu,"%2F")}function $n(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Cu=/\/$/,Nu=e=>e.replace(Cu,"");function Ka(e,t,n="/"){let a,s={},r="",o="";const i=t.indexOf("#");let l=t.indexOf("?");return l=i>=0&&l>i?-1:l,l>=0&&(a=t.slice(0,l),r=t.slice(l,i>0?i:t.length),s=e(r.slice(1))),i>=0&&(a=a||t.slice(0,i),o=t.slice(i,t.length)),a=Mu(a??t,n),{fullPath:a+r+o,path:a,query:s,hash:$n(o)}}function Lu(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function kr(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Iu(e,t,n){const a=t.matched.length-1,s=n.matched.length-1;return a>-1&&a===s&&hn(t.matched[a],n.matched[s])&&vi(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function hn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function vi(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Du(e[n],t[n]))return!1;return!0}function Du(e,t){return nt(e)?wr(e,t):nt(t)?wr(t,e):e===t}function wr(e,t){return nt(t)?e.length===t.length&&e.every((n,a)=>n===t[a]):e.length===1&&e[0]===t}function Mu(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),a=e.split("/"),s=a[a.length-1];(s===".."||s===".")&&a.push("");let r=n.length-1,o,i;for(o=0;o<a.length;o++)if(i=a[o],i!==".")if(i==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+a.slice(o).join("/")}const wt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let cs=(function(e){return e.pop="pop",e.push="push",e})({}),Ya=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function Bu(e){if(!e)if(cn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Nu(e)}const Fu=/^[^#]+#/;function Uu(e,t){return e.replace(Fu,"#")+t}function $u(e,t){const n=document.documentElement.getBoundingClientRect(),a=e.getBoundingClientRect();return{behavior:t.behavior,left:a.left-n.left-(t.left||0),top:a.top-n.top-(t.top||0)}}const Pa=()=>({left:window.scrollX,top:window.scrollY});function Hu(e){let t;if("el"in e){const n=e.el,a=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?a?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=$u(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function xr(e,t){return(history.state?history.state.position-t:-1)+e}const us=new Map;function Ku(e,t){us.set(e,t)}function Yu(e){const t=us.get(e);return us.delete(e),t}function ju(e){return typeof e=="string"||e&&typeof e=="object"}function Ti(e){return typeof e=="string"||typeof e=="symbol"}let ve=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const Ei=Symbol("");ve.MATCHER_NOT_FOUND+"",ve.NAVIGATION_GUARD_REDIRECT+"",ve.NAVIGATION_ABORTED+"",ve.NAVIGATION_CANCELLED+"",ve.NAVIGATION_DUPLICATED+"";function gn(e,t){return le(new Error,{type:e,[Ei]:!0},t)}function mt(e,t){return e instanceof Error&&Ei in e&&(t==null||!!(e.type&t))}const qu=["params","query","hash"];function Gu(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of qu)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function Wu(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<n.length;++a){const s=n[a].replace(mi," "),r=s.indexOf("="),o=$n(r<0?s:s.slice(0,r)),i=r<0?null:$n(s.slice(r+1));if(o in t){let l=t[o];nt(l)||(l=t[o]=[l]),l.push(i)}else t[o]=i}return t}function Rr(e){let t="";for(let n in e){const a=e[n];if(n=wu(n),a==null){a!==void 0&&(t+=(t.length?"&":"")+n);continue}(nt(a)?a.map(s=>s&&ls(s)):[a&&ls(a)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function Ju(e){const t={};for(const n in e){const a=e[n];a!==void 0&&(t[n]=nt(a)?a.map(s=>s==null?null:""+s):a==null?a:""+a)}return t}const Vu=Symbol(""),Cr=Symbol(""),ka=Symbol(""),Ms=Symbol(""),ds=Symbol("");function vn(){let e=[];function t(a){return e.push(a),()=>{const s=e.indexOf(a);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Nt(e,t,n,a,s,r=o=>o()){const o=a&&(a.enterCallbacks[s]=a.enterCallbacks[s]||[]);return()=>new Promise((i,l)=>{const f=h=>{h===!1?l(gn(ve.NAVIGATION_ABORTED,{from:n,to:t})):h instanceof Error?l(h):ju(h)?l(gn(ve.NAVIGATION_GUARD_REDIRECT,{from:t,to:h})):(o&&a.enterCallbacks[s]===o&&typeof h=="function"&&o.push(h),i())},u=r(()=>e.call(a&&a.instances[s],t,n,f));let d=Promise.resolve(u);e.length<3&&(d=d.then(f)),d.catch(h=>l(h))})}function ja(e,t,n,a,s=r=>r()){const r=[];for(const o of e)for(const i in o.components){let l=o.components[i];if(!(t!=="beforeRouteEnter"&&!o.instances[i]))if(hi(l)){const f=(l.__vccOpts||l)[t];f&&r.push(Nt(f,n,a,o,i,s))}else{let f=l();r.push(()=>f.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${i}" at "${o.path}"`);const d=_u(u)?u.default:u;o.mods[i]=u,o.components[i]=d;const h=(d.__vccOpts||d)[t];return h&&Nt(h,n,a,o,i,s)()}))}}return r}function zu(e,t){const n=[],a=[],s=[],r=Math.max(t.matched.length,e.matched.length);for(let o=0;o<r;o++){const i=t.matched[o];i&&(e.matched.find(f=>hn(f,i))?a.push(i):n.push(i));const l=e.matched[o];l&&(t.matched.find(f=>hn(f,l))||s.push(l))}return[n,a,s]}let Qu=()=>location.protocol+"//"+location.host;function Si(e,t){const{pathname:n,search:a,hash:s}=t,r=e.indexOf("#");if(r>-1){let o=s.includes(e.slice(r))?e.slice(r).length:1,i=s.slice(o);return i[0]!=="/"&&(i="/"+i),kr(i,"")}return kr(n,e)+a+s}function Xu(e,t,n,a){let s=[],r=[],o=null;const i=({state:h})=>{const p=Si(e,location),g=n.value,c=t.value;let m=0;if(h){if(n.value=p,t.value=h,o&&o===g){o=null;return}m=c?h.position-c.position:0}else a(p);s.forEach(_=>{_(n.value,g,{delta:m,type:cs.pop,direction:m?m>0?Ya.forward:Ya.back:Ya.unknown})})};function l(){o=n.value}function f(h){s.push(h);const p=()=>{const g=s.indexOf(h);g>-1&&s.splice(g,1)};return r.push(p),p}function u(){if(document.visibilityState==="hidden"){const{history:h}=window;if(!h.state)return;h.replaceState(le({},h.state,{scroll:Pa()}),"")}}function d(){for(const h of r)h();r=[],window.removeEventListener("popstate",i),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",i),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:f,destroy:d}}function Nr(e,t,n,a=!1,s=!1){return{back:e,current:t,forward:n,replaced:a,position:window.history.length,scroll:s?Pa():null}}function Zu(e){const{history:t,location:n}=window,a={value:Si(e,n)},s={value:t.state};s.value||r(a.value,{back:null,current:a.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(l,f,u){const d=e.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+l:Qu()+e+l;try{t[u?"replaceState":"pushState"](f,"",h),s.value=f}catch(p){console.error(p),n[u?"replace":"assign"](h)}}function o(l,f){r(l,le({},t.state,Nr(s.value.back,l,s.value.forward,!0),f,{position:s.value.position}),!0),a.value=l}function i(l,f){const u=le({},s.value,t.state,{forward:l,scroll:Pa()});r(u.current,u,!0),r(l,le({},Nr(a.value,l,null),{position:u.position+1},f),!1),a.value=l}return{location:a,state:s,push:i,replace:o}}function ed(e){e=Bu(e);const t=Zu(e),n=Xu(e,t.state,t.location,t.replace);function a(r,o=!0){o||n.pauseListeners(),history.go(r)}const s=le({location:"",base:e,go:a,createHref:Uu.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function td(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),ed(e)}let Xt=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var Pe=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(Pe||{});const nd={type:Xt.Static,value:""},ad=/[a-zA-Z0-9_]/;function sd(e){if(!e)return[[]];if(e==="/")return[[nd]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(p){throw new Error(`ERR (${n})/"${f}": ${p}`)}let n=Pe.Static,a=n;const s=[];let r;function o(){r&&s.push(r),r=[]}let i=0,l,f="",u="";function d(){f&&(n===Pe.Static?r.push({type:Xt.Static,value:f}):n===Pe.Param||n===Pe.ParamRegExp||n===Pe.ParamRegExpEnd?(r.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),r.push({type:Xt.Param,value:f,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),f="")}function h(){f+=l}for(;i<e.length;){if(l=e[i++],l==="\\"&&n!==Pe.ParamRegExp){a=n,n=Pe.EscapeNext;continue}switch(n){case Pe.Static:l==="/"?(f&&d(),o()):l===":"?(d(),n=Pe.Param):h();break;case Pe.EscapeNext:h(),n=a;break;case Pe.Param:l==="("?n=Pe.ParamRegExp:ad.test(l)?h():(d(),n=Pe.Static,l!=="*"&&l!=="?"&&l!=="+"&&i--);break;case Pe.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=Pe.ParamRegExpEnd:u+=l;break;case Pe.ParamRegExpEnd:d(),n=Pe.Static,l!=="*"&&l!=="?"&&l!=="+"&&i--,u="";break;default:t("Unknown state");break}}return n===Pe.ParamRegExp&&t(`Unfinished custom RegExp for param "${f}"`),d(),o(),s}const Lr="[^/]+?",rd={sensitive:!1,strict:!1,start:!0,end:!0};var Ie=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(Ie||{});const od=/[.+*?^${}()[\]/\\]/g;function id(e,t){const n=le({},rd,t),a=[];let s=n.start?"^":"";const r=[];for(const f of e){const u=f.length?[]:[Ie.Root];n.strict&&!f.length&&(s+="/");for(let d=0;d<f.length;d++){const h=f[d];let p=Ie.Segment+(n.sensitive?Ie.BonusCaseSensitive:0);if(h.type===Xt.Static)d||(s+="/"),s+=h.value.replace(od,"\\$&"),p+=Ie.Static;else if(h.type===Xt.Param){const{value:g,repeatable:c,optional:m,regexp:_}=h;r.push({name:g,repeatable:c,optional:m});const y=_||Lr;if(y!==Lr){p+=Ie.BonusCustomRegExp;try{`${y}`}catch(S){throw new Error(`Invalid custom RegExp for param "${g}" (${y}): `+S.message)}}let T=c?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;d||(T=m&&f.length<2?`(?:/${T})`:"/"+T),m&&(T+="?"),s+=T,p+=Ie.Dynamic,m&&(p+=Ie.BonusOptional),c&&(p+=Ie.BonusRepeatable),y===".*"&&(p+=Ie.BonusWildcard)}u.push(p)}a.push(u)}if(n.strict&&n.end){const f=a.length-1;a[f][a[f].length-1]+=Ie.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function i(f){const u=f.match(o),d={};if(!u)return null;for(let h=1;h<u.length;h++){const p=u[h]||"",g=r[h-1];d[g.name]=p&&g.repeatable?p.split("/"):p}return d}function l(f){let u="",d=!1;for(const h of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const p of h)if(p.type===Xt.Static)u+=p.value;else if(p.type===Xt.Param){const{value:g,repeatable:c,optional:m}=p,_=g in f?f[g]:"";if(nt(_)&&!c)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const y=nt(_)?_.join("/"):_;if(!y)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${g}"`);u+=y}}return u||"/"}return{re:o,score:a,keys:r,parse:i,stringify:l}}function ld(e,t){let n=0;for(;n<e.length&&n<t.length;){const a=t[n]-e[n];if(a)return a;n++}return e.length<t.length?e.length===1&&e[0]===Ie.Static+Ie.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Ie.Static+Ie.Segment?1:-1:0}function Ai(e,t){let n=0;const a=e.score,s=t.score;for(;n<a.length&&n<s.length;){const r=ld(a[n],s[n]);if(r)return r;n++}if(Math.abs(s.length-a.length)===1){if(Ir(a))return 1;if(Ir(s))return-1}return s.length-a.length}function Ir(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const cd={strict:!1,end:!0,sensitive:!1};function ud(e,t,n){const a=id(sd(e.path),n),s=le(a,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function dd(e,t){const n=[],a=new Map;t=Pr(cd,t);function s(d){return a.get(d)}function r(d,h,p){const g=!p,c=Mr(d);c.aliasOf=p&&p.record;const m=Pr(t,d),_=[c];if("alias"in d){const S=typeof d.alias=="string"?[d.alias]:d.alias;for(const x of S)_.push(Mr(le({},c,{components:p?p.record.components:c.components,path:x,aliasOf:p?p.record:c})))}let y,T;for(const S of _){const{path:x}=S;if(h&&x[0]!=="/"){const R=h.record.path,w=R[R.length-1]==="/"?"":"/";S.path=h.record.path+(x&&w+x)}if(y=ud(S,h,m),p?p.alias.push(y):(T=T||y,T!==y&&T.alias.push(y),g&&d.name&&!Br(y)&&o(d.name)),Oi(y)&&l(y),c.children){const R=c.children;for(let w=0;w<R.length;w++)r(R[w],y,p&&p.children[w])}p=p||y}return T?()=>{o(T)}:Nn}function o(d){if(Ti(d)){const h=a.get(d);h&&(a.delete(d),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(d);h>-1&&(n.splice(h,1),d.record.name&&a.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function i(){return n}function l(d){const h=hd(d,n);n.splice(h,0,d),d.record.name&&!Br(d)&&a.set(d.record.name,d)}function f(d,h){let p,g={},c,m;if("name"in d&&d.name){if(p=a.get(d.name),!p)throw gn(ve.MATCHER_NOT_FOUND,{location:d});m=p.record.name,g=le(Dr(h.params,p.keys.filter(T=>!T.optional).concat(p.parent?p.parent.keys.filter(T=>T.optional):[]).map(T=>T.name)),d.params&&Dr(d.params,p.keys.map(T=>T.name))),c=p.stringify(g)}else if(d.path!=null)c=d.path,p=n.find(T=>T.re.test(c)),p&&(g=p.parse(c),m=p.record.name);else{if(p=h.name?a.get(h.name):n.find(T=>T.re.test(h.path)),!p)throw gn(ve.MATCHER_NOT_FOUND,{location:d,currentLocation:h});m=p.record.name,g=le({},h.params,d.params),c=p.stringify(g)}const _=[];let y=p;for(;y;)_.unshift(y.record),y=y.parent;return{name:m,path:c,params:g,matched:_,meta:fd(_)}}e.forEach(d=>r(d));function u(){n.length=0,a.clear()}return{addRoute:r,resolve:f,removeRoute:o,clearRoutes:u,getRoutes:i,getRecordMatcher:s}}function Dr(e,t){const n={};for(const a of t)a in e&&(n[a]=e[a]);return n}function Mr(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:pd(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function pd(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const a in e.components)t[a]=typeof n=="object"?n[a]:n;return t}function Br(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function fd(e){return e.reduce((t,n)=>le(t,n.meta),{})}function hd(e,t){let n=0,a=t.length;for(;n!==a;){const r=n+a>>1;Ai(e,t[r])<0?a=r:n=r+1}const s=gd(e);return s&&(a=t.lastIndexOf(s,a-1)),a}function gd(e){let t=e;for(;t=t.parent;)if(Oi(t)&&Ai(e,t)===0)return t}function Oi({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Fr(e){const t=Ve(ka),n=Ve(Ms),a=je(()=>{const l=Mt(e.to);return t.resolve(l)}),s=je(()=>{const{matched:l}=a.value,{length:f}=l,u=l[f-1],d=n.matched;if(!u||!d.length)return-1;const h=d.findIndex(hn.bind(null,u));if(h>-1)return h;const p=Ur(l[f-2]);return f>1&&Ur(u)===p&&d[d.length-1].path!==p?d.findIndex(hn.bind(null,l[f-2])):h}),r=je(()=>s.value>-1&&vd(n.params,a.value.params)),o=je(()=>s.value>-1&&s.value===n.matched.length-1&&vi(n.params,a.value.params));function i(l={}){if(yd(l)){const f=t[Mt(e.replace)?"replace":"push"](Mt(e.to)).catch(Nn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>f),f}return Promise.resolve()}return{route:a,href:je(()=>a.value.href),isActive:r,isExactActive:o,navigate:i}}function md(e){return e.length===1?e[0]:e}const _d=Mo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Fr,setup(e,{slots:t}){const n=Et(Fr(e)),{options:a}=Ve(ka),s=je(()=>({[$r(e.activeClass,a.linkActiveClass,"router-link-active")]:n.isActive,[$r(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&md(t.default(n));return e.custom?r:Is("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}}),bd=_d;function yd(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function vd(e,t){for(const n in t){const a=t[n],s=e[n];if(typeof a=="string"){if(a!==s)return!1}else if(!nt(s)||s.length!==a.length||a.some((r,o)=>r!==s[o]))return!1}return!0}function Ur(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const $r=(e,t,n)=>e??t??n,Td=Mo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const a=Ve(ds),s=je(()=>e.route||a.value),r=Ve(Cr,0),o=je(()=>{let f=Mt(r);const{matched:u}=s.value;let d;for(;(d=u[f])&&!d.components;)f++;return f}),i=je(()=>s.value.matched[o.value]);Qn(Cr,je(()=>o.value+1)),Qn(Vu,i),Qn(ds,s);const l=Je();return xn(()=>[l.value,i.value,e.name],([f,u,d],[h,p,g])=>{u&&(u.instances[d]=f,p&&p!==u&&f&&f===h&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),f&&u&&(!p||!hn(u,p)||!h)&&(u.enterCallbacks[d]||[]).forEach(c=>c(f))},{flush:"post"}),()=>{const f=s.value,u=e.name,d=i.value,h=d&&d.components[u];if(!h)return Hr(n.default,{Component:h,route:f});const p=d.props[u],g=p?p===!0?f.params:typeof p=="function"?p(f):p:null,m=Is(h,le({},g,t,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return Hr(n.default,{Component:m,route:f})||m}}});function Hr(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Pi=Td;function Ed(e){const t=dd(e.routes,e),n=e.parseQuery||Wu,a=e.stringifyQuery||Rr,s=e.history,r=vn(),o=vn(),i=vn(),l=ul(wt);let f=wt;cn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ha.bind(null,C=>""+C),d=Ha.bind(null,Ru),h=Ha.bind(null,$n);function p(C,G){let H,z;return Ti(C)?(H=t.getRecordMatcher(C),z=G):z=C,t.addRoute(z,H)}function g(C){const G=t.getRecordMatcher(C);G&&t.removeRoute(G)}function c(){return t.getRoutes().map(C=>C.record)}function m(C){return!!t.getRecordMatcher(C)}function _(C,G){if(G=le({},G||l.value),typeof C=="string"){const E=Ka(n,C,G.path),L=t.resolve({path:E.path},G),I=s.createHref(E.fullPath);return le(E,L,{params:h(L.params),hash:$n(E.hash),redirectedFrom:void 0,href:I})}let H;if(C.path!=null)H=le({},C,{path:Ka(n,C.path,G.path).path});else{const E=le({},C.params);for(const L in E)E[L]==null&&delete E[L];H=le({},C,{params:d(E)}),G.params=d(G.params)}const z=t.resolve(H,G),re=C.hash||"";z.params=u(h(z.params));const b=Lu(a,le({},C,{hash:ku(re),path:z.path})),v=s.createHref(b);return le({fullPath:b,hash:re,query:a===Rr?Ju(C.query):C.query||{}},z,{redirectedFrom:void 0,href:v})}function y(C){return typeof C=="string"?Ka(n,C,l.value.path):le({},C)}function T(C,G){if(f!==C)return gn(ve.NAVIGATION_CANCELLED,{from:G,to:C})}function S(C){return w(C)}function x(C){return S(le(y(C),{replace:!0}))}function R(C,G){const H=C.matched[C.matched.length-1];if(H&&H.redirect){const{redirect:z}=H;let re=typeof z=="function"?z(C,G):z;return typeof re=="string"&&(re=re.includes("?")||re.includes("#")?re=y(re):{path:re},re.params={}),le({query:C.query,hash:C.hash,params:re.path!=null?{}:C.params},re)}}function w(C,G){const H=f=_(C),z=l.value,re=C.state,b=C.force,v=C.replace===!0,E=R(H,z);if(E)return w(le(y(E),{state:typeof E=="object"?le({},re,E.state):re,force:b,replace:v}),G||H);const L=H;L.redirectedFrom=G;let I;return!b&&Iu(a,z,H)&&(I=gn(ve.NAVIGATION_DUPLICATED,{to:L,from:z}),Te(z,z,!0,!1)),(I?Promise.resolve(I):F(L,z)).catch(N=>mt(N)?mt(N,ve.NAVIGATION_GUARD_REDIRECT)?N:_e(N):Q(N,L,z)).then(N=>{if(N){if(mt(N,ve.NAVIGATION_GUARD_REDIRECT))return w(le({replace:v},y(N.to),{state:typeof N.to=="object"?le({},re,N.to.state):re,force:b}),G||L)}else N=P(L,z,!0,v,re);return Y(L,z,N),N})}function D(C,G){const H=T(C,G);return H?Promise.reject(H):Promise.resolve()}function O(C){const G=we.values().next().value;return G&&typeof G.runWithContext=="function"?G.runWithContext(C):C()}function F(C,G){let H;const[z,re,b]=zu(C,G);H=ja(z.reverse(),"beforeRouteLeave",C,G);for(const E of z)E.leaveGuards.forEach(L=>{H.push(Nt(L,C,G))});const v=D.bind(null,C,G);return H.push(v),Oe(H).then(()=>{H=[];for(const E of r.list())H.push(Nt(E,C,G));return H.push(v),Oe(H)}).then(()=>{H=ja(re,"beforeRouteUpdate",C,G);for(const E of re)E.updateGuards.forEach(L=>{H.push(Nt(L,C,G))});return H.push(v),Oe(H)}).then(()=>{H=[];for(const E of b)if(E.beforeEnter)if(nt(E.beforeEnter))for(const L of E.beforeEnter)H.push(Nt(L,C,G));else H.push(Nt(E.beforeEnter,C,G));return H.push(v),Oe(H)}).then(()=>(C.matched.forEach(E=>E.enterCallbacks={}),H=ja(b,"beforeRouteEnter",C,G,O),H.push(v),Oe(H))).then(()=>{H=[];for(const E of o.list())H.push(Nt(E,C,G));return H.push(v),Oe(H)}).catch(E=>mt(E,ve.NAVIGATION_CANCELLED)?E:Promise.reject(E))}function Y(C,G,H){i.list().forEach(z=>O(()=>z(C,G,H)))}function P(C,G,H,z,re){const b=T(C,G);if(b)return b;const v=G===wt,E=cn?history.state:{};H&&(z||v?s.replace(C.fullPath,le({scroll:v&&E&&E.scroll},re)):s.push(C.fullPath,re)),l.value=C,Te(C,G,H,v),_e()}let V;function $(){V||(V=s.listen((C,G,H)=>{if(!Ae.listening)return;const z=_(C),re=R(z,Ae.currentRoute.value);if(re){w(le(re,{replace:!0,force:!0}),z).catch(Nn);return}f=z;const b=l.value;cn&&Ku(xr(b.fullPath,H.delta),Pa()),F(z,b).catch(v=>mt(v,ve.NAVIGATION_ABORTED|ve.NAVIGATION_CANCELLED)?v:mt(v,ve.NAVIGATION_GUARD_REDIRECT)?(w(le(y(v.to),{force:!0}),z).then(E=>{mt(E,ve.NAVIGATION_ABORTED|ve.NAVIGATION_DUPLICATED)&&!H.delta&&H.type===cs.pop&&s.go(-1,!1)}).catch(Nn),Promise.reject()):(H.delta&&s.go(-H.delta,!1),Q(v,z,b))).then(v=>{v=v||P(z,b,!1),v&&(H.delta&&!mt(v,ve.NAVIGATION_CANCELLED)?s.go(-H.delta,!1):H.type===cs.pop&&mt(v,ve.NAVIGATION_ABORTED|ve.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),Y(z,b,v)}).catch(Nn)}))}let ne=vn(),Z=vn(),j;function Q(C,G,H){_e(C);const z=Z.list();return z.length?z.forEach(re=>re(C,G,H)):console.error(C),Promise.reject(C)}function de(){return j&&l.value!==wt?Promise.resolve():new Promise((C,G)=>{ne.add([C,G])})}function _e(C){return j||(j=!C,$(),ne.list().forEach(([G,H])=>C?H(C):G()),ne.reset()),C}function Te(C,G,H,z){const{scrollBehavior:re}=e;if(!cn||!re)return Promise.resolve();const b=!H&&Yu(xr(C.fullPath,0))||(z||!H)&&history.state&&history.state.scroll||null;return ks().then(()=>re(C,G,b)).then(v=>v&&Hu(v)).catch(v=>Q(v,C,G))}const ge=C=>s.go(C);let Ge;const we=new Set,Ae={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,clearRoutes:t.clearRoutes,hasRoute:m,getRoutes:c,resolve:_,options:e,push:S,replace:x,go:ge,back:()=>ge(-1),forward:()=>ge(1),beforeEach:r.add,beforeResolve:o.add,afterEach:i.add,onError:Z.add,isReady:de,install(C){C.component("RouterLink",bd),C.component("RouterView",Pi),C.config.globalProperties.$router=Ae,Object.defineProperty(C.config.globalProperties,"$route",{enumerable:!0,get:()=>Mt(l)}),cn&&!Ge&&l.value===wt&&(Ge=!0,S(s.location).catch(z=>{}));const G={};for(const z in wt)Object.defineProperty(G,z,{get:()=>l.value[z],enumerable:!0});C.provide(ka,Ae),C.provide(Ms,Eo(G)),C.provide(ds,l);const H=C.unmount;we.add(C),C.unmount=function(){we.delete(C),we.size<1&&(f=wt,V&&V(),V=null,l.value=wt,Ge=!1,j=!1),H()}}};function Oe(C){return C.reduce((G,H)=>G.then(()=>O(H)),Promise.resolve())}return Ae}function ft(){return Ve(ka)}function ki(e){return Ve(Ms)}var Sd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ad(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var En={exports:{}},Od=En.exports,Kr;function Pd(){return Kr||(Kr=1,(function(e,t){(function(n,a){var s={};n.PubSub?(s=n.PubSub,console.warn("PubSub already loaded, using existing version")):(n.PubSub=s,a(s)),e!==void 0&&e.exports&&(t=e.exports=s),t.PubSub=s,e.exports=t=s})(typeof window=="object"&&window||Od||Sd,function(n){var a={},s=-1,r="*";function o(c){var m;for(m in c)if(Object.prototype.hasOwnProperty.call(c,m))return!0;return!1}function i(c){return function(){throw c}}function l(c,m,_){try{c(m,_)}catch(y){setTimeout(i(y),0)}}function f(c,m,_){c(m,_)}function u(c,m,_,y){var T=a[m],S=y?f:l,x;if(Object.prototype.hasOwnProperty.call(a,m))for(x in T)Object.prototype.hasOwnProperty.call(T,x)&&S(T[x],c,_)}function d(c,m,_){return function(){var T=String(c),S=T.lastIndexOf(".");for(u(c,c,m,_);S!==-1;)T=T.substr(0,S),S=T.lastIndexOf("."),u(c,T,m,_);u(c,r,m,_)}}function h(c){var m=String(c),_=!!(Object.prototype.hasOwnProperty.call(a,m)&&o(a[m]));return _}function p(c){for(var m=String(c),_=h(m)||h(r),y=m.lastIndexOf(".");!_&&y!==-1;)m=m.substr(0,y),y=m.lastIndexOf("."),_=h(m);return _}function g(c,m,_,y){c=typeof c=="symbol"?c.toString():c;var T=d(c,m,y),S=p(c);return S?(_===!0?T():setTimeout(T,0),!0):!1}n.publish=function(c,m){return g(c,m,!1,n.immediateExceptions)},n.publishSync=function(c,m){return g(c,m,!0,n.immediateExceptions)},n.subscribe=function(c,m){if(typeof m!="function")return!1;c=typeof c=="symbol"?c.toString():c,Object.prototype.hasOwnProperty.call(a,c)||(a[c]={});var _="uid_"+String(++s);return a[c][_]=m,_},n.subscribeAll=function(c){return n.subscribe(r,c)},n.subscribeOnce=function(c,m){var _=n.subscribe(c,function(){n.unsubscribe(_),m.apply(this,arguments)});return n},n.clearAllSubscriptions=function(){a={}},n.clearSubscriptions=function(m){var _;for(_ in a)Object.prototype.hasOwnProperty.call(a,_)&&_.indexOf(m)===0&&delete a[_]},n.countSubscriptions=function(m){var _,y,T=0;for(_ in a)if(Object.prototype.hasOwnProperty.call(a,_)&&_.indexOf(m)===0){for(y in a[_])T++;break}return T},n.getSubscriptions=function(m){var _,y=[];for(_ in a)Object.prototype.hasOwnProperty.call(a,_)&&_.indexOf(m)===0&&y.push(_);return y},n.unsubscribe=function(c){var m=function(D){var O;for(O in a)if(Object.prototype.hasOwnProperty.call(a,O)&&O.indexOf(D)===0)return!0;return!1},_=typeof c=="string"&&(Object.prototype.hasOwnProperty.call(a,c)||m(c)),y=!_&&typeof c=="string",T=typeof c=="function",S=!1,x,R,w;if(_){n.clearSubscriptions(c);return}for(x in a)if(Object.prototype.hasOwnProperty.call(a,x)){if(R=a[x],y&&R[c]){delete R[c],S=c;break}if(T)for(w in R)Object.prototype.hasOwnProperty.call(R,w)&&R[w]===c&&(delete R[w],S=!0)}return S}})})(En,En.exports)),En.exports}var kd=Pd();const J=Ad(kd);let Hn=[{key:"americanfootball_cfl",group:"American Football",title:"CFL",description:"Canadian Football League",active:!0,has_outrights:!1},{key:"americanfootball_ncaaf",group:"American Football",title:"NCAAF",description:"US College Football",active:!0,has_outrights:!1},{key:"americanfootball_ncaaf_championship_winner",group:"American Football",title:"NCAAF Championship Winner",description:"US College Football Championship Winner",active:!0,has_outrights:!0},{key:"americanfootball_nfl",group:"American Football",title:"NFL",description:"US Football",active:!0,has_outrights:!1},{key:"americanfootball_nfl_super_bowl_winner",group:"American Football",title:"NFL Super Bowl Winner",description:"Super Bowl Winner 2025/2026",active:!1,has_outrights:!0},{key:"aussierules_afl",group:"Aussie Rules",title:"AFL",description:"Aussie Football",active:!1,has_outrights:!1},{key:"baseball_kbo",group:"Baseball",title:"KBO",description:"KBO League",active:!1,has_outrights:!1},{key:"baseball_milb",group:"Baseball",title:"MiLB",description:"Minor League Baseball",active:!1,has_outrights:!1},{key:"baseball_mlb",group:"Baseball",title:"MLB",description:"Major League Baseball",active:!0,has_outrights:!1},{key:"baseball_mlb_world_series_winner",group:"Baseball",title:"MLB World Series Winner",description:"World Series Winner 2025",active:!1,has_outrights:!0},{key:"baseball_npb",group:"Baseball",title:"NPB",description:"Nippon Professional Baseball",active:!0,has_outrights:!1},{key:"basketball_euroleague",group:"Basketball",title:"Basketball Euroleague",description:"Basketball Euroleague",active:!1,has_outrights:!1},{key:"basketball_nba",group:"Basketball",title:"NBA",description:"US Basketball",active:!0,has_outrights:!1},{key:"basketball_nba_championship_winner",group:"Basketball",title:"NBA Championship Winner",description:"Championship Winner 2025/2026",active:!1,has_outrights:!0},{key:"basketball_nbl",group:"Basketball",title:"NBL",description:"AU National Basketball League",active:!1,has_outrights:!1},{key:"basketball_ncaab_championship_winner",group:"Basketball",title:"NCAAB Championship Winner",description:"US College Basketball Championship Winner",active:!0,has_outrights:!0},{key:"basketball_wnba",group:"Basketball",title:"WNBA",description:"US Basketball",active:!0,has_outrights:!1},{key:"boxing_boxing",group:"Boxing",title:"Boxing",description:"Boxing Bouts",active:!0,has_outrights:!1},{key:"cricket_asia_cup",group:"Cricket",title:"Asia Cup",description:"Asia Cup",active:!1,has_outrights:!1},{key:"cricket_international_t20",group:"Cricket",title:"International Twenty20",description:"International Twenty20",active:!0,has_outrights:!1},{key:"golf_masters_tournament_winner",group:"Golf",title:"Masters Tournament Winner",description:"2026 Winner",active:!0,has_outrights:!0},{key:"icehockey_liiga",group:"Ice Hockey",title:"Liiga",description:"Finnish SM League",active:!1,has_outrights:!1},{key:"icehockey_mestis",group:"Ice Hockey",title:"Mestis",description:"Finnish Mestis League",active:!1,has_outrights:!1},{key:"icehockey_nhl",group:"Ice Hockey",title:"NHL",description:"US Ice Hockey",active:!0,has_outrights:!1},{key:"icehockey_nhl_championship_winner",group:"Ice Hockey",title:"NHL Championship Winner",description:"Stanley Cup Winner 2025/2026",active:!1,has_outrights:!0},{key:"icehockey_sweden_allsvenskan",group:"Ice Hockey",title:"HockeyAllsvenskan",description:"Swedish Hockey Allsvenskan",active:!1,has_outrights:!1},{key:"icehockey_sweden_hockey_league",group:"Ice Hockey",title:"SHL",description:"Swedish Hockey League",active:!1,has_outrights:!1},{key:"mma_mixed_martial_arts",group:"Mixed Martial Arts",title:"MMA",description:"Mixed Martial Arts",active:!0,has_outrights:!1},{key:"politics_us_presidential_election_winner",group:"Politics",title:"US Presidential Elections Winner",description:"2028 US Presidential Election Winner",active:!1,has_outrights:!0},{key:"rugbyleague_nrl",group:"Rugby League",title:"NRL",description:"Aussie Rugby League",active:!1,has_outrights:!1},{key:"soccer_argentina_primera_division",group:"Soccer",title:"Primera División - Argentina",description:"Argentine Primera División",active:!1,has_outrights:!1},{key:"soccer_australia_aleague",group:"Soccer",title:"A-League",description:"Aussie Soccer",active:!1,has_outrights:!1},{key:"soccer_austria_bundesliga",group:"Soccer",title:"Austrian Football Bundesliga",description:"Austrian Soccer",active:!1,has_outrights:!1},{key:"soccer_belgium_first_div",group:"Soccer",title:"Belgium First Div",description:"Belgian First Division A",active:!1,has_outrights:!1},{key:"soccer_brazil_campeonato",group:"Soccer",title:"Brazil Série A",description:"Brasileirão Série A",active:!1,has_outrights:!1},{key:"soccer_brazil_serie_b",group:"Soccer",title:"Brazil Série B",description:"Campeonato Brasileiro Série B",active:!1,has_outrights:!1},{key:"soccer_chile_campeonato",group:"Soccer",title:"Primera División - Chile",description:"Campeonato Chileno",active:!1,has_outrights:!1},{key:"soccer_china_superleague",group:"Soccer",title:"Super League - China",description:"Chinese Soccer",active:!1,has_outrights:!1},{key:"soccer_conmebol_copa_libertadores",group:"Soccer",title:"Copa Libertadores",description:"CONMEBOL Copa Libertadores",active:!1,has_outrights:!1},{key:"soccer_conmebol_copa_sudamericana",group:"Soccer",title:"Copa Sudamericana",description:"CONMEBOL Copa Sudamericana",active:!1,has_outrights:!1},{key:"soccer_denmark_superliga",group:"Soccer",title:"Denmark Superliga",description:"Danish Soccer",active:!1,has_outrights:!1},{key:"soccer_efl_champ",group:"Soccer",title:"Championship",description:"EFL Championship",active:!1,has_outrights:!1},{key:"soccer_england_league1",group:"Soccer",title:"League 1",description:"EFL League 1",active:!1,has_outrights:!1},{key:"soccer_england_league2",group:"Soccer",title:"League 2",description:"EFL League 2 ",active:!1,has_outrights:!1},{key:"soccer_epl",group:"Soccer",title:"EPL",description:"English Premier League",active:!0,has_outrights:!1},{key:"soccer_fifa_world_cup_qualifiers_europe",group:"Soccer",title:"FIFA World Cup Qualifiers - Europe",description:"FIFA World Cup Qualifiers - UEFA",active:!0,has_outrights:!1},{key:"soccer_fifa_world_cup_winner",group:"Soccer",title:"FIFA World Cup Winner",description:"FIFA World Cup Winner 2026",active:!1,has_outrights:!0},{key:"soccer_finland_veikkausliiga",group:"Soccer",title:"Veikkausliiga - Finland",description:"Finnish  Soccer",active:!1,has_outrights:!1},{key:"soccer_france_ligue_one",group:"Soccer",title:"Ligue 1 - France",description:"French Soccer",active:!1,has_outrights:!1},{key:"soccer_france_ligue_two",group:"Soccer",title:"Ligue 2 - France",description:"French Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_bundesliga",group:"Soccer",title:"Bundesliga - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_bundesliga2",group:"Soccer",title:"Bundesliga 2 - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_liga3",group:"Soccer",title:"3. Liga - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_greece_super_league",group:"Soccer",title:"Super League - Greece",description:"Greek Soccer",active:!1,has_outrights:!1},{key:"soccer_italy_serie_a",group:"Soccer",title:"Serie A - Italy",description:"Italian Soccer",active:!1,has_outrights:!1},{key:"soccer_italy_serie_b",group:"Soccer",title:"Serie B - Italy",description:"Italian Soccer",active:!1,has_outrights:!1},{key:"soccer_japan_j_league",group:"Soccer",title:"J League",description:"Japan Soccer League",active:!1,has_outrights:!1},{key:"soccer_korea_kleague1",group:"Soccer",title:"K League 1",description:"Korean Soccer",active:!1,has_outrights:!1},{key:"soccer_league_of_ireland",group:"Soccer",title:"League of Ireland",description:"Airtricity League Premier Division",active:!1,has_outrights:!1},{key:"soccer_mexico_ligamx",group:"Soccer",title:"Liga MX",description:"Mexican Soccer",active:!1,has_outrights:!1},{key:"soccer_netherlands_eredivisie",group:"Soccer",title:"Dutch Eredivisie",description:"Dutch Soccer",active:!1,has_outrights:!1},{key:"soccer_norway_eliteserien",group:"Soccer",title:"Eliteserien - Norway",description:"Norwegian Soccer",active:!1,has_outrights:!1},{key:"soccer_poland_ekstraklasa",group:"Soccer",title:"Ekstraklasa - Poland",description:"Polish Soccer",active:!1,has_outrights:!1},{key:"soccer_portugal_primeira_liga",group:"Soccer",title:"Primeira Liga - Portugal",description:"Portugese Soccer",active:!1,has_outrights:!1},{key:"soccer_spain_la_liga",group:"Soccer",title:"La Liga - Spain",description:"Spanish Soccer",active:!1,has_outrights:!1},{key:"soccer_spain_segunda_division",group:"Soccer",title:"La Liga 2 - Spain",description:"Spanish Soccer",active:!1,has_outrights:!1},{key:"soccer_spl",group:"Soccer",title:"Premiership - Scotland",description:"Scottish Premiership",active:!1,has_outrights:!1},{key:"soccer_sweden_allsvenskan",group:"Soccer",title:"Allsvenskan - Sweden",description:"Swedish Soccer",active:!1,has_outrights:!1},{key:"soccer_sweden_superettan",group:"Soccer",title:"Superettan - Sweden",description:"Swedish Soccer",active:!1,has_outrights:!1},{key:"soccer_switzerland_superleague",group:"Soccer",title:"Swiss Superleague",description:"Swiss Soccer",active:!1,has_outrights:!1},{key:"soccer_turkey_super_league",group:"Soccer",title:"Turkey Super League",description:"Turkish Soccer",active:!1,has_outrights:!1},{key:"soccer_uefa_champs_league",group:"Soccer",title:"UEFA Champions League",description:"European Champions League",active:!0,has_outrights:!1},{key:"soccer_uefa_europa_conference_league",group:"Soccer",title:"UEFA Europa Conference League",description:"UEFA Europa Conference League",active:!1,has_outrights:!1},{key:"soccer_uefa_europa_league",group:"Soccer",title:"UEFA Europa League",description:"European Europa League",active:!1,has_outrights:!1},{key:"soccer_usa_mls",group:"Soccer",title:"MLS",description:"Major League Soccer",active:!1,has_outrights:!1},{key:"tennis_atp_china_open",group:"Tennis",title:"ATP China Open",description:"Men's Singles",active:!1,has_outrights:!1},{key:"tennis_wta_china_open",group:"Tennis",title:"WTA China Open",description:"Women's Singles",active:!1,has_outrights:!1}];const wd={getMeta(){return{language:[{lang:"Abkhazian",code:"ab",enabled:!1,copy:[["key","value"]]},{lang:"Afar",code:"aa",enabled:!1,copy:[["key","value"]]},{lang:"Afrikaans",code:"af",enabled:!1,copy:[["key","value"]]},{lang:"Akan",code:"ak",enabled:!1,copy:[["key","value"]]},{lang:"Albanian",code:"sq",enabled:!1,copy:[["key","value"]]},{lang:"Amharic",code:"am",enabled:!1,copy:[["key","value"]]},{lang:"Arabic",code:"ar",enabled:!1,copy:[["key","value"]]},{lang:"Aragonese",code:"an",enabled:!1,copy:[["key","value"]]},{lang:"Armenian",code:"hy",enabled:!1,copy:[["key","value"]]},{lang:"Assamese",code:"as",enabled:!1,copy:[["key","value"]]},{lang:"Avaric",code:"av",enabled:!1,copy:[["key","value"]]},{lang:"Avestan",code:"ae",enabled:!1,copy:[["key","value"]]},{lang:"Aymara",code:"ay",enabled:!1,copy:[["key","value"]]},{lang:"Azerbaijani",code:"az",enabled:!1,copy:[["key","value"]]},{lang:"Bambara",code:"bm",enabled:!1,copy:[["key","value"]]},{lang:"Bashkir",code:"ba",enabled:!1,copy:[["key","value"]]},{lang:"Basque",code:"eu",enabled:!1,copy:[["key","value"]]},{lang:"Belarusian",code:"be",enabled:!1,copy:[["key","value"]]},{lang:"Bengali (Bangla)",code:"bn",enabled:!1,copy:[["key","value"]]},{lang:"Bihari",code:"bh",enabled:!1,copy:[["key","value"]]},{lang:"Bislama",code:"bi",enabled:!1,copy:[["key","value"]]},{lang:"Bosnian",code:"bs",enabled:!1,copy:[["key","value"]]},{lang:"Breton",code:"br",enabled:!1,copy:[["key","value"]]},{lang:"Bulgarian",code:"bg",enabled:!1,copy:[["key","value"]]},{lang:"Burmese",code:"my",enabled:!1,copy:[["key","value"]]},{lang:"Catalan",code:"ca",enabled:!1,copy:[["key","value"]]},{lang:"Chamorro",code:"ch",enabled:!1,copy:[["key","value"]]},{lang:"Chechen",code:"ce",enabled:!1,copy:[["key","value"]]},{lang:"Chichewa, Chewa, Nyanja",code:"ny",enabled:!1,copy:[["key","value"]]},{lang:"Chinese",code:"zh",enabled:!1,copy:[["key","value"]]},{lang:"Chinese (Simplified)",code:"zh-Hans",enabled:!1,copy:[["welcome_back","欢迎回来"],["please_enter_your_details","请输入您的详细信息"],["email","电子邮件"],["enter_your_email","输入您的电子邮件"],["password","密码"],["enter_your_password","输入您的密码"],["enter_email_and_password","输入邮箱和密码"],["sign_in","登入"],["forgot_password","忘记密码"],["dont_have_an_account","沒有帳戶？"],["sign_up","报名"],["please_enter_your_details_to_get_started","请输入您的详细信息以开始"],["already_have_an_account","已有账户？"],["log_in","登录"],["name","姓名"],["enter_your_name","输入您的姓名"]]},{lang:"Chinese (Traditional)",code:"zh-Hant",enabled:!1,copy:[["key","value"]]},{lang:"Chuvash",code:"cv",enabled:!1,copy:[["key","value"]]},{lang:"Cornish",code:"kw",enabled:!1,copy:[["key","value"]]},{lang:"Corsican",code:"co",enabled:!1,copy:[["key","value"]]},{lang:"Cree",code:"cr",enabled:!1,copy:[["key","value"]]},{lang:"Croatian",code:"hr",enabled:!1,copy:[["key","value"]]},{lang:"Czech",code:"cs",enabled:!1,copy:[["key","value"]]},{lang:"Danish",code:"da",enabled:!1,copy:[["key","value"]]},{lang:"Divehi, Dhivehi, Maldivian",code:"dv",enabled:!1,copy:[["key","value"]]},{lang:"Dutch",code:"nl",enabled:!1,copy:[["key","value"]]},{lang:"Dzongkha",code:"dz",enabled:!1,copy:[["key","value"]]},{lang:"English",code:"en",enabled:!0,copy:[["welcome_back","Welcome Back"],["please_enter_your_details","Please Enter your Details"],["email","Email"],["enter_your_email","Enter your email"],["password","Password"],["enter_your_password","Enter your password"],["enter_email_and_password","Enter Email and Password"],["sign_in","Sign in"],["forgot_password","Forgot Password"],["dont_have_an_account","Don't have an account?"],["sign_up","Sign up"],["please_enter_your_details_to_get_started","Please enter your details to get started"],["already_have_an_account","Already have an account?"],["log_in","Sign in"],["name","Name"],["enter_your_name","Enter your name"]]},{lang:"Esperanto",code:"eo",enabled:!1,copy:[["key","value"]]},{lang:"Estonian",code:"et",enabled:!1,copy:[["key","value"]]},{lang:"Ewe",code:"ee",enabled:!1,copy:[["key","value"]]},{lang:"Faroese",code:"fo",enabled:!1,copy:[["key","value"]]},{lang:"Fijian",code:"fj",enabled:!1,copy:[["key","value"]]},{lang:"Finnish",code:"fi",enabled:!1,copy:[["key","value"]]},{lang:"French",code:"fr",enabled:!1,copy:[["key","value"]]},{lang:"Fula, Fulah, Pulaar, Pular",code:"ff",enabled:!1,copy:[["key","value"]]},{lang:"Galician",code:"gl",enabled:!1,copy:[["key","value"]]},{lang:"Gaelic (Scottish)",code:"gd",enabled:!1,copy:[["key","value"]]},{lang:"Gaelic (Manx)",code:"gv",enabled:!1,copy:[["key","value"]]},{lang:"Georgian",code:"ka",enabled:!1,copy:[["key","value"]]},{lang:"German",code:"de",enabled:!1,copy:[["key","value"]]},{lang:"Greek",code:"el",enabled:!1,copy:[["key","value"]]},{lang:"Greenlandic",code:"kl",enabled:!1,copy:[["key","value"]]},{lang:"Guarani",code:"gn",enabled:!1,copy:[["key","value"]]},{lang:"Gujarati",code:"gu",enabled:!1,copy:[["key","value"]]},{lang:"Haitian Creole",code:"ht",enabled:!1,copy:[["key","value"]]},{lang:"Hausa",code:"ha",enabled:!1,copy:[["key","value"]]},{lang:"Hebrew",code:"he",enabled:!1,copy:[["key","value"]]},{lang:"Herero",code:"hz",enabled:!1,copy:[["key","value"]]},{lang:"Hindi",code:"hi",enabled:!1,copy:[["key","value"]]},{lang:"Hiri Motu",code:"ho",enabled:!1,copy:[["key","value"]]},{lang:"Hungarian",code:"hu",enabled:!1,copy:[["key","value"]]},{lang:"Icelandic",code:"is",enabled:!1,copy:[["key","value"]]},{lang:"Ido",code:"io",enabled:!1,copy:[["key","value"]]},{lang:"Igbo",code:"ig",enabled:!1,copy:[["key","value"]]},{lang:"Indonesian",code:"id, in",enabled:!1,copy:[["key","value"]]},{lang:"Interlingua",code:"ia",enabled:!1,copy:[["key","value"]]},{lang:"Interlingue",code:"ie",enabled:!1,copy:[["key","value"]]},{lang:"Inuktitut",code:"iu",enabled:!1,copy:[["key","value"]]},{lang:"Inupiak",code:"ik",enabled:!1,copy:[["key","value"]]},{lang:"Irish",code:"ga",enabled:!1,copy:[["key","value"]]},{lang:"Italian",code:"it",enabled:!0,copy:[["welcome_back","Bentornato"],["please_enter_your_details","Per favore, inserisci i tuoi dati"],["email","E-mail"],["enter_your_email","Inserisci la tua email"],["password","Password"],["enter_your_password","Inserisci la tua password"],["enter_email_and_password","Inserisci email e password"],["sign_in","Registrazione"],["forgot_password","Ha dimenticato la password"],["dont_have_an_account","Non hai un account?"],["sign_up","Iscrizione"],["please_enter_your_details_to_get_started","Inserisci i tuoi dati per iniziare"],["already_have_an_account","Hai già un account?"],["log_in","Login"],["name","Nome"],["enter_your_name","Inserisci il tuo nome"]]},{lang:"Japanese",code:"ja",enabled:!1,copy:[["key","value"]]},{lang:"Javanese",code:"jv",enabled:!1,copy:[["key","value"]]},{lang:"Kalaallisut, Greenlandic",code:"kl",enabled:!1,copy:[["key","value"]]},{lang:"Kannada",code:"kn",enabled:!1,copy:[["key","value"]]},{lang:"Kanuri",code:"kr",enabled:!1,copy:[["key","value"]]},{lang:"Kashmiri",code:"ks",enabled:!1,copy:[["key","value"]]},{lang:"Kazakh",code:"kk",enabled:!1,copy:[["key","value"]]},{lang:"Khmer",code:"km",enabled:!1,copy:[["key","value"]]},{lang:"Kikuyu",code:"ki",enabled:!1,copy:[["key","value"]]},{lang:"Kinyarwanda (Rwanda)",code:"rw",enabled:!1,copy:[["key","value"]]},{lang:"Kirundi",code:"rn",enabled:!1,copy:[["key","value"]]},{lang:"Kyrgyz",code:"ky",enabled:!1,copy:[["key","value"]]},{lang:"Komi",code:"kv",enabled:!1,copy:[["key","value"]]},{lang:"Kongo",code:"kg",enabled:!1,copy:[["key","value"]]},{lang:"Korean",code:"ko",enabled:!1,copy:[["key","value"]]},{lang:"Kurdish",code:"ku",enabled:!1,copy:[["key","value"]]},{lang:"Kwanyama",code:"kj",enabled:!1,copy:[["key","value"]]},{lang:"Lao",code:"lo",enabled:!1,copy:[["key","value"]]},{lang:"Latin",code:"la",enabled:!0,copy:[["key","value"]]},{lang:"Latvian (Lettish)",code:"lv",enabled:!1,copy:[["key","value"]]},{lang:"Limburgish ( Limburger)",code:"li",enabled:!1,copy:[["key","value"]]},{lang:"Lingala",code:"ln",enabled:!1,copy:[["key","value"]]},{lang:"Lithuanian",code:"lt",enabled:!1,copy:[["key","value"]]},{lang:"Luga-Katanga",code:"lu",enabled:!1,copy:[["key","value"]]},{lang:"Luganda, Ganda",code:"lg",enabled:!1,copy:[["key","value"]]},{lang:"Luxembourgish",code:"lb",enabled:!1,copy:[["key","value"]]},{lang:"Manx",code:"gv",enabled:!1,copy:[["key","value"]]},{lang:"Macedonian",code:"mk",enabled:!1,copy:[["key","value"]]},{lang:"Malagasy",code:"mg",enabled:!1,copy:[["key","value"]]},{lang:"Malay",code:"ms",enabled:!1,copy:[["key","value"]]},{lang:"Malayalam",code:"ml",enabled:!1,copy:[["key","value"]]},{lang:"Maltese",code:"mt",enabled:!1,copy:[["key","value"]]},{lang:"Maori",code:"mi",enabled:!1,copy:[["key","value"]]},{lang:"Marathi",code:"mr",enabled:!1,copy:[["key","value"]]},{lang:"Marshallese",code:"mh",enabled:!1,copy:[["key","value"]]},{lang:"Moldavian",code:"mo",enabled:!1,copy:[["key","value"]]},{lang:"Mongolian",code:"mn",enabled:!1,copy:[["key","value"]]},{lang:"Nauru",code:"na",enabled:!1,copy:[["key","value"]]},{lang:"Navajo",code:"nv",enabled:!1,copy:[["key","value"]]},{lang:"Ndonga",code:"ng",enabled:!1,copy:[["key","value"]]},{lang:"Northern Ndebele",code:"nd",enabled:!1,copy:[["key","value"]]},{lang:"Nepali",code:"ne",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian",code:"no",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian bokmål",code:"nb",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian nynorsk",code:"nn",enabled:!1,copy:[["key","value"]]},{lang:"Nuosu",code:"ii",enabled:!1,copy:[["key","value"]]},{lang:"Occitan",code:"oc",enabled:!1,copy:[["key","value"]]},{lang:"Ojibwe",code:"oj",enabled:!1,copy:[["key","value"]]},{lang:"Old Church Slavonic, Old Bulgarian",code:"cu",enabled:!1,copy:[["key","value"]]},{lang:"Oriya",code:"or",enabled:!1,copy:[["key","value"]]},{lang:"Oromo (Afaan Oromo)",code:"om",enabled:!1,copy:[["key","value"]]},{lang:"Ossetian",code:"os",enabled:!1,copy:[["key","value"]]},{lang:"Pāli",code:"pi",enabled:!1,copy:[["key","value"]]},{lang:"Pashto, Pushto",code:"ps",enabled:!1,copy:[["key","value"]]},{lang:"Persian (Farsi)",code:"fa",enabled:!1,copy:[["key","value"]]},{lang:"Polish",code:"pl",enabled:!1,copy:[["key","value"]]},{lang:"Portuguese",code:"pt",enabled:!1,copy:[["key","value"]]},{lang:"Punjabi (Eastern)",code:"pa",enabled:!1,copy:[["key","value"]]},{lang:"Quechua",code:"qu",enabled:!1,copy:[["key","value"]]},{lang:"Romansh",code:"rm",enabled:!1,copy:[["key","value"]]},{lang:"Romanian",code:"ro",enabled:!1,copy:[["key","value"]]},{lang:"Russian",code:"ru",enabled:!1,copy:[["key","value"]]},{lang:"Sami",code:"se",enabled:!1,copy:[["key","value"]]},{lang:"Samoan",code:"sm",enabled:!1,copy:[["key","value"]]},{lang:"Sango",code:"sg",enabled:!1,copy:[["key","value"]]},{lang:"Sanskrit",code:"sa",enabled:!1,copy:[["key","value"]]},{lang:"Serbian",code:"sr",enabled:!1,copy:[["key","value"]]},{lang:"Serbo-Croatian",code:"sh",enabled:!1,copy:[["key","value"]]},{lang:"Sesotho",code:"st",enabled:!1,copy:[["key","value"]]},{lang:"Setswana",code:"tn",enabled:!1,copy:[["key","value"]]},{lang:"Shona",code:"sn",enabled:!1,copy:[["key","value"]]},{lang:"Sichuan Yi",code:"ii",enabled:!1,copy:[["key","value"]]},{lang:"Sindhi",code:"sd",enabled:!1,copy:[["key","value"]]},{lang:"Sinhalese",code:"si",enabled:!1,copy:[["key","value"]]},{lang:"Siswati",code:"ss",enabled:!1,copy:[["key","value"]]},{lang:"Slovak",code:"sk",enabled:!1,copy:[["key","value"]]},{lang:"Slovenian",code:"sl",enabled:!1,copy:[["key","value"]]},{lang:"Somali",code:"so",enabled:!1,copy:[["key","value"]]},{lang:"Southern Ndebele",code:"nr",enabled:!1,copy:[["key","value"]]},{lang:"Spanish",code:"es",enabled:!1,copy:[["key","value"]]},{lang:"Sundanese",code:"su",enabled:!1,copy:[["key","value"]]},{lang:"Swahili (Kiswahili)",code:"sw",enabled:!1,copy:[["key","value"]]},{lang:"Swati",code:"ss",enabled:!1,copy:[["key","value"]]},{lang:"Swedish",code:"sv",enabled:!1,copy:[["key","value"]]},{lang:"Tagalog",code:"tl",enabled:!1,copy:[["key","value"]]},{lang:"Tahitian",code:"ty",enabled:!1,copy:[["key","value"]]},{lang:"Tajik",code:"tg",enabled:!1,copy:[["key","value"]]},{lang:"Tamil",code:"ta",enabled:!1,copy:[["key","value"]]},{lang:"Tatar",code:"tt",enabled:!1,copy:[["key","value"]]},{lang:"Telugu",code:"te",enabled:!1,copy:[["key","value"]]},{lang:"Thai",code:"th",enabled:!1,copy:[["key","value"]]},{lang:"Tibetan",code:"bo",enabled:!1,copy:[["key","value"]]},{lang:"Tigrinya",code:"ti",enabled:!1,copy:[["key","value"]]},{lang:"Tonga",code:"to",enabled:!1,copy:[["key","value"]]},{lang:"Tsonga",code:"ts",enabled:!1,copy:[["key","value"]]},{lang:"Turkish",code:"tr",enabled:!1,copy:[["key","value"]]},{lang:"Turkmen",code:"tk",enabled:!1,copy:[["key","value"]]},{lang:"Twi",code:"tw",enabled:!1,copy:[["key","value"]]},{lang:"Uyghur",code:"ug",enabled:!1,copy:[["key","value"]]},{lang:"Ukrainian",code:"uk",enabled:!1,copy:[["key","value"]]},{lang:"Urdu",code:"ur",enabled:!1,copy:[["key","value"]]},{lang:"Uzbek",code:"uz",enabled:!1,copy:[["key","value"]]},{lang:"Venda",code:"ve",enabled:!1,copy:[["key","value"]]},{lang:"Vietnamese",code:"vi",enabled:!1,copy:[["key","value"]]},{lang:"Volapük",code:"vo",enabled:!1,copy:[["key","value"]]},{lang:"Wallon",code:"wa",enabled:!1,copy:[["key","value"]]},{lang:"Welsh",code:"cy",enabled:!1,copy:[["key","value"]]},{lang:"Wolof",code:"wo",enabled:!1,copy:[["key","value"]]},{lang:"Western Frisian",code:"fy",enabled:!1,copy:[["key","value"]]},{lang:"Xhosa",code:"xh",enabled:!1,copy:[["key","value"]]},{lang:"Yiddish",code:"yi, ji",enabled:!1,copy:[["key","value"]]},{lang:"Yoruba",code:"yo",enabled:!1,copy:[["key","value"]]},{lang:"Zhuang, Chuang",code:"za",enabled:!1,copy:[["key","value"]]},{lang:"Zulu",code:"zu",enabled:!1,copy:[["key","value"]]}]}}};function Ut(e){return new Promise((t,n)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>n(e.error)})}function xd(e,t){let n;const a=()=>{if(n)return n;const s=indexedDB.open(e);return s.onupgradeneeded=()=>s.result.createObjectStore(t),n=Ut(s),n.then(r=>{r.onclose=()=>n=void 0},()=>{}),n};return(s,r)=>a().then(o=>r(o.transaction(t,s).objectStore(t)))}let qa;function jn(){return qa||(qa=xd("keyval-store","keyval")),qa}function Rd(e,t=jn()){return t("readonly",n=>Ut(n.get(e)))}function Yr(e,t,n=jn()){return n("readwrite",a=>(a.put(t,e),Ut(a.transaction)))}function Ga(e,t=jn()){return t("readwrite",n=>(n.delete(e),Ut(n.transaction)))}function wi(e,t){return e.openCursor().onsuccess=function(){this.result&&(t(this.result),this.result.continue())},Ut(e.transaction)}function on(e=jn()){return e("readonly",t=>{if(t.getAllKeys)return Ut(t.getAllKeys());const n=[];return wi(t,a=>n.push(a.key)).then(()=>n)})}function Cd(e=jn()){return e("readonly",t=>{if(t.getAll&&t.getAllKeys)return Promise.all([Ut(t.getAllKeys()),Ut(t.getAll())]).then(([a,s])=>a.map((r,o)=>[r,s[o]]));const n=[];return e("readonly",a=>wi(a,s=>n.push([s.key,s.value])).then(()=>n))})}const mn=e=>e!==null&&Object.prototype.toString.call(e)==="[object Object]",ua=(e,t)=>{if(e===t)return!0;if(typeof e!=typeof t)return!1;if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n+=1)if(!ua(e[n],t[n]))return!1;return!0}if(mn(e)&&mn(t)){const n=Object.entries(e),a=new Set(Object.keys(t));if(n.length!==a.size)return!1;for(const[s,r]of n){if(!ua(r,t[s]))return!1;a.delete(s)}return a.size===0}return!1},Vn=e=>{if(e===""||e===!1||e===null||e===void 0||Array.isArray(e)&&e.length===0)return!0;if(mn(e)){for(const t in e)if(e.hasOwnProperty(t))return!1;return!0}return!1},Nd=e=>e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="_",jr=e=>e>="0"&&e<="9"||e==="-",Ld=e=>e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="_";var A;(function(e){e.TOK_EOF="EOF",e.TOK_UNQUOTEDIDENTIFIER="UnquotedIdentifier",e.TOK_QUOTEDIDENTIFIER="QuotedIdentifier",e.TOK_RBRACKET="Rbracket",e.TOK_RPAREN="Rparen",e.TOK_COMMA="Comma",e.TOK_COLON="Colon",e.TOK_RBRACE="Rbrace",e.TOK_NUMBER="Number",e.TOK_CURRENT="Current",e.TOK_ROOT="Root",e.TOK_EXPREF="Expref",e.TOK_PIPE="Pipe",e.TOK_OR="Or",e.TOK_AND="And",e.TOK_EQ="EQ",e.TOK_GT="GT",e.TOK_LT="LT",e.TOK_GTE="GTE",e.TOK_LTE="LTE",e.TOK_NE="NE",e.TOK_FLATTEN="Flatten",e.TOK_STAR="Star",e.TOK_FILTER="Filter",e.TOK_DOT="Dot",e.TOK_NOT="Not",e.TOK_LBRACE="Lbrace",e.TOK_LBRACKET="Lbracket",e.TOK_LPAREN="Lparen",e.TOK_LITERAL="Literal"})(A||(A={}));const qr={"(":A.TOK_LPAREN,")":A.TOK_RPAREN,"*":A.TOK_STAR,",":A.TOK_COMMA,".":A.TOK_DOT,":":A.TOK_COLON,"@":A.TOK_CURRENT,$:A.TOK_ROOT,"]":A.TOK_RBRACKET,"{":A.TOK_LBRACE,"}":A.TOK_RBRACE},Id={"!":!0,"<":!0,"=":!0,">":!0},Dd={"	":!0,"\n":!0,"\r":!0," ":!0};class Md{constructor(){this._current=0}tokenize(t){const n=[];this._current=0;let a,s,r;for(;this._current<t.length;)if(Nd(t[this._current]))a=this._current,s=this.consumeUnquotedIdentifier(t),n.push({start:a,type:A.TOK_UNQUOTEDIDENTIFIER,value:s});else if(qr[t[this._current]]!==void 0)n.push({start:this._current,type:qr[t[this._current]],value:t[this._current]}),this._current+=1;else if(jr(t[this._current]))r=this.consumeNumber(t),n.push(r);else if(t[this._current]==="[")r=this.consumeLBracket(t),n.push(r);else if(t[this._current]==='"')a=this._current,s=this.consumeQuotedIdentifier(t),n.push({start:a,type:A.TOK_QUOTEDIDENTIFIER,value:s});else if(t[this._current]==="'")a=this._current,s=this.consumeRawStringLiteral(t),n.push({start:a,type:A.TOK_LITERAL,value:s});else if(t[this._current]==="`"){a=this._current;const o=this.consumeLiteral(t);n.push({start:a,type:A.TOK_LITERAL,value:o})}else if(Id[t[this._current]]!==void 0)r=this.consumeOperator(t),r&&n.push(r);else if(Dd[t[this._current]]!==void 0)this._current+=1;else if(t[this._current]==="&")a=this._current,this._current+=1,t[this._current]==="&"?(this._current+=1,n.push({start:a,type:A.TOK_AND,value:"&&"})):n.push({start:a,type:A.TOK_EXPREF,value:"&"});else if(t[this._current]==="|")a=this._current,this._current+=1,t[this._current]==="|"?(this._current+=1,n.push({start:a,type:A.TOK_OR,value:"||"})):n.push({start:a,type:A.TOK_PIPE,value:"|"});else{const o=new Error(`Unknown character: ${t[this._current]}`);throw o.name="LexerError",o}return n}consumeUnquotedIdentifier(t){const n=this._current;for(this._current+=1;this._current<t.length&&Ld(t[this._current]);)this._current+=1;return t.slice(n,this._current)}consumeQuotedIdentifier(t){const n=this._current;this._current+=1;const a=t.length;for(;t[this._current]!=='"'&&this._current<a;){let s=this._current;t[s]==="\\"&&(t[s+1]==="\\"||t[s+1]==='"')?s+=2:s+=1,this._current=s}return this._current+=1,JSON.parse(t.slice(n,this._current))}consumeRawStringLiteral(t){const n=this._current;this._current+=1;const a=t.length;for(;t[this._current]!=="'"&&this._current<a;){let r=this._current;t[r]==="\\"&&(t[r+1]==="\\"||t[r+1]==="'")?r+=2:r+=1,this._current=r}return this._current+=1,t.slice(n+1,this._current-1).replace("\\'","'")}consumeNumber(t){const n=this._current;this._current+=1;const a=t.length;for(;jr(t[this._current])&&this._current<a;)this._current+=1;const s=parseInt(t.slice(n,this._current),10);return{start:n,value:s,type:A.TOK_NUMBER}}consumeLBracket(t){const n=this._current;return this._current+=1,t[this._current]==="?"?(this._current+=1,{start:n,type:A.TOK_FILTER,value:"[?"}):t[this._current]==="]"?(this._current+=1,{start:n,type:A.TOK_FLATTEN,value:"[]"}):{start:n,type:A.TOK_LBRACKET,value:"["}}consumeOperator(t){const n=this._current,a=t[n];if(this._current+=1,a==="!")return t[this._current]==="="?(this._current+=1,{start:n,type:A.TOK_NE,value:"!="}):{start:n,type:A.TOK_NOT,value:"!"};if(a==="<")return t[this._current]==="="?(this._current+=1,{start:n,type:A.TOK_LTE,value:"<="}):{start:n,type:A.TOK_LT,value:"<"};if(a===">")return t[this._current]==="="?(this._current+=1,{start:n,type:A.TOK_GTE,value:">="}):{start:n,type:A.TOK_GT,value:">"};if(a==="="&&t[this._current]==="=")return this._current+=1,{start:n,type:A.TOK_EQ,value:"=="}}consumeLiteral(t){this._current+=1;const n=this._current,a=t.length;for(;t[this._current]!=="`"&&this._current<a;){let o=this._current;t[o]==="\\"&&(t[o+1]==="\\"||t[o+1]==="`")?o+=2:o+=1,this._current=o}let s=t.slice(n,this._current).trimLeft();s=s.replace("\\`","`");const r=this.looksLikeJSON(s)?JSON.parse(s):JSON.parse(`"${s}"`);return this._current+=1,r}looksLikeJSON(t){const a=["true","false","null"],s="-0123456789";if(t==="")return!1;if('[{"'.includes(t[0])||a.includes(t))return!0;if(s.includes(t[0]))try{return JSON.parse(t),!0}catch{return!1}return!1}}const xi=new Md,xe={[A.TOK_EOF]:0,[A.TOK_UNQUOTEDIDENTIFIER]:0,[A.TOK_QUOTEDIDENTIFIER]:0,[A.TOK_RBRACKET]:0,[A.TOK_RPAREN]:0,[A.TOK_COMMA]:0,[A.TOK_RBRACE]:0,[A.TOK_NUMBER]:0,[A.TOK_CURRENT]:0,[A.TOK_EXPREF]:0,[A.TOK_ROOT]:0,[A.TOK_PIPE]:1,[A.TOK_OR]:2,[A.TOK_AND]:3,[A.TOK_EQ]:5,[A.TOK_GT]:5,[A.TOK_LT]:5,[A.TOK_GTE]:5,[A.TOK_LTE]:5,[A.TOK_NE]:5,[A.TOK_FLATTEN]:9,[A.TOK_STAR]:20,[A.TOK_FILTER]:21,[A.TOK_DOT]:40,[A.TOK_NOT]:45,[A.TOK_LBRACE]:50,[A.TOK_LBRACKET]:55,[A.TOK_LPAREN]:60};class Bd{constructor(){this.index=0,this.tokens=[]}parse(t){this.loadTokens(t),this.index=0;const n=this.expression(0);if(this.lookahead(0)!==A.TOK_EOF){const a=this.lookaheadToken(0);this.errorToken(a,`Unexpected token type: ${a.type}, value: ${a.value}`)}return n}loadTokens(t){this.tokens=[...xi.tokenize(t),{type:A.TOK_EOF,value:"",start:t.length}]}expression(t){const n=this.lookaheadToken(0);this.advance();let a=this.nud(n),s=this.lookahead(0);for(;t<xe[s];)this.advance(),a=this.led(s,a),s=this.lookahead(0);return a}lookahead(t){return this.tokens[this.index+t].type}lookaheadToken(t){return this.tokens[this.index+t]}advance(){this.index+=1}nud(t){let n,a,s;switch(t.type){case A.TOK_LITERAL:return{type:"Literal",value:t.value};case A.TOK_UNQUOTEDIDENTIFIER:return{type:"Field",name:t.value};case A.TOK_QUOTEDIDENTIFIER:const r={type:"Field",name:t.value};if(this.lookahead(0)===A.TOK_LPAREN)throw new Error("Quoted identifier not allowed for function names.");return r;case A.TOK_NOT:return a=this.expression(xe.Not),{type:"NotExpression",children:[a]};case A.TOK_STAR:return n={type:"Identity"},a=this.lookahead(0)===A.TOK_RBRACKET&&{type:"Identity"}||this.parseProjectionRHS(xe.Star),{type:"ValueProjection",children:[n,a]};case A.TOK_FILTER:return this.led(t.type,{type:"Identity"});case A.TOK_LBRACE:return this.parseMultiselectHash();case A.TOK_FLATTEN:return n={type:A.TOK_FLATTEN,children:[{type:"Identity"}]},a=this.parseProjectionRHS(xe.Flatten),{type:"Projection",children:[n,a]};case A.TOK_LBRACKET:return this.lookahead(0)===A.TOK_NUMBER||this.lookahead(0)===A.TOK_COLON?(a=this.parseIndexExpression(),this.projectIfSlice({type:"Identity"},a)):this.lookahead(0)===A.TOK_STAR&&this.lookahead(1)===A.TOK_RBRACKET?(this.advance(),this.advance(),a=this.parseProjectionRHS(xe.Star),{children:[{type:"Identity"},a],type:"Projection"}):this.parseMultiselectList();case A.TOK_CURRENT:return{type:A.TOK_CURRENT};case A.TOK_ROOT:return{type:A.TOK_ROOT};case A.TOK_EXPREF:return s=this.expression(xe.Expref),{type:"ExpressionReference",children:[s]};case A.TOK_LPAREN:const o=[];for(;this.lookahead(0)!==A.TOK_RPAREN;)this.lookahead(0)===A.TOK_CURRENT?(s={type:A.TOK_CURRENT},this.advance()):s=this.expression(0),o.push(s);return this.match(A.TOK_RPAREN),o[0];default:this.errorToken(t)}}led(t,n){let a;switch(t){case A.TOK_DOT:const s=xe.Dot;return this.lookahead(0)!==A.TOK_STAR?(a=this.parseDotRHS(s),{type:"Subexpression",children:[n,a]}):(this.advance(),a=this.parseProjectionRHS(s),{type:"ValueProjection",children:[n,a]});case A.TOK_PIPE:return a=this.expression(xe.Pipe),{type:A.TOK_PIPE,children:[n,a]};case A.TOK_OR:return a=this.expression(xe.Or),{type:"OrExpression",children:[n,a]};case A.TOK_AND:return a=this.expression(xe.And),{type:"AndExpression",children:[n,a]};case A.TOK_LPAREN:const r=n.name,o=[];let i;for(;this.lookahead(0)!==A.TOK_RPAREN;)this.lookahead(0)===A.TOK_CURRENT?(i={type:A.TOK_CURRENT},this.advance()):i=this.expression(0),this.lookahead(0)===A.TOK_COMMA&&this.match(A.TOK_COMMA),o.push(i);return this.match(A.TOK_RPAREN),{name:r,type:"Function",children:o};case A.TOK_FILTER:const f=this.expression(0);return this.match(A.TOK_RBRACKET),a=this.lookahead(0)===A.TOK_FLATTEN&&{type:"Identity"}||this.parseProjectionRHS(xe.Filter),{type:"FilterProjection",children:[n,a,f]};case A.TOK_FLATTEN:const u={type:A.TOK_FLATTEN,children:[n]},d=this.parseProjectionRHS(xe.Flatten);return{type:"Projection",children:[u,d]};case A.TOK_EQ:case A.TOK_NE:case A.TOK_GT:case A.TOK_GTE:case A.TOK_LT:case A.TOK_LTE:return this.parseComparator(n,t);case A.TOK_LBRACKET:const h=this.lookaheadToken(0);return h.type===A.TOK_NUMBER||h.type===A.TOK_COLON?(a=this.parseIndexExpression(),this.projectIfSlice(n,a)):(this.match(A.TOK_STAR),this.match(A.TOK_RBRACKET),a=this.parseProjectionRHS(xe.Star),{type:"Projection",children:[n,a]});default:return this.errorToken(this.lookaheadToken(0))}}match(t){if(this.lookahead(0)===t){this.advance();return}else{const n=this.lookaheadToken(0);this.errorToken(n,`Expected ${t}, got: ${n.type}`)}}errorToken(t,n=""){const a=new Error(n||`Invalid token (${t.type}): "${t.value}"`);throw a.name="ParserError",a}parseIndexExpression(){if(this.lookahead(0)===A.TOK_COLON||this.lookahead(1)===A.TOK_COLON)return this.parseSliceExpression();const t={type:"Index",value:this.lookaheadToken(0).value};return this.advance(),this.match(A.TOK_RBRACKET),t}projectIfSlice(t,n){const a={type:"IndexExpression",children:[t,n]};return n.type==="Slice"?{children:[a,this.parseProjectionRHS(xe.Star)],type:"Projection"}:a}parseSliceExpression(){const t=[null,null,null];let n=0,a=this.lookahead(0);for(;a!==A.TOK_RBRACKET&&n<3;){if(a===A.TOK_COLON)n+=1,this.advance();else if(a===A.TOK_NUMBER)t[n]=this.lookaheadToken(0).value,this.advance();else{const s=this.lookaheadToken(0);this.errorToken(s,`Syntax error, unexpected token: ${s.value}(${s.type})`)}a=this.lookahead(0)}return this.match(A.TOK_RBRACKET),{children:t,type:"Slice"}}parseComparator(t,n){const a=this.expression(xe[n]);return{type:"Comparator",name:n,children:[t,a]}}parseDotRHS(t){const n=this.lookahead(0);if([A.TOK_UNQUOTEDIDENTIFIER,A.TOK_QUOTEDIDENTIFIER,A.TOK_STAR].includes(n))return this.expression(t);if(n===A.TOK_LBRACKET)return this.match(A.TOK_LBRACKET),this.parseMultiselectList();if(n===A.TOK_LBRACE)return this.match(A.TOK_LBRACE),this.parseMultiselectHash();const s=this.lookaheadToken(0);this.errorToken(s,`Syntax error, unexpected token: ${s.value}(${s.type})`)}parseProjectionRHS(t){if(xe[this.lookahead(0)]<10)return{type:"Identity"};if(this.lookahead(0)===A.TOK_LBRACKET)return this.expression(t);if(this.lookahead(0)===A.TOK_FILTER)return this.expression(t);if(this.lookahead(0)===A.TOK_DOT)return this.match(A.TOK_DOT),this.parseDotRHS(t);const n=this.lookaheadToken(0);this.errorToken(n,`Syntax error, unexpected token: ${n.value}(${n.type})`)}parseMultiselectList(){const t=[];for(;this.lookahead(0)!==A.TOK_RBRACKET;){const n=this.expression(0);if(t.push(n),this.lookahead(0)===A.TOK_COMMA&&(this.match(A.TOK_COMMA),this.lookahead(0)===A.TOK_RBRACKET))throw new Error("Unexpected token Rbracket")}return this.match(A.TOK_RBRACKET),{type:"MultiSelectList",children:t}}parseMultiselectHash(){const t=[],n=[A.TOK_UNQUOTEDIDENTIFIER,A.TOK_QUOTEDIDENTIFIER];let a,s,r;for(;;){if(a=this.lookaheadToken(0),!n.includes(a.type))throw new Error(`Expecting an identifier token, got: ${a.type}`);if(s=a.value,this.advance(),this.match(A.TOK_COLON),r=this.expression(0),t.push({value:r,type:"KeyValuePair",name:s}),this.lookahead(0)===A.TOK_COMMA)this.match(A.TOK_COMMA);else if(this.lookahead(0)===A.TOK_RBRACE){this.match(A.TOK_RBRACE);break}}return{type:"MultiSelectHash",children:t}}}const Ri=new Bd;var M;(function(e){e[e.TYPE_NUMBER=0]="TYPE_NUMBER",e[e.TYPE_ANY=1]="TYPE_ANY",e[e.TYPE_STRING=2]="TYPE_STRING",e[e.TYPE_ARRAY=3]="TYPE_ARRAY",e[e.TYPE_OBJECT=4]="TYPE_OBJECT",e[e.TYPE_BOOLEAN=5]="TYPE_BOOLEAN",e[e.TYPE_EXPREF=6]="TYPE_EXPREF",e[e.TYPE_NULL=7]="TYPE_NULL",e[e.TYPE_ARRAY_NUMBER=8]="TYPE_ARRAY_NUMBER",e[e.TYPE_ARRAY_STRING=9]="TYPE_ARRAY_STRING"})(M||(M={}));class Fd{constructor(t){this.TYPE_NAME_TABLE={[M.TYPE_NUMBER]:"number",[M.TYPE_ANY]:"any",[M.TYPE_STRING]:"string",[M.TYPE_ARRAY]:"array",[M.TYPE_OBJECT]:"object",[M.TYPE_BOOLEAN]:"boolean",[M.TYPE_EXPREF]:"expression",[M.TYPE_NULL]:"null",[M.TYPE_ARRAY_NUMBER]:"Array<number>",[M.TYPE_ARRAY_STRING]:"Array<string>"},this.functionAbs=([n])=>Math.abs(n),this.functionAvg=([n])=>{let a=0;for(let s=0;s<n.length;s+=1)a+=n[s];return a/n.length},this.functionCeil=([n])=>Math.ceil(n),this.functionContains=n=>{const[a,s]=n;return a.includes(s)},this.functionEndsWith=n=>{const[a,s]=n;return a.includes(s,a.length-s.length)},this.functionFloor=([n])=>Math.floor(n),this.functionJoin=n=>{const[a,s]=n;return s.join(a)},this.functionKeys=([n])=>Object.keys(n),this.functionLength=([n])=>mn(n)?Object.keys(n).length:n.length,this.functionMap=n=>{if(!this._interpreter)return[];const a=[],s=this._interpreter,r=n[0],o=n[1];for(let i=0;i<o.length;i+=1)a.push(s.visit(r,o[i]));return a},this.functionMax=([n])=>{if(!n.length)return null;if(this.getTypeName(n[0])===M.TYPE_NUMBER)return Math.max(...n);const s=n;let r=s[0];for(let o=1;o<s.length;o+=1)r.localeCompare(s[o])<0&&(r=s[o]);return r},this.functionMaxBy=n=>{const a=n[1],s=n[0],r=this.createKeyFunction(a,[M.TYPE_NUMBER,M.TYPE_STRING]);let o=-1/0,i,l;for(let f=0;f<s.length;f+=1)l=r&&r(s[f]),l!==void 0&&l>o&&(o=l,i=s[f]);return i},this.functionMerge=n=>{let a={};for(let s=0;s<n.length;s+=1){const r=n[s];a=Object.assign(a,r)}return a},this.functionMin=([n])=>{if(!n.length)return null;if(this.getTypeName(n[0])===M.TYPE_NUMBER)return Math.min(...n);const s=n;let r=s[0];for(let o=1;o<s.length;o+=1)s[o].localeCompare(r)<0&&(r=s[o]);return r},this.functionMinBy=n=>{const a=n[1],s=n[0],r=this.createKeyFunction(a,[M.TYPE_NUMBER,M.TYPE_STRING]);let o=1/0,i,l;for(let f=0;f<s.length;f+=1)l=r&&r(s[f]),l!==void 0&&l<o&&(o=l,i=s[f]);return i},this.functionNotNull=n=>{for(let a=0;a<n.length;a+=1)if(this.getTypeName(n[a])!==M.TYPE_NULL)return n[a];return null},this.functionReverse=([n])=>{if(this.getTypeName(n)===M.TYPE_STRING){const r=n;let o="";for(let i=r.length-1;i>=0;i-=1)o+=r[i];return o}const s=n.slice(0);return s.reverse(),s},this.functionSort=([n])=>[...n].sort(),this.functionSortBy=n=>{if(!this._interpreter)return[];const a=n[0].slice(0);if(a.length===0)return a;const s=this._interpreter,r=n[1],o=this.getTypeName(s.visit(r,a[0]));if(o!==void 0&&![M.TYPE_NUMBER,M.TYPE_STRING].includes(o))throw new Error(`TypeError: unexpected type (${this.TYPE_NAME_TABLE[o]})`);const i=[];for(let l=0;l<a.length;l+=1)i.push([l,a[l]]);i.sort((l,f)=>{const u=s.visit(r,l[1]),d=s.visit(r,f[1]);if(this.getTypeName(u)!==o)throw new Error(`TypeError: expected (${this.TYPE_NAME_TABLE[o]}), received ${this.TYPE_NAME_TABLE[this.getTypeName(u)]}`);if(this.getTypeName(d)!==o)throw new Error(`TypeError: expected (${this.TYPE_NAME_TABLE[o]}), received ${this.TYPE_NAME_TABLE[this.getTypeName(d)]}`);return u>d?1:u<d?-1:l[0]-f[0]});for(let l=0;l<i.length;l+=1)a[l]=i[l][1];return a},this.functionStartsWith=([n,a])=>n.startsWith(a),this.functionSum=([n])=>n.reduce((a,s)=>a+s,0),this.functionToArray=([n])=>this.getTypeName(n)===M.TYPE_ARRAY?n:[n],this.functionToNumber=([n])=>{const a=this.getTypeName(n);let s;return a===M.TYPE_NUMBER?n:a===M.TYPE_STRING&&(s=+n,!isNaN(s))?s:null},this.functionToString=([n])=>this.getTypeName(n)===M.TYPE_STRING?n:JSON.stringify(n),this.functionType=([n])=>{switch(this.getTypeName(n)){case M.TYPE_NUMBER:return"number";case M.TYPE_STRING:return"string";case M.TYPE_ARRAY:return"array";case M.TYPE_OBJECT:return"object";case M.TYPE_BOOLEAN:return"boolean";case M.TYPE_EXPREF:return"expref";case M.TYPE_NULL:return"null";default:return}},this.functionValues=([n])=>Object.values(n),this.functionTable={abs:{_func:this.functionAbs,_signature:[{types:[M.TYPE_NUMBER]}]},avg:{_func:this.functionAvg,_signature:[{types:[M.TYPE_ARRAY_NUMBER]}]},ceil:{_func:this.functionCeil,_signature:[{types:[M.TYPE_NUMBER]}]},contains:{_func:this.functionContains,_signature:[{types:[M.TYPE_STRING,M.TYPE_ARRAY]},{types:[M.TYPE_ANY]}]},ends_with:{_func:this.functionEndsWith,_signature:[{types:[M.TYPE_STRING]},{types:[M.TYPE_STRING]}]},floor:{_func:this.functionFloor,_signature:[{types:[M.TYPE_NUMBER]}]},join:{_func:this.functionJoin,_signature:[{types:[M.TYPE_STRING]},{types:[M.TYPE_ARRAY_STRING]}]},keys:{_func:this.functionKeys,_signature:[{types:[M.TYPE_OBJECT]}]},length:{_func:this.functionLength,_signature:[{types:[M.TYPE_STRING,M.TYPE_ARRAY,M.TYPE_OBJECT]}]},map:{_func:this.functionMap,_signature:[{types:[M.TYPE_EXPREF]},{types:[M.TYPE_ARRAY]}]},max:{_func:this.functionMax,_signature:[{types:[M.TYPE_ARRAY_NUMBER,M.TYPE_ARRAY_STRING]}]},max_by:{_func:this.functionMaxBy,_signature:[{types:[M.TYPE_ARRAY]},{types:[M.TYPE_EXPREF]}]},merge:{_func:this.functionMerge,_signature:[{types:[M.TYPE_OBJECT],variadic:!0}]},min:{_func:this.functionMin,_signature:[{types:[M.TYPE_ARRAY_NUMBER,M.TYPE_ARRAY_STRING]}]},min_by:{_func:this.functionMinBy,_signature:[{types:[M.TYPE_ARRAY]},{types:[M.TYPE_EXPREF]}]},not_null:{_func:this.functionNotNull,_signature:[{types:[M.TYPE_ANY],variadic:!0}]},reverse:{_func:this.functionReverse,_signature:[{types:[M.TYPE_STRING,M.TYPE_ARRAY]}]},sort:{_func:this.functionSort,_signature:[{types:[M.TYPE_ARRAY_STRING,M.TYPE_ARRAY_NUMBER]}]},sort_by:{_func:this.functionSortBy,_signature:[{types:[M.TYPE_ARRAY]},{types:[M.TYPE_EXPREF]}]},starts_with:{_func:this.functionStartsWith,_signature:[{types:[M.TYPE_STRING]},{types:[M.TYPE_STRING]}]},sum:{_func:this.functionSum,_signature:[{types:[M.TYPE_ARRAY_NUMBER]}]},to_array:{_func:this.functionToArray,_signature:[{types:[M.TYPE_ANY]}]},to_number:{_func:this.functionToNumber,_signature:[{types:[M.TYPE_ANY]}]},to_string:{_func:this.functionToString,_signature:[{types:[M.TYPE_ANY]}]},type:{_func:this.functionType,_signature:[{types:[M.TYPE_ANY]}]},values:{_func:this.functionValues,_signature:[{types:[M.TYPE_OBJECT]}]}},this._interpreter=t}registerFunction(t,n,a){if(t in this.functionTable)throw new Error(`Function already defined: ${t}()`);this.functionTable[t]={_func:n.bind(this),_signature:a}}callFunction(t,n){const a=this.functionTable[t];if(a===void 0)throw new Error(`Unknown function: ${t}()`);return this.validateArgs(t,n,a._signature),a._func.call(this,n)}validateInputSignatures(t,n){for(let a=0;a<n.length;a+=1)if("variadic"in n[a]&&a!==n.length-1)throw new Error(`ArgumentError: ${t}() 'variadic' argument ${a+1} must occur last`)}validateArgs(t,n,a){var s,r;let o;this.validateInputSignatures(t,a);const i=a.filter(c=>{var m;return(m=!c.optional)!==null&&m!==void 0?m:!1}).length,l=(r=(s=a[a.length-1])===null||s===void 0?void 0:s.variadic)!==null&&r!==void 0?r:!1,f=n.length<i,u=n.length>a.length,d=f&&(!l&&i>1||l)?"at least ":"";if(l&&f||!l&&(f||u))throw o=a.length>1,new Error(`ArgumentError: ${t}() takes ${d}${i} argument${o&&"s"||""} but received ${n.length}`);let h,p,g;for(let c=0;c<a.length;c+=1){g=!1,h=a[c].types,p=this.getTypeName(n[c]);let m;for(m=0;m<h.length;m+=1)if(p!==void 0&&this.typeMatches(p,h[m],n[c])){g=!0;break}if(!g&&p!==void 0){const _=h.map(y=>this.TYPE_NAME_TABLE[y]).join(" | ");throw new Error(`TypeError: ${t}() expected argument ${c+1} to be type (${_}) but received type ${this.TYPE_NAME_TABLE[p]} instead.`)}}}typeMatches(t,n,a){if(n===M.TYPE_ANY)return!0;if(n===M.TYPE_ARRAY_STRING||n===M.TYPE_ARRAY_NUMBER||n===M.TYPE_ARRAY){if(n===M.TYPE_ARRAY)return t===M.TYPE_ARRAY;if(t===M.TYPE_ARRAY){let s;n===M.TYPE_ARRAY_NUMBER?s=M.TYPE_NUMBER:n===M.TYPE_ARRAY_STRING&&(s=M.TYPE_STRING);for(let r=0;r<a.length;r+=1){const o=this.getTypeName(a[r]);if(o!==void 0&&s!==void 0&&!this.typeMatches(o,s,a[r]))return!1}return!0}}else return t===n;return!1}getTypeName(t){switch(Object.prototype.toString.call(t)){case"[object String]":return M.TYPE_STRING;case"[object Number]":return M.TYPE_NUMBER;case"[object Array]":return M.TYPE_ARRAY;case"[object Boolean]":return M.TYPE_BOOLEAN;case"[object Null]":return M.TYPE_NULL;case"[object Object]":return t.jmespathType===A.TOK_EXPREF?M.TYPE_EXPREF:M.TYPE_OBJECT;default:return}}createKeyFunction(t,n){if(!this._interpreter)return;const a=this._interpreter;return r=>{const o=a.visit(t,r);if(!n.includes(this.getTypeName(o))){const i=`TypeError: expected one of (${n.map(l=>this.TYPE_NAME_TABLE[l]).join(" | ")}), received ${this.TYPE_NAME_TABLE[this.getTypeName(o)]}`;throw new Error(i)}return o}}}class Ud{constructor(){this._rootValue=null,this.runtime=new Fd(this)}search(t,n){return this._rootValue=n,this.visit(t,n)}visit(t,n){let a,s,r,o,i,l,f,u,d,h,p;switch(t.type){case"Field":return n===null?null:mn(n)?(l=n[t.name],l===void 0?null:l):null;case"Subexpression":for(r=this.visit(t.children[0],n),h=1;h<t.children.length;h+=1)if(r=this.visit(t.children[1],r),r===null)return null;return r;case"IndexExpression":return f=this.visit(t.children[0],n),u=this.visit(t.children[1],f),u;case"Index":if(!Array.isArray(n))return null;let g=t.value;return g<0&&(g=n.length+g),r=n[g],r===void 0&&(r=null),r;case"Slice":if(!Array.isArray(n))return null;const c=[...t.children],m=this.computeSliceParams(n.length,c),[_,y,T]=m;if(r=[],T>0)for(h=_;h<y;h+=T)r.push(n[h]);else for(h=_;h>y;h+=T)r.push(n[h]);return r;case"Projection":if(p=this.visit(t.children[0],n),!Array.isArray(p))return null;for(d=[],h=0;h<p.length;h+=1)s=this.visit(t.children[1],p[h]),s!==null&&d.push(s);return d;case"ValueProjection":if(p=this.visit(t.children[0],n),!mn(p))return null;d=[];const S=Object.values(p);for(h=0;h<S.length;h+=1)s=this.visit(t.children[1],S[h]),s!==null&&d.push(s);return d;case"FilterProjection":if(p=this.visit(t.children[0],n),!Array.isArray(p))return null;const x=[],R=[];for(h=0;h<p.length;h+=1)a=this.visit(t.children[2],p[h]),Vn(a)||x.push(p[h]);for(let P=0;P<x.length;P+=1)s=this.visit(t.children[1],x[P]),s!==null&&R.push(s);return R;case"Comparator":switch(o=this.visit(t.children[0],n),i=this.visit(t.children[1],n),t.name){case A.TOK_EQ:r=ua(o,i);break;case A.TOK_NE:r=!ua(o,i);break;case A.TOK_GT:r=o>i;break;case A.TOK_GTE:r=o>=i;break;case A.TOK_LT:r=o<i;break;case A.TOK_LTE:r=o<=i;break;default:throw new Error(`Unknown comparator: ${t.name}`)}return r;case A.TOK_FLATTEN:const w=this.visit(t.children[0],n);if(!Array.isArray(w))return null;let D=[];for(h=0;h<w.length;h+=1)s=w[h],Array.isArray(s)?D=[...D,...s]:D.push(s);return D;case"Identity":return n;case"MultiSelectList":if(n===null)return null;for(d=[],h=0;h<t.children.length;h+=1)d.push(this.visit(t.children[h],n));return d;case"MultiSelectHash":if(n===null)return null;d={};let O;for(h=0;h<t.children.length;h+=1)O=t.children[h],d[O.name]=this.visit(O.value,n);return d;case"OrExpression":return a=this.visit(t.children[0],n),Vn(a)&&(a=this.visit(t.children[1],n)),a;case"AndExpression":return o=this.visit(t.children[0],n),Vn(o)?o:this.visit(t.children[1],n);case"NotExpression":return o=this.visit(t.children[0],n),Vn(o);case"Literal":return t.value;case A.TOK_PIPE:return f=this.visit(t.children[0],n),this.visit(t.children[1],f);case A.TOK_CURRENT:return n;case A.TOK_ROOT:return this._rootValue;case"Function":const F=[];for(let P=0;P<t.children.length;P+=1)F.push(this.visit(t.children[P],n));return this.runtime.callFunction(t.name,F);case"ExpressionReference":const Y=t.children[0];return Y.jmespathType=A.TOK_EXPREF,Y;default:throw new Error(`Unknown node type: ${t.type}`)}}computeSliceParams(t,n){let[a,s,r]=n;if(r===null)r=1;else if(r===0){const i=new Error("Invalid slice, step cannot be 0");throw i.name="RuntimeError",i}const o=r<0;return a=a===null?o?t-1:0:this.capSliceRange(t,a,r),s=s===null?o?-1:t:this.capSliceRange(t,s,r),[a,s,r]}capSliceRange(t,n,a){let s=n;return s<0?(s+=t,s<0&&(s=a<0?-1:0)):s>=t&&(s=a<0?t-1:t),s}}const Bs=new Ud,$d=M.TYPE_ANY,Hd=M.TYPE_ARRAY,Kd=M.TYPE_ARRAY_NUMBER,Yd=M.TYPE_ARRAY_STRING,jd=M.TYPE_BOOLEAN,qd=M.TYPE_EXPREF,Gd=M.TYPE_NULL,Wd=M.TYPE_NUMBER,Jd=M.TYPE_OBJECT,Vd=M.TYPE_STRING;function zd(e){return Ri.parse(e)}function Qd(e){return xi.tokenize(e)}const Xd=(e,t,n)=>{Bs.runtime.registerFunction(e,t,n)};function Zd(e,t){const n=Ri.parse(t);return Bs.search(n,e)}const ep=Bs,_t={compile:zd,registerFunction:Xd,search:Zd,tokenize:Qd,TreeInterpreter:ep,TYPE_ANY:$d,TYPE_ARRAY_NUMBER:Kd,TYPE_ARRAY_STRING:Yd,TYPE_ARRAY:Hd,TYPE_BOOLEAN:jd,TYPE_EXPREF:qd,TYPE_NULL:Gd,TYPE_NUMBER:Wd,TYPE_OBJECT:Jd,TYPE_STRING:Vd},lt=class lt{static async appendPrompt(t,n){Yr(t,LZString.compressToUTF16(JSON.stringify(n))).then(async()=>{on().then(a=>{a=a.filter(s=>s.indexOf(this.DELIM_PROMPTS)!=-1),a.length>lt.MAX_PROMPTS_VALS&&Ga(a[0])})}).catch(a=>console.error("~IDB Failed | ",a))}static async appendVIR_products(t){t.forEach(n=>{let a=JSON.stringify({ts:Date.now(),name:n[1]});Yr(n[0],LZString.compressToUTF16(a)).then(async()=>{}).catch(s=>console.error("~IDB Failed | ",s))})}static async keys(t,n){on().then(a=>{a=a.filter(s=>s.indexOf(t)!=-1),n&&n(a)})}static async get(t,n){Rd(t).then(a=>{try{a=JSON.parse(LZString.decompressFromUTF16(a))}catch{}finally{n&&n(a)}})}static async entries(t,n){Cd().then(a=>{a=a.filter(s=>s[0].indexOf(t)!=-1),a=a.map(s=>{try{s[1]=JSON.parse(LZString.decompressFromUTF16(s[1]))}catch{}finally{}return s}),n&&n(a)})}static compr(t){return t}static decompr(t){return t}static async act(t,n,a){let s="";switch(t){case"PROMPTS_COUNT":on().then(o=>{o=o.filter(i=>i.indexOf(this.DELIM_PROMPTS)!=-1),s=`There are ${o.length} prompts in local IDB storage. The current max is ${this.MAX_PROMPTS_VALS}.`,s&&a&&a(s)});break;case"PROMPTS_IMPORT":console.log("~ PROMPTS_IMPORT | ");break;case"PROMPTS_EXPORT":console.log("~ PROMPTS_EXPORT | ");break;case"PROMPTS_CLEAR":on().then(o=>{o.forEach(i=>{i.indexOf(this.DELIM_PROMPTS)!=-1&&i.split(lt.DELIM_PROMPTS)[0]==n&&Ga(i)})}),s="The Prompt history has been removed for UPI: "+n,console.log("~ PROMPTS_CLEAR ------ | ",s);break;case"VIR_COUNT":on().then(o=>{o=o.filter(i=>i.indexOf(this.DELIM_VIR)!=-1),s=`There are ${o.length} VNR names in local IDB storage.`,s&&a&&a(s)});break;case"VIR_CLEAR":let r=0;await on().then(o=>{o.forEach(i=>{i.indexOf(this.DELIM_VIR)!=-1&&i.split(lt.DELIM_VIR)[0]==n&&(r++,Ga(i))})}),s=`The VNR Names have been removed for UPI: ${n} (Total Deleted: ${r})`;break;case"FEATURE_CLEAR":localStorage.getItem("feature_flags")&&localStorage.removeItem("feature_flags"),s="Features have been reset to default. Refresh.";break}console.log("~ resultMsg | ",s),s&&a&&a(s)}};lt.MAX_TYPEAHEAD_ROWS=14,lt.MAX_PROMPTS_VALS=50,lt.DELIM_PROMPTS="_",lt.DELIM_VIR="-",lt.DELIM_SNDX="|";let Qt=lt;const ye=mu("AppState",()=>{const e=ft(),t="DEV",n="BMA Tourney v0.0.5 ",a="#app",s=Et({APP__ROUTE_SYNC:"APP.ROUTE_SYNC",WC__TOURN_ACTION:"WC.TOURN_ACTION",WC__APP__HEAD_TOP:"WC.APP.HEAD_TOP",WC__APP__HEAD_TOP__LOGO:"WC.APP.HEAD_TOP.LOGO",WC__APP__HEAD_TOP__USER_PROFILE:"WC.APP.HEAD_TOP.USER_PROFILE",WC__APP__HEAD_MID:"WC.APP.HEAD_MID",WC__APP__HEAD_MID__HEAD_MID_LOBBY:"WC.APP.HEAD_MID.HEAD_MID_LOBBY",WC__APP__HEAD_MID__HEAD_MID_MY:"WC.APP.HEAD_MID.HEAD_MID_MY",WC__APP__HEAD_MID__HEAD_MID_COMPLETED:"WC.APP.HEAD_MID.HEAD_MID_COMPLETED",WC__APP__HEAD_MID__HEAD_MID_LEADERBOARD:"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD",WC__APP__HEAD_MID__HEAD_MID_SQUAD:"WC.APP.HEAD_MID.HEAD_MID_SQUAD",WC__APP__HEAD_SPORTS:"WC.APP.HEAD_SPORTS",WC__APP__HEAD_SPORTS__HEAD_SPORTS_DRAG_START:"WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START",WC__APP__FOOT:"WC.APP.FOOT",WC__APP__FOOT__ALL_SPORTS:"WC.APP.FOOT.ALL_SPORTS",WC__APP__FOOT__MY_TOURNEYS:"WC.APP.FOOT.MY_TOURNEYS",WC__APP__FOOT__LEADERBOARD:"WC.APP.FOOT.LEADERBOARD",WC__APP__FOOT__MY_PROFILE:"WC.APP.FOOT.MY_PROFILE",ROUTE__HOME_ONMOUNT:"ROUTE.HOME_ONMOUNT",ROUTE__HOME_HYDRATE:"ROUTE.HOME_HYDRATE",ROUTE__HOME__USER_PROFILE:"ROUTE.HOME.USER_PROFILE",SSE__CORE__TOURN_SYNC:"SSE.CORE.TOURN_SYNC",CANVAS__HYDRATE__STATUS:"CANVAS.HYDRATE.STATUS",SODAPOP__HYDRATE__COREBETSLIP:"SODAPOP.HYDRATE.COREBETSLIP",COREBETSLIP:"COREBETSLIP",COREBETSLIP__BET:"COREBETSLIP.BET",COREBETSLIP__SPREAD:"COREBETSLIP.SPREAD",COREBETSLIP__MONEY:"COREBETSLIP.MONEY",COREBETSLIP__TOTAL:"COREBETSLIP.TOTAL",COREBETSLIP__CLOSE:"COREBETSLIP.CLOSE",COREBETSLIP__INTERSYNC:"COREBETSLIP.INTERSYNC",COREBETSLIP__TDSYNC:"COREBETSLIP.TDSYNC"});let r=Et([]),o=Et([]);const i=O=>{r.push(O),r.length>10&&(r.shift(),console.log("[appState] coreTourn exceeded 10 items, removed oldest")),console.log(`[appState] coreTourn length: ${r.length}`)},l=O=>{o.push(O),o.length>10&&(o.shift(),console.log("[appState] coreBetSlip exceeded 10 items, removed oldest")),console.log(`[appState] coreBetSlip length: ${o.length}`)},f=()=>{const O=localStorage.getItem("session_user");if(console.log("[appState] Loading session_user from localStorage:",O),O)try{const F=JSON.parse(O);return console.log("[appState] Parsed session_user:",F),F}catch(F){console.error("Failed to parse session_user from localStorage:",F)}return console.log("[appState] No saved session, returning default"),{authenticated:!1,userName:"",name:"",fname:"",lname:"",email:"",token:"",guid:""}},u=Je({session_app:{online:!0,route:"",version:n+t,buildmode:t},session_log:[],session_ui:{orientation:"landscape",isTouch:"utils.isTouch()"},session_user:f()}),d=Je({commands:["clear","debug","export","feature","help","logout","reload","route","theme","version","workflow"],features:{theme:{state:"dark"},motif:{state:"brand"},lang:{state:"en"},sse:{state:!0},disable_existing_bet_btn:{state:!1},animation:{state:!0},audio:{state:!0},contextmenu:{state:!1},debug:{state:!1},guided_tour:{state:!1}},env_override:{DEV:{contextmenu:{state:!1}},QA:{contextmenu:{state:!0}},PROD:{contextmenu:{state:!1},sse:!0}}}),h=()=>{if(!localStorage.getItem("feature_flags"))localStorage.setItem("feature_flags",Qt.compr(JSON.stringify(d.value.features)));else{let O=Qt.decompr(localStorage.getItem("feature_flags"));O=Object.assign(d.value.features,JSON.parse(O));for(let F in O)typeof d.value?.env_override[t][F]<"u"&&(O[F]=d.value.env_override[t][F]);localStorage.setItem("feature_flags",Qt.compr(JSON.stringify(d.value.features=O)))}},p=()=>{const O=document.querySelector(a);if(O){const F=O.dataset;for(let Y in F){const P=Y.replace(/^sync/,""),V=Object.keys(d.value.features).find($=>$.toLowerCase()===P.toLowerCase());if(V){const $=d.value.features[V]?.state;$&&(F[Y]=$)}}}},g=(O="Theme",F={state:"dark"})=>{const Y=document.querySelector(a);Y&&(Y.dataset["sync"+O]=F.state)},c=(O="Theme",F={state:"dark"})=>{if(localStorage.getItem("feature_flags")&&F){let P=JSON.parse(Qt.decompr(localStorage.getItem("feature_flags")));P[O]={state:F.state},localStorage.setItem("feature_flags",Qt.compr(JSON.stringify(d.value.features=P))),g(O,F),J.publish("APP.ROUTE_SYNC",`{ "${O}": ${JSON.stringify(F)}}`)}},m=O=>{const F=d.value?.features?.Lang?.state;let Y=T.value.microcopy.language.filter(P=>P.code==F)[0]?.copy;if(Y=Y.filter(P=>P[0]==O)[0],Y)return Y[1]},_=(O=":version")=>{let[F,Y,P]=O.split(" ");switch(F=F.toLocaleLowerCase(),P=="true"&&(P=!0),P=="false"&&(P=!1),F){case":version":neodigmToast.q(`Version Q ${u.value.session_app.version}`,"brand");break;case":feature":c(Y,{state:P});break;case":route":neodigmToast.q(`route ${Y}`,"brand"),e.push({name:Y});break}};h(),p();const y=Et({designer:"guided_tour",notifications:{unread:0}}),T=Je({sports:Hn,microcopy:wd.getMeta()}),S=je(()=>u.value.session_user.fname+" "+u.value.session_user.lname),x=()=>{console.log("[appState] Saving session_user to localStorage:",u.value.session_user),localStorage.setItem("session_user",JSON.stringify(u.value.session_user))},R=()=>{localStorage.removeItem("session_user")};function w(O){return u.value.session_user.authenticated=!0,u.value.session_user.token=O,x(),u.value.session_app.route="chat"}function D(){return u.value.session_user.authenticated=!1,u.value.session_user.token="",u.value.session_user.guid="",R(),API_ORCH.setTJO(null),u.value.session_app.route="auth"}return{appCLIFeatures:d,appDesigner:y,appMeta:T,appSession:u,clearSessionUser:R,concatFirstLast:S,coreBetSlip:o,coreTourn:r,doCLI:_,doLogin:w,doLogout:D,hierTopics:s,i18n:m,pushCoreTourn:i,pushcoreBetSlip:l,saveSessionUser:x,setFeaturePersistPub:c}}),Ue=class Ue{static getTJO(){if(this.jsTJO)return this.jsTJO;let t=localStorage.getItem("tjo");return t&&(this.jsTJO=JSON.parse(t)),this.jsTJO}static setTJO(t){return t?localStorage.setItem("tjo",JSON.stringify(t)):localStorage.clear("tjo"),this.jsTJO=t}static setStateSignout(){typeof neodigmWired4Sound<"u"&&neodigmWired4Sound.sound(11),Ue.setTJO(null),location.reload()}static async doSignin(t,n=null){const a={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}},r=await(await fetch(this.API_baseURI+"/bmac/"+this.API_ver+"/acctEntity/signin",a)).json();r.ok?(typeof mvvLegit<"u"&&mvvLegit&&r?.accessToken&&mvvLegit.doSignin(r?.accessToken),n&&n(r)):typeof neodigmToast<"u"&&neodigmToast.q("Invalid User ID|Password")}static async doSignup(t,n=null){const a={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}},r=await(await fetch(this.API_baseURI+"/bmac/"+this.API_ver+"/acctEntity",a)).json();if(r.ok)typeof neodigmToast<"u"&&neodigmToast.q("Account created successfully!|Please sign in","success"),n&&n(r);else{const o=r?.error||r?.message||"Signup failed. Please try again.";typeof neodigmToast<"u"&&neodigmToast.q(o,"danger"),n&&n(r)}}static async checkUserName(t,n=null){const a={method:"POST",body:JSON.stringify({userName:t}),headers:{"Content-Type":"application/json"}},r=await(await fetch(this.API_baseURI+"/bmac/"+this.API_ver+"/acctEntity/checkUserName",a)).json();return n&&n(r),r}static async resetHash(t,n,a=null){typeof neodigmAgent<"u"?neodigmAgent.genChronSync():Date.now();const s=typeof neodigmUtils<"u"?neodigmUtils.genHash(n):n,r={method:"POST",body:JSON.stringify({guid:t,hash:s}),headers:Ue.genHeaders()},i=await(await fetch(this.API_baseURI+this.API_ver+"/acct/resetHash",r)).json();a&&a(i)}static genHeaders(t={}){let n={};return n.protomolecule=typeof neodigmAgent<"u"?neodigmAgent.genChronSync():Date.now(),n.Authorization="Bearer expired",n["Content-Type"]="application/json",Ue.getTJO()&&(n.Authorization="Bearer "+Ue.getTJO().tokens[0]),typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.class&&(n.role=SessionAcctEntity.oEntities.data.entity.class),typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.guid&&(n.guid=SessionAcctEntity.oEntities.data.entity.guid),typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.company&&(n.company=SessionAcctEntity.oEntities.data.entity.company),n}static async fetchTournaments(t=null){const n={method:"GET",headers:Ue.genHeaders()},s=await(await fetch(this.API_baseURI+"/bmac/"+this.API_ver+"/coreTournaments",n)).json();return t&&t(s),s}static async fetchBetSlips(t,n="",a="",s=null){let r=`/bmac/${this.API_ver}/coreBetSlip/filter/${t}`;n&&(r+=`/${n}`),n&&a&&(r+=`/${a}`);const o={method:"GET",headers:Ue.genHeaders()},l=await(await fetch(this.API_baseURI+r,o)).json();return s&&s(l),l}static async fetchLeaderboard(t,n="",a=null){let s=`/bmac/${this.API_ver}/coreLeaderboard?tourney=${t}`;n&&(s+=`&user=${n}`);const r={method:"GET",headers:Ue.genHeaders()},i=await(await fetch(this.API_baseURI+s,r)).json();return a&&a(i),i}static async postBetSlips(t,n=null){const a=t.map(r=>{const o={method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}};return fetch(this.API_baseURI+"/bmac/"+this.API_ver+"/coreBetSlip/",o).then(i=>i.json())}),s=await Promise.all(a);return n&&n(s),s}};Ue.API_baseURI="https://machfive-bmacdev-rest.onrender.com",Ue.API_ver="v5",Ue.jsState={},Ue.jsMeta={},Ue.jsTJO=null;let be=Ue;const Zt={shootConfetti(){if(typeof confetti=="function"){let a=function(s,r){confetti({...t,...r,particleCount:Math.floor(e*s)})};var n=a,e=200,t={origin:{y:.7}};a(.25,{zIndex:304,spread:26,startVelocity:55}),a(.2,{zIndex:304,spread:60}),a(.35,{zIndex:304,spread:100,decay:.91,scalar:.8}),a(.1,{zIndex:304,spread:120,startVelocity:25,decay:.92,scalar:1.2}),a(.1,{zIndex:304,spread:120,startVelocity:45})}},hardReload(){const e=new URLSearchParams(window.location.search);e.set("reload",new Date().getTime());const t=e.toString();window.location.search=t},isJSON(e){let t=!1;try{t=typeof JSON.parse(e)}catch{}return t=="object"},isTouch:function(){return typeof document.body.ontouchstart<"u"},prettyTimeExt(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"})},formatDateLocal(e,t={}){if(!e)return"TBD";let n=new Date(e);!e.includes("Z")&&!e.match(/[+-]\d{2}:\d{2}$/)&&(n=new Date(e+"Z"));const a={month:"short",day:"numeric",hour:"numeric",minute:"2-digit"};return n.toLocaleString(void 0,{...a,...t})},shallowDelta(e,t){if(Object.keys(t).length==0&&Object.keys(e).length>0)return e;let n={};for(const a in t)e[a]&&t[a]!=e[a]&&(n[a]=e[a]);return Object.keys(n).length>0?n:t},genLorumIpsum(e=1){}},jt=(e,t)=>{const n=e.__vccOpts||e;for(const[a,s]of t)n[a]=s;return n},tp={class:"auth-page"},np={__name:"splash_route",setup(e){const t=ft(),n=ki();return ye(),setTimeout(()=>{n&&n.name=="splash_route"&&(mvvLegit&&mvvLegit.isRouteAllowed("home_route")?t.push({name:"home_route"}):t.push({name:"signin_route"}))},3e3),(a,s)=>(Qe(),pt("div",tp,[...s[0]||(s[0]=[Yt('<div class="auth-page-left" data-v-91dce2eb><div class="auth-bg" data-v-91dce2eb><div class="auth-bg-image" data-v-91dce2eb></div><div class="auth-bg-image" data-v-91dce2eb></div><div class="auth-bg-image" data-v-91dce2eb></div></div><div class="auth-overlay" data-v-91dce2eb></div><div class="auth-branding-content" data-v-91dce2eb><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-91dce2eb><p class="auth-branding-tagline" data-v-91dce2eb>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-91dce2eb>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-91dce2eb> © 2026 Bet Max Action. All rights reserved. </div></div>',1),k("div",{class:"auth-page-right"},[k("div",{class:"auth-card splash-content"},[k("p",{class:"splash-message"},"Loading your experience ..."),k("br"),k("br"),k("neodigm-juicebar",{role:"progressbar","data-n55-theme":"brand","data-n55-size":"medium",style:{"background-color":"#242424"}},[k("div")])])],-1)])]))}},Gr=jt(np,[["__scopeId","data-v-91dce2eb"]]);class ap extends HTMLElement{connectedCallback(){this.attachShadow({mode:"open"}),this.render()}static get observedAttributes(){return["sport","data-sync-theme"]}attributeChangedCallback(){this.shadowRoot&&this.render()}render(){this.getAttribute("sport");const n=document.getElementById("app")?.getAttribute("data-sync-theme").toLowerCase()||"dark",a=n==="dark";let s=this.getAttribute("data-sport-group")||"Soccer",r=s.replaceAll(" ","_");this.shadowRoot.innerHTML=`
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
    `}}customElements.define("bma-sport-icon",ap);class sp extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-bma-tourn-caption","data-bma-tourn-entities","data-bma-tourn-entry_fee","data-bma-tourn-matches","data-bma-tourn-matches_expanded","data-bma-tourn-prize_distro","data-bma-tourn-sports_allowed","data-bma-tourn-status","data-sync-theme","data-bma-tourn-tagline","data-bma-tourn-tournament_dollars","data-bma-tourn-tags"]}connectedCallback(){this.render(),this.observeTheme(),this.attachEventListeners()}dispatchCardEvent(t,n={}){const a=new CustomEvent("bma-tournament-action",{bubbles:!0,composed:!0,detail:{action:t,tournamentId:this.getAttribute("data-bma-tourn-id"),tournamentGuid:this.getAttribute("data-bma-tourn-guid"),tournamentStatus:this.status,...n}});this.dispatchEvent(a)}attachEventListeners(){this.shadowRoot.addEventListener("click",t=>{const n=t.target.closest(".btn-info"),a=t.target.closest(".btn-join"),s=t.target.closest(".btn-play"),r=t.target.closest("bma-sport-icon");if(n){t.stopPropagation(),this.dispatchCardEvent("INFO");return}if(a){t.stopPropagation(),this.dispatchCardEvent("JOIN");return}if(s){t.stopPropagation(),this.dispatchCardEvent("PLAY");return}if(r){t.stopPropagation();const o=r.getAttribute("sport"),i=this.getSportInfo(o);this.dispatchCardEvent("SPORT_ICON",{sportKey:o,sportTitle:i.title,sportDescription:i.description});return}t.target.closest(".card")&&this.dispatchCardEvent("FOCUS")})}attributeChangedCallback(t,n,a){n!==a&&this.render()}observeTheme(){const t=document.getElementById("app");if(!t)return;new MutationObserver(()=>{this.render()}).observe(t,{attributes:!0,attributeFilter:["data-sync-theme"]})}getTheme(){return document.getElementById("app")?.getAttribute("data-sync-theme")||"dark"}get caption(){return this.getAttribute("data-bma-tourn-caption")||"Tournament"}get tournament_dollars(){return this.getAttribute("data-bma-tourn-tournament_dollars")||"0"}get entities(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const n=JSON.parse(t);return Array.isArray(n)?n.find(s=>Array.isArray(s))?.length||"0":n?.guids?.length||"0"}catch{return"0"}return"0"}get entitiesGuids(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const n=JSON.parse(t);return Array.isArray(n)?n.find(s=>Array.isArray(s))||[]:n?.guids||[]}catch{return[]}return[]}get entitiesData(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const n=JSON.parse(t);if(Array.isArray(n)){const a=n.find(r=>r&&typeof r=="object"&&!Array.isArray(r));return{current:n.find(r=>Array.isArray(r))?.length||0,max:parseInt(a?.max)||100}}return{current:n?.guids?.length||0,max:n?.max||100}}catch{return{current:0,max:100}}return{current:0,max:100}}isUserParticipating(){const n=document.getElementById("app")?.dataset?.userGuid;return n?this.entitiesGuids.includes(n):!1}getUserBadge(){const n=document.getElementById("app")?.dataset?.userGuid;if(!n)return null;const a=this.getAttribute("data-bma-tourn-tags");if(!a)return null;try{const s=JSON.parse(a);if(!Array.isArray(s))return null;const r=s.find(o=>typeof o=="object"&&o!==null?o[n]&&o[n].startsWith("--badge__ribbon--"):!1);return r?r[n]:null}catch{return null}}getBadgeClass(){const t=this.getUserBadge();if(!t)return"";const n=t.match(/--badge__ribbon--(\w+)/);return n?n[1]:""}getSportInfo(t){const n=Hn.find(a=>a.key===t);return n?{title:n.title,description:n.description}:{title:t,description:t}}get matches(){let t=this.getAttribute("data-bma-tourn-matches");return t&&(t=JSON.parse(t)),t?.length||"0"}get matches_expanded(){let t=this.getAttribute("data-bma-tourn-matches_expanded");return t&&(t=JSON.parse(t)),t||null}get marqueeText(){const t=this.matches_expanded;return!t||t.length===0?"   Exciting Sports Matchups Coming Soon!   ":"  "+t.map(a=>{const s=a.title||"Match";let r="TBD";if(a.scheduled_at)try{r=new Date(a.scheduled_at).toLocaleString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit",hour12:!0})}catch{r=a.scheduled_at}return`  ${s} @ ${r}  `}).join(" • ")+"  "}get tagline(){return this.getAttribute("data-bma-tourn-tagline")||""}get status(){return this.getAttribute("data-bma-tourn-status")||"upcoming"}get prizeDistro(){const t=this.getAttribute("data-bma-tourn-prize_distro");if(!t)return null;try{return JSON.parse(t)}catch{return t}}get entryFee(){return this.getAttribute("data-bma-tourn-entry_fee")||"Free"}get sportsAllowed(){const t=this.getAttribute("data-bma-tourn-sports_allowed");if(!t)return[];try{const n=JSON.parse(t);return Array.isArray(n)?n.map(a=>typeof a=="object"&&a.sport_key?a.sport_key:a):[n]}catch{return[t]}}get sportsDisplay(){const t=this.sportsAllowed;if(!Array.isArray(t)||t.length===0)return'<bma-sport-icon sport="default" data-sport-group="default"></bma-sport-icon>';const n=Math.min(t.length,3);let a="";for(let s=0;s<n;s++){const r=t[s].key,o=Hn.find(l=>l.key===r),i=o?o.group:"default";a+=`<bma-sport-icon sport="${r}" data-sport-group="${i}"></bma-sport-icon>`}return t.length>3&&(a+=`<span class="sport-count">+${t.length-3}</span>`),a}render(){const t=this.getTheme(),n=t==="dark",a=this.getAttribute("data-sync-theme")||t;this.shadowRoot.innerHTML=`
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
          background: ${n?"linear-gradient(135deg, var( --app-core-color--gray-3__dark--brand ) 0%, var( --app-core-color--yellow-3__dark--brand ) 100%)":"linear-gradient(135deg, var( --app-core-color--gray-7__light--brand ) 0%, var( --app-core-color--yellow-5__light--brand ) 100%)"};

        }

        :host([data-bma-tourn-class="LOCKED"]) .card {
          background: ${n?"linear-gradient(135deg, var( --app-core-color--gray-3__dark--brand ) 0%, var( --app-core-color--green-3__dark--brand ) 100%)":"linear-gradient(135deg, var( --app-core-color--gray-7__light--brand ) 0%, var( --app-core-color--green-5__light--brand ) 100%)"};
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
        .card[data-sync-theme="light"] .status.UPCOMING    { color: var(--app-core-color--yellow-2__light--brand); }
        .card[data-sync-theme="light"] .status.LOCKED      { color: var(--app-core-color--green-5__dark--brand); }
        .card[data-sync-theme="light"] .status.COMPLETED   { color: var(--app-core-color--red-2__light--brand); }

        .card[data-sync-theme="dark"] .status             { background: rgba(128, 128, 128, 0.2); }
        .card[data-sync-theme="dark"] .status.UPCOMING    { color: var(--app-core-color--yellow-2__light--brand); }
        .card[data-sync-theme="dark"] .status.LOCKED      { color: var(--app-core-color--green-4__dark--brand); }
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
          background: ${n?"var(--app-core-color--yellow-3__dark--brand)":"var(--app-core-color--yellow-4__dark--brand)"};
        }

        :host([data-bma-tourn-status="LOCKED"]) .progress-fill {
          background: ${n?"var(--app-core-color--green-3__dark--brand)":"var(--app-core-color--green-4__dark--brand)"};
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
    `}}customElements.define("bma-tournament-card",sp);class rp extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.setupEventListeners(),setTimeout(()=>{const t=this.shadowRoot.querySelector(".content_stake_text input");t&&t.focus()},100)}static get observedAttributes(){return["data-content-team-points","data-content-odds","data-content-stake-text","data-content-type","data-abbreviated-title","data-scheduled-at","data-stake","data-payout"]}attributeChangedCallback(t,n,a){if(n!==a){if(t==="data-stake")return;if(t==="data-payout"){this.updatePayoutDisplay();return}this.render()}}get teamPoints(){return this.getAttribute("data-content-team-points")||""}get odds(){return this.getAttribute("data-content-odds")||"0"}get stake(){return this.getAttribute("data-content-stake-text")||"0"}get type(){return this.getAttribute("data-content-type")||""}get abbreviatedTitle(){return this.getAttribute("data-abbreviated-title")||""}get scheduledAt(){const t=this.getAttribute("data-scheduled-at")||"";return t?Zt.formatDateLocal(t):""}get payout(){const t=this.getAttribute("data-payout")||"0",n=parseFloat(t);return isNaN(n)?"0.00":n.toFixed(2)}updatePayoutDisplay(){const t=this.shadowRoot?.querySelector(".payout-value");t&&(t.textContent=this.payout)}setupEventListeners(){const t=this.shadowRoot.querySelector(".grid_close button");t&&t.addEventListener("click",()=>{J.publish("COREBETSLIP.CLOSE",JSON.stringify({teamPoints:this.teamPoints,odds:this.odds,stake:this.stake,type:this.type,abbreviatedTitle:this.abbreviatedTitle,scheduledAt:this.getAttribute("data-scheduled-at"),timestamp:Date.now()})),this.dispatchEvent(new CustomEvent("bma-bet-entry-remove",{bubbles:!0,composed:!0,detail:{teamPoints:this.teamPoints,odds:this.odds,stake:this.stake,type:this.type,abbreviatedTitle:this.abbreviatedTitle,scheduledAt:this.getAttribute("data-scheduled-at")}}))});const n=this.shadowRoot.querySelector(".content_stake_text input");n&&n.addEventListener("input",a=>{const s=a.target.value;this.setAttribute("data-stake",s)})}render(){this.shadowRoot.innerHTML=`
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
    `,this.setupEventListeners()}}customElements.define("bma-bet-entry",rp);class op extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}static get observedAttributes(){return["data-match-guid","data-match-title","data-match-scheduled-at","data-match-home-team","data-match-away-team","data-match-home-score","data-match-away-score","data-match-scoreboard","data-match-sport-id","data-sync-theme"]}attributeChangedCallback(t,n,a){n!==a&&this.render()}get matchGuid(){return this.getAttribute("data-match-guid")||""}get matchTitle(){return this.getAttribute("data-match-title")||"Match"}get scheduledAt(){return this.getAttribute("data-match-scheduled-at")||""}get homeTeam(){return this.getAttribute("data-match-home-team")||"Home"}get awayTeam(){return this.getAttribute("data-match-away-team")||"Away"}get homeScore(){const t=this.getAttribute("data-match-home-score");return t!=null&&t!==""?t:null}get awayScore(){const t=this.getAttribute("data-match-away-score");return t!=null&&t!==""?t:null}get scoreboardData(){const t=this.getAttribute("data-match-scoreboard");if(!t)return null;try{return typeof t=="string"?JSON.parse(t):t}catch(n){return console.warn("[bma-match-status] Failed to parse scoreboard data:",n),null}}get sportId(){return this.getAttribute("data-match-sport-id")||""}get theme(){return this.getAttribute("data-sync-theme")||"dark"}getMatchStatus(){const t=this.scoreboardData,n=this.homeScore!==null&&this.awayScore!==null;let a=!1;if(this.scheduledAt){let o=this.scheduledAt;!o.includes("Z")&&!o.match(/[+-]\d{2}:\d{2}$/)&&(o=o+"Z");const i=new Date(o),l=new Date(Date.now()-300*1e3);a=i<l}let s="UPCOMING",r=null;if(t?.time_remaining){const o=t.time_remaining;o==="Final"?(s="FINAL",r="Final"):o==="In Progress"?a?(s="IN_PROGRESS",r="In Progress"):(s="UPCOMING",r="Upcoming"):(s="IN_PROGRESS",r=o)}else n?(s="FINAL",r="Final"):(s="UPCOMING",r="Upcoming");return{status:s,timeRemaining:r}}render(){const{status:t,timeRemaining:n}=this.getMatchStatus(),a=this.homeScore!==null&&this.awayScore!==null,s=this.scheduledAt?Zt.formatDateLocal(this.scheduledAt,{timeZoneName:"short"}):"",r=t==="FINAL"?"match-status-card--past":"";this.shadowRoot.innerHTML=`
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
          display: flex;
          justify-content: center;
          gap: 24px;
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
          min-width: 120px;
        }

        .score-item:first-child {
          align-items: flex-end;
          text-align: right;
        }

        .score-item:last-child {
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
    `}}customElements.define("bma-match-status",op);class ip extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.expanded=!1}static get observedAttributes(){return["data-rank","data-username","data-user-guid","data-tournament-dollars","data-total-betslips","data-total-payout","data-combined-betslips","data-badge-class","data-is-current-user","data-sync-theme"]}get rank(){return this.getAttribute("data-rank")||""}get username(){return this.getAttribute("data-username")||"Unknown"}get userGuid(){return this.getAttribute("data-user-guid")||""}get tournamentDollars(){return this.getAttribute("data-tournament-dollars")||"0"}get totalBetslips(){return this.getAttribute("data-total-betslips")||"0"}get totalPayout(){return this.getAttribute("data-total-payout")||"0"}get combinedBetslips(){const t=this.getAttribute("data-combined-betslips");if(!t)return[];try{return JSON.parse(t)}catch(n){return console.error("[bma-leaderboard-card] Error parsing combined_betslips:",n),[]}}get badgeClass(){return this.getAttribute("data-badge-class")||""}get isCurrentUser(){return this.getAttribute("data-is-current-user")==="true"}get theme(){return this.getAttribute("data-sync-theme")||"dark"}connectedCallback(){this.render(),this.attachEventListeners()}attributeChangedCallback(t,n,a){n!==a&&(this.render(),this.attachEventListeners())}toggleExpanded(){this.expanded=!this.expanded;const t=this.shadowRoot.querySelector(".leaderboard-card__details"),n=this.shadowRoot.querySelector(".expand-icon");this.expanded?(t.style.display="block",n.textContent="▼"):(t.style.display="none",n.textContent="▶")}attachEventListeners(){const t=this.shadowRoot.querySelector(".leaderboard-card");t&&t.addEventListener("click",()=>this.toggleExpanded())}renderBetsTable(){const t=this.combinedBetslips;if(!t||t.length===0)return'<p class="no-bets">No bets available</p>';const n=t.filter(s=>{const r=s.bet||[];if(r.length===0)return!1;const o=r[0],i=Object.keys(o)[0];return o[i]?.reconciled===!0});if(n.length===0)return'<p class="no-bets">No reconciled bets</p>';let a=`
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
        `;return n.forEach(s=>{const r=s.bet||[];if(r.length===0)return;const o=r[0],i=Object.keys(o)[0],l=o[i],f=parseFloat(l.payout||0)>0;a+=`
                <tr class="${f?"bet-win":"bet-loss"}">
                    <td class="bet-selection">${i}</td>
                    <td class="bet-type">${l.type||"-"}</td>
                    <td class="bet-odds">${l.odds>0?"+":""}${l.odds||"-"}</td>
                    <td class="bet-stake">$${parseFloat(l.stake||0).toFixed(2)}</td>
                    <td class="bet-payout ${f?"payout-win":"payout-loss"}">$${parseFloat(l.payout||0).toFixed(2)}</td>
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
                    grid-template-columns: 60px 1fr 140px;
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
                        grid-template-columns: 50px 1fr 120px;
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
                        <div class="dollars-amount">TD$ ${this.tournamentDollars}</div>
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
        `}}customElements.define("bma-leaderboard-card",ip);class Ci{static isPayout(t){if(!t?.Bet||!t?.Match)return console.error("[CoreBetSlip.isPayout] Invalid bet object - missing Bet or Match data"),!1;const{type:n,scope:a}=t.Bet,{home_team_id:s,home_team_score:r,away_team_id:o,away_team_score:i}=t.Match,l=n?.toUpperCase()||"",f=parseFloat(r)||0,u=parseFloat(i)||0;if(f===0&&u===0)return console.warn("[CoreBetSlip.isPayout] Invalid scores - both teams have 0 points"),!1;switch(console.log(`[CoreBetSlip.isPayout] Evaluating ${l} bet:`,{home:`${s} (${f})`,away:`${o} (${u})`,scope:a}),l){case"MONEY":return this._evaluateMoneyline(a.team_id,s,o,f,u);case"SPREAD":return this._evaluateSpread(a.team_id,a.point,s,o,f,u);case"TOTAL":return this._evaluateTotal(a.over,a.under,f,u);case"PROP":return console.warn("[CoreBetSlip.isPayout] PROP bet evaluation not implemented"),!1;case"PARLAY":return console.warn("[CoreBetSlip.isPayout] PARLAY bet evaluation not implemented"),!1;default:return console.warn("[CoreBetSlip.isPayout] Unknown bet type:",l),!1}}static _evaluateMoneyline(t,n,a,s,r){const o=t===n,i=t===a;if(!o&&!i)return console.warn("[CoreBetSlip.isPayout] Betted team does not match home or away team"),!1;const l=s>r,f=r>s;if(s===r)return console.log("[CoreBetSlip.isPayout] MONEY - PUSH (tie game)"),!1;const d=o&&l||i&&f;return console.log(`[CoreBetSlip.isPayout] MONEY - ${d?"WON":"LOST"}`),d}static _evaluateSpread(t,n,a,s,r,o){const i=t===a,l=t===s;if(!i&&!l)return console.warn("[CoreBetSlip.isPayout] Betted team does not match home or away team"),!1;const f=parseFloat(n)||0;let u=r,d=o;i?u=r+f:d=o+f;const h=u>d,p=d>u;if(u===d)return console.log("[CoreBetSlip.isPayout] SPREAD - PUSH (exact spread)"),!1;const c=i&&h||l&&p;return console.log(`[CoreBetSlip.isPayout] SPREAD (${f>0?"+":""}${f}) - ${c?"WON":"LOST"}`),c}static _evaluateTotal(t,n,a,s){const r=a+s,o=t&&t!=="";if(!o&&!(n&&n!==""))return console.warn("[CoreBetSlip.isPayout] No over/under value specified"),!1;const l=parseFloat(o?t:n);if(r===l)return console.log("[CoreBetSlip.isPayout] TOTAL - PUSH (exact line)"),!1;let f=!1;return o?(f=r>l,console.log(`[CoreBetSlip.isPayout] TOTAL OVER ${l} (actual: ${r}) - ${f?"WON":"LOST"}`)):(f=r<l,console.log(`[CoreBetSlip.isPayout] TOTAL UNDER ${l} (actual: ${r}) - ${f?"WON":"LOST"}`)),f}static calcPayout(t){if(!t?.Bet)return console.error("[CoreBetSlip] Invalid bet object - missing Bet data"),0;const{type:n,odds:a,stake:s}=t.Bet,r=n?.toUpperCase()||"",o=parseFloat(a)||0,i=parseFloat(s)||0;if(i<=0)return console.warn("[CoreBetSlip] Invalid stake amount:",i),0;if(o===0)return console.warn("[CoreBetSlip] Invalid odds value:",o),0;let l=0;switch(r){case"SPREAD":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] SPREAD payout calculated:",{odds:o,stake:i,payout:l});break;case"MONEY":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] MONEY payout calculated:",{odds:o,stake:i,payout:l});break;case"TOTAL":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] TOTAL payout calculated:",{odds:o,stake:i,payout:l});break;case"PROP":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] PROP payout calculated:",{odds:o,stake:i,payout:l});break;case"PARLAY":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] PARLAY payout calculated (single odds):",{odds:o,stake:i,payout:l});break;default:console.warn("[CoreBetSlip] Unknown bet type:",r),l=0;break}return parseFloat(l.toFixed(2))}static calcAmericanOddsPayout(t,n){let a=0;return t>0?a=n*(t/100):t<0?a=n/(Math.abs(t)/100):a=0,n+a}static americanToDecimal(t){return t>0?t/100+1:t<0?100/Math.abs(t)+1:1}static calcImpliedProbability(t){return t>0?100/(t+100)*100:t<0?Math.abs(t)/(Math.abs(t)+100)*100:0}}const lp={class:"home-layout"},cp=["data-user-name"],up={__name:"home_route",setup(e){const t=ft(),n=ye();window.CoreBetSlip=Ci,document.addEventListener("click",i=>{const l=i.target;l&&l.dataset?.publishRouteHome&&(l.dataset.publishRouteHome.startsWith("ROUTE.HOME.SODAPOP_PLAY.")&&document.querySelectorAll("#sodapop_play .btn-info-sm").forEach(u=>{u===l?(u.style.background="var(--app-core-color--yellow-1__dark--brand, #ffcc33)",u.style.color="var(--app-core-color--green-1__dark--brand, #27794d)"):(u.style.background="#27794d1A",u.style.color="#fff")}),J.publish(l.dataset.publishRouteHome,`{"ts": ${Date.now()} }`)),l&&l.dataset?.sodapopClose&&neodigmSodaPop&&neodigmSodaPop.close()});const a=(i,l=!1)=>{const f=document.querySelector(".tournaments-grid");if(!f)return;f.innerHTML="";const u=document.getElementById("app"),d=u?.getAttribute("data-sync-theme")||"dark",h=u?.getAttribute("data-sync-lang")||"en",p=u?.getAttribute("data-sync-motif")||"brand",g=c=>{const m=document.createElement("article"),_=c.status||"DRAFT";m.className=`tournament-item tournament-status-${_.toLowerCase()}`;const y=document.createElement("bma-tournament-card");return y.setAttribute("data-bma-tourn-id",c.id||""),y.setAttribute("data-bma-tourn-guid",c.guid||""),y.setAttribute("data-bma-tourn-caption",c.caption||""),y.setAttribute("data-bma-tourn-tagline",c.tagline||""),y.setAttribute("data-bma-tourn-window_start_time",c.window_start_time||""),y.setAttribute("data-bma-tourn-window_end_time",c.window_end_time||""),y.setAttribute("data-bma-tourn-sports_allowed",Array.isArray(c.sports_allowed)?JSON.stringify(c.sports_allowed):c.sports_allowed||""),y.setAttribute("data-bma-tourn-entities",c.entities?JSON.stringify(c.entities):""),y.setAttribute("data-bma-tourn-tournament_dollars",c.tournament_dollars||""),y.setAttribute("data-bma-tourn-prize_distro",Array.isArray(c.prize_distro)?JSON.stringify(c.prize_distro):c.prize_distro||""),y.setAttribute("data-bma-tourn-matches",Array.isArray(c.matches_guids)?JSON.stringify(c.matches_guids):c.matches_guids||""),y.setAttribute("data-bma-tourn-matches_expanded",Array.isArray(c.matches_expanded)?JSON.stringify(c.matches_expanded):c.matches_expanded||""),y.setAttribute("data-bma-tourn-entry_fee",c.entry_fee||""),y.setAttribute("data-bma-tourn-rake",c.rake||""),y.setAttribute("data-bma-tourn-tags",Array.isArray(c.tags)?JSON.stringify(c.tags):c.tags||""),y.setAttribute("data-bma-tourn-comments",c.comments||""),y.setAttribute("data-bma-tourn-class",c.status||""),y.setAttribute("data-bma-tourn-status",c.status||""),y.setAttribute("data-sync-theme",d),y.setAttribute("data-sync-lang",h),y.setAttribute("data-sync-motif",p),y.setAttribute("data-n55-size","medium"),y.setAttribute("data-n55-enchanted-cta-ambient","none"),y.setAttribute("data-tourn-custom-css",""),y.setAttribute("data-tourn-trophy","0"),y.setAttribute("data-bma-tourn-focus",""),y.setAttribute("data-bma-tourn-wait","false"),m.appendChild(y),m};l?i.forEach(c=>{const m=document.createElement("div");m.className="tournament-category";const _=document.createElement("header");_.className="tournament-category-header";const y=document.createElement("h2");if(y.className="category-title",y.textContent=c.title,_.appendChild(y),c.subtext){const T=document.createElement("p");T.className="category-subtext",T.textContent=c.subtext,_.appendChild(T)}m.appendChild(_),f.appendChild(m),c.tournaments.forEach(T=>{const S=g(T);f.appendChild(S)})}):i.forEach(c=>{const m=g(c);f.appendChild(m)})},s=i=>{document.querySelectorAll("bma-tournament-card").forEach(f=>{f.setAttribute("data-sync-theme",i)})},r=i=>{const l=document.querySelectorAll("bma-tournament-card"),f=Date.now().toString();l.forEach(u=>{if(u===i){if(u.setAttribute("data-bma-tourn-focus",f),u.shadowRoot){const d=u.shadowRoot.querySelector(".card-focus__feedback");d&&(d.style.visibility="visible")}typeof neodigmMarquee<"u"&&neodigmMarquee.init()}else if(u.setAttribute("data-bma-tourn-focus",""),u.shadowRoot){const d=u.shadowRoot.querySelector(".card-focus__feedback");d&&(d.style.visibility="hidden")}})},o=i=>{const{action:l,tournamentId:f,tournamentGuid:u,tournamentStatus:d,...h}=i.detail;console.log("[home_route] Tournament action:",{action:l,tournamentId:f,tournamentGuid:u,tournamentStatus:d,...h}),r(i.target),J.publish("WC.TOURN_ACTION",JSON.stringify({action:l,tournamentId:f,tournamentGuid:u,tournamentStatus:d,...h,timestamp:Date.now()}))};return Kt(async()=>{if(!n.appSession.session_user.authenticated){console.log("User not authenticated, redirecting to signin"),t.push({name:"signin_route"});return}const i=document.getElementById("app");if(i){const f=n.appCLIFeatures.features.theme?.state,u=n.appCLIFeatures.features.lang?.state,d=n.appCLIFeatures.features.motif?.state,h=n.appSession.session_user.guid;f&&(i.setAttribute("data-sync-theme",f),document.body.setAttribute("data-sync-theme",f)),u&&i.setAttribute("data-sync-lang",u),d&&i.setAttribute("data-sync-motif",d),h&&i.setAttribute("data-user-guid",h)}window._homeRouteRenderCards=a;const l=J.subscribe("APP.ROUTE_SYNC",(f,u)=>{try{const d=JSON.parse(u);d.theme&&s(d.theme.state)}catch(d){console.error("[home_route] Failed to parse APP.ROUTE_SYNC data:",d)}});window._homeRoutePubSubToken=l,console.log("[home_route] Publishing ROUTE.HOME_ONMOUNT"),J.publish("ROUTE.HOME_ONMOUNT",JSON.stringify({timestamp:Date.now()})),document.addEventListener("bma-tournament-action",o)}),va(()=>{document.removeEventListener("bma-tournament-action",o),delete window._homeRouteRenderCards,window._homeRoutePubSubToken&&J.unsubscribe(window._homeRoutePubSubToken)}),(i,l)=>(Qe(),pt("main",lp,[k("bma-app-head-top",{"data-user-name":Mt(n).appSession.session_user.name||"Guest"},null,8,cp),l[0]||(l[0]=Yt('<bma-app-head-mid data-selected-tab="head_mid_lobby"></bma-app-head-mid><bma-app-head-sports data-selected-chip="all"></bma-app-head-sports><section class="tournaments-section"><div class="tournaments-grid"></div></section><bma-app-foot data-selected-item="foot_all_sports"></bma-app-foot>',4))]))}},dp={};function pp(e,t){return Qe(),pt("main",null,[...t[0]||(t[0]=[k("h1",null,"App FAQ",-1)])])}const zn=jt(dp,[["render",pp]]),fp={};function hp(e,t){return Qe(),pt("main",null,[...t[0]||(t[0]=[k("h1",null,"App Help",-1)])])}const gp=jt(fp,[["render",hp]]),Lt=class Lt{static async establishSSE(t,n,a,s=!0){this.strChat=a,this.isDebug=s,console.log(" ~... sse client 'Q' | ","Q"),t=t.replaceAll("##SSEID##",n).replaceAll("##LASTKEY##",localStorage.getItem("sse_lastkey")||-1),this.isDebug&&console.warn(" ~... sse push uri | ",t),this.sseEvent&&(this.sseEvent.close(),this.sseEvent=null),this.sseEvent=new EventSource(t),this.sseEvent.onopen=function(r){Lt.onSSEOpen(r)},this.sseEvent.onmessage=function(r){Lt.onSSEMessage(r)},this.sseEvent.onerror=function(r){Lt.onSSEError(r)}}static async onSSEOpen(t){this.isDebug&&console.warn(" ~... sse push onSSEOpen ev | ",t)}static async onSSEMessage(t){let n=null;if(this.isDebug&&console.warn(" ~... sse push onSSEMessage ev | ",t),t?.data){localStorage.setItem("sse_lastkey",t?.data?.id||-1);try{if(n=JSON.parse(t.data),n?.class!="NO_MESSAGE")if(n?.class&&n?.msg)switch(n.class){case"BANNER_DISMISS":break;case"BANNER_MODAL":break;case"BANNER_MODAL_CLOSE":break;case"BUBBLE_CONFETTI":break;case"BUBBLE_MARQUEE":break;case"BUBBLE":break;case"CLI":break;case"CONSOLE":break;case"FEATURE_FLAG":break;case"MVV_POPUP":break;case"MVV_TOAST":n?.msg&&neodigmWired4Sound&&(neodigmWired4Sound.sound(5).vibrate(),neodigmToast.q(n.msg,"brand",4500),this.isDebug&&console.warn(" ~... sse push pushPackage.id class msg criterion  | ",n.id+" | "+n.class+" | "+n.msg+" | "+n.criterion));break;case"WEBNOTE":break;case"GUIDED_TOUR":break;case"META_MACRO":break;case"META_TEMPLATE":break;case"MVV_CAROUSEL":break;case"MVV_POPOVER":break;case"MVV_WIDGET":break;case"RECONNECT":break;case"TOURNAMENT_SYNC":this.isDebug&&console.warn(" ~... sse TOURNAMENT_SYNC | ",n),J.publish("SSE.CORE.TOURN_SYNC",JSON.stringify(n));break}else this.isDebug&&console.warn(" ~... sse push - invalid package - no class/msg");else this.isDebug&&console.warn(" ~... sse push - no message")}catch{this.isDebug&&console.warn(" ~... sse push - invalid package")}}}static async onSSEError(t){this.isDebug&&console.warn(" ~... sse push onSSEError ev | ",t)}static async disconnectSSE(t){this.isDebug&&console.warn(" ~... sse push disconnectSSE ev | ",t),this.sseEvent.close(),this.sseEvent=null}};Lt.sseEvent=null,Lt.strChat=null,Lt.isDebug=!0;let da=Lt;class Ot{static neodigmOpt={neodigmToast:!0,N55_GTM_DL_TOAST:"n55_gtm_dl_toast",neodigmSodaPop:!0,N55_SP_DISABLE_SCROLL:!0,N55_GTM_DL_POP_OPEN:"n55_gtm_dl_pop_open",N55_GTM_DL_POP_CLOSE:"n55_gtm_dl_pop_close",neodigmWired4Sound:!0,W4S_VOLUME:.022,EVENT_SOUNDS:!0,neodigmParallax:!0,PRLX_MOBILE:!1,neodigmMarquee:!0,neodigmEnchantedCTA:!0,N55_CTA_RND_TOUCH:14001,N55_GTM_DL_CTA:"n55_gtm_dl_cta",N55_CTA_LONG_TAP:3400,N55_CTA_FX:["alternate","emit","flash_danger","flash_warning","radius","scroll","shake"],neodigmKPI:!0,N55_GTM_DL_KPI:"n55_gtm_dl_kpi",neodigmPWA:!0,N55_PWA_TEMPLATE_ID:"js-pup-n55-pwa",neodigmCarousel:!0,N55_GTM_DL_CARSL:"n55_gtm_dl_carsl",N55_CARO_BLUR:!0,neodigmTulip:!0,neodigmPopTart:!0,N55_GTM_DL_POPTRT:"n55_gtm_dl_poptrt",neodigmAgent:!0,API_baseURI:"https://a55-wtt-api-v1.onrender.com/",API_ver:"v1",neodigmPicnic:!0,N55_GTM_DL_PICNIC:"n55_gtm_dl_picnic",neodigmWWInterval:!0,neodigmMetronome:{countTo:116,neodigmMarquee:132},N55_ZIND:{PopTart:264},CONSOLE_LOG_VER:!0,N55_DEBUG_lOG:!1,N55_AMPM_THEME:"light",N55_EVENT_HAPTIC:!0,N55_FLASH_TITLE:!0,N55_GENRE_MOTIF:"neodigm",N55_THEME_DEFAULT:"brand",N55_THEME_COLORS:{brand:["EDBA08","915E00","🟧"],primary:["92a8d1","364C75","🟦"],secondary:["EDCED0","978284","🟫"],success:["009473","003817","🟩"],white:["FFFFFF","FDFDFD","⬜"],ghost:["ffffff","000000","⬜"],danger:["DD4124","810000","🟥"],warning:["F5DF4D","988200","🟨"],info:["7BC4C4","1F6868","🟦"],disabled:["868686","767676","⬜"],night:["6a6a6a","242424","⬛"],marcom:["B163A3","5F4B8B","🟪"],party:["FF6F61","C93F60","🟪"]},N55_APP_STATE:{CONTEXT:"body",FIRST_TAP:!1,ONLINE:!0,PWA_READY:!1,PWA_CONTAIN:!1,SHAKE:!1,CONTEXTMNU:!1,FOCUS:!0,AMPM:"light",REDUCE_MOTION:!1},ROOT:document.querySelector(":root"),N55_TYPE:"https://fonts.googleapis.com/css?family=Roboto+Condensed:wght@100;300;400|Roboto+Slab:wght@300|Roboto+Mono:wght@300|Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,300,0,0"};static neodigmUtils=((t=document)=>({ver:"4.0.0",isMobile:function(){return t.body.clientWidth<=768},isTouch:function(){return typeof document.body.ontouchstart<"u"},f1210:function(){return Math.floor(Math.random()*10+1)},f02x:function(n){return Math.floor(Math.random()*n)},fPromiseJS:async function(n,a){return new Promise((s,r)=>{const o=Object.assign(n.createElement(LZString.decompress("㎆ぎॠข")),{type:LZString.decompress("அ〞샴ՠ蘆㠘쁎Ұΰ耀"),src:a});o.onload=s,o.onerror=r,n.getElementsByTagName("head")[0].appendChild(o)})},fAsyncJS:function(n,a,s){const r=Object.assign(n.createElement(LZString.decompress("㎆ぎॠข")),{type:LZString.decompress("அ〞샴ՠ蘆㠘쁎Ұΰ耀"),src:a});s&&(r.onload=function(){s()}),n.getElementsByTagName("head")[0].appendChild(r)},fAsyncCSS:function(n,a){let s=n.createElement("link");s.rel="stylesheet",s.href=a,n.getElementsByTagName("head")[0].appendChild(s)},data2prop:function(n){n=n.replace("data-","").toLowerCase();let a=n.split(""),s=[],r=!1;return a.forEach(o=>{o=="-"?r=!0:(s.push(r?o.toUpperCase():o),r=!1)}),s.join("")},doDataLayer:function(n,a){neodigmOpt.N55_DEBUG_lOG&&console.log("~ga | "+n+" | "+a),window.dataLayer&&window.dataLayer.push({event:n,msg:a})},isJSON:function(n){let a=!1;try{a=typeof JSON.parse(n)}catch{}return a=="object"},appStateListen:function(n){NeodigmKeylime.subscribe("mouseover",s=>{s?.target?.dataset?.n55TypeonHover&&neodigmUtils.typeOn(JSON.parse(s.target.dataset.n55TypeonHover))},!0),NeodigmKeylime.subscribe("click",s=>{neodigmOpt.N55_APP_STATE.FIRST_TAP||(neodigmOpt.N55_APP_STATE.FIRST_TAP=!0),neodigmOpt.neodigmTulip&&neodigmTulip.close();let r=neodigmUtils.walkDOM3(s?.target,"n55TypeonClick");r&&neodigmUtils.typeOn(JSON.parse(r))},!0),NeodigmKeylime.subscribe("touchstart",s=>{neodigmOpt.N55_APP_STATE.FIRST_TAP||(neodigmOpt.N55_APP_STATE.FIRST_TAP=!0),neodigmOpt.neodigmTulip&&neodigmTulip.close()},!0),NeodigmKeylime.subscribe("resize",s=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmCarousel&&neodigmCarousel.init(),neodigmOpt.neodigmTulip&&neodigmTulip.close(),neodigmOpt.neodigmPopTart&&neodigmPopTart.close()})},!0,window),NeodigmKeylime.subscribe("orientationchange",s=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmCarousel&&neodigmCarousel.init(),neodigmOpt.neodigmTulip&&neodigmTulip.close(),neodigmOpt.neodigmPopTart&&neodigmPopTart.close()})},!0,window),NeodigmKeylime.subscribe("scroll",s=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmTulip&&neodigmTulip.close()})},!0,window),neodigmOpt.N55_APP_STATE.REDUCE_MOTION=!window.matchMedia("(prefers-reduced-motion: no-preference)").matches;let a=document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelector("[data-n55-Ampm-theme]")?.dataset.n55AmpmTheme;a&&(neodigmOpt.N55_AMPM_THEME=neodigmOpt.N55_APP_STATE.AMPM=a)},prettyTimeRETIRE:n=>{let a=new Date(n).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"});return n=="Dec 31, 1969"&&(a=""),a},prettyTime:n=>new Date(n).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"}),capFirst:n=>n&&n[0].toUpperCase()+n.slice(1)||"",genHash:n=>(n=String(n),Math.abs(n.split("").reduce((a,s)=>(a<<5)-a+s.charCodeAt(0)|0,0))),flashTitle:(n=neodigmOpt.N55_THEME_DEFAULT,a=4e3)=>{neodigmOpt.N55_FLASH_TITLE&&(document?.n55Title||(document.n55Title=document.title),neodigmOpt?.N55_THEME_COLORS[n]&&(document.title=neodigmOpt.N55_THEME_COLORS[n][2]+document.n55Title),neodigmUtils.doSetT(function(){document.title=document.n55Title},a))},robinTheme:function(n=Object.keys(neodigmOpt.N55_THEME_COLORS)[0]){if(!neodigmMetronome.isPaused()){let a=[...document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelectorAll("[data-n55-theme")];const s=56;a.forEach((o,i)=>{o.dataset.n55Theme!="disabled"&&(o.n55Theme||(o.n55Theme=o.dataset.n55Theme),setTimeout(function(){o.dataset.n55Theme=n},i*s),setTimeout(function(){o.dataset.n55Theme=o.n55Theme},i*(s+s)))}),a=[...document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelectorAll("[data-n55-theme-pulse")];const r=256;a.forEach((o,i)=>{o.n55ThemePulse||(o.n55ThemePulse=o.dataset.n55ThemePulse),setTimeout(function(){o.dataset.n55ThemePulse=n},i*r),setTimeout(function(){o.dataset.n55ThemePulse=o.n55ThemePulse},i*r+3e3)}),neodigmUtils.flashTitle(n,2e3)}},countTo:async function(n,a,s=neodigmOpt.neodigmMetronome.countTo){const r=[16,s];return[...document.querySelectorAll(n)].forEach(function(o,i){let l=Math.abs(Number(o.textContent)-a);neodigmMetronome.unsubscribe(r[1]+i).subscribe(function(f){let u=Number(o.textContent);if(!Number.isNaN(u)&&!isNaN(u)&&a!=u){let d=l/r[0];d=Math.round(d),f!=0?o.textContent=u<a?u+d:u-d:o.textContent=a}},r[1]+i,r[0])}),neodigmUtils},typeOff:async function(n){let a=document.querySelector(n?.q1st);if(a){let s=a.textContent.length,r=window.getComputedStyle(a),o=Number(r.paddingTop.replace("px",""))+Number(r.paddingBottom.replace("px",""));for(a.offsetHeight&&(a.style.height=a.offsetHeight-o+"px");s;)setTimeout(()=>{a.textContent=a.textContent.replace(/.$/,"")},n.uniqueDelay*s--)}},typeOn:async function(n){let a=document.querySelector(n?.q1st);if(a){a.dataset.n55Typeon=0;let s=n.msg.replaceAll("|","   |   ")+"   ",r=s.split("|");if(n?.mode=="OFF")return neodigmUtils.typeOff({q1st:n.q1st,uniqueDelay:n.uniqueDelay}),neodigmUtils;if(n?.mode=="RANDOM"&&r.length){let o=a.dataset.n55Typeon=neodigmUtils.f02x(r.length);s=r[o]}neodigmUtils.typeOff({q1st:n.q1st,uniqueDelay:n.uniqueDelay/a.textContent.length-4}),neodigmMetronome.unsubscribe(n.uniqueDelay).subscribe(o=>{let i=s[s.length-(o+1)];i=="|"&&(i="",neodigmUtils.typeOff({q1st:n.q1st,uniqueDelay:n.uniqueDelay/a.textContent.length-4}),a.dataset.n55Typeon++),a.textContent+=i,n?.mode=="LOOP"&&o==0&&neodigmUtils.typeOn(n)},n.uniqueDelay,s.length)}return neodigmUtils},getValJSON:function(n,a){try{return JSON.parse(n)}catch{return JSON.parse('{ "'+a+'": "'+n+'" }')}},walkDOM3:function(n,a,s=!1){let r=null;if(!r&&n?.dataset[a]&&(r=n),!r&&n?.parentNode?.dataset[a]&&(r=n.parentNode),!r&&n.tagName!="BODY"&&n?.parentNode?.parentNode?.dataset[a]&&(r=n.parentNode.parentNode),r)return s?r:r.dataset[a]},doSetT:function(n,a){return neodigmOpt.neodigmWWInterval?window.setTimeoutN55(n,a):setTimeout(n,a)},shake:function(n,a=!0){return[...document.querySelectorAll(n)].forEach(function(s,r){s.classList.add("shake__an"),setTimeout(function(){s.classList.remove("shake__an")},460)}),Ot.neodigmUtils},hardReload:function(n="n55reset"){const a=new URLSearchParams(window.location.search);a.set(n,new Date().getTime());const s=a.toString();window.location.search=s}}))}const mp={class:"auth-page"},_p={class:"auth-page-right"},bp={class:"auth-card"},yp={class:"form-group"},vp={class:"form-group"},Tp={class:"password-input-wrapper"},Ep=["type"],Sp={style:{"text-align":"right"}},Ap={class:"auth-link-center"},Op={__name:"signin_route",setup(e){const t=ft(),n=ye(),a=(h="signin")=>{t.push({name:h})};let s=null;const r=Je(!1),o=()=>{r.value=!r.value},i=(h=3,p=1)=>{switch(n.appCLIFeatures.features.motif.state){case"brand":h=3,p=1;break;case"white_label":h=3,p=4;break}const g=Math.floor(Math.random()*h)+p,c=document.querySelector(".img__bg")?.classList;c&&(c.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),c.add(`img__bg--${g}`)),s||(s=J.subscribe("APP__ROUTE_SYNC",(m,_)=>{const y=JSON.parse(_);switch(Object.keys(y)[0]){case"Motif":i();break;case"Lang":l();break}}))},l=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(h=>{const p=n.appCLIFeatures?.features?.lang?.state;let g=n.appMeta.microcopy.language.filter(c=>c.code==p)[0]?.copy;g=g.filter(c=>c[0]==h.dataset.syncMicrocopyText)[0],g&&(h.textContent=g[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(h=>{const p=n.appCLIFeatures?.features?.lang?.state;let g=n.appMeta.microcopy.language.filter(c=>c.code==p)[0]?.copy;g=g.filter(c=>c[0]==h.dataset.syncMicrocopyPlaceholder)[0],g&&(h.placeholder=g[1])})},f=h=>{Ot.neodigmUtils().shake(h||"#inp__text--email")},u=()=>{let h=document.querySelectorAll("#inp__text--email")[0].value;neodigmUtils.messageNotification("Cub vs. Cardianals","https://mach-five-group.github.io/bma-landing/Assets/Bet%20Max%20Action-Full%20Lockup-600.png"),n.doCLI(h)},d=()=>{const h=document.querySelector("#inp__text--email"),p=document.querySelector("#inp__text--password");let g=null,c=null;if(!h?.value)g="Please enter your email",c="#inp__text--email";else if(h.value.indexOf("@")===-1||h.value.indexOf(".")===-1)g="Please enter a valid email address",c="#inp__text--email";else if(!p?.value)g="Please enter your password",c="#inp__text--password";else if(p.value.length<10)g="Password must be at least 10 characters",c="#inp__text--password";else{const m={email:h.value,hash:Ot.neodigmUtils().genHash(p.value)};be.doSignin(m,_=>{const S=(_?.entity?.tags||[]).find(x=>x.userName)?.userName||"";if(n.appSession.session_user.authenticated=!0,n.appSession.session_user.email=m.email,n.appSession.session_user.fname=_?.entity?.first,n.appSession.session_user.lname=_?.entity?.last,n.appSession.session_user.userName=S,n.appSession.session_user.name=S,n.appSession.session_user.guid=_?.entity?.guid,n.saveSessionUser(),n.appCLIFeatures.features.sse.state){const x=_?.entity?.guid||n.appSession.session_user.guid;da.establishSSE("https://machfive-bmacdev-rest.onrender.com/v5/sse?appid=BMACORE&sseid=##SSEID##&lastkey=##LASTKEY##",x,n,!0)}})}g&&(f(c),neodigmToast.q(g,"danger"))};return Kt(()=>{i(),l()}),(h,p)=>(Qe(),pt("div",mp,[p[10]||(p[10]=Yt('<div class="auth-page-left" data-v-9f21eb27><div class="auth-bg" data-v-9f21eb27><div class="auth-bg-image" data-v-9f21eb27></div><div class="auth-bg-image" data-v-9f21eb27></div><div class="auth-bg-image" data-v-9f21eb27></div></div><div class="auth-overlay" data-v-9f21eb27></div><div class="auth-branding-content" data-v-9f21eb27><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-9f21eb27><p class="auth-branding-tagline" data-v-9f21eb27>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-9f21eb27>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-9f21eb27> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),k("div",_p,[k("div",bp,[p[9]||(p[9]=k("div",{class:"auth-header"},[k("h1",{class:"auth-title","data-sync-microcopy-text":"welcome_back"},"Welcome Back"),k("p",{class:"auth-subtitle","data-sync-microcopy-text":"please_enter_your_details"},"Please enter your details to sign in")],-1)),k("form",{class:"auth-form",onSubmit:Aa(d,["prevent"])},[k("div",yp,[p[4]||(p[4]=k("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),k("input",{id:"inp__text--email",type:"text","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onDblclick:p[0]||(p[0]=g=>u())},null,32)]),k("div",vp,[p[5]||(p[5]=k("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),k("div",Tp,[k("input",{id:"inp__text--password",type:r.value?"text":"password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password"},null,8,Ep),k("button",{type:"button",class:"password-toggle-btn",onClick:p[1]||(p[1]=g=>o()),tabindex:"-1"},[k("span",{class:Bt(r.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),k("div",Sp,[k("a",{class:"auth-link",onClick:p[2]||(p[2]=g=>a("forgot_route")),"data-sync-microcopy-text":"forgot_password"},"Forgot Password?")]),p[8]||(p[8]=k("div",{class:"auth-actions"},[k("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"sign_in"},"Sign In")],-1)),k("p",Ap,[p[6]||(p[6]=k("span",{"data-sync-microcopy-text":"dont_have_an_account"},"Don't have an account?",-1)),p[7]||(p[7]=Sa()),k("a",{class:"auth-link",onClick:p[3]||(p[3]=g=>a("signup_route")),"data-sync-microcopy-text":"sign_up"},"Sign Up")])],32)])])]))}},Pp=jt(Op,[["__scopeId","data-v-9f21eb27"]]),kp={class:"auth-page"},wp={__name:"signout_route",setup(e){const t=ft();ye();const n=()=>{mvvLegit.doSignout()},a=()=>{t.push({name:"home_route"})};return(s,r)=>(Qe(),pt("div",kp,[r[1]||(r[1]=Yt('<div class="auth-page-left" data-v-900c11b9><div class="auth-bg" data-v-900c11b9><div class="auth-bg-image" data-v-900c11b9></div><div class="auth-bg-image" data-v-900c11b9></div><div class="auth-bg-image" data-v-900c11b9></div></div><div class="auth-overlay" data-v-900c11b9></div><div class="auth-branding-content" data-v-900c11b9><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-900c11b9><p class="auth-branding-tagline" data-v-900c11b9>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-900c11b9>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-900c11b9> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),k("div",{class:"auth-page-right"},[k("div",{class:"auth-card"},[r[0]||(r[0]=k("div",{class:"auth-header"},[k("h1",{class:"auth-title"},"Sign Out"),k("p",{class:"auth-subtitle"},"Confirm you want to sign out")],-1)),k("div",{class:"auth-actions"},[k("button",{onClick:n,class:"btn btn-red"}," Sign Out "),k("button",{onClick:a,class:"btn btn-outline"}," Cancel ")])])])]))}},xp=jt(wp,[["__scopeId","data-v-900c11b9"]]),Rp={class:"auth-page"},Cp={class:"auth-page-right",style:{display:"block"}},Np={class:"auth-card auth-card-wide"},Lp={class:"form-group"},Ip={class:"form-group"},Dp={class:"form-group"},Mp={class:"form-group"},Bp={class:"form-group"},Fp={class:"password-input-wrapper"},Up=["type"],$p={class:"form-group"},Hp={class:"password-input-wrapper"},Kp=["type"],Yp={class:"auth-link-center"},jp={__name:"signup_route",setup(e){const t=ft(),n=ye(),a=(m="signin")=>{t.push({name:m})};be.getTJO()&&a("contests");let s=null;const r=Je(!1),o=Je(!1),i=()=>{r.value=!r.value},l=()=>{o.value=!o.value},f=(m=3,_=1)=>{switch(n.appCLIFeatures.features.motif.state){case"brand":m=3,_=1;break;case"white_label":m=3,_=4;break}const y=Math.floor(Math.random()*m)+_,T=document.querySelector(".img__bg")?.classList;T&&(T.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),T.add(`img__bg--${y}`)),s||(s=J.subscribe("APP__ROUTE_SYNC",(S,x)=>{const R=JSON.parse(x);switch(Object.keys(R)[0]){case"Motif":f();break;case"Lang":u();break}}))},u=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(m=>{const _=n.appCLIFeatures?.features?.lang?.state;let y=n.appMeta.microcopy.language.filter(T=>T.code==_)[0]?.copy;y=y.filter(T=>T[0]==m.dataset.syncMicrocopyText)[0],y&&(m.textContent=y[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(m=>{const _=n.appCLIFeatures?.features?.lang?.state;let y=n.appMeta.microcopy.language.filter(T=>T.code==_)[0]?.copy;y=y.filter(T=>T[0]==m.dataset.syncMicrocopyPlaceholder)[0],y&&(m.placeholder=y[1])})},d=m=>{Ot.neodigmUtils().shake(m||"#inp__text--email")},h=()=>{let m=document.querySelectorAll("#inp__text--email")[0].value;n.doCLI(m)},p=m=>{const _=[];return m.length<10&&_.push("at least 10 characters"),/[a-z]/.test(m)||_.push("1 lowercase"),/[A-Z]/.test(m)||_.push("1 uppercase"),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(m)||_.push("1 special character"),/[^\x00-\x7F]/.test(m)&&_.push("ASCII characters only"),_},g=async()=>{const m=document.querySelector("#inp__text--username"),_=m?.value?.trim();if(_)try{(await be.checkUserName(_)).userNameExists&&(neodigmToast.q("User name already taken|Please choose a different one","danger"),m.value="",m.focus())}catch(y){console.error("Error checking username:",y)}},c=()=>{const m=document.querySelector("#inp__text--first-name"),_=document.querySelector("#inp__text--last-name"),y=document.querySelector("#inp__text--email"),T=document.querySelector("#inp__text--username"),S=document.querySelector("#inp__text--password"),x=document.querySelector("#inp__text--verify-password");let R=null,w=null;if(!m?.value)R="Please enter your first name",w="#inp__text--first-name";else if(!_?.value)R="Please enter your last name",w="#inp__text--last-name";else if(!y?.value)R="Please enter your email",w="#inp__text--email";else if(y.value.indexOf("@")===-1||y.value.indexOf(".")===-1)R="Please enter a valid email address",w="#inp__text--email";else if(!T?.value)R="Please enter a user name",w="#inp__text--username";else if(!S?.value)R="Please enter a password",w="#inp__text--password";else{const D=p(S.value);if(D.length>0)R="Password must have:|"+D.join(", "),w="#inp__text--password";else if(!x?.value)R="Please verify your password",w="#inp__text--verify-password";else if(S.value!==x.value)R="Passwords do not match",w="#inp__text--verify-password";else{const O=m.value.trim(),F=_.value.trim(),Y=[{userName:T.value.trim(),ts:Date.now()}],P={email:y.value,hash:Ot.neodigmUtils().genHash(S.value),first:O,last:F,company:"",phone:"",tags:Y};be.doSignup(P,V=>{V.ok&&setTimeout(()=>{mvvLegit.doUNVERF()},1e3)})}}R&&(d(w),neodigmToast.q(R,"danger"))};return Kt(()=>{f(),u()}),(m,_)=>(Qe(),pt("div",Rp,[_[22]||(_[22]=Yt('<div class="auth-page-left" data-v-0b6f1055><div class="auth-bg" data-v-0b6f1055><div class="auth-bg-image" data-v-0b6f1055></div><div class="auth-bg-image" data-v-0b6f1055></div><div class="auth-bg-image" data-v-0b6f1055></div></div><div class="auth-overlay" data-v-0b6f1055></div><div class="auth-branding-content" data-v-0b6f1055><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-0b6f1055><p class="auth-branding-tagline" data-v-0b6f1055>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-0b6f1055>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-0b6f1055> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),k("div",Cp,[k("div",Np,[_[21]||(_[21]=k("div",{class:"auth-header"},[k("h1",{class:"auth-title","data-sync-microcopy-text":"sign_up"},"Sign Up"),k("p",{class:"auth-subtitle","data-sync-microcopy-text":"please_enter_your_details_to_get_started"},"Please enter your details to get started")],-1)),k("form",{class:"auth-form",onSubmit:Aa(c,["prevent"])},[k("div",Lp,[_[11]||(_[11]=k("label",{for:"inp__text--first-name","data-sync-microcopy-text":"first_name"},"First Name",-1)),k("input",{id:"inp__text--first-name",type:"text","data-sync-microcopy-placeholder":"enter_your_first_name",placeholder:"Enter your first name",onKeyup:_[0]||(_[0]=vt(y=>c(),["enter"]))},null,32)]),k("div",Ip,[_[12]||(_[12]=k("label",{for:"inp__text--last-name","data-sync-microcopy-text":"last_name"},"Last Name",-1)),k("input",{id:"inp__text--last-name",type:"text","data-sync-microcopy-placeholder":"enter_your_last_name",placeholder:"Enter your last name",onKeyup:_[1]||(_[1]=vt(y=>c(),["enter"]))},null,32)]),k("div",Dp,[_[13]||(_[13]=k("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),k("input",{id:"inp__text--email",type:"text","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onDblclick:_[2]||(_[2]=y=>h()),onKeyup:_[3]||(_[3]=vt(y=>c(),["enter"]))},null,32)]),k("div",Mp,[_[14]||(_[14]=k("label",{for:"inp__text--username","data-sync-microcopy-text":"username"},"User Name",-1)),k("input",{id:"inp__text--username",type:"text","data-sync-microcopy-placeholder":"public_alias",placeholder:"Public Alias",onBlur:_[4]||(_[4]=y=>g()),onKeyup:_[5]||(_[5]=vt(y=>c(),["enter"]))},null,32)]),k("div",Bp,[_[15]||(_[15]=k("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),k("div",Fp,[k("input",{id:"inp__text--password",type:r.value?"text":"password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password",onKeyup:_[6]||(_[6]=vt(y=>c(),["enter"]))},null,40,Up),k("button",{type:"button",class:"password-toggle-btn",onClick:_[7]||(_[7]=y=>i()),tabindex:"-1"},[k("span",{class:Bt(r.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])]),_[16]||(_[16]=k("small",{"data-sync-microcopy-text":"must_be_at_least_10_characters_long"},"Must be at least 10 characters long",-1))]),k("div",$p,[_[17]||(_[17]=k("label",{for:"inp__text--verify-password","data-sync-microcopy-text":"verify_password"},"Verify Password",-1)),k("div",Hp,[k("input",{id:"inp__text--verify-password",type:o.value?"text":"password","data-sync-microcopy-placeholder":"re_enter_your_password",placeholder:"Re-enter your password",onKeyup:_[8]||(_[8]=vt(y=>c(),["enter"]))},null,40,Kp),k("button",{type:"button",class:"password-toggle-btn",onClick:_[9]||(_[9]=y=>l()),tabindex:"-1"},[k("span",{class:Bt(o.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),_[20]||(_[20]=k("div",{class:"auth-actions"},[k("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"sign_up"},"Sign Up")],-1)),k("p",Yp,[_[18]||(_[18]=k("span",{"data-sync-microcopy-text":"already_have_an_account"},"Already have an account?",-1)),_[19]||(_[19]=Sa()),k("a",{class:"auth-link",onClick:_[10]||(_[10]=y=>a("signin_route")),"data-sync-microcopy-text":"log_in"},"Sign In")])],32)])])]))}},qp=jt(jp,[["__scopeId","data-v-0b6f1055"]]),Gp={class:"auth-page"},Wp={class:"auth-page-right"},Jp={class:"auth-card"},Vp={class:"form-group"},zp={class:"auth-link-center"},Qp={__name:"forgot_route",setup(e){const t=ft(),n=ye(),a=(f="signin_route")=>{t.push({name:f})};be.getTJO()&&a("contests");let s=null;const r=(f=3,u=1)=>{switch(n.appCLIFeatures.features.motif.state){case"brand":f=3,u=1;break;case"white_label":f=3,u=4;break}const d=Math.floor(Math.random()*f)+u,h=document.querySelector(".img__bg")?.classList;h&&(h.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),h.add(`img__bg--${d}`)),s||(s=J.subscribe("APP__ROUTE_SYNC",(p,g)=>{const c=JSON.parse(g);switch(Object.keys(c)[0]){case"Motif":r();break;case"Lang":o();break}}))},o=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(f=>{const u=n.appCLIFeatures?.features?.lang?.state;let d=n.appMeta.microcopy.language.filter(h=>h.code==u)[0]?.copy;d=d.filter(h=>h[0]==f.dataset.syncMicrocopyText)[0],d&&(f.textContent=d[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(f=>{const u=n.appCLIFeatures?.features?.lang?.state;let d=n.appMeta.microcopy.language.filter(h=>h.code==u)[0]?.copy;d=d.filter(h=>h[0]==f.dataset.syncMicrocopyPlaceholder)[0],d&&(f.placeholder=d[1])})},i=f=>{Ot.neodigmUtils().shake(f||"#inp__text--email")},l=()=>{const f=document.querySelector("#inp__text--email");let u=null,d=null;if(!f?.value)u="Please enter your email address",d="#inp__text--email";else if(f.value.indexOf("@")===-1||f.value.indexOf(".")===-1)u="Please enter a valid email address",d="#inp__text--email";else{const h={method:"GET",headers:be.genHeaders()};fetch(be.API_baseURI+"/bmac/"+be.API_ver+"/acctEntity/forgot?CODE="+encodeURIComponent(f.value),h).then(p=>p.json()).then(p=>{p.ok?(neodigmToast.q("Password reset email sent!|Please check your inbox","success"),setTimeout(()=>{a("verf_link_route")},2e3)):neodigmToast.q("Failed to send reset email|Please try again","danger")}).catch(p=>{neodigmToast.q("An error occurred|Please try again","danger")});return}u&&(i(d),neodigmToast.q(u,"danger"))};return Kt(()=>{r(),o()}),(f,u)=>(Qe(),pt("div",Gp,[u[7]||(u[7]=Yt('<div class="auth-page-left"><div class="auth-bg"><div class="auth-bg-image"></div><div class="auth-bg-image"></div><div class="auth-bg-image"></div></div><div class="auth-overlay"></div><div class="auth-branding-content"><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img"><p class="auth-branding-tagline">Daily Tournament Betting</p><p class="auth-branding-subtitle">Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer"> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),k("div",Wp,[k("div",Jp,[u[6]||(u[6]=k("div",{class:"auth-header"},[k("h1",{class:"auth-title","data-sync-microcopy-text":"forgot_password"},"Forgot Password"),k("p",{class:"auth-subtitle","data-sync-microcopy-text":"please_enter_your_email"},"Please enter your email to receive a password reset link")],-1)),k("form",{class:"auth-form",onSubmit:Aa(l,["prevent"])},[k("div",Vp,[u[2]||(u[2]=k("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),k("input",{id:"inp__text--email",type:"text","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onKeyup:u[0]||(u[0]=vt(d=>l(),["enter"]))},null,32)]),u[5]||(u[5]=k("div",{class:"auth-actions"},[k("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"send_reset_link"},"Send Reset Link")],-1)),k("p",zp,[u[3]||(u[3]=k("span",{"data-sync-microcopy-text":"remember_your_password"},"Remember your password?",-1)),u[4]||(u[4]=Sa()),k("a",{class:"auth-link",onClick:u[1]||(u[1]=d=>a("signin_route")),"data-sync-microcopy-text":"sign_in"},"Sign In")])],32)])])]))}},Xp={class:"auth-page"},Zp={class:"auth-page-right"},ef={class:"auth-card"},tf={class:"form-group"},nf={class:"password-input-wrapper"},af=["type"],sf={class:"form-group"},rf={class:"password-input-wrapper"},of=["type"],lf={__name:"resethash_route",setup(e){const t=ft(),n=ye(),a=()=>{t.push({name:"home_route"})};let s=null;const r=Je(!1),o=Je(!1),i=()=>{r.value=!r.value},l=()=>{o.value=!o.value},f=(g=3,c=1)=>{switch(n.appCLIFeatures.features.motif.state){case"brand":g=3,c=1;break;case"white_label":g=3,c=4;break}const m=Math.floor(Math.random()*g)+c,_=document.querySelector(".img__bg")?.classList;_&&(_.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),_.add(`img__bg--${m}`)),s||(s=J.subscribe("APP__ROUTE_SYNC",(y,T)=>{const S=JSON.parse(T);switch(Object.keys(S)[0]){case"Motif":f();break;case"Lang":u();break}}))},u=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(g=>{const c=n.appCLIFeatures?.features?.lang?.state;let m=n.appMeta.microcopy.language.filter(_=>_.code==c)[0]?.copy;m=m.filter(_=>_[0]==g.dataset.syncMicrocopyText)[0],m&&(g.textContent=m[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(g=>{const c=n.appCLIFeatures?.features?.lang?.state;let m=n.appMeta.microcopy.language.filter(_=>_.code==c)[0]?.copy;m=m.filter(_=>_[0]==g.dataset.syncMicrocopyPlaceholder)[0],m&&(g.placeholder=m[1])})},d=g=>{Ot.neodigmUtils().shake(g||"#inp__text--password")},h=g=>{const c=[];return g.length<10&&c.push("at least 10 characters"),/[a-z]/.test(g)||c.push("1 lowercase"),/[A-Z]/.test(g)||c.push("1 uppercase"),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(g)||c.push("1 special character"),/[^\x00-\x7F]/.test(g)&&c.push("ASCII characters only"),c},p=()=>{const g=document.querySelector("#inp__text--password"),c=document.querySelector("#inp__text--verify-password");let m=null,_=null;if(!g?.value)m="Please enter a password",_="#inp__text--password";else{const y=h(g.value);if(y.length>0)m="Password must have:|"+y.join(", "),_="#inp__text--password";else if(!c?.value)m="Please verify your password",_="#inp__text--verify-password";else if(g.value!==c.value)m="Passwords do not match",_="#inp__text--verify-password";else{const T=n.appSession.session_user.email||"",S={email:T,hash:Ot.neodigmUtils().genHash(g.value),modified_by:T},x={method:"POST",body:JSON.stringify(S),headers:be.genHeaders()};fetch(be.API_baseURI+"/bmac/"+be.API_ver+"/acctEntity/resetHash",x).then(R=>R.json()).then(R=>{R.ok?(neodigmToast.q("Password reset successful!|Signing you out...","success"),setTimeout(()=>{mvvLegit.doSignout()},4e3)):neodigmToast.q("Password reset failed|Please try again","danger")}).catch(R=>{neodigmToast.q("An error occurred|Please try again","danger")});return}}m&&(d(_),neodigmToast.q(m,"danger"))};return Kt(()=>{f(),u()}),(g,c)=>(Qe(),pt("div",Xp,[c[9]||(c[9]=Yt('<div class="auth-page-left" data-v-2ff7f7f3><div class="auth-bg" data-v-2ff7f7f3><div class="auth-bg-image" data-v-2ff7f7f3></div><div class="auth-bg-image" data-v-2ff7f7f3></div><div class="auth-bg-image" data-v-2ff7f7f3></div></div><div class="auth-overlay" data-v-2ff7f7f3></div><div class="auth-branding-content" data-v-2ff7f7f3><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-2ff7f7f3><p class="auth-branding-tagline" data-v-2ff7f7f3>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-2ff7f7f3>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-2ff7f7f3> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),k("div",Zp,[k("div",ef,[c[8]||(c[8]=k("div",{class:"auth-header"},[k("h1",{class:"auth-title","data-sync-microcopy-text":"reset_password"},"Reset Password"),k("p",{class:"auth-subtitle","data-sync-microcopy-text":"please_enter_your_new_password"},"Please enter your new password")],-1)),k("form",{class:"auth-form",onSubmit:Aa(p,["prevent"])},[k("div",tf,[c[4]||(c[4]=k("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),k("div",nf,[k("input",{id:"inp__text--password",type:r.value?"text":"password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password",onKeyup:c[0]||(c[0]=vt(m=>p(),["enter"]))},null,40,af),k("button",{type:"button",class:"password-toggle-btn",onClick:c[1]||(c[1]=m=>i()),tabindex:"-1"},[k("span",{class:Bt(r.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])]),c[5]||(c[5]=k("small",{"data-sync-microcopy-text":"must_be_at_least_10_characters_long"},"Must be at least 10 characters long",-1))]),k("div",sf,[c[6]||(c[6]=k("label",{for:"inp__text--verify-password","data-sync-microcopy-text":"verify_password"},"Verify Password",-1)),k("div",rf,[k("input",{id:"inp__text--verify-password",type:o.value?"text":"password","data-sync-microcopy-placeholder":"re_enter_your_password",placeholder:"Re-enter your password",onKeyup:c[2]||(c[2]=vt(m=>p(),["enter"]))},null,40,of),k("button",{type:"button",class:"password-toggle-btn",onClick:c[3]||(c[3]=m=>l()),tabindex:"-1"},[k("span",{class:Bt(o.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),k("div",{class:"auth-actions"},[c[7]||(c[7]=k("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"reset_password"},"Reset Password",-1)),k("button",{type:"button",onClick:a,class:"btn btn-outline"}," Cancel ")])],32)])])]))}},cf=jt(lf,[["__scopeId","data-v-2ff7f7f3"]]),uf={class:"auth-page"},df={class:"auth-page-right"},pf={class:"auth-card"},ff={class:"verification-content"},hf={class:"timer-display"},gf={__name:"verf_link_route",setup(e){const t=ft();ki(),ye();const n=Je(7200);let a=null;const s=o=>{const i=Math.floor(o/3600),l=Math.floor(o%3600/60),f=o%60;return`${i.toString().padStart(2,"0")}:${l.toString().padStart(2,"0")}:${f.toString().padStart(2,"0")}`},r=()=>{a=setInterval(()=>{n.value--,n.value<=0&&(clearInterval(a),neodigmWired4Sound.sound(14),t.push({name:"splash_route"}))},1e3)};return Kt(()=>{r()}),va(()=>{a&&clearInterval(a)}),(o,i)=>(Qe(),pt("div",uf,[i[4]||(i[4]=Yt('<div class="auth-page-left" data-v-f5b4a3c8><div class="auth-bg" data-v-f5b4a3c8><div class="auth-bg-image" data-v-f5b4a3c8></div><div class="auth-bg-image" data-v-f5b4a3c8></div><div class="auth-bg-image" data-v-f5b4a3c8></div></div><div class="auth-overlay" data-v-f5b4a3c8></div><div class="auth-branding-content" data-v-f5b4a3c8><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-f5b4a3c8><p class="auth-branding-tagline" data-v-f5b4a3c8>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-f5b4a3c8>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-f5b4a3c8> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),k("div",df,[k("div",pf,[i[3]||(i[3]=k("div",{class:"auth-header"},[k("h1",{class:"auth-title"},"Check Your Email"),k("p",{class:"auth-subtitle"},"A verification link has been sent to the email address you provided.")],-1)),k("div",ff,[i[0]||(i[0]=k("p",{class:"verification-instructions"},"Please click on that link to continue.",-1)),i[1]||(i[1]=k("p",{class:"verification-note"},"The link will expire in 2 hours.",-1)),i[2]||(i[2]=k("p",{class:"verification-note"},"Remember to check your spam folder.",-1)),k("div",hf,no(s(n.value)),1)])])])]))}},mf=jt(gf,[["__scopeId","data-v-f5b4a3c8"]]),ps=Ed({history:td(),routes:[{path:"/",name:"splash_route",component:Gr},{path:"/splash_route",name:"splash_route",component:Gr},{path:"/error_route",name:"error_route",component:zn},{path:"/forgot_route",name:"forgot_route",component:Qp},{path:"/resetforgot_route",name:"resetforgot_route",component:zn},{path:"/resethash_route",name:"resethash_route",component:cf},{path:"/signin_route",name:"signin_route",component:Pp},{path:"/signout_route",name:"signout_route",component:xp},{path:"/signup_route",name:"signup_route",component:qp},{path:"/verf_link_route",name:"verf_link_route",component:mf},{path:"/offline_route",name:"offline_route",component:zn},{path:"/home_route",name:"home_route",component:up},{path:"/appFAQ",name:"appFAQ",component:zn},{path:"/appHelp",name:"appHelp",component:gp}]}),un={categorizeTournaments(e,t,n,a){const s=[],r=l=>(l.entities?.guids||[]).includes(a),o=l=>(l.sports_allowed||[]).length===1,i=l=>(l.sports_allowed||[]).length>1;if(t==="lobby"&&n==="all"){const l=e.filter(g=>r(g)&&(g.status==="LOCKED"||g.class==="LOCKED"));l.length>0&&s.push({title:"Your Active Tournaments",subtext:`Currently in progress • ${l.length} tournament${l.length!==1?"s":""}`,tournaments:l});const f=e.filter(g=>r(g)&&(g.status==="UPCOMING"||g.class==="UPCOMING"));f.length>0&&s.push({title:"Your Upcoming Tournaments",subtext:`Joined, not yet started • ${f.length} tournament${f.length!==1?"s":""}`,tournaments:f});const u=e.filter(g=>!r(g)&&(g.status==="UPCOMING"||g.class==="UPCOMING")&&o(g));u.length>0&&s.push({title:"Upcoming Single-Sport Tournaments",subtext:`Focused competitions • ${u.length} tournament${u.length!==1?"s":""}`,tournaments:u});const d=e.filter(g=>!r(g)&&(g.status==="UPCOMING"||g.class==="UPCOMING")&&i(g));d.length>0&&s.push({title:"Upcoming Multi-Sport Tournaments",subtext:`Cross-league action • ${d.length} tournament${d.length!==1?"s":""}`,tournaments:d});const h=e.filter(g=>r(g)&&(g.status==="COMPLETED"||g.class==="COMPLETED")).slice(0,10);h.length>0&&s.push({title:"Your Recently Completed Tournaments",subtext:`Check your results • ${h.length} tournament${h.length!==1?"s":""}`,tournaments:h});const p=e.filter(g=>!r(g)&&(g.status==="COMPLETED"||g.class==="COMPLETED")).slice(0,20);p.length>0&&s.push({title:"Recently Completed Tournaments",subtext:`Explore past competitions • ${p.length} tournament${p.length!==1?"s":""}`,tournaments:p})}else s.push({title:"Tournaments",subtext:`${e.length} tournament${e.length!==1?"s":""}`,tournaments:e});return s},renderMatchCards(e){if(!e||!e.matches_expanded)return;const t=document.querySelector(".select-grid");if(!t)return;t.innerHTML="";const n=new Date,a=[...e.matches_expanded].sort((r,o)=>{const i=new Date(r.scheduled_at),l=new Date(o.scheduled_at),f=i<n,u=l<n;return f&&!u?1:!f&&u?-1:i-l}),s=()=>{const o=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let i=0;o&&ye().coreTourn.length>0&&(i=ye().coreTourn[ye().coreTourn.length-1].data.find(g=>g.guid===o)?.tournament_dollars||0);const l=document.querySelector(".bet-grid__slip-BETSLIP-content"),f=l?l.querySelectorAll("bma-bet-entry"):[],u=Array.from(f).map(h=>({matchGuid:h.getAttribute("data-match-guid"),type:h.getAttribute("data-content-type"),teamPoints:h.getAttribute("data-content-team-points"),odds:h.getAttribute("data-content-odds"),stake:h.getAttribute("data-stake"),payout:h.getAttribute("data-payout"),matchTitle:h.getAttribute("data-match-title"),abbreviatedTitle:h.getAttribute("data-abbreviated-title"),scheduledAt:h.getAttribute("data-scheduled-at")})),d=ye();J.publish(d.hierTopics.COREBETSLIP__INTERSYNC,JSON.stringify({tournament_dollars:i,bets:u,timestamp:Date.now()}))};a.forEach(r=>{const i=new Date(r.scheduled_at)<n,l=document.createElement("div");l.className=`match-card${i?" match-card--disabled":""}`,l.dataset.matchId=r.id,l.dataset.matchGuid=r.odds_id||r.guid||r.id;let f=null,u=!1;try{f=typeof r.odds_markets=="string"?JSON.parse(r.odds_markets):r.odds_markets,u=f&&(f.h2h||f.totals||f.spreads)}catch(h){console.error("[app_events] Failed to parse odds_markets:",h)}let d='<div class="match-card__header">';if(d+=`<div class="match-card__date">${Zt.formatDateLocal(r.scheduled_at)}</div>`,!i&&u?(d+='<div class="match-card__labels">',d+="<span>SPREAD</span><span>MONEY</span><span>TOTAL</span>",d+="</div>"):d+='<div class="match-card__labels"></div>',d+="</div>",d+='<div class="match-card__row match-card__row--home">',d+=`<div class="match-card__team match-card__team--home">${r.home_team_id||"Home"}</div>`,!i&&u){d+='<div class="match-card__buttons">';const h=f.spreads?.outcomes?.find(c=>c.name===r.home_team_id);if(h){const c=h.point>0?`+${h.point}`:h.point;d+=`<button class="match-card__btn" data-bet-type="spread" data-team="home" data-price="${h.price}" data-point="${h.point}">
                        ${c}<br>${h.price}
                    </button>`}else d+='<button class="match-card__btn match-card__btn--empty" disabled></button>';const p=f.h2h?.outcomes?.find(c=>c.name===r.home_team_id);p?d+=`<button class="match-card__btn" data-bet-type="money" data-team="home" data-price="${p.price}">
                        ${p.price}
                    </button>`:d+='<button class="match-card__btn match-card__btn--empty" disabled></button>';const g=f.totals?.outcomes?.find(c=>c.name==="Over");g?d+=`<button class="match-card__btn" data-bet-type="total" data-team="over" data-price="${g.price}" data-point="${g.point}">
                        O${g.point}<br>${g.price}
                    </button>`:d+='<button class="match-card__btn match-card__btn--empty" disabled></button>',d+="</div>"}if(d+="</div>",d+='<div class="match-card__row match-card__row--away">',d+=`<div class="match-card__team match-card__team--away">${r.away_team_id||"Away"}</div>`,!i&&u){d+='<div class="match-card__buttons">';const h=f.spreads?.outcomes?.find(c=>c.name===r.away_team_id);if(h){const c=h.point>0?`+${h.point}`:h.point;d+=`<button class="match-card__btn" data-bet-type="spread" data-team="away" data-price="${h.price}" data-point="${h.point}">
                        ${c}<br>${h.price}
                    </button>`}else d+='<button class="match-card__btn match-card__btn--empty" disabled></button>';const p=f.h2h?.outcomes?.find(c=>c.name===r.away_team_id);p?d+=`<button class="match-card__btn" data-bet-type="money" data-team="away" data-price="${p.price}">
                        ${p.price}
                    </button>`:d+='<button class="match-card__btn match-card__btn--empty" disabled></button>';const g=f.totals?.outcomes?.find(c=>c.name==="Under");g?d+=`<button class="match-card__btn" data-bet-type="total" data-team="under" data-price="${g.price}" data-point="${g.point}">
                        U${g.point}<br>${g.price}
                    </button>`:d+='<button class="match-card__btn match-card__btn--empty" disabled></button>',d+="</div>"}d+="</div>",l.innerHTML=d,!i&&u&&setTimeout(()=>{l.querySelectorAll(".match-card__btn:not([disabled])").forEach(h=>{h.addEventListener("click",p=>{p.stopPropagation();const g={matchId:r.id,matchGuid:r.odds_id||r.guid||r.id,matchTitle:r.title,abbreviatedTitle:r.short_title||r.title,homeTeam:r.home_team_id,awayTeam:r.away_team_id,scheduledAt:r.scheduled_at,type:h.dataset.betType,team:h.dataset.team,price:h.dataset.price,point:h.dataset.point,timestamp:Date.now()};if(h.classList.contains("match-card__btn--active")){const m=document.querySelector(".bet-grid__slip-BETSLIP-content");if(m){const _=m.querySelectorAll("bma-bet-entry");let y=!1;_.forEach(T=>{if(y)return;const S=T.getAttribute("data-content-type"),x=T.getAttribute("data-content-odds");S===g.type&&x===g.price&&(T.remove(),y=!0)}),m.children.length===0&&(m.innerHTML='<div class="bet-slip__empty"><p>Select odds to create a new bet slip</p></div>')}h.classList.remove("match-card__btn--active"),setTimeout(()=>{s()},100)}else{document.querySelectorAll(".match-card__btn").forEach(y=>y.classList.remove("match-card__btn--selected")),h.classList.add("match-card__btn--selected"),h.classList.add("match-card__btn--active");const m=ye(),_=h.dataset.betType;_==="spread"?J.publish(m.hierTopics.COREBETSLIP__SPREAD,JSON.stringify(g)):_==="money"?J.publish(m.hierTopics.COREBETSLIP__MONEY,JSON.stringify(g)):_==="total"&&J.publish(m.hierTopics.COREBETSLIP__TOTAL,JSON.stringify(g)),J.publish(m.hierTopics.COREBETSLIP,JSON.stringify(g))}})})},0),t.appendChild(l)})},refreshPlayPopupUI(e,t){console.log("[app_events] Refreshing PLAY popup UI for tournament:",e);const n=document.querySelector(".bet-grid__slip-BETSLIP-content");n&&(n.innerHTML='<div class="bet-slip__empty"><p>Select odds to create a new bet slip</p></div>');const a=ye();if(a.coreTourn.length>0){const o=a.coreTourn[a.coreTourn.length-1].data.find(i=>i.guid===e);o&&un.renderMatchCards(o)}t?.rows&&(console.log("[app_events] Publishing SODAPOP__HYDRATE__COREBETSLIP with",t.rows.length,"bets"),setTimeout(()=>{J.publish(a.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,JSON.stringify(t))},100));const s=document.querySelector(".bet-grid__slip");s&&s.setAttribute("data-active-bet-tab","MYBETS")},disableExistingBetButtons(){const e=document.querySelectorAll(".bet-grid__slip-MYBETS bma-bet-existing"),t=Array.from(e).map(a=>{try{return JSON.parse(a.getAttribute("data-corebetslip")||"{}")}catch{return null}}).filter(Boolean);document.querySelectorAll(".match-card").forEach(a=>{const s=a.dataset.matchGuid,r=a.querySelector(".match-card__team--home"),o=a.querySelector(".match-card__team--away"),i=r?.textContent.trim(),l=o?.textContent.trim();a.querySelectorAll(".match-card__btn:not(.match-card__btn--empty)").forEach(f=>{if(f.disabled)return;const u=f.dataset.betType,p=f.dataset.team==="home"?i:l;t.some(c=>{if(c.coreMatches__guid!==s)return!1;const m=c.bet||[];if(m.length===0)return!1;const _=m[0],T=Object.keys(_).filter(R=>R!=="short_title")[0],x=_[T]?.type;return u==="total"?x===u:x===u&&T===p})&&(f.disabled=!0,f.classList.add("match-card__btn--disabled"))})})},bindAppListeners(e){J.subscribe("APP",(p,g)=>{console.warn("~~ sub all APP | "+p+"|"+g)}),J.subscribe("WC",(p,g)=>{console.warn("~~ sub all WC  | "+p+"|"+g)}),J.subscribe("ROUTE",(p,g)=>{console.warn("~~ sub all ROUTE  | "+p+"|"+g)});let t="lobby",n="all";const a=()=>{if(e.coreTourn.length===0)return;const g=e.coreTourn[e.coreTourn.length-1].data,c=e.appSession?.session_user?.guid;document.querySelectorAll(".tournament-item").forEach(y=>y.classList.remove("h-ds__none"));let _=0;if(g.forEach(y=>{const T=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${y.guid}"]`);if(!T)return;const S=T.parentElement;let x=!0;t==="my"?(y.entities?.guids||[]).includes(c)||(x=!1):t==="completed"&&(y.status||y.class)!=="COMPLETED"&&(x=!1),n!=="all"&&x&&((y.sports_allowed||[]).some(D=>D.key===n)||(x=!1)),x?_++:S&&S.classList.add("h-ds__none")}),console.log(`[app_events] Filter applied - ${t}/${n} - showing ${_} of ${g.length} tournaments`),_===0){let y="No tournaments match the current filters";t==="my"&&(y="You haven't joined any tournaments yet"),t==="completed"&&(y="No completed tournaments yet"),typeof neodigmToast<"u"&&neodigmToast.q(y,"night")}};J.subscribe(e.hierTopics.COREBETSLIP,(p,g)=>{JSON.parse(g);let c=16;switch(p){case e.hierTopics.COREBETSLIP__BET:c=5,Zt.shootConfetti(),console.log("~~~  |  "+p+" | ",g);const m=document.querySelector("neodigm-sodapop");m&&m.setAttribute("data-wait","true");const _=document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry");if(_.length===0){console.warn("[app_events] No bets to submit"),m&&m.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("No bets to submit","warning");break}const T=document.querySelector(".play-cntr")?.dataset?.currentTournGuid,S=e.appSession?.session_user?.guid;if(!T||!S){console.error("[app_events] Missing tournament or user GUID"),m&&m.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("Missing tournament or user data","danger");break}const x=Array.from(_).map(ne=>{const Z=ne.getAttribute("data-content-team-points"),j=ne.getAttribute("data-content-odds"),Q=ne.getAttribute("data-stake")||"0",de=ne.getAttribute("data-content-type"),_e=ne.getAttribute("data-payout")||"0",Te=ne.getAttribute("data-match-guid")||"",ge={};return ge[Z]={type:de,stake:parseFloat(Q),odds:parseFloat(j),payout:parseFloat(_e),reconciled:!1},{acctEntity__guid:S,coreTournaments__guid:T,coreMatches__guid:Te,bet:[ge],status:"PENDING"}});console.log("[app_events] Submitting bet slips:",x),be.postBetSlips(x).then(ne=>{console.log("[app_events] Bet slips posted successfully:",ne);const Z=x.reduce((j,Q)=>{const de=Q.bet[0],_e=Object.keys(de)[0];return j+(de[_e]?.stake||0)},0);typeof neodigmToast<"u"&&neodigmToast.q(`Bets placed successfully!|Total Stake: TD$ ${Z.toFixed(2)}`,"success"),be.fetchBetSlips(S,T).then(j=>{if(j?.rows){const Q={timestamp:Date.now(),source:"API",data:j.rows};e.pushcoreBetSlip(Q),console.log("[app_events] Refreshed bet slips in store:",j.rows.length,"items")}un.refreshPlayPopupUI(T,j),m&&m.setAttribute("data-wait","false")}).catch(j=>{console.error("[app_events] Error fetching fresh bet slips:",j),m&&m.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("Bets placed but failed to refresh|Please close and reopen","warning")})}).catch(ne=>{console.error("[app_events] Error posting bet slips:",ne),typeof neodigmToast<"u"&&neodigmToast.q("Failed to place bets|Please try again","danger"),m&&m.setAttribute("data-wait","false")});break;case e.hierTopics.COREBETSLIP__SPREAD:break;case e.hierTopics.COREBETSLIP__MONEY:break;case e.hierTopics.COREBETSLIP__TOTAL:break;case e.hierTopics.COREBETSLIP__CLOSE:c=24;break;case e.hierTopics.COREBETSLIP__TDSYNC:const R=document.querySelector("#summary-balance");if(R&&g){g=JSON.parse(g);const Z=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(e.coreBetSlip[0]?.data&&Z){const j=e.coreBetSlip[0].data.filter(Ae=>Ae.coreTournaments__guid===Z),Q=[],de=[],_e=[];j.forEach(Ae=>{const Oe=Ae.bet||[];if(Oe.length===0)return;const C=Oe[0];Object.keys(C).filter(H=>H!=="short_title").forEach(H=>{const z=C[H],re=z?.reconciled!==!1,b=parseFloat(z?.payout||0);re?b===0?de.push(Ae):_e.push(Ae):Q.push(Ae)})});const Te=_t.search(Q,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,ge=_t.search(de,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,Ge=Te+ge,we=_t.search(_e,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0;R.innerHTML=(g.tournament_dollars-Ge+we).toFixed(2)}else R.innerHTML=g.tournament_dollars.toFixed(2)}break;case e.hierTopics.COREBETSLIP__INTERSYNC:let w=0,D=0;if(e.coreBetSlip.length>0){const Z=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(Z){const Q=e.coreBetSlip[e.coreBetSlip.length-1].data.filter(we=>we.coreTournaments__guid===Z),de=[],_e=[],Te=[];Q.forEach(we=>{const Ae=we.bet||[];if(Ae.length===0)return;const Oe=Ae[0];Object.keys(Oe).filter(G=>G!=="short_title").forEach(G=>{const H=Oe[G],z=H?.reconciled!==!1,re=parseFloat(H?.payout||0);z?re===0?_e.push(we):Te.push(we):de.push(we)})});const ge=_t.search(de,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,Ge=_t.search(_e,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0;w=ge+Ge,D=_t.search(Te,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0}}let O=!0,F=0;const Y=document.querySelector("[data-bets-valid]"),P=document.querySelector("#summary-balance"),V=document.querySelector("#summary-stake"),$=document.querySelector("#summary-payout");if(Y&&g){g=JSON.parse(g),g.pending_stake_sum=0,g.pending_payout_sum=0,g.bets.length||(O=!1),g.bets.forEach(Q=>{Q.stake=Number(Q.stake),Q.stake?g.pending_stake_sum+=Q.stake:O=!1}),document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry").forEach(Q=>{const de=parseFloat(Q.getAttribute("data-payout")||"0");g.pending_payout_sum+=de});const Z=w+g.pending_stake_sum,j=D+g.pending_payout_sum;F=g.tournament_dollars-Z+D,F<0?P.classList.add("summary-cell__red"):P.classList.remove("summary-cell__red"),P.innerHTML=F.toFixed(2),V.innerHTML=Z.toFixed(2),$&&($.innerHTML=j.toFixed(2),j<0?$.classList.add("summary-cell__red"):$.classList.remove("summary-cell__red")),g.tournament_dollars<0&&(O=!1),Y.dataset.betsValid=O}break}c&&neodigmWired4Sound&&neodigmWired4Sound.sound(c,"QUITE").vibrate()});const s=()=>{const g=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let c=0;g&&e.coreTourn.length>0&&(c=e.coreTourn[e.coreTourn.length-1].data.find(y=>y.guid===g)?.tournament_dollars||0),J.publish(e.hierTopics.COREBETSLIP__TDSYNC,JSON.stringify({tournament_dollars:c,timestamp:Date.now()}))},r=()=>{const p=document.querySelector("#summary-balance"),g=document.querySelector("#summary-stake"),c=document.querySelector("#summary-payout");if(!p||!g||!c){console.warn("[app_events] Summary elements not found");return}const _=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let y=0;_&&e.coreTourn.length>0&&(y=e.coreTourn[e.coreTourn.length-1].data.find(D=>D.guid===_)?.tournament_dollars||0);let T=0,S=0;if(e.coreBetSlip.length>0&&_){const w=e.coreBetSlip[e.coreBetSlip.length-1].data.filter(V=>V.coreTournaments__guid===_);console.log("[app_events] Filtered bets for tournament:",_,"found:",w.length),console.log("[app_events] Using latest bet slip data index:",e.coreBetSlip.length-1),console.log("[app_events] First bet sample:",w[0]);const D=[],O=[],F=[];w.forEach(V=>{const $=V.bet||[];if($.length===0)return;const ne=$[0];Object.keys(ne).filter(j=>j!=="short_title").forEach(j=>{const Q=ne[j],de=Q?.reconciled!==!1,_e=parseFloat(Q?.payout||0);de?_e===0?O.push(V):F.push(V):D.push(V)})}),console.log("[app_events] Bet categories:",{unreconciled:D.length,reconciledZero:O.length,reconciledNonZero:F.length});const Y=_t.search(D,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,P=_t.search(O,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0;T=Y+P,S=_t.search(F,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0,console.log("[app_events] Balance calculation:",{unreconciledStakes:Y,lostBetStakes:P,stakesToSubtract:T,reconciledPayouts:S,tournamentDollars:y})}else console.warn("[app_events] No bet data found in Pinia store or missing tournamentGuid");const x=y-T+S;p.innerHTML=x.toFixed(2),x<0?p.classList.add("summary-cell__red"):p.classList.remove("summary-cell__red"),g.innerHTML=T.toFixed(2),c.innerHTML=S.toFixed(2),S<0?c.classList.add("summary-cell__red"):c.classList.remove("summary-cell__red")};J.subscribe(e.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,(p,g)=>{const m=JSON.parse(g)?.rows||[],_=document.querySelector(".bet-grid__slip-MYBETS");if(!_)return;if(_.innerHTML="",m.length===0){_.innerHTML='<p style="color: var(--app-core-color--gray-6__dark--brand, #969696); text-align: center; padding: 20px;">No active bets</p>';const x=document.querySelector(".bet-grid__slip");x&&x.setAttribute("data-active-bet-tab","BETSLIP"),s();return}m.forEach(x=>{if((x.bet||[]).length===0)return;const w=document.createElement("bma-bet-existing");w.setAttribute("data-corebetslip",JSON.stringify(x)),_.appendChild(w)});const y=document.querySelector(".bet-grid__slip");y&&y.setAttribute("data-active-bet-tab","MYBETS"),ye().appCLIFeatures?.features?.disable_existing_bet_btn?.state===!0&&un.disableExistingBetButtons(),setTimeout(()=>{console.log("[app_events] Calling updateSummaryFromExistingBets after HYDRATE, bet count:",m.length),console.log("[app_events] Pinia store bet count:",e.coreBetSlip[0]?.data?.length||0),r()},200)}),document.addEventListener("click",p=>{const g=p.target;if(g&&g.classList.contains("bet-slip-tab")){const c=g.dataset.betTab,m=document.querySelector(".bet-grid__slip");c&&m&&(m.setAttribute("data-active-bet-tab",c),neodigmWired4Sound&&neodigmWired4Sound.sound(3),console.log("[app_events] Switched to bet tab:",c))}if(g&&g.dataset.publishBetslip){const c=g.dataset.publishBetslip;J.publish(c,JSON.stringify({timestamp:Date.now()}))}});const o=()=>{const g=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let c=0;g&&e.coreTourn.length>0&&(c=e.coreTourn[e.coreTourn.length-1].data.find(S=>S.guid===g)?.tournament_dollars||0);const m=document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry"),_=Array.from(m).map(y=>({teamPoints:y.getAttribute("data-content-team-points"),odds:y.getAttribute("data-content-odds"),stake:y.getAttribute("data-stake")||"0",type:y.getAttribute("data-content-type"),abbreviatedTitle:y.getAttribute("data-abbreviated-title"),scheduledAt:y.getAttribute("data-scheduled-at")}));J.publish(e.hierTopics.COREBETSLIP__INTERSYNC,JSON.stringify({tournament_dollars:c,bets:_,timestamp:Date.now()}))},i=(p,g)=>{const c=JSON.parse(g),m=document.querySelector(".bet-grid__slip-BETSLIP-content");if(!m){console.error("[app_events] Bet slip container not found");return}const _=m.querySelector(".bet-slip__empty");_&&_.remove();let y="";c.type==="total"?y=c.team==="over"?"Over":"Under":c.team==="home"?y=c.homeTeam:c.team==="away"&&(y=c.awayTeam);let T=y;if(c.point)if(c.type==="spread"){const O=parseFloat(c.point)>0?`+${c.point}`:c.point;T=`${y} ${O}`}else c.type==="total"&&(T=`${y} ${c.point}`);const S=document.createElement("bma-bet-entry");S.setAttribute("data-content-team-points",T),S.setAttribute("data-content-odds",c.price||"0"),S.setAttribute("data-content-stake-text","0"),S.setAttribute("data-content-type",c.type||""),S.setAttribute("data-abbreviated-title",c.abbreviatedTitle||`${c.homeTeam} vs ${c.awayTeam}`),S.setAttribute("data-scheduled-at",c.scheduledAt||""),S.setAttribute("data-match-guid",c.matchGuid||""),S.setAttribute("data-home-team",c.homeTeam||""),S.setAttribute("data-away-team",c.awayTeam||""),S.setAttribute("data-bet-team",y||"");const R=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(R&&e.coreTourn.length>0){const F=e.coreTourn[e.coreTourn.length-1].data.find(Y=>Y.guid===R);if(F?.sports_allowed&&F.sports_allowed.length>0){const Y=F.sports_allowed[0];S.setAttribute("data-sport-key",Y.key||"");const P=Hn.find(V=>V.key===Y.key);S.setAttribute("data-sport-group",P?.group||"")}}m.appendChild(S),console.log("[app_events] Bet entry appended to container:",S,"Container children:",m.children.length),setTimeout(()=>{l(S)},0);const w=document.querySelector(".bet-grid__slip");w&&(w.setAttribute("data-active-bet-tab","BETSLIP"),console.log("[app_events] Switched to BETSLIP tab"));const D=m.querySelectorAll("bma-bet-entry").length;D>=3?requestAnimationFrame(()=>{setTimeout(()=>{const O=document.querySelector(".bet-grid__slip");O&&(console.log("[app_events] Scrolling parent to bottom - bet count:",D,"scrollHeight:",O.scrollHeight,"current scrollTop:",O.scrollTop),O.scrollTo({top:O.scrollHeight,behavior:"smooth"}),setTimeout(()=>{console.log("[app_events] After scroll - scrollTop:",O.scrollTop)},500))},150)}):console.log("[app_events] Skipping scroll - only",D,"bet cards (need 3+)"),setTimeout(()=>{o()},200),console.log("[app_events] Created bet entry:",{teamPoints:T,odds:c.price,type:c.type})};J.subscribe(e.hierTopics.COREBETSLIP__SPREAD,i),J.subscribe(e.hierTopics.COREBETSLIP__MONEY,i),J.subscribe(e.hierTopics.COREBETSLIP__TOTAL,i);const l=p=>{const g={sport:{key:p.getAttribute("data-sport-key")||"",group:p.getAttribute("data-sport-group")||""},Match:{scheduled_at:p.getAttribute("data-scheduled-at")||"",home_team_id:p.getAttribute("data-home-team")||"",home_team_score:"",away_team_id:p.getAttribute("data-away-team")||"",away_team_score:""},Bet:{scope:{team_id:p.getAttribute("data-bet-team")||"",over:"",under:""},type:p.getAttribute("data-content-type")||"",odds:p.getAttribute("data-content-odds")||"0",stake:p.getAttribute("data-stake")||"0"}},c=Ci.calcPayout(g);p.setAttribute("data-payout",c.toString()),console.log("[app_events] Payout calculated:",{stake:g.Bet.stake,odds:g.Bet.odds,payout:c})};new MutationObserver(p=>{p.forEach(g=>{g.type==="attributes"&&g.attributeName==="data-stake"&&g.target.tagName==="BMA-BET-ENTRY"&&(console.log("[app_events] Stake changed:",g.target.getAttribute("data-stake")),l(g.target),clearTimeout(window.betSlipStakeTimeout),window.betSlipStakeTimeout=setTimeout(()=>{o()},300))})}).observe(document.body,{attributes:!0,attributeFilter:["data-stake"],subtree:!0}),console.log("[app_events] MutationObserver for stake changes initialized"),document.addEventListener("bma-bet-entry-remove",p=>{console.log("[app_events] Removing bet entry:",p.detail);const g=p.target,c=p.detail;g.remove(),document.querySelectorAll(".match-card").forEach(y=>{y.querySelectorAll(".match-card__btn").forEach(S=>{const x=S.dataset.betType,R=S.dataset.price,w=x===c.type,D=R===c.odds;w&&D&&S.classList.contains("match-card__btn--active")&&(S.classList.remove("match-card__btn--active"),console.log("[app_events] Deactivated button via X removal:",{btnType:x,btnPrice:R}))})});const _=document.querySelector(".bet-grid__slip-BETSLIP-content");_&&_.children.length,setTimeout(()=>{o()},100)}),J.subscribe(e.hierTopics.CANVAS__HYDRATE__STATUS,(p,g)=>{const c=JSON.parse(g);c&&c.guid&&neodigmUtils&&neodigmUtils.shake(`[data-bma-tourn-guid="${c.guid}"]`)}),J.subscribe(e.hierTopics.WC__APP__FOOT,(p,g)=>{JSON.parse(g);let c=16;switch(p){case e.hierTopics.WC__APP__FOOT__ALL_SPORTS:J.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_LOBBY,JSON.stringify({tab:"ALL_SPORTS",timestamp:Date.now()}));break;case e.hierTopics.WC__APP__FOOT__MY_TOURNEYS:J.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_MY,JSON.stringify({tab:"MY_TOURNEYS",timestamp:Date.now()}));break;case e.hierTopics.WC__APP__FOOT__LEADERBOARD:c=24,J.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_LEADERBOARD,JSON.stringify({tab:"LEADERBOARD",timestamp:Date.now()}));break;case e.hierTopics.WC__APP__FOOT__MY_PROFILE:J.publish(e.hierTopics.WC__APP__HEAD_TOP__USER_PROFILE,JSON.stringify({tab:"USER_PROFILE",timestamp:Date.now()}));break}c&&neodigmWired4Sound&&neodigmWired4Sound.sound(c).vibrate()}),J.subscribe(e.hierTopics.WC__APP__HEAD_SPORTS,(p,g)=>{const c=JSON.parse(g);let m=16;p=="WC.APP.HEAD_SPORTS.PREV"||p=="WC.APP.HEAD_SPORTS.NEXT"||p=="WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START"?m=3:(n=c.key||"all",console.log(`[app_events] Sports filter changed to: ${n} (${c.group})`),a()),m&&neodigmWired4Sound&&neodigmWired4Sound.sound(m).vibrate()}),J.subscribe(e.hierTopics.WC__APP__HEAD_MID,(p,g)=>{JSON.parse(g);let c=16;const m=()=>{n="all";const _=document.querySelector("bma-app-head-sports");_&&_.setAttribute("data-selected-chip","all")};switch(p){case"WC.APP.HEAD_MID.HEAD_MID_LOBBY":t="lobby",m(),a();break;case"WC.APP.HEAD_MID.HEAD_MID_MY":if(!e.appSession?.session_user?.guid){console.warn("[app_events] No user GUID found, cannot filter tournaments"),typeof neodigmToast<"u"&&neodigmToast.q("Please sign in to view your tournaments","warning");return}t="my",m(),a();break;case"WC.APP.HEAD_MID.HEAD_MID_COMPLETED":t="completed",m(),a();break;case"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD":t="leaderboard",m(),a(),c=24,typeof neodigmToast<"u"&&neodigmToast.q("Feature not Available|in Beta","night");break;case"WC.APP.HEAD_MID.HEAD_MID_SQUAD":t="squad",m(),a(),c=24,typeof neodigmToast<"u"&&neodigmToast.q("Feature not Available|in Beta","night");break}c&&neodigmWired4Sound&&neodigmWired4Sound.sound(c).vibrate()}),J.subscribe(e.hierTopics.ROUTE__HOME__USER_PROFILE,async(p,g)=>{JSON.parse(g);let c=16;switch(p){case"ROUTE.HOME.USER_PROFILE.INSTALL_PWA":const m=window.deferredPWAPrompt;if(!m){console.log("No install prompt available"),typeof neodigmToast<"u"&&neodigmToast.q("PWA install not available","warning");return}try{m.prompt();const{outcome:y}=await m.userChoice;y==="accepted"?(console.log("PWA installed successfully"),window.deferredPWAPrompt=null,typeof neodigmToast<"u"&&neodigmToast.q("App installed successfully!","success"),c=8,neodigmSodaPop&&neodigmSodaPop.close()):(console.log("PWA install declined"),typeof neodigmToast<"u"&&neodigmToast.q("Install cancelled","night"))}catch(y){console.error("PWA install error:",y),typeof neodigmToast<"u"&&neodigmToast.q("Install failed","danger")}break;case"ROUTE.HOME.USER_PROFILE.TOGGLE_THEME":(()=>{const T=e.appCLIFeatures.features.theme.state==="dark"?"light":"dark";e.setFeaturePersistPub("theme",{state:T});const S=document.getElementById("app");S&&S.setAttribute("data-sync-theme",T),document.body.setAttribute("data-sync-theme",T)})(),neodigmSodaPop&&neodigmSodaPop.close();break;case"ROUTE.HOME.USER_PROFILE.RESET_PASSWORD":ps.push({name:"resethash_route"}),neodigmSodaPop&&neodigmSodaPop.close();break;case"ROUTE.HOME.USER_PROFILE.SIGNOUT":ps.push({name:"signout_route"}),neodigmSodaPop&&neodigmSodaPop.close();break}c&&neodigmWired4Sound&&neodigmWired4Sound.sound(c).vibrate()});const u=(p,g)=>{const c=p.split(".").pop();console.log("[app_events] SODAPOP_PLAY subscriber - action:",c,"topic:",p),setTimeout(()=>{const m=document.querySelectorAll(".play-cntr .btn-info-sm"),y=document.querySelector(".play-cntr")?.closest("neodigm-sodapop");m.forEach(T=>{const S=T.dataset.publishRouteHome?.split(".").pop()||"";if(S===c){if(console.log("[app_events] Activating button:",S),T.classList.add("btn-info-sm--active"),T.classList.remove("btn-info-sm--inactive"),neodigmCarousel.nav({id:"caro-play",nav:S}),neodigmWired4Sound.sound(3),y){const x=c==="PLAY"?"hidden":"auto";y.style.overflow=x,console.log("[app_events] Set sodapop overflow to:",x)}}else T.classList.add("btn-info-sm--inactive"),T.classList.remove("btn-info-sm--active")})},100)};J.subscribe("ROUTE.HOME.SODAPOP_PLAY.INFO",u),J.subscribe("ROUTE.HOME.SODAPOP_PLAY.LEADERBOARD",u),J.subscribe("ROUTE.HOME.SODAPOP_PLAY.PLAY",(p,g)=>{JSON.parse(g);const c=document.getElementById("btn-join__play--id");if(!c){console.warn("[app_events] PLAY button not found");return}const m=c.dataset.requiresJoin==="true",_=c.textContent.trim().toLowerCase();if(console.log("[app_events] PLAY button clicked - text:",_,"requiresJoin:",m),m&&_==="join"){const T=document.querySelector(".play-cntr")?.dataset?.currentTournGuid,S=ye();if(!T){console.error("[app_events] No tournament GUID found");return}console.log("[app_events] Executing JOIN for tournament:",T),J.publish(S.hierTopics.WC__TOURN_ACTION,JSON.stringify({action:"JOIN",tournamentGuid:T,timestamp:Date.now()})),c.textContent="Play",c.dataset.requiresJoin="false",setTimeout(()=>{u(p),console.log("[app_events] JOIN triggered, advancing carousel to PLAY page")},500)}else u(p),console.log("[app_events] Advancing carousel to PLAY page")}),J.subscribe(e.hierTopics.WC__APP__HEAD_TOP,(p,g)=>{JSON.parse(g);let c=10;switch(p){case"WC.APP.HEAD_TOP.USER_PROFILE":c=10,neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_my_profile"),setTimeout(()=>{neodigmCarousel.nav({id:"caro-user_profile",nav:"caro-page__badges"})},1200);break;case"WC.APP.HEAD_TOP.LOGO":const m=e.appSession.session_app.version,_=new Date().getFullYear();m&&neodigmToast&&neodigmToast.q(`${m} 1/10/2026, 10:13:40 AM|© ${_} Bet Max Action`,"night");break}c&&neodigmWired4Sound&&neodigmWired4Sound.sound(c).vibrate()});let d=null,h=null;J.subscribe(e.hierTopics.WC__TOURN_ACTION,(p,g)=>{const c=JSON.parse(g);let m=0;switch(c?.action){case"JOIN":m=512;break;case"PLAY":m=8;break;case"INFO":m=8;break}if(m){d=c?.tournamentGuid,h=c?.action,console.log("[app_events] Storing pending tourn data:",d,h);const _=e.appSession?.session_user?.guid,y=c?.tournamentGuid;_&&y?be.fetchBetSlips(_,y).then(T=>{if(T?.rows){const S={timestamp:Date.now(),source:"API",data:T.rows};e.pushcoreBetSlip(S),console.log("[app_events] Bet slips fetched:",T.rows.length,"items")}setTimeout(()=>{neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_play"),setTimeout(()=>{J.publish(e.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,JSON.stringify(T))},3e3)},m)}).catch(T=>{console.error("[app_events] Error fetching bet slips:",T),setTimeout(()=>{neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_play")},m)}):setTimeout(()=>{neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_play")},m)}}),J.subscribe(e.hierTopics.WC__TOURN_ACTION,(p,g)=>{const c=JSON.parse(g);let m=16;switch(c?.action){case"FOCUS":m=3;break;case"SPORT_ICON":m=10;break;case"JOIN":m=5;break;case"PLAY":m=16;break}m&&neodigmWired4Sound&&neodigmWired4Sound.sound(m).vibrate()}),J.subscribe(e.hierTopics.WC__TOURN_ACTION,(p,g)=>{const c=JSON.parse(g);let m=0,_="night";switch(neodigmOpt&&neodigmOpt.EVENT_SOUNDS&&(neodigmOpt.EVENT_SOUNDS=!1),c?.tournamentStatus){case"UPCOMING":_="success";break;case"LOCKED":_="warning";break;case"COMPLETED":_="danger";break}switch(c?.action){case"SPORT_ICON":c?.sportTitle==c?.sportDescription?m=c?.sportTitle:m=c?.sportTitle+"|"+c?.sportDescription;break}m&&neodigmToast&&neodigmToast.q(m,_)}),J.subscribe(e.hierTopics.WC__TOURN_ACTION,async(p,g)=>{const c=JSON.parse(g);if(c?.action==="JOIN"){const _=ye().appSession?.session_user?.guid;if(!_){console.error("No entity guid found in session"),typeof neodigmToast<"u"&&neodigmToast.q("Please sign in to join tournaments","warning");return}const y=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${c.tournamentGuid}"]`);y&&(y.setAttribute("data-bma-tourn-wait","true"),Zt.shootConfetti());const T={acctEntityGuid:_,tournamentGuid:c.tournamentGuid};try{const S={method:"POST",body:JSON.stringify(T),headers:be.genHeaders()};console.log("Posting to:",be.API_baseURI+"/bmac/"+be.API_ver+"/coreTournaments/join",T);const R=await(await fetch(be.API_baseURI+"/bmac/"+be.API_ver+"/coreTournaments/join",S)).json();if(console.log("Join response:",R),R.ok)typeof neodigmToast<"u"&&neodigmToast.q("Successfully joined tournament!","success");else{const w=R?.message||"Failed to join tournament";typeof neodigmToast<"u"&&neodigmToast.q(w,"danger"),y&&y.setAttribute("data-bma-tourn-wait","false")}}catch(S){console.error("Join tournament error:",S),typeof neodigmToast<"u"&&neodigmToast.q("Network error joining tournament","danger"),y&&y.setAttribute("data-bma-tourn-wait","false")}}}),J.subscribe(e.hierTopics.ROUTE__HOME_ONMOUNT,async(p,g)=>{console.log("[app_events] ROUTE__HOME_ONMOUNT event received");const c=ye();try{const m=await be.fetchTournaments();console.log("[app_events] Tournaments fetched:",m),m?.rows&&Array.isArray(m.rows)?(c.pushCoreTourn({timestamp:Date.now(),source:"API",data:m.rows}),console.log("[app_events] Pushed to coreTourn, length:",c.coreTourn.length),J.publish(c.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now()}))):console.warn("[app_events] Invalid API response format:",m)}catch(m){console.error("[app_events] Error fetching tournaments:",m),typeof neodigmToast<"u"&&neodigmToast.q("Failed to load tournaments","danger"),Zt.hardReload()}}),J.subscribe(e.hierTopics.ROUTE__HOME_HYDRATE,(p,g)=>{console.log("[app_events] ROUTE__HOME_HYDRATE event received");const c=ye();if(c.coreTourn.length===0){console.warn("[app_events] No tournament data in coreTourn array");return}const m=c.coreTourn[c.coreTourn.length-1],_=c.coreTourn.length>1?c.coreTourn[c.coreTourn.length-2]:null;console.log("[app_events] Hydrating with latest data:",m);const y=[];if(_){const R=m.data,w=_.data;R.forEach(D=>{const O=w.find(F=>F.guid===D.guid);O&&O.status!==D.status&&(console.log(`[app_events] Status changed for tournament ${D.guid}: ${O.status} -> ${D.status}`),y.push(D.guid))})}const T=c.appSession?.session_user?.guid,S=[...m.data].sort((R,w)=>{const D=R.status||R.class,O=w.status||w.class,F=R.entities?.guids||[],Y=w.entities?.guids||[],P=F.includes(T),V=Y.includes(T),$=(Ge,we)=>{const Ae=new Date(Ge.status_time||0).getTime();return new Date(we.status_time||0).getTime()-Ae},ne=D==="LOCKED"&&P,Z=O==="LOCKED"&&V;if(ne&&!Z)return-1;if(!ne&&Z)return 1;if(ne&&Z)return $(R,w);const j=D==="UPCOMING",Q=O==="UPCOMING";if(j&&!Q)return-1;if(!j&&Q)return 1;if(j&&Q)return $(R,w);const de=D==="COMPLETED"&&P,_e=O==="COMPLETED"&&V;if(de&&!_e)return-1;if(!de&&_e)return 1;if(de&&_e)return $(R,w);const Te=D==="COMPLETED"&&!P,ge=O==="COMPLETED"&&!V;return Te&&!ge?1:!Te&&ge?-1:$(R,w)}),x=un.categorizeTournaments(S,t,n,T);if(console.log(`[app_events] Categorized into ${x.length} categories for filter: ${t}/${n}`),window._homeRouteRenderCards&&typeof window._homeRouteRenderCards=="function"){if(window._homeRouteRenderCards(x,!0),setTimeout(()=>{a(),console.log("[app_events] Re-applied filter after hydration:",t)},100),y.length>0){const R=m.data;y.forEach(w=>{const D=R.find(O=>O.guid===w);if(D){const O=Math.floor(Math.random()*2e3)+1e3;setTimeout(()=>{J.publish(c.hierTopics.CANVAS__HYDRATE__STATUS,JSON.stringify({guid:w,status:D.status,timestamp:Date.now()}))},O)}})}}else console.warn("[app_events] window._homeRouteRenderCards not available")}),J.subscribe(e.hierTopics.SSE__CORE__TOURN_SYNC,(p,g)=>{console.log("[app_events] SSE__CORE__TOURN_SYNC event received:",g);const c=ye();try{const m=JSON.parse(g);console.log("[app_events] SSE tournament sync data:",m);const _=JSON.parse(m.msg);if(console.log("[app_events] Parsed tournaments array:",_),!Array.isArray(_)){console.warn("[app_events] SSE msg is not an array:",_);return}c.pushCoreTourn({timestamp:Date.now(),source:"SSE",data:_}),console.log("[app_events] Pushed SSE data to coreTourn, length:",c.coreTourn.length),J.publish(c.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"SSE"}))}catch(m){console.error("[app_events] Error processing SSE tournament sync:",m)}}),setTimeout(function(){neodigmSodaPop&&neodigmMarquee&&neodigmEnchantedCTA&&(neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{NeodigmClaire.showCanv("neodigm-sodapop",.5).setTheme(["warning","success"]).initCanvOn("neodigm-sodapop").waxOn("neodigm-sodapop")},1e3),neodigmMetronome.init().pause(800),neodigmMarquee.init().pause(1200),neodigmEnchantedCTA.init(),neodigmCarousel.init()}),neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{neodigmUtils.typeOn({q1st:"#caption__my-profile",msg:`${e.appSession.session_user.name}|${e.appSession.session_user.email}|${e.appSession.session_user.fname} ${e.appSession.session_user.lname}|My Profile`,mode:"LOOP",uniqueDelay:124});const p=e.appSession?.session_user?.guid;if(console.log("[app_events] User GUID:",p),console.log("[app_events] coreTourn length:",e.coreTourn.length),!p||e.coreTourn.length===0){console.warn("[app_events] Missing user GUID or tournament data");return}const c=e.coreTourn[e.coreTourn.length-1].data;console.log("[app_events] Processing tournaments:",c.length);let m=0,_=0,y=0;c.forEach((T,S)=>{if(!T.tags||!Array.isArray(T.tags)){console.log(`[app_events] Tournament ${S} has no tags or tags not an array`);return}T.tags.forEach((x,R)=>{if(typeof x=="object"&&x!==null&&x[p]){const w=x[p];w==="--badge__ribbon--gold"?m++:w==="--badge__ribbon--silver"?_++:w==="--badge__ribbon--bronze"&&y++}})}),setTimeout(()=>{let T=document.querySelectorAll(".badge-counter");if(T.length===0){const S=document.querySelector("neodigm-sodapop");S&&(T=S.querySelectorAll(".badge-counter"))}T.length>=3?(T[0].textContent=m,T[1].textContent=_,T[2].textContent=y,console.log("[app_events] Updated UI counters successfully")):console.warn("[app_events] Not enough counter elements found")},500)},1e3)},"sodapop_my_profile"),neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{const p=ye(),g=document.querySelector(".play-cntr");d&&(g.dataset.currentTournGuid=d),h&&(g.dataset.currentTournAction=h);const c=g?.dataset?.currentTournGuid,m=g?.dataset?.currentTournAction||"INFO";console.log("[app_events] sodapop_play opened - GUID:",c,"action:",m),(()=>{const R=document.getElementById("btn-join__play--id");if(!R||!c||p.coreTourn.length===0)return;const D=p.coreTourn[p.coreTourn.length-1].data.find(V=>V.guid===c);if(!D)return;const O=p.appSession?.session_user?.guid,F=D.entities?.guids?.includes(O),Y=D.status,P=m;R.style.display="none",!(Y==="COMPLETED"||Y==="LOCKED"&&!F)&&(R.style.display="",Y==="UPCOMING"&&!F?P==="INFO"?(R.textContent="Join",R.dataset.requiresJoin="true"):P==="PLAY"&&(R.textContent="Play",R.dataset.requiresJoin="false"):(R.textContent="Play",R.dataset.requiresJoin="false"))})(),(()=>{if(!c||p.coreTourn.length===0)return;const w=p.coreTourn[p.coreTourn.length-1].data.find($=>$.guid===c);if(!w)return;const D=document.getElementById("pop-play__caro-info-summary1--id");if(!D)return;const O=$=>{if(!$)return"N/A";const ne=new Date($);return isNaN(ne.getTime())?"Invalid Date":ne.toLocaleString(void 0,{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit",hour12:!0})},F=$=>{switch($){case"UPCOMING":return"var(--app-core-color--yellow-3__dark--brand, #F7C60D)";case"LOCKED":return"var(--app-core-color--green-3__dark--brand, #14b963)";case"COMPLETED":return"var(--app-core-color--gray-6__dark--brand, #969696)";default:return"#fff"}},Y=[{caption:"Start",value:O(w.window_start_time)},{caption:"End",value:O(w.window_end_time)},{caption:"Status",value:w.status||"Unknown",color:F(w.status)},{caption:"Entry Fee",value:"FREE"},{caption:"TD$",value:`${w.tournament_dollars||0}`},{caption:"Participants",value:`${w.entities?.guids?.length||0} / ${w.entities?.max||0}`},{caption:"Games",value:`${w.matches_expanded.length||0}`}];D.innerHTML=Y.map($=>`
                                <div class="info-card">
                                    <div class="info-card__caption">${$.caption}</div>
                                    <div class="info-card__value" ${$.color?`style="color: ${$.color}"`:""}>${$.value}</div>
                                </div>
                            `).join("");const P=document.getElementById("pop-play__caro-info-summary2--id");P&&w.sports_allowed&&Array.isArray(w.sports_allowed)&&(P.innerHTML=w.sports_allowed.map($=>{const ne=$.key||$,Z=Hn.find(Q=>Q.key===ne),j=Z?Z.group:"default";return`<bma-sport-icon sport="${ne}" data-sport-group="${j}"></bma-sport-icon>`}).join(""));const V=document.getElementById("pop-play__caro-info-list--id");V&&w.matches_expanded&&Array.isArray(w.matches_expanded)&&(V.innerHTML=w.matches_expanded.map($=>{const ne=$.scoreboard_data?typeof $.scoreboard_data=="string"?$.scoreboard_data:JSON.stringify($.scoreboard_data):"";return`
                                        <bma-match-status
                                            data-match-guid="${$.guid||$.odds_id||$.id||""}"
                                            data-match-title="${$.short_title||$.title||"Match"}"
                                            data-match-scheduled-at="${$.scheduled_at||""}"
                                            data-match-home-team="${$.home_team_id||"Home"}"
                                            data-match-away-team="${$.away_team_id||"Away"}"
                                            data-match-home-score="${$.home_team_score!==null&&$.home_team_score!==void 0?$.home_team_score:""}"
                                            data-match-away-score="${$.away_team_score!==null&&$.away_team_score!==void 0?$.away_team_score:""}"
                                            data-match-scoreboard="${ne.replace(/"/g,"&quot;")}"
                                            data-match-sport-id="${$.sport_id||""}"
                                            data-sync-theme="dark"
                                        ></bma-match-status>
                                    `}).join(""))})(),setTimeout(()=>{const R=p.appSession?.session_user?.guid;c&&be.fetchLeaderboard(c).then(w=>{const D=document.getElementById("pop-play__caro-leaderboard--id");if(!D)return;const O=w?.data||w?.rows;if(O&&O.length>0){const Y=p.coreTourn[p.coreTourn.length-1]?.data.find(P=>P.guid===c);D.innerHTML=O.map((P,V)=>{let $="";if(Y?.tags&&Array.isArray(Y.tags)){const Z=Y.tags.find(j=>typeof j=="object"&&j!==null&&j[P.user_guid]?j[P.user_guid].startsWith("--badge__ribbon--"):!1);if(Z){const j=Z[P.user_guid];j==="--badge__ribbon--gold"?$="badge-trophy--gold":j==="--badge__ribbon--silver"?$="badge-trophy--silver":j==="--badge__ribbon--bronze"&&($="badge-trophy--bronze")}}const ne=P.combined_betslips?typeof P.combined_betslips=="string"?P.combined_betslips:JSON.stringify(P.combined_betslips):"[]";return`
                                                <bma-leaderboard-card
                                                    data-rank="${V+1}"
                                                    data-username="${P.username||"Unknown"}"
                                                    data-user-guid="${P.user_guid||""}"
                                                    data-tournament-dollars="${P.calculated_tournament_dollars||0}"
                                                    data-total-betslips="${P.total_betslips||0}"
                                                    data-total-payout="${P.total_payout||0}"
                                                    data-combined-betslips="${ne.replace(/"/g,"&quot;")}"
                                                    data-badge-class="${$}"
                                                    data-is-current-user="${P.user_guid===R}"
                                                    data-sync-theme="dark"
                                                ></bma-leaderboard-card>
                                            `}).join("")}else D.innerHTML=`
                                            <div class="leaderboard-empty">
                                                <p>No leaderboard data available yet.</p>
                                                <p class="leaderboard-empty__subtitle">Be the first to place a bet!</p>
                                            </div>
                                        `}).catch(w=>{console.error("[app_events] Error fetching leaderboard:",w);const D=document.getElementById("pop-play__caro-leaderboard--id");D&&(D.innerHTML=`
                                            <div class="leaderboard-empty">
                                                <p>Unable to load leaderboard data.</p>
                                            </div>
                                        `)})},600);let T=m==="PLAY"||m==="JOIN"?"PLAY":m;if(!c||p.coreTourn.length===0||p.coreTourn[p.coreTourn.length-1].data.find(D=>D.guid===c)?.status==="COMPLETED"&&(T="LEADERBOARD",console.log("[app_events] Tournament is COMPLETED, defaulting to LEADERBOARD")),T){const R=`ROUTE.HOME.SODAPOP_PLAY.${T}`;console.log("[app_events] Publishing initial topic:",R),J.publish(R,JSON.stringify({tournamentGuid:c,timestamp:Date.now()}))}if(!c||p.coreTourn.length===0)return;const x=p.coreTourn[p.coreTourn.length-1].data.find(R=>R.guid===c);un.renderMatchCards(x),neodigmUtils.typeOn({q1st:"#pop-play__tourn-caption--id",msg:`${x.caption}`,mode:"",uniqueDelay:62}),neodigmUtils.typeOn({q1st:"#pop-play__tourn-tagline--id",msg:`${x.tagline}`,mode:"",uniqueDelay:91})},1e3)},"sodapop_play"))},3e3),setTimeout(function(){neodigmSodaPop&&NeodigmClaire&&neodigmSodaPop.setOnClose(function(){return!0})},4e3)}},_f={__name:"App",setup(e){const t=ft(),n=ye();return setTimeout(function(){neodigmOpt.mvvLegit&&mvvLegit.setNavConroller((a=null)=>{neodigmOpt.N55_DEBUG_lOG&&neodigmToast.q(`Legit route: ${a}`,"primary"),t.push({name:a})}).setOnState((a=null)=>{a&&neodigmOpt.ROOT&&(neodigmOpt.ROOT.dataset.mvvLegit=a)}).init({BASE:be.API_baseURI})},2e3),setTimeout(()=>{n.appCLIFeatures.features.sse.state&&da.establishSSE("https://machfive-bmacdev-rest.onrender.com/v5/sse?appid=BMACORE&sseid=user%40example.com&lastkey=123",n.appSession.session_user.guid,n,!0)},3e3),setTimeout(()=>{un.bindAppListeners(n)},3e3),t.beforeEach((a,s,r)=>{a.name=="splash_route"||a.name&&mvvLegit&&mvvLegit.isRouteAllowed(a.name)?r():r(!1)}),(a,s)=>(Qe(),ar(Mt(Pi),null,{default:Xa(({Component:r})=>[$e(Dc,{name:"slide-left"},{default:Xa(()=>[(Qe(),ar(Fl(r)))]),_:2},1024)]),_:1}))}};class bf extends HTMLElement{constructor(){super(),this.clockInterval=null}connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this.startClock()}disconnectedCallback(){this.clockInterval&&clearInterval(this.clockInterval)}static get observedAttributes(){return["data-sync-theme","data-user-name"]}attributeChangedCallback(t,n,a){this.shadowRoot&&n!==a&&this.render()}startClock(){this.updateTime(),this.clockInterval=setInterval(()=>{this.updateTime()},24e3)}updateTime(){const t=this.shadowRoot?.querySelector(".status-time");if(t){const n=new Date,a=n.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0}),s=n.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});t.textContent=`${s} ${a}`}}handleLogoClick(t){t.preventDefault(),J.publish("WC.APP.HEAD_TOP.LOGO",JSON.stringify({timestamp:Date.now()}))}handleProfileClick(t){t.preventDefault(),J.publish("WC.APP.HEAD_TOP.USER_PROFILE",JSON.stringify({timestamp:Date.now()}))}render(){const a=(document.getElementById("app")?.getAttribute("data-sync-theme")||"dark")==="dark",s=this.getAttribute("data-user-name")||"Guest";this.shadowRoot.innerHTML=`
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
    `;const r=this.shadowRoot.querySelector("#logoLink"),o=this.shadowRoot.querySelector("#profileIcon");r&&r.addEventListener("click",i=>this.handleLogoClick(i)),o&&(o.addEventListener("click",i=>this.handleProfileClick(i)),o.addEventListener("keypress",i=>{(i.key==="Enter"||i.key===" ")&&this.handleProfileClick(i)})),this.updateTime()}}customElements.define("bma-app-head-top",bf);class yf extends HTMLElement{constructor(){super(),this.selectedTab="head_mid_lobby"}connectedCallback(){this.attachShadow({mode:"open"}),this.render()}static get observedAttributes(){return["data-sync-theme","data-selected-tab"]}attributeChangedCallback(t,n,a){this.shadowRoot&&n!==a&&(t==="data-selected-tab"&&(this.selectedTab=a||"head_mid_lobby"),this.render())}handleTabClick(t,n){this.selectedTab=t,this.setAttribute("data-selected-tab",t),J.publish(n,JSON.stringify({tab:t,timestamp:Date.now()})),this.render()}render(){const a=(document.getElementById("app")?.getAttribute("data-sync-theme")||"dark")==="dark",s=[{name:"head_mid_lobby",caption:"Tournament Lobby",mobileCaption:"Lobby",topic:"WC.APP.HEAD_MID.HEAD_MID_LOBBY"},{name:"head_mid_my",caption:"My Tournaments",mobileCaption:"My Tourneys",topic:"WC.APP.HEAD_MID.HEAD_MID_MY"},{name:"head_mid_completed",caption:"Completed Tournaments",mobileCaption:"Completed Tourneys",topic:"WC.APP.HEAD_MID.HEAD_MID_COMPLETED"},{name:"head_mid_leaderboard",caption:"Leaderboard Ranking",mobileCaption:"Leaderboard",topic:"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD"},{name:"head_mid_squad",caption:"My Squads",mobileCaption:"Squads",topic:"WC.APP.HEAD_MID.HEAD_MID_SQUAD"}],r=o=>`
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
    `,s.forEach(o=>{const i=this.shadowRoot.querySelector(`[data-tab="${o.name}"]`);i&&(i.addEventListener("click",()=>this.handleTabClick(o.name,o.topic)),i.addEventListener("keypress",l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),this.handleTabClick(o.name,o.topic))}))})}}customElements.define("bma-app-head-mid",yf);class vf extends HTMLElement{constructor(){super(),this.selectedChip="all",this.savedScrollPosition=0}connectedCallback(){this.attachShadow({mode:"open"}),this.render()}static get observedAttributes(){return["data-sync-theme","data-selected-chip"]}attributeChangedCallback(t,n,a){this.shadowRoot&&n!==a&&(t==="data-selected-chip"&&(this.selectedChip=a||"all"),this.render())}handleChipClick(t,n){const a=this.shadowRoot.querySelector(".chips-container");a&&(this.savedScrollPosition=a.scrollLeft),this.selectedChip=t,this.setAttribute("data-selected-chip",t),J.publish("WC.APP.HEAD_SPORTS",JSON.stringify({key:t,group:n,timestamp:Date.now()})),this.render()}scrollToPrev(){const t=this.shadowRoot.querySelector(".chips-container");t&&(t.scrollBy({left:-256,behavior:"smooth"}),J.publish("WC.APP.HEAD_SPORTS.PREV",JSON.stringify({timestamp:Date.now()})))}scrollToNext(){const t=this.shadowRoot.querySelector(".chips-container");t&&(t.scrollBy({left:256,behavior:"smooth"}),J.publish("WC.APP.HEAD_SPORTS.NEXT",JSON.stringify({timestamp:Date.now()})))}initDragScroll(){const t=this.shadowRoot.querySelector(".chips-container");if(!t)return;let n=!1,a,s;t.addEventListener("mousedown",r=>{n=!0,t.style.cursor="grabbing",a=r.pageX-t.offsetLeft,s=t.scrollLeft,J.publish("WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START",JSON.stringify({action:"start",scrollPosition:s,timestamp:Date.now()}))}),t.addEventListener("mouseleave",()=>{n=!1,t.style.cursor="grab"}),t.addEventListener("mouseup",()=>{n=!1,t.style.cursor="grab"}),t.addEventListener("mousemove",r=>{if(!n)return;r.preventDefault();const i=(r.pageX-t.offsetLeft-a)*2;t.scrollLeft=s-i})}render(){const a=(document.getElementById("app")?.getAttribute("data-sync-theme")||"dark")==="dark",i=[...(ye().appMeta?.sports||[]).filter(p=>p.active===!0)].sort((p,g)=>{const c=(p.title||p.description||"").toLowerCase(),m=(g.title||g.description||"").toLowerCase();return c.localeCompare(m)}),l=[{key:"all",group:"All",title:"ALL",description:"All Sports"},...i],f=p=>{const g=this.selectedChip===p.key,c=p.key==="all";return`
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
            ${l.map(p=>f(p)).join("")}
          </div>
        </div>

        <aside class="nav-icon nav-next nav-icon__next" id="navNext" role="button" tabindex="0" aria-label="Scroll right"></aside>
      </div>
    `,l.forEach(p=>{const g=this.shadowRoot.querySelector(`[data-chip="${p.key}"]`);g&&g.addEventListener("click",()=>this.handleChipClick(p.key,p.group))});const u=this.shadowRoot.querySelector("#navPrev"),d=this.shadowRoot.querySelector("#navNext");u&&u.addEventListener("click",()=>this.scrollToPrev()),d&&d.addEventListener("click",()=>this.scrollToNext()),this.initDragScroll();const h=this.shadowRoot.querySelector(".chips-container");h&&this.savedScrollPosition>0&&(h.scrollLeft=this.savedScrollPosition)}}customElements.define("bma-app-head-sports",vf);class Tf extends HTMLElement{constructor(){super(),this.selectedItem="foot_all_sports"}connectedCallback(){this.attachShadow({mode:"open"}),this.render()}static get observedAttributes(){return["data-sync-theme","data-selected-item"]}attributeChangedCallback(t,n,a){this.shadowRoot&&n!==a&&(t==="data-selected-item"&&(this.selectedItem=a||"foot_all_sports"),this.render())}handleItemClick(t,n){this.selectedItem=t,this.setAttribute("data-selected-item",t),J.publish(n,JSON.stringify({item:t,timestamp:Date.now()})),this.render()}render(){const a=(document.getElementById("app")?.getAttribute("data-sync-theme")||"dark")==="dark",s=[{name:"foot_all_sports",caption:"Lobby",iconVar:"--nav-icon__sports--",topic:"WC.APP.FOOT.ALL_SPORTS"},{name:"foot_my_tourneys",caption:"My Tourneys",iconVar:"--nav-icon__trophy--",topic:"WC.APP.FOOT.MY_TOURNEYS"},{name:"foot_leaderboard",caption:"Leaderboard",iconVar:"--nav-icon__leaderboard--",topic:"WC.APP.FOOT.LEADERBOARD"},{name:"foot_my_account",caption:"My Profile",iconVar:"--nav-icon__my_profile_circle--",topic:"WC.APP.FOOT.MY_PROFILE"}],r=o=>`
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
    `,s.forEach(o=>{const i=this.shadowRoot.querySelector(`[data-item="${o.name}"]`);i&&(i.addEventListener("click",()=>this.handleItemClick(o.name,o.topic)),i.addEventListener("keypress",l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),this.handleItemClick(o.name,o.topic))}))})}}customElements.define("bma-app-foot",Tf);class Ef extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}static get observedAttributes(){return["data-corebetslip"]}attributeChangedCallback(t,n,a){n!==a&&this.render()}get betSlipData(){const t=this.getAttribute("data-corebetslip");if(!t)return null;try{return JSON.parse(t)}catch(n){return console.error("[bma-bet-existing] Failed to parse data-corebetslip:",n),null}}render(){const t=this.betSlipData;if(!t){this.shadowRoot.innerHTML="<div>Invalid bet data</div>";return}const n=t.bet||[];if(n.length===0){this.shadowRoot.innerHTML="<div>No bet data</div>";return}const a=n[0],s=a.short_title||"Match Info N/A",o=Object.keys(a).filter(c=>c!=="short_title")[0]||"Unknown Team",i=a[o],l=i.odds||"N/A",f=i.type||"N/A",u=parseFloat(i.stake||0).toFixed(2),d=parseFloat(i.payout||0).toFixed(2),h=i.reconciled!==!1,p=t.status_time?Zt.formatDateLocal(t.status_time):"";let g=o;if(f==="spread"&&i.point){const c=parseFloat(i.point)>0?`+${i.point}`:i.point;g=`${o} ${c}`}else f==="total"&&i.point&&(g=`${i.team==="over"?"Over":"Under"} ${i.point}`);this.shadowRoot.innerHTML=`
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
          <div class="content_stake_text">${u}</div>

          <!-- Row 2 -->
          <div class="content_type">${f.toUpperCase()}</div>
          <div></div>
          <div></div>

          <!-- Row 3 (payout only) -->
          <div></div>
          <div></div>
          <div class="content_payout ${h?"":"unreconciled"}">Payout: ${d}</div>
        </div>
      </div>
    `}}customElements.define("bma-bet-existing",Ef);const Wr=`
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
`;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{document.body.insertAdjacentHTML("beforeend",Wr)}):document.body.insertAdjacentHTML("beforeend",Wr);window.deferredPWAPrompt=null;window.addEventListener("beforeinstallprompt",e=>{console.log("[Global] beforeinstallprompt event fired"),e.preventDefault(),window.deferredPWAPrompt=e,window.dispatchEvent(new CustomEvent("pwa-installable"))});window.addEventListener("appinstalled",()=>{console.log("[Global] appinstalled event fired"),window.deferredPWAPrompt=null,window.dispatchEvent(new CustomEvent("pwa-installed"))});const Fs=iu(_f);Fs.use(uu());Fs.use(ps);Fs.mount("#app");if("serviceWorker"in navigator){let e=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{e||(e=!0,window.neodigmToast&&window.neodigmToast.q("App updated! Reloading...","success"),setTimeout(()=>{window.location.reload()},1e3))}),document.addEventListener("visibilitychange",()=>{document.hidden||navigator.serviceWorker.getRegistration().then(t=>{t?.update()})})}window.addEventListener("resize",e=>{window.requestAnimationFrame(()=>{neodigmMetronome.subscribe(()=>{neodigmMetronome.unsubscribe(303),neodigmCarousel&&[...document.querySelectorAll("neodigm-carousel")].forEach(n=>{neodigmCarousel.init().nav({id:n.id,nav:"resize"},!1)})},303)})});
