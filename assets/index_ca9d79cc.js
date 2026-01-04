(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();function fs(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const me={},cn=[],dt=()=>{},Vo=()=>!1,da=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),hs=e=>e.startsWith("onUpdate:"),Ae=Object.assign,gs=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ni=Object.prototype.hasOwnProperty,de=(e,t)=>Ni.call(e,t),ae=Array.isArray,un=e=>pa(e)==="[object Map]",zo=e=>pa(e)==="[object Set]",oe=e=>typeof e=="function",Ee=e=>typeof e=="string",Ut=e=>typeof e=="symbol",be=e=>e!==null&&typeof e=="object",Qo=e=>(be(e)||oe(e))&&oe(e.then)&&oe(e.catch),Xo=Object.prototype.toString,pa=e=>Xo.call(e),Li=e=>pa(e).slice(8,-1),Zo=e=>pa(e)==="[object Object]",ms=e=>Ee(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,En=fs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fa=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},Ii=/-\w/g,ze=fa(e=>e.replace(Ii,t=>t.slice(1).toUpperCase())),Di=/\B([A-Z])/g,$t=fa(e=>e.replace(Di,"-$1").toLowerCase()),ha=fa(e=>e.charAt(0).toUpperCase()+e.slice(1)),ka=fa(e=>e?`on${ha(e)}`:""),It=(e,t)=>!Object.is(e,t),wa=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},er=(e,t,n,a=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:a,value:n})},Mi=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Bi=e=>{const t=Ee(e)?Number(e):NaN;return isNaN(t)?e:t};let Ks;const ga=()=>Ks||(Ks=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function _s(e){if(ae(e)){const t={};for(let n=0;n<e.length;n++){const a=e[n],s=Ee(a)?Hi(a):_s(a);if(s)for(const o in s)t[o]=s[o]}return t}else if(Ee(e)||be(e))return e}const Fi=/;(?![^(]*\))/g,Ui=/:([^]+)/,$i=/\/\*[^]*?\*\//g;function Hi(e){const t={};return e.replace($i,"").split(Fi).forEach(n=>{if(n){const a=n.split(Ui);a.length>1&&(t[a[0].trim()]=a[1].trim())}}),t}function Mt(e){let t="";if(Ee(e))t=e;else if(ae(e))for(let n=0;n<e.length;n++){const a=Mt(e[n]);a&&(t+=a+" ")}else if(be(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ki="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Yi=fs(Ki);function tr(e){return!!e||e===""}const nr=e=>!!(e&&e.__v_isRef===!0),ar=e=>Ee(e)?e:e==null?"":ae(e)||be(e)&&(e.toString===Xo||!oe(e.toString))?nr(e)?ar(e.value):JSON.stringify(e,sr,2):String(e),sr=(e,t)=>nr(t)?sr(e,t.value):un(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[a,s],o)=>(n[Ra(a,o)+" =>"]=s,n),{})}:zo(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Ra(n))}:Ut(t)?Ra(t):be(t)&&!ae(t)&&!Zo(t)?String(t):t,Ra=(e,t="")=>{var n;return Ut(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};let Pe;class or{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Pe,!t&&Pe&&(this.index=(Pe.scopes||(Pe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Pe;try{return Pe=this,t()}finally{Pe=n}}}on(){++this._on===1&&(this.prevScope=Pe,Pe=this)}off(){this._on>0&&--this._on===0&&(Pe=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,a;for(n=0,a=this.effects.length;n<a;n++)this.effects[n].stop();for(this.effects.length=0,n=0,a=this.cleanups.length;n<a;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,a=this.scopes.length;n<a;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function rr(e){return new or(e)}function ir(){return Pe}function ji(e,t=!1){Pe&&Pe.cleanups.push(e)}let ge;const xa=new WeakSet;class lr{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Pe&&Pe.active&&Pe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,xa.has(this)&&(xa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ur(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ys(this),dr(this);const t=ge,n=Ze;ge=this,Ze=!0;try{return this.fn()}finally{pr(this),ge=t,Ze=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)vs(t);this.deps=this.depsTail=void 0,Ys(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?xa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){qa(this)&&this.run()}get dirty(){return qa(this)}}let cr=0,Sn,An;function ur(e,t=!1){if(e.flags|=8,t){e.next=An,An=e;return}e.next=Sn,Sn=e}function bs(){cr++}function ys(){if(--cr>0)return;if(An){let t=An;for(An=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Sn;){let t=Sn;for(Sn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(a){e||(e=a)}t=n}}if(e)throw e}function dr(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function pr(e){let t,n=e.depsTail,a=n;for(;a;){const s=a.prevDep;a.version===-1?(a===n&&(n=s),vs(a),Gi(a)):t=a,a.dep.activeLink=a.prevActiveLink,a.prevActiveLink=void 0,a=s}e.deps=t,e.depsTail=n}function qa(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(fr(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function fr(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Nn)||(e.globalVersion=Nn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!qa(e))))return;e.flags|=2;const t=e.dep,n=ge,a=Ze;ge=e,Ze=!0;try{dr(e);const s=e.fn(e._value);(t.version===0||It(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{ge=n,Ze=a,pr(e),e.flags&=-3}}function vs(e,t=!1){const{dep:n,prevSub:a,nextSub:s}=e;if(a&&(a.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=a,e.nextSub=void 0),n.subs===e&&(n.subs=a,!a&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)vs(o,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Gi(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Ze=!0;const hr=[];function Et(){hr.push(Ze),Ze=!1}function St(){const e=hr.pop();Ze=e===void 0?!0:e}function Ys(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ge;ge=void 0;try{t()}finally{ge=n}}}let Nn=0;class qi{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ts{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ge||!Ze||ge===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ge)n=this.activeLink=new qi(ge,this),ge.deps?(n.prevDep=ge.depsTail,ge.depsTail.nextDep=n,ge.depsTail=n):ge.deps=ge.depsTail=n,gr(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const a=n.nextDep;a.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=a),n.prevDep=ge.depsTail,n.nextDep=void 0,ge.depsTail.nextDep=n,ge.depsTail=n,ge.deps===n&&(ge.deps=a)}return n}trigger(t){this.version++,Nn++,this.notify(t)}notify(t){bs();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ys()}}}function gr(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let a=t.deps;a;a=a.nextDep)gr(a)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const ea=new WeakMap,Zt=Symbol(""),Wa=Symbol(""),Ln=Symbol("");function ke(e,t,n){if(Ze&&ge){let a=ea.get(e);a||ea.set(e,a=new Map);let s=a.get(n);s||(a.set(n,s=new Ts),s.map=a,s.key=n),s.track()}}function vt(e,t,n,a,s,o){const r=ea.get(e);if(!r){Nn++;return}const i=l=>{l&&l.trigger()};if(bs(),t==="clear")r.forEach(i);else{const l=ae(e),p=l&&ms(n);if(l&&n==="length"){const u=Number(a);r.forEach((f,g)=>{(g==="length"||g===Ln||!Ut(g)&&g>=u)&&i(f)})}else switch((n!==void 0||r.has(void 0))&&i(r.get(n)),p&&i(r.get(Ln)),t){case"add":l?p&&i(r.get("length")):(i(r.get(Zt)),un(e)&&i(r.get(Wa)));break;case"delete":l||(i(r.get(Zt)),un(e)&&i(r.get(Wa)));break;case"set":un(e)&&i(r.get(Zt));break}}ys()}function Wi(e,t){const n=ea.get(e);return n&&n.get(t)}function an(e){const t=le(e);return t===e?t:(ke(t,"iterate",Ln),et(e)?t:t.map(Le))}function Es(e){return ke(e=le(e),"iterate",Ln),e}const Ji={__proto__:null,[Symbol.iterator](){return Ca(this,Symbol.iterator,Le)},concat(...e){return an(this).concat(...e.map(t=>ae(t)?an(t):t))},entries(){return Ca(this,"entries",e=>(e[1]=Le(e[1]),e))},every(e,t){return ht(this,"every",e,t,void 0,arguments)},filter(e,t){return ht(this,"filter",e,t,n=>n.map(Le),arguments)},find(e,t){return ht(this,"find",e,t,Le,arguments)},findIndex(e,t){return ht(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return ht(this,"findLast",e,t,Le,arguments)},findLastIndex(e,t){return ht(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return ht(this,"forEach",e,t,void 0,arguments)},includes(...e){return Na(this,"includes",e)},indexOf(...e){return Na(this,"indexOf",e)},join(e){return an(this).join(e)},lastIndexOf(...e){return Na(this,"lastIndexOf",e)},map(e,t){return ht(this,"map",e,t,void 0,arguments)},pop(){return mn(this,"pop")},push(...e){return mn(this,"push",e)},reduce(e,...t){return js(this,"reduce",e,t)},reduceRight(e,...t){return js(this,"reduceRight",e,t)},shift(){return mn(this,"shift")},some(e,t){return ht(this,"some",e,t,void 0,arguments)},splice(...e){return mn(this,"splice",e)},toReversed(){return an(this).toReversed()},toSorted(e){return an(this).toSorted(e)},toSpliced(...e){return an(this).toSpliced(...e)},unshift(...e){return mn(this,"unshift",e)},values(){return Ca(this,"values",Le)}};function Ca(e,t,n){const a=Es(e),s=a[t]();return a!==e&&!et(e)&&(s._next=s.next,s.next=()=>{const o=s._next();return o.done||(o.value=n(o.value)),o}),s}const Vi=Array.prototype;function ht(e,t,n,a,s,o){const r=Es(e),i=r!==e&&!et(e),l=r[t];if(l!==Vi[t]){const f=l.apply(e,o);return i?Le(f):f}let p=n;r!==e&&(i?p=function(f,g){return n.call(this,Le(f),g,e)}:n.length>2&&(p=function(f,g){return n.call(this,f,g,e)}));const u=l.call(r,p,a);return i&&s?s(u):u}function js(e,t,n,a){const s=Es(e);let o=n;return s!==e&&(et(e)?n.length>3&&(o=function(r,i,l){return n.call(this,r,i,l,e)}):o=function(r,i,l){return n.call(this,r,Le(i),l,e)}),s[t](o,...a)}function Na(e,t,n){const a=le(e);ke(a,"iterate",Ln);const s=a[t](...n);return(s===-1||s===!1)&&Os(n[0])?(n[0]=le(n[0]),a[t](...n)):s}function mn(e,t,n=[]){Et(),bs();const a=le(e)[t].apply(e,n);return ys(),St(),a}const zi=fs("__proto__,__v_isRef,__isVue"),mr=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ut));function Qi(e){Ut(e)||(e=String(e));const t=le(this);return ke(t,"has",e),t.hasOwnProperty(e)}class _r{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,a){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return o;if(n==="__v_raw")return a===(s?o?il:Tr:o?vr:yr).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(a)?t:void 0;const r=ae(t);if(!s){let l;if(r&&(l=Ji[n]))return l;if(n==="hasOwnProperty")return Qi}const i=Reflect.get(t,n,Te(t)?t:a);if((Ut(n)?mr.has(n):zi(n))||(s||ke(t,"get",n),o))return i;if(Te(i)){const l=r&&ms(n)?i:i.value;return s&&be(l)?Va(l):l}return be(i)?s?Va(i):Tt(i):i}}class br extends _r{constructor(t=!1){super(!1,t)}set(t,n,a,s){let o=t[n];if(!this._isShallow){const l=nn(o);if(!et(a)&&!nn(a)&&(o=le(o),a=le(a)),!ae(t)&&Te(o)&&!Te(a))return l||(o.value=a),!0}const r=ae(t)&&ms(n)?Number(n)<t.length:de(t,n),i=Reflect.set(t,n,a,Te(t)?t:s);return t===le(s)&&(r?It(a,o)&&vt(t,"set",n,a):vt(t,"add",n,a)),i}deleteProperty(t,n){const a=de(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&a&&vt(t,"delete",n,void 0),s}has(t,n){const a=Reflect.has(t,n);return(!Ut(n)||!mr.has(n))&&ke(t,"has",n),a}ownKeys(t){return ke(t,"iterate",ae(t)?"length":Zt),Reflect.ownKeys(t)}}class Xi extends _r{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Zi=new br,el=new Xi,tl=new br(!0);const Ja=e=>e,jn=e=>Reflect.getPrototypeOf(e);function nl(e,t,n){return function(...a){const s=this.__v_raw,o=le(s),r=un(o),i=e==="entries"||e===Symbol.iterator&&r,l=e==="keys"&&r,p=s[e](...a),u=n?Ja:t?za:Le;return!t&&ke(o,"iterate",l?Wa:Zt),{next(){const{value:f,done:g}=p.next();return g?{value:f,done:g}:{value:i?[u(f[0]),u(f[1])]:u(f),done:g}},[Symbol.iterator](){return this}}}}function Gn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function al(e,t){const n={get(s){const o=this.__v_raw,r=le(o),i=le(s);e||(It(s,i)&&ke(r,"get",s),ke(r,"get",i));const{has:l}=jn(r),p=t?Ja:e?za:Le;if(l.call(r,s))return p(o.get(s));if(l.call(r,i))return p(o.get(i));o!==r&&o.get(s)},get size(){const s=this.__v_raw;return!e&&ke(le(s),"iterate",Zt),s.size},has(s){const o=this.__v_raw,r=le(o),i=le(s);return e||(It(s,i)&&ke(r,"has",s),ke(r,"has",i)),s===i?o.has(s):o.has(s)||o.has(i)},forEach(s,o){const r=this,i=r.__v_raw,l=le(i),p=t?Ja:e?za:Le;return!e&&ke(l,"iterate",Zt),i.forEach((u,f)=>s.call(o,p(u),p(f),r))}};return Ae(n,e?{add:Gn("add"),set:Gn("set"),delete:Gn("delete"),clear:Gn("clear")}:{add(s){!t&&!et(s)&&!nn(s)&&(s=le(s));const o=le(this);return jn(o).has.call(o,s)||(o.add(s),vt(o,"add",s,s)),this},set(s,o){!t&&!et(o)&&!nn(o)&&(o=le(o));const r=le(this),{has:i,get:l}=jn(r);let p=i.call(r,s);p||(s=le(s),p=i.call(r,s));const u=l.call(r,s);return r.set(s,o),p?It(o,u)&&vt(r,"set",s,o):vt(r,"add",s,o),this},delete(s){const o=le(this),{has:r,get:i}=jn(o);let l=r.call(o,s);l||(s=le(s),l=r.call(o,s)),i&&i.call(o,s);const p=o.delete(s);return l&&vt(o,"delete",s,void 0),p},clear(){const s=le(this),o=s.size!==0,r=s.clear();return o&&vt(s,"clear",void 0,void 0),r}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=nl(s,e,t)}),n}function Ss(e,t){const n=al(e,t);return(a,s,o)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?a:Reflect.get(de(n,s)&&s in a?n:a,s,o)}const sl={get:Ss(!1,!1)},ol={get:Ss(!1,!0)},rl={get:Ss(!0,!1)};const yr=new WeakMap,vr=new WeakMap,Tr=new WeakMap,il=new WeakMap;function ll(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function cl(e){return e.__v_skip||!Object.isExtensible(e)?0:ll(Li(e))}function Tt(e){return nn(e)?e:As(e,!1,Zi,sl,yr)}function Er(e){return As(e,!1,tl,ol,vr)}function Va(e){return As(e,!0,el,rl,Tr)}function As(e,t,n,a,s){if(!be(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=cl(e);if(o===0)return e;const r=s.get(e);if(r)return r;const i=new Proxy(e,o===2?a:n);return s.set(e,i),i}function en(e){return nn(e)?en(e.__v_raw):!!(e&&e.__v_isReactive)}function nn(e){return!!(e&&e.__v_isReadonly)}function et(e){return!!(e&&e.__v_isShallow)}function Os(e){return e?!!e.__v_raw:!1}function le(e){const t=e&&e.__v_raw;return t?le(t):e}function Ps(e){return!de(e,"__v_skip")&&Object.isExtensible(e)&&er(e,"__v_skip",!0),e}const Le=e=>be(e)?Tt(e):e,za=e=>be(e)?Va(e):e;function Te(e){return e?e.__v_isRef===!0:!1}function Je(e){return Sr(e,!1)}function ul(e){return Sr(e,!0)}function Sr(e,t){return Te(e)?e:new dl(e,t)}class dl{constructor(t,n){this.dep=new Ts,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:le(t),this._value=n?t:Le(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,a=this.__v_isShallow||et(t)||nn(t);t=a?t:le(t),It(t,n)&&(this._rawValue=t,this._value=a?t:Le(t),this.dep.trigger())}}function Dt(e){return Te(e)?e.value:e}const pl={get:(e,t,n)=>t==="__v_raw"?e:Dt(Reflect.get(e,t,n)),set:(e,t,n,a)=>{const s=e[t];return Te(s)&&!Te(n)?(s.value=n,!0):Reflect.set(e,t,n,a)}};function Ar(e){return en(e)?e:new Proxy(e,pl)}function fl(e){const t=ae(e)?new Array(e.length):{};for(const n in e)t[n]=gl(e,n);return t}class hl{constructor(t,n,a){this._object=t,this._key=n,this._defaultValue=a,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Wi(le(this._object),this._key)}}function gl(e,t,n){const a=e[t];return Te(a)?a:new hl(e,t,n)}class ml{constructor(t,n,a){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Ts(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Nn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=a}notify(){if(this.flags|=16,!(this.flags&8)&&ge!==this)return ur(this,!0),!0}get value(){const t=this.dep.track();return fr(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function _l(e,t,n=!1){let a,s;return oe(e)?a=e:(a=e.get,s=e.set),new ml(a,s,n)}const qn={},ta=new WeakMap;let Jt;function bl(e,t=!1,n=Jt){if(n){let a=ta.get(n);a||ta.set(n,a=[]),a.push(e)}}function yl(e,t,n=me){const{immediate:a,deep:s,once:o,scheduler:r,augmentJob:i,call:l}=n,p=O=>s?O:et(O)||s===!1||s===0?Lt(O,1):Lt(O);let u,f,g,d,h=!1,c=!1;if(Te(e)?(f=()=>e.value,h=et(e)):en(e)?(f=()=>p(e),h=!0):ae(e)?(c=!0,h=e.some(O=>en(O)||et(O)),f=()=>e.map(O=>{if(Te(O))return O.value;if(en(O))return p(O);if(oe(O))return l?l(O,2):O()})):oe(e)?t?f=l?()=>l(e,2):e:f=()=>{if(g){Et();try{g()}finally{St()}}const O=Jt;Jt=u;try{return l?l(e,3,[d]):e(d)}finally{Jt=O}}:f=dt,t&&s){const O=f,R=s===!0?1/0:s;f=()=>Lt(O(),R)}const m=ir(),_=()=>{u.stop(),m&&m.active&&gs(m.effects,u)};if(o&&t){const O=t;t=(...R)=>{O(...R),_()}}let y=c?new Array(e.length).fill(qn):qn;const E=O=>{if(!(!(u.flags&1)||!u.dirty&&!O))if(t){const R=u.run();if(s||h||(c?R.some((M,B)=>It(M,y[B])):It(R,y))){g&&g();const M=Jt;Jt=u;try{const B=[R,y===qn?void 0:c&&y[0]===qn?[]:y,d];y=R,l?l(t,3,B):t(...B)}finally{Jt=M}}}else u.run()};return i&&i(E),u=new lr(f),u.scheduler=r?()=>r(E,!1):E,d=O=>bl(O,!1,u),g=u.onStop=()=>{const O=ta.get(u);if(O){if(l)l(O,4);else for(const R of O)R();ta.delete(u)}},t?a?E(!0):y=u.run():r?r(E.bind(null,!0),!0):u.run(),_.pause=u.pause.bind(u),_.resume=u.resume.bind(u),_.stop=_,_}function Lt(e,t=1/0,n){if(t<=0||!be(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Te(e))Lt(e.value,t,n);else if(ae(e))for(let a=0;a<e.length;a++)Lt(e[a],t,n);else if(zo(e)||un(e))e.forEach(a=>{Lt(a,t,n)});else if(Zo(e)){for(const a in e)Lt(e[a],t,n);for(const a of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,a)&&Lt(e[a],t,n)}return e}function Hn(e,t,n,a){try{return a?e(...a):e()}catch(s){ma(s,t,n)}}function tt(e,t,n,a){if(oe(e)){const s=Hn(e,t,n,a);return s&&Qo(s)&&s.catch(o=>{ma(o,t,n)}),s}if(ae(e)){const s=[];for(let o=0;o<e.length;o++)s.push(tt(e[o],t,n,a));return s}}function ma(e,t,n,a=!0){const s=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:r}=t&&t.appContext.config||me;if(t){let i=t.parent;const l=t.proxy,p=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const u=i.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](e,l,p)===!1)return}i=i.parent}if(o){Et(),Hn(o,null,10,[e,l,p]),St();return}}vl(e,n,s,a,r)}function vl(e,t,n,a=!0,s=!1){if(s)throw e;console.error(e)}const Ie=[];let it=-1;const dn=[];let Rt=null,rn=0;const Or=Promise.resolve();let na=null;function ks(e){const t=na||Or;return e?t.then(this?e.bind(this):e):t}function Tl(e){let t=it+1,n=Ie.length;for(;t<n;){const a=t+n>>>1,s=Ie[a],o=In(s);o<e||o===e&&s.flags&2?t=a+1:n=a}return t}function ws(e){if(!(e.flags&1)){const t=In(e),n=Ie[Ie.length-1];!n||!(e.flags&2)&&t>=In(n)?Ie.push(e):Ie.splice(Tl(t),0,e),e.flags|=1,Pr()}}function Pr(){na||(na=Or.then(wr))}function El(e){ae(e)?dn.push(...e):Rt&&e.id===-1?Rt.splice(rn+1,0,e):e.flags&1||(dn.push(e),e.flags|=1),Pr()}function Gs(e,t,n=it+1){for(;n<Ie.length;n++){const a=Ie[n];if(a&&a.flags&2){if(e&&a.id!==e.uid)continue;Ie.splice(n,1),n--,a.flags&4&&(a.flags&=-2),a(),a.flags&4||(a.flags&=-2)}}}function kr(e){if(dn.length){const t=[...new Set(dn)].sort((n,a)=>In(n)-In(a));if(dn.length=0,Rt){Rt.push(...t);return}for(Rt=t,rn=0;rn<Rt.length;rn++){const n=Rt[rn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Rt=null,rn=0}}const In=e=>e.id==null?e.flags&2?-1:1/0:e.id;function wr(e){try{for(it=0;it<Ie.length;it++){const t=Ie[it];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Hn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;it<Ie.length;it++){const t=Ie[it];t&&(t.flags&=-2)}it=-1,Ie.length=0,kr(),na=null,(Ie.length||dn.length)&&wr()}}let Xe=null,Rr=null;function aa(e){const t=Xe;return Xe=e,Rr=e&&e.type.__scopeId||null,t}function Qa(e,t=Xe,n){if(!t||e._n)return e;const a=(...s)=>{a._d&&ra(-1);const o=aa(t);let r;try{r=e(...s)}finally{aa(o),a._d&&ra(1)}return r};return a._n=!0,a._c=!0,a._d=!0,a}function jt(e,t,n,a){const s=e.dirs,o=t&&t.dirs;for(let r=0;r<s.length;r++){const i=s[r];o&&(i.oldValue=o[r].value);let l=i.dir[a];l&&(Et(),tt(l,n,8,[e.el,i,e,t]),St())}}const Sl=Symbol("_vte"),xr=e=>e.__isTeleport,bt=Symbol("_leaveCb"),Wn=Symbol("_enterCb");function Al(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ht(()=>{e.isMounted=!0}),Ur(()=>{e.isUnmounting=!0}),e}const We=[Function,Array],Cr={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:We,onEnter:We,onAfterEnter:We,onEnterCancelled:We,onBeforeLeave:We,onLeave:We,onAfterLeave:We,onLeaveCancelled:We,onBeforeAppear:We,onAppear:We,onAfterAppear:We,onAppearCancelled:We},Nr=e=>{const t=e.subTree;return t.component?Nr(t.component):t},Ol={name:"BaseTransition",props:Cr,setup(e,{slots:t}){const n=Ns(),a=Al();return()=>{const s=t.default&&Dr(t.default(),!0);if(!s||!s.length)return;const o=Lr(s),r=le(e),{mode:i}=r;if(a.isLeaving)return La(o);const l=qs(o);if(!l)return La(o);let p=Xa(l,r,a,n,f=>p=f);l.type!==je&&Dn(l,p);let u=n.subTree&&qs(n.subTree);if(u&&u.type!==je&&!Vt(u,l)&&Nr(n).type!==je){let f=Xa(u,r,a,n);if(Dn(u,f),i==="out-in"&&l.type!==je)return a.isLeaving=!0,f.afterLeave=()=>{a.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,u=void 0},La(o);i==="in-out"&&l.type!==je?f.delayLeave=(g,d,h)=>{const c=Ir(a,u);c[String(u.key)]=u,g[bt]=()=>{d(),g[bt]=void 0,delete p.delayedLeave,u=void 0},p.delayedLeave=()=>{h(),delete p.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return o}}};function Lr(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==je){t=n;break}}return t}const Pl=Ol;function Ir(e,t){const{leavingVNodes:n}=e;let a=n.get(t.type);return a||(a=Object.create(null),n.set(t.type,a)),a}function Xa(e,t,n,a,s){const{appear:o,mode:r,persisted:i=!1,onBeforeEnter:l,onEnter:p,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:g,onLeave:d,onAfterLeave:h,onLeaveCancelled:c,onBeforeAppear:m,onAppear:_,onAfterAppear:y,onAppearCancelled:E}=t,O=String(e.key),R=Ir(n,e),M=(T,w)=>{T&&tt(T,a,9,w)},B=(T,w)=>{const U=w[1];M(T,w),ae(T)?T.every(P=>P.length<=1)&&U():T.length<=1&&U()},$={mode:r,persisted:i,beforeEnter(T){let w=l;if(!n.isMounted)if(o)w=m||l;else return;T[bt]&&T[bt](!0);const U=R[O];U&&Vt(e,U)&&U.el[bt]&&U.el[bt](),M(w,[T])},enter(T){let w=p,U=u,P=f;if(!n.isMounted)if(o)w=_||p,U=y||u,P=E||f;else return;let W=!1;const X=T[Wn]=j=>{W||(W=!0,j?M(P,[T]):M(U,[T]),$.delayedLeave&&$.delayedLeave(),T[Wn]=void 0)};w?B(w,[T,X]):X()},leave(T,w){const U=String(e.key);if(T[Wn]&&T[Wn](!0),n.isUnmounting)return w();M(g,[T]);let P=!1;const W=T[bt]=X=>{P||(P=!0,w(),X?M(c,[T]):M(h,[T]),T[bt]=void 0,R[U]===e&&delete R[U])};R[U]=e,d?B(d,[T,W]):W()},clone(T){const w=Xa(T,t,n,a,s);return s&&s(w),w}};return $}function La(e){if(_a(e))return e=Bt(e),e.children=null,e}function qs(e){if(!_a(e))return xr(e.type)&&e.children?Lr(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&oe(n.default))return n.default()}}function Dn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Dn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Dr(e,t=!1,n){let a=[],s=0;for(let o=0;o<e.length;o++){let r=e[o];const i=n==null?r.key:String(n)+String(r.key!=null?r.key:o);r.type===ct?(r.patchFlag&128&&s++,a=a.concat(Dr(r.children,t,i))):(t||r.type!==je)&&a.push(i!=null?Bt(r,{key:i}):r)}if(s>1)for(let o=0;o<a.length;o++)a[o].patchFlag=-2;return a}function Mr(e,t){return oe(e)?Ae({name:e.name},t,{setup:e}):e}function Br(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const sa=new WeakMap;function On(e,t,n,a,s=!1){if(ae(e)){e.forEach((h,c)=>On(h,t&&(ae(t)?t[c]:t),n,a,s));return}if(Pn(a)&&!s){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&On(e,t,n,a.component.subTree);return}const o=a.shapeFlag&4?Ls(a.component):a.el,r=s?null:o,{i,r:l}=e,p=t&&t.r,u=i.refs===me?i.refs={}:i.refs,f=i.setupState,g=le(f),d=f===me?Vo:h=>de(g,h);if(p!=null&&p!==l){if(Ws(t),Ee(p))u[p]=null,d(p)&&(f[p]=null);else if(Te(p)){p.value=null;const h=t;h.k&&(u[h.k]=null)}}if(oe(l))Hn(l,i,12,[r,u]);else{const h=Ee(l),c=Te(l);if(h||c){const m=()=>{if(e.f){const _=h?d(l)?f[l]:u[l]:l.value;if(s)ae(_)&&gs(_,o);else if(ae(_))_.includes(o)||_.push(o);else if(h)u[l]=[o],d(l)&&(f[l]=u[l]);else{const y=[o];l.value=y,e.k&&(u[e.k]=y)}}else h?(u[l]=r,d(l)&&(f[l]=r)):c&&(l.value=r,e.k&&(u[e.k]=r))};if(r){const _=()=>{m(),sa.delete(e)};_.id=-1,sa.set(e,_),Ye(_,n)}else Ws(e),m()}}}function Ws(e){const t=sa.get(e);t&&(t.flags|=8,sa.delete(e))}ga().requestIdleCallback;ga().cancelIdleCallback;const Pn=e=>!!e.type.__asyncLoader,_a=e=>e.type.__isKeepAlive;function kl(e,t){Fr(e,"a",t)}function wl(e,t){Fr(e,"da",t)}function Fr(e,t,n=Re){const a=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(ba(t,a,n),n){let s=n.parent;for(;s&&s.parent;)_a(s.parent.vnode)&&Rl(a,t,n,s),s=s.parent}}function Rl(e,t,n,a){const s=ba(t,e,a,!0);ya(()=>{gs(a[t],s)},n)}function ba(e,t,n=Re,a=!1){if(n){const s=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...r)=>{Et();const i=Kn(n),l=tt(t,n,e,r);return i(),St(),l});return a?s.unshift(o):s.push(o),o}}const Ot=e=>(t,n=Re)=>{(!Bn||e==="sp")&&ba(e,(...a)=>t(...a),n)},xl=Ot("bm"),Ht=Ot("m"),Cl=Ot("bu"),Nl=Ot("u"),Ur=Ot("bum"),ya=Ot("um"),Ll=Ot("sp"),Il=Ot("rtg"),Dl=Ot("rtc");function Ml(e,t=Re){ba("ec",e,t)}const Bl="components",$r=Symbol.for("v-ndc");function Fl(e){return Ee(e)?Ul(Bl,e,!1)||e:e||$r}function Ul(e,t,n=!0,a=!1){const s=Xe||Re;if(s){const o=s.type;{const i=kc(o,!1);if(i&&(i===t||i===ze(t)||i===ha(ze(t))))return o}const r=Js(s[e]||o[e],t)||Js(s.appContext[e],t);return!r&&a?o:r}}function Js(e,t){return e&&(e[t]||e[ze(t)]||e[ha(ze(t))])}const Za=e=>e?ri(e)?Ls(e):Za(e.parent):null,kn=Ae(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Za(e.parent),$root:e=>Za(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Kr(e),$forceUpdate:e=>e.f||(e.f=()=>{ws(e.update)}),$nextTick:e=>e.n||(e.n=ks.bind(e.proxy)),$watch:e=>ic.bind(e)}),Ia=(e,t)=>e!==me&&!e.__isScriptSetup&&de(e,t),$l={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:a,data:s,props:o,accessCache:r,type:i,appContext:l}=e;let p;if(t[0]!=="$"){const d=r[t];if(d!==void 0)switch(d){case 1:return a[t];case 2:return s[t];case 4:return n[t];case 3:return o[t]}else{if(Ia(a,t))return r[t]=1,a[t];if(s!==me&&de(s,t))return r[t]=2,s[t];if((p=e.propsOptions[0])&&de(p,t))return r[t]=3,o[t];if(n!==me&&de(n,t))return r[t]=4,n[t];es&&(r[t]=0)}}const u=kn[t];let f,g;if(u)return t==="$attrs"&&ke(e.attrs,"get",""),u(e);if((f=i.__cssModules)&&(f=f[t]))return f;if(n!==me&&de(n,t))return r[t]=4,n[t];if(g=l.config.globalProperties,de(g,t))return g[t]},set({_:e},t,n){const{data:a,setupState:s,ctx:o}=e;return Ia(s,t)?(s[t]=n,!0):a!==me&&de(a,t)?(a[t]=n,!0):de(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:a,appContext:s,propsOptions:o,type:r}},i){let l,p;return!!(n[i]||e!==me&&i[0]!=="$"&&de(e,i)||Ia(t,i)||(l=o[0])&&de(l,i)||de(a,i)||de(kn,i)||de(s.config.globalProperties,i)||(p=r.__cssModules)&&p[i])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:de(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Vs(e){return ae(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let es=!0;function Hl(e){const t=Kr(e),n=e.proxy,a=e.ctx;es=!1,t.beforeCreate&&zs(t.beforeCreate,e,"bc");const{data:s,computed:o,methods:r,watch:i,provide:l,inject:p,created:u,beforeMount:f,mounted:g,beforeUpdate:d,updated:h,activated:c,deactivated:m,beforeDestroy:_,beforeUnmount:y,destroyed:E,unmounted:O,render:R,renderTracked:M,renderTriggered:B,errorCaptured:$,serverPrefetch:T,expose:w,inheritAttrs:U,components:P,directives:W,filters:X}=t;if(p&&Kl(p,a,null),r)for(const x in r){const H=r[x];oe(H)&&(a[x]=H.bind(n))}if(s){const x=s.call(n,n);be(x)&&(e.data=Tt(x))}if(es=!0,o)for(const x in o){const H=o[x],Z=oe(H)?H.bind(n,n):oe(H.get)?H.get.bind(n,n):dt,ce=!oe(H)&&oe(H.set)?H.set.bind(n):dt,_e=Ge({get:Z,set:ce});Object.defineProperty(a,x,{enumerable:!0,configurable:!0,get:()=>_e.value,set:fe=>_e.value=fe})}if(i)for(const x in i)Hr(i[x],a,n,x);if(l){const x=oe(l)?l.call(n):l;Reflect.ownKeys(x).forEach(H=>{zn(H,x[H])})}u&&zs(u,e,"c");function Y(x,H){ae(H)?H.forEach(Z=>x(Z.bind(n))):H&&x(H.bind(n))}if(Y(xl,f),Y(Ht,g),Y(Cl,d),Y(Nl,h),Y(kl,c),Y(wl,m),Y(Ml,$),Y(Dl,M),Y(Il,B),Y(Ur,y),Y(ya,O),Y(Ll,T),ae(w))if(w.length){const x=e.exposed||(e.exposed={});w.forEach(H=>{Object.defineProperty(x,H,{get:()=>n[H],set:Z=>n[H]=Z,enumerable:!0})})}else e.exposed||(e.exposed={});R&&e.render===dt&&(e.render=R),U!=null&&(e.inheritAttrs=U),P&&(e.components=P),W&&(e.directives=W),T&&Br(e)}function Kl(e,t,n=dt){ae(e)&&(e=ts(e));for(const a in e){const s=e[a];let o;be(s)?"default"in s?o=Ve(s.from||a,s.default,!0):o=Ve(s.from||a):o=Ve(s),Te(o)?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:r=>o.value=r}):t[a]=o}}function zs(e,t,n){tt(ae(e)?e.map(a=>a.bind(t.proxy)):e.bind(t.proxy),t,n)}function Hr(e,t,n,a){let s=a.includes(".")?ti(n,a):()=>n[a];if(Ee(e)){const o=t[e];oe(o)&&wn(s,o)}else if(oe(e))wn(s,e.bind(n));else if(be(e))if(ae(e))e.forEach(o=>Hr(o,t,n,a));else{const o=oe(e.handler)?e.handler.bind(n):t[e.handler];oe(o)&&wn(s,o,e)}}function Kr(e){const t=e.type,{mixins:n,extends:a}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:r}}=e.appContext,i=o.get(t);let l;return i?l=i:!s.length&&!n&&!a?l=t:(l={},s.length&&s.forEach(p=>oa(l,p,r,!0)),oa(l,t,r)),be(t)&&o.set(t,l),l}function oa(e,t,n,a=!1){const{mixins:s,extends:o}=t;o&&oa(e,o,n,!0),s&&s.forEach(r=>oa(e,r,n,!0));for(const r in t)if(!(a&&r==="expose")){const i=Yl[r]||n&&n[r];e[r]=i?i(e[r],t[r]):t[r]}return e}const Yl={data:Qs,props:Xs,emits:Xs,methods:vn,computed:vn,beforeCreate:Ce,created:Ce,beforeMount:Ce,mounted:Ce,beforeUpdate:Ce,updated:Ce,beforeDestroy:Ce,beforeUnmount:Ce,destroyed:Ce,unmounted:Ce,activated:Ce,deactivated:Ce,errorCaptured:Ce,serverPrefetch:Ce,components:vn,directives:vn,watch:Gl,provide:Qs,inject:jl};function Qs(e,t){return t?e?function(){return Ae(oe(e)?e.call(this,this):e,oe(t)?t.call(this,this):t)}:t:e}function jl(e,t){return vn(ts(e),ts(t))}function ts(e){if(ae(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ce(e,t){return e?[...new Set([].concat(e,t))]:t}function vn(e,t){return e?Ae(Object.create(null),e,t):t}function Xs(e,t){return e?ae(e)&&ae(t)?[...new Set([...e,...t])]:Ae(Object.create(null),Vs(e),Vs(t??{})):t}function Gl(e,t){if(!e)return t;if(!t)return e;const n=Ae(Object.create(null),e);for(const a in t)n[a]=Ce(e[a],t[a]);return n}function Yr(){return{app:null,config:{isNativeTag:Vo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ql=0;function Wl(e,t){return function(a,s=null){oe(a)||(a=Ae({},a)),s!=null&&!be(s)&&(s=null);const o=Yr(),r=new WeakSet,i=[];let l=!1;const p=o.app={_uid:ql++,_component:a,_props:s,_container:null,_context:o,_instance:null,version:Rc,get config(){return o.config},set config(u){},use(u,...f){return r.has(u)||(u&&oe(u.install)?(r.add(u),u.install(p,...f)):oe(u)&&(r.add(u),u(p,...f))),p},mixin(u){return o.mixins.includes(u)||o.mixins.push(u),p},component(u,f){return f?(o.components[u]=f,p):o.components[u]},directive(u,f){return f?(o.directives[u]=f,p):o.directives[u]},mount(u,f,g){if(!l){const d=p._ceVNode||Fe(a,s);return d.appContext=o,g===!0?g="svg":g===!1&&(g=void 0),e(d,u,g),l=!0,p._container=u,u.__vue_app__=p,Ls(d.component)}},onUnmount(u){i.push(u)},unmount(){l&&(tt(i,p._instance,16),e(null,p._container),delete p._container.__vue_app__)},provide(u,f){return o.provides[u]=f,p},runWithContext(u){const f=tn;tn=p;try{return u()}finally{tn=f}}};return p}}let tn=null;function zn(e,t){if(Re){let n=Re.provides;const a=Re.parent&&Re.parent.provides;a===n&&(n=Re.provides=Object.create(a)),n[e]=t}}function Ve(e,t,n=!1){const a=Ns();if(a||tn){let s=tn?tn._context.provides:a?a.parent==null||a.ce?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&oe(t)?t.call(a&&a.proxy):t}}function Jl(){return!!(Ns()||tn)}const jr={},Gr=()=>Object.create(jr),qr=e=>Object.getPrototypeOf(e)===jr;function Vl(e,t,n,a=!1){const s={},o=Gr();e.propsDefaults=Object.create(null),Wr(e,t,s,o);for(const r in e.propsOptions[0])r in s||(s[r]=void 0);n?e.props=a?s:Er(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function zl(e,t,n,a){const{props:s,attrs:o,vnode:{patchFlag:r}}=e,i=le(s),[l]=e.propsOptions;let p=!1;if((a||r>0)&&!(r&16)){if(r&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let g=u[f];if(va(e.emitsOptions,g))continue;const d=t[g];if(l)if(de(o,g))d!==o[g]&&(o[g]=d,p=!0);else{const h=ze(g);s[h]=ns(l,i,h,d,e,!1)}else d!==o[g]&&(o[g]=d,p=!0)}}}else{Wr(e,t,s,o)&&(p=!0);let u;for(const f in i)(!t||!de(t,f)&&((u=$t(f))===f||!de(t,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=ns(l,i,f,void 0,e,!0)):delete s[f]);if(o!==i)for(const f in o)(!t||!de(t,f))&&(delete o[f],p=!0)}p&&vt(e.attrs,"set","")}function Wr(e,t,n,a){const[s,o]=e.propsOptions;let r=!1,i;if(t)for(let l in t){if(En(l))continue;const p=t[l];let u;s&&de(s,u=ze(l))?!o||!o.includes(u)?n[u]=p:(i||(i={}))[u]=p:va(e.emitsOptions,l)||(!(l in a)||p!==a[l])&&(a[l]=p,r=!0)}if(o){const l=le(n),p=i||me;for(let u=0;u<o.length;u++){const f=o[u];n[f]=ns(s,l,f,p[f],e,!de(p,f))}}return r}function ns(e,t,n,a,s,o){const r=e[n];if(r!=null){const i=de(r,"default");if(i&&a===void 0){const l=r.default;if(r.type!==Function&&!r.skipFactory&&oe(l)){const{propsDefaults:p}=s;if(n in p)a=p[n];else{const u=Kn(s);a=p[n]=l.call(null,t),u()}}else a=l;s.ce&&s.ce._setProp(n,a)}r[0]&&(o&&!i?a=!1:r[1]&&(a===""||a===$t(n))&&(a=!0))}return a}const Ql=new WeakMap;function Jr(e,t,n=!1){const a=n?Ql:t.propsCache,s=a.get(e);if(s)return s;const o=e.props,r={},i=[];let l=!1;if(!oe(e)){const u=f=>{l=!0;const[g,d]=Jr(f,t,!0);Ae(r,g),d&&i.push(...d)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!o&&!l)return be(e)&&a.set(e,cn),cn;if(ae(o))for(let u=0;u<o.length;u++){const f=ze(o[u]);Zs(f)&&(r[f]=me)}else if(o)for(const u in o){const f=ze(u);if(Zs(f)){const g=o[u],d=r[f]=ae(g)||oe(g)?{type:g}:Ae({},g),h=d.type;let c=!1,m=!0;if(ae(h))for(let _=0;_<h.length;++_){const y=h[_],E=oe(y)&&y.name;if(E==="Boolean"){c=!0;break}else E==="String"&&(m=!1)}else c=oe(h)&&h.name==="Boolean";d[0]=c,d[1]=m,(c||de(d,"default"))&&i.push(f)}}const p=[r,i];return be(e)&&a.set(e,p),p}function Zs(e){return e[0]!=="$"&&!En(e)}const Rs=e=>e==="_"||e==="_ctx"||e==="$stable",xs=e=>ae(e)?e.map(ut):[ut(e)],Xl=(e,t,n)=>{if(t._n)return t;const a=Qa((...s)=>xs(t(...s)),n);return a._c=!1,a},Vr=(e,t,n)=>{const a=e._ctx;for(const s in e){if(Rs(s))continue;const o=e[s];if(oe(o))t[s]=Xl(s,o,a);else if(o!=null){const r=xs(o);t[s]=()=>r}}},zr=(e,t)=>{const n=xs(t);e.slots.default=()=>n},Qr=(e,t,n)=>{for(const a in t)(n||!Rs(a))&&(e[a]=t[a])},Zl=(e,t,n)=>{const a=e.slots=Gr();if(e.vnode.shapeFlag&32){const s=t._;s?(Qr(a,t,n),n&&er(a,"_",s,!0)):Vr(t,a)}else t&&zr(e,t)},ec=(e,t,n)=>{const{vnode:a,slots:s}=e;let o=!0,r=me;if(a.shapeFlag&32){const i=t._;i?n&&i===1?o=!1:Qr(s,t,n):(o=!t.$stable,Vr(t,s)),r=t}else t&&(zr(e,t),r={default:1});if(o)for(const i in s)!Rs(i)&&r[i]==null&&delete s[i]},Ye=gc;function tc(e){return nc(e)}function nc(e,t){const n=ga();n.__VUE__=!0;const{insert:a,remove:s,patchProp:o,createElement:r,createText:i,createComment:l,setText:p,setElementText:u,parentNode:f,nextSibling:g,setScopeId:d=dt,insertStaticContent:h}=e,c=(b,v,S,N=null,I=null,C=null,q=void 0,G=null,K=!!v.dynamicChildren)=>{if(b===v)return;b&&!Vt(b,v)&&(N=L(b),fe(b,I,C,!0),b=null),v.patchFlag===-2&&(K=!1,v.dynamicChildren=null);const{type:F,ref:ne,shapeFlag:V}=v;switch(F){case Ta:m(b,v,S,N);break;case je:_(b,v,S,N);break;case Qn:b==null&&y(v,S,N,q);break;case ct:P(b,v,S,N,I,C,q,G,K);break;default:V&1?R(b,v,S,N,I,C,q,G,K):V&6?W(b,v,S,N,I,C,q,G,K):(V&64||V&128)&&F.process(b,v,S,N,I,C,q,G,K,ee)}ne!=null&&I?On(ne,b&&b.ref,C,v||b,!v):ne==null&&b&&b.ref!=null&&On(b.ref,null,C,b,!0)},m=(b,v,S,N)=>{if(b==null)a(v.el=i(v.children),S,N);else{const I=v.el=b.el;v.children!==b.children&&p(I,v.children)}},_=(b,v,S,N)=>{b==null?a(v.el=l(v.children||""),S,N):v.el=b.el},y=(b,v,S,N)=>{[b.el,b.anchor]=h(b.children,v,S,N,b.el,b.anchor)},E=({el:b,anchor:v},S,N)=>{let I;for(;b&&b!==v;)I=g(b),a(b,S,N),b=I;a(v,S,N)},O=({el:b,anchor:v})=>{let S;for(;b&&b!==v;)S=g(b),s(b),b=S;s(v)},R=(b,v,S,N,I,C,q,G,K)=>{if(v.type==="svg"?q="svg":v.type==="math"&&(q="mathml"),b==null)M(v,S,N,I,C,q,G,K);else{const F=b.el&&b.el._isVueCE?b.el:null;try{F&&F._beginPatch(),T(b,v,I,C,q,G,K)}finally{F&&F._endPatch()}}},M=(b,v,S,N,I,C,q,G)=>{let K,F;const{props:ne,shapeFlag:V,transition:te,dirs:se}=b;if(K=b.el=r(b.type,C,ne&&ne.is,ne),V&8?u(K,b.children):V&16&&$(b.children,K,null,N,I,Da(b,C),q,G),se&&jt(b,null,N,"created"),B(K,b,b.scopeId,q,N),ne){for(const he in ne)he!=="value"&&!En(he)&&o(K,he,null,ne[he],C,N);"value"in ne&&o(K,"value",null,ne.value,C),(F=ne.onVnodeBeforeMount)&&rt(F,N,b)}se&&jt(b,null,N,"beforeMount");const ie=ac(I,te);ie&&te.beforeEnter(K),a(K,v,S),((F=ne&&ne.onVnodeMounted)||ie||se)&&Ye(()=>{F&&rt(F,N,b),ie&&te.enter(K),se&&jt(b,null,N,"mounted")},I)},B=(b,v,S,N,I)=>{if(S&&d(b,S),N)for(let C=0;C<N.length;C++)d(b,N[C]);if(I){let C=I.subTree;if(v===C||ai(C.type)&&(C.ssContent===v||C.ssFallback===v)){const q=I.vnode;B(b,q,q.scopeId,q.slotScopeIds,I.parent)}}},$=(b,v,S,N,I,C,q,G,K=0)=>{for(let F=K;F<b.length;F++){const ne=b[F]=G?xt(b[F]):ut(b[F]);c(null,ne,v,S,N,I,C,q,G)}},T=(b,v,S,N,I,C,q)=>{const G=v.el=b.el;let{patchFlag:K,dynamicChildren:F,dirs:ne}=v;K|=b.patchFlag&16;const V=b.props||me,te=v.props||me;let se;if(S&&Gt(S,!1),(se=te.onVnodeBeforeUpdate)&&rt(se,S,v,b),ne&&jt(v,b,S,"beforeUpdate"),S&&Gt(S,!0),(V.innerHTML&&te.innerHTML==null||V.textContent&&te.textContent==null)&&u(G,""),F?w(b.dynamicChildren,F,G,S,N,Da(v,I),C):q||H(b,v,G,null,S,N,Da(v,I),C,!1),K>0){if(K&16)U(G,V,te,S,I);else if(K&2&&V.class!==te.class&&o(G,"class",null,te.class,I),K&4&&o(G,"style",V.style,te.style,I),K&8){const ie=v.dynamicProps;for(let he=0;he<ie.length;he++){const pe=ie[he],De=V[pe],Me=te[pe];(Me!==De||pe==="value")&&o(G,pe,De,Me,I,S)}}K&1&&b.children!==v.children&&u(G,v.children)}else!q&&F==null&&U(G,V,te,S,I);((se=te.onVnodeUpdated)||ne)&&Ye(()=>{se&&rt(se,S,v,b),ne&&jt(v,b,S,"updated")},N)},w=(b,v,S,N,I,C,q)=>{for(let G=0;G<v.length;G++){const K=b[G],F=v[G],ne=K.el&&(K.type===ct||!Vt(K,F)||K.shapeFlag&198)?f(K.el):S;c(K,F,ne,null,N,I,C,q,!0)}},U=(b,v,S,N,I)=>{if(v!==S){if(v!==me)for(const C in v)!En(C)&&!(C in S)&&o(b,C,v[C],null,I,N);for(const C in S){if(En(C))continue;const q=S[C],G=v[C];q!==G&&C!=="value"&&o(b,C,G,q,I,N)}"value"in S&&o(b,"value",v.value,S.value,I)}},P=(b,v,S,N,I,C,q,G,K)=>{const F=v.el=b?b.el:i(""),ne=v.anchor=b?b.anchor:i("");let{patchFlag:V,dynamicChildren:te,slotScopeIds:se}=v;se&&(G=G?G.concat(se):se),b==null?(a(F,S,N),a(ne,S,N),$(v.children||[],S,ne,I,C,q,G,K)):V>0&&V&64&&te&&b.dynamicChildren?(w(b.dynamicChildren,te,S,I,C,q,G),(v.key!=null||I&&v===I.subTree)&&Xr(b,v,!0)):H(b,v,S,ne,I,C,q,G,K)},W=(b,v,S,N,I,C,q,G,K)=>{v.slotScopeIds=G,b==null?v.shapeFlag&512?I.ctx.activate(v,S,N,q,K):X(v,S,N,I,C,q,K):j(b,v,K)},X=(b,v,S,N,I,C,q)=>{const G=b.component=Ec(b,N,I);if(_a(b)&&(G.ctx.renderer=ee),Sc(G,!1,q),G.asyncDep){if(I&&I.registerDep(G,Y,q),!b.el){const K=G.subTree=Fe(je);_(null,K,v,S),b.placeholder=K.el}}else Y(G,b,v,S,I,C,q)},j=(b,v,S)=>{const N=v.component=b.component;if(fc(b,v,S))if(N.asyncDep&&!N.asyncResolved){x(N,v,S);return}else N.next=v,N.update();else v.el=b.el,N.vnode=v},Y=(b,v,S,N,I,C,q)=>{const G=()=>{if(b.isMounted){let{next:V,bu:te,u:se,parent:ie,vnode:he}=b;{const st=Zr(b);if(st){V&&(V.el=he.el,x(b,V,q)),st.asyncDep.then(()=>{b.isUnmounted||G()});return}}let pe=V,De;Gt(b,!1),V?(V.el=he.el,x(b,V,q)):V=he,te&&wa(te),(De=V.props&&V.props.onVnodeBeforeUpdate)&&rt(De,ie,V,he),Gt(b,!0);const Me=to(b),at=b.subTree;b.subTree=Me,c(at,Me,f(at.el),L(at),b,I,C),V.el=Me.el,pe===null&&hc(b,Me.el),se&&Ye(se,I),(De=V.props&&V.props.onVnodeUpdated)&&Ye(()=>rt(De,ie,V,he),I)}else{let V;const{el:te,props:se}=v,{bm:ie,m:he,parent:pe,root:De,type:Me}=b,at=Pn(v);Gt(b,!1),ie&&wa(ie),!at&&(V=se&&se.onVnodeBeforeMount)&&rt(V,pe,v),Gt(b,!0);{De.ce&&De.ce._def.shadowRoot!==!1&&De.ce._injectChildStyle(Me);const st=b.subTree=to(b);c(null,st,S,N,b,I,C),v.el=st.el}if(he&&Ye(he,I),!at&&(V=se&&se.onVnodeMounted)){const st=v;Ye(()=>rt(V,pe,st),I)}(v.shapeFlag&256||pe&&Pn(pe.vnode)&&pe.vnode.shapeFlag&256)&&b.a&&Ye(b.a,I),b.isMounted=!0,v=S=N=null}};b.scope.on();const K=b.effect=new lr(G);b.scope.off();const F=b.update=K.run.bind(K),ne=b.job=K.runIfDirty.bind(K);ne.i=b,ne.id=b.uid,K.scheduler=()=>ws(ne),Gt(b,!0),F()},x=(b,v,S)=>{v.component=b;const N=b.vnode.props;b.vnode=v,b.next=null,zl(b,v.props,N,S),ec(b,v.children,S),Et(),Gs(b),St()},H=(b,v,S,N,I,C,q,G,K=!1)=>{const F=b&&b.children,ne=b?b.shapeFlag:0,V=v.children,{patchFlag:te,shapeFlag:se}=v;if(te>0){if(te&128){ce(F,V,S,N,I,C,q,G,K);return}else if(te&256){Z(F,V,S,N,I,C,q,G,K);return}}se&8?(ne&16&&He(F,I,C),V!==F&&u(S,V)):ne&16?se&16?ce(F,V,S,N,I,C,q,G,K):He(F,I,C,!0):(ne&8&&u(S,""),se&16&&$(V,S,N,I,C,q,G,K))},Z=(b,v,S,N,I,C,q,G,K)=>{b=b||cn,v=v||cn;const F=b.length,ne=v.length,V=Math.min(F,ne);let te;for(te=0;te<V;te++){const se=v[te]=K?xt(v[te]):ut(v[te]);c(b[te],se,S,null,I,C,q,G,K)}F>ne?He(b,I,C,!0,!1,V):$(v,S,N,I,C,q,G,K,V)},ce=(b,v,S,N,I,C,q,G,K)=>{let F=0;const ne=v.length;let V=b.length-1,te=ne-1;for(;F<=V&&F<=te;){const se=b[F],ie=v[F]=K?xt(v[F]):ut(v[F]);if(Vt(se,ie))c(se,ie,S,null,I,C,q,G,K);else break;F++}for(;F<=V&&F<=te;){const se=b[V],ie=v[te]=K?xt(v[te]):ut(v[te]);if(Vt(se,ie))c(se,ie,S,null,I,C,q,G,K);else break;V--,te--}if(F>V){if(F<=te){const se=te+1,ie=se<ne?v[se].el:N;for(;F<=te;)c(null,v[F]=K?xt(v[F]):ut(v[F]),S,ie,I,C,q,G,K),F++}}else if(F>te)for(;F<=V;)fe(b[F],I,C,!0),F++;else{const se=F,ie=F,he=new Map;for(F=ie;F<=te;F++){const Ke=v[F]=K?xt(v[F]):ut(v[F]);Ke.key!=null&&he.set(Ke.key,F)}let pe,De=0;const Me=te-ie+1;let at=!1,st=0;const gn=new Array(Me);for(F=0;F<Me;F++)gn[F]=0;for(F=se;F<=V;F++){const Ke=b[F];if(De>=Me){fe(Ke,I,C,!0);continue}let ot;if(Ke.key!=null)ot=he.get(Ke.key);else for(pe=ie;pe<=te;pe++)if(gn[pe-ie]===0&&Vt(Ke,v[pe])){ot=pe;break}ot===void 0?fe(Ke,I,C,!0):(gn[ot-ie]=F+1,ot>=st?st=ot:at=!0,c(Ke,v[ot],S,null,I,C,q,G,K),De++)}const Us=at?sc(gn):cn;for(pe=Us.length-1,F=Me-1;F>=0;F--){const Ke=ie+F,ot=v[Ke],$s=v[Ke+1],Hs=Ke+1<ne?$s.el||$s.placeholder:N;gn[F]===0?c(null,ot,S,Hs,I,C,q,G,K):at&&(pe<0||F!==Us[pe]?_e(ot,S,Hs,2):pe--)}}},_e=(b,v,S,N,I=null)=>{const{el:C,type:q,transition:G,children:K,shapeFlag:F}=b;if(F&6){_e(b.component.subTree,v,S,N);return}if(F&128){b.suspense.move(v,S,N);return}if(F&64){q.move(b,v,S,ee);return}if(q===ct){a(C,v,S);for(let V=0;V<K.length;V++)_e(K[V],v,S,N);a(b.anchor,v,S);return}if(q===Qn){E(b,v,S);return}if(N!==2&&F&1&&G)if(N===0)G.beforeEnter(C),a(C,v,S),Ye(()=>G.enter(C),I);else{const{leave:V,delayLeave:te,afterLeave:se}=G,ie=()=>{b.ctx.isUnmounted?s(C):a(C,v,S)},he=()=>{C._isLeaving&&C[bt](!0),V(C,()=>{ie(),se&&se()})};te?te(C,ie,he):he()}else a(C,v,S)},fe=(b,v,S,N=!1,I=!1)=>{const{type:C,props:q,ref:G,children:K,dynamicChildren:F,shapeFlag:ne,patchFlag:V,dirs:te,cacheIndex:se}=b;if(V===-2&&(I=!1),G!=null&&(Et(),On(G,null,S,b,!0),St()),se!=null&&(v.renderCache[se]=void 0),ne&256){v.ctx.deactivate(b);return}const ie=ne&1&&te,he=!Pn(b);let pe;if(he&&(pe=q&&q.onVnodeBeforeUnmount)&&rt(pe,v,b),ne&6)$e(b.component,S,N);else{if(ne&128){b.suspense.unmount(S,N);return}ie&&jt(b,null,v,"beforeUnmount"),ne&64?b.type.remove(b,v,S,ee,N):F&&!F.hasOnce&&(C!==ct||V>0&&V&64)?He(F,v,S,!1,!0):(C===ct&&V&384||!I&&ne&16)&&He(K,v,S),N&&Ue(b)}(he&&(pe=q&&q.onVnodeUnmounted)||ie)&&Ye(()=>{pe&&rt(pe,v,b),ie&&jt(b,null,v,"unmounted")},S)},Ue=b=>{const{type:v,el:S,anchor:N,transition:I}=b;if(v===ct){xe(S,N);return}if(v===Qn){O(b);return}const C=()=>{s(S),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(b.shapeFlag&1&&I&&!I.persisted){const{leave:q,delayLeave:G}=I,K=()=>q(S,C);G?G(b.el,C,K):K()}else C()},xe=(b,v)=>{let S;for(;b!==v;)S=g(b),s(b),b=S;s(v)},$e=(b,v,S)=>{const{bum:N,scope:I,job:C,subTree:q,um:G,m:K,a:F}=b;eo(K),eo(F),N&&wa(N),I.stop(),C&&(C.flags|=8,fe(q,b,v,S)),G&&Ye(G,v),Ye(()=>{b.isUnmounted=!0},v)},He=(b,v,S,N=!1,I=!1,C=0)=>{for(let q=C;q<b.length;q++)fe(b[q],v,S,N,I)},L=b=>{if(b.shapeFlag&6)return L(b.component.subTree);if(b.shapeFlag&128)return b.suspense.next();const v=g(b.anchor||b.el),S=v&&v[Sl];return S?g(S):v};let z=!1;const J=(b,v,S)=>{b==null?v._vnode&&fe(v._vnode,null,null,!0):c(v._vnode||null,b,v,null,null,null,S),v._vnode=b,z||(z=!0,Gs(),kr(),z=!1)},ee={p:c,um:fe,m:_e,r:Ue,mt:X,mc:$,pc:H,pbc:w,n:L,o:e};return{render:J,hydrate:void 0,createApp:Wl(J)}}function Da({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Gt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function ac(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Xr(e,t,n=!1){const a=e.children,s=t.children;if(ae(a)&&ae(s))for(let o=0;o<a.length;o++){const r=a[o];let i=s[o];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=s[o]=xt(s[o]),i.el=r.el),!n&&i.patchFlag!==-2&&Xr(r,i)),i.type===Ta&&i.patchFlag!==-1&&(i.el=r.el),i.type===je&&!i.el&&(i.el=r.el)}}function sc(e){const t=e.slice(),n=[0];let a,s,o,r,i;const l=e.length;for(a=0;a<l;a++){const p=e[a];if(p!==0){if(s=n[n.length-1],e[s]<p){t[a]=s,n.push(a);continue}for(o=0,r=n.length-1;o<r;)i=o+r>>1,e[n[i]]<p?o=i+1:r=i;p<e[n[o]]&&(o>0&&(t[a]=n[o-1]),n[o]=a)}}for(o=n.length,r=n[o-1];o-- >0;)n[o]=r,r=t[r];return n}function Zr(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Zr(t)}function eo(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const oc=Symbol.for("v-scx"),rc=()=>Ve(oc);function wn(e,t,n){return ei(e,t,n)}function ei(e,t,n=me){const{immediate:a,deep:s,flush:o,once:r}=n,i=Ae({},n),l=t&&a||!t&&o!=="post";let p;if(Bn){if(o==="sync"){const d=rc();p=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=dt,d.resume=dt,d.pause=dt,d}}const u=Re;i.call=(d,h,c)=>tt(d,u,h,c);let f=!1;o==="post"?i.scheduler=d=>{Ye(d,u&&u.suspense)}:o!=="sync"&&(f=!0,i.scheduler=(d,h)=>{h?d():ws(d)}),i.augmentJob=d=>{t&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const g=yl(e,t,i);return Bn&&(p?p.push(g):l&&g()),g}function ic(e,t,n){const a=this.proxy,s=Ee(e)?e.includes(".")?ti(a,e):()=>a[e]:e.bind(a,a);let o;oe(t)?o=t:(o=t.handler,n=t);const r=Kn(this),i=ei(s,o.bind(a),n);return r(),i}function ti(e,t){const n=t.split(".");return()=>{let a=e;for(let s=0;s<n.length&&a;s++)a=a[n[s]];return a}}const lc=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${ze(t)}Modifiers`]||e[`${$t(t)}Modifiers`];function cc(e,t,...n){if(e.isUnmounted)return;const a=e.vnode.props||me;let s=n;const o=t.startsWith("update:"),r=o&&lc(a,t.slice(7));r&&(r.trim&&(s=n.map(u=>Ee(u)?u.trim():u)),r.number&&(s=n.map(Mi)));let i,l=a[i=ka(t)]||a[i=ka(ze(t))];!l&&o&&(l=a[i=ka($t(t))]),l&&tt(l,e,6,s);const p=a[i+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,tt(p,e,6,s)}}const uc=new WeakMap;function ni(e,t,n=!1){const a=n?uc:t.emitsCache,s=a.get(e);if(s!==void 0)return s;const o=e.emits;let r={},i=!1;if(!oe(e)){const l=p=>{const u=ni(p,t,!0);u&&(i=!0,Ae(r,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!o&&!i?(be(e)&&a.set(e,null),null):(ae(o)?o.forEach(l=>r[l]=null):Ae(r,o),be(e)&&a.set(e,r),r)}function va(e,t){return!e||!da(t)?!1:(t=t.slice(2).replace(/Once$/,""),de(e,t[0].toLowerCase()+t.slice(1))||de(e,$t(t))||de(e,t))}function to(e){const{type:t,vnode:n,proxy:a,withProxy:s,propsOptions:[o],slots:r,attrs:i,emit:l,render:p,renderCache:u,props:f,data:g,setupState:d,ctx:h,inheritAttrs:c}=e,m=aa(e);let _,y;try{if(n.shapeFlag&4){const O=s||a,R=O;_=ut(p.call(R,O,u,f,d,g,h)),y=i}else{const O=t;_=ut(O.length>1?O(f,{attrs:i,slots:r,emit:l}):O(f,null)),y=t.props?i:dc(i)}}catch(O){Rn.length=0,ma(O,e,1),_=Fe(je)}let E=_;if(y&&c!==!1){const O=Object.keys(y),{shapeFlag:R}=E;O.length&&R&7&&(o&&O.some(hs)&&(y=pc(y,o)),E=Bt(E,y,!1,!0))}return n.dirs&&(E=Bt(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&Dn(E,n.transition),_=E,aa(m),_}const dc=e=>{let t;for(const n in e)(n==="class"||n==="style"||da(n))&&((t||(t={}))[n]=e[n]);return t},pc=(e,t)=>{const n={};for(const a in e)(!hs(a)||!(a.slice(9)in t))&&(n[a]=e[a]);return n};function fc(e,t,n){const{props:a,children:s,component:o}=e,{props:r,children:i,patchFlag:l}=t,p=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return a?no(a,r,p):!!r;if(l&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const g=u[f];if(r[g]!==a[g]&&!va(p,g))return!0}}}else return(s||i)&&(!i||!i.$stable)?!0:a===r?!1:a?r?no(a,r,p):!0:!!r;return!1}function no(e,t,n){const a=Object.keys(t);if(a.length!==Object.keys(e).length)return!0;for(let s=0;s<a.length;s++){const o=a[s];if(t[o]!==e[o]&&!va(n,o))return!0}return!1}function hc({vnode:e,parent:t},n){for(;t;){const a=t.subTree;if(a.suspense&&a.suspense.activeBranch===e&&(a.el=e.el),a===e)(e=t.vnode).el=n,t=t.parent;else break}}const ai=e=>e.__isSuspense;function gc(e,t){t&&t.pendingBranch?ae(e)?t.effects.push(...e):t.effects.push(e):El(e)}const ct=Symbol.for("v-fgt"),Ta=Symbol.for("v-txt"),je=Symbol.for("v-cmt"),Qn=Symbol.for("v-stc"),Rn=[];let qe=null;function Qe(e=!1){Rn.push(qe=e?null:[])}function mc(){Rn.pop(),qe=Rn[Rn.length-1]||null}let Mn=1;function ra(e,t=!1){Mn+=e,e<0&&qe&&t&&(qe.hasOnce=!0)}function si(e){return e.dynamicChildren=Mn>0?qe||cn:null,mc(),Mn>0&&qe&&qe.push(e),e}function pt(e,t,n,a,s,o){return si(k(e,t,n,a,s,o,!0))}function ao(e,t,n,a,s){return si(Fe(e,t,n,a,s,!0))}function ia(e){return e?e.__v_isVNode===!0:!1}function Vt(e,t){return e.type===t.type&&e.key===t.key}const oi=({key:e})=>e??null,Xn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Ee(e)||Te(e)||oe(e)?{i:Xe,r:e,k:t,f:!!n}:e:null);function k(e,t=null,n=null,a=0,s=null,o=e===ct?0:1,r=!1,i=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&oi(t),ref:t&&Xn(t),scopeId:Rr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:a,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Xe};return i?(Cs(l,n),o&128&&e.normalize(l)):n&&(l.shapeFlag|=Ee(n)?8:16),Mn>0&&!r&&qe&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&qe.push(l),l}const Fe=_c;function _c(e,t=null,n=null,a=0,s=null,o=!1){if((!e||e===$r)&&(e=je),ia(e)){const i=Bt(e,t,!0);return n&&Cs(i,n),Mn>0&&!o&&qe&&(i.shapeFlag&6?qe[qe.indexOf(e)]=i:qe.push(i)),i.patchFlag=-2,i}if(wc(e)&&(e=e.__vccOpts),t){t=bc(t);let{class:i,style:l}=t;i&&!Ee(i)&&(t.class=Mt(i)),be(l)&&(Os(l)&&!ae(l)&&(l=Ae({},l)),t.style=_s(l))}const r=Ee(e)?1:ai(e)?128:xr(e)?64:be(e)?4:oe(e)?2:0;return k(e,t,n,a,s,r,o,!0)}function bc(e){return e?Os(e)||qr(e)?Ae({},e):e:null}function Bt(e,t,n=!1,a=!1){const{props:s,ref:o,patchFlag:r,children:i,transition:l}=e,p=t?yc(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&oi(p),ref:t&&t.ref?n&&o?ae(o)?o.concat(Xn(t)):[o,Xn(t)]:Xn(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ct?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Bt(e.ssContent),ssFallback:e.ssFallback&&Bt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&a&&Dn(u,l.clone(u)),u}function Ea(e=" ",t=0){return Fe(Ta,null,e,t)}function Kt(e,t){const n=Fe(Qn,null,e);return n.staticCount=t,n}function ut(e){return e==null||typeof e=="boolean"?Fe(je):ae(e)?Fe(ct,null,e.slice()):ia(e)?xt(e):Fe(Ta,null,String(e))}function xt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Bt(e)}function Cs(e,t){let n=0;const{shapeFlag:a}=e;if(t==null)t=null;else if(ae(t))n=16;else if(typeof t=="object")if(a&65){const s=t.default;s&&(s._c&&(s._d=!1),Cs(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!qr(t)?t._ctx=Xe:s===3&&Xe&&(Xe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else oe(t)?(t={default:t,_ctx:Xe},n=32):(t=String(t),a&64?(n=16,t=[Ea(t)]):n=8);e.children=t,e.shapeFlag|=n}function yc(...e){const t={};for(let n=0;n<e.length;n++){const a=e[n];for(const s in a)if(s==="class")t.class!==a.class&&(t.class=Mt([t.class,a.class]));else if(s==="style")t.style=_s([t.style,a.style]);else if(da(s)){const o=t[s],r=a[s];r&&o!==r&&!(ae(o)&&o.includes(r))&&(t[s]=o?[].concat(o,r):r)}else s!==""&&(t[s]=a[s])}return t}function rt(e,t,n,a=null){tt(e,t,7,[n,a])}const vc=Yr();let Tc=0;function Ec(e,t,n){const a=e.type,s=(t?t.appContext:e.appContext)||vc,o={uid:Tc++,vnode:e,type:a,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new or(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Jr(a,s),emitsOptions:ni(a,s),emit:null,emitted:null,propsDefaults:me,inheritAttrs:a.inheritAttrs,ctx:me,data:me,props:me,attrs:me,slots:me,refs:me,setupState:me,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=cc.bind(null,o),e.ce&&e.ce(o),o}let Re=null;const Ns=()=>Re||Xe;let la,as;{const e=ga(),t=(n,a)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(a),o=>{s.length>1?s.forEach(r=>r(o)):s[0](o)}};la=t("__VUE_INSTANCE_SETTERS__",n=>Re=n),as=t("__VUE_SSR_SETTERS__",n=>Bn=n)}const Kn=e=>{const t=Re;return la(e),e.scope.on(),()=>{e.scope.off(),la(t)}},so=()=>{Re&&Re.scope.off(),la(null)};function ri(e){return e.vnode.shapeFlag&4}let Bn=!1;function Sc(e,t=!1,n=!1){t&&as(t);const{props:a,children:s}=e.vnode,o=ri(e);Vl(e,a,o,t),Zl(e,s,n||t);const r=o?Ac(e,t):void 0;return t&&as(!1),r}function Ac(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,$l);const{setup:a}=n;if(a){Et();const s=e.setupContext=a.length>1?Pc(e):null,o=Kn(e),r=Hn(a,e,0,[e.props,s]),i=Qo(r);if(St(),o(),(i||e.sp)&&!Pn(e)&&Br(e),i){if(r.then(so,so),t)return r.then(l=>{oo(e,l)}).catch(l=>{ma(l,e,0)});e.asyncDep=r}else oo(e,r)}else ii(e)}function oo(e,t,n){oe(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:be(t)&&(e.setupState=Ar(t)),ii(e)}function ii(e,t,n){const a=e.type;e.render||(e.render=a.render||dt);{const s=Kn(e);Et();try{Hl(e)}finally{St(),s()}}}const Oc={get(e,t){return ke(e,"get",""),e[t]}};function Pc(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Oc),slots:e.slots,emit:e.emit,expose:t}}function Ls(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Ar(Ps(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in kn)return kn[n](e)},has(t,n){return n in t||n in kn}})):e.proxy}function kc(e,t=!0){return oe(e)?e.displayName||e.name:e.name||t&&e.__name}function wc(e){return oe(e)&&"__vccOpts"in e}const Ge=(e,t)=>_l(e,t,Bn);function Is(e,t,n){try{ra(-1);const a=arguments.length;return a===2?be(t)&&!ae(t)?ia(t)?Fe(e,null,[t]):Fe(e,t):Fe(e,null,t):(a>3?n=Array.prototype.slice.call(arguments,2):a===3&&ia(n)&&(n=[n]),Fe(e,t,n))}finally{ra(1)}}const Rc="3.5.24";let ss;const ro=typeof window<"u"&&window.trustedTypes;if(ro)try{ss=ro.createPolicy("vue",{createHTML:e=>e})}catch{}const li=ss?e=>ss.createHTML(e):e=>e,xc="http://www.w3.org/2000/svg",Cc="http://www.w3.org/1998/Math/MathML",_t=typeof document<"u"?document:null,io=_t&&_t.createElement("template"),Nc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,a)=>{const s=t==="svg"?_t.createElementNS(xc,e):t==="mathml"?_t.createElementNS(Cc,e):n?_t.createElement(e,{is:n}):_t.createElement(e);return e==="select"&&a&&a.multiple!=null&&s.setAttribute("multiple",a.multiple),s},createText:e=>_t.createTextNode(e),createComment:e=>_t.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>_t.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,a,s,o){const r=n?n.previousSibling:t.lastChild;if(s&&(s===o||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===o||!(s=s.nextSibling)););else{io.innerHTML=li(a==="svg"?`<svg>${e}</svg>`:a==="mathml"?`<math>${e}</math>`:e);const i=io.content;if(a==="svg"||a==="mathml"){const l=i.firstChild;for(;l.firstChild;)i.appendChild(l.firstChild);i.removeChild(l)}t.insertBefore(i,n)}return[r?r.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Pt="transition",_n="animation",Fn=Symbol("_vtc"),ci={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Lc=Ae({},Cr,ci),Ic=e=>(e.displayName="Transition",e.props=Lc,e),Dc=Ic((e,{slots:t})=>Is(Pl,Mc(e),t)),qt=(e,t=[])=>{ae(e)?e.forEach(n=>n(...t)):e&&e(...t)},lo=e=>e?ae(e)?e.some(t=>t.length>1):e.length>1:!1;function Mc(e){const t={};for(const P in e)P in ci||(t[P]=e[P]);if(e.css===!1)return t;const{name:n="v",type:a,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:r=`${n}-enter-active`,enterToClass:i=`${n}-enter-to`,appearFromClass:l=o,appearActiveClass:p=r,appearToClass:u=i,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=e,h=Bc(s),c=h&&h[0],m=h&&h[1],{onBeforeEnter:_,onEnter:y,onEnterCancelled:E,onLeave:O,onLeaveCancelled:R,onBeforeAppear:M=_,onAppear:B=y,onAppearCancelled:$=E}=t,T=(P,W,X,j)=>{P._enterCancelled=j,Wt(P,W?u:i),Wt(P,W?p:r),X&&X()},w=(P,W)=>{P._isLeaving=!1,Wt(P,f),Wt(P,d),Wt(P,g),W&&W()},U=P=>(W,X)=>{const j=P?B:y,Y=()=>T(W,P,X);qt(j,[W,Y]),co(()=>{Wt(W,P?l:o),gt(W,P?u:i),lo(j)||uo(W,a,c,Y)})};return Ae(t,{onBeforeEnter(P){qt(_,[P]),gt(P,o),gt(P,r)},onBeforeAppear(P){qt(M,[P]),gt(P,l),gt(P,p)},onEnter:U(!1),onAppear:U(!0),onLeave(P,W){P._isLeaving=!0;const X=()=>w(P,W);gt(P,f),P._enterCancelled?(gt(P,g),ho(P)):(ho(P),gt(P,g)),co(()=>{P._isLeaving&&(Wt(P,f),gt(P,d),lo(O)||uo(P,a,m,X))}),qt(O,[P,X])},onEnterCancelled(P){T(P,!1,void 0,!0),qt(E,[P])},onAppearCancelled(P){T(P,!0,void 0,!0),qt($,[P])},onLeaveCancelled(P){w(P),qt(R,[P])}})}function Bc(e){if(e==null)return null;if(be(e))return[Ma(e.enter),Ma(e.leave)];{const t=Ma(e);return[t,t]}}function Ma(e){return Bi(e)}function gt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Fn]||(e[Fn]=new Set)).add(t)}function Wt(e,t){t.split(/\s+/).forEach(a=>a&&e.classList.remove(a));const n=e[Fn];n&&(n.delete(t),n.size||(e[Fn]=void 0))}function co(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Fc=0;function uo(e,t,n,a){const s=e._endId=++Fc,o=()=>{s===e._endId&&a()};if(n!=null)return setTimeout(o,n);const{type:r,timeout:i,propCount:l}=Uc(e,t);if(!r)return a();const p=r+"end";let u=0;const f=()=>{e.removeEventListener(p,g),o()},g=d=>{d.target===e&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},i+1),e.addEventListener(p,g)}function Uc(e,t){const n=window.getComputedStyle(e),a=h=>(n[h]||"").split(", "),s=a(`${Pt}Delay`),o=a(`${Pt}Duration`),r=po(s,o),i=a(`${_n}Delay`),l=a(`${_n}Duration`),p=po(i,l);let u=null,f=0,g=0;t===Pt?r>0&&(u=Pt,f=r,g=o.length):t===_n?p>0&&(u=_n,f=p,g=l.length):(f=Math.max(r,p),u=f>0?r>p?Pt:_n:null,g=u?u===Pt?o.length:l.length:0);const d=u===Pt&&/\b(?:transform|all)(?:,|$)/.test(a(`${Pt}Property`).toString());return{type:u,timeout:f,propCount:g,hasTransform:d}}function po(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,a)=>fo(n)+fo(e[a])))}function fo(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function ho(e){return(e?e.ownerDocument:document).body.offsetHeight}function $c(e,t,n){const a=e[Fn];a&&(t=(t?[t,...a]:[...a]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const go=Symbol("_vod"),Hc=Symbol("_vsh"),Kc=Symbol(""),Yc=/(?:^|;)\s*display\s*:/;function jc(e,t,n){const a=e.style,s=Ee(n);let o=!1;if(n&&!s){if(t)if(Ee(t))for(const r of t.split(";")){const i=r.slice(0,r.indexOf(":")).trim();n[i]==null&&Zn(a,i,"")}else for(const r in t)n[r]==null&&Zn(a,r,"");for(const r in n)r==="display"&&(o=!0),Zn(a,r,n[r])}else if(s){if(t!==n){const r=a[Kc];r&&(n+=";"+r),a.cssText=n,o=Yc.test(n)}}else t&&e.removeAttribute("style");go in e&&(e[go]=o?a.display:"",e[Hc]&&(a.display="none"))}const mo=/\s*!important$/;function Zn(e,t,n){if(ae(n))n.forEach(a=>Zn(e,t,a));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const a=Gc(e,t);mo.test(n)?e.setProperty($t(a),n.replace(mo,""),"important"):e[a]=n}}const _o=["Webkit","Moz","ms"],Ba={};function Gc(e,t){const n=Ba[t];if(n)return n;let a=ze(t);if(a!=="filter"&&a in e)return Ba[t]=a;a=ha(a);for(let s=0;s<_o.length;s++){const o=_o[s]+a;if(o in e)return Ba[t]=o}return t}const bo="http://www.w3.org/1999/xlink";function yo(e,t,n,a,s,o=Yi(t)){a&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(bo,t.slice(6,t.length)):e.setAttributeNS(bo,t,n):n==null||o&&!tr(n)?e.removeAttribute(t):e.setAttribute(t,o?"":Ut(n)?String(n):n)}function vo(e,t,n,a,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?li(n):n);return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){const i=o==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(i!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let r=!1;if(n===""||n==null){const i=typeof e[t];i==="boolean"?n=tr(n):n==null&&i==="string"?(n="",r=!0):i==="number"&&(n=0,r=!0)}try{e[t]=n}catch{}r&&e.removeAttribute(s||t)}function qc(e,t,n,a){e.addEventListener(t,n,a)}function Wc(e,t,n,a){e.removeEventListener(t,n,a)}const To=Symbol("_vei");function Jc(e,t,n,a,s=null){const o=e[To]||(e[To]={}),r=o[t];if(a&&r)r.value=a;else{const[i,l]=Vc(t);if(a){const p=o[t]=Xc(a,s);qc(e,i,p,l)}else r&&(Wc(e,i,r,l),o[t]=void 0)}}const Eo=/(?:Once|Passive|Capture)$/;function Vc(e){let t;if(Eo.test(e)){t={};let a;for(;a=e.match(Eo);)e=e.slice(0,e.length-a[0].length),t[a[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):$t(e.slice(2)),t]}let Fa=0;const zc=Promise.resolve(),Qc=()=>Fa||(zc.then(()=>Fa=0),Fa=Date.now());function Xc(e,t){const n=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=n.attached)return;tt(Zc(a,n.value),t,5,[a])};return n.value=e,n.attached=Qc(),n}function Zc(e,t){if(ae(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(a=>s=>!s._stopped&&a&&a(s))}else return t}const So=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,eu=(e,t,n,a,s,o)=>{const r=s==="svg";t==="class"?$c(e,a,r):t==="style"?jc(e,n,a):da(t)?hs(t)||Jc(e,t,n,a,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):tu(e,t,a,r))?(vo(e,t,a),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&yo(e,t,a,r,o,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Ee(a))?vo(e,ze(t),a,o,t):(t==="true-value"?e._trueValue=a:t==="false-value"&&(e._falseValue=a),yo(e,t,a,r))};function tu(e,t,n,a){if(a)return!!(t==="innerHTML"||t==="textContent"||t in e&&So(t)&&oe(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return So(t)&&Ee(n)?!1:t in e}const nu=["ctrl","shift","alt","meta"],au={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>nu.some(n=>e[`${n}Key`]&&!t.includes(n))},Sa=(e,t)=>{const n=e._withMods||(e._withMods={}),a=t.join(".");return n[a]||(n[a]=((s,...o)=>{for(let r=0;r<t.length;r++){const i=au[t[r]];if(i&&i(s,t))return}return e(s,...o)}))},su={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},yt=(e,t)=>{const n=e._withKeys||(e._withKeys={}),a=t.join(".");return n[a]||(n[a]=(s=>{if(!("key"in s))return;const o=$t(s.key);if(t.some(r=>r===o||su[r]===o))return e(s)}))},ou=Ae({patchProp:eu},Nc);let Ao;function ru(){return Ao||(Ao=tc(ou))}const iu=((...e)=>{const t=ru().createApp(...e),{mount:n}=t;return t.mount=a=>{const s=cu(a);if(!s)return;const o=t._component;!oe(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const r=n(s,!1,lu(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),r},t});function lu(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function cu(e){return Ee(e)?document.querySelector(e):e}let ui;const Aa=e=>ui=e,di=Symbol();function os(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var xn;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(xn||(xn={}));function uu(){const e=rr(!0),t=e.run(()=>Je({}));let n=[],a=[];const s=Ps({install(o){Aa(s),s._a=o,o.provide(di,s),o.config.globalProperties.$pinia=s,a.forEach(r=>n.push(r)),a=[]},use(o){return this._a?n.push(o):a.push(o),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}const pi=()=>{};function Oo(e,t,n,a=pi){e.add(t);const s=()=>{e.delete(t)&&a()};return!n&&ir()&&ji(s),s}function sn(e,...t){e.forEach(n=>{n(...t)})}const du=e=>e(),Po=Symbol(),Ua=Symbol();function rs(e,t){e instanceof Map&&t instanceof Map?t.forEach((n,a)=>e.set(a,n)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const a=t[n],s=e[n];os(s)&&os(a)&&e.hasOwnProperty(n)&&!Te(a)&&!en(a)?e[n]=rs(s,a):e[n]=a}return e}const pu=Symbol();function fu(e){return!os(e)||!Object.prototype.hasOwnProperty.call(e,pu)}const{assign:wt}=Object;function hu(e){return!!(Te(e)&&e.effect)}function gu(e,t,n,a){const{state:s,actions:o,getters:r}=t,i=n.state.value[e];let l;function p(){i||(n.state.value[e]=s?s():{});const u=fl(n.state.value[e]);return wt(u,o,Object.keys(r||{}).reduce((f,g)=>(f[g]=Ps(Ge(()=>{Aa(n);const d=n._s.get(e);return r[g].call(d,d)})),f),{}))}return l=fi(e,p,t,n,a,!0),l}function fi(e,t,n={},a,s,o){let r;const i=wt({actions:{}},n),l={deep:!0};let p,u,f=new Set,g=new Set,d;const h=a.state.value[e];!o&&!h&&(a.state.value[e]={}),Je({});let c;function m($){let T;p=u=!1,typeof $=="function"?($(a.state.value[e]),T={type:xn.patchFunction,storeId:e,events:d}):(rs(a.state.value[e],$),T={type:xn.patchObject,payload:$,storeId:e,events:d});const w=c=Symbol();ks().then(()=>{c===w&&(p=!0)}),u=!0,sn(f,T,a.state.value[e])}const _=o?function(){const{state:T}=n,w=T?T():{};this.$patch(U=>{wt(U,w)})}:pi;function y(){r.stop(),f.clear(),g.clear(),a._s.delete(e)}const E=($,T="")=>{if(Po in $)return $[Ua]=T,$;const w=function(){Aa(a);const U=Array.from(arguments),P=new Set,W=new Set;function X(x){P.add(x)}function j(x){W.add(x)}sn(g,{args:U,name:w[Ua],store:R,after:X,onError:j});let Y;try{Y=$.apply(this&&this.$id===e?this:R,U)}catch(x){throw sn(W,x),x}return Y instanceof Promise?Y.then(x=>(sn(P,x),x)).catch(x=>(sn(W,x),Promise.reject(x))):(sn(P,Y),Y)};return w[Po]=!0,w[Ua]=T,w},O={_p:a,$id:e,$onAction:Oo.bind(null,g),$patch:m,$reset:_,$subscribe($,T={}){const w=Oo(f,$,T.detached,()=>U()),U=r.run(()=>wn(()=>a.state.value[e],P=>{(T.flush==="sync"?u:p)&&$({storeId:e,type:xn.direct,events:d},P)},wt({},l,T)));return w},$dispose:y},R=Tt(O);a._s.set(e,R);const B=(a._a&&a._a.runWithContext||du)(()=>a._e.run(()=>(r=rr()).run(()=>t({action:E}))));for(const $ in B){const T=B[$];if(Te(T)&&!hu(T)||en(T))o||(h&&fu(T)&&(Te(T)?T.value=h[$]:rs(T,h[$])),a.state.value[e][$]=T);else if(typeof T=="function"){const w=E(T,$);B[$]=w,i.actions[$]=T}}return wt(R,B),wt(le(R),B),Object.defineProperty(R,"$state",{get:()=>a.state.value[e],set:$=>{m(T=>{wt(T,$)})}}),a._p.forEach($=>{wt(R,r.run(()=>$({store:R,app:a._a,pinia:a,options:i})))}),h&&o&&n.hydrate&&n.hydrate(R.$state,h),p=!0,u=!0,R}function mu(e,t,n){let a;const s=typeof t=="function";a=s?n:t;function o(r,i){const l=Jl();return r=r||(l?Ve(di,null):null),r&&Aa(r),r=ui,r._s.has(e)||(s?fi(e,t,a,r):gu(e,a,r)),r._s.get(e)}return o.$id=e,o}const ln=typeof document<"u";function hi(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function _u(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&hi(e.default)}const ue=Object.assign;function $a(e,t){const n={};for(const a in t){const s=t[a];n[a]=nt(s)?s.map(e):e(s)}return n}const Cn=()=>{},nt=Array.isArray;function ko(e,t){const n={};for(const a in e)n[a]=a in t?t[a]:e[a];return n}const gi=/#/g,bu=/&/g,yu=/\//g,vu=/=/g,Tu=/\?/g,mi=/\+/g,Eu=/%5B/g,Su=/%5D/g,_i=/%5E/g,Au=/%60/g,bi=/%7B/g,Ou=/%7C/g,yi=/%7D/g,Pu=/%20/g;function Ds(e){return e==null?"":encodeURI(""+e).replace(Ou,"|").replace(Eu,"[").replace(Su,"]")}function ku(e){return Ds(e).replace(bi,"{").replace(yi,"}").replace(_i,"^")}function is(e){return Ds(e).replace(mi,"%2B").replace(Pu,"+").replace(gi,"%23").replace(bu,"%26").replace(Au,"`").replace(bi,"{").replace(yi,"}").replace(_i,"^")}function wu(e){return is(e).replace(vu,"%3D")}function Ru(e){return Ds(e).replace(gi,"%23").replace(Tu,"%3F")}function xu(e){return Ru(e).replace(yu,"%2F")}function Un(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Cu=/\/$/,Nu=e=>e.replace(Cu,"");function Ha(e,t,n="/"){let a,s={},o="",r="";const i=t.indexOf("#");let l=t.indexOf("?");return l=i>=0&&l>i?-1:l,l>=0&&(a=t.slice(0,l),o=t.slice(l,i>0?i:t.length),s=e(o.slice(1))),i>=0&&(a=a||t.slice(0,i),r=t.slice(i,t.length)),a=Mu(a??t,n),{fullPath:a+o+r,path:a,query:s,hash:Un(r)}}function Lu(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function wo(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Iu(e,t,n){const a=t.matched.length-1,s=n.matched.length-1;return a>-1&&a===s&&pn(t.matched[a],n.matched[s])&&vi(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function pn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function vi(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Du(e[n],t[n]))return!1;return!0}function Du(e,t){return nt(e)?Ro(e,t):nt(t)?Ro(t,e):e===t}function Ro(e,t){return nt(t)?e.length===t.length&&e.every((n,a)=>n===t[a]):e.length===1&&e[0]===t}function Mu(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),a=e.split("/"),s=a[a.length-1];(s===".."||s===".")&&a.push("");let o=n.length-1,r,i;for(r=0;r<a.length;r++)if(i=a[r],i!==".")if(i==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+a.slice(r).join("/")}const kt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let ls=(function(e){return e.pop="pop",e.push="push",e})({}),Ka=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function Bu(e){if(!e)if(ln){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Nu(e)}const Fu=/^[^#]+#/;function Uu(e,t){return e.replace(Fu,"#")+t}function $u(e,t){const n=document.documentElement.getBoundingClientRect(),a=e.getBoundingClientRect();return{behavior:t.behavior,left:a.left-n.left-(t.left||0),top:a.top-n.top-(t.top||0)}}const Oa=()=>({left:window.scrollX,top:window.scrollY});function Hu(e){let t;if("el"in e){const n=e.el,a=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?a?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=$u(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function xo(e,t){return(history.state?history.state.position-t:-1)+e}const cs=new Map;function Ku(e,t){cs.set(e,t)}function Yu(e){const t=cs.get(e);return cs.delete(e),t}function ju(e){return typeof e=="string"||e&&typeof e=="object"}function Ti(e){return typeof e=="string"||typeof e=="symbol"}let ve=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const Ei=Symbol("");ve.MATCHER_NOT_FOUND+"",ve.NAVIGATION_GUARD_REDIRECT+"",ve.NAVIGATION_ABORTED+"",ve.NAVIGATION_CANCELLED+"",ve.NAVIGATION_DUPLICATED+"";function fn(e,t){return ue(new Error,{type:e,[Ei]:!0},t)}function mt(e,t){return e instanceof Error&&Ei in e&&(t==null||!!(e.type&t))}const Gu=["params","query","hash"];function qu(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of Gu)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function Wu(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<n.length;++a){const s=n[a].replace(mi," "),o=s.indexOf("="),r=Un(o<0?s:s.slice(0,o)),i=o<0?null:Un(s.slice(o+1));if(r in t){let l=t[r];nt(l)||(l=t[r]=[l]),l.push(i)}else t[r]=i}return t}function Co(e){let t="";for(let n in e){const a=e[n];if(n=wu(n),a==null){a!==void 0&&(t+=(t.length?"&":"")+n);continue}(nt(a)?a.map(s=>s&&is(s)):[a&&is(a)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function Ju(e){const t={};for(const n in e){const a=e[n];a!==void 0&&(t[n]=nt(a)?a.map(s=>s==null?null:""+s):a==null?a:""+a)}return t}const Vu=Symbol(""),No=Symbol(""),Pa=Symbol(""),Ms=Symbol(""),us=Symbol("");function bn(){let e=[];function t(a){return e.push(a),()=>{const s=e.indexOf(a);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Ct(e,t,n,a,s,o=r=>r()){const r=a&&(a.enterCallbacks[s]=a.enterCallbacks[s]||[]);return()=>new Promise((i,l)=>{const p=g=>{g===!1?l(fn(ve.NAVIGATION_ABORTED,{from:n,to:t})):g instanceof Error?l(g):ju(g)?l(fn(ve.NAVIGATION_GUARD_REDIRECT,{from:t,to:g})):(r&&a.enterCallbacks[s]===r&&typeof g=="function"&&r.push(g),i())},u=o(()=>e.call(a&&a.instances[s],t,n,p));let f=Promise.resolve(u);e.length<3&&(f=f.then(p)),f.catch(g=>l(g))})}function Ya(e,t,n,a,s=o=>o()){const o=[];for(const r of e)for(const i in r.components){let l=r.components[i];if(!(t!=="beforeRouteEnter"&&!r.instances[i]))if(hi(l)){const p=(l.__vccOpts||l)[t];p&&o.push(Ct(p,n,a,r,i,s))}else{let p=l();o.push(()=>p.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${i}" at "${r.path}"`);const f=_u(u)?u.default:u;r.mods[i]=u,r.components[i]=f;const g=(f.__vccOpts||f)[t];return g&&Ct(g,n,a,r,i,s)()}))}}return o}function zu(e,t){const n=[],a=[],s=[],o=Math.max(t.matched.length,e.matched.length);for(let r=0;r<o;r++){const i=t.matched[r];i&&(e.matched.find(p=>pn(p,i))?a.push(i):n.push(i));const l=e.matched[r];l&&(t.matched.find(p=>pn(p,l))||s.push(l))}return[n,a,s]}let Qu=()=>location.protocol+"//"+location.host;function Si(e,t){const{pathname:n,search:a,hash:s}=t,o=e.indexOf("#");if(o>-1){let r=s.includes(e.slice(o))?e.slice(o).length:1,i=s.slice(r);return i[0]!=="/"&&(i="/"+i),wo(i,"")}return wo(n,e)+a+s}function Xu(e,t,n,a){let s=[],o=[],r=null;const i=({state:g})=>{const d=Si(e,location),h=n.value,c=t.value;let m=0;if(g){if(n.value=d,t.value=g,r&&r===h){r=null;return}m=c?g.position-c.position:0}else a(d);s.forEach(_=>{_(n.value,h,{delta:m,type:ls.pop,direction:m?m>0?Ka.forward:Ka.back:Ka.unknown})})};function l(){r=n.value}function p(g){s.push(g);const d=()=>{const h=s.indexOf(g);h>-1&&s.splice(h,1)};return o.push(d),d}function u(){if(document.visibilityState==="hidden"){const{history:g}=window;if(!g.state)return;g.replaceState(ue({},g.state,{scroll:Oa()}),"")}}function f(){for(const g of o)g();o=[],window.removeEventListener("popstate",i),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",i),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:p,destroy:f}}function Lo(e,t,n,a=!1,s=!1){return{back:e,current:t,forward:n,replaced:a,position:window.history.length,scroll:s?Oa():null}}function Zu(e){const{history:t,location:n}=window,a={value:Si(e,n)},s={value:t.state};s.value||o(a.value,{back:null,current:a.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(l,p,u){const f=e.indexOf("#"),g=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+l:Qu()+e+l;try{t[u?"replaceState":"pushState"](p,"",g),s.value=p}catch(d){console.error(d),n[u?"replace":"assign"](g)}}function r(l,p){o(l,ue({},t.state,Lo(s.value.back,l,s.value.forward,!0),p,{position:s.value.position}),!0),a.value=l}function i(l,p){const u=ue({},s.value,t.state,{forward:l,scroll:Oa()});o(u.current,u,!0),o(l,ue({},Lo(a.value,l,null),{position:u.position+1},p),!1),a.value=l}return{location:a,state:s,push:i,replace:r}}function ed(e){e=Bu(e);const t=Zu(e),n=Xu(e,t.state,t.location,t.replace);function a(o,r=!0){r||n.pauseListeners(),history.go(o)}const s=ue({location:"",base:e,go:a,createHref:Uu.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function td(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),ed(e)}let Qt=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var Se=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(Se||{});const nd={type:Qt.Static,value:""},ad=/[a-zA-Z0-9_]/;function sd(e){if(!e)return[[]];if(e==="/")return[[nd]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(d){throw new Error(`ERR (${n})/"${p}": ${d}`)}let n=Se.Static,a=n;const s=[];let o;function r(){o&&s.push(o),o=[]}let i=0,l,p="",u="";function f(){p&&(n===Se.Static?o.push({type:Qt.Static,value:p}):n===Se.Param||n===Se.ParamRegExp||n===Se.ParamRegExpEnd?(o.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),o.push({type:Qt.Param,value:p,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),p="")}function g(){p+=l}for(;i<e.length;){if(l=e[i++],l==="\\"&&n!==Se.ParamRegExp){a=n,n=Se.EscapeNext;continue}switch(n){case Se.Static:l==="/"?(p&&f(),r()):l===":"?(f(),n=Se.Param):g();break;case Se.EscapeNext:g(),n=a;break;case Se.Param:l==="("?n=Se.ParamRegExp:ad.test(l)?g():(f(),n=Se.Static,l!=="*"&&l!=="?"&&l!=="+"&&i--);break;case Se.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=Se.ParamRegExpEnd:u+=l;break;case Se.ParamRegExpEnd:f(),n=Se.Static,l!=="*"&&l!=="?"&&l!=="+"&&i--,u="";break;default:t("Unknown state");break}}return n===Se.ParamRegExp&&t(`Unfinished custom RegExp for param "${p}"`),f(),r(),s}const Io="[^/]+?",od={sensitive:!1,strict:!1,start:!0,end:!0};var Ne=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(Ne||{});const rd=/[.+*?^${}()[\]/\\]/g;function id(e,t){const n=ue({},od,t),a=[];let s=n.start?"^":"";const o=[];for(const p of e){const u=p.length?[]:[Ne.Root];n.strict&&!p.length&&(s+="/");for(let f=0;f<p.length;f++){const g=p[f];let d=Ne.Segment+(n.sensitive?Ne.BonusCaseSensitive:0);if(g.type===Qt.Static)f||(s+="/"),s+=g.value.replace(rd,"\\$&"),d+=Ne.Static;else if(g.type===Qt.Param){const{value:h,repeatable:c,optional:m,regexp:_}=g;o.push({name:h,repeatable:c,optional:m});const y=_||Io;if(y!==Io){d+=Ne.BonusCustomRegExp;try{`${y}`}catch(O){throw new Error(`Invalid custom RegExp for param "${h}" (${y}): `+O.message)}}let E=c?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;f||(E=m&&p.length<2?`(?:/${E})`:"/"+E),m&&(E+="?"),s+=E,d+=Ne.Dynamic,m&&(d+=Ne.BonusOptional),c&&(d+=Ne.BonusRepeatable),y===".*"&&(d+=Ne.BonusWildcard)}u.push(d)}a.push(u)}if(n.strict&&n.end){const p=a.length-1;a[p][a[p].length-1]+=Ne.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const r=new RegExp(s,n.sensitive?"":"i");function i(p){const u=p.match(r),f={};if(!u)return null;for(let g=1;g<u.length;g++){const d=u[g]||"",h=o[g-1];f[h.name]=d&&h.repeatable?d.split("/"):d}return f}function l(p){let u="",f=!1;for(const g of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const d of g)if(d.type===Qt.Static)u+=d.value;else if(d.type===Qt.Param){const{value:h,repeatable:c,optional:m}=d,_=h in p?p[h]:"";if(nt(_)&&!c)throw new Error(`Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`);const y=nt(_)?_.join("/"):_;if(!y)if(m)g.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${h}"`);u+=y}}return u||"/"}return{re:r,score:a,keys:o,parse:i,stringify:l}}function ld(e,t){let n=0;for(;n<e.length&&n<t.length;){const a=t[n]-e[n];if(a)return a;n++}return e.length<t.length?e.length===1&&e[0]===Ne.Static+Ne.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Ne.Static+Ne.Segment?1:-1:0}function Ai(e,t){let n=0;const a=e.score,s=t.score;for(;n<a.length&&n<s.length;){const o=ld(a[n],s[n]);if(o)return o;n++}if(Math.abs(s.length-a.length)===1){if(Do(a))return 1;if(Do(s))return-1}return s.length-a.length}function Do(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const cd={strict:!1,end:!0,sensitive:!1};function ud(e,t,n){const a=id(sd(e.path),n),s=ue(a,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function dd(e,t){const n=[],a=new Map;t=ko(cd,t);function s(f){return a.get(f)}function o(f,g,d){const h=!d,c=Bo(f);c.aliasOf=d&&d.record;const m=ko(t,f),_=[c];if("alias"in f){const O=typeof f.alias=="string"?[f.alias]:f.alias;for(const R of O)_.push(Bo(ue({},c,{components:d?d.record.components:c.components,path:R,aliasOf:d?d.record:c})))}let y,E;for(const O of _){const{path:R}=O;if(g&&R[0]!=="/"){const M=g.record.path,B=M[M.length-1]==="/"?"":"/";O.path=g.record.path+(R&&B+R)}if(y=ud(O,g,m),d?d.alias.push(y):(E=E||y,E!==y&&E.alias.push(y),h&&f.name&&!Fo(y)&&r(f.name)),Oi(y)&&l(y),c.children){const M=c.children;for(let B=0;B<M.length;B++)o(M[B],y,d&&d.children[B])}d=d||y}return E?()=>{r(E)}:Cn}function r(f){if(Ti(f)){const g=a.get(f);g&&(a.delete(f),n.splice(n.indexOf(g),1),g.children.forEach(r),g.alias.forEach(r))}else{const g=n.indexOf(f);g>-1&&(n.splice(g,1),f.record.name&&a.delete(f.record.name),f.children.forEach(r),f.alias.forEach(r))}}function i(){return n}function l(f){const g=hd(f,n);n.splice(g,0,f),f.record.name&&!Fo(f)&&a.set(f.record.name,f)}function p(f,g){let d,h={},c,m;if("name"in f&&f.name){if(d=a.get(f.name),!d)throw fn(ve.MATCHER_NOT_FOUND,{location:f});m=d.record.name,h=ue(Mo(g.params,d.keys.filter(E=>!E.optional).concat(d.parent?d.parent.keys.filter(E=>E.optional):[]).map(E=>E.name)),f.params&&Mo(f.params,d.keys.map(E=>E.name))),c=d.stringify(h)}else if(f.path!=null)c=f.path,d=n.find(E=>E.re.test(c)),d&&(h=d.parse(c),m=d.record.name);else{if(d=g.name?a.get(g.name):n.find(E=>E.re.test(g.path)),!d)throw fn(ve.MATCHER_NOT_FOUND,{location:f,currentLocation:g});m=d.record.name,h=ue({},g.params,f.params),c=d.stringify(h)}const _=[];let y=d;for(;y;)_.unshift(y.record),y=y.parent;return{name:m,path:c,params:h,matched:_,meta:fd(_)}}e.forEach(f=>o(f));function u(){n.length=0,a.clear()}return{addRoute:o,resolve:p,removeRoute:r,clearRoutes:u,getRoutes:i,getRecordMatcher:s}}function Mo(e,t){const n={};for(const a of t)a in e&&(n[a]=e[a]);return n}function Bo(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:pd(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function pd(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const a in e.components)t[a]=typeof n=="object"?n[a]:n;return t}function Fo(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function fd(e){return e.reduce((t,n)=>ue(t,n.meta),{})}function hd(e,t){let n=0,a=t.length;for(;n!==a;){const o=n+a>>1;Ai(e,t[o])<0?a=o:n=o+1}const s=gd(e);return s&&(a=t.lastIndexOf(s,a-1)),a}function gd(e){let t=e;for(;t=t.parent;)if(Oi(t)&&Ai(e,t)===0)return t}function Oi({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Uo(e){const t=Ve(Pa),n=Ve(Ms),a=Ge(()=>{const l=Dt(e.to);return t.resolve(l)}),s=Ge(()=>{const{matched:l}=a.value,{length:p}=l,u=l[p-1],f=n.matched;if(!u||!f.length)return-1;const g=f.findIndex(pn.bind(null,u));if(g>-1)return g;const d=$o(l[p-2]);return p>1&&$o(u)===d&&f[f.length-1].path!==d?f.findIndex(pn.bind(null,l[p-2])):g}),o=Ge(()=>s.value>-1&&vd(n.params,a.value.params)),r=Ge(()=>s.value>-1&&s.value===n.matched.length-1&&vi(n.params,a.value.params));function i(l={}){if(yd(l)){const p=t[Dt(e.replace)?"replace":"push"](Dt(e.to)).catch(Cn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>p),p}return Promise.resolve()}return{route:a,href:Ge(()=>a.value.href),isActive:o,isExactActive:r,navigate:i}}function md(e){return e.length===1?e[0]:e}const _d=Mr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Uo,setup(e,{slots:t}){const n=Tt(Uo(e)),{options:a}=Ve(Pa),s=Ge(()=>({[Ho(e.activeClass,a.linkActiveClass,"router-link-active")]:n.isActive,[Ho(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=t.default&&md(t.default(n));return e.custom?o:Is("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},o)}}}),bd=_d;function yd(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function vd(e,t){for(const n in t){const a=t[n],s=e[n];if(typeof a=="string"){if(a!==s)return!1}else if(!nt(s)||s.length!==a.length||a.some((o,r)=>o!==s[r]))return!1}return!0}function $o(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ho=(e,t,n)=>e??t??n,Td=Mr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const a=Ve(us),s=Ge(()=>e.route||a.value),o=Ve(No,0),r=Ge(()=>{let p=Dt(o);const{matched:u}=s.value;let f;for(;(f=u[p])&&!f.components;)p++;return p}),i=Ge(()=>s.value.matched[r.value]);zn(No,Ge(()=>r.value+1)),zn(Vu,i),zn(us,s);const l=Je();return wn(()=>[l.value,i.value,e.name],([p,u,f],[g,d,h])=>{u&&(u.instances[f]=p,d&&d!==u&&p&&p===g&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),p&&u&&(!d||!pn(u,d)||!g)&&(u.enterCallbacks[f]||[]).forEach(c=>c(p))},{flush:"post"}),()=>{const p=s.value,u=e.name,f=i.value,g=f&&f.components[u];if(!g)return Ko(n.default,{Component:g,route:p});const d=f.props[u],h=d?d===!0?p.params:typeof d=="function"?d(p):d:null,m=Is(g,ue({},h,t,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Ko(n.default,{Component:m,route:p})||m}}});function Ko(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Pi=Td;function Ed(e){const t=dd(e.routes,e),n=e.parseQuery||Wu,a=e.stringifyQuery||Co,s=e.history,o=bn(),r=bn(),i=bn(),l=ul(kt);let p=kt;ln&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=$a.bind(null,L=>""+L),f=$a.bind(null,xu),g=$a.bind(null,Un);function d(L,z){let J,ee;return Ti(L)?(J=t.getRecordMatcher(L),ee=z):ee=L,t.addRoute(ee,J)}function h(L){const z=t.getRecordMatcher(L);z&&t.removeRoute(z)}function c(){return t.getRoutes().map(L=>L.record)}function m(L){return!!t.getRecordMatcher(L)}function _(L,z){if(z=ue({},z||l.value),typeof L=="string"){const S=Ha(n,L,z.path),N=t.resolve({path:S.path},z),I=s.createHref(S.fullPath);return ue(S,N,{params:g(N.params),hash:Un(S.hash),redirectedFrom:void 0,href:I})}let J;if(L.path!=null)J=ue({},L,{path:Ha(n,L.path,z.path).path});else{const S=ue({},L.params);for(const N in S)S[N]==null&&delete S[N];J=ue({},L,{params:f(S)}),z.params=f(z.params)}const ee=t.resolve(J,z),re=L.hash||"";ee.params=u(g(ee.params));const b=Lu(a,ue({},L,{hash:ku(re),path:ee.path})),v=s.createHref(b);return ue({fullPath:b,hash:re,query:a===Co?Ju(L.query):L.query||{}},ee,{redirectedFrom:void 0,href:v})}function y(L){return typeof L=="string"?Ha(n,L,l.value.path):ue({},L)}function E(L,z){if(p!==L)return fn(ve.NAVIGATION_CANCELLED,{from:z,to:L})}function O(L){return B(L)}function R(L){return O(ue(y(L),{replace:!0}))}function M(L,z){const J=L.matched[L.matched.length-1];if(J&&J.redirect){const{redirect:ee}=J;let re=typeof ee=="function"?ee(L,z):ee;return typeof re=="string"&&(re=re.includes("?")||re.includes("#")?re=y(re):{path:re},re.params={}),ue({query:L.query,hash:L.hash,params:re.path!=null?{}:L.params},re)}}function B(L,z){const J=p=_(L),ee=l.value,re=L.state,b=L.force,v=L.replace===!0,S=M(J,ee);if(S)return B(ue(y(S),{state:typeof S=="object"?ue({},re,S.state):re,force:b,replace:v}),z||J);const N=J;N.redirectedFrom=z;let I;return!b&&Iu(a,ee,J)&&(I=fn(ve.NAVIGATION_DUPLICATED,{to:N,from:ee}),_e(ee,ee,!0,!1)),(I?Promise.resolve(I):w(N,ee)).catch(C=>mt(C)?mt(C,ve.NAVIGATION_GUARD_REDIRECT)?C:ce(C):H(C,N,ee)).then(C=>{if(C){if(mt(C,ve.NAVIGATION_GUARD_REDIRECT))return B(ue({replace:v},y(C.to),{state:typeof C.to=="object"?ue({},re,C.to.state):re,force:b}),z||N)}else C=P(N,ee,!0,v,re);return U(N,ee,C),C})}function $(L,z){const J=E(L,z);return J?Promise.reject(J):Promise.resolve()}function T(L){const z=xe.values().next().value;return z&&typeof z.runWithContext=="function"?z.runWithContext(L):L()}function w(L,z){let J;const[ee,re,b]=zu(L,z);J=Ya(ee.reverse(),"beforeRouteLeave",L,z);for(const S of ee)S.leaveGuards.forEach(N=>{J.push(Ct(N,L,z))});const v=$.bind(null,L,z);return J.push(v),He(J).then(()=>{J=[];for(const S of o.list())J.push(Ct(S,L,z));return J.push(v),He(J)}).then(()=>{J=Ya(re,"beforeRouteUpdate",L,z);for(const S of re)S.updateGuards.forEach(N=>{J.push(Ct(N,L,z))});return J.push(v),He(J)}).then(()=>{J=[];for(const S of b)if(S.beforeEnter)if(nt(S.beforeEnter))for(const N of S.beforeEnter)J.push(Ct(N,L,z));else J.push(Ct(S.beforeEnter,L,z));return J.push(v),He(J)}).then(()=>(L.matched.forEach(S=>S.enterCallbacks={}),J=Ya(b,"beforeRouteEnter",L,z,T),J.push(v),He(J))).then(()=>{J=[];for(const S of r.list())J.push(Ct(S,L,z));return J.push(v),He(J)}).catch(S=>mt(S,ve.NAVIGATION_CANCELLED)?S:Promise.reject(S))}function U(L,z,J){i.list().forEach(ee=>T(()=>ee(L,z,J)))}function P(L,z,J,ee,re){const b=E(L,z);if(b)return b;const v=z===kt,S=ln?history.state:{};J&&(ee||v?s.replace(L.fullPath,ue({scroll:v&&S&&S.scroll},re)):s.push(L.fullPath,re)),l.value=L,_e(L,z,J,v),ce()}let W;function X(){W||(W=s.listen((L,z,J)=>{if(!$e.listening)return;const ee=_(L),re=M(ee,$e.currentRoute.value);if(re){B(ue(re,{replace:!0,force:!0}),ee).catch(Cn);return}p=ee;const b=l.value;ln&&Ku(xo(b.fullPath,J.delta),Oa()),w(ee,b).catch(v=>mt(v,ve.NAVIGATION_ABORTED|ve.NAVIGATION_CANCELLED)?v:mt(v,ve.NAVIGATION_GUARD_REDIRECT)?(B(ue(y(v.to),{force:!0}),ee).then(S=>{mt(S,ve.NAVIGATION_ABORTED|ve.NAVIGATION_DUPLICATED)&&!J.delta&&J.type===ls.pop&&s.go(-1,!1)}).catch(Cn),Promise.reject()):(J.delta&&s.go(-J.delta,!1),H(v,ee,b))).then(v=>{v=v||P(ee,b,!1),v&&(J.delta&&!mt(v,ve.NAVIGATION_CANCELLED)?s.go(-J.delta,!1):J.type===ls.pop&&mt(v,ve.NAVIGATION_ABORTED|ve.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),U(ee,b,v)}).catch(Cn)}))}let j=bn(),Y=bn(),x;function H(L,z,J){ce(L);const ee=Y.list();return ee.length?ee.forEach(re=>re(L,z,J)):console.error(L),Promise.reject(L)}function Z(){return x&&l.value!==kt?Promise.resolve():new Promise((L,z)=>{j.add([L,z])})}function ce(L){return x||(x=!L,X(),j.list().forEach(([z,J])=>L?J(L):z()),j.reset()),L}function _e(L,z,J,ee){const{scrollBehavior:re}=e;if(!ln||!re)return Promise.resolve();const b=!J&&Yu(xo(L.fullPath,0))||(ee||!J)&&history.state&&history.state.scroll||null;return ks().then(()=>re(L,z,b)).then(v=>v&&Hu(v)).catch(v=>H(v,L,z))}const fe=L=>s.go(L);let Ue;const xe=new Set,$e={currentRoute:l,listening:!0,addRoute:d,removeRoute:h,clearRoutes:t.clearRoutes,hasRoute:m,getRoutes:c,resolve:_,options:e,push:O,replace:R,go:fe,back:()=>fe(-1),forward:()=>fe(1),beforeEach:o.add,beforeResolve:r.add,afterEach:i.add,onError:Y.add,isReady:Z,install(L){L.component("RouterLink",bd),L.component("RouterView",Pi),L.config.globalProperties.$router=$e,Object.defineProperty(L.config.globalProperties,"$route",{enumerable:!0,get:()=>Dt(l)}),ln&&!Ue&&l.value===kt&&(Ue=!0,O(s.location).catch(ee=>{}));const z={};for(const ee in kt)Object.defineProperty(z,ee,{get:()=>l.value[ee],enumerable:!0});L.provide(Pa,$e),L.provide(Ms,Er(z)),L.provide(us,l);const J=L.unmount;xe.add(L),L.unmount=function(){xe.delete(L),xe.size<1&&(p=kt,W&&W(),W=null,l.value=kt,Ue=!1,x=!1),J()}}};function He(L){return L.reduce((z,J)=>z.then(()=>T(J)),Promise.resolve())}return $e}function ft(){return Ve(Pa)}function ki(e){return Ve(Ms)}var Sd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ad(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Tn={exports:{}},Od=Tn.exports,Yo;function Pd(){return Yo||(Yo=1,(function(e,t){(function(n,a){var s={};n.PubSub?(s=n.PubSub,console.warn("PubSub already loaded, using existing version")):(n.PubSub=s,a(s)),e!==void 0&&e.exports&&(t=e.exports=s),t.PubSub=s,e.exports=t=s})(typeof window=="object"&&window||Od||Sd,function(n){var a={},s=-1,o="*";function r(c){var m;for(m in c)if(Object.prototype.hasOwnProperty.call(c,m))return!0;return!1}function i(c){return function(){throw c}}function l(c,m,_){try{c(m,_)}catch(y){setTimeout(i(y),0)}}function p(c,m,_){c(m,_)}function u(c,m,_,y){var E=a[m],O=y?p:l,R;if(Object.prototype.hasOwnProperty.call(a,m))for(R in E)Object.prototype.hasOwnProperty.call(E,R)&&O(E[R],c,_)}function f(c,m,_){return function(){var E=String(c),O=E.lastIndexOf(".");for(u(c,c,m,_);O!==-1;)E=E.substr(0,O),O=E.lastIndexOf("."),u(c,E,m,_);u(c,o,m,_)}}function g(c){var m=String(c),_=!!(Object.prototype.hasOwnProperty.call(a,m)&&r(a[m]));return _}function d(c){for(var m=String(c),_=g(m)||g(o),y=m.lastIndexOf(".");!_&&y!==-1;)m=m.substr(0,y),y=m.lastIndexOf("."),_=g(m);return _}function h(c,m,_,y){c=typeof c=="symbol"?c.toString():c;var E=f(c,m,y),O=d(c);return O?(_===!0?E():setTimeout(E,0),!0):!1}n.publish=function(c,m){return h(c,m,!1,n.immediateExceptions)},n.publishSync=function(c,m){return h(c,m,!0,n.immediateExceptions)},n.subscribe=function(c,m){if(typeof m!="function")return!1;c=typeof c=="symbol"?c.toString():c,Object.prototype.hasOwnProperty.call(a,c)||(a[c]={});var _="uid_"+String(++s);return a[c][_]=m,_},n.subscribeAll=function(c){return n.subscribe(o,c)},n.subscribeOnce=function(c,m){var _=n.subscribe(c,function(){n.unsubscribe(_),m.apply(this,arguments)});return n},n.clearAllSubscriptions=function(){a={}},n.clearSubscriptions=function(m){var _;for(_ in a)Object.prototype.hasOwnProperty.call(a,_)&&_.indexOf(m)===0&&delete a[_]},n.countSubscriptions=function(m){var _,y,E=0;for(_ in a)if(Object.prototype.hasOwnProperty.call(a,_)&&_.indexOf(m)===0){for(y in a[_])E++;break}return E},n.getSubscriptions=function(m){var _,y=[];for(_ in a)Object.prototype.hasOwnProperty.call(a,_)&&_.indexOf(m)===0&&y.push(_);return y},n.unsubscribe=function(c){var m=function($){var T;for(T in a)if(Object.prototype.hasOwnProperty.call(a,T)&&T.indexOf($)===0)return!0;return!1},_=typeof c=="string"&&(Object.prototype.hasOwnProperty.call(a,c)||m(c)),y=!_&&typeof c=="string",E=typeof c=="function",O=!1,R,M,B;if(_){n.clearSubscriptions(c);return}for(R in a)if(Object.prototype.hasOwnProperty.call(a,R)){if(M=a[R],y&&M[c]){delete M[c],O=c;break}if(E)for(B in M)Object.prototype.hasOwnProperty.call(M,B)&&M[B]===c&&(delete M[B],O=!0)}return O}})})(Tn,Tn.exports)),Tn.exports}var kd=Pd();const Q=Ad(kd);let $n=[{key:"americanfootball_cfl",group:"American Football",title:"CFL",description:"Canadian Football League",active:!0,has_outrights:!1},{key:"americanfootball_ncaaf",group:"American Football",title:"NCAAF",description:"US College Football",active:!0,has_outrights:!1},{key:"americanfootball_ncaaf_championship_winner",group:"American Football",title:"NCAAF Championship Winner",description:"US College Football Championship Winner",active:!0,has_outrights:!0},{key:"americanfootball_nfl",group:"American Football",title:"NFL",description:"US Football",active:!0,has_outrights:!1},{key:"americanfootball_nfl_super_bowl_winner",group:"American Football",title:"NFL Super Bowl Winner",description:"Super Bowl Winner 2025/2026",active:!1,has_outrights:!0},{key:"aussierules_afl",group:"Aussie Rules",title:"AFL",description:"Aussie Football",active:!1,has_outrights:!1},{key:"baseball_kbo",group:"Baseball",title:"KBO",description:"KBO League",active:!1,has_outrights:!1},{key:"baseball_milb",group:"Baseball",title:"MiLB",description:"Minor League Baseball",active:!1,has_outrights:!1},{key:"baseball_mlb",group:"Baseball",title:"MLB",description:"Major League Baseball",active:!0,has_outrights:!1},{key:"baseball_mlb_world_series_winner",group:"Baseball",title:"MLB World Series Winner",description:"World Series Winner 2025",active:!1,has_outrights:!0},{key:"baseball_npb",group:"Baseball",title:"NPB",description:"Nippon Professional Baseball",active:!0,has_outrights:!1},{key:"basketball_euroleague",group:"Basketball",title:"Basketball Euroleague",description:"Basketball Euroleague",active:!1,has_outrights:!1},{key:"basketball_nba",group:"Basketball",title:"NBA",description:"US Basketball",active:!0,has_outrights:!1},{key:"basketball_nba_championship_winner",group:"Basketball",title:"NBA Championship Winner",description:"Championship Winner 2025/2026",active:!1,has_outrights:!0},{key:"basketball_nbl",group:"Basketball",title:"NBL",description:"AU National Basketball League",active:!1,has_outrights:!1},{key:"basketball_ncaab_championship_winner",group:"Basketball",title:"NCAAB Championship Winner",description:"US College Basketball Championship Winner",active:!0,has_outrights:!0},{key:"basketball_wnba",group:"Basketball",title:"WNBA",description:"US Basketball",active:!0,has_outrights:!1},{key:"boxing_boxing",group:"Boxing",title:"Boxing",description:"Boxing Bouts",active:!0,has_outrights:!1},{key:"cricket_asia_cup",group:"Cricket",title:"Asia Cup",description:"Asia Cup",active:!1,has_outrights:!1},{key:"cricket_international_t20",group:"Cricket",title:"International Twenty20",description:"International Twenty20",active:!0,has_outrights:!1},{key:"golf_masters_tournament_winner",group:"Golf",title:"Masters Tournament Winner",description:"2026 Winner",active:!0,has_outrights:!0},{key:"icehockey_liiga",group:"Ice Hockey",title:"Liiga",description:"Finnish SM League",active:!1,has_outrights:!1},{key:"icehockey_mestis",group:"Ice Hockey",title:"Mestis",description:"Finnish Mestis League",active:!1,has_outrights:!1},{key:"icehockey_nhl",group:"Ice Hockey",title:"NHL",description:"US Ice Hockey",active:!0,has_outrights:!1},{key:"icehockey_nhl_championship_winner",group:"Ice Hockey",title:"NHL Championship Winner",description:"Stanley Cup Winner 2025/2026",active:!1,has_outrights:!0},{key:"icehockey_sweden_allsvenskan",group:"Ice Hockey",title:"HockeyAllsvenskan",description:"Swedish Hockey Allsvenskan",active:!1,has_outrights:!1},{key:"icehockey_sweden_hockey_league",group:"Ice Hockey",title:"SHL",description:"Swedish Hockey League",active:!1,has_outrights:!1},{key:"mma_mixed_martial_arts",group:"Mixed Martial Arts",title:"MMA",description:"Mixed Martial Arts",active:!0,has_outrights:!1},{key:"politics_us_presidential_election_winner",group:"Politics",title:"US Presidential Elections Winner",description:"2028 US Presidential Election Winner",active:!1,has_outrights:!0},{key:"rugbyleague_nrl",group:"Rugby League",title:"NRL",description:"Aussie Rugby League",active:!1,has_outrights:!1},{key:"soccer_argentina_primera_division",group:"Soccer",title:"Primera División - Argentina",description:"Argentine Primera División",active:!1,has_outrights:!1},{key:"soccer_australia_aleague",group:"Soccer",title:"A-League",description:"Aussie Soccer",active:!1,has_outrights:!1},{key:"soccer_austria_bundesliga",group:"Soccer",title:"Austrian Football Bundesliga",description:"Austrian Soccer",active:!1,has_outrights:!1},{key:"soccer_belgium_first_div",group:"Soccer",title:"Belgium First Div",description:"Belgian First Division A",active:!1,has_outrights:!1},{key:"soccer_brazil_campeonato",group:"Soccer",title:"Brazil Série A",description:"Brasileirão Série A",active:!1,has_outrights:!1},{key:"soccer_brazil_serie_b",group:"Soccer",title:"Brazil Série B",description:"Campeonato Brasileiro Série B",active:!1,has_outrights:!1},{key:"soccer_chile_campeonato",group:"Soccer",title:"Primera División - Chile",description:"Campeonato Chileno",active:!1,has_outrights:!1},{key:"soccer_china_superleague",group:"Soccer",title:"Super League - China",description:"Chinese Soccer",active:!1,has_outrights:!1},{key:"soccer_conmebol_copa_libertadores",group:"Soccer",title:"Copa Libertadores",description:"CONMEBOL Copa Libertadores",active:!1,has_outrights:!1},{key:"soccer_conmebol_copa_sudamericana",group:"Soccer",title:"Copa Sudamericana",description:"CONMEBOL Copa Sudamericana",active:!1,has_outrights:!1},{key:"soccer_denmark_superliga",group:"Soccer",title:"Denmark Superliga",description:"Danish Soccer",active:!1,has_outrights:!1},{key:"soccer_efl_champ",group:"Soccer",title:"Championship",description:"EFL Championship",active:!1,has_outrights:!1},{key:"soccer_england_league1",group:"Soccer",title:"League 1",description:"EFL League 1",active:!1,has_outrights:!1},{key:"soccer_england_league2",group:"Soccer",title:"League 2",description:"EFL League 2 ",active:!1,has_outrights:!1},{key:"soccer_epl",group:"Soccer",title:"EPL",description:"English Premier League",active:!0,has_outrights:!1},{key:"soccer_fifa_world_cup_qualifiers_europe",group:"Soccer",title:"FIFA World Cup Qualifiers - Europe",description:"FIFA World Cup Qualifiers - UEFA",active:!0,has_outrights:!1},{key:"soccer_fifa_world_cup_winner",group:"Soccer",title:"FIFA World Cup Winner",description:"FIFA World Cup Winner 2026",active:!1,has_outrights:!0},{key:"soccer_finland_veikkausliiga",group:"Soccer",title:"Veikkausliiga - Finland",description:"Finnish  Soccer",active:!1,has_outrights:!1},{key:"soccer_france_ligue_one",group:"Soccer",title:"Ligue 1 - France",description:"French Soccer",active:!1,has_outrights:!1},{key:"soccer_france_ligue_two",group:"Soccer",title:"Ligue 2 - France",description:"French Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_bundesliga",group:"Soccer",title:"Bundesliga - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_bundesliga2",group:"Soccer",title:"Bundesliga 2 - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_liga3",group:"Soccer",title:"3. Liga - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_greece_super_league",group:"Soccer",title:"Super League - Greece",description:"Greek Soccer",active:!1,has_outrights:!1},{key:"soccer_italy_serie_a",group:"Soccer",title:"Serie A - Italy",description:"Italian Soccer",active:!1,has_outrights:!1},{key:"soccer_italy_serie_b",group:"Soccer",title:"Serie B - Italy",description:"Italian Soccer",active:!1,has_outrights:!1},{key:"soccer_japan_j_league",group:"Soccer",title:"J League",description:"Japan Soccer League",active:!1,has_outrights:!1},{key:"soccer_korea_kleague1",group:"Soccer",title:"K League 1",description:"Korean Soccer",active:!1,has_outrights:!1},{key:"soccer_league_of_ireland",group:"Soccer",title:"League of Ireland",description:"Airtricity League Premier Division",active:!1,has_outrights:!1},{key:"soccer_mexico_ligamx",group:"Soccer",title:"Liga MX",description:"Mexican Soccer",active:!1,has_outrights:!1},{key:"soccer_netherlands_eredivisie",group:"Soccer",title:"Dutch Eredivisie",description:"Dutch Soccer",active:!1,has_outrights:!1},{key:"soccer_norway_eliteserien",group:"Soccer",title:"Eliteserien - Norway",description:"Norwegian Soccer",active:!1,has_outrights:!1},{key:"soccer_poland_ekstraklasa",group:"Soccer",title:"Ekstraklasa - Poland",description:"Polish Soccer",active:!1,has_outrights:!1},{key:"soccer_portugal_primeira_liga",group:"Soccer",title:"Primeira Liga - Portugal",description:"Portugese Soccer",active:!1,has_outrights:!1},{key:"soccer_spain_la_liga",group:"Soccer",title:"La Liga - Spain",description:"Spanish Soccer",active:!1,has_outrights:!1},{key:"soccer_spain_segunda_division",group:"Soccer",title:"La Liga 2 - Spain",description:"Spanish Soccer",active:!1,has_outrights:!1},{key:"soccer_spl",group:"Soccer",title:"Premiership - Scotland",description:"Scottish Premiership",active:!1,has_outrights:!1},{key:"soccer_sweden_allsvenskan",group:"Soccer",title:"Allsvenskan - Sweden",description:"Swedish Soccer",active:!1,has_outrights:!1},{key:"soccer_sweden_superettan",group:"Soccer",title:"Superettan - Sweden",description:"Swedish Soccer",active:!1,has_outrights:!1},{key:"soccer_switzerland_superleague",group:"Soccer",title:"Swiss Superleague",description:"Swiss Soccer",active:!1,has_outrights:!1},{key:"soccer_turkey_super_league",group:"Soccer",title:"Turkey Super League",description:"Turkish Soccer",active:!1,has_outrights:!1},{key:"soccer_uefa_champs_league",group:"Soccer",title:"UEFA Champions League",description:"European Champions League",active:!0,has_outrights:!1},{key:"soccer_uefa_europa_conference_league",group:"Soccer",title:"UEFA Europa Conference League",description:"UEFA Europa Conference League",active:!1,has_outrights:!1},{key:"soccer_uefa_europa_league",group:"Soccer",title:"UEFA Europa League",description:"European Europa League",active:!1,has_outrights:!1},{key:"soccer_usa_mls",group:"Soccer",title:"MLS",description:"Major League Soccer",active:!1,has_outrights:!1},{key:"tennis_atp_china_open",group:"Tennis",title:"ATP China Open",description:"Men's Singles",active:!1,has_outrights:!1},{key:"tennis_wta_china_open",group:"Tennis",title:"WTA China Open",description:"Women's Singles",active:!1,has_outrights:!1}];const wd={getMeta(){return{language:[{lang:"Abkhazian",code:"ab",enabled:!1,copy:[["key","value"]]},{lang:"Afar",code:"aa",enabled:!1,copy:[["key","value"]]},{lang:"Afrikaans",code:"af",enabled:!1,copy:[["key","value"]]},{lang:"Akan",code:"ak",enabled:!1,copy:[["key","value"]]},{lang:"Albanian",code:"sq",enabled:!1,copy:[["key","value"]]},{lang:"Amharic",code:"am",enabled:!1,copy:[["key","value"]]},{lang:"Arabic",code:"ar",enabled:!1,copy:[["key","value"]]},{lang:"Aragonese",code:"an",enabled:!1,copy:[["key","value"]]},{lang:"Armenian",code:"hy",enabled:!1,copy:[["key","value"]]},{lang:"Assamese",code:"as",enabled:!1,copy:[["key","value"]]},{lang:"Avaric",code:"av",enabled:!1,copy:[["key","value"]]},{lang:"Avestan",code:"ae",enabled:!1,copy:[["key","value"]]},{lang:"Aymara",code:"ay",enabled:!1,copy:[["key","value"]]},{lang:"Azerbaijani",code:"az",enabled:!1,copy:[["key","value"]]},{lang:"Bambara",code:"bm",enabled:!1,copy:[["key","value"]]},{lang:"Bashkir",code:"ba",enabled:!1,copy:[["key","value"]]},{lang:"Basque",code:"eu",enabled:!1,copy:[["key","value"]]},{lang:"Belarusian",code:"be",enabled:!1,copy:[["key","value"]]},{lang:"Bengali (Bangla)",code:"bn",enabled:!1,copy:[["key","value"]]},{lang:"Bihari",code:"bh",enabled:!1,copy:[["key","value"]]},{lang:"Bislama",code:"bi",enabled:!1,copy:[["key","value"]]},{lang:"Bosnian",code:"bs",enabled:!1,copy:[["key","value"]]},{lang:"Breton",code:"br",enabled:!1,copy:[["key","value"]]},{lang:"Bulgarian",code:"bg",enabled:!1,copy:[["key","value"]]},{lang:"Burmese",code:"my",enabled:!1,copy:[["key","value"]]},{lang:"Catalan",code:"ca",enabled:!1,copy:[["key","value"]]},{lang:"Chamorro",code:"ch",enabled:!1,copy:[["key","value"]]},{lang:"Chechen",code:"ce",enabled:!1,copy:[["key","value"]]},{lang:"Chichewa, Chewa, Nyanja",code:"ny",enabled:!1,copy:[["key","value"]]},{lang:"Chinese",code:"zh",enabled:!1,copy:[["key","value"]]},{lang:"Chinese (Simplified)",code:"zh-Hans",enabled:!1,copy:[["welcome_back","欢迎回来"],["please_enter_your_details","请输入您的详细信息"],["email","电子邮件"],["enter_your_email","输入您的电子邮件"],["password","密码"],["enter_your_password","输入您的密码"],["enter_email_and_password","输入邮箱和密码"],["sign_in","登入"],["forgot_password","忘记密码"],["dont_have_an_account","沒有帳戶？"],["sign_up","报名"],["please_enter_your_details_to_get_started","请输入您的详细信息以开始"],["already_have_an_account","已有账户？"],["log_in","登录"],["name","姓名"],["enter_your_name","输入您的姓名"]]},{lang:"Chinese (Traditional)",code:"zh-Hant",enabled:!1,copy:[["key","value"]]},{lang:"Chuvash",code:"cv",enabled:!1,copy:[["key","value"]]},{lang:"Cornish",code:"kw",enabled:!1,copy:[["key","value"]]},{lang:"Corsican",code:"co",enabled:!1,copy:[["key","value"]]},{lang:"Cree",code:"cr",enabled:!1,copy:[["key","value"]]},{lang:"Croatian",code:"hr",enabled:!1,copy:[["key","value"]]},{lang:"Czech",code:"cs",enabled:!1,copy:[["key","value"]]},{lang:"Danish",code:"da",enabled:!1,copy:[["key","value"]]},{lang:"Divehi, Dhivehi, Maldivian",code:"dv",enabled:!1,copy:[["key","value"]]},{lang:"Dutch",code:"nl",enabled:!1,copy:[["key","value"]]},{lang:"Dzongkha",code:"dz",enabled:!1,copy:[["key","value"]]},{lang:"English",code:"en",enabled:!0,copy:[["welcome_back","Welcome Back"],["please_enter_your_details","Please Enter your Details"],["email","Email"],["enter_your_email","Enter your email"],["password","Password"],["enter_your_password","Enter your password"],["enter_email_and_password","Enter Email and Password"],["sign_in","Sign in"],["forgot_password","Forgot Password"],["dont_have_an_account","Don't have an account?"],["sign_up","Sign up"],["please_enter_your_details_to_get_started","Please enter your details to get started"],["already_have_an_account","Already have an account?"],["log_in","Sign in"],["name","Name"],["enter_your_name","Enter your name"]]},{lang:"Esperanto",code:"eo",enabled:!1,copy:[["key","value"]]},{lang:"Estonian",code:"et",enabled:!1,copy:[["key","value"]]},{lang:"Ewe",code:"ee",enabled:!1,copy:[["key","value"]]},{lang:"Faroese",code:"fo",enabled:!1,copy:[["key","value"]]},{lang:"Fijian",code:"fj",enabled:!1,copy:[["key","value"]]},{lang:"Finnish",code:"fi",enabled:!1,copy:[["key","value"]]},{lang:"French",code:"fr",enabled:!1,copy:[["key","value"]]},{lang:"Fula, Fulah, Pulaar, Pular",code:"ff",enabled:!1,copy:[["key","value"]]},{lang:"Galician",code:"gl",enabled:!1,copy:[["key","value"]]},{lang:"Gaelic (Scottish)",code:"gd",enabled:!1,copy:[["key","value"]]},{lang:"Gaelic (Manx)",code:"gv",enabled:!1,copy:[["key","value"]]},{lang:"Georgian",code:"ka",enabled:!1,copy:[["key","value"]]},{lang:"German",code:"de",enabled:!1,copy:[["key","value"]]},{lang:"Greek",code:"el",enabled:!1,copy:[["key","value"]]},{lang:"Greenlandic",code:"kl",enabled:!1,copy:[["key","value"]]},{lang:"Guarani",code:"gn",enabled:!1,copy:[["key","value"]]},{lang:"Gujarati",code:"gu",enabled:!1,copy:[["key","value"]]},{lang:"Haitian Creole",code:"ht",enabled:!1,copy:[["key","value"]]},{lang:"Hausa",code:"ha",enabled:!1,copy:[["key","value"]]},{lang:"Hebrew",code:"he",enabled:!1,copy:[["key","value"]]},{lang:"Herero",code:"hz",enabled:!1,copy:[["key","value"]]},{lang:"Hindi",code:"hi",enabled:!1,copy:[["key","value"]]},{lang:"Hiri Motu",code:"ho",enabled:!1,copy:[["key","value"]]},{lang:"Hungarian",code:"hu",enabled:!1,copy:[["key","value"]]},{lang:"Icelandic",code:"is",enabled:!1,copy:[["key","value"]]},{lang:"Ido",code:"io",enabled:!1,copy:[["key","value"]]},{lang:"Igbo",code:"ig",enabled:!1,copy:[["key","value"]]},{lang:"Indonesian",code:"id, in",enabled:!1,copy:[["key","value"]]},{lang:"Interlingua",code:"ia",enabled:!1,copy:[["key","value"]]},{lang:"Interlingue",code:"ie",enabled:!1,copy:[["key","value"]]},{lang:"Inuktitut",code:"iu",enabled:!1,copy:[["key","value"]]},{lang:"Inupiak",code:"ik",enabled:!1,copy:[["key","value"]]},{lang:"Irish",code:"ga",enabled:!1,copy:[["key","value"]]},{lang:"Italian",code:"it",enabled:!0,copy:[["welcome_back","Bentornato"],["please_enter_your_details","Per favore, inserisci i tuoi dati"],["email","E-mail"],["enter_your_email","Inserisci la tua email"],["password","Password"],["enter_your_password","Inserisci la tua password"],["enter_email_and_password","Inserisci email e password"],["sign_in","Registrazione"],["forgot_password","Ha dimenticato la password"],["dont_have_an_account","Non hai un account?"],["sign_up","Iscrizione"],["please_enter_your_details_to_get_started","Inserisci i tuoi dati per iniziare"],["already_have_an_account","Hai già un account?"],["log_in","Login"],["name","Nome"],["enter_your_name","Inserisci il tuo nome"]]},{lang:"Japanese",code:"ja",enabled:!1,copy:[["key","value"]]},{lang:"Javanese",code:"jv",enabled:!1,copy:[["key","value"]]},{lang:"Kalaallisut, Greenlandic",code:"kl",enabled:!1,copy:[["key","value"]]},{lang:"Kannada",code:"kn",enabled:!1,copy:[["key","value"]]},{lang:"Kanuri",code:"kr",enabled:!1,copy:[["key","value"]]},{lang:"Kashmiri",code:"ks",enabled:!1,copy:[["key","value"]]},{lang:"Kazakh",code:"kk",enabled:!1,copy:[["key","value"]]},{lang:"Khmer",code:"km",enabled:!1,copy:[["key","value"]]},{lang:"Kikuyu",code:"ki",enabled:!1,copy:[["key","value"]]},{lang:"Kinyarwanda (Rwanda)",code:"rw",enabled:!1,copy:[["key","value"]]},{lang:"Kirundi",code:"rn",enabled:!1,copy:[["key","value"]]},{lang:"Kyrgyz",code:"ky",enabled:!1,copy:[["key","value"]]},{lang:"Komi",code:"kv",enabled:!1,copy:[["key","value"]]},{lang:"Kongo",code:"kg",enabled:!1,copy:[["key","value"]]},{lang:"Korean",code:"ko",enabled:!1,copy:[["key","value"]]},{lang:"Kurdish",code:"ku",enabled:!1,copy:[["key","value"]]},{lang:"Kwanyama",code:"kj",enabled:!1,copy:[["key","value"]]},{lang:"Lao",code:"lo",enabled:!1,copy:[["key","value"]]},{lang:"Latin",code:"la",enabled:!0,copy:[["key","value"]]},{lang:"Latvian (Lettish)",code:"lv",enabled:!1,copy:[["key","value"]]},{lang:"Limburgish ( Limburger)",code:"li",enabled:!1,copy:[["key","value"]]},{lang:"Lingala",code:"ln",enabled:!1,copy:[["key","value"]]},{lang:"Lithuanian",code:"lt",enabled:!1,copy:[["key","value"]]},{lang:"Luga-Katanga",code:"lu",enabled:!1,copy:[["key","value"]]},{lang:"Luganda, Ganda",code:"lg",enabled:!1,copy:[["key","value"]]},{lang:"Luxembourgish",code:"lb",enabled:!1,copy:[["key","value"]]},{lang:"Manx",code:"gv",enabled:!1,copy:[["key","value"]]},{lang:"Macedonian",code:"mk",enabled:!1,copy:[["key","value"]]},{lang:"Malagasy",code:"mg",enabled:!1,copy:[["key","value"]]},{lang:"Malay",code:"ms",enabled:!1,copy:[["key","value"]]},{lang:"Malayalam",code:"ml",enabled:!1,copy:[["key","value"]]},{lang:"Maltese",code:"mt",enabled:!1,copy:[["key","value"]]},{lang:"Maori",code:"mi",enabled:!1,copy:[["key","value"]]},{lang:"Marathi",code:"mr",enabled:!1,copy:[["key","value"]]},{lang:"Marshallese",code:"mh",enabled:!1,copy:[["key","value"]]},{lang:"Moldavian",code:"mo",enabled:!1,copy:[["key","value"]]},{lang:"Mongolian",code:"mn",enabled:!1,copy:[["key","value"]]},{lang:"Nauru",code:"na",enabled:!1,copy:[["key","value"]]},{lang:"Navajo",code:"nv",enabled:!1,copy:[["key","value"]]},{lang:"Ndonga",code:"ng",enabled:!1,copy:[["key","value"]]},{lang:"Northern Ndebele",code:"nd",enabled:!1,copy:[["key","value"]]},{lang:"Nepali",code:"ne",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian",code:"no",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian bokmål",code:"nb",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian nynorsk",code:"nn",enabled:!1,copy:[["key","value"]]},{lang:"Nuosu",code:"ii",enabled:!1,copy:[["key","value"]]},{lang:"Occitan",code:"oc",enabled:!1,copy:[["key","value"]]},{lang:"Ojibwe",code:"oj",enabled:!1,copy:[["key","value"]]},{lang:"Old Church Slavonic, Old Bulgarian",code:"cu",enabled:!1,copy:[["key","value"]]},{lang:"Oriya",code:"or",enabled:!1,copy:[["key","value"]]},{lang:"Oromo (Afaan Oromo)",code:"om",enabled:!1,copy:[["key","value"]]},{lang:"Ossetian",code:"os",enabled:!1,copy:[["key","value"]]},{lang:"Pāli",code:"pi",enabled:!1,copy:[["key","value"]]},{lang:"Pashto, Pushto",code:"ps",enabled:!1,copy:[["key","value"]]},{lang:"Persian (Farsi)",code:"fa",enabled:!1,copy:[["key","value"]]},{lang:"Polish",code:"pl",enabled:!1,copy:[["key","value"]]},{lang:"Portuguese",code:"pt",enabled:!1,copy:[["key","value"]]},{lang:"Punjabi (Eastern)",code:"pa",enabled:!1,copy:[["key","value"]]},{lang:"Quechua",code:"qu",enabled:!1,copy:[["key","value"]]},{lang:"Romansh",code:"rm",enabled:!1,copy:[["key","value"]]},{lang:"Romanian",code:"ro",enabled:!1,copy:[["key","value"]]},{lang:"Russian",code:"ru",enabled:!1,copy:[["key","value"]]},{lang:"Sami",code:"se",enabled:!1,copy:[["key","value"]]},{lang:"Samoan",code:"sm",enabled:!1,copy:[["key","value"]]},{lang:"Sango",code:"sg",enabled:!1,copy:[["key","value"]]},{lang:"Sanskrit",code:"sa",enabled:!1,copy:[["key","value"]]},{lang:"Serbian",code:"sr",enabled:!1,copy:[["key","value"]]},{lang:"Serbo-Croatian",code:"sh",enabled:!1,copy:[["key","value"]]},{lang:"Sesotho",code:"st",enabled:!1,copy:[["key","value"]]},{lang:"Setswana",code:"tn",enabled:!1,copy:[["key","value"]]},{lang:"Shona",code:"sn",enabled:!1,copy:[["key","value"]]},{lang:"Sichuan Yi",code:"ii",enabled:!1,copy:[["key","value"]]},{lang:"Sindhi",code:"sd",enabled:!1,copy:[["key","value"]]},{lang:"Sinhalese",code:"si",enabled:!1,copy:[["key","value"]]},{lang:"Siswati",code:"ss",enabled:!1,copy:[["key","value"]]},{lang:"Slovak",code:"sk",enabled:!1,copy:[["key","value"]]},{lang:"Slovenian",code:"sl",enabled:!1,copy:[["key","value"]]},{lang:"Somali",code:"so",enabled:!1,copy:[["key","value"]]},{lang:"Southern Ndebele",code:"nr",enabled:!1,copy:[["key","value"]]},{lang:"Spanish",code:"es",enabled:!1,copy:[["key","value"]]},{lang:"Sundanese",code:"su",enabled:!1,copy:[["key","value"]]},{lang:"Swahili (Kiswahili)",code:"sw",enabled:!1,copy:[["key","value"]]},{lang:"Swati",code:"ss",enabled:!1,copy:[["key","value"]]},{lang:"Swedish",code:"sv",enabled:!1,copy:[["key","value"]]},{lang:"Tagalog",code:"tl",enabled:!1,copy:[["key","value"]]},{lang:"Tahitian",code:"ty",enabled:!1,copy:[["key","value"]]},{lang:"Tajik",code:"tg",enabled:!1,copy:[["key","value"]]},{lang:"Tamil",code:"ta",enabled:!1,copy:[["key","value"]]},{lang:"Tatar",code:"tt",enabled:!1,copy:[["key","value"]]},{lang:"Telugu",code:"te",enabled:!1,copy:[["key","value"]]},{lang:"Thai",code:"th",enabled:!1,copy:[["key","value"]]},{lang:"Tibetan",code:"bo",enabled:!1,copy:[["key","value"]]},{lang:"Tigrinya",code:"ti",enabled:!1,copy:[["key","value"]]},{lang:"Tonga",code:"to",enabled:!1,copy:[["key","value"]]},{lang:"Tsonga",code:"ts",enabled:!1,copy:[["key","value"]]},{lang:"Turkish",code:"tr",enabled:!1,copy:[["key","value"]]},{lang:"Turkmen",code:"tk",enabled:!1,copy:[["key","value"]]},{lang:"Twi",code:"tw",enabled:!1,copy:[["key","value"]]},{lang:"Uyghur",code:"ug",enabled:!1,copy:[["key","value"]]},{lang:"Ukrainian",code:"uk",enabled:!1,copy:[["key","value"]]},{lang:"Urdu",code:"ur",enabled:!1,copy:[["key","value"]]},{lang:"Uzbek",code:"uz",enabled:!1,copy:[["key","value"]]},{lang:"Venda",code:"ve",enabled:!1,copy:[["key","value"]]},{lang:"Vietnamese",code:"vi",enabled:!1,copy:[["key","value"]]},{lang:"Volapük",code:"vo",enabled:!1,copy:[["key","value"]]},{lang:"Wallon",code:"wa",enabled:!1,copy:[["key","value"]]},{lang:"Welsh",code:"cy",enabled:!1,copy:[["key","value"]]},{lang:"Wolof",code:"wo",enabled:!1,copy:[["key","value"]]},{lang:"Western Frisian",code:"fy",enabled:!1,copy:[["key","value"]]},{lang:"Xhosa",code:"xh",enabled:!1,copy:[["key","value"]]},{lang:"Yiddish",code:"yi, ji",enabled:!1,copy:[["key","value"]]},{lang:"Yoruba",code:"yo",enabled:!1,copy:[["key","value"]]},{lang:"Zhuang, Chuang",code:"za",enabled:!1,copy:[["key","value"]]},{lang:"Zulu",code:"zu",enabled:!1,copy:[["key","value"]]}]}}};function Ft(e){return new Promise((t,n)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>n(e.error)})}function Rd(e,t){let n;const a=()=>{if(n)return n;const s=indexedDB.open(e);return s.onupgradeneeded=()=>s.result.createObjectStore(t),n=Ft(s),n.then(o=>{o.onclose=()=>n=void 0},()=>{}),n};return(s,o)=>a().then(r=>o(r.transaction(t,s).objectStore(t)))}let ja;function Yn(){return ja||(ja=Rd("keyval-store","keyval")),ja}function xd(e,t=Yn()){return t("readonly",n=>Ft(n.get(e)))}function jo(e,t,n=Yn()){return n("readwrite",a=>(a.put(t,e),Ft(a.transaction)))}function Ga(e,t=Yn()){return t("readwrite",n=>(n.delete(e),Ft(n.transaction)))}function wi(e,t){return e.openCursor().onsuccess=function(){this.result&&(t(this.result),this.result.continue())},Ft(e.transaction)}function on(e=Yn()){return e("readonly",t=>{if(t.getAllKeys)return Ft(t.getAllKeys());const n=[];return wi(t,a=>n.push(a.key)).then(()=>n)})}function Cd(e=Yn()){return e("readonly",t=>{if(t.getAll&&t.getAllKeys)return Promise.all([Ft(t.getAllKeys()),Ft(t.getAll())]).then(([a,s])=>a.map((o,r)=>[o,s[r]]));const n=[];return e("readonly",a=>wi(a,s=>n.push([s.key,s.value])).then(()=>n))})}const hn=e=>e!==null&&Object.prototype.toString.call(e)==="[object Object]",ca=(e,t)=>{if(e===t)return!0;if(typeof e!=typeof t)return!1;if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n+=1)if(!ca(e[n],t[n]))return!1;return!0}if(hn(e)&&hn(t)){const n=Object.entries(e),a=new Set(Object.keys(t));if(n.length!==a.size)return!1;for(const[s,o]of n){if(!ca(o,t[s]))return!1;a.delete(s)}return a.size===0}return!1},Jn=e=>{if(e===""||e===!1||e===null||e===void 0||Array.isArray(e)&&e.length===0)return!0;if(hn(e)){for(const t in e)if(e.hasOwnProperty(t))return!1;return!0}return!1},Nd=e=>e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="_",Go=e=>e>="0"&&e<="9"||e==="-",Ld=e=>e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="_";var A;(function(e){e.TOK_EOF="EOF",e.TOK_UNQUOTEDIDENTIFIER="UnquotedIdentifier",e.TOK_QUOTEDIDENTIFIER="QuotedIdentifier",e.TOK_RBRACKET="Rbracket",e.TOK_RPAREN="Rparen",e.TOK_COMMA="Comma",e.TOK_COLON="Colon",e.TOK_RBRACE="Rbrace",e.TOK_NUMBER="Number",e.TOK_CURRENT="Current",e.TOK_ROOT="Root",e.TOK_EXPREF="Expref",e.TOK_PIPE="Pipe",e.TOK_OR="Or",e.TOK_AND="And",e.TOK_EQ="EQ",e.TOK_GT="GT",e.TOK_LT="LT",e.TOK_GTE="GTE",e.TOK_LTE="LTE",e.TOK_NE="NE",e.TOK_FLATTEN="Flatten",e.TOK_STAR="Star",e.TOK_FILTER="Filter",e.TOK_DOT="Dot",e.TOK_NOT="Not",e.TOK_LBRACE="Lbrace",e.TOK_LBRACKET="Lbracket",e.TOK_LPAREN="Lparen",e.TOK_LITERAL="Literal"})(A||(A={}));const qo={"(":A.TOK_LPAREN,")":A.TOK_RPAREN,"*":A.TOK_STAR,",":A.TOK_COMMA,".":A.TOK_DOT,":":A.TOK_COLON,"@":A.TOK_CURRENT,$:A.TOK_ROOT,"]":A.TOK_RBRACKET,"{":A.TOK_LBRACE,"}":A.TOK_RBRACE},Id={"!":!0,"<":!0,"=":!0,">":!0},Dd={"	":!0,"\n":!0,"\r":!0," ":!0};class Md{constructor(){this._current=0}tokenize(t){const n=[];this._current=0;let a,s,o;for(;this._current<t.length;)if(Nd(t[this._current]))a=this._current,s=this.consumeUnquotedIdentifier(t),n.push({start:a,type:A.TOK_UNQUOTEDIDENTIFIER,value:s});else if(qo[t[this._current]]!==void 0)n.push({start:this._current,type:qo[t[this._current]],value:t[this._current]}),this._current+=1;else if(Go(t[this._current]))o=this.consumeNumber(t),n.push(o);else if(t[this._current]==="[")o=this.consumeLBracket(t),n.push(o);else if(t[this._current]==='"')a=this._current,s=this.consumeQuotedIdentifier(t),n.push({start:a,type:A.TOK_QUOTEDIDENTIFIER,value:s});else if(t[this._current]==="'")a=this._current,s=this.consumeRawStringLiteral(t),n.push({start:a,type:A.TOK_LITERAL,value:s});else if(t[this._current]==="`"){a=this._current;const r=this.consumeLiteral(t);n.push({start:a,type:A.TOK_LITERAL,value:r})}else if(Id[t[this._current]]!==void 0)o=this.consumeOperator(t),o&&n.push(o);else if(Dd[t[this._current]]!==void 0)this._current+=1;else if(t[this._current]==="&")a=this._current,this._current+=1,t[this._current]==="&"?(this._current+=1,n.push({start:a,type:A.TOK_AND,value:"&&"})):n.push({start:a,type:A.TOK_EXPREF,value:"&"});else if(t[this._current]==="|")a=this._current,this._current+=1,t[this._current]==="|"?(this._current+=1,n.push({start:a,type:A.TOK_OR,value:"||"})):n.push({start:a,type:A.TOK_PIPE,value:"|"});else{const r=new Error(`Unknown character: ${t[this._current]}`);throw r.name="LexerError",r}return n}consumeUnquotedIdentifier(t){const n=this._current;for(this._current+=1;this._current<t.length&&Ld(t[this._current]);)this._current+=1;return t.slice(n,this._current)}consumeQuotedIdentifier(t){const n=this._current;this._current+=1;const a=t.length;for(;t[this._current]!=='"'&&this._current<a;){let s=this._current;t[s]==="\\"&&(t[s+1]==="\\"||t[s+1]==='"')?s+=2:s+=1,this._current=s}return this._current+=1,JSON.parse(t.slice(n,this._current))}consumeRawStringLiteral(t){const n=this._current;this._current+=1;const a=t.length;for(;t[this._current]!=="'"&&this._current<a;){let o=this._current;t[o]==="\\"&&(t[o+1]==="\\"||t[o+1]==="'")?o+=2:o+=1,this._current=o}return this._current+=1,t.slice(n+1,this._current-1).replace("\\'","'")}consumeNumber(t){const n=this._current;this._current+=1;const a=t.length;for(;Go(t[this._current])&&this._current<a;)this._current+=1;const s=parseInt(t.slice(n,this._current),10);return{start:n,value:s,type:A.TOK_NUMBER}}consumeLBracket(t){const n=this._current;return this._current+=1,t[this._current]==="?"?(this._current+=1,{start:n,type:A.TOK_FILTER,value:"[?"}):t[this._current]==="]"?(this._current+=1,{start:n,type:A.TOK_FLATTEN,value:"[]"}):{start:n,type:A.TOK_LBRACKET,value:"["}}consumeOperator(t){const n=this._current,a=t[n];if(this._current+=1,a==="!")return t[this._current]==="="?(this._current+=1,{start:n,type:A.TOK_NE,value:"!="}):{start:n,type:A.TOK_NOT,value:"!"};if(a==="<")return t[this._current]==="="?(this._current+=1,{start:n,type:A.TOK_LTE,value:"<="}):{start:n,type:A.TOK_LT,value:"<"};if(a===">")return t[this._current]==="="?(this._current+=1,{start:n,type:A.TOK_GTE,value:">="}):{start:n,type:A.TOK_GT,value:">"};if(a==="="&&t[this._current]==="=")return this._current+=1,{start:n,type:A.TOK_EQ,value:"=="}}consumeLiteral(t){this._current+=1;const n=this._current,a=t.length;for(;t[this._current]!=="`"&&this._current<a;){let r=this._current;t[r]==="\\"&&(t[r+1]==="\\"||t[r+1]==="`")?r+=2:r+=1,this._current=r}let s=t.slice(n,this._current).trimLeft();s=s.replace("\\`","`");const o=this.looksLikeJSON(s)?JSON.parse(s):JSON.parse(`"${s}"`);return this._current+=1,o}looksLikeJSON(t){const a=["true","false","null"],s="-0123456789";if(t==="")return!1;if('[{"'.includes(t[0])||a.includes(t))return!0;if(s.includes(t[0]))try{return JSON.parse(t),!0}catch{return!1}return!1}}const Ri=new Md,Oe={[A.TOK_EOF]:0,[A.TOK_UNQUOTEDIDENTIFIER]:0,[A.TOK_QUOTEDIDENTIFIER]:0,[A.TOK_RBRACKET]:0,[A.TOK_RPAREN]:0,[A.TOK_COMMA]:0,[A.TOK_RBRACE]:0,[A.TOK_NUMBER]:0,[A.TOK_CURRENT]:0,[A.TOK_EXPREF]:0,[A.TOK_ROOT]:0,[A.TOK_PIPE]:1,[A.TOK_OR]:2,[A.TOK_AND]:3,[A.TOK_EQ]:5,[A.TOK_GT]:5,[A.TOK_LT]:5,[A.TOK_GTE]:5,[A.TOK_LTE]:5,[A.TOK_NE]:5,[A.TOK_FLATTEN]:9,[A.TOK_STAR]:20,[A.TOK_FILTER]:21,[A.TOK_DOT]:40,[A.TOK_NOT]:45,[A.TOK_LBRACE]:50,[A.TOK_LBRACKET]:55,[A.TOK_LPAREN]:60};class Bd{constructor(){this.index=0,this.tokens=[]}parse(t){this.loadTokens(t),this.index=0;const n=this.expression(0);if(this.lookahead(0)!==A.TOK_EOF){const a=this.lookaheadToken(0);this.errorToken(a,`Unexpected token type: ${a.type}, value: ${a.value}`)}return n}loadTokens(t){this.tokens=[...Ri.tokenize(t),{type:A.TOK_EOF,value:"",start:t.length}]}expression(t){const n=this.lookaheadToken(0);this.advance();let a=this.nud(n),s=this.lookahead(0);for(;t<Oe[s];)this.advance(),a=this.led(s,a),s=this.lookahead(0);return a}lookahead(t){return this.tokens[this.index+t].type}lookaheadToken(t){return this.tokens[this.index+t]}advance(){this.index+=1}nud(t){let n,a,s;switch(t.type){case A.TOK_LITERAL:return{type:"Literal",value:t.value};case A.TOK_UNQUOTEDIDENTIFIER:return{type:"Field",name:t.value};case A.TOK_QUOTEDIDENTIFIER:const o={type:"Field",name:t.value};if(this.lookahead(0)===A.TOK_LPAREN)throw new Error("Quoted identifier not allowed for function names.");return o;case A.TOK_NOT:return a=this.expression(Oe.Not),{type:"NotExpression",children:[a]};case A.TOK_STAR:return n={type:"Identity"},a=this.lookahead(0)===A.TOK_RBRACKET&&{type:"Identity"}||this.parseProjectionRHS(Oe.Star),{type:"ValueProjection",children:[n,a]};case A.TOK_FILTER:return this.led(t.type,{type:"Identity"});case A.TOK_LBRACE:return this.parseMultiselectHash();case A.TOK_FLATTEN:return n={type:A.TOK_FLATTEN,children:[{type:"Identity"}]},a=this.parseProjectionRHS(Oe.Flatten),{type:"Projection",children:[n,a]};case A.TOK_LBRACKET:return this.lookahead(0)===A.TOK_NUMBER||this.lookahead(0)===A.TOK_COLON?(a=this.parseIndexExpression(),this.projectIfSlice({type:"Identity"},a)):this.lookahead(0)===A.TOK_STAR&&this.lookahead(1)===A.TOK_RBRACKET?(this.advance(),this.advance(),a=this.parseProjectionRHS(Oe.Star),{children:[{type:"Identity"},a],type:"Projection"}):this.parseMultiselectList();case A.TOK_CURRENT:return{type:A.TOK_CURRENT};case A.TOK_ROOT:return{type:A.TOK_ROOT};case A.TOK_EXPREF:return s=this.expression(Oe.Expref),{type:"ExpressionReference",children:[s]};case A.TOK_LPAREN:const r=[];for(;this.lookahead(0)!==A.TOK_RPAREN;)this.lookahead(0)===A.TOK_CURRENT?(s={type:A.TOK_CURRENT},this.advance()):s=this.expression(0),r.push(s);return this.match(A.TOK_RPAREN),r[0];default:this.errorToken(t)}}led(t,n){let a;switch(t){case A.TOK_DOT:const s=Oe.Dot;return this.lookahead(0)!==A.TOK_STAR?(a=this.parseDotRHS(s),{type:"Subexpression",children:[n,a]}):(this.advance(),a=this.parseProjectionRHS(s),{type:"ValueProjection",children:[n,a]});case A.TOK_PIPE:return a=this.expression(Oe.Pipe),{type:A.TOK_PIPE,children:[n,a]};case A.TOK_OR:return a=this.expression(Oe.Or),{type:"OrExpression",children:[n,a]};case A.TOK_AND:return a=this.expression(Oe.And),{type:"AndExpression",children:[n,a]};case A.TOK_LPAREN:const o=n.name,r=[];let i;for(;this.lookahead(0)!==A.TOK_RPAREN;)this.lookahead(0)===A.TOK_CURRENT?(i={type:A.TOK_CURRENT},this.advance()):i=this.expression(0),this.lookahead(0)===A.TOK_COMMA&&this.match(A.TOK_COMMA),r.push(i);return this.match(A.TOK_RPAREN),{name:o,type:"Function",children:r};case A.TOK_FILTER:const p=this.expression(0);return this.match(A.TOK_RBRACKET),a=this.lookahead(0)===A.TOK_FLATTEN&&{type:"Identity"}||this.parseProjectionRHS(Oe.Filter),{type:"FilterProjection",children:[n,a,p]};case A.TOK_FLATTEN:const u={type:A.TOK_FLATTEN,children:[n]},f=this.parseProjectionRHS(Oe.Flatten);return{type:"Projection",children:[u,f]};case A.TOK_EQ:case A.TOK_NE:case A.TOK_GT:case A.TOK_GTE:case A.TOK_LT:case A.TOK_LTE:return this.parseComparator(n,t);case A.TOK_LBRACKET:const g=this.lookaheadToken(0);return g.type===A.TOK_NUMBER||g.type===A.TOK_COLON?(a=this.parseIndexExpression(),this.projectIfSlice(n,a)):(this.match(A.TOK_STAR),this.match(A.TOK_RBRACKET),a=this.parseProjectionRHS(Oe.Star),{type:"Projection",children:[n,a]});default:return this.errorToken(this.lookaheadToken(0))}}match(t){if(this.lookahead(0)===t){this.advance();return}else{const n=this.lookaheadToken(0);this.errorToken(n,`Expected ${t}, got: ${n.type}`)}}errorToken(t,n=""){const a=new Error(n||`Invalid token (${t.type}): "${t.value}"`);throw a.name="ParserError",a}parseIndexExpression(){if(this.lookahead(0)===A.TOK_COLON||this.lookahead(1)===A.TOK_COLON)return this.parseSliceExpression();const t={type:"Index",value:this.lookaheadToken(0).value};return this.advance(),this.match(A.TOK_RBRACKET),t}projectIfSlice(t,n){const a={type:"IndexExpression",children:[t,n]};return n.type==="Slice"?{children:[a,this.parseProjectionRHS(Oe.Star)],type:"Projection"}:a}parseSliceExpression(){const t=[null,null,null];let n=0,a=this.lookahead(0);for(;a!==A.TOK_RBRACKET&&n<3;){if(a===A.TOK_COLON)n+=1,this.advance();else if(a===A.TOK_NUMBER)t[n]=this.lookaheadToken(0).value,this.advance();else{const s=this.lookaheadToken(0);this.errorToken(s,`Syntax error, unexpected token: ${s.value}(${s.type})`)}a=this.lookahead(0)}return this.match(A.TOK_RBRACKET),{children:t,type:"Slice"}}parseComparator(t,n){const a=this.expression(Oe[n]);return{type:"Comparator",name:n,children:[t,a]}}parseDotRHS(t){const n=this.lookahead(0);if([A.TOK_UNQUOTEDIDENTIFIER,A.TOK_QUOTEDIDENTIFIER,A.TOK_STAR].includes(n))return this.expression(t);if(n===A.TOK_LBRACKET)return this.match(A.TOK_LBRACKET),this.parseMultiselectList();if(n===A.TOK_LBRACE)return this.match(A.TOK_LBRACE),this.parseMultiselectHash();const s=this.lookaheadToken(0);this.errorToken(s,`Syntax error, unexpected token: ${s.value}(${s.type})`)}parseProjectionRHS(t){if(Oe[this.lookahead(0)]<10)return{type:"Identity"};if(this.lookahead(0)===A.TOK_LBRACKET)return this.expression(t);if(this.lookahead(0)===A.TOK_FILTER)return this.expression(t);if(this.lookahead(0)===A.TOK_DOT)return this.match(A.TOK_DOT),this.parseDotRHS(t);const n=this.lookaheadToken(0);this.errorToken(n,`Syntax error, unexpected token: ${n.value}(${n.type})`)}parseMultiselectList(){const t=[];for(;this.lookahead(0)!==A.TOK_RBRACKET;){const n=this.expression(0);if(t.push(n),this.lookahead(0)===A.TOK_COMMA&&(this.match(A.TOK_COMMA),this.lookahead(0)===A.TOK_RBRACKET))throw new Error("Unexpected token Rbracket")}return this.match(A.TOK_RBRACKET),{type:"MultiSelectList",children:t}}parseMultiselectHash(){const t=[],n=[A.TOK_UNQUOTEDIDENTIFIER,A.TOK_QUOTEDIDENTIFIER];let a,s,o;for(;;){if(a=this.lookaheadToken(0),!n.includes(a.type))throw new Error(`Expecting an identifier token, got: ${a.type}`);if(s=a.value,this.advance(),this.match(A.TOK_COLON),o=this.expression(0),t.push({value:o,type:"KeyValuePair",name:s}),this.lookahead(0)===A.TOK_COMMA)this.match(A.TOK_COMMA);else if(this.lookahead(0)===A.TOK_RBRACE){this.match(A.TOK_RBRACE);break}}return{type:"MultiSelectHash",children:t}}}const xi=new Bd;var D;(function(e){e[e.TYPE_NUMBER=0]="TYPE_NUMBER",e[e.TYPE_ANY=1]="TYPE_ANY",e[e.TYPE_STRING=2]="TYPE_STRING",e[e.TYPE_ARRAY=3]="TYPE_ARRAY",e[e.TYPE_OBJECT=4]="TYPE_OBJECT",e[e.TYPE_BOOLEAN=5]="TYPE_BOOLEAN",e[e.TYPE_EXPREF=6]="TYPE_EXPREF",e[e.TYPE_NULL=7]="TYPE_NULL",e[e.TYPE_ARRAY_NUMBER=8]="TYPE_ARRAY_NUMBER",e[e.TYPE_ARRAY_STRING=9]="TYPE_ARRAY_STRING"})(D||(D={}));class Fd{constructor(t){this.TYPE_NAME_TABLE={[D.TYPE_NUMBER]:"number",[D.TYPE_ANY]:"any",[D.TYPE_STRING]:"string",[D.TYPE_ARRAY]:"array",[D.TYPE_OBJECT]:"object",[D.TYPE_BOOLEAN]:"boolean",[D.TYPE_EXPREF]:"expression",[D.TYPE_NULL]:"null",[D.TYPE_ARRAY_NUMBER]:"Array<number>",[D.TYPE_ARRAY_STRING]:"Array<string>"},this.functionAbs=([n])=>Math.abs(n),this.functionAvg=([n])=>{let a=0;for(let s=0;s<n.length;s+=1)a+=n[s];return a/n.length},this.functionCeil=([n])=>Math.ceil(n),this.functionContains=n=>{const[a,s]=n;return a.includes(s)},this.functionEndsWith=n=>{const[a,s]=n;return a.includes(s,a.length-s.length)},this.functionFloor=([n])=>Math.floor(n),this.functionJoin=n=>{const[a,s]=n;return s.join(a)},this.functionKeys=([n])=>Object.keys(n),this.functionLength=([n])=>hn(n)?Object.keys(n).length:n.length,this.functionMap=n=>{if(!this._interpreter)return[];const a=[],s=this._interpreter,o=n[0],r=n[1];for(let i=0;i<r.length;i+=1)a.push(s.visit(o,r[i]));return a},this.functionMax=([n])=>{if(!n.length)return null;if(this.getTypeName(n[0])===D.TYPE_NUMBER)return Math.max(...n);const s=n;let o=s[0];for(let r=1;r<s.length;r+=1)o.localeCompare(s[r])<0&&(o=s[r]);return o},this.functionMaxBy=n=>{const a=n[1],s=n[0],o=this.createKeyFunction(a,[D.TYPE_NUMBER,D.TYPE_STRING]);let r=-1/0,i,l;for(let p=0;p<s.length;p+=1)l=o&&o(s[p]),l!==void 0&&l>r&&(r=l,i=s[p]);return i},this.functionMerge=n=>{let a={};for(let s=0;s<n.length;s+=1){const o=n[s];a=Object.assign(a,o)}return a},this.functionMin=([n])=>{if(!n.length)return null;if(this.getTypeName(n[0])===D.TYPE_NUMBER)return Math.min(...n);const s=n;let o=s[0];for(let r=1;r<s.length;r+=1)s[r].localeCompare(o)<0&&(o=s[r]);return o},this.functionMinBy=n=>{const a=n[1],s=n[0],o=this.createKeyFunction(a,[D.TYPE_NUMBER,D.TYPE_STRING]);let r=1/0,i,l;for(let p=0;p<s.length;p+=1)l=o&&o(s[p]),l!==void 0&&l<r&&(r=l,i=s[p]);return i},this.functionNotNull=n=>{for(let a=0;a<n.length;a+=1)if(this.getTypeName(n[a])!==D.TYPE_NULL)return n[a];return null},this.functionReverse=([n])=>{if(this.getTypeName(n)===D.TYPE_STRING){const o=n;let r="";for(let i=o.length-1;i>=0;i-=1)r+=o[i];return r}const s=n.slice(0);return s.reverse(),s},this.functionSort=([n])=>[...n].sort(),this.functionSortBy=n=>{if(!this._interpreter)return[];const a=n[0].slice(0);if(a.length===0)return a;const s=this._interpreter,o=n[1],r=this.getTypeName(s.visit(o,a[0]));if(r!==void 0&&![D.TYPE_NUMBER,D.TYPE_STRING].includes(r))throw new Error(`TypeError: unexpected type (${this.TYPE_NAME_TABLE[r]})`);const i=[];for(let l=0;l<a.length;l+=1)i.push([l,a[l]]);i.sort((l,p)=>{const u=s.visit(o,l[1]),f=s.visit(o,p[1]);if(this.getTypeName(u)!==r)throw new Error(`TypeError: expected (${this.TYPE_NAME_TABLE[r]}), received ${this.TYPE_NAME_TABLE[this.getTypeName(u)]}`);if(this.getTypeName(f)!==r)throw new Error(`TypeError: expected (${this.TYPE_NAME_TABLE[r]}), received ${this.TYPE_NAME_TABLE[this.getTypeName(f)]}`);return u>f?1:u<f?-1:l[0]-p[0]});for(let l=0;l<i.length;l+=1)a[l]=i[l][1];return a},this.functionStartsWith=([n,a])=>n.startsWith(a),this.functionSum=([n])=>n.reduce((a,s)=>a+s,0),this.functionToArray=([n])=>this.getTypeName(n)===D.TYPE_ARRAY?n:[n],this.functionToNumber=([n])=>{const a=this.getTypeName(n);let s;return a===D.TYPE_NUMBER?n:a===D.TYPE_STRING&&(s=+n,!isNaN(s))?s:null},this.functionToString=([n])=>this.getTypeName(n)===D.TYPE_STRING?n:JSON.stringify(n),this.functionType=([n])=>{switch(this.getTypeName(n)){case D.TYPE_NUMBER:return"number";case D.TYPE_STRING:return"string";case D.TYPE_ARRAY:return"array";case D.TYPE_OBJECT:return"object";case D.TYPE_BOOLEAN:return"boolean";case D.TYPE_EXPREF:return"expref";case D.TYPE_NULL:return"null";default:return}},this.functionValues=([n])=>Object.values(n),this.functionTable={abs:{_func:this.functionAbs,_signature:[{types:[D.TYPE_NUMBER]}]},avg:{_func:this.functionAvg,_signature:[{types:[D.TYPE_ARRAY_NUMBER]}]},ceil:{_func:this.functionCeil,_signature:[{types:[D.TYPE_NUMBER]}]},contains:{_func:this.functionContains,_signature:[{types:[D.TYPE_STRING,D.TYPE_ARRAY]},{types:[D.TYPE_ANY]}]},ends_with:{_func:this.functionEndsWith,_signature:[{types:[D.TYPE_STRING]},{types:[D.TYPE_STRING]}]},floor:{_func:this.functionFloor,_signature:[{types:[D.TYPE_NUMBER]}]},join:{_func:this.functionJoin,_signature:[{types:[D.TYPE_STRING]},{types:[D.TYPE_ARRAY_STRING]}]},keys:{_func:this.functionKeys,_signature:[{types:[D.TYPE_OBJECT]}]},length:{_func:this.functionLength,_signature:[{types:[D.TYPE_STRING,D.TYPE_ARRAY,D.TYPE_OBJECT]}]},map:{_func:this.functionMap,_signature:[{types:[D.TYPE_EXPREF]},{types:[D.TYPE_ARRAY]}]},max:{_func:this.functionMax,_signature:[{types:[D.TYPE_ARRAY_NUMBER,D.TYPE_ARRAY_STRING]}]},max_by:{_func:this.functionMaxBy,_signature:[{types:[D.TYPE_ARRAY]},{types:[D.TYPE_EXPREF]}]},merge:{_func:this.functionMerge,_signature:[{types:[D.TYPE_OBJECT],variadic:!0}]},min:{_func:this.functionMin,_signature:[{types:[D.TYPE_ARRAY_NUMBER,D.TYPE_ARRAY_STRING]}]},min_by:{_func:this.functionMinBy,_signature:[{types:[D.TYPE_ARRAY]},{types:[D.TYPE_EXPREF]}]},not_null:{_func:this.functionNotNull,_signature:[{types:[D.TYPE_ANY],variadic:!0}]},reverse:{_func:this.functionReverse,_signature:[{types:[D.TYPE_STRING,D.TYPE_ARRAY]}]},sort:{_func:this.functionSort,_signature:[{types:[D.TYPE_ARRAY_STRING,D.TYPE_ARRAY_NUMBER]}]},sort_by:{_func:this.functionSortBy,_signature:[{types:[D.TYPE_ARRAY]},{types:[D.TYPE_EXPREF]}]},starts_with:{_func:this.functionStartsWith,_signature:[{types:[D.TYPE_STRING]},{types:[D.TYPE_STRING]}]},sum:{_func:this.functionSum,_signature:[{types:[D.TYPE_ARRAY_NUMBER]}]},to_array:{_func:this.functionToArray,_signature:[{types:[D.TYPE_ANY]}]},to_number:{_func:this.functionToNumber,_signature:[{types:[D.TYPE_ANY]}]},to_string:{_func:this.functionToString,_signature:[{types:[D.TYPE_ANY]}]},type:{_func:this.functionType,_signature:[{types:[D.TYPE_ANY]}]},values:{_func:this.functionValues,_signature:[{types:[D.TYPE_OBJECT]}]}},this._interpreter=t}registerFunction(t,n,a){if(t in this.functionTable)throw new Error(`Function already defined: ${t}()`);this.functionTable[t]={_func:n.bind(this),_signature:a}}callFunction(t,n){const a=this.functionTable[t];if(a===void 0)throw new Error(`Unknown function: ${t}()`);return this.validateArgs(t,n,a._signature),a._func.call(this,n)}validateInputSignatures(t,n){for(let a=0;a<n.length;a+=1)if("variadic"in n[a]&&a!==n.length-1)throw new Error(`ArgumentError: ${t}() 'variadic' argument ${a+1} must occur last`)}validateArgs(t,n,a){var s,o;let r;this.validateInputSignatures(t,a);const i=a.filter(c=>{var m;return(m=!c.optional)!==null&&m!==void 0?m:!1}).length,l=(o=(s=a[a.length-1])===null||s===void 0?void 0:s.variadic)!==null&&o!==void 0?o:!1,p=n.length<i,u=n.length>a.length,f=p&&(!l&&i>1||l)?"at least ":"";if(l&&p||!l&&(p||u))throw r=a.length>1,new Error(`ArgumentError: ${t}() takes ${f}${i} argument${r&&"s"||""} but received ${n.length}`);let g,d,h;for(let c=0;c<a.length;c+=1){h=!1,g=a[c].types,d=this.getTypeName(n[c]);let m;for(m=0;m<g.length;m+=1)if(d!==void 0&&this.typeMatches(d,g[m],n[c])){h=!0;break}if(!h&&d!==void 0){const _=g.map(y=>this.TYPE_NAME_TABLE[y]).join(" | ");throw new Error(`TypeError: ${t}() expected argument ${c+1} to be type (${_}) but received type ${this.TYPE_NAME_TABLE[d]} instead.`)}}}typeMatches(t,n,a){if(n===D.TYPE_ANY)return!0;if(n===D.TYPE_ARRAY_STRING||n===D.TYPE_ARRAY_NUMBER||n===D.TYPE_ARRAY){if(n===D.TYPE_ARRAY)return t===D.TYPE_ARRAY;if(t===D.TYPE_ARRAY){let s;n===D.TYPE_ARRAY_NUMBER?s=D.TYPE_NUMBER:n===D.TYPE_ARRAY_STRING&&(s=D.TYPE_STRING);for(let o=0;o<a.length;o+=1){const r=this.getTypeName(a[o]);if(r!==void 0&&s!==void 0&&!this.typeMatches(r,s,a[o]))return!1}return!0}}else return t===n;return!1}getTypeName(t){switch(Object.prototype.toString.call(t)){case"[object String]":return D.TYPE_STRING;case"[object Number]":return D.TYPE_NUMBER;case"[object Array]":return D.TYPE_ARRAY;case"[object Boolean]":return D.TYPE_BOOLEAN;case"[object Null]":return D.TYPE_NULL;case"[object Object]":return t.jmespathType===A.TOK_EXPREF?D.TYPE_EXPREF:D.TYPE_OBJECT;default:return}}createKeyFunction(t,n){if(!this._interpreter)return;const a=this._interpreter;return o=>{const r=a.visit(t,o);if(!n.includes(this.getTypeName(r))){const i=`TypeError: expected one of (${n.map(l=>this.TYPE_NAME_TABLE[l]).join(" | ")}), received ${this.TYPE_NAME_TABLE[this.getTypeName(r)]}`;throw new Error(i)}return r}}}class Ud{constructor(){this._rootValue=null,this.runtime=new Fd(this)}search(t,n){return this._rootValue=n,this.visit(t,n)}visit(t,n){let a,s,o,r,i,l,p,u,f,g,d;switch(t.type){case"Field":return n===null?null:hn(n)?(l=n[t.name],l===void 0?null:l):null;case"Subexpression":for(o=this.visit(t.children[0],n),g=1;g<t.children.length;g+=1)if(o=this.visit(t.children[1],o),o===null)return null;return o;case"IndexExpression":return p=this.visit(t.children[0],n),u=this.visit(t.children[1],p),u;case"Index":if(!Array.isArray(n))return null;let h=t.value;return h<0&&(h=n.length+h),o=n[h],o===void 0&&(o=null),o;case"Slice":if(!Array.isArray(n))return null;const c=[...t.children],m=this.computeSliceParams(n.length,c),[_,y,E]=m;if(o=[],E>0)for(g=_;g<y;g+=E)o.push(n[g]);else for(g=_;g>y;g+=E)o.push(n[g]);return o;case"Projection":if(d=this.visit(t.children[0],n),!Array.isArray(d))return null;for(f=[],g=0;g<d.length;g+=1)s=this.visit(t.children[1],d[g]),s!==null&&f.push(s);return f;case"ValueProjection":if(d=this.visit(t.children[0],n),!hn(d))return null;f=[];const O=Object.values(d);for(g=0;g<O.length;g+=1)s=this.visit(t.children[1],O[g]),s!==null&&f.push(s);return f;case"FilterProjection":if(d=this.visit(t.children[0],n),!Array.isArray(d))return null;const R=[],M=[];for(g=0;g<d.length;g+=1)a=this.visit(t.children[2],d[g]),Jn(a)||R.push(d[g]);for(let P=0;P<R.length;P+=1)s=this.visit(t.children[1],R[P]),s!==null&&M.push(s);return M;case"Comparator":switch(r=this.visit(t.children[0],n),i=this.visit(t.children[1],n),t.name){case A.TOK_EQ:o=ca(r,i);break;case A.TOK_NE:o=!ca(r,i);break;case A.TOK_GT:o=r>i;break;case A.TOK_GTE:o=r>=i;break;case A.TOK_LT:o=r<i;break;case A.TOK_LTE:o=r<=i;break;default:throw new Error(`Unknown comparator: ${t.name}`)}return o;case A.TOK_FLATTEN:const B=this.visit(t.children[0],n);if(!Array.isArray(B))return null;let $=[];for(g=0;g<B.length;g+=1)s=B[g],Array.isArray(s)?$=[...$,...s]:$.push(s);return $;case"Identity":return n;case"MultiSelectList":if(n===null)return null;for(f=[],g=0;g<t.children.length;g+=1)f.push(this.visit(t.children[g],n));return f;case"MultiSelectHash":if(n===null)return null;f={};let T;for(g=0;g<t.children.length;g+=1)T=t.children[g],f[T.name]=this.visit(T.value,n);return f;case"OrExpression":return a=this.visit(t.children[0],n),Jn(a)&&(a=this.visit(t.children[1],n)),a;case"AndExpression":return r=this.visit(t.children[0],n),Jn(r)?r:this.visit(t.children[1],n);case"NotExpression":return r=this.visit(t.children[0],n),Jn(r);case"Literal":return t.value;case A.TOK_PIPE:return p=this.visit(t.children[0],n),this.visit(t.children[1],p);case A.TOK_CURRENT:return n;case A.TOK_ROOT:return this._rootValue;case"Function":const w=[];for(let P=0;P<t.children.length;P+=1)w.push(this.visit(t.children[P],n));return this.runtime.callFunction(t.name,w);case"ExpressionReference":const U=t.children[0];return U.jmespathType=A.TOK_EXPREF,U;default:throw new Error(`Unknown node type: ${t.type}`)}}computeSliceParams(t,n){let[a,s,o]=n;if(o===null)o=1;else if(o===0){const i=new Error("Invalid slice, step cannot be 0");throw i.name="RuntimeError",i}const r=o<0;return a=a===null?r?t-1:0:this.capSliceRange(t,a,o),s=s===null?r?-1:t:this.capSliceRange(t,s,o),[a,s,o]}capSliceRange(t,n,a){let s=n;return s<0?(s+=t,s<0&&(s=a<0?-1:0)):s>=t&&(s=a<0?t-1:t),s}}const Bs=new Ud,$d=D.TYPE_ANY,Hd=D.TYPE_ARRAY,Kd=D.TYPE_ARRAY_NUMBER,Yd=D.TYPE_ARRAY_STRING,jd=D.TYPE_BOOLEAN,Gd=D.TYPE_EXPREF,qd=D.TYPE_NULL,Wd=D.TYPE_NUMBER,Jd=D.TYPE_OBJECT,Vd=D.TYPE_STRING;function zd(e){return xi.parse(e)}function Qd(e){return Ri.tokenize(e)}const Xd=(e,t,n)=>{Bs.runtime.registerFunction(e,t,n)};function Zd(e,t){const n=xi.parse(t);return Bs.search(n,e)}const ep=Bs,yn={compile:zd,registerFunction:Xd,search:Zd,tokenize:Qd,TreeInterpreter:ep,TYPE_ANY:$d,TYPE_ARRAY_NUMBER:Kd,TYPE_ARRAY_STRING:Yd,TYPE_ARRAY:Hd,TYPE_BOOLEAN:jd,TYPE_EXPREF:Gd,TYPE_NULL:qd,TYPE_NUMBER:Wd,TYPE_OBJECT:Jd,TYPE_STRING:Vd},lt=class lt{static async appendPrompt(t,n){jo(t,LZString.compressToUTF16(JSON.stringify(n))).then(async()=>{on().then(a=>{a=a.filter(s=>s.indexOf(this.DELIM_PROMPTS)!=-1),a.length>lt.MAX_PROMPTS_VALS&&Ga(a[0])})}).catch(a=>console.error("~IDB Failed | ",a))}static async appendVIR_products(t){t.forEach(n=>{let a=JSON.stringify({ts:Date.now(),name:n[1]});jo(n[0],LZString.compressToUTF16(a)).then(async()=>{}).catch(s=>console.error("~IDB Failed | ",s))})}static async keys(t,n){on().then(a=>{a=a.filter(s=>s.indexOf(t)!=-1),n&&n(a)})}static async get(t,n){xd(t).then(a=>{try{a=JSON.parse(LZString.decompressFromUTF16(a))}catch{}finally{n&&n(a)}})}static async entries(t,n){Cd().then(a=>{a=a.filter(s=>s[0].indexOf(t)!=-1),a=a.map(s=>{try{s[1]=JSON.parse(LZString.decompressFromUTF16(s[1]))}catch{}finally{}return s}),n&&n(a)})}static compr(t){return t}static decompr(t){return t}static async act(t,n,a){let s="";switch(t){case"PROMPTS_COUNT":on().then(r=>{r=r.filter(i=>i.indexOf(this.DELIM_PROMPTS)!=-1),s=`There are ${r.length} prompts in local IDB storage. The current max is ${this.MAX_PROMPTS_VALS}.`,s&&a&&a(s)});break;case"PROMPTS_IMPORT":console.log("~ PROMPTS_IMPORT | ");break;case"PROMPTS_EXPORT":console.log("~ PROMPTS_EXPORT | ");break;case"PROMPTS_CLEAR":on().then(r=>{r.forEach(i=>{i.indexOf(this.DELIM_PROMPTS)!=-1&&i.split(lt.DELIM_PROMPTS)[0]==n&&Ga(i)})}),s="The Prompt history has been removed for UPI: "+n,console.log("~ PROMPTS_CLEAR ------ | ",s);break;case"VIR_COUNT":on().then(r=>{r=r.filter(i=>i.indexOf(this.DELIM_VIR)!=-1),s=`There are ${r.length} VNR names in local IDB storage.`,s&&a&&a(s)});break;case"VIR_CLEAR":let o=0;await on().then(r=>{r.forEach(i=>{i.indexOf(this.DELIM_VIR)!=-1&&i.split(lt.DELIM_VIR)[0]==n&&(o++,Ga(i))})}),s=`The VNR Names have been removed for UPI: ${n} (Total Deleted: ${o})`;break;case"FEATURE_CLEAR":localStorage.getItem("feature_flags")&&localStorage.removeItem("feature_flags"),s="Features have been reset to default. Refresh.";break}console.log("~ resultMsg | ",s),s&&a&&a(s)}};lt.MAX_TYPEAHEAD_ROWS=14,lt.MAX_PROMPTS_VALS=50,lt.DELIM_PROMPTS="_",lt.DELIM_VIR="-",lt.DELIM_SNDX="|";let zt=lt;const we=mu("AppState",()=>{const e=ft(),t="DEV",n="BMA Tourney v0.0.5 ",a="#app",s=Tt({APP__ROUTE_SYNC:"APP.ROUTE_SYNC",WC__TOURN_ACTION:"WC.TOURN_ACTION",WC__APP__HEAD_TOP:"WC.APP.HEAD_TOP",WC__APP__HEAD_TOP__LOGO:"WC.APP.HEAD_TOP.LOGO",WC__APP__HEAD_TOP__USER_PROFILE:"WC.APP.HEAD_TOP.USER_PROFILE",WC__APP__HEAD_MID:"WC.APP.HEAD_MID",WC__APP__HEAD_MID__HEAD_MID_LOBBY:"WC.APP.HEAD_MID.HEAD_MID_LOBBY",WC__APP__HEAD_MID__HEAD_MID_MY:"WC.APP.HEAD_MID.HEAD_MID_MY",WC__APP__HEAD_MID__HEAD_MID_COMPLETED:"WC.APP.HEAD_MID.HEAD_MID_COMPLETED",WC__APP__HEAD_MID__HEAD_MID_LEADERBOARD:"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD",WC__APP__HEAD_MID__HEAD_MID_SQUAD:"WC.APP.HEAD_MID.HEAD_MID_SQUAD",WC__APP__HEAD_SPORTS:"WC.APP.HEAD_SPORTS",WC__APP__HEAD_SPORTS__HEAD_SPORTS_DRAG_START:"WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START",WC__APP__FOOT:"WC.APP.FOOT",WC__APP__FOOT__ALL_SPORTS:"WC.APP.FOOT.ALL_SPORTS",WC__APP__FOOT__MY_TOURNEYS:"WC.APP.FOOT.MY_TOURNEYS",WC__APP__FOOT__LEADERBOARD:"WC.APP.FOOT.LEADERBOARD",WC__APP__FOOT__MY_PROFILE:"WC.APP.FOOT.MY_PROFILE",ROUTE__HOME_ONMOUNT:"ROUTE.HOME_ONMOUNT",ROUTE__HOME_HYDRATE:"ROUTE.HOME_HYDRATE",ROUTE__HOME__USER_PROFILE:"ROUTE.HOME.USER_PROFILE",SSE__CORE__TOURN_SYNC:"SSE.CORE.TOURN_SYNC",CANVAS__HYDRATE__STATUS:"CANVAS.HYDRATE.STATUS",SODAPOP__HYDRATE__COREBETSLIP:"SODAPOP.HYDRATE.COREBETSLIP",COREBETSLIP:"COREBETSLIP",COREBETSLIP__BET:"COREBETSLIP.BET",COREBETSLIP__SPREAD:"COREBETSLIP.SPREAD",COREBETSLIP__MONEY:"COREBETSLIP.MONEY",COREBETSLIP__TOTAL:"COREBETSLIP.TOTAL",COREBETSLIP__CLOSE:"COREBETSLIP.CLOSE",COREBETSLIP__INTERSYNC:"COREBETSLIP.INTERSYNC",COREBETSLIP__TDSYNC:"COREBETSLIP.TDSYNC"});let o=Tt([]),r=Tt([]);const i=T=>{o.push(T),o.length>10&&(o.shift(),console.log("[appState] coreTourn exceeded 10 items, removed oldest")),console.log(`[appState] coreTourn length: ${o.length}`)},l=T=>{r.push(T),r.length>10&&(r.shift(),console.log("[appState] coreBetSlip exceeded 10 items, removed oldest")),console.log(`[appState] coreBetSlip length: ${r.length}`)},p=()=>{const T=localStorage.getItem("session_user");if(console.log("[appState] Loading session_user from localStorage:",T),T)try{const w=JSON.parse(T);return console.log("[appState] Parsed session_user:",w),w}catch(w){console.error("Failed to parse session_user from localStorage:",w)}return console.log("[appState] No saved session, returning default"),{authenticated:!1,userName:"",name:"",fname:"",lname:"",email:"",token:"",guid:""}},u=Je({session_app:{online:!0,route:"",version:n+t,buildmode:t},session_log:[],session_ui:{orientation:"landscape",isTouch:"utils.isTouch()"},session_user:p()}),f=Je({commands:["clear","debug","export","feature","help","logout","reload","route","theme","version","workflow"],features:{theme:{state:"dark"},motif:{state:"brand"},lang:{state:"en"},sse:{state:!0},animation:{state:!0},audio:{state:!0},contextmenu:{state:!1},debug:{state:!1},guided_tour:{state:!1}},env_override:{DEV:{contextmenu:{state:!1}},QA:{contextmenu:{state:!0}},PROD:{contextmenu:{state:!1},sse:!0}}}),g=()=>{if(!localStorage.getItem("feature_flags"))localStorage.setItem("feature_flags",zt.compr(JSON.stringify(f.value.features)));else{let T=zt.decompr(localStorage.getItem("feature_flags"));T=Object.assign(f.value.features,JSON.parse(T));for(let w in T)typeof f.value?.env_override[t][w]<"u"&&(T[w]=f.value.env_override[t][w]);localStorage.setItem("feature_flags",zt.compr(JSON.stringify(f.value.features=T)))}},d=()=>{const T=document.querySelector(a);if(T){const w=T.dataset;for(let U in w){const P=U.replace(/^sync/,""),W=Object.keys(f.value.features).find(X=>X.toLowerCase()===P.toLowerCase());if(W){const X=f.value.features[W]?.state;X&&(w[U]=X)}}}},h=(T="Theme",w={state:"dark"})=>{const U=document.querySelector(a);U&&(U.dataset["sync"+T]=w.state)},c=(T="Theme",w={state:"dark"})=>{if(localStorage.getItem("feature_flags")&&w){let P=JSON.parse(zt.decompr(localStorage.getItem("feature_flags")));P[T]={state:w.state},localStorage.setItem("feature_flags",zt.compr(JSON.stringify(f.value.features=P))),h(T,w),Q.publish("APP.ROUTE_SYNC",`{ "${T}": ${JSON.stringify(w)}}`)}},m=T=>{const w=f.value?.features?.Lang?.state;let U=E.value.microcopy.language.filter(P=>P.code==w)[0]?.copy;if(U=U.filter(P=>P[0]==T)[0],U)return U[1]},_=(T=":version")=>{let[w,U,P]=T.split(" ");switch(w=w.toLocaleLowerCase(),P=="true"&&(P=!0),P=="false"&&(P=!1),w){case":version":neodigmToast.q(`Version Q ${u.value.session_app.version}`,"brand");break;case":feature":c(U,{state:P});break;case":route":neodigmToast.q(`route ${U}`,"brand"),e.push({name:U});break}};g(),d();const y=Tt({designer:"guided_tour",notifications:{unread:0}}),E=Je({sports:$n,microcopy:wd.getMeta()}),O=Ge(()=>u.value.session_user.fname+" "+u.value.session_user.lname),R=()=>{console.log("[appState] Saving session_user to localStorage:",u.value.session_user),localStorage.setItem("session_user",JSON.stringify(u.value.session_user))},M=()=>{localStorage.removeItem("session_user")};function B(T){return u.value.session_user.authenticated=!0,u.value.session_user.token=T,R(),u.value.session_app.route="chat"}function $(){return u.value.session_user.authenticated=!1,u.value.session_user.token="",u.value.session_user.guid="",M(),API_ORCH.setTJO(null),u.value.session_app.route="auth"}return{appCLIFeatures:f,appDesigner:y,appMeta:E,appSession:u,clearSessionUser:M,concatFirstLast:O,coreBetSlip:r,coreTourn:o,doCLI:_,doLogin:B,doLogout:$,hierTopics:s,i18n:m,pushCoreTourn:i,pushcoreBetSlip:l,saveSessionUser:R,setFeaturePersistPub:c}}),Be=class Be{static getTJO(){if(this.jsTJO)return this.jsTJO;let t=localStorage.getItem("tjo");return t&&(this.jsTJO=JSON.parse(t)),this.jsTJO}static setTJO(t){return t?localStorage.setItem("tjo",JSON.stringify(t)):localStorage.clear("tjo"),this.jsTJO=t}static setStateSignout(){typeof neodigmWired4Sound<"u"&&neodigmWired4Sound.sound(11),Be.setTJO(null),location.reload()}static async doSignin(t,n=null){const a={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}},o=await(await fetch(this.API_baseURI+"/bmac/"+this.API_ver+"/acctEntity/signin",a)).json();o.ok?(typeof mvvLegit<"u"&&mvvLegit&&o?.accessToken&&mvvLegit.doSignin(o?.accessToken),n&&n(o)):typeof neodigmToast<"u"&&neodigmToast.q("Invalid User ID|Password")}static async doSignup(t,n=null){const a={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}},o=await(await fetch(this.API_baseURI+"/bmac/"+this.API_ver+"/acctEntity",a)).json();if(o.ok)typeof neodigmToast<"u"&&neodigmToast.q("Account created successfully!|Please sign in","success"),n&&n(o);else{const r=o?.error||o?.message||"Signup failed. Please try again.";typeof neodigmToast<"u"&&neodigmToast.q(r,"danger"),n&&n(o)}}static async checkUserName(t,n=null){const a={method:"POST",body:JSON.stringify({userName:t}),headers:{"Content-Type":"application/json"}},o=await(await fetch(this.API_baseURI+"/bmac/"+this.API_ver+"/acctEntity/checkUserName",a)).json();return n&&n(o),o}static async resetHash(t,n,a=null){typeof neodigmAgent<"u"?neodigmAgent.genChronSync():Date.now();const s=typeof neodigmUtils<"u"?neodigmUtils.genHash(n):n,o={method:"POST",body:JSON.stringify({guid:t,hash:s}),headers:Be.genHeaders()},i=await(await fetch(this.API_baseURI+this.API_ver+"/acct/resetHash",o)).json();a&&a(i)}static genHeaders(t={}){let n={};return n.protomolecule=typeof neodigmAgent<"u"?neodigmAgent.genChronSync():Date.now(),n.Authorization="Bearer expired",n["Content-Type"]="application/json",Be.getTJO()&&(n.Authorization="Bearer "+Be.getTJO().tokens[0]),typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.class&&(n.role=SessionAcctEntity.oEntities.data.entity.class),typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.guid&&(n.guid=SessionAcctEntity.oEntities.data.entity.guid),typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.company&&(n.company=SessionAcctEntity.oEntities.data.entity.company),n}static async fetchTournaments(t=null){const n={method:"GET",headers:Be.genHeaders()},s=await(await fetch(this.API_baseURI+"/bmac/"+this.API_ver+"/coreTournaments",n)).json();return t&&t(s),s}static async fetchBetSlips(t,n="",a="",s=null){let o=`/bmac/${this.API_ver}/coreBetSlip/filter/${t}`;n&&(o+=`/${n}`),n&&a&&(o+=`/${a}`);const r={method:"GET",headers:Be.genHeaders()},l=await(await fetch(this.API_baseURI+o,r)).json();return s&&s(l),l}static async fetchLeaderboard(t,n="",a=null){let s=`/bmac/${this.API_ver}/coreLeaderboard?tourney=${t}`;n&&(s+=`&user=${n}`);const o={method:"GET",headers:Be.genHeaders()},i=await(await fetch(this.API_baseURI+s,o)).json();return a&&a(i),i}static async postBetSlips(t,n=null){const a=t.map(o=>{const r={method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json"}};return fetch(this.API_baseURI+"/bmac/"+this.API_ver+"/coreBetSlip/",r).then(i=>i.json())}),s=await Promise.all(a);return n&&n(s),s}};Be.API_baseURI="https://machfive-bmacdev-rest.onrender.com",Be.API_ver="v5",Be.jsState={},Be.jsMeta={},Be.jsTJO=null;let ye=Be;const Xt={shootConfetti(){if(typeof confetti=="function"){let a=function(s,o){confetti({...t,...o,particleCount:Math.floor(e*s)})};var n=a,e=200,t={origin:{y:.7}};a(.25,{zIndex:304,spread:26,startVelocity:55}),a(.2,{zIndex:304,spread:60}),a(.35,{zIndex:304,spread:100,decay:.91,scalar:.8}),a(.1,{zIndex:304,spread:120,startVelocity:25,decay:.92,scalar:1.2}),a(.1,{zIndex:304,spread:120,startVelocity:45})}},hardReload(){const e=new URLSearchParams(window.location.search);e.set("reload",new Date().getTime());const t=e.toString();window.location.search=t},isJSON(e){let t=!1;try{t=typeof JSON.parse(e)}catch{}return t=="object"},isTouch:function(){return typeof document.body.ontouchstart<"u"},prettyTimeExt(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"})},formatDateLocal(e,t={}){if(!e)return"TBD";let n=new Date(e);!e.includes("Z")&&!e.match(/[+-]\d{2}:\d{2}$/)&&(n=new Date(e+"Z"));const a={month:"short",day:"numeric",hour:"numeric",minute:"2-digit"};return n.toLocaleString(void 0,{...a,...t})},shallowDelta(e,t){if(Object.keys(t).length==0&&Object.keys(e).length>0)return e;let n={};for(const a in t)e[a]&&t[a]!=e[a]&&(n[a]=e[a]);return Object.keys(n).length>0?n:t},genLorumIpsum(e=1){}},Yt=(e,t)=>{const n=e.__vccOpts||e;for(const[a,s]of t)n[a]=s;return n},tp={class:"auth-page"},np={__name:"splash_route",setup(e){const t=ft(),n=ki();return we(),setTimeout(()=>{n&&n.name=="splash_route"&&(mvvLegit&&mvvLegit.isRouteAllowed("home_route")?t.push({name:"home_route"}):t.push({name:"signin_route"}))},3e3),(a,s)=>(Qe(),pt("div",tp,[...s[0]||(s[0]=[Kt('<div class="auth-page-left" data-v-91dce2eb><div class="auth-bg" data-v-91dce2eb><div class="auth-bg-image" data-v-91dce2eb></div><div class="auth-bg-image" data-v-91dce2eb></div><div class="auth-bg-image" data-v-91dce2eb></div></div><div class="auth-overlay" data-v-91dce2eb></div><div class="auth-branding-content" data-v-91dce2eb><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-91dce2eb><p class="auth-branding-tagline" data-v-91dce2eb>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-91dce2eb>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-91dce2eb> © 2026 Bet Max Action. All rights reserved. </div></div>',1),k("div",{class:"auth-page-right"},[k("div",{class:"auth-card splash-content"},[k("p",{class:"splash-message"},"Loading your experience ..."),k("br"),k("br"),k("neodigm-juicebar",{role:"progressbar","data-n55-theme":"brand","data-n55-size":"medium",style:{"background-color":"#242424"}},[k("div")])])],-1)])]))}},Wo=Yt(np,[["__scopeId","data-v-91dce2eb"]]);class ap extends HTMLElement{connectedCallback(){this.attachShadow({mode:"open"}),this.render()}static get observedAttributes(){return["sport","data-sync-theme"]}attributeChangedCallback(){this.shadowRoot&&this.render()}render(){this.getAttribute("sport");const n=document.getElementById("app")?.getAttribute("data-sync-theme").toLowerCase()||"dark",a=n==="dark";let s=this.getAttribute("data-sport-group")||"Soccer",o=s.replaceAll(" ","_");this.shadowRoot.innerHTML=`
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
          background-image: ${"var( --sport-icon__"+o+"--"+n+" )"};
        }
      </style>
      <div class="icon"></div>
    `}}customElements.define("bma-sport-icon",ap);class sp extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-bma-tourn-caption","data-bma-tourn-entities","data-bma-tourn-entry_fee","data-bma-tourn-matches","data-bma-tourn-matches_expanded","data-bma-tourn-prize_distro","data-bma-tourn-sports_allowed","data-bma-tourn-status","data-sync-theme","data-bma-tourn-tagline","data-bma-tourn-tournament_dollars","data-bma-tourn-tags"]}connectedCallback(){this.render(),this.observeTheme(),this.attachEventListeners()}dispatchCardEvent(t,n={}){const a=new CustomEvent("bma-tournament-action",{bubbles:!0,composed:!0,detail:{action:t,tournamentId:this.getAttribute("data-bma-tourn-id"),tournamentGuid:this.getAttribute("data-bma-tourn-guid"),tournamentStatus:this.status,...n}});this.dispatchEvent(a)}attachEventListeners(){this.shadowRoot.addEventListener("click",t=>{const n=t.target.closest(".btn-info"),a=t.target.closest(".btn-join"),s=t.target.closest(".btn-play"),o=t.target.closest("bma-sport-icon");if(n){t.stopPropagation(),this.dispatchCardEvent("INFO");return}if(a){t.stopPropagation(),this.dispatchCardEvent("JOIN");return}if(s){t.stopPropagation(),this.dispatchCardEvent("PLAY");return}if(o){t.stopPropagation();const r=o.getAttribute("sport"),i=this.getSportInfo(r);this.dispatchCardEvent("SPORT_ICON",{sportKey:r,sportTitle:i.title,sportDescription:i.description});return}t.target.closest(".card")&&this.dispatchCardEvent("FOCUS")})}attributeChangedCallback(t,n,a){n!==a&&this.render()}observeTheme(){const t=document.getElementById("app");if(!t)return;new MutationObserver(()=>{this.render()}).observe(t,{attributes:!0,attributeFilter:["data-sync-theme"]})}getTheme(){return document.getElementById("app")?.getAttribute("data-sync-theme")||"dark"}get caption(){return this.getAttribute("data-bma-tourn-caption")||"Tournament"}get tournament_dollars(){return this.getAttribute("data-bma-tourn-tournament_dollars")||"0"}get entities(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const n=JSON.parse(t);return Array.isArray(n)?n.find(s=>Array.isArray(s))?.length||"0":n?.guids?.length||"0"}catch{return"0"}return"0"}get entitiesGuids(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const n=JSON.parse(t);return Array.isArray(n)?n.find(s=>Array.isArray(s))||[]:n?.guids||[]}catch{return[]}return[]}get entitiesData(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const n=JSON.parse(t);if(Array.isArray(n)){const a=n.find(o=>o&&typeof o=="object"&&!Array.isArray(o));return{current:n.find(o=>Array.isArray(o))?.length||0,max:parseInt(a?.max)||100}}return{current:n?.guids?.length||0,max:n?.max||100}}catch{return{current:0,max:100}}return{current:0,max:100}}isUserParticipating(){const n=document.getElementById("app")?.dataset?.userGuid;return n?this.entitiesGuids.includes(n):!1}getUserBadge(){const n=document.getElementById("app")?.dataset?.userGuid;if(!n)return null;const a=this.getAttribute("data-bma-tourn-tags");if(!a)return null;try{const s=JSON.parse(a);if(!Array.isArray(s))return null;const o=s.find(r=>typeof r=="object"&&r!==null?r[n]&&r[n].startsWith("--badge__ribbon--"):!1);return o?o[n]:null}catch{return null}}getBadgeClass(){const t=this.getUserBadge();if(!t)return"";const n=t.match(/--badge__ribbon--(\w+)/);return n?n[1]:""}getSportInfo(t){const n=$n.find(a=>a.key===t);return n?{title:n.title,description:n.description}:{title:t,description:t}}get matches(){let t=this.getAttribute("data-bma-tourn-matches");return t&&(t=JSON.parse(t)),t?.length||"0"}get matches_expanded(){let t=this.getAttribute("data-bma-tourn-matches_expanded");return t&&(t=JSON.parse(t)),t||null}get marqueeText(){const t=this.matches_expanded;return!t||t.length===0?"   Exciting Sports Matchups Coming Soon!   ":"  "+t.map(a=>{const s=a.title||"Match";let o="TBD";if(a.scheduled_at)try{o=new Date(a.scheduled_at).toLocaleString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit",hour12:!0})}catch{o=a.scheduled_at}return`  ${s} @ ${o}  `}).join(" • ")+"  "}get tagline(){return this.getAttribute("data-bma-tourn-tagline")||""}get status(){return this.getAttribute("data-bma-tourn-status")||"upcoming"}get prizeDistro(){const t=this.getAttribute("data-bma-tourn-prize_distro");if(!t)return null;try{return JSON.parse(t)}catch{return t}}get entryFee(){return this.getAttribute("data-bma-tourn-entry_fee")||"Free"}get sportsAllowed(){const t=this.getAttribute("data-bma-tourn-sports_allowed");if(!t)return[];try{const n=JSON.parse(t);return Array.isArray(n)?n.map(a=>typeof a=="object"&&a.sport_key?a.sport_key:a):[n]}catch{return[t]}}get sportsDisplay(){const t=this.sportsAllowed;if(!Array.isArray(t)||t.length===0)return'<bma-sport-icon sport="default" data-sport-group="default"></bma-sport-icon>';const n=Math.min(t.length,3);let a="";for(let s=0;s<n;s++){const o=t[s].key,r=$n.find(l=>l.key===o),i=r?r.group:"default";a+=`<bma-sport-icon sport="${o}" data-sport-group="${i}"></bma-sport-icon>`}return t.length>3&&(a+=`<span class="sport-count">+${t.length-3}</span>`),a}render(){const t=this.getTheme(),n=t==="dark",a=this.getAttribute("data-sync-theme")||t;this.shadowRoot.innerHTML=`
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
    `}}customElements.define("bma-tournament-card",sp);class op extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.setupEventListeners(),setTimeout(()=>{const t=this.shadowRoot.querySelector(".content_stake_text input");t&&t.focus()},100)}static get observedAttributes(){return["data-content-team-points","data-content-odds","data-content-stake-text","data-content-type","data-abbreviated-title","data-scheduled-at","data-stake","data-payout"]}attributeChangedCallback(t,n,a){if(n!==a){if(t==="data-stake")return;if(t==="data-payout"){this.updatePayoutDisplay();return}this.render()}}get teamPoints(){return this.getAttribute("data-content-team-points")||""}get odds(){return this.getAttribute("data-content-odds")||"0"}get stake(){return this.getAttribute("data-content-stake-text")||"0"}get type(){return this.getAttribute("data-content-type")||""}get abbreviatedTitle(){return this.getAttribute("data-abbreviated-title")||""}get scheduledAt(){const t=this.getAttribute("data-scheduled-at")||"";return t?Xt.formatDateLocal(t):""}get payout(){const t=this.getAttribute("data-payout")||"0",n=parseFloat(t);return isNaN(n)?"0.00":n.toFixed(2)}updatePayoutDisplay(){const t=this.shadowRoot?.querySelector(".payout-value");t&&(t.textContent=this.payout)}setupEventListeners(){const t=this.shadowRoot.querySelector(".grid_close button");t&&t.addEventListener("click",()=>{Q.publish("COREBETSLIP.CLOSE",JSON.stringify({teamPoints:this.teamPoints,odds:this.odds,stake:this.stake,type:this.type,abbreviatedTitle:this.abbreviatedTitle,scheduledAt:this.getAttribute("data-scheduled-at"),timestamp:Date.now()})),this.dispatchEvent(new CustomEvent("bma-bet-entry-remove",{bubbles:!0,composed:!0,detail:{teamPoints:this.teamPoints,odds:this.odds,stake:this.stake,type:this.type,abbreviatedTitle:this.abbreviatedTitle,scheduledAt:this.getAttribute("data-scheduled-at")}}))});const n=this.shadowRoot.querySelector(".content_stake_text input");n&&n.addEventListener("input",a=>{const s=a.target.value;this.setAttribute("data-stake",s)})}render(){this.shadowRoot.innerHTML=`
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
    `,this.setupEventListeners()}}customElements.define("bma-bet-entry",op);class rp extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}static get observedAttributes(){return["data-match-guid","data-match-title","data-match-scheduled-at","data-match-home-team","data-match-away-team","data-match-home-score","data-match-away-score","data-match-scoreboard","data-match-sport-id","data-sync-theme"]}attributeChangedCallback(t,n,a){n!==a&&this.render()}get matchGuid(){return this.getAttribute("data-match-guid")||""}get matchTitle(){return this.getAttribute("data-match-title")||"Match"}get scheduledAt(){return this.getAttribute("data-match-scheduled-at")||""}get homeTeam(){return this.getAttribute("data-match-home-team")||"Home"}get awayTeam(){return this.getAttribute("data-match-away-team")||"Away"}get homeScore(){const t=this.getAttribute("data-match-home-score");return t!=null&&t!==""?t:null}get awayScore(){const t=this.getAttribute("data-match-away-score");return t!=null&&t!==""?t:null}get scoreboardData(){const t=this.getAttribute("data-match-scoreboard");if(!t)return null;try{return typeof t=="string"?JSON.parse(t):t}catch(n){return console.warn("[bma-match-status] Failed to parse scoreboard data:",n),null}}get sportId(){return this.getAttribute("data-match-sport-id")||""}get theme(){return this.getAttribute("data-sync-theme")||"dark"}getMatchStatus(){const t=this.scoreboardData,n=this.homeScore!==null&&this.awayScore!==null;let a=!1;if(this.scheduledAt){let r=this.scheduledAt;!r.includes("Z")&&!r.match(/[+-]\d{2}:\d{2}$/)&&(r=r+"Z");const i=new Date(r),l=new Date(Date.now()-300*1e3);a=i<l}let s="UPCOMING",o=null;if(t?.time_remaining){const r=t.time_remaining;r==="Final"?(s="FINAL",o="Final"):r==="In Progress"?a?(s="IN_PROGRESS",o="In Progress"):(s="UPCOMING",o="Upcoming"):(s="IN_PROGRESS",o=r)}else n?(s="FINAL",o="Final"):(s="UPCOMING",o="Upcoming");return{status:s,timeRemaining:o}}render(){const{status:t,timeRemaining:n}=this.getMatchStatus(),a=this.homeScore!==null&&this.awayScore!==null,s=this.scheduledAt?Xt.formatDateLocal(this.scheduledAt,{timeZoneName:"short"}):"",o=t==="FINAL"?"match-status-card--past":"";this.shadowRoot.innerHTML=`
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
    `}}customElements.define("bma-match-status",rp);class Ci{static isPayout(t){if(!t?.Bet||!t?.Match)return console.error("[CoreBetSlip.isPayout] Invalid bet object - missing Bet or Match data"),!1;const{type:n,scope:a}=t.Bet,{home_team_id:s,home_team_score:o,away_team_id:r,away_team_score:i}=t.Match,l=n?.toUpperCase()||"",p=parseFloat(o)||0,u=parseFloat(i)||0;if(p===0&&u===0)return console.warn("[CoreBetSlip.isPayout] Invalid scores - both teams have 0 points"),!1;switch(console.log(`[CoreBetSlip.isPayout] Evaluating ${l} bet:`,{home:`${s} (${p})`,away:`${r} (${u})`,scope:a}),l){case"MONEY":return this._evaluateMoneyline(a.team_id,s,r,p,u);case"SPREAD":return this._evaluateSpread(a.team_id,a.point,s,r,p,u);case"TOTAL":return this._evaluateTotal(a.over,a.under,p,u);case"PROP":return console.warn("[CoreBetSlip.isPayout] PROP bet evaluation not implemented"),!1;case"PARLAY":return console.warn("[CoreBetSlip.isPayout] PARLAY bet evaluation not implemented"),!1;default:return console.warn("[CoreBetSlip.isPayout] Unknown bet type:",l),!1}}static _evaluateMoneyline(t,n,a,s,o){const r=t===n,i=t===a;if(!r&&!i)return console.warn("[CoreBetSlip.isPayout] Betted team does not match home or away team"),!1;const l=s>o,p=o>s;if(s===o)return console.log("[CoreBetSlip.isPayout] MONEY - PUSH (tie game)"),!1;const f=r&&l||i&&p;return console.log(`[CoreBetSlip.isPayout] MONEY - ${f?"WON":"LOST"}`),f}static _evaluateSpread(t,n,a,s,o,r){const i=t===a,l=t===s;if(!i&&!l)return console.warn("[CoreBetSlip.isPayout] Betted team does not match home or away team"),!1;const p=parseFloat(n)||0;let u=o,f=r;i?u=o+p:f=r+p;const g=u>f,d=f>u;if(u===f)return console.log("[CoreBetSlip.isPayout] SPREAD - PUSH (exact spread)"),!1;const c=i&&g||l&&d;return console.log(`[CoreBetSlip.isPayout] SPREAD (${p>0?"+":""}${p}) - ${c?"WON":"LOST"}`),c}static _evaluateTotal(t,n,a,s){const o=a+s,r=t&&t!=="";if(!r&&!(n&&n!==""))return console.warn("[CoreBetSlip.isPayout] No over/under value specified"),!1;const l=parseFloat(r?t:n);if(o===l)return console.log("[CoreBetSlip.isPayout] TOTAL - PUSH (exact line)"),!1;let p=!1;return r?(p=o>l,console.log(`[CoreBetSlip.isPayout] TOTAL OVER ${l} (actual: ${o}) - ${p?"WON":"LOST"}`)):(p=o<l,console.log(`[CoreBetSlip.isPayout] TOTAL UNDER ${l} (actual: ${o}) - ${p?"WON":"LOST"}`)),p}static calcPayout(t){if(!t?.Bet)return console.error("[CoreBetSlip] Invalid bet object - missing Bet data"),0;const{type:n,odds:a,stake:s}=t.Bet,o=n?.toUpperCase()||"",r=parseFloat(a)||0,i=parseFloat(s)||0;if(i<=0)return console.warn("[CoreBetSlip] Invalid stake amount:",i),0;if(r===0)return console.warn("[CoreBetSlip] Invalid odds value:",r),0;let l=0;switch(o){case"SPREAD":l=this.calcAmericanOddsPayout(r,i),console.log("[CoreBetSlip] SPREAD payout calculated:",{odds:r,stake:i,payout:l});break;case"MONEY":l=this.calcAmericanOddsPayout(r,i),console.log("[CoreBetSlip] MONEY payout calculated:",{odds:r,stake:i,payout:l});break;case"TOTAL":l=this.calcAmericanOddsPayout(r,i),console.log("[CoreBetSlip] TOTAL payout calculated:",{odds:r,stake:i,payout:l});break;case"PROP":l=this.calcAmericanOddsPayout(r,i),console.log("[CoreBetSlip] PROP payout calculated:",{odds:r,stake:i,payout:l});break;case"PARLAY":l=this.calcAmericanOddsPayout(r,i),console.log("[CoreBetSlip] PARLAY payout calculated (single odds):",{odds:r,stake:i,payout:l});break;default:console.warn("[CoreBetSlip] Unknown bet type:",o),l=0;break}return parseFloat(l.toFixed(2))}static calcAmericanOddsPayout(t,n){let a=0;return t>0?a=n*(t/100):t<0?a=n/(Math.abs(t)/100):a=0,n+a}static americanToDecimal(t){return t>0?t/100+1:t<0?100/Math.abs(t)+1:1}static calcImpliedProbability(t){return t>0?100/(t+100)*100:t<0?Math.abs(t)/(Math.abs(t)+100)*100:0}}const ip={class:"home-layout"},lp=["data-user-name"],cp={__name:"home_route",setup(e){const t=ft(),n=we();window.CoreBetSlip=Ci,document.addEventListener("click",i=>{const l=i.target;l&&l.dataset?.publishRouteHome&&(l.dataset.publishRouteHome.startsWith("ROUTE.HOME.SODAPOP_PLAY.")&&document.querySelectorAll("#sodapop_play .btn-info-sm").forEach(u=>{u===l?(u.style.background="var(--app-core-color--yellow-1__dark--brand, #ffcc33)",u.style.color="var(--app-core-color--green-1__dark--brand, #27794d)"):(u.style.background="#27794d1A",u.style.color="#fff")}),Q.publish(l.dataset.publishRouteHome,`{"ts": ${Date.now()} }`)),l&&l.dataset?.sodapopClose&&neodigmSodaPop&&neodigmSodaPop.close()});const a=(i,l=!1)=>{const p=document.querySelector(".tournaments-grid");if(!p)return;p.innerHTML="";const u=document.getElementById("app"),f=u?.getAttribute("data-sync-theme")||"dark",g=u?.getAttribute("data-sync-lang")||"en",d=u?.getAttribute("data-sync-motif")||"brand",h=c=>{const m=document.createElement("article"),_=c.status||"DRAFT";m.className=`tournament-item tournament-status-${_.toLowerCase()}`;const y=document.createElement("bma-tournament-card");return y.setAttribute("data-bma-tourn-id",c.id||""),y.setAttribute("data-bma-tourn-guid",c.guid||""),y.setAttribute("data-bma-tourn-caption",c.caption||""),y.setAttribute("data-bma-tourn-tagline",c.tagline||""),y.setAttribute("data-bma-tourn-window_start_time",c.window_start_time||""),y.setAttribute("data-bma-tourn-window_end_time",c.window_end_time||""),y.setAttribute("data-bma-tourn-sports_allowed",Array.isArray(c.sports_allowed)?JSON.stringify(c.sports_allowed):c.sports_allowed||""),y.setAttribute("data-bma-tourn-entities",c.entities?JSON.stringify(c.entities):""),y.setAttribute("data-bma-tourn-tournament_dollars",c.tournament_dollars||""),y.setAttribute("data-bma-tourn-prize_distro",Array.isArray(c.prize_distro)?JSON.stringify(c.prize_distro):c.prize_distro||""),y.setAttribute("data-bma-tourn-matches",Array.isArray(c.matches_guids)?JSON.stringify(c.matches_guids):c.matches_guids||""),y.setAttribute("data-bma-tourn-matches_expanded",Array.isArray(c.matches_expanded)?JSON.stringify(c.matches_expanded):c.matches_expanded||""),y.setAttribute("data-bma-tourn-entry_fee",c.entry_fee||""),y.setAttribute("data-bma-tourn-rake",c.rake||""),y.setAttribute("data-bma-tourn-tags",Array.isArray(c.tags)?JSON.stringify(c.tags):c.tags||""),y.setAttribute("data-bma-tourn-comments",c.comments||""),y.setAttribute("data-bma-tourn-class",c.status||""),y.setAttribute("data-bma-tourn-status",c.status||""),y.setAttribute("data-sync-theme",f),y.setAttribute("data-sync-lang",g),y.setAttribute("data-sync-motif",d),y.setAttribute("data-n55-size","medium"),y.setAttribute("data-n55-enchanted-cta-ambient","none"),y.setAttribute("data-tourn-custom-css",""),y.setAttribute("data-tourn-trophy","0"),y.setAttribute("data-bma-tourn-focus",""),y.setAttribute("data-bma-tourn-wait","false"),m.appendChild(y),m};l?i.forEach(c=>{const m=document.createElement("div");m.className="tournament-category";const _=document.createElement("header");_.className="tournament-category-header";const y=document.createElement("h2");if(y.className="category-title",y.textContent=c.title,_.appendChild(y),c.subtext){const E=document.createElement("p");E.className="category-subtext",E.textContent=c.subtext,_.appendChild(E)}m.appendChild(_),p.appendChild(m),c.tournaments.forEach(E=>{const O=h(E);p.appendChild(O)})}):i.forEach(c=>{const m=h(c);p.appendChild(m)})},s=i=>{document.querySelectorAll("bma-tournament-card").forEach(p=>{p.setAttribute("data-sync-theme",i)})},o=i=>{const l=document.querySelectorAll("bma-tournament-card"),p=Date.now().toString();l.forEach(u=>{if(u===i){if(u.setAttribute("data-bma-tourn-focus",p),u.shadowRoot){const f=u.shadowRoot.querySelector(".card-focus__feedback");f&&(f.style.visibility="visible")}typeof neodigmMarquee<"u"&&neodigmMarquee.init()}else if(u.setAttribute("data-bma-tourn-focus",""),u.shadowRoot){const f=u.shadowRoot.querySelector(".card-focus__feedback");f&&(f.style.visibility="hidden")}})},r=i=>{const{action:l,tournamentId:p,tournamentGuid:u,tournamentStatus:f,...g}=i.detail;console.log("[home_route] Tournament action:",{action:l,tournamentId:p,tournamentGuid:u,tournamentStatus:f,...g}),o(i.target),Q.publish("WC.TOURN_ACTION",JSON.stringify({action:l,tournamentId:p,tournamentGuid:u,tournamentStatus:f,...g,timestamp:Date.now()}))};return Ht(async()=>{if(!n.appSession.session_user.authenticated){console.log("User not authenticated, redirecting to signin"),t.push({name:"signin_route"});return}const i=document.getElementById("app");if(i){const p=n.appCLIFeatures.features.theme?.state,u=n.appCLIFeatures.features.lang?.state,f=n.appCLIFeatures.features.motif?.state,g=n.appSession.session_user.guid;p&&(i.setAttribute("data-sync-theme",p),document.body.setAttribute("data-sync-theme",p)),u&&i.setAttribute("data-sync-lang",u),f&&i.setAttribute("data-sync-motif",f),g&&i.setAttribute("data-user-guid",g)}window._homeRouteRenderCards=a;const l=Q.subscribe("APP.ROUTE_SYNC",(p,u)=>{try{const f=JSON.parse(u);f.theme&&s(f.theme.state)}catch(f){console.error("[home_route] Failed to parse APP.ROUTE_SYNC data:",f)}});window._homeRoutePubSubToken=l,console.log("[home_route] Publishing ROUTE.HOME_ONMOUNT"),Q.publish("ROUTE.HOME_ONMOUNT",JSON.stringify({timestamp:Date.now()})),document.addEventListener("bma-tournament-action",r)}),ya(()=>{document.removeEventListener("bma-tournament-action",r),delete window._homeRouteRenderCards,window._homeRoutePubSubToken&&Q.unsubscribe(window._homeRoutePubSubToken)}),(i,l)=>(Qe(),pt("main",ip,[k("bma-app-head-top",{"data-user-name":Dt(n).appSession.session_user.name||"Guest"},null,8,lp),l[0]||(l[0]=Kt('<bma-app-head-mid data-selected-tab="head_mid_lobby"></bma-app-head-mid><bma-app-head-sports data-selected-chip="all"></bma-app-head-sports><section class="tournaments-section"><div class="tournaments-grid"></div></section><bma-app-foot data-selected-item="foot_all_sports"></bma-app-foot>',4))]))}},up={};function dp(e,t){return Qe(),pt("main",null,[...t[0]||(t[0]=[k("h1",null,"App FAQ",-1)])])}const Vn=Yt(up,[["render",dp]]),pp={};function fp(e,t){return Qe(),pt("main",null,[...t[0]||(t[0]=[k("h1",null,"App Help",-1)])])}const hp=Yt(pp,[["render",fp]]),Nt=class Nt{static async establishSSE(t,n,a,s=!0){this.strChat=a,this.isDebug=s,console.log(" ~... sse client 'Q' | ","Q"),t=t.replaceAll("##SSEID##",n).replaceAll("##LASTKEY##",localStorage.getItem("sse_lastkey")||-1),this.isDebug&&console.warn(" ~... sse push uri | ",t),this.sseEvent&&(this.sseEvent.close(),this.sseEvent=null),this.sseEvent=new EventSource(t),this.sseEvent.onopen=function(o){Nt.onSSEOpen(o)},this.sseEvent.onmessage=function(o){Nt.onSSEMessage(o)},this.sseEvent.onerror=function(o){Nt.onSSEError(o)}}static async onSSEOpen(t){this.isDebug&&console.warn(" ~... sse push onSSEOpen ev | ",t)}static async onSSEMessage(t){let n=null;if(this.isDebug&&console.warn(" ~... sse push onSSEMessage ev | ",t),t?.data){localStorage.setItem("sse_lastkey",t?.data?.id||-1);try{if(n=JSON.parse(t.data),n?.class!="NO_MESSAGE")if(n?.class&&n?.msg)switch(n.class){case"BANNER_DISMISS":break;case"BANNER_MODAL":break;case"BANNER_MODAL_CLOSE":break;case"BUBBLE_CONFETTI":break;case"BUBBLE_MARQUEE":break;case"BUBBLE":break;case"CLI":break;case"CONSOLE":break;case"FEATURE_FLAG":break;case"MVV_POPUP":break;case"MVV_TOAST":n?.msg&&neodigmWired4Sound&&(neodigmWired4Sound.sound(5).vibrate(),neodigmToast.q(n.msg,"brand",4500),this.isDebug&&console.warn(" ~... sse push pushPackage.id class msg criterion  | ",n.id+" | "+n.class+" | "+n.msg+" | "+n.criterion));break;case"WEBNOTE":break;case"GUIDED_TOUR":break;case"META_MACRO":break;case"META_TEMPLATE":break;case"MVV_CAROUSEL":break;case"MVV_POPOVER":break;case"MVV_WIDGET":break;case"RECONNECT":break;case"TOURNAMENT_SYNC":this.isDebug&&console.warn(" ~... sse TOURNAMENT_SYNC | ",n),Q.publish("SSE.CORE.TOURN_SYNC",JSON.stringify(n));break}else this.isDebug&&console.warn(" ~... sse push - invalid package - no class/msg");else this.isDebug&&console.warn(" ~... sse push - no message")}catch{this.isDebug&&console.warn(" ~... sse push - invalid package")}}}static async onSSEError(t){this.isDebug&&console.warn(" ~... sse push onSSEError ev | ",t)}static async disconnectSSE(t){this.isDebug&&console.warn(" ~... sse push disconnectSSE ev | ",t),this.sseEvent.close(),this.sseEvent=null}};Nt.sseEvent=null,Nt.strChat=null,Nt.isDebug=!0;let ua=Nt;class At{static neodigmOpt={neodigmToast:!0,N55_GTM_DL_TOAST:"n55_gtm_dl_toast",neodigmSodaPop:!0,N55_SP_DISABLE_SCROLL:!0,N55_GTM_DL_POP_OPEN:"n55_gtm_dl_pop_open",N55_GTM_DL_POP_CLOSE:"n55_gtm_dl_pop_close",neodigmWired4Sound:!0,W4S_VOLUME:.022,EVENT_SOUNDS:!0,neodigmParallax:!0,PRLX_MOBILE:!1,neodigmMarquee:!0,neodigmEnchantedCTA:!0,N55_CTA_RND_TOUCH:14001,N55_GTM_DL_CTA:"n55_gtm_dl_cta",N55_CTA_LONG_TAP:3400,N55_CTA_FX:["alternate","emit","flash_danger","flash_warning","radius","scroll","shake"],neodigmKPI:!0,N55_GTM_DL_KPI:"n55_gtm_dl_kpi",neodigmPWA:!0,N55_PWA_TEMPLATE_ID:"js-pup-n55-pwa",neodigmCarousel:!0,N55_GTM_DL_CARSL:"n55_gtm_dl_carsl",N55_CARO_BLUR:!0,neodigmTulip:!0,neodigmPopTart:!0,N55_GTM_DL_POPTRT:"n55_gtm_dl_poptrt",neodigmAgent:!0,API_baseURI:"https://a55-wtt-api-v1.onrender.com/",API_ver:"v1",neodigmPicnic:!0,N55_GTM_DL_PICNIC:"n55_gtm_dl_picnic",neodigmWWInterval:!0,neodigmMetronome:{countTo:116,neodigmMarquee:132},N55_ZIND:{PopTart:264},CONSOLE_LOG_VER:!0,N55_DEBUG_lOG:!1,N55_AMPM_THEME:"light",N55_EVENT_HAPTIC:!0,N55_FLASH_TITLE:!0,N55_GENRE_MOTIF:"neodigm",N55_THEME_DEFAULT:"brand",N55_THEME_COLORS:{brand:["EDBA08","915E00","🟧"],primary:["92a8d1","364C75","🟦"],secondary:["EDCED0","978284","🟫"],success:["009473","003817","🟩"],white:["FFFFFF","FDFDFD","⬜"],ghost:["ffffff","000000","⬜"],danger:["DD4124","810000","🟥"],warning:["F5DF4D","988200","🟨"],info:["7BC4C4","1F6868","🟦"],disabled:["868686","767676","⬜"],night:["6a6a6a","242424","⬛"],marcom:["B163A3","5F4B8B","🟪"],party:["FF6F61","C93F60","🟪"]},N55_APP_STATE:{CONTEXT:"body",FIRST_TAP:!1,ONLINE:!0,PWA_READY:!1,PWA_CONTAIN:!1,SHAKE:!1,CONTEXTMNU:!1,FOCUS:!0,AMPM:"light",REDUCE_MOTION:!1},ROOT:document.querySelector(":root"),N55_TYPE:"https://fonts.googleapis.com/css?family=Roboto+Condensed:wght@100;300;400|Roboto+Slab:wght@300|Roboto+Mono:wght@300|Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,300,0,0"};static neodigmUtils=((t=document)=>({ver:"4.0.0",isMobile:function(){return t.body.clientWidth<=768},isTouch:function(){return typeof document.body.ontouchstart<"u"},f1210:function(){return Math.floor(Math.random()*10+1)},f02x:function(n){return Math.floor(Math.random()*n)},fPromiseJS:async function(n,a){return new Promise((s,o)=>{const r=Object.assign(n.createElement(LZString.decompress("㎆ぎॠข")),{type:LZString.decompress("அ〞샴ՠ蘆㠘쁎Ұΰ耀"),src:a});r.onload=s,r.onerror=o,n.getElementsByTagName("head")[0].appendChild(r)})},fAsyncJS:function(n,a,s){const o=Object.assign(n.createElement(LZString.decompress("㎆ぎॠข")),{type:LZString.decompress("அ〞샴ՠ蘆㠘쁎Ұΰ耀"),src:a});s&&(o.onload=function(){s()}),n.getElementsByTagName("head")[0].appendChild(o)},fAsyncCSS:function(n,a){let s=n.createElement("link");s.rel="stylesheet",s.href=a,n.getElementsByTagName("head")[0].appendChild(s)},data2prop:function(n){n=n.replace("data-","").toLowerCase();let a=n.split(""),s=[],o=!1;return a.forEach(r=>{r=="-"?o=!0:(s.push(o?r.toUpperCase():r),o=!1)}),s.join("")},doDataLayer:function(n,a){neodigmOpt.N55_DEBUG_lOG&&console.log("~ga | "+n+" | "+a),window.dataLayer&&window.dataLayer.push({event:n,msg:a})},isJSON:function(n){let a=!1;try{a=typeof JSON.parse(n)}catch{}return a=="object"},appStateListen:function(n){NeodigmKeylime.subscribe("mouseover",s=>{s?.target?.dataset?.n55TypeonHover&&neodigmUtils.typeOn(JSON.parse(s.target.dataset.n55TypeonHover))},!0),NeodigmKeylime.subscribe("click",s=>{neodigmOpt.N55_APP_STATE.FIRST_TAP||(neodigmOpt.N55_APP_STATE.FIRST_TAP=!0),neodigmOpt.neodigmTulip&&neodigmTulip.close();let o=neodigmUtils.walkDOM3(s?.target,"n55TypeonClick");o&&neodigmUtils.typeOn(JSON.parse(o))},!0),NeodigmKeylime.subscribe("touchstart",s=>{neodigmOpt.N55_APP_STATE.FIRST_TAP||(neodigmOpt.N55_APP_STATE.FIRST_TAP=!0),neodigmOpt.neodigmTulip&&neodigmTulip.close()},!0),NeodigmKeylime.subscribe("resize",s=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmCarousel&&neodigmCarousel.init(),neodigmOpt.neodigmTulip&&neodigmTulip.close(),neodigmOpt.neodigmPopTart&&neodigmPopTart.close()})},!0,window),NeodigmKeylime.subscribe("orientationchange",s=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmCarousel&&neodigmCarousel.init(),neodigmOpt.neodigmTulip&&neodigmTulip.close(),neodigmOpt.neodigmPopTart&&neodigmPopTart.close()})},!0,window),NeodigmKeylime.subscribe("scroll",s=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmTulip&&neodigmTulip.close()})},!0,window),neodigmOpt.N55_APP_STATE.REDUCE_MOTION=!window.matchMedia("(prefers-reduced-motion: no-preference)").matches;let a=document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelector("[data-n55-Ampm-theme]")?.dataset.n55AmpmTheme;a&&(neodigmOpt.N55_AMPM_THEME=neodigmOpt.N55_APP_STATE.AMPM=a)},prettyTimeRETIRE:n=>{let a=new Date(n).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"});return n=="Dec 31, 1969"&&(a=""),a},prettyTime:n=>new Date(n).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"}),capFirst:n=>n&&n[0].toUpperCase()+n.slice(1)||"",genHash:n=>(n=String(n),Math.abs(n.split("").reduce((a,s)=>(a<<5)-a+s.charCodeAt(0)|0,0))),flashTitle:(n=neodigmOpt.N55_THEME_DEFAULT,a=4e3)=>{neodigmOpt.N55_FLASH_TITLE&&(document?.n55Title||(document.n55Title=document.title),neodigmOpt?.N55_THEME_COLORS[n]&&(document.title=neodigmOpt.N55_THEME_COLORS[n][2]+document.n55Title),neodigmUtils.doSetT(function(){document.title=document.n55Title},a))},robinTheme:function(n=Object.keys(neodigmOpt.N55_THEME_COLORS)[0]){if(!neodigmMetronome.isPaused()){let a=[...document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelectorAll("[data-n55-theme")];const s=56;a.forEach((r,i)=>{r.dataset.n55Theme!="disabled"&&(r.n55Theme||(r.n55Theme=r.dataset.n55Theme),setTimeout(function(){r.dataset.n55Theme=n},i*s),setTimeout(function(){r.dataset.n55Theme=r.n55Theme},i*(s+s)))}),a=[...document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelectorAll("[data-n55-theme-pulse")];const o=256;a.forEach((r,i)=>{r.n55ThemePulse||(r.n55ThemePulse=r.dataset.n55ThemePulse),setTimeout(function(){r.dataset.n55ThemePulse=n},i*o),setTimeout(function(){r.dataset.n55ThemePulse=r.n55ThemePulse},i*o+3e3)}),neodigmUtils.flashTitle(n,2e3)}},countTo:async function(n,a,s=neodigmOpt.neodigmMetronome.countTo){const o=[16,s];return[...document.querySelectorAll(n)].forEach(function(r,i){let l=Math.abs(Number(r.textContent)-a);neodigmMetronome.unsubscribe(o[1]+i).subscribe(function(p){let u=Number(r.textContent);if(!Number.isNaN(u)&&!isNaN(u)&&a!=u){let f=l/o[0];f=Math.round(f),p!=0?r.textContent=u<a?u+f:u-f:r.textContent=a}},o[1]+i,o[0])}),neodigmUtils},typeOff:async function(n){let a=document.querySelector(n?.q1st);if(a){let s=a.textContent.length,o=window.getComputedStyle(a),r=Number(o.paddingTop.replace("px",""))+Number(o.paddingBottom.replace("px",""));for(a.offsetHeight&&(a.style.height=a.offsetHeight-r+"px");s;)setTimeout(()=>{a.textContent=a.textContent.replace(/.$/,"")},n.uniqueDelay*s--)}},typeOn:async function(n){let a=document.querySelector(n?.q1st);if(a){a.dataset.n55Typeon=0;let s=n.msg.replaceAll("|","   |   ")+"   ",o=s.split("|");if(n?.mode=="OFF")return neodigmUtils.typeOff({q1st:n.q1st,uniqueDelay:n.uniqueDelay}),neodigmUtils;if(n?.mode=="RANDOM"&&o.length){let r=a.dataset.n55Typeon=neodigmUtils.f02x(o.length);s=o[r]}neodigmUtils.typeOff({q1st:n.q1st,uniqueDelay:n.uniqueDelay/a.textContent.length-4}),neodigmMetronome.unsubscribe(n.uniqueDelay).subscribe(r=>{let i=s[s.length-(r+1)];i=="|"&&(i="",neodigmUtils.typeOff({q1st:n.q1st,uniqueDelay:n.uniqueDelay/a.textContent.length-4}),a.dataset.n55Typeon++),a.textContent+=i,n?.mode=="LOOP"&&r==0&&neodigmUtils.typeOn(n)},n.uniqueDelay,s.length)}return neodigmUtils},getValJSON:function(n,a){try{return JSON.parse(n)}catch{return JSON.parse('{ "'+a+'": "'+n+'" }')}},walkDOM3:function(n,a,s=!1){let o=null;if(!o&&n?.dataset[a]&&(o=n),!o&&n?.parentNode?.dataset[a]&&(o=n.parentNode),!o&&n.tagName!="BODY"&&n?.parentNode?.parentNode?.dataset[a]&&(o=n.parentNode.parentNode),o)return s?o:o.dataset[a]},doSetT:function(n,a){return neodigmOpt.neodigmWWInterval?window.setTimeoutN55(n,a):setTimeout(n,a)},shake:function(n,a=!0){return[...document.querySelectorAll(n)].forEach(function(s,o){s.classList.add("shake__an"),setTimeout(function(){s.classList.remove("shake__an")},460)}),At.neodigmUtils},hardReload:function(n="n55reset"){const a=new URLSearchParams(window.location.search);a.set(n,new Date().getTime());const s=a.toString();window.location.search=s}}))}const gp={class:"auth-page"},mp={class:"auth-page-right"},_p={class:"auth-card"},bp={class:"form-group"},yp={class:"form-group"},vp={class:"password-input-wrapper"},Tp=["type"],Ep={style:{"text-align":"right"}},Sp={class:"auth-link-center"},Ap={__name:"signin_route",setup(e){const t=ft(),n=we(),a=(g="signin")=>{t.push({name:g})};let s=null;const o=Je(!1),r=()=>{o.value=!o.value},i=(g=3,d=1)=>{switch(n.appCLIFeatures.features.motif.state){case"brand":g=3,d=1;break;case"white_label":g=3,d=4;break}const h=Math.floor(Math.random()*g)+d,c=document.querySelector(".img__bg")?.classList;c&&(c.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),c.add(`img__bg--${h}`)),s||(s=Q.subscribe("APP__ROUTE_SYNC",(m,_)=>{const y=JSON.parse(_);switch(Object.keys(y)[0]){case"Motif":i();break;case"Lang":l();break}}))},l=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(g=>{const d=n.appCLIFeatures?.features?.lang?.state;let h=n.appMeta.microcopy.language.filter(c=>c.code==d)[0]?.copy;h=h.filter(c=>c[0]==g.dataset.syncMicrocopyText)[0],h&&(g.textContent=h[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(g=>{const d=n.appCLIFeatures?.features?.lang?.state;let h=n.appMeta.microcopy.language.filter(c=>c.code==d)[0]?.copy;h=h.filter(c=>c[0]==g.dataset.syncMicrocopyPlaceholder)[0],h&&(g.placeholder=h[1])})},p=g=>{At.neodigmUtils().shake(g||"#inp__text--email")},u=()=>{let g=document.querySelectorAll("#inp__text--email")[0].value;neodigmUtils.messageNotification("Cub vs. Cardianals","https://mach-five-group.github.io/bma-landing/Assets/Bet%20Max%20Action-Full%20Lockup-600.png"),n.doCLI(g)},f=()=>{const g=document.querySelector("#inp__text--email"),d=document.querySelector("#inp__text--password");let h=null,c=null;if(!g?.value)h="Please enter your email",c="#inp__text--email";else if(g.value.indexOf("@")===-1||g.value.indexOf(".")===-1)h="Please enter a valid email address",c="#inp__text--email";else if(!d?.value)h="Please enter your password",c="#inp__text--password";else if(d.value.length<10)h="Password must be at least 10 characters",c="#inp__text--password";else{const m={email:g.value,hash:At.neodigmUtils().genHash(d.value)};ye.doSignin(m,_=>{const O=(_?.entity?.tags||[]).find(R=>R.userName)?.userName||"";if(n.appSession.session_user.authenticated=!0,n.appSession.session_user.email=m.email,n.appSession.session_user.fname=_?.entity?.first,n.appSession.session_user.lname=_?.entity?.last,n.appSession.session_user.userName=O,n.appSession.session_user.name=O,n.appSession.session_user.guid=_?.entity?.guid,n.saveSessionUser(),n.appCLIFeatures.features.sse.state){const R=_?.entity?.guid||n.appSession.session_user.guid;ua.establishSSE("https://machfive-bmacdev-rest.onrender.com/v5/sse?appid=BMACORE&sseid=##SSEID##&lastkey=##LASTKEY##",R,n,!0)}})}h&&(p(c),neodigmToast.q(h,"danger"))};return Ht(()=>{i(),l()}),(g,d)=>(Qe(),pt("div",gp,[d[10]||(d[10]=Kt('<div class="auth-page-left" data-v-9f21eb27><div class="auth-bg" data-v-9f21eb27><div class="auth-bg-image" data-v-9f21eb27></div><div class="auth-bg-image" data-v-9f21eb27></div><div class="auth-bg-image" data-v-9f21eb27></div></div><div class="auth-overlay" data-v-9f21eb27></div><div class="auth-branding-content" data-v-9f21eb27><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-9f21eb27><p class="auth-branding-tagline" data-v-9f21eb27>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-9f21eb27>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-9f21eb27> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),k("div",mp,[k("div",_p,[d[9]||(d[9]=k("div",{class:"auth-header"},[k("h1",{class:"auth-title","data-sync-microcopy-text":"welcome_back"},"Welcome Back"),k("p",{class:"auth-subtitle","data-sync-microcopy-text":"please_enter_your_details"},"Please enter your details to sign in")],-1)),k("form",{class:"auth-form",onSubmit:Sa(f,["prevent"])},[k("div",bp,[d[4]||(d[4]=k("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),k("input",{id:"inp__text--email",type:"text","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onDblclick:d[0]||(d[0]=h=>u())},null,32)]),k("div",yp,[d[5]||(d[5]=k("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),k("div",vp,[k("input",{id:"inp__text--password",type:o.value?"text":"password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password"},null,8,Tp),k("button",{type:"button",class:"password-toggle-btn",onClick:d[1]||(d[1]=h=>r()),tabindex:"-1"},[k("span",{class:Mt(o.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),k("div",Ep,[k("a",{class:"auth-link",onClick:d[2]||(d[2]=h=>a("forgot_route")),"data-sync-microcopy-text":"forgot_password"},"Forgot Password?")]),d[8]||(d[8]=k("div",{class:"auth-actions"},[k("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"sign_in"},"Sign In")],-1)),k("p",Sp,[d[6]||(d[6]=k("span",{"data-sync-microcopy-text":"dont_have_an_account"},"Don't have an account?",-1)),d[7]||(d[7]=Ea()),k("a",{class:"auth-link",onClick:d[3]||(d[3]=h=>a("signup_route")),"data-sync-microcopy-text":"sign_up"},"Sign Up")])],32)])])]))}},Op=Yt(Ap,[["__scopeId","data-v-9f21eb27"]]),Pp={class:"auth-page"},kp={__name:"signout_route",setup(e){const t=ft();we();const n=()=>{mvvLegit.doSignout()},a=()=>{t.push({name:"home_route"})};return(s,o)=>(Qe(),pt("div",Pp,[o[1]||(o[1]=Kt('<div class="auth-page-left" data-v-900c11b9><div class="auth-bg" data-v-900c11b9><div class="auth-bg-image" data-v-900c11b9></div><div class="auth-bg-image" data-v-900c11b9></div><div class="auth-bg-image" data-v-900c11b9></div></div><div class="auth-overlay" data-v-900c11b9></div><div class="auth-branding-content" data-v-900c11b9><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-900c11b9><p class="auth-branding-tagline" data-v-900c11b9>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-900c11b9>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-900c11b9> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),k("div",{class:"auth-page-right"},[k("div",{class:"auth-card"},[o[0]||(o[0]=k("div",{class:"auth-header"},[k("h1",{class:"auth-title"},"Sign Out"),k("p",{class:"auth-subtitle"},"Confirm you want to sign out")],-1)),k("div",{class:"auth-actions"},[k("button",{onClick:n,class:"btn btn-red"}," Sign Out "),k("button",{onClick:a,class:"btn btn-outline"}," Cancel ")])])])]))}},wp=Yt(kp,[["__scopeId","data-v-900c11b9"]]),Rp={class:"auth-page"},xp={class:"auth-page-right",style:{display:"block"}},Cp={class:"auth-card auth-card-wide"},Np={class:"form-group"},Lp={class:"form-group"},Ip={class:"form-group"},Dp={class:"form-group"},Mp={class:"form-group"},Bp={class:"password-input-wrapper"},Fp=["type"],Up={class:"form-group"},$p={class:"password-input-wrapper"},Hp=["type"],Kp={class:"auth-link-center"},Yp={__name:"signup_route",setup(e){const t=ft(),n=we(),a=(m="signin")=>{t.push({name:m})};ye.getTJO()&&a("contests");let s=null;const o=Je(!1),r=Je(!1),i=()=>{o.value=!o.value},l=()=>{r.value=!r.value},p=(m=3,_=1)=>{switch(n.appCLIFeatures.features.motif.state){case"brand":m=3,_=1;break;case"white_label":m=3,_=4;break}const y=Math.floor(Math.random()*m)+_,E=document.querySelector(".img__bg")?.classList;E&&(E.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),E.add(`img__bg--${y}`)),s||(s=Q.subscribe("APP__ROUTE_SYNC",(O,R)=>{const M=JSON.parse(R);switch(Object.keys(M)[0]){case"Motif":p();break;case"Lang":u();break}}))},u=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(m=>{const _=n.appCLIFeatures?.features?.lang?.state;let y=n.appMeta.microcopy.language.filter(E=>E.code==_)[0]?.copy;y=y.filter(E=>E[0]==m.dataset.syncMicrocopyText)[0],y&&(m.textContent=y[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(m=>{const _=n.appCLIFeatures?.features?.lang?.state;let y=n.appMeta.microcopy.language.filter(E=>E.code==_)[0]?.copy;y=y.filter(E=>E[0]==m.dataset.syncMicrocopyPlaceholder)[0],y&&(m.placeholder=y[1])})},f=m=>{At.neodigmUtils().shake(m||"#inp__text--email")},g=()=>{let m=document.querySelectorAll("#inp__text--email")[0].value;n.doCLI(m)},d=m=>{const _=[];return m.length<10&&_.push("at least 10 characters"),/[a-z]/.test(m)||_.push("1 lowercase"),/[A-Z]/.test(m)||_.push("1 uppercase"),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(m)||_.push("1 special character"),/[^\x00-\x7F]/.test(m)&&_.push("ASCII characters only"),_},h=async()=>{const m=document.querySelector("#inp__text--username"),_=m?.value?.trim();if(_)try{(await ye.checkUserName(_)).userNameExists&&(neodigmToast.q("User name already taken|Please choose a different one","danger"),m.value="",m.focus())}catch(y){console.error("Error checking username:",y)}},c=()=>{const m=document.querySelector("#inp__text--first-name"),_=document.querySelector("#inp__text--last-name"),y=document.querySelector("#inp__text--email"),E=document.querySelector("#inp__text--username"),O=document.querySelector("#inp__text--password"),R=document.querySelector("#inp__text--verify-password");let M=null,B=null;if(!m?.value)M="Please enter your first name",B="#inp__text--first-name";else if(!_?.value)M="Please enter your last name",B="#inp__text--last-name";else if(!y?.value)M="Please enter your email",B="#inp__text--email";else if(y.value.indexOf("@")===-1||y.value.indexOf(".")===-1)M="Please enter a valid email address",B="#inp__text--email";else if(!E?.value)M="Please enter a user name",B="#inp__text--username";else if(!O?.value)M="Please enter a password",B="#inp__text--password";else{const $=d(O.value);if($.length>0)M="Password must have:|"+$.join(", "),B="#inp__text--password";else if(!R?.value)M="Please verify your password",B="#inp__text--verify-password";else if(O.value!==R.value)M="Passwords do not match",B="#inp__text--verify-password";else{const T=m.value.trim(),w=_.value.trim(),U=[{userName:E.value.trim(),ts:Date.now()}],P={email:y.value,hash:At.neodigmUtils().genHash(O.value),first:T,last:w,company:"",phone:"",tags:U};ye.doSignup(P,W=>{W.ok&&setTimeout(()=>{mvvLegit.doUNVERF()},1e3)})}}M&&(f(B),neodigmToast.q(M,"danger"))};return Ht(()=>{p(),u()}),(m,_)=>(Qe(),pt("div",Rp,[_[22]||(_[22]=Kt('<div class="auth-page-left" data-v-0b6f1055><div class="auth-bg" data-v-0b6f1055><div class="auth-bg-image" data-v-0b6f1055></div><div class="auth-bg-image" data-v-0b6f1055></div><div class="auth-bg-image" data-v-0b6f1055></div></div><div class="auth-overlay" data-v-0b6f1055></div><div class="auth-branding-content" data-v-0b6f1055><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-0b6f1055><p class="auth-branding-tagline" data-v-0b6f1055>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-0b6f1055>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-0b6f1055> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),k("div",xp,[k("div",Cp,[_[21]||(_[21]=k("div",{class:"auth-header"},[k("h1",{class:"auth-title","data-sync-microcopy-text":"sign_up"},"Sign Up"),k("p",{class:"auth-subtitle","data-sync-microcopy-text":"please_enter_your_details_to_get_started"},"Please enter your details to get started")],-1)),k("form",{class:"auth-form",onSubmit:Sa(c,["prevent"])},[k("div",Np,[_[11]||(_[11]=k("label",{for:"inp__text--first-name","data-sync-microcopy-text":"first_name"},"First Name",-1)),k("input",{id:"inp__text--first-name",type:"text","data-sync-microcopy-placeholder":"enter_your_first_name",placeholder:"Enter your first name",onKeyup:_[0]||(_[0]=yt(y=>c(),["enter"]))},null,32)]),k("div",Lp,[_[12]||(_[12]=k("label",{for:"inp__text--last-name","data-sync-microcopy-text":"last_name"},"Last Name",-1)),k("input",{id:"inp__text--last-name",type:"text","data-sync-microcopy-placeholder":"enter_your_last_name",placeholder:"Enter your last name",onKeyup:_[1]||(_[1]=yt(y=>c(),["enter"]))},null,32)]),k("div",Ip,[_[13]||(_[13]=k("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),k("input",{id:"inp__text--email",type:"text","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onDblclick:_[2]||(_[2]=y=>g()),onKeyup:_[3]||(_[3]=yt(y=>c(),["enter"]))},null,32)]),k("div",Dp,[_[14]||(_[14]=k("label",{for:"inp__text--username","data-sync-microcopy-text":"username"},"User Name",-1)),k("input",{id:"inp__text--username",type:"text","data-sync-microcopy-placeholder":"public_alias",placeholder:"Public Alias",onBlur:_[4]||(_[4]=y=>h()),onKeyup:_[5]||(_[5]=yt(y=>c(),["enter"]))},null,32)]),k("div",Mp,[_[15]||(_[15]=k("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),k("div",Bp,[k("input",{id:"inp__text--password",type:o.value?"text":"password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password",onKeyup:_[6]||(_[6]=yt(y=>c(),["enter"]))},null,40,Fp),k("button",{type:"button",class:"password-toggle-btn",onClick:_[7]||(_[7]=y=>i()),tabindex:"-1"},[k("span",{class:Mt(o.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])]),_[16]||(_[16]=k("small",{"data-sync-microcopy-text":"must_be_at_least_10_characters_long"},"Must be at least 10 characters long",-1))]),k("div",Up,[_[17]||(_[17]=k("label",{for:"inp__text--verify-password","data-sync-microcopy-text":"verify_password"},"Verify Password",-1)),k("div",$p,[k("input",{id:"inp__text--verify-password",type:r.value?"text":"password","data-sync-microcopy-placeholder":"re_enter_your_password",placeholder:"Re-enter your password",onKeyup:_[8]||(_[8]=yt(y=>c(),["enter"]))},null,40,Hp),k("button",{type:"button",class:"password-toggle-btn",onClick:_[9]||(_[9]=y=>l()),tabindex:"-1"},[k("span",{class:Mt(r.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),_[20]||(_[20]=k("div",{class:"auth-actions"},[k("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"sign_up"},"Sign Up")],-1)),k("p",Kp,[_[18]||(_[18]=k("span",{"data-sync-microcopy-text":"already_have_an_account"},"Already have an account?",-1)),_[19]||(_[19]=Ea()),k("a",{class:"auth-link",onClick:_[10]||(_[10]=y=>a("signin_route")),"data-sync-microcopy-text":"log_in"},"Sign In")])],32)])])]))}},jp=Yt(Yp,[["__scopeId","data-v-0b6f1055"]]),Gp={class:"auth-page"},qp={class:"auth-page-right"},Wp={class:"auth-card"},Jp={class:"form-group"},Vp={class:"auth-link-center"},zp={__name:"forgot_route",setup(e){const t=ft(),n=we(),a=(p="signin_route")=>{t.push({name:p})};ye.getTJO()&&a("contests");let s=null;const o=(p=3,u=1)=>{switch(n.appCLIFeatures.features.motif.state){case"brand":p=3,u=1;break;case"white_label":p=3,u=4;break}const f=Math.floor(Math.random()*p)+u,g=document.querySelector(".img__bg")?.classList;g&&(g.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),g.add(`img__bg--${f}`)),s||(s=Q.subscribe("APP__ROUTE_SYNC",(d,h)=>{const c=JSON.parse(h);switch(Object.keys(c)[0]){case"Motif":o();break;case"Lang":r();break}}))},r=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(p=>{const u=n.appCLIFeatures?.features?.lang?.state;let f=n.appMeta.microcopy.language.filter(g=>g.code==u)[0]?.copy;f=f.filter(g=>g[0]==p.dataset.syncMicrocopyText)[0],f&&(p.textContent=f[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(p=>{const u=n.appCLIFeatures?.features?.lang?.state;let f=n.appMeta.microcopy.language.filter(g=>g.code==u)[0]?.copy;f=f.filter(g=>g[0]==p.dataset.syncMicrocopyPlaceholder)[0],f&&(p.placeholder=f[1])})},i=p=>{At.neodigmUtils().shake(p||"#inp__text--email")},l=()=>{const p=document.querySelector("#inp__text--email");let u=null,f=null;if(!p?.value)u="Please enter your email address",f="#inp__text--email";else if(p.value.indexOf("@")===-1||p.value.indexOf(".")===-1)u="Please enter a valid email address",f="#inp__text--email";else{const g={method:"GET",headers:ye.genHeaders()};fetch(ye.API_baseURI+"/bmac/"+ye.API_ver+"/acctEntity/forgot?CODE="+encodeURIComponent(p.value),g).then(d=>d.json()).then(d=>{d.ok?(neodigmToast.q("Password reset email sent!|Please check your inbox","success"),setTimeout(()=>{a("verf_link_route")},2e3)):neodigmToast.q("Failed to send reset email|Please try again","danger")}).catch(d=>{neodigmToast.q("An error occurred|Please try again","danger")});return}u&&(i(f),neodigmToast.q(u,"danger"))};return Ht(()=>{o(),r()}),(p,u)=>(Qe(),pt("div",Gp,[u[7]||(u[7]=Kt('<div class="auth-page-left"><div class="auth-bg"><div class="auth-bg-image"></div><div class="auth-bg-image"></div><div class="auth-bg-image"></div></div><div class="auth-overlay"></div><div class="auth-branding-content"><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img"><p class="auth-branding-tagline">Daily Tournament Betting</p><p class="auth-branding-subtitle">Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer"> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),k("div",qp,[k("div",Wp,[u[6]||(u[6]=k("div",{class:"auth-header"},[k("h1",{class:"auth-title","data-sync-microcopy-text":"forgot_password"},"Forgot Password"),k("p",{class:"auth-subtitle","data-sync-microcopy-text":"please_enter_your_email"},"Please enter your email to receive a password reset link")],-1)),k("form",{class:"auth-form",onSubmit:Sa(l,["prevent"])},[k("div",Jp,[u[2]||(u[2]=k("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),k("input",{id:"inp__text--email",type:"text","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onKeyup:u[0]||(u[0]=yt(f=>l(),["enter"]))},null,32)]),u[5]||(u[5]=k("div",{class:"auth-actions"},[k("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"send_reset_link"},"Send Reset Link")],-1)),k("p",Vp,[u[3]||(u[3]=k("span",{"data-sync-microcopy-text":"remember_your_password"},"Remember your password?",-1)),u[4]||(u[4]=Ea()),k("a",{class:"auth-link",onClick:u[1]||(u[1]=f=>a("signin_route")),"data-sync-microcopy-text":"sign_in"},"Sign In")])],32)])])]))}},Qp={class:"auth-page"},Xp={class:"auth-page-right"},Zp={class:"auth-card"},ef={class:"form-group"},tf={class:"password-input-wrapper"},nf=["type"],af={class:"form-group"},sf={class:"password-input-wrapper"},of=["type"],rf={__name:"resethash_route",setup(e){const t=ft(),n=we(),a=()=>{t.push({name:"home_route"})};let s=null;const o=Je(!1),r=Je(!1),i=()=>{o.value=!o.value},l=()=>{r.value=!r.value},p=(h=3,c=1)=>{switch(n.appCLIFeatures.features.motif.state){case"brand":h=3,c=1;break;case"white_label":h=3,c=4;break}const m=Math.floor(Math.random()*h)+c,_=document.querySelector(".img__bg")?.classList;_&&(_.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),_.add(`img__bg--${m}`)),s||(s=Q.subscribe("APP__ROUTE_SYNC",(y,E)=>{const O=JSON.parse(E);switch(Object.keys(O)[0]){case"Motif":p();break;case"Lang":u();break}}))},u=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(h=>{const c=n.appCLIFeatures?.features?.lang?.state;let m=n.appMeta.microcopy.language.filter(_=>_.code==c)[0]?.copy;m=m.filter(_=>_[0]==h.dataset.syncMicrocopyText)[0],m&&(h.textContent=m[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(h=>{const c=n.appCLIFeatures?.features?.lang?.state;let m=n.appMeta.microcopy.language.filter(_=>_.code==c)[0]?.copy;m=m.filter(_=>_[0]==h.dataset.syncMicrocopyPlaceholder)[0],m&&(h.placeholder=m[1])})},f=h=>{At.neodigmUtils().shake(h||"#inp__text--password")},g=h=>{const c=[];return h.length<10&&c.push("at least 10 characters"),/[a-z]/.test(h)||c.push("1 lowercase"),/[A-Z]/.test(h)||c.push("1 uppercase"),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(h)||c.push("1 special character"),/[^\x00-\x7F]/.test(h)&&c.push("ASCII characters only"),c},d=()=>{const h=document.querySelector("#inp__text--password"),c=document.querySelector("#inp__text--verify-password");let m=null,_=null;if(!h?.value)m="Please enter a password",_="#inp__text--password";else{const y=g(h.value);if(y.length>0)m="Password must have:|"+y.join(", "),_="#inp__text--password";else if(!c?.value)m="Please verify your password",_="#inp__text--verify-password";else if(h.value!==c.value)m="Passwords do not match",_="#inp__text--verify-password";else{const E=n.appSession.session_user.email||"",O={email:E,hash:At.neodigmUtils().genHash(h.value),modified_by:E},R={method:"POST",body:JSON.stringify(O),headers:ye.genHeaders()};fetch(ye.API_baseURI+"/bmac/"+ye.API_ver+"/acctEntity/resetHash",R).then(M=>M.json()).then(M=>{M.ok?(neodigmToast.q("Password reset successful!|Signing you out...","success"),setTimeout(()=>{mvvLegit.doSignout()},4e3)):neodigmToast.q("Password reset failed|Please try again","danger")}).catch(M=>{neodigmToast.q("An error occurred|Please try again","danger")});return}}m&&(f(_),neodigmToast.q(m,"danger"))};return Ht(()=>{p(),u()}),(h,c)=>(Qe(),pt("div",Qp,[c[9]||(c[9]=Kt('<div class="auth-page-left" data-v-2ff7f7f3><div class="auth-bg" data-v-2ff7f7f3><div class="auth-bg-image" data-v-2ff7f7f3></div><div class="auth-bg-image" data-v-2ff7f7f3></div><div class="auth-bg-image" data-v-2ff7f7f3></div></div><div class="auth-overlay" data-v-2ff7f7f3></div><div class="auth-branding-content" data-v-2ff7f7f3><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-2ff7f7f3><p class="auth-branding-tagline" data-v-2ff7f7f3>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-2ff7f7f3>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-2ff7f7f3> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),k("div",Xp,[k("div",Zp,[c[8]||(c[8]=k("div",{class:"auth-header"},[k("h1",{class:"auth-title","data-sync-microcopy-text":"reset_password"},"Reset Password"),k("p",{class:"auth-subtitle","data-sync-microcopy-text":"please_enter_your_new_password"},"Please enter your new password")],-1)),k("form",{class:"auth-form",onSubmit:Sa(d,["prevent"])},[k("div",ef,[c[4]||(c[4]=k("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),k("div",tf,[k("input",{id:"inp__text--password",type:o.value?"text":"password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password",onKeyup:c[0]||(c[0]=yt(m=>d(),["enter"]))},null,40,nf),k("button",{type:"button",class:"password-toggle-btn",onClick:c[1]||(c[1]=m=>i()),tabindex:"-1"},[k("span",{class:Mt(o.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])]),c[5]||(c[5]=k("small",{"data-sync-microcopy-text":"must_be_at_least_10_characters_long"},"Must be at least 10 characters long",-1))]),k("div",af,[c[6]||(c[6]=k("label",{for:"inp__text--verify-password","data-sync-microcopy-text":"verify_password"},"Verify Password",-1)),k("div",sf,[k("input",{id:"inp__text--verify-password",type:r.value?"text":"password","data-sync-microcopy-placeholder":"re_enter_your_password",placeholder:"Re-enter your password",onKeyup:c[2]||(c[2]=yt(m=>d(),["enter"]))},null,40,of),k("button",{type:"button",class:"password-toggle-btn",onClick:c[3]||(c[3]=m=>l()),tabindex:"-1"},[k("span",{class:Mt(r.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),k("div",{class:"auth-actions"},[c[7]||(c[7]=k("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"reset_password"},"Reset Password",-1)),k("button",{type:"button",onClick:a,class:"btn btn-outline"}," Cancel ")])],32)])])]))}},lf=Yt(rf,[["__scopeId","data-v-2ff7f7f3"]]),cf={class:"auth-page"},uf={class:"auth-page-right"},df={class:"auth-card"},pf={class:"verification-content"},ff={class:"timer-display"},hf={__name:"verf_link_route",setup(e){const t=ft();ki(),we();const n=Je(7200);let a=null;const s=r=>{const i=Math.floor(r/3600),l=Math.floor(r%3600/60),p=r%60;return`${i.toString().padStart(2,"0")}:${l.toString().padStart(2,"0")}:${p.toString().padStart(2,"0")}`},o=()=>{a=setInterval(()=>{n.value--,n.value<=0&&(clearInterval(a),neodigmWired4Sound.sound(14),t.push({name:"splash_route"}))},1e3)};return Ht(()=>{o()}),ya(()=>{a&&clearInterval(a)}),(r,i)=>(Qe(),pt("div",cf,[i[4]||(i[4]=Kt('<div class="auth-page-left" data-v-f5b4a3c8><div class="auth-bg" data-v-f5b4a3c8><div class="auth-bg-image" data-v-f5b4a3c8></div><div class="auth-bg-image" data-v-f5b4a3c8></div><div class="auth-bg-image" data-v-f5b4a3c8></div></div><div class="auth-overlay" data-v-f5b4a3c8></div><div class="auth-branding-content" data-v-f5b4a3c8><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-f5b4a3c8><p class="auth-branding-tagline" data-v-f5b4a3c8>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-f5b4a3c8>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-f5b4a3c8> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),k("div",uf,[k("div",df,[i[3]||(i[3]=k("div",{class:"auth-header"},[k("h1",{class:"auth-title"},"Check Your Email"),k("p",{class:"auth-subtitle"},"A verification link has been sent to the email address you provided.")],-1)),k("div",pf,[i[0]||(i[0]=k("p",{class:"verification-instructions"},"Please click on that link to continue.",-1)),i[1]||(i[1]=k("p",{class:"verification-note"},"The link will expire in 2 hours.",-1)),i[2]||(i[2]=k("p",{class:"verification-note"},"Remember to check your spam folder.",-1)),k("div",ff,ar(s(n.value)),1)])])])]))}},gf=Yt(hf,[["__scopeId","data-v-f5b4a3c8"]]),ds=Ed({history:td(),routes:[{path:"/",name:"splash_route",component:Wo},{path:"/splash_route",name:"splash_route",component:Wo},{path:"/error_route",name:"error_route",component:Vn},{path:"/forgot_route",name:"forgot_route",component:zp},{path:"/resetforgot_route",name:"resetforgot_route",component:Vn},{path:"/resethash_route",name:"resethash_route",component:lf},{path:"/signin_route",name:"signin_route",component:Op},{path:"/signout_route",name:"signout_route",component:wp},{path:"/signup_route",name:"signup_route",component:jp},{path:"/verf_link_route",name:"verf_link_route",component:gf},{path:"/offline_route",name:"offline_route",component:Vn},{path:"/home_route",name:"home_route",component:cp},{path:"/appFAQ",name:"appFAQ",component:Vn},{path:"/appHelp",name:"appHelp",component:hp}]}),ps={categorizeTournaments(e,t,n,a){const s=[],o=l=>(l.entities?.guids||[]).includes(a),r=l=>(l.sports_allowed||[]).length===1,i=l=>(l.sports_allowed||[]).length>1;if(t==="lobby"&&n==="all"){const l=e.filter(h=>o(h)&&(h.status==="LOCKED"||h.class==="LOCKED"));l.length>0&&s.push({title:"Your Active Tournaments",subtext:`Currently in progress • ${l.length} tournament${l.length!==1?"s":""}`,tournaments:l});const p=e.filter(h=>o(h)&&(h.status==="UPCOMING"||h.class==="UPCOMING"));p.length>0&&s.push({title:"Your Upcoming Tournaments",subtext:`Joined, not yet started • ${p.length} tournament${p.length!==1?"s":""}`,tournaments:p});const u=e.filter(h=>!o(h)&&(h.status==="UPCOMING"||h.class==="UPCOMING")&&r(h));u.length>0&&s.push({title:"Upcoming Single-Sport Tournaments",subtext:`Focused competitions • ${u.length} tournament${u.length!==1?"s":""}`,tournaments:u});const f=e.filter(h=>!o(h)&&(h.status==="UPCOMING"||h.class==="UPCOMING")&&i(h));f.length>0&&s.push({title:"Upcoming Multi-Sport Tournaments",subtext:`Cross-league action • ${f.length} tournament${f.length!==1?"s":""}`,tournaments:f});const g=e.filter(h=>o(h)&&(h.status==="COMPLETED"||h.class==="COMPLETED")).slice(0,10);g.length>0&&s.push({title:"Your Recently Completed Tournaments",subtext:`Check your results • ${g.length} tournament${g.length!==1?"s":""}`,tournaments:g});const d=e.filter(h=>!o(h)&&(h.status==="COMPLETED"||h.class==="COMPLETED")).slice(0,20);d.length>0&&s.push({title:"Recently Completed Tournaments",subtext:`Explore past competitions • ${d.length} tournament${d.length!==1?"s":""}`,tournaments:d})}else s.push({title:"Tournaments",subtext:`${e.length} tournament${e.length!==1?"s":""}`,tournaments:e});return s},disableExistingBetButtons(){const e=document.querySelectorAll(".bet-grid__slip-MYBETS bma-bet-existing"),t=Array.from(e).map(a=>{try{return JSON.parse(a.getAttribute("data-corebetslip")||"{}")}catch{return null}}).filter(Boolean);document.querySelectorAll(".match-card").forEach(a=>{const s=a.dataset.matchGuid,o=a.querySelector(".match-card__team--home"),r=a.querySelector(".match-card__team--away"),i=o?.textContent.trim(),l=r?.textContent.trim();a.querySelectorAll(".match-card__btn:not(.match-card__btn--empty)").forEach(p=>{if(p.disabled)return;const u=p.dataset.betType,d=p.dataset.team==="home"?i:l;t.some(c=>{if(c.coreMatches__guid!==s)return!1;const m=c.bet||[];if(m.length===0)return!1;const _=m[0],E=Object.keys(_).filter(M=>M!=="short_title")[0],R=_[E]?.type;return u==="total"?R===u:R===u&&E===d})&&(p.disabled=!0,p.classList.add("match-card__btn--disabled"))})})},bindAppListeners(e){Q.subscribe("APP",(d,h)=>{console.warn("~~ sub all APP | "+d+"|"+h)}),Q.subscribe("WC",(d,h)=>{console.warn("~~ sub all WC  | "+d+"|"+h)}),Q.subscribe("ROUTE",(d,h)=>{console.warn("~~ sub all ROUTE  | "+d+"|"+h)});let t="lobby",n="all";const a=()=>{if(e.coreTourn.length===0)return;const h=e.coreTourn[e.coreTourn.length-1].data,c=e.appSession?.session_user?.guid;document.querySelectorAll(".tournament-item").forEach(y=>y.classList.remove("h-ds__none"));let _=0;if(h.forEach(y=>{const E=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${y.guid}"]`);if(!E)return;const O=E.parentElement;let R=!0;t==="my"?(y.entities?.guids||[]).includes(c)||(R=!1):t==="completed"&&(y.status||y.class)!=="COMPLETED"&&(R=!1),n!=="all"&&R&&((y.sports_allowed||[]).some($=>$.key===n)||(R=!1)),R?_++:O&&O.classList.add("h-ds__none")}),console.log(`[app_events] Filter applied - ${t}/${n} - showing ${_} of ${h.length} tournaments`),_===0){let y="No tournaments match the current filters";t==="my"&&(y="You haven't joined any tournaments yet"),t==="completed"&&(y="No completed tournaments yet"),typeof neodigmToast<"u"&&neodigmToast.q(y,"night")}};Q.subscribe(e.hierTopics.COREBETSLIP,(d,h)=>{JSON.parse(h);let c=16;switch(d){case e.hierTopics.COREBETSLIP__BET:c=5,Xt.shootConfetti(),console.log("~~~  |  "+d+" | ",h);const m=document.querySelector("neodigm-sodapop");m&&m.setAttribute("data-wait","true");const _=document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry");if(_.length===0){console.warn("[app_events] No bets to submit"),m&&m.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("No bets to submit","warning");break}const E=document.querySelector(".play-cntr")?.dataset?.currentTournGuid,O=e.appSession?.session_user?.guid;if(!E||!O){console.error("[app_events] Missing tournament or user GUID"),m&&m.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("Missing tournament or user data","danger");break}const R=Array.from(_).map(j=>{const Y=j.getAttribute("data-content-team-points"),x=j.getAttribute("data-content-odds"),H=j.getAttribute("data-stake")||"0",Z=j.getAttribute("data-content-type"),ce=j.getAttribute("data-payout")||"0",_e=j.getAttribute("data-match-guid")||"",fe={};return fe[Y]={type:Z,stake:parseFloat(H),odds:parseFloat(x),payout:parseFloat(ce),reconciled:!1},{acctEntity__guid:O,coreTournaments__guid:E,coreMatches__guid:_e,bet:[fe],status:"PENDING"}});console.log("[app_events] Submitting bet slips:",R),ye.postBetSlips(R).then(j=>{console.log("[app_events] Bet slips posted successfully:",j);const Y=R.reduce((x,H)=>{const Z=H.bet[0],ce=Object.keys(Z)[0];return x+(Z[ce]?.stake||0)},0);typeof neodigmToast<"u"&&neodigmToast.q(`Bets placed successfully!|Total Stake: TD$ ${Y.toFixed(2)}`,"success"),neodigmSodaPop&&neodigmSodaPop.close(),ye.fetchBetSlips(O,E).then(x=>{if(x?.rows){const H={timestamp:Date.now(),source:"API",data:x.rows};e.pushcoreBetSlip(H),console.log("[app_events] Refreshed bet slips in store:",x.rows.length,"items")}m&&m.setAttribute("data-wait","false"),Q.publish(e.hierTopics.WC__TOURN_ACTION,JSON.stringify({action:"PLAY",tournamentGuid:E,timestamp:Date.now()})),setTimeout(()=>{Q.publish(e.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,JSON.stringify(x))},3e3)}).catch(x=>{console.error("[app_events] Error fetching fresh bet slips:",x),m&&m.setAttribute("data-wait","false"),Q.publish(e.hierTopics.WC__TOURN_ACTION,JSON.stringify({action:"PLAY",tournamentGuid:E,timestamp:Date.now()}))})}).catch(j=>{console.error("[app_events] Error posting bet slips:",j),typeof neodigmToast<"u"&&neodigmToast.q("Failed to place bets|Please try again","danger"),m&&m.setAttribute("data-wait","false")});break;case e.hierTopics.COREBETSLIP__SPREAD:break;case e.hierTopics.COREBETSLIP__MONEY:break;case e.hierTopics.COREBETSLIP__TOTAL:break;case e.hierTopics.COREBETSLIP__CLOSE:c=24;break;case e.hierTopics.COREBETSLIP__TDSYNC:const M=document.querySelector("#summary-balance");if(M&&h){h=JSON.parse(h);const Y=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(e.coreBetSlip[0]?.data&&Y){const x=e.coreBetSlip[0].data.filter(Z=>Z.coreTournaments__guid===Y);M.innerHTML=h.tournament_dollars.toFixed(2);let H=yn.search(x,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0;H&&(M.innerHTML=(h.tournament_dollars-H).toFixed(2))}else M.innerHTML=h.tournament_dollars.toFixed(2)}break;case e.hierTopics.COREBETSLIP__INTERSYNC:let B=0,$=0;if(e.coreBetSlip.length>0){const Y=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(Y){const H=e.coreBetSlip[e.coreBetSlip.length-1].data.filter(ce=>ce.coreTournaments__guid===Y),Z=H.filter(ce=>{const _e=ce.bet||[];if(_e.length===0)return!1;const fe=_e[0];return Object.keys(fe).filter(xe=>xe!=="short_title").some(xe=>fe[xe]?.reconciled!==!1)});B=yn.search(H,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,$=yn.search(Z,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0}}let T=!0,w=0;const U=document.querySelector("[data-bets-valid]"),P=document.querySelector("#summary-balance"),W=document.querySelector("#summary-stake"),X=document.querySelector("#summary-payout");if(U&&h){h=JSON.parse(h),h.pending_stake_sum=0,h.pending_payout_sum=0,h.bets.length||(T=!1),h.bets.forEach(H=>{H.stake=Number(H.stake),H.stake?h.pending_stake_sum+=H.stake:T=!1}),document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry").forEach(H=>{const Z=parseFloat(H.getAttribute("data-payout")||"0");h.pending_payout_sum+=Z});const Y=B+h.pending_stake_sum,x=$+h.pending_payout_sum;w=h.tournament_dollars=h.tournament_dollars-Y,w<0?P.classList.add("summary-cell__red"):P.classList.remove("summary-cell__red"),P.innerHTML=w.toFixed(2),W.innerHTML=Y.toFixed(2),X&&(X.innerHTML=x.toFixed(2),x<0?X.classList.add("summary-cell__red"):X.classList.remove("summary-cell__red")),h.tournament_dollars<0&&(T=!1),U.dataset.betsValid=T}break}c&&neodigmWired4Sound&&neodigmWired4Sound.sound(c,"QUITE").vibrate()});const s=()=>{const h=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let c=0;h&&e.coreTourn.length>0&&(c=e.coreTourn[e.coreTourn.length-1].data.find(y=>y.guid===h)?.tournament_dollars||0),Q.publish(e.hierTopics.COREBETSLIP__TDSYNC,JSON.stringify({tournament_dollars:c,timestamp:Date.now()}))},o=()=>{const d=document.querySelector("#summary-balance"),h=document.querySelector("#summary-stake"),c=document.querySelector("#summary-payout");if(!d||!h||!c){console.warn("[app_events] Summary elements not found");return}const _=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let y=0;_&&e.coreTourn.length>0&&(y=e.coreTourn[e.coreTourn.length-1].data.find($=>$.guid===_)?.tournament_dollars||0);let E=0,O=0;if(e.coreBetSlip.length>0&&_){const B=e.coreBetSlip[e.coreBetSlip.length-1].data.filter(T=>T.coreTournaments__guid===_);console.log("[app_events] Filtered bets for tournament:",_,"found:",B.length),console.log("[app_events] Using latest bet slip data index:",e.coreBetSlip.length-1),console.log("[app_events] First bet sample:",B[0]);const $=B.filter(T=>{const w=T.bet||[];if(w.length===0)return!1;const U=w[0];return Object.keys(U).filter(W=>W!=="short_title").some(W=>U[W]?.reconciled!==!1)});console.log("[app_events] Reconciled bets count:",$.length,"of",B.length),E=yn.search(B,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,O=yn.search($,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0,console.log("[app_events] Existing bets summary:",{betCount:B.length,reconciledCount:$.length,totalStakes:E,totalPayouts:O,tournamentDollars:y})}else console.warn("[app_events] No bet data found in Pinia store or missing tournamentGuid");const R=y-E;d.innerHTML=R.toFixed(2),R<0?d.classList.add("summary-cell__red"):d.classList.remove("summary-cell__red"),h.innerHTML=E.toFixed(2),c.innerHTML=O.toFixed(2),O<0?c.classList.add("summary-cell__red"):c.classList.remove("summary-cell__red")};Q.subscribe(e.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,(d,h)=>{const m=JSON.parse(h)?.rows||[],_=document.querySelector(".bet-grid__slip-MYBETS");if(!_)return;if(_.innerHTML="",m.length===0){_.innerHTML='<p style="color: var(--app-core-color--gray-6__dark--brand, #969696); text-align: center; padding: 20px;">No active bets</p>';const E=document.querySelector(".bet-grid__slip");E&&E.setAttribute("data-active-bet-tab","BETSLIP"),s();return}m.forEach(E=>{if((E.bet||[]).length===0)return;const R=document.createElement("bma-bet-existing");R.setAttribute("data-corebetslip",JSON.stringify(E)),_.appendChild(R)});const y=document.querySelector(".bet-grid__slip");y&&y.setAttribute("data-active-bet-tab","MYBETS"),console.log("[app_events] Disabling buttons for existing bets:",m.length),ps.disableExistingBetButtons(),setTimeout(()=>{console.log("[app_events] Calling updateSummaryFromExistingBets after HYDRATE, bet count:",m.length),console.log("[app_events] Pinia store bet count:",e.coreBetSlip[0]?.data?.length||0),o()},200)}),document.addEventListener("click",d=>{const h=d.target;if(h&&h.classList.contains("bet-slip-tab")){const c=h.dataset.betTab,m=document.querySelector(".bet-grid__slip");c&&m&&(m.setAttribute("data-active-bet-tab",c),neodigmWired4Sound&&neodigmWired4Sound.sound(3),console.log("[app_events] Switched to bet tab:",c))}if(h&&h.dataset.publishBetslip){const c=h.dataset.publishBetslip;Q.publish(c,JSON.stringify({timestamp:Date.now()}))}});const r=()=>{const h=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let c=0;h&&e.coreTourn.length>0&&(c=e.coreTourn[e.coreTourn.length-1].data.find(O=>O.guid===h)?.tournament_dollars||0);const m=document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry"),_=Array.from(m).map(y=>({teamPoints:y.getAttribute("data-content-team-points"),odds:y.getAttribute("data-content-odds"),stake:y.getAttribute("data-stake")||"0",type:y.getAttribute("data-content-type"),abbreviatedTitle:y.getAttribute("data-abbreviated-title"),scheduledAt:y.getAttribute("data-scheduled-at")}));Q.publish(e.hierTopics.COREBETSLIP__INTERSYNC,JSON.stringify({tournament_dollars:c,bets:_,timestamp:Date.now()}))},i=(d,h)=>{const c=JSON.parse(h),m=document.querySelector(".bet-grid__slip-BETSLIP-content");if(!m){console.error("[app_events] Bet slip container not found");return}const _=m.querySelector(".bet-slip__empty");_&&_.remove();let y="";c.type==="total"?y=c.team==="over"?"Over":"Under":c.team==="home"?y=c.homeTeam:c.team==="away"&&(y=c.awayTeam);let E=y;if(c.point)if(c.type==="spread"){const T=parseFloat(c.point)>0?`+${c.point}`:c.point;E=`${y} ${T}`}else c.type==="total"&&(E=`${y} ${c.point}`);const O=document.createElement("bma-bet-entry");O.setAttribute("data-content-team-points",E),O.setAttribute("data-content-odds",c.price||"0"),O.setAttribute("data-content-stake-text","0"),O.setAttribute("data-content-type",c.type||""),O.setAttribute("data-abbreviated-title",c.abbreviatedTitle||`${c.homeTeam} vs ${c.awayTeam}`),O.setAttribute("data-scheduled-at",c.scheduledAt||""),O.setAttribute("data-match-guid",c.matchGuid||""),O.setAttribute("data-home-team",c.homeTeam||""),O.setAttribute("data-away-team",c.awayTeam||""),O.setAttribute("data-bet-team",y||"");const M=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(M&&e.coreTourn.length>0){const w=e.coreTourn[e.coreTourn.length-1].data.find(U=>U.guid===M);if(w?.sports_allowed&&w.sports_allowed.length>0){const U=w.sports_allowed[0];O.setAttribute("data-sport-key",U.key||"");const P=$n.find(W=>W.key===U.key);O.setAttribute("data-sport-group",P?.group||"")}}m.appendChild(O),console.log("[app_events] Bet entry appended to container:",O,"Container children:",m.children.length),setTimeout(()=>{l(O)},0);const B=document.querySelector(".bet-grid__slip");B&&(B.setAttribute("data-active-bet-tab","BETSLIP"),console.log("[app_events] Switched to BETSLIP tab"));const $=m.querySelectorAll("bma-bet-entry").length;$>=3?requestAnimationFrame(()=>{setTimeout(()=>{const T=document.querySelector(".bet-grid__slip");T&&(console.log("[app_events] Scrolling parent to bottom - bet count:",$,"scrollHeight:",T.scrollHeight,"current scrollTop:",T.scrollTop),T.scrollTo({top:T.scrollHeight,behavior:"smooth"}),setTimeout(()=>{console.log("[app_events] After scroll - scrollTop:",T.scrollTop)},500))},150)}):console.log("[app_events] Skipping scroll - only",$,"bet cards (need 3+)"),setTimeout(()=>{r()},200),console.log("[app_events] Created bet entry:",{teamPoints:E,odds:c.price,type:c.type})};Q.subscribe(e.hierTopics.COREBETSLIP__SPREAD,i),Q.subscribe(e.hierTopics.COREBETSLIP__MONEY,i),Q.subscribe(e.hierTopics.COREBETSLIP__TOTAL,i);const l=d=>{const h={sport:{key:d.getAttribute("data-sport-key")||"",group:d.getAttribute("data-sport-group")||""},Match:{scheduled_at:d.getAttribute("data-scheduled-at")||"",home_team_id:d.getAttribute("data-home-team")||"",home_team_score:"",away_team_id:d.getAttribute("data-away-team")||"",away_team_score:""},Bet:{scope:{team_id:d.getAttribute("data-bet-team")||"",over:"",under:""},type:d.getAttribute("data-content-type")||"",odds:d.getAttribute("data-content-odds")||"0",stake:d.getAttribute("data-stake")||"0"}},c=Ci.calcPayout(h);d.setAttribute("data-payout",c.toString()),console.log("[app_events] Payout calculated:",{stake:h.Bet.stake,odds:h.Bet.odds,payout:c})};new MutationObserver(d=>{d.forEach(h=>{h.type==="attributes"&&h.attributeName==="data-stake"&&h.target.tagName==="BMA-BET-ENTRY"&&(console.log("[app_events] Stake changed:",h.target.getAttribute("data-stake")),l(h.target),clearTimeout(window.betSlipStakeTimeout),window.betSlipStakeTimeout=setTimeout(()=>{r()},300))})}).observe(document.body,{attributes:!0,attributeFilter:["data-stake"],subtree:!0}),console.log("[app_events] MutationObserver for stake changes initialized"),document.addEventListener("bma-bet-entry-remove",d=>{console.log("[app_events] Removing bet entry:",d.detail);const h=d.target,c=d.detail;h.remove(),document.querySelectorAll(".match-card").forEach(y=>{y.querySelectorAll(".match-card__btn").forEach(O=>{const R=O.dataset.betType,M=O.dataset.price,B=R===c.type,$=M===c.odds;B&&$&&O.classList.contains("match-card__btn--active")&&(O.classList.remove("match-card__btn--active"),console.log("[app_events] Deactivated button via X removal:",{btnType:R,btnPrice:M}))})});const _=document.querySelector(".bet-grid__slip-BETSLIP-content");_&&_.children.length,setTimeout(()=>{r()},100)}),Q.subscribe(e.hierTopics.CANVAS__HYDRATE__STATUS,(d,h)=>{const c=JSON.parse(h);c&&c.guid&&neodigmUtils&&neodigmUtils.shake(`[data-bma-tourn-guid="${c.guid}"]`)}),Q.subscribe(e.hierTopics.WC__APP__FOOT,(d,h)=>{JSON.parse(h);let c=16;switch(d){case e.hierTopics.WC__APP__FOOT__ALL_SPORTS:Q.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_LOBBY,JSON.stringify({tab:"ALL_SPORTS",timestamp:Date.now()}));break;case e.hierTopics.WC__APP__FOOT__MY_TOURNEYS:Q.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_MY,JSON.stringify({tab:"MY_TOURNEYS",timestamp:Date.now()}));break;case e.hierTopics.WC__APP__FOOT__LEADERBOARD:c=24,Q.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_LEADERBOARD,JSON.stringify({tab:"LEADERBOARD",timestamp:Date.now()}));break;case e.hierTopics.WC__APP__FOOT__MY_PROFILE:Q.publish(e.hierTopics.WC__APP__HEAD_TOP__USER_PROFILE,JSON.stringify({tab:"USER_PROFILE",timestamp:Date.now()}));break}c&&neodigmWired4Sound&&neodigmWired4Sound.sound(c).vibrate()}),Q.subscribe(e.hierTopics.WC__APP__HEAD_SPORTS,(d,h)=>{const c=JSON.parse(h);let m=16;d=="WC.APP.HEAD_SPORTS.PREV"||d=="WC.APP.HEAD_SPORTS.NEXT"||d=="WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START"?m=3:(n=c.key||"all",console.log(`[app_events] Sports filter changed to: ${n} (${c.group})`),a()),m&&neodigmWired4Sound&&neodigmWired4Sound.sound(m).vibrate()}),Q.subscribe(e.hierTopics.WC__APP__HEAD_MID,(d,h)=>{JSON.parse(h);let c=16;const m=()=>{n="all";const _=document.querySelector("bma-app-head-sports");_&&_.setAttribute("data-selected-chip","all")};switch(d){case"WC.APP.HEAD_MID.HEAD_MID_LOBBY":t="lobby",m(),a();break;case"WC.APP.HEAD_MID.HEAD_MID_MY":if(!e.appSession?.session_user?.guid){console.warn("[app_events] No user GUID found, cannot filter tournaments"),typeof neodigmToast<"u"&&neodigmToast.q("Please sign in to view your tournaments","warning");return}t="my",m(),a();break;case"WC.APP.HEAD_MID.HEAD_MID_COMPLETED":t="completed",m(),a();break;case"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD":t="leaderboard",m(),a(),c=24,typeof neodigmToast<"u"&&neodigmToast.q("Feature not Available|in Beta","night");break;case"WC.APP.HEAD_MID.HEAD_MID_SQUAD":t="squad",m(),a(),c=24,typeof neodigmToast<"u"&&neodigmToast.q("Feature not Available|in Beta","night");break}c&&neodigmWired4Sound&&neodigmWired4Sound.sound(c).vibrate()}),Q.subscribe(e.hierTopics.ROUTE__HOME__USER_PROFILE,async(d,h)=>{JSON.parse(h);let c=16;switch(d){case"ROUTE.HOME.USER_PROFILE.INSTALL_PWA":const m=window.deferredPWAPrompt;if(!m){console.log("No install prompt available"),typeof neodigmToast<"u"&&neodigmToast.q("PWA install not available","warning");return}try{m.prompt();const{outcome:y}=await m.userChoice;y==="accepted"?(console.log("PWA installed successfully"),window.deferredPWAPrompt=null,typeof neodigmToast<"u"&&neodigmToast.q("App installed successfully!","success"),c=8,neodigmSodaPop&&neodigmSodaPop.close()):(console.log("PWA install declined"),typeof neodigmToast<"u"&&neodigmToast.q("Install cancelled","night"))}catch(y){console.error("PWA install error:",y),typeof neodigmToast<"u"&&neodigmToast.q("Install failed","danger")}break;case"ROUTE.HOME.USER_PROFILE.TOGGLE_THEME":(()=>{const E=e.appCLIFeatures.features.theme.state==="dark"?"light":"dark";e.setFeaturePersistPub("theme",{state:E});const O=document.getElementById("app");O&&O.setAttribute("data-sync-theme",E),document.body.setAttribute("data-sync-theme",E)})(),neodigmSodaPop&&neodigmSodaPop.close();break;case"ROUTE.HOME.USER_PROFILE.RESET_PASSWORD":ds.push({name:"resethash_route"}),neodigmSodaPop&&neodigmSodaPop.close();break;case"ROUTE.HOME.USER_PROFILE.SIGNOUT":ds.push({name:"signout_route"}),neodigmSodaPop&&neodigmSodaPop.close();break}c&&neodigmWired4Sound&&neodigmWired4Sound.sound(c).vibrate()});const u=(d,h)=>{const c=d.split(".").pop();console.log("[app_events] SODAPOP_PLAY subscriber - action:",c,"topic:",d),setTimeout(()=>{const m=document.querySelectorAll(".play-cntr .btn-info-sm"),y=document.querySelector(".play-cntr")?.closest("neodigm-sodapop");m.forEach(E=>{const O=E.dataset.publishRouteHome?.split(".").pop()||"";if(O===c){if(console.log("[app_events] Activating button:",O),E.classList.add("btn-info-sm--active"),E.classList.remove("btn-info-sm--inactive"),neodigmCarousel.nav({id:"caro-play",nav:O}),neodigmWired4Sound.sound(3),y){const R=c==="PLAY"?"hidden":"auto";y.style.overflow=R,console.log("[app_events] Set sodapop overflow to:",R)}}else E.classList.add("btn-info-sm--inactive"),E.classList.remove("btn-info-sm--active")})},100)};Q.subscribe("ROUTE.HOME.SODAPOP_PLAY.INFO",u),Q.subscribe("ROUTE.HOME.SODAPOP_PLAY.LEADERBOARD",u),Q.subscribe("ROUTE.HOME.SODAPOP_PLAY.PLAY",(d,h)=>{JSON.parse(h);const c=document.getElementById("btn-join__play--id");if(!c){console.warn("[app_events] PLAY button not found");return}const m=c.dataset.requiresJoin==="true",_=c.textContent.trim().toLowerCase();if(console.log("[app_events] PLAY button clicked - text:",_,"requiresJoin:",m),m&&_==="join"){const E=document.querySelector(".play-cntr")?.dataset?.currentTournGuid,O=we();if(!E){console.error("[app_events] No tournament GUID found");return}console.log("[app_events] Executing JOIN for tournament:",E),Q.publish(O.hierTopics.WC__TOURN_ACTION,JSON.stringify({action:"JOIN",tournamentGuid:E,timestamp:Date.now()})),c.textContent="Play",c.dataset.requiresJoin="false",setTimeout(()=>{u(d),console.log("[app_events] JOIN triggered, advancing carousel to PLAY page")},500)}else u(d),console.log("[app_events] Advancing carousel to PLAY page")}),Q.subscribe(e.hierTopics.WC__APP__HEAD_TOP,(d,h)=>{JSON.parse(h);let c=10;switch(d){case"WC.APP.HEAD_TOP.USER_PROFILE":c=10,neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_my_profile"),setTimeout(()=>{neodigmCarousel.nav({id:"caro-user_profile",nav:"caro-page__badges"})},1200);break;case"WC.APP.HEAD_TOP.LOGO":const m=e.appSession.session_app.version,_=new Date().getFullYear();m&&neodigmToast&&neodigmToast.q(`${m} 1/4/2026, 3:34:35 PM|© ${_} Bet Max Action`,"night");break}c&&neodigmWired4Sound&&neodigmWired4Sound.sound(c).vibrate()});let f=null,g=null;Q.subscribe(e.hierTopics.WC__TOURN_ACTION,(d,h)=>{const c=JSON.parse(h);let m=0;switch(c?.action){case"JOIN":m=512;break;case"PLAY":m=8;break;case"INFO":m=8;break}if(m){f=c?.tournamentGuid,g=c?.action,console.log("[app_events] Storing pending tourn data:",f,g);const _=e.appSession?.session_user?.guid,y=c?.tournamentGuid;_&&y?ye.fetchBetSlips(_,y).then(E=>{if(E?.rows){const O={timestamp:Date.now(),source:"API",data:E.rows};e.pushcoreBetSlip(O),console.log("[app_events] Bet slips fetched:",E.rows.length,"items")}setTimeout(()=>{neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_play"),setTimeout(()=>{Q.publish(e.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,JSON.stringify(E))},3e3)},m)}).catch(E=>{console.error("[app_events] Error fetching bet slips:",E),setTimeout(()=>{neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_play")},m)}):setTimeout(()=>{neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_play")},m)}}),Q.subscribe(e.hierTopics.WC__TOURN_ACTION,(d,h)=>{const c=JSON.parse(h);let m=16;switch(c?.action){case"FOCUS":m=3;break;case"SPORT_ICON":m=10;break;case"JOIN":m=5;break;case"PLAY":m=16;break}m&&neodigmWired4Sound&&neodigmWired4Sound.sound(m).vibrate()}),Q.subscribe(e.hierTopics.WC__TOURN_ACTION,(d,h)=>{const c=JSON.parse(h);let m=0,_="night";switch(neodigmOpt&&neodigmOpt.EVENT_SOUNDS&&(neodigmOpt.EVENT_SOUNDS=!1),c?.tournamentStatus){case"UPCOMING":_="success";break;case"LOCKED":_="warning";break;case"COMPLETED":_="danger";break}switch(c?.action){case"SPORT_ICON":c?.sportTitle==c?.sportDescription?m=c?.sportTitle:m=c?.sportTitle+"|"+c?.sportDescription;break}m&&neodigmToast&&neodigmToast.q(m,_)}),Q.subscribe(e.hierTopics.WC__TOURN_ACTION,async(d,h)=>{const c=JSON.parse(h);if(c?.action==="JOIN"){const _=we().appSession?.session_user?.guid;if(!_){console.error("No entity guid found in session"),typeof neodigmToast<"u"&&neodigmToast.q("Please sign in to join tournaments","warning");return}const y=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${c.tournamentGuid}"]`);y&&(y.setAttribute("data-bma-tourn-wait","true"),Xt.shootConfetti());const E={acctEntityGuid:_,tournamentGuid:c.tournamentGuid};try{const O={method:"POST",body:JSON.stringify(E),headers:ye.genHeaders()};console.log("Posting to:",ye.API_baseURI+"/bmac/"+ye.API_ver+"/coreTournaments/join",E);const M=await(await fetch(ye.API_baseURI+"/bmac/"+ye.API_ver+"/coreTournaments/join",O)).json();if(console.log("Join response:",M),M.ok)typeof neodigmToast<"u"&&neodigmToast.q("Successfully joined tournament!","success");else{const B=M?.message||"Failed to join tournament";typeof neodigmToast<"u"&&neodigmToast.q(B,"danger"),y&&y.setAttribute("data-bma-tourn-wait","false")}}catch(O){console.error("Join tournament error:",O),typeof neodigmToast<"u"&&neodigmToast.q("Network error joining tournament","danger"),y&&y.setAttribute("data-bma-tourn-wait","false")}}}),Q.subscribe(e.hierTopics.ROUTE__HOME_ONMOUNT,async(d,h)=>{console.log("[app_events] ROUTE__HOME_ONMOUNT event received");const c=we();try{const m=await ye.fetchTournaments();console.log("[app_events] Tournaments fetched:",m),m?.rows&&Array.isArray(m.rows)?(c.pushCoreTourn({timestamp:Date.now(),source:"API",data:m.rows}),console.log("[app_events] Pushed to coreTourn, length:",c.coreTourn.length),Q.publish(c.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now()}))):console.warn("[app_events] Invalid API response format:",m)}catch(m){console.error("[app_events] Error fetching tournaments:",m),typeof neodigmToast<"u"&&neodigmToast.q("Failed to load tournaments","danger"),Xt.hardReload()}}),Q.subscribe(e.hierTopics.ROUTE__HOME_HYDRATE,(d,h)=>{console.log("[app_events] ROUTE__HOME_HYDRATE event received");const c=we();if(c.coreTourn.length===0){console.warn("[app_events] No tournament data in coreTourn array");return}const m=c.coreTourn[c.coreTourn.length-1],_=c.coreTourn.length>1?c.coreTourn[c.coreTourn.length-2]:null;console.log("[app_events] Hydrating with latest data:",m);const y=[];if(_){const M=m.data,B=_.data;M.forEach($=>{const T=B.find(w=>w.guid===$.guid);T&&T.status!==$.status&&(console.log(`[app_events] Status changed for tournament ${$.guid}: ${T.status} -> ${$.status}`),y.push($.guid))})}const E=c.appSession?.session_user?.guid,O=[...m.data].sort((M,B)=>{const $=M.status||M.class,T=B.status||B.class,w=M.entities?.guids||[],U=B.entities?.guids||[],P=w.includes(E),W=U.includes(E),X=(Ue,xe)=>{const $e=new Date(Ue.status_time||0).getTime();return new Date(xe.status_time||0).getTime()-$e},j=$==="LOCKED"&&P,Y=T==="LOCKED"&&W;if(j&&!Y)return-1;if(!j&&Y)return 1;if(j&&Y)return X(M,B);const x=$==="UPCOMING",H=T==="UPCOMING";if(x&&!H)return-1;if(!x&&H)return 1;if(x&&H)return X(M,B);const Z=$==="COMPLETED"&&P,ce=T==="COMPLETED"&&W;if(Z&&!ce)return-1;if(!Z&&ce)return 1;if(Z&&ce)return X(M,B);const _e=$==="COMPLETED"&&!P,fe=T==="COMPLETED"&&!W;return _e&&!fe?1:!_e&&fe?-1:X(M,B)}),R=ps.categorizeTournaments(O,t,n,E);if(console.log(`[app_events] Categorized into ${R.length} categories for filter: ${t}/${n}`),window._homeRouteRenderCards&&typeof window._homeRouteRenderCards=="function"){if(window._homeRouteRenderCards(R,!0),setTimeout(()=>{a(),console.log("[app_events] Re-applied filter after hydration:",t)},100),y.length>0){const M=m.data;y.forEach(B=>{const $=M.find(T=>T.guid===B);if($){const T=Math.floor(Math.random()*2e3)+1e3;setTimeout(()=>{Q.publish(c.hierTopics.CANVAS__HYDRATE__STATUS,JSON.stringify({guid:B,status:$.status,timestamp:Date.now()}))},T)}})}}else console.warn("[app_events] window._homeRouteRenderCards not available")}),Q.subscribe(e.hierTopics.SSE__CORE__TOURN_SYNC,(d,h)=>{console.log("[app_events] SSE__CORE__TOURN_SYNC event received:",h);const c=we();try{const m=JSON.parse(h);console.log("[app_events] SSE tournament sync data:",m);const _=JSON.parse(m.msg);if(console.log("[app_events] Parsed tournaments array:",_),!Array.isArray(_)){console.warn("[app_events] SSE msg is not an array:",_);return}c.pushCoreTourn({timestamp:Date.now(),source:"SSE",data:_}),console.log("[app_events] Pushed SSE data to coreTourn, length:",c.coreTourn.length),Q.publish(c.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"SSE"}))}catch(m){console.error("[app_events] Error processing SSE tournament sync:",m)}}),setTimeout(function(){neodigmSodaPop&&neodigmMarquee&&neodigmEnchantedCTA&&(neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{NeodigmClaire.showCanv("neodigm-sodapop",.5).setTheme(["warning","success"]).initCanvOn("neodigm-sodapop").waxOn("neodigm-sodapop")},1e3),neodigmMetronome.init().pause(800),neodigmMarquee.init().pause(1200),neodigmEnchantedCTA.init(),neodigmCarousel.init()}),neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{neodigmUtils.typeOn({q1st:"#caption__my-profile",msg:`${e.appSession.session_user.name}|${e.appSession.session_user.email}|${e.appSession.session_user.fname} ${e.appSession.session_user.lname}|My Profile`,mode:"LOOP",uniqueDelay:124});const d=e.appSession?.session_user?.guid;if(console.log("[app_events] User GUID:",d),console.log("[app_events] coreTourn length:",e.coreTourn.length),!d||e.coreTourn.length===0){console.warn("[app_events] Missing user GUID or tournament data");return}const c=e.coreTourn[e.coreTourn.length-1].data;console.log("[app_events] Processing tournaments:",c.length);let m=0,_=0,y=0;c.forEach((E,O)=>{if(!E.tags||!Array.isArray(E.tags)){console.log(`[app_events] Tournament ${O} has no tags or tags not an array`);return}E.tags.forEach((R,M)=>{if(typeof R=="object"&&R!==null&&R[d]){const B=R[d];B==="--badge__ribbon--gold"?m++:B==="--badge__ribbon--silver"?_++:B==="--badge__ribbon--bronze"&&y++}})}),setTimeout(()=>{let E=document.querySelectorAll(".badge-counter");if(E.length===0){const O=document.querySelector("neodigm-sodapop");O&&(E=O.querySelectorAll(".badge-counter"))}E.length>=3?(E[0].textContent=m,E[1].textContent=_,E[2].textContent=y,console.log("[app_events] Updated UI counters successfully")):console.warn("[app_events] Not enough counter elements found")},500)},1e3)},"sodapop_my_profile"),neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{const d=we(),h=document.querySelector(".play-cntr");f&&(h.dataset.currentTournGuid=f),g&&(h.dataset.currentTournAction=g);const c=h?.dataset?.currentTournGuid,m=h?.dataset?.currentTournAction||"INFO";console.log("[app_events] sodapop_play opened - GUID:",c,"action:",m),(()=>{const T=document.getElementById("btn-join__play--id");if(!T||!c||d.coreTourn.length===0)return;const U=d.coreTourn[d.coreTourn.length-1].data.find(Y=>Y.guid===c);if(!U)return;const P=d.appSession?.session_user?.guid,W=U.entities?.guids?.includes(P),X=U.status,j=m;T.style.display="none",!(X==="COMPLETED"||X==="LOCKED"&&!W)&&(T.style.display="",X==="UPCOMING"&&!W?j==="INFO"?(T.textContent="Join",T.dataset.requiresJoin="true"):j==="PLAY"&&(T.textContent="Play",T.dataset.requiresJoin="false"):(T.textContent="Play",T.dataset.requiresJoin="false"))})(),(()=>{if(!c||d.coreTourn.length===0)return;const w=d.coreTourn[d.coreTourn.length-1].data.find(x=>x.guid===c);if(!w)return;const U=document.getElementById("pop-play__caro-info-summary1--id");if(!U)return;const P=x=>{if(!x)return"N/A";const H=new Date(x);return isNaN(H.getTime())?"Invalid Date":H.toLocaleString(void 0,{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit",hour12:!0})},W=x=>{switch(x){case"UPCOMING":return"var(--app-core-color--yellow-3__dark--brand, #F7C60D)";case"LOCKED":return"var(--app-core-color--green-3__dark--brand, #14b963)";case"COMPLETED":return"var(--app-core-color--gray-6__dark--brand, #969696)";default:return"#fff"}},X=[{caption:"Start",value:P(w.window_start_time)},{caption:"End",value:P(w.window_end_time)},{caption:"Status",value:w.status||"Unknown",color:W(w.status)},{caption:"Entry Fee",value:"FREE"},{caption:"TD$",value:`${w.tournament_dollars||0}`},{caption:"Participants",value:`${w.entities?.guids?.length||0} / ${w.entities?.max||0}`},{caption:"Games",value:`${w.matches_expanded.length||0}`}];U.innerHTML=X.map(x=>`
                                <div class="info-card">
                                    <div class="info-card__caption">${x.caption}</div>
                                    <div class="info-card__value" ${x.color?`style="color: ${x.color}"`:""}>${x.value}</div>
                                </div>
                            `).join("");const j=document.getElementById("pop-play__caro-info-summary2--id");j&&w.sports_allowed&&Array.isArray(w.sports_allowed)&&(j.innerHTML=w.sports_allowed.map(x=>{const H=x.key||x,Z=$n.find(_e=>_e.key===H),ce=Z?Z.group:"default";return`<bma-sport-icon sport="${H}" data-sport-group="${ce}"></bma-sport-icon>`}).join(""));const Y=document.getElementById("pop-play__caro-info-list--id");Y&&w.matches_expanded&&Array.isArray(w.matches_expanded)&&(Y.innerHTML=w.matches_expanded.map(x=>{const H=x.scoreboard_data?typeof x.scoreboard_data=="string"?x.scoreboard_data:JSON.stringify(x.scoreboard_data):"";return`
                                        <bma-match-status
                                            data-match-guid="${x.guid||x.odds_id||x.id||""}"
                                            data-match-title="${x.short_title||x.title||"Match"}"
                                            data-match-scheduled-at="${x.scheduled_at||""}"
                                            data-match-home-team="${x.home_team_id||"Home"}"
                                            data-match-away-team="${x.away_team_id||"Away"}"
                                            data-match-home-score="${x.home_team_score!==null&&x.home_team_score!==void 0?x.home_team_score:""}"
                                            data-match-away-score="${x.away_team_score!==null&&x.away_team_score!==void 0?x.away_team_score:""}"
                                            data-match-scoreboard="${H.replace(/"/g,"&quot;")}"
                                            data-match-sport-id="${x.sport_id||""}"
                                            data-sync-theme="dark"
                                        ></bma-match-status>
                                    `}).join(""))})(),setTimeout(()=>{const T=d.appSession?.session_user?.guid;c&&ye.fetchLeaderboard(c).then(w=>{const U=document.getElementById("pop-play__caro-leaderboard--id");if(!U)return;const P=w?.data||w?.rows;if(P&&P.length>0){const X=d.coreTourn[d.coreTourn.length-1]?.data.find(j=>j.guid===c);U.innerHTML=P.map((j,Y)=>{let x="";if(X?.tags&&Array.isArray(X.tags)){const H=X.tags.find(Z=>typeof Z=="object"&&Z!==null&&Z[j.user_guid]?Z[j.user_guid].startsWith("--badge__ribbon--"):!1);if(H){const Z=H[j.user_guid];Z==="--badge__ribbon--gold"?x="badge-trophy--gold":Z==="--badge__ribbon--silver"?x="badge-trophy--silver":Z==="--badge__ribbon--bronze"&&(x="badge-trophy--bronze")}}return`
                                                <div class="leaderboard-card ${j.user_guid===T?"leaderboard-card--current-user":""}">
                                                    <div class="leaderboard-card__rank">#${Y+1}</div>
                                                    <div class="leaderboard-card__user">
                                                        ${x?`<div class="badge-trophy ${x}"></div>`:""}
                                                        <span class="leaderboard-card__username">${j.username||"Unknown"}</span>
                                                    </div>
                                                    <div class="leaderboard-card__dollars">TD$ ${j.calculated_tournament_dollars||0}</div>
                                                </div>
                                            `}).join("")}else U.innerHTML=`
                                            <div class="leaderboard-empty">
                                                <p>No leaderboard data available yet.</p>
                                                <p class="leaderboard-empty__subtitle">Be the first to place a bet!</p>
                                            </div>
                                        `}).catch(w=>{console.error("[app_events] Error fetching leaderboard:",w);const U=document.getElementById("pop-play__caro-leaderboard--id");U&&(U.innerHTML=`
                                            <div class="leaderboard-empty">
                                                <p>Unable to load leaderboard data.</p>
                                            </div>
                                        `)})},600);let E=m==="PLAY"||m==="JOIN"?"PLAY":m;if(!c||d.coreTourn.length===0||d.coreTourn[d.coreTourn.length-1].data.find(U=>U.guid===c)?.status==="COMPLETED"&&(E="LEADERBOARD",console.log("[app_events] Tournament is COMPLETED, defaulting to LEADERBOARD")),E){const T=`ROUTE.HOME.SODAPOP_PLAY.${E}`;console.log("[app_events] Publishing initial topic:",T),Q.publish(T,JSON.stringify({tournamentGuid:c,timestamp:Date.now()}))}if(!c||d.coreTourn.length===0)return;const R=d.coreTourn[d.coreTourn.length-1].data.find(T=>T.guid===c);if(!R||!R.matches_expanded)return;const M=document.querySelector(".select-grid");if(!M)return;M.innerHTML="";const B=new Date;[...R.matches_expanded].sort((T,w)=>{const U=new Date(T.scheduled_at),P=new Date(w.scheduled_at),W=U<B,X=P<B;return W&&!X?1:!W&&X?-1:U-P}).forEach(T=>{const U=new Date(T.scheduled_at)<B,P=document.createElement("div");P.className=`match-card${U?" match-card--disabled":""}`,P.dataset.matchId=T.id,P.dataset.matchGuid=T.odds_id||T.guid||T.id;let W=null,X=!1;try{W=typeof T.odds_markets=="string"?JSON.parse(T.odds_markets):T.odds_markets,X=W&&(W.h2h||W.totals||W.spreads)}catch(Y){console.error("[app_events] Failed to parse odds_markets:",Y)}let j='<div class="match-card__header">';if(j+=`<div class="match-card__date">${Xt.formatDateLocal(T.scheduled_at)}</div>`,!U&&X?(j+='<div class="match-card__labels">',j+="<span>SPREAD</span><span>MONEY</span><span>TOTAL</span>",j+="</div>"):j+='<div class="match-card__labels"></div>',j+="</div>",j+='<div class="match-card__row match-card__row--home">',j+=`<div class="match-card__team match-card__team--home">${T.home_team_id||"Home"}</div>`,!U&&X){j+='<div class="match-card__buttons">';const Y=W.spreads?.outcomes?.find(Z=>Z.name===T.home_team_id);if(Y){const Z=Y.point>0?`+${Y.point}`:Y.point;j+=`<button class="match-card__btn" data-bet-type="spread" data-team="home" data-price="${Y.price}" data-point="${Y.point}">
                                        ${Z}<br>${Y.price}
                                    </button>`}else j+='<button class="match-card__btn match-card__btn--empty" disabled></button>';const x=W.h2h?.outcomes?.find(Z=>Z.name===T.home_team_id);x?j+=`<button class="match-card__btn" data-bet-type="money" data-team="home" data-price="${x.price}">
                                        ${x.price}
                                    </button>`:j+='<button class="match-card__btn match-card__btn--empty" disabled></button>';const H=W.totals?.outcomes?.find(Z=>Z.name==="Over");H?j+=`<button class="match-card__btn" data-bet-type="total" data-team="over" data-price="${H.price}" data-point="${H.point}">
                                        O${H.point}<br>${H.price}
                                    </button>`:j+='<button class="match-card__btn match-card__btn--empty" disabled></button>',j+="</div>"}if(j+="</div>",j+='<div class="match-card__row match-card__row--away">',j+=`<div class="match-card__team match-card__team--away">${T.away_team_id||"Away"}</div>`,!U&&X){j+='<div class="match-card__buttons">';const Y=W.spreads?.outcomes?.find(Z=>Z.name===T.away_team_id);if(Y){const Z=Y.point>0?`+${Y.point}`:Y.point;j+=`<button class="match-card__btn" data-bet-type="spread" data-team="away" data-price="${Y.price}" data-point="${Y.point}">
                                        ${Z}<br>${Y.price}
                                    </button>`}else j+='<button class="match-card__btn match-card__btn--empty" disabled></button>';const x=W.h2h?.outcomes?.find(Z=>Z.name===T.away_team_id);x?j+=`<button class="match-card__btn" data-bet-type="money" data-team="away" data-price="${x.price}">
                                        ${x.price}
                                    </button>`:j+='<button class="match-card__btn match-card__btn--empty" disabled></button>';const H=W.totals?.outcomes?.find(Z=>Z.name==="Under");H?j+=`<button class="match-card__btn" data-bet-type="total" data-team="under" data-price="${H.price}" data-point="${H.point}">
                                        U${H.point}<br>${H.price}
                                    </button>`:j+='<button class="match-card__btn match-card__btn--empty" disabled></button>',j+="</div>"}j+="</div>",P.innerHTML=j,!U&&X&&setTimeout(()=>{P.querySelectorAll(".match-card__btn:not([disabled])").forEach(Y=>{Y.addEventListener("click",x=>{x.stopPropagation();const H={matchId:T.id,matchGuid:T.odds_id||T.guid||T.id,matchTitle:T.title,abbreviatedTitle:T.short_title||T.title,homeTeam:T.home_team_id,awayTeam:T.away_team_id,scheduledAt:T.scheduled_at,type:Y.dataset.betType,team:Y.dataset.team,price:Y.dataset.price,point:Y.dataset.point,timestamp:Date.now()};if(Y.classList.contains("match-card__btn--active")){console.log("[app_events] Toggling OFF bet:",H);const ce=document.querySelector(".bet-grid__slip-BETSLIP-content");if(ce){const _e=ce.querySelectorAll("bma-bet-entry");let fe=!1;_e.forEach(Ue=>{if(fe)return;const xe=Ue.getAttribute("data-content-type"),$e=Ue.getAttribute("data-content-odds");xe===H.type&&$e===H.price&&(Ue.remove(),fe=!0,console.log("[app_events] Removed bet entry via toggle:",{entryType:xe,entryOdds:$e}))}),ce.children.length===0&&(ce.innerHTML='<div class="bet-slip__empty"><p>Select odds to create a new bet slip</p></div>')}Y.classList.remove("match-card__btn--active"),setTimeout(()=>{r()},100)}else{console.log("[app_events] Toggling ON bet:",H),document.querySelectorAll(".match-card__btn").forEach(_e=>_e.classList.remove("match-card__btn--selected")),Y.classList.add("match-card__btn--selected"),Y.classList.add("match-card__btn--active");const ce=Y.dataset.betType;ce==="spread"?Q.publish(d.hierTopics.COREBETSLIP__SPREAD,JSON.stringify(H)):ce==="money"?Q.publish(d.hierTopics.COREBETSLIP__MONEY,JSON.stringify(H)):ce==="total"&&Q.publish(d.hierTopics.COREBETSLIP__TOTAL,JSON.stringify(H)),Q.publish(d.hierTopics.COREBETSLIP,JSON.stringify(H))}})})},0),M.appendChild(P)}),neodigmUtils.typeOn({q1st:"#pop-play__tourn-caption--id",msg:`${R.caption}`,mode:"",uniqueDelay:62}),neodigmUtils.typeOn({q1st:"#pop-play__tourn-tagline--id",msg:`${R.tagline}`,mode:"",uniqueDelay:91})},1e3)},"sodapop_play"))},3e3),setTimeout(function(){neodigmSodaPop&&NeodigmClaire&&neodigmSodaPop.setOnClose(function(){return!0})},4e3)}},mf={__name:"App",setup(e){const t=ft(),n=we();return setTimeout(function(){neodigmOpt.mvvLegit&&mvvLegit.setNavConroller((a=null)=>{neodigmOpt.N55_DEBUG_lOG&&neodigmToast.q(`Legit route: ${a}`,"primary"),t.push({name:a})}).setOnState((a=null)=>{a&&neodigmOpt.ROOT&&(neodigmOpt.ROOT.dataset.mvvLegit=a)}).init({BASE:ye.API_baseURI})},2e3),setTimeout(()=>{n.appCLIFeatures.features.sse.state&&ua.establishSSE("https://machfive-bmacdev-rest.onrender.com/v5/sse?appid=BMACORE&sseid=user%40example.com&lastkey=123",n.appSession.session_user.guid,n,!0)},3e3),setTimeout(()=>{ps.bindAppListeners(n)},3e3),t.beforeEach((a,s,o)=>{a.name=="splash_route"||a.name&&mvvLegit&&mvvLegit.isRouteAllowed(a.name)?o():o(!1)}),(a,s)=>(Qe(),ao(Dt(Pi),null,{default:Qa(({Component:o})=>[Fe(Dc,{name:"slide-left"},{default:Qa(()=>[(Qe(),ao(Fl(o)))]),_:2},1024)]),_:1}))}};class _f extends HTMLElement{constructor(){super(),this.clockInterval=null}connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this.startClock()}disconnectedCallback(){this.clockInterval&&clearInterval(this.clockInterval)}static get observedAttributes(){return["data-sync-theme","data-user-name"]}attributeChangedCallback(t,n,a){this.shadowRoot&&n!==a&&this.render()}startClock(){this.updateTime(),this.clockInterval=setInterval(()=>{this.updateTime()},24e3)}updateTime(){const t=this.shadowRoot?.querySelector(".status-time");if(t){const n=new Date,a=n.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0}),s=n.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});t.textContent=`${s} ${a}`}}handleLogoClick(t){t.preventDefault(),Q.publish("WC.APP.HEAD_TOP.LOGO",JSON.stringify({timestamp:Date.now()}))}handleProfileClick(t){t.preventDefault(),Q.publish("WC.APP.HEAD_TOP.USER_PROFILE",JSON.stringify({timestamp:Date.now()}))}render(){const a=(document.getElementById("app")?.getAttribute("data-sync-theme")||"dark")==="dark",s=this.getAttribute("data-user-name")||"Guest";this.shadowRoot.innerHTML=`
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
    `;const o=this.shadowRoot.querySelector("#logoLink"),r=this.shadowRoot.querySelector("#profileIcon");o&&o.addEventListener("click",i=>this.handleLogoClick(i)),r&&(r.addEventListener("click",i=>this.handleProfileClick(i)),r.addEventListener("keypress",i=>{(i.key==="Enter"||i.key===" ")&&this.handleProfileClick(i)})),this.updateTime()}}customElements.define("bma-app-head-top",_f);class bf extends HTMLElement{constructor(){super(),this.selectedTab="head_mid_lobby"}connectedCallback(){this.attachShadow({mode:"open"}),this.render()}static get observedAttributes(){return["data-sync-theme","data-selected-tab"]}attributeChangedCallback(t,n,a){this.shadowRoot&&n!==a&&(t==="data-selected-tab"&&(this.selectedTab=a||"head_mid_lobby"),this.render())}handleTabClick(t,n){this.selectedTab=t,this.setAttribute("data-selected-tab",t),Q.publish(n,JSON.stringify({tab:t,timestamp:Date.now()})),this.render()}render(){const a=(document.getElementById("app")?.getAttribute("data-sync-theme")||"dark")==="dark",s=[{name:"head_mid_lobby",caption:"Tournament Lobby",mobileCaption:"Lobby",topic:"WC.APP.HEAD_MID.HEAD_MID_LOBBY"},{name:"head_mid_my",caption:"My Tournaments",mobileCaption:"My Tourneys",topic:"WC.APP.HEAD_MID.HEAD_MID_MY"},{name:"head_mid_completed",caption:"Completed Tournaments",mobileCaption:"Completed Tourneys",topic:"WC.APP.HEAD_MID.HEAD_MID_COMPLETED"},{name:"head_mid_leaderboard",caption:"Leaderboard Ranking",mobileCaption:"Leaderboard",topic:"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD"},{name:"head_mid_squad",caption:"My Squads",mobileCaption:"Squads",topic:"WC.APP.HEAD_MID.HEAD_MID_SQUAD"}],o=r=>`
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
    `,s.forEach(r=>{const i=this.shadowRoot.querySelector(`[data-tab="${r.name}"]`);i&&(i.addEventListener("click",()=>this.handleTabClick(r.name,r.topic)),i.addEventListener("keypress",l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),this.handleTabClick(r.name,r.topic))}))})}}customElements.define("bma-app-head-mid",bf);class yf extends HTMLElement{constructor(){super(),this.selectedChip="all",this.savedScrollPosition=0}connectedCallback(){this.attachShadow({mode:"open"}),this.render()}static get observedAttributes(){return["data-sync-theme","data-selected-chip"]}attributeChangedCallback(t,n,a){this.shadowRoot&&n!==a&&(t==="data-selected-chip"&&(this.selectedChip=a||"all"),this.render())}handleChipClick(t,n){const a=this.shadowRoot.querySelector(".chips-container");a&&(this.savedScrollPosition=a.scrollLeft),this.selectedChip=t,this.setAttribute("data-selected-chip",t),Q.publish("WC.APP.HEAD_SPORTS",JSON.stringify({key:t,group:n,timestamp:Date.now()})),this.render()}scrollToPrev(){const t=this.shadowRoot.querySelector(".chips-container");t&&(t.scrollBy({left:-256,behavior:"smooth"}),Q.publish("WC.APP.HEAD_SPORTS.PREV",JSON.stringify({timestamp:Date.now()})))}scrollToNext(){const t=this.shadowRoot.querySelector(".chips-container");t&&(t.scrollBy({left:256,behavior:"smooth"}),Q.publish("WC.APP.HEAD_SPORTS.NEXT",JSON.stringify({timestamp:Date.now()})))}initDragScroll(){const t=this.shadowRoot.querySelector(".chips-container");if(!t)return;let n=!1,a,s;t.addEventListener("mousedown",o=>{n=!0,t.style.cursor="grabbing",a=o.pageX-t.offsetLeft,s=t.scrollLeft,Q.publish("WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START",JSON.stringify({action:"start",scrollPosition:s,timestamp:Date.now()}))}),t.addEventListener("mouseleave",()=>{n=!1,t.style.cursor="grab"}),t.addEventListener("mouseup",()=>{n=!1,t.style.cursor="grab"}),t.addEventListener("mousemove",o=>{if(!n)return;o.preventDefault();const i=(o.pageX-t.offsetLeft-a)*2;t.scrollLeft=s-i})}render(){const a=(document.getElementById("app")?.getAttribute("data-sync-theme")||"dark")==="dark",i=[...(we().appMeta?.sports||[]).filter(d=>d.active===!0)].sort((d,h)=>{const c=(d.title||d.description||"").toLowerCase(),m=(h.title||h.description||"").toLowerCase();return c.localeCompare(m)}),l=[{key:"all",group:"All",title:"ALL",description:"All Sports"},...i],p=d=>{const h=this.selectedChip===d.key,c=d.key==="all";return`
        <div
          class="sport-chip ${h?"chip-selected":"chip-unselected"}"
          data-chip="${d.key}"
          role="button"
          tabindex="0"
          aria-label="${d.description||d.title}"
        >
          ${c?"":`<bma-sport-icon sport="${d.key}" data-sport-group="${d.group}"></bma-sport-icon>`}
          <span class="chip-title">${d.title||d.group}</span>
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
            ${l.map(d=>p(d)).join("")}
          </div>
        </div>

        <aside class="nav-icon nav-next nav-icon__next" id="navNext" role="button" tabindex="0" aria-label="Scroll right"></aside>
      </div>
    `,l.forEach(d=>{const h=this.shadowRoot.querySelector(`[data-chip="${d.key}"]`);h&&h.addEventListener("click",()=>this.handleChipClick(d.key,d.group))});const u=this.shadowRoot.querySelector("#navPrev"),f=this.shadowRoot.querySelector("#navNext");u&&u.addEventListener("click",()=>this.scrollToPrev()),f&&f.addEventListener("click",()=>this.scrollToNext()),this.initDragScroll();const g=this.shadowRoot.querySelector(".chips-container");g&&this.savedScrollPosition>0&&(g.scrollLeft=this.savedScrollPosition)}}customElements.define("bma-app-head-sports",yf);class vf extends HTMLElement{constructor(){super(),this.selectedItem="foot_all_sports"}connectedCallback(){this.attachShadow({mode:"open"}),this.render()}static get observedAttributes(){return["data-sync-theme","data-selected-item"]}attributeChangedCallback(t,n,a){this.shadowRoot&&n!==a&&(t==="data-selected-item"&&(this.selectedItem=a||"foot_all_sports"),this.render())}handleItemClick(t,n){this.selectedItem=t,this.setAttribute("data-selected-item",t),Q.publish(n,JSON.stringify({item:t,timestamp:Date.now()})),this.render()}render(){const a=(document.getElementById("app")?.getAttribute("data-sync-theme")||"dark")==="dark",s=[{name:"foot_all_sports",caption:"Lobby",iconVar:"--nav-icon__sports--",topic:"WC.APP.FOOT.ALL_SPORTS"},{name:"foot_my_tourneys",caption:"My Tourneys",iconVar:"--nav-icon__trophy--",topic:"WC.APP.FOOT.MY_TOURNEYS"},{name:"foot_leaderboard",caption:"Leaderboard",iconVar:"--nav-icon__leaderboard--",topic:"WC.APP.FOOT.LEADERBOARD"},{name:"foot_my_account",caption:"My Profile",iconVar:"--nav-icon__my_profile_circle--",topic:"WC.APP.FOOT.MY_PROFILE"}],o=r=>`
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
    `,s.forEach(r=>{const i=this.shadowRoot.querySelector(`[data-item="${r.name}"]`);i&&(i.addEventListener("click",()=>this.handleItemClick(r.name,r.topic)),i.addEventListener("keypress",l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),this.handleItemClick(r.name,r.topic))}))})}}customElements.define("bma-app-foot",vf);class Tf extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}static get observedAttributes(){return["data-corebetslip"]}attributeChangedCallback(t,n,a){n!==a&&this.render()}get betSlipData(){const t=this.getAttribute("data-corebetslip");if(!t)return null;try{return JSON.parse(t)}catch(n){return console.error("[bma-bet-existing] Failed to parse data-corebetslip:",n),null}}render(){const t=this.betSlipData;if(!t){this.shadowRoot.innerHTML="<div>Invalid bet data</div>";return}const n=t.bet||[];if(n.length===0){this.shadowRoot.innerHTML="<div>No bet data</div>";return}const a=n[0],s=a.short_title||"Match Info N/A",r=Object.keys(a).filter(c=>c!=="short_title")[0]||"Unknown Team",i=a[r],l=i.odds||"N/A",p=i.type||"N/A",u=parseFloat(i.stake||0).toFixed(2),f=parseFloat(i.payout||0).toFixed(2),g=i.reconciled!==!1,d=t.status_time?Xt.formatDateLocal(t.status_time):"";let h=r;if(p==="spread"&&i.point){const c=parseFloat(i.point)>0?`+${i.point}`:i.point;h=`${r} ${c}`}else p==="total"&&i.point&&(h=`${i.team==="over"?"Over":"Under"} ${i.point}`);this.shadowRoot.innerHTML=`
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
          <div class="match_date">${d}</div>
        </div>
        <div class="grid_content">
          <!-- Row 1 -->
          <div class="content_team_points">${h}</div>
          <div class="content_odds">${l}</div>
          <div class="content_stake_text">${u}</div>

          <!-- Row 2 -->
          <div class="content_type">${p.toUpperCase()}</div>
          <div></div>
          <div></div>

          <!-- Row 3 (payout only) -->
          <div></div>
          <div></div>
          <div class="content_payout ${g?"":"unreconciled"}">Payout: ${f}</div>
        </div>
      </div>
    `}}customElements.define("bma-bet-existing",Tf);const Jo=`
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
    data-n55-sodapop-size="large" data-n55-sodapop-fullscreen="false"
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
`;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{document.body.insertAdjacentHTML("beforeend",Jo)}):document.body.insertAdjacentHTML("beforeend",Jo);window.deferredPWAPrompt=null;window.addEventListener("beforeinstallprompt",e=>{console.log("[Global] beforeinstallprompt event fired"),e.preventDefault(),window.deferredPWAPrompt=e,window.dispatchEvent(new CustomEvent("pwa-installable"))});window.addEventListener("appinstalled",()=>{console.log("[Global] appinstalled event fired"),window.deferredPWAPrompt=null,window.dispatchEvent(new CustomEvent("pwa-installed"))});const Fs=iu(mf);Fs.use(uu());Fs.use(ds);Fs.mount("#app");if("serviceWorker"in navigator){let e=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{e||(e=!0,window.neodigmToast&&window.neodigmToast.q("App updated! Reloading...","success"),setTimeout(()=>{window.location.reload()},1e3))}),document.addEventListener("visibilitychange",()=>{document.hidden||navigator.serviceWorker.getRegistration().then(t=>{t?.update()})})}window.addEventListener("resize",e=>{window.requestAnimationFrame(()=>{neodigmMetronome.subscribe(()=>{neodigmMetronome.unsubscribe(303),neodigmCarousel&&[...document.querySelectorAll("neodigm-carousel")].forEach(n=>{neodigmCarousel.init().nav({id:n.id,nav:"resize"},!1)})},303)})});
