(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}})();function Na(e){const t=Object.create(null);for(const s of e.split(","))t[s]=1;return s=>s in t}const _e={},bs=[],mt=()=>{},xo=()=>!1,wn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Da=e=>e.startsWith("onUpdate:"),Oe=Object.assign,Ba=(e,t)=>{const s=e.indexOf(t);s>-1&&e.splice(s,1)},ml=Object.prototype.hasOwnProperty,fe=(e,t)=>ml.call(e,t),re=Array.isArray,_s=e=>xn(e)==="[object Map]",Ao=e=>xn(e)==="[object Set]",ie=e=>typeof e=="function",Ae=e=>typeof e=="string",Vt=e=>typeof e=="symbol",ve=e=>e!==null&&typeof e=="object",Po=e=>(ve(e)||ie(e))&&ie(e.then)&&ie(e.catch),Oo=Object.prototype.toString,xn=e=>Oo.call(e),bl=e=>xn(e).slice(8,-1),ko=e=>xn(e)==="[object Object]",Fa=e=>Ae(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ks=Na(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),An=e=>{const t=Object.create(null);return(s=>t[s]||(t[s]=e(s)))},_l=/-\w/g,et=An(e=>e.replace(_l,t=>t.slice(1).toUpperCase())),yl=/\B([A-Z])/g,Jt=An(e=>e.replace(yl,"-$1").toLowerCase()),Pn=An(e=>e.charAt(0).toUpperCase()+e.slice(1)),Hn=An(e=>e?`on${Pn(e)}`:""),Yt=(e,t)=>!Object.is(e,t),Gn=(e,...t)=>{for(let s=0;s<e.length;s++)e[s](...t)},Co=(e,t,s,n=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:n,value:s})},vl=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Tl=e=>{const t=Ae(e)?Number(e):NaN;return isNaN(t)?e:t};let dr;const On=()=>dr||(dr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function $a(e){if(re(e)){const t={};for(let s=0;s<e.length;s++){const n=e[s],a=Ae(n)?xl(n):$a(n);if(a)for(const r in a)t[r]=a[r]}return t}else if(Ae(e)||ve(e))return e}const Sl=/;(?![^(]*\))/g,El=/:([^]+)/,wl=/\/\*[^]*?\*\//g;function xl(e){const t={};return e.replace(wl,"").split(Sl).forEach(s=>{if(s){const n=s.split(El);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function zt(e){let t="";if(Ae(e))t=e;else if(re(e))for(let s=0;s<e.length;s++){const n=zt(e[s]);n&&(t+=n+" ")}else if(ve(e))for(const s in e)e[s]&&(t+=s+" ");return t.trim()}const Al="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Pl=Na(Al);function Ro(e){return!!e||e===""}const Lo=e=>!!(e&&e.__v_isRef===!0),Mo=e=>Ae(e)?e:e==null?"":re(e)||ve(e)&&(e.toString===Oo||!ie(e.toString))?Lo(e)?Mo(e.value):JSON.stringify(e,Io,2):String(e),Io=(e,t)=>Lo(t)?Io(e,t.value):_s(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((s,[n,a],r)=>(s[Yn(n,r)+" =>"]=a,s),{})}:Ao(t)?{[`Set(${t.size})`]:[...t.values()].map(s=>Yn(s))}:Vt(t)?Yn(t):ve(t)&&!re(t)&&!ko(t)?String(t):t,Yn=(e,t="")=>{var s;return Vt(e)?`Symbol(${(s=e.description)!=null?s:t})`:e};let Ce;class No{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ce,!t&&Ce&&(this.index=(Ce.scopes||(Ce.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,s;if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].pause();for(t=0,s=this.effects.length;t<s;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,s;if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].resume();for(t=0,s=this.effects.length;t<s;t++)this.effects[t].resume()}}run(t){if(this._active){const s=Ce;try{return Ce=this,t()}finally{Ce=s}}}on(){++this._on===1&&(this.prevScope=Ce,Ce=this)}off(){this._on>0&&--this._on===0&&(Ce=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let s,n;for(s=0,n=this.effects.length;s<n;s++)this.effects[s].stop();for(this.effects.length=0,s=0,n=this.cleanups.length;s<n;s++)this.cleanups[s]();if(this.cleanups.length=0,this.scopes){for(s=0,n=this.scopes.length;s<n;s++)this.scopes[s].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0}}}function Do(e){return new No(e)}function Bo(){return Ce}function Ol(e,t=!1){Ce&&Ce.cleanups.push(e)}let be;const jn=new WeakSet;class Fo{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ce&&Ce.active&&Ce.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,jn.has(this)&&(jn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Uo(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ur(this),Ho(this);const t=be,s=at;be=this,at=!0;try{return this.fn()}finally{Go(this),be=t,at=s,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Ga(t);this.deps=this.depsTail=void 0,ur(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?jn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){fa(this)&&this.run()}get dirty(){return fa(this)}}let $o=0,Cs,Rs;function Uo(e,t=!1){if(e.flags|=8,t){e.next=Rs,Rs=e;return}e.next=Cs,Cs=e}function Ua(){$o++}function Ha(){if(--$o>0)return;if(Rs){let t=Rs;for(Rs=void 0;t;){const s=t.next;t.next=void 0,t.flags&=-9,t=s}}let e;for(;Cs;){let t=Cs;for(Cs=void 0;t;){const s=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){e||(e=n)}t=s}}if(e)throw e}function Ho(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Go(e){let t,s=e.depsTail,n=s;for(;n;){const a=n.prevDep;n.version===-1?(n===s&&(s=a),Ga(n),kl(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=a}e.deps=t,e.depsTail=s}function fa(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Yo(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Yo(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===$s)||(e.globalVersion=$s,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!fa(e))))return;e.flags|=2;const t=e.dep,s=be,n=at;be=e,at=!0;try{Ho(e);const a=e.fn(e._value);(t.version===0||Yt(a,e._value))&&(e.flags|=128,e._value=a,t.version++)}catch(a){throw t.version++,a}finally{be=s,at=n,Go(e),e.flags&=-3}}function Ga(e,t=!1){const{dep:s,prevSub:n,nextSub:a}=e;if(n&&(n.nextSub=a,e.prevSub=void 0),a&&(a.prevSub=n,e.nextSub=void 0),s.subs===e&&(s.subs=n,!n&&s.computed)){s.computed.flags&=-5;for(let r=s.computed.deps;r;r=r.nextDep)Ga(r,!0)}!t&&!--s.sc&&s.map&&s.map.delete(s.key)}function kl(e){const{prevDep:t,nextDep:s}=e;t&&(t.nextDep=s,e.prevDep=void 0),s&&(s.prevDep=t,e.nextDep=void 0)}let at=!0;const jo=[];function kt(){jo.push(at),at=!1}function Ct(){const e=jo.pop();at=e===void 0?!0:e}function ur(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const s=be;be=void 0;try{t()}finally{be=s}}}let $s=0;class Cl{constructor(t,s){this.sub=t,this.dep=s,this.version=s.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ya{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!be||!at||be===this.computed)return;let s=this.activeLink;if(s===void 0||s.sub!==be)s=this.activeLink=new Cl(be,this),be.deps?(s.prevDep=be.depsTail,be.depsTail.nextDep=s,be.depsTail=s):be.deps=be.depsTail=s,Ko(s);else if(s.version===-1&&(s.version=this.version,s.nextDep)){const n=s.nextDep;n.prevDep=s.prevDep,s.prevDep&&(s.prevDep.nextDep=n),s.prevDep=be.depsTail,s.nextDep=void 0,be.depsTail.nextDep=s,be.depsTail=s,be.deps===s&&(be.deps=n)}return s}trigger(t){this.version++,$s++,this.notify(t)}notify(t){Ua();try{for(let s=this.subs;s;s=s.prevSub)s.sub.notify()&&s.sub.dep.notify()}finally{Ha()}}}function Ko(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)Ko(n)}const s=e.dep.subs;s!==e&&(e.prevSub=s,s&&(s.nextSub=e)),e.dep.subs=e}}const un=new WeakMap,ls=Symbol(""),ha=Symbol(""),Us=Symbol("");function Re(e,t,s){if(at&&be){let n=un.get(e);n||un.set(e,n=new Map);let a=n.get(s);a||(n.set(s,a=new Ya),a.map=n,a.key=s),a.track()}}function At(e,t,s,n,a,r){const o=un.get(e);if(!o){$s++;return}const i=l=>{l&&l.trigger()};if(Ua(),t==="clear")o.forEach(i);else{const l=re(e),c=l&&Fa(s);if(l&&s==="length"){const d=Number(n);o.forEach((u,p)=>{(p==="length"||p===Us||!Vt(p)&&p>=d)&&i(u)})}else switch((s!==void 0||o.has(void 0))&&i(o.get(s)),c&&i(o.get(Us)),t){case"add":l?c&&i(o.get("length")):(i(o.get(ls)),_s(e)&&i(o.get(ha)));break;case"delete":l||(i(o.get(ls)),_s(e)&&i(o.get(ha)));break;case"set":_s(e)&&i(o.get(ls));break}}Ha()}function Rl(e,t){const s=un.get(e);return s&&s.get(t)}function ps(e){const t=de(e);return t===e?t:(Re(t,"iterate",Us),rt(e)?t:t.map(De))}function ja(e){return Re(e=de(e),"iterate",Us),e}const Ll={__proto__:null,[Symbol.iterator](){return Kn(this,Symbol.iterator,De)},concat(...e){return ps(this).concat(...e.map(t=>re(t)?ps(t):t))},entries(){return Kn(this,"entries",e=>(e[1]=De(e[1]),e))},every(e,t){return vt(this,"every",e,t,void 0,arguments)},filter(e,t){return vt(this,"filter",e,t,s=>s.map(De),arguments)},find(e,t){return vt(this,"find",e,t,De,arguments)},findIndex(e,t){return vt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return vt(this,"findLast",e,t,De,arguments)},findLastIndex(e,t){return vt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return vt(this,"forEach",e,t,void 0,arguments)},includes(...e){return zn(this,"includes",e)},indexOf(...e){return zn(this,"indexOf",e)},join(e){return ps(this).join(e)},lastIndexOf(...e){return zn(this,"lastIndexOf",e)},map(e,t){return vt(this,"map",e,t,void 0,arguments)},pop(){return ws(this,"pop")},push(...e){return ws(this,"push",e)},reduce(e,...t){return pr(this,"reduce",e,t)},reduceRight(e,...t){return pr(this,"reduceRight",e,t)},shift(){return ws(this,"shift")},some(e,t){return vt(this,"some",e,t,void 0,arguments)},splice(...e){return ws(this,"splice",e)},toReversed(){return ps(this).toReversed()},toSorted(e){return ps(this).toSorted(e)},toSpliced(...e){return ps(this).toSpliced(...e)},unshift(...e){return ws(this,"unshift",e)},values(){return Kn(this,"values",De)}};function Kn(e,t,s){const n=ja(e),a=n[t]();return n!==e&&!rt(e)&&(a._next=a.next,a.next=()=>{const r=a._next();return r.done||(r.value=s(r.value)),r}),a}const Ml=Array.prototype;function vt(e,t,s,n,a,r){const o=ja(e),i=o!==e&&!rt(e),l=o[t];if(l!==Ml[t]){const u=l.apply(e,r);return i?De(u):u}let c=s;o!==e&&(i?c=function(u,p){return s.call(this,De(u),p,e)}:s.length>2&&(c=function(u,p){return s.call(this,u,p,e)}));const d=l.call(o,c,n);return i&&a?a(d):d}function pr(e,t,s,n){const a=ja(e);let r=s;return a!==e&&(rt(e)?s.length>3&&(r=function(o,i,l){return s.call(this,o,i,l,e)}):r=function(o,i,l){return s.call(this,o,De(i),l,e)}),a[t](r,...n)}function zn(e,t,s){const n=de(e);Re(n,"iterate",Us);const a=n[t](...s);return(a===-1||a===!1)&&qa(s[0])?(s[0]=de(s[0]),n[t](...s)):a}function ws(e,t,s=[]){kt(),Ua();const n=de(e)[t].apply(e,s);return Ha(),Ct(),n}const Il=Na("__proto__,__v_isRef,__isVue"),zo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Vt));function Nl(e){Vt(e)||(e=String(e));const t=de(this);return Re(t,"has",e),t.hasOwnProperty(e)}class qo{constructor(t=!1,s=!1){this._isReadonly=t,this._isShallow=s}get(t,s,n){if(s==="__v_skip")return t.__v_skip;const a=this._isReadonly,r=this._isShallow;if(s==="__v_isReactive")return!a;if(s==="__v_isReadonly")return a;if(s==="__v_isShallow")return r;if(s==="__v_raw")return n===(a?r?Kl:Xo:r?Jo:Vo).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const o=re(t);if(!a){let l;if(o&&(l=Ll[s]))return l;if(s==="hasOwnProperty")return Nl}const i=Reflect.get(t,s,xe(t)?t:n);if((Vt(s)?zo.has(s):Il(s))||(a||Re(t,"get",s),r))return i;if(xe(i)){const l=o&&Fa(s)?i:i.value;return a&&ve(l)?ma(l):l}return ve(i)?a?ma(i):Pt(i):i}}class Wo extends qo{constructor(t=!1){super(!1,t)}set(t,s,n,a){let r=t[s];if(!this._isShallow){const l=us(r);if(!rt(n)&&!us(n)&&(r=de(r),n=de(n)),!re(t)&&xe(r)&&!xe(n))return l||(r.value=n),!0}const o=re(t)&&Fa(s)?Number(s)<t.length:fe(t,s),i=Reflect.set(t,s,n,xe(t)?t:a);return t===de(a)&&(o?Yt(n,r)&&At(t,"set",s,n):At(t,"add",s,n)),i}deleteProperty(t,s){const n=fe(t,s);t[s];const a=Reflect.deleteProperty(t,s);return a&&n&&At(t,"delete",s,void 0),a}has(t,s){const n=Reflect.has(t,s);return(!Vt(s)||!zo.has(s))&&Re(t,"has",s),n}ownKeys(t){return Re(t,"iterate",re(t)?"length":ls),Reflect.ownKeys(t)}}class Dl extends qo{constructor(t=!1){super(!0,t)}set(t,s){return!0}deleteProperty(t,s){return!0}}const Bl=new Wo,Fl=new Dl,$l=new Wo(!0);const ga=e=>e,Xs=e=>Reflect.getPrototypeOf(e);function Ul(e,t,s){return function(...n){const a=this.__v_raw,r=de(a),o=_s(r),i=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...n),d=s?ga:t?ba:De;return!t&&Re(r,"iterate",l?ha:ls),{next(){const{value:u,done:p}=c.next();return p?{value:u,done:p}:{value:i?[d(u[0]),d(u[1])]:d(u),done:p}},[Symbol.iterator](){return this}}}}function Qs(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Hl(e,t){const s={get(a){const r=this.__v_raw,o=de(r),i=de(a);e||(Yt(a,i)&&Re(o,"get",a),Re(o,"get",i));const{has:l}=Xs(o),c=t?ga:e?ba:De;if(l.call(o,a))return c(r.get(a));if(l.call(o,i))return c(r.get(i));r!==o&&r.get(a)},get size(){const a=this.__v_raw;return!e&&Re(de(a),"iterate",ls),a.size},has(a){const r=this.__v_raw,o=de(r),i=de(a);return e||(Yt(a,i)&&Re(o,"has",a),Re(o,"has",i)),a===i?r.has(a):r.has(a)||r.has(i)},forEach(a,r){const o=this,i=o.__v_raw,l=de(i),c=t?ga:e?ba:De;return!e&&Re(l,"iterate",ls),i.forEach((d,u)=>a.call(r,c(d),c(u),o))}};return Oe(s,e?{add:Qs("add"),set:Qs("set"),delete:Qs("delete"),clear:Qs("clear")}:{add(a){!t&&!rt(a)&&!us(a)&&(a=de(a));const r=de(this);return Xs(r).has.call(r,a)||(r.add(a),At(r,"add",a,a)),this},set(a,r){!t&&!rt(r)&&!us(r)&&(r=de(r));const o=de(this),{has:i,get:l}=Xs(o);let c=i.call(o,a);c||(a=de(a),c=i.call(o,a));const d=l.call(o,a);return o.set(a,r),c?Yt(r,d)&&At(o,"set",a,r):At(o,"add",a,r),this},delete(a){const r=de(this),{has:o,get:i}=Xs(r);let l=o.call(r,a);l||(a=de(a),l=o.call(r,a)),i&&i.call(r,a);const c=r.delete(a);return l&&At(r,"delete",a,void 0),c},clear(){const a=de(this),r=a.size!==0,o=a.clear();return r&&At(a,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(a=>{s[a]=Ul(a,e,t)}),s}function Ka(e,t){const s=Hl(e,t);return(n,a,r)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?n:Reflect.get(fe(s,a)&&a in n?s:n,a,r)}const Gl={get:Ka(!1,!1)},Yl={get:Ka(!1,!0)},jl={get:Ka(!0,!1)};const Vo=new WeakMap,Jo=new WeakMap,Xo=new WeakMap,Kl=new WeakMap;function zl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ql(e){return e.__v_skip||!Object.isExtensible(e)?0:zl(bl(e))}function Pt(e){return us(e)?e:za(e,!1,Bl,Gl,Vo)}function Qo(e){return za(e,!1,$l,Yl,Jo)}function ma(e){return za(e,!0,Fl,jl,Xo)}function za(e,t,s,n,a){if(!ve(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=ql(e);if(r===0)return e;const o=a.get(e);if(o)return o;const i=new Proxy(e,r===2?n:s);return a.set(e,i),i}function cs(e){return us(e)?cs(e.__v_raw):!!(e&&e.__v_isReactive)}function us(e){return!!(e&&e.__v_isReadonly)}function rt(e){return!!(e&&e.__v_isShallow)}function qa(e){return e?!!e.__v_raw:!1}function de(e){const t=e&&e.__v_raw;return t?de(t):e}function Wa(e){return!fe(e,"__v_skip")&&Object.isExtensible(e)&&Co(e,"__v_skip",!0),e}const De=e=>ve(e)?Pt(e):e,ba=e=>ve(e)?ma(e):e;function xe(e){return e?e.__v_isRef===!0:!1}function Qe(e){return Zo(e,!1)}function Wl(e){return Zo(e,!0)}function Zo(e,t){return xe(e)?e:new Vl(e,t)}class Vl{constructor(t,s){this.dep=new Ya,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=s?t:de(t),this._value=s?t:De(t),this.__v_isShallow=s}get value(){return this.dep.track(),this._value}set value(t){const s=this._rawValue,n=this.__v_isShallow||rt(t)||us(t);t=n?t:de(t),Yt(t,s)&&(this._rawValue=t,this._value=n?t:De(t),this.dep.trigger())}}function jt(e){return xe(e)?e.value:e}const Jl={get:(e,t,s)=>t==="__v_raw"?e:jt(Reflect.get(e,t,s)),set:(e,t,s,n)=>{const a=e[t];return xe(a)&&!xe(s)?(a.value=s,!0):Reflect.set(e,t,s,n)}};function ei(e){return cs(e)?e:new Proxy(e,Jl)}function Xl(e){const t=re(e)?new Array(e.length):{};for(const s in e)t[s]=Zl(e,s);return t}class Ql{constructor(t,s,n){this._object=t,this._key=s,this._defaultValue=n,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Rl(de(this._object),this._key)}}function Zl(e,t,s){const n=e[t];return xe(n)?n:new Ql(e,t,s)}class ec{constructor(t,s,n){this.fn=t,this.setter=s,this._value=void 0,this.dep=new Ya(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=$s-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!s,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&be!==this)return Uo(this,!0),!0}get value(){const t=this.dep.track();return Yo(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function tc(e,t,s=!1){let n,a;return ie(e)?n=e:(n=e.get,a=e.set),new ec(n,a,s)}const Zs={},pn=new WeakMap;let as;function sc(e,t=!1,s=as){if(s){let n=pn.get(s);n||pn.set(s,n=[]),n.push(e)}}function nc(e,t,s=_e){const{immediate:n,deep:a,once:r,scheduler:o,augmentJob:i,call:l}=s,c=S=>a?S:rt(S)||a===!1||a===0?Ht(S,1):Ht(S);let d,u,p,b,m=!1,f=!1;if(xe(e)?(u=()=>e.value,m=rt(e)):cs(e)?(u=()=>c(e),m=!0):re(e)?(f=!0,m=e.some(S=>cs(S)||rt(S)),u=()=>e.map(S=>{if(xe(S))return S.value;if(cs(S))return c(S);if(ie(S))return l?l(S,2):S()})):ie(e)?t?u=l?()=>l(e,2):e:u=()=>{if(p){kt();try{p()}finally{Ct()}}const S=as;as=d;try{return l?l(e,3,[b]):e(b)}finally{as=S}}:u=mt,t&&a){const S=u,E=a===!0?1/0:a;u=()=>Ht(S(),E)}const h=Bo(),g=()=>{d.stop(),h&&h.active&&Ba(h.effects,d)};if(r&&t){const S=t;t=(...E)=>{S(...E),g()}}let y=f?new Array(e.length).fill(Zs):Zs;const _=S=>{if(!(!(d.flags&1)||!d.dirty&&!S))if(t){const E=d.run();if(a||m||(f?E.some((k,C)=>Yt(k,y[C])):Yt(E,y))){p&&p();const k=as;as=d;try{const C=[E,y===Zs?void 0:f&&y[0]===Zs?[]:y,b];y=E,l?l(t,3,C):t(...C)}finally{as=k}}}else d.run()};return i&&i(_),d=new Fo(u),d.scheduler=o?()=>o(_,!1):_,b=S=>sc(S,!1,d),p=d.onStop=()=>{const S=pn.get(d);if(S){if(l)l(S,4);else for(const E of S)E();pn.delete(d)}},t?n?_(!0):y=d.run():o?o(_.bind(null,!0),!0):d.run(),g.pause=d.pause.bind(d),g.resume=d.resume.bind(d),g.stop=g,g}function Ht(e,t=1/0,s){if(t<=0||!ve(e)||e.__v_skip||(s=s||new Map,(s.get(e)||0)>=t))return e;if(s.set(e,t),t--,xe(e))Ht(e.value,t,s);else if(re(e))for(let n=0;n<e.length;n++)Ht(e[n],t,s);else if(Ao(e)||_s(e))e.forEach(n=>{Ht(n,t,s)});else if(ko(e)){for(const n in e)Ht(e[n],t,s);for(const n of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,n)&&Ht(e[n],t,s)}return e}function Ws(e,t,s,n){try{return n?e(...n):e()}catch(a){kn(a,t,s)}}function ot(e,t,s,n){if(ie(e)){const a=Ws(e,t,s,n);return a&&Po(a)&&a.catch(r=>{kn(r,t,s)}),a}if(re(e)){const a=[];for(let r=0;r<e.length;r++)a.push(ot(e[r],t,s,n));return a}}function kn(e,t,s,n=!0){const a=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||_e;if(t){let i=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${s}`;for(;i;){const d=i.ec;if(d){for(let u=0;u<d.length;u++)if(d[u](e,l,c)===!1)return}i=i.parent}if(r){kt(),Ws(r,null,10,[e,l,c]),Ct();return}}ac(e,s,a,n,o)}function ac(e,t,s,n=!0,a=!1){if(a)throw e;console.error(e)}const Be=[];let pt=-1;const ys=[];let Dt=null,gs=0;const ti=Promise.resolve();let fn=null;function Va(e){const t=fn||ti;return e?t.then(this?e.bind(this):e):t}function rc(e){let t=pt+1,s=Be.length;for(;t<s;){const n=t+s>>>1,a=Be[n],r=Hs(a);r<e||r===e&&a.flags&2?t=n+1:s=n}return t}function Ja(e){if(!(e.flags&1)){const t=Hs(e),s=Be[Be.length-1];!s||!(e.flags&2)&&t>=Hs(s)?Be.push(e):Be.splice(rc(t),0,e),e.flags|=1,si()}}function si(){fn||(fn=ti.then(ai))}function oc(e){re(e)?ys.push(...e):Dt&&e.id===-1?Dt.splice(gs+1,0,e):e.flags&1||(ys.push(e),e.flags|=1),si()}function fr(e,t,s=pt+1){for(;s<Be.length;s++){const n=Be[s];if(n&&n.flags&2){if(e&&n.id!==e.uid)continue;Be.splice(s,1),s--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function ni(e){if(ys.length){const t=[...new Set(ys)].sort((s,n)=>Hs(s)-Hs(n));if(ys.length=0,Dt){Dt.push(...t);return}for(Dt=t,gs=0;gs<Dt.length;gs++){const s=Dt[gs];s.flags&4&&(s.flags&=-2),s.flags&8||s(),s.flags&=-2}Dt=null,gs=0}}const Hs=e=>e.id==null?e.flags&2?-1:1/0:e.id;function ai(e){try{for(pt=0;pt<Be.length;pt++){const t=Be[pt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Ws(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;pt<Be.length;pt++){const t=Be[pt];t&&(t.flags&=-2)}pt=-1,Be.length=0,ni(),fn=null,(Be.length||ys.length)&&ai()}}let nt=null,ri=null;function hn(e){const t=nt;return nt=e,ri=e&&e.type.__scopeId||null,t}function _a(e,t=nt,s){if(!t||e._n)return e;const n=(...a)=>{n._d&&bn(-1);const r=hn(t);let o;try{o=e(...a)}finally{hn(r),n._d&&bn(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function es(e,t,s,n){const a=e.dirs,r=t&&t.dirs;for(let o=0;o<a.length;o++){const i=a[o];r&&(i.oldValue=r[o].value);let l=i.dir[n];l&&(kt(),ot(l,s,8,[e.el,i,e,t]),Ct())}}const ic=Symbol("_vte"),oi=e=>e.__isTeleport,wt=Symbol("_leaveCb"),en=Symbol("_enterCb");function lc(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Xt(()=>{e.isMounted=!0}),gi(()=>{e.isUnmounting=!0}),e}const We=[Function,Array],ii={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:We,onEnter:We,onAfterEnter:We,onEnterCancelled:We,onBeforeLeave:We,onLeave:We,onAfterLeave:We,onLeaveCancelled:We,onBeforeAppear:We,onAppear:We,onAfterAppear:We,onAppearCancelled:We},li=e=>{const t=e.subTree;return t.component?li(t.component):t},cc={name:"BaseTransition",props:ii,setup(e,{slots:t}){const s=er(),n=lc();return()=>{const a=t.default&&ui(t.default(),!0);if(!a||!a.length)return;const r=ci(a),o=de(e),{mode:i}=o;if(n.isLeaving)return qn(r);const l=hr(r);if(!l)return qn(r);let c=ya(l,o,n,s,u=>c=u);l.type!==Ke&&Gs(l,c);let d=s.subTree&&hr(s.subTree);if(d&&d.type!==Ke&&!rs(d,l)&&li(s).type!==Ke){let u=ya(d,o,n,s);if(Gs(d,u),i==="out-in"&&l.type!==Ke)return n.isLeaving=!0,u.afterLeave=()=>{n.isLeaving=!1,s.job.flags&8||s.update(),delete u.afterLeave,d=void 0},qn(r);i==="in-out"&&l.type!==Ke?u.delayLeave=(p,b,m)=>{const f=di(n,d);f[String(d.key)]=d,p[wt]=()=>{b(),p[wt]=void 0,delete c.delayedLeave,d=void 0},c.delayedLeave=()=>{m(),delete c.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return r}}};function ci(e){let t=e[0];if(e.length>1){for(const s of e)if(s.type!==Ke){t=s;break}}return t}const dc=cc;function di(e,t){const{leavingVNodes:s}=e;let n=s.get(t.type);return n||(n=Object.create(null),s.set(t.type,n)),n}function ya(e,t,s,n,a){const{appear:r,mode:o,persisted:i=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:d,onEnterCancelled:u,onBeforeLeave:p,onLeave:b,onAfterLeave:m,onLeaveCancelled:f,onBeforeAppear:h,onAppear:g,onAfterAppear:y,onAppearCancelled:_}=t,S=String(e.key),E=di(s,e),k=(x,w)=>{x&&ot(x,n,9,w)},C=(x,w)=>{const L=w[1];k(x,w),re(x)?x.every(A=>A.length<=1)&&L():x.length<=1&&L()},R={mode:o,persisted:i,beforeEnter(x){let w=l;if(!s.isMounted)if(r)w=h||l;else return;x[wt]&&x[wt](!0);const L=E[S];L&&rs(e,L)&&L.el[wt]&&L.el[wt](),k(w,[x])},enter(x){let w=c,L=d,A=u;if(!s.isMounted)if(r)w=g||c,L=y||d,A=_||u;else return;let G=!1;const W=x[en]=se=>{G||(G=!0,se?k(A,[x]):k(L,[x]),R.delayedLeave&&R.delayedLeave(),x[en]=void 0)};w?C(w,[x,W]):W()},leave(x,w){const L=String(e.key);if(x[en]&&x[en](!0),s.isUnmounting)return w();k(p,[x]);let A=!1;const G=x[wt]=W=>{A||(A=!0,w(),W?k(f,[x]):k(m,[x]),x[wt]=void 0,E[L]===e&&delete E[L])};E[L]=e,b?C(b,[x,G]):G()},clone(x){const w=ya(x,t,s,n,a);return a&&a(w),w}};return R}function qn(e){if(Cn(e))return e=qt(e),e.children=null,e}function hr(e){if(!Cn(e))return oi(e.type)&&e.children?ci(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:s}=e;if(s){if(t&16)return s[0];if(t&32&&ie(s.default))return s.default()}}function Gs(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Gs(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ui(e,t=!1,s){let n=[],a=0;for(let r=0;r<e.length;r++){let o=e[r];const i=s==null?o.key:String(s)+String(o.key!=null?o.key:r);o.type===ht?(o.patchFlag&128&&a++,n=n.concat(ui(o.children,t,i))):(t||o.type!==Ke)&&n.push(i!=null?qt(o,{key:i}):o)}if(a>1)for(let r=0;r<n.length;r++)n[r].patchFlag=-2;return n}function pi(e,t){return ie(e)?Oe({name:e.name},t,{setup:e}):e}function fi(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const gn=new WeakMap;function Ls(e,t,s,n,a=!1){if(re(e)){e.forEach((m,f)=>Ls(m,t&&(re(t)?t[f]:t),s,n,a));return}if(Ms(n)&&!a){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&Ls(e,t,s,n.component.subTree);return}const r=n.shapeFlag&4?tr(n.component):n.el,o=a?null:r,{i,r:l}=e,c=t&&t.r,d=i.refs===_e?i.refs={}:i.refs,u=i.setupState,p=de(u),b=u===_e?xo:m=>fe(p,m);if(c!=null&&c!==l){if(gr(t),Ae(c))d[c]=null,b(c)&&(u[c]=null);else if(xe(c)){c.value=null;const m=t;m.k&&(d[m.k]=null)}}if(ie(l))Ws(l,i,12,[o,d]);else{const m=Ae(l),f=xe(l);if(m||f){const h=()=>{if(e.f){const g=m?b(l)?u[l]:d[l]:l.value;if(a)re(g)&&Ba(g,r);else if(re(g))g.includes(r)||g.push(r);else if(m)d[l]=[r],b(l)&&(u[l]=d[l]);else{const y=[r];l.value=y,e.k&&(d[e.k]=y)}}else m?(d[l]=o,b(l)&&(u[l]=o)):f&&(l.value=o,e.k&&(d[e.k]=o))};if(o){const g=()=>{h(),gn.delete(e)};g.id=-1,gn.set(e,g),Ye(g,s)}else gr(e),h()}}}function gr(e){const t=gn.get(e);t&&(t.flags|=8,gn.delete(e))}On().requestIdleCallback;On().cancelIdleCallback;const Ms=e=>!!e.type.__asyncLoader,Cn=e=>e.type.__isKeepAlive;function uc(e,t){hi(e,"a",t)}function pc(e,t){hi(e,"da",t)}function hi(e,t,s=Le){const n=e.__wdc||(e.__wdc=()=>{let a=s;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Rn(t,n,s),s){let a=s.parent;for(;a&&a.parent;)Cn(a.parent.vnode)&&fc(n,t,s,a),a=a.parent}}function fc(e,t,s,n){const a=Rn(t,e,n,!0);Ln(()=>{Ba(n[t],a)},s)}function Rn(e,t,s=Le,n=!1){if(s){const a=s[e]||(s[e]=[]),r=t.__weh||(t.__weh=(...o)=>{kt();const i=Vs(s),l=ot(t,s,e,o);return i(),Ct(),l});return n?a.unshift(r):a.push(r),r}}const Lt=e=>(t,s=Le)=>{(!js||e==="sp")&&Rn(e,(...n)=>t(...n),s)},hc=Lt("bm"),Xt=Lt("m"),gc=Lt("bu"),mc=Lt("u"),gi=Lt("bum"),Ln=Lt("um"),bc=Lt("sp"),_c=Lt("rtg"),yc=Lt("rtc");function vc(e,t=Le){Rn("ec",e,t)}const Tc="components",mi=Symbol.for("v-ndc");function Sc(e){return Ae(e)?Ec(Tc,e,!1)||e:e||mi}function Ec(e,t,s=!0,n=!1){const a=nt||Le;if(a){const r=a.type;{const i=ud(r,!1);if(i&&(i===t||i===et(t)||i===Pn(et(t))))return r}const o=mr(a[e]||r[e],t)||mr(a.appContext[e],t);return!o&&n?r:o}}function mr(e,t){return e&&(e[t]||e[et(t)]||e[Pn(et(t))])}const va=e=>e?Di(e)?tr(e):va(e.parent):null,Is=Oe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>va(e.parent),$root:e=>va(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>_i(e),$forceUpdate:e=>e.f||(e.f=()=>{Ja(e.update)}),$nextTick:e=>e.n||(e.n=Va.bind(e.proxy)),$watch:e=>Kc.bind(e)}),Wn=(e,t)=>e!==_e&&!e.__isScriptSetup&&fe(e,t),wc={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:s,setupState:n,data:a,props:r,accessCache:o,type:i,appContext:l}=e;let c;if(t[0]!=="$"){const b=o[t];if(b!==void 0)switch(b){case 1:return n[t];case 2:return a[t];case 4:return s[t];case 3:return r[t]}else{if(Wn(n,t))return o[t]=1,n[t];if(a!==_e&&fe(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&fe(c,t))return o[t]=3,r[t];if(s!==_e&&fe(s,t))return o[t]=4,s[t];Ta&&(o[t]=0)}}const d=Is[t];let u,p;if(d)return t==="$attrs"&&Re(e.attrs,"get",""),d(e);if((u=i.__cssModules)&&(u=u[t]))return u;if(s!==_e&&fe(s,t))return o[t]=4,s[t];if(p=l.config.globalProperties,fe(p,t))return p[t]},set({_:e},t,s){const{data:n,setupState:a,ctx:r}=e;return Wn(a,t)?(a[t]=s,!0):n!==_e&&fe(n,t)?(n[t]=s,!0):fe(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=s,!0)},has({_:{data:e,setupState:t,accessCache:s,ctx:n,appContext:a,propsOptions:r,type:o}},i){let l,c;return!!(s[i]||e!==_e&&i[0]!=="$"&&fe(e,i)||Wn(t,i)||(l=r[0])&&fe(l,i)||fe(n,i)||fe(Is,i)||fe(a.config.globalProperties,i)||(c=o.__cssModules)&&c[i])},defineProperty(e,t,s){return s.get!=null?e._.accessCache[t]=0:fe(s,"value")&&this.set(e,t,s.value,null),Reflect.defineProperty(e,t,s)}};function br(e){return re(e)?e.reduce((t,s)=>(t[s]=null,t),{}):e}let Ta=!0;function xc(e){const t=_i(e),s=e.proxy,n=e.ctx;Ta=!1,t.beforeCreate&&_r(t.beforeCreate,e,"bc");const{data:a,computed:r,methods:o,watch:i,provide:l,inject:c,created:d,beforeMount:u,mounted:p,beforeUpdate:b,updated:m,activated:f,deactivated:h,beforeDestroy:g,beforeUnmount:y,destroyed:_,unmounted:S,render:E,renderTracked:k,renderTriggered:C,errorCaptured:R,serverPrefetch:x,expose:w,inheritAttrs:L,components:A,directives:G,filters:W}=t;if(c&&Ac(c,n,null),o)for(const Y in o){const F=o[Y];ie(F)&&(n[Y]=F.bind(s))}if(a){const Y=a.call(s,s);ve(Y)&&(e.data=Pt(Y))}if(Ta=!0,r)for(const Y in r){const F=r[Y],z=ie(F)?F.bind(s,s):ie(F.get)?F.get.bind(s,s):mt,te=!ie(F)&&ie(F.set)?F.set.bind(s):mt,Z=ze({get:z,set:te});Object.defineProperty(n,Y,{enumerable:!0,configurable:!0,get:()=>Z.value,set:ue=>Z.value=ue})}if(i)for(const Y in i)bi(i[Y],n,s,Y);if(l){const Y=ie(l)?l.call(s):l;Reflect.ownKeys(Y).forEach(F=>{rn(F,Y[F])})}d&&_r(d,e,"c");function U(Y,F){re(F)?F.forEach(z=>Y(z.bind(s))):F&&Y(F.bind(s))}if(U(hc,u),U(Xt,p),U(gc,b),U(mc,m),U(uc,f),U(pc,h),U(vc,R),U(yc,k),U(_c,C),U(gi,y),U(Ln,S),U(bc,x),re(w))if(w.length){const Y=e.exposed||(e.exposed={});w.forEach(F=>{Object.defineProperty(Y,F,{get:()=>s[F],set:z=>s[F]=z,enumerable:!0})})}else e.exposed||(e.exposed={});E&&e.render===mt&&(e.render=E),L!=null&&(e.inheritAttrs=L),A&&(e.components=A),G&&(e.directives=G),x&&fi(e)}function Ac(e,t,s=mt){re(e)&&(e=Sa(e));for(const n in e){const a=e[n];let r;ve(a)?"default"in a?r=Ze(a.from||n,a.default,!0):r=Ze(a.from||n):r=Ze(a),xe(r)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[n]=r}}function _r(e,t,s){ot(re(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,s)}function bi(e,t,s,n){let a=n.includes(".")?Ri(s,n):()=>s[n];if(Ae(e)){const r=t[e];ie(r)&&Ns(a,r)}else if(ie(e))Ns(a,e.bind(s));else if(ve(e))if(re(e))e.forEach(r=>bi(r,t,s,n));else{const r=ie(e.handler)?e.handler.bind(s):t[e.handler];ie(r)&&Ns(a,r,e)}}function _i(e){const t=e.type,{mixins:s,extends:n}=t,{mixins:a,optionsCache:r,config:{optionMergeStrategies:o}}=e.appContext,i=r.get(t);let l;return i?l=i:!a.length&&!s&&!n?l=t:(l={},a.length&&a.forEach(c=>mn(l,c,o,!0)),mn(l,t,o)),ve(t)&&r.set(t,l),l}function mn(e,t,s,n=!1){const{mixins:a,extends:r}=t;r&&mn(e,r,s,!0),a&&a.forEach(o=>mn(e,o,s,!0));for(const o in t)if(!(n&&o==="expose")){const i=Pc[o]||s&&s[o];e[o]=i?i(e[o],t[o]):t[o]}return e}const Pc={data:yr,props:vr,emits:vr,methods:Ps,computed:Ps,beforeCreate:Ie,created:Ie,beforeMount:Ie,mounted:Ie,beforeUpdate:Ie,updated:Ie,beforeDestroy:Ie,beforeUnmount:Ie,destroyed:Ie,unmounted:Ie,activated:Ie,deactivated:Ie,errorCaptured:Ie,serverPrefetch:Ie,components:Ps,directives:Ps,watch:kc,provide:yr,inject:Oc};function yr(e,t){return t?e?function(){return Oe(ie(e)?e.call(this,this):e,ie(t)?t.call(this,this):t)}:t:e}function Oc(e,t){return Ps(Sa(e),Sa(t))}function Sa(e){if(re(e)){const t={};for(let s=0;s<e.length;s++)t[e[s]]=e[s];return t}return e}function Ie(e,t){return e?[...new Set([].concat(e,t))]:t}function Ps(e,t){return e?Oe(Object.create(null),e,t):t}function vr(e,t){return e?re(e)&&re(t)?[...new Set([...e,...t])]:Oe(Object.create(null),br(e),br(t??{})):t}function kc(e,t){if(!e)return t;if(!t)return e;const s=Oe(Object.create(null),e);for(const n in t)s[n]=Ie(e[n],t[n]);return s}function yi(){return{app:null,config:{isNativeTag:xo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cc=0;function Rc(e,t){return function(n,a=null){ie(n)||(n=Oe({},n)),a!=null&&!ve(a)&&(a=null);const r=yi(),o=new WeakSet,i=[];let l=!1;const c=r.app={_uid:Cc++,_component:n,_props:a,_container:null,_context:r,_instance:null,version:fd,get config(){return r.config},set config(d){},use(d,...u){return o.has(d)||(d&&ie(d.install)?(o.add(d),d.install(c,...u)):ie(d)&&(o.add(d),d(c,...u))),c},mixin(d){return r.mixins.includes(d)||r.mixins.push(d),c},component(d,u){return u?(r.components[d]=u,c):r.components[d]},directive(d,u){return u?(r.directives[d]=u,c):r.directives[d]},mount(d,u,p){if(!l){const b=c._ceVNode||He(n,a);return b.appContext=r,p===!0?p="svg":p===!1&&(p=void 0),e(b,d,p),l=!0,c._container=d,d.__vue_app__=c,tr(b.component)}},onUnmount(d){i.push(d)},unmount(){l&&(ot(i,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(d,u){return r.provides[d]=u,c},runWithContext(d){const u=ds;ds=c;try{return d()}finally{ds=u}}};return c}}let ds=null;function rn(e,t){if(Le){let s=Le.provides;const n=Le.parent&&Le.parent.provides;n===s&&(s=Le.provides=Object.create(n)),s[e]=t}}function Ze(e,t,s=!1){const n=er();if(n||ds){let a=ds?ds._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(a&&e in a)return a[e];if(arguments.length>1)return s&&ie(t)?t.call(n&&n.proxy):t}}function Lc(){return!!(er()||ds)}const vi={},Ti=()=>Object.create(vi),Si=e=>Object.getPrototypeOf(e)===vi;function Mc(e,t,s,n=!1){const a={},r=Ti();e.propsDefaults=Object.create(null),Ei(e,t,a,r);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);s?e.props=n?a:Qo(a):e.type.props?e.props=a:e.props=r,e.attrs=r}function Ic(e,t,s,n){const{props:a,attrs:r,vnode:{patchFlag:o}}=e,i=de(a),[l]=e.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let u=0;u<d.length;u++){let p=d[u];if(Mn(e.emitsOptions,p))continue;const b=t[p];if(l)if(fe(r,p))b!==r[p]&&(r[p]=b,c=!0);else{const m=et(p);a[m]=Ea(l,i,m,b,e,!1)}else b!==r[p]&&(r[p]=b,c=!0)}}}else{Ei(e,t,a,r)&&(c=!0);let d;for(const u in i)(!t||!fe(t,u)&&((d=Jt(u))===u||!fe(t,d)))&&(l?s&&(s[u]!==void 0||s[d]!==void 0)&&(a[u]=Ea(l,i,u,void 0,e,!0)):delete a[u]);if(r!==i)for(const u in r)(!t||!fe(t,u))&&(delete r[u],c=!0)}c&&At(e.attrs,"set","")}function Ei(e,t,s,n){const[a,r]=e.propsOptions;let o=!1,i;if(t)for(let l in t){if(ks(l))continue;const c=t[l];let d;a&&fe(a,d=et(l))?!r||!r.includes(d)?s[d]=c:(i||(i={}))[d]=c:Mn(e.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(r){const l=de(s),c=i||_e;for(let d=0;d<r.length;d++){const u=r[d];s[u]=Ea(a,l,u,c[u],e,!fe(c,u))}}return o}function Ea(e,t,s,n,a,r){const o=e[s];if(o!=null){const i=fe(o,"default");if(i&&n===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ie(l)){const{propsDefaults:c}=a;if(s in c)n=c[s];else{const d=Vs(a);n=c[s]=l.call(null,t),d()}}else n=l;a.ce&&a.ce._setProp(s,n)}o[0]&&(r&&!i?n=!1:o[1]&&(n===""||n===Jt(s))&&(n=!0))}return n}const Nc=new WeakMap;function wi(e,t,s=!1){const n=s?Nc:t.propsCache,a=n.get(e);if(a)return a;const r=e.props,o={},i=[];let l=!1;if(!ie(e)){const d=u=>{l=!0;const[p,b]=wi(u,t,!0);Oe(o,p),b&&i.push(...b)};!s&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!r&&!l)return ve(e)&&n.set(e,bs),bs;if(re(r))for(let d=0;d<r.length;d++){const u=et(r[d]);Tr(u)&&(o[u]=_e)}else if(r)for(const d in r){const u=et(d);if(Tr(u)){const p=r[d],b=o[u]=re(p)||ie(p)?{type:p}:Oe({},p),m=b.type;let f=!1,h=!0;if(re(m))for(let g=0;g<m.length;++g){const y=m[g],_=ie(y)&&y.name;if(_==="Boolean"){f=!0;break}else _==="String"&&(h=!1)}else f=ie(m)&&m.name==="Boolean";b[0]=f,b[1]=h,(f||fe(b,"default"))&&i.push(u)}}const c=[o,i];return ve(e)&&n.set(e,c),c}function Tr(e){return e[0]!=="$"&&!ks(e)}const Xa=e=>e==="_"||e==="_ctx"||e==="$stable",Qa=e=>re(e)?e.map(gt):[gt(e)],Dc=(e,t,s)=>{if(t._n)return t;const n=_a((...a)=>Qa(t(...a)),s);return n._c=!1,n},xi=(e,t,s)=>{const n=e._ctx;for(const a in e){if(Xa(a))continue;const r=e[a];if(ie(r))t[a]=Dc(a,r,n);else if(r!=null){const o=Qa(r);t[a]=()=>o}}},Ai=(e,t)=>{const s=Qa(t);e.slots.default=()=>s},Pi=(e,t,s)=>{for(const n in t)(s||!Xa(n))&&(e[n]=t[n])},Bc=(e,t,s)=>{const n=e.slots=Ti();if(e.vnode.shapeFlag&32){const a=t._;a?(Pi(n,t,s),s&&Co(n,"_",a,!0)):xi(t,n)}else t&&Ai(e,t)},Fc=(e,t,s)=>{const{vnode:n,slots:a}=e;let r=!0,o=_e;if(n.shapeFlag&32){const i=t._;i?s&&i===1?r=!1:Pi(a,t,s):(r=!t.$stable,xi(t,a)),o=t}else t&&(Ai(e,t),o={default:1});if(r)for(const i in a)!Xa(i)&&o[i]==null&&delete a[i]},Ye=Zc;function $c(e){return Uc(e)}function Uc(e,t){const s=On();s.__VUE__=!0;const{insert:n,remove:a,patchProp:r,createElement:o,createText:i,createComment:l,setText:c,setElementText:d,parentNode:u,nextSibling:p,setScopeId:b=mt,insertStaticContent:m}=e,f=(v,T,P,D=null,B=null,N=null,V=void 0,q=null,K=!!T.dynamicChildren)=>{if(v===T)return;v&&!rs(v,T)&&(D=M(v),ue(v,B,N,!0),v=null),T.patchFlag===-2&&(K=!1,T.dynamicChildren=null);const{type:H,ref:ae,shapeFlag:X}=T;switch(H){case In:h(v,T,P,D);break;case Ke:g(v,T,P,D);break;case on:v==null&&y(T,P,D,V);break;case ht:A(v,T,P,D,B,N,V,q,K);break;default:X&1?E(v,T,P,D,B,N,V,q,K):X&6?G(v,T,P,D,B,N,V,q,K):(X&64||X&128)&&H.process(v,T,P,D,B,N,V,q,K,ee)}ae!=null&&B?Ls(ae,v&&v.ref,N,T||v,!T):ae==null&&v&&v.ref!=null&&Ls(v.ref,null,N,v,!0)},h=(v,T,P,D)=>{if(v==null)n(T.el=i(T.children),P,D);else{const B=T.el=v.el;T.children!==v.children&&c(B,T.children)}},g=(v,T,P,D)=>{v==null?n(T.el=l(T.children||""),P,D):T.el=v.el},y=(v,T,P,D)=>{[v.el,v.anchor]=m(v.children,T,P,D,v.el,v.anchor)},_=({el:v,anchor:T},P,D)=>{let B;for(;v&&v!==T;)B=p(v),n(v,P,D),v=B;n(T,P,D)},S=({el:v,anchor:T})=>{let P;for(;v&&v!==T;)P=p(v),a(v),v=P;a(T)},E=(v,T,P,D,B,N,V,q,K)=>{if(T.type==="svg"?V="svg":T.type==="math"&&(V="mathml"),v==null)k(T,P,D,B,N,V,q,K);else{const H=v.el&&v.el._isVueCE?v.el:null;try{H&&H._beginPatch(),x(v,T,B,N,V,q,K)}finally{H&&H._endPatch()}}},k=(v,T,P,D,B,N,V,q)=>{let K,H;const{props:ae,shapeFlag:X,transition:ne,dirs:oe}=v;if(K=v.el=o(v.type,N,ae&&ae.is,ae),X&8?d(K,v.children):X&16&&R(v.children,K,null,D,B,Vn(v,N),V,q),oe&&es(v,null,D,"created"),C(K,v,v.scopeId,V,D),ae){for(const me in ae)me!=="value"&&!ks(me)&&r(K,me,null,ae[me],N,D);"value"in ae&&r(K,"value",null,ae.value,N),(H=ae.onVnodeBeforeMount)&&ut(H,D,v)}oe&&es(v,null,D,"beforeMount");const ce=Hc(B,ne);ce&&ne.beforeEnter(K),n(K,T,P),((H=ae&&ae.onVnodeMounted)||ce||oe)&&Ye(()=>{H&&ut(H,D,v),ce&&ne.enter(K),oe&&es(v,null,D,"mounted")},B)},C=(v,T,P,D,B)=>{if(P&&b(v,P),D)for(let N=0;N<D.length;N++)b(v,D[N]);if(B){let N=B.subTree;if(T===N||Mi(N.type)&&(N.ssContent===T||N.ssFallback===T)){const V=B.vnode;C(v,V,V.scopeId,V.slotScopeIds,B.parent)}}},R=(v,T,P,D,B,N,V,q,K=0)=>{for(let H=K;H<v.length;H++){const ae=v[H]=q?Bt(v[H]):gt(v[H]);f(null,ae,T,P,D,B,N,V,q)}},x=(v,T,P,D,B,N,V)=>{const q=T.el=v.el;let{patchFlag:K,dynamicChildren:H,dirs:ae}=T;K|=v.patchFlag&16;const X=v.props||_e,ne=T.props||_e;let oe;if(P&&ts(P,!1),(oe=ne.onVnodeBeforeUpdate)&&ut(oe,P,T,v),ae&&es(T,v,P,"beforeUpdate"),P&&ts(P,!0),(X.innerHTML&&ne.innerHTML==null||X.textContent&&ne.textContent==null)&&d(q,""),H?w(v.dynamicChildren,H,q,P,D,Vn(T,B),N):V||F(v,T,q,null,P,D,Vn(T,B),N,!1),K>0){if(K&16)L(q,X,ne,P,B);else if(K&2&&X.class!==ne.class&&r(q,"class",null,ne.class,B),K&4&&r(q,"style",X.style,ne.style,B),K&8){const ce=T.dynamicProps;for(let me=0;me<ce.length;me++){const he=ce[me],$e=X[he],Ue=ne[he];(Ue!==$e||he==="value")&&r(q,he,$e,Ue,B,P)}}K&1&&v.children!==T.children&&d(q,T.children)}else!V&&H==null&&L(q,X,ne,P,B);((oe=ne.onVnodeUpdated)||ae)&&Ye(()=>{oe&&ut(oe,P,T,v),ae&&es(T,v,P,"updated")},D)},w=(v,T,P,D,B,N,V)=>{for(let q=0;q<T.length;q++){const K=v[q],H=T[q],ae=K.el&&(K.type===ht||!rs(K,H)||K.shapeFlag&198)?u(K.el):P;f(K,H,ae,null,D,B,N,V,!0)}},L=(v,T,P,D,B)=>{if(T!==P){if(T!==_e)for(const N in T)!ks(N)&&!(N in P)&&r(v,N,T[N],null,B,D);for(const N in P){if(ks(N))continue;const V=P[N],q=T[N];V!==q&&N!=="value"&&r(v,N,q,V,B,D)}"value"in P&&r(v,"value",T.value,P.value,B)}},A=(v,T,P,D,B,N,V,q,K)=>{const H=T.el=v?v.el:i(""),ae=T.anchor=v?v.anchor:i("");let{patchFlag:X,dynamicChildren:ne,slotScopeIds:oe}=T;oe&&(q=q?q.concat(oe):oe),v==null?(n(H,P,D),n(ae,P,D),R(T.children||[],P,ae,B,N,V,q,K)):X>0&&X&64&&ne&&v.dynamicChildren?(w(v.dynamicChildren,ne,P,B,N,V,q),(T.key!=null||B&&T===B.subTree)&&Oi(v,T,!0)):F(v,T,P,ae,B,N,V,q,K)},G=(v,T,P,D,B,N,V,q,K)=>{T.slotScopeIds=q,v==null?T.shapeFlag&512?B.ctx.activate(T,P,D,V,K):W(T,P,D,B,N,V,K):se(v,T,K)},W=(v,T,P,D,B,N,V)=>{const q=v.component=od(v,D,B);if(Cn(v)&&(q.ctx.renderer=ee),id(q,!1,V),q.asyncDep){if(B&&B.registerDep(q,U,V),!v.el){const K=q.subTree=He(Ke);g(null,K,T,P),v.placeholder=K.el}}else U(q,v,T,P,B,N,V)},se=(v,T,P)=>{const D=T.component=v.component;if(Xc(v,T,P))if(D.asyncDep&&!D.asyncResolved){Y(D,T,P);return}else D.next=T,D.update();else T.el=v.el,D.vnode=T},U=(v,T,P,D,B,N,V)=>{const q=()=>{if(v.isMounted){let{next:X,bu:ne,u:oe,parent:ce,vnode:me}=v;{const ct=ki(v);if(ct){X&&(X.el=me.el,Y(v,X,V)),ct.asyncDep.then(()=>{v.isUnmounted||q()});return}}let he=X,$e;ts(v,!1),X?(X.el=me.el,Y(v,X,V)):X=me,ne&&Gn(ne),($e=X.props&&X.props.onVnodeBeforeUpdate)&&ut($e,ce,X,me),ts(v,!0);const Ue=Er(v),lt=v.subTree;v.subTree=Ue,f(lt,Ue,u(lt.el),M(lt),v,B,N),X.el=Ue.el,he===null&&Qc(v,Ue.el),oe&&Ye(oe,B),($e=X.props&&X.props.onVnodeUpdated)&&Ye(()=>ut($e,ce,X,me),B)}else{let X;const{el:ne,props:oe}=T,{bm:ce,m:me,parent:he,root:$e,type:Ue}=v,lt=Ms(T);ts(v,!1),ce&&Gn(ce),!lt&&(X=oe&&oe.onVnodeBeforeMount)&&ut(X,he,T),ts(v,!0);{$e.ce&&$e.ce._def.shadowRoot!==!1&&$e.ce._injectChildStyle(Ue);const ct=v.subTree=Er(v);f(null,ct,P,D,v,B,N),T.el=ct.el}if(me&&Ye(me,B),!lt&&(X=oe&&oe.onVnodeMounted)){const ct=T;Ye(()=>ut(X,he,ct),B)}(T.shapeFlag&256||he&&Ms(he.vnode)&&he.vnode.shapeFlag&256)&&v.a&&Ye(v.a,B),v.isMounted=!0,T=P=D=null}};v.scope.on();const K=v.effect=new Fo(q);v.scope.off();const H=v.update=K.run.bind(K),ae=v.job=K.runIfDirty.bind(K);ae.i=v,ae.id=v.uid,K.scheduler=()=>Ja(ae),ts(v,!0),H()},Y=(v,T,P)=>{T.component=v;const D=v.vnode.props;v.vnode=T,v.next=null,Ic(v,T.props,D,P),Fc(v,T.children,P),kt(),fr(v),Ct()},F=(v,T,P,D,B,N,V,q,K=!1)=>{const H=v&&v.children,ae=v?v.shapeFlag:0,X=T.children,{patchFlag:ne,shapeFlag:oe}=T;if(ne>0){if(ne&128){te(H,X,P,D,B,N,V,q,K);return}else if(ne&256){z(H,X,P,D,B,N,V,q,K);return}}oe&8?(ae&16&&Te(H,B,N),X!==H&&d(P,X)):ae&16?oe&16?te(H,X,P,D,B,N,V,q,K):Te(H,B,N,!0):(ae&8&&d(P,""),oe&16&&R(X,P,D,B,N,V,q,K))},z=(v,T,P,D,B,N,V,q,K)=>{v=v||bs,T=T||bs;const H=v.length,ae=T.length,X=Math.min(H,ae);let ne;for(ne=0;ne<X;ne++){const oe=T[ne]=K?Bt(T[ne]):gt(T[ne]);f(v[ne],oe,P,null,B,N,V,q,K)}H>ae?Te(v,B,N,!0,!1,X):R(T,P,D,B,N,V,q,K,X)},te=(v,T,P,D,B,N,V,q,K)=>{let H=0;const ae=T.length;let X=v.length-1,ne=ae-1;for(;H<=X&&H<=ne;){const oe=v[H],ce=T[H]=K?Bt(T[H]):gt(T[H]);if(rs(oe,ce))f(oe,ce,P,null,B,N,V,q,K);else break;H++}for(;H<=X&&H<=ne;){const oe=v[X],ce=T[ne]=K?Bt(T[ne]):gt(T[ne]);if(rs(oe,ce))f(oe,ce,P,null,B,N,V,q,K);else break;X--,ne--}if(H>X){if(H<=ne){const oe=ne+1,ce=oe<ae?T[oe].el:D;for(;H<=ne;)f(null,T[H]=K?Bt(T[H]):gt(T[H]),P,ce,B,N,V,q,K),H++}}else if(H>ne)for(;H<=X;)ue(v[H],B,N,!0),H++;else{const oe=H,ce=H,me=new Map;for(H=ce;H<=ne;H++){const Ge=T[H]=K?Bt(T[H]):gt(T[H]);Ge.key!=null&&me.set(Ge.key,H)}let he,$e=0;const Ue=ne-ce+1;let lt=!1,ct=0;const Es=new Array(Ue);for(H=0;H<Ue;H++)Es[H]=0;for(H=oe;H<=X;H++){const Ge=v[H];if($e>=Ue){ue(Ge,B,N,!0);continue}let dt;if(Ge.key!=null)dt=me.get(Ge.key);else for(he=ce;he<=ne;he++)if(Es[he-ce]===0&&rs(Ge,T[he])){dt=he;break}dt===void 0?ue(Ge,B,N,!0):(Es[dt-ce]=H+1,dt>=ct?ct=dt:lt=!0,f(Ge,T[dt],P,null,B,N,V,q,K),$e++)}const ir=lt?Gc(Es):bs;for(he=ir.length-1,H=Ue-1;H>=0;H--){const Ge=ce+H,dt=T[Ge],lr=T[Ge+1],cr=Ge+1<ae?lr.el||lr.placeholder:D;Es[H]===0?f(null,dt,P,cr,B,N,V,q,K):lt&&(he<0||H!==ir[he]?Z(dt,P,cr,2):he--)}}},Z=(v,T,P,D,B=null)=>{const{el:N,type:V,transition:q,children:K,shapeFlag:H}=v;if(H&6){Z(v.component.subTree,T,P,D);return}if(H&128){v.suspense.move(T,P,D);return}if(H&64){V.move(v,T,P,ee);return}if(V===ht){n(N,T,P);for(let X=0;X<K.length;X++)Z(K[X],T,P,D);n(v.anchor,T,P);return}if(V===on){_(v,T,P);return}if(D!==2&&H&1&&q)if(D===0)q.beforeEnter(N),n(N,T,P),Ye(()=>q.enter(N),B);else{const{leave:X,delayLeave:ne,afterLeave:oe}=q,ce=()=>{v.ctx.isUnmounted?a(N):n(N,T,P)},me=()=>{N._isLeaving&&N[wt](!0),X(N,()=>{ce(),oe&&oe()})};ne?ne(N,ce,me):me()}else n(N,T,P)},ue=(v,T,P,D=!1,B=!1)=>{const{type:N,props:V,ref:q,children:K,dynamicChildren:H,shapeFlag:ae,patchFlag:X,dirs:ne,cacheIndex:oe}=v;if(X===-2&&(B=!1),q!=null&&(kt(),Ls(q,null,P,v,!0),Ct()),oe!=null&&(T.renderCache[oe]=void 0),ae&256){T.ctx.deactivate(v);return}const ce=ae&1&&ne,me=!Ms(v);let he;if(me&&(he=V&&V.onVnodeBeforeUnmount)&&ut(he,T,v),ae&6)Ee(v.component,P,D);else{if(ae&128){v.suspense.unmount(P,D);return}ce&&es(v,null,T,"beforeUnmount"),ae&64?v.type.remove(v,T,P,ee,D):H&&!H.hasOnce&&(N!==ht||X>0&&X&64)?Te(H,T,P,!1,!0):(N===ht&&X&384||!B&&ae&16)&&Te(K,T,P),D&&ge(v)}(me&&(he=V&&V.onVnodeUnmounted)||ce)&&Ye(()=>{he&&ut(he,T,v),ce&&es(v,null,T,"unmounted")},P)},ge=v=>{const{type:T,el:P,anchor:D,transition:B}=v;if(T===ht){Me(P,D);return}if(T===on){S(v);return}const N=()=>{a(P),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(v.shapeFlag&1&&B&&!B.persisted){const{leave:V,delayLeave:q}=B,K=()=>V(P,N);q?q(v.el,N,K):K()}else N()},Me=(v,T)=>{let P;for(;v!==T;)P=p(v),a(v),v=P;a(T)},Ee=(v,T,P)=>{const{bum:D,scope:B,job:N,subTree:V,um:q,m:K,a:H}=v;Sr(K),Sr(H),D&&Gn(D),B.stop(),N&&(N.flags|=8,ue(V,v,T,P)),q&&Ye(q,T),Ye(()=>{v.isUnmounted=!0},T)},Te=(v,T,P,D=!1,B=!1,N=0)=>{for(let V=N;V<v.length;V++)ue(v[V],T,P,D,B)},M=v=>{if(v.shapeFlag&6)return M(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const T=p(v.anchor||v.el),P=T&&T[ic];return P?p(P):T};let J=!1;const j=(v,T,P)=>{v==null?T._vnode&&ue(T._vnode,null,null,!0):f(T._vnode||null,v,T,null,null,null,P),T._vnode=v,J||(J=!0,fr(),ni(),J=!1)},ee={p:f,um:ue,m:Z,r:ge,mt:W,mc:R,pc:F,pbc:w,n:M,o:e};return{render:j,hydrate:void 0,createApp:Rc(j)}}function Vn({type:e,props:t},s){return s==="svg"&&e==="foreignObject"||s==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:s}function ts({effect:e,job:t},s){s?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Hc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Oi(e,t,s=!1){const n=e.children,a=t.children;if(re(n)&&re(a))for(let r=0;r<n.length;r++){const o=n[r];let i=a[r];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=a[r]=Bt(a[r]),i.el=o.el),!s&&i.patchFlag!==-2&&Oi(o,i)),i.type===In&&i.patchFlag!==-1&&(i.el=o.el),i.type===Ke&&!i.el&&(i.el=o.el)}}function Gc(e){const t=e.slice(),s=[0];let n,a,r,o,i;const l=e.length;for(n=0;n<l;n++){const c=e[n];if(c!==0){if(a=s[s.length-1],e[a]<c){t[n]=a,s.push(n);continue}for(r=0,o=s.length-1;r<o;)i=r+o>>1,e[s[i]]<c?r=i+1:o=i;c<e[s[r]]&&(r>0&&(t[n]=s[r-1]),s[r]=n)}}for(r=s.length,o=s[r-1];r-- >0;)s[r]=o,o=t[o];return s}function ki(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:ki(t)}function Sr(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Yc=Symbol.for("v-scx"),jc=()=>Ze(Yc);function Ns(e,t,s){return Ci(e,t,s)}function Ci(e,t,s=_e){const{immediate:n,deep:a,flush:r,once:o}=s,i=Oe({},s),l=t&&n||!t&&r!=="post";let c;if(js){if(r==="sync"){const b=jc();c=b.__watcherHandles||(b.__watcherHandles=[])}else if(!l){const b=()=>{};return b.stop=mt,b.resume=mt,b.pause=mt,b}}const d=Le;i.call=(b,m,f)=>ot(b,d,m,f);let u=!1;r==="post"?i.scheduler=b=>{Ye(b,d&&d.suspense)}:r!=="sync"&&(u=!0,i.scheduler=(b,m)=>{m?b():Ja(b)}),i.augmentJob=b=>{t&&(b.flags|=4),u&&(b.flags|=2,d&&(b.id=d.uid,b.i=d))};const p=nc(e,t,i);return js&&(c?c.push(p):l&&p()),p}function Kc(e,t,s){const n=this.proxy,a=Ae(e)?e.includes(".")?Ri(n,e):()=>n[e]:e.bind(n,n);let r;ie(t)?r=t:(r=t.handler,s=t);const o=Vs(this),i=Ci(a,r.bind(n),s);return o(),i}function Ri(e,t){const s=t.split(".");return()=>{let n=e;for(let a=0;a<s.length&&n;a++)n=n[s[a]];return n}}const zc=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${et(t)}Modifiers`]||e[`${Jt(t)}Modifiers`];function qc(e,t,...s){if(e.isUnmounted)return;const n=e.vnode.props||_e;let a=s;const r=t.startsWith("update:"),o=r&&zc(n,t.slice(7));o&&(o.trim&&(a=s.map(d=>Ae(d)?d.trim():d)),o.number&&(a=s.map(vl)));let i,l=n[i=Hn(t)]||n[i=Hn(et(t))];!l&&r&&(l=n[i=Hn(Jt(t))]),l&&ot(l,e,6,a);const c=n[i+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,ot(c,e,6,a)}}const Wc=new WeakMap;function Li(e,t,s=!1){const n=s?Wc:t.emitsCache,a=n.get(e);if(a!==void 0)return a;const r=e.emits;let o={},i=!1;if(!ie(e)){const l=c=>{const d=Li(c,t,!0);d&&(i=!0,Oe(o,d))};!s&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!r&&!i?(ve(e)&&n.set(e,null),null):(re(r)?r.forEach(l=>o[l]=null):Oe(o,r),ve(e)&&n.set(e,o),o)}function Mn(e,t){return!e||!wn(t)?!1:(t=t.slice(2).replace(/Once$/,""),fe(e,t[0].toLowerCase()+t.slice(1))||fe(e,Jt(t))||fe(e,t))}function Er(e){const{type:t,vnode:s,proxy:n,withProxy:a,propsOptions:[r],slots:o,attrs:i,emit:l,render:c,renderCache:d,props:u,data:p,setupState:b,ctx:m,inheritAttrs:f}=e,h=hn(e);let g,y;try{if(s.shapeFlag&4){const S=a||n,E=S;g=gt(c.call(E,S,d,u,b,p,m)),y=i}else{const S=t;g=gt(S.length>1?S(u,{attrs:i,slots:o,emit:l}):S(u,null)),y=t.props?i:Vc(i)}}catch(S){Ds.length=0,kn(S,e,1),g=He(Ke)}let _=g;if(y&&f!==!1){const S=Object.keys(y),{shapeFlag:E}=_;S.length&&E&7&&(r&&S.some(Da)&&(y=Jc(y,r)),_=qt(_,y,!1,!0))}return s.dirs&&(_=qt(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(s.dirs):s.dirs),s.transition&&Gs(_,s.transition),g=_,hn(h),g}const Vc=e=>{let t;for(const s in e)(s==="class"||s==="style"||wn(s))&&((t||(t={}))[s]=e[s]);return t},Jc=(e,t)=>{const s={};for(const n in e)(!Da(n)||!(n.slice(9)in t))&&(s[n]=e[n]);return s};function Xc(e,t,s){const{props:n,children:a,component:r}=e,{props:o,children:i,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(s&&l>=0){if(l&1024)return!0;if(l&16)return n?wr(n,o,c):!!o;if(l&8){const d=t.dynamicProps;for(let u=0;u<d.length;u++){const p=d[u];if(o[p]!==n[p]&&!Mn(c,p))return!0}}}else return(a||i)&&(!i||!i.$stable)?!0:n===o?!1:n?o?wr(n,o,c):!0:!!o;return!1}function wr(e,t,s){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let a=0;a<n.length;a++){const r=n[a];if(t[r]!==e[r]&&!Mn(s,r))return!0}return!1}function Qc({vnode:e,parent:t},s){for(;t;){const n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.el=e.el),n===e)(e=t.vnode).el=s,t=t.parent;else break}}const Mi=e=>e.__isSuspense;function Zc(e,t){t&&t.pendingBranch?re(e)?t.effects.push(...e):t.effects.push(e):oc(e)}const ht=Symbol.for("v-fgt"),In=Symbol.for("v-txt"),Ke=Symbol.for("v-cmt"),on=Symbol.for("v-stc"),Ds=[];let qe=null;function tt(e=!1){Ds.push(qe=e?null:[])}function ed(){Ds.pop(),qe=Ds[Ds.length-1]||null}let Ys=1;function bn(e,t=!1){Ys+=e,e<0&&qe&&t&&(qe.hasOnce=!0)}function Ii(e){return e.dynamicChildren=Ys>0?qe||bs:null,ed(),Ys>0&&qe&&qe.push(e),e}function _t(e,t,s,n,a,r){return Ii(I(e,t,s,n,a,r,!0))}function xr(e,t,s,n,a){return Ii(He(e,t,s,n,a,!0))}function _n(e){return e?e.__v_isVNode===!0:!1}function rs(e,t){return e.type===t.type&&e.key===t.key}const Ni=({key:e})=>e??null,ln=({ref:e,ref_key:t,ref_for:s})=>(typeof e=="number"&&(e=""+e),e!=null?Ae(e)||xe(e)||ie(e)?{i:nt,r:e,k:t,f:!!s}:e:null);function I(e,t=null,s=null,n=0,a=null,r=e===ht?0:1,o=!1,i=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ni(t),ref:t&&ln(t),scopeId:ri,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:nt};return i?(Za(l,s),r&128&&e.normalize(l)):s&&(l.shapeFlag|=Ae(s)?8:16),Ys>0&&!o&&qe&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&qe.push(l),l}const He=td;function td(e,t=null,s=null,n=0,a=null,r=!1){if((!e||e===mi)&&(e=Ke),_n(e)){const i=qt(e,t,!0);return s&&Za(i,s),Ys>0&&!r&&qe&&(i.shapeFlag&6?qe[qe.indexOf(e)]=i:qe.push(i)),i.patchFlag=-2,i}if(pd(e)&&(e=e.__vccOpts),t){t=sd(t);let{class:i,style:l}=t;i&&!Ae(i)&&(t.class=zt(i)),ve(l)&&(qa(l)&&!re(l)&&(l=Oe({},l)),t.style=$a(l))}const o=Ae(e)?1:Mi(e)?128:oi(e)?64:ve(e)?4:ie(e)?2:0;return I(e,t,s,n,a,o,r,!0)}function sd(e){return e?qa(e)||Si(e)?Oe({},e):e:null}function qt(e,t,s=!1,n=!1){const{props:a,ref:r,patchFlag:o,children:i,transition:l}=e,c=t?nd(a||{},t):a,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Ni(c),ref:t&&t.ref?s&&r?re(r)?r.concat(ln(t)):[r,ln(t)]:ln(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ht?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&qt(e.ssContent),ssFallback:e.ssFallback&&qt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&n&&Gs(d,l.clone(d)),d}function Nn(e=" ",t=0){return He(In,null,e,t)}function Qt(e,t){const s=He(on,null,e);return s.staticCount=t,s}function gt(e){return e==null||typeof e=="boolean"?He(Ke):re(e)?He(ht,null,e.slice()):_n(e)?Bt(e):He(In,null,String(e))}function Bt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:qt(e)}function Za(e,t){let s=0;const{shapeFlag:n}=e;if(t==null)t=null;else if(re(t))s=16;else if(typeof t=="object")if(n&65){const a=t.default;a&&(a._c&&(a._d=!1),Za(e,a()),a._c&&(a._d=!0));return}else{s=32;const a=t._;!a&&!Si(t)?t._ctx=nt:a===3&&nt&&(nt.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ie(t)?(t={default:t,_ctx:nt},s=32):(t=String(t),n&64?(s=16,t=[Nn(t)]):s=8);e.children=t,e.shapeFlag|=s}function nd(...e){const t={};for(let s=0;s<e.length;s++){const n=e[s];for(const a in n)if(a==="class")t.class!==n.class&&(t.class=zt([t.class,n.class]));else if(a==="style")t.style=$a([t.style,n.style]);else if(wn(a)){const r=t[a],o=n[a];o&&r!==o&&!(re(r)&&r.includes(o))&&(t[a]=r?[].concat(r,o):o)}else a!==""&&(t[a]=n[a])}return t}function ut(e,t,s,n=null){ot(e,t,7,[s,n])}const ad=yi();let rd=0;function od(e,t,s){const n=e.type,a=(t?t.appContext:e.appContext)||ad,r={uid:rd++,vnode:e,type:n,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new No(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wi(n,a),emitsOptions:Li(n,a),emit:null,emitted:null,propsDefaults:_e,inheritAttrs:n.inheritAttrs,ctx:_e,data:_e,props:_e,attrs:_e,slots:_e,refs:_e,setupState:_e,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=qc.bind(null,r),e.ce&&e.ce(r),r}let Le=null;const er=()=>Le||nt;let yn,wa;{const e=On(),t=(s,n)=>{let a;return(a=e[s])||(a=e[s]=[]),a.push(n),r=>{a.length>1?a.forEach(o=>o(r)):a[0](r)}};yn=t("__VUE_INSTANCE_SETTERS__",s=>Le=s),wa=t("__VUE_SSR_SETTERS__",s=>js=s)}const Vs=e=>{const t=Le;return yn(e),e.scope.on(),()=>{e.scope.off(),yn(t)}},Ar=()=>{Le&&Le.scope.off(),yn(null)};function Di(e){return e.vnode.shapeFlag&4}let js=!1;function id(e,t=!1,s=!1){t&&wa(t);const{props:n,children:a}=e.vnode,r=Di(e);Mc(e,n,r,t),Bc(e,a,s||t);const o=r?ld(e,t):void 0;return t&&wa(!1),o}function ld(e,t){const s=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,wc);const{setup:n}=s;if(n){kt();const a=e.setupContext=n.length>1?dd(e):null,r=Vs(e),o=Ws(n,e,0,[e.props,a]),i=Po(o);if(Ct(),r(),(i||e.sp)&&!Ms(e)&&fi(e),i){if(o.then(Ar,Ar),t)return o.then(l=>{Pr(e,l)}).catch(l=>{kn(l,e,0)});e.asyncDep=o}else Pr(e,o)}else Bi(e)}function Pr(e,t,s){ie(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ve(t)&&(e.setupState=ei(t)),Bi(e)}function Bi(e,t,s){const n=e.type;e.render||(e.render=n.render||mt);{const a=Vs(e);kt();try{xc(e)}finally{Ct(),a()}}}const cd={get(e,t){return Re(e,"get",""),e[t]}};function dd(e){const t=s=>{e.exposed=s||{}};return{attrs:new Proxy(e.attrs,cd),slots:e.slots,emit:e.emit,expose:t}}function tr(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(ei(Wa(e.exposed)),{get(t,s){if(s in t)return t[s];if(s in Is)return Is[s](e)},has(t,s){return s in t||s in Is}})):e.proxy}function ud(e,t=!0){return ie(e)?e.displayName||e.name:e.name||t&&e.__name}function pd(e){return ie(e)&&"__vccOpts"in e}const ze=(e,t)=>tc(e,t,js);function sr(e,t,s){try{bn(-1);const n=arguments.length;return n===2?ve(t)&&!re(t)?_n(t)?He(e,null,[t]):He(e,t):He(e,null,t):(n>3?s=Array.prototype.slice.call(arguments,2):n===3&&_n(s)&&(s=[s]),He(e,t,s))}finally{bn(1)}}const fd="3.5.24";let xa;const Or=typeof window<"u"&&window.trustedTypes;if(Or)try{xa=Or.createPolicy("vue",{createHTML:e=>e})}catch{}const Fi=xa?e=>xa.createHTML(e):e=>e,hd="http://www.w3.org/2000/svg",gd="http://www.w3.org/1998/Math/MathML",Et=typeof document<"u"?document:null,kr=Et&&Et.createElement("template"),md={insert:(e,t,s)=>{t.insertBefore(e,s||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,s,n)=>{const a=t==="svg"?Et.createElementNS(hd,e):t==="mathml"?Et.createElementNS(gd,e):s?Et.createElement(e,{is:s}):Et.createElement(e);return e==="select"&&n&&n.multiple!=null&&a.setAttribute("multiple",n.multiple),a},createText:e=>Et.createTextNode(e),createComment:e=>Et.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Et.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,s,n,a,r){const o=s?s.previousSibling:t.lastChild;if(a&&(a===r||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),s),!(a===r||!(a=a.nextSibling)););else{kr.innerHTML=Fi(n==="svg"?`<svg>${e}</svg>`:n==="mathml"?`<math>${e}</math>`:e);const i=kr.content;if(n==="svg"||n==="mathml"){const l=i.firstChild;for(;l.firstChild;)i.appendChild(l.firstChild);i.removeChild(l)}t.insertBefore(i,s)}return[o?o.nextSibling:t.firstChild,s?s.previousSibling:t.lastChild]}},Mt="transition",xs="animation",Ks=Symbol("_vtc"),$i={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},bd=Oe({},ii,$i),_d=e=>(e.displayName="Transition",e.props=bd,e),yd=_d((e,{slots:t})=>sr(dc,vd(e),t)),ss=(e,t=[])=>{re(e)?e.forEach(s=>s(...t)):e&&e(...t)},Cr=e=>e?re(e)?e.some(t=>t.length>1):e.length>1:!1;function vd(e){const t={};for(const A in e)A in $i||(t[A]=e[A]);if(e.css===!1)return t;const{name:s="v",type:n,duration:a,enterFromClass:r=`${s}-enter-from`,enterActiveClass:o=`${s}-enter-active`,enterToClass:i=`${s}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:d=i,leaveFromClass:u=`${s}-leave-from`,leaveActiveClass:p=`${s}-leave-active`,leaveToClass:b=`${s}-leave-to`}=e,m=Td(a),f=m&&m[0],h=m&&m[1],{onBeforeEnter:g,onEnter:y,onEnterCancelled:_,onLeave:S,onLeaveCancelled:E,onBeforeAppear:k=g,onAppear:C=y,onAppearCancelled:R=_}=t,x=(A,G,W,se)=>{A._enterCancelled=se,ns(A,G?d:i),ns(A,G?c:o),W&&W()},w=(A,G)=>{A._isLeaving=!1,ns(A,u),ns(A,b),ns(A,p),G&&G()},L=A=>(G,W)=>{const se=A?C:y,U=()=>x(G,A,W);ss(se,[G,U]),Rr(()=>{ns(G,A?l:r),Tt(G,A?d:i),Cr(se)||Lr(G,n,f,U)})};return Oe(t,{onBeforeEnter(A){ss(g,[A]),Tt(A,r),Tt(A,o)},onBeforeAppear(A){ss(k,[A]),Tt(A,l),Tt(A,c)},onEnter:L(!1),onAppear:L(!0),onLeave(A,G){A._isLeaving=!0;const W=()=>w(A,G);Tt(A,u),A._enterCancelled?(Tt(A,p),Nr(A)):(Nr(A),Tt(A,p)),Rr(()=>{A._isLeaving&&(ns(A,u),Tt(A,b),Cr(S)||Lr(A,n,h,W))}),ss(S,[A,W])},onEnterCancelled(A){x(A,!1,void 0,!0),ss(_,[A])},onAppearCancelled(A){x(A,!0,void 0,!0),ss(R,[A])},onLeaveCancelled(A){w(A),ss(E,[A])}})}function Td(e){if(e==null)return null;if(ve(e))return[Jn(e.enter),Jn(e.leave)];{const t=Jn(e);return[t,t]}}function Jn(e){return Tl(e)}function Tt(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.add(s)),(e[Ks]||(e[Ks]=new Set)).add(t)}function ns(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.remove(n));const s=e[Ks];s&&(s.delete(t),s.size||(e[Ks]=void 0))}function Rr(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Sd=0;function Lr(e,t,s,n){const a=e._endId=++Sd,r=()=>{a===e._endId&&n()};if(s!=null)return setTimeout(r,s);const{type:o,timeout:i,propCount:l}=Ed(e,t);if(!o)return n();const c=o+"end";let d=0;const u=()=>{e.removeEventListener(c,p),r()},p=b=>{b.target===e&&++d>=l&&u()};setTimeout(()=>{d<l&&u()},i+1),e.addEventListener(c,p)}function Ed(e,t){const s=window.getComputedStyle(e),n=m=>(s[m]||"").split(", "),a=n(`${Mt}Delay`),r=n(`${Mt}Duration`),o=Mr(a,r),i=n(`${xs}Delay`),l=n(`${xs}Duration`),c=Mr(i,l);let d=null,u=0,p=0;t===Mt?o>0&&(d=Mt,u=o,p=r.length):t===xs?c>0&&(d=xs,u=c,p=l.length):(u=Math.max(o,c),d=u>0?o>c?Mt:xs:null,p=d?d===Mt?r.length:l.length:0);const b=d===Mt&&/\b(?:transform|all)(?:,|$)/.test(n(`${Mt}Property`).toString());return{type:d,timeout:u,propCount:p,hasTransform:b}}function Mr(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((s,n)=>Ir(s)+Ir(e[n])))}function Ir(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Nr(e){return(e?e.ownerDocument:document).body.offsetHeight}function wd(e,t,s){const n=e[Ks];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):s?e.setAttribute("class",t):e.className=t}const Dr=Symbol("_vod"),xd=Symbol("_vsh"),Ad=Symbol(""),Pd=/(?:^|;)\s*display\s*:/;function Od(e,t,s){const n=e.style,a=Ae(s);let r=!1;if(s&&!a){if(t)if(Ae(t))for(const o of t.split(";")){const i=o.slice(0,o.indexOf(":")).trim();s[i]==null&&cn(n,i,"")}else for(const o in t)s[o]==null&&cn(n,o,"");for(const o in s)o==="display"&&(r=!0),cn(n,o,s[o])}else if(a){if(t!==s){const o=n[Ad];o&&(s+=";"+o),n.cssText=s,r=Pd.test(s)}}else t&&e.removeAttribute("style");Dr in e&&(e[Dr]=r?n.display:"",e[xd]&&(n.display="none"))}const Br=/\s*!important$/;function cn(e,t,s){if(re(s))s.forEach(n=>cn(e,t,n));else if(s==null&&(s=""),t.startsWith("--"))e.setProperty(t,s);else{const n=kd(e,t);Br.test(s)?e.setProperty(Jt(n),s.replace(Br,""),"important"):e[n]=s}}const Fr=["Webkit","Moz","ms"],Xn={};function kd(e,t){const s=Xn[t];if(s)return s;let n=et(t);if(n!=="filter"&&n in e)return Xn[t]=n;n=Pn(n);for(let a=0;a<Fr.length;a++){const r=Fr[a]+n;if(r in e)return Xn[t]=r}return t}const $r="http://www.w3.org/1999/xlink";function Ur(e,t,s,n,a,r=Pl(t)){n&&t.startsWith("xlink:")?s==null?e.removeAttributeNS($r,t.slice(6,t.length)):e.setAttributeNS($r,t,s):s==null||r&&!Ro(s)?e.removeAttribute(t):e.setAttribute(t,r?"":Vt(s)?String(s):s)}function Hr(e,t,s,n,a){if(t==="innerHTML"||t==="textContent"){s!=null&&(e[t]=t==="innerHTML"?Fi(s):s);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const i=r==="OPTION"?e.getAttribute("value")||"":e.value,l=s==null?e.type==="checkbox"?"on":"":String(s);(i!==l||!("_value"in e))&&(e.value=l),s==null&&e.removeAttribute(t),e._value=s;return}let o=!1;if(s===""||s==null){const i=typeof e[t];i==="boolean"?s=Ro(s):s==null&&i==="string"?(s="",o=!0):i==="number"&&(s=0,o=!0)}try{e[t]=s}catch{}o&&e.removeAttribute(a||t)}function Cd(e,t,s,n){e.addEventListener(t,s,n)}function Rd(e,t,s,n){e.removeEventListener(t,s,n)}const Gr=Symbol("_vei");function Ld(e,t,s,n,a=null){const r=e[Gr]||(e[Gr]={}),o=r[t];if(n&&o)o.value=n;else{const[i,l]=Md(t);if(n){const c=r[t]=Dd(n,a);Cd(e,i,c,l)}else o&&(Rd(e,i,o,l),r[t]=void 0)}}const Yr=/(?:Once|Passive|Capture)$/;function Md(e){let t;if(Yr.test(e)){t={};let n;for(;n=e.match(Yr);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Jt(e.slice(2)),t]}let Qn=0;const Id=Promise.resolve(),Nd=()=>Qn||(Id.then(()=>Qn=0),Qn=Date.now());function Dd(e,t){const s=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=s.attached)return;ot(Bd(n,s.value),t,5,[n])};return s.value=e,s.attached=Nd(),s}function Bd(e,t){if(re(t)){const s=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{s.call(e),e._stopped=!0},t.map(n=>a=>!a._stopped&&n&&n(a))}else return t}const jr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Fd=(e,t,s,n,a,r)=>{const o=a==="svg";t==="class"?wd(e,n,o):t==="style"?Od(e,s,n):wn(t)?Da(t)||Ld(e,t,s,n,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):$d(e,t,n,o))?(Hr(e,t,n),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Ur(e,t,n,o,r,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Ae(n))?Hr(e,et(t),n,r,t):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),Ur(e,t,n,o))};function $d(e,t,s,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in e&&jr(t)&&ie(s));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const a=e.tagName;if(a==="IMG"||a==="VIDEO"||a==="CANVAS"||a==="SOURCE")return!1}return jr(t)&&Ae(s)?!1:t in e}const Ud=["ctrl","shift","alt","meta"],Hd={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Ud.some(s=>e[`${s}Key`]&&!t.includes(s))},Dn=(e,t)=>{const s=e._withMods||(e._withMods={}),n=t.join(".");return s[n]||(s[n]=((a,...r)=>{for(let o=0;o<t.length;o++){const i=Hd[t[o]];if(i&&i(a,t))return}return e(a,...r)}))},Gd={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},xt=(e,t)=>{const s=e._withKeys||(e._withKeys={}),n=t.join(".");return s[n]||(s[n]=(a=>{if(!("key"in a))return;const r=Jt(a.key);if(t.some(o=>o===r||Gd[o]===r))return e(a)}))},Yd=Oe({patchProp:Fd},md);let Kr;function jd(){return Kr||(Kr=$c(Yd))}const Kd=((...e)=>{const t=jd().createApp(...e),{mount:s}=t;return t.mount=n=>{const a=qd(n);if(!a)return;const r=t._component;!ie(r)&&!r.render&&!r.template&&(r.template=a.innerHTML),a.nodeType===1&&(a.textContent="");const o=s(a,!1,zd(a));return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t});function zd(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function qd(e){return Ae(e)?document.querySelector(e):e}let Ui;const Bn=e=>Ui=e,Hi=Symbol();function Aa(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Bs;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Bs||(Bs={}));function Wd(){const e=Do(!0),t=e.run(()=>Qe({}));let s=[],n=[];const a=Wa({install(r){Bn(a),a._a=r,r.provide(Hi,a),r.config.globalProperties.$pinia=a,n.forEach(o=>s.push(o)),n=[]},use(r){return this._a?s.push(r):n.push(r),this},_p:s,_a:null,_e:e,_s:new Map,state:t});return a}const Gi=()=>{};function zr(e,t,s,n=Gi){e.add(t);const a=()=>{e.delete(t)&&n()};return!s&&Bo()&&Ol(a),a}function fs(e,...t){e.forEach(s=>{s(...t)})}const Vd=e=>e(),qr=Symbol(),Zn=Symbol();function Pa(e,t){e instanceof Map&&t instanceof Map?t.forEach((s,n)=>e.set(n,s)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const s in t){if(!t.hasOwnProperty(s))continue;const n=t[s],a=e[s];Aa(a)&&Aa(n)&&e.hasOwnProperty(s)&&!xe(n)&&!cs(n)?e[s]=Pa(a,n):e[s]=n}return e}const Jd=Symbol();function Xd(e){return!Aa(e)||!Object.prototype.hasOwnProperty.call(e,Jd)}const{assign:Nt}=Object;function Qd(e){return!!(xe(e)&&e.effect)}function Zd(e,t,s,n){const{state:a,actions:r,getters:o}=t,i=s.state.value[e];let l;function c(){i||(s.state.value[e]=a?a():{});const d=Xl(s.state.value[e]);return Nt(d,r,Object.keys(o||{}).reduce((u,p)=>(u[p]=Wa(ze(()=>{Bn(s);const b=s._s.get(e);return o[p].call(b,b)})),u),{}))}return l=Yi(e,c,t,s,n,!0),l}function Yi(e,t,s={},n,a,r){let o;const i=Nt({actions:{}},s),l={deep:!0};let c,d,u=new Set,p=new Set,b;const m=n.state.value[e];!r&&!m&&(n.state.value[e]={}),Qe({});let f;function h(R){let x;c=d=!1,typeof R=="function"?(R(n.state.value[e]),x={type:Bs.patchFunction,storeId:e,events:b}):(Pa(n.state.value[e],R),x={type:Bs.patchObject,payload:R,storeId:e,events:b});const w=f=Symbol();Va().then(()=>{f===w&&(c=!0)}),d=!0,fs(u,x,n.state.value[e])}const g=r?function(){const{state:x}=s,w=x?x():{};this.$patch(L=>{Nt(L,w)})}:Gi;function y(){o.stop(),u.clear(),p.clear(),n._s.delete(e)}const _=(R,x="")=>{if(qr in R)return R[Zn]=x,R;const w=function(){Bn(n);const L=Array.from(arguments),A=new Set,G=new Set;function W(Y){A.add(Y)}function se(Y){G.add(Y)}fs(p,{args:L,name:w[Zn],store:E,after:W,onError:se});let U;try{U=R.apply(this&&this.$id===e?this:E,L)}catch(Y){throw fs(G,Y),Y}return U instanceof Promise?U.then(Y=>(fs(A,Y),Y)).catch(Y=>(fs(G,Y),Promise.reject(Y))):(fs(A,U),U)};return w[qr]=!0,w[Zn]=x,w},S={_p:n,$id:e,$onAction:zr.bind(null,p),$patch:h,$reset:g,$subscribe(R,x={}){const w=zr(u,R,x.detached,()=>L()),L=o.run(()=>Ns(()=>n.state.value[e],A=>{(x.flush==="sync"?d:c)&&R({storeId:e,type:Bs.direct,events:b},A)},Nt({},l,x)));return w},$dispose:y},E=Pt(S);n._s.set(e,E);const C=(n._a&&n._a.runWithContext||Vd)(()=>n._e.run(()=>(o=Do()).run(()=>t({action:_}))));for(const R in C){const x=C[R];if(xe(x)&&!Qd(x)||cs(x))r||(m&&Xd(x)&&(xe(x)?x.value=m[R]:Pa(x,m[R])),n.state.value[e][R]=x);else if(typeof x=="function"){const w=_(x,R);C[R]=w,i.actions[R]=x}}return Nt(E,C),Nt(de(E),C),Object.defineProperty(E,"$state",{get:()=>n.state.value[e],set:R=>{h(x=>{Nt(x,R)})}}),n._p.forEach(R=>{Nt(E,o.run(()=>R({store:E,app:n._a,pinia:n,options:i})))}),m&&r&&s.hydrate&&s.hydrate(E.$state,m),c=!0,d=!0,E}function eu(e,t,s){let n;const a=typeof t=="function";n=a?s:t;function r(o,i){const l=Lc();return o=o||(l?Ze(Hi,null):null),o&&Bn(o),o=Ui,o._s.has(e)||(a?Yi(e,t,n,o):Zd(e,n,o)),o._s.get(e)}return r.$id=e,r}const ms=typeof document<"u";function ji(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function tu(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&ji(e.default)}const pe=Object.assign;function ea(e,t){const s={};for(const n in t){const a=t[n];s[n]=it(a)?a.map(e):e(a)}return s}const Fs=()=>{},it=Array.isArray;function Wr(e,t){const s={};for(const n in e)s[n]=n in t?t[n]:e[n];return s}const Ki=/#/g,su=/&/g,nu=/\//g,au=/=/g,ru=/\?/g,zi=/\+/g,ou=/%5B/g,iu=/%5D/g,qi=/%5E/g,lu=/%60/g,Wi=/%7B/g,cu=/%7C/g,Vi=/%7D/g,du=/%20/g;function nr(e){return e==null?"":encodeURI(""+e).replace(cu,"|").replace(ou,"[").replace(iu,"]")}function uu(e){return nr(e).replace(Wi,"{").replace(Vi,"}").replace(qi,"^")}function Oa(e){return nr(e).replace(zi,"%2B").replace(du,"+").replace(Ki,"%23").replace(su,"%26").replace(lu,"`").replace(Wi,"{").replace(Vi,"}").replace(qi,"^")}function pu(e){return Oa(e).replace(au,"%3D")}function fu(e){return nr(e).replace(Ki,"%23").replace(ru,"%3F")}function hu(e){return fu(e).replace(nu,"%2F")}function zs(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const gu=/\/$/,mu=e=>e.replace(gu,"");function ta(e,t,s="/"){let n,a={},r="",o="";const i=t.indexOf("#");let l=t.indexOf("?");return l=i>=0&&l>i?-1:l,l>=0&&(n=t.slice(0,l),r=t.slice(l,i>0?i:t.length),a=e(r.slice(1))),i>=0&&(n=n||t.slice(0,i),o=t.slice(i,t.length)),n=vu(n??t,s),{fullPath:n+r+o,path:n,query:a,hash:zs(o)}}function bu(e,t){const s=t.query?e(t.query):"";return t.path+(s&&"?")+s+(t.hash||"")}function Vr(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function _u(e,t,s){const n=t.matched.length-1,a=s.matched.length-1;return n>-1&&n===a&&vs(t.matched[n],s.matched[a])&&Ji(t.params,s.params)&&e(t.query)===e(s.query)&&t.hash===s.hash}function vs(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ji(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const s in e)if(!yu(e[s],t[s]))return!1;return!0}function yu(e,t){return it(e)?Jr(e,t):it(t)?Jr(t,e):e===t}function Jr(e,t){return it(t)?e.length===t.length&&e.every((s,n)=>s===t[n]):e.length===1&&e[0]===t}function vu(e,t){if(e.startsWith("/"))return e;if(!e)return t;const s=t.split("/"),n=e.split("/"),a=n[n.length-1];(a===".."||a===".")&&n.push("");let r=s.length-1,o,i;for(o=0;o<n.length;o++)if(i=n[o],i!==".")if(i==="..")r>1&&r--;else break;return s.slice(0,r).join("/")+"/"+n.slice(o).join("/")}const It={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let ka=(function(e){return e.pop="pop",e.push="push",e})({}),sa=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function Tu(e){if(!e)if(ms){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),mu(e)}const Su=/^[^#]+#/;function Eu(e,t){return e.replace(Su,"#")+t}function wu(e,t){const s=document.documentElement.getBoundingClientRect(),n=e.getBoundingClientRect();return{behavior:t.behavior,left:n.left-s.left-(t.left||0),top:n.top-s.top-(t.top||0)}}const Fn=()=>({left:window.scrollX,top:window.scrollY});function xu(e){let t;if("el"in e){const s=e.el,n=typeof s=="string"&&s.startsWith("#"),a=typeof s=="string"?n?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!a)return;t=wu(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Xr(e,t){return(history.state?history.state.position-t:-1)+e}const Ca=new Map;function Au(e,t){Ca.set(e,t)}function Pu(e){const t=Ca.get(e);return Ca.delete(e),t}function Ou(e){return typeof e=="string"||e&&typeof e=="object"}function Xi(e){return typeof e=="string"||typeof e=="symbol"}let we=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const Qi=Symbol("");we.MATCHER_NOT_FOUND+"",we.NAVIGATION_GUARD_REDIRECT+"",we.NAVIGATION_ABORTED+"",we.NAVIGATION_CANCELLED+"",we.NAVIGATION_DUPLICATED+"";function Ts(e,t){return pe(new Error,{type:e,[Qi]:!0},t)}function St(e,t){return e instanceof Error&&Qi in e&&(t==null||!!(e.type&t))}const ku=["params","query","hash"];function Cu(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const s of ku)s in e&&(t[s]=e[s]);return JSON.stringify(t,null,2)}function Ru(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let n=0;n<s.length;++n){const a=s[n].replace(zi," "),r=a.indexOf("="),o=zs(r<0?a:a.slice(0,r)),i=r<0?null:zs(a.slice(r+1));if(o in t){let l=t[o];it(l)||(l=t[o]=[l]),l.push(i)}else t[o]=i}return t}function Qr(e){let t="";for(let s in e){const n=e[s];if(s=pu(s),n==null){n!==void 0&&(t+=(t.length?"&":"")+s);continue}(it(n)?n.map(a=>a&&Oa(a)):[n&&Oa(n)]).forEach(a=>{a!==void 0&&(t+=(t.length?"&":"")+s,a!=null&&(t+="="+a))})}return t}function Lu(e){const t={};for(const s in e){const n=e[s];n!==void 0&&(t[s]=it(n)?n.map(a=>a==null?null:""+a):n==null?n:""+n)}return t}const Mu=Symbol(""),Zr=Symbol(""),$n=Symbol(""),ar=Symbol(""),Ra=Symbol("");function As(){let e=[];function t(n){return e.push(n),()=>{const a=e.indexOf(n);a>-1&&e.splice(a,1)}}function s(){e=[]}return{add:t,list:()=>e.slice(),reset:s}}function Ft(e,t,s,n,a,r=o=>o()){const o=n&&(n.enterCallbacks[a]=n.enterCallbacks[a]||[]);return()=>new Promise((i,l)=>{const c=p=>{p===!1?l(Ts(we.NAVIGATION_ABORTED,{from:s,to:t})):p instanceof Error?l(p):Ou(p)?l(Ts(we.NAVIGATION_GUARD_REDIRECT,{from:t,to:p})):(o&&n.enterCallbacks[a]===o&&typeof p=="function"&&o.push(p),i())},d=r(()=>e.call(n&&n.instances[a],t,s,c));let u=Promise.resolve(d);e.length<3&&(u=u.then(c)),u.catch(p=>l(p))})}function na(e,t,s,n,a=r=>r()){const r=[];for(const o of e)for(const i in o.components){let l=o.components[i];if(!(t!=="beforeRouteEnter"&&!o.instances[i]))if(ji(l)){const c=(l.__vccOpts||l)[t];c&&r.push(Ft(c,s,n,o,i,a))}else{let c=l();r.push(()=>c.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${i}" at "${o.path}"`);const u=tu(d)?d.default:d;o.mods[i]=d,o.components[i]=u;const p=(u.__vccOpts||u)[t];return p&&Ft(p,s,n,o,i,a)()}))}}return r}function Iu(e,t){const s=[],n=[],a=[],r=Math.max(t.matched.length,e.matched.length);for(let o=0;o<r;o++){const i=t.matched[o];i&&(e.matched.find(c=>vs(c,i))?n.push(i):s.push(i));const l=e.matched[o];l&&(t.matched.find(c=>vs(c,l))||a.push(l))}return[s,n,a]}let Nu=()=>location.protocol+"//"+location.host;function Zi(e,t){const{pathname:s,search:n,hash:a}=t,r=e.indexOf("#");if(r>-1){let o=a.includes(e.slice(r))?e.slice(r).length:1,i=a.slice(o);return i[0]!=="/"&&(i="/"+i),Vr(i,"")}return Vr(s,e)+n+a}function Du(e,t,s,n){let a=[],r=[],o=null;const i=({state:p})=>{const b=Zi(e,location),m=s.value,f=t.value;let h=0;if(p){if(s.value=b,t.value=p,o&&o===m){o=null;return}h=f?p.position-f.position:0}else n(b);a.forEach(g=>{g(s.value,m,{delta:h,type:ka.pop,direction:h?h>0?sa.forward:sa.back:sa.unknown})})};function l(){o=s.value}function c(p){a.push(p);const b=()=>{const m=a.indexOf(p);m>-1&&a.splice(m,1)};return r.push(b),b}function d(){if(document.visibilityState==="hidden"){const{history:p}=window;if(!p.state)return;p.replaceState(pe({},p.state,{scroll:Fn()}),"")}}function u(){for(const p of r)p();r=[],window.removeEventListener("popstate",i),window.removeEventListener("pagehide",d),document.removeEventListener("visibilitychange",d)}return window.addEventListener("popstate",i),window.addEventListener("pagehide",d),document.addEventListener("visibilitychange",d),{pauseListeners:l,listen:c,destroy:u}}function eo(e,t,s,n=!1,a=!1){return{back:e,current:t,forward:s,replaced:n,position:window.history.length,scroll:a?Fn():null}}function Bu(e){const{history:t,location:s}=window,n={value:Zi(e,s)},a={value:t.state};a.value||r(n.value,{back:null,current:n.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(l,c,d){const u=e.indexOf("#"),p=u>-1?(s.host&&document.querySelector("base")?e:e.slice(u))+l:Nu()+e+l;try{t[d?"replaceState":"pushState"](c,"",p),a.value=c}catch(b){console.error(b),s[d?"replace":"assign"](p)}}function o(l,c){r(l,pe({},t.state,eo(a.value.back,l,a.value.forward,!0),c,{position:a.value.position}),!0),n.value=l}function i(l,c){const d=pe({},a.value,t.state,{forward:l,scroll:Fn()});r(d.current,d,!0),r(l,pe({},eo(n.value,l,null),{position:d.position+1},c),!1),n.value=l}return{location:n,state:a,push:i,replace:o}}function Fu(e){e=Tu(e);const t=Bu(e),s=Du(e,t.state,t.location,t.replace);function n(r,o=!0){o||s.pauseListeners(),history.go(r)}const a=pe({location:"",base:e,go:n,createHref:Eu.bind(null,e)},t,s);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function $u(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Fu(e)}let is=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var Pe=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(Pe||{});const Uu={type:is.Static,value:""},Hu=/[a-zA-Z0-9_]/;function Gu(e){if(!e)return[[]];if(e==="/")return[[Uu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(b){throw new Error(`ERR (${s})/"${c}": ${b}`)}let s=Pe.Static,n=s;const a=[];let r;function o(){r&&a.push(r),r=[]}let i=0,l,c="",d="";function u(){c&&(s===Pe.Static?r.push({type:is.Static,value:c}):s===Pe.Param||s===Pe.ParamRegExp||s===Pe.ParamRegExpEnd?(r.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:is.Param,value:c,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function p(){c+=l}for(;i<e.length;){if(l=e[i++],l==="\\"&&s!==Pe.ParamRegExp){n=s,s=Pe.EscapeNext;continue}switch(s){case Pe.Static:l==="/"?(c&&u(),o()):l===":"?(u(),s=Pe.Param):p();break;case Pe.EscapeNext:p(),s=n;break;case Pe.Param:l==="("?s=Pe.ParamRegExp:Hu.test(l)?p():(u(),s=Pe.Static,l!=="*"&&l!=="?"&&l!=="+"&&i--);break;case Pe.ParamRegExp:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:s=Pe.ParamRegExpEnd:d+=l;break;case Pe.ParamRegExpEnd:u(),s=Pe.Static,l!=="*"&&l!=="?"&&l!=="+"&&i--,d="";break;default:t("Unknown state");break}}return s===Pe.ParamRegExp&&t(`Unfinished custom RegExp for param "${c}"`),u(),o(),a}const to="[^/]+?",Yu={sensitive:!1,strict:!1,start:!0,end:!0};var Ne=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(Ne||{});const ju=/[.+*?^${}()[\]/\\]/g;function Ku(e,t){const s=pe({},Yu,t),n=[];let a=s.start?"^":"";const r=[];for(const c of e){const d=c.length?[]:[Ne.Root];s.strict&&!c.length&&(a+="/");for(let u=0;u<c.length;u++){const p=c[u];let b=Ne.Segment+(s.sensitive?Ne.BonusCaseSensitive:0);if(p.type===is.Static)u||(a+="/"),a+=p.value.replace(ju,"\\$&"),b+=Ne.Static;else if(p.type===is.Param){const{value:m,repeatable:f,optional:h,regexp:g}=p;r.push({name:m,repeatable:f,optional:h});const y=g||to;if(y!==to){b+=Ne.BonusCustomRegExp;try{`${y}`}catch(S){throw new Error(`Invalid custom RegExp for param "${m}" (${y}): `+S.message)}}let _=f?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;u||(_=h&&c.length<2?`(?:/${_})`:"/"+_),h&&(_+="?"),a+=_,b+=Ne.Dynamic,h&&(b+=Ne.BonusOptional),f&&(b+=Ne.BonusRepeatable),y===".*"&&(b+=Ne.BonusWildcard)}d.push(b)}n.push(d)}if(s.strict&&s.end){const c=n.length-1;n[c][n[c].length-1]+=Ne.BonusStrict}s.strict||(a+="/?"),s.end?a+="$":s.strict&&!a.endsWith("/")&&(a+="(?:/|$)");const o=new RegExp(a,s.sensitive?"":"i");function i(c){const d=c.match(o),u={};if(!d)return null;for(let p=1;p<d.length;p++){const b=d[p]||"",m=r[p-1];u[m.name]=b&&m.repeatable?b.split("/"):b}return u}function l(c){let d="",u=!1;for(const p of e){(!u||!d.endsWith("/"))&&(d+="/"),u=!1;for(const b of p)if(b.type===is.Static)d+=b.value;else if(b.type===is.Param){const{value:m,repeatable:f,optional:h}=b,g=m in c?c[m]:"";if(it(g)&&!f)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const y=it(g)?g.join("/"):g;if(!y)if(h)p.length<2&&(d.endsWith("/")?d=d.slice(0,-1):u=!0);else throw new Error(`Missing required param "${m}"`);d+=y}}return d||"/"}return{re:o,score:n,keys:r,parse:i,stringify:l}}function zu(e,t){let s=0;for(;s<e.length&&s<t.length;){const n=t[s]-e[s];if(n)return n;s++}return e.length<t.length?e.length===1&&e[0]===Ne.Static+Ne.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Ne.Static+Ne.Segment?1:-1:0}function el(e,t){let s=0;const n=e.score,a=t.score;for(;s<n.length&&s<a.length;){const r=zu(n[s],a[s]);if(r)return r;s++}if(Math.abs(a.length-n.length)===1){if(so(n))return 1;if(so(a))return-1}return a.length-n.length}function so(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const qu={strict:!1,end:!0,sensitive:!1};function Wu(e,t,s){const n=Ku(Gu(e.path),s),a=pe(n,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function Vu(e,t){const s=[],n=new Map;t=Wr(qu,t);function a(u){return n.get(u)}function r(u,p,b){const m=!b,f=ao(u);f.aliasOf=b&&b.record;const h=Wr(t,u),g=[f];if("alias"in u){const S=typeof u.alias=="string"?[u.alias]:u.alias;for(const E of S)g.push(ao(pe({},f,{components:b?b.record.components:f.components,path:E,aliasOf:b?b.record:f})))}let y,_;for(const S of g){const{path:E}=S;if(p&&E[0]!=="/"){const k=p.record.path,C=k[k.length-1]==="/"?"":"/";S.path=p.record.path+(E&&C+E)}if(y=Wu(S,p,h),b?b.alias.push(y):(_=_||y,_!==y&&_.alias.push(y),m&&u.name&&!ro(y)&&o(u.name)),tl(y)&&l(y),f.children){const k=f.children;for(let C=0;C<k.length;C++)r(k[C],y,b&&b.children[C])}b=b||y}return _?()=>{o(_)}:Fs}function o(u){if(Xi(u)){const p=n.get(u);p&&(n.delete(u),s.splice(s.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=s.indexOf(u);p>-1&&(s.splice(p,1),u.record.name&&n.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function i(){return s}function l(u){const p=Qu(u,s);s.splice(p,0,u),u.record.name&&!ro(u)&&n.set(u.record.name,u)}function c(u,p){let b,m={},f,h;if("name"in u&&u.name){if(b=n.get(u.name),!b)throw Ts(we.MATCHER_NOT_FOUND,{location:u});h=b.record.name,m=pe(no(p.params,b.keys.filter(_=>!_.optional).concat(b.parent?b.parent.keys.filter(_=>_.optional):[]).map(_=>_.name)),u.params&&no(u.params,b.keys.map(_=>_.name))),f=b.stringify(m)}else if(u.path!=null)f=u.path,b=s.find(_=>_.re.test(f)),b&&(m=b.parse(f),h=b.record.name);else{if(b=p.name?n.get(p.name):s.find(_=>_.re.test(p.path)),!b)throw Ts(we.MATCHER_NOT_FOUND,{location:u,currentLocation:p});h=b.record.name,m=pe({},p.params,u.params),f=b.stringify(m)}const g=[];let y=b;for(;y;)g.unshift(y.record),y=y.parent;return{name:h,path:f,params:m,matched:g,meta:Xu(g)}}e.forEach(u=>r(u));function d(){s.length=0,n.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:d,getRoutes:i,getRecordMatcher:a}}function no(e,t){const s={};for(const n of t)n in e&&(s[n]=e[n]);return s}function ao(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Ju(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Ju(e){const t={},s=e.props||!1;if("component"in e)t.default=s;else for(const n in e.components)t[n]=typeof s=="object"?s[n]:s;return t}function ro(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Xu(e){return e.reduce((t,s)=>pe(t,s.meta),{})}function Qu(e,t){let s=0,n=t.length;for(;s!==n;){const r=s+n>>1;el(e,t[r])<0?n=r:s=r+1}const a=Zu(e);return a&&(n=t.lastIndexOf(a,n-1)),n}function Zu(e){let t=e;for(;t=t.parent;)if(tl(t)&&el(e,t)===0)return t}function tl({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function oo(e){const t=Ze($n),s=Ze(ar),n=ze(()=>{const l=jt(e.to);return t.resolve(l)}),a=ze(()=>{const{matched:l}=n.value,{length:c}=l,d=l[c-1],u=s.matched;if(!d||!u.length)return-1;const p=u.findIndex(vs.bind(null,d));if(p>-1)return p;const b=io(l[c-2]);return c>1&&io(d)===b&&u[u.length-1].path!==b?u.findIndex(vs.bind(null,l[c-2])):p}),r=ze(()=>a.value>-1&&ap(s.params,n.value.params)),o=ze(()=>a.value>-1&&a.value===s.matched.length-1&&Ji(s.params,n.value.params));function i(l={}){if(np(l)){const c=t[jt(e.replace)?"replace":"push"](jt(e.to)).catch(Fs);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:n,href:ze(()=>n.value.href),isActive:r,isExactActive:o,navigate:i}}function ep(e){return e.length===1?e[0]:e}const tp=pi({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:oo,setup(e,{slots:t}){const s=Pt(oo(e)),{options:n}=Ze($n),a=ze(()=>({[lo(e.activeClass,n.linkActiveClass,"router-link-active")]:s.isActive,[lo(e.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const r=t.default&&ep(t.default(s));return e.custom?r:sr("a",{"aria-current":s.isExactActive?e.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:a.value},r)}}}),sp=tp;function np(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function ap(e,t){for(const s in t){const n=t[s],a=e[s];if(typeof n=="string"){if(n!==a)return!1}else if(!it(a)||a.length!==n.length||n.some((r,o)=>r!==a[o]))return!1}return!0}function io(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const lo=(e,t,s)=>e??t??s,rp=pi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:s}){const n=Ze(Ra),a=ze(()=>e.route||n.value),r=Ze(Zr,0),o=ze(()=>{let c=jt(r);const{matched:d}=a.value;let u;for(;(u=d[c])&&!u.components;)c++;return c}),i=ze(()=>a.value.matched[o.value]);rn(Zr,ze(()=>o.value+1)),rn(Mu,i),rn(Ra,a);const l=Qe();return Ns(()=>[l.value,i.value,e.name],([c,d,u],[p,b,m])=>{d&&(d.instances[u]=c,b&&b!==d&&c&&c===p&&(d.leaveGuards.size||(d.leaveGuards=b.leaveGuards),d.updateGuards.size||(d.updateGuards=b.updateGuards))),c&&d&&(!b||!vs(d,b)||!p)&&(d.enterCallbacks[u]||[]).forEach(f=>f(c))},{flush:"post"}),()=>{const c=a.value,d=e.name,u=i.value,p=u&&u.components[d];if(!p)return co(s.default,{Component:p,route:c});const b=u.props[d],m=b?b===!0?c.params:typeof b=="function"?b(c):b:null,h=sr(p,pe({},m,t,{onVnodeUnmounted:g=>{g.component.isUnmounted&&(u.instances[d]=null)},ref:l}));return co(s.default,{Component:h,route:c})||h}}});function co(e,t){if(!e)return null;const s=e(t);return s.length===1?s[0]:s}const sl=rp;function op(e){const t=Vu(e.routes,e),s=e.parseQuery||Ru,n=e.stringifyQuery||Qr,a=e.history,r=As(),o=As(),i=As(),l=Wl(It);let c=It;ms&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=ea.bind(null,M=>""+M),u=ea.bind(null,hu),p=ea.bind(null,zs);function b(M,J){let j,ee;return Xi(M)?(j=t.getRecordMatcher(M),ee=J):ee=M,t.addRoute(ee,j)}function m(M){const J=t.getRecordMatcher(M);J&&t.removeRoute(J)}function f(){return t.getRoutes().map(M=>M.record)}function h(M){return!!t.getRecordMatcher(M)}function g(M,J){if(J=pe({},J||l.value),typeof M=="string"){const P=ta(s,M,J.path),D=t.resolve({path:P.path},J),B=a.createHref(P.fullPath);return pe(P,D,{params:p(D.params),hash:zs(P.hash),redirectedFrom:void 0,href:B})}let j;if(M.path!=null)j=pe({},M,{path:ta(s,M.path,J.path).path});else{const P=pe({},M.params);for(const D in P)P[D]==null&&delete P[D];j=pe({},M,{params:u(P)}),J.params=u(J.params)}const ee=t.resolve(j,J),le=M.hash||"";ee.params=d(p(ee.params));const v=bu(n,pe({},M,{hash:uu(le),path:ee.path})),T=a.createHref(v);return pe({fullPath:v,hash:le,query:n===Qr?Lu(M.query):M.query||{}},ee,{redirectedFrom:void 0,href:T})}function y(M){return typeof M=="string"?ta(s,M,l.value.path):pe({},M)}function _(M,J){if(c!==M)return Ts(we.NAVIGATION_CANCELLED,{from:J,to:M})}function S(M){return C(M)}function E(M){return S(pe(y(M),{replace:!0}))}function k(M,J){const j=M.matched[M.matched.length-1];if(j&&j.redirect){const{redirect:ee}=j;let le=typeof ee=="function"?ee(M,J):ee;return typeof le=="string"&&(le=le.includes("?")||le.includes("#")?le=y(le):{path:le},le.params={}),pe({query:M.query,hash:M.hash,params:le.path!=null?{}:M.params},le)}}function C(M,J){const j=c=g(M),ee=l.value,le=M.state,v=M.force,T=M.replace===!0,P=k(j,ee);if(P)return C(pe(y(P),{state:typeof P=="object"?pe({},le,P.state):le,force:v,replace:T}),J||j);const D=j;D.redirectedFrom=J;let B;return!v&&_u(n,ee,j)&&(B=Ts(we.NAVIGATION_DUPLICATED,{to:D,from:ee}),Z(ee,ee,!0,!1)),(B?Promise.resolve(B):w(D,ee)).catch(N=>St(N)?St(N,we.NAVIGATION_GUARD_REDIRECT)?N:te(N):F(N,D,ee)).then(N=>{if(N){if(St(N,we.NAVIGATION_GUARD_REDIRECT))return C(pe({replace:T},y(N.to),{state:typeof N.to=="object"?pe({},le,N.to.state):le,force:v}),J||D)}else N=A(D,ee,!0,T,le);return L(D,ee,N),N})}function R(M,J){const j=_(M,J);return j?Promise.reject(j):Promise.resolve()}function x(M){const J=Me.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(M):M()}function w(M,J){let j;const[ee,le,v]=Iu(M,J);j=na(ee.reverse(),"beforeRouteLeave",M,J);for(const P of ee)P.leaveGuards.forEach(D=>{j.push(Ft(D,M,J))});const T=R.bind(null,M,J);return j.push(T),Te(j).then(()=>{j=[];for(const P of r.list())j.push(Ft(P,M,J));return j.push(T),Te(j)}).then(()=>{j=na(le,"beforeRouteUpdate",M,J);for(const P of le)P.updateGuards.forEach(D=>{j.push(Ft(D,M,J))});return j.push(T),Te(j)}).then(()=>{j=[];for(const P of v)if(P.beforeEnter)if(it(P.beforeEnter))for(const D of P.beforeEnter)j.push(Ft(D,M,J));else j.push(Ft(P.beforeEnter,M,J));return j.push(T),Te(j)}).then(()=>(M.matched.forEach(P=>P.enterCallbacks={}),j=na(v,"beforeRouteEnter",M,J,x),j.push(T),Te(j))).then(()=>{j=[];for(const P of o.list())j.push(Ft(P,M,J));return j.push(T),Te(j)}).catch(P=>St(P,we.NAVIGATION_CANCELLED)?P:Promise.reject(P))}function L(M,J,j){i.list().forEach(ee=>x(()=>ee(M,J,j)))}function A(M,J,j,ee,le){const v=_(M,J);if(v)return v;const T=J===It,P=ms?history.state:{};j&&(ee||T?a.replace(M.fullPath,pe({scroll:T&&P&&P.scroll},le)):a.push(M.fullPath,le)),l.value=M,Z(M,J,j,T),te()}let G;function W(){G||(G=a.listen((M,J,j)=>{if(!Ee.listening)return;const ee=g(M),le=k(ee,Ee.currentRoute.value);if(le){C(pe(le,{replace:!0,force:!0}),ee).catch(Fs);return}c=ee;const v=l.value;ms&&Au(Xr(v.fullPath,j.delta),Fn()),w(ee,v).catch(T=>St(T,we.NAVIGATION_ABORTED|we.NAVIGATION_CANCELLED)?T:St(T,we.NAVIGATION_GUARD_REDIRECT)?(C(pe(y(T.to),{force:!0}),ee).then(P=>{St(P,we.NAVIGATION_ABORTED|we.NAVIGATION_DUPLICATED)&&!j.delta&&j.type===ka.pop&&a.go(-1,!1)}).catch(Fs),Promise.reject()):(j.delta&&a.go(-j.delta,!1),F(T,ee,v))).then(T=>{T=T||A(ee,v,!1),T&&(j.delta&&!St(T,we.NAVIGATION_CANCELLED)?a.go(-j.delta,!1):j.type===ka.pop&&St(T,we.NAVIGATION_ABORTED|we.NAVIGATION_DUPLICATED)&&a.go(-1,!1)),L(ee,v,T)}).catch(Fs)}))}let se=As(),U=As(),Y;function F(M,J,j){te(M);const ee=U.list();return ee.length?ee.forEach(le=>le(M,J,j)):console.error(M),Promise.reject(M)}function z(){return Y&&l.value!==It?Promise.resolve():new Promise((M,J)=>{se.add([M,J])})}function te(M){return Y||(Y=!M,W(),se.list().forEach(([J,j])=>M?j(M):J()),se.reset()),M}function Z(M,J,j,ee){const{scrollBehavior:le}=e;if(!ms||!le)return Promise.resolve();const v=!j&&Pu(Xr(M.fullPath,0))||(ee||!j)&&history.state&&history.state.scroll||null;return Va().then(()=>le(M,J,v)).then(T=>T&&xu(T)).catch(T=>F(T,M,J))}const ue=M=>a.go(M);let ge;const Me=new Set,Ee={currentRoute:l,listening:!0,addRoute:b,removeRoute:m,clearRoutes:t.clearRoutes,hasRoute:h,getRoutes:f,resolve:g,options:e,push:S,replace:E,go:ue,back:()=>ue(-1),forward:()=>ue(1),beforeEach:r.add,beforeResolve:o.add,afterEach:i.add,onError:U.add,isReady:z,install(M){M.component("RouterLink",sp),M.component("RouterView",sl),M.config.globalProperties.$router=Ee,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>jt(l)}),ms&&!ge&&l.value===It&&(ge=!0,S(a.location).catch(ee=>{}));const J={};for(const ee in It)Object.defineProperty(J,ee,{get:()=>l.value[ee],enumerable:!0});M.provide($n,Ee),M.provide(ar,Qo(J)),M.provide(Ra,l);const j=M.unmount;Me.add(M),M.unmount=function(){Me.delete(M),Me.size<1&&(c=It,G&&G(),G=null,l.value=It,ge=!1,Y=!1),j()}}};function Te(M){return M.reduce((J,j)=>J.then(()=>x(j)),Promise.resolve())}return Ee}function yt(){return Ze($n)}function nl(e){return Ze(ar)}var ip=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function lp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Os={exports:{}},cp=Os.exports,uo;function dp(){return uo||(uo=1,(function(e,t){(function(s,n){var a={};s.PubSub?(a=s.PubSub,console.warn("PubSub already loaded, using existing version")):(s.PubSub=a,n(a)),e!==void 0&&e.exports&&(t=e.exports=a),t.PubSub=a,e.exports=t=a})(typeof window=="object"&&window||cp||ip,function(s){var n={},a=-1,r="*";function o(f){var h;for(h in f)if(Object.prototype.hasOwnProperty.call(f,h))return!0;return!1}function i(f){return function(){throw f}}function l(f,h,g){try{f(h,g)}catch(y){setTimeout(i(y),0)}}function c(f,h,g){f(h,g)}function d(f,h,g,y){var _=n[h],S=y?c:l,E;if(Object.prototype.hasOwnProperty.call(n,h))for(E in _)Object.prototype.hasOwnProperty.call(_,E)&&S(_[E],f,g)}function u(f,h,g){return function(){var _=String(f),S=_.lastIndexOf(".");for(d(f,f,h,g);S!==-1;)_=_.substr(0,S),S=_.lastIndexOf("."),d(f,_,h,g);d(f,r,h,g)}}function p(f){var h=String(f),g=!!(Object.prototype.hasOwnProperty.call(n,h)&&o(n[h]));return g}function b(f){for(var h=String(f),g=p(h)||p(r),y=h.lastIndexOf(".");!g&&y!==-1;)h=h.substr(0,y),y=h.lastIndexOf("."),g=p(h);return g}function m(f,h,g,y){f=typeof f=="symbol"?f.toString():f;var _=u(f,h,y),S=b(f);return S?(g===!0?_():setTimeout(_,0),!0):!1}s.publish=function(f,h){return m(f,h,!1,s.immediateExceptions)},s.publishSync=function(f,h){return m(f,h,!0,s.immediateExceptions)},s.subscribe=function(f,h){if(typeof h!="function")return!1;f=typeof f=="symbol"?f.toString():f,Object.prototype.hasOwnProperty.call(n,f)||(n[f]={});var g="uid_"+String(++a);return n[f][g]=h,g},s.subscribeAll=function(f){return s.subscribe(r,f)},s.subscribeOnce=function(f,h){var g=s.subscribe(f,function(){s.unsubscribe(g),h.apply(this,arguments)});return s},s.clearAllSubscriptions=function(){n={}},s.clearSubscriptions=function(h){var g;for(g in n)Object.prototype.hasOwnProperty.call(n,g)&&g.indexOf(h)===0&&delete n[g]},s.countSubscriptions=function(h){var g,y,_=0;for(g in n)if(Object.prototype.hasOwnProperty.call(n,g)&&g.indexOf(h)===0){for(y in n[g])_++;break}return _},s.getSubscriptions=function(h){var g,y=[];for(g in n)Object.prototype.hasOwnProperty.call(n,g)&&g.indexOf(h)===0&&y.push(g);return y},s.unsubscribe=function(f){var h=function(R){var x;for(x in n)if(Object.prototype.hasOwnProperty.call(n,x)&&x.indexOf(R)===0)return!0;return!1},g=typeof f=="string"&&(Object.prototype.hasOwnProperty.call(n,f)||h(f)),y=!g&&typeof f=="string",_=typeof f=="function",S=!1,E,k,C;if(g){s.clearSubscriptions(f);return}for(E in n)if(Object.prototype.hasOwnProperty.call(n,E)){if(k=n[E],y&&k[f]){delete k[f],S=f;break}if(_)for(C in k)Object.prototype.hasOwnProperty.call(k,C)&&k[C]===f&&(delete k[C],S=!0)}return S}})})(Os,Os.exports)),Os.exports}var up=dp();const Q=lp(up);let Kt=[{key:"americanfootball_cfl",group:"American Football",title:"CFL",description:"Canadian Football League",active:!0,has_outrights:!1},{key:"americanfootball_ncaaf",group:"American Football",title:"NCAAF",description:"US College Football",active:!0,has_outrights:!1},{key:"americanfootball_ncaaf_championship_winner",group:"American Football",title:"NCAAF Championship Winner",description:"US College Football Championship Winner",active:!0,has_outrights:!0},{key:"americanfootball_nfl",group:"American Football",title:"NFL",description:"US Football",active:!0,has_outrights:!1},{key:"americanfootball_nfl_super_bowl_winner",group:"American Football",title:"NFL Super Bowl Winner",description:"Super Bowl Winner 2025/2026",active:!1,has_outrights:!0},{key:"aussierules_afl",group:"Aussie Rules",title:"AFL",description:"Aussie Football",active:!1,has_outrights:!1},{key:"baseball_kbo",group:"Baseball",title:"KBO",description:"KBO League",active:!1,has_outrights:!1},{key:"baseball_milb",group:"Baseball",title:"MiLB",description:"Minor League Baseball",active:!1,has_outrights:!1},{key:"baseball_mlb",group:"Baseball",title:"MLB",description:"Major League Baseball",active:!0,has_outrights:!1},{key:"baseball_mlb_world_series_winner",group:"Baseball",title:"MLB World Series Winner",description:"World Series Winner 2025",active:!1,has_outrights:!0},{key:"baseball_npb",group:"Baseball",title:"NPB",description:"Nippon Professional Baseball",active:!0,has_outrights:!1},{key:"basketball_euroleague",group:"Basketball",title:"Basketball Euroleague",description:"Basketball Euroleague",active:!1,has_outrights:!1},{key:"basketball_nba",group:"Basketball",title:"NBA",description:"US Basketball",active:!0,has_outrights:!1},{key:"basketball_nba_championship_winner",group:"Basketball",title:"NBA Championship Winner",description:"Championship Winner 2025/2026",active:!1,has_outrights:!0},{key:"basketball_nbl",group:"Basketball",title:"NBL",description:"AU National Basketball League",active:!1,has_outrights:!1},{key:"basketball_ncaab",group:"Basketball",title:"NCAAB",description:"US College Basketball",active:!0,has_outrights:!0},{key:"basketball_ncaab_championship_winner",group:"Basketball",title:"NCAAB Championship Winner",description:"US College Basketball Championship Winner",active:!0,has_outrights:!0},{key:"basketball_wnba",group:"Basketball",title:"WNBA",description:"US Basketball",active:!0,has_outrights:!1},{key:"boxing_boxing",group:"Boxing",title:"Boxing",description:"Boxing Bouts",active:!0,has_outrights:!1},{key:"cricket_asia_cup",group:"Cricket",title:"Asia Cup",description:"Asia Cup",active:!1,has_outrights:!1},{key:"cricket_international_t20",group:"Cricket",title:"International Twenty20",description:"International Twenty20",active:!0,has_outrights:!1},{key:"golf_masters_tournament_winner",group:"Golf",title:"Masters Tournament Winner",description:"2026 Winner",active:!0,has_outrights:!0},{key:"icehockey_liiga",group:"Ice Hockey",title:"Liiga",description:"Finnish SM League",active:!1,has_outrights:!1},{key:"icehockey_mestis",group:"Ice Hockey",title:"Mestis",description:"Finnish Mestis League",active:!1,has_outrights:!1},{key:"icehockey_nhl",group:"Ice Hockey",title:"NHL",description:"US Ice Hockey",active:!0,has_outrights:!1},{key:"icehockey_nhl_championship_winner",group:"Ice Hockey",title:"NHL Championship Winner",description:"Stanley Cup Winner 2025/2026",active:!1,has_outrights:!0},{key:"icehockey_sweden_allsvenskan",group:"Ice Hockey",title:"HockeyAllsvenskan",description:"Swedish Hockey Allsvenskan",active:!1,has_outrights:!1},{key:"icehockey_sweden_hockey_league",group:"Ice Hockey",title:"SHL",description:"Swedish Hockey League",active:!1,has_outrights:!1},{key:"mma_mixed_martial_arts",group:"Mixed Martial Arts",title:"MMA",description:"Mixed Martial Arts",active:!0,has_outrights:!1},{key:"politics_us_presidential_election_winner",group:"Politics",title:"US Presidential Elections Winner",description:"2028 US Presidential Election Winner",active:!1,has_outrights:!0},{key:"rugbyleague_nrl",group:"Rugby League",title:"NRL",description:"Aussie Rugby League",active:!1,has_outrights:!1},{key:"soccer_argentina_primera_division",group:"Soccer",title:"Primera División - Argentina",description:"Argentine Primera División",active:!1,has_outrights:!1},{key:"soccer_australia_aleague",group:"Soccer",title:"A-League",description:"Aussie Soccer",active:!1,has_outrights:!1},{key:"soccer_austria_bundesliga",group:"Soccer",title:"Austrian Football Bundesliga",description:"Austrian Soccer",active:!1,has_outrights:!1},{key:"soccer_belgium_first_div",group:"Soccer",title:"Belgium First Div",description:"Belgian First Division A",active:!1,has_outrights:!1},{key:"soccer_brazil_campeonato",group:"Soccer",title:"Brazil Série A",description:"Brasileirão Série A",active:!1,has_outrights:!1},{key:"soccer_brazil_serie_b",group:"Soccer",title:"Brazil Série B",description:"Campeonato Brasileiro Série B",active:!1,has_outrights:!1},{key:"soccer_chile_campeonato",group:"Soccer",title:"Primera División - Chile",description:"Campeonato Chileno",active:!1,has_outrights:!1},{key:"soccer_china_superleague",group:"Soccer",title:"Super League - China",description:"Chinese Soccer",active:!1,has_outrights:!1},{key:"soccer_conmebol_copa_libertadores",group:"Soccer",title:"Copa Libertadores",description:"CONMEBOL Copa Libertadores",active:!1,has_outrights:!1},{key:"soccer_conmebol_copa_sudamericana",group:"Soccer",title:"Copa Sudamericana",description:"CONMEBOL Copa Sudamericana",active:!1,has_outrights:!1},{key:"soccer_denmark_superliga",group:"Soccer",title:"Denmark Superliga",description:"Danish Soccer",active:!1,has_outrights:!1},{key:"soccer_efl_champ",group:"Soccer",title:"Championship",description:"EFL Championship",active:!1,has_outrights:!1},{key:"soccer_england_league1",group:"Soccer",title:"League 1",description:"EFL League 1",active:!1,has_outrights:!1},{key:"soccer_england_league2",group:"Soccer",title:"League 2",description:"EFL League 2 ",active:!1,has_outrights:!1},{key:"soccer_epl",group:"Soccer",title:"EPL",description:"English Premier League",active:!0,has_outrights:!1},{key:"soccer_fifa_world_cup_qualifiers_europe",group:"Soccer",title:"FIFA World Cup Qualifiers - Europe",description:"FIFA World Cup Qualifiers - UEFA",active:!0,has_outrights:!1},{key:"soccer_fifa_world_cup_winner",group:"Soccer",title:"FIFA World Cup Winner",description:"FIFA World Cup Winner 2026",active:!1,has_outrights:!0},{key:"soccer_finland_veikkausliiga",group:"Soccer",title:"Veikkausliiga - Finland",description:"Finnish  Soccer",active:!1,has_outrights:!1},{key:"soccer_france_ligue_one",group:"Soccer",title:"Ligue 1 - France",description:"French Soccer",active:!1,has_outrights:!1},{key:"soccer_france_ligue_two",group:"Soccer",title:"Ligue 2 - France",description:"French Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_bundesliga",group:"Soccer",title:"Bundesliga - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_bundesliga2",group:"Soccer",title:"Bundesliga 2 - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_liga3",group:"Soccer",title:"3. Liga - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_greece_super_league",group:"Soccer",title:"Super League - Greece",description:"Greek Soccer",active:!1,has_outrights:!1},{key:"soccer_italy_serie_a",group:"Soccer",title:"Serie A - Italy",description:"Italian Soccer",active:!1,has_outrights:!1},{key:"soccer_italy_serie_b",group:"Soccer",title:"Serie B - Italy",description:"Italian Soccer",active:!1,has_outrights:!1},{key:"soccer_japan_j_league",group:"Soccer",title:"J League",description:"Japan Soccer League",active:!1,has_outrights:!1},{key:"soccer_korea_kleague1",group:"Soccer",title:"K League 1",description:"Korean Soccer",active:!1,has_outrights:!1},{key:"soccer_league_of_ireland",group:"Soccer",title:"League of Ireland",description:"Airtricity League Premier Division",active:!1,has_outrights:!1},{key:"soccer_mexico_ligamx",group:"Soccer",title:"Liga MX",description:"Mexican Soccer",active:!1,has_outrights:!1},{key:"soccer_netherlands_eredivisie",group:"Soccer",title:"Dutch Eredivisie",description:"Dutch Soccer",active:!1,has_outrights:!1},{key:"soccer_norway_eliteserien",group:"Soccer",title:"Eliteserien - Norway",description:"Norwegian Soccer",active:!1,has_outrights:!1},{key:"soccer_poland_ekstraklasa",group:"Soccer",title:"Ekstraklasa - Poland",description:"Polish Soccer",active:!1,has_outrights:!1},{key:"soccer_portugal_primeira_liga",group:"Soccer",title:"Primeira Liga - Portugal",description:"Portugese Soccer",active:!1,has_outrights:!1},{key:"soccer_spain_la_liga",group:"Soccer",title:"La Liga - Spain",description:"Spanish Soccer",active:!1,has_outrights:!1},{key:"soccer_spain_segunda_division",group:"Soccer",title:"La Liga 2 - Spain",description:"Spanish Soccer",active:!1,has_outrights:!1},{key:"soccer_spl",group:"Soccer",title:"Premiership - Scotland",description:"Scottish Premiership",active:!1,has_outrights:!1},{key:"soccer_sweden_allsvenskan",group:"Soccer",title:"Allsvenskan - Sweden",description:"Swedish Soccer",active:!1,has_outrights:!1},{key:"soccer_sweden_superettan",group:"Soccer",title:"Superettan - Sweden",description:"Swedish Soccer",active:!1,has_outrights:!1},{key:"soccer_switzerland_superleague",group:"Soccer",title:"Swiss Superleague",description:"Swiss Soccer",active:!1,has_outrights:!1},{key:"soccer_turkey_super_league",group:"Soccer",title:"Turkey Super League",description:"Turkish Soccer",active:!1,has_outrights:!1},{key:"soccer_uefa_champs_league",group:"Soccer",title:"UEFA Champions League",description:"European Champions League",active:!0,has_outrights:!1},{key:"soccer_uefa_europa_conference_league",group:"Soccer",title:"UEFA Europa Conference League",description:"UEFA Europa Conference League",active:!1,has_outrights:!1},{key:"soccer_uefa_europa_league",group:"Soccer",title:"UEFA Europa League",description:"European Europa League",active:!1,has_outrights:!1},{key:"soccer_usa_mls",group:"Soccer",title:"MLS",description:"Major League Soccer",active:!1,has_outrights:!1},{key:"tennis_atp_china_open",group:"Tennis",title:"ATP China Open",description:"Men's Singles",active:!1,has_outrights:!1},{key:"tennis_wta_china_open",group:"Tennis",title:"WTA China Open",description:"Women's Singles",active:!1,has_outrights:!1}];const pp={getMeta(){return{language:[{lang:"Abkhazian",code:"ab",enabled:!1,copy:[["key","value"]]},{lang:"Afar",code:"aa",enabled:!1,copy:[["key","value"]]},{lang:"Afrikaans",code:"af",enabled:!1,copy:[["key","value"]]},{lang:"Akan",code:"ak",enabled:!1,copy:[["key","value"]]},{lang:"Albanian",code:"sq",enabled:!1,copy:[["key","value"]]},{lang:"Amharic",code:"am",enabled:!1,copy:[["key","value"]]},{lang:"Arabic",code:"ar",enabled:!1,copy:[["key","value"]]},{lang:"Aragonese",code:"an",enabled:!1,copy:[["key","value"]]},{lang:"Armenian",code:"hy",enabled:!1,copy:[["key","value"]]},{lang:"Assamese",code:"as",enabled:!1,copy:[["key","value"]]},{lang:"Avaric",code:"av",enabled:!1,copy:[["key","value"]]},{lang:"Avestan",code:"ae",enabled:!1,copy:[["key","value"]]},{lang:"Aymara",code:"ay",enabled:!1,copy:[["key","value"]]},{lang:"Azerbaijani",code:"az",enabled:!1,copy:[["key","value"]]},{lang:"Bambara",code:"bm",enabled:!1,copy:[["key","value"]]},{lang:"Bashkir",code:"ba",enabled:!1,copy:[["key","value"]]},{lang:"Basque",code:"eu",enabled:!1,copy:[["key","value"]]},{lang:"Belarusian",code:"be",enabled:!1,copy:[["key","value"]]},{lang:"Bengali (Bangla)",code:"bn",enabled:!1,copy:[["key","value"]]},{lang:"Bihari",code:"bh",enabled:!1,copy:[["key","value"]]},{lang:"Bislama",code:"bi",enabled:!1,copy:[["key","value"]]},{lang:"Bosnian",code:"bs",enabled:!1,copy:[["key","value"]]},{lang:"Breton",code:"br",enabled:!1,copy:[["key","value"]]},{lang:"Bulgarian",code:"bg",enabled:!1,copy:[["key","value"]]},{lang:"Burmese",code:"my",enabled:!1,copy:[["key","value"]]},{lang:"Catalan",code:"ca",enabled:!1,copy:[["key","value"]]},{lang:"Chamorro",code:"ch",enabled:!1,copy:[["key","value"]]},{lang:"Chechen",code:"ce",enabled:!1,copy:[["key","value"]]},{lang:"Chichewa, Chewa, Nyanja",code:"ny",enabled:!1,copy:[["key","value"]]},{lang:"Chinese",code:"zh",enabled:!1,copy:[["key","value"]]},{lang:"Chinese (Simplified)",code:"zh-Hans",enabled:!1,copy:[["welcome_back","欢迎回来"],["please_enter_your_details","请输入您的详细信息"],["email","电子邮件"],["enter_your_email","输入您的电子邮件"],["password","密码"],["enter_your_password","输入您的密码"],["enter_email_and_password","输入邮箱和密码"],["sign_in","登入"],["forgot_password","忘记密码"],["dont_have_an_account","沒有帳戶？"],["sign_up","报名"],["please_enter_your_details_to_get_started","请输入您的详细信息以开始"],["already_have_an_account","已有账户？"],["log_in","登录"],["name","姓名"],["enter_your_name","输入您的姓名"]]},{lang:"Chinese (Traditional)",code:"zh-Hant",enabled:!1,copy:[["key","value"]]},{lang:"Chuvash",code:"cv",enabled:!1,copy:[["key","value"]]},{lang:"Cornish",code:"kw",enabled:!1,copy:[["key","value"]]},{lang:"Corsican",code:"co",enabled:!1,copy:[["key","value"]]},{lang:"Cree",code:"cr",enabled:!1,copy:[["key","value"]]},{lang:"Croatian",code:"hr",enabled:!1,copy:[["key","value"]]},{lang:"Czech",code:"cs",enabled:!1,copy:[["key","value"]]},{lang:"Danish",code:"da",enabled:!1,copy:[["key","value"]]},{lang:"Divehi, Dhivehi, Maldivian",code:"dv",enabled:!1,copy:[["key","value"]]},{lang:"Dutch",code:"nl",enabled:!1,copy:[["key","value"]]},{lang:"Dzongkha",code:"dz",enabled:!1,copy:[["key","value"]]},{lang:"English",code:"en",enabled:!0,copy:[["welcome_back","Welcome Back"],["please_enter_your_details","Please Enter your Details"],["email","Email"],["enter_your_email","Enter your email"],["password","Password"],["enter_your_password","Enter your password"],["enter_email_and_password","Enter Email and Password"],["sign_in","Sign in"],["forgot_password","Forgot Password"],["dont_have_an_account","Don't have an account?"],["sign_up","Sign up"],["please_enter_your_details_to_get_started","Please enter your details to get started"],["already_have_an_account","Already have an account?"],["log_in","Sign in"],["name","Name"],["enter_your_name","Enter your name"]]},{lang:"Esperanto",code:"eo",enabled:!1,copy:[["key","value"]]},{lang:"Estonian",code:"et",enabled:!1,copy:[["key","value"]]},{lang:"Ewe",code:"ee",enabled:!1,copy:[["key","value"]]},{lang:"Faroese",code:"fo",enabled:!1,copy:[["key","value"]]},{lang:"Fijian",code:"fj",enabled:!1,copy:[["key","value"]]},{lang:"Finnish",code:"fi",enabled:!1,copy:[["key","value"]]},{lang:"French",code:"fr",enabled:!1,copy:[["key","value"]]},{lang:"Fula, Fulah, Pulaar, Pular",code:"ff",enabled:!1,copy:[["key","value"]]},{lang:"Galician",code:"gl",enabled:!1,copy:[["key","value"]]},{lang:"Gaelic (Scottish)",code:"gd",enabled:!1,copy:[["key","value"]]},{lang:"Gaelic (Manx)",code:"gv",enabled:!1,copy:[["key","value"]]},{lang:"Georgian",code:"ka",enabled:!1,copy:[["key","value"]]},{lang:"German",code:"de",enabled:!1,copy:[["key","value"]]},{lang:"Greek",code:"el",enabled:!1,copy:[["key","value"]]},{lang:"Greenlandic",code:"kl",enabled:!1,copy:[["key","value"]]},{lang:"Guarani",code:"gn",enabled:!1,copy:[["key","value"]]},{lang:"Gujarati",code:"gu",enabled:!1,copy:[["key","value"]]},{lang:"Haitian Creole",code:"ht",enabled:!1,copy:[["key","value"]]},{lang:"Hausa",code:"ha",enabled:!1,copy:[["key","value"]]},{lang:"Hebrew",code:"he",enabled:!1,copy:[["key","value"]]},{lang:"Herero",code:"hz",enabled:!1,copy:[["key","value"]]},{lang:"Hindi",code:"hi",enabled:!1,copy:[["key","value"]]},{lang:"Hiri Motu",code:"ho",enabled:!1,copy:[["key","value"]]},{lang:"Hungarian",code:"hu",enabled:!1,copy:[["key","value"]]},{lang:"Icelandic",code:"is",enabled:!1,copy:[["key","value"]]},{lang:"Ido",code:"io",enabled:!1,copy:[["key","value"]]},{lang:"Igbo",code:"ig",enabled:!1,copy:[["key","value"]]},{lang:"Indonesian",code:"id, in",enabled:!1,copy:[["key","value"]]},{lang:"Interlingua",code:"ia",enabled:!1,copy:[["key","value"]]},{lang:"Interlingue",code:"ie",enabled:!1,copy:[["key","value"]]},{lang:"Inuktitut",code:"iu",enabled:!1,copy:[["key","value"]]},{lang:"Inupiak",code:"ik",enabled:!1,copy:[["key","value"]]},{lang:"Irish",code:"ga",enabled:!1,copy:[["key","value"]]},{lang:"Italian",code:"it",enabled:!0,copy:[["welcome_back","Bentornato"],["please_enter_your_details","Per favore, inserisci i tuoi dati"],["email","E-mail"],["enter_your_email","Inserisci la tua email"],["password","Password"],["enter_your_password","Inserisci la tua password"],["enter_email_and_password","Inserisci email e password"],["sign_in","Registrazione"],["forgot_password","Ha dimenticato la password"],["dont_have_an_account","Non hai un account?"],["sign_up","Iscrizione"],["please_enter_your_details_to_get_started","Inserisci i tuoi dati per iniziare"],["already_have_an_account","Hai già un account?"],["log_in","Login"],["name","Nome"],["enter_your_name","Inserisci il tuo nome"]]},{lang:"Japanese",code:"ja",enabled:!1,copy:[["key","value"]]},{lang:"Javanese",code:"jv",enabled:!1,copy:[["key","value"]]},{lang:"Kalaallisut, Greenlandic",code:"kl",enabled:!1,copy:[["key","value"]]},{lang:"Kannada",code:"kn",enabled:!1,copy:[["key","value"]]},{lang:"Kanuri",code:"kr",enabled:!1,copy:[["key","value"]]},{lang:"Kashmiri",code:"ks",enabled:!1,copy:[["key","value"]]},{lang:"Kazakh",code:"kk",enabled:!1,copy:[["key","value"]]},{lang:"Khmer",code:"km",enabled:!1,copy:[["key","value"]]},{lang:"Kikuyu",code:"ki",enabled:!1,copy:[["key","value"]]},{lang:"Kinyarwanda (Rwanda)",code:"rw",enabled:!1,copy:[["key","value"]]},{lang:"Kirundi",code:"rn",enabled:!1,copy:[["key","value"]]},{lang:"Kyrgyz",code:"ky",enabled:!1,copy:[["key","value"]]},{lang:"Komi",code:"kv",enabled:!1,copy:[["key","value"]]},{lang:"Kongo",code:"kg",enabled:!1,copy:[["key","value"]]},{lang:"Korean",code:"ko",enabled:!1,copy:[["key","value"]]},{lang:"Kurdish",code:"ku",enabled:!1,copy:[["key","value"]]},{lang:"Kwanyama",code:"kj",enabled:!1,copy:[["key","value"]]},{lang:"Lao",code:"lo",enabled:!1,copy:[["key","value"]]},{lang:"Latin",code:"la",enabled:!0,copy:[["key","value"]]},{lang:"Latvian (Lettish)",code:"lv",enabled:!1,copy:[["key","value"]]},{lang:"Limburgish ( Limburger)",code:"li",enabled:!1,copy:[["key","value"]]},{lang:"Lingala",code:"ln",enabled:!1,copy:[["key","value"]]},{lang:"Lithuanian",code:"lt",enabled:!1,copy:[["key","value"]]},{lang:"Luga-Katanga",code:"lu",enabled:!1,copy:[["key","value"]]},{lang:"Luganda, Ganda",code:"lg",enabled:!1,copy:[["key","value"]]},{lang:"Luxembourgish",code:"lb",enabled:!1,copy:[["key","value"]]},{lang:"Manx",code:"gv",enabled:!1,copy:[["key","value"]]},{lang:"Macedonian",code:"mk",enabled:!1,copy:[["key","value"]]},{lang:"Malagasy",code:"mg",enabled:!1,copy:[["key","value"]]},{lang:"Malay",code:"ms",enabled:!1,copy:[["key","value"]]},{lang:"Malayalam",code:"ml",enabled:!1,copy:[["key","value"]]},{lang:"Maltese",code:"mt",enabled:!1,copy:[["key","value"]]},{lang:"Maori",code:"mi",enabled:!1,copy:[["key","value"]]},{lang:"Marathi",code:"mr",enabled:!1,copy:[["key","value"]]},{lang:"Marshallese",code:"mh",enabled:!1,copy:[["key","value"]]},{lang:"Moldavian",code:"mo",enabled:!1,copy:[["key","value"]]},{lang:"Mongolian",code:"mn",enabled:!1,copy:[["key","value"]]},{lang:"Nauru",code:"na",enabled:!1,copy:[["key","value"]]},{lang:"Navajo",code:"nv",enabled:!1,copy:[["key","value"]]},{lang:"Ndonga",code:"ng",enabled:!1,copy:[["key","value"]]},{lang:"Northern Ndebele",code:"nd",enabled:!1,copy:[["key","value"]]},{lang:"Nepali",code:"ne",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian",code:"no",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian bokmål",code:"nb",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian nynorsk",code:"nn",enabled:!1,copy:[["key","value"]]},{lang:"Nuosu",code:"ii",enabled:!1,copy:[["key","value"]]},{lang:"Occitan",code:"oc",enabled:!1,copy:[["key","value"]]},{lang:"Ojibwe",code:"oj",enabled:!1,copy:[["key","value"]]},{lang:"Old Church Slavonic, Old Bulgarian",code:"cu",enabled:!1,copy:[["key","value"]]},{lang:"Oriya",code:"or",enabled:!1,copy:[["key","value"]]},{lang:"Oromo (Afaan Oromo)",code:"om",enabled:!1,copy:[["key","value"]]},{lang:"Ossetian",code:"os",enabled:!1,copy:[["key","value"]]},{lang:"Pāli",code:"pi",enabled:!1,copy:[["key","value"]]},{lang:"Pashto, Pushto",code:"ps",enabled:!1,copy:[["key","value"]]},{lang:"Persian (Farsi)",code:"fa",enabled:!1,copy:[["key","value"]]},{lang:"Polish",code:"pl",enabled:!1,copy:[["key","value"]]},{lang:"Portuguese",code:"pt",enabled:!1,copy:[["key","value"]]},{lang:"Punjabi (Eastern)",code:"pa",enabled:!1,copy:[["key","value"]]},{lang:"Quechua",code:"qu",enabled:!1,copy:[["key","value"]]},{lang:"Romansh",code:"rm",enabled:!1,copy:[["key","value"]]},{lang:"Romanian",code:"ro",enabled:!1,copy:[["key","value"]]},{lang:"Russian",code:"ru",enabled:!1,copy:[["key","value"]]},{lang:"Sami",code:"se",enabled:!1,copy:[["key","value"]]},{lang:"Samoan",code:"sm",enabled:!1,copy:[["key","value"]]},{lang:"Sango",code:"sg",enabled:!1,copy:[["key","value"]]},{lang:"Sanskrit",code:"sa",enabled:!1,copy:[["key","value"]]},{lang:"Serbian",code:"sr",enabled:!1,copy:[["key","value"]]},{lang:"Serbo-Croatian",code:"sh",enabled:!1,copy:[["key","value"]]},{lang:"Sesotho",code:"st",enabled:!1,copy:[["key","value"]]},{lang:"Setswana",code:"tn",enabled:!1,copy:[["key","value"]]},{lang:"Shona",code:"sn",enabled:!1,copy:[["key","value"]]},{lang:"Sichuan Yi",code:"ii",enabled:!1,copy:[["key","value"]]},{lang:"Sindhi",code:"sd",enabled:!1,copy:[["key","value"]]},{lang:"Sinhalese",code:"si",enabled:!1,copy:[["key","value"]]},{lang:"Siswati",code:"ss",enabled:!1,copy:[["key","value"]]},{lang:"Slovak",code:"sk",enabled:!1,copy:[["key","value"]]},{lang:"Slovenian",code:"sl",enabled:!1,copy:[["key","value"]]},{lang:"Somali",code:"so",enabled:!1,copy:[["key","value"]]},{lang:"Southern Ndebele",code:"nr",enabled:!1,copy:[["key","value"]]},{lang:"Spanish",code:"es",enabled:!1,copy:[["key","value"]]},{lang:"Sundanese",code:"su",enabled:!1,copy:[["key","value"]]},{lang:"Swahili (Kiswahili)",code:"sw",enabled:!1,copy:[["key","value"]]},{lang:"Swati",code:"ss",enabled:!1,copy:[["key","value"]]},{lang:"Swedish",code:"sv",enabled:!1,copy:[["key","value"]]},{lang:"Tagalog",code:"tl",enabled:!1,copy:[["key","value"]]},{lang:"Tahitian",code:"ty",enabled:!1,copy:[["key","value"]]},{lang:"Tajik",code:"tg",enabled:!1,copy:[["key","value"]]},{lang:"Tamil",code:"ta",enabled:!1,copy:[["key","value"]]},{lang:"Tatar",code:"tt",enabled:!1,copy:[["key","value"]]},{lang:"Telugu",code:"te",enabled:!1,copy:[["key","value"]]},{lang:"Thai",code:"th",enabled:!1,copy:[["key","value"]]},{lang:"Tibetan",code:"bo",enabled:!1,copy:[["key","value"]]},{lang:"Tigrinya",code:"ti",enabled:!1,copy:[["key","value"]]},{lang:"Tonga",code:"to",enabled:!1,copy:[["key","value"]]},{lang:"Tsonga",code:"ts",enabled:!1,copy:[["key","value"]]},{lang:"Turkish",code:"tr",enabled:!1,copy:[["key","value"]]},{lang:"Turkmen",code:"tk",enabled:!1,copy:[["key","value"]]},{lang:"Twi",code:"tw",enabled:!1,copy:[["key","value"]]},{lang:"Uyghur",code:"ug",enabled:!1,copy:[["key","value"]]},{lang:"Ukrainian",code:"uk",enabled:!1,copy:[["key","value"]]},{lang:"Urdu",code:"ur",enabled:!1,copy:[["key","value"]]},{lang:"Uzbek",code:"uz",enabled:!1,copy:[["key","value"]]},{lang:"Venda",code:"ve",enabled:!1,copy:[["key","value"]]},{lang:"Vietnamese",code:"vi",enabled:!1,copy:[["key","value"]]},{lang:"Volapük",code:"vo",enabled:!1,copy:[["key","value"]]},{lang:"Wallon",code:"wa",enabled:!1,copy:[["key","value"]]},{lang:"Welsh",code:"cy",enabled:!1,copy:[["key","value"]]},{lang:"Wolof",code:"wo",enabled:!1,copy:[["key","value"]]},{lang:"Western Frisian",code:"fy",enabled:!1,copy:[["key","value"]]},{lang:"Xhosa",code:"xh",enabled:!1,copy:[["key","value"]]},{lang:"Yiddish",code:"yi, ji",enabled:!1,copy:[["key","value"]]},{lang:"Yoruba",code:"yo",enabled:!1,copy:[["key","value"]]},{lang:"Zhuang, Chuang",code:"za",enabled:!1,copy:[["key","value"]]},{lang:"Zulu",code:"zu",enabled:!1,copy:[["key","value"]]}]}}};function Wt(e){return new Promise((t,s)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>s(e.error)})}function fp(e,t){let s;const n=()=>{if(s)return s;const a=indexedDB.open(e);return a.onupgradeneeded=()=>a.result.createObjectStore(t),s=Wt(a),s.then(r=>{r.onclose=()=>s=void 0},()=>{}),s};return(a,r)=>n().then(o=>r(o.transaction(t,a).objectStore(t)))}let aa;function Js(){return aa||(aa=fp("keyval-store","keyval")),aa}function hp(e,t=Js()){return t("readonly",s=>Wt(s.get(e)))}function po(e,t,s=Js()){return s("readwrite",n=>(n.put(t,e),Wt(n.transaction)))}function ra(e,t=Js()){return t("readwrite",s=>(s.delete(e),Wt(s.transaction)))}function al(e,t){return e.openCursor().onsuccess=function(){this.result&&(t(this.result),this.result.continue())},Wt(e.transaction)}function hs(e=Js()){return e("readonly",t=>{if(t.getAllKeys)return Wt(t.getAllKeys());const s=[];return al(t,n=>s.push(n.key)).then(()=>s)})}function gp(e=Js()){return e("readonly",t=>{if(t.getAll&&t.getAllKeys)return Promise.all([Wt(t.getAllKeys()),Wt(t.getAll())]).then(([n,a])=>n.map((r,o)=>[r,a[o]]));const s=[];return e("readonly",n=>al(n,a=>s.push([a.key,a.value])).then(()=>s))})}const Ss=e=>e!==null&&Object.prototype.toString.call(e)==="[object Object]",vn=(e,t)=>{if(e===t)return!0;if(typeof e!=typeof t)return!1;if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;for(let s=0;s<e.length;s+=1)if(!vn(e[s],t[s]))return!1;return!0}if(Ss(e)&&Ss(t)){const s=Object.entries(e),n=new Set(Object.keys(t));if(s.length!==n.size)return!1;for(const[a,r]of s){if(!vn(r,t[a]))return!1;n.delete(a)}return n.size===0}return!1},tn=e=>{if(e===""||e===!1||e===null||e===void 0||Array.isArray(e)&&e.length===0)return!0;if(Ss(e)){for(const t in e)if(e.hasOwnProperty(t))return!1;return!0}return!1},mp=e=>e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="_",fo=e=>e>="0"&&e<="9"||e==="-",bp=e=>e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="_";var O;(function(e){e.TOK_EOF="EOF",e.TOK_UNQUOTEDIDENTIFIER="UnquotedIdentifier",e.TOK_QUOTEDIDENTIFIER="QuotedIdentifier",e.TOK_RBRACKET="Rbracket",e.TOK_RPAREN="Rparen",e.TOK_COMMA="Comma",e.TOK_COLON="Colon",e.TOK_RBRACE="Rbrace",e.TOK_NUMBER="Number",e.TOK_CURRENT="Current",e.TOK_ROOT="Root",e.TOK_EXPREF="Expref",e.TOK_PIPE="Pipe",e.TOK_OR="Or",e.TOK_AND="And",e.TOK_EQ="EQ",e.TOK_GT="GT",e.TOK_LT="LT",e.TOK_GTE="GTE",e.TOK_LTE="LTE",e.TOK_NE="NE",e.TOK_FLATTEN="Flatten",e.TOK_STAR="Star",e.TOK_FILTER="Filter",e.TOK_DOT="Dot",e.TOK_NOT="Not",e.TOK_LBRACE="Lbrace",e.TOK_LBRACKET="Lbracket",e.TOK_LPAREN="Lparen",e.TOK_LITERAL="Literal"})(O||(O={}));const ho={"(":O.TOK_LPAREN,")":O.TOK_RPAREN,"*":O.TOK_STAR,",":O.TOK_COMMA,".":O.TOK_DOT,":":O.TOK_COLON,"@":O.TOK_CURRENT,$:O.TOK_ROOT,"]":O.TOK_RBRACKET,"{":O.TOK_LBRACE,"}":O.TOK_RBRACE},_p={"!":!0,"<":!0,"=":!0,">":!0},yp={"	":!0,"\n":!0,"\r":!0," ":!0};class vp{constructor(){this._current=0}tokenize(t){const s=[];this._current=0;let n,a,r;for(;this._current<t.length;)if(mp(t[this._current]))n=this._current,a=this.consumeUnquotedIdentifier(t),s.push({start:n,type:O.TOK_UNQUOTEDIDENTIFIER,value:a});else if(ho[t[this._current]]!==void 0)s.push({start:this._current,type:ho[t[this._current]],value:t[this._current]}),this._current+=1;else if(fo(t[this._current]))r=this.consumeNumber(t),s.push(r);else if(t[this._current]==="[")r=this.consumeLBracket(t),s.push(r);else if(t[this._current]==='"')n=this._current,a=this.consumeQuotedIdentifier(t),s.push({start:n,type:O.TOK_QUOTEDIDENTIFIER,value:a});else if(t[this._current]==="'")n=this._current,a=this.consumeRawStringLiteral(t),s.push({start:n,type:O.TOK_LITERAL,value:a});else if(t[this._current]==="`"){n=this._current;const o=this.consumeLiteral(t);s.push({start:n,type:O.TOK_LITERAL,value:o})}else if(_p[t[this._current]]!==void 0)r=this.consumeOperator(t),r&&s.push(r);else if(yp[t[this._current]]!==void 0)this._current+=1;else if(t[this._current]==="&")n=this._current,this._current+=1,t[this._current]==="&"?(this._current+=1,s.push({start:n,type:O.TOK_AND,value:"&&"})):s.push({start:n,type:O.TOK_EXPREF,value:"&"});else if(t[this._current]==="|")n=this._current,this._current+=1,t[this._current]==="|"?(this._current+=1,s.push({start:n,type:O.TOK_OR,value:"||"})):s.push({start:n,type:O.TOK_PIPE,value:"|"});else{const o=new Error(`Unknown character: ${t[this._current]}`);throw o.name="LexerError",o}return s}consumeUnquotedIdentifier(t){const s=this._current;for(this._current+=1;this._current<t.length&&bp(t[this._current]);)this._current+=1;return t.slice(s,this._current)}consumeQuotedIdentifier(t){const s=this._current;this._current+=1;const n=t.length;for(;t[this._current]!=='"'&&this._current<n;){let a=this._current;t[a]==="\\"&&(t[a+1]==="\\"||t[a+1]==='"')?a+=2:a+=1,this._current=a}return this._current+=1,JSON.parse(t.slice(s,this._current))}consumeRawStringLiteral(t){const s=this._current;this._current+=1;const n=t.length;for(;t[this._current]!=="'"&&this._current<n;){let r=this._current;t[r]==="\\"&&(t[r+1]==="\\"||t[r+1]==="'")?r+=2:r+=1,this._current=r}return this._current+=1,t.slice(s+1,this._current-1).replace("\\'","'")}consumeNumber(t){const s=this._current;this._current+=1;const n=t.length;for(;fo(t[this._current])&&this._current<n;)this._current+=1;const a=parseInt(t.slice(s,this._current),10);return{start:s,value:a,type:O.TOK_NUMBER}}consumeLBracket(t){const s=this._current;return this._current+=1,t[this._current]==="?"?(this._current+=1,{start:s,type:O.TOK_FILTER,value:"[?"}):t[this._current]==="]"?(this._current+=1,{start:s,type:O.TOK_FLATTEN,value:"[]"}):{start:s,type:O.TOK_LBRACKET,value:"["}}consumeOperator(t){const s=this._current,n=t[s];if(this._current+=1,n==="!")return t[this._current]==="="?(this._current+=1,{start:s,type:O.TOK_NE,value:"!="}):{start:s,type:O.TOK_NOT,value:"!"};if(n==="<")return t[this._current]==="="?(this._current+=1,{start:s,type:O.TOK_LTE,value:"<="}):{start:s,type:O.TOK_LT,value:"<"};if(n===">")return t[this._current]==="="?(this._current+=1,{start:s,type:O.TOK_GTE,value:">="}):{start:s,type:O.TOK_GT,value:">"};if(n==="="&&t[this._current]==="=")return this._current+=1,{start:s,type:O.TOK_EQ,value:"=="}}consumeLiteral(t){this._current+=1;const s=this._current,n=t.length;for(;t[this._current]!=="`"&&this._current<n;){let o=this._current;t[o]==="\\"&&(t[o+1]==="\\"||t[o+1]==="`")?o+=2:o+=1,this._current=o}let a=t.slice(s,this._current).trimLeft();a=a.replace("\\`","`");const r=this.looksLikeJSON(a)?JSON.parse(a):JSON.parse(`"${a}"`);return this._current+=1,r}looksLikeJSON(t){const n=["true","false","null"],a="-0123456789";if(t==="")return!1;if('[{"'.includes(t[0])||n.includes(t))return!0;if(a.includes(t[0]))try{return JSON.parse(t),!0}catch{return!1}return!1}}const rl=new vp,ke={[O.TOK_EOF]:0,[O.TOK_UNQUOTEDIDENTIFIER]:0,[O.TOK_QUOTEDIDENTIFIER]:0,[O.TOK_RBRACKET]:0,[O.TOK_RPAREN]:0,[O.TOK_COMMA]:0,[O.TOK_RBRACE]:0,[O.TOK_NUMBER]:0,[O.TOK_CURRENT]:0,[O.TOK_EXPREF]:0,[O.TOK_ROOT]:0,[O.TOK_PIPE]:1,[O.TOK_OR]:2,[O.TOK_AND]:3,[O.TOK_EQ]:5,[O.TOK_GT]:5,[O.TOK_LT]:5,[O.TOK_GTE]:5,[O.TOK_LTE]:5,[O.TOK_NE]:5,[O.TOK_FLATTEN]:9,[O.TOK_STAR]:20,[O.TOK_FILTER]:21,[O.TOK_DOT]:40,[O.TOK_NOT]:45,[O.TOK_LBRACE]:50,[O.TOK_LBRACKET]:55,[O.TOK_LPAREN]:60};class Tp{constructor(){this.index=0,this.tokens=[]}parse(t){this.loadTokens(t),this.index=0;const s=this.expression(0);if(this.lookahead(0)!==O.TOK_EOF){const n=this.lookaheadToken(0);this.errorToken(n,`Unexpected token type: ${n.type}, value: ${n.value}`)}return s}loadTokens(t){this.tokens=[...rl.tokenize(t),{type:O.TOK_EOF,value:"",start:t.length}]}expression(t){const s=this.lookaheadToken(0);this.advance();let n=this.nud(s),a=this.lookahead(0);for(;t<ke[a];)this.advance(),n=this.led(a,n),a=this.lookahead(0);return n}lookahead(t){return this.tokens[this.index+t].type}lookaheadToken(t){return this.tokens[this.index+t]}advance(){this.index+=1}nud(t){let s,n,a;switch(t.type){case O.TOK_LITERAL:return{type:"Literal",value:t.value};case O.TOK_UNQUOTEDIDENTIFIER:return{type:"Field",name:t.value};case O.TOK_QUOTEDIDENTIFIER:const r={type:"Field",name:t.value};if(this.lookahead(0)===O.TOK_LPAREN)throw new Error("Quoted identifier not allowed for function names.");return r;case O.TOK_NOT:return n=this.expression(ke.Not),{type:"NotExpression",children:[n]};case O.TOK_STAR:return s={type:"Identity"},n=this.lookahead(0)===O.TOK_RBRACKET&&{type:"Identity"}||this.parseProjectionRHS(ke.Star),{type:"ValueProjection",children:[s,n]};case O.TOK_FILTER:return this.led(t.type,{type:"Identity"});case O.TOK_LBRACE:return this.parseMultiselectHash();case O.TOK_FLATTEN:return s={type:O.TOK_FLATTEN,children:[{type:"Identity"}]},n=this.parseProjectionRHS(ke.Flatten),{type:"Projection",children:[s,n]};case O.TOK_LBRACKET:return this.lookahead(0)===O.TOK_NUMBER||this.lookahead(0)===O.TOK_COLON?(n=this.parseIndexExpression(),this.projectIfSlice({type:"Identity"},n)):this.lookahead(0)===O.TOK_STAR&&this.lookahead(1)===O.TOK_RBRACKET?(this.advance(),this.advance(),n=this.parseProjectionRHS(ke.Star),{children:[{type:"Identity"},n],type:"Projection"}):this.parseMultiselectList();case O.TOK_CURRENT:return{type:O.TOK_CURRENT};case O.TOK_ROOT:return{type:O.TOK_ROOT};case O.TOK_EXPREF:return a=this.expression(ke.Expref),{type:"ExpressionReference",children:[a]};case O.TOK_LPAREN:const o=[];for(;this.lookahead(0)!==O.TOK_RPAREN;)this.lookahead(0)===O.TOK_CURRENT?(a={type:O.TOK_CURRENT},this.advance()):a=this.expression(0),o.push(a);return this.match(O.TOK_RPAREN),o[0];default:this.errorToken(t)}}led(t,s){let n;switch(t){case O.TOK_DOT:const a=ke.Dot;return this.lookahead(0)!==O.TOK_STAR?(n=this.parseDotRHS(a),{type:"Subexpression",children:[s,n]}):(this.advance(),n=this.parseProjectionRHS(a),{type:"ValueProjection",children:[s,n]});case O.TOK_PIPE:return n=this.expression(ke.Pipe),{type:O.TOK_PIPE,children:[s,n]};case O.TOK_OR:return n=this.expression(ke.Or),{type:"OrExpression",children:[s,n]};case O.TOK_AND:return n=this.expression(ke.And),{type:"AndExpression",children:[s,n]};case O.TOK_LPAREN:const r=s.name,o=[];let i;for(;this.lookahead(0)!==O.TOK_RPAREN;)this.lookahead(0)===O.TOK_CURRENT?(i={type:O.TOK_CURRENT},this.advance()):i=this.expression(0),this.lookahead(0)===O.TOK_COMMA&&this.match(O.TOK_COMMA),o.push(i);return this.match(O.TOK_RPAREN),{name:r,type:"Function",children:o};case O.TOK_FILTER:const c=this.expression(0);return this.match(O.TOK_RBRACKET),n=this.lookahead(0)===O.TOK_FLATTEN&&{type:"Identity"}||this.parseProjectionRHS(ke.Filter),{type:"FilterProjection",children:[s,n,c]};case O.TOK_FLATTEN:const d={type:O.TOK_FLATTEN,children:[s]},u=this.parseProjectionRHS(ke.Flatten);return{type:"Projection",children:[d,u]};case O.TOK_EQ:case O.TOK_NE:case O.TOK_GT:case O.TOK_GTE:case O.TOK_LT:case O.TOK_LTE:return this.parseComparator(s,t);case O.TOK_LBRACKET:const p=this.lookaheadToken(0);return p.type===O.TOK_NUMBER||p.type===O.TOK_COLON?(n=this.parseIndexExpression(),this.projectIfSlice(s,n)):(this.match(O.TOK_STAR),this.match(O.TOK_RBRACKET),n=this.parseProjectionRHS(ke.Star),{type:"Projection",children:[s,n]});default:return this.errorToken(this.lookaheadToken(0))}}match(t){if(this.lookahead(0)===t){this.advance();return}else{const s=this.lookaheadToken(0);this.errorToken(s,`Expected ${t}, got: ${s.type}`)}}errorToken(t,s=""){const n=new Error(s||`Invalid token (${t.type}): "${t.value}"`);throw n.name="ParserError",n}parseIndexExpression(){if(this.lookahead(0)===O.TOK_COLON||this.lookahead(1)===O.TOK_COLON)return this.parseSliceExpression();const t={type:"Index",value:this.lookaheadToken(0).value};return this.advance(),this.match(O.TOK_RBRACKET),t}projectIfSlice(t,s){const n={type:"IndexExpression",children:[t,s]};return s.type==="Slice"?{children:[n,this.parseProjectionRHS(ke.Star)],type:"Projection"}:n}parseSliceExpression(){const t=[null,null,null];let s=0,n=this.lookahead(0);for(;n!==O.TOK_RBRACKET&&s<3;){if(n===O.TOK_COLON)s+=1,this.advance();else if(n===O.TOK_NUMBER)t[s]=this.lookaheadToken(0).value,this.advance();else{const a=this.lookaheadToken(0);this.errorToken(a,`Syntax error, unexpected token: ${a.value}(${a.type})`)}n=this.lookahead(0)}return this.match(O.TOK_RBRACKET),{children:t,type:"Slice"}}parseComparator(t,s){const n=this.expression(ke[s]);return{type:"Comparator",name:s,children:[t,n]}}parseDotRHS(t){const s=this.lookahead(0);if([O.TOK_UNQUOTEDIDENTIFIER,O.TOK_QUOTEDIDENTIFIER,O.TOK_STAR].includes(s))return this.expression(t);if(s===O.TOK_LBRACKET)return this.match(O.TOK_LBRACKET),this.parseMultiselectList();if(s===O.TOK_LBRACE)return this.match(O.TOK_LBRACE),this.parseMultiselectHash();const a=this.lookaheadToken(0);this.errorToken(a,`Syntax error, unexpected token: ${a.value}(${a.type})`)}parseProjectionRHS(t){if(ke[this.lookahead(0)]<10)return{type:"Identity"};if(this.lookahead(0)===O.TOK_LBRACKET)return this.expression(t);if(this.lookahead(0)===O.TOK_FILTER)return this.expression(t);if(this.lookahead(0)===O.TOK_DOT)return this.match(O.TOK_DOT),this.parseDotRHS(t);const s=this.lookaheadToken(0);this.errorToken(s,`Syntax error, unexpected token: ${s.value}(${s.type})`)}parseMultiselectList(){const t=[];for(;this.lookahead(0)!==O.TOK_RBRACKET;){const s=this.expression(0);if(t.push(s),this.lookahead(0)===O.TOK_COMMA&&(this.match(O.TOK_COMMA),this.lookahead(0)===O.TOK_RBRACKET))throw new Error("Unexpected token Rbracket")}return this.match(O.TOK_RBRACKET),{type:"MultiSelectList",children:t}}parseMultiselectHash(){const t=[],s=[O.TOK_UNQUOTEDIDENTIFIER,O.TOK_QUOTEDIDENTIFIER];let n,a,r;for(;;){if(n=this.lookaheadToken(0),!s.includes(n.type))throw new Error(`Expecting an identifier token, got: ${n.type}`);if(a=n.value,this.advance(),this.match(O.TOK_COLON),r=this.expression(0),t.push({value:r,type:"KeyValuePair",name:a}),this.lookahead(0)===O.TOK_COMMA)this.match(O.TOK_COMMA);else if(this.lookahead(0)===O.TOK_RBRACE){this.match(O.TOK_RBRACE);break}}return{type:"MultiSelectHash",children:t}}}const ol=new Tp;var $;(function(e){e[e.TYPE_NUMBER=0]="TYPE_NUMBER",e[e.TYPE_ANY=1]="TYPE_ANY",e[e.TYPE_STRING=2]="TYPE_STRING",e[e.TYPE_ARRAY=3]="TYPE_ARRAY",e[e.TYPE_OBJECT=4]="TYPE_OBJECT",e[e.TYPE_BOOLEAN=5]="TYPE_BOOLEAN",e[e.TYPE_EXPREF=6]="TYPE_EXPREF",e[e.TYPE_NULL=7]="TYPE_NULL",e[e.TYPE_ARRAY_NUMBER=8]="TYPE_ARRAY_NUMBER",e[e.TYPE_ARRAY_STRING=9]="TYPE_ARRAY_STRING"})($||($={}));class Sp{constructor(t){this.TYPE_NAME_TABLE={[$.TYPE_NUMBER]:"number",[$.TYPE_ANY]:"any",[$.TYPE_STRING]:"string",[$.TYPE_ARRAY]:"array",[$.TYPE_OBJECT]:"object",[$.TYPE_BOOLEAN]:"boolean",[$.TYPE_EXPREF]:"expression",[$.TYPE_NULL]:"null",[$.TYPE_ARRAY_NUMBER]:"Array<number>",[$.TYPE_ARRAY_STRING]:"Array<string>"},this.functionAbs=([s])=>Math.abs(s),this.functionAvg=([s])=>{let n=0;for(let a=0;a<s.length;a+=1)n+=s[a];return n/s.length},this.functionCeil=([s])=>Math.ceil(s),this.functionContains=s=>{const[n,a]=s;return n.includes(a)},this.functionEndsWith=s=>{const[n,a]=s;return n.includes(a,n.length-a.length)},this.functionFloor=([s])=>Math.floor(s),this.functionJoin=s=>{const[n,a]=s;return a.join(n)},this.functionKeys=([s])=>Object.keys(s),this.functionLength=([s])=>Ss(s)?Object.keys(s).length:s.length,this.functionMap=s=>{if(!this._interpreter)return[];const n=[],a=this._interpreter,r=s[0],o=s[1];for(let i=0;i<o.length;i+=1)n.push(a.visit(r,o[i]));return n},this.functionMax=([s])=>{if(!s.length)return null;if(this.getTypeName(s[0])===$.TYPE_NUMBER)return Math.max(...s);const a=s;let r=a[0];for(let o=1;o<a.length;o+=1)r.localeCompare(a[o])<0&&(r=a[o]);return r},this.functionMaxBy=s=>{const n=s[1],a=s[0],r=this.createKeyFunction(n,[$.TYPE_NUMBER,$.TYPE_STRING]);let o=-1/0,i,l;for(let c=0;c<a.length;c+=1)l=r&&r(a[c]),l!==void 0&&l>o&&(o=l,i=a[c]);return i},this.functionMerge=s=>{let n={};for(let a=0;a<s.length;a+=1){const r=s[a];n=Object.assign(n,r)}return n},this.functionMin=([s])=>{if(!s.length)return null;if(this.getTypeName(s[0])===$.TYPE_NUMBER)return Math.min(...s);const a=s;let r=a[0];for(let o=1;o<a.length;o+=1)a[o].localeCompare(r)<0&&(r=a[o]);return r},this.functionMinBy=s=>{const n=s[1],a=s[0],r=this.createKeyFunction(n,[$.TYPE_NUMBER,$.TYPE_STRING]);let o=1/0,i,l;for(let c=0;c<a.length;c+=1)l=r&&r(a[c]),l!==void 0&&l<o&&(o=l,i=a[c]);return i},this.functionNotNull=s=>{for(let n=0;n<s.length;n+=1)if(this.getTypeName(s[n])!==$.TYPE_NULL)return s[n];return null},this.functionReverse=([s])=>{if(this.getTypeName(s)===$.TYPE_STRING){const r=s;let o="";for(let i=r.length-1;i>=0;i-=1)o+=r[i];return o}const a=s.slice(0);return a.reverse(),a},this.functionSort=([s])=>[...s].sort(),this.functionSortBy=s=>{if(!this._interpreter)return[];const n=s[0].slice(0);if(n.length===0)return n;const a=this._interpreter,r=s[1],o=this.getTypeName(a.visit(r,n[0]));if(o!==void 0&&![$.TYPE_NUMBER,$.TYPE_STRING].includes(o))throw new Error(`TypeError: unexpected type (${this.TYPE_NAME_TABLE[o]})`);const i=[];for(let l=0;l<n.length;l+=1)i.push([l,n[l]]);i.sort((l,c)=>{const d=a.visit(r,l[1]),u=a.visit(r,c[1]);if(this.getTypeName(d)!==o)throw new Error(`TypeError: expected (${this.TYPE_NAME_TABLE[o]}), received ${this.TYPE_NAME_TABLE[this.getTypeName(d)]}`);if(this.getTypeName(u)!==o)throw new Error(`TypeError: expected (${this.TYPE_NAME_TABLE[o]}), received ${this.TYPE_NAME_TABLE[this.getTypeName(u)]}`);return d>u?1:d<u?-1:l[0]-c[0]});for(let l=0;l<i.length;l+=1)n[l]=i[l][1];return n},this.functionStartsWith=([s,n])=>s.startsWith(n),this.functionSum=([s])=>s.reduce((n,a)=>n+a,0),this.functionToArray=([s])=>this.getTypeName(s)===$.TYPE_ARRAY?s:[s],this.functionToNumber=([s])=>{const n=this.getTypeName(s);let a;return n===$.TYPE_NUMBER?s:n===$.TYPE_STRING&&(a=+s,!isNaN(a))?a:null},this.functionToString=([s])=>this.getTypeName(s)===$.TYPE_STRING?s:JSON.stringify(s),this.functionType=([s])=>{switch(this.getTypeName(s)){case $.TYPE_NUMBER:return"number";case $.TYPE_STRING:return"string";case $.TYPE_ARRAY:return"array";case $.TYPE_OBJECT:return"object";case $.TYPE_BOOLEAN:return"boolean";case $.TYPE_EXPREF:return"expref";case $.TYPE_NULL:return"null";default:return}},this.functionValues=([s])=>Object.values(s),this.functionTable={abs:{_func:this.functionAbs,_signature:[{types:[$.TYPE_NUMBER]}]},avg:{_func:this.functionAvg,_signature:[{types:[$.TYPE_ARRAY_NUMBER]}]},ceil:{_func:this.functionCeil,_signature:[{types:[$.TYPE_NUMBER]}]},contains:{_func:this.functionContains,_signature:[{types:[$.TYPE_STRING,$.TYPE_ARRAY]},{types:[$.TYPE_ANY]}]},ends_with:{_func:this.functionEndsWith,_signature:[{types:[$.TYPE_STRING]},{types:[$.TYPE_STRING]}]},floor:{_func:this.functionFloor,_signature:[{types:[$.TYPE_NUMBER]}]},join:{_func:this.functionJoin,_signature:[{types:[$.TYPE_STRING]},{types:[$.TYPE_ARRAY_STRING]}]},keys:{_func:this.functionKeys,_signature:[{types:[$.TYPE_OBJECT]}]},length:{_func:this.functionLength,_signature:[{types:[$.TYPE_STRING,$.TYPE_ARRAY,$.TYPE_OBJECT]}]},map:{_func:this.functionMap,_signature:[{types:[$.TYPE_EXPREF]},{types:[$.TYPE_ARRAY]}]},max:{_func:this.functionMax,_signature:[{types:[$.TYPE_ARRAY_NUMBER,$.TYPE_ARRAY_STRING]}]},max_by:{_func:this.functionMaxBy,_signature:[{types:[$.TYPE_ARRAY]},{types:[$.TYPE_EXPREF]}]},merge:{_func:this.functionMerge,_signature:[{types:[$.TYPE_OBJECT],variadic:!0}]},min:{_func:this.functionMin,_signature:[{types:[$.TYPE_ARRAY_NUMBER,$.TYPE_ARRAY_STRING]}]},min_by:{_func:this.functionMinBy,_signature:[{types:[$.TYPE_ARRAY]},{types:[$.TYPE_EXPREF]}]},not_null:{_func:this.functionNotNull,_signature:[{types:[$.TYPE_ANY],variadic:!0}]},reverse:{_func:this.functionReverse,_signature:[{types:[$.TYPE_STRING,$.TYPE_ARRAY]}]},sort:{_func:this.functionSort,_signature:[{types:[$.TYPE_ARRAY_STRING,$.TYPE_ARRAY_NUMBER]}]},sort_by:{_func:this.functionSortBy,_signature:[{types:[$.TYPE_ARRAY]},{types:[$.TYPE_EXPREF]}]},starts_with:{_func:this.functionStartsWith,_signature:[{types:[$.TYPE_STRING]},{types:[$.TYPE_STRING]}]},sum:{_func:this.functionSum,_signature:[{types:[$.TYPE_ARRAY_NUMBER]}]},to_array:{_func:this.functionToArray,_signature:[{types:[$.TYPE_ANY]}]},to_number:{_func:this.functionToNumber,_signature:[{types:[$.TYPE_ANY]}]},to_string:{_func:this.functionToString,_signature:[{types:[$.TYPE_ANY]}]},type:{_func:this.functionType,_signature:[{types:[$.TYPE_ANY]}]},values:{_func:this.functionValues,_signature:[{types:[$.TYPE_OBJECT]}]}},this._interpreter=t}registerFunction(t,s,n){if(t in this.functionTable)throw new Error(`Function already defined: ${t}()`);this.functionTable[t]={_func:s.bind(this),_signature:n}}callFunction(t,s){const n=this.functionTable[t];if(n===void 0)throw new Error(`Unknown function: ${t}()`);return this.validateArgs(t,s,n._signature),n._func.call(this,s)}validateInputSignatures(t,s){for(let n=0;n<s.length;n+=1)if("variadic"in s[n]&&n!==s.length-1)throw new Error(`ArgumentError: ${t}() 'variadic' argument ${n+1} must occur last`)}validateArgs(t,s,n){var a,r;let o;this.validateInputSignatures(t,n);const i=n.filter(f=>{var h;return(h=!f.optional)!==null&&h!==void 0?h:!1}).length,l=(r=(a=n[n.length-1])===null||a===void 0?void 0:a.variadic)!==null&&r!==void 0?r:!1,c=s.length<i,d=s.length>n.length,u=c&&(!l&&i>1||l)?"at least ":"";if(l&&c||!l&&(c||d))throw o=n.length>1,new Error(`ArgumentError: ${t}() takes ${u}${i} argument${o&&"s"||""} but received ${s.length}`);let p,b,m;for(let f=0;f<n.length;f+=1){m=!1,p=n[f].types,b=this.getTypeName(s[f]);let h;for(h=0;h<p.length;h+=1)if(b!==void 0&&this.typeMatches(b,p[h],s[f])){m=!0;break}if(!m&&b!==void 0){const g=p.map(y=>this.TYPE_NAME_TABLE[y]).join(" | ");throw new Error(`TypeError: ${t}() expected argument ${f+1} to be type (${g}) but received type ${this.TYPE_NAME_TABLE[b]} instead.`)}}}typeMatches(t,s,n){if(s===$.TYPE_ANY)return!0;if(s===$.TYPE_ARRAY_STRING||s===$.TYPE_ARRAY_NUMBER||s===$.TYPE_ARRAY){if(s===$.TYPE_ARRAY)return t===$.TYPE_ARRAY;if(t===$.TYPE_ARRAY){let a;s===$.TYPE_ARRAY_NUMBER?a=$.TYPE_NUMBER:s===$.TYPE_ARRAY_STRING&&(a=$.TYPE_STRING);for(let r=0;r<n.length;r+=1){const o=this.getTypeName(n[r]);if(o!==void 0&&a!==void 0&&!this.typeMatches(o,a,n[r]))return!1}return!0}}else return t===s;return!1}getTypeName(t){switch(Object.prototype.toString.call(t)){case"[object String]":return $.TYPE_STRING;case"[object Number]":return $.TYPE_NUMBER;case"[object Array]":return $.TYPE_ARRAY;case"[object Boolean]":return $.TYPE_BOOLEAN;case"[object Null]":return $.TYPE_NULL;case"[object Object]":return t.jmespathType===O.TOK_EXPREF?$.TYPE_EXPREF:$.TYPE_OBJECT;default:return}}createKeyFunction(t,s){if(!this._interpreter)return;const n=this._interpreter;return r=>{const o=n.visit(t,r);if(!s.includes(this.getTypeName(o))){const i=`TypeError: expected one of (${s.map(l=>this.TYPE_NAME_TABLE[l]).join(" | ")}), received ${this.TYPE_NAME_TABLE[this.getTypeName(o)]}`;throw new Error(i)}return o}}}class Ep{constructor(){this._rootValue=null,this.runtime=new Sp(this)}search(t,s){return this._rootValue=s,this.visit(t,s)}visit(t,s){let n,a,r,o,i,l,c,d,u,p,b;switch(t.type){case"Field":return s===null?null:Ss(s)?(l=s[t.name],l===void 0?null:l):null;case"Subexpression":for(r=this.visit(t.children[0],s),p=1;p<t.children.length;p+=1)if(r=this.visit(t.children[1],r),r===null)return null;return r;case"IndexExpression":return c=this.visit(t.children[0],s),d=this.visit(t.children[1],c),d;case"Index":if(!Array.isArray(s))return null;let m=t.value;return m<0&&(m=s.length+m),r=s[m],r===void 0&&(r=null),r;case"Slice":if(!Array.isArray(s))return null;const f=[...t.children],h=this.computeSliceParams(s.length,f),[g,y,_]=h;if(r=[],_>0)for(p=g;p<y;p+=_)r.push(s[p]);else for(p=g;p>y;p+=_)r.push(s[p]);return r;case"Projection":if(b=this.visit(t.children[0],s),!Array.isArray(b))return null;for(u=[],p=0;p<b.length;p+=1)a=this.visit(t.children[1],b[p]),a!==null&&u.push(a);return u;case"ValueProjection":if(b=this.visit(t.children[0],s),!Ss(b))return null;u=[];const S=Object.values(b);for(p=0;p<S.length;p+=1)a=this.visit(t.children[1],S[p]),a!==null&&u.push(a);return u;case"FilterProjection":if(b=this.visit(t.children[0],s),!Array.isArray(b))return null;const E=[],k=[];for(p=0;p<b.length;p+=1)n=this.visit(t.children[2],b[p]),tn(n)||E.push(b[p]);for(let A=0;A<E.length;A+=1)a=this.visit(t.children[1],E[A]),a!==null&&k.push(a);return k;case"Comparator":switch(o=this.visit(t.children[0],s),i=this.visit(t.children[1],s),t.name){case O.TOK_EQ:r=vn(o,i);break;case O.TOK_NE:r=!vn(o,i);break;case O.TOK_GT:r=o>i;break;case O.TOK_GTE:r=o>=i;break;case O.TOK_LT:r=o<i;break;case O.TOK_LTE:r=o<=i;break;default:throw new Error(`Unknown comparator: ${t.name}`)}return r;case O.TOK_FLATTEN:const C=this.visit(t.children[0],s);if(!Array.isArray(C))return null;let R=[];for(p=0;p<C.length;p+=1)a=C[p],Array.isArray(a)?R=[...R,...a]:R.push(a);return R;case"Identity":return s;case"MultiSelectList":if(s===null)return null;for(u=[],p=0;p<t.children.length;p+=1)u.push(this.visit(t.children[p],s));return u;case"MultiSelectHash":if(s===null)return null;u={};let x;for(p=0;p<t.children.length;p+=1)x=t.children[p],u[x.name]=this.visit(x.value,s);return u;case"OrExpression":return n=this.visit(t.children[0],s),tn(n)&&(n=this.visit(t.children[1],s)),n;case"AndExpression":return o=this.visit(t.children[0],s),tn(o)?o:this.visit(t.children[1],s);case"NotExpression":return o=this.visit(t.children[0],s),tn(o);case"Literal":return t.value;case O.TOK_PIPE:return c=this.visit(t.children[0],s),this.visit(t.children[1],c);case O.TOK_CURRENT:return s;case O.TOK_ROOT:return this._rootValue;case"Function":const w=[];for(let A=0;A<t.children.length;A+=1)w.push(this.visit(t.children[A],s));return this.runtime.callFunction(t.name,w);case"ExpressionReference":const L=t.children[0];return L.jmespathType=O.TOK_EXPREF,L;default:throw new Error(`Unknown node type: ${t.type}`)}}computeSliceParams(t,s){let[n,a,r]=s;if(r===null)r=1;else if(r===0){const i=new Error("Invalid slice, step cannot be 0");throw i.name="RuntimeError",i}const o=r<0;return n=n===null?o?t-1:0:this.capSliceRange(t,n,r),a=a===null?o?-1:t:this.capSliceRange(t,a,r),[n,a,r]}capSliceRange(t,s,n){let a=s;return a<0?(a+=t,a<0&&(a=n<0?-1:0)):a>=t&&(a=n<0?t-1:t),a}}const rr=new Ep,wp=$.TYPE_ANY,xp=$.TYPE_ARRAY,Ap=$.TYPE_ARRAY_NUMBER,Pp=$.TYPE_ARRAY_STRING,Op=$.TYPE_BOOLEAN,kp=$.TYPE_EXPREF,Cp=$.TYPE_NULL,Rp=$.TYPE_NUMBER,Lp=$.TYPE_OBJECT,Mp=$.TYPE_STRING;function Ip(e){return ol.parse(e)}function Np(e){return rl.tokenize(e)}const Dp=(e,t,s)=>{rr.runtime.registerFunction(e,t,s)};function Bp(e,t){const s=ol.parse(t);return rr.search(s,e)}const Fp=rr,st={compile:Ip,registerFunction:Dp,search:Bp,tokenize:Np,TreeInterpreter:Fp,TYPE_ANY:wp,TYPE_ARRAY_NUMBER:Ap,TYPE_ARRAY_STRING:Pp,TYPE_ARRAY:xp,TYPE_BOOLEAN:Op,TYPE_EXPREF:kp,TYPE_NULL:Cp,TYPE_NUMBER:Rp,TYPE_OBJECT:Lp,TYPE_STRING:Mp},ft=class ft{static async appendPrompt(t,s){po(t,LZString.compressToUTF16(JSON.stringify(s))).then(async()=>{hs().then(n=>{n=n.filter(a=>a.indexOf(this.DELIM_PROMPTS)!=-1),n.length>ft.MAX_PROMPTS_VALS&&ra(n[0])})}).catch(n=>console.error("~IDB Failed | ",n))}static async appendVIR_products(t){t.forEach(s=>{let n=JSON.stringify({ts:Date.now(),name:s[1]});po(s[0],LZString.compressToUTF16(n)).then(async()=>{}).catch(a=>console.error("~IDB Failed | ",a))})}static async keys(t,s){hs().then(n=>{n=n.filter(a=>a.indexOf(t)!=-1),s&&s(n)})}static async get(t,s){hp(t).then(n=>{try{n=JSON.parse(LZString.decompressFromUTF16(n))}catch{}finally{s&&s(n)}})}static async entries(t,s){gp().then(n=>{n=n.filter(a=>a[0].indexOf(t)!=-1),n=n.map(a=>{try{a[1]=JSON.parse(LZString.decompressFromUTF16(a[1]))}catch{}finally{}return a}),s&&s(n)})}static compr(t){return t}static decompr(t){return t}static async act(t,s,n){let a="";switch(t){case"PROMPTS_COUNT":hs().then(o=>{o=o.filter(i=>i.indexOf(this.DELIM_PROMPTS)!=-1),a=`There are ${o.length} prompts in local IDB storage. The current max is ${this.MAX_PROMPTS_VALS}.`,a&&n&&n(a)});break;case"PROMPTS_IMPORT":console.log("~ PROMPTS_IMPORT | ");break;case"PROMPTS_EXPORT":console.log("~ PROMPTS_EXPORT | ");break;case"PROMPTS_CLEAR":hs().then(o=>{o.forEach(i=>{i.indexOf(this.DELIM_PROMPTS)!=-1&&i.split(ft.DELIM_PROMPTS)[0]==s&&ra(i)})}),a="The Prompt history has been removed for UPI: "+s,console.log("~ PROMPTS_CLEAR ------ | ",a);break;case"VIR_COUNT":hs().then(o=>{o=o.filter(i=>i.indexOf(this.DELIM_VIR)!=-1),a=`There are ${o.length} VNR names in local IDB storage.`,a&&n&&n(a)});break;case"VIR_CLEAR":let r=0;await hs().then(o=>{o.forEach(i=>{i.indexOf(this.DELIM_VIR)!=-1&&i.split(ft.DELIM_VIR)[0]==s&&(r++,ra(i))})}),a=`The VNR Names have been removed for UPI: ${s} (Total Deleted: ${r})`;break;case"FEATURE_CLEAR":localStorage.getItem("feature_flags")&&localStorage.removeItem("feature_flags"),a="Features have been reset to default. Refresh.";break}console.log("~ resultMsg | ",a),a&&n&&n(a)}};ft.MAX_TYPEAHEAD_ROWS=14,ft.MAX_PROMPTS_VALS=50,ft.DELIM_PROMPTS="_",ft.DELIM_VIR="-",ft.DELIM_SNDX="|";let os=ft;const ye=eu("AppState",()=>{const e=yt(),t="DEV",s="BMA Tourney v0.0.5 ",n="#app",a=Pt({APP__ROUTE_SYNC:"APP.ROUTE_SYNC",WC__TOURN_ACTION:"WC.TOURN_ACTION",WC__APP__HEAD_TOP:"WC.APP.HEAD_TOP",WC__APP__HEAD_TOP__LOGO:"WC.APP.HEAD_TOP.LOGO",WC__APP__HEAD_TOP__USER_PROFILE:"WC.APP.HEAD_TOP.USER_PROFILE",WC__APP__HEAD_MID:"WC.APP.HEAD_MID",WC__APP__HEAD_MID__HEAD_MID_LOBBY:"WC.APP.HEAD_MID.HEAD_MID_LOBBY",WC__APP__HEAD_MID__HEAD_MID_MY:"WC.APP.HEAD_MID.HEAD_MID_MY",WC__APP__HEAD_MID__HEAD_MID_COMPLETED:"WC.APP.HEAD_MID.HEAD_MID_COMPLETED",WC__APP__HEAD_MID__HEAD_MID_LEADERBOARD:"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD",WC__APP__HEAD_MID__HEAD_MID_SQUAD:"WC.APP.HEAD_MID.HEAD_MID_SQUAD",WC__APP__HEAD_SPORTS:"WC.APP.HEAD_SPORTS",WC__APP__HEAD_SPORTS__HEAD_SPORTS_DRAG_START:"WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START",WC__APP__FOOT:"WC.APP.FOOT",WC__APP__FOOT__ALL_SPORTS:"WC.APP.FOOT.ALL_SPORTS",WC__APP__FOOT__MY_TOURNEYS:"WC.APP.FOOT.MY_TOURNEYS",WC__APP__FOOT__LEADERBOARD:"WC.APP.FOOT.LEADERBOARD",WC__APP__FOOT__MY_PROFILE:"WC.APP.FOOT.MY_PROFILE",ROUTE__HOME_ONMOUNT:"ROUTE.HOME_ONMOUNT",ROUTE__HOME_HYDRATE:"ROUTE.HOME_HYDRATE",ROUTE__HOME__USER_PROFILE:"ROUTE.HOME.USER_PROFILE",SSE__CORE__TOURN_SYNC:"SSE.CORE.TOURN_SYNC",CANVAS__HYDRATE__STATUS:"CANVAS.HYDRATE.STATUS",SODAPOP__HYDRATE__COREBETSLIP:"SODAPOP.HYDRATE.COREBETSLIP",COREBETSLIP:"COREBETSLIP",COREBETSLIP__BET:"COREBETSLIP.BET",COREBETSLIP__SPREAD:"COREBETSLIP.SPREAD",COREBETSLIP__MONEY:"COREBETSLIP.MONEY",COREBETSLIP__TOTAL:"COREBETSLIP.TOTAL",COREBETSLIP__CLOSE:"COREBETSLIP.CLOSE",COREBETSLIP__INTERSYNC:"COREBETSLIP.INTERSYNC",COREBETSLIP__TDSYNC:"COREBETSLIP.TDSYNC"});let r=Pt([]),o=Pt([]);const i=x=>{r.push(x),r.length>10&&(r.shift(),console.log("[appState] coreTourn exceeded 10 items, removed oldest")),console.log(`[appState] coreTourn length: ${r.length}`)},l=x=>{o.push(x),o.length>10&&(o.shift(),console.log("[appState] coreBetSlip exceeded 10 items, removed oldest")),console.log(`[appState] coreBetSlip length: ${o.length}`)},c=()=>{const x=localStorage.getItem("session_user");if(console.log("[appState] Loading session_user from localStorage:",x),x)try{const w=JSON.parse(x);return console.log("[appState] Parsed session_user:",w),w}catch(w){console.error("Failed to parse session_user from localStorage:",w)}return console.log("[appState] No saved session, returning default"),{authenticated:!1,userName:"",name:"",fname:"",lname:"",email:"",token:"",guid:""}},d=Qe({session_app:{online:!0,route:"",version:s+t,buildmode:t},session_log:[],session_ui:{orientation:"landscape",isTouch:"utils.isTouch()"},session_user:c()}),u=Qe({commands:["clear","debug","export","feature","help","logout","reload","route","theme","version","workflow"],features:{theme:{state:"dark"},motif:{state:"brand"},lang:{state:"en"},sse:{state:!0},disable_existing_bet_btn:{state:!1},animation:{state:!0},audio:{state:!0},contextmenu:{state:!1},debug:{state:!1},guided_tour:{state:!1}},env_override:{DEV:{contextmenu:{state:!1}},QA:{contextmenu:{state:!0}},PROD:{contextmenu:{state:!1},sse:!0}}}),p=()=>{if(!localStorage.getItem("feature_flags"))localStorage.setItem("feature_flags",os.compr(JSON.stringify(u.value.features)));else{let x=os.decompr(localStorage.getItem("feature_flags"));x=Object.assign(u.value.features,JSON.parse(x));for(let w in x)typeof u.value?.env_override[t][w]<"u"&&(x[w]=u.value.env_override[t][w]);localStorage.setItem("feature_flags",os.compr(JSON.stringify(u.value.features=x)))}},b=()=>{const x=document.querySelector(n);if(x){const w=x.dataset;for(let L in w){const A=L.replace(/^sync/,""),G=Object.keys(u.value.features).find(W=>W.toLowerCase()===A.toLowerCase());if(G){const W=u.value.features[G]?.state;W&&(w[L]=W)}}}},m=(x="Theme",w={state:"dark"})=>{const L=document.querySelector(n);L&&(L.dataset["sync"+x]=w.state)},f=(x="Theme",w={state:"dark"})=>{if(localStorage.getItem("feature_flags")&&w){let A=JSON.parse(os.decompr(localStorage.getItem("feature_flags")));A[x]={state:w.state},localStorage.setItem("feature_flags",os.compr(JSON.stringify(u.value.features=A))),m(x,w),Q.publish("APP.ROUTE_SYNC",`{ "${x}": ${JSON.stringify(w)}}`)}},h=x=>{const w=u.value?.features?.Lang?.state;let L=_.value.microcopy.language.filter(A=>A.code==w)[0]?.copy;if(L=L.filter(A=>A[0]==x)[0],L)return L[1]},g=(x=":version")=>{let[w,L,A]=x.split(" ");switch(w=w.toLocaleLowerCase(),A=="true"&&(A=!0),A=="false"&&(A=!1),w){case":version":neodigmToast.q(`Version Q ${d.value.session_app.version}`,"brand");break;case":feature":f(L,{state:A});break;case":route":neodigmToast.q(`route ${L}`,"brand"),e.push({name:L});break}};p(),b();const y=Pt({designer:"guided_tour",notifications:{unread:0}}),_=Qe({sports:Kt,microcopy:pp.getMeta()}),S=ze(()=>d.value.session_user.fname+" "+d.value.session_user.lname),E=()=>{console.log("[appState] Saving session_user to localStorage:",d.value.session_user),localStorage.setItem("session_user",JSON.stringify(d.value.session_user))},k=()=>{localStorage.removeItem("session_user")};function C(x){return d.value.session_user.authenticated=!0,d.value.session_user.token=x,E(),d.value.session_app.route="chat"}function R(){return d.value.session_user.authenticated=!1,d.value.session_user.token="",d.value.session_user.guid="",k(),API_ORCH.setTJO(null),d.value.session_app.route="auth"}return{appCLIFeatures:u,appDesigner:y,appMeta:_,appSession:d,clearSessionUser:k,concatFirstLast:S,coreBetSlip:o,coreTourn:r,doCLI:g,doLogin:C,doLogout:R,hierTopics:a,i18n:h,pushCoreTourn:i,pushcoreBetSlip:l,saveSessionUser:E,setFeaturePersistPub:f}}),Je=class Je{static RETIREgetTJO(){if(this.jsTJO)return this.jsTJO;let t=localStorage.getItem("tjo");return t&&(this.jsTJO=JSON.parse(t)),this.jsTJO}static RETIREsetTJO(t){return t?localStorage.setItem("tjo",JSON.stringify(t)):localStorage.clear("tjo"),this.jsTJO=t}static setStateSignout(){typeof neodigmWired4Sound<"u"&&neodigmWired4Sound.sound(11),Je.setTJO(null),location.reload()}static async doSignin(t,s=null){const n={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}},r=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity/signin",n)).json();r.ok?(typeof mvvLegit<"u"&&mvvLegit&&r?.accessToken&&mvvLegit.doSignin(r?.accessToken),s&&s(r)):typeof neodigmToast<"u"&&neodigmToast.q("Invalid User ID|Password")}static async doSignup(t,s=null){const n={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}},r=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity",n)).json();if(r.ok)typeof neodigmToast<"u"&&neodigmToast.q("Account created successfully!|Please sign in","success"),s&&s(r);else{const o=r?.error||r?.message||"Signup failed. Please try again.";typeof neodigmToast<"u"&&neodigmToast.q(o,"danger"),s&&s(r)}}static async checkUserName(t,s=null){const n={method:"POST",body:JSON.stringify({userName:t}),headers:{"Content-Type":"application/json"}},r=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity/checkUserName",n)).json();return s&&s(r),r}static async resetHash(t,s,n=null){typeof neodigmAgent<"u"?neodigmAgent.genChronSync():Date.now();const a=typeof neodigmUtils<"u"?neodigmUtils.genHash(s):s,r={method:"POST",body:JSON.stringify({guid:t,hash:a}),headers:Je.genHeaders()},i=await(await fetch(this.API_baseURI+this.API_ver+"/acct/resetHash",r)).json();n&&n(i)}static genHeaders(t={}){let s={};return s.protomolecule=typeof neodigmAgent<"u"?neodigmAgent.genChronSync():Date.now(),s.Authorization="Bearer expired",s["Content-Type"]="application/json",typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.class&&(s.role=SessionAcctEntity.oEntities.data.entity.class),typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.guid&&(s.guid=SessionAcctEntity.oEntities.data.entity.guid),typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.company&&(s.company=SessionAcctEntity.oEntities.data.entity.company),s}static async fetchTournaments(t=null){const s={method:"GET",headers:Je.genHeaders()},a=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/coreTournaments",s)).json();return t&&t(a),a}static async fetchBetSlips(t,s="",n="",a=null){let r=`/m5t/${this.API_ver}/coreBetSlip/filter/${t}`;s&&(r+=`/${s}`),s&&n&&(r+=`/${n}`);const o={method:"GET",headers:Je.genHeaders()},l=await(await fetch(this.API_baseURI+r,o)).json();return a&&a(l),l}static async fetchLeaderboard(t,s="",n=null){let a=`/m5t/${this.API_ver}/coreLeaderboard?tourney=${t}`;s&&(a+=`&user=${s}`);const r={method:"GET",headers:Je.genHeaders()},i=await(await fetch(this.API_baseURI+a,r)).json();return n&&n(i),i}static async postBetSlips(t,s=null){const n=t.map(r=>{const o={method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}};return fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/coreBetSlip/",o).then(i=>i.json())}),a=await Promise.all(n);return s&&s(a),a}};Je.API_baseURI="https://machfive-bmacdev-rest.onrender.com",Je.API_ver="v5",Je.jsState={},Je.jsMeta={},Je.jsTJO=null;let Se=Je;const qs={shootConfetti(){if(typeof confetti=="function"){let n=function(a,r){confetti({...t,...r,particleCount:Math.floor(e*a)})};var s=n,e=200,t={origin:{y:.7}};n(.25,{zIndex:304,spread:26,startVelocity:55}),n(.2,{zIndex:304,spread:60}),n(.35,{zIndex:304,spread:100,decay:.91,scalar:.8}),n(.1,{zIndex:304,spread:120,startVelocity:25,decay:.92,scalar:1.2}),n(.1,{zIndex:304,spread:120,startVelocity:45})}},hardReload(){const e=new URLSearchParams(window.location.search);e.set("reload",new Date().getTime());const t=e.toString();window.location.search=t},isJSON(e){let t=!1;try{t=typeof JSON.parse(e)}catch{}return t=="object"},isTouch:function(){return typeof document.body.ontouchstart<"u"},prettyTimeExt(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"})},formatDateLocal(e,t={}){if(!e)return"TBD";let s=new Date(e);!e.includes("Z")&&!e.match(/[+-]\d{2}:\d{2}$/)&&(s=new Date(e+"Z"));const n={month:"short",day:"numeric",hour:"numeric",minute:"2-digit"};return s.toLocaleString(void 0,{...n,...t})},shallowDelta(e,t){if(Object.keys(t).length==0&&Object.keys(e).length>0)return e;let s={};for(const n in t)e[n]&&t[n]!=e[n]&&(s[n]=e[n]);return Object.keys(s).length>0?s:t},genLorumIpsum(e=1){}},Zt=(e,t)=>{const s=e.__vccOpts||e;for(const[n,a]of t)s[n]=a;return s},$p={class:"auth-page"},Up={__name:"splash_route",setup(e){const t=yt(),s=nl();return ye(),setTimeout(()=>{s&&s.name=="splash_route"&&(mvvLegit&&mvvLegit.isRouteAllowed("home_route")?t.push({name:"home_route"}):t.push({name:"signin_route"}))},3e3),(n,a)=>(tt(),_t("div",$p,[...a[0]||(a[0]=[Qt('<div class="auth-page-left" data-v-910ecc85><div class="auth-bg" data-v-910ecc85><div class="auth-bg-image" data-v-910ecc85></div><div class="auth-bg-image" data-v-910ecc85></div><div class="auth-bg-image" data-v-910ecc85></div></div><div class="auth-overlay" data-v-910ecc85></div><div class="auth-branding-content" data-v-910ecc85><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-910ecc85><p class="auth-branding-tagline" data-v-910ecc85>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-910ecc85>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-910ecc85> © 2026 Bet Max Action. All rights reserved. </div></div>',1),I("div",{class:"auth-page-right"},[I("div",{class:"auth-card splash-content"},[I("p",{class:"splash-message"},"Loading Tournaments..."),I("br"),I("br"),I("neodigm-juicebar",{role:"progressbar","data-n55-theme":"brand","data-n55-size":"medium",style:{"background-color":"#242424"}},[I("div")])])],-1)])]))}},go=Zt(Up,[["__scopeId","data-v-910ecc85"]]);class Hp extends HTMLElement{connectedCallback(){this.attachShadow({mode:"open"}),this.render()}static get observedAttributes(){return["sport","data-sync-theme"]}attributeChangedCallback(){this.shadowRoot&&this.render()}render(){this.getAttribute("sport");const s=document.getElementById("app")?.getAttribute("data-sync-theme").toLowerCase()||"dark",n=s==="dark";let a=this.getAttribute("data-sport-group")||"Soccer",r,o;a==="Multi"?(r="Multi",o=`var( --sport-icon__Multi--${s} )`):(r=a.replaceAll(" ","_"),o=`var( --sport-icon__${r}--${s} )`),this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: inline-block;
          width: 30px; height: 30px;
          border-radius: 50%;
          background-color: ${n?"var( --app-core-color--gray-1__dark--brand )":"var( --app-core-color--gray-6__dark--brand )"};
          background-position: center;
          filter: brightness(70%);
          border: 1px solid var( --app-core-color--gray-4__dark--brand );
        }

        :host([data-sport-group="${a}"]) {
          background-image: ${o};
        }
      </style>
      <div class="icon"></div>
    `}}customElements.define("bma-sport-icon",Hp);class Gp extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-bma-tourn-caption","data-bma-tourn-entities","data-bma-tourn-entry_fee","data-bma-tourn-matches","data-bma-tourn-matches_expanded","data-bma-tourn-prize_distro","data-bma-tourn-sports_allowed","data-bma-tourn-status","data-sync-theme","data-bma-tourn-tagline","data-bma-tourn-tournament_dollars","data-bma-tourn-tags"]}connectedCallback(){this.render(),this.observeTheme(),this.attachEventListeners()}dispatchCardEvent(t,s={}){const n=new CustomEvent("bma-tournament-action",{bubbles:!0,composed:!0,detail:{action:t,tournamentId:this.getAttribute("data-bma-tourn-id"),tournamentGuid:this.getAttribute("data-bma-tourn-guid"),tournamentStatus:this.status,...s}});this.dispatchEvent(n)}attachEventListeners(){this.shadowRoot.addEventListener("click",t=>{const s=t.target.closest(".btn-info"),n=t.target.closest(".btn-join"),a=t.target.closest(".btn-play"),r=t.target.closest("bma-sport-icon");if(s){t.stopPropagation(),this.dispatchCardEvent("INFO");return}if(n){t.stopPropagation(),this.dispatchCardEvent("JOIN");return}if(a){t.stopPropagation(),this.dispatchCardEvent("PLAY");return}if(r){t.stopPropagation();const o=r.getAttribute("sport"),i=this.getSportInfo(o);this.dispatchCardEvent("SPORT_ICON",{sportKey:o,sportTitle:i.title,sportDescription:i.description});return}t.target.closest(".card")&&this.dispatchCardEvent("FOCUS")})}attributeChangedCallback(t,s,n){s!==n&&this.render()}observeTheme(){const t=document.getElementById("app");if(!t)return;new MutationObserver(()=>{this.render()}).observe(t,{attributes:!0,attributeFilter:["data-sync-theme"]})}getTheme(){return document.getElementById("app")?.getAttribute("data-sync-theme")||"dark"}get caption(){return this.getAttribute("data-bma-tourn-caption")||"Tournament"}get tournament_dollars(){return this.getAttribute("data-bma-tourn-tournament_dollars")||"0"}get entities(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const s=JSON.parse(t);return Array.isArray(s)?s.find(a=>Array.isArray(a))?.length||"0":s?.guids?.length||"0"}catch{return"0"}return"0"}get entitiesGuids(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const s=JSON.parse(t);return Array.isArray(s)?s.find(a=>Array.isArray(a))||[]:s?.guids||[]}catch{return[]}return[]}get entitiesData(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const s=JSON.parse(t);if(Array.isArray(s)){const n=s.find(r=>r&&typeof r=="object"&&!Array.isArray(r));return{current:s.find(r=>Array.isArray(r))?.length||0,max:parseInt(n?.max)||100}}return{current:s?.guids?.length||0,max:s?.max||100}}catch{return{current:0,max:100}}return{current:0,max:100}}isUserParticipating(){const s=document.getElementById("app")?.dataset?.userGuid;return s?this.entitiesGuids.includes(s):!1}getUserBadge(){const s=document.getElementById("app")?.dataset?.userGuid;if(!s)return null;const n=this.getAttribute("data-bma-tourn-tags");if(!n)return null;try{const a=JSON.parse(n);if(!Array.isArray(a))return null;const r=a.find(o=>!!(typeof o=="object"&&o!==null&&(o.entity_guid===s&&o.badge&&o.badge.startsWith("--badge__ribbon--")||o[s]&&o[s].startsWith("--badge__ribbon--"))));return r&&(r.badge||r[s])||null}catch{return null}}getBadgeClass(){const t=this.getUserBadge();if(!t)return"";const s=t.match(/--badge__ribbon--(\w+)/);return s?s[1]:""}getSportInfo(t){const s=Kt.find(n=>n.key===t);return s?{title:s.title,description:s.description}:{title:t,description:t}}get matches(){let t=this.getAttribute("data-bma-tourn-matches");return t&&(t=JSON.parse(t)),t?.length||"0"}get matches_expanded(){let t=this.getAttribute("data-bma-tourn-matches_expanded");return t&&(t=JSON.parse(t)),t||null}get marqueeText(){const t=this.matches_expanded;return!t||t.length===0?"   Exciting Sports Matchups Coming Soon!   ":"  "+t.map(n=>{const a=n.title||"Match";let r="TBD";if(n.scheduled_at)try{r=new Date(n.scheduled_at).toLocaleString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit",hour12:!0})}catch{r=n.scheduled_at}return`  ${a} @ ${r}  `}).join(" • ")+"  "}get tagline(){return this.getAttribute("data-bma-tourn-tagline")||""}get status(){return this.getAttribute("data-bma-tourn-status")||"upcoming"}get prizeDistro(){const t=this.getAttribute("data-bma-tourn-prize_distro");if(!t)return null;try{return JSON.parse(t)}catch{return t}}get entryFee(){return this.getAttribute("data-bma-tourn-entry_fee")||"Free"}get sportsAllowed(){const t=this.getAttribute("data-bma-tourn-sports_allowed");if(!t)return[];try{const s=JSON.parse(t);return Array.isArray(s)?s.map(n=>typeof n=="object"&&n.sport_key?n.sport_key:n):[s]}catch{return[t]}}get sportsDisplay(){const t=this.sportsAllowed;if(!Array.isArray(t)||t.length===0)return'<bma-sport-icon sport="default" data-sport-group="default"></bma-sport-icon>';const s=Math.min(t.length,3);let n="";for(let a=0;a<s;a++){const r=t[a].key,o=Kt.find(l=>l.key===r),i=o?o.group:"default";n+=`<bma-sport-icon sport="${r}" data-sport-group="${i}"></bma-sport-icon>`}return t.length>3&&(n+=`<span class="sport-count">+${t.length-3}</span>`),n}render(){const t=this.getTheme(),s=t==="dark",n=this.getAttribute("data-sync-theme")||t;this.shadowRoot.innerHTML=`
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
          background: ${s?"linear-gradient(135deg, var( --app-core-color--gray-3__dark--brand ) 0%, var( --app-core-color--green-3__dark--brand ) 100%)":"linear-gradient(135deg, var( --app-core-color--gray-7__light--brand ) 0%, var( --app-core-color--green-5__light--brand ) 100%)"};

        }

        :host([data-bma-tourn-class="LOCKED"]) .card {
          background: ${s?"linear-gradient(135deg, var( --app-core-color--gray-3__dark--brand ) 0%, var( --app-core-color--yellow-3__dark--brand ) 100%)":"linear-gradient(135deg, var( --app-core-color--gray-7__light--brand ) 0%, var( --app-core-color--yellow-5__light--brand ) 100%)"};
        }

        :host([data-bma-tourn-class="COMPLETED"]) .card {
          background: ${s?"linear-gradient(135deg, var( --app-core-color--gray-3__dark--brand ) 0%, var( --app-core-color--red-1__dark--brand ) 100%)":"linear-gradient(135deg, var( --app-core-color--gray-7__light--brand ) 0%, var( --app-core-color--red-5__light--brand ) 100%)"};
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
          background: ${s?"linear-gradient(135deg, var( --app-core-color--gray-3__dark--brand ) 0%, var( --app-core-color--gray-2__dark--brand ) 100%)":"linear-gradient(135deg, var( --app-core-color--gray-7__light--brand ) 0%, var( --app-core-color--gray-6__light--brand ) 100%)"};

          border: none;
          border-radius: 0;
          color: ${s?"#fff":"#000"};
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
          QQQQopacity: 0.9;
        }

        .card[data-bma-tourn-status="COMPLETED"]:hover {
          QQQQopacity: 1;
        }

        .card-header {
          display: flex;
          flex-direction: column;
          height: 30%;
          padding: 16px;
          background:  ${s?"var( --app-core-color--gray-3__dark--brand )":"var( --app-core-color--gray-4__light--brand )"};
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
          color: ${s?"var( --app-core-color--gray-6__light--brand )":"var( --app-core-color--white-5__dark--brand )"};
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
          color: ${s?"#b0b0b0":"#666"};
          text-transform: uppercase;
          font-weight: 500;
        }

        .sport-count {
          margin-left: 0.25rem;
          font-size: 0.7rem;
          color: ${s?"#888":"#999"};
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
          color: ${s?"var(--app-core-color--yellow-3__dark--brand, #F7C60D)":"#FFB700"};
          font-family: 'Monaco', 'Courier New', monospace;
          text-shadow: ${s?"0 1px 2px rgba(0, 0, 0, 0.5)":"none"};
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
          color: ${s?"#00E676":"#00C853"};
          border: 1px solid rgba(0, 230, 118, 0.3);
          position: relative;
          overflow: hidden;
          font-weight: 600;
        }

        .btn-info:hover {
          background: rgba(0, 230, 118, 0.25);
          border-color: rgba(0, 230, 118, 0.4);
          box-shadow: 0 0 12px rgba(0, 230, 118, 0.3);
          color: ${s?"#00FF88":"#00E676"};
        }

        /* Yellow INFO button for LOCKED status */
        :host([data-bma-tourn-status="LOCKED"]) .btn-info {
          background: rgba(247, 198, 13, 0.15);
          color: ${s?"#F7C60D":"#B28F09"};
          border: 1px solid rgba(247, 198, 13, 0.3);
        }

        :host([data-bma-tourn-status="LOCKED"]) .btn-info:hover {
          background: rgba(247, 198, 13, 0.25);
          border-color: rgba(247, 198, 13, 0.4);
          box-shadow: 0 0 12px rgba(247, 198, 13, 0.3);
          color: ${s?"#FFD700":"#F7C60D"};
        }

        /* Gray INFO button for COMPLETED status */
        :host([data-bma-tourn-status="COMPLETED"]) .btn-info {
          background: rgba(150, 150, 150, 0.15);
          color: ${s?"#969696":"#484848"};
          border: 1px solid rgba(150, 150, 150, 0.3);
        }

        :host([data-bma-tourn-status="COMPLETED"]) .btn-info:hover {
          background: rgba(150, 150, 150, 0.25);
          border-color: rgba(150, 150, 150, 0.4);
          box-shadow: 0 0 12px rgba(150, 150, 150, 0.3);
          color: ${s?"#B0B0B0":"#323232"};
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
          background: ${s?"var(--app-core-color--green-3__dark--brand)":"var(--app-core-color--green-4__dark--brand)"};
        }

        :host([data-bma-tourn-status="LOCKED"]) .progress-fill {
          background: ${s?"var(--app-core-color--yellow-3__dark--brand)":"var(--app-core-color--yellow-4__dark--brand)"};
        }

        :host([data-bma-tourn-status="COMPLETED"]) .progress-fill {
          background: ${s?"var(--app-core-color--red-3__dark--brand)":"var(--app-core-color--red-4__dark--brand)"};
        }

        :host([data-bma-tourn-status="DRAFT"]) .progress-fill {
          background: ${s?"var(--app-core-color--gray-5__dark--brand)":"var(--app-core-color--gray-5__light--brand)"};
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

      <div class="card" data-sync-theme="${n}">
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
    `}}customElements.define("bma-tournament-card",Gp);class Yp extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.setupEventListeners(),setTimeout(()=>{const t=this.shadowRoot.querySelector(".content_stake_text input");t&&t.focus()},100)}static get observedAttributes(){return["data-content-team-points","data-content-odds","data-content-stake-text","data-content-type","data-abbreviated-title","data-scheduled-at","data-stake","data-payout"]}attributeChangedCallback(t,s,n){if(s!==n){if(t==="data-stake")return;if(t==="data-payout"){this.updatePayoutDisplay();return}this.render()}}get teamPoints(){return this.getAttribute("data-content-team-points")||""}get odds(){return this.getAttribute("data-content-odds")||"0"}get stake(){return this.getAttribute("data-content-stake-text")||"0"}get type(){return this.getAttribute("data-content-type")||""}get abbreviatedTitle(){return this.getAttribute("data-abbreviated-title")||""}get scheduledAt(){const t=this.getAttribute("data-scheduled-at")||"";return t?qs.formatDateLocal(t):""}get payout(){const t=this.getAttribute("data-payout")||"0",s=parseFloat(t);return isNaN(s)?"0.00":s.toFixed(2)}updatePayoutDisplay(){const t=this.shadowRoot?.querySelector(".payout-value");t&&(t.textContent=this.payout)}setupEventListeners(){const t=this.shadowRoot.querySelector(".grid_close button");t&&t.addEventListener("click",()=>{Q.publish("COREBETSLIP.CLOSE",JSON.stringify({teamPoints:this.teamPoints,odds:this.odds,stake:this.stake,type:this.type,abbreviatedTitle:this.abbreviatedTitle,scheduledAt:this.getAttribute("data-scheduled-at"),timestamp:Date.now()})),this.dispatchEvent(new CustomEvent("bma-bet-entry-remove",{bubbles:!0,composed:!0,detail:{teamPoints:this.teamPoints,odds:this.odds,stake:this.stake,type:this.type,abbreviatedTitle:this.abbreviatedTitle,scheduledAt:this.getAttribute("data-scheduled-at")}}))});const s=this.shadowRoot.querySelector(".content_stake_text input");s&&s.addEventListener("input",n=>{const a=n.target.value;this.setAttribute("data-stake",a)})}render(){this.shadowRoot.innerHTML=`
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

        @media (orientation: portrait), (max-width: 768px) {
          .grid_content {
            grid-template-columns: 40% auto 120px;
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
    `,this.setupEventListeners()}}customElements.define("bma-bet-entry",Yp);class jp extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-match-id","data-match-guid","data-match-title","data-match-short-title","data-scheduled-at","data-home-team","data-away-team","data-odds-markets","data-is-disabled","data-sync-theme","data-scoreboard","data-sport-key"]}get matchId(){return this.getAttribute("data-match-id")||""}get matchGuid(){return this.getAttribute("data-match-guid")||""}get matchTitle(){return this.getAttribute("data-match-title")||""}get shortTitle(){return this.getAttribute("data-match-short-title")||this.matchTitle}get scheduledAt(){return this.getAttribute("data-scheduled-at")||""}get homeTeam(){return this.getAttribute("data-home-team")||"Home"}get awayTeam(){return this.getAttribute("data-away-team")||"Away"}get oddsMarkets(){const t=this.getAttribute("data-odds-markets");if(!t)return null;try{return JSON.parse(t)}catch(s){return console.error("[bma-bet-match-card] Error parsing odds_markets:",s),null}}get isDisabled(){return this.getAttribute("data-is-disabled")==="true"}get theme(){return this.getAttribute("data-sync-theme")||"dark"}get scoreboard(){const t=this.getAttribute("data-scoreboard");if(!t)return null;try{return JSON.parse(t)}catch(s){return console.error("[bma-bet-match-card] Error parsing scoreboard:",s),null}}get sportKey(){return this.getAttribute("data-sport-key")||""}get sportGroup(){const t=this.sportKey;if(!t)return"";const s=Kt.find(n=>n.key===t);return s?s.group:""}connectedCallback(){this.render(),this.startCountdownTimer()}disconnectedCallback(){this.stopCountdownTimer()}startCountdownTimer(){this.stopCountdownTimer(),this.countdownInterval=setInterval(()=>{this.updateCountdown()},6e4)}stopCountdownTimer(){this.countdownInterval&&(clearInterval(this.countdownInterval),this.countdownInterval=null)}updateCountdown(){const t=this.shadowRoot?.querySelector(".countdown");t&&(t.textContent=this.getCountdownText())}attributeChangedCallback(t,s,n){s!==n&&this.render()}formatDate(t){if(!t)return"TBD";let s=new Date(t);return!t.includes("Z")&&!t.match(/[+-]\d{2}:\d{2}$/)&&(s=new Date(t+"Z")),s.toLocaleString(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}getCountdownText(){if(!this.scheduledAt)return"";const t=new Date,s=new Date(this.scheduledAt);!this.scheduledAt.includes("Z")&&!this.scheduledAt.match(/[+-]\d{2}:\d{2}$/)&&s.setTime(new Date(this.scheduledAt+"Z").getTime());const n=s-t;if(n<=0)return"";const a=Math.floor(n/(1e3*60*60)),r=Math.floor(n%(1e3*60*60)/(1e3*60));return a>24?`${Math.floor(a/24)}d ${a%24}h`:a>0?`${a}h ${r}m`:r>5?`${r} min`:"Starting Soon"}getGameStatus(){const t=this.getCountdownText();if(t)return{type:"upcoming",text:t,color:"#F7C60D"};const s=this.scoreboard;if(s&&s.time_remaining){const n=s.time_remaining.toLowerCase();if(n==="final")return{type:"final",text:"Final",color:"#969696"};if(n==="in progress"||n.includes("q")||n.includes("half")||n.includes("period")){const a=s.home_score!==void 0&&s.home_score!==null||s.away_score!==void 0&&s.away_score!==null,r=s.period!==void 0&&s.period!==null&&s.period!==0;if(a||r)return{type:"live",text:s.time_remaining,color:"#00E676"}}}return{type:"scheduled",text:this.formatDate(this.scheduledAt),color:"#969696"}}handleButtonClick(t,s,n,a,r){t.stopPropagation();const o=t.currentTarget,i=o.classList.contains("btn--active"),l={matchId:this.matchId,matchGuid:this.matchGuid,matchTitle:this.matchTitle,abbreviatedTitle:this.shortTitle,homeTeam:this.homeTeam,awayTeam:this.awayTeam,scheduledAt:this.scheduledAt,type:s,team:n,price:a,point:r,timestamp:Date.now()};this.dispatchEvent(new CustomEvent("bet-button-click",{bubbles:!0,composed:!0,detail:{betData:l,isActive:i,button:o}}))}renderButton(t,s,n,a){if(!n)return'<button class="btn btn--empty" disabled></button>';const r=n.price,o=n.point;let i="";return t==="spread"?i=`${o>0?`+${o}`:o}<br>${r}`:t==="money"?i=r:t==="total"&&(i=`${a}${o}<br>${r}`),`<button class="btn"
                    data-bet-type="${t}"
                    data-team="${s}"
                    data-price="${r}"
                    ${o?`data-point="${o}"`:""}>
            ${i}
        </button>`}render(){const t=this.theme==="dark",s=this.oddsMarkets,n=s&&(s.h2h||s.totals||s.spreads),a=!this.isDisabled&&n,r=this.getGameStatus(),o=this.scoreboard,i=o?.home_score||0,l=o?.away_score||0,c=r?.type==="live"||r?.type==="final",d=s?.spreads?.outcomes?.find(h=>h.name===this.homeTeam),u=s?.spreads?.outcomes?.find(h=>h.name===this.awayTeam),p=s?.h2h?.outcomes?.find(h=>h.name===this.homeTeam),b=s?.h2h?.outcomes?.find(h=>h.name===this.awayTeam),m=s?.totals?.outcomes?.find(h=>h.name==="Over"),f=s?.totals?.outcomes?.find(h=>h.name==="Under");this.shadowRoot.innerHTML=`
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
                    background-image: #000;
                    background-size: 100% 2px;
                    background-position: 0 100%;
                    background-repeat: no-repeat;
                }

                .card--live .date-status {
                    position: relative;
                    overflow: hidden;
                }

                .QQQQcard--live .date-status::after {
                    content: '';
                    position: absolute;
                    bottom: -2px;
                    left: -100%;
                    width: 100%;
                    height: 2px;
                    background: #000;
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
                @media (orientation: portrait), (max-width: 768px) {
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
                    ${a?`
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
                            ${c?`<span class="team-score">${i}</span>`:""}
                        </div>
                        ${a?`
                            <div class="buttons">
                                ${this.renderButton("spread","home",d)}
                                ${this.renderButton("money","home",p)}
                                ${this.renderButton("total","over",m,"O")}
                            </div>
                        `:""}
                    </div>

                    <div class="row row--away">
                        <div class="team team--away">
                            <span class="team-name">${this.awayTeam}</span>
                            ${c?`<span class="team-score">${l}</span>`:""}
                        </div>
                        ${a?`
                            <div class="buttons">
                                ${this.renderButton("spread","away",u)}
                                ${this.renderButton("money","away",b)}
                                ${this.renderButton("total","under",f,"U")}
                            </div>
                        `:""}
                    </div>
                </div>
            </div>
        `,a&&this.shadowRoot.querySelectorAll(".btn:not(.btn--empty)").forEach(h=>{const g=h.dataset.betType,y=h.dataset.team,_=h.dataset.price,S=h.dataset.point||null;h.addEventListener("click",E=>this.handleButtonClick(E,g,y,_,S))})}}customElements.define("bma-bet-match-card",jp);class Kp extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}static get observedAttributes(){return["data-match-guid","data-match-title","data-match-scheduled-at","data-match-home-team","data-match-away-team","data-match-home-score","data-match-away-score","data-match-scoreboard","data-match-sport-id","data-sync-theme"]}attributeChangedCallback(t,s,n){s!==n&&this.render()}get matchGuid(){return this.getAttribute("data-match-guid")||""}get matchTitle(){return this.getAttribute("data-match-title")||"Match"}get scheduledAt(){return this.getAttribute("data-match-scheduled-at")||""}get homeTeam(){return this.getAttribute("data-match-home-team")||"Home"}get awayTeam(){return this.getAttribute("data-match-away-team")||"Away"}get homeScore(){const t=this.getAttribute("data-match-home-score");return t!=null&&t!==""?t:null}get awayScore(){const t=this.getAttribute("data-match-away-score");return t!=null&&t!==""?t:null}get scoreboardData(){const t=this.getAttribute("data-match-scoreboard");if(!t)return null;try{return typeof t=="string"?JSON.parse(t):t}catch(s){return console.warn("[bma-match-status] Failed to parse scoreboard data:",s),null}}get sportId(){return this.getAttribute("data-match-sport-id")||""}get theme(){return this.getAttribute("data-sync-theme")||"dark"}getSportAbbr(){return{basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",hockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",cricket:"CRI",rugby:"RUG",tennis:"TEN",golf:"GOLF"}[this.sportId]||"SPORT"}getMatchStatus(){const t=this.scoreboardData,s=this.homeScore!==null&&this.awayScore!==null;let n=!1;if(this.scheduledAt){let o=this.scheduledAt;!o.includes("Z")&&!o.match(/[+-]\d{2}:\d{2}$/)&&(o=o+"Z");const i=new Date(o),l=new Date(Date.now()-300*1e3);n=i<l}let a="UPCOMING",r=null;if(t?.time_remaining){const o=t.time_remaining;o==="Final"?(a="FINAL",r="Final"):o==="In Progress"?n?(a="IN_PROGRESS",r="In Progress"):(a="UPCOMING",r="Upcoming"):(a="IN_PROGRESS",r=o)}else s?(a="FINAL",r="Final"):(a="UPCOMING",r="Upcoming");return{status:a,timeRemaining:r}}render(){const{status:t,timeRemaining:s}=this.getMatchStatus(),n=this.homeScore!==null&&this.awayScore!==null,a=this.scheduledAt?qs.formatDateLocal(this.scheduledAt,{timeZoneName:"short"}):"",r=parseInt(this.homeScore),o=parseInt(this.awayScore),i=n&&t==="FINAL"&&r>o,l=n&&t==="FINAL"&&o>r;this.shadowRoot.innerHTML=`
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

        /* Portrait/Mobile - Stack layout vertically */
        @media (orientation: portrait), (max-width: 768px) {
          .match-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
            padding: 10px 12px;
            font-size: 0.8rem;
          }

          .match-row:hover {
            padding-left: 12px;
          }

          .sport-indicator {
            font-size: 0.7rem;
            min-width: auto;
          }

          .match-content {
            width: 100%;
            flex-wrap: wrap;
            gap: 6px;
          }

          .status {
            font-size: 0.75rem;
            align-self: flex-end;
          }

          .bullet {
            display: none;
          }

          .detail-row {
            font-size: 0.7rem;
          }
        }
      </style>

      <div class="match-row ${t==="FINAL"?"match-row--final":""} ${t==="IN_PROGRESS"?"match-row--live":""}" data-sync-theme="${this.theme}">
        <span class="sport-indicator">${this.getSportAbbr()}</span>
        <span class="bullet">•</span>
        <div class="match-content">
          ${n?`
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
          ${s||t}
        </span>
      </div>
      <div class="match-details">
        <div class="detail-row">Scheduled: ${a}</div>
        ${this.matchTitle?`<div class="detail-row">Match: ${this.matchTitle}</div>`:""}
      </div>
    `}}customElements.define("bma-match-status",Kp);class $t extends HTMLElement{static currentlyExpanded=null;constructor(){super(),this.attachShadow({mode:"open"}),this.expanded=!1}static get observedAttributes(){return["data-rank","data-username","data-user-guid","data-tournament-dollars","data-total-betslips","data-total-payout","data-combined-betslips","data-user-matches","data-badge-class","data-is-current-user","data-sync-theme"]}get rank(){return this.getAttribute("data-rank")||""}get username(){return this.getAttribute("data-username")||"Unknown"}get userGuid(){return this.getAttribute("data-user-guid")||""}get tournamentDollars(){return this.getAttribute("data-tournament-dollars")||"0"}get totalBetslips(){return this.getAttribute("data-total-betslips")||"0"}get totalPayout(){return this.getAttribute("data-total-payout")||"0"}get combinedBetslips(){const t=this.getAttribute("data-combined-betslips");if(!t)return[];try{return JSON.parse(t)}catch(s){return console.error("[bma-leaderboard-card] Error parsing combined_betslips:",s),[]}}get userMatches(){const t=this.getAttribute("data-user-matches");if(!t)return[];try{return JSON.parse(t)}catch(s){return console.error("[bma-leaderboard-card] Error parsing user_matches:",s),[]}}get badgeClass(){return this.getAttribute("data-badge-class")||""}get isCurrentUser(){return this.getAttribute("data-is-current-user")==="true"}get theme(){return this.getAttribute("data-sync-theme")||"dark"}connectedCallback(){this.render(),this.attachEventListeners()}attributeChangedCallback(t,s,n){s!==n&&(this.render(),this.attachEventListeners())}toggleExpanded(){$t.currentlyExpanded&&$t.currentlyExpanded!==this&&$t.currentlyExpanded.collapse(),this.expanded=!this.expanded;const t=this.shadowRoot.querySelector(".leaderboard-card__details"),s=this.shadowRoot.querySelector(".expand-icon");if(this.expanded){t.style.display="block",s.textContent="▼",$t.currentlyExpanded=this;const n=document.querySelector("body > neodigm-sodapop");n&&n.scrollTo(0,0)}else t.style.display="none",s.textContent="▶",$t.currentlyExpanded===this&&($t.currentlyExpanded=null)}collapse(){this.expanded=!1;const t=this.shadowRoot.querySelector(".leaderboard-card__details"),s=this.shadowRoot.querySelector(".expand-icon");t&&(t.style.display="none"),s&&(s.textContent="▶")}attachEventListeners(){const t=this.shadowRoot.querySelector(".leaderboard-card");t&&t.addEventListener("click",()=>this.toggleExpanded())}renderBetsTable(){const t=this.combinedBetslips,s=this.userMatches;if(!t||t.length===0)return'<p class="no-bets">No bets available</p>';const n=t.filter(i=>{const l=i.bet||[];if(l.length===0)return!1;const c=l[0],d=Object.keys(c).filter(u=>u!=="short_title")[0];return c[d]?.reconciled===!0});if(n.length===0)return'<p class="no-bets">No reconciled bets</p>';const a={};s.forEach(i=>{const l=i.guid||i.id||i.odds_id;l&&(a[l]=i)});const r={};n.forEach(i=>{const l=i.coreMatches__guid||i.match_guid||i.odds_id||"unknown";r[l]||(r[l]={bets:[],matchTitle:"Unknown Match",sportKey:"default"});const c=a[l];if(c){r[l].matchTitle=c.short_title||c.title||"Unknown Match";const d=c.sport_id,u=Kt.find(p=>p.key===d);r[l].sportKey=u?.group||"default"}r[l].bets.push(i)});let o="";return Object.keys(r).forEach(i=>{const l=r[i],c=l.sportKey||"default",d=l.matchTitle||"Unknown Match";o+=`
                <div class="match-group-header">
                    <bma-sport-icon data-sport-group="${c}"></bma-sport-icon>
                    <span class="match-title">${d}</span>
                </div>
            `,o+=`
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
            `,l.bets.forEach(u=>{const p=u.bet||[];if(p.length===0)return;const b=p[0],m=Object.keys(b).filter(g=>g!=="short_title")[0],f=b[m],h=parseFloat(f.payout||0)>0;o+=`
                    <tr class="${h?"bet-win":"bet-loss"}">
                        <td class="bet-selection">${m}</td>
                        <td class="bet-type">${f.type||"-"}</td>
                        <td class="bet-odds">${f.odds>0?"+":""}${f.odds||"-"}</td>
                        <td class="bet-stake">$${parseFloat(f.stake||0).toFixed(2)}</td>
                        <td class="bet-payout ${h?"payout-win":"payout-loss"}">$${parseFloat(f.payout||0).toFixed(2)}</td>
                    </tr>
                `}),o+=`
                    </tbody>
                </table>
            `}),o}render(){const t=this.isCurrentUser?"leaderboard-card--current-user":"",s=this.badgeClass?`<div class="badge-trophy ${this.badgeClass}"></div>`:"";this.shadowRoot.innerHTML=`
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

                /* Responsive - Portrait/Mobile */
                @media (orientation: portrait), (max-width: 768px) {
                    .leaderboard-card {
                        padding: 0.75rem;
                    }

                    /* Stack header vertically */
                    .leaderboard-card__header {
                        grid-template-columns: 1fr;
                        grid-template-rows: auto auto auto;
                        gap: 0.5rem;
                        text-align: left;
                    }

                    .leaderboard-card__rank {
                        font-size: 1.25rem;
                        text-align: left;
                    }

                    .leaderboard-card__username {
                        font-size: 0.95rem;
                    }

                    .leaderboard-card__dollars {
                        text-align: left;
                        flex-direction: row;
                        align-items: baseline;
                        gap: 0.5rem;
                    }

                    .dollars-amount {
                        font-size: 1.125rem;
                    }

                    .dollars-label {
                        font-size: 0.7rem;
                        order: -1;
                    }

                    /* Details section */
                    .leaderboard-card__details {
                        margin-top: 1rem;
                        padding-top: 1rem;
                    }

                    .details-summary {
                        grid-template-columns: 1fr;
                        gap: 0.5rem;
                        margin-bottom: 1rem;
                    }

                    .summary-item {
                        padding: 0.5rem;
                    }

                    .summary-item__value {
                        font-size: 1rem;
                    }

                    /* Match group header */
                    .match-group-header {
                        padding: 0.5rem 0.75rem;
                        gap: 0.5rem;
                    }

                    .match-title {
                        font-size: 0.75rem;
                    }

                    /* Make table scrollable horizontally */
                    .bets-table {
                        display: block;
                        overflow-x: auto;
                        font-size: 0.7rem;
                        -webkit-overflow-scrolling: touch;
                    }

                    .bets-table thead,
                    .bets-table tbody,
                    .bets-table tr {
                        display: table;
                        width: 100%;
                        table-layout: fixed;
                    }

                    .bets-table th,
                    .bets-table td {
                        padding: 0.5rem 0.25rem;
                        font-size: 0.7rem;
                    }

                    .bets-table th {
                        font-size: 0.65rem;
                    }

                    /* Adjust column widths for mobile */
                    .bet-selection {
                        width: 100px;
                        font-size: 0.7rem;
                    }

                    .bet-type {
                        font-size: 0.65rem;
                    }

                    .bet-odds,
                    .bet-stake,
                    .bet-payout {
                        font-size: 0.7rem;
                    }

                    /* Badge size */
                    .badge-trophy {
                        width: 20px;
                        height: 20px;
                    }
                }
            </style>

            <div class="leaderboard-card ${t}">
                <span class="expand-icon">▶</span>

                <div class="leaderboard-card__header">
                    <div class="leaderboard-card__rank">#${this.rank}</div>

                    <div class="leaderboard-card__user">
                        ${s}
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
        `}}customElements.define("bma-leaderboard-card",$t);class il{static isPayout(t){if(!t?.Bet||!t?.Match)return console.error("[CoreBetSlip.isPayout] Invalid bet object - missing Bet or Match data"),!1;const{type:s,scope:n}=t.Bet,{home_team_id:a,home_team_score:r,away_team_id:o,away_team_score:i}=t.Match,l=s?.toUpperCase()||"",c=parseFloat(r)||0,d=parseFloat(i)||0;if(c===0&&d===0)return console.warn("[CoreBetSlip.isPayout] Invalid scores - both teams have 0 points"),!1;switch(console.log(`[CoreBetSlip.isPayout] Evaluating ${l} bet:`,{home:`${a} (${c})`,away:`${o} (${d})`,scope:n}),l){case"MONEY":return this._evaluateMoneyline(n.team_id,a,o,c,d);case"SPREAD":return this._evaluateSpread(n.team_id,n.point,a,o,c,d);case"TOTAL":return this._evaluateTotal(n.over,n.under,c,d);case"PROP":return console.warn("[CoreBetSlip.isPayout] PROP bet evaluation not implemented"),!1;case"PARLAY":return console.warn("[CoreBetSlip.isPayout] PARLAY bet evaluation not implemented"),!1;default:return console.warn("[CoreBetSlip.isPayout] Unknown bet type:",l),!1}}static _evaluateMoneyline(t,s,n,a,r){const o=t===s,i=t===n;if(!o&&!i)return console.warn("[CoreBetSlip.isPayout] Betted team does not match home or away team"),!1;const l=a>r,c=r>a;if(a===r)return console.log("[CoreBetSlip.isPayout] MONEY - PUSH (tie game)"),!1;const u=o&&l||i&&c;return console.log(`[CoreBetSlip.isPayout] MONEY - ${u?"WON":"LOST"}`),u}static _evaluateSpread(t,s,n,a,r,o){const i=t===n,l=t===a;if(!i&&!l)return console.warn("[CoreBetSlip.isPayout] Betted team does not match home or away team"),!1;const c=parseFloat(s)||0;let d=r,u=o;i?d=r+c:u=o+c;const p=d>u,b=u>d;if(d===u)return console.log("[CoreBetSlip.isPayout] SPREAD - PUSH (exact spread)"),!1;const f=i&&p||l&&b;return console.log(`[CoreBetSlip.isPayout] SPREAD (${c>0?"+":""}${c}) - ${f?"WON":"LOST"}`),f}static _evaluateTotal(t,s,n,a){const r=n+a,o=t&&t!=="";if(!o&&!(s&&s!==""))return console.warn("[CoreBetSlip.isPayout] No over/under value specified"),!1;const l=parseFloat(o?t:s);if(r===l)return console.log("[CoreBetSlip.isPayout] TOTAL - PUSH (exact line)"),!1;let c=!1;return o?(c=r>l,console.log(`[CoreBetSlip.isPayout] TOTAL OVER ${l} (actual: ${r}) - ${c?"WON":"LOST"}`)):(c=r<l,console.log(`[CoreBetSlip.isPayout] TOTAL UNDER ${l} (actual: ${r}) - ${c?"WON":"LOST"}`)),c}static calcPayout(t){if(!t?.Bet)return console.error("[CoreBetSlip] Invalid bet object - missing Bet data"),0;const{type:s,odds:n,stake:a}=t.Bet,r=s?.toUpperCase()||"",o=parseFloat(n)||0,i=parseFloat(a)||0;if(i<=0)return console.warn("[CoreBetSlip] Invalid stake amount:",i),0;if(o===0)return console.warn("[CoreBetSlip] Invalid odds value:",o),0;let l=0;switch(r){case"SPREAD":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] SPREAD payout calculated:",{odds:o,stake:i,payout:l});break;case"MONEY":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] MONEY payout calculated:",{odds:o,stake:i,payout:l});break;case"TOTAL":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] TOTAL payout calculated:",{odds:o,stake:i,payout:l});break;case"PROP":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] PROP payout calculated:",{odds:o,stake:i,payout:l});break;case"PARLAY":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] PARLAY payout calculated (single odds):",{odds:o,stake:i,payout:l});break;default:console.warn("[CoreBetSlip] Unknown bet type:",r),l=0;break}return parseFloat(l.toFixed(2))}static calcAmericanOddsPayout(t,s){let n=0;return t>0?n=s*(t/100):t<0?n=s/(Math.abs(t)/100):n=0,s+n}static americanToDecimal(t){return t>0?t/100+1:t<0?100/Math.abs(t)+1:1}static calcImpliedProbability(t){return t>0?100/(t+100)*100:t<0?Math.abs(t)/(Math.abs(t)+100)*100:0}}function mo(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function or(e,t){e===void 0&&(e={}),t===void 0&&(t={});const s=["__proto__","constructor","prototype"];Object.keys(t).filter(n=>s.indexOf(n)<0).forEach(n=>{typeof e[n]>"u"?e[n]=t[n]:mo(t[n])&&mo(e[n])&&Object.keys(t[n]).length>0&&or(e[n],t[n])})}const ll={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function bt(){const e=typeof document<"u"?document:{};return or(e,ll),e}const zp={document:ll,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function Fe(){const e=typeof window<"u"?window:{};return or(e,zp),e}function qp(e){return e===void 0&&(e=""),e.trim().split(" ").filter(t=>!!t.trim())}function Wp(e){const t=e;Object.keys(t).forEach(s=>{try{t[s]=null}catch{}try{delete t[s]}catch{}})}function cl(e,t){return t===void 0&&(t=0),setTimeout(e,t)}function Tn(){return Date.now()}function Vp(e){const t=Fe();let s;return t.getComputedStyle&&(s=t.getComputedStyle(e,null)),!s&&e.currentStyle&&(s=e.currentStyle),s||(s=e.style),s}function Jp(e,t){t===void 0&&(t="x");const s=Fe();let n,a,r;const o=Vp(e);return s.WebKitCSSMatrix?(a=o.transform||o.webkitTransform,a.split(",").length>6&&(a=a.split(", ").map(i=>i.replace(",",".")).join(", ")),r=new s.WebKitCSSMatrix(a==="none"?"":a)):(r=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),n=r.toString().split(",")),t==="x"&&(s.WebKitCSSMatrix?a=r.m41:n.length===16?a=parseFloat(n[12]):a=parseFloat(n[4])),t==="y"&&(s.WebKitCSSMatrix?a=r.m42:n.length===16?a=parseFloat(n[13]):a=parseFloat(n[5])),a||0}function sn(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function Xp(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function je(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let s=1;s<arguments.length;s+=1){const n=s<0||arguments.length<=s?void 0:arguments[s];if(n!=null&&!Xp(n)){const a=Object.keys(Object(n)).filter(r=>t.indexOf(r)<0);for(let r=0,o=a.length;r<o;r+=1){const i=a[r],l=Object.getOwnPropertyDescriptor(n,i);l!==void 0&&l.enumerable&&(sn(e[i])&&sn(n[i])?n[i].__swiper__?e[i]=n[i]:je(e[i],n[i]):!sn(e[i])&&sn(n[i])?(e[i]={},n[i].__swiper__?e[i]=n[i]:je(e[i],n[i])):e[i]=n[i])}}}return e}function nn(e,t,s){e.style.setProperty(t,s)}function dl(e){let{swiper:t,targetPosition:s,side:n}=e;const a=Fe(),r=-t.translate;let o=null,i;const l=t.params.speed;t.wrapperEl.style.scrollSnapType="none",a.cancelAnimationFrame(t.cssModeFrameID);const c=s>r?"next":"prev",d=(p,b)=>c==="next"&&p>=b||c==="prev"&&p<=b,u=()=>{i=new Date().getTime(),o===null&&(o=i);const p=Math.max(Math.min((i-o)/l,1),0),b=.5-Math.cos(p*Math.PI)/2;let m=r+b*(s-r);if(d(m,s)&&(m=s),t.wrapperEl.scrollTo({[n]:m}),d(m,s)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[n]:m})}),a.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=a.requestAnimationFrame(u)};u()}function Ot(e,t){t===void 0&&(t="");const s=Fe(),n=[...e.children];return s.HTMLSlotElement&&e instanceof HTMLSlotElement&&n.push(...e.assignedElements()),t?n.filter(a=>a.matches(t)):n}function Qp(e,t){const s=[t];for(;s.length>0;){const n=s.shift();if(e===n)return!0;s.push(...n.children,...n.shadowRoot?n.shadowRoot.children:[],...n.assignedElements?n.assignedElements():[])}}function Zp(e,t){const s=Fe();let n=t.contains(e);return!n&&s.HTMLSlotElement&&t instanceof HTMLSlotElement&&(n=[...t.assignedElements()].includes(e),n||(n=Qp(e,t))),n}function Sn(e){try{console.warn(e);return}catch{}}function La(e,t){t===void 0&&(t=[]);const s=document.createElement(e);return s.classList.add(...Array.isArray(t)?t:qp(t)),s}function ef(e,t){const s=[];for(;e.previousElementSibling;){const n=e.previousElementSibling;t?n.matches(t)&&s.push(n):s.push(n),e=n}return s}function tf(e,t){const s=[];for(;e.nextElementSibling;){const n=e.nextElementSibling;t?n.matches(t)&&s.push(n):s.push(n),e=n}return s}function Gt(e,t){return Fe().getComputedStyle(e,null).getPropertyValue(t)}function bo(e){let t=e,s;if(t){for(s=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(s+=1);return s}}function sf(e,t){const s=[];let n=e.parentElement;for(;n;)s.push(n),n=n.parentElement;return s}function _o(e,t,s){const n=Fe();return e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(n.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(n.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom"))}let oa;function nf(){const e=Fe(),t=bt();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function ul(){return oa||(oa=nf()),oa}let ia;function af(e){let{userAgent:t}=e===void 0?{}:e;const s=ul(),n=Fe(),a=n.navigator.platform,r=t||n.navigator.userAgent,o={ios:!1,android:!1},i=n.screen.width,l=n.screen.height,c=r.match(/(Android);?[\s\/]+([\d.]+)?/);let d=r.match(/(iPad).*OS\s([\d_]+)/);const u=r.match(/(iPod)(.*OS\s([\d_]+))?/),p=!d&&r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),b=a==="Win32";let m=a==="MacIntel";const f=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!d&&m&&s.touch&&f.indexOf(`${i}x${l}`)>=0&&(d=r.match(/(Version)\/([\d.]+)/),d||(d=[0,1,"13_0_0"]),m=!1),c&&!b&&(o.os="android",o.android=!0),(d||p||u)&&(o.os="ios",o.ios=!0),o}function pl(e){return e===void 0&&(e={}),ia||(ia=af(e)),ia}let la;function rf(){const e=Fe(),t=pl();let s=!1;function n(){const i=e.navigator.userAgent.toLowerCase();return i.indexOf("safari")>=0&&i.indexOf("chrome")<0&&i.indexOf("android")<0}if(n()){const i=String(e.navigator.userAgent);if(i.includes("Version/")){const[l,c]=i.split("Version/")[1].split(" ")[0].split(".").map(d=>Number(d));s=l<16||l===16&&c<2}}const a=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),r=n(),o=r||a&&t.ios;return{isSafari:s||r,needPerspectiveFix:s,need3dFix:o,isWebView:a}}function fl(){return la||(la=rf()),la}function of(e){let{swiper:t,on:s,emit:n}=e;const a=Fe();let r=null,o=null;const i=()=>{!t||t.destroyed||!t.initialized||(n("beforeResize"),n("resize"))},l=()=>{!t||t.destroyed||!t.initialized||(r=new ResizeObserver(u=>{o=a.requestAnimationFrame(()=>{const{width:p,height:b}=t;let m=p,f=b;u.forEach(h=>{let{contentBoxSize:g,contentRect:y,target:_}=h;_&&_!==t.el||(m=y?y.width:(g[0]||g).inlineSize,f=y?y.height:(g[0]||g).blockSize)}),(m!==p||f!==b)&&i()})}),r.observe(t.el))},c=()=>{o&&a.cancelAnimationFrame(o),r&&r.unobserve&&t.el&&(r.unobserve(t.el),r=null)},d=()=>{!t||t.destroyed||!t.initialized||n("orientationchange")};s("init",()=>{if(t.params.resizeObserver&&typeof a.ResizeObserver<"u"){l();return}a.addEventListener("resize",i),a.addEventListener("orientationchange",d)}),s("destroy",()=>{c(),a.removeEventListener("resize",i),a.removeEventListener("orientationchange",d)})}function lf(e){let{swiper:t,extendParams:s,on:n,emit:a}=e;const r=[],o=Fe(),i=function(d,u){u===void 0&&(u={});const p=o.MutationObserver||o.WebkitMutationObserver,b=new p(m=>{if(t.__preventObserver__)return;if(m.length===1){a("observerUpdate",m[0]);return}const f=function(){a("observerUpdate",m[0])};o.requestAnimationFrame?o.requestAnimationFrame(f):o.setTimeout(f,0)});b.observe(d,{attributes:typeof u.attributes>"u"?!0:u.attributes,childList:t.isElement||(typeof u.childList>"u"?!0:u).childList,characterData:typeof u.characterData>"u"?!0:u.characterData}),r.push(b)},l=()=>{if(t.params.observer){if(t.params.observeParents){const d=sf(t.hostEl);for(let u=0;u<d.length;u+=1)i(d[u])}i(t.hostEl,{childList:t.params.observeSlideChildren}),i(t.wrapperEl,{attributes:!1})}},c=()=>{r.forEach(d=>{d.disconnect()}),r.splice(0,r.length)};s({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",l),n("destroy",c)}var cf={on(e,t,s){const n=this;if(!n.eventsListeners||n.destroyed||typeof t!="function")return n;const a=s?"unshift":"push";return e.split(" ").forEach(r=>{n.eventsListeners[r]||(n.eventsListeners[r]=[]),n.eventsListeners[r][a](t)}),n},once(e,t,s){const n=this;if(!n.eventsListeners||n.destroyed||typeof t!="function")return n;function a(){n.off(e,a),a.__emitterProxy&&delete a.__emitterProxy;for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];t.apply(n,o)}return a.__emitterProxy=t,n.on(e,a,s)},onAny(e,t){const s=this;if(!s.eventsListeners||s.destroyed||typeof e!="function")return s;const n=t?"unshift":"push";return s.eventsAnyListeners.indexOf(e)<0&&s.eventsAnyListeners[n](e),s},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const s=t.eventsAnyListeners.indexOf(e);return s>=0&&t.eventsAnyListeners.splice(s,1),t},off(e,t){const s=this;return!s.eventsListeners||s.destroyed||!s.eventsListeners||e.split(" ").forEach(n=>{typeof t>"u"?s.eventsListeners[n]=[]:s.eventsListeners[n]&&s.eventsListeners[n].forEach((a,r)=>{(a===t||a.__emitterProxy&&a.__emitterProxy===t)&&s.eventsListeners[n].splice(r,1)})}),s},emit(){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,s,n;for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return typeof r[0]=="string"||Array.isArray(r[0])?(t=r[0],s=r.slice(1,r.length),n=e):(t=r[0].events,s=r[0].data,n=r[0].context||e),s.unshift(n),(Array.isArray(t)?t:t.split(" ")).forEach(l=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(c=>{c.apply(n,[l,...s])}),e.eventsListeners&&e.eventsListeners[l]&&e.eventsListeners[l].forEach(c=>{c.apply(n,s)})}),e}};function df(){const e=this;let t,s;const n=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=n.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?s=e.params.height:s=n.clientHeight,!(t===0&&e.isHorizontal()||s===0&&e.isVertical())&&(t=t-parseInt(Gt(n,"padding-left")||0,10)-parseInt(Gt(n,"padding-right")||0,10),s=s-parseInt(Gt(n,"padding-top")||0,10)-parseInt(Gt(n,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(s)&&(s=0),Object.assign(e,{width:t,height:s,size:e.isHorizontal()?t:s}))}function uf(){const e=this;function t(w,L){return parseFloat(w.getPropertyValue(e.getDirectionLabel(L))||0)}const s=e.params,{wrapperEl:n,slidesEl:a,size:r,rtlTranslate:o,wrongRTL:i}=e,l=e.virtual&&s.virtual.enabled,c=l?e.virtual.slides.length:e.slides.length,d=Ot(a,`.${e.params.slideClass}, swiper-slide`),u=l?e.virtual.slides.length:d.length;let p=[];const b=[],m=[];let f=s.slidesOffsetBefore;typeof f=="function"&&(f=s.slidesOffsetBefore.call(e));let h=s.slidesOffsetAfter;typeof h=="function"&&(h=s.slidesOffsetAfter.call(e));const g=e.snapGrid.length,y=e.slidesGrid.length;let _=s.spaceBetween,S=-f,E=0,k=0;if(typeof r>"u")return;typeof _=="string"&&_.indexOf("%")>=0?_=parseFloat(_.replace("%",""))/100*r:typeof _=="string"&&(_=parseFloat(_)),e.virtualSize=-_,d.forEach(w=>{o?w.style.marginLeft="":w.style.marginRight="",w.style.marginBottom="",w.style.marginTop=""}),s.centeredSlides&&s.cssMode&&(nn(n,"--swiper-centered-offset-before",""),nn(n,"--swiper-centered-offset-after",""));const C=s.grid&&s.grid.rows>1&&e.grid;C?e.grid.initSlides(d):e.grid&&e.grid.unsetSlides();let R;const x=s.slidesPerView==="auto"&&s.breakpoints&&Object.keys(s.breakpoints).filter(w=>typeof s.breakpoints[w].slidesPerView<"u").length>0;for(let w=0;w<u;w+=1){R=0;let L;if(d[w]&&(L=d[w]),C&&e.grid.updateSlide(w,L,d),!(d[w]&&Gt(L,"display")==="none")){if(s.slidesPerView==="auto"){x&&(d[w].style[e.getDirectionLabel("width")]="");const A=getComputedStyle(L),G=L.style.transform,W=L.style.webkitTransform;if(G&&(L.style.transform="none"),W&&(L.style.webkitTransform="none"),s.roundLengths)R=e.isHorizontal()?_o(L,"width"):_o(L,"height");else{const se=t(A,"width"),U=t(A,"padding-left"),Y=t(A,"padding-right"),F=t(A,"margin-left"),z=t(A,"margin-right"),te=A.getPropertyValue("box-sizing");if(te&&te==="border-box")R=se+F+z;else{const{clientWidth:Z,offsetWidth:ue}=L;R=se+U+Y+F+z+(ue-Z)}}G&&(L.style.transform=G),W&&(L.style.webkitTransform=W),s.roundLengths&&(R=Math.floor(R))}else R=(r-(s.slidesPerView-1)*_)/s.slidesPerView,s.roundLengths&&(R=Math.floor(R)),d[w]&&(d[w].style[e.getDirectionLabel("width")]=`${R}px`);d[w]&&(d[w].swiperSlideSize=R),m.push(R),s.centeredSlides?(S=S+R/2+E/2+_,E===0&&w!==0&&(S=S-r/2-_),w===0&&(S=S-r/2-_),Math.abs(S)<1/1e3&&(S=0),s.roundLengths&&(S=Math.floor(S)),k%s.slidesPerGroup===0&&p.push(S),b.push(S)):(s.roundLengths&&(S=Math.floor(S)),(k-Math.min(e.params.slidesPerGroupSkip,k))%e.params.slidesPerGroup===0&&p.push(S),b.push(S),S=S+R+_),e.virtualSize+=R+_,E=R,k+=1}}if(e.virtualSize=Math.max(e.virtualSize,r)+h,o&&i&&(s.effect==="slide"||s.effect==="coverflow")&&(n.style.width=`${e.virtualSize+_}px`),s.setWrapperSize&&(n.style[e.getDirectionLabel("width")]=`${e.virtualSize+_}px`),C&&e.grid.updateWrapperSize(R,p),!s.centeredSlides){const w=[];for(let L=0;L<p.length;L+=1){let A=p[L];s.roundLengths&&(A=Math.floor(A)),p[L]<=e.virtualSize-r&&w.push(A)}p=w,Math.floor(e.virtualSize-r)-Math.floor(p[p.length-1])>1&&p.push(e.virtualSize-r)}if(l&&s.loop){const w=m[0]+_;if(s.slidesPerGroup>1){const L=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/s.slidesPerGroup),A=w*s.slidesPerGroup;for(let G=0;G<L;G+=1)p.push(p[p.length-1]+A)}for(let L=0;L<e.virtual.slidesBefore+e.virtual.slidesAfter;L+=1)s.slidesPerGroup===1&&p.push(p[p.length-1]+w),b.push(b[b.length-1]+w),e.virtualSize+=w}if(p.length===0&&(p=[0]),_!==0){const w=e.isHorizontal()&&o?"marginLeft":e.getDirectionLabel("marginRight");d.filter((L,A)=>!s.cssMode||s.loop?!0:A!==d.length-1).forEach(L=>{L.style[w]=`${_}px`})}if(s.centeredSlides&&s.centeredSlidesBounds){let w=0;m.forEach(A=>{w+=A+(_||0)}),w-=_;const L=w>r?w-r:0;p=p.map(A=>A<=0?-f:A>L?L+h:A)}if(s.centerInsufficientSlides){let w=0;m.forEach(A=>{w+=A+(_||0)}),w-=_;const L=(s.slidesOffsetBefore||0)+(s.slidesOffsetAfter||0);if(w+L<r){const A=(r-w-L)/2;p.forEach((G,W)=>{p[W]=G-A}),b.forEach((G,W)=>{b[W]=G+A})}}if(Object.assign(e,{slides:d,snapGrid:p,slidesGrid:b,slidesSizesGrid:m}),s.centeredSlides&&s.cssMode&&!s.centeredSlidesBounds){nn(n,"--swiper-centered-offset-before",`${-p[0]}px`),nn(n,"--swiper-centered-offset-after",`${e.size/2-m[m.length-1]/2}px`);const w=-e.snapGrid[0],L=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(A=>A+w),e.slidesGrid=e.slidesGrid.map(A=>A+L)}if(u!==c&&e.emit("slidesLengthChange"),p.length!==g&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),b.length!==y&&e.emit("slidesGridLengthChange"),s.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!s.cssMode&&(s.effect==="slide"||s.effect==="fade")){const w=`${s.containerModifierClass}backface-hidden`,L=e.el.classList.contains(w);u<=s.maxBackfaceHiddenSlides?L||e.el.classList.add(w):L&&e.el.classList.remove(w)}}function pf(e){const t=this,s=[],n=t.virtual&&t.params.virtual.enabled;let a=0,r;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const o=i=>n?t.slides[t.getSlideIndexByData(i)]:t.slides[i];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(i=>{s.push(i)});else for(r=0;r<Math.ceil(t.params.slidesPerView);r+=1){const i=t.activeIndex+r;if(i>t.slides.length&&!n)break;s.push(o(i))}else s.push(o(t.activeIndex));for(r=0;r<s.length;r+=1)if(typeof s[r]<"u"){const i=s[r].offsetHeight;a=i>a?i:a}(a||a===0)&&(t.wrapperEl.style.height=`${a}px`)}function ff(){const e=this,t=e.slides,s=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let n=0;n<t.length;n+=1)t[n].swiperSlideOffset=(e.isHorizontal()?t[n].offsetLeft:t[n].offsetTop)-s-e.cssOverflowAdjustment()}const yo=(e,t,s)=>{t&&!e.classList.contains(s)?e.classList.add(s):!t&&e.classList.contains(s)&&e.classList.remove(s)};function hf(e){e===void 0&&(e=this&&this.translate||0);const t=this,s=t.params,{slides:n,rtlTranslate:a,snapGrid:r}=t;if(n.length===0)return;typeof n[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let o=-e;a&&(o=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let i=s.spaceBetween;typeof i=="string"&&i.indexOf("%")>=0?i=parseFloat(i.replace("%",""))/100*t.size:typeof i=="string"&&(i=parseFloat(i));for(let l=0;l<n.length;l+=1){const c=n[l];let d=c.swiperSlideOffset;s.cssMode&&s.centeredSlides&&(d-=n[0].swiperSlideOffset);const u=(o+(s.centeredSlides?t.minTranslate():0)-d)/(c.swiperSlideSize+i),p=(o-r[0]+(s.centeredSlides?t.minTranslate():0)-d)/(c.swiperSlideSize+i),b=-(o-d),m=b+t.slidesSizesGrid[l],f=b>=0&&b<=t.size-t.slidesSizesGrid[l],h=b>=0&&b<t.size-1||m>1&&m<=t.size||b<=0&&m>=t.size;h&&(t.visibleSlides.push(c),t.visibleSlidesIndexes.push(l)),yo(c,h,s.slideVisibleClass),yo(c,f,s.slideFullyVisibleClass),c.progress=a?-u:u,c.originalProgress=a?-p:p}}function gf(e){const t=this;if(typeof e>"u"){const d=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*d||0}const s=t.params,n=t.maxTranslate()-t.minTranslate();let{progress:a,isBeginning:r,isEnd:o,progressLoop:i}=t;const l=r,c=o;if(n===0)a=0,r=!0,o=!0;else{a=(e-t.minTranslate())/n;const d=Math.abs(e-t.minTranslate())<1,u=Math.abs(e-t.maxTranslate())<1;r=d||a<=0,o=u||a>=1,d&&(a=0),u&&(a=1)}if(s.loop){const d=t.getSlideIndexByData(0),u=t.getSlideIndexByData(t.slides.length-1),p=t.slidesGrid[d],b=t.slidesGrid[u],m=t.slidesGrid[t.slidesGrid.length-1],f=Math.abs(e);f>=p?i=(f-p)/m:i=(f+m-b)/m,i>1&&(i-=1)}Object.assign(t,{progress:a,progressLoop:i,isBeginning:r,isEnd:o}),(s.watchSlidesProgress||s.centeredSlides&&s.autoHeight)&&t.updateSlidesProgress(e),r&&!l&&t.emit("reachBeginning toEdge"),o&&!c&&t.emit("reachEnd toEdge"),(l&&!r||c&&!o)&&t.emit("fromEdge"),t.emit("progress",a)}const ca=(e,t,s)=>{t&&!e.classList.contains(s)?e.classList.add(s):!t&&e.classList.contains(s)&&e.classList.remove(s)};function mf(){const e=this,{slides:t,params:s,slidesEl:n,activeIndex:a}=e,r=e.virtual&&s.virtual.enabled,o=e.grid&&s.grid&&s.grid.rows>1,i=u=>Ot(n,`.${s.slideClass}${u}, swiper-slide${u}`)[0];let l,c,d;if(r)if(s.loop){let u=a-e.virtual.slidesBefore;u<0&&(u=e.virtual.slides.length+u),u>=e.virtual.slides.length&&(u-=e.virtual.slides.length),l=i(`[data-swiper-slide-index="${u}"]`)}else l=i(`[data-swiper-slide-index="${a}"]`);else o?(l=t.find(u=>u.column===a),d=t.find(u=>u.column===a+1),c=t.find(u=>u.column===a-1)):l=t[a];l&&(o||(d=tf(l,`.${s.slideClass}, swiper-slide`)[0],s.loop&&!d&&(d=t[0]),c=ef(l,`.${s.slideClass}, swiper-slide`)[0],s.loop&&!c===0&&(c=t[t.length-1]))),t.forEach(u=>{ca(u,u===l,s.slideActiveClass),ca(u,u===d,s.slideNextClass),ca(u,u===c,s.slidePrevClass)}),e.emitSlidesClasses()}const dn=(e,t)=>{if(!e||e.destroyed||!e.params)return;const s=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,n=t.closest(s());if(n){let a=n.querySelector(`.${e.params.lazyPreloaderClass}`);!a&&e.isElement&&(n.shadowRoot?a=n.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{n.shadowRoot&&(a=n.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),a&&a.remove())})),a&&a.remove()}},da=(e,t)=>{if(!e.slides[t])return;const s=e.slides[t].querySelector('[loading="lazy"]');s&&s.removeAttribute("loading")},Ma=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const s=e.slides.length;if(!s||!t||t<0)return;t=Math.min(t,s);const n=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),a=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const o=a,i=[o-t];i.push(...Array.from({length:t}).map((l,c)=>o+n+c)),e.slides.forEach((l,c)=>{i.includes(l.column)&&da(e,c)});return}const r=a+n-1;if(e.params.rewind||e.params.loop)for(let o=a-t;o<=r+t;o+=1){const i=(o%s+s)%s;(i<a||i>r)&&da(e,i)}else for(let o=Math.max(a-t,0);o<=Math.min(r+t,s-1);o+=1)o!==a&&(o>r||o<a)&&da(e,o)};function bf(e){const{slidesGrid:t,params:s}=e,n=e.rtlTranslate?e.translate:-e.translate;let a;for(let r=0;r<t.length;r+=1)typeof t[r+1]<"u"?n>=t[r]&&n<t[r+1]-(t[r+1]-t[r])/2?a=r:n>=t[r]&&n<t[r+1]&&(a=r+1):n>=t[r]&&(a=r);return s.normalizeSlideIndex&&(a<0||typeof a>"u")&&(a=0),a}function _f(e){const t=this,s=t.rtlTranslate?t.translate:-t.translate,{snapGrid:n,params:a,activeIndex:r,realIndex:o,snapIndex:i}=t;let l=e,c;const d=b=>{let m=b-t.virtual.slidesBefore;return m<0&&(m=t.virtual.slides.length+m),m>=t.virtual.slides.length&&(m-=t.virtual.slides.length),m};if(typeof l>"u"&&(l=bf(t)),n.indexOf(s)>=0)c=n.indexOf(s);else{const b=Math.min(a.slidesPerGroupSkip,l);c=b+Math.floor((l-b)/a.slidesPerGroup)}if(c>=n.length&&(c=n.length-1),l===r&&!t.params.loop){c!==i&&(t.snapIndex=c,t.emit("snapIndexChange"));return}if(l===r&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=d(l);return}const u=t.grid&&a.grid&&a.grid.rows>1;let p;if(t.virtual&&a.virtual.enabled&&a.loop)p=d(l);else if(u){const b=t.slides.find(f=>f.column===l);let m=parseInt(b.getAttribute("data-swiper-slide-index"),10);Number.isNaN(m)&&(m=Math.max(t.slides.indexOf(b),0)),p=Math.floor(m/a.grid.rows)}else if(t.slides[l]){const b=t.slides[l].getAttribute("data-swiper-slide-index");b?p=parseInt(b,10):p=l}else p=l;Object.assign(t,{previousSnapIndex:i,snapIndex:c,previousRealIndex:o,realIndex:p,previousIndex:r,activeIndex:l}),t.initialized&&Ma(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(o!==p&&t.emit("realIndexChange"),t.emit("slideChange"))}function yf(e,t){const s=this,n=s.params;let a=e.closest(`.${n.slideClass}, swiper-slide`);!a&&s.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(i=>{!a&&i.matches&&i.matches(`.${n.slideClass}, swiper-slide`)&&(a=i)});let r=!1,o;if(a){for(let i=0;i<s.slides.length;i+=1)if(s.slides[i]===a){r=!0,o=i;break}}if(a&&r)s.clickedSlide=a,s.virtual&&s.params.virtual.enabled?s.clickedIndex=parseInt(a.getAttribute("data-swiper-slide-index"),10):s.clickedIndex=o;else{s.clickedSlide=void 0,s.clickedIndex=void 0;return}n.slideToClickedSlide&&s.clickedIndex!==void 0&&s.clickedIndex!==s.activeIndex&&s.slideToClickedSlide()}var vf={updateSize:df,updateSlides:uf,updateAutoHeight:pf,updateSlidesOffset:ff,updateSlidesProgress:hf,updateProgress:gf,updateSlidesClasses:mf,updateActiveIndex:_f,updateClickedSlide:yf};function Tf(e){e===void 0&&(e=this.isHorizontal()?"x":"y");const t=this,{params:s,rtlTranslate:n,translate:a,wrapperEl:r}=t;if(s.virtualTranslate)return n?-a:a;if(s.cssMode)return a;let o=Jp(r,e);return o+=t.cssOverflowAdjustment(),n&&(o=-o),o||0}function Sf(e,t){const s=this,{rtlTranslate:n,params:a,wrapperEl:r,progress:o}=s;let i=0,l=0;const c=0;s.isHorizontal()?i=n?-e:e:l=e,a.roundLengths&&(i=Math.floor(i),l=Math.floor(l)),s.previousTranslate=s.translate,s.translate=s.isHorizontal()?i:l,a.cssMode?r[s.isHorizontal()?"scrollLeft":"scrollTop"]=s.isHorizontal()?-i:-l:a.virtualTranslate||(s.isHorizontal()?i-=s.cssOverflowAdjustment():l-=s.cssOverflowAdjustment(),r.style.transform=`translate3d(${i}px, ${l}px, ${c}px)`);let d;const u=s.maxTranslate()-s.minTranslate();u===0?d=0:d=(e-s.minTranslate())/u,d!==o&&s.updateProgress(e),s.emit("setTranslate",s.translate,t)}function Ef(){return-this.snapGrid[0]}function wf(){return-this.snapGrid[this.snapGrid.length-1]}function xf(e,t,s,n,a){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),s===void 0&&(s=!0),n===void 0&&(n=!0);const r=this,{params:o,wrapperEl:i}=r;if(r.animating&&o.preventInteractionOnTransition)return!1;const l=r.minTranslate(),c=r.maxTranslate();let d;if(n&&e>l?d=l:n&&e<c?d=c:d=e,r.updateProgress(d),o.cssMode){const u=r.isHorizontal();if(t===0)i[u?"scrollLeft":"scrollTop"]=-d;else{if(!r.support.smoothScroll)return dl({swiper:r,targetPosition:-d,side:u?"left":"top"}),!0;i.scrollTo({[u?"left":"top"]:-d,behavior:"smooth"})}return!0}return t===0?(r.setTransition(0),r.setTranslate(d),s&&(r.emit("beforeTransitionStart",t,a),r.emit("transitionEnd"))):(r.setTransition(t),r.setTranslate(d),s&&(r.emit("beforeTransitionStart",t,a),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(p){!r||r.destroyed||p.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,r.animating=!1,s&&r.emit("transitionEnd"))}),r.wrapperEl.addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd))),!0}var Af={getTranslate:Tf,setTranslate:Sf,minTranslate:Ef,maxTranslate:wf,translateTo:xf};function Pf(e,t){const s=this;s.params.cssMode||(s.wrapperEl.style.transitionDuration=`${e}ms`,s.wrapperEl.style.transitionDelay=e===0?"0ms":""),s.emit("setTransition",e,t)}function hl(e){let{swiper:t,runCallbacks:s,direction:n,step:a}=e;const{activeIndex:r,previousIndex:o}=t;let i=n;i||(r>o?i="next":r<o?i="prev":i="reset"),t.emit(`transition${a}`),s&&i==="reset"?t.emit(`slideResetTransition${a}`):s&&r!==o&&(t.emit(`slideChangeTransition${a}`),i==="next"?t.emit(`slideNextTransition${a}`):t.emit(`slidePrevTransition${a}`))}function Of(e,t){e===void 0&&(e=!0);const s=this,{params:n}=s;n.cssMode||(n.autoHeight&&s.updateAutoHeight(),hl({swiper:s,runCallbacks:e,direction:t,step:"Start"}))}function kf(e,t){e===void 0&&(e=!0);const s=this,{params:n}=s;s.animating=!1,!n.cssMode&&(s.setTransition(0),hl({swiper:s,runCallbacks:e,direction:t,step:"End"}))}var Cf={setTransition:Pf,transitionStart:Of,transitionEnd:kf};function Rf(e,t,s,n,a){e===void 0&&(e=0),s===void 0&&(s=!0),typeof e=="string"&&(e=parseInt(e,10));const r=this;let o=e;o<0&&(o=0);const{params:i,snapGrid:l,slidesGrid:c,previousIndex:d,activeIndex:u,rtlTranslate:p,wrapperEl:b,enabled:m}=r;if(!m&&!n&&!a||r.destroyed||r.animating&&i.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=r.params.speed);const f=Math.min(r.params.slidesPerGroupSkip,o);let h=f+Math.floor((o-f)/r.params.slidesPerGroup);h>=l.length&&(h=l.length-1);const g=-l[h];if(i.normalizeSlideIndex)for(let C=0;C<c.length;C+=1){const R=-Math.floor(g*100),x=Math.floor(c[C]*100),w=Math.floor(c[C+1]*100);typeof c[C+1]<"u"?R>=x&&R<w-(w-x)/2?o=C:R>=x&&R<w&&(o=C+1):R>=x&&(o=C)}if(r.initialized&&o!==u&&(!r.allowSlideNext&&(p?g>r.translate&&g>r.minTranslate():g<r.translate&&g<r.minTranslate())||!r.allowSlidePrev&&g>r.translate&&g>r.maxTranslate()&&(u||0)!==o))return!1;o!==(d||0)&&s&&r.emit("beforeSlideChangeStart"),r.updateProgress(g);let y;o>u?y="next":o<u?y="prev":y="reset";const _=r.virtual&&r.params.virtual.enabled;if(!(_&&a)&&(p&&-g===r.translate||!p&&g===r.translate))return r.updateActiveIndex(o),i.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),i.effect!=="slide"&&r.setTranslate(g),y!=="reset"&&(r.transitionStart(s,y),r.transitionEnd(s,y)),!1;if(i.cssMode){const C=r.isHorizontal(),R=p?g:-g;if(t===0)_&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),_&&!r._cssModeVirtualInitialSet&&r.params.initialSlide>0?(r._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{b[C?"scrollLeft":"scrollTop"]=R})):b[C?"scrollLeft":"scrollTop"]=R,_&&requestAnimationFrame(()=>{r.wrapperEl.style.scrollSnapType="",r._immediateVirtual=!1});else{if(!r.support.smoothScroll)return dl({swiper:r,targetPosition:R,side:C?"left":"top"}),!0;b.scrollTo({[C?"left":"top"]:R,behavior:"smooth"})}return!0}const k=fl().isSafari;return _&&!a&&k&&r.isElement&&r.virtual.update(!1,!1,o),r.setTransition(t),r.setTranslate(g),r.updateActiveIndex(o),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,n),r.transitionStart(s,y),t===0?r.transitionEnd(s,y):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(R){!r||r.destroyed||R.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(s,y))}),r.wrapperEl.addEventListener("transitionend",r.onSlideToWrapperTransitionEnd)),!0}function Lf(e,t,s,n){e===void 0&&(e=0),s===void 0&&(s=!0),typeof e=="string"&&(e=parseInt(e,10));const a=this;if(a.destroyed)return;typeof t>"u"&&(t=a.params.speed);const r=a.grid&&a.params.grid&&a.params.grid.rows>1;let o=e;if(a.params.loop)if(a.virtual&&a.params.virtual.enabled)o=o+a.virtual.slidesBefore;else{let i;if(r){const p=o*a.params.grid.rows;i=a.slides.find(b=>b.getAttribute("data-swiper-slide-index")*1===p).column}else i=a.getSlideIndexByData(o);const l=r?Math.ceil(a.slides.length/a.params.grid.rows):a.slides.length,{centeredSlides:c}=a.params;let d=a.params.slidesPerView;d==="auto"?d=a.slidesPerViewDynamic():(d=Math.ceil(parseFloat(a.params.slidesPerView,10)),c&&d%2===0&&(d=d+1));let u=l-i<d;if(c&&(u=u||i<Math.ceil(d/2)),n&&c&&a.params.slidesPerView!=="auto"&&!r&&(u=!1),u){const p=c?i<a.activeIndex?"prev":"next":i-a.activeIndex-1<a.params.slidesPerView?"next":"prev";a.loopFix({direction:p,slideTo:!0,activeSlideIndex:p==="next"?i+1:i-l+1,slideRealIndex:p==="next"?a.realIndex:void 0})}if(r){const p=o*a.params.grid.rows;o=a.slides.find(b=>b.getAttribute("data-swiper-slide-index")*1===p).column}else o=a.getSlideIndexByData(o)}return requestAnimationFrame(()=>{a.slideTo(o,t,s,n)}),a}function Mf(e,t,s){t===void 0&&(t=!0);const n=this,{enabled:a,params:r,animating:o}=n;if(!a||n.destroyed)return n;typeof e>"u"&&(e=n.params.speed);let i=r.slidesPerGroup;r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(i=Math.max(n.slidesPerViewDynamic("current",!0),1));const l=n.activeIndex<r.slidesPerGroupSkip?1:i,c=n.virtual&&r.virtual.enabled;if(r.loop){if(o&&!c&&r.loopPreventsSliding)return!1;if(n.loopFix({direction:"next"}),n._clientLeft=n.wrapperEl.clientLeft,n.activeIndex===n.slides.length-1&&r.cssMode)return requestAnimationFrame(()=>{n.slideTo(n.activeIndex+l,e,t,s)}),!0}return r.rewind&&n.isEnd?n.slideTo(0,e,t,s):n.slideTo(n.activeIndex+l,e,t,s)}function If(e,t,s){t===void 0&&(t=!0);const n=this,{params:a,snapGrid:r,slidesGrid:o,rtlTranslate:i,enabled:l,animating:c}=n;if(!l||n.destroyed)return n;typeof e>"u"&&(e=n.params.speed);const d=n.virtual&&a.virtual.enabled;if(a.loop){if(c&&!d&&a.loopPreventsSliding)return!1;n.loopFix({direction:"prev"}),n._clientLeft=n.wrapperEl.clientLeft}const u=i?n.translate:-n.translate;function p(y){return y<0?-Math.floor(Math.abs(y)):Math.floor(y)}const b=p(u),m=r.map(y=>p(y)),f=a.freeMode&&a.freeMode.enabled;let h=r[m.indexOf(b)-1];if(typeof h>"u"&&(a.cssMode||f)){let y;r.forEach((_,S)=>{b>=_&&(y=S)}),typeof y<"u"&&(h=f?r[y]:r[y>0?y-1:y])}let g=0;if(typeof h<"u"&&(g=o.indexOf(h),g<0&&(g=n.activeIndex-1),a.slidesPerView==="auto"&&a.slidesPerGroup===1&&a.slidesPerGroupAuto&&(g=g-n.slidesPerViewDynamic("previous",!0)+1,g=Math.max(g,0))),a.rewind&&n.isBeginning){const y=n.params.virtual&&n.params.virtual.enabled&&n.virtual?n.virtual.slides.length-1:n.slides.length-1;return n.slideTo(y,e,t,s)}else if(a.loop&&n.activeIndex===0&&a.cssMode)return requestAnimationFrame(()=>{n.slideTo(g,e,t,s)}),!0;return n.slideTo(g,e,t,s)}function Nf(e,t,s){t===void 0&&(t=!0);const n=this;if(!n.destroyed)return typeof e>"u"&&(e=n.params.speed),n.slideTo(n.activeIndex,e,t,s)}function Df(e,t,s,n){t===void 0&&(t=!0),n===void 0&&(n=.5);const a=this;if(a.destroyed)return;typeof e>"u"&&(e=a.params.speed);let r=a.activeIndex;const o=Math.min(a.params.slidesPerGroupSkip,r),i=o+Math.floor((r-o)/a.params.slidesPerGroup),l=a.rtlTranslate?a.translate:-a.translate;if(l>=a.snapGrid[i]){const c=a.snapGrid[i],d=a.snapGrid[i+1];l-c>(d-c)*n&&(r+=a.params.slidesPerGroup)}else{const c=a.snapGrid[i-1],d=a.snapGrid[i];l-c<=(d-c)*n&&(r-=a.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,a.slidesGrid.length-1),a.slideTo(r,e,t,s)}function Bf(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:s}=e,n=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let a=e.getSlideIndexWhenGrid(e.clickedIndex),r;const o=e.isElement?"swiper-slide":`.${t.slideClass}`,i=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;r=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(r):a>(i?(e.slides.length-n)/2-(e.params.grid.rows-1):e.slides.length-n)?(e.loopFix(),a=e.getSlideIndex(Ot(s,`${o}[data-swiper-slide-index="${r}"]`)[0]),cl(()=>{e.slideTo(a)})):e.slideTo(a)}else e.slideTo(a)}var Ff={slideTo:Rf,slideToLoop:Lf,slideNext:Mf,slidePrev:If,slideReset:Nf,slideToClosest:Df,slideToClickedSlide:Bf};function $f(e,t){const s=this,{params:n,slidesEl:a}=s;if(!n.loop||s.virtual&&s.params.virtual.enabled)return;const r=()=>{Ot(a,`.${n.slideClass}, swiper-slide`).forEach((b,m)=>{b.setAttribute("data-swiper-slide-index",m)})},o=()=>{const p=Ot(a,`.${n.slideBlankClass}`);p.forEach(b=>{b.remove()}),p.length>0&&(s.recalcSlides(),s.updateSlides())},i=s.grid&&n.grid&&n.grid.rows>1;n.loopAddBlankSlides&&(n.slidesPerGroup>1||i)&&o();const l=n.slidesPerGroup*(i?n.grid.rows:1),c=s.slides.length%l!==0,d=i&&s.slides.length%n.grid.rows!==0,u=p=>{for(let b=0;b<p;b+=1){const m=s.isElement?La("swiper-slide",[n.slideBlankClass]):La("div",[n.slideClass,n.slideBlankClass]);s.slidesEl.append(m)}};if(c){if(n.loopAddBlankSlides){const p=l-s.slides.length%l;u(p),s.recalcSlides(),s.updateSlides()}else Sn("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else if(d){if(n.loopAddBlankSlides){const p=n.grid.rows-s.slides.length%n.grid.rows;u(p),s.recalcSlides(),s.updateSlides()}else Sn("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else r();s.loopFix({slideRealIndex:e,direction:n.centeredSlides?void 0:"next",initial:t})}function Uf(e){let{slideRealIndex:t,slideTo:s=!0,direction:n,setTranslate:a,activeSlideIndex:r,initial:o,byController:i,byMousewheel:l}=e===void 0?{}:e;const c=this;if(!c.params.loop)return;c.emit("beforeLoopFix");const{slides:d,allowSlidePrev:u,allowSlideNext:p,slidesEl:b,params:m}=c,{centeredSlides:f,initialSlide:h}=m;if(c.allowSlidePrev=!0,c.allowSlideNext=!0,c.virtual&&m.virtual.enabled){s&&(!m.centeredSlides&&c.snapIndex===0?c.slideTo(c.virtual.slides.length,0,!1,!0):m.centeredSlides&&c.snapIndex<m.slidesPerView?c.slideTo(c.virtual.slides.length+c.snapIndex,0,!1,!0):c.snapIndex===c.snapGrid.length-1&&c.slideTo(c.virtual.slidesBefore,0,!1,!0)),c.allowSlidePrev=u,c.allowSlideNext=p,c.emit("loopFix");return}let g=m.slidesPerView;g==="auto"?g=c.slidesPerViewDynamic():(g=Math.ceil(parseFloat(m.slidesPerView,10)),f&&g%2===0&&(g=g+1));const y=m.slidesPerGroupAuto?g:m.slidesPerGroup;let _=f?Math.max(y,Math.ceil(g/2)):y;_%y!==0&&(_+=y-_%y),_+=m.loopAdditionalSlides,c.loopedSlides=_;const S=c.grid&&m.grid&&m.grid.rows>1;d.length<g+_||c.params.effect==="cards"&&d.length<g+_*2?Sn("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):S&&m.grid.fill==="row"&&Sn("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const E=[],k=[],C=S?Math.ceil(d.length/m.grid.rows):d.length,R=o&&C-h<g&&!f;let x=R?h:c.activeIndex;typeof r>"u"?r=c.getSlideIndex(d.find(U=>U.classList.contains(m.slideActiveClass))):x=r;const w=n==="next"||!n,L=n==="prev"||!n;let A=0,G=0;const se=(S?d[r].column:r)+(f&&typeof a>"u"?-g/2+.5:0);if(se<_){A=Math.max(_-se,y);for(let U=0;U<_-se;U+=1){const Y=U-Math.floor(U/C)*C;if(S){const F=C-Y-1;for(let z=d.length-1;z>=0;z-=1)d[z].column===F&&E.push(z)}else E.push(C-Y-1)}}else if(se+g>C-_){G=Math.max(se-(C-_*2),y),R&&(G=Math.max(G,g-C+h+1));for(let U=0;U<G;U+=1){const Y=U-Math.floor(U/C)*C;S?d.forEach((F,z)=>{F.column===Y&&k.push(z)}):k.push(Y)}}if(c.__preventObserver__=!0,requestAnimationFrame(()=>{c.__preventObserver__=!1}),c.params.effect==="cards"&&d.length<g+_*2&&(k.includes(r)&&k.splice(k.indexOf(r),1),E.includes(r)&&E.splice(E.indexOf(r),1)),L&&E.forEach(U=>{d[U].swiperLoopMoveDOM=!0,b.prepend(d[U]),d[U].swiperLoopMoveDOM=!1}),w&&k.forEach(U=>{d[U].swiperLoopMoveDOM=!0,b.append(d[U]),d[U].swiperLoopMoveDOM=!1}),c.recalcSlides(),m.slidesPerView==="auto"?c.updateSlides():S&&(E.length>0&&L||k.length>0&&w)&&c.slides.forEach((U,Y)=>{c.grid.updateSlide(Y,U,c.slides)}),m.watchSlidesProgress&&c.updateSlidesOffset(),s){if(E.length>0&&L){if(typeof t>"u"){const U=c.slidesGrid[x],F=c.slidesGrid[x+A]-U;l?c.setTranslate(c.translate-F):(c.slideTo(x+Math.ceil(A),0,!1,!0),a&&(c.touchEventsData.startTranslate=c.touchEventsData.startTranslate-F,c.touchEventsData.currentTranslate=c.touchEventsData.currentTranslate-F))}else if(a){const U=S?E.length/m.grid.rows:E.length;c.slideTo(c.activeIndex+U,0,!1,!0),c.touchEventsData.currentTranslate=c.translate}}else if(k.length>0&&w)if(typeof t>"u"){const U=c.slidesGrid[x],F=c.slidesGrid[x-G]-U;l?c.setTranslate(c.translate-F):(c.slideTo(x-G,0,!1,!0),a&&(c.touchEventsData.startTranslate=c.touchEventsData.startTranslate-F,c.touchEventsData.currentTranslate=c.touchEventsData.currentTranslate-F))}else{const U=S?k.length/m.grid.rows:k.length;c.slideTo(c.activeIndex-U,0,!1,!0)}}if(c.allowSlidePrev=u,c.allowSlideNext=p,c.controller&&c.controller.control&&!i){const U={slideRealIndex:t,direction:n,setTranslate:a,activeSlideIndex:r,byController:!0};Array.isArray(c.controller.control)?c.controller.control.forEach(Y=>{!Y.destroyed&&Y.params.loop&&Y.loopFix({...U,slideTo:Y.params.slidesPerView===m.slidesPerView?s:!1})}):c.controller.control instanceof c.constructor&&c.controller.control.params.loop&&c.controller.control.loopFix({...U,slideTo:c.controller.control.params.slidesPerView===m.slidesPerView?s:!1})}c.emit("loopFix")}function Hf(){const e=this,{params:t,slidesEl:s}=e;if(!t.loop||!s||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const n=[];e.slides.forEach(a=>{const r=typeof a.swiperSlideIndex>"u"?a.getAttribute("data-swiper-slide-index")*1:a.swiperSlideIndex;n[r]=a}),e.slides.forEach(a=>{a.removeAttribute("data-swiper-slide-index")}),n.forEach(a=>{s.append(a)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var Gf={loopCreate:$f,loopFix:Uf,loopDestroy:Hf};function Yf(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const s=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),s.style.cursor="move",s.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function jf(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var Kf={setGrabCursor:Yf,unsetGrabCursor:jf};function zf(e,t){t===void 0&&(t=this);function s(n){if(!n||n===bt()||n===Fe())return null;n.assignedSlot&&(n=n.assignedSlot);const a=n.closest(e);return!a&&!n.getRootNode?null:a||s(n.getRootNode().host)}return s(t)}function vo(e,t,s){const n=Fe(),{params:a}=e,r=a.edgeSwipeDetection,o=a.edgeSwipeThreshold;return r&&(s<=o||s>=n.innerWidth-o)?r==="prevent"?(t.preventDefault(),!0):!1:!0}function qf(e){const t=this,s=bt();let n=e;n.originalEvent&&(n=n.originalEvent);const a=t.touchEventsData;if(n.type==="pointerdown"){if(a.pointerId!==null&&a.pointerId!==n.pointerId)return;a.pointerId=n.pointerId}else n.type==="touchstart"&&n.targetTouches.length===1&&(a.touchId=n.targetTouches[0].identifier);if(n.type==="touchstart"){vo(t,n,n.targetTouches[0].pageX);return}const{params:r,touches:o,enabled:i}=t;if(!i||!r.simulateTouch&&n.pointerType==="mouse"||t.animating&&r.preventInteractionOnTransition)return;!t.animating&&r.cssMode&&r.loop&&t.loopFix();let l=n.target;if(r.touchEventsTarget==="wrapper"&&!Zp(l,t.wrapperEl)||"which"in n&&n.which===3||"button"in n&&n.button>0||a.isTouched&&a.isMoved)return;const c=!!r.noSwipingClass&&r.noSwipingClass!=="",d=n.composedPath?n.composedPath():n.path;c&&n.target&&n.target.shadowRoot&&d&&(l=d[0]);const u=r.noSwipingSelector?r.noSwipingSelector:`.${r.noSwipingClass}`,p=!!(n.target&&n.target.shadowRoot);if(r.noSwiping&&(p?zf(u,l):l.closest(u))){t.allowClick=!0;return}if(r.swipeHandler&&!l.closest(r.swipeHandler))return;o.currentX=n.pageX,o.currentY=n.pageY;const b=o.currentX,m=o.currentY;if(!vo(t,n,b))return;Object.assign(a,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=b,o.startY=m,a.touchStartTime=Tn(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,r.threshold>0&&(a.allowThresholdMove=!1);let f=!0;l.matches(a.focusableElements)&&(f=!1,l.nodeName==="SELECT"&&(a.isTouched=!1)),s.activeElement&&s.activeElement.matches(a.focusableElements)&&s.activeElement!==l&&(n.pointerType==="mouse"||n.pointerType!=="mouse"&&!l.matches(a.focusableElements))&&s.activeElement.blur();const h=f&&t.allowTouchMove&&r.touchStartPreventDefault;(r.touchStartForcePreventDefault||h)&&!l.isContentEditable&&n.preventDefault(),r.freeMode&&r.freeMode.enabled&&t.freeMode&&t.animating&&!r.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",n)}function Wf(e){const t=bt(),s=this,n=s.touchEventsData,{params:a,touches:r,rtlTranslate:o,enabled:i}=s;if(!i||!a.simulateTouch&&e.pointerType==="mouse")return;let l=e;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(n.touchId!==null||l.pointerId!==n.pointerId))return;let c;if(l.type==="touchmove"){if(c=[...l.changedTouches].find(E=>E.identifier===n.touchId),!c||c.identifier!==n.touchId)return}else c=l;if(!n.isTouched){n.startMoving&&n.isScrolling&&s.emit("touchMoveOpposite",l);return}const d=c.pageX,u=c.pageY;if(l.preventedByNestedSwiper){r.startX=d,r.startY=u;return}if(!s.allowTouchMove){l.target.matches(n.focusableElements)||(s.allowClick=!1),n.isTouched&&(Object.assign(r,{startX:d,startY:u,currentX:d,currentY:u}),n.touchStartTime=Tn());return}if(a.touchReleaseOnEdges&&!a.loop)if(s.isVertical()){if(u<r.startY&&s.translate<=s.maxTranslate()||u>r.startY&&s.translate>=s.minTranslate()){n.isTouched=!1,n.isMoved=!1;return}}else{if(o&&(d>r.startX&&-s.translate<=s.maxTranslate()||d<r.startX&&-s.translate>=s.minTranslate()))return;if(!o&&(d<r.startX&&s.translate<=s.maxTranslate()||d>r.startX&&s.translate>=s.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(n.focusableElements)&&t.activeElement!==l.target&&l.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&l.target===t.activeElement&&l.target.matches(n.focusableElements)){n.isMoved=!0,s.allowClick=!1;return}n.allowTouchCallbacks&&s.emit("touchMove",l),r.previousX=r.currentX,r.previousY=r.currentY,r.currentX=d,r.currentY=u;const p=r.currentX-r.startX,b=r.currentY-r.startY;if(s.params.threshold&&Math.sqrt(p**2+b**2)<s.params.threshold)return;if(typeof n.isScrolling>"u"){let E;s.isHorizontal()&&r.currentY===r.startY||s.isVertical()&&r.currentX===r.startX?n.isScrolling=!1:p*p+b*b>=25&&(E=Math.atan2(Math.abs(b),Math.abs(p))*180/Math.PI,n.isScrolling=s.isHorizontal()?E>a.touchAngle:90-E>a.touchAngle)}if(n.isScrolling&&s.emit("touchMoveOpposite",l),typeof n.startMoving>"u"&&(r.currentX!==r.startX||r.currentY!==r.startY)&&(n.startMoving=!0),n.isScrolling||l.type==="touchmove"&&n.preventTouchMoveFromPointerMove){n.isTouched=!1;return}if(!n.startMoving)return;s.allowClick=!1,!a.cssMode&&l.cancelable&&l.preventDefault(),a.touchMoveStopPropagation&&!a.nested&&l.stopPropagation();let m=s.isHorizontal()?p:b,f=s.isHorizontal()?r.currentX-r.previousX:r.currentY-r.previousY;a.oneWayMovement&&(m=Math.abs(m)*(o?1:-1),f=Math.abs(f)*(o?1:-1)),r.diff=m,m*=a.touchRatio,o&&(m=-m,f=-f);const h=s.touchesDirection;s.swipeDirection=m>0?"prev":"next",s.touchesDirection=f>0?"prev":"next";const g=s.params.loop&&!a.cssMode,y=s.touchesDirection==="next"&&s.allowSlideNext||s.touchesDirection==="prev"&&s.allowSlidePrev;if(!n.isMoved){if(g&&y&&s.loopFix({direction:s.swipeDirection}),n.startTranslate=s.getTranslate(),s.setTransition(0),s.animating){const E=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});s.wrapperEl.dispatchEvent(E)}n.allowMomentumBounce=!1,a.grabCursor&&(s.allowSlideNext===!0||s.allowSlidePrev===!0)&&s.setGrabCursor(!0),s.emit("sliderFirstMove",l)}if(new Date().getTime(),a._loopSwapReset!==!1&&n.isMoved&&n.allowThresholdMove&&h!==s.touchesDirection&&g&&y&&Math.abs(m)>=1){Object.assign(r,{startX:d,startY:u,currentX:d,currentY:u,startTranslate:n.currentTranslate}),n.loopSwapReset=!0,n.startTranslate=n.currentTranslate;return}s.emit("sliderMove",l),n.isMoved=!0,n.currentTranslate=m+n.startTranslate;let _=!0,S=a.resistanceRatio;if(a.touchReleaseOnEdges&&(S=0),m>0?(g&&y&&n.allowThresholdMove&&n.currentTranslate>(a.centeredSlides?s.minTranslate()-s.slidesSizesGrid[s.activeIndex+1]-(a.slidesPerView!=="auto"&&s.slides.length-a.slidesPerView>=2?s.slidesSizesGrid[s.activeIndex+1]+s.params.spaceBetween:0)-s.params.spaceBetween:s.minTranslate())&&s.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),n.currentTranslate>s.minTranslate()&&(_=!1,a.resistance&&(n.currentTranslate=s.minTranslate()-1+(-s.minTranslate()+n.startTranslate+m)**S))):m<0&&(g&&y&&n.allowThresholdMove&&n.currentTranslate<(a.centeredSlides?s.maxTranslate()+s.slidesSizesGrid[s.slidesSizesGrid.length-1]+s.params.spaceBetween+(a.slidesPerView!=="auto"&&s.slides.length-a.slidesPerView>=2?s.slidesSizesGrid[s.slidesSizesGrid.length-1]+s.params.spaceBetween:0):s.maxTranslate())&&s.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:s.slides.length-(a.slidesPerView==="auto"?s.slidesPerViewDynamic():Math.ceil(parseFloat(a.slidesPerView,10)))}),n.currentTranslate<s.maxTranslate()&&(_=!1,a.resistance&&(n.currentTranslate=s.maxTranslate()+1-(s.maxTranslate()-n.startTranslate-m)**S))),_&&(l.preventedByNestedSwiper=!0),!s.allowSlideNext&&s.swipeDirection==="next"&&n.currentTranslate<n.startTranslate&&(n.currentTranslate=n.startTranslate),!s.allowSlidePrev&&s.swipeDirection==="prev"&&n.currentTranslate>n.startTranslate&&(n.currentTranslate=n.startTranslate),!s.allowSlidePrev&&!s.allowSlideNext&&(n.currentTranslate=n.startTranslate),a.threshold>0)if(Math.abs(m)>a.threshold||n.allowThresholdMove){if(!n.allowThresholdMove){n.allowThresholdMove=!0,r.startX=r.currentX,r.startY=r.currentY,n.currentTranslate=n.startTranslate,r.diff=s.isHorizontal()?r.currentX-r.startX:r.currentY-r.startY;return}}else{n.currentTranslate=n.startTranslate;return}!a.followFinger||a.cssMode||((a.freeMode&&a.freeMode.enabled&&s.freeMode||a.watchSlidesProgress)&&(s.updateActiveIndex(),s.updateSlidesClasses()),a.freeMode&&a.freeMode.enabled&&s.freeMode&&s.freeMode.onTouchMove(),s.updateProgress(n.currentTranslate),s.setTranslate(n.currentTranslate))}function Vf(e){const t=this,s=t.touchEventsData;let n=e;n.originalEvent&&(n=n.originalEvent);let a;if(n.type==="touchend"||n.type==="touchcancel"){if(a=[...n.changedTouches].find(E=>E.identifier===s.touchId),!a||a.identifier!==s.touchId)return}else{if(s.touchId!==null||n.pointerId!==s.pointerId)return;a=n}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(n.type)&&!(["pointercancel","contextmenu"].includes(n.type)&&(t.browser.isSafari||t.browser.isWebView)))return;s.pointerId=null,s.touchId=null;const{params:o,touches:i,rtlTranslate:l,slidesGrid:c,enabled:d}=t;if(!d||!o.simulateTouch&&n.pointerType==="mouse")return;if(s.allowTouchCallbacks&&t.emit("touchEnd",n),s.allowTouchCallbacks=!1,!s.isTouched){s.isMoved&&o.grabCursor&&t.setGrabCursor(!1),s.isMoved=!1,s.startMoving=!1;return}o.grabCursor&&s.isMoved&&s.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const u=Tn(),p=u-s.touchStartTime;if(t.allowClick){const E=n.path||n.composedPath&&n.composedPath();t.updateClickedSlide(E&&E[0]||n.target,E),t.emit("tap click",n),p<300&&u-s.lastClickTime<300&&t.emit("doubleTap doubleClick",n)}if(s.lastClickTime=Tn(),cl(()=>{t.destroyed||(t.allowClick=!0)}),!s.isTouched||!s.isMoved||!t.swipeDirection||i.diff===0&&!s.loopSwapReset||s.currentTranslate===s.startTranslate&&!s.loopSwapReset){s.isTouched=!1,s.isMoved=!1,s.startMoving=!1;return}s.isTouched=!1,s.isMoved=!1,s.startMoving=!1;let b;if(o.followFinger?b=l?t.translate:-t.translate:b=-s.currentTranslate,o.cssMode)return;if(o.freeMode&&o.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:b});return}const m=b>=-t.maxTranslate()&&!t.params.loop;let f=0,h=t.slidesSizesGrid[0];for(let E=0;E<c.length;E+=E<o.slidesPerGroupSkip?1:o.slidesPerGroup){const k=E<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;typeof c[E+k]<"u"?(m||b>=c[E]&&b<c[E+k])&&(f=E,h=c[E+k]-c[E]):(m||b>=c[E])&&(f=E,h=c[c.length-1]-c[c.length-2])}let g=null,y=null;o.rewind&&(t.isBeginning?y=o.virtual&&o.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(g=0));const _=(b-c[f])/h,S=f<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;if(p>o.longSwipesMs){if(!o.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(_>=o.longSwipesRatio?t.slideTo(o.rewind&&t.isEnd?g:f+S):t.slideTo(f)),t.swipeDirection==="prev"&&(_>1-o.longSwipesRatio?t.slideTo(f+S):y!==null&&_<0&&Math.abs(_)>o.longSwipesRatio?t.slideTo(y):t.slideTo(f))}else{if(!o.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(n.target===t.navigation.nextEl||n.target===t.navigation.prevEl)?n.target===t.navigation.nextEl?t.slideTo(f+S):t.slideTo(f):(t.swipeDirection==="next"&&t.slideTo(g!==null?g:f+S),t.swipeDirection==="prev"&&t.slideTo(y!==null?y:f))}}function To(){const e=this,{params:t,el:s}=e;if(s&&s.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:n,allowSlidePrev:a,snapGrid:r}=e,o=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const i=o&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!i?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!o?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=a,e.allowSlideNext=n,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}function Jf(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function Xf(){const e=this,{wrapperEl:t,rtlTranslate:s,enabled:n}=e;if(!n)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let a;const r=e.maxTranslate()-e.minTranslate();r===0?a=0:a=(e.translate-e.minTranslate())/r,a!==e.progress&&e.updateProgress(s?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function Qf(e){const t=this;dn(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function Zf(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const gl=(e,t)=>{const s=bt(),{params:n,el:a,wrapperEl:r,device:o}=e,i=!!n.nested,l=t==="on"?"addEventListener":"removeEventListener",c=t;!a||typeof a=="string"||(s[l]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:i}),a[l]("touchstart",e.onTouchStart,{passive:!1}),a[l]("pointerdown",e.onTouchStart,{passive:!1}),s[l]("touchmove",e.onTouchMove,{passive:!1,capture:i}),s[l]("pointermove",e.onTouchMove,{passive:!1,capture:i}),s[l]("touchend",e.onTouchEnd,{passive:!0}),s[l]("pointerup",e.onTouchEnd,{passive:!0}),s[l]("pointercancel",e.onTouchEnd,{passive:!0}),s[l]("touchcancel",e.onTouchEnd,{passive:!0}),s[l]("pointerout",e.onTouchEnd,{passive:!0}),s[l]("pointerleave",e.onTouchEnd,{passive:!0}),s[l]("contextmenu",e.onTouchEnd,{passive:!0}),(n.preventClicks||n.preventClicksPropagation)&&a[l]("click",e.onClick,!0),n.cssMode&&r[l]("scroll",e.onScroll),n.updateOnWindowResize?e[c](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",To,!0):e[c]("observerUpdate",To,!0),a[l]("load",e.onLoad,{capture:!0}))};function eh(){const e=this,{params:t}=e;e.onTouchStart=qf.bind(e),e.onTouchMove=Wf.bind(e),e.onTouchEnd=Vf.bind(e),e.onDocumentTouchStart=Zf.bind(e),t.cssMode&&(e.onScroll=Xf.bind(e)),e.onClick=Jf.bind(e),e.onLoad=Qf.bind(e),gl(e,"on")}function th(){gl(this,"off")}var sh={attachEvents:eh,detachEvents:th};const So=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function nh(){const e=this,{realIndex:t,initialized:s,params:n,el:a}=e,r=n.breakpoints;if(!r||r&&Object.keys(r).length===0)return;const o=bt(),i=n.breakpointsBase==="window"||!n.breakpointsBase?n.breakpointsBase:"container",l=["window","container"].includes(n.breakpointsBase)||!n.breakpointsBase?e.el:o.querySelector(n.breakpointsBase),c=e.getBreakpoint(r,i,l);if(!c||e.currentBreakpoint===c)return;const u=(c in r?r[c]:void 0)||e.originalParams,p=So(e,n),b=So(e,u),m=e.params.grabCursor,f=u.grabCursor,h=n.enabled;p&&!b?(a.classList.remove(`${n.containerModifierClass}grid`,`${n.containerModifierClass}grid-column`),e.emitContainerClasses()):!p&&b&&(a.classList.add(`${n.containerModifierClass}grid`),(u.grid.fill&&u.grid.fill==="column"||!u.grid.fill&&n.grid.fill==="column")&&a.classList.add(`${n.containerModifierClass}grid-column`),e.emitContainerClasses()),m&&!f?e.unsetGrabCursor():!m&&f&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(k=>{if(typeof u[k]>"u")return;const C=n[k]&&n[k].enabled,R=u[k]&&u[k].enabled;C&&!R&&e[k].disable(),!C&&R&&e[k].enable()});const g=u.direction&&u.direction!==n.direction,y=n.loop&&(u.slidesPerView!==n.slidesPerView||g),_=n.loop;g&&s&&e.changeDirection(),je(e.params,u);const S=e.params.enabled,E=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),h&&!S?e.disable():!h&&S&&e.enable(),e.currentBreakpoint=c,e.emit("_beforeBreakpoint",u),s&&(y?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!_&&E?(e.loopCreate(t),e.updateSlides()):_&&!E&&e.loopDestroy()),e.emit("breakpoint",u)}function ah(e,t,s){if(t===void 0&&(t="window"),!e||t==="container"&&!s)return;let n=!1;const a=Fe(),r=t==="window"?a.innerHeight:s.clientHeight,o=Object.keys(e).map(i=>{if(typeof i=="string"&&i.indexOf("@")===0){const l=parseFloat(i.substr(1));return{value:r*l,point:i}}return{value:i,point:i}});o.sort((i,l)=>parseInt(i.value,10)-parseInt(l.value,10));for(let i=0;i<o.length;i+=1){const{point:l,value:c}=o[i];t==="window"?a.matchMedia(`(min-width: ${c}px)`).matches&&(n=l):c<=s.clientWidth&&(n=l)}return n||"max"}var rh={setBreakpoint:nh,getBreakpoint:ah};function oh(e,t){const s=[];return e.forEach(n=>{typeof n=="object"?Object.keys(n).forEach(a=>{n[a]&&s.push(t+a)}):typeof n=="string"&&s.push(t+n)}),s}function ih(){const e=this,{classNames:t,params:s,rtl:n,el:a,device:r}=e,o=oh(["initialized",s.direction,{"free-mode":e.params.freeMode&&s.freeMode.enabled},{autoheight:s.autoHeight},{rtl:n},{grid:s.grid&&s.grid.rows>1},{"grid-column":s.grid&&s.grid.rows>1&&s.grid.fill==="column"},{android:r.android},{ios:r.ios},{"css-mode":s.cssMode},{centered:s.cssMode&&s.centeredSlides},{"watch-progress":s.watchSlidesProgress}],s.containerModifierClass);t.push(...o),a.classList.add(...t),e.emitContainerClasses()}function lh(){const e=this,{el:t,classNames:s}=e;!t||typeof t=="string"||(t.classList.remove(...s),e.emitContainerClasses())}var ch={addClasses:ih,removeClasses:lh};function dh(){const e=this,{isLocked:t,params:s}=e,{slidesOffsetBefore:n}=s;if(n){const a=e.slides.length-1,r=e.slidesGrid[a]+e.slidesSizesGrid[a]+n*2;e.isLocked=e.size>r}else e.isLocked=e.snapGrid.length===1;s.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),s.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var uh={checkOverflow:dh},Eo={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function ph(e,t){return function(n){n===void 0&&(n={});const a=Object.keys(n)[0],r=n[a];if(typeof r!="object"||r===null){je(t,n);return}if(e[a]===!0&&(e[a]={enabled:!0}),a==="navigation"&&e[a]&&e[a].enabled&&!e[a].prevEl&&!e[a].nextEl&&(e[a].auto=!0),["pagination","scrollbar"].indexOf(a)>=0&&e[a]&&e[a].enabled&&!e[a].el&&(e[a].auto=!0),!(a in e&&"enabled"in r)){je(t,n);return}typeof e[a]=="object"&&!("enabled"in e[a])&&(e[a].enabled=!0),e[a]||(e[a]={enabled:!1}),je(t,n)}}const ua={eventsEmitter:cf,update:vf,translate:Af,transition:Cf,slide:Ff,loop:Gf,grabCursor:Kf,events:sh,breakpoints:rh,checkOverflow:uh,classes:ch},pa={};class Xe{constructor(){let t,s;for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];a.length===1&&a[0].constructor&&Object.prototype.toString.call(a[0]).slice(8,-1)==="Object"?s=a[0]:[t,s]=a,s||(s={}),s=je({},s),t&&!s.el&&(s.el=t);const o=bt();if(s.el&&typeof s.el=="string"&&o.querySelectorAll(s.el).length>1){const d=[];return o.querySelectorAll(s.el).forEach(u=>{const p=je({},s,{el:u});d.push(new Xe(p))}),d}const i=this;i.__swiper__=!0,i.support=ul(),i.device=pl({userAgent:s.userAgent}),i.browser=fl(),i.eventsListeners={},i.eventsAnyListeners=[],i.modules=[...i.__modules__],s.modules&&Array.isArray(s.modules)&&i.modules.push(...s.modules);const l={};i.modules.forEach(d=>{d({params:s,swiper:i,extendParams:ph(s,l),on:i.on.bind(i),once:i.once.bind(i),off:i.off.bind(i),emit:i.emit.bind(i)})});const c=je({},Eo,l);return i.params=je({},c,pa,s),i.originalParams=je({},i.params),i.passedParams=je({},s),i.params&&i.params.on&&Object.keys(i.params.on).forEach(d=>{i.on(d,i.params.on[d])}),i.params&&i.params.onAny&&i.onAny(i.params.onAny),Object.assign(i,{enabled:i.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return i.params.direction==="horizontal"},isVertical(){return i.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:i.params.allowSlideNext,allowSlidePrev:i.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:i.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:i.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),i.emit("_swiper"),i.params.init&&i.init(),i}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:s,params:n}=this,a=Ot(s,`.${n.slideClass}, swiper-slide`),r=bo(a[0]);return bo(t)-r}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(s=>s.getAttribute("data-swiper-slide-index")*1===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const t=this,{slidesEl:s,params:n}=t;t.slides=Ot(s,`.${n.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,s){const n=this;t=Math.min(Math.max(t,0),1);const a=n.minTranslate(),o=(n.maxTranslate()-a)*t+a;n.translateTo(o,typeof s>"u"?0:s),n.updateActiveIndex(),n.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const s=t.el.className.split(" ").filter(n=>n.indexOf("swiper")===0||n.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",s.join(" "))}getSlideClasses(t){const s=this;return s.destroyed?"":t.className.split(" ").filter(n=>n.indexOf("swiper-slide")===0||n.indexOf(s.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const s=[];t.slides.forEach(n=>{const a=t.getSlideClasses(n);s.push({slideEl:n,classNames:a}),t.emit("_slideClass",n,a)}),t.emit("_slideClasses",s)}slidesPerViewDynamic(t,s){t===void 0&&(t="current"),s===void 0&&(s=!1);const n=this,{params:a,slides:r,slidesGrid:o,slidesSizesGrid:i,size:l,activeIndex:c}=n;let d=1;if(typeof a.slidesPerView=="number")return a.slidesPerView;if(a.centeredSlides){let u=r[c]?Math.ceil(r[c].swiperSlideSize):0,p;for(let b=c+1;b<r.length;b+=1)r[b]&&!p&&(u+=Math.ceil(r[b].swiperSlideSize),d+=1,u>l&&(p=!0));for(let b=c-1;b>=0;b-=1)r[b]&&!p&&(u+=r[b].swiperSlideSize,d+=1,u>l&&(p=!0))}else if(t==="current")for(let u=c+1;u<r.length;u+=1)(s?o[u]+i[u]-o[c]<l:o[u]-o[c]<l)&&(d+=1);else for(let u=c-1;u>=0;u-=1)o[c]-o[u]<l&&(d+=1);return d}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:s,params:n}=t;n.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&dn(t,o)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function a(){const o=t.rtlTranslate?t.translate*-1:t.translate,i=Math.min(Math.max(o,t.maxTranslate()),t.minTranslate());t.setTranslate(i),t.updateActiveIndex(),t.updateSlidesClasses()}let r;if(n.freeMode&&n.freeMode.enabled&&!n.cssMode)a(),n.autoHeight&&t.updateAutoHeight();else{if((n.slidesPerView==="auto"||n.slidesPerView>1)&&t.isEnd&&!n.centeredSlides){const o=t.virtual&&n.virtual.enabled?t.virtual.slides:t.slides;r=t.slideTo(o.length-1,0,!1,!0)}else r=t.slideTo(t.activeIndex,0,!1,!0);r||a()}n.watchOverflow&&s!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,s){s===void 0&&(s=!0);const n=this,a=n.params.direction;return t||(t=a==="horizontal"?"vertical":"horizontal"),t===a||t!=="horizontal"&&t!=="vertical"||(n.el.classList.remove(`${n.params.containerModifierClass}${a}`),n.el.classList.add(`${n.params.containerModifierClass}${t}`),n.emitContainerClasses(),n.params.direction=t,n.slides.forEach(r=>{t==="vertical"?r.style.width="":r.style.height=""}),n.emit("changeDirection"),s&&n.update()),n}changeLanguageDirection(t){const s=this;s.rtl&&t==="rtl"||!s.rtl&&t==="ltr"||(s.rtl=t==="rtl",s.rtlTranslate=s.params.direction==="horizontal"&&s.rtl,s.rtl?(s.el.classList.add(`${s.params.containerModifierClass}rtl`),s.el.dir="rtl"):(s.el.classList.remove(`${s.params.containerModifierClass}rtl`),s.el.dir="ltr"),s.update())}mount(t){const s=this;if(s.mounted)return!0;let n=t||s.params.el;if(typeof n=="string"&&(n=document.querySelector(n)),!n)return!1;n.swiper=s,n.parentNode&&n.parentNode.host&&n.parentNode.host.nodeName===s.params.swiperElementNodeName.toUpperCase()&&(s.isElement=!0);const a=()=>`.${(s.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=n&&n.shadowRoot&&n.shadowRoot.querySelector?n.shadowRoot.querySelector(a()):Ot(n,a())[0];return!o&&s.params.createElements&&(o=La("div",s.params.wrapperClass),n.append(o),Ot(n,`.${s.params.slideClass}`).forEach(i=>{o.append(i)})),Object.assign(s,{el:n,wrapperEl:o,slidesEl:s.isElement&&!n.parentNode.host.slideSlots?n.parentNode.host:o,hostEl:s.isElement?n.parentNode.host:n,mounted:!0,rtl:n.dir.toLowerCase()==="rtl"||Gt(n,"direction")==="rtl",rtlTranslate:s.params.direction==="horizontal"&&(n.dir.toLowerCase()==="rtl"||Gt(n,"direction")==="rtl"),wrongRTL:Gt(o,"display")==="-webkit-box"}),!0}init(t){const s=this;if(s.initialized||s.mount(t)===!1)return s;s.emit("beforeInit"),s.params.breakpoints&&s.setBreakpoint(),s.addClasses(),s.updateSize(),s.updateSlides(),s.params.watchOverflow&&s.checkOverflow(),s.params.grabCursor&&s.enabled&&s.setGrabCursor(),s.params.loop&&s.virtual&&s.params.virtual.enabled?s.slideTo(s.params.initialSlide+s.virtual.slidesBefore,0,s.params.runCallbacksOnInit,!1,!0):s.slideTo(s.params.initialSlide,0,s.params.runCallbacksOnInit,!1,!0),s.params.loop&&s.loopCreate(void 0,!0),s.attachEvents();const a=[...s.el.querySelectorAll('[loading="lazy"]')];return s.isElement&&a.push(...s.hostEl.querySelectorAll('[loading="lazy"]')),a.forEach(r=>{r.complete?dn(s,r):r.addEventListener("load",o=>{dn(s,o.target)})}),Ma(s),s.initialized=!0,Ma(s),s.emit("init"),s.emit("afterInit"),s}destroy(t,s){t===void 0&&(t=!0),s===void 0&&(s=!0);const n=this,{params:a,el:r,wrapperEl:o,slides:i}=n;return typeof n.params>"u"||n.destroyed||(n.emit("beforeDestroy"),n.initialized=!1,n.detachEvents(),a.loop&&n.loopDestroy(),s&&(n.removeClasses(),r&&typeof r!="string"&&r.removeAttribute("style"),o&&o.removeAttribute("style"),i&&i.length&&i.forEach(l=>{l.classList.remove(a.slideVisibleClass,a.slideFullyVisibleClass,a.slideActiveClass,a.slideNextClass,a.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),n.emit("destroy"),Object.keys(n.eventsListeners).forEach(l=>{n.off(l)}),t!==!1&&(n.el&&typeof n.el!="string"&&(n.el.swiper=null),Wp(n)),n.destroyed=!0),null}static extendDefaults(t){je(pa,t)}static get extendedDefaults(){return pa}static get defaults(){return Eo}static installModule(t){Xe.prototype.__modules__||(Xe.prototype.__modules__=[]);const s=Xe.prototype.__modules__;typeof t=="function"&&s.indexOf(t)<0&&s.push(t)}static use(t){return Array.isArray(t)?(t.forEach(s=>Xe.installModule(s)),Xe):(Xe.installModule(t),Xe)}}Object.keys(ua).forEach(e=>{Object.keys(ua[e]).forEach(t=>{Xe.prototype[t]=ua[e][t]})});Xe.use([of,lf]);function fh(e){let{swiper:t,extendParams:s,on:n,emit:a,params:r}=e;t.autoplay={running:!1,paused:!1,timeLeft:0},s({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let o,i,l=r&&r.autoplay?r.autoplay.delay:3e3,c=r&&r.autoplay?r.autoplay.delay:3e3,d,u=new Date().getTime(),p,b,m,f,h,g,y;function _(F){!t||t.destroyed||!t.wrapperEl||F.target===t.wrapperEl&&(t.wrapperEl.removeEventListener("transitionend",_),!(y||F.detail&&F.detail.bySwiperTouchMove)&&w())}const S=()=>{if(t.destroyed||!t.autoplay.running)return;t.autoplay.paused?p=!0:p&&(c=d,p=!1);const F=t.autoplay.paused?d:u+c-new Date().getTime();t.autoplay.timeLeft=F,a("autoplayTimeLeft",F,F/l),i=requestAnimationFrame(()=>{S()})},E=()=>{let F;return t.virtual&&t.params.virtual.enabled?F=t.slides.find(te=>te.classList.contains("swiper-slide-active")):F=t.slides[t.activeIndex],F?parseInt(F.getAttribute("data-swiper-autoplay"),10):void 0},k=F=>{if(t.destroyed||!t.autoplay.running)return;cancelAnimationFrame(i),S();let z=typeof F>"u"?t.params.autoplay.delay:F;l=t.params.autoplay.delay,c=t.params.autoplay.delay;const te=E();!Number.isNaN(te)&&te>0&&typeof F>"u"&&(z=te,l=te,c=te),d=z;const Z=t.params.speed,ue=()=>{!t||t.destroyed||(t.params.autoplay.reverseDirection?!t.isBeginning||t.params.loop||t.params.rewind?(t.slidePrev(Z,!0,!0),a("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(t.slides.length-1,Z,!0,!0),a("autoplay")):!t.isEnd||t.params.loop||t.params.rewind?(t.slideNext(Z,!0,!0),a("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(0,Z,!0,!0),a("autoplay")),t.params.cssMode&&(u=new Date().getTime(),requestAnimationFrame(()=>{k()})))};return z>0?(clearTimeout(o),o=setTimeout(()=>{ue()},z)):requestAnimationFrame(()=>{ue()}),z},C=()=>{u=new Date().getTime(),t.autoplay.running=!0,k(),a("autoplayStart")},R=()=>{t.autoplay.running=!1,clearTimeout(o),cancelAnimationFrame(i),a("autoplayStop")},x=(F,z)=>{if(t.destroyed||!t.autoplay.running)return;clearTimeout(o),F||(g=!0);const te=()=>{a("autoplayPause"),t.params.autoplay.waitForTransition?t.wrapperEl.addEventListener("transitionend",_):w()};if(t.autoplay.paused=!0,z){h&&(d=t.params.autoplay.delay),h=!1,te();return}d=(d||t.params.autoplay.delay)-(new Date().getTime()-u),!(t.isEnd&&d<0&&!t.params.loop)&&(d<0&&(d=0),te())},w=()=>{t.isEnd&&d<0&&!t.params.loop||t.destroyed||!t.autoplay.running||(u=new Date().getTime(),g?(g=!1,k(d)):k(),t.autoplay.paused=!1,a("autoplayResume"))},L=()=>{if(t.destroyed||!t.autoplay.running)return;const F=bt();F.visibilityState==="hidden"&&(g=!0,x(!0)),F.visibilityState==="visible"&&w()},A=F=>{F.pointerType==="mouse"&&(g=!0,y=!0,!(t.animating||t.autoplay.paused)&&x(!0))},G=F=>{F.pointerType==="mouse"&&(y=!1,t.autoplay.paused&&w())},W=()=>{t.params.autoplay.pauseOnMouseEnter&&(t.el.addEventListener("pointerenter",A),t.el.addEventListener("pointerleave",G))},se=()=>{t.el&&typeof t.el!="string"&&(t.el.removeEventListener("pointerenter",A),t.el.removeEventListener("pointerleave",G))},U=()=>{bt().addEventListener("visibilitychange",L)},Y=()=>{bt().removeEventListener("visibilitychange",L)};n("init",()=>{t.params.autoplay.enabled&&(W(),U(),C())}),n("destroy",()=>{se(),Y(),t.autoplay.running&&R()}),n("_freeModeStaticRelease",()=>{(m||g)&&w()}),n("_freeModeNoMomentumRelease",()=>{t.params.autoplay.disableOnInteraction?R():x(!0,!0)}),n("beforeTransitionStart",(F,z,te)=>{t.destroyed||!t.autoplay.running||(te||!t.params.autoplay.disableOnInteraction?x(!0,!0):R())}),n("sliderFirstMove",()=>{if(!(t.destroyed||!t.autoplay.running)){if(t.params.autoplay.disableOnInteraction){R();return}b=!0,m=!1,g=!1,f=setTimeout(()=>{g=!0,m=!0,x(!0)},200)}}),n("touchEnd",()=>{if(!(t.destroyed||!t.autoplay.running||!b)){if(clearTimeout(f),clearTimeout(o),t.params.autoplay.disableOnInteraction){m=!1,b=!1;return}m&&t.params.cssMode&&w(),m=!1,b=!1}}),n("slideChange",()=>{t.destroyed||!t.autoplay.running||(h=!0)}),Object.assign(t.autoplay,{start:C,stop:R,pause:x,resume:w})}const hh={class:"home-layout"},gh=["data-user-name"],mh={__name:"home_route",setup(e){const t=yt(),s=ye();window.CoreBetSlip=il;const n=()=>{const l=document.querySelector(".bet-grid__toggle"),c=document.querySelector(".bet-grid__toggle-text"),d=document.querySelector(".bet-grid__select"),u=document.querySelector(".bet-grid__slip");if(console.log("[Bet Grid Toggle] Initializing...",{toggleBtn:l,toggleText:c,selectSection:d,slipSection:u}),l&&c&&d&&u){const p=window.matchMedia("(orientation: portrait)").matches,b=window.matchMedia("(max-width: 768px)").matches;(p||b)&&(d.classList.remove("collapsed"),u.classList.add("collapsed"),c.textContent="Open Bet Slip",console.log("[Bet Grid Toggle] Initial state set: select expanded, slip collapsed (drawer closed)")),l.addEventListener("click",m=>{console.log("[Bet Grid Toggle] Button clicked!"),m.preventDefault(),m.stopPropagation(),u.classList.contains("collapsed")?(d.classList.add("collapsed"),u.classList.remove("collapsed"),c.textContent="Close Bet Slip"):(d.classList.remove("collapsed"),u.classList.add("collapsed"),c.textContent="Open Bet Slip"),console.log("[Bet Grid Toggle] State changed:",{selectCollapsed:d.classList.contains("collapsed"),slipCollapsed:u.classList.contains("collapsed"),buttonText:c.textContent})}),console.log("[Bet Grid Toggle] Event listener attached")}else console.warn("[Bet Grid Toggle] Missing elements:",{toggleBtn:l,toggleText:c,selectSection:d,slipSection:u})};document.addEventListener("click",l=>{const c=l.target;c&&c.dataset?.publishRouteHome&&(c.dataset.publishRouteHome.startsWith("ROUTE.HOME.SODAPOP_PLAY.")&&document.querySelectorAll("#sodapop_play .btn-info-sm").forEach(u=>{u===c?(u.style.background="var(--app-core-color--yellow-1__dark--brand, #ffcc33)",u.style.color="var(--app-core-color--green-1__dark--brand, #27794d)"):(u.style.background="#27794d1A",u.style.color="#fff")}),Q.publish(c.dataset.publishRouteHome,`{"ts": ${Date.now()} }`)),c&&c.dataset?.sodapopClose&&neodigmSodaPop&&neodigmSodaPop.close()});const a=(l,c=!1)=>{const d=document.querySelector(".tournaments-grid");if(!d)return;d.innerHTML="";const u=document.getElementById("app"),p=u?.getAttribute("data-sync-theme")||"dark",b=u?.getAttribute("data-sync-lang")||"en",m=u?.getAttribute("data-sync-motif")||"brand",f=h=>{const g=document.createElement("article"),y=h.status||"DRAFT";g.className=`tournament-item tournament-status-${y.toLowerCase()}`;const _=document.createElement("bma-tournament-card");return _.setAttribute("data-bma-tourn-id",h.id||""),_.setAttribute("data-bma-tourn-guid",h.guid||""),_.setAttribute("data-bma-tourn-caption",h.caption||""),_.setAttribute("data-bma-tourn-tagline",h.tagline||""),_.setAttribute("data-bma-tourn-window_start_time",h.window_start_time||""),_.setAttribute("data-bma-tourn-window_end_time",h.window_end_time||""),_.setAttribute("data-bma-tourn-sports_allowed",Array.isArray(h.sports_allowed)?JSON.stringify(h.sports_allowed):h.sports_allowed||""),_.setAttribute("data-bma-tourn-entities",h.entities?JSON.stringify(h.entities):""),_.setAttribute("data-bma-tourn-tournament_dollars",h.tournament_dollars||""),_.setAttribute("data-bma-tourn-prize_distro",Array.isArray(h.prize_distro)?JSON.stringify(h.prize_distro):h.prize_distro||""),_.setAttribute("data-bma-tourn-matches",Array.isArray(h.matches_guids)?JSON.stringify(h.matches_guids):h.matches_guids||""),_.setAttribute("data-bma-tourn-matches_expanded",Array.isArray(h.matches_expanded)?JSON.stringify(h.matches_expanded):h.matches_expanded||""),_.setAttribute("data-bma-tourn-entry_fee",h.entry_fee||""),_.setAttribute("data-bma-tourn-rake",h.rake||""),_.setAttribute("data-bma-tourn-tags",Array.isArray(h.tags)?JSON.stringify(h.tags):h.tags||""),_.setAttribute("data-bma-tourn-comments",h.comments||""),_.setAttribute("data-bma-tourn-class",h.status||""),_.setAttribute("data-bma-tourn-status",h.status||""),_.setAttribute("data-sync-theme",p),_.setAttribute("data-sync-lang",b),_.setAttribute("data-sync-motif",m),_.setAttribute("data-n55-size","medium"),_.setAttribute("data-n55-enchanted-cta-ambient","none"),_.setAttribute("data-tourn-custom-css",""),_.setAttribute("data-tourn-trophy","0"),_.setAttribute("data-bma-tourn-focus",""),_.setAttribute("data-bma-tourn-wait","false"),g.appendChild(_),g};c?l.forEach(h=>{const g=document.createElement("div");g.className="tournament-category";const y=document.createElement("header");y.className="tournament-category-header";const _=document.createElement("h2");if(_.className="category-title",_.textContent=h.title,y.appendChild(_),h.subtext){const S=document.createElement("p");S.className="category-subtext",S.textContent=h.subtext,y.appendChild(S)}g.appendChild(y),d.appendChild(g),h.tournaments.forEach(S=>{const E=f(S);d.appendChild(E)})}):l.forEach(h=>{const g=f(h);d.appendChild(g)})},r=l=>{document.querySelectorAll("bma-tournament-card").forEach(d=>{d.setAttribute("data-sync-theme",l)})},o=l=>{const c=document.querySelectorAll("bma-tournament-card"),d=Date.now().toString();c.forEach(u=>{if(u===l){if(u.setAttribute("data-bma-tourn-focus",d),u.shadowRoot){const p=u.shadowRoot.querySelector(".card-focus__feedback");p&&(p.style.visibility="visible")}typeof neodigmMarquee<"u"&&neodigmMarquee.init()}else if(u.setAttribute("data-bma-tourn-focus",""),u.shadowRoot){const p=u.shadowRoot.querySelector(".card-focus__feedback");p&&(p.style.visibility="hidden")}})},i=l=>{const{action:c,tournamentId:d,tournamentGuid:u,tournamentStatus:p,...b}=l.detail;console.log("[home_route] Tournament action:",{action:c,tournamentId:d,tournamentGuid:u,tournamentStatus:p,...b}),o(l.target),Q.publish("WC.TOURN_ACTION",JSON.stringify({action:c,tournamentId:d,tournamentGuid:u,tournamentStatus:p,...b,timestamp:Date.now()}))};return Xt(async()=>{if(!s.appSession.session_user.authenticated){console.log("User not authenticated, redirecting to signin"),t.push({name:"signin_route"});return}const l=document.getElementById("app");if(l){const u=s.appCLIFeatures.features.theme?.state,p=s.appCLIFeatures.features.lang?.state,b=s.appCLIFeatures.features.motif?.state,m=s.appSession.session_user.guid;u&&(l.setAttribute("data-sync-theme",u),document.body.setAttribute("data-sync-theme",u)),p&&l.setAttribute("data-sync-lang",p),b&&l.setAttribute("data-sync-motif",b),m&&l.setAttribute("data-user-guid",m)}window._homeRouteRenderCards=a,window.initBetGridToggle=n;const c=Q.subscribe("APP.ROUTE_SYNC",(u,p)=>{try{const b=JSON.parse(p);b.theme&&r(b.theme.state)}catch(b){console.error("[home_route] Failed to parse APP.ROUTE_SYNC data:",b)}});window._homeRoutePubSubToken=c,console.log("[home_route] Publishing ROUTE.HOME_ONMOUNT"),Q.publish("ROUTE.HOME_ONMOUNT",JSON.stringify({timestamp:Date.now()})),document.addEventListener("bma-tournament-action",i);const d=new Xe(".featured-swiper",{modules:[fh],slidesPerView:1,spaceBetween:16,loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1},breakpoints:{320:{slidesPerView:1,spaceBetween:12},640:{slidesPerView:2,spaceBetween:16},1024:{slidesPerView:3,spaceBetween:20},1280:{slidesPerView:4,spaceBetween:24}}});window._featuredSwiper=d}),Ln(()=>{document.removeEventListener("bma-tournament-action",i),window._featuredSwiper&&(window._featuredSwiper.destroy(!0,!0),delete window._featuredSwiper),delete window._homeRouteRenderCards,delete window.initBetGridToggle,window._homeRoutePubSubToken&&Q.unsubscribe(window._homeRoutePubSubToken)}),(l,c)=>(tt(),_t("main",hh,[I("bma-app-head-top",{"data-user-name":jt(s).appSession.session_user.name||"Guest"},null,8,gh),c[0]||(c[0]=Qt('<bma-app-head-mid data-selected-tab="head_mid_lobby"></bma-app-head-mid><bma-app-head-sports data-selected-chip="all"></bma-app-head-sports><section class="featured-carousel-section"><div class="swiper featured-swiper"><div class="swiper-wrapper"><div class="swiper-slide"><div class="featured-card featured-card--1"></div></div><div class="swiper-slide"><div class="featured-card featured-card--2"></div></div><div class="swiper-slide"><div class="featured-card featured-card--3"></div></div><div class="swiper-slide"><div class="featured-card featured-card--4"></div></div><div class="swiper-slide"><div class="featured-card featured-card--5"></div></div><div class="swiper-slide"><div class="featured-card featured-card--6"></div></div><div class="swiper-slide"><div class="featured-card featured-card--7"></div></div></div></div></section><section class="tournaments-section"><div class="tournaments-grid"></div></section><bma-app-foot data-selected-item="foot_all_sports"></bma-app-foot>',5))]))}},bh={};function _h(e,t){return tt(),_t("main",null,[...t[0]||(t[0]=[I("h1",null,"App FAQ",-1)])])}const an=Zt(bh,[["render",_h]]),yh={};function vh(e,t){return tt(),_t("main",null,[...t[0]||(t[0]=[I("h1",null,"App Help",-1)])])}const Th=Zt(yh,[["render",vh]]),Ut=class Ut{static async establishSSE(t,s,n,a=!0){this.strChat=n,this.isDebug=a,console.log(" ~... sse client 'Q' | ","Q"),t=t.replaceAll("##SSEID##",s).replaceAll("##LASTKEY##",localStorage.getItem("sse_lastkey")||-1),this.isDebug&&console.warn(" ~... sse push uri | ",t),this.sseEvent&&(this.sseEvent.close(),this.sseEvent=null),this.sseEvent=new EventSource(t),this.sseEvent.onopen=function(r){Ut.onSSEOpen(r)},this.sseEvent.onmessage=function(r){Ut.onSSEMessage(r)},this.sseEvent.onerror=function(r){Ut.onSSEError(r)}}static async onSSEOpen(t){this.isDebug&&console.warn(" ~... sse push onSSEOpen ev | ",t)}static async onSSEMessage(t){let s=null;if(this.isDebug&&console.warn(" ~... sse push onSSEMessage ev | ",t),t?.data){localStorage.setItem("sse_lastkey",t?.data?.id||-1);try{if(s=JSON.parse(t.data),s?.class!="NO_MESSAGE")if(s?.class&&s?.msg)switch(s.class){case"BANNER_DISMISS":break;case"BANNER_MODAL":break;case"BANNER_MODAL_CLOSE":break;case"BUBBLE_CONFETTI":break;case"BUBBLE_MARQUEE":break;case"BUBBLE":break;case"CLI":break;case"CONSOLE":break;case"FEATURE_FLAG":break;case"MVV_POPUP":break;case"MVV_TOAST":s?.msg&&neodigmWired4Sound&&(neodigmWired4Sound.sound(5).vibrate(),neodigmToast.q(s.msg,"brand",4500),this.isDebug&&console.warn(" ~... sse push pushPackage.id class msg criterion  | ",s.id+" | "+s.class+" | "+s.msg+" | "+s.criterion));break;case"WEBNOTE":break;case"GUIDED_TOUR":break;case"META_MACRO":break;case"META_TEMPLATE":break;case"MVV_CAROUSEL":break;case"MVV_POPOVER":break;case"MVV_WIDGET":break;case"RECONNECT":break;case"TOURNAMENT_SYNC":this.isDebug&&console.warn(" ~... sse TOURNAMENT_SYNC | ",s),Q.publish("SSE.CORE.TOURN_SYNC",JSON.stringify(s));break}else this.isDebug&&console.warn(" ~... sse push - invalid package - no class/msg");else this.isDebug&&console.warn(" ~... sse push - no message")}catch{this.isDebug&&console.warn(" ~... sse push - invalid package")}}}static async onSSEError(t){this.isDebug&&console.warn(" ~... sse push onSSEError ev | ",t)}static async disconnectSSE(t){this.isDebug&&console.warn(" ~... sse push disconnectSSE ev | ",t),this.sseEvent.close(),this.sseEvent=null}};Ut.sseEvent=null,Ut.strChat=null,Ut.isDebug=!0;let En=Ut;class Rt{static neodigmOpt={neodigmToast:!0,N55_GTM_DL_TOAST:"n55_gtm_dl_toast",neodigmSodaPop:!0,N55_SP_DISABLE_SCROLL:!0,N55_GTM_DL_POP_OPEN:"n55_gtm_dl_pop_open",N55_GTM_DL_POP_CLOSE:"n55_gtm_dl_pop_close",neodigmWired4Sound:!0,W4S_VOLUME:.022,EVENT_SOUNDS:!0,neodigmParallax:!0,PRLX_MOBILE:!1,neodigmMarquee:!0,neodigmEnchantedCTA:!0,N55_CTA_RND_TOUCH:14001,N55_GTM_DL_CTA:"n55_gtm_dl_cta",N55_CTA_LONG_TAP:3400,N55_CTA_FX:["alternate","emit","flash_danger","flash_warning","radius","scroll","shake"],neodigmKPI:!0,N55_GTM_DL_KPI:"n55_gtm_dl_kpi",neodigmPWA:!0,N55_PWA_TEMPLATE_ID:"js-pup-n55-pwa",neodigmCarousel:!0,N55_GTM_DL_CARSL:"n55_gtm_dl_carsl",N55_CARO_BLUR:!0,neodigmTulip:!0,neodigmPopTart:!0,N55_GTM_DL_POPTRT:"n55_gtm_dl_poptrt",neodigmAgent:!0,API_baseURI:"https://a55-wtt-api-v1.onrender.com/",API_ver:"v1",neodigmPicnic:!0,N55_GTM_DL_PICNIC:"n55_gtm_dl_picnic",neodigmWWInterval:!0,neodigmMetronome:{countTo:116,neodigmMarquee:132},N55_ZIND:{PopTart:264},CONSOLE_LOG_VER:!0,N55_DEBUG_lOG:!1,N55_AMPM_THEME:"light",N55_EVENT_HAPTIC:!0,N55_FLASH_TITLE:!0,N55_GENRE_MOTIF:"neodigm",N55_THEME_DEFAULT:"brand",N55_THEME_COLORS:{brand:["EDBA08","915E00","🟧"],primary:["92a8d1","364C75","🟦"],secondary:["EDCED0","978284","🟫"],success:["009473","003817","🟩"],white:["FFFFFF","FDFDFD","⬜"],ghost:["ffffff","000000","⬜"],danger:["DD4124","810000","🟥"],warning:["F5DF4D","988200","🟨"],info:["7BC4C4","1F6868","🟦"],disabled:["868686","767676","⬜"],night:["6a6a6a","242424","⬛"],marcom:["B163A3","5F4B8B","🟪"],party:["FF6F61","C93F60","🟪"]},N55_APP_STATE:{CONTEXT:"body",FIRST_TAP:!1,ONLINE:!0,PWA_READY:!1,PWA_CONTAIN:!1,SHAKE:!1,CONTEXTMNU:!1,FOCUS:!0,AMPM:"light",REDUCE_MOTION:!1},ROOT:document.querySelector(":root"),N55_TYPE:"https://fonts.googleapis.com/css?family=Roboto+Condensed:wght@100;300;400|Roboto+Slab:wght@300|Roboto+Mono:wght@300|Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,300,0,0"};static neodigmUtils=((t=document)=>({ver:"4.0.0",isMobile:function(){return t.body.clientWidth<=768},isTouch:function(){return typeof document.body.ontouchstart<"u"},f1210:function(){return Math.floor(Math.random()*10+1)},f02x:function(s){return Math.floor(Math.random()*s)},fPromiseJS:async function(s,n){return new Promise((a,r)=>{const o=Object.assign(s.createElement(LZString.decompress("㎆ぎॠข")),{type:LZString.decompress("அ〞샴ՠ蘆㠘쁎Ұΰ耀"),src:n});o.onload=a,o.onerror=r,s.getElementsByTagName("head")[0].appendChild(o)})},fAsyncJS:function(s,n,a){const r=Object.assign(s.createElement(LZString.decompress("㎆ぎॠข")),{type:LZString.decompress("அ〞샴ՠ蘆㠘쁎Ұΰ耀"),src:n});a&&(r.onload=function(){a()}),s.getElementsByTagName("head")[0].appendChild(r)},fAsyncCSS:function(s,n){let a=s.createElement("link");a.rel="stylesheet",a.href=n,s.getElementsByTagName("head")[0].appendChild(a)},data2prop:function(s){s=s.replace("data-","").toLowerCase();let n=s.split(""),a=[],r=!1;return n.forEach(o=>{o=="-"?r=!0:(a.push(r?o.toUpperCase():o),r=!1)}),a.join("")},doDataLayer:function(s,n){neodigmOpt.N55_DEBUG_lOG&&console.log("~ga | "+s+" | "+n),window.dataLayer&&window.dataLayer.push({event:s,msg:n})},isJSON:function(s){let n=!1;try{n=typeof JSON.parse(s)}catch{}return n=="object"},appStateListen:function(s){NeodigmKeylime.subscribe("mouseover",a=>{a?.target?.dataset?.n55TypeonHover&&neodigmUtils.typeOn(JSON.parse(a.target.dataset.n55TypeonHover))},!0),NeodigmKeylime.subscribe("click",a=>{neodigmOpt.N55_APP_STATE.FIRST_TAP||(neodigmOpt.N55_APP_STATE.FIRST_TAP=!0),neodigmOpt.neodigmTulip&&neodigmTulip.close();let r=neodigmUtils.walkDOM3(a?.target,"n55TypeonClick");r&&neodigmUtils.typeOn(JSON.parse(r))},!0),NeodigmKeylime.subscribe("touchstart",a=>{neodigmOpt.N55_APP_STATE.FIRST_TAP||(neodigmOpt.N55_APP_STATE.FIRST_TAP=!0),neodigmOpt.neodigmTulip&&neodigmTulip.close()},!0),NeodigmKeylime.subscribe("resize",a=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmCarousel&&neodigmCarousel.init(),neodigmOpt.neodigmTulip&&neodigmTulip.close(),neodigmOpt.neodigmPopTart&&neodigmPopTart.close()})},!0,window),NeodigmKeylime.subscribe("orientationchange",a=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmCarousel&&neodigmCarousel.init(),neodigmOpt.neodigmTulip&&neodigmTulip.close(),neodigmOpt.neodigmPopTart&&neodigmPopTart.close()})},!0,window),NeodigmKeylime.subscribe("scroll",a=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmTulip&&neodigmTulip.close()})},!0,window),neodigmOpt.N55_APP_STATE.REDUCE_MOTION=!window.matchMedia("(prefers-reduced-motion: no-preference)").matches;let n=document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelector("[data-n55-Ampm-theme]")?.dataset.n55AmpmTheme;n&&(neodigmOpt.N55_AMPM_THEME=neodigmOpt.N55_APP_STATE.AMPM=n)},prettyTimeRETIRE:s=>{let n=new Date(s).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"});return s=="Dec 31, 1969"&&(n=""),n},prettyTime:s=>new Date(s).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"}),capFirst:s=>s&&s[0].toUpperCase()+s.slice(1)||"",genHash:s=>(s=String(s),Math.abs(s.split("").reduce((n,a)=>(n<<5)-n+a.charCodeAt(0)|0,0))),flashTitle:(s=neodigmOpt.N55_THEME_DEFAULT,n=4e3)=>{neodigmOpt.N55_FLASH_TITLE&&(document?.n55Title||(document.n55Title=document.title),neodigmOpt?.N55_THEME_COLORS[s]&&(document.title=neodigmOpt.N55_THEME_COLORS[s][2]+document.n55Title),neodigmUtils.doSetT(function(){document.title=document.n55Title},n))},robinTheme:function(s=Object.keys(neodigmOpt.N55_THEME_COLORS)[0]){if(!neodigmMetronome.isPaused()){let n=[...document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelectorAll("[data-n55-theme")];const a=56;n.forEach((o,i)=>{o.dataset.n55Theme!="disabled"&&(o.n55Theme||(o.n55Theme=o.dataset.n55Theme),setTimeout(function(){o.dataset.n55Theme=s},i*a),setTimeout(function(){o.dataset.n55Theme=o.n55Theme},i*(a+a)))}),n=[...document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelectorAll("[data-n55-theme-pulse")];const r=256;n.forEach((o,i)=>{o.n55ThemePulse||(o.n55ThemePulse=o.dataset.n55ThemePulse),setTimeout(function(){o.dataset.n55ThemePulse=s},i*r),setTimeout(function(){o.dataset.n55ThemePulse=o.n55ThemePulse},i*r+3e3)}),neodigmUtils.flashTitle(s,2e3)}},countTo:async function(s,n,a=neodigmOpt.neodigmMetronome.countTo){const r=[16,a];return[...document.querySelectorAll(s)].forEach(function(o,i){let l=Math.abs(Number(o.textContent)-n);neodigmMetronome.unsubscribe(r[1]+i).subscribe(function(c){let d=Number(o.textContent);if(!Number.isNaN(d)&&!isNaN(d)&&n!=d){let u=l/r[0];u=Math.round(u),c!=0?o.textContent=d<n?d+u:d-u:o.textContent=n}},r[1]+i,r[0])}),neodigmUtils},typeOff:async function(s){let n=document.querySelector(s?.q1st);if(n){let a=n.textContent.length,r=window.getComputedStyle(n),o=Number(r.paddingTop.replace("px",""))+Number(r.paddingBottom.replace("px",""));for(n.offsetHeight&&(n.style.height=n.offsetHeight-o+"px");a;)setTimeout(()=>{n.textContent=n.textContent.replace(/.$/,"")},s.uniqueDelay*a--)}},typeOn:async function(s){let n=document.querySelector(s?.q1st);if(n){n.dataset.n55Typeon=0;let a=s.msg.replaceAll("|","   |   ")+"   ",r=a.split("|");if(s?.mode=="OFF")return neodigmUtils.typeOff({q1st:s.q1st,uniqueDelay:s.uniqueDelay}),neodigmUtils;if(s?.mode=="RANDOM"&&r.length){let o=n.dataset.n55Typeon=neodigmUtils.f02x(r.length);a=r[o]}neodigmUtils.typeOff({q1st:s.q1st,uniqueDelay:s.uniqueDelay/n.textContent.length-4}),neodigmMetronome.unsubscribe(s.uniqueDelay).subscribe(o=>{let i=a[a.length-(o+1)];i=="|"&&(i="",neodigmUtils.typeOff({q1st:s.q1st,uniqueDelay:s.uniqueDelay/n.textContent.length-4}),n.dataset.n55Typeon++),n.textContent+=i,s?.mode=="LOOP"&&o==0&&neodigmUtils.typeOn(s)},s.uniqueDelay,a.length)}return neodigmUtils},getValJSON:function(s,n){try{return JSON.parse(s)}catch{return JSON.parse('{ "'+n+'": "'+s+'" }')}},walkDOM3:function(s,n,a=!1){let r=null;if(!r&&s?.dataset[n]&&(r=s),!r&&s?.parentNode?.dataset[n]&&(r=s.parentNode),!r&&s.tagName!="BODY"&&s?.parentNode?.parentNode?.dataset[n]&&(r=s.parentNode.parentNode),r)return a?r:r.dataset[n]},doSetT:function(s,n){return neodigmOpt.neodigmWWInterval?window.setTimeoutN55(s,n):setTimeout(s,n)},shake:function(s,n=!0){return[...document.querySelectorAll(s)].forEach(function(a,r){a.classList.add("shake__an"),setTimeout(function(){a.classList.remove("shake__an")},460)}),Rt.neodigmUtils},hardReload:function(s="n55reset"){const n=new URLSearchParams(window.location.search);n.set(s,new Date().getTime());const a=n.toString();window.location.search=a}}))}const Sh={class:"auth-page"},Eh={class:"auth-page-right"},wh={class:"auth-card"},xh={class:"form-group"},Ah={class:"form-group"},Ph={class:"password-input-wrapper"},Oh=["type"],kh={style:{"text-align":"right"}},Ch={class:"auth-link-center"},Rh={__name:"signin_route",setup(e){const t=yt(),s=ye(),n=(p="signin")=>{t.push({name:p})};let a=null;const r=Qe(!1),o=()=>{r.value=!r.value},i=(p=3,b=1)=>{switch(s.appCLIFeatures.features.motif.state){case"brand":p=3,b=1;break;case"white_label":p=3,b=4;break}const m=Math.floor(Math.random()*p)+b,f=document.querySelector(".img__bg")?.classList;f&&(f.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),f.add(`img__bg--${m}`)),a||(a=Q.subscribe("APP__ROUTE_SYNC",(h,g)=>{const y=JSON.parse(g);switch(Object.keys(y)[0]){case"Motif":i();break;case"Lang":l();break}}))},l=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(p=>{const b=s.appCLIFeatures?.features?.lang?.state;let m=s.appMeta.microcopy.language.filter(f=>f.code==b)[0]?.copy;m=m.filter(f=>f[0]==p.dataset.syncMicrocopyText)[0],m&&(p.textContent=m[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(p=>{const b=s.appCLIFeatures?.features?.lang?.state;let m=s.appMeta.microcopy.language.filter(f=>f.code==b)[0]?.copy;m=m.filter(f=>f[0]==p.dataset.syncMicrocopyPlaceholder)[0],m&&(p.placeholder=m[1])})},c=p=>{Rt.neodigmUtils().shake(p||"#inp__text--email")},d=()=>{let p=document.querySelectorAll("#inp__text--email")[0].value;neodigmUtils.messageNotification("Cub vs. Cardianals","https://mach-five-group.github.io/bma-landing/Assets/Bet%20Max%20Action-Full%20Lockup-600.png"),s.doCLI(p)},u=()=>{const p=document.querySelector("#inp__text--email"),b=document.querySelector("#inp__text--password");let m=null,f=null;if(!p?.value)m="Please enter your email",f="#inp__text--email";else if(p.value.indexOf("@")===-1||p.value.indexOf(".")===-1)m="Please enter a valid email address",f="#inp__text--email";else if(!b?.value)m="Please enter your password",f="#inp__text--password";else if(b.value.length<10)m="Password must be at least 10 characters",f="#inp__text--password";else{const h={email:p.value,hash:Rt.neodigmUtils().genHash(b.value)};Se.doSignin(h,g=>{const S=(g?.entity?.tags||[]).find(E=>E.userName)?.userName||"";if(s.appSession.session_user.authenticated=!0,s.appSession.session_user.email=h.email,s.appSession.session_user.fname=g?.entity?.first,s.appSession.session_user.lname=g?.entity?.last,s.appSession.session_user.userName=S,s.appSession.session_user.name=S,s.appSession.session_user.guid=g?.entity?.guid,s.saveSessionUser(),s.appCLIFeatures.features.sse.state){const E=g?.entity?.guid||s.appSession.session_user.guid;En.establishSSE("https://machfive-bmacdev-rest.onrender.com/v5/sse?appid=BMACORE&sseid=##SSEID##&lastkey=##LASTKEY##",E,s,!0)}})}m&&(c(f),neodigmToast.q(m,"danger"))};return Xt(()=>{i(),l()}),(p,b)=>(tt(),_t("div",Sh,[b[10]||(b[10]=Qt('<div class="auth-page-left" data-v-bdc22b93><div class="auth-bg" data-v-bdc22b93><div class="auth-bg-image" data-v-bdc22b93></div><div class="auth-bg-image" data-v-bdc22b93></div><div class="auth-bg-image" data-v-bdc22b93></div></div><div class="auth-overlay" data-v-bdc22b93></div><div class="auth-branding-content" data-v-bdc22b93><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-bdc22b93><p class="auth-branding-tagline" data-v-bdc22b93>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-bdc22b93>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-bdc22b93> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),I("div",Eh,[I("div",wh,[b[9]||(b[9]=I("div",{class:"auth-header"},[I("h1",{class:"auth-title","data-sync-microcopy-text":"welcome_back"},"Welcome Back")],-1)),I("form",{class:"auth-form",onSubmit:Dn(u,["prevent"])},[I("div",xh,[b[4]||(b[4]=I("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),I("input",{id:"inp__text--email",type:"text","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onDblclick:b[0]||(b[0]=m=>d())},null,32)]),I("div",Ah,[b[5]||(b[5]=I("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),I("div",Ph,[I("input",{id:"inp__text--password",type:r.value?"text":"password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password"},null,8,Oh),I("button",{type:"button",class:"password-toggle-btn",onClick:b[1]||(b[1]=m=>o()),tabindex:"-1"},[I("span",{class:zt(r.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),I("div",kh,[I("a",{class:"auth-link",onClick:b[2]||(b[2]=m=>n("forgot_route")),"data-sync-microcopy-text":"forgot_password"},"Forgot Password?")]),b[8]||(b[8]=I("div",{class:"auth-actions"},[I("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"sign_in"},"Sign In")],-1)),I("p",Ch,[b[6]||(b[6]=I("span",{"data-sync-microcopy-text":"dont_have_an_account"},"Don't have an account?",-1)),b[7]||(b[7]=Nn()),I("a",{class:"auth-link",onClick:b[3]||(b[3]=m=>n("signup_route")),"data-sync-microcopy-text":"sign_up"},"Sign Up")])],32)])])]))}},Lh=Zt(Rh,[["__scopeId","data-v-bdc22b93"]]),Mh={class:"auth-page"},Ih={__name:"signout_route",setup(e){const t=yt();ye();const s=()=>{mvvLegit.doSignout()},n=()=>{t.push({name:"home_route"})};return(a,r)=>(tt(),_t("div",Mh,[r[1]||(r[1]=Qt('<div class="auth-page-left" data-v-119b5d43><div class="auth-bg" data-v-119b5d43><div class="auth-bg-image" data-v-119b5d43></div><div class="auth-bg-image" data-v-119b5d43></div><div class="auth-bg-image" data-v-119b5d43></div></div><div class="auth-overlay" data-v-119b5d43></div><div class="auth-branding-content" data-v-119b5d43><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-119b5d43><p class="auth-branding-tagline" data-v-119b5d43>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-119b5d43>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-119b5d43> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),I("div",{class:"auth-page-right"},[I("div",{class:"auth-card"},[r[0]||(r[0]=I("div",{class:"auth-header"},[I("h1",{class:"auth-title"},"Sign Out"),I("p",{class:"auth-subtitle"},"Confirm you want to sign out")],-1)),I("div",{class:"auth-actions"},[I("button",{onClick:s,class:"btn btn-red"}," Sign Out "),I("button",{onClick:n,class:"btn btn-outline"}," Cancel ")])])])]))}},Nh=Zt(Ih,[["__scopeId","data-v-119b5d43"]]),Dh={class:"auth-page"},Bh={class:"auth-page-right",style:{display:"block"}},Fh={class:"auth-card auth-card-wide"},$h={class:"form-group"},Uh={class:"form-group"},Hh={class:"form-group"},Gh={class:"form-group"},Yh={class:"form-group"},jh={class:"password-input-wrapper"},Kh=["type"],zh={class:"form-group"},qh={class:"password-input-wrapper"},Wh=["type"],Vh={class:"auth-link-center"},Jh={__name:"signup_route",setup(e){const t=yt(),s=ye(),n=(h="signin")=>{t.push({name:h})};Se.getTJO()&&n("contests");let a=null;const r=Qe(!1),o=Qe(!1),i=()=>{r.value=!r.value},l=()=>{o.value=!o.value},c=(h=3,g=1)=>{switch(s.appCLIFeatures.features.motif.state){case"brand":h=3,g=1;break;case"white_label":h=3,g=4;break}const y=Math.floor(Math.random()*h)+g,_=document.querySelector(".img__bg")?.classList;_&&(_.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),_.add(`img__bg--${y}`)),a||(a=Q.subscribe("APP__ROUTE_SYNC",(S,E)=>{const k=JSON.parse(E);switch(Object.keys(k)[0]){case"Motif":c();break;case"Lang":d();break}}))},d=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(h=>{const g=s.appCLIFeatures?.features?.lang?.state;let y=s.appMeta.microcopy.language.filter(_=>_.code==g)[0]?.copy;y=y.filter(_=>_[0]==h.dataset.syncMicrocopyText)[0],y&&(h.textContent=y[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(h=>{const g=s.appCLIFeatures?.features?.lang?.state;let y=s.appMeta.microcopy.language.filter(_=>_.code==g)[0]?.copy;y=y.filter(_=>_[0]==h.dataset.syncMicrocopyPlaceholder)[0],y&&(h.placeholder=y[1])})},u=h=>{Rt.neodigmUtils().shake(h||"#inp__text--email")},p=()=>{let h=document.querySelectorAll("#inp__text--email")[0].value;s.doCLI(h)},b=h=>{const g=[];return h.length<10&&g.push("at least 10 characters"),/[a-z]/.test(h)||g.push("1 lowercase"),/[A-Z]/.test(h)||g.push("1 uppercase"),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(h)||g.push("1 special character"),/[^\x00-\x7F]/.test(h)&&g.push("ASCII characters only"),g},m=async()=>{const h=document.querySelector("#inp__text--username"),g=h?.value?.trim();if(g)try{(await Se.checkUserName(g)).userNameExists&&(neodigmToast.q("User name already taken|Please choose a different one","danger"),h.value="",h.focus())}catch(y){console.error("Error checking username:",y)}},f=()=>{const h=document.querySelector("#inp__text--first-name"),g=document.querySelector("#inp__text--last-name"),y=document.querySelector("#inp__text--email"),_=document.querySelector("#inp__text--username"),S=document.querySelector("#inp__text--password"),E=document.querySelector("#inp__text--verify-password");let k=null,C=null;if(!h?.value)k="Please enter your first name",C="#inp__text--first-name";else if(!g?.value)k="Please enter your last name",C="#inp__text--last-name";else if(!y?.value)k="Please enter your email",C="#inp__text--email";else if(y.value.indexOf("@")===-1||y.value.indexOf(".")===-1)k="Please enter a valid email address",C="#inp__text--email";else if(!_?.value)k="Please enter a user name",C="#inp__text--username";else if(!S?.value)k="Please enter a password",C="#inp__text--password";else{const R=b(S.value);if(R.length>0)k="Password must have:|"+R.join(", "),C="#inp__text--password";else if(!E?.value)k="Please verify your password",C="#inp__text--verify-password";else if(S.value!==E.value)k="Passwords do not match",C="#inp__text--verify-password";else{const x=h.value.trim(),w=g.value.trim(),L=[{userName:_.value.trim(),ts:Date.now()}],A={email:y.value,hash:Rt.neodigmUtils().genHash(S.value),first:x,last:w,company:"",phone:"",tags:L};Se.doSignup(A,G=>{G.ok&&setTimeout(()=>{mvvLegit.doUNVERF()},1e3)})}}k&&(u(C),neodigmToast.q(k,"danger"))};return Xt(()=>{c(),d()}),(h,g)=>(tt(),_t("div",Dh,[g[22]||(g[22]=Qt('<div class="auth-page-left" data-v-a46ae1e8><div class="auth-bg" data-v-a46ae1e8><div class="auth-bg-image" data-v-a46ae1e8></div><div class="auth-bg-image" data-v-a46ae1e8></div><div class="auth-bg-image" data-v-a46ae1e8></div></div><div class="auth-overlay" data-v-a46ae1e8></div><div class="auth-branding-content" data-v-a46ae1e8><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-a46ae1e8><p class="auth-branding-tagline" data-v-a46ae1e8>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-a46ae1e8>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-a46ae1e8> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),I("div",Bh,[I("div",Fh,[g[21]||(g[21]=I("div",{class:"auth-header"},[I("h1",{class:"auth-title","data-sync-microcopy-text":"sign_up"},"Sign Up")],-1)),I("form",{class:"auth-form",onSubmit:Dn(f,["prevent"])},[I("div",$h,[g[11]||(g[11]=I("label",{for:"inp__text--first-name","data-sync-microcopy-text":"first_name"},"First Name",-1)),I("input",{id:"inp__text--first-name",type:"text","data-sync-microcopy-placeholder":"enter_your_first_name",placeholder:"Enter your first name",onKeyup:g[0]||(g[0]=xt(y=>f(),["enter"]))},null,32)]),I("div",Uh,[g[12]||(g[12]=I("label",{for:"inp__text--last-name","data-sync-microcopy-text":"last_name"},"Last Name",-1)),I("input",{id:"inp__text--last-name",type:"text","data-sync-microcopy-placeholder":"enter_your_last_name",placeholder:"Enter your last name",onKeyup:g[1]||(g[1]=xt(y=>f(),["enter"]))},null,32)]),I("div",Hh,[g[13]||(g[13]=I("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),I("input",{id:"inp__text--email",type:"text","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onDblclick:g[2]||(g[2]=y=>p()),onKeyup:g[3]||(g[3]=xt(y=>f(),["enter"]))},null,32)]),I("div",Gh,[g[14]||(g[14]=I("label",{for:"inp__text--username","data-sync-microcopy-text":"username"},"Username",-1)),I("input",{id:"inp__text--username",type:"text","data-sync-microcopy-placeholder":"enter_your_username",placeholder:"Enter your username",onBlur:g[4]||(g[4]=y=>m()),onKeyup:g[5]||(g[5]=xt(y=>f(),["enter"]))},null,32)]),I("div",Yh,[g[15]||(g[15]=I("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),I("div",jh,[I("input",{id:"inp__text--password",type:r.value?"text":"password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password",onKeyup:g[6]||(g[6]=xt(y=>f(),["enter"]))},null,40,Kh),I("button",{type:"button",class:"password-toggle-btn",onClick:g[7]||(g[7]=y=>i()),tabindex:"-1"},[I("span",{class:zt(r.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])]),g[16]||(g[16]=I("small",{"data-sync-microcopy-text":"must_be_at_least_10_characters_long"},"Must be at least 10 characters long",-1))]),I("div",zh,[g[17]||(g[17]=I("label",{for:"inp__text--verify-password","data-sync-microcopy-text":"verify_password"},"Verify Password",-1)),I("div",qh,[I("input",{id:"inp__text--verify-password",type:o.value?"text":"password","data-sync-microcopy-placeholder":"re_enter_your_password",placeholder:"Re-enter your password",onKeyup:g[8]||(g[8]=xt(y=>f(),["enter"]))},null,40,Wh),I("button",{type:"button",class:"password-toggle-btn",onClick:g[9]||(g[9]=y=>l()),tabindex:"-1"},[I("span",{class:zt(o.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),g[20]||(g[20]=I("div",{class:"auth-actions"},[I("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"sign_up"},"Sign Up")],-1)),I("p",Vh,[g[18]||(g[18]=I("span",{"data-sync-microcopy-text":"already_have_an_account"},"Already have an account?",-1)),g[19]||(g[19]=Nn()),I("a",{class:"auth-link",onClick:g[10]||(g[10]=y=>n("signin_route")),"data-sync-microcopy-text":"log_in"},"Sign In")])],32)])])]))}},Xh=Zt(Jh,[["__scopeId","data-v-a46ae1e8"]]),Qh={class:"auth-page"},Zh={class:"auth-page-right"},eg={class:"auth-card"},tg={class:"form-group"},sg={class:"auth-link-center"},ng={__name:"forgot_route",setup(e){const t=yt(),s=ye(),n=(c="signin_route")=>{t.push({name:c})};Se.getTJO()&&n("contests");let a=null;const r=(c=3,d=1)=>{switch(s.appCLIFeatures.features.motif.state){case"brand":c=3,d=1;break;case"white_label":c=3,d=4;break}const u=Math.floor(Math.random()*c)+d,p=document.querySelector(".img__bg")?.classList;p&&(p.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),p.add(`img__bg--${u}`)),a||(a=Q.subscribe("APP__ROUTE_SYNC",(b,m)=>{const f=JSON.parse(m);switch(Object.keys(f)[0]){case"Motif":r();break;case"Lang":o();break}}))},o=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(c=>{const d=s.appCLIFeatures?.features?.lang?.state;let u=s.appMeta.microcopy.language.filter(p=>p.code==d)[0]?.copy;u=u.filter(p=>p[0]==c.dataset.syncMicrocopyText)[0],u&&(c.textContent=u[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(c=>{const d=s.appCLIFeatures?.features?.lang?.state;let u=s.appMeta.microcopy.language.filter(p=>p.code==d)[0]?.copy;u=u.filter(p=>p[0]==c.dataset.syncMicrocopyPlaceholder)[0],u&&(c.placeholder=u[1])})},i=c=>{Rt.neodigmUtils().shake(c||"#inp__text--email")},l=()=>{const c=document.querySelector("#inp__text--email");let d=null,u=null;if(!c?.value)d="Please enter your email address",u="#inp__text--email";else if(c.value.indexOf("@")===-1||c.value.indexOf(".")===-1)d="Please enter a valid email address",u="#inp__text--email";else{const p={method:"GET",headers:Se.genHeaders()};fetch(Se.API_baseURI+"/m5t/"+Se.API_ver+"/acctEntity/forgot?CODE="+encodeURIComponent(c.value),p).then(b=>b.json()).then(b=>{b.ok?(neodigmToast.q("Password reset email sent!|Please check your inbox","success"),setTimeout(()=>{n("verf_link_route")},2e3)):neodigmToast.q("Failed to send reset email|Please try again","danger")}).catch(b=>{neodigmToast.q("An error occurred|Please try again","danger")});return}d&&(i(u),neodigmToast.q(d,"danger"))};return Xt(()=>{r(),o()}),(c,d)=>(tt(),_t("div",Qh,[d[7]||(d[7]=Qt('<div class="auth-page-left"><div class="auth-bg"><div class="auth-bg-image"></div><div class="auth-bg-image"></div><div class="auth-bg-image"></div></div><div class="auth-overlay"></div><div class="auth-branding-content"><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img"><p class="auth-branding-tagline">Daily Tournament Betting</p><p class="auth-branding-subtitle">Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer"> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),I("div",Zh,[I("div",eg,[d[6]||(d[6]=I("div",{class:"auth-header"},[I("h1",{class:"auth-title","data-sync-microcopy-text":"forgot_password"},"Forgot Password"),I("p",{class:"auth-subtitle","data-sync-microcopy-text":"please_enter_your_email"},"Please enter your email to receive a password reset link")],-1)),I("form",{class:"auth-form",onSubmit:Dn(l,["prevent"])},[I("div",tg,[d[2]||(d[2]=I("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),I("input",{id:"inp__text--email",type:"text","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onKeyup:d[0]||(d[0]=xt(u=>l(),["enter"]))},null,32)]),d[5]||(d[5]=I("div",{class:"auth-actions"},[I("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"send_reset_link"},"Send Reset Link")],-1)),I("p",sg,[d[3]||(d[3]=I("span",{"data-sync-microcopy-text":"remember_your_password"},"Remember your password?",-1)),d[4]||(d[4]=Nn()),I("a",{class:"auth-link",onClick:d[1]||(d[1]=u=>n("signin_route")),"data-sync-microcopy-text":"sign_in"},"Sign In")])],32)])])]))}},ag={class:"auth-page"},rg={class:"auth-page-right"},og={class:"auth-card"},ig={class:"form-group"},lg={class:"password-input-wrapper"},cg=["type"],dg={class:"form-group"},ug={class:"password-input-wrapper"},pg=["type"],fg={__name:"resethash_route",setup(e){const t=yt(),s=ye(),n=()=>{t.push({name:"home_route"})};let a=null;const r=Qe(!1),o=Qe(!1),i=()=>{r.value=!r.value},l=()=>{o.value=!o.value},c=(m=3,f=1)=>{switch(s.appCLIFeatures.features.motif.state){case"brand":m=3,f=1;break;case"white_label":m=3,f=4;break}const h=Math.floor(Math.random()*m)+f,g=document.querySelector(".img__bg")?.classList;g&&(g.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),g.add(`img__bg--${h}`)),a||(a=Q.subscribe("APP__ROUTE_SYNC",(y,_)=>{const S=JSON.parse(_);switch(Object.keys(S)[0]){case"Motif":c();break;case"Lang":d();break}}))},d=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(m=>{const f=s.appCLIFeatures?.features?.lang?.state;let h=s.appMeta.microcopy.language.filter(g=>g.code==f)[0]?.copy;h=h.filter(g=>g[0]==m.dataset.syncMicrocopyText)[0],h&&(m.textContent=h[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(m=>{const f=s.appCLIFeatures?.features?.lang?.state;let h=s.appMeta.microcopy.language.filter(g=>g.code==f)[0]?.copy;h=h.filter(g=>g[0]==m.dataset.syncMicrocopyPlaceholder)[0],h&&(m.placeholder=h[1])})},u=m=>{Rt.neodigmUtils().shake(m||"#inp__text--password")},p=m=>{const f=[];return m.length<10&&f.push("at least 10 characters"),/[a-z]/.test(m)||f.push("1 lowercase"),/[A-Z]/.test(m)||f.push("1 uppercase"),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(m)||f.push("1 special character"),/[^\x00-\x7F]/.test(m)&&f.push("ASCII characters only"),f},b=()=>{const m=document.querySelector("#inp__text--password"),f=document.querySelector("#inp__text--verify-password");let h=null,g=null;if(!m?.value)h="Please enter a password",g="#inp__text--password";else{const y=p(m.value);if(y.length>0)h="Password must have:|"+y.join(", "),g="#inp__text--password";else if(!f?.value)h="Please verify your password",g="#inp__text--verify-password";else if(m.value!==f.value)h="Passwords do not match",g="#inp__text--verify-password";else{const _=s.appSession.session_user.email||"",S={email:_,hash:Rt.neodigmUtils().genHash(m.value),modified_by:_},E={method:"POST",body:JSON.stringify(S),headers:Se.genHeaders()};fetch(Se.API_baseURI+"/m5t/"+Se.API_ver+"/acctEntity/resetHash",E).then(k=>k.json()).then(k=>{k.ok?(neodigmToast.q("Password reset successful!|Signing you out...","success"),setTimeout(()=>{mvvLegit.doSignout()},4e3)):neodigmToast.q("Password reset failed|Please try again","danger")}).catch(k=>{neodigmToast.q("An error occurred|Please try again","danger")});return}}h&&(u(g),neodigmToast.q(h,"danger"))};return Xt(()=>{c(),d()}),(m,f)=>(tt(),_t("div",ag,[f[9]||(f[9]=Qt('<div class="auth-page-left" data-v-cef3f735><div class="auth-bg" data-v-cef3f735><div class="auth-bg-image" data-v-cef3f735></div><div class="auth-bg-image" data-v-cef3f735></div><div class="auth-bg-image" data-v-cef3f735></div></div><div class="auth-overlay" data-v-cef3f735></div><div class="auth-branding-content" data-v-cef3f735><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-cef3f735><p class="auth-branding-tagline" data-v-cef3f735>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-cef3f735>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-cef3f735> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),I("div",rg,[I("div",og,[f[8]||(f[8]=I("div",{class:"auth-header"},[I("h1",{class:"auth-title","data-sync-microcopy-text":"reset_password"},"Reset Password"),I("p",{class:"auth-subtitle","data-sync-microcopy-text":"please_enter_your_new_password"},"Please enter your new password")],-1)),I("form",{class:"auth-form",onSubmit:Dn(b,["prevent"])},[I("div",ig,[f[4]||(f[4]=I("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),I("div",lg,[I("input",{id:"inp__text--password",type:r.value?"text":"password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password",onKeyup:f[0]||(f[0]=xt(h=>b(),["enter"]))},null,40,cg),I("button",{type:"button",class:"password-toggle-btn",onClick:f[1]||(f[1]=h=>i()),tabindex:"-1"},[I("span",{class:zt(r.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])]),f[5]||(f[5]=I("small",{"data-sync-microcopy-text":"must_be_at_least_10_characters_long"},"Must be at least 10 characters long",-1))]),I("div",dg,[f[6]||(f[6]=I("label",{for:"inp__text--verify-password","data-sync-microcopy-text":"verify_password"},"Verify Password",-1)),I("div",ug,[I("input",{id:"inp__text--verify-password",type:o.value?"text":"password","data-sync-microcopy-placeholder":"re_enter_your_password",placeholder:"Re-enter your password",onKeyup:f[2]||(f[2]=xt(h=>b(),["enter"]))},null,40,pg),I("button",{type:"button",class:"password-toggle-btn",onClick:f[3]||(f[3]=h=>l()),tabindex:"-1"},[I("span",{class:zt(o.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),I("div",{class:"auth-actions"},[f[7]||(f[7]=I("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"reset_password"},"Reset Password",-1)),I("button",{type:"button",onClick:n,class:"btn btn-outline"}," Cancel ")])],32)])])]))}},hg=Zt(fg,[["__scopeId","data-v-cef3f735"]]),gg={class:"auth-page"},mg={class:"auth-page-right"},bg={class:"auth-card"},_g={class:"verification-content"},yg={class:"timer-display"},vg={__name:"verf_link_route",setup(e){const t=yt();nl(),ye();const s=Qe(7200);let n=null;const a=o=>{const i=Math.floor(o/3600),l=Math.floor(o%3600/60),c=o%60;return`${i.toString().padStart(2,"0")}:${l.toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}`},r=()=>{n=setInterval(()=>{s.value--,s.value<=0&&(clearInterval(n),neodigmWired4Sound.sound(14),t.push({name:"splash_route"}))},1e3)};return Xt(()=>{r()}),Ln(()=>{n&&clearInterval(n)}),(o,i)=>(tt(),_t("div",gg,[i[4]||(i[4]=Qt('<div class="auth-page-left" data-v-f5b4a3c8><div class="auth-bg" data-v-f5b4a3c8><div class="auth-bg-image" data-v-f5b4a3c8></div><div class="auth-bg-image" data-v-f5b4a3c8></div><div class="auth-bg-image" data-v-f5b4a3c8></div></div><div class="auth-overlay" data-v-f5b4a3c8></div><div class="auth-branding-content" data-v-f5b4a3c8><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-f5b4a3c8><p class="auth-branding-tagline" data-v-f5b4a3c8>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-f5b4a3c8>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-f5b4a3c8> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),I("div",mg,[I("div",bg,[i[3]||(i[3]=I("div",{class:"auth-header"},[I("h1",{class:"auth-title"},"Check Your Email"),I("p",{class:"auth-subtitle"},"A verification link has been sent to the email address you provided.")],-1)),I("div",_g,[i[0]||(i[0]=I("p",{class:"verification-instructions"},"Please click on that link to continue.",-1)),i[1]||(i[1]=I("p",{class:"verification-note"},"The link will expire in 2 hours.",-1)),i[2]||(i[2]=I("p",{class:"verification-note"},"Remember to check your spam folder.",-1)),I("div",yg,Mo(a(s.value)),1)])])])]))}},Tg=Zt(vg,[["__scopeId","data-v-f5b4a3c8"]]),Ia=op({history:$u(),routes:[{path:"/",name:"splash_route",component:go},{path:"/splash_route",name:"splash_route",component:go},{path:"/error_route",name:"error_route",component:an},{path:"/forgot_route",name:"forgot_route",component:ng},{path:"/resetforgot_route",name:"resetforgot_route",component:an},{path:"/resethash_route",name:"resethash_route",component:hg},{path:"/signin_route",name:"signin_route",component:Lh},{path:"/signout_route",name:"signout_route",component:Nh},{path:"/signup_route",name:"signup_route",component:Xh},{path:"/verf_link_route",name:"verf_link_route",component:Tg},{path:"/offline_route",name:"offline_route",component:an},{path:"/home_route",name:"home_route",component:mh},{path:"/appFAQ",name:"appFAQ",component:an},{path:"/appHelp",name:"appHelp",component:Th}]}),Ve={updateTDBalance(e,t){const s=document.querySelector(e);if(!s)return;t%1!==0?s.textContent=t.toFixed(2):neodigmUtils.countTo(e,t)},updateSummaryAndDashboard(e,t,s,n=null){const a=document.querySelector("#summary-balance"),r=document.querySelector("#summary-stake"),o=document.querySelector("#summary-payout");a&&(this.updateTDBalance("#summary-balance",e),e<0?a.classList.add("summary-cell__red"):a.classList.remove("summary-cell__red")),r&&(r.textContent=t.toFixed(2)),o&&(o.textContent=s.toFixed(2),s<0?o.classList.add("summary-cell__red"):o.classList.remove("summary-cell__red"));const i=document.getElementById("dashboard-td-balance"),l=document.getElementById("dashboard-td-pending");if(i&&(i.textContent=`TD$ ${e.toLocaleString()}`,e<0?i.style.color="#FF5252":n&&e<n.tournament_dollars*.2?i.style.color="#FF9800":i.style.color="var(--app-core-color--yellow-3__dark--brand, #F7C60D)"),l&&(l.textContent=`TD$ ${t.toLocaleString()}`),n&&n.tournament_dollars){const c=n.tournament_dollars,d=document.querySelector(".tourn-dashboard__gauge-fill--balance");if(d){const p=Math.max(e/c*100,0);d.style.width=`${p}%`}const u=document.querySelector(".tourn-dashboard__gauge-fill--pending");if(u){const p=Math.min(t/c*100,100);u.style.width=`${p}%`}}},categorizeTournaments(e,t,s,n){const a=[],r=l=>(l.entities?.guids||[]).includes(n),o=(l,c)=>(l.sports_allowed||[]).some(u=>u.key===c),i=l=>Kt.find(d=>d.key===l)?.title||l;if(t==="lobby"&&s==="all"){const l=e.filter(p=>!r(p)&&(p.status==="UPCOMING"||p.class==="UPCOMING"||p.status==="LOCKED"||p.class==="LOCKED"));l.length>0&&a.push({title:"Discover New Tournaments",subtext:`Join now • ${l.length} tournament${l.length!==1?"s":""}`,tournaments:l});const c=e.filter(p=>r(p)&&(p.status==="LOCKED"||p.class==="LOCKED"));c.length>0&&a.push({title:"Your Active Tournaments",subtext:`Currently in progress • ${c.length} tournament${c.length!==1?"s":""}`,tournaments:c});const d=e.filter(p=>r(p)&&(p.status==="UPCOMING"||p.class==="UPCOMING"));d.length>0&&a.push({title:"Your Upcoming Tournaments",subtext:`Joined, not yet started • ${d.length} tournament${d.length!==1?"s":""}`,tournaments:d});const u=e.filter(p=>p.status==="COMPLETED"||p.class==="COMPLETED").slice(0,20);u.length>0&&a.push({title:"Recently Completed",subtext:`Past competitions • ${u.length} tournament${u.length!==1?"s":""}`,tournaments:u})}else if(t==="my"){let l=e.filter(c=>r(c));if(s!=="all"){l=l.filter(b=>o(b,s));const c=i(s),d=l.filter(b=>b.status==="UPCOMING"||b.class==="UPCOMING");d.length>0&&a.push({title:`Your Upcoming ${c} Tournaments`,subtext:`Ready to start • ${d.length} tournament${d.length!==1?"s":""}`,tournaments:d});const u=l.filter(b=>b.status==="LOCKED"||b.class==="LOCKED");u.length>0&&a.push({title:`Your Active ${c} Tournaments`,subtext:`Currently playing • ${u.length} tournament${u.length!==1?"s":""}`,tournaments:u});const p=l.filter(b=>b.status==="COMPLETED"||b.class==="COMPLETED");p.length>0&&a.push({title:`Your Completed ${c} Tournaments`,subtext:`View results • ${p.length} tournament${p.length!==1?"s":""}`,tournaments:p})}else{const c=l.filter(p=>p.status==="UPCOMING"||p.class==="UPCOMING");c.length>0&&a.push({title:"Your Upcoming Tournaments",subtext:`Ready to start • ${c.length} tournament${c.length!==1?"s":""}`,tournaments:c});const d=l.filter(p=>p.status==="LOCKED"||p.class==="LOCKED");d.length>0&&a.push({title:"Your Active Tournaments",subtext:`Currently playing • ${d.length} tournament${d.length!==1?"s":""}`,tournaments:d});const u=l.filter(p=>p.status==="COMPLETED"||p.class==="COMPLETED");u.length>0&&a.push({title:"Your Completed Tournaments",subtext:`View results • ${u.length} tournament${u.length!==1?"s":""}`,tournaments:u})}}else if(t==="completed"&&s==="all"){const l=e.filter(d=>r(d)&&(d.status==="COMPLETED"||d.class==="COMPLETED"));l.length>0&&a.push({title:"Your Completed Tournaments",subtext:`Your results • ${l.length} tournament${l.length!==1?"s":""}`,tournaments:l});const c=e.filter(d=>!r(d)&&(d.status==="COMPLETED"||d.class==="COMPLETED"));c.length>0&&a.push({title:"Other Completed Tournaments",subtext:`Browse results • ${c.length} tournament${c.length!==1?"s":""}`,tournaments:c})}else if(s==="multi"){const l=e.filter(c=>(c.sports_allowed?.length||0)>1);if(t==="lobby"){const c=l.filter(p=>!r(p)&&(p.status==="UPCOMING"||p.class==="UPCOMING"));c.length>0&&a.push({title:"Discover Multi-Sport Tournaments",subtext:`Available to join • ${c.length} tournament${c.length!==1?"s":""}`,tournaments:c});const d=l.filter(p=>r(p)&&(p.status==="UPCOMING"||p.class==="UPCOMING"||p.status==="LOCKED"||p.class==="LOCKED"));d.length>0&&a.push({title:"Your Multi-Sport Tournaments",subtext:`Active and upcoming • ${d.length} tournament${d.length!==1?"s":""}`,tournaments:d});const u=l.filter(p=>r(p)&&(p.status==="COMPLETED"||p.class==="COMPLETED")).slice(0,10);u.length>0&&a.push({title:"Your Completed Multi-Sport",subtext:`Past results • ${u.length} tournament${u.length!==1?"s":""}`,tournaments:u})}else if(t==="my"){const c=l.filter(p=>r(p)&&(p.status==="LOCKED"||p.class==="LOCKED"));c.length>0&&a.push({title:"Active Multi-Sport Tournaments",subtext:`Currently playing • ${c.length} tournament${c.length!==1?"s":""}`,tournaments:c});const d=l.filter(p=>r(p)&&(p.status==="UPCOMING"||p.class==="UPCOMING"));d.length>0&&a.push({title:"Upcoming Multi-Sport Tournaments",subtext:`Ready to start • ${d.length} tournament${d.length!==1?"s":""}`,tournaments:d});const u=l.filter(p=>r(p)&&(p.status==="COMPLETED"||p.class==="COMPLETED"));u.length>0&&a.push({title:"Completed Multi-Sport Tournaments",subtext:`View results • ${u.length} tournament${u.length!==1?"s":""}`,tournaments:u})}else if(t==="completed"){const c=l.filter(u=>r(u)&&(u.status==="COMPLETED"||u.class==="COMPLETED"));c.length>0&&a.push({title:"Your Completed Multi-Sport",subtext:`Your results • ${c.length} tournament${c.length!==1?"s":""}`,tournaments:c});const d=l.filter(u=>!r(u)&&(u.status==="COMPLETED"||u.class==="COMPLETED"));d.length>0&&a.push({title:"Other Completed Multi-Sport",subtext:`Browse results • ${d.length} tournament${d.length!==1?"s":""}`,tournaments:d})}}else if(s!=="all"&&t!=="my"){const l=i(s),c=e.filter(p=>o(p,s));if(t==="lobby"){const p=c.filter(m=>!r(m)&&(m.status==="UPCOMING"||m.class==="UPCOMING"));p.length>0&&a.push({title:`Discover ${l} Tournaments`,subtext:`Available to join • ${p.length} tournament${p.length!==1?"s":""}`,tournaments:p});const b=c.filter(m=>r(m)&&(m.status==="UPCOMING"||m.class==="UPCOMING"||m.status==="LOCKED"||m.class==="LOCKED"));b.length>0&&a.push({title:`Your ${l} Tournaments`,subtext:`Active and upcoming • ${b.length} tournament${b.length!==1?"s":""}`,tournaments:b})}const d=c.filter(p=>r(p)&&(p.status==="COMPLETED"||p.class==="COMPLETED")).slice(0,10);d.length>0&&a.push({title:`Your Completed ${l}`,subtext:`Your past results • ${d.length} tournament${d.length!==1?"s":""}`,tournaments:d});const u=c.filter(p=>!r(p)&&(p.status==="COMPLETED"||p.class==="COMPLETED")).slice(0,10);u.length>0&&a.push({title:`Other Completed ${l}`,subtext:`Browse results • ${u.length} tournament${u.length!==1?"s":""}`,tournaments:u})}else a.push({title:"Tournaments",subtext:`${e.length} tournament${e.length!==1?"s":""}`,tournaments:e});return a},updateTournamentDashboard(e){if(!e)return;console.log("[Dashboard Update] Starting dashboard update for:",e.caption);const t=ye();t.appSession?.session_user?.guid;const s=e.tournament_dollars||1e4;let n=0,a=0,r=0;if(t.coreBetSlip&&t.coreBetSlip.length>0){const h=t.coreBetSlip[t.coreBetSlip.length-1].data.filter(g=>g.tournament_guid===e.guid);console.log("[Dashboard Update] Found",h.length,"existing bets for this tournament"),h.forEach(g=>{(g.bet||[]).forEach(_=>{Object.keys(_).filter(E=>E!=="short_title").forEach(E=>{const k=_[E];k&&(k.stake&&(n+=parseFloat(k.stake)),k.reconciled===!0&&k.payout>0&&(a+=parseFloat(k.payout)))})})})}const o=document.querySelector("#summary-stake");if(o){const f=parseFloat(o.textContent)||0;r=Math.max(0,f-n),console.log("[Dashboard Update] Summary total stakes:",f,"Pending:",r)}const i=n+r,l=s-n-r+a;console.log("[Dashboard Update] TD$:",s,"Committed:",n,"Pending:",r,"Payouts:",a,"=> Balance:",l);const c=document.getElementById("dashboard-td-balance");c&&(c.textContent=`TD$ ${l.toLocaleString()}`,l<0?c.style.color="#FF5252":l<s*.2?c.style.color="#FF9800":c.style.color="var(--app-core-color--yellow-3__dark--brand, #F7C60D)");const d=document.getElementById("dashboard-td-pending"),u=document.querySelector(".tourn-dashboard__gauge-fill--pending");if(d){const f=r>0?r:i;if(d.textContent=`TD$ ${f.toLocaleString()}`,u){const h=Math.min(f/s*100,100);u.style.width=`${h}%`}}const p=document.querySelector(".tourn-dashboard__gauge-fill--balance");if(p){const f=Math.max(l/s*100,0);p.style.width=`${f}%`}const b=document.getElementById("dashboard-participants"),m=document.querySelector(".tourn-dashboard__gauge-fill--participants");if(b){const f=e.entities?.guids?.length||0,h=e.entities?.max||100;if(b.textContent=`${f}/${h}`,m){const g=f/h*100;m.style.width=`${g}%`}}},renderMatchCards(e){if(!e||!e.matches_expanded)return;const t=document.querySelector(".select-grid");if(!t)return;t.innerHTML="";const s=new Date,n=[...e.matches_expanded].sort((r,o)=>{const i=new Date(r.scheduled_at),l=new Date(o.scheduled_at),c=i<s,d=l<s;return c&&!d?1:!c&&d?-1:i-l}),a=()=>{const o=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let i=0;o&&ye().coreTourn.length>0&&(i=ye().coreTourn[ye().coreTourn.length-1].data.find(m=>m.guid===o)?.tournament_dollars||0);const l=document.querySelector(".bet-grid__slip-BETSLIP-content"),c=l?l.querySelectorAll("bma-bet-entry"):[],d=Array.from(c).map(p=>({matchGuid:p.getAttribute("data-match-guid"),type:p.getAttribute("data-content-type"),teamPoints:p.getAttribute("data-content-team-points"),odds:p.getAttribute("data-content-odds"),stake:p.getAttribute("data-stake"),payout:p.getAttribute("data-payout"),matchTitle:p.getAttribute("data-match-title"),abbreviatedTitle:p.getAttribute("data-abbreviated-title"),scheduledAt:p.getAttribute("data-scheduled-at")})),u=ye();Q.publish(u.hierTopics.COREBETSLIP__INTERSYNC,JSON.stringify({tournament_dollars:i,bets:d,timestamp:Date.now()}))};n.forEach(r=>{const i=new Date(r.scheduled_at)<s;let l=!1;try{l=(typeof r.scoreboard_data=="string"?JSON.parse(r.scoreboard_data):r.scoreboard_data)?.time_remaining?.toLowerCase()==="final"}catch{}const c=document.createElement("bma-bet-match-card");if(c.setAttribute("data-match-id",r.id),c.setAttribute("data-match-guid",r.odds_id||r.guid||r.id),c.setAttribute("data-match-title",r.title),c.setAttribute("data-match-short-title",r.short_title||r.title),c.setAttribute("data-scheduled-at",r.scheduled_at),c.setAttribute("data-home-team",r.home_team_id||"Home"),c.setAttribute("data-away-team",r.away_team_id||"Away"),c.setAttribute("data-is-disabled",i||l?"true":"false"),c.setAttribute("data-sync-theme","dark"),r.odds_markets){const d=typeof r.odds_markets=="string"?r.odds_markets:JSON.stringify(r.odds_markets);c.setAttribute("data-odds-markets",d)}if(r.scoreboard_data){const d=typeof r.scoreboard_data=="string"?r.scoreboard_data:JSON.stringify(r.scoreboard_data);c.setAttribute("data-scoreboard",d)}if(r.sport_id)c.setAttribute("data-sport-key",r.sport_id);else if(e.sports_allowed&&e.sports_allowed.length===1){const d=e.sports_allowed[0];d&&d.key&&c.setAttribute("data-sport-key",d.key)}c.addEventListener("bet-button-click",d=>{const{betData:u,isActive:p,button:b}=d.detail;if(p){const m=document.querySelector(".bet-grid__slip-BETSLIP-content");if(m){const f=m.querySelectorAll("bma-bet-entry");let h=!1;f.forEach(g=>{if(h)return;const y=g.getAttribute("data-content-type"),_=g.getAttribute("data-content-odds");y===u.type&&_===u.price&&(g.remove(),h=!0)}),m.children.length===0&&(m.innerHTML='<div class="bet-slip__empty"><p>Select odds to create a new bet slip</p></div>')}b.classList.remove("btn--active"),setTimeout(()=>{a()},100)}else{document.querySelectorAll("bma-bet-match-card").forEach(h=>{h.shadowRoot.querySelectorAll(".btn--selected").forEach(g=>{g.classList.remove("btn--selected")})}),b.classList.add("btn--selected"),b.classList.add("btn--active");const m=ye(),f=u.type;f==="spread"?Q.publish(m.hierTopics.COREBETSLIP__SPREAD,JSON.stringify(u)):f==="money"?Q.publish(m.hierTopics.COREBETSLIP__MONEY,JSON.stringify(u)):f==="total"&&Q.publish(m.hierTopics.COREBETSLIP__TOTAL,JSON.stringify(u)),Q.publish(m.hierTopics.COREBETSLIP,JSON.stringify(u))}}),t.appendChild(c)})},refreshPlayPopupUI(e,t){console.log("[app_events] Refreshing PLAY popup UI for tournament:",e);const s=document.querySelector(".bet-grid__slip-BETSLIP-content");s&&(s.innerHTML='<div class="bet-slip__empty"><p>Select odds to create a new bet slip</p></div>');const n=ye();if(n.coreTourn.length>0){const o=n.coreTourn[n.coreTourn.length-1].data.find(i=>i.guid===e);o&&Ve.renderMatchCards(o)}t?.rows&&(console.log("[app_events] Publishing SODAPOP__HYDRATE__COREBETSLIP with",t.rows.length,"bets"),setTimeout(()=>{Q.publish(n.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,JSON.stringify(t))},100));const a=document.querySelector(".bet-grid__slip");a&&a.setAttribute("data-active-bet-tab","MYBETS")},disableExistingBetButtons(){const e=document.querySelectorAll(".bet-grid__slip-MYBETS bma-bet-existing"),t=Array.from(e).map(n=>{try{return JSON.parse(n.getAttribute("data-corebetslip")||"{}")}catch{return null}}).filter(Boolean);document.querySelectorAll("bma-bet-match-card").forEach(n=>{const a=n.getAttribute("data-match-guid"),r=n.getAttribute("data-home-team"),o=n.getAttribute("data-away-team");(n.shadowRoot?.querySelectorAll(".btn:not(.btn--empty)")||[]).forEach(l=>{if(l.disabled)return;const c=l.dataset.betType,p=l.dataset.team==="home"?r:o;t.some(m=>{if(m.coreMatches__guid!==a)return!1;const f=m.bet||[];if(f.length===0)return!1;const h=f[0],y=Object.keys(h).filter(E=>E!=="short_title")[0],S=h[y]?.type;return c==="total"?S===c:S===c&&y===p})&&(l.disabled=!0,l.classList.add("btn--disabled"))})})},bindAppListeners(e){Q.subscribe("APP",(m,f)=>{console.warn("~~ sub all APP | "+m+"|"+f)}),Q.subscribe("WC",(m,f)=>{console.warn("~~ sub all WC  | "+m+"|"+f)}),Q.subscribe("ROUTE",(m,f)=>{console.warn("~~ sub all ROUTE  | "+m+"|"+f)});let t="lobby",s="all";const n=()=>{if(e.coreTourn.length===0)return;const f=e.coreTourn[e.coreTourn.length-1].data,h=e.appSession?.session_user?.guid;document.querySelectorAll(".tournament-item").forEach(_=>_.classList.remove("h-ds__none"));let y=0;if(f.forEach(_=>{const S=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${_.guid}"]`);if(!S)return;const E=S.parentElement;let k=!0;if(t==="my"?(_.entities?.guids||[]).includes(h)||(k=!1):t==="completed"&&(_.status||_.class)!=="COMPLETED"&&(k=!1),s!=="all"&&k){const C=_.sports_allowed||[];s==="multi"?C.length<=1&&(k=!1):C.some(x=>x.key===s)||(k=!1)}k?y++:E&&E.classList.add("h-ds__none")}),console.log(`[app_events] Filter applied - ${t}/${s} - showing ${y} of ${f.length} tournaments`),y===0){let _="No tournaments match the current filters";t==="my"&&(_="You haven't joined any tournaments yet"),t==="completed"&&(_="No completed tournaments yet"),typeof neodigmToast<"u"&&neodigmToast.q(_,"night")}};Q.subscribe(e.hierTopics.COREBETSLIP,(m,f)=>{JSON.parse(f);let h=16;switch(m){case e.hierTopics.COREBETSLIP__BET:h=5,qs.shootConfetti(),console.log("~~~  |  "+m+" | ",f);const g=document.querySelector("neodigm-sodapop");g&&g.setAttribute("data-wait","true");const y=document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry");if(y.length===0){console.warn("[app_events] No bets to submit"),g&&g.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("No bets to submit","warning");break}const S=document.querySelector(".play-cntr")?.dataset?.currentTournGuid,E=e.appSession?.session_user?.guid;if(!S||!E){console.error("[app_events] Missing tournament or user GUID"),g&&g.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("Missing tournament or user data","danger");break}const k=Array.from(y).map(W=>{const se=W.getAttribute("data-content-team-points"),U=W.getAttribute("data-content-odds"),Y=W.getAttribute("data-stake")||"0",F=W.getAttribute("data-content-type"),z=W.getAttribute("data-payout")||"0",te=W.getAttribute("data-match-guid")||"",Z={};return Z[se]={type:F,stake:parseFloat(Y),odds:parseFloat(U),payout:parseFloat(z),reconciled:!1},{acctEntity__guid:E,coreTournaments__guid:S,coreMatches__guid:te,bet:[Z],status:"PENDING"}});console.log("[app_events] Submitting bet slips:",k),Se.postBetSlips(k).then(W=>{console.log("[app_events] Bet slips posted successfully:",W);const se=k.reduce((U,Y)=>{const F=Y.bet[0],z=Object.keys(F)[0];return U+(F[z]?.stake||0)},0);typeof neodigmToast<"u"&&neodigmToast.q(`Bets placed successfully!|Total Stake: TD$ ${se.toFixed(2)}`,"success"),Se.fetchBetSlips(E,S).then(U=>{if(U?.rows){const Y={timestamp:Date.now(),source:"API",data:U.rows};e.pushcoreBetSlip(Y),console.log("[app_events] Refreshed bet slips in store:",U.rows.length,"items")}Ve.refreshPlayPopupUI(S,U),g&&g.setAttribute("data-wait","false")}).catch(U=>{console.error("[app_events] Error fetching fresh bet slips:",U),g&&g.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("Bets placed but failed to refresh|Please close and reopen","warning")})}).catch(W=>{console.error("[app_events] Error posting bet slips:",W),typeof neodigmToast<"u"&&neodigmToast.q("Failed to place bets|Please try again","danger"),g&&g.setAttribute("data-wait","false")});break;case e.hierTopics.COREBETSLIP__SPREAD:break;case e.hierTopics.COREBETSLIP__MONEY:break;case e.hierTopics.COREBETSLIP__TOTAL:break;case e.hierTopics.COREBETSLIP__CLOSE:h=24;break;case e.hierTopics.COREBETSLIP__TDSYNC:if(document.querySelector("#summary-balance")&&f){f=JSON.parse(f);const se=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(e.coreBetSlip[0]?.data&&se){const U=e.coreBetSlip[0].data.filter(Ee=>Ee.coreTournaments__guid===se),Y=[],F=[],z=[];U.forEach(Ee=>{const Te=Ee.bet||[];if(Te.length===0)return;const M=Te[0];Object.keys(M).filter(j=>j!=="short_title").forEach(j=>{const ee=M[j],le=ee?.reconciled!==!1,v=parseFloat(ee?.payout||0);le?v===0?F.push(Ee):z.push(Ee):Y.push(Ee)})});const te=st.search(Y,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,Z=st.search(F,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,ue=te+Z,ge=st.search(z,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0,Me=f.tournament_dollars-ue+ge;Ve.updateTDBalance("#summary-balance",Me)}else Ve.updateTDBalance("#summary-balance",f.tournament_dollars)}break;case e.hierTopics.COREBETSLIP__INTERSYNC:let R=0,x=0,w=0;if(e.coreBetSlip.length>0){const se=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(se){const Y=e.coreBetSlip[e.coreBetSlip.length-1].data.filter(ge=>ge.coreTournaments__guid===se),F=[],z=[],te=[];Y.forEach(ge=>{const Me=ge.bet||[];if(Me.length===0)return;const Ee=Me[0];Object.keys(Ee).filter(M=>M!=="short_title").forEach(M=>{const J=Ee[M],j=J?.reconciled!==!1,ee=parseFloat(J?.payout||0);j?ee===0?z.push(ge):te.push(ge):F.push(ge)})}),R=st.search(F,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,x=st.search(te,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0;const Z=st.search(z,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,ue=st.search(te,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0;w=Z+ue}}let L=!0,A=0;const G=document.querySelector("[data-bets-valid]");if(G&&f){f=JSON.parse(f),f.pending_stake_sum=0,f.pending_payout_sum=0,f.bets.length||(L=!1),f.bets.forEach(te=>{te.stake=Number(te.stake),te.stake?f.pending_stake_sum+=te.stake:L=!1}),document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry").forEach(te=>{const Z=parseFloat(te.getAttribute("data-payout")||"0");f.pending_payout_sum+=Z});const se=R+f.pending_stake_sum,U=x+f.pending_payout_sum;A=f.tournament_dollars-se-w+x;const F=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let z=null;F&&e.coreTourn.length>0&&(z=e.coreTourn[e.coreTourn.length-1]?.data?.find(Z=>Z.guid===F)),Ve.updateSummaryAndDashboard(A,se,U,z),(f.tournament_dollars<0||A<0)&&(L=!1),G.dataset.betsValid=L}break}h&&neodigmWired4Sound&&neodigmWired4Sound.sound(h,"QUITE").vibrate()});const a=()=>{const f=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let h=0;f&&e.coreTourn.length>0&&(h=e.coreTourn[e.coreTourn.length-1].data.find(_=>_.guid===f)?.tournament_dollars||0),Q.publish(e.hierTopics.COREBETSLIP__TDSYNC,JSON.stringify({tournament_dollars:h,timestamp:Date.now()}))},r=()=>{const f=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let h=0;f&&e.coreTourn.length>0&&(h=e.coreTourn[e.coreTourn.length-1].data.find(R=>R.guid===f)?.tournament_dollars||0);let g=0,y=0,_=0;if(e.coreBetSlip.length>0&&f){const C=e.coreBetSlip[e.coreBetSlip.length-1].data.filter(W=>W.coreTournaments__guid===f);console.log("[app_events] Filtered bets for tournament:",f,"found:",C.length),console.log("[app_events] Using latest bet slip data index:",e.coreBetSlip.length-1),console.log("[app_events] First bet sample:",C[0]);const R=[],x=[],w=[];C.forEach(W=>{const se=W.bet||[];if(se.length===0)return;const U=se[0];Object.keys(U).filter(F=>F!=="short_title").forEach(F=>{const z=U[F],te=z?.reconciled!==!1,Z=parseFloat(z?.payout||0);te?Z===0?x.push(W):w.push(W):R.push(W)})}),console.log("[app_events] Bet categories:",{unreconciled:R.length,reconciledZero:x.length,reconciledNonZero:w.length});const L=st.search(R,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,A=st.search(x,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,G=st.search(w,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0;_=A+G,y=st.search(w,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0,g=L,console.log("[app_events] Balance calculation:",{unreconciledStakes:L,lostBetStakes:A,wonBetStakes:G,allReconciledStakes:_,displayedStake:g,reconciledPayouts:y,tournamentDollars:h,calculatedBalance:h-g-_+y})}else console.warn("[app_events] No bet data found in Pinia store or missing tournamentGuid");const S=h-g-_+y;let E=null;f&&e.coreTourn.length>0&&(E=e.coreTourn[e.coreTourn.length-1].data.find(C=>C.guid===f)),Ve.updateSummaryAndDashboard(S,g,y,E)};Q.subscribe(e.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,(m,f)=>{const g=JSON.parse(f)?.rows||[],y=document.querySelector(".bet-grid__slip-MYBETS");if(!y)return;if(y.innerHTML="",g.length===0){y.innerHTML='<p style="color: var(--app-core-color--gray-6__dark--brand, #969696); text-align: center; padding: 20px;">No active bets</p>';const k=document.querySelector(".bet-grid__slip");k&&k.setAttribute("data-active-bet-tab","BETSLIP"),a();return}g.forEach(k=>{if((k.bet||[]).length===0)return;const R=document.createElement("bma-bet-existing");R.setAttribute("data-corebetslip",JSON.stringify(k)),y.appendChild(R)});const _=document.querySelector(".bet-grid__slip");_&&_.setAttribute("data-active-bet-tab","MYBETS"),ye().appCLIFeatures?.features?.disable_existing_bet_btn?.state===!0&&Ve.disableExistingBetButtons(),setTimeout(()=>{console.log("[app_events] Calling updateSummaryFromExistingBets after HYDRATE, bet count:",g.length),console.log("[app_events] Pinia store bet count:",e.coreBetSlip[0]?.data?.length||0),r()},200)}),document.addEventListener("click",m=>{const f=m.target;if(f&&f.classList.contains("bet-slip-tab")){const h=f.dataset.betTab,g=document.querySelector(".bet-grid__slip");h&&g&&(g.setAttribute("data-active-bet-tab",h),neodigmWired4Sound&&neodigmWired4Sound.sound(3),console.log("[app_events] Switched to bet tab:",h))}if(f&&f.dataset.publishBetslip){const h=f.dataset.publishBetslip;Q.publish(h,JSON.stringify({timestamp:Date.now()}))}});const o=()=>{const f=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let h=0;f&&e.coreTourn.length>0&&(h=e.coreTourn[e.coreTourn.length-1].data.find(E=>E.guid===f)?.tournament_dollars||0);const g=document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry"),y=Array.from(g).map(_=>({teamPoints:_.getAttribute("data-content-team-points"),odds:_.getAttribute("data-content-odds"),stake:_.getAttribute("data-stake")||"0",type:_.getAttribute("data-content-type"),abbreviatedTitle:_.getAttribute("data-abbreviated-title"),scheduledAt:_.getAttribute("data-scheduled-at")}));Q.publish(e.hierTopics.COREBETSLIP__INTERSYNC,JSON.stringify({tournament_dollars:h,bets:y,timestamp:Date.now()}))},i=(m,f)=>{const h=JSON.parse(f),g=document.querySelector(".bet-grid__slip-BETSLIP-content");if(!g){console.error("[app_events] Bet slip container not found");return}const y=g.querySelector(".bet-slip__empty");y&&y.remove();let _="";h.type==="total"?_=h.team==="over"?"Over":"Under":h.team==="home"?_=h.homeTeam:h.team==="away"&&(_=h.awayTeam);let S=_;if(h.point)if(h.type==="spread"){const w=parseFloat(h.point)>0?`+${h.point}`:h.point;S=`${_} ${w}`}else h.type==="total"&&(S=`${_} ${h.point}`);const E=document.createElement("bma-bet-entry");E.setAttribute("data-content-team-points",S),E.setAttribute("data-content-odds",h.price||"0"),E.setAttribute("data-content-stake-text","0"),E.setAttribute("data-content-type",h.type||""),E.setAttribute("data-abbreviated-title",h.abbreviatedTitle||`${h.homeTeam} vs ${h.awayTeam}`),E.setAttribute("data-scheduled-at",h.scheduledAt||""),E.setAttribute("data-match-guid",h.matchGuid||""),E.setAttribute("data-home-team",h.homeTeam||""),E.setAttribute("data-away-team",h.awayTeam||""),E.setAttribute("data-bet-team",_||"");const C=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(C&&e.coreTourn.length>0){const L=e.coreTourn[e.coreTourn.length-1].data.find(A=>A.guid===C);if(L?.sports_allowed&&L.sports_allowed.length>0){const A=L.sports_allowed[0];E.setAttribute("data-sport-key",A.key||"");const G=Kt.find(W=>W.key===A.key);E.setAttribute("data-sport-group",G?.group||"")}}g.appendChild(E),console.log("[app_events] Bet entry appended to container:",E,"Container children:",g.children.length),setTimeout(()=>{c(E)},0);const R=document.querySelector(".bet-grid__slip");R&&(R.setAttribute("data-active-bet-tab","BETSLIP"),console.log("[app_events] Switched to BETSLIP tab"));const x=g.querySelectorAll("bma-bet-entry").length;x>=3?requestAnimationFrame(()=>{setTimeout(()=>{const w=document.querySelector(".bet-grid__slip");w&&(console.log("[app_events] Scrolling parent to bottom - bet count:",x,"scrollHeight:",w.scrollHeight,"current scrollTop:",w.scrollTop),w.scrollTo({top:w.scrollHeight,behavior:"smooth"}),setTimeout(()=>{console.log("[app_events] After scroll - scrollTop:",w.scrollTop)},500))},150)}):console.log("[app_events] Skipping scroll - only",x,"bet cards (need 3+)"),setTimeout(()=>{o()},200),console.log("[app_events] Created bet entry:",{teamPoints:S,odds:h.price,type:h.type})};Q.subscribe(e.hierTopics.COREBETSLIP__SPREAD,(m,f)=>{i(m,f),l()}),Q.subscribe(e.hierTopics.COREBETSLIP__MONEY,(m,f)=>{i(m,f),l()}),Q.subscribe(e.hierTopics.COREBETSLIP__TOTAL,(m,f)=>{i(m,f),l()});function l(){const m=window.matchMedia("(orientation: portrait)").matches,f=window.matchMedia("(max-width: 768px)").matches;if(m||f){const h=document.querySelector(".bet-grid__select"),g=document.querySelector(".bet-grid__slip"),y=document.querySelector(".bet-grid__toggle-text");h&&g&&y&&(h.classList.add("collapsed"),g.classList.remove("collapsed"),y.textContent="Close Bet Slip",console.log("[app_events] Bet slip expanded on portrait mode"))}}const c=m=>{const f={sport:{key:m.getAttribute("data-sport-key")||"",group:m.getAttribute("data-sport-group")||""},Match:{scheduled_at:m.getAttribute("data-scheduled-at")||"",home_team_id:m.getAttribute("data-home-team")||"",home_team_score:"",away_team_id:m.getAttribute("data-away-team")||"",away_team_score:""},Bet:{scope:{team_id:m.getAttribute("data-bet-team")||"",over:"",under:""},type:m.getAttribute("data-content-type")||"",odds:m.getAttribute("data-content-odds")||"0",stake:m.getAttribute("data-stake")||"0"}},h=il.calcPayout(f);m.setAttribute("data-payout",h.toString()),console.log("[app_events] Payout calculated:",{stake:f.Bet.stake,odds:f.Bet.odds,payout:h})};new MutationObserver(m=>{m.forEach(f=>{f.type==="attributes"&&f.attributeName==="data-stake"&&f.target.tagName==="BMA-BET-ENTRY"&&(console.log("[app_events] Stake changed:",f.target.getAttribute("data-stake")),c(f.target),clearTimeout(window.betSlipStakeTimeout),window.betSlipStakeTimeout=setTimeout(()=>{o()},300))})}).observe(document.body,{attributes:!0,attributeFilter:["data-stake"],subtree:!0}),console.log("[app_events] MutationObserver for stake changes initialized"),document.addEventListener("bma-bet-entry-remove",m=>{console.log("[app_events] Removing bet entry:",m.detail);const f=m.target,h=m.detail;f.remove(),setTimeout(()=>{const S=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(S){const E=ye(),k=E.coreTourn[E.coreTourn.length-1];if(k&&k.data){const C=k.data.find(R=>R.guid===S);C&&Ve.updateTournamentDashboard(C)}}},100),document.querySelectorAll("bma-bet-match-card").forEach(_=>{(_.shadowRoot?.querySelectorAll(".btn")||[]).forEach(E=>{const k=E.dataset.betType,C=E.dataset.price,R=k===h.type,x=C===h.odds;R&&x&&E.classList.contains("btn--active")&&(E.classList.remove("btn--active"),console.log("[app_events] Deactivated button via X removal:",{btnType:k,btnPrice:C}))})});const y=document.querySelector(".bet-grid__slip-BETSLIP-content");y&&y.children.length,setTimeout(()=>{o()},100)}),Q.subscribe(e.hierTopics.CANVAS__HYDRATE__STATUS,(m,f)=>{const h=JSON.parse(f);h&&h.guid&&neodigmUtils&&neodigmUtils.shake(`[data-bma-tourn-guid="${h.guid}"]`)}),Q.subscribe(e.hierTopics.WC__APP__FOOT,(m,f)=>{JSON.parse(f);let h=16;switch(m){case e.hierTopics.WC__APP__FOOT__ALL_SPORTS:Q.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_LOBBY,JSON.stringify({tab:"ALL_SPORTS",timestamp:Date.now()}));break;case e.hierTopics.WC__APP__FOOT__MY_TOURNEYS:Q.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_MY,JSON.stringify({tab:"MY_TOURNEYS",timestamp:Date.now()}));break;case e.hierTopics.WC__APP__FOOT__LEADERBOARD:h=24,Q.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_LEADERBOARD,JSON.stringify({tab:"LEADERBOARD",timestamp:Date.now()}));break;case e.hierTopics.WC__APP__FOOT__MY_PROFILE:Q.publish(e.hierTopics.WC__APP__HEAD_TOP__USER_PROFILE,JSON.stringify({tab:"USER_PROFILE",timestamp:Date.now()}));break}h&&neodigmWired4Sound&&neodigmWired4Sound.sound(h).vibrate()}),Q.subscribe(e.hierTopics.WC__APP__HEAD_SPORTS,(m,f)=>{const h=JSON.parse(f);let g=16;m=="WC.APP.HEAD_SPORTS.PREV"||m=="WC.APP.HEAD_SPORTS.NEXT"||m=="WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START"?g=3:(s=h.key||"all",console.log(`[app_events] Sports filter changed to: ${s} (${h.group})`),Q.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"SPORT_FILTER_CHANGE"}))),g&&neodigmWired4Sound&&neodigmWired4Sound.sound(g).vibrate()}),Q.subscribe(e.hierTopics.WC__APP__HEAD_MID,(m,f)=>{JSON.parse(f);let h=16;const g=()=>{s="all";const y=document.querySelector("bma-app-head-sports");y&&y.setAttribute("data-selected-chip","all")};switch(m){case"WC.APP.HEAD_MID.HEAD_MID_LOBBY":t="lobby",g(),Q.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"FILTER_CHANGE"}));break;case"WC.APP.HEAD_MID.HEAD_MID_MY":if(!e.appSession?.session_user?.guid){console.warn("[app_events] No user GUID found, cannot filter tournaments"),typeof neodigmToast<"u"&&neodigmToast.q("Please sign in to view your tournaments","warning");return}t="my",g(),Q.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"FILTER_CHANGE"}));break;case"WC.APP.HEAD_MID.HEAD_MID_COMPLETED":t="completed",g(),Q.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"FILTER_CHANGE"}));break;case"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD":t="leaderboard",g(),n(),h=24,typeof neodigmToast<"u"&&neodigmToast.q("Feature not Available|in Beta","night");break;case"WC.APP.HEAD_MID.HEAD_MID_SQUAD":t="squad",g(),n(),h=24,typeof neodigmToast<"u"&&neodigmToast.q("Feature not Available|in Beta","night");break}h&&neodigmWired4Sound&&neodigmWired4Sound.sound(h).vibrate()}),Q.subscribe(e.hierTopics.ROUTE__HOME__USER_PROFILE,async(m,f)=>{JSON.parse(f);let h=16;switch(m){case"ROUTE.HOME.USER_PROFILE.INSTALL_PWA":const g=window.deferredPWAPrompt;if(!g){console.log("No install prompt available"),typeof neodigmToast<"u"&&neodigmToast.q("PWA install not available","warning");return}try{g.prompt();const{outcome:_}=await g.userChoice;_==="accepted"?(console.log("PWA installed successfully"),window.deferredPWAPrompt=null,typeof neodigmToast<"u"&&neodigmToast.q("App installed successfully!","success"),h=8,neodigmSodaPop&&neodigmSodaPop.close()):(console.log("PWA install declined"),typeof neodigmToast<"u"&&neodigmToast.q("Install cancelled","night"))}catch(_){console.error("PWA install error:",_),typeof neodigmToast<"u"&&neodigmToast.q("Install failed","danger")}break;case"ROUTE.HOME.USER_PROFILE.TOGGLE_THEME":(()=>{const S=e.appCLIFeatures.features.theme.state==="dark"?"light":"dark";e.setFeaturePersistPub("theme",{state:S});const E=document.getElementById("app");E&&E.setAttribute("data-sync-theme",S),document.body.setAttribute("data-sync-theme",S)})(),neodigmSodaPop&&neodigmSodaPop.close();break;case"ROUTE.HOME.USER_PROFILE.RESET_PASSWORD":Ia.push({name:"resethash_route"}),neodigmSodaPop&&neodigmSodaPop.close();break;case"ROUTE.HOME.USER_PROFILE.SIGNOUT":Ia.push({name:"signout_route"}),neodigmSodaPop&&neodigmSodaPop.close();break}h&&neodigmWired4Sound&&neodigmWired4Sound.sound(h).vibrate()});const u=(m,f)=>{const h=m.split(".").pop();console.log("[app_events] SODAPOP_PLAY subscriber - action:",h,"topic:",m),setTimeout(()=>{const g=document.querySelectorAll(".play-cntr .btn-info-sm"),_=document.querySelector(".play-cntr")?.closest("neodigm-sodapop");g.forEach(S=>{const E=S.dataset.publishRouteHome?.split(".").pop()||"";if(E===h){if(console.log("[app_events] Activating button:",E),S.classList.add("btn-info-sm--active"),S.classList.remove("btn-info-sm--inactive"),neodigmCarousel.nav({id:"caro-play",nav:E}),neodigmWired4Sound.sound(3),_){const k=h==="PLAY"?"hidden":"auto";_.style.overflow=k,console.log("[app_events] Set sodapop overflow to:",k)}}else S.classList.add("btn-info-sm--inactive"),S.classList.remove("btn-info-sm--active")})},100)};Q.subscribe("ROUTE.HOME.SODAPOP_PLAY.INFO",u),Q.subscribe("ROUTE.HOME.SODAPOP_PLAY.LEADERBOARD",u),Q.subscribe("ROUTE.HOME.SODAPOP_PLAY.PLAY",(m,f)=>{JSON.parse(f);const h=document.getElementById("btn-join__play--id");if(!h){console.warn("[app_events] PLAY button not found");return}const g=h.dataset.requiresJoin==="true",y=h.textContent.trim().toLowerCase();if(console.log("[app_events] PLAY button clicked - text:",y,"requiresJoin:",g),g&&y==="join"){const S=document.querySelector(".play-cntr")?.dataset?.currentTournGuid,E=ye();if(!S){console.error("[app_events] No tournament GUID found");return}console.log("[app_events] Executing JOIN for tournament:",S),Q.publish(E.hierTopics.WC__TOURN_ACTION,JSON.stringify({action:"JOIN",tournamentGuid:S,timestamp:Date.now()})),h.textContent="Play",h.dataset.requiresJoin="false",setTimeout(()=>{u(m),console.log("[app_events] JOIN triggered, advancing carousel to PLAY page")},500)}else u(m),console.log("[app_events] Advancing carousel to PLAY page")}),Q.subscribe(e.hierTopics.WC__APP__HEAD_TOP,(m,f)=>{JSON.parse(f);let h=10;switch(m){case"WC.APP.HEAD_TOP.USER_PROFILE":h=10,neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_my_profile"),setTimeout(()=>{neodigmCarousel.nav({id:"caro-user_profile",nav:"caro-page__badges"})},1200);break;case"WC.APP.HEAD_TOP.LOGO":const g=e.appSession.session_app.version,y=new Date().getFullYear();g&&neodigmToast&&neodigmToast.q(`${g} 2/23/2026, 2:42:04 PM|© ${y} Bet Max Action`,"night");break}h&&neodigmWired4Sound&&neodigmWired4Sound.sound(h).vibrate()});let p=null,b=null;Q.subscribe(e.hierTopics.WC__TOURN_ACTION,(m,f)=>{const h=JSON.parse(f);let g=0;switch(h?.action){case"JOIN":g=512;break;case"PLAY":g=8;break;case"INFO":g=8;break}if(g){p=h?.tournamentGuid,b=h?.action,console.log("[app_events] Storing pending tourn data:",p,b);const y=e.appSession?.session_user?.guid,_=h?.tournamentGuid;y&&_?Se.fetchBetSlips(y,_).then(S=>{if(S?.rows){const E={timestamp:Date.now(),source:"API",data:S.rows};e.pushcoreBetSlip(E),console.log("[app_events] Bet slips fetched:",S.rows.length,"items")}setTimeout(()=>{neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_play"),setTimeout(()=>{Q.publish(e.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,JSON.stringify(S))},3e3)},g)}).catch(S=>{console.error("[app_events] Error fetching bet slips:",S),setTimeout(()=>{neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_play")},g)}):setTimeout(()=>{neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_play")},g)}}),Q.subscribe(e.hierTopics.WC__TOURN_ACTION,(m,f)=>{const h=JSON.parse(f);let g=16;switch(h?.action){case"FOCUS":g=3;break;case"SPORT_ICON":g=10;break;case"JOIN":g=5;break;case"PLAY":g=16;break}g&&neodigmWired4Sound&&neodigmWired4Sound.sound(g).vibrate()}),Q.subscribe(e.hierTopics.WC__TOURN_ACTION,(m,f)=>{const h=JSON.parse(f);let g=0,y="night";switch(neodigmOpt&&neodigmOpt.EVENT_SOUNDS&&(neodigmOpt.EVENT_SOUNDS=!1),h?.tournamentStatus){case"UPCOMING":y="success";break;case"LOCKED":y="warning";break;case"COMPLETED":y="danger";break}switch(h?.action){case"SPORT_ICON":h?.sportTitle==h?.sportDescription?g=h?.sportTitle:g=h?.sportTitle+"|"+h?.sportDescription;break}g&&neodigmToast&&neodigmToast.q(g,y)}),Q.subscribe(e.hierTopics.WC__TOURN_ACTION,async(m,f)=>{const h=JSON.parse(f);if(h?.action==="JOIN"){const y=ye().appSession?.session_user?.guid;if(!y){console.error("No entity guid found in session"),typeof neodigmToast<"u"&&neodigmToast.q("Please sign in to join tournaments","warning");return}const _=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${h.tournamentGuid}"]`);_&&(_.setAttribute("data-bma-tourn-wait","true"),qs.shootConfetti());const S={acctEntityGuid:y,tournamentGuid:h.tournamentGuid};try{const E={method:"POST",body:JSON.stringify(S),headers:Se.genHeaders()};console.log("Posting to:",Se.API_baseURI+"/m5t/"+Se.API_ver+"/coreTournaments/join",S);const C=await(await fetch(Se.API_baseURI+"/m5t/"+Se.API_ver+"/coreTournaments/join",E)).json();if(console.log("Join response:",C),C.ok)typeof neodigmToast<"u"&&neodigmToast.q("Successfully joined tournament!","success"),setTimeout(()=>{const R=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${h.tournamentGuid}"]`);if(R){R.setAttribute("data-bma-tourn-wait","false");const x=R.getAttribute("data-bma-tourn-entities");if(x)try{const w=JSON.parse(x);w.guids.includes(y)||(w.guids.push(y),R.setAttribute("data-bma-tourn-entities",JSON.stringify(w)))}catch(w){console.error("Failed to parse entities:",w)}}},3e3);else{const R=C?.message||"Failed to join tournament";typeof neodigmToast<"u"&&neodigmToast.q(R,"danger");const x=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${h.tournamentGuid}"]`);x&&x.setAttribute("data-bma-tourn-wait","false")}}catch(E){console.error("Join tournament error:",E),typeof neodigmToast<"u"&&neodigmToast.q("Network error joining tournament","danger");const k=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${h.tournamentGuid}"]`);k&&k.setAttribute("data-bma-tourn-wait","false")}}}),Q.subscribe(e.hierTopics.ROUTE__HOME_ONMOUNT,async(m,f)=>{console.log("[app_events] ROUTE__HOME_ONMOUNT event received");const h=ye();try{const g=await Se.fetchTournaments();console.log("[app_events] Tournaments fetched:",g),g?.rows&&Array.isArray(g.rows)?(h.pushCoreTourn({timestamp:Date.now(),source:"API",data:g.rows}),console.log("[app_events] Pushed to coreTourn, length:",h.coreTourn.length),Q.publish(h.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now()}))):console.warn("[app_events] Invalid API response format:",g)}catch(g){console.error("[app_events] Error fetching tournaments:",g),typeof neodigmToast<"u"&&neodigmToast.q("Failed to load tournaments","danger")}}),Q.subscribe(e.hierTopics.ROUTE__HOME_HYDRATE,(m,f)=>{console.log("[app_events] ROUTE__HOME_HYDRATE event received");const h=ye();if(h.coreTourn.length===0){console.warn("[app_events] No tournament data in coreTourn array");return}const g=h.coreTourn[h.coreTourn.length-1],y=h.coreTourn.length>1?h.coreTourn[h.coreTourn.length-2]:null;console.log("[app_events] Hydrating with latest data:",g);const _=[];if(y){const C=g.data,R=y.data;C.forEach(x=>{const w=R.find(L=>L.guid===x.guid);w&&w.status!==x.status&&(console.log(`[app_events] Status changed for tournament ${x.guid}: ${w.status} -> ${x.status}`),_.push(x.guid))})}const S=h.appSession?.session_user?.guid,E=[...g.data].sort((C,R)=>{const x=C.status||C.class,w=R.status||R.class,L=C.entities?.guids||[],A=R.entities?.guids||[],G=L.includes(S),W=A.includes(S),se=(Me,Ee)=>{const Te=new Date(Me.status_time||0).getTime();return new Date(Ee.status_time||0).getTime()-Te},U=x==="LOCKED"&&G,Y=w==="LOCKED"&&W;if(U&&!Y)return-1;if(!U&&Y)return 1;if(U&&Y)return se(C,R);const F=x==="UPCOMING",z=w==="UPCOMING";if(F&&!z)return-1;if(!F&&z)return 1;if(F&&z)return se(C,R);const te=x==="COMPLETED"&&G,Z=w==="COMPLETED"&&W;if(te&&!Z)return-1;if(!te&&Z)return 1;if(te&&Z)return se(C,R);const ue=x==="COMPLETED"&&!G,ge=w==="COMPLETED"&&!W;return ue&&!ge?1:!ue&&ge?-1:se(C,R)}),k=Ve.categorizeTournaments(E,t,s,S);if(console.log(`[app_events] Categorized into ${k.length} categories for filter: ${t}/${s}`),window._homeRouteRenderCards&&typeof window._homeRouteRenderCards=="function"){if(window._homeRouteRenderCards(k,!0),setTimeout(()=>{n(),console.log("[app_events] Re-applied filter after hydration:",t)},100),_.length>0){const C=g.data;_.forEach(R=>{const x=C.find(w=>w.guid===R);if(x){const w=Math.floor(Math.random()*2e3)+1e3;setTimeout(()=>{Q.publish(h.hierTopics.CANVAS__HYDRATE__STATUS,JSON.stringify({guid:R,status:x.status,timestamp:Date.now()}))},w)}})}}else console.warn("[app_events] window._homeRouteRenderCards not available")}),Q.subscribe(e.hierTopics.SSE__CORE__TOURN_SYNC,(m,f)=>{console.log("[app_events] SSE__CORE__TOURN_SYNC event received:",f);const h=ye();try{const g=JSON.parse(f);console.log("[app_events] SSE tournament sync data:",g);const y=JSON.parse(g.msg);if(console.log("[app_events] Parsed tournaments array:",y),!Array.isArray(y)){console.warn("[app_events] SSE msg is not an array:",y);return}h.pushCoreTourn({timestamp:Date.now(),source:"SSE",data:y}),console.log("[app_events] Pushed SSE data to coreTourn, length:",h.coreTourn.length),Q.publish(h.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"SSE"}))}catch(g){console.error("[app_events] Error processing SSE tournament sync:",g)}}),setTimeout(function(){neodigmSodaPop&&neodigmMarquee&&neodigmEnchantedCTA&&(neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{},1e3),neodigmMetronome.init().pause(800),neodigmMarquee.init().pause(1200),neodigmEnchantedCTA.init(),neodigmCarousel.init()}),neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{NeodigmClaire.showCanv("neodigm-sodapop",.5).setTheme(["warning","success"]).initCanvOn("neodigm-sodapop").waxOn("neodigm-sodapop");const m=document.querySelector("#caption__my-profile");m&&(m.textContent="My Profile");const f=e.appSession?.session_user?.guid;if(console.log("[app_events] User GUID:",f),console.log("[app_events] coreTourn length:",e.coreTourn.length),!f||e.coreTourn.length===0){console.warn("[app_events] Missing user GUID or tournament data");return}const g=e.coreTourn[e.coreTourn.length-1].data;console.log("[app_events] Processing tournaments:",g.length);let y=0,_=0,S=0;g.forEach((E,k)=>{if(!E.tags||!Array.isArray(E.tags)){console.log(`[app_events] Tournament ${k} has no tags or tags not an array`);return}E.tags.forEach((C,R)=>{if(typeof C=="object"&&C!==null){let x=null;C.entity_guid===f&&C.badge?x=C.badge:C[f]&&(x=C[f]),x==="--badge__ribbon--gold"?y++:x==="--badge__ribbon--silver"?_++:x==="--badge__ribbon--bronze"&&S++}})}),setTimeout(()=>{let E=document.querySelectorAll(".badge-counter");if(E.length===0){const k=document.querySelector("neodigm-sodapop");k&&(E=k.querySelectorAll(".badge-counter"))}E.length>=3?(E[0].textContent=y,E[1].textContent=_,E[2].textContent=S,console.log("[app_events] Updated UI counters successfully")):console.warn("[app_events] Not enough counter elements found")},500)},1e3)},"sodapop_my_profile"),neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{const m=ye(),f=document.querySelector(".play-cntr");p&&(f.dataset.currentTournGuid=p),b&&(f.dataset.currentTournAction=b);const h=f?.dataset?.currentTournGuid,g=f?.dataset?.currentTournAction||"INFO";console.log("[app_events] sodapop_play opened - GUID:",h,"action:",g),window.initBetGridToggle&&window.initBetGridToggle(),(()=>{const L=document.getElementById("btn-join__play--id");if(!L||!h||m.coreTourn.length===0)return;const G=m.coreTourn[m.coreTourn.length-1].data.find(F=>F.guid===h);if(!G)return;const W=m.appSession?.session_user?.guid,se=G.entities?.guids?.includes(W),U=G.status,Y=g;L.style.display="none",!(U==="COMPLETED"||U==="LOCKED"&&!se)&&(L.style.display="",U==="UPCOMING"&&!se?Y==="INFO"?(L.textContent="Join",L.dataset.requiresJoin="true"):Y==="PLAY"&&(L.textContent="Play",L.dataset.requiresJoin="false"):(L.textContent="Play",L.dataset.requiresJoin="false"))})(),(()=>{if(!h||m.coreTourn.length===0)return;const A=m.coreTourn[m.coreTourn.length-1].data.find(z=>z.guid===h);if(!A)return;const G=document.getElementById("pop-play__caro-info-summary1--id");if(!G)return;const W=z=>{if(!z)return"N/A";const te=new Date(z);return isNaN(te.getTime())?"Invalid Date":te.toLocaleString(void 0,{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit",hour12:!0})},se=A.status?`info-row__value--${A.status.toLowerCase()}`:"",U=A.sports_allowed&&Array.isArray(A.sports_allowed)?A.sports_allowed.map(z=>{const te=z.key||z,Z=Kt.find(ge=>ge.key===te),ue=Z?Z.group:"default";return`<bma-sport-icon sport="${te}" data-sport-group="${ue}" style="width: 20px; height: 20px;"></bma-sport-icon>`}).join(" "):"N/A";G.innerHTML=`
                                <div class="info-section">
                                    <div class="info-section__title">Competition</div>
                                    <div class="info-row">
                                        <span class="info-row__label">Total Games</span>
                                        <span class="info-row__value">${A.matches_expanded?.length||0}</span>
                                    </div>
                                    <div class="info-row">
                                        <span class="info-row__label">Sports</span>
                                        <span class="info-row__value">${U}</span>
                                    </div>
                                </div>

                                <div class="info-section">
                                    <div class="info-section__title">Tournament Schedule</div>
                                    <div class="info-row">
                                        <span class="info-row__label">Start Time</span>
                                        <span class="info-row__value">${W(A.window_start_time)}</span>
                                    </div>
                                    <div class="info-row">
                                        <span class="info-row__label">End Time</span>
                                        <span class="info-row__value">${W(A.window_end_time)}</span>
                                    </div>
                                    <div class="info-row">
                                        <span class="info-row__label">Status</span>
                                        <span class="info-row__value ${se}">${A.status||"Unknown"}</span>
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
                                        <span class="info-row__value">TD$ ${A.tournament_dollars||0}</span>
                                    </div>
                                    <div class="info-row info-row--entrants">
                                        <span class="info-row__label">Entrants</span>
                                        <div class="info-row__value-with-bar">
                                            <span class="info-row__value">${A.entities?.guids?.length||0} / ${A.entities?.max||0}</span>
                                            <div class="info-progress-bar">
                                                <div class="info-progress-fill" style="width: ${((A.entities?.guids?.length||0)/(A.entities?.max||1)*100).toFixed(1)}%"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;const Y=document.getElementById("pop-play__caro-info-summary2--id");Y&&(Y.innerHTML="");const F=document.getElementById("pop-play__caro-info-list--id");F&&A.matches_expanded&&Array.isArray(A.matches_expanded)&&(F.innerHTML=`
                                    <div class="info-section">
                                        <div class="info-section__title">Matches</div>
                                    </div>
                                `+A.matches_expanded.map(z=>{const te=z.scoreboard_data?typeof z.scoreboard_data=="string"?z.scoreboard_data:JSON.stringify(z.scoreboard_data):"";return`
                                        <bma-match-status
                                            data-match-guid="${z.guid||z.odds_id||z.id||""}"
                                            data-match-title="${z.short_title||z.title||"Match"}"
                                            data-match-scheduled-at="${z.scheduled_at||""}"
                                            data-match-home-team="${z.home_team_id||"Home"}"
                                            data-match-away-team="${z.away_team_id||"Away"}"
                                            data-match-home-score="${z.home_team_score!==null&&z.home_team_score!==void 0?z.home_team_score:""}"
                                            data-match-away-score="${z.away_team_score!==null&&z.away_team_score!==void 0?z.away_team_score:""}"
                                            data-match-scoreboard="${te.replace(/"/g,"&quot;")}"
                                            data-match-sport-id="${z.sport_id||""}"
                                            data-sync-theme="dark"
                                        ></bma-match-status>
                                    `}).join(""))})(),setTimeout(()=>{const L=m.appSession?.session_user?.guid;h&&Se.fetchLeaderboard(h).then(A=>{const G=document.getElementById("pop-play__caro-leaderboard--id");if(!G)return;const W=A?.data||A?.rows;if(W&&W.length>0){const U=m.coreTourn[m.coreTourn.length-1]?.data.find(Z=>Z.guid===h);G.innerHTML=W.map((Z,ue)=>{let ge="";if(U?.tags&&Array.isArray(U.tags)){const Te=U.tags.find(M=>!!(typeof M=="object"&&M!==null&&(M.entity_guid===Z.user_guid&&M.badge&&M.badge.startsWith("--badge__ribbon--")||M[Z.user_guid]&&M[Z.user_guid].startsWith("--badge__ribbon--"))));if(Te){const M=Te.badge||Te[Z.user_guid];M==="--badge__ribbon--gold"?ge="badge-trophy--gold":M==="--badge__ribbon--silver"?ge="badge-trophy--silver":M==="--badge__ribbon--bronze"&&(ge="badge-trophy--bronze")}}const Me=Z.combined_betslips?typeof Z.combined_betslips=="string"?Z.combined_betslips:JSON.stringify(Z.combined_betslips):"[]";let Ee="[]";if(Z.combined_betslips&&U?.matches_expanded){const Te=typeof Z.combined_betslips=="string"?JSON.parse(Z.combined_betslips):Z.combined_betslips,M=[...new Set(Te.map(j=>j.coreMatches__guid||j.match_guid||j.odds_id).filter(Boolean))],J=U.matches_expanded.filter(j=>{const ee=j.guid||j.id||j.odds_id;return M.includes(ee)});Ee=JSON.stringify(J)}return`
                                                <bma-leaderboard-card
                                                    data-rank="${ue+1}"
                                                    data-username="${Z.username||"Unknown"}"
                                                    data-user-guid="${Z.user_guid||""}"
                                                    data-tournament-dollars="${Z.calculated_tournament_dollars||0}"
                                                    data-total-betslips="${Z.total_betslips||0}"
                                                    data-total-payout="${Z.total_payout||0}"
                                                    data-combined-betslips="${Me.replace(/"/g,"&quot;")}"
                                                    data-user-matches="${Ee.replace(/"/g,"&quot;")}"
                                                    data-badge-class="${ge}"
                                                    data-is-current-user="${Z.user_guid===L}"
                                                    data-sync-theme="dark"
                                                ></bma-leaderboard-card>
                                            `}).join("");const Y=W.findIndex(Z=>Z.user_guid===L),F=Y>=0?Y+1:W.length,z=U?.entities?.guids?.length||W.length,te=document.getElementById("dashboard-rank");te&&(te.innerHTML=`
                                                <span class="tourn-dashboard__rank-text">${F}/${z}</span>
                                            `)}else G.innerHTML=`
                                            <div class="leaderboard-empty">
                                                <p>No leaderboard data available yet.</p>
                                                <p class="leaderboard-empty__subtitle">Be the first to place a bet!</p>
                                            </div>
                                        `}).catch(A=>{console.error("[app_events] Error fetching leaderboard:",A);const G=document.getElementById("pop-play__caro-leaderboard--id");G&&(G.innerHTML=`
                                            <div class="leaderboard-empty">
                                                <p>Unable to load leaderboard data.</p>
                                            </div>
                                        `)})},600);let S=g==="PLAY"||g==="JOIN"?"PLAY":g;if(!h||m.coreTourn.length===0||m.coreTourn[m.coreTourn.length-1].data.find(G=>G.guid===h)?.status==="COMPLETED"&&(S="LEADERBOARD",console.log("[app_events] Tournament is COMPLETED, defaulting to LEADERBOARD")),S){const L=`ROUTE.HOME.SODAPOP_PLAY.${S}`;console.log("[app_events] Publishing initial topic:",L),Q.publish(L,JSON.stringify({tournamentGuid:h,timestamp:Date.now()}))}if(!h||m.coreTourn.length===0)return;const k=m.coreTourn[m.coreTourn.length-1].data.find(L=>L.guid===h);Ve.renderMatchCards(k);const C=document.querySelector("#pop-play__tourn-caption--id"),R=document.querySelector("#pop-play__tourn-tagline--id");C&&(C.textContent=k.caption),R&&(R.textContent=k.tagline),console.log("[Modal Debug] Updating dashboard for tournament:",k?.caption);const x=document.querySelector(".head-caption");console.log("[Modal Debug] Modal header found:",!!x),x&&console.log("[Modal Debug] Modal classes:",x.className),Ve.updateTournamentDashboard(k);const w=document.getElementById("dashboard-rank");if(w){const L=k.entities?.guids?.length||0;w.innerHTML=`
                                <span class="tourn-dashboard__rank-text">-/${L}</span>
                            `}},1e3)},"sodapop_play"))},3e3),setTimeout(function(){neodigmSodaPop&&NeodigmClaire&&neodigmSodaPop.setOnClose(function(){return!0})},4e3)}},Sg={__name:"App",setup(e){const t=yt(),s=ye();return setTimeout(function(){neodigmOpt.mvvLegit&&mvvLegit.setNavConroller((n=null)=>{neodigmOpt.N55_DEBUG_lOG&&neodigmToast.q(`Legit route: ${n}`,"primary"),t.push({name:n})}).setOnState((n=null)=>{n&&neodigmOpt.ROOT&&(neodigmOpt.ROOT.dataset.mvvLegit=n)}).init({BASE:Se.API_baseURI})},2e3),setTimeout(()=>{s.appCLIFeatures.features.sse.state&&En.establishSSE("https://machfive-bmacdev-rest.onrender.com/v5/sse?appid=BMACORE&sseid=user%40example.com&lastkey=123",s.appSession.session_user.guid,s,!0)},3e3),setTimeout(()=>{Ve.bindAppListeners(s)},3e3),t.beforeEach((n,a,r)=>{n.name=="splash_route"||n.name&&mvvLegit&&mvvLegit.isRouteAllowed(n.name)?r():r(!1)}),(n,a)=>(tt(),xr(jt(sl),null,{default:_a(({Component:r})=>[He(yd,{name:"slide-left"},{default:_a(()=>[(tt(),xr(Sc(r)))]),_:2},1024)]),_:1}))}};class Eg extends HTMLElement{constructor(){super(),this.clockInterval=null}connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this.startClock()}disconnectedCallback(){this.clockInterval&&clearInterval(this.clockInterval)}static get observedAttributes(){return["data-sync-theme","data-user-name"]}attributeChangedCallback(t,s,n){this.shadowRoot&&s!==n&&this.render()}startClock(){this.updateTime(),this.clockInterval=setInterval(()=>{this.updateTime()},24e3)}updateTime(){const t=this.shadowRoot?.querySelector(".status-time");if(t){const s=new Date,n=s.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0}),a=s.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});t.textContent=`${a} ${n}`}}handleLogoClick(t){t.preventDefault(),Q.publish("WC.APP.HEAD_TOP.LOGO",JSON.stringify({timestamp:Date.now()}))}handleProfileClick(t){t.preventDefault(),Q.publish("WC.APP.HEAD_TOP.USER_PROFILE",JSON.stringify({timestamp:Date.now()}))}render(){const n=(document.getElementById("app")?.getAttribute("data-sync-theme")||"dark")==="dark",a=this.getAttribute("data-user-name")||"Guest";this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: block;
          position: sticky;
          top: 0;
          z-index: 100;
          width: 100%;
          /* Premium dark gradient - darkest of the three headers */
          background: ${n?"#101010":`linear-gradient(
                180deg,
                rgba(252, 252, 252, 0.98) 0%,
                rgba(248, 248, 248, 0.95) 100%
              )`};
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
          color: ${n?"rgba(255, 255, 255, 0.85)":"rgba(0, 0, 0, 0.85)"};
          text-shadow: ${n?"0 1px 2px rgba(0, 0, 0, 0.3)":"none"};
        }

        .status-time {
          font-size: 0.8rem;
          font-weight: 400;
          color: ${n?"rgba(255, 255, 255, 0.5)":"rgba(0, 0, 0, 0.5)"};
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
          background-color: ${n?"rgba(32, 32, 32, 0.8)":"rgba(250, 250, 250, 0.8)"};
          background-image: var( --nav-icon__account_circle--${n?"dark":"vlight"} );
          background-size: 112% 112%;
          background-position: center;
          background-repeat: no-repeat;
          border: 2px solid ${n?"rgba(255, 215, 0, 0.2)":"rgba(255, 215, 0, 0.3)"};
          cursor: pointer;
          transition: all 0.3s ease;
          opacity: 0.8;
        }

        .profile-icon:hover {
          transform: scale(1.05);
          opacity: 1;
          border-color: rgba(255, 215, 0, 0.5);
          background-color: ${n?"rgba(255, 215, 0, 0.1)":"rgba(255, 215, 0, 0.05)"};
          box-shadow: 0 0 12px rgba(255, 215, 0, 0.3);
        }

        /* Responsive adjustments */
        @media (orientation: portrait), (max-width: 768px) {
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
          <div class="status-username">${a}</div>
          <div class="status-time">Loading...</div>
        </div>

        <div class="profile-section">
          <div class="profile-icon" id="profileIcon" role="button" tabindex="0" aria-label="User Profile"></div>
        </div>
      </div>
    `;const r=this.shadowRoot.querySelector("#logoLink"),o=this.shadowRoot.querySelector("#profileIcon");r&&r.addEventListener("click",i=>this.handleLogoClick(i)),o&&(o.addEventListener("click",i=>this.handleProfileClick(i)),o.addEventListener("keypress",i=>{(i.key==="Enter"||i.key===" ")&&this.handleProfileClick(i)})),this.updateTime()}}customElements.define("bma-app-head-top",Eg);class wg extends HTMLElement{constructor(){super(),this.selectedTab="head_mid_lobby"}connectedCallback(){this.attachShadow({mode:"open"}),this.render()}static get observedAttributes(){return["data-sync-theme","data-selected-tab"]}attributeChangedCallback(t,s,n){this.shadowRoot&&s!==n&&(t==="data-selected-tab"&&(this.selectedTab=n||"head_mid_lobby"),this.render())}handleTabClick(t,s){this.selectedTab=t,this.setAttribute("data-selected-tab",t),Q.publish(s,JSON.stringify({tab:t,timestamp:Date.now()})),this.render()}render(){const n=(document.getElementById("app")?.getAttribute("data-sync-theme")||"dark")==="dark",a=[{name:"head_mid_lobby",caption:"Tournament Lobby",mobileCaption:"Lobby",topic:"WC.APP.HEAD_MID.HEAD_MID_LOBBY"},{name:"head_mid_my",caption:"My Tournaments",mobileCaption:"My Tourneys",topic:"WC.APP.HEAD_MID.HEAD_MID_MY"},{name:"head_mid_completed",caption:"Completed Tournaments",mobileCaption:"Completed Tourneys",topic:"WC.APP.HEAD_MID.HEAD_MID_COMPLETED"},{name:"head_mid_leaderboard",caption:"Leaderboard Ranking",mobileCaption:"Leaderboard",topic:"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD"},{name:"head_mid_squad",caption:"My Squads",mobileCaption:"Squads",topic:"WC.APP.HEAD_MID.HEAD_MID_SQUAD"}],r=o=>`
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
          /* Darker recessed background similar to sports bar but slightly lighter */
          background: ${n?"#242424":`linear-gradient(
                180deg,
                rgba(250, 250, 250, 0.95) 0%,
                rgba(245, 245, 245, 0.9) 100%
              )`};
          /* Simple dark border without glow */
          border-bottom: 1px solid rgba(0, 0, 0, 0.3);
          /* Subtle depth shadows */
          box-shadow:
            inset 0 1px 2px rgba(0, 0, 0, 0.2),
            0 2px 6px rgba(0, 0, 0, 0.1);
        }

        /* Hide on mobile (≤768px) */
        @media (orientation: portrait), (max-width: 768px) {
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
          color: ${n?"rgba(255, 255, 255, 0.5)":"rgba(0, 0, 0, 0.5)"};
          border-bottom-color: transparent;
          position: relative;
        }

        /* Unselected hover state - subtle highlight */
        .tab-unselected:hover {
          color: ${n?"rgba(255, 255, 255, 0.8)":"rgba(0, 0, 0, 0.75)"};
          background: ${n?"linear-gradient(180deg, transparent 0%, rgba(255, 215, 0, 0.05) 100%)":"linear-gradient(180deg, transparent 0%, rgba(255, 215, 0, 0.03) 100%)"};
          transform: translateY(-1px);
          transition: all 0.3s ease;
        }

        /* Selected state - gold accent matching primary nav importance */
        .tab-selected {
          color: ${n?"#FFD700":"#B28F09"};
          background: ${n?"linear-gradient(180deg, rgba(255, 215, 0, 0.1) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255, 215, 0, 0.08) 0%, transparent 100%)"};
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
        ${a.map(o=>r(o)).join("")}
      </div>
    `,a.forEach(o=>{const i=this.shadowRoot.querySelector(`[data-tab="${o.name}"]`);i&&(i.addEventListener("click",()=>this.handleTabClick(o.name,o.topic)),i.addEventListener("keypress",l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),this.handleTabClick(o.name,o.topic))}))})}}customElements.define("bma-app-head-mid",wg);class xg extends HTMLElement{constructor(){super(),this.selectedChip="all",this.savedScrollPosition=0}connectedCallback(){this.attachShadow({mode:"open"}),this.render()}static get observedAttributes(){return["data-sync-theme","data-selected-chip"]}attributeChangedCallback(t,s,n){this.shadowRoot&&s!==n&&(t==="data-selected-chip"&&(this.selectedChip=n||"all"),this.render())}handleChipClick(t,s){const n=this.shadowRoot.querySelector(".chips-container");n&&(this.savedScrollPosition=n.scrollLeft),this.selectedChip=t,this.setAttribute("data-selected-chip",t),Q.publish("WC.APP.HEAD_SPORTS",JSON.stringify({key:t,group:s,timestamp:Date.now()})),this.render()}scrollToPrev(){const t=this.shadowRoot.querySelector(".chips-container");t&&(t.scrollBy({left:-256,behavior:"smooth"}),Q.publish("WC.APP.HEAD_SPORTS.PREV",JSON.stringify({timestamp:Date.now()})))}scrollToNext(){const t=this.shadowRoot.querySelector(".chips-container");t&&(t.scrollBy({left:256,behavior:"smooth"}),Q.publish("WC.APP.HEAD_SPORTS.NEXT",JSON.stringify({timestamp:Date.now()})))}initDragScroll(){const t=this.shadowRoot.querySelector(".chips-container");if(!t)return;let s=!1,n,a;t.addEventListener("mousedown",r=>{s=!0,t.style.cursor="grabbing",n=r.pageX-t.offsetLeft,a=t.scrollLeft,Q.publish("WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START",JSON.stringify({action:"start",scrollPosition:a,timestamp:Date.now()}))}),t.addEventListener("mouseleave",()=>{s=!1,t.style.cursor="grab"}),t.addEventListener("mouseup",()=>{s=!1,t.style.cursor="grab"}),t.addEventListener("mousemove",r=>{if(!s)return;r.preventDefault();const i=(r.pageX-t.offsetLeft-n)*2;t.scrollLeft=a-i})}render(){const n=(document.getElementById("app")?.getAttribute("data-sync-theme")||"dark")==="dark",o=(ye().appMeta?.sports||[]).filter(m=>m.active===!0),i=["NFL","NBA","NHL","EPL","MLB","NCAAF","MMA","Boxing"],l=[...o].sort((m,f)=>{const h=m.title||m.description||"",g=f.title||f.description||"",y=i.indexOf(h),_=i.indexOf(g);return y!==-1&&_!==-1?y-_:y!==-1?-1:_!==-1?1:h.toLowerCase().localeCompare(g.toLowerCase())}),c=[{key:"all",group:"All",title:"HOME",description:"All Sports"},{key:"multi",group:"Multi",title:"Multiple Sport",description:"Multi-Sport Tournaments"},...l],d=m=>{const f=this.selectedChip===m.key,h=m.key==="all";m.key;let g="";return h||(g=`<bma-sport-icon sport="${m.key}" data-sport-group="${m.group}"></bma-sport-icon>`),`
        <div
          class="sport-chip ${f?"chip-selected":"chip-unselected"}"
          data-chip="${m.key}"
          role="button"
          tabindex="0"
          aria-label="${m.description||m.title}"
        >
          ${g}
          <span class="chip-title">${m.title||m.group}</span>
        </div>
      `};this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: block;
          width: 100%;
          /* Darker, recessed appearance - distinct from header above */
          background: ${n?"#101010":`linear-gradient(
                180deg,
                rgba(250, 250, 250, 0.95) 0%,
                rgba(240, 240, 240, 0.9) 100%
              )`};
          border-top: 1px solid ${n?"rgba(0, 0, 0, 0.8)":"rgba(0, 0, 0, 0.1)"};
          border-bottom: 2px solid ${n?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"};
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
          background-color: ${n?"rgba(32, 32, 32, 0.8)":"rgba(255, 255, 255, 0.8)"};
          background-size: 112% 112%;
          background-position: center;
          background-repeat: no-repeat;
          border: 1px solid ${n?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"};
          cursor: pointer;
          transition: all 0.2s ease;
          opacity: 0.6;
        }

        .nav-icon:hover {
          opacity: 1;
          background-color: ${n?"rgba(0, 230, 118, 0.1)":"rgba(0, 230, 118, 0.05)"};
          border-color: ${n?"rgba(0, 230, 118, 0.3)":"rgba(0, 230, 118, 0.2)"};
          transform: scale(1.05);
        }
        .nav-icon.nav-icon__prev { background-image: var( --nav-icon__chevron_prev--${n?"dark":"vlight"} ); }
        .nav-icon.nav-icon__next { background-image: var( --nav-icon__chevron_prev--${n?"dark":"vlight"} ); transform: rotate(180deg); }


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
          color: ${n?"rgba(255, 255, 255, 0.5)":"rgba(0, 0, 0, 0.6)"};
          background: ${n?"rgba(32, 32, 32, 0.6)":"rgba(255, 255, 255, 0.6)"};
          border: 1px solid ${n?"rgba(255, 255, 255, 0.08)":"rgba(0, 0, 0, 0.08)"};
          border-bottom: 2px solid transparent;
        }

        .chip-unselected:hover {
          color: ${n?"rgba(255, 255, 255, 0.85)":"rgba(0, 0, 0, 0.85)"};
          background: ${n?"rgba(46, 139, 87, 0.15)":"rgba(46, 139, 87, 0.1)"};
          border-bottom-color: ${n?"rgba(0, 230, 118, 0.3)":"rgba(0, 230, 118, 0.4)"};
          transform: translateY(-1px);
        }

        .chip-selected {
          color: ${n?"#00E676":"#00C853"};
          background: ${n?"rgba(0, 230, 118, 0.1)":"rgba(0, 230, 118, 0.08)"};
          border: 1px solid ${n?"rgba(0, 230, 118, 0.3)":"rgba(0, 230, 118, 0.25)"};
          border-bottom: 1px solid ${n?"rgba(0, 230, 118, 0.3)":"rgba(0, 230, 118, 0.25)"};
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
            ${c.map(m=>d(m)).join("")}
          </div>
        </div>

        <aside class="nav-icon nav-next nav-icon__next" id="navNext" role="button" tabindex="0" aria-label="Scroll right"></aside>
      </div>
    `,c.forEach(m=>{const f=this.shadowRoot.querySelector(`[data-chip="${m.key}"]`);f&&f.addEventListener("click",()=>this.handleChipClick(m.key,m.group))});const u=this.shadowRoot.querySelector("#navPrev"),p=this.shadowRoot.querySelector("#navNext");u&&u.addEventListener("click",()=>this.scrollToPrev()),p&&p.addEventListener("click",()=>this.scrollToNext()),this.initDragScroll();const b=this.shadowRoot.querySelector(".chips-container");b&&this.savedScrollPosition>0&&(b.scrollLeft=this.savedScrollPosition)}}customElements.define("bma-app-head-sports",xg);class Ag extends HTMLElement{constructor(){super(),this.selectedItem="foot_all_sports"}connectedCallback(){this.attachShadow({mode:"open"}),this.render()}static get observedAttributes(){return["data-sync-theme","data-selected-item"]}attributeChangedCallback(t,s,n){this.shadowRoot&&s!==n&&(t==="data-selected-item"&&(this.selectedItem=n||"foot_all_sports"),this.render())}handleItemClick(t,s){this.selectedItem=t,this.setAttribute("data-selected-item",t),Q.publish(s,JSON.stringify({item:t,timestamp:Date.now()})),this.render()}render(){const n=(document.getElementById("app")?.getAttribute("data-sync-theme")||"dark")==="dark",a=[{name:"foot_all_sports",caption:"Lobby",iconVar:"--nav-icon__sports--",topic:"WC.APP.FOOT.ALL_SPORTS"},{name:"foot_my_tourneys",caption:"My Tourneys",iconVar:"--nav-icon__trophy--",topic:"WC.APP.FOOT.MY_TOURNEYS"},{name:"foot_leaderboard",caption:"Leaderboard",iconVar:"--nav-icon__leaderboard--",topic:"WC.APP.FOOT.LEADERBOARD"},{name:"foot_my_account",caption:"My Profile",iconVar:"--nav-icon__my_profile_circle--",topic:"WC.APP.FOOT.MY_PROFILE"}],r=o=>`
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
          background: ${n?"#101010":"rgba(245, 245, 245, 0.97)"};
          border-top: 1px solid var(--app-core-color--gray-4__dark--brand, #323232);
          box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.2);
        }

        /* Show only on mobile (≤768px) */
        @media (orientation: portrait), (max-width: 768px) {
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
          background-image: var(--nav-icon__trophy--${n?"dark":"light"});
        }

        .nav-icon[data-icon-var="--nav-icon__trophy--"] {
          background-image: var(--nav-icon__person_celebrate--${n?"dark":"light"});
        }

        .nav-icon[data-icon-var="--nav-icon__leaderboard--"] {
          background-image: var(--nav-icon__social_leaderboard--${n?"dark":"light"});
        }

        .nav-icon[data-icon-var="--nav-icon__my_profile_circle--"] {
          background-image: var(--nav-icon__account_circle--${n?"dark":"light"});
        }

        .nav-caption {
          font-size: 0.7rem;
          font-weight: 600;
          text-align: center;
          line-height: 1.2;
        }

        /* Unselected state */
        .nav-unselected {
          color: ${n?"rgba(255, 255, 255, 0.6)":"rgba(0, 0, 0, 0.6)"};
          border-top-color: transparent;
        }

        /* Selected state */
        .nav-selected {
          color: ${n?"#FFFFFF":"#000000"};
          border-top-color: ${n?"rgba(255, 255, 255, 0.8)":"rgba(0, 0, 0, 0.8)"};
        }

        .nav-selected .nav-icon {
          filter: brightness(120%);
        }
      </style>

      <div class="foot-container">
        ${a.map(o=>r(o)).join("")}
      </div>
    `,a.forEach(o=>{const i=this.shadowRoot.querySelector(`[data-item="${o.name}"]`);i&&(i.addEventListener("click",()=>this.handleItemClick(o.name,o.topic)),i.addEventListener("keypress",l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),this.handleItemClick(o.name,o.topic))}))})}}customElements.define("bma-app-foot",Ag);class Pg extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}static get observedAttributes(){return["data-corebetslip"]}attributeChangedCallback(t,s,n){s!==n&&this.render()}get betSlipData(){const t=this.getAttribute("data-corebetslip");if(!t)return null;try{return JSON.parse(t)}catch(s){return console.error("[bma-bet-existing] Failed to parse data-corebetslip:",s),null}}render(){const t=this.betSlipData;if(!t){this.shadowRoot.innerHTML="<div>Invalid bet data</div>";return}const s=t.bet||[];if(s.length===0){this.shadowRoot.innerHTML="<div>No bet data</div>";return}const n=s[0],a=n.short_title||"Match Info N/A",o=Object.keys(n).filter(y=>y!=="short_title")[0]||"Unknown Team",i=n[o],l=i.odds||"N/A",c=i.type||"N/A",d=parseFloat(i.stake||0).toFixed(2),u=parseFloat(i.payout||0).toFixed(2),p=i.reconciled!==!1,b=p&&parseFloat(u)>parseFloat(d),m=p&&parseFloat(u)<=parseFloat(d);let f="";p?b?f="win":m&&(f="loss"):f="unreconciled";const h=t.status_time?qs.formatDateLocal(t.status_time):"";let g=o;if(c==="spread"&&i.point){const y=parseFloat(i.point)>0?`+${i.point}`:i.point;g=`${o} ${y}`}else c==="total"&&i.point&&(g=`${i.team==="over"?"Over":"Under"} ${i.point}`);this.shadowRoot.innerHTML=`
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
          border-color: rgba(247, 198, 13, 0.1);
        }

        .bet-existing-card.win {
          border-color: rgba(20, 185, 99, 0.1);
        }

        .bet-existing-card.loss {
          border-color: rgba(185, 20, 24, 0.1);
        }

        /* Stake background color states */
        .bet-existing-card.unreconciled .content_stake_text {
          background: rgba(247, 198, 13, 0.1);
        }

        .bet-existing-card.win .content_stake_text {
          background: rgba(20, 185, 99, 0.1);
        }

        .bet-existing-card.loss .content_stake_text {
          background: rgba(185, 20, 24, 0.1);
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

        @media (orientation: portrait), (max-width: 768px) {
          .grid_content {
            grid-template-columns: 40% auto 120px;
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

      <div class="bet-existing-card ${f}">
        <div class="grid_header">
          <div class="match_desc">${a}</div>
          <div class="match_date">${h}</div>
        </div>
        <div class="grid_content">
          <!-- Row 1 -->
          <div class="content_team_points">${g}</div>
          <div class="content_odds">${l}</div>
          <div class="content_stake_text">${d}</div>

          <!-- Row 2 -->
          <div class="content_type">${c.toUpperCase()}</div>
          <div></div>
          <div></div>

          <!-- Row 3 (payout only) -->
          <div></div>
          <div></div>
          <div class="content_payout ${p?"":"unreconciled"}">Payout: ${u}</div>
        </div>
      </div>
    `}}customElements.define("bma-bet-existing",Pg);const wo=`
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
    data-n55-sodapop-size="xlarge" data-n55-sodapop-fullscreen="false"
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
    <!-- <br>  -->
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
        <section data-n55-carousel-page-name="INFO"  QQQQdata-n55-carousel-height="auto"
        data-n55-cloak="true"
        style="QQQQmax-width: 96vw;">
            <div id="pop-play__caro-info-summary2--id" class=""></div>
            <div id="pop-play__caro-info-summary1--id" class=""></div>
            <div id="pop-play__caro-info-list--id" class=""></div>
        </section>
        <section data-n55-carousel-page-name="PLAY"  QQQQdata-n55-carousel-height="viewport"
        data-n55-cloak="true">
          <article class="bet-grid">
            <section class="bet-grid__select">
              <article class="select-grid"></article>
            </section>
            <aside class="bet-grid__slip" data-active-bet-tab="MYBETS">
              <div class="bet-grid__toggle-container">
                <button id="bet-grid-toggle" class="bet-grid__toggle" aria-label="Toggle sections">
                  <span class="bet-grid__toggle-text">Open Bet Slip</span>
                </button>
              </div>
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
        <section data-n55-carousel-page-name="LEADERBOARD"   QQQQdata-n55-carousel-height="auto"
        data-n55-cloak="true">
          <div id="pop-play__caro-leaderboard--id"></div>
        </section>
    </section>
</neodigm-carousel>

      <br>
    </article>
  </template>

`;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{document.body.insertAdjacentHTML("beforeend",wo)}):document.body.insertAdjacentHTML("beforeend",wo);window.deferredPWAPrompt=null;window.addEventListener("beforeinstallprompt",e=>{console.log("[Global] beforeinstallprompt event fired"),e.preventDefault(),window.deferredPWAPrompt=e,window.dispatchEvent(new CustomEvent("pwa-installable"))});window.addEventListener("appinstalled",()=>{console.log("[Global] appinstalled event fired"),window.deferredPWAPrompt=null,window.dispatchEvent(new CustomEvent("pwa-installed"))});const Un=Kd(Sg);Un.config.devtools=!1;Un.use(Wd());Un.use(Ia);Un.mount("#app");if("serviceWorker"in navigator){let e=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{e||(e=!0,window.neodigmToast&&window.neodigmToast.q("App updated! Reloading...","success"),setTimeout(()=>{window.location.reload()},1e3))}),document.addEventListener("visibilitychange",()=>{document.hidden||navigator.serviceWorker.getRegistration().then(t=>{t?.update()})})}window.addEventListener("resize",e=>{window.requestAnimationFrame(()=>{neodigmMetronome.subscribe(()=>{neodigmMetronome.unsubscribe(303),neodigmCarousel&&[...document.querySelectorAll("neodigm-carousel")].forEach(s=>{neodigmCarousel.init().nav({id:s.id,nav:"resize"},!1)})},303)})});
