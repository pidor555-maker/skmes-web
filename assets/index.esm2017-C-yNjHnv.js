import{L as sf,_ as of,C as af,r as bu,a as uf,F as lf,b as Yt,c as cf,d as Hs,e as hf,i as Jl,g as Vs,f as df,h as Ft,S as ff}from"./index.esm2017-DCz-gGOR.js";var Cu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var de,Zl;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(I,p){function y(){}y.prototype=p.prototype,I.D=p.prototype,I.prototype=new y,I.prototype.constructor=I,I.C=function(E,v,R){for(var _=Array(arguments.length-2),Qt=2;Qt<arguments.length;Qt++)_[Qt-2]=arguments[Qt];return p.prototype[v].apply(E,_)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,p,y){y||(y=0);var E=Array(16);if(typeof p=="string")for(var v=0;16>v;++v)E[v]=p.charCodeAt(y++)|p.charCodeAt(y++)<<8|p.charCodeAt(y++)<<16|p.charCodeAt(y++)<<24;else for(v=0;16>v;++v)E[v]=p[y++]|p[y++]<<8|p[y++]<<16|p[y++]<<24;p=I.g[0],y=I.g[1],v=I.g[2];var R=I.g[3],_=p+(R^y&(v^R))+E[0]+3614090360&4294967295;p=y+(_<<7&4294967295|_>>>25),_=R+(v^p&(y^v))+E[1]+3905402710&4294967295,R=p+(_<<12&4294967295|_>>>20),_=v+(y^R&(p^y))+E[2]+606105819&4294967295,v=R+(_<<17&4294967295|_>>>15),_=y+(p^v&(R^p))+E[3]+3250441966&4294967295,y=v+(_<<22&4294967295|_>>>10),_=p+(R^y&(v^R))+E[4]+4118548399&4294967295,p=y+(_<<7&4294967295|_>>>25),_=R+(v^p&(y^v))+E[5]+1200080426&4294967295,R=p+(_<<12&4294967295|_>>>20),_=v+(y^R&(p^y))+E[6]+2821735955&4294967295,v=R+(_<<17&4294967295|_>>>15),_=y+(p^v&(R^p))+E[7]+4249261313&4294967295,y=v+(_<<22&4294967295|_>>>10),_=p+(R^y&(v^R))+E[8]+1770035416&4294967295,p=y+(_<<7&4294967295|_>>>25),_=R+(v^p&(y^v))+E[9]+2336552879&4294967295,R=p+(_<<12&4294967295|_>>>20),_=v+(y^R&(p^y))+E[10]+4294925233&4294967295,v=R+(_<<17&4294967295|_>>>15),_=y+(p^v&(R^p))+E[11]+2304563134&4294967295,y=v+(_<<22&4294967295|_>>>10),_=p+(R^y&(v^R))+E[12]+1804603682&4294967295,p=y+(_<<7&4294967295|_>>>25),_=R+(v^p&(y^v))+E[13]+4254626195&4294967295,R=p+(_<<12&4294967295|_>>>20),_=v+(y^R&(p^y))+E[14]+2792965006&4294967295,v=R+(_<<17&4294967295|_>>>15),_=y+(p^v&(R^p))+E[15]+1236535329&4294967295,y=v+(_<<22&4294967295|_>>>10),_=p+(v^R&(y^v))+E[1]+4129170786&4294967295,p=y+(_<<5&4294967295|_>>>27),_=R+(y^v&(p^y))+E[6]+3225465664&4294967295,R=p+(_<<9&4294967295|_>>>23),_=v+(p^y&(R^p))+E[11]+643717713&4294967295,v=R+(_<<14&4294967295|_>>>18),_=y+(R^p&(v^R))+E[0]+3921069994&4294967295,y=v+(_<<20&4294967295|_>>>12),_=p+(v^R&(y^v))+E[5]+3593408605&4294967295,p=y+(_<<5&4294967295|_>>>27),_=R+(y^v&(p^y))+E[10]+38016083&4294967295,R=p+(_<<9&4294967295|_>>>23),_=v+(p^y&(R^p))+E[15]+3634488961&4294967295,v=R+(_<<14&4294967295|_>>>18),_=y+(R^p&(v^R))+E[4]+3889429448&4294967295,y=v+(_<<20&4294967295|_>>>12),_=p+(v^R&(y^v))+E[9]+568446438&4294967295,p=y+(_<<5&4294967295|_>>>27),_=R+(y^v&(p^y))+E[14]+3275163606&4294967295,R=p+(_<<9&4294967295|_>>>23),_=v+(p^y&(R^p))+E[3]+4107603335&4294967295,v=R+(_<<14&4294967295|_>>>18),_=y+(R^p&(v^R))+E[8]+1163531501&4294967295,y=v+(_<<20&4294967295|_>>>12),_=p+(v^R&(y^v))+E[13]+2850285829&4294967295,p=y+(_<<5&4294967295|_>>>27),_=R+(y^v&(p^y))+E[2]+4243563512&4294967295,R=p+(_<<9&4294967295|_>>>23),_=v+(p^y&(R^p))+E[7]+1735328473&4294967295,v=R+(_<<14&4294967295|_>>>18),_=y+(R^p&(v^R))+E[12]+2368359562&4294967295,y=v+(_<<20&4294967295|_>>>12),_=p+(y^v^R)+E[5]+4294588738&4294967295,p=y+(_<<4&4294967295|_>>>28),_=R+(p^y^v)+E[8]+2272392833&4294967295,R=p+(_<<11&4294967295|_>>>21),_=v+(R^p^y)+E[11]+1839030562&4294967295,v=R+(_<<16&4294967295|_>>>16),_=y+(v^R^p)+E[14]+4259657740&4294967295,y=v+(_<<23&4294967295|_>>>9),_=p+(y^v^R)+E[1]+2763975236&4294967295,p=y+(_<<4&4294967295|_>>>28),_=R+(p^y^v)+E[4]+1272893353&4294967295,R=p+(_<<11&4294967295|_>>>21),_=v+(R^p^y)+E[7]+4139469664&4294967295,v=R+(_<<16&4294967295|_>>>16),_=y+(v^R^p)+E[10]+3200236656&4294967295,y=v+(_<<23&4294967295|_>>>9),_=p+(y^v^R)+E[13]+681279174&4294967295,p=y+(_<<4&4294967295|_>>>28),_=R+(p^y^v)+E[0]+3936430074&4294967295,R=p+(_<<11&4294967295|_>>>21),_=v+(R^p^y)+E[3]+3572445317&4294967295,v=R+(_<<16&4294967295|_>>>16),_=y+(v^R^p)+E[6]+76029189&4294967295,y=v+(_<<23&4294967295|_>>>9),_=p+(y^v^R)+E[9]+3654602809&4294967295,p=y+(_<<4&4294967295|_>>>28),_=R+(p^y^v)+E[12]+3873151461&4294967295,R=p+(_<<11&4294967295|_>>>21),_=v+(R^p^y)+E[15]+530742520&4294967295,v=R+(_<<16&4294967295|_>>>16),_=y+(v^R^p)+E[2]+3299628645&4294967295,y=v+(_<<23&4294967295|_>>>9),_=p+(v^(y|~R))+E[0]+4096336452&4294967295,p=y+(_<<6&4294967295|_>>>26),_=R+(y^(p|~v))+E[7]+1126891415&4294967295,R=p+(_<<10&4294967295|_>>>22),_=v+(p^(R|~y))+E[14]+2878612391&4294967295,v=R+(_<<15&4294967295|_>>>17),_=y+(R^(v|~p))+E[5]+4237533241&4294967295,y=v+(_<<21&4294967295|_>>>11),_=p+(v^(y|~R))+E[12]+1700485571&4294967295,p=y+(_<<6&4294967295|_>>>26),_=R+(y^(p|~v))+E[3]+2399980690&4294967295,R=p+(_<<10&4294967295|_>>>22),_=v+(p^(R|~y))+E[10]+4293915773&4294967295,v=R+(_<<15&4294967295|_>>>17),_=y+(R^(v|~p))+E[1]+2240044497&4294967295,y=v+(_<<21&4294967295|_>>>11),_=p+(v^(y|~R))+E[8]+1873313359&4294967295,p=y+(_<<6&4294967295|_>>>26),_=R+(y^(p|~v))+E[15]+4264355552&4294967295,R=p+(_<<10&4294967295|_>>>22),_=v+(p^(R|~y))+E[6]+2734768916&4294967295,v=R+(_<<15&4294967295|_>>>17),_=y+(R^(v|~p))+E[13]+1309151649&4294967295,y=v+(_<<21&4294967295|_>>>11),_=p+(v^(y|~R))+E[4]+4149444226&4294967295,p=y+(_<<6&4294967295|_>>>26),_=R+(y^(p|~v))+E[11]+3174756917&4294967295,R=p+(_<<10&4294967295|_>>>22),_=v+(p^(R|~y))+E[2]+718787259&4294967295,v=R+(_<<15&4294967295|_>>>17),_=y+(R^(v|~p))+E[9]+3951481745&4294967295,I.g[0]=I.g[0]+p&4294967295,I.g[1]=I.g[1]+(v+(_<<21&4294967295|_>>>11))&4294967295,I.g[2]=I.g[2]+v&4294967295,I.g[3]=I.g[3]+R&4294967295}n.prototype.u=function(I,p){p===void 0&&(p=I.length);for(var y=p-this.blockSize,E=this.B,v=this.h,R=0;R<p;){if(v==0)for(;R<=y;)s(this,I,R),R+=this.blockSize;if(typeof I=="string"){for(;R<p;)if(E[v++]=I.charCodeAt(R++),v==this.blockSize){s(this,E),v=0;break}}else for(;R<p;)if(E[v++]=I[R++],v==this.blockSize){s(this,E),v=0;break}}this.h=v,this.o+=p},n.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var p=1;p<I.length-8;++p)I[p]=0;var y=8*this.o;for(p=I.length-8;p<I.length;++p)I[p]=y&255,y/=256;for(this.u(I),I=Array(16),p=y=0;4>p;++p)for(var E=0;32>E;E+=8)I[y++]=this.g[p]>>>E&255;return I};function i(I,p){var y=u;return Object.prototype.hasOwnProperty.call(y,I)?y[I]:y[I]=p(I)}function a(I,p){this.h=p;for(var y=[],E=!0,v=I.length-1;0<=v;v--){var R=I[v]|0;E&&R==p||(y[v]=R,E=!1)}this.g=y}var u={};function c(I){return-128<=I&&128>I?i(I,function(p){return new a([p|0],0>p?-1:0)}):new a([I|0],0>I?-1:0)}function d(I){if(isNaN(I)||!isFinite(I))return g;if(0>I)return D(d(-I));for(var p=[],y=1,E=0;I>=y;E++)p[E]=I/y|0,y*=4294967296;return new a(p,0)}function m(I,p){if(I.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(I.charAt(0)=="-")return D(m(I.substring(1),p));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=d(Math.pow(p,8)),E=g,v=0;v<I.length;v+=8){var R=Math.min(8,I.length-v),_=parseInt(I.substring(v,v+R),p);8>R?(R=d(Math.pow(p,R)),E=E.j(R).add(d(_))):(E=E.j(y),E=E.add(d(_)))}return E}var g=c(0),T=c(1),P=c(16777216);r=a.prototype,r.m=function(){if(N(this))return-D(this).m();for(var I=0,p=1,y=0;y<this.g.length;y++){var E=this.i(y);I+=(0<=E?E:4294967296+E)*p,p*=4294967296}return I},r.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(C(this))return"0";if(N(this))return"-"+D(this).toString(I);for(var p=d(Math.pow(I,6)),y=this,E="";;){var v=H(y,p).g;y=z(y,v.j(p));var R=((0<y.g.length?y.g[0]:y.h)>>>0).toString(I);if(y=v,C(y))return R+E;for(;6>R.length;)R="0"+R;E=R+E}},r.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function C(I){if(I.h!=0)return!1;for(var p=0;p<I.g.length;p++)if(I.g[p]!=0)return!1;return!0}function N(I){return I.h==-1}r.l=function(I){return I=z(this,I),N(I)?-1:C(I)?0:1};function D(I){for(var p=I.g.length,y=[],E=0;E<p;E++)y[E]=~I.g[E];return new a(y,~I.h).add(T)}r.abs=function(){return N(this)?D(this):this},r.add=function(I){for(var p=Math.max(this.g.length,I.g.length),y=[],E=0,v=0;v<=p;v++){var R=E+(this.i(v)&65535)+(I.i(v)&65535),_=(R>>>16)+(this.i(v)>>>16)+(I.i(v)>>>16);E=_>>>16,R&=65535,_&=65535,y[v]=_<<16|R}return new a(y,y[y.length-1]&-2147483648?-1:0)};function z(I,p){return I.add(D(p))}r.j=function(I){if(C(this)||C(I))return g;if(N(this))return N(I)?D(this).j(D(I)):D(D(this).j(I));if(N(I))return D(this.j(D(I)));if(0>this.l(P)&&0>I.l(P))return d(this.m()*I.m());for(var p=this.g.length+I.g.length,y=[],E=0;E<2*p;E++)y[E]=0;for(E=0;E<this.g.length;E++)for(var v=0;v<I.g.length;v++){var R=this.i(E)>>>16,_=this.i(E)&65535,Qt=I.i(v)>>>16,Ln=I.i(v)&65535;y[2*E+2*v]+=_*Ln,j(y,2*E+2*v),y[2*E+2*v+1]+=R*Ln,j(y,2*E+2*v+1),y[2*E+2*v+1]+=_*Qt,j(y,2*E+2*v+1),y[2*E+2*v+2]+=R*Qt,j(y,2*E+2*v+2)}for(E=0;E<p;E++)y[E]=y[2*E+1]<<16|y[2*E];for(E=p;E<2*p;E++)y[E]=0;return new a(y,0)};function j(I,p){for(;(I[p]&65535)!=I[p];)I[p+1]+=I[p]>>>16,I[p]&=65535,p++}function B(I,p){this.g=I,this.h=p}function H(I,p){if(C(p))throw Error("division by zero");if(C(I))return new B(g,g);if(N(I))return p=H(D(I),p),new B(D(p.g),D(p.h));if(N(p))return p=H(I,D(p)),new B(D(p.g),p.h);if(30<I.g.length){if(N(I)||N(p))throw Error("slowDivide_ only works with positive integers.");for(var y=T,E=p;0>=E.l(I);)y=tt(y),E=tt(E);var v=Q(y,1),R=Q(E,1);for(E=Q(E,2),y=Q(y,2);!C(E);){var _=R.add(E);0>=_.l(I)&&(v=v.add(y),R=_),E=Q(E,1),y=Q(y,1)}return p=z(I,v.j(p)),new B(v,p)}for(v=g;0<=I.l(p);){for(y=Math.max(1,Math.floor(I.m()/p.m())),E=Math.ceil(Math.log(y)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),R=d(y),_=R.j(p);N(_)||0<_.l(I);)y-=E,R=d(y),_=R.j(p);C(R)&&(R=T),v=v.add(R),I=z(I,_)}return new B(v,I)}r.A=function(I){return H(this,I).h},r.and=function(I){for(var p=Math.max(this.g.length,I.g.length),y=[],E=0;E<p;E++)y[E]=this.i(E)&I.i(E);return new a(y,this.h&I.h)},r.or=function(I){for(var p=Math.max(this.g.length,I.g.length),y=[],E=0;E<p;E++)y[E]=this.i(E)|I.i(E);return new a(y,this.h|I.h)},r.xor=function(I){for(var p=Math.max(this.g.length,I.g.length),y=[],E=0;E<p;E++)y[E]=this.i(E)^I.i(E);return new a(y,this.h^I.h)};function tt(I){for(var p=I.g.length+1,y=[],E=0;E<p;E++)y[E]=I.i(E)<<1|I.i(E-1)>>>31;return new a(y,I.h)}function Q(I,p){var y=p>>5;p%=32;for(var E=I.g.length-y,v=[],R=0;R<E;R++)v[R]=0<p?I.i(R+y)>>>p|I.i(R+y+1)<<32-p:I.i(R+y);return new a(v,I.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Zl=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,de=a}).apply(typeof Cu<"u"?Cu:typeof self<"u"?self:typeof window<"u"?window:{});var us=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var tc,or,ec,gs,Ji,nc,rc,sc;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,h){return o==Array.prototype||o==Object.prototype||(o[l]=h.value),o};function e(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof us=="object"&&us];for(var l=0;l<o.length;++l){var h=o[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var n=e(this);function s(o,l){if(l)t:{var h=n;o=o.split(".");for(var f=0;f<o.length-1;f++){var A=o[f];if(!(A in h))break t;h=h[A]}o=o[o.length-1],f=h[o],l=l(f),l!=f&&l!=null&&t(h,o,{configurable:!0,writable:!0,value:l})}}function i(o,l){o instanceof String&&(o+="");var h=0,f=!1,A={next:function(){if(!f&&h<o.length){var V=h++;return{value:l(V,o[V]),done:!1}}return f=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(o){return o||function(){return i(this,function(l,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function c(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function d(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function m(o,l,h){return o.call.apply(o.bind,arguments)}function g(o,l,h){if(!o)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,f),o.apply(l,A)}}return function(){return o.apply(l,arguments)}}function T(o,l,h){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:g,T.apply(null,arguments)}function P(o,l){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function C(o,l){function h(){}h.prototype=l.prototype,o.aa=l.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(f,A,V){for(var k=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)k[Z-2]=arguments[Z];return l.prototype[A].apply(f,k)}}function N(o){const l=o.length;if(0<l){const h=Array(l);for(let f=0;f<l;f++)h[f]=o[f];return h}return[]}function D(o,l){for(let h=1;h<arguments.length;h++){const f=arguments[h];if(c(f)){const A=o.length||0,V=f.length||0;o.length=A+V;for(let k=0;k<V;k++)o[A+k]=f[k]}else o.push(f)}}class z{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function j(o){return/^[\s\xa0]*$/.test(o)}function B(){var o=u.navigator;return o&&(o=o.userAgent)?o:""}function H(o){return H[" "](o),o}H[" "]=function(){};var tt=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function Q(o,l,h){for(const f in o)l.call(h,o[f],f,o)}function I(o,l){for(const h in o)l.call(void 0,o[h],h,o)}function p(o){const l={};for(const h in o)l[h]=o[h];return l}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,l){let h,f;for(let A=1;A<arguments.length;A++){f=arguments[A];for(h in f)o[h]=f[h];for(let V=0;V<y.length;V++)h=y[V],Object.prototype.hasOwnProperty.call(f,h)&&(o[h]=f[h])}}function v(o){var l=1;o=o.split(":");const h=[];for(;0<l&&o.length;)h.push(o.shift()),l--;return o.length&&h.push(o.join(":")),h}function R(o){u.setTimeout(()=>{throw o},0)}function _(){var o=Ti;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class Qt{constructor(){this.h=this.g=null}add(l,h){const f=Ln.get();f.set(l,h),this.h?this.h.next=f:this.g=f,this.h=f}}var Ln=new z(()=>new wd,o=>o.reset());class wd{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Un,Bn=!1,Ti=new Qt,ba=()=>{const o=u.Promise.resolve(void 0);Un=()=>{o.then(Ad)}};var Ad=()=>{for(var o;o=_();){try{o.h.call(o.g)}catch(h){R(h)}var l=Ln;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}Bn=!1};function re(){this.s=this.s,this.C=this.C}re.prototype.s=!1,re.prototype.ma=function(){this.s||(this.s=!0,this.N())},re.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Tt(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}Tt.prototype.h=function(){this.defaultPrevented=!0};var Rd=(function(){if(!u.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};u.addEventListener("test",h,l),u.removeEventListener("test",h,l)}catch{}return o})();function qn(o,l){if(Tt.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(tt){t:{try{H(l.nodeName);var A=!0;break t}catch{}A=!1}A||(l=null)}}else h=="mouseover"?l=o.fromElement:h=="mouseout"&&(l=o.toElement);this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Vd[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&qn.aa.h.call(this)}}C(qn,Tt);var Vd={2:"touch",3:"pen",4:"mouse"};qn.prototype.h=function(){qn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var zr="closure_listenable_"+(1e6*Math.random()|0),Pd=0;function Sd(o,l,h,f,A){this.listener=o,this.proxy=null,this.src=l,this.type=h,this.capture=!!f,this.ha=A,this.key=++Pd,this.da=this.fa=!1}function Kr(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Gr(o){this.src=o,this.g={},this.h=0}Gr.prototype.add=function(o,l,h,f,A){var V=o.toString();o=this.g[V],o||(o=this.g[V]=[],this.h++);var k=Ei(o,l,f,A);return-1<k?(l=o[k],h||(l.fa=!1)):(l=new Sd(l,this.src,V,!!f,A),l.fa=h,o.push(l)),l};function Ii(o,l){var h=l.type;if(h in o.g){var f=o.g[h],A=Array.prototype.indexOf.call(f,l,void 0),V;(V=0<=A)&&Array.prototype.splice.call(f,A,1),V&&(Kr(l),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Ei(o,l,h,f){for(var A=0;A<o.length;++A){var V=o[A];if(!V.da&&V.listener==l&&V.capture==!!h&&V.ha==f)return A}return-1}var vi="closure_lm_"+(1e6*Math.random()|0),wi={};function Ca(o,l,h,f,A){if(Array.isArray(l)){for(var V=0;V<l.length;V++)Ca(o,l[V],h,f,A);return null}return h=ka(h),o&&o[zr]?o.K(l,h,d(f)?!!f.capture:!1,A):bd(o,l,h,!1,f,A)}function bd(o,l,h,f,A,V){if(!l)throw Error("Invalid event type");var k=d(A)?!!A.capture:!!A,Z=Ri(o);if(Z||(o[vi]=Z=new Gr(o)),h=Z.add(l,h,f,k,V),h.proxy)return h;if(f=Cd(),h.proxy=f,f.src=o,f.listener=h,o.addEventListener)Rd||(A=k),A===void 0&&(A=!1),o.addEventListener(l.toString(),f,A);else if(o.attachEvent)o.attachEvent(Da(l.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Cd(){function o(h){return l.call(o.src,o.listener,h)}const l=xd;return o}function xa(o,l,h,f,A){if(Array.isArray(l))for(var V=0;V<l.length;V++)xa(o,l[V],h,f,A);else f=d(f)?!!f.capture:!!f,h=ka(h),o&&o[zr]?(o=o.i,l=String(l).toString(),l in o.g&&(V=o.g[l],h=Ei(V,h,f,A),-1<h&&(Kr(V[h]),Array.prototype.splice.call(V,h,1),V.length==0&&(delete o.g[l],o.h--)))):o&&(o=Ri(o))&&(l=o.g[l.toString()],o=-1,l&&(o=Ei(l,h,f,A)),(h=-1<o?l[o]:null)&&Ai(h))}function Ai(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[zr])Ii(l.i,o);else{var h=o.type,f=o.proxy;l.removeEventListener?l.removeEventListener(h,f,o.capture):l.detachEvent?l.detachEvent(Da(h),f):l.addListener&&l.removeListener&&l.removeListener(f),(h=Ri(l))?(Ii(h,o),h.h==0&&(h.src=null,l[vi]=null)):Kr(o)}}}function Da(o){return o in wi?wi[o]:wi[o]="on"+o}function xd(o,l){if(o.da)o=!0;else{l=new qn(l,this);var h=o.listener,f=o.ha||o.src;o.fa&&Ai(o),o=h.call(f,l)}return o}function Ri(o){return o=o[vi],o instanceof Gr?o:null}var Vi="__closure_events_fn_"+(1e9*Math.random()>>>0);function ka(o){return typeof o=="function"?o:(o[Vi]||(o[Vi]=function(l){return o.handleEvent(l)}),o[Vi])}function It(){re.call(this),this.i=new Gr(this),this.M=this,this.F=null}C(It,re),It.prototype[zr]=!0,It.prototype.removeEventListener=function(o,l,h,f){xa(this,o,l,h,f)};function Pt(o,l){var h,f=o.F;if(f)for(h=[];f;f=f.F)h.push(f);if(o=o.M,f=l.type||l,typeof l=="string")l=new Tt(l,o);else if(l instanceof Tt)l.target=l.target||o;else{var A=l;l=new Tt(f,o),E(l,A)}if(A=!0,h)for(var V=h.length-1;0<=V;V--){var k=l.g=h[V];A=$r(k,f,!0,l)&&A}if(k=l.g=o,A=$r(k,f,!0,l)&&A,A=$r(k,f,!1,l)&&A,h)for(V=0;V<h.length;V++)k=l.g=h[V],A=$r(k,f,!1,l)&&A}It.prototype.N=function(){if(It.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var h=o.g[l],f=0;f<h.length;f++)Kr(h[f]);delete o.g[l],o.h--}}this.F=null},It.prototype.K=function(o,l,h,f){return this.i.add(String(o),l,!1,h,f)},It.prototype.L=function(o,l,h,f){return this.i.add(String(o),l,!0,h,f)};function $r(o,l,h,f){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var A=!0,V=0;V<l.length;++V){var k=l[V];if(k&&!k.da&&k.capture==h){var Z=k.listener,gt=k.ha||k.src;k.fa&&Ii(o.i,k),A=Z.call(gt,f)!==!1&&A}}return A&&!f.defaultPrevented}function Na(o,l,h){if(typeof o=="function")h&&(o=T(o,h));else if(o&&typeof o.handleEvent=="function")o=T(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:u.setTimeout(o,l||0)}function Ma(o){o.g=Na(()=>{o.g=null,o.i&&(o.i=!1,Ma(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class Dd extends re{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Ma(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function jn(o){re.call(this),this.h=o,this.g={}}C(jn,re);var Oa=[];function Fa(o){Q(o.g,function(l,h){this.g.hasOwnProperty(h)&&Ai(l)},o),o.g={}}jn.prototype.N=function(){jn.aa.N.call(this),Fa(this)},jn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Pi=u.JSON.stringify,kd=u.JSON.parse,Nd=class{stringify(o){return u.JSON.stringify(o,void 0)}parse(o){return u.JSON.parse(o,void 0)}};function Si(){}Si.prototype.h=null;function La(o){return o.h||(o.h=o.i())}function Ua(){}var zn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function bi(){Tt.call(this,"d")}C(bi,Tt);function Ci(){Tt.call(this,"c")}C(Ci,Tt);var we={},Ba=null;function Qr(){return Ba=Ba||new It}we.La="serverreachability";function qa(o){Tt.call(this,we.La,o)}C(qa,Tt);function Kn(o){const l=Qr();Pt(l,new qa(l))}we.STAT_EVENT="statevent";function ja(o,l){Tt.call(this,we.STAT_EVENT,o),this.stat=l}C(ja,Tt);function St(o){const l=Qr();Pt(l,new ja(l,o))}we.Ma="timingevent";function za(o,l){Tt.call(this,we.Ma,o),this.size=l}C(za,Tt);function Gn(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){o()},l)}function $n(){this.g=!0}$n.prototype.xa=function(){this.g=!1};function Md(o,l,h,f,A,V){o.info(function(){if(o.g)if(V)for(var k="",Z=V.split("&"),gt=0;gt<Z.length;gt++){var W=Z[gt].split("=");if(1<W.length){var Et=W[0];W=W[1];var vt=Et.split("_");k=2<=vt.length&&vt[1]=="type"?k+(Et+"="+W+"&"):k+(Et+"=redacted&")}}else k=null;else k=V;return"XMLHTTP REQ ("+f+") [attempt "+A+"]: "+l+`
`+h+`
`+k})}function Od(o,l,h,f,A,V,k){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+A+"]: "+l+`
`+h+`
`+V+" "+k})}function He(o,l,h,f){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+Ld(o,h)+(f?" "+f:"")})}function Fd(o,l){o.info(function(){return"TIMEOUT: "+l})}$n.prototype.info=function(){};function Ld(o,l){if(!o.g)return l;if(!l)return null;try{var h=JSON.parse(l);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var f=h[o];if(!(2>f.length)){var A=f[1];if(Array.isArray(A)&&!(1>A.length)){var V=A[0];if(V!="noop"&&V!="stop"&&V!="close")for(var k=1;k<A.length;k++)A[k]=""}}}}return Pi(h)}catch{return l}}var Wr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ka={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},xi;function Hr(){}C(Hr,Si),Hr.prototype.g=function(){return new XMLHttpRequest},Hr.prototype.i=function(){return{}},xi=new Hr;function se(o,l,h,f){this.j=o,this.i=l,this.l=h,this.R=f||1,this.U=new jn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ga}function Ga(){this.i=null,this.g="",this.h=!1}var $a={},Di={};function ki(o,l,h){o.L=1,o.v=Zr(Wt(l)),o.m=h,o.P=!0,Qa(o,null)}function Qa(o,l){o.F=Date.now(),Yr(o),o.A=Wt(o.v);var h=o.A,f=o.R;Array.isArray(f)||(f=[String(f)]),au(h.i,"t",f),o.C=0,h=o.j.J,o.h=new Ga,o.g=Ru(o.j,h?l:null,!o.m),0<o.O&&(o.M=new Dd(T(o.Y,o,o.g),o.O)),l=o.U,h=o.g,f=o.ca;var A="readystatechange";Array.isArray(A)||(A&&(Oa[0]=A.toString()),A=Oa);for(var V=0;V<A.length;V++){var k=Ca(h,A[V],f||l.handleEvent,!1,l.h||l);if(!k)break;l.g[k.key]=k}l=o.H?p(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),Kn(),Md(o.i,o.u,o.A,o.l,o.R,o.m)}se.prototype.ca=function(o){o=o.target;const l=this.M;l&&Ht(o)==3?l.j():this.Y(o)},se.prototype.Y=function(o){try{if(o==this.g)t:{const vt=Ht(this.g);var l=this.g.Ba();const Je=this.g.Z();if(!(3>vt)&&(vt!=3||this.g&&(this.h.h||this.g.oa()||mu(this.g)))){this.J||vt!=4||l==7||(l==8||0>=Je?Kn(3):Kn(2)),Ni(this);var h=this.g.Z();this.X=h;e:if(Wa(this)){var f=mu(this.g);o="";var A=f.length,V=Ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ae(this),Qn(this);var k="";break e}this.h.i=new u.TextDecoder}for(l=0;l<A;l++)this.h.h=!0,o+=this.h.i.decode(f[l],{stream:!(V&&l==A-1)});f.length=0,this.h.g+=o,this.C=0,k=this.h.g}else k=this.g.oa();if(this.o=h==200,Od(this.i,this.u,this.A,this.l,this.R,vt,h),this.o){if(this.T&&!this.K){e:{if(this.g){var Z,gt=this.g;if((Z=gt.g?gt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(Z)){var W=Z;break e}}W=null}if(h=W)He(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Mi(this,h);else{this.o=!1,this.s=3,St(12),Ae(this),Qn(this);break t}}if(this.P){h=!0;let Lt;for(;!this.J&&this.C<k.length;)if(Lt=Ud(this,k),Lt==Di){vt==4&&(this.s=4,St(14),h=!1),He(this.i,this.l,null,"[Incomplete Response]");break}else if(Lt==$a){this.s=4,St(15),He(this.i,this.l,k,"[Invalid Chunk]"),h=!1;break}else He(this.i,this.l,Lt,null),Mi(this,Lt);if(Wa(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),vt!=4||k.length!=0||this.h.h||(this.s=1,St(16),h=!1),this.o=this.o&&h,!h)He(this.i,this.l,k,"[Invalid Chunked Response]"),Ae(this),Qn(this);else if(0<k.length&&!this.W){this.W=!0;var Et=this.j;Et.g==this&&Et.ba&&!Et.M&&(Et.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),qi(Et),Et.M=!0,St(11))}}else He(this.i,this.l,k,null),Mi(this,k);vt==4&&Ae(this),this.o&&!this.J&&(vt==4?Eu(this.j,this):(this.o=!1,Yr(this)))}else nf(this.g),h==400&&0<k.indexOf("Unknown SID")?(this.s=3,St(12)):(this.s=0,St(13)),Ae(this),Qn(this)}}}catch{}finally{}};function Wa(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Ud(o,l){var h=o.C,f=l.indexOf(`
`,h);return f==-1?Di:(h=Number(l.substring(h,f)),isNaN(h)?$a:(f+=1,f+h>l.length?Di:(l=l.slice(f,f+h),o.C=f+h,l)))}se.prototype.cancel=function(){this.J=!0,Ae(this)};function Yr(o){o.S=Date.now()+o.I,Ha(o,o.I)}function Ha(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Gn(T(o.ba,o),l)}function Ni(o){o.B&&(u.clearTimeout(o.B),o.B=null)}se.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Fd(this.i,this.A),this.L!=2&&(Kn(),St(17)),Ae(this),this.s=2,Qn(this)):Ha(this,this.S-o)};function Qn(o){o.j.G==0||o.J||Eu(o.j,o)}function Ae(o){Ni(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,Fa(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function Mi(o,l){try{var h=o.j;if(h.G!=0&&(h.g==o||Oi(h.h,o))){if(!o.K&&Oi(h.h,o)&&h.G==3){try{var f=h.Da.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var A=f;if(A[0]==0){t:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)is(h),rs(h);else break t;Bi(h),St(18)}}else h.za=A[1],0<h.za-h.T&&37500>A[2]&&h.F&&h.v==0&&!h.C&&(h.C=Gn(T(h.Za,h),6e3));if(1>=Ja(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Ve(h,11)}else if((o.K||h.g==o)&&is(h),!j(l))for(A=h.Da.g.parse(l),l=0;l<A.length;l++){let W=A[l];if(h.T=W[0],W=W[1],h.G==2)if(W[0]=="c"){h.K=W[1],h.ia=W[2];const Et=W[3];Et!=null&&(h.la=Et,h.j.info("VER="+h.la));const vt=W[4];vt!=null&&(h.Aa=vt,h.j.info("SVER="+h.Aa));const Je=W[5];Je!=null&&typeof Je=="number"&&0<Je&&(f=1.5*Je,h.L=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const Lt=o.g;if(Lt){const as=Lt.g?Lt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(as){var V=f.h;V.g||as.indexOf("spdy")==-1&&as.indexOf("quic")==-1&&as.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Fi(V,V.h),V.h=null))}if(f.D){const ji=Lt.g?Lt.g.getResponseHeader("X-HTTP-Session-Id"):null;ji&&(f.ya=ji,nt(f.I,f.D,ji))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),f=h;var k=o;if(f.qa=Au(f,f.J?f.ia:null,f.W),k.K){Za(f.h,k);var Z=k,gt=f.L;gt&&(Z.I=gt),Z.B&&(Ni(Z),Yr(Z)),f.g=k}else Tu(f);0<h.i.length&&ss(h)}else W[0]!="stop"&&W[0]!="close"||Ve(h,7);else h.G==3&&(W[0]=="stop"||W[0]=="close"?W[0]=="stop"?Ve(h,7):Ui(h):W[0]!="noop"&&h.l&&h.l.ta(W),h.v=0)}}Kn(4)}catch{}}var Bd=class{constructor(o,l){this.g=o,this.map=l}};function Ya(o){this.l=o||10,u.PerformanceNavigationTiming?(o=u.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Xa(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Ja(o){return o.h?1:o.g?o.g.size:0}function Oi(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function Fi(o,l){o.g?o.g.add(l):o.h=l}function Za(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}Ya.prototype.cancel=function(){if(this.i=tu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function tu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const h of o.g.values())l=l.concat(h.D);return l}return N(o.i)}function qd(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var l=[],h=o.length,f=0;f<h;f++)l.push(o[f]);return l}l=[],h=0;for(f in o)l[h++]=o[f];return l}function jd(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var l=[];o=o.length;for(var h=0;h<o;h++)l.push(h);return l}l=[],h=0;for(const f in o)l[h++]=f;return l}}}function eu(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var h=jd(o),f=qd(o),A=f.length,V=0;V<A;V++)l.call(void 0,f[V],h&&h[V],o)}var nu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function zd(o,l){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var f=o[h].indexOf("="),A=null;if(0<=f){var V=o[h].substring(0,f);A=o[h].substring(f+1)}else V=o[h];l(V,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Re(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Re){this.h=o.h,Xr(this,o.j),this.o=o.o,this.g=o.g,Jr(this,o.s),this.l=o.l;var l=o.i,h=new Yn;h.i=l.i,l.g&&(h.g=new Map(l.g),h.h=l.h),ru(this,h),this.m=o.m}else o&&(l=String(o).match(nu))?(this.h=!1,Xr(this,l[1]||"",!0),this.o=Wn(l[2]||""),this.g=Wn(l[3]||"",!0),Jr(this,l[4]),this.l=Wn(l[5]||"",!0),ru(this,l[6]||"",!0),this.m=Wn(l[7]||"")):(this.h=!1,this.i=new Yn(null,this.h))}Re.prototype.toString=function(){var o=[],l=this.j;l&&o.push(Hn(l,su,!0),":");var h=this.g;return(h||l=="file")&&(o.push("//"),(l=this.o)&&o.push(Hn(l,su,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Hn(h,h.charAt(0)=="/"?$d:Gd,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Hn(h,Wd)),o.join("")};function Wt(o){return new Re(o)}function Xr(o,l,h){o.j=h?Wn(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function Jr(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function ru(o,l,h){l instanceof Yn?(o.i=l,Hd(o.i,o.h)):(h||(l=Hn(l,Qd)),o.i=new Yn(l,o.h))}function nt(o,l,h){o.i.set(l,h)}function Zr(o){return nt(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Wn(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Hn(o,l,h){return typeof o=="string"?(o=encodeURI(o).replace(l,Kd),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Kd(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var su=/[#\/\?@]/g,Gd=/[#\?:]/g,$d=/[#\?]/g,Qd=/[#\?@]/g,Wd=/#/g;function Yn(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function ie(o){o.g||(o.g=new Map,o.h=0,o.i&&zd(o.i,function(l,h){o.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}r=Yn.prototype,r.add=function(o,l){ie(this),this.i=null,o=Ye(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(l),this.h+=1,this};function iu(o,l){ie(o),l=Ye(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function ou(o,l){return ie(o),l=Ye(o,l),o.g.has(l)}r.forEach=function(o,l){ie(this),this.g.forEach(function(h,f){h.forEach(function(A){o.call(l,A,f,this)},this)},this)},r.na=function(){ie(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),h=[];for(let f=0;f<l.length;f++){const A=o[f];for(let V=0;V<A.length;V++)h.push(l[f])}return h},r.V=function(o){ie(this);let l=[];if(typeof o=="string")ou(this,o)&&(l=l.concat(this.g.get(Ye(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)l=l.concat(o[h])}return l},r.set=function(o,l){return ie(this),this.i=null,o=Ye(this,o),ou(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},r.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function au(o,l,h){iu(o,l),0<h.length&&(o.i=null,o.g.set(Ye(o,l),N(h)),o.h+=h.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var h=0;h<l.length;h++){var f=l[h];const V=encodeURIComponent(String(f)),k=this.V(f);for(f=0;f<k.length;f++){var A=V;k[f]!==""&&(A+="="+encodeURIComponent(String(k[f]))),o.push(A)}}return this.i=o.join("&")};function Ye(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function Hd(o,l){l&&!o.j&&(ie(o),o.i=null,o.g.forEach(function(h,f){var A=f.toLowerCase();f!=A&&(iu(this,f),au(this,A,h))},o)),o.j=l}function Yd(o,l){const h=new $n;if(u.Image){const f=new Image;f.onload=P(oe,h,"TestLoadImage: loaded",!0,l,f),f.onerror=P(oe,h,"TestLoadImage: error",!1,l,f),f.onabort=P(oe,h,"TestLoadImage: abort",!1,l,f),f.ontimeout=P(oe,h,"TestLoadImage: timeout",!1,l,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else l(!1)}function Xd(o,l){const h=new $n,f=new AbortController,A=setTimeout(()=>{f.abort(),oe(h,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:f.signal}).then(V=>{clearTimeout(A),V.ok?oe(h,"TestPingServer: ok",!0,l):oe(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),oe(h,"TestPingServer: error",!1,l)})}function oe(o,l,h,f,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),f(h)}catch{}}function Jd(){this.g=new Nd}function Zd(o,l,h){const f=h||"";try{eu(o,function(A,V){let k=A;d(A)&&(k=Pi(A)),l.push(f+V+"="+encodeURIComponent(k))})}catch(A){throw l.push(f+"type="+encodeURIComponent("_badmap")),A}}function ts(o){this.l=o.Ub||null,this.j=o.eb||!1}C(ts,Si),ts.prototype.g=function(){return new es(this.l,this.j)},ts.prototype.i=(function(o){return function(){return o}})({});function es(o,l){It.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(es,It),r=es.prototype,r.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,Jn(this)},r.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||u).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Xn(this)),this.readyState=0},r.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Jn(this)),this.g&&(this.readyState=3,Jn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;uu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function uu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}r.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?Xn(this):Jn(this),this.readyState==3&&uu(this)}},r.Ra=function(o){this.g&&(this.response=this.responseText=o,Xn(this))},r.Qa=function(o){this.g&&(this.response=o,Xn(this))},r.ga=function(){this.g&&Xn(this)};function Xn(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Jn(o)}r.setRequestHeader=function(o,l){this.u.append(o,l)},r.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=l.next();return o.join(`\r
`)};function Jn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(es.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function lu(o){let l="";return Q(o,function(h,f){l+=f,l+=":",l+=h,l+=`\r
`}),l}function Li(o,l,h){t:{for(f in h){var f=!1;break t}f=!0}f||(h=lu(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):nt(o,l,h))}function ot(o){It.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(ot,It);var tf=/^https?$/i,ef=["POST","PUT"];r=ot.prototype,r.Ha=function(o){this.J=o},r.ea=function(o,l,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():xi.g(),this.v=this.o?La(this.o):La(xi),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(V){cu(this,V);return}if(o=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var A in f)h.set(A,f[A]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const V of f.keys())h.set(V,f.get(V));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(V=>V.toLowerCase()=="content-type"),A=u.FormData&&o instanceof u.FormData,!(0<=Array.prototype.indexOf.call(ef,l,void 0))||f||A||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,k]of h)this.g.setRequestHeader(V,k);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{fu(this),this.u=!0,this.g.send(o),this.u=!1}catch(V){cu(this,V)}};function cu(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,hu(o),ns(o)}function hu(o){o.A||(o.A=!0,Pt(o,"complete"),Pt(o,"error"))}r.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Pt(this,"complete"),Pt(this,"abort"),ns(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ns(this,!0)),ot.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?du(this):this.bb())},r.bb=function(){du(this)};function du(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Ht(o)!=4||o.Z()!=2)){if(o.u&&Ht(o)==4)Na(o.Ea,0,o);else if(Pt(o,"readystatechange"),Ht(o)==4){o.h=!1;try{const k=o.Z();t:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break t;default:l=!1}var h;if(!(h=l)){var f;if(f=k===0){var A=String(o.D).match(nu)[1]||null;!A&&u.self&&u.self.location&&(A=u.self.location.protocol.slice(0,-1)),f=!tf.test(A?A.toLowerCase():"")}h=f}if(h)Pt(o,"complete"),Pt(o,"success");else{o.m=6;try{var V=2<Ht(o)?o.g.statusText:""}catch{V=""}o.l=V+" ["+o.Z()+"]",hu(o)}}finally{ns(o)}}}}function ns(o,l){if(o.g){fu(o);const h=o.g,f=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||Pt(o,"ready");try{h.onreadystatechange=f}catch{}}}function fu(o){o.I&&(u.clearTimeout(o.I),o.I=null)}r.isActive=function(){return!!this.g};function Ht(o){return o.g?o.g.readyState:0}r.Z=function(){try{return 2<Ht(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),kd(l)}};function mu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function nf(o){const l={};o=(o.g&&2<=Ht(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(j(o[f]))continue;var h=v(o[f]);const A=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const V=l[A]||[];l[A]=V,V.push(h)}I(l,function(f){return f.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Zn(o,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||l}function gu(o){this.Aa=0,this.i=[],this.j=new $n,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Zn("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Zn("baseRetryDelayMs",5e3,o),this.cb=Zn("retryDelaySeedMs",1e4,o),this.Wa=Zn("forwardChannelMaxRetries",2,o),this.wa=Zn("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Ya(o&&o.concurrentRequestLimit),this.Da=new Jd,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=gu.prototype,r.la=8,r.G=1,r.connect=function(o,l,h,f){St(0),this.W=o,this.H=l||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.I=Au(this,null,this.W),ss(this)};function Ui(o){if(pu(o),o.G==3){var l=o.U++,h=Wt(o.I);if(nt(h,"SID",o.K),nt(h,"RID",l),nt(h,"TYPE","terminate"),tr(o,h),l=new se(o,o.j,l),l.L=2,l.v=Zr(Wt(h)),h=!1,u.navigator&&u.navigator.sendBeacon)try{h=u.navigator.sendBeacon(l.v.toString(),"")}catch{}!h&&u.Image&&(new Image().src=l.v,h=!0),h||(l.g=Ru(l.j,null),l.g.ea(l.v)),l.F=Date.now(),Yr(l)}wu(o)}function rs(o){o.g&&(qi(o),o.g.cancel(),o.g=null)}function pu(o){rs(o),o.u&&(u.clearTimeout(o.u),o.u=null),is(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&u.clearTimeout(o.s),o.s=null)}function ss(o){if(!Xa(o.h)&&!o.s){o.s=!0;var l=o.Ga;Un||ba(),Bn||(Un(),Bn=!0),Ti.add(l,o),o.B=0}}function rf(o,l){return Ja(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Gn(T(o.Ga,o,l),vu(o,o.B)),o.B++,!0)}r.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const A=new se(this,this.j,o);let V=this.o;if(this.S&&(V?(V=p(V),E(V,this.S)):V=this.S),this.m!==null||this.O||(A.H=V,V=null),this.P)t:{for(var l=0,h=0;h<this.i.length;h++){e:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(l+=f,4096<l){l=h;break t}if(l===4096||h===this.i.length-1){l=h+1;break t}}l=1e3}else l=1e3;l=yu(this,A,l),h=Wt(this.I),nt(h,"RID",o),nt(h,"CVER",22),this.D&&nt(h,"X-HTTP-Session-Id",this.D),tr(this,h),V&&(this.O?l="headers="+encodeURIComponent(String(lu(V)))+"&"+l:this.m&&Li(h,this.m,V)),Fi(this.h,A),this.Ua&&nt(h,"TYPE","init"),this.P?(nt(h,"$req",l),nt(h,"SID","null"),A.T=!0,ki(A,h,null)):ki(A,h,l),this.G=2}}else this.G==3&&(o?_u(this,o):this.i.length==0||Xa(this.h)||_u(this))};function _u(o,l){var h;l?h=l.l:h=o.U++;const f=Wt(o.I);nt(f,"SID",o.K),nt(f,"RID",h),nt(f,"AID",o.T),tr(o,f),o.m&&o.o&&Li(f,o.m,o.o),h=new se(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),l&&(o.i=l.D.concat(o.i)),l=yu(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Fi(o.h,h),ki(h,f,l)}function tr(o,l){o.H&&Q(o.H,function(h,f){nt(l,f,h)}),o.l&&eu({},function(h,f){nt(l,f,h)})}function yu(o,l,h){h=Math.min(o.i.length,h);var f=o.l?T(o.l.Na,o.l,o):null;t:{var A=o.i;let V=-1;for(;;){const k=["count="+h];V==-1?0<h?(V=A[0].g,k.push("ofs="+V)):V=0:k.push("ofs="+V);let Z=!0;for(let gt=0;gt<h;gt++){let W=A[gt].g;const Et=A[gt].map;if(W-=V,0>W)V=Math.max(0,A[gt].g-100),Z=!1;else try{Zd(Et,k,"req"+W+"_")}catch{f&&f(Et)}}if(Z){f=k.join("&");break t}}}return o=o.i.splice(0,h),l.D=o,f}function Tu(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;Un||ba(),Bn||(Un(),Bn=!0),Ti.add(l,o),o.v=0}}function Bi(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Gn(T(o.Fa,o),vu(o,o.v)),o.v++,!0)}r.Fa=function(){if(this.u=null,Iu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Gn(T(this.ab,this),o)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,St(10),rs(this),Iu(this))};function qi(o){o.A!=null&&(u.clearTimeout(o.A),o.A=null)}function Iu(o){o.g=new se(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=Wt(o.qa);nt(l,"RID","rpc"),nt(l,"SID",o.K),nt(l,"AID",o.T),nt(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&nt(l,"TO",o.ja),nt(l,"TYPE","xmlhttp"),tr(o,l),o.m&&o.o&&Li(l,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=Zr(Wt(l)),h.m=null,h.P=!0,Qa(h,o)}r.Za=function(){this.C!=null&&(this.C=null,rs(this),Bi(this),St(19))};function is(o){o.C!=null&&(u.clearTimeout(o.C),o.C=null)}function Eu(o,l){var h=null;if(o.g==l){is(o),qi(o),o.g=null;var f=2}else if(Oi(o.h,l))h=l.D,Za(o.h,l),f=1;else return;if(o.G!=0){if(l.o)if(f==1){h=l.m?l.m.length:0,l=Date.now()-l.F;var A=o.B;f=Qr(),Pt(f,new za(f,h)),ss(o)}else Tu(o);else if(A=l.s,A==3||A==0&&0<l.X||!(f==1&&rf(o,l)||f==2&&Bi(o)))switch(h&&0<h.length&&(l=o.h,l.i=l.i.concat(h)),A){case 1:Ve(o,5);break;case 4:Ve(o,10);break;case 3:Ve(o,6);break;default:Ve(o,2)}}}function vu(o,l){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*l}function Ve(o,l){if(o.j.info("Error code "+l),l==2){var h=T(o.fb,o),f=o.Xa;const A=!f;f=new Re(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Xr(f,"https"),Zr(f),A?Yd(f.toString(),h):Xd(f.toString(),h)}else St(2);o.G=0,o.l&&o.l.sa(l),wu(o),pu(o)}r.fb=function(o){o?(this.j.info("Successfully pinged google.com"),St(2)):(this.j.info("Failed to ping google.com"),St(1))};function wu(o){if(o.G=0,o.ka=[],o.l){const l=tu(o.h);(l.length!=0||o.i.length!=0)&&(D(o.ka,l),D(o.ka,o.i),o.h.i.length=0,N(o.i),o.i.length=0),o.l.ra()}}function Au(o,l,h){var f=h instanceof Re?Wt(h):new Re(h);if(f.g!="")l&&(f.g=l+"."+f.g),Jr(f,f.s);else{var A=u.location;f=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;var V=new Re(null);f&&Xr(V,f),l&&(V.g=l),A&&Jr(V,A),h&&(V.l=h),f=V}return h=o.D,l=o.ya,h&&l&&nt(f,h,l),nt(f,"VER",o.la),tr(o,f),f}function Ru(o,l,h){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new ot(new ts({eb:h})):new ot(o.pa),l.Ha(o.J),l}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Vu(){}r=Vu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function os(){}os.prototype.g=function(o,l){return new Dt(o,l)};function Dt(o,l){It.call(this),this.g=new gu(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!j(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!j(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new Xe(this)}C(Dt,It),Dt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Dt.prototype.close=function(){Ui(this.g)},Dt.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Pi(o),o=h);l.i.push(new Bd(l.Ya++,o)),l.G==3&&ss(l)},Dt.prototype.N=function(){this.g.l=null,delete this.j,Ui(this.g),delete this.g,Dt.aa.N.call(this)};function Pu(o){bi.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){t:{for(const h in l){o=h;break t}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}C(Pu,bi);function Su(){Ci.call(this),this.status=1}C(Su,Ci);function Xe(o){this.g=o}C(Xe,Vu),Xe.prototype.ua=function(){Pt(this.g,"a")},Xe.prototype.ta=function(o){Pt(this.g,new Pu(o))},Xe.prototype.sa=function(o){Pt(this.g,new Su)},Xe.prototype.ra=function(){Pt(this.g,"b")},os.prototype.createWebChannel=os.prototype.g,Dt.prototype.send=Dt.prototype.o,Dt.prototype.open=Dt.prototype.m,Dt.prototype.close=Dt.prototype.close,sc=function(){return new os},rc=function(){return Qr()},nc=we,Ji={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Wr.NO_ERROR=0,Wr.TIMEOUT=8,Wr.HTTP_ERROR=6,gs=Wr,Ka.COMPLETE="complete",ec=Ka,Ua.EventType=zn,zn.OPEN="a",zn.CLOSE="b",zn.ERROR="c",zn.MESSAGE="d",It.prototype.listen=It.prototype.K,or=Ua,ot.prototype.listenOnce=ot.prototype.L,ot.prototype.getLastError=ot.prototype.Ka,ot.prototype.getLastErrorCode=ot.prototype.Ba,ot.prototype.getStatus=ot.prototype.Z,ot.prototype.getResponseJson=ot.prototype.Oa,ot.prototype.getResponseText=ot.prototype.oa,ot.prototype.send=ot.prototype.ea,ot.prototype.setWithCredentials=ot.prototype.Ha,tc=ot}).apply(typeof us<"u"?us:typeof self<"u"?self:typeof window<"u"?window:{});const xu="@firebase/firestore",Du="4.7.10";/**
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
 */let Cn="11.5.0";/**
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
 */const Le=new sf("@firebase/firestore");function on(){return Le.logLevel}function b(r,...t){if(Le.logLevel<=Yt.DEBUG){const e=t.map(Vo);Le.debug(`Firestore (${Cn}): ${r}`,...e)}}function ut(r,...t){if(Le.logLevel<=Yt.ERROR){const e=t.map(Vo);Le.error(`Firestore (${Cn}): ${r}`,...e)}}function dn(r,...t){if(Le.logLevel<=Yt.WARN){const e=t.map(Vo);Le.warn(`Firestore (${Cn}): ${r}`,...e)}}function Vo(r){if(typeof r=="string")return r;try{/**
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
 */function O(r="Unexpected state"){const t=`FIRESTORE (${Cn}) INTERNAL ASSERTION FAILED: `+r;throw ut(t),new Error(t)}function L(r,t){r||O()}function F(r,t){return r}/**
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
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends lf{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Gt{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
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
 */class ic{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class mf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(mt.UNAUTHENTICATED)))}shutdown(){}}class gf{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class pf{constructor(t){this.t=t,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){L(this.o===void 0);let n=this.i;const s=c=>this.i!==n?(n=this.i,e(c)):Promise.resolve();let i=new Gt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Gt,t.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const c=i;t.enqueueRetryable((async()=>{await c.promise,await s(this.currentUser)}))},u=c=>{b("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((c=>u(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?u(c):(b("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Gt)}}),0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((n=>this.i!==t?(b("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(L(typeof n.accessToken=="string"),new ic(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return L(t===null||typeof t=="string"),new mt(t)}}class _f{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class yf{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new _f(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(mt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ku{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Tf{constructor(t,e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,uf(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,e){L(this.o===void 0);const n=i=>{i.error!=null&&b("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,b("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable((()=>n(i)))};const s=i=>{b("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):b("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.V)return Promise.resolve(new ku(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(L(typeof e.token=="string"),this.R=e.token,new ku(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function If(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
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
 */function oc(){return new TextEncoder}/**
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
 */class ac{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=If(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%62))}return n}}function q(r,t){return r<t?-1:r>t?1:0}function Zi(r,t){let e=0;for(;e<r.length&&e<t.length;){const n=r.codePointAt(e),s=t.codePointAt(e);if(n!==s){if(n<128&&s<128)return q(n,s);{const i=oc(),a=Ef(i.encode(Nu(r,e)),i.encode(Nu(t,e)));return a!==0?a:q(n,s)}}e+=n>65535?2:1}return q(r.length,t.length)}function Nu(r,t){return r.codePointAt(t)>65535?r.substring(t,t+2):r.substring(t,t+1)}function Ef(r,t){for(let e=0;e<r.length&&e<t.length;++e)if(r[e]!==t[e])return q(r[e],t[e]);return q(r.length,t.length)}function fn(r,t,e){return r.length===t.length&&r.every(((n,s)=>e(n,t[s])))}function uc(r){return r+"\0"}/**
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
 */const Mu=-62135596800,Ou=1e6;class it{static now(){return it.fromMillis(Date.now())}static fromDate(t){return it.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*Ou);return new it(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new x(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new x(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Mu)throw new x(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new x(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ou}_compareTo(t){return this.seconds===t.seconds?q(this.nanoseconds,t.nanoseconds):q(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-Mu;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */const Fu="__name__";class qt{constructor(t,e,n){e===void 0?e=0:e>t.length&&O(),n===void 0?n=t.length-e:n>t.length-e&&O(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return qt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof qt?t.forEach((n=>{e.push(n)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const i=qt.compareSegments(t.get(s),e.get(s));if(i!==0)return i}return q(t.length,e.length)}static compareSegments(t,e){const n=qt.isNumericId(t),s=qt.isNumericId(e);return n&&!s?-1:!n&&s?1:n&&s?qt.extractNumericId(t).compare(qt.extractNumericId(e)):Zi(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return de.fromString(t.substring(4,t.length-2))}}class Y extends qt{construct(t,e,n){return new Y(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new x(S.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((s=>s.length>0)))}return new Y(e)}static emptyPath(){return new Y([])}}const vf=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends qt{construct(t,e,n){return new st(t,e,n)}static isValidIdentifier(t){return vf.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Fu}static keyField(){return new st([Fu])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(n.length===0)throw new x(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let a=!1;for(;s<t.length;){const u=t[s];if(u==="\\"){if(s+1===t.length)throw new x(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new x(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=c,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(n+=u,s++):(i(),s++)}if(i(),a)throw new x(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new st(e)}static emptyPath(){return new st([])}}/**
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
 */const mn=-1;class Ps{constructor(t,e,n,s){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=s}}function to(r){return r.fields.find((t=>t.kind===2))}function Se(r){return r.fields.filter((t=>t.kind!==2))}Ps.UNKNOWN_ID=-1;class ps{constructor(t,e){this.fieldPath=t,this.kind=e}}class yr{constructor(t,e){this.sequenceNumber=t,this.offset=e}static empty(){return new yr(0,Ot.min())}}function lc(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=U.fromTimestamp(n===1e9?new it(e+1,0):new it(e,n));return new Ot(s,M.empty(),t)}function cc(r){return new Ot(r.readTime,r.key,mn)}class Ot{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Ot(U.min(),M.empty(),mn)}static max(){return new Ot(U.max(),M.empty(),mn)}}function Po(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(r.documentKey,t.documentKey),e!==0?e:q(r.largestBatchId,t.largestBatchId))}/**
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
 */const hc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class dc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
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
 */async function Te(r){if(r.code!==S.FAILED_PRECONDITION||r.message!==hc)throw r;b("LocalStore","Unexpectedly lost primary lease")}/**
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
 */const kt="SimpleDb";class Ys{static open(t,e,n,s){try{return new Ys(e,t.transaction(s,n))}catch(i){throw new hr(e,i)}}constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.m=new Gt,this.transaction.oncomplete=()=>{this.m.resolve()},this.transaction.onabort=()=>{e.error?this.m.reject(new hr(t,e.error)):this.m.resolve()},this.transaction.onerror=n=>{const s=So(n.target.error);this.m.reject(new hr(t,s))}}get p(){return this.m.promise}abort(t){t&&this.m.reject(t),this.aborted||(b(kt,"Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}S(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const e=this.transaction.objectStore(t);return new Af(e)}}class fe{static delete(t){return b(kt,"Removing database:",t),Ce(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!df())return!1;if(fe.v())return!0;const t=Vs(),e=fe.C(t),n=0<e&&e<10,s=fc(t),i=0<s&&s<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||n||i)}static v(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.F)==="YES"}static M(t,e){return t.store(e)}static C(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(t,e,n){this.name=t,this.version=e,this.O=n,fe.C(Vs())===12.2&&ut("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async N(t){return this.db||(b(kt,"Opening database:",this.name),this.db=await new Promise(((e,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const a=i.target.result;e(a)},s.onblocked=()=>{n(new hr(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const a=i.target.error;a.name==="VersionError"?n(new x(S.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):a.name==="InvalidStateError"?n(new x(S.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+a)):n(new hr(t,a))},s.onupgradeneeded=i=>{b(kt,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const a=i.target.result;this.O.B(a,s.transaction,i.oldVersion,this.version).next((()=>{b(kt,"Database upgrade to version "+this.version+" complete")}))}}))),this.L&&(this.db.onversionchange=e=>this.L(e)),this.db}k(t){this.L=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,n,s){const i=e==="readonly";let a=0;for(;;){++a;try{this.db=await this.N(t);const u=Ys.open(this.db,t,i?"readonly":"readwrite",n),c=s(u).next((d=>(u.S(),d))).catch((d=>(u.abort(d),w.reject(d)))).toPromise();return c.catch((()=>{})),await u.p,c}catch(u){const c=u,d=c.name!=="FirebaseError"&&a<3;if(b(kt,"Transaction failed with error:",c.message,"Retrying:",d),this.close(),!d)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}function fc(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}class wf{constructor(t){this.q=t,this.$=!1,this.U=null}get isDone(){return this.$}get K(){return this.U}set cursor(t){this.q=t}done(){this.$=!0}W(t){this.U=t}delete(){return Ce(this.q.delete())}}class hr extends x{constructor(t,e){super(S.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function Ie(r){return r.name==="IndexedDbTransactionError"}class Af{constructor(t){this.store=t}put(t,e){let n;return e!==void 0?(b(kt,"PUT",this.store.name,t,e),n=this.store.put(e,t)):(b(kt,"PUT",this.store.name,"<auto-key>",t),n=this.store.put(t)),Ce(n)}add(t){return b(kt,"ADD",this.store.name,t,t),Ce(this.store.add(t))}get(t){return Ce(this.store.get(t)).next((e=>(e===void 0&&(e=null),b(kt,"GET",this.store.name,t,e),e)))}delete(t){return b(kt,"DELETE",this.store.name,t),Ce(this.store.delete(t))}count(){return b(kt,"COUNT",this.store.name),Ce(this.store.count())}G(t,e){const n=this.options(t,e),s=n.index?this.store.index(n.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(n.range);return new w(((a,u)=>{i.onerror=c=>{u(c.target.error)},i.onsuccess=c=>{a(c.target.result)}}))}{const i=this.cursor(n),a=[];return this.j(i,((u,c)=>{a.push(c)})).next((()=>a))}}H(t,e){const n=this.store.getAll(t,e===null?void 0:e);return new w(((s,i)=>{n.onerror=a=>{i(a.target.error)},n.onsuccess=a=>{s(a.target.result)}}))}J(t,e){b(kt,"DELETE ALL",this.store.name);const n=this.options(t,e);n.Y=!1;const s=this.cursor(n);return this.j(s,((i,a,u)=>u.delete()))}Z(t,e){let n;e?n=t:(n={},e=t);const s=this.cursor(n);return this.j(s,e)}X(t){const e=this.cursor({});return new w(((n,s)=>{e.onerror=i=>{const a=So(i.target.error);s(a)},e.onsuccess=i=>{const a=i.target.result;a?t(a.primaryKey,a.value).next((u=>{u?a.continue():n()})):n()}}))}j(t,e){const n=[];return new w(((s,i)=>{t.onerror=a=>{i(a.target.error)},t.onsuccess=a=>{const u=a.target.result;if(!u)return void s();const c=new wf(u),d=e(u.primaryKey,u.value,c);if(d instanceof w){const m=d.catch((g=>(c.done(),w.reject(g))));n.push(m)}c.isDone?s():c.K===null?u.continue():u.continue(c.K)}})).next((()=>w.waitFor(n)))}options(t,e){let n;return t!==void 0&&(typeof t=="string"?n=t:e=t),{index:n,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const n=this.store.index(t.index);return t.Y?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function Ce(r){return new w(((t,e)=>{r.onsuccess=n=>{const s=n.target.result;t(s)},r.onerror=n=>{const s=So(n.target.error);e(s)}}))}let Lu=!1;function So(r){const t=fe.C(Vs());if(t>=12.2&&t<13){const e="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(e)>=0){const n=new x("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Lu||(Lu=!0,setTimeout((()=>{throw n}),0)),n}}return r}const dr="IndexBackfiller";class Rf{constructor(t,e){this.asyncQueue=t,this.ee=e,this.task=null}start(){this.te(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}te(t){b(dr,`Scheduled in ${t}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",t,(async()=>{this.task=null;try{const e=await this.ee.ne();b(dr,`Documents written: ${e}`)}catch(e){Ie(e)?b(dr,"Ignoring IndexedDB error during index backfill: ",e):await Te(e)}await this.te(6e4)}))}}class Vf{constructor(t,e){this.localStore=t,this.persistence=e}async ne(t=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(e=>this.re(e,t)))}re(t,e){const n=new Set;let s=e,i=!0;return w.doWhile((()=>i===!0&&s>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(t).next((a=>{if(a!==null&&!n.has(a))return b(dr,`Processing collection: ${a}`),this.ie(t,a,s).next((u=>{s-=u,n.add(a)}));i=!1})))).next((()=>e-s))}ie(t,e,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(t,e).next((s=>this.localStore.localDocuments.getNextDocuments(t,e,s,n).next((i=>{const a=i.changes;return this.localStore.indexManager.updateIndexEntries(t,a).next((()=>this.se(s,i))).next((u=>(b(dr,`Updating offset: ${u}`),this.localStore.indexManager.updateCollectionGroup(t,e,u)))).next((()=>a.size))}))))}se(t,e){let n=t;return e.changes.forEach(((s,i)=>{const a=cc(i);Po(a,n)>0&&(n=a)})),new Ot(n.readTime,n.documentKey,Math.max(e.batchId,t.largestBatchId))}}/**
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
 */class Ct{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.oe(n),this._e=n=>e.writeSequenceNumber(n))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}Ct.ae=-1;/**
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
 */const Me=-1;function Xs(r){return r==null}function Tr(r){return r===0&&1/r==-1/0}function mc(r){return typeof r=="number"&&Number.isInteger(r)&&!Tr(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const Ss="";function Vt(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=Uu(t)),t=Pf(r.get(e),t);return Uu(t)}function Pf(r,t){let e=t;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":e+="";break;case Ss:e+="";break;default:e+=i}}return e}function Uu(r){return r+Ss+""}function zt(r){const t=r.length;if(L(t>=2),t===2)return L(r.charAt(0)===Ss&&r.charAt(1)===""),Y.emptyPath();const e=t-2,n=[];let s="";for(let i=0;i<t;){const a=r.indexOf(Ss,i);switch((a<0||a>e)&&O(),r.charAt(a+1)){case"":const u=r.substring(i,a);let c;s.length===0?c=u:(s+=u,c=s,s=""),n.push(c);break;case"":s+=r.substring(i,a),s+="\0";break;case"":s+=r.substring(i,a+1);break;default:O()}i=a+2}return new Y(n)}/**
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
 */const be="remoteDocuments",xr="owner",Ze="owner",Ir="mutationQueues",Sf="userId",Ut="mutations",Bu="batchId",Ne="userMutationsIndex",qu=["userId","batchId"];/**
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
 */function _s(r,t){return[r,Vt(t)]}function gc(r,t,e){return[r,Vt(t),e]}const bf={},gn="documentMutations",bs="remoteDocumentsV14",Cf=["prefixPath","collectionGroup","readTime","documentId"],ys="documentKeyIndex",xf=["prefixPath","collectionGroup","documentId"],pc="collectionGroupIndex",Df=["collectionGroup","readTime","prefixPath","documentId"],Er="remoteDocumentGlobal",eo="remoteDocumentGlobalKey",pn="targets",_c="queryTargetsIndex",kf=["canonicalId","targetId"],_n="targetDocuments",Nf=["targetId","path"],bo="documentTargetsIndex",Mf=["path","targetId"],Cs="targetGlobalKey",Oe="targetGlobal",vr="collectionParents",Of=["collectionId","parent"],yn="clientMetadata",Ff="clientId",Js="bundles",Lf="bundleId",Zs="namedQueries",Uf="name",Co="indexConfiguration",Bf="indexId",no="collectionGroupIndex",qf="collectionGroup",xs="indexState",jf=["indexId","uid"],yc="sequenceNumberIndex",zf=["uid","sequenceNumber"],Ds="indexEntries",Kf=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Tc="documentKeyIndex",Gf=["indexId","uid","orderedDocumentKey"],ti="documentOverlays",$f=["userId","collectionPath","documentId"],ro="collectionPathOverlayIndex",Qf=["userId","collectionPath","largestBatchId"],Ic="collectionGroupOverlayIndex",Wf=["userId","collectionGroup","largestBatchId"],xo="globals",Hf="name",Ec=[Ir,Ut,gn,be,pn,xr,Oe,_n,yn,Er,vr,Js,Zs],Yf=[...Ec,ti],vc=[Ir,Ut,gn,bs,pn,xr,Oe,_n,yn,Er,vr,Js,Zs,ti],wc=vc,Do=[...wc,Co,xs,Ds],Xf=Do,Jf=[...Do,xo];/**
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
 */class so extends dc{constructor(t,e){super(),this.ue=t,this.currentSequenceNumber=e}}function dt(r,t){const e=F(r);return fe.M(e.ue,t)}/**
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
 */function ju(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function Ee(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function Ac(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
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
 */class et{constructor(t,e){this.comparator=t,this.root=e||pt.EMPTY}insert(t,e){return new et(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,pt.BLACK,null,null))}remove(t){return new et(this.comparator,this.root.remove(t,this.comparator).copy(null,null,pt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ls(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ls(this.root,t,this.comparator,!1)}getReverseIterator(){return new ls(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ls(this.root,t,this.comparator,!0)}}class ls{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class pt{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=n??pt.RED,this.left=s??pt.EMPTY,this.right=i??pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new pt(t??this.key,e??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):i===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return pt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return pt.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw O();const t=this.left.check();if(t!==this.right.check())throw O();return t+(this.isRed()?0:1)}}pt.EMPTY=null,pt.RED=!0,pt.BLACK=!1;pt.EMPTY=new class{constructor(){this.size=0}get key(){throw O()}get value(){throw O()}get color(){throw O()}get left(){throw O()}get right(){throw O()}copy(t,e,n,s,i){return this}insert(t,e,n){return new pt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class J{constructor(t){this.comparator=t,this.data=new et(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new zu(this.data.getIterator())}getIteratorFrom(t){return new zu(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((n=>{e=e.add(n)})),e}isEqual(t){if(!(t instanceof J)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new J(this.comparator);return e.data=t,e}}class zu{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function tn(r){return r.hasNext()?r.getNext():void 0}/**
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
 */class xt{constructor(t){this.fields=t,t.sort(st.comparator)}static empty(){return new xt([])}unionWith(t){let e=new J(st.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new xt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return fn(this.fields,t.fields,((e,n)=>e.isEqual(n)))}}/**
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
 */class Rc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class lt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Rc("Invalid base64 string: "+i):i}})(t);return new lt(e)}static fromUint8Array(t){const e=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(t);return new lt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return q(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const Zf=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jt(r){if(L(!!r),typeof r=="string"){let t=0;const e=Zf.exec(r);if(L(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:rt(r.seconds),nanos:rt(r.nanos)}}function rt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Zt(r){return typeof r=="string"?lt.fromBase64String(r):lt.fromUint8Array(r)}/**
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
 */const Vc="server_timestamp",Pc="__type__",Sc="__previous_value__",bc="__local_write_time__";function ko(r){var t,e;return((e=(((t=r?.mapValue)===null||t===void 0?void 0:t.fields)||{})[Pc])===null||e===void 0?void 0:e.stringValue)===Vc}function ei(r){const t=r.mapValue.fields[Sc];return ko(t)?ei(t):t}function wr(r){const t=Jt(r.mapValue.fields[bc].timestampValue);return new it(t.seconds,t.nanos)}/**
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
 */class tm{constructor(t,e,n,s,i,a,u,c,d){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=c,this.useFetchStreams=d}}const ks="(default)";class Ue{constructor(t,e){this.projectId=t,this.database=e||ks}static empty(){return new Ue("","")}get isDefaultDatabase(){return this.database===ks}isEqual(t){return t instanceof Ue&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const No="__type__",Cc="__max__",he={mapValue:{fields:{__type__:{stringValue:Cc}}}},Mo="__vector__",Tn="value",Ts={nullValue:"NULL_VALUE"};function ge(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?ko(r)?4:xc(r)?9007199254740991:ni(r)?10:11:O()}function $t(r,t){if(r===t)return!0;const e=ge(r);if(e!==ge(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return wr(r).isEqual(wr(t));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Jt(s.timestampValue),u=Jt(i.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos})(r,t);case 5:return r.stringValue===t.stringValue;case 6:return(function(s,i){return Zt(s.bytesValue).isEqual(Zt(i.bytesValue))})(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return(function(s,i){return rt(s.geoPointValue.latitude)===rt(i.geoPointValue.latitude)&&rt(s.geoPointValue.longitude)===rt(i.geoPointValue.longitude)})(r,t);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return rt(s.integerValue)===rt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=rt(s.doubleValue),u=rt(i.doubleValue);return a===u?Tr(a)===Tr(u):isNaN(a)&&isNaN(u)}return!1})(r,t);case 9:return fn(r.arrayValue.values||[],t.arrayValue.values||[],$t);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},u=i.mapValue.fields||{};if(ju(a)!==ju(u))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(u[c]===void 0||!$t(a[c],u[c])))return!1;return!0})(r,t);default:return O()}}function Ar(r,t){return(r.values||[]).find((e=>$t(e,t)))!==void 0}function pe(r,t){if(r===t)return 0;const e=ge(r),n=ge(t);if(e!==n)return q(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return q(r.booleanValue,t.booleanValue);case 2:return(function(i,a){const u=rt(i.integerValue||i.doubleValue),c=rt(a.integerValue||a.doubleValue);return u<c?-1:u>c?1:u===c?0:isNaN(u)?isNaN(c)?0:-1:1})(r,t);case 3:return Ku(r.timestampValue,t.timestampValue);case 4:return Ku(wr(r),wr(t));case 5:return Zi(r.stringValue,t.stringValue);case 6:return(function(i,a){const u=Zt(i),c=Zt(a);return u.compareTo(c)})(r.bytesValue,t.bytesValue);case 7:return(function(i,a){const u=i.split("/"),c=a.split("/");for(let d=0;d<u.length&&d<c.length;d++){const m=q(u[d],c[d]);if(m!==0)return m}return q(u.length,c.length)})(r.referenceValue,t.referenceValue);case 8:return(function(i,a){const u=q(rt(i.latitude),rt(a.latitude));return u!==0?u:q(rt(i.longitude),rt(a.longitude))})(r.geoPointValue,t.geoPointValue);case 9:return Gu(r.arrayValue,t.arrayValue);case 10:return(function(i,a){var u,c,d,m;const g=i.fields||{},T=a.fields||{},P=(u=g[Tn])===null||u===void 0?void 0:u.arrayValue,C=(c=T[Tn])===null||c===void 0?void 0:c.arrayValue,N=q(((d=P?.values)===null||d===void 0?void 0:d.length)||0,((m=C?.values)===null||m===void 0?void 0:m.length)||0);return N!==0?N:Gu(P,C)})(r.mapValue,t.mapValue);case 11:return(function(i,a){if(i===he.mapValue&&a===he.mapValue)return 0;if(i===he.mapValue)return 1;if(a===he.mapValue)return-1;const u=i.fields||{},c=Object.keys(u),d=a.fields||{},m=Object.keys(d);c.sort(),m.sort();for(let g=0;g<c.length&&g<m.length;++g){const T=Zi(c[g],m[g]);if(T!==0)return T;const P=pe(u[c[g]],d[m[g]]);if(P!==0)return P}return q(c.length,m.length)})(r.mapValue,t.mapValue);default:throw O()}}function Ku(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return q(r,t);const e=Jt(r),n=Jt(t),s=q(e.seconds,n.seconds);return s!==0?s:q(e.nanos,n.nanos)}function Gu(r,t){const e=r.values||[],n=t.values||[];for(let s=0;s<e.length&&s<n.length;++s){const i=pe(e[s],n[s]);if(i)return i}return q(e.length,n.length)}function In(r){return io(r)}function io(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(e){const n=Jt(e);return`time(${n.seconds},${n.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(e){return Zt(e).toBase64()})(r.bytesValue):"referenceValue"in r?(function(e){return M.fromName(e).toString()})(r.referenceValue):"geoPointValue"in r?(function(e){return`geo(${e.latitude},${e.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(e){let n="[",s=!0;for(const i of e.values||[])s?s=!1:n+=",",n+=io(i);return n+"]"})(r.arrayValue):"mapValue"in r?(function(e){const n=Object.keys(e.fields||{}).sort();let s="{",i=!0;for(const a of n)i?i=!1:s+=",",s+=`${a}:${io(e.fields[a])}`;return s+"}"})(r.mapValue):O()}function Is(r){switch(ge(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=ei(r);return t?16+Is(t):16;case 5:return 2*r.stringValue.length;case 6:return Zt(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(n){return(n.values||[]).reduce(((s,i)=>s+Is(i)),0)})(r.arrayValue);case 10:case 11:return(function(n){let s=0;return Ee(n.fields,((i,a)=>{s+=i.length+Is(a)})),s})(r.mapValue);default:throw O()}}function Rr(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function oo(r){return!!r&&"integerValue"in r}function Vr(r){return!!r&&"arrayValue"in r}function $u(r){return!!r&&"nullValue"in r}function Qu(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Es(r){return!!r&&"mapValue"in r}function ni(r){var t,e;return((e=(((t=r?.mapValue)===null||t===void 0?void 0:t.fields)||{})[No])===null||e===void 0?void 0:e.stringValue)===Mo}function fr(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return Ee(r.mapValue.fields,((e,n)=>t.mapValue.fields[e]=fr(n))),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=fr(r.arrayValue.values[e]);return t}return Object.assign({},r)}function xc(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===Cc}const Dc={mapValue:{fields:{[No]:{stringValue:Mo},[Tn]:{arrayValue:{}}}}};function em(r){return"nullValue"in r?Ts:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?Rr(Ue.empty(),M.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?ni(r)?Dc:{mapValue:{}}:O()}function nm(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?Rr(Ue.empty(),M.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?Dc:"mapValue"in r?ni(r)?{mapValue:{}}:he:O()}function Wu(r,t){const e=pe(r.value,t.value);return e!==0?e:r.inclusive&&!t.inclusive?-1:!r.inclusive&&t.inclusive?1:0}function Hu(r,t){const e=pe(r.value,t.value);return e!==0?e:r.inclusive&&!t.inclusive?1:!r.inclusive&&t.inclusive?-1:0}/**
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
 */class Rt{constructor(t){this.value=t}static empty(){return new Rt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Es(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=fr(e)}setAll(t){let e=st.emptyPath(),n={},s=[];t.forEach(((a,u)=>{if(!e.isImmediateParentOf(u)){const c=this.getFieldsMap(e);this.applyChanges(c,n,s),n={},s=[],e=u.popLast()}a?n[u.lastSegment()]=fr(a):s.push(u.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());Es(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return $t(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];Es(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){Ee(e,((s,i)=>t[s]=i));for(const s of n)delete t[s]}clone(){return new Rt(fr(this.value))}}function kc(r){const t=[];return Ee(r.fields,((e,n)=>{const s=new st([e]);if(Es(n)){const i=kc(n.mapValue).fields;if(i.length===0)t.push(s);else for(const a of i)t.push(s.child(a))}else t.push(s)})),new xt(t)}/**
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
 */class at{constructor(t,e,n,s,i,a,u){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=i,this.data=a,this.documentState=u}static newInvalidDocument(t){return new at(t,0,U.min(),U.min(),U.min(),Rt.empty(),0)}static newFoundDocument(t,e,n,s){return new at(t,1,e,U.min(),n,s,0)}static newNoDocument(t,e){return new at(t,2,e,U.min(),U.min(),Rt.empty(),0)}static newUnknownDocument(t,e){return new at(t,3,e,U.min(),U.min(),Rt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof at&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new at(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class En{constructor(t,e){this.position=t,this.inclusive=e}}function Yu(r,t,e){let n=0;for(let s=0;s<r.position.length;s++){const i=t[s],a=r.position[s];if(i.field.isKeyField()?n=M.comparator(M.fromName(a.referenceValue),e.key):n=pe(a,e.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function Xu(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!$t(r.position[e],t.position[e]))return!1;return!0}/**
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
 */class Pr{constructor(t,e="asc"){this.field=t,this.dir=e}}function rm(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class Nc{}class G extends Nc{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new sm(t,e,n):e==="array-contains"?new am(t,n):e==="in"?new Bc(t,n):e==="not-in"?new um(t,n):e==="array-contains-any"?new lm(t,n):new G(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new im(t,n):new om(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(pe(e,this.value)):e!==null&&ge(this.value)===ge(e)&&this.matchesComparison(pe(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return O()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class X extends Nc{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new X(t,e)}matches(t){return vn(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function vn(r){return r.op==="and"}function ao(r){return r.op==="or"}function Oo(r){return Mc(r)&&vn(r)}function Mc(r){for(const t of r.filters)if(t instanceof X)return!1;return!0}function uo(r){if(r instanceof G)return r.field.canonicalString()+r.op.toString()+In(r.value);if(Oo(r))return r.filters.map((t=>uo(t))).join(",");{const t=r.filters.map((e=>uo(e))).join(",");return`${r.op}(${t})`}}function Oc(r,t){return r instanceof G?(function(n,s){return s instanceof G&&n.op===s.op&&n.field.isEqual(s.field)&&$t(n.value,s.value)})(r,t):r instanceof X?(function(n,s){return s instanceof X&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce(((i,a,u)=>i&&Oc(a,s.filters[u])),!0):!1})(r,t):void O()}function Fc(r,t){const e=r.filters.concat(t);return X.create(e,r.op)}function Lc(r){return r instanceof G?(function(e){return`${e.field.canonicalString()} ${e.op} ${In(e.value)}`})(r):r instanceof X?(function(e){return e.op.toString()+" {"+e.getFilters().map(Lc).join(" ,")+"}"})(r):"Filter"}class sm extends G{constructor(t,e,n){super(t,e,n),this.key=M.fromName(n.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class im extends G{constructor(t,e){super(t,"in",e),this.keys=Uc("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class om extends G{constructor(t,e){super(t,"not-in",e),this.keys=Uc("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Uc(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map((n=>M.fromName(n.referenceValue)))}class am extends G{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Vr(e)&&Ar(e.arrayValue,this.value)}}class Bc extends G{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Ar(this.value.arrayValue,e)}}class um extends G{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ar(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Ar(this.value.arrayValue,e)}}class lm extends G{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Vr(e)||!e.arrayValue.values)&&e.arrayValue.values.some((n=>Ar(this.value.arrayValue,n)))}}/**
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
 */class cm{constructor(t,e=null,n=[],s=[],i=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=a,this.endAt=u,this.le=null}}function lo(r,t=null,e=[],n=[],s=null,i=null,a=null){return new cm(r,t,e,n,s,i,a)}function Be(r){const t=F(r);if(t.le===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((n=>uo(n))).join(","),e+="|ob:",e+=t.orderBy.map((n=>(function(i){return i.field.canonicalString()+i.dir})(n))).join(","),Xs(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((n=>In(n))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((n=>In(n))).join(",")),t.le=e}return t.le}function Dr(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!rm(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!Oc(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!Xu(r.startAt,t.startAt)&&Xu(r.endAt,t.endAt)}function Ns(r){return M.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Ms(r,t){return r.filters.filter((e=>e instanceof G&&e.field.isEqual(t)))}function Ju(r,t,e){let n=Ts,s=!0;for(const i of Ms(r,t)){let a=Ts,u=!0;switch(i.op){case"<":case"<=":a=em(i.value);break;case"==":case"in":case">=":a=i.value;break;case">":a=i.value,u=!1;break;case"!=":case"not-in":a=Ts}Wu({value:n,inclusive:s},{value:a,inclusive:u})<0&&(n=a,s=u)}if(e!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(t)){const a=e.position[i];Wu({value:n,inclusive:s},{value:a,inclusive:e.inclusive})<0&&(n=a,s=e.inclusive);break}}return{value:n,inclusive:s}}function Zu(r,t,e){let n=he,s=!0;for(const i of Ms(r,t)){let a=he,u=!0;switch(i.op){case">=":case">":a=nm(i.value),u=!1;break;case"==":case"in":case"<=":a=i.value;break;case"<":a=i.value,u=!1;break;case"!=":case"not-in":a=he}Hu({value:n,inclusive:s},{value:a,inclusive:u})>0&&(n=a,s=u)}if(e!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(t)){const a=e.position[i];Hu({value:n,inclusive:s},{value:a,inclusive:e.inclusive})>0&&(n=a,s=e.inclusive);break}}return{value:n,inclusive:s}}/**
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
 */class xn{constructor(t,e=null,n=[],s=[],i=null,a="F",u=null,c=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=a,this.startAt=u,this.endAt=c,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function qc(r,t,e,n,s,i,a,u){return new xn(r,t,e,n,s,i,a,u)}function kr(r){return new xn(r)}function tl(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function jc(r){return r.collectionGroup!==null}function mr(r){const t=F(r);if(t.he===null){t.he=[];const e=new Set;for(const i of t.explicitOrderBy)t.he.push(i),e.add(i.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new J(st.comparator);return a.filters.forEach((c=>{c.getFlattenedFilters().forEach((d=>{d.isInequality()&&(u=u.add(d.field))}))})),u})(t).forEach((i=>{e.has(i.canonicalString())||i.isKeyField()||t.he.push(new Pr(i,n))})),e.has(st.keyField().canonicalString())||t.he.push(new Pr(st.keyField(),n))}return t.he}function Mt(r){const t=F(r);return t.Pe||(t.Pe=hm(t,mr(r))),t.Pe}function hm(r,t){if(r.limitType==="F")return lo(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Pr(s.field,i)}));const e=r.endAt?new En(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new En(r.startAt.position,r.startAt.inclusive):null;return lo(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function co(r,t){const e=r.filters.concat([t]);return new xn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),e,r.limit,r.limitType,r.startAt,r.endAt)}function Os(r,t,e){return new xn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function ri(r,t){return Dr(Mt(r),Mt(t))&&r.limitType===t.limitType}function zc(r){return`${Be(Mt(r))}|lt:${r.limitType}`}function an(r){return`Query(target=${(function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map((s=>Lc(s))).join(", ")}]`),Xs(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((s=>In(s))).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((s=>In(s))).join(",")),`Target(${n})`})(Mt(r))}; limitType=${r.limitType})`}function Nr(r,t){return t.isFoundDocument()&&(function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):M.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)})(r,t)&&(function(n,s){for(const i of mr(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(r,t)&&(function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0})(r,t)&&(function(n,s){return!(n.startAt&&!(function(a,u,c){const d=Yu(a,u,c);return a.inclusive?d<=0:d<0})(n.startAt,mr(n),s)||n.endAt&&!(function(a,u,c){const d=Yu(a,u,c);return a.inclusive?d>=0:d>0})(n.endAt,mr(n),s))})(r,t)}function Kc(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Gc(r){return(t,e)=>{let n=!1;for(const s of mr(r)){const i=dm(s,t,e);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function dm(r,t,e){const n=r.field.isKeyField()?M.comparator(t.key,e.key):(function(i,a,u){const c=a.data.field(i),d=u.data.field(i);return c!==null&&d!==null?pe(c,d):O()})(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return O()}}/**
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
 */class te{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return n.length===1?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Ee(this.inner,((e,n)=>{for(const[s,i]of n)t(s,i)}))}isEmpty(){return Ac(this.inner)}size(){return this.innerSize}}/**
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
 */const fm=new et(M.comparator);function Nt(){return fm}const $c=new et(M.comparator);function ar(...r){let t=$c;for(const e of r)t=t.insert(e.key,e);return t}function Qc(r){let t=$c;return r.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function Kt(){return gr()}function Wc(){return gr()}function gr(){return new te((r=>r.toString()),((r,t)=>r.isEqual(t)))}const mm=new et(M.comparator),gm=new J(M.comparator);function K(...r){let t=gm;for(const e of r)t=t.add(e);return t}const pm=new J(q);function Fo(){return pm}/**
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
 */function Lo(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Tr(t)?"-0":t}}function Hc(r){return{integerValue:""+r}}function _m(r,t){return mc(t)?Hc(t):Lo(r,t)}/**
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
 */class si{constructor(){this._=void 0}}function ym(r,t,e){return r instanceof wn?(function(s,i){const a={fields:{[Pc]:{stringValue:Vc},[bc]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ko(i)&&(i=ei(i)),i&&(a.fields[Sc]=i),{mapValue:a}})(e,t):r instanceof qe?Xc(r,t):r instanceof je?Jc(r,t):(function(s,i){const a=Yc(s,i),u=el(a)+el(s.Ie);return oo(a)&&oo(s.Ie)?Hc(u):Lo(s.serializer,u)})(r,t)}function Tm(r,t,e){return r instanceof qe?Xc(r,t):r instanceof je?Jc(r,t):e}function Yc(r,t){return r instanceof Sr?(function(n){return oo(n)||(function(i){return!!i&&"doubleValue"in i})(n)})(t)?t:{integerValue:0}:null}class wn extends si{}class qe extends si{constructor(t){super(),this.elements=t}}function Xc(r,t){const e=Zc(t);for(const n of r.elements)e.some((s=>$t(s,n)))||e.push(n);return{arrayValue:{values:e}}}class je extends si{constructor(t){super(),this.elements=t}}function Jc(r,t){let e=Zc(t);for(const n of r.elements)e=e.filter((s=>!$t(s,n)));return{arrayValue:{values:e}}}class Sr extends si{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function el(r){return rt(r.integerValue||r.doubleValue)}function Zc(r){return Vr(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class ii{constructor(t,e){this.field=t,this.transform=e}}function Im(r,t){return r.field.isEqual(t.field)&&(function(n,s){return n instanceof qe&&s instanceof qe||n instanceof je&&s instanceof je?fn(n.elements,s.elements,$t):n instanceof Sr&&s instanceof Sr?$t(n.Ie,s.Ie):n instanceof wn&&s instanceof wn})(r.transform,t.transform)}class Em{constructor(t,e){this.version=t,this.transformResults=e}}class ht{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ht}static exists(t){return new ht(void 0,t)}static updateTime(t){return new ht(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function vs(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class oi{}function th(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Mr(r.key,ht.none()):new Dn(r.key,r.data,ht.none());{const e=r.data,n=Rt.empty();let s=new J(st.comparator);for(let i of t.fields)if(!s.has(i)){let a=e.field(i);a===null&&i.length>1&&(i=i.popLast(),a=e.field(i)),a===null?n.delete(i):n.set(i,a),s=s.add(i)}return new ee(r.key,n,new xt(s.toArray()),ht.none())}}function vm(r,t,e){r instanceof Dn?(function(s,i,a){const u=s.value.clone(),c=rl(s.fieldTransforms,i,a.transformResults);u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(r,t,e):r instanceof ee?(function(s,i,a){if(!vs(s.precondition,i))return void i.convertToUnknownDocument(a.version);const u=rl(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(eh(s)),c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(r,t,e):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,t,e)}function pr(r,t,e,n){return r instanceof Dn?(function(i,a,u,c){if(!vs(i.precondition,a))return u;const d=i.value.clone(),m=sl(i.fieldTransforms,c,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(r,t,e,n):r instanceof ee?(function(i,a,u,c){if(!vs(i.precondition,a))return u;const d=sl(i.fieldTransforms,c,a),m=a.data;return m.setAll(eh(i)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),u===null?null:u.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((g=>g.field)))})(r,t,e,n):(function(i,a,u){return vs(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u})(r,t,e)}function wm(r,t){let e=null;for(const n of r.fieldTransforms){const s=t.data.field(n.field),i=Yc(n.transform,s||null);i!=null&&(e===null&&(e=Rt.empty()),e.set(n.field,i))}return e||null}function nl(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!(function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&fn(n,s,((i,a)=>Im(i,a)))})(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class Dn extends oi{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ee extends oi{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function eh(r){const t=new Map;return r.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}})),t}function rl(r,t,e){const n=new Map;L(r.length===e.length);for(let s=0;s<e.length;s++){const i=r[s],a=i.transform,u=t.data.field(i.field);n.set(i.field,Tm(a,u,e[s]))}return n}function sl(r,t,e){const n=new Map;for(const s of r){const i=s.transform,a=e.data.field(s.field);n.set(s.field,ym(i,a,t))}return n}class Mr extends oi{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nh extends oi{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Uo{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&vm(i,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=pr(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=pr(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Wc();return this.mutations.forEach((s=>{const i=t.get(s.key),a=i.overlayedDocument;let u=this.applyToLocalView(a,i.mutatedFields);u=e.has(s.key)?null:u;const c=th(a,u);c!==null&&n.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(U.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),K())}isEqual(t){return this.batchId===t.batchId&&fn(this.mutations,t.mutations,((e,n)=>nl(e,n)))&&fn(this.baseMutations,t.baseMutations,((e,n)=>nl(e,n)))}}class Bo{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){L(t.mutations.length===n.length);let s=(function(){return mm})();const i=t.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,n[a].version);return new Bo(t,e,n,s)}}/**
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
 */class qo{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Am{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var ct,$;function Rm(r){switch(r){case S.OK:return O();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return O()}}function rh(r){if(r===void 0)return ut("GRPC error has no .code"),S.UNKNOWN;switch(r){case ct.OK:return S.OK;case ct.CANCELLED:return S.CANCELLED;case ct.UNKNOWN:return S.UNKNOWN;case ct.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case ct.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case ct.INTERNAL:return S.INTERNAL;case ct.UNAVAILABLE:return S.UNAVAILABLE;case ct.UNAUTHENTICATED:return S.UNAUTHENTICATED;case ct.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case ct.NOT_FOUND:return S.NOT_FOUND;case ct.ALREADY_EXISTS:return S.ALREADY_EXISTS;case ct.PERMISSION_DENIED:return S.PERMISSION_DENIED;case ct.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case ct.ABORTED:return S.ABORTED;case ct.OUT_OF_RANGE:return S.OUT_OF_RANGE;case ct.UNIMPLEMENTED:return S.UNIMPLEMENTED;case ct.DATA_LOSS:return S.DATA_LOSS;default:return O()}}($=ct||(ct={}))[$.OK=0]="OK",$[$.CANCELLED=1]="CANCELLED",$[$.UNKNOWN=2]="UNKNOWN",$[$.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$[$.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$[$.NOT_FOUND=5]="NOT_FOUND",$[$.ALREADY_EXISTS=6]="ALREADY_EXISTS",$[$.PERMISSION_DENIED=7]="PERMISSION_DENIED",$[$.UNAUTHENTICATED=16]="UNAUTHENTICATED",$[$.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$[$.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$[$.ABORTED=10]="ABORTED",$[$.OUT_OF_RANGE=11]="OUT_OF_RANGE",$[$.UNIMPLEMENTED=12]="UNIMPLEMENTED",$[$.INTERNAL=13]="INTERNAL",$[$.UNAVAILABLE=14]="UNAVAILABLE",$[$.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const Vm=new de([4294967295,4294967295],0);function il(r){const t=oc().encode(r),e=new Zl;return e.update(t),new Uint8Array(e.digest())}function ol(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new de([e,n],0),new de([s,i],0)]}class jo{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new ur(`Invalid padding: ${e}`);if(n<0)throw new ur(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new ur(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new ur(`Invalid padding when bitmap length is 0: ${e}`);this.Ee=8*t.length-e,this.de=de.fromNumber(this.Ee)}Ae(t,e,n){let s=t.add(e.multiply(de.fromNumber(n)));return s.compare(Vm)===1&&(s=new de([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.Ee===0)return!1;const e=il(t),[n,s]=ol(e);for(let i=0;i<this.hashCount;i++){const a=this.Ae(n,s,i);if(!this.Re(a))return!1}return!0}static create(t,e,n){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),a=new jo(i,s,e);return n.forEach((u=>a.insert(u))),a}insert(t){if(this.Ee===0)return;const e=il(t),[n,s]=ol(e);for(let i=0;i<this.hashCount;i++){const a=this.Ae(n,s,i);this.Ve(a)}}Ve(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class ur extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Or{constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,Fr.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Or(U.min(),s,new et(q),Nt(),K())}}class Fr{constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Fr(n,e,K(),K(),K())}}/**
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
 */class ws{constructor(t,e,n,s){this.me=t,this.removedTargetIds=e,this.key=n,this.fe=s}}class sh{constructor(t,e){this.targetId=t,this.ge=e}}class ih{constructor(t,e,n=lt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class al{constructor(){this.pe=0,this.ye=ul(),this.we=lt.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(t){t.approximateByteSize()>0&&(this.be=!0,this.we=t)}Fe(){let t=K(),e=K(),n=K();return this.ye.forEach(((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:O()}})),new Fr(this.we,this.Se,t,e,n)}Me(){this.be=!1,this.ye=ul()}xe(t,e){this.be=!0,this.ye=this.ye.insert(t,e)}Oe(t){this.be=!0,this.ye=this.ye.remove(t)}Ne(){this.pe+=1}Be(){this.pe-=1,L(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class Pm{constructor(t){this.ke=t,this.qe=new Map,this.Qe=Nt(),this.$e=cs(),this.Ue=cs(),this.Ke=new et(q)}We(t){for(const e of t.me)t.fe&&t.fe.isFoundDocument()?this.Ge(e,t.fe):this.ze(e,t.key,t.fe);for(const e of t.removedTargetIds)this.ze(e,t.key,t.fe)}je(t){this.forEachTarget(t,(e=>{const n=this.He(e);switch(t.state){case 0:this.Je(e)&&n.Ce(t.resumeToken);break;case 1:n.Be(),n.De||n.Me(),n.Ce(t.resumeToken);break;case 2:n.Be(),n.De||this.removeTarget(e);break;case 3:this.Je(e)&&(n.Le(),n.Ce(t.resumeToken));break;case 4:this.Je(e)&&(this.Ye(e),n.Ce(t.resumeToken));break;default:O()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.qe.forEach(((n,s)=>{this.Je(s)&&e(s)}))}Ze(t){const e=t.targetId,n=t.ge.count,s=this.Xe(e);if(s){const i=s.target;if(Ns(i))if(n===0){const a=new M(i.path);this.ze(e,a,at.newNoDocument(a,U.min()))}else L(n===1);else{const a=this.et(e);if(a!==n){const u=this.tt(t),c=u?this.nt(u,t,a):1;if(c!==0){this.Ye(e);const d=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,d)}}}}}tt(t){const e=t.ge.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=e;let a,u;try{a=Zt(n).toUint8Array()}catch(c){if(c instanceof Rc)return dn("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{u=new jo(a,s,i)}catch(c){return dn(c instanceof ur?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return u.Ee===0?null:u}nt(t,e,n){return e.ge.count===n-this.st(t,e.targetId)?0:2}st(t,e){const n=this.ke.getRemoteKeysForTarget(e);let s=0;return n.forEach((i=>{const a=this.ke.it(),u=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;t.mightContain(u)||(this.ze(e,i,null),s++)})),s}ot(t){const e=new Map;this.qe.forEach(((i,a)=>{const u=this.Xe(a);if(u){if(i.current&&Ns(u.target)){const c=new M(u.target.path);this._t(c).has(a)||this.ut(a,c)||this.ze(a,c,at.newNoDocument(c,t))}i.ve&&(e.set(a,i.Fe()),i.Me())}}));let n=K();this.Ue.forEach(((i,a)=>{let u=!0;a.forEachWhile((c=>{const d=this.Xe(c);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)})),u&&(n=n.add(i))})),this.Qe.forEach(((i,a)=>a.setReadTime(t)));const s=new Or(t,e,this.Ke,this.Qe,n);return this.Qe=Nt(),this.$e=cs(),this.Ue=cs(),this.Ke=new et(q),s}Ge(t,e){if(!this.Je(t))return;const n=this.ut(t,e.key)?2:0;this.He(t).xe(e.key,n),this.Qe=this.Qe.insert(e.key,e),this.$e=this.$e.insert(e.key,this._t(e.key).add(t)),this.Ue=this.Ue.insert(e.key,this.ct(e.key).add(t))}ze(t,e,n){if(!this.Je(t))return;const s=this.He(t);this.ut(t,e)?s.xe(e,1):s.Oe(e),this.Ue=this.Ue.insert(e,this.ct(e).delete(t)),this.Ue=this.Ue.insert(e,this.ct(e).add(t)),n&&(this.Qe=this.Qe.insert(e,n))}removeTarget(t){this.qe.delete(t)}et(t){const e=this.He(t).Fe();return this.ke.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ne(t){this.He(t).Ne()}He(t){let e=this.qe.get(t);return e||(e=new al,this.qe.set(t,e)),e}ct(t){let e=this.Ue.get(t);return e||(e=new J(q),this.Ue=this.Ue.insert(t,e)),e}_t(t){let e=this.$e.get(t);return e||(e=new J(q),this.$e=this.$e.insert(t,e)),e}Je(t){const e=this.Xe(t)!==null;return e||b("WatchChangeAggregator","Detected inactive target",t),e}Xe(t){const e=this.qe.get(t);return e&&e.De?null:this.ke.lt(t)}Ye(t){this.qe.set(t,new al),this.ke.getRemoteKeysForTarget(t).forEach((e=>{this.ze(t,e,null)}))}ut(t,e){return this.ke.getRemoteKeysForTarget(t).has(e)}}function cs(){return new et(M.comparator)}function ul(){return new et(M.comparator)}const Sm={asc:"ASCENDING",desc:"DESCENDING"},bm={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Cm={and:"AND",or:"OR"};class xm{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ho(r,t){return r.useProto3Json||Xs(t)?t:{value:t}}function An(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function oh(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function Dm(r,t){return An(r,t.toTimestamp())}function bt(r){return L(!!r),U.fromTimestamp((function(e){const n=Jt(e);return new it(n.seconds,n.nanos)})(r))}function zo(r,t){return fo(r,t).canonicalString()}function fo(r,t){const e=(function(s){return new Y(["projects",s.projectId,"databases",s.database])})(r).child("documents");return t===void 0?e:e.child(t)}function ah(r){const t=Y.fromString(r);return L(ph(t)),t}function Fs(r,t){return zo(r.databaseId,t.path)}function Fe(r,t){const e=ah(t);if(e.get(1)!==r.databaseId.projectId)throw new x(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new x(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new M(ch(e))}function uh(r,t){return zo(r.databaseId,t)}function lh(r){const t=ah(r);return t.length===4?Y.emptyPath():ch(t)}function mo(r){return new Y(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function ch(r){return L(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function ll(r,t,e){return{name:Fs(r,t),fields:e.value.mapValue.fields}}function km(r,t,e){const n=Fe(r,t.name),s=bt(t.updateTime),i=t.createTime?bt(t.createTime):U.min(),a=new Rt({mapValue:{fields:t.fields}}),u=at.newFoundDocument(n,s,i,a);return e&&u.setHasCommittedMutations(),e?u.setHasCommittedMutations():u}function Nm(r,t){let e;if("targetChange"in t){t.targetChange;const n=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:O()})(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=(function(d,m){return d.useProto3Json?(L(m===void 0||typeof m=="string"),lt.fromBase64String(m||"")):(L(m===void 0||m instanceof Buffer||m instanceof Uint8Array),lt.fromUint8Array(m||new Uint8Array))})(r,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&(function(d){const m=d.code===void 0?S.UNKNOWN:rh(d.code);return new x(m,d.message||"")})(a);e=new ih(n,s,i,u||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const s=Fe(r,n.document.name),i=bt(n.document.updateTime),a=n.document.createTime?bt(n.document.createTime):U.min(),u=new Rt({mapValue:{fields:n.document.fields}}),c=at.newFoundDocument(s,i,a,u),d=n.targetIds||[],m=n.removedTargetIds||[];e=new ws(d,m,c.key,c)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const s=Fe(r,n.document),i=n.readTime?bt(n.readTime):U.min(),a=at.newNoDocument(s,i),u=n.removedTargetIds||[];e=new ws([],u,a.key,a)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const s=Fe(r,n.document),i=n.removedTargetIds||[];e=new ws([],i,s,null)}else{if(!("filter"in t))return O();{t.filter;const n=t.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,a=new Am(s,i),u=n.targetId;e=new sh(u,a)}}return e}function Ls(r,t){let e;if(t instanceof Dn)e={update:ll(r,t.key,t.value)};else if(t instanceof Mr)e={delete:Fs(r,t.key)};else if(t instanceof ee)e={update:ll(r,t.key,t.data),updateMask:Bm(t.fieldMask)};else{if(!(t instanceof nh))return O();e={verify:Fs(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((n=>(function(i,a){const u=a.transform;if(u instanceof wn)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof qe)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof je)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Sr)return{fieldPath:a.field.canonicalString(),increment:u.Ie};throw O()})(0,n)))),t.precondition.isNone||(e.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:Dm(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:O()})(r,t.precondition)),e}function go(r,t){const e=t.currentDocument?(function(i){return i.updateTime!==void 0?ht.updateTime(bt(i.updateTime)):i.exists!==void 0?ht.exists(i.exists):ht.none()})(t.currentDocument):ht.none(),n=t.updateTransforms?t.updateTransforms.map((s=>(function(a,u){let c=null;if("setToServerValue"in u)L(u.setToServerValue==="REQUEST_TIME"),c=new wn;else if("appendMissingElements"in u){const m=u.appendMissingElements.values||[];c=new qe(m)}else if("removeAllFromArray"in u){const m=u.removeAllFromArray.values||[];c=new je(m)}else"increment"in u?c=new Sr(a,u.increment):O();const d=st.fromServerFormat(u.fieldPath);return new ii(d,c)})(r,s))):[];if(t.update){t.update.name;const s=Fe(r,t.update.name),i=new Rt({mapValue:{fields:t.update.fields}});if(t.updateMask){const a=(function(c){const d=c.fieldPaths||[];return new xt(d.map((m=>st.fromServerFormat(m))))})(t.updateMask);return new ee(s,i,a,e,n)}return new Dn(s,i,e,n)}if(t.delete){const s=Fe(r,t.delete);return new Mr(s,e)}if(t.verify){const s=Fe(r,t.verify);return new nh(s,e)}return O()}function Mm(r,t){return r&&r.length>0?(L(t!==void 0),r.map((e=>(function(s,i){let a=s.updateTime?bt(s.updateTime):bt(i);return a.isEqual(U.min())&&(a=bt(i)),new Em(a,s.transformResults||[])})(e,t)))):[]}function hh(r,t){return{documents:[uh(r,t.path)]}}function dh(r,t){const e={structuredQuery:{}},n=t.path;let s;t.collectionGroup!==null?(s=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=uh(r,s);const i=(function(d){if(d.length!==0)return gh(X.create(d,"and"))})(t.filters);i&&(e.structuredQuery.where=i);const a=(function(d){if(d.length!==0)return d.map((m=>(function(T){return{field:un(T.field),direction:Fm(T.dir)}})(m)))})(t.orderBy);a&&(e.structuredQuery.orderBy=a);const u=ho(r,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(t.endAt)),{ht:e,parent:s}}function fh(r){let t=lh(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let s=null;if(n>0){L(n===1);const m=e.from[0];m.allDescendants?s=m.collectionId:t=t.child(m.collectionId)}let i=[];e.where&&(i=(function(g){const T=mh(g);return T instanceof X&&Oo(T)?T.getFilters():[T]})(e.where));let a=[];e.orderBy&&(a=(function(g){return g.map((T=>(function(C){return new Pr(ln(C.field),(function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(C.direction))})(T)))})(e.orderBy));let u=null;e.limit&&(u=(function(g){let T;return T=typeof g=="object"?g.value:g,Xs(T)?null:T})(e.limit));let c=null;e.startAt&&(c=(function(g){const T=!!g.before,P=g.values||[];return new En(P,T)})(e.startAt));let d=null;return e.endAt&&(d=(function(g){const T=!g.before,P=g.values||[];return new En(P,T)})(e.endAt)),qc(t,s,a,i,u,"F",c,d)}function Om(r,t){const e=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return O()}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function mh(r){return r.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ln(e.unaryFilter.field);return G.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=ln(e.unaryFilter.field);return G.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ln(e.unaryFilter.field);return G.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=ln(e.unaryFilter.field);return G.create(a,"!=",{nullValue:"NULL_VALUE"});default:return O()}})(r):r.fieldFilter!==void 0?(function(e){return G.create(ln(e.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}})(e.fieldFilter.op),e.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(e){return X.create(e.compositeFilter.filters.map((n=>mh(n))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return O()}})(e.compositeFilter.op))})(r):O()}function Fm(r){return Sm[r]}function Lm(r){return bm[r]}function Um(r){return Cm[r]}function un(r){return{fieldPath:r.canonicalString()}}function ln(r){return st.fromServerFormat(r.fieldPath)}function gh(r){return r instanceof G?(function(e){if(e.op==="=="){if(Qu(e.value))return{unaryFilter:{field:un(e.field),op:"IS_NAN"}};if($u(e.value))return{unaryFilter:{field:un(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Qu(e.value))return{unaryFilter:{field:un(e.field),op:"IS_NOT_NAN"}};if($u(e.value))return{unaryFilter:{field:un(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:un(e.field),op:Lm(e.op),value:e.value}}})(r):r instanceof X?(function(e){const n=e.getFilters().map((s=>gh(s)));return n.length===1?n[0]:{compositeFilter:{op:Um(e.op),filters:n}}})(r):O()}function Bm(r){const t=[];return r.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function ph(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class Xt{constructor(t,e,n,s,i=U.min(),a=U.min(),u=lt.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=c}withSequenceNumber(t){return new Xt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Xt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class _h{constructor(t){this.Tt=t}}function qm(r,t){let e;if(t.document)e=km(r.Tt,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const n=M.fromSegments(t.noDocument.path),s=Ke(t.noDocument.readTime);e=at.newNoDocument(n,s),t.hasCommittedMutations&&e.setHasCommittedMutations()}else{if(!t.unknownDocument)return O();{const n=M.fromSegments(t.unknownDocument.path),s=Ke(t.unknownDocument.version);e=at.newUnknownDocument(n,s)}}return t.readTime&&e.setReadTime((function(s){const i=new it(s[0],s[1]);return U.fromTimestamp(i)})(t.readTime)),e}function cl(r,t){const e=t.key,n={prefixPath:e.getCollectionPath().popLast().toArray(),collectionGroup:e.collectionGroup,documentId:e.path.lastSegment(),readTime:Us(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())n.document=(function(i,a){return{name:Fs(i,a.key),fields:a.data.value.mapValue.fields,updateTime:An(i,a.version.toTimestamp()),createTime:An(i,a.createTime.toTimestamp())}})(r.Tt,t);else if(t.isNoDocument())n.noDocument={path:e.path.toArray(),readTime:ze(t.version)};else{if(!t.isUnknownDocument())return O();n.unknownDocument={path:e.path.toArray(),version:ze(t.version)}}return n}function Us(r){const t=r.toTimestamp();return[t.seconds,t.nanoseconds]}function ze(r){const t=r.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function Ke(r){const t=new it(r.seconds,r.nanoseconds);return U.fromTimestamp(t)}function xe(r,t){const e=(t.baseMutations||[]).map((i=>go(r.Tt,i)));for(let i=0;i<t.mutations.length-1;++i){const a=t.mutations[i];if(i+1<t.mutations.length&&t.mutations[i+1].transform!==void 0){const u=t.mutations[i+1];a.updateTransforms=u.transform.fieldTransforms,t.mutations.splice(i+1,1),++i}}const n=t.mutations.map((i=>go(r.Tt,i))),s=it.fromMillis(t.localWriteTimeMs);return new Uo(t.batchId,s,e,n)}function lr(r){const t=Ke(r.readTime),e=r.lastLimboFreeSnapshotVersion!==void 0?Ke(r.lastLimboFreeSnapshotVersion):U.min();let n;return n=(function(i){return i.documents!==void 0})(r.query)?(function(i){return L(i.documents.length===1),Mt(kr(lh(i.documents[0])))})(r.query):(function(i){return Mt(fh(i))})(r.query),new Xt(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,t,e,lt.fromBase64String(r.resumeToken))}function yh(r,t){const e=ze(t.snapshotVersion),n=ze(t.lastLimboFreeSnapshotVersion);let s;s=Ns(t.target)?hh(r.Tt,t.target):dh(r.Tt,t.target).ht;const i=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:Be(t.target),readTime:e,resumeToken:i,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:s}}function Th(r){const t=fh({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Os(t,t.limit,"L"):t}function zi(r,t){return new qo(t.largestBatchId,go(r.Tt,t.overlayMutation))}function hl(r,t){const e=t.path.lastSegment();return[r,Vt(t.path.popLast()),e]}function dl(r,t,e,n){return{indexId:r,uid:t,sequenceNumber:e,readTime:ze(n.readTime),documentKey:Vt(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
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
 */class jm{getBundleMetadata(t,e){return fl(t).get(e).next((n=>{if(n)return(function(i){return{id:i.bundleId,createTime:Ke(i.createTime),version:i.version}})(n)}))}saveBundleMetadata(t,e){return fl(t).put((function(s){return{bundleId:s.id,createTime:ze(bt(s.createTime)),version:s.version}})(e))}getNamedQuery(t,e){return ml(t).get(e).next((n=>{if(n)return(function(i){return{name:i.name,query:Th(i.bundledQuery),readTime:Ke(i.readTime)}})(n)}))}saveNamedQuery(t,e){return ml(t).put((function(s){return{name:s.name,readTime:ze(bt(s.readTime)),bundledQuery:s.bundledQuery}})(e))}}function fl(r){return dt(r,Js)}function ml(r){return dt(r,Zs)}/**
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
 */class ai{constructor(t,e){this.serializer=t,this.userId=e}static It(t,e){const n=e.uid||"";return new ai(t,n)}getOverlay(t,e){return er(t).get(hl(this.userId,e)).next((n=>n?zi(this.serializer,n):null))}getOverlays(t,e){const n=Kt();return w.forEach(e,(s=>this.getOverlay(t,s).next((i=>{i!==null&&n.set(s,i)})))).next((()=>n))}saveOverlays(t,e,n){const s=[];return n.forEach(((i,a)=>{const u=new qo(e,a);s.push(this.Et(t,u))})),w.waitFor(s)}removeOverlaysForBatchId(t,e,n){const s=new Set;e.forEach((a=>s.add(Vt(a.getCollectionPath()))));const i=[];return s.forEach((a=>{const u=IDBKeyRange.bound([this.userId,a,n],[this.userId,a,n+1],!1,!0);i.push(er(t).J(ro,u))})),w.waitFor(i)}getOverlaysForCollection(t,e,n){const s=Kt(),i=Vt(e),a=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return er(t).G(ro,a).next((u=>{for(const c of u){const d=zi(this.serializer,c);s.set(d.getKey(),d)}return s}))}getOverlaysForCollectionGroup(t,e,n,s){const i=Kt();let a;const u=IDBKeyRange.bound([this.userId,e,n],[this.userId,e,Number.POSITIVE_INFINITY],!0);return er(t).Z({index:Ic,range:u},((c,d,m)=>{const g=zi(this.serializer,d);i.size()<s||g.largestBatchId===a?(i.set(g.getKey(),g),a=g.largestBatchId):m.done()})).next((()=>i))}Et(t,e){return er(t).put((function(s,i,a){const[u,c,d]=hl(i,a.mutation.key);return{userId:i,collectionPath:c,documentId:d,collectionGroup:a.mutation.key.getCollectionGroup(),largestBatchId:a.largestBatchId,overlayMutation:Ls(s.Tt,a.mutation)}})(this.serializer,this.userId,e))}}function er(r){return dt(r,ti)}/**
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
 */class zm{dt(t){return dt(t,xo)}getSessionToken(t){return this.dt(t).get("sessionToken").next((e=>{const n=e?.value;return n?lt.fromUint8Array(n):lt.EMPTY_BYTE_STRING}))}setSessionToken(t,e){return this.dt(t).put({name:"sessionToken",value:e.toUint8Array()})}}/**
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
 */class De{constructor(){}At(t,e){this.Rt(t,e),e.Vt()}Rt(t,e){if("nullValue"in t)this.ft(e,5);else if("booleanValue"in t)this.ft(e,10),e.gt(t.booleanValue?1:0);else if("integerValue"in t)this.ft(e,15),e.gt(rt(t.integerValue));else if("doubleValue"in t){const n=rt(t.doubleValue);isNaN(n)?this.ft(e,13):(this.ft(e,15),Tr(n)?e.gt(0):e.gt(n))}else if("timestampValue"in t){let n=t.timestampValue;this.ft(e,20),typeof n=="string"&&(n=Jt(n)),e.yt(`${n.seconds||""}`),e.gt(n.nanos||0)}else if("stringValue"in t)this.wt(t.stringValue,e),this.St(e);else if("bytesValue"in t)this.ft(e,30),e.bt(Zt(t.bytesValue)),this.St(e);else if("referenceValue"in t)this.Dt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ft(e,45),e.gt(n.latitude||0),e.gt(n.longitude||0)}else"mapValue"in t?xc(t)?this.ft(e,Number.MAX_SAFE_INTEGER):ni(t)?this.vt(t.mapValue,e):(this.Ct(t.mapValue,e),this.St(e)):"arrayValue"in t?(this.Ft(t.arrayValue,e),this.St(e)):O()}wt(t,e){this.ft(e,25),this.Mt(t,e)}Mt(t,e){e.yt(t)}Ct(t,e){const n=t.fields||{};this.ft(e,55);for(const s of Object.keys(n))this.wt(s,e),this.Rt(n[s],e)}vt(t,e){var n,s;const i=t.fields||{};this.ft(e,53);const a=Tn,u=((s=(n=i[a].arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.length)||0;this.ft(e,15),e.gt(rt(u)),this.wt(a,e),this.Rt(i[a],e)}Ft(t,e){const n=t.values||[];this.ft(e,50);for(const s of n)this.Rt(s,e)}Dt(t,e){this.ft(e,37),M.fromName(t).path.forEach((n=>{this.ft(e,60),this.Mt(n,e)}))}ft(t,e){t.gt(e)}St(t){t.gt(2)}}De.xt=new De;/**
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
 */const en=255;function Km(r){if(r===0)return 8;let t=0;return r>>4||(t+=4,r<<=4),r>>6||(t+=2,r<<=2),r>>7||(t+=1),t}function gl(r){const t=64-(function(n){let s=0;for(let i=0;i<8;++i){const a=Km(255&n[i]);if(s+=a,a!==8)break}return s})(r);return Math.ceil(t/8)}class Gm{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ot(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.Nt(n.value),n=e.next();this.Bt()}Lt(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.kt(n.value),n=e.next();this.qt()}Qt(t){for(const e of t){const n=e.charCodeAt(0);if(n<128)this.Nt(n);else if(n<2048)this.Nt(960|n>>>6),this.Nt(128|63&n);else if(e<"\uD800"||"\uDBFF"<e)this.Nt(480|n>>>12),this.Nt(128|63&n>>>6),this.Nt(128|63&n);else{const s=e.codePointAt(0);this.Nt(240|s>>>18),this.Nt(128|63&s>>>12),this.Nt(128|63&s>>>6),this.Nt(128|63&s)}}this.Bt()}$t(t){for(const e of t){const n=e.charCodeAt(0);if(n<128)this.kt(n);else if(n<2048)this.kt(960|n>>>6),this.kt(128|63&n);else if(e<"\uD800"||"\uDBFF"<e)this.kt(480|n>>>12),this.kt(128|63&n>>>6),this.kt(128|63&n);else{const s=e.codePointAt(0);this.kt(240|s>>>18),this.kt(128|63&s>>>12),this.kt(128|63&s>>>6),this.kt(128|63&s)}}this.qt()}Ut(t){const e=this.Kt(t),n=gl(e);this.Wt(1+n),this.buffer[this.position++]=255&n;for(let s=e.length-n;s<e.length;++s)this.buffer[this.position++]=255&e[s]}Gt(t){const e=this.Kt(t),n=gl(e);this.Wt(1+n),this.buffer[this.position++]=~(255&n);for(let s=e.length-n;s<e.length;++s)this.buffer[this.position++]=~(255&e[s])}zt(){this.jt(en),this.jt(255)}Ht(){this.Jt(en),this.Jt(255)}reset(){this.position=0}seed(t){this.Wt(t.length),this.buffer.set(t,this.position),this.position+=t.length}Yt(){return this.buffer.slice(0,this.position)}Kt(t){const e=(function(i){const a=new DataView(new ArrayBuffer(8));return a.setFloat64(0,i,!1),new Uint8Array(a.buffer)})(t),n=!!(128&e[0]);e[0]^=n?255:128;for(let s=1;s<e.length;++s)e[s]^=n?255:0;return e}Nt(t){const e=255&t;e===0?(this.jt(0),this.jt(255)):e===en?(this.jt(en),this.jt(0)):this.jt(e)}kt(t){const e=255&t;e===0?(this.Jt(0),this.Jt(255)):e===en?(this.Jt(en),this.Jt(0)):this.Jt(t)}Bt(){this.jt(0),this.jt(1)}qt(){this.Jt(0),this.Jt(1)}jt(t){this.Wt(1),this.buffer[this.position++]=t}Jt(t){this.Wt(1),this.buffer[this.position++]=~t}Wt(t){const e=t+this.position;if(e<=this.buffer.length)return;let n=2*this.buffer.length;n<e&&(n=e);const s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class $m{constructor(t){this.Zt=t}bt(t){this.Zt.Ot(t)}yt(t){this.Zt.Qt(t)}gt(t){this.Zt.Ut(t)}Vt(){this.Zt.zt()}}class Qm{constructor(t){this.Zt=t}bt(t){this.Zt.Lt(t)}yt(t){this.Zt.$t(t)}gt(t){this.Zt.Gt(t)}Vt(){this.Zt.Ht()}}class nr{constructor(){this.Zt=new Gm,this.Xt=new $m(this.Zt),this.en=new Qm(this.Zt)}seed(t){this.Zt.seed(t)}tn(t){return t===0?this.Xt:this.en}Yt(){return this.Zt.Yt()}reset(){this.Zt.reset()}}/**
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
 */class ke{constructor(t,e,n,s){this.indexId=t,this.documentKey=e,this.arrayValue=n,this.directionalValue=s}nn(){const t=this.directionalValue.length,e=t===0||this.directionalValue[t-1]===255?t+1:t,n=new Uint8Array(e);return n.set(this.directionalValue,0),e!==t?n.set([0],this.directionalValue.length):++n[n.length-1],new ke(this.indexId,this.documentKey,this.arrayValue,n)}}function ae(r,t){let e=r.indexId-t.indexId;return e!==0?e:(e=pl(r.arrayValue,t.arrayValue),e!==0?e:(e=pl(r.directionalValue,t.directionalValue),e!==0?e:M.comparator(r.documentKey,t.documentKey)))}function pl(r,t){for(let e=0;e<r.length&&e<t.length;++e){const n=r[e]-t[e];if(n!==0)return n}return r.length-t.length}/**
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
 */class _l{constructor(t){this.rn=new J(((e,n)=>st.comparator(e.field,n.field))),this.collectionId=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment(),this.sn=t.orderBy,this._n=[];for(const e of t.filters){const n=e;n.isInequality()?this.rn=this.rn.add(n):this._n.push(n)}}get an(){return this.rn.size>1}un(t){if(L(t.collectionGroup===this.collectionId),this.an)return!1;const e=to(t);if(e!==void 0&&!this.cn(e))return!1;const n=Se(t);let s=new Set,i=0,a=0;for(;i<n.length&&this.cn(n[i]);++i)s=s.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.rn.size>0){const u=this.rn.getIterator().getNext();if(!s.has(u.field.canonicalString())){const c=n[i];if(!this.ln(u,c)||!this.hn(this.sn[a++],c))return!1}++i}for(;i<n.length;++i){const u=n[i];if(a>=this.sn.length||!this.hn(this.sn[a++],u))return!1}return!0}Pn(){if(this.an)return null;let t=new J(st.comparator);const e=[];for(const n of this._n)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")e.push(new ps(n.field,2));else{if(t.has(n.field))continue;t=t.add(n.field),e.push(new ps(n.field,0))}for(const n of this.sn)n.field.isKeyField()||t.has(n.field)||(t=t.add(n.field),e.push(new ps(n.field,n.dir==="asc"?0:1)));return new Ps(Ps.UNKNOWN_ID,this.collectionId,e,yr.empty())}cn(t){for(const e of this._n)if(this.ln(e,t))return!0;return!1}ln(t,e){if(t===void 0||!t.field.isEqual(e.fieldPath))return!1;const n=t.op==="array-contains"||t.op==="array-contains-any";return e.kind===2===n}hn(t,e){return!!t.field.isEqual(e.fieldPath)&&(e.kind===0&&t.dir==="asc"||e.kind===1&&t.dir==="desc")}}/**
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
 */function Ih(r){var t,e;if(L(r instanceof G||r instanceof X),r instanceof G){if(r instanceof Bc){const s=((e=(t=r.value.arrayValue)===null||t===void 0?void 0:t.values)===null||e===void 0?void 0:e.map((i=>G.create(r.field,"==",i))))||[];return X.create(s,"or")}return r}const n=r.filters.map((s=>Ih(s)));return X.create(n,r.op)}function Wm(r){if(r.getFilters().length===0)return[];const t=yo(Ih(r));return L(Eh(t)),po(t)||_o(t)?[t]:t.getFilters()}function po(r){return r instanceof G}function _o(r){return r instanceof X&&Oo(r)}function Eh(r){return po(r)||_o(r)||(function(e){if(e instanceof X&&ao(e)){for(const n of e.getFilters())if(!po(n)&&!_o(n))return!1;return!0}return!1})(r)}function yo(r){if(L(r instanceof G||r instanceof X),r instanceof G)return r;if(r.filters.length===1)return yo(r.filters[0]);const t=r.filters.map((n=>yo(n)));let e=X.create(t,r.op);return e=Bs(e),Eh(e)?e:(L(e instanceof X),L(vn(e)),L(e.filters.length>1),e.filters.reduce(((n,s)=>Ko(n,s))))}function Ko(r,t){let e;return L(r instanceof G||r instanceof X),L(t instanceof G||t instanceof X),e=r instanceof G?t instanceof G?(function(s,i){return X.create([s,i],"and")})(r,t):yl(r,t):t instanceof G?yl(t,r):(function(s,i){if(L(s.filters.length>0&&i.filters.length>0),vn(s)&&vn(i))return Fc(s,i.getFilters());const a=ao(s)?s:i,u=ao(s)?i:s,c=a.filters.map((d=>Ko(d,u)));return X.create(c,"or")})(r,t),Bs(e)}function yl(r,t){if(vn(t))return Fc(t,r.getFilters());{const e=t.filters.map((n=>Ko(r,n)));return X.create(e,"or")}}function Bs(r){if(L(r instanceof G||r instanceof X),r instanceof G)return r;const t=r.getFilters();if(t.length===1)return Bs(t[0]);if(Mc(r))return r;const e=t.map((s=>Bs(s))),n=[];return e.forEach((s=>{s instanceof G?n.push(s):s instanceof X&&(s.op===r.op?n.push(...s.filters):n.push(s))})),n.length===1?n[0]:X.create(n,r.op)}/**
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
 */class Hm{constructor(){this.Tn=new Go}addToCollectionParentIndex(t,e){return this.Tn.add(e),w.resolve()}getCollectionParents(t,e){return w.resolve(this.Tn.getEntries(e))}addFieldIndex(t,e){return w.resolve()}deleteFieldIndex(t,e){return w.resolve()}deleteAllFieldIndexes(t){return w.resolve()}createTargetIndexes(t,e){return w.resolve()}getDocumentsMatchingTarget(t,e){return w.resolve(null)}getIndexType(t,e){return w.resolve(0)}getFieldIndexes(t,e){return w.resolve([])}getNextCollectionGroupToUpdate(t){return w.resolve(null)}getMinOffset(t,e){return w.resolve(Ot.min())}getMinOffsetFromCollectionGroup(t,e){return w.resolve(Ot.min())}updateCollectionGroup(t,e,n){return w.resolve()}updateIndexEntries(t,e){return w.resolve()}}class Go{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new J(Y.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new J(Y.comparator)).toArray()}}/**
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
 */const Tl="IndexedDbIndexManager",hs=new Uint8Array(0);class Ym{constructor(t,e){this.databaseId=e,this.In=new Go,this.En=new te((n=>Be(n)),((n,s)=>Dr(n,s))),this.uid=t.uid||""}addToCollectionParentIndex(t,e){if(!this.In.has(e)){const n=e.lastSegment(),s=e.popLast();t.addOnCommittedListener((()=>{this.In.add(e)}));const i={collectionId:n,parent:Vt(s)};return Il(t).put(i)}return w.resolve()}getCollectionParents(t,e){const n=[],s=IDBKeyRange.bound([e,""],[uc(e),""],!1,!0);return Il(t).G(s).next((i=>{for(const a of i){if(a.collectionId!==e)break;n.push(zt(a.parent))}return n}))}addFieldIndex(t,e){const n=rr(t),s=(function(u){return{indexId:u.indexId,collectionGroup:u.collectionGroup,fields:u.fields.map((c=>[c.fieldPath.canonicalString(),c.kind]))}})(e);delete s.indexId;const i=n.add(s);if(e.indexState){const a=rn(t);return i.next((u=>{a.put(dl(u,this.uid,e.indexState.sequenceNumber,e.indexState.offset))}))}return i.next()}deleteFieldIndex(t,e){const n=rr(t),s=rn(t),i=nn(t);return n.delete(e.indexId).next((()=>s.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0)))).next((()=>i.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0))))}deleteAllFieldIndexes(t){const e=rr(t),n=nn(t),s=rn(t);return e.J().next((()=>n.J())).next((()=>s.J()))}createTargetIndexes(t,e){return w.forEach(this.dn(e),(n=>this.getIndexType(t,n).next((s=>{if(s===0||s===1){const i=new _l(n).Pn();if(i!=null)return this.addFieldIndex(t,i)}}))))}getDocumentsMatchingTarget(t,e){const n=nn(t);let s=!0;const i=new Map;return w.forEach(this.dn(e),(a=>this.An(t,a).next((u=>{s&&(s=!!u),i.set(a,u)})))).next((()=>{if(s){let a=K();const u=[];return w.forEach(i,((c,d)=>{b(Tl,`Using index ${(function(B){return`id=${B.indexId}|cg=${B.collectionGroup}|f=${B.fields.map((H=>`${H.fieldPath}:${H.kind}`)).join(",")}`})(c)} to execute ${Be(e)}`);const m=(function(B,H){const tt=to(H);if(tt===void 0)return null;for(const Q of Ms(B,tt.fieldPath))switch(Q.op){case"array-contains-any":return Q.value.arrayValue.values||[];case"array-contains":return[Q.value]}return null})(d,c),g=(function(B,H){const tt=new Map;for(const Q of Se(H))for(const I of Ms(B,Q.fieldPath))switch(I.op){case"==":case"in":tt.set(Q.fieldPath.canonicalString(),I.value);break;case"not-in":case"!=":return tt.set(Q.fieldPath.canonicalString(),I.value),Array.from(tt.values())}return null})(d,c),T=(function(B,H){const tt=[];let Q=!0;for(const I of Se(H)){const p=I.kind===0?Ju(B,I.fieldPath,B.startAt):Zu(B,I.fieldPath,B.startAt);tt.push(p.value),Q&&(Q=p.inclusive)}return new En(tt,Q)})(d,c),P=(function(B,H){const tt=[];let Q=!0;for(const I of Se(H)){const p=I.kind===0?Zu(B,I.fieldPath,B.endAt):Ju(B,I.fieldPath,B.endAt);tt.push(p.value),Q&&(Q=p.inclusive)}return new En(tt,Q)})(d,c),C=this.Rn(c,d,T),N=this.Rn(c,d,P),D=this.Vn(c,d,g),z=this.mn(c.indexId,m,C,T.inclusive,N,P.inclusive,D);return w.forEach(z,(j=>n.H(j,e.limit).next((B=>{B.forEach((H=>{const tt=M.fromSegments(H.documentKey);a.has(tt)||(a=a.add(tt),u.push(tt))}))}))))})).next((()=>u))}return w.resolve(null)}))}dn(t){let e=this.En.get(t);return e||(t.filters.length===0?e=[t]:e=Wm(X.create(t.filters,"and")).map((n=>lo(t.path,t.collectionGroup,t.orderBy,n.getFilters(),t.limit,t.startAt,t.endAt))),this.En.set(t,e),e)}mn(t,e,n,s,i,a,u){const c=(e!=null?e.length:1)*Math.max(n.length,i.length),d=c/(e!=null?e.length:1),m=[];for(let g=0;g<c;++g){const T=e?this.fn(e[g/d]):hs,P=this.gn(t,T,n[g%d],s),C=this.pn(t,T,i[g%d],a),N=u.map((D=>this.gn(t,T,D,!0)));m.push(...this.createRange(P,C,N))}return m}gn(t,e,n,s){const i=new ke(t,M.empty(),e,n);return s?i:i.nn()}pn(t,e,n,s){const i=new ke(t,M.empty(),e,n);return s?i.nn():i}An(t,e){const n=new _l(e),s=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment();return this.getFieldIndexes(t,s).next((i=>{let a=null;for(const u of i)n.un(u)&&(!a||u.fields.length>a.fields.length)&&(a=u);return a}))}getIndexType(t,e){let n=2;const s=this.dn(e);return w.forEach(s,(i=>this.An(t,i).next((a=>{a?n!==0&&a.fields.length<(function(c){let d=new J(st.comparator),m=!1;for(const g of c.filters)for(const T of g.getFlattenedFilters())T.field.isKeyField()||(T.op==="array-contains"||T.op==="array-contains-any"?m=!0:d=d.add(T.field));for(const g of c.orderBy)g.field.isKeyField()||(d=d.add(g.field));return d.size+(m?1:0)})(i)&&(n=1):n=0})))).next((()=>(function(a){return a.limit!==null})(e)&&s.length>1&&n===2?1:n))}yn(t,e){const n=new nr;for(const s of Se(t)){const i=e.data.field(s.fieldPath);if(i==null)return null;const a=n.tn(s.kind);De.xt.At(i,a)}return n.Yt()}fn(t){const e=new nr;return De.xt.At(t,e.tn(0)),e.Yt()}wn(t,e){const n=new nr;return De.xt.At(Rr(this.databaseId,e),n.tn((function(i){const a=Se(i);return a.length===0?0:a[a.length-1].kind})(t))),n.Yt()}Vn(t,e,n){if(n===null)return[];let s=[];s.push(new nr);let i=0;for(const a of Se(t)){const u=n[i++];for(const c of s)if(this.Sn(e,a.fieldPath)&&Vr(u))s=this.bn(s,a,u);else{const d=c.tn(a.kind);De.xt.At(u,d)}}return this.Dn(s)}Rn(t,e,n){return this.Vn(t,e,n.position)}Dn(t){const e=[];for(let n=0;n<t.length;++n)e[n]=t[n].Yt();return e}bn(t,e,n){const s=[...t],i=[];for(const a of n.arrayValue.values||[])for(const u of s){const c=new nr;c.seed(u.Yt()),De.xt.At(a,c.tn(e.kind)),i.push(c)}return i}Sn(t,e){return!!t.filters.find((n=>n instanceof G&&n.field.isEqual(e)&&(n.op==="in"||n.op==="not-in")))}getFieldIndexes(t,e){const n=rr(t),s=rn(t);return(e?n.G(no,IDBKeyRange.bound(e,e)):n.G()).next((i=>{const a=[];return w.forEach(i,(u=>s.get([u.indexId,this.uid]).next((c=>{a.push((function(m,g){const T=g?new yr(g.sequenceNumber,new Ot(Ke(g.readTime),new M(zt(g.documentKey)),g.largestBatchId)):yr.empty(),P=m.fields.map((([C,N])=>new ps(st.fromServerFormat(C),N)));return new Ps(m.indexId,m.collectionGroup,P,T)})(u,c))})))).next((()=>a))}))}getNextCollectionGroupToUpdate(t){return this.getFieldIndexes(t).next((e=>e.length===0?null:(e.sort(((n,s)=>{const i=n.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:q(n.collectionGroup,s.collectionGroup)})),e[0].collectionGroup)))}updateCollectionGroup(t,e,n){const s=rr(t),i=rn(t);return this.vn(t).next((a=>s.G(no,IDBKeyRange.bound(e,e)).next((u=>w.forEach(u,(c=>i.put(dl(c.indexId,this.uid,a,n))))))))}updateIndexEntries(t,e){const n=new Map;return w.forEach(e,((s,i)=>{const a=n.get(s.collectionGroup);return(a?w.resolve(a):this.getFieldIndexes(t,s.collectionGroup)).next((u=>(n.set(s.collectionGroup,u),w.forEach(u,(c=>this.Cn(t,s,c).next((d=>{const m=this.Fn(i,c);return d.isEqual(m)?w.resolve():this.Mn(t,i,c,d,m)})))))))}))}xn(t,e,n,s){return nn(t).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.wn(n,e.key),documentKey:e.key.path.toArray()})}On(t,e,n,s){return nn(t).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.wn(n,e.key),e.key.path.toArray()])}Cn(t,e,n){const s=nn(t);let i=new J(ae);return s.Z({index:Tc,range:IDBKeyRange.only([n.indexId,this.uid,this.wn(n,e)])},((a,u)=>{i=i.add(new ke(n.indexId,e,u.arrayValue,u.directionalValue))})).next((()=>i))}Fn(t,e){let n=new J(ae);const s=this.yn(e,t);if(s==null)return n;const i=to(e);if(i!=null){const a=t.data.field(i.fieldPath);if(Vr(a))for(const u of a.arrayValue.values||[])n=n.add(new ke(e.indexId,t.key,this.fn(u),s))}else n=n.add(new ke(e.indexId,t.key,hs,s));return n}Mn(t,e,n,s,i){b(Tl,"Updating index entries for document '%s'",e.key);const a=[];return(function(c,d,m,g,T){const P=c.getIterator(),C=d.getIterator();let N=tn(P),D=tn(C);for(;N||D;){let z=!1,j=!1;if(N&&D){const B=m(N,D);B<0?j=!0:B>0&&(z=!0)}else N!=null?j=!0:z=!0;z?(g(D),D=tn(C)):j?(T(N),N=tn(P)):(N=tn(P),D=tn(C))}})(s,i,ae,(u=>{a.push(this.xn(t,e,n,u))}),(u=>{a.push(this.On(t,e,n,u))})),w.waitFor(a)}vn(t){let e=1;return rn(t).Z({index:yc,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((n,s,i)=>{i.done(),e=s.sequenceNumber+1})).next((()=>e))}createRange(t,e,n){n=n.sort(((a,u)=>ae(a,u))).filter(((a,u,c)=>!u||ae(a,c[u-1])!==0));const s=[];s.push(t);for(const a of n){const u=ae(a,t),c=ae(a,e);if(u===0)s[0]=t.nn();else if(u>0&&c<0)s.push(a),s.push(a.nn());else if(c>0)break}s.push(e);const i=[];for(let a=0;a<s.length;a+=2){if(this.Nn(s[a],s[a+1]))return[];const u=[s[a].indexId,this.uid,s[a].arrayValue,s[a].directionalValue,hs,[]],c=[s[a+1].indexId,this.uid,s[a+1].arrayValue,s[a+1].directionalValue,hs,[]];i.push(IDBKeyRange.bound(u,c))}return i}Nn(t,e){return ae(t,e)>0}getMinOffsetFromCollectionGroup(t,e){return this.getFieldIndexes(t,e).next(El)}getMinOffset(t,e){return w.mapArray(this.dn(e),(n=>this.An(t,n).next((s=>s||O())))).next(El)}}function Il(r){return dt(r,vr)}function nn(r){return dt(r,Ds)}function rr(r){return dt(r,Co)}function rn(r){return dt(r,xs)}function El(r){L(r.length!==0);let t=r[0].indexState.offset,e=t.largestBatchId;for(let n=1;n<r.length;n++){const s=r[n].indexState.offset;Po(s,t)<0&&(t=s),e<s.largestBatchId&&(e=s.largestBatchId)}return new Ot(t.readTime,t.documentKey,e)}/**
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
 */const vl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},vh=41943040;class At{static withCacheSize(t){return new At(t,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
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
 */function wh(r,t,e){const n=r.store(Ut),s=r.store(gn),i=[],a=IDBKeyRange.only(e.batchId);let u=0;const c=n.Z({range:a},((m,g,T)=>(u++,T.delete())));i.push(c.next((()=>{L(u===1)})));const d=[];for(const m of e.mutations){const g=gc(t,m.key.path,e.batchId);i.push(s.delete(g)),d.push(m.key)}return w.waitFor(i).next((()=>d))}function qs(r){if(!r)return 0;let t;if(r.document)t=r.document;else if(r.unknownDocument)t=r.unknownDocument;else{if(!r.noDocument)throw O();t=r.noDocument}return JSON.stringify(t).length}/**
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
 */At.DEFAULT_COLLECTION_PERCENTILE=10,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,At.DEFAULT=new At(vh,At.DEFAULT_COLLECTION_PERCENTILE,At.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),At.DISABLED=new At(-1,0,0);class ui{constructor(t,e,n,s){this.userId=t,this.serializer=e,this.indexManager=n,this.referenceDelegate=s,this.Bn={}}static It(t,e,n,s){L(t.uid!=="");const i=t.isAuthenticated()?t.uid:"";return new ui(i,e,n,s)}checkEmpty(t){let e=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return ue(t).Z({index:Ne,range:n},((s,i,a)=>{e=!1,a.done()})).next((()=>e))}addMutationBatch(t,e,n,s){const i=cn(t),a=ue(t);return a.add({}).next((u=>{L(typeof u=="number");const c=new Uo(u,e,n,s),d=(function(P,C,N){const D=N.baseMutations.map((j=>Ls(P.Tt,j))),z=N.mutations.map((j=>Ls(P.Tt,j)));return{userId:C,batchId:N.batchId,localWriteTimeMs:N.localWriteTime.toMillis(),baseMutations:D,mutations:z}})(this.serializer,this.userId,c),m=[];let g=new J(((T,P)=>q(T.canonicalString(),P.canonicalString())));for(const T of s){const P=gc(this.userId,T.key.path,u);g=g.add(T.key.path.popLast()),m.push(a.put(d)),m.push(i.put(P,bf))}return g.forEach((T=>{m.push(this.indexManager.addToCollectionParentIndex(t,T))})),t.addOnCommittedListener((()=>{this.Bn[u]=c.keys()})),w.waitFor(m).next((()=>c))}))}lookupMutationBatch(t,e){return ue(t).get(e).next((n=>n?(L(n.userId===this.userId),xe(this.serializer,n)):null))}Ln(t,e){return this.Bn[e]?w.resolve(this.Bn[e]):this.lookupMutationBatch(t,e).next((n=>{if(n){const s=n.keys();return this.Bn[e]=s,s}return null}))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return ue(t).Z({index:Ne,range:s},((a,u,c)=>{u.userId===this.userId&&(L(u.batchId>=n),i=xe(this.serializer,u)),c.done()})).next((()=>i))}getHighestUnacknowledgedBatchId(t){const e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=Me;return ue(t).Z({index:Ne,range:e,reverse:!0},((s,i,a)=>{n=i.batchId,a.done()})).next((()=>n))}getAllMutationBatches(t){const e=IDBKeyRange.bound([this.userId,Me],[this.userId,Number.POSITIVE_INFINITY]);return ue(t).G(Ne,e).next((n=>n.map((s=>xe(this.serializer,s)))))}getAllMutationBatchesAffectingDocumentKey(t,e){const n=_s(this.userId,e.path),s=IDBKeyRange.lowerBound(n),i=[];return cn(t).Z({range:s},((a,u,c)=>{const[d,m,g]=a,T=zt(m);if(d===this.userId&&e.path.isEqual(T))return ue(t).get(g).next((P=>{if(!P)throw O();L(P.userId===this.userId),i.push(xe(this.serializer,P))}));c.done()})).next((()=>i))}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new J(q);const s=[];return e.forEach((i=>{const a=_s(this.userId,i.path),u=IDBKeyRange.lowerBound(a),c=cn(t).Z({range:u},((d,m,g)=>{const[T,P,C]=d,N=zt(P);T===this.userId&&i.path.isEqual(N)?n=n.add(C):g.done()}));s.push(c)})),w.waitFor(s).next((()=>this.kn(t,n)))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1,i=_s(this.userId,n),a=IDBKeyRange.lowerBound(i);let u=new J(q);return cn(t).Z({range:a},((c,d,m)=>{const[g,T,P]=c,C=zt(T);g===this.userId&&n.isPrefixOf(C)?C.length===s&&(u=u.add(P)):m.done()})).next((()=>this.kn(t,u)))}kn(t,e){const n=[],s=[];return e.forEach((i=>{s.push(ue(t).get(i).next((a=>{if(a===null)throw O();L(a.userId===this.userId),n.push(xe(this.serializer,a))})))})),w.waitFor(s).next((()=>n))}removeMutationBatch(t,e){return wh(t.ue,this.userId,e).next((n=>(t.addOnCommittedListener((()=>{this.qn(e.batchId)})),w.forEach(n,(s=>this.referenceDelegate.markPotentiallyOrphaned(t,s))))))}qn(t){delete this.Bn[t]}performConsistencyCheck(t){return this.checkEmpty(t).next((e=>{if(!e)return w.resolve();const n=IDBKeyRange.lowerBound((function(a){return[a]})(this.userId)),s=[];return cn(t).Z({range:n},((i,a,u)=>{if(i[0]===this.userId){const c=zt(i[1]);s.push(c)}else u.done()})).next((()=>{L(s.length===0)}))}))}containsKey(t,e){return Ah(t,this.userId,e)}Qn(t){return Rh(t).get(this.userId).next((e=>e||{userId:this.userId,lastAcknowledgedBatchId:Me,lastStreamToken:""}))}}function Ah(r,t,e){const n=_s(t,e.path),s=n[1],i=IDBKeyRange.lowerBound(n);let a=!1;return cn(r).Z({range:i,Y:!0},((u,c,d)=>{const[m,g,T]=u;m===t&&g===s&&(a=!0),d.done()})).next((()=>a))}function ue(r){return dt(r,Ut)}function cn(r){return dt(r,gn)}function Rh(r){return dt(r,Ir)}/**
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
 */class Ge{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Un(){return new Ge(0)}static Kn(){return new Ge(-1)}}/**
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
 */class Xm{constructor(t,e){this.referenceDelegate=t,this.serializer=e}allocateTargetId(t){return this.Wn(t).next((e=>{const n=new Ge(e.highestTargetId);return e.highestTargetId=n.next(),this.Gn(t,e).next((()=>e.highestTargetId))}))}getLastRemoteSnapshotVersion(t){return this.Wn(t).next((e=>U.fromTimestamp(new it(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(t){return this.Wn(t).next((e=>e.highestListenSequenceNumber))}setTargetsMetadata(t,e,n){return this.Wn(t).next((s=>(s.highestListenSequenceNumber=e,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),e>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=e),this.Gn(t,s))))}addTargetData(t,e){return this.zn(t,e).next((()=>this.Wn(t).next((n=>(n.targetCount+=1,this.jn(e,n),this.Gn(t,n))))))}updateTargetData(t,e){return this.zn(t,e)}removeTargetData(t,e){return this.removeMatchingKeysForTargetId(t,e.targetId).next((()=>sn(t).delete(e.targetId))).next((()=>this.Wn(t))).next((n=>(L(n.targetCount>0),n.targetCount-=1,this.Gn(t,n))))}removeTargets(t,e,n){let s=0;const i=[];return sn(t).Z(((a,u)=>{const c=lr(u);c.sequenceNumber<=e&&n.get(c.targetId)===null&&(s++,i.push(this.removeTargetData(t,c)))})).next((()=>w.waitFor(i))).next((()=>s))}forEachTarget(t,e){return sn(t).Z(((n,s)=>{const i=lr(s);e(i)}))}Wn(t){return wl(t).get(Cs).next((e=>(L(e!==null),e)))}Gn(t,e){return wl(t).put(Cs,e)}zn(t,e){return sn(t).put(yh(this.serializer,e))}jn(t,e){let n=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,n=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,n=!0),n}getTargetCount(t){return this.Wn(t).next((e=>e.targetCount))}getTargetData(t,e){const n=Be(e),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return sn(t).Z({range:s,index:_c},((a,u,c)=>{const d=lr(u);Dr(e,d.target)&&(i=d,c.done())})).next((()=>i))}addMatchingKeys(t,e,n){const s=[],i=ce(t);return e.forEach((a=>{const u=Vt(a.path);s.push(i.put({targetId:n,path:u})),s.push(this.referenceDelegate.addReference(t,n,a))})),w.waitFor(s)}removeMatchingKeys(t,e,n){const s=ce(t);return w.forEach(e,(i=>{const a=Vt(i.path);return w.waitFor([s.delete([n,a]),this.referenceDelegate.removeReference(t,n,i)])}))}removeMatchingKeysForTargetId(t,e){const n=ce(t),s=IDBKeyRange.bound([e],[e+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(t,e){const n=IDBKeyRange.bound([e],[e+1],!1,!0),s=ce(t);let i=K();return s.Z({range:n,Y:!0},((a,u,c)=>{const d=zt(a[1]),m=new M(d);i=i.add(m)})).next((()=>i))}containsKey(t,e){const n=Vt(e.path),s=IDBKeyRange.bound([n],[uc(n)],!1,!0);let i=0;return ce(t).Z({index:bo,Y:!0,range:s},(([a,u],c,d)=>{a!==0&&(i++,d.done())})).next((()=>i>0))}lt(t,e){return sn(t).get(e).next((n=>n?lr(n):null))}}function sn(r){return dt(r,pn)}function wl(r){return dt(r,Oe)}function ce(r){return dt(r,_n)}/**
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
 */const Al="LruGarbageCollector",Vh=1048576;function Rl([r,t],[e,n]){const s=q(r,e);return s===0?q(t,n):s}class Jm{constructor(t){this.Hn=t,this.buffer=new J(Rl),this.Jn=0}Yn(){return++this.Jn}Zn(t){const e=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();Rl(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Ph{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(t){b(Al,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Ie(e)?b(Al,"Ignoring IndexedDB error during garbage collection: ",e):await Te(e)}await this.er(3e5)}))}}class Zm{constructor(t,e){this.tr=t,this.params=e}calculateTargetCount(t,e){return this.tr.nr(t).next((n=>Math.floor(e/100*n)))}nthSequenceNumber(t,e){if(e===0)return w.resolve(Ct.ae);const n=new Jm(e);return this.tr.forEachTarget(t,(s=>n.Zn(s.sequenceNumber))).next((()=>this.tr.rr(t,(s=>n.Zn(s))))).next((()=>n.maxValue))}removeTargets(t,e,n){return this.tr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.tr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(b("LruGarbageCollector","Garbage collection skipped; disabled"),w.resolve(vl)):this.getCacheSize(t).next((n=>n<this.params.cacheSizeCollectionThreshold?(b("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),vl):this.ir(t,e)))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,e){let n,s,i,a,u,c,d;const m=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((g=>(g>this.params.maximumSequenceNumbersToCollect?(b("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(t,s)))).next((g=>(n=g,u=Date.now(),this.removeTargets(t,n,e)))).next((g=>(i=g,c=Date.now(),this.removeOrphanedDocuments(t,n)))).next((g=>(d=Date.now(),on()<=Yt.DEBUG&&b("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(u-a)+`ms
	Removed ${i} targets in `+(c-u)+`ms
	Removed ${g} documents in `+(d-c)+`ms
Total Duration: ${d-m}ms`),w.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g}))))}}function Sh(r,t){return new Zm(r,t)}/**
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
 */class tg{constructor(t,e){this.db=t,this.garbageCollector=Sh(this,e)}nr(t){const e=this.sr(t);return this.db.getTargetCache().getTargetCount(t).next((n=>e.next((s=>n+s))))}sr(t){let e=0;return this.rr(t,(n=>{e++})).next((()=>e))}forEachTarget(t,e){return this.db.getTargetCache().forEachTarget(t,e)}rr(t,e){return this._r(t,((n,s)=>e(s)))}addReference(t,e,n){return ds(t,n)}removeReference(t,e,n){return ds(t,n)}removeTargets(t,e,n){return this.db.getTargetCache().removeTargets(t,e,n)}markPotentiallyOrphaned(t,e){return ds(t,e)}ar(t,e){return(function(s,i){let a=!1;return Rh(s).X((u=>Ah(s,u,i).next((c=>(c&&(a=!0),w.resolve(!c)))))).next((()=>a))})(t,e)}removeOrphanedDocuments(t,e){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this._r(t,((a,u)=>{if(u<=e){const c=this.ar(t,a).next((d=>{if(!d)return i++,n.getEntry(t,a).next((()=>(n.removeEntry(a,U.min()),ce(t).delete((function(g){return[0,Vt(g.path)]})(a)))))}));s.push(c)}})).next((()=>w.waitFor(s))).next((()=>n.apply(t))).next((()=>i))}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,n)}updateLimboDocument(t,e){return ds(t,e)}_r(t,e){const n=ce(t);let s,i=Ct.ae;return n.Z({index:bo},(([a,u],{path:c,sequenceNumber:d})=>{a===0?(i!==Ct.ae&&e(new M(zt(s)),i),i=d,s=c):i=Ct.ae})).next((()=>{i!==Ct.ae&&e(new M(zt(s)),i)}))}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function ds(r,t){return ce(r).put((function(n,s){return{targetId:0,path:Vt(n.path),sequenceNumber:s}})(t,r.currentSequenceNumber))}/**
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
 */class bh{constructor(){this.changes=new te((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,at.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?w.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class eg{constructor(t){this.serializer=t}setIndexManager(t){this.indexManager=t}addEntry(t,e,n){return Pe(t).put(n)}removeEntry(t,e,n){return Pe(t).delete((function(i,a){const u=i.path.toArray();return[u.slice(0,u.length-2),u[u.length-2],Us(a),u[u.length-1]]})(e,n))}updateMetadata(t,e){return this.getMetadata(t).next((n=>(n.byteSize+=e,this.ur(t,n))))}getEntry(t,e){let n=at.newInvalidDocument(e);return Pe(t).Z({index:ys,range:IDBKeyRange.only(sr(e))},((s,i)=>{n=this.cr(e,i)})).next((()=>n))}lr(t,e){let n={size:0,document:at.newInvalidDocument(e)};return Pe(t).Z({index:ys,range:IDBKeyRange.only(sr(e))},((s,i)=>{n={document:this.cr(e,i),size:qs(i)}})).next((()=>n))}getEntries(t,e){let n=Nt();return this.hr(t,e,((s,i)=>{const a=this.cr(s,i);n=n.insert(s,a)})).next((()=>n))}Pr(t,e){let n=Nt(),s=new et(M.comparator);return this.hr(t,e,((i,a)=>{const u=this.cr(i,a);n=n.insert(i,u),s=s.insert(i,qs(a))})).next((()=>({documents:n,Tr:s})))}hr(t,e,n){if(e.isEmpty())return w.resolve();let s=new J(Sl);e.forEach((c=>s=s.add(c)));const i=IDBKeyRange.bound(sr(s.first()),sr(s.last())),a=s.getIterator();let u=a.getNext();return Pe(t).Z({index:ys,range:i},((c,d,m)=>{const g=M.fromSegments([...d.prefixPath,d.collectionGroup,d.documentId]);for(;u&&Sl(u,g)<0;)n(u,null),u=a.getNext();u&&u.isEqual(g)&&(n(u,d),u=a.hasNext()?a.getNext():null),u?m.W(sr(u)):m.done()})).next((()=>{for(;u;)n(u,null),u=a.hasNext()?a.getNext():null}))}getDocumentsMatchingQuery(t,e,n,s,i){const a=e.path,u=[a.popLast().toArray(),a.lastSegment(),Us(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],c=[a.popLast().toArray(),a.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Pe(t).G(IDBKeyRange.bound(u,c,!0)).next((d=>{i?.incrementDocumentReadCount(d.length);let m=Nt();for(const g of d){const T=this.cr(M.fromSegments(g.prefixPath.concat(g.collectionGroup,g.documentId)),g);T.isFoundDocument()&&(Nr(e,T)||s.has(T.key))&&(m=m.insert(T.key,T))}return m}))}getAllFromCollectionGroup(t,e,n,s){let i=Nt();const a=Pl(e,n),u=Pl(e,Ot.max());return Pe(t).Z({index:pc,range:IDBKeyRange.bound(a,u,!0)},((c,d,m)=>{const g=this.cr(M.fromSegments(d.prefixPath.concat(d.collectionGroup,d.documentId)),d);i=i.insert(g.key,g),i.size===s&&m.done()})).next((()=>i))}newChangeBuffer(t){return new ng(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next((e=>e.byteSize))}getMetadata(t){return Vl(t).get(eo).next((e=>(L(!!e),e)))}ur(t,e){return Vl(t).put(eo,e)}cr(t,e){if(e){const n=qm(this.serializer,e);if(!(n.isNoDocument()&&n.version.isEqual(U.min())))return n}return at.newInvalidDocument(t)}}function Ch(r){return new eg(r)}class ng extends bh{constructor(t,e){super(),this.Ir=t,this.trackRemovals=e,this.Er=new te((n=>n.toString()),((n,s)=>n.isEqual(s)))}applyChanges(t){const e=[];let n=0,s=new J(((i,a)=>q(i.canonicalString(),a.canonicalString())));return this.changes.forEach(((i,a)=>{const u=this.Er.get(i);if(e.push(this.Ir.removeEntry(t,i,u.readTime)),a.isValidDocument()){const c=cl(this.Ir.serializer,a);s=s.add(i.path.popLast());const d=qs(c);n+=d-u.size,e.push(this.Ir.addEntry(t,i,c))}else if(n-=u.size,this.trackRemovals){const c=cl(this.Ir.serializer,a.convertToNoDocument(U.min()));e.push(this.Ir.addEntry(t,i,c))}})),s.forEach((i=>{e.push(this.Ir.indexManager.addToCollectionParentIndex(t,i))})),e.push(this.Ir.updateMetadata(t,n)),w.waitFor(e)}getFromCache(t,e){return this.Ir.lr(t,e).next((n=>(this.Er.set(e,{size:n.size,readTime:n.document.readTime}),n.document)))}getAllFromCache(t,e){return this.Ir.Pr(t,e).next((({documents:n,Tr:s})=>(s.forEach(((i,a)=>{this.Er.set(i,{size:a,readTime:n.get(i).readTime})})),n)))}}function Vl(r){return dt(r,Er)}function Pe(r){return dt(r,bs)}function sr(r){const t=r.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function Pl(r,t){const e=t.documentKey.path.toArray();return[r,Us(t.readTime),e.slice(0,e.length-2),e.length>0?e[e.length-1]:""]}function Sl(r,t){const e=r.path.toArray(),n=t.path.toArray();let s=0;for(let i=0;i<e.length-2&&i<n.length-2;++i)if(s=q(e[i],n[i]),s)return s;return s=q(e.length,n.length),s||(s=q(e[e.length-2],n[n.length-2]),s||q(e[e.length-1],n[n.length-1]))}/**
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
 */class rg{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class xh{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(n=s,this.remoteDocumentCache.getEntry(t,e)))).next((s=>(n!==null&&pr(n.mutation,s,xt.empty(),it.now()),s)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((n=>this.getLocalViewOfDocuments(t,n,K()).next((()=>n))))}getLocalViewOfDocuments(t,e,n=K()){const s=Kt();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,n).next((i=>{let a=ar();return i.forEach(((u,c)=>{a=a.insert(u,c.overlayedDocument)})),a}))))}getOverlayedDocuments(t,e){const n=Kt();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,K())))}populateOverlays(t,e,n){const s=[];return n.forEach((i=>{e.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(t,s).next((i=>{i.forEach(((a,u)=>{e.set(a,u)}))}))}computeViews(t,e,n,s){let i=Nt();const a=gr(),u=(function(){return gr()})();return e.forEach(((c,d)=>{const m=n.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof ee)?i=i.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),pr(m.mutation,d,m.mutation.getFieldMask(),it.now())):a.set(d.key,xt.empty())})),this.recalculateAndSaveOverlays(t,i).next((c=>(c.forEach(((d,m)=>a.set(d,m))),e.forEach(((d,m)=>{var g;return u.set(d,new rg(m,(g=a.get(d))!==null&&g!==void 0?g:null))})),u)))}recalculateAndSaveOverlays(t,e){const n=gr();let s=new et(((a,u)=>a-u)),i=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((a=>{for(const u of a)u.keys().forEach((c=>{const d=e.get(c);if(d===null)return;let m=n.get(c)||xt.empty();m=u.applyToLocalView(d,m),n.set(c,m);const g=(s.get(u.batchId)||K()).add(c);s=s.insert(u.batchId,g)}))})).next((()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const c=u.getNext(),d=c.key,m=c.value,g=Wc();m.forEach((T=>{if(!i.has(T)){const P=th(e.get(T),n.get(T));P!==null&&g.set(T,P),i=i.add(T)}})),a.push(this.documentOverlayCache.saveOverlays(t,d,g))}return w.waitFor(a)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((n=>this.recalculateAndSaveOverlays(t,n)))}getDocumentsMatchingQuery(t,e,n,s){return(function(a){return M.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):jc(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,s):this.getDocumentsMatchingCollectionQuery(t,e,n,s)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-i.size):w.resolve(Kt());let u=mn,c=i;return a.next((d=>w.forEach(d,((m,g)=>(u<g.largestBatchId&&(u=g.largestBatchId),i.get(m)?w.resolve():this.remoteDocumentCache.getEntry(t,m).next((T=>{c=c.insert(m,T)}))))).next((()=>this.populateOverlays(t,d,i))).next((()=>this.computeViews(t,c,d,K()))).next((m=>({batchId:u,changes:Qc(m)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next((n=>{let s=ar();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,s){const i=e.collectionGroup;let a=ar();return this.indexManager.getCollectionParents(t,i).next((u=>w.forEach(u,(c=>{const d=(function(g,T){return new xn(T,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)})(e,c.child(i));return this.getDocumentsMatchingCollectionQuery(t,d,n,s).next((m=>{m.forEach(((g,T)=>{a=a.insert(g,T)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(t,e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i,s)))).next((a=>{i.forEach(((c,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,at.newInvalidDocument(m)))}));let u=ar();return a.forEach(((c,d)=>{const m=i.get(c);m!==void 0&&pr(m.mutation,d,xt.empty(),it.now()),Nr(e,d)&&(u=u.insert(c,d))})),u}))}}/**
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
 */class sg{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,e){return w.resolve(this.dr.get(e))}saveBundleMetadata(t,e){return this.dr.set(e.id,(function(s){return{id:s.id,version:s.version,createTime:bt(s.createTime)}})(e)),w.resolve()}getNamedQuery(t,e){return w.resolve(this.Ar.get(e))}saveNamedQuery(t,e){return this.Ar.set(e.name,(function(s){return{name:s.name,query:Th(s.bundledQuery),readTime:bt(s.readTime)}})(e)),w.resolve()}}/**
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
 */class ig{constructor(){this.overlays=new et(M.comparator),this.Rr=new Map}getOverlay(t,e){return w.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Kt();return w.forEach(e,(s=>this.getOverlay(t,s).next((i=>{i!==null&&n.set(s,i)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((s,i)=>{this.Et(t,e,i)})),w.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.Rr.get(n);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.Rr.delete(n)),w.resolve()}getOverlaysForCollection(t,e,n){const s=Kt(),i=e.length+1,a=new M(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const c=u.getNext().value,d=c.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===i&&c.largestBatchId>n&&s.set(c.getKey(),c)}return w.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let i=new et(((d,m)=>d-m));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>n){let m=i.get(d.largestBatchId);m===null&&(m=Kt(),i=i.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const u=Kt(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((d,m)=>u.set(d,m))),!(u.size()>=s)););return w.resolve(u)}Et(t,e,n){const s=this.overlays.get(n.key);if(s!==null){const a=this.Rr.get(s.largestBatchId).delete(n.key);this.Rr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new qo(e,n));let i=this.Rr.get(e);i===void 0&&(i=K(),this.Rr.set(e,i)),this.Rr.set(e,i.add(n.key))}}/**
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
 */class og{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(t){return w.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,w.resolve()}}/**
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
 */class $o{constructor(){this.Vr=new J(ft.mr),this.gr=new J(ft.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,e){const n=new ft(t,e);this.Vr=this.Vr.add(n),this.gr=this.gr.add(n)}yr(t,e){t.forEach((n=>this.addReference(n,e)))}removeReference(t,e){this.wr(new ft(t,e))}Sr(t,e){t.forEach((n=>this.removeReference(n,e)))}br(t){const e=new M(new Y([])),n=new ft(e,t),s=new ft(e,t+1),i=[];return this.gr.forEachInRange([n,s],(a=>{this.wr(a),i.push(a.key)})),i}Dr(){this.Vr.forEach((t=>this.wr(t)))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const e=new M(new Y([])),n=new ft(e,t),s=new ft(e,t+1);let i=K();return this.gr.forEachInRange([n,s],(a=>{i=i.add(a.key)})),i}containsKey(t){const e=new ft(t,0),n=this.Vr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class ft{constructor(t,e){this.key=t,this.Cr=e}static mr(t,e){return M.comparator(t.key,e.key)||q(t.Cr,e.Cr)}static pr(t,e){return q(t.Cr,e.Cr)||M.comparator(t.key,e.key)}}/**
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
 */class ag{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Fr=1,this.Mr=new J(ft.mr)}checkEmpty(t){return w.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,s){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Uo(i,e,n,s);this.mutationQueue.push(a);for(const u of s)this.Mr=this.Mr.add(new ft(u.key,i)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return w.resolve(a)}lookupMutationBatch(t,e){return w.resolve(this.Or(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.Nr(n),i=s<0?0:s;return w.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return w.resolve(this.mutationQueue.length===0?Me:this.Fr-1)}getAllMutationBatches(t){return w.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new ft(e,0),s=new ft(e,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([n,s],(a=>{const u=this.Or(a.Cr);i.push(u)})),w.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new J(q);return e.forEach((s=>{const i=new ft(s,0),a=new ft(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([i,a],(u=>{n=n.add(u.Cr)}))})),w.resolve(this.Br(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;M.isDocumentKey(i)||(i=i.child(""));const a=new ft(new M(i),0);let u=new J(q);return this.Mr.forEachWhile((c=>{const d=c.key.path;return!!n.isPrefixOf(d)&&(d.length===s&&(u=u.add(c.Cr)),!0)}),a),w.resolve(this.Br(u))}Br(t){const e=[];return t.forEach((n=>{const s=this.Or(n);s!==null&&e.push(s)})),e}removeMutationBatch(t,e){L(this.Lr(e.batchId,"removed")===0),this.mutationQueue.shift();let n=this.Mr;return w.forEach(e.mutations,(s=>{const i=new ft(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.Mr=n}))}qn(t){}containsKey(t,e){const n=new ft(e,0),s=this.Mr.firstAfterOrEqual(n);return w.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,w.resolve()}Lr(t,e){return this.Nr(t)}Nr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Or(t){const e=this.Nr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class ug{constructor(t){this.kr=t,this.docs=(function(){return new et(M.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),i=s?s.size:0,a=this.kr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return w.resolve(n?n.document.mutableCopy():at.newInvalidDocument(e))}getEntries(t,e){let n=Nt();return e.forEach((s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():at.newInvalidDocument(s))})),w.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let i=Nt();const a=e.path,u=new M(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(u);for(;c.hasNext();){const{key:d,value:{document:m}}=c.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Po(cc(m),n)<=0||(s.has(m.key)||Nr(e,m))&&(i=i.insert(m.key,m.mutableCopy()))}return w.resolve(i)}getAllFromCollectionGroup(t,e,n,s){O()}qr(t,e){return w.forEach(this.docs,(n=>e(n)))}newChangeBuffer(t){return new lg(this)}getSize(t){return w.resolve(this.size)}}class lg extends bh{constructor(t){super(),this.Ir=t}applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?e.push(this.Ir.addEntry(t,s)):this.Ir.removeEntry(n)})),w.waitFor(e)}getFromCache(t,e){return this.Ir.getEntry(t,e)}getAllFromCache(t,e){return this.Ir.getEntries(t,e)}}/**
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
 */class cg{constructor(t){this.persistence=t,this.Qr=new te((e=>Be(e)),Dr),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.$r=0,this.Ur=new $o,this.targetCount=0,this.Kr=Ge.Un()}forEachTarget(t,e){return this.Qr.forEach(((n,s)=>e(s))),w.resolve()}getLastRemoteSnapshotVersion(t){return w.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return w.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Kr.next(),w.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.$r&&(this.$r=e),w.resolve()}zn(t){this.Qr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Kr=new Ge(e),this.highestTargetId=e),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,e){return this.zn(e),this.targetCount+=1,w.resolve()}updateTargetData(t,e){return this.zn(e),w.resolve()}removeTargetData(t,e){return this.Qr.delete(e.target),this.Ur.br(e.targetId),this.targetCount-=1,w.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.Qr.forEach(((a,u)=>{u.sequenceNumber<=e&&n.get(u.targetId)===null&&(this.Qr.delete(a),i.push(this.removeMatchingKeysForTargetId(t,u.targetId)),s++)})),w.waitFor(i).next((()=>s))}getTargetCount(t){return w.resolve(this.targetCount)}getTargetData(t,e){const n=this.Qr.get(e)||null;return w.resolve(n)}addMatchingKeys(t,e,n){return this.Ur.yr(e,n),w.resolve()}removeMatchingKeys(t,e,n){this.Ur.Sr(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach((a=>{i.push(s.markPotentiallyOrphaned(t,a))})),w.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Ur.br(e),w.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Ur.vr(e);return w.resolve(n)}containsKey(t,e){return w.resolve(this.Ur.containsKey(e))}}/**
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
 */class Qo{constructor(t,e){this.Wr={},this.overlays={},this.Gr=new Ct(0),this.zr=!1,this.zr=!0,this.jr=new og,this.referenceDelegate=t(this),this.Hr=new cg(this),this.indexManager=new Hm,this.remoteDocumentCache=(function(s){return new ug(s)})((n=>this.referenceDelegate.Jr(n))),this.serializer=new _h(e),this.Yr=new sg(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new ig,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Wr[t.toKey()];return n||(n=new ag(e,this.referenceDelegate),this.Wr[t.toKey()]=n),n}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,e,n){b("MemoryPersistence","Starting transaction:",t);const s=new hg(this.Gr.next());return this.referenceDelegate.Zr(),n(s).next((i=>this.referenceDelegate.Xr(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}ei(t,e){return w.or(Object.values(this.Wr).map((n=>()=>n.containsKey(t,e))))}}class hg extends dc{constructor(t){super(),this.currentSequenceNumber=t}}class li{constructor(t){this.persistence=t,this.ti=new $o,this.ni=null}static ri(t){return new li(t)}get ii(){if(this.ni)return this.ni;throw O()}addReference(t,e,n){return this.ti.addReference(n,e),this.ii.delete(n.toString()),w.resolve()}removeReference(t,e,n){return this.ti.removeReference(n,e),this.ii.add(n.toString()),w.resolve()}markPotentiallyOrphaned(t,e){return this.ii.add(e.toString()),w.resolve()}removeTarget(t,e){this.ti.br(e.targetId).forEach((s=>this.ii.add(s.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((s=>{s.forEach((i=>this.ii.add(i.toString())))})).next((()=>n.removeTargetData(t,e)))}Zr(){this.ni=new Set}Xr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return w.forEach(this.ii,(n=>{const s=M.fromPath(n);return this.si(t,s).next((i=>{i||e.removeEntry(s,U.min())}))})).next((()=>(this.ni=null,e.apply(t))))}updateLimboDocument(t,e){return this.si(t,e).next((n=>{n?this.ii.delete(e.toString()):this.ii.add(e.toString())}))}Jr(t){return 0}si(t,e){return w.or([()=>w.resolve(this.ti.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.ei(t,e)])}}class js{constructor(t,e){this.persistence=t,this.oi=new te((n=>Vt(n.path)),((n,s)=>n.isEqual(s))),this.garbageCollector=Sh(this,e)}static ri(t,e){return new js(t,e)}Zr(){}Xr(t){return w.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}nr(t){const e=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next((n=>e.next((s=>n+s))))}sr(t){let e=0;return this.rr(t,(n=>{e++})).next((()=>e))}rr(t,e){return w.forEach(this.oi,((n,s)=>this.ar(t,n,s).next((i=>i?w.resolve():e(s)))))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.qr(t,(a=>this.ar(t,a,e).next((u=>{u||(n++,i.removeEntry(a,U.min()))})))).next((()=>i.apply(t))).next((()=>n))}markPotentiallyOrphaned(t,e){return this.oi.set(e,t.currentSequenceNumber),w.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.oi.set(n,t.currentSequenceNumber),w.resolve()}removeReference(t,e,n){return this.oi.set(n,t.currentSequenceNumber),w.resolve()}updateLimboDocument(t,e){return this.oi.set(e,t.currentSequenceNumber),w.resolve()}Jr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Is(t.data.value)),e}ar(t,e,n){return w.or([()=>this.persistence.ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.oi.get(e);return w.resolve(s!==void 0&&s>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class dg{constructor(t){this.serializer=t}B(t,e,n,s){const i=new Ys("createOrUpgrade",e);n<1&&s>=1&&((function(c){c.createObjectStore(xr)})(t),(function(c){c.createObjectStore(Ir,{keyPath:Sf}),c.createObjectStore(Ut,{keyPath:Bu,autoIncrement:!0}).createIndex(Ne,qu,{unique:!0}),c.createObjectStore(gn)})(t),bl(t),(function(c){c.createObjectStore(be)})(t));let a=w.resolve();return n<3&&s>=3&&(n!==0&&((function(c){c.deleteObjectStore(_n),c.deleteObjectStore(pn),c.deleteObjectStore(Oe)})(t),bl(t)),a=a.next((()=>(function(c){const d=c.store(Oe),m={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:U.min().toTimestamp(),targetCount:0};return d.put(Cs,m)})(i)))),n<4&&s>=4&&(n!==0&&(a=a.next((()=>(function(c,d){return d.store(Ut).G().next((g=>{c.deleteObjectStore(Ut),c.createObjectStore(Ut,{keyPath:Bu,autoIncrement:!0}).createIndex(Ne,qu,{unique:!0});const T=d.store(Ut),P=g.map((C=>T.put(C)));return w.waitFor(P)}))})(t,i)))),a=a.next((()=>{(function(c){c.createObjectStore(yn,{keyPath:Ff})})(t)}))),n<5&&s>=5&&(a=a.next((()=>this._i(i)))),n<6&&s>=6&&(a=a.next((()=>((function(c){c.createObjectStore(Er)})(t),this.ai(i))))),n<7&&s>=7&&(a=a.next((()=>this.ui(i)))),n<8&&s>=8&&(a=a.next((()=>this.ci(t,i)))),n<9&&s>=9&&(a=a.next((()=>{(function(c){c.objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges")})(t)}))),n<10&&s>=10&&(a=a.next((()=>this.li(i)))),n<11&&s>=11&&(a=a.next((()=>{(function(c){c.createObjectStore(Js,{keyPath:Lf})})(t),(function(c){c.createObjectStore(Zs,{keyPath:Uf})})(t)}))),n<12&&s>=12&&(a=a.next((()=>{(function(c){const d=c.createObjectStore(ti,{keyPath:$f});d.createIndex(ro,Qf,{unique:!1}),d.createIndex(Ic,Wf,{unique:!1})})(t)}))),n<13&&s>=13&&(a=a.next((()=>(function(c){const d=c.createObjectStore(bs,{keyPath:Cf});d.createIndex(ys,xf),d.createIndex(pc,Df)})(t))).next((()=>this.hi(t,i))).next((()=>t.deleteObjectStore(be)))),n<14&&s>=14&&(a=a.next((()=>this.Pi(t,i)))),n<15&&s>=15&&(a=a.next((()=>(function(c){c.createObjectStore(Co,{keyPath:Bf,autoIncrement:!0}).createIndex(no,qf,{unique:!1}),c.createObjectStore(xs,{keyPath:jf}).createIndex(yc,zf,{unique:!1}),c.createObjectStore(Ds,{keyPath:Kf}).createIndex(Tc,Gf,{unique:!1})})(t)))),n<16&&s>=16&&(a=a.next((()=>{e.objectStore(xs).clear()})).next((()=>{e.objectStore(Ds).clear()}))),n<17&&s>=17&&(a=a.next((()=>{(function(c){c.createObjectStore(xo,{keyPath:Hf})})(t)}))),a}ai(t){let e=0;return t.store(be).Z(((n,s)=>{e+=qs(s)})).next((()=>{const n={byteSize:e};return t.store(Er).put(eo,n)}))}_i(t){const e=t.store(Ir),n=t.store(Ut);return e.G().next((s=>w.forEach(s,(i=>{const a=IDBKeyRange.bound([i.userId,Me],[i.userId,i.lastAcknowledgedBatchId]);return n.G(Ne,a).next((u=>w.forEach(u,(c=>{L(c.userId===i.userId);const d=xe(this.serializer,c);return wh(t,i.userId,d).next((()=>{}))}))))}))))}ui(t){const e=t.store(_n),n=t.store(be);return t.store(Oe).get(Cs).next((s=>{const i=[];return n.Z(((a,u)=>{const c=new Y(a),d=(function(g){return[0,Vt(g)]})(c);i.push(e.get(d).next((m=>m?w.resolve():(g=>e.put({targetId:0,path:Vt(g),sequenceNumber:s.highestListenSequenceNumber}))(c))))})).next((()=>w.waitFor(i)))}))}ci(t,e){t.createObjectStore(vr,{keyPath:Of});const n=e.store(vr),s=new Go,i=a=>{if(s.add(a)){const u=a.lastSegment(),c=a.popLast();return n.put({collectionId:u,parent:Vt(c)})}};return e.store(be).Z({Y:!0},((a,u)=>{const c=new Y(a);return i(c.popLast())})).next((()=>e.store(gn).Z({Y:!0},(([a,u,c],d)=>{const m=zt(u);return i(m.popLast())}))))}li(t){const e=t.store(pn);return e.Z(((n,s)=>{const i=lr(s),a=yh(this.serializer,i);return e.put(a)}))}hi(t,e){const n=e.store(be),s=[];return n.Z(((i,a)=>{const u=e.store(bs),c=(function(g){return g.document?new M(Y.fromString(g.document.name).popFirst(5)):g.noDocument?M.fromSegments(g.noDocument.path):g.unknownDocument?M.fromSegments(g.unknownDocument.path):O()})(a).path.toArray(),d={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:a.readTime||[0,0],unknownDocument:a.unknownDocument,noDocument:a.noDocument,document:a.document,hasCommittedMutations:!!a.hasCommittedMutations};s.push(u.put(d))})).next((()=>w.waitFor(s)))}Pi(t,e){const n=e.store(Ut),s=Ch(this.serializer),i=new Qo(li.ri,this.serializer.Tt);return n.G().next((a=>{const u=new Map;return a.forEach((c=>{var d;let m=(d=u.get(c.userId))!==null&&d!==void 0?d:K();xe(this.serializer,c).keys().forEach((g=>m=m.add(g))),u.set(c.userId,m)})),w.forEach(u,((c,d)=>{const m=new mt(d),g=ai.It(this.serializer,m),T=i.getIndexManager(m),P=ui.It(m,this.serializer,T,i.referenceDelegate);return new xh(s,P,g,T).recalculateAndSaveOverlaysForDocumentKeys(new so(e,Ct.ae),c).next()}))}))}}function bl(r){r.createObjectStore(_n,{keyPath:Nf}).createIndex(bo,Mf,{unique:!0}),r.createObjectStore(pn,{keyPath:"targetId"}).createIndex(_c,kf,{unique:!0}),r.createObjectStore(Oe)}const le="IndexedDbPersistence",Ki=18e5,Gi=5e3,$i="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",fg="main";class Wo{constructor(t,e,n,s,i,a,u,c,d,m,g=17){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=n,this.Ti=i,this.window=a,this.document=u,this.Ii=d,this.Ei=m,this.di=g,this.Gr=null,this.zr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ai=null,this.inForeground=!1,this.Ri=null,this.Vi=null,this.mi=Number.NEGATIVE_INFINITY,this.fi=T=>Promise.resolve(),!Wo.D())throw new x(S.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new tg(this,s),this.gi=e+fg,this.serializer=new _h(c),this.pi=new fe(this.gi,this.di,new dg(this.serializer)),this.jr=new zm,this.Hr=new Xm(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Ch(this.serializer),this.Yr=new jm,this.window&&this.window.localStorage?this.yi=this.window.localStorage:(this.yi=null,m===!1&&ut(le,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.wi().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new x(S.FAILED_PRECONDITION,$i);return this.Si(),this.bi(),this.Di(),this.runTransaction("getHighestListenSequenceNumber","readonly",(t=>this.Hr.getHighestSequenceNumber(t)))})).then((t=>{this.Gr=new Ct(t,this.Ii)})).then((()=>{this.zr=!0})).catch((t=>(this.pi&&this.pi.close(),Promise.reject(t))))}Ci(t){return this.fi=async e=>{if(this.started)return t(e)},t(this.isPrimary)}setDatabaseDeletedListener(t){this.pi.k((async e=>{e.newVersion===null&&await t()}))}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.Ti.enqueueAndForget((async()=>{this.started&&await this.wi()})))}wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(t=>fs(t).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.Fi(t).next((e=>{e||(this.isPrimary=!1,this.Ti.enqueueRetryable((()=>this.fi(!1))))}))})).next((()=>this.Mi(t))).next((e=>this.isPrimary&&!e?this.xi(t).next((()=>!1)):!!e&&this.Oi(t).next((()=>!0)))))).catch((t=>{if(Ie(t))return b(le,"Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return b(le,"Releasing owner lease after error during lease refresh",t),!1})).then((t=>{this.isPrimary!==t&&this.Ti.enqueueRetryable((()=>this.fi(t))),this.isPrimary=t}))}Fi(t){return ir(t).get(Ze).next((e=>w.resolve(this.Ni(e))))}Bi(t){return fs(t).delete(this.clientId)}async Li(){if(this.isPrimary&&!this.ki(this.mi,Ki)){this.mi=Date.now();const t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(e=>{const n=dt(e,yn);return n.G().next((s=>{const i=this.qi(s,Ki),a=s.filter((u=>i.indexOf(u)===-1));return w.forEach(a,(u=>n.delete(u.clientId))).next((()=>a))}))})).catch((()=>[]));if(this.yi)for(const e of t)this.yi.removeItem(this.Qi(e.clientId))}}Di(){this.Vi=this.Ti.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.wi().then((()=>this.Li())).then((()=>this.Di()))))}Ni(t){return!!t&&t.ownerId===this.clientId}Mi(t){return this.Ei?w.resolve(!0):ir(t).get(Ze).next((e=>{if(e!==null&&this.ki(e.leaseTimestampMs,Gi)&&!this.$i(e.ownerId)){if(this.Ni(e)&&this.networkEnabled)return!0;if(!this.Ni(e)){if(!e.allowTabSynchronization)throw new x(S.FAILED_PRECONDITION,$i);return!1}}return!(!this.networkEnabled||!this.inForeground)||fs(t).G().next((n=>this.qi(n,Gi).find((s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,a=!this.inForeground&&s.inForeground,u=this.networkEnabled===s.networkEnabled;if(i||a&&u)return!0}return!1}))===void 0))})).next((e=>(this.isPrimary!==e&&b(le,`Client ${e?"is":"is not"} eligible for a primary lease.`),e)))}async shutdown(){this.zr=!1,this.Ui(),this.Vi&&(this.Vi.cancel(),this.Vi=null),this.Ki(),this.Wi(),await this.pi.runTransaction("shutdown","readwrite",[xr,yn],(t=>{const e=new so(t,Ct.ae);return this.xi(e).next((()=>this.Bi(e)))})),this.pi.close(),this.Gi()}qi(t,e){return t.filter((n=>this.ki(n.updateTimeMs,e)&&!this.$i(n.clientId)))}zi(){return this.runTransaction("getActiveClients","readonly",(t=>fs(t).G().next((e=>this.qi(e,Ki).map((n=>n.clientId))))))}get started(){return this.zr}getGlobalsCache(){return this.jr}getMutationQueue(t,e){return ui.It(t,this.serializer,e,this.referenceDelegate)}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(t){return new Ym(t,this.serializer.Tt.databaseId)}getDocumentOverlayCache(t){return ai.It(this.serializer,t)}getBundleCache(){return this.Yr}runTransaction(t,e,n){b(le,"Starting transaction:",t);const s=e==="readonly"?"readonly":"readwrite",i=(function(c){return c===17?Jf:c===16?Xf:c===15?Do:c===14?wc:c===13?vc:c===12?Yf:c===11?Ec:void O()})(this.di);let a;return this.pi.runTransaction(t,s,i,(u=>(a=new so(u,this.Gr?this.Gr.next():Ct.ae),e==="readwrite-primary"?this.Fi(a).next((c=>!!c||this.Mi(a))).next((c=>{if(!c)throw ut(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.Ti.enqueueRetryable((()=>this.fi(!1))),new x(S.FAILED_PRECONDITION,hc);return n(a)})).next((c=>this.Oi(a).next((()=>c)))):this.ji(a).next((()=>n(a)))))).then((u=>(a.raiseOnCommittedEvent(),u)))}ji(t){return ir(t).get(Ze).next((e=>{if(e!==null&&this.ki(e.leaseTimestampMs,Gi)&&!this.$i(e.ownerId)&&!this.Ni(e)&&!(this.Ei||this.allowTabSynchronization&&e.allowTabSynchronization))throw new x(S.FAILED_PRECONDITION,$i)}))}Oi(t){const e={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ir(t).put(Ze,e)}static D(){return fe.D()}xi(t){const e=ir(t);return e.get(Ze).next((n=>this.Ni(n)?(b(le,"Releasing primary lease."),e.delete(Ze)):w.resolve()))}ki(t,e){const n=Date.now();return!(t<n-e)&&(!(t>n)||(ut(`Detected an update time that is in the future: ${t} > ${n}`),!1))}Si(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ri=()=>{this.Ti.enqueueAndForget((()=>(this.inForeground=this.document.visibilityState==="visible",this.wi())))},this.document.addEventListener("visibilitychange",this.Ri),this.inForeground=this.document.visibilityState==="visible")}Ki(){this.Ri&&(this.document.removeEventListener("visibilitychange",this.Ri),this.Ri=null)}bi(){var t;typeof((t=this.window)===null||t===void 0?void 0:t.addEventListener)=="function"&&(this.Ai=()=>{this.Ui();const e=/(?:Version|Mobile)\/1[456]/;Jl()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.Ti.enterRestrictedMode(!0),this.Ti.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Ai))}Wi(){this.Ai&&(this.window.removeEventListener("pagehide",this.Ai),this.Ai=null)}$i(t){var e;try{const n=((e=this.yi)===null||e===void 0?void 0:e.getItem(this.Qi(t)))!==null;return b(le,`Client '${t}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return ut(le,"Failed to get zombied client id.",n),!1}}Ui(){if(this.yi)try{this.yi.setItem(this.Qi(this.clientId),String(Date.now()))}catch(t){ut("Failed to set zombie client id.",t)}}Gi(){if(this.yi)try{this.yi.removeItem(this.Qi(this.clientId))}catch{}}Qi(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function ir(r){return dt(r,xr)}function fs(r){return dt(r,yn)}function Dh(r,t){let e=r.projectId;return r.isDefaultDatabase||(e+="."+r.database),"firestore/"+t+"/"+e+"/"}/**
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
 */class Ho{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Hi=n,this.Ji=s}static Yi(t,e){let n=K(),s=K();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ho(t,e.fromCache,n,s)}}/**
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
 */class mg{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class kh{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=(function(){return Jl()?8:fc(Vs())>0?6:4})()}initialize(t,e){this.ns=t,this.indexManager=e,this.Zi=!0}getDocumentsMatchingQuery(t,e,n,s){const i={result:null};return this.rs(t,e).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ss(t,e,s,n).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new mg;return this._s(t,e,a).next((u=>{if(i.result=u,this.Xi)return this.us(t,e,a,u.size)}))})).next((()=>i.result))}us(t,e,n,s){return n.documentReadCount<this.es?(on()<=Yt.DEBUG&&b("QueryEngine","SDK will not create cache indexes for query:",an(e),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),w.resolve()):(on()<=Yt.DEBUG&&b("QueryEngine","Query:",an(e),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.ts*s?(on()<=Yt.DEBUG&&b("QueryEngine","The SDK decides to create cache indexes for query:",an(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Mt(e))):w.resolve())}rs(t,e){if(tl(e))return w.resolve(null);let n=Mt(e);return this.indexManager.getIndexType(t,n).next((s=>s===0?null:(e.limit!==null&&s===1&&(e=Os(e,null,"F"),n=Mt(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((i=>{const a=K(...i);return this.ns.getDocuments(t,a).next((u=>this.indexManager.getMinOffset(t,n).next((c=>{const d=this.cs(e,u);return this.ls(e,d,a,c.readTime)?this.rs(t,Os(e,null,"F")):this.hs(t,d,e,c)}))))})))))}ss(t,e,n,s){return tl(e)||s.isEqual(U.min())?w.resolve(null):this.ns.getDocuments(t,n).next((i=>{const a=this.cs(e,i);return this.ls(e,a,n,s)?w.resolve(null):(on()<=Yt.DEBUG&&b("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),an(e)),this.hs(t,a,e,lc(s,mn)).next((u=>u)))}))}cs(t,e){let n=new J(Gc(t));return e.forEach(((s,i)=>{Nr(t,i)&&(n=n.add(i))})),n}ls(t,e,n,s){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const i=t.limitType==="F"?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}_s(t,e,n){return on()<=Yt.DEBUG&&b("QueryEngine","Using full collection scan to execute query:",an(e)),this.ns.getDocumentsMatchingQuery(t,e,Ot.min(),n)}hs(t,e,n,s){return this.ns.getDocumentsMatchingQuery(t,n,s).next((i=>(e.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
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
 */const Yo="LocalStore",gg=3e8;class pg{constructor(t,e,n,s){this.persistence=t,this.Ps=e,this.serializer=s,this.Ts=new et(q),this.Is=new te((i=>Be(i)),Dr),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(n)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new xh(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ts)))}}function Nh(r,t,e,n){return new pg(r,t,e,n)}async function Mh(r,t){const e=F(r);return await e.persistence.runTransaction("Handle user change","readonly",(n=>{let s;return e.mutationQueue.getAllMutationBatches(n).next((i=>(s=i,e.As(t),e.mutationQueue.getAllMutationBatches(n)))).next((i=>{const a=[],u=[];let c=K();for(const d of s){a.push(d.batchId);for(const m of d.mutations)c=c.add(m.key)}for(const d of i){u.push(d.batchId);for(const m of d.mutations)c=c.add(m.key)}return e.localDocuments.getDocuments(n,c).next((d=>({Rs:d,removedBatchIds:a,addedBatchIds:u})))}))}))}function _g(r,t){const e=F(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(n=>{const s=t.batch.keys(),i=e.ds.newChangeBuffer({trackRemovals:!0});return(function(u,c,d,m){const g=d.batch,T=g.keys();let P=w.resolve();return T.forEach((C=>{P=P.next((()=>m.getEntry(c,C))).next((N=>{const D=d.docVersions.get(C);L(D!==null),N.version.compareTo(D)<0&&(g.applyToRemoteDocument(N,d),N.isValidDocument()&&(N.setReadTime(d.commitVersion),m.addEntry(N)))}))})),P.next((()=>u.mutationQueue.removeMutationBatch(c,g)))})(e,n,t,i).next((()=>i.apply(n))).next((()=>e.mutationQueue.performConsistencyCheck(n))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(n,s,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,(function(u){let c=K();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(c=c.add(u.batch.mutations[d].key));return c})(t)))).next((()=>e.localDocuments.getDocuments(n,s)))}))}function Oh(r){const t=F(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Hr.getLastRemoteSnapshotVersion(e)))}function yg(r,t){const e=F(r),n=t.snapshotVersion;let s=e.Ts;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=e.ds.newChangeBuffer({trackRemovals:!0});s=e.Ts;const u=[];t.targetChanges.forEach(((m,g)=>{const T=s.get(g);if(!T)return;u.push(e.Hr.removeMatchingKeys(i,m.removedDocuments,g).next((()=>e.Hr.addMatchingKeys(i,m.addedDocuments,g))));let P=T.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(g)!==null?P=P.withResumeToken(lt.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):m.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(m.resumeToken,n)),s=s.insert(g,P),(function(N,D,z){return N.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=gg?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0})(T,P,m)&&u.push(e.Hr.updateTargetData(i,P))}));let c=Nt(),d=K();if(t.documentUpdates.forEach((m=>{t.resolvedLimboDocuments.has(m)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(i,m))})),u.push(Tg(i,a,t.documentUpdates).next((m=>{c=m.Vs,d=m.fs}))),!n.isEqual(U.min())){const m=e.Hr.getLastRemoteSnapshotVersion(i).next((g=>e.Hr.setTargetsMetadata(i,i.currentSequenceNumber,n)));u.push(m)}return w.waitFor(u).next((()=>a.apply(i))).next((()=>e.localDocuments.getLocalViewOfDocuments(i,c,d))).next((()=>c))})).then((i=>(e.Ts=s,i)))}function Tg(r,t,e){let n=K(),s=K();return e.forEach((i=>n=n.add(i))),t.getEntries(r,n).next((i=>{let a=Nt();return e.forEach(((u,c)=>{const d=i.get(u);c.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(u)),c.isNoDocument()&&c.version.isEqual(U.min())?(t.removeEntry(u,c.readTime),a=a.insert(u,c)):!d.isValidDocument()||c.version.compareTo(d.version)>0||c.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(c),a=a.insert(u,c)):b(Yo,"Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",c.version)})),{Vs:a,fs:s}}))}function Ig(r,t){const e=F(r);return e.persistence.runTransaction("Get next mutation batch","readonly",(n=>(t===void 0&&(t=Me),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t))))}function zs(r,t){const e=F(r);return e.persistence.runTransaction("Allocate target","readwrite",(n=>{let s;return e.Hr.getTargetData(n,t).next((i=>i?(s=i,w.resolve(s)):e.Hr.allocateTargetId(n).next((a=>(s=new Xt(t,a,"TargetPurposeListen",n.currentSequenceNumber),e.Hr.addTargetData(n,s).next((()=>s)))))))})).then((n=>{const s=e.Ts.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Ts=e.Ts.insert(n.targetId,n),e.Is.set(t,n.targetId)),n}))}async function Rn(r,t,e){const n=F(r),s=n.Ts.get(t),i=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",i,(a=>n.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!Ie(a))throw a;b(Yo,`Failed to update sequence numbers for target ${t}: ${a}`)}n.Ts=n.Ts.remove(t),n.Is.delete(s.target)}function To(r,t,e){const n=F(r);let s=U.min(),i=K();return n.persistence.runTransaction("Execute query","readwrite",(a=>(function(c,d,m){const g=F(c),T=g.Is.get(m);return T!==void 0?w.resolve(g.Ts.get(T)):g.Hr.getTargetData(d,m)})(n,a,Mt(t)).next((u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,n.Hr.getMatchingKeysForTargetId(a,u.targetId).next((c=>{i=c}))})).next((()=>n.Ps.getDocumentsMatchingQuery(a,t,e?s:U.min(),e?i:K()))).next((u=>(Uh(n,Kc(t),u),{documents:u,gs:i})))))}function Fh(r,t){const e=F(r),n=F(e.Hr),s=e.Ts.get(t);return s?Promise.resolve(s.target):e.persistence.runTransaction("Get target data","readonly",(i=>n.lt(i,t).next((a=>a?a.target:null))))}function Lh(r,t){const e=F(r),n=e.Es.get(t)||U.min();return e.persistence.runTransaction("Get new document changes","readonly",(s=>e.ds.getAllFromCollectionGroup(s,t,lc(n,mn),Number.MAX_SAFE_INTEGER))).then((s=>(Uh(e,t,s),s)))}function Uh(r,t,e){let n=r.Es.get(t)||U.min();e.forEach(((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)})),r.Es.set(t,n)}/**
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
 */const Bh="firestore_clients";function Cl(r,t){return`${Bh}_${r}_${t}`}const qh="firestore_mutations";function xl(r,t,e){let n=`${qh}_${r}_${e}`;return t.isAuthenticated()&&(n+=`_${t.uid}`),n}const jh="firestore_targets";function Qi(r,t){return`${jh}_${r}_${t}`}/**
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
 */const jt="SharedClientState";class Ks{constructor(t,e,n,s){this.user=t,this.batchId=e,this.state=n,this.error=s}static Ss(t,e,n){const s=JSON.parse(n);let i,a=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return a&&s.error&&(a=typeof s.error.message=="string"&&typeof s.error.code=="string",a&&(i=new x(s.error.code,s.error.message))),a?new Ks(t,e,s.state,i):(ut(jt,`Failed to parse mutation state for ID '${e}': ${n}`),null)}bs(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class _r{constructor(t,e,n){this.targetId=t,this.state=e,this.error=n}static Ss(t,e){const n=JSON.parse(e);let s,i=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return i&&n.error&&(i=typeof n.error.message=="string"&&typeof n.error.code=="string",i&&(s=new x(n.error.code,n.error.message))),i?new _r(t,n.state,s):(ut(jt,`Failed to parse target state for ID '${t}': ${e}`),null)}bs(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class Gs{constructor(t,e){this.clientId=t,this.activeTargetIds=e}static Ss(t,e){const n=JSON.parse(e);let s=typeof n=="object"&&n.activeTargetIds instanceof Array,i=Fo();for(let a=0;s&&a<n.activeTargetIds.length;++a)s=mc(n.activeTargetIds[a]),i=i.add(n.activeTargetIds[a]);return s?new Gs(t,i):(ut(jt,`Failed to parse client data for instance '${t}': ${e}`),null)}}class Xo{constructor(t,e){this.clientId=t,this.onlineState=e}static Ss(t){const e=JSON.parse(t);return typeof e=="object"&&["Unknown","Online","Offline"].indexOf(e.onlineState)!==-1&&typeof e.clientId=="string"?new Xo(e.clientId,e.onlineState):(ut(jt,`Failed to parse online state: ${t}`),null)}}class Io{constructor(){this.activeTargetIds=Fo()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}bs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Wi{constructor(t,e,n,s,i){this.window=t,this.Ti=e,this.persistenceKey=n,this.Cs=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Fs=this.Ms.bind(this),this.xs=new et(q),this.started=!1,this.Os=[];const a=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Ns=Cl(this.persistenceKey,this.Cs),this.Bs=(function(c){return`firestore_sequence_number_${c}`})(this.persistenceKey),this.xs=this.xs.insert(this.Cs,new Io),this.Ls=new RegExp(`^${Bh}_${a}_([^_]*)$`),this.ks=new RegExp(`^${qh}_${a}_(\\d+)(?:_(.*))?$`),this.qs=new RegExp(`^${jh}_${a}_(\\d+)$`),this.Qs=(function(c){return`firestore_online_state_${c}`})(this.persistenceKey),this.$s=(function(c){return`firestore_bundle_loaded_v2_${c}`})(this.persistenceKey),this.window.addEventListener("storage",this.Fs)}static D(t){return!(!t||!t.localStorage)}async start(){const t=await this.syncEngine.zi();for(const n of t){if(n===this.Cs)continue;const s=this.getItem(Cl(this.persistenceKey,n));if(s){const i=Gs.Ss(n,s);i&&(this.xs=this.xs.insert(i.clientId,i))}}this.Us();const e=this.storage.getItem(this.Qs);if(e){const n=this.Ks(e);n&&this.Ws(n)}for(const n of this.Os)this.Ms(n);this.Os=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(t){this.setItem(this.Bs,JSON.stringify(t))}getAllActiveQueryTargets(){return this.Gs(this.xs)}isActiveQueryTarget(t){let e=!1;return this.xs.forEach(((n,s)=>{s.activeTargetIds.has(t)&&(e=!0)})),e}addPendingMutation(t){this.zs(t,"pending")}updateMutationState(t,e,n){this.zs(t,e,n),this.js(t)}addLocalQueryTarget(t,e=!0){let n="not-current";if(this.isActiveQueryTarget(t)){const s=this.storage.getItem(Qi(this.persistenceKey,t));if(s){const i=_r.Ss(t,s);i&&(n=i.state)}}return e&&this.Hs.Ds(t),this.Us(),n}removeLocalQueryTarget(t){this.Hs.vs(t),this.Us()}isLocalQueryTarget(t){return this.Hs.activeTargetIds.has(t)}clearQueryState(t){this.removeItem(Qi(this.persistenceKey,t))}updateQueryState(t,e,n){this.Js(t,e,n)}handleUserChange(t,e,n){e.forEach((s=>{this.js(s)})),this.currentUser=t,n.forEach((s=>{this.addPendingMutation(s)}))}setOnlineState(t){this.Ys(t)}notifyBundleLoaded(t){this.Zs(t)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Fs),this.removeItem(this.Ns),this.started=!1)}getItem(t){const e=this.storage.getItem(t);return b(jt,"READ",t,e),e}setItem(t,e){b(jt,"SET",t,e),this.storage.setItem(t,e)}removeItem(t){b(jt,"REMOVE",t),this.storage.removeItem(t)}Ms(t){const e=t;if(e.storageArea===this.storage){if(b(jt,"EVENT",e.key,e.newValue),e.key===this.Ns)return void ut("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Ti.enqueueRetryable((async()=>{if(this.started){if(e.key!==null){if(this.Ls.test(e.key)){if(e.newValue==null){const n=this.Xs(e.key);return this.eo(n,null)}{const n=this.no(e.key,e.newValue);if(n)return this.eo(n.clientId,n)}}else if(this.ks.test(e.key)){if(e.newValue!==null){const n=this.ro(e.key,e.newValue);if(n)return this.io(n)}}else if(this.qs.test(e.key)){if(e.newValue!==null){const n=this.so(e.key,e.newValue);if(n)return this.oo(n)}}else if(e.key===this.Qs){if(e.newValue!==null){const n=this.Ks(e.newValue);if(n)return this.Ws(n)}}else if(e.key===this.Bs){const n=(function(i){let a=Ct.ae;if(i!=null)try{const u=JSON.parse(i);L(typeof u=="number"),a=u}catch(u){ut(jt,"Failed to read sequence number from WebStorage",u)}return a})(e.newValue);n!==Ct.ae&&this.sequenceNumberHandler(n)}else if(e.key===this.$s){const n=this._o(e.newValue);await Promise.all(n.map((s=>this.syncEngine.ao(s))))}}}else this.Os.push(e)}))}}get Hs(){return this.xs.get(this.Cs)}Us(){this.setItem(this.Ns,this.Hs.bs())}zs(t,e,n){const s=new Ks(this.currentUser,t,e,n),i=xl(this.persistenceKey,this.currentUser,t);this.setItem(i,s.bs())}js(t){const e=xl(this.persistenceKey,this.currentUser,t);this.removeItem(e)}Ys(t){const e={clientId:this.Cs,onlineState:t};this.storage.setItem(this.Qs,JSON.stringify(e))}Js(t,e,n){const s=Qi(this.persistenceKey,t),i=new _r(t,e,n);this.setItem(s,i.bs())}Zs(t){const e=JSON.stringify(Array.from(t));this.setItem(this.$s,e)}Xs(t){const e=this.Ls.exec(t);return e?e[1]:null}no(t,e){const n=this.Xs(t);return Gs.Ss(n,e)}ro(t,e){const n=this.ks.exec(t),s=Number(n[1]),i=n[2]!==void 0?n[2]:null;return Ks.Ss(new mt(i),s,e)}so(t,e){const n=this.qs.exec(t),s=Number(n[1]);return _r.Ss(s,e)}Ks(t){return Xo.Ss(t)}_o(t){return JSON.parse(t)}async io(t){if(t.user.uid===this.currentUser.uid)return this.syncEngine.uo(t.batchId,t.state,t.error);b(jt,`Ignoring mutation for non-active user ${t.user.uid}`)}oo(t){return this.syncEngine.co(t.targetId,t.state,t.error)}eo(t,e){const n=e?this.xs.insert(t,e):this.xs.remove(t),s=this.Gs(this.xs),i=this.Gs(n),a=[],u=[];return i.forEach((c=>{s.has(c)||a.push(c)})),s.forEach((c=>{i.has(c)||u.push(c)})),this.syncEngine.lo(a,u).then((()=>{this.xs=n}))}Ws(t){this.xs.get(t.clientId)&&this.onlineStateHandler(t.onlineState)}Gs(t){let e=Fo();return t.forEach(((n,s)=>{e=e.unionWith(s.activeTargetIds)})),e}}class zh{constructor(){this.ho=new Io,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,e,n){this.Po[t]=e}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new Io,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Eg{To(t){}shutdown(){}}/**
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
 */const Dl="ConnectivityMonitor";class kl{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){b(Dl,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){b(Dl,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ms=null;function Eo(){return ms===null?ms=(function(){return 268435456+Math.round(2147483648*Math.random())})():ms++,"0x"+ms.toString(16)}/**
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
 */const Hi="RestConnection",vg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class wg{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=e+"://"+t.host,this.yo=`projects/${n}/databases/${s}`,this.wo=this.databaseId.database===ks?`project_id=${n}`:`project_id=${n}&database_id=${s}`}So(t,e,n,s,i){const a=Eo(),u=this.bo(t,e.toUriEncodedString());b(Hi,`Sending RPC '${t}' ${a}:`,u,n);const c={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(c,s,i),this.vo(t,u,c,n).then((d=>(b(Hi,`Received RPC '${t}' ${a}: `,d),d)),(d=>{throw dn(Hi,`RPC '${t}' ${a} failed with error: `,d,"url: ",u,"request:",n),d}))}Co(t,e,n,s,i,a){return this.So(t,e,n,s,i)}Do(t,e,n){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Cn})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((s,i)=>t[i]=s)),n&&n.headers.forEach(((s,i)=>t[i]=s))}bo(t,e){const n=vg[t];return`${this.po}/v1/${e}:${n}`}terminate(){}}/**
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
 */class Ag{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Uo(t){this.ko(t)}Ko(t){this.qo(t)}}/**
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
 */const wt="WebChannelConnection";class Rg extends wg{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,e,n,s){const i=Eo();return new Promise(((a,u)=>{const c=new tc;c.setWithCredentials(!0),c.listenOnce(ec.COMPLETE,(()=>{try{switch(c.getLastErrorCode()){case gs.NO_ERROR:const m=c.getResponseJson();b(wt,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(m)),a(m);break;case gs.TIMEOUT:b(wt,`RPC '${t}' ${i} timed out`),u(new x(S.DEADLINE_EXCEEDED,"Request time out"));break;case gs.HTTP_ERROR:const g=c.getStatus();if(b(wt,`RPC '${t}' ${i} failed with status:`,g,"response text:",c.getResponseText()),g>0){let T=c.getResponseJson();Array.isArray(T)&&(T=T[0]);const P=T?.error;if(P&&P.status&&P.message){const C=(function(D){const z=D.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(z)>=0?z:S.UNKNOWN})(P.status);u(new x(C,P.message))}else u(new x(S.UNKNOWN,"Server responded with status "+c.getStatus()))}else u(new x(S.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{b(wt,`RPC '${t}' ${i} completed.`)}}));const d=JSON.stringify(s);b(wt,`RPC '${t}' ${i} sending request:`,s),c.send(e,"POST",d,n,15)}))}Wo(t,e,n){const s=Eo(),i=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=sc(),u=rc(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(c.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,e,n),c.encodeInitMessageHeaders=!0;const m=i.join("");b(wt,`Creating RPC '${t}' stream ${s}: ${m}`,c);const g=a.createWebChannel(m,c);let T=!1,P=!1;const C=new Ag({Fo:D=>{P?b(wt,`Not sending because RPC '${t}' stream ${s} is closed:`,D):(T||(b(wt,`Opening RPC '${t}' stream ${s} transport.`),g.open(),T=!0),b(wt,`RPC '${t}' stream ${s} sending:`,D),g.send(D))},Mo:()=>g.close()}),N=(D,z,j)=>{D.listen(z,(B=>{try{j(B)}catch(H){setTimeout((()=>{throw H}),0)}}))};return N(g,or.EventType.OPEN,(()=>{P||(b(wt,`RPC '${t}' stream ${s} transport opened.`),C.Qo())})),N(g,or.EventType.CLOSE,(()=>{P||(P=!0,b(wt,`RPC '${t}' stream ${s} transport closed`),C.Uo())})),N(g,or.EventType.ERROR,(D=>{P||(P=!0,dn(wt,`RPC '${t}' stream ${s} transport errored:`,D),C.Uo(new x(S.UNAVAILABLE,"The operation could not be completed")))})),N(g,or.EventType.MESSAGE,(D=>{var z;if(!P){const j=D.data[0];L(!!j);const B=j,H=B?.error||((z=B[0])===null||z===void 0?void 0:z.error);if(H){b(wt,`RPC '${t}' stream ${s} received error:`,H);const tt=H.status;let Q=(function(y){const E=ct[y];if(E!==void 0)return rh(E)})(tt),I=H.message;Q===void 0&&(Q=S.INTERNAL,I="Unknown error status: "+tt+" with message "+H.message),P=!0,C.Uo(new x(Q,I)),g.close()}else b(wt,`RPC '${t}' stream ${s} received:`,j),C.Ko(j)}})),N(u,nc.STAT_EVENT,(D=>{D.stat===Ji.PROXY?b(wt,`RPC '${t}' stream ${s} detected buffering proxy`):D.stat===Ji.NOPROXY&&b(wt,`RPC '${t}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{C.$o()}),0),C}}/**
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
 */function Kh(){return typeof window<"u"?window:null}function As(){return typeof document<"u"?document:null}/**
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
 */function ci(r){return new xm(r,!0)}/**
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
 */class Gh{constructor(t,e,n=1e3,s=1.5,i=6e4){this.Ti=t,this.timerId=e,this.Go=n,this.zo=s,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const e=Math.floor(this.Ho+this.e_()),n=Math.max(0,Date.now()-this.Yo),s=Math.max(0,e-n);s>0&&b("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,(()=>(this.Yo=Date.now(),t()))),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const Nl="PersistentStream";class $h{constructor(t,e,n,s,i,a,u,c){this.Ti=t,this.n_=n,this.r_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=c,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Gh(t,e)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,(()=>this.T_())))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,e){this.E_(),this.d_(),this.a_.cancel(),this.i_++,t!==4?this.a_.reset():e&&e.code===S.RESOURCE_EXHAUSTED?(ut(e.toString()),ut("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(e)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),e=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,s])=>{this.i_===e&&this.V_(n,s)}),(n=>{t((()=>{const s=new x(S.UNKNOWN,"Fetching auth token failed: "+n.message);return this.m_(s)}))}))}V_(t,e){const n=this.R_(this.i_);this.stream=this.f_(t,e),this.stream.xo((()=>{n((()=>this.listener.xo()))})),this.stream.No((()=>{n((()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,(()=>(this.c_()&&(this.state=3),Promise.resolve()))),this.listener.No())))})),this.stream.Lo((s=>{n((()=>this.m_(s)))})),this.stream.onMessage((s=>{n((()=>++this.__==1?this.g_(s):this.onNext(s)))}))}l_(){this.state=5,this.a_.Xo((async()=>{this.state=0,this.start()}))}m_(t){return b(Nl,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return e=>{this.Ti.enqueueAndForget((()=>this.i_===t?e():(b(Nl,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Vg extends $h{constructor(t,e,n,s,i,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,a),this.serializer=i}f_(t,e){return this.connection.Wo("Listen",t,e)}g_(t){return this.onNext(t)}onNext(t){this.a_.reset();const e=Nm(this.serializer,t),n=(function(i){if(!("targetChange"in i))return U.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?U.min():a.readTime?bt(a.readTime):U.min()})(t);return this.listener.p_(e,n)}y_(t){const e={};e.database=mo(this.serializer),e.addTarget=(function(i,a){let u;const c=a.target;if(u=Ns(c)?{documents:hh(i,c)}:{query:dh(i,c).ht},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=oh(i,a.resumeToken);const d=ho(i,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(U.min())>0){u.readTime=An(i,a.snapshotVersion.toTimestamp());const d=ho(i,a.expectedCount);d!==null&&(u.expectedCount=d)}return u})(this.serializer,t);const n=Om(this.serializer,t);n&&(e.labels=n),this.I_(e)}w_(t){const e={};e.database=mo(this.serializer),e.removeTarget=t,this.I_(e)}}class Pg extends $h{constructor(t,e,n,s,i,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,a),this.serializer=i}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(t,e){return this.connection.Wo("Write",t,e)}g_(t){return L(!!t.streamToken),this.lastStreamToken=t.streamToken,L(!t.writeResults||t.writeResults.length===0),this.listener.D_()}onNext(t){L(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_.reset();const e=Mm(t.writeResults,t.commitTime),n=bt(t.commitTime);return this.listener.v_(n,e)}C_(){const t={};t.database=mo(this.serializer),this.I_(t)}b_(t){const e={streamToken:this.lastStreamToken,writes:t.map((n=>Ls(this.serializer,n)))};this.I_(e)}}/**
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
 */class Sg{}class bg extends Sg{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new x(S.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,e,n,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.So(t,fo(e,n),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new x(S.UNKNOWN,i.toString())}))}Co(t,e,n,s,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,u])=>this.connection.Co(t,fo(e,n),s,a,u,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new x(S.UNKNOWN,a.toString())}))}terminate(){this.F_=!0,this.connection.terminate()}}class Cg{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve()))))}q_(t){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,t==="Online"&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const e=`Could not reach Cloud Firestore backend. ${t}
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
 */const $e="RemoteStore";class xg{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To((a=>{n.enqueueAndForget((async()=>{Qe(this)&&(b($e,"Restarting streams for network reachability change."),await(async function(c){const d=F(c);d.W_.add(4),await Lr(d),d.j_.set("Unknown"),d.W_.delete(4),await hi(d)})(this))}))})),this.j_=new Cg(n,s)}}async function hi(r){if(Qe(r))for(const t of r.G_)await t(!0)}async function Lr(r){for(const t of r.G_)await t(!1)}function di(r,t){const e=F(r);e.K_.has(t.targetId)||(e.K_.set(t.targetId,t),ta(e)?Zo(e):Nn(e).c_()&&Jo(e,t))}function Vn(r,t){const e=F(r),n=Nn(e);e.K_.delete(t),n.c_()&&Qh(e,t),e.K_.size===0&&(n.c_()?n.P_():Qe(e)&&e.j_.set("Unknown"))}function Jo(r,t){if(r.H_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(U.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Nn(r).y_(t)}function Qh(r,t){r.H_.Ne(t),Nn(r).w_(t)}function Zo(r){r.H_=new Pm({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>r.K_.get(t)||null,it:()=>r.datastore.serializer.databaseId}),Nn(r).start(),r.j_.B_()}function ta(r){return Qe(r)&&!Nn(r).u_()&&r.K_.size>0}function Qe(r){return F(r).W_.size===0}function Wh(r){r.H_=void 0}async function Dg(r){r.j_.set("Online")}async function kg(r){r.K_.forEach(((t,e)=>{Jo(r,t)}))}async function Ng(r,t){Wh(r),ta(r)?(r.j_.q_(t),Zo(r)):r.j_.set("Unknown")}async function Mg(r,t,e){if(r.j_.set("Online"),t instanceof ih&&t.state===2&&t.cause)try{await(async function(s,i){const a=i.cause;for(const u of i.targetIds)s.K_.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.K_.delete(u),s.H_.removeTarget(u))})(r,t)}catch(n){b($e,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await $s(r,n)}else if(t instanceof ws?r.H_.We(t):t instanceof sh?r.H_.Ze(t):r.H_.je(t),!e.isEqual(U.min()))try{const n=await Oh(r.localStore);e.compareTo(n)>=0&&await(function(i,a){const u=i.H_.ot(a);return u.targetChanges.forEach(((c,d)=>{if(c.resumeToken.approximateByteSize()>0){const m=i.K_.get(d);m&&i.K_.set(d,m.withResumeToken(c.resumeToken,a))}})),u.targetMismatches.forEach(((c,d)=>{const m=i.K_.get(c);if(!m)return;i.K_.set(c,m.withResumeToken(lt.EMPTY_BYTE_STRING,m.snapshotVersion)),Qh(i,c);const g=new Xt(m.target,c,d,m.sequenceNumber);Jo(i,g)})),i.remoteSyncer.applyRemoteEvent(u)})(r,e)}catch(n){b($e,"Failed to raise snapshot:",n),await $s(r,n)}}async function $s(r,t,e){if(!Ie(t))throw t;r.W_.add(1),await Lr(r),r.j_.set("Offline"),e||(e=()=>Oh(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{b($e,"Retrying IndexedDB access"),await e(),r.W_.delete(1),await hi(r)}))}function Hh(r,t){return t().catch((e=>$s(r,e,t)))}async function kn(r){const t=F(r),e=_e(t);let n=t.U_.length>0?t.U_[t.U_.length-1].batchId:Me;for(;Og(t);)try{const s=await Ig(t.localStore,n);if(s===null){t.U_.length===0&&e.P_();break}n=s.batchId,Fg(t,s)}catch(s){await $s(t,s)}Yh(t)&&Xh(t)}function Og(r){return Qe(r)&&r.U_.length<10}function Fg(r,t){r.U_.push(t);const e=_e(r);e.c_()&&e.S_&&e.b_(t.mutations)}function Yh(r){return Qe(r)&&!_e(r).u_()&&r.U_.length>0}function Xh(r){_e(r).start()}async function Lg(r){_e(r).C_()}async function Ug(r){const t=_e(r);for(const e of r.U_)t.b_(e.mutations)}async function Bg(r,t,e){const n=r.U_.shift(),s=Bo.from(n,t,e);await Hh(r,(()=>r.remoteSyncer.applySuccessfulWrite(s))),await kn(r)}async function qg(r,t){t&&_e(r).S_&&await(async function(n,s){if((function(a){return Rm(a)&&a!==S.ABORTED})(s.code)){const i=n.U_.shift();_e(n).h_(),await Hh(n,(()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s))),await kn(n)}})(r,t),Yh(r)&&Xh(r)}async function Ml(r,t){const e=F(r);e.asyncQueue.verifyOperationInProgress(),b($e,"RemoteStore received new credentials");const n=Qe(e);e.W_.add(3),await Lr(e),n&&e.j_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.W_.delete(3),await hi(e)}async function vo(r,t){const e=F(r);t?(e.W_.delete(2),await hi(e)):t||(e.W_.add(2),await Lr(e),e.j_.set("Unknown"))}function Nn(r){return r.J_||(r.J_=(function(e,n,s){const i=F(e);return i.M_(),new Vg(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(r.datastore,r.asyncQueue,{xo:Dg.bind(null,r),No:kg.bind(null,r),Lo:Ng.bind(null,r),p_:Mg.bind(null,r)}),r.G_.push((async t=>{t?(r.J_.h_(),ta(r)?Zo(r):r.j_.set("Unknown")):(await r.J_.stop(),Wh(r))}))),r.J_}function _e(r){return r.Y_||(r.Y_=(function(e,n,s){const i=F(e);return i.M_(),new Pg(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(r.datastore,r.asyncQueue,{xo:()=>Promise.resolve(),No:Lg.bind(null,r),Lo:qg.bind(null,r),D_:Ug.bind(null,r),v_:Bg.bind(null,r)}),r.G_.push((async t=>{t?(r.Y_.h_(),await kn(r)):(await r.Y_.stop(),r.U_.length>0&&(b($e,`Stopping write stream with ${r.U_.length} pending writes`),r.U_=[]))}))),r.Y_}/**
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
 */class ea{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new Gt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,s,i){const a=Date.now()+n,u=new ea(t,e,a,s,i);return u.start(n),u}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function na(r,t){if(ut("AsyncQueue",`${t}: ${r}`),Ie(r))return new x(S.UNAVAILABLE,`${t}: ${r}`);throw r}/**
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
 */class hn{static emptySet(t){return new hn(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||M.comparator(e.key,n.key):(e,n)=>M.comparator(e.key,n.key),this.keyedMap=ar(),this.sortedSet=new et(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof hn)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new hn;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
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
 */class Ol{constructor(){this.Z_=new et(M.comparator)}track(t){const e=t.doc.key,n=this.Z_.get(e);n?t.type!==0&&n.type===3?this.Z_=this.Z_.insert(e,t):t.type===3&&n.type!==1?this.Z_=this.Z_.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.Z_=this.Z_.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.Z_=this.Z_.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.Z_=this.Z_.remove(e):t.type===1&&n.type===2?this.Z_=this.Z_.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.Z_=this.Z_.insert(e,{type:2,doc:t.doc}):O():this.Z_=this.Z_.insert(e,t)}X_(){const t=[];return this.Z_.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Pn{constructor(t,e,n,s,i,a,u,c,d){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=c,this.hasCachedResults=d}static fromInitialDocuments(t,e,n,s,i){const a=[];return e.forEach((u=>{a.push({type:0,doc:u})})),new Pn(t,e,hn.emptySet(e),a,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ri(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
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
 */class jg{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some((t=>t.ra()))}}class zg{constructor(){this.queries=Fl(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(e,n){const s=F(e),i=s.queries;s.queries=Fl(),i.forEach(((a,u)=>{for(const c of u.ta)c.onError(n)}))})(this,new x(S.ABORTED,"Firestore shutting down"))}}function Fl(){return new te((r=>zc(r)),ri)}async function ra(r,t){const e=F(r);let n=3;const s=t.query;let i=e.queries.get(s);i?!i.na()&&t.ra()&&(n=2):(i=new jg,n=t.ra()?0:1);try{switch(n){case 0:i.ea=await e.onListen(s,!0);break;case 1:i.ea=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const u=na(a,`Initialization of query '${an(t.query)}' failed`);return void t.onError(u)}e.queries.set(s,i),i.ta.push(t),t.sa(e.onlineState),i.ea&&t.oa(i.ea)&&ia(e)}async function sa(r,t){const e=F(r),n=t.query;let s=3;const i=e.queries.get(n);if(i){const a=i.ta.indexOf(t);a>=0&&(i.ta.splice(a,1),i.ta.length===0?s=t.ra()?0:1:!i.na()&&t.ra()&&(s=2))}switch(s){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function Kg(r,t){const e=F(r);let n=!1;for(const s of t){const i=s.query,a=e.queries.get(i);if(a){for(const u of a.ta)u.oa(s)&&(n=!0);a.ea=s}}n&&ia(e)}function Gg(r,t,e){const n=F(r),s=n.queries.get(t);if(s)for(const i of s.ta)i.onError(e);n.queries.delete(t)}function ia(r){r.ia.forEach((t=>{t.next()}))}var wo,Ll;(Ll=wo||(wo={}))._a="default",Ll.Cache="cache";class oa{constructor(t,e,n){this.query=t,this.aa=e,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=n||{}}oa(t){if(!this.options.includeMetadataChanges){const n=[];for(const s of t.docChanges)s.type!==3&&n.push(s);t=new Pn(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ua?this.la(t)&&(this.aa.next(t),e=!0):this.ha(t,this.onlineState)&&(this.Pa(t),e=!0),this.ca=t,e}onError(t){this.aa.error(t)}sa(t){this.onlineState=t;let e=!1;return this.ca&&!this.ua&&this.ha(this.ca,t)&&(this.Pa(this.ca),e=!0),e}ha(t,e){if(!t.fromCache||!this.ra())return!0;const n=e!=="Offline";return(!this.options.Ta||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}la(t){if(t.docChanges.length>0)return!0;const e=this.ca&&this.ca.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}Pa(t){t=Pn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ua=!0,this.aa.next(t)}ra(){return this.options.source!==wo.Cache}}/**
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
 */class Jh{constructor(t){this.key=t}}class Zh{constructor(t){this.key=t}}class $g{constructor(t,e){this.query=t,this.fa=e,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=K(),this.mutatedKeys=K(),this.ya=Gc(t),this.wa=new hn(this.ya)}get Sa(){return this.fa}ba(t,e){const n=e?e.Da:new Ol,s=e?e.wa:this.wa;let i=e?e.mutatedKeys:this.mutatedKeys,a=s,u=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((m,g)=>{const T=s.get(m),P=Nr(this.query,g)?g:null,C=!!T&&this.mutatedKeys.has(T.key),N=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let D=!1;T&&P?T.data.isEqual(P.data)?C!==N&&(n.track({type:3,doc:P}),D=!0):this.va(T,P)||(n.track({type:2,doc:P}),D=!0,(c&&this.ya(P,c)>0||d&&this.ya(P,d)<0)&&(u=!0)):!T&&P?(n.track({type:0,doc:P}),D=!0):T&&!P&&(n.track({type:1,doc:T}),D=!0,(c||d)&&(u=!0)),D&&(P?(a=a.add(P),i=N?i.add(m):i.delete(m)):(a=a.delete(m),i=i.delete(m)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),i=i.delete(m.key),n.track({type:1,doc:m})}return{wa:a,Da:n,ls:u,mutatedKeys:i}}va(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,s){const i=this.wa;this.wa=t.wa,this.mutatedKeys=t.mutatedKeys;const a=t.Da.X_();a.sort(((m,g)=>(function(P,C){const N=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O()}};return N(P)-N(C)})(m.type,g.type)||this.ya(m.doc,g.doc))),this.Ca(n),s=s!=null&&s;const u=e&&!s?this.Fa():[],c=this.pa.size===0&&this.current&&!s?1:0,d=c!==this.ga;return this.ga=c,a.length!==0||d?{snapshot:new Pn(this.query,t.wa,i,a,t.mutatedKeys,c===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ma:u}:{Ma:u}}sa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new Ol,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(t){return!this.fa.has(t)&&!!this.wa.has(t)&&!this.wa.get(t).hasLocalMutations}Ca(t){t&&(t.addedDocuments.forEach((e=>this.fa=this.fa.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.fa=this.fa.delete(e))),this.current=t.current)}Fa(){if(!this.current)return[];const t=this.pa;this.pa=K(),this.wa.forEach((n=>{this.xa(n.key)&&(this.pa=this.pa.add(n.key))}));const e=[];return t.forEach((n=>{this.pa.has(n)||e.push(new Zh(n))})),this.pa.forEach((n=>{t.has(n)||e.push(new Jh(n))})),e}Oa(t){this.fa=t.gs,this.pa=K();const e=this.ba(t.documents);return this.applyChanges(e,!0)}Na(){return Pn.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Mn="SyncEngine";class Qg{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Wg{constructor(t){this.key=t,this.Ba=!1}}class Hg{constructor(t,e,n,s,i,a){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.La={},this.ka=new te((u=>zc(u)),ri),this.qa=new Map,this.Qa=new Set,this.$a=new et(M.comparator),this.Ua=new Map,this.Ka=new $o,this.Wa={},this.Ga=new Map,this.za=Ge.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function Yg(r,t,e=!0){const n=fi(r);let s;const i=n.ka.get(t);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Na()):s=await td(n,t,e,!0),s}async function Xg(r,t){const e=fi(r);await td(e,t,!0,!1)}async function td(r,t,e,n){const s=await zs(r.localStore,Mt(t)),i=s.targetId,a=r.sharedClientState.addLocalQueryTarget(i,e);let u;return n&&(u=await aa(r,t,i,a==="current",s.resumeToken)),r.isPrimaryClient&&e&&di(r.remoteStore,s),u}async function aa(r,t,e,n,s){r.Ha=(g,T,P)=>(async function(N,D,z,j){let B=D.view.ba(z);B.ls&&(B=await To(N.localStore,D.query,!1).then((({documents:I})=>D.view.ba(I,B))));const H=j&&j.targetChanges.get(D.targetId),tt=j&&j.targetMismatches.get(D.targetId)!=null,Q=D.view.applyChanges(B,N.isPrimaryClient,H,tt);return Ao(N,D.targetId,Q.Ma),Q.snapshot})(r,g,T,P);const i=await To(r.localStore,t,!0),a=new $g(t,i.gs),u=a.ba(i.documents),c=Fr.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",s),d=a.applyChanges(u,r.isPrimaryClient,c);Ao(r,e,d.Ma);const m=new Qg(t,e,a);return r.ka.set(t,m),r.qa.has(e)?r.qa.get(e).push(t):r.qa.set(e,[t]),d.snapshot}async function Jg(r,t,e){const n=F(r),s=n.ka.get(t),i=n.qa.get(s.targetId);if(i.length>1)return n.qa.set(s.targetId,i.filter((a=>!ri(a,t)))),void n.ka.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Rn(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),e&&Vn(n.remoteStore,s.targetId),Sn(n,s.targetId)})).catch(Te)):(Sn(n,s.targetId),await Rn(n.localStore,s.targetId,!0))}async function Zg(r,t){const e=F(r),n=e.ka.get(t),s=e.qa.get(n.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),Vn(e.remoteStore,n.targetId))}async function tp(r,t,e){const n=ha(r);try{const s=await(function(a,u){const c=F(a),d=it.now(),m=u.reduce(((P,C)=>P.add(C.key)),K());let g,T;return c.persistence.runTransaction("Locally write mutations","readwrite",(P=>{let C=Nt(),N=K();return c.ds.getEntries(P,m).next((D=>{C=D,C.forEach(((z,j)=>{j.isValidDocument()||(N=N.add(z))}))})).next((()=>c.localDocuments.getOverlayedDocuments(P,C))).next((D=>{g=D;const z=[];for(const j of u){const B=wm(j,g.get(j.key).overlayedDocument);B!=null&&z.push(new ee(j.key,B,kc(B.value.mapValue),ht.exists(!0)))}return c.mutationQueue.addMutationBatch(P,d,z,u)})).next((D=>{T=D;const z=D.applyToLocalDocumentSet(g,N);return c.documentOverlayCache.saveOverlays(P,D.batchId,z)}))})).then((()=>({batchId:T.batchId,changes:Qc(g)})))})(n.localStore,t);n.sharedClientState.addPendingMutation(s.batchId),(function(a,u,c){let d=a.Wa[a.currentUser.toKey()];d||(d=new et(q)),d=d.insert(u,c),a.Wa[a.currentUser.toKey()]=d})(n,s.batchId,e),await ve(n,s.changes),await kn(n.remoteStore)}catch(s){const i=na(s,"Failed to persist write");e.reject(i)}}async function ed(r,t){const e=F(r);try{const n=await yg(e.localStore,t);t.targetChanges.forEach(((s,i)=>{const a=e.Ua.get(i);a&&(L(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.Ba=!0:s.modifiedDocuments.size>0?L(a.Ba):s.removedDocuments.size>0&&(L(a.Ba),a.Ba=!1))})),await ve(e,n,t)}catch(n){await Te(n)}}function Ul(r,t,e){const n=F(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const s=[];n.ka.forEach(((i,a)=>{const u=a.view.sa(t);u.snapshot&&s.push(u.snapshot)})),(function(a,u){const c=F(a);c.onlineState=u;let d=!1;c.queries.forEach(((m,g)=>{for(const T of g.ta)T.sa(u)&&(d=!0)})),d&&ia(c)})(n.eventManager,t),s.length&&n.La.p_(s),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function ep(r,t,e){const n=F(r);n.sharedClientState.updateQueryState(t,"rejected",e);const s=n.Ua.get(t),i=s&&s.key;if(i){let a=new et(M.comparator);a=a.insert(i,at.newNoDocument(i,U.min()));const u=K().add(i),c=new Or(U.min(),new Map,new et(q),a,u);await ed(n,c),n.$a=n.$a.remove(i),n.Ua.delete(t),ca(n)}else await Rn(n.localStore,t,!1).then((()=>Sn(n,t,e))).catch(Te)}async function np(r,t){const e=F(r),n=t.batch.batchId;try{const s=await _g(e.localStore,t);la(e,n,null),ua(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await ve(e,s)}catch(s){await Te(s)}}async function rp(r,t,e){const n=F(r);try{const s=await(function(a,u){const c=F(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let m;return c.mutationQueue.lookupMutationBatch(d,u).next((g=>(L(g!==null),m=g.keys(),c.mutationQueue.removeMutationBatch(d,g)))).next((()=>c.mutationQueue.performConsistencyCheck(d))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(d,m,u))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m))).next((()=>c.localDocuments.getDocuments(d,m)))}))})(n.localStore,t);la(n,t,e),ua(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await ve(n,s)}catch(s){await Te(s)}}function ua(r,t){(r.Ga.get(t)||[]).forEach((e=>{e.resolve()})),r.Ga.delete(t)}function la(r,t,e){const n=F(r);let s=n.Wa[n.currentUser.toKey()];if(s){const i=s.get(t);i&&(e?i.reject(e):i.resolve(),s=s.remove(t)),n.Wa[n.currentUser.toKey()]=s}}function Sn(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.qa.get(t))r.ka.delete(n),e&&r.La.Ja(n,e);r.qa.delete(t),r.isPrimaryClient&&r.Ka.br(t).forEach((n=>{r.Ka.containsKey(n)||nd(r,n)}))}function nd(r,t){r.Qa.delete(t.path.canonicalString());const e=r.$a.get(t);e!==null&&(Vn(r.remoteStore,e),r.$a=r.$a.remove(t),r.Ua.delete(e),ca(r))}function Ao(r,t,e){for(const n of e)n instanceof Jh?(r.Ka.addReference(n.key,t),sp(r,n)):n instanceof Zh?(b(Mn,"Document no longer in limbo: "+n.key),r.Ka.removeReference(n.key,t),r.Ka.containsKey(n.key)||nd(r,n.key)):O()}function sp(r,t){const e=t.key,n=e.path.canonicalString();r.$a.get(e)||r.Qa.has(n)||(b(Mn,"New document in limbo: "+e),r.Qa.add(n),ca(r))}function ca(r){for(;r.Qa.size>0&&r.$a.size<r.maxConcurrentLimboResolutions;){const t=r.Qa.values().next().value;r.Qa.delete(t);const e=new M(Y.fromString(t)),n=r.za.next();r.Ua.set(n,new Wg(e)),r.$a=r.$a.insert(e,n),di(r.remoteStore,new Xt(Mt(kr(e.path)),n,"TargetPurposeLimboResolution",Ct.ae))}}async function ve(r,t,e){const n=F(r),s=[],i=[],a=[];n.ka.isEmpty()||(n.ka.forEach(((u,c)=>{a.push(n.Ha(c,t,e).then((d=>{var m;if((d||e)&&n.isPrimaryClient){const g=d?!d.fromCache:(m=e?.targetChanges.get(c.targetId))===null||m===void 0?void 0:m.current;n.sharedClientState.updateQueryState(c.targetId,g?"current":"not-current")}if(d){s.push(d);const g=Ho.Yi(c.targetId,d);i.push(g)}})))})),await Promise.all(a),n.La.p_(s),await(async function(c,d){const m=F(c);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",(g=>w.forEach(d,(T=>w.forEach(T.Hi,(P=>m.persistence.referenceDelegate.addReference(g,T.targetId,P))).next((()=>w.forEach(T.Ji,(P=>m.persistence.referenceDelegate.removeReference(g,T.targetId,P)))))))))}catch(g){if(!Ie(g))throw g;b(Yo,"Failed to update sequence numbers: "+g)}for(const g of d){const T=g.targetId;if(!g.fromCache){const P=m.Ts.get(T),C=P.snapshotVersion,N=P.withLastLimboFreeSnapshotVersion(C);m.Ts=m.Ts.insert(T,N)}}})(n.localStore,i))}async function ip(r,t){const e=F(r);if(!e.currentUser.isEqual(t)){b(Mn,"User change. New user:",t.toKey());const n=await Mh(e.localStore,t);e.currentUser=t,(function(i,a){i.Ga.forEach((u=>{u.forEach((c=>{c.reject(new x(S.CANCELLED,a))}))})),i.Ga.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await ve(e,n.Rs)}}function op(r,t){const e=F(r),n=e.Ua.get(t);if(n&&n.Ba)return K().add(n.key);{let s=K();const i=e.qa.get(t);if(!i)return s;for(const a of i){const u=e.ka.get(a);s=s.unionWith(u.view.Sa)}return s}}async function ap(r,t){const e=F(r),n=await To(e.localStore,t.query,!0),s=t.view.Oa(n);return e.isPrimaryClient&&Ao(e,t.targetId,s.Ma),s}async function up(r,t){const e=F(r);return Lh(e.localStore,t).then((n=>ve(e,n)))}async function lp(r,t,e,n){const s=F(r),i=await(function(u,c){const d=F(u),m=F(d.mutationQueue);return d.persistence.runTransaction("Lookup mutation documents","readonly",(g=>m.Ln(g,c).next((T=>T?d.localDocuments.getDocuments(g,T):w.resolve(null)))))})(s.localStore,t);i!==null?(e==="pending"?await kn(s.remoteStore):e==="acknowledged"||e==="rejected"?(la(s,t,n||null),ua(s,t),(function(u,c){F(F(u).mutationQueue).qn(c)})(s.localStore,t)):O(),await ve(s,i)):b(Mn,"Cannot apply mutation batch with id: "+t)}async function cp(r,t){const e=F(r);if(fi(e),ha(e),t===!0&&e.ja!==!0){const n=e.sharedClientState.getAllActiveQueryTargets(),s=await Bl(e,n.toArray());e.ja=!0,await vo(e.remoteStore,!0);for(const i of s)di(e.remoteStore,i)}else if(t===!1&&e.ja!==!1){const n=[];let s=Promise.resolve();e.qa.forEach(((i,a)=>{e.sharedClientState.isLocalQueryTarget(a)?n.push(a):s=s.then((()=>(Sn(e,a),Rn(e.localStore,a,!0)))),Vn(e.remoteStore,a)})),await s,await Bl(e,n),(function(a){const u=F(a);u.Ua.forEach(((c,d)=>{Vn(u.remoteStore,d)})),u.Ka.Dr(),u.Ua=new Map,u.$a=new et(M.comparator)})(e),e.ja=!1,await vo(e.remoteStore,!1)}}async function Bl(r,t,e){const n=F(r),s=[],i=[];for(const a of t){let u;const c=n.qa.get(a);if(c&&c.length!==0){u=await zs(n.localStore,Mt(c[0]));for(const d of c){const m=n.ka.get(d),g=await ap(n,m);g.snapshot&&i.push(g.snapshot)}}else{const d=await Fh(n.localStore,a);u=await zs(n.localStore,d),await aa(n,rd(d),a,!1,u.resumeToken)}s.push(u)}return n.La.p_(i),s}function rd(r){return qc(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function hp(r){return(function(e){return F(F(e).persistence).zi()})(F(r).localStore)}async function dp(r,t,e,n){const s=F(r);if(s.ja)return void b(Mn,"Ignoring unexpected query state notification.");const i=s.qa.get(t);if(i&&i.length>0)switch(e){case"current":case"not-current":{const a=await Lh(s.localStore,Kc(i[0])),u=Or.createSynthesizedRemoteEventForCurrentChange(t,e==="current",lt.EMPTY_BYTE_STRING);await ve(s,a,u);break}case"rejected":await Rn(s.localStore,t,!0),Sn(s,t,n);break;default:O()}}async function fp(r,t,e){const n=fi(r);if(n.ja){for(const s of t){if(n.qa.has(s)&&n.sharedClientState.isActiveQueryTarget(s)){b(Mn,"Adding an already active target "+s);continue}const i=await Fh(n.localStore,s),a=await zs(n.localStore,i);await aa(n,rd(i),a.targetId,!1,a.resumeToken),di(n.remoteStore,a)}for(const s of e)n.qa.has(s)&&await Rn(n.localStore,s,!1).then((()=>{Vn(n.remoteStore,s),Sn(n,s)})).catch(Te)}}function fi(r){const t=F(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=ed.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=op.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=ep.bind(null,t),t.La.p_=Kg.bind(null,t.eventManager),t.La.Ja=Gg.bind(null,t.eventManager),t}function ha(r){const t=F(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=np.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=rp.bind(null,t),t}class br{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=ci(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,e){return null}nu(t,e){return null}eu(t){return Nh(this.persistence,new kh,t.initialUser,this.serializer)}Xa(t){return new Qo(li.ri,this.serializer)}Za(t){return new zh}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}br.provider={build:()=>new br};class mp extends br{constructor(t){super(),this.cacheSizeBytes=t}tu(t,e){L(this.persistence.referenceDelegate instanceof js);const n=this.persistence.referenceDelegate.garbageCollector;return new Ph(n,t.asyncQueue,e)}Xa(t){const e=this.cacheSizeBytes!==void 0?At.withCacheSize(this.cacheSizeBytes):At.DEFAULT;return new Qo((n=>js.ri(n,e)),this.serializer)}}class sd extends br{constructor(t,e,n){super(),this.ru=t,this.cacheSizeBytes=e,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await this.ru.initialize(this,t),await ha(this.ru.syncEngine),await kn(this.ru.remoteStore),await this.persistence.Ci((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}eu(t){return Nh(this.persistence,new kh,t.initialUser,this.serializer)}tu(t,e){const n=this.persistence.referenceDelegate.garbageCollector;return new Ph(n,t.asyncQueue,e)}nu(t,e){const n=new Vf(e,this.persistence);return new Rf(t.asyncQueue,n)}Xa(t){const e=Dh(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?At.withCacheSize(this.cacheSizeBytes):At.DEFAULT;return new Wo(this.synchronizeTabs,e,t.clientId,n,t.asyncQueue,Kh(),As(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Za(t){return new zh}}class gp extends sd{constructor(t,e){super(t,e,!1),this.ru=t,this.cacheSizeBytes=e,this.synchronizeTabs=!0}async initialize(t){await super.initialize(t);const e=this.ru.syncEngine;this.sharedClientState instanceof Wi&&(this.sharedClientState.syncEngine={uo:lp.bind(null,e),co:dp.bind(null,e),lo:fp.bind(null,e),zi:hp.bind(null,e),ao:up.bind(null,e)},await this.sharedClientState.start()),await this.persistence.Ci((async n=>{await cp(this.ru.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())}))}Za(t){const e=Kh();if(!Wi.D(e))throw new x(S.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=Dh(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey);return new Wi(e,t.asyncQueue,n,t.clientId,t.initialUser)}}class Cr{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Ul(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=ip.bind(null,this.syncEngine),await vo(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new zg})()}createDatastore(t){const e=ci(t.databaseInfo.databaseId),n=(function(i){return new Rg(i)})(t.databaseInfo);return(function(i,a,u,c){return new bg(i,a,u,c)})(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return(function(n,s,i,a,u){return new xg(n,s,i,a,u)})(this.localStore,this.datastore,t.asyncQueue,(e=>Ul(this.syncEngine,e,0)),(function(){return kl.D()?new kl:new Eg})())}createSyncEngine(t,e){return(function(s,i,a,u,c,d,m){const g=new Hg(s,i,a,u,c,d);return m&&(g.ja=!0),g})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await(async function(s){const i=F(s);b($e,"RemoteStore shutting down."),i.W_.add(5),await Lr(i),i.z_.shutdown(),i.j_.set("Unknown")})(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Cr.provider={build:()=>new Cr};/**
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
 */class da{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.iu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.iu(this.observer.error,t):ut("Uncaught Error in snapshot listener:",t.toString()))}su(){this.muted=!0}iu(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
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
 */const ye="FirestoreClient";class pp{constructor(t,e,n,s,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=mt.UNAUTHENTICATED,this.clientId=ac.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,(async a=>{b(ye,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(n,(a=>(b(ye,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Gt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=na(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Yi(r,t){r.asyncQueue.verifyOperationInProgress(),b(ye,"Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener((async s=>{n.isEqual(s)||(await Mh(t.localStore,s),n=s)})),t.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=t}async function ql(r,t){r.asyncQueue.verifyOperationInProgress();const e=await _p(r);b(ye,"Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener((n=>Ml(t.remoteStore,n))),r.setAppCheckTokenChangeListener(((n,s)=>Ml(t.remoteStore,s))),r._onlineComponents=t}async function _p(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){b(ye,"Using user provided OfflineComponentProvider");try{await Yi(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(s){return s.name==="FirebaseError"?s.code===S.FAILED_PRECONDITION||s.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(e))throw e;dn("Error using user provided cache. Falling back to memory cache: "+e),await Yi(r,new br)}}else b(ye,"Using default OfflineComponentProvider"),await Yi(r,new mp(void 0));return r._offlineComponents}async function id(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(b(ye,"Using user provided OnlineComponentProvider"),await ql(r,r._uninitializedComponentsProvider._online)):(b(ye,"Using default OnlineComponentProvider"),await ql(r,new Cr))),r._onlineComponents}function yp(r){return id(r).then((t=>t.syncEngine))}async function Qs(r){const t=await id(r),e=t.eventManager;return e.onListen=Yg.bind(null,t.syncEngine),e.onUnlisten=Jg.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Xg.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Zg.bind(null,t.syncEngine),e}function od(r,t,e={}){const n=new Gt;return r.asyncQueue.enqueueAndForget((async()=>(function(i,a,u,c,d){const m=new da({next:T=>{m.su(),a.enqueueAndForget((()=>sa(i,g)));const P=T.docs.has(u);!P&&T.fromCache?d.reject(new x(S.UNAVAILABLE,"Failed to get document because the client is offline.")):P&&T.fromCache&&c&&c.source==="server"?d.reject(new x(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(T)},error:T=>d.reject(T)}),g=new oa(kr(u.path),m,{includeMetadataChanges:!0,Ta:!0});return ra(i,g)})(await Qs(r),r.asyncQueue,t,e,n))),n.promise}function Tp(r,t,e={}){const n=new Gt;return r.asyncQueue.enqueueAndForget((async()=>(function(i,a,u,c,d){const m=new da({next:T=>{m.su(),a.enqueueAndForget((()=>sa(i,g))),T.fromCache&&c.source==="server"?d.reject(new x(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(T)},error:T=>d.reject(T)}),g=new oa(u,m,{includeMetadataChanges:!0,Ta:!0});return ra(i,g)})(await Qs(r),r.asyncQueue,t,e,n))),n.promise}/**
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
 */function ad(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
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
 */const jl=new Map;/**
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
 */function ud(r,t,e){if(!e)throw new x(S.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function Ip(r,t,e,n){if(t===!0&&n===!0)throw new x(S.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function zl(r){if(!M.isDocumentKey(r))throw new x(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Kl(r){if(M.isDocumentKey(r))throw new x(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function mi(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=(function(n){return n.constructor?n.constructor.name:null})(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":O()}function _t(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new x(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=mi(r);throw new x(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}function Ep(r,t){if(t<=0)throw new x(S.INVALID_ARGUMENT,`Function ${r}() requires a positive number, but it was: ${t}.`)}/**
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
 */const ld="firestore.googleapis.com",Gl=!0;class $l{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new x(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ld,this.ssl=Gl}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:Gl;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=vh;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Vh)throw new x(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Ip("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ad((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new x(S.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new x(S.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new x(S.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(n,s){return n.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class gi{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $l({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new x(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new x(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $l(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new mf;switch(n.type){case"firstParty":return new yf(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new x(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const n=jl.get(e);n&&(b("ComponentProvider","Removing Datastore"),jl.delete(e),n.terminate())})(this),Promise.resolve()}}function Up(r,t,e,n={}){var s;const i=(r=_t(r,gi))._getSettings(),a=Object.assign(Object.assign({},i),{emulatorOptions:r._getEmulatorOptions()}),u=`${t}:${e}`;i.host!==ld&&i.host!==u&&dn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},i),{host:u,ssl:!1,emulatorOptions:n});if(!Hs(c,a)&&(r._setSettings(c),n.mockUserToken)){let d,m;if(typeof n.mockUserToken=="string")d=n.mockUserToken,m=mt.MOCK_USER;else{d=hf(n.mockUserToken,(s=r._app)===null||s===void 0?void 0:s.options.projectId);const g=n.mockUserToken.sub||n.mockUserToken.user_id;if(!g)throw new x(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");m=new mt(g)}r._authCredentials=new gf(new ic(d,m))}}/**
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
 */class ne{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new ne(this.firestore,t,this._query)}}class yt{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new me(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new yt(this.firestore,t,this._key)}}class me extends ne{constructor(t,e,n){super(t,e,kr(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new yt(this.firestore,null,new M(t))}withConverter(t){return new me(this.firestore,t,this._path)}}function Bp(r,t,...e){if(r=Ft(r),ud("collection","path",t),r instanceof gi){const n=Y.fromString(t,...e);return Kl(n),new me(r,null,n)}{if(!(r instanceof yt||r instanceof me))throw new x(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Y.fromString(t,...e));return Kl(n),new me(r.firestore,null,n)}}function vp(r,t,...e){if(r=Ft(r),arguments.length===1&&(t=ac.newId()),ud("doc","path",t),r instanceof gi){const n=Y.fromString(t,...e);return zl(n),new yt(r,null,new M(n))}{if(!(r instanceof yt||r instanceof me))throw new x(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Y.fromString(t,...e));return zl(n),new yt(r.firestore,r instanceof me?r.converter:null,new M(n))}}/**
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
 */const Ql="AsyncQueue";class Wl{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Gh(this,"async_queue_retry"),this.Su=()=>{const n=As();n&&b(Ql,"Visibility state changed to "+n.visibilityState),this.a_.t_()},this.bu=t;const e=As();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const e=As();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Su)}}enqueue(t){if(this.Du(),this.mu)return new Promise((()=>{}));const e=new Gt;return this.vu((()=>this.mu&&this.yu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Vu.push(t),this.Cu())))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!Ie(t))throw t;b(Ql,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo((()=>this.Cu()))}}vu(t){const e=this.bu.then((()=>(this.pu=!0,t().catch((n=>{this.gu=n,this.pu=!1;const s=(function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u})(n);throw ut("INTERNAL UNHANDLED ERROR: ",s),n})).then((n=>(this.pu=!1,n))))));return this.bu=e,e}enqueueAfterDelay(t,e,n){this.Du(),this.wu.indexOf(t)>-1&&(e=0);const s=ea.createAndSchedule(this,t,e,n,(i=>this.Fu(i)));return this.fu.push(s),s}Du(){this.gu&&O()}verifyOperationInProgress(){}async Mu(){let t;do t=this.bu,await t;while(t!==this.bu)}xu(t){for(const e of this.fu)if(e.timerId===t)return!0;return!1}Ou(t){return this.Mu().then((()=>{this.fu.sort(((e,n)=>e.targetTimeMs-n.targetTimeMs));for(const e of this.fu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Mu()}))}Nu(t){this.wu.push(t)}Fu(t){const e=this.fu.indexOf(t);this.fu.splice(e,1)}}function Hl(r){return(function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1})(r,["next","error","complete"])}class Bt extends gi{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new Wl,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Wl(t),this._firestoreClient=void 0,await t}}}function qp(r,t,e){e||(e=ks);const n=cf(r,"firestore");if(n.isInitialized(e)){const s=n.getImmediate({identifier:e}),i=n.getOptions(e);if(Hs(i,t))return s;throw new x(S.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(t.cacheSizeBytes!==void 0&&t.localCache!==void 0)throw new x(S.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(t.cacheSizeBytes!==void 0&&t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Vh)throw new x(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return n.initialize({options:t,instanceIdentifier:e})}function On(r){if(r._terminated)throw new x(S.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||wp(r),r._firestoreClient}function wp(r){var t,e,n;const s=r._freezeSettings(),i=(function(u,c,d,m){return new tm(u,c,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,ad(m.experimentalLongPollingOptions),m.useFetchStreams)})(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,s);r._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=s.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),r._firestoreClient=new pp(r._authCredentials,r._appCheckCredentials,r._queue,i,r._componentsProvider&&(function(u){const c=u?._online.build();return{_offline:u?._offline.build(c),_online:c}})(r._componentsProvider))}/**
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
 */class bn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new bn(lt.fromBase64String(t))}catch(e){throw new x(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new bn(lt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Ur{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new x(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Fn{constructor(t){this._methodName=t}}/**
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
 */class fa{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new x(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new x(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return q(this._lat,t._lat)||q(this._long,t._long)}}/**
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
 */class ma{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0})(this._values,t._values)}}/**
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
 */const Ap=/^__.*__$/;class Rp{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new ee(t,this.data,this.fieldMask,e,this.fieldTransforms):new Dn(t,this.data,e,this.fieldTransforms)}}class cd{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new ee(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function hd(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O()}}class pi{constructor(t,e,n,s,i,a){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(t){return new pi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.ku({path:n,Qu:!1});return s.$u(t),s}Uu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.ku({path:n,Qu:!1});return s.Bu(),s}Ku(t){return this.ku({path:void 0,Qu:!0})}Wu(t){return Ws(t,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}Bu(){if(this.path)for(let t=0;t<this.path.length;t++)this.$u(this.path.get(t))}$u(t){if(t.length===0)throw this.Wu("Document fields must not be empty");if(hd(this.Lu)&&Ap.test(t))throw this.Wu('Document fields cannot begin and end with "__"')}}class Vp{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||ci(t)}ju(t,e,n,s=!1){return new pi({Lu:t,methodName:e,zu:n,path:st.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Br(r){const t=r._freezeSettings(),e=ci(r._databaseId);return new Vp(r._databaseId,!!t.ignoreUndefinedProperties,e)}function ga(r,t,e,n,s,i={}){const a=r.ju(i.merge||i.mergeFields?2:0,t,e,s);Ta("Data must be an object, but it was:",a,n);const u=gd(n,a);let c,d;if(i.merge)c=new xt(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const m=[];for(const g of i.mergeFields){const T=Ro(t,g,e);if(!a.contains(T))throw new x(S.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);_d(m,T)||m.push(T)}c=new xt(m),d=a.fieldTransforms.filter((g=>c.covers(g.field)))}else c=null,d=a.fieldTransforms;return new Rp(new Rt(u),c,d)}class qr extends Fn{_toFieldTransform(t){if(t.Lu!==2)throw t.Lu===1?t.Wu(`${this._methodName}() can only appear at the top level of your update data`):t.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof qr}}function dd(r,t,e){return new pi({Lu:3,zu:t.settings.zu,methodName:r._methodName,Qu:e},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class pa extends Fn{_toFieldTransform(t){return new ii(t.path,new wn)}isEqual(t){return t instanceof pa}}class _a extends Fn{constructor(t,e){super(t),this.Hu=e}_toFieldTransform(t){const e=dd(this,t,!0),n=this.Hu.map((i=>We(i,e))),s=new qe(n);return new ii(t.path,s)}isEqual(t){return t instanceof _a&&Hs(this.Hu,t.Hu)}}class ya extends Fn{constructor(t,e){super(t),this.Hu=e}_toFieldTransform(t){const e=dd(this,t,!0),n=this.Hu.map((i=>We(i,e))),s=new je(n);return new ii(t.path,s)}isEqual(t){return t instanceof ya&&Hs(this.Hu,t.Hu)}}function fd(r,t,e,n){const s=r.ju(1,t,e);Ta("Data must be an object, but it was:",s,n);const i=[],a=Rt.empty();Ee(n,((c,d)=>{const m=Ia(t,c,e);d=Ft(d);const g=s.Uu(m);if(d instanceof qr)i.push(m);else{const T=We(d,g);T!=null&&(i.push(m),a.set(m,T))}}));const u=new xt(i);return new cd(a,u,s.fieldTransforms)}function md(r,t,e,n,s,i){const a=r.ju(1,t,e),u=[Ro(t,n,e)],c=[s];if(i.length%2!=0)throw new x(S.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<i.length;T+=2)u.push(Ro(t,i[T])),c.push(i[T+1]);const d=[],m=Rt.empty();for(let T=u.length-1;T>=0;--T)if(!_d(d,u[T])){const P=u[T];let C=c[T];C=Ft(C);const N=a.Uu(P);if(C instanceof qr)d.push(P);else{const D=We(C,N);D!=null&&(d.push(P),m.set(P,D))}}const g=new xt(d);return new cd(m,g,a.fieldTransforms)}function Pp(r,t,e,n=!1){return We(e,r.ju(n?4:3,t))}function We(r,t){if(pd(r=Ft(r)))return Ta("Unsupported field value:",t,r),gd(r,t);if(r instanceof Fn)return(function(n,s){if(!hd(s.Lu))throw s.Wu(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.Qu&&t.Lu!==4)throw t.Wu("Nested arrays are not supported");return(function(n,s){const i=[];let a=0;for(const u of n){let c=We(u,s.Ku(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}})(r,t)}return(function(n,s){if((n=Ft(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return _m(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=it.fromDate(n);return{timestampValue:An(s.serializer,i)}}if(n instanceof it){const i=new it(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:An(s.serializer,i)}}if(n instanceof fa)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof bn)return{bytesValue:oh(s.serializer,n._byteString)};if(n instanceof yt){const i=s.databaseId,a=n.firestore._databaseId;if(!a.isEqual(i))throw s.Wu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:zo(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof ma)return(function(a,u){return{mapValue:{fields:{[No]:{stringValue:Mo},[Tn]:{arrayValue:{values:a.toArray().map((d=>{if(typeof d!="number")throw u.Wu("VectorValues must only contain numeric values.");return Lo(u.serializer,d)}))}}}}}})(n,s);throw s.Wu(`Unsupported field value: ${mi(n)}`)})(r,t)}function gd(r,t){const e={};return Ac(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ee(r,((n,s)=>{const i=We(s,t.qu(n));i!=null&&(e[n]=i)})),{mapValue:{fields:e}}}function pd(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof it||r instanceof fa||r instanceof bn||r instanceof yt||r instanceof Fn||r instanceof ma)}function Ta(r,t,e){if(!pd(e)||!(function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)})(e)){const n=mi(e);throw n==="an object"?t.Wu(r+" a custom object"):t.Wu(r+" "+n)}}function Ro(r,t,e){if((t=Ft(t))instanceof Ur)return t._internalPath;if(typeof t=="string")return Ia(r,t);throw Ws("Field path arguments must be of type string or ",r,!1,void 0,e)}const Sp=new RegExp("[~\\*/\\[\\]]");function Ia(r,t,e){if(t.search(Sp)>=0)throw Ws(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new Ur(...t.split("."))._internalPath}catch{throw Ws(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function Ws(r,t,e,n,s){const i=n&&!n.isEmpty(),a=s!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${n}`),a&&(c+=` in document ${s}`),c+=")"),new x(S.INVALID_ARGUMENT,u+r+c)}function _d(r,t){return r.some((e=>e.isEqual(t)))}/**
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
 */class yd{constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new bp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(_i("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class bp extends yd{data(){return super.data()}}function _i(r,t){return typeof t=="string"?Ia(r,t):t instanceof Ur?t._internalPath:t._delegate._internalPath}/**
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
 */function Td(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new x(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ea{}class va extends Ea{}function jp(r,t,...e){let n=[];t instanceof Ea&&n.push(t),n=n.concat(e),(function(i){const a=i.filter((c=>c instanceof wa)).length,u=i.filter((c=>c instanceof yi)).length;if(a>1||a>0&&u>0)throw new x(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(n);for(const s of n)r=s._apply(r);return r}class yi extends va{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new yi(t,e,n)}_apply(t){const e=this._parse(t);return Id(t._query,e),new ne(t.firestore,t.converter,co(t._query,e))}_parse(t){const e=Br(t.firestore);return(function(i,a,u,c,d,m,g){let T;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new x(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Xl(g,m);const C=[];for(const N of g)C.push(Yl(c,i,N));T={arrayValue:{values:C}}}else T=Yl(c,i,g)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Xl(g,m),T=Pp(u,a,g,m==="in"||m==="not-in");return G.create(d,m,T)})(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function zp(r,t,e){const n=t,s=_i("where",r);return yi._create(s,n,e)}class wa extends Ea{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new wa(t,e)}_parse(t){const e=this._queryConstraints.map((n=>n._parse(t))).filter((n=>n.getFilters().length>0));return e.length===1?e[0]:X.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:((function(s,i){let a=s;const u=i.getFlattenedFilters();for(const c of u)Id(a,c),a=co(a,c)})(t._query,e),new ne(t.firestore,t.converter,co(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Aa extends va{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Aa(t,e)}_apply(t){const e=(function(s,i,a){if(s.startAt!==null)throw new x(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new x(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Pr(i,a)})(t._query,this._field,this._direction);return new ne(t.firestore,t.converter,(function(s,i){const a=s.explicitOrderBy.concat([i]);return new xn(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(t._query,e))}}function Kp(r,t="asc"){const e=t,n=_i("orderBy",r);return Aa._create(n,e)}class Ra extends va{constructor(t,e,n){super(),this.type=t,this._limit=e,this._limitType=n}static _create(t,e,n){return new Ra(t,e,n)}_apply(t){return new ne(t.firestore,t.converter,Os(t._query,this._limit,this._limitType))}}function Gp(r){return Ep("limit",r),Ra._create("limit",r,"F")}function Yl(r,t,e){if(typeof(e=Ft(e))=="string"){if(e==="")throw new x(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!jc(t)&&e.indexOf("/")!==-1)throw new x(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const n=t.path.child(Y.fromString(e));if(!M.isDocumentKey(n))throw new x(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return Rr(r,new M(n))}if(e instanceof yt)return Rr(r,e._key);throw new x(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${mi(e)}.`)}function Xl(r,t){if(!Array.isArray(r)||r.length===0)throw new x(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Id(r,t){const e=(function(s,i){for(const a of s)for(const u of a.getFlattenedFilters())if(i.indexOf(u.op)>=0)return u.op;return null})(r.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(e!==null)throw e===t.op?new x(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new x(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Cp{convertValue(t,e="none"){switch(ge(t)){case 0:return null;case 1:return t.booleanValue;case 2:return rt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Zt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw O()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Ee(t,((s,i)=>{n[s]=this.convertValue(i,e)})),n}convertVectorValue(t){var e,n,s;const i=(s=(n=(e=t.fields)===null||e===void 0?void 0:e[Tn].arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.map((a=>rt(a.doubleValue)));return new ma(i)}convertGeoPoint(t){return new fa(rt(t.latitude),rt(t.longitude))}convertArray(t,e){return(t.values||[]).map((n=>this.convertValue(n,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=ei(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(wr(t));default:return null}}convertTimestamp(t){const e=Jt(t);return new it(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Y.fromString(t);L(ph(n));const s=new Ue(n.get(1),n.get(3)),i=new M(n.popFirst(5));return s.isEqual(e)||ut(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}/**
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
 */function Va(r,t,e){let n;return n=r?e&&(e.merge||e.mergeFields)?r.toFirestore(t,e):r.toFirestore(t):t,n}/**
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
 */class cr{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ed extends yd{constructor(t,e,n,s,i,a){super(t,e,n,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Rs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(_i("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Rs extends Ed{data(t={}){return super.data(t)}}class vd{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new cr(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new Rs(this._firestore,this._userDataWriter,n.key,n,new cr(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new x(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((u=>{const c=new Rs(s._firestore,s._userDataWriter,u.doc.key,u.doc,new cr(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((u=>i||u.type!==3)).map((u=>{const c=new Rs(s._firestore,s._userDataWriter,u.doc.key,u.doc,new cr(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),m=a.indexOf(u.doc.key)),{type:xp(u.type),doc:c,oldIndex:d,newIndex:m}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function xp(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O()}}/**
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
 */function $p(r){r=_t(r,yt);const t=_t(r.firestore,Bt);return od(On(t),r._key).then((e=>Sa(t,r,e)))}class Pa extends Cp{constructor(t){super(),this.firestore=t}convertBytes(t){return new bn(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new yt(this.firestore,null,e)}}function Qp(r){r=_t(r,yt);const t=_t(r.firestore,Bt);return od(On(t),r._key,{source:"server"}).then((e=>Sa(t,r,e)))}function Wp(r){r=_t(r,ne);const t=_t(r.firestore,Bt),e=On(t),n=new Pa(t);return Td(r._query),Tp(e,r._query).then((s=>new vd(t,n,r,s)))}function Hp(r,t,e){r=_t(r,yt);const n=_t(r.firestore,Bt),s=Va(r.converter,t,e);return jr(n,[ga(Br(n),"setDoc",r._key,s,r.converter!==null,e).toMutation(r._key,ht.none())])}function Yp(r,t,e,...n){r=_t(r,yt);const s=_t(r.firestore,Bt),i=Br(s);let a;return a=typeof(t=Ft(t))=="string"||t instanceof Ur?md(i,"updateDoc",r._key,t,e,n):fd(i,"updateDoc",r._key,t),jr(s,[a.toMutation(r._key,ht.exists(!0))])}function Xp(r){return jr(_t(r.firestore,Bt),[new Mr(r._key,ht.none())])}function Jp(r,t){const e=_t(r.firestore,Bt),n=vp(r),s=Va(r.converter,t);return jr(e,[ga(Br(r.firestore),"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,ht.exists(!1))]).then((()=>n))}function Zp(r,...t){var e,n,s;r=Ft(r);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||Hl(t[a])||(i=t[a],a++);const u={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Hl(t[a])){const g=t[a];t[a]=(e=g.next)===null||e===void 0?void 0:e.bind(g),t[a+1]=(n=g.error)===null||n===void 0?void 0:n.bind(g),t[a+2]=(s=g.complete)===null||s===void 0?void 0:s.bind(g)}let c,d,m;if(r instanceof yt)d=_t(r.firestore,Bt),m=kr(r._key.path),c={next:g=>{t[a]&&t[a](Sa(d,r,g))},error:t[a+1],complete:t[a+2]};else{const g=_t(r,ne);d=_t(g.firestore,Bt),m=g._query;const T=new Pa(d);c={next:P=>{t[a]&&t[a](new vd(d,T,g,P))},error:t[a+1],complete:t[a+2]},Td(r._query)}return(function(T,P,C,N){const D=new da(N),z=new oa(P,D,C);return T.asyncQueue.enqueueAndForget((async()=>ra(await Qs(T),z))),()=>{D.su(),T.asyncQueue.enqueueAndForget((async()=>sa(await Qs(T),z)))}})(On(d),m,u,c)}function jr(r,t){return(function(n,s){const i=new Gt;return n.asyncQueue.enqueueAndForget((async()=>tp(await yp(n),s,i))),i.promise})(On(r),t)}function Sa(r,t,e){const n=e.docs.get(t._key),s=new Pa(r);return new Ed(r,s,t._key,n,new cr(e.hasPendingWrites,e.fromCache),t.converter)}class Dp{constructor(t){let e;this.kind="persistent",t?.tabManager?(t.tabManager._initialize(t),e=t.tabManager):(e=Mp(),e._initialize(t)),this._onlineComponentProvider=e._onlineComponentProvider,this._offlineComponentProvider=e._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function t_(r){return new Dp(r)}class kp{constructor(t){this.forceOwnership=t,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(t){this._onlineComponentProvider=Cr.provider,this._offlineComponentProvider={build:e=>new sd(e,t?.cacheSizeBytes,this.forceOwnership)}}}class Np{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(t){this._onlineComponentProvider=Cr.provider,this._offlineComponentProvider={build:e=>new gp(e,t?.cacheSizeBytes)}}}function Mp(r){return new kp(void 0)}function e_(){return new Np}/**
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
 */class Op{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=Br(t)}set(t,e,n){this._verifyNotCommitted();const s=Xi(t,this._firestore),i=Va(s.converter,e,n),a=ga(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,n);return this._mutations.push(a.toMutation(s._key,ht.none())),this}update(t,e,n,...s){this._verifyNotCommitted();const i=Xi(t,this._firestore);let a;return a=typeof(e=Ft(e))=="string"||e instanceof Ur?md(this._dataReader,"WriteBatch.update",i._key,e,n,s):fd(this._dataReader,"WriteBatch.update",i._key,e),this._mutations.push(a.toMutation(i._key,ht.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=Xi(t,this._firestore);return this._mutations=this._mutations.concat(new Mr(e._key,ht.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new x(S.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Xi(r,t){if((r=Ft(r)).firestore!==t)throw new x(S.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
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
 */function n_(){return new qr("deleteField")}function r_(){return new pa("serverTimestamp")}function s_(...r){return new _a("arrayUnion",r)}function i_(...r){return new ya("arrayRemove",r)}/**
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
 */function o_(r){return On(r=_t(r,Bt)),new Op(r,(t=>jr(r,t)))}(function(t,e=!0){(function(s){Cn=s})(ff),of(new af("firestore",((n,{instanceIdentifier:s,options:i})=>{const a=n.getProvider("app").getImmediate(),u=new Bt(new pf(n.getProvider("auth-internal")),new Tf(a,n.getProvider("app-check-internal")),(function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new x(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ue(d.options.projectId,m)})(a,s),a);return i=Object.assign({useFetchStreams:e},i),u._setSettings(i),u}),"PUBLIC").setMultipleInstances(!0)),bu(xu,Du,t),bu(xu,Du,"esm2017")})();export{Ip as $,Cp as A,bn as B,me as C,yt as D,x as E,Ur as F,fa as G,wa as H,va as I,Rs as J,yi as K,Ra as L,Aa as M,vd as N,lt as O,Ue as P,ne as Q,M as R,cr as S,it as T,mf as U,ma as V,Op as W,st as X,_t as Y,dn as Z,ac as _,e_ as a,On as a0,jr as a1,Mp as a2,s_ as b,i_ as c,vp as d,r_ as e,n_ as f,$p as g,Bp as h,qp as i,Wp as j,o_ as k,Gp as l,Qp as m,Xp as n,Zp as o,t_ as p,jp as q,Jp as r,Hp as s,Kp as t,Yp as u,Up as v,zp as w,Ed as x,Fn as y,Bt as z};
