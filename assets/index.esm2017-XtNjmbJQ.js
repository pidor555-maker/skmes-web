import{L as Jd,_ as Zd,C as tf,r as Iu,a as ef,F as nf,b as Wt,c as rf,d as jl,e as sf,i as zl,g as As,f as of,S as af,h as Ft}from"./index.esm2017-DCz-gGOR.js";var Tu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var he,Kl;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(I,p){function y(){}y.prototype=p.prototype,I.D=p.prototype,I.prototype=new y,I.prototype.constructor=I,I.C=function(T,v,R){for(var _=Array(arguments.length-2),Gt=2;Gt<arguments.length;Gt++)_[Gt-2]=arguments[Gt];return p.prototype[v].apply(T,_)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,p,y){y||(y=0);var T=Array(16);if(typeof p=="string")for(var v=0;16>v;++v)T[v]=p.charCodeAt(y++)|p.charCodeAt(y++)<<8|p.charCodeAt(y++)<<16|p.charCodeAt(y++)<<24;else for(v=0;16>v;++v)T[v]=p[y++]|p[y++]<<8|p[y++]<<16|p[y++]<<24;p=I.g[0],y=I.g[1],v=I.g[2];var R=I.g[3],_=p+(R^y&(v^R))+T[0]+3614090360&4294967295;p=y+(_<<7&4294967295|_>>>25),_=R+(v^p&(y^v))+T[1]+3905402710&4294967295,R=p+(_<<12&4294967295|_>>>20),_=v+(y^R&(p^y))+T[2]+606105819&4294967295,v=R+(_<<17&4294967295|_>>>15),_=y+(p^v&(R^p))+T[3]+3250441966&4294967295,y=v+(_<<22&4294967295|_>>>10),_=p+(R^y&(v^R))+T[4]+4118548399&4294967295,p=y+(_<<7&4294967295|_>>>25),_=R+(v^p&(y^v))+T[5]+1200080426&4294967295,R=p+(_<<12&4294967295|_>>>20),_=v+(y^R&(p^y))+T[6]+2821735955&4294967295,v=R+(_<<17&4294967295|_>>>15),_=y+(p^v&(R^p))+T[7]+4249261313&4294967295,y=v+(_<<22&4294967295|_>>>10),_=p+(R^y&(v^R))+T[8]+1770035416&4294967295,p=y+(_<<7&4294967295|_>>>25),_=R+(v^p&(y^v))+T[9]+2336552879&4294967295,R=p+(_<<12&4294967295|_>>>20),_=v+(y^R&(p^y))+T[10]+4294925233&4294967295,v=R+(_<<17&4294967295|_>>>15),_=y+(p^v&(R^p))+T[11]+2304563134&4294967295,y=v+(_<<22&4294967295|_>>>10),_=p+(R^y&(v^R))+T[12]+1804603682&4294967295,p=y+(_<<7&4294967295|_>>>25),_=R+(v^p&(y^v))+T[13]+4254626195&4294967295,R=p+(_<<12&4294967295|_>>>20),_=v+(y^R&(p^y))+T[14]+2792965006&4294967295,v=R+(_<<17&4294967295|_>>>15),_=y+(p^v&(R^p))+T[15]+1236535329&4294967295,y=v+(_<<22&4294967295|_>>>10),_=p+(v^R&(y^v))+T[1]+4129170786&4294967295,p=y+(_<<5&4294967295|_>>>27),_=R+(y^v&(p^y))+T[6]+3225465664&4294967295,R=p+(_<<9&4294967295|_>>>23),_=v+(p^y&(R^p))+T[11]+643717713&4294967295,v=R+(_<<14&4294967295|_>>>18),_=y+(R^p&(v^R))+T[0]+3921069994&4294967295,y=v+(_<<20&4294967295|_>>>12),_=p+(v^R&(y^v))+T[5]+3593408605&4294967295,p=y+(_<<5&4294967295|_>>>27),_=R+(y^v&(p^y))+T[10]+38016083&4294967295,R=p+(_<<9&4294967295|_>>>23),_=v+(p^y&(R^p))+T[15]+3634488961&4294967295,v=R+(_<<14&4294967295|_>>>18),_=y+(R^p&(v^R))+T[4]+3889429448&4294967295,y=v+(_<<20&4294967295|_>>>12),_=p+(v^R&(y^v))+T[9]+568446438&4294967295,p=y+(_<<5&4294967295|_>>>27),_=R+(y^v&(p^y))+T[14]+3275163606&4294967295,R=p+(_<<9&4294967295|_>>>23),_=v+(p^y&(R^p))+T[3]+4107603335&4294967295,v=R+(_<<14&4294967295|_>>>18),_=y+(R^p&(v^R))+T[8]+1163531501&4294967295,y=v+(_<<20&4294967295|_>>>12),_=p+(v^R&(y^v))+T[13]+2850285829&4294967295,p=y+(_<<5&4294967295|_>>>27),_=R+(y^v&(p^y))+T[2]+4243563512&4294967295,R=p+(_<<9&4294967295|_>>>23),_=v+(p^y&(R^p))+T[7]+1735328473&4294967295,v=R+(_<<14&4294967295|_>>>18),_=y+(R^p&(v^R))+T[12]+2368359562&4294967295,y=v+(_<<20&4294967295|_>>>12),_=p+(y^v^R)+T[5]+4294588738&4294967295,p=y+(_<<4&4294967295|_>>>28),_=R+(p^y^v)+T[8]+2272392833&4294967295,R=p+(_<<11&4294967295|_>>>21),_=v+(R^p^y)+T[11]+1839030562&4294967295,v=R+(_<<16&4294967295|_>>>16),_=y+(v^R^p)+T[14]+4259657740&4294967295,y=v+(_<<23&4294967295|_>>>9),_=p+(y^v^R)+T[1]+2763975236&4294967295,p=y+(_<<4&4294967295|_>>>28),_=R+(p^y^v)+T[4]+1272893353&4294967295,R=p+(_<<11&4294967295|_>>>21),_=v+(R^p^y)+T[7]+4139469664&4294967295,v=R+(_<<16&4294967295|_>>>16),_=y+(v^R^p)+T[10]+3200236656&4294967295,y=v+(_<<23&4294967295|_>>>9),_=p+(y^v^R)+T[13]+681279174&4294967295,p=y+(_<<4&4294967295|_>>>28),_=R+(p^y^v)+T[0]+3936430074&4294967295,R=p+(_<<11&4294967295|_>>>21),_=v+(R^p^y)+T[3]+3572445317&4294967295,v=R+(_<<16&4294967295|_>>>16),_=y+(v^R^p)+T[6]+76029189&4294967295,y=v+(_<<23&4294967295|_>>>9),_=p+(y^v^R)+T[9]+3654602809&4294967295,p=y+(_<<4&4294967295|_>>>28),_=R+(p^y^v)+T[12]+3873151461&4294967295,R=p+(_<<11&4294967295|_>>>21),_=v+(R^p^y)+T[15]+530742520&4294967295,v=R+(_<<16&4294967295|_>>>16),_=y+(v^R^p)+T[2]+3299628645&4294967295,y=v+(_<<23&4294967295|_>>>9),_=p+(v^(y|~R))+T[0]+4096336452&4294967295,p=y+(_<<6&4294967295|_>>>26),_=R+(y^(p|~v))+T[7]+1126891415&4294967295,R=p+(_<<10&4294967295|_>>>22),_=v+(p^(R|~y))+T[14]+2878612391&4294967295,v=R+(_<<15&4294967295|_>>>17),_=y+(R^(v|~p))+T[5]+4237533241&4294967295,y=v+(_<<21&4294967295|_>>>11),_=p+(v^(y|~R))+T[12]+1700485571&4294967295,p=y+(_<<6&4294967295|_>>>26),_=R+(y^(p|~v))+T[3]+2399980690&4294967295,R=p+(_<<10&4294967295|_>>>22),_=v+(p^(R|~y))+T[10]+4293915773&4294967295,v=R+(_<<15&4294967295|_>>>17),_=y+(R^(v|~p))+T[1]+2240044497&4294967295,y=v+(_<<21&4294967295|_>>>11),_=p+(v^(y|~R))+T[8]+1873313359&4294967295,p=y+(_<<6&4294967295|_>>>26),_=R+(y^(p|~v))+T[15]+4264355552&4294967295,R=p+(_<<10&4294967295|_>>>22),_=v+(p^(R|~y))+T[6]+2734768916&4294967295,v=R+(_<<15&4294967295|_>>>17),_=y+(R^(v|~p))+T[13]+1309151649&4294967295,y=v+(_<<21&4294967295|_>>>11),_=p+(v^(y|~R))+T[4]+4149444226&4294967295,p=y+(_<<6&4294967295|_>>>26),_=R+(y^(p|~v))+T[11]+3174756917&4294967295,R=p+(_<<10&4294967295|_>>>22),_=v+(p^(R|~y))+T[2]+718787259&4294967295,v=R+(_<<15&4294967295|_>>>17),_=y+(R^(v|~p))+T[9]+3951481745&4294967295,I.g[0]=I.g[0]+p&4294967295,I.g[1]=I.g[1]+(v+(_<<21&4294967295|_>>>11))&4294967295,I.g[2]=I.g[2]+v&4294967295,I.g[3]=I.g[3]+R&4294967295}n.prototype.u=function(I,p){p===void 0&&(p=I.length);for(var y=p-this.blockSize,T=this.B,v=this.h,R=0;R<p;){if(v==0)for(;R<=y;)s(this,I,R),R+=this.blockSize;if(typeof I=="string"){for(;R<p;)if(T[v++]=I.charCodeAt(R++),v==this.blockSize){s(this,T),v=0;break}}else for(;R<p;)if(T[v++]=I[R++],v==this.blockSize){s(this,T),v=0;break}}this.h=v,this.o+=p},n.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var p=1;p<I.length-8;++p)I[p]=0;var y=8*this.o;for(p=I.length-8;p<I.length;++p)I[p]=y&255,y/=256;for(this.u(I),I=Array(16),p=y=0;4>p;++p)for(var T=0;32>T;T+=8)I[y++]=this.g[p]>>>T&255;return I};function i(I,p){var y=u;return Object.prototype.hasOwnProperty.call(y,I)?y[I]:y[I]=p(I)}function a(I,p){this.h=p;for(var y=[],T=!0,v=I.length-1;0<=v;v--){var R=I[v]|0;T&&R==p||(y[v]=R,T=!1)}this.g=y}var u={};function c(I){return-128<=I&&128>I?i(I,function(p){return new a([p|0],0>p?-1:0)}):new a([I|0],0>I?-1:0)}function d(I){if(isNaN(I)||!isFinite(I))return g;if(0>I)return x(d(-I));for(var p=[],y=1,T=0;I>=y;T++)p[T]=I/y|0,y*=4294967296;return new a(p,0)}function m(I,p){if(I.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(I.charAt(0)=="-")return x(m(I.substring(1),p));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=d(Math.pow(p,8)),T=g,v=0;v<I.length;v+=8){var R=Math.min(8,I.length-v),_=parseInt(I.substring(v,v+R),p);8>R?(R=d(Math.pow(p,R)),T=T.j(R).add(d(_))):(T=T.j(y),T=T.add(d(_)))}return T}var g=c(0),E=c(1),P=c(16777216);r=a.prototype,r.m=function(){if(N(this))return-x(this).m();for(var I=0,p=1,y=0;y<this.g.length;y++){var T=this.i(y);I+=(0<=T?T:4294967296+T)*p,p*=4294967296}return I},r.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(C(this))return"0";if(N(this))return"-"+x(this).toString(I);for(var p=d(Math.pow(I,6)),y=this,T="";;){var v=H(y,p).g;y=z(y,v.j(p));var R=((0<y.g.length?y.g[0]:y.h)>>>0).toString(I);if(y=v,C(y))return R+T;for(;6>R.length;)R="0"+R;T=R+T}},r.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function C(I){if(I.h!=0)return!1;for(var p=0;p<I.g.length;p++)if(I.g[p]!=0)return!1;return!0}function N(I){return I.h==-1}r.l=function(I){return I=z(this,I),N(I)?-1:C(I)?0:1};function x(I){for(var p=I.g.length,y=[],T=0;T<p;T++)y[T]=~I.g[T];return new a(y,~I.h).add(E)}r.abs=function(){return N(this)?x(this):this},r.add=function(I){for(var p=Math.max(this.g.length,I.g.length),y=[],T=0,v=0;v<=p;v++){var R=T+(this.i(v)&65535)+(I.i(v)&65535),_=(R>>>16)+(this.i(v)>>>16)+(I.i(v)>>>16);T=_>>>16,R&=65535,_&=65535,y[v]=_<<16|R}return new a(y,y[y.length-1]&-2147483648?-1:0)};function z(I,p){return I.add(x(p))}r.j=function(I){if(C(this)||C(I))return g;if(N(this))return N(I)?x(this).j(x(I)):x(x(this).j(I));if(N(I))return x(this.j(x(I)));if(0>this.l(P)&&0>I.l(P))return d(this.m()*I.m());for(var p=this.g.length+I.g.length,y=[],T=0;T<2*p;T++)y[T]=0;for(T=0;T<this.g.length;T++)for(var v=0;v<I.g.length;v++){var R=this.i(T)>>>16,_=this.i(T)&65535,Gt=I.i(v)>>>16,Mn=I.i(v)&65535;y[2*T+2*v]+=_*Mn,j(y,2*T+2*v),y[2*T+2*v+1]+=R*Mn,j(y,2*T+2*v+1),y[2*T+2*v+1]+=_*Gt,j(y,2*T+2*v+1),y[2*T+2*v+2]+=R*Gt,j(y,2*T+2*v+2)}for(T=0;T<p;T++)y[T]=y[2*T+1]<<16|y[2*T];for(T=p;T<2*p;T++)y[T]=0;return new a(y,0)};function j(I,p){for(;(I[p]&65535)!=I[p];)I[p+1]+=I[p]>>>16,I[p]&=65535,p++}function B(I,p){this.g=I,this.h=p}function H(I,p){if(C(p))throw Error("division by zero");if(C(I))return new B(g,g);if(N(I))return p=H(x(I),p),new B(x(p.g),x(p.h));if(N(p))return p=H(I,x(p)),new B(x(p.g),p.h);if(30<I.g.length){if(N(I)||N(p))throw Error("slowDivide_ only works with positive integers.");for(var y=E,T=p;0>=T.l(I);)y=tt(y),T=tt(T);var v=Q(y,1),R=Q(T,1);for(T=Q(T,2),y=Q(y,2);!C(T);){var _=R.add(T);0>=_.l(I)&&(v=v.add(y),R=_),T=Q(T,1),y=Q(y,1)}return p=z(I,v.j(p)),new B(v,p)}for(v=g;0<=I.l(p);){for(y=Math.max(1,Math.floor(I.m()/p.m())),T=Math.ceil(Math.log(y)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),R=d(y),_=R.j(p);N(_)||0<_.l(I);)y-=T,R=d(y),_=R.j(p);C(R)&&(R=E),v=v.add(R),I=z(I,_)}return new B(v,I)}r.A=function(I){return H(this,I).h},r.and=function(I){for(var p=Math.max(this.g.length,I.g.length),y=[],T=0;T<p;T++)y[T]=this.i(T)&I.i(T);return new a(y,this.h&I.h)},r.or=function(I){for(var p=Math.max(this.g.length,I.g.length),y=[],T=0;T<p;T++)y[T]=this.i(T)|I.i(T);return new a(y,this.h|I.h)},r.xor=function(I){for(var p=Math.max(this.g.length,I.g.length),y=[],T=0;T<p;T++)y[T]=this.i(T)^I.i(T);return new a(y,this.h^I.h)};function tt(I){for(var p=I.g.length+1,y=[],T=0;T<p;T++)y[T]=I.i(T)<<1|I.i(T-1)>>>31;return new a(y,I.h)}function Q(I,p){var y=p>>5;p%=32;for(var T=I.g.length-y,v=[],R=0;R<T;R++)v[R]=0<p?I.i(R+y)>>>p|I.i(R+y+1)<<32-p:I.i(R+y);return new a(v,I.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Kl=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,he=a}).apply(typeof Tu<"u"?Tu:typeof self<"u"?self:typeof window<"u"?window:{});var os=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gl,rr,$l,fs,Wi,Ql,Wl,Hl;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,h){return o==Array.prototype||o==Object.prototype||(o[l]=h.value),o};function e(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof os=="object"&&os];for(var l=0;l<o.length;++l){var h=o[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var n=e(this);function s(o,l){if(l)t:{var h=n;o=o.split(".");for(var f=0;f<o.length-1;f++){var A=o[f];if(!(A in h))break t;h=h[A]}o=o[o.length-1],f=h[o],l=l(f),l!=f&&l!=null&&t(h,o,{configurable:!0,writable:!0,value:l})}}function i(o,l){o instanceof String&&(o+="");var h=0,f=!1,A={next:function(){if(!f&&h<o.length){var V=h++;return{value:l(V,o[V]),done:!1}}return f=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(o){return o||function(){return i(this,function(l,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function c(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function d(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function m(o,l,h){return o.call.apply(o.bind,arguments)}function g(o,l,h){if(!o)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,f),o.apply(l,A)}}return function(){return o.apply(l,arguments)}}function E(o,l,h){return E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:g,E.apply(null,arguments)}function P(o,l){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function C(o,l){function h(){}h.prototype=l.prototype,o.aa=l.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(f,A,V){for(var k=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)k[Z-2]=arguments[Z];return l.prototype[A].apply(f,k)}}function N(o){const l=o.length;if(0<l){const h=Array(l);for(let f=0;f<l;f++)h[f]=o[f];return h}return[]}function x(o,l){for(let h=1;h<arguments.length;h++){const f=arguments[h];if(c(f)){const A=o.length||0,V=f.length||0;o.length=A+V;for(let k=0;k<V;k++)o[A+k]=f[k]}else o.push(f)}}class z{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function j(o){return/^[\s\xa0]*$/.test(o)}function B(){var o=u.navigator;return o&&(o=o.userAgent)?o:""}function H(o){return H[" "](o),o}H[" "]=function(){};var tt=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function Q(o,l,h){for(const f in o)l.call(h,o[f],f,o)}function I(o,l){for(const h in o)l.call(void 0,o[h],h,o)}function p(o){const l={};for(const h in o)l[h]=o[h];return l}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,l){let h,f;for(let A=1;A<arguments.length;A++){f=arguments[A];for(h in f)o[h]=f[h];for(let V=0;V<y.length;V++)h=y[V],Object.prototype.hasOwnProperty.call(f,h)&&(o[h]=f[h])}}function v(o){var l=1;o=o.split(":");const h=[];for(;0<l&&o.length;)h.push(o.shift()),l--;return o.length&&h.push(o.join(":")),h}function R(o){u.setTimeout(()=>{throw o},0)}function _(){var o=gi;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class Gt{constructor(){this.h=this.g=null}add(l,h){const f=Mn.get();f.set(l,h),this.h?this.h.next=f:this.g=f,this.h=f}}var Mn=new z(()=>new _d,o=>o.reset());class _d{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let On,Fn=!1,gi=new Gt,Ia=()=>{const o=u.Promise.resolve(void 0);On=()=>{o.then(yd)}};var yd=()=>{for(var o;o=_();){try{o.h.call(o.g)}catch(h){R(h)}var l=Mn;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}Fn=!1};function ne(){this.s=this.s,this.C=this.C}ne.prototype.s=!1,ne.prototype.ma=function(){this.s||(this.s=!0,this.N())},ne.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function _t(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}_t.prototype.h=function(){this.defaultPrevented=!0};var Id=(function(){if(!u.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};u.addEventListener("test",h,l),u.removeEventListener("test",h,l)}catch{}return o})();function Ln(o,l){if(_t.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(tt){t:{try{H(l.nodeName);var A=!0;break t}catch{}A=!1}A||(l=null)}}else h=="mouseover"?l=o.fromElement:h=="mouseout"&&(l=o.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Td[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Ln.aa.h.call(this)}}C(Ln,_t);var Td={2:"touch",3:"pen",4:"mouse"};Ln.prototype.h=function(){Ln.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var qr="closure_listenable_"+(1e6*Math.random()|0),Ed=0;function vd(o,l,h,f,A){this.listener=o,this.proxy=null,this.src=l,this.type=h,this.capture=!!f,this.ha=A,this.key=++Ed,this.da=this.fa=!1}function jr(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function zr(o){this.src=o,this.g={},this.h=0}zr.prototype.add=function(o,l,h,f,A){var V=o.toString();o=this.g[V],o||(o=this.g[V]=[],this.h++);var k=_i(o,l,f,A);return-1<k?(l=o[k],h||(l.fa=!1)):(l=new vd(l,this.src,V,!!f,A),l.fa=h,o.push(l)),l};function pi(o,l){var h=l.type;if(h in o.g){var f=o.g[h],A=Array.prototype.indexOf.call(f,l,void 0),V;(V=0<=A)&&Array.prototype.splice.call(f,A,1),V&&(jr(l),o.g[h].length==0&&(delete o.g[h],o.h--))}}function _i(o,l,h,f){for(var A=0;A<o.length;++A){var V=o[A];if(!V.da&&V.listener==l&&V.capture==!!h&&V.ha==f)return A}return-1}var yi="closure_lm_"+(1e6*Math.random()|0),Ii={};function Ta(o,l,h,f,A){if(Array.isArray(l)){for(var V=0;V<l.length;V++)Ta(o,l[V],h,f,A);return null}return h=wa(h),o&&o[qr]?o.K(l,h,d(f)?!!f.capture:!1,A):wd(o,l,h,!1,f,A)}function wd(o,l,h,f,A,V){if(!l)throw Error("Invalid event type");var k=d(A)?!!A.capture:!!A,Z=Ei(o);if(Z||(o[yi]=Z=new zr(o)),h=Z.add(l,h,f,k,V),h.proxy)return h;if(f=Ad(),h.proxy=f,f.src=o,f.listener=h,o.addEventListener)Id||(A=k),A===void 0&&(A=!1),o.addEventListener(l.toString(),f,A);else if(o.attachEvent)o.attachEvent(va(l.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Ad(){function o(h){return l.call(o.src,o.listener,h)}const l=Rd;return o}function Ea(o,l,h,f,A){if(Array.isArray(l))for(var V=0;V<l.length;V++)Ea(o,l[V],h,f,A);else f=d(f)?!!f.capture:!!f,h=wa(h),o&&o[qr]?(o=o.i,l=String(l).toString(),l in o.g&&(V=o.g[l],h=_i(V,h,f,A),-1<h&&(jr(V[h]),Array.prototype.splice.call(V,h,1),V.length==0&&(delete o.g[l],o.h--)))):o&&(o=Ei(o))&&(l=o.g[l.toString()],o=-1,l&&(o=_i(l,h,f,A)),(h=-1<o?l[o]:null)&&Ti(h))}function Ti(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[qr])pi(l.i,o);else{var h=o.type,f=o.proxy;l.removeEventListener?l.removeEventListener(h,f,o.capture):l.detachEvent?l.detachEvent(va(h),f):l.addListener&&l.removeListener&&l.removeListener(f),(h=Ei(l))?(pi(h,o),h.h==0&&(h.src=null,l[yi]=null)):jr(o)}}}function va(o){return o in Ii?Ii[o]:Ii[o]="on"+o}function Rd(o,l){if(o.da)o=!0;else{l=new Ln(l,this);var h=o.listener,f=o.ha||o.src;o.fa&&Ti(o),o=h.call(f,l)}return o}function Ei(o){return o=o[yi],o instanceof zr?o:null}var vi="__closure_events_fn_"+(1e9*Math.random()>>>0);function wa(o){return typeof o=="function"?o:(o[vi]||(o[vi]=function(l){return o.handleEvent(l)}),o[vi])}function yt(){ne.call(this),this.i=new zr(this),this.M=this,this.F=null}C(yt,ne),yt.prototype[qr]=!0,yt.prototype.removeEventListener=function(o,l,h,f){Ea(this,o,l,h,f)};function Vt(o,l){var h,f=o.F;if(f)for(h=[];f;f=f.F)h.push(f);if(o=o.M,f=l.type||l,typeof l=="string")l=new _t(l,o);else if(l instanceof _t)l.target=l.target||o;else{var A=l;l=new _t(f,o),T(l,A)}if(A=!0,h)for(var V=h.length-1;0<=V;V--){var k=l.g=h[V];A=Kr(k,f,!0,l)&&A}if(k=l.g=o,A=Kr(k,f,!0,l)&&A,A=Kr(k,f,!1,l)&&A,h)for(V=0;V<h.length;V++)k=l.g=h[V],A=Kr(k,f,!1,l)&&A}yt.prototype.N=function(){if(yt.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var h=o.g[l],f=0;f<h.length;f++)jr(h[f]);delete o.g[l],o.h--}}this.F=null},yt.prototype.K=function(o,l,h,f){return this.i.add(String(o),l,!1,h,f)},yt.prototype.L=function(o,l,h,f){return this.i.add(String(o),l,!0,h,f)};function Kr(o,l,h,f){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var A=!0,V=0;V<l.length;++V){var k=l[V];if(k&&!k.da&&k.capture==h){var Z=k.listener,gt=k.ha||k.src;k.fa&&pi(o.i,k),A=Z.call(gt,f)!==!1&&A}}return A&&!f.defaultPrevented}function Aa(o,l,h){if(typeof o=="function")h&&(o=E(o,h));else if(o&&typeof o.handleEvent=="function")o=E(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:u.setTimeout(o,l||0)}function Ra(o){o.g=Aa(()=>{o.g=null,o.i&&(o.i=!1,Ra(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class Vd extends ne{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Ra(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Un(o){ne.call(this),this.h=o,this.g={}}C(Un,ne);var Va=[];function Pa(o){Q(o.g,function(l,h){this.g.hasOwnProperty(h)&&Ti(l)},o),o.g={}}Un.prototype.N=function(){Un.aa.N.call(this),Pa(this)},Un.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var wi=u.JSON.stringify,Pd=u.JSON.parse,Sd=class{stringify(o){return u.JSON.stringify(o,void 0)}parse(o){return u.JSON.parse(o,void 0)}};function Ai(){}Ai.prototype.h=null;function Sa(o){return o.h||(o.h=o.i())}function ba(){}var Bn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ri(){_t.call(this,"d")}C(Ri,_t);function Vi(){_t.call(this,"c")}C(Vi,_t);var we={},Ca=null;function Gr(){return Ca=Ca||new yt}we.La="serverreachability";function xa(o){_t.call(this,we.La,o)}C(xa,_t);function qn(o){const l=Gr();Vt(l,new xa(l))}we.STAT_EVENT="statevent";function Da(o,l){_t.call(this,we.STAT_EVENT,o),this.stat=l}C(Da,_t);function Pt(o){const l=Gr();Vt(l,new Da(l,o))}we.Ma="timingevent";function ka(o,l){_t.call(this,we.Ma,o),this.size=l}C(ka,_t);function jn(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){o()},l)}function zn(){this.g=!0}zn.prototype.xa=function(){this.g=!1};function bd(o,l,h,f,A,V){o.info(function(){if(o.g)if(V)for(var k="",Z=V.split("&"),gt=0;gt<Z.length;gt++){var W=Z[gt].split("=");if(1<W.length){var It=W[0];W=W[1];var Tt=It.split("_");k=2<=Tt.length&&Tt[1]=="type"?k+(It+"="+W+"&"):k+(It+"=redacted&")}}else k=null;else k=V;return"XMLHTTP REQ ("+f+") [attempt "+A+"]: "+l+`
`+h+`
`+k})}function Cd(o,l,h,f,A,V,k){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+A+"]: "+l+`
`+h+`
`+V+" "+k})}function $e(o,l,h,f){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+Dd(o,h)+(f?" "+f:"")})}function xd(o,l){o.info(function(){return"TIMEOUT: "+l})}zn.prototype.info=function(){};function Dd(o,l){if(!o.g)return l;if(!l)return null;try{var h=JSON.parse(l);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var f=h[o];if(!(2>f.length)){var A=f[1];if(Array.isArray(A)&&!(1>A.length)){var V=A[0];if(V!="noop"&&V!="stop"&&V!="close")for(var k=1;k<A.length;k++)A[k]=""}}}}return wi(h)}catch{return l}}var $r={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Na={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Pi;function Qr(){}C(Qr,Ai),Qr.prototype.g=function(){return new XMLHttpRequest},Qr.prototype.i=function(){return{}},Pi=new Qr;function re(o,l,h,f){this.j=o,this.i=l,this.l=h,this.R=f||1,this.U=new Un(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ma}function Ma(){this.i=null,this.g="",this.h=!1}var Oa={},Si={};function bi(o,l,h){o.L=1,o.v=Xr($t(l)),o.m=h,o.P=!0,Fa(o,null)}function Fa(o,l){o.F=Date.now(),Wr(o),o.A=$t(o.v);var h=o.A,f=o.R;Array.isArray(f)||(f=[String(f)]),Xa(h.i,"t",f),o.C=0,h=o.j.J,o.h=new Ma,o.g=gu(o.j,h?l:null,!o.m),0<o.O&&(o.M=new Vd(E(o.Y,o,o.g),o.O)),l=o.U,h=o.g,f=o.ca;var A="readystatechange";Array.isArray(A)||(A&&(Va[0]=A.toString()),A=Va);for(var V=0;V<A.length;V++){var k=Ta(h,A[V],f||l.handleEvent,!1,l.h||l);if(!k)break;l.g[k.key]=k}l=o.H?p(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),qn(),bd(o.i,o.u,o.A,o.l,o.R,o.m)}re.prototype.ca=function(o){o=o.target;const l=this.M;l&&Qt(o)==3?l.j():this.Y(o)},re.prototype.Y=function(o){try{if(o==this.g)t:{const Tt=Qt(this.g);var l=this.g.Ba();const He=this.g.Z();if(!(3>Tt)&&(Tt!=3||this.g&&(this.h.h||this.g.oa()||su(this.g)))){this.J||Tt!=4||l==7||(l==8||0>=He?qn(3):qn(2)),Ci(this);var h=this.g.Z();this.X=h;e:if(La(this)){var f=su(this.g);o="";var A=f.length,V=Qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ae(this),Kn(this);var k="";break e}this.h.i=new u.TextDecoder}for(l=0;l<A;l++)this.h.h=!0,o+=this.h.i.decode(f[l],{stream:!(V&&l==A-1)});f.length=0,this.h.g+=o,this.C=0,k=this.h.g}else k=this.g.oa();if(this.o=h==200,Cd(this.i,this.u,this.A,this.l,this.R,Tt,h),this.o){if(this.T&&!this.K){e:{if(this.g){var Z,gt=this.g;if((Z=gt.g?gt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(Z)){var W=Z;break e}}W=null}if(h=W)$e(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,xi(this,h);else{this.o=!1,this.s=3,Pt(12),Ae(this),Kn(this);break t}}if(this.P){h=!0;let Lt;for(;!this.J&&this.C<k.length;)if(Lt=kd(this,k),Lt==Si){Tt==4&&(this.s=4,Pt(14),h=!1),$e(this.i,this.l,null,"[Incomplete Response]");break}else if(Lt==Oa){this.s=4,Pt(15),$e(this.i,this.l,k,"[Invalid Chunk]"),h=!1;break}else $e(this.i,this.l,Lt,null),xi(this,Lt);if(La(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Tt!=4||k.length!=0||this.h.h||(this.s=1,Pt(16),h=!1),this.o=this.o&&h,!h)$e(this.i,this.l,k,"[Invalid Chunked Response]"),Ae(this),Kn(this);else if(0<k.length&&!this.W){this.W=!0;var It=this.j;It.g==this&&It.ba&&!It.M&&(It.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),Fi(It),It.M=!0,Pt(11))}}else $e(this.i,this.l,k,null),xi(this,k);Tt==4&&Ae(this),this.o&&!this.J&&(Tt==4?hu(this.j,this):(this.o=!1,Wr(this)))}else Yd(this.g),h==400&&0<k.indexOf("Unknown SID")?(this.s=3,Pt(12)):(this.s=0,Pt(13)),Ae(this),Kn(this)}}}catch{}finally{}};function La(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function kd(o,l){var h=o.C,f=l.indexOf(`
`,h);return f==-1?Si:(h=Number(l.substring(h,f)),isNaN(h)?Oa:(f+=1,f+h>l.length?Si:(l=l.slice(f,f+h),o.C=f+h,l)))}re.prototype.cancel=function(){this.J=!0,Ae(this)};function Wr(o){o.S=Date.now()+o.I,Ua(o,o.I)}function Ua(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=jn(E(o.ba,o),l)}function Ci(o){o.B&&(u.clearTimeout(o.B),o.B=null)}re.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(xd(this.i,this.A),this.L!=2&&(qn(),Pt(17)),Ae(this),this.s=2,Kn(this)):Ua(this,this.S-o)};function Kn(o){o.j.G==0||o.J||hu(o.j,o)}function Ae(o){Ci(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,Pa(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function xi(o,l){try{var h=o.j;if(h.G!=0&&(h.g==o||Di(h.h,o))){if(!o.K&&Di(h.h,o)&&h.G==3){try{var f=h.Da.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var A=f;if(A[0]==0){t:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)rs(h),es(h);else break t;Oi(h),Pt(18)}}else h.za=A[1],0<h.za-h.T&&37500>A[2]&&h.F&&h.v==0&&!h.C&&(h.C=jn(E(h.Za,h),6e3));if(1>=ja(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Ve(h,11)}else if((o.K||h.g==o)&&rs(h),!j(l))for(A=h.Da.g.parse(l),l=0;l<A.length;l++){let W=A[l];if(h.T=W[0],W=W[1],h.G==2)if(W[0]=="c"){h.K=W[1],h.ia=W[2];const It=W[3];It!=null&&(h.la=It,h.j.info("VER="+h.la));const Tt=W[4];Tt!=null&&(h.Aa=Tt,h.j.info("SVER="+h.Aa));const He=W[5];He!=null&&typeof He=="number"&&0<He&&(f=1.5*He,h.L=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const Lt=o.g;if(Lt){const is=Lt.g?Lt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(is){var V=f.h;V.g||is.indexOf("spdy")==-1&&is.indexOf("quic")==-1&&is.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(ki(V,V.h),V.h=null))}if(f.D){const Li=Lt.g?Lt.g.getResponseHeader("X-HTTP-Session-Id"):null;Li&&(f.ya=Li,nt(f.I,f.D,Li))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),f=h;var k=o;if(f.qa=mu(f,f.J?f.ia:null,f.W),k.K){za(f.h,k);var Z=k,gt=f.L;gt&&(Z.I=gt),Z.B&&(Ci(Z),Wr(Z)),f.g=k}else lu(f);0<h.i.length&&ns(h)}else W[0]!="stop"&&W[0]!="close"||Ve(h,7);else h.G==3&&(W[0]=="stop"||W[0]=="close"?W[0]=="stop"?Ve(h,7):Mi(h):W[0]!="noop"&&h.l&&h.l.ta(W),h.v=0)}}qn(4)}catch{}}var Nd=class{constructor(o,l){this.g=o,this.map=l}};function Ba(o){this.l=o||10,u.PerformanceNavigationTiming?(o=u.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function qa(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function ja(o){return o.h?1:o.g?o.g.size:0}function Di(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function ki(o,l){o.g?o.g.add(l):o.h=l}function za(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}Ba.prototype.cancel=function(){if(this.i=Ka(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Ka(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const h of o.g.values())l=l.concat(h.D);return l}return N(o.i)}function Md(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var l=[],h=o.length,f=0;f<h;f++)l.push(o[f]);return l}l=[],h=0;for(f in o)l[h++]=o[f];return l}function Od(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var l=[];o=o.length;for(var h=0;h<o;h++)l.push(h);return l}l=[],h=0;for(const f in o)l[h++]=f;return l}}}function Ga(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var h=Od(o),f=Md(o),A=f.length,V=0;V<A;V++)l.call(void 0,f[V],h&&h[V],o)}var $a=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Fd(o,l){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var f=o[h].indexOf("="),A=null;if(0<=f){var V=o[h].substring(0,f);A=o[h].substring(f+1)}else V=o[h];l(V,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Re(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Re){this.h=o.h,Hr(this,o.j),this.o=o.o,this.g=o.g,Yr(this,o.s),this.l=o.l;var l=o.i,h=new Qn;h.i=l.i,l.g&&(h.g=new Map(l.g),h.h=l.h),Qa(this,h),this.m=o.m}else o&&(l=String(o).match($a))?(this.h=!1,Hr(this,l[1]||"",!0),this.o=Gn(l[2]||""),this.g=Gn(l[3]||"",!0),Yr(this,l[4]),this.l=Gn(l[5]||"",!0),Qa(this,l[6]||"",!0),this.m=Gn(l[7]||"")):(this.h=!1,this.i=new Qn(null,this.h))}Re.prototype.toString=function(){var o=[],l=this.j;l&&o.push($n(l,Wa,!0),":");var h=this.g;return(h||l=="file")&&(o.push("//"),(l=this.o)&&o.push($n(l,Wa,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push($n(h,h.charAt(0)=="/"?Bd:Ud,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",$n(h,jd)),o.join("")};function $t(o){return new Re(o)}function Hr(o,l,h){o.j=h?Gn(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function Yr(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function Qa(o,l,h){l instanceof Qn?(o.i=l,zd(o.i,o.h)):(h||(l=$n(l,qd)),o.i=new Qn(l,o.h))}function nt(o,l,h){o.i.set(l,h)}function Xr(o){return nt(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Gn(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function $n(o,l,h){return typeof o=="string"?(o=encodeURI(o).replace(l,Ld),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Ld(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Wa=/[#\/\?@]/g,Ud=/[#\?:]/g,Bd=/[#\?]/g,qd=/[#\?@]/g,jd=/#/g;function Qn(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function se(o){o.g||(o.g=new Map,o.h=0,o.i&&Fd(o.i,function(l,h){o.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}r=Qn.prototype,r.add=function(o,l){se(this),this.i=null,o=Qe(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(l),this.h+=1,this};function Ha(o,l){se(o),l=Qe(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function Ya(o,l){return se(o),l=Qe(o,l),o.g.has(l)}r.forEach=function(o,l){se(this),this.g.forEach(function(h,f){h.forEach(function(A){o.call(l,A,f,this)},this)},this)},r.na=function(){se(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),h=[];for(let f=0;f<l.length;f++){const A=o[f];for(let V=0;V<A.length;V++)h.push(l[f])}return h},r.V=function(o){se(this);let l=[];if(typeof o=="string")Ya(this,o)&&(l=l.concat(this.g.get(Qe(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)l=l.concat(o[h])}return l},r.set=function(o,l){return se(this),this.i=null,o=Qe(this,o),Ya(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},r.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function Xa(o,l,h){Ha(o,l),0<h.length&&(o.i=null,o.g.set(Qe(o,l),N(h)),o.h+=h.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var h=0;h<l.length;h++){var f=l[h];const V=encodeURIComponent(String(f)),k=this.V(f);for(f=0;f<k.length;f++){var A=V;k[f]!==""&&(A+="="+encodeURIComponent(String(k[f]))),o.push(A)}}return this.i=o.join("&")};function Qe(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function zd(o,l){l&&!o.j&&(se(o),o.i=null,o.g.forEach(function(h,f){var A=f.toLowerCase();f!=A&&(Ha(this,f),Xa(this,A,h))},o)),o.j=l}function Kd(o,l){const h=new zn;if(u.Image){const f=new Image;f.onload=P(ie,h,"TestLoadImage: loaded",!0,l,f),f.onerror=P(ie,h,"TestLoadImage: error",!1,l,f),f.onabort=P(ie,h,"TestLoadImage: abort",!1,l,f),f.ontimeout=P(ie,h,"TestLoadImage: timeout",!1,l,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else l(!1)}function Gd(o,l){const h=new zn,f=new AbortController,A=setTimeout(()=>{f.abort(),ie(h,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:f.signal}).then(V=>{clearTimeout(A),V.ok?ie(h,"TestPingServer: ok",!0,l):ie(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),ie(h,"TestPingServer: error",!1,l)})}function ie(o,l,h,f,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),f(h)}catch{}}function $d(){this.g=new Sd}function Qd(o,l,h){const f=h||"";try{Ga(o,function(A,V){let k=A;d(A)&&(k=wi(A)),l.push(f+V+"="+encodeURIComponent(k))})}catch(A){throw l.push(f+"type="+encodeURIComponent("_badmap")),A}}function Jr(o){this.l=o.Ub||null,this.j=o.eb||!1}C(Jr,Ai),Jr.prototype.g=function(){return new Zr(this.l,this.j)},Jr.prototype.i=(function(o){return function(){return o}})({});function Zr(o,l){yt.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Zr,yt),r=Zr.prototype,r.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,Hn(this)},r.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||u).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Wn(this)),this.readyState=0},r.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Hn(this)),this.g&&(this.readyState=3,Hn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ja(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ja(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}r.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?Wn(this):Hn(this),this.readyState==3&&Ja(this)}},r.Ra=function(o){this.g&&(this.response=this.responseText=o,Wn(this))},r.Qa=function(o){this.g&&(this.response=o,Wn(this))},r.ga=function(){this.g&&Wn(this)};function Wn(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Hn(o)}r.setRequestHeader=function(o,l){this.u.append(o,l)},r.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=l.next();return o.join(`\r
`)};function Hn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Zr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Za(o){let l="";return Q(o,function(h,f){l+=f,l+=":",l+=h,l+=`\r
`}),l}function Ni(o,l,h){t:{for(f in h){var f=!1;break t}f=!0}f||(h=Za(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):nt(o,l,h))}function ot(o){yt.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(ot,yt);var Wd=/^https?$/i,Hd=["POST","PUT"];r=ot.prototype,r.Ha=function(o){this.J=o},r.ea=function(o,l,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Pi.g(),this.v=this.o?Sa(this.o):Sa(Pi),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(V){tu(this,V);return}if(o=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var A in f)h.set(A,f[A]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const V of f.keys())h.set(V,f.get(V));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(V=>V.toLowerCase()=="content-type"),A=u.FormData&&o instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Hd,l,void 0))||f||A||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,k]of h)this.g.setRequestHeader(V,k);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ru(this),this.u=!0,this.g.send(o),this.u=!1}catch(V){tu(this,V)}};function tu(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,eu(o),ts(o)}function eu(o){o.A||(o.A=!0,Vt(o,"complete"),Vt(o,"error"))}r.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Vt(this,"complete"),Vt(this,"abort"),ts(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ts(this,!0)),ot.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?nu(this):this.bb())},r.bb=function(){nu(this)};function nu(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Qt(o)!=4||o.Z()!=2)){if(o.u&&Qt(o)==4)Aa(o.Ea,0,o);else if(Vt(o,"readystatechange"),Qt(o)==4){o.h=!1;try{const k=o.Z();t:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break t;default:l=!1}var h;if(!(h=l)){var f;if(f=k===0){var A=String(o.D).match($a)[1]||null;!A&&u.self&&u.self.location&&(A=u.self.location.protocol.slice(0,-1)),f=!Wd.test(A?A.toLowerCase():"")}h=f}if(h)Vt(o,"complete"),Vt(o,"success");else{o.m=6;try{var V=2<Qt(o)?o.g.statusText:""}catch{V=""}o.l=V+" ["+o.Z()+"]",eu(o)}}finally{ts(o)}}}}function ts(o,l){if(o.g){ru(o);const h=o.g,f=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||Vt(o,"ready");try{h.onreadystatechange=f}catch{}}}function ru(o){o.I&&(u.clearTimeout(o.I),o.I=null)}r.isActive=function(){return!!this.g};function Qt(o){return o.g?o.g.readyState:0}r.Z=function(){try{return 2<Qt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),Pd(l)}};function su(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Yd(o){const l={};o=(o.g&&2<=Qt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(j(o[f]))continue;var h=v(o[f]);const A=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const V=l[A]||[];l[A]=V,V.push(h)}I(l,function(f){return f.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Yn(o,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||l}function iu(o){this.Aa=0,this.i=[],this.j=new zn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Yn("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Yn("baseRetryDelayMs",5e3,o),this.cb=Yn("retryDelaySeedMs",1e4,o),this.Wa=Yn("forwardChannelMaxRetries",2,o),this.wa=Yn("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Ba(o&&o.concurrentRequestLimit),this.Da=new $d,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=iu.prototype,r.la=8,r.G=1,r.connect=function(o,l,h,f){Pt(0),this.W=o,this.H=l||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.I=mu(this,null,this.W),ns(this)};function Mi(o){if(ou(o),o.G==3){var l=o.U++,h=$t(o.I);if(nt(h,"SID",o.K),nt(h,"RID",l),nt(h,"TYPE","terminate"),Xn(o,h),l=new re(o,o.j,l),l.L=2,l.v=Xr($t(h)),h=!1,u.navigator&&u.navigator.sendBeacon)try{h=u.navigator.sendBeacon(l.v.toString(),"")}catch{}!h&&u.Image&&(new Image().src=l.v,h=!0),h||(l.g=gu(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Wr(l)}fu(o)}function es(o){o.g&&(Fi(o),o.g.cancel(),o.g=null)}function ou(o){es(o),o.u&&(u.clearTimeout(o.u),o.u=null),rs(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&u.clearTimeout(o.s),o.s=null)}function ns(o){if(!qa(o.h)&&!o.s){o.s=!0;var l=o.Ga;On||Ia(),Fn||(On(),Fn=!0),gi.add(l,o),o.B=0}}function Xd(o,l){return ja(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=jn(E(o.Ga,o,l),du(o,o.B)),o.B++,!0)}r.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const A=new re(this,this.j,o);let V=this.o;if(this.S&&(V?(V=p(V),T(V,this.S)):V=this.S),this.m!==null||this.O||(A.H=V,V=null),this.P)t:{for(var l=0,h=0;h<this.i.length;h++){e:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=h;break t}if(l===4096||h===this.i.length-1){l=h+1;break t}}l=1e3}else l=1e3;l=uu(this,A,l),h=$t(this.I),nt(h,"RID",o),nt(h,"CVER",22),this.D&&nt(h,"X-HTTP-Session-Id",this.D),Xn(this,h),V&&(this.O?l="headers="+encodeURIComponent(String(Za(V)))+"&"+l:this.m&&Ni(h,this.m,V)),ki(this.h,A),this.Ua&&nt(h,"TYPE","init"),this.P?(nt(h,"$req",l),nt(h,"SID","null"),A.T=!0,bi(A,h,null)):bi(A,h,l),this.G=2}}else this.G==3&&(o?au(this,o):this.i.length==0||qa(this.h)||au(this))};function au(o,l){var h;l?h=l.l:h=o.U++;const f=$t(o.I);nt(f,"SID",o.K),nt(f,"RID",h),nt(f,"AID",o.T),Xn(o,f),o.m&&o.o&&Ni(f,o.m,o.o),h=new re(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),l&&(o.i=l.D.concat(o.i)),l=uu(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),ki(o.h,h),bi(h,f,l)}function Xn(o,l){o.H&&Q(o.H,function(h,f){nt(l,f,h)}),o.l&&Ga({},function(h,f){nt(l,f,h)})}function uu(o,l,h){h=Math.min(o.i.length,h);var f=o.l?E(o.l.Na,o.l,o):null;t:{var A=o.i;let V=-1;for(;;){const k=["count="+h];V==-1?0<h?(V=A[0].g,k.push("ofs="+V)):V=0:k.push("ofs="+V);let Z=!0;for(let gt=0;gt<h;gt++){let W=A[gt].g;const It=A[gt].map;if(W-=V,0>W)V=Math.max(0,A[gt].g-100),Z=!1;else try{Qd(It,k,"req"+W+"_")}catch{f&&f(It)}}if(Z){f=k.join("&");break t}}}return o=o.i.splice(0,h),l.D=o,f}function lu(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;On||Ia(),Fn||(On(),Fn=!0),gi.add(l,o),o.v=0}}function Oi(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=jn(E(o.Fa,o),du(o,o.v)),o.v++,!0)}r.Fa=function(){if(this.u=null,cu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=jn(E(this.ab,this),o)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Pt(10),es(this),cu(this))};function Fi(o){o.A!=null&&(u.clearTimeout(o.A),o.A=null)}function cu(o){o.g=new re(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=$t(o.qa);nt(l,"RID","rpc"),nt(l,"SID",o.K),nt(l,"AID",o.T),nt(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&nt(l,"TO",o.ja),nt(l,"TYPE","xmlhttp"),Xn(o,l),o.m&&o.o&&Ni(l,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=Xr($t(l)),h.m=null,h.P=!0,Fa(h,o)}r.Za=function(){this.C!=null&&(this.C=null,es(this),Oi(this),Pt(19))};function rs(o){o.C!=null&&(u.clearTimeout(o.C),o.C=null)}function hu(o,l){var h=null;if(o.g==l){rs(o),Fi(o),o.g=null;var f=2}else if(Di(o.h,l))h=l.D,za(o.h,l),f=1;else return;if(o.G!=0){if(l.o)if(f==1){h=l.m?l.m.length:0,l=Date.now()-l.F;var A=o.B;f=Gr(),Vt(f,new ka(f,h)),ns(o)}else lu(o);else if(A=l.s,A==3||A==0&&0<l.X||!(f==1&&Xd(o,l)||f==2&&Oi(o)))switch(h&&0<h.length&&(l=o.h,l.i=l.i.concat(h)),A){case 1:Ve(o,5);break;case 4:Ve(o,10);break;case 3:Ve(o,6);break;default:Ve(o,2)}}}function du(o,l){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*l}function Ve(o,l){if(o.j.info("Error code "+l),l==2){var h=E(o.fb,o),f=o.Xa;const A=!f;f=new Re(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Hr(f,"https"),Xr(f),A?Kd(f.toString(),h):Gd(f.toString(),h)}else Pt(2);o.G=0,o.l&&o.l.sa(l),fu(o),ou(o)}r.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Pt(2)):(this.j.info("Failed to ping google.com"),Pt(1))};function fu(o){if(o.G=0,o.ka=[],o.l){const l=Ka(o.h);(l.length!=0||o.i.length!=0)&&(x(o.ka,l),x(o.ka,o.i),o.h.i.length=0,N(o.i),o.i.length=0),o.l.ra()}}function mu(o,l,h){var f=h instanceof Re?$t(h):new Re(h);if(f.g!="")l&&(f.g=l+"."+f.g),Yr(f,f.s);else{var A=u.location;f=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;var V=new Re(null);f&&Hr(V,f),l&&(V.g=l),A&&Yr(V,A),h&&(V.l=h),f=V}return h=o.D,l=o.ya,h&&l&&nt(f,h,l),nt(f,"VER",o.la),Xn(o,f),f}function gu(o,l,h){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new ot(new Jr({eb:h})):new ot(o.pa),l.Ha(o.J),l}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function pu(){}r=pu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function ss(){}ss.prototype.g=function(o,l){return new xt(o,l)};function xt(o,l){yt.call(this),this.g=new iu(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!j(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!j(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new We(this)}C(xt,yt),xt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},xt.prototype.close=function(){Mi(this.g)},xt.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=wi(o),o=h);l.i.push(new Nd(l.Ya++,o)),l.G==3&&ns(l)},xt.prototype.N=function(){this.g.l=null,delete this.j,Mi(this.g),delete this.g,xt.aa.N.call(this)};function _u(o){Ri.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){t:{for(const h in l){o=h;break t}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}C(_u,Ri);function yu(){Vi.call(this),this.status=1}C(yu,Vi);function We(o){this.g=o}C(We,pu),We.prototype.ua=function(){Vt(this.g,"a")},We.prototype.ta=function(o){Vt(this.g,new _u(o))},We.prototype.sa=function(o){Vt(this.g,new yu)},We.prototype.ra=function(){Vt(this.g,"b")},ss.prototype.createWebChannel=ss.prototype.g,xt.prototype.send=xt.prototype.o,xt.prototype.open=xt.prototype.m,xt.prototype.close=xt.prototype.close,Hl=function(){return new ss},Wl=function(){return Gr()},Ql=we,Wi={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},$r.NO_ERROR=0,$r.TIMEOUT=8,$r.HTTP_ERROR=6,fs=$r,Na.COMPLETE="complete",$l=Na,ba.EventType=Bn,Bn.OPEN="a",Bn.CLOSE="b",Bn.ERROR="c",Bn.MESSAGE="d",yt.prototype.listen=yt.prototype.K,rr=ba,ot.prototype.listenOnce=ot.prototype.L,ot.prototype.getLastError=ot.prototype.Ka,ot.prototype.getLastErrorCode=ot.prototype.Ba,ot.prototype.getStatus=ot.prototype.Z,ot.prototype.getResponseJson=ot.prototype.Oa,ot.prototype.getResponseText=ot.prototype.oa,ot.prototype.send=ot.prototype.ea,ot.prototype.setWithCredentials=ot.prototype.Ha,Gl=ot}).apply(typeof os<"u"?os:typeof self<"u"?self:typeof window<"u"?window:{});const Eu="@firebase/firestore",vu="4.7.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}mt.UNAUTHENTICATED=new mt(null),mt.GOOGLE_CREDENTIALS=new mt("google-credentials-uid"),mt.FIRST_PARTY=new mt("first-party-uid"),mt.MOCK_USER=new mt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bn="11.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le=new Jd("@firebase/firestore");function nn(){return Le.logLevel}function b(r,...t){if(Le.logLevel<=Wt.DEBUG){const e=t.map(wo);Le.debug(`Firestore (${bn}): ${r}`,...e)}}function ut(r,...t){if(Le.logLevel<=Wt.ERROR){const e=t.map(wo);Le.error(`Firestore (${bn}): ${r}`,...e)}}function ln(r,...t){if(Le.logLevel<=Wt.WARN){const e=t.map(wo);Le.warn(`Firestore (${bn}): ${r}`,...e)}}function wo(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(e){return JSON.stringify(e)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(r="Unexpected state"){const t=`FIRESTORE (${bn}) INTERNAL ASSERTION FAILED: `+r;throw ut(t),new Error(t)}function L(r,t){r||O()}function F(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends nf{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class uf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(mt.UNAUTHENTICATED)))}shutdown(){}}class lf{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class cf{constructor(t){this.t=t,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){L(this.o===void 0);let n=this.i;const s=c=>this.i!==n?(n=this.i,e(c)):Promise.resolve();let i=new Yt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Yt,t.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const c=i;t.enqueueRetryable((async()=>{await c.promise,await s(this.currentUser)}))},u=c=>{b("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((c=>u(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?u(c):(b("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Yt)}}),0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((n=>this.i!==t?(b("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(L(typeof n.accessToken=="string"),new Yl(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return L(t===null||typeof t=="string"),new mt(t)}}class hf{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class df{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new hf(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(mt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class wu{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ff{constructor(t,e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,ef(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,e){L(this.o===void 0);const n=i=>{i.error!=null&&b("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,b("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable((()=>n(i)))};const s=i=>{b("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):b("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.V)return Promise.resolve(new wu(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(L(typeof e.token=="string"),this.R=e.token,new wu(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mf(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=mf(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%62))}return n}}function q(r,t){return r<t?-1:r>t?1:0}function Hi(r,t){let e=0;for(;e<r.length&&e<t.length;){const n=r.codePointAt(e),s=t.codePointAt(e);if(n!==s){if(n<128&&s<128)return q(n,s);{const i=Xl(),a=gf(i.encode(Au(r,e)),i.encode(Au(t,e)));return a!==0?a:q(n,s)}}e+=n>65535?2:1}return q(r.length,t.length)}function Au(r,t){return r.codePointAt(t)>65535?r.substring(t,t+2):r.substring(t,t+1)}function gf(r,t){for(let e=0;e<r.length&&e<t.length;++e)if(r[e]!==t[e])return q(r[e],t[e]);return q(r.length,t.length)}function cn(r,t,e){return r.length===t.length&&r.every(((n,s)=>e(n,t[s])))}function Zl(r){return r+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru=-62135596800,Vu=1e6;class it{static now(){return it.fromMillis(Date.now())}static fromDate(t){return it.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*Vu);return new it(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new D(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new D(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Ru)throw new D(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new D(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Vu}_compareTo(t){return this.seconds===t.seconds?q(this.nanoseconds,t.nanoseconds):q(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-Ru;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{static fromTimestamp(t){return new U(t)}static min(){return new U(new it(0,0))}static max(){return new U(new it(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu="__name__";class Bt{constructor(t,e,n){e===void 0?e=0:e>t.length&&O(),n===void 0?n=t.length-e:n>t.length-e&&O(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Bt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Bt?t.forEach((n=>{e.push(n)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const i=Bt.compareSegments(t.get(s),e.get(s));if(i!==0)return i}return q(t.length,e.length)}static compareSegments(t,e){const n=Bt.isNumericId(t),s=Bt.isNumericId(e);return n&&!s?-1:!n&&s?1:n&&s?Bt.extractNumericId(t).compare(Bt.extractNumericId(e)):Hi(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return he.fromString(t.substring(4,t.length-2))}}class Y extends Bt{construct(t,e,n){return new Y(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new D(S.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((s=>s.length>0)))}return new Y(e)}static emptyPath(){return new Y([])}}const pf=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends Bt{construct(t,e,n){return new st(t,e,n)}static isValidIdentifier(t){return pf.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Pu}static keyField(){return new st([Pu])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(n.length===0)throw new D(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let a=!1;for(;s<t.length;){const u=t[s];if(u==="\\"){if(s+1===t.length)throw new D(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new D(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=c,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(n+=u,s++):(i(),s++)}if(i(),a)throw new D(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new st(e)}static emptyPath(){return new st([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(Y.fromString(t))}static fromName(t){return new M(Y.fromString(t).popFirst(5))}static empty(){return new M(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Y.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Y.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new Y(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn=-1;class Rs{constructor(t,e,n,s){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=s}}function Yi(r){return r.fields.find((t=>t.kind===2))}function Se(r){return r.fields.filter((t=>t.kind!==2))}Rs.UNKNOWN_ID=-1;class ms{constructor(t,e){this.fieldPath=t,this.kind=e}}class gr{constructor(t,e){this.sequenceNumber=t,this.offset=e}static empty(){return new gr(0,Ot.min())}}function tc(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=U.fromTimestamp(n===1e9?new it(e+1,0):new it(e,n));return new Ot(s,M.empty(),t)}function ec(r){return new Ot(r.readTime,r.key,hn)}class Ot{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Ot(U.min(),M.empty(),hn)}static max(){return new Ot(U.max(),M.empty(),hn)}}function Ao(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(r.documentKey,t.documentKey),e!==0?e:q(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class rc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ye(r){if(r.code!==S.FAILED_PRECONDITION||r.message!==nc)throw r;b("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&O(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new w(((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(e,i).next(n,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof w?e:w.resolve(e)}catch(e){return w.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):w.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):w.reject(e)}static resolve(t){return new w(((e,n)=>{e(t)}))}static reject(t){return new w(((e,n)=>{n(t)}))}static waitFor(t){return new w(((e,n)=>{let s=0,i=0,a=!1;t.forEach((u=>{++s,u.next((()=>{++i,a&&i===s&&e()}),(c=>n(c)))})),a=!0,i===s&&e()}))}static or(t){let e=w.resolve(!1);for(const n of t)e=e.next((s=>s?w.resolve(s):n()));return e}static forEach(t,e){const n=[];return t.forEach(((s,i)=>{n.push(e.call(this,s,i))})),this.waitFor(n)}static mapArray(t,e){return new w(((n,s)=>{const i=t.length,a=new Array(i);let u=0;for(let c=0;c<i;c++){const d=c;e(t[d]).next((m=>{a[d]=m,++u,u===i&&n(a)}),(m=>s(m)))}}))}static doWhile(t,e){return new w(((n,s)=>{const i=()=>{t()===!0?e().next((()=>{i()}),s):n()};i()}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt="SimpleDb";class $s{static open(t,e,n,s){try{return new $s(e,t.transaction(s,n))}catch(i){throw new ur(e,i)}}constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.m=new Yt,this.transaction.oncomplete=()=>{this.m.resolve()},this.transaction.onabort=()=>{e.error?this.m.reject(new ur(t,e.error)):this.m.resolve()},this.transaction.onerror=n=>{const s=Ro(n.target.error);this.m.reject(new ur(t,s))}}get p(){return this.m.promise}abort(t){t&&this.m.reject(t),this.aborted||(b(Dt,"Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}S(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const e=this.transaction.objectStore(t);return new yf(e)}}class de{static delete(t){return b(Dt,"Removing database:",t),Ce(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!of())return!1;if(de.v())return!0;const t=As(),e=de.C(t),n=0<e&&e<10,s=sc(t),i=0<s&&s<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||n||i)}static v(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.F)==="YES"}static M(t,e){return t.store(e)}static C(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(t,e,n){this.name=t,this.version=e,this.O=n,de.C(As())===12.2&&ut("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async N(t){return this.db||(b(Dt,"Opening database:",this.name),this.db=await new Promise(((e,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const a=i.target.result;e(a)},s.onblocked=()=>{n(new ur(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const a=i.target.error;a.name==="VersionError"?n(new D(S.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):a.name==="InvalidStateError"?n(new D(S.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+a)):n(new ur(t,a))},s.onupgradeneeded=i=>{b(Dt,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const a=i.target.result;this.O.B(a,s.transaction,i.oldVersion,this.version).next((()=>{b(Dt,"Database upgrade to version "+this.version+" complete")}))}}))),this.L&&(this.db.onversionchange=e=>this.L(e)),this.db}k(t){this.L=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,n,s){const i=e==="readonly";let a=0;for(;;){++a;try{this.db=await this.N(t);const u=$s.open(this.db,t,i?"readonly":"readwrite",n),c=s(u).next((d=>(u.S(),d))).catch((d=>(u.abort(d),w.reject(d)))).toPromise();return c.catch((()=>{})),await u.p,c}catch(u){const c=u,d=c.name!=="FirebaseError"&&a<3;if(b(Dt,"Transaction failed with error:",c.message,"Retrying:",d),this.close(),!d)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}function sc(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}class _f{constructor(t){this.q=t,this.$=!1,this.U=null}get isDone(){return this.$}get K(){return this.U}set cursor(t){this.q=t}done(){this.$=!0}W(t){this.U=t}delete(){return Ce(this.q.delete())}}class ur extends D{constructor(t,e){super(S.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function Ie(r){return r.name==="IndexedDbTransactionError"}class yf{constructor(t){this.store=t}put(t,e){let n;return e!==void 0?(b(Dt,"PUT",this.store.name,t,e),n=this.store.put(e,t)):(b(Dt,"PUT",this.store.name,"<auto-key>",t),n=this.store.put(t)),Ce(n)}add(t){return b(Dt,"ADD",this.store.name,t,t),Ce(this.store.add(t))}get(t){return Ce(this.store.get(t)).next((e=>(e===void 0&&(e=null),b(Dt,"GET",this.store.name,t,e),e)))}delete(t){return b(Dt,"DELETE",this.store.name,t),Ce(this.store.delete(t))}count(){return b(Dt,"COUNT",this.store.name),Ce(this.store.count())}G(t,e){const n=this.options(t,e),s=n.index?this.store.index(n.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(n.range);return new w(((a,u)=>{i.onerror=c=>{u(c.target.error)},i.onsuccess=c=>{a(c.target.result)}}))}{const i=this.cursor(n),a=[];return this.j(i,((u,c)=>{a.push(c)})).next((()=>a))}}H(t,e){const n=this.store.getAll(t,e===null?void 0:e);return new w(((s,i)=>{n.onerror=a=>{i(a.target.error)},n.onsuccess=a=>{s(a.target.result)}}))}J(t,e){b(Dt,"DELETE ALL",this.store.name);const n=this.options(t,e);n.Y=!1;const s=this.cursor(n);return this.j(s,((i,a,u)=>u.delete()))}Z(t,e){let n;e?n=t:(n={},e=t);const s=this.cursor(n);return this.j(s,e)}X(t){const e=this.cursor({});return new w(((n,s)=>{e.onerror=i=>{const a=Ro(i.target.error);s(a)},e.onsuccess=i=>{const a=i.target.result;a?t(a.primaryKey,a.value).next((u=>{u?a.continue():n()})):n()}}))}j(t,e){const n=[];return new w(((s,i)=>{t.onerror=a=>{i(a.target.error)},t.onsuccess=a=>{const u=a.target.result;if(!u)return void s();const c=new _f(u),d=e(u.primaryKey,u.value,c);if(d instanceof w){const m=d.catch((g=>(c.done(),w.reject(g))));n.push(m)}c.isDone?s():c.K===null?u.continue():u.continue(c.K)}})).next((()=>w.waitFor(n)))}options(t,e){let n;return t!==void 0&&(typeof t=="string"?n=t:e=t),{index:n,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const n=this.store.index(t.index);return t.Y?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function Ce(r){return new w(((t,e)=>{r.onsuccess=n=>{const s=n.target.result;t(s)},r.onerror=n=>{const s=Ro(n.target.error);e(s)}}))}let Su=!1;function Ro(r){const t=de.C(As());if(t>=12.2&&t<13){const e="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(e)>=0){const n=new D("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Su||(Su=!0,setTimeout((()=>{throw n}),0)),n}}return r}const lr="IndexBackfiller";class If{constructor(t,e){this.asyncQueue=t,this.ee=e,this.task=null}start(){this.te(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}te(t){b(lr,`Scheduled in ${t}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",t,(async()=>{this.task=null;try{const e=await this.ee.ne();b(lr,`Documents written: ${e}`)}catch(e){Ie(e)?b(lr,"Ignoring IndexedDB error during index backfill: ",e):await ye(e)}await this.te(6e4)}))}}class Tf{constructor(t,e){this.localStore=t,this.persistence=e}async ne(t=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(e=>this.re(e,t)))}re(t,e){const n=new Set;let s=e,i=!0;return w.doWhile((()=>i===!0&&s>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(t).next((a=>{if(a!==null&&!n.has(a))return b(lr,`Processing collection: ${a}`),this.ie(t,a,s).next((u=>{s-=u,n.add(a)}));i=!1})))).next((()=>e-s))}ie(t,e,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(t,e).next((s=>this.localStore.localDocuments.getNextDocuments(t,e,s,n).next((i=>{const a=i.changes;return this.localStore.indexManager.updateIndexEntries(t,a).next((()=>this.se(s,i))).next((u=>(b(lr,`Updating offset: ${u}`),this.localStore.indexManager.updateCollectionGroup(t,e,u)))).next((()=>a.size))}))))}se(t,e){let n=t;return e.changes.forEach(((s,i)=>{const a=ec(i);Ao(a,n)>0&&(n=a)})),new Ot(n.readTime,n.documentKey,Math.max(e.batchId,t.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.oe(n),this._e=n=>e.writeSequenceNumber(n))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}bt.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me=-1;function Qs(r){return r==null}function pr(r){return r===0&&1/r==-1/0}function ic(r){return typeof r=="number"&&Number.isInteger(r)&&!pr(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs="";function At(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=bu(t)),t=Ef(r.get(e),t);return bu(t)}function Ef(r,t){let e=t;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":e+="";break;case Vs:e+="";break;default:e+=i}}return e}function bu(r){return r+Vs+""}function jt(r){const t=r.length;if(L(t>=2),t===2)return L(r.charAt(0)===Vs&&r.charAt(1)===""),Y.emptyPath();const e=t-2,n=[];let s="";for(let i=0;i<t;){const a=r.indexOf(Vs,i);switch((a<0||a>e)&&O(),r.charAt(a+1)){case"":const u=r.substring(i,a);let c;s.length===0?c=u:(s+=u,c=s,s=""),n.push(c);break;case"":s+=r.substring(i,a),s+="\0";break;case"":s+=r.substring(i,a+1);break;default:O()}i=a+2}return new Y(n)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be="remoteDocuments",Sr="owner",Ye="owner",_r="mutationQueues",vf="userId",Ut="mutations",Cu="batchId",Ne="userMutationsIndex",xu=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(r,t){return[r,At(t)]}function oc(r,t,e){return[r,At(t),e]}const wf={},dn="documentMutations",Ps="remoteDocumentsV14",Af=["prefixPath","collectionGroup","readTime","documentId"],ps="documentKeyIndex",Rf=["prefixPath","collectionGroup","documentId"],ac="collectionGroupIndex",Vf=["collectionGroup","readTime","prefixPath","documentId"],yr="remoteDocumentGlobal",Xi="remoteDocumentGlobalKey",fn="targets",uc="queryTargetsIndex",Pf=["canonicalId","targetId"],mn="targetDocuments",Sf=["targetId","path"],Vo="documentTargetsIndex",bf=["path","targetId"],Ss="targetGlobalKey",Oe="targetGlobal",Ir="collectionParents",Cf=["collectionId","parent"],gn="clientMetadata",xf="clientId",Ws="bundles",Df="bundleId",Hs="namedQueries",kf="name",Po="indexConfiguration",Nf="indexId",Ji="collectionGroupIndex",Mf="collectionGroup",bs="indexState",Of=["indexId","uid"],lc="sequenceNumberIndex",Ff=["uid","sequenceNumber"],Cs="indexEntries",Lf=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],cc="documentKeyIndex",Uf=["indexId","uid","orderedDocumentKey"],Ys="documentOverlays",Bf=["userId","collectionPath","documentId"],Zi="collectionPathOverlayIndex",qf=["userId","collectionPath","largestBatchId"],hc="collectionGroupOverlayIndex",jf=["userId","collectionGroup","largestBatchId"],So="globals",zf="name",dc=[_r,Ut,dn,be,fn,Sr,Oe,mn,gn,yr,Ir,Ws,Hs],Kf=[...dc,Ys],fc=[_r,Ut,dn,Ps,fn,Sr,Oe,mn,gn,yr,Ir,Ws,Hs,Ys],mc=fc,bo=[...mc,Po,bs,Cs],Gf=bo,$f=[...bo,So];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to extends rc{constructor(t,e){super(),this.ue=t,this.currentSequenceNumber=e}}function dt(r,t){const e=F(r);return de.M(e.ue,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function Te(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function gc(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t,e){this.comparator=t,this.root=e||pt.EMPTY}insert(t,e){return new et(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,pt.BLACK,null,null))}remove(t){return new et(this.comparator,this.root.remove(t,this.comparator).copy(null,null,pt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new as(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new as(this.root,t,this.comparator,!1)}getReverseIterator(){return new as(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new as(this.root,t,this.comparator,!0)}}class as{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class pt{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=n??pt.RED,this.left=s??pt.EMPTY,this.right=i??pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new pt(t??this.key,e??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):i===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return pt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return pt.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw O();const t=this.left.check();if(t!==this.right.check())throw O();return t+(this.isRed()?0:1)}}pt.EMPTY=null,pt.RED=!0,pt.BLACK=!1;pt.EMPTY=new class{constructor(){this.size=0}get key(){throw O()}get value(){throw O()}get color(){throw O()}get left(){throw O()}get right(){throw O()}copy(t,e,n,s,i){return this}insert(t,e,n){return new pt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t){this.comparator=t,this.data=new et(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ku(this.data.getIterator())}getIteratorFrom(t){return new ku(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((n=>{e=e.add(n)})),e}isEqual(t){if(!(t instanceof J)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new J(this.comparator);return e.data=t,e}}class ku{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Xe(r){return r.hasNext()?r.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t){this.fields=t,t.sort(st.comparator)}static empty(){return new Ct([])}unionWith(t){let e=new J(st.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Ct(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return cn(this.fields,t.fields,((e,n)=>e.isEqual(n)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new pc("Invalid base64 string: "+i):i}})(t);return new lt(e)}static fromUint8Array(t){const e=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(t);return new lt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return q(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const Qf=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xt(r){if(L(!!r),typeof r=="string"){let t=0;const e=Qf.exec(r);if(L(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:rt(r.seconds),nanos:rt(r.nanos)}}function rt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Jt(r){return typeof r=="string"?lt.fromBase64String(r):lt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c="server_timestamp",yc="__type__",Ic="__previous_value__",Tc="__local_write_time__";function Co(r){var t,e;return((e=(((t=r?.mapValue)===null||t===void 0?void 0:t.fields)||{})[yc])===null||e===void 0?void 0:e.stringValue)===_c}function Xs(r){const t=r.mapValue.fields[Ic];return Co(t)?Xs(t):t}function Tr(r){const t=Xt(r.mapValue.fields[Tc].timestampValue);return new it(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(t,e,n,s,i,a,u,c,d){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=c,this.useFetchStreams=d}}const xs="(default)";class Ue{constructor(t,e){this.projectId=t,this.database=e||xs}static empty(){return new Ue("","")}get isDefaultDatabase(){return this.database===xs}isEqual(t){return t instanceof Ue&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo="__type__",Ec="__max__",ce={mapValue:{fields:{__type__:{stringValue:Ec}}}},Do="__vector__",pn="value",_s={nullValue:"NULL_VALUE"};function me(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Co(r)?4:vc(r)?9007199254740991:Js(r)?10:11:O()}function Kt(r,t){if(r===t)return!0;const e=me(r);if(e!==me(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Tr(r).isEqual(Tr(t));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Xt(s.timestampValue),u=Xt(i.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos})(r,t);case 5:return r.stringValue===t.stringValue;case 6:return(function(s,i){return Jt(s.bytesValue).isEqual(Jt(i.bytesValue))})(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return(function(s,i){return rt(s.geoPointValue.latitude)===rt(i.geoPointValue.latitude)&&rt(s.geoPointValue.longitude)===rt(i.geoPointValue.longitude)})(r,t);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return rt(s.integerValue)===rt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=rt(s.doubleValue),u=rt(i.doubleValue);return a===u?pr(a)===pr(u):isNaN(a)&&isNaN(u)}return!1})(r,t);case 9:return cn(r.arrayValue.values||[],t.arrayValue.values||[],Kt);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},u=i.mapValue.fields||{};if(Du(a)!==Du(u))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(u[c]===void 0||!Kt(a[c],u[c])))return!1;return!0})(r,t);default:return O()}}function Er(r,t){return(r.values||[]).find((e=>Kt(e,t)))!==void 0}function ge(r,t){if(r===t)return 0;const e=me(r),n=me(t);if(e!==n)return q(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return q(r.booleanValue,t.booleanValue);case 2:return(function(i,a){const u=rt(i.integerValue||i.doubleValue),c=rt(a.integerValue||a.doubleValue);return u<c?-1:u>c?1:u===c?0:isNaN(u)?isNaN(c)?0:-1:1})(r,t);case 3:return Nu(r.timestampValue,t.timestampValue);case 4:return Nu(Tr(r),Tr(t));case 5:return Hi(r.stringValue,t.stringValue);case 6:return(function(i,a){const u=Jt(i),c=Jt(a);return u.compareTo(c)})(r.bytesValue,t.bytesValue);case 7:return(function(i,a){const u=i.split("/"),c=a.split("/");for(let d=0;d<u.length&&d<c.length;d++){const m=q(u[d],c[d]);if(m!==0)return m}return q(u.length,c.length)})(r.referenceValue,t.referenceValue);case 8:return(function(i,a){const u=q(rt(i.latitude),rt(a.latitude));return u!==0?u:q(rt(i.longitude),rt(a.longitude))})(r.geoPointValue,t.geoPointValue);case 9:return Mu(r.arrayValue,t.arrayValue);case 10:return(function(i,a){var u,c,d,m;const g=i.fields||{},E=a.fields||{},P=(u=g[pn])===null||u===void 0?void 0:u.arrayValue,C=(c=E[pn])===null||c===void 0?void 0:c.arrayValue,N=q(((d=P?.values)===null||d===void 0?void 0:d.length)||0,((m=C?.values)===null||m===void 0?void 0:m.length)||0);return N!==0?N:Mu(P,C)})(r.mapValue,t.mapValue);case 11:return(function(i,a){if(i===ce.mapValue&&a===ce.mapValue)return 0;if(i===ce.mapValue)return 1;if(a===ce.mapValue)return-1;const u=i.fields||{},c=Object.keys(u),d=a.fields||{},m=Object.keys(d);c.sort(),m.sort();for(let g=0;g<c.length&&g<m.length;++g){const E=Hi(c[g],m[g]);if(E!==0)return E;const P=ge(u[c[g]],d[m[g]]);if(P!==0)return P}return q(c.length,m.length)})(r.mapValue,t.mapValue);default:throw O()}}function Nu(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return q(r,t);const e=Xt(r),n=Xt(t),s=q(e.seconds,n.seconds);return s!==0?s:q(e.nanos,n.nanos)}function Mu(r,t){const e=r.values||[],n=t.values||[];for(let s=0;s<e.length&&s<n.length;++s){const i=ge(e[s],n[s]);if(i)return i}return q(e.length,n.length)}function _n(r){return eo(r)}function eo(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(e){const n=Xt(e);return`time(${n.seconds},${n.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(e){return Jt(e).toBase64()})(r.bytesValue):"referenceValue"in r?(function(e){return M.fromName(e).toString()})(r.referenceValue):"geoPointValue"in r?(function(e){return`geo(${e.latitude},${e.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(e){let n="[",s=!0;for(const i of e.values||[])s?s=!1:n+=",",n+=eo(i);return n+"]"})(r.arrayValue):"mapValue"in r?(function(e){const n=Object.keys(e.fields||{}).sort();let s="{",i=!0;for(const a of n)i?i=!1:s+=",",s+=`${a}:${eo(e.fields[a])}`;return s+"}"})(r.mapValue):O()}function ys(r){switch(me(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Xs(r);return t?16+ys(t):16;case 5:return 2*r.stringValue.length;case 6:return Jt(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(n){return(n.values||[]).reduce(((s,i)=>s+ys(i)),0)})(r.arrayValue);case 10:case 11:return(function(n){let s=0;return Te(n.fields,((i,a)=>{s+=i.length+ys(a)})),s})(r.mapValue);default:throw O()}}function vr(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function no(r){return!!r&&"integerValue"in r}function wr(r){return!!r&&"arrayValue"in r}function Ou(r){return!!r&&"nullValue"in r}function Fu(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Is(r){return!!r&&"mapValue"in r}function Js(r){var t,e;return((e=(((t=r?.mapValue)===null||t===void 0?void 0:t.fields)||{})[xo])===null||e===void 0?void 0:e.stringValue)===Do}function cr(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return Te(r.mapValue.fields,((e,n)=>t.mapValue.fields[e]=cr(n))),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=cr(r.arrayValue.values[e]);return t}return Object.assign({},r)}function vc(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===Ec}const wc={mapValue:{fields:{[xo]:{stringValue:Do},[pn]:{arrayValue:{}}}}};function Hf(r){return"nullValue"in r?_s:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?vr(Ue.empty(),M.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?Js(r)?wc:{mapValue:{}}:O()}function Yf(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?vr(Ue.empty(),M.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?wc:"mapValue"in r?Js(r)?{mapValue:{}}:ce:O()}function Lu(r,t){const e=ge(r.value,t.value);return e!==0?e:r.inclusive&&!t.inclusive?-1:!r.inclusive&&t.inclusive?1:0}function Uu(r,t){const e=ge(r.value,t.value);return e!==0?e:r.inclusive&&!t.inclusive?1:!r.inclusive&&t.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.value=t}static empty(){return new wt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Is(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=cr(e)}setAll(t){let e=st.emptyPath(),n={},s=[];t.forEach(((a,u)=>{if(!e.isImmediateParentOf(u)){const c=this.getFieldsMap(e);this.applyChanges(c,n,s),n={},s=[],e=u.popLast()}a?n[u.lastSegment()]=cr(a):s.push(u.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());Is(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Kt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];Is(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){Te(e,((s,i)=>t[s]=i));for(const s of n)delete t[s]}clone(){return new wt(cr(this.value))}}function Ac(r){const t=[];return Te(r.fields,((e,n)=>{const s=new st([e]);if(Is(n)){const i=Ac(n.mapValue).fields;if(i.length===0)t.push(s);else for(const a of i)t.push(s.child(a))}else t.push(s)})),new Ct(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t,e,n,s,i,a,u){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=i,this.data=a,this.documentState=u}static newInvalidDocument(t){return new at(t,0,U.min(),U.min(),U.min(),wt.empty(),0)}static newFoundDocument(t,e,n,s){return new at(t,1,e,U.min(),n,s,0)}static newNoDocument(t,e){return new at(t,2,e,U.min(),U.min(),wt.empty(),0)}static newUnknownDocument(t,e){return new at(t,3,e,U.min(),U.min(),wt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof at&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new at(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(t,e){this.position=t,this.inclusive=e}}function Bu(r,t,e){let n=0;for(let s=0;s<r.position.length;s++){const i=t[s],a=r.position[s];if(i.field.isKeyField()?n=M.comparator(M.fromName(a.referenceValue),e.key):n=ge(a,e.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function qu(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!Kt(r.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(t,e="asc"){this.field=t,this.dir=e}}function Xf(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{}class G extends Rc{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new Jf(t,e,n):e==="array-contains"?new em(t,n):e==="in"?new xc(t,n):e==="not-in"?new nm(t,n):e==="array-contains-any"?new rm(t,n):new G(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new Zf(t,n):new tm(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(ge(e,this.value)):e!==null&&me(this.value)===me(e)&&this.matchesComparison(ge(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return O()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class X extends Rc{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new X(t,e)}matches(t){return In(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function In(r){return r.op==="and"}function ro(r){return r.op==="or"}function ko(r){return Vc(r)&&In(r)}function Vc(r){for(const t of r.filters)if(t instanceof X)return!1;return!0}function so(r){if(r instanceof G)return r.field.canonicalString()+r.op.toString()+_n(r.value);if(ko(r))return r.filters.map((t=>so(t))).join(",");{const t=r.filters.map((e=>so(e))).join(",");return`${r.op}(${t})`}}function Pc(r,t){return r instanceof G?(function(n,s){return s instanceof G&&n.op===s.op&&n.field.isEqual(s.field)&&Kt(n.value,s.value)})(r,t):r instanceof X?(function(n,s){return s instanceof X&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce(((i,a,u)=>i&&Pc(a,s.filters[u])),!0):!1})(r,t):void O()}function Sc(r,t){const e=r.filters.concat(t);return X.create(e,r.op)}function bc(r){return r instanceof G?(function(e){return`${e.field.canonicalString()} ${e.op} ${_n(e.value)}`})(r):r instanceof X?(function(e){return e.op.toString()+" {"+e.getFilters().map(bc).join(" ,")+"}"})(r):"Filter"}class Jf extends G{constructor(t,e,n){super(t,e,n),this.key=M.fromName(n.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class Zf extends G{constructor(t,e){super(t,"in",e),this.keys=Cc("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class tm extends G{constructor(t,e){super(t,"not-in",e),this.keys=Cc("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Cc(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map((n=>M.fromName(n.referenceValue)))}class em extends G{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return wr(e)&&Er(e.arrayValue,this.value)}}class xc extends G{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Er(this.value.arrayValue,e)}}class nm extends G{constructor(t,e){super(t,"not-in",e)}matches(t){if(Er(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Er(this.value.arrayValue,e)}}class rm extends G{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!wr(e)||!e.arrayValue.values)&&e.arrayValue.values.some((n=>Er(this.value.arrayValue,n)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(t,e=null,n=[],s=[],i=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=a,this.endAt=u,this.le=null}}function io(r,t=null,e=[],n=[],s=null,i=null,a=null){return new sm(r,t,e,n,s,i,a)}function Be(r){const t=F(r);if(t.le===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((n=>so(n))).join(","),e+="|ob:",e+=t.orderBy.map((n=>(function(i){return i.field.canonicalString()+i.dir})(n))).join(","),Qs(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((n=>_n(n))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((n=>_n(n))).join(",")),t.le=e}return t.le}function br(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!Xf(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!Pc(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!qu(r.startAt,t.startAt)&&qu(r.endAt,t.endAt)}function Ds(r){return M.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function ks(r,t){return r.filters.filter((e=>e instanceof G&&e.field.isEqual(t)))}function ju(r,t,e){let n=_s,s=!0;for(const i of ks(r,t)){let a=_s,u=!0;switch(i.op){case"<":case"<=":a=Hf(i.value);break;case"==":case"in":case">=":a=i.value;break;case">":a=i.value,u=!1;break;case"!=":case"not-in":a=_s}Lu({value:n,inclusive:s},{value:a,inclusive:u})<0&&(n=a,s=u)}if(e!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(t)){const a=e.position[i];Lu({value:n,inclusive:s},{value:a,inclusive:e.inclusive})<0&&(n=a,s=e.inclusive);break}}return{value:n,inclusive:s}}function zu(r,t,e){let n=ce,s=!0;for(const i of ks(r,t)){let a=ce,u=!0;switch(i.op){case">=":case">":a=Yf(i.value),u=!1;break;case"==":case"in":case"<=":a=i.value;break;case"<":a=i.value,u=!1;break;case"!=":case"not-in":a=ce}Uu({value:n,inclusive:s},{value:a,inclusive:u})>0&&(n=a,s=u)}if(e!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(t)){const a=e.position[i];Uu({value:n,inclusive:s},{value:a,inclusive:e.inclusive})>0&&(n=a,s=e.inclusive);break}}return{value:n,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(t,e=null,n=[],s=[],i=null,a="F",u=null,c=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=a,this.startAt=u,this.endAt=c,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function Dc(r,t,e,n,s,i,a,u){return new Cn(r,t,e,n,s,i,a,u)}function Cr(r){return new Cn(r)}function Ku(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function kc(r){return r.collectionGroup!==null}function hr(r){const t=F(r);if(t.he===null){t.he=[];const e=new Set;for(const i of t.explicitOrderBy)t.he.push(i),e.add(i.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new J(st.comparator);return a.filters.forEach((c=>{c.getFlattenedFilters().forEach((d=>{d.isInequality()&&(u=u.add(d.field))}))})),u})(t).forEach((i=>{e.has(i.canonicalString())||i.isKeyField()||t.he.push(new Ar(i,n))})),e.has(st.keyField().canonicalString())||t.he.push(new Ar(st.keyField(),n))}return t.he}function Nt(r){const t=F(r);return t.Pe||(t.Pe=im(t,hr(r))),t.Pe}function im(r,t){if(r.limitType==="F")return io(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Ar(s.field,i)}));const e=r.endAt?new yn(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new yn(r.startAt.position,r.startAt.inclusive):null;return io(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function oo(r,t){const e=r.filters.concat([t]);return new Cn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),e,r.limit,r.limitType,r.startAt,r.endAt)}function Ns(r,t,e){return new Cn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function Zs(r,t){return br(Nt(r),Nt(t))&&r.limitType===t.limitType}function Nc(r){return`${Be(Nt(r))}|lt:${r.limitType}`}function rn(r){return`Query(target=${(function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map((s=>bc(s))).join(", ")}]`),Qs(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((s=>_n(s))).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((s=>_n(s))).join(",")),`Target(${n})`})(Nt(r))}; limitType=${r.limitType})`}function xr(r,t){return t.isFoundDocument()&&(function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):M.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)})(r,t)&&(function(n,s){for(const i of hr(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(r,t)&&(function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0})(r,t)&&(function(n,s){return!(n.startAt&&!(function(a,u,c){const d=Bu(a,u,c);return a.inclusive?d<=0:d<0})(n.startAt,hr(n),s)||n.endAt&&!(function(a,u,c){const d=Bu(a,u,c);return a.inclusive?d>=0:d>0})(n.endAt,hr(n),s))})(r,t)}function Mc(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Oc(r){return(t,e)=>{let n=!1;for(const s of hr(r)){const i=om(s,t,e);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function om(r,t,e){const n=r.field.isKeyField()?M.comparator(t.key,e.key):(function(i,a,u){const c=a.data.field(i),d=u.data.field(i);return c!==null&&d!==null?ge(c,d):O()})(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return O()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return n.length===1?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Te(this.inner,((e,n)=>{for(const[s,i]of n)t(s,i)}))}isEmpty(){return gc(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am=new et(M.comparator);function kt(){return am}const Fc=new et(M.comparator);function sr(...r){let t=Fc;for(const e of r)t=t.insert(e.key,e);return t}function Lc(r){let t=Fc;return r.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function zt(){return dr()}function Uc(){return dr()}function dr(){return new te((r=>r.toString()),((r,t)=>r.isEqual(t)))}const um=new et(M.comparator),lm=new J(M.comparator);function K(...r){let t=lm;for(const e of r)t=t.add(e);return t}const cm=new J(q);function No(){return cm}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:pr(t)?"-0":t}}function Bc(r){return{integerValue:""+r}}function hm(r,t){return ic(t)?Bc(t):Mo(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(){this._=void 0}}function dm(r,t,e){return r instanceof Tn?(function(s,i){const a={fields:{[yc]:{stringValue:_c},[Tc]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Co(i)&&(i=Xs(i)),i&&(a.fields[Ic]=i),{mapValue:a}})(e,t):r instanceof En?jc(r,t):r instanceof vn?zc(r,t):(function(s,i){const a=qc(s,i),u=Gu(a)+Gu(s.Ie);return no(a)&&no(s.Ie)?Bc(u):Mo(s.serializer,u)})(r,t)}function fm(r,t,e){return r instanceof En?jc(r,t):r instanceof vn?zc(r,t):e}function qc(r,t){return r instanceof Rr?(function(n){return no(n)||(function(i){return!!i&&"doubleValue"in i})(n)})(t)?t:{integerValue:0}:null}class Tn extends ti{}class En extends ti{constructor(t){super(),this.elements=t}}function jc(r,t){const e=Kc(t);for(const n of r.elements)e.some((s=>Kt(s,n)))||e.push(n);return{arrayValue:{values:e}}}class vn extends ti{constructor(t){super(),this.elements=t}}function zc(r,t){let e=Kc(t);for(const n of r.elements)e=e.filter((s=>!Kt(s,n)));return{arrayValue:{values:e}}}class Rr extends ti{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function Gu(r){return rt(r.integerValue||r.doubleValue)}function Kc(r){return wr(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(t,e){this.field=t,this.transform=e}}function mm(r,t){return r.field.isEqual(t.field)&&(function(n,s){return n instanceof En&&s instanceof En||n instanceof vn&&s instanceof vn?cn(n.elements,s.elements,Kt):n instanceof Rr&&s instanceof Rr?Kt(n.Ie,s.Ie):n instanceof Tn&&s instanceof Tn})(r.transform,t.transform)}class gm{constructor(t,e){this.version=t,this.transformResults=e}}class ht{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ht}static exists(t){return new ht(void 0,t)}static updateTime(t){return new ht(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ts(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class ei{}function $c(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Dr(r.key,ht.none()):new xn(r.key,r.data,ht.none());{const e=r.data,n=wt.empty();let s=new J(st.comparator);for(let i of t.fields)if(!s.has(i)){let a=e.field(i);a===null&&i.length>1&&(i=i.popLast(),a=e.field(i)),a===null?n.delete(i):n.set(i,a),s=s.add(i)}return new ee(r.key,n,new Ct(s.toArray()),ht.none())}}function pm(r,t,e){r instanceof xn?(function(s,i,a){const u=s.value.clone(),c=Qu(s.fieldTransforms,i,a.transformResults);u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(r,t,e):r instanceof ee?(function(s,i,a){if(!Ts(s.precondition,i))return void i.convertToUnknownDocument(a.version);const u=Qu(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(Qc(s)),c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(r,t,e):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,t,e)}function fr(r,t,e,n){return r instanceof xn?(function(i,a,u,c){if(!Ts(i.precondition,a))return u;const d=i.value.clone(),m=Wu(i.fieldTransforms,c,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(r,t,e,n):r instanceof ee?(function(i,a,u,c){if(!Ts(i.precondition,a))return u;const d=Wu(i.fieldTransforms,c,a),m=a.data;return m.setAll(Qc(i)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),u===null?null:u.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((g=>g.field)))})(r,t,e,n):(function(i,a,u){return Ts(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u})(r,t,e)}function _m(r,t){let e=null;for(const n of r.fieldTransforms){const s=t.data.field(n.field),i=qc(n.transform,s||null);i!=null&&(e===null&&(e=wt.empty()),e.set(n.field,i))}return e||null}function $u(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!(function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&cn(n,s,((i,a)=>mm(i,a)))})(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class xn extends ei{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ee extends ei{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Qc(r){const t=new Map;return r.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}})),t}function Qu(r,t,e){const n=new Map;L(r.length===e.length);for(let s=0;s<e.length;s++){const i=r[s],a=i.transform,u=t.data.field(i.field);n.set(i.field,fm(a,u,e[s]))}return n}function Wu(r,t,e){const n=new Map;for(const s of r){const i=s.transform,a=e.data.field(s.field);n.set(s.field,dm(i,a,t))}return n}class Dr extends ei{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Wc extends ei{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&pm(i,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=fr(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=fr(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Uc();return this.mutations.forEach((s=>{const i=t.get(s.key),a=i.overlayedDocument;let u=this.applyToLocalView(a,i.mutatedFields);u=e.has(s.key)?null:u;const c=$c(a,u);c!==null&&n.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(U.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),K())}isEqual(t){return this.batchId===t.batchId&&cn(this.mutations,t.mutations,((e,n)=>$u(e,n)))&&cn(this.baseMutations,t.baseMutations,((e,n)=>$u(e,n)))}}class Fo{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){L(t.mutations.length===n.length);let s=(function(){return um})();const i=t.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,n[a].version);return new Fo(t,e,n,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ct,$;function Im(r){switch(r){case S.OK:return O();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return O()}}function Hc(r){if(r===void 0)return ut("GRPC error has no .code"),S.UNKNOWN;switch(r){case ct.OK:return S.OK;case ct.CANCELLED:return S.CANCELLED;case ct.UNKNOWN:return S.UNKNOWN;case ct.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case ct.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case ct.INTERNAL:return S.INTERNAL;case ct.UNAVAILABLE:return S.UNAVAILABLE;case ct.UNAUTHENTICATED:return S.UNAUTHENTICATED;case ct.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case ct.NOT_FOUND:return S.NOT_FOUND;case ct.ALREADY_EXISTS:return S.ALREADY_EXISTS;case ct.PERMISSION_DENIED:return S.PERMISSION_DENIED;case ct.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case ct.ABORTED:return S.ABORTED;case ct.OUT_OF_RANGE:return S.OUT_OF_RANGE;case ct.UNIMPLEMENTED:return S.UNIMPLEMENTED;case ct.DATA_LOSS:return S.DATA_LOSS;default:return O()}}($=ct||(ct={}))[$.OK=0]="OK",$[$.CANCELLED=1]="CANCELLED",$[$.UNKNOWN=2]="UNKNOWN",$[$.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$[$.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$[$.NOT_FOUND=5]="NOT_FOUND",$[$.ALREADY_EXISTS=6]="ALREADY_EXISTS",$[$.PERMISSION_DENIED=7]="PERMISSION_DENIED",$[$.UNAUTHENTICATED=16]="UNAUTHENTICATED",$[$.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$[$.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$[$.ABORTED=10]="ABORTED",$[$.OUT_OF_RANGE=11]="OUT_OF_RANGE",$[$.UNIMPLEMENTED=12]="UNIMPLEMENTED",$[$.INTERNAL=13]="INTERNAL",$[$.UNAVAILABLE=14]="UNAVAILABLE",$[$.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm=new he([4294967295,4294967295],0);function Hu(r){const t=Xl().encode(r),e=new Kl;return e.update(t),new Uint8Array(e.digest())}function Yu(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new he([e,n],0),new he([s,i],0)]}class Uo{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new ir(`Invalid padding: ${e}`);if(n<0)throw new ir(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new ir(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new ir(`Invalid padding when bitmap length is 0: ${e}`);this.Ee=8*t.length-e,this.de=he.fromNumber(this.Ee)}Ae(t,e,n){let s=t.add(e.multiply(he.fromNumber(n)));return s.compare(Tm)===1&&(s=new he([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.Ee===0)return!1;const e=Hu(t),[n,s]=Yu(e);for(let i=0;i<this.hashCount;i++){const a=this.Ae(n,s,i);if(!this.Re(a))return!1}return!0}static create(t,e,n){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),a=new Uo(i,s,e);return n.forEach((u=>a.insert(u))),a}insert(t){if(this.Ee===0)return;const e=Hu(t),[n,s]=Yu(e);for(let i=0;i<this.hashCount;i++){const a=this.Ae(n,s,i);this.Ve(a)}}Ve(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class ir extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,Nr.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new kr(U.min(),s,new et(q),kt(),K())}}class Nr{constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Nr(n,e,K(),K(),K())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(t,e,n,s){this.me=t,this.removedTargetIds=e,this.key=n,this.fe=s}}class Yc{constructor(t,e){this.targetId=t,this.ge=e}}class Xc{constructor(t,e,n=lt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class Xu{constructor(){this.pe=0,this.ye=Ju(),this.we=lt.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(t){t.approximateByteSize()>0&&(this.be=!0,this.we=t)}Fe(){let t=K(),e=K(),n=K();return this.ye.forEach(((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:O()}})),new Nr(this.we,this.Se,t,e,n)}Me(){this.be=!1,this.ye=Ju()}xe(t,e){this.be=!0,this.ye=this.ye.insert(t,e)}Oe(t){this.be=!0,this.ye=this.ye.remove(t)}Ne(){this.pe+=1}Be(){this.pe-=1,L(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class Em{constructor(t){this.ke=t,this.qe=new Map,this.Qe=kt(),this.$e=us(),this.Ue=us(),this.Ke=new et(q)}We(t){for(const e of t.me)t.fe&&t.fe.isFoundDocument()?this.Ge(e,t.fe):this.ze(e,t.key,t.fe);for(const e of t.removedTargetIds)this.ze(e,t.key,t.fe)}je(t){this.forEachTarget(t,(e=>{const n=this.He(e);switch(t.state){case 0:this.Je(e)&&n.Ce(t.resumeToken);break;case 1:n.Be(),n.De||n.Me(),n.Ce(t.resumeToken);break;case 2:n.Be(),n.De||this.removeTarget(e);break;case 3:this.Je(e)&&(n.Le(),n.Ce(t.resumeToken));break;case 4:this.Je(e)&&(this.Ye(e),n.Ce(t.resumeToken));break;default:O()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.qe.forEach(((n,s)=>{this.Je(s)&&e(s)}))}Ze(t){const e=t.targetId,n=t.ge.count,s=this.Xe(e);if(s){const i=s.target;if(Ds(i))if(n===0){const a=new M(i.path);this.ze(e,a,at.newNoDocument(a,U.min()))}else L(n===1);else{const a=this.et(e);if(a!==n){const u=this.tt(t),c=u?this.nt(u,t,a):1;if(c!==0){this.Ye(e);const d=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,d)}}}}}tt(t){const e=t.ge.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=e;let a,u;try{a=Jt(n).toUint8Array()}catch(c){if(c instanceof pc)return ln("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{u=new Uo(a,s,i)}catch(c){return ln(c instanceof ir?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return u.Ee===0?null:u}nt(t,e,n){return e.ge.count===n-this.st(t,e.targetId)?0:2}st(t,e){const n=this.ke.getRemoteKeysForTarget(e);let s=0;return n.forEach((i=>{const a=this.ke.it(),u=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;t.mightContain(u)||(this.ze(e,i,null),s++)})),s}ot(t){const e=new Map;this.qe.forEach(((i,a)=>{const u=this.Xe(a);if(u){if(i.current&&Ds(u.target)){const c=new M(u.target.path);this._t(c).has(a)||this.ut(a,c)||this.ze(a,c,at.newNoDocument(c,t))}i.ve&&(e.set(a,i.Fe()),i.Me())}}));let n=K();this.Ue.forEach(((i,a)=>{let u=!0;a.forEachWhile((c=>{const d=this.Xe(c);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)})),u&&(n=n.add(i))})),this.Qe.forEach(((i,a)=>a.setReadTime(t)));const s=new kr(t,e,this.Ke,this.Qe,n);return this.Qe=kt(),this.$e=us(),this.Ue=us(),this.Ke=new et(q),s}Ge(t,e){if(!this.Je(t))return;const n=this.ut(t,e.key)?2:0;this.He(t).xe(e.key,n),this.Qe=this.Qe.insert(e.key,e),this.$e=this.$e.insert(e.key,this._t(e.key).add(t)),this.Ue=this.Ue.insert(e.key,this.ct(e.key).add(t))}ze(t,e,n){if(!this.Je(t))return;const s=this.He(t);this.ut(t,e)?s.xe(e,1):s.Oe(e),this.Ue=this.Ue.insert(e,this.ct(e).delete(t)),this.Ue=this.Ue.insert(e,this.ct(e).add(t)),n&&(this.Qe=this.Qe.insert(e,n))}removeTarget(t){this.qe.delete(t)}et(t){const e=this.He(t).Fe();return this.ke.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ne(t){this.He(t).Ne()}He(t){let e=this.qe.get(t);return e||(e=new Xu,this.qe.set(t,e)),e}ct(t){let e=this.Ue.get(t);return e||(e=new J(q),this.Ue=this.Ue.insert(t,e)),e}_t(t){let e=this.$e.get(t);return e||(e=new J(q),this.$e=this.$e.insert(t,e)),e}Je(t){const e=this.Xe(t)!==null;return e||b("WatchChangeAggregator","Detected inactive target",t),e}Xe(t){const e=this.qe.get(t);return e&&e.De?null:this.ke.lt(t)}Ye(t){this.qe.set(t,new Xu),this.ke.getRemoteKeysForTarget(t).forEach((e=>{this.ze(t,e,null)}))}ut(t,e){return this.ke.getRemoteKeysForTarget(t).has(e)}}function us(){return new et(M.comparator)}function Ju(){return new et(M.comparator)}const vm={asc:"ASCENDING",desc:"DESCENDING"},wm={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Am={and:"AND",or:"OR"};class Rm{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ao(r,t){return r.useProto3Json||Qs(t)?t:{value:t}}function wn(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Jc(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function Vm(r,t){return wn(r,t.toTimestamp())}function St(r){return L(!!r),U.fromTimestamp((function(e){const n=Xt(e);return new it(n.seconds,n.nanos)})(r))}function Bo(r,t){return uo(r,t).canonicalString()}function uo(r,t){const e=(function(s){return new Y(["projects",s.projectId,"databases",s.database])})(r).child("documents");return t===void 0?e:e.child(t)}function Zc(r){const t=Y.fromString(r);return L(uh(t)),t}function Ms(r,t){return Bo(r.databaseId,t.path)}function Fe(r,t){const e=Zc(t);if(e.get(1)!==r.databaseId.projectId)throw new D(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new D(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new M(nh(e))}function th(r,t){return Bo(r.databaseId,t)}function eh(r){const t=Zc(r);return t.length===4?Y.emptyPath():nh(t)}function lo(r){return new Y(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function nh(r){return L(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function Zu(r,t,e){return{name:Ms(r,t),fields:e.value.mapValue.fields}}function Pm(r,t,e){const n=Fe(r,t.name),s=St(t.updateTime),i=t.createTime?St(t.createTime):U.min(),a=new wt({mapValue:{fields:t.fields}}),u=at.newFoundDocument(n,s,i,a);return e&&u.setHasCommittedMutations(),e?u.setHasCommittedMutations():u}function Sm(r,t){let e;if("targetChange"in t){t.targetChange;const n=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:O()})(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=(function(d,m){return d.useProto3Json?(L(m===void 0||typeof m=="string"),lt.fromBase64String(m||"")):(L(m===void 0||m instanceof Buffer||m instanceof Uint8Array),lt.fromUint8Array(m||new Uint8Array))})(r,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&(function(d){const m=d.code===void 0?S.UNKNOWN:Hc(d.code);return new D(m,d.message||"")})(a);e=new Xc(n,s,i,u||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const s=Fe(r,n.document.name),i=St(n.document.updateTime),a=n.document.createTime?St(n.document.createTime):U.min(),u=new wt({mapValue:{fields:n.document.fields}}),c=at.newFoundDocument(s,i,a,u),d=n.targetIds||[],m=n.removedTargetIds||[];e=new Es(d,m,c.key,c)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const s=Fe(r,n.document),i=n.readTime?St(n.readTime):U.min(),a=at.newNoDocument(s,i),u=n.removedTargetIds||[];e=new Es([],u,a.key,a)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const s=Fe(r,n.document),i=n.removedTargetIds||[];e=new Es([],i,s,null)}else{if(!("filter"in t))return O();{t.filter;const n=t.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,a=new ym(s,i),u=n.targetId;e=new Yc(u,a)}}return e}function Os(r,t){let e;if(t instanceof xn)e={update:Zu(r,t.key,t.value)};else if(t instanceof Dr)e={delete:Ms(r,t.key)};else if(t instanceof ee)e={update:Zu(r,t.key,t.data),updateMask:Nm(t.fieldMask)};else{if(!(t instanceof Wc))return O();e={verify:Ms(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((n=>(function(i,a){const u=a.transform;if(u instanceof Tn)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof En)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof vn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Rr)return{fieldPath:a.field.canonicalString(),increment:u.Ie};throw O()})(0,n)))),t.precondition.isNone||(e.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:Vm(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:O()})(r,t.precondition)),e}function co(r,t){const e=t.currentDocument?(function(i){return i.updateTime!==void 0?ht.updateTime(St(i.updateTime)):i.exists!==void 0?ht.exists(i.exists):ht.none()})(t.currentDocument):ht.none(),n=t.updateTransforms?t.updateTransforms.map((s=>(function(a,u){let c=null;if("setToServerValue"in u)L(u.setToServerValue==="REQUEST_TIME"),c=new Tn;else if("appendMissingElements"in u){const m=u.appendMissingElements.values||[];c=new En(m)}else if("removeAllFromArray"in u){const m=u.removeAllFromArray.values||[];c=new vn(m)}else"increment"in u?c=new Rr(a,u.increment):O();const d=st.fromServerFormat(u.fieldPath);return new Gc(d,c)})(r,s))):[];if(t.update){t.update.name;const s=Fe(r,t.update.name),i=new wt({mapValue:{fields:t.update.fields}});if(t.updateMask){const a=(function(c){const d=c.fieldPaths||[];return new Ct(d.map((m=>st.fromServerFormat(m))))})(t.updateMask);return new ee(s,i,a,e,n)}return new xn(s,i,e,n)}if(t.delete){const s=Fe(r,t.delete);return new Dr(s,e)}if(t.verify){const s=Fe(r,t.verify);return new Wc(s,e)}return O()}function bm(r,t){return r&&r.length>0?(L(t!==void 0),r.map((e=>(function(s,i){let a=s.updateTime?St(s.updateTime):St(i);return a.isEqual(U.min())&&(a=St(i)),new gm(a,s.transformResults||[])})(e,t)))):[]}function rh(r,t){return{documents:[th(r,t.path)]}}function sh(r,t){const e={structuredQuery:{}},n=t.path;let s;t.collectionGroup!==null?(s=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=th(r,s);const i=(function(d){if(d.length!==0)return ah(X.create(d,"and"))})(t.filters);i&&(e.structuredQuery.where=i);const a=(function(d){if(d.length!==0)return d.map((m=>(function(E){return{field:sn(E.field),direction:xm(E.dir)}})(m)))})(t.orderBy);a&&(e.structuredQuery.orderBy=a);const u=ao(r,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(t.endAt)),{ht:e,parent:s}}function ih(r){let t=eh(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let s=null;if(n>0){L(n===1);const m=e.from[0];m.allDescendants?s=m.collectionId:t=t.child(m.collectionId)}let i=[];e.where&&(i=(function(g){const E=oh(g);return E instanceof X&&ko(E)?E.getFilters():[E]})(e.where));let a=[];e.orderBy&&(a=(function(g){return g.map((E=>(function(C){return new Ar(on(C.field),(function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(C.direction))})(E)))})(e.orderBy));let u=null;e.limit&&(u=(function(g){let E;return E=typeof g=="object"?g.value:g,Qs(E)?null:E})(e.limit));let c=null;e.startAt&&(c=(function(g){const E=!!g.before,P=g.values||[];return new yn(P,E)})(e.startAt));let d=null;return e.endAt&&(d=(function(g){const E=!g.before,P=g.values||[];return new yn(P,E)})(e.endAt)),Dc(t,s,a,i,u,"F",c,d)}function Cm(r,t){const e=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return O()}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function oh(r){return r.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=on(e.unaryFilter.field);return G.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=on(e.unaryFilter.field);return G.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=on(e.unaryFilter.field);return G.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=on(e.unaryFilter.field);return G.create(a,"!=",{nullValue:"NULL_VALUE"});default:return O()}})(r):r.fieldFilter!==void 0?(function(e){return G.create(on(e.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}})(e.fieldFilter.op),e.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(e){return X.create(e.compositeFilter.filters.map((n=>oh(n))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return O()}})(e.compositeFilter.op))})(r):O()}function xm(r){return vm[r]}function Dm(r){return wm[r]}function km(r){return Am[r]}function sn(r){return{fieldPath:r.canonicalString()}}function on(r){return st.fromServerFormat(r.fieldPath)}function ah(r){return r instanceof G?(function(e){if(e.op==="=="){if(Fu(e.value))return{unaryFilter:{field:sn(e.field),op:"IS_NAN"}};if(Ou(e.value))return{unaryFilter:{field:sn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Fu(e.value))return{unaryFilter:{field:sn(e.field),op:"IS_NOT_NAN"}};if(Ou(e.value))return{unaryFilter:{field:sn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:sn(e.field),op:Dm(e.op),value:e.value}}})(r):r instanceof X?(function(e){const n=e.getFilters().map((s=>ah(s)));return n.length===1?n[0]:{compositeFilter:{op:km(e.op),filters:n}}})(r):O()}function Nm(r){const t=[];return r.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function uh(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(t,e,n,s,i=U.min(),a=U.min(),u=lt.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=c}withSequenceNumber(t){return new Ht(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ht(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(t){this.Tt=t}}function Mm(r,t){let e;if(t.document)e=Pm(r.Tt,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const n=M.fromSegments(t.noDocument.path),s=je(t.noDocument.readTime);e=at.newNoDocument(n,s),t.hasCommittedMutations&&e.setHasCommittedMutations()}else{if(!t.unknownDocument)return O();{const n=M.fromSegments(t.unknownDocument.path),s=je(t.unknownDocument.version);e=at.newUnknownDocument(n,s)}}return t.readTime&&e.setReadTime((function(s){const i=new it(s[0],s[1]);return U.fromTimestamp(i)})(t.readTime)),e}function tl(r,t){const e=t.key,n={prefixPath:e.getCollectionPath().popLast().toArray(),collectionGroup:e.collectionGroup,documentId:e.path.lastSegment(),readTime:Fs(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())n.document=(function(i,a){return{name:Ms(i,a.key),fields:a.data.value.mapValue.fields,updateTime:wn(i,a.version.toTimestamp()),createTime:wn(i,a.createTime.toTimestamp())}})(r.Tt,t);else if(t.isNoDocument())n.noDocument={path:e.path.toArray(),readTime:qe(t.version)};else{if(!t.isUnknownDocument())return O();n.unknownDocument={path:e.path.toArray(),version:qe(t.version)}}return n}function Fs(r){const t=r.toTimestamp();return[t.seconds,t.nanoseconds]}function qe(r){const t=r.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function je(r){const t=new it(r.seconds,r.nanoseconds);return U.fromTimestamp(t)}function xe(r,t){const e=(t.baseMutations||[]).map((i=>co(r.Tt,i)));for(let i=0;i<t.mutations.length-1;++i){const a=t.mutations[i];if(i+1<t.mutations.length&&t.mutations[i+1].transform!==void 0){const u=t.mutations[i+1];a.updateTransforms=u.transform.fieldTransforms,t.mutations.splice(i+1,1),++i}}const n=t.mutations.map((i=>co(r.Tt,i))),s=it.fromMillis(t.localWriteTimeMs);return new Oo(t.batchId,s,e,n)}function or(r){const t=je(r.readTime),e=r.lastLimboFreeSnapshotVersion!==void 0?je(r.lastLimboFreeSnapshotVersion):U.min();let n;return n=(function(i){return i.documents!==void 0})(r.query)?(function(i){return L(i.documents.length===1),Nt(Cr(eh(i.documents[0])))})(r.query):(function(i){return Nt(ih(i))})(r.query),new Ht(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,t,e,lt.fromBase64String(r.resumeToken))}function ch(r,t){const e=qe(t.snapshotVersion),n=qe(t.lastLimboFreeSnapshotVersion);let s;s=Ds(t.target)?rh(r.Tt,t.target):sh(r.Tt,t.target).ht;const i=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:Be(t.target),readTime:e,resumeToken:i,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:s}}function hh(r){const t=ih({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Ns(t,t.limit,"L"):t}function Ui(r,t){return new Lo(t.largestBatchId,co(r.Tt,t.overlayMutation))}function el(r,t){const e=t.path.lastSegment();return[r,At(t.path.popLast()),e]}function nl(r,t,e,n){return{indexId:r,uid:t,sequenceNumber:e,readTime:qe(n.readTime),documentKey:At(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{getBundleMetadata(t,e){return rl(t).get(e).next((n=>{if(n)return(function(i){return{id:i.bundleId,createTime:je(i.createTime),version:i.version}})(n)}))}saveBundleMetadata(t,e){return rl(t).put((function(s){return{bundleId:s.id,createTime:qe(St(s.createTime)),version:s.version}})(e))}getNamedQuery(t,e){return sl(t).get(e).next((n=>{if(n)return(function(i){return{name:i.name,query:hh(i.bundledQuery),readTime:je(i.readTime)}})(n)}))}saveNamedQuery(t,e){return sl(t).put((function(s){return{name:s.name,readTime:qe(St(s.readTime)),bundledQuery:s.bundledQuery}})(e))}}function rl(r){return dt(r,Ws)}function sl(r){return dt(r,Hs)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(t,e){this.serializer=t,this.userId=e}static It(t,e){const n=e.uid||"";return new ni(t,n)}getOverlay(t,e){return Jn(t).get(el(this.userId,e)).next((n=>n?Ui(this.serializer,n):null))}getOverlays(t,e){const n=zt();return w.forEach(e,(s=>this.getOverlay(t,s).next((i=>{i!==null&&n.set(s,i)})))).next((()=>n))}saveOverlays(t,e,n){const s=[];return n.forEach(((i,a)=>{const u=new Lo(e,a);s.push(this.Et(t,u))})),w.waitFor(s)}removeOverlaysForBatchId(t,e,n){const s=new Set;e.forEach((a=>s.add(At(a.getCollectionPath()))));const i=[];return s.forEach((a=>{const u=IDBKeyRange.bound([this.userId,a,n],[this.userId,a,n+1],!1,!0);i.push(Jn(t).J(Zi,u))})),w.waitFor(i)}getOverlaysForCollection(t,e,n){const s=zt(),i=At(e),a=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Jn(t).G(Zi,a).next((u=>{for(const c of u){const d=Ui(this.serializer,c);s.set(d.getKey(),d)}return s}))}getOverlaysForCollectionGroup(t,e,n,s){const i=zt();let a;const u=IDBKeyRange.bound([this.userId,e,n],[this.userId,e,Number.POSITIVE_INFINITY],!0);return Jn(t).Z({index:hc,range:u},((c,d,m)=>{const g=Ui(this.serializer,d);i.size()<s||g.largestBatchId===a?(i.set(g.getKey(),g),a=g.largestBatchId):m.done()})).next((()=>i))}Et(t,e){return Jn(t).put((function(s,i,a){const[u,c,d]=el(i,a.mutation.key);return{userId:i,collectionPath:c,documentId:d,collectionGroup:a.mutation.key.getCollectionGroup(),largestBatchId:a.largestBatchId,overlayMutation:Os(s.Tt,a.mutation)}})(this.serializer,this.userId,e))}}function Jn(r){return dt(r,Ys)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{dt(t){return dt(t,So)}getSessionToken(t){return this.dt(t).get("sessionToken").next((e=>{const n=e?.value;return n?lt.fromUint8Array(n):lt.EMPTY_BYTE_STRING}))}setSessionToken(t,e){return this.dt(t).put({name:"sessionToken",value:e.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(){}At(t,e){this.Rt(t,e),e.Vt()}Rt(t,e){if("nullValue"in t)this.ft(e,5);else if("booleanValue"in t)this.ft(e,10),e.gt(t.booleanValue?1:0);else if("integerValue"in t)this.ft(e,15),e.gt(rt(t.integerValue));else if("doubleValue"in t){const n=rt(t.doubleValue);isNaN(n)?this.ft(e,13):(this.ft(e,15),pr(n)?e.gt(0):e.gt(n))}else if("timestampValue"in t){let n=t.timestampValue;this.ft(e,20),typeof n=="string"&&(n=Xt(n)),e.yt(`${n.seconds||""}`),e.gt(n.nanos||0)}else if("stringValue"in t)this.wt(t.stringValue,e),this.St(e);else if("bytesValue"in t)this.ft(e,30),e.bt(Jt(t.bytesValue)),this.St(e);else if("referenceValue"in t)this.Dt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ft(e,45),e.gt(n.latitude||0),e.gt(n.longitude||0)}else"mapValue"in t?vc(t)?this.ft(e,Number.MAX_SAFE_INTEGER):Js(t)?this.vt(t.mapValue,e):(this.Ct(t.mapValue,e),this.St(e)):"arrayValue"in t?(this.Ft(t.arrayValue,e),this.St(e)):O()}wt(t,e){this.ft(e,25),this.Mt(t,e)}Mt(t,e){e.yt(t)}Ct(t,e){const n=t.fields||{};this.ft(e,55);for(const s of Object.keys(n))this.wt(s,e),this.Rt(n[s],e)}vt(t,e){var n,s;const i=t.fields||{};this.ft(e,53);const a=pn,u=((s=(n=i[a].arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.length)||0;this.ft(e,15),e.gt(rt(u)),this.wt(a,e),this.Rt(i[a],e)}Ft(t,e){const n=t.values||[];this.ft(e,50);for(const s of n)this.Rt(s,e)}Dt(t,e){this.ft(e,37),M.fromName(t).path.forEach((n=>{this.ft(e,60),this.Mt(n,e)}))}ft(t,e){t.gt(e)}St(t){t.gt(2)}}De.xt=new De;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je=255;function Lm(r){if(r===0)return 8;let t=0;return r>>4||(t+=4,r<<=4),r>>6||(t+=2,r<<=2),r>>7||(t+=1),t}function il(r){const t=64-(function(n){let s=0;for(let i=0;i<8;++i){const a=Lm(255&n[i]);if(s+=a,a!==8)break}return s})(r);return Math.ceil(t/8)}class Um{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ot(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.Nt(n.value),n=e.next();this.Bt()}Lt(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.kt(n.value),n=e.next();this.qt()}Qt(t){for(const e of t){const n=e.charCodeAt(0);if(n<128)this.Nt(n);else if(n<2048)this.Nt(960|n>>>6),this.Nt(128|63&n);else if(e<"\uD800"||"\uDBFF"<e)this.Nt(480|n>>>12),this.Nt(128|63&n>>>6),this.Nt(128|63&n);else{const s=e.codePointAt(0);this.Nt(240|s>>>18),this.Nt(128|63&s>>>12),this.Nt(128|63&s>>>6),this.Nt(128|63&s)}}this.Bt()}$t(t){for(const e of t){const n=e.charCodeAt(0);if(n<128)this.kt(n);else if(n<2048)this.kt(960|n>>>6),this.kt(128|63&n);else if(e<"\uD800"||"\uDBFF"<e)this.kt(480|n>>>12),this.kt(128|63&n>>>6),this.kt(128|63&n);else{const s=e.codePointAt(0);this.kt(240|s>>>18),this.kt(128|63&s>>>12),this.kt(128|63&s>>>6),this.kt(128|63&s)}}this.qt()}Ut(t){const e=this.Kt(t),n=il(e);this.Wt(1+n),this.buffer[this.position++]=255&n;for(let s=e.length-n;s<e.length;++s)this.buffer[this.position++]=255&e[s]}Gt(t){const e=this.Kt(t),n=il(e);this.Wt(1+n),this.buffer[this.position++]=~(255&n);for(let s=e.length-n;s<e.length;++s)this.buffer[this.position++]=~(255&e[s])}zt(){this.jt(Je),this.jt(255)}Ht(){this.Jt(Je),this.Jt(255)}reset(){this.position=0}seed(t){this.Wt(t.length),this.buffer.set(t,this.position),this.position+=t.length}Yt(){return this.buffer.slice(0,this.position)}Kt(t){const e=(function(i){const a=new DataView(new ArrayBuffer(8));return a.setFloat64(0,i,!1),new Uint8Array(a.buffer)})(t),n=!!(128&e[0]);e[0]^=n?255:128;for(let s=1;s<e.length;++s)e[s]^=n?255:0;return e}Nt(t){const e=255&t;e===0?(this.jt(0),this.jt(255)):e===Je?(this.jt(Je),this.jt(0)):this.jt(e)}kt(t){const e=255&t;e===0?(this.Jt(0),this.Jt(255)):e===Je?(this.Jt(Je),this.Jt(0)):this.Jt(t)}Bt(){this.jt(0),this.jt(1)}qt(){this.Jt(0),this.Jt(1)}jt(t){this.Wt(1),this.buffer[this.position++]=t}Jt(t){this.Wt(1),this.buffer[this.position++]=~t}Wt(t){const e=t+this.position;if(e<=this.buffer.length)return;let n=2*this.buffer.length;n<e&&(n=e);const s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class Bm{constructor(t){this.Zt=t}bt(t){this.Zt.Ot(t)}yt(t){this.Zt.Qt(t)}gt(t){this.Zt.Ut(t)}Vt(){this.Zt.zt()}}class qm{constructor(t){this.Zt=t}bt(t){this.Zt.Lt(t)}yt(t){this.Zt.$t(t)}gt(t){this.Zt.Gt(t)}Vt(){this.Zt.Ht()}}class Zn{constructor(){this.Zt=new Um,this.Xt=new Bm(this.Zt),this.en=new qm(this.Zt)}seed(t){this.Zt.seed(t)}tn(t){return t===0?this.Xt:this.en}Yt(){return this.Zt.Yt()}reset(){this.Zt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(t,e,n,s){this.indexId=t,this.documentKey=e,this.arrayValue=n,this.directionalValue=s}nn(){const t=this.directionalValue.length,e=t===0||this.directionalValue[t-1]===255?t+1:t,n=new Uint8Array(e);return n.set(this.directionalValue,0),e!==t?n.set([0],this.directionalValue.length):++n[n.length-1],new ke(this.indexId,this.documentKey,this.arrayValue,n)}}function oe(r,t){let e=r.indexId-t.indexId;return e!==0?e:(e=ol(r.arrayValue,t.arrayValue),e!==0?e:(e=ol(r.directionalValue,t.directionalValue),e!==0?e:M.comparator(r.documentKey,t.documentKey)))}function ol(r,t){for(let e=0;e<r.length&&e<t.length;++e){const n=r[e]-t[e];if(n!==0)return n}return r.length-t.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(t){this.rn=new J(((e,n)=>st.comparator(e.field,n.field))),this.collectionId=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment(),this.sn=t.orderBy,this._n=[];for(const e of t.filters){const n=e;n.isInequality()?this.rn=this.rn.add(n):this._n.push(n)}}get an(){return this.rn.size>1}un(t){if(L(t.collectionGroup===this.collectionId),this.an)return!1;const e=Yi(t);if(e!==void 0&&!this.cn(e))return!1;const n=Se(t);let s=new Set,i=0,a=0;for(;i<n.length&&this.cn(n[i]);++i)s=s.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.rn.size>0){const u=this.rn.getIterator().getNext();if(!s.has(u.field.canonicalString())){const c=n[i];if(!this.ln(u,c)||!this.hn(this.sn[a++],c))return!1}++i}for(;i<n.length;++i){const u=n[i];if(a>=this.sn.length||!this.hn(this.sn[a++],u))return!1}return!0}Pn(){if(this.an)return null;let t=new J(st.comparator);const e=[];for(const n of this._n)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")e.push(new ms(n.field,2));else{if(t.has(n.field))continue;t=t.add(n.field),e.push(new ms(n.field,0))}for(const n of this.sn)n.field.isKeyField()||t.has(n.field)||(t=t.add(n.field),e.push(new ms(n.field,n.dir==="asc"?0:1)));return new Rs(Rs.UNKNOWN_ID,this.collectionId,e,gr.empty())}cn(t){for(const e of this._n)if(this.ln(e,t))return!0;return!1}ln(t,e){if(t===void 0||!t.field.isEqual(e.fieldPath))return!1;const n=t.op==="array-contains"||t.op==="array-contains-any";return e.kind===2===n}hn(t,e){return!!t.field.isEqual(e.fieldPath)&&(e.kind===0&&t.dir==="asc"||e.kind===1&&t.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(r){var t,e;if(L(r instanceof G||r instanceof X),r instanceof G){if(r instanceof xc){const s=((e=(t=r.value.arrayValue)===null||t===void 0?void 0:t.values)===null||e===void 0?void 0:e.map((i=>G.create(r.field,"==",i))))||[];return X.create(s,"or")}return r}const n=r.filters.map((s=>dh(s)));return X.create(n,r.op)}function jm(r){if(r.getFilters().length===0)return[];const t=mo(dh(r));return L(fh(t)),ho(t)||fo(t)?[t]:t.getFilters()}function ho(r){return r instanceof G}function fo(r){return r instanceof X&&ko(r)}function fh(r){return ho(r)||fo(r)||(function(e){if(e instanceof X&&ro(e)){for(const n of e.getFilters())if(!ho(n)&&!fo(n))return!1;return!0}return!1})(r)}function mo(r){if(L(r instanceof G||r instanceof X),r instanceof G)return r;if(r.filters.length===1)return mo(r.filters[0]);const t=r.filters.map((n=>mo(n)));let e=X.create(t,r.op);return e=Ls(e),fh(e)?e:(L(e instanceof X),L(In(e)),L(e.filters.length>1),e.filters.reduce(((n,s)=>qo(n,s))))}function qo(r,t){let e;return L(r instanceof G||r instanceof X),L(t instanceof G||t instanceof X),e=r instanceof G?t instanceof G?(function(s,i){return X.create([s,i],"and")})(r,t):ul(r,t):t instanceof G?ul(t,r):(function(s,i){if(L(s.filters.length>0&&i.filters.length>0),In(s)&&In(i))return Sc(s,i.getFilters());const a=ro(s)?s:i,u=ro(s)?i:s,c=a.filters.map((d=>qo(d,u)));return X.create(c,"or")})(r,t),Ls(e)}function ul(r,t){if(In(t))return Sc(t,r.getFilters());{const e=t.filters.map((n=>qo(r,n)));return X.create(e,"or")}}function Ls(r){if(L(r instanceof G||r instanceof X),r instanceof G)return r;const t=r.getFilters();if(t.length===1)return Ls(t[0]);if(Vc(r))return r;const e=t.map((s=>Ls(s))),n=[];return e.forEach((s=>{s instanceof G?n.push(s):s instanceof X&&(s.op===r.op?n.push(...s.filters):n.push(s))})),n.length===1?n[0]:X.create(n,r.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(){this.Tn=new jo}addToCollectionParentIndex(t,e){return this.Tn.add(e),w.resolve()}getCollectionParents(t,e){return w.resolve(this.Tn.getEntries(e))}addFieldIndex(t,e){return w.resolve()}deleteFieldIndex(t,e){return w.resolve()}deleteAllFieldIndexes(t){return w.resolve()}createTargetIndexes(t,e){return w.resolve()}getDocumentsMatchingTarget(t,e){return w.resolve(null)}getIndexType(t,e){return w.resolve(0)}getFieldIndexes(t,e){return w.resolve([])}getNextCollectionGroupToUpdate(t){return w.resolve(null)}getMinOffset(t,e){return w.resolve(Ot.min())}getMinOffsetFromCollectionGroup(t,e){return w.resolve(Ot.min())}updateCollectionGroup(t,e,n){return w.resolve()}updateIndexEntries(t,e){return w.resolve()}}class jo{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new J(Y.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new J(Y.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll="IndexedDbIndexManager",ls=new Uint8Array(0);class Km{constructor(t,e){this.databaseId=e,this.In=new jo,this.En=new te((n=>Be(n)),((n,s)=>br(n,s))),this.uid=t.uid||""}addToCollectionParentIndex(t,e){if(!this.In.has(e)){const n=e.lastSegment(),s=e.popLast();t.addOnCommittedListener((()=>{this.In.add(e)}));const i={collectionId:n,parent:At(s)};return cl(t).put(i)}return w.resolve()}getCollectionParents(t,e){const n=[],s=IDBKeyRange.bound([e,""],[Zl(e),""],!1,!0);return cl(t).G(s).next((i=>{for(const a of i){if(a.collectionId!==e)break;n.push(jt(a.parent))}return n}))}addFieldIndex(t,e){const n=tr(t),s=(function(u){return{indexId:u.indexId,collectionGroup:u.collectionGroup,fields:u.fields.map((c=>[c.fieldPath.canonicalString(),c.kind]))}})(e);delete s.indexId;const i=n.add(s);if(e.indexState){const a=tn(t);return i.next((u=>{a.put(nl(u,this.uid,e.indexState.sequenceNumber,e.indexState.offset))}))}return i.next()}deleteFieldIndex(t,e){const n=tr(t),s=tn(t),i=Ze(t);return n.delete(e.indexId).next((()=>s.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0)))).next((()=>i.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0))))}deleteAllFieldIndexes(t){const e=tr(t),n=Ze(t),s=tn(t);return e.J().next((()=>n.J())).next((()=>s.J()))}createTargetIndexes(t,e){return w.forEach(this.dn(e),(n=>this.getIndexType(t,n).next((s=>{if(s===0||s===1){const i=new al(n).Pn();if(i!=null)return this.addFieldIndex(t,i)}}))))}getDocumentsMatchingTarget(t,e){const n=Ze(t);let s=!0;const i=new Map;return w.forEach(this.dn(e),(a=>this.An(t,a).next((u=>{s&&(s=!!u),i.set(a,u)})))).next((()=>{if(s){let a=K();const u=[];return w.forEach(i,((c,d)=>{b(ll,`Using index ${(function(B){return`id=${B.indexId}|cg=${B.collectionGroup}|f=${B.fields.map((H=>`${H.fieldPath}:${H.kind}`)).join(",")}`})(c)} to execute ${Be(e)}`);const m=(function(B,H){const tt=Yi(H);if(tt===void 0)return null;for(const Q of ks(B,tt.fieldPath))switch(Q.op){case"array-contains-any":return Q.value.arrayValue.values||[];case"array-contains":return[Q.value]}return null})(d,c),g=(function(B,H){const tt=new Map;for(const Q of Se(H))for(const I of ks(B,Q.fieldPath))switch(I.op){case"==":case"in":tt.set(Q.fieldPath.canonicalString(),I.value);break;case"not-in":case"!=":return tt.set(Q.fieldPath.canonicalString(),I.value),Array.from(tt.values())}return null})(d,c),E=(function(B,H){const tt=[];let Q=!0;for(const I of Se(H)){const p=I.kind===0?ju(B,I.fieldPath,B.startAt):zu(B,I.fieldPath,B.startAt);tt.push(p.value),Q&&(Q=p.inclusive)}return new yn(tt,Q)})(d,c),P=(function(B,H){const tt=[];let Q=!0;for(const I of Se(H)){const p=I.kind===0?zu(B,I.fieldPath,B.endAt):ju(B,I.fieldPath,B.endAt);tt.push(p.value),Q&&(Q=p.inclusive)}return new yn(tt,Q)})(d,c),C=this.Rn(c,d,E),N=this.Rn(c,d,P),x=this.Vn(c,d,g),z=this.mn(c.indexId,m,C,E.inclusive,N,P.inclusive,x);return w.forEach(z,(j=>n.H(j,e.limit).next((B=>{B.forEach((H=>{const tt=M.fromSegments(H.documentKey);a.has(tt)||(a=a.add(tt),u.push(tt))}))}))))})).next((()=>u))}return w.resolve(null)}))}dn(t){let e=this.En.get(t);return e||(t.filters.length===0?e=[t]:e=jm(X.create(t.filters,"and")).map((n=>io(t.path,t.collectionGroup,t.orderBy,n.getFilters(),t.limit,t.startAt,t.endAt))),this.En.set(t,e),e)}mn(t,e,n,s,i,a,u){const c=(e!=null?e.length:1)*Math.max(n.length,i.length),d=c/(e!=null?e.length:1),m=[];for(let g=0;g<c;++g){const E=e?this.fn(e[g/d]):ls,P=this.gn(t,E,n[g%d],s),C=this.pn(t,E,i[g%d],a),N=u.map((x=>this.gn(t,E,x,!0)));m.push(...this.createRange(P,C,N))}return m}gn(t,e,n,s){const i=new ke(t,M.empty(),e,n);return s?i:i.nn()}pn(t,e,n,s){const i=new ke(t,M.empty(),e,n);return s?i.nn():i}An(t,e){const n=new al(e),s=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment();return this.getFieldIndexes(t,s).next((i=>{let a=null;for(const u of i)n.un(u)&&(!a||u.fields.length>a.fields.length)&&(a=u);return a}))}getIndexType(t,e){let n=2;const s=this.dn(e);return w.forEach(s,(i=>this.An(t,i).next((a=>{a?n!==0&&a.fields.length<(function(c){let d=new J(st.comparator),m=!1;for(const g of c.filters)for(const E of g.getFlattenedFilters())E.field.isKeyField()||(E.op==="array-contains"||E.op==="array-contains-any"?m=!0:d=d.add(E.field));for(const g of c.orderBy)g.field.isKeyField()||(d=d.add(g.field));return d.size+(m?1:0)})(i)&&(n=1):n=0})))).next((()=>(function(a){return a.limit!==null})(e)&&s.length>1&&n===2?1:n))}yn(t,e){const n=new Zn;for(const s of Se(t)){const i=e.data.field(s.fieldPath);if(i==null)return null;const a=n.tn(s.kind);De.xt.At(i,a)}return n.Yt()}fn(t){const e=new Zn;return De.xt.At(t,e.tn(0)),e.Yt()}wn(t,e){const n=new Zn;return De.xt.At(vr(this.databaseId,e),n.tn((function(i){const a=Se(i);return a.length===0?0:a[a.length-1].kind})(t))),n.Yt()}Vn(t,e,n){if(n===null)return[];let s=[];s.push(new Zn);let i=0;for(const a of Se(t)){const u=n[i++];for(const c of s)if(this.Sn(e,a.fieldPath)&&wr(u))s=this.bn(s,a,u);else{const d=c.tn(a.kind);De.xt.At(u,d)}}return this.Dn(s)}Rn(t,e,n){return this.Vn(t,e,n.position)}Dn(t){const e=[];for(let n=0;n<t.length;++n)e[n]=t[n].Yt();return e}bn(t,e,n){const s=[...t],i=[];for(const a of n.arrayValue.values||[])for(const u of s){const c=new Zn;c.seed(u.Yt()),De.xt.At(a,c.tn(e.kind)),i.push(c)}return i}Sn(t,e){return!!t.filters.find((n=>n instanceof G&&n.field.isEqual(e)&&(n.op==="in"||n.op==="not-in")))}getFieldIndexes(t,e){const n=tr(t),s=tn(t);return(e?n.G(Ji,IDBKeyRange.bound(e,e)):n.G()).next((i=>{const a=[];return w.forEach(i,(u=>s.get([u.indexId,this.uid]).next((c=>{a.push((function(m,g){const E=g?new gr(g.sequenceNumber,new Ot(je(g.readTime),new M(jt(g.documentKey)),g.largestBatchId)):gr.empty(),P=m.fields.map((([C,N])=>new ms(st.fromServerFormat(C),N)));return new Rs(m.indexId,m.collectionGroup,P,E)})(u,c))})))).next((()=>a))}))}getNextCollectionGroupToUpdate(t){return this.getFieldIndexes(t).next((e=>e.length===0?null:(e.sort(((n,s)=>{const i=n.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:q(n.collectionGroup,s.collectionGroup)})),e[0].collectionGroup)))}updateCollectionGroup(t,e,n){const s=tr(t),i=tn(t);return this.vn(t).next((a=>s.G(Ji,IDBKeyRange.bound(e,e)).next((u=>w.forEach(u,(c=>i.put(nl(c.indexId,this.uid,a,n))))))))}updateIndexEntries(t,e){const n=new Map;return w.forEach(e,((s,i)=>{const a=n.get(s.collectionGroup);return(a?w.resolve(a):this.getFieldIndexes(t,s.collectionGroup)).next((u=>(n.set(s.collectionGroup,u),w.forEach(u,(c=>this.Cn(t,s,c).next((d=>{const m=this.Fn(i,c);return d.isEqual(m)?w.resolve():this.Mn(t,i,c,d,m)})))))))}))}xn(t,e,n,s){return Ze(t).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.wn(n,e.key),documentKey:e.key.path.toArray()})}On(t,e,n,s){return Ze(t).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.wn(n,e.key),e.key.path.toArray()])}Cn(t,e,n){const s=Ze(t);let i=new J(oe);return s.Z({index:cc,range:IDBKeyRange.only([n.indexId,this.uid,this.wn(n,e)])},((a,u)=>{i=i.add(new ke(n.indexId,e,u.arrayValue,u.directionalValue))})).next((()=>i))}Fn(t,e){let n=new J(oe);const s=this.yn(e,t);if(s==null)return n;const i=Yi(e);if(i!=null){const a=t.data.field(i.fieldPath);if(wr(a))for(const u of a.arrayValue.values||[])n=n.add(new ke(e.indexId,t.key,this.fn(u),s))}else n=n.add(new ke(e.indexId,t.key,ls,s));return n}Mn(t,e,n,s,i){b(ll,"Updating index entries for document '%s'",e.key);const a=[];return(function(c,d,m,g,E){const P=c.getIterator(),C=d.getIterator();let N=Xe(P),x=Xe(C);for(;N||x;){let z=!1,j=!1;if(N&&x){const B=m(N,x);B<0?j=!0:B>0&&(z=!0)}else N!=null?j=!0:z=!0;z?(g(x),x=Xe(C)):j?(E(N),N=Xe(P)):(N=Xe(P),x=Xe(C))}})(s,i,oe,(u=>{a.push(this.xn(t,e,n,u))}),(u=>{a.push(this.On(t,e,n,u))})),w.waitFor(a)}vn(t){let e=1;return tn(t).Z({index:lc,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((n,s,i)=>{i.done(),e=s.sequenceNumber+1})).next((()=>e))}createRange(t,e,n){n=n.sort(((a,u)=>oe(a,u))).filter(((a,u,c)=>!u||oe(a,c[u-1])!==0));const s=[];s.push(t);for(const a of n){const u=oe(a,t),c=oe(a,e);if(u===0)s[0]=t.nn();else if(u>0&&c<0)s.push(a),s.push(a.nn());else if(c>0)break}s.push(e);const i=[];for(let a=0;a<s.length;a+=2){if(this.Nn(s[a],s[a+1]))return[];const u=[s[a].indexId,this.uid,s[a].arrayValue,s[a].directionalValue,ls,[]],c=[s[a+1].indexId,this.uid,s[a+1].arrayValue,s[a+1].directionalValue,ls,[]];i.push(IDBKeyRange.bound(u,c))}return i}Nn(t,e){return oe(t,e)>0}getMinOffsetFromCollectionGroup(t,e){return this.getFieldIndexes(t,e).next(hl)}getMinOffset(t,e){return w.mapArray(this.dn(e),(n=>this.An(t,n).next((s=>s||O())))).next(hl)}}function cl(r){return dt(r,Ir)}function Ze(r){return dt(r,Cs)}function tr(r){return dt(r,Po)}function tn(r){return dt(r,bs)}function hl(r){L(r.length!==0);let t=r[0].indexState.offset,e=t.largestBatchId;for(let n=1;n<r.length;n++){const s=r[n].indexState.offset;Ao(s,t)<0&&(t=s),e<s.largestBatchId&&(e=s.largestBatchId)}return new Ot(t.readTime,t.documentKey,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},mh=41943040;class vt{static withCacheSize(t){return new vt(t,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gh(r,t,e){const n=r.store(Ut),s=r.store(dn),i=[],a=IDBKeyRange.only(e.batchId);let u=0;const c=n.Z({range:a},((m,g,E)=>(u++,E.delete())));i.push(c.next((()=>{L(u===1)})));const d=[];for(const m of e.mutations){const g=oc(t,m.key.path,e.batchId);i.push(s.delete(g)),d.push(m.key)}return w.waitFor(i).next((()=>d))}function Us(r){if(!r)return 0;let t;if(r.document)t=r.document;else if(r.unknownDocument)t=r.unknownDocument;else{if(!r.noDocument)throw O();t=r.noDocument}return JSON.stringify(t).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vt.DEFAULT_COLLECTION_PERCENTILE=10,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vt.DEFAULT=new vt(mh,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vt.DISABLED=new vt(-1,0,0);class ri{constructor(t,e,n,s){this.userId=t,this.serializer=e,this.indexManager=n,this.referenceDelegate=s,this.Bn={}}static It(t,e,n,s){L(t.uid!=="");const i=t.isAuthenticated()?t.uid:"";return new ri(i,e,n,s)}checkEmpty(t){let e=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return ae(t).Z({index:Ne,range:n},((s,i,a)=>{e=!1,a.done()})).next((()=>e))}addMutationBatch(t,e,n,s){const i=an(t),a=ae(t);return a.add({}).next((u=>{L(typeof u=="number");const c=new Oo(u,e,n,s),d=(function(P,C,N){const x=N.baseMutations.map((j=>Os(P.Tt,j))),z=N.mutations.map((j=>Os(P.Tt,j)));return{userId:C,batchId:N.batchId,localWriteTimeMs:N.localWriteTime.toMillis(),baseMutations:x,mutations:z}})(this.serializer,this.userId,c),m=[];let g=new J(((E,P)=>q(E.canonicalString(),P.canonicalString())));for(const E of s){const P=oc(this.userId,E.key.path,u);g=g.add(E.key.path.popLast()),m.push(a.put(d)),m.push(i.put(P,wf))}return g.forEach((E=>{m.push(this.indexManager.addToCollectionParentIndex(t,E))})),t.addOnCommittedListener((()=>{this.Bn[u]=c.keys()})),w.waitFor(m).next((()=>c))}))}lookupMutationBatch(t,e){return ae(t).get(e).next((n=>n?(L(n.userId===this.userId),xe(this.serializer,n)):null))}Ln(t,e){return this.Bn[e]?w.resolve(this.Bn[e]):this.lookupMutationBatch(t,e).next((n=>{if(n){const s=n.keys();return this.Bn[e]=s,s}return null}))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return ae(t).Z({index:Ne,range:s},((a,u,c)=>{u.userId===this.userId&&(L(u.batchId>=n),i=xe(this.serializer,u)),c.done()})).next((()=>i))}getHighestUnacknowledgedBatchId(t){const e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=Me;return ae(t).Z({index:Ne,range:e,reverse:!0},((s,i,a)=>{n=i.batchId,a.done()})).next((()=>n))}getAllMutationBatches(t){const e=IDBKeyRange.bound([this.userId,Me],[this.userId,Number.POSITIVE_INFINITY]);return ae(t).G(Ne,e).next((n=>n.map((s=>xe(this.serializer,s)))))}getAllMutationBatchesAffectingDocumentKey(t,e){const n=gs(this.userId,e.path),s=IDBKeyRange.lowerBound(n),i=[];return an(t).Z({range:s},((a,u,c)=>{const[d,m,g]=a,E=jt(m);if(d===this.userId&&e.path.isEqual(E))return ae(t).get(g).next((P=>{if(!P)throw O();L(P.userId===this.userId),i.push(xe(this.serializer,P))}));c.done()})).next((()=>i))}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new J(q);const s=[];return e.forEach((i=>{const a=gs(this.userId,i.path),u=IDBKeyRange.lowerBound(a),c=an(t).Z({range:u},((d,m,g)=>{const[E,P,C]=d,N=jt(P);E===this.userId&&i.path.isEqual(N)?n=n.add(C):g.done()}));s.push(c)})),w.waitFor(s).next((()=>this.kn(t,n)))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1,i=gs(this.userId,n),a=IDBKeyRange.lowerBound(i);let u=new J(q);return an(t).Z({range:a},((c,d,m)=>{const[g,E,P]=c,C=jt(E);g===this.userId&&n.isPrefixOf(C)?C.length===s&&(u=u.add(P)):m.done()})).next((()=>this.kn(t,u)))}kn(t,e){const n=[],s=[];return e.forEach((i=>{s.push(ae(t).get(i).next((a=>{if(a===null)throw O();L(a.userId===this.userId),n.push(xe(this.serializer,a))})))})),w.waitFor(s).next((()=>n))}removeMutationBatch(t,e){return gh(t.ue,this.userId,e).next((n=>(t.addOnCommittedListener((()=>{this.qn(e.batchId)})),w.forEach(n,(s=>this.referenceDelegate.markPotentiallyOrphaned(t,s))))))}qn(t){delete this.Bn[t]}performConsistencyCheck(t){return this.checkEmpty(t).next((e=>{if(!e)return w.resolve();const n=IDBKeyRange.lowerBound((function(a){return[a]})(this.userId)),s=[];return an(t).Z({range:n},((i,a,u)=>{if(i[0]===this.userId){const c=jt(i[1]);s.push(c)}else u.done()})).next((()=>{L(s.length===0)}))}))}containsKey(t,e){return ph(t,this.userId,e)}Qn(t){return _h(t).get(this.userId).next((e=>e||{userId:this.userId,lastAcknowledgedBatchId:Me,lastStreamToken:""}))}}function ph(r,t,e){const n=gs(t,e.path),s=n[1],i=IDBKeyRange.lowerBound(n);let a=!1;return an(r).Z({range:i,Y:!0},((u,c,d)=>{const[m,g,E]=u;m===t&&g===s&&(a=!0),d.done()})).next((()=>a))}function ae(r){return dt(r,Ut)}function an(r){return dt(r,dn)}function _h(r){return dt(r,_r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Un(){return new ze(0)}static Kn(){return new ze(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(t,e){this.referenceDelegate=t,this.serializer=e}allocateTargetId(t){return this.Wn(t).next((e=>{const n=new ze(e.highestTargetId);return e.highestTargetId=n.next(),this.Gn(t,e).next((()=>e.highestTargetId))}))}getLastRemoteSnapshotVersion(t){return this.Wn(t).next((e=>U.fromTimestamp(new it(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(t){return this.Wn(t).next((e=>e.highestListenSequenceNumber))}setTargetsMetadata(t,e,n){return this.Wn(t).next((s=>(s.highestListenSequenceNumber=e,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),e>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=e),this.Gn(t,s))))}addTargetData(t,e){return this.zn(t,e).next((()=>this.Wn(t).next((n=>(n.targetCount+=1,this.jn(e,n),this.Gn(t,n))))))}updateTargetData(t,e){return this.zn(t,e)}removeTargetData(t,e){return this.removeMatchingKeysForTargetId(t,e.targetId).next((()=>en(t).delete(e.targetId))).next((()=>this.Wn(t))).next((n=>(L(n.targetCount>0),n.targetCount-=1,this.Gn(t,n))))}removeTargets(t,e,n){let s=0;const i=[];return en(t).Z(((a,u)=>{const c=or(u);c.sequenceNumber<=e&&n.get(c.targetId)===null&&(s++,i.push(this.removeTargetData(t,c)))})).next((()=>w.waitFor(i))).next((()=>s))}forEachTarget(t,e){return en(t).Z(((n,s)=>{const i=or(s);e(i)}))}Wn(t){return fl(t).get(Ss).next((e=>(L(e!==null),e)))}Gn(t,e){return fl(t).put(Ss,e)}zn(t,e){return en(t).put(ch(this.serializer,e))}jn(t,e){let n=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,n=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,n=!0),n}getTargetCount(t){return this.Wn(t).next((e=>e.targetCount))}getTargetData(t,e){const n=Be(e),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return en(t).Z({range:s,index:uc},((a,u,c)=>{const d=or(u);br(e,d.target)&&(i=d,c.done())})).next((()=>i))}addMatchingKeys(t,e,n){const s=[],i=le(t);return e.forEach((a=>{const u=At(a.path);s.push(i.put({targetId:n,path:u})),s.push(this.referenceDelegate.addReference(t,n,a))})),w.waitFor(s)}removeMatchingKeys(t,e,n){const s=le(t);return w.forEach(e,(i=>{const a=At(i.path);return w.waitFor([s.delete([n,a]),this.referenceDelegate.removeReference(t,n,i)])}))}removeMatchingKeysForTargetId(t,e){const n=le(t),s=IDBKeyRange.bound([e],[e+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(t,e){const n=IDBKeyRange.bound([e],[e+1],!1,!0),s=le(t);let i=K();return s.Z({range:n,Y:!0},((a,u,c)=>{const d=jt(a[1]),m=new M(d);i=i.add(m)})).next((()=>i))}containsKey(t,e){const n=At(e.path),s=IDBKeyRange.bound([n],[Zl(n)],!1,!0);let i=0;return le(t).Z({index:Vo,Y:!0,range:s},(([a,u],c,d)=>{a!==0&&(i++,d.done())})).next((()=>i>0))}lt(t,e){return en(t).get(e).next((n=>n?or(n):null))}}function en(r){return dt(r,fn)}function fl(r){return dt(r,Oe)}function le(r){return dt(r,mn)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml="LruGarbageCollector",yh=1048576;function gl([r,t],[e,n]){const s=q(r,e);return s===0?q(t,n):s}class $m{constructor(t){this.Hn=t,this.buffer=new J(gl),this.Jn=0}Yn(){return++this.Jn}Zn(t){const e=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();gl(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Ih{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(t){b(ml,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Ie(e)?b(ml,"Ignoring IndexedDB error during garbage collection: ",e):await ye(e)}await this.er(3e5)}))}}class Qm{constructor(t,e){this.tr=t,this.params=e}calculateTargetCount(t,e){return this.tr.nr(t).next((n=>Math.floor(e/100*n)))}nthSequenceNumber(t,e){if(e===0)return w.resolve(bt.ae);const n=new $m(e);return this.tr.forEachTarget(t,(s=>n.Zn(s.sequenceNumber))).next((()=>this.tr.rr(t,(s=>n.Zn(s))))).next((()=>n.maxValue))}removeTargets(t,e,n){return this.tr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.tr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(b("LruGarbageCollector","Garbage collection skipped; disabled"),w.resolve(dl)):this.getCacheSize(t).next((n=>n<this.params.cacheSizeCollectionThreshold?(b("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),dl):this.ir(t,e)))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,e){let n,s,i,a,u,c,d;const m=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((g=>(g>this.params.maximumSequenceNumbersToCollect?(b("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(t,s)))).next((g=>(n=g,u=Date.now(),this.removeTargets(t,n,e)))).next((g=>(i=g,c=Date.now(),this.removeOrphanedDocuments(t,n)))).next((g=>(d=Date.now(),nn()<=Wt.DEBUG&&b("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(u-a)+`ms
	Removed ${i} targets in `+(c-u)+`ms
	Removed ${g} documents in `+(d-c)+`ms
Total Duration: ${d-m}ms`),w.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g}))))}}function Th(r,t){return new Qm(r,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(t,e){this.db=t,this.garbageCollector=Th(this,e)}nr(t){const e=this.sr(t);return this.db.getTargetCache().getTargetCount(t).next((n=>e.next((s=>n+s))))}sr(t){let e=0;return this.rr(t,(n=>{e++})).next((()=>e))}forEachTarget(t,e){return this.db.getTargetCache().forEachTarget(t,e)}rr(t,e){return this._r(t,((n,s)=>e(s)))}addReference(t,e,n){return cs(t,n)}removeReference(t,e,n){return cs(t,n)}removeTargets(t,e,n){return this.db.getTargetCache().removeTargets(t,e,n)}markPotentiallyOrphaned(t,e){return cs(t,e)}ar(t,e){return(function(s,i){let a=!1;return _h(s).X((u=>ph(s,u,i).next((c=>(c&&(a=!0),w.resolve(!c)))))).next((()=>a))})(t,e)}removeOrphanedDocuments(t,e){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this._r(t,((a,u)=>{if(u<=e){const c=this.ar(t,a).next((d=>{if(!d)return i++,n.getEntry(t,a).next((()=>(n.removeEntry(a,U.min()),le(t).delete((function(g){return[0,At(g.path)]})(a)))))}));s.push(c)}})).next((()=>w.waitFor(s))).next((()=>n.apply(t))).next((()=>i))}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,n)}updateLimboDocument(t,e){return cs(t,e)}_r(t,e){const n=le(t);let s,i=bt.ae;return n.Z({index:Vo},(([a,u],{path:c,sequenceNumber:d})=>{a===0?(i!==bt.ae&&e(new M(jt(s)),i),i=d,s=c):i=bt.ae})).next((()=>{i!==bt.ae&&e(new M(jt(s)),i)}))}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function cs(r,t){return le(r).put((function(n,s){return{targetId:0,path:At(n.path),sequenceNumber:s}})(t,r.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(){this.changes=new te((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,at.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?w.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(t){this.serializer=t}setIndexManager(t){this.indexManager=t}addEntry(t,e,n){return Pe(t).put(n)}removeEntry(t,e,n){return Pe(t).delete((function(i,a){const u=i.path.toArray();return[u.slice(0,u.length-2),u[u.length-2],Fs(a),u[u.length-1]]})(e,n))}updateMetadata(t,e){return this.getMetadata(t).next((n=>(n.byteSize+=e,this.ur(t,n))))}getEntry(t,e){let n=at.newInvalidDocument(e);return Pe(t).Z({index:ps,range:IDBKeyRange.only(er(e))},((s,i)=>{n=this.cr(e,i)})).next((()=>n))}lr(t,e){let n={size:0,document:at.newInvalidDocument(e)};return Pe(t).Z({index:ps,range:IDBKeyRange.only(er(e))},((s,i)=>{n={document:this.cr(e,i),size:Us(i)}})).next((()=>n))}getEntries(t,e){let n=kt();return this.hr(t,e,((s,i)=>{const a=this.cr(s,i);n=n.insert(s,a)})).next((()=>n))}Pr(t,e){let n=kt(),s=new et(M.comparator);return this.hr(t,e,((i,a)=>{const u=this.cr(i,a);n=n.insert(i,u),s=s.insert(i,Us(a))})).next((()=>({documents:n,Tr:s})))}hr(t,e,n){if(e.isEmpty())return w.resolve();let s=new J(yl);e.forEach((c=>s=s.add(c)));const i=IDBKeyRange.bound(er(s.first()),er(s.last())),a=s.getIterator();let u=a.getNext();return Pe(t).Z({index:ps,range:i},((c,d,m)=>{const g=M.fromSegments([...d.prefixPath,d.collectionGroup,d.documentId]);for(;u&&yl(u,g)<0;)n(u,null),u=a.getNext();u&&u.isEqual(g)&&(n(u,d),u=a.hasNext()?a.getNext():null),u?m.W(er(u)):m.done()})).next((()=>{for(;u;)n(u,null),u=a.hasNext()?a.getNext():null}))}getDocumentsMatchingQuery(t,e,n,s,i){const a=e.path,u=[a.popLast().toArray(),a.lastSegment(),Fs(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],c=[a.popLast().toArray(),a.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Pe(t).G(IDBKeyRange.bound(u,c,!0)).next((d=>{i?.incrementDocumentReadCount(d.length);let m=kt();for(const g of d){const E=this.cr(M.fromSegments(g.prefixPath.concat(g.collectionGroup,g.documentId)),g);E.isFoundDocument()&&(xr(e,E)||s.has(E.key))&&(m=m.insert(E.key,E))}return m}))}getAllFromCollectionGroup(t,e,n,s){let i=kt();const a=_l(e,n),u=_l(e,Ot.max());return Pe(t).Z({index:ac,range:IDBKeyRange.bound(a,u,!0)},((c,d,m)=>{const g=this.cr(M.fromSegments(d.prefixPath.concat(d.collectionGroup,d.documentId)),d);i=i.insert(g.key,g),i.size===s&&m.done()})).next((()=>i))}newChangeBuffer(t){return new Ym(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next((e=>e.byteSize))}getMetadata(t){return pl(t).get(Xi).next((e=>(L(!!e),e)))}ur(t,e){return pl(t).put(Xi,e)}cr(t,e){if(e){const n=Mm(this.serializer,e);if(!(n.isNoDocument()&&n.version.isEqual(U.min())))return n}return at.newInvalidDocument(t)}}function vh(r){return new Hm(r)}class Ym extends Eh{constructor(t,e){super(),this.Ir=t,this.trackRemovals=e,this.Er=new te((n=>n.toString()),((n,s)=>n.isEqual(s)))}applyChanges(t){const e=[];let n=0,s=new J(((i,a)=>q(i.canonicalString(),a.canonicalString())));return this.changes.forEach(((i,a)=>{const u=this.Er.get(i);if(e.push(this.Ir.removeEntry(t,i,u.readTime)),a.isValidDocument()){const c=tl(this.Ir.serializer,a);s=s.add(i.path.popLast());const d=Us(c);n+=d-u.size,e.push(this.Ir.addEntry(t,i,c))}else if(n-=u.size,this.trackRemovals){const c=tl(this.Ir.serializer,a.convertToNoDocument(U.min()));e.push(this.Ir.addEntry(t,i,c))}})),s.forEach((i=>{e.push(this.Ir.indexManager.addToCollectionParentIndex(t,i))})),e.push(this.Ir.updateMetadata(t,n)),w.waitFor(e)}getFromCache(t,e){return this.Ir.lr(t,e).next((n=>(this.Er.set(e,{size:n.size,readTime:n.document.readTime}),n.document)))}getAllFromCache(t,e){return this.Ir.Pr(t,e).next((({documents:n,Tr:s})=>(s.forEach(((i,a)=>{this.Er.set(i,{size:a,readTime:n.get(i).readTime})})),n)))}}function pl(r){return dt(r,yr)}function Pe(r){return dt(r,Ps)}function er(r){const t=r.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function _l(r,t){const e=t.documentKey.path.toArray();return[r,Fs(t.readTime),e.slice(0,e.length-2),e.length>0?e[e.length-1]:""]}function yl(r,t){const e=r.path.toArray(),n=t.path.toArray();let s=0;for(let i=0;i<e.length-2&&i<n.length-2;++i)if(s=q(e[i],n[i]),s)return s;return s=q(e.length,n.length),s||(s=q(e[e.length-2],n[n.length-2]),s||q(e[e.length-1],n[n.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(n=s,this.remoteDocumentCache.getEntry(t,e)))).next((s=>(n!==null&&fr(n.mutation,s,Ct.empty(),it.now()),s)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((n=>this.getLocalViewOfDocuments(t,n,K()).next((()=>n))))}getLocalViewOfDocuments(t,e,n=K()){const s=zt();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,n).next((i=>{let a=sr();return i.forEach(((u,c)=>{a=a.insert(u,c.overlayedDocument)})),a}))))}getOverlayedDocuments(t,e){const n=zt();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,K())))}populateOverlays(t,e,n){const s=[];return n.forEach((i=>{e.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(t,s).next((i=>{i.forEach(((a,u)=>{e.set(a,u)}))}))}computeViews(t,e,n,s){let i=kt();const a=dr(),u=(function(){return dr()})();return e.forEach(((c,d)=>{const m=n.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof ee)?i=i.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),fr(m.mutation,d,m.mutation.getFieldMask(),it.now())):a.set(d.key,Ct.empty())})),this.recalculateAndSaveOverlays(t,i).next((c=>(c.forEach(((d,m)=>a.set(d,m))),e.forEach(((d,m)=>{var g;return u.set(d,new Xm(m,(g=a.get(d))!==null&&g!==void 0?g:null))})),u)))}recalculateAndSaveOverlays(t,e){const n=dr();let s=new et(((a,u)=>a-u)),i=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((a=>{for(const u of a)u.keys().forEach((c=>{const d=e.get(c);if(d===null)return;let m=n.get(c)||Ct.empty();m=u.applyToLocalView(d,m),n.set(c,m);const g=(s.get(u.batchId)||K()).add(c);s=s.insert(u.batchId,g)}))})).next((()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const c=u.getNext(),d=c.key,m=c.value,g=Uc();m.forEach((E=>{if(!i.has(E)){const P=$c(e.get(E),n.get(E));P!==null&&g.set(E,P),i=i.add(E)}})),a.push(this.documentOverlayCache.saveOverlays(t,d,g))}return w.waitFor(a)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((n=>this.recalculateAndSaveOverlays(t,n)))}getDocumentsMatchingQuery(t,e,n,s){return(function(a){return M.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):kc(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,s):this.getDocumentsMatchingCollectionQuery(t,e,n,s)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-i.size):w.resolve(zt());let u=hn,c=i;return a.next((d=>w.forEach(d,((m,g)=>(u<g.largestBatchId&&(u=g.largestBatchId),i.get(m)?w.resolve():this.remoteDocumentCache.getEntry(t,m).next((E=>{c=c.insert(m,E)}))))).next((()=>this.populateOverlays(t,d,i))).next((()=>this.computeViews(t,c,d,K()))).next((m=>({batchId:u,changes:Lc(m)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next((n=>{let s=sr();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,s){const i=e.collectionGroup;let a=sr();return this.indexManager.getCollectionParents(t,i).next((u=>w.forEach(u,(c=>{const d=(function(g,E){return new Cn(E,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)})(e,c.child(i));return this.getDocumentsMatchingCollectionQuery(t,d,n,s).next((m=>{m.forEach(((g,E)=>{a=a.insert(g,E)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(t,e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i,s)))).next((a=>{i.forEach(((c,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,at.newInvalidDocument(m)))}));let u=sr();return a.forEach(((c,d)=>{const m=i.get(c);m!==void 0&&fr(m.mutation,d,Ct.empty(),it.now()),xr(e,d)&&(u=u.insert(c,d))})),u}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,e){return w.resolve(this.dr.get(e))}saveBundleMetadata(t,e){return this.dr.set(e.id,(function(s){return{id:s.id,version:s.version,createTime:St(s.createTime)}})(e)),w.resolve()}getNamedQuery(t,e){return w.resolve(this.Ar.get(e))}saveNamedQuery(t,e){return this.Ar.set(e.name,(function(s){return{name:s.name,query:hh(s.bundledQuery),readTime:St(s.readTime)}})(e)),w.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(){this.overlays=new et(M.comparator),this.Rr=new Map}getOverlay(t,e){return w.resolve(this.overlays.get(e))}getOverlays(t,e){const n=zt();return w.forEach(e,(s=>this.getOverlay(t,s).next((i=>{i!==null&&n.set(s,i)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((s,i)=>{this.Et(t,e,i)})),w.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.Rr.get(n);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.Rr.delete(n)),w.resolve()}getOverlaysForCollection(t,e,n){const s=zt(),i=e.length+1,a=new M(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const c=u.getNext().value,d=c.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===i&&c.largestBatchId>n&&s.set(c.getKey(),c)}return w.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let i=new et(((d,m)=>d-m));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>n){let m=i.get(d.largestBatchId);m===null&&(m=zt(),i=i.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const u=zt(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((d,m)=>u.set(d,m))),!(u.size()>=s)););return w.resolve(u)}Et(t,e,n){const s=this.overlays.get(n.key);if(s!==null){const a=this.Rr.get(s.largestBatchId).delete(n.key);this.Rr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new Lo(e,n));let i=this.Rr.get(e);i===void 0&&(i=K(),this.Rr.set(e,i)),this.Rr.set(e,i.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(t){return w.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,w.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(){this.Vr=new J(ft.mr),this.gr=new J(ft.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,e){const n=new ft(t,e);this.Vr=this.Vr.add(n),this.gr=this.gr.add(n)}yr(t,e){t.forEach((n=>this.addReference(n,e)))}removeReference(t,e){this.wr(new ft(t,e))}Sr(t,e){t.forEach((n=>this.removeReference(n,e)))}br(t){const e=new M(new Y([])),n=new ft(e,t),s=new ft(e,t+1),i=[];return this.gr.forEachInRange([n,s],(a=>{this.wr(a),i.push(a.key)})),i}Dr(){this.Vr.forEach((t=>this.wr(t)))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const e=new M(new Y([])),n=new ft(e,t),s=new ft(e,t+1);let i=K();return this.gr.forEachInRange([n,s],(a=>{i=i.add(a.key)})),i}containsKey(t){const e=new ft(t,0),n=this.Vr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class ft{constructor(t,e){this.key=t,this.Cr=e}static mr(t,e){return M.comparator(t.key,e.key)||q(t.Cr,e.Cr)}static pr(t,e){return q(t.Cr,e.Cr)||M.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Fr=1,this.Mr=new J(ft.mr)}checkEmpty(t){return w.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,s){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Oo(i,e,n,s);this.mutationQueue.push(a);for(const u of s)this.Mr=this.Mr.add(new ft(u.key,i)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return w.resolve(a)}lookupMutationBatch(t,e){return w.resolve(this.Or(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.Nr(n),i=s<0?0:s;return w.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return w.resolve(this.mutationQueue.length===0?Me:this.Fr-1)}getAllMutationBatches(t){return w.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new ft(e,0),s=new ft(e,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([n,s],(a=>{const u=this.Or(a.Cr);i.push(u)})),w.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new J(q);return e.forEach((s=>{const i=new ft(s,0),a=new ft(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([i,a],(u=>{n=n.add(u.Cr)}))})),w.resolve(this.Br(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;M.isDocumentKey(i)||(i=i.child(""));const a=new ft(new M(i),0);let u=new J(q);return this.Mr.forEachWhile((c=>{const d=c.key.path;return!!n.isPrefixOf(d)&&(d.length===s&&(u=u.add(c.Cr)),!0)}),a),w.resolve(this.Br(u))}Br(t){const e=[];return t.forEach((n=>{const s=this.Or(n);s!==null&&e.push(s)})),e}removeMutationBatch(t,e){L(this.Lr(e.batchId,"removed")===0),this.mutationQueue.shift();let n=this.Mr;return w.forEach(e.mutations,(s=>{const i=new ft(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.Mr=n}))}qn(t){}containsKey(t,e){const n=new ft(e,0),s=this.Mr.firstAfterOrEqual(n);return w.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,w.resolve()}Lr(t,e){return this.Nr(t)}Nr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Or(t){const e=this.Nr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(t){this.kr=t,this.docs=(function(){return new et(M.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),i=s?s.size:0,a=this.kr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return w.resolve(n?n.document.mutableCopy():at.newInvalidDocument(e))}getEntries(t,e){let n=kt();return e.forEach((s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():at.newInvalidDocument(s))})),w.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let i=kt();const a=e.path,u=new M(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(u);for(;c.hasNext();){const{key:d,value:{document:m}}=c.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Ao(ec(m),n)<=0||(s.has(m.key)||xr(e,m))&&(i=i.insert(m.key,m.mutableCopy()))}return w.resolve(i)}getAllFromCollectionGroup(t,e,n,s){O()}qr(t,e){return w.forEach(this.docs,(n=>e(n)))}newChangeBuffer(t){return new rg(this)}getSize(t){return w.resolve(this.size)}}class rg extends Eh{constructor(t){super(),this.Ir=t}applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?e.push(this.Ir.addEntry(t,s)):this.Ir.removeEntry(n)})),w.waitFor(e)}getFromCache(t,e){return this.Ir.getEntry(t,e)}getAllFromCache(t,e){return this.Ir.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(t){this.persistence=t,this.Qr=new te((e=>Be(e)),br),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.$r=0,this.Ur=new zo,this.targetCount=0,this.Kr=ze.Un()}forEachTarget(t,e){return this.Qr.forEach(((n,s)=>e(s))),w.resolve()}getLastRemoteSnapshotVersion(t){return w.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return w.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Kr.next(),w.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.$r&&(this.$r=e),w.resolve()}zn(t){this.Qr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Kr=new ze(e),this.highestTargetId=e),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,e){return this.zn(e),this.targetCount+=1,w.resolve()}updateTargetData(t,e){return this.zn(e),w.resolve()}removeTargetData(t,e){return this.Qr.delete(e.target),this.Ur.br(e.targetId),this.targetCount-=1,w.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.Qr.forEach(((a,u)=>{u.sequenceNumber<=e&&n.get(u.targetId)===null&&(this.Qr.delete(a),i.push(this.removeMatchingKeysForTargetId(t,u.targetId)),s++)})),w.waitFor(i).next((()=>s))}getTargetCount(t){return w.resolve(this.targetCount)}getTargetData(t,e){const n=this.Qr.get(e)||null;return w.resolve(n)}addMatchingKeys(t,e,n){return this.Ur.yr(e,n),w.resolve()}removeMatchingKeys(t,e,n){this.Ur.Sr(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach((a=>{i.push(s.markPotentiallyOrphaned(t,a))})),w.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Ur.br(e),w.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Ur.vr(e);return w.resolve(n)}containsKey(t,e){return w.resolve(this.Ur.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(t,e){this.Wr={},this.overlays={},this.Gr=new bt(0),this.zr=!1,this.zr=!0,this.jr=new tg,this.referenceDelegate=t(this),this.Hr=new sg(this),this.indexManager=new zm,this.remoteDocumentCache=(function(s){return new ng(s)})((n=>this.referenceDelegate.Jr(n))),this.serializer=new lh(e),this.Yr=new Jm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Zm,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Wr[t.toKey()];return n||(n=new eg(e,this.referenceDelegate),this.Wr[t.toKey()]=n),n}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,e,n){b("MemoryPersistence","Starting transaction:",t);const s=new ig(this.Gr.next());return this.referenceDelegate.Zr(),n(s).next((i=>this.referenceDelegate.Xr(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}ei(t,e){return w.or(Object.values(this.Wr).map((n=>()=>n.containsKey(t,e))))}}class ig extends rc{constructor(t){super(),this.currentSequenceNumber=t}}class si{constructor(t){this.persistence=t,this.ti=new zo,this.ni=null}static ri(t){return new si(t)}get ii(){if(this.ni)return this.ni;throw O()}addReference(t,e,n){return this.ti.addReference(n,e),this.ii.delete(n.toString()),w.resolve()}removeReference(t,e,n){return this.ti.removeReference(n,e),this.ii.add(n.toString()),w.resolve()}markPotentiallyOrphaned(t,e){return this.ii.add(e.toString()),w.resolve()}removeTarget(t,e){this.ti.br(e.targetId).forEach((s=>this.ii.add(s.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((s=>{s.forEach((i=>this.ii.add(i.toString())))})).next((()=>n.removeTargetData(t,e)))}Zr(){this.ni=new Set}Xr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return w.forEach(this.ii,(n=>{const s=M.fromPath(n);return this.si(t,s).next((i=>{i||e.removeEntry(s,U.min())}))})).next((()=>(this.ni=null,e.apply(t))))}updateLimboDocument(t,e){return this.si(t,e).next((n=>{n?this.ii.delete(e.toString()):this.ii.add(e.toString())}))}Jr(t){return 0}si(t,e){return w.or([()=>w.resolve(this.ti.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.ei(t,e)])}}class Bs{constructor(t,e){this.persistence=t,this.oi=new te((n=>At(n.path)),((n,s)=>n.isEqual(s))),this.garbageCollector=Th(this,e)}static ri(t,e){return new Bs(t,e)}Zr(){}Xr(t){return w.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}nr(t){const e=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next((n=>e.next((s=>n+s))))}sr(t){let e=0;return this.rr(t,(n=>{e++})).next((()=>e))}rr(t,e){return w.forEach(this.oi,((n,s)=>this.ar(t,n,s).next((i=>i?w.resolve():e(s)))))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.qr(t,(a=>this.ar(t,a,e).next((u=>{u||(n++,i.removeEntry(a,U.min()))})))).next((()=>i.apply(t))).next((()=>n))}markPotentiallyOrphaned(t,e){return this.oi.set(e,t.currentSequenceNumber),w.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.oi.set(n,t.currentSequenceNumber),w.resolve()}removeReference(t,e,n){return this.oi.set(n,t.currentSequenceNumber),w.resolve()}updateLimboDocument(t,e){return this.oi.set(e,t.currentSequenceNumber),w.resolve()}Jr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=ys(t.data.value)),e}ar(t,e,n){return w.or([()=>this.persistence.ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.oi.get(e);return w.resolve(s!==void 0&&s>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(t){this.serializer=t}B(t,e,n,s){const i=new $s("createOrUpgrade",e);n<1&&s>=1&&((function(c){c.createObjectStore(Sr)})(t),(function(c){c.createObjectStore(_r,{keyPath:vf}),c.createObjectStore(Ut,{keyPath:Cu,autoIncrement:!0}).createIndex(Ne,xu,{unique:!0}),c.createObjectStore(dn)})(t),Il(t),(function(c){c.createObjectStore(be)})(t));let a=w.resolve();return n<3&&s>=3&&(n!==0&&((function(c){c.deleteObjectStore(mn),c.deleteObjectStore(fn),c.deleteObjectStore(Oe)})(t),Il(t)),a=a.next((()=>(function(c){const d=c.store(Oe),m={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:U.min().toTimestamp(),targetCount:0};return d.put(Ss,m)})(i)))),n<4&&s>=4&&(n!==0&&(a=a.next((()=>(function(c,d){return d.store(Ut).G().next((g=>{c.deleteObjectStore(Ut),c.createObjectStore(Ut,{keyPath:Cu,autoIncrement:!0}).createIndex(Ne,xu,{unique:!0});const E=d.store(Ut),P=g.map((C=>E.put(C)));return w.waitFor(P)}))})(t,i)))),a=a.next((()=>{(function(c){c.createObjectStore(gn,{keyPath:xf})})(t)}))),n<5&&s>=5&&(a=a.next((()=>this._i(i)))),n<6&&s>=6&&(a=a.next((()=>((function(c){c.createObjectStore(yr)})(t),this.ai(i))))),n<7&&s>=7&&(a=a.next((()=>this.ui(i)))),n<8&&s>=8&&(a=a.next((()=>this.ci(t,i)))),n<9&&s>=9&&(a=a.next((()=>{(function(c){c.objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges")})(t)}))),n<10&&s>=10&&(a=a.next((()=>this.li(i)))),n<11&&s>=11&&(a=a.next((()=>{(function(c){c.createObjectStore(Ws,{keyPath:Df})})(t),(function(c){c.createObjectStore(Hs,{keyPath:kf})})(t)}))),n<12&&s>=12&&(a=a.next((()=>{(function(c){const d=c.createObjectStore(Ys,{keyPath:Bf});d.createIndex(Zi,qf,{unique:!1}),d.createIndex(hc,jf,{unique:!1})})(t)}))),n<13&&s>=13&&(a=a.next((()=>(function(c){const d=c.createObjectStore(Ps,{keyPath:Af});d.createIndex(ps,Rf),d.createIndex(ac,Vf)})(t))).next((()=>this.hi(t,i))).next((()=>t.deleteObjectStore(be)))),n<14&&s>=14&&(a=a.next((()=>this.Pi(t,i)))),n<15&&s>=15&&(a=a.next((()=>(function(c){c.createObjectStore(Po,{keyPath:Nf,autoIncrement:!0}).createIndex(Ji,Mf,{unique:!1}),c.createObjectStore(bs,{keyPath:Of}).createIndex(lc,Ff,{unique:!1}),c.createObjectStore(Cs,{keyPath:Lf}).createIndex(cc,Uf,{unique:!1})})(t)))),n<16&&s>=16&&(a=a.next((()=>{e.objectStore(bs).clear()})).next((()=>{e.objectStore(Cs).clear()}))),n<17&&s>=17&&(a=a.next((()=>{(function(c){c.createObjectStore(So,{keyPath:zf})})(t)}))),a}ai(t){let e=0;return t.store(be).Z(((n,s)=>{e+=Us(s)})).next((()=>{const n={byteSize:e};return t.store(yr).put(Xi,n)}))}_i(t){const e=t.store(_r),n=t.store(Ut);return e.G().next((s=>w.forEach(s,(i=>{const a=IDBKeyRange.bound([i.userId,Me],[i.userId,i.lastAcknowledgedBatchId]);return n.G(Ne,a).next((u=>w.forEach(u,(c=>{L(c.userId===i.userId);const d=xe(this.serializer,c);return gh(t,i.userId,d).next((()=>{}))}))))}))))}ui(t){const e=t.store(mn),n=t.store(be);return t.store(Oe).get(Ss).next((s=>{const i=[];return n.Z(((a,u)=>{const c=new Y(a),d=(function(g){return[0,At(g)]})(c);i.push(e.get(d).next((m=>m?w.resolve():(g=>e.put({targetId:0,path:At(g),sequenceNumber:s.highestListenSequenceNumber}))(c))))})).next((()=>w.waitFor(i)))}))}ci(t,e){t.createObjectStore(Ir,{keyPath:Cf});const n=e.store(Ir),s=new jo,i=a=>{if(s.add(a)){const u=a.lastSegment(),c=a.popLast();return n.put({collectionId:u,parent:At(c)})}};return e.store(be).Z({Y:!0},((a,u)=>{const c=new Y(a);return i(c.popLast())})).next((()=>e.store(dn).Z({Y:!0},(([a,u,c],d)=>{const m=jt(u);return i(m.popLast())}))))}li(t){const e=t.store(fn);return e.Z(((n,s)=>{const i=or(s),a=ch(this.serializer,i);return e.put(a)}))}hi(t,e){const n=e.store(be),s=[];return n.Z(((i,a)=>{const u=e.store(Ps),c=(function(g){return g.document?new M(Y.fromString(g.document.name).popFirst(5)):g.noDocument?M.fromSegments(g.noDocument.path):g.unknownDocument?M.fromSegments(g.unknownDocument.path):O()})(a).path.toArray(),d={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:a.readTime||[0,0],unknownDocument:a.unknownDocument,noDocument:a.noDocument,document:a.document,hasCommittedMutations:!!a.hasCommittedMutations};s.push(u.put(d))})).next((()=>w.waitFor(s)))}Pi(t,e){const n=e.store(Ut),s=vh(this.serializer),i=new Ko(si.ri,this.serializer.Tt);return n.G().next((a=>{const u=new Map;return a.forEach((c=>{var d;let m=(d=u.get(c.userId))!==null&&d!==void 0?d:K();xe(this.serializer,c).keys().forEach((g=>m=m.add(g))),u.set(c.userId,m)})),w.forEach(u,((c,d)=>{const m=new mt(d),g=ni.It(this.serializer,m),E=i.getIndexManager(m),P=ri.It(m,this.serializer,E,i.referenceDelegate);return new wh(s,P,g,E).recalculateAndSaveOverlaysForDocumentKeys(new to(e,bt.ae),c).next()}))}))}}function Il(r){r.createObjectStore(mn,{keyPath:Sf}).createIndex(Vo,bf,{unique:!0}),r.createObjectStore(fn,{keyPath:"targetId"}).createIndex(uc,Pf,{unique:!0}),r.createObjectStore(Oe)}const ue="IndexedDbPersistence",Bi=18e5,qi=5e3,ji="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",ag="main";class Go{constructor(t,e,n,s,i,a,u,c,d,m,g=17){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=n,this.Ti=i,this.window=a,this.document=u,this.Ii=d,this.Ei=m,this.di=g,this.Gr=null,this.zr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ai=null,this.inForeground=!1,this.Ri=null,this.Vi=null,this.mi=Number.NEGATIVE_INFINITY,this.fi=E=>Promise.resolve(),!Go.D())throw new D(S.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Wm(this,s),this.gi=e+ag,this.serializer=new lh(c),this.pi=new de(this.gi,this.di,new og(this.serializer)),this.jr=new Fm,this.Hr=new Gm(this.referenceDelegate,this.serializer),this.remoteDocumentCache=vh(this.serializer),this.Yr=new Om,this.window&&this.window.localStorage?this.yi=this.window.localStorage:(this.yi=null,m===!1&&ut(ue,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.wi().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new D(S.FAILED_PRECONDITION,ji);return this.Si(),this.bi(),this.Di(),this.runTransaction("getHighestListenSequenceNumber","readonly",(t=>this.Hr.getHighestSequenceNumber(t)))})).then((t=>{this.Gr=new bt(t,this.Ii)})).then((()=>{this.zr=!0})).catch((t=>(this.pi&&this.pi.close(),Promise.reject(t))))}Ci(t){return this.fi=async e=>{if(this.started)return t(e)},t(this.isPrimary)}setDatabaseDeletedListener(t){this.pi.k((async e=>{e.newVersion===null&&await t()}))}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.Ti.enqueueAndForget((async()=>{this.started&&await this.wi()})))}wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(t=>hs(t).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.Fi(t).next((e=>{e||(this.isPrimary=!1,this.Ti.enqueueRetryable((()=>this.fi(!1))))}))})).next((()=>this.Mi(t))).next((e=>this.isPrimary&&!e?this.xi(t).next((()=>!1)):!!e&&this.Oi(t).next((()=>!0)))))).catch((t=>{if(Ie(t))return b(ue,"Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return b(ue,"Releasing owner lease after error during lease refresh",t),!1})).then((t=>{this.isPrimary!==t&&this.Ti.enqueueRetryable((()=>this.fi(t))),this.isPrimary=t}))}Fi(t){return nr(t).get(Ye).next((e=>w.resolve(this.Ni(e))))}Bi(t){return hs(t).delete(this.clientId)}async Li(){if(this.isPrimary&&!this.ki(this.mi,Bi)){this.mi=Date.now();const t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(e=>{const n=dt(e,gn);return n.G().next((s=>{const i=this.qi(s,Bi),a=s.filter((u=>i.indexOf(u)===-1));return w.forEach(a,(u=>n.delete(u.clientId))).next((()=>a))}))})).catch((()=>[]));if(this.yi)for(const e of t)this.yi.removeItem(this.Qi(e.clientId))}}Di(){this.Vi=this.Ti.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.wi().then((()=>this.Li())).then((()=>this.Di()))))}Ni(t){return!!t&&t.ownerId===this.clientId}Mi(t){return this.Ei?w.resolve(!0):nr(t).get(Ye).next((e=>{if(e!==null&&this.ki(e.leaseTimestampMs,qi)&&!this.$i(e.ownerId)){if(this.Ni(e)&&this.networkEnabled)return!0;if(!this.Ni(e)){if(!e.allowTabSynchronization)throw new D(S.FAILED_PRECONDITION,ji);return!1}}return!(!this.networkEnabled||!this.inForeground)||hs(t).G().next((n=>this.qi(n,qi).find((s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,a=!this.inForeground&&s.inForeground,u=this.networkEnabled===s.networkEnabled;if(i||a&&u)return!0}return!1}))===void 0))})).next((e=>(this.isPrimary!==e&&b(ue,`Client ${e?"is":"is not"} eligible for a primary lease.`),e)))}async shutdown(){this.zr=!1,this.Ui(),this.Vi&&(this.Vi.cancel(),this.Vi=null),this.Ki(),this.Wi(),await this.pi.runTransaction("shutdown","readwrite",[Sr,gn],(t=>{const e=new to(t,bt.ae);return this.xi(e).next((()=>this.Bi(e)))})),this.pi.close(),this.Gi()}qi(t,e){return t.filter((n=>this.ki(n.updateTimeMs,e)&&!this.$i(n.clientId)))}zi(){return this.runTransaction("getActiveClients","readonly",(t=>hs(t).G().next((e=>this.qi(e,Bi).map((n=>n.clientId))))))}get started(){return this.zr}getGlobalsCache(){return this.jr}getMutationQueue(t,e){return ri.It(t,this.serializer,e,this.referenceDelegate)}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(t){return new Km(t,this.serializer.Tt.databaseId)}getDocumentOverlayCache(t){return ni.It(this.serializer,t)}getBundleCache(){return this.Yr}runTransaction(t,e,n){b(ue,"Starting transaction:",t);const s=e==="readonly"?"readonly":"readwrite",i=(function(c){return c===17?$f:c===16?Gf:c===15?bo:c===14?mc:c===13?fc:c===12?Kf:c===11?dc:void O()})(this.di);let a;return this.pi.runTransaction(t,s,i,(u=>(a=new to(u,this.Gr?this.Gr.next():bt.ae),e==="readwrite-primary"?this.Fi(a).next((c=>!!c||this.Mi(a))).next((c=>{if(!c)throw ut(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.Ti.enqueueRetryable((()=>this.fi(!1))),new D(S.FAILED_PRECONDITION,nc);return n(a)})).next((c=>this.Oi(a).next((()=>c)))):this.ji(a).next((()=>n(a)))))).then((u=>(a.raiseOnCommittedEvent(),u)))}ji(t){return nr(t).get(Ye).next((e=>{if(e!==null&&this.ki(e.leaseTimestampMs,qi)&&!this.$i(e.ownerId)&&!this.Ni(e)&&!(this.Ei||this.allowTabSynchronization&&e.allowTabSynchronization))throw new D(S.FAILED_PRECONDITION,ji)}))}Oi(t){const e={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return nr(t).put(Ye,e)}static D(){return de.D()}xi(t){const e=nr(t);return e.get(Ye).next((n=>this.Ni(n)?(b(ue,"Releasing primary lease."),e.delete(Ye)):w.resolve()))}ki(t,e){const n=Date.now();return!(t<n-e)&&(!(t>n)||(ut(`Detected an update time that is in the future: ${t} > ${n}`),!1))}Si(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ri=()=>{this.Ti.enqueueAndForget((()=>(this.inForeground=this.document.visibilityState==="visible",this.wi())))},this.document.addEventListener("visibilitychange",this.Ri),this.inForeground=this.document.visibilityState==="visible")}Ki(){this.Ri&&(this.document.removeEventListener("visibilitychange",this.Ri),this.Ri=null)}bi(){var t;typeof((t=this.window)===null||t===void 0?void 0:t.addEventListener)=="function"&&(this.Ai=()=>{this.Ui();const e=/(?:Version|Mobile)\/1[456]/;zl()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.Ti.enterRestrictedMode(!0),this.Ti.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Ai))}Wi(){this.Ai&&(this.window.removeEventListener("pagehide",this.Ai),this.Ai=null)}$i(t){var e;try{const n=((e=this.yi)===null||e===void 0?void 0:e.getItem(this.Qi(t)))!==null;return b(ue,`Client '${t}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return ut(ue,"Failed to get zombied client id.",n),!1}}Ui(){if(this.yi)try{this.yi.setItem(this.Qi(this.clientId),String(Date.now()))}catch(t){ut("Failed to set zombie client id.",t)}}Gi(){if(this.yi)try{this.yi.removeItem(this.Qi(this.clientId))}catch{}}Qi(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function nr(r){return dt(r,Sr)}function hs(r){return dt(r,gn)}function Ah(r,t){let e=r.projectId;return r.isDefaultDatabase||(e+="."+r.database),"firestore/"+t+"/"+e+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Hi=n,this.Ji=s}static Yi(t,e){let n=K(),s=K();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new $o(t,e.fromCache,n,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=(function(){return zl()?8:sc(As())>0?6:4})()}initialize(t,e){this.ns=t,this.indexManager=e,this.Zi=!0}getDocumentsMatchingQuery(t,e,n,s){const i={result:null};return this.rs(t,e).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ss(t,e,s,n).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new ug;return this._s(t,e,a).next((u=>{if(i.result=u,this.Xi)return this.us(t,e,a,u.size)}))})).next((()=>i.result))}us(t,e,n,s){return n.documentReadCount<this.es?(nn()<=Wt.DEBUG&&b("QueryEngine","SDK will not create cache indexes for query:",rn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),w.resolve()):(nn()<=Wt.DEBUG&&b("QueryEngine","Query:",rn(e),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.ts*s?(nn()<=Wt.DEBUG&&b("QueryEngine","The SDK decides to create cache indexes for query:",rn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Nt(e))):w.resolve())}rs(t,e){if(Ku(e))return w.resolve(null);let n=Nt(e);return this.indexManager.getIndexType(t,n).next((s=>s===0?null:(e.limit!==null&&s===1&&(e=Ns(e,null,"F"),n=Nt(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((i=>{const a=K(...i);return this.ns.getDocuments(t,a).next((u=>this.indexManager.getMinOffset(t,n).next((c=>{const d=this.cs(e,u);return this.ls(e,d,a,c.readTime)?this.rs(t,Ns(e,null,"F")):this.hs(t,d,e,c)}))))})))))}ss(t,e,n,s){return Ku(e)||s.isEqual(U.min())?w.resolve(null):this.ns.getDocuments(t,n).next((i=>{const a=this.cs(e,i);return this.ls(e,a,n,s)?w.resolve(null):(nn()<=Wt.DEBUG&&b("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),rn(e)),this.hs(t,a,e,tc(s,hn)).next((u=>u)))}))}cs(t,e){let n=new J(Oc(t));return e.forEach(((s,i)=>{xr(t,i)&&(n=n.add(i))})),n}ls(t,e,n,s){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const i=t.limitType==="F"?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}_s(t,e,n){return nn()<=Wt.DEBUG&&b("QueryEngine","Using full collection scan to execute query:",rn(e)),this.ns.getDocumentsMatchingQuery(t,e,Ot.min(),n)}hs(t,e,n,s){return this.ns.getDocumentsMatchingQuery(t,n,s).next((i=>(e.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo="LocalStore",lg=3e8;class cg{constructor(t,e,n,s){this.persistence=t,this.Ps=e,this.serializer=s,this.Ts=new et(q),this.Is=new te((i=>Be(i)),br),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(n)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new wh(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ts)))}}function Vh(r,t,e,n){return new cg(r,t,e,n)}async function Ph(r,t){const e=F(r);return await e.persistence.runTransaction("Handle user change","readonly",(n=>{let s;return e.mutationQueue.getAllMutationBatches(n).next((i=>(s=i,e.As(t),e.mutationQueue.getAllMutationBatches(n)))).next((i=>{const a=[],u=[];let c=K();for(const d of s){a.push(d.batchId);for(const m of d.mutations)c=c.add(m.key)}for(const d of i){u.push(d.batchId);for(const m of d.mutations)c=c.add(m.key)}return e.localDocuments.getDocuments(n,c).next((d=>({Rs:d,removedBatchIds:a,addedBatchIds:u})))}))}))}function hg(r,t){const e=F(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(n=>{const s=t.batch.keys(),i=e.ds.newChangeBuffer({trackRemovals:!0});return(function(u,c,d,m){const g=d.batch,E=g.keys();let P=w.resolve();return E.forEach((C=>{P=P.next((()=>m.getEntry(c,C))).next((N=>{const x=d.docVersions.get(C);L(x!==null),N.version.compareTo(x)<0&&(g.applyToRemoteDocument(N,d),N.isValidDocument()&&(N.setReadTime(d.commitVersion),m.addEntry(N)))}))})),P.next((()=>u.mutationQueue.removeMutationBatch(c,g)))})(e,n,t,i).next((()=>i.apply(n))).next((()=>e.mutationQueue.performConsistencyCheck(n))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(n,s,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,(function(u){let c=K();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(c=c.add(u.batch.mutations[d].key));return c})(t)))).next((()=>e.localDocuments.getDocuments(n,s)))}))}function Sh(r){const t=F(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Hr.getLastRemoteSnapshotVersion(e)))}function dg(r,t){const e=F(r),n=t.snapshotVersion;let s=e.Ts;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=e.ds.newChangeBuffer({trackRemovals:!0});s=e.Ts;const u=[];t.targetChanges.forEach(((m,g)=>{const E=s.get(g);if(!E)return;u.push(e.Hr.removeMatchingKeys(i,m.removedDocuments,g).next((()=>e.Hr.addMatchingKeys(i,m.addedDocuments,g))));let P=E.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(g)!==null?P=P.withResumeToken(lt.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):m.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(m.resumeToken,n)),s=s.insert(g,P),(function(N,x,z){return N.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=lg?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0})(E,P,m)&&u.push(e.Hr.updateTargetData(i,P))}));let c=kt(),d=K();if(t.documentUpdates.forEach((m=>{t.resolvedLimboDocuments.has(m)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(i,m))})),u.push(fg(i,a,t.documentUpdates).next((m=>{c=m.Vs,d=m.fs}))),!n.isEqual(U.min())){const m=e.Hr.getLastRemoteSnapshotVersion(i).next((g=>e.Hr.setTargetsMetadata(i,i.currentSequenceNumber,n)));u.push(m)}return w.waitFor(u).next((()=>a.apply(i))).next((()=>e.localDocuments.getLocalViewOfDocuments(i,c,d))).next((()=>c))})).then((i=>(e.Ts=s,i)))}function fg(r,t,e){let n=K(),s=K();return e.forEach((i=>n=n.add(i))),t.getEntries(r,n).next((i=>{let a=kt();return e.forEach(((u,c)=>{const d=i.get(u);c.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(u)),c.isNoDocument()&&c.version.isEqual(U.min())?(t.removeEntry(u,c.readTime),a=a.insert(u,c)):!d.isValidDocument()||c.version.compareTo(d.version)>0||c.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(c),a=a.insert(u,c)):b(Qo,"Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",c.version)})),{Vs:a,fs:s}}))}function mg(r,t){const e=F(r);return e.persistence.runTransaction("Get next mutation batch","readonly",(n=>(t===void 0&&(t=Me),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t))))}function qs(r,t){const e=F(r);return e.persistence.runTransaction("Allocate target","readwrite",(n=>{let s;return e.Hr.getTargetData(n,t).next((i=>i?(s=i,w.resolve(s)):e.Hr.allocateTargetId(n).next((a=>(s=new Ht(t,a,"TargetPurposeListen",n.currentSequenceNumber),e.Hr.addTargetData(n,s).next((()=>s)))))))})).then((n=>{const s=e.Ts.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Ts=e.Ts.insert(n.targetId,n),e.Is.set(t,n.targetId)),n}))}async function An(r,t,e){const n=F(r),s=n.Ts.get(t),i=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",i,(a=>n.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!Ie(a))throw a;b(Qo,`Failed to update sequence numbers for target ${t}: ${a}`)}n.Ts=n.Ts.remove(t),n.Is.delete(s.target)}function go(r,t,e){const n=F(r);let s=U.min(),i=K();return n.persistence.runTransaction("Execute query","readwrite",(a=>(function(c,d,m){const g=F(c),E=g.Is.get(m);return E!==void 0?w.resolve(g.Ts.get(E)):g.Hr.getTargetData(d,m)})(n,a,Nt(t)).next((u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,n.Hr.getMatchingKeysForTargetId(a,u.targetId).next((c=>{i=c}))})).next((()=>n.Ps.getDocumentsMatchingQuery(a,t,e?s:U.min(),e?i:K()))).next((u=>(xh(n,Mc(t),u),{documents:u,gs:i})))))}function bh(r,t){const e=F(r),n=F(e.Hr),s=e.Ts.get(t);return s?Promise.resolve(s.target):e.persistence.runTransaction("Get target data","readonly",(i=>n.lt(i,t).next((a=>a?a.target:null))))}function Ch(r,t){const e=F(r),n=e.Es.get(t)||U.min();return e.persistence.runTransaction("Get new document changes","readonly",(s=>e.ds.getAllFromCollectionGroup(s,t,tc(n,hn),Number.MAX_SAFE_INTEGER))).then((s=>(xh(e,t,s),s)))}function xh(r,t,e){let n=r.Es.get(t)||U.min();e.forEach(((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)})),r.Es.set(t,n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh="firestore_clients";function Tl(r,t){return`${Dh}_${r}_${t}`}const kh="firestore_mutations";function El(r,t,e){let n=`${kh}_${r}_${e}`;return t.isAuthenticated()&&(n+=`_${t.uid}`),n}const Nh="firestore_targets";function zi(r,t){return`${Nh}_${r}_${t}`}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt="SharedClientState";class js{constructor(t,e,n,s){this.user=t,this.batchId=e,this.state=n,this.error=s}static Ss(t,e,n){const s=JSON.parse(n);let i,a=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return a&&s.error&&(a=typeof s.error.message=="string"&&typeof s.error.code=="string",a&&(i=new D(s.error.code,s.error.message))),a?new js(t,e,s.state,i):(ut(qt,`Failed to parse mutation state for ID '${e}': ${n}`),null)}bs(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class mr{constructor(t,e,n){this.targetId=t,this.state=e,this.error=n}static Ss(t,e){const n=JSON.parse(e);let s,i=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return i&&n.error&&(i=typeof n.error.message=="string"&&typeof n.error.code=="string",i&&(s=new D(n.error.code,n.error.message))),i?new mr(t,n.state,s):(ut(qt,`Failed to parse target state for ID '${t}': ${e}`),null)}bs(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class zs{constructor(t,e){this.clientId=t,this.activeTargetIds=e}static Ss(t,e){const n=JSON.parse(e);let s=typeof n=="object"&&n.activeTargetIds instanceof Array,i=No();for(let a=0;s&&a<n.activeTargetIds.length;++a)s=ic(n.activeTargetIds[a]),i=i.add(n.activeTargetIds[a]);return s?new zs(t,i):(ut(qt,`Failed to parse client data for instance '${t}': ${e}`),null)}}class Wo{constructor(t,e){this.clientId=t,this.onlineState=e}static Ss(t){const e=JSON.parse(t);return typeof e=="object"&&["Unknown","Online","Offline"].indexOf(e.onlineState)!==-1&&typeof e.clientId=="string"?new Wo(e.clientId,e.onlineState):(ut(qt,`Failed to parse online state: ${t}`),null)}}class po{constructor(){this.activeTargetIds=No()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}bs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Ki{constructor(t,e,n,s,i){this.window=t,this.Ti=e,this.persistenceKey=n,this.Cs=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Fs=this.Ms.bind(this),this.xs=new et(q),this.started=!1,this.Os=[];const a=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Ns=Tl(this.persistenceKey,this.Cs),this.Bs=(function(c){return`firestore_sequence_number_${c}`})(this.persistenceKey),this.xs=this.xs.insert(this.Cs,new po),this.Ls=new RegExp(`^${Dh}_${a}_([^_]*)$`),this.ks=new RegExp(`^${kh}_${a}_(\\d+)(?:_(.*))?$`),this.qs=new RegExp(`^${Nh}_${a}_(\\d+)$`),this.Qs=(function(c){return`firestore_online_state_${c}`})(this.persistenceKey),this.$s=(function(c){return`firestore_bundle_loaded_v2_${c}`})(this.persistenceKey),this.window.addEventListener("storage",this.Fs)}static D(t){return!(!t||!t.localStorage)}async start(){const t=await this.syncEngine.zi();for(const n of t){if(n===this.Cs)continue;const s=this.getItem(Tl(this.persistenceKey,n));if(s){const i=zs.Ss(n,s);i&&(this.xs=this.xs.insert(i.clientId,i))}}this.Us();const e=this.storage.getItem(this.Qs);if(e){const n=this.Ks(e);n&&this.Ws(n)}for(const n of this.Os)this.Ms(n);this.Os=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(t){this.setItem(this.Bs,JSON.stringify(t))}getAllActiveQueryTargets(){return this.Gs(this.xs)}isActiveQueryTarget(t){let e=!1;return this.xs.forEach(((n,s)=>{s.activeTargetIds.has(t)&&(e=!0)})),e}addPendingMutation(t){this.zs(t,"pending")}updateMutationState(t,e,n){this.zs(t,e,n),this.js(t)}addLocalQueryTarget(t,e=!0){let n="not-current";if(this.isActiveQueryTarget(t)){const s=this.storage.getItem(zi(this.persistenceKey,t));if(s){const i=mr.Ss(t,s);i&&(n=i.state)}}return e&&this.Hs.Ds(t),this.Us(),n}removeLocalQueryTarget(t){this.Hs.vs(t),this.Us()}isLocalQueryTarget(t){return this.Hs.activeTargetIds.has(t)}clearQueryState(t){this.removeItem(zi(this.persistenceKey,t))}updateQueryState(t,e,n){this.Js(t,e,n)}handleUserChange(t,e,n){e.forEach((s=>{this.js(s)})),this.currentUser=t,n.forEach((s=>{this.addPendingMutation(s)}))}setOnlineState(t){this.Ys(t)}notifyBundleLoaded(t){this.Zs(t)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Fs),this.removeItem(this.Ns),this.started=!1)}getItem(t){const e=this.storage.getItem(t);return b(qt,"READ",t,e),e}setItem(t,e){b(qt,"SET",t,e),this.storage.setItem(t,e)}removeItem(t){b(qt,"REMOVE",t),this.storage.removeItem(t)}Ms(t){const e=t;if(e.storageArea===this.storage){if(b(qt,"EVENT",e.key,e.newValue),e.key===this.Ns)return void ut("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Ti.enqueueRetryable((async()=>{if(this.started){if(e.key!==null){if(this.Ls.test(e.key)){if(e.newValue==null){const n=this.Xs(e.key);return this.eo(n,null)}{const n=this.no(e.key,e.newValue);if(n)return this.eo(n.clientId,n)}}else if(this.ks.test(e.key)){if(e.newValue!==null){const n=this.ro(e.key,e.newValue);if(n)return this.io(n)}}else if(this.qs.test(e.key)){if(e.newValue!==null){const n=this.so(e.key,e.newValue);if(n)return this.oo(n)}}else if(e.key===this.Qs){if(e.newValue!==null){const n=this.Ks(e.newValue);if(n)return this.Ws(n)}}else if(e.key===this.Bs){const n=(function(i){let a=bt.ae;if(i!=null)try{const u=JSON.parse(i);L(typeof u=="number"),a=u}catch(u){ut(qt,"Failed to read sequence number from WebStorage",u)}return a})(e.newValue);n!==bt.ae&&this.sequenceNumberHandler(n)}else if(e.key===this.$s){const n=this._o(e.newValue);await Promise.all(n.map((s=>this.syncEngine.ao(s))))}}}else this.Os.push(e)}))}}get Hs(){return this.xs.get(this.Cs)}Us(){this.setItem(this.Ns,this.Hs.bs())}zs(t,e,n){const s=new js(this.currentUser,t,e,n),i=El(this.persistenceKey,this.currentUser,t);this.setItem(i,s.bs())}js(t){const e=El(this.persistenceKey,this.currentUser,t);this.removeItem(e)}Ys(t){const e={clientId:this.Cs,onlineState:t};this.storage.setItem(this.Qs,JSON.stringify(e))}Js(t,e,n){const s=zi(this.persistenceKey,t),i=new mr(t,e,n);this.setItem(s,i.bs())}Zs(t){const e=JSON.stringify(Array.from(t));this.setItem(this.$s,e)}Xs(t){const e=this.Ls.exec(t);return e?e[1]:null}no(t,e){const n=this.Xs(t);return zs.Ss(n,e)}ro(t,e){const n=this.ks.exec(t),s=Number(n[1]),i=n[2]!==void 0?n[2]:null;return js.Ss(new mt(i),s,e)}so(t,e){const n=this.qs.exec(t),s=Number(n[1]);return mr.Ss(s,e)}Ks(t){return Wo.Ss(t)}_o(t){return JSON.parse(t)}async io(t){if(t.user.uid===this.currentUser.uid)return this.syncEngine.uo(t.batchId,t.state,t.error);b(qt,`Ignoring mutation for non-active user ${t.user.uid}`)}oo(t){return this.syncEngine.co(t.targetId,t.state,t.error)}eo(t,e){const n=e?this.xs.insert(t,e):this.xs.remove(t),s=this.Gs(this.xs),i=this.Gs(n),a=[],u=[];return i.forEach((c=>{s.has(c)||a.push(c)})),s.forEach((c=>{i.has(c)||u.push(c)})),this.syncEngine.lo(a,u).then((()=>{this.xs=n}))}Ws(t){this.xs.get(t.clientId)&&this.onlineStateHandler(t.onlineState)}Gs(t){let e=No();return t.forEach(((n,s)=>{e=e.unionWith(s.activeTargetIds)})),e}}class Mh{constructor(){this.ho=new po,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,e,n){this.Po[t]=e}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new po,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{To(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl="ConnectivityMonitor";class wl{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){b(vl,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){b(vl,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ds=null;function _o(){return ds===null?ds=(function(){return 268435456+Math.round(2147483648*Math.random())})():ds++,"0x"+ds.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi="RestConnection",pg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class _g{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=e+"://"+t.host,this.yo=`projects/${n}/databases/${s}`,this.wo=this.databaseId.database===xs?`project_id=${n}`:`project_id=${n}&database_id=${s}`}So(t,e,n,s,i){const a=_o(),u=this.bo(t,e.toUriEncodedString());b(Gi,`Sending RPC '${t}' ${a}:`,u,n);const c={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(c,s,i),this.vo(t,u,c,n).then((d=>(b(Gi,`Received RPC '${t}' ${a}: `,d),d)),(d=>{throw ln(Gi,`RPC '${t}' ${a} failed with error: `,d,"url: ",u,"request:",n),d}))}Co(t,e,n,s,i,a){return this.So(t,e,n,s,i)}Do(t,e,n){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+bn})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((s,i)=>t[i]=s)),n&&n.headers.forEach(((s,i)=>t[i]=s))}bo(t,e){const n=pg[t];return`${this.po}/v1/${e}:${n}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Uo(t){this.ko(t)}Ko(t){this.qo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et="WebChannelConnection";class Ig extends _g{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,e,n,s){const i=_o();return new Promise(((a,u)=>{const c=new Gl;c.setWithCredentials(!0),c.listenOnce($l.COMPLETE,(()=>{try{switch(c.getLastErrorCode()){case fs.NO_ERROR:const m=c.getResponseJson();b(Et,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(m)),a(m);break;case fs.TIMEOUT:b(Et,`RPC '${t}' ${i} timed out`),u(new D(S.DEADLINE_EXCEEDED,"Request time out"));break;case fs.HTTP_ERROR:const g=c.getStatus();if(b(Et,`RPC '${t}' ${i} failed with status:`,g,"response text:",c.getResponseText()),g>0){let E=c.getResponseJson();Array.isArray(E)&&(E=E[0]);const P=E?.error;if(P&&P.status&&P.message){const C=(function(x){const z=x.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(z)>=0?z:S.UNKNOWN})(P.status);u(new D(C,P.message))}else u(new D(S.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new D(S.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{b(Et,`RPC '${t}' ${i} completed.`)}}));const d=JSON.stringify(s);b(Et,`RPC '${t}' ${i} sending request:`,s),c.send(e,"POST",d,n,15)}))}Wo(t,e,n){const s=_o(),i=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Hl(),u=Wl(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(c.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,e,n),c.encodeInitMessageHeaders=!0;const m=i.join("");b(Et,`Creating RPC '${t}' stream ${s}: ${m}`,c);const g=a.createWebChannel(m,c);let E=!1,P=!1;const C=new yg({Fo:x=>{P?b(Et,`Not sending because RPC '${t}' stream ${s} is closed:`,x):(E||(b(Et,`Opening RPC '${t}' stream ${s} transport.`),g.open(),E=!0),b(Et,`RPC '${t}' stream ${s} sending:`,x),g.send(x))},Mo:()=>g.close()}),N=(x,z,j)=>{x.listen(z,(B=>{try{j(B)}catch(H){setTimeout((()=>{throw H}),0)}}))};return N(g,rr.EventType.OPEN,(()=>{P||(b(Et,`RPC '${t}' stream ${s} transport opened.`),C.Qo())})),N(g,rr.EventType.CLOSE,(()=>{P||(P=!0,b(Et,`RPC '${t}' stream ${s} transport closed`),C.Uo())})),N(g,rr.EventType.ERROR,(x=>{P||(P=!0,ln(Et,`RPC '${t}' stream ${s} transport errored:`,x),C.Uo(new D(S.UNAVAILABLE,"The operation could not be completed")))})),N(g,rr.EventType.MESSAGE,(x=>{var z;if(!P){const j=x.data[0];L(!!j);const B=j,H=B?.error||((z=B[0])===null||z===void 0?void 0:z.error);if(H){b(Et,`RPC '${t}' stream ${s} received error:`,H);const tt=H.status;let Q=(function(y){const T=ct[y];if(T!==void 0)return Hc(T)})(tt),I=H.message;Q===void 0&&(Q=S.INTERNAL,I="Unknown error status: "+tt+" with message "+H.message),P=!0,C.Uo(new D(Q,I)),g.close()}else b(Et,`RPC '${t}' stream ${s} received:`,j),C.Ko(j)}})),N(u,Ql.STAT_EVENT,(x=>{x.stat===Wi.PROXY?b(Et,`RPC '${t}' stream ${s} detected buffering proxy`):x.stat===Wi.NOPROXY&&b(Et,`RPC '${t}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{C.$o()}),0),C}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(){return typeof window<"u"?window:null}function vs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(r){return new Rm(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(t,e,n=1e3,s=1.5,i=6e4){this.Ti=t,this.timerId=e,this.Go=n,this.zo=s,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const e=Math.floor(this.Ho+this.e_()),n=Math.max(0,Date.now()-this.Yo),s=Math.max(0,e-n);s>0&&b("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,(()=>(this.Yo=Date.now(),t()))),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al="PersistentStream";class Lh{constructor(t,e,n,s,i,a,u,c){this.Ti=t,this.n_=n,this.r_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=c,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Fh(t,e)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,(()=>this.T_())))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,e){this.E_(),this.d_(),this.a_.cancel(),this.i_++,t!==4?this.a_.reset():e&&e.code===S.RESOURCE_EXHAUSTED?(ut(e.toString()),ut("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(e)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),e=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,s])=>{this.i_===e&&this.V_(n,s)}),(n=>{t((()=>{const s=new D(S.UNKNOWN,"Fetching auth token failed: "+n.message);return this.m_(s)}))}))}V_(t,e){const n=this.R_(this.i_);this.stream=this.f_(t,e),this.stream.xo((()=>{n((()=>this.listener.xo()))})),this.stream.No((()=>{n((()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,(()=>(this.c_()&&(this.state=3),Promise.resolve()))),this.listener.No())))})),this.stream.Lo((s=>{n((()=>this.m_(s)))})),this.stream.onMessage((s=>{n((()=>++this.__==1?this.g_(s):this.onNext(s)))}))}l_(){this.state=5,this.a_.Xo((async()=>{this.state=0,this.start()}))}m_(t){return b(Al,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return e=>{this.Ti.enqueueAndForget((()=>this.i_===t?e():(b(Al,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Tg extends Lh{constructor(t,e,n,s,i,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,a),this.serializer=i}f_(t,e){return this.connection.Wo("Listen",t,e)}g_(t){return this.onNext(t)}onNext(t){this.a_.reset();const e=Sm(this.serializer,t),n=(function(i){if(!("targetChange"in i))return U.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?U.min():a.readTime?St(a.readTime):U.min()})(t);return this.listener.p_(e,n)}y_(t){const e={};e.database=lo(this.serializer),e.addTarget=(function(i,a){let u;const c=a.target;if(u=Ds(c)?{documents:rh(i,c)}:{query:sh(i,c).ht},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=Jc(i,a.resumeToken);const d=ao(i,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(U.min())>0){u.readTime=wn(i,a.snapshotVersion.toTimestamp());const d=ao(i,a.expectedCount);d!==null&&(u.expectedCount=d)}return u})(this.serializer,t);const n=Cm(this.serializer,t);n&&(e.labels=n),this.I_(e)}w_(t){const e={};e.database=lo(this.serializer),e.removeTarget=t,this.I_(e)}}class Eg extends Lh{constructor(t,e,n,s,i,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,a),this.serializer=i}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(t,e){return this.connection.Wo("Write",t,e)}g_(t){return L(!!t.streamToken),this.lastStreamToken=t.streamToken,L(!t.writeResults||t.writeResults.length===0),this.listener.D_()}onNext(t){L(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_.reset();const e=bm(t.writeResults,t.commitTime),n=St(t.commitTime);return this.listener.v_(n,e)}C_(){const t={};t.database=lo(this.serializer),this.I_(t)}b_(t){const e={streamToken:this.lastStreamToken,writes:t.map((n=>Os(this.serializer,n)))};this.I_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{}class wg extends vg{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new D(S.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,e,n,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.So(t,uo(e,n),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new D(S.UNKNOWN,i.toString())}))}Co(t,e,n,s,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,u])=>this.connection.Co(t,uo(e,n),s,a,u,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new D(S.UNKNOWN,a.toString())}))}terminate(){this.F_=!0,this.connection.terminate()}}class Ag{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve()))))}q_(t){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,t==="Online"&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(ut(e),this.N_=!1):b("OnlineStateTracker",e)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ke="RemoteStore";class Rg{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To((a=>{n.enqueueAndForget((async()=>{Ge(this)&&(b(Ke,"Restarting streams for network reachability change."),await(async function(c){const d=F(c);d.W_.add(4),await Mr(d),d.j_.set("Unknown"),d.W_.delete(4),await oi(d)})(this))}))})),this.j_=new Ag(n,s)}}async function oi(r){if(Ge(r))for(const t of r.G_)await t(!0)}async function Mr(r){for(const t of r.G_)await t(!1)}function ai(r,t){const e=F(r);e.K_.has(t.targetId)||(e.K_.set(t.targetId,t),Xo(e)?Yo(e):kn(e).c_()&&Ho(e,t))}function Rn(r,t){const e=F(r),n=kn(e);e.K_.delete(t),n.c_()&&Uh(e,t),e.K_.size===0&&(n.c_()?n.P_():Ge(e)&&e.j_.set("Unknown"))}function Ho(r,t){if(r.H_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(U.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}kn(r).y_(t)}function Uh(r,t){r.H_.Ne(t),kn(r).w_(t)}function Yo(r){r.H_=new Em({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>r.K_.get(t)||null,it:()=>r.datastore.serializer.databaseId}),kn(r).start(),r.j_.B_()}function Xo(r){return Ge(r)&&!kn(r).u_()&&r.K_.size>0}function Ge(r){return F(r).W_.size===0}function Bh(r){r.H_=void 0}async function Vg(r){r.j_.set("Online")}async function Pg(r){r.K_.forEach(((t,e)=>{Ho(r,t)}))}async function Sg(r,t){Bh(r),Xo(r)?(r.j_.q_(t),Yo(r)):r.j_.set("Unknown")}async function bg(r,t,e){if(r.j_.set("Online"),t instanceof Xc&&t.state===2&&t.cause)try{await(async function(s,i){const a=i.cause;for(const u of i.targetIds)s.K_.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.K_.delete(u),s.H_.removeTarget(u))})(r,t)}catch(n){b(Ke,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Ks(r,n)}else if(t instanceof Es?r.H_.We(t):t instanceof Yc?r.H_.Ze(t):r.H_.je(t),!e.isEqual(U.min()))try{const n=await Sh(r.localStore);e.compareTo(n)>=0&&await(function(i,a){const u=i.H_.ot(a);return u.targetChanges.forEach(((c,d)=>{if(c.resumeToken.approximateByteSize()>0){const m=i.K_.get(d);m&&i.K_.set(d,m.withResumeToken(c.resumeToken,a))}})),u.targetMismatches.forEach(((c,d)=>{const m=i.K_.get(c);if(!m)return;i.K_.set(c,m.withResumeToken(lt.EMPTY_BYTE_STRING,m.snapshotVersion)),Uh(i,c);const g=new Ht(m.target,c,d,m.sequenceNumber);Ho(i,g)})),i.remoteSyncer.applyRemoteEvent(u)})(r,e)}catch(n){b(Ke,"Failed to raise snapshot:",n),await Ks(r,n)}}async function Ks(r,t,e){if(!Ie(t))throw t;r.W_.add(1),await Mr(r),r.j_.set("Offline"),e||(e=()=>Sh(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{b(Ke,"Retrying IndexedDB access"),await e(),r.W_.delete(1),await oi(r)}))}function qh(r,t){return t().catch((e=>Ks(r,e,t)))}async function Dn(r){const t=F(r),e=pe(t);let n=t.U_.length>0?t.U_[t.U_.length-1].batchId:Me;for(;Cg(t);)try{const s=await mg(t.localStore,n);if(s===null){t.U_.length===0&&e.P_();break}n=s.batchId,xg(t,s)}catch(s){await Ks(t,s)}jh(t)&&zh(t)}function Cg(r){return Ge(r)&&r.U_.length<10}function xg(r,t){r.U_.push(t);const e=pe(r);e.c_()&&e.S_&&e.b_(t.mutations)}function jh(r){return Ge(r)&&!pe(r).u_()&&r.U_.length>0}function zh(r){pe(r).start()}async function Dg(r){pe(r).C_()}async function kg(r){const t=pe(r);for(const e of r.U_)t.b_(e.mutations)}async function Ng(r,t,e){const n=r.U_.shift(),s=Fo.from(n,t,e);await qh(r,(()=>r.remoteSyncer.applySuccessfulWrite(s))),await Dn(r)}async function Mg(r,t){t&&pe(r).S_&&await(async function(n,s){if((function(a){return Im(a)&&a!==S.ABORTED})(s.code)){const i=n.U_.shift();pe(n).h_(),await qh(n,(()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Dn(n)}})(r,t),jh(r)&&zh(r)}async function Rl(r,t){const e=F(r);e.asyncQueue.verifyOperationInProgress(),b(Ke,"RemoteStore received new credentials");const n=Ge(e);e.W_.add(3),await Mr(e),n&&e.j_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.W_.delete(3),await oi(e)}async function yo(r,t){const e=F(r);t?(e.W_.delete(2),await oi(e)):t||(e.W_.add(2),await Mr(e),e.j_.set("Unknown"))}function kn(r){return r.J_||(r.J_=(function(e,n,s){const i=F(e);return i.M_(),new Tg(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(r.datastore,r.asyncQueue,{xo:Vg.bind(null,r),No:Pg.bind(null,r),Lo:Sg.bind(null,r),p_:bg.bind(null,r)}),r.G_.push((async t=>{t?(r.J_.h_(),Xo(r)?Yo(r):r.j_.set("Unknown")):(await r.J_.stop(),Bh(r))}))),r.J_}function pe(r){return r.Y_||(r.Y_=(function(e,n,s){const i=F(e);return i.M_(),new Eg(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(r.datastore,r.asyncQueue,{xo:()=>Promise.resolve(),No:Dg.bind(null,r),Lo:Mg.bind(null,r),D_:kg.bind(null,r),v_:Ng.bind(null,r)}),r.G_.push((async t=>{t?(r.Y_.h_(),await Dn(r)):(await r.Y_.stop(),r.U_.length>0&&(b(Ke,`Stopping write stream with ${r.U_.length} pending writes`),r.U_=[]))}))),r.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new Yt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,s,i){const a=Date.now()+n,u=new Jo(t,e,a,s,i);return u.start(n),u}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zo(r,t){if(ut("AsyncQueue",`${t}: ${r}`),Ie(r))return new D(S.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{static emptySet(t){return new un(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||M.comparator(e.key,n.key):(e,n)=>M.comparator(e.key,n.key),this.keyedMap=sr(),this.sortedSet=new et(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof un)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new un;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(){this.Z_=new et(M.comparator)}track(t){const e=t.doc.key,n=this.Z_.get(e);n?t.type!==0&&n.type===3?this.Z_=this.Z_.insert(e,t):t.type===3&&n.type!==1?this.Z_=this.Z_.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.Z_=this.Z_.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.Z_=this.Z_.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.Z_=this.Z_.remove(e):t.type===1&&n.type===2?this.Z_=this.Z_.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.Z_=this.Z_.insert(e,{type:2,doc:t.doc}):O():this.Z_=this.Z_.insert(e,t)}X_(){const t=[];return this.Z_.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Vn{constructor(t,e,n,s,i,a,u,c,d){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=c,this.hasCachedResults=d}static fromInitialDocuments(t,e,n,s,i){const a=[];return e.forEach((u=>{a.push({type:0,doc:u})})),new Vn(t,e,un.emptySet(e),a,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Zs(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some((t=>t.ra()))}}class Fg{constructor(){this.queries=Pl(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(e,n){const s=F(e),i=s.queries;s.queries=Pl(),i.forEach(((a,u)=>{for(const c of u.ta)c.onError(n)}))})(this,new D(S.ABORTED,"Firestore shutting down"))}}function Pl(){return new te((r=>Nc(r)),Zs)}async function Kh(r,t){const e=F(r);let n=3;const s=t.query;let i=e.queries.get(s);i?!i.na()&&t.ra()&&(n=2):(i=new Og,n=t.ra()?0:1);try{switch(n){case 0:i.ea=await e.onListen(s,!0);break;case 1:i.ea=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const u=Zo(a,`Initialization of query '${rn(t.query)}' failed`);return void t.onError(u)}e.queries.set(s,i),i.ta.push(t),t.sa(e.onlineState),i.ea&&t.oa(i.ea)&&ta(e)}async function Gh(r,t){const e=F(r),n=t.query;let s=3;const i=e.queries.get(n);if(i){const a=i.ta.indexOf(t);a>=0&&(i.ta.splice(a,1),i.ta.length===0?s=t.ra()?0:1:!i.na()&&t.ra()&&(s=2))}switch(s){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function Lg(r,t){const e=F(r);let n=!1;for(const s of t){const i=s.query,a=e.queries.get(i);if(a){for(const u of a.ta)u.oa(s)&&(n=!0);a.ea=s}}n&&ta(e)}function Ug(r,t,e){const n=F(r),s=n.queries.get(t);if(s)for(const i of s.ta)i.onError(e);n.queries.delete(t)}function ta(r){r.ia.forEach((t=>{t.next()}))}var Io,Sl;(Sl=Io||(Io={}))._a="default",Sl.Cache="cache";class $h{constructor(t,e,n){this.query=t,this.aa=e,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=n||{}}oa(t){if(!this.options.includeMetadataChanges){const n=[];for(const s of t.docChanges)s.type!==3&&n.push(s);t=new Vn(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ua?this.la(t)&&(this.aa.next(t),e=!0):this.ha(t,this.onlineState)&&(this.Pa(t),e=!0),this.ca=t,e}onError(t){this.aa.error(t)}sa(t){this.onlineState=t;let e=!1;return this.ca&&!this.ua&&this.ha(this.ca,t)&&(this.Pa(this.ca),e=!0),e}ha(t,e){if(!t.fromCache||!this.ra())return!0;const n=e!=="Offline";return(!this.options.Ta||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}la(t){if(t.docChanges.length>0)return!0;const e=this.ca&&this.ca.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}Pa(t){t=Vn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ua=!0,this.aa.next(t)}ra(){return this.options.source!==Io.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(t){this.key=t}}class Wh{constructor(t){this.key=t}}class Bg{constructor(t,e){this.query=t,this.fa=e,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=K(),this.mutatedKeys=K(),this.ya=Oc(t),this.wa=new un(this.ya)}get Sa(){return this.fa}ba(t,e){const n=e?e.Da:new Vl,s=e?e.wa:this.wa;let i=e?e.mutatedKeys:this.mutatedKeys,a=s,u=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((m,g)=>{const E=s.get(m),P=xr(this.query,g)?g:null,C=!!E&&this.mutatedKeys.has(E.key),N=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let x=!1;E&&P?E.data.isEqual(P.data)?C!==N&&(n.track({type:3,doc:P}),x=!0):this.va(E,P)||(n.track({type:2,doc:P}),x=!0,(c&&this.ya(P,c)>0||d&&this.ya(P,d)<0)&&(u=!0)):!E&&P?(n.track({type:0,doc:P}),x=!0):E&&!P&&(n.track({type:1,doc:E}),x=!0,(c||d)&&(u=!0)),x&&(P?(a=a.add(P),i=N?i.add(m):i.delete(m)):(a=a.delete(m),i=i.delete(m)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),i=i.delete(m.key),n.track({type:1,doc:m})}return{wa:a,Da:n,ls:u,mutatedKeys:i}}va(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,s){const i=this.wa;this.wa=t.wa,this.mutatedKeys=t.mutatedKeys;const a=t.Da.X_();a.sort(((m,g)=>(function(P,C){const N=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O()}};return N(P)-N(C)})(m.type,g.type)||this.ya(m.doc,g.doc))),this.Ca(n),s=s!=null&&s;const u=e&&!s?this.Fa():[],c=this.pa.size===0&&this.current&&!s?1:0,d=c!==this.ga;return this.ga=c,a.length!==0||d?{snapshot:new Vn(this.query,t.wa,i,a,t.mutatedKeys,c===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ma:u}:{Ma:u}}sa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new Vl,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(t){return!this.fa.has(t)&&!!this.wa.has(t)&&!this.wa.get(t).hasLocalMutations}Ca(t){t&&(t.addedDocuments.forEach((e=>this.fa=this.fa.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.fa=this.fa.delete(e))),this.current=t.current)}Fa(){if(!this.current)return[];const t=this.pa;this.pa=K(),this.wa.forEach((n=>{this.xa(n.key)&&(this.pa=this.pa.add(n.key))}));const e=[];return t.forEach((n=>{this.pa.has(n)||e.push(new Wh(n))})),this.pa.forEach((n=>{t.has(n)||e.push(new Qh(n))})),e}Oa(t){this.fa=t.gs,this.pa=K();const e=this.ba(t.documents);return this.applyChanges(e,!0)}Na(){return Vn.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Nn="SyncEngine";class qg{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class jg{constructor(t){this.key=t,this.Ba=!1}}class zg{constructor(t,e,n,s,i,a){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.La={},this.ka=new te((u=>Nc(u)),Zs),this.qa=new Map,this.Qa=new Set,this.$a=new et(M.comparator),this.Ua=new Map,this.Ka=new zo,this.Wa={},this.Ga=new Map,this.za=ze.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function Kg(r,t,e=!0){const n=ui(r);let s;const i=n.ka.get(t);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Na()):s=await Hh(n,t,e,!0),s}async function Gg(r,t){const e=ui(r);await Hh(e,t,!0,!1)}async function Hh(r,t,e,n){const s=await qs(r.localStore,Nt(t)),i=s.targetId,a=r.sharedClientState.addLocalQueryTarget(i,e);let u;return n&&(u=await ea(r,t,i,a==="current",s.resumeToken)),r.isPrimaryClient&&e&&ai(r.remoteStore,s),u}async function ea(r,t,e,n,s){r.Ha=(g,E,P)=>(async function(N,x,z,j){let B=x.view.ba(z);B.ls&&(B=await go(N.localStore,x.query,!1).then((({documents:I})=>x.view.ba(I,B))));const H=j&&j.targetChanges.get(x.targetId),tt=j&&j.targetMismatches.get(x.targetId)!=null,Q=x.view.applyChanges(B,N.isPrimaryClient,H,tt);return To(N,x.targetId,Q.Ma),Q.snapshot})(r,g,E,P);const i=await go(r.localStore,t,!0),a=new Bg(t,i.gs),u=a.ba(i.documents),c=Nr.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",s),d=a.applyChanges(u,r.isPrimaryClient,c);To(r,e,d.Ma);const m=new qg(t,e,a);return r.ka.set(t,m),r.qa.has(e)?r.qa.get(e).push(t):r.qa.set(e,[t]),d.snapshot}async function $g(r,t,e){const n=F(r),s=n.ka.get(t),i=n.qa.get(s.targetId);if(i.length>1)return n.qa.set(s.targetId,i.filter((a=>!Zs(a,t)))),void n.ka.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await An(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),e&&Rn(n.remoteStore,s.targetId),Pn(n,s.targetId)})).catch(ye)):(Pn(n,s.targetId),await An(n.localStore,s.targetId,!0))}async function Qg(r,t){const e=F(r),n=e.ka.get(t),s=e.qa.get(n.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),Rn(e.remoteStore,n.targetId))}async function Wg(r,t,e){const n=ia(r);try{const s=await(function(a,u){const c=F(a),d=it.now(),m=u.reduce(((P,C)=>P.add(C.key)),K());let g,E;return c.persistence.runTransaction("Locally write mutations","readwrite",(P=>{let C=kt(),N=K();return c.ds.getEntries(P,m).next((x=>{C=x,C.forEach(((z,j)=>{j.isValidDocument()||(N=N.add(z))}))})).next((()=>c.localDocuments.getOverlayedDocuments(P,C))).next((x=>{g=x;const z=[];for(const j of u){const B=_m(j,g.get(j.key).overlayedDocument);B!=null&&z.push(new ee(j.key,B,Ac(B.value.mapValue),ht.exists(!0)))}return c.mutationQueue.addMutationBatch(P,d,z,u)})).next((x=>{E=x;const z=x.applyToLocalDocumentSet(g,N);return c.documentOverlayCache.saveOverlays(P,x.batchId,z)}))})).then((()=>({batchId:E.batchId,changes:Lc(g)})))})(n.localStore,t);n.sharedClientState.addPendingMutation(s.batchId),(function(a,u,c){let d=a.Wa[a.currentUser.toKey()];d||(d=new et(q)),d=d.insert(u,c),a.Wa[a.currentUser.toKey()]=d})(n,s.batchId,e),await Ee(n,s.changes),await Dn(n.remoteStore)}catch(s){const i=Zo(s,"Failed to persist write");e.reject(i)}}async function Yh(r,t){const e=F(r);try{const n=await dg(e.localStore,t);t.targetChanges.forEach(((s,i)=>{const a=e.Ua.get(i);a&&(L(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.Ba=!0:s.modifiedDocuments.size>0?L(a.Ba):s.removedDocuments.size>0&&(L(a.Ba),a.Ba=!1))})),await Ee(e,n,t)}catch(n){await ye(n)}}function bl(r,t,e){const n=F(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const s=[];n.ka.forEach(((i,a)=>{const u=a.view.sa(t);u.snapshot&&s.push(u.snapshot)})),(function(a,u){const c=F(a);c.onlineState=u;let d=!1;c.queries.forEach(((m,g)=>{for(const E of g.ta)E.sa(u)&&(d=!0)})),d&&ta(c)})(n.eventManager,t),s.length&&n.La.p_(s),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function Hg(r,t,e){const n=F(r);n.sharedClientState.updateQueryState(t,"rejected",e);const s=n.Ua.get(t),i=s&&s.key;if(i){let a=new et(M.comparator);a=a.insert(i,at.newNoDocument(i,U.min()));const u=K().add(i),c=new kr(U.min(),new Map,new et(q),a,u);await Yh(n,c),n.$a=n.$a.remove(i),n.Ua.delete(t),sa(n)}else await An(n.localStore,t,!1).then((()=>Pn(n,t,e))).catch(ye)}async function Yg(r,t){const e=F(r),n=t.batch.batchId;try{const s=await hg(e.localStore,t);ra(e,n,null),na(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await Ee(e,s)}catch(s){await ye(s)}}async function Xg(r,t,e){const n=F(r);try{const s=await(function(a,u){const c=F(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let m;return c.mutationQueue.lookupMutationBatch(d,u).next((g=>(L(g!==null),m=g.keys(),c.mutationQueue.removeMutationBatch(d,g)))).next((()=>c.mutationQueue.performConsistencyCheck(d))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(d,m,u))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m))).next((()=>c.localDocuments.getDocuments(d,m)))}))})(n.localStore,t);ra(n,t,e),na(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await Ee(n,s)}catch(s){await ye(s)}}function na(r,t){(r.Ga.get(t)||[]).forEach((e=>{e.resolve()})),r.Ga.delete(t)}function ra(r,t,e){const n=F(r);let s=n.Wa[n.currentUser.toKey()];if(s){const i=s.get(t);i&&(e?i.reject(e):i.resolve(),s=s.remove(t)),n.Wa[n.currentUser.toKey()]=s}}function Pn(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.qa.get(t))r.ka.delete(n),e&&r.La.Ja(n,e);r.qa.delete(t),r.isPrimaryClient&&r.Ka.br(t).forEach((n=>{r.Ka.containsKey(n)||Xh(r,n)}))}function Xh(r,t){r.Qa.delete(t.path.canonicalString());const e=r.$a.get(t);e!==null&&(Rn(r.remoteStore,e),r.$a=r.$a.remove(t),r.Ua.delete(e),sa(r))}function To(r,t,e){for(const n of e)n instanceof Qh?(r.Ka.addReference(n.key,t),Jg(r,n)):n instanceof Wh?(b(Nn,"Document no longer in limbo: "+n.key),r.Ka.removeReference(n.key,t),r.Ka.containsKey(n.key)||Xh(r,n.key)):O()}function Jg(r,t){const e=t.key,n=e.path.canonicalString();r.$a.get(e)||r.Qa.has(n)||(b(Nn,"New document in limbo: "+e),r.Qa.add(n),sa(r))}function sa(r){for(;r.Qa.size>0&&r.$a.size<r.maxConcurrentLimboResolutions;){const t=r.Qa.values().next().value;r.Qa.delete(t);const e=new M(Y.fromString(t)),n=r.za.next();r.Ua.set(n,new jg(e)),r.$a=r.$a.insert(e,n),ai(r.remoteStore,new Ht(Nt(Cr(e.path)),n,"TargetPurposeLimboResolution",bt.ae))}}async function Ee(r,t,e){const n=F(r),s=[],i=[],a=[];n.ka.isEmpty()||(n.ka.forEach(((u,c)=>{a.push(n.Ha(c,t,e).then((d=>{var m;if((d||e)&&n.isPrimaryClient){const g=d?!d.fromCache:(m=e?.targetChanges.get(c.targetId))===null||m===void 0?void 0:m.current;n.sharedClientState.updateQueryState(c.targetId,g?"current":"not-current")}if(d){s.push(d);const g=$o.Yi(c.targetId,d);i.push(g)}})))})),await Promise.all(a),n.La.p_(s),await(async function(c,d){const m=F(c);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",(g=>w.forEach(d,(E=>w.forEach(E.Hi,(P=>m.persistence.referenceDelegate.addReference(g,E.targetId,P))).next((()=>w.forEach(E.Ji,(P=>m.persistence.referenceDelegate.removeReference(g,E.targetId,P)))))))))}catch(g){if(!Ie(g))throw g;b(Qo,"Failed to update sequence numbers: "+g)}for(const g of d){const E=g.targetId;if(!g.fromCache){const P=m.Ts.get(E),C=P.snapshotVersion,N=P.withLastLimboFreeSnapshotVersion(C);m.Ts=m.Ts.insert(E,N)}}})(n.localStore,i))}async function Zg(r,t){const e=F(r);if(!e.currentUser.isEqual(t)){b(Nn,"User change. New user:",t.toKey());const n=await Ph(e.localStore,t);e.currentUser=t,(function(i,a){i.Ga.forEach((u=>{u.forEach((c=>{c.reject(new D(S.CANCELLED,a))}))})),i.Ga.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await Ee(e,n.Rs)}}function tp(r,t){const e=F(r),n=e.Ua.get(t);if(n&&n.Ba)return K().add(n.key);{let s=K();const i=e.qa.get(t);if(!i)return s;for(const a of i){const u=e.ka.get(a);s=s.unionWith(u.view.Sa)}return s}}async function ep(r,t){const e=F(r),n=await go(e.localStore,t.query,!0),s=t.view.Oa(n);return e.isPrimaryClient&&To(e,t.targetId,s.Ma),s}async function np(r,t){const e=F(r);return Ch(e.localStore,t).then((n=>Ee(e,n)))}async function rp(r,t,e,n){const s=F(r),i=await(function(u,c){const d=F(u),m=F(d.mutationQueue);return d.persistence.runTransaction("Lookup mutation documents","readonly",(g=>m.Ln(g,c).next((E=>E?d.localDocuments.getDocuments(g,E):w.resolve(null)))))})(s.localStore,t);i!==null?(e==="pending"?await Dn(s.remoteStore):e==="acknowledged"||e==="rejected"?(ra(s,t,n||null),na(s,t),(function(u,c){F(F(u).mutationQueue).qn(c)})(s.localStore,t)):O(),await Ee(s,i)):b(Nn,"Cannot apply mutation batch with id: "+t)}async function sp(r,t){const e=F(r);if(ui(e),ia(e),t===!0&&e.ja!==!0){const n=e.sharedClientState.getAllActiveQueryTargets(),s=await Cl(e,n.toArray());e.ja=!0,await yo(e.remoteStore,!0);for(const i of s)ai(e.remoteStore,i)}else if(t===!1&&e.ja!==!1){const n=[];let s=Promise.resolve();e.qa.forEach(((i,a)=>{e.sharedClientState.isLocalQueryTarget(a)?n.push(a):s=s.then((()=>(Pn(e,a),An(e.localStore,a,!0)))),Rn(e.remoteStore,a)})),await s,await Cl(e,n),(function(a){const u=F(a);u.Ua.forEach(((c,d)=>{Rn(u.remoteStore,d)})),u.Ka.Dr(),u.Ua=new Map,u.$a=new et(M.comparator)})(e),e.ja=!1,await yo(e.remoteStore,!1)}}async function Cl(r,t,e){const n=F(r),s=[],i=[];for(const a of t){let u;const c=n.qa.get(a);if(c&&c.length!==0){u=await qs(n.localStore,Nt(c[0]));for(const d of c){const m=n.ka.get(d),g=await ep(n,m);g.snapshot&&i.push(g.snapshot)}}else{const d=await bh(n.localStore,a);u=await qs(n.localStore,d),await ea(n,Jh(d),a,!1,u.resumeToken)}s.push(u)}return n.La.p_(i),s}function Jh(r){return Dc(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function ip(r){return(function(e){return F(F(e).persistence).zi()})(F(r).localStore)}async function op(r,t,e,n){const s=F(r);if(s.ja)return void b(Nn,"Ignoring unexpected query state notification.");const i=s.qa.get(t);if(i&&i.length>0)switch(e){case"current":case"not-current":{const a=await Ch(s.localStore,Mc(i[0])),u=kr.createSynthesizedRemoteEventForCurrentChange(t,e==="current",lt.EMPTY_BYTE_STRING);await Ee(s,a,u);break}case"rejected":await An(s.localStore,t,!0),Pn(s,t,n);break;default:O()}}async function ap(r,t,e){const n=ui(r);if(n.ja){for(const s of t){if(n.qa.has(s)&&n.sharedClientState.isActiveQueryTarget(s)){b(Nn,"Adding an already active target "+s);continue}const i=await bh(n.localStore,s),a=await qs(n.localStore,i);await ea(n,Jh(i),a.targetId,!1,a.resumeToken),ai(n.remoteStore,a)}for(const s of e)n.qa.has(s)&&await An(n.localStore,s,!1).then((()=>{Rn(n.remoteStore,s),Pn(n,s)})).catch(ye)}}function ui(r){const t=F(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=Yh.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=tp.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Hg.bind(null,t),t.La.p_=Lg.bind(null,t.eventManager),t.La.Ja=Ug.bind(null,t.eventManager),t}function ia(r){const t=F(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Yg.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Xg.bind(null,t),t}class Vr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=ii(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,e){return null}nu(t,e){return null}eu(t){return Vh(this.persistence,new Rh,t.initialUser,this.serializer)}Xa(t){return new Ko(si.ri,this.serializer)}Za(t){return new Mh}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Vr.provider={build:()=>new Vr};class up extends Vr{constructor(t){super(),this.cacheSizeBytes=t}tu(t,e){L(this.persistence.referenceDelegate instanceof Bs);const n=this.persistence.referenceDelegate.garbageCollector;return new Ih(n,t.asyncQueue,e)}Xa(t){const e=this.cacheSizeBytes!==void 0?vt.withCacheSize(this.cacheSizeBytes):vt.DEFAULT;return new Ko((n=>Bs.ri(n,e)),this.serializer)}}class Zh extends Vr{constructor(t,e,n){super(),this.ru=t,this.cacheSizeBytes=e,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await this.ru.initialize(this,t),await ia(this.ru.syncEngine),await Dn(this.ru.remoteStore),await this.persistence.Ci((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}eu(t){return Vh(this.persistence,new Rh,t.initialUser,this.serializer)}tu(t,e){const n=this.persistence.referenceDelegate.garbageCollector;return new Ih(n,t.asyncQueue,e)}nu(t,e){const n=new Tf(e,this.persistence);return new If(t.asyncQueue,n)}Xa(t){const e=Ah(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?vt.withCacheSize(this.cacheSizeBytes):vt.DEFAULT;return new Go(this.synchronizeTabs,e,t.clientId,n,t.asyncQueue,Oh(),vs(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Za(t){return new Mh}}class lp extends Zh{constructor(t,e){super(t,e,!1),this.ru=t,this.cacheSizeBytes=e,this.synchronizeTabs=!0}async initialize(t){await super.initialize(t);const e=this.ru.syncEngine;this.sharedClientState instanceof Ki&&(this.sharedClientState.syncEngine={uo:rp.bind(null,e),co:op.bind(null,e),lo:ap.bind(null,e),zi:ip.bind(null,e),ao:np.bind(null,e)},await this.sharedClientState.start()),await this.persistence.Ci((async n=>{await sp(this.ru.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())}))}Za(t){const e=Oh();if(!Ki.D(e))throw new D(S.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=Ah(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey);return new Ki(e,t.asyncQueue,n,t.clientId,t.initialUser)}}class Pr{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>bl(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Zg.bind(null,this.syncEngine),await yo(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new Fg})()}createDatastore(t){const e=ii(t.databaseInfo.databaseId),n=(function(i){return new Ig(i)})(t.databaseInfo);return(function(i,a,u,c){return new wg(i,a,u,c)})(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return(function(n,s,i,a,u){return new Rg(n,s,i,a,u)})(this.localStore,this.datastore,t.asyncQueue,(e=>bl(this.syncEngine,e,0)),(function(){return wl.D()?new wl:new gg})())}createSyncEngine(t,e){return(function(s,i,a,u,c,d,m){const g=new zg(s,i,a,u,c,d);return m&&(g.ja=!0),g})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await(async function(s){const i=F(s);b(Ke,"RemoteStore shutting down."),i.W_.add(5),await Mr(i),i.z_.shutdown(),i.j_.set("Unknown")})(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Pr.provider={build:()=>new Pr};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.iu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.iu(this.observer.error,t):ut("Uncaught Error in snapshot listener:",t.toString()))}su(){this.muted=!0}iu(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e="FirestoreClient";class cp{constructor(t,e,n,s,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=mt.UNAUTHENTICATED,this.clientId=Jl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,(async a=>{b(_e,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(n,(a=>(b(_e,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Yt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Zo(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function $i(r,t){r.asyncQueue.verifyOperationInProgress(),b(_e,"Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener((async s=>{n.isEqual(s)||(await Ph(t.localStore,s),n=s)})),t.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=t}async function xl(r,t){r.asyncQueue.verifyOperationInProgress();const e=await hp(r);b(_e,"Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener((n=>Rl(t.remoteStore,n))),r.setAppCheckTokenChangeListener(((n,s)=>Rl(t.remoteStore,s))),r._onlineComponents=t}async function hp(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){b(_e,"Using user provided OfflineComponentProvider");try{await $i(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(s){return s.name==="FirebaseError"?s.code===S.FAILED_PRECONDITION||s.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(e))throw e;ln("Error using user provided cache. Falling back to memory cache: "+e),await $i(r,new Vr)}}else b(_e,"Using default OfflineComponentProvider"),await $i(r,new up(void 0));return r._offlineComponents}async function ed(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(b(_e,"Using user provided OnlineComponentProvider"),await xl(r,r._uninitializedComponentsProvider._online)):(b(_e,"Using default OnlineComponentProvider"),await xl(r,new Pr))),r._onlineComponents}function dp(r){return ed(r).then((t=>t.syncEngine))}async function Eo(r){const t=await ed(r),e=t.eventManager;return e.onListen=Kg.bind(null,t.syncEngine),e.onUnlisten=$g.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Gg.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Qg.bind(null,t.syncEngine),e}function fp(r,t,e={}){const n=new Yt;return r.asyncQueue.enqueueAndForget((async()=>(function(i,a,u,c,d){const m=new td({next:E=>{m.su(),a.enqueueAndForget((()=>Gh(i,g)));const P=E.docs.has(u);!P&&E.fromCache?d.reject(new D(S.UNAVAILABLE,"Failed to get document because the client is offline.")):P&&E.fromCache&&c&&c.source==="server"?d.reject(new D(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(E)},error:E=>d.reject(E)}),g=new $h(Cr(u.path),m,{includeMetadataChanges:!0,Ta:!0});return Kh(i,g)})(await Eo(r),r.asyncQueue,t,e,n))),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(r,t,e){if(!e)throw new D(S.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function mp(r,t,e,n){if(t===!0&&n===!0)throw new D(S.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function kl(r){if(!M.isDocumentKey(r))throw new D(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Nl(r){if(M.isDocumentKey(r))throw new D(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function li(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=(function(n){return n.constructor?n.constructor.name:null})(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":O()}function Mt(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new D(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=li(r);throw new D(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}function gp(r,t){if(t<=0)throw new D(S.INVALID_ARGUMENT,`Function ${r}() requires a positive number, but it was: ${t}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd="firestore.googleapis.com",Ml=!0;class Ol{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new D(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=sd,this.ssl=Ml}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:Ml;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=mh;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<yh)throw new D(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}mp("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=nd((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new D(S.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new D(S.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new D(S.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(n,s){return n.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ci{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ol({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new D(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new D(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ol(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new uf;switch(n.type){case"firstParty":return new df(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new D(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const n=Dl.get(e);n&&(b("ComponentProvider","Removing Datastore"),Dl.delete(e),n.terminate())})(this),Promise.resolve()}}function Mp(r,t,e,n={}){var s;const i=(r=Mt(r,ci))._getSettings(),a=Object.assign(Object.assign({},i),{emulatorOptions:r._getEmulatorOptions()}),u=`${t}:${e}`;i.host!==sd&&i.host!==u&&ln("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},i),{host:u,ssl:!1,emulatorOptions:n});if(!jl(c,a)&&(r._setSettings(c),n.mockUserToken)){let d,m;if(typeof n.mockUserToken=="string")d=n.mockUserToken,m=mt.MOCK_USER;else{d=sf(n.mockUserToken,(s=r._app)===null||s===void 0?void 0:s.options.projectId);const g=n.mockUserToken.sub||n.mockUserToken.user_id;if(!g)throw new D(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new mt(g)}r._authCredentials=new lf(new Yl(d,m))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new ve(this.firestore,t,this._query)}}class Rt{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fe(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Rt(this.firestore,t,this._key)}}class fe extends ve{constructor(t,e,n){super(t,e,Cr(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Rt(this.firestore,null,new M(t))}withConverter(t){return new fe(this.firestore,t,this._path)}}function Op(r,t,...e){if(r=Ft(r),rd("collection","path",t),r instanceof ci){const n=Y.fromString(t,...e);return Nl(n),new fe(r,null,n)}{if(!(r instanceof Rt||r instanceof fe))throw new D(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Y.fromString(t,...e));return Nl(n),new fe(r.firestore,null,n)}}function pp(r,t,...e){if(r=Ft(r),arguments.length===1&&(t=Jl.newId()),rd("doc","path",t),r instanceof ci){const n=Y.fromString(t,...e);return kl(n),new Rt(r,null,new M(n))}{if(!(r instanceof Rt||r instanceof fe))throw new D(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Y.fromString(t,...e));return kl(n),new Rt(r.firestore,r instanceof fe?r.converter:null,new M(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl="AsyncQueue";class Ll{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Fh(this,"async_queue_retry"),this.Su=()=>{const n=vs();n&&b(Fl,"Visibility state changed to "+n.visibilityState),this.a_.t_()},this.bu=t;const e=vs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const e=vs();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Su)}}enqueue(t){if(this.Du(),this.mu)return new Promise((()=>{}));const e=new Yt;return this.vu((()=>this.mu&&this.yu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Vu.push(t),this.Cu())))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!Ie(t))throw t;b(Fl,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo((()=>this.Cu()))}}vu(t){const e=this.bu.then((()=>(this.pu=!0,t().catch((n=>{this.gu=n,this.pu=!1;const s=(function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u})(n);throw ut("INTERNAL UNHANDLED ERROR: ",s),n})).then((n=>(this.pu=!1,n))))));return this.bu=e,e}enqueueAfterDelay(t,e,n){this.Du(),this.wu.indexOf(t)>-1&&(e=0);const s=Jo.createAndSchedule(this,t,e,n,(i=>this.Fu(i)));return this.fu.push(s),s}Du(){this.gu&&O()}verifyOperationInProgress(){}async Mu(){let t;do t=this.bu,await t;while(t!==this.bu)}xu(t){for(const e of this.fu)if(e.timerId===t)return!0;return!1}Ou(t){return this.Mu().then((()=>{this.fu.sort(((e,n)=>e.targetTimeMs-n.targetTimeMs));for(const e of this.fu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Mu()}))}Nu(t){this.wu.push(t)}Fu(t){const e=this.fu.indexOf(t);this.fu.splice(e,1)}}function Ul(r){return(function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1})(r,["next","error","complete"])}class Zt extends ci{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new Ll,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Ll(t),this._firestoreClient=void 0,await t}}}function Fp(r,t,e){e||(e=xs);const n=rf(r,"firestore");if(n.isInitialized(e)){const s=n.getImmediate({identifier:e}),i=n.getOptions(e);if(jl(i,t))return s;throw new D(S.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(t.cacheSizeBytes!==void 0&&t.localCache!==void 0)throw new D(S.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(t.cacheSizeBytes!==void 0&&t.cacheSizeBytes!==-1&&t.cacheSizeBytes<yh)throw new D(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return n.initialize({options:t,instanceIdentifier:e})}function hi(r){if(r._terminated)throw new D(S.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||_p(r),r._firestoreClient}function _p(r){var t,e,n;const s=r._freezeSettings(),i=(function(u,c,d,m){return new Wf(u,c,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,nd(m.experimentalLongPollingOptions),m.useFetchStreams)})(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,s);r._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=s.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),r._firestoreClient=new cp(r._authCredentials,r._appCheckCredentials,r._queue,i,r._componentsProvider&&(function(u){const c=u?._online.build();return{_offline:u?._offline.build(c),_online:c}})(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Sn(lt.fromBase64String(t))}catch(e){throw new D(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Sn(lt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new D(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new D(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new D(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return q(this._lat,t._lat)||q(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0})(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp=/^__.*__$/;class Ip{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new ee(t,this.data,this.fieldMask,e,this.fieldTransforms):new xn(t,this.data,e,this.fieldTransforms)}}class id{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new ee(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function od(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O()}}class ua{constructor(t,e,n,s,i,a){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(t){return new ua(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.ku({path:n,Qu:!1});return s.$u(t),s}Uu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.ku({path:n,Qu:!1});return s.Bu(),s}Ku(t){return this.ku({path:void 0,Qu:!0})}Wu(t){return Gs(t,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}Bu(){if(this.path)for(let t=0;t<this.path.length;t++)this.$u(this.path.get(t))}$u(t){if(t.length===0)throw this.Wu("Document fields must not be empty");if(od(this.Lu)&&yp.test(t))throw this.Wu('Document fields cannot begin and end with "__"')}}class Tp{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||ii(t)}ju(t,e,n,s=!1){return new ua({Lu:t,methodName:e,zu:n,path:st.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Fr(r){const t=r._freezeSettings(),e=ii(r._databaseId);return new Tp(r._databaseId,!!t.ignoreUndefinedProperties,e)}function la(r,t,e,n,s,i={}){const a=r.ju(i.merge||i.mergeFields?2:0,t,e,s);ha("Data must be an object, but it was:",a,n);const u=ld(n,a);let c,d;if(i.merge)c=new Ct(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const m=[];for(const g of i.mergeFields){const E=vo(t,g,e);if(!a.contains(E))throw new D(S.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);hd(m,E)||m.push(E)}c=new Ct(m),d=a.fieldTransforms.filter((g=>c.covers(g.field)))}else c=null,d=a.fieldTransforms;return new Ip(new wt(u),c,d)}class Lr extends di{_toFieldTransform(t){if(t.Lu!==2)throw t.Lu===1?t.Wu(`${this._methodName}() can only appear at the top level of your update data`):t.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Lr}}class ca extends di{_toFieldTransform(t){return new Gc(t.path,new Tn)}isEqual(t){return t instanceof ca}}function ad(r,t,e,n){const s=r.ju(1,t,e);ha("Data must be an object, but it was:",s,n);const i=[],a=wt.empty();Te(n,((c,d)=>{const m=da(t,c,e);d=Ft(d);const g=s.Uu(m);if(d instanceof Lr)i.push(m);else{const E=Ur(d,g);E!=null&&(i.push(m),a.set(m,E))}}));const u=new Ct(i);return new id(a,u,s.fieldTransforms)}function ud(r,t,e,n,s,i){const a=r.ju(1,t,e),u=[vo(t,n,e)],c=[s];if(i.length%2!=0)throw new D(S.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<i.length;E+=2)u.push(vo(t,i[E])),c.push(i[E+1]);const d=[],m=wt.empty();for(let E=u.length-1;E>=0;--E)if(!hd(d,u[E])){const P=u[E];let C=c[E];C=Ft(C);const N=a.Uu(P);if(C instanceof Lr)d.push(P);else{const x=Ur(C,N);x!=null&&(d.push(P),m.set(P,x))}}const g=new Ct(d);return new id(m,g,a.fieldTransforms)}function Ep(r,t,e,n=!1){return Ur(e,r.ju(n?4:3,t))}function Ur(r,t){if(cd(r=Ft(r)))return ha("Unsupported field value:",t,r),ld(r,t);if(r instanceof di)return(function(n,s){if(!od(s.Lu))throw s.Wu(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.Qu&&t.Lu!==4)throw t.Wu("Nested arrays are not supported");return(function(n,s){const i=[];let a=0;for(const u of n){let c=Ur(u,s.Ku(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}})(r,t)}return(function(n,s){if((n=Ft(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return hm(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=it.fromDate(n);return{timestampValue:wn(s.serializer,i)}}if(n instanceof it){const i=new it(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:wn(s.serializer,i)}}if(n instanceof oa)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Sn)return{bytesValue:Jc(s.serializer,n._byteString)};if(n instanceof Rt){const i=s.databaseId,a=n.firestore._databaseId;if(!a.isEqual(i))throw s.Wu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Bo(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof aa)return(function(a,u){return{mapValue:{fields:{[xo]:{stringValue:Do},[pn]:{arrayValue:{values:a.toArray().map((d=>{if(typeof d!="number")throw u.Wu("VectorValues must only contain numeric values.");return Mo(u.serializer,d)}))}}}}}})(n,s);throw s.Wu(`Unsupported field value: ${li(n)}`)})(r,t)}function ld(r,t){const e={};return gc(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Te(r,((n,s)=>{const i=Ur(s,t.qu(n));i!=null&&(e[n]=i)})),{mapValue:{fields:e}}}function cd(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof it||r instanceof oa||r instanceof Sn||r instanceof Rt||r instanceof di||r instanceof aa)}function ha(r,t,e){if(!cd(e)||!(function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)})(e)){const n=li(e);throw n==="an object"?t.Wu(r+" a custom object"):t.Wu(r+" "+n)}}function vo(r,t,e){if((t=Ft(t))instanceof Or)return t._internalPath;if(typeof t=="string")return da(r,t);throw Gs("Field path arguments must be of type string or ",r,!1,void 0,e)}const vp=new RegExp("[~\\*/\\[\\]]");function da(r,t,e){if(t.search(vp)>=0)throw Gs(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new Or(...t.split("."))._internalPath}catch{throw Gs(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function Gs(r,t,e,n,s){const i=n&&!n.isEmpty(),a=s!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${n}`),a&&(c+=` in document ${s}`),c+=")"),new D(S.INVALID_ARGUMENT,u+r+c)}function hd(r,t){return r.some((e=>e.isEqual(t)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new wp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(fi("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class wp extends dd{data(){return super.data()}}function fi(r,t){return typeof t=="string"?da(r,t):t instanceof Or?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new D(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class fa{}class ma extends fa{}function Lp(r,t,...e){let n=[];t instanceof fa&&n.push(t),n=n.concat(e),(function(i){const a=i.filter((c=>c instanceof ga)).length,u=i.filter((c=>c instanceof mi)).length;if(a>1||a>0&&u>0)throw new D(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(n);for(const s of n)r=s._apply(r);return r}class mi extends ma{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new mi(t,e,n)}_apply(t){const e=this._parse(t);return fd(t._query,e),new ve(t.firestore,t.converter,oo(t._query,e))}_parse(t){const e=Fr(t.firestore);return(function(i,a,u,c,d,m,g){let E;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new D(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){ql(g,m);const C=[];for(const N of g)C.push(Bl(c,i,N));E={arrayValue:{values:C}}}else E=Bl(c,i,g)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||ql(g,m),E=Ep(u,a,g,m==="in"||m==="not-in");return G.create(d,m,E)})(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Up(r,t,e){const n=t,s=fi("where",r);return mi._create(s,n,e)}class ga extends fa{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new ga(t,e)}_parse(t){const e=this._queryConstraints.map((n=>n._parse(t))).filter((n=>n.getFilters().length>0));return e.length===1?e[0]:X.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:((function(s,i){let a=s;const u=i.getFlattenedFilters();for(const c of u)fd(a,c),a=oo(a,c)})(t._query,e),new ve(t.firestore,t.converter,oo(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class pa extends ma{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new pa(t,e)}_apply(t){const e=(function(s,i,a){if(s.startAt!==null)throw new D(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new D(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ar(i,a)})(t._query,this._field,this._direction);return new ve(t.firestore,t.converter,(function(s,i){const a=s.explicitOrderBy.concat([i]);return new Cn(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(t._query,e))}}function Bp(r,t="asc"){const e=t,n=fi("orderBy",r);return pa._create(n,e)}class _a extends ma{constructor(t,e,n){super(),this.type=t,this._limit=e,this._limitType=n}static _create(t,e,n){return new _a(t,e,n)}_apply(t){return new ve(t.firestore,t.converter,Ns(t._query,this._limit,this._limitType))}}function qp(r){return gp("limit",r),_a._create("limit",r,"F")}function Bl(r,t,e){if(typeof(e=Ft(e))=="string"){if(e==="")throw new D(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!kc(t)&&e.indexOf("/")!==-1)throw new D(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const n=t.path.child(Y.fromString(e));if(!M.isDocumentKey(n))throw new D(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return vr(r,new M(n))}if(e instanceof Rt)return vr(r,e._key);throw new D(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${li(e)}.`)}function ql(r,t){if(!Array.isArray(r)||r.length===0)throw new D(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function fd(r,t){const e=(function(s,i){for(const a of s)for(const u of a.getFlattenedFilters())if(i.indexOf(u.op)>=0)return u.op;return null})(r.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(e!==null)throw e===t.op?new D(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new D(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Rp{convertValue(t,e="none"){switch(me(t)){case 0:return null;case 1:return t.booleanValue;case 2:return rt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Jt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw O()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Te(t,((s,i)=>{n[s]=this.convertValue(i,e)})),n}convertVectorValue(t){var e,n,s;const i=(s=(n=(e=t.fields)===null||e===void 0?void 0:e[pn].arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.map((a=>rt(a.doubleValue)));return new aa(i)}convertGeoPoint(t){return new oa(rt(t.latitude),rt(t.longitude))}convertArray(t,e){return(t.values||[]).map((n=>this.convertValue(n,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Xs(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Tr(t));default:return null}}convertTimestamp(t){const e=Xt(t);return new it(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Y.fromString(t);L(uh(n));const s=new Ue(n.get(1),n.get(3)),i=new M(n.popFirst(5));return s.isEqual(e)||ut(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(r,t,e){let n;return n=r?e&&(e.merge||e.mergeFields)?r.toFirestore(t,e):r.toFirestore(t):t,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class md extends dd{constructor(t,e,n,s,i,a){super(t,e,n,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ws(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(fi("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class ws extends md{data(t={}){return super.data(t)}}class Vp{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new ar(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new ws(this._firestore,this._userDataWriter,n.key,n,new ar(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new D(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((u=>{const c=new ws(s._firestore,s._userDataWriter,u.doc.key,u.doc,new ar(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((u=>i||u.type!==3)).map((u=>{const c=new ws(s._firestore,s._userDataWriter,u.doc.key,u.doc,new ar(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),m=a.indexOf(u.doc.key)),{type:Pp(u.type),doc:c,oldIndex:d,newIndex:m}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Pp(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(r){r=Mt(r,Rt);const t=Mt(r.firestore,Zt);return fp(hi(t),r._key).then((e=>pd(t,r,e)))}class gd extends Rp{constructor(t){super(),this.firestore=t}convertBytes(t){return new Sn(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Rt(this.firestore,null,e)}}function zp(r,t,e){r=Mt(r,Rt);const n=Mt(r.firestore,Zt),s=ya(r.converter,t,e);return Br(n,[la(Fr(n),"setDoc",r._key,s,r.converter!==null,e).toMutation(r._key,ht.none())])}function Kp(r,t,e,...n){r=Mt(r,Rt);const s=Mt(r.firestore,Zt),i=Fr(s);let a;return a=typeof(t=Ft(t))=="string"||t instanceof Or?ud(i,"updateDoc",r._key,t,e,n):ad(i,"updateDoc",r._key,t),Br(s,[a.toMutation(r._key,ht.exists(!0))])}function Gp(r){return Br(Mt(r.firestore,Zt),[new Dr(r._key,ht.none())])}function $p(r,t){const e=Mt(r.firestore,Zt),n=pp(r),s=ya(r.converter,t);return Br(e,[la(Fr(r.firestore),"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,ht.exists(!1))]).then((()=>n))}function Qp(r,...t){var e,n,s;r=Ft(r);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||Ul(t[a])||(i=t[a],a++);const u={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Ul(t[a])){const g=t[a];t[a]=(e=g.next)===null||e===void 0?void 0:e.bind(g),t[a+1]=(n=g.error)===null||n===void 0?void 0:n.bind(g),t[a+2]=(s=g.complete)===null||s===void 0?void 0:s.bind(g)}let c,d,m;if(r instanceof Rt)d=Mt(r.firestore,Zt),m=Cr(r._key.path),c={next:g=>{t[a]&&t[a](pd(d,r,g))},error:t[a+1],complete:t[a+2]};else{const g=Mt(r,ve);d=Mt(g.firestore,Zt),m=g._query;const E=new gd(d);c={next:P=>{t[a]&&t[a](new Vp(d,E,g,P))},error:t[a+1],complete:t[a+2]},Ap(r._query)}return(function(E,P,C,N){const x=new td(N),z=new $h(P,x,C);return E.asyncQueue.enqueueAndForget((async()=>Kh(await Eo(E),z))),()=>{x.su(),E.asyncQueue.enqueueAndForget((async()=>Gh(await Eo(E),z)))}})(hi(d),m,u,c)}function Br(r,t){return(function(n,s){const i=new Yt;return n.asyncQueue.enqueueAndForget((async()=>Wg(await dp(n),s,i))),i.promise})(hi(r),t)}function pd(r,t,e){const n=e.docs.get(t._key),s=new gd(r);return new md(r,s,t._key,n,new ar(e.hasPendingWrites,e.fromCache),t.converter)}class Sp{constructor(t){let e;this.kind="persistent",t?.tabManager?(t.tabManager._initialize(t),e=t.tabManager):(e=xp(),e._initialize(t)),this._onlineComponentProvider=e._onlineComponentProvider,this._offlineComponentProvider=e._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function Wp(r){return new Sp(r)}class bp{constructor(t){this.forceOwnership=t,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(t){this._onlineComponentProvider=Pr.provider,this._offlineComponentProvider={build:e=>new Zh(e,t?.cacheSizeBytes,this.forceOwnership)}}}class Cp{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(t){this._onlineComponentProvider=Pr.provider,this._offlineComponentProvider={build:e=>new lp(e,t?.cacheSizeBytes)}}}function xp(r){return new bp(void 0)}function Hp(){return new Cp}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=Fr(t)}set(t,e,n){this._verifyNotCommitted();const s=Qi(t,this._firestore),i=ya(s.converter,e,n),a=la(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,n);return this._mutations.push(a.toMutation(s._key,ht.none())),this}update(t,e,n,...s){this._verifyNotCommitted();const i=Qi(t,this._firestore);let a;return a=typeof(e=Ft(e))=="string"||e instanceof Or?ud(this._dataReader,"WriteBatch.update",i._key,e,n,s):ad(this._dataReader,"WriteBatch.update",i._key,e),this._mutations.push(a.toMutation(i._key,ht.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=Qi(t,this._firestore);return this._mutations=this._mutations.concat(new Dr(e._key,ht.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new D(S.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Qi(r,t){if((r=Ft(r)).firestore!==t)throw new D(S.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yp(){return new Lr("deleteField")}function Xp(){return new ca("serverTimestamp")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jp(r){return hi(r=Mt(r,Zt)),new Dp(r,(t=>Br(r,t)))}(function(t,e=!0){(function(s){bn=s})(af),Zd(new tf("firestore",((n,{instanceIdentifier:s,options:i})=>{const a=n.getProvider("app").getImmediate(),u=new Zt(new cf(n.getProvider("auth-internal")),new ff(a,n.getProvider("app-check-internal")),(function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new D(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ue(d.options.projectId,m)})(a,s),a);return i=Object.assign({useFetchStreams:e},i),u._setSettings(i),u}),"PUBLIC").setMultipleInstances(!0)),Iu(Eu,vu,t),Iu(Eu,vu,"esm2017")})();export{Rp as A,Sn as B,fe as C,Rt as D,mi as E,Or as F,oa as G,_a as H,pa as I,Vp as J,lt as K,Ue as L,M,uf as N,st as O,Mt as P,ve as Q,ln as R,ar as S,it as T,mp as U,aa as V,Dp as W,hi as X,Br as Y,xp as Z,Jl as _,Hp as a,Yp as b,Op as c,pp as d,zp as e,Gp as f,jp as g,$p as h,Fp as i,Up as j,Bp as k,qp as l,Mp as m,md as n,Qp as o,Wp as p,Lp as q,di as r,Xp as s,Zt as t,Kp as u,D as v,Jp as w,ga as x,ma as y,ws as z};
