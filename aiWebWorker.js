(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinPropertiesHard(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q)){b[q]=a[q]}}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(Object.getPrototypeOf(r)&&Object.getPrototypeOf(r).p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++){inherit(b[s],a)}}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){a[b]=d()}a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s){A.kq(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.u(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.fo(b)
return new s(c,this)}:function(){if(s===null)s=A.fo(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.fo(a).prototype
return s}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number"){h+=x}return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var s=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var r=staticTearOffGetter(s)
a[b]=r}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var s=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var r=instanceTearOffGetter(c,s)
a[b]=r}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
fw(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fr(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.fu==null){A.ka()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.d(A.bx("Return interceptor for "+A.m(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.ei
if(o==null)o=$.ei=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.kh(a)
if(p!=null)return p
if(typeof a=="function")return B.G
s=Object.getPrototypeOf(a)
if(s==null)return B.q
if(s===Object.prototype)return B.q
if(typeof q=="function"){o=$.ei
if(o==null)o=$.ei=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.k,enumerable:false,writable:true,configurable:true})
return B.k}return B.k},
iq(a,b){if(a<0||a>4294967295)throw A.d(A.dC(a,0,4294967295,"length",null))
return J.ir(new Array(a),b)},
fR(a,b){if(a<0)throw A.d(A.a1("Length must be a non-negative integer: "+a,null))
return A.u(new Array(a),b.h("n<0>"))},
ir(a,b){var s=A.u(a,b.h("n<0>"))
s.$flags=1
return s},
is(a,b){return J.i4(a,b)},
aC(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.bj.prototype
return J.cj.prototype}if(typeof a=="string")return J.aK.prototype
if(a==null)return J.bk.prototype
if(typeof a=="boolean")return J.ci.prototype
if(Array.isArray(a))return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.af.prototype
if(typeof a=="symbol")return J.bn.prototype
if(typeof a=="bigint")return J.bl.prototype
return a}if(a instanceof A.c)return a
return J.fr(a)},
a_(a){if(typeof a=="string")return J.aK.prototype
if(a==null)return a
if(Array.isArray(a))return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.af.prototype
if(typeof a=="symbol")return J.bn.prototype
if(typeof a=="bigint")return J.bl.prototype
return a}if(a instanceof A.c)return a
return J.fr(a)},
aD(a){if(a==null)return a
if(Array.isArray(a))return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.af.prototype
if(typeof a=="symbol")return J.bn.prototype
if(typeof a=="bigint")return J.bl.prototype
return a}if(a instanceof A.c)return a
return J.fr(a)},
k4(a){if(typeof a=="number")return J.aJ.prototype
if(typeof a=="string")return J.aK.prototype
if(a==null)return a
if(!(a instanceof A.c))return J.aR.prototype
return a},
M(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.aC(a).v(a,b)},
i3(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.kd(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.a_(a).j(a,b)},
fD(a,b){return J.aD(a).K(a,b)},
i4(a,b){return J.k4(a).E(a,b)},
fE(a,b){return J.aD(a).C(a,b)},
fF(a){return J.aD(a).gD(a)},
E(a){return J.aC(a).gt(a)},
i5(a){return J.a_(a).gu(a)},
c1(a){return J.aD(a).gp(a)},
eV(a){return J.aD(a).gA(a)},
d0(a){return J.a_(a).gk(a)},
eW(a){return J.aC(a).gq(a)},
eX(a,b,c){return J.aD(a).S(a,b,c)},
d1(a){return J.aD(a).H(a)},
aG(a){return J.aC(a).i(a)},
cd:function cd(){},
ci:function ci(){},
bk:function bk(){},
bm:function bm(){},
ag:function ag(){},
cz:function cz(){},
aR:function aR(){},
af:function af(){},
bl:function bl(){},
bn:function bn(){},
n:function n(a){this.$ti=a},
ch:function ch(){},
dq:function dq(a){this.$ti=a},
c2:function c2(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aJ:function aJ(){},
bj:function bj(){},
cj:function cj(){},
aK:function aK(){}},A={f2:function f2(){},
d8(a,b,c){if(t.O.b(a))return new A.bF(a,b.h("@<0>").n(c).h("bF<1,2>"))
return new A.ao(a,b.h("@<0>").n(c).h("ao<1,2>"))},
a6(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
dK(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
ez(a,b,c){return a},
fv(a){var s,r
for(s=$.aF.length,r=0;r<s;++r)if(a===$.aF[r])return!0
return!1},
iv(a,b,c,d){if(t.O.b(a))return new A.as(a,b,c.h("@<0>").n(d).h("as<1,2>"))
return new A.V(a,b,c.h("@<0>").n(d).h("V<1,2>"))},
S(){return new A.aw("No element")},
b8:function b8(a,b){this.a=a
this.$ti=b},
b9:function b9(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
aa:function aa(){},
c5:function c5(a,b){this.a=a
this.$ti=b},
ao:function ao(a,b){this.a=a
this.$ti=b},
bF:function bF(a,b){this.a=a
this.$ti=b},
bB:function bB(){},
a2:function a2(a,b){this.a=a
this.$ti=b},
aq:function aq(a,b,c){this.a=a
this.b=b
this.$ti=c},
ap:function ap(a,b){this.a=a
this.$ti=b},
d9:function d9(a,b){this.a=a
this.b=b},
cl:function cl(a){this.a=a},
dD:function dD(){},
e:function e(){},
U:function U(){},
aL:function aL(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
V:function V(a,b,c){this.a=a
this.b=b
this.$ti=c},
as:function as(a,b,c){this.a=a
this.b=b
this.$ti=c},
cp:function cp(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
J:function J(a,b,c){this.a=a
this.b=b
this.$ti=c},
a9:function a9(a,b,c){this.a=a
this.b=b
this.$ti=c},
cG:function cG(a,b,c){this.a=a
this.b=b
this.$ti=c},
be:function be(){},
bW:function bW(){},
hJ(a,b){var s=new A.bh(a,b.h("bh<0>"))
s.bl(a)
return s},
hS(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
kd(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.da.b(a)},
m(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.aG(a)
return s},
bu(a){var s,r=$.fV
if(r==null)r=$.fV=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
cA(a){var s,r,q,p
if(a instanceof A.c)return A.K(A.Y(a),null)
s=J.aC(a)
if(s===B.E||s===B.H||t.o.b(a)){r=B.l(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.K(A.Y(a),null)},
fW(a){var s,r,q
if(a==null||typeof a=="number"||A.cY(a))return J.aG(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.ar)return a.i(0)
if(a instanceof A.bN)return a.aw(!0)
s=$.i2()
for(r=0;r<1;++r){q=s[r].cd(a)
if(q!=null)return q}return"Instance of '"+A.cA(a)+"'"},
iw(){return Date.now()},
iF(){var s,r
if($.dA!==0)return
$.dA=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.dA=1e6
$.dB=new A.dz(r)},
aO(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iE(a){var s=A.aO(a).getUTCFullYear()+0
return s},
iC(a){var s=A.aO(a).getUTCMonth()+1
return s},
iy(a){var s=A.aO(a).getUTCDate()+0
return s},
iz(a){var s=A.aO(a).getUTCHours()+0
return s},
iB(a){var s=A.aO(a).getUTCMinutes()+0
return s},
iD(a){var s=A.aO(a).getUTCSeconds()+0
return s},
iA(a){var s=A.aO(a).getUTCMilliseconds()+0
return s},
ix(a){var s=a.$thrownJsError
if(s==null)return null
return A.X(s)},
fX(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.y(a,s)
a.$thrownJsError=s
s.stack=b.i(0)}},
hH(a,b){var s,r="index"
if(!A.hs(b))return new A.Z(!0,b,r,null)
s=J.d0(a)
if(b<0||b>=s)return A.ij(b,s,a,r)
return A.iH(b,r)},
jU(a){return new A.Z(!0,a,null,null)},
d(a){return A.y(a,new Error())},
y(a,b){var s
if(a==null)a=new A.a7()
b.dartException=a
s=A.kr
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
kr(){return J.aG(this.dartException)},
an(a,b){throw A.y(a,b==null?new Error():b)},
fz(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.an(A.jg(a,b,c),s)},
jg(a,b,c){var s,r,q,p,o,n,m,l,k
if(typeof b=="string")s=b
else{r="[]=;add;removeWhere;retainWhere;removeRange;setRange;setInt8;setInt16;setInt32;setUint8;setUint16;setUint32;setFloat32;setFloat64".split(";")
q=r.length
p=b
if(p>q){c=p/q|0
p%=q}s=r[p]}o=typeof c=="string"?c:"modify;remove from;add to".split(";")[c]
n=t.j.b(a)?"list":"ByteData"
m=a.$flags|0
l="a "
if((m&4)!==0)k="constant "
else if((m&2)!==0){k="unmodifiable "
l="an "}else k=(m&1)!==0?"fixed-length ":""
return new A.by("'"+s+"': Cannot "+o+" "+l+k+n)},
eU(a){throw A.d(A.a3(a))},
a8(a){var s,r,q,p,o,n
a=A.kl(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.u([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.dO(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
dP(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
h2(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
f3(a,b){var s=b==null,r=s?null:b.method
return new A.ck(a,r,s?null:b.receiver)},
a0(a){if(a==null)return new A.dx(a)
if(a instanceof A.bc)return A.am(a,a.a)
if(typeof a!=="object")return a
if("dartException" in a)return A.am(a,a.dartException)
return A.jQ(a)},
am(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
jQ(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.c.bN(r,16)&8191)===10)switch(q){case 438:return A.am(a,A.f3(A.m(s)+" (Error "+q+")",null))
case 445:case 5007:A.m(s)
return A.am(a,new A.bt())}}if(a instanceof TypeError){p=$.hT()
o=$.hU()
n=$.hV()
m=$.hW()
l=$.hZ()
k=$.i_()
j=$.hY()
$.hX()
i=$.i1()
h=$.i0()
g=p.G(s)
if(g!=null)return A.am(a,A.f3(s,g))
else{g=o.G(s)
if(g!=null){g.method="call"
return A.am(a,A.f3(s,g))}else if(n.G(s)!=null||m.G(s)!=null||l.G(s)!=null||k.G(s)!=null||j.G(s)!=null||m.G(s)!=null||i.G(s)!=null||h.G(s)!=null)return A.am(a,new A.bt())}return A.am(a,new A.cF(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.bw()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.am(a,new A.Z(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.bw()
return a},
X(a){var s
if(a instanceof A.bc)return a.b
if(a==null)return new A.bP(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.bP(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
eP(a){if(a==null)return J.E(a)
if(typeof a=="object")return A.bu(a)
return J.E(a)},
k3(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.B(0,a[s],a[r])}return b},
jq(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.d(A.bd("Unsupported number of arguments for wrapped closure"))},
b2(a,b){var s=a.$identity
if(!!s)return s
s=A.k0(a,b)
a.$identity=s
return s},
k0(a,b){var s
switch(b){case 0:s=a.$0
break
case 1:s=a.$1
break
case 2:s=a.$2
break
case 3:s=a.$3
break
case 4:s=a.$4
break
default:s=null}if(s!=null)return s.bind(a)
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.jq)},
ie(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.dE().constructor.prototype):Object.create(new A.b7(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.fP(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.ia(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.fP(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
ia(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.d("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.i8)}throw A.d("Error in functionType of tearoff")},
ib(a,b,c,d){var s=A.fO
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
fP(a,b,c,d){if(c)return A.id(a,b,d)
return A.ib(b.length,d,a,b)},
ic(a,b,c,d){var s=A.fO,r=A.i9
switch(b?-1:a){case 0:throw A.d(new A.cB("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
id(a,b,c){var s,r
if($.fM==null)$.fM=A.fL("interceptor")
if($.fN==null)$.fN=A.fL("receiver")
s=b.length
r=A.ic(s,c,a,b)
return r},
fo(a){return A.ie(a)},
i8(a,b){return A.bV(v.typeUniverse,A.Y(a.a),b)},
fO(a){return a.a},
i9(a){return a.b},
fL(a){var s,r,q,p=new A.b7("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.d(A.a1("Field name "+a+" not found.",null))},
k5(a){return v.getIsolateTag(a)},
kh(a){var s,r,q,p,o,n=$.hI.$1(a),m=$.eB[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.eI[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=$.hD.$2(a,n)
if(q!=null){m=$.eB[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.eI[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.eN(s)
$.eB[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.eI[n]=s
return s}if(p==="-"){o=A.eN(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.hM(a,s)
if(p==="*")throw A.d(A.bx(n))
if(v.leafTags[n]===true){o=A.eN(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.hM(a,s)},
hM(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.fw(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
eN(a){return J.fw(a,!1,null,!!a.$iI)},
kj(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.eN(s)
else return J.fw(s,c,null,null)},
ka(){if(!0===$.fu)return
$.fu=!0
A.kb()},
kb(){var s,r,q,p,o,n,m,l
$.eB=Object.create(null)
$.eI=Object.create(null)
A.k9()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.hO.$1(o)
if(n!=null){m=A.kj(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
k9(){var s,r,q,p,o,n,m=B.t()
m=A.b1(B.u,A.b1(B.v,A.b1(B.m,A.b1(B.m,A.b1(B.w,A.b1(B.x,A.b1(B.y(B.l),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.hI=new A.eF(p)
$.hD=new A.eG(o)
$.hO=new A.eH(n)},
b1(a,b){return a(b)||b},
k1(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
kl(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
t:function t(a,b){this.a=a
this.b=b},
cW:function cW(a,b,c){this.a=a
this.b=b
this.c=c},
ba:function ba(){},
dc:function dc(a,b,c){this.a=a
this.b=b
this.c=c},
bb:function bb(a,b,c){this.a=a
this.b=b
this.$ti=c},
bI:function bI(a,b){this.a=a
this.$ti=b},
cS:function cS(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dj:function dj(){},
bh:function bh(a,b){this.a=a
this.$ti=b},
dz:function dz(a){this.a=a},
bv:function bv(){},
dO:function dO(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
bt:function bt(){},
ck:function ck(a,b,c){this.a=a
this.b=b
this.c=c},
cF:function cF(a){this.a=a},
dx:function dx(a){this.a=a},
bc:function bc(a,b){this.a=a
this.b=b},
bP:function bP(a){this.a=a
this.b=null},
ar:function ar(){},
da:function da(){},
db:function db(){},
dL:function dL(){},
dE:function dE(){},
b7:function b7(a,b){this.a=a
this.b=b},
cB:function cB(a){this.a=a},
a4:function a4(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dr:function dr(a){this.a=a},
ds:function ds(a,b){this.a=a
this.b=b
this.c=null},
a5:function a5(a,b){this.a=a
this.$ti=b},
cn:function cn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bo:function bo(a,b){this.a=a
this.$ti=b},
co:function co(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
T:function T(a,b){this.a=a
this.$ti=b},
cm:function cm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
eF:function eF(a){this.a=a},
eG:function eG(a){this.a=a},
eH:function eH(a){this.a=a},
bN:function bN(){},
cU:function cU(){},
cV:function cV(){},
aB(a,b,c){if(a>>>0!==a||a>=c)throw A.d(A.hH(b,a))},
aM:function aM(){},
br:function br(){},
cq:function cq(){},
aN:function aN(){},
bp:function bp(){},
bq:function bq(){},
cr:function cr(){},
cs:function cs(){},
ct:function ct(){},
cu:function cu(){},
cv:function cv(){},
cw:function cw(){},
cx:function cx(){},
bs:function bs(){},
cy:function cy(){},
bJ:function bJ(){},
bK:function bK(){},
bL:function bL(){},
bM:function bM(){},
f7(a,b){var s=b.c
return s==null?b.c=A.bT(a,"ae",[b.x]):s},
fZ(a){var s=a.w
if(s===6||s===7)return A.fZ(a.x)
return s===11||s===12},
iI(a){return a.as},
c_(a){return A.er(v.typeUniverse,a,!1)},
hK(a,b){var s,r,q,p,o
if(a==null)return null
s=b.y
r=a.Q
if(r==null)r=a.Q=new Map()
q=b.as
p=r.get(q)
if(p!=null)return p
o=A.al(v.typeUniverse,a.x,s,0)
r.set(q,o)
return o},
al(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.al(a1,s,a3,a4)
if(r===s)return a2
return A.hh(a1,r,!0)
case 7:s=a2.x
r=A.al(a1,s,a3,a4)
if(r===s)return a2
return A.hg(a1,r,!0)
case 8:q=a2.y
p=A.b0(a1,q,a3,a4)
if(p===q)return a2
return A.bT(a1,a2.x,p)
case 9:o=a2.x
n=A.al(a1,o,a3,a4)
m=a2.y
l=A.b0(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.fc(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.b0(a1,j,a3,a4)
if(i===j)return a2
return A.hi(a1,k,i)
case 11:h=a2.x
g=A.al(a1,h,a3,a4)
f=a2.y
e=A.jN(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.hf(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.b0(a1,d,a3,a4)
o=a2.x
n=A.al(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.fd(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.d(A.c4("Attempted to substitute unexpected RTI kind "+a0))}},
b0(a,b,c,d){var s,r,q,p,o=b.length,n=A.es(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.al(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
jO(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.es(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.al(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
jN(a,b,c,d){var s,r=b.a,q=A.b0(a,r,c,d),p=b.b,o=A.b0(a,p,c,d),n=b.c,m=A.jO(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.cO()
s.a=q
s.b=o
s.c=m
return s},
u(a,b){a[v.arrayRti]=b
return a},
cZ(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.k6(s)
return a.$S()}return null},
kc(a,b){var s
if(A.fZ(b))if(a instanceof A.ar){s=A.cZ(a)
if(s!=null)return s}return A.Y(a)},
Y(a){if(a instanceof A.c)return A.f(a)
if(Array.isArray(a))return A.ac(a)
return A.fj(J.aC(a))},
ac(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
f(a){var s=a.$ti
return s!=null?s:A.fj(a)},
fj(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.jn(a,s)},
jn(a,b){var s=a instanceof A.ar?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.j3(v.typeUniverse,s.name)
b.$ccache=r
return r},
k6(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.er(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
b3(a){return A.L(A.f(a))},
fs(a){var s=A.cZ(a)
return A.L(s==null?A.Y(a):s)},
fm(a){var s
if(a instanceof A.bN)return a.b1()
s=a instanceof A.ar?A.cZ(a):null
if(s!=null)return s
if(t.bW.b(a))return J.eW(a).a
if(Array.isArray(a))return A.ac(a)
return A.Y(a)},
L(a){var s=a.r
return s==null?a.r=new A.eq(a):s},
k2(a,b){var s,r,q=b,p=q.length
if(p===0)return t.cD
s=A.bV(v.typeUniverse,A.fm(q[0]),"@<0>")
for(r=1;r<p;++r)s=A.hj(v.typeUniverse,s,A.fm(q[r]))
return A.bV(v.typeUniverse,s,a)},
Q(a){return A.L(A.er(v.typeUniverse,a,!1))},
jm(a){var s=this
s.b=A.jL(s)
return s.b(a)},
jL(a){var s,r,q,p
if(a===t.K)return A.jw
if(A.aE(a))return A.jA
s=a.w
if(s===6)return A.jk
if(s===1)return A.hu
if(s===7)return A.jr
r=A.jK(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.aE)){a.f="$i"+q
if(q==="i")return A.ju
if(a===t.m)return A.jt
return A.jz}}else if(s===10){p=A.k1(a.x,a.y)
return p==null?A.hu:p}return A.ji},
jK(a){if(a.w===8){if(a===t.S)return A.hs
if(a===t.i||a===t.n)return A.jv
if(a===t.N)return A.jy
if(a===t.y)return A.cY}return null},
jl(a){var s=this,r=A.jh
if(A.aE(s))r=A.jd
else if(s===t.K)r=A.eu
else if(A.b4(s)){r=A.jj
if(s===t.a3)r=A.j8
else if(s===t.aD)r=A.jc
else if(s===t.cG)r=A.j5
else if(s===t.ae)r=A.jb
else if(s===t.dd)r=A.j7
else if(s===t.aQ)r=A.j9}else if(s===t.S)r=A.aX
else if(s===t.N)r=A.bX
else if(s===t.y)r=A.fe
else if(s===t.n)r=A.ja
else if(s===t.i)r=A.j6
else if(s===t.m)r=A.hm
s.a=r
return s.a(a)},
ji(a){var s=this
if(a==null)return A.b4(s)
return A.ke(v.typeUniverse,A.kc(a,s),s)},
jk(a){if(a==null)return!0
return this.x.b(a)},
jz(a){var s,r=this
if(a==null)return A.b4(r)
s=r.f
if(a instanceof A.c)return!!a[s]
return!!J.aC(a)[s]},
ju(a){var s,r=this
if(a==null)return A.b4(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.c)return!!a[s]
return!!J.aC(a)[s]},
jt(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.c)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
ht(a){if(typeof a=="object"){if(a instanceof A.c)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
jh(a){var s=this
if(a==null){if(A.b4(s))return a}else if(s.b(a))return a
throw A.y(A.hn(a,s),new Error())},
jj(a){var s=this
if(a==null||s.b(a))return a
throw A.y(A.hn(a,s),new Error())},
hn(a,b){return new A.bR("TypeError: "+A.h6(a,A.K(b,null)))},
h6(a,b){return A.dd(a)+": type '"+A.K(A.fm(a),null)+"' is not a subtype of type '"+b+"'"},
P(a,b){return new A.bR("TypeError: "+A.h6(a,b))},
jr(a){var s=this
return s.x.b(a)||A.f7(v.typeUniverse,s).b(a)},
jw(a){return a!=null},
eu(a){if(a!=null)return a
throw A.y(A.P(a,"Object"),new Error())},
jA(a){return!0},
jd(a){return a},
hu(a){return!1},
cY(a){return!0===a||!1===a},
fe(a){if(!0===a)return!0
if(!1===a)return!1
throw A.y(A.P(a,"bool"),new Error())},
j5(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.y(A.P(a,"bool?"),new Error())},
j6(a){if(typeof a=="number")return a
throw A.y(A.P(a,"double"),new Error())},
j7(a){if(typeof a=="number")return a
if(a==null)return a
throw A.y(A.P(a,"double?"),new Error())},
hs(a){return typeof a=="number"&&Math.floor(a)===a},
aX(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.y(A.P(a,"int"),new Error())},
j8(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.y(A.P(a,"int?"),new Error())},
jv(a){return typeof a=="number"},
ja(a){if(typeof a=="number")return a
throw A.y(A.P(a,"num"),new Error())},
jb(a){if(typeof a=="number")return a
if(a==null)return a
throw A.y(A.P(a,"num?"),new Error())},
jy(a){return typeof a=="string"},
bX(a){if(typeof a=="string")return a
throw A.y(A.P(a,"String"),new Error())},
jc(a){if(typeof a=="string")return a
if(a==null)return a
throw A.y(A.P(a,"String?"),new Error())},
hm(a){if(A.ht(a))return a
throw A.y(A.P(a,"JSObject"),new Error())},
j9(a){if(a==null)return a
if(A.ht(a))return a
throw A.y(A.P(a,"JSObject?"),new Error())},
hA(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.K(a[q],b)
return s},
jH(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.hA(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.K(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
ho(a1,a2,a3){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=", ",a0=null
if(a3!=null){s=a3.length
if(a2==null)a2=A.u([],t.s)
else a0=a2.length
r=a2.length
for(q=s;q>0;--q)a2.push("T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a){o=o+n+a2[a2.length-1-q]
m=a3[q]
l=m.w
if(!(l===2||l===3||l===4||l===5||m===p))o+=" extends "+A.K(m,a2)}o+=">"}else o=""
p=a1.x
k=a1.y
j=k.a
i=j.length
h=k.b
g=h.length
f=k.c
e=f.length
d=A.K(p,a2)
for(c="",b="",q=0;q<i;++q,b=a)c+=b+A.K(j[q],a2)
if(g>0){c+=b+"["
for(b="",q=0;q<g;++q,b=a)c+=b+A.K(h[q],a2)
c+="]"}if(e>0){c+=b+"{"
for(b="",q=0;q<e;q+=3,b=a){c+=b
if(f[q+1])c+="required "
c+=A.K(f[q+2],a2)+" "+f[q]}c+="}"}if(a0!=null){a2.toString
a2.length=a0}return o+"("+c+") => "+d},
K(a,b){var s,r,q,p,o,n,m=a.w
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){s=a.x
r=A.K(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(m===7)return"FutureOr<"+A.K(a.x,b)+">"
if(m===8){p=A.jP(a.x)
o=a.y
return o.length>0?p+("<"+A.hA(o,b)+">"):p}if(m===10)return A.jH(a,b)
if(m===11)return A.ho(a,b,null)
if(m===12)return A.ho(a.x,b,a.y)
if(m===13){n=a.x
return b[b.length-1-n]}return"?"},
jP(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
j4(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
j3(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.er(a,b,!1)
else if(typeof m=="number"){s=m
r=A.bU(a,5,"#")
q=A.es(s)
for(p=0;p<s;++p)q[p]=r
o=A.bT(a,b,q)
n[b]=o
return o}else return m},
j2(a,b){return A.hk(a.tR,b)},
j1(a,b){return A.hk(a.eT,b)},
er(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.hd(A.hb(a,null,b,!1))
r.set(b,s)
return s},
bV(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.hd(A.hb(a,b,c,!0))
q.set(c,r)
return r},
hj(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.fc(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
ak(a,b){b.a=A.jl
b.b=A.jm
return b},
bU(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.W(null,null)
s.w=b
s.as=c
r=A.ak(a,s)
a.eC.set(c,r)
return r},
hh(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.j_(a,b,r,c)
a.eC.set(r,s)
return s},
j_(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.aE(b))if(!(b===t.P||b===t.T))if(s!==6)r=s===7&&A.b4(b.x)
if(r)return b
else if(s===1)return t.P}q=new A.W(null,null)
q.w=6
q.x=b
q.as=c
return A.ak(a,q)},
hg(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.iY(a,b,r,c)
a.eC.set(r,s)
return s},
iY(a,b,c,d){var s,r
if(d){s=b.w
if(A.aE(b)||b===t.K)return b
else if(s===1)return A.bT(a,"ae",[b])
else if(b===t.P||b===t.T)return t.bc}r=new A.W(null,null)
r.w=7
r.x=b
r.as=c
return A.ak(a,r)},
j0(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.W(null,null)
s.w=13
s.x=b
s.as=q
r=A.ak(a,s)
a.eC.set(q,r)
return r},
bS(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
iX(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
bT(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.bS(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.W(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.ak(a,r)
a.eC.set(p,q)
return q},
fc(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.bS(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.W(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.ak(a,o)
a.eC.set(q,n)
return n},
hi(a,b,c){var s,r,q="+"+(b+"("+A.bS(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.W(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.ak(a,s)
a.eC.set(q,r)
return r},
hf(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.bS(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.bS(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.iX(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.W(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.ak(a,p)
a.eC.set(r,o)
return o},
fd(a,b,c,d){var s,r=b.as+("<"+A.bS(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.iZ(a,b,c,r,d)
a.eC.set(r,s)
return s},
iZ(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.es(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.al(a,b,r,0)
m=A.b0(a,c,r,0)
return A.fd(a,n,m,c!==m)}}l=new A.W(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.ak(a,l)},
hb(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
hd(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.iR(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.hc(a,r,l,k,!1)
else if(q===46)r=A.hc(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.aA(a.u,a.e,k.pop()))
break
case 94:k.push(A.j0(a.u,k.pop()))
break
case 35:k.push(A.bU(a.u,5,"#"))
break
case 64:k.push(A.bU(a.u,2,"@"))
break
case 126:k.push(A.bU(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.iT(a,k)
break
case 38:A.iS(a,k)
break
case 63:p=a.u
k.push(A.hh(p,A.aA(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.hg(p,A.aA(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.iQ(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.he(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.iV(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-2)
break
case 43:n=l.indexOf("(",r)
k.push(l.substring(r,n))
k.push(-4)
k.push(a.p)
a.p=k.length
r=n+1
break
default:throw"Bad character "+q}}}m=k.pop()
return A.aA(a.u,a.e,m)},
iR(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
hc(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.j4(s,o.x)[p]
if(n==null)A.an('No "'+p+'" in "'+A.iI(o)+'"')
d.push(A.bV(s,o,n))}else d.push(p)
return m},
iT(a,b){var s,r=a.u,q=A.ha(a,b),p=b.pop()
if(typeof p=="string")b.push(A.bT(r,p,q))
else{s=A.aA(r,a.e,p)
switch(s.w){case 11:b.push(A.fd(r,s,q,a.n))
break
default:b.push(A.fc(r,s,q))
break}}},
iQ(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.ha(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.aA(p,a.e,o)
q=new A.cO()
q.a=s
q.b=n
q.c=m
b.push(A.hf(p,r,q))
return
case-4:b.push(A.hi(p,b.pop(),s))
return
default:throw A.d(A.c4("Unexpected state under `()`: "+A.m(o)))}},
iS(a,b){var s=b.pop()
if(0===s){b.push(A.bU(a.u,1,"0&"))
return}if(1===s){b.push(A.bU(a.u,4,"1&"))
return}throw A.d(A.c4("Unexpected extended operation "+A.m(s)))},
ha(a,b){var s=b.splice(a.p)
A.he(a.u,a.e,s)
a.p=b.pop()
return s},
aA(a,b,c){if(typeof c=="string")return A.bT(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.iU(a,b,c)}else return c},
he(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.aA(a,b,c[s])},
iV(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.aA(a,b,c[s])},
iU(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.d(A.c4("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.d(A.c4("Bad index "+c+" for "+b.i(0)))},
ke(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.x(a,b,null,c,null)
r.set(c,s)}return s},
x(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.aE(d))return!0
s=b.w
if(s===4)return!0
if(A.aE(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.x(a,c[b.x],c,d,e))return!0
q=d.w
p=t.P
if(b===p||b===t.T){if(q===7)return A.x(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.x(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.x(a,b.x,c,d,e))return!1
return A.x(a,A.f7(a,b),c,d,e)}if(s===6)return A.x(a,p,c,d,e)&&A.x(a,b.x,c,d,e)
if(q===7){if(A.x(a,b,c,d.x,e))return!0
return A.x(a,b,c,A.f7(a,d),e)}if(q===6)return A.x(a,b,c,p,e)||A.x(a,b,c,d.x,e)
if(r)return!1
p=s!==11
if((!p||s===12)&&d===t.Z)return!0
o=s===10
if(o&&d===t.cY)return!0
if(q===12){if(b===t.L)return!0
if(s!==12)return!1
n=b.y
m=d.y
l=n.length
if(l!==m.length)return!1
c=c==null?n:n.concat(c)
e=e==null?m:m.concat(e)
for(k=0;k<l;++k){j=n[k]
i=m[k]
if(!A.x(a,j,c,i,e)||!A.x(a,i,e,j,c))return!1}return A.hr(a,b.x,c,d.x,e)}if(q===11){if(b===t.L)return!0
if(p)return!1
return A.hr(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.js(a,b,c,d,e)}if(o&&q===10)return A.jx(a,b,c,d,e)
return!1},
hr(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.x(a3,a4.x,a5,a6.x,a7))return!1
s=a4.y
r=a6.y
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!A.x(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.x(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.x(a3,k[h],a7,g,a5))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!A.x(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
js(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.bV(a,b,r[o])
return A.hl(a,p,null,c,d.y,e)}return A.hl(a,b.y,null,c,d.y,e)},
hl(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.x(a,b[s],d,e[s],f))return!1
return!0},
jx(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.x(a,r[s],c,q[s],e))return!1
return!0},
b4(a){var s=a.w,r=!0
if(!(a===t.P||a===t.T))if(!A.aE(a))if(s!==6)r=s===7&&A.b4(a.x)
return r},
aE(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
hk(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
es(a){return a>0?new Array(a):v.typeUniverse.sEA},
W:function W(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
cO:function cO(){this.c=this.b=this.a=null},
eq:function eq(a){this.a=a},
cN:function cN(){},
bR:function bR(a){this.a=a},
iL(){var s,r,q
if(self.scheduleImmediate!=null)return A.jV()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.b2(new A.dW(s),1)).observe(r,{childList:true})
return new A.dV(s,r,q)}else if(self.setImmediate!=null)return A.jW()
return A.jX()},
iM(a){self.scheduleImmediate(A.b2(new A.dX(a),0))},
iN(a){self.setImmediate(A.b2(new A.dY(a),0))},
iO(a){A.iW(0,a)},
iW(a,b){var s=new A.eo()
s.bn(a,b)
return s},
fl(a){return new A.cH(new A.o($.h,a.h("o<0>")),a.h("cH<0>"))},
fi(a,b){a.$2(0,null)
b.b=!0
return b.a},
ff(a,b){A.je(a,b)},
fh(a,b){b.a3(a)},
fg(a,b){b.aB(A.a0(a),A.X(a))},
je(a,b){var s,r,q=new A.ev(b),p=new A.ew(b)
if(a instanceof A.o)a.b6(q,p,t.z)
else{s=t.z
if(a instanceof A.o)a.bi(q,p,s)
else{r=new A.o($.h,t.aY)
r.a=8
r.c=a
r.b6(q,p,s)}}},
fn(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.h.aa(new A.ey(s))},
eY(a){var s
if(t.C.b(a)){s=a.gX()
if(s!=null)return s}return B.e},
jo(a,b){if($.h===B.b)return null
return null},
hq(a,b){if($.h!==B.b)A.jo(a,b)
if(b==null)if(t.C.b(a)){b=a.gX()
if(b==null){A.fX(a,B.e)
b=B.e}}else b=B.e
else if(t.C.b(a))A.fX(a,b)
return new A.N(a,b)},
h7(a,b){var s=new A.o($.h,b.h("o<0>"))
s.a=8
s.c=a
return s},
f8(a,b,c){var s,r,q,p={},o=p.a=a
while(s=o.a,(s&4)!==0){o=o.c
p.a=o}if(o===b){s=A.iJ()
b.ag(new A.N(new A.Z(!0,o,null,"Cannot complete a future with itself"),s))
return}r=b.a&1
s=o.a=s|r
if((s&24)===0){q=b.c
b.a=b.a&1|4
b.c=o
o.b5(q)
return}if(!c)if(b.c==null)o=(s&16)===0||r!==0
else o=!1
else o=!0
if(o){q=b.U()
b.Z(p.a)
A.az(b,q)
return}b.a^=2
A.b_(null,null,b.b,new A.e7(p,b))},
az(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g={},f=g.a=a
for(;;){s={}
r=f.a
q=(r&16)===0
p=!q
if(b==null){if(p&&(r&1)===0){f=f.c
A.aZ(f.a,f.b)}return}s.a=b
o=b.a
for(f=b;o!=null;f=o,o=n){f.a=null
A.az(g.a,f)
s.a=o
n=o.a}r=g.a
m=r.c
s.b=p
s.c=m
if(q){l=f.c
l=(l&1)!==0||(l&15)===8}else l=!0
if(l){k=f.b.b
if(p){r=r.b===k
r=!(r||r)}else r=!1
if(r){A.aZ(m.a,m.b)
return}j=$.h
if(j!==k)$.h=k
else j=null
f=f.c
if((f&15)===8)new A.eb(s,g,p).$0()
else if(q){if((f&1)!==0)new A.ea(s,m).$0()}else if((f&2)!==0)new A.e9(g,s).$0()
if(j!=null)$.h=j
f=s.c
if(f instanceof A.o){r=s.a.$ti
r=r.h("ae<2>").b(f)||!r.y[1].b(f)}else r=!1
if(r){i=s.a.b
if((f.a&24)!==0){h=i.c
i.c=null
b=i.a1(h)
i.a=f.a&30|i.a&1
i.c=f.c
g.a=f
continue}else A.f8(f,i,!0)
return}}i=s.a.b
h=i.c
i.c=null
b=i.a1(h)
f=s.b
r=s.c
if(!f){i.a=8
i.c=r}else{i.a=i.a&1|16
i.c=r}g.a=i
f=i}},
jI(a,b){if(t.Q.b(a))return b.aa(a)
if(t.v.b(a))return a
throw A.d(A.fG(a,"onError",u.c))},
jD(){var s,r
for(s=$.aY;s!=null;s=$.aY){$.bZ=null
r=s.b
$.aY=r
if(r==null)$.bY=null
s.a.$0()}},
jM(){$.fk=!0
try{A.jD()}finally{$.bZ=null
$.fk=!1
if($.aY!=null)$.fC().$1(A.hE())}},
hC(a){var s=new A.cI(a),r=$.bY
if(r==null){$.aY=$.bY=s
if(!$.fk)$.fC().$1(A.hE())}else $.bY=r.b=s},
jJ(a){var s,r,q,p=$.aY
if(p==null){A.hC(a)
$.bZ=$.bY
return}s=new A.cI(a)
r=$.bZ
if(r==null){s.b=p
$.aY=$.bZ=s}else{q=r.b
s.b=q
$.bZ=r.b=s
if(q==null)$.bY=s}},
hP(a){var s=null,r=$.h
if(B.b===r){A.b_(s,s,B.b,a)
return}A.b_(s,s,r,r.b7(a))},
kx(a,b){A.ez(a,"stream",t.K)
return new A.cX(b.h("cX<0>"))},
h0(a){return new A.bz(null,null,a.h("bz<0>"))},
hB(a){return},
h4(a,b){return b==null?A.jY():b},
h5(a,b){if(b==null)b=A.k_()
if(t.k.b(b))return a.aa(b)
if(t.u.b(b))return b
throw A.d(A.a1(u.h,null))},
jE(a){},
jG(a,b){A.aZ(a,b)},
jF(){},
aZ(a,b){A.jJ(new A.ex(a,b))},
hx(a,b,c,d){var s,r=$.h
if(r===c)return d.$0()
$.h=c
s=r
try{r=d.$0()
return r}finally{$.h=s}},
hz(a,b,c,d,e){var s,r=$.h
if(r===c)return d.$1(e)
$.h=c
s=r
try{r=d.$1(e)
return r}finally{$.h=s}},
hy(a,b,c,d,e,f){var s,r=$.h
if(r===c)return d.$2(e,f)
$.h=c
s=r
try{r=d.$2(e,f)
return r}finally{$.h=s}},
b_(a,b,c,d){if(B.b!==c){d=c.b7(d)
d=d}A.hC(d)},
dW:function dW(a){this.a=a},
dV:function dV(a,b,c){this.a=a
this.b=b
this.c=c},
dX:function dX(a){this.a=a},
dY:function dY(a){this.a=a},
eo:function eo(){},
ep:function ep(a,b){this.a=a
this.b=b},
cH:function cH(a,b){this.a=a
this.b=!1
this.$ti=b},
ev:function ev(a){this.a=a},
ew:function ew(a){this.a=a},
ey:function ey(a){this.a=a},
N:function N(a,b){this.a=a
this.b=b},
ai:function ai(a,b){this.a=a
this.$ti=b},
aS:function aS(a,b,c,d,e,f,g){var _=this
_.ay=0
_.CW=_.ch=null
_.w=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.r=_.f=null
_.$ti=g},
cJ:function cJ(){},
bz:function bz(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.r=_.e=_.d=null
_.$ti=c},
cK:function cK(){},
ay:function ay(a,b){this.a=a
this.$ti=b},
aT:function aT(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
o:function o(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
e4:function e4(a,b){this.a=a
this.b=b},
e8:function e8(a,b){this.a=a
this.b=b},
e7:function e7(a,b){this.a=a
this.b=b},
e6:function e6(a,b){this.a=a
this.b=b},
e5:function e5(a,b){this.a=a
this.b=b},
eb:function eb(a,b,c){this.a=a
this.b=b
this.c=c},
ec:function ec(a,b){this.a=a
this.b=b},
ed:function ed(a){this.a=a},
ea:function ea(a,b){this.a=a
this.b=b},
e9:function e9(a,b){this.a=a
this.b=b},
cI:function cI(a){this.a=a
this.b=null},
H:function H(){},
dG:function dG(a,b){this.a=a
this.b=b},
dH:function dH(a,b){this.a=a
this.b=b},
dI:function dI(a,b){this.a=a
this.b=b},
dJ:function dJ(a,b){this.a=a
this.b=b},
bC:function bC(){},
bD:function bD(){},
bA:function bA(){},
e_:function e_(a,b,c){this.a=a
this.b=b
this.c=c},
dZ:function dZ(a){this.a=a},
aW:function aW(){},
cM:function cM(){},
cL:function cL(a,b){this.b=a
this.a=null
this.$ti=b},
e1:function e1(a,b){this.b=a
this.c=b
this.a=null},
e0:function e0(){},
cT:function cT(a){var _=this
_.a=0
_.c=_.b=null
_.$ti=a},
ek:function ek(a,b){this.a=a
this.b=b},
bE:function bE(a,b){var _=this
_.a=1
_.b=a
_.c=null
_.$ti=b},
cX:function cX(a){this.$ti=a},
et:function et(){},
ex:function ex(a,b){this.a=a
this.b=b},
em:function em(){},
en:function en(a,b){this.a=a
this.b=b},
h8(a,b){var s=a[b]
return s===a?null:s},
fa(a,b,c){if(c==null)a[b]=a
else a[b]=c},
f9(){var s=Object.create(null)
A.fa(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
fS(a,b){return new A.a4(a.h("@<0>").n(b).h("a4<1,2>"))},
at(a,b,c){return A.k3(a,new A.a4(b.h("@<0>").n(c).h("a4<1,2>")))},
dt(a,b){return new A.a4(a.h("@<0>").n(b).h("a4<1,2>"))},
it(a){return new A.aj(a.h("aj<0>"))},
fb(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
h9(a,b,c){var s=new A.aV(a,b,c.h("aV<0>"))
s.c=a.e
return s},
f4(a,b,c){var s=A.fS(b,c)
s.a2(0,a)
return s},
f6(a){var s,r
if(A.fv(a))return"{...}"
s=new A.cD("")
try{r={}
$.aF.push(a)
s.a+="{"
r.a=!0
a.J(0,new A.du(r,s))
s.a+="}"}finally{$.aF.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
bG:function bG(){},
aU:function aU(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
bH:function bH(a,b){this.a=a
this.$ti=b},
cP:function cP(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aj:function aj(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ej:function ej(a){this.a=a
this.b=null},
aV:function aV(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
j:function j(){},
z:function z(){},
du:function du(a,b){this.a=a
this.b=b},
aQ:function aQ(){},
bO:function bO(){},
ih(a,b){a=A.y(a,new Error())
a.stack=b.i(0)
throw a},
f5(a,b,c,d){var s,r=c?J.fR(a,d):J.iq(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
iu(a,b,c){var s,r,q=A.u([],c.h("n<0>"))
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.eU)(a),++r)q.push(a[r])
q.$flags=1
return q},
au(a,b){var s,r
if(Array.isArray(a))return A.u(a.slice(0),b.h("n<0>"))
s=A.u([],b.h("n<0>"))
for(r=J.c1(a);r.l();)s.push(r.gm())
return s},
h1(a,b,c){var s=J.c1(b)
if(!s.l())return a
if(c.length===0){do a+=A.m(s.gm())
while(s.l())}else{a+=A.m(s.gm())
while(s.l())a=a+c+A.m(s.gm())}return a},
iJ(){return A.X(new Error())},
ig(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
fQ(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c8(a){if(a>=10)return""+a
return"0"+a},
dd(a){if(typeof a=="number"||A.cY(a)||a==null)return J.aG(a)
if(typeof a=="string")return JSON.stringify(a)
return A.fW(a)},
ii(a,b){A.ez(a,"error",t.K)
A.ez(b,"stackTrace",t.l)
A.ih(a,b)},
c4(a){return new A.c3(a)},
a1(a,b){return new A.Z(!1,null,b,a)},
fG(a,b,c){return new A.Z(!0,a,b,c)},
iG(a){var s=null
return new A.aP(s,s,!1,s,s,a)},
iH(a,b){return new A.aP(null,null,!0,a,b,"Value not in range")},
dC(a,b,c,d,e){return new A.aP(b,c,!0,a,d,"Invalid value")},
fY(a,b){if(a.cf(0,0))throw A.d(A.dC(a,0,null,b,null))
return a},
ij(a,b,c,d){return new A.cc(b,!0,a,d,"Index out of range")},
dU(a){return new A.by(a)},
bx(a){return new A.cE(a)},
cC(a){return new A.aw(a)},
a3(a){return new A.c6(a)},
bd(a){return new A.e3(a)},
ip(a,b,c){var s,r
if(A.fv(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.u([],t.s)
$.aF.push(a)
try{A.jB(a,s)}finally{$.aF.pop()}r=A.h1(b,s,", ")+c
return r.charCodeAt(0)==0?r:r},
f1(a,b,c){var s,r
if(A.fv(a))return b+"..."+c
s=new A.cD(b)
$.aF.push(a)
try{r=s
r.a=A.h1(r.a,a,", ")}finally{$.aF.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
jB(a,b){var s,r,q,p,o,n,m,l=a.gp(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.l())return
s=A.m(l.gm())
b.push(s)
k+=s.length+2;++j}if(!l.l()){if(j<=5)return
r=b.pop()
q=b.pop()}else{p=l.gm();++j
if(!l.l()){if(j<=4){b.push(A.m(p))
return}r=A.m(p)
q=b.pop()
k+=r.length+2}else{o=l.gm();++j
for(;l.l();p=o,o=n){n=l.gm();++j
if(j>100){for(;;){if(!(k>75&&j>3))break
k-=b.pop().length+2;--j}b.push("...")
return}}q=A.m(p)
r=A.m(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)b.push(m)
b.push(q)
b.push(r)},
fT(a,b,c,d,e){return new A.ap(a,b.h("@<0>").n(c).n(d).n(e).h("ap<1,2,3,4>"))},
dy(a,b,c,d){var s
if(B.f===c){s=J.E(a)
b=J.E(b)
return A.dK(A.a6(A.a6($.d_(),s),b))}if(B.f===d){s=J.E(a)
b=J.E(b)
c=J.E(c)
return A.dK(A.a6(A.a6(A.a6($.d_(),s),b),c))}s=J.E(a)
b=J.E(b)
c=J.E(c)
d=J.E(d)
d=A.dK(A.a6(A.a6(A.a6(A.a6($.d_(),s),b),c),d))
return d},
fU(a){var s,r=$.d_()
for(s=J.c1(a);s.l();)r=A.a6(r,J.E(s.gm()))
return A.dK(r)},
c0(a){A.hN(a)},
h_(a,b,c,d){return new A.aq(a,b,c.h("@<0>").n(d).h("aq<1,2>"))},
c7:function c7(a,b,c){this.a=a
this.b=b
this.c=c},
e2:function e2(){},
r:function r(){},
c3:function c3(a){this.a=a},
a7:function a7(){},
Z:function Z(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aP:function aP(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
cc:function cc(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
by:function by(a){this.a=a},
cE:function cE(a){this.a=a},
aw:function aw(a){this.a=a},
c6:function c6(a){this.a=a},
bw:function bw(){},
e3:function e3(a){this.a=a},
b:function b(){},
v:function v(a,b,c){this.a=a
this.b=b
this.$ti=c},
A:function A(){},
c:function c(){},
bQ:function bQ(a){this.a=a},
dF:function dF(){this.b=this.a=0},
cD:function cD(a){this.a=a},
dw:function dw(a){this.a=a},
hp(a){var s
if(typeof a=="function")throw A.d(A.a1("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.jf,a)
s[$.fA()]=a
return s},
jf(a,b,c){if(c>=1)return a.$1(b)
return a.$0()},
hw(a){return a==null||A.cY(a)||typeof a=="number"||typeof a=="string"||t.M.b(a)||t.bX.b(a)||t.ca.b(a)||t.W.b(a)||t.c0.b(a)||t.w.b(a)||t.bk.b(a)||t.E.b(a)||t.q.b(a)||t.B.b(a)||t.Y.b(a)},
eL(a){if(A.hw(a))return a
return new A.eM(new A.aU(t.A)).$1(a)},
kk(a,b){var s=new A.o($.h,b.h("o<0>")),r=new A.ay(s,b.h("ay<0>"))
a.then(A.b2(new A.eQ(r),1),A.b2(new A.eR(r),1))
return s},
hv(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
fq(a){if(A.hv(a))return a
return new A.eA(new A.aU(t.A)).$1(a)},
eM:function eM(a){this.a=a},
eQ:function eQ(a){this.a=a},
eR:function eR(a){this.a=a},
eA:function eA(a){this.a=a},
eh:function eh(){},
kp(a){switch(a){case"Easy":return B.A
case"Medium":return B.B
case"Hard":return B.C
case"Very Hard":return B.D
default:throw A.d(A.a1("Invalid difficulty string: "+a,null))}},
km(a){var s=A.b5(a)
if(s.gu(s))return null
return A.fy(s)},
jS(a,b,c){switch(c.a){case 0:return A.km(a)
case 1:case 2:return A.k7(a,b,c)
case 3:return A.hL(a,b,null)}},
jR(a){var s,r,q=a.gO()
q=A.d8(q,A.f(q).h("b.E"),t.K)
s=A.au(q,A.f(q).h("b.E"))
r=A.jS(A.i7(t.G.a(s[0])),A.hR(A.bX(s[1])),A.kp(A.bX(s[2])))
if(r==null)return new A.R(A.u([],t.x),B.p)
else return A.bg(A.u([r.a,r.b],t.t),t.p)},
aH:function aH(a,b){this.a=a
this.b=b},
k7(a0,a1,a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=A.b5(a0)
if(a.gu(a))throw A.d(A.bd("No available moves"))
s=a0.c
r=s.b
q=a0.a
p=A.f(q).h("bo<2>")
if(new A.a9(new A.bo(q,p),new A.eD(a1,r),p.h("a9<b.E>")).gk(0)<=1)return A.hL(a0,a1,3)
o=A.u([],t.az)
for(p=a.gp(a),n=a1===B.d,m=t.R,l=t.S,k=a0.b,j=t.J;p.l();){i=p.gm()
h=new A.t(a1,i)
g=a0.a
f=A.fS(m,l)
f.a2(0,g)
g=A.au(k,j)
e=new A.b6(f,g,s)
f=A.fI(h,e)
e.a=f
e.a=A.d3(f,s)
g.push(h)
d=A.kn(e,20)
c=A.fJ(d.a,s)
b=c.a-c.b
b=n?b:-b
o.push(new A.cW(i,b,d.b))}B.a.aP(o,new A.eC())
A.c0("Greedy search for "+A.fx(a1)+", top score: "+B.a.gD(o).b+", last: "+B.a.gA(o).b)
switch(a2.a){case 1:return o[Math.min(2,o.length-1)].a
case 2:return B.a.gD(o).a
default:throw A.d(A.bd("Unsupported difficulty for greedy search"))}},
eD:function eD(a,b){this.a=a
this.b=b},
eC:function eC(){},
k8(a){var s=a.a,r=new A.a5(s,A.f(s).h("a5<1>")).aJ(0,new A.eE()),q=new A.t(B.c.av(r.a,2),B.c.av(r.b,2))
s=a.b.length
if(s===0)return q
if(s!==1)throw A.d(A.bd("Heuristic move only valid for first or second move"))
return A.fy(A.fK(q))},
hL(a,b,c){var s,r,q,p,o,n,m,l,k=a.b.length
if(k!==0)s=k===1&&!a.c.r
else s=!0
if(s){A.c0("Using heuristic move for MCTS")
return A.k8(a)}s=A.u([],t.e)
r=new A.w(null,s,a)
A.c0("Starting MCTS for "+A.fx(b))
q=new A.dF()
$.fB()
p=$.dB.$0()
q.a=p
q.b=null
for(o=0;o<1e4;++o){A.ko(A.hQ(r,c))
if(q.gba()>5000)break}n=r.bf()
if(q.b==null)q.b=$.dB.$0()
A.c0("MCTS completed "+B.c.i(o)+" iterations in "+q.gba()+" ms.")
m=A.io(s,new A.eO())
if(m!=null)A.c0("center node: "+m.gT())
A.c0(r.aN())
for(l=r;l.b.length!==0;){l=l.bf()
A.hN(l.aN())}return n.ga6().b},
ft(a,b){var s=A.fJ(a,b),r=s.a,q=s.b
if(r>q)return B.L
else if(q>r)return B.K
else return B.M},
ko(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.d
if(!(h!=null)){s=a.c
r=A.b5(s)
if(r.gu(r)){h=A.ft(s.a,s.c)
a.d=h}else{q=s.b9()
for(s=q.b,p=q.c,o=0;o<20;++o){n=A.b5(q)
if(n.gu(n))break
m=n.H(0)
l=m[B.n.bg(m.length)]
k=new A.t(A.hG(s),l)
j=A.fI(k,q)
q.a=j
q.a=A.d3(j,p)
B.a.F(s,k)}h=A.ft(q.a,p)}}for(s=h.a,p=h.b,i=a;i!=null;){i.f+=s
i.e+=p
i=i.a}},
hQ(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(a.d!=null||b===0)return a
s=a.c
r=A.b5(s)
if(r.gu(r)){a.d=A.ft(s.a,s.c)
return a}q=a.b
if(q.length<r.gk(r)){p=A.fy(q.length!==0?new A.a9(r,new A.eS(new A.J(q,new A.eT(),A.ac(q).h("J<1,+(a,a)>")).cb(0)),A.f(r).h("a9<b.E>")):r)
o=A.hG(s.b)
n=s.b9()
n.c0(new A.t(o,p))
m=new A.w(a,A.u([],t.e),n)
q.push(m)
return m}for(s=q.length,l=null,k=-1/0,j=0;j<q.length;q.length===s||(0,A.eU)(q),++j){i=q[j]
o=i.c.b
h=(o.length!==0?B.a.gA(o).a:B.h)===B.h?i.e:i.f
o=i.a
g=h/(i.e+i.f)+1.414*Math.sqrt(Math.log(o.e+o.f)/(i.e+i.f))
if(g>k){k=g
l=i}}l.toString
return A.hQ(l,b==null?null:b-1)},
w:function w(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.f=_.e=0},
dM:function dM(){},
dN:function dN(){},
eE:function eE(){},
eO:function eO(){},
eT:function eT(){},
eS:function eS(a){this.a=a},
dv:function dv(){var _=this
_.a=3
_.b=5
_.c=2
_.d=5
_.e=4
_.f=6
_.r=!1
_.w=!0},
fJ(a,b){var s={}
s.a=s.b=0
a.J(0,new A.d2(s,b))
return new A.t(s.b,s.a)},
fH(a,b){var s,r=a.b,q=b.a,p=b.c
if(!q.L(r))return!1
if(b.b.length===1&&p.r)return!0
s=q.j(0,r)
s.toString
if(Math.abs(s)>=p.a)return!1
return!0},
fI(a,b){var s,r,q,p,o=b.a
if(!A.fH(a,b))throw A.d(A.bd("Invalid move "+a.i(0)))
s=A.f4(o,t.R,t.S)
r=a.b
q=b.c
if(b.b.length===0)s.B(0,r,q.e)
else{p=q.d
s.B(0,r,a.a===B.d?p:-p)}return s},
fK(a){var s=a.a,r=a.b,q=s-1,p=r-1,o=r+1,n=s+1
return A.u([new A.t(q,p),new A.t(q,o),new A.t(s,r+2),new A.t(s,r-2),new A.t(n,p),new A.t(n,o)],t.c)},
d3(a,b){var s,r,q,p,o,n,m,l,k,j=A.dt(t.R,t.S),i=b.f
for(s=new A.T(a,A.f(a).h("T<1,2>")).gp(0),r=-i;s.l();){q=s.d
p=q.a
o=q.b
if(o!==0&&Math.abs(o)<=b.c&&b.w){if(o>0)n=1
else n=o<0?-1:o
o-=n}for(n=A.fK(p),m=0;m<6;++m){l=n[m]
if(a.L(l)){k=a.j(0,l)
k.toString
if(Math.abs(k)<b.b)continue
if(k>0)k=1
else if(k<0)k=-1
o+=k}}j.B(0,p,B.c.bR(o,r,i))}return j},
i6(a){var s,r,q,p,o,n=a.b
if(n.length>=4){s=B.a.gA(n)
r=n.length
q=n[r-2]
p=n[r-3]
o=n[r-4]
if(s.b.v(0,p.b)&&q.b.v(0,o.b))return!0}r=A.b5(a)
return r.gu(r)},
b5(a){var s,r=a.a,q=a.c
if(a.b.length===1&&q.r)return new A.a5(r,A.f(r).h("a5<1>"))
s=A.f(r).h("T<1,2>")
return new A.V(new A.a9(new A.T(r,s),new A.d4(q),s.h("a9<b.E>")),new A.d5(),s.h("V<b.E,+(a,a)>"))},
d2:function d2(a,b){this.a=a
this.b=b},
d4:function d4(a){this.a=a},
d5:function d5(){},
fx(a){switch(a.a){case 0:return"Blue"
case 1:return"Green"}},
hR(a){switch(a){case"Blue":return B.d
case"Green":return B.h
default:throw A.d(A.a1("Invalid player string: "+a,null))}},
i7(a){var s,r,q,p,o,n,m
t.aP.a(a)
s=t.G
r=s.a(a.j(0,"board")).a5(0,new A.d6(),t.R,t.S)
q=J.d1(t.U.a(a.j(0,"moveHistory")))
p=A.ac(q).h("J<1,+(ah,+(a,a))>")
o=A.au(new A.J(q,new A.d7(),p),p.h("U.E"))
n=s.a(a.j(0,"moveSettings")).aA(0,t.N,t.K)
m=new A.dv()
m.a=A.aX(n.j(0,"captureThreshold"))
m.b=A.aX(n.j(0,"spreadThreshold"))
m.c=A.aX(n.j(0,"decayThreshold"))
m.d=A.aX(n.j(0,"moveValue"))
m.e=A.aX(n.j(0,"firstMoveValue"))
m.f=A.aX(n.j(0,"maxValue"))
m.r=A.fe(n.j(0,"secondMovePlaceAnywhere"))
m.w=A.fe(n.j(0,"hasDecay"))
return new A.b6(r,o,m)},
hG(a){if(a.length===0)return B.d
return B.a.gA(a).a===B.d?B.h:B.d},
ah:function ah(a,b){this.a=a
this.b=b},
b6:function b6(a,b,c){this.a=a
this.b=b
this.c=c},
d6:function d6(){},
d7:function d7(){},
dp:function dp(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.r=$
_.w=f
_.x=g
_.$ti=h},
aI:function aI(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e
_.r=f
_.$ti=g},
cg:function cg(a,b){this.a=a
this.b=b},
bi:function bi(a,b){this.a=a
this.b=b},
ce:function ce(a,b){this.a=a
this.$ti=b},
iP(a,b,c,d){var s=new A.cR(a,A.h0(d),c.h("@<0>").n(d).h("cR<1,2>"))
s.bm(a,b,c,d)
return s},
cf:function cf(a,b){this.a=a
this.$ti=b},
cR:function cR(a,b,c){this.a=a
this.c=b
this.$ti=c},
eg:function eg(a,b){this.a=a
this.b=b},
cQ:function cQ(){},
eJ(a,b,c,d){var s=0,r=A.fl(t.H),q,p
var $async$eJ=A.fn(function(e,f){if(e===1)return A.fg(f,r)
for(;;)switch(s){case 0:p=v.G.self
p=J.eW(p)===B.r?A.iP(A.hm(p),null,c,d):A.ik(p,A.hJ(A.hF(),c),!1,null,A.hJ(A.hF(),c),c,d)
q=A.h7(null,t.H)
s=2
return A.ff(q,$async$eJ)
case 2:p.gaH().bd(new A.eK(a,new A.ce(new A.cf(p,c.h("@<0>").n(d).h("cf<1,2>")),c.h("@<0>").n(d).h("ce<1,2>")),d,c))
p.aD()
return A.fh(null,r)}})
return A.fi($async$eJ,r)},
eK:function eK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
di:function di(){},
f0(a,b,c){return new A.F(c,a,b)},
il(a){var s,r,q,p=A.bX(a.j(0,"name")),o=t.G.a(a.j(0,"value")),n=o.j(0,"e")
if(n==null)n=A.eu(n)
s=new A.bQ(A.bX(o.j(0,"s")))
for(r=0;r<2;++r){q=$.im[r].$2(n,s)
if(q.ga7()===p)return q}return new A.F("",n,s)},
iK(a,b){return new A.ax("",a,b)},
h3(a,b){return new A.ax("",a,b)},
F:function F(a,b,c){this.a=a
this.b=b
this.c=c},
ax:function ax(a,b,c){this.a=a
this.b=b
this.c=c},
bg(a,b){var s
$label0$0:{if(b.b(a)){s=a
break $label0$0}if(typeof a=="number"){s=new A.ca(a)
break $label0$0}if(typeof a=="string"){s=new A.cb(a)
break $label0$0}if(A.cY(a)){s=new A.c9(a)
break $label0$0}if(t.U.b(a)){s=new A.R(J.eX(a,new A.dg(),t.f),B.p)
break $label0$0}if(t.G.b(a)){s=t.f
s=new A.bf(a.a5(0,new A.dh(),s,s),B.I)
break $label0$0}s=A.an(A.iK("Unsupported type "+J.eW(a).i(0)+" when wrapping an IsolateType",B.e))}return b.a(s)},
k:function k(){},
dg:function dg(){},
dh:function dh(){},
ca:function ca(a){this.a=a},
cb:function cb(a){this.a=a},
c9:function c9(a){this.a=a},
R:function R(a,b){this.b=a
this.a=b},
bf:function bf(a,b){this.b=a
this.a=b},
ab:function ab(){},
ee:function ee(a){this.a=a},
C:function C(){},
ef:function ef(a){this.a=a},
hN(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
kq(a){throw A.y(new A.cl("Field '"+a+"' has been assigned during initialization."),new Error())},
io(a,b){var s,r,q
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.eU)(a),++r){q=a[r]
if(b.$1(q))return q}return null},
ki(){var s=t.p
A.eJ(A.jT(),null,s,s)},
kn(a,b){var s,r
for(s=a.c,r=0;r<b;++r){a.a=A.d3(a.a,s)
if(A.i6(a))break}return new A.t(a.a,r)},
fy(a){var s=J.d1(a)
return s[B.n.bg(s.length)]},
ik(a,b,c,d,e,f,g){var s,r,q
if(t.j.b(a))t.r.a(J.eV(a)).gaC()
s=$.h
r=t.j.b(a)
q=r?t.r.a(J.eV(a)).gaC():a
if(r)J.fF(a)
s=new A.aI(q,d,e,A.h0(f),!1,new A.ay(new A.o(s,t.D),t.h),f.h("@<0>").n(g).h("aI<1,2>"))
q.onmessage=A.hp(s.gby())
return s},
fp(a,b,c,d){var s=b==null?null:b.$1(a)
return s==null?d.a(a):s}},B={}
var w=[A,J,B]
var $={}
A.f2.prototype={}
J.cd.prototype={
v(a,b){return a===b},
gt(a){return A.bu(a)},
i(a){return"Instance of '"+A.cA(a)+"'"},
gq(a){return A.L(A.fj(this))}}
J.ci.prototype={
i(a){return String(a)},
gt(a){return a?519018:218159},
gq(a){return A.L(t.y)},
$il:1,
$iD:1}
J.bk.prototype={
v(a,b){return null==b},
i(a){return"null"},
gt(a){return 0},
gq(a){return A.L(t.P)},
$il:1}
J.bm.prototype={$iq:1}
J.ag.prototype={
gt(a){return 0},
gq(a){return B.r},
i(a){return String(a)}}
J.cz.prototype={}
J.aR.prototype={}
J.af.prototype={
i(a){var s=a[$.fA()]
if(s==null)return this.bk(a)
return"JavaScript function for "+J.aG(s)}}
J.bl.prototype={
gt(a){return 0},
i(a){return String(a)}}
J.bn.prototype={
gt(a){return 0},
i(a){return String(a)}}
J.n.prototype={
K(a,b){return new A.a2(a,A.ac(a).h("@<1>").n(b).h("a2<1,2>"))},
F(a,b){a.$flags&1&&A.fz(a,29)
a.push(b)},
a2(a,b){var s
a.$flags&1&&A.fz(a,"addAll",2)
for(s=b.gp(b);s.l();)a.push(s.gm())},
S(a,b,c){return new A.J(a,b,A.ac(a).h("@<1>").n(c).h("J<1,2>"))},
bZ(a,b){var s,r=A.f5(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)r[s]=A.m(a[s])
return r.join(b)},
aJ(a,b){var s,r,q=a.length
if(q===0)throw A.d(A.S())
s=a[0]
for(r=1;r<q;++r){s=b.$2(s,a[r])
if(q!==a.length)throw A.d(A.a3(a))}return s},
C(a,b){return a[b]},
gD(a){if(a.length>0)return a[0]
throw A.d(A.S())},
gA(a){var s=a.length
if(s>0)return a[s-1]
throw A.d(A.S())},
aP(a,b){var s,r,q,p,o
a.$flags&2&&A.fz(a,"sort")
s=a.length
if(s<2)return
if(b==null)b=J.jp()
if(s===2){r=a[0]
q=a[1]
if(b.$2(r,q)>0){a[0]=q
a[1]=r}return}p=0
if(A.ac(a).c.b(null))for(o=0;o<a.length;++o)if(a[o]===void 0){a[o]=null;++p}a.sort(A.b2(b,2))
if(p>0)this.bK(a,p)},
bK(a,b){var s,r=a.length
for(;s=r-1,r>0;r=s)if(a[s]===null){a[s]=void 0;--b
if(b===0)break}},
gu(a){return a.length===0},
i(a){return A.f1(a,"[","]")},
H(a){var s=A.u(a.slice(0),A.ac(a))
return s},
gp(a){return new J.c2(a,a.length,A.ac(a).h("c2<1>"))},
gt(a){return A.bu(a)},
gk(a){return a.length},
j(a,b){if(!(b>=0&&b<a.length))throw A.d(A.hH(a,b))
return a[b]},
gq(a){return A.L(A.ac(a))},
$ie:1,
$ib:1,
$ii:1}
J.ch.prototype={
cd(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.cA(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.dq.prototype={}
J.c2.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.d(A.eU(q))
s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0}}
J.aJ.prototype={
E(a,b){var s
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){s=this.ga4(b)
if(this.ga4(a)===s)return 0
if(this.ga4(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
ga4(a){return a===0?1/a<0:a<0},
ca(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.d(A.dU(""+a+".toInt()"))},
bU(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.d(A.dU(""+a+".floor()"))},
bR(a,b,c){if(B.c.E(b,c)>0)throw A.d(A.jU(b))
if(this.E(a,b)<0)return b
if(this.E(a,c)>0)return c
return a},
cc(a,b){var s
if(b>20)throw A.d(A.dC(b,0,20,"fractionDigits",null))
s=a.toFixed(b)
if(a===0&&this.ga4(a))return"-"+s
return s},
i(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gt(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
av(a,b){return(a|0)===a?a/b|0:this.bP(a,b)},
bP(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.d(A.dU("Result of truncating division is "+A.m(s)+": "+A.m(a)+" ~/ "+b))},
bN(a,b){var s
if(a>0)s=this.bM(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
bM(a,b){return b>31?0:a>>>b},
gq(a){return A.L(t.n)},
$ip:1,
$iad:1}
J.bj.prototype={
gq(a){return A.L(t.S)},
$il:1,
$ia:1}
J.cj.prototype={
gq(a){return A.L(t.i)},
$il:1}
J.aK.prototype={
E(a,b){var s
if(a===b)s=0
else s=a<b?-1:1
return s},
i(a){return a},
gt(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gq(a){return A.L(t.N)},
gk(a){return a.length},
$il:1,
$iO:1}
A.b8.prototype={
N(a,b,c,d){var s=this.a.be(null,b,c),r=new A.b9(s,$.h,this.$ti.h("b9<1,2>"))
s.a8(r.gbE())
r.a8(a)
r.a9(d)
return r},
bd(a){return this.N(a,null,null,null)},
be(a,b,c){return this.N(a,b,c,null)}}
A.b9.prototype={
a8(a){this.c=a==null?null:a},
a9(a){var s=this
s.a.a9(a)
if(a==null)s.d=null
else if(t.k.b(a))s.d=s.b.aa(a)
else if(t.u.b(a))s.d=a
else throw A.d(A.a1(u.h,null))},
bF(a){var s,r,q,p,o,n=this,m=n.c
if(m==null)return
s=null
try{s=n.$ti.y[1].a(a)}catch(o){r=A.a0(o)
q=A.X(o)
p=n.d
if(p==null)A.aZ(r,q)
else{m=n.b
if(t.k.b(p))m.bh(p,r,q)
else m.ab(t.u.a(p),r)}return}n.b.ab(m,s)}}
A.aa.prototype={
gp(a){return new A.c5(J.c1(this.gI()),A.f(this).h("c5<1,2>"))},
gk(a){return J.d0(this.gI())},
gu(a){return J.i5(this.gI())},
C(a,b){return A.f(this).y[1].a(J.fE(this.gI(),b))},
gD(a){return A.f(this).y[1].a(J.fF(this.gI()))},
gA(a){return A.f(this).y[1].a(J.eV(this.gI()))},
i(a){return J.aG(this.gI())}}
A.c5.prototype={
l(){return this.a.l()},
gm(){return this.$ti.y[1].a(this.a.gm())}}
A.ao.prototype={
K(a,b){return A.d8(this.a,A.f(this).c,b)},
gI(){return this.a}}
A.bF.prototype={$ie:1}
A.bB.prototype={
j(a,b){return this.$ti.y[1].a(J.i3(this.a,b))},
$ie:1,
$ii:1}
A.a2.prototype={
K(a,b){return new A.a2(this.a,this.$ti.h("@<1>").n(b).h("a2<1,2>"))},
gI(){return this.a}}
A.aq.prototype={
K(a,b){return new A.aq(this.a,this.b,this.$ti.h("@<1>").n(b).h("aq<1,2>"))},
$ie:1,
$iav:1,
gI(){return this.a}}
A.ap.prototype={
aA(a,b,c){return new A.ap(this.a,this.$ti.h("@<1,2>").n(b).n(c).h("ap<1,2,3,4>"))},
j(a,b){return this.$ti.h("4?").a(this.a.j(0,b))},
J(a,b){this.a.J(0,new A.d9(this,b))},
gM(){var s=this.$ti
return A.d8(this.a.gM(),s.c,s.y[2])},
gk(a){var s=this.a
return s.gk(s)}}
A.d9.prototype={
$2(a,b){var s=this.a.$ti
this.b.$2(s.y[2].a(a),s.y[3].a(b))},
$S(){return this.a.$ti.h("~(1,2)")}}
A.cl.prototype={
i(a){return"LateInitializationError: "+this.a}}
A.dD.prototype={}
A.e.prototype={}
A.U.prototype={
gp(a){return new A.aL(this,this.gk(0),this.$ti.h("aL<U.E>"))},
gu(a){return J.d0(this.a)===0},
gD(a){var s=this.a,r=J.a_(s)
if(r.gk(s)===0)throw A.d(A.S())
return this.b.$1(r.C(s,0))},
gA(a){var s=this.a,r=J.a_(s)
if(r.gk(s)===0)throw A.d(A.S())
return this.b.$1(r.C(s,r.gk(s)-1))},
S(a,b,c){return new A.J(this,b,this.$ti.h("@<U.E>").n(c).h("J<1,2>"))},
H(a){var s=A.au(this,this.$ti.h("U.E"))
return s},
cb(a){var s,r,q,p,o=A.it(this.$ti.h("U.E"))
for(s=this.a,r=J.a_(s),q=this.b,p=0;p<r.gk(s);++p)o.F(0,q.$1(r.C(s,p)))
return o}}
A.aL.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s,r=this,q=r.a,p=J.a_(q),o=p.gk(q)
if(r.b!==o)throw A.d(A.a3(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.C(q,s);++r.c
return!0}}
A.V.prototype={
gp(a){var s=this.a
return new A.cp(s.gp(s),this.b,A.f(this).h("cp<1,2>"))},
gk(a){var s=this.a
return s.gk(s)},
gu(a){var s=this.a
return s.gu(s)},
gD(a){var s=this.a
return this.b.$1(s.gD(s))},
gA(a){var s=this.a
return this.b.$1(s.gA(s))},
C(a,b){var s=this.a
return this.b.$1(s.C(s,b))}}
A.as.prototype={$ie:1}
A.cp.prototype={
l(){var s=this,r=s.b
if(r.l()){s.a=s.c.$1(r.gm())
return!0}s.a=null
return!1},
gm(){var s=this.a
return s==null?this.$ti.y[1].a(s):s}}
A.J.prototype={
gk(a){return J.d0(this.a)},
C(a,b){return this.b.$1(J.fE(this.a,b))}}
A.a9.prototype={
gp(a){return new A.cG(J.c1(this.a),this.b,this.$ti.h("cG<1>"))},
S(a,b,c){return new A.V(this,b,this.$ti.h("@<1>").n(c).h("V<1,2>"))}}
A.cG.prototype={
l(){var s,r
for(s=this.a,r=this.b;s.l();)if(r.$1(s.gm()))return!0
return!1},
gm(){return this.a.gm()}}
A.be.prototype={}
A.bW.prototype={}
A.t.prototype={$r:"+(1,2)",$s:1}
A.cW.prototype={$r:"+(1,2,3)",$s:2}
A.ba.prototype={
aA(a,b,c){var s=A.f(this)
return A.fT(this,s.c,s.y[1],b,c)},
i(a){return A.f6(this)},
a5(a,b,c,d){var s=A.dt(c,d)
this.J(0,new A.dc(this,b,s))
return s},
$iG:1}
A.dc.prototype={
$2(a,b){var s=this.b.$2(a,b)
this.c.B(0,s.a,s.b)},
$S(){return A.f(this.a).h("~(1,2)")}}
A.bb.prototype={
gk(a){return this.b.length},
gb2(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
L(a){if(typeof a!="string")return!1
if("__proto__"===a)return!1
return this.a.hasOwnProperty(a)},
j(a,b){if(!this.L(b))return null
return this.b[this.a[b]]},
J(a,b){var s,r,q=this.gb2(),p=this.b
for(s=q.length,r=0;r<s;++r)b.$2(q[r],p[r])},
gM(){return new A.bI(this.gb2(),this.$ti.h("bI<1>"))}}
A.bI.prototype={
gk(a){return this.a.length},
gu(a){return 0===this.a.length},
gp(a){var s=this.a
return new A.cS(s,s.length,this.$ti.h("cS<1>"))}}
A.cS.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0}}
A.dj.prototype={
bl(a){if(false)A.hK(0,0)},
v(a,b){if(b==null)return!1
return b instanceof A.bh&&this.a.v(0,b.a)&&A.fs(this)===A.fs(b)},
gt(a){return A.dy(this.a,A.fs(this),B.f,B.f)},
i(a){var s=B.a.bZ([A.L(this.$ti.c)],", ")
return this.a.i(0)+" with "+("<"+s+">")}}
A.bh.prototype={
$0(){return this.a.$1$0(this.$ti.y[0])},
$1(a){return this.a.$1$1(a,this.$ti.y[0])},
$S(){return A.hK(A.cZ(this.a),this.$ti)}}
A.dz.prototype={
$0(){return B.i.bU(1000*this.a.now())},
$S:3}
A.bv.prototype={}
A.dO.prototype={
G(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
A.bt.prototype={
i(a){return"Null check operator used on a null value"}}
A.ck.prototype={
i(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.cF.prototype={
i(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.dx.prototype={
i(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.bc.prototype={}
A.bP.prototype={
i(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iB:1}
A.ar.prototype={
i(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.hS(r==null?"unknown":r)+"'"},
gq(a){var s=A.cZ(this)
return A.L(s==null?A.Y(this):s)},
gce(){return this},
$C:"$1",
$R:1,
$D:null}
A.da.prototype={$C:"$0",$R:0}
A.db.prototype={$C:"$2",$R:2}
A.dL.prototype={}
A.dE.prototype={
i(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.hS(s)+"'"}}
A.b7.prototype={
v(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.b7))return!1
return this.$_target===b.$_target&&this.a===b.a},
gt(a){return(A.eP(this.a)^A.bu(this.$_target))>>>0},
i(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.cA(this.a)+"'")}}
A.cB.prototype={
i(a){return"RuntimeError: "+this.a}}
A.a4.prototype={
gk(a){return this.a},
gM(){return new A.a5(this,A.f(this).h("a5<1>"))},
L(a){var s=this.bW(a)
return s},
bW(a){var s=this.d
if(s==null)return!1
return this.aF(s[this.aE(a)],a)>=0},
a2(a,b){b.J(0,new A.dr(this))},
j(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.bX(b)},
bX(a){var s,r,q=this.d
if(q==null)return null
s=q[this.aE(a)]
r=this.aF(s,a)
if(r<0)return null
return s[r].b},
B(a,b,c){var s,r,q=this
if(typeof b=="string"){s=q.b
q.aQ(s==null?q.b=q.am():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.aQ(r==null?q.c=q.am():r,b,c)}else q.bY(b,c)},
bY(a,b){var s,r,q,p=this,o=p.d
if(o==null)o=p.d=p.am()
s=p.aE(a)
r=o[s]
if(r==null)o[s]=[p.an(a,b)]
else{q=p.aF(r,a)
if(q>=0)r[q].b=b
else r.push(p.an(a,b))}},
J(a,b){var s=this,r=s.e,q=s.r
while(r!=null){b.$2(r.a,r.b)
if(q!==s.r)throw A.d(A.a3(s))
r=r.c}},
aQ(a,b,c){var s=a[b]
if(s==null)a[b]=this.an(b,c)
else s.b=c},
an(a,b){var s=this,r=new A.ds(a,b)
if(s.e==null)s.e=s.f=r
else s.f=s.f.c=r;++s.a
s.r=s.r+1&1073741823
return r},
aE(a){return J.E(a)&1073741823},
aF(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.M(a[r].a,b))return r
return-1},
i(a){return A.f6(this)},
am(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.dr.prototype={
$2(a,b){this.a.B(0,a,b)},
$S(){return A.f(this.a).h("~(1,2)")}}
A.ds.prototype={}
A.a5.prototype={
gk(a){return this.a.a},
gu(a){return this.a.a===0},
gp(a){var s=this.a
return new A.cn(s,s.r,s.e,this.$ti.h("cn<1>"))}}
A.cn.prototype={
gm(){return this.d},
l(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.a3(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}}}
A.bo.prototype={
gk(a){return this.a.a},
gu(a){return this.a.a===0},
gp(a){var s=this.a
return new A.co(s,s.r,s.e,this.$ti.h("co<1>"))}}
A.co.prototype={
gm(){return this.d},
l(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.a3(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}}}
A.T.prototype={
gk(a){return this.a.a},
gu(a){return this.a.a===0},
gp(a){var s=this.a
return new A.cm(s,s.r,s.e,this.$ti.h("cm<1,2>"))}}
A.cm.prototype={
gm(){var s=this.d
s.toString
return s},
l(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.d(A.a3(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.v(s.a,s.b,r.$ti.h("v<1,2>"))
r.c=s.c
return!0}}}
A.eF.prototype={
$1(a){return this.a(a)},
$S:9}
A.eG.prototype={
$2(a,b){return this.a(a,b)},
$S:16}
A.eH.prototype={
$1(a){return this.a(a)},
$S:35}
A.bN.prototype={
gq(a){return A.L(this.b1())},
b1(){return A.k2(this.$r,this.ak())},
i(a){return this.aw(!1)},
aw(a){var s,r,q,p,o,n=this.bw(),m=this.ak(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
o=m[q]
l=a?l+A.fW(o):l+A.m(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
bw(){var s,r=this.$s
while($.el.length<=r)$.el.push(null)
s=$.el[r]
if(s==null){s=this.bt()
$.el[r]=s}return s},
bt(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=A.u(new Array(l),t.I)
for(s=0;s<l;++s)k[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
k[q]=r[s]}}k=A.iu(k,!1,t.K)
k.$flags=3
return k}}
A.cU.prototype={
ak(){return[this.a,this.b]},
v(a,b){if(b==null)return!1
return b instanceof A.cU&&this.$s===b.$s&&J.M(this.a,b.a)&&J.M(this.b,b.b)},
gt(a){return A.dy(this.$s,this.a,this.b,B.f)}}
A.cV.prototype={
ak(){return[this.a,this.b,this.c]},
v(a,b){var s=this
if(b==null)return!1
return b instanceof A.cV&&s.$s===b.$s&&J.M(s.a,b.a)&&J.M(s.b,b.b)&&J.M(s.c,b.c)},
gt(a){var s=this
return A.dy(s.$s,s.a,s.b,s.c)}}
A.aM.prototype={
gq(a){return B.O},
$il:1,
$ieZ:1}
A.br.prototype={}
A.cq.prototype={
gq(a){return B.P},
$il:1,
$if_:1}
A.aN.prototype={
gk(a){return a.length},
$iI:1}
A.bp.prototype={
j(a,b){A.aB(b,a,a.length)
return a[b]},
$ie:1,
$ib:1,
$ii:1}
A.bq.prototype={$ie:1,$ib:1,$ii:1}
A.cr.prototype={
gq(a){return B.Q},
$il:1,
$ide:1}
A.cs.prototype={
gq(a){return B.R},
$il:1,
$idf:1}
A.ct.prototype={
gq(a){return B.S},
j(a,b){A.aB(b,a,a.length)
return a[b]},
$il:1,
$idk:1}
A.cu.prototype={
gq(a){return B.T},
j(a,b){A.aB(b,a,a.length)
return a[b]},
$il:1,
$idl:1}
A.cv.prototype={
gq(a){return B.U},
j(a,b){A.aB(b,a,a.length)
return a[b]},
$il:1,
$idm:1}
A.cw.prototype={
gq(a){return B.W},
j(a,b){A.aB(b,a,a.length)
return a[b]},
$il:1,
$idQ:1}
A.cx.prototype={
gq(a){return B.X},
j(a,b){A.aB(b,a,a.length)
return a[b]},
$il:1,
$idR:1}
A.bs.prototype={
gq(a){return B.Y},
gk(a){return a.length},
j(a,b){A.aB(b,a,a.length)
return a[b]},
$il:1,
$idS:1}
A.cy.prototype={
gq(a){return B.Z},
gk(a){return a.length},
j(a,b){A.aB(b,a,a.length)
return a[b]},
$il:1,
$idT:1}
A.bJ.prototype={}
A.bK.prototype={}
A.bL.prototype={}
A.bM.prototype={}
A.W.prototype={
h(a){return A.bV(v.typeUniverse,this,a)},
n(a){return A.hj(v.typeUniverse,this,a)}}
A.cO.prototype={}
A.eq.prototype={
i(a){return A.K(this.a,null)}}
A.cN.prototype={
i(a){return this.a}}
A.bR.prototype={$ia7:1}
A.dW.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:4}
A.dV.prototype={
$1(a){var s,r
this.a.a=a
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:12}
A.dX.prototype={
$0(){this.a.$0()},
$S:5}
A.dY.prototype={
$0(){this.a.$0()},
$S:5}
A.eo.prototype={
bn(a,b){if(self.setTimeout!=null)self.setTimeout(A.b2(new A.ep(this,b),0),a)
else throw A.d(A.dU("`setTimeout()` not found."))}}
A.ep.prototype={
$0(){this.b.$0()},
$S:0}
A.cH.prototype={
a3(a){var s,r=this
if(a==null)a=r.$ti.c.a(a)
if(!r.b)r.a.Y(a)
else{s=r.a
if(r.$ti.h("ae<1>").b(a))s.aS(a)
else s.aY(a)}},
aB(a,b){var s=this.a
if(this.b)s.a_(new A.N(a,b))
else s.ag(new A.N(a,b))}}
A.ev.prototype={
$1(a){return this.a.$2(0,a)},
$S:1}
A.ew.prototype={
$2(a,b){this.a.$2(1,new A.bc(a,b))},
$S:10}
A.ey.prototype={
$2(a,b){this.a(a,b)},
$S:11}
A.N.prototype={
i(a){return A.m(this.a)},
$ir:1,
gX(){return this.b}}
A.ai.prototype={}
A.aS.prototype={
ao(){},
ap(){}}
A.cJ.prototype={
gal(){return this.c<4},
bJ(a){var s=a.CW,r=a.ch
if(s==null)this.d=r
else s.ch=r
if(r==null)this.e=s
else r.CW=s
a.CW=a
a.ch=a},
bO(a,b,c,d){var s,r,q,p,o,n,m,l,k=this
if((k.c&4)!==0){s=new A.bE($.h,A.f(k).h("bE<1>"))
A.hP(s.gbG())
if(c!=null)s.c=c
return s}s=$.h
r=d?1:0
q=b!=null?32:0
p=A.h4(s,a)
o=A.h5(s,b)
n=c==null?A.jZ():c
m=new A.aS(k,p,o,n,s,r|q,A.f(k).h("aS<1>"))
m.CW=m
m.ch=m
m.ay=k.c&1
l=k.e
k.e=m
m.ch=null
m.CW=l
if(l==null)k.d=m
else l.ch=m
if(k.d===m)A.hB(k.a)
return m},
bI(a){var s,r=this
A.f(r).h("aS<1>").a(a)
if(a.ch===a)return null
s=a.ay
if((s&2)!==0)a.ay=s|4
else{r.bJ(a)
if((r.c&2)===0&&r.d==null)r.bq()}return null},
ad(){if((this.c&4)!==0)return new A.aw("Cannot add new events after calling close")
return new A.aw("Cannot add new events while doing an addStream")},
F(a,b){if(!this.gal())throw A.d(this.ad())
this.aq(b)},
az(a,b){var s
if(!this.gal())throw A.d(this.ad())
s=A.hq(a,b)
this.au(s.a,s.b)},
bQ(a){return this.az(a,null)},
R(){var s,r,q=this
if((q.c&4)!==0){s=q.r
s.toString
return s}if(!q.gal())throw A.d(q.ad())
q.c|=4
r=q.r
if(r==null)r=q.r=new A.o($.h,t.D)
q.ar()
return r},
bq(){if((this.c&4)!==0){var s=this.r
if((s.a&30)===0)s.Y(null)}A.hB(this.b)}}
A.bz.prototype={
aq(a){var s,r
for(s=this.d,r=this.$ti.h("cL<1>");s!=null;s=s.ch)s.af(new A.cL(a,r))},
au(a,b){var s
for(s=this.d;s!=null;s=s.ch)s.af(new A.e1(a,b))},
ar(){var s=this.d
if(s!=null)for(;s!=null;s=s.ch)s.af(B.z)
else this.r.Y(null)}}
A.cK.prototype={
aB(a,b){var s=this.a
if((s.a&30)!==0)throw A.d(A.cC("Future already completed"))
s.ag(A.hq(a,b))},
b8(a){return this.aB(a,null)}}
A.ay.prototype={
a3(a){var s=this.a
if((s.a&30)!==0)throw A.d(A.cC("Future already completed"))
s.Y(a)},
bS(){return this.a3(null)}}
A.aT.prototype={
c1(a){if((this.c&15)!==6)return!0
return this.b.b.aL(this.d,a.a)},
bV(a){var s,r=this.e,q=null,p=a.a,o=this.b.b
if(t.Q.b(r))q=o.c5(r,p,a.b)
else q=o.aL(r,p)
try{p=q
return p}catch(s){if(t._.b(A.a0(s))){if((this.c&1)!==0)throw A.d(A.a1("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.d(A.a1("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.o.prototype={
bi(a,b,c){var s,r=$.h
if(r===B.b){if(!t.Q.b(b)&&!t.v.b(b))throw A.d(A.fG(b,"onError",u.c))}else b=A.jI(b,r)
s=new A.o(r,c.h("o<0>"))
this.ae(new A.aT(s,3,a,b,this.$ti.h("@<1>").n(c).h("aT<1,2>")))
return s},
b6(a,b,c){var s=new A.o($.h,c.h("o<0>"))
this.ae(new A.aT(s,19,a,b,this.$ti.h("@<1>").n(c).h("aT<1,2>")))
return s},
bL(a){this.a=this.a&1|16
this.c=a},
Z(a){this.a=a.a&30|this.a&1
this.c=a.c},
ae(a){var s=this,r=s.a
if(r<=3){a.a=s.c
s.c=a}else{if((r&4)!==0){r=s.c
if((r.a&24)===0){r.ae(a)
return}s.Z(r)}A.b_(null,null,s.b,new A.e4(s,a))}},
b5(a){var s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
s=n.a
if(s<=3){r=n.c
n.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){s=n.c
if((s.a&24)===0){s.b5(a)
return}n.Z(s)}m.a=n.a1(a)
A.b_(null,null,n.b,new A.e8(m,n))}},
U(){var s=this.c
this.c=null
return this.a1(s)},
a1(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
aW(a){var s=this,r=s.U()
s.a=8
s.c=a
A.az(s,r)},
aY(a){var s=this,r=s.U()
s.a=8
s.c=a
A.az(s,r)},
bs(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.U()
q.Z(a)
A.az(q,r)},
a_(a){var s=this.U()
this.bL(a)
A.az(this,s)},
br(a,b){this.a_(new A.N(a,b))},
Y(a){if(this.$ti.h("ae<1>").b(a)){this.aS(a)
return}this.bp(a)},
bp(a){this.a^=2
A.b_(null,null,this.b,new A.e6(this,a))},
aS(a){A.f8(a,this,!1)
return},
ag(a){this.a^=2
A.b_(null,null,this.b,new A.e5(this,a))},
$iae:1}
A.e4.prototype={
$0(){A.az(this.a,this.b)},
$S:0}
A.e8.prototype={
$0(){A.az(this.b,this.a.a)},
$S:0}
A.e7.prototype={
$0(){A.f8(this.a.a,this.b,!0)},
$S:0}
A.e6.prototype={
$0(){this.a.aY(this.b)},
$S:0}
A.e5.prototype={
$0(){this.a.a_(this.b)},
$S:0}
A.eb.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.c3(q.d)}catch(p){s=A.a0(p)
r=A.X(p)
if(k.c&&k.b.a.c.a===s){q=k.a
q.c=k.b.a.c}else{q=s
o=r
if(o==null)o=A.eY(q)
n=k.a
n.c=new A.N(q,o)
q=n}q.b=!0
return}if(j instanceof A.o&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=j.c
q.b=!0}return}if(j instanceof A.o){m=k.b.a
l=new A.o(m.b,m.$ti)
j.bi(new A.ec(l,m),new A.ed(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.ec.prototype={
$1(a){this.a.bs(this.b)},
$S:4}
A.ed.prototype={
$2(a,b){this.a.a_(new A.N(a,b))},
$S:8}
A.ea.prototype={
$0(){var s,r,q,p,o,n
try{q=this.a
p=q.a
q.c=p.b.b.aL(p.d,this.b)}catch(o){s=A.a0(o)
r=A.X(o)
q=s
p=r
if(p==null)p=A.eY(q)
n=this.a
n.c=new A.N(q,p)
n.b=!0}},
$S:0}
A.e9.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=l.a.a.c
p=l.b
if(p.a.c1(s)&&p.a.e!=null){p.c=p.a.bV(s)
p.b=!1}}catch(o){r=A.a0(o)
q=A.X(o)
p=l.a.a.c
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.eY(p)
m=l.b
m.c=new A.N(p,n)
p=m}p.b=!0}},
$S:0}
A.cI.prototype={}
A.H.prototype={
gk(a){var s={},r=new A.o($.h,t.a)
s.a=0
this.N(new A.dG(s,this),!0,new A.dH(s,r),r.gaX())
return r},
H(a){var s=A.f(this),r=A.u([],s.h("n<H.T>")),q=new A.o($.h,s.h("o<i<H.T>>"))
this.N(new A.dI(this,r),!0,new A.dJ(q,r),q.gaX())
return q}}
A.dG.prototype={
$1(a){++this.a.a},
$S(){return A.f(this.b).h("~(H.T)")}}
A.dH.prototype={
$0(){this.b.aW(this.a.a)},
$S:0}
A.dI.prototype={
$1(a){this.b.push(a)},
$S(){return A.f(this.a).h("~(H.T)")}}
A.dJ.prototype={
$0(){this.a.aW(this.b)},
$S:0}
A.bC.prototype={
gt(a){return(A.bu(this.a)^892482866)>>>0},
v(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.ai&&b.a===this.a}}
A.bD.prototype={
b4(){return this.w.bI(this)},
ao(){},
ap(){}}
A.bA.prototype={
a8(a){this.a=A.h4(this.d,a)},
a9(a){var s=this,r=s.e
if(a==null)s.e=r&4294967263
else s.e=r|32
s.b=A.h5(s.d,a)},
aR(){var s,r=this,q=r.e|=8
if((q&128)!==0){s=r.r
if(s.a===1)s.a=3}if((q&64)===0)r.r=null
r.f=r.b4()},
ao(){},
ap(){},
b4(){return null},
af(a){var s,r,q=this,p=q.r
if(p==null)p=q.r=new A.cT(A.f(q).h("cT<1>"))
s=p.c
if(s==null)p.b=p.c=a
else{s.sV(a)
p.c=a}r=q.e
if((r&128)===0){r|=128
q.e=r
if(r<256)p.aM(q)}},
aq(a){var s=this,r=s.e
s.e=r|64
s.d.ab(s.a,a)
s.e&=4294967231
s.aT((r&4)!==0)},
au(a,b){var s=this,r=s.e,q=new A.e_(s,a,b)
if((r&1)!==0){s.e=r|16
s.aR()
q.$0()}else{q.$0()
s.aT((r&4)!==0)}},
ar(){this.aR()
this.e|=16
new A.dZ(this).$0()},
aT(a){var s,r,q=this,p=q.e
if((p&128)!==0&&q.r.c==null){p=q.e=p&4294967167
s=!1
if((p&4)!==0)if(p<256){s=q.r
s=s==null?null:s.c==null
s=s!==!1}if(s){p&=4294967291
q.e=p}}for(;;a=r){if((p&8)!==0){q.r=null
return}r=(p&4)!==0
if(a===r)break
q.e=p^64
if(r)q.ao()
else q.ap()
p=q.e&=4294967231}if((p&128)!==0&&p<256)q.r.aM(q)}}
A.e_.prototype={
$0(){var s,r,q=this.a,p=q.e
if((p&8)!==0&&(p&16)===0)return
q.e=p|64
s=q.b
p=this.b
r=q.d
if(t.k.b(s))r.bh(s,p,this.c)
else r.ab(s,p)
q.e&=4294967231},
$S:0}
A.dZ.prototype={
$0(){var s=this.a,r=s.e
if((r&16)===0)return
s.e=r|74
s.d.aK(s.c)
s.e&=4294967231},
$S:0}
A.aW.prototype={
N(a,b,c,d){return this.a.bO(a,d,c,b===!0)},
bd(a){return this.N(a,null,null,null)},
be(a,b,c){return this.N(a,b,c,null)}}
A.cM.prototype={
gV(){return this.a},
sV(a){return this.a=a}}
A.cL.prototype={
aI(a){a.aq(this.b)}}
A.e1.prototype={
aI(a){a.au(this.b,this.c)}}
A.e0.prototype={
aI(a){a.ar()},
gV(){return null},
sV(a){throw A.d(A.cC("No events after a done."))}}
A.cT.prototype={
aM(a){var s=this,r=s.a
if(r===1)return
if(r>=1){s.a=1
return}A.hP(new A.ek(s,a))
s.a=1}}
A.ek.prototype={
$0(){var s,r,q=this.a,p=q.a
q.a=0
if(p===3)return
s=q.b
r=s.gV()
q.b=r
if(r==null)q.c=null
s.aI(this.b)},
$S:0}
A.bE.prototype={
a8(a){},
a9(a){},
bH(){var s,r=this,q=r.a-1
if(q===0){r.a=-1
s=r.c
if(s!=null){r.c=null
r.b.aK(s)}}else r.a=q}}
A.cX.prototype={}
A.et.prototype={}
A.ex.prototype={
$0(){A.ii(this.a,this.b)},
$S:0}
A.em.prototype={
aK(a){var s,r,q
try{if(B.b===$.h){a.$0()
return}A.hx(null,null,this,a)}catch(q){s=A.a0(q)
r=A.X(q)
A.aZ(s,r)}},
c9(a,b){var s,r,q
try{if(B.b===$.h){a.$1(b)
return}A.hz(null,null,this,a,b)}catch(q){s=A.a0(q)
r=A.X(q)
A.aZ(s,r)}},
ab(a,b){return this.c9(a,b,t.z)},
c7(a,b,c){var s,r,q
try{if(B.b===$.h){a.$2(b,c)
return}A.hy(null,null,this,a,b,c)}catch(q){s=A.a0(q)
r=A.X(q)
A.aZ(s,r)}},
bh(a,b,c){var s=t.z
return this.c7(a,b,c,s,s)},
b7(a){return new A.en(this,a)},
c4(a){if($.h===B.b)return a.$0()
return A.hx(null,null,this,a)},
c3(a){return this.c4(a,t.z)},
c8(a,b){if($.h===B.b)return a.$1(b)
return A.hz(null,null,this,a,b)},
aL(a,b){var s=t.z
return this.c8(a,b,s,s)},
c6(a,b,c){if($.h===B.b)return a.$2(b,c)
return A.hy(null,null,this,a,b,c)},
c5(a,b,c){var s=t.z
return this.c6(a,b,c,s,s,s)},
c2(a){return a},
aa(a){var s=t.z
return this.c2(a,s,s,s)}}
A.en.prototype={
$0(){return this.a.aK(this.b)},
$S:0}
A.bG.prototype={
gk(a){return this.a},
gM(){return new A.bH(this,this.$ti.h("bH<1>"))},
L(a){var s,r
if(typeof a=="string"&&a!=="__proto__"){s=this.b
return s==null?!1:s[a]!=null}else if(typeof a=="number"&&(a&1073741823)===a){r=this.c
return r==null?!1:r[a]!=null}else return this.bv(a)},
bv(a){var s=this.d
if(s==null)return!1
return this.P(this.b0(s,a),a)>=0},
j(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.h8(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.h8(q,b)
return r}else return this.bx(b)},
bx(a){var s,r,q=this.d
if(q==null)return null
s=this.b0(q,a)
r=this.P(s,a)
return r<0?null:s[r+1]},
B(a,b,c){var s,r,q,p,o,n,m=this
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.aV(s==null?m.b=A.f9():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.aV(r==null?m.c=A.f9():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.f9()
p=A.eP(b)&1073741823
o=q[p]
if(o==null){A.fa(q,p,[b,c]);++m.a
m.e=null}else{n=m.P(o,b)
if(n>=0)o[n+1]=c
else{o.push(b,c);++m.a
m.e=null}}}},
J(a,b){var s,r,q,p,o,n=this,m=n.b_()
for(s=m.length,r=n.$ti.y[1],q=0;q<s;++q){p=m[q]
o=n.j(0,p)
b.$2(p,o==null?r.a(o):o)
if(m!==n.e)throw A.d(A.a3(n))}},
b_(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.f5(i.a,null,!1,t.z)
s=i.b
r=0
if(s!=null){q=Object.getOwnPropertyNames(s)
p=q.length
for(o=0;o<p;++o){h[r]=q[o];++r}}n=i.c
if(n!=null){q=Object.getOwnPropertyNames(n)
p=q.length
for(o=0;o<p;++o){h[r]=+q[o];++r}}m=i.d
if(m!=null){q=Object.getOwnPropertyNames(m)
p=q.length
for(o=0;o<p;++o){l=m[q[o]]
k=l.length
for(j=0;j<k;j+=2){h[r]=l[j];++r}}}return i.e=h},
aV(a,b,c){if(a[b]==null){++this.a
this.e=null}A.fa(a,b,c)},
b0(a,b){return a[A.eP(b)&1073741823]}}
A.aU.prototype={
P(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.bH.prototype={
gk(a){return this.a.a},
gu(a){return this.a.a===0},
gp(a){var s=this.a
return new A.cP(s,s.b_(),this.$ti.h("cP<1>"))}}
A.cP.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.d(A.a3(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}}}
A.aj.prototype={
b3(a){return new A.aj(a.h("aj<0>"))},
bD(){return this.b3(t.z)},
gp(a){var s=this,r=new A.aV(s,s.r,A.f(s).h("aV<1>"))
r.c=s.e
return r},
gk(a){return this.a},
gu(a){return this.a===0},
bT(a,b){var s=this.bu(b)
return s},
bu(a){var s=this.d
if(s==null)return!1
return this.P(s[this.aZ(a)],a)>=0},
gD(a){var s=this.e
if(s==null)throw A.d(A.cC("No elements"))
return s.a},
gA(a){var s=this.f
if(s==null)throw A.d(A.cC("No elements"))
return s.a},
F(a,b){var s,r,q=this
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.aU(s==null?q.b=A.fb():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.aU(r==null?q.c=A.fb():r,b)}else return q.bo(b)},
bo(a){var s,r,q=this,p=q.d
if(p==null)p=q.d=A.fb()
s=q.aZ(a)
r=p[s]
if(r==null)p[s]=[q.ah(a)]
else{if(q.P(r,a)>=0)return!1
r.push(q.ah(a))}return!0},
aU(a,b){if(a[b]!=null)return!1
a[b]=this.ah(b)
return!0},
ah(a){var s=this,r=new A.ej(a)
if(s.e==null)s.e=s.f=r
else s.f=s.f.b=r;++s.a
s.r=s.r+1&1073741823
return r},
aZ(a){return J.E(a)&1073741823},
P(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.M(a[r].a,b))return r
return-1}}
A.ej.prototype={}
A.aV.prototype={
gm(){var s=this.d
return s==null?this.$ti.c.a(s):s},
l(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.d(A.a3(q))
else if(r==null){s.d=null
return!1}else{s.d=r.a
s.c=r.b
return!0}}}
A.j.prototype={
gp(a){return new A.aL(a,this.gk(a),A.Y(a).h("aL<j.E>"))},
C(a,b){return this.j(a,b)},
gu(a){return this.gk(a)===0},
gD(a){if(this.gk(a)===0)throw A.d(A.S())
return this.j(a,0)},
gA(a){if(this.gk(a)===0)throw A.d(A.S())
return this.j(a,this.gk(a)-1)},
S(a,b,c){return new A.J(a,b,A.Y(a).h("@<j.E>").n(c).h("J<1,2>"))},
H(a){var s,r,q,p,o=this
if(o.gu(a)){s=J.fR(0,A.Y(a).h("j.E"))
return s}r=o.j(a,0)
q=A.f5(o.gk(a),r,!0,A.Y(a).h("j.E"))
for(p=1;p<o.gk(a);++p)q[p]=o.j(a,p)
return q},
K(a,b){return new A.a2(a,A.Y(a).h("@<j.E>").n(b).h("a2<1,2>"))},
i(a){return A.f1(a,"[","]")}}
A.z.prototype={
aA(a,b,c){var s=A.f(this)
return A.fT(this,s.h("z.K"),s.h("z.V"),b,c)},
J(a,b){var s,r,q,p
for(s=this.gM(),s=s.gp(s),r=A.f(this).h("z.V");s.l();){q=s.gm()
p=this.j(0,q)
b.$2(q,p==null?r.a(p):p)}},
a5(a,b,c,d){var s,r,q,p,o,n=A.dt(c,d)
for(s=this.gM(),s=s.gp(s),r=A.f(this).h("z.V");s.l();){q=s.gm()
p=this.j(0,q)
o=b.$2(q,p==null?r.a(p):p)
n.B(0,o.a,o.b)}return n},
gk(a){var s=this.gM()
return s.gk(s)},
i(a){return A.f6(this)},
$iG:1}
A.du.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.m(a)
r.a=(r.a+=s)+": "
s=A.m(b)
r.a+=s},
$S:15}
A.aQ.prototype={
gu(a){return this.a===0},
K(a,b){return A.h_(this,null,A.f(this).c,b)},
H(a){var s=A.au(this,A.f(this).c)
return s},
S(a,b,c){return new A.as(this,b,A.f(this).h("@<1>").n(c).h("as<1,2>"))},
i(a){return A.f1(this,"{","}")},
gD(a){var s,r=A.h9(this,this.r,A.f(this).c)
if(!r.l())throw A.d(A.S())
s=r.d
return s==null?r.$ti.c.a(s):s},
gA(a){var s,r,q=A.h9(this,this.r,A.f(this).c)
if(!q.l())throw A.d(A.S())
s=q.$ti.c
do{r=q.d
if(r==null)r=s.a(r)}while(q.l())
return r},
C(a,b){A.fY(b,"index")},
$ie:1,
$ib:1,
$iav:1}
A.bO.prototype={
K(a,b){return A.h_(this,this.gbC(),A.f(this).c,b)}}
A.c7.prototype={
v(a,b){var s
if(b==null)return!1
s=!1
if(b instanceof A.c7)if(this.a===b.a)s=this.b===b.b
return s},
gt(a){return A.dy(this.a,this.b,B.f,B.f)},
E(a,b){var s=B.c.E(this.a,b.a)
if(s!==0)return s
return B.c.E(this.b,b.b)},
i(a){var s=this,r=A.ig(A.iE(s)),q=A.c8(A.iC(s)),p=A.c8(A.iy(s)),o=A.c8(A.iz(s)),n=A.c8(A.iB(s)),m=A.c8(A.iD(s)),l=A.fQ(A.iA(s)),k=s.b,j=k===0?"":A.fQ(k)
return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"}}
A.e2.prototype={
i(a){return this.a0()}}
A.r.prototype={
gX(){return A.ix(this)}}
A.c3.prototype={
i(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.dd(s)
return"Assertion failed"}}
A.a7.prototype={}
A.Z.prototype={
gaj(){return"Invalid argument"+(!this.a?"(s)":"")},
gai(){return""},
i(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.gaj()+q+o
if(!s.a)return n
return n+s.gai()+": "+A.dd(s.gaG())},
gaG(){return this.b}}
A.aP.prototype={
gaG(){return this.b},
gaj(){return"RangeError"},
gai(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.m(q):""
else if(q==null)s=": Not greater than or equal to "+A.m(r)
else if(q>r)s=": Not in inclusive range "+A.m(r)+".."+A.m(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.m(r)
return s}}
A.cc.prototype={
gaG(){return this.b},
gaj(){return"RangeError"},
gai(){if(this.b<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gk(a){return this.f}}
A.by.prototype={
i(a){return"Unsupported operation: "+this.a}}
A.cE.prototype={
i(a){return"UnimplementedError: "+this.a}}
A.aw.prototype={
i(a){return"Bad state: "+this.a}}
A.c6.prototype={
i(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.dd(s)+"."}}
A.bw.prototype={
i(a){return"Stack Overflow"},
gX(){return null},
$ir:1}
A.e3.prototype={
i(a){return"Exception: "+this.a}}
A.b.prototype={
K(a,b){return A.d8(this,A.f(this).h("b.E"),b)},
S(a,b,c){return A.iv(this,b,A.f(this).h("b.E"),c)},
aJ(a,b){var s,r=this.gp(this)
if(!r.l())throw A.d(A.S())
s=r.gm()
while(r.l())s=b.$2(s,r.gm())
return s},
H(a){var s=A.au(this,A.f(this).h("b.E"))
return s},
gk(a){var s,r=this.gp(this)
for(s=0;r.l();)++s
return s},
gu(a){return!this.gp(this).l()},
gD(a){var s=this.gp(this)
if(!s.l())throw A.d(A.S())
return s.gm()},
gA(a){var s,r=this.gp(this)
if(!r.l())throw A.d(A.S())
do s=r.gm()
while(r.l())
return s},
C(a,b){A.fY(b,"index")},
i(a){return A.ip(this,"(",")")}}
A.v.prototype={
i(a){return"MapEntry("+A.m(this.a)+": "+A.m(this.b)+")"}}
A.A.prototype={
gt(a){return A.c.prototype.gt.call(this,0)},
i(a){return"null"}}
A.c.prototype={$ic:1,
v(a,b){return this===b},
gt(a){return A.bu(this)},
i(a){return"Instance of '"+A.cA(this)+"'"},
gq(a){return A.b3(this)},
toString(){return this.i(this)}}
A.bQ.prototype={
i(a){return this.a},
$iB:1}
A.dF.prototype={
gba(){var s,r=this.b
if(r==null)r=$.dB.$0()
s=r-this.a
if($.fB()===1000)return s
return B.c.av(s,1000)}}
A.cD.prototype={
gk(a){return this.a.length},
i(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.dw.prototype={
i(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.eM.prototype={
$1(a){var s,r,q,p
if(A.hw(a))return a
s=this.a
if(s.L(a))return s.j(0,a)
if(t.G.b(a)){r={}
s.B(0,a,r)
for(s=a.gM(),s=s.gp(s);s.l();){q=s.gm()
r[q]=this.$1(a.j(0,q))}return r}else if(t.U.b(a)){p=[]
s.B(0,a,p)
B.a.a2(p,J.eX(a,this,t.z))
return p}else return a},
$S:7}
A.eQ.prototype={
$1(a){return this.a.a3(a)},
$S:1}
A.eR.prototype={
$1(a){if(a==null)return this.a.b8(new A.dw(a===undefined))
return this.a.b8(a)},
$S:1}
A.eA.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(A.hv(a))return a
s=this.a
a.toString
if(s.L(a))return s.j(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.an(A.dC(r,-864e13,864e13,"millisecondsSinceEpoch",null))
A.ez(!0,"isUtc",t.y)
return new A.c7(r,0,!0)}if(a instanceof RegExp)throw A.d(A.a1("structured clone of RegExp",null))
if(a instanceof Promise)return A.kk(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.dt(p,p)
s.B(0,a,o)
n=Object.keys(a)
m=[]
for(s=J.aD(n),p=s.gp(n);p.l();)m.push(A.fq(p.gm()))
for(l=0;l<s.gk(n);++l){k=s.j(n,l)
j=m[l]
if(k!=null)o.B(0,j,this.$1(a[k]))}return o}if(a instanceof Array){i=a
o=[]
s.B(0,a,o)
h=a.length
for(s=J.a_(i),l=0;l<h;++l)o.push(this.$1(s.j(i,l)))
return o}return a},
$S:7}
A.eh.prototype={
bg(a){if(a<=0||a>4294967296)throw A.d(A.iG("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
A.aH.prototype={
a0(){return"Difficulty."+this.b}}
A.eD.prototype={
$1(a){var s=this.b
if(this.a===B.d)return a>=s
else return a<=-s},
$S:17}
A.eC.prototype={
$2(a,b){var s=B.c.E(b.b,a.b)
if(s!==0)return s
return B.c.E(a.c,b.c)},
$S:18}
A.w.prototype={
ga6(){var s=this.c.b
return s.length!==0?B.a.gA(s):null},
gc_(){var s=this.c.b
return s.length!==0?B.a.gA(s).a:B.h},
bf(){return B.a.aJ(this.b,new A.dM())},
gT(){var s=this,r=s.ga6()==null?"(None)":s.ga6().b.aw(!1),q=s.f
return r+"/"+B.i.cc(q/(s.e+q)*100,1)+"%/"+B.i.ca(s.e+s.f)},
aN(){var s,r,q,p,o,n=this,m=n.a==null?"(root)":A.fx(n.gc_()),l=n.gT(),k=A.au(n.b,t.c8)
B.a.aP(k,new A.dN())
s=k.length!==0?B.a.gA(k).gT():"None"
r=k.length!==0?B.a.gD(k).gT():"None"
q=k.length
p=q>1?k[q-2].gT():s
o="Results: "+l+", player:"+m+(", children simulations: max="+s+", 2nd max="+p+", min="+r)
return n.d!=null?o+" (terminal)":o}}
A.dM.prototype={
$2(a,b){return a.e+a.f>b.e+b.f?a:b},
$S:19}
A.dN.prototype={
$2(a,b){return B.i.E(a.e+a.f,b.e+b.f)},
$S:20}
A.eE.prototype={
$2(a,b){return new A.t(Math.max(a.a,b.a),Math.max(a.b,b.b))},
$S:21}
A.eO.prototype={
$1(a){return a.ga6().b.v(0,B.N)},
$S:22}
A.eT.prototype={
$1(a){return B.a.gA(a.c.b).b},
$S:23}
A.eS.prototype={
$1(a){return!this.a.bT(0,a)},
$S:24}
A.dv.prototype={}
A.d2.prototype={
$2(a,b){var s=this.b.a
if(b>=s)++this.a.b
else if(b<=-s)++this.a.a},
$S:39}
A.d4.prototype={
$1(a){return Math.abs(a.b)<this.a.a},
$S:26}
A.d5.prototype={
$1(a){return a.a},
$S:27}
A.ah.prototype={
a0(){return"Player."+this.b}}
A.b6.prototype={
b9(){var s=A.f4(this.a,t.R,t.S),r=A.au(this.b,t.J)
return new A.b6(s,r,this.c)},
c0(a){var s,r,q,p,o,n=this,m=n.a
if(!A.fH(a,n))A.an(A.bd("Invalid move "+a.i(0)))
s=A.f4(m,t.R,t.S)
r=a.b
q=n.c
p=n.b
if(p.length===0)s.B(0,r,q.e)
else{o=q.d
s.B(0,r,a.a===B.d?o:-o)}n.a=s
n.a=A.d3(s,q)
B.a.F(p,a)}}
A.d6.prototype={
$2(a,b){var s=J.d1(a),r=J.a_(s)
return new A.v(new A.t(r.j(s,0),r.j(s,1)),b,t.cK)},
$S:28}
A.d7.prototype={
$1(a){var s,r=t.U,q=J.d1(r.a(a)),p=A.hR(A.bX(q[0]))
r=J.fD(r.a(q[1]),t.S)
s=r.H(r)
return new A.t(p,new A.t(s[0],s[1]))},
$S:29}
A.dp.prototype={
gaC(){return this.a},
gaH(){var s=this.c
return new A.ai(s,A.f(s).h("ai<1>"))},
aD(){var s=this.a
if(s.gbb())return
s.gaO().F(0,A.at([B.j,B.o],t.g,t.d))},
ac(a){var s=this.a
if(s.gbb())return
s.gaO().F(0,A.at([B.j,a],t.g,this.$ti.c))},
W(a){var s=this.a
if(s.gbb())return
s.gaO().F(0,A.at([B.j,a],t.g,t.V))},
$idn:1}
A.aI.prototype={
gaC(){return this.a},
gaH(){return A.an(A.bx("onIsolateMessage is not implemented"))},
aD(){return A.an(A.bx("initialized method is not implemented"))},
ac(a){return A.an(A.bx("sendResult is not implemented"))},
W(a){return A.an(A.bx("sendResultError is not implemented"))},
R(){var s=0,r=A.fl(t.H),q=this
var $async$R=A.fn(function(a,b){if(a===1)return A.fg(b,r)
for(;;)switch(s){case 0:q.a.terminate()
s=2
return A.ff(q.e.R(),$async$R)
case 2:return A.fh(null,r)}})
return A.fi($async$R,r)},
bz(a){var s,r,q,p,o,n,m,l=this
try{s=t.a5.a(A.fq(a.data))
if(s==null)return
if(J.M(s.j(0,"type"),"data")){r=s.j(0,"value")
if(t.F.b(A.u([],l.$ti.h("n<1>")))){n=r
if(n==null)n=A.eu(n)
r=A.bg(n,t.f)}l.e.F(0,l.c.$1(r))
return}if(B.o.bc(s)){n=l.r
if((n.a.a&30)===0)n.bS()
return}if(B.F.bc(s)){l.R()
return}if(J.M(s.j(0,"type"),"$IsolateException")){q=A.il(s)
l.e.az(q,q.c)
return}l.e.bQ(new A.F("","Unhandled "+s.i(0)+" from the Isolate",B.e))}catch(m){p=A.a0(m)
o=A.X(m)
l.e.az(new A.F("",p,o),o)}},
$idn:1}
A.cg.prototype={
a0(){return"IsolatePort."+this.b}}
A.bi.prototype={
a0(){return"IsolateState."+this.b},
bc(a){return J.M(a.j(0,"type"),"$IsolateState")&&J.M(a.j(0,"value"),this.b)}}
A.ce.prototype={}
A.cf.prototype={}
A.cR.prototype={
bm(a,b,c,d){this.a.onmessage=A.hp(new A.eg(this,d))},
gaH(){var s=this.c,r=A.f(s).h("ai<1>")
return new A.b8(new A.ai(s,r),r.h("@<H.T>").n(this.$ti.y[1]).h("b8<1,2>"))},
ac(a){var s=t.N,r=t.X,q=this.a
if(a instanceof A.k)q.postMessage(A.eL(A.at(["type","data","value",a.gO()],s,r)))
else q.postMessage(A.eL(A.at(["type","data","value",a],s,r)))},
W(a){var s=t.N
this.a.postMessage(A.eL(A.at(["type","$IsolateException","name",a.ga7(),"value",A.at(["e",J.aG(a.b),"s",a.c.i(0)],s,s)],s,t.z)))},
aD(){var s=t.N
this.a.postMessage(A.eL(A.at(["type","$IsolateState","value","initialized"],s,s)))}}
A.eg.prototype={
$1(a){var s,r=A.fq(a.data),q=this.b
if(t.F.b(A.u([],q.h("n<0>")))){s=r==null?A.eu(r):r
r=A.bg(s,t.f)}this.a.c.F(0,q.a(r))},
$S:31}
A.cQ.prototype={}
A.eK.prototype={
$1(a){return this.bj(a)},
bj(a){var s=0,r=A.fl(t.H),q=1,p=[],o=this,n,m,l,k,j,i,h
var $async$$1=A.fn(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:q=3
k=o.a.$1(a)
j=o.d
s=6
return A.ff(j.h("ae<0>").b(k)?k:A.h7(k,j),$async$$1)
case 6:n=c
o.b.a.a.ac(n)
q=1
s=5
break
case 3:q=2
h=p.pop()
m=A.a0(h)
l=A.X(h)
k=o.b.a
if(m instanceof A.F)k.a.W(m)
else k.a.W(new A.F("",m,l))
s=5
break
case 2:s=1
break
case 5:return A.fh(null,r)
case 1:return A.fg(p.at(-1),r)}})
return A.fi($async$$1,r)},
$S(){return this.c.h("ae<~>(0)")}}
A.di.prototype={}
A.F.prototype={
i(a){return this.ga7()+": "+A.m(this.b)+"\n"+this.c.i(0)},
ga7(){return this.a}}
A.ax.prototype={
ga7(){return"UnsupportedImTypeException"}}
A.k.prototype={
gO(){return this.a},
v(a,b){var s,r=this
if(b==null)return!1
if(r!==b)s=A.f(r).h("k<k.T>").b(b)&&A.b3(r)===A.b3(b)&&J.M(r.a,b.a)
else s=!0
return s},
gt(a){return J.E(this.a)},
i(a){return"ImType("+A.m(this.a)+")"}}
A.dg.prototype={
$1(a){return A.bg(a,t.f)},
$S:32}
A.dh.prototype={
$2(a,b){var s=t.f
return new A.v(A.bg(a,s),A.bg(b,s),t.d9)},
$S:33}
A.ca.prototype={
i(a){return"ImNum("+A.m(this.a)+")"}}
A.cb.prototype={
i(a){return"ImString("+this.a+")"}}
A.c9.prototype={
i(a){return"ImBool("+this.a+")"}}
A.R.prototype={
H(a){var s=J.fD(this.b,t.f)
return s.H(s)},
v(a,b){var s
if(b==null)return!1
if(this!==b)s=b instanceof A.R&&A.b3(this)===A.b3(b)&&this.bA(b.b)
else s=!0
return s},
gt(a){return A.fU(this.b)},
bA(a){var s,r,q=this.b,p=J.a_(q),o=J.a_(a)
if(p.gk(q)!==o.gk(a))return!1
s=p.gp(q)
r=o.gp(a)
for(;;){if(!(s.l()&&r.l()))break
if(!s.gm().v(0,r.gm()))return!1}return!0},
i(a){return"ImList("+A.m(this.b)+")"}}
A.bf.prototype={
i(a){return"ImMap("+this.b.i(0)+")"}}
A.ab.prototype={
gO(){return J.eX(this.b,new A.ee(this),A.f(this).h("ab.T"))}}
A.ee.prototype={
$1(a){return a.gO()},
$S(){return A.f(this.a).h("ab.T(k<ab.T>)")}}
A.C.prototype={
gO(){var s=A.f(this)
return this.b.a5(0,new A.ef(this),s.h("C.K"),s.h("C.V"))},
v(a,b){var s
if(b==null)return!1
if(this!==b)s=b instanceof A.bf&&A.b3(this)===A.b3(b)&&this.bB(b.b)
else s=!0
return s},
gt(a){var s=this.b
return A.fU(new A.T(s,A.f(s).h("T<1,2>")))},
bB(a){var s,r,q=this.b
if(q.a!==a.a)return!1
for(q=new A.T(q,A.f(q).h("T<1,2>")).gp(0);q.l();){s=q.d
r=s.a
if(!a.L(r)||!J.M(a.j(0,r),s.b))return!1}return!0}}
A.ef.prototype={
$2(a,b){return new A.v(a.gO(),b.gO(),A.f(this.a).h("v<C.K,C.V>"))},
$S(){return A.f(this.a).h("v<C.K,C.V>(k<C.K>,k<C.V>)")}};(function aliases(){var s=J.ag.prototype
s.bk=s.i})();(function installTearOffs(){var s=hunkHelpers._static_2,r=hunkHelpers._instance_1u,q=hunkHelpers._static_0,p=hunkHelpers._static_1,o=hunkHelpers._instance_2u,n=hunkHelpers._instance_0u,m=hunkHelpers.installInstanceTearOff,l=hunkHelpers.installStaticTearOff
s(J,"jp","is",34)
r(A.b9.prototype,"gbE","bF",13)
q(A,"jC","iw",3)
p(A,"jV","iM",2)
p(A,"jW","iN",2)
p(A,"jX","iO",2)
q(A,"hE","jM",0)
p(A,"jY","jE",1)
s(A,"k_","jG",6)
q(A,"jZ","jF",0)
o(A.o.prototype,"gaX","br",6)
n(A.bE.prototype,"gbG","bH",0)
m(A.aj.prototype,"gbC",0,0,null,["$1$0","$0"],["b3","bD"],14,0,0)
p(A,"jT","jR",36)
r(A.aI.prototype,"gby","bz",30)
l(A,"kf",1,null,["$3","$1","$2"],["f0",function(a){return A.f0(a,B.e,"")},function(a,b){return A.f0(a,b,"")}],37,0)
l(A,"kg",1,null,["$2","$1"],["h3",function(a){return A.h3(a,B.e)}],38,0)
l(A,"hF",1,null,["$1$3$customConverter$enableWasmConverter","$1","$1$1"],["fp",function(a){return A.fp(a,null,!0,t.z)},function(a,b){return A.fp(a,null,!0,b)}],25,0)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.c,null)
q(A.c,[A.f2,J.cd,A.bv,J.c2,A.H,A.b9,A.b,A.c5,A.z,A.ar,A.r,A.dD,A.aL,A.cp,A.cG,A.be,A.bN,A.ba,A.cS,A.dO,A.dx,A.bc,A.bP,A.ds,A.cn,A.co,A.cm,A.W,A.cO,A.eq,A.eo,A.cH,A.N,A.bA,A.cJ,A.cK,A.aT,A.o,A.cI,A.cM,A.e0,A.cT,A.bE,A.cX,A.et,A.cP,A.aQ,A.ej,A.aV,A.j,A.c7,A.e2,A.bw,A.e3,A.v,A.A,A.bQ,A.dF,A.cD,A.dw,A.eh,A.w,A.dv,A.b6,A.dp,A.aI,A.ce,A.cQ,A.cR,A.di,A.F,A.k])
q(J.cd,[J.ci,J.bk,J.bm,J.bl,J.bn,J.aJ,J.aK])
q(J.bm,[J.ag,J.n,A.aM,A.br])
q(J.ag,[J.cz,J.aR,J.af])
r(J.ch,A.bv)
r(J.dq,J.n)
q(J.aJ,[J.bj,J.cj])
q(A.H,[A.b8,A.aW])
q(A.b,[A.aa,A.e,A.V,A.a9,A.bI])
q(A.aa,[A.ao,A.bW,A.aq])
r(A.bF,A.ao)
r(A.bB,A.bW)
r(A.a2,A.bB)
q(A.z,[A.ap,A.a4,A.bG])
q(A.ar,[A.db,A.dj,A.da,A.dL,A.eF,A.eH,A.dW,A.dV,A.ev,A.ec,A.dG,A.dI,A.eM,A.eQ,A.eR,A.eA,A.eD,A.eO,A.eT,A.eS,A.d4,A.d5,A.d7,A.eg,A.eK,A.dg,A.ee])
q(A.db,[A.d9,A.dc,A.dr,A.eG,A.ew,A.ey,A.ed,A.du,A.eC,A.dM,A.dN,A.eE,A.d2,A.d6,A.dh,A.ef])
q(A.r,[A.cl,A.a7,A.ck,A.cF,A.cB,A.cN,A.c3,A.Z,A.by,A.cE,A.aw,A.c6])
q(A.e,[A.U,A.a5,A.bo,A.T,A.bH])
r(A.as,A.V)
r(A.J,A.U)
q(A.bN,[A.cU,A.cV])
r(A.t,A.cU)
r(A.cW,A.cV)
r(A.bb,A.ba)
r(A.bh,A.dj)
q(A.da,[A.dz,A.dX,A.dY,A.ep,A.e4,A.e8,A.e7,A.e6,A.e5,A.eb,A.ea,A.e9,A.dH,A.dJ,A.e_,A.dZ,A.ek,A.ex,A.en])
r(A.bt,A.a7)
q(A.dL,[A.dE,A.b7])
q(A.br,[A.cq,A.aN])
q(A.aN,[A.bJ,A.bL])
r(A.bK,A.bJ)
r(A.bp,A.bK)
r(A.bM,A.bL)
r(A.bq,A.bM)
q(A.bp,[A.cr,A.cs])
q(A.bq,[A.ct,A.cu,A.cv,A.cw,A.cx,A.bs,A.cy])
r(A.bR,A.cN)
r(A.bC,A.aW)
r(A.ai,A.bC)
r(A.bD,A.bA)
r(A.aS,A.bD)
r(A.bz,A.cJ)
r(A.ay,A.cK)
q(A.cM,[A.cL,A.e1])
r(A.em,A.et)
r(A.aU,A.bG)
r(A.bO,A.aQ)
r(A.aj,A.bO)
q(A.Z,[A.aP,A.cc])
q(A.e2,[A.aH,A.ah,A.cg,A.bi])
r(A.cf,A.cQ)
r(A.ax,A.F)
q(A.k,[A.ca,A.cb,A.c9,A.ab,A.C])
r(A.R,A.ab)
r(A.bf,A.C)
s(A.bW,A.j)
s(A.bJ,A.j)
s(A.bK,A.be)
s(A.bL,A.j)
s(A.bM,A.be)
s(A.cQ,A.di)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{a:"int",p:"double",ad:"num",O:"String",D:"bool",A:"Null",i:"List",c:"Object",G:"Map",q:"JSObject"},mangledNames:{},types:["~()","~(@)","~(~())","a()","A(@)","A()","~(c,B)","c?(c?)","A(c,B)","@(@)","A(@,B)","~(a,@)","A(~())","~(c?)","av<0^>()<c?>","~(c?,c?)","@(@,O)","D(a)","a(+(+(a,a),a,a),+(+(a,a),a,a))","w(w,w)","a(w,w)","+(a,a)(+(a,a),+(a,a))","D(w)","+(a,a)(w)","D(+(a,a))","0^(@{customConverter:0^(@)?,enableWasmConverter:D})<c?>","D(v<+(a,a),a>)","+(a,a)(v<+(a,a),a>)","v<+(a,a),a>(@,@)","+(ah,+(a,a))(@)","~(q)","A(q)","k<c>(@)","v<k<c>,k<c>>(@,@)","a(@,@)","@(O)","R(R)","F(c[B,O])","ax(c[B])","~(+(a,a),a)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.t&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.cW&&a.b(d.a)&&b.b(d.b)&&c.b(d.c)}}
A.j2(v.typeUniverse,JSON.parse('{"cz":"ag","aR":"ag","af":"ag","ku":"aM","ci":{"D":[],"l":[]},"bk":{"l":[]},"bm":{"q":[]},"ag":{"q":[]},"n":{"i":["1"],"e":["1"],"q":[],"b":["1"]},"ch":{"bv":[]},"dq":{"n":["1"],"i":["1"],"e":["1"],"q":[],"b":["1"]},"aJ":{"p":[],"ad":[]},"bj":{"p":[],"a":[],"ad":[],"l":[]},"cj":{"p":[],"ad":[],"l":[]},"aK":{"O":[],"l":[]},"b8":{"H":["2"],"H.T":"2"},"aa":{"b":["2"]},"ao":{"aa":["1","2"],"b":["2"],"b.E":"2"},"bF":{"ao":["1","2"],"aa":["1","2"],"e":["2"],"b":["2"],"b.E":"2"},"bB":{"j":["2"],"i":["2"],"aa":["1","2"],"e":["2"],"b":["2"]},"a2":{"bB":["1","2"],"j":["2"],"i":["2"],"aa":["1","2"],"e":["2"],"b":["2"],"j.E":"2","b.E":"2"},"aq":{"av":["2"],"aa":["1","2"],"e":["2"],"b":["2"],"b.E":"2"},"ap":{"z":["3","4"],"G":["3","4"],"z.V":"4","z.K":"3"},"cl":{"r":[]},"e":{"b":["1"]},"U":{"e":["1"],"b":["1"]},"V":{"b":["2"],"b.E":"2"},"as":{"V":["1","2"],"e":["2"],"b":["2"],"b.E":"2"},"J":{"U":["2"],"e":["2"],"b":["2"],"b.E":"2","U.E":"2"},"a9":{"b":["1"],"b.E":"1"},"ba":{"G":["1","2"]},"bb":{"ba":["1","2"],"G":["1","2"]},"bI":{"b":["1"],"b.E":"1"},"bt":{"a7":[],"r":[]},"ck":{"r":[]},"cF":{"r":[]},"bP":{"B":[]},"cB":{"r":[]},"a4":{"z":["1","2"],"G":["1","2"],"z.V":"2","z.K":"1"},"a5":{"e":["1"],"b":["1"],"b.E":"1"},"bo":{"e":["1"],"b":["1"],"b.E":"1"},"T":{"e":["v<1,2>"],"b":["v<1,2>"],"b.E":"v<1,2>"},"aM":{"q":[],"eZ":[],"l":[]},"br":{"q":[]},"cq":{"f_":[],"q":[],"l":[]},"aN":{"I":["1"],"q":[]},"bp":{"j":["p"],"i":["p"],"I":["p"],"e":["p"],"q":[],"b":["p"]},"bq":{"j":["a"],"i":["a"],"I":["a"],"e":["a"],"q":[],"b":["a"]},"cr":{"de":[],"j":["p"],"i":["p"],"I":["p"],"e":["p"],"q":[],"b":["p"],"l":[],"j.E":"p"},"cs":{"df":[],"j":["p"],"i":["p"],"I":["p"],"e":["p"],"q":[],"b":["p"],"l":[],"j.E":"p"},"ct":{"dk":[],"j":["a"],"i":["a"],"I":["a"],"e":["a"],"q":[],"b":["a"],"l":[],"j.E":"a"},"cu":{"dl":[],"j":["a"],"i":["a"],"I":["a"],"e":["a"],"q":[],"b":["a"],"l":[],"j.E":"a"},"cv":{"dm":[],"j":["a"],"i":["a"],"I":["a"],"e":["a"],"q":[],"b":["a"],"l":[],"j.E":"a"},"cw":{"dQ":[],"j":["a"],"i":["a"],"I":["a"],"e":["a"],"q":[],"b":["a"],"l":[],"j.E":"a"},"cx":{"dR":[],"j":["a"],"i":["a"],"I":["a"],"e":["a"],"q":[],"b":["a"],"l":[],"j.E":"a"},"bs":{"dS":[],"j":["a"],"i":["a"],"I":["a"],"e":["a"],"q":[],"b":["a"],"l":[],"j.E":"a"},"cy":{"dT":[],"j":["a"],"i":["a"],"I":["a"],"e":["a"],"q":[],"b":["a"],"l":[],"j.E":"a"},"cN":{"r":[]},"bR":{"a7":[],"r":[]},"N":{"r":[]},"ai":{"aW":["1"],"H":["1"],"H.T":"1"},"aS":{"bA":["1"]},"bz":{"cJ":["1"]},"ay":{"cK":["1"]},"o":{"ae":["1"]},"bC":{"aW":["1"],"H":["1"]},"bD":{"bA":["1"]},"aW":{"H":["1"]},"bG":{"z":["1","2"],"G":["1","2"]},"aU":{"bG":["1","2"],"z":["1","2"],"G":["1","2"],"z.V":"2","z.K":"1"},"bH":{"e":["1"],"b":["1"],"b.E":"1"},"aj":{"bO":["1"],"aQ":["1"],"av":["1"],"e":["1"],"b":["1"]},"z":{"G":["1","2"]},"aQ":{"av":["1"],"e":["1"],"b":["1"]},"bO":{"aQ":["1"],"av":["1"],"e":["1"],"b":["1"]},"p":{"ad":[]},"a":{"ad":[]},"i":{"e":["1"],"b":["1"]},"av":{"e":["1"],"b":["1"]},"c3":{"r":[]},"a7":{"r":[]},"Z":{"r":[]},"aP":{"r":[]},"cc":{"r":[]},"by":{"r":[]},"cE":{"r":[]},"aw":{"r":[]},"c6":{"r":[]},"bw":{"r":[]},"bQ":{"B":[]},"dp":{"dn":["1","2"]},"aI":{"dn":["1","2"]},"ax":{"F":[]},"R":{"ab":["c"],"k":["b<c>"],"k.T":"b<c>","ab.T":"c"},"ca":{"k":["ad"],"k.T":"ad"},"cb":{"k":["O"],"k.T":"O"},"c9":{"k":["D"],"k.T":"D"},"bf":{"C":["c","c"],"k":["G<c,c>"],"k.T":"G<c,c>","C.K":"c","C.V":"c"},"ab":{"k":["b<1>"]},"C":{"k":["G<1,2>"]},"dm":{"i":["a"],"e":["a"],"b":["a"]},"dT":{"i":["a"],"e":["a"],"b":["a"]},"dS":{"i":["a"],"e":["a"],"b":["a"]},"dk":{"i":["a"],"e":["a"],"b":["a"]},"dQ":{"i":["a"],"e":["a"],"b":["a"]},"dl":{"i":["a"],"e":["a"],"b":["a"]},"dR":{"i":["a"],"e":["a"],"b":["a"]},"de":{"i":["p"],"e":["p"],"b":["p"]},"df":{"i":["p"],"e":["p"],"b":["p"]}}'))
A.j1(v.typeUniverse,JSON.parse('{"be":1,"bW":2,"aN":1,"bC":1,"bD":1,"cM":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",h:"handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace."}
var t=(function rtii(){var s=A.c_
return{B:s("eZ"),Y:s("f_"),O:s("e<@>"),C:s("r"),E:s("de"),q:s("df"),Z:s("kt"),p:s("R"),f:s("k<c>"),W:s("dk"),w:s("dl"),M:s("dm"),r:s("dn<@,@>"),V:s("F"),g:s("cg"),d:s("bi"),U:s("b<@>"),x:s("n<k<c>>"),I:s("n<c>"),c:s("n<+(a,a)>"),az:s("n<+(+(a,a),a,a)>"),s:s("n<O>"),e:s("n<w>"),b:s("n<@>"),t:s("n<a>"),T:s("bk"),m:s("q"),L:s("af"),da:s("I<@>"),F:s("i<k<c>>"),j:s("i<@>"),d9:s("v<k<c>,k<c>>"),cK:s("v<+(a,a),a>"),aP:s("G<c,c>"),G:s("G<@,@>"),P:s("A"),K:s("c"),cY:s("kv"),cD:s("+()"),J:s("+(ah,+(a,a))"),R:s("+(a,a)"),l:s("B"),N:s("O"),c8:s("w"),bW:s("l"),_:s("a7"),c0:s("dQ"),bk:s("dR"),ca:s("dS"),bX:s("dT"),o:s("aR"),h:s("ay<~>"),aY:s("o<@>"),a:s("o<a>"),D:s("o<~>"),A:s("aU<c?,c?>"),y:s("D"),i:s("p"),z:s("@"),v:s("@(c)"),Q:s("@(c,B)"),S:s("a"),bc:s("ae<A>?"),aQ:s("q?"),a5:s("G<@,@>?"),X:s("c?"),aD:s("O?"),cG:s("D?"),dd:s("p?"),a3:s("a?"),ae:s("ad?"),n:s("ad"),H:s("~"),u:s("~(c)"),k:s("~(c,B)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.E=J.cd.prototype
B.a=J.n.prototype
B.c=J.bj.prototype
B.i=J.aJ.prototype
B.G=J.af.prototype
B.H=J.bm.prototype
B.q=J.cz.prototype
B.k=J.aR.prototype
B.l=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.t=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof HTMLElement == "function";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.y=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var userAgent = navigator.userAgent;
    if (typeof userAgent != "string") return hooks;
    if (userAgent.indexOf("DumpRenderTree") >= 0) return hooks;
    if (userAgent.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.u=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.x=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.w=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.v=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.m=function(hooks) { return hooks; }

B.f=new A.dD()
B.z=new A.e0()
B.n=new A.eh()
B.b=new A.em()
B.A=new A.aH(0,"easy")
B.B=new A.aH(1,"medium")
B.C=new A.aH(2,"hard")
B.D=new A.aH(3,"veryHard")
B.j=new A.cg(0,"main")
B.F=new A.bi(0,"dispose")
B.o=new A.bi(1,"initialized")
B.p=s([],A.c_("n<0&>"))
B.J={}
B.I=new A.bb(B.J,[],A.c_("bb<0&,0&>"))
B.d=new A.ah(0,"blue")
B.h=new A.ah(1,"green")
B.K=new A.t(0,1)
B.L=new A.t(1,0)
B.M=new A.t(0.5,0.5)
B.N=new A.t(3,6)
B.O=A.Q("eZ")
B.P=A.Q("f_")
B.Q=A.Q("de")
B.R=A.Q("df")
B.S=A.Q("dk")
B.T=A.Q("dl")
B.U=A.Q("dm")
B.r=A.Q("q")
B.V=A.Q("c")
B.W=A.Q("dQ")
B.X=A.Q("dR")
B.Y=A.Q("dS")
B.Z=A.Q("dT")
B.e=new A.bQ("")})();(function staticFields(){$.ei=null
$.aF=A.u([],t.I)
$.fV=null
$.dA=0
$.dB=A.jC()
$.fN=null
$.fM=null
$.hI=null
$.hD=null
$.hO=null
$.eB=null
$.eI=null
$.fu=null
$.el=A.u([],A.c_("n<i<c>?>"))
$.aY=null
$.bY=null
$.bZ=null
$.fk=!1
$.h=B.b
$.im=A.u([A.kf(),A.kg()],A.c_("n<F(c,B)>"))})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"ks","fA",()=>A.k5("_$dart_dartClosure"))
s($,"kK","i2",()=>A.u([new J.ch()],A.c_("n<bv>")))
s($,"ky","hT",()=>A.a8(A.dP({
toString:function(){return"$receiver$"}})))
s($,"kz","hU",()=>A.a8(A.dP({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"kA","hV",()=>A.a8(A.dP(null)))
s($,"kB","hW",()=>A.a8(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"kE","hZ",()=>A.a8(A.dP(void 0)))
s($,"kF","i_",()=>A.a8(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"kD","hY",()=>A.a8(A.h2(null)))
s($,"kC","hX",()=>A.a8(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"kH","i1",()=>A.a8(A.h2(void 0)))
s($,"kG","i0",()=>A.a8(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"kI","fC",()=>A.iL())
s($,"kJ","d_",()=>A.eP(B.V))
s($,"kw","fB",()=>{A.iF()
return $.dA})})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.aM,SharedArrayBuffer:A.aM,ArrayBufferView:A.br,DataView:A.cq,Float32Array:A.cr,Float64Array:A.cs,Int16Array:A.ct,Int32Array:A.cu,Int8Array:A.cv,Uint16Array:A.cw,Uint32Array:A.cx,Uint8ClampedArray:A.bs,CanvasPixelArray:A.bs,Uint8Array:A.cy})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.aN.$nativeSuperclassTag="ArrayBufferView"
A.bJ.$nativeSuperclassTag="ArrayBufferView"
A.bK.$nativeSuperclassTag="ArrayBufferView"
A.bp.$nativeSuperclassTag="ArrayBufferView"
A.bL.$nativeSuperclassTag="ArrayBufferView"
A.bM.$nativeSuperclassTag="ArrayBufferView"
A.bq.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$1$1=function(a){return this(a)}
Function.prototype.$2$1=function(a){return this(a)}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$2$0=function(){return this()}
Function.prototype.$1$0=function(){return this()}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q){s[q].removeEventListener("load",onLoad,false)}a(b.target)}for(var r=0;r<s.length;++r){s[r].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var s=A.ki
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()