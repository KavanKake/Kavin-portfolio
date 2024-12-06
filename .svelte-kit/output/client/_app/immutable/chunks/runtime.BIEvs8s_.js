var Tn=Array.isArray,mn=Array.from,An=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,Bt=Object.getOwnPropertyDescriptors,Sn=Object.prototype,On=Array.prototype,Ht=Object.getPrototypeOf;function Rn(t){return typeof t=="function"}const gn=()=>{};function xn(t){return t()}function Ut(t){for(var n=0;n<t.length;n++)t[n]()}const m=2,_t=4,M=8,tt=16,E=32,$=64,x=128,U=256,p=512,O=1024,Y=2048,b=4096,j=8192,Vt=16384,ct=32768,Dn=65536,Gt=1<<18,vt=1<<19,ut=Symbol("$state"),kn=Symbol("");function pt(t){return t===this.v}function Kt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function ht(t){return!Kt(t,this.v)}function $t(t){throw new Error("effect_in_teardown")}function Zt(){throw new Error("effect_in_unowned_derived")}function Wt(t){throw new Error("effect_orphan")}function zt(){throw new Error("effect_update_depth_exceeded")}function In(){throw new Error("hydration_failed")}function Nn(t){throw new Error("props_invalid_value")}function bn(){throw new Error("state_descriptors_fixed")}function Pn(){throw new Error("state_prototype_fixed")}function Jt(){throw new Error("state_unsafe_local_read")}function Qt(){throw new Error("state_unsafe_mutation")}function nt(t){return{f:0,v:t,reactions:null,equals:pt,version:0}}function Cn(t){return Xt(nt(t))}function Fn(t,n=!1){var e;const r=nt(t);return n||(r.equals=ht),f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function Xt(t){return a!==null&&a.f&m&&(y===null?vn([t]):y.push(t)),t}function qn(t,n){return a!==null&&st()&&a.f&(m|tt)&&(y===null||!y.includes(t))&&Qt(),tn(t,n)}function tn(t,n){return t.equals(n)||(t.v=n,t.version=Ft(),dt(t,O),st()&&u!==null&&u.f&p&&!(u.f&E)&&(_!==null&&_.includes(t)?(w(u,O),W(u)):S===null?pn([t]):S.push(t))),n}function dt(t,n){var r=t.reactions;if(r!==null)for(var e=st(),s=r.length,l=0;l<s;l++){var o=r[l],i=o.f;i&O||!e&&o===u||(w(o,n),i&(p|x)&&(i&m?dt(o,Y):W(o)))}}const Ln=1,Mn=2,Yn=4,jn=8,Bn=16,Hn=4,Un=1,Vn=2,nn="[",rn="[!",en="]",yt={},Gn=Symbol();function Et(t){console.warn("hydration_mismatch")}let g=!1;function Kn(t){g=t}let d;function F(t){if(t===null)throw Et(),yt;return d=t}function $n(){return F(D(d))}function Zn(t){if(g){if(D(d)!==null)throw Et(),yt;d=t}}function Wn(t=1){if(g){for(var n=t,r=d;n--;)r=D(r);d=r}}function zn(){for(var t=0,n=d;;){if(n.nodeType===8){var r=n.data;if(r===en){if(t===0)return n;t-=1}else(r===nn||r===rn)&&(t+=1)}var e=D(n);n.remove(),n=e}}var at,wt,Tt;function Jn(){if(at===void 0){at=window;var t=Element.prototype,n=Node.prototype;wt=ot(n,"firstChild").get,Tt=ot(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function z(t=""){return document.createTextNode(t)}function J(t){return wt.call(t)}function D(t){return Tt.call(t)}function Qn(t,n){if(!g)return J(t);var r=J(d);if(r===null)r=d.appendChild(z());else if(n&&r.nodeType!==3){var e=z();return r==null||r.before(e),F(e),e}return F(r),r}function Xn(t,n){if(!g){var r=J(t);return r instanceof Comment&&r.data===""?D(r):r}return d}function tr(t,n=1,r=!1){let e=g?d:t;for(;n--;)e=D(e);if(!g)return e;var s=e.nodeType;if(r&&s!==3){var l=z();return e==null||e.before(l),F(l),l}return F(e),e}function nr(t){t.textContent=""}function sn(t){var n=m|O;u===null?n|=x:u.f|=vt;const r={children:null,ctx:f,deps:null,equals:pt,f:n,fn:t,reactions:null,v:null,version:0,parent:u};if(a!==null&&a.f&m){var e=a;(e.children??(e.children=[])).push(r)}return r}function rr(t){const n=sn(t);return n.equals=ht,n}function mt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&m?rt(e):C(e)}}}function At(t){var n,r=u;K(t.parent);try{mt(t),n=qt(t)}finally{K(r)}return n}function St(t){var n=At(t),r=(k||t.f&x)&&t.deps!==null?Y:p;w(t,r),t.equals(n)||(t.v=n,t.version=Ft())}function rt(t){mt(t),L(t,0),w(t,j),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Ot(t){u===null&&a===null&&Wt(),a!==null&&a.f&x&&Zt(),et&&$t()}function ln(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function P(t,n,r,e=!0){var s=(t&$)!==0,l=u,o={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|O,first:null,fn:n,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var i=I;try{it(!0),Z(o),o.f|=Vt}catch(c){throw C(o),c}finally{it(i)}}else n!==null&&W(o);var T=r&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null&&(o.f&vt)===0;if(!T&&!s&&e&&(l!==null&&ln(o,l),a!==null&&a.f&m)){var A=a;(A.children??(A.children=[])).push(o)}return o}function er(t){const n=P(M,null,!1);return w(n,p),n.teardown=t,n}function sr(t){Ot();var n=u!==null&&(u.f&E)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:a})}else{var e=Rt(t);return e}}function lr(t){return Ot(),on(t)}function or(t){const n=P($,t,!0);return()=>{C(n)}}function Rt(t){return P(_t,t,!1)}function on(t){return P(M,t,!0)}function ur(t){return un(t)}function un(t,n=0){return P(M|tt|n,t,!0)}function ar(t,n=!0){return P(M|E,t,!0,n)}function gt(t){var n=t.teardown;if(n!==null){const r=et,e=a;ft(!0),G(null);try{n.call(null)}finally{ft(r),G(e)}}}function xt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)rt(n[r])}}function Dt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;C(r,n),r=e}}function an(t){for(var n=t.first;n!==null;){var r=n.next;n.f&E||C(n),n=r}}function C(t,n=!0){var r=!1;if((n||t.f&Gt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var l=e===s?null:D(e);e.remove(),e=l}r=!0}Dt(t,n&&!r),xt(t),L(t,0),w(t,j);var o=t.transitions;if(o!==null)for(const T of o)T.stop();gt(t);var i=t.parent;i!==null&&i.first!==null&&kt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function kt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function ir(t,n){var r=[];It(t,r,!0),fn(r,()=>{C(t),n&&n()})}function fn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function It(t,n,r){if(!(t.f&b)){if(t.f^=b,t.transitions!==null)for(const o of t.transitions)(o.is_global||r)&&n.push(o);for(var e=t.first;e!==null;){var s=e.next,l=(e.f&ct)!==0||(e.f&E)!==0;It(e,n,l?r:!1),e=s}}}function fr(t){Nt(t,!0)}function Nt(t,n){if(t.f&b){B(t)&&Z(t),t.f^=b;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&ct)!==0||(r.f&E)!==0;Nt(r,s?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}let V=!1,Q=[];function bt(){V=!1;const t=Q.slice();Q=[],Ut(t)}function _r(t){V||(V=!0,queueMicrotask(bt)),Q.push(t)}function _n(){V&&bt()}const Pt=0,cn=1;let H=Pt,q=!1,I=!1,et=!1;function it(t){I=t}function ft(t){et=t}let R=[],N=0;let a=null;function G(t){a=t}let u=null;function K(t){u=t}let y=null;function vn(t){y=t}let _=null,h=0,S=null;function pn(t){S=t}let Ct=0,k=!1,f=null;function Ft(){return++Ct}function st(){return f!==null&&f.l===null}function B(t){var o,i;var n=t.f;if(n&O)return!0;if(n&Y){var r=t.deps,e=(n&x)!==0;if(r!==null){var s;if(n&U){for(s=0;s<r.length;s++)((o=r[s]).reactions??(o.reactions=[])).push(t);t.f^=U}for(s=0;s<r.length;s++){var l=r[s];if(B(l)&&St(l),e&&u!==null&&!k&&!((i=l==null?void 0:l.reactions)!=null&&i.includes(t))&&(l.reactions??(l.reactions=[])).push(t),l.version>t.version)return!0}}e||w(t,p)}return!1}function hn(t,n,r){throw t}function qt(t){var lt;var n=_,r=h,e=S,s=a,l=k,o=y,i=f,T=t.f;_=null,h=0,S=null,a=T&(E|$)?null:t,k=!I&&(T&x)!==0,y=null,f=t.ctx;try{var A=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(L(t,h),c!==null&&h>0)for(c.length=h+_.length,v=0;v<_.length;v++)c[h+v]=_[v];else t.deps=c=_;if(!k)for(v=h;v<c.length;v++)((lt=c[v]).reactions??(lt.reactions=[])).push(t)}else c!==null&&h<c.length&&(L(t,h),c.length=h);return A}finally{_=n,h=r,S=e,a=s,k=l,y=o,f=i}}function dn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&m&&(_===null||!_.includes(n))&&(w(n,Y),n.f&(x|U)||(n.f^=U),L(n,0))}function L(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)dn(t,r[e])}function Z(t){var n=t.f;if(!(n&j)){w(t,p);var r=u;u=t;try{n&tt?an(t):Dt(t),xt(t),gt(t);var e=qt(t);t.teardown=typeof e=="function"?e:null,t.version=Ct}catch(s){hn(s)}finally{u=r}}}function Lt(){N>1e3&&(N=0,zt()),N++}function Mt(t){var n=t.length;if(n!==0){Lt();var r=I;I=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var l=[];Yt(s,l),yn(l)}}finally{I=r}}}function yn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(j|b))&&B(e)&&(Z(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?kt(e):e.fn=null))}}function En(){if(q=!1,N>1001)return;const t=R;R=[],Mt(t),q||(N=0)}function W(t){H===Pt&&(q||(q=!0,queueMicrotask(En)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&($|E)){if(!(r&p))return;n.f^=p}}R.push(n)}function Yt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,l=(s&E)!==0,o=l&&(s&p)!==0;if(!o&&!(s&b))if(s&M){l?r.f^=p:B(r)&&Z(r);var i=r.first;if(i!==null){r=i;continue}}else s&_t&&e.push(r);var T=r.next;if(T===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var A=v.next;if(A!==null){r=A;continue t}v=v.parent}}r=T}for(var c=0;c<e.length;c++)i=e[c],n.push(i),Yt(i,n)}function jt(t){var n=H,r=R;try{Lt();const s=[];H=cn,R=s,q=!1,Mt(r);var e=t==null?void 0:t();return _n(),(R.length>0||s.length>0)&&jt(),N=0,e}finally{H=n,R=r}}async function cr(){await Promise.resolve(),jt()}function vr(t){var i;var n=t.f,r=(n&m)!==0;if(r&&n&j){var e=At(t);return rt(t),e}if(a!==null){y!==null&&y.includes(t)&&Jt();var s=a.deps;_===null&&s!==null&&s[h]===t?h++:_===null?_=[t]:_.push(t),S!==null&&u!==null&&u.f&p&&!(u.f&E)&&S.includes(t)&&(w(u,O),W(u))}else if(r&&t.deps===null){var l=t,o=l.parent;o!==null&&!((i=o.deriveds)!=null&&i.includes(l))&&(o.deriveds??(o.deriveds=[])).push(l)}return r&&(l=t,B(l)&&St(l)),t.v}function pr(t){const n=a;try{return a=null,t()}finally{a=n}}const wn=~(O|Y|p);function w(t,n){t.f=t.f&wn|n}function hr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},n||(f.l={s:null,u:null,r1:[],r2:nt(!1)})}function dr(t){const n=f;if(n!==null){const o=n.e;if(o!==null){var r=u,e=a;n.e=null;try{for(var s=0;s<o.length;s++){var l=o[s];K(l.effect),G(l.reaction),Rt(l.fn)}}finally{K(r),G(e)}}f=n.p,n.m=!0}return{}}function yr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ut in t)X(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ut in r&&X(r)}}}function X(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{X(t[e],n)}catch{}const r=Ht(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Bt(r);for(let s in e){const l=e[s].get;if(l)try{l.call(t)}catch{}}}}}export{hr as $,d as A,Nn as B,Dn as C,ht as D,ct as E,pr as F,E as G,rn as H,K as I,Ln as J,Mn as K,kn as L,jn as M,sn as N,rr as O,Yn as P,Bn as Q,$ as R,ut as S,Fn as T,Gn as U,lr as V,sr as W,f as X,xn as Y,Ut as Z,yr as _,Bt as a,ur as a0,dr as a1,J as a2,z as a3,Un as a4,Vn as a5,An as a6,G as a7,a as a8,Jn as a9,nn as aa,D as ab,yt as ac,en as ad,Et as ae,In as af,nr as ag,mn as ah,or as ai,gn as aj,er as ak,Rt as al,on as am,_r as an,jt as ao,Cn as ap,cr as aq,tt as ar,Vt as as,Rn as at,Hn as au,Kt as av,On as b,Qn as c,nt as d,bn as e,Xn as f,Ht as g,g as h,qn as i,ot as j,vr as k,u as l,Pn as m,Wn as n,Sn as o,Tn as p,un as q,Zn as r,tr as s,fr as t,ar as u,ir as v,$n as w,zn as x,F as y,Kn as z};